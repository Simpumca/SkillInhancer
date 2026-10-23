import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { loadDay } from './load-content.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SNIPPETS_DIR = path.join(ROOT, 'tools', '.snippets');
const ENTRY_STUB = 'static class __Entry { static void Main() {} }\n';
const ENV = { ...process.env, DOTNET_CLI_TELEMETRY_OPTOUT: '1', DOTNET_NOLOGO: '1', DOTNET_SKIP_FIRST_TIME_EXPERIENCE: '1' };

export function collectSnippets(day) {
  const pad = String(day.day).padStart(2, '0');
  const out = [];
  const addCode = (prefix, list) => (list || []).forEach((c, k) => {
    if (c.check === 'none') return;
    const item = { key: `${prefix}-${k}`, lang: c.lang || 'csharp', src: c.src, mode: c.check, packages: c.packages || [], frameworks: c.frameworks || [] };
    if (c.check === 'run' && c.expected !== undefined) item.expected = c.expected;
    out.push(item);
  });
  for (const s of day.sections || []) addCode(`day${pad}-sec-${s.id}`, s.code);
  for (const q of day.qa || []) addCode(`day${pad}-qa-${q.id}`, q.code);
  for (const p of day.puzzles || []) {
    out.push({ key: `day${pad}-puz-${p.id}`, lang: p.lang || 'csharp', src: p.src, mode: 'run', expected: p.answer, packages: p.packages || [], frameworks: p.frameworks || [] });
  }
  return out;
}

export const normalize = (s) =>
  s.replace(/\r\n/g, '\n').split('\n').map(l => l.replace(/\s+$/, '')).join('\n').replace(/\s+$/, '');

const FRAMEWORK_REFS = { aspnetcore: 'Microsoft.AspNetCore.App' };

export function csproj(packages = [], frameworks = []) {
  for (const f of frameworks) if (!FRAMEWORK_REFS[f]) throw new Error(`unknown framework ${f}`);
  const fwRefs = frameworks.map(f => `    <FrameworkReference Include="${FRAMEWORK_REFS[f]}" />`).join('\n');
  const refs = packages.map(p => {
    const [name, version = '9.*'] = p.split('@');
    return `    <PackageReference Include="${name}" Version="${version}" />`;
  }).join('\n');
  return `<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net9.0</TargetFramework>
    <OutputType>Exe</OutputType>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <LangVersion>latest</LangVersion>
    <OutputPath>out/</OutputPath>
    <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
    <GenerateAssemblyInfo>false</GenerateAssemblyInfo>
    <TreatWarningsAsErrors>false</TreatWarningsAsErrors>
  </PropertyGroup>
${fwRefs ? `  <ItemGroup>\n${fwRefs}\n  </ItemGroup>\n` : ''}${refs ? `  <ItemGroup>\n${refs}\n  </ItemGroup>\n` : ''}</Project>
`;
}

// Write only when content changed, so unchanged snippets keep their incremental build.
function writeIfChanged(file, content) {
  if (existsSync(file) && readFileSync(file, 'utf8') === content) return;
  writeFileSync(file, content);
}

function dotnet(args, cwd, timeout = 180000) {
  const r = spawnSync('dotnet', args, { cwd, env: ENV, encoding: 'utf8', timeout });
  const stdout = r.stdout || '', stderr = r.stderr || '';
  return { status: r.status, stdout, stderr, out: stdout + stderr, timedOut: r.error?.code === 'ETIMEDOUT' };
}

const BUILD_ARGS = ['build', '-nologo', '-v', 'q', '--tl:off', '-clp:NoSummary', '-p:UseSharedCompilation=true'];

function firstError(out) {
  const lines = out.split(/\r?\n/);
  const hit = lines.find(l => /error (CS|NU)\d+/.test(l)) || lines.find(l => /\berror\b/i.test(l)) || lines.find(l => l.trim()) || 'unknown error';
  return hit.replace(/\s*\[[^\]]*\.csproj\]\s*$/, '').trim();
}

// Restore failure = an `error NU1xxx` line and no compiler error; NU warnings alone never mean SKIP.
export const isRestoreFailure = (out) => /error NU1\d{3}/.test(out) && !/error CS\d+/.test(out);

// ---- SQL snippets: run on SQL Server LocalDB, one throw-away database per snippet ----
const SQL_SERVER = '(localdb)\\MSSQLLocalDB';
const SQL_UNAVAILABLE = 'sql tooling unavailable';
const sqlcmdExe = () => process.env.TL_SQLCMD || 'sqlcmd';

// Per-process suffix keeps concurrent runs apart; the key part is truncated first, the pid is always kept (max 128 chars).
export const sqlDbName = (key, pid = process.pid) => {
  const suffix = `_${pid}`;
  return `tlsnip_${key}`.replace(/[^A-Za-z0-9]/g, '_').slice(0, 128 - suffix.length) + suffix;
};

