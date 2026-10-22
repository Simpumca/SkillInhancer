import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { loadDay } from '../tools/load-content.mjs';
import { collectSnippets, isRestoreFailure, normalize, csproj } from '../tools/check-code.mjs';

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

const hasSql = (() => {
  const r = spawnSync('sqlcmd', ['-S', '(localdb)\\MSSQLLocalDB', '-b', '-Q', 'SELECT 1'], { encoding: 'utf8', timeout: 90000 });
  return r.status === 0;
})();

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
  if (!hasSql) return t.skip('LocalDB/sqlcmd unavailable');
  const r = runCli('tests/fixtures/day-sql.js');
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.match(r.stdout, /PASS day96-sec-sql-0/);
  assert.match(r.stdout, /PASS day96-sec-sql-1/);
  assert.match(r.stdout, /PASS day96-puz-sum/);
});

test('cli_sql_wrong_expected_and_bad_sql_fail', (t) => {
  if (!hasSql) return t.skip('LocalDB/sqlcmd unavailable');
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
