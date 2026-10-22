# .NET TL Interview Prep — Week 3 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Week 3 (days 15–21: Architecture, Microservices, System Design, SQL Server, PostgreSQL, Azure, DevOps) plus multi-language code support (SQL run-checked on LocalDB; YAML/Dockerfile/Bash/JSON shown highlighted) and the Week 2 carry-over fixes.

**Architecture:** Same data-driven static site. Code items and puzzles gain an optional `lang` (default `csharp`). The checker runs `lang:"sql"` snippets/puzzles against SQL Server LocalDB in a throw-away database via `sqlcmd`; other non-C# languages are display-only (`check:"none"`). The renderer loads matching Prism grammars. Each content task flips its own day to `ready: true`.

**Tech Stack:** unchanged + SQL Server LocalDB `(localdb)\MSSQLLocalDB` and `sqlcmd` (ODBC 17 tools) found on the machine; Prism 1.29.0 components (sql, yaml, docker, bash, json).

**Spec:** `docs/specs/2026-10-21-dotnet-tl-interview-prep-design.md` (§6 Week 3, days 15–21). Earlier plans (schema, constraints): `docs/superpowers/plans/2026-10-21-tl-prep-phase1.md`, `docs/superpowers/plans/2026-10-22-tl-prep-week2.md`.

## Global Constraints

- Everything in the Phase 1 and Week 2 plans' Global Constraints and the content data schema still applies.
- Content rules: `content-guide.md` (all "Lessons" lines) apply to every Week 3 day.
- Puzzles ≥5 for days 15–21 (extend validator minPuzzles to 1–21).
- User choices (binding): full-size content; writer = Sonnet, task reviewer = Opus, re-reviews Sonnet/Haiku.
- Day 17 system design uses the learner-decided format: fill-in templates + clearly labelled sample stories ("Sample — replace with your own"); never present invented details as the learner's.
- Cloud/version facts (Azure service names, tiers, limits, pricing) change often: state only stable, verified facts; no prices; say "check current limits" for quotas.
- Commit messages end with a blank line + `Co-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>`.

## Review Focus

1. SQL run-checks must be isolated and repeatable: each snippet in its own throw-away database, dropped after; a failing SQL statement must FAIL (sqlcmd `-b`), never PASS silently.
2. Non-C# code marked `check:"compile"`/`"run"` by mistake must be rejected by the validator (only `csharp` and `sql` may be checked).
3. SQL Server facts that changed across versions (e.g. table variable deferred compilation in 2019, `STRING_AGG` 2017, `GREATEST/LEAST` 2022, `IS [NOT] DISTINCT FROM` 2022) must carry the version.
4. Cross-day consistency with Days 5–7 (EF Core SQL, transactions, isolation), 11 (CQRS), 12–13 (middleware, auth, caching, resilience).
5. Rendering: new grammars load offline-safe (page still renders without them); no raw tags in HTML fields.

---

### Task 1: Carry-over fixes + multi-language code support

**Files:** `tutorial/content/day13.js`, `day14.js` (hi/hg wording), `tools/validate.mjs`, `tools/check-code.mjs`, `assets/app.js`, `day.html`, `tests/*.mjs`, fixtures, `README.md`.

