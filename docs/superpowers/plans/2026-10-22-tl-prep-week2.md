# .NET TL Interview Prep — Week 2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Week 2 (days 8–14: SOLID, design patterns, enterprise patterns, ASP.NET Core, Web API, revision) to the tutorial, plus the tooling fixes deferred from Phase 1.

**Architecture:** Same data-driven static site as Phase 1 (`tutorial/content/dayNN.js` → `day.html?d=N`). Each content task also flips its day to `ready: true` in `content/curriculum.js`, so the home page never links to a missing day. The snippet checker gains ASP.NET Core support (FrameworkReference + in-process TestServer) so web snippets and middleware puzzles are compiled and run like Week 1.

**Tech Stack:** unchanged — static HTML/CSS/JS, Node 22 `node:test`, .NET SDK 9.0.302, Chrome DevTools MCP for browser checks.

**Spec:** `docs/specs/2026-10-21-dotnet-tl-interview-prep-design.md` (Week 2 = §6 days 8–14). Phase 1 plan: `docs/superpowers/plans/2026-10-21-tl-prep-phase1.md` (schema + Global Constraints there still bind).

## Global Constraints

- Everything in the Phase 1 plan's Global Constraints and content data schema still applies verbatim.
- Content rules: Phase 1 `content-guide.md` (incl. every "Lessons from … review" line) applies to every Week 2 day.
- Puzzles ≥5 for days 8–14 (validator already applies minPuzzles=5 to days 9–11; extend to 8, 12, 13, 14).
- Web snippets target .NET 10 concepts but compile on net9.0 (local SDK); .NET 10-only APIs → `check:"none"`, tagged.
- Third-party library licensing must be stated accurately where it matters (e.g. MediatR and AutoMapper moved to commercial licences in 2025 — verify before stating; never imply a library is required).
- Test command `node --test` from `tutorial/`; browser checks via Chrome DevTools MCP (Playwright cannot open file://).
- Commit messages end with a blank line + `Co-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>`.

## Review Focus

1. A day marked `ready` whose content file is missing or broken — must never ship; each content task flips only its own day after its file validates.
2. ASP.NET Core snippets that compile only because the checker silently skipped them — `frameworks` support must FAIL loudly when the framework reference is missing. Pinned by Task 1 test.
3. Time estimate still misleading — Detailed estimate must reflect code reading. Pinned by Task 2 tests.
4. Pattern content drifting into "use a library" advice (MediatR/AutoMapper/Scrutor) without trade-offs — reviewers check.
5. Cross-day contradictions with Week 1 (DI lifetimes, DbContext scoped, Repository over EF, async in middleware) — reviewers grep Week 1.

---

### Task 1: Tooling — validator hardening + ASP.NET Core in checker

**Files:** Modify `tutorial/tools/validate.mjs`, `tutorial/tools/check-code.mjs`, `tutorial/tests/validate.test.mjs`, `tutorial/tests/check-code.test.mjs`; add fixtures as needed.

**Interfaces:**
- Produces: code snippet / puzzle field `frameworks?: ["aspnetcore"]` → csproj gets `<FrameworkReference Include="Microsoft.AspNetCore.App" />`. Packages still via `packages` (version `9.*`), e.g. `Microsoft.AspNetCore.TestHost` for in-process request puzzles.
- validateDay new errors: `"day: file NN != day.day M"` (CLI only), `"<path>: run snippet without expected"`, `"qa[i].answer: contains Devanagari"`, `"revision.en[i]: contains Devanagari"`, `"sections: N < 4"`, `"sections: short count N < 2"`, `"revision: N not in 8..12"` (day 7/14 allowed 10), null/non-object items → error string not TypeError.
- CLI minPuzzles=5 for days 1–14.

- [ ] Step 1: failing tests for each new rule + `frameworks` csproj generation (assert the csproj text contains the FrameworkReference) + a fixture web snippet (`WebApplication.CreateBuilder` + TestServer request printing a status code) that PASSes in run mode (skip when dotnet missing).
- [ ] Step 2: run → FAIL. Step 3: implement. Step 4: `node --test` all pass; `node tools/validate.mjs` still ok for days 1–7 (fix content only if a new rule exposes a real defect, report it).
- [ ] Step 5: commit `tools: validator hardening and ASP.NET Core snippets`.

### Task 2: Renderer — honest estimate + data-driven tests

**Files:** Modify `tutorial/assets/core.js`, `tutorial/assets/app.js` (label only), `tutorial/tests/core.test.mjs`.

**Interfaces:** `estimateMinutes(day, depth)` new rules: prose at 150 wpm (tags stripped, code excluded); code at 6 lines/min; puzzles 3 min each (detailed only); `depth:"short"` → summary + short items; `depth:"detailed"` → ONLY detailed-depth items + puzzles (the delta after Short), label "≈ X more after Short" (3 languages). Round to 5 min, min 5.
- core tests read ready days from `content/curriculum.js` instead of hard-coding 1–7 (nextUndoneDay / parseDay not-ready tests pick the first non-ready day dynamically).

- [ ] Step 1: update/failing tests (code lines counted, delta semantics, label). Step 2: FAIL. Step 3: implement. Step 4: `node --test` pass; check Day 4 + Day 6 in browser: Short ≈ 20–30 min, Detailed delta plausible (report numbers).
- [ ] Step 5: commit `renderer: estimate counts code and shows detailed delta`.

### Tasks 3–8: Week 2 content days 8–13

One task per day; each creates `tutorial/content/dayNN.js` and sets `ready: true` for that day in `content/curriculum.js` (same commit). Steps per task = Phase 1 `content-tasks.md` steps 1–5 + the ready flip.

| Task | File | Topic (spec §6) | Extra |
|---|---|---|---|
| 3 | `day08.js` | SOLID — each principle with bad→good C# refactor | ≥5 puzzles; link to Day 1 OOP; TL angle: SOLID in code review, over-engineering risk |
| 4 | `day09.js` | Creational — Singleton (thread-safe: Lazy<T>, static init; vs static class; vs DI singleton), Factory Method, Abstract Factory, Builder | ≥5 puzzles (e.g. static init order, Lazy thread-safety modes deterministic) |
| 5 | `day10.js` | Structural + Behavioral — Adapter, Decorator, Facade, Proxy, Strategy, Observer, Mediator, Chain of Responsibility (link to ASP.NET Core middleware) | ≥5 puzzles; .NET built-in examples (Stream decorators, IObservable/events, DelegatingHandler, keyed services for Strategy .NET 8) |
| 6 | `day11.js` | Enterprise — Repository + Unit of Work ("needed with EF Core?" — consistent with Day 5–6), CQRS (+ MediatR, licensing accurate, hand-rolled alternative), Options pattern (IOptions/IOptionsSnapshot/IOptionsMonitor, validation), DI lifetimes (captive dependency, ValidateScopes/ValidateOnBuild, IServiceScopeFactory in background services) | ≥5 puzzles; DI puzzles run on `Microsoft.Extensions.DependencyInjection` package |
| 7 | `day12.js` | ASP.NET Core fundamentals — hosting/WebApplication, Program.cs, middleware pipeline (order, short-circuit, Use/Run/Map), DI, configuration providers & precedence, environments, logging, filters (types & order), Minimal API vs Controllers | `frameworks:["aspnetcore"]`; middleware-order puzzles via TestServer (deterministic) |
| 8 | `day13.js` | Web API — REST principles, status codes, versioning, validation, global exception handling (IExceptionHandler + ProblemDetails), JWT/OAuth2 (concepts + AddJwtBearer), CORS, output/response caching, rate limiting (.NET 7+), OpenAPI (.NET 9 Microsoft.AspNetCore.OpenApi vs Swashbuckle), HttpClientFactory (+ resilience) | `frameworks:["aspnetcore"]`; puzzles via TestServer; .NET 10 items tagged |

### Task 9: Day 14 — Week 2 revision + mixed quiz, final walk

**Files:** create `tutorial/content/day14.js`; set day 14 ready; update `tutorial/README.md` (frameworks field, Week 2 status).
- Same shape as Day 7: one short cheat sheet per day 8–13 using corrected facts; 15–20 NEW mixed Q&A (8 short) incl. at least 3 combining Week 1 + Week 2; ≥5 new puzzles; 10 revision lines.
- Checks: `node --test`, `node tools/validate.mjs`, `node tools/check-code.mjs` (all days, background) → all pass.
- Browser walk (Chrome DevTools MCP): home shows 14 ready days; Next walks 8→14; estimates shown; dark mode + 375px (viewport emulation) on day 12; no console errors.
- Commit `content: week 2 revision day; week 2 complete`.
