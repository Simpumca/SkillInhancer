# .NET TL Interview Prep — Week 4 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Week 4 (days 22–30: Legacy ASP.NET/MVC, JavaScript, React/Next.js, Testing, Security & Performance, AI for .NET developers, TL leadership & behavioral, two mock interviews + final cheat sheet), JavaScript run-checking, and the Week 3 tooling carry-overs — completing the 30-day tutorial.

**Architecture:** Same data-driven static site. `lang:"javascript"` snippets/puzzles run with the local Node (deterministic stdout compare); `jsx`/`tsx`/`typescript`/`html` are display-only. Each content task flips its own day to `ready: true`.

**Tech Stack:** unchanged + Node 22 as the JS runner; Prism 1.29.0 components for javascript/jsx/typescript/tsx/markup.

**Spec:** `docs/specs/2026-10-21-dotnet-tl-interview-prep-design.md` (§6 Week 4, days 22–30). Earlier plans (schema, constraints): phase1, week2, week3 plans in `docs/superpowers/plans/`.

## Global Constraints

- All earlier plans' Global Constraints, the content data schema and `content-guide.md` (every "Lessons" line) still apply.
- Puzzles ≥5 for days 22–30, except Day 28 (leadership) ≥3 (estimation/forecast maths in C#).
- User choices (binding): full-size content; writer = Sonnet, task reviewer = Opus, re-reviews Sonnet/Haiku or controller grep-verification for small fixes.
- Days 27 (AI in their WhatsApp bot) and 28 (incident / leadership stories) use the learner-decided format: fill-in templates + clearly labelled samples ("Sample — replace with your own"); never present invented details as the learner's.
- AI/LLM facts change fast: verify product names/APIs (Microsoft.Extensions.AI, Semantic Kernel / Microsoft Agent Framework, Azure OpenAI / Azure AI Foundry, GitHub Copilot, Claude) against official docs; no prices; hedge quotas/model names.
- Commit messages end with a blank line + `Co-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>`.

## Review Focus

1. JS run-checks must be deterministic and isolated (temp dir per snippet, no network, timeout → FAIL; no reliance on timing/Date/Math.random).
2. Non-runnable languages marked `check:"compile"`/`"run"` must be rejected by the validator (only csharp, sql, javascript checkable).
3. Legacy facts (.NET Framework 4.8.x support policy, System.Web, Web Forms not in .NET Core) and migration tooling names (Upgrade Assistant status, System.Web adapters, YARP incremental migration) must be current — verify.
4. Security content must not teach insecure code without a clear "vulnerable — don't do this" label next to the fix.
5. Mock days (29–30) must not contradict earlier days; Day 30 cheat sheet must use corrected facts from all days.

---

### Task 1: Tooling — JavaScript run-checks + Week 3 carry-overs

**Files:** `tutorial/tools/validate.mjs`, `tools/check-code.mjs`, `assets/app.js`, `day.html`, `tests/*.mjs`, fixtures, `README.md`.

**Interfaces:**
- `lang` adds `"javascript"` (checkable: compile = `node --check file.mjs`; run = `node file.mjs`, stdout compare like C#), `"jsx"`, `"tsx"`, `"typescript"`, `"html"` (display-only). Puzzles may be `csharp`, `sql` or `javascript`.
- Prism: add `prism-javascript` (if not in core), `prism-jsx`, `prism-typescript`, `prism-tsx`, `prism-markup` components 1.29.0 with sha384 SRI; map html→markup.
- minPuzzles: 5 for days 1–30 except day 28 → 3.
- Week 3 carry-overs: delete or use `tests/fixtures/day-pkg.js` (prefer a CLI test guarded by network availability); `hasSql` test probe starts LocalDB first; probe failure reason printed ("sqlcmd not found" / "timeout" / first stderr line); validator rejects `packages`/`frameworks` on non-csharp items; README notes SQL `check:"compile"` executes the script.

- [ ] Step 1: failing tests (js run PASS / wrong expected FAIL / syntax error FAIL / timeout FAIL; validator lang + puzzle-lang + packages-on-sql rules; minPuzzles day 28 = 3). Step 2: FAIL. Step 3: implement. Step 4: `node --test`, `node tools/validate.mjs` (days 1–21 ok), `node tools/check-code.mjs --file <js fixture>`; browser: JS/JSX highlighting renders (Chrome DevTools MCP if available).
- [ ] Step 5: commit `tools: JavaScript run-checks + week 3 tooling carry-overs`.

### Tasks 2–10: Week 4 content days 22–30

One task per day; each creates `tutorial/content/dayNN.js` and flips its day `ready: true` (same commit).

| Task | File | Topic (spec §6) | Extra |
|---|---|---|---|
| 2 | `day22.js` | Legacy refresher — Web Forms vs MVC vs ASP.NET Core; MVC request lifecycle (routing → controller factory → action → filters → result → view engine); HttpModules/HttpHandlers/Global.asax → middleware; web.config → appsettings; migrating .NET Framework → .NET 10 (Upgrade Assistant status, System.Web adapters, YARP strangler-fig incremental migration, .NET Standard 2.0 libraries, Windows-only APIs, WCF → CoreWCF/gRPC) | learner's strongest legacy area — bridge to Day 12; C# puzzles |
| 3 | `day23.js` | JavaScript essentials — var/let/const & hoisting/TDZ, closures, `this` rules & arrow functions, prototypes vs classes, == vs ===, promises/async-await, event loop (microtasks vs macrotasks), modules (ESM), fetch, jQuery → modern DOM APIs | `lang:"javascript"` puzzles run on Node (event-loop order, closure in loop, this binding, hoisting) |
| 4 | `day24.js` | React/Next.js basics — components, JSX, props/state, hooks (useState, useEffect + deps, custom hooks), lists & keys, controlled forms, calling an ASP.NET Core Web API (CORS cross-ref Day 13, auth token handling), Next.js App Router: server vs client components, SSR/SSG/CSR/ISR, data fetching | JSX/TSX display-only; puzzles in plain JS (state update batching model, useEffect dependency simulation, key reconciliation model) |
| 5 | `day25.js` | Testing — test pyramid, unit vs integration vs E2E, xUnit (Fact/Theory, fixtures, v3 status — verify), mocking (Moq vs NSubstitute; Moq SponsorLink history — factual only), FluentAssertions licence change (verify) vs alternatives, WebApplicationFactory integration tests, Testcontainers, EF Core testing strategy (cross-ref Day 7), TDD red-green-refactor, test naming, code coverage (what it does/doesn't tell), TL angle: testing strategy for a team | xUnit snippets compile-checked with pinned packages; puzzles run as console programs |
| 6 | `day26.js` | Security + Performance — OWASP Top 10 (current edition — verify) mapped to .NET: injection (parameterised queries, EF FromSql), XSS (Razor encoding, CSP), CSRF (antiforgery, SameSite), broken access control (authorization policies, IDOR), secrets (Key Vault, user-secrets — cross-ref 12/20), crypto (hashing passwords — ASP.NET Core Identity PasswordHasher / PBKDF2, never MD5/SHA1), SSRF, security headers, dependency scanning; Performance: measure first (BenchmarkDotNet, dotnet-counters/trace, Application Insights), allocations & GC (cross-ref Day 3), async scalability & thread pool starvation, caching (cross-ref 13), EF performance (cross-ref 6), response compression, pagination | vulnerable code labelled + fixed version; puzzles (C#/JS/SQL) e.g. SQL injection via string concat on LocalDB vs parameterised, HTML encoding output, password hash verify |
| 7 | `day27.js` | AI for .NET developers — using AI coding assistants (Claude, GitHub Copilot) responsibly (review, tests, security, licensing), prompt basics for devs, LLM concepts (tokens, context window, temperature, hallucination), Microsoft.Extensions.AI (IChatClient) abstractions, Semantic Kernel / Microsoft Agent Framework (verify current recommendation), Azure OpenAI / Azure AI Foundry, embeddings + vector search + RAG pipeline, function/tool calling, evaluation & guardrails, cost/latency control; AI in a WhatsApp bot (template + labelled sample); how to talk about AI as a TL | C# puzzles offline (cosine similarity, chunking, token-budget trimming, simple retrieval ranking, prompt template rendering) — no network calls |
| 8 | `day28.js` | TL leadership & behavioral — STAR method; code review culture; estimation (story points vs hours, PERT, forecasting with velocity); handling conflict; mentoring & delegation; stakeholder management & saying no; production incident handling + blameless postmortem; tech debt prioritisation; hiring/interviewing others; "why should we hire you as TL" | all personal stories as templates + labelled samples; ≥3 C# puzzles (PERT estimate, velocity forecast range, priority scoring) |
| 9 | `day29.js` | Mock interview 1 — mixed technical rounds across days 1–21 (C#, LINQ, EF, patterns, ASP.NET Core, SQL, architecture) as timed Q&A sets; how to answer (structure, clarify, trade-offs) | NEW questions only; puzzles mixed (C#/SQL/JS) |
| 10 | `day30.js` | Mock interview 2 (system design + leadership + AI round) + final one-page cheat sheet per week + interview-day checklist | cheat sheets use corrected facts from all days; final all-days checks (`node --test`, validate, `check-code --strict` all 30 days) + browser walk (home 30/30, Today, dark mode, 375px) |
