import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { loadDay } from '../tools/load-content.mjs';
import { collectSnippets, isRestoreFailure, normalize, csproj, makeLocalDbStarter } from '../tools/check-code.mjs';

const hasDotnet = spawnSync('dotnet', ['--version'], { encoding: 'utf8' }).status === 0;
const runCli = (file) =>
  spawnSync(process.execPath, ['tools/check-code.mjs', '--file', file], { encoding: 'utf8', timeout: 280000 });

test('collect_snippets_keys_modes_and_skips_none', () => {
  const items = collectSnippets(loadDay('tests/fixtures/day-code.js'));
  assert.deepEqual(items.map(i => i.key), ['day99-sec-types-0', 'day99-qa-hello-0', 'day99-puz-sum']);
  assert.deepEqual(items.map(i => i.mode), ['compile', 'run', 'run']);
  assert.equal(items[1].expected, 'hi');
  assert.equal(items[2].expected, '3\nx');
  assert.deepEqual(items[0].packages, []);
  assert.match(items[2].src, /a \+ b/);
});

test('cli_passes_on_good_fixture', (t) => {
  if (!hasDotnet) return t.skip('dotnet not on PATH');
  const r = runCli('tests/fixtures/day-code.js');
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.match(r.stdout, /PASS day99-puz-sum/);
  assert.match(r.stdout, /PASS day99-sec-types-0/);
});

test('cli_fails_on_wrong_puzzle_answer', (t) => {
  if (!hasDotnet) return t.skip('dotnet not on PATH');
  const r = runCli('tests/fixtures/day-code-bad.js');
  assert.equal(r.status, 1, r.stdout + r.stderr);
  assert.match(r.stdout, /FAIL day99-puz-/);
});

test('restore_failure_classifier', () => {
  const warn = 'x.csproj : warning NU1903: Package has a known vulnerability';
  assert.equal(isRestoreFailure(warn + '\nProgram.cs(1,1): error CS0103: nope'), false);
  assert.equal(isRestoreFailure(warn), false);
  assert.equal(isRestoreFailure('x.csproj : error NU1301: Unable to load the service index'), true);
});

test('normalize_crlf_and_trailing_whitespace', () => {
  assert.equal(normalize('a  \r\nb\t\r\n\r\n'), 'a\nb');
  assert.equal(normalize('a\nb'), normalize('a \r\nb  \n'));
});

test('cli_ignores_stderr_in_compare', (t) => {
  if (!hasDotnet) return t.skip('dotnet not on PATH');
  const r = runCli('tests/fixtures/day-code-stderr.js');
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.match(r.stdout, /PASS day99-puz-sum/);
});

test('csproj_frameworks_generates_framework_reference', () => {
  const web = csproj([], ['aspnetcore']);
  assert.match(web, /<FrameworkReference Include="Microsoft\.AspNetCore\.App" \/>/);
  assert.doesNotMatch(csproj([], []), /FrameworkReference/);
  assert.doesNotMatch(csproj(['X.Y']), /FrameworkReference/);
  assert.match(csproj(['Microsoft.AspNetCore.TestHost'], ['aspnetcore']), /PackageReference Include="Microsoft\.AspNetCore\.TestHost" Version="9\.\*"/);
  assert.throws(() => csproj([], ['blazor']), /unknown framework blazor/);
});

test('collect_snippets_carries_frameworks', () => {
  const items = collectSnippets(loadDay('tests/fixtures/day-web.js'));
  assert.deepEqual(items.map(i => i.key), ['day98-sec-web-0', 'day98-puz-status']);
  assert.deepEqual([...items[0].frameworks], ['aspnetcore']);
  assert.deepEqual([...items[1].frameworks], ['aspnetcore']);
  assert.deepEqual([...items[1].packages], ['Microsoft.AspNetCore.TestHost']);
});

test('cli_passes_aspnetcore_testhost_fixture', (t) => {
  if (!hasDotnet) return t.skip('dotnet not on PATH');
  const r = runCli('tests/fixtures/day-web.js');
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.match(r.stdout, /PASS day98-puz-status/);
  assert.match(r.stdout, /PASS day98-sec-web-0/);
});

test('cli_fails_loudly_when_frameworks_missing', (t) => {
  if (!hasDotnet) return t.skip('dotnet not on PATH');
  const r = runCli('tests/fixtures/day-web-noframework.js');
  assert.equal(r.status, 1, r.stdout + r.stderr);
  assert.match(r.stdout, /FAIL day97-puz-status/);
  assert.doesNotMatch(r.stdout, /SKIP/);
});

