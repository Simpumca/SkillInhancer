# .NET TL Interview Prep — Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the offline HTML tutorial framework (home dashboard + topic page) and Week 1 content (days 1–7) in English, Hindi and Hinglish, Short and Detailed.

**Architecture:** Data-driven static site. Each day is a JS data file (`content/dayNN.js`) that sets `window.TL_DAY`; one generic `day.html?d=N` page loads it with a `<script>` tag (works on `file://`, no server) and renders it with `assets/app.js`. Pure logic lives in `assets/core.js` so Node can unit-test it. Node scripts validate content schema and compile/run every C# snippet with the local .NET SDK, checking puzzle answers against real output.

**Tech Stack:** HTML/CSS/vanilla JS (no build), Node 22 (`node:test`, no npm deps), .NET SDK 9.0.302 for snippet checks, Prism 1.29.0 from cdnjs for highlighting (falls back to plain monospace offline), Playwright MCP for browser checks.

**Spec:** `docs/specs/2026-10-21-dotnet-tl-interview-prep-design.md`

## Global Constraints

- Root: `D:\Pankaj_Work_New\KnowladgeBase\SkillsImprover\tutorial\`. Opens by double-click (`file://`), works offline. No build step, no framework.
- Language keys: `en` (English), `hi` (Hindi, Devanagari script), `hg` (Hinglish, Roman script). Technical terms, code, identifiers stay English in all three.
- Interview crisp answers and revision bullets are English in every mode; `hi`/`hg` modes additionally show a short meaning below ("मतलब:" / "Matlab:").
- Tone: analogy first, then concept, then code. Short, friendly sentences. No textbook walls. Hindi = simple spoken Hindi, not formal/shuddh.
- Versions: .NET 10 = current LTS (Nov 2025), C# 14, EF Core 10; .NET 11 due Nov 2026. Code uses C# 12-compatible syntax unless showing a C# 13/14 feature (then `check: "none"` with a note — local SDK is 9.0).
- Every C# snippet compiles (`check: "compile"`) or runs (`check: "run"`) unless explicitly `check: "none"`. Puzzle `answer` equals actual program stdout.
- Short mode: summary, `depth:"short"` sections, `depth:"short"` Q&A (≈8), revision. Detailed mode: everything, incl. puzzles. Detailed Q&A total 15–25 per topic day. Puzzles ≥5 for days 1–6.
- Light + dark mode; desktop-first; no horizontal page scroll at 375px width.
- localStorage keys: `tl.lang`, `tl.depth`, `tl.done` (JSON array of day numbers). Every access in try/catch; page renders without it.
- Commit after each task; messages end with `Co-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>`.

## Review Focus

1. Opened via double-click (`file://`) — dynamic `<script>` load of `content/dayNN.js` must work with no server. Pinned by Task 2 Playwright check on a `file:///` URL.
2. localStorage throwing (private mode/blocked) — pages still render with defaults `en`/`short`. Pinned by Task 2 core test `storage_throws_falls_back`.
3. `day.html?d=99`, `?d=abc`, or a Phase-2 day (8–30) — friendly "Coming in Phase 2" / "Day not found" card with Home link, never a blank page. Home shows days 8–30 as "Coming soon" (not links). Pinned by Task 2 `parseDay` tests + Playwright check.
4. Wrong script in a language field (Devanagari missing from `hi`, or Devanagari leaking into `hg`). Pinned by Task 1 validator rule `script_check`.
5. Long code lines on narrow screen — code scrolls inside its box; page `scrollWidth <= innerWidth` at 375px. Pinned by Task 2 Playwright check.

---

## Content data schema (defined in Task 1, used by all tasks)

