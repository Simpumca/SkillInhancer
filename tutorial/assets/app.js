// Page controller for index.html (home dashboard) and day.html (topic page).
// Depends on window.TLCore (core.js) and window.TL_CURRICULUM (content/curriculum.js).
(function () {
  'use strict';

  var C = window.TLCore;
  var CUR = window.TL_CURRICULUM || [];
  var LANGS = ['en', 'hi', 'hg'];
  var DEPTHS = ['short', 'detailed'];
  var APP_TITLE = 'TL Prep — .NET Tech Lead in 30 Days';

  // ---------- UI labels (chrome only; content comes from content/*.js) ----------
  var T = {
    en: {
      plan: '30-day plan', today: 'Today ▶', progress: '{done}/{total} days done',
      howTitle: 'How to use',
      howText: 'Read <b>Short</b> first (~15–25 min) and answer its questions aloud. In <b>Detailed</b>, skip what you already read, then pick the questions you got wrong plus ~5 puzzles. Treat the rest as reference to revisit. Each day page shows a time estimate for the chosen depth.',
      week: 'Week', soon: 'Coming soon', day: 'Day',
      prev: '◀ Prev', next: 'Next ▶', home: '🏠 Home', short: 'Short', detailed: 'Detailed',
      estimate: '⏱ ≈ {time} for this depth',
      estimateDetailed: '⏱ ≈ {time} more after Short',
      summary: '⚡ 2-minute summary', learn: '📘 Concept & code', whatsNew: '🆕 What’s new in recent versions',
      qa: '❓ Interview Q&A', showAnswer: 'Show answer ▼', meaning: '',
      puzzles: '🧩 Puzzles', puzzle: 'Puzzle', whatPrint: 'What will this print?',
      revision: '📝 Last-minute revision', markDone: 'Mark day as done ✓', isDone: 'Day done ✓ — click to undo',
      extra: 'detailed',
      moreHint: '<b>Detailed</b> mode adds {list}.',
      more: { s: ['{n} section', '{n} sections'], q: ['{n} question', '{n} questions'], p: ['{n} puzzle', '{n} puzzles'] },
      loading: 'Loading…',
      notFoundTitle: 'Day not found', notFoundText: 'This link does not match any day of the 30-day plan.',
      notReadyTitle: 'Coming in Phase 2', notReadyText: 'Day {n} is not written yet. Finish the ready days first!',
      missingTitle: 'Content file missing', missingText: 'Could not load <code>{file}</code>. Check that it exists in the <code>content</code> folder.',
      errorTitle: 'Content file has an error', errorText: '<code>{file}</code> loaded but did not set up this day (a JavaScript error or a wrong <code>day</code> number). Run <code>node tools/validate.mjs</code> to find it.',
      backHome: '🏠 Back to Home',
      copy: 'Copy', copyLabel: 'Copy code', copied: 'Copied ✓', copyFail: 'Copy failed — select the code manually'
    },
    hi: {
      plan: '30 दिन का प्लान', today: 'आज का दिन ▶', progress: '{total} में से {done} दिन पूरे',
      howTitle: 'कैसे पढ़ें',
      howText: 'पहले <b>Short</b> पढ़ो (~15–25 min) और उसके सवालों के जवाब बोलकर दो। <b>Detailed</b> में जो पहले पढ़ चुके हो उसे छोड़ दो, फिर जिन सवालों में ग़लती हुई वो और ~5 पहेलियाँ चुनो। बाक़ी को reference मानो और बाद में दोबारा देखो। हर दिन के page पर चुनी हुई depth का time estimate दिखता है।',
      week: 'हफ़्ता', soon: 'जल्द आ रहा है', day: 'दिन',
      prev: '◀ पिछला', next: 'अगला ▶', home: '🏠 होम', short: 'Short', detailed: 'Detailed',
      estimate: '⏱ इस depth के लिए ≈ {time}',
      estimateDetailed: '⏱ Short के बाद ≈ {time} और',
      summary: '⚡ 2 मिनट में सार', learn: '📘 कॉन्सेप्ट और कोड', whatsNew: '🆕 हाल के versions में नया क्या है',
      qa: '❓ इंटरव्यू सवाल-जवाब', showAnswer: 'जवाब देखो ▼', meaning: 'मतलब:',
      puzzles: '🧩 पहेलियाँ', puzzle: 'पहेली', whatPrint: 'यह क्या print करेगा?',
      revision: '📝 आख़िरी मिनट रिवीज़न', markDone: 'दिन पूरा हुआ ✓', isDone: 'दिन पूरा ✓ — वापस लेने के लिए क्लिक करो',
      extra: 'detailed',
      moreHint: '<b>Detailed</b> में और भी है: {list}।',
      more: { s: ['{n} section', '{n} sections'], q: ['{n} सवाल', '{n} सवाल'], p: ['{n} पहेली', '{n} पहेलियाँ'] },
      loading: 'लोड हो रहा है…',
      notFoundTitle: 'यह दिन नहीं मिला', notFoundText: 'यह लिंक 30 दिन के प्लान के किसी दिन से मेल नहीं खाता।',
      notReadyTitle: 'Phase 2 में आएगा', notReadyText: 'दिन {n} अभी लिखा नहीं गया है। पहले तैयार दिन पूरे करो!',
      missingTitle: 'कंटेंट फ़ाइल नहीं मिली', missingText: '<code>{file}</code> लोड नहीं हुई। देखो कि फ़ाइल <code>content</code> फ़ोल्डर में है।',
      errorTitle: 'कंटेंट फ़ाइल में गड़बड़ है', errorText: '<code>{file}</code> लोड हुई पर इस दिन का data नहीं बना (JavaScript error या ग़लत <code>day</code> number)। ढूँढने के लिए <code>node tools/validate.mjs</code> चलाओ।',
      backHome: '🏠 होम पर वापस',
      copy: 'कॉपी', copyLabel: 'कोड कॉपी करो', copied: 'कॉपी हो गया ✓', copyFail: 'कॉपी नहीं हुआ — कोड ख़ुद select करो'
    },
    hg: {
      plan: '30 din ka plan', today: 'Aaj ka din ▶', progress: '{total} mein se {done} din poore',
      howTitle: 'Kaise padhein',
      howText: 'Pehle <b>Short</b> padho (~15–25 min) aur uske questions ke answers bolkar do. <b>Detailed</b> mein jo pehle padh chuke ho use chhod do, phir jin questions mein galti hui woh aur ~5 puzzles chuno. Baaki ko reference maano aur baad mein dobara dekho. Har din ke page par chuni hui depth ka time estimate dikhta hai.',
      week: 'Week', soon: 'Jaldi aa raha hai', day: 'Day',
      prev: '◀ Pichla', next: 'Agla ▶', home: '🏠 Home', short: 'Short', detailed: 'Detailed',
      estimate: '⏱ Is depth ke liye ≈ {time}',
      estimateDetailed: '⏱ Short ke baad ≈ {time} aur',
      summary: '⚡ 2 minute mein summary', learn: '📘 Concept aur code', whatsNew: '🆕 Haal ke versions mein naya kya hai',
      qa: '❓ Interview sawaal-jawaab', showAnswer: 'Jawaab dekho ▼', meaning: 'Matlab:',
      puzzles: '🧩 Puzzles', puzzle: 'Puzzle', whatPrint: 'Ye kya print karega?',
      revision: '📝 Last-minute revision', markDone: 'Din poora hua ✓', isDone: 'Din poora ✓ — undo ke liye click karo',
      extra: 'detailed',
      moreHint: '<b>Detailed</b> mein aur bhi hai: {list}.',
      more: { s: ['{n} section', '{n} sections'], q: ['{n} question', '{n} questions'], p: ['{n} puzzle', '{n} puzzles'] },
      loading: 'Load ho raha hai…',
      notFoundTitle: 'Ye din nahi mila', notFoundText: 'Ye link 30 din ke plan ke kisi din se match nahi karta.',
      notReadyTitle: 'Phase 2 mein aayega', notReadyText: 'Day {n} abhi likha nahi gaya hai. Pehle ready din poore karo!',
      missingTitle: 'Content file nahi mili', missingText: '<code>{file}</code> load nahi hui. Check karo ki file <code>content</code> folder mein hai.',
      errorTitle: 'Content file mein gadbad hai', errorText: '<code>{file}</code> load hui par is din ka data nahi bana (JavaScript error ya galat <code>day</code> number). Dhoondhne ke liye <code>node tools/validate.mjs</code> chalao.',
      backHome: '🏠 Home par wapas',
      copy: 'Copy', copyLabel: 'Code copy karo', copied: 'Copy ho gaya ✓', copyFail: 'Copy nahi hua — code khud select karo'
    }
  };

  // ---------- Preferences (localStorage may be blocked: store never throws) ----------
  function safeStorage() {
    try { return window.localStorage; } catch (e) { return null; }
  }
  var store = C.makeStore(safeStorage() || { getItem: function () { return null; }, setItem: function () {} });

  function oneOf(v, list, fallback) { return list.indexOf(v) === -1 ? fallback : v; }
  var lang = oneOf(store.get('tl.lang', 'en'), LANGS, 'en');
  var depth = oneOf(store.get('tl.depth', 'short'), DEPTHS, 'short');

  function doneDays() {
    var d = store.get('tl.done', []);
    return Array.isArray(d) ? d.filter(function (n) { return typeof n === 'number'; }) : [];
  }
  function setDone(day, isDone) {
    var d = doneDays().filter(function (n) { return n !== day; });
    if (isDone) d.push(day);
    d.sort(function (a, b) { return a - b; });
    store.set('tl.done', d);
  }

  function t(key, vars) {
    var s = T[lang][key] !== undefined ? T[lang][key] : T.en[key];
    if (vars) s = s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k]; });
    return s;
  }

  // ---------- Tiny DOM builder ----------
  // props: html (trusted authored HTML), text, on<event>, or any attribute.
  function h(tag, props, kids) {
    var n = document.createElement(tag);
    var k;
    for (k in props || {}) {
      var v = props[k];
      if (v === null || v === undefined || v === false) continue;
      if (k === 'html') n.innerHTML = v;
      else if (k === 'text') n.textContent = v;
      else if (k.slice(0, 2) === 'on') n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    (kids || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return n;
  }

  function seg(label, options, current, onPick) {
    return h('div', { 'class': 'seg', role: 'group', 'aria-label': label }, options.map(function (o) {
      return h('button', {
        type: 'button', 'aria-pressed': String(o.value === current),
        onclick: function () { if (o.value !== current) onPick(o.value); }
      }, [o.label]);
    }));
  }

  function langSwitch(rerender) {
    return seg('Language', [
      { value: 'en', label: 'EN' }, { value: 'hi', label: 'हिंदी' }, { value: 'hg', label: 'Hinglish' }
    ], lang, function (v) { lang = v; store.set('tl.lang', v); applyLang(); rerender(); });
  }

  function depthSwitch(rerender) {
    return seg('Depth', [
      { value: 'short', label: t('short') }, { value: 'detailed', label: t('detailed') }
    ], depth, function (v) { depth = v; store.set('tl.depth', v); rerender(); });
  }

  function applyLang() {
    document.documentElement.lang = lang === 'hg' ? 'hi-Latn' : lang;
  }

  function mount(nodes) {
    var app = document.getElementById('app');
    app.textContent = '';
    nodes.forEach(function (n) { if (n) app.appendChild(n); });
  }

  function findDay(n) {
    for (var i = 0; i < CUR.length; i++) if (CUR[i].day === n) return CUR[i];
    return null;
  }

  // ---------- Home ----------
  function renderHome() {
    document.title = APP_TITLE;
    var done = doneDays();
    var ready = CUR.filter(function (c) { return c.ready; });
    var doneReady = ready.filter(function (c) { return done.indexOf(c.day) !== -1; }).length;
    var pct = ready.length ? Math.round(doneReady * 100 / ready.length) : 0;

    var hero = h('header', { 'class': 'hero' }, [
      h('div', { 'class': 'hero-top' }, [h('span', { 'class': 'eyebrow', text: t('plan') }), langSwitch(renderHome)]),
      h('h1', { text: APP_TITLE }),
      h('div', { 'class': 'progress-row' }, [
        h('div', { 'class': 'progress' }, [
          h('div', { 'class': 'progress-label', text: t('progress', { done: doneReady, total: ready.length }) }),
          h('div', { 'class': 'bar', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(ready.length), 'aria-valuenow': String(doneReady) },
            [h('span', { style: 'width:' + pct + '%' })])
        ]),
        h('a', { 'class': 'btn btn-primary', href: 'day.html?d=' + C.nextUndoneDay(CUR, done), text: t('today') })
      ])
    ]);

    var note = h('aside', { 'class': 'note' }, [h('b', { 'class': 'note-title', text: t('howTitle') }), h('span', { html: t('howText') })]);

    var weeks = h('div', { 'class': 'weeks' }, [1, 2, 3, 4].map(function (w) {
      var days = CUR.filter(function (c) { return c.week === w; });
      var wReady = days.filter(function (c) { return c.ready; });
      var wDone = wReady.filter(function (c) { return done.indexOf(c.day) !== -1; }).length;
      return h('section', { 'class': 'week' }, [
        h('div', { 'class': 'week-head' }, [
          h('h2', { text: t('week') + ' ' + w }),
          wReady.length ? h('span', { 'class': 'week-count', text: wDone + '/' + wReady.length }) : null
        ]),
        h('ul', { 'class': 'days' }, days.map(function (c) {
          var isDone = done.indexOf(c.day) !== -1;
          var num = h('span', { 'class': 'day-num', text: String(c.day) });
          var title = h('span', { 'class': 'day-title', html: C.pick(c.title, lang) });
          if (!c.ready) {
            return h('li', null, [h('span', { 'class': 'day-soon', 'aria-disabled': 'true' },
              [num, title, h('span', { 'class': 'soon', text: t('soon') })])]);
          }
          return h('li', { 'class': isDone ? 'is-done' : null }, [h('a', { 'class': 'day-link', href: 'day.html?d=' + c.day },
            [num, title, isDone ? h('span', { 'class': 'day-check', 'aria-label': 'done', text: '✓' }) : null])]);
        }))
      ]);
    }));

    mount([h('div', { 'class': 'wrap' }, [hero, note, weeks])]);
  }

  // ---------- Day page ----------
  var dayNum = 0;
  var dayData = null;   // window.TL_DAY once loaded
  var dayState = 'loading'; // loading | ready | missing | error

  function messageCard(title, text) {
    return h('div', { 'class': 'wrap' }, [h('div', { 'class': 'card message' }, [
      h('h1', { text: title }), h('p', { html: text }),
      h('a', { 'class': 'btn btn-primary', href: 'index.html', text: t('backHome') })
    ])]);
  }

  function navLink(n, label) {
    var c = findDay(n);
    var ok = c && c.ready;
    return h('a', { 'class': 'btn', href: ok ? 'day.html?d=' + n : null, 'aria-disabled': ok ? null : 'true', html: label });
  }

  function topbar() {
    var c = findDay(dayNum);
    var title = dayData ? dayData.title : c.title;
    return h('nav', { 'class': 'topbar' }, [h('div', { 'class': 'topbar-inner' }, [
      h('div', { 'class': 'nav' }, [
        navLink(dayNum - 1, t('prev')),
        h('span', { 'class': 'day-name', html: t('day') + ' ' + dayNum + ': ' + C.pick(title, lang) }),
        navLink(dayNum + 1, t('next'))
      ]),
      h('div', { 'class': 'controls' }, [
        langSwitch(renderDay), depthSwitch(renderDay),
        h('a', { 'class': 'btn', href: 'index.html', text: t('home') })
      ])
    ])]);
  }

  // ---------- Copy to clipboard ----------
  // navigator.clipboard needs a secure context (and can be denied); fall back to execCommand.
  function copyText(text) {
    function fallback() {
      var ta = h('textarea', { readonly: '', 'aria-hidden': 'true', style: 'position:fixed;top:-1000px;left:0;opacity:0' });
      ta.value = text;
      document.body.appendChild(ta);
      var active = document.activeElement;
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (active && active.focus) active.focus();
      return ok;
    }
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, fallback);
    }
    return Promise.resolve(fallback());
  }

  // Visible text stays short ("Copy"); aria-label names the action; the status span announces the result.
  function copyButton(src) {
    var status = h('span', { 'class': 'sr-only', role: 'status' });
    var timer = null;
    var btn = h('button', {
      type: 'button', 'class': 'copy-btn', 'aria-label': t('copyLabel'), text: t('copy'),
      onclick: function () {
        copyText(src).then(function (ok) {
          var msg = ok ? t('copied') : t('copyFail');
          btn.textContent = ok ? t('copied') : t('copy');
          status.textContent = msg;
          clearTimeout(timer);
          timer = setTimeout(function () { btn.textContent = t('copy'); status.textContent = ''; }, 2000);
        });
      }
    });
    return h('span', { 'class': 'copy-wrap' }, [btn, status]);
  }

  function codeFigure(code) {
    return h('figure', { 'class': 'code' }, [
      h('figcaption', { 'class': 'code-head' }, [
        h('span', { html: code.caption ? '💻 ' + C.pick(code.caption, lang) : '' }),
        copyButton(code.src)
      ]),
      h('pre', null, [h('code', { 'class': C.langClass(code.lang), text: code.src })])
    ]);
  }

  function meaningLine(text) {
    if (lang === 'en' || !text) return null;
    return h('div', { 'class': 'meaning' }, [h('span', { 'class': 'label', text: t('meaning') }), h('span', { html: text })]);
  }

  function block(title, kids) {
    return h('section', { 'class': 'block' }, [h('h2', { html: title })].concat(kids));
  }

  function renderDayContent(d) {
    var sections = C.filterDepth(d.sections, depth);
    var qa = C.filterDepth(d.qa, depth);
    var puzzles = depth === 'detailed' ? (d.puzzles || []) : [];
    var c = findDay(dayNum);
    var out = [];

    out.push(h('header', { 'class': 'day-head' }, [
      h('span', { 'class': 'eyebrow', text: t('day') + ' ' + dayNum + ' · ' + t('week') + ' ' + c.week }),
      h('h1', { html: C.pick(d.title, lang) }),
      h('p', { 'class': 'estimate', text: t(depth === 'detailed' ? 'estimateDetailed' : 'estimate', { time: C.formatMinutes(C.estimateMinutes(d, depth)) }) })
    ]));

    out.push(block(t('summary'), [h('div', { 'class': 'card summary', html: C.pick(d.summary, lang) })]));

    if (sections.length) {
      out.push(block(t('learn'), sections.map(function (s) {
        return h('article', { 'class': 'card', id: 's-' + s.id }, [
          h('h3', null, [h('span', { html: C.pick(s.title, lang) }),
            s.depth === 'detailed' ? h('span', { 'class': 'tag', text: t('extra') }) : null]),
          h('div', { html: C.pick(s.body, lang) })
        ].concat((s.code || []).map(codeFigure)));
      })));
    }

    if (d.whatsNew) out.push(block(t('whatsNew'), [h('div', { 'class': 'card', html: C.pick(d.whatsNew, lang) })]));

    if (qa.length) {
      out.push(block(t('qa') + ' <span class="tag">' + qa.length + '</span>', qa.map(function (q, i) {
        return h('div', { 'class': 'qa', id: 'q-' + q.id }, [
          h('p', { 'class': 'qa-q' }, [h('span', { 'class': 'num', text: (i + 1) + '.' }), h('span', { html: q.q })]),
          h('details', null, [
            h('summary', { text: t('showAnswer') }),
            h('div', { 'class': 'qa-body' }, [
              h('div', { 'class': 'answer', html: q.answer }),
              meaningLine(q.meaning && q.meaning[lang]),
              h('div', { 'class': 'explain', html: C.pick(q.explain, lang) })
            ].concat((q.code || []).map(codeFigure)))
          ])
        ]);
      })));
    }

    if (depth === 'short') {
      var hidden = {
        s: (d.sections || []).length - sections.length,
        q: (d.qa || []).length - qa.length,
        p: (d.puzzles || []).length
      };
      var forms = T[lang].more;
      var parts = ['s', 'q', 'p'].filter(function (k) { return hidden[k] > 0; }).map(function (k) {
        return forms[k][hidden[k] === 1 ? 0 : 1].replace('{n}', hidden[k]);
      });
      if (parts.length) out.push(h('p', { 'class': 'hint', html: t('moreHint', { list: parts.join(', ') }) }));
    }

    if (puzzles.length) {
      out.push(block(t('puzzles'), puzzles.map(function (p, i) {
        return h('article', { 'class': 'card puzzle', id: 'p-' + p.id }, [
          h('div', { 'class': 'code-head' }, [
            h('h3', { text: t('puzzle') + ' ' + (i + 1) }),
            copyButton(p.src)
          ]),
          h('pre', null, [h('code', { 'class': C.langClass(p.lang), text: p.src })]),
          h('p', { 'class': 'prompt', text: t('whatPrint') }),
          h('details', null, [
            h('summary', { text: t('showAnswer') }),
            h('pre', null, [h('code', { text: p.answer })]),
            h('div', { 'class': 'explain', html: C.pick(p.explain, lang) })
          ])
        ]);
      })));
    }

    var rev = d.revision || { en: [], meaning: {} };
    var revMeaning = (rev.meaning && rev.meaning[lang]) || [];
    out.push(block(t('revision'), [h('div', { 'class': 'revision' }, [h('ul', null, rev.en.map(function (line, i) {
      return h('li', null, [h('span', { html: line }), meaningLine(revMeaning[i])]);
    }))])]));

    var isDone = doneDays().indexOf(dayNum) !== -1;
    var doneBtn = h('button', {
      type: 'button', 'class': 'btn btn-done', 'aria-pressed': String(isDone), text: isDone ? t('isDone') : t('markDone'),
      onclick: function () {
        isDone = !isDone;
        setDone(dayNum, isDone);
        doneBtn.setAttribute('aria-pressed', String(isDone));
        doneBtn.textContent = isDone ? t('isDone') : t('markDone');
      }
    });
    out.push(h('div', { 'class': 'done-row' }, [doneBtn]));

    return h('main', { 'class': 'wrap day' }, out);
  }

  function highlight() {
    if (window.Prism && typeof window.Prism.highlightAllUnder === 'function') {
      try { window.Prism.highlightAllUnder(document.getElementById('app')); } catch (e) { /* plain code is fine */ }
    }
  }

  // ---------- Keep open answers and scroll position across re-renders (language/depth switch) ----------
  // Items are the cards with a stable id: s-<section>, q-<question>, p-<puzzle>.
  var openState = {};   // item id -> its <details> open?  (kept for items hidden at the current depth)

  function dayItems() {
    return Array.prototype.slice.call(document.querySelectorAll('#app main.day [id]'));
  }

  function topLimit() {
    var bar = document.querySelector('#app .topbar');
    return bar ? Math.max(0, bar.getBoundingClientRect().bottom) : 0;
  }

  // Remembers open <details> and the topmost visible item (+ the items above it, as fallbacks
  // when that item is not shown at the new depth).
  function captureView() {
    var items = dayItems();
    if (!items.length) return null;
    items.forEach(function (el) {
      var d = el.querySelector('details');
      if (d) openState[el.id] = d.open;
    });
    if (window.scrollY < 1) return { anchor: null };
    var limit = topLimit();
    for (var i = 0; i < items.length; i++) {
      var r = items[i].getBoundingClientRect();
      if (r.bottom > limit) {
        return { anchor: items[i].id, offset: r.top, fallback: items.slice(0, i).reverse().map(function (el) { return el.id; }) };
      }
    }
    return { anchor: null };
  }

  function restoreView(view) {
    dayItems().forEach(function (el) {
      var d = el.querySelector('details');
      if (d && openState[el.id]) d.open = true;
    });
    if (!view || !view.anchor) return;
    var ids = [view.anchor].concat(view.fallback);
    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      if (!el) continue;
      var want = i === 0 ? view.offset : topLimit();
      window.scrollBy(0, el.getBoundingClientRect().top - want);
      return;
    }
  }

  function renderDay() {
    var title = dayData ? dayData.title : findDay(dayNum).title;
    document.title = t('day') + ' ' + dayNum + ': ' + C.pick(title, lang).replace(/<[^>]*>/g, '') + ' · TL Prep';
    var view = captureView();
    var body;
    var file = C.contentPath(dayNum);
    if (dayState === 'ready') body = renderDayContent(dayData);
    else if (dayState === 'missing') body = messageCard(t('missingTitle'), t('missingText', { file: file }));
    else if (dayState === 'error') body = messageCard(t('errorTitle'), t('errorText', { file: file }));
    else body = h('p', { 'class': 'loading', text: t('loading') });
    mount([topbar(), body]);
    if (dayState === 'ready') {
      highlight();
      restoreView(view);
    }
  }

  function renderDayError(reason, n) {
    document.title = APP_TITLE;
    var notReady = reason === 'not-ready';
    mount([messageCard(t(notReady ? 'notReadyTitle' : 'notFoundTitle'),
      notReady ? t('notReadyText', { n: n }) : t('notFoundText'))]);
  }

  function startDay() {
    var parsed = C.parseDay(window.location.search, CUR);
    if (!parsed.ok) {
      var m = /[?&]d=(\d+)/.exec(window.location.search);
      renderDayError(parsed.reason, m ? m[1] : '');
      return;
    }
    dayNum = parsed.day;
    renderDay();
    var s = document.createElement('script');
    s.src = C.contentPath(dayNum);
    // onerror = file not found; onload without a valid TL_DAY = the file has a JS error or a wrong day.
    s.onload = function () {
      var d = window.TL_DAY;
      if (d && d.day === dayNum) { dayData = d; dayState = 'ready'; } else { dayState = 'error'; }
      renderDay();
    };
    s.onerror = function () { dayState = 'missing'; renderDay(); };
    document.body.appendChild(s);
    // Prism is loaded with defer from a CDN; if it arrives after our first render, highlight then.
    window.addEventListener('load', highlight);
  }

  applyLang();
  if (document.body.getAttribute('data-page') === 'day') startDay();
  else renderHome();
})();
