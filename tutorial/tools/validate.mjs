import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { loadDay, loadCurriculum } from './load-content.mjs';

const LANGS = ['en', 'hi', 'hg'];
const DEVANAGARI = /[ऀ-ॿ]/;
const isStr = v => typeof v === 'string' && v.length > 0;
const isObj = v => v && typeof v === 'object' && !Array.isArray(v);
const FRAMEWORKS = ['aspnetcore'];

export const minPuzzlesFor = n => (n >= 1 && n <= 14 ? 5 : 0);

// frameworks?: string[] of known values; shared by code items and puzzles.
function checkFrameworks(item, label, errors) {
  if (item.frameworks === undefined) return;
  const f = item.frameworks;
  if (!Array.isArray(f) || !f.every(x => typeof x === 'string')) {
    errors.push(`${label}: frameworks must be an array of strings`);
    return;
  }
  for (const x of f) if (!FRAMEWORKS.includes(x)) errors.push(`${label}: unknown framework ${x}`);
}

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
    if (!isObj(c)) { errors.push(`${l}: not an object`); return; }
    checkL(c.caption, `${l}.caption`, errors);
    if (!isStr(c.src)) errors.push(`${l}: missing src`);
    if (!['compile', 'run', 'none'].includes(c.check)) errors.push(`${l}: bad check`);
    if (c.check === 'run' && typeof c.expected !== 'string') errors.push(`${l}: run snippet without expected`);
    checkFrameworks(c, l, errors);
  });
}

function checkDepth(item, label, errors) {
  if (!['short', 'detailed'].includes(item.depth)) errors.push(`${label}: bad depth`);
}

