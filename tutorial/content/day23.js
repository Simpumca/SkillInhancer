// Day 23 — JavaScript essentials. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 23,
  title: {
    en: "JavaScript essentials — var/let/const, closures, this, prototypes, event loop, promises, modules, fetch, jQuery to modern DOM",
    hi: "JavaScript essentials — var/let/const, closures, this, prototypes, event loop, promises, modules, fetch, jQuery से modern DOM",
    hg: "JavaScript essentials — var/let/const, closures, this, prototypes, event loop, promises, modules, fetch, jQuery se modern DOM"
  },
  summary: {
    en: `<p>JavaScript is your <b>weakest skill (2/10)</b>, so today starts from the ground up and compares with C# wherever that helps. A Tech Lead is not asked to write clever one-liners; he is asked "<b>why did this button handler print the wrong value?</b>" or "<b>how does async work without threads?</b>" Eight ideas answer most of those questions.</p>
<ul>
<li><b>Variables and scope:</b> prefer <code>const</code>, then <code>let</code>; avoid <code>var</code> (function-scoped, hoisted as <code>undefined</code>). <code>let</code> and <code>const</code> are block-scoped and sit in the <b>temporal dead zone</b> until their line runs.</li>
<li><b>Closures:</b> a function remembers the variables around where it was created, not copies of their values. That is why a <code>var</code> loop with callbacks prints the last value three times.</li>
<li><b><code>this</code>:</b> decided by <b>how a function is called</b>, not where it is written: plain call, method call, <code>call/apply/bind</code>, or <code>new</code>. Arrow functions have no own <code>this</code>; they use the one from the surrounding code.</li>
<li><b>Prototypes and classes:</b> objects inherit from other objects through a prototype chain. <code>class</code> is clean syntax over the same mechanism, with <code>#private</code> fields that are truly private.</li>
<li><b>Values:</b> use <code>===</code>. <code>??</code> falls back only for <code>null</code>/<code>undefined</code>, while <code>||</code> also replaces <code>0</code>, <code>""</code> and <code>false</code>. <code>?.</code> stops safely at a missing value.</li>
<li><b>Event loop:</b> one thread runs your JavaScript. Order is: synchronous code, then all <b>microtasks</b> (promise callbacks), then the next <b>macrotask</b> (<code>setTimeout</code>). <code>async/await</code> is promises with nicer syntax; no thread pool is involved.</li>
<li><b>Modules and network:</b> ES modules (<code>import/export</code>) are the standard. <code>fetch</code> does <b>not</b> reject on HTTP 404/500; check <code>res.ok</code>.</li>
<li><b>jQuery to modern DOM:</b> <code>querySelector</code>, <code>addEventListener</code>, <code>classList</code> and <code>fetch</code> cover most of what you used jQuery for. TL angle: TypeScript and ESLint as team guard-rails (React on Day 24 is often written in TypeScript).</li>
</ul>
<p>Plan (about 25 minutes for Short plus about 2 hours for Detailed): Short mode, then Q&amp;A aloud, then the code sections (DOM, module and TypeScript snippets are display-only; the rest runs on Node), then the seven puzzles, which run offline.</p>`,
    hi: `<p>JavaScript तुम्हारी <b>सबसे कमज़ोर skill (2/10)</b> है, इसलिए आज बिल्कुल शुरू से चलेंगे और जहाँ मदद मिले वहाँ C# से compare करेंगे। Tech Lead से clever one-liners नहीं माँगे जाते; उससे पूछा जाता है "<b>इस button handler ने ग़लत value क्यों print की?</b>" या "<b>बिना threads के async कैसे चलता है?</b>" आठ ideas इनमें से ज़्यादातर सवालों का जवाब दे देते हैं।</p>
<ul>
<li><b>Variables और scope:</b> पहले <code>const</code>, फिर <code>let</code> use करो; <code>var</code> से बचो (function-scoped, और <code>undefined</code> के साथ hoist होता है)। <code>let</code> और <code>const</code> block-scoped हैं और अपनी line चलने तक <b>temporal dead zone</b> में रहते हैं।</li>
<li><b>Closures:</b> function उन variables को याद रखता है जो उसके बनने की जगह के आसपास थे, उनकी values की copies को नहीं। इसीलिए <code>var</code> वाला loop callbacks में आख़िरी value तीन बार print करता है।</li>
<li><b><code>this</code>:</b> यह इससे तय होता है कि function <b>call कैसे हुआ</b>, इससे नहीं कि वह कहाँ लिखा है: plain call, method call, <code>call/apply/bind</code>, या <code>new</code>। Arrow functions का अपना <code>this</code> नहीं होता; वे आसपास के code वाला <code>this</code> लेते हैं।</li>
<li><b>Prototypes और classes:</b> objects दूसरे objects से prototype chain के ज़रिए inherit करते हैं। <code>class</code> उसी mechanism पर साफ़ syntax है, और <code>#private</code> fields सच में private होते हैं।</li>
<li><b>Values:</b> <code>===</code> use करो। <code>??</code> सिर्फ़ <code>null</code>/<code>undefined</code> पर fallback देता है, जबकि <code>||</code> <code>0</code>, <code>""</code> और <code>false</code> को भी बदल देता है। <code>?.</code> missing value पर safely रुक जाता है।</li>
<li><b>Event loop:</b> तुम्हारा JavaScript एक ही thread चलाता है। Order यह है: synchronous code, फिर सारे <b>microtasks</b> (promise callbacks), फिर अगला <b>macrotask</b> (<code>setTimeout</code>)। <code>async/await</code> promises ही हैं, बस बेहतर syntax में; कोई thread pool involved नहीं है।</li>
<li><b>Modules और network:</b> ES modules (<code>import/export</code>) standard हैं। <code>fetch</code> HTTP 404/500 पर reject <b>नहीं</b> करता; <code>res.ok</code> check करो।</li>
<li><b>jQuery से modern DOM:</b> जिसके लिए तुम jQuery use करते थे, उसका ज़्यादातर हिस्सा <code>querySelector</code>, <code>addEventListener</code>, <code>classList</code> और <code>fetch</code> से हो जाता है। TL angle: TypeScript और ESLint team के guard-rails की तरह (Day 24 की React अक्सर TypeScript में लिखी जाती है)।</li>
</ul>
<p>Plan (Short लगभग 25 मिनट, Detailed लगभग 2 घंटे अलग से): पहले Short mode, फिर Q&amp;A ज़ोर से, फिर code sections (DOM, module और TypeScript snippets सिर्फ़ दिखाने के लिए हैं; बाक़ी Node पर चलता है), फिर सात puzzles जो offline चलते हैं।</p>`,
    hg: `<p>JavaScript tumhari <b>sabse kamzor skill (2/10)</b> hai, isliye aaj bilkul shuru se chalenge aur jahan madad mile wahan C# se compare karenge. Tech Lead se clever one-liners nahi maange jaate; usse poocha jaata hai "<b>is button handler ne galat value kyon print ki?</b>" ya "<b>bina threads ke async kaise chalta hai?</b>" Aath ideas inmein se zyaadatar sawaalon ka jawab de dete hain.</p>
<ul>
<li><b>Variables aur scope:</b> pehle <code>const</code>, phir <code>let</code> use karo; <code>var</code> se bacho (function-scoped, aur <code>undefined</code> ke saath hoist hota hai). <code>let</code> aur <code>const</code> block-scoped hain aur apni line chalne tak <b>temporal dead zone</b> mein rehte hain.</li>
<li><b>Closures:</b> function un variables ko yaad rakhta hai jo uske banne ki jagah ke aaspaas the, unki values ki copies ko nahi. Isiliye <code>var</code> wala loop callbacks mein aakhri value teen baar print karta hai.</li>
<li><b><code>this</code>:</b> yeh is baat se tay hota hai ki function <b>call kaise hua</b>, is baat se nahi ki woh kahan likha hai: plain call, method call, <code>call/apply/bind</code>, ya <code>new</code>. Arrow functions ka apna <code>this</code> nahi hota; woh aaspaas ke code wala <code>this</code> lete hain.</li>
<li><b>Prototypes aur classes:</b> objects doosre objects se prototype chain ke zariye inherit karte hain. <code>class</code> usi mechanism par saaf syntax hai, aur <code>#private</code> fields sach mein private hote hain.</li>
<li><b>Values:</b> <code>===</code> use karo. <code>??</code> sirf <code>null</code>/<code>undefined</code> par fallback deta hai, jabki <code>||</code> <code>0</code>, <code>""</code> aur <code>false</code> ko bhi badal deta hai. <code>?.</code> missing value par safely ruk jaata hai.</li>
<li><b>Event loop:</b> tumhara JavaScript ek hi thread chalata hai. Order yeh hai: synchronous code, phir saare <b>microtasks</b> (promise callbacks), phir agla <b>macrotask</b> (<code>setTimeout</code>). <code>async/await</code> promises hi hain, bas behtar syntax mein; koi thread pool involved nahi hai.</li>
<li><b>Modules aur network:</b> ES modules (<code>import/export</code>) standard hain. <code>fetch</code> HTTP 404/500 par reject <b>nahi</b> karta; <code>res.ok</code> check karo.</li>
<li><b>jQuery se modern DOM:</b> jiske liye tum jQuery use karte the, uska zyaadatar hissa <code>querySelector</code>, <code>addEventListener</code>, <code>classList</code> aur <code>fetch</code> se ho jaata hai. TL angle: TypeScript aur ESLint team ke guard-rails ki tarah (Day 24 ki React aksar TypeScript mein likhi jaati hai).</li>
</ul>
<p>Plan (Short lagbhag 25 minute, Detailed lagbhag 2 ghante alag se): pehle Short mode, phir Q&amp;A zor se, phir code sections (DOM, module aur TypeScript snippets sirf dikhane ke liye hain; baaki Node par chalta hai), phir saat puzzles jo offline chalte hain.</p>`
  },
  sections: [
    {
      id: "language-core-overview",
      depth: "short",
      title: {
        en: "Variables, scope, closures and this — the four traps",
        hi: "Variables, scope, closures और this — चार traps",
        hg: "Variables, scope, closures aur this — chaar traps"
      },
      body: {
        en: `<p><b>Analogy:</b> a tiffin box remembers the <b>kitchen it was packed in</b>, not a photo of it. A closure works the same way: the function keeps a live link to the variables around it. And the word "I" means whoever is speaking right now; <code>this</code> also depends on <b>who is calling</b>.</p>
<ul>
<li><b>Declarations:</b> <code>const</code> (cannot be re-assigned, but an object inside can still change), <code>let</code> (re-assignable, block-scoped), <code>var</code> (function-scoped, legacy). Default to <code>const</code>.</li>
<li><b>Hoisting:</b> declarations are registered before the code runs. A <code>var</code> reads as <code>undefined</code> before its line; a <code>let</code>/<code>const</code> throws <code>ReferenceError</code> in the <b>temporal dead zone</b>; a function declaration works fully before its line.</li>
<li><b>Closure:</b> an inner function keeps access to the variables of the place where it was created. Trap: <code>var</code> in a loop shares ONE variable, so every callback sees the last value; <code>let</code> gives each iteration its own variable.</li>
<li><b><code>this</code> rules:</b> <code>new</code> beats explicit <code>bind/call/apply</code>, which beats a method call (<code>obj.f()</code>), which beats a plain call (<code>undefined</code> in strict mode and modules). Arrow functions skip all of this and use the surrounding <code>this</code>.</li>
<li><b>C# comparison:</b> C# locals are block-scoped and must be assigned before use, so there is no hoisting surprise. A C# lambda capturing a loop variable behaves well in <code>foreach</code> since C# 5, much like <code>let</code>.</li>
</ul>`,
        hi: `<p><b>Analogy:</b> tiffin box को याद रहता है कि वह <b>किस kitchen में packed हुआ</b> था, उसकी photo नहीं, असली kitchen। Closure भी ऐसे ही काम करता है: function अपने आसपास के variables से live link रखता है। और "मैं" शब्द का मतलब वही है जो अभी बोल रहा है; <code>this</code> भी इस पर depend करता है कि <b>call कौन कर रहा है</b>।</p>
<ul>
<li><b>Declarations:</b> <code>const</code> (दोबारा assign नहीं हो सकता, पर उसके अंदर का object बदल सकता है), <code>let</code> (दोबारा assign हो सकता है, block-scoped), <code>var</code> (function-scoped, legacy)। Default में <code>const</code> रखो।</li>
<li><b>Hoisting:</b> declarations code चलने से पहले register हो जाते हैं। <code>var</code> अपनी line से पहले <code>undefined</code> पढ़ा जाता है; <code>let</code>/<code>const</code> <b>temporal dead zone</b> में <code>ReferenceError</code> फेंकता है; function declaration अपनी line से पहले भी पूरा चलता है।</li>
<li><b>Closure:</b> inner function उस जगह के variables तक पहुँच रखता है जहाँ वह बना था। Trap: loop में <code>var</code> एक ही variable share करता है, इसलिए हर callback आख़िरी value देखता है; <code>let</code> हर iteration को अपना variable देता है।</li>
<li><b><code>this</code> के rules:</b> <code>new</code> जीतता है explicit <code>bind/call/apply</code> से, वह method call (<code>obj.f()</code>) से, और वह plain call से (strict mode और modules में <code>undefined</code>)। Arrow functions यह सब छोड़कर आसपास का <code>this</code> लेते हैं।</li>
<li><b>C# से comparison:</b> C# में locals block-scoped होते हैं और use से पहले assign करने पड़ते हैं, इसलिए hoisting वाली surprise नहीं होती। C# 5 से <code>foreach</code> में loop variable capture करने वाला lambda ठीक चलता है, <code>let</code> जैसा।</li>
</ul>`,
        hg: `<p><b>Analogy:</b> tiffin box ko yaad rehta hai ki woh <b>kis kitchen mein pack hua</b> tha, uski photo nahi, asli kitchen. Closure bhi aise hi kaam karta hai: function apne aaspaas ke variables se live link rakhta hai. Aur "main" shabd ka matlab wahi hai jo abhi bol raha hai; <code>this</code> bhi is par depend karta hai ki <b>call kaun kar raha hai</b>.</p>
<ul>
<li><b>Declarations:</b> <code>const</code> (dobara assign nahi ho sakta, par uske andar ka object badal sakta hai), <code>let</code> (dobara assign ho sakta hai, block-scoped), <code>var</code> (function-scoped, legacy). Default mein <code>const</code> rakho.</li>
<li><b>Hoisting:</b> declarations code chalne se pehle register ho jaate hain. <code>var</code> apni line se pehle <code>undefined</code> padha jaata hai; <code>let</code>/<code>const</code> <b>temporal dead zone</b> mein <code>ReferenceError</code> phenkta hai; function declaration apni line se pehle bhi poora chalta hai.</li>
<li><b>Closure:</b> inner function us jagah ke variables tak pahunch rakhta hai jahan woh bana tha. Trap: loop mein <code>var</code> ek hi variable share karta hai, isliye har callback aakhri value dekhta hai; <code>let</code> har iteration ko apna variable deta hai.</li>
<li><b><code>this</code> ke rules:</b> <code>new</code> jeetta hai explicit <code>bind/call/apply</code> se, woh method call (<code>obj.f()</code>) se, aur woh plain call se (strict mode aur modules mein <code>undefined</code>). Arrow functions yeh sab chhodkar aaspaas ka <code>this</code> lete hain.</li>
<li><b>C# se comparison:</b> C# mein locals block-scoped hote hain aur use se pehle assign karne padte hain, isliye hoisting wali surprise nahi hoti. C# 5 se <code>foreach</code> mein loop variable capture karne wala lambda theek chalta hai, <code>let</code> jaisa.</li>
</ul>`
      }
    },
    {
      id: "event-loop-promises-overview",
      depth: "short",
      title: {
        en: "Event loop, promises and async/await",
        hi: "Event loop, promises और async/await",
        hg: "Event loop, promises aur async/await"
      },
      body: {
        en: `<p><b>Analogy:</b> a chai stall with <b>one owner</b>. He takes your order (synchronous code), puts the kettle on and does not stand watching it (the browser or OS does the waiting), and when something is ready the helper hands it over. Customers already at the counter (<b>microtasks</b>) are served before the queue outside the shop (<b>macrotasks</b>).</p>
<ul>
<li><b>Single thread:</b> one thread runs your JavaScript, one piece at a time, so a long loop freezes the page or blocks a Node server. Waiting (network, timers, files) is handled outside your code and results come back through queues.</li>
<li><b>Order:</b> run the current synchronous code to the end, then drain <b>all microtasks</b> (promise callbacks, <code>queueMicrotask</code>), then take <b>one macrotask</b> (<code>setTimeout</code>, I/O, UI events), then drain microtasks again. So <code>Promise.then</code> runs before <code>setTimeout(…, 0)</code>.</li>
<li><b>Promise:</b> pending, then fulfilled or rejected (together called <i>settled</i>). <code>then</code>, <code>catch</code> and <code>finally</code> return new promises. Combinators: <code>all</code> (fails fast), <code>allSettled</code> (never rejects), <code>race</code> (first settled), <code>any</code> (first fulfilled).</li>
<li><b>async/await:</b> an <code>async</code> function always returns a promise; <code>await</code> pauses only that function and lets the loop run other work. Errors become <code>try/catch</code>.</li>
<li><b>vs C# Task (Day 3):</b> both start work eagerly and compose. A C# continuation may resume on a thread-pool thread; in JavaScript there is no thread pool for your code, only the one loop thread.</li>
</ul>`,
        hi: `<p><b>Analogy:</b> एक chai stall जिसमें <b>एक ही मालिक</b> है। वह तुम्हारा order लेता है (synchronous code), केतली चढ़ाकर उसके पास खड़ा नहीं रहता (इंतज़ार browser या OS करता है), और जब कुछ ready होता है तो helper दे जाता है। Counter पर पहले से खड़े customers (<b>microtasks</b>) को दुकान के बाहर की queue (<b>macrotasks</b>) से पहले serve किया जाता है।</p>
<ul>
<li><b>Single thread:</b> तुम्हारा JavaScript एक thread पर, एक बार में एक काम चलता है, इसलिए लंबा loop page को freeze कर देता है या Node server को block कर देता है। इंतज़ार (network, timers, files) तुम्हारे code के बाहर होता है और नतीजे queues से वापस आते हैं।</li>
<li><b>Order:</b> मौजूदा synchronous code पूरा चलाओ, फिर <b>सारे microtasks</b> (promise callbacks, <code>queueMicrotask</code>) निपटाओ, फिर <b>एक macrotask</b> (<code>setTimeout</code>, I/O, UI events) लो, फिर दोबारा microtasks निपटाओ। इसलिए <code>Promise.then</code> <code>setTimeout(…, 0)</code> से पहले चलता है।</li>
<li><b>Promise:</b> पहले pending, फिर fulfilled या rejected (दोनों मिलकर <i>settled</i>)। <code>then</code>, <code>catch</code> और <code>finally</code> नए promises लौटाते हैं। Combinators: <code>all</code> (fail-fast), <code>allSettled</code> (कभी reject नहीं होता), <code>race</code> (जो पहले settle हो), <code>any</code> (जो पहले fulfill हो)।</li>
<li><b>async/await:</b> <code>async</code> function हमेशा एक promise लौटाता है; <code>await</code> सिर्फ़ उसी function को pause करता है और loop को दूसरा काम करने देता है। Errors <code>try/catch</code> बन जाते हैं।</li>
<li><b>C# Task से comparison (Day 3):</b> दोनों काम तुरंत शुरू करते हैं और compose होते हैं। C# का continuation thread-pool के thread पर resume हो सकता है; JavaScript में तुम्हारे code के लिए thread pool नहीं है, सिर्फ़ loop वाला एक thread है।</li>
</ul>`,
        hg: `<p><b>Analogy:</b> ek chai stall jisme <b>ek hi maalik</b> hai. Woh tumhara order leta hai (synchronous code), ketli chadhakar uske paas khada nahi rehta (intezaar browser ya OS karta hai), aur jab kuch ready hota hai to helper de jaata hai. Counter par pehle se khade customers (<b>microtasks</b>) ko dukaan ke bahar ki queue (<b>macrotasks</b>) se pehle serve kiya jaata hai.</p>
<ul>
<li><b>Single thread:</b> tumhara JavaScript ek thread par, ek baar mein ek kaam chalta hai, isliye lamba loop page ko freeze kar deta hai ya Node server ko block kar deta hai. Intezaar (network, timers, files) tumhare code ke bahar hota hai aur nateeje queues se wapas aate hain.</li>
<li><b>Order:</b> maujooda synchronous code poora chalao, phir <b>saare microtasks</b> (promise callbacks, <code>queueMicrotask</code>) nipta do, phir <b>ek macrotask</b> (<code>setTimeout</code>, I/O, UI events) lo, phir dobara microtasks nipta do. Isliye <code>Promise.then</code> <code>setTimeout(…, 0)</code> se pehle chalta hai.</li>
<li><b>Promise:</b> pehle pending, phir fulfilled ya rejected (dono milkar <i>settled</i>). <code>then</code>, <code>catch</code> aur <code>finally</code> naye promises lautate hain. Combinators: <code>all</code> (fail-fast), <code>allSettled</code> (kabhi reject nahi hota), <code>race</code> (jo pehle settle ho), <code>any</code> (jo pehle fulfill ho).</li>
<li><b>async/await:</b> <code>async</code> function hamesha ek promise lautata hai; <code>await</code> sirf usi function ko pause karta hai aur loop ko doosra kaam karne deta hai. Errors <code>try/catch</code> ban jaate hain.</li>
<li><b>C# Task se comparison (Day 3):</b> dono kaam turant shuru karte hain aur compose hote hain. C# ka continuation thread-pool ke thread par resume ho sakta hai; JavaScript mein tumhare code ke liye thread pool nahi hai, sirf loop wala ek thread hai.</li>
</ul>`
      }
    },
    {
      id: "values-modules-dom-overview",
      depth: "short",
      title: {
        en: "Values, objects, modules, fetch and the jQuery-to-DOM move",
        hi: "Values, objects, modules, fetch और jQuery से DOM की तरफ़",
        hg: "Values, objects, modules, fetch aur jQuery se DOM ki taraf"
      },
      body: {
        en: `<p><b>Analogy:</b> jQuery was a Swiss-army knife you carried everywhere. Today's browsers ship most of those blades built in, like the tools already inside your phone.</p>
<ul>
<li><b>Equality and truthiness:</b> <code>===</code> compares without converting types; <code>==</code> converts first and has surprising results (<code>[] == false</code> is <code>true</code>). Falsy values: <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Empty arrays and objects are truthy.</li>
<li><b>Safe defaults:</b> <code>a ?? b</code> uses <code>b</code> only when <code>a</code> is <code>null</code> or <code>undefined</code>; <code>a?.b</code> returns <code>undefined</code> instead of throwing when <code>a</code> is missing.</li>
<li><b>Objects and arrays:</b> spread (<code>{ ...a }</code>) makes a <b>shallow</b> copy; destructuring pulls fields out; <code>map/filter/reduce</code> are the LINQ <code>Select/Where/Aggregate</code> of JavaScript (LINQ is Day 4), but they run eagerly, not lazily.</li>
<li><b>Modules:</b> ES modules use <code>import</code>/<code>export</code> and are the standard in browsers and modern Node. CommonJS (<code>require</code>) is the older Node style you will meet in legacy code.</li>
<li><b>fetch:</b> returns a promise that rejects only on network failure. A 404 or 500 still <b>resolves</b>, so check <code>res.ok</code> yourself.</li>
<li><b>jQuery to DOM:</b> <code>$(sel)</code> becomes <code>querySelectorAll</code>, <code>.on()</code> becomes <code>addEventListener</code>, <code>.addClass()</code> becomes <code>classList.add</code>, <code>$.ajax</code> becomes <code>fetch</code>.</li>
<li><b>TL angle:</b> TypeScript (types checked before running) and ESLint (rules checked in CI) catch the traps from this page before they reach production.</li>
</ul>`,
        hi: `<p><b>Analogy:</b> jQuery एक Swiss-army knife था जो तुम हर जगह लेकर चलते थे। आज के browsers में उन ज़्यादातर blades को built-in दे दिया गया है, जैसे तुम्हारे phone में पहले से मौजूद tools।</p>
<ul>
<li><b>Equality और truthiness:</b> <code>===</code> types बदले बिना compare करता है; <code>==</code> पहले convert करता है और चौंकाने वाले नतीजे देता है (<code>[] == false</code> <code>true</code> है)। Falsy values: <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>। Empty arrays और objects truthy हैं।</li>
<li><b>Safe defaults:</b> <code>a ?? b</code> सिर्फ़ तब <code>b</code> लेता है जब <code>a</code> <code>null</code> या <code>undefined</code> हो; <code>a?.b</code> में <code>a</code> missing हो तो error फेंकने की जगह <code>undefined</code> मिलता है।</li>
<li><b>Objects और arrays:</b> spread (<code>{ ...a }</code>) <b>shallow</b> copy बनाता है; destructuring से fields बाहर निकलती हैं; <code>map/filter/reduce</code> JavaScript के LINQ <code>Select/Where/Aggregate</code> हैं (LINQ Day 4 में है), पर ये eagerly चलते हैं, lazily नहीं।</li>
<li><b>Modules:</b> ES modules <code>import</code>/<code>export</code> use करते हैं और browsers व modern Node में standard हैं। CommonJS (<code>require</code>) पुराना Node style है जो legacy code में मिलेगा।</li>
<li><b>fetch:</b> ऐसा promise लौटाता है जो सिर्फ़ network failure पर reject होता है। 404 या 500 पर भी वह <b>resolve</b> होता है, इसलिए <code>res.ok</code> ख़ुद check करो।</li>
<li><b>jQuery से DOM:</b> <code>$(sel)</code> बनता है <code>querySelectorAll</code>, <code>.on()</code> बनता है <code>addEventListener</code>, <code>.addClass()</code> बनता है <code>classList.add</code>, <code>$.ajax</code> बनता है <code>fetch</code>।</li>
<li><b>TL angle:</b> TypeScript (चलाने से पहले types check) और ESLint (CI में rules check) इस page के traps को production तक पहुँचने से पहले पकड़ लेते हैं।</li>
</ul>`,
        hg: `<p><b>Analogy:</b> jQuery ek Swiss-army knife tha jo tum har jagah lekar chalte the. Aaj ke browsers mein un zyaadatar blades ko built-in de diya gaya hai, jaise tumhare phone mein pehle se maujood tools.</p>
<ul>
<li><b>Equality aur truthiness:</b> <code>===</code> types badle bina compare karta hai; <code>==</code> pehle convert karta hai aur chaunkane wale nateeje deta hai (<code>[] == false</code> <code>true</code> hai). Falsy values: <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Empty arrays aur objects truthy hain.</li>
<li><b>Safe defaults:</b> <code>a ?? b</code> sirf tab <code>b</code> leta hai jab <code>a</code> <code>null</code> ya <code>undefined</code> ho; <code>a?.b</code> mein <code>a</code> missing ho to error phenkne ki jagah <code>undefined</code> milta hai.</li>
<li><b>Objects aur arrays:</b> spread (<code>{ ...a }</code>) <b>shallow</b> copy banata hai; destructuring se fields bahar nikalti hain; <code>map/filter/reduce</code> JavaScript ke LINQ <code>Select/Where/Aggregate</code> hain (LINQ Day 4 mein hai), par yeh eagerly chalte hain, lazily nahi.</li>
<li><b>Modules:</b> ES modules <code>import</code>/<code>export</code> use karte hain aur browsers va modern Node mein standard hain. CommonJS (<code>require</code>) purana Node style hai jo legacy code mein milega.</li>
<li><b>fetch:</b> aisa promise lautata hai jo sirf network failure par reject hota hai. 404 ya 500 par bhi woh <b>resolve</b> hota hai, isliye <code>res.ok</code> khud check karo.</li>
<li><b>jQuery se DOM:</b> <code>$(sel)</code> banta hai <code>querySelectorAll</code>, <code>.on()</code> banta hai <code>addEventListener</code>, <code>.addClass()</code> banta hai <code>classList.add</code>, <code>$.ajax</code> banta hai <code>fetch</code>.</li>
<li><b>TL angle:</b> TypeScript (chalane se pehle types check) aur ESLint (CI mein rules check) is page ke traps ko production tak pahunchne se pehle pakad lete hain.</li>
</ul>`
      }
    },
    {
      id: "scope-closures-in-code",
      depth: "detailed",
      title: {
        en: "Scope and closures in code — var, let, const, hoisting, private state",
        hi: "Scope और closures code में — var, let, const, hoisting, private state",
        hg: "Scope aur closures code mein — var, let, const, hoisting, private state"
      },
      body: {
        en: `<p><b>Analogy:</b> think of a flat with rooms. A <code>let</code>/<code>const</code> belongs to one room (a block); a <code>var</code> ignores the room walls and belongs to the whole flat (the function). A closure is a tiffin that still knows its kitchen after it leaves the house.</p>
<ul>
<li><b><code>const</code> protects the binding, not the object:</b> you cannot point the name somewhere else, but <code>list.push(3)</code> still works. Use <code>Object.freeze</code> only when you really want a (shallow) read-only object.</li>
<li><b>Hoisting in one line:</b> the engine knows all declarations before running, but only functions and <code>var</code> are usable early (<code>var</code> as <code>undefined</code>). <code>typeof</code> on an undeclared name is the one safe check that does not throw.</li>
<li><b>Closures hold variables, not values:</b> a counter or a "run once" wrapper keeps its state in a closure that no outside code can touch, similar to a private field in C#.</li>
<li><b>Review checklist:</b> <code>var</code> in new code, a loop that creates callbacks, a long-lived callback holding a big object, and a missing <code>const</code>.</li>
</ul>
<p><b>When to use closures:</b> private state, factories, callbacks, memoising, partial application. <b>When not:</b> if many functions share the same state, a <code>class</code> or module is easier to read and test; and a closure kept alive in a long-lived listener also keeps its captured data alive (a memory-leak source).</p>`,
        hi: `<p><b>Analogy:</b> rooms वाले एक flat की सोचो। <code>let</code>/<code>const</code> एक room (block) का होता है; <code>var</code> room की दीवारें नहीं मानता और पूरे flat (function) का होता है। Closure वह tiffin है जो घर से निकलने के बाद भी अपनी kitchen को जानता है।</p>
<ul>
<li><b><code>const</code> binding को protect करता है, object को नहीं:</b> तुम नाम को कहीं और point नहीं करा सकते, पर <code>list.push(3)</code> फिर भी चलता है। <code>Object.freeze</code> तभी use करो जब सच में (shallow) read-only object चाहिए।</li>
<li><b>Hoisting एक line में:</b> engine चलाने से पहले सारे declarations जानता है, पर जल्दी सिर्फ़ functions और <code>var</code> use हो सकते हैं (<code>var</code> <code>undefined</code> बनकर)। Undeclared नाम पर <code>typeof</code> अकेला safe check है जो error नहीं फेंकता।</li>
<li><b>Closures variables पकड़ते हैं, values नहीं:</b> counter या "सिर्फ़ एक बार चलाओ" wrapper अपनी state closure में रखता है जिसे बाहर का कोई code छू नहीं सकता, C# के private field जैसा।</li>
<li><b>Review checklist:</b> नए code में <code>var</code>, callbacks बनाने वाला loop, बड़ा object पकड़कर रखने वाला long-lived callback, और छूटा हुआ <code>const</code>।</li>
</ul>
<p><b>Closures कब use करें:</b> private state, factories, callbacks, memoising, partial application। <b>कब नहीं:</b> अगर कई functions एक ही state share करते हैं तो <code>class</code> या module पढ़ने और test करने में आसान है; और long-lived listener में रखा closure अपना captured data भी ज़िंदा रखता है (memory leak का source)।</p>`,
        hg: `<p><b>Analogy:</b> rooms wale ek flat ki socho. <code>let</code>/<code>const</code> ek room (block) ka hota hai; <code>var</code> room ki deewarein nahi maanta aur poore flat (function) ka hota hai. Closure woh tiffin hai jo ghar se nikalne ke baad bhi apni kitchen ko jaanta hai.</p>
<ul>
<li><b><code>const</code> binding ko protect karta hai, object ko nahi:</b> tum naam ko kahin aur point nahi kara sakte, par <code>list.push(3)</code> phir bhi chalta hai. <code>Object.freeze</code> tabhi use karo jab sach mein (shallow) read-only object chahiye.</li>
<li><b>Hoisting ek line mein:</b> engine chalane se pehle saare declarations jaanta hai, par jaldi sirf functions aur <code>var</code> use ho sakte hain (<code>var</code> <code>undefined</code> banke). Undeclared naam par <code>typeof</code> akela safe check hai jo error nahi phenkta.</li>
<li><b>Closures variables pakadte hain, values nahi:</b> counter ya "sirf ek baar chalao" wrapper apni state closure mein rakhta hai jise bahar ka koi code chhoo nahi sakta, C# ke private field jaisa.</li>
<li><b>Review checklist:</b> naye code mein <code>var</code>, callbacks banane wala loop, bada object pakadkar rakhne wala long-lived callback, aur chhoota hua <code>const</code>.</li>
</ul>
<p><b>Closures kab use karein:</b> private state, factories, callbacks, memoising, partial application. <b>Kab nahi:</b> agar kai functions ek hi state share karte hain to <code>class</code> ya module padhne aur test karne mein aasaan hai; aur long-lived listener mein rakha closure apna captured data bhi zinda rakhta hai (memory leak ka source).</p>`
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "var is function-scoped, let/const are block-scoped; const protects the name, not the object (runs on Node)",
            hi: "var function-scoped है, let/const block-scoped; const नाम को protect करता है, object को नहीं (Node पर चलता है)",
            hg: "var function-scoped hai, let/const block-scoped; const naam ko protect karta hai, object ko nahi (Node par chalta hai)"
          },
          check: "run",
          src: `function demo() {
  if (true) {
    var functionScoped = "var leaks out of the block";
    let blockScoped = "let stays inside";
    const list = [1, 2];
    list.push(3); // allowed: const protects the binding, not the array
    console.log(blockScoped, list.length);
  }
  console.log(functionScoped);
  console.log(typeof blockScoped); // typeof on an unknown name does not throw
}
demo();`,
          expected: `let stays inside 3
var leaks out of the block
undefined`
        },
        {
          lang: "javascript",
          caption: {
            en: "Closure as private state: a counter factory (like a private field in C#); each call gets its own state",
            hi: "Private state के रूप में closure: counter factory (C# के private field जैसा); हर call की अपनी state",
            hg: "Private state ke roop mein closure: counter factory (C# ke private field jaisa); har call ki apni state"
          },
          check: "run",
          src: `function createCounter(step) {
  let total = 0; // only the returned functions can see this
  return {
    add() {
      total += step;
      return total;
    },
    get value() {
      return total;
    },
  };
}

const byTwo = createCounter(2);
const byTen = createCounter(10);
byTwo.add();
byTwo.add();
byTen.add();
console.log(byTwo.value, byTen.value, byTwo.total);`,
          expected: `4 10 undefined`
        },
        {
          lang: "javascript",
          caption: {
            en: "Closure for a run-once wrapper and a memoised function (Map keeps results between calls)",
            hi: "Run-once wrapper और memoised function के लिए closure (Map calls के बीच results रखता है)",
            hg: "Run-once wrapper aur memoised function ke liye closure (Map calls ke beech results rakhta hai)"
          },
          check: "run",
          src: `function once(fn) {
  let done = false;
  let result;
  return (...args) => {
    if (!done) {
      result = fn(...args);
      done = true;
    }
    return result;
  };
}

function memoize(fn) {
  const cache = new Map();
  return (key) => {
    if (!cache.has(key)) cache.set(key, fn(key));
    return cache.get(key);
  };
}

let calls = 0;
const init = once(() => ++calls);
init();
init();
console.log("once ran", calls, "time");

const slowSquare = memoize((n) => {
  calls += 100;
  return n * n;
});
console.log(slowSquare(7), slowSquare(7), "calls:", calls);`,
          expected: `once ran 1 time
49 49 calls: 101`
        }
      ]
    },
    {
      id: "this-prototypes-classes-in-code",
      depth: "detailed",
      title: {
        en: "this, prototypes and classes in code",
        hi: "this, prototypes और classes code में",
        hg: "this, prototypes aur classes code mein"
      },
      body: {
        en: `<p><b>Analogy:</b> a prototype chain is like asking a senior for help: if you do not know the answer, you ask your manager, who asks <i>their</i> manager, until someone knows or the chain ends (<code>undefined</code>). A <code>class</code> is the same chain with a neater form.</p>
<ul>
<li><b>Prototype lookup:</b> <code>obj.f</code> is searched on the object, then on its prototype, then on that prototype's prototype. Methods live once on the prototype, so all instances share them.</li>
<li><b>class is syntax over prototypes:</b> <code>typeof SomeClass</code> is <code>"function"</code>; methods are placed on <code>SomeClass.prototype</code>; <code>extends</code> links the two prototypes. Differences from the old constructor-function style: class code is strict, a class cannot be called without <code>new</code>, and a class is not usable before its declaration (TDZ).</li>
<li><b><code>#private</code> fields</b> are enforced by the language (outside access is a syntax error); TypeScript's <code>private</code> keyword is only a compile-time check.</li>
<li><b>Losing <code>this</code>:</b> passing <code>obj.method</code> as a callback detaches it from <code>obj</code>. Fixes: an arrow function wrapper, <code>bind</code>, or a class field that holds an arrow function.</li>
<li><b>C# comparison:</b> in C#, <code>this</code> always means "the current instance" and cannot be lost. In JavaScript it is decided at call time.</li>
</ul>
<p><b>When to use classes:</b> several instances with shared behaviour and encapsulated state, and when your team and framework already use them. <b>When not:</b> for plain data use object literals; for a few related functions use a module. Deep inheritance trees are as hard to maintain here as in C#; prefer composition.</p>`,
        hi: `<p><b>Analogy:</b> prototype chain वैसा है जैसे senior से मदद माँगना: जवाब नहीं पता तो अपने manager से पूछो, वह <i>अपने</i> manager से पूछता है, जब तक किसी को पता न हो या chain ख़त्म न हो जाए (<code>undefined</code>)। <code>class</code> वही chain है, बस सुंदर form में।</p>
<ul>
<li><b>Prototype lookup:</b> <code>obj.f</code> पहले object पर खोजा जाता है, फिर उसके prototype पर, फिर उस prototype के prototype पर। Methods prototype पर एक बार रहते हैं, इसलिए सारे instances उन्हें share करते हैं।</li>
<li><b>class prototypes पर syntax है:</b> <code>typeof SomeClass</code> <code>"function"</code> है; methods <code>SomeClass.prototype</code> पर रखे जाते हैं; <code>extends</code> दोनों prototypes को जोड़ता है। पुराने constructor-function style से फ़र्क़: class code strict होता है, class को <code>new</code> के बिना call नहीं कर सकते, और class अपनी declaration से पहले use नहीं हो सकती (TDZ)।</li>
<li><b><code>#private</code> fields</b> को language enforce करती है (बाहर से access करना syntax error है); TypeScript का <code>private</code> keyword सिर्फ़ compile-time check है।</li>
<li><b><code>this</code> खो जाना:</b> <code>obj.method</code> को callback की तरह pass करने पर वह <code>obj</code> से कट जाता है। Fixes: arrow function wrapper, <code>bind</code>, या ऐसा class field जिसमें arrow function हो।</li>
<li><b>C# से comparison:</b> C# में <code>this</code> का मतलब हमेशा "मौजूदा instance" है और वह खो नहीं सकता। JavaScript में यह call के वक़्त तय होता है।</li>
</ul>
<p><b>Classes कब use करें:</b> कई instances जिनका shared behaviour और encapsulated state हो, और जब तुम्हारी team और framework पहले से उन्हें use करते हैं। <b>कब नहीं:</b> plain data के लिए object literals; कुछ related functions के लिए module। Deep inheritance trees यहाँ भी C# जितने ही मुश्किल हैं; composition को prefer करो।</p>`,
        hg: `<p><b>Analogy:</b> prototype chain waisa hai jaise senior se madad maangna: jawab nahi pata to apne manager se poocho, woh <i>apne</i> manager se poochta hai, jab tak kisi ko pata na ho ya chain khatam na ho jaaye (<code>undefined</code>). <code>class</code> wahi chain hai, bas sundar form mein.</p>
<ul>
<li><b>Prototype lookup:</b> <code>obj.f</code> pehle object par khoja jaata hai, phir uske prototype par, phir us prototype ke prototype par. Methods prototype par ek baar rehte hain, isliye saare instances unhein share karte hain.</li>
<li><b>class prototypes par syntax hai:</b> <code>typeof SomeClass</code> <code>"function"</code> hai; methods <code>SomeClass.prototype</code> par rakhe jaate hain; <code>extends</code> dono prototypes ko jodta hai. Purane constructor-function style se farq: class code strict hota hai, class ko <code>new</code> ke bina call nahi kar sakte, aur class apni declaration se pehle use nahi ho sakti (TDZ).</li>
<li><b><code>#private</code> fields</b> ko language enforce karti hai (bahar se access karna syntax error hai); TypeScript ka <code>private</code> keyword sirf compile-time check hai.</li>
<li><b><code>this</code> kho jaana:</b> <code>obj.method</code> ko callback ki tarah pass karne par woh <code>obj</code> se kat jaata hai. Fixes: arrow function wrapper, <code>bind</code>, ya aisa class field jisme arrow function ho.</li>
<li><b>C# se comparison:</b> C# mein <code>this</code> ka matlab hamesha "maujooda instance" hai aur woh kho nahi sakta. JavaScript mein yeh call ke waqt tay hota hai.</li>
</ul>
<p><b>Classes kab use karein:</b> kai instances jinka shared behaviour aur encapsulated state ho, aur jab tumhari team aur framework pehle se unhein use karte hain. <b>Kab nahi:</b> plain data ke liye object literals; kuch related functions ke liye module. Deep inheritance trees yahan bhi C# jitne hi mushkil hain; composition ko prefer karo.</p>`
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "The old way: constructor function + prototype. Methods live once on the prototype (runs on Node)",
            hi: "पुराना तरीक़ा: constructor function + prototype। Methods prototype पर एक बार रहते हैं (Node पर चलता है)",
            hg: "Purana tareeka: constructor function + prototype. Methods prototype par ek baar rehte hain (Node par chalta hai)"
          },
          check: "run",
          src: `function Person(name) {
  this.name = name;
}
Person.prototype.hello = function () {
  return "Hi, " + this.name;
};

const asha = new Person("Asha");
console.log(asha.hello());
console.log(asha.hello.call({ name: "Ravi" }));
console.log(Object.getPrototypeOf(asha) === Person.prototype);
console.log(Object.hasOwn(asha, "hello"), "hello" in asha);`,
          expected: `Hi, Asha
Hi, Ravi
true
false true`
        },
        {
          lang: "javascript",
          caption: {
            en: "The same idea as a class: #private field, getter, static factory and extends (class is sugar over prototypes)",
            hi: "वही idea class के रूप में: #private field, getter, static factory और extends (class prototypes पर sugar है)",
            hg: "Wahi idea class ke roop mein: #private field, getter, static factory aur extends (class prototypes par sugar hai)"
          },
          check: "run",
          src: `class Account {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  static open(owner) {
    return new this(owner); // "this" is the class it was called on
  }

  deposit(amount) {
    if (amount <= 0) throw new RangeError("amount must be positive");
    this.#balance += amount;
    return this;
  }

  get balance() {
    return this.#balance;
  }
}

class Savings extends Account {
  addInterest(rate) {
    return this.deposit(this.balance * rate);
  }
}

const savings = Savings.open("Asha").deposit(1000).addInterest(0.05);
console.log(savings.balance, savings instanceof Account);
console.log(typeof Account, Object.getPrototypeOf(Savings.prototype) === Account.prototype);
console.log(Object.keys(savings), JSON.stringify(savings));
try {
  savings.deposit(-1);
} catch (error) {
  console.log(error.name + ": " + error.message);
}`,
          expected: `1050 true
function true
[ 'owner' ] {"owner":"Asha"}
RangeError: amount must be positive`
        },
        {
          lang: "javascript",
          caption: {
            en: "Losing this when a method is passed as a callback, and the arrow-function-field fix",
            hi: "Method को callback की तरह देने पर this खो जाना, और arrow-function-field वाला fix",
            hg: "Method ko callback ki tarah dene par this kho jaana, aur arrow-function-field wala fix"
          },
          check: "run",
          src: `class SaveButton {
  label = "Save";

  click() {
    return this?.label ?? "this was lost";
  }

  clickSafe = () => this.label; // arrow field: captures this once, at construction
}

const button = new SaveButton();
const { click, clickSafe } = button; // detached, like passing as a callback
console.log(click());
console.log(clickSafe());
console.log(click.bind(button)());`,
          expected: `this was lost
Save
Save`
        }
      ]
    },
    {
      id: "values-and-objects-in-code",
      depth: "detailed",
      title: {
        en: "Values, objects and arrays in code — defaults, spread, destructuring, map/filter/reduce",
        hi: "Values, objects और arrays code में — defaults, spread, destructuring, map/filter/reduce",
        hg: "Values, objects aur arrays code mein — defaults, spread, destructuring, map/filter/reduce"
      },
      body: {
        en: `<p><b>Analogy:</b> a photocopy of a file folder copies the cover and the list of papers, but if the papers are shared envelopes, both folders still point to the same envelopes. That is a <b>shallow copy</b>.</p>
<ul>
<li><b>Default values:</b> a destructuring default (<code>{ port = 5432 }</code>) applies only to <code>undefined</code>, not to <code>null</code> or <code>0</code>. Use <code>??</code> when <code>0</code> or an empty string is a valid value.</li>
<li><b>Spread and rest:</b> <code>{ ...a, id: 8 }</code> copies the top level only. Nested objects are still shared; use <code>structuredClone</code> for a deep copy of plain data.</li>
<li><b>Array methods:</b> <code>filter</code>=Where, <code>map</code>=Select, <code>reduce</code>=Aggregate, <code>some</code>=Any, <code>every</code>=All, <code>find</code>=FirstOrDefault. Unlike LINQ (Day 4) they run <b>eagerly</b> and build a new array each time.</li>
<li><b><code>sort()</code> trap:</b> without a comparer it sorts as strings, so <code>[10, 9, 1]</code> becomes <code>[1, 10, 9]</code>. It also changes the array in place.</li>
<li><b>Code review:</b> <code>==</code>, <code>||</code> used for defaults, mutating a function argument, and "copies" that are shallow.</li>
</ul>
<p><b>When to use these:</b> immutable-style updates (React state on Day 24 relies on them), config objects with defaults, and small data pipelines. <b>When not:</b> in a hot path over very large arrays, chained <code>map/filter</code> creates many temporary arrays; a plain loop is fine. Do not deep-copy with <code>JSON.parse(JSON.stringify(x))</code>: it drops <code>undefined</code> and functions and turns dates into strings.</p>`,
        hi: `<p><b>Analogy:</b> file folder की photocopy में cover और papers की list copy होती है, पर अगर papers shared envelopes में हैं तो दोनों folders अब भी उन्हीं envelopes को point करते हैं। यह <b>shallow copy</b> है।</p>
<ul>
<li><b>Default values:</b> destructuring default (<code>{ port = 5432 }</code>) सिर्फ़ <code>undefined</code> पर लगता है, <code>null</code> या <code>0</code> पर नहीं। जब <code>0</code> या empty string valid value हो तो <code>??</code> use करो।</li>
<li><b>Spread और rest:</b> <code>{ ...a, id: 8 }</code> सिर्फ़ ऊपर का level copy करता है। Nested objects अब भी shared रहते हैं; plain data की deep copy के लिए <code>structuredClone</code> use करो।</li>
<li><b>Array methods:</b> <code>filter</code>=Where, <code>map</code>=Select, <code>reduce</code>=Aggregate, <code>some</code>=Any, <code>every</code>=All, <code>find</code>=FirstOrDefault। LINQ (Day 4) से उलट ये <b>eagerly</b> चलते हैं और हर बार नया array बनाते हैं।</li>
<li><b><code>sort()</code> trap:</b> comparer के बिना यह strings की तरह sort करता है, इसलिए <code>[10, 9, 1]</code> बन जाता है <code>[1, 10, 9]</code>। और यह array को उसी जगह बदल देता है।</li>
<li><b>Code review:</b> <code>==</code>, defaults के लिए use हुआ <code>||</code>, function argument को mutate करना, और ऐसी "copies" जो shallow हैं।</li>
</ul>
<p><b>इन्हें कब use करें:</b> immutable-style updates (Day 24 की React state इन्हीं पर टिकी है), defaults वाले config objects, और छोटी data pipelines। <b>कब नहीं:</b> बहुत बड़े arrays पर hot path में chained <code>map/filter</code> कई temporary arrays बनाते हैं; वहाँ plain loop ठीक है। Deep copy के लिए <code>JSON.parse(JSON.stringify(x))</code> use मत करो: यह <code>undefined</code> और functions गिरा देता है और dates को strings बना देता है।</p>`,
        hg: `<p><b>Analogy:</b> file folder ki photocopy mein cover aur papers ki list copy hoti hai, par agar papers shared envelopes mein hain to dono folders ab bhi unhi envelopes ko point karte hain. Yeh <b>shallow copy</b> hai.</p>
<ul>
<li><b>Default values:</b> destructuring default (<code>{ port = 5432 }</code>) sirf <code>undefined</code> par lagta hai, <code>null</code> ya <code>0</code> par nahi. Jab <code>0</code> ya empty string valid value ho to <code>??</code> use karo.</li>
<li><b>Spread aur rest:</b> <code>{ ...a, id: 8 }</code> sirf upar ka level copy karta hai. Nested objects ab bhi shared rehte hain; plain data ki deep copy ke liye <code>structuredClone</code> use karo.</li>
<li><b>Array methods:</b> <code>filter</code>=Where, <code>map</code>=Select, <code>reduce</code>=Aggregate, <code>some</code>=Any, <code>every</code>=All, <code>find</code>=FirstOrDefault. LINQ (Day 4) se ulta yeh <b>eagerly</b> chalte hain aur har baar naya array banate hain.</li>
<li><b><code>sort()</code> trap:</b> comparer ke bina yeh strings ki tarah sort karta hai, isliye <code>[10, 9, 1]</code> ban jaata hai <code>[1, 10, 9]</code>. Aur yeh array ko usi jagah badal deta hai.</li>
<li><b>Code review:</b> <code>==</code>, defaults ke liye use hua <code>||</code>, function argument ko mutate karna, aur aisi "copies" jo shallow hain.</li>
</ul>
<p><b>Inhein kab use karein:</b> immutable-style updates (Day 24 ki React state inhi par tiki hai), defaults wale config objects, aur chhoti data pipelines. <b>Kab nahi:</b> bahut bade arrays par hot path mein chained <code>map/filter</code> kai temporary arrays banate hain; wahan plain loop theek hai. Deep copy ke liye <code>JSON.parse(JSON.stringify(x))</code> use mat karo: yeh <code>undefined</code> aur functions gira deta hai aur dates ko strings bana deta hai.</p>`
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "Destructuring defaults apply to undefined only; the ?? operator treats 0 and empty string as real values",
            hi: "Destructuring defaults सिर्फ़ undefined पर लगते हैं; ?? operator 0 और empty string को असली values मानता है",
            hg: "Destructuring defaults sirf undefined par lagte hain; ?? operator 0 aur empty string ko asli values maanta hai"
          },
          check: "run",
          src: `function connect({ host = "localhost", port = 5432, retries = 3 } = {}) {
  return host + ":" + port + " x" + retries;
}

console.log(connect());
console.log(connect({ port: 0, retries: undefined }));
console.log(connect({ host: null })); // null is NOT undefined, so no default

const input = { title: "" };
console.log(JSON.stringify(input.title || "Untitled"));
console.log(JSON.stringify(input.title ?? "Untitled"));`,
          expected: `localhost:5432 x3
localhost:0 x3
null:5432 x3
"Untitled"
""`
        },
        {
          lang: "javascript",
          caption: {
            en: "Spread is a shallow copy; structuredClone copies plain data deeply; array destructuring with rest",
            hi: "Spread shallow copy है; structuredClone plain data की deep copy बनाता है; rest के साथ array destructuring",
            hg: "Spread shallow copy hai; structuredClone plain data ki deep copy banata hai; rest ke saath array destructuring"
          },
          check: "run",
          src: `const order = { id: 7, customer: { name: "Asha" }, items: ["tea"] };

const shallow = { ...order, id: 8 };
shallow.customer.name = "Ravi"; // the nested object is shared!
console.log(order.customer.name, order.id, shallow.id);

const deep = structuredClone(order);
deep.items.push("samosa");
console.log(order.items.length, deep.items.length);

const [first, ...rest] = [10, 20, 30];
console.log(first, rest);`,
          expected: `Ravi 7 8
1 2
10 [ 20, 30 ]`
        },
        {
          lang: "javascript",
          caption: {
            en: "LINQ in JavaScript: filter/map/reduce/some/find (eager) and the default sort() trap",
            hi: "JavaScript में LINQ: filter/map/reduce/some/find (eager) और default sort() का trap",
            hg: "JavaScript mein LINQ: filter/map/reduce/some/find (eager) aur default sort() ka trap"
          },
          check: "run",
          src: `const orders = [
  { id: 1, customer: "Asha", total: 250 },
  { id: 2, customer: "Ravi", total: 90 },
  { id: 3, customer: "Asha", total: 400 },
];

const bigIds = orders.filter((o) => o.total >= 100).map((o) => o.id); // Where + Select
const sum = orders.reduce((acc, o) => acc + o.total, 0); // Sum / Aggregate
const hasSmall = orders.some((o) => o.total < 100); // Any
const firstRavi = orders.find((o) => o.customer === "Ravi")?.id; // FirstOrDefault
console.log(bigIds, sum, hasSmall, firstRavi);

const perCustomer = {};
for (const o of orders) {
  perCustomer[o.customer] = (perCustomer[o.customer] ?? 0) + o.total; // GroupBy + Sum
}
console.log(perCustomer);

console.log([10, 9, 1].sort()); // sorts as strings
console.log([10, 9, 1].sort((a, b) => a - b)); // numeric comparer`,
          expected: `[ 1, 3 ] 740 true 2
{ Asha: 650, Ravi: 90 }
[ 1, 10, 9 ]
[ 1, 9, 10 ]`
        }
      ]
    },
    {
      id: "async-event-loop-in-code",
      depth: "detailed",
      title: {
        en: "Promises, async/await and the event loop in code",
        hi: "Promises, async/await और event loop code में",
        hg: "Promises, async/await aur event loop code mein"
      },
      body: {
        en: `<p><b>Analogy:</b> a promise is a <b>token number at a bank counter</b>. You do not stand there waiting; you hold the token (pending), and when your number is called it is either "done" (fulfilled) or "sorry, problem" (rejected). <code>await</code> means "I will continue when my token is called, meanwhile serve others".</p>
<ul>
<li><b>Chains:</b> each <code>then</code> returns a new promise. A thrown error skips to the next <code>catch</code>; <code>catch</code> that returns a value makes the chain healthy again; <code>finally</code> runs either way and does not change the value.</li>
<li><b>Sequential vs parallel:</b> <code>await a(); await b();</code> starts <code>b</code> only after <code>a</code> ends. Start both first (or <code>Promise.all</code>) when they are independent, like <code>Task.WhenAll</code> in C# (Day 3).</li>
<li><b><code>forEach(async …)</code> does not wait.</b> <code>forEach</code> ignores the promises your callback returns. Use <code>for...of</code> with <code>await</code> (sequential) or <code>Promise.all(items.map(...))</code> (parallel).</li>
<li><b>Unhandled rejections:</b> a rejected promise with no handler is a bug; in Node (since version 15) it terminates the process by default, and browsers report it in the console.</li>
<li><b>CPU-heavy work</b> blocks the loop. Move it to a Worker (Web Worker, Node <code>worker_threads</code>) or to a service; <code>async</code> does not make a loop faster.</li>
</ul>
<p><b>When to use async/await:</b> almost all new asynchronous code; it reads top to bottom and works with <code>try/catch</code>. <b>When not:</b> use raw <code>then</code> only for tiny one-liners, and use <code>Promise.all/allSettled</code> instead of awaiting in a loop when the calls are independent. For event streams that fire many times (clicks, sockets) a promise is the wrong tool because it settles once.</p>`,
        hi: `<p><b>Analogy:</b> promise बैंक के counter का <b>token number</b> है। तुम वहाँ खड़े इंतज़ार नहीं करते; token हाथ में रखते हो (pending), और नंबर बुलाने पर वह या तो "हो गया" (fulfilled) होता है या "sorry, problem" (rejected)। <code>await</code> का मतलब है "मेरा token बुलाए जाने पर मैं आगे बढ़ूँगा, तब तक दूसरों को serve करो"।</p>
<ul>
<li><b>Chains:</b> हर <code>then</code> नया promise लौटाता है। फेंका गया error अगले <code>catch</code> तक कूद जाता है; value लौटाने वाला <code>catch</code> chain को फिर healthy बना देता है; <code>finally</code> दोनों हालत में चलता है और value नहीं बदलता।</li>
<li><b>Sequential vs parallel:</b> <code>await a(); await b();</code> में <code>b</code> तभी शुरू होता है जब <code>a</code> ख़त्म हो। जब दोनों independent हों तो दोनों पहले शुरू करो (या <code>Promise.all</code>), C# के <code>Task.WhenAll</code> (Day 3) की तरह।</li>
<li><b><code>forEach(async …)</code> इंतज़ार नहीं करता।</b> <code>forEach</code> तुम्हारे callback के लौटाए promises को ignore करता है। <code>for...of</code> के साथ <code>await</code> (sequential) या <code>Promise.all(items.map(...))</code> (parallel) use करो।</li>
<li><b>Unhandled rejections:</b> बिना handler का rejected promise bug है; Node में (version 15 से) default रूप से process terminate हो जाता है, और browsers console में report करते हैं।</li>
<li><b>CPU-heavy काम</b> loop को block करता है। उसे Worker (Web Worker, Node <code>worker_threads</code>) या किसी service में ले जाओ; <code>async</code> से loop तेज़ नहीं होता।</li>
</ul>
<p><b>async/await कब use करें:</b> लगभग सारे नए asynchronous code में; यह ऊपर से नीचे पढ़ा जाता है और <code>try/catch</code> के साथ चलता है। <b>कब नहीं:</b> raw <code>then</code> सिर्फ़ छोटे one-liners में; और जब calls independent हों तो loop में await करने की जगह <code>Promise.all/allSettled</code> use करो। जो events बार-बार आते हैं (clicks, sockets) उनके लिए promise ग़लत tool है क्योंकि वह एक ही बार settle होता है।</p>`,
        hg: `<p><b>Analogy:</b> promise bank ke counter ka <b>token number</b> hai. Tum wahan khade intezaar nahi karte; token haath mein rakhte ho (pending), aur number bulaye jaane par woh ya to "ho gaya" (fulfilled) hota hai ya "sorry, problem" (rejected). <code>await</code> ka matlab hai "mera token bulaye jaane par main aage badhunga, tab tak doosron ko serve karo".</p>
<ul>
<li><b>Chains:</b> har <code>then</code> naya promise lautata hai. Phenka gaya error agle <code>catch</code> tak kood jaata hai; value lautane wala <code>catch</code> chain ko phir healthy bana deta hai; <code>finally</code> dono haalat mein chalta hai aur value nahi badalta.</li>
<li><b>Sequential vs parallel:</b> <code>await a(); await b();</code> mein <code>b</code> tabhi shuru hota hai jab <code>a</code> khatam ho. Jab dono independent hon to dono pehle shuru karo (ya <code>Promise.all</code>), C# ke <code>Task.WhenAll</code> (Day 3) ki tarah.</li>
<li><b><code>forEach(async …)</code> intezaar nahi karta.</b> <code>forEach</code> tumhare callback ke lautaye promises ko ignore karta hai. <code>for...of</code> ke saath <code>await</code> (sequential) ya <code>Promise.all(items.map(...))</code> (parallel) use karo.</li>
<li><b>Unhandled rejections:</b> bina handler ka rejected promise bug hai; Node mein (version 15 se) default roop se process terminate ho jaata hai, aur browsers console mein report karte hain.</li>
<li><b>CPU-heavy kaam</b> loop ko block karta hai. Use Worker (Web Worker, Node <code>worker_threads</code>) ya kisi service mein le jao; <code>async</code> se loop tez nahi hota.</li>
</ul>
<p><b>async/await kab use karein:</b> lagbhag saare naye asynchronous code mein; yeh upar se neeche padha jaata hai aur <code>try/catch</code> ke saath chalta hai. <b>Kab nahi:</b> raw <code>then</code> sirf chhote one-liners mein; aur jab calls independent hon to loop mein await karne ki jagah <code>Promise.all/allSettled</code> use karo. Jo events baar-baar aate hain (clicks, sockets) unke liye promise galat tool hai kyonki woh ek hi baar settle hota hai.</p>`
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "A promise chain: then, a thrown error, catch that recovers, and finally (runs on Node)",
            hi: "Promise chain: then, फेंका गया error, recover करने वाला catch, और finally (Node पर चलता है)",
            hg: "Promise chain: then, phenka gaya error, recover karne wala catch, aur finally (Node par chalta hai)"
          },
          check: "run",
          src: `Promise.resolve(1)
  .then((x) => {
    console.log("then", x);
    return x + 1;
  })
  .then((x) => {
    throw new Error("boom at " + x);
  })
  .catch((error) => {
    console.log("catch", error.message);
    return "recovered";
  })
  .finally(() => console.log("finally"))
  .then((value) => console.log("value", value));`,
          expected: `then 1
catch boom at 2
finally
value recovered`
        },
        {
          lang: "javascript",
          caption: {
            en: "Sequential awaits vs Promise.all: the start/end order shows the difference (no timers needed)",
            hi: "Sequential awaits vs Promise.all: start/end का order फ़र्क़ दिखाता है (timers की ज़रूरत नहीं)",
            hg: "Sequential awaits vs Promise.all: start/end ka order farq dikhata hai (timers ki zaroorat nahi)"
          },
          check: "run",
          src: `const log = [];
const job = async (name) => {
  log.push("start " + name);
  await null; // stands in for a network call
  log.push("end " + name);
  return name;
};

await job("A");
await job("B");
console.log(log.join(", "));

log.length = 0;
await Promise.all([job("A"), job("B")]);
console.log(log.join(", "));`,
          expected: `start A, end A, start B, end B
start A, start B, end A, end B`
        },
        {
          lang: "javascript",
          caption: {
            en: "forEach(async) does not wait; Promise.all(items.map(async ...)) does",
            hi: "forEach(async) इंतज़ार नहीं करता; Promise.all(items.map(async ...)) करता है",
            hg: "forEach(async) intezaar nahi karta; Promise.all(items.map(async ...)) karta hai"
          },
          check: "run",
          src: `let doneInForEach = 0;
[1, 2, 3].forEach(async () => {
  await null;
  doneInForEach++;
});
console.log("forEach returned, done =", doneInForEach);

let doneInAll = 0;
await Promise.all(
  [1, 2, 3].map(async () => {
    await null;
    doneInAll++;
  }),
);
console.log("Promise.all finished, done =", doneInAll);`,
          expected: `forEach returned, done = 0
Promise.all finished, done = 3`
        }
      ]
    },
    {
      id: "modules-fetch-dom-in-code",
      depth: "detailed",
      title: {
        en: "Modules, fetch and jQuery-to-DOM in code",
        hi: "Modules, fetch और jQuery से DOM code में",
        hg: "Modules, fetch aur jQuery se DOM code mein"
      },
      body: {
        en: `<p><b>Analogy:</b> an old CommonJS project is a kirana shop where everything sits in one godown and you shout "<code>require</code>" for what you need. ES modules are a labelled shelf system: each file says clearly what it <code>export</code>s and what it <code>import</code>s, so tools can see (and drop) what is unused.</p>
<ul>
<li><b>ES modules vs CommonJS:</b> ESM uses static <code>import</code>/<code>export</code>, is strict by default, supports top-level <code>await</code> and works in browsers (<code>&lt;script type="module"&gt;</code>) and Node (<code>.mjs</code> or <code>"type": "module"</code>). CommonJS uses <code>require</code>/<code>module.exports</code>, is synchronous, and is still common in older Node code.</li>
<li><b>fetch rule:</b> the promise rejects only when the request cannot complete (network failure, abort). An HTTP error status resolves normally, so check <code>res.ok</code> (or <code>res.status</code>) before <code>res.json()</code>. Also handle a body that is not JSON.</li>
<li><b>Browser and CORS:</b> a cross-origin <code>fetch</code> needs the server to allow it with CORS headers (Day 13).</li>
<li><b>jQuery to DOM:</b> the last snippet shows direct replacements. Prefer <code>textContent</code> over <code>innerHTML</code> for untrusted text; <code>innerHTML</code> with user input is an XSS risk.</li>
<li><b>Cleanup:</b> remove listeners you add to long-lived elements, and use <code>AbortController</code> to cancel a fetch.</li>
</ul>
<p><b>When to move off jQuery:</b> new code and any page that only uses jQuery for selectors, events, classes and Ajax; this also removes one dependency. <b>When not to rush:</b> a stable legacy page that still works, or a plugin-heavy page (date pickers, grids) that would need a replacement; migrate page by page, not in one big rewrite.</p>`,
        hi: `<p><b>Analogy:</b> पुराना CommonJS project एक kirana shop है जहाँ सब कुछ एक ही godown में पड़ा है और जो चाहिए उसके लिए तुम "<code>require</code>" चिल्लाते हो। ES modules labels वाला shelf system हैं: हर file साफ़ बताती है कि वह क्या <code>export</code> करती है और क्या <code>import</code> करती है, इसलिए tools देख (और हटा) सकते हैं कि क्या unused है।</p>
<ul>
<li><b>ES modules vs CommonJS:</b> ESM में static <code>import</code>/<code>export</code> होता है, default में strict है, top-level <code>await</code> support करता है और browsers (<code>&lt;script type="module"&gt;</code>) व Node (<code>.mjs</code> या <code>"type": "module"</code>) में चलता है। CommonJS <code>require</code>/<code>module.exports</code> use करता है, synchronous है, और पुराने Node code में अब भी आम है।</li>
<li><b>fetch का rule:</b> promise सिर्फ़ तब reject होता है जब request पूरी न हो सके (network failure, abort)। HTTP error status normally resolve होता है, इसलिए <code>res.json()</code> से पहले <code>res.ok</code> (या <code>res.status</code>) check करो। और ऐसी body भी संभालो जो JSON नहीं है।</li>
<li><b>Browser और CORS:</b> cross-origin <code>fetch</code> के लिए server को CORS headers से allow करना पड़ता है (Day 13)।</li>
<li><b>jQuery से DOM:</b> आख़िरी snippet में direct replacements हैं। Untrusted text के लिए <code>innerHTML</code> की जगह <code>textContent</code> prefer करो; user input के साथ <code>innerHTML</code> XSS risk है।</li>
<li><b>Cleanup:</b> long-lived elements पर जो listeners जोड़ो उन्हें हटाओ, और fetch cancel करने के लिए <code>AbortController</code> use करो।</li>
</ul>
<p><b>jQuery से कब हटें:</b> नया code और ऐसा कोई भी page जो jQuery सिर्फ़ selectors, events, classes और Ajax के लिए use करता है; इससे एक dependency भी हट जाती है। <b>कब जल्दी न करें:</b> stable legacy page जो अब भी चल रहा है, या plugin-heavy page (date pickers, grids) जिसके लिए replacement चाहिए; page-by-page migrate करो, एक बड़े rewrite में नहीं।</p>`,
        hg: `<p><b>Analogy:</b> purana CommonJS project ek kirana shop hai jahan sab kuch ek hi godown mein pada hai aur jo chahiye uske liye tum "<code>require</code>" chillate ho. ES modules labels wala shelf system hain: har file saaf batati hai ki woh kya <code>export</code> karti hai aur kya <code>import</code> karti hai, isliye tools dekh (aur hata) sakte hain ki kya unused hai.</p>
<ul>
<li><b>ES modules vs CommonJS:</b> ESM mein static <code>import</code>/<code>export</code> hota hai, default mein strict hai, top-level <code>await</code> support karta hai aur browsers (<code>&lt;script type="module"&gt;</code>) va Node (<code>.mjs</code> ya <code>"type": "module"</code>) mein chalta hai. CommonJS <code>require</code>/<code>module.exports</code> use karta hai, synchronous hai, aur purane Node code mein ab bhi aam hai.</li>
<li><b>fetch ka rule:</b> promise sirf tab reject hota hai jab request poori na ho sake (network failure, abort). HTTP error status normally resolve hota hai, isliye <code>res.json()</code> se pehle <code>res.ok</code> (ya <code>res.status</code>) check karo. Aur aisi body bhi sambhalo jo JSON nahi hai.</li>
<li><b>Browser aur CORS:</b> cross-origin <code>fetch</code> ke liye server ko CORS headers se allow karna padta hai (Day 13).</li>
<li><b>jQuery se DOM:</b> aakhri snippet mein direct replacements hain. Untrusted text ke liye <code>innerHTML</code> ki jagah <code>textContent</code> prefer karo; user input ke saath <code>innerHTML</code> XSS risk hai.</li>
<li><b>Cleanup:</b> long-lived elements par jo listeners jodo unhein hatao, aur fetch cancel karne ke liye <code>AbortController</code> use karo.</li>
</ul>
<p><b>jQuery se kab hatein:</b> naya code aur aisa koi bhi page jo jQuery sirf selectors, events, classes aur Ajax ke liye use karta hai; isse ek dependency bhi hat jaati hai. <b>Kab jaldi na karein:</b> stable legacy page jo ab bhi chal raha hai, ya plugin-heavy page (date pickers, grids) jiske liye replacement chahiye; page-by-page migrate karo, ek bade rewrite mein nahi.</p>`
      },
      code: [
        {
          lang: "javascript",
          caption: {
            en: "ES modules (display-only, two files): named and default export, static and dynamic import; CommonJS shown as a comment",
            hi: "ES modules (सिर्फ़ दिखाने के लिए, दो files): named और default export, static और dynamic import; CommonJS comment में",
            hg: "ES modules (sirf dikhane ke liye, do files): named aur default export, static aur dynamic import; CommonJS comment mein"
          },
          check: "none",
          src: `// ---- prices.mjs ----
export const GST_RATE = 0.18; // named export
export function withGst(amount) {
  return amount * (1 + GST_RATE);
}
export default function format(amount) {
  // default export (one per file)
  return "Rs " + amount.toFixed(2);
}

// ---- app.mjs ----
import format, { withGst, GST_RATE as gst } from "./prices.mjs"; // static: resolved before running
console.log(format(withGst(100)), gst);

if (process.env.SHOW_REPORT) {
  const report = await import("./report.mjs"); // dynamic import: loaded on demand, returns a promise
  report.print();
}

// Older CommonJS equivalent (Node only):
//   const { withGst } = require("./prices");
//   module.exports = { withGst };`
        },
        {
          lang: "javascript",
          caption: {
            en: "fetch error handling: an HTTP 404 does not reject, so check res.ok (runs on Node using a Response object, no network)",
            hi: "fetch error handling: HTTP 404 पर reject नहीं होता, इसलिए res.ok check करो (Node पर Response object से चलता है, network नहीं)",
            hg: "fetch error handling: HTTP 404 par reject nahi hota, isliye res.ok check karo (Node par Response object se chalta hai, network nahi)"
          },
          check: "run",
          src: `async function readJson(res) {
  if (!res.ok) throw new Error("HTTP " + res.status + " " + res.statusText);
  return res.json();
}

const good = new Response(JSON.stringify({ id: 1 }), {
  status: 200,
  headers: { "Content-Type": "application/json" },
});
const missing = new Response("Not here", { status: 404, statusText: "Not Found" });

console.log(good.ok, await readJson(good));
console.log(missing.ok, missing.status);

try {
  await readJson(missing);
} catch (error) {
  console.log(error.message);
}

try {
  JSON.parse("<html>oops</html>"); // a proxy or login page instead of JSON
} catch (error) {
  console.log(error.name);
}`,
          expected: `true { id: 1 }
false 404
HTTP 404 Not Found
SyntaxError`
        },
        {
          lang: "javascript",
          caption: {
            en: "Browser fetch with JSON POST, timeout via AbortController and an ok check (display-only: needs a browser or a real server)",
            hi: "JSON POST, AbortController से timeout और ok check वाला browser fetch (सिर्फ़ दिखाने के लिए: browser या असली server चाहिए)",
            hg: "JSON POST, AbortController se timeout aur ok check wala browser fetch (sirf dikhane ke liye: browser ya asli server chahiye)"
          },
          check: "none",
          src: `async function createOrder(order) {
  const response = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
    signal: AbortSignal.timeout(5000), // rejects with a TimeoutError after 5 s
  });

  if (!response.ok) {
    // 400/401/404/500 all arrive here, NOT in a catch around fetch
    throw new Error("Order API failed: " + response.status);
  }
  return response.json();
}`
        },
        {
          lang: "javascript",
          caption: {
            en: "jQuery to modern DOM, side by side (display-only: needs a browser page)",
            hi: "jQuery से modern DOM, साथ-साथ (सिर्फ़ दिखाने के लिए: browser page चाहिए)",
            hg: "jQuery se modern DOM, saath-saath (sirf dikhane ke liye: browser page chahiye)"
          },
          check: "none",
          src: `// jQuery                                      // Modern DOM
$(function () { init(); });                      // document.addEventListener("DOMContentLoaded", init);
$("#save").on("click", onSave);                  // document.querySelector("#save").addEventListener("click", onSave);
$(".row").addClass("active");                    // document.querySelectorAll(".row").forEach((el) => el.classList.add("active"));
$("#box").toggleClass("open");                   // document.querySelector("#box").classList.toggle("open");
$("#name").val();                                // document.querySelector("#name").value
$("#msg").text(message);                         // document.querySelector("#msg").textContent = message;
$("#panel").hide();                              // document.querySelector("#panel").hidden = true;

// Event delegation (rows added later also work)
$("#list").on("click", ".item", onItem);
document.querySelector("#list").addEventListener("click", (event) => {
  const item = event.target.closest(".item");
  if (item) onItem(event, item);
});

// Ajax
$.ajax({ url: "/api/orders", method: "POST", data: JSON.stringify(order), contentType: "application/json" });
fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(order) });`
        }
      ]
    }
  ],
  qa: [
    {
      id: "var-let-const",
      depth: "short",
      q: "What is the difference between var, let and const?",
      answer: "Prefer const, use let when you must reassign, avoid var. var is function-scoped and hoisted as undefined; let and const are block-scoped and sit in the temporal dead zone until declared.",
      meaning: {
        hi: "पहले const, ज़रूरत हो तो let, var से बचो। var function-scoped है और undefined के साथ hoist होता है; let/const block-scoped हैं और declare होने तक temporal dead zone में रहते हैं।",
        hg: "Pehle const, zaroorat ho to let, var se bacho. var function-scoped hai aur undefined ke saath hoist hota hai; let/const block-scoped hain aur declare hone tak temporal dead zone mein rehte hain."
      },
      explain: {
        en: `<ul>
<li><code>const</code> blocks re-assignment of the name, not changes inside an object or array. <code>let</code> is for values that really change (counters, accumulators).</li>
<li><code>var</code> also allows re-declaring the same name and, at the top level of a classic browser script, creates a property on <code>window</code>. Neither happens with <code>let</code>/<code>const</code>.</li>
<li>TL angle: enforce it with ESLint rules <code>no-var</code> and <code>prefer-const</code> instead of repeating it in every review.</li>
<li>Follow-up: "Does <code>const</code> make an object immutable?" No; <code>Object.freeze</code> is a shallow freeze, so nested objects can still change.</li>
</ul>`,
        hi: `<ul>
<li><code>const</code> नाम को दोबारा assign करने से रोकता है, object या array के अंदर के बदलाव को नहीं। <code>let</code> उन values के लिए है जो सच में बदलती हैं (counters, accumulators)।</li>
<li><code>var</code> एक ही नाम को दोबारा declare भी करने देता है और classic browser script के top level पर <code>window</code> की property बना देता है। <code>let</code>/<code>const</code> में दोनों नहीं होते।</li>
<li>TL angle: हर review में दोहराने की जगह ESLint rules <code>no-var</code> और <code>prefer-const</code> से enforce करो।</li>
<li>Follow-up: "क्या <code>const</code> object को immutable बना देता है?" नहीं; <code>Object.freeze</code> shallow freeze है, इसलिए nested objects फिर भी बदल सकते हैं।</li>
</ul>`,
        hg: `<ul>
<li><code>const</code> naam ko dobara assign karne se rokta hai, object ya array ke andar ke badlaav ko nahi. <code>let</code> un values ke liye hai jo sach mein badalti hain (counters, accumulators).</li>
<li><code>var</code> ek hi naam ko dobara declare bhi karne deta hai aur classic browser script ke top level par <code>window</code> ki property bana deta hai. <code>let</code>/<code>const</code> mein dono nahi hote.</li>
<li>TL angle: har review mein dohrane ki jagah ESLint rules <code>no-var</code> aur <code>prefer-const</code> se enforce karo.</li>
<li>Follow-up: "Kya <code>const</code> object ko immutable bana deta hai?" Nahi; <code>Object.freeze</code> shallow freeze hai, isliye nested objects phir bhi badal sakte hain.</li>
</ul>`
      }
    },
    {
      id: "hoisting-tdz",
      depth: "short",
      q: "What is hoisting, and what is the temporal dead zone?",
      answer: "Declarations are registered before the code runs. Functions work early, var reads undefined, and let/const throw a ReferenceError until their line executes; that gap is the temporal dead zone.",
      meaning: {
        hi: "Declarations code चलने से पहले register होते हैं। Functions जल्दी चलते हैं, var undefined पढ़ा जाता है, और let/const अपनी line तक ReferenceError फेंकते हैं; वही gap temporal dead zone है।",
        hg: "Declarations code chalne se pehle register hote hain. Functions jaldi chalte hain, var undefined padha jaata hai, aur let/const apni line tak ReferenceError phenkte hain; wahi gap temporal dead zone hai."
      },
      explain: {
        en: `<ul>
<li>"Hoisting" does not move code; the engine simply creates the names first. A function declaration is created with its body, a <code>var</code> with the value <code>undefined</code>, and a <code>let</code>/<code>const</code>/<code>class</code> without a value until the line runs.</li>
<li>A function expression assigned to a <code>var</code> is hoisted as <code>undefined</code>, so calling it early gives <code>TypeError: fnExpr is not a function</code> (puzzle 4 shows all of these).</li>
<li>Why TDZ is good: it turns a silent <code>undefined</code> bug into a loud error that names the variable.</li>
<li>Follow-up: "Is <code>let</code> hoisted?" Yes, the name exists for the whole block, but it cannot be used before its declaration.</li>
</ul>`,
        hi: `<ul>
<li>"Hoisting" code को हिलाता नहीं; engine बस पहले नाम बना देता है। Function declaration body के साथ बनता है, <code>var</code> value <code>undefined</code> के साथ, और <code>let</code>/<code>const</code>/<code>class</code> अपनी line चलने तक बिना value के।</li>
<li><code>var</code> में assign किया गया function expression <code>undefined</code> के साथ hoist होता है, इसलिए उसे जल्दी call करने पर <code>TypeError: fnExpr is not a function</code> आता है (puzzle 4 में ये सब दिखते हैं)।</li>
<li>TDZ अच्छा क्यों है: यह चुपचाप वाले <code>undefined</code> bug को ऐसे loud error में बदल देता है जो variable का नाम बताता है।</li>
<li>Follow-up: "क्या <code>let</code> hoist होता है?" हाँ, नाम पूरे block में मौजूद है, पर declaration से पहले use नहीं हो सकता।</li>
</ul>`,
        hg: `<ul>
<li>"Hoisting" code ko hilata nahi; engine bas pehle naam bana deta hai. Function declaration body ke saath banta hai, <code>var</code> value <code>undefined</code> ke saath, aur <code>let</code>/<code>const</code>/<code>class</code> apni line chalne tak bina value ke.</li>
<li><code>var</code> mein assign kiya gaya function expression <code>undefined</code> ke saath hoist hota hai, isliye use jaldi call karne par <code>TypeError: fnExpr is not a function</code> aata hai (puzzle 4 mein yeh sab dikhte hain).</li>
<li>TDZ accha kyon hai: yeh chupchaap wale <code>undefined</code> bug ko aise loud error mein badal deta hai jo variable ka naam batata hai.</li>
<li>Follow-up: "Kya <code>let</code> hoist hota hai?" Haan, naam poore block mein maujood hai, par declaration se pehle use nahi ho sakta.</li>
</ul>`
      }
    },
    {
      id: "closure-loop-trap",
      depth: "short",
      q: "What is a closure? Why does a var loop with setTimeout print the same value?",
      answer: "A closure is a function that keeps access to the variables of the scope where it was created. A var loop shares one variable, so every callback sees its final value.",
      meaning: {
        hi: "Closure वह function है जो अपने बनने वाले scope के variables तक पहुँच रखता है। var loop एक ही variable share करता है, इसलिए हर callback उसकी आख़िरी value देखता है।",
        hg: "Closure woh function hai jo apne banne wale scope ke variables tak pahunch rakhta hai. var loop ek hi variable share karta hai, isliye har callback uski aakhri value dekhta hai."
      },
      explain: {
        en: `<ul>
<li>Closures capture the <b>variable</b>, not its value at that moment. With <code>var i</code> there is one <code>i</code> for the whole loop; by the time the timers fire it is <code>3</code>.</li>
<li>Fixes: use <code>let</code> (a fresh binding per iteration), or pass the value in as a parameter, or use <code>forEach</code>/<code>map</code>. The old IIFE trick does the same by creating a new function scope.</li>
<li>Real uses: private state, event handlers that remember their row, factories, memoising. Risk: a long-lived closure keeps everything it captured alive.</li>
<li>Follow-up: "How is it different from a C# lambda?" Same idea of capturing variables; C# <code>foreach</code> gives each iteration its own variable (since C# 5), while a C# <code>for</code> loop variable is shared, like <code>var</code>.</li>
</ul>`,
        hi: `<ul>
<li>Closures <b>variable</b> को capture करते हैं, उस पल की value को नहीं। <code>var i</code> के साथ पूरे loop के लिए एक ही <code>i</code> होता है; timers चलने तक वह <code>3</code> हो चुका होता है।</li>
<li>Fixes: <code>let</code> use करो (हर iteration पर नया binding), या value को parameter में pass करो, या <code>forEach</code>/<code>map</code> use करो। पुरानी IIFE trick नया function scope बनाकर यही करती है।</li>
<li>असली uses: private state, अपनी row याद रखने वाले event handlers, factories, memoising। Risk: long-lived closure अपना सब captured data ज़िंदा रखता है।</li>
<li>Follow-up: "C# lambda से कैसे अलग है?" Variables capture करने का idea वही है; C# <code>foreach</code> हर iteration को अपना variable देता है (C# 5 से), जबकि C# <code>for</code> loop variable <code>var</code> की तरह shared है।</li>
</ul>`,
        hg: `<ul>
<li>Closures <b>variable</b> ko capture karte hain, us pal ki value ko nahi. <code>var i</code> ke saath poore loop ke liye ek hi <code>i</code> hota hai; timers chalne tak woh <code>3</code> ho chuka hota hai.</li>
<li>Fixes: <code>let</code> use karo (har iteration par naya binding), ya value ko parameter mein pass karo, ya <code>forEach</code>/<code>map</code> use karo. Purani IIFE trick naya function scope banakar yahi karti hai.</li>
<li>Asli uses: private state, apni row yaad rakhne wale event handlers, factories, memoising. Risk: long-lived closure apna sab captured data zinda rakhta hai.</li>
<li>Follow-up: "C# lambda se kaise alag hai?" Variables capture karne ka idea wahi hai; C# <code>foreach</code> har iteration ko apna variable deta hai (C# 5 se), jabki C# <code>for</code> loop variable <code>var</code> ki tarah shared hai.</li>
</ul>`
      }
    },
    {
      id: "this-keyword",
      depth: "short",
      q: "How is the value of this decided in JavaScript?",
      answer: "By how the function is called: new, then call/apply/bind, then obj.method(), then a plain call (undefined in strict mode). Arrow functions have no own this and use the surrounding one.",
      meaning: {
        hi: "यह call के तरीक़े से तय होता है: new, फिर call/apply/bind, फिर obj.method(), फिर plain call (strict mode में undefined)। Arrow functions का अपना this नहीं होता, वे आसपास वाला लेते हैं।",
        hg: "Yeh call ke tareeke se tay hota hai: new, phir call/apply/bind, phir obj.method(), phir plain call (strict mode mein undefined). Arrow functions ka apna this nahi hota, woh aaspaas wala lete hain."
      },
      explain: {
        en: `<ul>
<li><code>obj.method()</code>: <code>this</code> is <code>obj</code>. <code>const f = obj.method; f()</code>: the link is lost, so <code>this</code> is <code>undefined</code> in strict code (modules and classes) or the global object in old sloppy scripts.</li>
<li><code>fn.call(thisArg, ...args)</code> and <code>fn.apply(thisArg, argsArray)</code> call now; <code>fn.bind(thisArg)</code> returns a new function with <code>this</code> fixed (a second <code>bind</code> or <code>call</code> cannot change it).</li>
<li><code>new Fn()</code> creates a new object and uses it as <code>this</code>.</li>
<li>Typical bug: passing <code>this.handleClick</code> to <code>addEventListener</code> or to a React prop, and then <code>this</code> is not your object. Fix with an arrow function or <code>bind</code>.</li>
<li>Follow-up: "What is <code>this</code> at the top level of an ES module?" <code>undefined</code>. Puzzle 3 shows these rules.</li>
</ul>`,
        hi: `<ul>
<li><code>obj.method()</code>: <code>this</code> <code>obj</code> है। <code>const f = obj.method; f()</code>: link टूट गया, इसलिए strict code (modules और classes) में <code>this</code> <code>undefined</code> है या पुरानी sloppy scripts में global object।</li>
<li><code>fn.call(thisArg, ...args)</code> और <code>fn.apply(thisArg, argsArray)</code> अभी call करते हैं; <code>fn.bind(thisArg)</code> नया function लौटाता है जिसका <code>this</code> fix है (दूसरा <code>bind</code> या <code>call</code> उसे बदल नहीं सकता)।</li>
<li><code>new Fn()</code> नया object बनाता है और उसे <code>this</code> की तरह use करता है।</li>
<li>Typical bug: <code>this.handleClick</code> को <code>addEventListener</code> या React prop में pass करना, और फिर <code>this</code> तुम्हारा object नहीं रहता। Arrow function या <code>bind</code> से fix करो।</li>
<li>Follow-up: "ES module के top level पर <code>this</code> क्या है?" <code>undefined</code>। Puzzle 3 में ये rules दिखते हैं।</li>
</ul>`,
        hg: `<ul>
<li><code>obj.method()</code>: <code>this</code> <code>obj</code> hai. <code>const f = obj.method; f()</code>: link toot gaya, isliye strict code (modules aur classes) mein <code>this</code> <code>undefined</code> hai ya purani sloppy scripts mein global object.</li>
<li><code>fn.call(thisArg, ...args)</code> aur <code>fn.apply(thisArg, argsArray)</code> abhi call karte hain; <code>fn.bind(thisArg)</code> naya function lautata hai jiska <code>this</code> fix hai (doosra <code>bind</code> ya <code>call</code> use badal nahi sakta).</li>
<li><code>new Fn()</code> naya object banata hai aur use <code>this</code> ki tarah use karta hai.</li>
<li>Typical bug: <code>this.handleClick</code> ko <code>addEventListener</code> ya React prop mein pass karna, aur phir <code>this</code> tumhara object nahi rehta. Arrow function ya <code>bind</code> se fix karo.</li>
<li>Follow-up: "ES module ke top level par <code>this</code> kya hai?" <code>undefined</code>. Puzzle 3 mein yeh rules dikhte hain.</li>
</ul>`
      }
    },
    {
      id: "equality-coercion",
      depth: "short",
      q: "What is the difference between == and ===?",
      answer: "=== compares without converting types. == converts types first and gives surprises, for example [] == false is true. Use === by default.",
      meaning: {
        hi: "=== types बदले बिना compare करता है। == पहले types convert करता है और चौंकाता है, जैसे [] == false true है। Default में === use करो।",
        hg: "=== types badle bina compare karta hai. == pehle types convert karta hai aur chaunkata hai, jaise [] == false true hai. Default mein === use karo."
      },
      explain: {
        en: `<ul>
<li><code>==</code> follows conversion rules: <code>0 == "0"</code> is <code>true</code>, <code>"0" == ""</code> is <code>false</code>, so it is not even transitive. <code>null == undefined</code> is <code>true</code> but <code>null == 0</code> is <code>false</code>.</li>
<li><code>NaN</code> is not equal to itself with either operator; use <code>Number.isNaN(x)</code> or <code>Object.is</code>.</li>
<li>Related coercions: <code>"5" + 2</code> is <code>"52"</code> (<code>+</code> concatenates when a string is involved), <code>"5" - 2</code> is <code>3</code>, and <code>typeof null</code> is <code>"object"</code> (a historical quirk).</li>
<li>Some teams allow <code>x == null</code> as a short check for "null or undefined"; ESLint's <code>eqeqeq</code> rule can allow that single case.</li>
<li>C# comparison: C# does not convert between <code>int</code> and <code>string</code> in <code>==</code>; the compiler would reject it.</li>
</ul>`,
        hi: `<ul>
<li><code>==</code> conversion rules follow करता है: <code>0 == "0"</code> <code>true</code> है, <code>"0" == ""</code> <code>false</code> है, यानी यह transitive भी नहीं है। <code>null == undefined</code> <code>true</code> है पर <code>null == 0</code> <code>false</code> है।</li>
<li><code>NaN</code> किसी भी operator से अपने बराबर नहीं होता; <code>Number.isNaN(x)</code> या <code>Object.is</code> use करो।</li>
<li>जुड़े coercions: <code>"5" + 2</code> <code>"52"</code> है (string आने पर <code>+</code> जोड़ता है), <code>"5" - 2</code> <code>3</code> है, और <code>typeof null</code> <code>"object"</code> है (पुरानी historical quirk)।</li>
<li>कुछ teams "null या undefined" की छोटी check के लिए <code>x == null</code> allow करती हैं; ESLint का <code>eqeqeq</code> rule सिर्फ़ यह एक case allow कर सकता है।</li>
<li>C# से comparison: C# <code>==</code> में <code>int</code> और <code>string</code> को convert नहीं करता; compiler उसे reject कर देगा।</li>
</ul>`,
        hg: `<ul>
<li><code>==</code> conversion rules follow karta hai: <code>0 == "0"</code> <code>true</code> hai, <code>"0" == ""</code> <code>false</code> hai, yaani yeh transitive bhi nahi hai. <code>null == undefined</code> <code>true</code> hai par <code>null == 0</code> <code>false</code> hai.</li>
<li><code>NaN</code> kisi bhi operator se apne barabar nahi hota; <code>Number.isNaN(x)</code> ya <code>Object.is</code> use karo.</li>
<li>Jude coercions: <code>"5" + 2</code> <code>"52"</code> hai (string aane par <code>+</code> jodta hai), <code>"5" - 2</code> <code>3</code> hai, aur <code>typeof null</code> <code>"object"</code> hai (purani historical quirk).</li>
<li>Kuch teams "null ya undefined" ki chhoti check ke liye <code>x == null</code> allow karti hain; ESLint ka <code>eqeqeq</code> rule sirf yeh ek case allow kar sakta hai.</li>
<li>C# se comparison: C# <code>==</code> mein <code>int</code> aur <code>string</code> ko convert nahi karta; compiler use reject kar dega.</li>
</ul>`
      }
    },
    {
      id: "event-loop-order",
      depth: "short",
      q: "Explain the JavaScript event loop. Microtasks vs macrotasks?",
      answer: "One thread runs the call stack. When it empties, all microtasks (promise callbacks) run, then one macrotask such as setTimeout, then microtasks again. So a promise then runs before setTimeout 0.",
      meaning: {
        hi: "एक thread call stack चलाता है। Stack खाली होने पर सारे microtasks (promise callbacks) चलते हैं, फिर एक macrotask जैसे setTimeout, फिर दोबारा microtasks। इसलिए promise का then setTimeout 0 से पहले चलता है।",
        hg: "Ek thread call stack chalata hai. Stack khaali hone par saare microtasks (promise callbacks) chalte hain, phir ek macrotask jaise setTimeout, phir dobara microtasks. Isliye promise ka then setTimeout 0 se pehle chalta hai."
      },
      explain: {
        en: `<ul>
<li>Parts: the <b>call stack</b> (what runs now), <b>Web APIs / Node runtime</b> (timers, network, files wait there), the <b>microtask queue</b> (promise reactions, <code>queueMicrotask</code>, <code>await</code> continuations) and the <b>macrotask queue</b> (timers, I/O callbacks, UI events).</li>
<li>Nuance: <code>setTimeout(fn, 0)</code> means "no sooner than 0 ms, as a macrotask", not "now". In Node, <code>process.nextTick</code> callbacks run even before promise microtasks, and <code>setImmediate</code> is a separate phase.</li>
<li>Danger: an endless chain of microtasks can starve rendering and timers; a long synchronous loop freezes everything.</li>
<li>C# bridge: ASP.NET Core serves many requests with a pool of threads (Day 3); Node serves many with one thread because waiting is not done by your code. That is why CPU-heavy work hurts Node much more.</li>
<li>Follow-up: "What prints first, <code>setTimeout 0</code> or <code>Promise.resolve().then</code>?" The promise; puzzle 1 shows the full order.</li>
</ul>`,
        hi: `<ul>
<li>हिस्से: <b>call stack</b> (जो अभी चल रहा है), <b>Web APIs / Node runtime</b> (timers, network, files वहाँ इंतज़ार करते हैं), <b>microtask queue</b> (promise reactions, <code>queueMicrotask</code>, <code>await</code> continuations) और <b>macrotask queue</b> (timers, I/O callbacks, UI events)।</li>
<li>Nuance: <code>setTimeout(fn, 0)</code> का मतलब है "0 ms से जल्दी नहीं, macrotask की तरह", "अभी" नहीं। Node में <code>process.nextTick</code> callbacks promise microtasks से भी पहले चलते हैं, और <code>setImmediate</code> अलग phase है।</li>
<li>Danger: microtasks की अंतहीन chain rendering और timers को भूखा रख सकती है; लंबा synchronous loop सब कुछ freeze कर देता है।</li>
<li>C# bridge: ASP.NET Core कई requests को threads के pool से serve करता है (Day 3); Node कई requests को एक thread से serve करता है क्योंकि इंतज़ार तुम्हारा code नहीं करता। इसीलिए CPU-heavy काम Node को ज़्यादा चोट पहुँचाता है।</li>
<li>Follow-up: "<code>setTimeout 0</code> पहले print होगा या <code>Promise.resolve().then</code>?" Promise; पूरा order puzzle 1 में है।</li>
</ul>`,
        hg: `<ul>
<li>Hisse: <b>call stack</b> (jo abhi chal raha hai), <b>Web APIs / Node runtime</b> (timers, network, files wahan intezaar karte hain), <b>microtask queue</b> (promise reactions, <code>queueMicrotask</code>, <code>await</code> continuations) aur <b>macrotask queue</b> (timers, I/O callbacks, UI events).</li>
<li>Nuance: <code>setTimeout(fn, 0)</code> ka matlab hai "0 ms se jaldi nahi, macrotask ki tarah", "abhi" nahi. Node mein <code>process.nextTick</code> callbacks promise microtasks se bhi pehle chalte hain, aur <code>setImmediate</code> alag phase hai.</li>
<li>Danger: microtasks ki anthheen chain rendering aur timers ko bhookha rakh sakti hai; lamba synchronous loop sab kuch freeze kar deta hai.</li>
<li>C# bridge: ASP.NET Core kai requests ko threads ke pool se serve karta hai (Day 3); Node kai requests ko ek thread se serve karta hai kyonki intezaar tumhara code nahi karta. Isiliye CPU-heavy kaam Node ko zyaada chot pahunchata hai.</li>
<li>Follow-up: "<code>setTimeout 0</code> pehle print hoga ya <code>Promise.resolve().then</code>?" Promise; poora order puzzle 1 mein hai.</li>
</ul>`
      }
    },
    {
      id: "promise-async-await-vs-task",
      depth: "short",
      q: "What is a Promise? How do async/await work, and how do they differ from C# Task?",
      answer: "A promise is a future value: pending, then fulfilled or rejected. async/await is syntax over promises: await pauses that function, not the thread, and errors use try/catch.",
      meaning: {
        hi: "Promise एक future value है: pending, फिर fulfilled या rejected। async/await promises पर syntax है: await उसी function को pause करता है, thread को नहीं, और errors try/catch से आते हैं।",
        hg: "Promise ek future value hai: pending, phir fulfilled ya rejected. async/await promises par syntax hai: await usi function ko pause karta hai, thread ko nahi, aur errors try/catch se aate hain."
      },
      explain: {
        en: `<ul>
<li>An <code>async</code> function always returns a promise; a <code>throw</code> inside becomes a rejection. <code>await x</code> means "pause here, let other tasks run, continue as a microtask when <code>x</code> settles".</li>
<li><b>Same as C# <code>Task</code> (Day 3):</b> work starts when you call (a promise is "hot"), you compose with <code>all</code> like <code>WhenAll</code>, and exceptions travel inside the object.</li>
<li><b>Different:</b> JavaScript has <b>no thread pool</b> for your code and no <code>ConfigureAwait</code>; there is one loop thread. A promise cannot be cancelled by itself (use <code>AbortController</code>; C# has <code>CancellationToken</code>). A promise resolves once and cannot be "awaited synchronously" with <code>.Result</code>.</li>
<li>Pitfalls: forgetting <code>await</code> (you get a promise, not the value), <code>forEach(async ...)</code>, and an unhandled rejection, which ends a Node process by default.</li>
<li>Follow-up: "Does async make this loop faster?" No; it only avoids waiting. CPU work still blocks.</li>
</ul>`,
        hi: `<ul>
<li><code>async</code> function हमेशा promise लौटाता है; अंदर का <code>throw</code> rejection बन जाता है। <code>await x</code> का मतलब है "यहाँ pause करो, दूसरे tasks चलने दो, <code>x</code> के settle होने पर microtask की तरह आगे बढ़ो"।</li>
<li><b>C# <code>Task</code> (Day 3) जैसा:</b> call करते ही काम शुरू (promise "hot" है), <code>WhenAll</code> की तरह <code>all</code> से compose करते हैं, और exceptions object के अंदर सफ़र करते हैं।</li>
<li><b>अलग:</b> JavaScript में तुम्हारे code के लिए <b>thread pool नहीं</b> है और <code>ConfigureAwait</code> नहीं है; एक loop thread है। Promise ख़ुद cancel नहीं हो सकता (<code>AbortController</code> use करो; C# में <code>CancellationToken</code> है)। Promise एक ही बार resolve होता है और <code>.Result</code> जैसा synchronous wait नहीं है।</li>
<li>Pitfalls: <code>await</code> भूल जाना (value की जगह promise मिलता है), <code>forEach(async ...)</code>, और unhandled rejection, जो Node process को default में बंद कर देता है।</li>
<li>Follow-up: "क्या async से यह loop तेज़ हो जाएगा?" नहीं; वह सिर्फ़ इंतज़ार बचाता है। CPU का काम फिर भी block करता है।</li>
</ul>`,
        hg: `<ul>
<li><code>async</code> function hamesha promise lautata hai; andar ka <code>throw</code> rejection ban jaata hai. <code>await x</code> ka matlab hai "yahan pause karo, doosre tasks chalne do, <code>x</code> ke settle hone par microtask ki tarah aage badho".</li>
<li><b>C# <code>Task</code> (Day 3) jaisa:</b> call karte hi kaam shuru (promise "hot" hai), <code>WhenAll</code> ki tarah <code>all</code> se compose karte hain, aur exceptions object ke andar safar karte hain.</li>
<li><b>Alag:</b> JavaScript mein tumhare code ke liye <b>thread pool nahi</b> hai aur <code>ConfigureAwait</code> nahi hai; ek loop thread hai. Promise khud cancel nahi ho sakta (<code>AbortController</code> use karo; C# mein <code>CancellationToken</code> hai). Promise ek hi baar resolve hota hai aur <code>.Result</code> jaisa synchronous wait nahi hai.</li>
<li>Pitfalls: <code>await</code> bhool jaana (value ki jagah promise milta hai), <code>forEach(async ...)</code>, aur unhandled rejection, jo Node process ko default mein band kar deta hai.</li>
<li>Follow-up: "Kya async se yeh loop tez ho jaayega?" Nahi; woh sirf intezaar bachata hai. CPU ka kaam phir bhi block karta hai.</li>
</ul>`
      }
    },
    {
      id: "promise-combinators",
      depth: "short",
      q: "Promise.all vs allSettled vs race vs any: when do you use each?",
      answer: "all fails fast on the first rejection; allSettled waits for everything and reports each outcome; race returns the first to settle; any returns the first fulfilled (AggregateError if all reject).",
      meaning: {
        hi: "all पहले rejection पर fail हो जाता है; allSettled सबका इंतज़ार करके हर नतीजा बताता है; race जो पहले settle हो वह लौटाता है; any पहला fulfilled लौटाता है (सब reject हों तो AggregateError)।",
        hg: "all pehle rejection par fail ho jaata hai; allSettled sabka intezaar karke har nateeja batata hai; race jo pehle settle ho woh lautata hai; any pehla fulfilled lautata hai (sab reject hon to AggregateError)."
      },
      explain: {
        en: `<ul>
<li><code>all</code>: all calls are needed (load user and settings for one screen). The other promises keep running; you just stop waiting for them.</li>
<li><code>allSettled</code>: partial results are fine (a dashboard of independent widgets). You inspect <code>status</code> and <code>value</code>/<code>reason</code> yourself.</li>
<li><code>race</code>: the first outcome wins, even a rejection; common for a timeout. <code>any</code>: the first success wins, e.g. the fastest mirror.</li>
<li>C# bridge: <code>all</code> ~ <code>Task.WhenAll</code>, <code>race</code> ~ <code>Task.WhenAny</code>; <code>allSettled</code> has no one-line twin (you inspect each Task).</li>
<li>Follow-up: "Does <code>Promise.all</code> cancel the others?" No, nothing is cancelled. Puzzle 7 runs all four.</li>
</ul>`,
        hi: `<ul>
<li><code>all</code>: जब सारे calls चाहिए (एक screen के लिए user और settings load करना)। बाक़ी promises चलते रहते हैं; तुम बस उनका इंतज़ार छोड़ देते हो।</li>
<li><code>allSettled</code>: जब partial results चलें (independent widgets वाला dashboard)। <code>status</code> और <code>value</code>/<code>reason</code> तुम ख़ुद देखते हो।</li>
<li><code>race</code>: पहला नतीजा जीतता है, rejection भी; timeout के लिए आम है। <code>any</code>: पहली success जीतती है, जैसे सबसे तेज़ mirror।</li>
<li>C# bridge: <code>all</code> ~ <code>Task.WhenAll</code>, <code>race</code> ~ <code>Task.WhenAny</code>; <code>allSettled</code> का एक line वाला twin नहीं है (हर Task तुम ख़ुद देखते हो)।</li>
<li>Follow-up: "क्या <code>Promise.all</code> बाक़ियों को cancel करता है?" नहीं, कुछ cancel नहीं होता। Puzzle 7 में चारों चलते हैं।</li>
</ul>`,
        hg: `<ul>
<li><code>all</code>: jab saare calls chahiye (ek screen ke liye user aur settings load karna). Baaki promises chalte rehte hain; tum bas unka intezaar chhod dete ho.</li>
<li><code>allSettled</code>: jab partial results chalein (independent widgets wala dashboard). <code>status</code> aur <code>value</code>/<code>reason</code> tum khud dekhte ho.</li>
<li><code>race</code>: pehla nateeja jeetta hai, rejection bhi; timeout ke liye aam hai. <code>any</code>: pehli success jeetti hai, jaise sabse tez mirror.</li>
<li>C# bridge: <code>all</code> ~ <code>Task.WhenAll</code>, <code>race</code> ~ <code>Task.WhenAny</code>; <code>allSettled</code> ka ek line wala twin nahi hai (har Task tum khud dekhte ho).</li>
<li>Follow-up: "Kya <code>Promise.all</code> baakiyon ko cancel karta hai?" Nahi, kuch cancel nahi hota. Puzzle 7 mein chaaron chalte hain.</li>
</ul>`
      }
    },
    {
      id: "prototype-vs-class",
      depth: "detailed",
      q: "How does JavaScript inheritance work? Is class the same as a C# class?",
      answer: "Objects inherit through a prototype chain. class is syntax over that mechanism: methods sit on the prototype and extends links prototypes. It is not a C# class with a compile-time type.",
      meaning: {
        hi: "Objects prototype chain से inherit करते हैं। class उसी mechanism पर syntax है: methods prototype पर रहते हैं और extends prototypes को जोड़ता है। यह compile-time type वाली C# class नहीं है।",
        hg: "Objects prototype chain se inherit karte hain. class usi mechanism par syntax hai: methods prototype par rehte hain aur extends prototypes ko jodta hai. Yeh compile-time type wali C# class nahi hai."
      },
      explain: {
        en: `<ul>
<li>Lookup walks up the chain: instance, <code>Class.prototype</code>, parent prototype, ..., <code>Object.prototype</code>, then <code>undefined</code>. <code>Object.getPrototypeOf(x)</code> reads the link; avoid the older <code>__proto__</code> in new code.</li>
<li>What <code>class</code> adds: cleaner syntax, <code>super</code>, <code>static</code>, getters/setters, <code>#private</code> fields and strictness. What it does not add: interfaces, abstract classes, overloads, or compile-time checking (TypeScript adds types and <code>abstract</code> on top, Day 24 shows TSX).</li>
<li>Instance methods are shared on the prototype; a class field holding an arrow function creates one function <b>per instance</b>. That is fine for UI handlers, wasteful for thousands of objects.</li>
<li>TL angle: prefer composition and small modules; deep class hierarchies hurt in JavaScript as much as in C#.</li>
<li>Follow-up: "What does <code>new</code> do?" Creates an object linked to the constructor's prototype, runs the constructor with <code>this</code> set to it, and returns it.</li>
</ul>`,
        hi: `<ul>
<li>Lookup chain में ऊपर चढ़ता है: instance, <code>Class.prototype</code>, parent prototype, ..., <code>Object.prototype</code>, फिर <code>undefined</code>। <code>Object.getPrototypeOf(x)</code> link पढ़ता है; नए code में पुराना <code>__proto__</code> avoid करो।</li>
<li><code>class</code> क्या जोड़ता है: साफ़ syntax, <code>super</code>, <code>static</code>, getters/setters, <code>#private</code> fields और strictness। क्या नहीं जोड़ता: interfaces, abstract classes, overloads, या compile-time checking (TypeScript ऊपर से types और <code>abstract</code> जोड़ता है, Day 24 में TSX दिखेगा)।</li>
<li>Instance methods prototype पर shared रहते हैं; arrow function वाला class field <b>हर instance</b> के लिए एक function बनाता है। UI handlers के लिए ठीक है, हज़ारों objects के लिए फ़िज़ूल।</li>
<li>TL angle: composition और छोटे modules prefer करो; deep class hierarchies JavaScript में भी उतना ही चोट देती हैं जितना C# में।</li>
<li>Follow-up: "<code>new</code> क्या करता है?" Constructor के prototype से जुड़ा object बनाता है, उसे <code>this</code> बनाकर constructor चलाता है, और उसे लौटाता है।</li>
</ul>`,
        hg: `<ul>
<li>Lookup chain mein upar chadhta hai: instance, <code>Class.prototype</code>, parent prototype, ..., <code>Object.prototype</code>, phir <code>undefined</code>. <code>Object.getPrototypeOf(x)</code> link padhta hai; naye code mein purana <code>__proto__</code> avoid karo.</li>
<li><code>class</code> kya jodta hai: saaf syntax, <code>super</code>, <code>static</code>, getters/setters, <code>#private</code> fields aur strictness. Kya nahi jodta: interfaces, abstract classes, overloads, ya compile-time checking (TypeScript upar se types aur <code>abstract</code> jodta hai, Day 24 mein TSX dikhega).</li>
<li>Instance methods prototype par shared rehte hain; arrow function wala class field <b>har instance</b> ke liye ek function banata hai. UI handlers ke liye theek hai, hazaaron objects ke liye fizool.</li>
<li>TL angle: composition aur chhote modules prefer karo; deep class hierarchies JavaScript mein bhi utna hi chot deti hain jitna C# mein.</li>
<li>Follow-up: "<code>new</code> kya karta hai?" Constructor ke prototype se juda object banata hai, use <code>this</code> banakar constructor chalata hai, aur use lautata hai.</li>
</ul>`
      }
    },
    {
      id: "arrow-vs-regular-function",
      depth: "detailed",
      q: "How is an arrow function different from a regular function?",
      answer: "An arrow function has no own this, arguments or prototype and cannot be used with new. It suits callbacks; use regular functions or method syntax for object methods and constructors.",
      meaning: {
        hi: "Arrow function का अपना this, arguments या prototype नहीं होता और उसे new के साथ use नहीं कर सकते। यह callbacks के लिए ठीक है; object methods और constructors के लिए regular function या method syntax use करो।",
        hg: "Arrow function ka apna this, arguments ya prototype nahi hota aur use new ke saath use nahi kar sakte. Yeh callbacks ke liye theek hai; object methods aur constructors ke liye regular function ya method syntax use karo."
      },
      explain: {
        en: `<ul>
<li>"Lexical <code>this</code>" means the arrow looks up <code>this</code> like any variable in the code around it, so <code>call</code>/<code>bind</code> cannot change it.</li>
<li>Good fit: <code>items.map(x =&gt; x.id)</code>, promise callbacks, and a callback inside a method that needs the method's <code>this</code>.</li>
<li>Bad fit: an object literal property like <code>{ total: () =&gt; this.items.length }</code> (here <code>this</code> is not the object), prototype methods, and constructors.</li>
<li>Syntax notes: a body in braces needs <code>return</code>; returning an object literal directly needs parentheses, <code>() =&gt; ({ id: 1 })</code>.</li>
<li>Follow-up: "Why does <code>onClick={this.handle}</code> lose <code>this</code> in a React class component?" Because the method loses <code>this</code> (a class field arrow fixes it). Puzzle 3 shows an arrow on an object.</li>
</ul>`,
        hi: `<ul>
<li>"Lexical <code>this</code>" का मतलब है कि arrow <code>this</code> को आसपास के code के किसी भी variable की तरह खोजता है, इसलिए <code>call</code>/<code>bind</code> उसे बदल नहीं सकते।</li>
<li>सही जगह: <code>items.map(x =&gt; x.id)</code>, promise callbacks, और method के अंदर का callback जिसे method का <code>this</code> चाहिए।</li>
<li>ग़लत जगह: object literal की property जैसे <code>{ total: () =&gt; this.items.length }</code> (यहाँ <code>this</code> वह object नहीं है), prototype methods, और constructors।</li>
<li>Syntax notes: braces वाली body में <code>return</code> चाहिए; object literal सीधे लौटाने के लिए parentheses चाहिए, <code>() =&gt; ({ id: 1 })</code>।</li>
<li>Follow-up: "तुम्हारा React class component <code>onClick={this.handle}</code> से बुरा क्यों चलता है?" क्योंकि method <code>this</code> खो देता है (class field arrow इसे fix करता है)। Puzzle 3 में object पर arrow दिखता है।</li>
</ul>`,
        hg: `<ul>
<li>"Lexical <code>this</code>" ka matlab hai ki arrow <code>this</code> ko aaspaas ke code ke kisi bhi variable ki tarah khojta hai, isliye <code>call</code>/<code>bind</code> use badal nahi sakte.</li>
<li>Sahi jagah: <code>items.map(x =&gt; x.id)</code>, promise callbacks, aur method ke andar ka callback jise method ka <code>this</code> chahiye.</li>
<li>Galat jagah: object literal ki property jaise <code>{ total: () =&gt; this.items.length }</code> (yahan <code>this</code> woh object nahi hai), prototype methods, aur constructors.</li>
<li>Syntax notes: braces wali body mein <code>return</code> chahiye; object literal seedha lautane ke liye parentheses chahiye, <code>() =&gt; ({ id: 1 })</code>.</li>
<li>Follow-up: "Tumhara React class component <code>onClick={this.handle}</code> se bura kyon chalta hai?" Kyonki method <code>this</code> kho deta hai (class field arrow ise fix karta hai). Puzzle 3 mein object par arrow dikhta hai.</li>
</ul>`
      }
    },
    {
      id: "nullish-vs-or-optional-chaining",
      depth: "detailed",
      q: "What is the difference between ?? and ||, and what does ?. do?",
      answer: "?? falls back only for null or undefined; || falls back for any falsy value, including 0, empty string and false. ?. returns undefined instead of throwing when the left side is null or undefined.",
      meaning: {
        hi: "?? सिर्फ़ null या undefined पर fallback देता है; || किसी भी falsy value पर, यानी 0, empty string और false पर भी। ?. में बाईं तरफ़ null या undefined हो तो error की जगह undefined मिलता है।",
        hg: "?? sirf null ya undefined par fallback deta hai; || kisi bhi falsy value par, yaani 0, empty string aur false par bhi. ?. mein baayin taraf null ya undefined ho to error ki jagah undefined milta hai."
      },
      explain: {
        en: `<ul>
<li>Bug pattern: <code>const retries = options.retries || 3</code> turns a deliberate <code>0</code> into <code>3</code>. Write <code>options.retries ?? 3</code>.</li>
<li><code>?.</code> short-circuits the rest of the chain: <code>user?.address?.city</code>, <code>list?.[0]</code>, <code>callback?.()</code>. It checks only the part before it; it does not hide a wrong property name.</li>
<li>Assignment forms: <code>a ||= b</code> (assign if falsy), <code>a ??= b</code> (assign if null/undefined).</li>
<li>Mixing <code>??</code> with <code>||</code> or <code>&amp;&amp;</code> without parentheses is a syntax error, on purpose.</li>
<li>C# bridge: the same operators exist in C#, but C#'s <code>??</code> and <code>?.</code> only know <code>null</code>; in JavaScript <code>undefined</code> counts too. Puzzle 6 shows every case.</li>
</ul>`,
        hi: `<ul>
<li>Bug pattern: <code>const retries = options.retries || 3</code> जान-बूझकर रखे <code>0</code> को <code>3</code> बना देता है। <code>options.retries ?? 3</code> लिखो।</li>
<li><code>?.</code> chain के बाक़ी हिस्से को short-circuit कर देता है: <code>user?.address?.city</code>, <code>list?.[0]</code>, <code>callback?.()</code>। यह सिर्फ़ अपने पहले वाले हिस्से को check करता है; ग़लत property का नाम नहीं छुपाता।</li>
<li>Assignment forms: <code>a ||= b</code> (falsy हो तो assign), <code>a ??= b</code> (null/undefined हो तो assign)।</li>
<li>Parentheses के बिना <code>??</code> को <code>||</code> या <code>&amp;&amp;</code> के साथ mix करना जान-बूझकर syntax error है।</li>
<li>C# bridge: वही operators C# में भी हैं, पर C# के <code>??</code> और <code>?.</code> सिर्फ़ <code>null</code> जानते हैं; JavaScript में <code>undefined</code> भी गिना जाता है। Puzzle 6 में हर case दिखता है।</li>
</ul>`,
        hg: `<ul>
<li>Bug pattern: <code>const retries = options.retries || 3</code> jaan-boojhkar rakhe <code>0</code> ko <code>3</code> bana deta hai. <code>options.retries ?? 3</code> likho.</li>
<li><code>?.</code> chain ke baaki hisse ko short-circuit kar deta hai: <code>user?.address?.city</code>, <code>list?.[0]</code>, <code>callback?.()</code>. Yeh sirf apne pehle wale hisse ko check karta hai; galat property ka naam nahi chhupata.</li>
<li>Assignment forms: <code>a ||= b</code> (falsy ho to assign), <code>a ??= b</code> (null/undefined ho to assign).</li>
<li>Parentheses ke bina <code>??</code> ko <code>||</code> ya <code>&amp;&amp;</code> ke saath mix karna jaan-boojhkar syntax error hai.</li>
<li>C# bridge: wahi operators C# mein bhi hain, par C# ke <code>??</code> aur <code>?.</code> sirf <code>null</code> jaante hain; JavaScript mein <code>undefined</code> bhi ginta hai. Puzzle 6 mein har case dikhta hai.</li>
</ul>`
      }
    },
    {
      id: "truthy-falsy",
      depth: "detailed",
      q: "What are truthy and falsy values in JavaScript?",
      answer: "Falsy: false, 0, -0, 0n, empty string, null, undefined and NaN. Everything else is truthy, including empty arrays, empty objects and the string \"false\".",
      meaning: {
        hi: "Falsy: false, 0, -0, 0n, empty string, null, undefined और NaN। बाक़ी सब truthy है, जिसमें empty arrays, empty objects और string \"false\" भी हैं।",
        hg: "Falsy: false, 0, -0, 0n, empty string, null, undefined aur NaN. Baaki sab truthy hai, jisme empty arrays, empty objects aur string \"false\" bhi hain."
      },
      explain: {
        en: `<ul>
<li>Conditions like <code>if (x)</code>, <code>!x</code>, <code>x &amp;&amp; y</code> and <code>x || y</code> use truthiness. That is convenient but hides the difference between "missing" and "zero".</li>
<li>Gotchas: <code>if (items)</code> is true for an empty array (check <code>items.length</code>); <code>if (count)</code> is false for <code>0</code>; <code>Boolean("false")</code> is <code>true</code>.</li>
<li>Browsers also have one odd falsy object, <code>document.all</code>; you will rarely meet it.</li>
<li>Code-review habit: when a value can legitimately be <code>0</code>, <code>""</code> or <code>false</code>, compare explicitly (<code>x !== undefined</code>) or use <code>??</code>.</li>
<li>C# bridge: C# conditions accept only <code>bool</code>, so <code>if (count)</code> does not compile.</li>
</ul>`,
        hi: `<ul>
<li><code>if (x)</code>, <code>!x</code>, <code>x &amp;&amp; y</code> और <code>x || y</code> जैसी conditions truthiness use करती हैं। यह सुविधाजनक है पर "missing" और "zero" का फ़र्क़ छुपा देता है।</li>
<li>Gotchas: empty array के लिए <code>if (items)</code> true है (<code>items.length</code> check करो); <code>0</code> के लिए <code>if (count)</code> false है; <code>Boolean("false")</code> <code>true</code> है।</li>
<li>Browsers में एक अजीब falsy object भी है, <code>document.all</code>; वह तुम्हें कम ही मिलेगा।</li>
<li>Code-review की आदत: जब value सही तरह से <code>0</code>, <code>""</code> या <code>false</code> हो सकती हो, तो explicitly compare करो (<code>x !== undefined</code>) या <code>??</code> use करो।</li>
<li>C# bridge: C# conditions सिर्फ़ <code>bool</code> लेती हैं, इसलिए <code>if (count)</code> compile नहीं होता।</li>
</ul>`,
        hg: `<ul>
<li><code>if (x)</code>, <code>!x</code>, <code>x &amp;&amp; y</code> aur <code>x || y</code> jaisi conditions truthiness use karti hain. Yeh suvidhajanak hai par "missing" aur "zero" ka farq chhupa deta hai.</li>
<li>Gotchas: empty array ke liye <code>if (items)</code> true hai (<code>items.length</code> check karo); <code>0</code> ke liye <code>if (count)</code> false hai; <code>Boolean("false")</code> <code>true</code> hai.</li>
<li>Browsers mein ek ajeeb falsy object bhi hai, <code>document.all</code>; woh tumhein kam hi milega.</li>
<li>Code-review ki aadat: jab value sahi tarah se <code>0</code>, <code>""</code> ya <code>false</code> ho sakti ho, to explicitly compare karo (<code>x !== undefined</code>) ya <code>??</code> use karo.</li>
<li>C# bridge: C# conditions sirf <code>bool</code> leti hain, isliye <code>if (count)</code> compile nahi hota.</li>
</ul>`
      }
    },
    {
      id: "fetch-http-errors",
      depth: "detailed",
      q: "How do you handle errors with fetch? Does a 404 reject the promise?",
      answer: "No. fetch rejects only on network failure or abort. A 404 or 500 resolves, so check response.ok before parsing and throw your own error.",
      meaning: {
        hi: "नहीं। fetch सिर्फ़ network failure या abort पर reject होता है। 404 या 500 पर वह resolve होता है, इसलिए parse करने से पहले response.ok check करो और अपना error फेंको।",
        hg: "Nahi. fetch sirf network failure ya abort par reject hota hai. 404 ya 500 par woh resolve hota hai, isliye parse karne se pehle response.ok check karo aur apna error phenko."
      },
      explain: {
        en: `<ul>
<li>Pattern: <code>const res = await fetch(url); if (!res.ok) throw new Error(...); const data = await res.json();</code> and wrap the call in <code>try/catch</code> for network errors and bad JSON (<code>SyntaxError</code>).</li>
<li>Read the body once: <code>res.json()</code> or <code>res.text()</code>, not both (use <code>res.clone()</code> if you need two reads). For an ASP.NET Core <code>ProblemDetails</code> body (Day 13), parse it to show a useful message.</li>
<li>Timeouts and cancel: <code>AbortSignal.timeout(ms)</code> or an <code>AbortController</code>; user navigation or a new search should cancel the old request.</li>
<li>Browser extras: cross-origin calls need CORS (Day 13); cookies are sent cross-origin only with <code>credentials: "include"</code> and matching server settings.</li>
<li>TL angle: put this in one small API client function so every screen gets the same error handling, instead of repeating it. Compare with <code>HttpClient</code>, which throws only on <code>EnsureSuccessStatusCode()</code>.</li>
</ul>`,
        hi: `<ul>
<li>Pattern: <code>const res = await fetch(url); if (!res.ok) throw new Error(...); const data = await res.json();</code> और network errors व ख़राब JSON (<code>SyntaxError</code>) के लिए call को <code>try/catch</code> में रखो।</li>
<li>Body एक बार पढ़ो: <code>res.json()</code> या <code>res.text()</code>, दोनों नहीं (दो बार पढ़ना हो तो <code>res.clone()</code>)। ASP.NET Core <code>ProblemDetails</code> body (Day 13) के लिए उसे parse करके काम का message दिखाओ।</li>
<li>Timeouts और cancel: <code>AbortSignal.timeout(ms)</code> या <code>AbortController</code>; user का navigate करना या नई search पुरानी request को cancel करे।</li>
<li>Browser extras: cross-origin calls के लिए CORS चाहिए (Day 13); cookies cross-origin तभी जाती हैं जब <code>credentials: "include"</code> हो और server settings मेल खाएँ।</li>
<li>TL angle: यह एक छोटे API client function में रखो ताकि हर screen को वही error handling मिले, दोहराने की जगह। <code>HttpClient</code> से compare करो, जो सिर्फ़ <code>EnsureSuccessStatusCode()</code> पर throw करता है।</li>
</ul>`,
        hg: `<ul>
<li>Pattern: <code>const res = await fetch(url); if (!res.ok) throw new Error(...); const data = await res.json();</code> aur network errors va kharab JSON (<code>SyntaxError</code>) ke liye call ko <code>try/catch</code> mein rakho.</li>
<li>Body ek baar padho: <code>res.json()</code> ya <code>res.text()</code>, dono nahi (do baar padhna ho to <code>res.clone()</code>). ASP.NET Core <code>ProblemDetails</code> body (Day 13) ke liye use parse karke kaam ka message dikhao.</li>
<li>Timeouts aur cancel: <code>AbortSignal.timeout(ms)</code> ya <code>AbortController</code>; user ka navigate karna ya nayi search purani request ko cancel kare.</li>
<li>Browser extras: cross-origin calls ke liye CORS chahiye (Day 13); cookies cross-origin tabhi jaati hain jab <code>credentials: "include"</code> ho aur server settings match karein.</li>
<li>TL angle: yeh ek chhote API client function mein rakho taaki har screen ko wahi error handling mile, dohrane ki jagah. <code>HttpClient</code> se compare karo, jo sirf <code>EnsureSuccessStatusCode()</code> par throw karta hai.</li>
</ul>`
      }
    },
    {
      id: "esm-vs-commonjs",
      depth: "detailed",
      q: "What is the difference between ES modules and CommonJS?",
      answer: "ES modules use static import/export, are strict, support top-level await and work in browsers and modern Node. CommonJS uses require/module.exports, loads synchronously and is mainly legacy Node.",
      meaning: {
        hi: "ES modules static import/export use करते हैं, strict हैं, top-level await support करते हैं और browsers व modern Node में चलते हैं। CommonJS require/module.exports use करता है, synchronously load होता है और मुख्य रूप से legacy Node है।",
        hg: "ES modules static import/export use karte hain, strict hain, top-level await support karte hain aur browsers va modern Node mein chalte hain. CommonJS require/module.exports use karta hai, synchronously load hota hai aur mukhya roop se legacy Node hai."
      },
      explain: {
        en: `<ul>
<li>Because <code>import</code> is static, bundlers can drop unused exports (tree shaking). <code>require</code> is a normal function call, so it can sit inside an <code>if</code>; ESM uses dynamic <code>import()</code> for that.</li>
<li>In Node, a file is ESM when it ends in <code>.mjs</code> or the nearest <code>package.json</code> has <code>"type": "module"</code>; otherwise it is treated as CommonJS. Mixing the two causes the classic "Cannot use import statement outside a module" and "require is not defined" errors.</li>
<li>Browsers load a module with <code>&lt;script type="module"&gt;</code>; it is deferred and strict by default.</li>
<li>Prefer one style per package. New code: ESM. Keep CommonJS only where a tool or old dependency needs it.</li>
<li>C# bridge: a bit like <code>using</code> plus <code>public</code>/<code>internal</code> visibility: only what is exported is visible to other files.</li>
</ul>`,
        hi: `<ul>
<li>क्योंकि <code>import</code> static है, bundlers unused exports हटा सकते हैं (tree shaking)। <code>require</code> सामान्य function call है, इसलिए <code>if</code> के अंदर आ सकता है; ESM इसके लिए dynamic <code>import()</code> use करता है।</li>
<li>Node में file तब ESM होती है जब वह <code>.mjs</code> पर ख़त्म हो या सबसे पास की <code>package.json</code> में <code>"type": "module"</code> हो; वरना उसे CommonJS माना जाता है। दोनों को mix करने से classic errors आते हैं "Cannot use import statement outside a module" और "require is not defined"।</li>
<li>Browsers module को <code>&lt;script type="module"&gt;</code> से load करते हैं; वह deferred और default में strict होता है।</li>
<li>एक package में एक ही style prefer करो। नया code: ESM। CommonJS वहीं रखो जहाँ कोई tool या पुरानी dependency माँगे।</li>
<li>C# bridge: कुछ-कुछ <code>using</code> और <code>public</code>/<code>internal</code> visibility जैसा: दूसरी files को सिर्फ़ वही दिखता है जो export हुआ हो।</li>
</ul>`,
        hg: `<ul>
<li>Kyonki <code>import</code> static hai, bundlers unused exports hata sakte hain (tree shaking). <code>require</code> saamaanya function call hai, isliye <code>if</code> ke andar aa sakta hai; ESM iske liye dynamic <code>import()</code> use karta hai.</li>
<li>Node mein file tab ESM hoti hai jab woh <code>.mjs</code> par khatam ho ya sabse paas ki <code>package.json</code> mein <code>"type": "module"</code> ho; warna use CommonJS maana jaata hai. Dono ko mix karne se classic errors aate hain "Cannot use import statement outside a module" aur "require is not defined".</li>
<li>Browsers module ko <code>&lt;script type="module"&gt;</code> se load karte hain; woh deferred aur default mein strict hota hai.</li>
<li>Ek package mein ek hi style prefer karo. Naya code: ESM. CommonJS wahin rakho jahan koi tool ya purani dependency maange.</li>
<li>C# bridge: kuch-kuch <code>using</code> aur <code>public</code>/<code>internal</code> visibility jaisa: doosri files ko sirf wahi dikhta hai jo export hua ho.</li>
</ul>`
      }
    },
    {
      id: "shallow-vs-deep-copy",
      depth: "detailed",
      q: "How do spread and destructuring work, and why can a copied object still change the original?",
      answer: "Spread copies only the top level; nested objects stay shared. Destructuring pulls fields out into variables. Use structuredClone for a deep copy of plain data, or copy the nested parts you change.",
      meaning: {
        hi: "Spread सिर्फ़ ऊपर का level copy करता है; nested objects shared रहते हैं। Destructuring fields को variables में निकालता है। Plain data की deep copy के लिए structuredClone use करो, या जो nested हिस्से बदलने हैं उन्हें copy करो।",
        hg: "Spread sirf upar ka level copy karta hai; nested objects shared rehte hain. Destructuring fields ko variables mein nikalta hai. Plain data ki deep copy ke liye structuredClone use karo, ya jo nested hisse badalne hain unhein copy karo."
      },
      explain: {
        en: `<ul>
<li>Immutable update of nested state: <code>{ ...order, customer: { ...order.customer, name: "Ravi" } }</code>. Each level you change is copied; the rest is shared safely.</li>
<li><code>structuredClone</code> handles plain objects, arrays, dates, maps and sets, but throws on functions and does not keep class prototypes. Avoid <code>JSON.parse(JSON.stringify(x))</code>: it drops <code>undefined</code>, functions and turns <code>Date</code> into a string.</li>
<li>Destructuring: <code>const { id, customer: { name } } = order</code>, defaults <code>{ page = 1 }</code>, renaming <code>{ id: orderId }</code>, rest <code>[first, ...rest]</code>. Destructuring a missing nested object throws, so combine it with defaults.</li>
<li>Why a TL cares: shared mutable state is a top source of "it changed by itself" bugs, and React state (Day 24) must be updated by copying, not mutating.</li>
<li>C# bridge: like a <code>record</code> <code>with</code> expression, which is also a shallow copy.</li>
</ul>`,
        hi: `<ul>
<li>Nested state का immutable update: <code>{ ...order, customer: { ...order.customer, name: "Ravi" } }</code>। जो-जो level बदलना है वह copy होता है; बाक़ी safely shared रहता है।</li>
<li><code>structuredClone</code> plain objects, arrays, dates, maps और sets संभालता है, पर functions पर throw करता है और class prototypes नहीं रखता। <code>JSON.parse(JSON.stringify(x))</code> से बचो: यह <code>undefined</code>, functions गिरा देता है और <code>Date</code> को string बना देता है।</li>
<li>Destructuring: <code>const { id, customer: { name } } = order</code>, defaults <code>{ page = 1 }</code>, renaming <code>{ id: orderId }</code>, rest <code>[first, ...rest]</code>। Missing nested object को destructure करने पर throw होता है, इसलिए defaults के साथ use करो।</li>
<li>TL को क्यों परवाह: shared mutable state "अपने आप बदल गया" वाले bugs का बड़ा source है, और React state (Day 24) को mutate नहीं, copy करके update करना होता है।</li>
<li>C# bridge: <code>record</code> के <code>with</code> expression जैसा, जो भी shallow copy है।</li>
</ul>`,
        hg: `<ul>
<li>Nested state ka immutable update: <code>{ ...order, customer: { ...order.customer, name: "Ravi" } }</code>. Jo-jo level badalna hai woh copy hota hai; baaki safely shared rehta hai.</li>
<li><code>structuredClone</code> plain objects, arrays, dates, maps aur sets sambhalta hai, par functions par throw karta hai aur class prototypes nahi rakhta. <code>JSON.parse(JSON.stringify(x))</code> se bacho: yeh <code>undefined</code>, functions gira deta hai aur <code>Date</code> ko string bana deta hai.</li>
<li>Destructuring: <code>const { id, customer: { name } } = order</code>, defaults <code>{ page = 1 }</code>, renaming <code>{ id: orderId }</code>, rest <code>[first, ...rest]</code>. Missing nested object ko destructure karne par throw hota hai, isliye defaults ke saath use karo.</li>
<li>TL ko kyon parwah: shared mutable state "apne aap badal gaya" wale bugs ka bada source hai, aur React state (Day 24) ko mutate nahi, copy karke update karna hota hai.</li>
<li>C# bridge: <code>record</code> ke <code>with</code> expression jaisa, jo bhi shallow copy hai.</li>
</ul>`
      }
    },
    {
      id: "array-methods-vs-linq",
      depth: "detailed",
      q: "How do map, filter and reduce compare with LINQ?",
      answer: "map is Select, filter is Where, reduce is Aggregate. Unlike LINQ they run eagerly and create a new array at each step, so there is no deferred execution.",
      meaning: {
        hi: "map = Select, filter = Where, reduce = Aggregate। LINQ से उलट ये eagerly चलते हैं और हर step पर नया array बनाते हैं, यानी deferred execution नहीं है।",
        hg: "map = Select, filter = Where, reduce = Aggregate. LINQ se ulta yeh eagerly chalte hain aur har step par naya array banate hain, yaani deferred execution nahi hai."
      },
      explain: {
        en: `<ul>
<li>Other matches: <code>some</code>=<code>Any</code>, <code>every</code>=<code>All</code>, <code>find</code>=<code>FirstOrDefault</code>, <code>flatMap</code>=<code>SelectMany</code>, <code>slice</code>=<code>Skip/Take</code>, <code>includes</code>=<code>Contains</code>. Grouping is not built into arrays; use a loop or <code>reduce</code> (newer engines also have <code>Object.groupBy</code>, check your target browsers).</li>
<li>Eager means a chain of <code>filter().map()</code> builds a temporary array after each step. For small lists that is fine. Lazy sequences exist in JavaScript as generators and iterator helpers, but they are not the everyday tool.</li>
<li>Traps: <code>sort()</code> sorts strings by default and mutates the array (use <code>(a, b) =&gt; a - b</code>, and <code>toSorted</code> in newer engines); <code>reduce</code> on an empty array without an initial value throws; <code>parseInt</code> inside <code>map</code> misbehaves because <code>map</code> passes the index as the second argument.</li>
<li>Follow-up: "Why does the order of <code>filter</code> and <code>map</code> matter?" Filter first to do less work, same as LINQ <code>Where</code> before <code>Select</code> (Day 4).</li>
</ul>`,
        hi: `<ul>
<li>और मेल: <code>some</code>=<code>Any</code>, <code>every</code>=<code>All</code>, <code>find</code>=<code>FirstOrDefault</code>, <code>flatMap</code>=<code>SelectMany</code>, <code>slice</code>=<code>Skip/Take</code>, <code>includes</code>=<code>Contains</code>। Grouping arrays में built-in नहीं है; loop या <code>reduce</code> use करो (नए engines में <code>Object.groupBy</code> भी है, अपने target browsers check करो)।</li>
<li>Eager का मतलब है कि <code>filter().map()</code> की chain हर step के बाद temporary array बनाती है। छोटी lists के लिए ठीक है। Lazy sequences JavaScript में generators और iterator helpers से मिलती हैं, पर वे रोज़ का tool नहीं हैं।</li>
<li>Traps: <code>sort()</code> default में strings की तरह sort करता है और array बदल देता है (<code>(a, b) =&gt; a - b</code> use करो, और नए engines में <code>toSorted</code>); initial value के बिना empty array पर <code>reduce</code> throw करता है; <code>map</code> के अंदर <code>parseInt</code> बिगड़ता है क्योंकि <code>map</code> दूसरे argument में index देता है।</li>
<li>Follow-up: "<code>filter</code> और <code>map</code> का order क्यों मायने रखता है?" पहले filter करो ताकि कम काम हो, LINQ में <code>Select</code> से पहले <code>Where</code> की तरह (Day 4)।</li>
</ul>`,
        hg: `<ul>
<li>Aur mel: <code>some</code>=<code>Any</code>, <code>every</code>=<code>All</code>, <code>find</code>=<code>FirstOrDefault</code>, <code>flatMap</code>=<code>SelectMany</code>, <code>slice</code>=<code>Skip/Take</code>, <code>includes</code>=<code>Contains</code>. Grouping arrays mein built-in nahi hai; loop ya <code>reduce</code> use karo (naye engines mein <code>Object.groupBy</code> bhi hai, apne target browsers check karo).</li>
<li>Eager ka matlab hai ki <code>filter().map()</code> ki chain har step ke baad temporary array banati hai. Chhoti lists ke liye theek hai. Lazy sequences JavaScript mein generators aur iterator helpers se milti hain, par woh roz ka tool nahi hain.</li>
<li>Traps: <code>sort()</code> default mein strings ki tarah sort karta hai aur array badal deta hai (<code>(a, b) =&gt; a - b</code> use karo, aur naye engines mein <code>toSorted</code>); initial value ke bina empty array par <code>reduce</code> throw karta hai; <code>map</code> ke andar <code>parseInt</code> bigadta hai kyonki <code>map</code> doosre argument mein index deta hai.</li>
<li>Follow-up: "<code>filter</code> aur <code>map</code> ka order kyon maayne rakhta hai?" Pehle filter karo taaki kam kaam ho, LINQ mein <code>Select</code> se pehle <code>Where</code> ki tarah (Day 4).</li>
</ul>`
      }
    },
    {
      id: "jquery-to-modern-dom",
      depth: "detailed",
      q: "We have a jQuery codebase. How would you move to modern JavaScript?",
      answer: "Do it page by page: replace selectors, events, classes and Ajax with querySelector, addEventListener, classList and fetch, keep jQuery only where plugins need it, and add tests and linting first.",
      meaning: {
        hi: "Page-by-page करो: selectors, events, classes और Ajax को querySelector, addEventListener, classList और fetch से बदलो, jQuery सिर्फ़ वहाँ रखो जहाँ plugins को चाहिए, और पहले tests व linting जोड़ो।",
        hg: "Page-by-page karo: selectors, events, classes aur Ajax ko querySelector, addEventListener, classList aur fetch se badlo, jQuery sirf wahan rakho jahan plugins ko chahiye, aur pehle tests va linting jodo."
      },
      explain: {
        en: `<ul>
<li>Plan: (1) add ESLint and a few end-to-end smoke tests on key flows, (2) stop writing <i>new</i> jQuery, (3) convert a page when you touch it, (4) replace plugins one by one (date picker, grid), (5) remove jQuery when the last use is gone. This is the same incremental idea as the strangler approach on Day 22.</li>
<li>Differences that bite: <code>$(sel)</code> always returns a collection, <code>querySelector</code> returns one element or <code>null</code> (check it); <code>querySelectorAll</code> returns a <code>NodeList</code>, so use <code>forEach</code> or spread it; jQuery's chaining and implicit looping disappear.</li>
<li>Event delegation uses <code>event.target.closest(selector)</code>; <code>$.ajax</code> becomes <code>fetch</code> with your own <code>res.ok</code> check; <code>$(document).ready</code> becomes <code>DOMContentLoaded</code> or a deferred script.</li>
<li>Honest trade-off: jQuery is still supported and works. Migrate for fewer dependencies, smaller pages and easier hiring, not because jQuery is "broken". If a screen is stable and rarely changes, leave it.</li>
<li>Next step: for big interactive screens, move to a component framework (React on Day 24) rather than hand-written DOM code.</li>
</ul>`,
        hi: `<ul>
<li>Plan: (1) ESLint और key flows पर कुछ end-to-end smoke tests जोड़ो, (2) <i>नया</i> jQuery लिखना बंद करो, (3) page को छूते वक़्त convert करो, (4) plugins एक-एक करके बदलो (date picker, grid), (5) आख़िरी use जाने पर jQuery हटाओ। यह वही incremental idea है जो Day 22 के strangler approach में था।</li>
<li>जो फ़र्क़ चोट देते हैं: <code>$(sel)</code> हमेशा collection लौटाता है, <code>querySelector</code> एक element या <code>null</code> लौटाता है (check करो); <code>querySelectorAll</code> <code>NodeList</code> लौटाता है, इसलिए <code>forEach</code> या spread use करो; jQuery की chaining और implicit looping चली जाती है।</li>
<li>Event delegation <code>event.target.closest(selector)</code> से होती है; <code>$.ajax</code> बनता है <code>fetch</code> अपने <code>res.ok</code> check के साथ; <code>$(document).ready</code> बनता है <code>DOMContentLoaded</code> या deferred script।</li>
<li>सच्चा trade-off: jQuery अब भी supported है और चलता है। कम dependencies, छोटे pages और आसान hiring के लिए migrate करो, इसलिए नहीं कि jQuery "टूटा" है। अगर कोई screen stable है और कम बदलती है तो छोड़ दो।</li>
<li>अगला step: बड़ी interactive screens के लिए हाथ से लिखे DOM code की जगह component framework (Day 24 की React) पर जाओ।</li>
</ul>`,
        hg: `<ul>
<li>Plan: (1) ESLint aur key flows par kuch end-to-end smoke tests jodo, (2) <i>naya</i> jQuery likhna band karo, (3) page ko chhute waqt convert karo, (4) plugins ek-ek karke badlo (date picker, grid), (5) aakhri use jaane par jQuery hatao. Yeh wahi incremental idea hai jo Day 22 ke strangler approach mein tha.</li>
<li>Jo farq chot dete hain: <code>$(sel)</code> hamesha collection lautata hai, <code>querySelector</code> ek element ya <code>null</code> lautata hai (check karo); <code>querySelectorAll</code> <code>NodeList</code> lautata hai, isliye <code>forEach</code> ya spread use karo; jQuery ki chaining aur implicit looping chali jaati hai.</li>
<li>Event delegation <code>event.target.closest(selector)</code> se hoti hai; <code>$.ajax</code> banta hai <code>fetch</code> apne <code>res.ok</code> check ke saath; <code>$(document).ready</code> banta hai <code>DOMContentLoaded</code> ya deferred script.</li>
<li>Sachcha trade-off: jQuery ab bhi supported hai aur chalta hai. Kam dependencies, chhote pages aur aasaan hiring ke liye migrate karo, isliye nahi ki jQuery "toota" hai. Agar koi screen stable hai aur kam badalti hai to chhod do.</li>
<li>Agla step: badi interactive screens ke liye haath se likhe DOM code ki jagah component framework (Day 24 ki React) par jao.</li>
</ul>`
      }
    },
    {
      id: "strict-mode",
      depth: "detailed",
      q: "What is strict mode in JavaScript?",
      answer: "Strict mode turns some silent mistakes into errors, for example assigning to an undeclared variable, and this is undefined in plain function calls. ES modules and class bodies are strict automatically.",
      meaning: {
        hi: "Strict mode कुछ चुपचाप वाली ग़लतियों को errors बना देता है, जैसे undeclared variable को assign करना, और plain function call में this undefined होता है। ES modules और class bodies अपने आप strict होते हैं।",
        hg: "Strict mode kuch chupchaap wali galatiyon ko errors bana deta hai, jaise undeclared variable ko assign karna, aur plain function call mein this undefined hota hai. ES modules aur class bodies apne aap strict hote hain."
      },
      explain: {
        en: `<ul>
<li>Switch on with the string <code>"use strict"</code> at the top of a script or function. In a classic script without it, <code>count = 5</code> on an undeclared name silently creates a global; in strict mode it throws <code>ReferenceError</code>.</li>
<li>Other effects: duplicate parameter names are an error, writing to a read-only property throws instead of being ignored, and <code>this</code> in a plain call is <code>undefined</code> rather than the global object.</li>
<li>Practical advice: you rarely type <code>"use strict"</code> today because modules, classes and most bundler or TypeScript setups are already strict. Seeing it in a legacy file tells you the file is not a module.</li>
<li>Follow-up: "Why do you care?" It makes accidental globals and lost-<code>this</code> bugs fail loudly, which is cheaper to find than a silent wrong value.</li>
</ul>`,
        hi: `<ul>
<li>Script या function के ऊपर string <code>"use strict"</code> से चालू होता है। उसके बिना classic script में undeclared नाम पर <code>count = 5</code> चुपचाप global बना देता है; strict mode में <code>ReferenceError</code> आता है।</li>
<li>और असर: duplicate parameter names error हैं, read-only property में लिखना ignore होने की जगह throw करता है, और plain call में <code>this</code> global object की जगह <code>undefined</code> होता है।</li>
<li>Practical सलाह: आज <code>"use strict"</code> कम ही type करते हैं क्योंकि modules, classes और ज़्यादातर bundler या TypeScript setups पहले से strict हैं। Legacy file में यह दिखे तो मतलब वह file module नहीं है।</li>
<li>Follow-up: "तुम्हें परवाह क्यों?" इससे accidental globals और खोए हुए <code>this</code> वाले bugs loud होकर fail होते हैं, जो चुपचाप ग़लत value से सस्ते में मिलते हैं।</li>
</ul>`,
        hg: `<ul>
<li>Script ya function ke upar string <code>"use strict"</code> se chaalu hota hai. Uske bina classic script mein undeclared naam par <code>count = 5</code> chupchaap global bana deta hai; strict mode mein <code>ReferenceError</code> aata hai.</li>
<li>Aur asar: duplicate parameter names error hain, read-only property mein likhna ignore hone ki jagah throw karta hai, aur plain call mein <code>this</code> global object ki jagah <code>undefined</code> hota hai.</li>
<li>Practical salaah: aaj <code>"use strict"</code> kam hi type karte hain kyonki modules, classes aur zyaadatar bundler ya TypeScript setups pehle se strict hain. Legacy file mein yeh dikhe to matlab woh file module nahi hai.</li>
<li>Follow-up: "Tumhein parwah kyon?" Isse accidental globals aur khoye hue <code>this</code> wale bugs loud hokar fail hote hain, jo chupchaap galat value se sasste mein milte hain.</li>
</ul>`
      }
    },
    {
      id: "typescript-adoption",
      depth: "detailed",
      q: "As a Tech Lead, would you adopt TypeScript on a JavaScript team?",
      answer: "Usually yes for a shared, long-lived codebase: types catch mistakes before running and help refactoring. Adopt gradually and keep tests; types do not replace runtime validation of API data.",
      meaning: {
        hi: "साझा, लंबे चलने वाले codebase के लिए आम तौर पर हाँ: types चलाने से पहले ग़लतियाँ पकड़ते हैं और refactoring में मदद करते हैं। धीरे-धीरे अपनाओ और tests रखो; types API data की runtime validation की जगह नहीं लेते।",
        hg: "Saajha, lambe chalne wale codebase ke liye aam taur par haan: types chalane se pehle galatiyan pakadte hain aur refactoring mein madad karte hain. Dheere-dheere apnao aur tests rakho; types API data ki runtime validation ki jagah nahi lete."
      },
      explain: {
        en: `<ul>
<li>What it is: a typed superset of JavaScript that is checked at build time and then <b>erased</b>; the browser or Node runs plain JavaScript. A C# developer will feel at home with interfaces, generics and <code>strict</code> null checks.</li>
<li>Benefits: safer refactors, editor autocomplete, API contracts between front end and back end, fewer "undefined is not a function" bugs. Costs: build step or tool setup, learning curve, sometimes complex types, and a need to type third-party libraries.</li>
<li>Gradual adoption: turn on <code>allowJs</code>, convert files as you touch them, start with <code>strict</code> for new code, and use shared types or generated clients from the OpenAPI document of your Web API (Day 13).</li>
<li>Limits to say aloud: types disappear at runtime, so data from <code>fetch</code> still needs checks or a validation library; <code>any</code> and casts remove the safety.</li>
<li>Next: Day 24 shows React components, which are usually written as TSX.</li>
</ul>`,
        hi: `<ul>
<li>क्या है: JavaScript का typed superset जो build time पर check होता है और फिर <b>erase</b> हो जाता है; browser या Node plain JavaScript चलाते हैं। C# developer को interfaces, generics और <code>strict</code> null checks से अपनापन लगेगा।</li>
<li>Benefits: safer refactors, editor autocomplete, front end और back end के बीच API contracts, कम "undefined is not a function" bugs। Costs: build step या tool setup, learning curve, कभी-कभी complex types, और third-party libraries के types की ज़रूरत।</li>
<li>Gradual adoption: <code>allowJs</code> चालू करो, files को छूते वक़्त convert करो, नए code के लिए <code>strict</code> से शुरू करो, और अपने Web API के OpenAPI document से shared types या generated clients use करो (Day 13)।</li>
<li>जो limits ज़ोर से बोलनी हैं: types runtime पर ग़ायब हो जाते हैं, इसलिए <code>fetch</code> के data को फिर भी checks या validation library चाहिए; <code>any</code> और casts safety हटा देते हैं।</li>
<li>आगे: Day 24 में React components दिखेंगे, जो आम तौर पर TSX में लिखे जाते हैं।</li>
</ul>`,
        hg: `<ul>
<li>Kya hai: JavaScript ka typed superset jo build time par check hota hai aur phir <b>erase</b> ho jaata hai; browser ya Node plain JavaScript chalate hain. C# developer ko interfaces, generics aur <code>strict</code> null checks se apnapan lagega.</li>
<li>Benefits: safer refactors, editor autocomplete, front end aur back end ke beech API contracts, kam "undefined is not a function" bugs. Costs: build step ya tool setup, learning curve, kabhi-kabhi complex types, aur third-party libraries ke types ki zaroorat.</li>
<li>Gradual adoption: <code>allowJs</code> chaalu karo, files ko chhute waqt convert karo, naye code ke liye <code>strict</code> se shuru karo, aur apne Web API ke OpenAPI document se shared types ya generated clients use karo (Day 13).</li>
<li>Jo limits zor se bolni hain: types runtime par ghayab ho jaate hain, isliye <code>fetch</code> ke data ko phir bhi checks ya validation library chahiye; <code>any</code> aur casts safety hata dete hain.</li>
<li>Aage: Day 24 mein React components dikhenge, jo aam taur par TSX mein likhe jaate hain.</li>
</ul>`
      },
      code: [
        {
          lang: "typescript",
          caption: {
            en: "TypeScript catches a wrong argument before the code runs (display-only; the types are erased at runtime)",
            hi: "TypeScript code चलने से पहले ग़लत argument पकड़ लेता है (सिर्फ़ दिखाने के लिए; types runtime पर erase हो जाते हैं)",
            hg: "TypeScript code chalne se pehle galat argument pakad leta hai (sirf dikhane ke liye; types runtime par erase ho jaate hain)"
          },
          check: "none",
          src: `type OrderLine = { id: number; total: number };

function sumOrders(lines: OrderLine[]): number {
  return lines.reduce((sum, line) => sum + line.total, 0);
}

sumOrders([{ id: 1, total: 250 }]); // ok
sumOrders([{ id: 2, total: "90" }]); // compile error: string is not assignable to number

// Data from the network is still unchecked at runtime:
const lines = (await (await fetch("/api/orders")).json()) as OrderLine[]; // a cast, not a check`
        }
      ]
    },
    {
      id: "linting-tooling",
      depth: "detailed",
      q: "How do you keep JavaScript quality high across a team?",
      answer: "Automate it: ESLint for bug patterns, Prettier for formatting, tests, and TypeScript where it fits, all enforced in CI and pre-commit so reviews focus on design instead of style.",
      meaning: {
        hi: "Automate करो: bug patterns के लिए ESLint, formatting के लिए Prettier, tests, और जहाँ फिट हो वहाँ TypeScript, सब CI और pre-commit में enforce, ताकि reviews style की जगह design पर रहें।",
        hg: "Automate karo: bug patterns ke liye ESLint, formatting ke liye Prettier, tests, aur jahan fit ho wahan TypeScript, sab CI aur pre-commit mein enforce, taaki reviews style ki jagah design par rahein."
      },
      explain: {
        en: `<ul>
<li><b>ESLint</b> finds suspicious code (<code>no-var</code>, <code>prefer-const</code>, <code>eqeqeq</code>, unused variables, and the rules for floating promises when you add type-aware rules). Modern ESLint uses the "flat" config file <code>eslint.config.js</code>.</li>
<li><b>Prettier</b> (or a similar formatter) removes style debates; the linter then only reports real issues.</li>
<li>Lock versions with a lock file, run <code>npm audit</code> or a dependency scanner in CI, and keep the dependency count small; the npm ecosystem has many tiny packages, so every addition is a supply-chain decision.</li>
<li>Enforce in two places: a pre-commit hook for fast feedback, and CI as the real gate (hooks can be skipped).</li>
<li>C# bridge: it is the same role as Roslyn analyzers and <code>.editorconfig</code> with warnings as errors (Day 21 covers CI pipelines).</li>
</ul>`,
        hi: `<ul>
<li><b>ESLint</b> शक के लायक़ code पकड़ता है (<code>no-var</code>, <code>prefer-const</code>, <code>eqeqeq</code>, unused variables, और type-aware rules जोड़ने पर floating promises के rules)। Modern ESLint "flat" config file <code>eslint.config.js</code> use करता है।</li>
<li><b>Prettier</b> (या वैसा formatter) style की बहस हटा देता है; फिर linter सिर्फ़ असली issues बताता है।</li>
<li>Lock file से versions lock करो, CI में <code>npm audit</code> या dependency scanner चलाओ, और dependencies कम रखो; npm ecosystem में बहुत छोटे packages हैं, इसलिए हर addition एक supply-chain decision है।</li>
<li>दो जगह enforce करो: तेज़ feedback के लिए pre-commit hook, और असली gate के रूप में CI (hooks skip हो सकते हैं)।</li>
<li>C# bridge: यह वही role है जो Roslyn analyzers और warnings-as-errors वाली <code>.editorconfig</code> का है (CI pipelines Day 21 में हैं)।</li>
</ul>`,
        hg: `<ul>
<li><b>ESLint</b> shak ke laayak code pakadta hai (<code>no-var</code>, <code>prefer-const</code>, <code>eqeqeq</code>, unused variables, aur type-aware rules jodne par floating promises ke rules). Modern ESLint "flat" config file <code>eslint.config.js</code> use karta hai.</li>
<li><b>Prettier</b> (ya waisa formatter) style ki behas hata deta hai; phir linter sirf asli issues batata hai.</li>
<li>Lock file se versions lock karo, CI mein <code>npm audit</code> ya dependency scanner chalao, aur dependencies kam rakho; npm ecosystem mein bahut chhote packages hain, isliye har addition ek supply-chain decision hai.</li>
<li>Do jagah enforce karo: tez feedback ke liye pre-commit hook, aur asli gate ke roop mein CI (hooks skip ho sakte hain).</li>
<li>C# bridge: yeh wahi role hai jo Roslyn analyzers aur warnings-as-errors wali <code>.editorconfig</code> ka hai (CI pipelines Day 21 mein hain).</li>
</ul>`
      }
    }
  ],
  puzzles: [
    {
      id: "event-loop-order",
      lang: "javascript",
      src: `console.log("1 sync: script start");

setTimeout(() => console.log("7 macrotask: setTimeout 0"), 0);

Promise.resolve().then(() => console.log("4 microtask: promise.then"));

queueMicrotask(() => console.log("5 microtask: queueMicrotask"));

(async () => {
  console.log("2 sync: inside async, before await");
  await null;
  console.log("6 microtask: after await");
})();

console.log("3 sync: script end");`,
      answer: "1 sync: script start\n2 sync: inside async, before await\n3 sync: script end\n4 microtask: promise.then\n5 microtask: queueMicrotask\n6 microtask: after await\n7 macrotask: setTimeout 0",
      explain: {
        en: `<p>The order is <b>synchronous code first</b> (lines 1, 2, 3, even the part of the async function before its first <code>await</code>), then <b>all microtasks</b> in the order they were queued (the promise <code>then</code>, <code>queueMicrotask</code>, then the code after <code>await</code>), and only then the <b>macrotask</b> <code>setTimeout 0</code>.</p>
<p>Why "6" comes after "5": the <code>await null</code> continuation was queued after the other two. Why "7" is last: a timer callback is a macrotask, and the microtask queue is emptied completely before the next macrotask runs. In Node, <code>process.nextTick</code> would run even before the promise callbacks. Output order here is deterministic in Node; do not rely on exact timer-vs-timer ordering between different delays in real apps.</p>`,
        hi: `<p>Order यह है: <b>पहले synchronous code</b> (lines 1, 2, 3, यहाँ तक कि async function का वह हिस्सा जो पहले <code>await</code> से पहले है), फिर <b>सारे microtasks</b> उसी order में जिसमें queue हुए (promise का <code>then</code>, <code>queueMicrotask</code>, फिर <code>await</code> के बाद का code), और उसके बाद ही <b>macrotask</b> <code>setTimeout 0</code>।</p>
<p>"6" "5" के बाद क्यों: <code>await null</code> का continuation बाक़ी दोनों के बाद queue हुआ। "7" आख़िर में क्यों: timer callback macrotask है, और अगला macrotask चलने से पहले microtask queue पूरी ख़ाली होती है। Node में <code>process.nextTick</code> promise callbacks से भी पहले चलता। यहाँ Node में output order deterministic है; असली apps में अलग-अलग delays वाले timers के आपसी order पर भरोसा मत करो।</p>`,
        hg: `<p>Order yeh hai: <b>pehle synchronous code</b> (lines 1, 2, 3, yahan tak ki async function ka woh hissa jo pehle <code>await</code> se pehle hai), phir <b>saare microtasks</b> usi order mein jisme queue hue (promise ka <code>then</code>, <code>queueMicrotask</code>, phir <code>await</code> ke baad ka code), aur uske baad hi <b>macrotask</b> <code>setTimeout 0</code>.</p>
<p>"6" "5" ke baad kyon: <code>await null</code> ka continuation baaki dono ke baad queue hua. "7" aakhir mein kyon: timer callback macrotask hai, aur agla macrotask chalne se pehle microtask queue poori khaali hoti hai. Node mein <code>process.nextTick</code> promise callbacks se bhi pehle chalta. Yahan Node mein output order deterministic hai; asli apps mein alag-alag delays wale timers ke aapsi order par bharosa mat karo.</p>`
      }
    },
    {
      id: "closure-var-vs-let",
      lang: "javascript",
      src: `const withVar = [];
for (var i = 0; i < 3; i++) {
  withVar.push(() => i);
}

const withLet = [];
for (let j = 0; j < 3; j++) {
  withLet.push(() => j);
}

console.log("var:", withVar.map((f) => f()).join(","));
console.log("let:", withLet.map((f) => f()).join(","));

function makeCounter() {
  let count = 0;
  return () => ++count;
}
const a = makeCounter();
const b = makeCounter();
a();
a();
console.log("a:", a(), "b:", b());

const seen = [];
for (var k = 0; k < 3; k++) {
  setTimeout(() => seen.push(k), 0);
}
await new Promise((resolve) => setTimeout(resolve, 0));
console.log("timers saw:", seen.join(","));`,
      answer: "var: 3,3,3\nlet: 0,1,2\na: 3 b: 1\ntimers saw: 3,3,3",
      explain: {
        en: `<p><code>var i</code> is one variable for the whole loop; all three arrows share it and read it after the loop ended, so they see <code>3</code>. <code>let j</code> creates a fresh binding for each iteration, so the arrows see <code>0, 1, 2</code>. The timers show the classic trap: three callbacks, all print <code>3</code>.</p>
<p>The counters show the useful side of closures: <code>a</code> and <code>b</code> each have their own private <code>count</code>, so <code>a</code> reaches <code>3</code> while <code>b</code> is at <code>1</code>. Fix the timer bug by changing <code>var k</code> to <code>let k</code>.</p>`,
        hi: `<p><code>var i</code> पूरे loop के लिए एक ही variable है; तीनों arrows उसे share करते हैं और loop ख़त्म होने के बाद पढ़ते हैं, इसलिए उन्हें <code>3</code> दिखता है। <code>let j</code> हर iteration के लिए नया binding बनाता है, इसलिए arrows को <code>0, 1, 2</code> दिखता है। Timers classic trap दिखाते हैं: तीन callbacks, सब <code>3</code> print करते हैं।</p>
<p>Counters closures का काम का पहलू दिखाते हैं: <code>a</code> और <code>b</code> हर एक का अपना private <code>count</code> है, इसलिए <code>a</code> <code>3</code> तक पहुँचता है जबकि <code>b</code> <code>1</code> पर है। Timer bug को <code>var k</code> को <code>let k</code> करके fix करो।</p>`,
        hg: `<p><code>var i</code> poore loop ke liye ek hi variable hai; teeno arrows use share karte hain aur loop khatam hone ke baad padhte hain, isliye unhein <code>3</code> dikhta hai. <code>let j</code> har iteration ke liye naya binding banata hai, isliye arrows ko <code>0, 1, 2</code> dikhta hai. Timers classic trap dikhate hain: teen callbacks, sab <code>3</code> print karte hain.</p>
<p>Counters closures ka kaam ka pehlu dikhate hain: <code>a</code> aur <code>b</code> har ek ka apna private <code>count</code> hai, isliye <code>a</code> <code>3</code> tak pahunchta hai jabki <code>b</code> <code>1</code> par hai. Timer bug ko <code>var k</code> ko <code>let k</code> karke fix karo.</p>`
      }
    },
    {
      id: "this-binding-rules",
      lang: "javascript",
      src: `const user = {
  name: "Asha",
  regular() {
    return this === undefined ? "this is undefined" : this.name;
  },
  arrow: () => String(this),
  mapped() {
    return [1].map(() => this.name)[0];
  },
};

console.log(user.regular());

const extracted = user.regular;
console.log(extracted());

console.log(extracted.call({ name: "Ravi" }));

const bound = user.regular.bind({ name: "Meera" });
console.log(bound.call({ name: "Other" }));

console.log(user.arrow());
console.log(user.mapped());

class Greeter {
  name = "Kiran";
  hello() {
    return this.name;
  }
}
const hello = new Greeter().hello;
try {
  hello();
} catch (e) {
  console.log(e.name);
}`,
      answer: "Asha\nthis is undefined\nRavi\nMeera\nundefined\nAsha\nTypeError",
      explain: {
        en: `<p><code>user.regular()</code> is a method call, so <code>this</code> is <code>user</code>: <code>Asha</code>. Copying the method to <code>extracted</code> and calling it plainly loses the object; in a module (strict) <code>this</code> is <code>undefined</code>. <code>call</code> gives it to <code>{ name: "Ravi" }</code>. A function made by <code>bind</code> keeps <code>Meera</code> even when <code>call</code> tries <code>Other</code>.</p>
<p>The arrow property <code>arrow: () =&gt; String(this)</code> does not use <code>user</code> as <code>this</code>; it uses the module's top-level <code>this</code>, which is <code>undefined</code> in an ES module. The arrow inside <code>mapped()</code> works because it borrows <code>this</code> from <code>mapped</code>. Finally a class method pulled out of its instance and called plainly throws <code>TypeError</code>, since class bodies are strict and <code>this</code> is <code>undefined</code>.</p>`,
        hi: `<p><code>user.regular()</code> method call है, इसलिए <code>this</code> <code>user</code> है: <code>Asha</code>। Method को <code>extracted</code> में copy करके plain call करने पर object छूट जाता है; module (strict) में <code>this</code> <code>undefined</code> है। <code>call</code> उसे <code>{ name: "Ravi" }</code> दे देता है। <code>bind</code> से बना function <code>Meera</code> ही रखता है, भले <code>call</code> <code>Other</code> देने की कोशिश करे।</p>
<p>Arrow property <code>arrow: () =&gt; String(this)</code> <code>user</code> को <code>this</code> नहीं बनाती; वह module का top-level <code>this</code> लेती है, जो ES module में <code>undefined</code> है। <code>mapped()</code> के अंदर का arrow इसलिए चलता है कि वह <code>mapped</code> से <code>this</code> उधार लेता है। आख़िर में class method को instance से निकालकर plain call करने पर <code>TypeError</code> आता है, क्योंकि class bodies strict हैं और <code>this</code> <code>undefined</code> है।</p>`,
        hg: `<p><code>user.regular()</code> method call hai, isliye <code>this</code> <code>user</code> hai: <code>Asha</code>. Method ko <code>extracted</code> mein copy karke plain call karne par object chhoot jaata hai; module (strict) mein <code>this</code> <code>undefined</code> hai. <code>call</code> use <code>{ name: "Ravi" }</code> de deta hai. <code>bind</code> se bana function <code>Meera</code> hi rakhta hai, bhale <code>call</code> <code>Other</code> dene ki koshish kare.</p>
<p>Arrow property <code>arrow: () =&gt; String(this)</code> <code>user</code> ko <code>this</code> nahi banati; woh module ka top-level <code>this</code> leti hai, jo ES module mein <code>undefined</code> hai. <code>mapped()</code> ke andar ka arrow isliye chalta hai ki woh <code>mapped</code> se <code>this</code> udhaar leta hai. Aakhir mein class method ko instance se nikalkar plain call karne par <code>TypeError</code> aata hai, kyonki class bodies strict hain aur <code>this</code> <code>undefined</code> hai.</p>`
      }
    },
    {
      id: "hoisting-and-tdz-errors",
      lang: "javascript",
      src: `console.log(typeof hoistedFn, hoistedFn());
function hoistedFn() {
  return "works before its line";
}

console.log(v);
var v = 5;

try {
  console.log(l);
} catch (e) {
  console.log("let:", e.name);
}
let l = 1;

try {
  fnExpr();
} catch (e) {
  console.log("var function expression:", e.name);
}
var fnExpr = function () {};

try {
  new Late();
} catch (e) {
  console.log("class:", e.name);
}
class Late {}

const fixed = 1;
try {
  fixed = 2;
} catch (e) {
  console.log("const:", e.name);
}
console.log(typeof notDeclaredAnywhere);`,
      answer: "function works before its line\nundefined\nlet: ReferenceError\nvar function expression: TypeError\nclass: ReferenceError\nconst: TypeError\nundefined",
      explain: {
        en: `<p>The function declaration is hoisted with its body, so it works before its line. <code>var v</code> is hoisted as <code>undefined</code>, so the early read prints <code>undefined</code>. The <code>let l</code> read hits the temporal dead zone: <code>ReferenceError</code>. The <code>var fnExpr</code> is <code>undefined</code> when called early, so calling it is a <code>TypeError</code> (not a function). A <code>class</code> is in the TDZ too: <code>ReferenceError</code>. Re-assigning a <code>const</code> is a <code>TypeError</code>. Finally <code>typeof</code> on a name that was never declared returns <code>"undefined"</code> without throwing.</p>
<p>Memory trick: <b>ReferenceError = the name is not usable yet or does not exist; TypeError = the value is the wrong kind for what you did</b>.</p>`,
        hi: `<p>Function declaration body के साथ hoist होता है, इसलिए अपनी line से पहले चलता है। <code>var v</code> <code>undefined</code> के साथ hoist होता है, इसलिए जल्दी पढ़ने पर <code>undefined</code> print होता है। <code>let l</code> पढ़ना temporal dead zone से टकराता है: <code>ReferenceError</code>। <code>var fnExpr</code> जल्दी call करने पर <code>undefined</code> है, इसलिए call करना <code>TypeError</code> (not a function) है। <code>class</code> भी TDZ में है: <code>ReferenceError</code>। <code>const</code> को दोबारा assign करना <code>TypeError</code> है। आख़िर में जिस नाम को कभी declare नहीं किया उस पर <code>typeof</code> बिना throw किए <code>"undefined"</code> देता है।</p>
<p>याद रखने की trick: <b>ReferenceError = नाम अभी use के लायक़ नहीं या है ही नहीं; TypeError = value उस काम के लिए ग़लत क़िस्म की है जो तुमने किया</b>।</p>`,
        hg: `<p>Function declaration body ke saath hoist hota hai, isliye apni line se pehle chalta hai. <code>var v</code> <code>undefined</code> ke saath hoist hota hai, isliye jaldi padhne par <code>undefined</code> print hota hai. <code>let l</code> padhna temporal dead zone se takraata hai: <code>ReferenceError</code>. <code>var fnExpr</code> jaldi call karne par <code>undefined</code> hai, isliye call karna <code>TypeError</code> (not a function) hai. <code>class</code> bhi TDZ mein hai: <code>ReferenceError</code>. <code>const</code> ko dobara assign karna <code>TypeError</code> hai. Aakhir mein jis naam ko kabhi declare nahi kiya us par <code>typeof</code> bina throw kiye <code>"undefined"</code> deta hai.</p>
<p>Yaad rakhne ki trick: <b>ReferenceError = naam abhi use ke laayak nahi ya hai hi nahi; TypeError = value us kaam ke liye galat kism ki hai jo tumne kiya</b>.</p>`
      }
    },
    {
      id: "equality-coercion-table",
      lang: "javascript",
      src: `const rows = [
  ['0 vs "0"', 0 == "0", 0 === "0"],
  ['0 vs ""', 0 == "", 0 === ""],
  ['"0" vs ""', "0" == "", "0" === ""],
  ["null vs undefined", null == undefined, null === undefined],
  ["null vs 0", null == 0, null === 0],
  ["NaN vs NaN", NaN == NaN, NaN === NaN],
  ["[] vs false", [] == false, [] === false],
  ["[1] vs 1", [1] == 1, [1] === 1],
];
for (const [label, loose, strict] of rows) {
  console.log(label + ": == " + loose + ", === " + strict);
}
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));
console.log('"5" + 2 =', "5" + 2, '| "5" - 2 =', "5" - 2);
console.log("typeof null:", typeof null);`,
      answer: "0 vs \"0\": == true, === false\n0 vs \"\": == true, === false\n\"0\" vs \"\": == false, === false\nnull vs undefined: == true, === false\nnull vs 0: == false, === false\nNaN vs NaN: == false, === false\n[] vs false: == true, === false\n[1] vs 1: == true, === false\nObject.is(NaN, NaN): true\n\"5\" + 2 = 52 | \"5\" - 2 = 3\ntypeof null: object",
      explain: {
        en: `<p>The <code>===</code> column is <code>false</code> for every row because the types or values differ (and <code>NaN</code> is never strictly equal to itself). The <code>==</code> column shows the conversions: <code>0 == "0"</code> and <code>0 == ""</code> are true (strings become numbers), yet <code>"0" == ""</code> is false (two strings compare as text), so loose equality is not transitive. <code>null == undefined</code> is true by a special rule, but <code>null == 0</code> is false. <code>[] == false</code> and <code>[1] == 1</code> are true because the array becomes a string and then a number.</p>
<p>Also see <code>"5" + 2</code> giving the string <code>"52"</code> while <code>"5" - 2</code> gives the number <code>3</code>, <code>Object.is(NaN, NaN)</code> being true, and the historical <code>typeof null</code> result <code>"object"</code>. Default to <code>===</code>.</p>`,
        hi: `<p><code>===</code> वाला column हर row में <code>false</code> है क्योंकि types या values अलग हैं (और <code>NaN</code> कभी strictly अपने बराबर नहीं होता)। <code>==</code> वाला column conversions दिखाता है: <code>0 == "0"</code> और <code>0 == ""</code> true हैं (strings numbers बन जाती हैं), फिर भी <code>"0" == ""</code> false है (दो strings text की तरह compare होती हैं), यानी loose equality transitive नहीं है। <code>null == undefined</code> एक special rule से true है, पर <code>null == 0</code> false है। <code>[] == false</code> और <code>[1] == 1</code> true हैं क्योंकि array पहले string और फिर number बनता है।</p>
<p>यह भी देखो: <code>"5" + 2</code> string <code>"52"</code> देता है जबकि <code>"5" - 2</code> number <code>3</code>, <code>Object.is(NaN, NaN)</code> true है, और historical <code>typeof null</code> का नतीजा <code>"object"</code> है। Default में <code>===</code> रखो।</p>`,
        hg: `<p><code>===</code> wala column har row mein <code>false</code> hai kyonki types ya values alag hain (aur <code>NaN</code> kabhi strictly apne barabar nahi hota). <code>==</code> wala column conversions dikhata hai: <code>0 == "0"</code> aur <code>0 == ""</code> true hain (strings numbers ban jaati hain), phir bhi <code>"0" == ""</code> false hai (do strings text ki tarah compare hoti hain), yaani loose equality transitive nahi hai. <code>null == undefined</code> ek special rule se true hai, par <code>null == 0</code> false hai. <code>[] == false</code> aur <code>[1] == 1</code> true hain kyonki array pehle string aur phir number banta hai.</p>
<p>Yeh bhi dekho: <code>"5" + 2</code> string <code>"52"</code> deta hai jabki <code>"5" - 2</code> number <code>3</code>, <code>Object.is(NaN, NaN)</code> true hai, aur historical <code>typeof null</code> ka nateeja <code>"object"</code> hai. Default mein <code>===</code> rakho.</p>`
      }
    },
    {
      id: "nullish-vs-or",
      lang: "javascript",
      src: `const settings = { retries: 0, name: "", debug: false, timeout: null, nested: { size: 10 } };

console.log("retries ||:", settings.retries || 3);
console.log("retries ??:", settings.retries ?? 3);
console.log("name ||:", JSON.stringify(settings.name || "anonymous"));
console.log("name ??:", JSON.stringify(settings.name ?? "anonymous"));
console.log("debug ??:", settings.debug ?? true);
console.log("timeout ??:", settings.timeout ?? 30);
console.log("missing ??:", settings.missing ?? "default");

console.log("deep ?.:", settings.other?.size);
console.log("deep ?. ??:", settings.other?.size ?? "no size");
console.log("nested ?.:", settings.nested?.size);
console.log("method ?.():", settings.format?.());

const copy = { ...settings };
copy.retries ||= 5;
copy.debug ??= true;
console.log("after ||= and ??=:", copy.retries, copy.debug);`,
      answer: "retries ||: 3\nretries ??: 0\nname ||: \"anonymous\"\nname ??: \"\"\ndebug ??: false\ntimeout ??: 30\nmissing ??: default\ndeep ?.: undefined\ndeep ?. ??: no size\nnested ?.: 10\nmethod ?.(): undefined\nafter ||= and ??=: 5 false",
      explain: {
        en: `<p><code>||</code> replaces every falsy value: the real <code>0</code> retries become <code>3</code> and the empty name becomes <code>"anonymous"</code>. <code>??</code> replaces only <code>null</code>/<code>undefined</code>: <code>0</code> and <code>""</code> and <code>false</code> are kept, while <code>null</code> and the missing property get the default.</p>
<p><code>settings.other?.size</code> stops at the missing <code>other</code> and gives <code>undefined</code> instead of throwing; add <code>??</code> to turn that into a message. <code>format?.()</code> calls the function only if it exists. For the assignments, <code>copy.retries ||= 5</code> replaced <code>0</code> (probably a bug), while <code>copy.debug ??= true</code> kept the deliberate <code>false</code>. Spread made a shallow copy first, so <code>settings</code> was not changed.</p>`,
        hi: `<p><code>||</code> हर falsy value को बदल देता है: असली <code>0</code> retries <code>3</code> बन जाते हैं और empty name <code>"anonymous"</code> बन जाता है। <code>??</code> सिर्फ़ <code>null</code>/<code>undefined</code> बदलता है: <code>0</code>, <code>""</code> और <code>false</code> रह जाते हैं, जबकि <code>null</code> और missing property को default मिलता है।</p>
<p><code>settings.other?.size</code> missing <code>other</code> पर रुक जाता है और throw करने की जगह <code>undefined</code> देता है; उसे message बनाने के लिए <code>??</code> जोड़ो। <code>format?.()</code> function को तभी call करता है जब वह मौजूद हो। Assignments में <code>copy.retries ||= 5</code> ने <code>0</code> बदल दिया (शायद bug), जबकि <code>copy.debug ??= true</code> ने जान-बूझकर रखा <code>false</code> रहने दिया। Spread ने पहले shallow copy बनाई, इसलिए <code>settings</code> नहीं बदला।</p>`,
        hg: `<p><code>||</code> har falsy value ko badal deta hai: asli <code>0</code> retries <code>3</code> ban jaate hain aur empty name <code>"anonymous"</code> ban jaata hai. <code>??</code> sirf <code>null</code>/<code>undefined</code> badalta hai: <code>0</code>, <code>""</code> aur <code>false</code> reh jaate hain, jabki <code>null</code> aur missing property ko default milta hai.</p>
<p><code>settings.other?.size</code> missing <code>other</code> par ruk jaata hai aur throw karne ki jagah <code>undefined</code> deta hai; use message banane ke liye <code>??</code> jodo. <code>format?.()</code> function ko tabhi call karta hai jab woh maujood ho. Assignments mein <code>copy.retries ||= 5</code> ne <code>0</code> badal diya (shayad bug), jabki <code>copy.debug ??= true</code> ne jaan-boojhkar rakha <code>false</code> rehne diya. Spread ne pehle shallow copy banayi, isliye <code>settings</code> nahi badla.</p>`
      }
    },
    {
      id: "promise-all-vs-allsettled",
      lang: "javascript",
      src: `const ok = (value) => Promise.resolve(value);
const fail = (message) => Promise.reject(new Error(message));

try {
  await Promise.all([ok("orders"), fail("payments down"), ok("stock")]);
} catch (error) {
  console.log("all rejected:", error.message);
}

const results = await Promise.allSettled([ok("orders"), fail("payments down"), ok("stock")]);
console.log(
  results
    .map((r) => (r.status === "fulfilled" ? "ok:" + r.value : "fail:" + r.reason.message))
    .join(" | "),
);

console.log("race:", await Promise.race([ok("first"), fail("second")]));
console.log("any:", await Promise.any([fail("a"), ok("b"), fail("c")]));

try {
  await Promise.any([fail("a"), fail("c")]);
} catch (error) {
  console.log(error.name, error.errors.length);
}`,
      answer: "all rejected: payments down\nok:orders | fail:payments down | ok:stock\nrace: first\nany: b\nAggregateError 2",
      explain: {
        en: `<p><code>Promise.all</code> rejects with the first failure, <code>payments down</code>, and you lose the other two results. <code>Promise.allSettled</code> never rejects; it returns one object per promise with a <code>status</code>, so you can show orders and stock and report the payment error. <code>Promise.race</code> follows the first promise to settle; because <code>ok("first")</code> is already fulfilled and listed first, the answer is <code>first</code> (a rejection winning would have thrown). <code>Promise.any</code> ignores rejections and returns the first fulfilled value, <code>b</code>. If every promise rejects, <code>any</code> rejects with an <code>AggregateError</code> that holds all reasons in <code>.errors</code> (here 2).</p>
<p>Note: nothing is cancelled. The other promises still run; you just stop waiting for them.</p>`,
        hi: `<p><code>Promise.all</code> पहली failure <code>payments down</code> के साथ reject हो जाता है और बाक़ी दो results खो जाते हैं। <code>Promise.allSettled</code> कभी reject नहीं होता; वह हर promise के लिए <code>status</code> वाला एक object लौटाता है, इसलिए तुम orders और stock दिखा सकते हो और payment error report कर सकते हो। <code>Promise.race</code> जो promise पहले settle हो उसका पीछा करता है; <code>ok("first")</code> पहले से fulfilled है और list में पहला है, इसलिए जवाब <code>first</code> है (rejection जीतता तो throw होता)। <code>Promise.any</code> rejections को ignore करके पहली fulfilled value <code>b</code> देता है। अगर हर promise reject हो तो <code>any</code> एक <code>AggregateError</code> के साथ reject होता है जिसकी <code>.errors</code> में सारे reasons होते हैं (यहाँ 2)।</p>
<p>ध्यान दो: कुछ cancel नहीं होता। बाक़ी promises चलते रहते हैं; तुम बस उनका इंतज़ार छोड़ देते हो।</p>`,
        hg: `<p><code>Promise.all</code> pehli failure <code>payments down</code> ke saath reject ho jaata hai aur baaki do results kho jaate hain. <code>Promise.allSettled</code> kabhi reject nahi hota; woh har promise ke liye <code>status</code> wala ek object lautata hai, isliye tum orders aur stock dikha sakte ho aur payment error report kar sakte ho. <code>Promise.race</code> jo promise pehle settle ho uska peecha karta hai; <code>ok("first")</code> pehle se fulfilled hai aur list mein pehla hai, isliye jawab <code>first</code> hai (rejection jeetta to throw hota). <code>Promise.any</code> rejections ko ignore karke pehli fulfilled value <code>b</code> deta hai. Agar har promise reject ho to <code>any</code> ek <code>AggregateError</code> ke saath reject hota hai jiski <code>.errors</code> mein saare reasons hote hain (yahan 2).</p>
<p>Dhyan do: kuch cancel nahi hota. Baaki promises chalte rehte hain; tum bas unka intezaar chhod dete ho.</p>`
      }
    }
  ],
  revision: {
    en: [
      "Prefer const, then let; avoid var, which is function-scoped and hoisted as undefined.",
      "let/const stay in the temporal dead zone until declared; reading early throws a ReferenceError.",
      "A closure keeps the variable, not a copy; a var loop shares one variable, let gives one per iteration.",
      "this depends on how the function is called; arrow functions use the surrounding this.",
      "class is syntax over prototypes; #private fields are enforced by the language.",
      "Use ===; == converts types first and surprises (for example [] == false is true).",
      "?? falls back only for null/undefined; || also replaces 0, \"\" and false.",
      "Event loop order: synchronous code, then all microtasks (promise callbacks), then one macrotask such as setTimeout.",
      "async/await is syntax over promises: one loop thread, no thread pool, and CPU-heavy work still blocks.",
      "Promise.all fails fast, allSettled reports every result, race returns the first to settle, any the first fulfilled.",
      "fetch rejects only on network failure; a 404 or 500 resolves, so check res.ok.",
      "Leave jQuery page by page: querySelector, addEventListener, classList and fetch cover most uses."
    ],
    meaning: {
      hi: [
        "पहले const, फिर let; var से बचो, जो function-scoped है और undefined के साथ hoist होता है।",
        "let/const declare होने तक temporal dead zone में रहते हैं; जल्दी पढ़ने पर ReferenceError आता है।",
        "Closure variable को रखता है, copy को नहीं; var loop एक variable share करता है, let हर iteration को अपना देता है।",
        "this इस पर depend करता है कि function call कैसे हुआ; arrow functions आसपास का this लेते हैं।",
        "class prototypes पर syntax है; #private fields को language enforce करती है।",
        "=== use करो; == पहले types convert करता है और चौंकाता है (जैसे [] == false true है)।",
        "?? सिर्फ़ null/undefined पर fallback देता है; || 0, \"\" और false को भी बदल देता है।",
        "Event loop का order: synchronous code, फिर सारे microtasks (promise callbacks), फिर एक macrotask जैसे setTimeout।",
        "async/await promises पर syntax है: एक loop thread, कोई thread pool नहीं, और CPU-heavy काम फिर भी block करता है।",
        "Promise.all fail-fast है, allSettled हर नतीजा बताता है, race पहला settled देता है, any पहला fulfilled।",
        "fetch सिर्फ़ network failure पर reject होता है; 404 या 500 पर resolve होता है, इसलिए res.ok check करो।",
        "jQuery को page-by-page छोड़ो: querySelector, addEventListener, classList और fetch ज़्यादातर uses cover करते हैं।"
      ],
      hg: [
        "Pehle const, phir let; var se bacho, jo function-scoped hai aur undefined ke saath hoist hota hai.",
        "let/const declare hone tak temporal dead zone mein rehte hain; jaldi padhne par ReferenceError aata hai.",
        "Closure variable ko rakhta hai, copy ko nahi; var loop ek variable share karta hai, let har iteration ko apna deta hai.",
        "this is par depend karta hai ki function call kaise hua; arrow functions aaspaas ka this lete hain.",
        "class prototypes par syntax hai; #private fields ko language enforce karti hai.",
        "=== use karo; == pehle types convert karta hai aur chaunkata hai (jaise [] == false true hai).",
        "?? sirf null/undefined par fallback deta hai; || 0, \"\" aur false ko bhi badal deta hai.",
        "Event loop ka order: synchronous code, phir saare microtasks (promise callbacks), phir ek macrotask jaise setTimeout.",
        "async/await promises par syntax hai: ek loop thread, koi thread pool nahi, aur CPU-heavy kaam phir bhi block karta hai.",
        "Promise.all fail-fast hai, allSettled har nateeja batata hai, race pehla settled deta hai, any pehla fulfilled.",
        "fetch sirf network failure par reject hota hai; 404 ya 500 par resolve hota hai, isliye res.ok check karo.",
        "jQuery ko page-by-page chhodo: querySelector, addEventListener, classList aur fetch zyaadatar uses cover karte hain."
      ]
    }
  }
};