// Start LocalDB first (a cold instance can time out the first probe); report why SQL tests are skipped.
const sqlProbe = (() => {
  makeLocalDbStarter()();
  const r = spawnSync('sqlcmd', ['-S', '(localdb)\\MSSQLLocalDB', '-b', '-Q', 'SELECT 1'], { encoding: 'utf8', timeout: 90000 });
  if (r.error?.code === 'ENOENT') return { ok: false, reason: 'sqlcmd not found' };
  if (r.error?.code === 'ETIMEDOUT') return { ok: false, reason: 'timeout' };
  if (r.status === 0) return { ok: true, reason: '' };
  const first = ((r.stderr || '') + (r.stdout || '')).split(/\r?\n/).map(l => l.trim()).find(Boolean);
  return { ok: false, reason: first || `exit ${r.status}` };
})();
const hasSql = sqlProbe.ok;
const sqlSkip = `LocalDB/sqlcmd unavailable: ${sqlProbe.reason}`;

test('collect_snippets_carries_lang_default_csharp', () => {
  const sql = collectSnippets(loadDay('tests/fixtures/day-sql.js'));
  assert.deepEqual(sql.map(i => i.key), ['day96-sec-sql-0', 'day96-sec-sql-1', 'day96-puz-sum']);
  assert.deepEqual(sql.map(i => i.lang), ['sql', 'sql', 'sql']);
  const cs = collectSnippets(loadDay('tests/fixtures/day-code.js'));
  assert.ok(cs.every(i => i.lang === 'csharp'));
});

test('csproj_unaffected_by_lang', () => {
  assert.match(csproj([], []), /<TargetFramework>net9\.0<\/TargetFramework>/);
});

test('sql_db_name_sanitised_and_capped', async () => {
  const { sqlDbName } = await import('../tools/check-code.mjs');
  assert.equal(sqlDbName('day18-sec-a.b-0', 4242), 'tlsnip_day18_sec_a_b_0_4242');
  const long = sqlDbName('x'.repeat(300), 4242);
  assert.equal(long.length, 128);
  assert.ok(long.endsWith('_4242'));
  assert.notEqual(sqlDbName('k', 1), sqlDbName('k', 2));
});

test('cli_sql_fixture_passes', (t) => {
  if (!hasSql) return t.skip(sqlSkip);
  const r = runCli('tests/fixtures/day-sql.js');
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.match(r.stdout, /PASS day96-sec-sql-0/);
  assert.match(r.stdout, /PASS day96-sec-sql-1/);
  assert.match(r.stdout, /PASS day96-puz-sum/);
});

test('cli_sql_wrong_expected_and_bad_sql_fail', (t) => {
  if (!hasSql) return t.skip(sqlSkip);
  const r = runCli('tests/fixtures/day-sql-bad.js');
  assert.equal(r.status, 1, r.stdout + r.stderr);
  assert.match(r.stdout, /FAIL day95-sec-sql-0: output mismatch/);
  assert.match(r.stdout, /FAIL day95-sec-sql-1.*Msg 208/);
  assert.match(r.stdout, /FAIL day95-puz-sum/);
  assert.doesNotMatch(r.stderr, /WARN could not drop/);
  // No leftover throw-away database after failing snippets.
  const q = spawnSync('sqlcmd', ['-S', '(localdb)\\MSSQLLocalDB', '-h', '-1', '-W', '-Q',
    "SET NOCOUNT ON; SELECT COUNT(*) FROM sys.databases WHERE name LIKE 'tlsnip[_]day95%'"], { encoding: 'utf8', timeout: 60000 });
  assert.equal(q.stdout.trim(), '0', q.stdout + q.stderr);
});

test('cli_sql_unavailable_skips_and_strict_fails', () => {
  const env = { ...process.env, TL_SQLCMD: 'definitely-not-sqlcmd' };
  const run = (...extra) => spawnSync(process.execPath, ['tools/check-code.mjs', '--file', 'tests/fixtures/day-sql.js', ...extra], { encoding: 'utf8', env, timeout: 60000 });
  const a = run();
  assert.equal(a.status, 0, a.stdout + a.stderr);
  assert.match(a.stdout, /SKIP day96-puz-sum \(sql tooling unavailable\)/);
  assert.doesNotMatch(a.stdout, /FAIL/);
  const b = run('--strict');
  assert.equal(b.status, 1, b.stdout + b.stderr);
  assert.match(b.stdout, /SKIP day96-puz-sum \(sql tooling unavailable\)/);
});

