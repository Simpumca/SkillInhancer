import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { loadDay, loadCurriculum } from './load-content.mjs';

const LANGS = ['en', 'hi', 'hg'];
const DEVANAGARI = /[ऀ-ॿ]/;
const isStr = v => typeof v === 'string' && v.length > 0;
const isObj = v => v && typeof v === 'object' && !Array.isArray(v);

function checkScript(lang, text, label, errors) {
  if (lang === 'hi' && !DEVANAGARI.test(text)) errors.push(`${label}: hi has no Devanagari`);
  if (lang === 'hg' && DEVANAGARI.test(text)) errors.push(`${label}: hg contains Devanagari`);
}

// L = {en,hi,hg}
function checkL(v, label, errors) {
  if (!isObj(v)) { errors.push(`${label}: missing`); return; }
  for (const k of LANGS) {
    if (!isStr(v[k])) errors.push(`${label}: missing ${k}`);
    else checkScript(k, v[k], label, errors);
  }
}

// M = {hi,hg}
function checkM(v, label, errors) {
  if (!isObj(v)) { errors.push(`${label}: missing`); return; }
  for (const k of ['hi', 'hg']) {
    if (!isStr(v[k])) errors.push(`${label}: missing ${k}`);
    else checkScript(k, v[k], label, errors);
  }
}

function checkCode(list, label, errors) {
  if (list === undefined) return;
  if (!Array.isArray(list)) { errors.push(`${label}: code must be an array`); return; }
  list.forEach((c, i) => {
    const l = `${label}.code[${i}]`;
    checkL(c.caption, `${l}.caption`, errors);
    if (!isStr(c.src)) errors.push(`${l}: missing src`);
    if (!['compile', 'run', 'none'].includes(c.check)) errors.push(`${l}: bad check`);
  });
}

function checkDepth(item, label, errors) {
  if (!['short', 'detailed'].includes(item.depth)) errors.push(`${label}: bad depth`);
}

function checkUnique(items, name, errors) {
  const seen = new Set();
  for (const it of items) {
    if (!isStr(it.id)) { errors.push(`${name}: missing id`); continue; }
    if (seen.has(it.id)) errors.push(`${name}: duplicate id ${it.id}`);
    seen.add(it.id);
  }
}

function arrayOrError(v, name, errors) {
  if (Array.isArray(v)) return v;
  errors.push(`${name}: must be an array`);
  return [];
}

export function validateDay(day, opts = {}) {
  const { minShortQa = 8, minQa = 15, maxQa = 25, minPuzzles = 0 } = opts;
  const errors = [];
  if (!isObj(day)) return ['day: not an object'];

  if (!Number.isInteger(day.day) || day.day < 1 || day.day > 30) errors.push('day: must be integer 1..30');
  checkL(day.title, 'title', errors);
  checkL(day.summary, 'summary', errors);
  if (day.whatsNew !== undefined) checkL(day.whatsNew, 'whatsNew', errors);

  const sections = arrayOrError(day.sections, 'sections', errors);
  checkUnique(sections, 'sections', errors);
  sections.forEach((s, i) => {
    checkDepth(s, `sections[${i}]`, errors);
    checkL(s.title, `sections[${i}].title`, errors);
    checkL(s.body, `sections[${i}].body`, errors);
    checkCode(s.code, `sections[${i}]`, errors);
  });

  const qa = arrayOrError(day.qa, 'qa', errors);
  checkUnique(qa, 'qa', errors);
  qa.forEach((q, i) => {
    const l = `qa[${i}]`;
    checkDepth(q, l, errors);
    if (!isStr(q.q)) errors.push(`${l}: missing q`);
    if (!isStr(q.answer)) errors.push(`${l}: missing answer`);
    checkM(q.meaning, `${l}.meaning`, errors);
    checkL(q.explain, `${l}.explain`, errors);
    checkCode(q.code, l, errors);
  });
  const shortCount = qa.filter(q => q.depth === 'short').length;
  if (shortCount < minShortQa) errors.push(`qa: short count ${shortCount} < ${minShortQa}`);
  if (qa.length < minQa) errors.push(`qa: total ${qa.length} < ${minQa}`);
  if (qa.length > maxQa) errors.push(`qa: total ${qa.length} > ${maxQa}`);

  const puzzles = arrayOrError(day.puzzles, 'puzzles', errors);
  checkUnique(puzzles, 'puzzles', errors);
  puzzles.forEach((p, i) => {
    const l = `puzzles[${i}]`;
    if (!isStr(p.src)) errors.push(`${l}: missing src`);
    if (typeof p.answer !== 'string') errors.push(`${l}: missing answer`);
    checkL(p.explain, `${l}.explain`, errors);
  });
  if (puzzles.length < minPuzzles) errors.push(`puzzles: ${puzzles.length} < ${minPuzzles}`);

  const r = day.revision;
  if (!isObj(r) || !Array.isArray(r.en) || !isObj(r.meaning)) {
    errors.push('revision: malformed');
  } else {
    for (const k of ['hi', 'hg']) {
      const arr = r.meaning[k];
      if (!Array.isArray(arr)) { errors.push(`revision: meaning.${k} missing`); continue; }
      if (arr.length !== r.en.length) errors.push(`revision: meaning.${k} length mismatch`);
      arr.forEach(t => checkScript(k, String(t), 'revision.meaning', errors));
    }
  }
  return errors;
}

export function validateCurriculum(c) {
  const errors = [];
  if (!Array.isArray(c) || c.length !== 30) return ['curriculum: expected 30 entries'];
  c.forEach((e, i) => {
    if (e.day !== i + 1) errors.push(`curriculum[${i}]: day should be ${i + 1}`);
    if (!Number.isInteger(e.week)) errors.push(`curriculum[${i}]: missing week`);
    if (typeof e.ready !== 'boolean') errors.push(`curriculum[${i}]: missing ready`);
    checkL(e.title, `curriculum[${i}].title`, errors);
  });
  return errors;
}

function main() {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const contentDir = path.join(root, 'content');
  let failed = false;
  const report = (name, errs) => {
    if (errs.length) { failed = true; console.error(`${name}:\n  ` + errs.join('\n  ')); }
    else console.log(`${name}: ok`);
  };
  report('curriculum.js', validateCurriculum(loadCurriculum(path.join(contentDir, 'curriculum.js'))));
  for (const f of readdirSync(contentDir).filter(f => /^day\d+\.js$/.test(f)).sort()) {
    const n = Number(f.match(/\d+/)[0]);
    const minPuzzles = (n >= 1 && n <= 7) || (n >= 9 && n <= 11) ? 5 : 0;
    report(f, validateDay(loadDay(path.join(contentDir, f)), { minPuzzles }));
  }
  process.exit(failed ? 1 : 0);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) main();
