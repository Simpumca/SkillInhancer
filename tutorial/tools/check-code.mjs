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
    const item = { key: `${prefix}-${k}`, src: c.src, mode: c.check, packages: c.packages || [] };
    if (c.check === 'run' && c.expected !== undefined) item.expected = c.expected;
    out.push(item);
  });
  for (const s of day.sections || []) addCode(`day${pad}-sec-${s.id}`, s.code);
  for (const q of day.qa || []) addCode(`day${pad}-qa-${q.id}`, q.code);
  for (const p of day.puzzles || []) {
    out.push({ key: `day${pad}-puz-${p.id}`, src: p.src, mode: 'run', expected: p.answer, packages: p.packages || [] });
  }
  return out;
}

export const normalize = (s) =>
  s.replace(/\r\n/g, '\n').split('\n').map(l => l.replace(/\s+$/, '')).join('\n').replace(/\s+$/, '');

function csproj(packages) {
  const refs = packages.map(p => `    <PackageReference Include="${p}" Version="9.*" />`).join('\n');
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
${refs ? `  <ItemGroup>\n${refs}\n  </ItemGroup>\n` : ''}</Project>
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

export function checkSnippet(snip) {
  const dir = path.join(SNIPPETS_DIR, snip.key);
  mkdirSync(dir, { recursive: true });
  writeIfChanged(path.join(dir, 'Program.cs'), snip.src);
  writeIfChanged(path.join(dir, 'snippet.csproj'), csproj(snip.packages));
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
  const counts = { PASS: 0, FAIL: 0, SKIP: 0 };
  for (const file of resolveTargets(process.argv.slice(2))) {
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
  process.exit(counts.FAIL ? 1 : 0);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) main();