function checkUnique(items, name, errors) {
  const seen = new Set();
  for (const it of items) {
    if (!isObj(it)) continue;
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

export const ALLOWED_TAGS = ['b', 'i', 'code', 'ul', 'ol', 'li', 'br', 'p', 'strong', 'em', 'pre', 'span', 'a',
  'table', 'tr', 'td', 'th', 'thead', 'tbody', 'sup', 'sub', 'small', 'kbd', 'div'];
// Matches anything that looks like a tag: <name ...>, </name>, <name/>. Text like "a < b" has no match.
export const TAG_RE = /<\/?([A-Za-z_][\w.]*)[^<>]*>/g;

// Returns [{path, value}] for every field app.js renders via innerHTML (not code src/expected or puzzle answer).
export function htmlFields(day) {
  const out = [];
  if (!isObj(day)) return out;
  const add = (v, p) => { if (typeof v === 'string') out.push({ path: p, value: v }); };
  const addL = (v, p) => { if (isObj(v)) for (const k of LANGS) add(v[k], `${p}.${k}`); };
  const addCode = (list, p) => { if (Array.isArray(list)) list.forEach((c, i) => { if (isObj(c)) addL(c.caption, `${p}.code[${i}].caption`); }); };
  addL(day.title, 'title');
  addL(day.summary, 'summary');
  addL(day.whatsNew, 'whatsNew');
  if (Array.isArray(day.sections)) day.sections.forEach((s, i) => {
    if (!isObj(s)) return;
    addL(s.title, `sections[${i}].title`);
    addL(s.body, `sections[${i}].body`);
    addCode(s.code, `sections[${i}]`);
  });
  if (Array.isArray(day.qa)) day.qa.forEach((q, i) => {
    if (!isObj(q)) return;
    const l = `qa[${i}]`;
    add(q.q, `${l}.q`);
    add(q.answer, `${l}.answer`);
    if (isObj(q.meaning)) for (const k of ['hi', 'hg']) add(q.meaning[k], `${l}.meaning.${k}`);
    addL(q.explain, `${l}.explain`);
    addCode(q.code, l);
  });
  if (Array.isArray(day.puzzles)) day.puzzles.forEach((p, i) => { if (isObj(p)) addL(p.explain, `puzzles[${i}].explain`); });
  if (isObj(day.revision)) {
    if (Array.isArray(day.revision.en)) day.revision.en.forEach((t, i) => add(t, `revision.en[${i}]`));
    if (isObj(day.revision.meaning)) for (const k of ['hi', 'hg']) {
      if (Array.isArray(day.revision.meaning[k])) day.revision.meaning[k].forEach((t, i) => add(t, `revision.meaning.${k}[${i}]`));
    }
  }
  return out;
}

// Raw tags (full match text) in an HTML field whose name is not allowed.
export function rawTags(value) {
  const bad = [];
  for (const m of value.matchAll(TAG_RE)) if (!ALLOWED_TAGS.includes(m[1].toLowerCase())) bad.push(m[0]);
  return bad;
}

function checkRawTags(day, errors) {
  for (const { path: p, value } of htmlFields(day)) {
    for (const t of rawTags(value)) errors.push(`${p}: raw tag ${t} (escape as ${t.replace(/</g, '&lt;').replace(/>/g, '&gt;')})`);
  }
}

export function validateDay(day, opts = {}) {
  const { minShortQa = 8, minQa = 15, maxQa = 25, minPuzzles = 0,
    minSections = 4, minShortSections = 2, minRevision = 8, maxRevision = 12 } = opts;
  const errors = [];
  if (!isObj(day)) return ['day: not an object'];

  if (!Number.isInteger(day.day) || day.day < 1 || day.day > 30) errors.push('day: must be integer 1..30');
  checkL(day.title, 'title', errors);
  checkL(day.summary, 'summary', errors);
  if (day.whatsNew !== undefined) checkL(day.whatsNew, 'whatsNew', errors);

  const sections = arrayOrError(day.sections, 'sections', errors);
  checkUnique(sections, 'sections', errors);
  sections.forEach((s, i) => {
    if (!isObj(s)) { errors.push(`sections[${i}]: not an object`); return; }
    checkDepth(s, `sections[${i}]`, errors);
    checkL(s.title, `sections[${i}].title`, errors);
    checkL(s.body, `sections[${i}].body`, errors);
    checkCode(s.code, `sections[${i}]`, errors);
  });

  if (sections.length < minSections) errors.push(`sections: ${sections.length} < ${minSections}`);
  const shortSections = sections.filter(s => isObj(s) && s.depth === 'short').length;
  if (shortSections < minShortSections) errors.push(`sections: short count ${shortSections} < ${minShortSections}`);

  const qa = arrayOrError(day.qa, 'qa', errors);
  checkUnique(qa, 'qa', errors);
  qa.forEach((q, i) => {
    const l = `qa[${i}]`;
    if (!isObj(q)) { errors.push(`${l}: not an object`); return; }
    checkDepth(q, l, errors);
    if (!isStr(q.q)) errors.push(`${l}: missing q`);
    if (!isStr(q.answer)) errors.push(`${l}: missing answer`);
    else if (DEVANAGARI.test(q.answer)) errors.push(`${l}.answer: contains Devanagari`);
    checkM(q.meaning, `${l}.meaning`, errors);
    checkL(q.explain, `${l}.explain`, errors);
    checkCode(q.code, l, errors);
  });
  const shortCount = qa.filter(q => isObj(q) && q.depth === 'short').length;
  if (shortCount < minShortQa) errors.push(`qa: short count ${shortCount} < ${minShortQa}`);
  if (qa.length < minQa) errors.push(`qa: total ${qa.length} < ${minQa}`);
  if (qa.length > maxQa) errors.push(`qa: total ${qa.length} > ${maxQa}`);

  const puzzles = arrayOrError(day.puzzles, 'puzzles', errors);
  checkUnique(puzzles, 'puzzles', errors);
  puzzles.forEach((p, i) => {
    const l = `puzzles[${i}]`;
    if (!isObj(p)) { errors.push(`${l}: not an object`); return; }
    checkFrameworks(p, l, errors);
    if (!isStr(p.src)) errors.push(`${l}: missing src`);
    if (typeof p.answer !== 'string') errors.push(`${l}: missing answer`);
    checkL(p.explain, `${l}.explain`, errors);
  });
  if (puzzles.length < minPuzzles) errors.push(`puzzles: ${puzzles.length} < ${minPuzzles}`);

  const r = day.revision;
  if (!isObj(r) || !Array.isArray(r.en) || !isObj(r.meaning)) {
    errors.push('revision: malformed');
  } else {
    if (r.en.length < minRevision || r.en.length > maxRevision) errors.push(`revision: ${r.en.length} not in ${minRevision}..${maxRevision}`);
    r.en.forEach((t, i) => { if (DEVANAGARI.test(String(t))) errors.push(`revision.en[${i}]: contains Devanagari`); });
    for (const k of ['hi', 'hg']) {
      const arr = r.meaning[k];
      if (!Array.isArray(arr)) { errors.push(`revision: meaning.${k} missing`); continue; }
      if (arr.length !== r.en.length) errors.push(`revision: meaning.${k} length mismatch`);
      arr.forEach(t => checkScript(k, String(t), 'revision.meaning', errors));
    }
  }
  checkRawTags(day, errors);
  return errors;
}

export function validateCurriculum(c) {
  const errors = [];
  if (!Array.isArray(c) || c.length !== 30) return ['curriculum: expected 30 entries'];
  c.forEach((e, i) => {
    if (!isObj(e)) { errors.push(`curriculum[${i}]: not an object`); return; }
    if (e.day !== i + 1) errors.push(`curriculum[${i}]: day should be ${i + 1}`);
    if (!Number.isInteger(e.week)) errors.push(`curriculum[${i}]: missing week`);
    if (typeof e.ready !== 'boolean') errors.push(`curriculum[${i}]: missing ready`);
    checkL(e.title, `curriculum[${i}].title`, errors);
  });
  return errors;
}

// Validates a content file and cross-checks its dayNN filename against day.day.
export function validateContentFile(file, fileDay, opts = {}) {
  const day = loadDay(file);
  const errs = validateDay(day, opts);
  if (isObj(day) && day.day !== fileDay) errs.unshift(`day: file ${String(fileDay).padStart(2, '0')} != day.day ${day.day}`);
  return errs;
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
    report(f, validateContentFile(path.join(contentDir, f), n, { minPuzzles: minPuzzlesFor(n) }));
  }
  process.exit(failed ? 1 : 0);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) main();
