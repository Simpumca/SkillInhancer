# TL Prep — .NET Tech Lead in 30 Days

An offline study site for .NET Tech Lead interview preparation. Every day has a short summary, concept sections with analogies and code, interview Q&A, "what will this print?" puzzles, and a last-minute revision list. All 30 days are ready. Week 1 (days 1–7): OOP, C# Core, C# Advanced, LINQ, EF Core Parts 1 and 2, and a revision day. Week 2 (days 8–14): SOLID and DI, creational patterns, structural and behavioural patterns, enterprise patterns, ASP.NET Core fundamentals, Web API, and a revision day. Week 3 (days 15–21): Architecture, Microservices, System Design for TL rounds, SQL Server, PostgreSQL and data comparisons, Azure, and DevOps. Week 4 (days 22–30): legacy .NET migration, JavaScript, React and Next.js, testing, security and performance, AI for developers, Tech Lead leadership, Mock Interview 1 and Mock Interview 2 with the final cheat sheets.

## How to study

- Do one day a day (about 1–1.5 hours): read the summary and **Short** mode first, then switch to **Detailed** for code and puzzles. Say each interview answer aloud before you open it.
- Use days 7 and 14 as revision days, and days 29 and 30 as timed mock interviews. Day 30 also has one-page cheat sheets per week and an interview-day checklist.
- After the 30 days, undo "Day done" on weak days and let **Today ▶** take you back to them (see "After the 30 days" on Day 30).

## How to open

- Double-click `index.html`. It runs from `file://`, so you do not need a server, a build step or an internet connection.
- Use Chrome or Edge.
- Code highlighting (Prism) loads from a CDN. When you are offline, code still shows, as plain text.

## How it works

- **Home** shows the 30-day plan, your progress (`done/30`) and a **Today ▶** button that opens the first day you have not finished.
- **Language**: English, Hindi (Devanagari) or Hinglish (Roman script). Interview answers and revision lines stay in English, because interviews are in English. In Hindi and Hinglish mode, a short meaning appears below each one.
- **Depth**: **Short** shows the summary, the key sections, the 8 most-asked questions and the revision list. **Detailed** adds everything else, including the puzzles.
- **Progress**: "Mark day as done" on a day page. Click it again to undo.
- Language, depth and progress are saved in `localStorage` (`tl.lang`, `tl.depth`, `tl.done`). If the browser blocks storage, the site still works with the defaults (English, Short).
- Light and dark mode follow your operating system setting.

## How to run the checks

You need **Node.js 22+** and the **.NET SDK 9+**. JavaScript snippets only need Node (no network, no packages). SQL snippets also need SQL Server LocalDB and `sqlcmd` on the PATH (the checker runs `sqllocaldb start MSSQLLocalDB` once before probing, so a cold instance does not cause SKIPs; the test suite does the same, and prints the reason, such as "sqlcmd not found", "timeout" or the first error line, when it skips the SQL tests). Days 5–14 need NuGet access the first time, to restore packages such as `Microsoft.EntityFrameworkCore.*` and `Microsoft.AspNetCore.TestHost`. Run every command from the `tutorial/` folder:

```sh
node --test                    # unit tests for the site logic and the tools
node tools/validate.mjs        # checks the content schema of every day file
node tools/check-code.mjs day14  # compiles and runs one day's C#, SQL and JavaScript snippets and puzzles
node tools/check-code.mjs        # all days (slow: one small project per snippet)
node tools/check-code.mjs --strict day14  # any SKIP (for example no SQL tooling) becomes exit code 1
```

- `validate.mjs` checks the required fields in all three languages, the script of each language (Devanagari must appear in Hindi and must not appear in Hinglish), the Q&A counts (at least 8 short questions, 15–25 in total) and the minimum number of puzzles.
- `check-code.mjs` builds every snippet marked `check: "compile"` or `"run"` and every puzzle (target `net9.0`). It compares the real output with the `expected` or `answer` text and prints PASS, FAIL or SKIP (SKIP means a NuGet restore failed). Build folders go to `tools/.snippets/`, which git ignores.

## How to add a day