```js
// L = { en: string, hi: string, hg: string }   (HTML allowed: <b>, <i>, <code>, <ul><li>, <br>)
// M = { hi: string, hg: string }                (meaning shown under English text in hi/hg mode)
window.TL_DAY = {
  day: 1,                                  // 1..30
  title: L,                                // e.g. { en: "OOP", ... }
  summary: L,                              // ⚡ 2-min summary
  sections: [{                             // 📘 concept + analogy, 💻 code
    id: "pillars",                         // unique within day, kebab-case
    depth: "short" | "detailed",
    title: L,
    body: L,
    code: [{ caption: L, src: string, check: "compile" | "run" | "none", packages?: string[], expected?: string }]  // optional
  }],
  qa: [{                                   // ❓ interview Q&A
    id: "abstract-vs-interface",
    depth: "short" | "detailed",
    q: string,                             // English (interviewer's words)
    answer: string,                        // English crisp 1–2 line answer to say aloud
    meaning: M,
    explain: L,
    code?: [ /* same as sections.code */ ]
  }],
  puzzles: [{                              // 🧩 what will this print?
    id: "virtual-new",
    src: string,                           // full runnable program (top-level statements allowed)
    answer: string,                        // exact stdout, lines joined by "\n"
    explain: L,
    packages?: string[]
  }],
  revision: { en: string[], meaning: { hi: string[], hg: string[] } },   // 📝 same length arrays
  whatsNew?: L                             // optional "What's new in .NET 9/10" note
};
```

`curriculum.js` sets `window.TL_CURRICULUM = [{ day, week, title: L, ready: boolean }]` for all 30 days (titles from spec §6; `ready: true` only for 1–7).

---

### Task 1: Scaffold, curriculum, content validator

**Files:**
- Create: `tutorial/content/curriculum.js`, `tutorial/tools/validate.mjs`, `tutorial/tools/load-content.mjs`, `tutorial/tests/validate.test.mjs`, `tutorial/tests/fixtures/day-good.js`, `tutorial/tests/fixtures/day-bad.js`, `.gitignore` (contains `.superpowers/`, `tutorial/tools/.snippets/`)

**Interfaces:**
- Produces: `loadDay(path: string) => object` (evaluates a content file in a `vm` sandbox with a fake `window`, returns `window.TL_DAY`); `loadCurriculum(path) => array`; `validateDay(day: object, opts?: { minPuzzles?: number }) => string[]` (list of error messages, empty = valid). CLI: `node tools/validate.mjs` validates every `content/day*.js` plus curriculum, prints errors, exit 1 if any.

- [ ] **Step 1:** `git init` in `SkillsImprover`, add `.gitignore`.
- [ ] **Step 2: Write failing tests** in `tests/validate.test.mjs` (`node:test`):
  - `good_fixture_passes`: `validateDay(loadDay('tests/fixtures/day-good.js'), {minPuzzles:1})` deep-equals `[]`.
  - `missing_language`: fixture with `summary.hg` missing → errors include `"summary: missing hg"`.
  - `script_check`: `hi` text with no Devanagari char (`/[\u0900-\u097F]/`) → error contains `"hi has no Devanagari"`; `hg` text containing Devanagari → `"hg contains Devanagari"`.
  - `qa_counts`: 7 short Q&A → error `"qa: short count 7 < 8"`; 26 total → `"qa: total 26 > 25"`; 14 total → `"qa: total 14 < 15"`.
  - `puzzle_count`: 4 puzzles with `minPuzzles:5` → `"puzzles: 4 < 5"`.
  - `revision_lengths`: `meaning.hi` length ≠ `en` length → `"revision: meaning.hi length mismatch"`.
  - `duplicate_ids`: two qa with same id → `"qa: duplicate id x"`.
  - `curriculum_has_30`: `loadCurriculum('content/curriculum.js')` has 30 entries, days 1..30, `ready` true exactly for 1–7, every title has en/hi/hg.
  (Count rules can be relaxed per call: `opts.minShortQa`, `opts.minQa`, `opts.maxQa` default 8/15/25.)
- [ ] **Step 3:** Run `node --test tests/` from `tutorial/` → FAIL (modules missing).
- [ ] **Step 4:** Implement `load-content.mjs`, `validate.mjs`, both fixtures, `curriculum.js` (30 titles from spec §6 in all 3 languages, week numbers per spec).
- [ ] **Step 5:** Run `node --test tests/` → all PASS.
- [ ] **Step 6:** Commit `feat: scaffold tutorial, curriculum and content validator`.

### Task 2: Renderer — home dashboard + day page

**Files:**
- Create: `tutorial/index.html`, `tutorial/day.html`, `tutorial/assets/style.css`, `tutorial/assets/core.js`, `tutorial/assets/app.js`, `tutorial/tests/core.test.mjs`

