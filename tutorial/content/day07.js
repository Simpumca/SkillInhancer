// Day 7 — Week 1 revision + mixed quiz. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 7,
  title: {
    en: "Week 1 Revision — cheat sheets + mixed quiz",
    hi: "हफ़्ता 1 Revision — cheat sheets और mixed quiz",
    hg: "Week 1 Revision — cheat sheets aur mixed quiz"
  },
  summary: {
    en: `<p>You finished <b>six heavy days</b> — OOP, C# Core, C# Advanced, LINQ and two days of EF Core. Well done! Today there is <b>nothing new to learn</b>. Today you turn what you have read into what you can <b>say</b> in an interview.</p>
<p><b>How to revise today (about 1 hour 15 minutes):</b></p>
<ul>
<li><b>Cheat sheets (20 min, Short mode)</b> — one per day. Read a line, cover it, and say it aloud in English. If a line feels shaky, open that day's section again.</li>
<li><b>Mixed Q&amp;A (25 min)</b> — these questions mix topics, the way real interviews do. Say your answer aloud <b>before</b> you open it. Start with the 8 short ones.</li>
<li><b>Puzzles (20 min, Detailed mode)</b> — write the output on paper first, then check. A wrong guess is useful: it shows you exactly what to re-read.</li>
<li><b>Top 10 lines (10 min)</b> — read them once more on interview morning.</li>
</ul>
<p>Tip: keep a small <b>"weak list"</b> — the 3 to 5 topics where you stumbled — and re-read only those days' revision bullets. Revision is about <b>confidence</b>, not about covering everything again.</p>`,
    hi: `<p>आपने <b>छह भारी दिन</b> पूरे कर लिए — OOP, C# Core, C# Advanced, LINQ और EF Core के दो दिन। बहुत बढ़िया! आज <b>कुछ नया नहीं सीखना</b> है। आज पढ़ी हुई चीज़ों को interview में <b>बोलने लायक</b> बनाना है।</p>
<p><b>आज revision कैसे करें (लगभग 1 घंटा 15 मिनट):</b></p>
<ul>
<li><b>Cheat sheets (20 min, Short mode)</b> — हर दिन की एक। एक line पढ़ो, उसे ढको, और English में ज़ोर से बोलो। कोई line कच्ची लगे, तो उस दिन का section फिर से खोलो।</li>
<li><b>Mixed Q&amp;A (25 min)</b> — ये सवाल topics को मिलाते हैं, जैसे असली interviews में होता है। Answer खोलने से <b>पहले</b> अपना जवाब ज़ोर से बोलो। 8 short सवालों से शुरू करो।</li>
<li><b>Puzzles (20 min, Detailed mode)</b> — पहले output काग़ज़ पर लिखो, फिर check करो। ग़लत अंदाज़ा भी काम का है: वो ठीक-ठीक बताता है कि क्या दोबारा पढ़ना है।</li>
<li><b>Top 10 lines (10 min)</b> — interview वाली सुबह इन्हें एक बार फिर पढ़ो।</li>
</ul>
<p>Tip: एक छोटी <b>"weak list"</b> रखो — वो 3 से 5 topics जहाँ आप अटके — और सिर्फ़ उन दिनों के revision bullets दोबारा पढ़ो। Revision का मक़सद <b>confidence</b> है, सब कुछ फिर से पढ़ना नहीं।</p>`,
    hg: `<p>Aapne <b>chhah bhaari din</b> poore kar liye — OOP, C# Core, C# Advanced, LINQ aur EF Core ke do din. Bahut badhiya! Aaj <b>kuch naya nahi seekhna</b> hai. Aaj padhi hui cheezon ko interview mein <b>bolne laayak</b> banana hai.</p>
<p><b>Aaj revision kaise karein (lagbhag 1 ghanta 15 minute):</b></p>
<ul>
<li><b>Cheat sheets (20 min, Short mode)</b> — har din ki ek. Ek line padho, use dhako, aur English mein zor se bolo. Koi line kachchi lage, to us din ka section phir se kholo.</li>
<li><b>Mixed Q&amp;A (25 min)</b> — ye sawaal topics ko milaate hain, jaise asli interviews mein hota hai. Answer kholne se <b>pehle</b> apna jawaab zor se bolo. 8 short sawaalon se shuru karo.</li>
<li><b>Puzzles (20 min, Detailed mode)</b> — pehle output kaagaz par likho, phir check karo. Galat andaaza bhi kaam ka hai: woh theek-theek batata hai ki kya dobara padhna hai.</li>
<li><b>Top 10 lines (10 min)</b> — interview wali subah inhe ek baar phir padho.</li>
</ul>
<p>Tip: ek chhoti <b>"weak list"</b> rakho — woh 3 se 5 topics jahan aap atke — aur sirf un dinon ke revision bullets dobara padho. Revision ka maqsad <b>confidence</b> hai, sab kuch phir se padhna nahi.</p>`
  },
  sections: [
    {
      id: "cheat-day1-oop",
      depth: "short",
      title: {
        en: "Day 1 cheat sheet — OOP",
        hi: "Day 1 की cheat sheet — OOP",
        hg: "Day 1 ki cheat sheet — OOP"
      },
      body: {
        en: `<p><b>Picture — the ATM:</b> the PIN check guards the cash (<b>encapsulation</b>), the note counter is hidden (<b>abstraction</b>), a cash-deposit ATM is still an ATM (<b>inheritance</b>), and the same "Withdraw" button works differently in every bank (<b>polymorphism</b>).</p>
<p><b>Must say:</b></p>
<ul>
<li><b>Abstract class</b> = shared code + state + constructors; a class inherits only one. <b>Interface</b> = a contract with no instance fields; a class implements many.</li>
<li><b>Default interface methods</b> (C# 8) — mainly for versioning a published interface; the body is reachable only through the interface type.</li>
<li><b>Overloading</b> = same name, different parameters, picked at compile time. <b>Overriding</b> = <code>virtual</code>/<code>override</code>, picked at run time from the actual object.</li>
<li><b>override follows the object, new follows the reference.</b></li>
<li><b>Composition over inheritance</b>: inherit only for a true, stable "is-a"; for code reuse, compose (DI is composition).</li>
<li><b>Creation order</b>: derived field initializers → base field initializers → base constructor body → derived constructor body. A <b>static constructor</b> runs once, before the type is first used.</li>
<li><b>Defaults</b>: top-level type <code>internal</code>, class member <code>private</code>, interface member <code>public</code>.</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li>Forgot <code>override</code> on a virtual method → warning <b>CS0114</b>; the method <b>hides</b> instead, and a base reference still calls the base version.</li>
<li>A virtual call inside a base constructor runs the derived override <b>before</b> the derived constructor body — it can see <code>0</code> or <code>null</code>.</li>
<li>"C# has multiple inheritance through interfaces" — say it precisely: <b>one base class, many interfaces</b>.</li>
</ul>`,
        hi: `<p><b>तस्वीर — ATM:</b> PIN check पैसे की रखवाली करता है (<b>encapsulation</b>), नोट गिनने वाली मशीन छुपी है (<b>abstraction</b>), cash-deposit ATM भी एक ATM ही है (<b>inheritance</b>), और वही "Withdraw" button हर bank में अलग तरह से काम करता है (<b>polymorphism</b>)।</p>
<p><b>ज़रूर बोलो:</b></p>
<ul>
<li><b>Abstract class</b> = shared code + state + constructors; एक class सिर्फ़ एक को inherit कर सकती है। <b>Interface</b> = contract, कोई instance fields नहीं; एक class कई implement कर सकती है।</li>
<li><b>Default interface methods</b> (C# 8) — मुख्य रूप से published interface की versioning के लिए; body सिर्फ़ interface type के through मिलती है।</li>
<li><b>Overloading</b> = same नाम, अलग parameters, compile time पर चुना जाता है। <b>Overriding</b> = <code>virtual</code>/<code>override</code>, run time पर असली object से चुना जाता है।</li>
<li><b>override object के पीछे चलता है, new reference के पीछे।</b></li>
<li><b>Composition over inheritance</b>: inherit सिर्फ़ सच्चे, स्थिर "is-a" के लिए करो; code reuse के लिए compose करो (DI भी composition ही है)।</li>
<li><b>बनने का क्रम</b>: derived field initializers → base field initializers → base constructor body → derived constructor body। <b>Static constructor</b> एक ही बार चलता है, type के पहले use से पहले।</li>
<li><b>Defaults</b>: top-level type <code>internal</code>, class member <code>private</code>, interface member <code>public</code>।</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li>Virtual method पर <code>override</code> लिखना भूल गए → warning <b>CS0114</b>; method override की जगह <b>hide</b> करता है, और base reference अब भी base version ही call करता है।</li>
<li>Base constructor के अंदर virtual call, derived constructor body से <b>पहले</b> derived override चला देता है — उसे <code>0</code> या <code>null</code> दिख सकता है।</li>
<li>"C# में interfaces से multiple inheritance है" — सही शब्दों में बोलो: <b>एक base class, कई interfaces</b>।</li>
</ul>`,
        hg: `<p><b>Tasveer — ATM:</b> PIN check paise ki rakhwaali karta hai (<b>encapsulation</b>), note ginne wali machine chhupi hai (<b>abstraction</b>), cash-deposit ATM bhi ek ATM hi hai (<b>inheritance</b>), aur wahi "Withdraw" button har bank mein alag tarah se kaam karta hai (<b>polymorphism</b>).</p>
<p><b>Zaroor bolo:</b></p>
<ul>
<li><b>Abstract class</b> = shared code + state + constructors; ek class sirf ek ko inherit kar sakti hai. <b>Interface</b> = contract, koi instance fields nahi; ek class kai implement kar sakti hai.</li>
<li><b>Default interface methods</b> (C# 8) — mukhya roop se published interface ki versioning ke liye; body sirf interface type ke through milti hai.</li>
<li><b>Overloading</b> = same naam, alag parameters, compile time par chuna jaata hai. <b>Overriding</b> = <code>virtual</code>/<code>override</code>, run time par asli object se chuna jaata hai.</li>
<li><b>override object ke peeche chalta hai, new reference ke peeche.</b></li>
<li><b>Composition over inheritance</b>: inherit sirf sachche, sthir "is-a" ke liye karo; code reuse ke liye compose karo (DI bhi composition hi hai).</li>
<li><b>Banne ka kram</b>: derived field initializers → base field initializers → base constructor body → derived constructor body. <b>Static constructor</b> ek hi baar chalta hai, type ke pehle use se pehle.</li>
<li><b>Defaults</b>: top-level type <code>internal</code>, class member <code>private</code>, interface member <code>public</code>.</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li>Virtual method par <code>override</code> likhna bhool gaye → warning <b>CS0114</b>; method override ki jagah <b>hide</b> karta hai, aur base reference ab bhi base version hi call karta hai.</li>
<li>Base constructor ke andar virtual call, derived constructor body se <b>pehle</b> derived override chala deta hai — use <code>0</code> ya <code>null</code> dikh sakta hai.</li>
<li>"C# mein interfaces se multiple inheritance hai" — sahi shabdon mein bolo: <b>ek base class, kai interfaces</b>.</li>
</ul>`
      }
    },
    {
      id: "cheat-day2-csharp-core",
      depth: "short",
      title: {
        en: "Day 2 cheat sheet — C# Core",
        hi: "Day 2 की cheat sheet — C# Core",
        hg: "Day 2 ki cheat sheet — C# Core"
      },
      body: {
        en: `<p><b>Picture — marksheet photocopy vs house address:</b> a photocopy is a copy of the data (<b>value type</b>); an address lets two people reach the <b>same house</b> (<b>reference type</b>).</p>
<p><b>Must say:</b></p>
<ul>
<li><b>Value type</b> copies the data; <b>reference type</b> copies the reference — two variables, one object.</li>
<li>A value type lives <b>where its container lives</b>: a local usually on the stack, a field inside its heap object, boxed or captured values on the heap. "Value types always live on the stack" is a myth.</li>
<li><b>Boxing</b> = value type → <code>object</code>/interface (a heap copy); <b>unboxing</b> = cast back to the exact type. Generics avoid it.</li>
<li><code>string</code> is immutable and <code>==</code> compares the text. <code>StringBuilder</code> for loops; <code>+</code> or <code>$"..."</code> for a few pieces.</li>
<li>Collections by job: <code>List&lt;T&gt;</code> by index, <code>Dictionary</code> by key (O(1) on average), <code>HashSet</code> for unique items. A read-only view is not immutable.</li>
<li><b>Delegate</b> = a type-safe method reference (<code>Func</code>, <code>Action</code>, <code>Predicate</code>). <b>Event</b> = a delegate that outsiders can only <code>+=</code>/<code>-=</code>.</li>
<li><b>Extension methods</b> are static calls bound at compile time; a matching instance method wins.</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li><code>name.ToUpper();</code> on its own changes nothing — every string "change" returns a new string.</li>
<li>Unboxing needs the <b>exact</b> type: <code>object o = 5; long l = (long)o;</code> throws <code>InvalidCastException</code>.</li>
<li>Lambdas created in a <code>for</code> loop share <b>one</b> loop variable and all see its last value; <code>foreach</code> gives a fresh variable on each pass (C# 5+).</li>
</ul>`,
        hi: `<p><b>तस्वीर — marksheet की photocopy बनाम घर का पता:</b> photocopy data की copy है (<b>value type</b>); पता देने से दो लोग <b>एक ही घर</b> तक पहुँचते हैं (<b>reference type</b>)।</p>
<p><b>ज़रूर बोलो:</b></p>
<ul>
<li><b>Value type</b> data copy करता है; <b>reference type</b> reference copy करता है — दो variables, एक object।</li>
<li>Value type <b>वहीं रहता है जहाँ उसका container रहता है</b>: local आमतौर पर stack पर, field अपने heap object के अंदर, boxed या captured values heap पर। "Value types हमेशा stack पर रहते हैं" एक myth है।</li>
<li><b>Boxing</b> = value type → <code>object</code>/interface (heap पर एक copy); <b>unboxing</b> = exact type में वापस cast। Generics इससे बचाते हैं।</li>
<li><code>string</code> immutable है और <code>==</code> text compare करता है। Loops के लिए <code>StringBuilder</code>; कुछ टुकड़ों के लिए <code>+</code> या <code>$"..."</code>।</li>
<li>काम के हिसाब से collection: index से <code>List&lt;T&gt;</code>, key से <code>Dictionary</code> (औसतन O(1)), unique items के लिए <code>HashSet</code>। Read-only view, immutable नहीं होता।</li>
<li><b>Delegate</b> = type-safe method reference (<code>Func</code>, <code>Action</code>, <code>Predicate</code>)। <b>Event</b> = ऐसा delegate जिस पर बाहर वाले सिर्फ़ <code>+=</code>/<code>-=</code> कर सकते हैं।</li>
<li><b>Extension methods</b> compile time पर bind होने वाली static calls हैं; matching instance method जीतता है।</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li>अकेले <code>name.ToUpper();</code> से कुछ नहीं बदलता — string का हर "बदलाव" नई string लौटाता है।</li>
<li>Unboxing को <b>exact</b> type चाहिए: <code>object o = 5; long l = (long)o;</code> <code>InvalidCastException</code> फेंकता है।</li>
<li><code>for</code> loop में बने lambdas <b>एक ही</b> loop variable share करते हैं और सबको उसकी आख़िरी value दिखती है; <code>foreach</code> हर बार नया variable देता है (C# 5+)।</li>
</ul>`,
        hg: `<p><b>Tasveer — marksheet ki photocopy banaam ghar ka pata:</b> photocopy data ki copy hai (<b>value type</b>); pata dene se do log <b>ek hi ghar</b> tak pahunchte hain (<b>reference type</b>).</p>
<p><b>Zaroor bolo:</b></p>
<ul>
<li><b>Value type</b> data copy karta hai; <b>reference type</b> reference copy karta hai — do variables, ek object.</li>
<li>Value type <b>wahin rehta hai jahan uska container rehta hai</b>: local aamtaur par stack par, field apne heap object ke andar, boxed ya captured values heap par. "Value types hamesha stack par rehte hain" ek myth hai.</li>
<li><b>Boxing</b> = value type → <code>object</code>/interface (heap par ek copy); <b>unboxing</b> = exact type mein wapas cast. Generics isse bachaate hain.</li>
<li><code>string</code> immutable hai aur <code>==</code> text compare karta hai. Loops ke liye <code>StringBuilder</code>; kuch tukdon ke liye <code>+</code> ya <code>$"..."</code>.</li>
<li>Kaam ke hisaab se collection: index se <code>List&lt;T&gt;</code>, key se <code>Dictionary</code> (ausatan O(1)), unique items ke liye <code>HashSet</code>. Read-only view, immutable nahi hota.</li>
<li><b>Delegate</b> = type-safe method reference (<code>Func</code>, <code>Action</code>, <code>Predicate</code>). <b>Event</b> = aisa delegate jis par baahar wale sirf <code>+=</code>/<code>-=</code> kar sakte hain.</li>
<li><b>Extension methods</b> compile time par bind hone wali static calls hain; matching instance method jeetta hai.</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li>Akele <code>name.ToUpper();</code> se kuch nahi badalta — string ka har "badlaav" nayi string lautaata hai.</li>
<li>Unboxing ko <b>exact</b> type chahiye: <code>object o = 5; long l = (long)o;</code> <code>InvalidCastException</code> phenkta hai.</li>
<li><code>for</code> loop mein bane lambdas <b>ek hi</b> loop variable share karte hain aur sabko uski aakhri value dikhti hai; <code>foreach</code> har baar naya variable deta hai (C# 5+).</li>
</ul>`
      }
    },
    {
      id: "cheat-day3-csharp-advanced",
      depth: "short",
      title: {
        en: "Day 3 cheat sheet — C# Advanced",
        hi: "Day 3 की cheat sheet — C# Advanced",
        hg: "Day 3 ki cheat sheet — C# Advanced"
      },
      body: {
        en: `<p><b>Picture — the dosa counter token:</b> the token is a <b>Task</b>; the cashier (the <b>thread</b>) serves the next customer instead of standing at the tawa — that is <b>await</b>.</p>
<p><b>Must say:</b></p>
<ul>
<li><b><code>await</code> frees the thread while you wait — it does not create a new one.</b> A method runs synchronously until it awaits an <b>unfinished</b> task.</li>
<li><b>Task</b> = a promise of work or a result (thread pool, exceptions, cancellation, <code>WhenAll</code>). <b>Thread</b> = an OS thread you manage yourself.</li>
<li>Three rules: <b>async all the way</b>, <code>async void</code> only for event handlers, pass a <code>CancellationToken</code>.</li>
<li>Use <code>ConfigureAwait(false)</code> in libraries; avoid it in UI code that touches controls. <b>ASP.NET Core has no SynchronizationContext</b>.</li>
<li><code>throw;</code> keeps the stack trace, <code>throw ex;</code> resets it (CA2200). One global handler logs once and returns ProblemDetails.</li>
<li><code>using</code> = deterministic <code>Dispose</code> for resources; the <b>GC</b> cleans memory (Gen 0 → 1 → 2; objects of 85,000 bytes or more go to the LOH).</li>
<li><b>record</b> = value equality + <code>with</code> copies (shallow); a good fit for DTOs.</li>
<li><b>NRT</b> (<code>string?</code>) = compile-time warnings only — nothing changes at runtime.</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li><code>.Result</code>/<code>.Wait()</code> can deadlock UI and classic ASP.NET apps, and starve the thread pool in ASP.NET Core.</li>
<li><code>await Task.WhenAll(...)</code> throws only the <b>first</b> exception; the WhenAll task's <code>.Exception</code> holds all of them.</li>
<li><code>await</code> inside a <code>lock</code> is compile error <b>CS1996</b> — use <code>SemaphoreSlim(1, 1)</code> with <code>WaitAsync()</code>, and <code>Release()</code> in <code>finally</code>.</li>
</ul>`,
        hi: `<p><b>तस्वीर — dosa counter का token:</b> token एक <b>Task</b> है; cashier (यानी <b>thread</b>) तवे के पास खड़ा रहने की बजाय अगले customer को serve करता है — यही <b>await</b> है।</p>
<p><b>ज़रूर बोलो:</b></p>
<ul>
<li><b><code>await</code> इंतज़ार के दौरान thread को free करता है — नया thread नहीं बनाता।</b> Method तब तक synchronously चलता है जब तक वो किसी <b>अधूरे</b> task को await न करे।</li>
<li><b>Task</b> = काम या result का वादा (thread pool, exceptions, cancellation, <code>WhenAll</code>)। <b>Thread</b> = OS thread जिसे आप खुद manage करते हो।</li>
<li>तीन नियम: <b>async all the way</b>, <code>async void</code> सिर्फ़ event handlers के लिए, <code>CancellationToken</code> आगे पास करो।</li>
<li>Libraries में <code>ConfigureAwait(false)</code> use करो; जो UI code controls छूता है उसमें इससे बचो। <b>ASP.NET Core में SynchronizationContext नहीं है</b>।</li>
<li><code>throw;</code> stack trace बचाता है, <code>throw ex;</code> उसे reset कर देता है (CA2200)। एक global handler एक बार log करता है और ProblemDetails लौटाता है।</li>
<li><code>using</code> = resources के लिए तय समय पर <code>Dispose</code>; <b>GC</b> memory साफ़ करता है (Gen 0 → 1 → 2; 85,000 bytes या उससे बड़े objects LOH में जाते हैं)।</li>
<li><b>record</b> = value equality + <code>with</code> copies (shallow); DTOs के लिए बढ़िया।</li>
<li><b>NRT</b> (<code>string?</code>) = सिर्फ़ compile-time warnings — runtime पर कुछ नहीं बदलता।</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li><code>.Result</code>/<code>.Wait()</code> UI और classic ASP.NET apps में deadlock कर सकते हैं, और ASP.NET Core में thread pool को भूखा (starve) कर सकते हैं।</li>
<li><code>await Task.WhenAll(...)</code> सिर्फ़ <b>पहला</b> exception फेंकता है; WhenAll task की <code>.Exception</code> में सारे होते हैं।</li>
<li><code>lock</code> के अंदर <code>await</code> compile error <b>CS1996</b> है — <code>SemaphoreSlim(1, 1)</code> के साथ <code>WaitAsync()</code> use करो, और <code>finally</code> में <code>Release()</code>।</li>
</ul>`,
        hg: `<p><b>Tasveer — dosa counter ka token:</b> token ek <b>Task</b> hai; cashier (yaani <b>thread</b>) tawe ke paas khada rehne ki bajaay agle customer ko serve karta hai — yahi <b>await</b> hai.</p>
<p><b>Zaroor bolo:</b></p>
<ul>
<li><b><code>await</code> intezaar ke dauraan thread ko free karta hai — naya thread nahi banata.</b> Method tab tak synchronously chalta hai jab tak woh kisi <b>adhoore</b> task ko await na kare.</li>
<li><b>Task</b> = kaam ya result ka vaada (thread pool, exceptions, cancellation, <code>WhenAll</code>). <b>Thread</b> = OS thread jise aap khud manage karte ho.</li>
<li>Teen niyam: <b>async all the way</b>, <code>async void</code> sirf event handlers ke liye, <code>CancellationToken</code> aage pass karo.</li>
<li>Libraries mein <code>ConfigureAwait(false)</code> use karo; jo UI code controls chhoota hai usmein isse bacho. <b>ASP.NET Core mein SynchronizationContext nahi hai</b>.</li>
<li><code>throw;</code> stack trace bachaata hai, <code>throw ex;</code> use reset kar deta hai (CA2200). Ek global handler ek baar log karta hai aur ProblemDetails lautaata hai.</li>
<li><code>using</code> = resources ke liye tay samay par <code>Dispose</code>; <b>GC</b> memory saaf karta hai (Gen 0 → 1 → 2; 85,000 bytes ya usse bade objects LOH mein jaate hain).</li>
<li><b>record</b> = value equality + <code>with</code> copies (shallow); DTOs ke liye badhiya.</li>
<li><b>NRT</b> (<code>string?</code>) = sirf compile-time warnings — runtime par kuch nahi badalta.</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li><code>.Result</code>/<code>.Wait()</code> UI aur classic ASP.NET apps mein deadlock kar sakte hain, aur ASP.NET Core mein thread pool ko bhookha (starve) kar sakte hain.</li>
<li><code>await Task.WhenAll(...)</code> sirf <b>pehla</b> exception phenkta hai; WhenAll task ki <code>.Exception</code> mein saare hote hain.</li>
<li><code>lock</code> ke andar <code>await</code> compile error <b>CS1996</b> hai — <code>SemaphoreSlim(1, 1)</code> ke saath <code>WaitAsync()</code> use karo, aur <code>finally</code> mein <code>Release()</code>.</li>
</ul>`
      }
    },
    {
      id: "cheat-day4-linq",
      depth: "short",
      title: {
        en: "Day 4 cheat sheet — LINQ",
        hi: "Day 4 की cheat sheet — LINQ",
        hg: "Day 4 ki cheat sheet — LINQ"
      },
      body: {
        en: `<p><b>Picture — recipe card vs cooked food:</b> writing a query cooks nothing; enumerating it cooks it — again every time; <code>ToList()</code> packs the food into a tiffin box.</p>
<p><b>Must say:</b></p>
<ul>
<li><b>Deferred execution</b>: <code>Where</code>/<code>Select</code>/<code>OrderBy</code> only build the query; <code>foreach</code>, <code>ToList</code>, <code>Count</code>, <code>First</code>, <code>Any</code> run it — with the data and variable values of <b>that moment</b>.</li>
<li><b>Every enumeration re-runs the query</b> — twice over EF Core means two database calls. Materialize once.</li>
<li><b>IEnumerable</b> runs <code>Func</code> delegates in memory; <b>IQueryable</b> holds an expression tree that EF Core translates to SQL. The variable's <b>compile-time type</b> decides which <code>Where</code> you get.</li>
<li><b>Select</b> = one output per input; <b>SelectMany</b> = flatten all children into one sequence.</li>
<li><b>GroupBy</b> is deferred and gives groups with a <code>Key</code>; <b>ToLookup</b> runs immediately.</li>
<li><b>First</b> throws on none; <b>Single</b> throws on none or many; <code>SingleOrDefault</code> still throws on duplicates.</li>
<li><b>Any()</b> stops at the first match (EXISTS); <code>Count()</code> on a filtered query walks every item (COUNT).</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li><code>ToList()</code> or <code>AsEnumerable()</code> <b>before</b> <code>Where</code> on a big table loads the whole table into memory.</li>
<li><code>OrderBy</code> twice — the second becomes the primary sort; the first is at most a hidden tie-breaker (in memory) or dropped (in SQL). Use <code>ThenBy</code>.</li>
<li>Paging without a stable, unique order — pages can repeat or miss rows.</li>
</ul>`,
        hi: `<p><b>तस्वीर — recipe card बनाम पका हुआ खाना:</b> query लिखने से कुछ नहीं पकता; enumerate करने पर पकता है — और हर बार फिर से; <code>ToList()</code> खाने को tiffin box में pack कर देता है।</p>
<p><b>ज़रूर बोलो:</b></p>
<ul>
<li><b>Deferred execution</b>: <code>Where</code>/<code>Select</code>/<code>OrderBy</code> सिर्फ़ query बनाते हैं; <code>foreach</code>, <code>ToList</code>, <code>Count</code>, <code>First</code>, <code>Any</code> उसे चलाते हैं — <b>उसी पल</b> के data और variable values के साथ।</li>
<li><b>हर enumeration query को फिर से चलाता है</b> — EF Core पर दो बार मतलब दो database calls। एक बार materialize करो।</li>
<li><b>IEnumerable</b> memory में <code>Func</code> delegates चलाता है; <b>IQueryable</b> में expression tree होता है जिसे EF Core SQL में translate करता है। Variable का <b>compile-time type</b> तय करता है कि कौन सा <code>Where</code> मिलेगा।</li>
<li><b>Select</b> = हर input का एक output; <b>SelectMany</b> = सारे children को एक sequence में flatten करो।</li>
<li><b>GroupBy</b> deferred है और <code>Key</code> वाले groups देता है; <b>ToLookup</b> तुरंत चलता है।</li>
<li><b>First</b> कुछ न मिले तो throw करता है; <b>Single</b> zero या कई मिलें तो throw करता है; <code>SingleOrDefault</code> duplicates पर फिर भी throw करता है।</li>
<li><b>Any()</b> पहले match पर रुक जाता है (EXISTS); filtered query पर <code>Count()</code> हर item से गुज़रता है (COUNT)।</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li>बड़ी table पर <code>Where</code> से <b>पहले</b> <code>ToList()</code> या <code>AsEnumerable()</code> पूरी table memory में ले आता है।</li>
<li>दो बार <code>OrderBy</code> — दूसरा sort primary बन जाता है; पहला ज़्यादा से ज़्यादा एक छुपा tie-breaker रहता है (memory में) या हट जाता है (SQL में)। <code>ThenBy</code> use करो।</li>
<li>Stable, unique order के बिना paging — pages में rows दोहरा सकती हैं या छूट सकती हैं।</li>
</ul>`,
        hg: `<p><b>Tasveer — recipe card banaam paka hua khaana:</b> query likhne se kuch nahi pakta; enumerate karne par pakta hai — aur har baar phir se; <code>ToList()</code> khaane ko tiffin box mein pack kar deta hai.</p>
<p><b>Zaroor bolo:</b></p>
<ul>
<li><b>Deferred execution</b>: <code>Where</code>/<code>Select</code>/<code>OrderBy</code> sirf query banaate hain; <code>foreach</code>, <code>ToList</code>, <code>Count</code>, <code>First</code>, <code>Any</code> use chalaate hain — <b>usi pal</b> ke data aur variable values ke saath.</li>
<li><b>Har enumeration query ko phir se chalata hai</b> — EF Core par do baar matlab do database calls. Ek baar materialize karo.</li>
<li><b>IEnumerable</b> memory mein <code>Func</code> delegates chalata hai; <b>IQueryable</b> mein expression tree hota hai jise EF Core SQL mein translate karta hai. Variable ka <b>compile-time type</b> tay karta hai ki kaunsa <code>Where</code> milega.</li>
<li><b>Select</b> = har input ka ek output; <b>SelectMany</b> = saare children ko ek sequence mein flatten karo.</li>
<li><b>GroupBy</b> deferred hai aur <code>Key</code> wale groups deta hai; <b>ToLookup</b> turant chalta hai.</li>
<li><b>First</b> kuch na mile to throw karta hai; <b>Single</b> zero ya kai milein to throw karta hai; <code>SingleOrDefault</code> duplicates par phir bhi throw karta hai.</li>
<li><b>Any()</b> pehle match par ruk jaata hai (EXISTS); filtered query par <code>Count()</code> har item se guzarta hai (COUNT).</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li>Badi table par <code>Where</code> se <b>pehle</b> <code>ToList()</code> ya <code>AsEnumerable()</code> poori table memory mein le aata hai.</li>
<li>Do baar <code>OrderBy</code> — doosra sort primary ban jaata hai; pehla zyada se zyada ek chhupa tie-breaker rehta hai (memory mein) ya hat jaata hai (SQL mein). <code>ThenBy</code> use karo.</li>
<li>Stable, unique order ke bina paging — pages mein rows dohra sakti hain ya chhoot sakti hain.</li>
</ul>`
      }
    },
    {
      id: "cheat-day5-ef-core-1",
      depth: "short",
      title: {
        en: "Day 5 cheat sheet — EF Core Part 1",
        hi: "Day 5 की cheat sheet — EF Core Part 1",
        hg: "Day 5 ki cheat sheet — EF Core Part 1"
      },
      body: {
        en: `<p><b>Picture — the bank counter clerk:</b> the DbSets are his ledgers, the change tracker is his slip, and <code>SaveChanges()</code> posts every entry together.</p>
<p><b>Must say:</b></p>
<ul>
<li><b>DbContext</b> = a short-lived unit of work; <code>SaveChanges()</code> writes all changes in <b>one transaction</b>.</li>
<li><code>AddDbContext</code> = <b>Scoped</b> (one per request). Not thread-safe — never a singleton. <code>AddDbContextFactory</code> for background and parallel work.</li>
<li><b>Code-First</b> = the C# model is the truth and migrations build the schema. <b>DB-First</b> = scaffold classes from an existing database.</li>
<li><b>Migrations</b> diff against the model snapshot; applied ones are recorded in <code>__EFMigrationsHistory</code>. In production: a reviewed idempotent script or bundle, run by the pipeline.</li>
<li><b>Relationships</b>: FK on the "many" side; 1:1 = FK + unique index; N:N = a join table that EF Core 5+ creates for you.</li>
<li><b>Delete rules</b>: required FK → Cascade by default; optional FK → ClientSetNull.</li>
<li><b>Loading</b>: related data is not loaded unless you ask. <code>Include</code> = a JOIN in the same query; explicit <code>Load()</code> = one more query when you choose; lazy proxies = hidden queries (N+1 risk).</li>
<li><b>Tracking</b>: Added / Unchanged / Modified / Deleted / Detached; the UPDATE has only the changed columns. <code>AsNoTracking()</code> for read-only queries.</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li>Two queries at once on one context (<code>Task.WhenAll</code>) → "A second operation was started on this context instance".</li>
<li>Edit an <code>AsNoTracking()</code> entity and call <code>SaveChanges()</code> → nothing is saved.</li>
<li>A tracked entity is <b>not refreshed</b> by a new tracking query (identity resolution) — you can see stale values.</li>
</ul>`,
        hi: `<p><b>तस्वीर — bank counter का clerk:</b> DbSets उसके ledgers हैं, change tracker उसकी पर्ची है, और <code>SaveChanges()</code> सारी entries एक साथ post करता है।</p>
<p><b>ज़रूर बोलो:</b></p>
<ul>
<li><b>DbContext</b> = कम समय चलने वाला unit of work; <code>SaveChanges()</code> सारे बदलाव <b>एक transaction</b> में लिखता है।</li>
<li><code>AddDbContext</code> = <b>Scoped</b> (हर request का एक)। Thread-safe नहीं — कभी singleton नहीं। Background और parallel काम के लिए <code>AddDbContextFactory</code>।</li>
<li><b>Code-First</b> = C# model ही source of truth है और migrations schema बनाते हैं। <b>DB-First</b> = मौजूदा database से classes scaffold करो।</li>
<li><b>Migrations</b> model snapshot से diff करते हैं; applied migrations <code>__EFMigrationsHistory</code> में दर्ज होते हैं। Production में: review की हुई idempotent script या bundle, जिसे pipeline चलाए।</li>
<li><b>Relationships</b>: FK "many" side पर; 1:1 = FK + unique index; N:N = join table, जिसे EF Core 5+ आपके लिए बनाता है।</li>
<li><b>Delete rules</b>: required FK → default Cascade; optional FK → ClientSetNull।</li>
<li><b>Loading</b>: आप माँगो नहीं तो related data load नहीं होता। <code>Include</code> = उसी query में JOIN; explicit <code>Load()</code> = आपकी मर्ज़ी के समय एक और query; lazy proxies = छुपी queries (N+1 का ख़तरा)।</li>
<li><b>Tracking</b>: Added / Unchanged / Modified / Deleted / Detached; UPDATE में सिर्फ़ बदले हुए columns। Read-only queries के लिए <code>AsNoTracking()</code>।</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li>एक context पर एक साथ दो queries (<code>Task.WhenAll</code>) → "A second operation was started on this context instance"।</li>
<li><code>AsNoTracking()</code> वाली entity बदलकर <code>SaveChanges()</code> call करो → कुछ save नहीं होता।</li>
<li>Tracked entity नई tracking query से <b>refresh नहीं होती</b> (identity resolution) — पुरानी values दिख सकती हैं।</li>
</ul>`,
        hg: `<p><b>Tasveer — bank counter ka clerk:</b> DbSets uske ledgers hain, change tracker uski parchi hai, aur <code>SaveChanges()</code> saari entries ek saath post karta hai.</p>
<p><b>Zaroor bolo:</b></p>
<ul>
<li><b>DbContext</b> = kam samay chalne wala unit of work; <code>SaveChanges()</code> saare badlaav <b>ek transaction</b> mein likhta hai.</li>
<li><code>AddDbContext</code> = <b>Scoped</b> (har request ka ek). Thread-safe nahi — kabhi singleton nahi. Background aur parallel kaam ke liye <code>AddDbContextFactory</code>.</li>
<li><b>Code-First</b> = C# model hi source of truth hai aur migrations schema banaate hain. <b>DB-First</b> = maujooda database se classes scaffold karo.</li>
<li><b>Migrations</b> model snapshot se diff karte hain; applied migrations <code>__EFMigrationsHistory</code> mein darj hote hain. Production mein: review ki hui idempotent script ya bundle, jise pipeline chalaaye.</li>
<li><b>Relationships</b>: FK "many" side par; 1:1 = FK + unique index; N:N = join table, jise EF Core 5+ aapke liye banata hai.</li>
<li><b>Delete rules</b>: required FK → default Cascade; optional FK → ClientSetNull.</li>
<li><b>Loading</b>: aap maango nahi to related data load nahi hota. <code>Include</code> = usi query mein JOIN; explicit <code>Load()</code> = aapki marzi ke samay ek aur query; lazy proxies = chhupi queries (N+1 ka khatra).</li>
<li><b>Tracking</b>: Added / Unchanged / Modified / Deleted / Detached; UPDATE mein sirf badle hue columns. Read-only queries ke liye <code>AsNoTracking()</code>.</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li>Ek context par ek saath do queries (<code>Task.WhenAll</code>) → "A second operation was started on this context instance".</li>
<li><code>AsNoTracking()</code> wali entity badalkar <code>SaveChanges()</code> call karo → kuch save nahi hota.</li>
<li>Tracked entity nayi tracking query se <b>refresh nahi hoti</b> (identity resolution) — purani values dikh sakti hain.</li>
</ul>`
      }
    },
    {
      id: "cheat-day6-ef-core-2",
      depth: "short",
      title: {
        en: "Day 6 cheat sheet — EF Core Part 2",
        hi: "Day 6 की cheat sheet — EF Core Part 2",
        hg: "Day 6 ki cheat sheet — EF Core Part 2"
      },
      body: {
        en: `<p><b>Picture — the kirana shop helper:</b> one trip for the list plus one trip per item is N+1; the smart helper brings everything in one trip.</p>
<p><b>Must say:</b></p>
<ul>
<li><b>N+1</b> = 1 query for the list + 1 per row. Fix: load in one go — <code>Include</code>, a projection or one batch query.</li>
<li><b>See the SQL</b>: <code>ToQueryString()</code> for one query, <code>LogTo</code> for every command, <code>TagWith</code> to find it in Query Store.</li>
<li><b>Projection</b> to a DTO = only the needed columns, COUNT/SUM done in SQL, nothing tracked (an entity placed inside a projection is still tracked).</li>
<li>Two collection <code>Include</code>s multiply rows (<b>cartesian explosion</b>); <code>AsSplitQuery()</code> trades that for more round trips.</li>
<li><code>FromSql($"... {x}")</code> sends x as a parameter — safe. <code>FromSqlRaw</code> + string concatenation = SQL injection.</li>
<li>One <code>SaveChanges()</code> is atomic; <code>BeginTransaction()</code> joins several steps. With retries on, run the whole transaction inside the execution strategy.</li>
<li><code>[Timestamp]</code> rowversion goes into the UPDATE's WHERE; 0 rows → <code>DbUpdateConcurrencyException</code> → store wins, client wins or merge.</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li><code>ExecuteUpdate</code>/<code>ExecuteDelete</code> (EF Core 7) skip the change tracker — tracked entities go stale, and SaveChanges logic (SaveChanges interceptors, audit columns) does not run.</li>
<li>A C# method that EF cannot translate inside <code>Where</code> throws (since EF Core 3.0); only the final <code>Select</code> may call your C# methods.</li>
<li>A transaction kept open while you call an external API holds its locks — other requests queue behind you.</li>
</ul>`,
        hi: `<p><b>तस्वीर — किराना दुकान का helper:</b> list के लिए एक चक्कर और हर item के लिए एक और चक्कर, यही N+1 है; समझदार helper सब कुछ एक ही चक्कर में ले आता है।</p>
<p><b>ज़रूर बोलो:</b></p>
<ul>
<li><b>N+1</b> = list के लिए 1 query + हर row के लिए 1। Fix: एक बार में load करो — <code>Include</code>, projection या एक batch query।</li>
<li><b>SQL देखो</b>: एक query के लिए <code>ToQueryString()</code>, हर command के लिए <code>LogTo</code>, Query Store में ढूँढने के लिए <code>TagWith</code>।</li>
<li>DTO में <b>Projection</b> = सिर्फ़ ज़रूरी columns, COUNT/SUM SQL में, कुछ track नहीं (projection के अंदर रखी entity फिर भी track होती है)।</li>
<li>दो collection <code>Include</code> rows को गुणा कर देते हैं (<b>cartesian explosion</b>); <code>AsSplitQuery()</code> इसके बदले ज़्यादा round trips करता है।</li>
<li><code>FromSql($"... {x}")</code> x को parameter बनाकर भेजता है — safe। <code>FromSqlRaw</code> + string जोड़ना = SQL injection।</li>
<li>एक <code>SaveChanges()</code> atomic है; <code>BeginTransaction()</code> कई steps को जोड़ता है। Retries चालू हों तो पूरा transaction execution strategy के अंदर चलाओ।</li>
<li><code>[Timestamp]</code> rowversion UPDATE के WHERE में जाता है; 0 rows → <code>DbUpdateConcurrencyException</code> → store wins, client wins या merge।</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li><code>ExecuteUpdate</code>/<code>ExecuteDelete</code> (EF Core 7) change tracker को छोड़ देते हैं — tracked entities पुरानी (stale) हो जाती हैं, और SaveChanges वाला logic (SaveChanges interceptors, audit columns) नहीं चलता।</li>
<li><code>Where</code> के अंदर ऐसा C# method जिसे EF translate न कर पाए, throw करता है (EF Core 3.0 से); सिर्फ़ आख़िरी <code>Select</code> आपके C# methods call कर सकता है।</li>
<li>External API call करते समय खुला रखा transaction अपने locks पकड़े रहता है — बाक़ी requests आपके पीछे line में लग जाती हैं।</li>
</ul>`,
        hg: `<p><b>Tasveer — kirana dukaan ka helper:</b> list ke liye ek chakkar aur har item ke liye ek aur chakkar, yahi N+1 hai; samajhdaar helper sab kuch ek hi chakkar mein le aata hai.</p>
<p><b>Zaroor bolo:</b></p>
<ul>
<li><b>N+1</b> = list ke liye 1 query + har row ke liye 1. Fix: ek baar mein load karo — <code>Include</code>, projection ya ek batch query.</li>
<li><b>SQL dekho</b>: ek query ke liye <code>ToQueryString()</code>, har command ke liye <code>LogTo</code>, Query Store mein dhoondhne ke liye <code>TagWith</code>.</li>
<li>DTO mein <b>Projection</b> = sirf zaroori columns, COUNT/SUM SQL mein, kuch track nahi (projection ke andar rakhi entity phir bhi track hoti hai).</li>
<li>Do collection <code>Include</code> rows ko guna kar dete hain (<b>cartesian explosion</b>); <code>AsSplitQuery()</code> iske badle zyada round trips karta hai.</li>
<li><code>FromSql($"... {x}")</code> x ko parameter banakar bhejta hai — safe. <code>FromSqlRaw</code> + string jodna = SQL injection.</li>
<li>Ek <code>SaveChanges()</code> atomic hai; <code>BeginTransaction()</code> kai steps ko jodta hai. Retries chaalu hon to poora transaction execution strategy ke andar chalao.</li>
<li><code>[Timestamp]</code> rowversion UPDATE ke WHERE mein jaata hai; 0 rows → <code>DbUpdateConcurrencyException</code> → store wins, client wins ya merge.</li>
</ul>
<p><b>Classic traps:</b></p>
<ul>
<li><code>ExecuteUpdate</code>/<code>ExecuteDelete</code> (EF Core 7) change tracker ko chhod dete hain — tracked entities purani (stale) ho jaati hain, aur SaveChanges wala logic (SaveChanges interceptors, audit columns) nahi chalta.</li>
<li><code>Where</code> ke andar aisa C# method jise EF translate na kar paaye, throw karta hai (EF Core 3.0 se); sirf aakhri <code>Select</code> aapke C# methods call kar sakta hai.</li>
<li>External API call karte samay khula rakha transaction apne locks pakde rehta hai — baaki requests aapke peeche line mein lag jaati hain.</li>
</ul>`
      }
    }
  ],
  qa: [
    {
      id: "fast-sql-slow-request",
      depth: "short",
      q: "SQL Server shows every query of an endpoint finishing in a few milliseconds, but the request still takes seconds. Where do you look?",
      answer: "Look at the C# around the queries: N+1 inside a LINQ loop, an IEnumerable pulling a whole table, blocking .Result calls, or serializing big entity graphs. Then fix one cause and re-measure.",
      meaning: {
        hi: "Queries के आसपास के C# को देखो: LINQ loop के अंदर N+1, पूरी table खींचता IEnumerable, block करने वाली .Result calls, या बड़े entity graphs का serialization। फिर एक वजह ठीक करो और फिर से नापो।",
        hg: "Queries ke aaspaas ke C# ko dekho: LINQ loop ke andar N+1, poori table kheenchta IEnumerable, block karne wali .Result calls, ya bade entity graphs ka serialization. Phir ek wajah theek karo aur phir se naapo."
      },
      explain: {
        en: `<ul>
<li><b>Many fast queries add up</b> → N+1 hidden in a LINQ loop or a <code>Select</code> that calls a service per item (Day 4 + Day 6): 200 queries × 5 ms = 1 second, although each query looks fine. Count the commands per request — <code>LogTo</code> in development, dependency calls in Application Insights.</li>
<li><b>One fast query, a huge result</b> → an <code>IEnumerable</code> variable over a DbSet, or <code>ToList()</code>/<code>AsEnumerable()</code> before <code>Where</code> (Day 4). The SQL is simple, but every row travels, is materialized and tracked (Day 5).</li>
<li><b>Blocked threads</b> → <code>.Result</code>/<code>.Wait()</code> on async calls (Day 3). Under load, requests wait for a free thread, not for SQL.</li>
<li><b>Serialization</b> → returning entities with navigations: big object graphs, cycles, or lazy loading firing during JSON serialization (Day 5). Return DTO projections instead (Day 6).</li>
<li>If one query <b>is</b> slow inside SQL Server, that is Day 6's question "slow-query-investigation": execution plan, indexes, implicit conversions.</li>
</ul>
<p>Follow-up: "How do you prove the fix?" — The same measurement before and after (request duration, query count), ideally with a query-count check in an integration test so the problem cannot come back silently.</p>`,
        hi: `<ul>
<li><b>बहुत सी तेज़ queries जुड़ जाती हैं</b> → LINQ loop में छुपा N+1, या ऐसा <code>Select</code> जो हर item के लिए service call करे (Day 4 + Day 6): 200 queries × 5 ms = 1 second, भले ही हर query ठीक दिखे। हर request के commands गिनो — development में <code>LogTo</code>, Application Insights में dependency calls।</li>
<li><b>एक तेज़ query, विशाल result</b> → DbSet पर <code>IEnumerable</code> variable, या <code>Where</code> से पहले <code>ToList()</code>/<code>AsEnumerable()</code> (Day 4)। SQL आसान है, पर हर row आती है, materialize होती है और track होती है (Day 5)।</li>
<li><b>Blocked threads</b> → async calls पर <code>.Result</code>/<code>.Wait()</code> (Day 3)। Load में requests SQL का नहीं, free thread का इंतज़ार करती हैं।</li>
<li><b>Serialization</b> → navigations वाली entities लौटाना: बड़े object graphs, cycles, या JSON serialization के दौरान चलता lazy loading (Day 5)। इसकी जगह DTO projections लौटाओ (Day 6)।</li>
<li>अगर कोई query SQL Server के अंदर सच में धीमी <b>है</b>, तो वो Day 6 का सवाल "slow-query-investigation" है: execution plan, indexes, implicit conversions।</li>
</ul>
<p>Follow-up: "Fix साबित कैसे करोगे?" — पहले और बाद में वही measurement (request duration, query count), और बेहतर हो तो integration test में query-count check, ताकि problem चुपचाप वापस न आ सके।</p>`,
        hg: `<ul>
<li><b>Bahut si tez queries jud jaati hain</b> → LINQ loop mein chhupa N+1, ya aisa <code>Select</code> jo har item ke liye service call kare (Day 4 + Day 6): 200 queries × 5 ms = 1 second, bhale hi har query theek dikhe. Har request ke commands gino — development mein <code>LogTo</code>, Application Insights mein dependency calls.</li>
<li><b>Ek tez query, vishaal result</b> → DbSet par <code>IEnumerable</code> variable, ya <code>Where</code> se pehle <code>ToList()</code>/<code>AsEnumerable()</code> (Day 4). SQL aasaan hai, par har row aati hai, materialize hoti hai aur track hoti hai (Day 5).</li>
<li><b>Blocked threads</b> → async calls par <code>.Result</code>/<code>.Wait()</code> (Day 3). Load mein requests SQL ka nahi, free thread ka intezaar karti hain.</li>
<li><b>Serialization</b> → navigations wali entities lautaana: bade object graphs, cycles, ya JSON serialization ke dauraan chalta lazy loading (Day 5). Iski jagah DTO projections lautaao (Day 6).</li>
<li>Agar koi query SQL Server ke andar sach mein dheemi <b>hai</b>, to woh Day 6 ka sawaal "slow-query-investigation" hai: execution plan, indexes, implicit conversions.</li>
</ul>
<p>Follow-up: "Fix saabit kaise karoge?" — Pehle aur baad mein wahi measurement (request duration, query count), aur behtar ho to integration test mein query-count check, taaki problem chupchaap wapas na aa sake.</p>`
      }
    },
    {
      id: "ienumerable-repository-filter",
      depth: "short",
      q: "A repository method returns <code>IEnumerable&lt;Order&gt;</code> from <code>db.Orders</code>, and the caller adds <code>.Where(o =&gt; o.Total &gt; 500)</code>. What happens?",
      answer: "Because the static type is IEnumerable, Enumerable.Where runs in memory: EF loads the whole Orders table, then C# filters it. Filter on IQueryable inside the data layer, or pass the filter in.",
      meaning: {
        hi: "Static type IEnumerable है, इसलिए Enumerable.Where memory में चलता है: EF पूरी Orders table load करता है, फिर C# उसे filter करता है। Data layer के अंदर IQueryable पर filter करो, या filter को parameter बनाकर भेजो।",
        hg: "Static type IEnumerable hai, isliye Enumerable.Where memory mein chalta hai: EF poori Orders table load karta hai, phir C# use filter karta hai. Data layer ke andar IQueryable par filter karo, ya filter ko parameter banakar bhejo."
      },
      explain: {
        en: `<ul>
<li>Extension methods are bound at <b>compile time</b> from the variable's type (Day 2). <code>IQueryable&lt;T&gt;</code> inherits <code>IEnumerable&lt;T&gt;</code>, but once the variable is typed <code>IEnumerable&lt;T&gt;</code>, you get <code>Enumerable.Where</code> with a <code>Func</code> — not <code>Queryable.Where</code> with an expression tree (Day 4).</li>
<li>Result: SQL without a WHERE, every row materialized (and tracked, unless the query is no-tracking), then filtered in your process. The answer is correct but the work happens in the wrong place — it hurts only when the table is big, so it often passes testing.</li>
<li>Fix: a purpose-built method such as <code>GetLargeOrdersAsync(decimal minTotal)</code> that filters in SQL and returns a list or DTOs; or keep <code>IQueryable</code> inside the data layer.</li>
</ul>
<p>Follow-up: "Then why not return IQueryable everywhere?" — It is a trade-off: flexible, but every caller can build any query, and translation errors show up far from the data code (Day 4). The puzzle "ienumerable-over-dbset" below shows this exact case.</p>`,
        hi: `<ul>
<li>Extension methods variable के type से <b>compile time</b> पर bind होते हैं (Day 2)। <code>IQueryable&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> को inherit करता है, लेकिन variable का type <code>IEnumerable&lt;T&gt;</code> होते ही आपको <code>Func</code> वाला <code>Enumerable.Where</code> मिलता है — expression tree वाला <code>Queryable.Where</code> नहीं (Day 4)।</li>
<li>नतीजा: बिना WHERE का SQL, हर row materialize होती है (और track भी, अगर query no-tracking नहीं है), फिर आपके process में filter होती है। जवाब सही है पर काम ग़लत जगह होता है — दर्द सिर्फ़ बड़ी table पर होता है, इसलिए testing में अक्सर पकड़ा नहीं जाता।</li>
<li>Fix: <code>GetLargeOrdersAsync(decimal minTotal)</code> जैसा ख़ास method जो SQL में filter करे और list या DTOs लौटाए; या <code>IQueryable</code> को data layer के अंदर ही रखो।</li>
</ul>
<p>Follow-up: "तो हर जगह IQueryable क्यों न लौटाएँ?" — यह trade-off है: flexible है, पर हर caller कोई भी query बना सकता है, और translation errors data code से दूर दिखते हैं (Day 4)। नीचे का puzzle "ienumerable-over-dbset" ठीक यही case दिखाता है।</p>`,
        hg: `<ul>
<li>Extension methods variable ke type se <b>compile time</b> par bind hote hain (Day 2). <code>IQueryable&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> ko inherit karta hai, lekin variable ka type <code>IEnumerable&lt;T&gt;</code> hote hi aapko <code>Func</code> wala <code>Enumerable.Where</code> milta hai — expression tree wala <code>Queryable.Where</code> nahi (Day 4).</li>
<li>Nateeja: bina WHERE ka SQL, har row materialize hoti hai (aur track bhi, agar query no-tracking nahi hai), phir aapke process mein filter hoti hai. Jawaab sahi hai par kaam galat jagah hota hai — dard sirf badi table par hota hai, isliye testing mein aksar pakda nahi jaata.</li>
<li>Fix: <code>GetLargeOrdersAsync(decimal minTotal)</code> jaisa khaas method jo SQL mein filter kare aur list ya DTOs lautaaye; ya <code>IQueryable</code> ko data layer ke andar hi rakho.</li>
</ul>
<p>Follow-up: "To har jagah IQueryable kyon na lautaayein?" — Yeh trade-off hai: flexible hai, par har caller koi bhi query bana sakta hai, aur translation errors data code se door dikhte hain (Day 4). Neeche ka puzzle "ienumerable-over-dbset" theek yahi case dikhata hai.</p>`
      }
    },
    {
      id: "async-ef-faster",
      depth: "short",
      q: "Does making an EF Core endpoint async make it faster?",
      answer: "Not one request — the query takes the same time. async frees the thread while SQL Server works, so the same server handles more requests at once. It is about scalability, not speed.",
      meaning: {
        hi: "एक request तेज़ नहीं होती — query उतना ही time लेती है। async, SQL Server के काम करते समय thread को free कर देता है, इसलिए वही server एक साथ ज़्यादा requests संभालता है। यह scalability के लिए है, speed के लिए नहीं।",
        hg: "Ek request tez nahi hoti — query utna hi time leti hai. async, SQL Server ke kaam karte samay thread ko free kar deta hai, isliye wahi server ek saath zyada requests sambhaalta hai. Yeh scalability ke liye hai, speed ke liye nahi."
      },
      explain: {
        en: `<ul>
<li><code>ToListAsync()</code> sends the same SQL as <code>ToList()</code>. The difference is what the thread does during the wait: <code>ToList()</code> blocks it; <code>await ToListAsync()</code> gives it back to the thread pool (Day 3).</li>
<li>Under load, blocked threads pile up and the thread pool grows only slowly → requests queue → response times jump. Async keeps threads free, so throughput stays high.</li>
<li>A <b>faster single request</b> comes from <b>less work</b>: fewer queries, fewer columns, better indexes (Day 6). Running independent queries in parallel needs <b>separate</b> DbContext instances (Day 5).</li>
</ul>
<p>Follow-up: "What about <code>ToListAsync().Result</code>?" — The worst of both: it still blocks the thread and adds async overhead; in ASP.NET Core it can starve the thread pool. Make the action <code>async</code> all the way.</p>`,
        hi: `<ul>
<li><code>ToListAsync()</code> वही SQL भेजता है जो <code>ToList()</code>। फ़र्क़ इसमें है कि इंतज़ार के दौरान thread क्या करता है: <code>ToList()</code> उसे block करता है; <code>await ToListAsync()</code> उसे thread pool को वापस दे देता है (Day 3)।</li>
<li>Load में blocked threads जमा होते जाते हैं और thread pool धीरे-धीरे ही बढ़ता है → requests line में लगती हैं → response time उछल जाता है। Async threads को free रखता है, इसलिए throughput ऊँचा रहता है।</li>
<li><b>एक request को तेज़</b> बनाता है <b>कम काम</b>: कम queries, कम columns, बेहतर indexes (Day 6)। अलग-अलग queries को parallel चलाने के लिए <b>अलग</b> DbContext instances चाहिए (Day 5)।</li>
</ul>
<p>Follow-up: "<code>ToListAsync().Result</code> का क्या?" — दोनों का सबसे बुरा हिस्सा: thread फिर भी block होता है और async का overhead भी जुड़ता है; ASP.NET Core में यह thread pool को starve कर सकता है। Action को पूरी तरह <code>async</code> बनाओ।</p>`,
        hg: `<ul>
<li><code>ToListAsync()</code> wahi SQL bhejta hai jo <code>ToList()</code>. Farq isme hai ki intezaar ke dauraan thread kya karta hai: <code>ToList()</code> use block karta hai; <code>await ToListAsync()</code> use thread pool ko wapas de deta hai (Day 3).</li>
<li>Load mein blocked threads jama hote jaate hain aur thread pool dheere-dheere hi badhta hai → requests line mein lagti hain → response time uchhal jaata hai. Async threads ko free rakhta hai, isliye throughput ooncha rehta hai.</li>
<li><b>Ek request ko tez</b> banata hai <b>kam kaam</b>: kam queries, kam columns, behtar indexes (Day 6). Alag-alag queries ko parallel chalaane ke liye <b>alag</b> DbContext instances chahiye (Day 5).</li>
</ul>
<p>Follow-up: "<code>ToListAsync().Result</code> ka kya?" — Dono ka sabse bura hissa: thread phir bhi block hota hai aur async ka overhead bhi judta hai; ASP.NET Core mein yeh thread pool ko starve kar sakta hai. Action ko poori tarah <code>async</code> banao.</p>`
      }
    },
    {
      id: "entity-changed-in-helper",
      depth: "short",
      q: "You pass an entity loaded with EF Core to a helper method that changes its <code>Name</code> and returns nothing. Is the new name saved by <code>SaveChanges()</code>?",
      answer: "Yes. An entity is a class, so the method receives a copy of the reference and changes the same object the change tracker watches. If it was loaded with AsNoTracking, nothing is saved.",
      meaning: {
        hi: "हाँ। Entity एक class है, इसलिए method को reference की copy मिलती है और वो उसी object को बदलता है जिस पर change tracker नज़र रखता है। अगर वो AsNoTracking से load हुई थी, तो कुछ save नहीं होता।",
        hg: "Haan. Entity ek class hai, isliye method ko reference ki copy milti hai aur woh usi object ko badalta hai jis par change tracker nazar rakhta hai. Agar woh AsNoTracking se load hui thi, to kuch save nahi hota."
      },
      explain: {
        en: `<ul>
<li>Day 2: passing a reference type <b>by value</b> copies the reference, not the object. Changes to its properties are visible to the caller.</li>
<li>Day 5: on <code>SaveChanges()</code>, DetectChanges compares the current values with the snapshot → the entity is Modified → <code>UPDATE ... SET [Name] = @p0 ...</code> with only that column.</li>
<li>If the entity came from <code>AsNoTracking()</code>, or you changed a DTO from a projection, there is no snapshot to compare with → nothing is sent.</li>
</ul>
<p>Follow-up: "What if the helper does <code>customer = new Customer { ... }</code>?" — Only the local parameter now points to a new object; the tracked entity is unchanged, so nothing new is saved.</p>
<p>TL angle: hidden changes inside "helper" methods surprise readers. Prefer intention-revealing methods on the entity itself, like <code>customer.Rename(newName)</code> — encapsulation from Day 1.</p>`,
        hi: `<ul>
<li>Day 2: reference type को <b>by value</b> pass करने पर reference copy होता है, object नहीं। उसकी properties में बदलाव caller को दिखते हैं।</li>
<li>Day 5: <code>SaveChanges()</code> पर DetectChanges current values को snapshot से compare करता है → entity Modified है → सिर्फ़ उसी column के साथ <code>UPDATE ... SET [Name] = @p0 ...</code>।</li>
<li>अगर entity <code>AsNoTracking()</code> से आई थी, या आपने projection वाला DTO बदला, तो compare करने के लिए कोई snapshot नहीं → कुछ नहीं जाता।</li>
</ul>
<p>Follow-up: "अगर helper <code>customer = new Customer { ... }</code> करे तो?" — अब सिर्फ़ local parameter नए object की तरफ़ इशारा करता है; tracked entity वैसी ही रहती है, इसलिए कुछ नया save नहीं होता।</p>
<p>TL angle: "helper" methods के अंदर छुपे बदलाव पढ़ने वालों को चौंकाते हैं। Entity पर ही साफ़ इरादे वाले methods रखो, जैसे <code>customer.Rename(newName)</code> — Day 1 का encapsulation।</p>`,
        hg: `<ul>
<li>Day 2: reference type ko <b>by value</b> pass karne par reference copy hota hai, object nahi. Uski properties mein badlaav caller ko dikhte hain.</li>
<li>Day 5: <code>SaveChanges()</code> par DetectChanges current values ko snapshot se compare karta hai → entity Modified hai → sirf usi column ke saath <code>UPDATE ... SET [Name] = @p0 ...</code>.</li>
<li>Agar entity <code>AsNoTracking()</code> se aayi thi, ya aapne projection wala DTO badla, to compare karne ke liye koi snapshot nahi → kuch nahi jaata.</li>
</ul>
<p>Follow-up: "Agar helper <code>customer = new Customer { ... }</code> kare to?" — Ab sirf local parameter naye object ki taraf ishaara karta hai; tracked entity waisi hi rehti hai, isliye kuch naya save nahi hota.</p>
<p>TL angle: "helper" methods ke andar chhupe badlaav padhne waalon ko chaunkaate hain. Entity par hi saaf iraade wale methods rakho, jaise <code>customer.Rename(newName)</code> — Day 1 ka encapsulation.</p>`
      }
    },
    {
      id: "review-savechanges-in-loop",
      depth: "short",
      q: "In a code review you find a loop: for each id, <code>await db.Orders.FirstAsync(o =&gt; o.Id == id)</code>, set <code>Status</code>, then <code>await db.SaveChangesAsync()</code>. What do you comment?",
      answer: "That is N queries plus N SaveChanges calls. Load all orders with one Where(ids.Contains) query, change them, and call SaveChanges once — or use one ExecuteUpdate if no per-row C# logic is needed.",
      meaning: {
        hi: "यह N queries और N SaveChanges calls हैं। सारे orders एक Where(ids.Contains) query से load करो, बदलो, और SaveChanges एक बार call करो — या अगर हर row के लिए C# logic नहीं चाहिए तो एक ExecuteUpdate use करो।",
        hg: "Yeh N queries aur N SaveChanges calls hain. Saare orders ek Where(ids.Contains) query se load karo, badlo, aur SaveChanges ek baar call karo — ya agar har row ke liye C# logic nahi chahiye to ek ExecuteUpdate use karo."
      },
      explain: {
        en: `<ul>
<li>2N round trips, and N separate transactions — if the 50th order fails, the first 49 are already committed.</li>
<li>Better: <code>var orders = await db.Orders.Where(o =&gt; ids.Contains(o.Id)).ToListAsync();</code> → one SELECT with an <code>IN</code> filter; change the objects in memory; one <code>SaveChangesAsync()</code> → one transaction (Day 5).</li>
<li>If the job is only "set this Status for these ids" with no per-row rules: <code>ExecuteUpdateAsync(s =&gt; s.SetProperty(o =&gt; o.Status, "Shipped"))</code> — one UPDATE, but it skips the change tracker and SaveChanges logic (Day 6).</li>
<li>Also: <code>FirstAsync</code> throws if an id does not exist. Decide whether a missing id is a bug (throw) or normal (skip and report).</li>
</ul>
<p>Follow-up: "What if there are 50,000 ids?" — Very long lists make very large SQL; send them in batches (for example with <code>Chunk</code>, Day 4).</p>`,
        hi: `<ul>
<li>2N round trips, और N अलग-अलग transactions — अगर 50वाँ order fail हुआ, तो पहले 49 पहले ही commit हो चुके हैं।</li>
<li>बेहतर: <code>var orders = await db.Orders.Where(o =&gt; ids.Contains(o.Id)).ToListAsync();</code> → <code>IN</code> filter वाला एक SELECT; objects को memory में बदलो; एक <code>SaveChangesAsync()</code> → एक transaction (Day 5)।</li>
<li>अगर काम सिर्फ़ "इन ids का यह Status set करो" है और हर row के लिए कोई rule नहीं: <code>ExecuteUpdateAsync(s =&gt; s.SetProperty(o =&gt; o.Status, "Shipped"))</code> — एक UPDATE, पर यह change tracker और SaveChanges logic को छोड़ देता है (Day 6)।</li>
<li>साथ ही: id न मिले तो <code>FirstAsync</code> throw करता है। तय करो कि missing id bug है (throw) या normal है (skip करके report करो)।</li>
</ul>
<p>Follow-up: "अगर 50,000 ids हों तो?" — बहुत लंबी lists बहुत बड़ा SQL बनाती हैं; उन्हें batches में भेजो (जैसे <code>Chunk</code> से, Day 4)।</p>`,
        hg: `<ul>
<li>2N round trips, aur N alag-alag transactions — agar 50vaan order fail hua, to pehle 49 pehle hi commit ho chuke hain.</li>
<li>Behtar: <code>var orders = await db.Orders.Where(o =&gt; ids.Contains(o.Id)).ToListAsync();</code> → <code>IN</code> filter wala ek SELECT; objects ko memory mein badlo; ek <code>SaveChangesAsync()</code> → ek transaction (Day 5).</li>
<li>Agar kaam sirf "in ids ka yeh Status set karo" hai aur har row ke liye koi rule nahi: <code>ExecuteUpdateAsync(s =&gt; s.SetProperty(o =&gt; o.Status, "Shipped"))</code> — ek UPDATE, par yeh change tracker aur SaveChanges logic ko chhod deta hai (Day 6).</li>
<li>Saath hi: id na mile to <code>FirstAsync</code> throw karta hai. Tay karo ki missing id bug hai (throw) ya normal hai (skip karke report karo).</li>
</ul>
<p>Follow-up: "Agar 50,000 ids hon to?" — Bahut lambi lists bahut bada SQL banaati hain; unhe batches mein bhejo (jaise <code>Chunk</code> se, Day 4).</p>`
      }
    },
    {
      id: "lock-vs-concurrency-token",
      depth: "short",
      q: "To stop two requests from selling the same last item, a developer wraps the stock update in a C# <code>lock</code>. Is that enough?",
      answer: "No. A lock protects one process only, so two app instances bypass it, and you cannot await inside it. Use the database: a concurrency token, or an atomic UPDATE with WHERE Stock > 0.",
      meaning: {
        hi: "नहीं। lock सिर्फ़ एक process को बचाता है, इसलिए app के दो instances उसे bypass कर देते हैं, और उसके अंदर await नहीं कर सकते। Database से काम लो: concurrency token, या WHERE Stock > 0 वाला atomic UPDATE।",
        hg: "Nahi. lock sirf ek process ko bachaata hai, isliye app ke do instances use bypass kar dete hain, aur uske andar await nahi kar sakte. Database se kaam lo: concurrency token, ya WHERE Stock > 0 wala atomic UPDATE."
      },
      explain: {
        en: `<ul>
<li><code>lock</code> works on an object inside <b>one</b> process. Behind a load balancer, or with two containers, each instance has its own lock (Day 3).</li>
<li><code>await</code> inside <code>lock</code> is compile error CS1996. A <code>SemaphoreSlim</code> allows awaiting, but it still protects only one instance.</li>
<li>Database options (Day 6): a concurrency token (<code>[Timestamp]</code>) → the second writer gets <code>DbUpdateConcurrencyException</code> and retries or tells the user; or <code>db.Products.Where(p =&gt; p.Id == id &amp;&amp; p.Stock &gt; 0).ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Stock, p =&gt; p.Stock - 1))</code> — 1 row = sold, 0 rows = out of stock.</li>
</ul>
<p>Follow-up: "So when is a lock fine?" — For in-memory state of a single process, like a local cache. For shared data in a database, let the database be the referee.</p>`,
        hi: `<ul>
<li><code>lock</code> <b>एक</b> process के अंदर किसी object पर काम करता है। Load balancer के पीछे, या दो containers में, हर instance का अपना lock होता है (Day 3)।</li>
<li><code>lock</code> के अंदर <code>await</code> compile error CS1996 है। <code>SemaphoreSlim</code> में await कर सकते हैं, पर वो भी सिर्फ़ एक instance को बचाता है।</li>
<li>Database वाले options (Day 6): concurrency token (<code>[Timestamp]</code>) → दूसरे writer को <code>DbUpdateConcurrencyException</code> मिलता है और वो retry करता है या user को बताता है; या <code>db.Products.Where(p =&gt; p.Id == id &amp;&amp; p.Stock &gt; 0).ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Stock, p =&gt; p.Stock - 1))</code> — 1 row = बिक गया, 0 rows = stock ख़त्म।</li>
</ul>
<p>Follow-up: "तो lock कब ठीक है?" — एक process की in-memory state के लिए, जैसे local cache। Database में shared data के लिए database को ही referee बनने दो।</p>`,
        hg: `<ul>
<li><code>lock</code> <b>ek</b> process ke andar kisi object par kaam karta hai. Load balancer ke peeche, ya do containers mein, har instance ka apna lock hota hai (Day 3).</li>
<li><code>lock</code> ke andar <code>await</code> compile error CS1996 hai. <code>SemaphoreSlim</code> mein await kar sakte hain, par woh bhi sirf ek instance ko bachaata hai.</li>
<li>Database wale options (Day 6): concurrency token (<code>[Timestamp]</code>) → doosre writer ko <code>DbUpdateConcurrencyException</code> milta hai aur woh retry karta hai ya user ko batata hai; ya <code>db.Products.Where(p =&gt; p.Id == id &amp;&amp; p.Stock &gt; 0).ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Stock, p =&gt; p.Stock - 1))</code> — 1 row = bik gaya, 0 rows = stock khatam.</li>
</ul>
<p>Follow-up: "To lock kab theek hai?" — Ek process ki in-memory state ke liye, jaise local cache. Database mein shared data ke liye database ko hi referee banne do.</p>`
      }
    },
    {
      id: "dispose-injected-dbcontext",
      depth: "short",
      q: "Should you wrap an injected DbContext in a <code>using</code> block?",
      answer: "No. The DI container created it, so it disposes it at the end of the request scope. Use using only for contexts you create yourself — with new or IDbContextFactory.CreateDbContext().",
      meaning: {
        hi: "नहीं। उसे DI container ने बनाया है, इसलिए request scope के अंत में वही उसे dispose करता है। using सिर्फ़ उन contexts के लिए जो आप खुद बनाते हो — new से या IDbContextFactory.CreateDbContext() से।",
        hg: "Nahi. Use DI container ne banaya hai, isliye request scope ke ant mein wahi use dispose karta hai. using sirf un contexts ke liye jo aap khud banaate ho — new se ya IDbContextFactory.CreateDbContext() se."
      },
      explain: {
        en: `<ul>
<li>The rule from Day 3: <b>whoever creates a disposable object owns it</b>. For injected services, that is the DI container — scoped services are disposed when the request scope ends.</li>
<li>If you dispose it yourself, the next use in the same request (another service, a filter) throws <code>ObjectDisposedException</code>.</li>
<li>In background jobs (Day 5): <code>using var db = factory.CreateDbContext();</code> — you created it, so you dispose it, one context per unit of work.</li>
</ul>
<p>Follow-up: "Why does disposing a DbContext matter at all?" — Disposing releases its tracked entities and returns any open connection to the pool. Short-lived, disposed contexts keep memory and connections under control.</p>`,
        hi: `<ul>
<li>Day 3 का नियम: <b>जो disposable object बनाता है, वही उसका मालिक है</b>। Injected services के लिए वो DI container है — scoped services request scope ख़त्म होने पर dispose होती हैं।</li>
<li>अगर आप खुद dispose करो, तो उसी request में अगला use (कोई दूसरी service, कोई filter) <code>ObjectDisposedException</code> फेंकता है।</li>
<li>Background jobs में (Day 5): <code>using var db = factory.CreateDbContext();</code> — आपने बनाया, तो आप ही dispose करो, हर unit of work का एक context।</li>
</ul>
<p>Follow-up: "DbContext को dispose करना ज़रूरी क्यों है?" — Dispose उसकी tracked entities छोड़ देता है और कोई खुला connection pool को लौटा देता है। कम समय चलने वाले, dispose किए गए contexts memory और connections को काबू में रखते हैं।</p>`,
        hg: `<ul>
<li>Day 3 ka niyam: <b>jo disposable object banata hai, wahi uska maalik hai</b>. Injected services ke liye woh DI container hai — scoped services request scope khatam hone par dispose hoti hain.</li>
<li>Agar aap khud dispose karo, to usi request mein agla use (koi doosri service, koi filter) <code>ObjectDisposedException</code> phenkta hai.</li>
<li>Background jobs mein (Day 5): <code>using var db = factory.CreateDbContext();</code> — aapne banaya, to aap hi dispose karo, har unit of work ka ek context.</li>
</ul>
<p>Follow-up: "DbContext ko dispose karna zaroori kyon hai?" — Dispose uski tracked entities chhod deta hai aur koi khula connection pool ko lauta deta hai. Kam samay chalne wale, dispose kiye gaye contexts memory aur connections ko kaabu mein rakhte hain.</p>`
      }
    },
    {
      id: "records-dto-vs-entity",
      depth: "short",
      q: "Would you use records for DTOs? And for EF Core entities?",
      answer: "For DTOs, yes: concise, immutable, value equality. For tracked entities, usually not: EF changes entities in place and tracks them by identity, which fights record value equality and with-copies.",
      meaning: {
        hi: "DTOs के लिए हाँ: छोटे, immutable, value equality वाले। Tracked entities के लिए आमतौर पर नहीं: EF entities को उसी जगह बदलता है और identity से track करता है, जो record की value equality और with-copies से टकराता है।",
        hg: "DTOs ke liye haan: chhote, immutable, value equality wale. Tracked entities ke liye aamtaur par nahi: EF entities ko usi jagah badalta hai aur identity se track karta hai, jo record ki value equality aur with-copies se takraata hai."
      },
      explain: {
        en: `<ul>
<li>DTOs and API contracts: <code>public record OrderDto(int Id, string Customer, decimal Total);</code> — one line, a readable <code>ToString()</code>, and equality by value (handy in tests). A DTO projection (Day 6) fits naturally.</li>
<li>Entities: the change tracker keeps <b>one object per row</b> and you change that object (load → change → save, Day 5). A <code>with</code> copy is a <b>new, untracked</b> object, so its changes are not saved; value equality can also confuse code that expects identity, like a <code>HashSet</code> of entities.</li>
<li>Record equality is shallow (Day 3): a <code>List</code> property is compared by reference.</li>
</ul>
<p>TL angle: a simple team rule — records at the API boundary, classes for entities, and a projection to map between them.</p>`,
        hi: `<ul>
<li>DTOs और API contracts: <code>public record OrderDto(int Id, string Customer, decimal Total);</code> — एक line, पढ़ने लायक <code>ToString()</code>, और value से equality (tests में काम की)। DTO projection (Day 6) इसमें आराम से फ़िट होता है।</li>
<li>Entities: change tracker <b>हर row का एक object</b> रखता है और आप उसी object को बदलते हो (load → change → save, Day 5)। <code>with</code> से बनी copy एक <b>नया, untracked</b> object है, इसलिए उसके बदलाव save नहीं होते; value equality उस code को भी उलझा सकती है जो identity की उम्मीद करता है, जैसे entities का <code>HashSet</code>।</li>
<li>Record equality shallow है (Day 3): <code>List</code> property reference से compare होती है।</li>
</ul>
<p>TL angle: team के लिए आसान नियम — API boundary पर records, entities के लिए classes, और बीच में map करने के लिए projection।</p>`,
        hg: `<ul>
<li>DTOs aur API contracts: <code>public record OrderDto(int Id, string Customer, decimal Total);</code> — ek line, padhne laayak <code>ToString()</code>, aur value se equality (tests mein kaam ki). DTO projection (Day 6) ismein aaraam se fit hota hai.</li>
<li>Entities: change tracker <b>har row ka ek object</b> rakhta hai aur aap usi object ko badalte ho (load → change → save, Day 5). <code>with</code> se bani copy ek <b>naya, untracked</b> object hai, isliye uske badlaav save nahi hote; value equality us code ko bhi uljha sakti hai jo identity ki ummeed karta hai, jaise entities ka <code>HashSet</code>.</li>
<li>Record equality shallow hai (Day 3): <code>List</code> property reference se compare hoti hai.</li>
</ul>
<p>TL angle: team ke liye aasaan niyam — API boundary par records, entities ke liye classes, aur beech mein map karne ke liye projection.</p>`
      }
    },
    {
      id: "oop-in-aspnet-ef-service",
      depth: "detailed",
      q: "Where do the four OOP pillars show up in a typical ASP.NET Core + EF Core service?",
      answer: "Encapsulation: entities with private setters and methods like order.Cancel(). Abstraction: interfaces like IOrderService. Inheritance: AppDbContext : DbContext. Polymorphism: DI picks the implementation behind an interface, and lazy-loading proxies override virtual navigations.",
      meaning: {
        hi: "Encapsulation: private setters और order.Cancel() जैसे methods वाली entities। Abstraction: IOrderService जैसे interfaces। Inheritance: AppDbContext : DbContext। Polymorphism: DI interface के पीछे का implementation चुनता है, और lazy-loading proxies virtual navigations को override करते हैं।",
        hg: "Encapsulation: private setters aur order.Cancel() jaise methods wali entities. Abstraction: IOrderService jaise interfaces. Inheritance: AppDbContext : DbContext. Polymorphism: DI interface ke peeche ka implementation chunta hai, aur lazy-loading proxies virtual navigations ko override karte hain."
      },
      explain: {
        en: `<ul>
<li><b>Encapsulation</b>: <code>public decimal Total { get; private set; }</code> plus an <code>AddLine(...)</code> method that recalculates it — the rules live with the data. EF Core can map private setters and backing fields.</li>
<li><b>Abstraction</b>: controllers depend on <code>IOrderService</code>, not on SQL or EF details.</li>
<li><b>Inheritance</b>: framework base classes designed for it — <code>DbContext</code>, <code>ControllerBase</code>, <code>BackgroundService</code>, custom exception types.</li>
<li><b>Polymorphism</b>: the same <code>IPaymentGateway.PayAsync()</code> call runs a UPI or a card implementation chosen by DI; EF's lazy-loading proxies are generated subclasses that <code>override</code> your <code>virtual</code> navigations.</li>
<li><b>Composition</b>: the service <b>has</b> a DbContext, a logger and a gateway, injected through its constructor (Day 1).</li>
</ul>
<p>TL angle: interviewers like this answer because it connects textbook OOP to the code you ship every day. Keep one real example from your own project ready.</p>`,
        hi: `<ul>
<li><b>Encapsulation</b>: <code>public decimal Total { get; private set; }</code> और उसे दोबारा calculate करने वाला <code>AddLine(...)</code> method — rules data के साथ रहते हैं। EF Core private setters और backing fields को map कर सकता है।</li>
<li><b>Abstraction</b>: controllers <code>IOrderService</code> पर depend करते हैं, SQL या EF की details पर नहीं।</li>
<li><b>Inheritance</b>: इसी के लिए बनी framework base classes — <code>DbContext</code>, <code>ControllerBase</code>, <code>BackgroundService</code>, custom exception types।</li>
<li><b>Polymorphism</b>: वही <code>IPaymentGateway.PayAsync()</code> call, DI के चुने हुए UPI या card implementation को चलाता है; EF के lazy-loading proxies generated subclasses हैं जो आपके <code>virtual</code> navigations को <code>override</code> करते हैं।</li>
<li><b>Composition</b>: service के <b>पास</b> DbContext, logger और gateway हैं, जो constructor से inject होते हैं (Day 1)।</li>
</ul>
<p>TL angle: interviewers को यह जवाब पसंद आता है क्योंकि यह किताबी OOP को उस code से जोड़ता है जो आप रोज़ ship करते हो। अपने project का एक असली example तैयार रखो।</p>`,
        hg: `<ul>
<li><b>Encapsulation</b>: <code>public decimal Total { get; private set; }</code> aur use dobara calculate karne wala <code>AddLine(...)</code> method — rules data ke saath rehte hain. EF Core private setters aur backing fields ko map kar sakta hai.</li>
<li><b>Abstraction</b>: controllers <code>IOrderService</code> par depend karte hain, SQL ya EF ki details par nahi.</li>
<li><b>Inheritance</b>: isi ke liye bani framework base classes — <code>DbContext</code>, <code>ControllerBase</code>, <code>BackgroundService</code>, custom exception types.</li>
<li><b>Polymorphism</b>: wahi <code>IPaymentGateway.PayAsync()</code> call, DI ke chune hue UPI ya card implementation ko chalata hai; EF ke lazy-loading proxies generated subclasses hain jo aapke <code>virtual</code> navigations ko <code>override</code> karte hain.</li>
<li><b>Composition</b>: service ke <b>paas</b> DbContext, logger aur gateway hain, jo constructor se inject hote hain (Day 1).</li>
</ul>
<p>TL angle: interviewers ko yeh jawaab pasand aata hai kyunki yeh kitaabi OOP ko us code se jodta hai jo aap roz ship karte ho. Apne project ka ek asli example taiyaar rakho.</p>`
      }
    },
    {
      id: "lazy-proxies-need-virtual",
      depth: "detailed",
      q: "Why must navigation properties be <code>virtual</code> for EF Core lazy-loading proxies?",
      answer: "UseLazyLoadingProxies creates a runtime subclass of each entity that overrides the navigation getters to load data on first access. Only virtual members can be overridden, so a non-virtual navigation makes EF throw.",
      meaning: {
        hi: "UseLazyLoadingProxies हर entity की runtime subclass बनाता है जो navigation getters को override करके पहली access पर data load करती है। Override सिर्फ़ virtual members का हो सकता है, इसलिए non-virtual navigation पर EF throw करता है।",
        hg: "UseLazyLoadingProxies har entity ki runtime subclass banata hai jo navigation getters ko override karke pehli access par data load karti hai. Override sirf virtual members ka ho sakta hai, isliye non-virtual navigation par EF throw karta hai."
      },
      explain: {
        en: `<ul>
<li>This is Day 1 polymorphism at work: your code holds a <code>Customer</code> reference, but the object is a proxy subclass, so its overridden getter runs — <b>override follows the object</b>.</li>
<li>Without <code>virtual</code>, EF Core throws <code>InvalidOperationException</code> when it builds the model: "Property 'Customer.Orders' is not virtual ... 'UseLazyLoadingProxies' requires only the navigation properties be virtual." (checked on EF Core 9 for this tutorial).</li>
<li>Setup: the <code>Microsoft.EntityFrameworkCore.Proxies</code> package + <code>UseLazyLoadingProxies()</code>.</li>
<li>Day 5 reminder: lazy loading hides queries — N+1 in loops, surprise loads during JSON serialization. Most web APIs prefer <code>Include</code> or projections.</li>
</ul>
<p>Follow-up: "Is there lazy loading without proxies?" — Yes, by injecting <code>ILazyLoader</code> into the entity, but then the entity depends on EF Core.</p>`,
        hi: `<ul>
<li>यह Day 1 का polymorphism है: आपके code के पास <code>Customer</code> reference है, पर object एक proxy subclass है, इसलिए उसका overridden getter चलता है — <b>override object के पीछे चलता है</b>।</li>
<li><code>virtual</code> के बिना EF Core model बनाते समय <code>InvalidOperationException</code> फेंकता है: "Property 'Customer.Orders' is not virtual ... 'UseLazyLoadingProxies' requires only the navigation properties be virtual." (इस tutorial के लिए EF Core 9 पर check किया)।</li>
<li>Setup: <code>Microsoft.EntityFrameworkCore.Proxies</code> package + <code>UseLazyLoadingProxies()</code>।</li>
<li>Day 5 की याद: lazy loading queries को छुपाता है — loops में N+1, JSON serialization के दौरान अचानक loads। ज़्यादातर web APIs <code>Include</code> या projections पसंद करती हैं।</li>
</ul>
<p>Follow-up: "क्या proxies के बिना lazy loading होता है?" — हाँ, entity में <code>ILazyLoader</code> inject करके, पर तब entity EF Core पर depend करने लगती है।</p>`,
        hg: `<ul>
<li>Yeh Day 1 ka polymorphism hai: aapke code ke paas <code>Customer</code> reference hai, par object ek proxy subclass hai, isliye uska overridden getter chalta hai — <b>override object ke peeche chalta hai</b>.</li>
<li><code>virtual</code> ke bina EF Core model banaate samay <code>InvalidOperationException</code> phenkta hai: "Property 'Customer.Orders' is not virtual ... 'UseLazyLoadingProxies' requires only the navigation properties be virtual." (is tutorial ke liye EF Core 9 par check kiya).</li>
<li>Setup: <code>Microsoft.EntityFrameworkCore.Proxies</code> package + <code>UseLazyLoadingProxies()</code>.</li>
<li>Day 5 ki yaad: lazy loading queries ko chhupaata hai — loops mein N+1, JSON serialization ke dauraan achaanak loads. Zyaadatar web APIs <code>Include</code> ya projections pasand karti hain.</li>
</ul>
<p>Follow-up: "Kya proxies ke bina lazy loading hota hai?" — Haan, entity mein <code>ILazyLoader</code> inject karke, par tab entity EF Core par depend karne lagti hai.</p>`
      }
    },
    {
      id: "savechanges-exceptions-api",
      depth: "detailed",
      q: "Which exceptions can <code>SaveChanges()</code> throw, and how do you turn them into good API responses?",
      answer: "DbUpdateConcurrencyException for a concurrency conflict, and DbUpdateException for database errors like a unique-key violation. Catch them where you can decide, or map them in the global handler — typically 409 Conflict — and log once.",
      meaning: {
        hi: "Concurrency conflict पर DbUpdateConcurrencyException, और unique-key violation जैसी database errors पर DbUpdateException। जहाँ फ़ैसला ले सको वहाँ catch करो, या global handler में map करो — आमतौर पर 409 Conflict — और एक ही बार log करो।",
        hg: "Concurrency conflict par DbUpdateConcurrencyException, aur unique-key violation jaisi database errors par DbUpdateException. Jahan faisla le sako wahan catch karo, ya global handler mein map karo — aamtaur par 409 Conflict — aur ek hi baar log karo."
      },
      explain: {
        en: `<ul>
<li><code>DbUpdateConcurrencyException</code> <b>derives from</b> <code>DbUpdateException</code>, so its <code>catch</code> must come <b>first</b> (Day 3). The compiler even rejects a specific catch placed after a more general one: error <b>CS0160</b>.</li>
<li>A unique index violation on SQL Server arrives as <code>DbUpdateException</code> whose <code>InnerException</code> is a <code>SqlException</code> with <code>Number</code> 2601 or 2627 → usually 409 Conflict ("this email is already registered").</li>
<li>Better still: check expected cases first (does the email exist?) and return a normal result; keep the database constraint as the final safety net for races.</li>
<li>Unexpected errors → one global handler (<code>IExceptionHandler</code>) that returns ProblemDetails with 500 and logs once — no catch-log-rethrow in every layer (Day 3).</li>
</ul>
<p>Follow-up: "After a failed SaveChanges, can you keep using the context?" — The entities keep their states, so you can fix and retry (Day 5); if the request is in a confusing state, a fresh context is simpler.</p>`,
        hi: `<ul>
<li><code>DbUpdateConcurrencyException</code>, <code>DbUpdateException</code> से <b>derive होता है</b>, इसलिए उसका <code>catch</code> <b>पहले</b> आना चाहिए (Day 3)। ज़्यादा general catch के बाद रखा specific catch compiler मानता ही नहीं: error <b>CS0160</b>।</li>
<li>SQL Server पर unique index violation एक <code>DbUpdateException</code> बनकर आता है जिसका <code>InnerException</code> <code>SqlException</code> है, <code>Number</code> 2601 या 2627 के साथ → आमतौर पर 409 Conflict ("यह email पहले से registered है")।</li>
<li>और बेहतर: अपेक्षित cases पहले check करो (क्या email मौजूद है?) और normal result लौटाओ; races के लिए database constraint को आख़िरी safety net रहने दो।</li>
<li>अनपेक्षित errors → एक global handler (<code>IExceptionHandler</code>) जो 500 के साथ ProblemDetails लौटाए और एक बार log करे — हर layer में catch-log-rethrow नहीं (Day 3)।</li>
</ul>
<p>Follow-up: "SaveChanges fail होने के बाद क्या context use करते रह सकते हैं?" — Entities अपनी states रखती हैं, इसलिए ठीक करके retry कर सकते हो (Day 5); अगर request उलझी हुई state में है, तो नया context आसान है।</p>`,
        hg: `<ul>
<li><code>DbUpdateConcurrencyException</code>, <code>DbUpdateException</code> se <b>derive hota hai</b>, isliye uska <code>catch</code> <b>pehle</b> aana chahiye (Day 3). Zyada general catch ke baad rakha specific catch compiler maanta hi nahi: error <b>CS0160</b>.</li>
<li>SQL Server par unique index violation ek <code>DbUpdateException</code> bankar aata hai jiska <code>InnerException</code> <code>SqlException</code> hai, <code>Number</code> 2601 ya 2627 ke saath → aamtaur par 409 Conflict ("yeh email pehle se registered hai").</li>
<li>Aur behtar: apekshit cases pehle check karo (kya email maujood hai?) aur normal result lautaao; races ke liye database constraint ko aakhri safety net rehne do.</li>
<li>Anapekshit errors → ek global handler (<code>IExceptionHandler</code>) jo 500 ke saath ProblemDetails lautaaye aur ek baar log kare — har layer mein catch-log-rethrow nahi (Day 3).</li>
</ul>
<p>Follow-up: "SaveChanges fail hone ke baad kya context use karte reh sakte hain?" — Entities apni states rakhti hain, isliye theek karke retry kar sakte ho (Day 5); agar request uljhi hui state mein hai, to naya context aasaan hai.</p>`
      }
    },
    {
      id: "ef-in-background-service",
      depth: "detailed",
      q: "How do you use EF Core safely inside a <code>BackgroundService</code>?",
      answer: "A BackgroundService is a singleton, so do not inject DbContext directly. Create a scope (IServiceScopeFactory) or a context (IDbContextFactory) per unit of work, dispose it, pass the stoppingToken, and stay async all the way.",
      meaning: {
        hi: "BackgroundService एक singleton है, इसलिए उसमें DbContext सीधे inject मत करो। हर unit of work के लिए एक scope (IServiceScopeFactory) या एक context (IDbContextFactory) बनाओ, dispose करो, stoppingToken पास करो, और पूरी तरह async रहो।",
        hg: "BackgroundService ek singleton hai, isliye usmein DbContext seedhe inject mat karo. Har unit of work ke liye ek scope (IServiceScopeFactory) ya ek context (IDbContextFactory) banao, dispose karo, stoppingToken pass karo, aur poori tarah async raho."
      },
      explain: {
        en: `<ul>
<li>Hosted services are registered as singletons. A scoped DbContext injected there is a <b>captive dependency</b> — one context for the app's whole life; in Development, scope validation fails at startup (Day 5).</li>
<li>Pattern: <code>await using var scope = scopeFactory.CreateAsyncScope(); var db = scope.ServiceProvider.GetRequiredService&lt;AppDbContext&gt;();</code> per loop pass or per message — or <code>await using var db = await factory.CreateDbContextAsync(stoppingToken);</code>.</li>
<li>Pass <code>stoppingToken</code> to every async call (<code>ToListAsync(stoppingToken)</code>, <code>Task.Delay(..., stoppingToken)</code>) so shutdown is clean (Day 3).</li>
<li>Catch and log exceptions inside the loop: since .NET 6, an unhandled exception in <code>ExecuteAsync</code> stops the host by default.</li>
<li>Large batches: a fresh context (or <code>ChangeTracker.Clear()</code>) per chunk, or a set-based <code>ExecuteUpdate</code> (Day 6).</li>
</ul>
<p>TL angle: this is a classic production bug — the job works in testing and slowly eats memory in production. Review every hosted service for how it gets its DbContext.</p>`,
        hi: `<ul>
<li>Hosted services singletons के रूप में register होती हैं। वहाँ inject किया गया scoped DbContext एक <b>captive dependency</b> है — app की पूरी उम्र के लिए एक context; Development में scope validation startup पर fail होता है (Day 5)।</li>
<li>Pattern: हर loop चक्कर या हर message के लिए <code>await using var scope = scopeFactory.CreateAsyncScope(); var db = scope.ServiceProvider.GetRequiredService&lt;AppDbContext&gt;();</code> — या <code>await using var db = await factory.CreateDbContextAsync(stoppingToken);</code>।</li>
<li>हर async call में <code>stoppingToken</code> पास करो (<code>ToListAsync(stoppingToken)</code>, <code>Task.Delay(..., stoppingToken)</code>) ताकि shutdown साफ़-सुथरा हो (Day 3)।</li>
<li>Loop के अंदर exceptions catch करके log करो: .NET 6 से, <code>ExecuteAsync</code> में unhandled exception default रूप से host को रोक देता है।</li>
<li>बड़े batches: हर chunk के लिए नया context (या <code>ChangeTracker.Clear()</code>), या set-based <code>ExecuteUpdate</code> (Day 6)।</li>
</ul>
<p>TL angle: यह एक classic production bug है — job testing में चलती है और production में धीरे-धीरे memory खाती है। हर hosted service को review करो कि उसे DbContext कैसे मिलता है।</p>`,
        hg: `<ul>
<li>Hosted services singletons ke roop mein register hoti hain. Wahan inject kiya gaya scoped DbContext ek <b>captive dependency</b> hai — app ki poori umar ke liye ek context; Development mein scope validation startup par fail hota hai (Day 5).</li>
<li>Pattern: har loop chakkar ya har message ke liye <code>await using var scope = scopeFactory.CreateAsyncScope(); var db = scope.ServiceProvider.GetRequiredService&lt;AppDbContext&gt;();</code> — ya <code>await using var db = await factory.CreateDbContextAsync(stoppingToken);</code>.</li>
<li>Har async call mein <code>stoppingToken</code> pass karo (<code>ToListAsync(stoppingToken)</code>, <code>Task.Delay(..., stoppingToken)</code>) taaki shutdown saaf-suthra ho (Day 3).</li>
<li>Loop ke andar exceptions catch karke log karo: .NET 6 se, <code>ExecuteAsync</code> mein unhandled exception default roop se host ko rok deta hai.</li>
<li>Bade batches: har chunk ke liye naya context (ya <code>ChangeTracker.Clear()</code>), ya set-based <code>ExecuteUpdate</code> (Day 6).</li>
</ul>
<p>TL angle: yeh ek classic production bug hai — job testing mein chalti hai aur production mein dheere-dheere memory khaati hai. Har hosted service ko review karo ki use DbContext kaise milta hai.</p>`
      }
    },
    {
      id: "import-job-memory-growth",
      depth: "detailed",
      q: "A nightly import job using EF Core gets slower and uses more memory with every batch. What do you check?",
      answer: "Usually one long-lived DbContext tracking every row, so memory and DetectChanges time keep growing. Use a fresh context or ChangeTracker.Clear() per batch, AsNoTracking for reads, and set-based ExecuteUpdate where possible.",
      meaning: {
        hi: "आमतौर पर एक लंबा चलने वाला DbContext जो हर row track करता है, इसलिए memory और DetectChanges का time बढ़ता जाता है। हर batch के लिए नया context या ChangeTracker.Clear(), reads के लिए AsNoTracking, और जहाँ हो सके set-based ExecuteUpdate।",
        hg: "Aamtaur par ek lamba chalne wala DbContext jo har row track karta hai, isliye memory aur DetectChanges ka time badhta jaata hai. Har batch ke liye naya context ya ChangeTracker.Clear(), reads ke liye AsNoTracking, aur jahan ho sake set-based ExecuteUpdate."
      },
      explain: {
        en: `<ul>
<li>Day 5: every tracked entity costs memory, and <code>SaveChanges()</code> runs DetectChanges over <b>all</b> of them → each batch is slower than the one before.</li>
<li>Day 4: a <code>ToList()</code> of a whole table before filtering, or a list that keeps every row "for later", keeps everything alive.</li>
<li>Day 3: big arrays and strings (85,000 bytes or more) go to the LOH, which is collected only with Gen 2; a static cache or event handlers that keep growing are real leaks. A memory profiler or <code>dotnet-counters</code> shows which one it is.</li>
<li>Fix pattern: read in pages (<code>Where(o =&gt; o.Id &gt; lastId).OrderBy(o =&gt; o.Id).Take(1000)</code>), process, <code>SaveChanges()</code>, then a new context or <code>ChangeTracker.Clear()</code>.</li>
</ul>
<p>Follow-up: "Why not one SaveChanges at the very end?" — One huge transaction holds locks for longer and loses everything on a single failure; batches give progress you can resume.</p>`,
        hi: `<ul>
<li>Day 5: हर tracked entity memory लेती है, और <code>SaveChanges()</code> उन <b>सब</b> पर DetectChanges चलाता है → हर batch पिछले से धीमा।</li>
<li>Day 4: filter से पहले पूरी table का <code>ToList()</code>, या "बाद के लिए" हर row रखने वाली list, सब कुछ ज़िंदा रखती है।</li>
<li>Day 3: बड़े arrays और strings (85,000 bytes या ज़्यादा) LOH में जाते हैं, जो सिर्फ़ Gen 2 के साथ collect होता है; लगातार बढ़ता static cache या event handlers असली leaks हैं। Memory profiler या <code>dotnet-counters</code> बताता है कि कौन सा है।</li>
<li>Fix pattern: pages में पढ़ो (<code>Where(o =&gt; o.Id &gt; lastId).OrderBy(o =&gt; o.Id).Take(1000)</code>), process करो, <code>SaveChanges()</code>, फिर नया context या <code>ChangeTracker.Clear()</code>।</li>
</ul>
<p>Follow-up: "सबसे आख़िर में एक ही SaveChanges क्यों नहीं?" — एक विशाल transaction locks को ज़्यादा देर पकड़ता है और एक failure पर सब कुछ खो देता है; batches से progress मिलती है जिसे आगे से resume कर सकते हो।</p>`,
        hg: `<ul>
<li>Day 5: har tracked entity memory leti hai, aur <code>SaveChanges()</code> un <b>sab</b> par DetectChanges chalata hai → har batch pichhle se dheema.</li>
<li>Day 4: filter se pehle poori table ka <code>ToList()</code>, ya "baad ke liye" har row rakhne wali list, sab kuch zinda rakhti hai.</li>
<li>Day 3: bade arrays aur strings (85,000 bytes ya zyada) LOH mein jaate hain, jo sirf Gen 2 ke saath collect hota hai; lagaataar badhta static cache ya event handlers asli leaks hain. Memory profiler ya <code>dotnet-counters</code> batata hai ki kaunsa hai.</li>
<li>Fix pattern: pages mein padho (<code>Where(o =&gt; o.Id &gt; lastId).OrderBy(o =&gt; o.Id).Take(1000)</code>), process karo, <code>SaveChanges()</code>, phir naya context ya <code>ChangeTracker.Clear()</code>.</li>
</ul>
<p>Follow-up: "Sabse aakhir mein ek hi SaveChanges kyon nahi?" — Ek vishaal transaction locks ko zyada der pakadta hai aur ek failure par sab kuch kho deta hai; batches se progress milti hai jise aage se resume kar sakte ho.</p>`
      }
    },
    {
      id: "stream-vs-tolistasync",
      depth: "detailed",
      q: "<code>ToListAsync()</code> or <code>AsAsyncEnumerable()</code> with <code>await foreach</code> — when would you stream EF Core results?",
      answer: "ToListAsync loads every row into a list first. AsAsyncEnumerable with await foreach handles rows one by one, so memory stays flat — good for exports. Add AsNoTracking, or the tracker keeps every row anyway.",
      meaning: {
        hi: "ToListAsync पहले हर row को list में load करता है। await foreach के साथ AsAsyncEnumerable rows को एक-एक करके संभालता है, इसलिए memory सपाट रहती है — exports के लिए अच्छा। AsNoTracking जोड़ो, वरना tracker फिर भी हर row रख लेता है।",
        hg: "ToListAsync pehle har row ko list mein load karta hai. await foreach ke saath AsAsyncEnumerable rows ko ek-ek karke sambhaalta hai, isliye memory sapaat rehti hai — exports ke liye achchha. AsNoTracking jodo, warna tracker phir bhi har row rakh leta hai."
      },
      explain: {
        en: `<ul>
<li>Day 3 (<code>IAsyncEnumerable&lt;T&gt;</code> and <code>await foreach</code>) + Day 4 (streaming vs buffering) + Day 6 (performance) in one question.</li>
<li>The connection and its data reader stay open until the loop ends — keep the work per row short, and avoid slow external calls inside the loop.</li>
<li>Caveat from Day 6: when a retrying execution strategy is on, EF buffers the results itself, so you lose the streaming benefit.</li>
<li>ASP.NET Core actions can return <code>IAsyncEnumerable&lt;T&gt;</code>; the JSON is then streamed to the client (Day 3).</li>
<li>For screens and normal API lists, <code>ToListAsync()</code> on a <b>paged</b> query is simpler and perfectly fine.</li>
</ul>
<p>Follow-up: "Does streaming make the query faster?" — No, the SQL is the same; it changes memory use in your app, not the work in the database.</p>`,
        hi: `<ul>
<li>एक सवाल में Day 3 (<code>IAsyncEnumerable&lt;T&gt;</code> और <code>await foreach</code>) + Day 4 (streaming बनाम buffering) + Day 6 (performance)।</li>
<li>Loop ख़त्म होने तक connection और उसका data reader खुले रहते हैं — हर row का काम छोटा रखो, और loop के अंदर धीमी external calls से बचो।</li>
<li>Day 6 की चेतावनी: retrying execution strategy चालू हो तो EF results को खुद buffer करता है, इसलिए streaming का फ़ायदा चला जाता है।</li>
<li>ASP.NET Core actions <code>IAsyncEnumerable&lt;T&gt;</code> लौटा सकते हैं; तब JSON client को stream होता है (Day 3)।</li>
<li>Screens और normal API lists के लिए <b>paged</b> query पर <code>ToListAsync()</code> आसान है और बिल्कुल ठीक है।</li>
</ul>
<p>Follow-up: "क्या streaming से query तेज़ होती है?" — नहीं, SQL वही है; यह आपके app में memory का use बदलता है, database का काम नहीं।</p>`,
        hg: `<ul>
<li>Ek sawaal mein Day 3 (<code>IAsyncEnumerable&lt;T&gt;</code> aur <code>await foreach</code>) + Day 4 (streaming banaam buffering) + Day 6 (performance).</li>
<li>Loop khatam hone tak connection aur uska data reader khule rehte hain — har row ka kaam chhota rakho, aur loop ke andar dheemi external calls se bacho.</li>
<li>Day 6 ki chetaavni: retrying execution strategy chaalu ho to EF results ko khud buffer karta hai, isliye streaming ka faayda chala jaata hai.</li>
<li>ASP.NET Core actions <code>IAsyncEnumerable&lt;T&gt;</code> lauta sakte hain; tab JSON client ko stream hota hai (Day 3).</li>
<li>Screens aur normal API lists ke liye <b>paged</b> query par <code>ToListAsync()</code> aasaan hai aur bilkul theek hai.</li>
</ul>
<p>Follow-up: "Kya streaming se query tez hoti hai?" — Nahi, SQL wahi hai; yeh aapke app mein memory ka use badalta hai, database ka kaam nahi.</p>`
      }
    },
    {
      id: "lookup-inside-loop",
      depth: "detailed",
      q: "You match 10,000 orders to their customers with <code>customers.First(c =&gt; c.Id == o.CustomerId)</code> inside a loop. What is wrong, and how do you fix it?",
      answer: "Each First scans the customer list, so the work is orders × customers. Build a Dictionary once with ToDictionary(c => c.Id) and look up with TryGetValue — about one step per order.",
      meaning: {
        hi: "हर First पूरी customer list scan करता है, इसलिए काम orders × customers हो जाता है। ToDictionary(c => c.Id) से एक बार Dictionary बनाओ और TryGetValue से ढूँढो — हर order के लिए लगभग एक step।",
        hg: "Har First poori customer list scan karta hai, isliye kaam orders × customers ho jaata hai. ToDictionary(c => c.Id) se ek baar Dictionary banao aur TryGetValue se dhoondho — har order ke liye lagbhag ek step."
      },
      explain: {
        en: `<ul>
<li>10,000 orders × 5,000 customers = up to 50 million comparisons. A <code>Dictionary</code> lookup is O(1) on average (Day 2), so it becomes about 10,000 lookups plus one pass to build the dictionary.</li>
<li><code>ToDictionary</code> throws on a duplicate key — good when keys must be unique (Day 4). For "many items per key", use <code>ToLookup</code>.</li>
<li><code>First</code> also throws when a customer is missing; <code>TryGetValue</code> makes the "not found" case explicit.</li>
<li>If both lists come from the database, a navigation or a join inside one EF query can do the matching in SQL instead (Day 5–6).</li>
</ul>
<p>TL angle: "a LINQ lookup inside a loop" is one of the most common performance red flags in code review — easy to spot, easy to fix, and the fix is also more readable.</p>`,
        hi: `<ul>
<li>10,000 orders × 5,000 customers = 5 करोड़ तक comparisons। <code>Dictionary</code> lookup औसतन O(1) है (Day 2), इसलिए यह लगभग 10,000 lookups बनता है, और dictionary बनाने के लिए एक pass।</li>
<li>Duplicate key पर <code>ToDictionary</code> throw करता है — अच्छा है जब keys unique होनी ही चाहिए (Day 4)। "एक key पर कई items" के लिए <code>ToLookup</code> use करो।</li>
<li>Customer न मिले तो <code>First</code> भी throw करता है; <code>TryGetValue</code> "नहीं मिला" वाले case को साफ़ दिखाता है।</li>
<li>अगर दोनों lists database से आती हैं, तो एक EF query के अंदर navigation या join SQL में ही matching कर सकता है (Day 5–6)।</li>
</ul>
<p>TL angle: "loop के अंदर LINQ lookup" code review का सबसे common performance red flag है — पकड़ना आसान, ठीक करना आसान, और fix पढ़ने में भी बेहतर होता है।</p>`,
        hg: `<ul>
<li>10,000 orders × 5,000 customers = 5 crore tak comparisons. <code>Dictionary</code> lookup ausatan O(1) hai (Day 2), isliye yeh lagbhag 10,000 lookups banta hai, aur dictionary banaane ke liye ek pass.</li>
<li>Duplicate key par <code>ToDictionary</code> throw karta hai — achchha hai jab keys unique honi hi chahiye (Day 4). "Ek key par kai items" ke liye <code>ToLookup</code> use karo.</li>
<li>Customer na mile to <code>First</code> bhi throw karta hai; <code>TryGetValue</code> "nahi mila" wale case ko saaf dikhata hai.</li>
<li>Agar dono lists database se aati hain, to ek EF query ke andar navigation ya join SQL mein hi matching kar sakta hai (Day 5–6).</li>
</ul>
<p>TL angle: "loop ke andar LINQ lookup" code review ka sabse common performance red flag hai — pakadna aasaan, theek karna aasaan, aur fix padhne mein bhi behtar hota hai.</p>`
      }
    },
    {
      id: "testing-ef-code",
      depth: "detailed",
      q: "How do you test code that uses EF Core? Mock the DbContext, use the in-memory provider, or a real database?",
      answer: "Trade-off. Mock an interface to test business logic. Test query code against the real engine, for example SQL Server in a container; SQLite in-memory is faster but behaves differently.",
      meaning: {
        hi: "यह trade-off है। Business logic test करने के लिए interface को mock करो। Query code को असली engine पर test करो, जैसे container में SQL Server; SQLite in-memory तेज़ है पर अलग तरह से behave करता है।",
        hg: "Yeh trade-off hai. Business logic test karne ke liye interface ko mock karo. Query code ko asli engine par test karo, jaise container mein SQL Server; SQLite in-memory tez hai par alag tarah se behave karta hai."
      },
      explain: {
        en: `<ul>
<li><b>Mocking DbSet/DbContext</b> is painful and misleading: the LINQ then runs in memory (Day 4), so a query that EF cannot translate still "passes".</li>
<li><b>EF Core in-memory provider</b>: Microsoft's testing guidance advises against it for testing — it is not a relational database (no SQL is generated, no relational constraints, no real transactions).</li>
<li><b>SQLite in-memory</b>: a real relational engine and fast — this tutorial's EF puzzles use it — but its SQL and types differ from SQL Server.</li>
<li><b>Real SQL Server</b>, for example started in Docker by the Testcontainers library (<code>Testcontainers.MsSql</code> package): slower to set up, but closest to production — use it for integration tests of the data layer.</li>
<li>Design helps more than tools: keep business rules in classes that do not depend on EF (Day 1 encapsulation + composition), and keep queries in a thin data layer.</li>
</ul>
<p>Follow-up: "Should we add a repository just to mock EF?" — A trade-off: it makes service unit tests easy but adds a layer; many teams unit-test services with fakes and test the data layer against a real database.</p>`,
        hi: `<ul>
<li><b>DbSet/DbContext को mock करना</b> तकलीफ़देह है और धोखा देता है: तब LINQ memory में चलता है (Day 4), इसलिए जो query EF translate नहीं कर सकता वो भी "pass" हो जाती है।</li>
<li><b>EF Core in-memory provider</b>: Microsoft की testing guidance इसे testing के लिए use न करने की सलाह देती है — यह relational database नहीं है (कोई SQL नहीं बनता, relational constraints नहीं, असली transactions नहीं)।</li>
<li><b>SQLite in-memory</b>: असली relational engine और तेज़ — इस tutorial के EF puzzles इसी को use करते हैं — पर इसका SQL और types SQL Server से अलग हैं।</li>
<li><b>असली SQL Server</b>, जैसे Testcontainers library (<code>Testcontainers.MsSql</code> package) से Docker में चलाया गया: setup धीमा, पर production के सबसे क़रीब — data layer के integration tests के लिए इसे use करो।</li>
<li>Tools से ज़्यादा design मदद करता है: business rules को ऐसी classes में रखो जो EF पर depend न करें (Day 1 का encapsulation + composition), और queries को एक पतली data layer में।</li>
</ul>
<p>Follow-up: "क्या सिर्फ़ EF को mock करने के लिए repository जोड़ें?" — यह trade-off है: service unit tests आसान होते हैं पर एक layer बढ़ती है; कई teams services को fakes से unit-test करती हैं और data layer को असली database पर test करती हैं।</p>`,
        hg: `<ul>
<li><b>DbSet/DbContext ko mock karna</b> takleefdeh hai aur dhokha deta hai: tab LINQ memory mein chalta hai (Day 4), isliye jo query EF translate nahi kar sakta woh bhi "pass" ho jaati hai.</li>
<li><b>EF Core in-memory provider</b>: Microsoft ki testing guidance ise testing ke liye use na karne ki salaah deti hai — yeh relational database nahi hai (koi SQL nahi banta, relational constraints nahi, asli transactions nahi).</li>
<li><b>SQLite in-memory</b>: asli relational engine aur tez — is tutorial ke EF puzzles isi ko use karte hain — par iska SQL aur types SQL Server se alag hain.</li>
<li><b>Asli SQL Server</b>, jaise Testcontainers library (<code>Testcontainers.MsSql</code> package) se Docker mein chalaaya gaya: setup dheema, par production ke sabse kareeb — data layer ke integration tests ke liye ise use karo.</li>
<li>Tools se zyada design madad karta hai: business rules ko aisi classes mein rakho jo EF par depend na karein (Day 1 ka encapsulation + composition), aur queries ko ek patli data layer mein.</li>
</ul>
<p>Follow-up: "Kya sirf EF ko mock karne ke liye repository jodein?" — Yeh trade-off hai: service unit tests aasaan hote hain par ek layer badhti hai; kai teams services ko fakes se unit-test karti hain aur data layer ko asli database par test karti hain.</p>`
      }
    },
    {
      id: "nullable-types-in-ef-model",
      depth: "detailed",
      q: "How do C# nullable reference types affect your EF Core model?",
      answer: "With NRT enabled, EF Core reads them: string becomes a NOT NULL column and string? becomes NULL. So turning NRT on in an existing project can change your next migration — review it.",
      meaning: {
        hi: "NRT चालू हो तो EF Core उन्हें पढ़ता है: string NOT NULL column बनता है और string? NULL। इसलिए पुराने project में NRT चालू करने से आपका अगला migration बदल सकता है — उसे review करो।",
        hg: "NRT chaalu ho to EF Core unhe padhta hai: string NOT NULL column banta hai aur string? NULL. Isliye purane project mein NRT chaalu karne se aapka agla migration badal sakta hai — use review karo."
      },
      explain: {
        en: `<ul>
<li>Day 3: NRT is compile-time only. Day 5: EF Core uses the same annotations to decide <b>required vs optional</b>. Checked for this tutorial: <code>string Name</code> → <code>"Name" TEXT NOT NULL</code>, <code>string? Nick</code> → <code>"Nick" TEXT NULL</code>.</li>
<li>Entities often show warning <b>CS8618</b> ("Non-nullable property 'Name' must contain a non-null value when exiting constructor"). Fixes: <code>= "";</code>, the <code>required</code> modifier (C# 11), or a constructor. Initialize collection navigations: <code>= [];</code>.</li>
<li>Before NRT, a plain <code>string</code> property was optional (NULL). After you enable NRT, the same property becomes required, so the next migration may alter columns to NOT NULL — and fail on existing NULL data.</li>
<li>NRT is not a runtime check: if old data has NULL in a column your model calls required, your property can still be null at runtime.</li>
</ul>
<p>Follow-up: "Should an existing project turn NRT on?" — Yes, gradually (file by file with <code>#nullable enable</code>), and review every migration it causes.</p>`,
        hi: `<ul>
<li>Day 3: NRT सिर्फ़ compile-time है। Day 5: EF Core इन्हीं annotations से तय करता है कि property <b>required है या optional</b>। इस tutorial के लिए check किया: <code>string Name</code> → <code>"Name" TEXT NOT NULL</code>, <code>string? Nick</code> → <code>"Nick" TEXT NULL</code>।</li>
<li>Entities में अक्सर warning <b>CS8618</b> आती है ("Non-nullable property 'Name' must contain a non-null value when exiting constructor")। Fixes: <code>= "";</code>, <code>required</code> modifier (C# 11), या constructor। Collection navigations को initialize करो: <code>= [];</code>।</li>
<li>NRT से पहले साधारण <code>string</code> property optional (NULL) थी। NRT चालू करने के बाद वही property required बन जाती है, इसलिए अगला migration columns को NOT NULL में बदल सकता है — और पुराने NULL data पर fail हो सकता है।</li>
<li>NRT runtime check नहीं है: अगर पुराने data में उस column में NULL है जिसे आपका model required कहता है, तो runtime पर आपकी property फिर भी null हो सकती है।</li>
</ul>
<p>Follow-up: "क्या पुराने project में NRT चालू करना चाहिए?" — हाँ, धीरे-धीरे (<code>#nullable enable</code> से file दर file), और उससे बनने वाला हर migration review करो।</p>`,
        hg: `<ul>
<li>Day 3: NRT sirf compile-time hai. Day 5: EF Core inhi annotations se tay karta hai ki property <b>required hai ya optional</b>. Is tutorial ke liye check kiya: <code>string Name</code> → <code>"Name" TEXT NOT NULL</code>, <code>string? Nick</code> → <code>"Nick" TEXT NULL</code>.</li>
<li>Entities mein aksar warning <b>CS8618</b> aati hai ("Non-nullable property 'Name' must contain a non-null value when exiting constructor"). Fixes: <code>= "";</code>, <code>required</code> modifier (C# 11), ya constructor. Collection navigations ko initialize karo: <code>= [];</code>.</li>
<li>NRT se pehle saadharan <code>string</code> property optional (NULL) thi. NRT chaalu karne ke baad wahi property required ban jaati hai, isliye agla migration columns ko NOT NULL mein badal sakta hai — aur purane NULL data par fail ho sakta hai.</li>
<li>NRT runtime check nahi hai: agar purane data mein us column mein NULL hai jise aapka model required kehta hai, to runtime par aapki property phir bhi null ho sakti hai.</li>
</ul>
<p>Follow-up: "Kya purane project mein NRT chaalu karna chahiye?" — Haan, dheere-dheere (<code>#nullable enable</code> se file dar file), aur usse banne wala har migration review karo.</p>`
      }
    },
    {
      id: "generic-repository-over-ef",
      depth: "detailed",
      q: "Do you add a generic repository (<code>IRepository&lt;T&gt;</code>) on top of EF Core? Why or why not?",
      answer: "It is a trade-off. DbSet&lt;T&gt; is already a generic repository and DbContext a unit of work. A thin generic layer often hides useful EF features; specific, query-focused methods usually serve teams better.",
      meaning: {
        hi: "यह trade-off है। DbSet&lt;T&gt; पहले से एक generic repository है और DbContext एक unit of work। पतली generic layer अक्सर EF के काम के features छुपा देती है; ख़ास, query पर focused methods आमतौर पर teams के लिए बेहतर रहते हैं।",
        hg: "Yeh trade-off hai. DbSet&lt;T&gt; pehle se ek generic repository hai aur DbContext ek unit of work. Patli generic layer aksar EF ke kaam ke features chhupa deti hai; khaas, query par focused methods aamtaur par teams ke liye behtar rehte hain."
      },
      explain: {
        en: `<ul>
<li><b>Day 2 view — generics</b>: <code>IRepository&lt;T&gt; where T : class</code> with <code>GetById</code>, <code>Add</code>, <code>Remove</code> looks nicely reusable.</li>
<li><b>Problems</b>: <code>IEnumerable&lt;T&gt; GetAll()</code> loads whole tables before any filter (Day 4); returning <code>IQueryable&lt;T&gt;</code> leaks EF anyway; <code>Include</code>, projections, <code>AsNoTracking</code> and <code>ExecuteUpdate</code> get lost or wrapped again (Day 5–6).</li>
<li><b>Arguments for</b>: one consistent seam for mocking, and a pattern the team already knows. Microsoft's .NET microservices architecture guide shows a repository per <b>aggregate</b> (for example <code>IOrderRepository</code>), not one generic repository for every table.</li>
<li><b>Middle path</b>: purpose-built methods such as <code>GetOrderSummaryAsync(id)</code> that return DTOs, with the DbContext used directly inside.</li>
</ul>
<p>TL angle: answer it as a trade-off, not a rule — "it depends on testing needs and team experience" — then say clearly what you would choose for this project and why.</p>`,
        hi: `<ul>
<li><b>Day 2 की नज़र से — generics</b>: <code>GetById</code>, <code>Add</code>, <code>Remove</code> वाला <code>IRepository&lt;T&gt; where T : class</code> बड़ा reusable लगता है।</li>
<li><b>Problems</b>: <code>IEnumerable&lt;T&gt; GetAll()</code> किसी भी filter से पहले पूरी tables load करता है (Day 4); <code>IQueryable&lt;T&gt;</code> लौटाने से EF वैसे भी बाहर आ जाता है; <code>Include</code>, projections, <code>AsNoTracking</code> और <code>ExecuteUpdate</code> खो जाते हैं या फिर से wrap करने पड़ते हैं (Day 5–6)।</li>
<li><b>पक्ष में तर्क</b>: mocking के लिए एक consistent seam, और ऐसा pattern जो team पहले से जानती है। Microsoft की .NET microservices architecture guide हर <b>aggregate</b> के लिए एक repository दिखाती है (जैसे <code>IOrderRepository</code>), हर table के लिए एक generic repository नहीं।</li>
<li><b>बीच का रास्ता</b>: <code>GetOrderSummaryAsync(id)</code> जैसे ख़ास methods जो DTOs लौटाएँ, और अंदर DbContext सीधे use हो।</li>
</ul>
<p>TL angle: इसे नियम नहीं, trade-off की तरह जवाब दो — "यह testing की ज़रूरत और team के अनुभव पर निर्भर है" — फिर साफ़ बताओ कि इस project के लिए आप क्या चुनोगे और क्यों।</p>`,
        hg: `<ul>
<li><b>Day 2 ki nazar se — generics</b>: <code>GetById</code>, <code>Add</code>, <code>Remove</code> wala <code>IRepository&lt;T&gt; where T : class</code> bada reusable lagta hai.</li>
<li><b>Problems</b>: <code>IEnumerable&lt;T&gt; GetAll()</code> kisi bhi filter se pehle poori tables load karta hai (Day 4); <code>IQueryable&lt;T&gt;</code> lautaane se EF waise bhi baahar aa jaata hai; <code>Include</code>, projections, <code>AsNoTracking</code> aur <code>ExecuteUpdate</code> kho jaate hain ya phir se wrap karne padte hain (Day 5–6).</li>
<li><b>Paksh mein tark</b>: mocking ke liye ek consistent seam, aur aisa pattern jo team pehle se jaanti hai. Microsoft ki .NET microservices architecture guide har <b>aggregate</b> ke liye ek repository dikhati hai (jaise <code>IOrderRepository</code>), har table ke liye ek generic repository nahi.</li>
<li><b>Beech ka raasta</b>: <code>GetOrderSummaryAsync(id)</code> jaise khaas methods jo DTOs lautaayein, aur andar DbContext seedhe use ho.</li>
</ul>
<p>TL angle: ise niyam nahi, trade-off ki tarah jawaab do — "yeh testing ki zaroorat aur team ke anubhav par nirbhar hai" — phir saaf batao ki is project ke liye aap kya chunoge aur kyon.</p>`
      }
    }
  ],
  puzzles: [
    {
      id: "override-new-in-linq",
      src: `List<Payment> payments = [new Upi(500), new Card(1000), new Card(250)];

Console.WriteLine(string.Join(", ", payments.Select(p => p.Label())));
Console.WriteLine($"Total fee: {payments.Sum(p => p.Fee())}");
Console.WriteLine(string.Join(", ", payments.OfType<Card>().Select(c => c.Label())));

public abstract class Payment(int amount)
{
    public int Amount { get; } = amount;
    public virtual int Fee() => 0;
    public string Label() => "Payment";
}

public class Upi(int amount) : Payment(amount)
{
    public new string Label() => "UPI";
}

public class Card(int amount) : Payment(amount)
{
    public override int Fee() => Amount * 2 / 100;
    public new string Label() => "Card";
}`,
      answer: "Payment, Payment, Payment\nTotal fee: 25\nCard, Card",
      explain: {
        en: `<ul>
<li>Days 1 + 4. In <code>payments.Select(p =&gt; p.Label())</code> the lambda parameter <code>p</code> is typed <code>Payment</code>. <code>Label()</code> is not virtual and the derived classes only <b>hide</b> it with <code>new</code> → the base version runs three times → <b>Payment, Payment, Payment</b>. <b>new follows the reference.</b></li>
<li><code>Fee()</code> is virtual. <code>Card</code> overrides it: 1000 × 2 / 100 = 20 and 250 × 2 / 100 = 5; <code>Upi</code> keeps the base 0 → <b>25</b>. <b>override follows the object.</b></li>
<li><code>OfType&lt;Card&gt;()</code> filters <b>and</b> changes the static type to <code>Card</code>, so now <code>c.Label()</code> binds to <code>Card.Label()</code> → <b>Card, Card</b>.</li>
<li>Lesson: LINQ does not change the Day 1 rules — the lambda parameter's type is just another "reference type" that decides for <code>new</code>.</li>
</ul>`,
        hi: `<ul>
<li>Days 1 + 4। <code>payments.Select(p =&gt; p.Label())</code> में lambda parameter <code>p</code> का type <code>Payment</code> है। <code>Label()</code> virtual नहीं है और derived classes उसे सिर्फ़ <code>new</code> से <b>hide</b> करती हैं → तीनों बार base version चलता है → <b>Payment, Payment, Payment</b>। <b>new reference के पीछे चलता है।</b></li>
<li><code>Fee()</code> virtual है। <code>Card</code> उसे override करता है: 1000 × 2 / 100 = 20 और 250 × 2 / 100 = 5; <code>Upi</code> base वाला 0 रखता है → <b>25</b>। <b>override object के पीछे चलता है।</b></li>
<li><code>OfType&lt;Card&gt;()</code> filter <b>भी</b> करता है और static type को <code>Card</code> भी बना देता है, इसलिए अब <code>c.Label()</code>, <code>Card.Label()</code> से bind होता है → <b>Card, Card</b>।</li>
<li>सीख: LINQ, Day 1 के नियम नहीं बदलता — lambda parameter का type भी बस एक "reference type" है जो <code>new</code> के लिए फ़ैसला करता है।</li>
</ul>`,
        hg: `<ul>
<li>Days 1 + 4. <code>payments.Select(p =&gt; p.Label())</code> mein lambda parameter <code>p</code> ka type <code>Payment</code> hai. <code>Label()</code> virtual nahi hai aur derived classes use sirf <code>new</code> se <b>hide</b> karti hain → teeno baar base version chalta hai → <b>Payment, Payment, Payment</b>. <b>new reference ke peeche chalta hai.</b></li>
<li><code>Fee()</code> virtual hai. <code>Card</code> use override karta hai: 1000 × 2 / 100 = 20 aur 250 × 2 / 100 = 5; <code>Upi</code> base wala 0 rakhta hai → <b>25</b>. <b>override object ke peeche chalta hai.</b></li>
<li><code>OfType&lt;Card&gt;()</code> filter <b>bhi</b> karta hai aur static type ko <code>Card</code> bhi bana deta hai, isliye ab <code>c.Label()</code>, <code>Card.Label()</code> se bind hota hai → <b>Card, Card</b>.</li>
<li>Seekh: LINQ, Day 1 ke niyam nahi badalta — lambda parameter ka type bhi bas ek "reference type" hai jo <code>new</code> ke liye faisla karta hai.</li>
</ul>`
      }
    },
    {
      id: "struct-vs-class-in-select",
      src: `var structs = new List<PointS> { new() { X = 1 }, new() { X = 2 } };
var classes = new List<PointC> { new() { X = 1 }, new() { X = 2 } };

var notRun = classes.Select(p => { p.X += 100; return p; });
Console.WriteLine($"Not enumerated: {string.Join(", ", classes.Select(p => p.X))}");

var structCopies = structs.Select(p => { p.X += 10; return p; }).ToList();
Console.WriteLine($"Struct source:  {string.Join(", ", structs.Select(p => p.X))}");
Console.WriteLine($"Struct result:  {string.Join(", ", structCopies.Select(p => p.X))}");

var classResult = classes.Select(p => { p.X += 10; return p; }).ToList();
Console.WriteLine($"Class source:   {string.Join(", ", classes.Select(p => p.X))}");

public struct PointS { public int X; }
public class PointC { public int X; }`,
      answer: "Not enumerated: 1, 2\nStruct source:  1, 2\nStruct result:  11, 12\nClass source:   11, 12",
      explain: {
        en: `<ul>
<li>Days 2 + 4. <b>Line 1</b>: <code>notRun</code> is a deferred query that nobody enumerates, so its lambda never runs → still <b>1, 2</b>.</li>
<li><b>Lines 2–3</b>: <code>PointS</code> is a struct. The lambda gets a <b>copy</b> of each item, changes the copy and returns it. The source list is untouched (<b>1, 2</b>); the new list holds the changed copies (<b>11, 12</b>).</li>
<li><b>Line 4</b>: <code>PointC</code> is a class. The lambda gets a <b>reference</b> to the same object, so <code>ToList()</code> runs it and the source objects themselves change → <b>11, 12</b>.</li>
<li>Lesson: changing items inside <code>Select</code> is a code-review red flag (Day 4) — the result depends on value vs reference type <b>and</b> on whether the query ever runs. Use a <code>foreach</code> for changes.</li>
</ul>`,
        hi: `<ul>
<li>Days 2 + 4। <b>Line 1</b>: <code>notRun</code> एक deferred query है जिसे कोई enumerate नहीं करता, इसलिए उसका lambda कभी नहीं चलता → अब भी <b>1, 2</b>।</li>
<li><b>Lines 2–3</b>: <code>PointS</code> एक struct है। Lambda को हर item की <b>copy</b> मिलती है, वो copy बदलता है और लौटाता है। Source list को कुछ नहीं होता (<b>1, 2</b>); नई list में बदली हुई copies हैं (<b>11, 12</b>)।</li>
<li><b>Line 4</b>: <code>PointC</code> एक class है। Lambda को उसी object का <b>reference</b> मिलता है, इसलिए <code>ToList()</code> उसे चलाता है और source objects खुद बदल जाते हैं → <b>11, 12</b>।</li>
<li>सीख: <code>Select</code> के अंदर items बदलना code review का red flag है (Day 4) — नतीजा value बनाम reference type पर <b>और</b> इस पर कि query कभी चली या नहीं, दोनों पर निर्भर है। बदलाव के लिए <code>foreach</code> use करो।</li>
</ul>`,
        hg: `<ul>
<li>Days 2 + 4. <b>Line 1</b>: <code>notRun</code> ek deferred query hai jise koi enumerate nahi karta, isliye uska lambda kabhi nahi chalta → ab bhi <b>1, 2</b>.</li>
<li><b>Lines 2–3</b>: <code>PointS</code> ek struct hai. Lambda ko har item ki <b>copy</b> milti hai, woh copy badalta hai aur lautaata hai. Source list ko kuch nahi hota (<b>1, 2</b>); nayi list mein badli hui copies hain (<b>11, 12</b>).</li>
<li><b>Line 4</b>: <code>PointC</code> ek class hai. Lambda ko usi object ka <b>reference</b> milta hai, isliye <code>ToList()</code> use chalata hai aur source objects khud badal jaate hain → <b>11, 12</b>.</li>
<li>Seekh: <code>Select</code> ke andar items badalna code review ka red flag hai (Day 4) — nateeja value banaam reference type par <b>aur</b> is par ki query kabhi chali ya nahi, dono par nirbhar hai. Badlaav ke liye <code>foreach</code> use karo.</li>
</ul>`
      }
    },
    {
      id: "lazy-tasks-run-twice",
      src: `int calls = 0;

async Task<int> GetPriceAsync(int id)
{
    calls++;
    await Task.Delay(10);
    return id * 10;
}

int[] ids = [1, 2, 3];

var lazyTasks = ids.Select(GetPriceAsync);
int[] prices = await Task.WhenAll(lazyTasks);
Console.WriteLine($"Sum = {prices.Sum()}, calls = {calls}");

int first = await lazyTasks.First();
Console.WriteLine($"First = {first}, calls = {calls}");

Task<int>[] tasks = ids.Select(GetPriceAsync).ToArray();
await Task.WhenAll(tasks);
int again = await tasks[0];
Console.WriteLine($"Array: first = {again}, calls = {calls}");`,
      answer: "Sum = 60, calls = 3\nFirst = 10, calls = 4\nArray: first = 10, calls = 7",
      explain: {
        en: `<ul>
<li>Days 3 + 4. <code>ids.Select(GetPriceAsync)</code> is a <b>deferred</b> query: it creates no tasks until someone enumerates it.</li>
<li><code>Task.WhenAll(lazyTasks)</code> enumerates it → 3 calls start → prices 10 + 20 + 30 → <b>Sum = 60, calls = 3</b>.</li>
<li><code>lazyTasks.First()</code> enumerates the query <b>again</b> → it calls <code>GetPriceAsync(1)</code> a fourth time and awaits that <b>new</b> task → <b>calls = 4</b>. Over HTTP or EF Core, that is a duplicate API call or query.</li>
<li><code>.ToArray()</code> materializes the tasks once (3 more calls → 7). <code>tasks[0]</code> is the same finished task, so awaiting it again starts nothing → <b>calls = 7</b>.</li>
<li>Why deterministic: <code>calls++</code> runs synchronously before the first <code>await</code>, during enumeration (Day 3: an async method runs synchronously until it awaits an unfinished task).</li>
</ul>`,
        hi: `<ul>
<li>Days 3 + 4। <code>ids.Select(GetPriceAsync)</code> एक <b>deferred</b> query है: जब तक कोई उसे enumerate न करे, वो कोई task नहीं बनाती।</li>
<li><code>Task.WhenAll(lazyTasks)</code> उसे enumerate करता है → 3 calls शुरू होती हैं → prices 10 + 20 + 30 → <b>Sum = 60, calls = 3</b>।</li>
<li><code>lazyTasks.First()</code> query को <b>फिर से</b> enumerate करता है → <code>GetPriceAsync(1)</code> चौथी बार call होता है और उस <b>नए</b> task को await किया जाता है → <b>calls = 4</b>। HTTP या EF Core पर यह duplicate API call या query है।</li>
<li><code>.ToArray()</code> tasks को एक बार materialize करता है (3 और calls → 7)। <code>tasks[0]</code> वही पूरा हो चुका task है, इसलिए उसे फिर await करने से कुछ शुरू नहीं होता → <b>calls = 7</b>।</li>
<li>Output पक्का क्यों है: <code>calls++</code> पहले <code>await</code> से पहले, enumeration के दौरान, synchronously चलता है (Day 3: async method तब तक synchronously चलता है जब तक किसी अधूरे task को await न करे)।</li>
</ul>`,
        hg: `<ul>
<li>Days 3 + 4. <code>ids.Select(GetPriceAsync)</code> ek <b>deferred</b> query hai: jab tak koi use enumerate na kare, woh koi task nahi banaati.</li>
<li><code>Task.WhenAll(lazyTasks)</code> use enumerate karta hai → 3 calls shuru hoti hain → prices 10 + 20 + 30 → <b>Sum = 60, calls = 3</b>.</li>
<li><code>lazyTasks.First()</code> query ko <b>phir se</b> enumerate karta hai → <code>GetPriceAsync(1)</code> chauthi baar call hota hai aur us <b>naye</b> task ko await kiya jaata hai → <b>calls = 4</b>. HTTP ya EF Core par yeh duplicate API call ya query hai.</li>
<li><code>.ToArray()</code> tasks ko ek baar materialize karta hai (3 aur calls → 7). <code>tasks[0]</code> wahi poora ho chuka task hai, isliye use phir await karne se kuch shuru nahi hota → <b>calls = 7</b>.</li>
<li>Output pakka kyon hai: <code>calls++</code> pehle <code>await</code> se pehle, enumeration ke dauraan, synchronously chalta hai (Day 3: async method tab tak synchronously chalta hai jab tak kisi adhoore task ko await na kare).</li>
</ul>`
      }
    },
    {
      id: "ienumerable-over-dbset",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    foreach (var price in new[] { 40, 80, 120, 150, 90 })
        setup.Products.Add(new Product { Price = price });
    setup.SaveChanges();
}

using var db = new ShopContext(options);

IQueryable<Product> query = db.Products;
int inSql = query.Where(p => p.Price > 100).Count();
Console.WriteLine($"IQueryable:  count = {inSql}, tracked = {db.ChangeTracker.Entries().Count()}");

IEnumerable<Product> sequence = db.Products;
int inMemory = sequence.Where(p => p.Price > 100).Count();
Console.WriteLine($"IEnumerable: count = {inMemory}, tracked = {db.ChangeTracker.Entries().Count()}");

public class Product
{
    public int Id { get; set; }
    public int Price { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
}`,
      answer: "IQueryable:  count = 2, tracked = 0\nIEnumerable: count = 2, tracked = 5",
      explain: {
        en: `<ul>
<li>Days 4 + 5. Same data, same lambda, same answer (2) — but very different work.</li>
<li><code>query</code> is <code>IQueryable</code> → <code>Queryable.Where</code> + <code>Count</code> become one <code>SELECT COUNT(*) ... WHERE "Price" &gt; 100</code>. Only a number comes back, no entity is created → <b>tracked = 0</b>.</li>
<li><code>sequence</code> is <code>IEnumerable</code> → <code>Enumerable.Where</code>: EF runs a <code>SELECT</code> of <b>all</b> rows, creates and tracks 5 <code>Product</code> objects, and C# filters them → <b>tracked = 5</b>.</li>
<li>With a million rows, the second line loads a million entities to count two. This is the mixed Q&amp;A "repository returns IEnumerable" in code.</li>
</ul>`,
        hi: `<ul>
<li>Days 4 + 5। वही data, वही lambda, वही जवाब (2) — पर काम बिल्कुल अलग।</li>
<li><code>query</code> एक <code>IQueryable</code> है → <code>Queryable.Where</code> + <code>Count</code> मिलकर एक <code>SELECT COUNT(*) ... WHERE "Price" &gt; 100</code> बनते हैं। सिर्फ़ एक number वापस आता है, कोई entity नहीं बनती → <b>tracked = 0</b>।</li>
<li><code>sequence</code> एक <code>IEnumerable</code> है → <code>Enumerable.Where</code>: EF <b>सारी</b> rows का <code>SELECT</code> चलाता है, 5 <code>Product</code> objects बनाकर track करता है, और C# उन्हें filter करता है → <b>tracked = 5</b>।</li>
<li>दस लाख rows हों तो दूसरी line दो गिनने के लिए दस लाख entities load करती है। यही mixed Q&amp;A "repository IEnumerable लौटाती है" code में है।</li>
</ul>`,
        hg: `<ul>
<li>Days 4 + 5. Wahi data, wahi lambda, wahi jawaab (2) — par kaam bilkul alag.</li>
<li><code>query</code> ek <code>IQueryable</code> hai → <code>Queryable.Where</code> + <code>Count</code> milkar ek <code>SELECT COUNT(*) ... WHERE "Price" &gt; 100</code> bante hain. Sirf ek number wapas aata hai, koi entity nahi banti → <b>tracked = 0</b>.</li>
<li><code>sequence</code> ek <code>IEnumerable</code> hai → <code>Enumerable.Where</code>: EF <b>saari</b> rows ka <code>SELECT</code> chalata hai, 5 <code>Product</code> objects banakar track karta hai, aur C# unhe filter karta hai → <b>tracked = 5</b>.</li>
<li>Das lakh rows hon to doosri line do ginne ke liye das lakh entities load karti hai. Yahi mixed Q&amp;A "repository IEnumerable lautaati hai" code mein hai.</li>
</ul>`
      }
    },
    {
      id: "entity-identity-two-contexts",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    setup.Customers.Add(new Customer { Name = "Asha" });
    setup.SaveChanges();
}

using var dbA = new ShopContext(options);
using var dbB = new ShopContext(options);

var a1 = dbA.Customers.First(c => c.Id == 1);
var a2 = dbA.Customers.First(c => c.Name == "Asha");
var b1 = dbB.Customers.First(c => c.Id == 1);

Console.WriteLine($"Same context:  {a1 == a2}");
Console.WriteLine($"Two contexts:  {a1 == b1}");
Console.WriteLine($"Same Id:       {a1.Id == b1.Id}");

var dtoA = dbA.Customers.Select(c => new CustomerDto(c.Id, c.Name)).First();
var dtoB = dbB.Customers.Select(c => new CustomerDto(c.Id, c.Name)).First();
Console.WriteLine($"Record DTOs:   {dtoA == dtoB}");

public record CustomerDto(int Id, string Name);

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`,
      answer: "Same context:  True\nTwo contexts:  False\nSame Id:       True\nRecord DTOs:   True",
      explain: {
        en: `<ul>
<li>Days 2 + 3 + 5. <code>a1</code> and <code>a2</code> come from the <b>same</b> context with two different queries. Identity resolution gives back the <b>same object</b> for the same row, and <code>==</code> on a class compares references → <b>True</b>.</li>
<li><code>b1</code> comes from <b>another</b> context, which builds its own object for the same row → a different reference → <b>False</b>, even though the Ids are equal → <b>True</b>.</li>
<li><code>CustomerDto</code> is a record, so <code>==</code> compares the <b>values</b> (Day 3) → two DTOs with Id 1 and "Asha" → <b>True</b>.</li>
<li>Lesson: compare entities by key (<code>a.Id == b.Id</code>), not with <code>==</code>, when they can come from different contexts — for example one cached, one freshly loaded.</li>
</ul>`,
        hi: `<ul>
<li>Days 2 + 3 + 5। <code>a1</code> और <code>a2</code> दो अलग queries से, पर <b>एक ही</b> context से आते हैं। Identity resolution एक row के लिए <b>वही object</b> वापस देता है, और class पर <code>==</code> references compare करता है → <b>True</b>।</li>
<li><code>b1</code> <b>दूसरे</b> context से आता है, जो उसी row के लिए अपना object बनाता है → अलग reference → <b>False</b>, भले ही Ids बराबर हों → <b>True</b>।</li>
<li><code>CustomerDto</code> एक record है, इसलिए <code>==</code> <b>values</b> compare करता है (Day 3) → Id 1 और "Asha" वाले दो DTOs → <b>True</b>।</li>
<li>सीख: जब entities अलग contexts से आ सकती हों — जैसे एक cache से, एक ताज़ा load की हुई — तो उन्हें <code>==</code> से नहीं, key से compare करो (<code>a.Id == b.Id</code>)।</li>
</ul>`,
        hg: `<ul>
<li>Days 2 + 3 + 5. <code>a1</code> aur <code>a2</code> do alag queries se, par <b>ek hi</b> context se aate hain. Identity resolution ek row ke liye <b>wahi object</b> wapas deta hai, aur class par <code>==</code> references compare karta hai → <b>True</b>.</li>
<li><code>b1</code> <b>doosre</b> context se aata hai, jo usi row ke liye apna object banata hai → alag reference → <b>False</b>, bhale hi Ids barabar hon → <b>True</b>.</li>
<li><code>CustomerDto</code> ek record hai, isliye <code>==</code> <b>values</b> compare karta hai (Day 3) → Id 1 aur "Asha" wale do DTOs → <b>True</b>.</li>
<li>Seekh: jab entities alag contexts se aa sakti hon — jaise ek cache se, ek taaza load ki hui — to unhe <code>==</code> se nahi, key se compare karo (<code>a.Id == b.Id</code>).</li>
</ul>`
      }
    },
    {
      id: "rollback-keeps-tracker",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using var db = new ShopContext(options);
db.Database.EnsureCreated();

var order = new Order { Item = "Pen" };
try
{
    PlaceOrder(db, order, paymentOk: false);
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"Caught: {ex.Message}");
}

Console.WriteLine($"Rows in database: {db.Orders.Count()}");
Console.WriteLine($"Tracker says: {db.Entry(order).State}");

static void PlaceOrder(ShopContext db, Order order, bool paymentOk)
{
    using var tx = db.Database.BeginTransaction();
    try
    {
        db.Orders.Add(order);
        Console.WriteLine($"Saved inside tx: {db.SaveChanges()}");
        if (!paymentOk) throw new InvalidOperationException("Payment failed");
        tx.Commit();
    }
    finally
    {
        Console.WriteLine("finally runs");
    }
}

public class Order
{
    public int Id { get; set; }
    public string Item { get; set; } = "";
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Order> Orders => Set<Order>();
}`,
      answer: "Saved inside tx: 1\nfinally runs\nCaught: Payment failed\nRows in database: 0\nTracker says: Unchanged",
      explain: {
        en: `<ul>
<li>Days 3 + 5 + 6. Inside the transaction, <code>SaveChanges()</code> sends the INSERT and returns <b>1</b> — but nothing is committed yet.</li>
<li>The exception is thrown before <code>Commit()</code>. On its way out, the method's <code>finally</code> runs first (<b>finally runs</b>), then leaving the method disposes <code>tx</code> → <b>rollback</b>, and only then does the caller's <code>catch</code> print.</li>
<li><code>db.Orders.Count()</code> asks the database → the row was rolled back → <b>0</b>.</li>
<li>But the change tracker still says <b>Unchanged</b>: <code>SaveChanges()</code> already accepted the changes, and EF does <b>not</b> undo tracked state when a transaction rolls back. The context now believes something the database does not.</li>
<li>Lesson: after a rollback, throw the context away (or call <code>ChangeTracker.Clear()</code>) and start the unit of work again.</li>
</ul>`,
        hi: `<ul>
<li>Days 3 + 5 + 6। Transaction के अंदर <code>SaveChanges()</code> INSERT भेजता है और <b>1</b> लौटाता है — पर अभी कुछ commit नहीं हुआ।</li>
<li>Exception <code>Commit()</code> से पहले फेंका जाता है। बाहर निकलते समय पहले method का <code>finally</code> चलता है (<b>finally runs</b>), फिर method से निकलने पर <code>tx</code> dispose होता है → <b>rollback</b>, और उसके बाद ही caller का <code>catch</code> print करता है।</li>
<li><code>db.Orders.Count()</code> database से पूछता है → row rollback हो चुकी है → <b>0</b>।</li>
<li>लेकिन change tracker अब भी <b>Unchanged</b> कहता है: <code>SaveChanges()</code> बदलाव पहले ही accept कर चुका था, और transaction rollback होने पर EF tracked state को <b>वापस नहीं</b> करता। अब context वो मान रहा है जो database में है ही नहीं।</li>
<li>सीख: rollback के बाद उस context को फेंक दो (या <code>ChangeTracker.Clear()</code> call करो) और unit of work फिर से शुरू करो।</li>
</ul>`,
        hg: `<ul>
<li>Days 3 + 5 + 6. Transaction ke andar <code>SaveChanges()</code> INSERT bhejta hai aur <b>1</b> lautaata hai — par abhi kuch commit nahi hua.</li>
<li>Exception <code>Commit()</code> se pehle phenka jaata hai. Baahar nikalte samay pehle method ka <code>finally</code> chalta hai (<b>finally runs</b>), phir method se nikalne par <code>tx</code> dispose hota hai → <b>rollback</b>, aur uske baad hi caller ka <code>catch</code> print karta hai.</li>
<li><code>db.Orders.Count()</code> database se poochta hai → row rollback ho chuki hai → <b>0</b>.</li>
<li>Lekin change tracker ab bhi <b>Unchanged</b> kehta hai: <code>SaveChanges()</code> badlaav pehle hi accept kar chuka tha, aur transaction rollback hone par EF tracked state ko <b>wapas nahi</b> karta. Ab context woh maan raha hai jo database mein hai hi nahi.</li>
<li>Seekh: rollback ke baad us context ko phenk do (ya <code>ChangeTracker.Clear()</code> call karo) aur unit of work phir se shuru karo.</li>
</ul>`
      }
    }
  ],
  revision: {
    en: [
      "<b>override follows the object, new follows the reference.</b>",
      "<b>Favor composition (has-a) over inheritance (is-a)</b> — dependency injection is composition.",
      "A <b>value type</b> copies the data; a <b>reference type</b> copies the reference — two variables, one object.",
      "<code>await</code> <b>frees the thread while you wait — it does not create a new one.</b>",
      "<code>throw;</code> keeps the stack trace; <code>throw ex;</code> resets it.",
      "A LINQ query runs <b>only when enumerated</b> — and runs <b>again</b> every time you enumerate it.",
      "<b>IQueryable</b> becomes SQL; after <code>AsEnumerable()</code> or <code>ToList()</code>, everything runs <b>in memory</b>.",
      "<b>DbContext</b> is Scoped, short-lived and not thread-safe — one per request or unit of work.",
      "<b>N+1</b>: count the queries, read the SQL, load in one go (<code>Include</code>, projection or one batch query).",
      "<b>Optimistic concurrency</b>: a rowversion in the UPDATE's WHERE; 0 rows → <code>DbUpdateConcurrencyException</code>."
    ],
    meaning: {
      hi: [
        "override object के पीछे चलता है, new reference के पीछे।",
        "Inheritance (is-a) से ज़्यादा composition (has-a) को चुनो — dependency injection भी composition ही है।",
        "Value type data copy करता है; reference type reference copy करता है — दो variables, एक object।",
        "await इंतज़ार के दौरान thread को free करता है — नया thread नहीं बनाता।",
        "throw; stack trace बचाता है; throw ex; उसे reset कर देता है।",
        "LINQ query सिर्फ़ enumerate करने पर चलती है — और हर बार enumerate करने पर फिर से चलती है।",
        "IQueryable SQL बनता है; AsEnumerable() या ToList() के बाद सब कुछ memory में चलता है।",
        "DbContext Scoped, कम समय चलने वाला और thread-safe नहीं है — हर request या unit of work का एक।",
        "N+1: queries गिनो, SQL पढ़ो, एक बार में load करो (Include, projection या एक batch query)।",
        "Optimistic concurrency: UPDATE के WHERE में rowversion; 0 rows → DbUpdateConcurrencyException।"
      ],
      hg: [
        "override object ke peeche chalta hai, new reference ke peeche.",
        "Inheritance (is-a) se zyada composition (has-a) ko chuno — dependency injection bhi composition hi hai.",
        "Value type data copy karta hai; reference type reference copy karta hai — do variables, ek object.",
        "await intezaar ke dauraan thread ko free karta hai — naya thread nahi banata.",
        "throw; stack trace bachaata hai; throw ex; use reset kar deta hai.",
        "LINQ query sirf enumerate karne par chalti hai — aur har baar enumerate karne par phir se chalti hai.",
        "IQueryable SQL banta hai; AsEnumerable() ya ToList() ke baad sab kuch memory mein chalta hai.",
        "DbContext Scoped, kam samay chalne wala aur thread-safe nahi hai — har request ya unit of work ka ek.",
        "N+1: queries gino, SQL padho, ek baar mein load karo (Include, projection ya ek batch query).",
        "Optimistic concurrency: UPDATE ke WHERE mein rowversion; 0 rows → DbUpdateConcurrencyException."
      ]
    }
  }
};
