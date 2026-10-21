// Day 3 — C# Advanced. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 3,
  title: {
    en: "C# Advanced — async/await, exceptions, IDisposable & GC, records, pattern matching, nullable, Span",
    hi: "C# Advanced — async/await, exceptions, IDisposable & GC, records, pattern matching, nullable, Span (C# की गहराई)",
    hg: "C# Advanced — async/await, exceptions, IDisposable & GC, records, pattern matching, nullable, Span"
  },
  summary: {
    en: `<p>Today is the <b>"senior developer" layer</b> of C#. These are the topics where interviewers separate people who <i>use</i> async and records from people who can <i>explain</i> them — and a Tech Lead must also spot the mistakes in code review.</p>
<ul>
<li><b>async/await</b> and <b>Task vs Thread</b> — waiting without blocking a thread; what really happens at <code>await</code>.</li>
<li><b>Async pitfalls</b> — <code>ConfigureAwait</code>, deadlocks from <code>.Result</code>/<code>.Wait()</code>, <code>async void</code>, <code>Task.Run</code> in ASP.NET Core, <code>ValueTask</code>, <code>CancellationToken</code>, <code>IAsyncEnumerable</code>.</li>
<li><b>Exceptions</b> — <code>throw</code> vs <code>throw ex</code>, filters, <code>finally</code>, and an exception strategy for a whole app.</li>
<li><b>IDisposable, using and the GC</b> — who cleans what: you clean resources, the GC cleans memory (generations, LOH).</li>
<li><b>Modern C# types</b> — <b>records</b>, <b>pattern matching</b>, <b>nullable reference types</b> and <b>Span&lt;T&gt;</b> basics.</li>
</ul>
<p>One line to remember for the whole day: <b><code>await</code> frees the thread while you wait — it does not create a new one.</b></p>`,
    hi: `<p>आज C# की <b>"senior developer" वाली layer</b> है। इन्हीं topics पर interviewers पहचानते हैं कि कौन async और records सिर्फ़ <i>use</i> करता है और कौन उन्हें <i>समझा</i> सकता है — और Tech Lead को code review में इनकी गलतियाँ भी पकड़नी होती हैं।</p>
<ul>
<li><b>async/await</b> और <b>Task vs Thread</b> — thread को block किए बिना इंतज़ार करना; <code>await</code> पर असल में क्या होता है।</li>
<li><b>Async की गलतियाँ</b> — <code>ConfigureAwait</code>, <code>.Result</code>/<code>.Wait()</code> से deadlock, <code>async void</code>, ASP.NET Core में <code>Task.Run</code>, <code>ValueTask</code>, <code>CancellationToken</code>, <code>IAsyncEnumerable</code>।</li>
<li><b>Exceptions</b> — <code>throw</code> बनाम <code>throw ex</code>, filters, <code>finally</code>, और पूरे app के लिए exception strategy।</li>
<li><b>IDisposable, using और GC</b> — कौन क्या साफ़ करता है: resources आप साफ़ करते हो, memory GC साफ़ करता है (generations, LOH)।</li>
<li><b>Modern C# types</b> — <b>records</b>, <b>pattern matching</b>, <b>nullable reference types</b> और <b>Span&lt;T&gt;</b> की basics।</li>
</ul>
<p>पूरे दिन की एक line याद रखो: <b><code>await</code> इंतज़ार के दौरान thread को free करता है — नया thread नहीं बनाता।</b></p>`,
    hg: `<p>Aaj C# ki <b>"senior developer" wali layer</b> hai. Inhi topics par interviewers pehchante hain ki kaun async aur records sirf <i>use</i> karta hai aur kaun unhe <i>samjha</i> sakta hai — aur Tech Lead ko code review mein inki galtiyan bhi pakadni hoti hain.</p>
<ul>
<li><b>async/await</b> aur <b>Task vs Thread</b> — thread ko block kiye bina intezaar karna; <code>await</code> par asal mein kya hota hai.</li>
<li><b>Async ki galtiyan</b> — <code>ConfigureAwait</code>, <code>.Result</code>/<code>.Wait()</code> se deadlock, <code>async void</code>, ASP.NET Core mein <code>Task.Run</code>, <code>ValueTask</code>, <code>CancellationToken</code>, <code>IAsyncEnumerable</code>.</li>
<li><b>Exceptions</b> — <code>throw</code> vs <code>throw ex</code>, filters, <code>finally</code>, aur poore app ke liye exception strategy.</li>
<li><b>IDisposable, using aur GC</b> — kaun kya saaf karta hai: resources aap saaf karte ho, memory GC saaf karta hai (generations, LOH).</li>
<li><b>Modern C# types</b> — <b>records</b>, <b>pattern matching</b>, <b>nullable reference types</b> aur <b>Span&lt;T&gt;</b> ki basics.</li>
</ul>
<p>Poore din ki ek line yaad rakho: <b><code>await</code> intezaar ke dauraan thread ko free karta hai — naya thread nahi banata.</b></p>`
  },
  sections: [
    {
      id: "async-basics",
      depth: "short",
      title: {
        en: "async/await and Task vs Thread — the big picture",
        hi: "async/await और Task बनाम Thread — पूरी तस्वीर",
        hg: "async/await aur Task vs Thread — poori tasveer"
      },
      body: {
        en: `<p><b>Analogy — the dosa counter token:</b> at a busy South Indian restaurant you pay at the counter and get a <b>token</b>. The cashier does not stand next to the tawa waiting for your dosa — he serves the next customer. When your dosa is ready, your number is called and you collect it. The token is a <b>Task</b> (a promise of a result later). Not waiting at the tawa is <b>await</b>. The cashier is the <b>thread</b> — free to help others while the kitchen (the database, the network) does the slow work.</p>
<ul>
<li><b>Task</b> = an operation that will finish later, with an optional result (<code>Task&lt;T&gt;</code>), an exception if it fails, and a way to continue when it is done.</li>
<li><b>async/await</b> lets you write asynchronous code that reads like normal code. When the method reaches <code>await</code> on a task that is <b>not finished yet</b>, it <b>returns to its caller</b> and the thread is freed. When the task finishes, the <b>rest of the method</b> (the continuation) runs.</li>
<li><b>async/await is not multithreading by itself.</b> An async method runs <b>synchronously</b> on the caller's thread until the first <code>await</code> of an incomplete task. While waiting for I/O (DB query, HTTP call, file read), <b>no thread is busy</b> waiting.</li>
<li><b>I/O-bound</b> work (DB, HTTP, files) → <code>async</code>/<code>await</code> with the async API (<code>ToListAsync</code>, <code>GetAsync</code>). <b>CPU-bound</b> work (calculations, image resize) → it needs a thread; in a desktop app, <code>Task.Run</code> keeps the UI responsive.</li>
<li><b>Thread</b> = a real OS thread you create and manage yourself — costly to create, no built-in result value. <b>Task</b> = a higher-level unit of work: usually runs on the <b>thread pool</b> (or on no thread at all for I/O), returns results, carries exceptions, supports cancellation and composition (<code>Task.WhenAll</code>).</li>
<li><b>ConfigureAwait(false)</b> = "after the await, I do not need to come back to the original context". It matters in <b>UI apps</b> and <b>library code</b>. <b>ASP.NET Core has no SynchronizationContext</b>, so in app code there it changes almost nothing.</li>
<li>Three golden rules: <b>async all the way</b> (no <code>.Result</code>/<code>.Wait()</code>), <b><code>async void</code> only for event handlers</b>, and <b>pass a <code>CancellationToken</code></b> through.</li>
</ul>
<p><b>When to use:</b> any I/O-bound work in web APIs, services and UI apps — it lets one server handle many more requests with the same threads. <b>When not:</b> pure CPU work in ASP.NET Core does not get faster with <code>async</code> or <code>Task.Run</code>; and tiny in-memory methods do not need to be async just to "look modern".</p>`,
        hi: `<p><b>Analogy — dosa counter का token:</b> भीड़ वाले South Indian restaurant में आप counter पर पैसे देते हो और एक <b>token</b> मिलता है। Cashier तवे के पास खड़ा होकर आपके dosa का इंतज़ार नहीं करता — वो अगले customer को serve करता है। Dosa तैयार होने पर आपका number बुलाया जाता है और आप ले लेते हो। Token है <b>Task</b> (बाद में result मिलने का वादा)। तवे पर खड़े न रहना है <b>await</b>। Cashier है <b>thread</b> — kitchen (database, network) जब धीमा काम कर रहा है, तब वो दूसरों की मदद के लिए free है।</p>
<ul>
<li><b>Task</b> = ऐसा operation जो बाद में ख़त्म होगा, जिसका optional result (<code>Task&lt;T&gt;</code>) होता है, fail हो तो exception, और ख़त्म होने पर आगे बढ़ने का तरीका।</li>
<li><b>async/await</b> से asynchronous code normal code जैसा पढ़ने में आता है। Method जब ऐसे task पर <code>await</code> करता है जो <b>अभी ख़त्म नहीं हुआ</b>, तो वो <b>अपने caller को return कर देता है</b> और thread free हो जाता है। Task ख़त्म होने पर <b>method का बाकी हिस्सा</b> (continuation) चलता है।</li>
<li><b>async/await अपने आप में multithreading नहीं है।</b> Async method caller के thread पर ही <b>synchronously</b> चलता है, जब तक पहला अधूरा task <code>await</code> न हो। I/O (DB query, HTTP call, file read) के इंतज़ार में <b>कोई thread busy नहीं रहता</b>।</li>
<li><b>I/O-bound</b> काम (DB, HTTP, files) → async API (<code>ToListAsync</code>, <code>GetAsync</code>) के साथ <code>async</code>/<code>await</code>। <b>CPU-bound</b> काम (calculation, image resize) → इसे thread चाहिए; desktop app में <code>Task.Run</code> UI को responsive रखता है।</li>
<li><b>Thread</b> = असली OS thread जिसे आप ख़ुद बनाते और संभालते हो — बनाना महँगा, कोई built-in result value नहीं। <b>Task</b> = ऊपर के level की unit of work: अक्सर <b>thread pool</b> पर चलता है (I/O के लिए किसी thread पर नहीं), result देता है, exceptions साथ लाता है, cancellation और composition (<code>Task.WhenAll</code>) support करता है।</li>
<li><b>ConfigureAwait(false)</b> = "await के बाद मुझे original context पर वापस आने की ज़रूरत नहीं"। यह <b>UI apps</b> और <b>library code</b> में मायने रखता है। <b>ASP.NET Core में SynchronizationContext नहीं है</b>, इसलिए वहाँ के app code में इससे लगभग कुछ नहीं बदलता।</li>
<li>तीन golden rules: <b>async all the way</b> (<code>.Result</code>/<code>.Wait()</code> नहीं), <b><code>async void</code> सिर्फ़ event handlers के लिए</b>, और <b><code>CancellationToken</code> आगे pass करो</b>।</li>
</ul>
<p><b>कब use करें:</b> web APIs, services और UI apps में हर I/O-bound काम — इससे एक server उन्हीं threads से कहीं ज़्यादा requests संभाल लेता है। <b>कब नहीं:</b> ASP.NET Core में pure CPU काम <code>async</code> या <code>Task.Run</code> से तेज़ नहीं होता; और छोटे in-memory methods को सिर्फ़ "modern दिखने" के लिए async बनाने की ज़रूरत नहीं।</p>`,
        hg: `<p><b>Analogy — dosa counter ka token:</b> bheed wale South Indian restaurant mein aap counter par paise dete ho aur ek <b>token</b> milta hai. Cashier tawe ke paas khada hokar aapke dosa ka intezaar nahi karta — woh agle customer ko serve karta hai. Dosa taiyaar hone par aapka number bulaya jaata hai aur aap le lete ho. Token hai <b>Task</b> (baad mein result milne ka waada). Tawe par khade na rehna hai <b>await</b>. Cashier hai <b>thread</b> — kitchen (database, network) jab dheema kaam kar raha hai, tab woh doosron ki madad ke liye free hai.</p>
<ul>
<li><b>Task</b> = aisa operation jo baad mein khatam hoga, jiska optional result (<code>Task&lt;T&gt;</code>) hota hai, fail ho to exception, aur khatam hone par aage badhne ka tareeka.</li>
<li><b>async/await</b> se asynchronous code normal code jaisa padhne mein aata hai. Method jab aise task par <code>await</code> karta hai jo <b>abhi khatam nahi hua</b>, to woh <b>apne caller ko return kar deta hai</b> aur thread free ho jaata hai. Task khatam hone par <b>method ka baaki hissa</b> (continuation) chalta hai.</li>
<li><b>async/await apne aap mein multithreading nahi hai.</b> Async method caller ke thread par hi <b>synchronously</b> chalta hai, jab tak pehla adhoora task <code>await</code> na ho. I/O (DB query, HTTP call, file read) ke intezaar mein <b>koi thread busy nahi rehta</b>.</li>
<li><b>I/O-bound</b> kaam (DB, HTTP, files) → async API (<code>ToListAsync</code>, <code>GetAsync</code>) ke saath <code>async</code>/<code>await</code>. <b>CPU-bound</b> kaam (calculation, image resize) → ise thread chahiye; desktop app mein <code>Task.Run</code> UI ko responsive rakhta hai.</li>
<li><b>Thread</b> = asli OS thread jise aap khud banate aur sambhalte ho — banana mehenga, koi built-in result value nahi. <b>Task</b> = upar ke level ki unit of work: aksar <b>thread pool</b> par chalta hai (I/O ke liye kisi thread par nahi), result deta hai, exceptions saath laata hai, cancellation aur composition (<code>Task.WhenAll</code>) support karta hai.</li>
<li><b>ConfigureAwait(false)</b> = "await ke baad mujhe original context par wapas aane ki zaroorat nahi". Yeh <b>UI apps</b> aur <b>library code</b> mein maayne rakhta hai. <b>ASP.NET Core mein SynchronizationContext nahi hai</b>, isliye wahan ke app code mein isse lagbhag kuch nahi badalta.</li>
<li>Teen golden rules: <b>async all the way</b> (<code>.Result</code>/<code>.Wait()</code> nahi), <b><code>async void</code> sirf event handlers ke liye</b>, aur <b><code>CancellationToken</code> aage pass karo</b>.</li>
</ul>
<p><b>Kab use karein:</b> web APIs, services aur UI apps mein har I/O-bound kaam — isse ek server unhi threads se kahin zyada requests sambhaal leta hai. <b>Kab nahi:</b> ASP.NET Core mein pure CPU kaam <code>async</code> ya <code>Task.Run</code> se tez nahi hota; aur chhote in-memory methods ko sirf "modern dikhne" ke liye async banane ki zaroorat nahi.</p>`
      }
    },
    {
      id: "exceptions-basics",
      depth: "short",
      title: {
        en: "Exceptions — throw, catch, finally and good habits",
        hi: "Exceptions — throw, catch, finally और अच्छी आदतें",
        hg: "Exceptions — throw, catch, finally aur achhi aadatein"
      },
      body: {
        en: `<p><b>Analogy — the ATM:</b> when an ATM cannot give cash (network down, no notes), it does not silently give you half the money. It <b>stops</b>, shows a clear error, and <b>always returns your card</b>. Stopping with a clear reason is <b>throwing an exception</b>. Returning the card no matter what is <b>finally</b>. And the bank does not put a technician at every ATM — one <b>central team</b> handles failures. That is a <b>global exception handler</b>.</p>
<ul>
<li><b>try / catch / finally</b>: <code>try</code> holds the risky code, <code>catch</code> handles a specific failure, <code>finally</code> runs whether the <code>try</code> succeeded or threw (cleanup). <code>using</code> is a <code>try/finally</code> that calls <code>Dispose</code> for you.</li>
<li><b>Catch specific exceptions</b> (<code>SqlException</code>, <code>HttpRequestException</code>) that you can actually handle. A bare <code>catch (Exception)</code> in the middle of the code usually hides bugs.</li>
<li><b><code>throw;</code> vs <code>throw ex;</code></b>: <code>throw;</code> rethrows and <b>keeps the original stack trace</b>. <code>throw ex;</code> <b>resets</b> the stack trace to the current line, so you lose where the error really happened (analyzer warning <b>CA2200</b>).</li>
<li><b>Wrap, do not lose</b>: <code>throw new OrderException("Could not place order", ex);</code> keeps the original as <code>InnerException</code>.</li>
<li><b>Exception filters</b>: <code>catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)</code> — catch only when the condition is true; otherwise the exception keeps flying, with the stack untouched.</li>
<li><b>Exceptions are for exceptional cases</b>, not normal flow. "User typed a wrong PIN" is expected → return a result / validation error. "Database is down" is exceptional → throw.</li>
<li><b>Guard clauses</b> with built-in helpers: <code>ArgumentNullException.ThrowIfNull(order)</code>, <code>ArgumentException.ThrowIfNullOrEmpty(name)</code>.</li>
<li>In <b>ASP.NET Core</b>, handle unexpected exceptions <b>in one place</b> (<code>UseExceptionHandler</code> + an <code>IExceptionHandler</code>, returning <b>ProblemDetails</b>), and log them once there.</li>
</ul>
<p><b>When to use:</b> throw when a method cannot do what its name promises; catch where you can <b>add value</b> — retry, translate to a friendly response, add context, or clean up. <b>When not:</b> do not use exceptions for normal "not found / invalid input" flow in hot paths, and do not catch-log-rethrow at every layer — one log per error is enough.</p>`,
        hi: `<p><b>Analogy — ATM:</b> जब ATM cash नहीं दे पाता (network down, notes नहीं), तो वो चुपचाप आधे पैसे नहीं देता। वो <b>रुक जाता है</b>, साफ़ error दिखाता है, और <b>card हमेशा वापस करता है</b>। साफ़ वजह के साथ रुकना है <b>exception throw करना</b>। कुछ भी हो, card वापस करना है <b>finally</b>। और bank हर ATM पर एक technician नहीं बिठाता — एक <b>central team</b> failures संभालती है। यही है <b>global exception handler</b>।</p>
<ul>
<li><b>try / catch / finally</b>: <code>try</code> में risky code, <code>catch</code> किसी specific failure को संभालता है, <code>finally</code> चलता है चाहे <code>try</code> सफल हो या throw करे (cleanup)। <code>using</code> असल में एक <code>try/finally</code> है जो आपके लिए <code>Dispose</code> call करता है।</li>
<li><b>Specific exceptions पकड़ो</b> (<code>SqlException</code>, <code>HttpRequestException</code>) जिन्हें आप सच में संभाल सकते हो। Code के बीच में खाली <code>catch (Exception)</code> अक्सर bugs छुपा देता है।</li>
<li><b><code>throw;</code> बनाम <code>throw ex;</code></b>: <code>throw;</code> दोबारा throw करता है और <b>original stack trace बचाकर रखता है</b>। <code>throw ex;</code> stack trace को current line से <b>reset</b> कर देता है, तो पता नहीं चलता कि error असल में कहाँ हुआ (analyzer warning <b>CA2200</b>)।</li>
<li><b>Wrap करो, खोओ मत</b>: <code>throw new OrderException("Could not place order", ex);</code> original को <code>InnerException</code> में रखता है।</li>
<li><b>Exception filters</b>: <code>catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)</code> — सिर्फ़ तब पकड़ो जब condition true हो; वरना exception आगे बढ़ता रहता है, stack बिना छेड़े।</li>
<li><b>Exceptions असाधारण हालात के लिए हैं</b>, normal flow के लिए नहीं। "User ने गलत PIN डाला" expected है → result / validation error return करो। "Database down है" असाधारण है → throw करो।</li>
<li>Built-in helpers से <b>guard clauses</b>: <code>ArgumentNullException.ThrowIfNull(order)</code>, <code>ArgumentException.ThrowIfNullOrEmpty(name)</code>।</li>
<li><b>ASP.NET Core</b> में unexpected exceptions <b>एक ही जगह</b> संभालो (<code>UseExceptionHandler</code> + एक <code>IExceptionHandler</code>, जो <b>ProblemDetails</b> return करे), और वहीं एक बार log करो।</li>
</ul>
<p><b>कब use करें:</b> throw तब करो जब method वो काम नहीं कर सकता जिसका उसका नाम वादा करता है; catch वहाँ करो जहाँ आप <b>कुछ value जोड़ सको</b> — retry, friendly response में बदलना, context जोड़ना, या cleanup। <b>कब नहीं:</b> hot paths में normal "not found / invalid input" flow के लिए exceptions मत use करो, और हर layer पर catch-log-rethrow मत करो — एक error का एक log काफ़ी है।</p>`,
        hg: `<p><b>Analogy — ATM:</b> jab ATM cash nahi de paata (network down, notes nahi), to woh chupchaap aadhe paise nahi deta. Woh <b>ruk jaata hai</b>, saaf error dikhata hai, aur <b>card hamesha wapas karta hai</b>. Saaf wajah ke saath rukna hai <b>exception throw karna</b>. Kuch bhi ho, card wapas karna hai <b>finally</b>. Aur bank har ATM par ek technician nahi bithata — ek <b>central team</b> failures sambhaalti hai. Yahi hai <b>global exception handler</b>.</p>
<ul>
<li><b>try / catch / finally</b>: <code>try</code> mein risky code, <code>catch</code> kisi specific failure ko sambhaalta hai, <code>finally</code> chalta hai chahe <code>try</code> safal ho ya throw kare (cleanup). <code>using</code> asal mein ek <code>try/finally</code> hai jo aapke liye <code>Dispose</code> call karta hai.</li>
<li><b>Specific exceptions pakdo</b> (<code>SqlException</code>, <code>HttpRequestException</code>) jinhe aap sach mein sambhaal sakte ho. Code ke beech mein khaali <code>catch (Exception)</code> aksar bugs chhupa deta hai.</li>
<li><b><code>throw;</code> vs <code>throw ex;</code></b>: <code>throw;</code> dobara throw karta hai aur <b>original stack trace bachakar rakhta hai</b>. <code>throw ex;</code> stack trace ko current line se <b>reset</b> kar deta hai, to pata nahi chalta ki error asal mein kahan hua (analyzer warning <b>CA2200</b>).</li>
<li><b>Wrap karo, khoo mat</b>: <code>throw new OrderException("Could not place order", ex);</code> original ko <code>InnerException</code> mein rakhta hai.</li>
<li><b>Exception filters</b>: <code>catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)</code> — sirf tab pakdo jab condition true ho; warna exception aage badhta rehta hai, stack bina chhede.</li>
<li><b>Exceptions asaadhaaran haalaat ke liye hain</b>, normal flow ke liye nahi. "User ne galat PIN daala" expected hai → result / validation error return karo. "Database down hai" asaadhaaran hai → throw karo.</li>
<li>Built-in helpers se <b>guard clauses</b>: <code>ArgumentNullException.ThrowIfNull(order)</code>, <code>ArgumentException.ThrowIfNullOrEmpty(name)</code>.</li>
<li><b>ASP.NET Core</b> mein unexpected exceptions <b>ek hi jagah</b> sambhaalo (<code>UseExceptionHandler</code> + ek <code>IExceptionHandler</code>, jo <b>ProblemDetails</b> return kare), aur wahin ek baar log karo.</li>
</ul>
<p><b>Kab use karein:</b> throw tab karo jab method woh kaam nahi kar sakta jiska uska naam waada karta hai; catch wahan karo jahan aap <b>kuch value jod sako</b> — retry, friendly response mein badalna, context jodna, ya cleanup. <b>Kab nahi:</b> hot paths mein normal "not found / invalid input" flow ke liye exceptions mat use karo, aur har layer par catch-log-rethrow mat karo — ek error ka ek log kaafi hai.</p>`
      }
    },
    {
      id: "dispose-gc-basics",
      depth: "short",
      title: {
        en: "IDisposable, using and the garbage collector",
        hi: "IDisposable, using और garbage collector",
        hg: "IDisposable, using aur garbage collector"
      },
      body: {
        en: `<p><b>Analogy — the municipal van and the library book:</b> the municipal garbage van comes <b>on its own schedule</b> and takes away whatever nobody uses any more — that is the <b>garbage collector (GC)</b> cleaning <b>memory</b>. But a <b>library book</b> or a <b>hotel room key</b> must be returned <b>by you, on time</b> — the garbage van will not return it for you. Files, DB connections and sockets are like that book: you release them with <b>Dispose</b>, and <code>using</code> makes sure you return them even if something goes wrong on the way.</p>
<ul>
<li><b>GC</b> manages <b>managed memory</b>. It finds objects that are <b>no longer reachable</b> from "roots" (static fields, local variables on thread stacks, CPU registers, GC handles), frees them, and <b>compacts</b> the survivors to avoid gaps.</li>
<li><b>Generations</b>: new objects start in <b>Gen 0</b>. Most die young (a request's temporary objects), so Gen 0 collections are frequent and cheap. Survivors are promoted to <b>Gen 1</b> (a buffer) and then <b>Gen 2</b> (long-lived: caches, singletons). A Gen 2 collection is a <b>full GC</b> — the most expensive.</li>
<li><b>Large Object Heap (LOH)</b>: objects of <b>85,000 bytes or more</b> (big arrays, big strings). It is collected only with Gen 2 and is <b>not compacted by default</b>, so many big temporary buffers cause fragmentation and full GCs. Reuse them (<code>ArrayPool&lt;T&gt;</code>) where it matters.</li>
<li><b>IDisposable</b>: one method, <code>Dispose()</code>, to release <b>unmanaged or expensive resources</b> (file handles, DB connections, sockets, timers) <b>deterministically</b> — now, not "whenever the GC runs".</li>
<li><b>using</b>: <code>using (var file = File.OpenRead(path)) { ... }</code> or the shorter <b>using declaration</b> <code>using var file = File.OpenRead(path);</code> (C# 8) — <code>Dispose</code> runs at the end of the block/scope, even on exceptions. Async version: <code>await using</code> with <code>IAsyncDisposable</code>.</li>
<li><b>Finalizer</b> (<code>~MyClass()</code>) = a safety net the GC may run <b>at some unknown time</b> on a separate thread. It makes objects live longer. You rarely write one — wrap native handles in <code>SafeHandle</code> instead.</li>
<li><b>Workstation vs Server GC</b>: Workstation is the default for desktop/console apps; <b>Server GC</b> (default for ASP.NET Core apps) uses a heap and a GC thread per core for more throughput, at the cost of more memory.</li>
</ul>
<p><b>When to use:</b> <code>using</code> for every <code>IDisposable</code> you create and own (in ASP.NET Core, objects from DI are disposed by the container — do not dispose them yourself). Implement <code>IDisposable</code> when your class <b>owns</b> a disposable field. <b>When not:</b> do not call <code>GC.Collect()</code> in normal code, and do not implement <code>IDisposable</code> on classes that hold only plain managed objects.</p>`,
        hi: `<p><b>Analogy — municipal van और library की किताब:</b> Municipal garbage van <b>अपने schedule पर</b> आती है और वो सब ले जाती है जिसे अब कोई use नहीं करता — यही है <b>garbage collector (GC)</b> जो <b>memory</b> साफ़ करता है। पर <b>library की किताब</b> या <b>hotel room की चाबी</b> <b>आपको ख़ुद, समय पर</b> लौटानी होती है — garbage van आपके लिए नहीं लौटाएगी। Files, DB connections और sockets उसी किताब जैसे हैं: इन्हें आप <b>Dispose</b> से छोड़ते हो, और <code>using</code> पक्का करता है कि रास्ते में कुछ गड़बड़ हो जाए तब भी ये लौट जाएँ।</p>
<ul>
<li><b>GC</b> <b>managed memory</b> संभालता है। वो ऐसे objects ढूँढता है जो "roots" (static fields, thread stacks पर local variables, CPU registers, GC handles) से <b>अब reachable नहीं</b> हैं, उन्हें free करता है, और बचे हुए objects को पास-पास <b>compact</b> करता है ताकि बीच में ख़ाली जगह न रहे।</li>
<li><b>Generations</b>: नए objects <b>Gen 0</b> में शुरू होते हैं। ज़्यादातर जल्दी मर जाते हैं (एक request के temporary objects), इसलिए Gen 0 collections बार-बार होते हैं और सस्ते हैं। बचे हुए objects <b>Gen 1</b> (buffer) और फिर <b>Gen 2</b> (लंबे समय वाले: caches, singletons) में promote होते हैं। Gen 2 collection एक <b>full GC</b> है — सबसे महँगा।</li>
<li><b>Large Object Heap (LOH)</b>: <b>85,000 bytes या उससे बड़े</b> objects (बड़े arrays, बड़ी strings)। यह सिर्फ़ Gen 2 के साथ collect होता है और <b>by default compact नहीं होता</b>, इसलिए बहुत सारे बड़े temporary buffers fragmentation और full GCs लाते हैं। जहाँ ज़रूरी हो, इन्हें reuse करो (<code>ArrayPool&lt;T&gt;</code>)।</li>
<li><b>IDisposable</b>: एक method, <code>Dispose()</code>, जिससे <b>unmanaged या महँगे resources</b> (file handles, DB connections, sockets, timers) <b>तय समय पर (deterministically)</b> छोड़े जाते हैं — अभी, "जब GC चले तब" नहीं।</li>
<li><b>using</b>: <code>using (var file = File.OpenRead(path)) { ... }</code> या छोटा <b>using declaration</b> <code>using var file = File.OpenRead(path);</code> (C# 8) — block/scope के end पर <code>Dispose</code> चलता है, exception आने पर भी। Async version: <code>IAsyncDisposable</code> के साथ <code>await using</code>।</li>
<li><b>Finalizer</b> (<code>~MyClass()</code>) = एक safety net जिसे GC <b>किसी अनजान समय पर</b> अलग thread पर चला सकता है। यह objects को ज़्यादा देर ज़िंदा रखता है। इसे शायद ही कभी लिखना पड़ता है — native handles को <code>SafeHandle</code> में wrap करो।</li>
<li><b>Workstation vs Server GC</b>: desktop/console apps के लिए default Workstation है; <b>Server GC</b> (ASP.NET Core apps का default) हर core के लिए एक heap और एक GC thread use करता है — ज़्यादा throughput, पर memory भी ज़्यादा।</li>
</ul>
<p><b>कब use करें:</b> हर वो <code>IDisposable</code> जिसे आप बनाते हो और जिसके owner हो, उस पर <code>using</code> (ASP.NET Core में DI से मिले objects को container dispose करता है — उन्हें ख़ुद dispose मत करो)। <code>IDisposable</code> तब implement करो जब आपकी class किसी disposable field की <b>owner</b> हो। <b>कब नहीं:</b> normal code में <code>GC.Collect()</code> call मत करो, और जिन classes में सिर्फ़ plain managed objects हैं उन पर <code>IDisposable</code> implement मत करो।</p>`,
        hg: `<p><b>Analogy — municipal van aur library ki kitaab:</b> Municipal garbage van <b>apne schedule par</b> aati hai aur woh sab le jaati hai jise ab koi use nahi karta — yahi hai <b>garbage collector (GC)</b> jo <b>memory</b> saaf karta hai. Par <b>library ki kitaab</b> ya <b>hotel room ki chaabi</b> <b>aapko khud, samay par</b> lautani hoti hai — garbage van aapke liye nahi lautayegi. Files, DB connections aur sockets usi kitaab jaise hain: inhe aap <b>Dispose</b> se chhodte ho, aur <code>using</code> pakka karta hai ki raaste mein kuch gadbad ho jaaye tab bhi yeh laut jaayein.</p>
<ul>
<li><b>GC</b> <b>managed memory</b> sambhaalta hai. Woh aise objects dhoondhta hai jo "roots" (static fields, thread stacks par local variables, CPU registers, GC handles) se <b>ab reachable nahi</b> hain, unhe free karta hai, aur bache hue objects ko paas-paas <b>compact</b> karta hai taaki beech mein khaali jagah na rahe.</li>
<li><b>Generations</b>: naye objects <b>Gen 0</b> mein shuru hote hain. Zyadatar jaldi mar jaate hain (ek request ke temporary objects), isliye Gen 0 collections baar-baar hote hain aur saste hain. Bache hue objects <b>Gen 1</b> (buffer) aur phir <b>Gen 2</b> (lambe samay wale: caches, singletons) mein promote hote hain. Gen 2 collection ek <b>full GC</b> hai — sabse mehenga.</li>
<li><b>Large Object Heap (LOH)</b>: <b>85,000 bytes ya usse bade</b> objects (bade arrays, badi strings). Yeh sirf Gen 2 ke saath collect hota hai aur <b>by default compact nahi hota</b>, isliye bahut saare bade temporary buffers fragmentation aur full GCs laate hain. Jahan zaroori ho, inhe reuse karo (<code>ArrayPool&lt;T&gt;</code>).</li>
<li><b>IDisposable</b>: ek method, <code>Dispose()</code>, jisse <b>unmanaged ya mehenge resources</b> (file handles, DB connections, sockets, timers) <b>tay samay par (deterministically)</b> chhode jaate hain — abhi, "jab GC chale tab" nahi.</li>
<li><b>using</b>: <code>using (var file = File.OpenRead(path)) { ... }</code> ya chhota <b>using declaration</b> <code>using var file = File.OpenRead(path);</code> (C# 8) — block/scope ke end par <code>Dispose</code> chalta hai, exception aane par bhi. Async version: <code>IAsyncDisposable</code> ke saath <code>await using</code>.</li>
<li><b>Finalizer</b> (<code>~MyClass()</code>) = ek safety net jise GC <b>kisi anjaan samay par</b> alag thread par chala sakta hai. Yeh objects ko zyada der zinda rakhta hai. Ise shayad hi kabhi likhna padta hai — native handles ko <code>SafeHandle</code> mein wrap karo.</li>
<li><b>Workstation vs Server GC</b>: desktop/console apps ke liye default Workstation hai; <b>Server GC</b> (ASP.NET Core apps ka default) har core ke liye ek heap aur ek GC thread use karta hai — zyada throughput, par memory bhi zyada.</li>
</ul>
<p><b>Kab use karein:</b> har woh <code>IDisposable</code> jise aap banate ho aur jiske owner ho, us par <code>using</code> (ASP.NET Core mein DI se mile objects ko container dispose karta hai — unhe khud dispose mat karo). <code>IDisposable</code> tab implement karo jab aapki class kisi disposable field ki <b>owner</b> ho. <b>Kab nahi:</b> normal code mein <code>GC.Collect()</code> call mat karo, aur jin classes mein sirf plain managed objects hain un par <code>IDisposable</code> implement mat karo.</p>`
      }
    },
    {
      id: "modern-types-basics",
      depth: "short",
      title: {
        en: "Records, pattern matching, nullable reference types and Span — modern C# in one view",
        hi: "Records, pattern matching, nullable reference types और Span — modern C# एक नज़र में",
        hg: "Records, pattern matching, nullable reference types aur Span — modern C# ek nazar mein"
      },
      body: {
        en: `<p><b>Analogy — four everyday things:</b> two printouts of the same <b>Aadhaar details</b> describe the same person — you compare the <b>data</b>, not the paper (<b>record</b>). A <b>TTE</b> checks tickets with simple rules: "AC ticket → coach A1, RAC → side berth, no ticket → fine" (<b>pattern matching</b>). A bank form marks some fields with <b>*</b> (mandatory) and some as optional (<b>nullable reference types</b>). And when you need pages 10–20 of a thick register, you put a <b>bookmark and read there</b> instead of photocopying them (<b>Span</b>).</p>
<ul>
<li><b>record</b> (C# 9): a type for <b>data</b>. The compiler generates <b>value-based equality</b> (two records with the same values are equal), a readable <code>ToString()</code>, and <b><code>with</code></b> to make a changed copy: <code>var moved = address with { City = "Pune" };</code>. <code>record</code> / <code>record class</code> is a reference type; <b><code>record struct</code></b> (C# 10) is a value type. Equality is <b>shallow</b> — a <code>List</code> property is compared by reference.</li>
<li><b>Pattern matching</b>: test a value's <b>shape</b> and pull data out in one step. <code>if (shape is Circle c)</code>; <b>switch expressions</b> with type, property (<code>{ City: "Pune" }</code>), relational (<code>&gt; 500</code>), logical (<code>and</code>, <code>or</code>, <code>not</code>) and list patterns (<code>[first, ..]</code>, C# 11). The compiler warns when a switch expression misses cases.</li>
<li><b>Nullable reference types (NRT)</b> (C# 8, on by default in new projects since .NET 6): <code>string</code> means "should never be null", <code>string?</code> means "may be null". The compiler then <b>warns</b> when you might dereference null. It is <b>compile-time only</b> — nothing changes at runtime.</li>
<li><b>Span&lt;T&gt;</b> / <b>ReadOnlySpan&lt;T&gt;</b>: a <b>window over existing memory</b> (an array, part of a string, <code>stackalloc</code> memory). Slicing creates <b>no copy and no heap allocation</b>. It is a <code>ref struct</code>, so it lives only on the stack: no class fields, no boxing, no lambdas capturing it, not across <code>await</code>. Use <b><code>Memory&lt;T&gt;</code></b> when you need to store it or use it in async code.</li>
</ul>
<p><b>When to use:</b> records for DTOs, messages, value objects; pattern matching to replace long <code>if/else</code> type checks; NRT on in every new project; Span in hot parsing/formatting code. <b>When not:</b> records as EF Core entities (value equality clashes with tracked, changing objects — Day 5); deep pattern nests nobody can read; <code>!</code> sprinkled everywhere to silence NRT warnings; Span in ordinary business code where clarity matters more than a few allocations.</p>`,
        hi: `<p><b>Analogy — रोज़ की चार चीज़ें:</b> एक ही <b>Aadhaar details</b> के दो printouts एक ही इंसान को बताते हैं — आप <b>data</b> compare करते हो, कागज़ नहीं (<b>record</b>)। <b>TTE</b> आसान rules से tickets check करता है: "AC ticket → coach A1, RAC → side berth, ticket नहीं → fine" (<b>pattern matching</b>)। Bank form में कुछ fields पर <b>*</b> होता है (ज़रूरी) और कुछ optional (<b>nullable reference types</b>)। और जब मोटे register के pages 10–20 चाहिए, तो आप photocopy कराने की जगह <b>bookmark लगाकर वहीं पढ़ते हो</b> (<b>Span</b>)।</p>
<ul>
<li><b>record</b> (C# 9): <b>data</b> के लिए type। Compiler <b>value-based equality</b> (एक जैसी values वाले दो records equal), पढ़ने लायक <code>ToString()</code>, और बदली हुई copy बनाने के लिए <b><code>with</code></b> generate करता है: <code>var moved = address with { City = "Pune" };</code>। <code>record</code> / <code>record class</code> reference type है; <b><code>record struct</code></b> (C# 10) value type है। Equality <b>shallow</b> है — <code>List</code> property reference से compare होती है।</li>
<li><b>Pattern matching</b>: value का <b>shape</b> test करो और एक ही step में data निकाल लो। <code>if (shape is Circle c)</code>; type, property (<code>{ City: "Pune" }</code>), relational (<code>&gt; 500</code>), logical (<code>and</code>, <code>or</code>, <code>not</code>) और list patterns (<code>[first, ..]</code>, C# 11) वाले <b>switch expressions</b>। Switch expression कोई case छोड़ दे तो compiler warning देता है।</li>
<li><b>Nullable reference types (NRT)</b> (C# 8, .NET 6 से नए projects में by default on): <code>string</code> का मतलब "कभी null नहीं होना चाहिए", <code>string?</code> का मतलब "null हो सकता है"। फिर जहाँ null dereference हो सकता है वहाँ compiler <b>warning</b> देता है। यह <b>सिर्फ़ compile-time</b> है — runtime पर कुछ नहीं बदलता।</li>
<li><b>Span&lt;T&gt;</b> / <b>ReadOnlySpan&lt;T&gt;</b>: <b>पहले से मौजूद memory पर एक खिड़की</b> (array, string का हिस्सा, <code>stackalloc</code> memory)। Slicing में <b>न copy बनती है, न heap allocation</b>। यह <code>ref struct</code> है, इसलिए सिर्फ़ stack पर रहता है: class field नहीं, boxing नहीं, lambda इसे capture नहीं कर सकता, <code>await</code> के पार नहीं। Store करना हो या async code में use करना हो तो <b><code>Memory&lt;T&gt;</code></b> लो।</li>
</ul>
<p><b>कब use करें:</b> DTOs, messages, value objects के लिए records; लंबे <code>if/else</code> type checks की जगह pattern matching; हर नए project में NRT on; hot parsing/formatting code में Span। <b>कब नहीं:</b> EF Core entities के रूप में records (value equality tracked, बदलते objects से टकराती है — Day 5); इतने गहरे patterns जो कोई पढ़ न सके; NRT warnings चुप कराने के लिए हर जगह <code>!</code>; normal business code में Span, जहाँ कुछ allocations से ज़्यादा clarity ज़रूरी है।</p>`,
        hg: `<p><b>Analogy — roz ki chaar cheezein:</b> ek hi <b>Aadhaar details</b> ke do printouts ek hi insaan ko batate hain — aap <b>data</b> compare karte ho, kaagaz nahi (<b>record</b>). <b>TTE</b> aasaan rules se tickets check karta hai: "AC ticket → coach A1, RAC → side berth, ticket nahi → fine" (<b>pattern matching</b>). Bank form mein kuch fields par <b>*</b> hota hai (zaroori) aur kuch optional (<b>nullable reference types</b>). Aur jab mote register ke pages 10–20 chahiye, to aap photocopy karane ki jagah <b>bookmark lagakar wahin padhte ho</b> (<b>Span</b>).</p>
<ul>
<li><b>record</b> (C# 9): <b>data</b> ke liye type. Compiler <b>value-based equality</b> (ek jaisi values wale do records equal), padhne laayak <code>ToString()</code>, aur badli hui copy banane ke liye <b><code>with</code></b> generate karta hai: <code>var moved = address with { City = "Pune" };</code>. <code>record</code> / <code>record class</code> reference type hai; <b><code>record struct</code></b> (C# 10) value type hai. Equality <b>shallow</b> hai — <code>List</code> property reference se compare hoti hai.</li>
<li><b>Pattern matching</b>: value ka <b>shape</b> test karo aur ek hi step mein data nikaal lo. <code>if (shape is Circle c)</code>; type, property (<code>{ City: "Pune" }</code>), relational (<code>&gt; 500</code>), logical (<code>and</code>, <code>or</code>, <code>not</code>) aur list patterns (<code>[first, ..]</code>, C# 11) wale <b>switch expressions</b>. Switch expression koi case chhod de to compiler warning deta hai.</li>
<li><b>Nullable reference types (NRT)</b> (C# 8, .NET 6 se naye projects mein by default on): <code>string</code> ka matlab "kabhi null nahi hona chahiye", <code>string?</code> ka matlab "null ho sakta hai". Phir jahan null dereference ho sakta hai wahan compiler <b>warning</b> deta hai. Yeh <b>sirf compile-time</b> hai — runtime par kuch nahi badalta.</li>
<li><b>Span&lt;T&gt;</b> / <b>ReadOnlySpan&lt;T&gt;</b>: <b>pehle se maujood memory par ek khidki</b> (array, string ka hissa, <code>stackalloc</code> memory). Slicing mein <b>na copy banti hai, na heap allocation</b>. Yeh <code>ref struct</code> hai, isliye sirf stack par rehta hai: class field nahi, boxing nahi, lambda ise capture nahi kar sakta, <code>await</code> ke paar nahi. Store karna ho ya async code mein use karna ho to <b><code>Memory&lt;T&gt;</code></b> lo.</li>
</ul>
<p><b>Kab use karein:</b> DTOs, messages, value objects ke liye records; lambe <code>if/else</code> type checks ki jagah pattern matching; har naye project mein NRT on; hot parsing/formatting code mein Span. <b>Kab nahi:</b> EF Core entities ke roop mein records (value equality tracked, badalte objects se takraati hai — Day 5); itne gehre patterns jo koi padh na sake; NRT warnings chup karane ke liye har jagah <code>!</code>; normal business code mein Span, jahan kuch allocations se zyada clarity zaroori hai.</p>`
      }
    },
    {
      id: "async-in-code",
      depth: "detailed",
      title: {
        en: "async/await in code: what runs when, sequential vs WhenAll, Thread vs Task",
        hi: "Code में async/await: क्या कब चलता है, sequential बनाम WhenAll, Thread बनाम Task",
        hg: "Code mein async/await: kya kab chalta hai, sequential vs WhenAll, Thread vs Task"
      },
      body: {
        en: `<p><b>Analogy — ordering chai and samosa:</b> at a tea stall you can order chai, wait for it, and only then order the samosa (<b>sequential awaits</b>). Or you order <b>both at once</b> and wait once for both (<b><code>Task.WhenAll</code></b>). Same food, less waiting — as long as the two orders do not depend on each other.</p>
<ul>
<li>The compiler turns an <code>async</code> method into a <b>state machine</b>. Every <code>await</code> is a point where the method can <b>pause</b> and later <b>resume</b> with all its local variables intact.</li>
<li>Tasks from async methods are <b>"hot"</b> — the work has <b>already started</b> when you get the <code>Task</code>. <code>await</code> does not start anything; it waits for the result (and rethrows its exception).</li>
<li><b>Fast path</b>: awaiting a task that is <b>already complete</b> just continues on the same thread, synchronously — no pause at all.</li>
<li><b>Where does the code after <code>await</code> run?</b> If there was a <code>SynchronizationContext</code> (WPF/WinForms UI thread), it goes back there. Otherwise (ASP.NET Core, console apps, background services) it runs on a <b>thread-pool thread</b> — maybe a different thread than before the <code>await</code>. That is fine; just do not depend on thread identity.</li>
<li><b>Sequential vs concurrent</b>: for <b>independent</b> I/O calls, start them all, then <code>await Task.WhenAll(...)</code>. The results array is in the <b>order you passed the tasks</b>, not the order they finished.</li>
<li><b>Careful:</b> some objects do not allow concurrent use — an EF Core <code>DbContext</code> throws if two queries run on it at the same time. Concurrent queries need separate contexts (Day 5).</li>
<li><b><code>TaskCompletionSource&lt;T&gt;</code></b> creates a task that <b>you</b> complete — useful to wrap an old callback or event API as a <code>Task</code>. The demo below uses it as a fake "database" so the output order is fixed.</li>
<li><b>Thread vs Task in code</b>: <code>new Thread(...)</code> + <code>Start()</code> + <code>Join()</code> gives you a dedicated OS thread but no result value, no exception flow and a blocked caller. <code>await Task.Run(...)</code> borrows a pool thread and gives back result and exceptions through <code>await</code>.</li>
</ul>
<p><b>When to use:</b> sequential awaits when step 2 needs step 1's result; <code>WhenAll</code> for independent calls (price + stock + reviews for a product page). <b>When not:</b> do not fire hundreds of <code>WhenAll</code> calls at a downstream API without a limit (use batching or <code>Parallel.ForEachAsync</code> with <code>MaxDegreeOfParallelism</code>), and do not create raw <code>Thread</code>s for normal work — keep them for rare cases like a long-running dedicated worker.</p>`,
        hi: `<p><b>Analogy — chai और samosa order करना:</b> चाय की दुकान पर आप chai order करके उसका इंतज़ार कर सकते हो, और उसके बाद ही samosa order करो (<b>sequential awaits</b>)। या आप <b>दोनों एक साथ</b> order करो और दोनों के लिए एक बार इंतज़ार करो (<b><code>Task.WhenAll</code></b>)। खाना वही, इंतज़ार कम — बस दोनों orders एक-दूसरे पर depend न करें।</p>
<ul>
<li>Compiler <code>async</code> method को एक <b>state machine</b> में बदल देता है। हर <code>await</code> एक ऐसा point है जहाँ method <b>रुक</b> सकता है और बाद में अपने सारे local variables के साथ <b>फिर से चल</b> सकता है।</li>
<li>Async methods से मिले tasks <b>"hot"</b> होते हैं — जब आपको <code>Task</code> मिलता है तब तक काम <b>शुरू हो चुका</b> होता है। <code>await</code> कुछ शुरू नहीं करता; वो result का इंतज़ार करता है (और उसका exception दोबारा throw करता है)।</li>
<li><b>Fast path</b>: जो task <b>पहले से complete</b> है उस पर await करने से code उसी thread पर, synchronously आगे चलता रहता है — कोई रुकावट नहीं।</li>
<li><b><code>await</code> के बाद वाला code कहाँ चलता है?</b> अगर <code>SynchronizationContext</code> था (WPF/WinForms UI thread), तो वहीं वापस जाता है। वरना (ASP.NET Core, console apps, background services) वो <b>thread-pool thread</b> पर चलता है — हो सकता है <code>await</code> से पहले वाले thread से अलग हो। इसमें कोई दिक्कत नहीं; बस thread की पहचान पर depend मत करो।</li>
<li><b>Sequential बनाम concurrent</b>: <b>independent</b> I/O calls के लिए सबको शुरू करो, फिर <code>await Task.WhenAll(...)</code>। Results array उसी <b>order में होता है जिसमें आपने tasks दिए</b>, न कि जिस order में वो ख़त्म हुए।</li>
<li><b>ध्यान रहे:</b> कुछ objects एक साथ use की इजाज़त नहीं देते — EF Core का <code>DbContext</code> एक ही समय पर दो queries चलने पर exception देता है। Concurrent queries के लिए अलग contexts चाहिए (Day 5)।</li>
<li><b><code>TaskCompletionSource&lt;T&gt;</code></b> ऐसा task बनाता है जिसे <b>आप</b> complete करते हो — पुराने callback या event API को <code>Task</code> में wrap करने के काम आता है। नीचे के demo में यह नकली "database" है ताकि output का order तय रहे।</li>
<li><b>Code में Thread बनाम Task</b>: <code>new Thread(...)</code> + <code>Start()</code> + <code>Join()</code> से आपको अपना OS thread मिलता है, पर न result value, न exception flow, और caller block रहता है। <code>await Task.Run(...)</code> pool से thread उधार लेता है और <code>await</code> के ज़रिए result और exceptions वापस देता है।</li>
</ul>
<p><b>कब use करें:</b> sequential awaits जब step 2 को step 1 का result चाहिए; independent calls के लिए <code>WhenAll</code> (product page के लिए price + stock + reviews)। <b>कब नहीं:</b> किसी downstream API पर बिना limit के सैकड़ों <code>WhenAll</code> calls मत दागो (batching या <code>MaxDegreeOfParallelism</code> के साथ <code>Parallel.ForEachAsync</code> use करो), और normal काम के लिए raw <code>Thread</code> मत बनाओ — उन्हें long-running dedicated worker जैसे rare cases के लिए रखो।</p>`,
        hg: `<p><b>Analogy — chai aur samosa order karna:</b> chai ki dukaan par aap chai order karke uska intezaar kar sakte ho, aur uske baad hi samosa order karo (<b>sequential awaits</b>). Ya aap <b>dono ek saath</b> order karo aur dono ke liye ek baar intezaar karo (<b><code>Task.WhenAll</code></b>). Khaana wahi, intezaar kam — bas dono orders ek-doosre par depend na karein.</p>
<ul>
<li>Compiler <code>async</code> method ko ek <b>state machine</b> mein badal deta hai. Har <code>await</code> ek aisa point hai jahan method <b>ruk</b> sakta hai aur baad mein apne saare local variables ke saath <b>phir se chal</b> sakta hai.</li>
<li>Async methods se mile tasks <b>"hot"</b> hote hain — jab aapko <code>Task</code> milta hai tab tak kaam <b>shuru ho chuka</b> hota hai. <code>await</code> kuch shuru nahi karta; woh result ka intezaar karta hai (aur uska exception dobara throw karta hai).</li>
<li><b>Fast path</b>: jo task <b>pehle se complete</b> hai us par await karne se code usi thread par, synchronously aage chalta rehta hai — koi rukaawat nahi.</li>
<li><b><code>await</code> ke baad wala code kahan chalta hai?</b> Agar <code>SynchronizationContext</code> tha (WPF/WinForms UI thread), to wahin wapas jaata hai. Warna (ASP.NET Core, console apps, background services) woh <b>thread-pool thread</b> par chalta hai — ho sakta hai <code>await</code> se pehle wale thread se alag ho. Ismein koi dikkat nahi; bas thread ki pehchaan par depend mat karo.</li>
<li><b>Sequential vs concurrent</b>: <b>independent</b> I/O calls ke liye sabko shuru karo, phir <code>await Task.WhenAll(...)</code>. Results array usi <b>order mein hota hai jismein aapne tasks diye</b>, na ki jis order mein woh khatam hue.</li>
<li><b>Dhyaan rahe:</b> kuch objects ek saath use ki ijaazat nahi dete — EF Core ka <code>DbContext</code> ek hi samay par do queries chalne par exception deta hai. Concurrent queries ke liye alag contexts chahiye (Day 5).</li>
<li><b><code>TaskCompletionSource&lt;T&gt;</code></b> aisa task banata hai jise <b>aap</b> complete karte ho — purane callback ya event API ko <code>Task</code> mein wrap karne ke kaam aata hai. Neeche ke demo mein yeh nakli "database" hai taaki output ka order tay rahe.</li>
<li><b>Code mein Thread vs Task</b>: <code>new Thread(...)</code> + <code>Start()</code> + <code>Join()</code> se aapko apna OS thread milta hai, par na result value, na exception flow, aur caller block rehta hai. <code>await Task.Run(...)</code> pool se thread udhaar leta hai aur <code>await</code> ke zariye result aur exceptions wapas deta hai.</li>
</ul>
<p><b>Kab use karein:</b> sequential awaits jab step 2 ko step 1 ka result chahiye; independent calls ke liye <code>WhenAll</code> (product page ke liye price + stock + reviews). <b>Kab nahi:</b> kisi downstream API par bina limit ke saikdon <code>WhenAll</code> calls mat daago (batching ya <code>MaxDegreeOfParallelism</code> ke saath <code>Parallel.ForEachAsync</code> use karo), aur normal kaam ke liye raw <code>Thread</code> mat banao — unhe long-running dedicated worker jaise rare cases ke liye rakho.</p>`
      },
      code: [{
        caption: {
          en: "What runs when: sync until the first incomplete await; sequential vs WhenAll; Thread vs Task.Run",
          hi: "क्या कब चलता है: पहले अधूरे await तक sync; sequential बनाम WhenAll; Thread बनाम Task.Run",
          hg: "Kya kab chalta hai: pehle adhoore await tak sync; sequential vs WhenAll; Thread vs Task.Run"
        },
        check: "run",
        expected: "1. Calling GetStockAsync\n2. Checking rice (still synchronous)\n3. Caller continues. Task done? False\n4. Database answered\n5. Stock = 25\nSequential total = 100\nWhenAll prices = [40, 60], total = 100\nThread: 500500, Task: 500500",
        src: `// A fake "database": we decide when it answers, so the output order is fixed.
var database = new TaskCompletionSource<int>();

Console.WriteLine("1. Calling GetStockAsync");
Task<int> stockTask = GetStockAsync("rice", database.Task);
Console.WriteLine($"3. Caller continues. Task done? {stockTask.IsCompleted}");

database.SetResult(25);                // the database answers now
int stock = await stockTask;
Console.WriteLine($"5. Stock = {stock}");

// Sequential: the second call starts only after the first finished
int chai = await GetPriceAsync(40);
int samosa = await GetPriceAsync(60);
Console.WriteLine($"Sequential total = {chai + samosa}");

// Concurrent: start both, then wait once. Results come in argument order.
Task<int> chaiTask = GetPriceAsync(40);
Task<int> samosaTask = GetPriceAsync(60);
int[] prices = await Task.WhenAll(chaiTask, samosaTask);
Console.WriteLine($"WhenAll prices = [{string.Join(", ", prices)}], total = {prices.Sum()}");

// CPU-bound work: raw Thread vs Task.Run
int threadResult = 0;
var thread = new Thread(() => threadResult = SumTo(1000));
thread.Start();
thread.Join();                         // the caller blocks; no built-in result
int taskResult = await Task.Run(() => SumTo(1000));   // result (and exceptions) come back via await
Console.WriteLine($"Thread: {threadResult}, Task: {taskResult}");

static async Task<int> GetStockAsync(string item, Task<int> dbCall)
{
    Console.WriteLine($"2. Checking {item} (still synchronous)");
    int qty = await dbCall;            // not complete yet: return a Task to the caller here
    Console.WriteLine("4. Database answered");
    return qty;
}

static async Task<int> GetPriceAsync(int price)
{
    await Task.Delay(10);              // pretend I/O
    return price;
}

static int SumTo(int n)
{
    int sum = 0;
    for (int i = 1; i <= n; i++) sum += i;
    return sum;
}`
      }]
    },
    {
      id: "async-pitfalls-in-code",
      depth: "detailed",
      title: {
        en: "Async pitfalls in code: deadlocks, ConfigureAwait, async void, Task.Run, lock",
        hi: "Code में async की गलतियाँ: deadlocks, ConfigureAwait, async void, Task.Run, lock",
        hg: "Code mein async ki galtiyan: deadlocks, ConfigureAwait, async void, Task.Run, lock"
      },
      body: {
        en: `<p><b>Analogy — the one washroom key:</b> a small office has <b>one</b> washroom key, and only the person holding it can go in. The manager holds the key and stands outside the washroom waiting for a clerk's report. The clerk finishes the report but needs the key to go in and hand it over. The manager will not move until the report arrives; the clerk cannot arrive without the key — <b>both wait forever</b>. That is the classic <b>sync-over-async deadlock</b>: the UI thread (the key) is blocked by <code>.Result</code>, and the code after <code>await</code> needs that same thread to finish.</p>
<ul>
<li><b>Deadlock with <code>.Result</code> / <code>.Wait()</code></b>: happens where a <b>SynchronizationContext</b> allows only one thread — WPF/WinForms UI thread, old ASP.NET (System.Web). The awaited code wants to resume on that thread, but that thread is blocked waiting for it.</li>
<li><b>ASP.NET Core has no SynchronizationContext</b>, so this exact deadlock does not happen there. But blocking still wastes a thread-pool thread per request; under load this causes <b>thread-pool starvation</b> (slow responses, timeouts). Fix: <b>async all the way</b>.</li>
<li><b><code>ConfigureAwait(false)</code></b>: "do not resume on the captured context". In <b>library code</b> it avoids the deadlock above if some caller blocks, and saves a jump back to the UI thread. In <b>UI code</b> you usually need the context (to touch controls), so do not use it there. In <b>ASP.NET Core app code</b> it is not needed — many teams skip it for readability. Analyzer <b>CA2007</b> (off by default) can enforce it in a library.</li>
<li><b><code>async void</code></b>: the caller cannot await it or catch its exceptions. An exception goes to the SynchronizationContext — with none (ASP.NET Core, console) it <b>crashes the process</b>. Use it <b>only for event handlers</b>, with try/catch inside. Watch for hidden ones: an <code>async</code> lambda passed to an <code>Action</code> (e.g. <code>list.ForEach(async x =&gt; ...)</code>) is <code>async void</code>.</li>
<li><b><code>Task.Run</code> in ASP.NET Core</b> is usually a smell. The request already runs on a pool thread; <code>await Task.Run(work)</code> just moves the work to another pool thread — extra cost, no gain. Fire-and-forget <code>_ = Task.Run(...)</code> is worse: exceptions are lost, scoped services like <code>DbContext</code> are disposed when the request ends, and work is lost on shutdown. Use a <b><code>BackgroundService</code> + a queue</b> (e.g. <code>Channel&lt;T&gt;</code>) instead.</li>
<li><b>Forgotten <code>await</code></b>: calling an async method without awaiting it gives warning <b>CS4014</b> — an accidental fire-and-forget. Treat it as a bug in code review.</li>
<li><b>No <code>await</code> inside <code>lock</code></b> (error <b>CS1996</b>) — a lock belongs to a thread, and code after <code>await</code> may run on another thread. Use <b><code>SemaphoreSlim(1, 1)</code></b> with <code>await WaitAsync()</code> and <code>Release()</code> in <code>finally</code>.</li>
</ul>
<p><b>When to use:</b> <code>ConfigureAwait(false)</code> on every <code>await</code> in reusable libraries/NuGet packages; <code>async void</code> only in UI event handlers; <code>Task.Run</code> for CPU work in desktop apps. <b>When not:</b> <code>.Result</code>/<code>.Wait()</code> in request or UI code (if a sync API is unavoidable, e.g. in <code>Main</code> of an old app, keep it at the very top and document why); <code>Task.Run</code> wrappers inside ASP.NET Core controllers.</p>`,
        hi: `<p><b>Analogy — washroom की एक चाबी:</b> छोटे office में washroom की <b>एक ही</b> चाबी है, और अंदर वही जा सकता है जिसके पास चाबी है। Manager चाबी लेकर washroom के बाहर खड़ा है और clerk की report का इंतज़ार कर रहा है। Clerk ने report पूरी कर ली, पर उसे देने के लिए अंदर जाना है और उसके लिए चाबी चाहिए। Manager report आए बिना हिलेगा नहीं; clerk चाबी के बिना आ नहीं सकता — <b>दोनों हमेशा इंतज़ार करते रहेंगे</b>। यही classic <b>sync-over-async deadlock</b> है: UI thread (चाबी) <code>.Result</code> से block है, और <code>await</code> के बाद वाले code को पूरा होने के लिए वही thread चाहिए।</p>
<ul>
<li><b><code>.Result</code> / <code>.Wait()</code> से deadlock</b>: वहाँ होता है जहाँ <b>SynchronizationContext</b> सिर्फ़ एक thread की इजाज़त देता है — WPF/WinForms UI thread, पुराना ASP.NET (System.Web)। Await किया गया code उसी thread पर वापस आना चाहता है, पर वो thread उसी के इंतज़ार में block है।</li>
<li><b>ASP.NET Core में SynchronizationContext नहीं है</b>, इसलिए यह वाला deadlock वहाँ नहीं होता। पर block करने से हर request पर एक thread-pool thread बर्बाद होता है; load पर इससे <b>thread-pool starvation</b> होती है (धीमे responses, timeouts)। इलाज: <b>async all the way</b>।</li>
<li><b><code>ConfigureAwait(false)</code></b>: "captured context पर वापस मत आओ"। <b>Library code</b> में यह ऊपर वाले deadlock से बचाता है अगर कोई caller block करे, और UI thread पर वापस जाने का चक्कर बचाता है। <b>UI code</b> में आमतौर पर context चाहिए (controls छूने के लिए), इसलिए वहाँ मत लगाओ। <b>ASP.NET Core app code</b> में इसकी ज़रूरत नहीं — कई teams readability के लिए इसे छोड़ देती हैं। Analyzer <b>CA2007</b> (by default off) library में इसे enforce कर सकता है।</li>
<li><b><code>async void</code></b>: caller इसे await नहीं कर सकता, न इसके exceptions पकड़ सकता है। Exception SynchronizationContext पर जाता है — context न हो (ASP.NET Core, console) तो <b>process crash हो जाता है</b>। इसे <b>सिर्फ़ event handlers के लिए</b> use करो, अंदर try/catch के साथ। छुपे हुए cases देखो: <code>Action</code> में दिया गया <code>async</code> lambda (जैसे <code>list.ForEach(async x =&gt; ...)</code>) <code>async void</code> होता है।</li>
<li><b>ASP.NET Core में <code>Task.Run</code></b> अक्सर एक smell है। Request पहले से pool thread पर चल रही है; <code>await Task.Run(work)</code> बस काम को दूसरे pool thread पर ले जाता है — extra cost, फ़ायदा कुछ नहीं। Fire-and-forget <code>_ = Task.Run(...)</code> और बुरा है: exceptions खो जाते हैं, request ख़त्म होते ही <code>DbContext</code> जैसी scoped services dispose हो जाती हैं, और shutdown पर काम खो जाता है। इसकी जगह <b><code>BackgroundService</code> + एक queue</b> (जैसे <code>Channel&lt;T&gt;</code>) use करो।</li>
<li><b>भूला हुआ <code>await</code></b>: async method को बिना await किए call करने पर warning <b>CS4014</b> आती है — गलती से हुआ fire-and-forget। Code review में इसे bug मानो।</li>
<li><b><code>lock</code> के अंदर <code>await</code> नहीं</b> (error <b>CS1996</b>) — lock एक thread का होता है, और <code>await</code> के बाद code दूसरे thread पर चल सकता है। <b><code>SemaphoreSlim(1, 1)</code></b> use करो: <code>await WaitAsync()</code> और <code>finally</code> में <code>Release()</code>।</li>
</ul>
<p><b>कब use करें:</b> reusable libraries/NuGet packages में हर <code>await</code> पर <code>ConfigureAwait(false)</code>; <code>async void</code> सिर्फ़ UI event handlers में; desktop apps में CPU काम के लिए <code>Task.Run</code>। <b>कब नहीं:</b> request या UI code में <code>.Result</code>/<code>.Wait()</code> (अगर sync API मजबूरी है, जैसे किसी पुराने app के <code>Main</code> में, तो उसे सबसे ऊपर रखो और वजह लिखो); ASP.NET Core controllers के अंदर <code>Task.Run</code> wrappers।</p>`,
        hg: `<p><b>Analogy — washroom ki ek chaabi:</b> chhote office mein washroom ki <b>ek hi</b> chaabi hai, aur andar wahi ja sakta hai jiske paas chaabi hai. Manager chaabi lekar washroom ke bahar khada hai aur clerk ki report ka intezaar kar raha hai. Clerk ne report poori kar li, par use dene ke liye andar jaana hai aur uske liye chaabi chahiye. Manager report aaye bina hilega nahi; clerk chaabi ke bina aa nahi sakta — <b>dono hamesha intezaar karte rahenge</b>. Yahi classic <b>sync-over-async deadlock</b> hai: UI thread (chaabi) <code>.Result</code> se block hai, aur <code>await</code> ke baad wale code ko poora hone ke liye wahi thread chahiye.</p>
<ul>
<li><b><code>.Result</code> / <code>.Wait()</code> se deadlock</b>: wahan hota hai jahan <b>SynchronizationContext</b> sirf ek thread ki ijaazat deta hai — WPF/WinForms UI thread, purana ASP.NET (System.Web). Await kiya gaya code usi thread par wapas aana chahta hai, par woh thread usi ke intezaar mein block hai.</li>
<li><b>ASP.NET Core mein SynchronizationContext nahi hai</b>, isliye yeh wala deadlock wahan nahi hota. Par block karne se har request par ek thread-pool thread barbaad hota hai; load par isse <b>thread-pool starvation</b> hoti hai (dheeme responses, timeouts). Ilaaj: <b>async all the way</b>.</li>
<li><b><code>ConfigureAwait(false)</code></b>: "captured context par wapas mat aao". <b>Library code</b> mein yeh upar wale deadlock se bachata hai agar koi caller block kare, aur UI thread par wapas jaane ka chakkar bachata hai. <b>UI code</b> mein aamtaur par context chahiye (controls chhoone ke liye), isliye wahan mat lagao. <b>ASP.NET Core app code</b> mein iski zaroorat nahi — kai teams readability ke liye ise chhod deti hain. Analyzer <b>CA2007</b> (by default off) library mein ise enforce kar sakta hai.</li>
<li><b><code>async void</code></b>: caller ise await nahi kar sakta, na iske exceptions pakad sakta hai. Exception SynchronizationContext par jaata hai — context na ho (ASP.NET Core, console) to <b>process crash ho jaata hai</b>. Ise <b>sirf event handlers ke liye</b> use karo, andar try/catch ke saath. Chhupe hue cases dekho: <code>Action</code> mein diya gaya <code>async</code> lambda (jaise <code>list.ForEach(async x =&gt; ...)</code>) <code>async void</code> hota hai.</li>
<li><b>ASP.NET Core mein <code>Task.Run</code></b> aksar ek smell hai. Request pehle se pool thread par chal rahi hai; <code>await Task.Run(work)</code> bas kaam ko doosre pool thread par le jaata hai — extra cost, fayda kuch nahi. Fire-and-forget <code>_ = Task.Run(...)</code> aur bura hai: exceptions kho jaate hain, request khatam hote hi <code>DbContext</code> jaisi scoped services dispose ho jaati hain, aur shutdown par kaam kho jaata hai. Iski jagah <b><code>BackgroundService</code> + ek queue</b> (jaise <code>Channel&lt;T&gt;</code>) use karo.</li>
<li><b>Bhoola hua <code>await</code></b>: async method ko bina await kiye call karne par warning <b>CS4014</b> aati hai — galti se hua fire-and-forget. Code review mein ise bug maano.</li>
<li><b><code>lock</code> ke andar <code>await</code> nahi</b> (error <b>CS1996</b>) — lock ek thread ka hota hai, aur <code>await</code> ke baad code doosre thread par chal sakta hai. <b><code>SemaphoreSlim(1, 1)</code></b> use karo: <code>await WaitAsync()</code> aur <code>finally</code> mein <code>Release()</code>.</li>
</ul>
<p><b>Kab use karein:</b> reusable libraries/NuGet packages mein har <code>await</code> par <code>ConfigureAwait(false)</code>; <code>async void</code> sirf UI event handlers mein; desktop apps mein CPU kaam ke liye <code>Task.Run</code>. <b>Kab nahi:</b> request ya UI code mein <code>.Result</code>/<code>.Wait()</code> (agar sync API majboori hai, jaise kisi purane app ke <code>Main</code> mein, to use sabse upar rakho aur wajah likho); ASP.NET Core controllers ke andar <code>Task.Run</code> wrappers.</p>`
      },
      code: [{
        caption: {
          en: "Library code with ConfigureAwait(false), async all the way, async void only for an event handler, SemaphoreSlim instead of lock",
          hi: "ConfigureAwait(false) वाला library code, async all the way, async void सिर्फ़ event handler के लिए, lock की जगह SemaphoreSlim",
          hg: "ConfigureAwait(false) wala library code, async all the way, async void sirf event handler ke liye, lock ki jagah SemaphoreSlim"
        },
        check: "compile",
        src: `using System.Globalization;

// Library code: it does not know who calls it (UI app? ASP.NET Core?),
// so it does not need to resume on the caller's context.
public sealed class RateClient(HttpClient http)
{
    public async Task<decimal> GetRateAsync(string currency, CancellationToken ct = default)
    {
        string text = await http.GetStringAsync($"/rates/{currency}", ct).ConfigureAwait(false);
        return decimal.Parse(text, CultureInfo.InvariantCulture);
    }
}

public sealed class CheckoutService(RateClient rates)
{
    // BAD: sync-over-async. Blocks a thread; can deadlock in UI / classic ASP.NET apps.
    public decimal TotalBlocking(decimal amount) => amount * rates.GetRateAsync("USD").Result;

    // GOOD: async all the way, cancellation passed through.
    public async Task<decimal> TotalAsync(decimal amount, CancellationToken ct)
        => amount * await rates.GetRateAsync("USD", ct);
}

public sealed class SaveForm
{
    // UI event handler: the accepted place for async void. Catch everything inside.
    private async void OnSaveClicked(object? sender, EventArgs e)
    {
        try
        {
            await SaveAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Save failed: {ex.Message}");   // show a message, log it
        }
    }

    private Task SaveAsync() => Task.CompletedTask;
}

// 'lock' cannot contain 'await' (CS1996). SemaphoreSlim works with async code.
public sealed class TokenCache
{
    private readonly SemaphoreSlim _gate = new(1, 1);
    private string? _token;

    public async Task<string> GetTokenAsync(Func<Task<string>> fetchToken)
    {
        await _gate.WaitAsync();
        try
        {
            return _token ??= await fetchToken();   // only one caller fetches
        }
        finally
        {
            _gate.Release();
        }
    }
}`
      }]
    },
    {
      id: "cancellation-streams-in-code",
      depth: "detailed",
      title: {
        en: "CancellationToken, IAsyncEnumerable and IAsyncDisposable in code",
        hi: "Code में CancellationToken, IAsyncEnumerable और IAsyncDisposable",
        hg: "Code mein CancellationToken, IAsyncEnumerable aur IAsyncDisposable"
      },
      body: {
        en: `<p><b>Analogy — food app and pani-puri:</b> when you cancel a food-app order, nobody runs into the kitchen and snatches the pan. The kitchen <b>checks the order status before each step</b> and stops politely — that is <b>cooperative cancellation</b> with a <code>CancellationToken</code>. And the pani-puri wala gives you <b>one puri at a time as soon as it is ready</b>, instead of making all six and then handing over the plate — that is an <b>async stream</b> (<code>IAsyncEnumerable&lt;T&gt;</code>).</p>
<ul>
<li><b><code>CancellationTokenSource</code></b> = the cancel button (<code>Cancel()</code>, or <code>CancelAfter(TimeSpan)</code> for a timeout). <b><code>CancellationToken</code></b> = the read-only signal you pass down to every method.</li>
<li>Cancellation is <b>cooperative</b>: nothing is killed. Your code checks <code>token.ThrowIfCancellationRequested()</code>, or passes the token to APIs that support it (<code>HttpClient</code>, EF Core <code>ToListAsync(ct)</code>, <code>Task.Delay(ms, ct)</code>). Cancelled work ends with <b><code>OperationCanceledException</code></b> (<code>TaskCanceledException</code> derives from it).</li>
<li><b>ASP.NET Core</b>: add a <code>CancellationToken</code> parameter to an action or minimal-API handler — it is bound to <code>HttpContext.RequestAborted</code>, so the work stops when the client disconnects. Pass it down to EF Core and <code>HttpClient</code> calls.</li>
<li>Treat <code>OperationCanceledException</code> as <b>normal</b> when you asked for it — do not log it as an error. <code>CancellationTokenSource</code> is <code>IDisposable</code> (especially with <code>CancelAfter</code>) — dispose it.</li>
<li><b><code>IAsyncEnumerable&lt;T&gt;</code></b> (C# 8): write an <code>async IAsyncEnumerable&lt;T&gt;</code> method with <code>await</code> and <code>yield return</code>; consume it with <b><code>await foreach</code></b>. Items flow one by one without loading everything into a <code>List</code> first. Mark the token parameter with <code>[EnumeratorCancellation]</code> so <code>WithCancellation(ct)</code> reaches it.</li>
<li>Where you meet it: EF Core <code>AsAsyncEnumerable()</code>, gRPC/SignalR streaming, ASP.NET Core actions returning <code>IAsyncEnumerable&lt;T&gt;</code> (JSON is streamed), reading pages from a paged API.</li>
<li><b><code>IAsyncDisposable</code></b>: <code>ValueTask DisposeAsync()</code> for cleanup that itself needs I/O (flush a stream, send a final network message). Use <b><code>await using</code></b>. <code>DbContext</code>, streams and <code>Utf8JsonWriter</code> implement it.</li>
</ul>
<p><b>When to use:</b> accept a <code>CancellationToken</code> (last parameter, <code>= default</code>) in every public async method that does I/O; <code>IAsyncEnumerable</code> for large or paged results processed item by item; <code>await using</code> when a type offers <code>DisposeAsync</code>. <b>When not:</b> do not check the token in tiny CPU loops every iteration (check every N items); do not stream with <code>IAsyncEnumerable</code> when the caller needs the full list anyway (sorting, counting) — a normal <code>Task&lt;List&lt;T&gt;&gt;</code> is simpler.</p>`,
        hi: `<p><b>Analogy — food app और pani-puri:</b> जब आप food app पर order cancel करते हो, तो कोई kitchen में भागकर कढ़ाई नहीं छीनता। Kitchen <b>हर step से पहले order का status check करती है</b> और आराम से रुक जाती है — यही <code>CancellationToken</code> वाला <b>cooperative cancellation</b> है। और pani-puri वाला <b>हर puri बनते ही एक-एक करके</b> देता है, सारी छह बनाकर plate नहीं थमाता — यही <b>async stream</b> (<code>IAsyncEnumerable&lt;T&gt;</code>) है।</p>
<ul>
<li><b><code>CancellationTokenSource</code></b> = cancel button (<code>Cancel()</code>, या timeout के लिए <code>CancelAfter(TimeSpan)</code>)। <b><code>CancellationToken</code></b> = read-only signal जिसे आप हर method में नीचे pass करते हो।</li>
<li>Cancellation <b>cooperative</b> है: किसी को मारा नहीं जाता। आपका code <code>token.ThrowIfCancellationRequested()</code> check करता है, या token उन APIs को देता है जो इसे support करती हैं (<code>HttpClient</code>, EF Core <code>ToListAsync(ct)</code>, <code>Task.Delay(ms, ct)</code>)। Cancel हुआ काम <b><code>OperationCanceledException</code></b> के साथ ख़त्म होता है (<code>TaskCanceledException</code> इसी से derive होता है)।</li>
<li><b>ASP.NET Core</b>: action या minimal-API handler में <code>CancellationToken</code> parameter जोड़ो — वो <code>HttpContext.RequestAborted</code> से bind होता है, तो client disconnect होने पर काम रुक जाता है। इसे EF Core और <code>HttpClient</code> calls तक pass करो।</li>
<li>जब cancel आपने ख़ुद माँगा हो तो <code>OperationCanceledException</code> को <b>normal</b> मानो — इसे error की तरह log मत करो। <code>CancellationTokenSource</code> <code>IDisposable</code> है (ख़ासकर <code>CancelAfter</code> के साथ) — इसे dispose करो।</li>
<li><b><code>IAsyncEnumerable&lt;T&gt;</code></b> (C# 8): <code>await</code> और <code>yield return</code> वाला <code>async IAsyncEnumerable&lt;T&gt;</code> method लिखो; उसे <b><code>await foreach</code></b> से consume करो। Items एक-एक करके आते हैं, पहले सब कुछ <code>List</code> में load किए बिना। Token parameter पर <code>[EnumeratorCancellation]</code> लगाओ ताकि <code>WithCancellation(ct)</code> उस तक पहुँचे।</li>
<li>यह कहाँ मिलता है: EF Core <code>AsAsyncEnumerable()</code>, gRPC/SignalR streaming, <code>IAsyncEnumerable&lt;T&gt;</code> return करने वाले ASP.NET Core actions (JSON stream होता है), paged API से pages पढ़ना।</li>
<li><b><code>IAsyncDisposable</code></b>: <code>ValueTask DisposeAsync()</code> ऐसे cleanup के लिए जिसमें ख़ुद I/O चाहिए (stream flush करना, आख़िरी network message भेजना)। <b><code>await using</code></b> use करो। <code>DbContext</code>, streams और <code>Utf8JsonWriter</code> इसे implement करते हैं।</li>
</ul>
<p><b>कब use करें:</b> I/O करने वाले हर public async method में <code>CancellationToken</code> लो (आख़िरी parameter, <code>= default</code>); बड़े या paged results जिन्हें item by item process करना है उनके लिए <code>IAsyncEnumerable</code>; जब type <code>DisposeAsync</code> देता है तो <code>await using</code>। <b>कब नहीं:</b> छोटे CPU loops में हर iteration पर token check मत करो (हर N items पर करो); जब caller को वैसे भी पूरी list चाहिए (sorting, counting) तो <code>IAsyncEnumerable</code> से stream मत करो — normal <code>Task&lt;List&lt;T&gt;&gt;</code> ज़्यादा आसान है।</p>`,
        hg: `<p><b>Analogy — food app aur pani-puri:</b> jab aap food app par order cancel karte ho, to koi kitchen mein bhaagkar kadhai nahi chheenta. Kitchen <b>har step se pehle order ka status check karti hai</b> aur aaraam se ruk jaati hai — yahi <code>CancellationToken</code> wala <b>cooperative cancellation</b> hai. Aur pani-puri wala <b>har puri bante hi ek-ek karke</b> deta hai, saari chhah banakar plate nahi thamaata — yahi <b>async stream</b> (<code>IAsyncEnumerable&lt;T&gt;</code>) hai.</p>
<ul>
<li><b><code>CancellationTokenSource</code></b> = cancel button (<code>Cancel()</code>, ya timeout ke liye <code>CancelAfter(TimeSpan)</code>). <b><code>CancellationToken</code></b> = read-only signal jise aap har method mein neeche pass karte ho.</li>
<li>Cancellation <b>cooperative</b> hai: kisi ko maara nahi jaata. Aapka code <code>token.ThrowIfCancellationRequested()</code> check karta hai, ya token un APIs ko deta hai jo ise support karti hain (<code>HttpClient</code>, EF Core <code>ToListAsync(ct)</code>, <code>Task.Delay(ms, ct)</code>). Cancel hua kaam <b><code>OperationCanceledException</code></b> ke saath khatam hota hai (<code>TaskCanceledException</code> isi se derive hota hai).</li>
<li><b>ASP.NET Core</b>: action ya minimal-API handler mein <code>CancellationToken</code> parameter jodo — woh <code>HttpContext.RequestAborted</code> se bind hota hai, to client disconnect hone par kaam ruk jaata hai. Ise EF Core aur <code>HttpClient</code> calls tak pass karo.</li>
<li>Jab cancel aapne khud maanga ho to <code>OperationCanceledException</code> ko <b>normal</b> maano — ise error ki tarah log mat karo. <code>CancellationTokenSource</code> <code>IDisposable</code> hai (khaaskar <code>CancelAfter</code> ke saath) — ise dispose karo.</li>
<li><b><code>IAsyncEnumerable&lt;T&gt;</code></b> (C# 8): <code>await</code> aur <code>yield return</code> wala <code>async IAsyncEnumerable&lt;T&gt;</code> method likho; use <b><code>await foreach</code></b> se consume karo. Items ek-ek karke aate hain, pehle sab kuch <code>List</code> mein load kiye bina. Token parameter par <code>[EnumeratorCancellation]</code> lagao taaki <code>WithCancellation(ct)</code> us tak pahunche.</li>
<li>Yeh kahan milta hai: EF Core <code>AsAsyncEnumerable()</code>, gRPC/SignalR streaming, <code>IAsyncEnumerable&lt;T&gt;</code> return karne wale ASP.NET Core actions (JSON stream hota hai), paged API se pages padhna.</li>
<li><b><code>IAsyncDisposable</code></b>: <code>ValueTask DisposeAsync()</code> aise cleanup ke liye jismein khud I/O chahiye (stream flush karna, aakhri network message bhejna). <b><code>await using</code></b> use karo. <code>DbContext</code>, streams aur <code>Utf8JsonWriter</code> ise implement karte hain.</li>
</ul>
<p><b>Kab use karein:</b> I/O karne wale har public async method mein <code>CancellationToken</code> lo (aakhri parameter, <code>= default</code>); bade ya paged results jinhe item by item process karna hai unke liye <code>IAsyncEnumerable</code>; jab type <code>DisposeAsync</code> deta hai to <code>await using</code>. <b>Kab nahi:</b> chhote CPU loops mein har iteration par token check mat karo (har N items par karo); jab caller ko waise bhi poori list chahiye (sorting, counting) to <code>IAsyncEnumerable</code> se stream mat karo — normal <code>Task&lt;List&lt;T&gt;&gt;</code> zyada aasaan hai.</p>`
      },
      code: [{
        caption: {
          en: "await foreach over an async stream, cooperative cancellation, and await using",
          hi: "Async stream पर await foreach, cooperative cancellation, और await using",
          hg: "Async stream par await foreach, cooperative cancellation, aur await using"
        },
        check: "run",
        expected: "Got page 1\nGot page 2\nStopped: cancellation requested\nWriting daily sales\nFlushed and closed\nAfter await using",
        src: `using System.Runtime.CompilerServices;

using var cts = new CancellationTokenSource();

try
{
    await foreach (int page in ReadPagesAsync(cts.Token))
    {
        Console.WriteLine($"Got page {page}");
        if (page == 2) cts.Cancel();          // e.g. the user closed the screen
    }
}
catch (OperationCanceledException)
{
    Console.WriteLine("Stopped: cancellation requested");   // expected, not an error
}

await using (var report = new ReportWriter())
{
    await report.WriteAsync("daily sales");
}                                             // DisposeAsync is awaited here
Console.WriteLine("After await using");

static async IAsyncEnumerable<int> ReadPagesAsync(
    [EnumeratorCancellation] CancellationToken ct = default)
{
    for (int page = 1; page <= 5; page++)
    {
        ct.ThrowIfCancellationRequested();    // cooperative: we check the token
        await Task.Delay(10, ct);             // pretend to fetch a page from a DB/API
        yield return page;
    }
}

sealed class ReportWriter : IAsyncDisposable
{
    public Task WriteAsync(string text)
    {
        Console.WriteLine($"Writing {text}");
        return Task.CompletedTask;
    }

    public async ValueTask DisposeAsync()
    {
        await Task.Delay(10);                 // e.g. flush to disk or network
        Console.WriteLine("Flushed and closed");
    }
}`
      }]
    },
    {
      id: "exceptions-in-code",
      depth: "detailed",
      title: {
        en: "Exceptions in code: throw vs throw ex, wrapping, filters, finally, guard clauses",
        hi: "Code में Exceptions: throw बनाम throw ex, wrapping, filters, finally, guard clauses",
        hg: "Code mein Exceptions: throw vs throw ex, wrapping, filters, finally, guard clauses"
      },
      body: {
        en: `<p><b>Analogy — forwarding a complaint:</b> a customer writes a complaint letter at the branch. The branch clerk forwards it to head office with a note on top: "Customer of order ORD-7, please check". He does <b>not</b> rewrite the letter in his own words — the original is still attached. That is <b>wrapping</b> an exception with <code>InnerException</code>. Rewriting it from scratch loses the real story — that is what <code>throw ex;</code> does to the stack trace.</p>
<ul>
<li><b><code>throw;</code></b> rethrows the <b>same</b> exception with its <b>original stack trace</b>. <b><code>throw ex;</code></b> restarts the stack trace at the current line (analyzer <b>CA2200</b> warns). To rethrow later from somewhere else, <code>ExceptionDispatchInfo.Capture(ex).Throw()</code> keeps the original stack.</li>
<li><b>Wrap with context</b>: <code>throw new OrderFailedException($"Order {id} failed", ex);</code> — a better message for the caller, the real cause kept in <code>InnerException</code>.</li>
<li><b>Catch order</b>: most specific first. Putting <code>catch (Exception)</code> before <code>catch (InvalidOperationException)</code> is a compile error (<b>CS0160</b>).</li>
<li><b>Exception filters</b> (<code>catch (...) when (condition)</code>): the condition runs <b>before</b> the stack unwinds — even before inner <code>finally</code> blocks. If it is <code>false</code>, the exception keeps going untouched. Nice trick: <code>catch (Exception ex) when (Log(ex))</code> where <code>Log</code> returns <code>false</code> — log without catching.</li>
<li><b><code>finally</code></b> runs after success, after an exception and after a <code>return</code>. Not when the process itself dies (e.g. <code>Environment.FailFast</code>, stack overflow).</li>
<li><b>Custom exceptions</b>: only when callers will catch them specifically (e.g. <code>InsufficientStockException</code>). Derive from <code>Exception</code>, name ends with <code>Exception</code>, add the standard constructors (message, message + inner). Otherwise reuse built-in ones: <code>ArgumentException</code>, <code>InvalidOperationException</code>, <code>NotSupportedException</code>.</li>
<li><b>Guard clauses</b>: <code>ArgumentNullException.ThrowIfNull(x)</code>, <code>ArgumentException.ThrowIfNullOrEmpty(s)</code>, <code>ArgumentOutOfRangeException.ThrowIfNegative(n)</code> — the parameter name is filled in for you. A <b>throw expression</b> also works inline: <code>_repo = repo ?? throw new ArgumentNullException(nameof(repo));</code></li>
<li><b>Async</b>: an exception inside an <code>async</code> method is stored in the returned <code>Task</code> and thrown at <code>await</code>. <code>.Wait()</code>/<code>.Result</code> wrap it in <code>AggregateException</code>; <code>await</code> gives you the original exception.</li>
</ul>
<p><b>When to use:</b> <code>throw;</code> whenever you rethrow; wrapping when you add useful context at a layer boundary (repository → service); filters for "only this status code / only this error number". <b>When not:</b> <code>throw ex;</code> (practically never); catching <code>Exception</code> just to log and rethrow at every layer; custom exception classes nobody catches; exceptions for normal control flow in hot loops — throwing is much slower than returning a value.</p>`,
        hi: `<p><b>Analogy — complaint आगे भेजना:</b> एक customer branch पर complaint letter लिखता है। Branch का clerk उसे head office भेजता है, ऊपर एक note लगाकर: "Order ORD-7 वाले customer की है, please check करें"। वो letter को अपने शब्दों में <b>दोबारा नहीं</b> लिखता — original साथ लगा रहता है। यही exception को <code>InnerException</code> के साथ <b>wrap</b> करना है। उसे शुरू से दोबारा लिखने पर असली कहानी खो जाती है — <code>throw ex;</code> stack trace के साथ यही करता है।</p>
<ul>
<li><b><code>throw;</code></b> <b>उसी</b> exception को उसके <b>original stack trace</b> के साथ दोबारा throw करता है। <b><code>throw ex;</code></b> stack trace को current line से फिर शुरू कर देता है (analyzer <b>CA2200</b> warning देता है)। बाद में किसी और जगह से rethrow करना हो, तो <code>ExceptionDispatchInfo.Capture(ex).Throw()</code> original stack बचाकर रखता है।</li>
<li><b>Context के साथ wrap करो</b>: <code>throw new OrderFailedException($"Order {id} failed", ex);</code> — caller के लिए बेहतर message, असली वजह <code>InnerException</code> में सुरक्षित।</li>
<li><b>Catch का order</b>: सबसे specific पहले। <code>catch (InvalidOperationException)</code> से पहले <code>catch (Exception)</code> लिखना compile error है (<b>CS0160</b>)।</li>
<li><b>Exception filters</b> (<code>catch (...) when (condition)</code>): condition stack unwind होने से <b>पहले</b> चलती है — अंदर के <code>finally</code> blocks से भी पहले। अगर वो <code>false</code> हो, तो exception बिना छेड़े आगे चला जाता है। एक बढ़िया trick: <code>catch (Exception ex) when (Log(ex))</code> जहाँ <code>Log</code> <code>false</code> return करे — पकड़े बिना log करो।</li>
<li><b><code>finally</code></b> success के बाद, exception के बाद और <code>return</code> के बाद चलता है। तब नहीं जब process ख़ुद मर जाए (जैसे <code>Environment.FailFast</code>, stack overflow)।</li>
<li><b>Custom exceptions</b>: सिर्फ़ तब जब callers उन्हें ख़ास तौर पर पकड़ेंगे (जैसे <code>InsufficientStockException</code>)। <code>Exception</code> से derive करो, नाम <code>Exception</code> पर ख़त्म हो, standard constructors दो (message, message + inner)। वरना built-in वाले reuse करो: <code>ArgumentException</code>, <code>InvalidOperationException</code>, <code>NotSupportedException</code>।</li>
<li><b>Guard clauses</b>: <code>ArgumentNullException.ThrowIfNull(x)</code>, <code>ArgumentException.ThrowIfNullOrEmpty(s)</code>, <code>ArgumentOutOfRangeException.ThrowIfNegative(n)</code> — parameter का नाम अपने-आप भर जाता है। <b>Throw expression</b> भी inline चलता है: <code>_repo = repo ?? throw new ArgumentNullException(nameof(repo));</code></li>
<li><b>Async</b>: <code>async</code> method के अंदर का exception return हुए <code>Task</code> में store होता है और <code>await</code> पर throw होता है। <code>.Wait()</code>/<code>.Result</code> उसे <code>AggregateException</code> में लपेट देते हैं; <code>await</code> आपको original exception देता है।</li>
</ul>
<p><b>कब use करें:</b> जब भी rethrow करो तो <code>throw;</code>; wrapping तब जब layer boundary (repository → service) पर काम का context जोड़ रहे हो; filters "सिर्फ़ यह status code / सिर्फ़ यह error number" के लिए। <b>कब नहीं:</b> <code>throw ex;</code> (practically कभी नहीं); हर layer पर सिर्फ़ log करके rethrow करने के लिए <code>Exception</code> पकड़ना; ऐसी custom exception classes जिन्हें कोई पकड़ता ही नहीं; hot loops में normal control flow के लिए exceptions — throw करना value return करने से बहुत धीमा है।</p>`,
        hg: `<p><b>Analogy — complaint aage bhejna:</b> ek customer branch par complaint letter likhta hai. Branch ka clerk use head office bhejta hai, upar ek note lagakar: "Order ORD-7 wale customer ki hai, please check karein". Woh letter ko apne shabdon mein <b>dobara nahi</b> likhta — original saath laga rehta hai. Yahi exception ko <code>InnerException</code> ke saath <b>wrap</b> karna hai. Use shuru se dobara likhne par asli kahani kho jaati hai — <code>throw ex;</code> stack trace ke saath yahi karta hai.</p>
<ul>
<li><b><code>throw;</code></b> <b>usi</b> exception ko uske <b>original stack trace</b> ke saath dobara throw karta hai. <b><code>throw ex;</code></b> stack trace ko current line se phir shuru kar deta hai (analyzer <b>CA2200</b> warning deta hai). Baad mein kisi aur jagah se rethrow karna ho, to <code>ExceptionDispatchInfo.Capture(ex).Throw()</code> original stack bachakar rakhta hai.</li>
<li><b>Context ke saath wrap karo</b>: <code>throw new OrderFailedException($"Order {id} failed", ex);</code> — caller ke liye behtar message, asli wajah <code>InnerException</code> mein surakshit.</li>
<li><b>Catch ka order</b>: sabse specific pehle. <code>catch (InvalidOperationException)</code> se pehle <code>catch (Exception)</code> likhna compile error hai (<b>CS0160</b>).</li>
<li><b>Exception filters</b> (<code>catch (...) when (condition)</code>): condition stack unwind hone se <b>pehle</b> chalti hai — andar ke <code>finally</code> blocks se bhi pehle. Agar woh <code>false</code> ho, to exception bina chhede aage chala jaata hai. Ek badhiya trick: <code>catch (Exception ex) when (Log(ex))</code> jahan <code>Log</code> <code>false</code> return kare — pakde bina log karo.</li>
<li><b><code>finally</code></b> success ke baad, exception ke baad aur <code>return</code> ke baad chalta hai. Tab nahi jab process khud mar jaaye (jaise <code>Environment.FailFast</code>, stack overflow).</li>
<li><b>Custom exceptions</b>: sirf tab jab callers unhe khaas taur par pakdenge (jaise <code>InsufficientStockException</code>). <code>Exception</code> se derive karo, naam <code>Exception</code> par khatam ho, standard constructors do (message, message + inner). Warna built-in wale reuse karo: <code>ArgumentException</code>, <code>InvalidOperationException</code>, <code>NotSupportedException</code>.</li>
<li><b>Guard clauses</b>: <code>ArgumentNullException.ThrowIfNull(x)</code>, <code>ArgumentException.ThrowIfNullOrEmpty(s)</code>, <code>ArgumentOutOfRangeException.ThrowIfNegative(n)</code> — parameter ka naam apne-aap bhar jaata hai. <b>Throw expression</b> bhi inline chalta hai: <code>_repo = repo ?? throw new ArgumentNullException(nameof(repo));</code></li>
<li><b>Async</b>: <code>async</code> method ke andar ka exception return hue <code>Task</code> mein store hota hai aur <code>await</code> par throw hota hai. <code>.Wait()</code>/<code>.Result</code> use <code>AggregateException</code> mein lapet dete hain; <code>await</code> aapko original exception deta hai.</li>
</ul>
<p><b>Kab use karein:</b> jab bhi rethrow karo to <code>throw;</code>; wrapping tab jab layer boundary (repository → service) par kaam ka context jod rahe ho; filters "sirf yeh status code / sirf yeh error number" ke liye. <b>Kab nahi:</b> <code>throw ex;</code> (practically kabhi nahi); har layer par sirf log karke rethrow karne ke liye <code>Exception</code> pakadna; aisi custom exception classes jinhe koi pakadta hi nahi; hot loops mein normal control flow ke liye exceptions — throw karna value return karne se bahut dheema hai.</p>`
      },
      code: [{
        caption: {
          en: "throw vs throw ex, wrapping with InnerException, a filter with finally, and a guard clause",
          hi: "throw बनाम throw ex, InnerException के साथ wrapping, finally के साथ filter, और guard clause",
          hg: "throw vs throw ex, InnerException ke saath wrapping, finally ke saath filter, aur guard clause"
        },
        check: "run",
        expected: "throw;    -> stack still shows CheckStock: True\nthrow ex; -> stack still shows CheckStock: False\nOrder ORD-7 failed <- InvalidOperationException: Out of stock\n404 handled here\nfinally (404)\nfinally (500)\n500 reached the outer handler\nArgumentException for parameter 'name'",
        src: `using System.Net;
using System.Runtime.CompilerServices;

// 1. throw; keeps the original stack trace, throw ex; resets it
try { PlaceOrder(rethrowPlain: true); }
catch (Exception ex)
{
    Console.WriteLine($"throw;    -> stack still shows CheckStock: {ex.StackTrace!.Contains("CheckStock")}");
}
try { PlaceOrder(rethrowPlain: false); }
catch (Exception ex)
{
    Console.WriteLine($"throw ex; -> stack still shows CheckStock: {ex.StackTrace!.Contains("CheckStock")}");
}

// 2. Wrap with context; the real cause stays in InnerException
try { Checkout("ORD-7"); }
catch (OrderFailedException ex)
{
    Console.WriteLine($"{ex.Message} <- {ex.InnerException?.GetType().Name}: {ex.InnerException?.Message}");
}

// 3. A filter catches only 404; finally runs either way; 500 goes further up
foreach (int status in new[] { 404, 500 })
{
    try
    {
        try
        {
            CallPartnerApi(status);
        }
        catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
        {
            Console.WriteLine("404 handled here");
        }
        finally
        {
            Console.WriteLine($"finally ({status})");
        }
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"{(int)ex.StatusCode!.Value} reached the outer handler");
    }
}

// 4. Guard clause with a built-in helper
try { var customer = new Customer(""); }
catch (ArgumentException ex)
{
    Console.WriteLine($"{ex.GetType().Name} for parameter '{ex.ParamName}'");
}

static void PlaceOrder(bool rethrowPlain)
{
    try
    {
        CheckStock();
    }
    catch (InvalidOperationException ex)
    {
        if (rethrowPlain) throw;   // GOOD
        throw ex;                  // BAD on purpose: CA2200, the stack restarts here
    }
}

[MethodImpl(MethodImplOptions.NoInlining)]
static void CheckStock() => throw new InvalidOperationException("Out of stock");

static void Checkout(string orderId)
{
    try
    {
        CheckStock();
    }
    catch (InvalidOperationException ex)
    {
        throw new OrderFailedException($"Order {orderId} failed", ex);
    }
}

static void CallPartnerApi(int status) =>
    throw new HttpRequestException($"Partner API returned {status}", null, (HttpStatusCode)status);

public sealed class OrderFailedException : Exception
{
    public OrderFailedException(string message) : base(message) { }
    public OrderFailedException(string message, Exception inner) : base(message, inner) { }
}

public sealed class Customer
{
    public string Name { get; }

    public Customer(string name)
    {
        ArgumentException.ThrowIfNullOrEmpty(name);   // throws ArgumentException, ParamName = "name"
        Name = name;
    }
}`
      }]
    },
    {
      id: "dispose-gc-in-code",
      depth: "detailed",
      title: {
        en: "IDisposable and the GC in code: using order, the Dispose pattern, finalizers, generations, LOH",
        hi: "Code में IDisposable और GC: using का order, Dispose pattern, finalizers, generations, LOH",
        hg: "Code mein IDisposable aur GC: using ka order, Dispose pattern, finalizers, generations, LOH"
      },
      body: {
        en: `<p><b>Analogy — hotel checkout:</b> at checkout <b>you</b> return the key card at the reception — on time, every time (<b>Dispose</b>). Housekeeping cleans the rooms later on its own schedule (<b>GC</b>). If a guest forgets the key card in the room, housekeeping may find it some day and return it (<b>finalizer</b>) — but the hotel cannot run on that hope. And housekeeping cleans the busy rooms daily (Gen 0) but the storeroom only once in a while (Gen 2).</p>
<ul>
<li><b>Simple pattern</b> (most classes): a <code>sealed</code> class that <b>owns</b> disposable fields implements <code>IDisposable</code>, disposes those fields, makes <code>Dispose</code> safe to call twice, and throws <code>ObjectDisposedException</code> if used afterwards (<code>ObjectDisposedException.ThrowIf(_disposed, this)</code>, .NET 7+). No finalizer.</li>
<li><b>Full Dispose pattern</b> (non-sealed base classes): <code>public void Dispose()</code> calls <code>Dispose(true)</code> and <code>GC.SuppressFinalize(this)</code> (analyzer <b>CA1816</b>); <code>protected virtual void Dispose(bool disposing)</code> frees managed fields only when <code>disposing</code> is <code>true</code>. Derived classes override <code>Dispose(bool)</code> and call <code>base.Dispose(disposing)</code>.</li>
<li><b>Finalizers are expensive</b>: an object with a finalizer survives at least one extra GC (it waits in the finalization queue), runs on a separate finalizer thread at an unknown time, and must not touch other managed objects. Write one only if you hold a raw native handle — and even then prefer a <b><code>SafeHandle</code></b>, which already has one.</li>
<li><b>using declarations</b> dispose at the end of the enclosing scope, in <b>reverse order</b> of declaration — the last opened is closed first (file before connection).</li>
<li><b>Generations in code</b>: <code>GC.GetGeneration(obj)</code> shows 0, 1 or 2. A new small object is Gen 0; a new array of 85,000+ bytes goes to the <b>LOH</b>, which is reported as Gen 2.</li>
<li><b>"Memory leaks" in .NET</b> are objects that are <b>still referenced</b>: an ever-growing static cache/dictionary, event handlers never unsubscribed (Day 2), timers, closures holding big objects. Tools: <code>dotnet-counters</code> (live GC numbers), <code>dotnet-gcdump</code> / <code>dotnet-dump</code> (what is on the heap), Visual Studio diagnostic tools.</li>
<li><b>Server vs Workstation GC</b> is set in the project file (<code>&lt;ServerGarbageCollection&gt;true&lt;/ServerGarbageCollection&gt;</code>) or <code>runtimeconfig.json</code>. Background (concurrent) GC is on by default, so most Gen 2 work runs while your threads keep going.</li>
</ul>
<p><b>When to use:</b> the simple sealed pattern for almost every class that owns a disposable; the full pattern only for base classes designed for inheritance; <code>ArrayPool&lt;T&gt;.Shared</code> for big temporary buffers in hot paths (avoids LOH churn). <b>When not:</b> finalizers on ordinary classes; <code>GC.Collect()</code> to "fix" memory (it hides the real leak and pauses the app); disposing objects you did not create (e.g. those injected by DI, or an <code>HttpClient</code> from <code>IHttpClientFactory</code>).</p>`,
        hi: `<p><b>Analogy — hotel checkout:</b> checkout पर <b>आप</b> reception पर key card लौटाते हो — समय पर, हर बार (<b>Dispose</b>)। Housekeeping बाद में अपने schedule से rooms साफ़ करती है (<b>GC</b>)। अगर कोई guest key card room में भूल जाए, तो housekeeping को वो किसी दिन मिल सकता है और वो लौटा देगी (<b>finalizer</b>) — पर hotel इस उम्मीद पर नहीं चल सकता। और housekeeping busy rooms रोज़ साफ़ करती है (Gen 0), पर storeroom कभी-कभार (Gen 2)।</p>
<ul>
<li><b>Simple pattern</b> (ज़्यादातर classes): disposable fields की <b>owner</b> एक <code>sealed</code> class <code>IDisposable</code> implement करती है, उन fields को dispose करती है, <code>Dispose</code> को दो बार call करना safe बनाती है, और उसके बाद use होने पर <code>ObjectDisposedException</code> देती है (<code>ObjectDisposedException.ThrowIf(_disposed, this)</code>, .NET 7+)। कोई finalizer नहीं।</li>
<li><b>Full Dispose pattern</b> (non-sealed base classes): <code>public void Dispose()</code> <code>Dispose(true)</code> और <code>GC.SuppressFinalize(this)</code> call करता है (analyzer <b>CA1816</b>); <code>protected virtual void Dispose(bool disposing)</code> managed fields सिर्फ़ तब free करता है जब <code>disposing</code> <code>true</code> हो। Derived classes <code>Dispose(bool)</code> override करती हैं और <code>base.Dispose(disposing)</code> call करती हैं।</li>
<li><b>Finalizers महँगे हैं</b>: finalizer वाला object कम से कम एक extra GC तक बचा रहता है (finalization queue में इंतज़ार करता है), अलग finalizer thread पर किसी अनजान समय पर चलता है, और उसे दूसरे managed objects को नहीं छूना चाहिए। इसे सिर्फ़ तब लिखो जब आपके पास raw native handle हो — और तब भी <b><code>SafeHandle</code></b> लो, जिसमें पहले से finalizer है।</li>
<li><b>using declarations</b> enclosing scope के end पर dispose होते हैं, declaration के <b>उल्टे order</b> में — जो आख़िर में खुला वो पहले बंद (connection से पहले file)।</li>
<li><b>Code में generations</b>: <code>GC.GetGeneration(obj)</code> 0, 1 या 2 बताता है। नया छोटा object Gen 0 में होता है; 85,000+ bytes का नया array <b>LOH</b> में जाता है, जो Gen 2 बताया जाता है।</li>
<li><b>.NET में "memory leaks"</b> वो objects हैं जो <b>अब भी referenced</b> हैं: लगातार बढ़ती static cache/dictionary, कभी unsubscribe न हुए event handlers (Day 2), timers, बड़े objects पकड़े हुए closures। Tools: <code>dotnet-counters</code> (live GC numbers), <code>dotnet-gcdump</code> / <code>dotnet-dump</code> (heap पर क्या है), Visual Studio diagnostic tools।</li>
<li><b>Server vs Workstation GC</b> project file (<code>&lt;ServerGarbageCollection&gt;true&lt;/ServerGarbageCollection&gt;</code>) या <code>runtimeconfig.json</code> में set होता है। Background (concurrent) GC by default on है, इसलिए Gen 2 का ज़्यादातर काम आपके threads के चलते-चलते होता है।</li>
</ul>
<p><b>कब use करें:</b> disposable की owner लगभग हर class के लिए simple sealed pattern; full pattern सिर्फ़ inheritance के लिए बनी base classes में; hot paths में बड़े temporary buffers के लिए <code>ArrayPool&lt;T&gt;.Shared</code> (LOH की उथल-पुथल से बचाता है)। <b>कब नहीं:</b> आम classes पर finalizers; memory "ठीक करने" के लिए <code>GC.Collect()</code> (यह असली leak छुपाता है और app को रोकता है); ऐसे objects dispose करना जो आपने नहीं बनाए (जैसे DI से inject हुए, या <code>IHttpClientFactory</code> से मिला <code>HttpClient</code>)।</p>`,
        hg: `<p><b>Analogy — hotel checkout:</b> checkout par <b>aap</b> reception par key card lautate ho — samay par, har baar (<b>Dispose</b>). Housekeeping baad mein apne schedule se rooms saaf karti hai (<b>GC</b>). Agar koi guest key card room mein bhool jaaye, to housekeeping ko woh kisi din mil sakta hai aur woh lauta degi (<b>finalizer</b>) — par hotel is ummeed par nahi chal sakta. Aur housekeeping busy rooms roz saaf karti hai (Gen 0), par storeroom kabhi-kabhaar (Gen 2).</p>
<ul>
<li><b>Simple pattern</b> (zyadatar classes): disposable fields ki <b>owner</b> ek <code>sealed</code> class <code>IDisposable</code> implement karti hai, un fields ko dispose karti hai, <code>Dispose</code> ko do baar call karna safe banati hai, aur uske baad use hone par <code>ObjectDisposedException</code> deti hai (<code>ObjectDisposedException.ThrowIf(_disposed, this)</code>, .NET 7+). Koi finalizer nahi.</li>
<li><b>Full Dispose pattern</b> (non-sealed base classes): <code>public void Dispose()</code> <code>Dispose(true)</code> aur <code>GC.SuppressFinalize(this)</code> call karta hai (analyzer <b>CA1816</b>); <code>protected virtual void Dispose(bool disposing)</code> managed fields sirf tab free karta hai jab <code>disposing</code> <code>true</code> ho. Derived classes <code>Dispose(bool)</code> override karti hain aur <code>base.Dispose(disposing)</code> call karti hain.</li>
<li><b>Finalizers mehenge hain</b>: finalizer wala object kam se kam ek extra GC tak bacha rehta hai (finalization queue mein intezaar karta hai), alag finalizer thread par kisi anjaan samay par chalta hai, aur use doosre managed objects ko nahi chhoona chahiye. Ise sirf tab likho jab aapke paas raw native handle ho — aur tab bhi <b><code>SafeHandle</code></b> lo, jismein pehle se finalizer hai.</li>
<li><b>using declarations</b> enclosing scope ke end par dispose hote hain, declaration ke <b>ulte order</b> mein — jo aakhir mein khula woh pehle band (connection se pehle file).</li>
<li><b>Code mein generations</b>: <code>GC.GetGeneration(obj)</code> 0, 1 ya 2 batata hai. Naya chhota object Gen 0 mein hota hai; 85,000+ bytes ka naya array <b>LOH</b> mein jaata hai, jo Gen 2 bataya jaata hai.</li>
<li><b>.NET mein "memory leaks"</b> woh objects hain jo <b>ab bhi referenced</b> hain: lagaataar badhti static cache/dictionary, kabhi unsubscribe na hue event handlers (Day 2), timers, bade objects pakde hue closures. Tools: <code>dotnet-counters</code> (live GC numbers), <code>dotnet-gcdump</code> / <code>dotnet-dump</code> (heap par kya hai), Visual Studio diagnostic tools.</li>
<li><b>Server vs Workstation GC</b> project file (<code>&lt;ServerGarbageCollection&gt;true&lt;/ServerGarbageCollection&gt;</code>) ya <code>runtimeconfig.json</code> mein set hota hai. Background (concurrent) GC by default on hai, isliye Gen 2 ka zyadatar kaam aapke threads ke chalte-chalte hota hai.</li>
</ul>
<p><b>Kab use karein:</b> disposable ki owner lagbhag har class ke liye simple sealed pattern; full pattern sirf inheritance ke liye bani base classes mein; hot paths mein bade temporary buffers ke liye <code>ArrayPool&lt;T&gt;.Shared</code> (LOH ki uthal-puthal se bachata hai). <b>Kab nahi:</b> aam classes par finalizers; memory "theek karne" ke liye <code>GC.Collect()</code> (yeh asli leak chhupata hai aur app ko rokta hai); aise objects dispose karna jo aapne nahi banaye (jaise DI se inject hue, ya <code>IHttpClientFactory</code> se mila <code>HttpClient</code>).</p>`
      },
      code: [{
        caption: {
          en: "using declarations dispose in reverse order; a safe sealed Dispose; the base-class pattern; Gen 0 vs LOH",
          hi: "using declarations उल्टे order में dispose होते हैं; safe sealed Dispose; base-class pattern; Gen 0 बनाम LOH",
          hg: "using declarations ulte order mein dispose hote hain; safe sealed Dispose; base-class pattern; Gen 0 vs LOH"
        },
        check: "run",
        expected: "working...\nDisposed file\nDisposed connection\n---\nAuditLog disposed\nObjectDisposedException: used after Dispose\nsmall array: Gen 0\n85,000-byte array: Gen 2 (LOH)",
        src: `RunReport();
Console.WriteLine("---");

var log = new AuditLog();
log.Write("first entry");
log.Dispose();
log.Dispose();                       // safe: the second call does nothing
try
{
    log.Write("too late");
}
catch (ObjectDisposedException)
{
    Console.WriteLine("ObjectDisposedException: used after Dispose");
}

int smallGen = GC.GetGeneration(new byte[80_000]);
int largeGen = GC.GetGeneration(new byte[85_000]);
Console.WriteLine($"small array: Gen {smallGen}");
Console.WriteLine($"85,000-byte array: Gen {largeGen} (LOH)");

static void RunReport()
{
    using var connection = new Resource("connection");
    using var file = new Resource("file");
    Console.WriteLine("working...");
}                                    // file is disposed first, then connection

sealed class Resource(string name) : IDisposable
{
    public void Dispose() => Console.WriteLine($"Disposed {name}");
}

// Simple pattern: a sealed class that OWNS a disposable field. No finalizer.
sealed class AuditLog : IDisposable
{
    private readonly StringWriter _writer = new();
    private bool _disposed;

    public void Write(string text)
    {
        ObjectDisposedException.ThrowIf(_disposed, this);
        _writer.WriteLine(text);
    }

    public void Dispose()
    {
        if (_disposed) return;
        _writer.Dispose();
        _disposed = true;
        Console.WriteLine("AuditLog disposed");
    }
}

// Full pattern: only for a non-sealed base class meant for inheritance.
public class RepositoryBase : IDisposable
{
    private bool _disposed;

    protected virtual void Dispose(bool disposing)
    {
        if (_disposed) return;
        if (disposing)
        {
            // dispose managed fields here (connections, streams)
        }
        // free unmanaged resources here (rare: prefer SafeHandle)
        _disposed = true;
    }

    public void Dispose()
    {
        Dispose(disposing: true);
        GC.SuppressFinalize(this);       // CA1816: a derived class may add a finalizer
    }
}`
      }]
    },
    {
      id: "records-in-code",
      depth: "detailed",
      title: {
        en: "Records in code: positional records, with, value equality, record struct",
        hi: "Code में Records: positional records, with, value equality, record struct",
        hg: "Code mein Records: positional records, with, value equality, record struct"
      },
      body: {
        en: `<p><b>Analogy — updating your address on an ID card:</b> when you move from Pune to Mumbai, the office does not scratch out the old address on your card. It prints a <b>new card</b> with the new address and everything else copied. The old card still says Pune. That is <code>with</code>: a <b>non-destructive copy</b>. And two cards with exactly the same details are "the same details" — that is <b>value equality</b>.</p>
<ul>
<li><b>Positional record</b>: <code>public record Address(string City, string Pin);</code> gives you a constructor, <b>init-only</b> properties, <code>Deconstruct</code>, <code>Equals</code>/<code>GetHashCode</code>/<code>==</code>/<code>!=</code> based on values, and <code>ToString()</code> like <code>Address { City = Pune, Pin = 411001 }</code>.</li>
<li><b><code>with</code></b> creates a copy with some properties changed. It is a <b>shallow</b> copy: a <code>List</code> inside is shared by both records. <code>with</code> also works on structs and anonymous types; on a normal class it is an error (<b>CS8858</b>).</li>
<li><b>Equality is shallow and type-aware</b>: properties are compared with their own <code>Equals</code>, so a <code>List</code> property compares <b>references</b>. The runtime type is part of equality — a <code>Person</code> and an <code>Employee</code> with the same <code>Name</code> are <b>not</b> equal.</li>
<li><b><code>record struct</code></b> (C# 10) is a value type with the same generated members. Careful: positional <code>record struct</code> properties are <b>mutable</b> (<code>get; set;</code>); write <b><code>readonly record struct</code></b> for an immutable one.</li>
<li><b>Inheritance</b>: a record can inherit only from another record (or <code>object</code>) — inheriting from a class is error <b>CS8864</b>.</li>
<li><b>Not the same as a primary constructor</b>: <code>class Customer(string name)</code> (C# 12) just gives constructor parameters to a class — no value equality, no <code>with</code>, no generated properties.</li>
<li>You can write a record with normal properties too: <code>public record Product { public required string Name { get; init; } }</code>.</li>
</ul>
<p><b>When to use:</b> DTOs and API request/response models, messages and events, <b>value objects</b> (Money, Address, DateRange), configuration snapshots, keys for dictionaries. <b>When not:</b> <b>EF Core entities</b> — they have an identity (Id), are changed and tracked over time, and value-based <code>GetHashCode</code> that changes when properties change confuses change tracking and hash sets; services with behaviour and dependencies; records holding mutable collections (prefer <code>IReadOnlyList&lt;T&gt;</code> or immutable collections, and remember equality will not compare the items).</p>`,
        hi: `<p><b>Analogy — ID card पर address बदलवाना:</b> जब आप Pune से Mumbai shift होते हो, तो office आपके card पर पुराना address काटकर नहीं लिखता। वो नए address के साथ एक <b>नया card</b> छापता है, बाकी सब copy करके। पुराना card अब भी Pune ही बताता है। यही है <code>with</code>: एक <b>non-destructive copy</b>। और बिल्कुल एक जैसी details वाले दो cards "एक जैसी details" हैं — यही <b>value equality</b> है।</p>
<ul>
<li><b>Positional record</b>: <code>public record Address(string City, string Pin);</code> से आपको constructor, <b>init-only</b> properties, <code>Deconstruct</code>, values पर based <code>Equals</code>/<code>GetHashCode</code>/<code>==</code>/<code>!=</code>, और <code>Address { City = Pune, Pin = 411001 }</code> जैसा <code>ToString()</code> मिलता है।</li>
<li><b><code>with</code></b> कुछ properties बदलकर एक copy बनाता है। यह <b>shallow</b> copy है: अंदर की <code>List</code> दोनों records में share होती है। <code>with</code> structs और anonymous types पर भी चलता है; normal class पर यह error है (<b>CS8858</b>)।</li>
<li><b>Equality shallow है और type देखती है</b>: properties अपने-अपने <code>Equals</code> से compare होती हैं, इसलिए <code>List</code> property <b>references</b> compare करती है। Runtime type भी equality का हिस्सा है — एक ही <code>Name</code> वाले <code>Person</code> और <code>Employee</code> equal <b>नहीं</b> हैं।</li>
<li><b><code>record struct</code></b> (C# 10) वही generated members वाला value type है। ध्यान दो: positional <code>record struct</code> की properties <b>mutable</b> होती हैं (<code>get; set;</code>); immutable चाहिए तो <b><code>readonly record struct</code></b> लिखो।</li>
<li><b>Inheritance</b>: record सिर्फ़ दूसरे record (या <code>object</code>) से inherit कर सकता है — class से inherit करना error <b>CS8864</b> है।</li>
<li><b>Primary constructor जैसा नहीं</b>: <code>class Customer(string name)</code> (C# 12) बस class को constructor parameters देता है — न value equality, न <code>with</code>, न generated properties।</li>
<li>Record को normal properties के साथ भी लिख सकते हो: <code>public record Product { public required string Name { get; init; } }</code>।</li>
</ul>
<p><b>कब use करें:</b> DTOs और API request/response models, messages और events, <b>value objects</b> (Money, Address, DateRange), configuration snapshots, dictionaries की keys। <b>कब नहीं:</b> <b>EF Core entities</b> — उनकी एक पहचान (Id) होती है, समय के साथ बदलती और track होती हैं, और properties बदलने पर बदलने वाला value-based <code>GetHashCode</code> change tracking और hash sets को उलझा देता है; behaviour और dependencies वाली services; mutable collections रखने वाले records (<code>IReadOnlyList&lt;T&gt;</code> या immutable collections लो, और याद रखो कि equality items compare नहीं करेगी)।</p>`,
        hg: `<p><b>Analogy — ID card par address badalwana:</b> jab aap Pune se Mumbai shift hote ho, to office aapke card par purana address kaatkar nahi likhta. Woh naye address ke saath ek <b>naya card</b> chhaapta hai, baaki sab copy karke. Purana card ab bhi Pune hi batata hai. Yahi hai <code>with</code>: ek <b>non-destructive copy</b>. Aur bilkul ek jaisi details wale do cards "ek jaisi details" hain — yahi <b>value equality</b> hai.</p>
<ul>
<li><b>Positional record</b>: <code>public record Address(string City, string Pin);</code> se aapko constructor, <b>init-only</b> properties, <code>Deconstruct</code>, values par based <code>Equals</code>/<code>GetHashCode</code>/<code>==</code>/<code>!=</code>, aur <code>Address { City = Pune, Pin = 411001 }</code> jaisa <code>ToString()</code> milta hai.</li>
<li><b><code>with</code></b> kuch properties badalkar ek copy banata hai. Yeh <b>shallow</b> copy hai: andar ki <code>List</code> dono records mein share hoti hai. <code>with</code> structs aur anonymous types par bhi chalta hai; normal class par yeh error hai (<b>CS8858</b>).</li>
<li><b>Equality shallow hai aur type dekhti hai</b>: properties apne-apne <code>Equals</code> se compare hoti hain, isliye <code>List</code> property <b>references</b> compare karti hai. Runtime type bhi equality ka hissa hai — ek hi <code>Name</code> wale <code>Person</code> aur <code>Employee</code> equal <b>nahi</b> hain.</li>
<li><b><code>record struct</code></b> (C# 10) wahi generated members wala value type hai. Dhyaan do: positional <code>record struct</code> ki properties <b>mutable</b> hoti hain (<code>get; set;</code>); immutable chahiye to <b><code>readonly record struct</code></b> likho.</li>
<li><b>Inheritance</b>: record sirf doosre record (ya <code>object</code>) se inherit kar sakta hai — class se inherit karna error <b>CS8864</b> hai.</li>
<li><b>Primary constructor jaisa nahi</b>: <code>class Customer(string name)</code> (C# 12) bas class ko constructor parameters deta hai — na value equality, na <code>with</code>, na generated properties.</li>
<li>Record ko normal properties ke saath bhi likh sakte ho: <code>public record Product { public required string Name { get; init; } }</code>.</li>
</ul>
<p><b>Kab use karein:</b> DTOs aur API request/response models, messages aur events, <b>value objects</b> (Money, Address, DateRange), configuration snapshots, dictionaries ki keys. <b>Kab nahi:</b> <b>EF Core entities</b> — unki ek pehchaan (Id) hoti hai, samay ke saath badalti aur track hoti hain, aur properties badalne par badalne wala value-based <code>GetHashCode</code> change tracking aur hash sets ko uljha deta hai; behaviour aur dependencies wali services; mutable collections rakhne wale records (<code>IReadOnlyList&lt;T&gt;</code> ya immutable collections lo, aur yaad rakho ki equality items compare nahi karegi).</p>`
      },
      code: [{
        caption: {
          en: "Value equality, with, deconstruction, shallow equality with a List, record struct, and type-aware equality",
          hi: "Value equality, with, deconstruction, List के साथ shallow equality, record struct, और type देखने वाली equality",
          hg: "Value equality, with, deconstruction, List ke saath shallow equality, record struct, aur type dekhne wali equality"
        },
        check: "run",
        expected: "Address { City = Pune, Pin = 411001 }\nEqual values: True, same object: False\nPune -> Mumbai\nMumbai 400001\na has 2 items; a == b: True\na == c (same items, different List): False\nPoint { X = 1, Y = 2 } Point { X = 5, Y = 2 } True\nPerson == Employee with the same Name: False",
        src: `var home = new Address("Pune", "411001");
var same = new Address("Pune", "411001");
Console.WriteLine(home);
Console.WriteLine($"Equal values: {home == same}, same object: {ReferenceEquals(home, same)}");

var moved = home with { City = "Mumbai", Pin = "400001" };   // new record, home unchanged
Console.WriteLine($"{home.City} -> {moved.City}");

var (city, pin) = moved;                                     // positional records deconstruct
Console.WriteLine($"{city} {pin}");

// Equality is shallow: the List property is compared by reference
var a = new Cart("C1", new List<string> { "Atta" });
var b = a with { };                                          // shallow copy: same List object
b.Items.Add("Dal");
Console.WriteLine($"a has {a.Items.Count} items; a == b: {a == b}");
var c = new Cart("C1", new List<string> { "Atta", "Dal" });
Console.WriteLine($"a == c (same items, different List): {a == c}");

// readonly record struct: a value type with value equality
var p1 = new Point(1, 2);
var p2 = p1 with { X = 5 };
Console.WriteLine($"{p1} {p2} {p1 == new Point(1, 2)}");

// The runtime type is part of equality
Person person = new("Asha");
Person employee = new Employee("Asha", 101);
Console.WriteLine($"Person == Employee with the same Name: {person == employee}");

public record Address(string City, string Pin);
public record Cart(string Id, List<string> Items);           // mutable List only to show the trap
public readonly record struct Point(int X, int Y);
public record Person(string Name);
public record Employee(string Name, int Id) : Person(Name);`
      }]
    },
    {
      id: "pattern-matching-in-code",
      depth: "detailed",
      title: {
        en: "Pattern matching in code: switch expressions, property, relational, logical and list patterns",
        hi: "Code में Pattern matching: switch expressions, property, relational, logical और list patterns",
        hg: "Code mein Pattern matching: switch expressions, property, relational, logical aur list patterns"
      },
      body: {
        en: `<p><b>Analogy — the courier counter:</b> the courier clerk decides the charge by looking at the item: "fragile → special packing; heavier than 5 kg → heavy rate; light parcel within the city → local rate; a document → envelope". He checks the rules <b>top to bottom</b> and stops at the <b>first match</b>. A <b>switch expression</b> works exactly like that.</p>
<ul>
<li><b>Type pattern + declaration</b>: <code>if (item is Parcel p)</code> — checks the type and gives you a typed variable in one step (no cast).</li>
<li><b>Property pattern</b>: <code>Parcel { Fragile: true }</code>; <b>extended</b> (C# 10): <code>Order { Customer.City: "Pune" }</code>.</li>
<li><b>Relational and logical patterns</b> (C# 9): <code>&gt; 5</code>, <code>&lt;= 1</code>, <code>&gt;= 60 and &lt; 75</code>, <code>"Mumbai" or "Pune"</code>, <code>not null</code>.</li>
<li><b>List patterns</b> (C# 11): <code>[]</code> (empty), <code>[var only]</code>, <code>[var first, .., var last]</code> — <code>..</code> matches any number of items.</li>
<li><b>Switch expression</b> (C# 8): <code>value switch { pattern =&gt; result, ..., _ =&gt; fallback }</code>. Arms are checked in order; the <b>first match wins</b>. An arm that can never be reached is a compile error (<b>CS8510</b>). Missing cases give a warning (<b>CS8509</b>) and, at runtime, a <code>SwitchExpressionException</code> if nothing matches.</li>
<li><b><code>is null</code> / <code>is not null</code></b> always check for real null — they cannot be changed by an overloaded <code>==</code> operator.</li>
<li><b>Positional patterns</b> use <code>Deconstruct</code> (records have it): <code>point is (0, 0)</code>.</li>
</ul>
<p><b>When to use:</b> replacing long <code>if/else if</code> chains of type checks and casts; mapping a value to a result (status → HTTP code, marks → grade, exception type → ProblemDetails); validating the shape of input. <b>When not:</b> when the behaviour belongs to the type itself — if every new type means editing a big <code>switch</code> in many places, a <b>virtual method / polymorphism</b> (Day 1) is cleaner; very deep nested patterns that nobody in the team can read in a review.</p>`,
        hi: `<p><b>Analogy — courier counter:</b> courier clerk item देखकर charge तय करता है: "fragile → special packing; 5 kg से भारी → heavy rate; शहर के अंदर हल्का parcel → local rate; document → envelope"। वो rules <b>ऊपर से नीचे</b> check करता है और <b>पहले match</b> पर रुक जाता है। <b>Switch expression</b> बिल्कुल ऐसे ही काम करता है।</p>
<ul>
<li><b>Type pattern + declaration</b>: <code>if (item is Parcel p)</code> — एक ही step में type check करता है और typed variable दे देता है (कोई cast नहीं)।</li>
<li><b>Property pattern</b>: <code>Parcel { Fragile: true }</code>; <b>extended</b> (C# 10): <code>Order { Customer.City: "Pune" }</code>।</li>
<li><b>Relational और logical patterns</b> (C# 9): <code>&gt; 5</code>, <code>&lt;= 1</code>, <code>&gt;= 60 and &lt; 75</code>, <code>"Mumbai" or "Pune"</code>, <code>not null</code>।</li>
<li><b>List patterns</b> (C# 11): <code>[]</code> (ख़ाली), <code>[var only]</code>, <code>[var first, .., var last]</code> — <code>..</code> कितने भी items से match करता है।</li>
<li><b>Switch expression</b> (C# 8): <code>value switch { pattern =&gt; result, ..., _ =&gt; fallback }</code>। Arms order में check होते हैं; <b>पहला match जीतता है</b>। जो arm कभी reach नहीं हो सकता वो compile error है (<b>CS8510</b>)। Cases छूट जाएँ तो warning (<b>CS8509</b>) आती है, और runtime पर कुछ match न हो तो <code>SwitchExpressionException</code>।</li>
<li><b><code>is null</code> / <code>is not null</code></b> हमेशा असली null check करते हैं — overload किया हुआ <code>==</code> operator इन्हें नहीं बदल सकता।</li>
<li><b>Positional patterns</b> <code>Deconstruct</code> use करते हैं (records में होता है): <code>point is (0, 0)</code>।</li>
</ul>
<p><b>कब use करें:</b> type checks और casts वाली लंबी <code>if/else if</code> chains की जगह; किसी value को result में बदलना (status → HTTP code, marks → grade, exception type → ProblemDetails); input का shape validate करना। <b>कब नहीं:</b> जब behaviour type का ख़ुद का है — अगर हर नए type पर कई जगह बड़ा <code>switch</code> edit करना पड़े, तो <b>virtual method / polymorphism</b> (Day 1) ज़्यादा साफ़ है; बहुत गहरे nested patterns जिन्हें team में कोई review में पढ़ न सके।</p>`,
        hg: `<p><b>Analogy — courier counter:</b> courier clerk item dekhkar charge tay karta hai: "fragile → special packing; 5 kg se bhaari → heavy rate; shehar ke andar halka parcel → local rate; document → envelope". Woh rules <b>upar se neeche</b> check karta hai aur <b>pehle match</b> par ruk jaata hai. <b>Switch expression</b> bilkul aise hi kaam karta hai.</p>
<ul>
<li><b>Type pattern + declaration</b>: <code>if (item is Parcel p)</code> — ek hi step mein type check karta hai aur typed variable de deta hai (koi cast nahi).</li>
<li><b>Property pattern</b>: <code>Parcel { Fragile: true }</code>; <b>extended</b> (C# 10): <code>Order { Customer.City: "Pune" }</code>.</li>
<li><b>Relational aur logical patterns</b> (C# 9): <code>&gt; 5</code>, <code>&lt;= 1</code>, <code>&gt;= 60 and &lt; 75</code>, <code>"Mumbai" or "Pune"</code>, <code>not null</code>.</li>
<li><b>List patterns</b> (C# 11): <code>[]</code> (khaali), <code>[var only]</code>, <code>[var first, .., var last]</code> — <code>..</code> kitne bhi items se match karta hai.</li>
<li><b>Switch expression</b> (C# 8): <code>value switch { pattern =&gt; result, ..., _ =&gt; fallback }</code>. Arms order mein check hote hain; <b>pehla match jeetta hai</b>. Jo arm kabhi reach nahi ho sakta woh compile error hai (<b>CS8510</b>). Cases chhoot jaayein to warning (<b>CS8509</b>) aati hai, aur runtime par kuch match na ho to <code>SwitchExpressionException</code>.</li>
<li><b><code>is null</code> / <code>is not null</code></b> hamesha asli null check karte hain — overload kiya hua <code>==</code> operator inhe nahi badal sakta.</li>
<li><b>Positional patterns</b> <code>Deconstruct</code> use karte hain (records mein hota hai): <code>point is (0, 0)</code>.</li>
</ul>
<p><b>Kab use karein:</b> type checks aur casts wali lambi <code>if/else if</code> chains ki jagah; kisi value ko result mein badalna (status → HTTP code, marks → grade, exception type → ProblemDetails); input ka shape validate karna. <b>Kab nahi:</b> jab behaviour type ka khud ka hai — agar har naye type par kai jagah bada <code>switch</code> edit karna pade, to <b>virtual method / polymorphism</b> (Day 1) zyada saaf hai; bahut gehre nested patterns jinhe team mein koi review mein padh na sake.</p>`
      },
      code: [{
        caption: {
          en: "Courier charges with a switch expression; relational patterns for grades; list patterns",
          hi: "Switch expression से courier charges; grades के लिए relational patterns; list patterns",
          hg: "Switch expression se courier charges; grades ke liye relational patterns; list patterns"
        },
        check: "run",
        expected: "local light: Rs 40\nheavy: Rs 120\nfragile: Rs 150\nenvelope: Rs 30\nunknown item: Int32\nnothing to send\ndistinction, first class, pass, fail, invalid\nempty | one item: 7 | first 1, last 9, count 4",
        src: `object?[] items =
[
    new Parcel("Mumbai", 0.4m, Fragile: false),
    new Parcel("Pune", 7m, Fragile: false),
    new Parcel("Delhi", 2m, Fragile: true),
    new Document("Pune", Pages: 3),
    42,
    null
];
foreach (object? item in items)
    Console.WriteLine(Charge(item));

int[] marks = [82, 64, 35, 20, 120];
Console.WriteLine(string.Join(", ", marks.Select(Grade)));

Console.WriteLine($"{Describe([])} | {Describe([7])} | {Describe([1, 4, 6, 9])}");

// Arms are checked top to bottom; the first match wins.
static string Charge(object? item) => item switch
{
    null => "nothing to send",
    Parcel { Fragile: true } => "fragile: Rs 150",
    Parcel { WeightKg: > 5 } => "heavy: Rs 120",
    Parcel { City: "Mumbai" or "Pune", WeightKg: <= 1 } => "local light: Rs 40",
    Parcel p => $"standard to {p.City}: Rs 80",
    Document { Pages: < 10 } => "envelope: Rs 30",
    Document => "big envelope: Rs 50",
    _ => $"unknown item: {item.GetType().Name}"
};

static string Grade(int marks) => marks switch
{
    < 0 or > 100 => "invalid",
    >= 75 => "distinction",
    >= 60 => "first class",
    >= 35 => "pass",
    _ => "fail"
};

static string Describe(int[] codes) => codes switch
{
    [] => "empty",
    [var only] => $"one item: {only}",
    [var first, .., var last] => $"first {first}, last {last}, count {codes.Length}"
};

public record Parcel(string City, decimal WeightKg, bool Fragile);
public record Document(string City, int Pages);`
      }]
    },
    {
      id: "nullable-in-code",
      depth: "detailed",
      title: {
        en: "Nullable reference types in code: string vs string?, the warnings, and the tools to fix them",
        hi: "Code में Nullable reference types: string बनाम string?, warnings, और उन्हें ठीक करने के tools",
        hg: "Code mein Nullable reference types: string vs string?, warnings, aur unhe theek karne ke tools"
      },
      body: {
        en: `<p><b>Analogy — the bank form check:</b> a bank form marks <b>Name *</b> as mandatory and <b>Email</b> as optional. The clerk who checks the form says "you planned to send the statement by email, but email is optional — what if it is blank?". That checking happens <b>at the counter</b> (compile time). Once the form goes inside, nobody re-checks it (runtime). NRT is that counter check: very helpful, but <b>only a check on paper</b>.</p>
<ul>
<li><b>Turn it on</b>: <code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code> in the project (default in new templates since .NET 6), or <code>#nullable enable</code> at the top of a file — handy for migrating an old codebase <b>file by file</b>.</li>
<li><b>Meaning</b>: <code>string</code> = "never null by design"; <code>string?</code> = "may be null, check before use". At runtime both are the same <code>string</code> type — unlike <code>int?</code>, which is a real <code>Nullable&lt;int&gt;</code> struct with <code>HasValue</code>/<code>Value</code>.</li>
<li><b>The warnings you will see</b>: <b>CS8600</b> (null or maybe-null into a non-nullable variable), <b>CS8602</b> (dereference of a possibly null reference), <b>CS8603</b> (possible null return), <b>CS8618</b> (non-nullable property not set when the constructor ends), <b>CS8625</b> (null literal passed where null is not allowed).</li>
<li><b>Flow analysis</b>: after <code>if (customer is null) return;</code> or <code>ArgumentNullException.ThrowIfNull(customer);</code> the compiler knows <code>customer</code> is not null.</li>
<li><b>Tools</b>: <code>?.</code>, <code>??</code>, <code>??=</code>, <code>is not null</code>; <b><code>required</code></b> (C# 11) to fix CS8618 properly; attributes like <code>[NotNullWhen(true)]</code> for <code>TryGet</code> methods and <code>[MemberNotNull]</code> for init helpers.</li>
<li><b>The <code>!</code> (null-forgiving) operator</b> only silences the warning — there is <b>no runtime check</b>. Use it rarely, where you know more than the compiler (e.g. a value set by a framework), never as a reflex.</li>
<li><b>Public APIs still need guard clauses</b>: callers may have NRT off, or may pass <code>null!</code>.</li>
</ul>
<p><b>When to use:</b> NRT on for every new project; for a team, make nullable warnings errors (<code>&lt;WarningsAsErrors&gt;nullable&lt;/WarningsAsErrors&gt;</code>) so they do not pile up; migrate legacy code file by file with <code>#nullable enable</code>. <b>When not:</b> do not "fix" warnings by adding <code>?</code> everywhere (then every caller must check) or <code>!</code> everywhere (then the feature protects nothing) — decide for each member whether null is a valid value.</p>`,
        hi: `<p><b>Analogy — bank form की जाँच:</b> bank form पर <b>Name *</b> ज़रूरी है और <b>Email</b> optional। Form check करने वाला clerk कहता है "आप statement email से भेजने वाले थे, पर email तो optional है — अगर ख़ाली हुआ तो?"। यह जाँच <b>counter पर</b> होती है (compile time)। Form अंदर जाने के बाद कोई दोबारा check नहीं करता (runtime)। NRT वही counter वाली जाँच है: बहुत काम की, पर <b>सिर्फ़ कागज़ पर की जाँच</b>।</p>
<ul>
<li><b>On करो</b>: project में <code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code> (.NET 6 से नए templates में default), या file के ऊपर <code>#nullable enable</code> — पुराने codebase को <b>file by file</b> migrate करने के लिए बढ़िया।</li>
<li><b>मतलब</b>: <code>string</code> = "design से कभी null नहीं"; <code>string?</code> = "null हो सकता है, use से पहले check करो"। Runtime पर दोनों एक ही <code>string</code> type हैं — <code>int?</code> से अलग, जो <code>HasValue</code>/<code>Value</code> वाला असली <code>Nullable&lt;int&gt;</code> struct है।</li>
<li><b>जो warnings दिखेंगी</b>: <b>CS8600</b> (null या maybe-null को non-nullable variable में डालना), <b>CS8602</b> (possibly null reference को dereference करना), <b>CS8603</b> (possible null return), <b>CS8618</b> (constructor ख़त्म होने तक non-nullable property set नहीं हुई), <b>CS8625</b> (जहाँ null allowed नहीं वहाँ null literal देना)।</li>
<li><b>Flow analysis</b>: <code>if (customer is null) return;</code> या <code>ArgumentNullException.ThrowIfNull(customer);</code> के बाद compiler जानता है कि <code>customer</code> null नहीं है।</li>
<li><b>Tools</b>: <code>?.</code>, <code>??</code>, <code>??=</code>, <code>is not null</code>; CS8618 को सही तरीके से ठीक करने के लिए <b><code>required</code></b> (C# 11); <code>TryGet</code> methods के लिए <code>[NotNullWhen(true)]</code> और init helpers के लिए <code>[MemberNotNull]</code> जैसे attributes।</li>
<li><b><code>!</code> (null-forgiving) operator</b> सिर्फ़ warning चुप कराता है — <b>runtime पर कोई check नहीं</b>। इसे कम use करो, वहाँ जहाँ आप compiler से ज़्यादा जानते हो (जैसे framework से set होने वाली value), आदत की तरह कभी नहीं।</li>
<li><b>Public APIs में guard clauses फिर भी चाहिए</b>: callers के यहाँ NRT off हो सकता है, या वो <code>null!</code> pass कर सकते हैं।</li>
</ul>
<p><b>कब use करें:</b> हर नए project में NRT on; team के लिए nullable warnings को errors बनाओ (<code>&lt;WarningsAsErrors&gt;nullable&lt;/WarningsAsErrors&gt;</code>) ताकि ढेर न लगे; legacy code को <code>#nullable enable</code> से file by file migrate करो। <b>कब नहीं:</b> warnings "ठीक" करने के लिए हर जगह <code>?</code> मत लगाओ (फिर हर caller को check करना पड़ेगा) या हर जगह <code>!</code> (फिर feature कुछ नहीं बचाता) — हर member के लिए तय करो कि null एक valid value है या नहीं।</p>`,
        hg: `<p><b>Analogy — bank form ki jaanch:</b> bank form par <b>Name *</b> zaroori hai aur <b>Email</b> optional. Form check karne wala clerk kehta hai "aap statement email se bhejne wale the, par email to optional hai — agar khaali hua to?". Yeh jaanch <b>counter par</b> hoti hai (compile time). Form andar jaane ke baad koi dobara check nahi karta (runtime). NRT wahi counter wali jaanch hai: bahut kaam ki, par <b>sirf kaagaz par ki jaanch</b>.</p>
<ul>
<li><b>On karo</b>: project mein <code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code> (.NET 6 se naye templates mein default), ya file ke upar <code>#nullable enable</code> — purane codebase ko <b>file by file</b> migrate karne ke liye badhiya.</li>
<li><b>Matlab</b>: <code>string</code> = "design se kabhi null nahi"; <code>string?</code> = "null ho sakta hai, use se pehle check karo". Runtime par dono ek hi <code>string</code> type hain — <code>int?</code> se alag, jo <code>HasValue</code>/<code>Value</code> wala asli <code>Nullable&lt;int&gt;</code> struct hai.</li>
<li><b>Jo warnings dikhengi</b>: <b>CS8600</b> (null ya maybe-null ko non-nullable variable mein daalna), <b>CS8602</b> (possibly null reference ko dereference karna), <b>CS8603</b> (possible null return), <b>CS8618</b> (constructor khatam hone tak non-nullable property set nahi hui), <b>CS8625</b> (jahan null allowed nahi wahan null literal dena).</li>
<li><b>Flow analysis</b>: <code>if (customer is null) return;</code> ya <code>ArgumentNullException.ThrowIfNull(customer);</code> ke baad compiler jaanta hai ki <code>customer</code> null nahi hai.</li>
<li><b>Tools</b>: <code>?.</code>, <code>??</code>, <code>??=</code>, <code>is not null</code>; CS8618 ko sahi tareeke se theek karne ke liye <b><code>required</code></b> (C# 11); <code>TryGet</code> methods ke liye <code>[NotNullWhen(true)]</code> aur init helpers ke liye <code>[MemberNotNull]</code> jaise attributes.</li>
<li><b><code>!</code> (null-forgiving) operator</b> sirf warning chup karata hai — <b>runtime par koi check nahi</b>. Ise kam use karo, wahan jahan aap compiler se zyada jaante ho (jaise framework se set hone wali value), aadat ki tarah kabhi nahi.</li>
<li><b>Public APIs mein guard clauses phir bhi chahiye</b>: callers ke yahan NRT off ho sakta hai, ya woh <code>null!</code> pass kar sakte hain.</li>
</ul>
<p><b>Kab use karein:</b> har naye project mein NRT on; team ke liye nullable warnings ko errors banao (<code>&lt;WarningsAsErrors&gt;nullable&lt;/WarningsAsErrors&gt;</code>) taaki dher na lage; legacy code ko <code>#nullable enable</code> se file by file migrate karo. <b>Kab nahi:</b> warnings "theek" karne ke liye har jagah <code>?</code> mat lagao (phir har caller ko check karna padega) ya har jagah <code>!</code> (phir feature kuch nahi bachata) — har member ke liye tay karo ki null ek valid value hai ya nahi.</p>`
      },
      code: [{
        caption: {
          en: "Warning-free nullable code: required, string?, TryGet with [NotNullWhen], ?. ?? ??=, flow analysis — and why ! is only a promise",
          hi: "बिना warnings का nullable code: required, string?, [NotNullWhen] वाला TryGet, ?. ?? ??=, flow analysis — और ! सिर्फ़ एक वादा क्यों है",
          hg: "Bina warnings ka nullable code: required, string?, [NotNullWhen] wala TryGet, ?. ?? ??=, flow analysis — aur ! sirf ek waada kyun hai"
        },
        check: "run",
        expected: "Found Asha\n(no customer)\nguest\nRavi <ravi@example.com>\nName length: 4\nnull hidden by '!' is still null: True\nstock.HasValue = False, stock ?? 0 = 0",
        src: `using System.Diagnostics.CodeAnalysis;

var repo = new CustomerRepository();

if (repo.TryFind(1, out Customer? found))
    Console.WriteLine($"Found {found.Name}");             // no warning, thanks to [NotNullWhen(true)]

Customer? missing = repo.Find(99);
Console.WriteLine(missing?.Name ?? "(no customer)");      // ?. and ??

string display = missing is not null ? missing.Name : "guest";
Console.WriteLine(display);

var ravi = new Customer { Name = "Ravi" };                 // 'required': the compiler forces Name
ravi.Email ??= "ravi@example.com";                         // assign only if it is null
Console.WriteLine($"{ravi.Name} <{ravi.Email}>");

Console.WriteLine($"Name length: {NameLength(ravi)}");

// NRT is compile-time only: '!' silences the compiler, nothing checks at runtime
string hidden = null!;
Console.WriteLine($"null hidden by '!' is still null: {hidden is null}");

int? stock = null;                                         // Nullable<int>: a real runtime struct
Console.WriteLine($"stock.HasValue = {stock.HasValue}, stock ?? 0 = {stock ?? 0}");

static int NameLength(Customer? customer)
{
    ArgumentNullException.ThrowIfNull(customer);           // after this, customer is known non-null
    return customer.Name.Length;
}

public class Customer
{
    public required string Name { get; init; }             // must be set: no CS8618
    public string? Email { get; set; }                     // may be null by design
}

public class CustomerRepository
{
    private readonly Dictionary<int, Customer> _byId = new()
    {
        [1] = new Customer { Name = "Asha" }
    };

    public Customer? Find(int id) => _byId.GetValueOrDefault(id);

    public bool TryFind(int id, [NotNullWhen(true)] out Customer? customer)
        => _byId.TryGetValue(id, out customer);
}`
      }]
    },
    {
      id: "span-in-code",
      depth: "detailed",
      title: {
        en: "Span basics in code: slicing without copies, parsing, stackalloc, and Memory",
        hi: "Code में Span की basics: बिना copy के slicing, parsing, stackalloc, और Memory",
        hg: "Code mein Span ki basics: bina copy ke slicing, parsing, stackalloc, aur Memory"
      },
      body: {
        en: `<p><b>Analogy — the tailor's chalk marks:</b> a tailor does not cut a new piece of cloth just to look at the sleeve part. He puts <b>chalk marks</b> on the same roll — "work between here and here". If he stitches inside the marks, the <b>original cloth</b> changes. A <code>Span&lt;T&gt;</code> is those chalk marks: a <b>view over existing memory</b>, with no copy.</p>
<ul>
<li><b><code>Span&lt;T&gt;</code></b> (read/write) and <b><code>ReadOnlySpan&lt;T&gt;</code></b> point to a contiguous block: an array or part of it, a string (<code>"text".AsSpan()</code> gives <code>ReadOnlySpan&lt;char&gt;</code>), <code>stackalloc</code> memory, or native memory.</li>
<li><b>Slicing</b> — <code>span.Slice(1, 3)</code> or <code>span[1..4]</code> — gives another view: <b>no copy, no heap allocation</b>. Writing through a span changes the original array.</li>
<li><b>Parsing without allocations</b>: many APIs accept spans — <code>int.Parse(ReadOnlySpan&lt;char&gt;)</code>, <code>IndexOf</code>, <code>Trim</code>, <code>StartsWith</code>, <code>TryFormat</code>. Instead of <code>Substring</code> (a new string each time), slice the span and parse directly. Call <code>ToString()</code> only when you really need a string.</li>
<li><b><code>stackalloc</code></b>: <code>Span&lt;char&gt; buffer = stackalloc char[16];</code> — a small temporary buffer on the stack, no GC, no <code>unsafe</code> needed. Keep it <b>small</b> (the stack is limited); for big or variable sizes, rent from <code>ArrayPool&lt;T&gt;.Shared</code>.</li>
<li><b>Why the limits:</b> <code>Span&lt;T&gt;</code> is a <b><code>ref struct</code></b> — it can point into the stack, so it must never outlive it. It cannot be a field of a class (<b>CS8345</b>), cannot be boxed to <code>object</code> (<b>CS0029</b>), cannot be captured by a lambda (<b>CS8175</b>), cannot be kept across an <code>await</code> (<b>CS4007</b>), and cannot be a normal generic argument like <code>List&lt;Span&lt;int&gt;&gt;</code> (<b>CS9244</b>).</li>
<li><b><code>Memory&lt;T&gt;</code> / <code>ReadOnlyMemory&lt;T&gt;</code></b>: the heap-friendly partner. It can live in fields and cross <code>await</code>; call <code>.Span</code> inside a synchronous piece of code to work on it.</li>
<li>Most of the benefit comes <b>for free</b>: Kestrel, <code>System.Text.Json</code> and many string APIs use spans internally, so your app gets faster when you upgrade .NET.</li>
</ul>
<p><b>When to use:</b> hot paths that parse or format a lot of text/bytes (log parsing, protocol handling, CSV import, custom serializers) — after a profiler or benchmark (BenchmarkDotNet) shows the allocations matter. <b>When not:</b> ordinary business code, where <code>Substring</code> and LINQ are clearer and the gain is too small to notice; anything that must be stored or used across <code>await</code> (use <code>Memory&lt;T&gt;</code> or a normal array).</p>`,
        hi: `<p><b>Analogy — दर्ज़ी के chalk निशान:</b> दर्ज़ी सिर्फ़ आस्तीन वाला हिस्सा देखने के लिए कपड़े का नया टुकड़ा नहीं काटता। वो उसी थान पर <b>chalk से निशान</b> लगाता है — "यहाँ से यहाँ तक काम करना है"। अगर वो निशानों के अंदर सिलाई करे, तो <b>original कपड़ा</b> बदल जाता है। <code>Span&lt;T&gt;</code> वही chalk के निशान है: <b>पहले से मौजूद memory पर एक view</b>, बिना copy के।</p>
<ul>
<li><b><code>Span&lt;T&gt;</code></b> (read/write) और <b><code>ReadOnlySpan&lt;T&gt;</code></b> memory के एक लगातार block की ओर point करते हैं: array या उसका हिस्सा, string (<code>"text".AsSpan()</code> से <code>ReadOnlySpan&lt;char&gt;</code> मिलता है), <code>stackalloc</code> memory, या native memory।</li>
<li><b>Slicing</b> — <code>span.Slice(1, 3)</code> या <code>span[1..4]</code> — एक और view देता है: <b>न copy, न heap allocation</b>। Span के ज़रिए लिखने से original array बदल जाता है।</li>
<li><b>बिना allocations के parsing</b>: बहुत सी APIs spans लेती हैं — <code>int.Parse(ReadOnlySpan&lt;char&gt;)</code>, <code>IndexOf</code>, <code>Trim</code>, <code>StartsWith</code>, <code>TryFormat</code>। <code>Substring</code> (हर बार नई string) की जगह span को slice करो और सीधे parse करो। <code>ToString()</code> तभी call करो जब सच में string चाहिए।</li>
<li><b><code>stackalloc</code></b>: <code>Span&lt;char&gt; buffer = stackalloc char[16];</code> — stack पर एक छोटा temporary buffer, कोई GC नहीं, <code>unsafe</code> की ज़रूरत नहीं। इसे <b>छोटा</b> रखो (stack सीमित है); बड़े या बदलते sizes के लिए <code>ArrayPool&lt;T&gt;.Shared</code> से rent करो।</li>
<li><b>ये पाबंदियाँ क्यों:</b> <code>Span&lt;T&gt;</code> एक <b><code>ref struct</code></b> है — यह stack के अंदर point कर सकता है, इसलिए इसे stack से ज़्यादा देर ज़िंदा नहीं रहना चाहिए। यह class का field नहीं बन सकता (<b>CS8345</b>), <code>object</code> में box नहीं हो सकता (<b>CS0029</b>), lambda इसे capture नहीं कर सकता (<b>CS8175</b>), <code>await</code> के पार नहीं रखा जा सकता (<b>CS4007</b>), और <code>List&lt;Span&lt;int&gt;&gt;</code> जैसा normal generic argument नहीं बन सकता (<b>CS9244</b>)।</li>
<li><b><code>Memory&lt;T&gt;</code> / <code>ReadOnlyMemory&lt;T&gt;</code></b>: heap के साथ चलने वाला साथी। यह fields में रह सकता है और <code>await</code> के पार जा सकता है; उस पर काम करने के लिए किसी synchronous हिस्से में <code>.Span</code> call करो।</li>
<li>ज़्यादातर फ़ायदा <b>मुफ़्त में</b> मिलता है: Kestrel, <code>System.Text.Json</code> और कई string APIs अंदर spans use करती हैं, इसलिए .NET upgrade करने पर आपका app तेज़ हो जाता है।</li>
</ul>
<p><b>कब use करें:</b> hot paths जो बहुत सारा text/bytes parse या format करते हैं (log parsing, protocol handling, CSV import, custom serializers) — जब profiler या benchmark (BenchmarkDotNet) दिखाए कि allocations मायने रखते हैं। <b>कब नहीं:</b> आम business code, जहाँ <code>Substring</code> और LINQ ज़्यादा साफ़ हैं और फ़ायदा इतना छोटा है कि दिखेगा भी नहीं; जो कुछ store करना हो या <code>await</code> के पार use करना हो (<code>Memory&lt;T&gt;</code> या normal array लो)।</p>`,
        hg: `<p><b>Analogy — darzi ke chalk nishaan:</b> darzi sirf aasteen wala hissa dekhne ke liye kapde ka naya tukda nahi kaat-ta. Woh usi thaan par <b>chalk se nishaan</b> lagata hai — "yahan se yahan tak kaam karna hai". Agar woh nishaanon ke andar silaai kare, to <b>original kapda</b> badal jaata hai. <code>Span&lt;T&gt;</code> wahi chalk ke nishaan hai: <b>pehle se maujood memory par ek view</b>, bina copy ke.</p>
<ul>
<li><b><code>Span&lt;T&gt;</code></b> (read/write) aur <b><code>ReadOnlySpan&lt;T&gt;</code></b> memory ke ek lagaataar block ki or point karte hain: array ya uska hissa, string (<code>"text".AsSpan()</code> se <code>ReadOnlySpan&lt;char&gt;</code> milta hai), <code>stackalloc</code> memory, ya native memory.</li>
<li><b>Slicing</b> — <code>span.Slice(1, 3)</code> ya <code>span[1..4]</code> — ek aur view deta hai: <b>na copy, na heap allocation</b>. Span ke zariye likhne se original array badal jaata hai.</li>
<li><b>Bina allocations ke parsing</b>: bahut si APIs spans leti hain — <code>int.Parse(ReadOnlySpan&lt;char&gt;)</code>, <code>IndexOf</code>, <code>Trim</code>, <code>StartsWith</code>, <code>TryFormat</code>. <code>Substring</code> (har baar nayi string) ki jagah span ko slice karo aur seedhe parse karo. <code>ToString()</code> tabhi call karo jab sach mein string chahiye.</li>
<li><b><code>stackalloc</code></b>: <code>Span&lt;char&gt; buffer = stackalloc char[16];</code> — stack par ek chhota temporary buffer, koi GC nahi, <code>unsafe</code> ki zaroorat nahi. Ise <b>chhota</b> rakho (stack seemit hai); bade ya badalte sizes ke liye <code>ArrayPool&lt;T&gt;.Shared</code> se rent karo.</li>
<li><b>Yeh paabandiyan kyun:</b> <code>Span&lt;T&gt;</code> ek <b><code>ref struct</code></b> hai — yeh stack ke andar point kar sakta hai, isliye ise stack se zyada der zinda nahi rehna chahiye. Yeh class ka field nahi ban sakta (<b>CS8345</b>), <code>object</code> mein box nahi ho sakta (<b>CS0029</b>), lambda ise capture nahi kar sakta (<b>CS8175</b>), <code>await</code> ke paar nahi rakha ja sakta (<b>CS4007</b>), aur <code>List&lt;Span&lt;int&gt;&gt;</code> jaisa normal generic argument nahi ban sakta (<b>CS9244</b>).</li>
<li><b><code>Memory&lt;T&gt;</code> / <code>ReadOnlyMemory&lt;T&gt;</code></b>: heap ke saath chalne wala saathi. Yeh fields mein reh sakta hai aur <code>await</code> ke paar ja sakta hai; us par kaam karne ke liye kisi synchronous hisse mein <code>.Span</code> call karo.</li>
<li>Zyadatar fayda <b>muft mein</b> milta hai: Kestrel, <code>System.Text.Json</code> aur kai string APIs andar spans use karti hain, isliye .NET upgrade karne par aapka app tez ho jaata hai.</li>
</ul>
<p><b>Kab use karein:</b> hot paths jo bahut saara text/bytes parse ya format karte hain (log parsing, protocol handling, CSV import, custom serializers) — jab profiler ya benchmark (BenchmarkDotNet) dikhaye ki allocations maayne rakhte hain. <b>Kab nahi:</b> aam business code, jahan <code>Substring</code> aur LINQ zyada saaf hain aur fayda itna chhota hai ki dikhega bhi nahi; jo kuch store karna ho ya <code>await</code> ke paar use karna ho (<code>Memory&lt;T&gt;</code> ya normal array lo).</p>`
      },
      code: [{
        caption: {
          en: "Slicing changes the original array; parsing a ticket string without Substring; stackalloc; Memory across an await",
          hi: "Slicing original array को बदलती है; बिना Substring के ticket string parse करना; stackalloc; await के पार Memory",
          hg: "Slicing original array ko badalti hai; bina Substring ke ticket string parse karna; stackalloc; await ke paar Memory"
        },
        check: "run",
        expected: "10,99,30,40,50\nlast two: 40 50\nPNR 4521367890, coach B2\nTryFormat: True, 10 chars\nSum of first two after an await: 109",
        src: `int[] seats = [10, 20, 30, 40, 50];
ShowSlicing(seats);
ParseTicket("PNR:4521367890;COACH:B2");

// Memory<T> may cross an await; Span<T> may not
int firstTwo = await SumLaterAsync(seats.AsMemory(0, 2));
Console.WriteLine($"Sum of first two after an await: {firstTwo}");

static void ShowSlicing(int[] seats)
{
    Span<int> middle = seats.AsSpan(1, 3);     // a window over 20, 30, 40: no copy
    middle[0] = 99;                            // writes into the original array
    Console.WriteLine(string.Join(",", seats));

    Span<int> lastTwo = seats.AsSpan()[^2..];  // range syntax works on spans
    Console.WriteLine($"last two: {lastTwo[0]} {lastTwo[1]}");
}

static void ParseTicket(string ticket)
{
    ReadOnlySpan<char> text = ticket.AsSpan();
    ReadOnlySpan<char> pnrPart = text[..text.IndexOf(';')];               // "PNR:4521367890"
    long pnr = long.Parse(pnrPart[(pnrPart.IndexOf(':') + 1)..]);         // parse straight from the span
    ReadOnlySpan<char> coach = text[(text.LastIndexOf(':') + 1)..];        // "B2"
    Console.WriteLine($"PNR {pnr}, coach {coach.ToString()}");            // ToString() allocates only here

    Span<char> buffer = stackalloc char[16];   // small temporary buffer on the stack
    bool ok = pnr.TryFormat(buffer, out int written);
    Console.WriteLine($"TryFormat: {ok}, {written} chars");
}

static async Task<int> SumLaterAsync(ReadOnlyMemory<int> data)
{
    await Task.Delay(10);                      // pretend I/O
    return Sum(data.Span);                     // take the Span in synchronous code
}

static int Sum(ReadOnlySpan<int> values)
{
    int sum = 0;
    foreach (int v in values) sum += v;
    return sum;
}`
      }]
    },
  ],
  qa: [
    {
      id: "async-await-thread",
      depth: "short",
      q: "How does async/await work? Does it create a new thread?",
      answer: "No. At an await on an unfinished task, the method returns and frees its thread; the rest runs as a continuation when the task completes. For I/O, no thread sits waiting.",
      meaning: {
        hi: "नहीं। अधूरे task पर await होते ही method return कर देता है और अपना thread free कर देता है; task पूरा होने पर बाकी हिस्सा continuation की तरह चलता है। I/O के दौरान कोई thread बैठकर इंतज़ार नहीं करता।",
        hg: "Nahi. Adhoore task par await hote hi method return kar deta hai aur apna thread free kar deta hai; task poora hone par baaki hissa continuation ki tarah chalta hai. I/O ke dauraan koi thread baithkar intezaar nahi karta."
      },
      explain: {
        en: `<ul>
<li>The compiler rewrites the <code>async</code> method into a <b>state machine</b>. Code runs <b>synchronously</b> on the caller's thread until the first <code>await</code> of a task that is not complete yet.</li>
<li>At that point the method returns an incomplete <code>Task</code> to its caller. When the awaited operation finishes, the continuation is scheduled: back on the captured <code>SynchronizationContext</code> if there is one (UI thread), otherwise on a <b>thread-pool</b> thread (ASP.NET Core, console).</li>
<li>For true I/O (DB, HTTP, file), the OS signals completion — no .NET thread is blocked while waiting. That is why a web server can handle far more requests: threads go back to the pool instead of sleeping.</li>
<li>Awaiting an <b>already completed</b> task continues immediately, without any switch.</li>
</ul>
<p>Follow-up: "Does async make a single request faster?" — No. It adds a small overhead (the state machine). The win is <b>scalability</b>: more concurrent requests with the same threads.</p>
<p>Follow-up: "Then how do you run CPU work in parallel?" — that needs threads: <code>Task.Run</code>, <code>Parallel.For</code>/<code>Parallel.ForEachAsync</code>, PLINQ.</p>
<p><b>TL angle:</b> in code review, look for blocking calls (<code>.Result</code>, <code>Thread.Sleep</code>, sync I/O) inside async methods — they quietly cancel the benefit.</p>`,
        hi: `<ul>
<li>Compiler <code>async</code> method को एक <b>state machine</b> में बदल देता है। Code caller के thread पर तब तक <b>synchronously</b> चलता है जब तक पहली बार किसी अधूरे task पर <code>await</code> न हो।</li>
<li>उस point पर method अपने caller को एक अधूरा <code>Task</code> return कर देता है। Await किया गया operation ख़त्म होने पर continuation schedule होता है: अगर captured <code>SynchronizationContext</code> है (UI thread) तो वहीं, वरना किसी <b>thread-pool</b> thread पर (ASP.NET Core, console)।</li>
<li>असली I/O (DB, HTTP, file) में completion का signal OS देता है — इंतज़ार के दौरान कोई .NET thread block नहीं होता। इसीलिए web server कहीं ज़्यादा requests संभाल पाता है: threads सोने की जगह pool में वापस चले जाते हैं।</li>
<li><b>पहले से complete</b> task पर await करने से code तुरंत, बिना किसी switch के आगे चलता है।</li>
</ul>
<p>Follow-up: "क्या async से एक request तेज़ हो जाती है?" — नहीं। इसमें थोड़ा overhead (state machine) जुड़ता है। फ़ायदा <b>scalability</b> है: उन्हीं threads से ज़्यादा concurrent requests।</p>
<p>Follow-up: "तो CPU काम parallel कैसे चलाओगे?" — उसके लिए threads चाहिए: <code>Task.Run</code>, <code>Parallel.For</code>/<code>Parallel.ForEachAsync</code>, PLINQ।</p>
<p><b>TL angle:</b> code review में async methods के अंदर blocking calls (<code>.Result</code>, <code>Thread.Sleep</code>, sync I/O) देखो — ये चुपचाप सारा फ़ायदा ख़त्म कर देते हैं।</p>`,
        hg: `<ul>
<li>Compiler <code>async</code> method ko ek <b>state machine</b> mein badal deta hai. Code caller ke thread par tab tak <b>synchronously</b> chalta hai jab tak pehli baar kisi adhoore task par <code>await</code> na ho.</li>
<li>Us point par method apne caller ko ek adhoora <code>Task</code> return kar deta hai. Await kiya gaya operation khatam hone par continuation schedule hota hai: agar captured <code>SynchronizationContext</code> hai (UI thread) to wahin, warna kisi <b>thread-pool</b> thread par (ASP.NET Core, console).</li>
<li>Asli I/O (DB, HTTP, file) mein completion ka signal OS deta hai — intezaar ke dauraan koi .NET thread block nahi hota. Isiliye web server kahin zyada requests sambhaal paata hai: threads sone ki jagah pool mein wapas chale jaate hain.</li>
<li><b>Pehle se complete</b> task par await karne se code turant, bina kisi switch ke aage chalta hai.</li>
</ul>
<p>Follow-up: "Kya async se ek request tez ho jaati hai?" — Nahi. Ismein thoda overhead (state machine) judta hai. Fayda <b>scalability</b> hai: unhi threads se zyada concurrent requests.</p>
<p>Follow-up: "To CPU kaam parallel kaise chalaoge?" — uske liye threads chahiye: <code>Task.Run</code>, <code>Parallel.For</code>/<code>Parallel.ForEachAsync</code>, PLINQ.</p>
<p><b>TL angle:</b> code review mein async methods ke andar blocking calls (<code>.Result</code>, <code>Thread.Sleep</code>, sync I/O) dekho — yeh chupchaap saara fayda khatam kar dete hain.</p>`
      }
    },
    {
      id: "task-vs-thread",
      depth: "short",
      q: "What is the difference between a Task and a Thread?",
      answer: "A Thread is an OS worker you create and manage yourself. A Task is a higher-level promise of work or a result, usually on the thread pool, with results, exceptions and cancellation built in.",
      meaning: {
        hi: "Thread OS level का worker है जिसे आप ख़ुद बनाते और संभालते हो। Task ऊपर के level का काम या result का वादा है, जो आमतौर पर thread pool पर चलता है, और जिसमें results, exceptions और cancellation पहले से built-in हैं।",
        hg: "Thread OS level ka worker hai jise aap khud banate aur sambhalte ho. Task upar ke level ka kaam ya result ka waada hai, jo aamtaur par thread pool par chalta hai, aur jismein results, exceptions aur cancellation pehle se built-in hain."
      },
      explain: {
        en: `<ul>
<li><b>Thread</b>: creating one is costly (its own stack memory, OS scheduling). You call <code>Start()</code> and <code>Join()</code>; there is no return value, and an unhandled exception on it crashes the process.</li>
<li><b>Task</b>: represents an operation. CPU work runs on <b>thread-pool</b> threads that are reused; an I/O task may use <b>no thread at all</b> while waiting. It gives <code>Task&lt;T&gt;</code> results, exceptions through <code>await</code>, <code>CancellationToken</code> support, and composition with <code>WhenAll</code>/<code>WhenAny</code>.</li>
<li><b>Thread pool</b>: a shared set of worker threads. It adds new threads slowly, so blocking pool threads (<code>.Result</code>, <code>Thread.Sleep</code>) leads to <b>thread-pool starvation</b>.</li>
<li><b>When a raw Thread still makes sense</b>: a dedicated long-running loop, or special needs like an STA thread for COM/UI. <code>Task.Factory.StartNew(..., TaskCreationOptions.LongRunning)</code> is the Task-based option for long-running work.</li>
</ul>
<p>Follow-up: "<code>Task.Run</code> vs <code>Task.Factory.StartNew</code>?" — <code>Task.Run</code> is the simple, safe default. <code>StartNew</code> has more options but traps: with an <code>async</code> lambda it returns <code>Task&lt;Task&gt;</code>, and it uses the current scheduler by default.</p>
<p>Follow-up: "<code>Task.Wait()</code> vs <code>await</code>?" — <code>Wait()</code> blocks the thread and wraps exceptions in <code>AggregateException</code>; <code>await</code> frees the thread and rethrows the original exception.</p>`,
        hi: `<ul>
<li><b>Thread</b>: इसे बनाना महँगा है (अपनी stack memory, OS scheduling)। आप <code>Start()</code> और <code>Join()</code> call करते हो; कोई return value नहीं, और उस पर unhandled exception आए तो process crash हो जाता है।</li>
<li><b>Task</b>: एक operation को represent करता है। CPU काम <b>thread-pool</b> के threads पर चलता है जो reuse होते हैं; I/O task इंतज़ार के दौरान <b>कोई thread use नहीं</b> करता। यह <code>Task&lt;T&gt;</code> results, <code>await</code> के ज़रिए exceptions, <code>CancellationToken</code> support, और <code>WhenAll</code>/<code>WhenAny</code> से composition देता है।</li>
<li><b>Thread pool</b>: worker threads का साझा set। यह नए threads धीरे-धीरे जोड़ता है, इसलिए pool threads को block करने से (<code>.Result</code>, <code>Thread.Sleep</code>) <b>thread-pool starvation</b> होती है।</li>
<li><b>Raw Thread कब अब भी ठीक है</b>: एक dedicated long-running loop, या ख़ास ज़रूरतें जैसे COM/UI के लिए STA thread। Long-running काम के लिए Task वाला option है <code>Task.Factory.StartNew(..., TaskCreationOptions.LongRunning)</code>।</li>
</ul>
<p>Follow-up: "<code>Task.Run</code> बनाम <code>Task.Factory.StartNew</code>?" — <code>Task.Run</code> आसान और safe default है। <code>StartNew</code> में ज़्यादा options हैं पर जाल भी: <code>async</code> lambda के साथ यह <code>Task&lt;Task&gt;</code> return करता है, और by default current scheduler use करता है।</p>
<p>Follow-up: "<code>Task.Wait()</code> बनाम <code>await</code>?" — <code>Wait()</code> thread को block करता है और exceptions को <code>AggregateException</code> में लपेटता है; <code>await</code> thread free करता है और original exception दोबारा throw करता है।</p>`,
        hg: `<ul>
<li><b>Thread</b>: ise banana mehenga hai (apni stack memory, OS scheduling). Aap <code>Start()</code> aur <code>Join()</code> call karte ho; koi return value nahi, aur us par unhandled exception aaye to process crash ho jaata hai.</li>
<li><b>Task</b>: ek operation ko represent karta hai. CPU kaam <b>thread-pool</b> ke threads par chalta hai jo reuse hote hain; I/O task intezaar ke dauraan <b>koi thread use nahi</b> karta. Yeh <code>Task&lt;T&gt;</code> results, <code>await</code> ke zariye exceptions, <code>CancellationToken</code> support, aur <code>WhenAll</code>/<code>WhenAny</code> se composition deta hai.</li>
<li><b>Thread pool</b>: worker threads ka saajha set. Yeh naye threads dheere-dheere jodta hai, isliye pool threads ko block karne se (<code>.Result</code>, <code>Thread.Sleep</code>) <b>thread-pool starvation</b> hoti hai.</li>
<li><b>Raw Thread kab ab bhi theek hai</b>: ek dedicated long-running loop, ya khaas zarooratein jaise COM/UI ke liye STA thread. Long-running kaam ke liye Task wala option hai <code>Task.Factory.StartNew(..., TaskCreationOptions.LongRunning)</code>.</li>
</ul>
<p>Follow-up: "<code>Task.Run</code> vs <code>Task.Factory.StartNew</code>?" — <code>Task.Run</code> aasaan aur safe default hai. <code>StartNew</code> mein zyada options hain par jaal bhi: <code>async</code> lambda ke saath yeh <code>Task&lt;Task&gt;</code> return karta hai, aur by default current scheduler use karta hai.</p>
<p>Follow-up: "<code>Task.Wait()</code> vs <code>await</code>?" — <code>Wait()</code> thread ko block karta hai aur exceptions ko <code>AggregateException</code> mein lapet-ta hai; <code>await</code> thread free karta hai aur original exception dobara throw karta hai.</p>`
      }
    },
    {
      id: "configureawait-false",
      depth: "short",
      q: "What does ConfigureAwait(false) do, and when should you use it?",
      answer: "It tells await not to resume on the captured SynchronizationContext. Use it in library code. ASP.NET Core has no SynchronizationContext, so in its app code it makes little difference.",
      meaning: {
        hi: "यह await को कहता है कि captured SynchronizationContext पर वापस मत आओ। इसे library code में use करो। ASP.NET Core में SynchronizationContext नहीं है, इसलिए उसके app code में इससे ख़ास फ़र्क नहीं पड़ता।",
        hg: "Yeh await ko kehta hai ki captured SynchronizationContext par wapas mat aao. Ise library code mein use karo. ASP.NET Core mein SynchronizationContext nahi hai, isliye uske app code mein isse khaas farq nahi padta."
      },
      explain: {
        en: `<ul>
<li>By default, <code>await</code> captures the current <code>SynchronizationContext</code> (or a non-default <code>TaskScheduler</code>) and resumes there. In WPF/WinForms that is the <b>UI thread</b> — needed to update controls.</li>
<li>With <code>ConfigureAwait(false)</code> the continuation runs on a thread-pool thread instead. Benefits in <b>libraries</b>: no deadlock if a UI caller blocks with <code>.Result</code>, and no extra jump back to the UI thread.</li>
<li>It affects <b>only that one await</b>. If the task was already complete, execution simply continues on the same thread — so a library should use it on <b>every</b> await, not just the first.</li>
<li>After <code>ConfigureAwait(false)</code> in UI code, you cannot touch UI controls — so do not use it in UI event handlers or view models that update the screen.</li>
<li>.NET 8 added <code>ConfigureAwait(ConfigureAwaitOptions...)</code>, e.g. <code>SuppressThrowing</code> to await completion without throwing.</li>
</ul>
<p>Follow-up: "Is <code>ConfigureAwait(false)</code> the fix for a deadlock?" — Only a partial defence: it works only if <b>every</b> await down the chain uses it. The real fix is to stop blocking — async all the way.</p>
<p><b>TL angle:</b> agree on a team rule — e.g. "required in shared libraries (enforce with analyzer CA2007), optional in ASP.NET Core app code" — so reviews do not argue about it every time.</p>`,
        hi: `<ul>
<li>By default, <code>await</code> current <code>SynchronizationContext</code> (या कोई non-default <code>TaskScheduler</code>) capture करता है और वहीं वापस आता है। WPF/WinForms में यह <b>UI thread</b> है — controls update करने के लिए ज़रूरी।</li>
<li><code>ConfigureAwait(false)</code> के साथ continuation उसकी जगह thread-pool thread पर चलता है। <b>Libraries</b> में फ़ायदे: अगर UI caller <code>.Result</code> से block करे तो deadlock नहीं, और UI thread पर वापस जाने का extra चक्कर नहीं।</li>
<li>यह <b>सिर्फ़ उसी एक await</b> पर असर करता है। अगर task पहले से complete था, तो code उसी thread पर आगे चलता रहता है — इसलिए library में इसे सिर्फ़ पहले नहीं, <b>हर</b> await पर लगाना चाहिए।</li>
<li>UI code में <code>ConfigureAwait(false)</code> के बाद आप UI controls नहीं छू सकते — इसलिए screen update करने वाले UI event handlers या view models में इसे use मत करो।</li>
<li>.NET 8 में <code>ConfigureAwait(ConfigureAwaitOptions...)</code> आया, जैसे <code>SuppressThrowing</code> — बिना throw किए completion का इंतज़ार करने के लिए।</li>
</ul>
<p>Follow-up: "क्या <code>ConfigureAwait(false)</code> deadlock का इलाज है?" — सिर्फ़ आधा बचाव: यह तभी काम करता है जब chain में नीचे तक <b>हर</b> await इसे use करे। असली इलाज है block करना बंद करो — async all the way।</p>
<p><b>TL angle:</b> team का एक rule तय करो — जैसे "shared libraries में ज़रूरी (analyzer CA2007 से enforce), ASP.NET Core app code में optional" — ताकि हर review में इस पर बहस न हो।</p>`,
        hg: `<ul>
<li>By default, <code>await</code> current <code>SynchronizationContext</code> (ya koi non-default <code>TaskScheduler</code>) capture karta hai aur wahin wapas aata hai. WPF/WinForms mein yeh <b>UI thread</b> hai — controls update karne ke liye zaroori.</li>
<li><code>ConfigureAwait(false)</code> ke saath continuation uski jagah thread-pool thread par chalta hai. <b>Libraries</b> mein fayde: agar UI caller <code>.Result</code> se block kare to deadlock nahi, aur UI thread par wapas jaane ka extra chakkar nahi.</li>
<li>Yeh <b>sirf usi ek await</b> par asar karta hai. Agar task pehle se complete tha, to code usi thread par aage chalta rehta hai — isliye library mein ise sirf pehle nahi, <b>har</b> await par lagana chahiye.</li>
<li>UI code mein <code>ConfigureAwait(false)</code> ke baad aap UI controls nahi chhoo sakte — isliye screen update karne wale UI event handlers ya view models mein ise use mat karo.</li>
<li>.NET 8 mein <code>ConfigureAwait(ConfigureAwaitOptions...)</code> aaya, jaise <code>SuppressThrowing</code> — bina throw kiye completion ka intezaar karne ke liye.</li>
</ul>
<p>Follow-up: "Kya <code>ConfigureAwait(false)</code> deadlock ka ilaaj hai?" — Sirf aadha bachaav: yeh tabhi kaam karta hai jab chain mein neeche tak <b>har</b> await ise use kare. Asli ilaaj hai block karna band karo — async all the way.</p>
<p><b>TL angle:</b> team ka ek rule tay karo — jaise "shared libraries mein zaroori (analyzer CA2007 se enforce), ASP.NET Core app code mein optional" — taaki har review mein is par bahas na ho.</p>`
      }
    },
    {
      id: "async-void",
      depth: "short",
      q: "Why should you avoid async void?",
      answer: "The caller cannot await it or catch its exceptions, and an unhandled exception can crash the process. Use async void only for event handlers; everywhere else return Task.",
      meaning: {
        hi: "Caller इसे await नहीं कर सकता, न इसके exceptions पकड़ सकता है, और unhandled exception process को crash कर सकता है। async void सिर्फ़ event handlers के लिए use करो; बाकी हर जगह Task return करो।",
        hg: "Caller ise await nahi kar sakta, na iske exceptions pakad sakta hai, aur unhandled exception process ko crash kar sakta hai. async void sirf event handlers ke liye use karo; baaki har jagah Task return karo."
      },
      explain: {
        en: `<ul>
<li>An <code>async Task</code> method stores its exception in the returned task, so the caller's <code>await</code> or <code>try/catch</code> sees it. An <code>async void</code> method has no task — its exception is raised on the <code>SynchronizationContext</code> that was active when it started; with none (ASP.NET Core, console, thread pool) the <b>process crashes</b>.</li>
<li>The caller cannot know <b>when it finishes</b> — e.g. a unit test ends before the work does, or a <code>DbContext</code> is disposed while the method is still using it.</li>
<li><b>Hidden async void</b>: an <code>async</code> lambda passed where an <code>Action</code> is expected — <code>list.ForEach(async x =&gt; await SaveAsync(x))</code>, timer callbacks, some event-style APIs. Use a normal <code>foreach</code> with <code>await</code> instead.</li>
<li>Event handlers (<code>button.Click += async (s, e) =&gt; ...</code>) must be <code>void</code> by signature — that is the accepted exception. Put a <code>try/catch</code> around the whole body.</li>
</ul>
<p>Follow-up: "How do you do fire-and-forget safely?" — In ASP.NET Core, enqueue the work to a <code>BackgroundService</code> (e.g. via <code>Channel&lt;T&gt;</code>) or a job system; do not use <code>async void</code>.</p>`,
        hi: `<ul>
<li><code>async Task</code> method अपना exception return हुए task में store करता है, इसलिए caller का <code>await</code> या <code>try/catch</code> उसे देख लेता है। <code>async void</code> method का कोई task नहीं होता — उसका exception उस <code>SynchronizationContext</code> पर raise होता है जो उसके शुरू होते समय active था; अगर कोई नहीं (ASP.NET Core, console, thread pool), तो <b>process crash हो जाता है</b>।</li>
<li>Caller को पता नहीं चलता कि यह <b>कब ख़त्म होगा</b> — जैसे unit test काम ख़त्म होने से पहले ही ख़त्म हो जाता है, या method के use करते-करते <code>DbContext</code> dispose हो जाता है।</li>
<li><b>छुपा हुआ async void</b>: वहाँ दिया गया <code>async</code> lambda जहाँ <code>Action</code> चाहिए — <code>list.ForEach(async x =&gt; await SaveAsync(x))</code>, timer callbacks, कुछ event-style APIs। इसकी जगह <code>await</code> के साथ normal <code>foreach</code> use करो।</li>
<li>Event handlers (<code>button.Click += async (s, e) =&gt; ...</code>) signature से ही <code>void</code> होने चाहिए — यही मान्य exception है। पूरी body के चारों ओर <code>try/catch</code> लगाओ।</li>
</ul>
<p>Follow-up: "Fire-and-forget safely कैसे करोगे?" — ASP.NET Core में काम को <code>BackgroundService</code> की queue में डालो (जैसे <code>Channel&lt;T&gt;</code> से) या किसी job system में; <code>async void</code> use मत करो।</p>`,
        hg: `<ul>
<li><code>async Task</code> method apna exception return hue task mein store karta hai, isliye caller ka <code>await</code> ya <code>try/catch</code> use dekh leta hai. <code>async void</code> method ka koi task nahi hota — uska exception us <code>SynchronizationContext</code> par raise hota hai jo uske shuru hote samay active tha; agar koi nahi (ASP.NET Core, console, thread pool), to <b>process crash ho jaata hai</b>.</li>
<li>Caller ko pata nahi chalta ki yeh <b>kab khatam hoga</b> — jaise unit test kaam khatam hone se pehle hi khatam ho jaata hai, ya method ke use karte-karte <code>DbContext</code> dispose ho jaata hai.</li>
<li><b>Chhupa hua async void</b>: wahan diya gaya <code>async</code> lambda jahan <code>Action</code> chahiye — <code>list.ForEach(async x =&gt; await SaveAsync(x))</code>, timer callbacks, kuch event-style APIs. Iski jagah <code>await</code> ke saath normal <code>foreach</code> use karo.</li>
<li>Event handlers (<code>button.Click += async (s, e) =&gt; ...</code>) signature se hi <code>void</code> hone chahiye — yahi maanya exception hai. Poori body ke chaaron or <code>try/catch</code> lagao.</li>
</ul>
<p>Follow-up: "Fire-and-forget safely kaise karoge?" — ASP.NET Core mein kaam ko <code>BackgroundService</code> ki queue mein daalo (jaise <code>Channel&lt;T&gt;</code> se) ya kisi job system mein; <code>async void</code> use mat karo.</p>`
      }
    },
    {
      id: "throw-vs-throw-ex",
      depth: "short",
      q: "What is the difference between throw and throw ex?",
      answer: "throw; rethrows the same exception and keeps the original stack trace. throw ex; resets the stack trace to the current line, so you lose where the error really happened.",
      meaning: {
        hi: "throw; उसी exception को दोबारा throw करता है और original stack trace बचाकर रखता है। throw ex; stack trace को current line से reset कर देता है, तो पता नहीं चलता कि error असल में कहाँ हुआ।",
        hg: "throw; usi exception ko dobara throw karta hai aur original stack trace bachakar rakhta hai. throw ex; stack trace ko current line se reset kar deta hai, to pata nahi chalta ki error asal mein kahan hua."
      },
      explain: {
        en: `<ul>
<li>The stack trace is the most useful part of a production error log. With <code>throw ex;</code> it starts at your <code>catch</code> block, and the real failing line deeper down is gone. The analyzer warns with <b>CA2200</b>.</li>
<li>To <b>add context</b>, wrap instead: <code>throw new PaymentException("Refund failed for order 42", ex);</code> — the original is kept in <code>InnerException</code>, with its own stack trace.</li>
<li>To rethrow <b>later</b> or from another place (e.g. after collecting errors), use <code>ExceptionDispatchInfo.Capture(ex).Throw();</code> — it keeps the original stack.</li>
<li>If you catch only to log and rethrow, ask whether you need the catch at all — a global handler can log it once.</li>
</ul>
<p>Follow-up: "What is an exception filter?" — <code>catch (SqlException ex) when (ex.Number == 1205)</code>: the catch runs only when the condition is true (here: a deadlock victim, worth a retry); otherwise the exception continues untouched.</p>`,
        hi: `<ul>
<li>Production error log का सबसे काम का हिस्सा stack trace है। <code>throw ex;</code> से वो आपके <code>catch</code> block से शुरू होता है, और नीचे की असली fail होने वाली line ग़ायब हो जाती है। Analyzer <b>CA2200</b> से warning देता है।</li>
<li><b>Context जोड़ना हो</b> तो wrap करो: <code>throw new PaymentException("Refund failed for order 42", ex);</code> — original अपने stack trace के साथ <code>InnerException</code> में रहता है।</li>
<li><b>बाद में</b> या किसी और जगह से rethrow करना हो (जैसे errors जमा करने के बाद), तो <code>ExceptionDispatchInfo.Capture(ex).Throw();</code> use करो — यह original stack बचाकर रखता है।</li>
<li>अगर आप सिर्फ़ log करके rethrow करने के लिए catch कर रहे हो, तो सोचो कि catch की ज़रूरत भी है या नहीं — global handler उसे एक बार log कर सकता है।</li>
</ul>
<p>Follow-up: "Exception filter क्या है?" — <code>catch (SqlException ex) when (ex.Number == 1205)</code>: catch सिर्फ़ तब चलता है जब condition true हो (यहाँ: deadlock victim, जिसे retry करना ठीक है); वरना exception बिना छेड़े आगे बढ़ता है।</p>`,
        hg: `<ul>
<li>Production error log ka sabse kaam ka hissa stack trace hai. <code>throw ex;</code> se woh aapke <code>catch</code> block se shuru hota hai, aur neeche ki asli fail hone wali line gaayab ho jaati hai. Analyzer <b>CA2200</b> se warning deta hai.</li>
<li><b>Context jodna ho</b> to wrap karo: <code>throw new PaymentException("Refund failed for order 42", ex);</code> — original apne stack trace ke saath <code>InnerException</code> mein rehta hai.</li>
<li><b>Baad mein</b> ya kisi aur jagah se rethrow karna ho (jaise errors jama karne ke baad), to <code>ExceptionDispatchInfo.Capture(ex).Throw();</code> use karo — yeh original stack bachakar rakhta hai.</li>
<li>Agar aap sirf log karke rethrow karne ke liye catch kar rahe ho, to socho ki catch ki zaroorat bhi hai ya nahi — global handler use ek baar log kar sakta hai.</li>
</ul>
<p>Follow-up: "Exception filter kya hai?" — <code>catch (SqlException ex) when (ex.Number == 1205)</code>: catch sirf tab chalta hai jab condition true ho (yahan: deadlock victim, jise retry karna theek hai); warna exception bina chhede aage badhta hai.</p>`
      }
    },
    {
      id: "dispose-using",
      depth: "short",
      q: "What is IDisposable, and why do we use the using statement?",
      answer: "IDisposable releases unmanaged or expensive resources, like DB connections and file handles, at a known time. using calls Dispose automatically at the end of the scope, even when an exception is thrown.",
      meaning: {
        hi: "IDisposable unmanaged या महँगे resources, जैसे DB connections और file handles, को तय समय पर छोड़ता है। using scope के end पर अपने-आप Dispose call करता है, exception आने पर भी।",
        hg: "IDisposable unmanaged ya mehenge resources, jaise DB connections aur file handles, ko tay samay par chhodta hai. using scope ke end par apne-aap Dispose call karta hai, exception aane par bhi."
      },
      explain: {
        en: `<ul>
<li>The GC frees <b>memory</b> only, at a time it chooses. It does not call <code>Dispose</code>. A connection or file handle that is not disposed stays open until (maybe) a finalizer runs — meanwhile the connection pool can run out.</li>
<li><code>using (var x = ...) { }</code> compiles to <code>try { } finally { x?.Dispose(); }</code>. The C# 8 <b>using declaration</b> <code>using var x = ...;</code> disposes at the end of the enclosing scope, in reverse order of declaration. <code>await using</code> calls <code>DisposeAsync</code>.</li>
<li><b>Who disposes?</b> The <b>owner</b> — whoever created it. Objects created by the DI container are disposed by the container (scoped ones at the end of the request), so do not dispose injected services yourself.</li>
<li><b><code>HttpClient</code> trap</b>: creating and disposing one per request can exhaust sockets; use <code>IHttpClientFactory</code> or a long-lived shared instance.</li>
</ul>
<p>Follow-up: "Is <code>Dispose</code> the same as freeing memory?" — No. After <code>Dispose</code> the object still exists in memory until the GC collects it; <code>Dispose</code> only releases what it holds (handles, connections).</p>`,
        hi: `<ul>
<li>GC सिर्फ़ <b>memory</b> free करता है, और वो भी अपने चुने समय पर। वो <code>Dispose</code> call नहीं करता। जो connection या file handle dispose नहीं हुआ, वो तब तक खुला रहता है जब तक (शायद) कोई finalizer न चले — तब तक connection pool ख़त्म हो सकता है।</li>
<li><code>using (var x = ...) { }</code> compile होकर <code>try { } finally { x?.Dispose(); }</code> बन जाता है। C# 8 का <b>using declaration</b> <code>using var x = ...;</code> enclosing scope के end पर, declaration के उल्टे order में dispose करता है। <code>await using</code> <code>DisposeAsync</code> call करता है।</li>
<li><b>Dispose कौन करेगा?</b> <b>Owner</b> — जिसने उसे बनाया। DI container के बनाए objects को container dispose करता है (scoped वाले request के end पर), इसलिए inject हुई services को ख़ुद dispose मत करो।</li>
<li><b><code>HttpClient</code> का जाल</b>: हर request पर एक बनाना और dispose करना sockets ख़त्म कर सकता है; <code>IHttpClientFactory</code> या लंबे समय तक चलने वाला एक shared instance use करो।</li>
</ul>
<p>Follow-up: "क्या <code>Dispose</code> memory free करने जैसा ही है?" — नहीं। <code>Dispose</code> के बाद भी object memory में रहता है जब तक GC उसे collect न करे; <code>Dispose</code> सिर्फ़ वो छोड़ता है जो उसने पकड़ा हुआ है (handles, connections)।</p>`,
        hg: `<ul>
<li>GC sirf <b>memory</b> free karta hai, aur woh bhi apne chune samay par. Woh <code>Dispose</code> call nahi karta. Jo connection ya file handle dispose nahi hua, woh tab tak khula rehta hai jab tak (shayad) koi finalizer na chale — tab tak connection pool khatam ho sakta hai.</li>
<li><code>using (var x = ...) { }</code> compile hokar <code>try { } finally { x?.Dispose(); }</code> ban jaata hai. C# 8 ka <b>using declaration</b> <code>using var x = ...;</code> enclosing scope ke end par, declaration ke ulte order mein dispose karta hai. <code>await using</code> <code>DisposeAsync</code> call karta hai.</li>
<li><b>Dispose kaun karega?</b> <b>Owner</b> — jisne use banaya. DI container ke banaye objects ko container dispose karta hai (scoped wale request ke end par), isliye inject hui services ko khud dispose mat karo.</li>
<li><b><code>HttpClient</code> ka jaal</b>: har request par ek banana aur dispose karna sockets khatam kar sakta hai; <code>IHttpClientFactory</code> ya lambe samay tak chalne wala ek shared instance use karo.</li>
</ul>
<p>Follow-up: "Kya <code>Dispose</code> memory free karne jaisa hi hai?" — Nahi. <code>Dispose</code> ke baad bhi object memory mein rehta hai jab tak GC use collect na kare; <code>Dispose</code> sirf woh chhodta hai jo usne pakda hua hai (handles, connections).</p>`
      }
    },
    {
      id: "gc-generations",
      depth: "short",
      q: "How does the .NET garbage collector work? What are generations?",
      answer: "The GC frees objects that are no longer reachable from roots and compacts memory. It uses generations 0, 1 and 2 because most objects die young, so frequent cheap Gen 0 collections clean most garbage.",
      meaning: {
        hi: "GC उन objects को free करता है जो roots से अब reachable नहीं हैं, और memory compact करता है। यह generations 0, 1 और 2 use करता है क्योंकि ज़्यादातर objects जल्दी मर जाते हैं, इसलिए बार-बार होने वाले सस्ते Gen 0 collections ज़्यादातर कचरा साफ़ कर देते हैं।",
        hg: "GC un objects ko free karta hai jo roots se ab reachable nahi hain, aur memory compact karta hai. Yeh generations 0, 1 aur 2 use karta hai kyunki zyadatar objects jaldi mar jaate hain, isliye baar-baar hone wale saste Gen 0 collections zyadatar kachra saaf kar dete hain."
      },
      explain: {
        en: `<ul>
<li><b>Mark</b>: starting from roots (static fields, locals on thread stacks, CPU registers, GC handles), the GC marks every object it can reach. <b>Sweep/compact</b>: unreachable objects are freed and survivors are moved together, so new allocations are just "bump a pointer" — very fast.</li>
<li><b>Promotion</b>: an object that survives a Gen 0 collection moves to Gen 1; surviving Gen 1 moves it to Gen 2. A Gen 2 (<b>full</b>) collection checks everything and is the most expensive.</li>
<li><b>LOH</b>: objects of 85,000 bytes or more go to the Large Object Heap, collected with Gen 2 and not compacted by default.</li>
<li>.NET does not use reference counting, so <b>circular references are not a problem</b> — unreachable cycles are collected too.</li>
<li><b>Background GC</b> (on by default) does most Gen 2 work while your threads run; <b>Server GC</b> is the default for ASP.NET Core.</li>
</ul>
<p>Follow-up: "What triggers a GC?" — mainly an allocation that exceeds the Gen 0 budget; also low memory on the machine, or an explicit <code>GC.Collect()</code> (avoid it).</p>
<p><b>TL angle:</b> performance work = <b>fewer allocations in hot paths</b> and fewer objects surviving to Gen 2. Watch <code>dotnet-counters</code> (time in GC, Gen 2 count, heap size) before tuning anything.</p>`,
        hi: `<ul>
<li><b>Mark</b>: roots (static fields, thread stacks पर locals, CPU registers, GC handles) से शुरू करके GC हर उस object को mark करता है जहाँ तक पहुँच सकता है। <b>Sweep/compact</b>: जिन objects तक पहुँच नहीं, वो free होते हैं और बचे हुए पास-पास खिसका दिए जाते हैं, इसलिए नया allocation बस "pointer आगे बढ़ाना" है — बहुत तेज़।</li>
<li><b>Promotion</b>: जो object Gen 0 collection से बच जाता है वो Gen 1 में जाता है; Gen 1 से बचने पर Gen 2 में। Gen 2 (<b>full</b>) collection सब कुछ check करता है और सबसे महँगा है।</li>
<li><b>LOH</b>: 85,000 bytes या उससे बड़े objects Large Object Heap में जाते हैं, जो Gen 2 के साथ collect होता है और by default compact नहीं होता।</li>
<li>.NET reference counting use नहीं करता, इसलिए <b>circular references कोई problem नहीं</b> — unreachable cycles भी collect हो जाते हैं।</li>
<li><b>Background GC</b> (by default on) Gen 2 का ज़्यादातर काम आपके threads के चलते-चलते करता है; ASP.NET Core का default <b>Server GC</b> है।</li>
</ul>
<p>Follow-up: "GC trigger किससे होता है?" — मुख्य रूप से ऐसे allocation से जो Gen 0 budget पार कर दे; machine पर memory कम होने से भी, या explicit <code>GC.Collect()</code> से (इससे बचो)।</p>
<p><b>TL angle:</b> performance का काम = <b>hot paths में कम allocations</b> और Gen 2 तक कम objects पहुँचना। कुछ भी tune करने से पहले <code>dotnet-counters</code> देखो (GC में लगा time, Gen 2 count, heap size)।</p>`,
        hg: `<ul>
<li><b>Mark</b>: roots (static fields, thread stacks par locals, CPU registers, GC handles) se shuru karke GC har us object ko mark karta hai jahan tak pahunch sakta hai. <b>Sweep/compact</b>: jin objects tak pahunch nahi, woh free hote hain aur bache hue paas-paas khiska diye jaate hain, isliye naya allocation bas "pointer aage badhana" hai — bahut tez.</li>
<li><b>Promotion</b>: jo object Gen 0 collection se bach jaata hai woh Gen 1 mein jaata hai; Gen 1 se bachne par Gen 2 mein. Gen 2 (<b>full</b>) collection sab kuch check karta hai aur sabse mehenga hai.</li>
<li><b>LOH</b>: 85,000 bytes ya usse bade objects Large Object Heap mein jaate hain, jo Gen 2 ke saath collect hota hai aur by default compact nahi hota.</li>
<li>.NET reference counting use nahi karta, isliye <b>circular references koi problem nahi</b> — unreachable cycles bhi collect ho jaate hain.</li>
<li><b>Background GC</b> (by default on) Gen 2 ka zyadatar kaam aapke threads ke chalte-chalte karta hai; ASP.NET Core ka default <b>Server GC</b> hai.</li>
</ul>
<p>Follow-up: "GC trigger kisse hota hai?" — mukhya roop se aise allocation se jo Gen 0 budget paar kar de; machine par memory kam hone se bhi, ya explicit <code>GC.Collect()</code> se (isse bacho).</p>
<p><b>TL angle:</b> performance ka kaam = <b>hot paths mein kam allocations</b> aur Gen 2 tak kam objects pahunchna. Kuch bhi tune karne se pehle <code>dotnet-counters</code> dekho (GC mein laga time, Gen 2 count, heap size).</p>`
      }
    },
    {
      id: "record-vs-class",
      depth: "short",
      q: "What is a record in C#, and how is it different from a class?",
      answer: "A record is a type for data: the compiler generates value-based equality, a readable ToString and with-expressions for changed copies. A class compares by reference by default and gets none of that generated.",
      meaning: {
        hi: "Record data के लिए type है: compiler value-based equality, पढ़ने लायक ToString और बदली हुई copies के लिए with-expressions generate करता है। Class by default reference से compare होती है और उसे यह सब generate होकर नहीं मिलता।",
        hg: "Record data ke liye type hai: compiler value-based equality, padhne laayak ToString aur badli hui copies ke liye with-expressions generate karta hai. Class by default reference se compare hoti hai aur use yeh sab generate hokar nahi milta."
      },
      explain: {
        en: `<ul>
<li><code>public record Money(decimal Amount, string Currency);</code> — one line gives a constructor, init-only properties, <code>Equals</code>/<code>GetHashCode</code>/<code>==</code> by value, <code>ToString()</code>, <code>Deconstruct</code>, and support for <code>with</code>.</li>
<li><code>record</code> = <code>record class</code> (reference type, C# 9). <code>record struct</code> (C# 10) is a value type; use <code>readonly record struct</code> for immutability, because positional record struct properties are settable.</li>
<li>Equality is <b>shallow</b> (a <code>List</code> property compares by reference) and includes the <b>runtime type</b>.</li>
<li>Records <b>can</b> have methods and mutable properties, but the intent is immutable data.</li>
</ul>
<p>Follow-up: "Would you use records for EF Core entities?" — Usually no. Entities have identity (an Id) and change over time; value equality and a changing hash code fight with change tracking. Records fit DTOs, messages and value objects.</p>
<p>Follow-up: "Record vs a class with a primary constructor (C# 12)?" — A primary constructor only adds constructor parameters; no generated equality, <code>ToString</code> or <code>with</code>.</p>`,
        hi: `<ul>
<li><code>public record Money(decimal Amount, string Currency);</code> — एक line से constructor, init-only properties, value से <code>Equals</code>/<code>GetHashCode</code>/<code>==</code>, <code>ToString()</code>, <code>Deconstruct</code>, और <code>with</code> का support मिल जाता है।</li>
<li><code>record</code> = <code>record class</code> (reference type, C# 9)। <code>record struct</code> (C# 10) value type है; immutability के लिए <code>readonly record struct</code> use करो, क्योंकि positional record struct की properties set हो सकती हैं।</li>
<li>Equality <b>shallow</b> है (<code>List</code> property reference से compare होती है) और इसमें <b>runtime type</b> भी शामिल है।</li>
<li>Records में methods और mutable properties <b>हो सकती</b> हैं, पर इरादा immutable data का है।</li>
</ul>
<p>Follow-up: "क्या EF Core entities के लिए records use करोगे?" — आमतौर पर नहीं। Entities की पहचान (Id) होती है और वो समय के साथ बदलती हैं; value equality और बदलता hash code change tracking से टकराते हैं। Records DTOs, messages और value objects के लिए ठीक हैं।</p>
<p>Follow-up: "Record बनाम primary constructor वाली class (C# 12)?" — Primary constructor सिर्फ़ constructor parameters जोड़ता है; न generated equality, न <code>ToString</code>, न <code>with</code>।</p>`,
        hg: `<ul>
<li><code>public record Money(decimal Amount, string Currency);</code> — ek line se constructor, init-only properties, value se <code>Equals</code>/<code>GetHashCode</code>/<code>==</code>, <code>ToString()</code>, <code>Deconstruct</code>, aur <code>with</code> ka support mil jaata hai.</li>
<li><code>record</code> = <code>record class</code> (reference type, C# 9). <code>record struct</code> (C# 10) value type hai; immutability ke liye <code>readonly record struct</code> use karo, kyunki positional record struct ki properties set ho sakti hain.</li>
<li>Equality <b>shallow</b> hai (<code>List</code> property reference se compare hoti hai) aur ismein <b>runtime type</b> bhi shaamil hai.</li>
<li>Records mein methods aur mutable properties <b>ho sakti</b> hain, par iraada immutable data ka hai.</li>
</ul>
<p>Follow-up: "Kya EF Core entities ke liye records use karoge?" — Aamtaur par nahi. Entities ki pehchaan (Id) hoti hai aur woh samay ke saath badalti hain; value equality aur badalta hash code change tracking se takraate hain. Records DTOs, messages aur value objects ke liye theek hain.</p>
<p>Follow-up: "Record vs primary constructor wali class (C# 12)?" — Primary constructor sirf constructor parameters jodta hai; na generated equality, na <code>ToString</code>, na <code>with</code>.</p>`
      }
    },
    {
      id: "sync-over-async-deadlock",
      depth: "detailed",
      q: "Why can calling .Result or .Wait() on a Task cause a deadlock?",
      answer: "In apps with a single-threaded SynchronizationContext, like WPF or classic ASP.NET, .Result blocks that thread while the awaited code needs the same thread to resume, so each waits for the other.",
      meaning: {
        hi: "जिन apps में single-threaded SynchronizationContext होता है, जैसे WPF या पुराना ASP.NET, वहाँ .Result उस thread को block कर देता है, जबकि await किए गए code को वापस चलने के लिए वही thread चाहिए — दोनों एक-दूसरे का इंतज़ार करते रहते हैं।",
        hg: "Jin apps mein single-threaded SynchronizationContext hota hai, jaise WPF ya purana ASP.NET, wahan .Result us thread ko block kar deta hai, jabki await kiye gaye code ko wapas chalne ke liye wahi thread chahiye — dono ek-doosre ka intezaar karte rehte hain."
      },
      explain: {
        en: `<p>Step by step, in a WPF button click:</p>
<ul>
<li>The UI thread calls <code>GetDataAsync().Result</code>. Inside, <code>await httpClient.GetStringAsync(...)</code> captures the UI context and returns an incomplete task.</li>
<li><code>.Result</code> <b>blocks the UI thread</b> until that task completes.</li>
<li>The HTTP call finishes; the continuation must run <b>on the UI thread</b> — which is blocked. The task never completes, so <code>.Result</code> never returns. Deadlock.</li>
</ul>
<ul>
<li><b>ASP.NET Core</b> has no SynchronizationContext, so this exact deadlock does not happen — but each blocked request holds a pool thread, and under load you get <b>thread-pool starvation</b>.</li>
<li><code>.Result</code>/<code>.Wait()</code> also wrap errors in <code>AggregateException</code>. <code>GetAwaiter().GetResult()</code> throws the original exception but <b>still blocks</b>.</li>
<li><b>Fixes</b>: async all the way up (make the event handler or controller action <code>async</code>); in libraries, <code>ConfigureAwait(false)</code> on every await as a defence.</li>
</ul>
<p>Follow-up: "How would you detect thread-pool starvation in production?" — rising latency with low CPU, <code>dotnet-counters</code> showing a growing ThreadPool queue length and thread count, and a memory dump with many threads blocked in <code>Task.Wait</code>/<code>Result</code>.</p>`,
        hi: `<p>Step by step, WPF के एक button click में:</p>
<ul>
<li>UI thread <code>GetDataAsync().Result</code> call करता है। अंदर <code>await httpClient.GetStringAsync(...)</code> UI context capture करता है और एक अधूरा task return करता है।</li>
<li><code>.Result</code> उस task के पूरा होने तक <b>UI thread को block कर देता है</b>।</li>
<li>HTTP call ख़त्म होती है; continuation को <b>UI thread पर</b> चलना है — जो block है। Task कभी पूरा नहीं होता, इसलिए <code>.Result</code> कभी return नहीं करता। Deadlock।</li>
</ul>
<ul>
<li><b>ASP.NET Core</b> में SynchronizationContext नहीं है, इसलिए यह वाला deadlock नहीं होता — पर हर blocked request एक pool thread पकड़े रहती है, और load पर <b>thread-pool starvation</b> हो जाती है।</li>
<li><code>.Result</code>/<code>.Wait()</code> errors को <code>AggregateException</code> में भी लपेट देते हैं। <code>GetAwaiter().GetResult()</code> original exception throw करता है पर <b>block फिर भी करता है</b>।</li>
<li><b>इलाज</b>: ऊपर तक async all the way (event handler या controller action को <code>async</code> बनाओ); libraries में बचाव के लिए हर await पर <code>ConfigureAwait(false)</code>।</li>
</ul>
<p>Follow-up: "Production में thread-pool starvation कैसे पकड़ोगे?" — कम CPU के साथ बढ़ती latency, <code>dotnet-counters</code> में बढ़ती ThreadPool queue length और thread count, और memory dump में <code>Task.Wait</code>/<code>Result</code> पर blocked बहुत सारे threads।</p>`,
        hg: `<p>Step by step, WPF ke ek button click mein:</p>
<ul>
<li>UI thread <code>GetDataAsync().Result</code> call karta hai. Andar <code>await httpClient.GetStringAsync(...)</code> UI context capture karta hai aur ek adhoora task return karta hai.</li>
<li><code>.Result</code> us task ke poora hone tak <b>UI thread ko block kar deta hai</b>.</li>
<li>HTTP call khatam hoti hai; continuation ko <b>UI thread par</b> chalna hai — jo block hai. Task kabhi poora nahi hota, isliye <code>.Result</code> kabhi return nahi karta. Deadlock.</li>
</ul>
<ul>
<li><b>ASP.NET Core</b> mein SynchronizationContext nahi hai, isliye yeh wala deadlock nahi hota — par har blocked request ek pool thread pakde rehti hai, aur load par <b>thread-pool starvation</b> ho jaati hai.</li>
<li><code>.Result</code>/<code>.Wait()</code> errors ko <code>AggregateException</code> mein bhi lapet dete hain. <code>GetAwaiter().GetResult()</code> original exception throw karta hai par <b>block phir bhi karta hai</b>.</li>
<li><b>Ilaaj</b>: upar tak async all the way (event handler ya controller action ko <code>async</code> banao); libraries mein bachaav ke liye har await par <code>ConfigureAwait(false)</code>.</li>
</ul>
<p>Follow-up: "Production mein thread-pool starvation kaise pakdoge?" — kam CPU ke saath badhti latency, <code>dotnet-counters</code> mein badhti ThreadPool queue length aur thread count, aur memory dump mein <code>Task.Wait</code>/<code>Result</code> par blocked bahut saare threads.</p>`
      }
    },
    {
      id: "task-run-aspnetcore",
      depth: "detailed",
      q: "Should you use Task.Run in ASP.NET Core? When is Task.Run the right tool?",
      answer: "Usually not in request code: the request already runs on a thread-pool thread, so Task.Run only adds a hop. Use it for CPU work in UI apps, and a queued BackgroundService for background work.",
      meaning: {
        hi: "Request code में आमतौर पर नहीं: request पहले से thread-pool thread पर चलती है, इसलिए Task.Run बस एक extra hop जोड़ता है। UI apps में CPU काम के लिए इसे use करो, और background काम के लिए queue वाला BackgroundService।",
        hg: "Request code mein aamtaur par nahi: request pehle se thread-pool thread par chalti hai, isliye Task.Run bas ek extra hop jodta hai. UI apps mein CPU kaam ke liye ise use karo, aur background kaam ke liye queue wala BackgroundService."
      },
      explain: {
        en: `<ul>
<li><code>await Task.Run(() =&gt; CalculateInvoice())</code> in a controller: the request thread goes back to the pool, another pool thread does the same work. Net effect: extra scheduling, <b>no scalability gain</b>.</li>
<li><b>"Async over sync"</b>: wrapping a blocking call (<code>Task.Run(() =&gt; File.ReadAllText(path))</code>) only hides the blocking on another thread. Use real async APIs (<code>File.ReadAllTextAsync</code>, EF Core <code>...Async</code>).</li>
<li><b>Fire-and-forget</b> (<code>_ = Task.Run(SendEmailAsync)</code>): exceptions go unobserved, scoped services (<code>DbContext</code>) are disposed when the request ends, and work is lost when the app restarts.</li>
<li><b>Better</b>: a <code>BackgroundService</code> reading from a <code>Channel&lt;T&gt;</code> for in-process work; a durable queue or job system (e.g. a message broker, Hangfire) when the work must survive restarts.</li>
<li><b>Where <code>Task.Run</code> fits</b>: CPU work in WPF/WinForms/MAUI to keep the UI responsive; console tools doing parallel CPU work; starting a few CPU-bound pieces in parallel when you really have spare cores.</li>
</ul>
<p>Follow-up: "A CPU-heavy report endpoint is slow — what would you do?" — keep it synchronous inside the request if it is short; if long, accept the request, queue the job, return <b>202 Accepted</b> with a status URL, and process it in a worker.</p>`,
        hi: `<ul>
<li>Controller में <code>await Task.Run(() =&gt; CalculateInvoice())</code>: request thread pool में वापस जाता है, और दूसरा pool thread वही काम करता है। कुल असर: extra scheduling, <b>scalability में कोई फ़ायदा नहीं</b>।</li>
<li><b>"Async over sync"</b>: blocking call को wrap करना (<code>Task.Run(() =&gt; File.ReadAllText(path))</code>) बस blocking को दूसरे thread पर छुपा देता है। असली async APIs use करो (<code>File.ReadAllTextAsync</code>, EF Core <code>...Async</code>)।</li>
<li><b>Fire-and-forget</b> (<code>_ = Task.Run(SendEmailAsync)</code>): exceptions पर किसी की नज़र नहीं जाती, request ख़त्म होते ही scoped services (<code>DbContext</code>) dispose हो जाती हैं, और app restart होने पर काम खो जाता है।</li>
<li><b>बेहतर</b>: in-process काम के लिए <code>Channel&lt;T&gt;</code> से पढ़ने वाला <code>BackgroundService</code>; जब काम को restarts के बाद भी बचना हो तो durable queue या job system (जैसे message broker, Hangfire)।</li>
<li><b><code>Task.Run</code> कहाँ ठीक है</b>: WPF/WinForms/MAUI में UI को responsive रखने के लिए CPU काम; parallel CPU काम करने वाले console tools; जब सच में ख़ाली cores हों तब कुछ CPU-bound हिस्से parallel में शुरू करना।</li>
</ul>
<p>Follow-up: "एक CPU-heavy report endpoint धीमा है — क्या करोगे?" — छोटा है तो request के अंदर synchronous ही रखो; लंबा है तो request accept करो, job queue करो, status URL के साथ <b>202 Accepted</b> return करो, और worker में process करो।</p>`,
        hg: `<ul>
<li>Controller mein <code>await Task.Run(() =&gt; CalculateInvoice())</code>: request thread pool mein wapas jaata hai, aur doosra pool thread wahi kaam karta hai. Kul asar: extra scheduling, <b>scalability mein koi fayda nahi</b>.</li>
<li><b>"Async over sync"</b>: blocking call ko wrap karna (<code>Task.Run(() =&gt; File.ReadAllText(path))</code>) bas blocking ko doosre thread par chhupa deta hai. Asli async APIs use karo (<code>File.ReadAllTextAsync</code>, EF Core <code>...Async</code>).</li>
<li><b>Fire-and-forget</b> (<code>_ = Task.Run(SendEmailAsync)</code>): exceptions par kisi ki nazar nahi jaati, request khatam hote hi scoped services (<code>DbContext</code>) dispose ho jaati hain, aur app restart hone par kaam kho jaata hai.</li>
<li><b>Behtar</b>: in-process kaam ke liye <code>Channel&lt;T&gt;</code> se padhne wala <code>BackgroundService</code>; jab kaam ko restarts ke baad bhi bachna ho to durable queue ya job system (jaise message broker, Hangfire).</li>
<li><b><code>Task.Run</code> kahan theek hai</b>: WPF/WinForms/MAUI mein UI ko responsive rakhne ke liye CPU kaam; parallel CPU kaam karne wale console tools; jab sach mein khaali cores hon tab kuch CPU-bound hisse parallel mein shuru karna.</li>
</ul>
<p>Follow-up: "Ek CPU-heavy report endpoint dheema hai — kya karoge?" — chhota hai to request ke andar synchronous hi rakho; lamba hai to request accept karo, job queue karo, status URL ke saath <b>202 Accepted</b> return karo, aur worker mein process karo.</p>`
      }
    },
    {
      id: "whenall-exceptions",
      depth: "detailed",
      q: "What happens when several tasks fail inside Task.WhenAll?",
      answer: "await Task.WhenAll throws only the first exception. All of them are kept in the WhenAll task's Exception property, an AggregateException, so keep a reference to that task if you need every error.",
      meaning: {
        hi: "await Task.WhenAll सिर्फ़ पहला exception throw करता है। सारे exceptions WhenAll वाले task की Exception property (एक AggregateException) में रहते हैं, इसलिए अगर हर error चाहिए तो उस task का reference संभालकर रखो।",
        hg: "await Task.WhenAll sirf pehla exception throw karta hai. Saare exceptions WhenAll wale task ki Exception property (ek AggregateException) mein rehte hain, isliye agar har error chahiye to us task ka reference sambhaalkar rakho."
      },
      explain: {
        en: `<ul>
<li><code>WhenAll</code> waits for <b>all</b> tasks to finish — even if one fails early — and then completes as faulted with every exception inside an <code>AggregateException</code>.</li>
<li><code>await</code> unwraps it and rethrows only <code>InnerExceptions[0]</code> — the first in the <b>order you passed the tasks</b>, not necessarily the first in time.</li>
<li>To log every failure: keep <code>Task all = Task.WhenAll(...)</code>, and in the <code>catch</code> read <code>all.Exception!.InnerExceptions</code>. Or check each task's <code>IsFaulted</code>.</li>
<li><code>.Wait()</code>/<code>.Result</code> throw the whole <code>AggregateException</code>.</li>
<li>Need to stop the others when one fails? Pass a shared <code>CancellationTokenSource</code> and cancel it in the failing path. Need results as they arrive? <code>Task.WhenAny</code> in a loop, or <code>Task.WhenEach</code> (.NET 9) with <code>await foreach</code>.</li>
</ul>
<p>Follow-up: "What is an unobserved task exception?" — a faulted task whose exception nobody awaited or read. Since .NET Framework 4.5 it no longer crashes the process; it raises <code>TaskScheduler.UnobservedTaskException</code> when the task is garbage-collected. The error is still lost — that is why fire-and-forget is dangerous.</p>`,
        hi: `<ul>
<li><code>WhenAll</code> <b>सारे</b> tasks के ख़त्म होने का इंतज़ार करता है — चाहे कोई एक जल्दी fail हो जाए — और फिर faulted होकर complete होता है, जिसमें हर exception एक <code>AggregateException</code> के अंदर होता है।</li>
<li><code>await</code> उसे खोलकर सिर्फ़ <code>InnerExceptions[0]</code> दोबारा throw करता है — जो <b>आपके दिए tasks के order</b> में पहला है, ज़रूरी नहीं कि समय में पहला हो।</li>
<li>हर failure log करना हो तो: <code>Task all = Task.WhenAll(...)</code> संभालकर रखो, और <code>catch</code> में <code>all.Exception!.InnerExceptions</code> पढ़ो। या हर task का <code>IsFaulted</code> check करो।</li>
<li><code>.Wait()</code>/<code>.Result</code> पूरा <code>AggregateException</code> throw करते हैं।</li>
<li>एक के fail होने पर बाकी रोकने हैं? एक shared <code>CancellationTokenSource</code> pass करो और failing path में उसे cancel करो। Results आते-आते चाहिए? Loop में <code>Task.WhenAny</code>, या <code>await foreach</code> के साथ <code>Task.WhenEach</code> (.NET 9)।</li>
</ul>
<p>Follow-up: "Unobserved task exception क्या है?" — ऐसा faulted task जिसके exception को किसी ने await नहीं किया या पढ़ा नहीं। .NET Framework 4.5 से यह process crash नहीं करता; task के garbage-collect होने पर <code>TaskScheduler.UnobservedTaskException</code> raise होता है। Error फिर भी खो जाता है — इसीलिए fire-and-forget ख़तरनाक है।</p>`,
        hg: `<ul>
<li><code>WhenAll</code> <b>saare</b> tasks ke khatam hone ka intezaar karta hai — chahe koi ek jaldi fail ho jaaye — aur phir faulted hokar complete hota hai, jismein har exception ek <code>AggregateException</code> ke andar hota hai.</li>
<li><code>await</code> use kholkar sirf <code>InnerExceptions[0]</code> dobara throw karta hai — jo <b>aapke diye tasks ke order</b> mein pehla hai, zaroori nahi ki samay mein pehla ho.</li>
<li>Har failure log karna ho to: <code>Task all = Task.WhenAll(...)</code> sambhaalkar rakho, aur <code>catch</code> mein <code>all.Exception!.InnerExceptions</code> padho. Ya har task ka <code>IsFaulted</code> check karo.</li>
<li><code>.Wait()</code>/<code>.Result</code> poora <code>AggregateException</code> throw karte hain.</li>
<li>Ek ke fail hone par baaki rokne hain? Ek shared <code>CancellationTokenSource</code> pass karo aur failing path mein use cancel karo. Results aate-aate chahiye? Loop mein <code>Task.WhenAny</code>, ya <code>await foreach</code> ke saath <code>Task.WhenEach</code> (.NET 9).</li>
</ul>
<p>Follow-up: "Unobserved task exception kya hai?" — aisa faulted task jiske exception ko kisi ne await nahi kiya ya padha nahi. .NET Framework 4.5 se yeh process crash nahi karta; task ke garbage-collect hone par <code>TaskScheduler.UnobservedTaskException</code> raise hota hai. Error phir bhi kho jaata hai — isiliye fire-and-forget khatarnaak hai.</p>`
      },
      code: [{
        caption: {
          en: "await rethrows the first exception; WhenAll's Task.Exception keeps all of them",
          hi: "await पहला exception दोबारा throw करता है; WhenAll का Task.Exception सब रखता है",
          hg: "await pehla exception dobara throw karta hai; WhenAll ka Task.Exception sab rakhta hai"
        },
        check: "run",
        expected: "await threw only: Payment service down\nall.Exception holds: Payment service down\nall.Exception holds: Stock service down\nWait() threw AggregateException with 2 inner exceptions",
        src: `Task payment = FailAsync("Payment service down");
Task stock = FailAsync("Stock service down");
Task all = Task.WhenAll(payment, stock);

try
{
    await all;
}
catch (Exception ex)
{
    Console.WriteLine($"await threw only: {ex.Message}");
    foreach (Exception inner in all.Exception!.InnerExceptions)
        Console.WriteLine($"all.Exception holds: {inner.Message}");
}

try
{
    all.Wait();                  // blocking: used here only to show the wrapper type
}
catch (AggregateException ex)
{
    Console.WriteLine($"Wait() threw AggregateException with {ex.InnerExceptions.Count} inner exceptions");
}

static async Task FailAsync(string message)
{
    await Task.CompletedTask;    // already complete: no real waiting, so the output is fixed
    throw new InvalidOperationException(message);
}`
      }]
    },
    {
      id: "valuetask",
      depth: "detailed",
      q: "When would you use ValueTask instead of Task?",
      answer: "When a method usually completes synchronously, like a cache hit, ValueTask avoids allocating a Task. Rules: await it only once, never concurrently, and do not read .Result before it completes; otherwise return Task.",
      meaning: {
        hi: "जब method ज़्यादातर synchronously पूरा हो जाता है, जैसे cache hit, तब ValueTask एक Task allocate करने से बचाता है। Rules: इसे सिर्फ़ एक बार await करो, कभी एक साथ दो जगह नहीं, और पूरा होने से पहले .Result मत पढ़ो; बाकी हालात में Task return करो।",
        hg: "Jab method zyadatar synchronously poora ho jaata hai, jaise cache hit, tab ValueTask ek Task allocate karne se bachata hai. Rules: ise sirf ek baar await karo, kabhi ek saath do jagah nahi, aur poora hone se pehle .Result mat padho; baaki haalaat mein Task return karo."
      },
      explain: {
        en: `<ul>
<li><code>ValueTask&lt;T&gt;</code> is a <b>struct</b> that holds either a ready result, a <code>Task&lt;T&gt;</code>, or a pooled <code>IValueTaskSource</code>. On the synchronous path there is no heap allocation.</li>
<li><b>Consumer rules</b> (because the underlying object may be reused after completion):
<ul>
<li>await it <b>once</b>; never await the same <code>ValueTask</code> twice;</li>
<li>never await it <b>concurrently</b> from two places;</li>
<li>do not call <code>.Result</code>/<code>GetAwaiter().GetResult()</code> unless it has already completed.</li>
</ul></li>
<li>Need it twice, or inside <code>Task.WhenAll</code>? Convert once with <code>.AsTask()</code>.</li>
<li>You meet it in framework APIs: <code>IAsyncDisposable.DisposeAsync()</code>, <code>Stream.ReadAsync(Memory&lt;byte&gt;)</code>, <code>Channel</code> readers.</li>
<li><b>Default to <code>Task</code></b>. Choose <code>ValueTask</code> only for hot paths where profiling shows the allocations matter and the synchronous path is common.</li>
</ul>
<p>Follow-up: "Why not use ValueTask everywhere?" — it is bigger to copy, easier to misuse, and gives nothing when the method is truly asynchronous most of the time.</p>`,
        hi: `<ul>
<li><code>ValueTask&lt;T&gt;</code> एक <b>struct</b> है जिसमें या तो तैयार result, या एक <code>Task&lt;T&gt;</code>, या pooled <code>IValueTaskSource</code> होता है। Synchronous path पर कोई heap allocation नहीं।</li>
<li><b>Consumer के rules</b> (क्योंकि पीछे का object complete होने के बाद reuse हो सकता है):
<ul>
<li>इसे <b>एक बार</b> await करो; एक ही <code>ValueTask</code> को दो बार कभी await मत करो;</li>
<li>दो जगह से <b>एक साथ</b> कभी await मत करो;</li>
<li><code>.Result</code>/<code>GetAwaiter().GetResult()</code> तभी call करो जब वो पहले से complete हो।</li>
</ul></li>
<li>दो बार चाहिए, या <code>Task.WhenAll</code> के अंदर? एक बार <code>.AsTask()</code> से convert कर लो।</li>
<li>Framework APIs में यह मिलता है: <code>IAsyncDisposable.DisposeAsync()</code>, <code>Stream.ReadAsync(Memory&lt;byte&gt;)</code>, <code>Channel</code> readers।</li>
<li><b>Default <code>Task</code> रखो</b>। <code>ValueTask</code> सिर्फ़ उन hot paths के लिए चुनो जहाँ profiling दिखाए कि allocations मायने रखते हैं और synchronous path आम है।</li>
</ul>
<p>Follow-up: "ValueTask हर जगह क्यों नहीं?" — इसे copy करना भारी है, ग़लत use करना आसान है, और जब method ज़्यादातर सच में asynchronous हो तो इससे कुछ नहीं मिलता।</p>`,
        hg: `<ul>
<li><code>ValueTask&lt;T&gt;</code> ek <b>struct</b> hai jismein ya to taiyaar result, ya ek <code>Task&lt;T&gt;</code>, ya pooled <code>IValueTaskSource</code> hota hai. Synchronous path par koi heap allocation nahi.</li>
<li><b>Consumer ke rules</b> (kyunki peeche ka object complete hone ke baad reuse ho sakta hai):
<ul>
<li>ise <b>ek baar</b> await karo; ek hi <code>ValueTask</code> ko do baar kabhi await mat karo;</li>
<li>do jagah se <b>ek saath</b> kabhi await mat karo;</li>
<li><code>.Result</code>/<code>GetAwaiter().GetResult()</code> tabhi call karo jab woh pehle se complete ho.</li>
</ul></li>
<li>Do baar chahiye, ya <code>Task.WhenAll</code> ke andar? Ek baar <code>.AsTask()</code> se convert kar lo.</li>
<li>Framework APIs mein yeh milta hai: <code>IAsyncDisposable.DisposeAsync()</code>, <code>Stream.ReadAsync(Memory&lt;byte&gt;)</code>, <code>Channel</code> readers.</li>
<li><b>Default <code>Task</code> rakho</b>. <code>ValueTask</code> sirf un hot paths ke liye chuno jahan profiling dikhaye ki allocations maayne rakhte hain aur synchronous path aam hai.</li>
</ul>
<p>Follow-up: "ValueTask har jagah kyun nahi?" — ise copy karna bhaari hai, galat use karna aasaan hai, aur jab method zyadatar sach mein asynchronous ho to isse kuch nahi milta.</p>`
      },
      code: [{
        caption: {
          en: "A cache that usually answers synchronously returns ValueTask; the consumer awaits it once",
          hi: "जो cache ज़्यादातर synchronously जवाब देता है वो ValueTask return करता है; consumer उसे एक बार await करता है",
          hg: "Jo cache zyadatar synchronously jawaab deta hai woh ValueTask return karta hai; consumer use ek baar await karta hai"
        },
        check: "compile",
        src: `using System.Collections.Concurrent;

public interface IPriceApi
{
    Task<decimal> FetchPriceAsync(string sku, CancellationToken ct);
}

public sealed class PriceCache(IPriceApi api)
{
    private readonly ConcurrentDictionary<string, decimal> _cache = new();

    // Most calls hit the cache and finish synchronously: no Task allocation.
    public ValueTask<decimal> GetPriceAsync(string sku, CancellationToken ct = default)
    {
        if (_cache.TryGetValue(sku, out decimal price))
            return ValueTask.FromResult(price);
        return new ValueTask<decimal>(LoadAsync(sku, ct));   // a cache miss wraps a real Task
    }

    private async Task<decimal> LoadAsync(string sku, CancellationToken ct)
    {
        decimal price = await api.FetchPriceAsync(sku, ct);
        _cache[sku] = price;
        return price;
    }
}

public sealed class CartTotals(PriceCache prices)
{
    public async Task<decimal> TotalAsync(IEnumerable<string> skus, CancellationToken ct)
    {
        decimal total = 0;
        foreach (string sku in skus)
            total += await prices.GetPriceAsync(sku, ct);     // GOOD: awaited exactly once

        // BAD:  var vt = prices.GetPriceAsync("X"); await vt; await vt;   (awaited twice)
        // OK:   Task<decimal> t = prices.GetPriceAsync("X").AsTask();     (when you need a Task)
        return total;
    }
}`
      }]
    },
    {
      id: "cancellation-token",
      depth: "detailed",
      q: "How do you cancel an async operation in .NET?",
      answer: "Pass a CancellationToken from a CancellationTokenSource through every async call. Cancellation is cooperative: code checks the token or hands it to APIs, which then throw OperationCanceledException.",
      meaning: {
        hi: "CancellationTokenSource से मिला CancellationToken हर async call में आगे pass करो। Cancellation cooperative है: code token check करता है या उसे APIs को देता है, जो फिर OperationCanceledException throw करती हैं।",
        hg: "CancellationTokenSource se mila CancellationToken har async call mein aage pass karo. Cancellation cooperative hai: code token check karta hai ya use APIs ko deta hai, jo phir OperationCanceledException throw karti hain."
      },
      explain: {
        en: `<ul>
<li><b>Source and token</b>: <code>CancellationTokenSource</code> can <code>Cancel()</code> or <code>CancelAfter(TimeSpan.FromSeconds(5))</code> (a timeout). Its <code>Token</code> is passed down; it can only be <i>observed</i>, not cancelled, by the receiver.</li>
<li><b>Observing</b>: pass it to APIs (<code>ToListAsync(ct)</code>, <code>GetAsync(url, ct)</code>, <code>Task.Delay(ms, ct)</code>), or call <code>ct.ThrowIfCancellationRequested()</code> in your own loops.</li>
<li><b>Combining</b>: <code>CancellationTokenSource.CreateLinkedTokenSource(requestToken, timeoutToken)</code> cancels when either fires.</li>
<li><b>ASP.NET Core</b>: a <code>CancellationToken</code> action parameter is bound to <code>HttpContext.RequestAborted</code>. Passing it to EF Core stops a long query when the user closes the browser.</li>
<li><b>Handling</b>: <code>catch (OperationCanceledException) when (ct.IsCancellationRequested)</code> — expected, log at most as information. A timeout from <code>HttpClient.Timeout</code> also shows up as <code>TaskCanceledException</code>, so check which token fired.</li>
</ul>
<p>Follow-up: "Does cancelling stop a thread?" — No. Nothing is aborted (<code>Thread.Abort</code> is not supported in .NET Core). Code that never checks the token keeps running.</p>
<p><b>TL angle:</b> code-review checklist — every public async I/O method takes <code>CancellationToken ct = default</code> as the last parameter and passes it on.</p>`,
        hi: `<ul>
<li><b>Source और token</b>: <code>CancellationTokenSource</code> <code>Cancel()</code> या <code>CancelAfter(TimeSpan.FromSeconds(5))</code> (timeout) कर सकता है। उसका <code>Token</code> नीचे pass होता है; लेने वाला उसे सिर्फ़ <i>देख</i> सकता है, cancel नहीं कर सकता।</li>
<li><b>देखना (observe)</b>: इसे APIs को दो (<code>ToListAsync(ct)</code>, <code>GetAsync(url, ct)</code>, <code>Task.Delay(ms, ct)</code>), या अपने loops में <code>ct.ThrowIfCancellationRequested()</code> call करो।</li>
<li><b>जोड़ना</b>: <code>CancellationTokenSource.CreateLinkedTokenSource(requestToken, timeoutToken)</code> दोनों में से कोई भी fire हो तो cancel करता है।</li>
<li><b>ASP.NET Core</b>: action का <code>CancellationToken</code> parameter <code>HttpContext.RequestAborted</code> से bind होता है। इसे EF Core को देने से user के browser बंद करने पर लंबी query रुक जाती है।</li>
<li><b>Handling</b>: <code>catch (OperationCanceledException) when (ct.IsCancellationRequested)</code> — expected है, ज़्यादा से ज़्यादा information की तरह log करो। <code>HttpClient.Timeout</code> वाला timeout भी <code>TaskCanceledException</code> बनकर आता है, इसलिए check करो कि कौन सा token fire हुआ।</li>
</ul>
<p>Follow-up: "क्या cancel करने से thread रुक जाता है?" — नहीं। कुछ भी abort नहीं होता (.NET Core में <code>Thread.Abort</code> supported नहीं)। जो code token कभी check नहीं करता, वो चलता रहता है।</p>
<p><b>TL angle:</b> code-review checklist — हर public async I/O method आख़िरी parameter के रूप में <code>CancellationToken ct = default</code> ले और उसे आगे pass करे।</p>`,
        hg: `<ul>
<li><b>Source aur token</b>: <code>CancellationTokenSource</code> <code>Cancel()</code> ya <code>CancelAfter(TimeSpan.FromSeconds(5))</code> (timeout) kar sakta hai. Uska <code>Token</code> neeche pass hota hai; lene wala use sirf <i>dekh</i> sakta hai, cancel nahi kar sakta.</li>
<li><b>Dekhna (observe)</b>: ise APIs ko do (<code>ToListAsync(ct)</code>, <code>GetAsync(url, ct)</code>, <code>Task.Delay(ms, ct)</code>), ya apne loops mein <code>ct.ThrowIfCancellationRequested()</code> call karo.</li>
<li><b>Jodna</b>: <code>CancellationTokenSource.CreateLinkedTokenSource(requestToken, timeoutToken)</code> dono mein se koi bhi fire ho to cancel karta hai.</li>
<li><b>ASP.NET Core</b>: action ka <code>CancellationToken</code> parameter <code>HttpContext.RequestAborted</code> se bind hota hai. Ise EF Core ko dene se user ke browser band karne par lambi query ruk jaati hai.</li>
<li><b>Handling</b>: <code>catch (OperationCanceledException) when (ct.IsCancellationRequested)</code> — expected hai, zyada se zyada information ki tarah log karo. <code>HttpClient.Timeout</code> wala timeout bhi <code>TaskCanceledException</code> bankar aata hai, isliye check karo ki kaun sa token fire hua.</li>
</ul>
<p>Follow-up: "Kya cancel karne se thread ruk jaata hai?" — Nahi. Kuch bhi abort nahi hota (.NET Core mein <code>Thread.Abort</code> supported nahi). Jo code token kabhi check nahi karta, woh chalta rehta hai.</p>
<p><b>TL angle:</b> code-review checklist — har public async I/O method aakhri parameter ke roop mein <code>CancellationToken ct = default</code> le aur use aage pass kare.</p>`
      }
    },
    {
      id: "async-streams",
      depth: "detailed",
      q: "What are IAsyncEnumerable and IAsyncDisposable used for?",
      answer: "IAsyncEnumerable&lt;T&gt; streams items one by one with await foreach, without loading everything first. IAsyncDisposable provides DisposeAsync for cleanup that needs I/O, and you use it with await using.",
      meaning: {
        hi: "IAsyncEnumerable&lt;T&gt; items को await foreach से एक-एक करके stream करता है, पहले सब कुछ load किए बिना। IAsyncDisposable ऐसे cleanup के लिए DisposeAsync देता है जिसमें I/O चाहिए, और इसे await using के साथ use करते हो।",
        hg: "IAsyncEnumerable&lt;T&gt; items ko await foreach se ek-ek karke stream karta hai, pehle sab kuch load kiye bina. IAsyncDisposable aise cleanup ke liye DisposeAsync deta hai jismein I/O chahiye, aur ise await using ke saath use karte ho."
      },
      explain: {
        en: `<ul>
<li><b>Producer</b>: <code>async IAsyncEnumerable&lt;Order&gt; ReadOrdersAsync([EnumeratorCancellation] CancellationToken ct = default)</code> with <code>await</code> and <code>yield return</code> inside. <b>Consumer</b>: <code>await foreach (var o in ReadOrdersAsync().WithCancellation(ct))</code>.</li>
<li>Compared with <code>Task&lt;List&lt;T&gt;&gt;</code>: the first item is available sooner and memory stays flat, because items are not collected first.</li>
<li>Real uses: EF Core <code>query.AsAsyncEnumerable()</code>; ASP.NET Core actions returning <code>IAsyncEnumerable&lt;T&gt;</code> (System.Text.Json streams the array); gRPC server streaming; reading a paged external API page by page.</li>
<li><b>LINQ over async streams</b>: .NET 10 includes <code>System.Linq.AsyncEnumerable</code> (<code>Where</code>, <code>Select</code>, <code>ToListAsync</code>... on <code>IAsyncEnumerable&lt;T&gt;</code>); earlier versions used the <code>System.Linq.Async</code> NuGet package.</li>
<li><b>IAsyncDisposable</b>: <code>ValueTask DisposeAsync()</code>. <code>await using var db = new AppDbContext(...);</code> — <code>DbContext</code>, <code>Stream</code>, <code>Utf8JsonWriter</code> and many network types support it. A class that holds an async-disposable field should implement it too.</li>
</ul>
<p>Follow-up: "Is <code>IAsyncEnumerable</code> the same as <code>IQueryable</code>?" — No. <code>IQueryable</code> builds a query to translate (e.g. to SQL); <code>IAsyncEnumerable</code> just delivers results asynchronously one by one (LINQ and EF details on Days 4–6).</p>`,
        hi: `<ul>
<li><b>Producer</b>: अंदर <code>await</code> और <code>yield return</code> के साथ <code>async IAsyncEnumerable&lt;Order&gt; ReadOrdersAsync([EnumeratorCancellation] CancellationToken ct = default)</code>। <b>Consumer</b>: <code>await foreach (var o in ReadOrdersAsync().WithCancellation(ct))</code>।</li>
<li><code>Task&lt;List&lt;T&gt;&gt;</code> के मुक़ाबले: पहला item जल्दी मिलता है और memory एक जैसी रहती है, क्योंकि items पहले जमा नहीं किए जाते।</li>
<li>असली उपयोग: EF Core <code>query.AsAsyncEnumerable()</code>; <code>IAsyncEnumerable&lt;T&gt;</code> return करने वाले ASP.NET Core actions (System.Text.Json array को stream करता है); gRPC server streaming; किसी paged external API को page by page पढ़ना।</li>
<li><b>Async streams पर LINQ</b>: .NET 10 में <code>System.Linq.AsyncEnumerable</code> शामिल है (<code>IAsyncEnumerable&lt;T&gt;</code> पर <code>Where</code>, <code>Select</code>, <code>ToListAsync</code>...); पहले के versions में <code>System.Linq.Async</code> NuGet package use होता था।</li>
<li><b>IAsyncDisposable</b>: <code>ValueTask DisposeAsync()</code>। <code>await using var db = new AppDbContext(...);</code> — <code>DbContext</code>, <code>Stream</code>, <code>Utf8JsonWriter</code> और कई network types इसे support करते हैं। जिस class में async-disposable field है, उसे भी इसे implement करना चाहिए।</li>
</ul>
<p>Follow-up: "क्या <code>IAsyncEnumerable</code> और <code>IQueryable</code> एक ही हैं?" — नहीं। <code>IQueryable</code> translate करने के लिए query बनाता है (जैसे SQL में); <code>IAsyncEnumerable</code> बस results को asynchronously एक-एक करके देता है (LINQ और EF की details Days 4–6 में)।</p>`,
        hg: `<ul>
<li><b>Producer</b>: andar <code>await</code> aur <code>yield return</code> ke saath <code>async IAsyncEnumerable&lt;Order&gt; ReadOrdersAsync([EnumeratorCancellation] CancellationToken ct = default)</code>. <b>Consumer</b>: <code>await foreach (var o in ReadOrdersAsync().WithCancellation(ct))</code>.</li>
<li><code>Task&lt;List&lt;T&gt;&gt;</code> ke muqaable: pehla item jaldi milta hai aur memory ek jaisi rehti hai, kyunki items pehle jama nahi kiye jaate.</li>
<li>Asli upyog: EF Core <code>query.AsAsyncEnumerable()</code>; <code>IAsyncEnumerable&lt;T&gt;</code> return karne wale ASP.NET Core actions (System.Text.Json array ko stream karta hai); gRPC server streaming; kisi paged external API ko page by page padhna.</li>
<li><b>Async streams par LINQ</b>: .NET 10 mein <code>System.Linq.AsyncEnumerable</code> shaamil hai (<code>IAsyncEnumerable&lt;T&gt;</code> par <code>Where</code>, <code>Select</code>, <code>ToListAsync</code>...); pehle ke versions mein <code>System.Linq.Async</code> NuGet package use hota tha.</li>
<li><b>IAsyncDisposable</b>: <code>ValueTask DisposeAsync()</code>. <code>await using var db = new AppDbContext(...);</code> — <code>DbContext</code>, <code>Stream</code>, <code>Utf8JsonWriter</code> aur kai network types ise support karte hain. Jis class mein async-disposable field hai, use bhi ise implement karna chahiye.</li>
</ul>
<p>Follow-up: "Kya <code>IAsyncEnumerable</code> aur <code>IQueryable</code> ek hi hain?" — Nahi. <code>IQueryable</code> translate karne ke liye query banata hai (jaise SQL mein); <code>IAsyncEnumerable</code> bas results ko asynchronously ek-ek karke deta hai (LINQ aur EF ki details Days 4–6 mein).</p>`
      }
    },
    {
      id: "lock-with-await",
      depth: "detailed",
      q: "Can you use await inside a lock? How do you protect shared state in async code?",
      answer: "No — it is compile error CS1996, because a lock belongs to a thread and code after await may resume on another thread. Use SemaphoreSlim(1, 1) with await WaitAsync() and Release() in a finally block.",
      meaning: {
        hi: "नहीं — यह compile error CS1996 है, क्योंकि lock एक thread का होता है और await के बाद code दूसरे thread पर चल सकता है। SemaphoreSlim(1, 1) use करो: await WaitAsync() और finally block में Release()।",
        hg: "Nahi — yeh compile error CS1996 hai, kyunki lock ek thread ka hota hai aur await ke baad code doosre thread par chal sakta hai. SemaphoreSlim(1, 1) use karo: await WaitAsync() aur finally block mein Release()."
      },
      explain: {
        en: `<ul>
<li><code>lock</code> uses <code>Monitor</code> (or the .NET 9 <code>Lock</code> type, Day 2), which is <b>thread-affine</b>: the same thread must release it. After an <code>await</code> you may be on a different thread, and holding a lock while waiting for I/O would block others for a long time anyway.</li>
<li><b><code>SemaphoreSlim(1, 1)</code></b> = an async-friendly lock: <code>await _gate.WaitAsync(ct); try { ... } finally { _gate.Release(); }</code> (see the pitfalls section code).</li>
<li>It is <b>not re-entrant</b>: calling a method that waits on the same semaphore while holding it deadlocks.</li>
<li><b>Often better: avoid shared mutable state</b> — <code>Interlocked</code> for counters, <code>ConcurrentDictionary</code> (Day 2), <code>Lazy&lt;Task&lt;T&gt;&gt;</code> for one-time async initialisation, or a <code>Channel&lt;T&gt;</code> so one consumer owns the state.</li>
</ul>
<p>Follow-up: "Your API runs on 3 servers. Does SemaphoreSlim protect the data?" — No, it works only <b>inside one process</b>. Across servers you need a database constraint/transaction, optimistic concurrency (EF Core concurrency tokens, Day 6), or a distributed lock (e.g. Redis).</p>`,
        hi: `<ul>
<li><code>lock</code> <code>Monitor</code> (या .NET 9 का <code>Lock</code> type, Day 2) use करता है, जो <b>thread-affine</b> है: उसी thread को release करना होता है। <code>await</code> के बाद आप दूसरे thread पर हो सकते हो, और I/O के इंतज़ार में lock पकड़े रखना वैसे भी दूसरों को लंबे समय तक रोक देगा।</li>
<li><b><code>SemaphoreSlim(1, 1)</code></b> = async के साथ चलने वाला lock: <code>await _gate.WaitAsync(ct); try { ... } finally { _gate.Release(); }</code> (pitfalls section का code देखो)।</li>
<li>यह <b>re-entrant नहीं</b> है: पकड़े रहते हुए ऐसे method को call करना जो उसी semaphore पर wait करता है, deadlock कर देगा।</li>
<li><b>अक्सर बेहतर: shared mutable state से बचो</b> — counters के लिए <code>Interlocked</code>, <code>ConcurrentDictionary</code> (Day 2), one-time async initialisation के लिए <code>Lazy&lt;Task&lt;T&gt;&gt;</code>, या <code>Channel&lt;T&gt;</code> ताकि state का owner एक ही consumer हो।</li>
</ul>
<p>Follow-up: "आपकी API 3 servers पर चलती है। क्या SemaphoreSlim data को बचाएगा?" — नहीं, यह सिर्फ़ <b>एक process के अंदर</b> काम करता है। Servers के पार database constraint/transaction, optimistic concurrency (EF Core concurrency tokens, Day 6), या distributed lock (जैसे Redis) चाहिए।</p>`,
        hg: `<ul>
<li><code>lock</code> <code>Monitor</code> (ya .NET 9 ka <code>Lock</code> type, Day 2) use karta hai, jo <b>thread-affine</b> hai: usi thread ko release karna hota hai. <code>await</code> ke baad aap doosre thread par ho sakte ho, aur I/O ke intezaar mein lock pakde rakhna waise bhi doosron ko lambe samay tak rok dega.</li>
<li><b><code>SemaphoreSlim(1, 1)</code></b> = async ke saath chalne wala lock: <code>await _gate.WaitAsync(ct); try { ... } finally { _gate.Release(); }</code> (pitfalls section ka code dekho).</li>
<li>Yeh <b>re-entrant nahi</b> hai: pakde rehte hue aise method ko call karna jo usi semaphore par wait karta hai, deadlock kar dega.</li>
<li><b>Aksar behtar: shared mutable state se bacho</b> — counters ke liye <code>Interlocked</code>, <code>ConcurrentDictionary</code> (Day 2), one-time async initialisation ke liye <code>Lazy&lt;Task&lt;T&gt;&gt;</code>, ya <code>Channel&lt;T&gt;</code> taaki state ka owner ek hi consumer ho.</li>
</ul>
<p>Follow-up: "Aapki API 3 servers par chalti hai. Kya SemaphoreSlim data ko bachayega?" — Nahi, yeh sirf <b>ek process ke andar</b> kaam karta hai. Servers ke paar database constraint/transaction, optimistic concurrency (EF Core concurrency tokens, Day 6), ya distributed lock (jaise Redis) chahiye.</p>`
      }
    },
    {
      id: "exception-strategy",
      depth: "detailed",
      q: "How would you design exception handling for an ASP.NET Core application?",
      answer: "Handle unexpected exceptions in one global place that logs once and returns ProblemDetails. Throw specific exceptions for real failures, and return results for expected cases like validation errors or not-found.",
      meaning: {
        hi: "Unexpected exceptions को एक global जगह संभालो जो एक बार log करे और ProblemDetails return करे। असली failures के लिए specific exceptions throw करो, और validation errors या not-found जैसे expected cases के लिए results return करो।",
        hg: "Unexpected exceptions ko ek global jagah sambhaalo jo ek baar log kare aur ProblemDetails return kare. Asli failures ke liye specific exceptions throw karo, aur validation errors ya not-found jaise expected cases ke liye results return karo."
      },
      explain: {
        en: `<ul>
<li><b>One global handler</b>: <code>builder.Services.AddProblemDetails();</code>, <code>app.UseExceptionHandler();</code>, plus an <code>IExceptionHandler</code> implementation (ASP.NET Core 8+) that maps exception types to status codes — a pattern-matching <code>switch</code> works nicely (e.g. <code>NotFoundException</code> → 404, <code>ConflictException</code> → 409, everything else → 500).</li>
<li><b>Log once</b>, at the edge, with the trace/correlation id — not catch-log-rethrow in every layer.</li>
<li><b>Never leak internals</b>: no stack traces or SQL text in production responses; a generic 500 message plus the trace id the user can quote to support.</li>
<li><b>Expected outcomes are not exceptions</b>: validation errors (400 with field errors), not found (404). Many teams use a <b>Result</b> type for these. This is a trade-off: results make failure paths explicit and cheap; exceptions keep the happy path simpler. Agree on one style per codebase.</li>
<li><b>Transient failures</b> (timeouts, 503s): retry with backoff and circuit breakers using <code>Microsoft.Extensions.Http.Resilience</code> (built on Polly) instead of hand-written retry loops.</li>
<li>Background services need their own try/catch per work item — an unhandled exception there can stop the service (by default the host stops in .NET 6+).</li>
</ul>
<p>Follow-up: "Where do you catch exceptions then?" — only where you can do something useful: retry, translate (repository → domain exception), add context, or clean up. Everything else bubbles up to the global handler.</p>`,
        hi: `<ul>
<li><b>एक global handler</b>: <code>builder.Services.AddProblemDetails();</code>, <code>app.UseExceptionHandler();</code>, और एक <code>IExceptionHandler</code> implementation (ASP.NET Core 8+) जो exception types को status codes में map करे — pattern-matching वाला <code>switch</code> यहाँ बढ़िया चलता है (जैसे <code>NotFoundException</code> → 404, <code>ConflictException</code> → 409, बाकी सब → 500)।</li>
<li>Edge पर, trace/correlation id के साथ <b>एक बार log करो</b> — हर layer में catch-log-rethrow नहीं।</li>
<li><b>Internals कभी leak मत करो</b>: production responses में stack traces या SQL text नहीं; एक generic 500 message और trace id, जिसे user support को बता सके।</li>
<li><b>Expected नतीजे exceptions नहीं हैं</b>: validation errors (field errors के साथ 400), not found (404)। कई teams इनके लिए <b>Result</b> type use करती हैं। यह एक trade-off है: results failure paths को साफ़ और सस्ता बनाते हैं; exceptions happy path को आसान रखते हैं। हर codebase के लिए एक style तय करो।</li>
<li><b>Transient failures</b> (timeouts, 503s): हाथ से लिखे retry loops की जगह <code>Microsoft.Extensions.Http.Resilience</code> (Polly पर बना) से backoff के साथ retry और circuit breakers।</li>
<li>Background services में हर work item के लिए अपना try/catch चाहिए — वहाँ unhandled exception service को रोक सकता है (.NET 6+ में by default host रुक जाता है)।</li>
</ul>
<p>Follow-up: "तो exceptions पकड़ते कहाँ हो?" — सिर्फ़ वहाँ जहाँ कुछ काम का कर सको: retry, translate (repository → domain exception), context जोड़ना, या cleanup। बाकी सब global handler तक ऊपर जाने दो।</p>`,
        hg: `<ul>
<li><b>Ek global handler</b>: <code>builder.Services.AddProblemDetails();</code>, <code>app.UseExceptionHandler();</code>, aur ek <code>IExceptionHandler</code> implementation (ASP.NET Core 8+) jo exception types ko status codes mein map kare — pattern-matching wala <code>switch</code> yahan badhiya chalta hai (jaise <code>NotFoundException</code> → 404, <code>ConflictException</code> → 409, baaki sab → 500).</li>
<li>Edge par, trace/correlation id ke saath <b>ek baar log karo</b> — har layer mein catch-log-rethrow nahi.</li>
<li><b>Internals kabhi leak mat karo</b>: production responses mein stack traces ya SQL text nahi; ek generic 500 message aur trace id, jise user support ko bata sake.</li>
<li><b>Expected nateeje exceptions nahi hain</b>: validation errors (field errors ke saath 400), not found (404). Kai teams inke liye <b>Result</b> type use karti hain. Yeh ek trade-off hai: results failure paths ko saaf aur sasta banate hain; exceptions happy path ko aasaan rakhte hain. Har codebase ke liye ek style tay karo.</li>
<li><b>Transient failures</b> (timeouts, 503s): haath se likhe retry loops ki jagah <code>Microsoft.Extensions.Http.Resilience</code> (Polly par bana) se backoff ke saath retry aur circuit breakers.</li>
<li>Background services mein har work item ke liye apna try/catch chahiye — wahan unhandled exception service ko rok sakta hai (.NET 6+ mein by default host ruk jaata hai).</li>
</ul>
<p>Follow-up: "To exceptions pakadte kahan ho?" — sirf wahan jahan kuch kaam ka kar sako: retry, translate (repository → domain exception), context jodna, ya cleanup. Baaki sab global handler tak upar jaane do.</p>`
      }
    },
    {
      id: "finalizer-vs-dispose",
      depth: "detailed",
      q: "What is the difference between a finalizer and Dispose? Explain the Dispose pattern.",
      answer: "Your code calls Dispose to release resources at a known time; the GC calls a finalizer at an unknown time as a safety net. The Dispose pattern shares the cleanup and calls GC.SuppressFinalize.",
      meaning: {
        hi: "Dispose आपका code call करता है ताकि resources तय समय पर छूट जाएँ। Finalizer GC किसी अनजान समय पर safety net की तरह call करता है। Dispose pattern दोनों के लिए cleanup code share करता है और GC.SuppressFinalize call करता है।",
        hg: "Dispose aapka code call karta hai taaki resources tay samay par chhoot jaayein. Finalizer GC kisi anjaan samay par safety net ki tarah call karta hai. Dispose pattern dono ke liye cleanup code share karta hai aur GC.SuppressFinalize call karta hai."
      },
      explain: {
        en: `<ul>
<li><b>Dispose</b>: deterministic — you (or <code>using</code>) call it. Can clean up both managed fields (other disposables) and unmanaged handles.</li>
<li><b>Finalizer</b> (<code>~ClassName()</code>, compiles to an override of <code>Object.Finalize</code>): non-deterministic, runs on the finalizer thread, order between objects is not guaranteed, so it must touch <b>only unmanaged</b> resources. Objects with finalizers survive an extra GC — a real cost.</li>
<li><b>Pattern</b>:
<ul>
<li><code>public void Dispose() { Dispose(true); GC.SuppressFinalize(this); }</code></li>
<li><code>protected virtual void Dispose(bool disposing)</code> — if <code>disposing</code>, dispose managed fields; always free unmanaged ones; guard with a <code>_disposed</code> flag.</li>
<li><code>~ClassName() =&gt; Dispose(false);</code> — only if the class directly owns an unmanaged handle.</li>
</ul></li>
<li><b>Modern advice</b>: wrap native handles in a <code>SafeHandle</code> subclass (it has the finalizer) — then your class needs only the simple sealed <code>Dispose</code>, no finalizer. Analyzers CA1063/CA1816 check the pattern when enabled.</li>
</ul>
<p>Follow-up: "Why <code>GC.SuppressFinalize</code>?" — after a proper <code>Dispose</code> there is nothing left for the finalizer to do, so it removes the object from the finalization queue and avoids the extra GC cost. It is called even without a finalizer, in case a derived class adds one (CA1816).</p>`,
        hi: `<ul>
<li><b>Dispose</b>: deterministic — आप (या <code>using</code>) इसे call करते हो। यह managed fields (दूसरे disposables) और unmanaged handles दोनों साफ़ कर सकता है।</li>
<li><b>Finalizer</b> (<code>~ClassName()</code>, compile होकर <code>Object.Finalize</code> का override बनता है): non-deterministic, finalizer thread पर चलता है, objects के बीच order की कोई guarantee नहीं, इसलिए इसे <b>सिर्फ़ unmanaged</b> resources छूने चाहिए। Finalizer वाले objects एक extra GC तक बचे रहते हैं — यह असली cost है।</li>
<li><b>Pattern</b>:
<ul>
<li><code>public void Dispose() { Dispose(true); GC.SuppressFinalize(this); }</code></li>
<li><code>protected virtual void Dispose(bool disposing)</code> — अगर <code>disposing</code> है तो managed fields dispose करो; unmanaged वाले हमेशा free करो; <code>_disposed</code> flag से guard करो।</li>
<li><code>~ClassName() =&gt; Dispose(false);</code> — सिर्फ़ तब जब class सीधे किसी unmanaged handle की owner हो।</li>
</ul></li>
<li><b>आज की सलाह</b>: native handles को <code>SafeHandle</code> subclass में wrap करो (उसमें finalizer है) — फिर आपकी class को सिर्फ़ simple sealed <code>Dispose</code> चाहिए, finalizer नहीं। Enable होने पर analyzers CA1063/CA1816 pattern check करते हैं।</li>
</ul>
<p>Follow-up: "<code>GC.SuppressFinalize</code> क्यों?" — ठीक से <code>Dispose</code> होने के बाद finalizer के लिए कुछ नहीं बचता, इसलिए यह object को finalization queue से हटा देता है और extra GC cost बचाता है। Finalizer न हो तब भी इसे call करते हैं, अगर कोई derived class finalizer जोड़ दे (CA1816)।</p>`,
        hg: `<ul>
<li><b>Dispose</b>: deterministic — aap (ya <code>using</code>) ise call karte ho. Yeh managed fields (doosre disposables) aur unmanaged handles dono saaf kar sakta hai.</li>
<li><b>Finalizer</b> (<code>~ClassName()</code>, compile hokar <code>Object.Finalize</code> ka override banta hai): non-deterministic, finalizer thread par chalta hai, objects ke beech order ki koi guarantee nahi, isliye ise <b>sirf unmanaged</b> resources chhoone chahiye. Finalizer wale objects ek extra GC tak bache rehte hain — yeh asli cost hai.</li>
<li><b>Pattern</b>:
<ul>
<li><code>public void Dispose() { Dispose(true); GC.SuppressFinalize(this); }</code></li>
<li><code>protected virtual void Dispose(bool disposing)</code> — agar <code>disposing</code> hai to managed fields dispose karo; unmanaged wale hamesha free karo; <code>_disposed</code> flag se guard karo.</li>
<li><code>~ClassName() =&gt; Dispose(false);</code> — sirf tab jab class seedhe kisi unmanaged handle ki owner ho.</li>
</ul></li>
<li><b>Aaj ki salaah</b>: native handles ko <code>SafeHandle</code> subclass mein wrap karo (usmein finalizer hai) — phir aapki class ko sirf simple sealed <code>Dispose</code> chahiye, finalizer nahi. Enable hone par analyzers CA1063/CA1816 pattern check karte hain.</li>
</ul>
<p>Follow-up: "<code>GC.SuppressFinalize</code> kyun?" — theek se <code>Dispose</code> hone ke baad finalizer ke liye kuch nahi bachta, isliye yeh object ko finalization queue se hata deta hai aur extra GC cost bachata hai. Finalizer na ho tab bhi ise call karte hain, agar koi derived class finalizer jod de (CA1816).</p>`
      }
    },
    {
      id: "loh-memory-leaks",
      depth: "detailed",
      q: "What is the Large Object Heap, and can a .NET application have memory leaks?",
      answer: "The LOH holds objects of 85,000 bytes or more, collected with Gen 2 and not compacted by default. Yes, leaks happen when objects stay referenced, like a growing static cache or forgotten event handlers.",
      meaning: {
        hi: "LOH में 85,000 bytes या उससे बड़े objects रहते हैं; यह Gen 2 के साथ collect होता है और by default compact नहीं होता। हाँ, leaks तब होते हैं जब objects referenced रह जाते हैं, जैसे बढ़ती static cache या कभी न हटाए गए event handlers।",
        hg: "LOH mein 85,000 bytes ya usse bade objects rehte hain; yeh Gen 2 ke saath collect hota hai aur by default compact nahi hota. Haan, leaks tab hote hain jab objects referenced reh jaate hain, jaise badhti static cache ya kabhi na hataaye gaye event handlers."
      },
      explain: {
        en: `<ul>
<li><b>Why a separate heap</b>: copying huge objects during compaction is expensive, so the LOH is swept but not compacted by default. Many short-lived large buffers → fragmentation, more memory, more full GCs. One-time compaction can be requested with <code>GCSettings.LargeObjectHeapCompactionMode</code>.</li>
<li><b>Avoid LOH churn</b>: <code>ArrayPool&lt;T&gt;.Shared.Rent/Return</code> for big buffers; stream data instead of loading whole files into a <code>byte[]</code> or <code>string</code>; <code>RecyclableMemoryStream</code> (Microsoft.IO package) instead of many big <code>MemoryStream</code>s.</li>
<li><b>Managed "leaks"</b> = still-reachable objects: static <code>Dictionary</code> caches with no eviction (use <code>IMemoryCache</code> with expiration/size limits), events from a long-lived publisher to short-lived subscribers, timers never disposed, a singleton capturing a scoped service.</li>
<li><b>Unmanaged leaks</b>: undisposed handles, connections, native memory.</li>
<li><b>How to investigate</b>: <code>dotnet-counters</code> to confirm growth (GC heap size, Gen 2 size); take two <code>dotnet-gcdump</code> snapshots some minutes apart and compare which types grow; follow the "paths to root" in Visual Studio or PerfView.</li>
</ul>
<p>Follow-up: "Memory grows in production but drops after a GC — is that a leak?" — Not necessarily. Server GC can let the heap grow while memory is available. A leak is memory that keeps growing <b>after full GCs</b> under steady load.</p>`,
        hi: `<ul>
<li><b>अलग heap क्यों</b>: compaction के दौरान बहुत बड़े objects copy करना महँगा है, इसलिए LOH by default sweep होता है पर compact नहीं। बहुत सारे थोड़ी देर वाले बड़े buffers → fragmentation, ज़्यादा memory, ज़्यादा full GCs। एक बार का compaction <code>GCSettings.LargeObjectHeapCompactionMode</code> से माँगा जा सकता है।</li>
<li><b>LOH की उथल-पुथल से बचो</b>: बड़े buffers के लिए <code>ArrayPool&lt;T&gt;.Shared.Rent/Return</code>; पूरी file को <code>byte[]</code> या <code>string</code> में load करने की जगह data stream करो; बहुत सारे बड़े <code>MemoryStream</code> की जगह <code>RecyclableMemoryStream</code> (Microsoft.IO package)।</li>
<li><b>Managed "leaks"</b> = अब भी reachable objects: बिना eviction वाली static <code>Dictionary</code> caches (expiration/size limits के साथ <code>IMemoryCache</code> use करो), लंबे समय वाले publisher से थोड़ी देर वाले subscribers के events, कभी dispose न हुए timers, scoped service को पकड़े हुए singleton।</li>
<li><b>Unmanaged leaks</b>: dispose न हुए handles, connections, native memory।</li>
<li><b>जाँच कैसे करें</b>: growth confirm करने के लिए <code>dotnet-counters</code> (GC heap size, Gen 2 size); कुछ मिनट के अंतर पर दो <code>dotnet-gcdump</code> snapshots लो और compare करो कि कौन से types बढ़ रहे हैं; Visual Studio या PerfView में "paths to root" follow करो।</li>
</ul>
<p>Follow-up: "Production में memory बढ़ती है पर GC के बाद गिर जाती है — क्या यह leak है?" — ज़रूरी नहीं। Memory available हो तो Server GC heap को बढ़ने देता है। Leak वो memory है जो steady load पर <b>full GCs के बाद भी</b> बढ़ती रहे।</p>`,
        hg: `<ul>
<li><b>Alag heap kyun</b>: compaction ke dauraan bahut bade objects copy karna mehenga hai, isliye LOH by default sweep hota hai par compact nahi. Bahut saare thodi der wale bade buffers → fragmentation, zyada memory, zyada full GCs. Ek baar ka compaction <code>GCSettings.LargeObjectHeapCompactionMode</code> se maanga ja sakta hai.</li>
<li><b>LOH ki uthal-puthal se bacho</b>: bade buffers ke liye <code>ArrayPool&lt;T&gt;.Shared.Rent/Return</code>; poori file ko <code>byte[]</code> ya <code>string</code> mein load karne ki jagah data stream karo; bahut saare bade <code>MemoryStream</code> ki jagah <code>RecyclableMemoryStream</code> (Microsoft.IO package).</li>
<li><b>Managed "leaks"</b> = ab bhi reachable objects: bina eviction wali static <code>Dictionary</code> caches (expiration/size limits ke saath <code>IMemoryCache</code> use karo), lambe samay wale publisher se thodi der wale subscribers ke events, kabhi dispose na hue timers, scoped service ko pakde hue singleton.</li>
<li><b>Unmanaged leaks</b>: dispose na hue handles, connections, native memory.</li>
<li><b>Jaanch kaise karein</b>: growth confirm karne ke liye <code>dotnet-counters</code> (GC heap size, Gen 2 size); kuch minute ke antar par do <code>dotnet-gcdump</code> snapshots lo aur compare karo ki kaun se types badh rahe hain; Visual Studio ya PerfView mein "paths to root" follow karo.</li>
</ul>
<p>Follow-up: "Production mein memory badhti hai par GC ke baad gir jaati hai — kya yeh leak hai?" — Zaroori nahi. Memory available ho to Server GC heap ko badhne deta hai. Leak woh memory hai jo steady load par <b>full GCs ke baad bhi</b> badhti rahe.</p>`
      }
    },
    {
      id: "server-vs-workstation-gc",
      depth: "detailed",
      q: "What is the difference between Workstation GC and Server GC?",
      answer: "Workstation GC, the default for desktop and console apps, uses one heap and favours lower memory. Server GC, the default for ASP.NET Core, uses a heap and GC thread per core: more throughput, more memory.",
      meaning: {
        hi: "Workstation GC, जो desktop और console apps का default है, एक heap use करता है और कम memory पर ध्यान देता है। Server GC, जो ASP.NET Core का default है, हर core के लिए एक heap और GC thread use करता है — ज़्यादा throughput, पर memory भी ज़्यादा।",
        hg: "Workstation GC, jo desktop aur console apps ka default hai, ek heap use karta hai aur kam memory par dhyaan deta hai. Server GC, jo ASP.NET Core ka default hai, har core ke liye ek heap aur GC thread use karta hai — zyada throughput, par memory bhi zyada."
      },
      explain: {
        en: `<ul>
<li><b>Setting</b>: <code>&lt;ServerGarbageCollection&gt;true|false&lt;/ServerGarbageCollection&gt;</code> in the project file, or <code>System.GC.Server</code> in <code>runtimeconfig.json</code>. <code>GCSettings.IsServerGC</code> tells you what is running.</li>
<li><b>Background GC</b> (<code>&lt;ConcurrentGarbageCollection&gt;</code>, on by default) works with both: most Gen 2 work happens while app threads run.</li>
<li><b>Containers</b>: the GC respects container memory/CPU limits. With small limits and many instances, Server GC's per-core heaps can use more memory than you expect.</li>
<li><b>.NET 9+</b>: with Server GC, <b>DATAS</b> (Dynamic Adaptation To Application Sizes) is on by default — it adjusts the number of heaps to the app's actual load, reducing memory for small apps.</li>
<li>Settings like a hard heap limit (<code>GCHeapHardLimit</code>) exist, but change GC settings only after measuring.</li>
</ul>
<p><b>TL angle:</b> say "measure first": check GC counters under realistic load before switching modes; most apps are fine with the defaults.</p>`,
        hi: `<ul>
<li><b>Setting</b>: project file में <code>&lt;ServerGarbageCollection&gt;true|false&lt;/ServerGarbageCollection&gt;</code>, या <code>runtimeconfig.json</code> में <code>System.GC.Server</code>। <code>GCSettings.IsServerGC</code> बताता है कि क्या चल रहा है।</li>
<li><b>Background GC</b> (<code>&lt;ConcurrentGarbageCollection&gt;</code>, by default on) दोनों के साथ काम करता है: Gen 2 का ज़्यादातर काम app threads के चलते-चलते होता है।</li>
<li><b>Containers</b>: GC container की memory/CPU limits मानता है। छोटी limits और बहुत सारे instances हों तो Server GC के per-core heaps उम्मीद से ज़्यादा memory ले सकते हैं।</li>
<li><b>.NET 9+</b>: Server GC के साथ <b>DATAS</b> (Dynamic Adaptation To Application Sizes) by default on है — यह app के असली load के हिसाब से heaps की संख्या बदलता है, जिससे छोटे apps की memory कम होती है।</li>
<li>Hard heap limit (<code>GCHeapHardLimit</code>) जैसी settings मौजूद हैं, पर GC settings measure करने के बाद ही बदलो।</li>
</ul>
<p><b>TL angle:</b> "पहले measure करो" बोलो: mode बदलने से पहले realistic load पर GC counters देखो; ज़्यादातर apps defaults के साथ ठीक चलते हैं।</p>`,
        hg: `<ul>
<li><b>Setting</b>: project file mein <code>&lt;ServerGarbageCollection&gt;true|false&lt;/ServerGarbageCollection&gt;</code>, ya <code>runtimeconfig.json</code> mein <code>System.GC.Server</code>. <code>GCSettings.IsServerGC</code> batata hai ki kya chal raha hai.</li>
<li><b>Background GC</b> (<code>&lt;ConcurrentGarbageCollection&gt;</code>, by default on) dono ke saath kaam karta hai: Gen 2 ka zyadatar kaam app threads ke chalte-chalte hota hai.</li>
<li><b>Containers</b>: GC container ki memory/CPU limits maanta hai. Chhoti limits aur bahut saare instances hon to Server GC ke per-core heaps ummeed se zyada memory le sakte hain.</li>
<li><b>.NET 9+</b>: Server GC ke saath <b>DATAS</b> (Dynamic Adaptation To Application Sizes) by default on hai — yeh app ke asli load ke hisaab se heaps ki sankhya badalta hai, jisse chhote apps ki memory kam hoti hai.</li>
<li>Hard heap limit (<code>GCHeapHardLimit</code>) jaisi settings maujood hain, par GC settings measure karne ke baad hi badlo.</li>
</ul>
<p><b>TL angle:</b> "pehle measure karo" bolo: mode badalne se pehle realistic load par GC counters dekho; zyadatar apps defaults ke saath theek chalte hain.</p>`
      }
    },
    {
      id: "pattern-matching",
      depth: "detailed",
      q: "What pattern matching features do you use in modern C#?",
      answer: "Type patterns with is, switch expressions, property patterns, relational and logical patterns like > 500 and not null, and list patterns from C# 11. They replace long if/else chains of type checks and casts.",
      meaning: {
        hi: "is के साथ type patterns, switch expressions, property patterns, &gt; 500 और not null जैसे relational और logical patterns, और C# 11 के list patterns। ये type checks और casts वाली लंबी if/else chains की जगह लेते हैं।",
        hg: "is ke saath type patterns, switch expressions, property patterns, &gt; 500 aur not null jaise relational aur logical patterns, aur C# 11 ke list patterns. Yeh type checks aur casts wali lambi if/else chains ki jagah lete hain."
      },
      explain: {
        en: `<ul>
<li><b>Versions</b>: type pattern with declaration (<code>is Circle c</code>) — C# 7; switch expressions, property, positional and tuple patterns — C# 8; relational (<code>&lt;</code>, <code>&gt;=</code>) and logical (<code>and</code>, <code>or</code>, <code>not</code>) — C# 9; extended property patterns (<code>{ Customer.City: "Pune" }</code>) — C# 10; list patterns (<code>[first, .., last]</code>) — C# 11.</li>
<li><b>Order matters</b>: the first matching arm wins; put specific cases before general ones. An unreachable arm is an error (CS8510); a non-exhaustive switch expression is a warning (CS8509) and throws <code>SwitchExpressionException</code> at runtime if nothing matches.</li>
<li><b>Tuple patterns</b> are great for small state machines: <code>(order.Status, action) switch { (Status.New, "pay") =&gt; Status.Paid, ... }</code>.</li>
<li><code>is null</code> / <code>is not null</code> ignore any overloaded <code>==</code>, so they are the reliable null checks.</li>
</ul>
<p>Follow-up: "Pattern matching or polymorphism?" — If the <b>set of types is closed</b> and the decision belongs to the caller (mapping exceptions to HTTP codes), a switch is clear. If <b>new types keep coming</b> and each knows its own behaviour, a virtual method avoids editing many switches (open/closed principle, Day 8).</p>`,
        hi: `<ul>
<li><b>Versions</b>: declaration के साथ type pattern (<code>is Circle c</code>) — C# 7; switch expressions, property, positional और tuple patterns — C# 8; relational (<code>&lt;</code>, <code>&gt;=</code>) और logical (<code>and</code>, <code>or</code>, <code>not</code>) — C# 9; extended property patterns (<code>{ Customer.City: "Pune" }</code>) — C# 10; list patterns (<code>[first, .., last]</code>) — C# 11।</li>
<li><b>Order मायने रखता है</b>: पहला match होने वाला arm जीतता है; specific cases को general से पहले रखो। Unreachable arm error है (CS8510); non-exhaustive switch expression warning है (CS8509) और runtime पर कुछ match न हो तो <code>SwitchExpressionException</code> throw करता है।</li>
<li><b>Tuple patterns</b> छोटी state machines के लिए बढ़िया हैं: <code>(order.Status, action) switch { (Status.New, "pay") =&gt; Status.Paid, ... }</code>।</li>
<li><code>is null</code> / <code>is not null</code> किसी भी overload किए <code>==</code> को ignore करते हैं, इसलिए ये भरोसेमंद null checks हैं।</li>
</ul>
<p>Follow-up: "Pattern matching या polymorphism?" — अगर <b>types का set बंद (closed)</b> है और फ़ैसला caller का है (exceptions को HTTP codes में map करना), तो switch साफ़ है। अगर <b>नए types आते रहते हैं</b> और हर एक अपना behaviour जानता है, तो virtual method कई switches edit करने से बचाता है (open/closed principle, Day 8)।</p>`,
        hg: `<ul>
<li><b>Versions</b>: declaration ke saath type pattern (<code>is Circle c</code>) — C# 7; switch expressions, property, positional aur tuple patterns — C# 8; relational (<code>&lt;</code>, <code>&gt;=</code>) aur logical (<code>and</code>, <code>or</code>, <code>not</code>) — C# 9; extended property patterns (<code>{ Customer.City: "Pune" }</code>) — C# 10; list patterns (<code>[first, .., last]</code>) — C# 11.</li>
<li><b>Order maayne rakhta hai</b>: pehla match hone wala arm jeetta hai; specific cases ko general se pehle rakho. Unreachable arm error hai (CS8510); non-exhaustive switch expression warning hai (CS8509) aur runtime par kuch match na ho to <code>SwitchExpressionException</code> throw karta hai.</li>
<li><b>Tuple patterns</b> chhoti state machines ke liye badhiya hain: <code>(order.Status, action) switch { (Status.New, "pay") =&gt; Status.Paid, ... }</code>.</li>
<li><code>is null</code> / <code>is not null</code> kisi bhi overload kiye <code>==</code> ko ignore karte hain, isliye yeh bharosemand null checks hain.</li>
</ul>
<p>Follow-up: "Pattern matching ya polymorphism?" — Agar <b>types ka set band (closed)</b> hai aur faisla caller ka hai (exceptions ko HTTP codes mein map karna), to switch saaf hai. Agar <b>naye types aate rehte hain</b> aur har ek apna behaviour jaanta hai, to virtual method kai switches edit karne se bachata hai (open/closed principle, Day 8).</p>`
      }
    },
    {
      id: "nullable-reference-types",
      depth: "detailed",
      q: "What are nullable reference types? Do they prevent NullReferenceException?",
      answer: "They mark which references may be null (string?) and which should not (string), and the compiler warns about risky use. It is compile-time only, so it reduces NullReferenceException but cannot fully prevent it.",
      meaning: {
        hi: "इनसे आप बताते हो कि कौन से references null हो सकते हैं (string?) और कौन से नहीं होने चाहिए (string), और compiler possible null use पर warning देता है। यह सिर्फ़ compile-time है, इसलिए NullReferenceException कम करता है पर पूरी तरह रोक नहीं सकता।",
        hg: "Inse aap batate ho ki kaun se references null ho sakte hain (string?) aur kaun se nahi hone chahiye (string), aur compiler possible null use par warning deta hai. Yeh sirf compile-time hai, isliye NullReferenceException kam karta hai par poori tarah rok nahi sakta."
      },
      explain: {
        en: `<ul>
<li>C# 8 feature; enabled by default in new project templates since .NET 6 (<code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code>).</li>
<li>Why it cannot fully prevent NRE: warnings can be ignored or silenced with <code>!</code>; code compiled without NRT (old libraries) can pass null; deserialization and reflection can set null into non-nullable properties; arrays of a non-nullable type start with nulls.</li>
<li>Key warnings: CS8600, CS8602, CS8603, CS8618, CS8625. Common fixes: <code>required</code> members, constructors that set everything, <code>?.</code>/<code>??</code>, guard clauses, <code>[NotNullWhen]</code> on <code>TryGet</code> methods.</li>
<li><code>string?</code> is only an annotation (same runtime type). <code>int?</code> is a different runtime type, <code>Nullable&lt;int&gt;</code>.</li>
</ul>
<p>Follow-up: "How would you introduce NRT in a 10-year-old codebase?" — enable it <b>file by file</b> (<code>#nullable enable</code>), starting with new code and core domain types; fix warnings in small PRs; once a project is clean, turn it on in the project file and make nullable warnings errors so the debt does not come back.</p>`,
        hi: `<ul>
<li>C# 8 का feature; .NET 6 से नए project templates में by default enabled (<code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code>)।</li>
<li>यह NRE को पूरी तरह क्यों नहीं रोक सकता: warnings ignore की जा सकती हैं या <code>!</code> से चुप कराई जा सकती हैं; बिना NRT के compile हुआ code (पुरानी libraries) null pass कर सकता है; deserialization और reflection non-nullable properties में null डाल सकते हैं; non-nullable type के arrays nulls के साथ शुरू होते हैं।</li>
<li>मुख्य warnings: CS8600, CS8602, CS8603, CS8618, CS8625। आम fixes: <code>required</code> members, सब कुछ set करने वाले constructors, <code>?.</code>/<code>??</code>, guard clauses, <code>TryGet</code> methods पर <code>[NotNullWhen]</code>।</li>
<li><code>string?</code> सिर्फ़ एक annotation है (runtime type वही)। <code>int?</code> एक अलग runtime type है, <code>Nullable&lt;int&gt;</code>।</li>
</ul>
<p>Follow-up: "10 साल पुराने codebase में NRT कैसे लाओगे?" — इसे <b>file by file</b> enable करो (<code>#nullable enable</code>), नए code और core domain types से शुरू करके; warnings छोटे PRs में ठीक करो; जब project साफ़ हो जाए, तो project file में on करो और nullable warnings को errors बना दो ताकि यह कर्ज़ वापस न आए।</p>`,
        hg: `<ul>
<li>C# 8 ka feature; .NET 6 se naye project templates mein by default enabled (<code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code>).</li>
<li>Yeh NRE ko poori tarah kyun nahi rok sakta: warnings ignore ki ja sakti hain ya <code>!</code> se chup karayi ja sakti hain; bina NRT ke compile hua code (purani libraries) null pass kar sakta hai; deserialization aur reflection non-nullable properties mein null daal sakte hain; non-nullable type ke arrays nulls ke saath shuru hote hain.</li>
<li>Mukhya warnings: CS8600, CS8602, CS8603, CS8618, CS8625. Aam fixes: <code>required</code> members, sab kuch set karne wale constructors, <code>?.</code>/<code>??</code>, guard clauses, <code>TryGet</code> methods par <code>[NotNullWhen]</code>.</li>
<li><code>string?</code> sirf ek annotation hai (runtime type wahi). <code>int?</code> ek alag runtime type hai, <code>Nullable&lt;int&gt;</code>.</li>
</ul>
<p>Follow-up: "10 saal purane codebase mein NRT kaise laaoge?" — ise <b>file by file</b> enable karo (<code>#nullable enable</code>), naye code aur core domain types se shuru karke; warnings chhote PRs mein theek karo; jab project saaf ho jaaye, to project file mein on karo aur nullable warnings ko errors bana do taaki yeh karz wapas na aaye.</p>`
      }
    },
    {
      id: "span-memory",
      depth: "detailed",
      q: "What is Span&lt;T&gt;, and why is it fast? How is it different from Memory&lt;T&gt;?",
      answer: "Span&lt;T&gt; is a stack-only view over contiguous memory, so slicing and parsing need no copies or heap allocations. Memory&lt;T&gt; is the heap-storable version you can keep in fields and use across await.",
      meaning: {
        hi: "Span&lt;T&gt; लगातार memory पर एक stack-only view है, इसलिए slicing और parsing में न copy चाहिए न heap allocation। Memory&lt;T&gt; उसका heap पर रखा जा सकने वाला version है, जिसे fields में रख सकते हो और await के पार use कर सकते हो।",
        hg: "Span&lt;T&gt; lagaataar memory par ek stack-only view hai, isliye slicing aur parsing mein na copy chahiye na heap allocation. Memory&lt;T&gt; uska heap par rakha ja sakne wala version hai, jise fields mein rakh sakte ho aur await ke paar use kar sakte ho."
      },
      explain: {
        en: `<ul>
<li>A span is basically a <b>reference + length</b>. <code>text.AsSpan(4, 10)</code> just points into the existing string — <code>Substring</code> would allocate a new string. Fewer allocations → less GC work → better throughput in hot paths.</li>
<li>It is a <code>ref struct</code>: stack-only. Hence the rules — no class fields (CS8345), no boxing, no lambda capture (CS8175), not across <code>await</code> (CS4007), no normal generic arguments (CS9244). In <b>C# 13</b>, span locals are allowed inside async methods and iterators as long as they are not used across an <code>await</code>/<code>yield</code>; before that they were not allowed there at all.</li>
<li><code>Memory&lt;T&gt;</code>/<code>ReadOnlyMemory&lt;T&gt;</code>: a normal struct you can store and pass through async code; get <code>.Span</code> where you do the synchronous work.</li>
<li>Friends: <code>stackalloc</code> for small buffers; <code>ArrayPool&lt;T&gt;</code> for large ones; <code>string.Create</code>, <code>TryFormat</code>, <code>Utf8Parser</code>/<code>Utf8Formatter</code> for allocation-free formatting.</li>
</ul>
<p>Follow-up: "Have you used it in business code?" — A good honest answer: "Mostly I benefit through the framework (Kestrel, System.Text.Json). I would use it directly only in a measured hot path, like parsing large files or a high-traffic endpoint, and verify with BenchmarkDotNet."</p>`,
        hi: `<ul>
<li>Span असल में <b>reference + length</b> है। <code>text.AsSpan(4, 10)</code> बस मौजूदा string के अंदर point करता है — <code>Substring</code> एक नई string allocate करता। कम allocations → GC का कम काम → hot paths में बेहतर throughput।</li>
<li>यह <code>ref struct</code> है: सिर्फ़ stack पर। इसीलिए rules — class fields नहीं (CS8345), boxing नहीं, lambda capture नहीं (CS8175), <code>await</code> के पार नहीं (CS4007), normal generic arguments नहीं (CS9244)। <b>C# 13</b> में span locals async methods और iterators के अंदर allowed हैं, जब तक वो <code>await</code>/<code>yield</code> के पार use न हों; उससे पहले वहाँ बिल्कुल allowed नहीं थे।</li>
<li><code>Memory&lt;T&gt;</code>/<code>ReadOnlyMemory&lt;T&gt;</code>: एक normal struct जिसे आप store कर सकते हो और async code में आगे दे सकते हो; जहाँ synchronous काम करना है वहाँ <code>.Span</code> लो।</li>
<li>साथी: छोटे buffers के लिए <code>stackalloc</code>; बड़ों के लिए <code>ArrayPool&lt;T&gt;</code>; allocation-free formatting के लिए <code>string.Create</code>, <code>TryFormat</code>, <code>Utf8Parser</code>/<code>Utf8Formatter</code>।</li>
</ul>
<p>Follow-up: "क्या आपने business code में इसे use किया है?" — एक अच्छा, ईमानदार जवाब: "ज़्यादातर फ़ायदा मुझे framework (Kestrel, System.Text.Json) से मिलता है। सीधे इसे सिर्फ़ किसी measured hot path में use करूँगा, जैसे बड़ी files parse करना या high-traffic endpoint, और BenchmarkDotNet से verify करूँगा।"</p>`,
        hg: `<ul>
<li>Span asal mein <b>reference + length</b> hai. <code>text.AsSpan(4, 10)</code> bas maujooda string ke andar point karta hai — <code>Substring</code> ek nayi string allocate karta. Kam allocations → GC ka kam kaam → hot paths mein behtar throughput.</li>
<li>Yeh <code>ref struct</code> hai: sirf stack par. Isiliye rules — class fields nahi (CS8345), boxing nahi, lambda capture nahi (CS8175), <code>await</code> ke paar nahi (CS4007), normal generic arguments nahi (CS9244). <b>C# 13</b> mein span locals async methods aur iterators ke andar allowed hain, jab tak woh <code>await</code>/<code>yield</code> ke paar use na hon; usse pehle wahan bilkul allowed nahi the.</li>
<li><code>Memory&lt;T&gt;</code>/<code>ReadOnlyMemory&lt;T&gt;</code>: ek normal struct jise aap store kar sakte ho aur async code mein aage de sakte ho; jahan synchronous kaam karna hai wahan <code>.Span</code> lo.</li>
<li>Saathi: chhote buffers ke liye <code>stackalloc</code>; badon ke liye <code>ArrayPool&lt;T&gt;</code>; allocation-free formatting ke liye <code>string.Create</code>, <code>TryFormat</code>, <code>Utf8Parser</code>/<code>Utf8Formatter</code>.</li>
</ul>
<p>Follow-up: "Kya aapne business code mein ise use kiya hai?" — Ek achha, imaandaar jawaab: "Zyadatar fayda mujhe framework (Kestrel, System.Text.Json) se milta hai. Seedhe ise sirf kisi measured hot path mein use karunga, jaise badi files parse karna ya high-traffic endpoint, aur BenchmarkDotNet se verify karunga."</p>`
      }
    }
  ],
  puzzles: [
    {
      id: "async-sync-until-await",
      src: `Console.WriteLine("A");
Task task = PrintAsync();
Console.WriteLine("C");
await task;
Console.WriteLine("E");

static async Task PrintAsync()
{
    Console.WriteLine("B");
    await Task.CompletedTask;
    Console.WriteLine("D");
}`,
      answer: "A\nB\nD\nC\nE",
      explain: {
        en: `<ul>
<li>Calling <code>PrintAsync()</code> runs it <b>synchronously</b> on the same thread: it prints <b>B</b>.</li>
<li><code>await Task.CompletedTask</code> awaits a task that is <b>already complete</b>, so there is no pause — it continues at once and prints <b>D</b>, then the method finishes.</li>
<li>Only then does control return to the caller: <b>C</b>, then <code>await task</code> (already complete) and <b>E</b>.</li>
<li>Lesson: <code>async</code> does not mean "runs in the background". A method pauses only at an <code>await</code> on an <b>incomplete</b> task.</li>
</ul>`,
        hi: `<ul>
<li><code>PrintAsync()</code> call करने पर वो उसी thread पर <b>synchronously</b> चलता है: <b>B</b> print होता है।</li>
<li><code>await Task.CompletedTask</code> ऐसे task पर await है जो <b>पहले से complete</b> है, इसलिए कोई रुकावट नहीं — वो तुरंत आगे चलता है और <b>D</b> print करता है, फिर method ख़त्म।</li>
<li>उसके बाद ही control caller को वापस मिलता है: <b>C</b>, फिर <code>await task</code> (पहले से complete) और <b>E</b>।</li>
<li>सीख: <code>async</code> का मतलब "background में चलना" नहीं है। Method सिर्फ़ किसी <b>अधूरे</b> task पर <code>await</code> पर रुकता है।</li>
</ul>`,
        hg: `<ul>
<li><code>PrintAsync()</code> call karne par woh usi thread par <b>synchronously</b> chalta hai: <b>B</b> print hota hai.</li>
<li><code>await Task.CompletedTask</code> aise task par await hai jo <b>pehle se complete</b> hai, isliye koi rukaawat nahi — woh turant aage chalta hai aur <b>D</b> print karta hai, phir method khatam.</li>
<li>Uske baad hi control caller ko wapas milta hai: <b>C</b>, phir <code>await task</code> (pehle se complete) aur <b>E</b>.</li>
<li>Seekh: <code>async</code> ka matlab "background mein chalna" nahi hai. Method sirf kisi <b>adhoore</b> task par <code>await</code> par rukta hai.</li>
</ul>`
      }
    },
    {
      id: "async-exception-timing",
      src: `Task t1 = CheckAsync(-5);
Console.WriteLine($"got a task, faulted = {t1.IsFaulted}");

try
{
    _ = Check(-5);
    Console.WriteLine("after Check");
}
catch (ArgumentException)
{
    Console.WriteLine("Check threw at the call");
}

try
{
    await t1;
}
catch (ArgumentException)
{
    Console.WriteLine("CheckAsync threw at await");
}

static async Task CheckAsync(int qty)
{
    if (qty < 0) throw new ArgumentException("qty must be positive");
    await Task.CompletedTask;
}

static Task Check(int qty)
{
    if (qty < 0) throw new ArgumentException("qty must be positive");
    return Task.CompletedTask;
}`,
      answer: "got a task, faulted = True\nCheck threw at the call\nCheckAsync threw at await",
      explain: {
        en: `<ul>
<li>In an <code>async</code> method, <b>every</b> exception — even one thrown before the first <code>await</code> — is caught by the generated code and <b>stored in the returned Task</b>. So <code>CheckAsync(-5)</code> returns a faulted task without throwing.</li>
<li><code>Check</code> is <b>not</b> <code>async</code>; it is a normal method that happens to return a <code>Task</code>. Its exception is thrown immediately at the call, and "after Check" never prints.</li>
<li><code>await t1</code> rethrows the stored exception.</li>
<li>Practical point: argument validation inside an <code>async</code> method fails only when someone awaits the task. If you want it to fail fast, validate in a non-async wrapper and then call an async local function.</li>
</ul>`,
        hi: `<ul>
<li><code>async</code> method में <b>हर</b> exception — पहले <code>await</code> से पहले throw हुआ भी — generated code पकड़ लेता है और <b>return होने वाले Task में store</b> कर देता है। इसलिए <code>CheckAsync(-5)</code> बिना throw किए एक faulted task return करता है।</li>
<li><code>Check</code> <code>async</code> <b>नहीं</b> है; यह एक normal method है जो बस <code>Task</code> return करता है। इसका exception call पर ही तुरंत throw होता है, और "after Check" कभी print नहीं होता।</li>
<li><code>await t1</code> store हुआ exception दोबारा throw करता है।</li>
<li>काम की बात: <code>async</code> method के अंदर argument validation तभी fail होता है जब कोई task को await करे। अगर तुरंत fail करवाना है, तो non-async wrapper में validate करो और फिर async local function call करो।</li>
</ul>`,
        hg: `<ul>
<li><code>async</code> method mein <b>har</b> exception — pehle <code>await</code> se pehle throw hua bhi — generated code pakad leta hai aur <b>return hone wale Task mein store</b> kar deta hai. Isliye <code>CheckAsync(-5)</code> bina throw kiye ek faulted task return karta hai.</li>
<li><code>Check</code> <code>async</code> <b>nahi</b> hai; yeh ek normal method hai jo bas <code>Task</code> return karta hai. Iska exception call par hi turant throw hota hai, aur "after Check" kabhi print nahi hota.</li>
<li><code>await t1</code> store hua exception dobara throw karta hai.</li>
<li>Kaam ki baat: <code>async</code> method ke andar argument validation tabhi fail hota hai jab koi task ko await kare. Agar turant fail karwana hai, to non-async wrapper mein validate karo aur phir async local function call karo.</li>
</ul>`
      }
    },
    {
      id: "whenall-argument-order",
      src: `Task a = Task.FromException(new InvalidOperationException("A failed"));
Task b = Task.CompletedTask;
Task c = Task.FromException(new TimeoutException("C failed"));

Task all = Task.WhenAll(c, b, a);
try
{
    await all;
}
catch (Exception ex)
{
    Console.WriteLine($"{ex.GetType().Name}: {ex.Message}");
}
Console.WriteLine(all.Exception!.InnerExceptions.Count);
Console.WriteLine(b.IsCompletedSuccessfully);`,
      answer: "TimeoutException: C failed\n2\nTrue",
      explain: {
        en: `<ul>
<li>All three tasks are already finished, so nothing depends on timing.</li>
<li><code>WhenAll(c, b, a)</code> collects the exceptions in the <b>order the tasks were passed</b>: first <code>c</code>'s <code>TimeoutException</code>, then <code>a</code>'s <code>InvalidOperationException</code>.</li>
<li><code>await</code> rethrows only the <b>first</b> one → <b>TimeoutException: C failed</b> — not wrapped in <code>AggregateException</code>.</li>
<li>The <code>WhenAll</code> task still holds <b>both</b> exceptions → <b>2</b>. Task <code>b</code> itself succeeded → <b>True</b>.</li>
</ul>`,
        hi: `<ul>
<li>तीनों tasks पहले से ख़त्म हैं, इसलिए कुछ भी timing पर depend नहीं करता।</li>
<li><code>WhenAll(c, b, a)</code> exceptions को <b>उसी order में</b> जमा करता है जिसमें tasks दिए गए: पहले <code>c</code> का <code>TimeoutException</code>, फिर <code>a</code> का <code>InvalidOperationException</code>।</li>
<li><code>await</code> सिर्फ़ <b>पहला</b> दोबारा throw करता है → <b>TimeoutException: C failed</b> — <code>AggregateException</code> में लिपटा हुआ नहीं।</li>
<li><code>WhenAll</code> वाला task अब भी <b>दोनों</b> exceptions रखता है → <b>2</b>। Task <code>b</code> ख़ुद सफल रहा → <b>True</b>।</li>
</ul>`,
        hg: `<ul>
<li>Teeno tasks pehle se khatam hain, isliye kuch bhi timing par depend nahi karta.</li>
<li><code>WhenAll(c, b, a)</code> exceptions ko <b>usi order mein</b> jama karta hai jismein tasks diye gaye: pehle <code>c</code> ka <code>TimeoutException</code>, phir <code>a</code> ka <code>InvalidOperationException</code>.</li>
<li><code>await</code> sirf <b>pehla</b> dobara throw karta hai → <b>TimeoutException: C failed</b> — <code>AggregateException</code> mein lipta hua nahi.</li>
<li><code>WhenAll</code> wala task ab bhi <b>dono</b> exceptions rakhta hai → <b>2</b>. Task <code>b</code> khud safal raha → <b>True</b>.</li>
</ul>`
      }
    },
    {
      id: "exception-filter-order",
      src: `try
{
    try
    {
        Console.WriteLine("try");
        throw new InvalidOperationException("boom");
    }
    finally
    {
        Console.WriteLine("inner finally");
    }
}
catch (InvalidOperationException) when (Log("filter"))
{
    Console.WriteLine("catch");
}

static bool Log(string message)
{
    Console.WriteLine(message);
    return true;
}`,
      answer: "try\nfilter\ninner finally\ncatch",
      explain: {
        en: `<ul>
<li>.NET handles an exception in <b>two passes</b>. Pass 1 searches up the stack for a matching <code>catch</code> — and runs <b>exception filters</b> (<code>when</code>) while searching. Pass 2 unwinds: it runs the <code>finally</code> blocks on the way, then the chosen <code>catch</code> body.</li>
<li>So the filter prints <b>filter</b> <i>before</i> the inner <b>finally</b>, and <b>catch</b> comes last.</li>
<li>This is why a filter sees the stack and state exactly as they were at the throw — useful for logging (<code>when (Log(ex))</code> returning <code>false</code> logs without catching).</li>
</ul>`,
        hi: `<ul>
<li>.NET exception को <b>दो passes</b> में संभालता है। Pass 1 stack में ऊपर matching <code>catch</code> ढूँढता है — और ढूँढते समय <b>exception filters</b> (<code>when</code>) चलाता है। Pass 2 unwind करता है: रास्ते के <code>finally</code> blocks चलाता है, फिर चुने गए <code>catch</code> की body।</li>
<li>इसलिए filter अंदर वाले <b>finally</b> से <i>पहले</i> <b>filter</b> print करता है, और <b>catch</b> सबसे आख़िर में आता है।</li>
<li>इसीलिए filter को stack और state बिल्कुल वैसे ही दिखते हैं जैसे throw के समय थे — logging के लिए काम का (<code>false</code> return करने वाला <code>when (Log(ex))</code> बिना पकड़े log करता है)।</li>
</ul>`,
        hg: `<ul>
<li>.NET exception ko <b>do passes</b> mein sambhaalta hai. Pass 1 stack mein upar matching <code>catch</code> dhoondhta hai — aur dhoondhte samay <b>exception filters</b> (<code>when</code>) chalata hai. Pass 2 unwind karta hai: raaste ke <code>finally</code> blocks chalata hai, phir chune gaye <code>catch</code> ki body.</li>
<li>Isliye filter andar wale <b>finally</b> se <i>pehle</i> <b>filter</b> print karta hai, aur <b>catch</b> sabse aakhir mein aata hai.</li>
<li>Isiliye filter ko stack aur state bilkul waise hi dikhte hain jaise throw ke samay the — logging ke liye kaam ka (<code>false</code> return karne wala <code>when (Log(ex))</code> bina pakde log karta hai).</li>
</ul>`
      }
    },
    {
      id: "finally-return",
      src: `Console.WriteLine(GetQty());
Console.WriteLine(GetCart().Count);

static int GetQty()
{
    int qty = 1;
    try
    {
        return qty;
    }
    finally
    {
        qty = 99;
        Console.WriteLine("finally runs");
    }
}

static List<string> GetCart()
{
    var cart = new List<string> { "Atta" };
    try
    {
        return cart;
    }
    finally
    {
        cart.Add("Dal");
    }
}`,
      answer: "finally runs\n1\n2",
      explain: {
        en: `<ul>
<li><code>finally</code> runs <b>after</b> the <code>return</code> expression is evaluated but <b>before</b> the method actually returns — so "finally runs" prints first.</li>
<li><code>return qty;</code> copies the <b>value</b> 1 into the return slot. Changing the local <code>qty</code> to 99 in <code>finally</code> does not change that copy → <b>1</b>.</li>
<li><code>return cart;</code> copies the <b>reference</b>. <code>finally</code> adds to the <b>same list object</b>, so the caller sees 2 items → <b>2</b>. (Value vs reference — Day 2.)</li>
<li>Code-review note: changing state in <code>finally</code> like this is confusing; keep <code>finally</code> for cleanup.</li>
</ul>`,
        hi: `<ul>
<li><code>finally</code> <code>return</code> expression evaluate होने के <b>बाद</b> पर method के सच में return होने से <b>पहले</b> चलता है — इसलिए "finally runs" पहले print होता है।</li>
<li><code>return qty;</code> <b>value</b> 1 को return slot में copy करता है। <code>finally</code> में local <code>qty</code> को 99 करने से वो copy नहीं बदलती → <b>1</b>।</li>
<li><code>return cart;</code> <b>reference</b> copy करता है। <code>finally</code> <b>उसी list object</b> में जोड़ता है, इसलिए caller को 2 items दिखते हैं → <b>2</b>। (Value बनाम reference — Day 2।)</li>
<li>Code-review note: <code>finally</code> में ऐसे state बदलना confusing है; <code>finally</code> को cleanup के लिए रखो।</li>
</ul>`,
        hg: `<ul>
<li><code>finally</code> <code>return</code> expression evaluate hone ke <b>baad</b> par method ke sach mein return hone se <b>pehle</b> chalta hai — isliye "finally runs" pehle print hota hai.</li>
<li><code>return qty;</code> <b>value</b> 1 ko return slot mein copy karta hai. <code>finally</code> mein local <code>qty</code> ko 99 karne se woh copy nahi badalti → <b>1</b>.</li>
<li><code>return cart;</code> <b>reference</b> copy karta hai. <code>finally</code> <b>usi list object</b> mein jodta hai, isliye caller ko 2 items dikhte hain → <b>2</b>. (Value vs reference — Day 2.)</li>
<li>Code-review note: <code>finally</code> mein aise state badalna confusing hai; <code>finally</code> ko cleanup ke liye rakho.</li>
</ul>`
      }
    },
    {
      id: "using-dispose-with-exception",
      src: `try
{
    using var connection = new Resource("connection");
    using var file = new Resource("file");
    Console.WriteLine("work");
    throw new InvalidOperationException("disk full");
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"catch: {ex.Message}");
}
finally
{
    Console.WriteLine("outer finally");
}

sealed class Resource(string name) : IDisposable
{
    public void Dispose() => Console.WriteLine($"dispose {name}");
}`,
      answer: "work\ndispose file\ndispose connection\ncatch: disk full\nouter finally",
      explain: {
        en: `<ul>
<li>Each <code>using var</code> is a hidden <code>try/finally</code> that ends with the enclosing block — here the <code>try</code> block.</li>
<li>When the exception leaves the <code>try</code> block, those hidden <code>finally</code> blocks run first, in <b>reverse order</b>: <b>dispose file</b>, then <b>dispose connection</b>.</li>
<li>Then the <code>catch</code> body runs (<b>catch: disk full</b>), and finally the outer <code>finally</code>.</li>
<li>Lesson: resources are released even when things fail — and by the time your <code>catch</code> runs, they are already disposed.</li>
</ul>`,
        hi: `<ul>
<li>हर <code>using var</code> एक छुपा हुआ <code>try/finally</code> है जो enclosing block के साथ ख़त्म होता है — यहाँ <code>try</code> block।</li>
<li>जब exception <code>try</code> block से बाहर निकलता है, तो वो छुपे <code>finally</code> blocks पहले चलते हैं, <b>उल्टे order</b> में: <b>dispose file</b>, फिर <b>dispose connection</b>।</li>
<li>फिर <code>catch</code> की body चलती है (<b>catch: disk full</b>), और आख़िर में outer <code>finally</code>।</li>
<li>सीख: चीज़ें fail होने पर भी resources छूट जाते हैं — और जब तक आपका <code>catch</code> चलता है, वो पहले ही dispose हो चुके होते हैं।</li>
</ul>`,
        hg: `<ul>
<li>Har <code>using var</code> ek chhupa hua <code>try/finally</code> hai jo enclosing block ke saath khatam hota hai — yahan <code>try</code> block.</li>
<li>Jab exception <code>try</code> block se bahar nikalta hai, to woh chhupe <code>finally</code> blocks pehle chalte hain, <b>ulte order</b> mein: <b>dispose file</b>, phir <b>dispose connection</b>.</li>
<li>Phir <code>catch</code> ki body chalti hai (<b>catch: disk full</b>), aur aakhir mein outer <code>finally</code>.</li>
<li>Seekh: cheezein fail hone par bhi resources chhoot jaate hain — aur jab tak aapka <code>catch</code> chalta hai, woh pehle hi dispose ho chuke hote hain.</li>
</ul>`
      }
    },
    {
      id: "record-vs-class-equality",
      src: `var set = new HashSet<object> { new PointClass(1, 2), new PointRecord(1, 2) };
Console.WriteLine(set.Contains(new PointClass(1, 2)));
Console.WriteLine(set.Contains(new PointRecord(1, 2)));

var r1 = new PointRecord(1, 2);
var r2 = r1 with { Y = 5 };
Console.WriteLine($"{r1} {r2}");
Console.WriteLine(r1 == (r2 with { Y = 2 }));

public class PointClass(int x, int y)
{
    public int X => x;
    public int Y => y;
}

public record PointRecord(int X, int Y);`,
      answer: "False\nTrue\nPointRecord { X = 1, Y = 2 } PointRecord { X = 1, Y = 5 }\nTrue",
      explain: {
        en: `<ul>
<li>A normal class uses <b>reference</b> equality: a new <code>PointClass(1, 2)</code> is a different object, so the set does not contain it → <b>False</b>. (A primary constructor does not add value equality.)</li>
<li>A record overrides <code>Equals</code> and <code>GetHashCode</code> using its values, so a new <code>PointRecord(1, 2)</code> is found → <b>True</b>.</li>
<li><code>with</code> creates a <b>new</b> record and leaves <code>r1</code> unchanged; the generated <code>ToString()</code> prints the values.</li>
<li><code>r2 with { Y = 2 }</code> has the same values as <code>r1</code> → <code>==</code> is <b>True</b>.</li>
</ul>`,
        hi: `<ul>
<li>Normal class <b>reference</b> equality use करती है: नया <code>PointClass(1, 2)</code> एक अलग object है, इसलिए set में नहीं मिलता → <b>False</b>। (Primary constructor value equality नहीं जोड़ता।)</li>
<li>Record अपनी values से <code>Equals</code> और <code>GetHashCode</code> override करता है, इसलिए नया <code>PointRecord(1, 2)</code> मिल जाता है → <b>True</b>।</li>
<li><code>with</code> एक <b>नया</b> record बनाता है और <code>r1</code> को नहीं बदलता; generated <code>ToString()</code> values print करता है।</li>
<li><code>r2 with { Y = 2 }</code> की values <code>r1</code> जैसी ही हैं → <code>==</code> <b>True</b> है।</li>
</ul>`,
        hg: `<ul>
<li>Normal class <b>reference</b> equality use karti hai: naya <code>PointClass(1, 2)</code> ek alag object hai, isliye set mein nahi milta → <b>False</b>. (Primary constructor value equality nahi jodta.)</li>
<li>Record apni values se <code>Equals</code> aur <code>GetHashCode</code> override karta hai, isliye naya <code>PointRecord(1, 2)</code> mil jaata hai → <b>True</b>.</li>
<li><code>with</code> ek <b>naya</b> record banata hai aur <code>r1</code> ko nahi badalta; generated <code>ToString()</code> values print karta hai.</li>
<li><code>r2 with { Y = 2 }</code> ki values <code>r1</code> jaisi hi hain → <code>==</code> <b>True</b> hai.</li>
</ul>`
      }
    },
    {
      id: "switch-first-match",
      src: `object?[] inputs = [500, 5, 5L, "", "chai", 2.5, null];
foreach (object? input in inputs)
    Console.WriteLine(Classify(input));

static string Classify(object? value) => value switch
{
    int n when n > 100 => "big int",
    int => "int",
    long or short => "other whole number",
    string { Length: 0 } => "empty string",
    string s => $"string of {s.Length}",
    _ => "something else"
};`,
      answer: "big int\nint\nother whole number\nempty string\nstring of 4\nsomething else\nsomething else",
      explain: {
        en: `<ul>
<li>Arms are tried <b>top to bottom</b>; the first match wins. 500 matches <code>int n when n &gt; 100</code>; 5 fails the <code>when</code> guard and falls to <code>int</code>.</li>
<li><code>5L</code> is a <code>long</code>, not an <code>int</code> → <b>other whole number</b>.</li>
<li><code>""</code> matches the property pattern <code>{ Length: 0 }</code> before the general <code>string s</code> arm.</li>
<li><code>2.5</code> (a <code>double</code>) matches nothing specific → <code>_</code>.</li>
<li><code>null</code>: type patterns <b>never</b> match null, but the discard <code>_</code> matches <b>everything, including null</b> → <b>something else</b>. Add an explicit <code>null =&gt;</code> arm if null needs its own answer.</li>
</ul>`,
        hi: `<ul>
<li>Arms <b>ऊपर से नीचे</b> try होते हैं; पहला match जीतता है। 500 <code>int n when n &gt; 100</code> से match करता है; 5 <code>when</code> guard में fail होकर <code>int</code> पर गिरता है।</li>
<li><code>5L</code> एक <code>long</code> है, <code>int</code> नहीं → <b>other whole number</b>।</li>
<li><code>""</code> general <code>string s</code> arm से पहले property pattern <code>{ Length: 0 }</code> से match करता है।</li>
<li><code>2.5</code> (एक <code>double</code>) किसी specific arm से match नहीं करता → <code>_</code>।</li>
<li><code>null</code>: type patterns null से <b>कभी</b> match नहीं करते, पर discard <code>_</code> <b>सब कुछ, null समेत</b>, match करता है → <b>something else</b>। अगर null का अलग जवाब चाहिए तो explicit <code>null =&gt;</code> arm जोड़ो।</li>
</ul>`,
        hg: `<ul>
<li>Arms <b>upar se neeche</b> try hote hain; pehla match jeetta hai. 500 <code>int n when n &gt; 100</code> se match karta hai; 5 <code>when</code> guard mein fail hokar <code>int</code> par girta hai.</li>
<li><code>5L</code> ek <code>long</code> hai, <code>int</code> nahi → <b>other whole number</b>.</li>
<li><code>""</code> general <code>string s</code> arm se pehle property pattern <code>{ Length: 0 }</code> se match karta hai.</li>
<li><code>2.5</code> (ek <code>double</code>) kisi specific arm se match nahi karta → <code>_</code>.</li>
<li><code>null</code>: type patterns null se <b>kabhi</b> match nahi karte, par discard <code>_</code> <b>sab kuch, null samet</b>, match karta hai → <b>something else</b>. Agar null ka alag jawaab chahiye to explicit <code>null =&gt;</code> arm jodo.</li>
</ul>`
      }
    },
    {
      id: "nullable-operators",
      src: `int? stock = null;
Console.WriteLine(stock > 0);
Console.WriteLine(stock <= 0);
Console.WriteLine(stock == null);
Console.WriteLine((stock + 5) ?? -1);

string? name = null;
Console.WriteLine(name?.Length ?? 0);
Console.WriteLine($"[{name}]");
name ??= "guest";
Console.WriteLine(name.ToUpper());`,
      answer: "False\nFalse\nTrue\n-1\n0\n[]\nGUEST",
      explain: {
        en: `<ul>
<li>Comparisons with a null <code>int?</code> (<code>&gt;</code>, <code>&lt;=</code>, ...) are <b>always false</b> — so <code>stock &gt; 0</code> and <code>stock &lt;= 0</code> are <b>both</b> false. Easy to miss in a <code>if (stock &lt;= 0) Reorder();</code> check.</li>
<li><code>==</code> with null works as expected → <b>True</b>.</li>
<li>Arithmetic with null gives null (<code>null + 5</code> is null), so <code>??</code> picks <b>-1</b>.</li>
<li><code>name?.Length</code> is null → <code>?? 0</code> → <b>0</b>. Interpolating null prints an empty string → <b>[]</b>.</li>
<li><code>??=</code> assigns only because <code>name</code> is null → <b>GUEST</b>. After it, the compiler knows <code>name</code> is not null, so <code>name.ToUpper()</code> gives no warning.</li>
</ul>`,
        hi: `<ul>
<li>Null <code>int?</code> के साथ comparisons (<code>&gt;</code>, <code>&lt;=</code>, ...) <b>हमेशा false</b> होते हैं — इसलिए <code>stock &gt; 0</code> और <code>stock &lt;= 0</code> <b>दोनों</b> false हैं। <code>if (stock &lt;= 0) Reorder();</code> जैसे check में यह आसानी से छूट जाता है।</li>
<li>Null के साथ <code>==</code> उम्मीद के मुताबिक़ चलता है → <b>True</b>।</li>
<li>Null के साथ arithmetic null देता है (<code>null + 5</code> null है), इसलिए <code>??</code> <b>-1</b> चुनता है।</li>
<li><code>name?.Length</code> null है → <code>?? 0</code> → <b>0</b>। Null को interpolate करने पर empty string print होती है → <b>[]</b>।</li>
<li><code>??=</code> सिर्फ़ इसलिए assign करता है क्योंकि <code>name</code> null है → <b>GUEST</b>। उसके बाद compiler जानता है कि <code>name</code> null नहीं है, इसलिए <code>name.ToUpper()</code> पर warning नहीं आती।</li>
</ul>`,
        hg: `<ul>
<li>Null <code>int?</code> ke saath comparisons (<code>&gt;</code>, <code>&lt;=</code>, ...) <b>hamesha false</b> hote hain — isliye <code>stock &gt; 0</code> aur <code>stock &lt;= 0</code> <b>dono</b> false hain. <code>if (stock &lt;= 0) Reorder();</code> jaise check mein yeh aasaani se chhoot jaata hai.</li>
<li>Null ke saath <code>==</code> ummeed ke mutaabik chalta hai → <b>True</b>.</li>
<li>Null ke saath arithmetic null deta hai (<code>null + 5</code> null hai), isliye <code>??</code> <b>-1</b> chunta hai.</li>
<li><code>name?.Length</code> null hai → <code>?? 0</code> → <b>0</b>. Null ko interpolate karne par empty string print hoti hai → <b>[]</b>.</li>
<li><code>??=</code> sirf isliye assign karta hai kyunki <code>name</code> null hai → <b>GUEST</b>. Uske baad compiler jaanta hai ki <code>name</code> null nahi hai, isliye <code>name.ToUpper()</code> par warning nahi aati.</li>
</ul>`
      }
    },
    {
      id: "span-slice-shares-memory",
      src: `int[] marks = [10, 20, 30, 40, 50];
Span<int> middle = marks.AsSpan(1, 3);
middle[0] = 99;
middle.Reverse();
Console.WriteLine(string.Join(" ", marks));

int[] copy = middle.ToArray();
copy[0] = 0;
Console.WriteLine($"{marks[1]} {copy[0]} {middle.Length}");`,
      answer: "10 40 30 99 50\n40 0 3",
      explain: {
        en: `<ul>
<li><code>marks.AsSpan(1, 3)</code> is a <b>view</b> over elements 20, 30, 40 of the same array — no copy.</li>
<li><code>middle[0] = 99</code> changes <code>marks[1]</code> → 10 99 30 40 50. <code>middle.Reverse()</code> reverses <b>in place</b> inside that window → 10 <b>40 30 99</b> 50.</li>
<li><code>ToArray()</code> makes a real <b>copy</b> (a new heap array). Changing <code>copy[0]</code> does not touch <code>marks</code>, so <code>marks[1]</code> is still <b>40</b>, <code>copy[0]</code> is <b>0</b>, and the span length is <b>3</b>.</li>
</ul>`,
        hi: `<ul>
<li><code>marks.AsSpan(1, 3)</code> उसी array के elements 20, 30, 40 पर एक <b>view</b> है — कोई copy नहीं।</li>
<li><code>middle[0] = 99</code> <code>marks[1]</code> को बदलता है → 10 99 30 40 50। <code>middle.Reverse()</code> उस window के अंदर <b>उसी जगह</b> उल्टा करता है → 10 <b>40 30 99</b> 50।</li>
<li><code>ToArray()</code> असली <b>copy</b> बनाता है (heap पर नया array)। <code>copy[0]</code> बदलने से <code>marks</code> पर असर नहीं, इसलिए <code>marks[1]</code> अब भी <b>40</b>, <code>copy[0]</code> <b>0</b> है, और span की length <b>3</b>।</li>
</ul>`,
        hg: `<ul>
<li><code>marks.AsSpan(1, 3)</code> usi array ke elements 20, 30, 40 par ek <b>view</b> hai — koi copy nahi.</li>
<li><code>middle[0] = 99</code> <code>marks[1]</code> ko badalta hai → 10 99 30 40 50. <code>middle.Reverse()</code> us window ke andar <b>usi jagah</b> ulta karta hai → 10 <b>40 30 99</b> 50.</li>
<li><code>ToArray()</code> asli <b>copy</b> banata hai (heap par naya array). <code>copy[0]</code> badalne se <code>marks</code> par asar nahi, isliye <code>marks[1]</code> ab bhi <b>40</b>, <code>copy[0]</code> <b>0</b> hai, aur span ki length <b>3</b>.</li>
</ul>`
      }
    }
  ],
  revision: {
    en: [
      "<b>async/await is not multithreading</b>: a method runs synchronously until it awaits an <b>incomplete</b> task, then returns and frees the thread. For I/O, no thread waits.",
      "<b>Task</b> = promise of work/result on the thread pool (results, exceptions, cancellation, <code>WhenAll</code>). <b>Thread</b> = an OS thread you manage yourself — rarely needed.",
      "<b>ConfigureAwait(false)</b> = do not resume on the captured context. Use it in libraries; <b>ASP.NET Core has no SynchronizationContext</b>.",
      "<b>.Result/.Wait()</b> can deadlock UI/classic ASP.NET apps and starve the thread pool in ASP.NET Core — go <b>async all the way</b>.",
      "<b>async void</b> only for event handlers. <b>Task.Run</b> in ASP.NET Core request code is usually a smell — use a <code>BackgroundService</code> + queue for background work.",
      "<code>await Task.WhenAll</code> throws the <b>first</b> exception; the WhenAll task's <code>.Exception</code> holds <b>all</b>. <b>ValueTask</b>: await once, never twice or concurrently.",
      "<b>CancellationToken</b> is cooperative — pass it everywhere, expect <code>OperationCanceledException</code>. <b>IAsyncEnumerable</b> + <code>await foreach</code> streams items; <b>IAsyncDisposable</b> + <code>await using</code>.",
      "<code>throw;</code> keeps the stack trace, <code>throw ex;</code> resets it (CA2200). Wrap with <code>InnerException</code>; filters with <code>when</code>; one global handler returning ProblemDetails.",
      "<b>Dispose</b> = deterministic cleanup of resources by your code; <b>finalizer</b> = GC safety net at an unknown time. <code>using</code> disposes in reverse order, even on exceptions.",
      "<b>GC</b>: Gen 0 → 1 → 2, most objects die young; <b>LOH</b> = objects ≥ 85,000 bytes, collected with Gen 2, not compacted by default. Server GC is the ASP.NET Core default.",
      "<b>record</b> = value equality + <code>ToString</code> + <code>with</code> (shallow). <code>record struct</code> is a value type. Good for DTOs/value objects, not EF Core entities.",
      "<b>Pattern matching</b>: first matching arm wins. <b>NRT</b> = compile-time warnings only (<code>string?</code>). <b>Span&lt;T&gt;</b> = stack-only view, no copies; <b>Memory&lt;T&gt;</b> for fields and async."
    ],
    meaning: {
      hi: [
        "async/await multithreading नहीं है: method तब तक synchronously चलता है जब तक किसी अधूरे task को await न करे, फिर return करके thread free कर देता है। I/O के दौरान कोई thread इंतज़ार नहीं करता।",
        "Task = thread pool पर काम/result का वादा (results, exceptions, cancellation, WhenAll)। Thread = OS thread जिसे आप ख़ुद संभालते हो — शायद ही ज़रूरत पड़ती है।",
        "ConfigureAwait(false) = captured context पर वापस मत आओ। Libraries में use करो; ASP.NET Core में SynchronizationContext नहीं है।",
        ".Result/.Wait() UI/पुराने ASP.NET apps में deadlock कर सकते हैं और ASP.NET Core में thread pool को भूखा कर देते हैं — async all the way चलो।",
        "async void सिर्फ़ event handlers के लिए। ASP.NET Core request code में Task.Run अक्सर smell है — background काम के लिए BackgroundService + queue use करो।",
        "await Task.WhenAll पहला exception throw करता है; WhenAll task का .Exception सारे रखता है। ValueTask: एक बार await करो, कभी दो बार या एक साथ नहीं।",
        "CancellationToken cooperative है — हर जगह pass करो, OperationCanceledException की उम्मीद रखो। IAsyncEnumerable + await foreach items stream करते हैं; IAsyncDisposable + await using।",
        "throw; stack trace बचाता है, throw ex; reset करता है (CA2200)। InnerException के साथ wrap करो; when से filters; ProblemDetails return करने वाला एक global handler।",
        "Dispose = आपके code से resources की तय समय पर cleanup; finalizer = अनजान समय पर GC का safety net। using उल्टे order में dispose करता है, exceptions पर भी।",
        "GC: Gen 0 → 1 → 2, ज़्यादातर objects जल्दी मरते हैं; LOH = 85,000 bytes या बड़े objects, Gen 2 के साथ collect, by default compact नहीं। ASP.NET Core का default Server GC है।",
        "record = value equality + ToString + with (shallow)। record struct value type है। DTOs/value objects के लिए अच्छा, EF Core entities के लिए नहीं।",
        "Pattern matching: पहला match होने वाला arm जीतता है। NRT = सिर्फ़ compile-time warnings (string?)। Span&lt;T&gt; = stack-only view, कोई copy नहीं; fields और async के लिए Memory&lt;T&gt;।"
      ],
      hg: [
        "async/await multithreading nahi hai: method tab tak synchronously chalta hai jab tak kisi adhoore task ko await na kare, phir return karke thread free kar deta hai. I/O ke dauraan koi thread intezaar nahi karta.",
        "Task = thread pool par kaam/result ka waada (results, exceptions, cancellation, WhenAll). Thread = OS thread jise aap khud sambhalte ho — shayad hi zaroorat padti hai.",
        "ConfigureAwait(false) = captured context par wapas mat aao. Libraries mein use karo; ASP.NET Core mein SynchronizationContext nahi hai.",
        ".Result/.Wait() UI/purane ASP.NET apps mein deadlock kar sakte hain aur ASP.NET Core mein thread pool ko bhookha kar dete hain — async all the way chalo.",
        "async void sirf event handlers ke liye. ASP.NET Core request code mein Task.Run aksar smell hai — background kaam ke liye BackgroundService + queue use karo.",
        "await Task.WhenAll pehla exception throw karta hai; WhenAll task ka .Exception saare rakhta hai. ValueTask: ek baar await karo, kabhi do baar ya ek saath nahi.",
        "CancellationToken cooperative hai — har jagah pass karo, OperationCanceledException ki ummeed rakho. IAsyncEnumerable + await foreach items stream karte hain; IAsyncDisposable + await using.",
        "throw; stack trace bachata hai, throw ex; reset karta hai (CA2200). InnerException ke saath wrap karo; when se filters; ProblemDetails return karne wala ek global handler.",
        "Dispose = aapke code se resources ki tay samay par cleanup; finalizer = anjaan samay par GC ka safety net. using ulte order mein dispose karta hai, exceptions par bhi.",
        "GC: Gen 0 → 1 → 2, zyadatar objects jaldi marte hain; LOH = 85,000 bytes ya bade objects, Gen 2 ke saath collect, by default compact nahi. ASP.NET Core ka default Server GC hai.",
        "record = value equality + ToString + with (shallow). record struct value type hai. DTOs/value objects ke liye achha, EF Core entities ke liye nahi.",
        "Pattern matching: pehla match hone wala arm jeetta hai. NRT = sirf compile-time warnings (string?). Span&lt;T&gt; = stack-only view, koi copy nahi; fields aur async ke liye Memory&lt;T&gt;."
      ]
    }
  },
  whatsNew: {
    en: `<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025). Recent changes related to today's topics — each tagged with its version, and whether it is a <b>library/runtime</b> change (.NET) or a <b>language</b> feature (C#):</p>
<ul>
<li><b>.NET 8 (library)</b> — <code>ConfigureAwaitOptions</code>: <code>await task.ConfigureAwait(ConfigureAwaitOptions.SuppressThrowing)</code> waits for completion without throwing; <code>ForceYielding</code> always yields. Before, <code>ConfigureAwait</code> took only a <code>bool</code>.</li>
<li><b>.NET 8 (ASP.NET Core)</b> — <code>IExceptionHandler</code> for clean global exception handling with ProblemDetails.</li>
<li><b>.NET 9 (library)</b> — <code>Task.WhenEach</code>: <code>await foreach (var t in Task.WhenEach(tasks))</code> gives tasks in the order they <b>complete</b>, replacing the old <code>WhenAny</code> loop.</li>
<li><b>.NET 9 (runtime)</b> — exception handling in CoreCLR was reimplemented (based on the NativeAOT model), making throw/catch noticeably faster. Exceptions are still for exceptional cases.</li>
<li><b>.NET 9 (GC)</b> — <b>DATAS</b> is enabled by default with Server GC: the number of heaps adapts to the app's load, so small apps use less memory.</li>
<li><b>C# 13</b> — <code>ref</code> locals and <code>ref struct</code> locals (like <code>Span&lt;T&gt;</code>) are allowed in <code>async</code> methods and iterators, as long as they are not used across an <code>await</code>/<code>yield</code>. Before C# 13 they were not allowed there at all.</li>
<li><b>C# 13</b> — <code>allows ref struct</code> lets generic code accept <code>Span&lt;T&gt;</code>-like types (Day 2 whatsNew).</li>
<li><b>.NET 10 (library)</b> — <code>System.Linq.AsyncEnumerable</code>: LINQ operators for <code>IAsyncEnumerable&lt;T&gt;</code> are now built in; before, you added the <code>System.Linq.Async</code> NuGet package.</li>
<li><b>C# 14</b> (.NET 10) — first-class span conversions: arrays convert to <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> in more places (extension-method receivers, generic inference); and null-conditional assignment <code>customer?.Email = value;</code> (Day 2 whatsNew).</li>
</ul>
<p>The code checker for this tutorial uses the .NET 9 SDK (C# 13); nothing in today's runnable code needs C# 14.</p>`,
    hi: `<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025)। आज के topics से जुड़े हाल के बदलाव — हर एक पर उसका version लिखा है, और यह भी कि वो <b>library/runtime</b> बदलाव (.NET) है या <b>language</b> feature (C#):</p>
<ul>
<li><b>.NET 8 (library)</b> — <code>ConfigureAwaitOptions</code>: <code>await task.ConfigureAwait(ConfigureAwaitOptions.SuppressThrowing)</code> बिना throw किए completion का इंतज़ार करता है; <code>ForceYielding</code> हमेशा yield करता है। पहले <code>ConfigureAwait</code> सिर्फ़ <code>bool</code> लेता था।</li>
<li><b>.NET 8 (ASP.NET Core)</b> — ProblemDetails के साथ साफ़ global exception handling के लिए <code>IExceptionHandler</code>।</li>
<li><b>.NET 9 (library)</b> — <code>Task.WhenEach</code>: <code>await foreach (var t in Task.WhenEach(tasks))</code> tasks को उसी order में देता है जिसमें वो <b>complete</b> होते हैं, पुराने <code>WhenAny</code> loop की जगह।</li>
<li><b>.NET 9 (runtime)</b> — CoreCLR में exception handling दोबारा implement हुआ (NativeAOT model पर), जिससे throw/catch काफ़ी तेज़ हुए। Exceptions फिर भी असाधारण हालात के लिए ही हैं।</li>
<li><b>.NET 9 (GC)</b> — Server GC के साथ <b>DATAS</b> by default enabled है: heaps की संख्या app के load के हिसाब से बदलती है, इसलिए छोटे apps कम memory लेते हैं।</li>
<li><b>C# 13</b> — <code>ref</code> locals और <code>ref struct</code> locals (जैसे <code>Span&lt;T&gt;</code>) <code>async</code> methods और iterators में allowed हैं, जब तक वो <code>await</code>/<code>yield</code> के पार use न हों। C# 13 से पहले वहाँ बिल्कुल allowed नहीं थे।</li>
<li><b>C# 13</b> — <code>allows ref struct</code> से generic code <code>Span&lt;T&gt;</code> जैसे types ले सकता है (Day 2 whatsNew)।</li>
<li><b>.NET 10 (library)</b> — <code>System.Linq.AsyncEnumerable</code>: <code>IAsyncEnumerable&lt;T&gt;</code> के लिए LINQ operators अब built-in हैं; पहले <code>System.Linq.Async</code> NuGet package जोड़ना पड़ता था।</li>
<li><b>C# 14</b> (.NET 10) — first-class span conversions: arrays अब ज़्यादा जगहों पर <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> में convert होते हैं (extension-method receivers, generic inference); और null-conditional assignment <code>customer?.Email = value;</code> (Day 2 whatsNew)।</li>
</ul>
<p>इस tutorial का code checker .NET 9 SDK (C# 13) use करता है; आज के runnable code में कुछ भी C# 14 पर depend नहीं करता।</p>`,
    hg: `<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025). Aaj ke topics se jude haal ke badlaav — har ek par uska version likha hai, aur yeh bhi ki woh <b>library/runtime</b> badlaav (.NET) hai ya <b>language</b> feature (C#):</p>
<ul>
<li><b>.NET 8 (library)</b> — <code>ConfigureAwaitOptions</code>: <code>await task.ConfigureAwait(ConfigureAwaitOptions.SuppressThrowing)</code> bina throw kiye completion ka intezaar karta hai; <code>ForceYielding</code> hamesha yield karta hai. Pehle <code>ConfigureAwait</code> sirf <code>bool</code> leta tha.</li>
<li><b>.NET 8 (ASP.NET Core)</b> — ProblemDetails ke saath saaf global exception handling ke liye <code>IExceptionHandler</code>.</li>
<li><b>.NET 9 (library)</b> — <code>Task.WhenEach</code>: <code>await foreach (var t in Task.WhenEach(tasks))</code> tasks ko usi order mein deta hai jismein woh <b>complete</b> hote hain, purane <code>WhenAny</code> loop ki jagah.</li>
<li><b>.NET 9 (runtime)</b> — CoreCLR mein exception handling dobara implement hua (NativeAOT model par), jisse throw/catch kaafi tez hue. Exceptions phir bhi asaadhaaran haalaat ke liye hi hain.</li>
<li><b>.NET 9 (GC)</b> — Server GC ke saath <b>DATAS</b> by default enabled hai: heaps ki sankhya app ke load ke hisaab se badalti hai, isliye chhote apps kam memory lete hain.</li>
<li><b>C# 13</b> — <code>ref</code> locals aur <code>ref struct</code> locals (jaise <code>Span&lt;T&gt;</code>) <code>async</code> methods aur iterators mein allowed hain, jab tak woh <code>await</code>/<code>yield</code> ke paar use na hon. C# 13 se pehle wahan bilkul allowed nahi the.</li>
<li><b>C# 13</b> — <code>allows ref struct</code> se generic code <code>Span&lt;T&gt;</code> jaise types le sakta hai (Day 2 whatsNew).</li>
<li><b>.NET 10 (library)</b> — <code>System.Linq.AsyncEnumerable</code>: <code>IAsyncEnumerable&lt;T&gt;</code> ke liye LINQ operators ab built-in hain; pehle <code>System.Linq.Async</code> NuGet package jodna padta tha.</li>
<li><b>C# 14</b> (.NET 10) — first-class span conversions: arrays ab zyada jagahon par <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> mein convert hote hain (extension-method receivers, generic inference); aur null-conditional assignment <code>customer?.Email = value;</code> (Day 2 whatsNew).</li>
</ul>
<p>Is tutorial ka code checker .NET 9 SDK (C# 13) use karta hai; aaj ke runnable code mein kuch bhi C# 14 par depend nahi karta.</p>`
  }
};