**Interfaces:**
- Consumes: schema + `TL_CURRICULUM` from Task 1.
- Produces (`core.js`, UMD: attaches `window.TLCore` and `module.exports`):
  - `parseDay(search: string, curriculum) => { ok: true, day: number } | { ok: false, reason: "invalid" | "not-ready" }`
  - `pick(l: L, lang) => string` (falls back to `en` if missing)
  - `filterDepth(items, depth) => items` (`short` keeps only `depth:"short"`; `detailed` keeps all)
  - `nextUndoneDay(curriculum, doneDays: number[]) => number` (first ready day not done; if all ready done → last ready day)
  - `makeStore(storage) => { get(key, fallback), set(key, value) }` (never throws)
  - `contentPath(day) => "content/dayNN.js"` (zero-padded)

- [ ] **Step 1: Write failing tests** `tests/core.test.mjs`:
  - `parseDay('?d=3', cur)` → `{ok:true, day:3}`; `'?d=99'` → `{ok:false, reason:'invalid'}`; `'?d=abc'` / `''` → invalid; `'?d=12'` → `{ok:false, reason:'not-ready'}`.
  - `pick({en:'A',hi:'B',hg:'C'},'hg')` → `'C'`; `pick({en:'A'},'hi')` → `'A'`.
  - `filterDepth` with 2 short + 3 detailed → short gives 2, detailed gives 5.
  - `nextUndoneDay(cur, [1,2])` → 3; `nextUndoneDay(cur, [1..7])` → 7.
  - `storage_throws_falls_back`: `makeStore({getItem(){throw 1}, setItem(){throw 1}}).get('tl.lang','en')` → `'en'`; `set` does not throw.
  - `contentPath(3)` → `'content/day03.js'`.
- [ ] **Step 2:** Run `node --test tests/core.test.mjs` → FAIL.
- [ ] **Step 3:** Implement `core.js`.
- [ ] **Step 4:** Run tests → PASS.
- [ ] **Step 5:** Implement pages per spec §5:
  - `index.html`: title "TL Prep — .NET Tech Lead in 30 Days", language switch EN / हिंदी / Hinglish, "Today ▶" button (`day.html?d=nextUndoneDay`), "How to use" note (Short 15 min → Detailed 40 min → answer aloud 15–20 min), 4 week cards with day list, ✓ for done, progress bar `done/ready`, non-ready days greyed "Coming soon".
  - `day.html`: sticky bar (◀ Prev | Day N: title | Next ▶ | lang switch | Short/Detailed toggle | 🏠 Home). Sections in order: ⚡ summary, 📘/💻 sections, optional "What's new in .NET 9/10", ❓ Q&A (answer + meaning + explain in `<details>` "Show answer ▼"), 🧩 puzzles (detailed only, answer hidden), 📝 revision box, "Mark day as done ✓" toggle. Invalid/not-ready day → card with message + Home link.
  - `app.js` loads `contentPath(day)` by injecting `<script>`; on error shows "Content file missing" card.
  - Fonts: system stack + `"Nirmala UI", "Mangal", "Noto Sans Devanagari"` (Google Fonts link optional; must not block offline). Prism 1.29.0 core + `prism-csharp` from cdnjs, `defer`; no highlighting offline is acceptable.
  - CSS tokens on `:root`, dark via `prefers-color-scheme` plus `[data-theme]`; code `pre` has `overflow-x:auto`.
- [ ] **Step 6: Browser check (Playwright MCP)**: temporarily copy `tests/fixtures/day-good.js` to `content/day01.js` (delete after the check), open `file:///D:/Pankaj_Work_New/KnowladgeBase/SkillsImprover/tutorial/index.html` and `day.html?d=1`. Verify: page renders from file://; switching lang changes text; Short hides detailed items & puzzles; `?d=99` and `?d=12` show friendly cards; at 375px `document.documentElement.scrollWidth <= innerWidth`; reload keeps lang/depth.
- [ ] **Step 7:** Commit `feat: home dashboard and day page renderer`.

### Task 3: C# snippet checker

**Files:**
- Create: `tutorial/tools/check-code.mjs`, `tutorial/tests/check-code.test.mjs`, `tutorial/tests/fixtures/day-code.js`

