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
