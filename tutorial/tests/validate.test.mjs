import { existsSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadDay, loadCurriculum } from '../tools/load-content.mjs';
import { validateDay } from '../tools/validate.mjs';

const RELAXED = { minShortQa: 1, minQa: 1, maxQa: 25, minPuzzles: 1, minSections: 1, minShortSections: 1, minRevision: 1, maxRevision: 12 };
const good = () => loadDay('tests/fixtures/day-good.js');

function makeQa(n, depth = 'short', prefix = 'q') {
  const base = good().qa[0];
  return Array.from({ length: n }, (_, i) => ({ ...base, id: `${prefix}${i}`, depth }));
}

test('good_fixture_passes', () => {
  assert.deepEqual(validateDay(good(), RELAXED), []);
});

test('bad_fixture_fails', () => {
  assert.ok(validateDay(loadDay('tests/fixtures/day-bad.js'), RELAXED).length > 0);
});

test('missing_language', () => {
  const d = good();
  delete d.summary.hg;
  assert.ok(validateDay(d, RELAXED).includes('summary: missing hg'));
});

test('script_check', () => {
  let d = good();
  d.summary.hi = 'Class is a blueprint';
  assert.ok(validateDay(d, RELAXED).some(e => e.includes('hi has no Devanagari')));
  d = good();
  d.summary.hg = 'Class एक blueprint';
  assert.ok(validateDay(d, RELAXED).some(e => e.includes('hg contains Devanagari')));
  d = good();
  d.qa[0].meaning.hg = 'क्लास';
  assert.ok(validateDay(d, RELAXED).some(e => e.includes('hg contains Devanagari')));
});

test('qa_counts', () => {
  let d = good();
  d.qa = makeQa(7);
  assert.ok(validateDay(d, { minPuzzles: 1 }).includes('qa: short count 7 < 8'));
  d = good();
  d.qa = [...makeQa(10, 'short'), ...makeQa(16, 'detailed', 'd')];
  assert.ok(validateDay(d, { minPuzzles: 1 }).includes('qa: total 26 > 25'));
  d = good();
  d.qa = [...makeQa(8, 'short'), ...makeQa(6, 'detailed', 'd')];
  assert.ok(validateDay(d, { minPuzzles: 1 }).includes('qa: total 14 < 15'));
});

test('puzzle_count', () => {
  const d = good();
  d.puzzles = Array.from({ length: 4 }, (_, i) => ({ ...good().puzzles[0], id: `p${i}` }));
  assert.ok(validateDay(d, { ...RELAXED, minPuzzles: 5 }).includes('puzzles: 4 < 5'));
});

test('revision_lengths', () => {
  const d = good();
  d.revision.meaning.hi = [];
  assert.ok(validateDay(d, RELAXED).includes('revision: meaning.hi length mismatch'));
});

test('duplicate_ids', () => {
  const d = good();
  d.qa = [{ ...d.qa[0], id: 'x' }, { ...d.qa[0], id: 'x' }];
  assert.ok(validateDay(d, RELAXED).includes('qa: duplicate id x'));
});

test('curriculum_has_30', () => {
  const c = loadCurriculum('content/curriculum.js');
  assert.equal(c.length, 30);
  c.forEach((e, i) => {
    assert.equal(e.day, i + 1);
    // ready days must have a content file; days 1-7 are always ready
    if (e.day <= 7) assert.equal(e.ready, true);
    if (e.ready) assert.ok(existsSync('content/day' + String(e.day).padStart(2, '0') + '.js'));
    for (const k of ['en', 'hi', 'hg']) assert.ok(e.title[k] && e.title[k].length > 0);
    assert.ok(/[ऀ-ॿ]/.test(e.title.hi));
    assert.ok(!/[ऀ-ॿ]/.test(e.title.hg));
  });
  assert.equal(c[0].week, 1);
  assert.equal(c[7].week, 2);
  assert.equal(c[14].week, 3);
  assert.equal(c[21].week, 4);
});

const has = (errs, text) => errs.some(e => e.includes(text));

test('sections_count_and_short_count', () => {
  const d = good();
  const strict = { ...RELAXED, minSections: 4, minShortSections: 2 };
  assert.ok(validateDay(d, strict).includes('sections: 1 < 4'));
  assert.ok(validateDay(d, strict).includes('sections: short count 1 < 2'));
  const base = good().sections[0];
  d.sections = ['a', 'b', 'c', 'd'].map(id => ({ ...base, id, depth: id === 'a' ? 'short' : 'detailed' }));
  const errs = validateDay(d, strict);
  assert.ok(!has(errs, 'sections: 4 <'));
  assert.ok(errs.includes('sections: short count 1 < 2'));
});