test('csproj_package_versions', () => {
  const t = csproj(['Foo', 'Azure.Identity@1.*', 'Yarp.ReverseProxy@2.3.0']);
  assert.match(t, /<PackageReference Include="Foo" Version="9\.\*" \/>/);
  assert.match(t, /<PackageReference Include="Azure\.Identity" Version="1\.\*" \/>/);
  assert.match(t, /<PackageReference Include="Yarp\.ReverseProxy" Version="2\.3\.0" \/>/);
});

test('localdb_start_attempted_once_and_failure_ignored', async () => {
  const { makeLocalDbStarter } = await import('../tools/check-code.mjs');
  const calls = [];
  const start = makeLocalDbStarter((cmd, args, opts) => { calls.push([cmd, args, opts.timeout]); throw new Error('boom'); });
  start(); start();
  assert.equal(calls.length, 1);
  assert.deepEqual(calls[0][1], ['start', 'MSSQLLocalDB']);
  assert.equal(calls[0][2], 30000);
});

// ---- JavaScript snippets ----
const runJs = (file, env = {}) =>
  spawnSync(process.execPath, ['tools/check-code.mjs', '--file', file], { encoding: 'utf8', timeout: 120000, env: { ...process.env, ...env } });

test('collect_snippets_javascript_lang', () => {
  const items = collectSnippets(loadDay('tests/fixtures/day-js.js'));
  assert.deepEqual(items.map(i => i.key), ['day94-sec-js-0', 'day94-sec-js-1', 'day94-puz-sum']);
  assert.deepEqual(items.map(i => i.lang), ['javascript', 'javascript', 'javascript']);
});

test('cli_javascript_fixture_passes_and_ignores_stderr', () => {
  const r = runJs('tests/fixtures/day-js.js');
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.match(r.stdout, /PASS day94-sec-js-0/);
  assert.match(r.stdout, /PASS day94-sec-js-1/);
  assert.match(r.stdout, /PASS day94-puz-sum/);
});

test('cli_javascript_wrong_expected_syntax_error_and_exit_code_fail', () => {
  const r = runJs('tests/fixtures/day-js-bad.js');
  assert.equal(r.status, 1, r.stdout + r.stderr);
  assert.match(r.stdout, /FAIL day93-sec-js-0: output mismatch/);
  assert.match(r.stdout, /FAIL day93-sec-js-1: .*SyntaxError/);   // compile mode: node --check
  assert.match(r.stdout, /FAIL day93-sec-js-2: .*SyntaxError/);   // run mode
  assert.match(r.stdout, /FAIL day93-sec-js-3: exit code 3/);
  assert.match(r.stdout, /FAIL day93-puz-sum: output mismatch/);
  assert.doesNotMatch(r.stdout, /SKIP/);
});

test('cli_javascript_timeout_fails', () => {
  const r = runJs('tests/fixtures/day-js-timeout.js', { TL_JS_TIMEOUT_MS: '1500' });
  assert.equal(r.status, 1, r.stdout + r.stderr);
  assert.match(r.stdout, /FAIL day92-sec-js-0: run timed out/);
});

test('javascript_temp_dir_cleaned_up', async () => {
  const { existsSync, readdirSync } = await import('node:fs');
  const dir = 'tools/.snippets';
  const leftover = () => (existsSync(dir) ? readdirSync(dir).filter(d => d.includes('-js-')) : []);
  runJs('tests/fixtures/day-js.js');
  assert.deepEqual(leftover(), [], 'after passing fixture');
  runJs('tests/fixtures/day-js-bad.js');
  assert.deepEqual(leftover(), [], 'after failing fixture');
  runJs('tests/fixtures/day-js-timeout.js', { TL_JS_TIMEOUT_MS: '1500' });
  assert.deepEqual(leftover(), [], 'after timeout fixture');
});

// Needs NuGet access; SKIP (restore failed) skips the test instead of failing it.
test('cli_compiles_package_pinned_fixture', (t) => {
  if (!hasDotnet) return t.skip('dotnet not on PATH');
  const r = runCli('tests/fixtures/day-pkg.js');
  if (/SKIP day97-sec-pkg-0 \(restore failed\)/.test(r.stdout)) return t.skip('NuGet unavailable');
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.match(r.stdout, /PASS day97-sec-pkg-0/);
});
