# .NET Tech Lead Interview Prep — HTML Tutorial Design

Date: 2026-10-21
Owner: Pankaj (learner)

## 1. Intent and why

Learner: .NET developer, 11+ years experience, targeting **.NET Tech Lead (TL)** roles (mostly India market).
Feels low confidence in AI era. Plans to start interviewing **within 1 month**, can study **1–1.5 hours daily**.

Self-ratings (out of 10): .NET 6, C# 5, SQL Server 6, ASP.NET 6, ASP.NET MVC 3, JS/jQuery 2,
React/Next.js 1, ASP.NET Core 2, Web API 3, WhatsApp Bot 3, Azure 2, Git 2, DevOps 2, PostgreSQL 3, Claude/AI tools 3.

Stated weak spots (learner's own words): **OOP, design patterns, LINQ, EF Core**. Design patterns = most common question that makes them feel weak.

Goal: a 30-day, self-study HTML tutorial that turns these weak spots into confident interview answers, and covers what 2026 .NET TL job postings ask for.

### What 2026 TL postings ask (web research)
- C#, .NET 8+, ASP.NET Core Web API, EF Core
- SQL Server / PostgreSQL, query tuning
- Microservices, SOLID, design patterns, DDD basics, event-driven architecture
- Azure: App Service, Functions, Service Bus, Key Vault, API Management, App Insights
- CI/CD (Azure DevOps), Git, Docker
- Basic React or Angular
- AI: using AI coding tools, integrating LLM features
- Leadership: code reviews, mentoring, estimation, stakeholder handling
- Frequent interview questions: DI, async/await, global exception handling, middleware, monolith vs microservices, secrets management, CI/CD, "design X on Azure"

## 2. Goals
- Easy, understandable explanations: real-life analogy first, then concept, then code.
- **Two depths per topic**: Short (≈15 min read, interview-ready summary) and Detailed (≈40 min, with code).
- **Three languages, learner-selectable**: English, Hindi (Devanagari script), Hinglish (Hindi in Roman script mixed with English tech terms).
- Interview-question focus: each topic lists the real questions interviewers ask, with model answers, hidden until clicked (self-test).
- "What will this print?" code puzzles for OOP, C#, LINQ, EF Core.
- Last-minute revision box per topic (read on interview day).
- Day-wise 30-day plan, progress tracking.

## 3. Non-goals
- Not a video course, not a hosted LMS, no login/backend.
- No deep coverage of legacy Web Forms internals — only a short refresher.
- Not a coding-exercise runner (no in-browser C# execution).

## 4. Anti-goals (failure even if it "works")
- Walls of text / textbook tone — learner must not feel overwhelmed.
- Wrong or outdated technical facts (e.g. pre-.NET Core answers presented as current). Target **.NET 10 (current LTS, Nov 2025), C# 14, EF Core 10**; mention .NET 11 (due Nov 2026). Each relevant day gets a short "What's new in .NET 9/10" note. Code may use C# 12+ syntax. Day 22 migration target = .NET 10. *(Claude's call)*
- Hindi/Hinglish that is machine-literal and harder to read than English. Technical terms (class, interface, DbContext, middleware…) stay in English in all languages.
- Code examples that don't compile.

## 5. Layout (decided: B home + C topic pages)
**Home page (dashboard)**
- Title, language switch (EN / हिंदी / Hinglish), "Today ▶" button (opens first not-done day).
- 4 week cards with topic list + progress bar (done/total).
- Short "How to use" note: read Short (15 min) → Detailed (40 min) → answer questions aloud (15–20 min).

**Topic page (one per day)**
- Sticky top bar: ◀ Prev day | Day N: Title | Next day ▶ | language switch | Short/Detailed toggle | Home.
- Sections in order:
  1. ⚡ 2-min summary
  2. 📘 Concept + real-life analogy
  3. 💻 Code examples (C#, syntax highlighted)
  4. ❓ Interview Q&A — question visible, answer hidden behind "Show answer ▼"
  5. 🧩 Puzzles ("What will this print?") — answer hidden
  6. 📝 Last-minute revision box
  7. "Mark day as done ✓" button
- Short mode: shows summary, key concept bullets, top ~8 Q&A, revision box. Detailed mode: everything.

Language + depth choice and done-days remembered in browser (localStorage, wrapped in try/catch; page works without it).

## 6. Content — 30-day curriculum
Weakest + most-asked first.

**Week 1 — Foundations (weak spots)**
1. OOP — 4 pillars, abstract class vs interface (incl. default interface methods), overloading vs overriding, virtual/override/new/sealed, composition vs inheritance, constructors (static/private/chaining), access modifiers, no multiple inheritance, output puzzles
2. C# Core — value vs reference types, stack/heap, boxing, string vs StringBuilder, immutability, generics, collections, delegates/events/lambdas, extension methods
3. C# Advanced — async/await, Task vs Thread, ConfigureAwait, exceptions, IDisposable/using, GC, records, pattern matching, nullable reference types, Span basics
4. LINQ — deferred vs immediate execution, IEnumerable vs IQueryable, Select vs SelectMany, GroupBy, Join/GroupJoin, First/Single/FirstOrDefault, Any vs Count, Distinct/DistinctBy, pagination, many puzzles
5. EF Core Part 1 — DbContext (lifetime, scoped), DbSet, Code-First vs DB-First, migrations, relationships, loading (eager/lazy/explicit), tracking vs AsNoTracking
6. EF Core Part 2 — N+1 problem, generated SQL (link to learner's SQL strength), projections, compiled queries, raw SQL (FromSql), transactions, concurrency tokens, bulk ExecuteUpdate/ExecuteDelete, performance tips
7. Week 1 revision + mixed quiz

**Week 2 — Design & Web**
8. SOLID — each principle with bad→good C# refactor
9. Creational patterns — Singleton (thread-safe, vs static class, vs DI singleton), Factory Method, Abstract Factory, Builder
10. Structural + Behavioral patterns — Adapter, Decorator, Facade, Proxy, Strategy, Observer, Mediator, Chain of Responsibility (link to middleware)
11. Enterprise patterns — Repository + Unit of Work ("needed with EF Core?"), CQRS + MediatR, Options pattern, DI lifetimes (Transient/Scoped/Singleton, captive dependency)
12. ASP.NET Core fundamentals — hosting, Program.cs, middleware pipeline, DI, configuration, environments, logging, filters, Minimal API vs Controllers
13. Web API — REST principles, status codes, versioning, validation, global exception handling (ProblemDetails), JWT/OAuth2, CORS, caching, rate limiting, Swagger/OpenAPI, HttpClientFactory
14. Week 2 revision + quiz

**Week 3 — Architecture, Data, Cloud**
15. Architecture — layered, Clean/Onion architecture, monolith vs modular monolith vs microservices, DDD basics (entities, value objects, aggregates, bounded context)
16. Microservices deep dive — API gateway, sync vs async communication, Service Bus/queues, Saga, outbox, idempotency, resilience (Polly: retry/circuit breaker), distributed tracing
17. System design for TL rounds — approach framework; worked designs: order management on Azure, WhatsApp bot/notification system (learner's real experience), URL shortener; caching with Redis, scaling
18. SQL Server — indexes (clustered/non-clustered/covering), execution plans, joins, CTE, window functions, SP vs function, temp table vs table variable, isolation levels, deadlocks, query tuning
19. PostgreSQL + data comparisons — PostgreSQL vs SQL Server differences, JSONB, indexing in Postgres, EF Core with Npgsql, when NoSQL
20. Azure — App Service, Functions, Service Bus vs Event Grid vs Event Hub, Storage, Key Vault + Managed Identity, APIM, App Insights, Azure SQL
21. DevOps — Git branching strategies, PR/code review flow, Azure DevOps YAML pipelines, Docker basics + Dockerfile for .NET, CI/CD, environments

**Week 4 — Breadth, AI, Leadership, Mocks**
22. Legacy refresher — ASP.NET Web Forms vs MVC vs Core, MVC request lifecycle, migrating .NET Framework → .NET 8
23. JavaScript essentials — var/let/const, closures, this, promises/async, event loop, jQuery → modern JS
24. React/Next.js basics — components, props/state, hooks (useState/useEffect), calling Web API, Next.js SSR vs CSR
25. Testing — unit vs integration, xUnit, Moq, test pyramid, WebApplicationFactory, TDD talk-points
26. Security + Performance — OWASP top 10 for .NET, SQL injection, XSS, CSRF, secrets, profiling, caching, async scalability
27. AI for .NET developers — using Claude/Copilot in daily work, prompt basics, Azure OpenAI / Semantic Kernel integration, RAG basics, AI in WhatsApp bot, how to talk about AI in interviews
28. TL leadership & behavioral — STAR method, code review practice, estimation, handling conflict, mentoring, production incident story, "why should we hire you as TL"
29. Mock interview 1 — mixed technical rounds (Q&A self-test only)
30. Mock interview 2 + final cheat sheet (one-page revision of everything)

## 7. Content rules (per topic)
- Analogy first, then concept, then code.
- Each Q&A answer: 1-line crisp answer first (what to say in interview), then explanation.
- Short version Q&A count ≈ 8; detailed ≈ 15–25 per topic.
- Puzzles: ≥5 for days 1–6 and 9–11.
- Code: C# 12 / .NET 8 style, compiles, comments in English.
- Hindi/Hinglish: translate explanations; keep technical terms, code and identifiers in English.
- **Interview answers stay English in all modes** (learner decided): analogy, concept, explanation translated; the 1-line crisp answer and the revision box stay English, with a small Hindi/Hinglish meaning ("मतलब / Matlab:") shown below in Hindi/Hinglish mode. Learner rehearses the exact English lines they will speak.
- **Personal-story days (17, 27, 28) = templates + examples** (learner decided): STAR fill-in templates plus sample stories clearly labelled "Sample — replace with your own". Never present invented details as the learner's.

## 8. Constraints
- Plain static HTML/CSS/JS — opens by double-click, works offline. No build step, no framework.
- Shared `assets/style.css` + `assets/app.js`; one HTML file per day + `index.html`.
- Syntax highlighting: inline lightweight solution or a CDN library pinned to exact version, with graceful fallback when offline (plain monospace).
- Light + dark mode. Learner studies **mostly on laptop** (decided) — desktop-first, but layout must not break on a phone. No cross-device sync needed; localStorage progress is fine.
- Location: `D:\Pankaj_Work_New\KnowladgeBase\SkillsImprover\tutorial\`.

## 9. Delivery (Claude's call)
- **Phase 1:** framework (home + shared CSS/JS) + Week 1 (days 1–7) in all 3 languages. Learner reviews quality/tone.
- **Phase 2:** Weeks 2–4 using the approved style.
- No hosting needed (laptop mostly).

## 10. Left to the builder
- Exact visual design (colors, fonts) within light/dark + mobile constraints.
- How the 3 languages are stored inside a page (e.g. `data-lang` blocks toggled by CSS/JS).
- Exact question selection per topic within rules above.
- Mock interview day format details.

## 11. Calls Claude made (learner may override)
- Layout B+C (learner said "go with your recommendation").
- Hindi in Devanagari script; Hinglish in Roman script.
- 30-day ordering above; Phase 1 = Week 1 first.
- Added Testing (day 25) and Security/Performance (day 26) — common TL questions not on learner's list.
- Static files in `tutorial\` folder.
