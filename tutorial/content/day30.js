// Day 30 — Mock interview 2 (system design + leadership + AI round) and the final cheat sheets. Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 30,
  title: {
    en: "Mock Interview 2 and the Final Cheat Sheets",
    hi: "Mock Interview 2 और Final Cheat Sheets",
    hg: "Mock Interview 2 aur Final Cheat Sheets"
  },
  summary: {
    en: `<p>This is the <b>last day</b>. Day 29 tested your technical rounds; today you test the three rounds that decide a Tech Lead offer: <b>system design</b>, <b>leadership and behavioral</b>, and the <b>AI round</b>. Then you collect the one-page cheat sheets and the interview-day checklist, and you are done.</p>
<p><b>Plan for about 1 hour 30 minutes:</b></p>
<ul>
<li><b>Setup (5 min, Short mode)</b> — read "How to run Mock 2". Keep a timer and a notebook ready.</li>
<li><b>Mock 2 (about 60 min, Q&amp;A)</b> — system design prompts, leadership prompts and AI prompts. Speak each answer aloud first, then open it and score yourself 0, 1 or 2. For leadership prompts, tell <b>your own real story</b> using the STAR template.</li>
<li><b>Cheat sheets (15 min, Short mode)</b> — four one-page sheets, one per week, built from the corrected facts of all 29 days.</li>
<li><b>Puzzles (Detailed mode, 5 min)</b> — seven "what will this print?" questions that mix the weeks.</li>
<li><b>Interview-day checklist and "After the 30 days" (5 min)</b> — your plan for the night before, the morning, and the weeks after.</li>
</ul>
<p>You have covered a lot in 30 days. You do not need to know everything; you need a clear structure, honest trade-offs and your own real stories. That is what a Tech Lead interview rewards.</p>`,
    hi: `<p>यह <b>आख़िरी दिन</b> है। Day 29 में आपके technical rounds test हुए; आज वो तीन rounds test करो जो Tech Lead offer तय करते हैं: <b>system design</b>, <b>leadership और behavioral</b>, और <b>AI round</b>। फिर one-page cheat sheets और interview-day checklist ले लो, बस।</p>
<p><b>लगभग 1 घंटा 30 मिनट का plan:</b></p>
<ul>
<li><b>Setup (5 min, Short mode)</b> — "How to run Mock 2" पढ़ो। Timer और notebook पास रखो।</li>
<li><b>Mock 2 (लगभग 60 min, Q&amp;A)</b> — system design के prompts, leadership के prompts और AI के prompts। हर answer पहले ज़ोर से बोलो, फिर खोलकर खुद को 0, 1 या 2 score दो। Leadership prompts में STAR template से <b>अपनी real story</b> सुनाओ।</li>
<li><b>Cheat sheets (15 min, Short mode)</b> — चार one-page sheets, हर हफ़्ते की एक, सभी 29 दिनों के corrected facts से बनी हुई।</li>
<li><b>Puzzles (Detailed mode, 5 min)</b> — सात "यह क्या print करेगा?" सवाल जो हफ़्तों को mix करते हैं।</li>
<li><b>Interview-day checklist और "After the 30 days" (5 min)</b> — रात से पहले, सुबह, और बाद के हफ़्तों का plan।</li>
</ul>
<p>आपने 30 दिनों में बहुत कुछ कवर किया है। सब कुछ आना ज़रूरी नहीं; साफ़ structure, honest trade-offs और अपनी real stories चाहिए। Tech Lead interview यही देखता है।</p>`,
    hg: `<p>Yeh <b>aakhri din</b> hai. Day 29 mein aapke technical rounds test hue; aaj woh teen rounds test karo jo Tech Lead offer tay karte hain: <b>system design</b>, <b>leadership aur behavioral</b>, aur <b>AI round</b>. Phir one-page cheat sheets aur interview-day checklist le lo, bas.</p>
<p><b>Lagbhag 1 ghanta 30 minute ka plan:</b></p>
<ul>
<li><b>Setup (5 min, Short mode)</b> — "How to run Mock 2" padho. Timer aur notebook paas rakho.</li>
<li><b>Mock 2 (lagbhag 60 min, Q&amp;A)</b> — system design ke prompts, leadership ke prompts aur AI ke prompts. Har answer pehle zor se bolo, phir kholkar khud ko 0, 1 ya 2 score do. Leadership prompts mein STAR template se <b>apni real story</b> sunao.</li>
<li><b>Cheat sheets (15 min, Short mode)</b> — chaar one-page sheets, har hafte ki ek, saare 29 dinon ke corrected facts se bani hui.</li>
<li><b>Puzzles (Detailed mode, 5 min)</b> — saat "yeh kya print karega?" sawaal jo hafton ko mix karte hain.</li>
<li><b>Interview-day checklist aur "After the 30 days" (5 min)</b> — raat se pehle, subah, aur baad ke hafton ka plan.</li>
</ul>
<p>Aapne 30 dinon mein bahut kuch cover kiya hai. Sab kuch aana zaroori nahi; saaf structure, honest trade-offs aur apni real stories chahiye. Tech Lead interview yahi dekhta hai.</p>`
  },
  sections: [
    {
      id: "run-mock2",
      depth: "short",
      title: { en: "How to run Mock 2", hi: "Mock 2 कैसे चलाएँ", hg: "Mock 2 kaise chalayein" },
      body: {
        en: `<p><b>Analogy:</b> the final rehearsal before a wedding function. The hall, the music and the timing are tested together, not one by one.</p>
<ul>
<li><b>Round A, system design, 45 minutes in a real interview.</b> Use the Day 17 framework: clarify, estimate, API, data model, high-level design, deep dives, trade-offs. In this mock, give each prompt about 8 minutes: 2 to clarify and estimate, 4 to draw and explain, 2 for trade-offs.</li>
<li><b>Round B, leadership and behavioral, 30 minutes.</b> Use STAR from Day 28: Situation, Task, Action, Result. Tell <b>your own real story</b>; the samples here are only shapes, so replace every [placeholder].</li>
<li><b>Round C, AI round, 15 minutes.</b> Use Day 27: AI as leverage, grounding, validation, cost, safety. Be honest about what you have built and what you have only read about.</li>
<li><b>Score each question 0 to 2:</b> 2 = clear structure, trade-off named, example given; 1 = half right or rambling; 0 = blank or wrong. If a round averages below 1.5, revise that day and retest in 48 hours.</li>
<li><b>Record yourself</b> once on your phone. Listen for filler words, missing trade-offs, and whether you ever asked a clarifying question.</li>
</ul>
<p><b>When to use:</b> after Day 29, and again the day before a real interview. <b>When not:</b> do not use it to learn a topic for the first time; go back to the day's lesson, then return.</p>`,
        hi: `<p><b>Analogy:</b> शादी के function से पहले final rehearsal। Hall, music और timing एक साथ test होते हैं, एक-एक करके नहीं।</p>
<ul>
<li><b>Round A, system design, real interview में 45 मिनट।</b> Day 17 का framework use करो: clarify, estimate, API, data model, high-level design, deep dives, trade-offs। इस mock में हर prompt को लगभग 8 मिनट दो: 2 clarify और estimate के लिए, 4 draw और explain के लिए, 2 trade-offs के लिए।</li>
<li><b>Round B, leadership और behavioral, 30 मिनट।</b> Day 28 का STAR use करो: Situation, Task, Action, Result। <b>अपनी real story</b> सुनाओ; यहाँ के samples सिर्फ़ shape हैं, हर [placeholder] बदल दो।</li>
<li><b>Round C, AI round, 15 मिनट।</b> Day 27 use करो: AI as leverage, grounding, validation, cost, safety। Honest रहो कि आपने क्या build किया है और क्या सिर्फ़ पढ़ा है।</li>
<li><b>हर सवाल को 0 से 2 score दो:</b> 2 = साफ़ structure, trade-off बताया, example दिया; 1 = आधा सही या भटका हुआ; 0 = खाली या ग़लत। किसी round का average 1.5 से कम हो तो वो day revise करो और 48 घंटे में retest करो।</li>
<li><b>एक बार phone पर record करो।</b> सुनो कि filler words कितने हैं, trade-offs छूटे या नहीं, और आपने कभी clarifying सवाल पूछा या नहीं।</li>
</ul>
<p><b>कब use करें:</b> Day 29 के बाद, और real interview से एक दिन पहले। <b>कब नहीं:</b> किसी topic को पहली बार सीखने के लिए नहीं; उस day के lesson पर वापस जाओ, फिर लौटो।</p>`,
        hg: `<p><b>Analogy:</b> shaadi ke function se pehle final rehearsal. Hall, music aur timing ek saath test hote hain, ek-ek karke nahi.</p>
<ul>
<li><b>Round A, system design, real interview mein 45 minute.</b> Day 17 ka framework use karo: clarify, estimate, API, data model, high-level design, deep dives, trade-offs. Is mock mein har prompt ko lagbhag 8 minute do: 2 clarify aur estimate ke liye, 4 draw aur explain ke liye, 2 trade-offs ke liye.</li>
<li><b>Round B, leadership aur behavioral, 30 minute.</b> Day 28 ka STAR use karo: Situation, Task, Action, Result. <b>Apni real story</b> sunao; yahan ke samples sirf shape hain, har [placeholder] badal do.</li>
<li><b>Round C, AI round, 15 minute.</b> Day 27 use karo: AI as leverage, grounding, validation, cost, safety. Honest raho ki aapne kya build kiya hai aur kya sirf padha hai.</li>
<li><b>Har sawaal ko 0 se 2 score do:</b> 2 = saaf structure, trade-off bataya, example diya; 1 = aadha sahi ya bhatka hua; 0 = khaali ya galat. Kisi round ka average 1.5 se kam ho to woh day revise karo aur 48 ghante mein retest karo.</li>
<li><b>Ek baar phone par record karo.</b> Suno ki filler words kitne hain, trade-offs chhoote ya nahi, aur aapne kabhi clarifying sawaal poochha ya nahi.</li>
</ul>
<p><b>Kab use karein:</b> Day 29 ke baad, aur real interview se ek din pehle. <b>Kab nahi:</b> kisi topic ko pehli baar seekhne ke liye nahi; us day ke lesson par wapas jao, phir lautao.</p>`
      }
    },
    {
      id: "cheat-week1",
      depth: "short",
      title: { en: "Cheat sheet — Week 1 (C#, LINQ, EF Core)", hi: "Cheat sheet — हफ़्ता 1 (C#, LINQ, EF Core)", hg: "Cheat sheet — Hafta 1 (C#, LINQ, EF Core)" },
      body: {
        en: `<p><b>Analogy:</b> the revision card you flip through in the auto on the way to the interview. One line per fact; the day number tells you where to go deeper.</p>
<ul>
<li><b>Polymorphism:</b> <code>override</code> follows the object, <code>new</code> follows the reference (Day 1).</li>
<li><b>Abstract class vs interface:</b> shared code and state with one base, or a contract you can implement many times; default interface methods are callable only through the interface type (Day 1).</li>
<li><b>Value vs reference:</b> a value type copies the data, a reference type copies the reference; boxing is a heap copy (Day 2).</li>
<li><b>Strings:</b> immutable, so use <code>StringBuilder</code> in loops and compare with <code>==</code> or <code>StringComparison.Ordinal</code>, not by reference (Day 2).</li>
<li><b>async/await:</b> not multithreading; it frees the thread while you wait. <code>.Result</code> and <code>.Wait()</code> can deadlock UI apps and starve the pool; ASP.NET Core has no SynchronizationContext (Day 3).</li>
<li><b>Exceptions:</b> <code>throw;</code> keeps the stack trace, <code>throw ex;</code> resets it (Day 3).</li>
<li><b>LINQ:</b> a query runs only when enumerated, and again at every enumeration; <code>IQueryable</code> becomes SQL, but after <code>ToList()</code> it is all in memory (Day 4).</li>
<li><b>DbContext:</b> Scoped, short-lived, not thread-safe; in production run migrations through an idempotent script or a bundle, not <code>Migrate()</code> at startup on many instances (Day 5).</li>
<li><b>N+1 and SQL:</b> count the queries and read the SQL; <code>FromSql($"...")</code> parameterises, <code>FromSqlRaw</code> with concatenation is injection; <code>ExecuteUpdate</code> bypasses the change tracker (Day 6).</li>
<li><b>Concurrency:</b> a rowversion goes into the UPDATE's WHERE; 0 rows affected means <code>DbUpdateConcurrencyException</code> (Day 6).</li>
</ul>
<p><b>When to use:</b> the night before and the morning of the interview. <b>When not:</b> as a first read of a topic; open the day instead.</p>`,
        hi: `<p><b>Analogy:</b> वो revision card जो आप interview जाते वक़्त auto में पलटते हो। हर fact एक line में; day number बताता है कि गहराई में कहाँ जाना है।</p>
<ul>
<li><b>Polymorphism:</b> <code>override</code> object को follow करता है, <code>new</code> reference को (Day 1)।</li>
<li><b>Abstract class vs interface:</b> एक base के साथ shared code और state, या ऐसा contract जो आप कई बार implement कर सकते हो; default interface methods सिर्फ़ interface type से बुलाए जा सकते हैं (Day 1)।</li>
<li><b>Value vs reference:</b> value type data की copy करता है, reference type reference की; boxing heap पर copy है (Day 2)।</li>
<li><b>Strings:</b> immutable हैं, इसलिए loops में <code>StringBuilder</code> use करो और <code>==</code> या <code>StringComparison.Ordinal</code> से compare करो, reference से नहीं (Day 2)।</li>
<li><b>async/await:</b> multithreading नहीं है; wait के दौरान thread को free करता है। <code>.Result</code> और <code>.Wait()</code> UI apps में deadlock कर सकते हैं और pool को starve कर सकते हैं; ASP.NET Core में SynchronizationContext नहीं है (Day 3)।</li>
<li><b>Exceptions:</b> <code>throw;</code> stack trace रखता है, <code>throw ex;</code> उसे reset कर देता है (Day 3)।</li>
<li><b>LINQ:</b> query तभी चलती है जब enumerate हो, और हर enumeration पर दोबारा चलती है; <code>IQueryable</code> SQL बनता है, पर <code>ToList()</code> के बाद सब memory में चलता है (Day 4)।</li>
<li><b>DbContext:</b> Scoped, short-lived, thread-safe नहीं; production में migrations idempotent script या bundle से चलाओ, कई instances पर startup में <code>Migrate()</code> से नहीं (Day 5)।</li>
<li><b>N+1 और SQL:</b> queries गिनो और SQL पढ़ो; <code>FromSql($"...")</code> parameter बनाता है, concatenation वाला <code>FromSqlRaw</code> injection है; <code>ExecuteUpdate</code> change tracker को bypass करता है (Day 6)।</li>
<li><b>Concurrency:</b> rowversion UPDATE के WHERE में जाता है; 0 rows affected का मतलब <code>DbUpdateConcurrencyException</code> (Day 6)।</li>
</ul>
<p><b>कब use करें:</b> interview से पहली रात और सुबह। <b>कब नहीं:</b> किसी topic को पहली बार पढ़ने के लिए; उसके लिए वो day खोलो।</p>`,
        hg: `<p><b>Analogy:</b> woh revision card jo aap interview jaate waqt auto mein palatte ho. Har fact ek line mein; day number batata hai ki gehraai mein kahan jaana hai.</p>
<ul>
<li><b>Polymorphism:</b> <code>override</code> object ko follow karta hai, <code>new</code> reference ko (Day 1).</li>
<li><b>Abstract class vs interface:</b> ek base ke saath shared code aur state, ya aisa contract jo aap kai baar implement kar sakte ho; default interface methods sirf interface type se bulaye ja sakte hain (Day 1).</li>
<li><b>Value vs reference:</b> value type data ki copy karta hai, reference type reference ki; boxing heap par copy hai (Day 2).</li>
<li><b>Strings:</b> immutable hain, isliye loops mein <code>StringBuilder</code> use karo aur <code>==</code> ya <code>StringComparison.Ordinal</code> se compare karo, reference se nahi (Day 2).</li>
<li><b>async/await:</b> multithreading nahi hai; wait ke dauran thread ko free karta hai. <code>.Result</code> aur <code>.Wait()</code> UI apps mein deadlock kar sakte hain aur pool ko starve kar sakte hain; ASP.NET Core mein SynchronizationContext nahi hai (Day 3).</li>
<li><b>Exceptions:</b> <code>throw;</code> stack trace rakhta hai, <code>throw ex;</code> use reset kar deta hai (Day 3).</li>
<li><b>LINQ:</b> query tabhi chalti hai jab enumerate ho, aur har enumeration par dobara chalti hai; <code>IQueryable</code> SQL banta hai, par <code>ToList()</code> ke baad sab memory mein chalta hai (Day 4).</li>
<li><b>DbContext:</b> Scoped, short-lived, thread-safe nahi; production mein migrations idempotent script ya bundle se chalao, kai instances par startup mein <code>Migrate()</code> se nahi (Day 5).</li>
<li><b>N+1 aur SQL:</b> queries gino aur SQL padho; <code>FromSql($"...")</code> parameter banata hai, concatenation wala <code>FromSqlRaw</code> injection hai; <code>ExecuteUpdate</code> change tracker ko bypass karta hai (Day 6).</li>
<li><b>Concurrency:</b> rowversion UPDATE ke WHERE mein jata hai; 0 rows affected ka matlab <code>DbUpdateConcurrencyException</code> (Day 6).</li>
</ul>
<p><b>Kab use karein:</b> interview se pehli raat aur subah. <b>Kab nahi:</b> kisi topic ko pehli baar padhne ke liye; uske liye woh day kholo.</p>`
      }
    },
    {
      id: "cheat-week2",
      depth: "short",
      title: { en: "Cheat sheet — Week 2 (SOLID, patterns, ASP.NET Core, Web API)", hi: "Cheat sheet — हफ़्ता 2 (SOLID, patterns, ASP.NET Core, Web API)", hg: "Cheat sheet — Hafta 2 (SOLID, patterns, ASP.NET Core, Web API)" },
      body: {
        en: `<p><b>Analogy:</b> the same railway-ticket card, week two. Short facts, each with the day to open if it feels shaky.</p>
<ul>
<li><b>SOLID:</b> five habits that make change cheap, guidelines and not laws; DIP is the principle, DI the technique, the container the tool (Day 8).</li>
<li><b>DI resolution:</b> the last registration wins for one service, <code>IEnumerable&lt;T&gt;</code> gets all of them in registration order (Day 8).</li>
<li><b>Captive dependency:</b> a long-lived service holding a short-lived one; <code>ValidateScopes</code> catches singleton to scoped, not singleton to transient (Days 11, 14).</li>
<li><b>Patterns:</b> add one only when you can name the pain it removes; Decorator, Proxy and Adapter share a shape but differ in intent (Days 9, 10).</li>
<li><b>Repository and CQRS:</b> <code>DbSet</code> is already a repository and <code>DbContext</code> a unit of work; CQRS does not need two databases; MediatR is under a commercial licence since 2025, so check its terms (Day 11).</li>
<li><b>Middleware:</b> code before <code>next</code> runs in order, code after runs in reverse; a short-circuit means not calling <code>next</code> (Day 12).</li>
<li><b>Configuration:</b> the last source wins (appsettings, environment file, user secrets in Development, environment variables, command line); the environment defaults to Production (Day 12).</li>
<li><b>HTTP semantics:</b> idempotent means GET, HEAD, OPTIONS, PUT, DELETE; POST is not, PATCH is not guaranteed; 201 with Location after create; 401 not authenticated, 403 not allowed (Day 13).</li>
<li><b>API errors:</b> <code>[ApiController]</code> gives an automatic 400 with ProblemDetails; rate limiting rejects with 503 by default, so set <code>RejectionStatusCode</code> to 429 (Day 13).</li>
<li><b>Security basics:</b> a JWT is signed, not encrypted; CORS is enforced by browsers only; <code>IHttpClientFactory</code> with <code>AddStandardResilienceHandler</code>, and no retries on POST (Day 13).</li>
</ul>
<p><b>When to use:</b> the night before and the morning of the interview. <b>When not:</b> as a first read of a topic; open the day instead.</p>`,
        hi: `<p><b>Analogy:</b> वही railway-ticket वाला card, दूसरा हफ़्ता। छोटे facts, हर एक के साथ वो day जो शक होने पर खोलना है।</p>
<ul>
<li><b>SOLID:</b> पाँच habits जो change को सस्ता बनाती हैं, guidelines हैं laws नहीं; DIP principle है, DI technique, और container tool (Day 8)।</li>
<li><b>DI resolution:</b> एक service के लिए आख़िरी registration जीतता है, <code>IEnumerable&lt;T&gt;</code> सबको registration order में देता है (Day 8)।</li>
<li><b>Captive dependency:</b> long-lived service जो short-lived को पकड़े रखे; <code>ValidateScopes</code> singleton से scoped पकड़ता है, singleton से transient नहीं (Days 11, 14)।</li>
<li><b>Patterns:</b> तभी जोड़ो जब उस pain का नाम ले सको जो वो हटाता है; Decorator, Proxy और Adapter का shape एक है पर intent अलग (Days 9, 10)।</li>
<li><b>Repository और CQRS:</b> <code>DbSet</code> पहले से repository है और <code>DbContext</code> unit of work; CQRS को दो databases नहीं चाहिए; MediatR 2025 से commercial licence में है, इसलिए terms check करो (Day 11)।</li>
<li><b>Middleware:</b> <code>next</code> से पहले का code order में चलता है, बाद का code उल्टे order में; short-circuit मतलब <code>next</code> को न बुलाना (Day 12)।</li>
<li><b>Configuration:</b> आख़िरी source जीतता है (appsettings, environment file, Development में user secrets, environment variables, command line); environment default में Production होता है (Day 12)।</li>
<li><b>HTTP semantics:</b> idempotent मतलब GET, HEAD, OPTIONS, PUT, DELETE; POST नहीं है, PATCH की guarantee नहीं; create के बाद 201 और Location; 401 not authenticated, 403 not allowed (Day 13)।</li>
<li><b>API errors:</b> <code>[ApiController]</code> ProblemDetails के साथ automatic 400 देता है; rate limiting default में 503 से reject करता है, इसलिए <code>RejectionStatusCode</code> को 429 set करो (Day 13)।</li>
<li><b>Security basics:</b> JWT signed है, encrypted नहीं; CORS सिर्फ़ browsers लागू करते हैं; <code>IHttpClientFactory</code> के साथ <code>AddStandardResilienceHandler</code>, और POST पर retries नहीं (Day 13)।</li>
</ul>
<p><b>कब use करें:</b> interview से पहली रात और सुबह। <b>कब नहीं:</b> किसी topic को पहली बार पढ़ने के लिए; उसके लिए वो day खोलो।</p>`,
        hg: `<p><b>Analogy:</b> wahi railway-ticket wala card, doosra hafta. Chhote facts, har ek ke saath woh day jo shak hone par kholna hai.</p>
<ul>
<li><b>SOLID:</b> paanch habits jo change ko sasta banati hain, guidelines hain laws nahi; DIP principle hai, DI technique, aur container tool (Day 8).</li>
<li><b>DI resolution:</b> ek service ke liye aakhri registration jeetta hai, <code>IEnumerable&lt;T&gt;</code> sabko registration order mein deta hai (Day 8).</li>
<li><b>Captive dependency:</b> long-lived service jo short-lived ko pakde rahe; <code>ValidateScopes</code> singleton se scoped pakadta hai, singleton se transient nahi (Days 11, 14).</li>
<li><b>Patterns:</b> tabhi jodo jab us pain ka naam le sako jo woh hatata hai; Decorator, Proxy aur Adapter ka shape ek hai par intent alag (Days 9, 10).</li>
<li><b>Repository aur CQRS:</b> <code>DbSet</code> pehle se repository hai aur <code>DbContext</code> unit of work; CQRS ko do databases nahi chahiye; MediatR 2025 se commercial licence mein hai, isliye terms check karo (Day 11).</li>
<li><b>Middleware:</b> <code>next</code> se pehle ka code order mein chalta hai, baad ka code ulte order mein; short-circuit matlab <code>next</code> ko na bulana (Day 12).</li>
<li><b>Configuration:</b> aakhri source jeetta hai (appsettings, environment file, Development mein user secrets, environment variables, command line); environment default mein Production hota hai (Day 12).</li>
<li><b>HTTP semantics:</b> idempotent matlab GET, HEAD, OPTIONS, PUT, DELETE; POST nahi hai, PATCH ki guarantee nahi; create ke baad 201 aur Location; 401 not authenticated, 403 not allowed (Day 13).</li>
<li><b>API errors:</b> <code>[ApiController]</code> ProblemDetails ke saath automatic 400 deta hai; rate limiting default mein 503 se reject karta hai, isliye <code>RejectionStatusCode</code> ko 429 set karo (Day 13).</li>
<li><b>Security basics:</b> JWT signed hai, encrypted nahi; CORS sirf browsers lagu karte hain; <code>IHttpClientFactory</code> ke saath <code>AddStandardResilienceHandler</code>, aur POST par retries nahi (Day 13).</li>
</ul>
<p><b>Kab use karein:</b> interview se pehli raat aur subah. <b>Kab nahi:</b> kisi topic ko pehli baar padhne ke liye; uske liye woh day kholo.</p>`
      }
    },
    {
      id: "cheat-week3",
      depth: "short",
      title: { en: "Cheat sheet — Week 3 (architecture, design, data, Azure, DevOps)", hi: "Cheat sheet — हफ़्ता 3 (architecture, design, data, Azure, DevOps)", hg: "Cheat sheet — Hafta 3 (architecture, design, data, Azure, DevOps)" },
      body: {
        en: `<p><b>Analogy:</b> the same card, week three: the big-picture week, so the facts are about choices and limits.</p>
<ul>
<li><b>Architecture:</b> source-code dependencies point inward and inner layers own the interfaces; for a small CRUD app, Clean Architecture is usually over-engineering (Day 15).</li>
<li><b>DDD basics:</b> an entity is equal by Id, a value object by its values; the aggregate root guards the invariants and is one transaction boundary (Day 15).</li>
<li><b>Microservices:</b> a distributed monolith has the costs without the independence; database per service; async messaging brings eventual consistency (Day 16).</li>
<li><b>Messaging:</b> brokers usually deliver at-least-once, so consumers must be idempotent; use an outbox for the event and a saga with compensations instead of a distributed transaction (Day 16).</li>
<li><b>System design:</b> clarify, estimate, API, data model, design, deep dives, trade-offs; QPS = requests per day / 86,400, peak about 2 to 3 times; scale a database as indexes, cache, replicas, then shards (Day 17).</li>
<li><b>SQL Server:</b> keep the column bare in WHERE; <code>NOT IN</code> with one NULL returns nothing; a WHERE on the right table of a LEFT JOIN makes it an inner join; parameter sniffing is a trade-off (Day 18).</li>
<li><b>PostgreSQL:</b> MVCC keeps old row versions until VACUUM; <code>MERGE</code> arrived in Postgres 15 and its <code>RETURNING</code> in 17; each connection is a process, so size the pool (Day 19).</li>
<li><b>Azure messaging:</b> Service Bus for business commands, Event Grid for event notifications, Event Hubs for high-volume streams; peek-lock defaults are a 1-minute lock and 10 deliveries (Day 20).</li>
<li><b>Azure identity and hosting:</b> prefer a Managed Identity over any secret; in-process Azure Functions support ends on 10 November 2026, so use the isolated worker model (Day 20).</li>
<li><b>Git and pipelines:</b> merge keeps history, rebase rewrites it, so rebase only unshared commits; build once and deploy the same artifact everywhere; run containers as non-root (Day 21).</li>
</ul>
<p><b>When to use:</b> the night before and the morning of the interview. <b>When not:</b> as a first read of a topic; open the day instead.</p>`,
        hi: `<p><b>Analogy:</b> वही card, तीसरा हफ़्ता: big-picture वाला हफ़्ता, इसलिए facts choices और limits के बारे में हैं।</p>
<ul>
<li><b>Architecture:</b> source-code dependencies अंदर की तरफ़ जाती हैं और inner layers interfaces के मालिक हैं; छोटे CRUD app के लिए Clean Architecture आम तौर पर over-engineering है (Day 15)।</li>
<li><b>DDD basics:</b> entity Id से equal होती है, value object अपनी values से; aggregate root invariants की रखवाली करता है और एक transaction की boundary है (Day 15)।</li>
<li><b>Microservices:</b> distributed monolith में costs आते हैं, independence नहीं; database per service; async messaging से eventual consistency आती है (Day 16)।</li>
<li><b>Messaging:</b> brokers आम तौर पर at-least-once deliver करते हैं, इसलिए consumers idempotent हों; event के लिए outbox और distributed transaction की जगह compensations वाला saga (Day 16)।</li>
<li><b>System design:</b> clarify, estimate, API, data model, design, deep dives, trade-offs; QPS = requests per day / 86,400, peak लगभग 2 से 3 गुना; database ऐसे scale करो: indexes, cache, replicas, फिर shards (Day 17)।</li>
<li><b>SQL Server:</b> WHERE में column को bare रखो; एक NULL हो तो <code>NOT IN</code> कुछ नहीं लौटाता; LEFT JOIN की right table पर WHERE उसे inner join बना देता है; parameter sniffing एक trade-off है (Day 18)।</li>
<li><b>PostgreSQL:</b> MVCC पुराने row versions VACUUM तक रखता है; <code>MERGE</code> Postgres 15 में आया और उसका <code>RETURNING</code> 17 में; हर connection एक process है, इसलिए pool का size सोचो (Day 19)।</li>
<li><b>Azure messaging:</b> business commands के लिए Service Bus, event notifications के लिए Event Grid, high-volume streams के लिए Event Hubs; peek-lock के defaults 1 मिनट का lock और 10 deliveries हैं (Day 20)।</li>
<li><b>Azure identity और hosting:</b> किसी भी secret से बेहतर Managed Identity; in-process Azure Functions का support 10 November 2026 को ख़त्म होता है, इसलिए isolated worker model use करो (Day 20)।</li>
<li><b>Git और pipelines:</b> merge history रखता है, rebase उसे rewrite करता है, इसलिए सिर्फ़ unshared commits rebase करो; एक बार build करो और वही artifact हर जगह deploy करो; containers non-root चलाओ (Day 21)।</li>
</ul>
<p><b>कब use करें:</b> interview से पहली रात और सुबह। <b>कब नहीं:</b> किसी topic को पहली बार पढ़ने के लिए; उसके लिए वो day खोलो।</p>`,
        hg: `<p><b>Analogy:</b> wahi card, teesra hafta: big-picture wala hafta, isliye facts choices aur limits ke baare mein hain.</p>
<ul>
<li><b>Architecture:</b> source-code dependencies andar ki taraf jaati hain aur inner layers interfaces ke maalik hain; chhote CRUD app ke liye Clean Architecture aam taur par over-engineering hai (Day 15).</li>
<li><b>DDD basics:</b> entity Id se equal hoti hai, value object apni values se; aggregate root invariants ki rakhwali karta hai aur ek transaction ki boundary hai (Day 15).</li>
<li><b>Microservices:</b> distributed monolith mein costs aate hain, independence nahi; database per service; async messaging se eventual consistency aati hai (Day 16).</li>
<li><b>Messaging:</b> brokers aam taur par at-least-once deliver karte hain, isliye consumers idempotent hon; event ke liye outbox aur distributed transaction ki jagah compensations wala saga (Day 16).</li>
<li><b>System design:</b> clarify, estimate, API, data model, design, deep dives, trade-offs; QPS = requests per day / 86,400, peak lagbhag 2 se 3 guna; database aise scale karo: indexes, cache, replicas, phir shards (Day 17).</li>
<li><b>SQL Server:</b> WHERE mein column ko bare rakho; ek NULL ho to <code>NOT IN</code> kuch nahi lautata; LEFT JOIN ki right table par WHERE use inner join bana deta hai; parameter sniffing ek trade-off hai (Day 18).</li>
<li><b>PostgreSQL:</b> MVCC purane row versions VACUUM tak rakhta hai; <code>MERGE</code> Postgres 15 mein aaya aur uska <code>RETURNING</code> 17 mein; har connection ek process hai, isliye pool ka size socho (Day 19).</li>
<li><b>Azure messaging:</b> business commands ke liye Service Bus, event notifications ke liye Event Grid, high-volume streams ke liye Event Hubs; peek-lock ke defaults 1 minute ka lock aur 10 deliveries hain (Day 20).</li>
<li><b>Azure identity aur hosting:</b> kisi bhi secret se behtar Managed Identity; in-process Azure Functions ka support 10 November 2026 ko khatam hota hai, isliye isolated worker model use karo (Day 20).</li>
<li><b>Git aur pipelines:</b> merge history rakhta hai, rebase use rewrite karta hai, isliye sirf unshared commits rebase karo; ek baar build karo aur wahi artifact har jagah deploy karo; containers non-root chalao (Day 21).</li>
</ul>
<p><b>Kab use karein:</b> interview se pehli raat aur subah. <b>Kab nahi:</b> kisi topic ko pehli baar padhne ke liye; uske liye woh day kholo.</p>`
      }
    },
    {
      id: "cheat-week4",
      depth: "short",
      title: { en: "Cheat sheet — Week 4 (legacy, JS, testing, security, AI, leadership)", hi: "Cheat sheet — हफ़्ता 4 (legacy, JS, testing, security, AI, leadership)", hg: "Cheat sheet — Hafta 4 (legacy, JS, testing, security, AI, leadership)" },
      body: {
        en: `<p><b>Analogy:</b> the same card, week four: the facts that separate a senior developer from a Tech Lead answer.</p>
<ul>
<li><b>Legacy migration:</b> <code>HttpContext.Current</code> has no equivalent, so pass values as parameters; for big live apps migrate incrementally with ASP.NET Core in front, YARP and System.Web adapters (Day 22).</li>
<li><b>Upgrade tooling:</b> the docs say .NET Upgrade Assistant is deprecated and point to the GitHub Copilot upgrade agent; WCF server needs CoreWCF, or gRPC and HTTP when you control the clients (Day 22).</li>
<li><b>JavaScript:</b> prefer <code>const</code>, then <code>let</code>; use <code>===</code>; <code>??</code> falls back only for null and undefined; event loop order is sync code, all microtasks, then one macrotask (Day 23).</li>
<li><b>fetch:</b> it rejects only on network failure, so check <code>res.ok</code> for 404 and 500 (Day 23).</li>
<li><b>React:</b> props are read-only, state is a snapshot per render, never mutate state, use stable keys, and give <code>useEffect</code> every dependency plus a cleanup (Day 24).</li>
<li><b>Testing:</b> test a real engine for EF Core code, such as Testcontainers; inject <code>TimeProvider</code>; FluentAssertions v8 and later need a paid licence for commercial use; Moq 4.20.0 shipped SponsorLink and 4.20.2 removed it (Day 25).</li>
<li><b>Security:</b> OWASP Top 10 current release is 2025; send values as parameters; logged in is not enough, check ownership (IDOR); CSRF needs a cookie the browser sends by itself (Day 26).</li>
<li><b>Passwords and SSRF:</b> use the Identity <code>PasswordHasher</code>, never MD5, SHA1 or plain SHA256; stop SSRF with a parsed-host allow-list and a private-address check (Day 26).</li>
<li><b>Performance:</b> measure first; thread-pool starvation means blocked threads and low CPU, so go async all the way; keyset paging for big changing lists (Day 26).</li>
<li><b>AI:</b> AI is leverage and you stay accountable; treat output like a junior's pull request; tool arguments are untrusted input; a denylist alone does not stop prompt injection (Day 27).</li>
<li><b>Leadership:</b> STAR with most time on your action; an estimate is a range with assumptions, PERT is (O + 4M + P) / 6; say "yes, if" and keep post-mortems blameless (Day 28).</li>
</ul>
<p><b>When to use:</b> the night before and the morning of the interview. <b>When not:</b> as a first read of a topic; open the day instead.</p>`,
        hi: `<p><b>Analogy:</b> वही card, चौथा हफ़्ता: वो facts जो senior developer और Tech Lead के answer में फ़र्क़ करते हैं।</p>
<ul>
<li><b>Legacy migration:</b> <code>HttpContext.Current</code> का कोई equivalent नहीं है, इसलिए values को parameters में पास करो; बड़े live apps को incrementally migrate करो: आगे ASP.NET Core, साथ में YARP और System.Web adapters (Day 22)।</li>
<li><b>Upgrade tooling:</b> docs कहते हैं कि .NET Upgrade Assistant deprecated है और GitHub Copilot upgrade agent की तरफ़ इशारा करते हैं; WCF server के लिए CoreWCF, या जब clients आपके control में हों तो gRPC और HTTP (Day 22)।</li>
<li><b>JavaScript:</b> पहले <code>const</code>, फिर <code>let</code>; <code>===</code> use करो; <code>??</code> सिर्फ़ null और undefined पर fallback देता है; event loop order है: sync code, सारे microtasks, फिर एक macrotask (Day 23)।</li>
<li><b>fetch:</b> यह सिर्फ़ network failure पर reject होता है, इसलिए 404 और 500 के लिए <code>res.ok</code> check करो (Day 23)।</li>
<li><b>React:</b> props read-only हैं, state हर render का snapshot है, state को कभी mutate मत करो, stable keys use करो, और <code>useEffect</code> को हर dependency दो और cleanup भी (Day 24)।</li>
<li><b>Testing:</b> EF Core code के लिए real engine पर test करो, जैसे Testcontainers; <code>TimeProvider</code> inject करो; FluentAssertions v8 और बाद के versions को commercial use के लिए paid licence चाहिए; Moq 4.20.0 में SponsorLink आया और 4.20.2 में हटा (Day 25)।</li>
<li><b>Security:</b> OWASP Top 10 का current release 2025 है; values को parameters में भेजो; logged in होना काफ़ी नहीं, ownership check करो (IDOR); CSRF को ऐसा cookie चाहिए जो browser अपने आप भेजे (Day 26)।</li>
<li><b>Passwords और SSRF:</b> Identity <code>PasswordHasher</code> use करो, MD5, SHA1 या plain SHA256 कभी नहीं; SSRF को parsed-host allow-list और private-address check से रोको (Day 26)।</li>
<li><b>Performance:</b> पहले measure करो; thread-pool starvation का मतलब blocked threads और low CPU, इसलिए async all the way; बड़ी बदलती lists के लिए keyset paging (Day 26)।</li>
<li><b>AI:</b> AI leverage है और जवाबदेही आपकी रहती है; output को junior के pull request की तरह देखो; tool arguments untrusted input हैं; सिर्फ़ denylist prompt injection नहीं रोकती (Day 27)।</li>
<li><b>Leadership:</b> STAR में ज़्यादातर समय अपने action पर; estimate assumptions के साथ एक range है, PERT है (O + 4M + P) / 6; "yes, if" बोलो और post-mortems blameless रखो (Day 28)।</li>
</ul>
<p><b>कब use करें:</b> interview से पहली रात और सुबह। <b>कब नहीं:</b> किसी topic को पहली बार पढ़ने के लिए; उसके लिए वो day खोलो।</p>`,
        hg: `<p><b>Analogy:</b> wahi card, chautha hafta: woh facts jo senior developer aur Tech Lead ke answer mein farq karte hain.</p>
<ul>
<li><b>Legacy migration:</b> <code>HttpContext.Current</code> ka koi equivalent nahi hai, isliye values ko parameters mein pass karo; bade live apps ko incrementally migrate karo: aage ASP.NET Core, saath mein YARP aur System.Web adapters (Day 22).</li>
<li><b>Upgrade tooling:</b> docs kehte hain ki .NET Upgrade Assistant deprecated hai aur GitHub Copilot upgrade agent ki taraf ishaara karte hain; WCF server ke liye CoreWCF, ya jab clients aapke control mein hon to gRPC aur HTTP (Day 22).</li>
<li><b>JavaScript:</b> pehle <code>const</code>, phir <code>let</code>; <code>===</code> use karo; <code>??</code> sirf null aur undefined par fallback deta hai; event loop order hai: sync code, saare microtasks, phir ek macrotask (Day 23).</li>
<li><b>fetch:</b> yeh sirf network failure par reject hota hai, isliye 404 aur 500 ke liye <code>res.ok</code> check karo (Day 23).</li>
<li><b>React:</b> props read-only hain, state har render ka snapshot hai, state ko kabhi mutate mat karo, stable keys use karo, aur <code>useEffect</code> ko har dependency do aur cleanup bhi (Day 24).</li>
<li><b>Testing:</b> EF Core code ke liye real engine par test karo, jaise Testcontainers; <code>TimeProvider</code> inject karo; FluentAssertions v8 aur baad ke versions ko commercial use ke liye paid licence chahiye; Moq 4.20.0 mein SponsorLink aaya aur 4.20.2 mein hata (Day 25).</li>
<li><b>Security:</b> OWASP Top 10 ka current release 2025 hai; values ko parameters mein bhejo; logged in hona kaafi nahi, ownership check karo (IDOR); CSRF ko aisa cookie chahiye jo browser apne aap bheje (Day 26).</li>
<li><b>Passwords aur SSRF:</b> Identity <code>PasswordHasher</code> use karo, MD5, SHA1 ya plain SHA256 kabhi nahi; SSRF ko parsed-host allow-list aur private-address check se roko (Day 26).</li>
<li><b>Performance:</b> pehle measure karo; thread-pool starvation ka matlab blocked threads aur low CPU, isliye async all the way; badi badalti lists ke liye keyset paging (Day 26).</li>
<li><b>AI:</b> AI leverage hai aur jawabdehi aapki rehti hai; output ko junior ke pull request ki tarah dekho; tool arguments untrusted input hain; sirf denylist prompt injection nahi rokti (Day 27).</li>
<li><b>Leadership:</b> STAR mein zyadatar samay apne action par; estimate assumptions ke saath ek range hai, PERT hai (O + 4M + P) / 6; "yes, if" bolo aur post-mortems blameless rakho (Day 28).</li>
</ul>
<p><b>Kab use karein:</b> interview se pehli raat aur subah. <b>Kab nahi:</b> kisi topic ko pehli baar padhne ke liye; uske liye woh day kholo.</p>`
      }
    },
    {
      id: "interview-day-checklist",
      depth: "short",
      title: { en: "Interview-day checklist", hi: "Interview वाले दिन की checklist", hg: "Interview wale din ki checklist" },
      body: {
        en: `<p><b>Analogy:</b> packing the bag before a train journey. You do not decide what to carry at the station; you check the list the night before.</p>
<ul>
<li><b>Night before:</b> sleep on time. Charge the laptop and phone. Read the one-page cheat sheets once and the "if you remember only 10 things" list. Re-read your own STAR stories. Do <b>not</b> start a new topic.</li>
<li><b>Morning:</b> eat something light, drink water, and revise for 30 minutes at most. Say your "tell me about yourself" aloud once. Reach the venue or the call 10 minutes early.</li>
<li><b>Tech setup for an online round:</b> stable internet with a phone hotspot as backup, laptop on charger, headphones with a mic, camera at eye level, a quiet room. Close chat apps and mute notifications. Test the meeting link and screen sharing. Keep a blank console project open in case they ask for code.</li>
<li><b>During the interview:</b> clarify the question first, think aloud, give a structure, name the trade-off. Check the time. If you do not know, say how you would find out; never guess confidently. Ask for a hint politely rather than going silent.</li>
<li><b>Questions to ask them:</b> how is the team structured and who does the Tech Lead report to? How are technical decisions made? What does the release and on-call process look like? How much of the Tech Lead role is hands-on? What would success look like in the first 6 months?</li>
<li><b>After the interview:</b> the same day, write down every question you stumbled on and add it to your "Revise Day N" list. Send a short thank-you note. Do not replay the whole interview in your head; note, learn, move on.</li>
</ul>
<p><b>When to use:</b> before every real round. <b>When not:</b> if you are tempted to cram a new topic in the last hour; use that hour to rest.</p>`,
        hi: `<p><b>Analogy:</b> train के सफ़र से पहले bag pack करना। क्या ले जाना है, यह station पर तय नहीं होता; list रात को ही check कर लेते हैं।</p>
<ul>
<li><b>पिछली रात:</b> समय पर सो जाओ। Laptop और phone charge करो। One-page cheat sheets एक बार और "if you remember only 10 things" list पढ़ो। अपनी STAR stories दोबारा पढ़ो। नया topic <b>शुरू मत</b> करो।</li>
<li><b>सुबह:</b> हल्का खाओ, पानी पियो, और revision ज़्यादा से ज़्यादा 30 मिनट। "Tell me about yourself" एक बार ज़ोर से बोलो। Venue या call पर 10 मिनट पहले पहुँचो।</li>
<li><b>Online round का tech setup:</b> stable internet और backup के लिए phone hotspot, laptop charger पर, mic वाले headphones, camera eye level पर, शांत कमरा। Chat apps बंद करो और notifications mute करो। Meeting link और screen sharing test करो। Code माँगें तो खाली console project खुला रखो।</li>
<li><b>Interview के दौरान:</b> पहले सवाल clarify करो, ज़ोर से सोचो, structure दो, trade-off बताओ। Time देखते रहो। जवाब न आता हो तो बताओ कि आप कैसे पता करोगे; पूरे यक़ीन से guess मत करो। चुप होने की जगह politely hint माँगो।</li>
<li><b>उनसे पूछने वाले सवाल:</b> team कैसे structured है और Tech Lead किसे report करता है? Technical decisions कैसे लिए जाते हैं? Release और on-call process कैसा है? Tech Lead role का कितना हिस्सा hands-on है? पहले 6 महीनों में success कैसी दिखेगी?</li>
<li><b>Interview के बाद:</b> उसी दिन हर वो सवाल लिख लो जहाँ अटके और उसे अपनी "Revise Day N" list में जोड़ो। छोटा thank-you note भेजो। पूरे interview को बार-बार दिमाग़ में replay मत करो; note करो, सीखो, आगे बढ़ो।</li>
</ul>
<p><b>कब use करें:</b> हर real round से पहले। <b>कब नहीं:</b> अगर आख़िरी घंटे में नया topic घुसाने का मन करे; वो घंटा आराम के लिए रखो।</p>`,
        hg: `<p><b>Analogy:</b> train ke safar se pehle bag pack karna. Kya le jaana hai, yeh station par tay nahi hota; list raat ko hi check kar lete hain.</p>
<ul>
<li><b>Pichli raat:</b> samay par so jao. Laptop aur phone charge karo. One-page cheat sheets ek baar aur "if you remember only 10 things" list padho. Apni STAR stories dobara padho. Naya topic <b>shuru mat</b> karo.</li>
<li><b>Subah:</b> halka khao, paani piyo, aur revision zyada se zyada 30 minute. "Tell me about yourself" ek baar zor se bolo. Venue ya call par 10 minute pehle pahuncho.</li>
<li><b>Online round ka tech setup:</b> stable internet aur backup ke liye phone hotspot, laptop charger par, mic wale headphones, camera eye level par, shaant kamra. Chat apps band karo aur notifications mute karo. Meeting link aur screen sharing test karo. Code maangein to khaali console project khula rakho.</li>
<li><b>Interview ke dauran:</b> pehle sawaal clarify karo, zor se socho, structure do, trade-off batao. Time dekhte raho. Jawab na aata ho to batao ki aap kaise pata karoge; poore yakeen se guess mat karo. Chup hone ki jagah politely hint maango.</li>
<li><b>Unse poochne wale sawaal:</b> team kaise structured hai aur Tech Lead kise report karta hai? Technical decisions kaise liye jaate hain? Release aur on-call process kaisa hai? Tech Lead role ka kitna hissa hands-on hai? Pehle 6 mahino mein success kaisi dikhegi?</li>
<li><b>Interview ke baad:</b> usi din har woh sawaal likh lo jahan atke aur use apni "Revise Day N" list mein jodo. Chhota thank-you note bhejo. Poore interview ko baar-baar dimaag mein replay mat karo; note karo, seekho, aage badho.</li>
</ul>
<p><b>Kab use karein:</b> har real round se pehle. <b>Kab nahi:</b> agar aakhri ghante mein naya topic ghusaane ka mann kare; woh ghanta aaraam ke liye rakho.</p>`
      }
    },
    {
      id: "after-30-days",
      depth: "detailed",
      title: { en: "After the 30 days: keep the knowledge alive", hi: "30 दिनों के बाद: knowledge को ज़िंदा रखो", hg: "30 dinon ke baad: knowledge ko zinda rakho" },
      body: {
        en: `<p><b>Analogy:</b> a kirana shop owner checks the shelves every week; things you do not touch go stale. Knowledge works the same way: what you do not revisit fades in a few weeks.</p>
<ul>
<li><b>Turn weak days into a work list.</b> After each mock and each real interview, list every question you scored 0 or 1 as "Revise Day N". That list, not the full 30 days, is your plan now.</li>
<li><b>Use the Today and Done tracking.</b> On a day page, the "Day done" button can be clicked again to undo it. Undo the days you want to repeat, and the <b>Today</b> button on the home page opens the first day you have not finished. Progress lives in your browser's <code>localStorage</code>, so clearing site data resets it.</li>
<li><b>Spaced repetition.</b> A common schedule is to revisit a weak topic after 1, 3, 7 and 14 days. It is a habit, not a law: if you still miss it, shorten the gap; if it is solid, stretch it.</li>
<li><b>Weekly rhythm (about 3 hours):</b> one mock round aloud (Q&amp;A with a timer), the puzzles of one weak day, one STAR story rehearsed, and one hands-on hour building something small in the weakest area.</li>
<li><b>Keep your stories fresh.</b> Update your six to eight STAR stories with real numbers and outcomes from your current work. Stories are the one thing this site cannot write for you.</li>
<li><b>Prefer recall over re-reading.</b> Close the page, say the answer aloud, then open it to check. Re-reading feels productive but tests nothing.</li>
</ul>
<p><b>When to use:</b> in the weeks between interviews, and while you wait for results. <b>When not:</b> do not rebuild the whole 30-day plan every week; revise only what your mocks and interviews showed as weak.</p>`,
        hi: `<p><b>Analogy:</b> kirana shop वाला हर हफ़्ते shelves check करता है; जिस सामान को छुआ नहीं, वो पुराना पड़ जाता है। Knowledge भी ऐसे ही है: जिसे revisit नहीं किया वो कुछ हफ़्तों में धुँधला हो जाता है।</p>
<ul>
<li><b>Weak days को work list बनाओ।</b> हर mock और हर real interview के बाद जिन सवालों में 0 या 1 आया उन्हें "Revise Day N" की तरह लिखो। अब आपका plan पूरे 30 दिन नहीं, वही list है।</li>
<li><b>Today और Done tracking use करो।</b> Day page पर "Day done" button को दोबारा click करके undo कर सकते हो। जो days दोहराने हैं उन्हें undo करो, और home page का <b>Today</b> button पहला वो day खोलेगा जो आपने पूरा नहीं किया। Progress आपके browser के <code>localStorage</code> में रहती है, इसलिए site data clear करने से reset हो जाती है।</li>
<li><b>Spaced repetition।</b> एक आम schedule है: weak topic को 1, 3, 7 और 14 दिन बाद दोबारा देखो। यह आदत है, कानून नहीं: अगर अब भी छूट रहा है तो gap छोटा करो; अगर पक्का है तो बढ़ा दो।</li>
<li><b>Weekly rhythm (लगभग 3 घंटे):</b> एक mock round ज़ोर से बोलकर (timer के साथ Q&amp;A), एक weak day के puzzles, एक STAR story की practice, और सबसे कमज़ोर area में कुछ छोटा बनाने का एक hands-on घंटा।</li>
<li><b>अपनी stories ताज़ा रखो।</b> अपने छह से आठ STAR stories को current काम के real numbers और outcomes से update करो। Stories वो एक चीज़ है जो यह site आपके लिए नहीं लिख सकती।</li>
<li><b>दोबारा पढ़ने से ज़्यादा recall।</b> Page बंद करो, answer ज़ोर से बोलो, फिर खोलकर check करो। दोबारा पढ़ना productive लगता है पर कुछ test नहीं करता।</li>
</ul>
<p><b>कब use करें:</b> interviews के बीच के हफ़्तों में, और results का इंतज़ार करते वक़्त। <b>कब नहीं:</b> हर हफ़्ते पूरा 30 दिन का plan दोबारा मत चलाओ; सिर्फ़ वो revise करो जो आपके mocks और interviews में weak दिखा।</p>`,
        hg: `<p><b>Analogy:</b> kirana shop wala har hafte shelves check karta hai; jis saamaan ko chhua nahi, woh purana pad jaata hai. Knowledge bhi aise hi hai: jise revisit nahi kiya woh kuch hafton mein dhundhla ho jaata hai.</p>
<ul>
<li><b>Weak days ko work list banao.</b> Har mock aur har real interview ke baad jin sawaalon mein 0 ya 1 aaya unhe "Revise Day N" ki tarah likho. Ab aapka plan poore 30 din nahi, wahi list hai.</li>
<li><b>Today aur Done tracking use karo.</b> Day page par "Day done" button ko dobara click karke undo kar sakte ho. Jo days dohraane hain unhe undo karo, aur home page ka <b>Today</b> button pehla woh day kholega jo aapne poora nahi kiya. Progress aapke browser ke <code>localStorage</code> mein rehti hai, isliye site data clear karne se reset ho jaati hai.</li>
<li><b>Spaced repetition.</b> Ek aam schedule hai: weak topic ko 1, 3, 7 aur 14 din baad dobara dekho. Yeh aadat hai, kanoon nahi: agar ab bhi chhoot raha hai to gap chhota karo; agar pakka hai to badha do.</li>
<li><b>Weekly rhythm (lagbhag 3 ghante):</b> ek mock round zor se bolkar (timer ke saath Q&amp;A), ek weak day ke puzzles, ek STAR story ki practice, aur sabse kamzor area mein kuch chhota banane ka ek hands-on ghanta.</li>
<li><b>Apni stories taaza rakho.</b> Apne chhe se aath STAR stories ko current kaam ke real numbers aur outcomes se update karo. Stories woh ek cheez hai jo yeh site aapke liye nahi likh sakti.</li>
<li><b>Dobara padhne se zyada recall.</b> Page band karo, answer zor se bolo, phir kholkar check karo. Dobara padhna productive lagta hai par kuch test nahi karta.</li>
</ul>
<p><b>Kab use karein:</b> interviews ke beech ke hafton mein, aur results ka intezaar karte waqt. <b>Kab nahi:</b> har hafte poora 30 din ka plan dobara mat chalao; sirf woh revise karo jo aapke mocks aur interviews mein weak dikha.</p>`
      },
      code: [
        {
          caption: {
            en: "A tiny revision scheduler: weak day studied on a date, next reviews after 1, 3, 7 and 14 days.",
            hi: "एक छोटा revision scheduler: weak day किसी date को पढ़ा, अगले reviews 1, 3, 7 और 14 दिन बाद।",
            hg: "Ek chhota revision scheduler: weak day kisi date ko padha, agle reviews 1, 3, 7 aur 14 din baad."
          },
          src: `using System.Globalization;

int[] gaps = { 1, 3, 7, 14 };
var studied = new DateOnly(2026, 11, 2);

foreach (var gap in gaps)
{
    var due = studied.AddDays(gap);
    Console.WriteLine($"Revise after {gap,2} days: {due.ToString("ddd dd MMM", CultureInfo.InvariantCulture)}");
}`,
          check: "run",
          expected: "Revise after  1 days: Tue 03 Nov\nRevise after  3 days: Thu 05 Nov\nRevise after  7 days: Mon 09 Nov\nRevise after 14 days: Mon 16 Nov"
        }
      ]
    },

  ],
  qa: [
    {
      id: "design-audit-log",
      depth: "short",
      q: "Design an audit log for an order system: who changed what, and when.",
      answer: "Write an append-only record (who, what, before and after, when, correlation id) in the same transaction as the change. Keep it in a separate, write-protected table and archive old rows.",
      meaning: {
        hi: "Change के साथ उसी transaction में एक append-only record लिखो (किसने, क्या, पहले और बाद में, कब, correlation id)। उसे अलग, write-protected table में रखो और पुरानी rows archive करो।",
        hg: "Change ke saath usi transaction mein ek append-only record likho (kisne, kya, pehle aur baad mein, kab, correlation id). Use alag, write-protected table mein rakho aur purani rows archive karo."
      },
      explain: {
        en: `<ul>
<li><b>Clarify first:</b> who reads it (support, auditors), how long must it be kept, must it be tamper-evident, and how many writes per day. Estimate size with the Day 17 method.</li>
<li><b>Capture:</b> a <code>SaveChanges</code> interceptor can read the change tracker and write an <code>AuditEntry</code> (actor, action, entity, entity id, UTC time, correlation id, changed fields) in the same transaction, so a change and its audit record commit or fail together.</li>
<li><b>Protect:</b> grant the app login INSERT only on the audit table, keep secrets and personal data out of the payload, and index by entity type, entity id and time for the "show history of order 101" query.</li>
<li><b>Scale and retention:</b> partition by month and move old rows to cheap storage (Blob cool or archive tier). If the write latency hurts, publish the audit event through an outbox and write it asynchronously; the trade-off is a small delay.</li>
<li>Follow-up: "How do you prove nobody edited it?" (restricted permissions, immutable storage or a hash chain if compliance needs proof).</li>
</ul>
<p>Revise: Day 6 (interceptors), Day 16 (outbox), Day 26 (logs and personal data).</p>`,
        hi: `<ul>
<li><b>पहले clarify करो:</b> इसे कौन पढ़ेगा (support, auditors), कितने समय तक रखना है, क्या tamper-evident चाहिए, और रोज़ कितने writes होंगे। Size का estimate Day 17 के तरीक़े से लगाओ।</li>
<li><b>Capture:</b> <code>SaveChanges</code> interceptor change tracker पढ़कर उसी transaction में <code>AuditEntry</code> लिख सकता है (actor, action, entity, entity id, UTC time, correlation id, बदले हुए fields), इसलिए change और उसका audit record साथ commit या साथ fail होते हैं।</li>
<li><b>Protect:</b> app login को audit table पर सिर्फ़ INSERT दो, payload में secrets और personal data मत रखो, और "order 101 की history दिखाओ" वाली query के लिए entity type, entity id और time पर index बनाओ।</li>
<li><b>Scale और retention:</b> महीने के हिसाब से partition करो और पुरानी rows सस्ते storage में भेजो (Blob cool या archive tier)। Write latency चुभे तो audit event को outbox से publish करो और async लिखो; trade-off है थोड़ी delay।</li>
<li>Follow-up: "कैसे साबित करोगे कि किसी ने edit नहीं किया?" (restricted permissions, immutable storage, या compliance को proof चाहिए तो hash chain)।</li>
</ul>
<p>Revise: Day 6 (interceptors), Day 16 (outbox), Day 26 (logs और personal data)।</p>`,
        hg: `<ul>
<li><b>Pehle clarify karo:</b> ise kaun padhega (support, auditors), kitne samay tak rakhna hai, kya tamper-evident chahiye, aur roz kitne writes honge. Size ka estimate Day 17 ke tareeke se lagao.</li>
<li><b>Capture:</b> <code>SaveChanges</code> interceptor change tracker padhkar usi transaction mein <code>AuditEntry</code> likh sakta hai (actor, action, entity, entity id, UTC time, correlation id, badle hue fields), isliye change aur uska audit record saath commit ya saath fail hote hain.</li>
<li><b>Protect:</b> app login ko audit table par sirf INSERT do, payload mein secrets aur personal data mat rakho, aur "order 101 ki history dikhao" wali query ke liye entity type, entity id aur time par index banao.</li>
<li><b>Scale aur retention:</b> mahine ke hisaab se partition karo aur purani rows sasti storage mein bhejo (Blob cool ya archive tier). Write latency chubhe to audit event ko outbox se publish karo aur async likho; trade-off hai thodi delay.</li>
<li>Follow-up: "Kaise saabit karoge ki kisi ne edit nahi kiya?" (restricted permissions, immutable storage, ya compliance ko proof chahiye to hash chain).</li>
</ul>
<p>Revise: Day 6 (interceptors), Day 16 (outbox), Day 26 (logs aur personal data).</p>`
      }
    },
    {
      id: "design-multitenant-data-model",
      depth: "short",
      q: "Design the data model for a multi-tenant SaaS product.",
      answer: "First choose the isolation level: shared database with a TenantId column, schema per tenant, or database per tenant. Shared is cheapest; stronger isolation costs more to run and migrate.",
      meaning: {
        hi: "पहले isolation level चुनो: TenantId column वाला shared database, schema per tenant, या database per tenant। Shared सबसे सस्ता है; ज़्यादा isolation चलाने और migrate करने में महँगा पड़ता है।",
        hg: "Pehle isolation level chuno: TenantId column wala shared database, schema per tenant, ya database per tenant. Shared sabse sasta hai; zyada isolation chalane aur migrate karne mein mehenga padta hai."
      },
      explain: {
        en: `<ul>
<li><b>Clarify:</b> how many tenants, how uneven their sizes are, any data-residency or compliance rule, and the risk of a noisy neighbour.</li>
<li><b>Shared database:</b> <code>TenantId</code> on every table and as the <b>leading column</b> of the main indexes (Day 18). Apply an EF Core global query filter and take the tenant from the signed token, never from the request body.</li>
<li><b>Risk:</b> one forgotten filter leaks another customer's data, the same bug class as IDOR (Day 26). Add tests that query as tenant A and expect nothing from tenant B; database row-level security can be a second layer.</li>
<li><b>Database per tenant:</b> easy backup, restore and per-tenant scaling, but every migration runs N times and connections multiply. Azure SQL elastic pools (Day 20) soften the cost.</li>
<li><b>Hybrid:</b> most tenants share, large or regulated tenants get their own database. The trade-off is two code paths to test.</li>
</ul>
<p>Revise: Day 6 (query filters), Day 18 (indexes), Day 20 (elastic pools), Day 26 (IDOR).</p>`,
        hi: `<ul>
<li><b>Clarify:</b> कितने tenants हैं, उनके sizes कितने असमान हैं, कोई data-residency या compliance rule है क्या, और noisy neighbour का risk।</li>
<li><b>Shared database:</b> हर table पर <code>TenantId</code> और main indexes का <b>पहला column</b> वही (Day 18)। EF Core global query filter लगाओ और tenant signed token से लो, request body से कभी नहीं।</li>
<li><b>Risk:</b> एक filter भूल गए तो दूसरे customer का data leak हो जाता है, वही bug class जो IDOR है (Day 26)। ऐसे tests जोड़ो जो tenant A बनकर query करें और tenant B का कुछ न मिले; database row-level security दूसरी layer हो सकती है।</li>
<li><b>Database per tenant:</b> backup, restore और per-tenant scaling आसान, पर हर migration N बार चलता है और connections बढ़ जाते हैं। Azure SQL elastic pools (Day 20) cost घटाते हैं।</li>
<li><b>Hybrid:</b> ज़्यादातर tenants share करते हैं, बड़े या regulated tenants को अपना database मिलता है। Trade-off है दो code paths का testing।</li>
</ul>
<p>Revise: Day 6 (query filters), Day 18 (indexes), Day 20 (elastic pools), Day 26 (IDOR)।</p>`,
        hg: `<ul>
<li><b>Clarify:</b> kitne tenants hain, unke sizes kitne asamaan hain, koi data-residency ya compliance rule hai kya, aur noisy neighbour ka risk.</li>
<li><b>Shared database:</b> har table par <code>TenantId</code> aur main indexes ka <b>pehla column</b> wahi (Day 18). EF Core global query filter lagao aur tenant signed token se lo, request body se kabhi nahi.</li>
<li><b>Risk:</b> ek filter bhool gaye to doosre customer ka data leak ho jaata hai, wahi bug class jo IDOR hai (Day 26). Aise tests jodo jo tenant A bankar query karein aur tenant B ka kuch na mile; database row-level security doosri layer ho sakti hai.</li>
<li><b>Database per tenant:</b> backup, restore aur per-tenant scaling aasaan, par har migration N baar chalta hai aur connections badh jaate hain. Azure SQL elastic pools (Day 20) cost ghatate hain.</li>
<li><b>Hybrid:</b> zyadatar tenants share karte hain, bade ya regulated tenants ko apna database milta hai. Trade-off hai do code paths ka testing.</li>
</ul>
<p>Revise: Day 6 (query filters), Day 18 (indexes), Day 20 (elastic pools), Day 26 (IDOR).</p>`
      }
    },
    {
      id: "design-file-upload-pipeline",
      depth: "short",
      q: "Design a file upload feature for files up to 1 GB, with virus scanning and later download.",
      answer: "Let clients upload directly to blob storage with a short-lived SAS link, not through your API. A blob-created event starts a worker that scans the file and updates its status.",
      meaning: {
        hi: "Clients को short-lived SAS link से सीधे blob storage में upload करने दो, आपकी API से नहीं। Blob-created event एक worker शुरू करता है जो file scan करके status update करता है।",
        hg: "Clients ko short-lived SAS link se seedhe blob storage mein upload karne do, aapki API se nahi. Blob-created event ek worker shuru karta hai jo file scan karke status update karta hai."
      },
      explain: {
        en: `<ul>
<li><b>Flow:</b> the API creates an upload record with status <b>Pending</b> and returns a short-lived SAS link (prefer a user delegation SAS, Day 20). The client uploads in blocks, so a broken connection can resume.</li>
<li><b>Scan:</b> a blob-created event (Event Grid) goes to a queue; a worker scans the file and sets <b>Clean</b> or <b>Rejected</b>. Only Clean files can be downloaded. The worker must be idempotent, because events arrive at-least-once (Day 16).</li>
<li><b>Checks:</b> enforce a size limit and check the real content type, not just the file extension; never serve an unscanned file; hand out short-lived download links.</li>
<li><b>Lifecycle:</b> move old files from hot to cool to archive tier (Day 20) and delete when retention ends.</li>
<li><b>Trade-off:</b> more moving parts than a plain upload endpoint. For files of a few MB, a direct API upload is simpler and fine.</li>
</ul>
<p>Revise: Day 20 (SAS, Blob tiers, Event Grid), Day 16 (idempotent consumers), Day 26 (secure code review).</p>`,
        hi: `<ul>
<li><b>Flow:</b> API <b>Pending</b> status वाला upload record बनाती है और short-lived SAS link लौटाती है (user delegation SAS बेहतर है, Day 20)। Client blocks में upload करता है, इसलिए connection टूटे तो resume हो सकता है।</li>
<li><b>Scan:</b> blob-created event (Event Grid) एक queue में जाता है; worker file scan करके <b>Clean</b> या <b>Rejected</b> set करता है। सिर्फ़ Clean files download हो सकती हैं। Worker idempotent होना चाहिए, क्योंकि events at-least-once आते हैं (Day 16)।</li>
<li><b>Checks:</b> size limit लगाओ और सिर्फ़ file extension नहीं, असली content type check करो; unscanned file कभी serve मत करो; download के links short-lived दो।</li>
<li><b>Lifecycle:</b> पुरानी files को hot से cool और archive tier में भेजो (Day 20) और retention ख़त्म होने पर delete करो।</li>
<li><b>Trade-off:</b> सादे upload endpoint से ज़्यादा moving parts। कुछ MB की files के लिए सीधा API upload आसान और ठीक है।</li>
</ul>
<p>Revise: Day 20 (SAS, Blob tiers, Event Grid), Day 16 (idempotent consumers), Day 26 (secure code review)।</p>`,
        hg: `<ul>
<li><b>Flow:</b> API <b>Pending</b> status wala upload record banati hai aur short-lived SAS link lautati hai (user delegation SAS behtar hai, Day 20). Client blocks mein upload karta hai, isliye connection toote to resume ho sakta hai.</li>
<li><b>Scan:</b> blob-created event (Event Grid) ek queue mein jaata hai; worker file scan karke <b>Clean</b> ya <b>Rejected</b> set karta hai. Sirf Clean files download ho sakti hain. Worker idempotent hona chahiye, kyunki events at-least-once aate hain (Day 16).</li>
<li><b>Checks:</b> size limit lagao aur sirf file extension nahi, asli content type check karo; unscanned file kabhi serve mat karo; download ke links short-lived do.</li>
<li><b>Lifecycle:</b> purani files ko hot se cool aur archive tier mein bhejo (Day 20) aur retention khatam hone par delete karo.</li>
<li><b>Trade-off:</b> saade upload endpoint se zyada moving parts. Kuch MB ki files ke liye seedha API upload aasaan aur theek hai.</li>
</ul>
<p>Revise: Day 20 (SAS, Blob tiers, Event Grid), Day 16 (idempotent consumers), Day 26 (secure code review).</p>`
      }
    },
    {
      id: "design-search-feature",
      depth: "detailed",
      q: "Add search to a product catalogue of 5 million products, with type-ahead and filters. How do you design it?",
      answer: "Start with database full-text indexes plus normal indexes for filters. Add a dedicated search engine only when relevance, typo tolerance or load demands it, and feed it from events.",
      meaning: {
        hi: "Database full-text indexes और filters के लिए normal indexes से शुरू करो। Dedicated search engine तभी जोड़ो जब relevance, typo tolerance या load माँगे, और उसे events से भरो।",
        hg: "Database full-text indexes aur filters ke liye normal indexes se shuru karo. Dedicated search engine tabhi jodo jab relevance, typo tolerance ya load maange, aur use events se bharo."
      },
      explain: {
        en: `<ul>
<li><b>Clarify:</b> what users type (names, codes, sentences), how fresh results must be, query volume, and whether typos and synonyms matter.</li>
<li><b>Step 1, the database:</b> a full-text index for word search and ordinary indexes for filters like category and price (Days 18, 19). Millions of rows are fine if queries are sargable. Type-ahead can use a prefix search plus a cache for popular prefixes.</li>
<li><b>Step 2, a search engine</b> (for example Azure AI Search or Elasticsearch/OpenSearch): better ranking, typo tolerance and facets. Keep the database as the source of truth and update the index from change events through an outbox and a queue (Day 16); the index is eventually consistent, and you need a re-index path.</li>
<li><b>Meaning-based search:</b> embeddings add semantic matching, often combined with keyword search (Day 27). Add it only for a measured need.</li>
<li><b>Trade-off:</b> one more system to run, secure and keep in sync, in return for relevance and speed.</li>
</ul>
<p>Revise: Day 18 and Day 19 (full-text, indexes), Day 16 (outbox), Day 27 (embeddings).</p>`,
        hi: `<ul>
<li><b>Clarify:</b> users क्या type करते हैं (names, codes, sentences), results कितने fresh चाहिए, query volume, और typos और synonyms मायने रखते हैं या नहीं।</li>
<li><b>Step 1, database:</b> word search के लिए full-text index और category, price जैसे filters के लिए ordinary indexes (Days 18, 19)। Queries sargable हों तो लाखों rows ठीक हैं। Type-ahead prefix search और popular prefixes के cache से हो सकता है।</li>
<li><b>Step 2, search engine</b> (जैसे Azure AI Search या Elasticsearch/OpenSearch): बेहतर ranking, typo tolerance और facets। Database को source of truth रखो और index को outbox और queue के ज़रिए change events से update करो (Day 16); index eventually consistent है, और re-index का रास्ता चाहिए।</li>
<li><b>Meaning-based search:</b> embeddings semantic matching देते हैं, अक्सर keyword search के साथ मिलाकर (Day 27)। सिर्फ़ measured ज़रूरत पर जोड़ो।</li>
<li><b>Trade-off:</b> एक और system जिसे चलाना, secure करना और sync रखना है, बदले में relevance और speed।</li>
</ul>
<p>Revise: Day 18 और Day 19 (full-text, indexes), Day 16 (outbox), Day 27 (embeddings)।</p>`,
        hg: `<ul>
<li><b>Clarify:</b> users kya type karte hain (names, codes, sentences), results kitne fresh chahiye, query volume, aur typos aur synonyms maayne rakhte hain ya nahi.</li>
<li><b>Step 1, database:</b> word search ke liye full-text index aur category, price jaise filters ke liye ordinary indexes (Days 18, 19). Queries sargable hon to laakhon rows theek hain. Type-ahead prefix search aur popular prefixes ke cache se ho sakta hai.</li>
<li><b>Step 2, search engine</b> (jaise Azure AI Search ya Elasticsearch/OpenSearch): behtar ranking, typo tolerance aur facets. Database ko source of truth rakho aur index ko outbox aur queue ke zariye change events se update karo (Day 16); index eventually consistent hai, aur re-index ka raasta chahiye.</li>
<li><b>Meaning-based search:</b> embeddings semantic matching dete hain, aksar keyword search ke saath milakar (Day 27). Sirf measured zaroorat par jodo.</li>
<li><b>Trade-off:</b> ek aur system jise chalana, secure karna aur sync rakhna hai, badle mein relevance aur speed.</li>
</ul>
<p>Revise: Day 18 aur Day 19 (full-text, indexes), Day 16 (outbox), Day 27 (embeddings).</p>`
      }
    },
    {
      id: "design-partner-api",
      depth: "detailed",
      q: "Design a public API for partner companies: keys, quotas, versioning and safe retries.",
      answer: "Front it with a gateway for keys, quotas and throttling; version additively; make writes safe to retry with an Idempotency-Key; return 429 with Retry-After and ProblemDetails errors.",
      meaning: {
        hi: "सामने gateway रखो जो keys, quotas और throttling संभाले; additive versioning करो; Idempotency-Key से writes को retry-safe बनाओ; 429 के साथ Retry-After और ProblemDetails errors लौटाओ।",
        hg: "Saamne gateway rakho jo keys, quotas aur throttling sambhaale; additive versioning karo; Idempotency-Key se writes ko retry-safe banao; 429 ke saath Retry-After aur ProblemDetails errors lautao."
      },
      explain: {
        en: `<ul>
<li><b>Clarify:</b> how many partners, their traffic, whether data is per partner, and what the contract promises (availability, support window).</li>
<li><b>Edge:</b> a gateway such as API Management applies policies like validate-jwt and rate-limit-by-key per partner (Day 20). In-app, the built-in rate limiter works; set the rejection status to 429 because the default is 503 (Day 13). With several instances, counters must be shared or enforced at the gateway.</li>
<li><b>Contract:</b> version by URL or header and prefer additive changes (Day 13); keyset pagination for big lists (Day 26); stable error shape with ProblemDetails.</li>
<li><b>Safe retries:</b> POST is not idempotent, so accept an <code>Idempotency-Key</code> and store the first result for a while (Days 13, 17). Partners can then retry after a timeout without double orders.</li>
<li><b>Webhooks back to partners:</b> sign the body with an HMAC, compare in fixed time (Day 26), retry with backoff and jitter (Day 16), and log per partner for support.</li>
<li><b>Trade-off:</b> a gateway adds a hop and a cost, but moves keys, quotas and abuse protection out of your business code.</li>
</ul>
<p>Revise: Day 13 (rate limiting, versioning, idempotency), Day 17 (idempotency in design), Day 20 (API Management), Day 26 (signing).</p>`,
        hi: `<ul>
<li><b>Clarify:</b> कितने partners हैं, उनका traffic, data partner के हिसाब से अलग है या नहीं, और contract क्या promise करता है (availability, support window)।</li>
<li><b>Edge:</b> API Management जैसा gateway हर partner पर validate-jwt और rate-limit-by-key जैसी policies लगाता है (Day 20)। App के अंदर built-in rate limiter चलता है; rejection status 429 set करो क्योंकि default 503 है (Day 13)। कई instances हों तो counters shared हों या gateway पर enforce हों।</li>
<li><b>Contract:</b> URL या header से version करो और additive changes पसंद करो (Day 13); बड़ी lists के लिए keyset pagination (Day 26); ProblemDetails से stable error shape।</li>
<li><b>Safe retries:</b> POST idempotent नहीं है, इसलिए <code>Idempotency-Key</code> लो और पहला result कुछ समय तक store करो (Days 13, 17)। तब partners timeout के बाद retry कर सकते हैं और double orders नहीं बनते।</li>
<li><b>Partners को webhooks:</b> body को HMAC से sign करो, fixed time में compare करो (Day 26), backoff और jitter के साथ retry करो (Day 16), और support के लिए partner के हिसाब से log रखो।</li>
<li><b>Trade-off:</b> gateway एक hop और cost जोड़ता है, पर keys, quotas और abuse protection को आपके business code से बाहर रखता है।</li>
</ul>
<p>Revise: Day 13 (rate limiting, versioning, idempotency), Day 17 (idempotency in design), Day 20 (API Management), Day 26 (signing)।</p>`,
        hg: `<ul>
<li><b>Clarify:</b> kitne partners hain, unka traffic, data partner ke hisaab se alag hai ya nahi, aur contract kya promise karta hai (availability, support window).</li>
<li><b>Edge:</b> API Management jaisa gateway har partner par validate-jwt aur rate-limit-by-key jaisi policies lagata hai (Day 20). App ke andar built-in rate limiter chalta hai; rejection status 429 set karo kyunki default 503 hai (Day 13). Kai instances hon to counters shared hon ya gateway par enforce hon.</li>
<li><b>Contract:</b> URL ya header se version karo aur additive changes pasand karo (Day 13); badi lists ke liye keyset pagination (Day 26); ProblemDetails se stable error shape.</li>
<li><b>Safe retries:</b> POST idempotent nahi hai, isliye <code>Idempotency-Key</code> lo aur pehla result kuch samay tak store karo (Days 13, 17). Tab partners timeout ke baad retry kar sakte hain aur double orders nahi bante.</li>
<li><b>Partners ko webhooks:</b> body ko HMAC se sign karo, fixed time mein compare karo (Day 26), backoff aur jitter ke saath retry karo (Day 16), aur support ke liye partner ke hisaab se log rakho.</li>
<li><b>Trade-off:</b> gateway ek hop aur cost jodta hai, par keys, quotas aur abuse protection ko aapke business code se bahar rakhta hai.</li>
</ul>
<p>Revise: Day 13 (rate limiting, versioning, idempotency), Day 17 (idempotency in design), Day 20 (API Management), Day 26 (signing).</p>`
      }
    },
    {
      id: "lb-mentoring",
      depth: "short",
      q: "Tell me about a time you mentored a team member.",
      answer: "Use STAR with a real story: [who needed help and why], how you coached them [actions over weeks], and a result you can show [result]. Stress coaching, not doing the work for them.",
      meaning: {
        hi: "STAR में अपनी real story लो: [किसे help चाहिए थी और क्यों], आपने कैसे coach किया [हफ़्तों की actions], और दिखाने लायक result [result]। Coaching पर ज़ोर दो, उनका काम ख़ुद करने पर नहीं।",
        hg: "STAR mein apni real story lo: [kisko help chahiye thi aur kyon], aapne kaise coach kiya [hafton ki actions], aur dikhane layak result [result]. Coaching par zor do, unka kaam khud karne par nahi."
      },
      explain: {
        en: `<p><b>Template — fill in your own story:</b></p>
<ul>
<li><b>Situation:</b> [name or role] on [project] struggled with [skill].</li>
<li><b>Task:</b> [my goal, for example: they can own a task alone by a date].</li>
<li><b>Action:</b> [what I did: pairing sessions, small tasks with review, how I gave feedback, the real task I finally delegated].</li>
<li><b>Result:</b> [something measurable: PRs approved first time, a feature they shipped alone, feedback they gave].</li>
<li><b>Reflection:</b> [what I would do differently].</li>
</ul>
<p><b>Sample — replace with your own, this is not your story:</b> "A new joiner on [project] struggled with EF Core queries. I wanted them to own a small feature in a month. We paired twice a week, I gave them small tasks with written review comments, and then let them lead a reporting endpoint. After [six weeks] they shipped it with no rework."</p>
<p>Follow-up: "What if they did not improve?" (clear expectations, regular feedback, then involve the manager; Day 28).</p>
<p>Revise: Day 28.</p>`,
        hi: `<p><b>Template — अपनी story भरो:</b></p>
<ul>
<li><b>Situation:</b> [project] पर [name या role] को [skill] में दिक़्क़त थी।</li>
<li><b>Task:</b> [मेरा goal, जैसे: वो एक date तक task अकेले own कर लें]।</li>
<li><b>Action:</b> [मैंने क्या किया: pairing sessions, review के साथ छोटे tasks, feedback कैसे दिया, आख़िर में कौन सा real task delegate किया]।</li>
<li><b>Result:</b> [कुछ measurable: PRs पहली बार में approve, अकेले ship किया हुआ feature, उनका दिया feedback]।</li>
<li><b>Reflection:</b> [मैं क्या अलग करता]।</li>
</ul>
<p><b>Sample — अपनी story से बदल दो, यह आपकी story नहीं है:</b> "[project] पर एक नए joiner को EF Core queries में दिक़्क़त थी। मैं चाहता था कि वो एक महीने में छोटा feature own करे। हम हफ़्ते में दो बार pair करते थे, मैं लिखित review comments के साथ छोटे tasks देता था, फिर उन्हें reporting endpoint lead करने दिया। [छह हफ़्ते] बाद उन्होंने उसे बिना rework के ship किया।"</p>
<p>Follow-up: "अगर सुधार नहीं हुआ तो?" (साफ़ expectations, regular feedback, फिर manager को involve करना; Day 28)।</p>
<p>Revise: Day 28।</p>`,
        hg: `<p><b>Template — apni story bharo:</b></p>
<ul>
<li><b>Situation:</b> [project] par [name ya role] ko [skill] mein dikkat thi.</li>
<li><b>Task:</b> [mera goal, jaise: woh ek date tak task akele own kar lein].</li>
<li><b>Action:</b> [maine kya kiya: pairing sessions, review ke saath chhote tasks, feedback kaise diya, aakhir mein kaun sa real task delegate kiya].</li>
<li><b>Result:</b> [kuch measurable: PRs pehli baar mein approve, akele ship kiya hua feature, unka diya feedback].</li>
<li><b>Reflection:</b> [main kya alag karta].</li>
</ul>
<p><b>Sample — apni story se badal do, yeh aapki story nahi hai:</b> "[project] par ek naye joiner ko EF Core queries mein dikkat thi. Main chahta tha ki woh ek mahine mein chhota feature own kare. Hum hafte mein do baar pair karte the, main likhit review comments ke saath chhote tasks deta tha, phir unhe reporting endpoint lead karne diya. [Chhe hafte] baad unhone use bina rework ke ship kiya."</p>
<p>Follow-up: "Agar sudhaar nahi hua to?" (saaf expectations, regular feedback, phir manager ko involve karna; Day 28).</p>
<p>Revise: Day 28.</p>`
      }
    },
    {
      id: "lb-failure-mistake",
      depth: "short",
      q: "Tell me about a mistake you made or a project that did not go well.",
      answer: "Pick a real, modest mistake: [what went wrong], your own part [your role, no blame], how you fixed it [action], and the habit you changed [lesson]. Own it plainly.",
      meaning: {
        hi: "एक real, छोटी ग़लती चुनो: [क्या ग़लत हुआ], उसमें आपका हिस्सा [आपका role, बिना blame के], कैसे ठीक किया [action], और कौन सी आदत बदली [lesson]। सीधे मानो।",
        hg: "Ek real, chhoti galti chuno: [kya galat hua], usme aapka hissa [aapka role, bina blame ke], kaise theek kiya [action], aur kaun si aadat badli [lesson]. Seedhe maano."
      },
      explain: {
        en: `<p><b>Template — fill in your own story:</b></p>
<ul>
<li><b>Situation:</b> [project, date range, what was at stake].</li>
<li><b>Task:</b> [what I was responsible for].</li>
<li><b>Action:</b> [what I got wrong, in one plain sentence; how I found out; what I did to limit the damage and fix it].</li>
<li><b>Result:</b> [the outcome, honestly: what was saved, what was lost].</li>
<li><b>Lesson:</b> [a concrete habit or check I added, such as a review checklist, a test, or an alert].</li>
</ul>
<p><b>Sample — replace with your own, this is not your story:</b> "A release of [project] changed a column type without checking a downstream report. I noticed within [an hour] from a support ticket, rolled back, and fixed it with a backward-compatible change. Since then, every schema change in my team goes through a short impact checklist."</p>
<ul>
<li>Choose a real mistake with a real lesson. Avoid "my weakness is working too hard" and avoid blaming a person.</li>
<li>Follow-up: "What would you do differently?" Have a specific change, not "communicate more".</li>
</ul>
<p>Revise: Day 28 (blameless post-mortem).</p>`,
        hi: `<p><b>Template — अपनी story भरो:</b></p>
<ul>
<li><b>Situation:</b> [project, कौन सा समय, क्या दाँव पर था]।</li>
<li><b>Task:</b> [मेरी ज़िम्मेदारी क्या थी]।</li>
<li><b>Action:</b> [मैंने क्या ग़लत किया, एक सीधे वाक्य में; कैसे पता चला; नुक़सान कम करने और ठीक करने के लिए क्या किया]।</li>
<li><b>Result:</b> [नतीजा, ईमानदारी से: क्या बचा, क्या गया]।</li>
<li><b>Lesson:</b> [कोई ठोस आदत या check जो जोड़ा, जैसे review checklist, test या alert]।</li>
</ul>
<p><b>Sample — अपनी story से बदल दो, यह आपकी story नहीं है:</b> "[project] की एक release में मैंने downstream report देखे बिना column type बदल दिया। [एक घंटे] में support ticket से पता चला, rollback किया और backward-compatible change से ठीक किया। तब से मेरी team में हर schema change एक छोटी impact checklist से गुज़रता है।"</p>
<ul>
<li>असली ग़लती चुनो जिससे असली सीख मिली हो। "मेरी कमज़ोरी बहुत ज़्यादा काम करना है" से बचो और किसी इंसान पर blame मत डालो।</li>
<li>Follow-up: "अब क्या अलग करोगे?" कोई specific बदलाव बताओ, "communicate ज़्यादा करूँगा" नहीं।</li>
</ul>
<p>Revise: Day 28 (blameless post-mortem)।</p>`,
        hg: `<p><b>Template — apni story bharo:</b></p>
<ul>
<li><b>Situation:</b> [project, kaun sa samay, kya daav par tha].</li>
<li><b>Task:</b> [meri zimmedari kya thi].</li>
<li><b>Action:</b> [maine kya galat kiya, ek seedhe vaakya mein; kaise pata chala; nuksaan kam karne aur theek karne ke liye kya kiya].</li>
<li><b>Result:</b> [nateeja, imaandari se: kya bacha, kya gaya].</li>
<li><b>Lesson:</b> [koi thos aadat ya check jo joda, jaise review checklist, test ya alert].</li>
</ul>
<p><b>Sample — apni story se badal do, yeh aapki story nahi hai:</b> "[project] ki ek release mein maine downstream report dekhe bina column type badal diya. [Ek ghante] mein support ticket se pata chala, rollback kiya aur backward-compatible change se theek kiya. Tab se meri team mein har schema change ek chhoti impact checklist se guzarta hai."</p>
<ul>
<li>Asli galti chuno jisse asli seekh mili ho. "Meri kamzori bahut zyada kaam karna hai" se bacho aur kisi insaan par blame mat daalo.</li>
<li>Follow-up: "Ab kya alag karoge?" Koi specific badlaav batao, "communicate zyada karunga" nahi.</li>
</ul>
<p>Revise: Day 28 (blameless post-mortem).</p>`
      }
    },
    {
      id: "lb-unpopular-decision",
      depth: "detailed",
      q: "Tell me about an unpopular decision you made and how you handled the pushback.",
      answer: "Use STAR: [the decision and why it was unpopular], how you listened and used data [action], how you explained the reason, and the outcome [result]. Show you can disagree and still commit.",
      meaning: {
        hi: "STAR use करो: [फ़ैसला और वो unpopular क्यों था], आपने कैसे सुना और data use किया [action], कारण कैसे समझाया, और नतीजा [result]। दिखाओ कि असहमत होकर भी commit कर सकते हो।",
        hg: "STAR use karo: [faisla aur woh unpopular kyon tha], aapne kaise suna aur data use kiya [action], kaaran kaise samjhaya, aur nateeja [result]. Dikhao ki asehmat hokar bhi commit kar sakte ho."
      },
      explain: {
        en: `<p><b>Template — fill in your own story:</b></p>
<ul>
<li><b>Situation:</b> [the team or product context and the choice on the table, for example freezing features for a sprint, or picking a boring technology].</li>
<li><b>Task:</b> [why I owned the decision].</li>
<li><b>Action:</b> [who I listened to, what data or prototype I used, how I wrote the reason down (an ADR, Day 15), how I handled the people who disagreed].</li>
<li><b>Result:</b> [what happened, including anything that did not go to plan, and how the team felt afterwards].</li>
</ul>
<p><b>Sample — replace with your own, this is not your story:</b> "I proposed a one-sprint pause on features to fix our flaky tests, which the product owner disliked. I showed [the number of failed builds last month], we agreed a two-week limit, and I wrote an ADR. After the pause, [builds were green more often] and the pause was not repeated."</p>
<ul>
<li>Good signals: you listened, used facts, wrote the reason down, and committed to the team decision even if it was not yours.</li>
<li>Warning signals: "I just decided" or a story where you were simply right and everyone else wrong.</li>
</ul>
<p>Revise: Day 28 (disagree and commit), Day 15 (ADR).</p>`,
        hi: `<p><b>Template — अपनी story भरो:</b></p>
<ul>
<li><b>Situation:</b> [team या product का context और सामने का choice, जैसे एक sprint के लिए features रोकना, या boring technology चुनना]।</li>
<li><b>Task:</b> [फ़ैसला मेरे ज़िम्मे क्यों था]।</li>
<li><b>Action:</b> [मैंने किसकी सुनी, कौन सा data या prototype use किया, कारण कैसे लिखा (ADR, Day 15), असहमत लोगों को कैसे संभाला]।</li>
<li><b>Result:</b> [क्या हुआ, उसमें भी जो plan के मुताबिक़ नहीं गया, और बाद में team को कैसा लगा]।</li>
</ul>
<p><b>Sample — अपनी story से बदल दो, यह आपकी story नहीं है:</b> "मैंने flaky tests ठीक करने के लिए एक sprint features रोकने का प्रस्ताव दिया, जो product owner को पसंद नहीं आया। मैंने [पिछले महीने के failed builds की संख्या] दिखाई, हमने दो हफ़्ते की limit मानी, और मैंने ADR लिखा। Pause के बाद [builds ज़्यादा बार green रहे] और pause दोबारा नहीं करना पड़ा।"</p>
<ul>
<li>अच्छे signals: आपने सुना, facts use किए, कारण लिखा, और team के फ़ैसले को commit किया चाहे वो आपका न हो।</li>
<li>Warning signals: "मैंने बस decide कर दिया" या ऐसी story जिसमें आप ही सही थे और बाक़ी सब ग़लत।</li>
</ul>
<p>Revise: Day 28 (disagree and commit), Day 15 (ADR)।</p>`,
        hg: `<p><b>Template — apni story bharo:</b></p>
<ul>
<li><b>Situation:</b> [team ya product ka context aur saamne ka choice, jaise ek sprint ke liye features rokna, ya boring technology chunna].</li>
<li><b>Task:</b> [faisla mere zimme kyon tha].</li>
<li><b>Action:</b> [maine kiski suni, kaun sa data ya prototype use kiya, kaaran kaise likha (ADR, Day 15), asehmat logon ko kaise sambhala].</li>
<li><b>Result:</b> [kya hua, usme bhi jo plan ke mutabik nahi gaya, aur baad mein team ko kaisa laga].</li>
</ul>
<p><b>Sample — apni story se badal do, yeh aapki story nahi hai:</b> "Maine flaky tests theek karne ke liye ek sprint features rokne ka prastaav diya, jo product owner ko pasand nahi aaya. Maine [pichhle mahine ke failed builds ki sankhya] dikhayi, humne do hafte ki limit maani, aur maine ADR likha. Pause ke baad [builds zyada baar green rahe] aur pause dobara nahi karna pada."</p>
<ul>
<li>Achhe signals: aapne suna, facts use kiye, kaaran likha, aur team ke faisle ko commit kiya chahe woh aapka na ho.</li>
<li>Warning signals: "Maine bas decide kar diya" ya aisi story jisme aap hi sahi the aur baaki sab galat.</li>
</ul>
<p>Revise: Day 28 (disagree and commit), Day 15 (ADR).</p>`
      }
    },
    {
      id: "lb-two-seniors-conflict",
      depth: "detailed",
      q: "Two senior developers in your team keep clashing in reviews. What do you do?",
      answer: "Talk to each one separately, find out whether it is about work or people, then bring them together on a shared goal with facts. Agree a decision rule and follow up.",
      meaning: {
        hi: "हर एक से अलग-अलग बात करो, पता करो कि बात काम की है या लोगों की, फिर shared goal और facts के साथ दोनों को साथ बिठाओ। Decision rule तय करो और follow up करो।",
        hg: "Har ek se alag-alag baat karo, pata karo ki baat kaam ki hai ya logon ki, phir shared goal aur facts ke saath dono ko saath bithao. Decision rule tay karo aur follow up karo."
      },
      explain: {
        en: `<p>This is a hypothetical, so you can answer with your approach. If you have a real story, tell it in STAR shape instead.</p>
<ul>
<li><b>Listen first:</b> one-to-one with each, asking for specific examples. Is it a technical disagreement, a style clash, or a personal issue? Each needs a different fix.</li>
<li><b>Technical clash:</b> bring both to the shared goal (reliability, delivery date), compare options with data or a small prototype, write the decision as an ADR, then disagree and commit (Day 28).</li>
<li><b>Review clash:</b> agree team review rules (small PRs, comments on the code, a checklist, a tie-break rule such as "the owner decides after one round"), so the process does the refereeing.</li>
<li><b>Personal clash:</b> a direct, private conversation about behaviour and its impact, then follow up; involve your manager if it continues.</li>
<li><b>Trade-off:</b> acting too early can make a small issue bigger; acting too late hurts the team. Watch for signs such as silence in meetings.</li>
</ul>
<p>Revise: Day 28 (technical disagreement, giving feedback), Day 21 (small PRs, review).</p>`,
        hi: `<p>यह एक hypothetical है, इसलिए अपने तरीक़े से जवाब दे सकते हो। असली story हो तो उसे STAR shape में सुनाओ।</p>
<ul>
<li><b>पहले सुनो:</b> हर एक से one-to-one, specific examples माँगते हुए। यह technical असहमति है, style का टकराव है, या personal मसला? हर एक का इलाज अलग है।</li>
<li><b>Technical टकराव:</b> दोनों को shared goal पर लाओ (reliability, delivery date), options को data या छोटे prototype से compare करो, फ़ैसला ADR में लिखो, फिर disagree and commit (Day 28)।</li>
<li><b>Review का टकराव:</b> team के review rules तय करो (छोटे PRs, comments code पर, checklist, tie-break rule जैसे "एक round के बाद owner decide करेगा"), ताकि process ख़ुद referee बने।</li>
<li><b>Personal टकराव:</b> behaviour और उसके असर पर सीधी, private बातचीत, फिर follow up; जारी रहे तो manager को involve करो।</li>
<li><b>Trade-off:</b> बहुत जल्दी दख़ल देने से छोटी बात बड़ी हो सकती है; बहुत देर से team को नुक़सान होता है। meetings में चुप्पी जैसे संकेत देखते रहो।</li>
</ul>
<p>Revise: Day 28 (technical disagreement, feedback देना), Day 21 (छोटे PRs, review)।</p>`,
        hg: `<p>Yeh ek hypothetical hai, isliye apne tareeke se jawab de sakte ho. Asli story ho to use STAR shape mein sunao.</p>
<ul>
<li><b>Pehle suno:</b> har ek se one-to-one, specific examples maangte hue. Yeh technical asehmati hai, style ka takraav hai, ya personal masla? Har ek ka ilaaj alag hai.</li>
<li><b>Technical takraav:</b> dono ko shared goal par lao (reliability, delivery date), options ko data ya chhote prototype se compare karo, faisla ADR mein likho, phir disagree and commit (Day 28).</li>
<li><b>Review ka takraav:</b> team ke review rules tay karo (chhote PRs, comments code par, checklist, tie-break rule jaise "ek round ke baad owner decide karega"), taaki process khud referee bane.</li>
<li><b>Personal takraav:</b> behaviour aur uske asar par seedhi, private baatcheet, phir follow up; jaari rahe to manager ko involve karo.</li>
<li><b>Trade-off:</b> bahut jaldi dakhal dene se chhoti baat badi ho sakti hai; bahut der se team ko nuksaan hota hai. Meetings mein chuppi jaise sanket dekhte raho.</li>
</ul>
<p>Revise: Day 28 (technical disagreement, feedback dena), Day 21 (chhote PRs, review).</p>`
      }
    },
    {
      id: "lb-improve-process",
      depth: "detailed",
      q: "Tell me about a time you improved a process or the quality of your team's delivery.",
      answer: "Use STAR: [the pain, with a number if you have one], the small change you introduced [action, such as a checklist or pipeline check], and the measured result [result]. Prefer a change the team kept.",
      meaning: {
        hi: "STAR use करो: [तकलीफ़, number हो तो साथ में], आपने जो छोटा बदलाव किया [action, जैसे checklist या pipeline check], और measured result [result]। ऐसा बदलाव चुनो जिसे team ने जारी रखा।",
        hg: "STAR use karo: [takleef, number ho to saath mein], aapne jo chhota badlaav kiya [action, jaise checklist ya pipeline check], aur measured result [result]. Aisa badlaav chuno jise team ne jaari rakha."
      },
      explain: {
        en: `<p><b>Template — fill in your own story:</b></p>
<ul>
<li><b>Situation:</b> [the pain: failed releases, slow reviews, flaky tests, repeated bugs; a number if you have one].</li>
<li><b>Task:</b> [what I wanted to change and why it was my job].</li>
<li><b>Action:</b> [the smallest change that could work: a PR template, a pipeline check, a test for every bug fix (Day 25), a deployment checklist; how I got the team to agree].</li>
<li><b>Result:</b> [the before and after measure, and whether the team kept it after I stopped pushing].</li>
</ul>
<p><b>Sample — replace with your own, this is not your story:</b> "Our releases to [environment] often broke because config differed. I proposed building once and keeping config outside the artifact (Day 21), added a pipeline check, and wrote a short runbook. In [two months] failed releases dropped from [N] to [M]."</p>
<ul>
<li>Pick a change that is small, measurable and owned by the team afterwards.</li>
<li>Follow-up: "How did you convince people?" (show the pain with data, start with a small trial, make the new way easier than the old way).</li>
</ul>
<p>Revise: Day 28 (technical debt in business terms), Day 21 (pipelines), Day 25 (testing rules).</p>`,
        hi: `<p><b>Template — अपनी story भरो:</b></p>
<ul>
<li><b>Situation:</b> [तकलीफ़: failed releases, slow reviews, flaky tests, बार-बार आते bugs; number हो तो साथ में]।</li>
<li><b>Task:</b> [मैं क्या बदलना चाहता था और वो मेरा काम क्यों था]।</li>
<li><b>Action:</b> [सबसे छोटा बदलाव जो चल सके: PR template, pipeline check, हर bug fix के साथ test (Day 25), deployment checklist; team को कैसे राज़ी किया]।</li>
<li><b>Result:</b> [पहले और बाद का measure, और क्या मेरे दबाव डालना बंद करने के बाद भी team ने उसे जारी रखा]।</li>
</ul>
<p><b>Sample — अपनी story से बदल दो, यह आपकी story नहीं है:</b> "[environment] की हमारी releases अक्सर टूटती थीं क्योंकि config अलग था। मैंने एक बार build करने और config को artifact के बाहर रखने का सुझाव दिया (Day 21), pipeline check जोड़ा, और छोटा runbook लिखा। [दो महीने] में failed releases [N] से [M] रह गईं।"</p>
<ul>
<li>ऐसा बदलाव चुनो जो छोटा हो, measurable हो और बाद में team का अपना बन जाए।</li>
<li>Follow-up: "लोगों को कैसे मनाया?" (pain data से दिखाओ, छोटे trial से शुरू करो, नया तरीक़ा पुराने से आसान बनाओ)।</li>
</ul>
<p>Revise: Day 28 (technical debt, business terms में), Day 21 (pipelines), Day 25 (testing rules)।</p>`,
        hg: `<p><b>Template — apni story bharo:</b></p>
<ul>
<li><b>Situation:</b> [takleef: failed releases, slow reviews, flaky tests, baar-baar aate bugs; number ho to saath mein].</li>
<li><b>Task:</b> [main kya badalna chahta tha aur woh mera kaam kyon tha].</li>
<li><b>Action:</b> [sabse chhota badlaav jo chal sake: PR template, pipeline check, har bug fix ke saath test (Day 25), deployment checklist; team ko kaise raazi kiya].</li>
<li><b>Result:</b> [pehle aur baad ka measure, aur kya mere dabaav daalna band karne ke baad bhi team ne use jaari rakha].</li>
</ul>
<p><b>Sample — apni story se badal do, yeh aapki story nahi hai:</b> "[environment] ki hamari releases aksar tootti thi kyonki config alag tha. Maine ek baar build karne aur config ko artifact ke bahar rakhne ka sujhaav diya (Day 21), pipeline check joda, aur chhota runbook likha. [Do mahine] mein failed releases [N] se [M] reh gayi."</p>
<ul>
<li>Aisa badlaav chuno jo chhota ho, measurable ho aur baad mein team ka apna ban jaaye.</li>
<li>Follow-up: "Logon ko kaise manaya?" (pain data se dikhao, chhote trial se shuru karo, naya tareeka purane se aasaan banao).</li>
</ul>
<p>Revise: Day 28 (technical debt, business terms mein), Day 21 (pipelines), Day 25 (testing rules).</p>`
      }
    },
    {
      id: "lb-biggest-weakness",
      depth: "short",
      q: "What is your biggest weakness?",
      answer: "Name a real, work-related weakness [weakness], the concrete steps you are taking [action] and the progress so far [evidence]. Avoid fake weaknesses such as perfectionism.",
      meaning: {
        hi: "एक real, काम से जुड़ी कमज़ोरी बताओ [weakness], आप कौन से ठोस steps ले रहे हो [action] और अब तक की progress [evidence]। perfectionism जैसी नक़ली कमज़ोरियों से बचो।",
        hg: "Ek real, kaam se judi kamzori batao [weakness], aap kaun se thos steps le rahe ho [action] aur ab tak ki progress [evidence]. Perfectionism jaisi nakli kamzoriyon se bacho."
      },
      explain: {
        en: `<p><b>Template — fill in your own answer:</b></p>
<ul>
<li><b>Weakness:</b> [one real area that does not stop you doing a Tech Lead job].</li>
<li><b>Impact:</b> [how it showed up at work, in one sentence].</li>
<li><b>Action:</b> [what you do about it: a routine, a course, a mentor, a checklist].</li>
<li><b>Progress:</b> [a small, honest sign of improvement].</li>
</ul>
<p><b>Sample — replace with your own, this is not your answer:</b> "I used to delegate too late because I wanted to be sure about quality. I now write a short definition of done up front, review at agreed checkpoints, and hand over whole outcomes. Recently [a teammate] owned [a feature] end to end."</p>
<p>A technical gap you are actively closing is also honest, for example "I am deepening [design patterns] with weekly practice", as long as it is not a core skill of the role.</p>
<ul>
<li>Avoid "I work too hard" and avoid weaknesses that are the job itself, such as "I dislike talking to people".</li>
</ul>
<p>Revise: Day 28 (why hire me, first-time Tech Lead).</p>`,
        hi: `<p><b>Template — अपना answer भरो:</b></p>
<ul>
<li><b>Weakness:</b> [एक real area जो आपको Tech Lead का काम करने से न रोके]।</li>
<li><b>Impact:</b> [काम में यह कैसे दिखा, एक वाक्य में]।</li>
<li><b>Action:</b> [आप इसपर क्या करते हो: routine, course, mentor, checklist]।</li>
<li><b>Progress:</b> [सुधार का एक छोटा, ईमानदार संकेत]।</li>
</ul>
<p><b>Sample — अपने answer से बदल दो, यह आपका answer नहीं है:</b> "मैं delegate देर से करता था क्योंकि quality को लेकर पक्का होना चाहता था। अब मैं पहले छोटी definition of done लिखता हूँ, तय checkpoints पर review करता हूँ, और पूरा outcome सौंपता हूँ। हाल ही में [एक teammate] ने [एक feature] शुरू से आख़िर तक own किया।"</p>
<p>ऐसी technical कमी भी ईमानदार जवाब है जिसे आप सक्रिय रूप से भर रहे हो, जैसे "मैं हफ़्ते की practice से [design patterns] गहरे कर रहा हूँ", बशर्ते वो role की core skill न हो।</p>
<ul>
<li>"मैं बहुत ज़्यादा काम करता हूँ" से बचो और ऐसी कमज़ोरी से भी जो ख़ुद नौकरी है, जैसे "मुझे लोगों से बात करना पसंद नहीं"।</li>
</ul>
<p>Revise: Day 28 (why hire me, first-time Tech Lead)।</p>`,
        hg: `<p><b>Template — apna answer bharo:</b></p>
<ul>
<li><b>Weakness:</b> [ek real area jo aapko Tech Lead ka kaam karne se na roke].</li>
<li><b>Impact:</b> [kaam mein yeh kaise dikha, ek vaakya mein].</li>
<li><b>Action:</b> [aap isper kya karte ho: routine, course, mentor, checklist].</li>
<li><b>Progress:</b> [sudhaar ka ek chhota, imaandaar sanket].</li>
</ul>
<p><b>Sample — apne answer se badal do, yeh aapka answer nahi hai:</b> "Main delegate der se karta tha kyonki quality ko lekar pakka hona chahta tha. Ab main pehle chhoti definition of done likhta hoon, tay checkpoints par review karta hoon, aur poora outcome saunpta hoon. Haal hi mein [ek teammate] ne [ek feature] shuru se aakhir tak own kiya."</p>
<p>Aisi technical kami bhi imaandaar jawab hai jise aap sakriya roop se bhar rahe ho, jaise "main hafte ki practice se [design patterns] gehre kar raha hoon", bashart woh role ki core skill na ho.</p>
<ul>
<li>"Main bahut zyada kaam karta hoon" se bacho aur aisi kamzori se bhi jo khud naukri hai, jaise "mujhe logon se baat karna pasand nahi".</li>
</ul>
<p>Revise: Day 28 (why hire me, first-time Tech Lead).</p>`
      }
    },
    {
      id: "lb-questions-for-us",
      depth: "short",
      q: "Do you have any questions for us?",
      answer: "Yes. Ask about team structure, how technical decisions are made, release and on-call practice, how hands-on the lead role is, and what success looks like in the first 6 months.",
      meaning: {
        hi: "हाँ। Team structure, technical decisions कैसे लिए जाते हैं, release और on-call practice, lead role कितना hands-on है, और पहले 6 महीनों में success कैसी दिखेगी, यह पूछो।",
        hg: "Haan. Team structure, technical decisions kaise liye jaate hain, release aur on-call practice, lead role kitna hands-on hai, aur pehle 6 mahino mein success kaisi dikhegi, yeh poochho."
      },
      explain: {
        en: `<ul>
<li><b>Have 3 to 5 questions ready.</b> "No questions" can read as low interest; good questions show how you think as a lead.</li>
<li><b>Team and role:</b> "How is the team structured, and who does the Tech Lead report to?" "How much of the role is hands-on coding versus coordination?"</li>
<li><b>How work happens:</b> "How are technical decisions made and recorded?" "What does code review, release and on-call look like?" "How do you handle tech debt?"</li>
<li><b>Success and growth:</b> "What would a good first 6 months look like?" "What is the biggest challenge the team faces right now?"</li>
<li><b>Not in a first round:</b> do not open with salary or leave policy; the salary and notice talk comes later (Day 28).</li>
<li>Use their answers: one honest follow-up shows you were listening.</li>
</ul>
<p>Revise: Day 28 (salary and notice, why hire me); also the Interview-day checklist on this page.</p>`,
        hi: `<ul>
<li><b>3 से 5 सवाल तैयार रखो।</b> "कोई सवाल नहीं" से कम interest लग सकता है; अच्छे सवाल दिखाते हैं कि आप lead की तरह कैसे सोचते हो।</li>
<li><b>Team और role:</b> "Team कैसे structured है और Tech Lead किसे report करता है?" "Role में hands-on coding बनाम coordination कितना है?"</li>
<li><b>काम कैसे होता है:</b> "Technical decisions कैसे लिए और record किए जाते हैं?" "Code review, release और on-call कैसे चलते हैं?" "Tech debt कैसे संभालते हो?"</li>
<li><b>Success और growth:</b> "अच्छे पहले 6 महीने कैसे दिखेंगे?" "Team के सामने अभी सबसे बड़ी चुनौती क्या है?"</li>
<li><b>पहले round में नहीं:</b> salary या leave policy से शुरुआत मत करो; salary और notice की बात बाद में आती है (Day 28)।</li>
<li>उनके जवाब use करो: एक honest follow-up दिखाता है कि आप सुन रहे थे।</li>
</ul>
<p>Revise: Day 28 (salary और notice, why hire me); साथ में इसी page का Interview-day checklist।</p>`,
        hg: `<ul>
<li><b>3 se 5 sawaal taiyaar rakho.</b> "Koi sawaal nahi" se kam interest lag sakta hai; achhe sawaal dikhate hain ki aap lead ki tarah kaise sochte ho.</li>
<li><b>Team aur role:</b> "Team kaise structured hai aur Tech Lead kise report karta hai?" "Role mein hands-on coding banam coordination kitna hai?"</li>
<li><b>Kaam kaise hota hai:</b> "Technical decisions kaise liye aur record kiye jaate hain?" "Code review, release aur on-call kaise chalte hain?" "Tech debt kaise sambhalte ho?"</li>
<li><b>Success aur growth:</b> "Achhe pehle 6 mahine kaise dikhenge?" "Team ke saamne abhi sabse badi chunauti kya hai?"</li>
<li><b>Pehle round mein nahi:</b> salary ya leave policy se shuruaat mat karo; salary aur notice ki baat baad mein aati hai (Day 28).</li>
<li>Unke jawab use karo: ek honest follow-up dikhata hai ki aap sun rahe the.</li>
</ul>
<p>Revise: Day 28 (salary aur notice, why hire me); saath mein isi page ka Interview-day checklist.</p>`
      }
    },
    {
      id: "ai-personal-data-in-prompts",
      depth: "short",
      q: "Customer chats contain personal data. How do you use an LLM on them safely?",
      answer: "Minimise and redact personal data before the call, use an approved service with the right region and retention terms, and keep prompts and outputs out of normal logs. Get security and legal sign-off.",
      meaning: {
        hi: "Call से पहले personal data कम करो और redact करो, सही region और retention terms वाली approved service use करो, और prompts और outputs को normal logs से बाहर रखो। Security और legal का sign-off लो।",
        hg: "Call se pehle personal data kam karo aur redact karo, sahi region aur retention terms wali approved service use karo, aur prompts aur outputs ko normal logs se bahar rakho. Security aur legal ka sign-off lo."
      },
      explain: {
        en: `<ul>
<li><b>Minimise:</b> send only the fields the task needs. Replace names, phone numbers and account ids with placeholders before the call, and put the real values back after.</li>
<li><b>Choose the service carefully:</b> check the provider's current terms for data retention, whether your data may be used for training, and where it is processed. Use only a service your company has approved.</li>
<li><b>Logs and storage:</b> prompts and answers are data too. Keep them out of ordinary logs, restrict who can read them, and set a retention period (Day 26).</li>
<li><b>Access and consent:</b> the same authorisation rules as the source data apply; tell users when AI processes their messages if your policy requires it.</li>
<li><b>Testing:</b> use synthetic or masked data in tests and evaluation sets.</li>
<li><b>Trade-off:</b> redaction can remove context the model needs, and a self-hosted model keeps data in-house but costs more to run.</li>
</ul>
<p>Revise: Day 27 (responsible use, prompts), Day 26 (secrets and personal data in logs).</p>`,
        hi: `<ul>
<li><b>Minimise:</b> सिर्फ़ वही fields भेजो जो task को चाहिए। Call से पहले names, phone numbers और account ids की जगह placeholders लगाओ और बाद में असली values वापस रख दो।</li>
<li><b>Service सोच-समझकर चुनो:</b> provider की current terms देखो: data retention, क्या आपका data training में use हो सकता है, और processing कहाँ होती है। सिर्फ़ वही service use करो जो company ने approve की हो।</li>
<li><b>Logs और storage:</b> prompts और answers भी data हैं। उन्हें ordinary logs से बाहर रखो, कौन पढ़ सकता है यह सीमित करो, और retention period set करो (Day 26)।</li>
<li><b>Access और consent:</b> source data वाले ही authorisation rules लागू होते हैं; policy माँगे तो users को बताओ कि उनके messages AI process करता है।</li>
<li><b>Testing:</b> tests और evaluation sets में synthetic या masked data use करो।</li>
<li><b>Trade-off:</b> redaction से वो context हट सकता है जो model को चाहिए, और self-hosted model data अंदर रखता है पर चलाने में महँगा है।</li>
</ul>
<p>Revise: Day 27 (responsible use, prompts), Day 26 (logs में secrets और personal data)।</p>`,
        hg: `<ul>
<li><b>Minimise:</b> sirf wahi fields bhejo jo task ko chahiye. Call se pehle names, phone numbers aur account ids ki jagah placeholders lagao aur baad mein asli values wapas rakh do.</li>
<li><b>Service soch-samajhkar chuno:</b> provider ki current terms dekho: data retention, kya aapka data training mein use ho sakta hai, aur processing kahan hoti hai. Sirf wahi service use karo jo company ne approve ki ho.</li>
<li><b>Logs aur storage:</b> prompts aur answers bhi data hain. Unhe ordinary logs se bahar rakho, kaun padh sakta hai yeh seemit karo, aur retention period set karo (Day 26).</li>
<li><b>Access aur consent:</b> source data wale hi authorisation rules lagu hote hain; policy maange to users ko batao ki unke messages AI process karta hai.</li>
<li><b>Testing:</b> tests aur evaluation sets mein synthetic ya masked data use karo.</li>
<li><b>Trade-off:</b> redaction se woh context hat sakta hai jo model ko chahiye, aur self-hosted model data andar rakhta hai par chalane mein mehenga hai.</li>
</ul>
<p>Revise: Day 27 (responsible use, prompts), Day 26 (logs mein secrets aur personal data).</p>`
      }
    },
    {
      id: "ai-reliable-json-output",
      depth: "detailed",
      q: "Your code needs JSON from an LLM. How do you make that reliable?",
      answer: "Ask for a schema-shaped response, using structured output where the API supports it, then validate it in code and retry or fall back on failure. Treat the model's output as untrusted input.",
      meaning: {
        hi: "Schema वाला response माँगो, जहाँ API support करे वहाँ structured output से, फिर code में validate करो और fail होने पर retry या fallback करो। Model के output को untrusted input समझो।",
        hg: "Schema wala response maango, jahan API support kare wahan structured output se, phir code mein validate karo aur fail hone par retry ya fallback karo. Model ke output ko untrusted input samjho."
      },
      explain: {
        en: `<ul>
<li><b>Ask precisely:</b> give the exact shape (field names, allowed values) and one short example. Where the provider offers structured output or a JSON schema mode, use it; some <code>IChatClient</code> libraries can also deserialise into a C# type (check the current docs for your provider).</li>
<li><b>Validate in code:</b> parse with <code>System.Text.Json</code>, then check ranges, required fields and allowed values. A well-formed JSON can still hold a wrong value.</li>
<li><b>On failure:</b> retry once, sending the validation error back; after that fall back to a default, a simpler rule or a human review queue. Do not loop forever; every retry costs tokens.</li>
<li><b>Safety:</b> never run the output as code or SQL; treat any value from the model like user input (Day 27).</li>
<li><b>Test it:</b> keep a small set of tricky inputs and track the share of valid outputs over time.</li>
</ul>
<p>Revise: Day 27 (hallucination, tool arguments are untrusted, evaluating AI features).</p>`,
        hi: `<ul>
<li><b>सटीक माँगो:</b> exact shape दो (field names, allowed values) और एक छोटा example। Provider structured output या JSON schema mode दे तो वही use करो; कुछ <code>IChatClient</code> libraries C# type में deserialise भी कर सकती हैं (अपने provider के लिए current docs देखो)।</li>
<li><b>Code में validate करो:</b> <code>System.Text.Json</code> से parse करो, फिर ranges, required fields और allowed values check करो। सही बना हुआ JSON भी ग़लत value रख सकता है।</li>
<li><b>Fail होने पर:</b> एक बार retry करो और validation error वापस भेजो; उसके बाद default, सादा rule या human review queue पर जाओ। हमेशा loop मत चलाओ; हर retry में tokens लगते हैं।</li>
<li><b>Safety:</b> output को code या SQL की तरह कभी run मत करो; model की हर value को user input की तरह लो (Day 27)।</li>
<li><b>Test करो:</b> मुश्किल inputs का छोटा set रखो और valid outputs का हिस्सा समय के साथ track करो।</li>
</ul>
<p>Revise: Day 27 (hallucination, tool arguments untrusted हैं, AI features को evaluate करना)।</p>`,
        hg: `<ul>
<li><b>Sateek maango:</b> exact shape do (field names, allowed values) aur ek chhota example. Provider structured output ya JSON schema mode de to wahi use karo; kuch <code>IChatClient</code> libraries C# type mein deserialise bhi kar sakti hain (apne provider ke liye current docs dekho).</li>
<li><b>Code mein validate karo:</b> <code>System.Text.Json</code> se parse karo, phir ranges, required fields aur allowed values check karo. Sahi bana hua JSON bhi galat value rakh sakta hai.</li>
<li><b>Fail hone par:</b> ek baar retry karo aur validation error wapas bhejo; uske baad default, saada rule ya human review queue par jao. Hamesha loop mat chalao; har retry mein tokens lagte hain.</li>
<li><b>Safety:</b> output ko code ya SQL ki tarah kabhi run mat karo; model ki har value ko user input ki tarah lo (Day 27).</li>
<li><b>Test karo:</b> mushkil inputs ka chhota set rakho aur valid outputs ka hissa samay ke saath track karo.</li>
</ul>
<p>Revise: Day 27 (hallucination, tool arguments untrusted hain, AI features ko evaluate karna).</p>`
      }
    },
    {
      id: "ai-provider-outage-fallback",
      depth: "detailed",
      q: "The AI provider is slow, returns 429 or goes down. How do you keep your feature working?",
      answer: "Set timeouts, retry with backoff and jitter, add a circuit breaker, and degrade gracefully: a cached answer, a smaller model or a human hand-off. Tell the user honestly.",
      meaning: {
        hi: "Timeouts लगाओ, backoff और jitter के साथ retry करो, circuit breaker जोड़ो, और gracefully degrade करो: cached answer, छोटा model या human hand-off। User को ईमानदारी से बताओ।",
        hg: "Timeouts lagao, backoff aur jitter ke saath retry karo, circuit breaker jodo, aur gracefully degrade karo: cached answer, chhota model ya human hand-off. User ko imaandari se batao."
      },
      explain: {
        en: `<ul>
<li><b>Same resilience tools as any dependency:</b> an LLM is a slow, rate-limited remote service. Use <code>IHttpClientFactory</code> with a resilience handler (Day 13), and timeouts, backoff with jitter and a circuit breaker (Day 16).</li>
<li><b>429 means slow down:</b> respect <code>Retry-After</code>, cap concurrency with a bulkhead, and set a token or request budget per user so one heavy user cannot use up the quota.</li>
<li><b>Do not retry blindly:</b> a retry costs money and an action the model triggered (a tool call) may not be safe to repeat; make such actions idempotent (Day 27).</li>
<li><b>Degrade gracefully:</b> a cached answer for common questions, a smaller or alternative model, a rule-based reply, or a hand-off to a human. For non-interactive work, put it on a queue and process it later.</li>
<li><b>Observe:</b> trace latency, error rate and token use per call (Day 20). Alert on the error rate, not on single failures.</li>
<li><b>Trade-off:</b> a fallback answer can be lower quality, so label it or hide the AI-only features when quality would be misleading.</li>
</ul>
<p>Revise: Day 16 (retry, circuit breaker, bulkhead), Day 13 (resilience handler), Day 27 (cost and tool calling).</p>`,
        hi: `<ul>
<li><b>किसी भी dependency वाले ही resilience tools:</b> LLM एक slow, rate-limited remote service है। Resilience handler के साथ <code>IHttpClientFactory</code> (Day 13), और timeouts, jitter के साथ backoff और circuit breaker (Day 16) use करो।</li>
<li><b>429 का मतलब धीमे चलो:</b> <code>Retry-After</code> मानो, bulkhead से concurrency सीमित करो, और हर user पर token या request budget रखो ताकि एक भारी user पूरा quota ख़त्म न कर दे।</li>
<li><b>अंधाधुंध retry मत करो:</b> retry में पैसे लगते हैं और model से trigger हुआ action (tool call) दोहराना safe नहीं हो सकता; ऐसे actions को idempotent बनाओ (Day 27)।</li>
<li><b>Gracefully degrade करो:</b> आम सवालों के लिए cached answer, छोटा या दूसरा model, rule-based reply, या human को hand-off। Non-interactive काम को queue में डालकर बाद में process करो।</li>
<li><b>Observe करो:</b> हर call की latency, error rate और token use trace करो (Day 20)। Error rate पर alert लगाओ, अकेली failures पर नहीं।</li>
<li><b>Trade-off:</b> fallback answer की quality कम हो सकती है, इसलिए उसे label करो, या जहाँ quality गुमराह करे वहाँ AI-only features छुपा दो।</li>
</ul>
<p>Revise: Day 16 (retry, circuit breaker, bulkhead), Day 13 (resilience handler), Day 27 (cost और tool calling)।</p>`,
        hg: `<ul>
<li><b>Kisi bhi dependency wale hi resilience tools:</b> LLM ek slow, rate-limited remote service hai. Resilience handler ke saath <code>IHttpClientFactory</code> (Day 13), aur timeouts, jitter ke saath backoff aur circuit breaker (Day 16) use karo.</li>
<li><b>429 ka matlab dheeme chalo:</b> <code>Retry-After</code> maano, bulkhead se concurrency seemit karo, aur har user par token ya request budget rakho taaki ek bhaari user poora quota khatam na kar de.</li>
<li><b>Andhadhund retry mat karo:</b> retry mein paise lagte hain aur model se trigger hua action (tool call) dohrana safe nahi ho sakta; aise actions ko idempotent banao (Day 27).</li>
<li><b>Gracefully degrade karo:</b> aam sawaalon ke liye cached answer, chhota ya doosra model, rule-based reply, ya human ko hand-off. Non-interactive kaam ko queue mein daalkar baad mein process karo.</li>
<li><b>Observe karo:</b> har call ki latency, error rate aur token use trace karo (Day 20). Error rate par alert lagao, akeli failures par nahi.</li>
<li><b>Trade-off:</b> fallback answer ki quality kam ho sakti hai, isliye use label karo, ya jahan quality gumraah kare wahan AI-only features chhupa do.</li>
</ul>
<p>Revise: Day 16 (retry, circuit breaker, bulkhead), Day 13 (resilience handler), Day 27 (cost aur tool calling).</p>`
      }
    },
    {
      id: "ai-build-or-buy",
      depth: "detailed",
      q: "Would you build an AI capability in-house or buy a ready product?",
      answer: "Buy or use a managed service for commodity needs; build only where it differentiates you or data must stay in-house. Compare cost, risk and exit options, and pilot first.",
      meaning: {
        hi: "Commodity ज़रूरतों के लिए खरीदो या managed service लो; build तभी करो जब वो आपको अलग बनाए या data अंदर रखना पड़े। Cost, risk और exit options compare करो, और पहले pilot करो।",
        hg: "Commodity zaroorton ke liye kharido ya managed service lo; build tabhi karo jab woh aapko alag banaye ya data andar rakhna pade. Cost, risk aur exit options compare karo, aur pehle pilot karo."
      },
      explain: {
        en: `<ul>
<li><b>Ask what is special:</b> summarising tickets or transcribing calls is commodity; a feature built on your unique data and workflow may be your edge.</li>
<li><b>Criteria:</b> speed to value, total cost (including evaluation, monitoring and security work, not just model calls), data sensitivity and residency, accuracy needed, and the team's skills.</li>
<li><b>Middle path:</b> use a managed model (Azure OpenAI or Foundry, Day 27) and build the thin, valuable layer yourself: your prompts, your grounding data, your evaluation set.</li>
<li><b>Reduce lock-in:</b> code against <code>IChatClient</code> (Day 27) so a model or provider can be swapped; keep your evaluation set so you can compare candidates fairly.</li>
<li><b>Pilot first:</b> define one success metric and a time box, then decide. Do not build a platform for a single use case.</li>
<li><b>Trade-off:</b> buying is fast but less flexible; building is flexible but you own quality, safety and upkeep.</li>
</ul>
<p>Revise: Day 27 (choosing a model, Azure OpenAI vs Foundry, IChatClient, evaluation).</p>`,
        hi: `<ul>
<li><b>पूछो कि special क्या है:</b> tickets का summary या calls की transcription commodity है; आपके अनोखे data और workflow पर बना feature आपकी धार हो सकता है।</li>
<li><b>Criteria:</b> value तक पहुँचने की speed, कुल cost (evaluation, monitoring और security का काम भी, सिर्फ़ model calls नहीं), data की sensitivity और residency, ज़रूरी accuracy, और team की skills।</li>
<li><b>बीच का रास्ता:</b> managed model (Azure OpenAI या Foundry, Day 27) लो और पतली, क़ीमती layer ख़ुद बनाओ: आपके prompts, आपका grounding data, आपका evaluation set।</li>
<li><b>Lock-in घटाओ:</b> <code>IChatClient</code> के against code लिखो (Day 27) ताकि model या provider बदला जा सके; evaluation set रखो ताकि candidates की fair तुलना हो सके।</li>
<li><b>पहले pilot:</b> एक success metric और time box तय करो, फिर decide करो। एक use case के लिए पूरा platform मत बनाओ।</li>
<li><b>Trade-off:</b> खरीदना तेज़ है पर कम flexible; बनाना flexible है पर quality, safety और upkeep आपके ज़िम्मे।</li>
</ul>
<p>Revise: Day 27 (model चुनना, Azure OpenAI vs Foundry, IChatClient, evaluation)।</p>`,
        hg: `<ul>
<li><b>Poochho ki special kya hai:</b> tickets ka summary ya calls ki transcription commodity hai; aapke anokhe data aur workflow par bana feature aapki dhaar ho sakta hai.</li>
<li><b>Criteria:</b> value tak pahunchne ki speed, kul cost (evaluation, monitoring aur security ka kaam bhi, sirf model calls nahi), data ki sensitivity aur residency, zaroori accuracy, aur team ki skills.</li>
<li><b>Beech ka raasta:</b> managed model (Azure OpenAI ya Foundry, Day 27) lo aur patli, keemti layer khud banao: aapke prompts, aapka grounding data, aapka evaluation set.</li>
<li><b>Lock-in ghatao:</b> <code>IChatClient</code> ke against code likho (Day 27) taaki model ya provider badla ja sake; evaluation set rakho taaki candidates ki fair tulna ho sake.</li>
<li><b>Pehle pilot:</b> ek success metric aur time box tay karo, phir decide karo. Ek use case ke liye poora platform mat banao.</li>
<li><b>Trade-off:</b> kharidna tez hai par kam flexible; banana flexible hai par quality, safety aur upkeep aapke zimme.</li>
</ul>
<p>Revise: Day 27 (model chunna, Azure OpenAI vs Foundry, IChatClient, evaluation).</p>`
      }
    }

  ],
  puzzles: [
    {
      id: "audit-log-sizing",
      src: `long requestsPerDay = 2_000_000;
long writesPerDay = requestsPerDay * 20 / 100;      // 20% of requests write an audit row
long rowsPerYear = writesPerDay * 365;
long bytesPerRow = 500;

long gbPerYear = rowsPerYear * bytesPerRow * 3 / 2 / 1_000_000_000;   // x1.5 for indexes
long gbSevenYears = rowsPerYear * 7 * bytesPerRow * 3 / 2 / 1_000_000_000;
long roundedEarly = gbPerYear * 7;

Console.WriteLine($"writes/day: {writesPerDay}");
Console.WriteLine($"average write QPS: {writesPerDay / 86_400}");
Console.WriteLine($"peak write QPS (x3): {writesPerDay * 3 / 86_400}");
Console.WriteLine($"GB per year: {gbPerYear}");
Console.WriteLine($"GB for 7 years: {gbSevenYears}");
Console.WriteLine($"7 x rounded yearly figure: {roundedEarly}");`,
      answer: `writes/day: 400000
average write QPS: 4
peak write QPS (x3): 13
GB per year: 109
GB for 7 years: 766
7 x rounded yearly figure: 763`,
      explain: {
        en: `<p>Everything is <code>long</code> integer maths, and each division truncates. 2,000,000 x 20% = 400,000 writes a day. 400,000 / 86,400 is 4.6, which truncates to <b>4</b>. The peak line multiplies <b>first</b> (1,200,000 / 86,400 = 13.9, which prints <b>13</b>), so it is not 3 x 4 = 12. A year is 146,000,000 rows; at 500 bytes with 1.5x for indexes that is 109.5 GB, truncated to <b>109</b>. Seven years in one go gives <b>766</b>, but multiplying the already-rounded 109 by 7 gives <b>763</b>.</p>
<p>Lesson from Day 17: in an estimate, round only at the end, and say your assumptions aloud. Here the rounding gap is small, but it grows with scale.</p>`,
        hi: `<p>सब कुछ <code>long</code> integer maths है, और हर division truncate करता है। 2,000,000 x 20% = रोज़ 400,000 writes। 400,000 / 86,400 = 4.6, जो truncate होकर <b>4</b> बनता है। Peak वाली line <b>पहले</b> multiply करती है (1,200,000 / 86,400 = 13.9, यानी <b>13</b> print होता है), इसलिए यह 3 x 4 = 12 नहीं है। एक साल में 146,000,000 rows; 500 bytes और indexes के लिए 1.5x के साथ 109.5 GB, truncate होकर <b>109</b>। सात साल एक साथ निकालो तो <b>766</b>, पर पहले से round किए 109 को 7 से गुणा करो तो <b>763</b>।</p>
<p>Day 17 का सबक: estimate में rounding सिर्फ़ आख़िर में करो, और assumptions ज़ोर से बोलो। यहाँ rounding का gap छोटा है, पर scale के साथ बढ़ता है।</p>`,
        hg: `<p>Sab kuch <code>long</code> integer maths hai, aur har division truncate karta hai. 2,000,000 x 20% = roz 400,000 writes. 400,000 / 86,400 = 4.6, jo truncate hokar <b>4</b> banta hai. Peak wali line <b>pehle</b> multiply karti hai (1,200,000 / 86,400 = 13.9, yaani <b>13</b> print hota hai), isliye yeh 3 x 4 = 12 nahi hai. Ek saal mein 146,000,000 rows; 500 bytes aur indexes ke liye 1.5x ke saath 109.5 GB, truncate hokar <b>109</b>. Saat saal ek saath nikalo to <b>766</b>, par pehle se round kiye 109 ko 7 se guna karo to <b>763</b>.</p>
<p>Day 17 ka sabak: estimate mein rounding sirf aakhir mein karo, aur assumptions zor se bolo. Yahan rounding ka gap chhota hai, par scale ke saath badhta hai.</p>`
      }
    },
    {
      id: "fixed-window-vs-sliding-log",
      src: `// Limit: 3 requests per 10 seconds. Request times are whole seconds.
int[] times = { 8, 9, 9, 10, 10, 11, 18 };

// 1) Fixed window: count per bucket t / 10
var counts = new Dictionary<int, int>();
var fixedAccepted = new List<int>();
foreach (var t in times)
{
    int window = t / 10;
    counts[window] = counts.GetValueOrDefault(window) + 1;
    if (counts[window] <= 3) fixedAccepted.Add(t);
}

// 2) Sliding window log: accept if fewer than 3 accepted in (t - 10, t]
var slidingAccepted = new List<int>();
foreach (var t in times)
{
    int recent = slidingAccepted.Count(a => a > t - 10);
    if (recent < 3) slidingAccepted.Add(t);
}

Console.WriteLine("fixed:   " + string.Join(",", fixedAccepted));
Console.WriteLine("sliding: " + string.Join(",", slidingAccepted));`,
      answer: `fixed:   8,9,9,10,10,11
sliding: 8,9,9,18`,
      explain: {
        en: `<p>The fixed window puts time into buckets 0 to 9 and 10 to 19. Bucket 0 accepts 8, 9, 9 (its limit of three). At second 10 a fresh bucket starts, so 10, 10, 11 are accepted too: <b>six requests in four seconds</b> although the rule says "3 per 10 seconds". The 18 is the fourth in bucket 1, so it is rejected. The sliding log looks at the last 10 seconds from each request: 10, 10 and 11 still see three accepted requests (8, 9, 9) and are rejected, and 18 sees only two (the two 9s), so it is accepted.</p>
<p>Lesson from Days 13 and 17: a fixed window is simple and cheap but allows a burst of up to twice the limit at a boundary; sliding windows and token buckets smooth it out, at the cost of more state.</p>`,
        hi: `<p>Fixed window time को buckets 0 से 9 और 10 से 19 में बाँटता है। Bucket 0, 8, 9, 9 accept करता है (तीन की limit)। Second 10 पर नया bucket शुरू होता है, इसलिए 10, 10, 11 भी accept हो जाते हैं: नियम "10 second में 3" होने पर भी <b>चार second में छह requests</b>। 18 bucket 1 की चौथी है, इसलिए reject। Sliding log हर request से पिछले 10 second देखता है: 10, 10 और 11 को अब भी तीन accepted requests (8, 9, 9) दिखती हैं और वो reject होती हैं, और 18 को सिर्फ़ दो (दोनों 9) दिखती हैं, इसलिए accept।</p>
<p>Day 13 और 17 का सबक: fixed window सादा और सस्ता है पर boundary पर limit से दोगुना तक burst आने देता है; sliding windows और token buckets इसे smooth करते हैं, ज़्यादा state के बदले।</p>`,
        hg: `<p>Fixed window time ko buckets 0 se 9 aur 10 se 19 mein baantta hai. Bucket 0, 8, 9, 9 accept karta hai (teen ki limit). Second 10 par naya bucket shuru hota hai, isliye 10, 10, 11 bhi accept ho jaate hain: niyam "10 second mein 3" hone par bhi <b>chaar second mein chhe requests</b>. 18 bucket 1 ki chauthi hai, isliye reject. Sliding log har request se pichhle 10 second dekhta hai: 10, 10 aur 11 ko ab bhi teen accepted requests (8, 9, 9) dikhti hain aur woh reject hoti hain, aur 18 ko sirf do (dono 9) dikhti hain, isliye accept.</p>
<p>Day 13 aur 17 ka sabak: fixed window saada aur sasta hai par boundary par limit se doguna tak burst aane deta hai; sliding windows aur token buckets ise smooth karte hain, zyada state ke badle.</p>`
      }
    },
    {
      id: "async-iterator-cancellation",
      src: `using System.Runtime.CompilerServices;

using var cts = new CancellationTokenSource();

async IAsyncEnumerable<int> Produce([EnumeratorCancellation] CancellationToken ct = default)
{
    try
    {
        for (int i = 1; i <= 5; i++)
        {
            ct.ThrowIfCancellationRequested();
            Console.WriteLine($"produce {i}");
            await Task.Yield();
            yield return i;
        }
    }
    finally
    {
        Console.WriteLine("producer cleanup");
    }
}

try
{
    await foreach (var n in Produce().WithCancellation(cts.Token))
    {
        Console.WriteLine($"consume {n}");
        if (n == 2) cts.Cancel();
    }
}
catch (OperationCanceledException)
{
    Console.WriteLine("cancelled");
}
Console.WriteLine("done");`,
      answer: `produce 1
consume 1
produce 2
consume 2
producer cleanup
cancelled
done`,
      explain: {
        en: `<p>An async iterator is lazy: the loop pulls one item, so the output interleaves (produce 1, consume 1, produce 2, consume 2). When the consumer calls <code>cts.Cancel()</code> after item 2, nothing stops immediately; cancellation is <b>cooperative</b>. The producer only notices at its next check, <code>ThrowIfCancellationRequested()</code> at the top of the third loop turn, so "produce 3" is never printed. The exception leaves the iterator through its <code>finally</code> block ("producer cleanup"), then reaches the <code>await foreach</code> and the <code>catch</code> ("cancelled") before "done". <code>WithCancellation</code> plus <code>[EnumeratorCancellation]</code> is how the token reaches the iterator's parameter.</p>
<p>Lesson from Days 3 and 4: pass the token everywhere and expect <code>OperationCanceledException</code>; a streaming API stops work and cleans up when the caller cancels.</p>`,
        hi: `<p>Async iterator lazy है: loop एक item खींचता है, इसलिए output interleave होता है (produce 1, consume 1, produce 2, consume 2)। Consumer जब item 2 के बाद <code>cts.Cancel()</code> बुलाता है, तो कुछ भी तुरंत नहीं रुकता; cancellation <b>cooperative</b> है। Producer को सिर्फ़ अपने अगले check पर पता चलता है, यानी तीसरे loop turn की शुरुआत में <code>ThrowIfCancellationRequested()</code>, इसलिए "produce 3" कभी print नहीं होता। Exception iterator से उसके <code>finally</code> block ("producer cleanup") से होकर निकलता है, फिर <code>await foreach</code> और <code>catch</code> ("cancelled") तक पहुँचता है, "done" से पहले। <code>WithCancellation</code> और <code>[EnumeratorCancellation]</code> से token iterator के parameter तक पहुँचता है।</p>
<p>Day 3 और 4 का सबक: token हर जगह पास करो और <code>OperationCanceledException</code> की उम्मीद रखो; caller cancel करे तो streaming API काम रोकती है और cleanup करती है।</p>`,
        hg: `<p>Async iterator lazy hai: loop ek item kheenchta hai, isliye output interleave hota hai (produce 1, consume 1, produce 2, consume 2). Consumer jab item 2 ke baad <code>cts.Cancel()</code> bulata hai, to kuch bhi turant nahi rukta; cancellation <b>cooperative</b> hai. Producer ko sirf apne agle check par pata chalta hai, yaani teesre loop turn ki shuruaat mein <code>ThrowIfCancellationRequested()</code>, isliye "produce 3" kabhi print nahi hota. Exception iterator se uske <code>finally</code> block ("producer cleanup") se hokar nikalta hai, phir <code>await foreach</code> aur <code>catch</code> ("cancelled") tak pahunchta hai, "done" se pehle. <code>WithCancellation</code> aur <code>[EnumeratorCancellation]</code> se token iterator ke parameter tak pahunchta hai.</p>
<p>Day 3 aur 4 ka sabak: token har jagah pass karo aur <code>OperationCanceledException</code> ki ummeed rakho; caller cancel kare to streaming API kaam rokti hai aur cleanup karti hai.</p>`
      }
    },
    {
      id: "gap-detection-with-lag",
      lang: "sql",
      src: `CREATE TABLE dbo.AuditSeq (Seq int NOT NULL);
INSERT dbo.AuditSeq VALUES (1), (2), (3), (7), (8), (12);

SELECT Prev + 1 AS gap_from, Seq - 1 AS gap_to
FROM (SELECT Seq, LAG(Seq) OVER (ORDER BY Seq) AS Prev FROM dbo.AuditSeq) AS t
WHERE Seq - Prev > 1
ORDER BY gap_from;

SELECT COUNT(*) AS rows_with_prev
FROM (SELECT LAG(Seq) OVER (ORDER BY Seq) AS Prev FROM dbo.AuditSeq) AS t
WHERE Prev IS NOT NULL;`,
      answer: `4 6
9 11
5`,
      explain: {
        en: `<p><code>LAG(Seq)</code> gives the previous row's value in <code>Seq</code> order. A gap exists where <code>Seq - Prev &gt; 1</code>: between 3 and 7 the missing numbers are 4 to 6, and between 8 and 12 they are 9 to 11. For the first row <code>Prev</code> is NULL, so <code>Seq - Prev</code> is NULL and the WHERE drops it (NULL is never "greater than 1"). Six rows, so five of them have a previous value.</p>
<p>Lesson from Day 18: window functions solve "compare with the neighbour" problems without a self-join, and NULL arithmetic quietly filters rows. Missing audit sequence numbers are exactly how you spot a lost log entry.</p>`,
        hi: `<p><code>LAG(Seq)</code> <code>Seq</code> के order में पिछली row की value देता है। Gap वहाँ है जहाँ <code>Seq - Prev &gt; 1</code>: 3 और 7 के बीच missing numbers 4 से 6 हैं, और 8 और 12 के बीच 9 से 11। पहली row के लिए <code>Prev</code> NULL है, इसलिए <code>Seq - Prev</code> NULL होता है और WHERE उसे हटा देता है (NULL कभी "1 से बड़ा" नहीं होता)। छह rows हैं, तो पाँच के पास previous value है।</p>
<p>Day 18 का सबक: window functions "पड़ोसी से compare करो" वाली समस्याएँ self-join के बिना हल करते हैं, और NULL arithmetic चुपचाप rows filter कर देता है। Audit sequence के missing numbers से ही खोई हुई log entry पकड़ी जाती है।</p>`,
        hg: `<p><code>LAG(Seq)</code> <code>Seq</code> ke order mein pichhli row ki value deta hai. Gap wahan hai jahan <code>Seq - Prev &gt; 1</code>: 3 aur 7 ke beech missing numbers 4 se 6 hain, aur 8 aur 12 ke beech 9 se 11. Pehli row ke liye <code>Prev</code> NULL hai, isliye <code>Seq - Prev</code> NULL hota hai aur WHERE use hata deta hai (NULL kabhi "1 se bada" nahi hota). Chhe rows hain, to paanch ke paas previous value hai.</p>
<p>Day 18 ka sabak: window functions "padosi se compare karo" wali samasyayein self-join ke bina hal karte hain, aur NULL arithmetic chupchaap rows filter kar deta hai. Audit sequence ke missing numbers se hi khoyi hui log entry pakdi jaati hai.</p>`
      }
    },
    {
      id: "latest-row-per-key-and-null-order",
      lang: "sql",
      src: `CREATE TABLE dbo.TenantEvents (TenantId int NOT NULL, EventKey varchar(5) NOT NULL, Status varchar(10) NOT NULL, UpdatedAt int NULL);
INSERT dbo.TenantEvents VALUES
 (1, 'A', 'new', 1), (1, 'A', 'paid', 3),
 (2, 'A', 'new', NULL), (2, 'A', 'paid', 2);

SELECT TenantId, Status AS latest
FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY TenantId, EventKey ORDER BY UpdatedAt DESC) AS rn
      FROM dbo.TenantEvents) AS t
WHERE rn = 1
ORDER BY TenantId;

SELECT TenantId, Status AS first_row
FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY TenantId, EventKey ORDER BY UpdatedAt) AS rn
      FROM dbo.TenantEvents) AS t
WHERE rn = 1
ORDER BY TenantId;`,
      answer: `1 paid
2 paid
1 new
2 new`,
      explain: {
        en: `<p><code>ROW_NUMBER() OVER (PARTITION BY ... ORDER BY UpdatedAt DESC)</code> numbers the rows of each (tenant, key) group, newest first; keeping <code>rn = 1</code> gives the latest row per group. Tenant 1: <code>paid</code> (time 3). Tenant 2 has a <b>NULL</b> time: in SQL Server NULL sorts as the <b>lowest</b> value, so in DESC order it comes last and <code>paid</code> (time 2) wins. In the second query (ascending) NULL comes <b>first</b>, so tenant 2's "first" row is <code>new</code> with the NULL time.</p>
<p>Lesson from Day 18 and the multi-tenant design: always partition by tenant, and decide what NULL should mean before you rank. Without a unique tie-breaker, equal timestamps would pick an arbitrary row, so add one in real code.</p>`,
        hi: `<p><code>ROW_NUMBER() OVER (PARTITION BY ... ORDER BY UpdatedAt DESC)</code> हर (tenant, key) group की rows को number करता है, सबसे नई पहले; <code>rn = 1</code> रखने से हर group की latest row मिलती है। Tenant 1: <code>paid</code> (time 3)। Tenant 2 का time <b>NULL</b> है: SQL Server में NULL सबसे <b>छोटी</b> value की तरह sort होता है, इसलिए DESC order में वो आख़िर में आता है और <code>paid</code> (time 2) जीतता है। दूसरी query (ascending) में NULL <b>पहले</b> आता है, इसलिए tenant 2 की "first" row NULL time वाली <code>new</code> है।</p>
<p>Day 18 और multi-tenant design का सबक: हमेशा tenant से partition करो, और rank करने से पहले तय करो कि NULL का मतलब क्या है। Unique tie-breaker के बिना बराबर timestamps कोई भी row चुन लेंगे, इसलिए real code में एक जोड़ो।</p>`,
        hg: `<p><code>ROW_NUMBER() OVER (PARTITION BY ... ORDER BY UpdatedAt DESC)</code> har (tenant, key) group ki rows ko number karta hai, sabse nayi pehle; <code>rn = 1</code> rakhne se har group ki latest row milti hai. Tenant 1: <code>paid</code> (time 3). Tenant 2 ka time <b>NULL</b> hai: SQL Server mein NULL sabse <b>chhoti</b> value ki tarah sort hota hai, isliye DESC order mein woh aakhir mein aata hai aur <code>paid</code> (time 2) jeetta hai. Doosri query (ascending) mein NULL <b>pehle</b> aata hai, isliye tenant 2 ki "first" row NULL time wali <code>new</code> hai.</p>
<p>Day 18 aur multi-tenant design ka sabak: hamesha tenant se partition karo, aur rank karne se pehle tay karo ki NULL ka matlab kya hai. Unique tie-breaker ke bina barabar timestamps koi bhi row chun lenge, isliye real code mein ek jodo.</p>`
      }
    },
    {
      id: "interleaved-promise-chains",
      lang: "javascript",
      src: `const log = [];

Promise.resolve()
  .then(() => log.push("A1"))
  .then(() => log.push("A2"))
  .then(() => log.push("A3"));

(async () => {
  log.push("B0");
  await null;
  log.push("B1");
  await null;
  log.push("B2");
})();

Promise.resolve()
  .then(() => log.push("C1"))
  .then(() => log.push("C2"));

log.push("sync end");
setTimeout(() => console.log(log.join(" ")), 0);`,
      answer: `B0 sync end A1 B1 C1 A2 B2 C2 A3`,
      explain: {
        en: `<p>Synchronous code first: the async function runs up to its first <code>await</code>, so "B0" is logged before "sync end". Three microtasks are now waiting, in the order they were queued: A1, the first resume of B, and C1. Each turn runs one task and queues the <b>next link</b> of that chain at the back of the queue. So the chains take turns: A1, B1, C1, then A2, B2, C2, then A3 (the A chain is the longest). The timer, a macrotask, prints the whole log after all microtasks are done.</p>
<p>Lesson from Day 23: <code>await</code> and <code>.then</code> both use the microtask queue, and independent chains interleave one hop at a time instead of one chain finishing first.</p>`,
        hi: `<p>पहले synchronous code: async function अपने पहले <code>await</code> तक चलता है, इसलिए "B0" "sync end" से पहले log होता है। अब तीन microtasks इंतज़ार में हैं, उसी order में जिसमें queue हुए: A1, B का पहला resume, और C1। हर turn एक task चलाता है और उस chain का <b>अगला link</b> queue के आख़िर में लगा देता है। इसलिए chains बारी-बारी चलती हैं: A1, B1, C1, फिर A2, B2, C2, फिर A3 (A chain सबसे लंबी है)। Timer, जो एक macrotask है, सारे microtasks ख़त्म होने के बाद पूरा log print करता है।</p>
<p>Day 23 का सबक: <code>await</code> और <code>.then</code> दोनों microtask queue use करते हैं, और independent chains एक chain के पहले पूरी होने की जगह एक-एक hop करके interleave होती हैं।</p>`,
        hg: `<p>Pehle synchronous code: async function apne pehle <code>await</code> tak chalta hai, isliye "B0" "sync end" se pehle log hota hai. Ab teen microtasks intezaar mein hain, usi order mein jisme queue hue: A1, B ka pehla resume, aur C1. Har turn ek task chalata hai aur us chain ka <b>agla link</b> queue ke aakhir mein laga deta hai. Isliye chains baari-baari chalti hain: A1, B1, C1, phir A2, B2, C2, phir A3 (A chain sabse lambi hai). Timer, jo ek macrotask hai, saare microtasks khatam hone ke baad poora log print karta hai.</p>
<p>Day 23 ka sabak: <code>await</code> aur <code>.then</code> dono microtask queue use karte hain, aur independent chains ek chain ke pehle poori hone ki jagah ek-ek hop karke interleave hoti hain.</p>`
      }
    },
    {
      id: "tryadd-vs-tryaddenumerable",
      packages: ["Microsoft.Extensions.DependencyInjection"],
      src: `using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

var services = new ServiceCollection();
services.AddSingleton<INotifier, EmailNotifier>();
services.TryAddSingleton<INotifier, SmsNotifier>();                          // ignored: INotifier is already registered
services.TryAddEnumerable(ServiceDescriptor.Singleton<INotifier, SmsNotifier>());   // added: SmsNotifier is new
services.TryAddEnumerable(ServiceDescriptor.Singleton<INotifier, EmailNotifier>()); // ignored: same implementation exists
services.AddSingleton<INotifier, EmailNotifier>();                            // added: plain Add never checks

using var provider = services.BuildServiceProvider();
Console.WriteLine(string.Join(",", provider.GetServices<INotifier>().Select(n => n.Name)));
Console.WriteLine(provider.GetRequiredService<INotifier>().Name);

interface INotifier { string Name { get; } }
class EmailNotifier : INotifier { public string Name => "Email"; }
class SmsNotifier : INotifier { public string Name => "Sms"; }`,
      answer: `Email,Sms,Email
Email`,
      explain: {
        en: `<p><code>TryAddSingleton&lt;INotifier, SmsNotifier&gt;</code> only checks whether the <b>service type</b> is already registered; it is, so the call is ignored. <code>TryAddEnumerable</code> instead checks the <b>service type plus implementation type</b>: Sms is new, so it is added; Email is already there, so the second call is ignored. A plain <code>AddSingleton</code> never checks, so Email is added a second time. <code>GetServices</code> returns all three in registration order: Email, Sms, Email. <code>GetRequiredService</code> returns the <b>last</b> registration, which is Email.</p>
<p>Lesson from Days 8 and 11: use <code>TryAdd</code> for "register a default unless someone already did" and <code>TryAddEnumerable</code> for "add one more handler once"; libraries use them so that calling their setup twice does not duplicate services.</p>`,
        hi: `<p><code>TryAddSingleton&lt;INotifier, SmsNotifier&gt;</code> सिर्फ़ यह देखता है कि <b>service type</b> पहले से registered है या नहीं; है, इसलिए call ignore हो जाती है। <code>TryAddEnumerable</code> इसके बजाय <b>service type और implementation type</b> दोनों देखता है: Sms नया है, इसलिए जुड़ जाता है; Email पहले से है, इसलिए दूसरी call ignore। सादा <code>AddSingleton</code> कभी check नहीं करता, इसलिए Email दूसरी बार जुड़ जाता है। <code>GetServices</code> तीनों को registration order में लौटाता है: Email, Sms, Email। <code>GetRequiredService</code> <b>आख़िरी</b> registration लौटाता है, जो Email है।</p>
<p>Day 8 और 11 का सबक: "default register करो अगर किसी ने नहीं किया" के लिए <code>TryAdd</code>, और "एक और handler एक बार जोड़ो" के लिए <code>TryAddEnumerable</code>; libraries इन्हें इसलिए use करती हैं कि उनका setup दो बार बुलाने से services duplicate न हों।</p>`,
        hg: `<p><code>TryAddSingleton&lt;INotifier, SmsNotifier&gt;</code> sirf yeh dekhta hai ki <b>service type</b> pehle se registered hai ya nahi; hai, isliye call ignore ho jaati hai. <code>TryAddEnumerable</code> iske bajaye <b>service type aur implementation type</b> dono dekhta hai: Sms naya hai, isliye jud jaata hai; Email pehle se hai, isliye doosri call ignore. Saada <code>AddSingleton</code> kabhi check nahi karta, isliye Email doosri baar jud jaata hai. <code>GetServices</code> teeno ko registration order mein lautata hai: Email, Sms, Email. <code>GetRequiredService</code> <b>aakhri</b> registration lautata hai, jo Email hai.</p>
<p>Day 8 aur 11 ka sabak: "default register karo agar kisi ne nahi kiya" ke liye <code>TryAdd</code>, aur "ek aur handler ek baar jodo" ke liye <code>TryAddEnumerable</code>; libraries inhe isliye use karti hain ki unka setup do baar bulane se services duplicate na hon.</p>`
      }
    }


  ],
  revision: {
    en: [
      "Every design answer: clarify, estimate, design, trade-offs, and say your assumptions aloud.",
      "<code>override</code> follows the object, <code>new</code> follows the reference.",
      "A LINQ query runs only when enumerated, and runs again at every enumeration.",
      "<b>N+1</b>: count the queries, read the SQL, and load in one go.",
      "Async all the way: <code>.Result</code> and <code>.Wait()</code> can starve the thread pool.",
      "Brokers usually deliver at-least-once, so make every consumer idempotent.",
      "Measure first: read the trace and the execution plan before you optimise.",
      "Logged in is not enough: check ownership of every object (IDOR).",
      "AI output and tool arguments are untrusted input, and you stay accountable.",
      "Use STAR with your own real story and spend most of the time on your action."
    ],
    meaning: {
      hi: [
        "हर design answer में: clarify, estimate, design, trade-offs, और अपने assumptions ज़ोर से बोलो।",
        "<code>override</code> object को follow करता है, <code>new</code> reference को।",
        "LINQ query तभी चलती है जब enumerate हो, और हर enumeration पर दोबारा चलती है।",
        "<b>N+1</b>: queries गिनो, SQL पढ़ो, और एक बार में load करो।",
        "Async all the way: <code>.Result</code> और <code>.Wait()</code> thread pool को starve कर सकते हैं।",
        "Brokers आम तौर पर at-least-once deliver करते हैं, इसलिए हर consumer को idempotent बनाओ।",
        "पहले measure करो: optimise करने से पहले trace और execution plan पढ़ो।",
        "Logged in होना काफ़ी नहीं: हर object की ownership check करो (IDOR)।",
        "AI output और tool arguments untrusted input हैं, और जवाबदेही आपकी रहती है।",
        "अपनी real story के साथ STAR use करो और ज़्यादातर समय अपने action पर लगाओ।"
      ],
      hg: [
        "Har design answer mein: clarify, estimate, design, trade-offs, aur apne assumptions zor se bolo.",
        "<code>override</code> object ko follow karta hai, <code>new</code> reference ko.",
        "LINQ query tabhi chalti hai jab enumerate ho, aur har enumeration par dobara chalti hai.",
        "<b>N+1</b>: queries gino, SQL padho, aur ek baar mein load karo.",
        "Async all the way: <code>.Result</code> aur <code>.Wait()</code> thread pool ko starve kar sakte hain.",
        "Brokers aam taur par at-least-once deliver karte hain, isliye har consumer ko idempotent banao.",
        "Pehle measure karo: optimise karne se pehle trace aur execution plan padho.",
        "Logged in hona kaafi nahi: har object ki ownership check karo (IDOR).",
        "AI output aur tool arguments untrusted input hain, aur jawabdehi aapki rehti hai.",
        "Apni real story ke saath STAR use karo aur zyadatar samay apne action par lagao."
      ]
    }

  }
};
