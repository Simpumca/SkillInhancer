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

test('min_puzzles_for_days_1_to_30', async () => {
  const { minPuzzlesFor } = await import('../tools/validate.mjs');
  for (let n = 1; n <= 30; n++) assert.equal(minPuzzlesFor(n), n === 28 ? 3 : 5, `day ${n}`);
  assert.equal(minPuzzlesFor(31), 0);
  assert.equal(minPuzzlesFor(0), 0);
});

test('raw_generic_tag_in_html_field_is_error', () => {
  const d = good();
  d.qa[0].answer = 'Inject ILogger<T> into the class.';
  const errs = validateDay(d, RELAXED);
  assert.ok(errs.includes('qa[0].answer: raw tag <T> (escape as &lt;T&gt;)'), errs.join('\n'));
});

test('escaped_generic_and_allowed_tags_ok', () => {
  const d = good();
  d.qa[0].answer = 'Use Lazy&lt;T&gt; and <code>x</code> with <b>bold</b><br>';
  assert.deepEqual(validateDay(d, RELAXED), []);
});

test('raw_generic_in_code_src_is_ok', () => {
  const d = good();
  d.qa[0].code = [{ caption: d.summary, src: 'ILogger<T> log;', check: 'none' }];
  assert.deepEqual(validateDay(d, RELAXED), []);
});

test('lang_unknown_is_error', () => {
  const d = good();
  d.qa[0].code = [{ caption: d.summary, src: 'x', check: 'none', lang: 'cobol' }];
  assert.ok(validateDay(d, RELAXED).includes('qa[0].code[0]: unknown lang cobol'));
});

test('lang_non_checkable_must_be_check_none', () => {
  const d = good();
  d.qa[0].code = [{ caption: d.summary, src: 'a: 1', check: 'compile', lang: 'yaml' }];
  assert.ok(validateDay(d, RELAXED).includes('qa[0].code[0]: lang yaml must use check:"none"'));
  d.qa[0].code = [{ caption: d.summary, src: 'a: 1', check: 'none', lang: 'yaml' }];
  assert.deepEqual(validateDay(d, RELAXED), []);
});

test('lang_sql_and_csharp_may_be_checked', () => {
  const d = good();
  d.qa[0].code = [
    { caption: d.summary, src: 'SELECT 1;', check: 'run', expected: '1', lang: 'sql' },
    { caption: d.summary, src: 'int a;', check: 'compile', lang: 'csharp' }
  ];
  assert.deepEqual(validateDay(d, RELAXED), []);
});

test('puzzle_lang_must_be_csharp_or_sql', () => {
  const d = good();
  d.puzzles[0].lang = 'bash';
  assert.ok(validateDay(d, RELAXED).includes('puzzles[0]: puzzle lang bash must be csharp, sql or javascript'));
  d.puzzles[0].lang = 'sql';
  assert.deepEqual(validateDay(d, RELAXED), []);
  d.puzzles[0].lang = 'nope';
  assert.ok(validateDay(d, RELAXED).includes('puzzles[0]: unknown lang nope'));
});

test('raw_tags_scanned_in_caption_puzzle_explain_revision_meaning_title', () => {
  const d = good();
  d.title.en = 'A <T> title';
  d.qa[0].code = [{ caption: { ...d.summary, hg: 'cap <T>' }, src: 'x', check: 'none' }];
  d.puzzles[0].explain.en = 'e <T>';
  d.revision.meaning.hg[0] = 'm <T>';
  const errs = validateDay(d, RELAXED).join('\n');
  for (const p of ['title.en', 'qa[0].code[0].caption.hg', 'puzzles[0].explain.en', 'revision.meaning.hg[0]']) {
    assert.ok(errs.includes(`${p}: raw tag <T>`), p + '\n' + errs);
  }
});

test('curriculum_titles_scanned_for_raw_tags', async () => {
  const { validateCurriculum } = await import('../tools/validate.mjs');
  const c = structuredClone(loadCurriculum('content/curriculum.js'));
  assert.deepEqual(validateCurriculum(c), []);
  c[3].title.en = 'Bad <T> title';
  assert.ok(validateCurriculum(c).includes('curriculum[3].title.en: raw tag <T> (escape as &lt;T&gt;)'));
});

test('packages_spec_validation', () => {
  let d = good();
  d.sections[0].code[0].packages = ['Foo', 'Azure.Identity@1.*', 'Yarp.ReverseProxy@2.3.0', 'OpenTelemetry.Extensions.Hosting@1.*'];
  d.puzzles[0].packages = ['Foo@1.0.0-beta.1'];
  assert.deepEqual(validateDay(d, RELAXED), []);
  d = good();
  d.sections[0].code[0].packages = ['Foo@'];
  assert.ok(validateDay(d, RELAXED).includes('sections[0].code[0]: bad package spec Foo@'));
  d = good();
  d.puzzles[0].packages = ['Foo bar'];
  assert.ok(validateDay(d, RELAXED).includes('puzzles[0]: bad package spec Foo bar'));
});

test('lang_javascript_checkable_and_display_only_langs', () => {
  const d = good();
  d.qa[0].code = [
    { caption: d.summary, src: 'console.log(1);', check: 'run', expected: '1', lang: 'javascript' },
    { caption: d.summary, src: 'let a = 1;', check: 'compile', lang: 'javascript' },
    ...['jsx', 'tsx', 'typescript', 'html'].map(lang => ({ caption: d.summary, src: 'x', check: 'none', lang }))
  ];
  assert.deepEqual(validateDay(d, RELAXED), []);
  for (const lang of ['jsx', 'tsx', 'typescript', 'html']) {
    d.qa[0].code = [{ caption: d.summary, src: 'x', check: 'run', expected: 'x', lang }];
    assert.ok(validateDay(d, RELAXED).includes(`qa[0].code[0]: lang ${lang} must use check:"none"`), lang);
  }
});

