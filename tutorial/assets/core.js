// Pure helpers shared by the pages and the Node tests.
// UMD: attaches window.TLCore in the browser, module.exports in Node.
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.TLCore = api;
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';

  function findDay(curriculum, day) {
    for (var i = 0; i < curriculum.length; i++) {
      if (curriculum[i].day === day) return curriculum[i];
    }
    return null;
  }

  // "?d=3" -> { ok:true, day:3 }; unknown/garbage -> invalid; known but not ready -> not-ready.
  function parseDay(search, curriculum) {
    var m = /[?&]d=([^&]*)/.exec(search || '');
    var raw = m ? m[1] : '';
    if (!/^\d{1,3}$/.test(raw)) return { ok: false, reason: 'invalid' };
    var day = parseInt(raw, 10);
    var entry = findDay(curriculum, day);
    if (!entry) return { ok: false, reason: 'invalid' };
    if (!entry.ready) return { ok: false, reason: 'not-ready' };
    return { ok: true, day: day };
  }

  // L = { en, hi, hg } -> string in lang, falling back to English.
  function pick(l, lang) {
    if (!l) return '';
    var v = l[lang];
    return v ? v : (l.en || '');
  }

  function filterDepth(items, depth) {
    items = items || [];
    if (depth !== 'short') return items.slice();
    return items.filter(function (it) { return it.depth === 'short'; });
  }

  // First ready day not done; if all ready days are done -> last ready day.
  function nextUndoneDay(curriculum, doneDays) {
    var done = doneDays || [];
    var lastReady = 1;
    for (var i = 0; i < curriculum.length; i++) {
      var c = curriculum[i];
      if (!c.ready) continue;
      if (done.indexOf(c.day) === -1) return c.day;
      lastReady = c.day;
    }
    return lastReady;
  }

  // JSON-valued wrapper around localStorage-like storage. Never throws.
  function makeStore(storage) {
    return {
      get: function (key, fallback) {
        try {
          var raw = storage.getItem(key);
          return raw === null || raw === undefined ? fallback : JSON.parse(raw);
        } catch (e) {
          return fallback;
        }
      },
      set: function (key, value) {
        try { storage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage blocked: ignore */ }
      }
    };
  }

  function contentPath(day) {
    return 'content/day' + (day < 10 ? '0' : '') + day + '.js';
  }

  // Words in authored HTML/code: tags and entities count as spaces.
  function countWords(s) {
    var text = String(s || '').replace(/<[^>]*>/g, ' ').replace(/&[#\w]+;/g, ' ');
    var parts = text.split(/\s+/);
    var n = 0;
    for (var i = 0; i < parts.length; i++) if (parts[i]) n++;
    return n;
  }

  function countCodeLines(src) {
    var parts = String(src || '').split(/\r?\n/);
    var n = 0;
    for (var i = 0; i < parts.length; i++) if (parts[i].trim()) n++;
    return n;
  }

  // Rough study time for one day at a depth, in minutes (rounded to nearest 5, min 5).
  // Prose (visible English text, tags stripped, code excluded) at 150 wpm; code at 6 lines/min.
  // short    = summary + whatsNew (app.js renders it at both depths) + short sections/Q&A + revision.
  // detailed = the DELTA after Short: only detailed sections/Q&A + puzzles (3 min each, plus
  //            their code and explanation).
  // Lesson sections (always depth short): their steps, line notes and focus snippet count in Short,
  // plus 1 min per quiz; their exercises (task, hint, solution, 3 min each) count in the Detailed delta.
  function estimateMinutes(day, depth) {
    var words = 0;
    var codeLines = 0;
    var extra = 0;
    var detailed = depth === 'detailed';
    function add(s) { words += countWords(s); }
    function addCode(list) {
      (list || []).forEach(function (c) { add(pick(c.caption, 'en')); codeLines += countCodeLines(c.src); });
    }
    function items(list) {
      return (list || []).filter(function (it) { return it.depth === (detailed ? 'detailed' : 'short'); });
    }
    if (!detailed) {
      add(pick(day.summary, 'en'));
      add(pick(day.whatsNew, 'en'));
      ((day.revision && day.revision.en) || []).forEach(add);
    } else {
      (day.puzzles || []).forEach(function (p) {
        add(pick(p.explain, 'en')); codeLines += countCodeLines(p.src); extra += 3;
      });
    }
    items(day.sections).forEach(function (s) {
      add(pick(s.title, 'en')); add(pick(s.body, 'en')); addCode(s.code);
      var ls = s.lesson;
      if (!ls) return;
      ['buildsOn', 'what', 'why', 'analogy', 'mistakes', 'whenToUse', 'recap'].forEach(function (k) { add(pick(ls[k], 'en')); });
      (ls.lines || []).forEach(function (n) { add(n.code); add(pick(n.note, 'en')); });
      if (ls.focus) addCode([ls.focus]);
      if (ls.quiz) {
        add(pick(ls.quiz.q, 'en')); add(pick(ls.quiz.explain, 'en'));
        (ls.quiz.options || []).forEach(function (o) { add(pick(o, 'en')); });
        extra += 1;
      }
    });
    if (detailed) {
      (day.sections || []).forEach(function (s) {
        var ex = s.lesson && s.lesson.exercise;
        if (!ex) return;
        add(pick(ex.task, 'en')); add(pick(ex.hint, 'en'));
        if (ex.solution) addCode([ex.solution]);
        extra += 3;
      });
    }
    items(day.qa).forEach(function (q) {
      add(q.q); add(q.answer); add(pick(q.explain, 'en')); addCode(q.code);
    });
    var minutes = words / 150 + codeLines / 6 + extra;
    return Math.max(5, Math.round(minutes / 5) * 5);
  }

  // 20 -> "20 min", 60 -> "1 h", 105 -> "1 h 45 min".
  function formatMinutes(minutes) {
    if (minutes < 60) return minutes + ' min';
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    return h + ' h' + (m ? ' ' + m + ' min' : '');
  }

  // Lesson progress lives in its own key (tl.lessons), separate from tl.done:
  // { "<day>": ["<section id>", ...] }. Anything malformed reads as "nothing done".
  function lessonsDone(map, day) {
    var list = map && typeof map === 'object' && !Array.isArray(map) ? map[String(day)] : null;
    return Array.isArray(list) ? list.filter(function (x) { return typeof x === 'string'; }) : [];
  }

  // Returns a new map with section `id` of `day` marked done or not done (input is not modified).
  function setLessonDone(map, day, id, isDone) {
    var out = {};
    var k;
    if (map && typeof map === 'object' && !Array.isArray(map)) for (k in map) {
      if (Object.prototype.hasOwnProperty.call(map, k)) out[k] = lessonsDone(map, k);
    }
    var list = lessonsDone(map, day).filter(function (x) { return x !== id; });
    if (isDone) list.push(id);
    out[String(day)] = list;
    return out;
  }

  var PRISM_LANG = { csharp: 'csharp', sql: 'sql', yaml: 'yaml', dockerfile: 'docker', bash: 'bash', json: 'json', text: 'none',
    javascript: 'javascript', jsx: 'jsx', tsx: 'tsx', typescript: 'typescript', html: 'markup' };
  function langClass(lang) {
    return 'language-' + (Object.prototype.hasOwnProperty.call(PRISM_LANG, lang) ? PRISM_LANG[lang] : 'csharp');
  }

  return {
    langClass: langClass,
    parseDay: parseDay,
    pick: pick,
    filterDepth: filterDepth,
    nextUndoneDay: nextUndoneDay,
    makeStore: makeStore,
    contentPath: contentPath,
    estimateMinutes: estimateMinutes,
    formatMinutes: formatMinutes,
    lessonsDone: lessonsDone,
    setLessonDone: setLessonDone
  };
});
