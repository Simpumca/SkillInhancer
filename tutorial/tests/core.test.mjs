import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { loadCurriculum } from '../tools/load-content.mjs';

const require = createRequire(import.meta.url);
const { parseDay, pick, filterDepth, nextUndoneDay, makeStore, contentPath, estimateMinutes, formatMinutes } = require('../assets/core.js');

const cur = loadCurriculum('content/curriculum.js');

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
  assert.deepEqual(parseDay('?d=12', cur), { ok: false, reason: 'not-ready' });
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
  assert.equal(nextUndoneDay(cur, [1, 2, 3, 4, 5, 6, 7]), 7);
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

test('estimateMinutes_visible_words_and_puzzles', () => {
  const day = {
    summary: { en: words(400) },
    sections: [
      { depth: 'short', title: { en: '' }, body: { en: words(1600) } },
      { depth: 'detailed', title: { en: '' }, body: { en: words(9000) }, code: [{ caption: { en: '' }, src: 'var a = 1;' }] }
    ],
    qa: [
      { depth: 'short', q: words(100), answer: words(100), explain: { en: words(1500) } },
      { depth: 'detailed', q: words(100), answer: words(100), explain: { en: words(797) } }
    ],
    puzzles: [{}, {}, {}, {}, {}],
    revision: { en: [words(200), words(100)] }
  };
  // short: 400 + 1600 + 1700 + 300 = 4000 words / 200 wpm = 20 min; puzzles are detailed-only
  assert.equal(estimateMinutes(day, 'short'), 20);
  // detailed: 4000 + 9000 + 4 (code) + 997 = 14001 words = 70 min, + 5 puzzles x 3 min = 85 min
  assert.equal(estimateMinutes(day, 'detailed'), 85);
});

test('estimateMinutes_rounds_to_5_min_with_minimum', () => {
  assert.equal(estimateMinutes({ summary: { en: words(10) } }, 'short'), 5);
  assert.equal(estimateMinutes({ summary: { en: words(1500) } }, 'short'), 10);   // 7.5 min -> 10
  assert.equal(estimateMinutes({ summary: { en: words(1400) } }, 'short'), 5);    // 7 min -> 5
  assert.equal(estimateMinutes({ summary: { en: words(400) }, whatsNew: { en: words(1600) } }, 'short'), 10);
});

test('formatMinutes', () => {
  assert.equal(formatMinutes(20), '20 min');
  assert.equal(formatMinutes(60), '1 h');
  assert.equal(formatMinutes(105), '1 h 45 min');
});