function sqlcmd(args, timeout = 60000) {
  const r = spawnSync(sqlcmdExe(), ['-S', SQL_SERVER, ...args], { encoding: 'utf8', timeout });
  const stdout = r.stdout || '', stderr = r.stderr || '';
  return { status: r.status, stdout, stderr, out: stdout + stderr, timedOut: r.error?.code === 'ETIMEDOUT', missing: r.error?.code === 'ENOENT' };
}

// A cold LocalDB instance can make the first probe time out; start it once per run, ignoring any failure.
export function makeLocalDbStarter(run = spawnSync) {
  let done = false;
  return () => {
    if (done) return;
    done = true;
    try { run(process.env.TL_SQLLOCALDB || 'sqllocaldb', ['start', 'MSSQLLocalDB'], { encoding: 'utf8', timeout: 30000 }); } catch { /* ignore */ }
  };
}
const startLocalDb = makeLocalDbStarter();

let sqlAvailable;
function sqlToolingAvailable() {
  if (sqlAvailable === undefined) {
    startLocalDb();
    const p = sqlcmd(['-b', '-Q', 'SELECT 1'], 90000);
    sqlAvailable = !p.missing && !p.timedOut && p.status === 0;
  }
  return sqlAvailable;
}

const sqlError = (out) => {
  const lines = out.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const i = lines.findIndex(l => /^Msg \d+/.test(l));
  if (i >= 0) return lines.slice(i, i + 2).join(' ').replace(/, Server .*?, Line/, ', Line');
  return lines[0] || 'unknown error';
};

