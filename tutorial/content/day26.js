// Day 26 — Security + Performance for .NET Tech Leads. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 26,
  title: {
    en: "Security + Performance for .NET Tech Leads — OWASP Top 10 mapped to .NET, secure coding, threat modelling, measure first, common performance wins",
    hi: "Tech Leads के लिए Security + Performance — OWASP Top 10 का .NET mapping, secure coding, threat modelling, measure first, common performance wins",
    hg: "Tech Leads ke liye Security + Performance — OWASP Top 10 ka .NET mapping, secure coding, threat modelling, measure first, common performance wins"
  },
  summary: {
    en: `<p>Two questions decide a lot in a Tech Lead interview: "<b>how do you keep this system secure?</b>" and "<b>the API is slow, what do you do?</b>" Think of a housing society. Security is the <b>gate guard, the ID check at each flat and the CCTV</b>: many small layers, so one failure is not a disaster. Performance is the <b>electricity meter</b>: you read the meter before you blame the AC.</p>
<ul>
<li><b>OWASP Top 10:</b> the current release on owasp.org is <b>2025</b> (2021 was the one before; interviewers still use its names). Know the list and map each item to a .NET tool, for example Injection to parameters and encoding, Broken Access Control to authorization policies, Authentication Failures to ASP.NET Core Identity, Supply Chain Failures to NuGet audit.</li>
<li><b>Injection and XSS:</b> never build SQL from strings; use parameters (<code>FromSql</code> with interpolation, <code>SqlCommand</code> parameters). Razor encodes output by default; <code>Html.Raw</code> switches that protection off. A <b>Content-Security-Policy</b> header is a second layer.</li>
<li><b>Access control:</b> check <b>ownership</b> on every object (IDOR), not only "is logged in". Use policies for roles and claims, and resource-based authorization when the rule depends on the data.</li>
<li><b>CSRF:</b> cookie-based apps need antiforgery tokens and a sensible <code>SameSite</code>; APIs that read a bearer token from the <code>Authorization</code> header are much less exposed, because browsers do not attach that header by themselves.</li>
<li><b>Passwords and crypto:</b> hash passwords with the Identity <code>PasswordHasher</code> (PBKDF2 with salt), never MD5, SHA1 or a plain SHA256. Compare secrets with <code>FixedTimeEquals</code>. TLS plus HSTS for transport; Data Protection API for cookies and tokens you issue.</li>
<li><b>Everything else:</b> no detailed errors in production, security headers, <code>dotnet list package --vulnerable</code> and NuGet Audit, validate outbound URLs (SSRF), no secrets or PII in logs, no unsafe deserialization (Day 22), secrets in Key Vault (Days 12, 20, 21).</li>
<li><b>Performance:</b> <b>measure first</b> (BenchmarkDotNet for code, <code>dotnet-counters</code> and <code>dotnet-trace</code> for a running process, Application Insights or OpenTelemetry for production, Days 16 and 20). Usually the biggest wins are in I/O: indexes and N+1 (Days 6, 18), caching (Day 13), async all the way (Day 3), pagination, compression. Allocation tuning comes after.</li>
<li><b>TL angle:</b> threat-model new features (STRIDE in 15 minutes), keep a secure code-review checklist, make CI fail on known vulnerable packages and leaked secrets, and agree performance budgets and SLOs before arguing about micro-optimisations.</li>
</ul>
<p>Plan (Short about 25 minutes; Detailed is reference, see the page estimate): Short mode, then Q&amp;A aloud, then the code sections (every insecure snippet is labelled "VULNERABLE" and followed by the fixed version), then the seven puzzles.</p>`,
    hi: `<p>Tech Lead interview में दो सवाल बहुत कुछ तय करते हैं: "<b>तुम इस system को secure कैसे रखते हो?</b>" और "<b>API slow है, तुम क्या करोगे?</b>" एक housing society सोचो। Security है <b>gate guard, हर flat पर ID check और CCTV</b>: कई छोटी layers, ताकि एक failure disaster न बने। Performance है <b>बिजली का meter</b>: AC को दोष देने से पहले meter पढ़ते हो।</p>
<ul>
<li><b>OWASP Top 10:</b> owasp.org पर अभी की release <b>2025</b> है (उससे पहले 2021 थी; interviewers उसके नाम अब भी use करते हैं)। List जानो और हर item को .NET के tool से map करो, जैसे Injection को parameters और encoding से, Broken Access Control को authorization policies से, Authentication Failures को ASP.NET Core Identity से, Supply Chain Failures को NuGet audit से।</li>
<li><b>Injection और XSS:</b> SQL कभी strings जोड़कर मत बनाओ; parameters use करो (interpolation वाला <code>FromSql</code>, <code>SqlCommand</code> parameters)। Razor output को default से encode करता है; <code>Html.Raw</code> वो protection बंद कर देता है। <b>Content-Security-Policy</b> header दूसरी layer है।</li>
<li><b>Access control:</b> हर object पर <b>ownership</b> check करो (IDOR), सिर्फ़ "logged in है" नहीं। Roles और claims के लिए policies, और जब rule data पर depend करे तब resource-based authorization।</li>
<li><b>CSRF:</b> cookie वाले apps को antiforgery tokens और ठीक-सा <code>SameSite</code> चाहिए; जो APIs bearer token <code>Authorization</code> header से पढ़ती हैं वो बहुत कम exposed हैं, क्योंकि browser वो header अपने-आप नहीं लगाता।</li>
<li><b>Passwords और crypto:</b> passwords Identity के <code>PasswordHasher</code> (salt के साथ PBKDF2) से hash करो, MD5, SHA1 या plain SHA256 से कभी नहीं। Secrets <code>FixedTimeEquals</code> से compare करो। Transport के लिए TLS और HSTS; जो cookies और tokens तुम issue करते हो उनके लिए Data Protection API।</li>
<li><b>बाकी सब:</b> production में detailed errors नहीं, security headers, <code>dotnet list package --vulnerable</code> और NuGet Audit, outbound URLs validate करो (SSRF), logs में secrets या PII नहीं, unsafe deserialization नहीं (Day 22), secrets Key Vault में (Days 12, 20, 21)।</li>
<li><b>Performance:</b> <b>पहले measure करो</b> (code के लिए BenchmarkDotNet, चलते process के लिए <code>dotnet-counters</code> और <code>dotnet-trace</code>, production के लिए Application Insights या OpenTelemetry, Days 16 और 20)। आमतौर पर सबसे बड़े wins I/O में होते हैं: indexes और N+1 (Days 6, 18), caching (Day 13), async all the way (Day 3), pagination, compression। Allocation tuning बाद में आती है।</li>
<li><b>TL angle:</b> नए features का threat-model करो (15 मिनट में STRIDE), secure code-review checklist रखो, CI को known vulnerable packages और leaked secrets पर fail करवाओ, और micro-optimisations पर बहस से पहले performance budgets और SLOs तय करो।</li>
</ul>
<p>Plan (Short लगभग 25 मिनट; Detailed reference है, page का estimate देखो): पहले Short mode, फिर Q&amp;A ज़ोर से बोलकर, फिर code sections (हर insecure snippet पर "VULNERABLE" label है और उसके बाद fixed version), फिर सात puzzles।</p>`,
    hg: `<p>Tech Lead interview mein do sawaal bahut kuch tay karte hain: "<b>tum is system ko secure kaise rakhte ho?</b>" aur "<b>API slow hai, tum kya karoge?</b>" Ek housing society socho. Security hai <b>gate guard, har flat par ID check aur CCTV</b>: kai chhoti layers, taaki ek failure disaster na bane. Performance hai <b>bijli ka meter</b>: AC ko dosh dene se pehle meter padhte ho.</p>
<ul>
<li><b>OWASP Top 10:</b> owasp.org par abhi ki release <b>2025</b> hai (usse pehle 2021 thi; interviewers uske naam ab bhi use karte hain). List jaano aur har item ko .NET ke tool se map karo, jaise Injection ko parameters aur encoding se, Broken Access Control ko authorization policies se, Authentication Failures ko ASP.NET Core Identity se, Supply Chain Failures ko NuGet audit se.</li>
<li><b>Injection aur XSS:</b> SQL kabhi strings jodkar mat banao; parameters use karo (interpolation wala <code>FromSql</code>, <code>SqlCommand</code> parameters). Razor output ko default se encode karta hai; <code>Html.Raw</code> woh protection band kar deta hai. <b>Content-Security-Policy</b> header doosri layer hai.</li>
<li><b>Access control:</b> har object par <b>ownership</b> check karo (IDOR), sirf "logged in hai" nahi. Roles aur claims ke liye policies, aur jab rule data par depend kare tab resource-based authorization.</li>
<li><b>CSRF:</b> cookie wale apps ko antiforgery tokens aur theek-sa <code>SameSite</code> chahiye; jo APIs bearer token <code>Authorization</code> header se padhti hain woh bahut kam exposed hain, kyunki browser woh header apne-aap nahi lagata.</li>
<li><b>Passwords aur crypto:</b> passwords Identity ke <code>PasswordHasher</code> (salt ke saath PBKDF2) se hash karo, MD5, SHA1 ya plain SHA256 se kabhi nahi. Secrets <code>FixedTimeEquals</code> se compare karo. Transport ke liye TLS aur HSTS; jo cookies aur tokens tum issue karte ho unke liye Data Protection API.</li>
<li><b>Baaki sab:</b> production mein detailed errors nahi, security headers, <code>dotnet list package --vulnerable</code> aur NuGet Audit, outbound URLs validate karo (SSRF), logs mein secrets ya PII nahi, unsafe deserialization nahi (Day 22), secrets Key Vault mein (Days 12, 20, 21).</li>
<li><b>Performance:</b> <b>pehle measure karo</b> (code ke liye BenchmarkDotNet, chalte process ke liye <code>dotnet-counters</code> aur <code>dotnet-trace</code>, production ke liye Application Insights ya OpenTelemetry, Days 16 aur 20). Aamtaur par sabse bade wins I/O mein hote hain: indexes aur N+1 (Days 6, 18), caching (Day 13), async all the way (Day 3), pagination, compression. Allocation tuning baad mein aati hai.</li>
<li><b>TL angle:</b> naye features ka threat-model karo (15 minute mein STRIDE), secure code-review checklist rakho, CI ko known vulnerable packages aur leaked secrets par fail karwao, aur micro-optimisations par behas se pehle performance budgets aur SLOs tay karo.</li>
</ul>
<p>Plan (Short lagbhag 25 minute; Detailed reference hai, page ka estimate dekho): pehle Short mode, phir Q&amp;A zor se bolkar, phir code sections (har insecure snippet par "VULNERABLE" label hai aur uske baad fixed version), phir saat puzzles.</p>`
  },
  sections: [
    {
      id: "owasp-map",
      depth: "short",
      title: {
        en: "OWASP Top 10 (2025) mapped to .NET",
        hi: "OWASP Top 10 (2025) का .NET mapping",
        hg: "OWASP Top 10 (2025) ka .NET mapping"
      },
      body: {
        en: `<p><b>Analogy:</b> a housing society does not rely on one guard. There is a gate register, a lock on each flat and a CCTV. OWASP Top 10 is the society committee's list of the <b>ten most common ways the gates are left open</b>, built from data on real applications. The current release on owasp.org is <b>OWASP Top 10:2025</b>; the 2021 list is the previous edition and many interviewers still quote it, so know both names where they differ.</p>
<ul>
<li><b>A01 Broken Access Control</b> (SSRF is now listed here; in 2021 it was its own item): authorization policies, ownership checks per object (IDOR), deny by default.</li>
<li><b>A02 Security Misconfiguration:</b> developer exception page or stack traces in production, default credentials, missing security headers, permissive CORS, open storage accounts.</li>
<li><b>A03 Software Supply Chain Failures</b> (2021: "Vulnerable and Outdated Components"): <code>dotnet list package --vulnerable</code>, NuGet Audit, Dependabot, pinned CI actions, secret scanning (Day 21).</li>
<li><b>A04 Cryptographic Failures:</b> TLS and HSTS, Data Protection API, <code>PasswordHasher</code>, no MD5 or SHA1 for security, no home-made crypto.</li>
<li><b>A05 Injection</b> (XSS is usually grouped here): SQL parameters, <code>FromSql</code> interpolation, Razor encoding, CSP.</li>
<li><b>A06 Insecure Design:</b> a flaw in the design itself, so fix it with threat modelling, abuse cases and rate limits (Day 13), not only with code review.</li>
<li><b>A07 Authentication Failures:</b> ASP.NET Core Identity, lockout, MFA, strong password hashing, rate limits against credential stuffing.</li>
<li><b>A08 Software or Data Integrity Failures:</b> unsafe deserialization (<code>BinaryFormatter</code> is gone, Day 22), unsigned packages or updates, an unprotected CI pipeline.</li>
<li><b>A09 Security Logging and Alerting Failures:</b> log logins and access-control failures, alert on them, and keep secrets and PII out of logs.</li>
<li><b>A10 Mishandling of Exceptional Conditions:</b> errors that fail open or leak details; use a global exception handler with <code>ProblemDetails</code> (Days 12, 13) and fail closed.</li>
</ul>
<p><b>When to use / when not:</b> use the list as a <b>checklist for design and code review</b> and as shared vocabulary with the team. It is an awareness document, not a complete standard: for a real audit use OWASP ASVS and a pen test. Do not recite ten names in an interview; pick the three that fit the question and say what you would do in .NET.</p>`,
        hi: `<p><b>Analogy:</b> housing society सिर्फ़ एक guard पर भरोसा नहीं करती। Gate का register होता है, हर flat पर lock और CCTV। OWASP Top 10 society committee की वो list है कि <b>gates सबसे ज़्यादा किन दस तरीकों से खुले रह जाते हैं</b>, जो real applications के data से बनी है। owasp.org पर अभी की release <b>OWASP Top 10:2025</b> है; 2021 की list पिछली edition है और बहुत से interviewers अब भी वही बोलते हैं, इसलिए जहाँ नाम अलग हैं वहाँ दोनों जानो।</p>
<ul>
<li><b>A01 Broken Access Control</b> (SSRF अब यहाँ listed है; 2021 में उसका अपना item था): authorization policies, हर object पर ownership check (IDOR), deny by default।</li>
<li><b>A02 Security Misconfiguration:</b> production में developer exception page या stack traces, default credentials, missing security headers, ज़्यादा खुला CORS, open storage accounts।</li>
<li><b>A03 Software Supply Chain Failures</b> (2021: "Vulnerable and Outdated Components"): <code>dotnet list package --vulnerable</code>, NuGet Audit, Dependabot, pinned CI actions, secret scanning (Day 21)।</li>
<li><b>A04 Cryptographic Failures:</b> TLS और HSTS, Data Protection API, <code>PasswordHasher</code>, security के लिए MD5 या SHA1 नहीं, अपना बनाया crypto नहीं।</li>
<li><b>A05 Injection</b> (XSS आमतौर पर यहीं group होता है): SQL parameters, <code>FromSql</code> interpolation, Razor encoding, CSP।</li>
<li><b>A06 Insecure Design:</b> design में ही कमी, इसलिए इसे threat modelling, abuse cases और rate limits (Day 13) से fix करो, सिर्फ़ code review से नहीं।</li>
<li><b>A07 Authentication Failures:</b> ASP.NET Core Identity, lockout, MFA, strong password hashing, credential stuffing के खिलाफ़ rate limits।</li>
<li><b>A08 Software or Data Integrity Failures:</b> unsafe deserialization (<code>BinaryFormatter</code> हट गया है, Day 22), unsigned packages या updates, unprotected CI pipeline।</li>
<li><b>A09 Security Logging and Alerting Failures:</b> logins और access-control failures log करो, उन पर alert लगाओ, और secrets और PII को logs से बाहर रखो।</li>
<li><b>A10 Mishandling of Exceptional Conditions:</b> जो errors fail open होते हैं या details leak करते हैं; <code>ProblemDetails</code> वाला global exception handler use करो (Days 12, 13) और fail closed रखो।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> list को <b>design और code review की checklist</b> की तरह और team की shared भाषा की तरह use करो। यह awareness document है, पूरा standard नहीं: real audit के लिए OWASP ASVS और pen test। Interview में दस नाम मत रटो; सवाल से जो तीन मेल खाएँ वो चुनो और बताओ कि .NET में तुम क्या करोगे।</p>`,
        hg: `<p><b>Analogy:</b> housing society sirf ek guard par bharosa nahi karti. Gate ka register hota hai, har flat par lock aur CCTV. OWASP Top 10 society committee ki woh list hai ki <b>gates sabse zyada kin das tareekon se khule reh jaate hain</b>, jo real applications ke data se bani hai. owasp.org par abhi ki release <b>OWASP Top 10:2025</b> hai; 2021 ki list pichhli edition hai aur bahut se interviewers ab bhi wahi bolte hain, isliye jahan naam alag hain wahan dono jaano.</p>
<ul>
<li><b>A01 Broken Access Control</b> (SSRF ab yahan listed hai; 2021 mein uska apna item tha): authorization policies, har object par ownership check (IDOR), deny by default.</li>
<li><b>A02 Security Misconfiguration:</b> production mein developer exception page ya stack traces, default credentials, missing security headers, zyada khula CORS, open storage accounts.</li>
<li><b>A03 Software Supply Chain Failures</b> (2021: "Vulnerable and Outdated Components"): <code>dotnet list package --vulnerable</code>, NuGet Audit, Dependabot, pinned CI actions, secret scanning (Day 21).</li>
<li><b>A04 Cryptographic Failures:</b> TLS aur HSTS, Data Protection API, <code>PasswordHasher</code>, security ke liye MD5 ya SHA1 nahi, apna banaya crypto nahi.</li>
<li><b>A05 Injection</b> (XSS aamtaur par yahin group hota hai): SQL parameters, <code>FromSql</code> interpolation, Razor encoding, CSP.</li>
<li><b>A06 Insecure Design:</b> design mein hi kami, isliye ise threat modelling, abuse cases aur rate limits (Day 13) se fix karo, sirf code review se nahi.</li>
<li><b>A07 Authentication Failures:</b> ASP.NET Core Identity, lockout, MFA, strong password hashing, credential stuffing ke khilaaf rate limits.</li>
<li><b>A08 Software or Data Integrity Failures:</b> unsafe deserialization (<code>BinaryFormatter</code> hat gaya hai, Day 22), unsigned packages ya updates, unprotected CI pipeline.</li>
<li><b>A09 Security Logging and Alerting Failures:</b> logins aur access-control failures log karo, un par alert lagao, aur secrets aur PII ko logs se bahar rakho.</li>
<li><b>A10 Mishandling of Exceptional Conditions:</b> jo errors fail open hote hain ya details leak karte hain; <code>ProblemDetails</code> wala global exception handler use karo (Days 12, 13) aur fail closed rakho.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> list ko <b>design aur code review ki checklist</b> ki tarah aur team ki shared bhasha ki tarah use karo. Yeh awareness document hai, poora standard nahi: real audit ke liye OWASP ASVS aur pen test. Interview mein das naam mat ratto; sawaal se jo teen mel khayein woh chuno aur batao ki .NET mein tum kya karoge.</p>`
      }
    },
    {
      id: "measure-first",
      depth: "short",
      title: {
        en: "Performance: measure first, then fix the biggest thing",
        hi: "Performance: पहले measure करो, फिर सबसे बड़ी चीज़ fix करो",
        hg: "Performance: pehle measure karo, phir sabse badi cheez fix karo"
      },
      body: {
        en: `<p><b>Analogy:</b> your electricity bill is high. You do not switch off random appliances; you read the meter, find the AC is the heavy user, and fix that. In software, a developer's guess about "what is slow" is wrong surprisingly often, so you <b>measure, change one thing, measure again</b>.</p>
<ul>
<li><b>Start from a goal:</b> "p95 of <code>GET /orders</code> under 300 ms at 200 requests per second" is a goal. "Make it faster" is not.</li>
<li><b>BenchmarkDotNet:</b> micro-benchmarks for one method; add <code>[MemoryDiagnoser]</code> to see allocations and GC counts. Run in Release, never trust a <code>Stopwatch</code> loop.</li>
<li><b>dotnet-counters:</b> live CPU, GC, thread-pool and request-rate counters from a running process. <b>dotnet-trace:</b> CPU sampling trace you open in Visual Studio, PerfView or Speedscope. <b>dotnet-dump / dotnet-gcdump:</b> memory and hang analysis.</li>
<li><b>Production telemetry:</b> Application Insights or OpenTelemetry traces, metrics and logs show <b>which dependency</b> is slow (Days 16 and 20). Most slow endpoints are slow because of a database call or a downstream HTTP call, not because of C# code.</li>
<li><b>Order of wins (usually):</b> fix N+1 and missing indexes (Days 6, 18); cache what is safe to cache (Day 13); async all the way so threads are not blocked (Day 3); return less data (pagination, projection, compression); only then tune allocations (Spans, pooling).</li>
</ul>
<p><b>When to use / when not:</b> micro-benchmarks are for <b>hot paths you have proven are hot</b>, for example a parser that runs millions of times. Do not rewrite readable code with Span tricks because it "should be faster"; if a profile does not point at it, the change only adds risk. For a slow endpoint start with a trace, not a benchmark.</p>`,
        hi: `<p><b>Analogy:</b> तुम्हारा बिजली का bill ज़्यादा आया। तुम random appliances बंद नहीं करते; meter पढ़ते हो, देखते हो कि AC सबसे ज़्यादा खा रहा है, और वही ठीक करते हो। Software में developer का "क्या slow है" वाला अंदाज़ हैरानी की हद तक अक्सर गलत होता है, इसलिए <b>measure करो, एक चीज़ बदलो, फिर measure करो</b>।</p>
<ul>
<li><b>Goal से शुरू करो:</b> "<code>GET /orders</code> का p95 200 requests per second पर 300 ms से कम" एक goal है। "इसे तेज़ करो" goal नहीं है।</li>
<li><b>BenchmarkDotNet:</b> एक method के micro-benchmarks; allocations और GC counts देखने के लिए <code>[MemoryDiagnoser]</code> लगाओ। Release में चलाओ, <code>Stopwatch</code> loop पर भरोसा मत करो।</li>
<li><b>dotnet-counters:</b> चलते process से live CPU, GC, thread-pool और request-rate counters। <b>dotnet-trace:</b> CPU sampling trace जिसे Visual Studio, PerfView या Speedscope में खोलते हैं। <b>dotnet-dump / dotnet-gcdump:</b> memory और hang का analysis।</li>
<li><b>Production telemetry:</b> Application Insights या OpenTelemetry के traces, metrics और logs दिखाते हैं कि <b>कौन-सी dependency</b> slow है (Days 16 और 20)। ज़्यादातर slow endpoints database call या downstream HTTP call की वजह से slow होते हैं, C# code की वजह से नहीं।</li>
<li><b>Wins का order (आमतौर पर):</b> N+1 और missing indexes fix करो (Days 6, 18); जो safe हो उसे cache करो (Day 13); async all the way ताकि threads block न हों (Day 3); कम data लौटाओ (pagination, projection, compression); उसके बाद ही allocations tune करो (Spans, pooling)।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> micro-benchmarks <b>उन hot paths के लिए हैं जो तुमने साबित किए हैं कि hot हैं</b>, जैसे parser जो लाखों बार चलता है। Readable code को Span tricks से इसलिए मत बदलो कि वो "तेज़ होना चाहिए"; अगर profile उस ओर इशारा नहीं करता तो change सिर्फ़ risk बढ़ाता है। Slow endpoint के लिए trace से शुरू करो, benchmark से नहीं।</p>`,
        hg: `<p><b>Analogy:</b> tumhara bijli ka bill zyada aaya. Tum random appliances band nahi karte; meter padhte ho, dekhte ho ki AC sabse zyada kha raha hai, aur wahi theek karte ho. Software mein developer ka "kya slow hai" wala andaza hairani ki had tak aksar galat hota hai, isliye <b>measure karo, ek cheez badlo, phir measure karo</b>.</p>
<ul>
<li><b>Goal se shuru karo:</b> "<code>GET /orders</code> ka p95 200 requests per second par 300 ms se kam" ek goal hai. "Ise tez karo" goal nahi hai.</li>
<li><b>BenchmarkDotNet:</b> ek method ke micro-benchmarks; allocations aur GC counts dekhne ke liye <code>[MemoryDiagnoser]</code> lagao. Release mein chalao, <code>Stopwatch</code> loop par bharosa mat karo.</li>
<li><b>dotnet-counters:</b> chalte process se live CPU, GC, thread-pool aur request-rate counters. <b>dotnet-trace:</b> CPU sampling trace jise Visual Studio, PerfView ya Speedscope mein kholte hain. <b>dotnet-dump / dotnet-gcdump:</b> memory aur hang ka analysis.</li>
<li><b>Production telemetry:</b> Application Insights ya OpenTelemetry ke traces, metrics aur logs dikhate hain ki <b>kaun-si dependency</b> slow hai (Days 16 aur 20). Zyadatar slow endpoints database call ya downstream HTTP call ki wajah se slow hote hain, C# code ki wajah se nahi.</li>
<li><b>Wins ka order (aamtaur par):</b> N+1 aur missing indexes fix karo (Days 6, 18); jo safe ho use cache karo (Day 13); async all the way taaki threads block na hon (Day 3); kam data lautao (pagination, projection, compression); uske baad hi allocations tune karo (Spans, pooling).</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> micro-benchmarks <b>un hot paths ke liye hain jo tumne saabit kiye hain ki hot hain</b>, jaise parser jo lakhon baar chalta hai. Readable code ko Span tricks se isliye mat badlo ki woh "tez hona chahiye"; agar profile us taraf ishara nahi karta to change sirf risk badhata hai. Slow endpoint ke liye trace se shuru karo, benchmark se nahi.</p>`
      }
    },
    {
      id: "injection-xss",
      depth: "detailed",
      title: {
        en: "Injection and XSS: parameters, FromSql, encoding, CSP",
        hi: "Injection और XSS: parameters, FromSql, encoding, CSP",
        hg: "Injection aur XSS: parameters, FromSql, encoding, CSP"
      },
      body: {
        en: `<p><b>Analogy:</b> a canteen order slip says "one tea, two samosa". If a customer writes "one tea, and give the cash box too" and the cook <b>obeys every word on the slip</b>, that is injection. The fix is a printed slip where the customer can only fill in quantities: the data goes into boxes and is never read as instructions. SQL parameters are those boxes.</p>
<ul>
<li><b>SQL injection:</b> happens when user input is <b>glued into the SQL text</b>. Fix: send values as parameters. Plain ADO.NET: <code>SqlCommand.Parameters.AddWithValue</code> or typed parameters. Dapper: an anonymous object. EF Core: LINQ is parameterised for you; for raw SQL use <code>FromSql</code> or <code>ExecuteSql</code> with an interpolated string, which EF turns into parameters (Day 6). <code>FromSqlRaw</code> with a concatenated string is the dangerous one.</li>
<li><b>What parameters cannot do:</b> a table or column name or <code>ORDER BY</code> direction cannot be a parameter. Map the user's choice to a <b>fixed allow-list</b> in code ("price" to <code>Price</code>), never paste it.</li>
<li><b>XSS (cross-site scripting):</b> untrusted text ends up in a page as <b>HTML or script</b>. Razor and Blazor <b>encode output by default</b> (<code>@Model.Comment</code> is safe). The danger is <code>Html.Raw</code>, <code>MarkupString</code>, building HTML with string concatenation, or <code>innerHTML</code> in JavaScript (Days 23 and 24). If you must show rich text, sanitise it with a maintained HTML sanitiser library on the server and allow only a short tag list.</li>
<li><b>CSP (Content-Security-Policy):</b> a response header that tells the browser which script sources are allowed, for example <code>default-src 'self'</code>. An injected inline script then does not run. It is a <b>second layer</b>, not a replacement for encoding; a strict CSP on an old app with many inline scripts needs work (nonces).</li>
</ul>
<p><b>When to use / when not:</b> parameters, default encoding and a least-privilege database login are <b>always on</b> for every endpoint. Use an allow-list for identifiers. Reach for <code>Html.Raw</code> only for content you generated yourself, and say why in a comment. Do not try to "clean" input by removing quote characters; that breaks real names like O'Brien and is not a defence.</p>`,
        hi: `<p><b>Analogy:</b> canteen की order slip पर लिखा है "एक चाय, दो समोसे"। अगर customer लिख दे "एक चाय, और cash box भी दे दो" और cook <b>slip का हर शब्द मान ले</b>, तो वो injection है। Fix है छपी हुई slip जिसमें customer सिर्फ़ quantity भर सकता है: data डिब्बों में जाता है और कभी instruction की तरह नहीं पढ़ा जाता। SQL parameters वही डिब्बे हैं।</p>
<ul>
<li><b>SQL injection:</b> तब होता है जब user input <b>SQL text में glue</b> हो जाता है। Fix: values को parameters की तरह भेजो। Plain ADO.NET: <code>SqlCommand.Parameters.AddWithValue</code> या typed parameters। Dapper: anonymous object। EF Core: LINQ अपने-आप parameterised है; raw SQL के लिए interpolated string के साथ <code>FromSql</code> या <code>ExecuteSql</code>, जिसे EF parameters बना देता है (Day 6)। Concatenated string के साथ <code>FromSqlRaw</code> खतरनाक वाला है।</li>
<li><b>Parameters क्या नहीं कर सकते:</b> table या column का नाम या <code>ORDER BY</code> की direction parameter नहीं हो सकती। User की choice को code में <b>fixed allow-list</b> से map करो ("price" से <code>Price</code>), कभी paste मत करो।</li>
<li><b>XSS (cross-site scripting):</b> untrusted text page में <b>HTML या script</b> बनकर पहुँच जाता है। Razor और Blazor <b>output को default से encode करते हैं</b> (<code>@Model.Comment</code> safe है)। खतरा है <code>Html.Raw</code>, <code>MarkupString</code>, string concatenation से HTML बनाना, या JavaScript में <code>innerHTML</code> (Days 23 और 24)। Rich text दिखाना ही पड़े तो server पर maintained HTML sanitiser library से sanitise करो और सिर्फ़ छोटी tag list allow करो।</li>
<li><b>CSP (Content-Security-Policy):</b> response header जो browser को बताता है कि कौन-से script sources allowed हैं, जैसे <code>default-src 'self'</code>। तब injected inline script नहीं चलती। यह <b>दूसरी layer</b> है, encoding की जगह नहीं; बहुत inline scripts वाले पुराने app पर strict CSP में मेहनत लगती है (nonces)।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> parameters, default encoding और least-privilege database login <b>हर endpoint के लिए हमेशा on</b> रखो। Identifiers के लिए allow-list use करो। <code>Html.Raw</code> सिर्फ़ उस content के लिए जो तुमने खुद generate किया, और comment में कारण लिखो। Input को "साफ़" करने के लिए quote characters मत हटाओ; इससे O'Brien जैसे असली नाम टूटते हैं और यह defence नहीं है।</p>`,
        hg: `<p><b>Analogy:</b> canteen ki order slip par likha hai "ek chai, do samose". Agar customer likh de "ek chai, aur cash box bhi de do" aur cook <b>slip ka har shabd maan le</b>, to woh injection hai. Fix hai chhapi hui slip jisme customer sirf quantity bhar sakta hai: data dibbon mein jaata hai aur kabhi instruction ki tarah nahi padha jaata. SQL parameters wahi dibbe hain.</p>
<ul>
<li><b>SQL injection:</b> tab hota hai jab user input <b>SQL text mein glue</b> ho jaata hai. Fix: values ko parameters ki tarah bhejo. Plain ADO.NET: <code>SqlCommand.Parameters.AddWithValue</code> ya typed parameters. Dapper: anonymous object. EF Core: LINQ apne-aap parameterised hai; raw SQL ke liye interpolated string ke saath <code>FromSql</code> ya <code>ExecuteSql</code>, jise EF parameters bana deta hai (Day 6). Concatenated string ke saath <code>FromSqlRaw</code> khatarnak wala hai.</li>
<li><b>Parameters kya nahi kar sakte:</b> table ya column ka naam ya <code>ORDER BY</code> ki direction parameter nahi ho sakti. User ki choice ko code mein <b>fixed allow-list</b> se map karo ("price" se <code>Price</code>), kabhi paste mat karo.</li>
<li><b>XSS (cross-site scripting):</b> untrusted text page mein <b>HTML ya script</b> bankar pahunch jaata hai. Razor aur Blazor <b>output ko default se encode karte hain</b> (<code>@Model.Comment</code> safe hai). Khatra hai <code>Html.Raw</code>, <code>MarkupString</code>, string concatenation se HTML banana, ya JavaScript mein <code>innerHTML</code> (Days 23 aur 24). Rich text dikhana hi pade to server par maintained HTML sanitiser library se sanitise karo aur sirf chhoti tag list allow karo.</li>
<li><b>CSP (Content-Security-Policy):</b> response header jo browser ko batata hai ki kaun-se script sources allowed hain, jaise <code>default-src 'self'</code>. Tab injected inline script nahi chalti. Yeh <b>doosri layer</b> hai, encoding ki jagah nahi; bahut inline scripts wale purane app par strict CSP mein mehnat lagti hai (nonces).</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> parameters, default encoding aur least-privilege database login <b>har endpoint ke liye hamesha on</b> rakho. Identifiers ke liye allow-list use karo. <code>Html.Raw</code> sirf us content ke liye jo tumne khud generate kiya, aur comment mein karan likho. Input ko "saaf" karne ke liye quote characters mat hatao; isse O'Brien jaise asli naam tootte hain aur yeh defence nahi hai.</p>`
      },
      code: [
        {
          lang: "sql",
          caption: {
            en: "VULNERABLE — don't do this, then the fix: the same search built by concatenation and with sp_executesql (runs on LocalDB; the attacker's text reads private rows)",
            hi: "VULNERABLE — ऐसा मत करो, फिर fix: वही search concatenation से और sp_executesql से (LocalDB पर चलती है; attacker का text private rows पढ़ लेता है)",
            hg: "VULNERABLE — aisa mat karo, phir fix: wahi search concatenation se aur sp_executesql se (LocalDB par chalti hai; attacker ka text private rows padh leta hai)"
          },
          check: "run",
          expected: "concatenated:\nBank PIN, Holiday list, Menu, Salary slip\nparameterised:\nNULL",
          src: `CREATE TABLE dbo.Notes (NoteId int PRIMARY KEY, Title varchar(30) NOT NULL, IsPublic bit NOT NULL);
INSERT dbo.Notes VALUES (1, 'Menu', 1), (2, 'Salary slip', 0), (3, 'Holiday list', 1), (4, 'Bank PIN', 0);

DECLARE @term varchar(60) = 'x'' OR 1=1 --';     -- attacker input: closes the quote, adds OR 1=1, comments out the rest

-- VULNERABLE - don't do this: user text is pasted into the SQL string
DECLARE @bad nvarchar(500) = N'SELECT STRING_AGG(Title, '', '') WITHIN GROUP (ORDER BY Title) FROM dbo.Notes '
                           + N'WHERE IsPublic = 1 AND Title LIKE ''%' + @term + N'%''';
PRINT 'concatenated:';
EXEC (@bad);

-- FIXED: the text is a parameter value, so it is only ever data
DECLARE @pattern varchar(70) = '%' + @term + '%';
PRINT 'parameterised:';
EXEC sp_executesql
    N'SELECT STRING_AGG(Title, '', '') WITHIN GROUP (ORDER BY Title) FROM dbo.Notes WHERE IsPublic = 1 AND Title LIKE @p',
    N'@p varchar(70)', @p = @pattern;`
        },
        {
          caption: {
            en: "VULNERABLE — don't do this, then the fix: EF Core FromSqlRaw with concatenation vs FromSql with interpolation (compile-checked; Day 6 explains the difference)",
            hi: "VULNERABLE — ऐसा मत करो, फिर fix: concatenation वाला EF Core FromSqlRaw बनाम interpolation वाला FromSql (compile-checked; फ़र्क Day 6 में है)",
            hg: "VULNERABLE — aisa mat karo, phir fix: concatenation wala EF Core FromSqlRaw vs interpolation wala FromSql (compile-checked; farq Day 6 mein hai)"
          },
          check: "compile",
          packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
          src: `using Microsoft.EntityFrameworkCore;

public static class NoteSearch
{
    // VULNERABLE - don't do this: the string is built first, then sent as one SQL text
    public static IQueryable<Note> Bad(AppDb db, string term) =>
        db.Notes.FromSqlRaw("SELECT * FROM Notes WHERE Title LIKE '%" + term + "%'");

    // FIXED: FromSql turns each {hole} into a DbParameter
    public static IQueryable<Note> Good(AppDb db, string term)
    {
        var pattern = "%" + term + "%";
        return db.Notes.FromSql($"SELECT * FROM Notes WHERE Title LIKE {pattern}");
    }
}

public class Note { public int NoteId { get; set; } public string Title { get; set; } = ""; }
public class AppDb : DbContext { public DbSet<Note> Notes => Set<Note>(); }`
        },
        {
          caption: {
            en: "VULNERABLE — don't do this, then the fix: pasting a comment into HTML vs HtmlEncoder (what Razor does for you by default)",
            hi: "VULNERABLE — ऐसा मत करो, फिर fix: comment को सीधे HTML में paste करना बनाम HtmlEncoder (जो Razor default से करता है)",
            hg: "VULNERABLE — aisa mat karo, phir fix: comment ko seedhe HTML mein paste karna vs HtmlEncoder (jo Razor default se karta hai)"
          },
          check: "run",
          expected: "<p><img src=x onerror=alert(1)></p>\n<p>&lt;img src=x onerror=alert(1)&gt;</p>",
          src: `using System.Text.Encodings.Web;

string comment = "<img src=x onerror=alert(1)>";   // what a visitor typed into a comment box

// VULNERABLE - don't do this: user text becomes part of the HTML
string bad = "<p>" + comment + "</p>";

// FIXED: encode for the HTML context (Razor's @expression does this automatically)
string good = "<p>" + HtmlEncoder.Default.Encode(comment) + "</p>";

Console.WriteLine(bad);
Console.WriteLine(good);`
        }
      ]
    },
    {
      id: "csrf-access-control",
      depth: "detailed",
      title: {
        en: "CSRF, cookies, broken access control and IDOR",
        hi: "CSRF, cookies, broken access control और IDOR",
        hg: "CSRF, cookies, broken access control aur IDOR"
      },
      body: {
        en: `<p><b>Analogy:</b> a bank cheque with your signature is valid whoever drops it in the box. <b>CSRF</b> is a stranger's page making your browser post a request to the bank site: the browser attaches your login cookie by itself. <b>IDOR</b> is different: you are a real customer, but the passbook page URL says <code>/accounts/1001</code>, and you change it to <code>/accounts/1002</code> and see someone else's balance because nobody checked <b>whose</b> account it is.</p>
<ul>
<li><b>CSRF needs a cookie that the browser sends automatically.</b> Defences: <b>antiforgery tokens</b> (Razor Pages validate them automatically; MVC controllers need <code>[ValidateAntiForgeryToken]</code> or <code>[AutoValidateAntiforgeryToken]</code>, often as a global filter; minimal APIs that accept form data need <code>AddAntiforgery()</code> and <code>UseAntiforgery()</code>); <b>SameSite</b> on the auth cookie (Lax is a common default; Strict is stronger but breaks some cross-site links); and not accepting state-changing requests as GET.</li>
<li><b>Bearer-token APIs</b> read the token from the <code>Authorization</code> header, which a malicious page cannot make the browser add. So classic CSRF mostly does not apply, as long as the token is <b>not</b> stored in a cookie. The trade-off moves to XSS and token storage (Days 13, 23, 24).</li>
<li><b>Resource-based authorization:</b> when the rule depends on the object ("only the owner edits this document"), load the object and call <code>IAuthorizationService.AuthorizeAsync(user, resource, policy)</code>. The check lives in one handler, not scattered <code>if</code>s.</li>
<li><b>IDOR defences:</b> check ownership on every read and write; filter queries by the caller's id (<code>Where(d =&gt; d.OwnerId == userId)</code>); take the user id from the <b>claims</b>, never from the request body; do not rely on hard-to-guess ids (GUIDs) as the only protection. Returning 404 instead of 403 hides that the object exists; choose one and be consistent.</li>
</ul>
<p><b>When to use / when not:</b> antiforgery is needed for <b>cookie-authenticated, browser-facing</b> endpoints; for a pure bearer-token API you can disable it on those endpoints. Resource-based checks are for rules that depend on data; use simple policies for role rules. Never skip the ownership check "because the UI does not show that button": the attacker does not use your UI.</p>`,
        hi: `<p><b>Analogy:</b> तुम्हारे signature वाला bank cheque कोई भी box में डाल दे तो valid है। <b>CSRF</b> में किसी अजनबी का page तुम्हारे browser से bank site पर request post करवाता है: browser तुम्हारी login cookie अपने-आप लगा देता है। <b>IDOR</b> अलग है: तुम असली customer हो, पर passbook page का URL <code>/accounts/1001</code> है, तुम उसे <code>/accounts/1002</code> कर देते हो और किसी और का balance दिख जाता है क्योंकि किसी ने check ही नहीं किया कि account <b>किसका</b> है।</p>
<ul>
<li><b>CSRF को ऐसी cookie चाहिए जो browser अपने-आप भेजे।</b> Defences: <b>antiforgery tokens</b> (Razor Pages उन्हें अपने-आप validate करते हैं; MVC controllers को <code>[ValidateAntiForgeryToken]</code> या <code>[AutoValidateAntiforgeryToken]</code> चाहिए, अक्सर global filter की तरह; form data लेने वाली minimal APIs को <code>AddAntiforgery()</code> और <code>UseAntiforgery()</code> चाहिए); auth cookie पर <b>SameSite</b> (Lax common default है; Strict ज़्यादा strong है पर कुछ cross-site links तोड़ता है); और state बदलने वाली requests को GET की तरह accept न करना।</li>
<li><b>Bearer-token APIs</b> token <code>Authorization</code> header से पढ़ती हैं, जो malicious page browser से नहीं लगवा सकता। इसलिए classic CSRF ज़्यादातर लागू नहीं होता, बशर्ते token cookie में store <b>न</b> हो। Trade-off XSS और token storage पर चला जाता है (Days 13, 23, 24)।</li>
<li><b>Resource-based authorization:</b> जब rule object पर depend करे ("सिर्फ़ owner यह document edit करे"), object load करो और <code>IAuthorizationService.AuthorizeAsync(user, resource, policy)</code> call करो। Check एक handler में रहता है, जगह-जगह बिखरे <code>if</code> में नहीं।</li>
<li><b>IDOR के defences:</b> हर read और write पर ownership check करो; queries को caller के id से filter करो (<code>Where(d =&gt; d.OwnerId == userId)</code>); user id <b>claims</b> से लो, request body से कभी नहीं; सिर्फ़ मुश्किल से guess होने वाले ids (GUIDs) को अकेली protection मत मानो। 403 की जगह 404 लौटाने से object का होना छुपता है; एक चुनो और consistent रहो।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> antiforgery <b>cookie-authenticated, browser-facing</b> endpoints के लिए चाहिए; pure bearer-token API में उन endpoints पर इसे disable कर सकते हो। Resource-based checks उन rules के लिए हैं जो data पर depend करें; role rules के लिए simple policies। Ownership check को कभी यह कहकर skip मत करो कि "UI में वो button नहीं दिखता": attacker तुम्हारी UI use नहीं करता।</p>`,
        hg: `<p><b>Analogy:</b> tumhare signature wala bank cheque koi bhi box mein daal de to valid hai. <b>CSRF</b> mein kisi ajnabi ka page tumhare browser se bank site par request post karwata hai: browser tumhari login cookie apne-aap laga deta hai. <b>IDOR</b> alag hai: tum asli customer ho, par passbook page ka URL <code>/accounts/1001</code> hai, tum use <code>/accounts/1002</code> kar dete ho aur kisi aur ka balance dikh jaata hai kyunki kisi ne check hi nahi kiya ki account <b>kiska</b> hai.</p>
<ul>
<li><b>CSRF ko aisi cookie chahiye jo browser apne-aap bheje.</b> Defences: <b>antiforgery tokens</b> (Razor Pages unhein apne-aap validate karte hain; MVC controllers ko <code>[ValidateAntiForgeryToken]</code> ya <code>[AutoValidateAntiforgeryToken]</code> chahiye, aksar global filter ki tarah; form data lene wali minimal APIs ko <code>AddAntiforgery()</code> aur <code>UseAntiforgery()</code> chahiye); auth cookie par <b>SameSite</b> (Lax common default hai; Strict zyada strong hai par kuch cross-site links todta hai); aur state badalne wali requests ko GET ki tarah accept na karna.</li>
<li><b>Bearer-token APIs</b> token <code>Authorization</code> header se padhti hain, jo malicious page browser se nahi lagwa sakta. Isliye classic CSRF zyadatar lagu nahi hota, basharte token cookie mein store <b>na</b> ho. Trade-off XSS aur token storage par chala jaata hai (Days 13, 23, 24).</li>
<li><b>Resource-based authorization:</b> jab rule object par depend kare ("sirf owner yeh document edit kare"), object load karo aur <code>IAuthorizationService.AuthorizeAsync(user, resource, policy)</code> call karo. Check ek handler mein rehta hai, jagah-jagah bikhre <code>if</code> mein nahi.</li>
<li><b>IDOR ke defences:</b> har read aur write par ownership check karo; queries ko caller ke id se filter karo (<code>Where(d =&gt; d.OwnerId == userId)</code>); user id <b>claims</b> se lo, request body se kabhi nahi; sirf mushkil se guess hone wale ids (GUIDs) ko akeli protection mat maano. 403 ki jagah 404 lautane se object ka hona chhupta hai; ek chuno aur consistent raho.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> antiforgery <b>cookie-authenticated, browser-facing</b> endpoints ke liye chahiye; pure bearer-token API mein un endpoints par ise disable kar sakte ho. Resource-based checks un rules ke liye hain jo data par depend karein; role rules ke liye simple policies. Ownership check ko kabhi yeh kehkar skip mat karo ki "UI mein woh button nahi dikhta": attacker tumhari UI use nahi karta.</p>`
      },
      code: [
        {
          caption: {
            en: "VULNERABLE — don't do this, then the fix: an IDOR endpoint and the same endpoint with a resource-based authorization handler (compile-checked)",
            hi: "VULNERABLE — ऐसा मत करो, फिर fix: IDOR वाला endpoint और वही endpoint resource-based authorization handler के साथ (compile-checked)",
            hg: "VULNERABLE — aisa mat karo, phir fix: IDOR wala endpoint aur wahi endpoint resource-based authorization handler ke saath (compile-checked)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAuthentication("cookie").AddCookie("cookie");
builder.Services.AddAuthorization(o =>
{
    o.FallbackPolicy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();   // deny by default
    o.AddPolicy("DocumentOwner", p => p.Requirements.Add(new OwnerRequirement()));
});
builder.Services.AddSingleton<IAuthorizationHandler, DocumentOwnerHandler>();
builder.Services.AddSingleton<DocumentStore>();

var app = builder.Build();
app.UseAuthentication();
app.UseAuthorization();

// VULNERABLE - don't do this: logged in is enough, so any user can read any id (IDOR)
app.MapGet("/bad/documents/{id:int}", (int id, DocumentStore store) =>
    store.Find(id) is { } d ? Results.Ok(d) : Results.NotFound());

// FIXED: load the object, then ask "may THIS user see THIS document?"
app.MapGet("/documents/{id:int}", async (int id, DocumentStore store, IAuthorizationService auth, ClaimsPrincipal user) =>
{
    var doc = store.Find(id);
    if (doc is null) return Results.NotFound();
    var result = await auth.AuthorizeAsync(user, doc, "DocumentOwner");
    return result.Succeeded ? Results.Ok(doc) : Results.NotFound();   // 404 also hides that the id exists
});

app.Run();

record Document(int Id, string OwnerId, string Title);

class DocumentStore
{
    private readonly Dictionary<int, Document> _docs = new()
    {
        [1] = new Document(1, "asha", "Salary slip"),
        [2] = new Document(2, "ravi", "Bank statement"),
    };
    public Document? Find(int id) => _docs.GetValueOrDefault(id);
}

class OwnerRequirement : IAuthorizationRequirement { }

class DocumentOwnerHandler : AuthorizationHandler<OwnerRequirement, Document>
{
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, OwnerRequirement requirement, Document doc)
    {
        // the user id comes from the signed-in identity, never from the request
        if (context.User.FindFirstValue(ClaimTypes.NameIdentifier) == doc.OwnerId)
            context.Succeed(requirement);
        return Task.CompletedTask;
    }
}`
        },
        {
          caption: {
            en: "Cookie auth with antiforgery, SameSite, HSTS, a global exception handler and basic security headers including CSP (compile-checked; headers are a starting point)",
            hi: "Antiforgery, SameSite, HSTS, global exception handler और CSP समेत basic security headers के साथ cookie auth (compile-checked; headers एक शुरुआत हैं)",
            hg: "Antiforgery, SameSite, HSTS, global exception handler aur CSP samet basic security headers ke saath cookie auth (compile-checked; headers ek shuruaat hain)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddProblemDetails();
builder.Services.AddAntiforgery();
builder.Services.AddAuthentication("cookie").AddCookie("cookie", o =>
{
    o.Cookie.HttpOnly = true;                              // not readable from JavaScript
    o.Cookie.SecurePolicy = CookieSecurePolicy.Always;     // only over HTTPS
    o.Cookie.SameSite = SameSiteMode.Lax;                  // not sent on cross-site POSTs
});
builder.Services.AddAuthorization();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler();   // generic ProblemDetails, no stack trace for callers
    app.UseHsts();               // tell browsers to use HTTPS only
}
app.UseHttpsRedirection();

app.Use(async (context, next) =>
{
    var headers = context.Response.Headers;
    headers["X-Content-Type-Options"] = "nosniff";
    headers["Referrer-Policy"] = "no-referrer";
    headers["Content-Security-Policy"] = "default-src 'self'; frame-ancestors 'none'";
    await next();
});

app.UseAuthentication();
app.UseAuthorization();
app.UseAntiforgery();        // after authentication and authorization

app.MapPost("/profile", ([FromForm] ProfileForm form) => Results.Ok(form.DisplayName)).RequireAuthorization();

app.Run();

record ProfileForm(string DisplayName);`
        }
      ]
    },
    {
      id: "auth-crypto",
      depth: "detailed",
      title: {
        en: "Authentication, passwords and cryptography",
        hi: "Authentication, passwords और cryptography",
        hg: "Authentication, passwords aur cryptography"
      },
      body: {
        en: `<p><b>Analogy:</b> a good locker room stores a copy of your <b>lock's pattern</b>, not your key. If thieves steal the register they cannot open your locker. A password hash is that pattern. A <b>slow, salted</b> hash means each locker needs its own long effort to crack.</p>
<ul>
<li><b>Do not build your own login.</b> Use <b>ASP.NET Core Identity</b> (users, hashing, lockout, MFA, email confirmation) or an external identity provider such as Microsoft Entra ID or another OIDC provider (Day 13 covers JWT and tokens). Owning passwords means owning breach risk.</li>
<li><b>Password hashing:</b> Identity's <code>PasswordHasher</code> uses <b>PBKDF2 with a random salt</b> and an iteration count, and can upgrade old hashes (<code>SuccessRehashNeeded</code>, see the puzzle). <b>Never</b> store passwords in plain text, reversibly encrypted, or hashed with MD5, SHA1 or a plain SHA256: these are fast, and fast is the attacker's friend. If you build your own, use a purpose-made password hash (PBKDF2, bcrypt, scrypt or Argon2 from a maintained library) and never invent one.</li>
<li><b>Login hygiene:</b> <b>lockout</b> after repeated failures (Identity has it) and rate limits (Day 13); <b>MFA</b> for admins at least; the <b>same error message</b> for "unknown user" and "wrong password" so attackers cannot list your users; passphrases allowed and a breached-password check if you can.</li>
<li><b>Transport:</b> TLS everywhere, <code>UseHttpsRedirection</code> and <b>HSTS</b> (<code>UseHsts</code>; the template enables it only outside Development, and it also excludes localhost, because browsers would cache the rule). Internal service-to-service traffic needs TLS too unless the network is genuinely trusted and that decision is written down.</li>
<li><b>Data Protection API:</b> ASP.NET Core uses it to protect auth cookies and antiforgery tokens, and you can use <code>IDataProtector</code> for small secrets you issue (reset links, state values). Its <b>keys must be shared and persisted</b> across instances (for example a shared blob store protected by Key Vault, Day 20); otherwise users are logged out on every deployment or load-balanced request. It is <b>not</b> a general database encryption tool.</li>
</ul>
<p><b>When to use / when not:</b> use Identity or an external provider for any user-facing login; hash with <code>PasswordHasher</code>; use <code>FixedTimeEquals</code> whenever a secret is compared. Do not use SHA256 for passwords even "with a salt"; do not use <code>Random</code> for security values; do not catch a <code>CryptographicException</code> and carry on as if the data were valid.</p>`,
        hi: `<p><b>Analogy:</b> अच्छा locker room तुम्हारी <b>lock का pattern</b> रखता है, तुम्हारी चाबी नहीं। चोर register चुरा लें तो भी तुम्हारा locker नहीं खोल सकते। Password hash वही pattern है। <b>Slow, salted</b> hash का मतलब हर locker को crack करने में अलग लंबी मेहनत।</p>
<ul>
<li><b>अपना login मत बनाओ।</b> <b>ASP.NET Core Identity</b> (users, hashing, lockout, MFA, email confirmation) या Microsoft Entra ID जैसा external identity provider या कोई और OIDC provider use करो (JWT और tokens Day 13 में हैं)। Passwords अपने पास रखने का मतलब breach का risk भी अपने पास।</li>
<li><b>Password hashing:</b> Identity का <code>PasswordHasher</code> <b>random salt के साथ PBKDF2</b> और iteration count use करता है, और पुराने hashes upgrade कर सकता है (<code>SuccessRehashNeeded</code>, puzzle देखो)। Passwords को plain text में, reversible encryption में, या MD5, SHA1 या plain SHA256 से hash करके <b>कभी</b> store मत करो: ये fast हैं, और fast होना attacker का दोस्त है। अपना बनाना पड़े तो purpose-made password hash (maintained library से PBKDF2, bcrypt, scrypt या Argon2) use करो और खुद का कभी invent मत करो।</li>
<li><b>Login hygiene:</b> बार-बार fail होने पर <b>lockout</b> (Identity में है) और rate limits (Day 13); कम से कम admins के लिए <b>MFA</b>; "unknown user" और "wrong password" के लिए <b>same error message</b> ताकि attackers तुम्हारे users की list न बना सकें; passphrases allowed और हो सके तो breached-password check।</li>
<li><b>Transport:</b> हर जगह TLS, <code>UseHttpsRedirection</code> और <b>HSTS</b> (<code>UseHsts</code>; template इसे सिर्फ़ Development के बाहर enable करता है, और यह localhost को भी exclude करता है, क्योंकि browser वो rule cache कर लेते)। Internal service-to-service traffic को भी TLS चाहिए, जब तक network सच में trusted न हो और वो decision लिखा हुआ न हो।</li>
<li><b>Data Protection API:</b> ASP.NET Core इससे auth cookies और antiforgery tokens protect करता है, और तुम जो छोटे secrets issue करते हो (reset links, state values) उनके लिए <code>IDataProtector</code> use कर सकते हो। इसकी <b>keys instances के बीच shared और persisted</b> होनी चाहिए (जैसे Key Vault से protected shared blob store, Day 20); वरना हर deployment या load-balanced request पर users logout हो जाते हैं। यह database encryption का general tool <b>नहीं</b> है।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> user-facing login के लिए Identity या external provider; hash के लिए <code>PasswordHasher</code>; जब भी secret compare हो तो <code>FixedTimeEquals</code>। Passwords के लिए SHA256 "salt के साथ" भी मत use करो; security values के लिए <code>Random</code> मत use करो; <code>CryptographicException</code> को catch करके ऐसे आगे मत बढ़ो जैसे data valid हो।</p>`,
        hg: `<p><b>Analogy:</b> achha locker room tumhari <b>lock ka pattern</b> rakhta hai, tumhari chaabi nahi. Chor register chura lein to bhi tumhara locker nahi khol sakte. Password hash wahi pattern hai. <b>Slow, salted</b> hash ka matlab har locker ko crack karne mein alag lambi mehnat.</p>
<ul>
<li><b>Apna login mat banao.</b> <b>ASP.NET Core Identity</b> (users, hashing, lockout, MFA, email confirmation) ya Microsoft Entra ID jaisa external identity provider ya koi aur OIDC provider use karo (JWT aur tokens Day 13 mein hain). Passwords apne paas rakhne ka matlab breach ka risk bhi apne paas.</li>
<li><b>Password hashing:</b> Identity ka <code>PasswordHasher</code> <b>random salt ke saath PBKDF2</b> aur iteration count use karta hai, aur purane hashes upgrade kar sakta hai (<code>SuccessRehashNeeded</code>, puzzle dekho). Passwords ko plain text mein, reversible encryption mein, ya MD5, SHA1 ya plain SHA256 se hash karke <b>kabhi</b> store mat karo: ye fast hain, aur fast hona attacker ka dost hai. Apna banana pade to purpose-made password hash (maintained library se PBKDF2, bcrypt, scrypt ya Argon2) use karo aur khud ka kabhi invent mat karo.</li>
<li><b>Login hygiene:</b> baar-baar fail hone par <b>lockout</b> (Identity mein hai) aur rate limits (Day 13); kam se kam admins ke liye <b>MFA</b>; "unknown user" aur "wrong password" ke liye <b>same error message</b> taaki attackers tumhare users ki list na bana sakein; passphrases allowed aur ho sake to breached-password check.</li>
<li><b>Transport:</b> har jagah TLS, <code>UseHttpsRedirection</code> aur <b>HSTS</b> (<code>UseHsts</code>; template ise sirf Development ke bahar enable karta hai, aur yeh localhost ko bhi exclude karta hai, kyunki browser woh rule cache kar lete). Internal service-to-service traffic ko bhi TLS chahiye, jab tak network sach mein trusted na ho aur woh decision likha hua na ho.</li>
<li><b>Data Protection API:</b> ASP.NET Core isse auth cookies aur antiforgery tokens protect karta hai, aur tum jo chhote secrets issue karte ho (reset links, state values) unke liye <code>IDataProtector</code> use kar sakte ho. Iski <b>keys instances ke beech shared aur persisted</b> honi chahiye (jaise Key Vault se protected shared blob store, Day 20); warna har deployment ya load-balanced request par users logout ho jaate hain. Yeh database encryption ka general tool <b>nahi</b> hai.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> user-facing login ke liye Identity ya external provider; hash ke liye <code>PasswordHasher</code>; jab bhi secret compare ho to <code>FixedTimeEquals</code>. Passwords ke liye SHA256 "salt ke saath" bhi mat use karo; security values ke liye <code>Random</code> mat use karo; <code>CryptographicException</code> ko catch karke aise aage mat badho jaise data valid ho.</p>`
      },
      code: [
        {
          caption: {
            en: "VULNERABLE — don't do this (fast hash, kept only as a labelled local function), then the fix: a login with PasswordHasher, one error message and rehash-on-login",
            hi: "VULNERABLE — ऐसा मत करो (fast hash, सिर्फ़ label लगे local function में), फिर fix: PasswordHasher, एक ही error message और login पर rehash वाला login",
            hg: "VULNERABLE — aisa mat karo (fast hash, sirf label lage local function mein), phir fix: PasswordHasher, ek hi error message aur login par rehash wala login"
          },
          check: "run",
          frameworks: ["aspnetcore"],
          expected: "welcome asha\ninvalid user name or password\ninvalid user name or password\nbad hash length: 64",
          src: `using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Identity;

// VULNERABLE - don't do this: a fast, unsalted hash can be cracked with lookup tables (never used below)
static string BadHash(string password) => Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(password)));

// FIXED: PasswordHasher (PBKDF2 + random salt), the same message for unknown user and wrong password
var hasher = new PasswordHasher<string>();
var store = new Dictionary<string, string> { ["asha"] = hasher.HashPassword("asha", "Correct-Horse-9") };
string dummyHash = hasher.HashPassword("nobody", "unused-value");   // checked for unknown users too, so the work is similar

string Login(string user, string password)
{
    bool known = store.TryGetValue(user, out var hash);
    var result = hasher.VerifyHashedPassword(user, known ? hash! : dummyHash, password);
    if (!known || result == PasswordVerificationResult.Failed)
        return "invalid user name or password";
    if (result == PasswordVerificationResult.SuccessRehashNeeded)
        store[user] = hasher.HashPassword(user, password);          // upgrade old hashes on a good login
    return "welcome " + user;
}

Console.WriteLine(Login("asha", "Correct-Horse-9"));
Console.WriteLine(Login("asha", "wrong-password"));
Console.WriteLine(Login("ghost", "Correct-Horse-9"));
Console.WriteLine("bad hash length: " + BadHash("a").Length);`
        },
        {
          caption: {
            en: "Data Protection API: protect and unprotect a small value, and what a tampered payload does (ephemeral provider for the demo; real apps persist their keys)",
            hi: "Data Protection API: छोटी value protect और unprotect करना, और tampered payload का क्या होता है (demo के लिए ephemeral provider; real apps अपनी keys persist करते हैं)",
            hg: "Data Protection API: chhoti value protect aur unprotect karna, aur tampered payload ka kya hota hai (demo ke liye ephemeral provider; real apps apni keys persist karte hain)"
          },
          check: "run",
          frameworks: ["aspnetcore"],
          expected: "round trip: user=asha;exp=2030-01-01\ntampered: rejected\ndifferent protector can read it: False",
          src: `using System.Security.Cryptography;
using Microsoft.AspNetCore.DataProtection;

// Demo only: keys live in memory. A real app calls AddDataProtection().PersistKeysTo...(shared store) and protects keys with Key Vault.
var provider = new EphemeralDataProtectionProvider();
IDataProtector protector = provider.CreateProtector("ResetLink.v1");

string token = protector.Protect("user=asha;exp=2030-01-01");
Console.WriteLine("round trip: " + protector.Unprotect(token));

string tampered = token[..^2] + (token[^2] == 'A' ? "B" : "A") + token[^1];
try
{
    protector.Unprotect(tampered);
    Console.WriteLine("tampered: accepted");
}
catch (CryptographicException)
{
    Console.WriteLine("tampered: rejected");
}

// another purpose string = another key: a token made for one feature is useless in another
IDataProtector other = provider.CreateProtector("Invite.v1");
Console.WriteLine("different protector can read it: " + (TryRead(other, token)));

static bool TryRead(IDataProtector p, string t)
{
    try { p.Unprotect(t); return true; }
    catch (CryptographicException) { return false; }
}`
        }
      ]
    },
    {
      id: "misconfig-supply-ssrf",
      depth: "detailed",
      title: {
        en: "Misconfiguration, vulnerable packages, SSRF, logging and deserialization",
        hi: "Misconfiguration, vulnerable packages, SSRF, logging और deserialization",
        hg: "Misconfiguration, vulnerable packages, SSRF, logging aur deserialization"
      },
      body: {
        en: `<p><b>Analogy:</b> a flat with a strong door but a spare key under the doormat, a delivery boy who delivers wherever the slip says (even inside the society's strong room), and a visitor register where guests write their bank PIN. Each is a small mistake, and each is common.</p>
<ul>
<li><b>Security misconfiguration:</b> the developer exception page or stack traces in production; sample or default credentials; <code>AllowAnyOrigin</code> with credentials; open storage containers; debug endpoints (Swagger, health details) exposed publicly; missing headers (<code>X-Content-Type-Options</code>, CSP, HSTS). Fix with <b>environment-specific config in code, reviewed like code</b>, and a startup check in staging that calls the app like an attacker would.</li>
<li><b>Vulnerable and outdated packages (supply chain):</b> since the .NET 8 SDK, <b>NuGet Audit</b> runs during restore and warns about known-vulnerable packages (codes NU1901 to NU1904 by severity). For .NET 10 projects the default audit mode includes <b>transitive</b> packages; before that the default is direct packages only. <code>dotnet list package --vulnerable --include-transitive</code> shows the same data on demand. Add <b>Dependabot</b> or Renovate for update pull requests, and consider lock files or Central Package Management to control versions.</li>
<li><b>SSRF (server-side request forgery):</b> your server fetches a URL the user supplied (webhook, "import from URL", image proxy), and the attacker points it at <code>http://169.254.169.254/</code> (cloud metadata), <code>localhost</code> or an internal admin service. Defences: an <b>allow-list of hosts</b>, https only, parse the URL before comparing (see the URL puzzle), block private, loopback and link-local addresses <b>after DNS resolution</b>, do not follow redirects blindly, and run the fetcher with no special network access.</li>
<li><b>Logging and monitoring:</b> log security events (login success and failure, access denied, admin actions) with user id and correlation id, and alert on spikes. <b>Never log passwords, tokens, full card numbers or unneeded PII</b>; log ids, not whole objects. Beware of log injection: use structured logging so user text stays a value, not a new log line.</li>
<li><b>Deserialization:</b> do not deserialize untrusted data into arbitrary types. <code>BinaryFormatter</code> is removed from modern .NET (Day 22). <code>System.Text.Json</code> into your own DTOs is the safe default; avoid Newtonsoft <code>TypeNameHandling</code> other than <code>None</code> for untrusted input, and never accept a type name from the client.</li>
</ul>
<p><b>When to use / when not:</b> turn NuGet Audit on everywhere (it is on by default) and decide in the team <b>which severity fails the build</b>; failing every build on a "low" advisory trains people to ignore the warnings. Use an SSRF allow-list for any feature that fetches user URLs; if the feature can be removed (accept an upload instead), remove it. Do not use a deny-list of "bad" hosts as the only defence; attackers find spellings you did not list.</p>`,
        hi: `<p><b>Analogy:</b> एक flat जिसका दरवाज़ा मज़बूत है पर doormat के नीचे spare key है, एक delivery boy जो slip पर जहाँ लिखा हो वहाँ deliver कर देता है (society के strong room के अंदर भी), और एक visitor register जिसमें guests अपना bank PIN लिख देते हैं। हर एक छोटी गलती है, और हर एक common है।</p>
<ul>
<li><b>Security misconfiguration:</b> production में developer exception page या stack traces; sample या default credentials; credentials के साथ <code>AllowAnyOrigin</code>; खुले storage containers; public रूप से exposed debug endpoints (Swagger, health details); missing headers (<code>X-Content-Type-Options</code>, CSP, HSTS)। Fix: <b>code में environment-specific config जिसका review code की तरह हो</b>, और staging में startup check जो app को attacker की तरह call करे।</li>
<li><b>Vulnerable और outdated packages (supply chain):</b> .NET 8 SDK से <b>NuGet Audit</b> restore के दौरान चलता है और known-vulnerable packages पर warn करता है (severity के हिसाब से codes NU1901 से NU1904)। .NET 10 projects में default audit mode <b>transitive</b> packages भी शामिल करता है; उससे पहले default सिर्फ़ direct packages है। <code>dotnet list package --vulnerable --include-transitive</code> वही data माँगने पर दिखाता है। Update pull requests के लिए <b>Dependabot</b> या Renovate लगाओ, और versions control करने के लिए lock files या Central Package Management सोचो।</li>
<li><b>SSRF (server-side request forgery):</b> तुम्हारा server user का दिया URL fetch करता है (webhook, "import from URL", image proxy), और attacker उसे <code>http://169.254.169.254/</code> (cloud metadata), <code>localhost</code> या internal admin service पर point कर देता है। Defences: <b>hosts की allow-list</b>, सिर्फ़ https, compare करने से पहले URL parse करो (URL puzzle देखो), private, loopback और link-local addresses को <b>DNS resolution के बाद</b> block करो, redirects को आँख बंद करके follow मत करो, और fetcher को बिना special network access के चलाओ।</li>
<li><b>Logging और monitoring:</b> security events (login success और failure, access denied, admin actions) को user id और correlation id के साथ log करो, और spikes पर alert लगाओ। <b>Passwords, tokens, full card numbers या ग़ैर-ज़रूरी PII कभी log मत करो</b>; पूरे objects की जगह ids log करो। Log injection से सावधान: structured logging use करो ताकि user text एक value रहे, नई log line नहीं।</li>
<li><b>Deserialization:</b> untrusted data को arbitrary types में deserialize मत करो। <code>BinaryFormatter</code> modern .NET से हटा दिया गया है (Day 22)। अपने DTOs में <code>System.Text.Json</code> safe default है; untrusted input के लिए Newtonsoft <code>TypeNameHandling</code> को <code>None</code> के अलावा avoid करो, और client से type name कभी accept मत करो।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> NuGet Audit हर जगह on रखो (यह default से on है) और team में तय करो कि <b>कौन-सी severity build fail करे</b>; हर "low" advisory पर build fail करने से लोग warnings ignore करना सीख जाते हैं। User URLs fetch करने वाले हर feature के लिए SSRF allow-list; अगर feature हटाया जा सकता है (URL की जगह upload accept करो) तो हटा दो। "Bad" hosts की deny-list को अकेली defence मत बनाओ; attackers ऐसी spellings ढूँढ लेते हैं जो तुमने list नहीं कीं।</p>`,
        hg: `<p><b>Analogy:</b> ek flat jiska darwaza mazboot hai par doormat ke neeche spare key hai, ek delivery boy jo slip par jahan likha ho wahan deliver kar deta hai (society ke strong room ke andar bhi), aur ek visitor register jisme guests apna bank PIN likh dete hain. Har ek chhoti galti hai, aur har ek common hai.</p>
<ul>
<li><b>Security misconfiguration:</b> production mein developer exception page ya stack traces; sample ya default credentials; credentials ke saath <code>AllowAnyOrigin</code>; khule storage containers; public roop se exposed debug endpoints (Swagger, health details); missing headers (<code>X-Content-Type-Options</code>, CSP, HSTS). Fix: <b>code mein environment-specific config jiska review code ki tarah ho</b>, aur staging mein startup check jo app ko attacker ki tarah call kare.</li>
<li><b>Vulnerable aur outdated packages (supply chain):</b> .NET 8 SDK se <b>NuGet Audit</b> restore ke dauran chalta hai aur known-vulnerable packages par warn karta hai (severity ke hisaab se codes NU1901 se NU1904). .NET 10 projects mein default audit mode <b>transitive</b> packages bhi shamil karta hai; usse pehle default sirf direct packages hai. <code>dotnet list package --vulnerable --include-transitive</code> wahi data maangne par dikhata hai. Update pull requests ke liye <b>Dependabot</b> ya Renovate lagao, aur versions control karne ke liye lock files ya Central Package Management socho.</li>
<li><b>SSRF (server-side request forgery):</b> tumhara server user ka diya URL fetch karta hai (webhook, "import from URL", image proxy), aur attacker use <code>http://169.254.169.254/</code> (cloud metadata), <code>localhost</code> ya internal admin service par point kar deta hai. Defences: <b>hosts ki allow-list</b>, sirf https, compare karne se pehle URL parse karo (URL puzzle dekho), private, loopback aur link-local addresses ko <b>DNS resolution ke baad</b> block karo, redirects ko aankh band karke follow mat karo, aur fetcher ko bina special network access ke chalao.</li>
<li><b>Logging aur monitoring:</b> security events (login success aur failure, access denied, admin actions) ko user id aur correlation id ke saath log karo, aur spikes par alert lagao. <b>Passwords, tokens, full card numbers ya gair-zaroori PII kabhi log mat karo</b>; poore objects ki jagah ids log karo. Log injection se saavdhan: structured logging use karo taaki user text ek value rahe, nayi log line nahi.</li>
<li><b>Deserialization:</b> untrusted data ko arbitrary types mein deserialize mat karo. <code>BinaryFormatter</code> modern .NET se hata diya gaya hai (Day 22). Apne DTOs mein <code>System.Text.Json</code> safe default hai; untrusted input ke liye Newtonsoft <code>TypeNameHandling</code> ko <code>None</code> ke alawa avoid karo, aur client se type name kabhi accept mat karo.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> NuGet Audit har jagah on rakho (yeh default se on hai) aur team mein tay karo ki <b>kaun-si severity build fail kare</b>; har "low" advisory par build fail karne se log warnings ignore karna seekh jaate hain. User URLs fetch karne wale har feature ke liye SSRF allow-list; agar feature hataya ja sakta hai (URL ki jagah upload accept karo) to hata do. "Bad" hosts ki deny-list ko akeli defence mat banao; attackers aisi spellings dhoondh lete hain jo tumne list nahi ki.</p>`
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "Repository-level NuGet Audit settings in Directory.Build.props (MSBuild XML shown as text; properties and defaults are from the NuGet docs)",
            hi: "Directory.Build.props में repository-level NuGet Audit settings (MSBuild XML text की तरह; properties और defaults NuGet docs से हैं)",
            hg: "Directory.Build.props mein repository-level NuGet Audit settings (MSBuild XML text ki tarah; properties aur defaults NuGet docs se hain)"
          },
          check: "none",
          src: `<Project>
  <PropertyGroup>
    <NuGetAudit>true</NuGetAudit>             <!-- on by default -->
    <NuGetAuditMode>all</NuGetAuditMode>       <!-- direct + transitive (default is "all" only for net10.0+) -->
    <NuGetAuditLevel>moderate</NuGetAuditLevel> <!-- report moderate, high, critical -->
  </PropertyGroup>
  <PropertyGroup>
    <!-- in the audit pipeline only (restore with -p:AuditPipeline=true): high (NU1903) and critical (NU1904) advisories fail the build -->
    <WarningsAsErrors Condition="'$(AuditPipeline)' == 'true'">$(WarningsAsErrors);NU1903;NU1904</WarningsAsErrors>
  </PropertyGroup>
</Project>`
        },
        {
          lang: "bash",
          caption: {
            en: "Checking packages by hand (dotnet package update --vulnerable needs the .NET 10 SDK)",
            hi: "Packages हाथ से check करना (dotnet package update --vulnerable के लिए .NET 10 SDK चाहिए)",
            hg: "Packages haath se check karna (dotnet package update --vulnerable ke liye .NET 10 SDK chahiye)"
          },
          check: "none",
          src: `dotnet list package --vulnerable --include-transitive   # which packages have known advisories, including transitive ones
dotnet nuget why MyApp.csproj Some.Vulnerable.Package   # why is it in my graph? (shows the dependency path)
dotnet package update --vulnerable                      # .NET 10 SDK: move vulnerable packages to the first non-vulnerable version`
        },
        {
          caption: {
            en: "SSRF guard: is a resolved IP address public? (VULNERABLE fetch-anything helper kept only as a labelled, unused local function)",
            hi: "SSRF guard: क्या resolved IP address public है? (VULNERABLE fetch-anything helper सिर्फ़ label लगे, unused local function में)",
            hg: "SSRF guard: kya resolved IP address public hai? (VULNERABLE fetch-anything helper sirf label lage, unused local function mein)"
          },
          check: "run",
          expected: "8.8.8.8          public=True\n10.1.2.3         public=False\n172.16.0.9       public=False\n172.32.0.9       public=True\n192.168.1.20     public=False\n169.254.169.254  public=False\n127.0.0.1        public=False\n::1              public=False\n::ffff:10.0.0.1  public=False",
          src: `using System.Net;
using System.Net.Sockets;

// VULNERABLE - don't do this: fetch whatever URL the user supplied (never called below)
static Task<string> BadFetch(HttpClient http, string userUrl) => http.GetStringAsync(userUrl);

// FIXED (part 2 of 3): after DNS resolution, refuse addresses that point inside your network.
// Parts 1 and 3: allow-list the host first (see the URL puzzle) and connect to the address you checked.
static bool IsPublicAddress(IPAddress ip)
{
    if (ip.IsIPv4MappedToIPv6) ip = ip.MapToIPv4();
    if (IPAddress.IsLoopback(ip)) return false;
    if (ip.AddressFamily == AddressFamily.InterNetworkV6)
        return !(ip.IsIPv6LinkLocal || ip.IsIPv6SiteLocal || ip.IsIPv6UniqueLocal);

    var b = ip.GetAddressBytes();
    bool isPrivate =
        b[0] == 0 || b[0] == 10 || b[0] == 127 ||
        (b[0] == 172 && b[1] is >= 16 and <= 31) ||
        (b[0] == 192 && b[1] == 168) ||
        (b[0] == 169 && b[1] == 254);          // link-local, includes the cloud metadata address 169.254.169.254
    return !isPrivate;
}

foreach (var text in new[] { "8.8.8.8", "10.1.2.3", "172.16.0.9", "172.32.0.9", "192.168.1.20", "169.254.169.254", "127.0.0.1", "::1", "::ffff:10.0.0.1" })
    Console.WriteLine($"{text,-16} public={IsPublicAddress(IPAddress.Parse(text))}");`
        },
        {
          caption: {
            en: "VULNERABLE — don't do this, then the fix: logging a password and a full e-mail vs logging ids and a reason (compile-checked)",
            hi: "VULNERABLE — ऐसा मत करो, फिर fix: password और पूरा e-mail log करना बनाम ids और reason log करना (compile-checked)",
            hg: "VULNERABLE — aisa mat karo, phir fix: password aur poora e-mail log karna vs ids aur reason log karna (compile-checked)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.Extensions.Logging;

public class LoginAudit(ILogger<LoginAudit> logger)
{
    // VULNERABLE - don't do this: the secret and personal data end up in log files, backups and dashboards
    public void FailedBad(string email, string password) =>
        logger.LogWarning("Login failed for {Email} with password {Password}", email, password);

    // FIXED: a stable id and a reason; no secret, no free-text personal data
    public void Failed(string userId, string reason, string correlationId) =>
        logger.LogWarning("Login failed for user {UserId}, reason {Reason}, correlation {CorrelationId}", userId, reason, correlationId);
}`
        }
      ]
    },
    {
      id: "tl-security",
      depth: "detailed",
      title: {
        en: "Tech Lead angle: threat modelling, review checklist, security in CI",
        hi: "Tech Lead angle: threat modelling, review checklist, CI में security",
        hg: "Tech Lead angle: threat modelling, review checklist, CI mein security"
      },
      body: {
        en: `<p><b>Analogy:</b> before a wedding, the family walks through the venue asking "where can things go wrong?": a blocked exit, a loose wire, a crowded stage. Threat modelling is that walk-through for a feature, done <b>before</b> building. It is cheap, and it finds the design flaws that code review cannot.</p>
<ul>
<li><b>Threat modelling in 15 to 30 minutes:</b> (1) draw the data flow: users, your services, databases, third parties, and the <b>trust boundaries</b> between them; (2) walk each arrow and box with <b>STRIDE</b>; (3) write the top threats and an owner for each; (4) turn them into tickets and tests.</li>
<li><b>STRIDE</b>, with a .NET answer for each: <b>S</b>poofing (fake identity) - Identity, MFA, signed tokens; <b>T</b>ampering (data changed) - HTTPS, signatures, DB permissions, antiforgery; <b>R</b>epudiation ("I never did that") - audit logs with user and time; <b>I</b>nformation disclosure (data leaks) - encryption, least privilege, no secrets in logs, careful errors; <b>D</b>enial of service - rate limiting (Day 13), request size limits, timeouts, pagination; <b>E</b>levation of privilege - authorization policies, resource checks, least-privilege identities.</li>
<li><b>Secure code-review checklist (put it in the PR template):</b> Is every endpoint authenticated and authorized (and the <b>ownership</b> checked)? Any string-built SQL, HTML, shell command or file path? Any new secret, connection string or key in code, config or logs? Is user input validated (type, length, range) and output encoded? Any new outbound URL fetched from user input? New package: licence, maintenance, known advisories? Are errors generic for callers and detailed in logs? Does a new endpoint have a rate limit and a size limit? Is there a test for the abuse case, not only the happy path?</li>
<li><b>Security in CI (shift left):</b> build fails on known vulnerable packages at an agreed severity; secret scanning on every push (Day 21); static analysis (.NET analyzers, CodeQL or similar) on pull requests; container image scan; pinned versions of pipeline actions and base images; signed or provenance-checked artifacts where your risk needs it; DAST or a pen test on a schedule before big releases.</li>
</ul>
<p><b>When to use / when not:</b> threat-model every feature that adds a trust boundary, new data of personal or financial kind, or a new way to authenticate; a small UI change does not need it. Do not turn the checklist into a 60-item form nobody reads; keep it to what your reviews actually catch. A security tool that fails builds on noise gets disabled, so tune it first.</p>`,
        hi: `<p><b>Analogy:</b> शादी से पहले परिवार venue में घूमकर पूछता है "कहाँ गड़बड़ हो सकती है?": बंद exit, ढीला तार, भीड़ वाला stage। Threat modelling किसी feature के लिए वही walk-through है, जो बनाने से <b>पहले</b> होता है। यह सस्ता है, और वो design flaws पकड़ता है जो code review नहीं पकड़ पाता।</p>
<ul>
<li><b>15 से 30 मिनट में threat modelling:</b> (1) data flow बनाओ: users, तुम्हारी services, databases, third parties और उनके बीच की <b>trust boundaries</b>; (2) हर arrow और box को <b>STRIDE</b> से देखो; (3) top threats और हर एक का owner लिखो; (4) उन्हें tickets और tests में बदलो।</li>
<li><b>STRIDE</b>, हर एक के लिए .NET जवाब के साथ: <b>S</b>poofing (नकली identity) - Identity, MFA, signed tokens; <b>T</b>ampering (data बदला गया) - HTTPS, signatures, DB permissions, antiforgery; <b>R</b>epudiation ("मैंने ये नहीं किया") - user और time वाले audit logs; <b>I</b>nformation disclosure (data leak) - encryption, least privilege, logs में secrets नहीं, सोचे-समझे errors; <b>D</b>enial of service - rate limiting (Day 13), request size limits, timeouts, pagination; <b>E</b>levation of privilege - authorization policies, resource checks, least-privilege identities।</li>
<li><b>Secure code-review checklist (PR template में रखो):</b> क्या हर endpoint authenticated और authorized है (और <b>ownership</b> check हुआ)? कहीं string से बना SQL, HTML, shell command या file path? कोई नया secret, connection string या key code, config या logs में? क्या user input validate हुआ (type, length, range) और output encode हुआ? User input से fetch होने वाला कोई नया outbound URL? नया package: licence, maintenance, known advisories? क्या callers के लिए errors generic हैं और logs में detailed? नए endpoint पर rate limit और size limit है? क्या abuse case का test है, सिर्फ़ happy path का नहीं?</li>
<li><b>CI में security (shift left):</b> agreed severity पर known vulnerable packages से build fail; हर push पर secret scanning (Day 21); pull requests पर static analysis (.NET analyzers, CodeQL या similar); container image scan; pipeline actions और base images के pinned versions; जहाँ risk माँगे वहाँ signed या provenance-checked artifacts; बड़ी releases से पहले schedule पर DAST या pen test।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> हर उस feature का threat-model करो जो trust boundary, personal या financial data, या authenticate करने का नया तरीका जोड़े; छोटे UI change को ज़रूरत नहीं। Checklist को 60-item का form मत बनाओ जिसे कोई न पढ़े; उतना रखो जितना तुम्हारे reviews सच में पकड़ते हैं। जो security tool noise पर builds fail करे वो disable हो जाता है, इसलिए पहले उसे tune करो।</p>`,
        hg: `<p><b>Analogy:</b> shaadi se pehle parivar venue mein ghoomkar poochta hai "kahan gadbad ho sakti hai?": band exit, dheela taar, bheed wala stage. Threat modelling kisi feature ke liye wahi walk-through hai, jo banane se <b>pehle</b> hota hai. Yeh sasta hai, aur woh design flaws pakadta hai jo code review nahi pakad paata.</p>
<ul>
<li><b>15 se 30 minute mein threat modelling:</b> (1) data flow banao: users, tumhari services, databases, third parties aur unke beech ki <b>trust boundaries</b>; (2) har arrow aur box ko <b>STRIDE</b> se dekho; (3) top threats aur har ek ka owner likho; (4) unhein tickets aur tests mein badlo.</li>
<li><b>STRIDE</b>, har ek ke liye .NET jawab ke saath: <b>S</b>poofing (nakli identity) - Identity, MFA, signed tokens; <b>T</b>ampering (data badla gaya) - HTTPS, signatures, DB permissions, antiforgery; <b>R</b>epudiation ("maine yeh nahi kiya") - user aur time wale audit logs; <b>I</b>nformation disclosure (data leak) - encryption, least privilege, logs mein secrets nahi, soche-samjhe errors; <b>D</b>enial of service - rate limiting (Day 13), request size limits, timeouts, pagination; <b>E</b>levation of privilege - authorization policies, resource checks, least-privilege identities.</li>
<li><b>Secure code-review checklist (PR template mein rakho):</b> kya har endpoint authenticated aur authorized hai (aur <b>ownership</b> check hua)? Kahin string se bana SQL, HTML, shell command ya file path? Koi naya secret, connection string ya key code, config ya logs mein? Kya user input validate hua (type, length, range) aur output encode hua? User input se fetch hone wala koi naya outbound URL? Naya package: licence, maintenance, known advisories? Kya callers ke liye errors generic hain aur logs mein detailed? Naye endpoint par rate limit aur size limit hai? Kya abuse case ka test hai, sirf happy path ka nahi?</li>
<li><b>CI mein security (shift left):</b> agreed severity par known vulnerable packages se build fail; har push par secret scanning (Day 21); pull requests par static analysis (.NET analyzers, CodeQL ya similar); container image scan; pipeline actions aur base images ke pinned versions; jahan risk maange wahan signed ya provenance-checked artifacts; badi releases se pehle schedule par DAST ya pen test.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> har us feature ka threat-model karo jo trust boundary, personal ya financial data, ya authenticate karne ka naya tareeka jode; chhote UI change ko zaroorat nahi. Checklist ko 60-item ka form mat banao jise koi na padhe; utna rakho jitna tumhare reviews sach mein pakadte hain. Jo security tool noise par builds fail kare woh disable ho jaata hai, isliye pehle use tune karo.</p>`
      },
      code: [
        {
          lang: "yaml",
          caption: {
            en: "A dedicated audit job (Azure Pipelines YAML): same repo setting as above, but advisories become errors only when AuditPipeline=true (pattern from the NuGet docs)",
            hi: "अलग audit job (Azure Pipelines YAML): ऊपर वाली repo setting, पर advisories सिर्फ़ AuditPipeline=true पर errors बनती हैं (NuGet docs का pattern)",
            hg: "Alag audit job (Azure Pipelines YAML): upar wali repo setting, par advisories sirf AuditPipeline=true par errors banti hain (NuGet docs ka pattern)"
          },
          check: "none",
          src: `# Directory.Build.props maps the audit codes to errors only when $(AuditPipeline) == 'true'
trigger: none
schedules:
  - cron: "0 3 * * *"          # nightly: new advisories appear without any code change
    branches: { include: [ main ] }
    always: true

pool: { vmImage: ubuntu-latest }

steps:
  - script: dotnet restore -p:AuditPipeline=true
    displayName: Restore with NuGet Audit as errors
  - script: dotnet list package --vulnerable --include-transitive
    displayName: Print the vulnerable packages (for the report)`
        }
      ]
    },
    {
      id: "perf-cpu-memory",
      depth: "detailed",
      title: {
        en: "Performance in code: benchmarks, allocations, async and thread-pool starvation",
        hi: "Code में performance: benchmarks, allocations, async और thread-pool starvation",
        hg: "Code mein performance: benchmarks, allocations, async aur thread-pool starvation"
      },
      body: {
        en: `<p><b>Analogy:</b> a railway ticket counter with 8 windows. If each clerk stops and waits on the phone for a slow answer, the queue grows even though the clerks are "idle". That is <b>thread-pool starvation</b>: threads blocked on I/O instead of serving other requests. Async means the clerk puts the phone call on hold and serves the next person.</p>
<ul>
<li><b>BenchmarkDotNet:</b> run in Release, with <code>[MemoryDiagnoser]</code>; read <b>Mean</b>, <b>Allocated</b> and the GC columns. Benchmark the thing the profile pointed at, with realistic data sizes. Results depend on the machine, so compare variants on the same machine.</li>
<li><b>Allocations (Days 2 and 3):</b> every allocation adds GC work. Cheap wins: <code>StringBuilder</code> or <code>string.Join</code> instead of repeated <code>+=</code> in loops; <code>Span&lt;T&gt;</code> and <code>ReadOnlySpan&lt;char&gt;</code> to slice without copying; <code>ArrayPool&lt;T&gt;.Shared</code> for large temporary buffers (<b>rented arrays can be longer than asked and contain old data</b>, so use only the length you need and always <code>Return</code>); avoid LINQ and closures in the hottest loops only after measuring; <code>struct</code> and <code>record struct</code> carefully (copying costs, Day 2).</li>
<li><b>Async all the way:</b> in ASP.NET Core there is no <code>SynchronizationContext</code> deadlock, but blocking with <code>.Result</code>, <code>.Wait()</code> or <code>.GetAwaiter().GetResult()</code> still holds a thread-pool thread. Under load the pool injects threads slowly, so latency climbs while CPU stays low. Use <code>async</code> from the endpoint down to the I/O call, pass the <code>CancellationToken</code> (Day 3), and never wrap sync work in <code>Task.Run</code> inside a request just to look async.</li>
<li><b>Starvation symptoms:</b> requests slow or time out while CPU is low; <code>dotnet-counters</code> shows a growing <b>ThreadPool Queue Length</b> and a rising thread count; a trace or dump shows many threads waiting in <code>Task.Wait</code> or <code>.Result</code>. Fix the blocking calls; raising the minimum threads is a stop-gap, not a cure.</li>
</ul>
<p><b>When to use / when not:</b> reach for Span and pooling in <b>parsers, serializers, protocol code and other proven hot paths</b>. Do not pool small objects or apply these tricks across normal business code: it makes the code harder to read and review, and the GC is good at short-lived objects. Async is the default for every I/O call; keep CPU-bound work off the request path (queue it, Day 16) instead of hiding it with <code>Task.Run</code>.</p>`,
        hi: `<p><b>Analogy:</b> 8 windows वाला railway ticket counter। अगर हर clerk किसी slow जवाब के लिए phone पर रुककर इंतज़ार करे, तो clerks "खाली" होते हुए भी queue बढ़ती है। यही <b>thread-pool starvation</b> है: threads दूसरी requests serve करने के बजाय I/O पर blocked हैं। Async का मतलब clerk phone call को hold पर रखकर अगले आदमी को serve करता है।</p>
<ul>
<li><b>BenchmarkDotNet:</b> Release में चलाओ, <code>[MemoryDiagnoser]</code> के साथ; <b>Mean</b>, <b>Allocated</b> और GC columns पढ़ो। उसी चीज़ को benchmark करो जिसकी तरफ़ profile ने इशारा किया, realistic data sizes के साथ। Results machine पर depend करते हैं, इसलिए variants को एक ही machine पर compare करो।</li>
<li><b>Allocations (Days 2 और 3):</b> हर allocation GC का काम बढ़ाती है। सस्ते wins: loops में बार-बार <code>+=</code> की जगह <code>StringBuilder</code> या <code>string.Join</code>; बिना copy किए slice करने के लिए <code>Span&lt;T&gt;</code> और <code>ReadOnlySpan&lt;char&gt;</code>; बड़े temporary buffers के लिए <code>ArrayPool&lt;T&gt;.Shared</code> (<b>rent किए arrays माँगे से लंबे हो सकते हैं और उनमें पुराना data हो सकता है</b>, इसलिए सिर्फ़ ज़रूरी length use करो और हमेशा <code>Return</code> करो); सबसे hot loops में LINQ और closures सिर्फ़ measure करने के बाद हटाओ; <code>struct</code> और <code>record struct</code> सावधानी से (copying cost, Day 2)।</li>
<li><b>Async all the way:</b> ASP.NET Core में <code>SynchronizationContext</code> deadlock नहीं है, पर <code>.Result</code>, <code>.Wait()</code> या <code>.GetAwaiter().GetResult()</code> से blocking अब भी thread-pool thread पकड़े रखती है। Load में pool threads धीरे-धीरे inject करता है, इसलिए CPU कम रहते हुए latency बढ़ती है। Endpoint से I/O call तक <code>async</code> रखो, <code>CancellationToken</code> pass करो (Day 3), और request के अंदर sync काम को सिर्फ़ async दिखाने के लिए <code>Task.Run</code> में मत लपेटो।</li>
<li><b>Starvation के symptoms:</b> CPU कम है फिर भी requests slow या time out; <code>dotnet-counters</code> में बढ़ती <b>ThreadPool Queue Length</b> और बढ़ता thread count; trace या dump में बहुत से threads <code>Task.Wait</code> या <code>.Result</code> में wait करते हुए। Blocking calls fix करो; minimum threads बढ़ाना stop-gap है, इलाज नहीं।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> Span और pooling <b>parsers, serializers, protocol code और बाकी proven hot paths</b> में use करो। छोटे objects को pool मत करो और ये tricks normal business code में मत फैलाओ: code पढ़ने और review करने में मुश्किल होता है, और GC short-lived objects में अच्छा है। हर I/O call के लिए async default है; CPU-bound काम को request path से बाहर रखो (queue में, Day 16), <code>Task.Run</code> से छुपाओ मत।</p>`,
        hg: `<p><b>Analogy:</b> 8 windows wala railway ticket counter. Agar har clerk kisi slow jawab ke liye phone par rukkar intezaar kare, to clerks "khaali" hote hue bhi queue badhti hai. Yahi <b>thread-pool starvation</b> hai: threads doosri requests serve karne ke bajay I/O par blocked hain. Async ka matlab clerk phone call ko hold par rakhkar agle aadmi ko serve karta hai.</p>
<ul>
<li><b>BenchmarkDotNet:</b> Release mein chalao, <code>[MemoryDiagnoser]</code> ke saath; <b>Mean</b>, <b>Allocated</b> aur GC columns padho. Usi cheez ko benchmark karo jiski taraf profile ne ishara kiya, realistic data sizes ke saath. Results machine par depend karte hain, isliye variants ko ek hi machine par compare karo.</li>
<li><b>Allocations (Days 2 aur 3):</b> har allocation GC ka kaam badhati hai. Saste wins: loops mein baar-baar <code>+=</code> ki jagah <code>StringBuilder</code> ya <code>string.Join</code>; bina copy kiye slice karne ke liye <code>Span&lt;T&gt;</code> aur <code>ReadOnlySpan&lt;char&gt;</code>; bade temporary buffers ke liye <code>ArrayPool&lt;T&gt;.Shared</code> (<b>rent kiye arrays maange se lambe ho sakte hain aur unmein purana data ho sakta hai</b>, isliye sirf zaroori length use karo aur hamesha <code>Return</code> karo); sabse hot loops mein LINQ aur closures sirf measure karne ke baad hatao; <code>struct</code> aur <code>record struct</code> saavdhani se (copying cost, Day 2).</li>
<li><b>Async all the way:</b> ASP.NET Core mein <code>SynchronizationContext</code> deadlock nahi hai, par <code>.Result</code>, <code>.Wait()</code> ya <code>.GetAwaiter().GetResult()</code> se blocking ab bhi thread-pool thread pakde rehti hai. Load mein pool threads dheere-dheere inject karta hai, isliye CPU kam rehte hue latency badhti hai. Endpoint se I/O call tak <code>async</code> rakho, <code>CancellationToken</code> pass karo (Day 3), aur request ke andar sync kaam ko sirf async dikhane ke liye <code>Task.Run</code> mein mat lapeto.</li>
<li><b>Starvation ke symptoms:</b> CPU kam hai phir bhi requests slow ya time out; <code>dotnet-counters</code> mein badhti <b>ThreadPool Queue Length</b> aur badhta thread count; trace ya dump mein bahut se threads <code>Task.Wait</code> ya <code>.Result</code> mein wait karte hue. Blocking calls fix karo; minimum threads badhana stop-gap hai, ilaaj nahi.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> Span aur pooling <b>parsers, serializers, protocol code aur baaki proven hot paths</b> mein use karo. Chhote objects ko pool mat karo aur ye tricks normal business code mein mat phailao: code padhne aur review karne mein mushkil hota hai, aur GC short-lived objects mein achha hai. Har I/O call ke liye async default hai; CPU-bound kaam ko request path se bahar rakho (queue mein, Day 16), <code>Task.Run</code> se chhupao mat.</p>`
      },
      code: [
        {
          caption: {
            en: "BenchmarkDotNet with MemoryDiagnoser: repeated concat vs StringBuilder vs string.Join (compile-checked; run with dotnet run -c Release; numbers depend on your machine so none are shown)",
            hi: "MemoryDiagnoser के साथ BenchmarkDotNet: बार-बार concat बनाम StringBuilder बनाम string.Join (compile-checked; dotnet run -c Release से चलाओ; numbers machine पर depend करते हैं इसलिए नहीं दिखाए)",
            hg: "MemoryDiagnoser ke saath BenchmarkDotNet: baar-baar concat vs StringBuilder vs string.Join (compile-checked; dotnet run -c Release se chalao; numbers machine par depend karte hain isliye nahi dikhaye)"
          },
          check: "compile",
          packages: ["BenchmarkDotNet@0.*"],
          src: `using System.Text;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;

BenchmarkRunner.Run<JoinBenchmarks>();

[MemoryDiagnoser]
public class JoinBenchmarks
{
    private readonly string[] _parts = Enumerable.Range(0, 200).Select(i => "item" + i).ToArray();

    [Benchmark(Baseline = true)]
    public string RepeatedConcat()
    {
        var result = "";
        foreach (var part in _parts) result += part + ",";   // a new string on every pass
        return result;
    }

    [Benchmark]
    public string Builder()
    {
        var sb = new StringBuilder();
        foreach (var part in _parts) sb.Append(part).Append(',');
        return sb.ToString();
    }

    [Benchmark]
    public string Join() => string.Join(',', _parts);
}`
        },
        {
          caption: {
            en: "Span slicing and a pooled buffer (use only on a proven hot path): parse key=value pairs without creating substrings",
            hi: "Span slicing और pooled buffer (सिर्फ़ proven hot path पर): substrings बनाए बिना key=value pairs parse करना",
            hg: "Span slicing aur pooled buffer (sirf proven hot path par): substrings banaye bina key=value pairs parse karna"
          },
          check: "run",
          expected: "rented is large enough: True\nregion -> south\ntier -> gold\nlimit -> 250\nlimit x 2 = 500",
          src: `using System.Buffers;
using System.Text;

string line = "region=south;tier=gold;limit=250";

byte[] rented = ArrayPool<byte>.Shared.Rent(Encoding.UTF8.GetMaxByteCount(line.Length));
try
{
    int bytes = Encoding.UTF8.GetBytes(line, rented);          // only the first 'bytes' items are ours
    Console.WriteLine("rented is large enough: " + (rented.Length >= bytes));

    ReadOnlySpan<char> rest = line;
    int limit = 0;
    while (!rest.IsEmpty)
    {
        int semi = rest.IndexOf(';');
        ReadOnlySpan<char> pair = semi < 0 ? rest : rest[..semi];
        int eq = pair.IndexOf('=');
        ReadOnlySpan<char> key = pair[..eq];
        ReadOnlySpan<char> value = pair[(eq + 1)..];
        if (key.SequenceEqual("limit")) limit = int.Parse(value);
        Console.WriteLine($"{key} -> {value}");
        rest = semi < 0 ? default : rest[(semi + 1)..];
    }
    Console.WriteLine("limit x 2 = " + limit * 2);
}
finally
{
    ArrayPool<byte>.Shared.Return(rented);                      // always give it back
}`
        },
        {
          caption: {
            en: "SLOW — don't do this, then the fix: blocking on an HTTP call with .Result vs async all the way with a CancellationToken (compile-checked)",
            hi: "SLOW — ऐसा मत करो, फिर fix: .Result से HTTP call पर blocking बनाम CancellationToken के साथ async all the way (compile-checked)",
            hg: "SLOW — aisa mat karo, phir fix: .Result se HTTP call par blocking vs CancellationToken ke saath async all the way (compile-checked)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddHttpClient();
var app = builder.Build();

// SLOW - don't do this: the request thread sits blocked until the HTTP call finishes; under load the thread pool starves
app.MapGet("/bad/rate", (IHttpClientFactory factory) =>
    factory.CreateClient().GetStringAsync("https://rates.example/usd").Result);

// FIXED: async all the way; the thread goes back to the pool while the call is in flight, and cancellation is passed down
app.MapGet("/rate", async (IHttpClientFactory factory, CancellationToken ct) =>
    await factory.CreateClient().GetStringAsync("https://rates.example/usd", ct));

app.Run();`
        }
      ]
    },
    {
      id: "perf-web-data",
      depth: "detailed",
      title: {
        en: "Performance in the web layer: caching, compression, pagination, EF and protocols",
        hi: "Web layer में performance: caching, compression, pagination, EF और protocols",
        hg: "Web layer mein performance: caching, compression, pagination, EF aur protocols"
      },
      body: {
        en: `<p><b>Analogy:</b> a kirana shop that is asked "do you have 1 kg sugar?" fifty times an hour keeps a packed bag ready at the counter (<b>cache</b>), sends bulk orders in a compact box (<b>compression</b>), and never hands over the whole godown list when you asked for ten items (<b>pagination</b>).</p>
<ul>
<li><b>Caching (Day 13):</b> in-memory, <code>HybridCache</code> and distributed caches store data; <b>output caching</b> (<code>AddOutputCache</code>, <code>UseOutputCache</code>, <code>.CacheOutput()</code>) stores whole responses. By default it caches only 200 responses to GET or HEAD, skips responses that set cookies and skips <b>authenticated</b> requests, which protects you from serving one user's page to another. Place <code>UseOutputCache</code> after authentication, authorization and CORS. Its default store is in memory, so each server has its own cache; use Redis for a shared one. Evict with tags when data changes.</li>
<li><b>Response compression:</b> <code>AddResponseCompression</code> and <code>UseResponseCompression</code> add Brotli and Gzip. It is off for HTTPS by default (<code>EnableForHttps</code>) because compressing dynamic pages that contain secrets can expose them to CRIME and BREACH style attacks; antiforgery tokens are one mitigation. Many teams compress at the reverse proxy, CDN or gateway instead, which is usually faster than the middleware. Do not compress images or other already-compressed files.</li>
<li><b>Pagination:</b> never return an unbounded list. Clamp the page size on the server (a client asking for <code>pageSize=100000</code> is both a performance and a denial-of-service problem). <b>Offset paging</b> (<code>Skip</code>/<code>Take</code>) is simple, but gets slower on deep pages and can show duplicates or gaps while data changes (see the puzzle). <b>Keyset paging</b> ("after id X") stays fast and stable; it needs a unique, indexed sort key.</li>
<li><b>EF Core and SQL (Days 6 and 18):</b> fix N+1 with <code>Include</code>, projection (<code>Select</code> to a DTO) or split queries; <code>AsNoTracking</code> for read-only queries; select only the columns you need; make sure filter and sort columns are indexed; avoid loading entities to update one column (<code>ExecuteUpdate</code>); look at the generated SQL and the execution plan before guessing.</li>
<li><b>HTTP/2 and HTTP/3:</b> HTTP/2 multiplexes many requests on one connection and compresses headers; HTTP/3 runs over QUIC and copes better with lossy mobile networks. Kestrel supports both (HTTP/3 needs the msquic library: built into Windows 11 and Windows Server 2022, libmsquic on Linux, not supported on macOS), and many teams switch them on at the CDN or gateway. They help chatty clients; they do not fix a slow query.</li>
</ul>
<p><b>When to use / when not:</b> cache <b>read-heavy, slow-to-compute, same-for-everyone</b> data with a clear expiry; do not cache per-user or sensitive responses in a shared cache. Compress text (JSON, HTML) responses over a certain size; skip tiny ones. Use offset paging for small admin lists and keyset paging for feeds and big tables. Do not add a cache to hide a missing index; fix the query first, then cache.</p>`,
        hi: `<p><b>Analogy:</b> kirana shop से पचास बार एक घंटे में पूछा जाता है "1 kg चीनी है?" तो वो counter पर packed bag तैयार रखता है (<b>cache</b>), bulk orders compact डिब्बे में भेजता है (<b>compression</b>), और दस items माँगने पर पूरे godown की list नहीं पकड़ाता (<b>pagination</b>)।</p>
<ul>
<li><b>Caching (Day 13):</b> in-memory, <code>HybridCache</code> और distributed caches data store करते हैं; <b>output caching</b> (<code>AddOutputCache</code>, <code>UseOutputCache</code>, <code>.CacheOutput()</code>) पूरे responses store करती है। Default में यह GET या HEAD के सिर्फ़ 200 responses cache करती है, cookies set करने वाले responses छोड़ देती है और <b>authenticated</b> requests छोड़ देती है, जिससे एक user का page दूसरे को serve होने से बचता है। <code>UseOutputCache</code> को authentication, authorization और CORS के बाद लगाओ। इसका default store memory में है, इसलिए हर server का अपना cache; shared के लिए Redis। Data बदलने पर tags से evict करो।</li>
<li><b>Response compression:</b> <code>AddResponseCompression</code> और <code>UseResponseCompression</code> Brotli और Gzip जोड़ते हैं। HTTPS के लिए यह default से off है (<code>EnableForHttps</code>) क्योंकि secrets वाले dynamic pages compress करने से CRIME और BREACH जैसे attacks का खतरा हो सकता है; antiforgery tokens एक mitigation हैं। बहुत सी teams reverse proxy, CDN या gateway पर compress करती हैं, जो आमतौर पर middleware से तेज़ होता है। Images या पहले से compressed files compress मत करो।</li>
<li><b>Pagination:</b> unbounded list कभी मत लौटाओ। Server पर page size clamp करो (client का <code>pageSize=100000</code> माँगना performance और denial-of-service दोनों की समस्या है)। <b>Offset paging</b> (<code>Skip</code>/<code>Take</code>) simple है, पर deep pages पर slow होती है और data बदलते समय duplicates या gaps दिखा सकती है (puzzle देखो)। <b>Keyset paging</b> ("id X के बाद") तेज़ और stable रहती है; उसे unique, indexed sort key चाहिए।</li>
<li><b>EF Core और SQL (Days 6 और 18):</b> N+1 को <code>Include</code>, projection (DTO में <code>Select</code>) या split queries से fix करो; read-only queries के लिए <code>AsNoTracking</code>; सिर्फ़ ज़रूरी columns select करो; filter और sort columns indexed हों; एक column update करने के लिए entities load मत करो (<code>ExecuteUpdate</code>); अंदाज़ा लगाने से पहले generated SQL और execution plan देखो।</li>
<li><b>HTTP/2 और HTTP/3:</b> HTTP/2 एक connection पर कई requests multiplex करता है और headers compress करता है; HTTP/3 QUIC पर चलता है और lossy mobile networks में बेहतर संभलता है। Kestrel दोनों support करता है (HTTP/3 को msquic library चाहिए: Windows 11 और Windows Server 2022 में built-in, Linux पर libmsquic, macOS पर supported नहीं), और बहुत सी teams इन्हें CDN या gateway पर on करती हैं। ये chatty clients की मदद करते हैं; slow query को fix नहीं करते।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> <b>read-heavy, compute में slow, सबके लिए same</b> data को clear expiry के साथ cache करो; per-user या sensitive responses को shared cache में मत डालो। एक size से बड़े text (JSON, HTML) responses compress करो; छोटे छोड़ दो। छोटी admin lists के लिए offset paging और feeds तथा big tables के लिए keyset paging। Missing index छुपाने के लिए cache मत लगाओ; पहले query fix करो, फिर cache।</p>`,
        hg: `<p><b>Analogy:</b> kirana shop se ghante mein pachaas baar poocha jaata hai "1 kg cheeni hai?" to woh counter par packed bag taiyaar rakhta hai (<b>cache</b>), bulk orders compact dibbe mein bhejta hai (<b>compression</b>), aur das items maangne par poore godown ki list nahi pakdata (<b>pagination</b>).</p>
<ul>
<li><b>Caching (Day 13):</b> in-memory, <code>HybridCache</code> aur distributed caches data store karte hain; <b>output caching</b> (<code>AddOutputCache</code>, <code>UseOutputCache</code>, <code>.CacheOutput()</code>) poore responses store karti hai. Default mein yeh GET ya HEAD ke sirf 200 responses cache karti hai, cookies set karne wale responses chhod deti hai aur <b>authenticated</b> requests chhod deti hai, jisse ek user ka page doosre ko serve hone se bachta hai. <code>UseOutputCache</code> ko authentication, authorization aur CORS ke baad lagao. Iska default store memory mein hai, isliye har server ka apna cache; shared ke liye Redis. Data badalne par tags se evict karo.</li>
<li><b>Response compression:</b> <code>AddResponseCompression</code> aur <code>UseResponseCompression</code> Brotli aur Gzip jodte hain. HTTPS ke liye yeh default se off hai (<code>EnableForHttps</code>) kyunki secrets wale dynamic pages compress karne se CRIME aur BREACH jaise attacks ka khatra ho sakta hai; antiforgery tokens ek mitigation hain. Bahut si teams reverse proxy, CDN ya gateway par compress karti hain, jo aamtaur par middleware se tez hota hai. Images ya pehle se compressed files compress mat karo.</li>
<li><b>Pagination:</b> unbounded list kabhi mat lautao. Server par page size clamp karo (client ka <code>pageSize=100000</code> maangna performance aur denial-of-service dono ki samasya hai). <b>Offset paging</b> (<code>Skip</code>/<code>Take</code>) simple hai, par deep pages par slow hoti hai aur data badalte samay duplicates ya gaps dikha sakti hai (puzzle dekho). <b>Keyset paging</b> ("id X ke baad") tez aur stable rehti hai; usse unique, indexed sort key chahiye.</li>
<li><b>EF Core aur SQL (Days 6 aur 18):</b> N+1 ko <code>Include</code>, projection (DTO mein <code>Select</code>) ya split queries se fix karo; read-only queries ke liye <code>AsNoTracking</code>; sirf zaroori columns select karo; filter aur sort columns indexed hon; ek column update karne ke liye entities load mat karo (<code>ExecuteUpdate</code>); andaza lagane se pehle generated SQL aur execution plan dekho.</li>
<li><b>HTTP/2 aur HTTP/3:</b> HTTP/2 ek connection par kai requests multiplex karta hai aur headers compress karta hai; HTTP/3 QUIC par chalta hai aur lossy mobile networks mein behtar sambhalta hai. Kestrel dono support karta hai (HTTP/3 ko msquic library chahiye: Windows 11 aur Windows Server 2022 mein built-in, Linux par libmsquic, macOS par supported nahi), aur bahut si teams inhein CDN ya gateway par on karti hain. Ye chatty clients ki madad karte hain; slow query ko fix nahi karte.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> <b>read-heavy, compute mein slow, sabke liye same</b> data ko clear expiry ke saath cache karo; per-user ya sensitive responses ko shared cache mein mat daalo. Ek size se bade text (JSON, HTML) responses compress karo; chhote chhod do. Chhoti admin lists ke liye offset paging aur feeds tatha big tables ke liye keyset paging. Missing index chhupane ke liye cache mat lagao; pehle query fix karo, phir cache.</p>`
      },
      code: [
        {
          caption: {
            en: "Output caching with a tag, response compression and keyset pagination with a clamped page size (compile-checked; UseOutputCache comes after authentication and authorization)",
            hi: "Tag वाली output caching, response compression और clamp किए page size के साथ keyset pagination (compile-checked; UseOutputCache authentication और authorization के बाद आता है)",
            hg: "Tag wali output caching, response compression aur clamp kiye page size ke saath keyset pagination (compile-checked; UseOutputCache authentication aur authorization ke baad aata hai)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAuthentication("cookie").AddCookie("cookie");
builder.Services.AddAuthorization();
builder.Services.AddResponseCompression();                       // Brotli and Gzip; HTTPS compression stays off unless you opt in
builder.Services.AddOutputCache(o => o.AddPolicy("Products", p => p.Expire(TimeSpan.FromSeconds(30)).Tag("products")));

var app = builder.Build();
app.UseResponseCompression();
app.UseAuthentication();
app.UseAuthorization();
app.UseOutputCache();                                            // after authentication and authorization

var products = Enumerable.Range(1, 500).Select(i => new Product(i, "Item " + i)).ToList();

// Keyset paging: "give me the next page after this id"; the page size is clamped on the server
app.MapGet("/products", (int? afterId, int pageSize = 20) =>
{
    pageSize = Math.Clamp(pageSize, 1, 100);
    var page = products.Where(p => afterId is null || p.Id > afterId).OrderBy(p => p.Id).Take(pageSize).ToList();
    return new Page(page, page.Count == pageSize ? page[^1].Id : null);
}).CacheOutput("Products");

// When data changes, evict everything tagged "products"
app.MapPost("/products/evict", async (IOutputCacheStore store, CancellationToken ct) =>
{
    await store.EvictByTagAsync("products", ct);
    return Results.NoContent();
}).RequireAuthorization();

app.Run();

record Product(int Id, string Name);
record Page(List<Product> Items, int? NextAfterId);`
        }
      ]
    },
    {
      id: "perf-tl",
      depth: "detailed",
      title: {
        en: "Tech Lead angle: budgets, SLOs, load testing and profiling in production",
        hi: "Tech Lead angle: budgets, SLOs, load testing और production में profiling",
        hg: "Tech Lead angle: budgets, SLOs, load testing aur production mein profiling"
      },
      body: {
        en: `<p><b>Analogy:</b> a train timetable says "Rajdhani, Delhi to Mumbai, 16 hours". A <b>performance budget</b> is that timetable for a feature, an <b>SLO</b> is the promise "on 99 of 100 days we arrive within 16 hours", and a <b>load test</b> is a trial run on a festival-rush day before the real festival.</p>
<ul>
<li><b>Performance budget:</b> a written limit per feature, for example "p95 under 300 ms at 200 requests per second", "at most 5 database queries per request", "payload under 100 KB", "no unbounded list". Budgets give a reviewer something to say "no" with, and stop slow creep.</li>
<li><b>SLI, SLO, error budget:</b> the <b>SLI</b> is what you measure (share of requests under 300 ms, share without 5xx); the <b>SLO</b> is the target (99% over 30 days); the <b>error budget</b> is what is left (1%). When the budget is spent, the team slows feature work and fixes reliability. Averages hide pain: use <b>percentiles</b> (p95, p99).</li>
<li><b>Load testing:</b> <b>k6</b> (scripts in JavaScript, thresholds that fail the run), <b>Azure Load Testing</b> (managed service to generate load from the cloud; check the current docs for supported engines) and <b>NBomber</b> (a .NET library, scenarios in C#). Test a <b>production-like environment</b> (same instance size and database size), with realistic data and a mix of requests, and ramp up gradually. Never load-test production or third-party services without agreement.</li>
<li><b>Profiling in production, safely:</b> prefer <b>low-overhead</b> tools first: metrics and traces (OpenTelemetry, Application Insights, Day 16 and 20), <code>dotnet-counters</code> and sampling <code>dotnet-trace</code>. A <b>memory dump freezes the process</b> while it is written and contains secrets and personal data, so take it from one instance that is out of rotation, restrict who can read it, and delete it after use. Get approval, note the time, and have a rollback.</li>
</ul>
<p><b>When to use / when not:</b> budgets and SLOs are for <b>user-facing and revenue-critical</b> paths; an internal admin report can have a looser one. Run big load tests before launches and big changes, and small smoke-level checks in CI. Do not set SLOs nobody can measure, and do not chase 100%: every extra nine costs more than the one before.</p>`,
        hi: `<p><b>Analogy:</b> train timetable कहता है "Rajdhani, Delhi से Mumbai, 16 घंटे"। <b>Performance budget</b> किसी feature के लिए वही timetable है, <b>SLO</b> वादा है "100 में से 99 दिन हम 16 घंटे में पहुँचते हैं", और <b>load test</b> असली त्योहार से पहले festival-rush वाले दिन का trial run है।</p>
<ul>
<li><b>Performance budget:</b> हर feature की लिखी हुई limit, जैसे "200 requests per second पर p95 300 ms से कम", "हर request पर ज़्यादा से ज़्यादा 5 database queries", "payload 100 KB से कम", "कोई unbounded list नहीं"। Budgets reviewer को "ना" कहने की वजह देते हैं और धीरे-धीरे आने वाली slowness रोकते हैं।</li>
<li><b>SLI, SLO, error budget:</b> <b>SLI</b> वो है जो तुम measure करते हो (300 ms से कम वाली requests का हिस्सा, बिना 5xx वाला हिस्सा); <b>SLO</b> target है (30 दिन में 99%); <b>error budget</b> बचा हुआ हिस्सा है (1%)। Budget खत्म होने पर team feature काम धीमा करके reliability fix करती है। Averages दर्द छुपाते हैं: <b>percentiles</b> (p95, p99) use करो।</li>
<li><b>Load testing:</b> <b>k6</b> (JavaScript में scripts, thresholds जो run को fail करते हैं), <b>Azure Load Testing</b> (cloud से load generate करने वाली managed service; supported engines के लिए current docs देखो) और <b>NBomber</b> (.NET library, C# में scenarios)। <b>Production जैसे environment</b> पर test करो (same instance size और database size), realistic data और requests के mix के साथ, और धीरे-धीरे ramp up करो। Production या third-party services को बिना सहमति के कभी load-test मत करो।</li>
<li><b>Production में safely profiling:</b> पहले <b>low-overhead</b> tools लो: metrics और traces (OpenTelemetry, Application Insights, Day 16 और 20), <code>dotnet-counters</code> और sampling <code>dotnet-trace</code>। <b>Memory dump लिखते समय process को freeze करता है</b> और उसमें secrets और personal data होता है, इसलिए उसे ऐसे एक instance से लो जो rotation से बाहर हो, कौन पढ़ सकता है यह सीमित करो, और use के बाद delete करो। Approval लो, time note करो, और rollback तैयार रखो।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> budgets और SLOs <b>user-facing और revenue-critical</b> paths के लिए हैं; internal admin report की limit ढीली हो सकती है। बड़े load tests launches और बड़े changes से पहले चलाओ, और छोटे smoke-level checks CI में। ऐसे SLOs मत बनाओ जिन्हें कोई measure न कर सके, और 100% के पीछे मत भागो: हर extra nine पिछले से ज़्यादा महँगा है।</p>`,
        hg: `<p><b>Analogy:</b> train timetable kehta hai "Rajdhani, Delhi se Mumbai, 16 ghante". <b>Performance budget</b> kisi feature ke liye wahi timetable hai, <b>SLO</b> waada hai "100 mein se 99 din hum 16 ghante mein pahunchte hain", aur <b>load test</b> asli tyohar se pehle festival-rush wale din ka trial run hai.</p>
<ul>
<li><b>Performance budget:</b> har feature ki likhi hui limit, jaise "200 requests per second par p95 300 ms se kam", "har request par zyada se zyada 5 database queries", "payload 100 KB se kam", "koi unbounded list nahi". Budgets reviewer ko "na" kehne ki wajah dete hain aur dheere-dheere aane wali slowness rokte hain.</li>
<li><b>SLI, SLO, error budget:</b> <b>SLI</b> woh hai jo tum measure karte ho (300 ms se kam wali requests ka hissa, bina 5xx wala hissa); <b>SLO</b> target hai (30 din mein 99%); <b>error budget</b> bacha hua hissa hai (1%). Budget khatam hone par team feature kaam dheema karke reliability fix karti hai. Averages dard chhupate hain: <b>percentiles</b> (p95, p99) use karo.</li>
<li><b>Load testing:</b> <b>k6</b> (JavaScript mein scripts, thresholds jo run ko fail karte hain), <b>Azure Load Testing</b> (cloud se load generate karne wali managed service; supported engines ke liye current docs dekho) aur <b>NBomber</b> (.NET library, C# mein scenarios). <b>Production jaise environment</b> par test karo (same instance size aur database size), realistic data aur requests ke mix ke saath, aur dheere-dheere ramp up karo. Production ya third-party services ko bina sahmati ke kabhi load-test mat karo.</li>
<li><b>Production mein safely profiling:</b> pehle <b>low-overhead</b> tools lo: metrics aur traces (OpenTelemetry, Application Insights, Day 16 aur 20), <code>dotnet-counters</code> aur sampling <code>dotnet-trace</code>. <b>Memory dump likhte samay process ko freeze karta hai</b> aur usmein secrets aur personal data hota hai, isliye use aise ek instance se lo jo rotation se bahar ho, kaun padh sakta hai yeh seemit karo, aur use ke baad delete karo. Approval lo, time note karo, aur rollback taiyaar rakho.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> budgets aur SLOs <b>user-facing aur revenue-critical</b> paths ke liye hain; internal admin report ki limit dheeli ho sakti hai. Bade load tests launches aur bade changes se pehle chalao, aur chhote smoke-level checks CI mein. Aise SLOs mat banao jinhein koi measure na kar sake, aur 100% ke peeche mat bhaago: har extra nine pichhle se zyada mehenga hai.</p>`
      },
      code: [
        {
          lang: "bash",
          caption: {
            en: "The diagnostic tools on a running process (install once with dotnet tool install --global; replace PID; dumps contain secrets, handle them as sensitive)",
            hi: "चलते process पर diagnostic tools (एक बार dotnet tool install --global से install करो; PID बदलो; dumps में secrets होते हैं, sensitive की तरह संभालो)",
            hg: "Chalte process par diagnostic tools (ek baar dotnet tool install --global se install karo; PID badlo; dumps mein secrets hote hain, sensitive ki tarah sambhalo)"
          },
          check: "none",
          src: `dotnet tool install --global dotnet-counters
dotnet tool install --global dotnet-trace
dotnet tool install --global dotnet-dump

dotnet-counters monitor --process-id <PID> --counters System.Runtime     # CPU, GC, thread-pool queue length, exceptions per second
dotnet-trace collect --process-id <PID> --duration 00:00:30              # sampling trace; open the .nettrace file in Visual Studio, PerfView or Speedscope
dotnet-dump collect --process-id <PID>                                   # freezes the process while writing; contains secrets and PII
dotnet-dump analyze <dump-file>                                          # then: clrstack, threads, dumpheap -stat`
        },
        {
          lang: "javascript",
          caption: {
            en: "A k6 load test with thresholds (display-only, runs in k6 not Node): the run fails if p95 is over 300 ms or more than 1% of requests fail",
            hi: "Thresholds वाला k6 load test (सिर्फ़ दिखाने के लिए, k6 में चलता है, Node में नहीं): p95 300 ms से ऊपर या 1% से ज़्यादा requests fail हों तो run fail",
            hg: "Thresholds wala k6 load test (sirf dikhane ke liye, k6 mein chalta hai, Node mein nahi): p95 300 ms se upar ya 1% se zyada requests fail hon to run fail"
          },
          check: "none",
          src: `import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "1m", target: 50 },     // ramp up
    { duration: "3m", target: 50 },     // hold
    { duration: "30s", target: 0 },     // ramp down
  ],
  thresholds: {
    http_req_duration: ["p(95)<300"],   // budget: p95 under 300 ms
    http_req_failed: ["rate<0.01"],     // fewer than 1% errors
  },
};

export default function () {
  const res = http.get(\`\${__ENV.BASE_URL}/products?pageSize=20\`);   // BASE_URL = a production-like test environment
  check(res, { "status is 200": (r) => r.status === 200 });
  sleep(1);
}`
        }
      ]
    }
  ],
  qa: [
    {
      id: "owasp-top10-use",
      depth: "short",
      q: "What is the OWASP Top 10, and how would you use it as a Tech Lead?",
      answer: "It is a ranked awareness list of the most common web application risks. I use it as a checklist for design and code review, mapped to .NET controls, not as a complete standard.",
      meaning: {
        hi: "यह web application के सबसे common risks की ranked awareness list है। मैं इसे design और code review की checklist की तरह use करता हूँ, .NET controls से map करके, पूरे standard की तरह नहीं।",
        hg: "Yeh web application ke sabse common risks ki ranked awareness list hai. Main ise design aur code review ki checklist ki tarah use karta hoon, .NET controls se map karke, poore standard ki tarah nahi."
      },
      explain: {
        en: `<ul>
<li>The current release on owasp.org is the <b>2025</b> edition; 2021 is the previous one and interviewers may use its names. Say which edition you mean.</li>
<li>Use: map each to a control in your stack (policies, parameters, NuGet Audit, Identity, Key Vault) and to a line in the PR template.</li>
<li>Follow-up: "Which three matter most for our API?" Usually broken access control, injection and misconfiguration, then supply chain; but answer from your own system's data flow.</li>
</ul>`,
        hi: `<ul>
<li>owasp.org पर अभी की release <b>2025</b> edition है; 2021 पिछली है और interviewers उसके नाम use कर सकते हैं। बताओ कि तुम कौन-सी edition की बात कर रहे हो।</li>
<li>Use: हर एक को अपने stack के control से (policies, parameters, NuGet Audit, Identity, Key Vault) और PR template की एक line से map करो।</li>
<li>Follow-up: "हमारी API के लिए कौन-से तीन सबसे ज़रूरी?" आमतौर पर broken access control, injection और misconfiguration, फिर supply chain; पर जवाब अपने system के data flow से दो।</li>
</ul>`,
        hg: `<ul>
<li>owasp.org par abhi ki release <b>2025</b> edition hai; 2021 pichhli hai aur interviewers uske naam use kar sakte hain. Batao ki tum kaun-si edition ki baat kar rahe ho.</li>
<li>Use: har ek ko apne stack ke control se (policies, parameters, NuGet Audit, Identity, Key Vault) aur PR template ki ek line se map karo.</li>
<li>Follow-up: "Hamari API ke liye kaun-se teen sabse zaroori?" Aamtaur par broken access control, injection aur misconfiguration, phir supply chain; par jawab apne system ke data flow se do.</li>
</ul>`
      }
    },
    {
      id: "sql-injection-prevent",
      depth: "short",
      q: "How do you prevent SQL injection in a .NET application?",
      answer: "Never build SQL from user text; send values as parameters. In EF Core use LINQ or FromSql with interpolation, and give the database login least privilege.",
      meaning: {
        hi: "User text से SQL कभी मत बनाओ; values को parameters की तरह भेजो। EF Core में LINQ या interpolation वाला FromSql, और database login को least privilege दो।",
        hg: "User text se SQL kabhi mat banao; values ko parameters ki tarah bhejo. EF Core mein LINQ ya interpolation wala FromSql, aur database login ko least privilege do."
      },
      explain: {
        en: `<ul>
<li>Injection happens when input is glued into the SQL text. Parameters keep values and SQL separate, so input is only ever data (see the first puzzle).</li>
<li>ADO.NET and Dapper: parameters. EF Core: LINQ is parameterised; <code>FromSql</code> and <code>ExecuteSql</code> with an interpolated string become parameters; <code>FromSqlRaw</code> with concatenation does not (Day 6).</li>
<li>Identifiers (column, table, sort direction) cannot be parameters: map the choice to an allow-list in code.</li>
<li>Follow-up: "Is a stored procedure safe?" Only if it does not build dynamic SQL from its parameters; use <code>sp_executesql</code> with parameters inside if it must.</li>
</ul>`,
        hi: `<ul>
<li>Injection तब होता है जब input SQL text में glue हो जाए। Parameters values और SQL को अलग रखते हैं, इसलिए input सिर्फ़ data रहता है (पहला puzzle देखो)।</li>
<li>ADO.NET और Dapper: parameters। EF Core: LINQ parameterised है; interpolated string वाले <code>FromSql</code> और <code>ExecuteSql</code> parameters बनते हैं; concatenation वाला <code>FromSqlRaw</code> नहीं बनता (Day 6)।</li>
<li>Identifiers (column, table, sort direction) parameters नहीं हो सकते: choice को code में allow-list से map करो।</li>
<li>Follow-up: "क्या stored procedure safe है?" तभी जब वो अपने parameters से dynamic SQL न बनाए; बनाना ही पड़े तो अंदर parameters के साथ <code>sp_executesql</code>।</li>
</ul>`,
        hg: `<ul>
<li>Injection tab hota hai jab input SQL text mein glue ho jaye. Parameters values aur SQL ko alag rakhte hain, isliye input sirf data rehta hai (pehla puzzle dekho).</li>
<li>ADO.NET aur Dapper: parameters. EF Core: LINQ parameterised hai; interpolated string wale <code>FromSql</code> aur <code>ExecuteSql</code> parameters bante hain; concatenation wala <code>FromSqlRaw</code> nahi banta (Day 6).</li>
<li>Identifiers (column, table, sort direction) parameters nahi ho sakte: choice ko code mein allow-list se map karo.</li>
<li>Follow-up: "Kya stored procedure safe hai?" Tabhi jab woh apne parameters se dynamic SQL na banaye; banana hi pade to andar parameters ke saath <code>sp_executesql</code>.</li>
</ul>`
      }
    },
    {
      id: "xss-aspnet-core",
      depth: "short",
      q: "How does ASP.NET Core protect against XSS, and where can it still happen?",
      answer: "Razor and Blazor encode output by default. XSS returns through Html.Raw, MarkupString, string-built HTML or innerHTML, so I avoid those and add a CSP header as a second layer.",
      meaning: {
        hi: "Razor और Blazor output को default से encode करते हैं। XSS वापस आता है Html.Raw, MarkupString, string से बने HTML या innerHTML से, इसलिए इन्हें avoid करता हूँ और दूसरी layer के लिए CSP header लगाता हूँ।",
        hg: "Razor aur Blazor output ko default se encode karte hain. XSS wapas aata hai Html.Raw, MarkupString, string se bane HTML ya innerHTML se, isliye inhein avoid karta hoon aur doosri layer ke liye CSP header lagata hoon."
      },
      explain: {
        en: `<ul>
<li><code>@Model.Comment</code> in Razor is HTML-encoded; <code>&lt;script&gt;</code> shows as text. That default is your main defence.</li>
<li>Danger spots: <code>Html.Raw</code>, Blazor <code>MarkupString</code>, building HTML with string concatenation, JavaScript <code>innerHTML</code> and <code>dangerouslySetInnerHTML</code> (Days 23 and 24).</li>
<li>CSP (<code>Content-Security-Policy</code>) limits where scripts can load from, so an injected inline script is blocked. It is a second layer, not a replacement for encoding.</li>
<li>Follow-up: "Where do you store the JWT in a SPA?" Trade-offs in Day 13 and Day 24: a cookie with HttpOnly is not readable by injected script, but then you need CSRF defences.</li>
</ul>`,
        hi: `<ul>
<li>Razor में <code>@Model.Comment</code> HTML-encoded होता है; <code>&lt;script&gt;</code> text की तरह दिखता है। यह default तुम्हारी main defence है।</li>
<li>Danger spots: <code>Html.Raw</code>, Blazor <code>MarkupString</code>, string concatenation से HTML बनाना, JavaScript <code>innerHTML</code> और <code>dangerouslySetInnerHTML</code> (Days 23 और 24)।</li>
<li>CSP (<code>Content-Security-Policy</code>) सीमित करता है कि scripts कहाँ से load हो सकती हैं, इसलिए injected inline script block हो जाती है। यह दूसरी layer है, encoding की जगह नहीं।</li>
<li>Follow-up: "SPA में JWT कहाँ store करते हो?" Trade-offs Day 13 और Day 24 में हैं: HttpOnly cookie को injected script पढ़ नहीं सकती, पर तब CSRF defences चाहिए।</li>
</ul>`,
        hg: `<ul>
<li>Razor mein <code>@Model.Comment</code> HTML-encoded hota hai; <code>&lt;script&gt;</code> text ki tarah dikhta hai. Yeh default tumhari main defence hai.</li>
<li>Danger spots: <code>Html.Raw</code>, Blazor <code>MarkupString</code>, string concatenation se HTML banana, JavaScript <code>innerHTML</code> aur <code>dangerouslySetInnerHTML</code> (Days 23 aur 24).</li>
<li>CSP (<code>Content-Security-Policy</code>) seemit karta hai ki scripts kahan se load ho sakti hain, isliye injected inline script block ho jaati hai. Yeh doosri layer hai, encoding ki jagah nahi.</li>
<li>Follow-up: "SPA mein JWT kahan store karte ho?" Trade-offs Day 13 aur Day 24 mein hain: HttpOnly cookie ko injected script padh nahi sakti, par tab CSRF defences chahiye.</li>
</ul>`
      }
    },
    {
      id: "csrf-bearer-api",
      depth: "short",
      q: "What is CSRF, and does a bearer-token Web API need antiforgery protection?",
      answer: "CSRF abuses a cookie the browser sends automatically. A pure bearer-token API is much less exposed because the browser does not add the Authorization header itself, unless the token is kept in a cookie.",
      meaning: {
        hi: "CSRF उस cookie का misuse है जो browser अपने-आप भेजता है। Pure bearer-token API बहुत कम exposed है क्योंकि browser Authorization header खुद नहीं लगाता, जब तक token cookie में न रखा हो।",
        hg: "CSRF us cookie ka misuse hai jo browser apne-aap bhejta hai. Pure bearer-token API bahut kam exposed hai kyunki browser Authorization header khud nahi lagata, jab tak token cookie mein na rakha ho."
      },
      explain: {
        en: `<ul>
<li>CSRF: a malicious site makes the victim's browser send a state-changing request to your site, and the browser attaches the login cookie.</li>
<li>Cookie-authenticated apps: antiforgery tokens (automatic in Razor Pages; MVC needs <code>[AutoValidateAntiforgeryToken]</code> or <code>[ValidateAntiForgeryToken]</code>; <code>AddAntiforgery</code> and <code>UseAntiforgery</code> for minimal API forms) plus <code>SameSite</code> on the cookie, and never change state on GET.</li>
<li>Bearer-token APIs: the token comes from the <code>Authorization</code> header, which a foreign page cannot make the browser add, so classic CSRF mostly does not apply. If the same API also accepts a cookie, it applies again.</li>
<li>Follow-up: "Is CORS a CSRF defence?" No. CORS controls which origins can <b>read</b> responses; a simple cross-site form POST is still sent.</li>
</ul>`,
        hi: `<ul>
<li>CSRF: कोई malicious site victim के browser से तुम्हारी site पर state बदलने वाली request भिजवाती है, और browser login cookie लगा देता है।</li>
<li>Cookie-authenticated apps: antiforgery tokens (Razor Pages में automatic; MVC को <code>[AutoValidateAntiforgeryToken]</code> या <code>[ValidateAntiForgeryToken]</code> चाहिए; minimal API forms के लिए <code>AddAntiforgery</code> और <code>UseAntiforgery</code>) और cookie पर <code>SameSite</code>, और GET पर state कभी मत बदलो।</li>
<li>Bearer-token APIs: token <code>Authorization</code> header से आता है, जिसे कोई बाहरी page browser से नहीं लगवा सकता, इसलिए classic CSRF ज़्यादातर लागू नहीं होता। वही API cookie भी accept करे तो फिर लागू होता है।</li>
<li>Follow-up: "क्या CORS CSRF की defence है?" नहीं। CORS तय करता है कि कौन-से origins responses <b>पढ़</b> सकते हैं; simple cross-site form POST फिर भी भेजा जाता है।</li>
</ul>`,
        hg: `<ul>
<li>CSRF: koi malicious site victim ke browser se tumhari site par state badalne wali request bhijwati hai, aur browser login cookie laga deta hai.</li>
<li>Cookie-authenticated apps: antiforgery tokens (Razor Pages mein automatic; MVC ko <code>[AutoValidateAntiforgeryToken]</code> ya <code>[ValidateAntiForgeryToken]</code> chahiye; minimal API forms ke liye <code>AddAntiforgery</code> aur <code>UseAntiforgery</code>) aur cookie par <code>SameSite</code>, aur GET par state kabhi mat badlo.</li>
<li>Bearer-token APIs: token <code>Authorization</code> header se aata hai, jise koi bahari page browser se nahi lagwa sakta, isliye classic CSRF zyadatar lagu nahi hota. Wahi API cookie bhi accept kare to phir lagu hota hai.</li>
<li>Follow-up: "Kya CORS CSRF ki defence hai?" Nahi. CORS tay karta hai ki kaun-se origins responses <b>padh</b> sakte hain; simple cross-site form POST phir bhi bheja jaata hai.</li>
</ul>`
      }
    },
    {
      id: "password-storage",
      depth: "short",
      q: "How should passwords be stored in an ASP.NET Core application?",
      answer: "Use ASP.NET Core Identity, whose PasswordHasher applies PBKDF2 with a random salt. Never store plain or reversible passwords, and never use MD5, SHA1 or a plain SHA256 hash.",
      meaning: {
        hi: "ASP.NET Core Identity use करो, जिसका PasswordHasher random salt के साथ PBKDF2 लगाता है। Plain या reversible passwords कभी store मत करो, और MD5, SHA1 या plain SHA256 hash कभी नहीं।",
        hg: "ASP.NET Core Identity use karo, jiska PasswordHasher random salt ke saath PBKDF2 lagata hai. Plain ya reversible passwords kabhi store mat karo, aur MD5, SHA1 ya plain SHA256 hash kabhi nahi."
      },
      explain: {
        en: `<ul>
<li>A password hash must be <b>slow and salted</b>. MD5, SHA1 and SHA256 are fast, so attackers test billions of guesses per second on stolen hashes.</li>
<li><code>PasswordHasher&lt;TUser&gt;</code> adds a random salt per password, so equal passwords give different hashes, and its result can be <code>SuccessRehashNeeded</code> when the stored format is older (see the puzzle).</li>
<li>Around it: lockout, rate limits (Day 13), MFA for privileged users, the same error text for unknown user and wrong password, a breached-password check if possible.</li>
<li>Follow-up: "Why not just SHA256 with a salt?" It is still fast; a purpose-built slow function (PBKDF2, bcrypt, scrypt, Argon2) makes each guess expensive.</li>
</ul>`,
        hi: `<ul>
<li>Password hash <b>slow और salted</b> होना चाहिए। MD5, SHA1 और SHA256 fast हैं, इसलिए attackers चुराए हुए hashes पर हर सेकंड अरबों guesses आज़माते हैं।</li>
<li><code>PasswordHasher&lt;TUser&gt;</code> हर password के लिए random salt जोड़ता है, इसलिए equal passwords के hashes अलग होते हैं, और stored format पुराना हो तो result <code>SuccessRehashNeeded</code> हो सकता है (puzzle देखो)।</li>
<li>उसके आसपास: lockout, rate limits (Day 13), privileged users के लिए MFA, unknown user और wrong password के लिए same error text, हो सके तो breached-password check।</li>
<li>Follow-up: "सिर्फ़ salt के साथ SHA256 क्यों नहीं?" वो फिर भी fast है; purpose-built slow function (PBKDF2, bcrypt, scrypt, Argon2) हर guess को महँगा बनाता है।</li>
</ul>`,
        hg: `<ul>
<li>Password hash <b>slow aur salted</b> hona chahiye. MD5, SHA1 aur SHA256 fast hain, isliye attackers churaye hue hashes par har second arabon guesses aazmate hain.</li>
<li><code>PasswordHasher&lt;TUser&gt;</code> har password ke liye random salt jodta hai, isliye equal passwords ke hashes alag hote hain, aur stored format purana ho to result <code>SuccessRehashNeeded</code> ho sakta hai (puzzle dekho).</li>
<li>Uske aaspaas: lockout, rate limits (Day 13), privileged users ke liye MFA, unknown user aur wrong password ke liye same error text, ho sake to breached-password check.</li>
<li>Follow-up: "Sirf salt ke saath SHA256 kyon nahi?" Woh phir bhi fast hai; purpose-built slow function (PBKDF2, bcrypt, scrypt, Argon2) har guess ko mehenga banata hai.</li>
</ul>`
      }
    },
    {
      id: "idor-access-control",
      depth: "short",
      q: "A logged-in user changes /orders/101 to /orders/102 and sees another customer's order. What is this, and how do you fix it?",
      answer: "It is IDOR, a broken access control bug: ownership was never checked. I check it on every read and write, with a resource-based authorization handler or a query filtered by the caller's id.",
      meaning: {
        hi: "यह IDOR है, broken access control bug: authentication pass हुआ पर ownership कभी check नहीं हुई। मैं हर read और write पर ownership check करता हूँ, resource-based authorization handler से या caller के id से filter की हुई query से।",
        hg: "Yeh IDOR hai, broken access control bug: authentication pass hua par ownership kabhi check nahi hui. Main har read aur write par ownership check karta hoon, resource-based authorization handler se ya caller ke id se filter ki hui query se."
      },
      explain: {
        en: `<ul>
<li>Authentication says who you are; authorization says what you may touch. <code>[Authorize]</code> alone does only the first.</li>
<li>Fix options: filter by owner in the query (<code>Where(o =&gt; o.CustomerId == userId)</code>), or load the object and call <code>IAuthorizationService.AuthorizeAsync(user, order, "OrderOwner")</code> so the rule lives in one handler (see the code).</li>
<li>Take the user id from the claims, never from the URL or body. GUIDs make ids hard to guess but are not an access check.</li>
<li>Follow-up: "403 or 404?" 404 hides that the object exists, 403 is more honest for debugging; pick one policy and be consistent.</li>
</ul>`,
        hi: `<ul>
<li>Authentication बताता है कि तुम कौन हो; authorization बताता है कि तुम क्या छू सकते हो। अकेला <code>[Authorize]</code> सिर्फ़ पहला करता है।</li>
<li>Fix के options: query में owner से filter (<code>Where(o =&gt; o.CustomerId == userId)</code>), या object load करके <code>IAuthorizationService.AuthorizeAsync(user, order, "OrderOwner")</code> call, ताकि rule एक handler में रहे (code देखो)।</li>
<li>User id claims से लो, URL या body से कभी नहीं। GUIDs ids को guess करना मुश्किल बनाते हैं पर access check नहीं हैं।</li>
<li>Follow-up: "403 या 404?" 404 object का होना छुपाता है, 403 debugging के लिए ज़्यादा honest है; एक policy चुनो और consistent रहो।</li>
</ul>`,
        hg: `<ul>
<li>Authentication batata hai ki tum kaun ho; authorization batata hai ki tum kya chhoo sakte ho. Akela <code>[Authorize]</code> sirf pehla karta hai.</li>
<li>Fix ke options: query mein owner se filter (<code>Where(o =&gt; o.CustomerId == userId)</code>), ya object load karke <code>IAuthorizationService.AuthorizeAsync(user, order, "OrderOwner")</code> call, taaki rule ek handler mein rahe (code dekho).</li>
<li>User id claims se lo, URL ya body se kabhi nahi. GUIDs ids ko guess karna mushkil banate hain par access check nahi hain.</li>
<li>Follow-up: "403 ya 404?" 404 object ka hona chhupata hai, 403 debugging ke liye zyada honest hai; ek policy chuno aur consistent raho.</li>
</ul>`
      }
    },
    {
      id: "api-slow-what-do-you-do",
      depth: "short",
      q: "Users say the API is slow. What do you do first?",
      answer: "I measure before changing anything: find which endpoint, percentile and dependency is slow using traces and metrics. Then I fix the biggest cost, usually the database or a downstream call, and measure again.",
      meaning: {
        hi: "बदलने से पहले measure करता हूँ: traces और metrics से देखता हूँ कौन-सा endpoint, percentile और dependency slow है। फिर सबसे बड़ा cost fix करता हूँ, आमतौर पर database या downstream call, और फिर measure करता हूँ।",
        hg: "Badalne se pehle measure karta hoon: traces aur metrics se dekhta hoon kaun-sa endpoint, percentile aur dependency slow hai. Phir sabse bada cost fix karta hoon, aamtaur par database ya downstream call, aur phir measure karta hoon."
      },
      explain: {
        en: `<ul>
<li>Step 1, scope it: which endpoint, since when, p50 or p99, all users or one tenant? Compare with the last deployment and with your SLO.</li>
<li>Step 2, locate it: distributed traces and Application Insights or OpenTelemetry show time per dependency (Days 16 and 20). Typical culprits: N+1 queries, a missing index (Days 6 and 18), a slow third-party call, blocked threads (Day 3), huge payloads.</li>
<li>Step 4, fix one thing, re-measure, keep a regression test or a budget alert. Write down what you found.</li>
<li>Follow-up: "Would you just add caching?" Not before knowing the cause; caching can hide a missing index and adds invalidation problems.</li>
</ul>`,
        hi: `<ul>
<li>Step 1, scope करो: कौन-सा endpoint, कब से, p50 या p99, सब users या एक tenant? पिछली deployment और अपने SLO से compare करो।</li>
<li>Step 2, locate करो: distributed traces और Application Insights या OpenTelemetry हर dependency का time दिखाते हैं (Days 16 और 20)। आम गुनहगार: N+1 queries, missing index (Days 6 और 18), slow third-party call, blocked threads (Day 3), बहुत बड़े payloads।</li>
<li>Step 4, एक चीज़ fix करो, फिर measure करो, regression test या budget alert रखो। जो मिला वो लिख लो।</li>
<li>Follow-up: "क्या तुम बस caching जोड़ दोगे?" कारण जानने से पहले नहीं; caching missing index छुपा सकती है और invalidation की समस्याएँ जोड़ती है।</li>
</ul>`,
        hg: `<ul>
<li>Step 1, scope karo: kaun-sa endpoint, kab se, p50 ya p99, sab users ya ek tenant? Pichhli deployment aur apne SLO se compare karo.</li>
<li>Step 2, locate karo: distributed traces aur Application Insights ya OpenTelemetry har dependency ka time dikhate hain (Days 16 aur 20). Aam gunahgar: N+1 queries, missing index (Days 6 aur 18), slow third-party call, blocked threads (Day 3), bahut bade payloads.</li>
<li>Step 4, ek cheez fix karo, phir measure karo, regression test ya budget alert rakho. Jo mila woh likh lo.</li>
<li>Follow-up: "Kya tum bas caching jod doge?" Karan jaanne se pehle nahi; caching missing index chhupa sakti hai aur invalidation ki samasyaayein jodti hai.</li>
</ul>`
      }
    },
    {
      id: "thread-pool-starvation",
      depth: "short",
      q: "What is thread-pool starvation, how do you recognise it, and how do you fix it?",
      answer: "Threads block on I/O, for example with .Result, so queued requests wait while CPU stays low. I confirm it with thread-pool queue length in dotnet-counters, then remove the blocking and go async all the way.",
      meaning: {
        hi: "Threads I/O पर block हो जाते हैं, जैसे .Result से, इसलिए queued requests wait करती हैं और CPU कम रहता है। मैं dotnet-counters में thread-pool queue length से confirm करता हूँ, फिर blocking हटाकर async all the way करता हूँ।",
        hg: "Threads I/O par block ho jaate hain, jaise .Result se, isliye queued requests wait karti hain aur CPU kam rehta hai. Main dotnet-counters mein thread-pool queue length se confirm karta hoon, phir blocking hatakar async all the way karta hoon."
      },
      explain: {
        en: `<ul>
<li>The pool starts with a small number of threads and adds more slowly under sustained demand. If every thread waits on a blocking call, new requests queue up.</li>
<li>Symptoms: latency and timeouts climb with low CPU; <code>dotnet-counters</code> shows a growing queue length and thread count; a dump or trace shows many threads waiting.</li>
<li>Fix: async from endpoint to I/O (Day 3), pass cancellation tokens, set timeouts, use <code>IHttpClientFactory</code>. Raising minimum threads only buys time.</li>
<li>Follow-up: "Does ASP.NET Core still deadlock on .Result?" The classic SynchronizationContext deadlock is gone, but the blocked thread still hurts under load.</li>
</ul>`,
        hi: `<ul>
<li>Pool थोड़े threads से शुरू होता है और लगातार demand में धीरे-धीरे और जोड़ता है। अगर हर thread blocking call पर wait कर रहा है, तो नई requests queue में लग जाती हैं।</li>
<li>Symptoms: CPU कम रहते हुए latency और timeouts बढ़ते हैं; <code>dotnet-counters</code> में बढ़ती queue length और thread count; dump या trace में बहुत से threads wait करते दिखते हैं।</li>
<li>Fix: endpoint से I/O तक async (Day 3), cancellation tokens pass करो, timeouts लगाओ, <code>IHttpClientFactory</code> use करो। Minimum threads बढ़ाना बस समय खरीदता है।</li>
<li>Follow-up: "क्या ASP.NET Core में .Result अब भी deadlock करता है?" Classic SynchronizationContext deadlock चला गया है, पर blocked thread load में अब भी नुकसान करता है।</li>
</ul>`,
        hg: `<ul>
<li>Pool thode threads se shuru hota hai aur lagataar demand mein dheere-dheere aur jodta hai. Agar har thread blocking call par wait kar raha hai, to nayi requests queue mein lag jaati hain.</li>
<li>Symptoms: CPU kam rehte hue latency aur timeouts badhte hain; <code>dotnet-counters</code> mein badhti queue length aur thread count; dump ya trace mein bahut se threads wait karte dikhte hain.</li>
<li>Fix: endpoint se I/O tak async (Day 3), cancellation tokens pass karo, timeouts lagao, <code>IHttpClientFactory</code> use karo. Minimum threads badhana bas samay kharidta hai.</li>
<li>Follow-up: "Kya ASP.NET Core mein .Result ab bhi deadlock karta hai?" Classic SynchronizationContext deadlock chala gaya hai, par blocked thread load mein ab bhi nuksaan karta hai.</li>
</ul>`
      }
    },
    {
      id: "threat-modelling-team",
      depth: "detailed",
      q: "How do you run threat modelling in a team, and what is STRIDE?",
      answer: "I draw the data flow with trust boundaries, then walk each part through STRIDE: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. Top threats get owners, tickets and tests.",
      meaning: {
        hi: "मैं trust boundaries के साथ data flow बनाता हूँ, फिर हर हिस्से को STRIDE से देखता हूँ: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege। Top threats को owners, tickets और tests मिलते हैं।",
        hg: "Main trust boundaries ke saath data flow banata hoon, phir har hisse ko STRIDE se dekhta hoon: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. Top threats ko owners, tickets aur tests milte hain."
      },
      explain: {
        en: `<ul>
<li>Run it <b>before building</b> a feature that adds a trust boundary, personal or financial data, or a new login path. 15 to 30 minutes with a developer, a tester and whoever knows the data.</li>
<li>For each arrow and box ask the six STRIDE questions; write only realistic threats and the planned control (see the section for a .NET answer to each letter).</li>
<li>Follow-up: "How is this different from a pen test?" A threat model is design-time and cheap; a pen test checks the built system and finds what the model missed.</li>
</ul>`,
        hi: `<ul>
<li>इसे feature <b>बनाने से पहले</b> चलाओ जो trust boundary, personal या financial data, या नया login path जोड़ता हो। एक developer, एक tester और data जानने वाले के साथ 15 से 30 मिनट।</li>
<li>हर arrow और box के लिए STRIDE के छह सवाल पूछो; सिर्फ़ realistic threats और planned control लिखो (हर letter के .NET जवाब के लिए section देखो)।</li>
<li>Follow-up: "यह pen test से कैसे अलग है?" Threat model design-time पर होता है और सस्ता है; pen test बने हुए system को check करता है और वो पकड़ता है जो model से छूटा।</li>
</ul>`,
        hg: `<ul>
<li>Ise feature <b>banane se pehle</b> chalao jo trust boundary, personal ya financial data, ya naya login path jode. Ek developer, ek tester aur data jaanne wale ke saath 15 se 30 minute.</li>
<li>Har arrow aur box ke liye STRIDE ke chhe sawaal poochho; sirf realistic threats aur planned control likho (har letter ke .NET jawab ke liye section dekho).</li>
<li>Follow-up: "Yeh pen test se kaise alag hai?" Threat model design-time par hota hai aur sasta hai; pen test bane hue system ko check karta hai aur woh pakadta hai jo model se chhoota.</li>
</ul>`
      }
    },
    {
      id: "secure-code-review",
      depth: "detailed",
      q: "What do you look for in a pull request from a security point of view?",
      answer: "Authentication and ownership checks, string-built SQL, HTML or paths, new secrets, unvalidated outbound URLs, new packages, leaky errors or logs, and an abuse-case test.",
      meaning: {
        hi: "हर endpoint पर authentication और ownership checks, string से बने SQL, HTML या paths, नए secrets, unvalidated outbound URLs, नए packages, और details leak करने वाले errors या logs। मैं abuse case का test भी देखता हूँ।",
        hg: "Har endpoint par authentication aur ownership checks, string se bane SQL, HTML ya paths, naye secrets, unvalidated outbound URLs, naye packages, aur details leak karne wale errors ya logs. Main abuse case ka test bhi dekhta hoon."
      },
      explain: {
        en: `<ul>
<li>Keep the checklist short and in the PR template (the section lists the questions). Reviewers use it only if it is quick.</li>
<li>Automate what can be automated: analyzers, secret scanning, dependency audit, so humans review logic like ownership checks and design.</li>
<li>Follow-up: "A senior colleague pushes back on a security comment." Explain the attack in one sentence with a concrete example, offer the fix, and if still disputed, escalate to the agreed risk owner rather than winning an argument.</li>
</ul>`,
        hi: `<ul>
<li>Checklist छोटी रखो और PR template में (section में सवाल listed हैं)। Reviewers उसे तभी use करते हैं जब वो quick हो।</li>
<li>जो automate हो सके उसे automate करो: analyzers, secret scanning, dependency audit, ताकि इंसान ownership checks और design जैसी logic review करें।</li>
<li>Follow-up: "कोई senior colleague security comment पर push back करे।" Attack एक sentence में concrete example के साथ समझाओ, fix बताओ, और फिर भी disagreement हो तो बहस जीतने की जगह agreed risk owner तक escalate करो।</li>
</ul>`,
        hg: `<ul>
<li>Checklist chhoti rakho aur PR template mein (section mein sawaal listed hain). Reviewers use tabhi karte hain jab woh quick ho.</li>
<li>Jo automate ho sake use automate karo: analyzers, secret scanning, dependency audit, taaki insaan ownership checks aur design jaisi logic review karein.</li>
<li>Follow-up: "Koi senior colleague security comment par push back kare." Attack ek sentence mein concrete example ke saath samjhao, fix batao, aur phir bhi disagreement ho to behas jeetne ki jagah agreed risk owner tak escalate karo.</li>
</ul>`
      }
    },
    {
      id: "vulnerable-packages",
      depth: "detailed",
      q: "How do you find and handle vulnerable NuGet packages?",
      answer: "NuGet Audit warns during restore (since the .NET 8 SDK), and dotnet list package --vulnerable lists them on demand. I fail the build at an agreed severity and use Dependabot for update pull requests.",
      meaning: {
        hi: "NuGet Audit restore के दौरान warn करता है (.NET 8 SDK से), और dotnet list package --vulnerable माँगने पर list देता है। मैं agreed severity पर build fail करता हूँ और update pull requests के लिए Dependabot use करता हूँ।",
        hg: "NuGet Audit restore ke dauran warn karta hai (.NET 8 SDK se), aur dotnet list package --vulnerable maangne par list deta hai. Main agreed severity par build fail karta hoon aur update pull requests ke liye Dependabot use karta hoon."
      },
      explain: {
        en: `<ul>
<li>Warnings NU1901 to NU1904 are low, moderate, high and critical. Settings <code>NuGetAudit</code>, <code>NuGetAuditMode</code> and <code>NuGetAuditLevel</code> control it; the audit mode defaults to <b>all</b> (direct and transitive) for <code>net10.0</code> or higher, otherwise direct only.</li>
<li>Transitive vulnerability: update the package closest to your direct reference first; otherwise add a direct reference to the fixed version or use Central Package Management transitive pinning, and remove it later. <code>dotnet nuget why</code> shows the path.</li>
<li>If no fix exists: read the mitigating factors, replace the package, or suppress the one advisory with a note and a review date (<code>NuGetAuditSuppress</code>).</li>
<li>Follow-up: "What else is supply chain?" Typosquatting (check package owners), a private feed or package source mapping, pinned CI actions, and secret scanning (Day 21).</li>
</ul>`,
        hi: `<ul>
<li>Warnings NU1901 से NU1904 low, moderate, high और critical हैं। Settings <code>NuGetAudit</code>, <code>NuGetAuditMode</code> और <code>NuGetAuditLevel</code> इसे control करती हैं; audit mode <code>net10.0</code> या उससे ऊपर के लिए default में <b>all</b> (direct और transitive) है, वरना सिर्फ़ direct।</li>
<li>Transitive vulnerability: पहले अपने direct reference के सबसे पास वाला package update करो; वरना fixed version का direct reference जोड़ो या Central Package Management का transitive pinning use करो, और बाद में हटा दो। <code>dotnet nuget why</code> path दिखाता है।</li>
<li>Fix न हो तो: mitigating factors पढ़ो, package बदलो, या उस एक advisory को note और review date के साथ suppress करो (<code>NuGetAuditSuppress</code>)।</li>
<li>Follow-up: "supply chain में और क्या आता है?" Typosquatting (package owners check करो), private feed या package source mapping, pinned CI actions, और secret scanning (Day 21)।</li>
</ul>`,
        hg: `<ul>
<li>Warnings NU1901 se NU1904 low, moderate, high aur critical hain. Settings <code>NuGetAudit</code>, <code>NuGetAuditMode</code> aur <code>NuGetAuditLevel</code> ise control karti hain; audit mode <code>net10.0</code> ya usse upar ke liye default mein <b>all</b> (direct aur transitive) hai, warna sirf direct.</li>
<li>Transitive vulnerability: pehle apne direct reference ke sabse paas wala package update karo; warna fixed version ka direct reference jodo ya Central Package Management ka transitive pinning use karo, aur baad mein hata do. <code>dotnet nuget why</code> path dikhata hai.</li>
<li>Fix na ho to: mitigating factors padho, package badlo, ya us ek advisory ko note aur review date ke saath suppress karo (<code>NuGetAuditSuppress</code>).</li>
<li>Follow-up: "Supply chain mein aur kya aata hai?" Typosquatting (package owners check karo), private feed ya package source mapping, pinned CI actions, aur secret scanning (Day 21).</li>
</ul>`
      }
    },
    {
      id: "ssrf-prevent",
      depth: "detailed",
      q: "What is SSRF, and how do you stop a feature like 'import from URL' being abused?",
      answer: "SSRF makes your server fetch an attacker-chosen URL, often an internal address like the cloud metadata endpoint. I allow-list hosts after parsing the URL, require https, block private addresses after DNS resolution, and limit redirects.",
      meaning: {
        hi: "SSRF में तुम्हारा server attacker का चुना URL fetch करता है, अक्सर cloud metadata endpoint जैसा internal address। मैं URL parse करके hosts की allow-list बनाता हूँ, https माँगता हूँ, DNS resolution के बाद private addresses block करता हूँ, और redirects सीमित करता हूँ।",
        hg: "SSRF mein tumhara server attacker ka chuna URL fetch karta hai, aksar cloud metadata endpoint jaisa internal address. Main URL parse karke hosts ki allow-list banata hoon, https maangta hoon, DNS resolution ke baad private addresses block karta hoon, aur redirects seemit karta hoon."
      },
      explain: {
        en: `<ul>
<li>Typical targets: <code>169.254.169.254</code> (cloud instance metadata), <code>localhost</code> admin ports, internal APIs and databases. A leaked managed-identity token can then be used from outside.</li>
<li>Allow-list, do not deny-list; parse with <code>Uri</code> and compare <code>Scheme</code> and <code>Host</code> exactly (see the URL puzzle), not <code>StartsWith</code>.</li>
<li>Resolve the host and reject loopback, private, link-local and unique-local addresses (see the IP code); then connect to the address you checked, to avoid DNS rebinding tricks.</li>
<li>Follow-up: "Do cloud metadata protections make this safe?" They help, but treat them as a second layer; the first is not letting user input pick the target.</li>
</ul>`,
        hi: `<ul>
<li>Typical targets: <code>169.254.169.254</code> (cloud instance metadata), <code>localhost</code> admin ports, internal APIs और databases। Leak हुआ managed-identity token फिर बाहर से use हो सकता है।</li>
<li>Allow-list बनाओ, deny-list नहीं; <code>Uri</code> से parse करो और <code>Scheme</code> और <code>Host</code> exactly compare करो (URL puzzle देखो), <code>StartsWith</code> नहीं।</li>
<li>Host resolve करो और loopback, private, link-local और unique-local addresses reject करो (IP code देखो); फिर उसी address से connect करो जिसे check किया, ताकि DNS rebinding tricks से बचो।</li>
<li>Follow-up: "क्या cloud metadata protections इसे safe बना देते हैं?" मदद करते हैं, पर इन्हें दूसरी layer मानो; पहली है user input को target चुनने न देना।</li>
</ul>`,
        hg: `<ul>
<li>Typical targets: <code>169.254.169.254</code> (cloud instance metadata), <code>localhost</code> admin ports, internal APIs aur databases. Leak hua managed-identity token phir bahar se use ho sakta hai.</li>
<li>Allow-list banao, deny-list nahi; <code>Uri</code> se parse karo aur <code>Scheme</code> aur <code>Host</code> exactly compare karo (URL puzzle dekho), <code>StartsWith</code> nahi.</li>
<li>Host resolve karo aur loopback, private, link-local aur unique-local addresses reject karo (IP code dekho); phir usi address se connect karo jise check kiya, taaki DNS rebinding tricks se bacho.</li>
<li>Follow-up: "Kya cloud metadata protections ise safe bana dete hain?" Madad karte hain, par inhein doosri layer maano; pehli hai user input ko target chunne na dena.</li>
</ul>`
      }
    },
    {
      id: "data-protection-api",
      depth: "detailed",
      q: "What is the ASP.NET Core Data Protection API, and what must you configure when running several instances?",
      answer: "It encrypts and signs short-lived data such as auth cookies and antiforgery tokens. With several instances the key ring must be shared and persisted, ideally protected by Key Vault, or users get logged out.",
      meaning: {
        hi: "यह auth cookies और antiforgery tokens जैसे short-lived data को encrypt और sign करता है। कई instances में key ring shared और persisted होना चाहिए, Key Vault से protected हो तो बेहतर, वरना users logout हो जाते हैं।",
        hg: "Yeh auth cookies aur antiforgery tokens jaise short-lived data ko encrypt aur sign karta hai. Kai instances mein key ring shared aur persisted hona chahiye, Key Vault se protected ho to behtar, warna users logout ho jaate hain."
      },
      explain: {
        en: `<ul>
<li>Used internally for auth cookies, antiforgery tokens and TempData; you use <code>IDataProtector</code> for your own small payloads (reset links, state values). A <b>purpose string</b> gives a separate key per use.</li>
<li>Keys live in a key ring. By default they are stored locally; behind a load balancer or after a redeploy, other instances cannot read cookies made by one instance. Persist the ring in a shared store (blob storage, Redis, a database) and protect it with a key in Key Vault (Day 20); set an application name so apps that should share keys do.</li>
<li>Follow-up: "Users are logged out after every deployment." Classic sign of keys not persisted or not shared.</li>
</ul>`,
        hi: `<ul>
<li>Auth cookies, antiforgery tokens और TempData के लिए internally use होता है; अपने छोटे payloads (reset links, state values) के लिए तुम <code>IDataProtector</code> use करते हो। <b>Purpose string</b> हर use के लिए अलग key देती है।</li>
<li>Keys key ring में रहती हैं। Default में local store होती हैं; load balancer के पीछे या redeploy के बाद दूसरे instances एक instance की बनाई cookies नहीं पढ़ पाते। Ring को shared store (blob storage, Redis, database) में persist करो और Key Vault (Day 20) की key से protect करो; application name set करो ताकि जिन apps को keys share करनी हैं वो करें।</li>
<li>Follow-up: "हर deployment के बाद users logout हो जाते हैं।" यह keys के persist या share न होने की classic निशानी है।</li>
</ul>`,
        hg: `<ul>
<li>Auth cookies, antiforgery tokens aur TempData ke liye internally use hota hai; apne chhote payloads (reset links, state values) ke liye tum <code>IDataProtector</code> use karte ho. <b>Purpose string</b> har use ke liye alag key deti hai.</li>
<li>Keys key ring mein rehti hain. Default mein local store hoti hain; load balancer ke peeche ya redeploy ke baad doosre instances ek instance ki banayi cookies nahi padh paate. Ring ko shared store (blob storage, Redis, database) mein persist karo aur Key Vault (Day 20) ki key se protect karo; application name set karo taaki jin apps ko keys share karni hain woh karein.</li>
<li>Follow-up: "Har deployment ke baad users logout ho jaate hain." Yeh keys ke persist ya share na hone ki classic nishani hai.</li>
</ul>`
      }
    },
    {
      id: "csp-headers-cors",
      depth: "detailed",
      q: "What security headers do you add to an ASP.NET Core app, and how do CSP and CORS differ?",
      answer: "HSTS, X-Content-Type-Options, a Content-Security-Policy, and a referrer policy as a start. CSP restricts what the page may load or run; CORS only controls which other origins may read this API's responses.",
      meaning: {
        hi: "शुरुआत के लिए HSTS, X-Content-Type-Options, Content-Security-Policy और referrer policy। CSP तय करता है कि page क्या load या run कर सकता है; CORS सिर्फ़ यह तय करता है कि दूसरे origins इस API के responses पढ़ सकते हैं या नहीं।",
        hg: "Shuruaat ke liye HSTS, X-Content-Type-Options, Content-Security-Policy aur referrer policy. CSP tay karta hai ki page kya load ya run kar sakta hai; CORS sirf yeh tay karta hai ki doosre origins is API ke responses padh sakte hain ya nahi."
      },
      explain: {
        en: `<ul>
<li><b>HSTS</b> (<code>UseHsts</code>; the template enables it only outside Development, and it excludes localhost): browsers use HTTPS only for your host for a period. <code>X-Content-Type-Options: nosniff</code> stops MIME sniffing. <code>Referrer-Policy</code> limits what URLs leak. <code>frame-ancestors</code> in CSP (or <code>X-Frame-Options</code>) stops clickjacking.</li>
<li><b>CSP</b> is a response header the browser enforces on the <b>page</b>: allowed script, style, image and connect sources. Start with a report-only policy to see what breaks, then enforce; inline scripts need nonces or hashes.</li>
<li><b>CORS</b> is a browser rule about <b>cross-origin reads</b> of responses; the server opts in with headers. It does not authenticate anyone and does not stop a request from being sent (Day 13).</li>
<li>Follow-up: "Is <code>AllowAnyOrigin</code> with credentials allowed?" Browsers reject the wildcard with credentials; list explicit origins instead.</li>
</ul>`,
        hi: `<ul>
<li><b>HSTS</b> (<code>UseHsts</code>; template इसे सिर्फ़ Development के बाहर enable करता है, localhost भी exclude है): browsers कुछ समय तक तुम्हारे host के लिए सिर्फ़ HTTPS use करते हैं। <code>X-Content-Type-Options: nosniff</code> MIME sniffing रोकता है। <code>Referrer-Policy</code> सीमित करती है कि कौन-से URLs leak हों। CSP का <code>frame-ancestors</code> (या <code>X-Frame-Options</code>) clickjacking रोकता है।</li>
<li><b>CSP</b> ऐसा response header है जिसे browser <b>page</b> पर enforce करता है: allowed script, style, image और connect sources। पहले report-only policy से देखो क्या टूटता है, फिर enforce करो; inline scripts को nonces या hashes चाहिए।</li>
<li><b>CORS</b> responses के <b>cross-origin reads</b> पर browser का नियम है; server headers से opt-in करता है। यह किसी को authenticate नहीं करता और request को भेजे जाने से नहीं रोकता (Day 13)।</li>
<li>Follow-up: "क्या credentials के साथ <code>AllowAnyOrigin</code> allowed है?" Browsers credentials के साथ wildcard reject करते हैं; explicit origins list करो।</li>
</ul>`,
        hg: `<ul>
<li><b>HSTS</b> (<code>UseHsts</code>; template ise sirf Development ke bahar enable karta hai, localhost bhi exclude hai): browsers kuch samay tak tumhare host ke liye sirf HTTPS use karte hain. <code>X-Content-Type-Options: nosniff</code> MIME sniffing rokta hai. <code>Referrer-Policy</code> seemit karti hai ki kaun-se URLs leak hon. CSP ka <code>frame-ancestors</code> (ya <code>X-Frame-Options</code>) clickjacking rokta hai.</li>
<li><b>CSP</b> aisa response header hai jise browser <b>page</b> par enforce karta hai: allowed script, style, image aur connect sources. Pehle report-only policy se dekho kya tootta hai, phir enforce karo; inline scripts ko nonces ya hashes chahiye.</li>
<li><b>CORS</b> responses ke <b>cross-origin reads</b> par browser ka niyam hai; server headers se opt-in karta hai. Yeh kisi ko authenticate nahi karta aur request ko bheje jaane se nahi rokta (Day 13).</li>
<li>Follow-up: "Kya credentials ke saath <code>AllowAnyOrigin</code> allowed hai?" Browsers credentials ke saath wildcard reject karte hain; explicit origins list karo.</li>
</ul>`
      }
    },
    {
      id: "secrets-and-logging",
      depth: "detailed",
      q: "How do you keep secrets and personal data out of code and logs?",
      answer: "Secrets live in Key Vault with managed identity, user-secrets locally, and secret scanning in CI. For logs I record ids and reasons, use structured logging, and review log statements like code.",
      meaning: {
        hi: "Secrets Key Vault में managed identity के साथ रहते हैं, local में user-secrets, और CI में secret scanning। Logs में मैं ids और reasons रखता हूँ, structured logging use करता हूँ, और log statements का code की तरह review करता हूँ।",
        hg: "Secrets Key Vault mein managed identity ke saath rehte hain, local mein user-secrets, aur CI mein secret scanning. Logs mein main ids aur reasons rakhta hoon, structured logging use karta hoon, aur log statements ka code ki tarah review karta hoon."
      },
      explain: {
        en: `<ul>
<li>Secrets: not in git or <code>appsettings.json</code>; Key Vault plus managed identity in Azure (Day 20), user-secrets for local development (Day 12), secret scanning on push (Day 21). If one leaks, <b>rotate first</b>, clean history second.</li>
<li>Logs: log security events and ids; never passwords, tokens, full card numbers or free-text personal data. Prefer allow-listed fields over logging whole request or response bodies.</li>
<li>Structured logging (<code>{UserId}</code> placeholders) keeps user text as a value, which avoids log-forging with injected newlines.</li>
<li>Follow-up: "A password appeared in a log yesterday." Rotate or force reset for affected users if needed, purge or redact the log store per policy, fix the statement, add a test or analyzer, and write it up blamelessly.</li>
</ul>`,
        hi: `<ul>
<li>Secrets: git या <code>appsettings.json</code> में नहीं; Azure में Key Vault और managed identity (Day 20), local development के लिए user-secrets (Day 12), push पर secret scanning (Day 21)। एक leak हो तो <b>पहले rotate करो</b>, history साफ़ करना बाद में।</li>
<li>Logs: security events और ids log करो; passwords, tokens, full card numbers या free-text personal data कभी नहीं। पूरे request या response bodies log करने की जगह allow-listed fields prefer करो।</li>
<li>Structured logging (<code>{UserId}</code> placeholders) user text को value बनाए रखती है, जिससे injected newlines से log-forging नहीं होती।</li>
<li>Follow-up: "कल एक password log में दिखा।" ज़रूरत हो तो affected users के लिए rotate या force reset, policy के हिसाब से log store purge या redact, statement fix, test या analyzer जोड़ो, और blameless write-up।</li>
</ul>`,
        hg: `<ul>
<li>Secrets: git ya <code>appsettings.json</code> mein nahi; Azure mein Key Vault aur managed identity (Day 20), local development ke liye user-secrets (Day 12), push par secret scanning (Day 21). Ek leak ho to <b>pehle rotate karo</b>, history saaf karna baad mein.</li>
<li>Logs: security events aur ids log karo; passwords, tokens, full card numbers ya free-text personal data kabhi nahi. Poore request ya response bodies log karne ki jagah allow-listed fields prefer karo.</li>
<li>Structured logging (<code>{UserId}</code> placeholders) user text ko value banaye rakhti hai, jisse injected newlines se log-forging nahi hoti.</li>
<li>Follow-up: "Kal ek password log mein dikha." Zaroorat ho to affected users ke liye rotate ya force reset, policy ke hisaab se log store purge ya redact, statement fix, test ya analyzer jodo, aur blameless write-up.</li>
</ul>`
      }
    },
    {
      id: "benchmarkdotnet-pitfalls",
      depth: "detailed",
      q: "How do you benchmark C# code properly, and what are the common mistakes?",
      answer: "Use BenchmarkDotNet in Release with MemoryDiagnoser, on realistic data, and compare variants on the same machine. A Stopwatch loop misleads through JIT warm-up, dead-code elimination and noise.",
      meaning: {
        hi: "BenchmarkDotNet को Release में MemoryDiagnoser के साथ, realistic data पर use करो, और variants को एक ही machine पर compare करो। Stopwatch loop JIT warm-up, dead-code elimination और noise की वजह से गुमराह करता है।",
        hg: "BenchmarkDotNet ko Release mein MemoryDiagnoser ke saath, realistic data par use karo, aur variants ko ek hi machine par compare karo. Stopwatch loop JIT warm-up, dead-code elimination aur noise ki wajah se gumraah karta hai."
      },
      explain: {
        en: `<ul>
<li>BenchmarkDotNet handles warm-up, many iterations, statistics and process isolation. Run with <code>dotnet run -c Release</code> without a debugger.</li>
<li>Common mistakes: Debug build; tiny or unrealistic data; benchmarking something the profile did not point to; returning nothing so the JIT removes the work (return the result); comparing numbers from different machines; reading a 3% difference as meaningful when the error is larger.</li>
<li>Follow-up: "Would you add benchmarks to CI?" For a few critical libraries, tracked over time and not as hard pass/fail on shared agents, because CI machines are noisy.</li>
</ul>`,
        hi: `<ul>
<li>BenchmarkDotNet warm-up, कई iterations, statistics और process isolation संभालता है। <code>dotnet run -c Release</code> से, debugger के बिना चलाओ।</li>
<li>आम गलतियाँ: Debug build; छोटा या unrealistic data; ऐसी चीज़ benchmark करना जिसकी तरफ़ profile ने इशारा नहीं किया; कुछ return न करना ताकि JIT काम हटा दे (result return करो); अलग machines के numbers compare करना; 3% के फ़र्क को meaningful मानना जब error उससे बड़ा हो।</li>
<li>Follow-up: "क्या CI में benchmarks जोड़ोगे?" कुछ critical libraries के लिए, समय के साथ track करके और shared agents पर hard pass/fail की तरह नहीं, क्योंकि CI machines noisy होती हैं।</li>
</ul>`,
        hg: `<ul>
<li>BenchmarkDotNet warm-up, kai iterations, statistics aur process isolation sambhalta hai. <code>dotnet run -c Release</code> se, debugger ke bina chalao.</li>
<li>Aam galtiyaan: Debug build; chhota ya unrealistic data; aisi cheez benchmark karna jiski taraf profile ne ishara nahi kiya; kuch return na karna taaki JIT kaam hata de (result return karo); alag machines ke numbers compare karna; 3% ke farq ko meaningful maanna jab error usse bada ho.</li>
<li>Follow-up: "Kya CI mein benchmarks jodoge?" Kuch critical libraries ke liye, samay ke saath track karke aur shared agents par hard pass/fail ki tarah nahi, kyunki CI machines noisy hoti hain.</li>
</ul>`
      }
    },
    {
      id: "allocations-span-pool",
      depth: "detailed",
      q: "When are Span, ArrayPool and StringBuilder worth using, and when are they over-engineering?",
      answer: "They pay off in proven hot paths such as parsers and serializers, where profiling shows allocation or GC cost. In ordinary business code they make the code harder to read for little gain.",
      meaning: {
        hi: "ये proven hot paths में फ़ायदा देते हैं, जैसे parsers और serializers, जहाँ profiling allocation या GC cost दिखाती है। साधारण business code में ये थोड़े फ़ायदे के लिए code को पढ़ने में मुश्किल बनाते हैं।",
        hg: "Ye proven hot paths mein faayda dete hain, jaise parsers aur serializers, jahan profiling allocation ya GC cost dikhati hai. Saadharan business code mein ye thode faayde ke liye code ko padhne mein mushkil banate hain."
      },
      explain: {
        en: `<ul>
<li><code>Span&lt;T&gt;</code> and <code>ReadOnlySpan&lt;char&gt;</code> slice memory without copying; they are <code>ref struct</code>s, so they cannot live on the heap or across <code>await</code> (Day 3).</li>
<li><code>ArrayPool&lt;T&gt;.Shared.Rent(n)</code> may return a <b>longer</b> array with <b>old contents</b>: use only the length you asked for, clear it if it held secrets, and always <code>Return</code> in a <code>finally</code>.</li>
<li>Follow-up: "How would you prove it was worth it?" A benchmark with MemoryDiagnoser before and after, plus the production allocation rate or GC counters.</li>
</ul>`,
        hi: `<ul>
<li><code>Span&lt;T&gt;</code> और <code>ReadOnlySpan&lt;char&gt;</code> बिना copy किए memory slice करते हैं; ये <code>ref struct</code> हैं, इसलिए heap पर या <code>await</code> के बाद तक नहीं रह सकते (Day 3)।</li>
<li><code>ArrayPool&lt;T&gt;.Shared.Rent(n)</code> <b>लंबा</b> array <b>पुराने contents</b> के साथ लौटा सकता है: सिर्फ़ उतनी length use करो जितनी माँगी, secrets रखे हों तो clear करो, और <code>finally</code> में हमेशा <code>Return</code> करो।</li>
<li>Follow-up: "कैसे साबित करोगे कि worth था?" पहले और बाद में MemoryDiagnoser वाला benchmark, और production allocation rate या GC counters।</li>
</ul>`,
        hg: `<ul>
<li><code>Span&lt;T&gt;</code> aur <code>ReadOnlySpan&lt;char&gt;</code> bina copy kiye memory slice karte hain; ye <code>ref struct</code> hain, isliye heap par ya <code>await</code> ke baad tak nahi reh sakte (Day 3).</li>
<li><code>ArrayPool&lt;T&gt;.Shared.Rent(n)</code> <b>lamba</b> array <b>purane contents</b> ke saath laut sakta hai: sirf utni length use karo jitni maangi, secrets rakhe hon to clear karo, aur <code>finally</code> mein hamesha <code>Return</code> karo.</li>
<li>Follow-up: "Kaise saabit karoge ki worth tha?" Pehle aur baad mein MemoryDiagnoser wala benchmark, aur production allocation rate ya GC counters.</li>
</ul>`
      }
    },
    {
      id: "cache-compress-output",
      depth: "detailed",
      q: "How do output caching and response compression differ, and what are the risks of each?",
      answer: "Output caching stores whole responses to skip work; compression shrinks bytes on the wire. Cache risks are serving stale or another user's data; compression over HTTPS needs care because of BREACH-style attacks.",
      meaning: {
        hi: "Output caching पूरे responses store करके काम बचाती है; compression wire पर bytes छोटे करती है। Cache के risks stale या दूसरे user का data serve होना है; HTTPS पर compression में BREACH जैसे attacks की वजह से सावधानी चाहिए।",
        hg: "Output caching poore responses store karke kaam bachati hai; compression wire par bytes chhote karti hai. Cache ke risks stale ya doosre user ka data serve hona hai; HTTPS par compression mein BREACH jaise attacks ki wajah se saavdhani chahiye."
      },
      explain: {
        en: `<ul>
<li>ASP.NET Core output caching (Day 13): by default only 200 responses to GET or HEAD, not responses that set cookies and not authenticated requests; keep <code>UseOutputCache</code> after authentication, authorization and CORS; use tags to evict; the default store is per server memory (use Redis to share).</li>
<li>Response compression: Brotli and Gzip; <code>EnableForHttps</code> is off by default because compressing dynamic pages with secrets can enable CRIME and BREACH attacks, and antiforgery tokens are one mitigation. Many teams compress at the proxy or CDN.</li>
<li>Follow-up: "Where does <code>HybridCache</code> fit?" It caches <b>data</b> inside the app (with stampede protection, Day 13); output caching caches the <b>HTTP response</b>.</li>
</ul>`,
        hi: `<ul>
<li>ASP.NET Core output caching (Day 13): default में सिर्फ़ GET या HEAD के 200 responses, cookies set करने वाले responses नहीं और authenticated requests नहीं; <code>UseOutputCache</code> को authentication, authorization और CORS के बाद रखो; evict करने के लिए tags; default store per-server memory है (share करने के लिए Redis)।</li>
<li>Response compression: Brotli और Gzip; <code>EnableForHttps</code> default से off है क्योंकि secrets वाले dynamic pages compress करने से CRIME और BREACH attacks संभव हो सकते हैं, और antiforgery tokens एक mitigation हैं। बहुत सी teams proxy या CDN पर compress करती हैं।</li>
<li>Follow-up: "<code>HybridCache</code> कहाँ आता है?" यह app के अंदर <b>data</b> cache करता है (stampede protection के साथ, Day 13); output caching <b>HTTP response</b> cache करती है।</li>
</ul>`,
        hg: `<ul>
<li>ASP.NET Core output caching (Day 13): default mein sirf GET ya HEAD ke 200 responses, cookies set karne wale responses nahi aur authenticated requests nahi; <code>UseOutputCache</code> ko authentication, authorization aur CORS ke baad rakho; evict karne ke liye tags; default store per-server memory hai (share karne ke liye Redis).</li>
<li>Response compression: Brotli aur Gzip; <code>EnableForHttps</code> default se off hai kyunki secrets wale dynamic pages compress karne se CRIME aur BREACH attacks sambhav ho sakte hain, aur antiforgery tokens ek mitigation hain. Bahut si teams proxy ya CDN par compress karti hain.</li>
<li>Follow-up: "<code>HybridCache</code> kahan aata hai?" Yeh app ke andar <b>data</b> cache karta hai (stampede protection ke saath, Day 13); output caching <b>HTTP response</b> cache karti hai.</li>
</ul>`
      }
    },
    {
      id: "pagination-design",
      depth: "detailed",
      q: "Offset pagination or keyset pagination for a large list API, and why?",
      answer: "Keyset for large or changing lists: it stays fast and avoids duplicates and gaps, but needs a unique indexed sort key and no random page jumps. Offset is fine for small, static admin lists.",
      meaning: {
        hi: "बड़ी या बदलती lists के लिए keyset: यह तेज़ रहता है और duplicates और gaps से बचाता है, पर unique indexed sort key चाहिए और random page jump नहीं। छोटी, static admin lists के लिए offset ठीक है।",
        hg: "Badi ya badalti lists ke liye keyset: yeh tez rehta hai aur duplicates aur gaps se bachata hai, par unique indexed sort key chahiye aur random page jump nahi. Chhoti, static admin lists ke liye offset theek hai."
      },
      explain: {
        en: `<ul>
<li>Offset (<code>Skip(n).Take(m)</code>): simple and allows "go to page 17", but the database still walks past the skipped rows, and inserts or deletes between requests cause duplicates or gaps (see the puzzle).</li>
<li>Keyset (<code>Where(Id &lt; lastId).OrderByDescending(Id).Take(m)</code>): seeks an index; stable under changes. Return a cursor (the last key) in the response. Needs a unique, indexed sort key (add the primary key as a tie-breaker when sorting by a non-unique column).</li>
<li>Follow-up: "The UI needs page numbers and sorting by any column." Offset with a cap on depth, or a search engine; be explicit that deep paging is expensive.</li>
</ul>`,
        hi: `<ul>
<li>Offset (<code>Skip(n).Take(m)</code>): simple है और "page 17 पर जाओ" allow करता है, पर database फिर भी skip की गई rows के ऊपर से गुज़रता है, और requests के बीच insert या delete से duplicates या gaps आते हैं (puzzle देखो)।</li>
<li>Keyset (<code>Where(Id &lt; lastId).OrderByDescending(Id).Take(m)</code>): index पर seek करता है; changes में stable। Response में cursor (आख़िरी key) लौटाओ। Unique, indexed sort key चाहिए (non-unique column से sort करते समय tie-breaker के रूप में primary key जोड़ो)।</li>
<li>Follow-up: "UI को page numbers और किसी भी column से sorting चाहिए।" Depth पर cap के साथ offset, या search engine; साफ़ बताओ कि deep paging महँगी है।</li>
</ul>`,
        hg: `<ul>
<li>Offset (<code>Skip(n).Take(m)</code>): simple hai aur "page 17 par jao" allow karta hai, par database phir bhi skip ki gayi rows ke upar se guzarta hai, aur requests ke beech insert ya delete se duplicates ya gaps aate hain (puzzle dekho).</li>
<li>Keyset (<code>Where(Id &lt; lastId).OrderByDescending(Id).Take(m)</code>): index par seek karta hai; changes mein stable. Response mein cursor (aakhri key) lautao. Unique, indexed sort key chahiye (non-unique column se sort karte samay tie-breaker ke roop mein primary key jodo).</li>
<li>Follow-up: "UI ko page numbers aur kisi bhi column se sorting chahiye." Depth par cap ke saath offset, ya search engine; saaf batao ki deep paging mehengi hai.</li>
</ul>`
      }
    },
    {
      id: "profile-production-safely",
      depth: "detailed",
      q: "How do you investigate a performance problem in production without making it worse?",
      answer: "I start with low-overhead metrics and traces, then use dotnet-counters and a sampling dotnet-trace. Memory dumps pause the process and contain secrets, so I take them from one instance out of rotation, with approval.",
      meaning: {
        hi: "मैं low-overhead metrics और traces से शुरू करता हूँ, फिर dotnet-counters और sampling dotnet-trace। Memory dumps process को pause करते हैं और उनमें secrets होते हैं, इसलिए approval के साथ rotation से बाहर एक instance से लेता हूँ।",
        hg: "Main low-overhead metrics aur traces se shuru karta hoon, phir dotnet-counters aur sampling dotnet-trace. Memory dumps process ko pause karte hain aur unmein secrets hote hain, isliye approval ke saath rotation se bahar ek instance se leta hoon."
      },
      explain: {
        en: `<ul>
<li>Order of intrusiveness: dashboards and traces (OpenTelemetry, Application Insights, Days 16 and 20); <code>dotnet-counters</code> (cheap); sampling <code>dotnet-trace</code> for a short window; a live profiler if your platform offers one; a memory dump last.</li>
<li>A dump freezes the process while it writes and holds everything in memory: tokens, connection strings, personal data. Treat it as sensitive: restricted storage, short retention, never attach to a ticket.</li>
<li>Follow-up: "Production only is slow, staging is fine." Look at data size, indexes and statistics, cache state, noisy neighbours, connection limits and feature flags before blaming code.</li>
</ul>`,
        hi: `<ul>
<li>Intrusiveness का order: dashboards और traces (OpenTelemetry, Application Insights, Days 16 और 20); <code>dotnet-counters</code> (सस्ता); छोटी window के लिए sampling <code>dotnet-trace</code>; तुम्हारा platform दे तो live profiler; memory dump आख़िर में।</li>
<li>Dump लिखते समय process को freeze करता है और memory की सब चीज़ें रखता है: tokens, connection strings, personal data। उसे sensitive मानो: restricted storage, छोटी retention, ticket पर कभी attach नहीं।</li>
<li>Follow-up: "सिर्फ़ production slow है, staging ठीक है।" Code को दोष देने से पहले data size, indexes और statistics, cache state, noisy neighbours, connection limits और feature flags देखो।</li>
</ul>`,
        hg: `<ul>
<li>Intrusiveness ka order: dashboards aur traces (OpenTelemetry, Application Insights, Days 16 aur 20); <code>dotnet-counters</code> (sasta); chhoti window ke liye sampling <code>dotnet-trace</code>; tumhara platform de to live profiler; memory dump aakhir mein.</li>
<li>Dump likhte samay process ko freeze karta hai aur memory ki sab cheezein rakhta hai: tokens, connection strings, personal data. Use sensitive maano: restricted storage, chhoti retention, ticket par kabhi attach nahi.</li>
<li>Follow-up: "Sirf production slow hai, staging theek hai." Code ko dosh dene se pehle data size, indexes aur statistics, cache state, noisy neighbours, connection limits aur feature flags dekho.</li>
</ul>`
      }
    },
    {
      id: "performance-budgets-slo",
      depth: "detailed",
      q: "What are performance budgets and SLOs, and how do you use load testing with them?",
      answer: "A budget is a written limit per feature, like p95 under 300 ms; an SLO is the agreed target over time, with an error budget. Production-like load tests check both before release.",
      meaning: {
        hi: "Budget हर feature की लिखी हुई limit है, जैसे p95 300 ms से कम; SLO समय पर agreed target है, error budget के साथ। Production जैसे environment पर load tests release से पहले इन्हें check करते हैं।",
        hg: "Budget har feature ki likhi hui limit hai, jaise p95 300 ms se kam; SLO samay par agreed target hai, error budget ke saath. Production jaise environment par load tests release se pehle inhein check karte hain."
      },
      explain: {
        en: `<ul>
<li>SLI = what you measure, SLO = target (for example 99% of requests under 300 ms over 30 days), error budget = the allowed 1%. When it is used up, reliability work gets priority over features.</li>
<li>Load testing tools: k6, Azure Load Testing, NBomber. Use realistic data and a mix of requests, ramp up gradually, watch CPU, GC, thread-pool queue, database waits and connection pools, and never test production or a third party without agreement.</li>
<li>Follow-up: "Management wants 100% uptime." Explain that each extra nine costs more, agree a realistic SLO from user impact, and use the error budget to decide between features and reliability work.</li>
</ul>`,
        hi: `<ul>
<li>SLI = जो तुम measure करते हो, SLO = target (जैसे 30 दिन में 99% requests 300 ms से कम), error budget = allowed 1%। यह खत्म हो जाए तो features से पहले reliability काम को priority मिलती है।</li>
<li>Load testing tools: k6, Azure Load Testing, NBomber। Realistic data और requests का mix use करो, धीरे-धीरे ramp up करो, CPU, GC, thread-pool queue, database waits और connection pools देखो, और production या third party को बिना सहमति के कभी test मत करो।</li>
<li>Follow-up: "Management को 100% uptime चाहिए।" समझाओ कि हर extra nine महँगा है, user impact से realistic SLO agree करो, और features बनाम reliability काम तय करने के लिए error budget use करो।</li>
</ul>`,
        hg: `<ul>
<li>SLI = jo tum measure karte ho, SLO = target (jaise 30 din mein 99% requests 300 ms se kam), error budget = allowed 1%. Yeh khatam ho jaye to features se pehle reliability kaam ko priority milti hai.</li>
<li>Load testing tools: k6, Azure Load Testing, NBomber. Realistic data aur requests ka mix use karo, dheere-dheere ramp up karo, CPU, GC, thread-pool queue, database waits aur connection pools dekho, aur production ya third party ko bina sahmati ke kabhi test mat karo.</li>
<li>Follow-up: "Management ko 100% uptime chahiye." Samjhao ki har extra nine mehenga hai, user impact se realistic SLO agree karo, aur features vs reliability kaam tay karne ke liye error budget use karo.</li>
</ul>`
      }
    }
  ],
  puzzles: [
    {
      id: "order-by-cannot-be-a-parameter",
      lang: "sql",
      src: `CREATE TABLE dbo.Items (ItemId int PRIMARY KEY, Name varchar(20) NOT NULL, Price int NOT NULL);
INSERT dbo.Items VALUES (1, 'Tea', 30), (2, 'Samosa', 20), (3, 'Biryani', 150);
CREATE TABLE dbo.Secrets (Token varchar(20) NOT NULL);
INSERT dbo.Secrets VALUES ('abc123');

-- the "sort" value from a query string: each one asks a yes/no question about dbo.Secrets
DECLARE @probeA varchar(200) = 'CASE WHEN EXISTS (SELECT 1 FROM dbo.Secrets WHERE Token LIKE ''a%'') THEN Price ELSE ItemId END';
DECLARE @probeZ varchar(200) = 'CASE WHEN EXISTS (SELECT 1 FROM dbo.Secrets WHERE Token LIKE ''z%'') THEN Price ELSE ItemId END';
DECLARE @sql nvarchar(400);

-- VULNERABLE - don't do this: the sort text is pasted into ORDER BY (a parameter cannot hold a column name)
PRINT 'probe a:';
SET @sql = N'SELECT Name FROM dbo.Items ORDER BY ' + @probeA;
EXEC (@sql);
PRINT 'probe z:';
SET @sql = N'SELECT Name FROM dbo.Items ORDER BY ' + @probeZ;
EXEC (@sql);

-- FIXED: map the input to a fixed allow-list; anything else gets the default column
DECLARE @col sysname = CASE @probeA WHEN 'Price' THEN N'Price' WHEN 'Name' THEN N'Name' ELSE N'ItemId' END;
PRINT 'allow-list:';
SET @sql = N'SELECT Name FROM dbo.Items ORDER BY ' + QUOTENAME(@col);
EXEC (@sql);`,
      answer: "probe a:\nSamosa\nTea\nBiryani\nprobe z:\nTea\nSamosa\nBiryani\nallow-list:\nTea\nSamosa\nBiryani",
      explain: {
        en: `<p>A parameter can carry a <b>value</b>, but not a column name or an <code>ORDER BY</code> expression, so teams often build that part of the SQL by string. The pasted text is then SQL. Here the attacker's <code>CASE WHEN EXISTS (...)</code> sorts by price when the guess about <code>dbo.Secrets</code> is true (<code>probe a</code>: Samosa, Tea, Biryani) and by id when it is false (<code>probe z</code>: Tea, Samosa, Biryani). The row order leaks one bit per request, with no error and no data in the response. The fix is an <b>allow-list</b>: map the input to a known column (<code>Price</code>, <code>Name</code>) and use the default otherwise; <code>QUOTENAME</code> then quotes the chosen name. In EF Core, do the same with a dictionary of sort keys and <code>OrderBy</code>.</p>`,
        hi: `<p>Parameter <b>value</b> ले जा सकता है, column name या <code>ORDER BY</code> expression नहीं, इसलिए teams अक्सर SQL का वो हिस्सा string से बनाती हैं। तब paste किया text SQL बन जाता है। यहाँ attacker का <code>CASE WHEN EXISTS (...)</code> तब price से sort करता है जब <code>dbo.Secrets</code> के बारे में guess सही हो (<code>probe a</code>: Samosa, Tea, Biryani) और गलत हो तो id से (<code>probe z</code>: Tea, Samosa, Biryani)। Rows का order हर request पर एक bit leak करता है, बिना error और बिना response में data के। Fix है <b>allow-list</b>: input को known column (<code>Price</code>, <code>Name</code>) से map करो, वरना default; <code>QUOTENAME</code> चुने हुए नाम को quote कर देता है। EF Core में sort keys की dictionary और <code>OrderBy</code> से यही करो।</p>`,
        hg: `<p>Parameter <b>value</b> le ja sakta hai, column name ya <code>ORDER BY</code> expression nahi, isliye teams aksar SQL ka woh hissa string se banati hain. Tab paste kiya text SQL ban jaata hai. Yahan attacker ka <code>CASE WHEN EXISTS (...)</code> tab price se sort karta hai jab <code>dbo.Secrets</code> ke baare mein guess sahi ho (<code>probe a</code>: Samosa, Tea, Biryani) aur galat ho to id se (<code>probe z</code>: Tea, Samosa, Biryani). Rows ka order har request par ek bit leak karta hai, bina error aur bina response mein data ke. Fix hai <b>allow-list</b>: input ko known column (<code>Price</code>, <code>Name</code>) se map karo, warna default; <code>QUOTENAME</code> chune hue naam ko quote kar deta hai. EF Core mein sort keys ki dictionary aur <code>OrderBy</code> se yahi karo.</p>`
      }
    },
    {
      id: "encoder-per-context",
      src: `using System.Text.Encodings.Web;

string payload = "</script><b onclick=\\"x('1')\\">&";
Console.WriteLine("html: " + HtmlEncoder.Default.Encode(payload));
Console.WriteLine("js:   " + JavaScriptEncoder.Default.Encode(payload));
Console.WriteLine("url:  " + UrlEncoder.Default.Encode(payload));`,
      answer: "html: &lt;/script&gt;&lt;b onclick=&quot;x(&#x27;1&#x27;)&quot;&gt;&amp;\njs:   \\u003C/script\\u003E\\u003Cb onclick=\\u0022x(\\u00271\\u0027)\\u0022\\u003E\\u0026\nurl:  %3C%2Fscript%3E%3Cb%20onclick%3D%22x(%271%27)%22%3E%26",
      explain: {
        en: `<p>The same payload is encoded three different ways because the <b>output context</b> decides which characters are dangerous. In HTML text or attributes, <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code> and quotes become entities. Inside a JavaScript string they become <code>\\uXXXX</code> escapes. In a URL they become percent-escapes. A string encoded for one context is not safe in another, so Razor encodes for HTML and you must pick <code>JavaScriptEncoder</code> or <code>UrlEncoder</code> yourself when you build those outputs by hand. Encoding is the main defence; a CSP is a second layer.</p>`,
        hi: `<p>एक ही payload तीन तरह से encode होता है क्योंकि <b>output context</b> तय करता है कि कौन-से characters dangerous हैं। HTML text या attribute में <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code> और quotes entities बन जाते हैं। JavaScript string के अंदर वे <code>\\uXXXX</code> escapes बनते हैं। URL में percent-escapes। एक context के लिए encode किया string दूसरे context में safe नहीं होता, इसलिए Razor HTML के लिए encode करता है और जब तुम खुद ये outputs बनाते हो तो <code>JavaScriptEncoder</code> या <code>UrlEncoder</code> खुद चुनना पड़ता है। Encoding main defence है; CSP दूसरी layer है।</p>`,
        hg: `<p>Ek hi payload teen tarah se encode hota hai kyunki <b>output context</b> tay karta hai ki kaun-se characters dangerous hain. HTML text ya attribute mein <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code> aur quotes entities ban jaate hain. JavaScript string ke andar woh <code>\\uXXXX</code> escapes bante hain. URL mein percent-escapes. Ek context ke liye encode kiya string doosre context mein safe nahi hota, isliye Razor HTML ke liye encode karta hai aur jab tum khud ye outputs banate ho to <code>JavaScriptEncoder</code> ya <code>UrlEncoder</code> khud chunna padta hai. Encoding main defence hai; CSP doosri layer hai.</p>`
      }
    },
    {
      id: "password-hasher-results",
      frameworks: ["aspnetcore"],
      src: `using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

var v3 = new PasswordHasher<string>();
var v2 = new PasswordHasher<string>(Options.Create(
    new PasswordHasherOptions { CompatibilityMode = PasswordHasherCompatibilityMode.IdentityV2 }));

string h1 = v3.HashPassword("asha", "Correct-Horse-9");
string h2 = v3.HashPassword("asha", "Correct-Horse-9");
string old = v2.HashPassword("asha", "Correct-Horse-9");

Console.WriteLine("same password, same hash: " + (h1 == h2));
Console.WriteLine("right:      " + v3.VerifyHashedPassword("asha", h1, "Correct-Horse-9"));
Console.WriteLine("wrong case: " + v3.VerifyHashedPassword("asha", h1, "correct-horse-9"));
Console.WriteLine("old format: " + v3.VerifyHashedPassword("asha", old, "Correct-Horse-9"));`,
      answer: "same password, same hash: False\nright:      Success\nwrong case: Failed\nold format: SuccessRehashNeeded",
      explain: {
        en: `<p>Each <code>HashPassword</code> call adds a fresh random salt, so two hashes of the same password differ (<b>False</b>). <code>VerifyHashedPassword</code> returns a <code>PasswordVerificationResult</code>: <b>Success</b> for the right password, <b>Failed</b> for a wrong one (case matters). A hash written in the older IdentityV2 format still verifies but returns <b>SuccessRehashNeeded</b>: the login is valid and you should store a new hash made with <code>HashPassword</code>. Identity's <code>UserManager</code> does this upgrade for you. The hash strings differ on every run, which is why the puzzle prints only comparisons.</p>`,
        hi: `<p>हर <code>HashPassword</code> call नया random salt जोड़ता है, इसलिए एक ही password के दो hashes अलग होते हैं (<b>False</b>)। <code>VerifyHashedPassword</code> एक <code>PasswordVerificationResult</code> देता है: सही password पर <b>Success</b>, गलत पर <b>Failed</b> (case matter करता है)। पुराने IdentityV2 format में लिखा hash अब भी verify होता है पर <b>SuccessRehashNeeded</b> आता है: login valid है और तुम्हें <code>HashPassword</code> से बना नया hash store करना चाहिए। Identity का <code>UserManager</code> यह upgrade खुद कर देता है। Hash strings हर run में अलग होती हैं, इसीलिए puzzle सिर्फ़ comparisons print करता है।</p>`,
        hg: `<p>Har <code>HashPassword</code> call naya random salt jodta hai, isliye ek hi password ke do hashes alag hote hain (<b>False</b>). <code>VerifyHashedPassword</code> ek <code>PasswordVerificationResult</code> deta hai: sahi password par <b>Success</b>, galat par <b>Failed</b> (case matter karta hai). Purane IdentityV2 format mein likha hash ab bhi verify hota hai par <b>SuccessRehashNeeded</b> aata hai: login valid hai aur tumhein <code>HashPassword</code> se bana naya hash store karna chahiye. Identity ka <code>UserManager</code> yeh upgrade khud kar deta hai. Hash strings har run mein alag hoti hain, isiliye puzzle sirf comparisons print karta hai.</p>`
      }
    },
    {
      id: "fixed-time-hmac-tag",
      src: `using System.Security.Cryptography;
using System.Text;

byte[] key = RandomNumberGenerator.GetBytes(32);
byte[] Sign(string msg) => HMACSHA256.HashData(key, Encoding.UTF8.GetBytes(msg));

byte[] tag = Sign("amount=100");
Console.WriteLine("same message:  " + CryptographicOperations.FixedTimeEquals(tag, Sign("amount=100")));
Console.WriteLine("tampered:      " + CryptographicOperations.FixedTimeEquals(tag, Sign("amount=900")));
Console.WriteLine("truncated tag: " + CryptographicOperations.FixedTimeEquals(tag, tag[..16]));
Console.WriteLine("tag length:    " + tag.Length);`,
      answer: "same message:  True\ntampered:      False\ntruncated tag: False\ntag length:    32",
      explain: {
        en: `<p>HMAC-SHA256 is deterministic for the same key and message, so the same message gives <b>True</b> and a tampered one gives <b>False</b>. <code>CryptographicOperations.FixedTimeEquals</code> compares in time that depends on the length, not on where the first difference is, so an attacker cannot guess a tag byte by byte from response times. It returns <b>False</b> at once when the lengths differ; the length of a tag is not secret. The tag is 32 bytes (256 bits). <code>SequenceEqual</code> may stop at the first different byte (and <code>==</code> on two byte arrays only compares references), which is why you use <code>FixedTimeEquals</code> for MACs, API keys and tokens.</p>`,
        hi: `<p>HMAC-SHA256 same key और message के लिए deterministic है, इसलिए same message पर <b>True</b> और बदले हुए पर <b>False</b>। <code>CryptographicOperations.FixedTimeEquals</code> उस समय में compare करता है जो length पर depend करता है, इस पर नहीं कि पहला फ़र्क कहाँ है, इसलिए attacker response time से tag का एक-एक byte guess नहीं कर सकता। Length अलग हो तो यह तुरंत <b>False</b> देता है; tag की length secret नहीं होती। Tag 32 bytes (256 bits) का है। <code>SequenceEqual</code> पहले अलग byte पर रुक सकता है (और दो byte arrays पर <code>==</code> सिर्फ़ references compare करता है), इसीलिए MACs, API keys और tokens के लिए <code>FixedTimeEquals</code> use करते हैं।</p>`,
        hg: `<p>HMAC-SHA256 same key aur message ke liye deterministic hai, isliye same message par <b>True</b> aur badle hue par <b>False</b>. <code>CryptographicOperations.FixedTimeEquals</code> us samay mein compare karta hai jo length par depend karta hai, is par nahi ki pehla farq kahan hai, isliye attacker response time se tag ka ek-ek byte guess nahi kar sakta. Length alag ho to yeh turant <b>False</b> deta hai; tag ki length secret nahi hoti. Tag 32 bytes (256 bits) ka hai. <code>SequenceEqual</code> pehle alag byte par ruk sakta hai (aur do byte arrays par <code>==</code> sirf references compare karta hai), isiliye MACs, API keys aur tokens ke liye <code>FixedTimeEquals</code> use karte hain.</p>`
      }
    },
    {
      id: "path-inside-root",
      src: `string root = Path.GetFullPath("uploads");

// VULNERABLE - don't do this: a prefix match without a directory separator
bool Naive(string name) => Path.GetFullPath(Path.Combine(root, name)).StartsWith(root);
bool Safe(string name) =>
    Path.GetFullPath(Path.Combine(root, name)).StartsWith(root + Path.DirectorySeparatorChar, StringComparison.Ordinal);

foreach (var name in new[] { "report.pdf", "a/../b.txt", "../secret.txt", "../uploads-private/x.txt", "/etc/passwd" })
    Console.WriteLine($"{name,-26} naive={Naive(name)} safe={Safe(name)}");`,
      answer: "report.pdf                 naive=True safe=True\na/../b.txt                 naive=True safe=True\n../secret.txt              naive=False safe=False\n../uploads-private/x.txt   naive=True safe=False\n/etc/passwd                naive=False safe=False",
      explain: {
        en: `<p><code>Path.GetFullPath</code> resolves <code>..</code> segments, so <code>../secret.txt</code> lands outside the root and both checks reject it. <code>a/../b.txt</code> resolves back inside and is fine. The trap is <code>../uploads-private/x.txt</code>: its full path starts with the text of <code>root</code> (<code>.../uploads-private</code> begins with <code>.../uploads</code>), so the naive <code>StartsWith(root)</code> says True. Adding the directory separator makes the check compare whole folder names. A rooted input like <code>/etc/passwd</code> makes <code>Path.Combine</code> drop the root, and the check rejects it. For stored uploads, also generate your own file name instead of using the client's.</p>`,
        hi: `<p><code>Path.GetFullPath</code> <code>..</code> segments को resolve करता है, इसलिए <code>../secret.txt</code> root के बाहर जाता है और दोनों checks उसे reject करते हैं। <code>a/../b.txt</code> वापस अंदर resolve होता है और ठीक है। Trap है <code>../uploads-private/x.txt</code>: उसका full path <code>root</code> के text से शुरू होता है (<code>.../uploads-private</code>, <code>.../uploads</code> से शुरू होता है), इसलिए naive <code>StartsWith(root)</code> True कहता है। Directory separator जोड़ने से check पूरे folder names compare करता है। <code>/etc/passwd</code> जैसा rooted input <code>Path.Combine</code> से root हटवा देता है, और check उसे reject करता है। Stored uploads के लिए client का नाम use करने के बजाय अपना file name भी generate करो।</p>`,
        hg: `<p><code>Path.GetFullPath</code> <code>..</code> segments ko resolve karta hai, isliye <code>../secret.txt</code> root ke bahar jaata hai aur dono checks use reject karte hain. <code>a/../b.txt</code> wapas andar resolve hota hai aur theek hai. Trap hai <code>../uploads-private/x.txt</code>: uska full path <code>root</code> ke text se shuru hota hai (<code>.../uploads-private</code>, <code>.../uploads</code> se shuru hota hai), isliye naive <code>StartsWith(root)</code> True kehta hai. Directory separator jodne se check poore folder names compare karta hai. <code>/etc/passwd</code> jaisa rooted input <code>Path.Combine</code> se root hatwa deta hai, aur check use reject karta hai. Stored uploads ke liye client ka naam use karne ke bajay apna file name bhi generate karo.</p>`
      }
    },
    {
      id: "url-host-allowlist",
      lang: "javascript",
      src: `const allowed = "api.partner.example";
const inputs = [
  "https://api.partner.example/v1/rates",
  "https://api.partner.example@evil.test/v1/rates",
  "https://api.partner.example.evil.test/v1/rates",
  "http://api.partner.example/v1/rates",
];
// VULNERABLE - don't do this: trusts the text of the URL instead of the parsed host
const naive = (s) => s.startsWith("https://" + allowed);
const strict = (s) => { const u = new URL(s); return u.protocol === "https:" && u.hostname === allowed; };

for (const s of inputs) console.log(naive(s), strict(s), new URL(s).hostname);`,
      answer: "true true api.partner.example\ntrue false evil.test\ntrue false api.partner.example.evil.test\nfalse false api.partner.example",
      explain: {
        en: `<p>Each line prints the naive check, the strict check and the host that a URL parser really sees. The naive <code>startsWith</code> trusts the text, so it also accepts <code>https://api.partner.example@evil.test/...</code> (everything before <code>@</code> is user info; the real host is <code>evil.test</code>) and <code>https://api.partner.example.evil.test/...</code> (a different domain that merely starts with the same words). Parsing first and comparing <code>protocol</code> and <code>hostname</code> exactly accepts only the first URL. The plain-http URL is rejected by both. This is the SSRF allow-list rule: <b>parse, then compare the parsed parts</b>; in .NET use <code>Uri</code> and compare <code>Scheme</code> and <code>Host</code>.</p>`,
        hi: `<p>हर line naive check, strict check और वो host print करती है जो URL parser को असल में दिखता है। Naive <code>startsWith</code> text पर भरोसा करता है, इसलिए <code>https://api.partner.example@evil.test/...</code> भी accept करता है (<code>@</code> से पहले सब user info है; असली host <code>evil.test</code> है) और <code>https://api.partner.example.evil.test/...</code> भी (अलग domain जो बस उन्हीं words से शुरू होता है)। पहले parse करके <code>protocol</code> और <code>hostname</code> exactly compare करने से सिर्फ़ पहला URL accept होता है। Plain-http URL दोनों reject करते हैं। यही SSRF allow-list का rule है: <b>parse करो, फिर parsed parts compare करो</b>; .NET में <code>Uri</code> use करो और <code>Scheme</code> और <code>Host</code> compare करो।</p>`,
        hg: `<p>Har line naive check, strict check aur woh host print karti hai jo URL parser ko asal mein dikhta hai. Naive <code>startsWith</code> text par bharosa karta hai, isliye <code>https://api.partner.example@evil.test/...</code> bhi accept karta hai (<code>@</code> se pehle sab user info hai; asli host <code>evil.test</code> hai) aur <code>https://api.partner.example.evil.test/...</code> bhi (alag domain jo bas unhi words se shuru hota hai). Pehle parse karke <code>protocol</code> aur <code>hostname</code> exactly compare karne se sirf pehla URL accept hota hai. Plain-http URL dono reject karte hain. Yahi SSRF allow-list ka rule hai: <b>parse karo, phir parsed parts compare karo</b>; .NET mein <code>Uri</code> use karo aur <code>Scheme</code> aur <code>Host</code> compare karo.</p>`
      }
    },
    {
      id: "offset-vs-keyset-page",
      src: `var items = new List<int> { 50, 40, 30, 20, 10 };   // ids, newest first

var page1 = items.Take(2).ToList();
int lastSeen = page1[^1];
items.Insert(0, 60);                                    // a new row arrives between the two page requests

var offsetPage2 = items.Skip(2).Take(2).ToList();
var keysetPage2 = items.Where(i => i < lastSeen).Take(2).ToList();

Console.WriteLine("page 1:        " + string.Join(",", page1));
Console.WriteLine("offset page 2: " + string.Join(",", offsetPage2));
Console.WriteLine("keyset page 2: " + string.Join(",", keysetPage2));`,
      answer: "page 1:        50,40\noffset page 2: 40,30\nkeyset page 2: 30,20",
      explain: {
        en: `<p>Page 1 shows 50 and 40. A new row (60) arrives at the top before the user asks for page 2. Offset paging (<code>Skip(2)</code>) now skips 60 and 50, so page 2 starts with <b>40 again</b>: a duplicate, and if a row had been deleted instead, one row would be skipped. Keyset paging remembers the last id seen (40) and asks for ids below it, so page 2 is 30, 20 with no duplicate. It is also faster on big tables because the database seeks an index instead of counting past an offset. The trade-off: keyset needs a stable, unique sort key and cannot jump straight to "page 17".</p>`,
        hi: `<p>Page 1 में 50 और 40 दिखते हैं। User के page 2 माँगने से पहले ऊपर एक नई row (60) आ जाती है। Offset paging (<code>Skip(2)</code>) अब 60 और 50 skip करती है, इसलिए page 2 <b>फिर से 40</b> से शुरू होता है: duplicate, और अगर row delete हुई होती तो एक row छूट जाती। Keyset paging आख़िरी देखा गया id (40) याद रखती है और उससे छोटे ids माँगती है, इसलिए page 2 = 30, 20, बिना duplicate। Big tables पर यह तेज़ भी है क्योंकि database offset तक गिनने के बजाय index पर seek करता है। Trade-off: keyset को stable, unique sort key चाहिए और सीधे "page 17" पर नहीं कूद सकते।</p>`,
        hg: `<p>Page 1 mein 50 aur 40 dikhte hain. User ke page 2 maangne se pehle upar ek nayi row (60) aa jaati hai. Offset paging (<code>Skip(2)</code>) ab 60 aur 50 skip karti hai, isliye page 2 <b>phir se 40</b> se shuru hota hai: duplicate, aur agar row delete hui hoti to ek row chhoot jaati. Keyset paging aakhri dekha gaya id (40) yaad rakhti hai aur usse chhote ids maangti hai, isliye page 2 = 30, 20, bina duplicate. Big tables par yeh tez bhi hai kyunki database offset tak ginne ke bajay index par seek karta hai. Trade-off: keyset ko stable, unique sort key chahiye aur seedhe "page 17" par nahi kood sakte.</p>`
      }
    }
  ],
  revision: {
    en: [
      "OWASP Top 10: the current release is 2025; use it as a design and review checklist mapped to .NET controls.",
      "SQL injection: send values as parameters, never glue user text into SQL; identifiers need an allow-list.",
      "XSS: Razor encodes by default; Html.Raw, MarkupString and innerHTML switch that off; CSP is a second layer.",
      "CSRF needs a cookie the browser sends by itself; a bearer-token API in a header is much less exposed.",
      "IDOR: logged in is not enough; check ownership of every object, e.g. with a resource-based handler or an owner-filtered query.",
      "Passwords: Identity PasswordHasher (PBKDF2 with salt); never plain text, MD5, SHA1 or plain SHA256.",
      "Block SSRF with a parsed-host allow-list, https only, and a check for private addresses after DNS resolution.",
      "Supply chain: NuGet Audit warns on restore; agree which severity fails the build and automate updates.",
      "Threat-model new features with STRIDE before you build them.",
      "Performance: measure first, find the slow dependency, and fix the biggest cost before touching allocations.",
      "Thread-pool starvation means blocked threads and low CPU; the fix is async all the way, not more threads.",
      "Use keyset paging for big lists that change while users page through them."
    ],
    meaning: {
      hi: [
        "OWASP Top 10: अभी की release 2025 है; इसे design और review की checklist की तरह .NET controls से map करके use करो।",
        "SQL injection: values को parameters की तरह भेजो, user text को SQL में कभी glue मत करो; identifiers को allow-list चाहिए।",
        "XSS: Razor default से encode करता है; Html.Raw, MarkupString और innerHTML उसे बंद कर देते हैं; CSP दूसरी layer है।",
        "CSRF को ऐसी cookie चाहिए जो browser खुद भेजे; header वाली bearer-token API बहुत कम exposed है।",
        "IDOR: logged in होना काफ़ी नहीं; हर object की ownership check करो, जैसे resource-based handler या owner-filtered query से।",
        "Passwords: Identity PasswordHasher (salt के साथ PBKDF2); plain text, MD5, SHA1 या plain SHA256 कभी नहीं।",
        "SSRF को parsed-host allow-list, सिर्फ़ https, और DNS resolution के बाद private addresses के check से रोको।",
        "Supply chain: NuGet Audit restore पर warn करता है; तय करो कौन-सी severity build fail करे और updates automate करो।",
        "नए features को बनाने से पहले STRIDE से threat-model करो।",
        "Performance: पहले measure करो, slow dependency ढूँढो, और allocations छूने से पहले सबसे बड़ा cost fix करो।",
        "Thread-pool starvation का मतलब blocked threads और कम CPU; इलाज async all the way है, ज़्यादा threads नहीं।",
        "पेज करते समय बदलने वाली बड़ी lists के लिए keyset paging use करो।"
      ],
      hg: [
        "OWASP Top 10: abhi ki release 2025 hai; ise design aur review ki checklist ki tarah .NET controls se map karke use karo.",
        "SQL injection: values ko parameters ki tarah bhejo, user text ko SQL mein kabhi glue mat karo; identifiers ko allow-list chahiye.",
        "XSS: Razor default se encode karta hai; Html.Raw, MarkupString aur innerHTML use band kar dete hain; CSP doosri layer hai.",
        "CSRF ko aisi cookie chahiye jo browser khud bheje; header wali bearer-token API bahut kam exposed hai.",
        "IDOR: logged in hona kaafi nahi; har object ki ownership check karo, jaise resource-based handler ya owner-filtered query se.",
        "Passwords: Identity PasswordHasher (salt ke saath PBKDF2); plain text, MD5, SHA1 ya plain SHA256 kabhi nahi.",
        "SSRF ko parsed-host allow-list, sirf https, aur DNS resolution ke baad private addresses ke check se roko.",
        "Supply chain: NuGet Audit restore par warn karta hai; tay karo kaun-si severity build fail kare aur updates automate karo.",
        "Naye features ko banane se pehle STRIDE se threat-model karo.",
        "Performance: pehle measure karo, slow dependency dhoondho, aur allocations chhoone se pehle sabse bada cost fix karo.",
        "Thread-pool starvation ka matlab blocked threads aur kam CPU; ilaaj async all the way hai, zyada threads nahi.",
        "Page karte samay badalne wali badi lists ke liye keyset paging use karo."
      ]
    }
  },
  whatsNew: {
    en: `<ul>
<li><b>OWASP Top 10:2025</b> is the current release on owasp.org (2021 is the previous edition). New names to know: Software Supply Chain Failures, Authentication Failures, Security Logging and Alerting Failures and Mishandling of Exceptional Conditions.</li>
<li><b>NuGet Audit</b> arrived with the .NET 8 SDK; for <code>net10.0</code> projects its default mode includes transitive packages, and the .NET 10 SDK adds <code>dotnet package update --vulnerable</code>.</li>
<li><b>ASP.NET Core:</b> antiforgery for minimal API form endpoints (.NET 8 and later) uses <code>AddAntiforgery()</code> and <code>UseAntiforgery()</code>; output caching has been built in since .NET 7.</li>
</ul>`,
    hi: `<ul>
<li><b>OWASP Top 10:2025</b> owasp.org पर अभी की release है (2021 पिछली edition है)। जानने लायक नए नाम: Software Supply Chain Failures, Authentication Failures, Security Logging and Alerting Failures और Mishandling of Exceptional Conditions।</li>
<li><b>NuGet Audit</b> .NET 8 SDK के साथ आया; <code>net10.0</code> projects में इसके default mode में transitive packages शामिल हैं, और .NET 10 SDK <code>dotnet package update --vulnerable</code> जोड़ता है।</li>
<li><b>ASP.NET Core:</b> minimal API form endpoints के लिए antiforgery (.NET 8 और बाद) में <code>AddAntiforgery()</code> और <code>UseAntiforgery()</code> use होते हैं; output caching .NET 7 से built-in है।</li>
</ul>`,
    hg: `<ul>
<li><b>OWASP Top 10:2025</b> owasp.org par abhi ki release hai (2021 pichhli edition hai). Jaanne laayak naye naam: Software Supply Chain Failures, Authentication Failures, Security Logging and Alerting Failures aur Mishandling of Exceptional Conditions.</li>
<li><b>NuGet Audit</b> .NET 8 SDK ke saath aaya; <code>net10.0</code> projects mein iske default mode mein transitive packages shamil hain, aur .NET 10 SDK <code>dotnet package update --vulnerable</code> jodta hai.</li>
<li><b>ASP.NET Core:</b> minimal API form endpoints ke liye antiforgery (.NET 8 aur baad) mein <code>AddAntiforgery()</code> aur <code>UseAntiforgery()</code> use hote hain; output caching .NET 7 se built-in hai.</li>
</ul>`
  }
};