test('puzzle_lang_javascript_ok_jsx_rejected', () => {
  const d = good();
  d.puzzles[0].lang = 'javascript';
  assert.deepEqual(validateDay(d, RELAXED), []);
  d.puzzles[0].lang = 'jsx';
  assert.ok(validateDay(d, RELAXED).includes('puzzles[0]: puzzle lang jsx must be csharp, sql or javascript'));
});

test('packages_and_frameworks_only_on_csharp_items', () => {
  let d = good();
  d.sections[0].code[0] = { ...d.sections[0].code[0], lang: 'sql', packages: ['Foo'], frameworks: ['aspnetcore'] };
  let errs = validateDay(d, RELAXED);
  assert.ok(errs.includes('sections[0].code[0]: packages only allowed for lang csharp'), errs.join('\n'));
  assert.ok(errs.includes('sections[0].code[0]: frameworks only allowed for lang csharp'), errs.join('\n'));
  d = good();
  d.puzzles[0].lang = 'javascript';
  d.puzzles[0].packages = ['Foo'];
  d.puzzles[0].frameworks = ['aspnetcore'];
  errs = validateDay(d, RELAXED);
  assert.ok(errs.includes('puzzles[0]: packages only allowed for lang csharp'));
  assert.ok(errs.includes('puzzles[0]: frameworks only allowed for lang csharp'));
  d = good();
  d.puzzles[0].lang = 'csharp';
  d.puzzles[0].packages = ['Foo'];
  assert.deepEqual(validateDay(d, RELAXED), []);
});

// ---- Lesson format (format: "lesson", sections[].lesson) ----
const lessonDay = () => { const d = loadDay('tests/fixtures/day-lesson.js'); d.day = 1; return d; };
const lessonErrs = d => validateDay(d, RELAXED);

test('lesson_fixture_passes', () => {
  assert.deepEqual(lessonErrs(lessonDay()), []);
});

test('lesson_needs_lesson_format', () => {
  const d = lessonDay();
  delete d.format;
  assert.ok(lessonErrs(d).includes('sections[0].lesson: only allowed when format is "lesson"'));
  const e = lessonDay();
  e.format = 'book';
  assert.ok(lessonErrs(e).includes('format: unknown book'));
  const f = lessonDay();
  f.sections.forEach(s => delete s.lesson);
  f.sections.forEach(s => { s.body = s.body || { en: 'x', hi: 'क', hg: 'x' }; });
  assert.ok(lessonErrs(f).includes('format: lesson day has no lesson sections'));
});

test('lesson_required_steps_and_languages', () => {
  let d = lessonDay();
  delete d.sections[0].lesson.analogy;
  assert.ok(lessonErrs(d).includes('sections[0].lesson.analogy: missing'));
  d = lessonDay();
  d.sections[0].lesson.recap.hi = 'Class = blueprint';
  assert.ok(lessonErrs(d).some(e => e === 'sections[0].lesson.recap: hi has no Devanagari'));
  d = lessonDay();
  delete d.sections[0].lesson.exercise;
  assert.ok(lessonErrs(d).includes('sections[0].lesson.exercise: missing'));
  d = lessonDay();
  d.sections[0].depth = 'detailed';
  assert.ok(lessonErrs(d).includes('sections[0].lesson: lesson sections must be depth short'));
});

test('lesson_builds_on_required_after_first', () => {
  const d = lessonDay();
  delete d.sections[1].lesson.buildsOn;
  assert.ok(lessonErrs(d).includes('sections[1].lesson.buildsOn: missing (required after the first lesson)'));
});

test('lesson_quiz_shape', () => {
  let d = lessonDay();
  d.sections[0].lesson.quiz.answer = 2;
  assert.ok(lessonErrs(d).includes('sections[0].lesson.quiz.answer: must be an option index 0..1'));
  d = lessonDay();
  d.sections[0].lesson.quiz.options = [d.sections[0].lesson.quiz.options[0]];
  assert.ok(lessonErrs(d).includes('sections[0].lesson.quiz.options: need 2..5 options'));
});

test('lesson_example_and_line_notes', () => {
  let d = lessonDay();
  d.sections[0].lesson.lines[0].code = 'Console.WriteLine("missing");';
  assert.ok(lessonErrs(d).some(e => e.startsWith('sections[0].lesson.lines[0]: code not found in code[0]')));
  d = lessonDay();
  d.sections[0].code[0].check = 'compile';
  assert.ok(lessonErrs(d).includes('sections[0].code[0]: lesson needs a complete example with check "run"'));
  d = lessonDay();
  d.sections[0].lesson.exercise.solution.check = 'none';
  assert.ok(lessonErrs(d).includes('sections[0].lesson.exercise.solution: must be checked (compile or run)'));
});

test('lesson_fields_raw_tags_rejected', () => {
  const d = lessonDay();
  d.sections[0].lesson.quiz.options[1].en = 'List<T>';
  assert.ok(lessonErrs(d).some(e => e.startsWith('sections[0].lesson.quiz.options[1].en: raw tag <T>')));
});
