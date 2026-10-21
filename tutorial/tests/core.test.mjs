import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { loadCurriculum } from '../tools/load-content.mjs';

const require = createRequire(import.meta.url);
const { parseDay, pick, filterDepth, nextUndoneDay, makeStore, contentPath } = require('../assets/core.js');

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