test('sections_and_revision_defaults_are_strict', () => {
  const errs = validateDay(good(), { minShortQa: 1, minQa: 1, minPuzzles: 1 });
  assert.ok(errs.includes('sections: 1 < 4'));
  assert.ok(errs.includes('sections: short count 1 < 2'));
  assert.ok(errs.includes('revision: 1 not in 8..12'));
});

test('revision_range', () => {
  const d = good();
  const o = { ...RELAXED, minRevision: 8, maxRevision: 12 };
  assert.ok(validateDay(d, o).includes('revision: 1 not in 8..12'));
  const mk = n => Array.from({ length: n }, () => 'x');
  const set = n => { d.revision = { en: mk(n), meaning: { hi: mk(n).map(() => 'क'), hg: mk(n) } }; };
  set(8); assert.ok(!has(validateDay(d, o), 'not in 8..12'));
  set(12); assert.ok(!has(validateDay(d, o), 'not in 8..12'));
  set(10); assert.ok(!has(validateDay(d, o), 'not in 8..12'));
  set(13); assert.ok(validateDay(d, o).includes('revision: 13 not in 8..12'));
});

test('run_snippet_needs_expected', () => {
  let d = good();
  delete d.sections[0].code[0].expected;
  assert.ok(validateDay(d, RELAXED).includes('sections[0].code[0]: run snippet without expected'));
  d = good();
  d.qa[0].code = [{ ...good().sections[0].code[0], expected: undefined }];
  assert.ok(validateDay(d, RELAXED).includes('qa[0].code[0]: run snippet without expected'));
  d = good();
  d.sections[0].code[0].expected = '';   // empty expected output is legitimate
  assert.ok(!has(validateDay(d, RELAXED), 'without expected'));
});

test('devanagari_in_english_fields', () => {
  let d = good();
  d.qa[0].answer = 'Abstract class में state';
  assert.ok(validateDay(d, RELAXED).includes('qa[0].answer: contains Devanagari'));
  d = good();
  d.revision.en[0] = 'क्लास';
  assert.ok(validateDay(d, RELAXED).includes('revision.en[0]: contains Devanagari'));
});

test('null_items_do_not_throw', () => {
  const d = good();
  d.sections = [null, 5, { ...good().sections[0], id: 'z', code: [null] }];
  d.qa = [null];
  d.puzzles = [undefined];
  let errs;
  assert.doesNotThrow(() => { errs = validateDay(d, RELAXED); });
  assert.ok(errs.includes('sections[0]: not an object'));
  assert.ok(errs.includes('sections[1]: not an object'));
  assert.ok(errs.includes('qa[0]: not an object'));
  assert.ok(errs.includes('puzzles[0]: not an object'));
  assert.ok(errs.includes('sections[2].code[0]: not an object'));
});

test('frameworks_validation', () => {
  let d = good();
  d.sections[0].code[0].frameworks = ['aspnetcore'];
  d.puzzles[0].frameworks = ['aspnetcore'];
  assert.deepEqual(validateDay(d, RELAXED), []);
  d = good();
  d.sections[0].code[0].frameworks = ['blazor'];
  assert.ok(validateDay(d, RELAXED).includes('sections[0].code[0]: unknown framework blazor'));
  d = good();
  d.puzzles[0].frameworks = ['wpf'];
  assert.ok(validateDay(d, RELAXED).includes('puzzles[0]: unknown framework wpf'));
  d = good();
  d.qa[0].code = [{ ...good().sections[0].code[0], frameworks: 'aspnetcore' }];
  assert.ok(validateDay(d, RELAXED).includes('qa[0].code[0]: frameworks must be an array of strings'));
  d = good();
  d.puzzles[0].frameworks = [1];
  assert.ok(validateDay(d, RELAXED).includes('puzzles[0]: frameworks must be an array of strings'));
});

test('filename_day_mismatch', async () => {
  const { validateContentFile } = await import('../tools/validate.mjs');
  const errs = validateContentFile('tests/fixtures/day-good.js', 7, RELAXED);
  assert.ok(errs.includes('day: file 07 != day.day 1'));
  assert.ok(!validateContentFile('tests/fixtures/day-good.js', 1, RELAXED).some(e => e.startsWith('day: file')));
});

test('min_puzzles_for_days_1_to_14', async () => {
  const { minPuzzlesFor } = await import('../tools/validate.mjs');
  for (let n = 1; n <= 14; n++) assert.equal(minPuzzlesFor(n), 5, `day ${n}`);
  assert.equal(minPuzzlesFor(15), 0);
});