export function checkSqlSnippet(snip) {
  if (!sqlToolingAvailable()) return { status: 'SKIP', detail: SQL_UNAVAILABLE };
  const db = sqlDbName(snip.key);
  const dir = path.join(SNIPPETS_DIR, `${snip.key}-sql-${process.pid}`);
  mkdirSync(dir, { recursive: true });
  const file = path.join(dir, 'snippet.sql');
  writeFileSync(file, 'SET NOCOUNT ON;\n' + snip.src);
  try {
    // A leftover database from an interrupted run must not make this snippet fail or pass by accident.
    dropSqlDb(db);
    const c = sqlcmd(['-b', '-Q', `CREATE DATABASE [${db}]`]);
    if (c.status !== 0) return { status: 'FAIL', detail: `create database failed: ${sqlError(c.out)}` };
    const r = sqlcmd(['-d', db, '-b', '-h', '-1', '-W', '-I', '-i', file]);
    if (r.timedOut) return { status: 'FAIL', detail: 'run timed out' };
    if (r.status !== 0) return { status: 'FAIL', detail: `sqlcmd exit ${r.status}: ${sqlError(r.out)}` };
    if (snip.mode !== 'run' || snip.expected === undefined) return { status: 'PASS' };
    const actual = normalize(r.stdout);
    const expected = normalize(snip.expected);
    if (actual !== expected) {
      return { status: 'FAIL', detail: `output mismatch\n    expected: ${JSON.stringify(expected)}\n    actual:   ${JSON.stringify(actual)}` };
    }
    return { status: 'PASS' };
  } finally {
    dropSqlDb(db);
    rmSync(dir, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
}

function dropSqlDb(db) {
  const r = sqlcmd(['-b', '-Q', `IF DB_ID(N'${db}') IS NOT NULL BEGIN ALTER DATABASE [${db}] SET SINGLE_USER WITH ROLLBACK IMMEDIATE; DROP DATABASE [${db}]; END`]);
  if (r.status !== 0 || r.timedOut) console.error(`WARN could not drop ${db}`);
}

// ---- JavaScript snippets: ES module run by node in a throw-away temp dir, no network, hard timeout ----
const jsTimeout = () => Number(process.env.TL_JS_TIMEOUT_MS) || 30000;

function nodeRun(args, cwd, timeout) {
  const r = spawnSync(process.execPath, args, { cwd, encoding: 'utf8', timeout, killSignal: 'SIGKILL' });
  const stdout = r.stdout || '', stderr = r.stderr || '';
  return { status: r.status, stdout, stderr, out: stdout + stderr, timedOut: r.error?.code === 'ETIMEDOUT' };
}

// First useful line of node's error output (the "SyntaxError: ..." / "Error: ..." line).
const jsError = (out) => {
  const lines = out.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  return lines.find(l => /^\w*Error\b/.test(l)) || lines.find(l => /\bError\b/.test(l)) || lines[0] || 'unknown error';
};

export function checkJsSnippet(snip) {
  const dir = path.join(SNIPPETS_DIR, `${snip.key}-js-${process.pid}`);
  mkdirSync(dir, { recursive: true });
  try {
    writeFileSync(path.join(dir, 'snippet.mjs'), snip.src);
    const c = nodeRun(['--check', 'snippet.mjs'], dir, jsTimeout());
    if (c.timedOut) return { status: 'FAIL', detail: 'compile timed out' };
    if (c.status !== 0) return { status: 'FAIL', detail: `syntax check failed: ${jsError(c.stderr || c.stdout)}` };
    if (snip.mode !== 'run') return { status: 'PASS' };
    const r = nodeRun(['snippet.mjs'], dir, jsTimeout());
    if (r.timedOut) return { status: 'FAIL', detail: 'run timed out' };
    if (r.status !== 0) return { status: 'FAIL', detail: `exit code ${r.status}: ${jsError(r.stderr || r.stdout)}` };
    if (snip.expected === undefined) return { status: 'PASS' };
    const actual = normalize(r.stdout);
    const expected = normalize(snip.expected);
    if (actual !== expected) {
      return { status: 'FAIL', detail: `output mismatch\n    expected: ${JSON.stringify(expected)}\n    actual:   ${JSON.stringify(actual)}${r.stderr.trim() ? `\n    stderr:   ${JSON.stringify(r.stderr.trim())}` : ''}` };
    }
    return { status: 'PASS' };
  } finally {
    rmSync(dir, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
}

export function checkSnippet(snip) {
  if (snip.lang === 'sql') return checkSqlSnippet(snip);
  if (snip.lang === 'javascript') return checkJsSnippet(snip);
  const dir = path.join(SNIPPETS_DIR, snip.key);
  mkdirSync(dir, { recursive: true });
  writeIfChanged(path.join(dir, 'Program.cs'), snip.src);
  writeIfChanged(path.join(dir, 'snippet.csproj'), csproj(snip.packages, snip.frameworks || []));
  const entry = path.join(dir, 'Entry.cs');
  if (existsSync(entry)) rmSync(entry); // re-detect each run; a stale stub would clash with top-level statements

  let b = dotnet(BUILD_ARGS, dir);
  if (b.status !== 0 && /\bCS5001\b/.test(b.out)) {
    writeFileSync(entry, ENTRY_STUB);
    b = dotnet(BUILD_ARGS, dir);
  }
  if (b.timedOut) return { status: 'FAIL', detail: 'build timed out' };
  if (b.status !== 0) {
    if (isRestoreFailure(b.out)) return { status: 'SKIP', detail: 'restore failed' };
    return { status: 'FAIL', detail: firstError(b.out) };
  }
  if (snip.mode !== 'run') return { status: 'PASS' };

  const r = dotnet([path.join(dir, 'out', 'snippet.dll')], dir, 60000);
  if (r.timedOut) return { status: 'FAIL', detail: 'run timed out' };
  if (r.status !== 0) return { status: 'FAIL', detail: `exit code ${r.status}: ${firstError(r.stderr || r.stdout)}` };
  if (snip.expected === undefined) return { status: 'PASS' };
  const actual = normalize(r.stdout);
  const expected = normalize(snip.expected);
  if (actual !== expected) {
    return { status: 'FAIL', detail: `output mismatch\n    expected: ${JSON.stringify(expected)}\n    actual:   ${JSON.stringify(actual)}${r.stderr.trim() ? `\n    stderr:   ${JSON.stringify(r.stderr.trim())}` : ''}` };
  }
  return { status: 'PASS' };
}

function resolveTargets(argv) {
  const files = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--file') files.push(path.resolve(argv[++i]));
    else files.push(path.join(ROOT, 'content', `${argv[i].replace(/\.js$/, '')}.js`));
  }
  if (files.length) return files;
  const dir = path.join(ROOT, 'content');
  return readdirSync(dir).filter(f => /^day\d+\.js$/.test(f)).sort().map(f => path.join(dir, f));
}

function main() {
  const argv = process.argv.slice(2);
  const strict = argv.includes('--strict');
  const counts = { PASS: 0, FAIL: 0, SKIP: 0 };
  for (const file of resolveTargets(argv.filter(a => a !== '--strict'))) {
    for (const snip of collectSnippets(loadDay(file))) {
      const t0 = Date.now();
      const res = checkSnippet(snip);
      counts[res.status]++;
      const secs = ((Date.now() - t0) / 1000).toFixed(1);
      const extra = res.status === 'SKIP' ? ` (${res.detail})` : res.detail ? `: ${res.detail}` : '';
      console.log(`${res.status} ${snip.key}${extra} [${secs}s]`);
    }
  }
  console.log(`${counts.PASS} passed, ${counts.FAIL} failed, ${counts.SKIP} skipped`);
  process.exit(counts.FAIL || (strict && counts.SKIP) ? 1 : 0);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) main();