**Interfaces:**
- Consumes: `loadDay` from Task 1.
- Produces: `collectSnippets(day) => [{ key, src, mode: "compile"|"run", expected?: string, packages: string[] }]` (puzzles → mode `run`, expected = `answer`; sections/qa code → their `check`; `none` skipped). CLI: `node tools/check-code.mjs [dayNN ...]` — for each snippet writes `tools/.snippets/<key>/Program.cs` + `snippet.csproj` (`net9.0`, `OutputType Exe`, `Nullable enable`, `ImplicitUsings enable`, `LangVersion latest`, `PackageReference` per `packages` with version `9.*`), runs `dotnet build -nologo -v q` (compile) or `dotnet run` (run, compare trimmed stdout with `\r\n`→`\n` to `expected`). Prints `PASS/FAIL key` + first compiler error line; exit 1 on any fail. Restore failure due to network → `SKIP key (restore failed)`, not fail.
- Type-only snippets (no top-level statements) have no entry point: if build fails with `CS5001`, checker adds `Entry.cs` containing `static class __Entry { static void Main() {} }` and rebuilds once.

- [ ] **Step 1: Write failing tests:** `collectSnippets(loadDay('tests/fixtures/day-code.js'))` returns 3 items (1 compile, 1 run puzzle, `none` skipped) with keys `day99-sec-<id>-0`, `day99-puz-<id>`; plus an integration test (skipped if `dotnet` missing) that runs the CLI on the fixture → exit 0, and on a fixture with wrong puzzle answer → exit 1 and output contains `FAIL day99-puz-`.
- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement. **Step 4:** Run → PASS.
- [ ] **Step 5:** Commit `feat: C# snippet compile/run checker`.

### Tasks 4–9: Week 1 content days 1–6

One task per day. Each creates `tutorial/content/dayNN.js` following the schema, topics exactly as spec §6 Week 1:

| Task | File | Topic (spec §6) | Extra |
|---|---|---|---|
| 4 | `day01.js` | OOP | puzzles: virtual/override/new, base ref → derived object, constructor order, static ctor, abstract/interface default method |
| 5 | `day02.js` | C# Core | `whatsNew` (C# 13/14 highlights, clearly labelled) |
| 6 | `day03.js` | C# Advanced | async puzzles must be deterministic (no timing-dependent output) |
| 7 | `day04.js` | LINQ | ≥8 puzzles (learner weak spot; deferred execution, multiple enumeration, SelectMany, GroupBy) |
| 8 | `day05.js` | EF Core Part 1 | EF snippets use `packages: ["Microsoft.EntityFrameworkCore.Sqlite"]`, in-memory SQLite `Data Source=:memory:`; puzzles print `ToQueryString()` or change-tracker state |
| 9 | `day06.js` | EF Core Part 2 | show generated SQL next to LINQ; `whatsNew` EF Core 9/10 |

**Steps per task:**
- [ ] **Step 1:** Write content file: summary; ≥4 sections (analogy-first), ≥1 code example per detailed section; Q&A 8 short + total 15–25 (include the questions named in spec §6 for that day, e.g. day 1 "Why composition over inheritance?", "Abstract class vs interface?"); ≥5 puzzles; revision 8–12 bullets.
- [ ] **Step 2:** `node tools/validate.mjs` → no errors for this day.
- [ ] **Step 3:** `node tools/check-code.mjs dayNN` → all PASS (SKIP allowed only for restore failure; report it).
- [ ] **Step 4:** Open `day.html?d=N` in Playwright, switch all 3 languages and both depths; screenshot one; no console errors.
- [ ] **Step 5:** Commit `content: day N <topic>`.

### Task 10: Day 7 — Week 1 revision + mixed quiz, final pass

**Files:**
- Create: `tutorial/content/day07.js`, `tutorial/README.md` (how to open, how to run checks)

- [ ] **Step 1:** Write `day07.js`: summary = how to revise; sections = one "1-page cheat sheet" per day 1–6 (`depth:"short"`); Q&A = 15–20 new mixed questions across days 1–6 (`depth` short for top 8); ≥5 new mixed puzzles; revision = top 10 must-remember lines of the week. Validate with `{minPuzzles:5}`.
- [ ] **Step 2:** `node --test tests/` and `node tools/validate.mjs` and `node tools/check-code.mjs` (all days) → all pass.
- [ ] **Step 3:** Playwright full walk: home → Today → each day 1–7 via Next; mark days 1–2 done → home progress `2/7`, Today → day 3; dark mode (`emulate_media colorScheme dark`) readable; 375px no horizontal scroll on day 4.
- [ ] **Step 4:** Commit `content: week 1 revision day; phase 1 complete`.