**Interfaces:**
- Produces: code item / puzzle field `lang?: "csharp" | "sql" | "yaml" | "dockerfile" | "bash" | "json" | "text"` (default `csharp`). Validator: unknown lang → `"<path>: unknown lang X"`; `check` other than `"none"` allowed only for `csharp` and `sql` → `"<path>: lang X must use check:\"none\""`; puzzles must be `csharp` or `sql`.
- Checker: `sql` snippets/puzzles → create DB `tlsnip_<key>` on `(localdb)\MSSQLLocalDB`, run `sqlcmd -S "(localdb)\MSSQLLocalDB" -d tlsnip_<key> -b -h -1 -W -I -i <file>` (`SET NOCOUNT ON` prepended), compare stdout (normalised as for C#) to `expected`/`answer` for run mode; compile mode = run without compare; always drop the DB (even on failure). LocalDB missing → SKIP with reason (not FAIL). New `--strict` flag: exit 1 when any SKIP.
- Renderer: `<code class="language-<lang>">` (Prism names: csharp, sql, yaml, docker, bash, json, none for text); load the matching Prism 1.29.0 components (defer, offline-safe).
- Carry-over: day13.js hi/hg ~:695/:705 "always IHttpClientFactory" → "prefer…" (match en :685); day14.js hi/hg ~:247/:258 add "(Minimal APIs have endpoint filters)" caveat (match en :236). Raw-tag tests for caption, puzzles.explain, revision.meaning, title; scan curriculum titles too.

- [ ] Step 1: failing tests (lang validation; csproj unaffected for csharp; sql fixture: run snippet PASS, wrong expected FAIL, bad SQL FAIL; `--strict` exit code; raw-tag per field). Step 2: FAIL. Step 3: implement. Step 4: `node --test`, `node tools/validate.mjs`, `node tools/check-code.mjs --file tests/fixtures/<sql fixture>` all as expected; day13/day14 still validate. Browser: a SQL and a YAML block highlight (Chrome DevTools MCP if available).
- [ ] Step 5: commit `tools: multi-language code (SQL on LocalDB) + week 2 carry-over fixes`.

### Tasks 2–8: Week 3 content days 15–21

One task per day; each creates `tutorial/content/dayNN.js` and flips its day `ready: true` (same commit). Steps = `content-tasks.md` steps 1–5 + ready flip.

| Task | File | Topic (spec §6) | Extra |
|---|---|---|---|
| 2 | `day15.js` | Architecture — layered, Clean/Onion, monolith vs modular monolith vs microservices, DDD basics (entities, value objects, aggregates, bounded context) | C# puzzles (value object equality via records, aggregate invariants); TL angle: when NOT to do microservices |
| 3 | `day16.js` | Microservices — API gateway (YARP), sync vs async, queues/Service Bus, Saga (choreography vs orchestration), Outbox, idempotency, resilience (Polly v8 / Microsoft.Extensions.Resilience), distributed tracing (OpenTelemetry, W3C trace context) | cross-ref Day 13 resilience; C# puzzles (idempotent consumer, outbox ordering, retry count) |
| 4 | `day17.js` | System design for TL rounds — framework (requirements → estimates → API → data → scale → trade-offs); worked designs: order management on Azure, WhatsApp bot/notification system, URL shortener; caching (Redis), scaling (horizontal, partitioning, CDN) | learner-story format: STAR template + labelled samples; puzzles may be small C# calculations (capacity estimates, consistent-hash/base62) |
| 5 | `day18.js` | SQL Server — indexes (clustered/non-clustered/covering/filtered, INCLUDE), execution plans & SARGability, joins, CTE (recursive), window functions, SP vs function (scalar/TVF, inlining 2019), temp table vs table variable, isolation levels (RCSI/snapshot), deadlocks, query tuning | `lang:"sql"` snippets & puzzles run on LocalDB; version tags per Review Focus 3; link to Day 5–6 EF SQL |
| 6 | `day19.js` | PostgreSQL + data choices — Postgres vs SQL Server differences (MVCC/VACUUM, identity/sequences, case sensitivity, ILIKE, upsert ON CONFLICT), JSONB + GIN, indexing (B-tree/GIN/BRIN, partial, expression), EF Core with Npgsql, when NoSQL (Cosmos DB / Mongo / Redis) | Postgres code `lang:"sql"` but `check:"none"` (no local Postgres) — label "PostgreSQL"; C# puzzles via Npgsql-free logic or SQL Server LocalDB comparisons |
| 7 | `day20.js` | Azure — App Service, Functions (triggers, plans incl. Flex Consumption), Service Bus vs Event Grid vs Event Hubs, Storage (Blob/Queue/Table), Key Vault + Managed Identity (DefaultAzureCredential), APIM, Application Insights / Azure Monitor (OpenTelemetry), Azure SQL | cross-ref Days 13, 16; no prices; puzzles in C# (e.g. retry/backoff timing, choosing messaging service via logic, config precedence with Key Vault provider simulated) |
| 8 | `day21.js` | DevOps — Git branching (trunk-based vs GitFlow), PR/code review flow, Azure DevOps YAML pipelines (stages/jobs/steps, templates, environments & approvals), Docker basics + multi-stage Dockerfile for .NET (chiseled images, non-root), CI/CD, environments & secrets | `lang:"yaml"` / `lang:"dockerfile"` / `lang:"bash"` display-only; puzzles in C# or SQL (e.g. semantic version ordering, branch-merge order); final walk: home shows 21 ready days; all-days check-code |

Task 8 also runs the all-days checks (`node --test`, `node tools/validate.mjs`, `node tools/check-code.mjs --strict`) and a browser walk 15→21 (dark mode + 375px on day 18).
