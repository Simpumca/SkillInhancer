import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadDay, loadCurriculum } from '../tools/load-content.mjs';
import { validateDay } from '../tools/validate.mjs';

const RELAXED = { minShortQa: 1, minQa: 1, maxQa: 25, minPuzzles: 1 };
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
    assert.equal(e.ready, e.day <= 7);
    for (const k of ['en', 'hi', 'hg']) assert.ok(e.title[k] && e.title[k].length > 0);
    assert.ok(/[ऀ-ॿ]/.test(e.title.hi));
    assert.ok(!/[ऀ-ॿ]/.test(e.title.hg));
  });
  assert.equal(c[0].week, 1);
  assert.equal(c[7].week, 2);
  assert.equal(c[14].week, 3);
  assert.equal(c[21].week, 4);
});
