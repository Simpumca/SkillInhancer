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

  return {
    parseDay: parseDay,
    pick: pick,
    filterDepth: filterDepth,
    nextUndoneDay: nextUndoneDay,
    makeStore: makeStore,
    contentPath: contentPath
  };
});
