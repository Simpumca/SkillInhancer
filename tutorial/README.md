# TL Prep — .NET Tech Lead in 30 Days

An offline study site for .NET Tech Lead interview preparation. Every day has a short summary, concept sections with analogies and code, interview Q&A, "what will this print?" puzzles, and a last-minute revision list. Days 1–14 are ready. Week 1 (days 1–7): OOP, C# Core, C# Advanced, LINQ, EF Core Parts 1 and 2, and a revision day. Week 2 (days 8–14): SOLID and DI, creational patterns, structural and behavioural patterns, enterprise patterns, ASP.NET Core fundamentals, Web API, and a revision day. Days 15–30 are not written yet.

## How to open

- Double-click `index.html`. It runs from `file://`, so you do not need a server, a build step or an internet connection.
- Use Chrome or Edge.
- Code highlighting (Prism) loads from a CDN. When you are offline, code still shows, as plain text.

## How it works

- **Home** shows the 30-day plan, your progress (`done/14` while 14 days are ready) and a **Today ▶** button that opens the first day you have not finished. Days 15–30 show as "Coming soon".
- **Language**: English, Hindi (Devanagari) or Hinglish (Roman script). Interview answers and revision lines stay in English, because interviews are in English. In Hindi and Hinglish mode, a short meaning appears below each one.
- **Depth**: **Short** shows the summary, the key sections, the 8 most-asked questions and the revision list. **Detailed** adds everything else, including the puzzles.
- **Progress**: "Mark day as done" on a day page. Click it again to undo.
- Language, depth and progress are saved in `localStorage` (`tl.lang`, `tl.depth`, `tl.done`). If the browser blocks storage, the site still works with the defaults (English, Short).
- Light and dark mode follow your operating system setting.

## How to run the checks

You need **Node.js 22+** and the **.NET SDK 9+**. The EF Core days (5, 6, 7, 11) and the ASP.NET Core days (12, 13, 14) also need NuGet access the first time, to restore packages such as `Microsoft.EntityFrameworkCore.*` and `Microsoft.AspNetCore.TestHost`. Run every command from the `tutorial/` folder:

```sh
node --test                    # unit tests for the site logic and the tools
node tools/validate.mjs        # checks the content schema of every day file
node tools/check-code.mjs day14  # compiles and runs one day's C# snippets and puzzles
node tools/check-code.mjs        # all days (slow: one small project per snippet)
```

- `validate.mjs` checks the required fields in all three languages, the script of each language (Devanagari must appear in Hindi and must not appear in Hinglish), the Q&A counts (at least 8 short questions, 15–25 in total) and the minimum number of puzzles.
- `check-code.mjs` builds every snippet marked `check: "compile"` or `"run"` and every puzzle (target `net9.0`). It compares the real output with the `expected` or `answer` text and prints PASS, FAIL or SKIP (SKIP means a NuGet restore failed). Build folders go to `tools/.snippets/`, which git ignores.

## How to add a day

1. Create `content/dayNN.js` (two-digit number). It must assign one object: `window.TL_DAY = { day, title, summary, sections, qa, puzzles, revision, whatsNew? }`.
   - Text fields are `{ en, hi, hg }` objects. They may contain simple HTML: `<b>`, `<i>`, `<code>`, `<ul><li>`, `<br>`.
   - `sections[]` have an `id`, a `depth` (`"short"` or `"detailed"`), a `title`, a `body` and optional `code[]` with `{ caption, src, check, packages?, expected? }`.
   - `qa[]` have an `id`, a `depth`, `q`, `answer` (English), `meaning: { hi, hg }` and `explain`.
   - `puzzles[]` have an `id`, `src` (a full runnable program), `answer` (the exact output) and `explain`.
   - `puzzles[]` and `code[]` items may carry `frameworks: ["aspnetcore"]`. The checker then adds the shared ASP.NET Core framework reference to the snippet project (and the validator rejects unknown framework names). Web puzzles also add `packages: ["Microsoft.AspNetCore.TestHost"]`, call `builder.Logging.ClearProviders()` (otherwise the default console logger writes `info:` lines into the output) and run in-process with `builder.WebHost.UseTestServer()`, `await app.StartAsync()` and `app.GetTestClient()`.
   - `revision` is `{ en: [...], meaning: { hi: [...], hg: [...] } }`. All three arrays must have the same length.
2. In `content/curriculum.js`, set `ready: true` for that day.
3. Text fields are rendered as HTML, so write generics in prose as `ILogger&lt;T&gt;`. A raw `<T>` would vanish in the browser, and the validator rejects raw tags that are not simple HTML.
4. Run `node tools/validate.mjs` and `node tools/check-code.mjs dayNN` until both pass.

For the full schema, see "Content data schema" in `docs/superpowers/plans/2026-10-21-tl-prep-phase1.md` (repository root). The validator in `tools/validate.mjs` is the final word on what is required.