1. Create `content/dayNN.js` (two-digit number). It must assign one object: `window.TL_DAY = { day, title, summary, sections, qa, puzzles, revision, whatsNew? }`.
   - Text fields are `{ en, hi, hg }` objects. They may contain simple HTML: `<b>`, `<i>`, `<code>`, `<ul><li>`, `<br>`.
   - `sections[]` have an `id`, a `depth` (`"short"` or `"detailed"`), a `title`, a `body` and optional `code[]` with `{ caption, src, check, packages?, expected? }`.
   - `qa[]` have an `id`, a `depth`, `q`, `answer` (English), `meaning: { hi, hg }` and `explain`.
   - `puzzles[]` have an `id`, `src` (a full runnable program), `answer` (the exact output) and `explain`.
   - `packages` entries are NuGet package names added to the snippet project. `"Name"` pins `Version="9.*"`; `"Name@version"` pins that version instead, e.g. `"Azure.Identity@1.*"` or `"Yarp.ReverseProxy@2.3.0"`. The validator rejects malformed specs (`bad package spec X`).
   - `puzzles[]` and `code[]` items may carry `frameworks: ["aspnetcore"]`. The checker then adds the shared ASP.NET Core framework reference to the snippet project (and the validator rejects unknown framework names). Web puzzles also add `packages: ["Microsoft.AspNetCore.TestHost"]`, call `builder.Logging.ClearProviders()` (otherwise the default console logger writes `info:` lines into the output) and run in-process with `builder.WebHost.UseTestServer()`, `await app.StartAsync()` and `app.GetTestClient()`.
   - `code[]` items and `puzzles[]` may carry `lang`: `"csharp"` (default), `"sql"`, `"yaml"`, `"dockerfile"`, `"bash"`, `"json"`, `"text"`, `"javascript"`, `"jsx"`, `"tsx"`, `"typescript"` or `"html"` (`html` uses the Prism `markup` grammar). The language sets the highlighting (Prism grammar). Only `csharp`, `sql` and `javascript` may use `check: "compile"` or `"run"`; every other language (including `jsx`, `tsx`, `typescript` and `html`) must use `check: "none"`, and puzzles must be `csharp`, `sql` or `javascript`. `packages` and `frameworks` are allowed only on `csharp` items (the validator rejects them on any other lang). Unknown values fail validation.
   - `javascript` snippets and puzzles are saved as `snippet.mjs` (an ES module, so `import`/`export` and top-level `await` work) in a throw-away temp folder under `tools/.snippets/`, which is deleted afterwards. `check: "compile"` runs `node --check snippet.mjs` (syntax only). `check: "run"` and puzzles run `node snippet.mjs` with that folder as the working directory, a 30 second timeout (a timeout is a FAIL) and no network. A non-zero exit code is a FAIL, and stdout is compared with `expected` (or the puzzle `answer`) the same way as for C#; stderr is only shown in the failure detail. Keep the output deterministic: no `Date`, `Math.random` or timing.
   - `sql` snippets and puzzles are run on SQL Server LocalDB (`(localdb)\MSSQLLocalDB`) with `sqlcmd`. Each one gets its own throw-away database `tlsnip_<key>`, which is dropped afterwards, even on failure. `SET NOCOUNT ON;` is added at the top, a SQL error fails the snippet, and the output is compared with `expected` (or the puzzle `answer`) the same way as for C#. Note that `check: "compile"` for SQL still executes the whole script (SQL Server has no parse-only mode that catches missing objects), so it needs LocalDB just like `"run"`; it only skips the output comparison. If `sqlcmd` or LocalDB is not available, the snippet is reported as SKIP ("sql tooling unavailable"); use `--strict` to make that an error.
   - `revision` is `{ en: [...], meaning: { hi: [...], hg: [...] } }`. All three arrays must have the same length.
2. In `content/curriculum.js`, set `ready: true` for that day.
3. Text fields are rendered as HTML, so write generics in prose as `ILogger&lt;T&gt;`. A raw `<T>` would vanish in the browser, and the validator rejects raw tags that are not simple HTML.
4. Run `node tools/validate.mjs` and `node tools/check-code.mjs dayNN` until both pass.

For the full schema, see "Content data schema" in `docs/superpowers/plans/2026-10-21-tl-prep-phase1.md` (repository root). The validator in `tools/validate.mjs` is the final word on what is required.
