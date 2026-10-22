import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { loadCurriculum, loadDay } from '../tools/load-content.mjs';

const require = createRequire(import.meta.url);
const { parseDay, pick, filterDepth, nextUndoneDay, makeStore, contentPath, estimateMinutes, formatMinutes } = require('../assets/core.js');

const cur = loadCurriculum('content/curriculum.js');
const readyDays = cur.filter(c => c.ready).map(c => c.day);
const lastReady = readyDays[readyDays.length - 1];
const firstNotReady = cur.find(c => !c.ready).day;

test('parseDay_valid', () => {
  assert.deepEqual(parseDay('?d=3', cur), { ok: true, day: 3 });
});

test('parseDay_invalid', () => {
  assert.deepEqual(parseDay('?d=99', cur), { ok: false, reason: 'invalid' });
  assert.deepEqual(parseDay('?d=abc', cur), { ok: false, reason: 'invalid' });
  assert.deepEqual(parseDay('', cur), { ok: false, reason: 'invalid' });
  assert.deepEqual(parseDay('?d=0', cur), { ok: false, reason: 'invalid' });
  assert.deepEqual(parseDay('?d=3.5', cur), { ok: false, reason: 'invalid' });
});

test('parseDay_not_ready', () => {
  assert.deepEqual(parseDay('?d=' + firstNotReady, cur), { ok: false, reason: 'not-ready' });
});

test('pick_language_and_fallback', () => {
  assert.equal(pick({ en: 'A', hi: 'B', hg: 'C' }, 'hg'), 'C');
  assert.equal(pick({ en: 'A' }, 'hi'), 'A');
});

test('filterDepth', () => {
  const items = [
    { depth: 'short' }, { depth: 'detailed' }, { depth: 'short' },
    { depth: 'detailed' }, { depth: 'detailed' }
  ];
  assert.equal(filterDepth(items, 'short').length, 2);
  assert.equal(filterDepth(items, 'detailed').length, 5);
});

test('nextUndoneDay', () => {
  assert.equal(nextUndoneDay(cur, [1, 2]), 3);
  assert.equal(nextUndoneDay(cur, readyDays), lastReady);
});

test('storage_throws_falls_back', () => {
  const store = makeStore({ getItem() { throw 1; }, setItem() { throw 1; } });
  assert.equal(store.get('tl.lang', 'en'), 'en');
  assert.doesNotThrow(() => store.set('tl.lang', 'hi'));
});

test('store_roundtrip_json', () => {
  const mem = {};
  const store = makeStore({ getItem: k => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = String(v); } });
  assert.deepEqual(store.get('tl.done', []), []);
  store.set('tl.done', [1, 3]);
  assert.deepEqual(store.get('tl.done', []), [1, 3]);
});

test('contentPath', () => {
  assert.equal(contentPath(3), 'content/day03.js');
  assert.equal(contentPath(12), 'content/day12.js');
});

// n plain words, wrapped in HTML so tag stripping is exercised.
const words = n => '<p>' + Array(n).fill('word').join(' ') + '</p>';
// n code lines; many words per line so a word-based count would be obviously wrong.
const lines = n => Array(n).fill('var   a   =   b   +   c   +   d;').join('\n');

test('estimateMinutes_prose_plus_code_lines_short_and_detailed_delta', () => {
  const day = {
    summary: { en: words(300) },
    sections: [
      { depth: 'short', title: { en: '' }, body: { en: words(1200) }, code: [{ caption: { en: '' }, src: lines(30) }] },
      { depth: 'detailed', title: { en: '' }, body: { en: words(3000) }, code: [{ caption: { en: '' }, src: lines(60) }] }
    ],
    qa: [
      { depth: 'short', q: words(100), answer: words(100), explain: { en: words(1000) } },
      { depth: 'detailed', q: words(100), answer: words(100), explain: { en: words(800) }, code: [{ caption: { en: '' }, src: lines(12) }] }
    ],
    puzzles: [1, 2, 3, 4, 5].map(() => ({ src: lines(6), explain: { en: words(100) } })),
    revision: { en: [words(200), words(100)] },
    whatsNew: { en: words(300) }
  };
  // short: prose 300 + 1200 + 1200 + 300 = 3000 words / 150 = 20 min, + 30 code lines / 6 = 5 -> 25
  assert.equal(estimateMinutes(day, 'short'), 25);
  // detailed delta only (no summary/short items/revision):
  // prose 3000 + 1000 + 500 (puzzle explain) + 300 (whatsNew) = 4800 / 150 = 32;
  // code (60 + 12 + 30 puzzle lines) / 6 = 17; puzzles 5 x 3 = 15 -> 64 -> 65
  assert.equal(estimateMinutes(day, 'detailed'), 65);
});

test('estimateMinutes_code_lines_count_not_words_and_blank_lines_ignored', () => {
  const code = lines(60) + '\n\n\n';
  const day = { summary: { en: '' }, sections: [{ depth: 'short', title: { en: '' }, body: { en: '' }, code: [{ caption: { en: '' }, src: code }] }] };
  assert.equal(estimateMinutes(day, 'short'), 10);   // 60 lines / 6
});

test('estimateMinutes_rounds_to_5_min_with_minimum', () => {
  assert.equal(estimateMinutes({ summary: { en: words(10) } }, 'short'), 5);
  assert.equal(estimateMinutes({ summary: { en: words(1125) } }, 'short'), 10);   // 7.5 min -> 10
  assert.equal(estimateMinutes({ summary: { en: words(1050) } }, 'short'), 5);    // 7 min -> 5
  assert.equal(estimateMinutes({ summary: { en: words(100) } }, 'detailed'), 5);  // empty delta -> min 5
});

test('estimateMinutes_ready_days_are_sane', () => {
  for (const d of readyDays) {
    const day = loadDay('content/day' + String(d).padStart(2, '0') + '.js');
    const s = estimateMinutes(day, 'short');
    const x = estimateMinutes(day, 'detailed');
    assert.ok(s >= 5 && x >= 5 && s % 5 === 0 && x % 5 === 0, 'day ' + d);
  }
});

test('formatMinutes', () => {
  assert.equal(formatMinutes(20), '20 min');
  assert.equal(formatMinutes(60), '1 h');
  assert.equal(formatMinutes(105), '1 h 45 min');
});
