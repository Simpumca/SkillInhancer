// Day 2 — C# Core. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 2,
  title: {
    en: "C# Core — types, memory, strings, generics, collections, delegates",
    hi: "C# Core — types, memory, strings, generics, collections, delegates (C# की बुनियाद)",
    hg: "C# Core — types, memory, strings, generics, collections, delegates"
  },
  summary: {
    en: `<p>Today is about the <b>everyday building blocks</b> of C#. You use all of them already — the goal is to explain <i>why</i> they behave the way they do, because interviewers test exactly that with "what will this print?" questions.</p>
<ul>
<li><b>Value vs reference types</b> — copy the data or share the address? Where they live in memory (stack/heap — more precise than the usual myth).</li>
<li><b>Boxing / unboxing</b> — the hidden copy when a value type becomes an <code>object</code>.</li>
<li><b>string vs StringBuilder</b> and <b>immutability</b> — why strings never change, and how to build them efficiently.</li>
<li><b>Generics</b> and <b>collections</b> — type-safe reusable code; picking the right collection (List, Dictionary, HashSet, Queue, read-only, immutable, concurrent).</li>
<li><b>Delegates, events, lambdas</b> and <b>extension methods</b> — the features LINQ and ASP.NET Core are built on.</li>
</ul>
<p>One line to remember for the whole day: <b>a value type copies the data, a reference type copies the address.</b></p>`,
    hi: `<p>आज का दिन C# के <b>रोज़ के building blocks</b> के बारे में है। ये सब आप पहले से use करते हो — goal यह है कि आप समझा सको कि ये ऐसे behave <i>क्यों</i> करते हैं, क्योंकि interviewers "यह क्या print करेगा?" वाले सवालों से यही test करते हैं।</p>
<ul>
<li><b>Value vs reference types</b> — data की copy या address share? Memory में ये कहाँ रहते हैं (stack/heap — आम myth से ज़्यादा सही तरीके से)।</li>
<li><b>Boxing / unboxing</b> — जब value type <code>object</code> बनता है तो छुपी हुई copy।</li>
<li><b>string vs StringBuilder</b> और <b>immutability</b> — string कभी क्यों नहीं बदलती, और उसे efficiently कैसे बनाएँ।</li>
<li><b>Generics</b> और <b>collections</b> — type-safe reusable code; सही collection चुनना (List, Dictionary, HashSet, Queue, read-only, immutable, concurrent)।</li>
<li><b>Delegates, events, lambdas</b> और <b>extension methods</b> — वो features जिन पर LINQ और ASP.NET Core बने हैं।</li>
</ul>
<p>पूरे दिन की एक line याद रखो: <b>value type data की copy देता है, reference type address की copy।</b></p>`,
    hg: `<p>Aaj ka din C# ke <b>roz ke building blocks</b> ke baare mein hai. Yeh sab aap pehle se use karte ho — goal yeh hai ki aap samjha sako ki yeh aise behave <i>kyun</i> karte hain, kyunki interviewers "yeh kya print karega?" wale sawaalon se yahi test karte hain.</p>
<ul>
<li><b>Value vs reference types</b> — data ki copy ya address share? Memory mein yeh kahan rehte hain (stack/heap — aam myth se zyada sahi tareeke se).</li>
<li><b>Boxing / unboxing</b> — jab value type <code>object</code> banta hai to chhupi hui copy.</li>
<li><b>string vs StringBuilder</b> aur <b>immutability</b> — string kabhi kyun nahi badalti, aur use efficiently kaise banayein.</li>
<li><b>Generics</b> aur <b>collections</b> — type-safe reusable code; sahi collection chunna (List, Dictionary, HashSet, Queue, read-only, immutable, concurrent).</li>
<li><b>Delegates, events, lambdas</b> aur <b>extension methods</b> — woh features jin par LINQ aur ASP.NET Core bane hain.</li>
</ul>
<p>Poore din ki ek line yaad rakho: <b>value type data ki copy deta hai, reference type address ki copy.</b></p>`
  },
  sections: [
    {
      id: "value-vs-reference",
      depth: "short",
      title: {
        en: "Value types vs reference types (and where they live: stack/heap)",
        hi: "Value types बनाम reference types (और ये कहाँ रहते हैं: stack/heap)",
        hg: "Value types vs reference types (aur yeh kahan rehte hain: stack/heap)"
      },
      body: {
        en: `<p><b>Analogy — marksheet photocopy vs house address:</b> You give a friend a <b>photocopy</b> of your marksheet. They scribble on it — your original is safe. That is a <b>value type</b>: you hand over a copy of the data. Now you give a friend your <b>house address</b>. They go and paint the gate blue — your gate is blue too, because there is only one house. That is a <b>reference type</b>: you hand over a copy of the address, not a new house.</p>
<ul>
<li><b>Value types</b>: <code>int</code>, <code>double</code>, <code>decimal</code>, <code>bool</code>, <code>char</code>, <code>enum</code>, <code>struct</code> (incl. <code>DateTime</code>, <code>Guid</code>, tuples like <code>(int, string)</code>). The variable <b>holds the data itself</b>. Assignment copies all the data. Default value: zero / <code>false</code>.</li>
<li><b>Reference types</b>: <code>class</code>, <code>interface</code>, <code>delegate</code>, <code>record</code> (class), <code>string</code>, arrays, <code>object</code>. The variable <b>holds a reference</b> to an object on the managed heap. Assignment copies the reference — two variables, <b>one object</b>. Default value: <code>null</code>.</li>
<li><b>Where they live — be precise:</b> "value types always go on the stack" is a <b>myth</b>. A value type lives <b>where its container lives</b>:
<ul>
<li>a local variable in a method → usually on the <b>stack</b> (or just a CPU register);</li>
<li>a field inside a class object → <b>inside that object, on the heap</b>;</li>
<li>an element of an array → inside the array, on the heap;</li>
<li><b>boxed</b>, or captured by a lambda / used across an <code>await</code> → copied to the heap.</li>
</ul></li>
<li>Objects of reference types are created on the <b>heap</b> and cleaned up by the <b>garbage collector (GC)</b>. The reference itself is stored like any value: on the stack if it is a local, inside an object if it is a field.</li>
<li><b>Boxing</b> = wrapping a value type in an <code>object</code> on the heap (a copy). <b>Unboxing</b> = copying it back out with a cast.</li>
</ul>
<p>As Eric Lippert (former C# compiler team) put it, <b>the stack is an implementation detail</b>. In an interview, lead with the meaning — <b>copy the data vs share the object</b> — and then explain storage.</p>
<p><b>When to use:</b> a <code>class</code> is the normal default. Choose a <code>struct</code> for small, short-lived, value-like data that you treat as one value (money amount, coordinates, a date range) — ideally a <code>readonly struct</code>. <b>When not:</b> large or mutable data, or anything you will often cast to <code>object</code>/an interface (boxing) — keep it a class.</p>`,
        hi: `<p><b>Analogy — marksheet की photocopy बनाम घर का address:</b> आप दोस्त को अपनी marksheet की <b>photocopy</b> देते हो। वो उस पर कुछ भी लिख दे — आपका original safe है। यह <b>value type</b> है: आप data की copy देते हो। अब आप दोस्त को अपने <b>घर का address</b> देते हो। वो जाकर gate नीला पेंट कर देता है — आपका gate भी नीला हो गया, क्योंकि घर तो एक ही है। यह <b>reference type</b> है: आप address की copy देते हो, नया घर नहीं।</p>
<ul>
<li><b>Value types</b>: <code>int</code>, <code>double</code>, <code>decimal</code>, <code>bool</code>, <code>char</code>, <code>enum</code>, <code>struct</code> (<code>DateTime</code>, <code>Guid</code>, <code>(int, string)</code> जैसे tuples भी)। Variable में <b>data ख़ुद रहता है</b>। Assignment पूरा data copy करता है। Default value: zero / <code>false</code>।</li>
<li><b>Reference types</b>: <code>class</code>, <code>interface</code>, <code>delegate</code>, <code>record</code> (class), <code>string</code>, arrays, <code>object</code>। Variable में managed heap पर रखे object का <b>reference</b> रहता है। Assignment reference copy करता है — दो variables, <b>एक object</b>। Default value: <code>null</code>।</li>
<li><b>ये कहाँ रहते हैं — सही बोलो:</b> "value types हमेशा stack पर जाते हैं" एक <b>myth</b> है। Value type <b>वहीं रहता है जहाँ उसका container रहता है</b>:
<ul>
<li>method का local variable → अक्सर <b>stack</b> पर (या सिर्फ़ CPU register में);</li>
<li>class object का field → <b>उसी object के अंदर, heap पर</b>;</li>
<li>array का element → array के अंदर, heap पर;</li>
<li><b>boxed</b> हो, या lambda ने capture किया हो / <code>await</code> के पार use हो → heap पर copy हो जाता है।</li>
</ul></li>
<li>Reference types के objects <b>heap</b> पर बनते हैं और <b>garbage collector (GC)</b> उन्हें साफ़ करता है। Reference ख़ुद एक normal value की तरह store होता है: local है तो stack पर, field है तो object के अंदर।</li>
<li><b>Boxing</b> = value type को heap पर एक <code>object</code> में लपेटना (एक copy)। <b>Unboxing</b> = cast करके उसे वापस बाहर copy करना।</li>
</ul>
<p>Eric Lippert (C# compiler team में रह चुके) के शब्दों में, <b>stack एक implementation detail है</b>। Interview में पहले meaning बोलो — <b>data की copy बनाम object share करना</b> — फिर storage समझाओ।</p>
<p><b>कब use करें:</b> normal default <code>class</code> है। <code>struct</code> तब चुनो जब data छोटा, कम समय के लिए और value जैसा हो, जिसे आप एक value की तरह treat करते हो (money amount, coordinates, date range) — हो सके तो <code>readonly struct</code>। <b>कब नहीं:</b> बड़ा या बदलने वाला (mutable) data, या ऐसी चीज़ जिसे बार-बार <code>object</code>/interface में cast करोगे (boxing) — उसे class ही रखो।</p>`,
        hg: `<p><b>Analogy — marksheet ki photocopy vs ghar ka address:</b> Aap dost ko apni marksheet ki <b>photocopy</b> dete ho. Woh us par kuch bhi likh de — aapka original safe hai. Yeh <b>value type</b> hai: aap data ki copy dete ho. Ab aap dost ko apne <b>ghar ka address</b> dete ho. Woh jaakar gate neela paint kar deta hai — aapka gate bhi neela ho gaya, kyunki ghar to ek hi hai. Yeh <b>reference type</b> hai: aap address ki copy dete ho, naya ghar nahi.</p>
<ul>
<li><b>Value types</b>: <code>int</code>, <code>double</code>, <code>decimal</code>, <code>bool</code>, <code>char</code>, <code>enum</code>, <code>struct</code> (<code>DateTime</code>, <code>Guid</code>, <code>(int, string)</code> jaise tuples bhi). Variable mein <b>data khud rehta hai</b>. Assignment poora data copy karta hai. Default value: zero / <code>false</code>.</li>
<li><b>Reference types</b>: <code>class</code>, <code>interface</code>, <code>delegate</code>, <code>record</code> (class), <code>string</code>, arrays, <code>object</code>. Variable mein managed heap par rakhe object ka <b>reference</b> rehta hai. Assignment reference copy karta hai — do variables, <b>ek object</b>. Default value: <code>null</code>.</li>
<li><b>Yeh kahan rehte hain — sahi bolo:</b> "value types hamesha stack par jaate hain" ek <b>myth</b> hai. Value type <b>wahin rehta hai jahan uska container rehta hai</b>:
<ul>
<li>method ka local variable → aksar <b>stack</b> par (ya sirf CPU register mein);</li>
<li>class object ka field → <b>usi object ke andar, heap par</b>;</li>
<li>array ka element → array ke andar, heap par;</li>
<li><b>boxed</b> ho, ya lambda ne capture kiya ho / <code>await</code> ke paar use ho → heap par copy ho jaata hai.</li>
</ul></li>
<li>Reference types ke objects <b>heap</b> par bante hain aur <b>garbage collector (GC)</b> unhe saaf karta hai. Reference khud ek normal value ki tarah store hota hai: local hai to stack par, field hai to object ke andar.</li>
<li><b>Boxing</b> = value type ko heap par ek <code>object</code> mein lapetna (ek copy). <b>Unboxing</b> = cast karke use wapas bahar copy karna.</li>
</ul>
<p>Eric Lippert (C# compiler team mein reh chuke) ke shabdon mein, <b>stack ek implementation detail hai</b>. Interview mein pehle meaning bolo — <b>data ki copy vs object share karna</b> — phir storage samjhao.</p>
<p><b>Kab use karein:</b> normal default <code>class</code> hai. <code>struct</code> tab chuno jab data chhota, kam samay ke liye aur value jaisa ho, jise aap ek value ki tarah treat karte ho (money amount, coordinates, date range) — ho sake to <code>readonly struct</code>. <b>Kab nahi:</b> bada ya badalne wala (mutable) data, ya aisi cheez jise baar-baar <code>object</code>/interface mein cast karoge (boxing) — use class hi rakho.</p>`
      }
    },
    {
      id: "strings-immutability",
      depth: "short",
      title: {
        en: "string vs StringBuilder, and immutability",
        hi: "string बनाम StringBuilder, और immutability",
        hg: "string vs StringBuilder, aur immutability"
      },
      body: {
        en: `<p><b>Analogy — printed railway ticket vs rough notebook:</b> once a railway ticket is printed, you cannot change the name on it — a correction means printing a <b>new</b> ticket. A <code>string</code> works the same way. A <code>StringBuilder</code> is your <b>rough notebook</b>: you keep writing, cutting and adding on the same page, and make the final clean copy (<code>ToString()</code>) once at the end.</p>
<ul>
<li><code>string</code> is a <b>reference type</b> that behaves like a value: it is <b>immutable</b>, and <code>==</code> compares the <b>text</b>, not the address.</li>
<li>Every "change" — <code>+=</code>, <code>Replace</code>, <code>ToUpper</code>, <code>Trim</code> — returns a <b>new string</b>. The original never changes. <code>s.ToUpper();</code> on its own line does nothing useful.</li>
<li>In a loop, <code>s += x</code> copies the whole text again on every pass — lots of copying and garbage for big loops. <code>StringBuilder</code> keeps a growable buffer and builds the string once.</li>
<li><b>Interning</b>: identical string <b>literals</b> in your code share one object from the runtime's intern pool. Strings built at runtime are separate objects unless you call <code>string.Intern</code>. So compare strings with <code>==</code> or <code>string.Equals(a, b, StringComparison.OrdinalIgnoreCase)</code>, never by reference.</li>
<li><b>Immutability in general</b> = an object's state cannot change after it is created. Benefits: safe to share between threads, safe as a dictionary key, easier to reason about. C# tools: <code>readonly</code> fields, <code>init</code> setters, <code>readonly struct</code>, records (Day 3), immutable collections.</li>
</ul>
<p><b>When to use:</b> <code>+</code> or interpolation (<code>$"..."</code>) for a few fixed pieces — the compiler turns them into one efficient call. <code>StringBuilder</code> when you append in a loop or an unknown number of times. <code>string.Join</code> to join a collection. <b>When not:</b> a <code>StringBuilder</code> for two or three pieces only adds noise.</p>`,
        hi: `<p><b>Analogy — छपा हुआ railway ticket बनाम rough notebook:</b> Railway ticket एक बार छप गया तो उस पर नाम नहीं बदल सकते — correction का मतलब है <b>नया</b> ticket छापना। <code>string</code> भी ऐसे ही काम करती है। <code>StringBuilder</code> आपकी <b>rough notebook</b> है: उसी page पर लिखते रहो, काटते रहो, जोड़ते रहो, और आख़िर में एक बार साफ़ copy (<code>ToString()</code>) बना लो।</p>
<ul>
<li><code>string</code> एक <b>reference type</b> है जो value की तरह behave करती है: यह <b>immutable</b> है, और <code>==</code> address नहीं, <b>text</b> compare करता है।</li>
<li>हर "बदलाव" — <code>+=</code>, <code>Replace</code>, <code>ToUpper</code>, <code>Trim</code> — एक <b>नई string</b> return करता है। Original कभी नहीं बदलती। अकेली line <code>s.ToUpper();</code> कुछ काम का नहीं करती।</li>
<li>Loop में <code>s += x</code> हर बार पूरा text फिर से copy करता है — बड़े loops में बहुत copying और garbage। <code>StringBuilder</code> एक बढ़ने वाला buffer रखता है और string एक ही बार बनाता है।</li>
<li><b>Interning</b>: code में एक जैसे string <b>literals</b> runtime के intern pool से एक ही object share करते हैं। Runtime पर बनी strings अलग objects होती हैं, जब तक आप <code>string.Intern</code> call न करो। इसलिए strings को <code>==</code> या <code>string.Equals(a, b, StringComparison.OrdinalIgnoreCase)</code> से compare करो, reference से कभी नहीं।</li>
<li><b>Immutability आम तौर पर</b> = object बनने के बाद उसकी state नहीं बदल सकती। फ़ायदे: threads के बीच share करना safe, dictionary key के रूप में safe, समझना आसान। C# के tools: <code>readonly</code> fields, <code>init</code> setters, <code>readonly struct</code>, records (Day 3), immutable collections।</li>
</ul>
<p><b>कब use करें:</b> कुछ fixed हिस्सों के लिए <code>+</code> या interpolation (<code>$"..."</code>) — compiler इन्हें एक efficient call में बदल देता है। Loop में या पता नहीं कितनी बार append करना है, तब <code>StringBuilder</code>। Collection जोड़ने के लिए <code>string.Join</code>। <b>कब नहीं:</b> सिर्फ़ दो-तीन हिस्सों के लिए <code>StringBuilder</code> बस noise बढ़ाता है।</p>`,
        hg: `<p><b>Analogy — chhapa hua railway ticket vs rough notebook:</b> Railway ticket ek baar chhap gaya to us par naam nahi badal sakte — correction ka matlab hai <b>naya</b> ticket chhaapna. <code>string</code> bhi aise hi kaam karti hai. <code>StringBuilder</code> aapki <b>rough notebook</b> hai: usi page par likhte raho, kaat-te raho, jodte raho, aur aakhir mein ek baar saaf copy (<code>ToString()</code>) bana lo.</p>
<ul>
<li><code>string</code> ek <b>reference type</b> hai jo value ki tarah behave karti hai: yeh <b>immutable</b> hai, aur <code>==</code> address nahi, <b>text</b> compare karta hai.</li>
<li>Har "badlaav" — <code>+=</code>, <code>Replace</code>, <code>ToUpper</code>, <code>Trim</code> — ek <b>nayi string</b> return karta hai. Original kabhi nahi badalti. Akeli line <code>s.ToUpper();</code> kuch kaam ka nahi karti.</li>
<li>Loop mein <code>s += x</code> har baar poora text phir se copy karta hai — bade loops mein bahut copying aur garbage. <code>StringBuilder</code> ek badhne wala buffer rakhta hai aur string ek hi baar banata hai.</li>
<li><b>Interning</b>: code mein ek jaise string <b>literals</b> runtime ke intern pool se ek hi object share karte hain. Runtime par bani strings alag objects hoti hain, jab tak aap <code>string.Intern</code> call na karo. Isliye strings ko <code>==</code> ya <code>string.Equals(a, b, StringComparison.OrdinalIgnoreCase)</code> se compare karo, reference se kabhi nahi.</li>
<li><b>Immutability aam taur par</b> = object banne ke baad uski state nahi badal sakti. Fayde: threads ke beech share karna safe, dictionary key ke roop mein safe, samajhna aasaan. C# ke tools: <code>readonly</code> fields, <code>init</code> setters, <code>readonly struct</code>, records (Day 3), immutable collections.</li>
</ul>
<p><b>Kab use karein:</b> kuch fixed hisson ke liye <code>+</code> ya interpolation (<code>$"..."</code>) — compiler inhe ek efficient call mein badal deta hai. Loop mein ya pata nahi kitni baar append karna hai, tab <code>StringBuilder</code>. Collection jodne ke liye <code>string.Join</code>. <b>Kab nahi:</b> sirf do-teen hisson ke liye <code>StringBuilder</code> bas noise badhata hai.</p>`
      }
    },
    {
      id: "generics-collections",
      depth: "short",
      title: {
        en: "Generics and choosing the right collection",
        hi: "Generics और सही collection चुनना",
        hg: "Generics aur sahi collection chunna"
      },
      body: {
        en: `<p><b>Analogy — labelled steel dabbas in the kitchen:</b> every dabba has the same design, but you stick a label — "Dal", "Rice" — when you start using it, and from then on it holds only that. That is a <b>generic</b> type: <code>List&lt;T&gt;</code> is one design; <code>List&lt;Order&gt;</code> holds only orders. And just as a kirana shop keeps rice in sacks, spices on a labelled rack and customers in a queue, you pick a <b>collection</b> by how you will use the data.</p>
<ul>
<li><b>Generics</b> = write code once with a type parameter <code>T</code>, use it with any type. Three wins: <b>type safety</b> (wrong type = compile error, no casts), <b>no boxing</b> for value types (<code>List&lt;int&gt;</code> stores real ints; old <code>ArrayList</code> boxed each one), and <b>reuse</b>.</li>
<li><b>Constraints</b> (<code>where T : class</code>, <code>struct</code>, <code>new()</code>, <code>IComparable&lt;T&gt;</code>, ...) tell the compiler what <code>T</code> can do.</li>
<li><code>List&lt;T&gt;</code> — ordered, index access O(1), <code>Add</code> fast; <code>Contains</code>/<code>Remove</code> scan the list (O(n)). The everyday default.</li>
<li><code>Dictionary&lt;TKey,TValue&gt;</code> — find by key in O(1) on average (hash table). Use <code>TryGetValue</code>.</li>
<li><code>HashSet&lt;T&gt;</code> — unique items, very fast <code>Contains</code>.</li>
<li><code>Queue&lt;T&gt;</code> (first in, first out), <code>Stack&lt;T&gt;</code> (last in, first out), <code>PriorityQueue&lt;TElement,TPriority&gt;</code> (.NET 6+), <code>SortedDictionary</code> (kept sorted by key).</li>
<li><b>Read-only view</b> (<code>IReadOnlyList&lt;T&gt;</code>, <code>AsReadOnly()</code>) vs <b>truly immutable</b> (<code>ImmutableList&lt;T&gt;</code>, <code>FrozenDictionary</code> in .NET 8+) vs <b>thread-safe</b> (<code>ConcurrentDictionary</code>, <code>ConcurrentQueue</code>).</li>
</ul>
<p><b>When to use:</b> start with <code>List&lt;T&gt;</code>; switch to <code>Dictionary</code>/<code>HashSet</code> as soon as you search by key or check "already exists?" inside a loop. Expose <code>IReadOnlyList&lt;T&gt;</code>/<code>IReadOnlyCollection&lt;T&gt;</code> from your classes. <b>When not:</b> avoid the old non-generic <code>ArrayList</code>/<code>Hashtable</code> in new code, and do not reach for concurrent collections unless several threads really share the data.</p>`,
        hi: `<p><b>Analogy — kitchen के label लगे steel डब्बे:</b> हर डब्बे का design same है, पर use शुरू करते समय आप label लगाते हो — "दाल", "चावल" — और उसके बाद उसमें सिर्फ़ वही रहता है। यही <b>generic</b> type है: <code>List&lt;T&gt;</code> एक design है; <code>List&lt;Order&gt;</code> में सिर्फ़ orders रहेंगे। और जैसे किराना दुकान चावल बोरियों में, मसाले label लगे rack पर और customers को line में रखती है, वैसे ही आप data को कैसे use करोगे, उसके हिसाब से <b>collection</b> चुनते हो।</p>
<ul>
<li><b>Generics</b> = type parameter <code>T</code> के साथ code एक बार लिखो, किसी भी type के साथ use करो। तीन फ़ायदे: <b>type safety</b> (गलत type = compile error, casts नहीं), value types के लिए <b>boxing नहीं</b> (<code>List&lt;int&gt;</code> असली ints रखता है; पुराना <code>ArrayList</code> हर एक को box करता था), और <b>reuse</b>।</li>
<li><b>Constraints</b> (<code>where T : class</code>, <code>struct</code>, <code>new()</code>, <code>IComparable&lt;T&gt;</code>, ...) compiler को बताते हैं कि <code>T</code> क्या कर सकता है।</li>
<li><code>List&lt;T&gt;</code> — ordered, index से access O(1), <code>Add</code> तेज़; <code>Contains</code>/<code>Remove</code> पूरी list scan करते हैं (O(n))। रोज़ का default।</li>
<li><code>Dictionary&lt;TKey,TValue&gt;</code> — key से ढूँढना average O(1) में (hash table)। <code>TryGetValue</code> use करो।</li>
<li><code>HashSet&lt;T&gt;</code> — unique items, बहुत तेज़ <code>Contains</code>।</li>
<li><code>Queue&lt;T&gt;</code> (पहले आओ, पहले जाओ), <code>Stack&lt;T&gt;</code> (आख़िर में आया, पहले गया), <code>PriorityQueue&lt;TElement,TPriority&gt;</code> (.NET 6+), <code>SortedDictionary</code> (key से sorted रहता है)।</li>
<li><b>Read-only view</b> (<code>IReadOnlyList&lt;T&gt;</code>, <code>AsReadOnly()</code>) बनाम <b>सच में immutable</b> (<code>ImmutableList&lt;T&gt;</code>, .NET 8+ में <code>FrozenDictionary</code>) बनाम <b>thread-safe</b> (<code>ConcurrentDictionary</code>, <code>ConcurrentQueue</code>)।</li>
</ul>
<p><b>कब use करें:</b> शुरुआत <code>List&lt;T&gt;</code> से करो; जैसे ही loop के अंदर key से ढूँढना हो या "पहले से है क्या?" check करना हो, <code>Dictionary</code>/<code>HashSet</code> पर जाओ। अपनी classes से <code>IReadOnlyList&lt;T&gt;</code>/<code>IReadOnlyCollection&lt;T&gt;</code> expose करो। <b>कब नहीं:</b> नए code में पुराने non-generic <code>ArrayList</code>/<code>Hashtable</code> से बचो, और concurrent collections तभी लो जब सच में कई threads data share करते हों।</p>`,
        hg: `<p><b>Analogy — kitchen ke label lage steel dabbe:</b> har dabbe ka design same hai, par use shuru karte samay aap label lagate ho — "Dal", "Chawal" — aur uske baad usmein sirf wahi rehta hai. Yahi <b>generic</b> type hai: <code>List&lt;T&gt;</code> ek design hai; <code>List&lt;Order&gt;</code> mein sirf orders rahenge. Aur jaise kirana dukaan chawal boriyon mein, masale label lage rack par aur customers ko line mein rakhti hai, waise hi aap data ko kaise use karoge, uske hisaab se <b>collection</b> chunte ho.</p>
<ul>
<li><b>Generics</b> = type parameter <code>T</code> ke saath code ek baar likho, kisi bhi type ke saath use karo. Teen fayde: <b>type safety</b> (galat type = compile error, casts nahi), value types ke liye <b>boxing nahi</b> (<code>List&lt;int&gt;</code> asli ints rakhta hai; purana <code>ArrayList</code> har ek ko box karta tha), aur <b>reuse</b>.</li>
<li><b>Constraints</b> (<code>where T : class</code>, <code>struct</code>, <code>new()</code>, <code>IComparable&lt;T&gt;</code>, ...) compiler ko batate hain ki <code>T</code> kya kar sakta hai.</li>
<li><code>List&lt;T&gt;</code> — ordered, index se access O(1), <code>Add</code> tez; <code>Contains</code>/<code>Remove</code> poori list scan karte hain (O(n)). Roz ka default.</li>
<li><code>Dictionary&lt;TKey,TValue&gt;</code> — key se dhoondhna average O(1) mein (hash table). <code>TryGetValue</code> use karo.</li>
<li><code>HashSet&lt;T&gt;</code> — unique items, bahut tez <code>Contains</code>.</li>
<li><code>Queue&lt;T&gt;</code> (pehle aao, pehle jao), <code>Stack&lt;T&gt;</code> (aakhir mein aaya, pehle gaya), <code>PriorityQueue&lt;TElement,TPriority&gt;</code> (.NET 6+), <code>SortedDictionary</code> (key se sorted rehta hai).</li>
<li><b>Read-only view</b> (<code>IReadOnlyList&lt;T&gt;</code>, <code>AsReadOnly()</code>) vs <b>sach mein immutable</b> (<code>ImmutableList&lt;T&gt;</code>, .NET 8+ mein <code>FrozenDictionary</code>) vs <b>thread-safe</b> (<code>ConcurrentDictionary</code>, <code>ConcurrentQueue</code>).</li>
</ul>
<p><b>Kab use karein:</b> shuruaat <code>List&lt;T&gt;</code> se karo; jaise hi loop ke andar key se dhoondhna ho ya "pehle se hai kya?" check karna ho, <code>Dictionary</code>/<code>HashSet</code> par jao. Apni classes se <code>IReadOnlyList&lt;T&gt;</code>/<code>IReadOnlyCollection&lt;T&gt;</code> expose karo. <b>Kab nahi:</b> naye code mein purane non-generic <code>ArrayList</code>/<code>Hashtable</code> se bacho, aur concurrent collections tabhi lo jab sach mein kai threads data share karte hon.</p>`
      }
    },
    {
      id: "delegates-events-lambdas",
      depth: "short",
      title: {
        en: "Delegates, events, lambdas and extension methods",
        hi: "Delegates, events, lambdas और extension methods",
        hg: "Delegates, events, lambdas aur extension methods"
      },
      body: {
        en: `<p><b>Analogy:</b> a <b>delegate</b> is a phone number saved in your contacts — you can call whoever is behind it later. A <b>multicast</b> delegate is a <b>WhatsApp group</b>: one message reaches everyone in it. An <b>event</b> is the <b>housing-society notice board</b>: residents can subscribe or unsubscribe, but only the secretary can put up a notice. A <b>lambda</b> is writing the instruction on a sticky note on the spot instead of writing a full letter. An <b>extension method</b> is a <b>mobile cover with a stand</b>: it adds a feature to the phone without opening the phone.</p>
<ul>
<li><b>Delegate</b> — a type-safe reference to a method (or a list of methods). Built-in ones: <code>Func&lt;..., TResult&gt;</code> (returns a value), <code>Action&lt;...&gt;</code> (returns <code>void</code>), <code>Predicate&lt;T&gt;</code> (returns <code>bool</code>).</li>
<li><b>Lambda</b> — a short anonymous function: <code>x =&gt; x * 2</code>. It can use variables from the outer method — that is a <b>closure</b> (it captures the <i>variable</i>, not a snapshot of its value).</li>
<li><b>Event</b> — a delegate wrapped with a guard: outside code can only <code>+=</code> (subscribe) and <code>-=</code> (unsubscribe); only the owning class can raise it or reset it. Standard shape: <code>event EventHandler&lt;TArgs&gt;</code>.</li>
<li><b>Extension method</b> — a <code>static</code> method in a <code>static</code> class whose first parameter has <code>this</code>; you call it like an instance method. The compiler just rewrites <code>x.Method()</code> to <code>Helper.Method(x)</code>. <b>LINQ</b> (<code>Where</code>, <code>Select</code>, ...) and ASP.NET Core's <code>builder.Services.AddXyz()</code> are extension methods.</li>
</ul>
<p><b>When to use:</b> <code>Func</code>/<code>Action</code> parameters for callbacks and small strategies; events when many listeners may react to something (in-process notifications, UI); extension methods to add helpers to types you do not own. <b>When not:</b> an event for a single required callback (a <code>Func</code> parameter is simpler); extension methods that need private data or hold core business rules.</p>`,
        hi: `<p><b>Analogy:</b> <b>delegate</b> आपके contacts में save किया phone number है — उसके पीछे जो भी है, उसे बाद में call कर सकते हो। <b>Multicast</b> delegate एक <b>WhatsApp group</b> है: एक message, group में सबको पहुँचता है। <b>Event</b> <b>housing society का notice board</b> है: residents subscribe या unsubscribe कर सकते हैं, पर notice सिर्फ़ secretary लगा सकता है। <b>Lambda</b> मतलब पूरी चिट्ठी लिखने की जगह वहीं sticky note पर instruction लिख देना। <b>Extension method</b> <b>stand वाला mobile cover</b> है: phone खोले बिना उसमें एक feature जोड़ देता है।</p>
<ul>
<li><b>Delegate</b> — किसी method (या methods की list) का type-safe reference। Built-in: <code>Func&lt;..., TResult&gt;</code> (value return करता है), <code>Action&lt;...&gt;</code> (<code>void</code> return करता है), <code>Predicate&lt;T&gt;</code> (<code>bool</code> return करता है)।</li>
<li><b>Lambda</b> — छोटा anonymous function: <code>x =&gt; x * 2</code>। यह बाहर वाले method के variables use कर सकता है — इसे <b>closure</b> कहते हैं (यह <i>variable</i> को capture करता है, उसकी value की photo नहीं)।</li>
<li><b>Event</b> — एक guard के साथ लिपटा delegate: बाहर का code सिर्फ़ <code>+=</code> (subscribe) और <code>-=</code> (unsubscribe) कर सकता है; raise या reset सिर्फ़ owner class कर सकती है। Standard shape: <code>event EventHandler&lt;TArgs&gt;</code>।</li>
<li><b>Extension method</b> — <code>static</code> class में एक <code>static</code> method जिसके पहले parameter पर <code>this</code> लगा हो; इसे instance method की तरह call करते हो। Compiler बस <code>x.Method()</code> को <code>Helper.Method(x)</code> में बदल देता है। <b>LINQ</b> (<code>Where</code>, <code>Select</code>, ...) और ASP.NET Core का <code>builder.Services.AddXyz()</code> extension methods ही हैं।</li>
</ul>
<p><b>कब use करें:</b> callbacks और छोटी strategies के लिए <code>Func</code>/<code>Action</code> parameters; events जब किसी चीज़ पर कई listeners react कर सकते हों (in-process notifications, UI); जो types आपके नहीं हैं, उनमें helpers जोड़ने के लिए extension methods। <b>कब नहीं:</b> एक ही ज़रूरी callback के लिए event (<code>Func</code> parameter ज़्यादा आसान है); ऐसे extension methods जिन्हें private data चाहिए या जिनमें core business rules हों।</p>`,
        hg: `<p><b>Analogy:</b> <b>delegate</b> aapke contacts mein save kiya phone number hai — uske peeche jo bhi hai, use baad mein call kar sakte ho. <b>Multicast</b> delegate ek <b>WhatsApp group</b> hai: ek message, group mein sabko pahunchta hai. <b>Event</b> <b>housing society ka notice board</b> hai: residents subscribe ya unsubscribe kar sakte hain, par notice sirf secretary laga sakta hai. <b>Lambda</b> matlab poori chitthi likhne ki jagah wahin sticky note par instruction likh dena. <b>Extension method</b> <b>stand wala mobile cover</b> hai: phone khole bina usmein ek feature jod deta hai.</p>
<ul>
<li><b>Delegate</b> — kisi method (ya methods ki list) ka type-safe reference. Built-in: <code>Func&lt;..., TResult&gt;</code> (value return karta hai), <code>Action&lt;...&gt;</code> (<code>void</code> return karta hai), <code>Predicate&lt;T&gt;</code> (<code>bool</code> return karta hai).</li>
<li><b>Lambda</b> — chhota anonymous function: <code>x =&gt; x * 2</code>. Yeh bahar wale method ke variables use kar sakta hai — ise <b>closure</b> kehte hain (yeh <i>variable</i> ko capture karta hai, uski value ki photo nahi).</li>
<li><b>Event</b> — ek guard ke saath lipta delegate: bahar ka code sirf <code>+=</code> (subscribe) aur <code>-=</code> (unsubscribe) kar sakta hai; raise ya reset sirf owner class kar sakti hai. Standard shape: <code>event EventHandler&lt;TArgs&gt;</code>.</li>
<li><b>Extension method</b> — <code>static</code> class mein ek <code>static</code> method jiske pehle parameter par <code>this</code> laga ho; ise instance method ki tarah call karte ho. Compiler bas <code>x.Method()</code> ko <code>Helper.Method(x)</code> mein badal deta hai. <b>LINQ</b> (<code>Where</code>, <code>Select</code>, ...) aur ASP.NET Core ka <code>builder.Services.AddXyz()</code> extension methods hi hain.</li>
</ul>
<p><b>Kab use karein:</b> callbacks aur chhoti strategies ke liye <code>Func</code>/<code>Action</code> parameters; events jab kisi cheez par kai listeners react kar sakte hon (in-process notifications, UI); jo types aapke nahi hain, unmein helpers jodne ke liye extension methods. <b>Kab nahi:</b> ek hi zaroori callback ke liye event (<code>Func</code> parameter zyada aasaan hai); aise extension methods jinhe private data chahiye ya jinmein core business rules hon.</p>`
      }
    },
    {
      id: "copy-semantics-in-code",
      depth: "detailed",
      title: {
        en: "Copy semantics in code: struct vs class, passing to methods, ref / out / in",
        hi: "Code में copy semantics: struct बनाम class, methods को pass करना, ref / out / in",
        hg: "Code mein copy semantics: struct vs class, methods ko pass karna, ref / out / in"
      },
      body: {
        en: `<p><b>Analogy — PDF vs Google Sheet link:</b> if you email someone a <b>PDF</b> of the expense sheet, their edits stay on their copy (value type). If you share a <b>Google Sheet link</b>, their edits show up for you too (reference type). Using <code>ref</code> is like giving them access to <b>your bookmark</b> itself — they can even change which sheet your bookmark opens.</p>
<ul>
<li><code>var s2 = s1;</code> — for a <code>struct</code>, all fields are copied; for a <code>class</code>, only the reference is copied.</li>
<li>C# passes arguments <b>by value</b> by default. For a reference type, the value passed is the <b>reference</b>: the method can change the object's contents (the caller sees it), but assigning a new object to the parameter does not affect the caller's variable.</li>
<li><code>ref</code> — passes the caller's <b>variable</b> itself; reassigning inside the method is visible outside. The variable must be assigned before the call (else CS0165).</li>
<li><code>out</code> — the method <b>must</b> assign it before returning (else CS0177); the caller need not initialise it. Classic use: the <b>TryXxx</b> pattern — <code>int.TryParse</code>, <code>dictionary.TryGetValue</code>.</li>
<li><code>in</code> — a read-only reference: no copy of a large struct, and the method cannot assign it (CS8331).</li>
<li><code>int?</code> is <code>Nullable&lt;int&gt;</code> — a struct with <code>HasValue</code> and <code>Value</code>, still a value type.</li>
</ul>
<p><b>When to use:</b> <code>out</code> for TryXxx methods; <code>in</code> for large <code>readonly struct</code>s on hot paths. Otherwise prefer returning a value or a tuple — <code>(bool ok, decimal total)</code> — it reads better. <b>When not:</b> do not add <code>ref</code> to a class parameter "to make it faster" — a reference is already small; <code>ref</code> only changes whether the method may replace the caller's object.</p>`,
        hi: `<p><b>Analogy — PDF बनाम Google Sheet link:</b> अगर आप किसी को expense sheet की <b>PDF</b> email करते हो, तो उसके बदलाव उसकी copy पर ही रहते हैं (value type)। अगर आप <b>Google Sheet का link</b> share करते हो, तो उसके बदलाव आपको भी दिखते हैं (reference type)। <code>ref</code> use करना ऐसा है जैसे उसे <b>आपका bookmark</b> ही दे देना — वो यह भी बदल सकता है कि आपका bookmark कौन सी sheet खोलेगा।</p>
<ul>
<li><code>var s2 = s1;</code> — <code>struct</code> में सारे fields copy होते हैं; <code>class</code> में सिर्फ़ reference copy होता है।</li>
<li>C# by default arguments <b>by value</b> pass करता है। Reference type में जो value pass होती है वो <b>reference</b> है: method object के अंदर का data बदल सकता है (caller को दिखेगा), पर parameter में नया object assign करने से caller का variable नहीं बदलता।</li>
<li><code>ref</code> — caller का <b>variable</b> ही pass होता है; method के अंदर reassign करो तो बाहर भी दिखेगा। Call से पहले variable assign होना चाहिए (वरना CS0165)।</li>
<li><code>out</code> — method को return से पहले इसे assign करना <b>ही</b> होगा (वरना CS0177); caller को initialise करने की ज़रूरत नहीं। Classic use: <b>TryXxx</b> pattern — <code>int.TryParse</code>, <code>dictionary.TryGetValue</code>।</li>
<li><code>in</code> — read-only reference: बड़े struct की copy नहीं बनती, और method उसे assign नहीं कर सकता (CS8331)।</li>
<li><code>int?</code> असल में <code>Nullable&lt;int&gt;</code> है — <code>HasValue</code> और <code>Value</code> वाला struct, यानी अब भी value type।</li>
</ul>
<p><b>कब use करें:</b> TryXxx methods के लिए <code>out</code>; hot paths पर बड़े <code>readonly struct</code> के लिए <code>in</code>। बाकी जगह value या tuple return करना बेहतर है — <code>(bool ok, decimal total)</code> — पढ़ने में आसान। <b>कब नहीं:</b> class parameter पर "fast बनाने के लिए" <code>ref</code> मत लगाओ — reference पहले से छोटा है; <code>ref</code> बस यह तय करता है कि method caller का object बदलकर नया रख सकता है या नहीं।</p>`,
        hg: `<p><b>Analogy — PDF vs Google Sheet link:</b> agar aap kisi ko expense sheet ki <b>PDF</b> email karte ho, to uske badlaav uski copy par hi rehte hain (value type). Agar aap <b>Google Sheet ka link</b> share karte ho, to uske badlaav aapko bhi dikhte hain (reference type). <code>ref</code> use karna aisa hai jaise use <b>aapka bookmark</b> hi de dena — woh yeh bhi badal sakta hai ki aapka bookmark kaun si sheet kholega.</p>
<ul>
<li><code>var s2 = s1;</code> — <code>struct</code> mein saare fields copy hote hain; <code>class</code> mein sirf reference copy hota hai.</li>
<li>C# by default arguments <b>by value</b> pass karta hai. Reference type mein jo value pass hoti hai woh <b>reference</b> hai: method object ke andar ka data badal sakta hai (caller ko dikhega), par parameter mein naya object assign karne se caller ka variable nahi badalta.</li>
<li><code>ref</code> — caller ka <b>variable</b> hi pass hota hai; method ke andar reassign karo to bahar bhi dikhega. Call se pehle variable assign hona chahiye (warna CS0165).</li>
<li><code>out</code> — method ko return se pehle ise assign karna <b>hi</b> hoga (warna CS0177); caller ko initialise karne ki zaroorat nahi. Classic use: <b>TryXxx</b> pattern — <code>int.TryParse</code>, <code>dictionary.TryGetValue</code>.</li>
<li><code>in</code> — read-only reference: bade struct ki copy nahi banti, aur method use assign nahi kar sakta (CS8331).</li>
<li><code>int?</code> asal mein <code>Nullable&lt;int&gt;</code> hai — <code>HasValue</code> aur <code>Value</code> wala struct, yaani ab bhi value type.</li>
</ul>
<p><b>Kab use karein:</b> TryXxx methods ke liye <code>out</code>; hot paths par bade <code>readonly struct</code> ke liye <code>in</code>. Baaki jagah value ya tuple return karna behtar hai — <code>(bool ok, decimal total)</code> — padhne mein aasaan. <b>Kab nahi:</b> class parameter par "fast banane ke liye" <code>ref</code> mat lagao — reference pehle se chhota hai; <code>ref</code> bas yeh tay karta hai ki method caller ka object badalkar naya rakh sakta hai ya nahi.</p>`
      },
      code: [{
        caption: {
          en: "struct copies the data, class copies the reference; ref lets a method replace the caller's object",
          hi: "struct data copy करता है, class reference; ref से method caller का object बदल सकता है",
          hg: "struct data copy karta hai, class reference; ref se method caller ka object badal sakta hai"
        },
        check: "run",
        expected: "struct: s1.X=1, s2.X=100\nclass:  c1.X=100, c2.X=100\n700\n700\n999\nparsed=True, qty=42",
        src: `var s1 = new PointStruct { X = 1 };
var s2 = s1;                 // copies the data
s2.X = 100;
Console.WriteLine($"struct: s1.X={s1.X}, s2.X={s2.X}");

var c1 = new PointClass { X = 1 };
var c2 = c1;                 // copies the reference: one object, two variables
c2.X = 100;
Console.WriteLine($"class:  c1.X={c1.X}, c2.X={c2.X}");

var order = new Order { Total = 500 };
ChangeTotal(order);          // changes the shared object
Console.WriteLine(order.Total);
ReplaceOrder(order);         // replaces only the method's copy of the reference
Console.WriteLine(order.Total);
ReplaceOrderByRef(ref order);  // replaces the caller's variable
Console.WriteLine(order.Total);

bool parsed = int.TryParse("42", out int qty);   // out: the TryXxx pattern
Console.WriteLine($"parsed={parsed}, qty={qty}");

static void ChangeTotal(Order o) => o.Total = 700;

static void ReplaceOrder(Order o)
{
    o = new Order { Total = 0 };
}

static void ReplaceOrderByRef(ref Order o)
{
    o = new Order { Total = 999 };
}

// Mutable struct ONLY to show copying. In real code prefer a readonly struct.
public struct PointStruct { public int X; }
public class PointClass { public int X; }
public class Order { public decimal Total { get; set; } }`
      }]
    },
    {
      id: "boxing-in-code",
      depth: "detailed",
      title: {
        en: "Boxing and unboxing in code",
        hi: "Code में Boxing और unboxing",
        hg: "Code mein Boxing aur unboxing"
      },
      body: {
        en: `<p><b>Analogy — courier parcel:</b> a courier company accepts only <b>boxes</b>. To send a small item (an <code>int</code>), you must pack it in a box (<code>object</code>) — that is <b>boxing</b>. The receiver must unpack it, and must know exactly what is inside — that is <b>unboxing</b>. Packing costs time and cardboard, and if you change the item at home after sending, the parcel does not change — it holds a <b>copy</b>.</p>
<ul>
<li><b>Boxing</b> happens <b>implicitly</b> when a value type is converted to <code>object</code> or to an interface it implements: <code>object o = 10;</code>, <code>IComparable c = 5;</code>, adding an <code>int</code> to an old <code>ArrayList</code>, passing a struct to an <code>object</code> parameter.</li>
<li>The runtime allocates a small object on the heap and <b>copies</b> the value into it. Later changes to the original variable do not affect the box.</li>
<li><b>Unboxing</b> is <b>explicit</b> (a cast) and must use the <b>exact</b> type: a boxed <code>int</code> unboxes to <code>int</code> (or <code>int?</code>), not to <code>long</code> — that throws <code>InvalidCastException</code>. Write <code>(long)(int)o</code> instead.</li>
<li><b>Cost</b>: a heap allocation + copy each time, and more work for the GC. One box is nothing; millions in a hot loop are noticeable.</li>
<li><b>How to avoid</b>: generics (<code>List&lt;int&gt;</code>, <code>Dictionary&lt;int, T&gt;</code>), generic interfaces like <code>IEquatable&lt;T&gt;</code>, and generic constraints (<code>where T : IComparable&lt;T&gt;</code>). String interpolation in C# 10+ also avoids boxing value-type arguments.</li>
</ul>
<p><b>When it is fine:</b> boxing in ordinary, non-hot code (logging a number once, a <code>switch</code> on <code>object</code>) — do not micro-optimise it. <b>When to care:</b> tight loops, large collections, high-throughput APIs — check for non-generic collections and struct-to-interface casts; a profiler or allocation report shows them clearly.</p>`,
        hi: `<p><b>Analogy — courier parcel:</b> Courier company सिर्फ़ <b>boxes</b> लेती है। एक छोटी चीज़ (<code>int</code>) भेजनी हो तो उसे box (<code>object</code>) में pack करना पड़ता है — यह <b>boxing</b> है। लेने वाले को उसे खोलना पड़ता है, और उसे ठीक-ठीक पता होना चाहिए कि अंदर क्या है — यह <b>unboxing</b> है। Packing में time और गत्ता दोनों लगते हैं, और भेजने के बाद घर पर चीज़ बदल दो तो parcel नहीं बदलता — उसमें एक <b>copy</b> है।</p>
<ul>
<li><b>Boxing</b> <b>अपने-आप (implicitly)</b> होती है जब value type को <code>object</code> या उसके implement किए interface में convert करते हो: <code>object o = 10;</code>, <code>IComparable c = 5;</code>, पुरानी <code>ArrayList</code> में <code>int</code> डालना, <code>object</code> parameter में struct pass करना।</li>
<li>Runtime heap पर एक छोटा object बनाता है और value उसमें <b>copy</b> करता है। बाद में original variable बदलो तो box पर असर नहीं होता।</li>
<li><b>Unboxing</b> <b>explicit</b> होती है (cast) और <b>exact</b> type से ही होती है: boxed <code>int</code> सिर्फ़ <code>int</code> (या <code>int?</code>) में unbox होगा, <code>long</code> में नहीं — उसमें <code>InvalidCastException</code> आता है। इसकी जगह <code>(long)(int)o</code> लिखो।</li>
<li><b>Cost</b>: हर बार एक heap allocation + copy, और GC का काम बढ़ता है। एक box कुछ नहीं; hot loop में लाखों boxes का असर दिखता है।</li>
<li><b>कैसे बचें</b>: generics (<code>List&lt;int&gt;</code>, <code>Dictionary&lt;int, T&gt;</code>), <code>IEquatable&lt;T&gt;</code> जैसे generic interfaces, और generic constraints (<code>where T : IComparable&lt;T&gt;</code>)। C# 10+ में string interpolation भी value-type arguments को box नहीं करता।</li>
</ul>
<p><b>कब चलता है:</b> normal, non-hot code में boxing (एक बार कोई number log करना, <code>object</code> पर <code>switch</code>) — इसे micro-optimise मत करो। <b>कब ध्यान दो:</b> tight loops, बड़े collections, high-throughput APIs — non-generic collections और struct-से-interface casts देखो; profiler या allocation report इन्हें साफ़ दिखा देता है।</p>`,
        hg: `<p><b>Analogy — courier parcel:</b> Courier company sirf <b>boxes</b> leti hai. Ek chhoti cheez (<code>int</code>) bhejni ho to use box (<code>object</code>) mein pack karna padta hai — yeh <b>boxing</b> hai. Lene wale ko use kholna padta hai, aur use theek-theek pata hona chahiye ki andar kya hai — yeh <b>unboxing</b> hai. Packing mein time aur gatta dono lagte hain, aur bhejne ke baad ghar par cheez badal do to parcel nahi badalta — usmein ek <b>copy</b> hai.</p>
<ul>
<li><b>Boxing</b> <b>apne-aap (implicitly)</b> hoti hai jab value type ko <code>object</code> ya uske implement kiye interface mein convert karte ho: <code>object o = 10;</code>, <code>IComparable c = 5;</code>, purani <code>ArrayList</code> mein <code>int</code> daalna, <code>object</code> parameter mein struct pass karna.</li>
<li>Runtime heap par ek chhota object banata hai aur value usmein <b>copy</b> karta hai. Baad mein original variable badlo to box par asar nahi hota.</li>
<li><b>Unboxing</b> <b>explicit</b> hoti hai (cast) aur <b>exact</b> type se hi hoti hai: boxed <code>int</code> sirf <code>int</code> (ya <code>int?</code>) mein unbox hoga, <code>long</code> mein nahi — usmein <code>InvalidCastException</code> aata hai. Iski jagah <code>(long)(int)o</code> likho.</li>
<li><b>Cost</b>: har baar ek heap allocation + copy, aur GC ka kaam badhta hai. Ek box kuch nahi; hot loop mein laakhon boxes ka asar dikhta hai.</li>
<li><b>Kaise bachein</b>: generics (<code>List&lt;int&gt;</code>, <code>Dictionary&lt;int, T&gt;</code>), <code>IEquatable&lt;T&gt;</code> jaise generic interfaces, aur generic constraints (<code>where T : IComparable&lt;T&gt;</code>). C# 10+ mein string interpolation bhi value-type arguments ko box nahi karta.</li>
</ul>
<p><b>Kab chalta hai:</b> normal, non-hot code mein boxing (ek baar koi number log karna, <code>object</code> par <code>switch</code>) — ise micro-optimise mat karo. <b>Kab dhyaan do:</b> tight loops, bade collections, high-throughput APIs — non-generic collections aur struct-se-interface casts dekho; profiler ya allocation report inhe saaf dikha deta hai.</p>`
      },
      code: [{
        caption: {
          en: "Boxing copies the value; unboxing needs the exact type; generics avoid both",
          hi: "Boxing value copy करती है; unboxing को exact type चाहिए; generics दोनों से बचाते हैं",
          hg: "Boxing value copy karti hai; unboxing ko exact type chahiye; generics dono se bachate hain"
        },
        check: "run",
        expected: "count=20, boxed=10\n11\nInvalidCastException: unbox to the exact type\n10\n6 6",
        src: `int count = 10;
object boxed = count;        // boxing: a copy of 10 goes to the heap
count = 20;                  // the box is not affected
Console.WriteLine($"count={count}, boxed={boxed}");

int back = (int)boxed;       // unboxing: exact type
Console.WriteLine(back + 1);

try
{
    long wrong = (long)boxed;   // a boxed int is not a long
    Console.WriteLine(wrong);
}
catch (InvalidCastException)
{
    Console.WriteLine("InvalidCastException: unbox to the exact type");
}
long widened = (int)boxed;   // unbox to int first, then widen to long
Console.WriteLine(widened);

// Old non-generic collection: every Add boxes, every read needs a cast
var oldList = new System.Collections.ArrayList { 1, 2, 3 };
int sumOld = 0;
foreach (object o in oldList) sumOld += (int)o;

// Generic collection: no boxing, no casts, checked by the compiler
var newList = new List<int> { 1, 2, 3 };
int sumNew = 0;
foreach (int n in newList) sumNew += n;

Console.WriteLine($"{sumOld} {sumNew}");`
      }]
    },
    {
      id: "strings-in-code",
      depth: "detailed",
      title: {
        en: "Strings in code: immutability, interning, comparison, StringBuilder",
        hi: "Code में Strings: immutability, interning, comparison, StringBuilder",
        hg: "Code mein Strings: immutability, interning, comparison, StringBuilder"
      },
      body: {
        en: `<p><b>Analogy — the kirana bill pad:</b> the shopkeeper does not rewrite the whole bill every time you add an item. He keeps adding lines on the same bill pad and tears it off once at the end. Rewriting the full bill for every item is <code>s += item</code> in a loop; the bill pad is <code>StringBuilder</code>.</p>
<p><b>Why are strings immutable?</b></p>
<ul>
<li><b>Thread safety</b> — many threads can read the same string with no locks.</li>
<li><b>Safe dictionary keys</b> — the hash code can never change after the key is stored.</li>
<li><b>Sharing / interning</b> — identical literals can safely share one object.</li>
<li><b>Security</b> — a file path or connection string that was validated cannot be changed later by other code holding the same reference.</li>
</ul>
<p><b>Comparison:</b> <code>==</code> on two <code>string</code> variables compares the text. For identifiers, keys, file names and headers use <code>StringComparison.Ordinal</code> / <code>OrdinalIgnoreCase</code> (fast, culture-independent). Use culture-aware comparison mainly for sorting text shown to users. Avoid <code>a.ToLower() == b.ToLower()</code> — it creates two extra strings.</p>
<p><b>Building strings:</b> a few fixed pieces — <code>+</code> or <code>$"..."</code>; a loop — <code>StringBuilder</code> (pass a capacity if you know the rough size); a collection — <code>string.Join</code>.</p>
<p><b>When to use:</b> <code>StringBuilder</code> for loops, report/CSV/email-body building, and unknown counts. <b>When not:</b> for a single line like <code>$"Hello {name}"</code> — interpolation is cleaner and just as efficient; and do not call <code>string.Intern</code> yourself without a measured reason — interned strings stay alive for the whole process.</p>`,
        hi: `<p><b>Analogy — किराना दुकान का bill pad:</b> दुकानदार हर item जोड़ने पर पूरा bill दोबारा नहीं लिखता। वो उसी bill pad पर lines जोड़ता रहता है और आख़िर में एक बार फाड़कर दे देता है। हर item पर पूरा bill दोबारा लिखना = loop में <code>s += item</code>; bill pad = <code>StringBuilder</code>।</p>
<p><b>Strings immutable क्यों हैं?</b></p>
<ul>
<li><b>Thread safety</b> — कई threads बिना lock के same string पढ़ सकते हैं।</li>
<li><b>Safe dictionary keys</b> — key store होने के बाद उसका hash code कभी नहीं बदल सकता।</li>
<li><b>Sharing / interning</b> — एक जैसे literals safely एक ही object share कर सकते हैं।</li>
<li><b>Security</b> — validate किया हुआ file path या connection string बाद में कोई दूसरा code (जिसके पास same reference है) नहीं बदल सकता।</li>
</ul>
<p><b>Comparison:</b> दो <code>string</code> variables पर <code>==</code> text compare करता है। Identifiers, keys, file names और headers के लिए <code>StringComparison.Ordinal</code> / <code>OrdinalIgnoreCase</code> use करो (तेज़, culture से independent)। Culture-aware comparison मुख्य रूप से users को दिखने वाले text की sorting के लिए। <code>a.ToLower() == b.ToLower()</code> से बचो — इससे दो extra strings बनती हैं।</p>
<p><b>Strings बनाना:</b> कुछ fixed हिस्से — <code>+</code> या <code>$"..."</code>; loop — <code>StringBuilder</code> (अगर अंदाज़ा है तो capacity दे दो); collection — <code>string.Join</code>।</p>
<p><b>कब use करें:</b> loops, report/CSV/email-body बनाने, और जब count पता न हो — <code>StringBuilder</code>। <b>कब नहीं:</b> <code>$"Hello {name}"</code> जैसी एक line के लिए — interpolation ज़्यादा साफ़ है और उतनी ही efficient; और बिना measure किए ख़ुद <code>string.Intern</code> call मत करो — interned strings पूरे process तक memory में रहती हैं।</p>`,
        hg: `<p><b>Analogy — kirana dukaan ka bill pad:</b> dukaandaar har item jodne par poora bill dobara nahi likhta. Woh usi bill pad par lines jodta rehta hai aur aakhir mein ek baar phaadkar de deta hai. Har item par poora bill dobara likhna = loop mein <code>s += item</code>; bill pad = <code>StringBuilder</code>.</p>
<p><b>Strings immutable kyun hain?</b></p>
<ul>
<li><b>Thread safety</b> — kai threads bina lock ke same string padh sakte hain.</li>
<li><b>Safe dictionary keys</b> — key store hone ke baad uska hash code kabhi nahi badal sakta.</li>
<li><b>Sharing / interning</b> — ek jaise literals safely ek hi object share kar sakte hain.</li>
<li><b>Security</b> — validate kiya hua file path ya connection string baad mein koi doosra code (jiske paas same reference hai) nahi badal sakta.</li>
</ul>
<p><b>Comparison:</b> do <code>string</code> variables par <code>==</code> text compare karta hai. Identifiers, keys, file names aur headers ke liye <code>StringComparison.Ordinal</code> / <code>OrdinalIgnoreCase</code> use karo (tez, culture se independent). Culture-aware comparison mukhya roop se users ko dikhne wale text ki sorting ke liye. <code>a.ToLower() == b.ToLower()</code> se bacho — isse do extra strings banti hain.</p>
<p><b>Strings banana:</b> kuch fixed hisse — <code>+</code> ya <code>$"..."</code>; loop — <code>StringBuilder</code> (agar andaaza hai to capacity de do); collection — <code>string.Join</code>.</p>
<p><b>Kab use karein:</b> loops, report/CSV/email-body banane, aur jab count pata na ho — <code>StringBuilder</code>. <b>Kab nahi:</b> <code>$"Hello {name}"</code> jaisi ek line ke liye — interpolation zyada saaf hai aur utni hi efficient; aur bina measure kiye khud <code>string.Intern</code> call mat karo — interned strings poore process tak memory mein rehti hain.</p>`
      },
      code: [{
        caption: {
          en: "Strings never change: methods return new strings; == compares text, not references",
          hi: "Strings कभी नहीं बदलतीं: methods नई string return करते हैं; == text compare करता है, reference नहीं",
          hg: "Strings kabhi nahi badalti: methods nayi string return karte hain; == text compare karta hai, reference nahi"
        },
        check: "run",
        expected: "pune\nPUNE\nhello\nhello world\nTrue\nFalse\nTrue",
        src: `string city = "pune";
city.ToUpper();                 // result thrown away: the string itself never changes
Console.WriteLine(city);
city = city.ToUpper();          // keep the NEW string
Console.WriteLine(city);

string a = "hello";
string b = a;                   // same object
b += " world";                  // creates a new string; a is untouched
Console.WriteLine(a);
Console.WriteLine(b);

string part = "hel";
string built = part + "lo";     // built at runtime: a separate object
Console.WriteLine(built == "hello");                        // text equal
Console.WriteLine(object.ReferenceEquals(built, "hello"));  // not the same object
Console.WriteLine(string.Equals("PUNE", "pune", StringComparison.OrdinalIgnoreCase));
// city[0] = 'p';               // CS0200: the string indexer is read-only`
      }, {
        caption: {
          en: "Building strings: StringBuilder in a loop, string.Join for a collection, interpolation for one line",
          hi: "Strings बनाना: loop में StringBuilder, collection के लिए string.Join, एक line के लिए interpolation",
          hg: "Strings banana: loop mein StringBuilder, collection ke liye string.Join, ek line ke liye interpolation"
        },
        check: "run",
        expected: "1. Atta 5kg\n2. Dal 1kg\n3. Oil 1L\nAtta 5kg, Dal 1kg, Oil 1L\nBill for Ravi: 3 items",
        src: `using System.Text;

string[] items = ["Atta 5kg", "Dal 1kg", "Oil 1L"];

// Loop: one growing buffer, one final string
var sb = new StringBuilder(capacity: 64);
for (int i = 0; i < items.Length; i++)
    sb.Append(i + 1).Append(". ").AppendLine(items[i]);
Console.Write(sb.ToString());

// Joining a collection
Console.WriteLine(string.Join(", ", items));

// A few fixed pieces: interpolation is clear and efficient
string customer = "Ravi";
Console.WriteLine($"Bill for {customer}: {items.Length} items");`
      }]
    },
    {
      id: "immutability-in-code",
      depth: "detailed",
      title: {
        en: "Immutability in code: const, readonly, init, readonly struct, with",
        hi: "Code में Immutability: const, readonly, init, readonly struct, with",
        hg: "Code mein Immutability: const, readonly, init, readonly struct, with"
      },
      body: {
        en: `<p><b>Analogy:</b> the <b>MRP printed on a packet</b> is fixed at the factory and copied onto every bill — that is a <code>const</code>. The <b>manufacturing date</b> is stamped once when each packet is made — that is a <code>readonly</code> field. Your <b>Aadhaar card</b> is never edited: an address change gives you a <b>new</b> card, and the old one still shows the old address — that is non-destructive mutation with <code>with</code>.</p>
<ul>
<li><code>const</code> — a compile-time constant; implicitly <code>static</code>; only numbers, <code>bool</code>, <code>char</code>, <code>string</code>, enums (or <code>null</code>). A non-constant value gives CS0133. The value is <b>copied into every assembly that uses it</b> — change a <code>public const</code> in a library and callers keep the old value until they recompile.</li>
<li><code>readonly</code> field — set only in its declaration or a constructor (else CS0191). Each object can have its own value, decided at runtime.</li>
<li><code>static readonly</code> — one value per type, set at runtime (e.g. <code>TimeSpan</code>, objects) — CS0198 if assigned elsewhere. Use it when <code>const</code> is not allowed.</li>
<li><code>init</code> accessor (C# 9) — set in an object initializer or constructor, then frozen (CS8852 later).</li>
<li><code>readonly struct</code> — every field must be <code>readonly</code> (CS8340); the compiler then avoids hidden defensive copies.</li>
<li><code>with</code> — creates a changed <b>copy</b>; works with records, structs (C# 10+) and anonymous types.</li>
<li><b>Trap:</b> <code>readonly</code> is <b>shallow</b>. A <code>readonly List&lt;T&gt;</code> field cannot point to a different list, but anyone can still <code>Add</code> to it. Expose <code>IReadOnlyList&lt;T&gt;</code> or an immutable collection.</li>
</ul>
<p><b>When to use:</b> immutable types for values and messages (money, addresses, DTOs, events, configuration snapshots) and anything shared between threads; <code>const</code> for true universal constants (<code>MaxRetries</code> inside one assembly), <code>static readonly</code> for public "constants" in libraries. <b>When not:</b> entities with a real lifecycle (an <code>Order</code> moving through states) are naturally mutable — protect them with encapsulation (Day 1) rather than forcing every change to create a new object.</p>`,
        hi: `<p><b>Analogy:</b> packet पर छपा <b>MRP</b> factory में fix होता है और हर bill पर copy होता है — यह <code>const</code> है। <b>Manufacturing date</b> हर packet बनते समय एक बार stamp होती है — यह <code>readonly</code> field है। आपका <b>Aadhaar card</b> कभी edit नहीं होता: address बदलने पर <b>नया</b> card मिलता है, और पुराने पर अब भी पुराना address है — यह <code>with</code> वाला non-destructive mutation है।</p>
<ul>
<li><code>const</code> — compile-time constant; अपने-आप <code>static</code>; सिर्फ़ numbers, <code>bool</code>, <code>char</code>, <code>string</code>, enums (या <code>null</code>)। Non-constant value देने पर CS0133। Value <b>use करने वाली हर assembly में copy हो जाती है</b> — library में <code>public const</code> बदलो तो callers के पास पुरानी value ही रहती है जब तक वो recompile न हों।</li>
<li><code>readonly</code> field — सिर्फ़ declaration या constructor में set होता है (वरना CS0191)। हर object की अपनी value हो सकती है, जो runtime पर तय होती है।</li>
<li><code>static readonly</code> — पूरे type के लिए एक value, runtime पर set (जैसे <code>TimeSpan</code>, objects) — कहीं और assign करो तो CS0198। जहाँ <code>const</code> allowed नहीं, वहाँ यह use करो।</li>
<li><code>init</code> accessor (C# 9) — object initializer या constructor में set करो, फिर freeze (बाद में CS8852)।</li>
<li><code>readonly struct</code> — हर field <code>readonly</code> होना चाहिए (CS8340); फिर compiler छुपी हुई defensive copies से बचता है।</li>
<li><code>with</code> — बदली हुई <b>copy</b> बनाता है; records, structs (C# 10+) और anonymous types के साथ चलता है।</li>
<li><b>Trap:</b> <code>readonly</code> <b>shallow</b> है। <code>readonly List&lt;T&gt;</code> field किसी दूसरी list पर point नहीं कर सकता, पर कोई भी उसमें <code>Add</code> कर सकता है। <code>IReadOnlyList&lt;T&gt;</code> या immutable collection expose करो।</li>
</ul>
<p><b>कब use करें:</b> values और messages (money, addresses, DTOs, events, configuration snapshots) और threads के बीच share होने वाली हर चीज़ के लिए immutable types; सच्चे universal constants के लिए <code>const</code> (एक assembly के अंदर <code>MaxRetries</code>), libraries के public "constants" के लिए <code>static readonly</code>। <b>कब नहीं:</b> जिन entities की असली lifecycle है (states से गुज़रता <code>Order</code>) वो स्वाभाविक रूप से mutable हैं — हर बदलाव पर नया object बनाने के बजाय उन्हें encapsulation (Day 1) से बचाओ।</p>`,
        hg: `<p><b>Analogy:</b> packet par chhapa <b>MRP</b> factory mein fix hota hai aur har bill par copy hota hai — yeh <code>const</code> hai. <b>Manufacturing date</b> har packet bante samay ek baar stamp hoti hai — yeh <code>readonly</code> field hai. Aapka <b>Aadhaar card</b> kabhi edit nahi hota: address badalne par <b>naya</b> card milta hai, aur purane par ab bhi purana address hai — yeh <code>with</code> wala non-destructive mutation hai.</p>
<ul>
<li><code>const</code> — compile-time constant; apne-aap <code>static</code>; sirf numbers, <code>bool</code>, <code>char</code>, <code>string</code>, enums (ya <code>null</code>). Non-constant value dene par CS0133. Value <b>use karne wali har assembly mein copy ho jaati hai</b> — library mein <code>public const</code> badlo to callers ke paas purani value hi rehti hai jab tak woh recompile na hon.</li>
<li><code>readonly</code> field — sirf declaration ya constructor mein set hota hai (warna CS0191). Har object ki apni value ho sakti hai, jo runtime par tay hoti hai.</li>
<li><code>static readonly</code> — poore type ke liye ek value, runtime par set (jaise <code>TimeSpan</code>, objects) — kahin aur assign karo to CS0198. Jahan <code>const</code> allowed nahi, wahan yeh use karo.</li>
<li><code>init</code> accessor (C# 9) — object initializer ya constructor mein set karo, phir freeze (baad mein CS8852).</li>
<li><code>readonly struct</code> — har field <code>readonly</code> hona chahiye (CS8340); phir compiler chhupi hui defensive copies se bachta hai.</li>
<li><code>with</code> — badli hui <b>copy</b> banata hai; records, structs (C# 10+) aur anonymous types ke saath chalta hai.</li>
<li><b>Trap:</b> <code>readonly</code> <b>shallow</b> hai. <code>readonly List&lt;T&gt;</code> field kisi doosri list par point nahi kar sakta, par koi bhi usmein <code>Add</code> kar sakta hai. <code>IReadOnlyList&lt;T&gt;</code> ya immutable collection expose karo.</li>
</ul>
<p><b>Kab use karein:</b> values aur messages (money, addresses, DTOs, events, configuration snapshots) aur threads ke beech share hone wali har cheez ke liye immutable types; sacche universal constants ke liye <code>const</code> (ek assembly ke andar <code>MaxRetries</code>), libraries ke public "constants" ke liye <code>static readonly</code>. <b>Kab nahi:</b> jin entities ki asli lifecycle hai (states se guzarta <code>Order</code>) woh swabhaavik roop se mutable hain — har badlaav par naya object banane ke bajaye unhe encapsulation (Day 1) se bachao.</p>`
      },
      code: [{
        caption: {
          en: "readonly struct + with, init-only properties, const vs static readonly, and the shallow-readonly trap",
          hi: "readonly struct + with, init-only properties, const बनाम static readonly, और shallow-readonly वाला trap",
          hg: "readonly struct + with, init-only properties, const vs static readonly, aur shallow-readonly wala trap"
        },
        check: "run",
        expected: "100 -> 90 INR\nORD-1: 2 items, max 50, cancel within 02:00:00\n2",
        src: `var price = new Money(100m, "INR");
var discounted = price with { Amount = 90m };   // a new value; price is unchanged
Console.WriteLine($"{price.Amount} -> {discounted.Amount} {discounted.Currency}");

var order = new Order { Id = "ORD-1" };
// order.Id = "X";             // CS8852: init-only property
order.AddItem("Atta");
order.AddItem("Dal");
Console.WriteLine($"{order.Id}: {order.Items.Count} items, max {Order.MaxItems}, cancel within {Order.CancelWindow}");

var rules = new LegacyRules();
rules.Codes.Add("NEW");        // TRAP: the field is readonly, the List is not
Console.WriteLine(rules.Codes.Count);

public readonly struct Money(decimal amount, string currency)
{
    public decimal Amount { get; init; } = amount;
    public string Currency { get; init; } = currency;
}

public class Order
{
    public const int MaxItems = 50;                                       // compile-time constant
    public static readonly TimeSpan CancelWindow = TimeSpan.FromHours(2); // runtime value, set once

    private readonly List<string> _items = [];      // the reference never changes
    public required string Id { get; init; }
    public IReadOnlyList<string> Items => _items;   // callers can read, not Add

    public void AddItem(string name)
    {
        if (_items.Count >= MaxItems) throw new InvalidOperationException("Too many items");
        _items.Add(name);
    }
}

public class LegacyRules
{
    public readonly List<string> Codes = ["OLD"];   // shown only as the trap to avoid
}`
      }]
    },
    {
      id: "generics-in-code",
      depth: "detailed",
      title: {
        en: "Generics in code: generic types, methods, constraints, variance",
        hi: "Code में Generics: generic types, methods, constraints, variance",
        hg: "Code mein Generics: generic types, methods, constraints, variance"
      },
      body: {
        en: `<p><b>Analogy — USB-C cable:</b> one cable design charges many phones — that is a generic type. But it works only with phones that <b>have a USB-C port</b> — that rule is a <b>constraint</b>. The cable checks the port when you plug it in (compile time), not after it starts charging.</p>
<ul>
<li><b>Generic class</b>: <code>InMemoryRepository&lt;T&gt;</code> below is written once and works for <code>Customer</code>, <code>Product</code>, ... <b>Generic method</b>: <code>Max&lt;T&gt;(T a, T b)</code> — the compiler usually infers <code>T</code> from the arguments.</li>
<li><b>Constraints</b>: <code>where T : class</code> (reference type, else CS0452), <code>struct</code> (non-nullable value type, else CS0453), <code>new()</code> (public parameterless constructor, else CS0310), a base class, an interface (<code>IComparable&lt;T&gt;</code> — else CS0311), <code>notnull</code>, <code>unmanaged</code>, another type parameter (<code>where T : U</code>). C# 13 added <code>allows ref struct</code>.</li>
<li><b>Generics are real at runtime</b> (unlike Java's type erasure): <code>List&lt;int&gt;</code> and <code>List&lt;string&gt;</code> are different types. The JIT creates specialised code for each value-type argument (so <code>List&lt;int&gt;</code> stores real ints, no boxing) and shares one copy of code for reference types. Static fields are <b>per closed type</b> — <code>Cache&lt;int&gt;.Count</code> and <code>Cache&lt;string&gt;.Count</code> are separate.</li>
<li><b>Variance</b> (interfaces and delegates only, reference types only): <b>covariance</b> <code>out T</code> — <code>IEnumerable&lt;string&gt;</code> can be used as <code>IEnumerable&lt;object&gt;</code>; <b>contravariance</b> <code>in T</code> — an <code>Action&lt;object&gt;</code> can be used as <code>Action&lt;string&gt;</code>. But <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> is CS0029, because a list also accepts writes.</li>
<li><code>default(T)</code> / <code>default</code> gives <code>null</code> for reference types and zero for value types.</li>
</ul>
<p><b>When to use:</b> reusable containers and algorithms that differ only by type — repositories, caches, <code>Result&lt;T&gt;</code> wrappers, paging (<code>PagedList&lt;T&gt;</code>), validation helpers. <b>When not:</b> when only one type will ever be used, keep it simple and non-generic; and in code review push back on "clever" generics with many type parameters and nested constraints — readability matters more than reuse.</p>`,
        hi: `<p><b>Analogy — USB-C cable:</b> एक ही cable design कई phones charge करता है — यह generic type है। पर यह सिर्फ़ उन्हीं phones में चलेगा जिनमें <b>USB-C port हो</b> — यह rule एक <b>constraint</b> है। Plug लगाते ही cable port check कर लेती है (compile time), charging शुरू होने के बाद नहीं।</p>
<ul>
<li><b>Generic class</b>: नीचे वाला <code>InMemoryRepository&lt;T&gt;</code> एक बार लिखा है और <code>Customer</code>, <code>Product</code>, ... सबके लिए चलता है। <b>Generic method</b>: <code>Max&lt;T&gt;(T a, T b)</code> — compiler अक्सर arguments से <code>T</code> ख़ुद समझ लेता है।</li>
<li><b>Constraints</b>: <code>where T : class</code> (reference type, वरना CS0452), <code>struct</code> (non-nullable value type, वरना CS0453), <code>new()</code> (public parameterless constructor, वरना CS0310), कोई base class, कोई interface (<code>IComparable&lt;T&gt;</code> — वरना CS0311), <code>notnull</code>, <code>unmanaged</code>, दूसरा type parameter (<code>where T : U</code>)। C# 13 में <code>allows ref struct</code> आया।</li>
<li><b>Generics runtime पर असली हैं</b> (Java के type erasure जैसे नहीं): <code>List&lt;int&gt;</code> और <code>List&lt;string&gt;</code> अलग types हैं। JIT हर value-type argument के लिए अलग specialised code बनाता है (इसलिए <code>List&lt;int&gt;</code> असली ints रखती है, boxing नहीं) और reference types के लिए एक ही code share करता है। Static fields <b>हर closed type के अलग</b> होते हैं — <code>Cache&lt;int&gt;.Count</code> और <code>Cache&lt;string&gt;.Count</code> अलग हैं।</li>
<li><b>Variance</b> (सिर्फ़ interfaces और delegates, सिर्फ़ reference types): <b>covariance</b> <code>out T</code> — <code>IEnumerable&lt;string&gt;</code> को <code>IEnumerable&lt;object&gt;</code> की तरह use कर सकते हो; <b>contravariance</b> <code>in T</code> — <code>Action&lt;object&gt;</code> को <code>Action&lt;string&gt;</code> की तरह use कर सकते हो। पर <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> CS0029 है, क्योंकि list में लिख भी सकते हैं।</li>
<li><code>default(T)</code> / <code>default</code> reference types के लिए <code>null</code> और value types के लिए zero देता है।</li>
</ul>
<p><b>कब use करें:</b> ऐसे reusable containers और algorithms जो सिर्फ़ type में अलग हैं — repositories, caches, <code>Result&lt;T&gt;</code> wrappers, paging (<code>PagedList&lt;T&gt;</code>), validation helpers। <b>कब नहीं:</b> जब हमेशा एक ही type use होगा, तो simple और non-generic रखो; और code review में बहुत सारे type parameters और nested constraints वाले "clever" generics पर सवाल उठाओ — reuse से ज़्यादा readability ज़रूरी है।</p>`,
        hg: `<p><b>Analogy — USB-C cable:</b> ek hi cable design kai phones charge karta hai — yeh generic type hai. Par yeh sirf unhi phones mein chalega jinmein <b>USB-C port ho</b> — yeh rule ek <b>constraint</b> hai. Plug lagate hi cable port check kar leti hai (compile time), charging shuru hone ke baad nahi.</p>
<ul>
<li><b>Generic class</b>: neeche wala <code>InMemoryRepository&lt;T&gt;</code> ek baar likha hai aur <code>Customer</code>, <code>Product</code>, ... sabke liye chalta hai. <b>Generic method</b>: <code>Max&lt;T&gt;(T a, T b)</code> — compiler aksar arguments se <code>T</code> khud samajh leta hai.</li>
<li><b>Constraints</b>: <code>where T : class</code> (reference type, warna CS0452), <code>struct</code> (non-nullable value type, warna CS0453), <code>new()</code> (public parameterless constructor, warna CS0310), koi base class, koi interface (<code>IComparable&lt;T&gt;</code> — warna CS0311), <code>notnull</code>, <code>unmanaged</code>, doosra type parameter (<code>where T : U</code>). C# 13 mein <code>allows ref struct</code> aaya.</li>
<li><b>Generics runtime par asli hain</b> (Java ke type erasure jaise nahi): <code>List&lt;int&gt;</code> aur <code>List&lt;string&gt;</code> alag types hain. JIT har value-type argument ke liye alag specialised code banata hai (isliye <code>List&lt;int&gt;</code> asli ints rakhti hai, boxing nahi) aur reference types ke liye ek hi code share karta hai. Static fields <b>har closed type ke alag</b> hote hain — <code>Cache&lt;int&gt;.Count</code> aur <code>Cache&lt;string&gt;.Count</code> alag hain.</li>
<li><b>Variance</b> (sirf interfaces aur delegates, sirf reference types): <b>covariance</b> <code>out T</code> — <code>IEnumerable&lt;string&gt;</code> ko <code>IEnumerable&lt;object&gt;</code> ki tarah use kar sakte ho; <b>contravariance</b> <code>in T</code> — <code>Action&lt;object&gt;</code> ko <code>Action&lt;string&gt;</code> ki tarah use kar sakte ho. Par <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> CS0029 hai, kyunki list mein likh bhi sakte hain.</li>
<li><code>default(T)</code> / <code>default</code> reference types ke liye <code>null</code> aur value types ke liye zero deta hai.</li>
</ul>
<p><b>Kab use karein:</b> aise reusable containers aur algorithms jo sirf type mein alag hain — repositories, caches, <code>Result&lt;T&gt;</code> wrappers, paging (<code>PagedList&lt;T&gt;</code>), validation helpers. <b>Kab nahi:</b> jab hamesha ek hi type use hoga, to simple aur non-generic rakho; aur code review mein bahut saare type parameters aur nested constraints wale "clever" generics par sawaal uthao — reuse se zyada readability zaroori hai.</p>`
      },
      code: [{
        caption: {
          en: "A generic repository with constraints, a generic method, and covariance",
          hi: "Constraints वाली generic repository, एक generic method, और covariance",
          hg: "Constraints wali generic repository, ek generic method, aur covariance"
        },
        check: "run",
        expected: "Ravi\nnot found\n7\nmango\nAsha, Ravi",
        src: `var repo = new InMemoryRepository<Customer>();
repo.Add(new Customer(1, "Asha"));
repo.Add(new Customer(2, "Ravi"));
Console.WriteLine(repo.GetById(2)?.Name);
Console.WriteLine(repo.GetById(9)?.Name ?? "not found");

Console.WriteLine(Max(3, 7));             // T inferred as int (no boxing)
Console.WriteLine(Max("apple", "mango")); // T inferred as string
// Max(new object(), new object());       // CS0311: object is not IComparable<object>

// Covariance: IEnumerable<out T> lets IEnumerable<Customer> be used as IEnumerable<IEntity>
IEnumerable<IEntity> entities = repo.All();
Console.WriteLine(string.Join(", ", entities.OfType<Customer>().Select(c => c.Name)));
// List<IEntity> list = new List<Customer>();  // CS0029: List<T> is not covariant

static T Max<T>(T a, T b) where T : IComparable<T> => a.CompareTo(b) >= 0 ? a : b;

public interface IEntity { int Id { get; } }

public record Customer(int Id, string Name) : IEntity;

public class InMemoryRepository<T> where T : class, IEntity
{
    private readonly Dictionary<int, T> _items = new();

    public void Add(T item) => _items[item.Id] = item;
    public T? GetById(int id) => _items.TryGetValue(id, out var item) ? item : null;
    public IEnumerable<T> All() => _items.Values.OrderBy(x => x.Id);
}`
      }]
    },
    {
      id: "collections-in-code",
      depth: "detailed",
      title: {
        en: "Collections in code: Dictionary, HashSet, Queue/Stack, read-only, immutable, frozen, concurrent",
        hi: "Code में Collections: Dictionary, HashSet, Queue/Stack, read-only, immutable, frozen, concurrent",
        hg: "Code mein Collections: Dictionary, HashSet, Queue/Stack, read-only, immutable, frozen, concurrent"
      },
      body: {
        en: `<p><b>Analogy — railway reservation office:</b> the <b>chart of passengers</b> in coach order is a <code>List</code>; finding a booking <b>by PNR</b> is a <code>Dictionary</code>; the set of <b>station codes</b> (each appears once) is a <code>HashSet</code>; the <b>waiting list</b> (first come, first confirmed) is a <code>Queue</code>; the <b>stack of reservation forms</b> on the clerk's desk (the top one is handled first) is a <code>Stack</code>.</p>
<ul>
<li><b>Big-O cheat sheet</b>: <code>List&lt;T&gt;</code> index O(1), <code>Add</code> O(1) amortised, <code>Contains</code>/<code>Insert</code>/<code>Remove</code> O(n). <code>Dictionary</code>/<code>HashSet</code> lookup O(1) on average. <code>SortedDictionary</code> O(log n), always sorted by key.</li>
<li><b>Dictionary tips</b>: use <code>TryGetValue</code> (one lookup instead of <code>ContainsKey</code> + indexer); pass a comparer (<code>StringComparer.OrdinalIgnoreCase</code>) for case-insensitive keys; the indexer setter adds or overwrites, <code>Add</code> throws on a duplicate key. Do not rely on its enumeration order.</li>
<li><b>Modifying while iterating</b>: <code>Remove</code> inside <code>foreach</code> throws <code>InvalidOperationException</code> ("Collection was modified"). Use <code>RemoveAll</code>, or loop over a copy.</li>
<li><b>Read-only view</b> (<code>AsReadOnly()</code>, <code>IReadOnlyList&lt;T&gt;</code>): callers cannot change it, but they <b>do see</b> changes made to the inner list. <b>Immutable</b> (<code>ImmutableList&lt;T&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>): never changes; "Add" returns a new collection. <b>Frozen</b> (<code>FrozenDictionary</code>/<code>FrozenSet</code>, .NET 8+): slower to build, very fast to read — ideal for lookup tables built at startup.</li>
<li><b>Threads</b>: <code>List</code> and <code>Dictionary</code> are not safe for concurrent writes. Use <code>ConcurrentDictionary</code>, <code>ConcurrentQueue</code>, <code>Channel&lt;T&gt;</code> (producer/consumer), or a <code>lock</code>.</li>
</ul>
<p><b>When to use:</b> choose by the main operation — by position → <code>List</code>; by key → <code>Dictionary</code>; "seen already?" → <code>HashSet</code>; processing order → <code>Queue</code>/<code>Stack</code>/<code>PriorityQueue</code>; shared config read by every request → <code>Frozen*</code>. <b>When not:</b> do not use <code>List.Contains</code> inside a big loop (O(n²) overall) — build a <code>HashSet</code> first; and do not wrap everything in concurrent collections "just in case" — they cost more and hide design issues.</p>`,
        hi: `<p><b>Analogy — railway reservation office:</b> coach order में <b>passengers का chart</b> एक <code>List</code> है; <b>PNR से</b> booking ढूँढना <code>Dictionary</code> है; <b>station codes</b> का set (हर code एक बार) <code>HashSet</code> है; <b>waiting list</b> (पहले आओ, पहले confirm) <code>Queue</code> है; clerk की desk पर <b>reservation forms का ढेर</b> (सबसे ऊपर वाला पहले) <code>Stack</code> है।</p>
<ul>
<li><b>Big-O cheat sheet</b>: <code>List&lt;T&gt;</code> index O(1), <code>Add</code> amortised O(1), <code>Contains</code>/<code>Insert</code>/<code>Remove</code> O(n)। <code>Dictionary</code>/<code>HashSet</code> lookup average O(1)। <code>SortedDictionary</code> O(log n), हमेशा key से sorted।</li>
<li><b>Dictionary tips</b>: <code>TryGetValue</code> use करो (<code>ContainsKey</code> + indexer की जगह एक ही lookup); case-insensitive keys के लिए comparer दो (<code>StringComparer.OrdinalIgnoreCase</code>); indexer setter add या overwrite करता है, <code>Add</code> duplicate key पर exception देता है। इसके enumeration order पर भरोसा मत करो।</li>
<li><b>Iterate करते समय बदलना</b>: <code>foreach</code> के अंदर <code>Remove</code> करने पर <code>InvalidOperationException</code> ("Collection was modified") आता है। <code>RemoveAll</code> use करो, या copy पर loop चलाओ।</li>
<li><b>Read-only view</b> (<code>AsReadOnly()</code>, <code>IReadOnlyList&lt;T&gt;</code>): callers इसे बदल नहीं सकते, पर अंदर की list में हुए बदलाव उन्हें <b>दिखते हैं</b>। <b>Immutable</b> (<code>ImmutableList&lt;T&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>): कभी नहीं बदलता; "Add" नया collection return करता है। <b>Frozen</b> (<code>FrozenDictionary</code>/<code>FrozenSet</code>, .NET 8+): बनाने में धीमा, पढ़ने में बहुत तेज़ — startup पर बनने वाली lookup tables के लिए बढ़िया।</li>
<li><b>Threads</b>: <code>List</code> और <code>Dictionary</code> concurrent writes के लिए safe नहीं हैं। <code>ConcurrentDictionary</code>, <code>ConcurrentQueue</code>, <code>Channel&lt;T&gt;</code> (producer/consumer), या <code>lock</code> use करो।</li>
</ul>
<p><b>कब use करें:</b> मुख्य operation देखकर चुनो — position से → <code>List</code>; key से → <code>Dictionary</code>; "पहले देखा है?" → <code>HashSet</code>; processing order → <code>Queue</code>/<code>Stack</code>/<code>PriorityQueue</code>; हर request में पढ़ा जाने वाला shared config → <code>Frozen*</code>। <b>कब नहीं:</b> बड़े loop के अंदर <code>List.Contains</code> मत लगाओ (कुल मिलाकर O(n²)) — पहले <code>HashSet</code> बना लो; और "शायद ज़रूरत पड़े" सोचकर हर चीज़ concurrent collections में मत डालो — ये महँगे हैं और design की problems छुपा देते हैं।</p>`,
        hg: `<p><b>Analogy — railway reservation office:</b> coach order mein <b>passengers ka chart</b> ek <code>List</code> hai; <b>PNR se</b> booking dhoondhna <code>Dictionary</code> hai; <b>station codes</b> ka set (har code ek baar) <code>HashSet</code> hai; <b>waiting list</b> (pehle aao, pehle confirm) <code>Queue</code> hai; clerk ki desk par <b>reservation forms ka dher</b> (sabse upar wala pehle) <code>Stack</code> hai.</p>
<ul>
<li><b>Big-O cheat sheet</b>: <code>List&lt;T&gt;</code> index O(1), <code>Add</code> amortised O(1), <code>Contains</code>/<code>Insert</code>/<code>Remove</code> O(n). <code>Dictionary</code>/<code>HashSet</code> lookup average O(1). <code>SortedDictionary</code> O(log n), hamesha key se sorted.</li>
<li><b>Dictionary tips</b>: <code>TryGetValue</code> use karo (<code>ContainsKey</code> + indexer ki jagah ek hi lookup); case-insensitive keys ke liye comparer do (<code>StringComparer.OrdinalIgnoreCase</code>); indexer setter add ya overwrite karta hai, <code>Add</code> duplicate key par exception deta hai. Iske enumeration order par bharosa mat karo.</li>
<li><b>Iterate karte samay badalna</b>: <code>foreach</code> ke andar <code>Remove</code> karne par <code>InvalidOperationException</code> ("Collection was modified") aata hai. <code>RemoveAll</code> use karo, ya copy par loop chalao.</li>
<li><b>Read-only view</b> (<code>AsReadOnly()</code>, <code>IReadOnlyList&lt;T&gt;</code>): callers ise badal nahi sakte, par andar ki list mein hue badlaav unhe <b>dikhte hain</b>. <b>Immutable</b> (<code>ImmutableList&lt;T&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>): kabhi nahi badalta; "Add" naya collection return karta hai. <b>Frozen</b> (<code>FrozenDictionary</code>/<code>FrozenSet</code>, .NET 8+): banane mein dheema, padhne mein bahut tez — startup par banne wali lookup tables ke liye badhiya.</li>
<li><b>Threads</b>: <code>List</code> aur <code>Dictionary</code> concurrent writes ke liye safe nahi hain. <code>ConcurrentDictionary</code>, <code>ConcurrentQueue</code>, <code>Channel&lt;T&gt;</code> (producer/consumer), ya <code>lock</code> use karo.</li>
</ul>
<p><b>Kab use karein:</b> main operation dekhkar chuno — position se → <code>List</code>; key se → <code>Dictionary</code>; "pehle dekha hai?" → <code>HashSet</code>; processing order → <code>Queue</code>/<code>Stack</code>/<code>PriorityQueue</code>; har request mein padha jaane wala shared config → <code>Frozen*</code>. <b>Kab nahi:</b> bade loop ke andar <code>List.Contains</code> mat lagao (kul milakar O(n²)) — pehle <code>HashSet</code> bana lo; aur "shayad zaroorat pade" sochkar har cheez concurrent collections mein mat daalo — yeh mehenge hain aur design ki problems chhupa dete hain.</p>`
      },
      code: [{
        caption: {
          en: "Dictionary with a comparer, HashSet, Queue/Stack, read-only view vs immutable snapshot, FrozenSet",
          hi: "Comparer वाली Dictionary, HashSet, Queue/Stack, read-only view बनाम immutable snapshot, FrozenSet",
          hg: "Comparer wali Dictionary, HashSet, Queue/Stack, read-only view vs immutable snapshot, FrozenSet"
        },
        check: "run",
        expected: "atta: 10\nTrue\nTrue\nFalse\nAsha 3\nview=2 snapshot=1\nFalse",
        src: `using System.Collections.Frozen;
using System.Collections.Immutable;

// Dictionary: lookup by key; TryGetValue = one lookup instead of two
var stock = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase)
{
    ["atta"] = 10,
    ["dal"] = 0
};
if (stock.TryGetValue("ATTA", out int qty)) Console.WriteLine($"atta: {qty}");
stock["oil"] = 5;                           // indexer: add or overwrite
Console.WriteLine(stock.ContainsKey("Oil"));

// HashSet: uniqueness + fast Contains
var seenPnrs = new HashSet<string>();
Console.WriteLine(seenPnrs.Add("PNR1"));    // True: added
Console.WriteLine(seenPnrs.Add("PNR1"));    // False: already there

// Queue = first in, first out; Stack = last in, first out
var waitingList = new Queue<string>(["Asha", "Ravi"]);
var forms = new Stack<int>([1, 2, 3]);
Console.WriteLine($"{waitingList.Dequeue()} {forms.Pop()}");

// Read-only VIEW sees later changes; immutable SNAPSHOT does not
var list = new List<string> { "A" };
IReadOnlyList<string> view = list.AsReadOnly();
ImmutableList<string> snapshot = list.ToImmutableList();
list.Add("B");
Console.WriteLine($"view={view.Count} snapshot={snapshot.Count}");

// Frozen (.NET 8+): build once, read many times, very fast
FrozenSet<string> metroCities = new[] { "Delhi", "Mumbai", "Kolkata", "Chennai" }.ToFrozenSet();
Console.WriteLine(metroCities.Contains("Pune"));`
      }, {
        caption: {
          en: "C# 13 (.NET 9+): params collections — params is no longer limited to arrays",
          hi: "C# 13 (.NET 9+): params collections — params अब सिर्फ़ arrays तक सीमित नहीं",
          hg: "C# 13 (.NET 9+): params collections — params ab sirf arrays tak seemit nahi"
        },
        check: "run",
        expected: "6\n0\nAsha & Ravi",
        src: `Console.WriteLine(Sum(1, 2, 3));
Console.WriteLine(Sum());
Console.WriteLine(JoinNames("Asha", "Ravi"));

// params ReadOnlySpan<T>: the compiler can pass the values without allocating an array
static int Sum(params ReadOnlySpan<int> values)
{
    int total = 0;
    foreach (int v in values) total += v;
    return total;
}

static string JoinNames(params IEnumerable<string> names) => string.Join(" & ", names);`
      }]
    },
    {
      id: "delegates-events-in-code",
      depth: "detailed",
      title: {
        en: "Delegates, lambdas, closures and events in code",
        hi: "Code में Delegates, lambdas, closures और events",
        hg: "Code mein Delegates, lambdas, closures aur events"
      },
      body: {
        en: `<p><b>Analogy — food-delivery order updates:</b> when the restaurant marks an order "Ready", the customer app, the delivery partner app and the restaurant dashboard all get the update. The restaurant does not know or care who is listening — it just <b>raises the event</b>. Listeners <b>subscribe</b> (<code>+=</code>) and <b>unsubscribe</b> (<code>-=</code>).</p>
<ul>
<li>A <b>delegate</b> type is a class (derived from <code>MulticastDelegate</code>) that holds an <b>invocation list</b> of methods. Calling it calls each method in the order they were added.</li>
<li>If a multicast delegate returns a value, you get <b>only the last</b> method's result. If one handler throws, the remaining handlers do not run.</li>
<li><b>Lambdas</b> compile to a delegate (<code>Func</code>/<code>Action</code>) — or to an <b>expression tree</b> (<code>Expression&lt;Func&lt;T,bool&gt;&gt;</code>), which is how EF Core turns LINQ into SQL (Days 4–6).</li>
<li><b>Closures</b>: a lambda that uses an outer local variable <b>captures the variable</b> — the compiler moves it into a hidden class on the heap. Changing the variable later changes what the lambda sees. A <code>static</code> lambda (C# 9) cannot capture (CS8820) — handy to avoid accidental allocations.</li>
<li><b>Events</b>: the <code>event</code> keyword lets outsiders only <code>+=</code>/<code>-=</code>; raising or assigning from outside is CS0070. Convention: <code>EventHandler&lt;TEventArgs&gt;</code> with <code>(object? sender, TEventArgs e)</code>, raised with <code>Handler?.Invoke(this, e)</code>.</li>
<li><b>Memory leak trap</b>: the publisher's delegate holds a reference to every subscriber. A long-lived publisher (a singleton or a <code>static</code> event) keeps short-lived subscribers alive until they unsubscribe.</li>
</ul>
<p><b>When to use:</b> <code>Func</code>/<code>Action</code> parameters for small pluggable behaviour (a pricing rule, a retry callback); events when one object must notify <b>many</b> optional listeners inside the same process. <b>When not:</b> events between services (use a message broker — Day 16); and long chains of events that are hard to trace — a plain interface call or a mediator is often easier to debug. That is a trade-off to discuss with the team, not a fixed rule.</p>`,
        hi: `<p><b>Analogy — food-delivery order updates:</b> restaurant जब order को "Ready" mark करता है, तो customer app, delivery partner app और restaurant dashboard — सबको update मिल जाता है। Restaurant को पता या फ़िक्र नहीं कि कौन सुन रहा है — वो बस <b>event raise</b> करता है। Listeners <b>subscribe</b> (<code>+=</code>) और <b>unsubscribe</b> (<code>-=</code>) करते हैं।</p>
<ul>
<li><b>Delegate</b> type एक class है (<code>MulticastDelegate</code> से बनी) जो methods की एक <b>invocation list</b> रखती है। इसे call करो तो हर method उसी order में call होता है जिसमें जोड़ा गया था।</li>
<li>अगर multicast delegate value return करता है, तो <b>सिर्फ़ आख़िरी</b> method का result मिलता है। अगर एक handler exception फेंके, तो बाकी handlers नहीं चलते।</li>
<li><b>Lambdas</b> delegate (<code>Func</code>/<code>Action</code>) में compile होते हैं — या <b>expression tree</b> (<code>Expression&lt;Func&lt;T,bool&gt;&gt;</code>) में, और इसी से EF Core LINQ को SQL में बदलता है (Days 4–6)।</li>
<li><b>Closures</b>: जो lambda बाहर का local variable use करता है वो <b>variable को capture</b> करता है — compiler उसे heap पर एक छुपी class में ले जाता है। बाद में variable बदलो तो lambda को भी बदली value दिखती है। <code>static</code> lambda (C# 9) capture नहीं कर सकता (CS8820) — गलती से होने वाले allocations रोकने में काम आता है।</li>
<li><b>Events</b>: <code>event</code> keyword से बाहर वाले सिर्फ़ <code>+=</code>/<code>-=</code> कर सकते हैं; बाहर से raise या assign करना CS0070 है। Convention: <code>EventHandler&lt;TEventArgs&gt;</code> जिसमें <code>(object? sender, TEventArgs e)</code> हो, और raise करो <code>Handler?.Invoke(this, e)</code> से।</li>
<li><b>Memory leak trap</b>: publisher का delegate हर subscriber का reference रखता है। लंबे समय तक रहने वाला publisher (singleton या <code>static</code> event) कम समय वाले subscribers को तब तक ज़िंदा रखता है जब तक वो unsubscribe न करें।</li>
</ul>
<p><b>कब use करें:</b> छोटे pluggable behaviour के लिए <code>Func</code>/<code>Action</code> parameters (pricing rule, retry callback); events तब, जब एक object को उसी process में <b>कई</b> optional listeners को बताना हो। <b>कब नहीं:</b> services के बीच events (message broker use करो — Day 16); और events की लंबी chains जिन्हें trace करना मुश्किल हो — सीधा interface call या mediator debug करने में अक्सर आसान होता है। यह team के साथ discuss करने वाला trade-off है, कोई fixed rule नहीं।</p>`,
        hg: `<p><b>Analogy — food-delivery order updates:</b> restaurant jab order ko "Ready" mark karta hai, to customer app, delivery partner app aur restaurant dashboard — sabko update mil jaata hai. Restaurant ko pata ya fikr nahi ki kaun sun raha hai — woh bas <b>event raise</b> karta hai. Listeners <b>subscribe</b> (<code>+=</code>) aur <b>unsubscribe</b> (<code>-=</code>) karte hain.</p>
<ul>
<li><b>Delegate</b> type ek class hai (<code>MulticastDelegate</code> se bani) jo methods ki ek <b>invocation list</b> rakhti hai. Ise call karo to har method usi order mein call hota hai jismein joda gaya tha.</li>
<li>Agar multicast delegate value return karta hai, to <b>sirf aakhri</b> method ka result milta hai. Agar ek handler exception phenke, to baaki handlers nahi chalte.</li>
<li><b>Lambdas</b> delegate (<code>Func</code>/<code>Action</code>) mein compile hote hain — ya <b>expression tree</b> (<code>Expression&lt;Func&lt;T,bool&gt;&gt;</code>) mein, aur isi se EF Core LINQ ko SQL mein badalta hai (Days 4–6).</li>
<li><b>Closures</b>: jo lambda bahar ka local variable use karta hai woh <b>variable ko capture</b> karta hai — compiler use heap par ek chhupi class mein le jaata hai. Baad mein variable badlo to lambda ko bhi badli value dikhti hai. <code>static</code> lambda (C# 9) capture nahi kar sakta (CS8820) — galti se hone wale allocations rokne mein kaam aata hai.</li>
<li><b>Events</b>: <code>event</code> keyword se bahar wale sirf <code>+=</code>/<code>-=</code> kar sakte hain; bahar se raise ya assign karna CS0070 hai. Convention: <code>EventHandler&lt;TEventArgs&gt;</code> jismein <code>(object? sender, TEventArgs e)</code> ho, aur raise karo <code>Handler?.Invoke(this, e)</code> se.</li>
<li><b>Memory leak trap</b>: publisher ka delegate har subscriber ka reference rakhta hai. Lambe samay tak rehne wala publisher (singleton ya <code>static</code> event) kam samay wale subscribers ko tab tak zinda rakhta hai jab tak woh unsubscribe na karein.</li>
</ul>
<p><b>Kab use karein:</b> chhote pluggable behaviour ke liye <code>Func</code>/<code>Action</code> parameters (pricing rule, retry callback); events tab, jab ek object ko usi process mein <b>kai</b> optional listeners ko batana ho. <b>Kab nahi:</b> services ke beech events (message broker use karo — Day 16); aur events ki lambi chains jinhe trace karna mushkil ho — seedha interface call ya mediator debug karne mein aksar aasaan hota hai. Yeh team ke saath discuss karne wala trade-off hai, koi fixed rule nahi.</p>`
      },
      code: [{
        caption: {
          en: "Func / Action / Predicate, behaviour as a parameter, closures, multicast",
          hi: "Func / Action / Predicate, parameter के रूप में behaviour, closures, multicast",
          hg: "Func / Action / Predicate, parameter ke roop mein behaviour, closures, multicast"
        },
        check: "run",
        expected: "[log] 118.00 True\n180\n50\nSMS: Order shipped\nEmail: Order shipped",
        src: `Func<decimal, decimal> addGst = amount => amount * 1.18m;   // takes decimal, returns decimal
Action<string> log = msg => Console.WriteLine($"[log] {msg}"); // returns void
Predicate<int> isEven = n => n % 2 == 0;                       // returns bool
log($"{addGst(100m)} {isEven(4)}");

// Behaviour as a parameter: a small strategy without extra classes
Console.WriteLine(ApplyRule(200m, price => price - 20m));

// Closure: the lambda captures the VARIABLE, not its value at that moment
int discount = 10;
Func<int, int> priceAfterDiscount = p => p - discount;
discount = 50;
Console.WriteLine(priceAfterDiscount(100));

// Multicast: one call, every method in the invocation list, in order
Action<string> notify = s => Console.WriteLine($"SMS: {s}");
notify += s => Console.WriteLine($"Email: {s}");
notify("Order shipped");

static decimal ApplyRule(decimal price, Func<decimal, decimal> rule) => rule(price);`
      }, {
        caption: {
          en: "Events: subscribe, unsubscribe, raise safely with ?.Invoke",
          hi: "Events: subscribe, unsubscribe, और ?.Invoke से safely raise करना",
          hg: "Events: subscribe, unsubscribe, aur ?.Invoke se safely raise karna"
        },
        check: "run",
        expected: "SMS to customer: ORD-7 is Packed\nDashboard: ORD-7 -> Packed\nDashboard: ORD-7 -> Delivered",
        src: `var tracker = new OrderTracker("ORD-7");

EventHandler<OrderStatusChangedEventArgs> smsHandler =
    (sender, e) => Console.WriteLine($"SMS to customer: {e.OrderId} is {e.Status}");
tracker.StatusChanged += smsHandler;
tracker.StatusChanged += (sender, e) => Console.WriteLine($"Dashboard: {e.OrderId} -> {e.Status}");

tracker.UpdateStatus("Packed");
tracker.StatusChanged -= smsHandler;          // unsubscribe (keep a reference to do this)
tracker.UpdateStatus("Delivered");
// tracker.StatusChanged(tracker, null!);     // CS0070: only OrderTracker can raise it

public class OrderStatusChangedEventArgs(string orderId, string status) : EventArgs
{
    public string OrderId { get; } = orderId;
    public string Status { get; } = status;
}

public class OrderTracker(string orderId)
{
    public event EventHandler<OrderStatusChangedEventArgs>? StatusChanged;

    public void UpdateStatus(string status) =>
        StatusChanged?.Invoke(this, new OrderStatusChangedEventArgs(orderId, status)); // ?. = no subscribers is fine
}`
      }]
    },
    {
      id: "extension-methods-in-code",
      depth: "detailed",
      title: {
        en: "Extension methods in code (and C# 14 extension members)",
        hi: "Code में Extension methods (और C# 14 के extension members)",
        hg: "Code mein Extension methods (aur C# 14 ke extension members)"
      },
      body: {
        en: `<p><b>Analogy — mobile cover with a stand:</b> you cannot open your phone and add a stand inside it, but a cover adds that feature from outside. The phone does not change; the cover only uses what the phone already exposes. An extension method adds a method to a type <b>from outside</b>, using only its public members.</p>
<ul>
<li><b>Rules</b>: a <code>static</code> method in a non-generic, non-nested <code>static</code> class (else CS1106); the first parameter has <code>this</code>. Callers need the class's namespace in a <code>using</code>.</li>
<li>It is <b>pure syntax</b>: <code>name.IsBlank()</code> compiles to <code>StringExtensions.IsBlank(name)</code>. So it can be called on <code>null</code> without a <code>NullReferenceException</code> — decide whether that makes sense, or throw <code>ArgumentNullException</code> yourself.</li>
<li>It is chosen at <b>compile time</b> from the declared type — no <code>virtual</code> dispatch. An applicable <b>instance method always wins</b> over an extension with the same signature.</li>
<li>It cannot see <code>private</code> or <code>protected</code> members.</li>
<li>Works on interfaces, sealed classes, structs and enums. <b>LINQ</b> is a set of extension methods on <code>IEnumerable&lt;T&gt;</code>; ASP.NET Core uses them for setup: <code>services.AddOrdering()</code> groups a feature's DI registrations.</li>
<li><b>C# 14 (.NET 10)</b> adds <b>extension members</b>: an <code>extension(...)</code> block inside the static class can declare extension <b>properties</b> and <b>static</b> extension members, not only methods. Existing extension methods keep working.</li>
</ul>
<p><b>When to use:</b> helpers for types you do not own (<code>string</code>, <code>IEnumerable&lt;T&gt;</code>, <code>IServiceCollection</code>), fluent setup APIs, small reusable conversions. <b>When not:</b> logic that needs private state or is core domain behaviour — put it in the class itself; and avoid piling extensions on <code>object</code> or <code>string</code> in shared libraries — they show up in everyone's IntelliSense.</p>`,
        hi: `<p><b>Analogy — stand वाला mobile cover:</b> आप phone खोलकर अंदर stand नहीं जोड़ सकते, पर cover बाहर से वो feature जोड़ देता है। Phone नहीं बदलता; cover बस वही use करता है जो phone पहले से बाहर दिखाता है। Extension method किसी type में <b>बाहर से</b> method जोड़ता है, सिर्फ़ उसके public members use करके।</p>
<ul>
<li><b>Rules</b>: non-generic, non-nested <code>static</code> class के अंदर <code>static</code> method (वरना CS1106); पहले parameter पर <code>this</code>। Callers को उस class का namespace <code>using</code> में चाहिए।</li>
<li>यह <b>सिर्फ़ syntax</b> है: <code>name.IsBlank()</code> compile होकर <code>StringExtensions.IsBlank(name)</code> बनता है। इसलिए इसे <code>null</code> पर भी बिना <code>NullReferenceException</code> के call कर सकते हो — तय करो कि यह सही है या नहीं, वरना ख़ुद <code>ArgumentNullException</code> फेंको।</li>
<li>यह <b>compile time</b> पर declared type से चुना जाता है — कोई <code>virtual</code> dispatch नहीं। Same signature वाला लागू होने लायक <b>instance method हमेशा जीतता है</b>।</li>
<li>यह <code>private</code> या <code>protected</code> members नहीं देख सकता।</li>
<li>Interfaces, sealed classes, structs और enums पर भी चलता है। <b>LINQ</b> <code>IEnumerable&lt;T&gt;</code> पर extension methods का set है; ASP.NET Core setup में इन्हें use करता है: <code>services.AddOrdering()</code> किसी feature की सारी DI registrations एक जगह रखता है।</li>
<li><b>C# 14 (.NET 10)</b> में <b>extension members</b> आए: static class के अंदर <code>extension(...)</code> block में extension <b>properties</b> और <b>static</b> extension members भी लिख सकते हो, सिर्फ़ methods नहीं। पुराने extension methods वैसे ही चलते रहते हैं।</li>
</ul>
<p><b>कब use करें:</b> जो types आपके नहीं हैं (<code>string</code>, <code>IEnumerable&lt;T&gt;</code>, <code>IServiceCollection</code>) उनके helpers, fluent setup APIs, छोटे reusable conversions। <b>कब नहीं:</b> जिस logic को private state चाहिए या जो core domain behaviour है — उसे class में ही रखो; और shared libraries में <code>object</code> या <code>string</code> पर ढेर सारे extensions मत डालो — वो सबकी IntelliSense में दिखते हैं।</p>`,
        hg: `<p><b>Analogy — stand wala mobile cover:</b> aap phone kholkar andar stand nahi jod sakte, par cover bahar se woh feature jod deta hai. Phone nahi badalta; cover bas wahi use karta hai jo phone pehle se bahar dikhata hai. Extension method kisi type mein <b>bahar se</b> method jodta hai, sirf uske public members use karke.</p>
<ul>
<li><b>Rules</b>: non-generic, non-nested <code>static</code> class ke andar <code>static</code> method (warna CS1106); pehle parameter par <code>this</code>. Callers ko us class ka namespace <code>using</code> mein chahiye.</li>
<li>Yeh <b>sirf syntax</b> hai: <code>name.IsBlank()</code> compile hokar <code>StringExtensions.IsBlank(name)</code> banta hai. Isliye ise <code>null</code> par bhi bina <code>NullReferenceException</code> ke call kar sakte ho — tay karo ki yeh sahi hai ya nahi, warna khud <code>ArgumentNullException</code> phenko.</li>
<li>Yeh <b>compile time</b> par declared type se chuna jaata hai — koi <code>virtual</code> dispatch nahi. Same signature wala laagu hone laayak <b>instance method hamesha jeetta hai</b>.</li>
<li>Yeh <code>private</code> ya <code>protected</code> members nahi dekh sakta.</li>
<li>Interfaces, sealed classes, structs aur enums par bhi chalta hai. <b>LINQ</b> <code>IEnumerable&lt;T&gt;</code> par extension methods ka set hai; ASP.NET Core setup mein inhe use karta hai: <code>services.AddOrdering()</code> kisi feature ki saari DI registrations ek jagah rakhta hai.</li>
<li><b>C# 14 (.NET 10)</b> mein <b>extension members</b> aaye: static class ke andar <code>extension(...)</code> block mein extension <b>properties</b> aur <b>static</b> extension members bhi likh sakte ho, sirf methods nahi. Purane extension methods waise hi chalte rehte hain.</li>
</ul>
<p><b>Kab use karein:</b> jo types aapke nahi hain (<code>string</code>, <code>IEnumerable&lt;T&gt;</code>, <code>IServiceCollection</code>) unke helpers, fluent setup APIs, chhote reusable conversions. <b>Kab nahi:</b> jis logic ko private state chahiye ya jo core domain behaviour hai — use class mein hi rakho; aur shared libraries mein <code>object</code> ya <code>string</code> par dher saare extensions mat daalo — woh sabki IntelliSense mein dikhte hain.</p>`
      },
      code: [{
        caption: {
          en: "Extension methods: called on null, compiled to a static call, instance method wins",
          hi: "Extension methods: null पर call, static call में compile, instance method जीतता है",
          hg: "Extension methods: null par call, static call mein compile, instance method jeetta hai"
        },
        check: "run",
        expected: "True\nTrue\nFalse\nProduct: Atta\n2",
        src: `string? name = null;
Console.WriteLine(name.IsBlank());                 // works on null: it is just a static call
Console.WriteLine("   ".IsBlank());
Console.WriteLine(StringExtensions.IsBlank("x"));  // what the compiler really calls

var atta = new Product("Atta");
Console.WriteLine(atta.Describe());                // instance method wins over the extension

int[] orders = [120, 80, 300];
Console.WriteLine(orders.CountAbove(100));         // works on arrays/lists via IEnumerable<T>

public static class StringExtensions
{
    public static bool IsBlank(this string? value) => string.IsNullOrWhiteSpace(value);
}

public static class EnumerableExtensions
{
    public static int CountAbove(this IEnumerable<int> source, int limit)
    {
        ArgumentNullException.ThrowIfNull(source);
        return source.Count(x => x > limit);
    }
}

public class Product(string name)
{
    public string Name { get; } = name;
    public string Describe() => $"Product: {Name}";
}

public static class ProductExtensions
{
    public static string Describe(this Product p) => "extension";   // never chosen: instance method wins
}`
      }, {
        caption: {
          en: "C# 14 only (.NET 10 SDK): extension members — extension property and static extension member",
          hi: "सिर्फ़ C# 14 (.NET 10 SDK): extension members — extension property और static extension member",
          hg: "Sirf C# 14 (.NET 10 SDK): extension members — extension property aur static extension member"
        },
        check: "none",
        src: `// C# 14: needs the .NET 10 SDK (not compiled here - local SDK is .NET 9 / C# 13)
string? city = "  ";
if (city.IsBlank)                       // extension PROPERTY - no ()
    Console.WriteLine(string.Placeholder);

public static class StringExtensions
{
    extension(string? value)            // members that act on a string instance
    {
        public bool IsBlank => string.IsNullOrWhiteSpace(value);
    }

    extension(string)                   // static members added to the string type itself
    {
        public static string Placeholder => "(not provided)";
    }
}`
      }]
    }
  ],
  qa: [
    {
      id: "value-vs-reference",
      depth: "short",
      q: "What is the difference between value types and reference types in C#?",
      answer: "A value-type variable holds the data itself, so assignment copies the data. A reference-type variable holds a reference to an object, so assignment copies the reference and both variables share one object.",
      meaning: {
        hi: "Value-type variable में data ख़ुद रहता है, इसलिए assignment data copy करता है। Reference-type variable में object का reference रहता है, इसलिए assignment reference copy करता है और दोनों variables एक ही object share करते हैं।",
        hg: "Value-type variable mein data khud rehta hai, isliye assignment data copy karta hai. Reference-type variable mein object ka reference rehta hai, isliye assignment reference copy karta hai aur dono variables ek hi object share karte hain."
      },
      explain: {
        en: `<ul>
<li><b>Value types</b>: <code>int</code>, <code>decimal</code>, <code>bool</code>, <code>enum</code>, <code>struct</code>, <code>DateTime</code>, tuples. Default = zero. Cannot be <code>null</code> unless written as <code>int?</code> (<code>Nullable&lt;T&gt;</code>). Structs cannot inherit from another struct or class, but can implement interfaces.</li>
<li><b>Reference types</b>: <code>class</code>, <code>interface</code>, <code>delegate</code>, <code>record</code>, <code>string</code>, arrays. Default = <code>null</code>. Support inheritance.</li>
<li><b>Passing to a method</b>: both are passed by value by default — for a reference type the <i>reference</i> is copied, so the method can change the object but cannot replace the caller's variable (unless <code>ref</code>).</li>
<li><b>Equality</b>: a class compares references by default; a struct's <code>Equals</code> compares field values.</li>
</ul>
<p>Follow-up: "Is <code>string</code> a value type?" — No. It is a reference type that <i>behaves</i> like a value: immutable, and <code>==</code> compares text.</p>
<p>Follow-up: "Give a bug you have seen." — e.g. two lists "copied" with <code>var b = a;</code> and then one changed — both changed, because only the reference was copied.</p>`,
        hi: `<ul>
<li><b>Value types</b>: <code>int</code>, <code>decimal</code>, <code>bool</code>, <code>enum</code>, <code>struct</code>, <code>DateTime</code>, tuples। Default = zero। <code>null</code> नहीं हो सकते जब तक <code>int?</code> (<code>Nullable&lt;T&gt;</code>) न लिखो। Struct किसी दूसरे struct या class से inherit नहीं कर सकता, पर interfaces implement कर सकता है।</li>
<li><b>Reference types</b>: <code>class</code>, <code>interface</code>, <code>delegate</code>, <code>record</code>, <code>string</code>, arrays। Default = <code>null</code>। Inheritance support करते हैं।</li>
<li><b>Method में pass करना</b>: by default दोनों by value pass होते हैं — reference type में <i>reference</i> copy होता है, इसलिए method object बदल सकता है पर caller का variable replace नहीं कर सकता (जब तक <code>ref</code> न हो)।</li>
<li><b>Equality</b>: class by default references compare करती है; struct का <code>Equals</code> field values compare करता है।</li>
</ul>
<p>Follow-up: "क्या <code>string</code> value type है?" — नहीं। यह reference type है जो value की तरह <i>behave</i> करती है: immutable है, और <code>==</code> text compare करता है।</p>
<p>Follow-up: "कोई bug बताओ जो आपने देखा हो।" — जैसे दो lists को <code>var b = a;</code> से "copy" किया और फिर एक बदली — दोनों बदल गईं, क्योंकि सिर्फ़ reference copy हुआ था।</p>`,
        hg: `<ul>
<li><b>Value types</b>: <code>int</code>, <code>decimal</code>, <code>bool</code>, <code>enum</code>, <code>struct</code>, <code>DateTime</code>, tuples. Default = zero. <code>null</code> nahi ho sakte jab tak <code>int?</code> (<code>Nullable&lt;T&gt;</code>) na likho. Struct kisi doosre struct ya class se inherit nahi kar sakta, par interfaces implement kar sakta hai.</li>
<li><b>Reference types</b>: <code>class</code>, <code>interface</code>, <code>delegate</code>, <code>record</code>, <code>string</code>, arrays. Default = <code>null</code>. Inheritance support karte hain.</li>
<li><b>Method mein pass karna</b>: by default dono by value pass hote hain — reference type mein <i>reference</i> copy hota hai, isliye method object badal sakta hai par caller ka variable replace nahi kar sakta (jab tak <code>ref</code> na ho).</li>
<li><b>Equality</b>: class by default references compare karti hai; struct ka <code>Equals</code> field values compare karta hai.</li>
</ul>
<p>Follow-up: "Kya <code>string</code> value type hai?" — Nahi. Yeh reference type hai jo value ki tarah <i>behave</i> karti hai: immutable hai, aur <code>==</code> text compare karta hai.</p>
<p>Follow-up: "Koi bug batao jo aapne dekha ho." — Jaise do lists ko <code>var b = a;</code> se "copy" kiya aur phir ek badli — dono badal gayin, kyunki sirf reference copy hua tha.</p>`
      }
    },
    {
      id: "stack-vs-heap",
      depth: "short",
      q: "Where are value types and reference types stored — on the stack or the heap?",
      answer: "Reference-type objects live on the managed heap. A value type lives where its container lives: on the stack as a local variable, inside the object on the heap as a field, and on the heap when boxed or captured by a lambda.",
      meaning: {
        hi: "Reference-type objects managed heap पर रहते हैं। Value type वहीं रहता है जहाँ उसका container है: local variable हो तो stack पर, field हो तो heap पर object के अंदर, और boxed हो या lambda ने capture किया हो तो heap पर।",
        hg: "Reference-type objects managed heap par rehte hain. Value type wahin rehta hai jahan uska container hai: local variable ho to stack par, field ho to heap par object ke andar, aur boxed ho ya lambda ne capture kiya ho to heap par."
      },
      explain: {
        en: `<p>The common answer "value types on the stack, reference types on the heap" is <b>half right</b>, and interviewers for senior roles notice it.</p>
<ul>
<li><b>Stack</b>: one per thread; each method call gets a frame that is freed automatically when the method returns. Very cheap.</li>
<li><b>Heap</b>: shared memory for objects; freed by the <b>garbage collector</b> when nothing references them (GC generations — Day 3).</li>
<li>An <code>int</code> field of an <code>Order</code> object lives <b>inside</b> that object on the heap. An <code>int[]</code> keeps all its ints on the heap. A local captured by a lambda or used across <code>await</code> is moved into a compiler-generated object on the heap.</li>
<li>The reference itself (the "address") is stored like a value: a local reference is on the stack, the object it points to is on the heap.</li>
<li>In .NET 10 the JIT can even stack-allocate some small objects that never leave a method (escape analysis) — an optimisation you should not depend on.</li>
</ul>
<p><b>TL angle:</b> what matters in design is the <b>semantics</b> (copy vs share) and the <b>cost</b> (allocations create GC work; large structs are expensive to copy). Storage location is an implementation detail.</p>
<p>Follow-up: "Then why do people say value types are faster?" — a local struct needs no heap allocation and no GC; but a large struct copied around often can be slower than a class.</p>`,
        hi: `<p>आम जवाब "value types stack पर, reference types heap पर" <b>आधा सही</b> है, और senior roles के interviewers यह notice करते हैं।</p>
<ul>
<li><b>Stack</b>: हर thread का अपना; हर method call को एक frame मिलता है जो method return होते ही अपने-आप free हो जाता है। बहुत सस्ता।</li>
<li><b>Heap</b>: objects के लिए shared memory; जब किसी का reference न बचे तो <b>garbage collector</b> इसे free करता है (GC generations — Day 3)।</li>
<li><code>Order</code> object का <code>int</code> field उसी object के <b>अंदर</b> heap पर रहता है। <code>int[]</code> अपने सारे ints heap पर रखता है। Lambda ने जो local capture किया या जो <code>await</code> के पार use हुआ, वो compiler के बनाए object में heap पर चला जाता है।</li>
<li>Reference ख़ुद ("address") एक value की तरह store होता है: local reference stack पर, और जिस object पर वो point करता है वो heap पर।</li>
<li>.NET 10 में JIT कुछ छोटे objects को, जो method से बाहर नहीं जाते, stack पर भी allocate कर सकता है (escape analysis) — यह optimisation है, इस पर depend मत करो।</li>
</ul>
<p><b>TL angle:</b> design में ज़रूरी है <b>semantics</b> (copy बनाम share) और <b>cost</b> (allocations से GC का काम बढ़ता है; बड़े structs copy करना महँगा है)। Storage location एक implementation detail है।</p>
<p>Follow-up: "तो लोग क्यों कहते हैं कि value types तेज़ हैं?" — local struct को heap allocation और GC नहीं चाहिए; पर बार-बार copy होने वाला बड़ा struct class से धीमा भी हो सकता है।</p>`,
        hg: `<p>Aam jawaab "value types stack par, reference types heap par" <b>aadha sahi</b> hai, aur senior roles ke interviewers yeh notice karte hain.</p>
<ul>
<li><b>Stack</b>: har thread ka apna; har method call ko ek frame milta hai jo method return hote hi apne-aap free ho jaata hai. Bahut sasta.</li>
<li><b>Heap</b>: objects ke liye shared memory; jab kisi ka reference na bache to <b>garbage collector</b> ise free karta hai (GC generations — Day 3).</li>
<li><code>Order</code> object ka <code>int</code> field usi object ke <b>andar</b> heap par rehta hai. <code>int[]</code> apne saare ints heap par rakhta hai. Lambda ne jo local capture kiya ya jo <code>await</code> ke paar use hua, woh compiler ke banaye object mein heap par chala jaata hai.</li>
<li>Reference khud ("address") ek value ki tarah store hota hai: local reference stack par, aur jis object par woh point karta hai woh heap par.</li>
<li>.NET 10 mein JIT kuch chhote objects ko, jo method se bahar nahi jaate, stack par bhi allocate kar sakta hai (escape analysis) — yeh optimisation hai, is par depend mat karo.</li>
</ul>
<p><b>TL angle:</b> design mein zaroori hai <b>semantics</b> (copy vs share) aur <b>cost</b> (allocations se GC ka kaam badhta hai; bade structs copy karna mehenga hai). Storage location ek implementation detail hai.</p>
<p>Follow-up: "To log kyun kehte hain ki value types tez hain?" — local struct ko heap allocation aur GC nahi chahiye; par baar-baar copy hone wala bada struct class se dheema bhi ho sakta hai.</p>`
      }
    },
    {
      id: "boxing-unboxing",
      depth: "short",
      q: "What is boxing and unboxing? Why should we avoid it?",
      answer: "Boxing wraps a value type in a heap object when it is used as object or as an interface; unboxing casts it back to the exact type. Each box costs an allocation and a copy, so avoid it in hot paths by using generics.",
      meaning: {
        hi: "Boxing मतलब value type को object या interface की तरह use करने पर उसे heap object में लपेटना; unboxing मतलब exact type में cast करके वापस निकालना। हर box में allocation और copy का खर्च है, इसलिए hot paths में generics use करके इससे बचो।",
        hg: "Boxing matlab value type ko object ya interface ki tarah use karne par use heap object mein lapetna; unboxing matlab exact type mein cast karke wapas nikaalna. Har box mein allocation aur copy ka kharch hai, isliye hot paths mein generics use karke isse bacho."
      },
      explain: {
        en: `<ul>
<li><b>Where it hides</b>: non-generic collections (<code>ArrayList</code>, <code>Hashtable</code>), methods taking <code>object</code> (e.g. <code>string.Format("{0}", 5)</code>), casting a struct to an interface (<code>IComparable c = 5;</code>), and storing structs in <code>object</code> fields.</li>
<li><b>The copy</b>: the box holds a <b>snapshot</b>. Changing the original variable later does not change the box (see the puzzles).</li>
<li><b>Unboxing rule</b>: the cast must match the exact boxed type (or its nullable). <code>(long)obj</code> on a boxed <code>int</code> throws <code>InvalidCastException</code>.</li>
<li><b>Fixes</b>: generic collections and methods, <code>IEquatable&lt;T&gt;</code>/<code>IComparable&lt;T&gt;</code>, constraints like <code>where T : IComparable&lt;T&gt;</code> (calls on a struct <code>T</code> do not box).</li>
</ul>
<p>Follow-up: "How would you find boxing in a real app?" — look at allocation profiles (Visual Studio profiler, PerfView, <code>dotnet-trace</code>/<code>dotnet-counters</code>); in IL it is the <code>box</code> instruction.</p>
<p><b>TL angle:</b> do not micro-optimise every box; care about it in hot loops and high-throughput endpoints.</p>`,
        hi: `<ul>
<li><b>यह कहाँ छुपी होती है</b>: non-generic collections (<code>ArrayList</code>, <code>Hashtable</code>), <code>object</code> लेने वाले methods (जैसे <code>string.Format("{0}", 5)</code>), struct को interface में cast करना (<code>IComparable c = 5;</code>), और structs को <code>object</code> fields में रखना।</li>
<li><b>Copy</b>: box में एक <b>snapshot</b> होता है। बाद में original variable बदलो तो box नहीं बदलता (puzzles देखो)।</li>
<li><b>Unboxing rule</b>: cast ठीक उसी type से होना चाहिए जो box किया था (या उसका nullable)। Boxed <code>int</code> पर <code>(long)obj</code> करने से <code>InvalidCastException</code> आता है।</li>
<li><b>Fixes</b>: generic collections और methods, <code>IEquatable&lt;T&gt;</code>/<code>IComparable&lt;T&gt;</code>, और <code>where T : IComparable&lt;T&gt;</code> जैसे constraints (struct <code>T</code> पर calls box नहीं करतीं)।</li>
</ul>
<p>Follow-up: "Real app में boxing कैसे ढूँढोगे?" — allocation profiles देखो (Visual Studio profiler, PerfView, <code>dotnet-trace</code>/<code>dotnet-counters</code>); IL में यह <code>box</code> instruction है।</p>
<p><b>TL angle:</b> हर box को micro-optimise मत करो; hot loops और high-throughput endpoints में इसका ध्यान रखो।</p>`,
        hg: `<ul>
<li><b>Yeh kahan chhupi hoti hai</b>: non-generic collections (<code>ArrayList</code>, <code>Hashtable</code>), <code>object</code> lene wale methods (jaise <code>string.Format("{0}", 5)</code>), struct ko interface mein cast karna (<code>IComparable c = 5;</code>), aur structs ko <code>object</code> fields mein rakhna.</li>
<li><b>Copy</b>: box mein ek <b>snapshot</b> hota hai. Baad mein original variable badlo to box nahi badalta (puzzles dekho).</li>
<li><b>Unboxing rule</b>: cast theek usi type se hona chahiye jo box kiya tha (ya uska nullable). Boxed <code>int</code> par <code>(long)obj</code> karne se <code>InvalidCastException</code> aata hai.</li>
<li><b>Fixes</b>: generic collections aur methods, <code>IEquatable&lt;T&gt;</code>/<code>IComparable&lt;T&gt;</code>, aur <code>where T : IComparable&lt;T&gt;</code> jaise constraints (struct <code>T</code> par calls box nahi karti).</li>
</ul>
<p>Follow-up: "Real app mein boxing kaise dhoondhoge?" — allocation profiles dekho (Visual Studio profiler, PerfView, <code>dotnet-trace</code>/<code>dotnet-counters</code>); IL mein yeh <code>box</code> instruction hai.</p>
<p><b>TL angle:</b> har box ko micro-optimise mat karo; hot loops aur high-throughput endpoints mein iska dhyaan rakho.</p>`
      }
    },
    {
      id: "string-vs-stringbuilder",
      depth: "short",
      q: "String vs StringBuilder — what is the difference and when would you use which?",
      answer: "string is immutable, so every change creates a new string; StringBuilder edits one growable buffer. I use StringBuilder when appending in a loop or an unknown number of times, and concatenation or interpolation for a few fixed pieces.",
      meaning: {
        hi: "string immutable है, इसलिए हर बदलाव नई string बनाता है; StringBuilder एक बढ़ने वाले buffer को ही edit करता है। Loop में या पता न हो कितनी बार append करना है तो StringBuilder, और कुछ fixed हिस्सों के लिए concatenation या interpolation।",
        hg: "string immutable hai, isliye har badlaav nayi string banata hai; StringBuilder ek badhne wale buffer ko hi edit karta hai. Loop mein ya pata na ho kitni baar append karna hai to StringBuilder, aur kuch fixed hisson ke liye concatenation ya interpolation."
      },
      explain: {
        en: `<ul>
<li><code>s += x</code> in a loop of n items copies the growing text each time — roughly O(n²) character copies plus n garbage strings.</li>
<li><code>StringBuilder</code> appends into an internal buffer that grows in chunks; <code>ToString()</code> makes the final string once. Give a <code>capacity</code> if you know the rough size.</li>
<li>The compiler already optimises simple cases: <code>a + b + c</code> becomes one <code>string.Concat</code> call; constant pieces (<code>"a" + "b"</code>) are joined at compile time; <code>$"..."</code> (C# 10+) uses an efficient interpolation handler.</li>
<li>For a collection, <code>string.Join(", ", items)</code> is clearer than any loop.</li>
</ul>
<p>Follow-up: "Is StringBuilder always faster?" — No. For two or three pieces it adds overhead and noise; measure before "optimising".</p>
<p>Follow-up: "Is StringBuilder thread-safe?" — No; do not share one instance across threads.</p>`,
        hi: `<ul>
<li>n items वाले loop में <code>s += x</code> हर बार बढ़ता हुआ text copy करता है — लगभग O(n²) character copies और n garbage strings।</li>
<li><code>StringBuilder</code> अंदर के buffer में append करता है जो chunks में बढ़ता है; <code>ToString()</code> आख़िरी string एक बार बनाता है। अगर size का अंदाज़ा है तो <code>capacity</code> दे दो।</li>
<li>Compiler simple cases पहले से optimise करता है: <code>a + b + c</code> एक <code>string.Concat</code> call बन जाता है; constant हिस्से (<code>"a" + "b"</code>) compile time पर ही जुड़ जाते हैं; <code>$"..."</code> (C# 10+) एक efficient interpolation handler use करता है।</li>
<li>Collection के लिए <code>string.Join(", ", items)</code> किसी भी loop से ज़्यादा साफ़ है।</li>
</ul>
<p>Follow-up: "क्या StringBuilder हमेशा तेज़ है?" — नहीं। दो-तीन हिस्सों के लिए यह overhead और noise बढ़ाता है; "optimise" करने से पहले measure करो।</p>
<p>Follow-up: "क्या StringBuilder thread-safe है?" — नहीं; एक instance को कई threads में share मत करो।</p>`,
        hg: `<ul>
<li>n items wale loop mein <code>s += x</code> har baar badhta hua text copy karta hai — lagbhag O(n²) character copies aur n garbage strings.</li>
<li><code>StringBuilder</code> andar ke buffer mein append karta hai jo chunks mein badhta hai; <code>ToString()</code> aakhri string ek baar banata hai. Agar size ka andaaza hai to <code>capacity</code> de do.</li>
<li>Compiler simple cases pehle se optimise karta hai: <code>a + b + c</code> ek <code>string.Concat</code> call ban jaata hai; constant hisse (<code>"a" + "b"</code>) compile time par hi jud jaate hain; <code>$"..."</code> (C# 10+) ek efficient interpolation handler use karta hai.</li>
<li>Collection ke liye <code>string.Join(", ", items)</code> kisi bhi loop se zyada saaf hai.</li>
</ul>
<p>Follow-up: "Kya StringBuilder hamesha tez hai?" — Nahi. Do-teen hisson ke liye yeh overhead aur noise badhata hai; "optimise" karne se pehle measure karo.</p>
<p>Follow-up: "Kya StringBuilder thread-safe hai?" — Nahi; ek instance ko kai threads mein share mat karo.</p>`
      }
    },
    {
      id: "string-immutable-interning",
      depth: "short",
      q: "Why are strings immutable in C#? What is string interning?",
      answer: "Immutability makes strings thread-safe, safe as dictionary keys and safe to share. Interning means identical string literals share one object from the runtime's intern pool, which saves memory precisely because nobody can change it.",
      meaning: {
        hi: "Immutability से strings thread-safe होती हैं, dictionary keys के रूप में safe होती हैं और share करना safe होता है। Interning मतलब एक जैसे string literals runtime के intern pool से एक ही object share करते हैं — memory बचती है, क्योंकि कोई उसे बदल ही नहीं सकता।",
        hg: "Immutability se strings thread-safe hoti hain, dictionary keys ke roop mein safe hoti hain aur share karna safe hota hai. Interning matlab ek jaise string literals runtime ke intern pool se ek hi object share karte hain — memory bachti hai, kyunki koi use badal hi nahi sakta."
      },
      explain: {
        en: `<ul>
<li><b>Why immutable</b>: lock-free sharing between threads; a key's hash code never changes inside a <code>Dictionary</code>; validated values (paths, SQL, tokens) cannot be altered later through another reference; interning becomes possible.</li>
<li><b>Interning</b>: string <b>literals</b> are interned automatically. Compile-time constant expressions such as <code>"a" + "b"</code> are folded into the literal <code>"ab"</code>, so they are interned too. Strings built at runtime (concatenation of variables, <code>ReadLine</code>, JSON) are <b>new objects</b> unless you call <code>string.Intern</code>.</li>
<li>That is why <code>object.ReferenceEquals</code> on strings gives "random-looking" results — always compare with <code>==</code> or <code>string.Equals(..., StringComparison.Ordinal)</code>.</li>
</ul>
<p>Follow-up: "How does <code>==</code> work for strings?" — <code>string</code> overloads <code>==</code> to compare characters (ordinal). But if both variables are typed as <code>object</code>, <code>==</code> compares references — see puzzle "== vs Equals".</p>
<p>Follow-up: "Can you change a string in place?" — Not in safe code; <code>s[0] = 'x'</code> is CS0200 (read-only indexer).</p>`,
        hi: `<ul>
<li><b>Immutable क्यों</b>: threads के बीच बिना lock share करना; <code>Dictionary</code> के अंदर key का hash code कभी नहीं बदलता; validate की गई values (paths, SQL, tokens) बाद में किसी दूसरे reference से बदली नहीं जा सकतीं; interning संभव होती है।</li>
<li><b>Interning</b>: string <b>literals</b> अपने-आप intern होते हैं। <code>"a" + "b"</code> जैसे compile-time constant expressions literal <code>"ab"</code> में बदल जाते हैं, इसलिए वो भी intern होते हैं। Runtime पर बनी strings (variables का concatenation, <code>ReadLine</code>, JSON) <b>नए objects</b> होती हैं, जब तक <code>string.Intern</code> call न करो।</li>
<li>इसीलिए strings पर <code>object.ReferenceEquals</code> के results "random जैसे" लगते हैं — हमेशा <code>==</code> या <code>string.Equals(..., StringComparison.Ordinal)</code> से compare करो।</li>
</ul>
<p>Follow-up: "Strings के लिए <code>==</code> कैसे काम करता है?" — <code>string</code> <code>==</code> को overload करके characters compare करती है (ordinal)। पर अगर दोनों variables का type <code>object</code> है, तो <code>==</code> references compare करता है — puzzle "== vs Equals" देखो।</p>
<p>Follow-up: "क्या string को उसी जगह बदल सकते हो?" — Safe code में नहीं; <code>s[0] = 'x'</code> CS0200 है (read-only indexer)।</p>`,
        hg: `<ul>
<li><b>Immutable kyun</b>: threads ke beech bina lock share karna; <code>Dictionary</code> ke andar key ka hash code kabhi nahi badalta; validate ki gayi values (paths, SQL, tokens) baad mein kisi doosre reference se badli nahi ja sakti; interning sambhav hoti hai.</li>
<li><b>Interning</b>: string <b>literals</b> apne-aap intern hote hain. <code>"a" + "b"</code> jaise compile-time constant expressions literal <code>"ab"</code> mein badal jaate hain, isliye woh bhi intern hote hain. Runtime par bani strings (variables ka concatenation, <code>ReadLine</code>, JSON) <b>naye objects</b> hoti hain, jab tak <code>string.Intern</code> call na karo.</li>
<li>Isiliye strings par <code>object.ReferenceEquals</code> ke results "random jaise" lagte hain — hamesha <code>==</code> ya <code>string.Equals(..., StringComparison.Ordinal)</code> se compare karo.</li>
</ul>
<p>Follow-up: "Strings ke liye <code>==</code> kaise kaam karta hai?" — <code>string</code> <code>==</code> ko overload karke characters compare karti hai (ordinal). Par agar dono variables ka type <code>object</code> hai, to <code>==</code> references compare karta hai — puzzle "== vs Equals" dekho.</p>
<p>Follow-up: "Kya string ko usi jagah badal sakte ho?" — Safe code mein nahi; <code>s[0] = 'x'</code> CS0200 hai (read-only indexer).</p>`
      }
    },
    {
      id: "generics-why",
      depth: "short",
      q: "What are generics and what problems do they solve?",
      answer: "Generics let you write a class or method once with a type parameter, like List&lt;T&gt;, and reuse it for any type — with compile-time type safety, no casts, and no boxing for value types.",
      meaning: {
        hi: "Generics से आप class या method एक बार type parameter के साथ लिखते हो, जैसे List&lt;T&gt;, और किसी भी type के लिए reuse करते हो — compile-time type safety के साथ, बिना casts, और value types की boxing के बिना।",
        hg: "Generics se aap class ya method ek baar type parameter ke saath likhte ho, jaise List&lt;T&gt;, aur kisi bhi type ke liye reuse karte ho — compile-time type safety ke saath, bina casts, aur value types ki boxing ke bina."
      },
      explain: {
        en: `<ul>
<li><b>Before generics</b> (.NET 1.x): <code>ArrayList</code> stored <code>object</code> — every read needed a cast, a wrong type failed only at runtime, and every <code>int</code> was boxed.</li>
<li><b>With generics</b>: <code>List&lt;int&gt;</code> stores real ints; <code>list.Add("x")</code> is a compile error.</li>
<li><b>Constraints</b> (<code>where T : ...</code>) let you call members on <code>T</code> safely, e.g. <code>where T : IComparable&lt;T&gt;</code> lets you call <code>CompareTo</code>.</li>
<li>C# generics are <b>reified</b>: the runtime knows <code>List&lt;int&gt;</code> and <code>List&lt;string&gt;</code> are different types (Java erases type arguments). The JIT generates specialised code for value types.</li>
</ul>
<p>Follow-up: "Where have you written your own generic type?" — e.g. <code>Result&lt;T&gt;</code> for service responses, <code>PagedList&lt;T&gt;</code> for paging, a generic repository or cache.</p>
<p>Follow-up: "Is a static field shared between <code>Cache&lt;int&gt;</code> and <code>Cache&lt;string&gt;</code>?" — No, each closed type has its own static fields (see puzzle).</p>`,
        hi: `<ul>
<li><b>Generics से पहले</b> (.NET 1.x): <code>ArrayList</code> <code>object</code> रखती थी — हर read पर cast चाहिए, गलत type सिर्फ़ runtime पर fail होता, और हर <code>int</code> box होता।</li>
<li><b>Generics के साथ</b>: <code>List&lt;int&gt;</code> असली ints रखती है; <code>list.Add("x")</code> compile error है।</li>
<li><b>Constraints</b> (<code>where T : ...</code>) से आप <code>T</code> पर safely members call कर सकते हो, जैसे <code>where T : IComparable&lt;T&gt;</code> से <code>CompareTo</code> call कर सकते हो।</li>
<li>C# generics <b>reified</b> हैं: runtime जानता है कि <code>List&lt;int&gt;</code> और <code>List&lt;string&gt;</code> अलग types हैं (Java type arguments मिटा देता है)। JIT value types के लिए specialised code बनाता है।</li>
</ul>
<p>Follow-up: "आपने अपना generic type कहाँ लिखा है?" — जैसे service responses के लिए <code>Result&lt;T&gt;</code>, paging के लिए <code>PagedList&lt;T&gt;</code>, generic repository या cache।</p>
<p>Follow-up: "क्या <code>Cache&lt;int&gt;</code> और <code>Cache&lt;string&gt;</code> के बीच static field share होता है?" — नहीं, हर closed type के अपने static fields होते हैं (puzzle देखो)।</p>`,
        hg: `<ul>
<li><b>Generics se pehle</b> (.NET 1.x): <code>ArrayList</code> <code>object</code> rakhti thi — har read par cast chahiye, galat type sirf runtime par fail hota, aur har <code>int</code> box hota.</li>
<li><b>Generics ke saath</b>: <code>List&lt;int&gt;</code> asli ints rakhti hai; <code>list.Add("x")</code> compile error hai.</li>
<li><b>Constraints</b> (<code>where T : ...</code>) se aap <code>T</code> par safely members call kar sakte ho, jaise <code>where T : IComparable&lt;T&gt;</code> se <code>CompareTo</code> call kar sakte ho.</li>
<li>C# generics <b>reified</b> hain: runtime jaanta hai ki <code>List&lt;int&gt;</code> aur <code>List&lt;string&gt;</code> alag types hain (Java type arguments mita deta hai). JIT value types ke liye specialised code banata hai.</li>
</ul>
<p>Follow-up: "Aapne apna generic type kahan likha hai?" — jaise service responses ke liye <code>Result&lt;T&gt;</code>, paging ke liye <code>PagedList&lt;T&gt;</code>, generic repository ya cache.</p>
<p>Follow-up: "Kya <code>Cache&lt;int&gt;</code> aur <code>Cache&lt;string&gt;</code> ke beech static field share hota hai?" — Nahi, har closed type ke apne static fields hote hain (puzzle dekho).</p>`
      }
    },
    {
      id: "delegate-vs-event",
      depth: "short",
      q: "What is the difference between a delegate and an event?",
      answer: "A delegate is a type-safe reference to one or more methods. An event is a delegate with access control: outside code can only subscribe or unsubscribe, and only the owning class can raise it.",
      meaning: {
        hi: "Delegate एक या ज़्यादा methods का type-safe reference है। Event access control वाला delegate है: बाहर का code सिर्फ़ subscribe या unsubscribe कर सकता है, और raise सिर्फ़ owner class कर सकती है।",
        hg: "Delegate ek ya zyada methods ka type-safe reference hai. Event access control wala delegate hai: bahar ka code sirf subscribe ya unsubscribe kar sakta hai, aur raise sirf owner class kar sakti hai."
      },
      explain: {
        en: `<p>Why does the <code>event</code> keyword exist? With a <b>public delegate field</b>, any subscriber could:</p>
<ul>
<li>write <code>OnChanged = handler;</code> (with <code>=</code>, not <code>+=</code>) and silently remove everyone else's handlers, or</li>
<li>call <code>OnChanged(...)</code> itself and fake a notification.</li>
</ul>
<p>With <code>event</code>, both are compile errors outside the class (CS0070). Outsiders get only <code>+=</code> and <code>-=</code>.</p>
<ul>
<li>Convention: <code>public event EventHandler&lt;OrderPlacedEventArgs&gt;? OrderPlaced;</code>, raised as <code>OrderPlaced?.Invoke(this, args)</code>.</li>
<li>The compiler-generated <code>add</code>/<code>remove</code> for a field-like event are thread-safe.</li>
</ul>
<p>Follow-up: "Delegate vs interface for a callback?" — one method and no state → <code>Func</code>/<code>Action</code>; several related methods or a named role → an interface.</p>
<p>Follow-up: "Can events cause memory leaks?" — Yes, see the detailed question on event leaks.</p>`,
        hi: `<p><code>event</code> keyword क्यों है? <b>Public delegate field</b> के साथ कोई भी subscriber:</p>
<ul>
<li><code>OnChanged = handler;</code> लिख सकता है (<code>+=</code> की जगह <code>=</code>) और चुपचाप बाकी सबके handlers हटा सकता है, या</li>
<li>ख़ुद <code>OnChanged(...)</code> call करके नकली notification भेज सकता है।</li>
</ul>
<p><code>event</code> के साथ class के बाहर दोनों compile errors हैं (CS0070)। बाहर वालों को सिर्फ़ <code>+=</code> और <code>-=</code> मिलता है।</p>
<ul>
<li>Convention: <code>public event EventHandler&lt;OrderPlacedEventArgs&gt;? OrderPlaced;</code>, और raise होता है <code>OrderPlaced?.Invoke(this, args)</code> से।</li>
<li>Field-like event के लिए compiler जो <code>add</code>/<code>remove</code> बनाता है, वो thread-safe हैं।</li>
</ul>
<p>Follow-up: "Callback के लिए delegate या interface?" — एक method और कोई state नहीं → <code>Func</code>/<code>Action</code>; कई related methods या कोई named role → interface।</p>
<p>Follow-up: "क्या events से memory leak हो सकता है?" — हाँ, event leaks वाला detailed question देखो।</p>`,
        hg: `<p><code>event</code> keyword kyun hai? <b>Public delegate field</b> ke saath koi bhi subscriber:</p>
<ul>
<li><code>OnChanged = handler;</code> likh sakta hai (<code>+=</code> ki jagah <code>=</code>) aur chupchaap baaki sabke handlers hata sakta hai, ya</li>
<li>khud <code>OnChanged(...)</code> call karke nakli notification bhej sakta hai.</li>
</ul>
<p><code>event</code> ke saath class ke bahar dono compile errors hain (CS0070). Bahar walon ko sirf <code>+=</code> aur <code>-=</code> milta hai.</p>
<ul>
<li>Convention: <code>public event EventHandler&lt;OrderPlacedEventArgs&gt;? OrderPlaced;</code>, aur raise hota hai <code>OrderPlaced?.Invoke(this, args)</code> se.</li>
<li>Field-like event ke liye compiler jo <code>add</code>/<code>remove</code> banata hai, woh thread-safe hain.</li>
</ul>
<p>Follow-up: "Callback ke liye delegate ya interface?" — ek method aur koi state nahi → <code>Func</code>/<code>Action</code>; kai related methods ya koi named role → interface.</p>
<p>Follow-up: "Kya events se memory leak ho sakta hai?" — Haan, event leaks wala detailed question dekho.</p>`
      }
    },
    {
      id: "extension-methods",
      depth: "short",
      q: "What are extension methods and how do they work internally?",
      answer: "They are static methods in a static class whose first parameter is marked with this, so you can call them like instance methods. The compiler simply rewrites the call into a normal static method call — LINQ is built this way.",
      meaning: {
        hi: "ये static class के अंदर static methods हैं जिनके पहले parameter पर this लगा होता है, इसलिए इन्हें instance methods की तरह call कर सकते हो। Compiler बस call को normal static method call में बदल देता है — LINQ ऐसे ही बना है।",
        hg: "Yeh static class ke andar static methods hain jinke pehle parameter par this laga hota hai, isliye inhe instance methods ki tarah call kar sakte ho. Compiler bas call ko normal static method call mein badal deta hai — LINQ aise hi bana hai."
      },
      explain: {
        en: `<ul>
<li><code>orders.Where(o =&gt; o.Total &gt; 500)</code> compiles to <code>Enumerable.Where(orders, o =&gt; o.Total &gt; 500)</code>.</li>
<li>Bound at <b>compile time</b> using the declared type; no polymorphism. If an applicable instance method exists, it always wins.</li>
<li>No access to private members — it is just an outside static method.</li>
<li>Can be called on <code>null</code> (no automatic <code>NullReferenceException</code>).</li>
<li>Need the namespace imported (<code>using</code>), which is how ASP.NET Core "adds" methods like <code>AddControllers()</code> to <code>IServiceCollection</code>.</li>
<li><b>C# 14</b> adds extension <b>members</b>: extension properties and static extension members using an <code>extension(...)</code> block.</li>
</ul>
<p>Follow-up: "Can you override an extension method?" — No; it is static and chosen at compile time.</p>
<p>Follow-up: "How do you mock one in a unit test?" — You cannot mock a static method with Moq. Keep extension methods small and pure (test them directly), or put the behaviour behind an interface.</p>`,
        hi: `<ul>
<li><code>orders.Where(o =&gt; o.Total &gt; 500)</code> compile होकर <code>Enumerable.Where(orders, o =&gt; o.Total &gt; 500)</code> बनता है।</li>
<li><b>Compile time</b> पर declared type से bind होता है; कोई polymorphism नहीं। अगर लागू होने लायक instance method मौजूद है, तो वही हमेशा जीतता है।</li>
<li>Private members तक पहुँच नहीं — यह बस बाहर का एक static method है।</li>
<li><code>null</code> पर भी call हो सकता है (अपने-आप <code>NullReferenceException</code> नहीं)।</li>
<li>Namespace import (<code>using</code>) चाहिए — इसी तरह ASP.NET Core <code>IServiceCollection</code> में <code>AddControllers()</code> जैसे methods "जोड़ता" है।</li>
<li><b>C# 14</b> में extension <b>members</b> आए: <code>extension(...)</code> block से extension properties और static extension members।</li>
</ul>
<p>Follow-up: "क्या extension method override कर सकते हो?" — नहीं; यह static है और compile time पर चुना जाता है।</p>
<p>Follow-up: "Unit test में इसे mock कैसे करोगे?" — Moq से static method mock नहीं होता। Extension methods छोटे और pure रखो (उन्हें सीधे test करो), या behaviour को interface के पीछे रखो।</p>`,
        hg: `<ul>
<li><code>orders.Where(o =&gt; o.Total &gt; 500)</code> compile hokar <code>Enumerable.Where(orders, o =&gt; o.Total &gt; 500)</code> banta hai.</li>
<li><b>Compile time</b> par declared type se bind hota hai; koi polymorphism nahi. Agar laagu hone laayak instance method maujood hai, to wahi hamesha jeetta hai.</li>
<li>Private members tak pahunch nahi — yeh bas bahar ka ek static method hai.</li>
<li><code>null</code> par bhi call ho sakta hai (apne-aap <code>NullReferenceException</code> nahi).</li>
<li>Namespace import (<code>using</code>) chahiye — isi tarah ASP.NET Core <code>IServiceCollection</code> mein <code>AddControllers()</code> jaise methods "jodta" hai.</li>
<li><b>C# 14</b> mein extension <b>members</b> aaye: <code>extension(...)</code> block se extension properties aur static extension members.</li>
</ul>
<p>Follow-up: "Kya extension method override kar sakte ho?" — Nahi; yeh static hai aur compile time par chuna jaata hai.</p>
<p>Follow-up: "Unit test mein ise mock kaise karoge?" — Moq se static method mock nahi hota. Extension methods chhote aur pure rakho (unhe seedhe test karo), ya behaviour ko interface ke peeche rakho.</p>`
      }
    },
    {
      id: "struct-vs-class",
      depth: "detailed",
      q: "When would you choose a struct over a class?",
      answer: "For small, immutable, value-like data that is created often and rarely boxed — money, coordinates, a date range. For everything else a class is the safer default.",
      meaning: {
        hi: "छोटे, immutable, value जैसे data के लिए जो बार-बार बनता है और कम box होता है — money, coordinates, date range। बाकी सब के लिए class ज़्यादा safe default है।",
        hg: "Chhote, immutable, value jaise data ke liye jo baar-baar banta hai aur kam box hota hai — money, coordinates, date range. Baaki sab ke liye class zyada safe default hai."
      },
      explain: {
        en: `<p>Microsoft's design guidelines say: consider a struct when the type <b>logically represents a single value</b>, is <b>small</b> (around 16 bytes or less), is <b>immutable</b>, and will <b>not be boxed often</b>.</p>
<ul>
<li>Make it a <code>readonly struct</code> (or a <code>readonly record struct</code>, C# 10, which also generates value equality).</li>
<li>Implement <code>IEquatable&lt;T&gt;</code> (or use a record struct) — the default <code>ValueType.Equals</code> may use reflection, which is slow for dictionary keys. User-defined structs also get no <code>==</code> operator by default (CS0019).</li>
<li><b>Downsides</b>: copying a large struct on every assignment or call; mutable-struct bugs (you change a copy, not the original); no inheritance; <code>default(T)</code> gives all-zero fields even if your constructor has rules.</li>
</ul>
<p>Follow-up: "What is a <code>ref struct</code>?" — a struct that must stay on the stack, like <code>Span&lt;T&gt;</code>: it cannot be boxed or stored in a class field (Span basics — Day 3).</p>
<p><b>TL angle:</b> in code review, a mutable public struct is a red flag; ask for <code>readonly struct</code> or a class.</p>`,
        hi: `<p>Microsoft की design guidelines कहती हैं: struct तब सोचो जब type <b>logically एक ही value</b> हो, <b>छोटा</b> हो (करीब 16 bytes या कम), <b>immutable</b> हो, और <b>बार-बार box न हो</b>।</p>
<ul>
<li>इसे <code>readonly struct</code> बनाओ (या <code>readonly record struct</code>, C# 10, जो value equality भी ख़ुद बना देता है)।</li>
<li><code>IEquatable&lt;T&gt;</code> implement करो (या record struct use करो) — default <code>ValueType.Equals</code> reflection use कर सकता है, जो dictionary keys के लिए धीमा है। User-defined structs को by default <code>==</code> operator भी नहीं मिलता (CS0019)।</li>
<li><b>नुकसान</b>: हर assignment या call पर बड़े struct की copy; mutable-struct bugs (आप copy बदलते हो, original नहीं); inheritance नहीं; <code>default(T)</code> सारे fields zero कर देता है, चाहे आपके constructor में rules हों।</li>
</ul>
<p>Follow-up: "<code>ref struct</code> क्या है?" — ऐसा struct जिसे stack पर ही रहना है, जैसे <code>Span&lt;T&gt;</code>: इसे box नहीं कर सकते, न class field में रख सकते (Span basics — Day 3)।</p>
<p><b>TL angle:</b> code review में mutable public struct एक red flag है; <code>readonly struct</code> या class माँगो।</p>`,
        hg: `<p>Microsoft ki design guidelines kehti hain: struct tab socho jab type <b>logically ek hi value</b> ho, <b>chhota</b> ho (kareeb 16 bytes ya kam), <b>immutable</b> ho, aur <b>baar-baar box na ho</b>.</p>
<ul>
<li>Ise <code>readonly struct</code> banao (ya <code>readonly record struct</code>, C# 10, jo value equality bhi khud bana deta hai).</li>
<li><code>IEquatable&lt;T&gt;</code> implement karo (ya record struct use karo) — default <code>ValueType.Equals</code> reflection use kar sakta hai, jo dictionary keys ke liye dheema hai. User-defined structs ko by default <code>==</code> operator bhi nahi milta (CS0019).</li>
<li><b>Nuksaan</b>: har assignment ya call par bade struct ki copy; mutable-struct bugs (aap copy badalte ho, original nahi); inheritance nahi; <code>default(T)</code> saare fields zero kar deta hai, chahe aapke constructor mein rules hon.</li>
</ul>
<p>Follow-up: "<code>ref struct</code> kya hai?" — aisa struct jise stack par hi rehna hai, jaise <code>Span&lt;T&gt;</code>: ise box nahi kar sakte, na class field mein rakh sakte (Span basics — Day 3).</p>
<p><b>TL angle:</b> code review mein mutable public struct ek red flag hai; <code>readonly struct</code> ya class maango.</p>`
      }
    },
    {
      id: "ref-out-in",
      depth: "detailed",
      q: "What is the difference between ref, out and in parameters?",
      answer: "All three pass a variable by reference. ref must be initialised and can be read and changed; out must be assigned by the method, as in TryParse; in is read-only and avoids copying large structs.",
      meaning: {
        hi: "तीनों variable को by reference pass करते हैं। ref पहले से initialised होना चाहिए और पढ़ा-बदला जा सकता है; out को method assign करता ही है, जैसे TryParse में; in read-only है और बड़े structs की copy बचाता है।",
        hg: "Teeno variable ko by reference pass karte hain. ref pehle se initialised hona chahiye aur padha-badla ja sakta hai; out ko method assign karta hi hai, jaise TryParse mein; in read-only hai aur bade structs ki copy bachata hai."
      },
      explain: {
        en: `<ul>
<li><code>ref</code>: caller must assign it first (CS0165 otherwise); method may read and write.</li>
<li><code>out</code>: caller need not assign; method <b>must</b> assign before returning (CS0177). Inline declaration: <code>int.TryParse(s, out var n)</code>.</li>
<li><code>in</code>: passed by reference but read-only inside (CS8331 if you assign). Useful for large <code>readonly struct</code>s. C# 12 also added <code>ref readonly</code> parameters.</li>
<li>Async methods and iterators cannot have <code>ref</code>/<code>out</code>/<code>in</code> parameters (CS1988 for async) — return a tuple or a result object instead.</li>
</ul>
<p>Follow-up (very common): "If I pass a <code>List</code> to a method without <code>ref</code> and the method does <code>list = new List&lt;int&gt;()</code>, what does the caller see?" — The <b>old</b> list. Only the method's copy of the reference changed. But <code>list.Add(5)</code> inside the method <b>is</b> visible, because both references point to the same object.</p>
<p><b>TL angle:</b> many <code>ref</code>/<code>out</code> parameters make an API hard to read; prefer returning a tuple or a small result type.</p>`,
        hi: `<ul>
<li><code>ref</code>: caller को पहले assign करना होगा (वरना CS0165); method पढ़ भी सकता है, लिख भी सकता है।</li>
<li><code>out</code>: caller को assign करने की ज़रूरत नहीं; method को return से पहले assign करना <b>ही</b> होगा (CS0177)। Inline declaration: <code>int.TryParse(s, out var n)</code>।</li>
<li><code>in</code>: by reference pass होता है पर अंदर read-only (assign करो तो CS8331)। बड़े <code>readonly struct</code>s के लिए useful। C# 12 में <code>ref readonly</code> parameters भी आए।</li>
<li>Async methods और iterators में <code>ref</code>/<code>out</code>/<code>in</code> parameters नहीं हो सकते (async के लिए CS1988) — इसकी जगह tuple या result object return करो।</li>
</ul>
<p>Follow-up (बहुत common): "अगर मैं method को बिना <code>ref</code> के <code>List</code> pass करूँ और method <code>list = new List&lt;int&gt;()</code> करे, तो caller को क्या दिखेगा?" — <b>पुरानी</b> list। सिर्फ़ method की reference copy बदली। पर method के अंदर <code>list.Add(5)</code> caller को <b>दिखेगा</b>, क्योंकि दोनों references एक ही object पर point करते हैं।</p>
<p><b>TL angle:</b> बहुत सारे <code>ref</code>/<code>out</code> parameters API को पढ़ना मुश्किल बनाते हैं; tuple या छोटा result type return करना बेहतर है।</p>`,
        hg: `<ul>
<li><code>ref</code>: caller ko pehle assign karna hoga (warna CS0165); method padh bhi sakta hai, likh bhi sakta hai.</li>
<li><code>out</code>: caller ko assign karne ki zaroorat nahi; method ko return se pehle assign karna <b>hi</b> hoga (CS0177). Inline declaration: <code>int.TryParse(s, out var n)</code>.</li>
<li><code>in</code>: by reference pass hota hai par andar read-only (assign karo to CS8331). Bade <code>readonly struct</code>s ke liye useful. C# 12 mein <code>ref readonly</code> parameters bhi aaye.</li>
<li>Async methods aur iterators mein <code>ref</code>/<code>out</code>/<code>in</code> parameters nahi ho sakte (async ke liye CS1988) — iski jagah tuple ya result object return karo.</li>
</ul>
<p>Follow-up (bahut common): "Agar main method ko bina <code>ref</code> ke <code>List</code> pass karoon aur method <code>list = new List&lt;int&gt;()</code> kare, to caller ko kya dikhega?" — <b>Purani</b> list. Sirf method ki reference copy badli. Par method ke andar <code>list.Add(5)</code> caller ko <b>dikhega</b>, kyunki dono references ek hi object par point karte hain.</p>
<p><b>TL angle:</b> bahut saare <code>ref</code>/<code>out</code> parameters API ko padhna mushkil banate hain; tuple ya chhota result type return karna behtar hai.</p>`
      }
    },
    {
      id: "const-vs-readonly",
      depth: "detailed",
      q: "What is the difference between const, readonly and static readonly?",
      answer: "const is a compile-time constant copied into every caller; readonly is set once per object, in the declaration or constructor; static readonly is set once per type at runtime. For public library values I prefer static readonly.",
      meaning: {
        hi: "const compile-time constant है जो हर caller में copy हो जाता है; readonly हर object के लिए एक बार set होता है, declaration या constructor में; static readonly पूरे type के लिए runtime पर एक बार set होता है। Library की public values के लिए static readonly बेहतर है।",
        hg: "const compile-time constant hai jo har caller mein copy ho jaata hai; readonly har object ke liye ek baar set hota hai, declaration ya constructor mein; static readonly poore type ke liye runtime par ek baar set hota hai. Library ki public values ke liye static readonly behtar hai."
      },
      explain: {
        en: `<ul>
<li><code>const</code>: value known at compile time; only primitive types, <code>string</code>, enums (else CS0133). Implicitly static. Can be used in <code>switch</code> cases and attribute arguments.</li>
<li><code>readonly</code>: any type; assigned in the declaration or a constructor (CS0191 elsewhere); different objects can hold different values.</li>
<li><code>static readonly</code>: any type, one value per type, computed at runtime — e.g. <code>static readonly TimeSpan Timeout = TimeSpan.FromSeconds(30);</code> (CS0198 if assigned outside the static constructor/initializer).</li>
</ul>
<p><b>The versioning trap</b> (TL-level): library A has <code>public const int MaxItems = 50;</code>. App B compiles against it — the number 50 is <b>copied into B's IL</b>. A ships 100, but B still uses 50 until B is recompiled. With <code>static readonly</code>, B reads the value from A at runtime.</p>
<p>Follow-up: "Does readonly make an object immutable?" — No, it is shallow: a <code>readonly List&lt;T&gt;</code> can still be modified; only the reference is fixed.</p>`,
        hi: `<ul>
<li><code>const</code>: value compile time पर पता होनी चाहिए; सिर्फ़ primitive types, <code>string</code>, enums (वरना CS0133)। अपने-आप static। <code>switch</code> cases और attribute arguments में use हो सकता है।</li>
<li><code>readonly</code>: कोई भी type; declaration या constructor में assign होता है (कहीं और CS0191); अलग objects की अलग values हो सकती हैं।</li>
<li><code>static readonly</code>: कोई भी type, पूरे type के लिए एक value, runtime पर calculate — जैसे <code>static readonly TimeSpan Timeout = TimeSpan.FromSeconds(30);</code> (static constructor/initializer के बाहर assign करो तो CS0198)।</li>
</ul>
<p><b>Versioning trap</b> (TL-level): library A में <code>public const int MaxItems = 50;</code> है। App B उसके against compile होता है — number 50 <b>B के IL में copy हो जाता है</b>। A ने 100 ship किया, पर B तब तक 50 ही use करेगा जब तक B recompile न हो। <code>static readonly</code> में B runtime पर A से value पढ़ता है।</p>
<p>Follow-up: "क्या readonly object को immutable बना देता है?" — नहीं, यह shallow है: <code>readonly List&lt;T&gt;</code> अब भी बदल सकती है; सिर्फ़ reference fix है।</p>`,
        hg: `<ul>
<li><code>const</code>: value compile time par pata honi chahiye; sirf primitive types, <code>string</code>, enums (warna CS0133). Apne-aap static. <code>switch</code> cases aur attribute arguments mein use ho sakta hai.</li>
<li><code>readonly</code>: koi bhi type; declaration ya constructor mein assign hota hai (kahin aur CS0191); alag objects ki alag values ho sakti hain.</li>
<li><code>static readonly</code>: koi bhi type, poore type ke liye ek value, runtime par calculate — jaise <code>static readonly TimeSpan Timeout = TimeSpan.FromSeconds(30);</code> (static constructor/initializer ke bahar assign karo to CS0198).</li>
</ul>
<p><b>Versioning trap</b> (TL-level): library A mein <code>public const int MaxItems = 50;</code> hai. App B uske against compile hota hai — number 50 <b>B ke IL mein copy ho jaata hai</b>. A ne 100 ship kiya, par B tab tak 50 hi use karega jab tak B recompile na ho. <code>static readonly</code> mein B runtime par A se value padhta hai.</p>
<p>Follow-up: "Kya readonly object ko immutable bana deta hai?" — Nahi, yeh shallow hai: <code>readonly List&lt;T&gt;</code> ab bhi badal sakti hai; sirf reference fix hai.</p>`
      }
    },
    {
      id: "equality",
      depth: "detailed",
      q: "What is the difference between == and Equals()? How do they behave for strings, classes and structs?",
      answer: "For classes, == and Equals compare references unless overridden; string and records override them to compare values. Structs get a value-based Equals, but no == unless you define one.",
      meaning: {
        hi: "Classes में == और Equals override न हों तो references compare करते हैं; string और records इन्हें override करके values compare करते हैं। Structs को value-based Equals मिलता है, पर == तभी जब आप ख़ुद define करो।",
        hg: "Classes mein == aur Equals override na hon to references compare karte hain; string aur records inhe override karke values compare karte hain. Structs ko value-based Equals milta hai, par == tabhi jab aap khud define karo."
      },
      explain: {
        en: `<ul>
<li><code>==</code> is an <b>operator</b> — chosen at compile time from the <b>declared</b> types. <code>Equals</code> is a <b>virtual method</b> — chosen at runtime from the object.</li>
<li>So <code>object a = "hi"; object b = new string("hi");</code> → <code>a == b</code> is <b>False</b> (object's <code>==</code> = reference check), <code>a.Equals(b)</code> is <b>True</b> (string's override). See the puzzle.</li>
<li><code>object.ReferenceEquals(a, b)</code> always checks identity.</li>
<li><b>Contract</b>: if you override <code>Equals</code>, also override <code>GetHashCode</code> (equal objects must have equal hash codes) — otherwise <code>Dictionary</code>/<code>HashSet</code> break. <code>HashCode.Combine(a, b)</code> helps. Better: implement <code>IEquatable&lt;T&gt;</code>, or use a <b>record</b>, which generates all of it.</li>
</ul>
<p>Follow-up: "How do you compare strings ignoring case?" — <code>string.Equals(a, b, StringComparison.OrdinalIgnoreCase)</code>, not <code>ToLower()</code> on both.</p>
<p><b>TL angle:</b> for entities, equality is usually by <b>Id</b>; for value objects (Money, Address), by <b>all values</b> — records fit value objects well.</p>`,
        hi: `<ul>
<li><code>==</code> एक <b>operator</b> है — compile time पर <b>declared</b> types से चुना जाता है। <code>Equals</code> एक <b>virtual method</b> है — runtime पर object से चुना जाता है।</li>
<li>इसलिए <code>object a = "hi"; object b = new string("hi");</code> → <code>a == b</code> <b>False</b> है (object का <code>==</code> = reference check), <code>a.Equals(b)</code> <b>True</b> है (string का override)। Puzzle देखो।</li>
<li><code>object.ReferenceEquals(a, b)</code> हमेशा identity check करता है।</li>
<li><b>Contract</b>: <code>Equals</code> override करो तो <code>GetHashCode</code> भी करो (बराबर objects के hash codes बराबर होने चाहिए) — वरना <code>Dictionary</code>/<code>HashSet</code> गड़बड़ करेंगे। <code>HashCode.Combine(a, b)</code> मदद करता है। बेहतर: <code>IEquatable&lt;T&gt;</code> implement करो, या <b>record</b> use करो, जो यह सब ख़ुद बना देता है।</li>
</ul>
<p>Follow-up: "Case ignore करके strings कैसे compare करोगे?" — <code>string.Equals(a, b, StringComparison.OrdinalIgnoreCase)</code>, दोनों पर <code>ToLower()</code> नहीं।</p>
<p><b>TL angle:</b> entities की equality आम तौर पर <b>Id</b> से होती है; value objects (Money, Address) की <b>सारी values</b> से — value objects के लिए records अच्छे बैठते हैं।</p>`,
        hg: `<ul>
<li><code>==</code> ek <b>operator</b> hai — compile time par <b>declared</b> types se chuna jaata hai. <code>Equals</code> ek <b>virtual method</b> hai — runtime par object se chuna jaata hai.</li>
<li>Isliye <code>object a = "hi"; object b = new string("hi");</code> → <code>a == b</code> <b>False</b> hai (object ka <code>==</code> = reference check), <code>a.Equals(b)</code> <b>True</b> hai (string ka override). Puzzle dekho.</li>
<li><code>object.ReferenceEquals(a, b)</code> hamesha identity check karta hai.</li>
<li><b>Contract</b>: <code>Equals</code> override karo to <code>GetHashCode</code> bhi karo (barabar objects ke hash codes barabar hone chahiye) — warna <code>Dictionary</code>/<code>HashSet</code> gadbad karenge. <code>HashCode.Combine(a, b)</code> madad karta hai. Behtar: <code>IEquatable&lt;T&gt;</code> implement karo, ya <b>record</b> use karo, jo yeh sab khud bana deta hai.</li>
</ul>
<p>Follow-up: "Case ignore karke strings kaise compare karoge?" — <code>string.Equals(a, b, StringComparison.OrdinalIgnoreCase)</code>, dono par <code>ToLower()</code> nahi.</p>
<p><b>TL angle:</b> entities ki equality aam taur par <b>Id</b> se hoti hai; value objects (Money, Address) ki <b>saari values</b> se — value objects ke liye records achhe baithte hain.</p>`
      }
    },
    {
      id: "generic-constraints",
      depth: "detailed",
      q: "What generic constraints are available in C#, and why would you use them?",
      answer: "Constraints such as class, struct, new(), notnull, unmanaged, a base class or an interface limit what T can be. The compiler then lets you use those capabilities inside the generic code and rejects wrong types at compile time.",
      meaning: {
        hi: "class, struct, new(), notnull, unmanaged, कोई base class या interface जैसे constraints तय करते हैं कि T क्या हो सकता है। फिर compiler generic code के अंदर वो capabilities use करने देता है और गलत types को compile time पर ही रोक देता है।",
        hg: "class, struct, new(), notnull, unmanaged, koi base class ya interface jaise constraints tay karte hain ki T kya ho sakta hai. Phir compiler generic code ke andar woh capabilities use karne deta hai aur galat types ko compile time par hi rok deta hai."
      },
      explain: {
        en: `<ul>
<li><code>where T : class</code> — reference type (CS0452 for <code>int</code>); <code>class?</code> allows nullable reference types.</li>
<li><code>where T : struct</code> — non-nullable value type (CS0453 for <code>string</code>).</li>
<li><code>where T : new()</code> — public parameterless constructor, so you can write <code>new T()</code> (CS0310 otherwise).</li>
<li><code>where T : BaseClass</code> / <code>where T : IInterface</code> — call their members on <code>T</code> (CS0311 when the type does not match).</li>
<li><code>notnull</code>, <code>unmanaged</code> (no references inside — for low-level/binary code), <code>where T : U</code>, <code>Enum</code>/<code>Delegate</code> base constraints (C# 7.3), and <code>allows ref struct</code> (C# 13).</li>
<li>Combine them: <code>where T : class, IEntity, new()</code>.</li>
</ul>
<p>Follow-up: "Why not just accept <code>object</code>?" — you lose type safety and box value types. With a constraint, <code>Max&lt;T&gt;(T a, T b) where T : IComparable&lt;T&gt;</code> works for <code>int</code> without boxing.</p>`,
        hi: `<ul>
<li><code>where T : class</code> — reference type (<code>int</code> दो तो CS0452); <code>class?</code> nullable reference types भी allow करता है।</li>
<li><code>where T : struct</code> — non-nullable value type (<code>string</code> दो तो CS0453)।</li>
<li><code>where T : new()</code> — public parameterless constructor, ताकि <code>new T()</code> लिख सको (वरना CS0310)।</li>
<li><code>where T : BaseClass</code> / <code>where T : IInterface</code> — <code>T</code> पर उनके members call करो (type match न हो तो CS0311)।</li>
<li><code>notnull</code>, <code>unmanaged</code> (अंदर कोई reference नहीं — low-level/binary code के लिए), <code>where T : U</code>, <code>Enum</code>/<code>Delegate</code> base constraints (C# 7.3), और <code>allows ref struct</code> (C# 13)।</li>
<li>इन्हें जोड़ भी सकते हो: <code>where T : class, IEntity, new()</code>।</li>
</ul>
<p>Follow-up: "सीधे <code>object</code> क्यों नहीं ले लेते?" — type safety चली जाती है और value types box होते हैं। Constraint के साथ <code>Max&lt;T&gt;(T a, T b) where T : IComparable&lt;T&gt;</code> <code>int</code> के लिए बिना boxing चलता है।</p>`,
        hg: `<ul>
<li><code>where T : class</code> — reference type (<code>int</code> do to CS0452); <code>class?</code> nullable reference types bhi allow karta hai.</li>
<li><code>where T : struct</code> — non-nullable value type (<code>string</code> do to CS0453).</li>
<li><code>where T : new()</code> — public parameterless constructor, taaki <code>new T()</code> likh sako (warna CS0310).</li>
<li><code>where T : BaseClass</code> / <code>where T : IInterface</code> — <code>T</code> par unke members call karo (type match na ho to CS0311).</li>
<li><code>notnull</code>, <code>unmanaged</code> (andar koi reference nahi — low-level/binary code ke liye), <code>where T : U</code>, <code>Enum</code>/<code>Delegate</code> base constraints (C# 7.3), aur <code>allows ref struct</code> (C# 13).</li>
<li>Inhe jod bhi sakte ho: <code>where T : class, IEntity, new()</code>.</li>
</ul>
<p>Follow-up: "Seedhe <code>object</code> kyun nahi le lete?" — type safety chali jaati hai aur value types box hote hain. Constraint ke saath <code>Max&lt;T&gt;(T a, T b) where T : IComparable&lt;T&gt;</code> <code>int</code> ke liye bina boxing chalta hai.</p>`
      }
    },
    {
      id: "covariance-contravariance",
      depth: "detailed",
      q: "What are covariance and contravariance in generics?",
      answer: "Covariance (out T) lets you use a more specific type argument where a general one is expected, like IEnumerable&lt;string&gt; as IEnumerable&lt;object&gt;. Contravariance (in T) goes the other way, like Action&lt;object&gt; as Action&lt;string&gt;.",
      meaning: {
        hi: "Covariance (out T) से जहाँ general type चाहिए वहाँ ज़्यादा specific type argument use कर सकते हो, जैसे IEnumerable&lt;string&gt; को IEnumerable&lt;object&gt; की तरह। Contravariance (in T) उल्टी दिशा में है, जैसे Action&lt;object&gt; को Action&lt;string&gt; की तरह।",
        hg: "Covariance (out T) se jahan general type chahiye wahan zyada specific type argument use kar sakte ho, jaise IEnumerable&lt;string&gt; ko IEnumerable&lt;object&gt; ki tarah. Contravariance (in T) ulti disha mein hai, jaise Action&lt;object&gt; ko Action&lt;string&gt; ki tarah."
      },
      explain: {
        en: `<p><b>Analogy:</b> a basket that <b>only gives out</b> mangoes can be treated as a "basket that gives out fruit" — safe (covariance, <code>out</code>). A juicer that <b>accepts any fruit</b> can be used where "a juicer that accepts mangoes" is needed — safe (contravariance, <code>in</code>).</p>
<ul>
<li>Only on <b>generic interfaces and delegates</b> — <code>IEnumerable&lt;out T&gt;</code>, <code>IReadOnlyList&lt;out T&gt;</code>, <code>Func&lt;out TResult&gt;</code>, <code>Action&lt;in T&gt;</code>, <code>IComparer&lt;in T&gt;</code>.</li>
<li>Only for <b>reference-type</b> arguments: <code>IEnumerable&lt;int&gt;</code> → <code>IEnumerable&lt;object&gt;</code> is not allowed (CS0266), because ints would need boxing.</li>
<li>Classes are never variant: <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> is CS0029. If it were allowed, someone could <code>Add(42)</code> into a list of strings.</li>
<li>Arrays are covariant for historical reasons: <code>object[] arr = new string[1]; arr[0] = 1;</code> compiles but throws <code>ArrayTypeMismatchException</code> at runtime.</li>
</ul>
<p>Follow-up: "Why is that useful in real code?" — a method taking <code>IEnumerable&lt;Animal&gt;</code> accepts a <code>List&lt;Dog&gt;</code> directly — one reason to accept <code>IEnumerable&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> instead of <code>List&lt;T&gt;</code>.</p>`,
        hi: `<p><b>Analogy:</b> जो टोकरी <b>सिर्फ़ आम निकालती</b> है, उसे "फल निकालने वाली टोकरी" मान सकते हो — safe (covariance, <code>out</code>)। जो juicer <b>कोई भी फल ले लेता</b> है, उसे वहाँ use कर सकते हो जहाँ "आम लेने वाला juicer" चाहिए — safe (contravariance, <code>in</code>)।</p>
<ul>
<li>सिर्फ़ <b>generic interfaces और delegates</b> पर — <code>IEnumerable&lt;out T&gt;</code>, <code>IReadOnlyList&lt;out T&gt;</code>, <code>Func&lt;out TResult&gt;</code>, <code>Action&lt;in T&gt;</code>, <code>IComparer&lt;in T&gt;</code>।</li>
<li>सिर्फ़ <b>reference-type</b> arguments के लिए: <code>IEnumerable&lt;int&gt;</code> → <code>IEnumerable&lt;object&gt;</code> allowed नहीं (CS0266), क्योंकि ints को boxing चाहिए।</li>
<li>Classes कभी variant नहीं होतीं: <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> CS0029 है। अगर allowed होता, तो कोई strings की list में <code>Add(42)</code> कर देता।</li>
<li>Arrays पुराने कारणों से covariant हैं: <code>object[] arr = new string[1]; arr[0] = 1;</code> compile होता है पर runtime पर <code>ArrayTypeMismatchException</code> देता है।</li>
</ul>
<p>Follow-up: "Real code में यह क्यों useful है?" — <code>IEnumerable&lt;Animal&gt;</code> लेने वाला method सीधे <code>List&lt;Dog&gt;</code> ले लेता है — यही एक कारण है कि <code>List&lt;T&gt;</code> की जगह <code>IEnumerable&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> accept करो।</p>`,
        hg: `<p><b>Analogy:</b> jo tokri <b>sirf aam nikaalti</b> hai, use "phal nikaalne wali tokri" maan sakte ho — safe (covariance, <code>out</code>). Jo juicer <b>koi bhi phal le leta</b> hai, use wahan use kar sakte ho jahan "aam lene wala juicer" chahiye — safe (contravariance, <code>in</code>).</p>
<ul>
<li>Sirf <b>generic interfaces aur delegates</b> par — <code>IEnumerable&lt;out T&gt;</code>, <code>IReadOnlyList&lt;out T&gt;</code>, <code>Func&lt;out TResult&gt;</code>, <code>Action&lt;in T&gt;</code>, <code>IComparer&lt;in T&gt;</code>.</li>
<li>Sirf <b>reference-type</b> arguments ke liye: <code>IEnumerable&lt;int&gt;</code> → <code>IEnumerable&lt;object&gt;</code> allowed nahi (CS0266), kyunki ints ko boxing chahiye.</li>
<li>Classes kabhi variant nahi hoti: <code>List&lt;string&gt;</code> → <code>List&lt;object&gt;</code> CS0029 hai. Agar allowed hota, to koi strings ki list mein <code>Add(42)</code> kar deta.</li>
<li>Arrays purane kaaranon se covariant hain: <code>object[] arr = new string[1]; arr[0] = 1;</code> compile hota hai par runtime par <code>ArrayTypeMismatchException</code> deta hai.</li>
</ul>
<p>Follow-up: "Real code mein yeh kyun useful hai?" — <code>IEnumerable&lt;Animal&gt;</code> lene wala method seedhe <code>List&lt;Dog&gt;</code> le leta hai — yahi ek kaaran hai ki <code>List&lt;T&gt;</code> ki jagah <code>IEnumerable&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> accept karo.</p>`
      }
    },
    {
      id: "readonly-vs-immutable-collections",
      depth: "detailed",
      q: "IReadOnlyList vs ReadOnlyCollection vs ImmutableList vs FrozenDictionary — what is the difference?",
      answer: "A read-only interface or ReadOnlyCollection only stops the caller from changing it; the owner still can. Immutable collections never change — every 'change' returns a new one. Frozen collections are built once and tuned for very fast reads.",
      meaning: {
        hi: "Read-only interface या ReadOnlyCollection सिर्फ़ caller को बदलने से रोकते हैं; owner अब भी बदल सकता है। Immutable collections कभी नहीं बदलते — हर 'बदलाव' नया collection return करता है। Frozen collections एक बार बनते हैं और बहुत तेज़ reads के लिए tuned होते हैं।",
        hg: "Read-only interface ya ReadOnlyCollection sirf caller ko badalne se rokte hain; owner ab bhi badal sakta hai. Immutable collections kabhi nahi badalte — har 'badlaav' naya collection return karta hai. Frozen collections ek baar bante hain aur bahut tez reads ke liye tuned hote hain."
      },
      explain: {
        en: `<ul>
<li><code>IReadOnlyList&lt;T&gt;</code> — just an interface. If you return your inner <code>List&lt;T&gt;</code> typed as this, a caller can still cast it back to <code>List&lt;T&gt;</code> and change it.</li>
<li><code>ReadOnlyCollection&lt;T&gt;</code> (<code>list.AsReadOnly()</code>) — a wrapper/<b>view</b>: the caller cannot cast around it, but changes made to the inner list show through.</li>
<li><code>ImmutableList&lt;T&gt;</code>, <code>ImmutableDictionary</code> (System.Collections.Immutable) — truly never change; <code>Add</code> returns a new instance that shares most structure with the old one. Great for snapshots shared between threads. <code>ImmutableArray&lt;T&gt;</code> is faster to read but copies on every change.</li>
<li><code>FrozenDictionary</code>/<code>FrozenSet</code> (.NET 8+) — immutable and optimised for lookups; creating them costs more. Ideal for config/lookup tables built once at startup and read on every request.</li>
</ul>
<p><b>TL angle:</b> from a domain class, expose <code>IReadOnlyList&lt;T&gt;</code> (backed by <code>AsReadOnly()</code> if the risk matters). For data shared across threads, prefer immutable or frozen collections over locks.</p>`,
        hi: `<ul>
<li><code>IReadOnlyList&lt;T&gt;</code> — सिर्फ़ एक interface। अगर आप अपनी अंदर की <code>List&lt;T&gt;</code> इसी type में return करते हो, तो caller उसे वापस <code>List&lt;T&gt;</code> में cast करके बदल सकता है।</li>
<li><code>ReadOnlyCollection&lt;T&gt;</code> (<code>list.AsReadOnly()</code>) — एक wrapper/<b>view</b>: caller इसे cast करके नहीं बदल सकता, पर अंदर की list में हुए बदलाव इसमें दिखते हैं।</li>
<li><code>ImmutableList&lt;T&gt;</code>, <code>ImmutableDictionary</code> (System.Collections.Immutable) — सच में कभी नहीं बदलते; <code>Add</code> नया instance return करता है जो पुराने के साथ ज़्यादातर structure share करता है। Threads के बीच share होने वाले snapshots के लिए बढ़िया। <code>ImmutableArray&lt;T&gt;</code> पढ़ने में तेज़ है पर हर बदलाव पर copy करता है।</li>
<li><code>FrozenDictionary</code>/<code>FrozenSet</code> (.NET 8+) — immutable और lookups के लिए optimised; बनाने में ज़्यादा खर्च। Startup पर एक बार बनने वाली और हर request में पढ़ी जाने वाली config/lookup tables के लिए बढ़िया।</li>
</ul>
<p><b>TL angle:</b> domain class से <code>IReadOnlyList&lt;T&gt;</code> expose करो (risk ज़रूरी हो तो <code>AsReadOnly()</code> के साथ)। Threads के बीच share होने वाले data के लिए locks की जगह immutable या frozen collections बेहतर हैं।</p>`,
        hg: `<ul>
<li><code>IReadOnlyList&lt;T&gt;</code> — sirf ek interface. Agar aap apni andar ki <code>List&lt;T&gt;</code> isi type mein return karte ho, to caller use wapas <code>List&lt;T&gt;</code> mein cast karke badal sakta hai.</li>
<li><code>ReadOnlyCollection&lt;T&gt;</code> (<code>list.AsReadOnly()</code>) — ek wrapper/<b>view</b>: caller ise cast karke nahi badal sakta, par andar ki list mein hue badlaav ismein dikhte hain.</li>
<li><code>ImmutableList&lt;T&gt;</code>, <code>ImmutableDictionary</code> (System.Collections.Immutable) — sach mein kabhi nahi badalte; <code>Add</code> naya instance return karta hai jo purane ke saath zyaadatar structure share karta hai. Threads ke beech share hone wale snapshots ke liye badhiya. <code>ImmutableArray&lt;T&gt;</code> padhne mein tez hai par har badlaav par copy karta hai.</li>
<li><code>FrozenDictionary</code>/<code>FrozenSet</code> (.NET 8+) — immutable aur lookups ke liye optimised; banane mein zyada kharch. Startup par ek baar banne wali aur har request mein padhi jaane wali config/lookup tables ke liye badhiya.</li>
</ul>
<p><b>TL angle:</b> domain class se <code>IReadOnlyList&lt;T&gt;</code> expose karo (risk zaroori ho to <code>AsReadOnly()</code> ke saath). Threads ke beech share hone wale data ke liye locks ki jagah immutable ya frozen collections behtar hain.</p>`
      }
    },
    {
      id: "dictionary-internals",
      depth: "detailed",
      q: "How does Dictionary&lt;TKey, TValue&gt; work internally? What is its lookup complexity?",
      answer: "It is a hash table: the key's GetHashCode picks a bucket and Equals finds the exact entry, so lookups are O(1) on average. Keys need a stable hash code and an Equals that agrees with it.",
      meaning: {
        hi: "यह hash table है: key का GetHashCode bucket चुनता है और Equals सही entry ढूँढता है, इसलिए lookups average O(1) हैं। Keys का hash code stable होना चाहिए और Equals उसके साथ consistent होना चाहिए।",
        hg: "Yeh hash table hai: key ka GetHashCode bucket chunta hai aur Equals sahi entry dhoondhta hai, isliye lookups average O(1) hain. Keys ka hash code stable hona chahiye aur Equals uske saath consistent hona chahiye."
      },
      explain: {
        en: `<p><b>Analogy:</b> a post office sorting rack. The PIN code (hash code) tells which pigeonhole (bucket) to look in; inside the pigeonhole you read the full address (Equals) to find the exact letter.</p>
<ul>
<li>Internally: an array of buckets plus an array of entries; entries that land in the same bucket (a <b>collision</b>) are chained together.</li>
<li>Average O(1) for add/lookup/remove; worst case O(n) if many keys collide (a bad <code>GetHashCode</code>, e.g. one that returns a constant).</li>
<li>When full, it grows (roughly doubles) and re-buckets every entry — pass a <b>capacity</b> to the constructor when you know the size.</li>
<li><b>Rules for keys</b>: if <code>a.Equals(b)</code> then their hash codes must be equal; do not change a key's fields after adding it (its hash changes and the entry is "lost"). Records and strings are good keys.</li>
<li>Not thread-safe for writes; do not depend on its enumeration order.</li>
</ul>
<p>Follow-up: "Two different keys with the same hash code?" — both are stored; <code>Equals</code> tells them apart. Correct, just slower if it happens a lot.</p>
<p>Follow-up: "Dictionary vs <code>SortedDictionary</code>?" — hash table O(1) average and no order vs balanced tree O(log n) kept sorted by key.</p>`,
        hi: `<p><b>Analogy:</b> post office का sorting rack। PIN code (hash code) बताता है कि किस खाने (bucket) में देखना है; खाने के अंदर पूरा address (Equals) पढ़कर सही चिट्ठी ढूँढते हो।</p>
<ul>
<li>अंदर: buckets का एक array और entries का एक array; जो entries same bucket में आती हैं (<b>collision</b>) वो आपस में chain हो जाती हैं।</li>
<li>Add/lookup/remove average O(1); worst case O(n) अगर बहुत keys collide करें (ख़राब <code>GetHashCode</code>, जैसे हमेशा एक constant return करना)।</li>
<li>भर जाने पर यह बढ़ता है (लगभग double) और हर entry को फिर से bucket में डालता है — size पता हो तो constructor में <b>capacity</b> दे दो।</li>
<li><b>Keys के rules</b>: अगर <code>a.Equals(b)</code> है तो उनके hash codes बराबर होने चाहिए; add करने के बाद key के fields मत बदलो (उसका hash बदल जाता है और entry "खो" जाती है)। Records और strings अच्छी keys हैं।</li>
<li>Writes के लिए thread-safe नहीं; इसके enumeration order पर depend मत करो।</li>
</ul>
<p>Follow-up: "दो अलग keys का same hash code हो तो?" — दोनों store होती हैं; <code>Equals</code> उन्हें अलग पहचानता है। सही चलता है, बस ऐसा बहुत हो तो धीमा।</p>
<p>Follow-up: "Dictionary बनाम <code>SortedDictionary</code>?" — hash table average O(1) और कोई order नहीं, बनाम balanced tree O(log n) जो key से sorted रहता है।</p>`,
        hg: `<p><b>Analogy:</b> post office ka sorting rack. PIN code (hash code) batata hai ki kis khaane (bucket) mein dekhna hai; khaane ke andar poora address (Equals) padhkar sahi chitthi dhoondhte ho.</p>
<ul>
<li>Andar: buckets ka ek array aur entries ka ek array; jo entries same bucket mein aati hain (<b>collision</b>) woh aapas mein chain ho jaati hain.</li>
<li>Add/lookup/remove average O(1); worst case O(n) agar bahut keys collide karein (kharaab <code>GetHashCode</code>, jaise hamesha ek constant return karna).</li>
<li>Bhar jaane par yeh badhta hai (lagbhag double) aur har entry ko phir se bucket mein daalta hai — size pata ho to constructor mein <b>capacity</b> de do.</li>
<li><b>Keys ke rules</b>: agar <code>a.Equals(b)</code> hai to unke hash codes barabar hone chahiye; add karne ke baad key ke fields mat badlo (uska hash badal jaata hai aur entry "kho" jaati hai). Records aur strings achhi keys hain.</li>
<li>Writes ke liye thread-safe nahi; iske enumeration order par depend mat karo.</li>
</ul>
<p>Follow-up: "Do alag keys ka same hash code ho to?" — dono store hoti hain; <code>Equals</code> unhe alag pehchanta hai. Sahi chalta hai, bas aisa bahut ho to dheema.</p>
<p>Follow-up: "Dictionary vs <code>SortedDictionary</code>?" — hash table average O(1) aur koi order nahi, vs balanced tree O(log n) jo key se sorted rehta hai.</p>`
      }
    },
    {
      id: "thread-safe-collections",
      depth: "detailed",
      q: "Which collections would you use when multiple threads read and write the same data?",
      answer: "Concurrent collections such as ConcurrentDictionary and ConcurrentQueue, Channel&lt;T&gt; for producer–consumer, or immutable collections for shared snapshots. Plain List and Dictionary are not safe for concurrent writes.",
      meaning: {
        hi: "ConcurrentDictionary और ConcurrentQueue जैसे concurrent collections, producer–consumer के लिए Channel&lt;T&gt;, या shared snapshots के लिए immutable collections। Normal List और Dictionary concurrent writes के लिए safe नहीं हैं।",
        hg: "ConcurrentDictionary aur ConcurrentQueue jaise concurrent collections, producer–consumer ke liye Channel&lt;T&gt;, ya shared snapshots ke liye immutable collections. Normal List aur Dictionary concurrent writes ke liye safe nahi hain."
      },
      explain: {
        en: `<ul>
<li><code>ConcurrentDictionary</code>: use its atomic methods — <code>GetOrAdd</code>, <code>AddOrUpdate</code>, <code>TryRemove</code>. Avoid "check then act" (<code>if (!ContainsKey) Add</code>) — another thread can act in between.</li>
<li>Gotcha: the value factory in <code>GetOrAdd</code>/<code>AddOrUpdate</code> may run <b>more than once</b> under contention (only one result is stored). For expensive or side-effect work, store <code>Lazy&lt;T&gt;</code> values.</li>
<li><code>ConcurrentQueue</code>/<code>ConcurrentBag</code>; <code>Channel&lt;T&gt;</code> (System.Threading.Channels) for async producer–consumer pipelines.</li>
<li>For a simple shared number, <code>Interlocked.Increment</code>; for a small critical section, <code>lock</code> — in .NET 9+ lock on a dedicated <code>System.Threading.Lock</code> object (C# 13 knows this type).</li>
</ul>
<p><b>TL angle:</b> in ASP.NET Core, any <b>singleton</b> service that holds a <code>List</code>/<code>Dictionary</code> is shared by all requests — a classic production bug. Code reviews should check singletons for shared mutable state.</p>`,
        hi: `<ul>
<li><code>ConcurrentDictionary</code>: इसके atomic methods use करो — <code>GetOrAdd</code>, <code>AddOrUpdate</code>, <code>TryRemove</code>। "पहले check फिर काम" (<code>if (!ContainsKey) Add</code>) से बचो — बीच में कोई दूसरा thread काम कर सकता है।</li>
<li>Gotcha: contention होने पर <code>GetOrAdd</code>/<code>AddOrUpdate</code> का value factory <b>एक से ज़्यादा बार</b> चल सकता है (store सिर्फ़ एक result होता है)। महँगे या side-effect वाले काम के लिए <code>Lazy&lt;T&gt;</code> values रखो।</li>
<li><code>ConcurrentQueue</code>/<code>ConcurrentBag</code>; async producer–consumer pipelines के लिए <code>Channel&lt;T&gt;</code> (System.Threading.Channels)।</li>
<li>एक simple shared number के लिए <code>Interlocked.Increment</code>; छोटे critical section के लिए <code>lock</code> — .NET 9+ में एक dedicated <code>System.Threading.Lock</code> object पर lock करो (C# 13 इस type को पहचानता है)।</li>
</ul>
<p><b>TL angle:</b> ASP.NET Core में जो भी <b>singleton</b> service <code>List</code>/<code>Dictionary</code> रखती है, वो सारी requests में share होती है — यह production का classic bug है। Code reviews में singletons के अंदर shared mutable state check करो।</p>`,
        hg: `<ul>
<li><code>ConcurrentDictionary</code>: iske atomic methods use karo — <code>GetOrAdd</code>, <code>AddOrUpdate</code>, <code>TryRemove</code>. "Pehle check phir kaam" (<code>if (!ContainsKey) Add</code>) se bacho — beech mein koi doosra thread kaam kar sakta hai.</li>
<li>Gotcha: contention hone par <code>GetOrAdd</code>/<code>AddOrUpdate</code> ka value factory <b>ek se zyada baar</b> chal sakta hai (store sirf ek result hota hai). Mehenge ya side-effect wale kaam ke liye <code>Lazy&lt;T&gt;</code> values rakho.</li>
<li><code>ConcurrentQueue</code>/<code>ConcurrentBag</code>; async producer–consumer pipelines ke liye <code>Channel&lt;T&gt;</code> (System.Threading.Channels).</li>
<li>Ek simple shared number ke liye <code>Interlocked.Increment</code>; chhote critical section ke liye <code>lock</code> — .NET 9+ mein ek dedicated <code>System.Threading.Lock</code> object par lock karo (C# 13 is type ko pehchanta hai).</li>
</ul>
<p><b>TL angle:</b> ASP.NET Core mein jo bhi <b>singleton</b> service <code>List</code>/<code>Dictionary</code> rakhti hai, woh saari requests mein share hoti hai — yeh production ka classic bug hai. Code reviews mein singletons ke andar shared mutable state check karo.</p>`
      },
      code: [{
        caption: {
          en: "ConcurrentDictionary.AddOrUpdate, Interlocked, and the C# 13 Lock type — the totals are always correct",
          hi: "ConcurrentDictionary.AddOrUpdate, Interlocked, और C# 13 का Lock type — totals हमेशा सही आते हैं",
          hg: "ConcurrentDictionary.AddOrUpdate, Interlocked, aur C# 13 ka Lock type — totals hamesha sahi aate hain"
        },
        check: "run",
        expected: "home=500, cart=500\n1000\n1000 orders, total 10000",
        src: `using System.Collections.Concurrent;

var hits = new ConcurrentDictionary<string, int>();
Parallel.For(0, 1000, i =>
{
    string page = i % 2 == 0 ? "home" : "cart";
    hits.AddOrUpdate(page, 1, (_, old) => old + 1);   // atomic per key
});
Console.WriteLine($"home={hits["home"]}, cart={hits["cart"]}");

int simpleCount = 0;
Parallel.For(0, 1000, _ => Interlocked.Increment(ref simpleCount));
Console.WriteLine(simpleCount);

var stats = new OrderStats();
Parallel.For(0, 1000, _ => stats.Record(10m));
Console.WriteLine($"{stats.Count} orders, total {stats.Total}");

public class OrderStats
{
    private readonly Lock _gate = new();   // .NET 9+ / C# 13: a dedicated lock object
    private int _count;
    private decimal _total;

    public void Record(decimal amount)
    {
        lock (_gate)                       // two fields must change together
        {
            _count++;
            _total += amount;
        }
    }

    public int Count { get { lock (_gate) { return _count; } } }
    public decimal Total { get { lock (_gate) { return _total; } } }
}`
      }]
    },
    {
      id: "func-action-predicate",
      depth: "detailed",
      q: "What is the difference between Func, Action and Predicate?",
      answer: "All three are built-in generic delegates. Func returns a value (its last type argument is the result), Action returns void, and Predicate&lt;T&gt; returns bool. Newer APIs like LINQ use Func&lt;T, bool&gt; instead of Predicate&lt;T&gt;.",
      meaning: {
        hi: "तीनों built-in generic delegates हैं। Func value return करता है (आख़िरी type argument result है), Action void return करता है, और Predicate&lt;T&gt; bool return करता है। LINQ जैसे नए APIs Predicate&lt;T&gt; की जगह Func&lt;T, bool&gt; use करते हैं।",
        hg: "Teeno built-in generic delegates hain. Func value return karta hai (aakhri type argument result hai), Action void return karta hai, aur Predicate&lt;T&gt; bool return karta hai. LINQ jaise naye APIs Predicate&lt;T&gt; ki jagah Func&lt;T, bool&gt; use karte hain."
      },
      explain: {
        en: `<ul>
<li><code>Func&lt;int, int, int&gt; add = (a, b) =&gt; a + b;</code> — two inputs, one <code>int</code> result. Up to 16 inputs.</li>
<li><code>Action&lt;string&gt; log = msg =&gt; Console.WriteLine(msg);</code> — no result.</li>
<li><code>Predicate&lt;int&gt; isEven = n =&gt; n % 2 == 0;</code> — used by older APIs: <code>List&lt;T&gt;.FindAll</code>, <code>RemoveAll</code>, <code>Array.Find</code>.</li>
<li><code>Predicate&lt;T&gt;</code> and <code>Func&lt;T,bool&gt;</code> have the same shape but are <b>different types</b> — you cannot assign one variable to the other directly (a lambda works for both).</li>
<li>Before generic delegates you declared your own: <code>delegate decimal PriceRule(decimal price);</code>. A named delegate is still useful when the name documents intent or you need <code>ref</code>/<code>out</code> parameters.</li>
</ul>
<p>Follow-up: "What does <code>Expression&lt;Func&lt;Order,bool&gt;&gt;</code> mean?" — the lambda is kept as a data tree, not compiled code, so a provider like EF Core can translate it to SQL (Days 4–6).</p>`,
        hi: `<ul>
<li><code>Func&lt;int, int, int&gt; add = (a, b) =&gt; a + b;</code> — दो inputs, एक <code>int</code> result। 16 inputs तक।</li>
<li><code>Action&lt;string&gt; log = msg =&gt; Console.WriteLine(msg);</code> — कोई result नहीं।</li>
<li><code>Predicate&lt;int&gt; isEven = n =&gt; n % 2 == 0;</code> — पुराने APIs में use होता है: <code>List&lt;T&gt;.FindAll</code>, <code>RemoveAll</code>, <code>Array.Find</code>।</li>
<li><code>Predicate&lt;T&gt;</code> और <code>Func&lt;T,bool&gt;</code> की shape same है पर ये <b>अलग types</b> हैं — एक का variable सीधे दूसरे में assign नहीं कर सकते (lambda दोनों में चल जाता है)।</li>
<li>Generic delegates से पहले आप अपना delegate declare करते थे: <code>delegate decimal PriceRule(decimal price);</code>। Named delegate अब भी useful है जब नाम से intent साफ़ होता हो या <code>ref</code>/<code>out</code> parameters चाहिए हों।</li>
</ul>
<p>Follow-up: "<code>Expression&lt;Func&lt;Order,bool&gt;&gt;</code> का क्या मतलब है?" — lambda compiled code की जगह data tree के रूप में रखा जाता है, ताकि EF Core जैसा provider उसे SQL में बदल सके (Days 4–6)।</p>`,
        hg: `<ul>
<li><code>Func&lt;int, int, int&gt; add = (a, b) =&gt; a + b;</code> — do inputs, ek <code>int</code> result. 16 inputs tak.</li>
<li><code>Action&lt;string&gt; log = msg =&gt; Console.WriteLine(msg);</code> — koi result nahi.</li>
<li><code>Predicate&lt;int&gt; isEven = n =&gt; n % 2 == 0;</code> — purane APIs mein use hota hai: <code>List&lt;T&gt;.FindAll</code>, <code>RemoveAll</code>, <code>Array.Find</code>.</li>
<li><code>Predicate&lt;T&gt;</code> aur <code>Func&lt;T,bool&gt;</code> ki shape same hai par yeh <b>alag types</b> hain — ek ka variable seedhe doosre mein assign nahi kar sakte (lambda dono mein chal jaata hai).</li>
<li>Generic delegates se pehle aap apna delegate declare karte the: <code>delegate decimal PriceRule(decimal price);</code>. Named delegate ab bhi useful hai jab naam se intent saaf hota ho ya <code>ref</code>/<code>out</code> parameters chahiye hon.</li>
</ul>
<p>Follow-up: "<code>Expression&lt;Func&lt;Order,bool&gt;&gt;</code> ka kya matlab hai?" — lambda compiled code ki jagah data tree ke roop mein rakha jaata hai, taaki EF Core jaisa provider use SQL mein badal sake (Days 4–6).</p>`
      }
    },
    {
      id: "closure-loop-capture",
      depth: "detailed",
      q: "What is a closure? Explain the classic loop-variable capture problem.",
      answer: "A closure is a lambda that captures outer variables — the variables themselves, not their values. In a for loop all lambdas share one loop variable, so they all see its final value; foreach gets a fresh variable per iteration since C# 5.",
      meaning: {
        hi: "Closure वो lambda है जो बाहर के variables capture करता है — variables ख़ुद, उनकी values नहीं। for loop में सारे lambdas एक ही loop variable share करते हैं, इसलिए सबको आख़िरी value दिखती है; C# 5 से foreach में हर iteration का नया variable होता है।",
        hg: "Closure woh lambda hai jo bahar ke variables capture karta hai — variables khud, unki values nahi. for loop mein saare lambdas ek hi loop variable share karte hain, isliye sabko aakhri value dikhti hai; C# 5 se foreach mein har iteration ka naya variable hota hai."
      },
      explain: {
        en: `<ul>
<li>The compiler moves captured locals into a hidden class (a "display class") on the heap; the lambda and the method both use that same field.</li>
<li><code>for (int i = 0; i &lt; 3; i++) actions.Add(() =&gt; Console.Write(i));</code> → prints <b>333</b>: one <code>i</code>, and it is 3 when the lambdas finally run.</li>
<li>Fix: copy into a local inside the loop — <code>int copy = i; actions.Add(() =&gt; Console.Write(copy));</code> → <b>012</b>. Or use <code>foreach</code>, which since C# 5 creates a new variable per iteration.</li>
<li>Same trap with tasks/timers started in a loop, and with captured variables changed later.</li>
<li>Cost: capturing allocates the hidden object. A <code>static</code> lambda (C# 9) forbids capture (CS8820) — useful on hot paths.</li>
</ul>
<p><b>TL angle:</b> in code review, watch for lambdas that capture a loop counter, a <code>DbContext</code>, or a scoped service and run later on another thread — the captured object may be changed or disposed by then.</p>`,
        hi: `<ul>
<li>Compiler capture किए गए locals को heap पर एक छुपी class ("display class") में ले जाता है; lambda और method दोनों उसी field को use करते हैं।</li>
<li><code>for (int i = 0; i &lt; 3; i++) actions.Add(() =&gt; Console.Write(i));</code> → <b>333</b> print करता है: <code>i</code> एक ही है, और जब lambdas आख़िर में चलते हैं तब वो 3 है।</li>
<li>Fix: loop के अंदर local में copy करो — <code>int copy = i; actions.Add(() =&gt; Console.Write(copy));</code> → <b>012</b>। या <code>foreach</code> use करो, जो C# 5 से हर iteration में नया variable बनाता है।</li>
<li>Loop में शुरू किए tasks/timers में भी यही trap है, और उन captured variables में भी जो बाद में बदलते हैं।</li>
<li>Cost: capture करने से छुपा object allocate होता है। <code>static</code> lambda (C# 9) capture नहीं करने देता (CS8820) — hot paths पर useful।</li>
</ul>
<p><b>TL angle:</b> code review में ऐसे lambdas देखो जो loop counter, <code>DbContext</code> या scoped service capture करते हैं और बाद में किसी दूसरे thread पर चलते हैं — तब तक captured object बदल या dispose हो चुका हो सकता है।</p>`,
        hg: `<ul>
<li>Compiler capture kiye gaye locals ko heap par ek chhupi class ("display class") mein le jaata hai; lambda aur method dono usi field ko use karte hain.</li>
<li><code>for (int i = 0; i &lt; 3; i++) actions.Add(() =&gt; Console.Write(i));</code> → <b>333</b> print karta hai: <code>i</code> ek hi hai, aur jab lambdas aakhir mein chalte hain tab woh 3 hai.</li>
<li>Fix: loop ke andar local mein copy karo — <code>int copy = i; actions.Add(() =&gt; Console.Write(copy));</code> → <b>012</b>. Ya <code>foreach</code> use karo, jo C# 5 se har iteration mein naya variable banata hai.</li>
<li>Loop mein shuru kiye tasks/timers mein bhi yahi trap hai, aur un captured variables mein bhi jo baad mein badalte hain.</li>
<li>Cost: capture karne se chhupa object allocate hota hai. <code>static</code> lambda (C# 9) capture nahi karne deta (CS8820) — hot paths par useful.</li>
</ul>
<p><b>TL angle:</b> code review mein aise lambdas dekho jo loop counter, <code>DbContext</code> ya scoped service capture karte hain aur baad mein kisi doosre thread par chalte hain — tab tak captured object badal ya dispose ho chuka ho sakta hai.</p>`
      }
    },
    {
      id: "event-memory-leak",
      depth: "detailed",
      q: "How can events cause memory leaks, and how do you prevent them?",
      answer: "An event holds strong references to its subscribers. If the publisher lives longer — a singleton or a static event — subscribers cannot be garbage-collected until they unsubscribe. So unsubscribe, typically in Dispose.",
      meaning: {
        hi: "Event अपने subscribers के strong references रखता है। अगर publisher ज़्यादा देर तक रहता है — singleton या static event — तो subscribers unsubscribe किए बिना garbage-collect नहीं हो सकते। इसलिए unsubscribe करो, आम तौर पर Dispose में।",
        hg: "Event apne subscribers ke strong references rakhta hai. Agar publisher zyada der tak rehta hai — singleton ya static event — to subscribers unsubscribe kiye bina garbage-collect nahi ho sakte. Isliye unsubscribe karo, aam taur par Dispose mein."
      },
      explain: {
        en: `<ul>
<li><code>publisher.Changed += subscriber.OnChanged;</code> stores a delegate that points to <code>subscriber</code>. As long as <code>publisher</code> is alive, <code>subscriber</code> is reachable — the GC cannot collect it.</li>
<li>Short-lived publisher (both die together) → no problem. Long-lived publisher (singleton service, static event, app-wide cache) + short-lived subscribers (pages, view models, per-request objects) → they pile up.</li>
<li><b>Fixes</b>: unsubscribe with <code>-=</code> (keep the handler in a field — an inline lambda cannot be removed later), implement <code>IDisposable</code> and unsubscribe in <code>Dispose</code>, avoid static events, or use a weak-event pattern (e.g. WPF's <code>WeakEventManager</code>) in UI apps.</li>
<li>Symptom: memory grows steadily; a memory dump shows many old subscriber objects kept alive by an event's invocation list.</li>
</ul>
<p><b>TL angle (ASP.NET Core):</b> a scoped or transient service subscribing to a <b>singleton's</b> event is both a leak and a lifetime bug — the singleton keeps request objects alive after the request ends.</p>`,
        hi: `<ul>
<li><code>publisher.Changed += subscriber.OnChanged;</code> एक delegate store करता है जो <code>subscriber</code> पर point करता है। जब तक <code>publisher</code> ज़िंदा है, <code>subscriber</code> reachable है — GC उसे collect नहीं कर सकता।</li>
<li>Publisher कम समय वाला हो (दोनों साथ ख़त्म) → कोई problem नहीं। Publisher लंबे समय वाला (singleton service, static event, app-wide cache) + subscribers कम समय वाले (pages, view models, per-request objects) → ये जमा होते जाते हैं।</li>
<li><b>Fixes</b>: <code>-=</code> से unsubscribe करो (handler को field में रखो — inline lambda बाद में हटाया नहीं जा सकता), <code>IDisposable</code> implement करके <code>Dispose</code> में unsubscribe करो, static events से बचो, या UI apps में weak-event pattern use करो (जैसे WPF का <code>WeakEventManager</code>)।</li>
<li>लक्षण: memory लगातार बढ़ती है; memory dump में दिखता है कि event की invocation list ने बहुत सारे पुराने subscriber objects ज़िंदा रखे हैं।</li>
</ul>
<p><b>TL angle (ASP.NET Core):</b> scoped या transient service का किसी <b>singleton</b> के event को subscribe करना leak भी है और lifetime bug भी — singleton request ख़त्म होने के बाद भी request objects को ज़िंदा रखता है।</p>`,
        hg: `<ul>
<li><code>publisher.Changed += subscriber.OnChanged;</code> ek delegate store karta hai jo <code>subscriber</code> par point karta hai. Jab tak <code>publisher</code> zinda hai, <code>subscriber</code> reachable hai — GC use collect nahi kar sakta.</li>
<li>Publisher kam samay wala ho (dono saath khatam) → koi problem nahi. Publisher lambe samay wala (singleton service, static event, app-wide cache) + subscribers kam samay wale (pages, view models, per-request objects) → yeh jama hote jaate hain.</li>
<li><b>Fixes</b>: <code>-=</code> se unsubscribe karo (handler ko field mein rakho — inline lambda baad mein hataya nahi ja sakta), <code>IDisposable</code> implement karke <code>Dispose</code> mein unsubscribe karo, static events se bacho, ya UI apps mein weak-event pattern use karo (jaise WPF ka <code>WeakEventManager</code>).</li>
<li>Lakshan: memory lagaataar badhti hai; memory dump mein dikhta hai ki event ki invocation list ne bahut saare purane subscriber objects zinda rakhe hain.</li>
</ul>
<p><b>TL angle (ASP.NET Core):</b> scoped ya transient service ka kisi <b>singleton</b> ke event ko subscribe karna leak bhi hai aur lifetime bug bhi — singleton request khatam hone ke baad bhi request objects ko zinda rakhta hai.</p>`
      }
    },
    {
      id: "collection-interfaces",
      depth: "detailed",
      q: "Which collection type should a method accept and return — IEnumerable, ICollection, IList or List?",
      answer: "Accept the most general type you actually need, often IEnumerable&lt;T&gt; or IReadOnlyCollection&lt;T&gt;. Return a read-only but useful type such as IReadOnlyList&lt;T&gt;, so callers get Count and indexing without being able to change your data.",
      meaning: {
        hi: "Parameter में सबसे general type लो जो सच में चाहिए, अक्सर IEnumerable&lt;T&gt; या IReadOnlyCollection&lt;T&gt;। Return में IReadOnlyList&lt;T&gt; जैसा read-only पर useful type दो, ताकि callers को Count और indexing मिले पर वो आपका data न बदल सकें।",
        hg: "Parameter mein sabse general type lo jo sach mein chahiye, aksar IEnumerable&lt;T&gt; ya IReadOnlyCollection&lt;T&gt;. Return mein IReadOnlyList&lt;T&gt; jaisa read-only par useful type do, taaki callers ko Count aur indexing mile par woh aapka data na badal sakein."
      },
      explain: {
        en: `<ul>
<li><code>IEnumerable&lt;T&gt;</code> — only "loop over it". May be <b>lazy</b> (a LINQ query, a DB query): enumerating twice can run the work twice (Day 4). No <code>Count</code> without walking it.</li>
<li><code>IReadOnlyCollection&lt;T&gt;</code> — adds <code>Count</code>. <code>IReadOnlyList&lt;T&gt;</code> — adds the indexer.</li>
<li><code>ICollection&lt;T&gt;</code>/<code>IList&lt;T&gt;</code> — add mutation (<code>Add</code>, <code>Remove</code>); expose only if callers really should change it.</li>
<li><code>List&lt;T&gt;</code> — a concrete class; returning it from a public API ties you to it and invites outside changes.</li>
</ul>
<p><b>Trade-off:</b> accepting <code>IEnumerable&lt;T&gt;</code> is flexible, but if your method enumerates it twice, either accept <code>IReadOnlyCollection&lt;T&gt;</code> or materialise once with <code>ToList()</code>.</p>
<p><b>TL angle:</b> this is a team convention worth writing down — e.g. "services return <code>IReadOnlyList&lt;T&gt;</code> of DTOs; never return <code>IQueryable</code> from a repository unless we decide that deliberately".</p>`,
        hi: `<ul>
<li><code>IEnumerable&lt;T&gt;</code> — सिर्फ़ "इस पर loop चलाओ"। <b>Lazy</b> हो सकता है (LINQ query, DB query): दो बार enumerate करने पर काम दो बार चल सकता है (Day 4)। पूरा घूमे बिना <code>Count</code> नहीं।</li>
<li><code>IReadOnlyCollection&lt;T&gt;</code> — <code>Count</code> जोड़ता है। <code>IReadOnlyList&lt;T&gt;</code> — indexer भी जोड़ता है।</li>
<li><code>ICollection&lt;T&gt;</code>/<code>IList&lt;T&gt;</code> — बदलाव (<code>Add</code>, <code>Remove</code>) जोड़ते हैं; सिर्फ़ तब expose करो जब callers को सच में बदलना चाहिए।</li>
<li><code>List&lt;T&gt;</code> — concrete class; public API से इसे return करने पर आप इससे बँध जाते हो और बाहर से बदलाव को न्योता देते हो।</li>
</ul>
<p><b>Trade-off:</b> <code>IEnumerable&lt;T&gt;</code> लेना flexible है, पर अगर आपका method उसे दो बार enumerate करता है, तो या तो <code>IReadOnlyCollection&lt;T&gt;</code> लो या <code>ToList()</code> से एक बार materialise कर लो।</p>
<p><b>TL angle:</b> यह team convention लिखकर रखने लायक है — जैसे "services DTOs की <code>IReadOnlyList&lt;T&gt;</code> return करती हैं; repository से <code>IQueryable</code> तभी return करेंगे जब सोच-समझकर तय करें"।</p>`,
        hg: `<ul>
<li><code>IEnumerable&lt;T&gt;</code> — sirf "is par loop chalao". <b>Lazy</b> ho sakta hai (LINQ query, DB query): do baar enumerate karne par kaam do baar chal sakta hai (Day 4). Poora ghoome bina <code>Count</code> nahi.</li>
<li><code>IReadOnlyCollection&lt;T&gt;</code> — <code>Count</code> jodta hai. <code>IReadOnlyList&lt;T&gt;</code> — indexer bhi jodta hai.</li>
<li><code>ICollection&lt;T&gt;</code>/<code>IList&lt;T&gt;</code> — badlaav (<code>Add</code>, <code>Remove</code>) jodte hain; sirf tab expose karo jab callers ko sach mein badalna chahiye.</li>
<li><code>List&lt;T&gt;</code> — concrete class; public API se ise return karne par aap isse bandh jaate ho aur bahar se badlaav ko nyota dete ho.</li>
</ul>
<p><b>Trade-off:</b> <code>IEnumerable&lt;T&gt;</code> lena flexible hai, par agar aapka method use do baar enumerate karta hai, to ya to <code>IReadOnlyCollection&lt;T&gt;</code> lo ya <code>ToList()</code> se ek baar materialise kar lo.</p>
<p><b>TL angle:</b> yeh team convention likhkar rakhne laayak hai — jaise "services DTOs ki <code>IReadOnlyList&lt;T&gt;</code> return karti hain; repository se <code>IQueryable</code> tabhi return karenge jab soch-samajhkar tay karein".</p>`
      }
    }
  ],
  puzzles: [
    {
      id: "struct-vs-class-copy",
      src: `var s1 = new Point { X = 1 };
var s2 = s1;
s2.X = 2;

var c1 = new Box { X = 1 };
var c2 = c1;
c2.X = 2;

Point[] points = [new Point { X = 1 }];
var p = points[0];
p.X = 5;
Console.WriteLine($"{s1.X} {c1.X} {points[0].X}");

points[0].X = 7;
Console.WriteLine(points[0].X);

struct Point { public int X; }   // mutable only to show copying
class Box { public int X; }`,
      answer: "1 2 1\n7",
      explain: {
        en: `<ul>
<li><code>s2 = s1</code> copies the struct → changing <code>s2</code> leaves <code>s1.X</code> = <b>1</b>.</li>
<li><code>c2 = c1</code> copies the reference → one object → <code>c1.X</code> = <b>2</b>.</li>
<li><code>var p = points[0]</code> copies the struct out of the array → changing <code>p</code> leaves the array element at <b>1</b>.</li>
<li><code>points[0].X = 7</code> changes the element <b>in place</b> (an array element is a variable) → <b>7</b>. With a <code>List&lt;Point&gt;</code> the same line is a compile error (CS1612), because the list indexer returns a copy.</li>
</ul>`,
        hi: `<ul>
<li><code>s2 = s1</code> struct को copy करता है → <code>s2</code> बदलने पर <code>s1.X</code> = <b>1</b> ही रहता है।</li>
<li><code>c2 = c1</code> reference copy करता है → object एक ही → <code>c1.X</code> = <b>2</b>।</li>
<li><code>var p = points[0]</code> array से struct की copy निकालता है → <code>p</code> बदलने पर array element <b>1</b> ही रहता है।</li>
<li><code>points[0].X = 7</code> element को <b>उसी जगह</b> बदलता है (array element एक variable है) → <b>7</b>। <code>List&lt;Point&gt;</code> के साथ यही line compile error है (CS1612), क्योंकि list का indexer copy return करता है।</li>
</ul>`,
        hg: `<ul>
<li><code>s2 = s1</code> struct ko copy karta hai → <code>s2</code> badalne par <code>s1.X</code> = <b>1</b> hi rehta hai.</li>
<li><code>c2 = c1</code> reference copy karta hai → object ek hi → <code>c1.X</code> = <b>2</b>.</li>
<li><code>var p = points[0]</code> array se struct ki copy nikaalta hai → <code>p</code> badalne par array element <b>1</b> hi rehta hai.</li>
<li><code>points[0].X = 7</code> element ko <b>usi jagah</b> badalta hai (array element ek variable hai) → <b>7</b>. <code>List&lt;Point&gt;</code> ke saath yahi line compile error hai (CS1612), kyunki list ka indexer copy return karta hai.</li>
</ul>`
      }
    },
    {
      id: "reference-passed-by-value",
      src: `var cart = new List<string> { "Atta" };
AddItem(cart);
Replace(cart);
Console.WriteLine(string.Join(",", cart));

ReplaceByRef(ref cart);
Console.WriteLine(string.Join(",", cart));

int qty = 1;
Increment(qty);
Console.WriteLine(qty);

static void AddItem(List<string> items) => items.Add("Dal");
static void Replace(List<string> items) { items = new List<string> { "Oil" }; }
static void ReplaceByRef(ref List<string> items) { items = new List<string> { "Oil" }; }
static void Increment(int n) { n++; }`,
      answer: "Atta,Dal\nOil\n1",
      explain: {
        en: `<ul>
<li><code>AddItem</code> gets a copy of the reference, but it points to the <b>same list</b> → "Dal" is added.</li>
<li><code>Replace</code> points <b>its own copy</b> of the reference to a new list; the caller's <code>cart</code> is untouched → <b>Atta,Dal</b>.</li>
<li><code>ReplaceByRef</code> receives the caller's variable itself → <code>cart</code> now points to the new list → <b>Oil</b>.</li>
<li><code>Increment</code> gets a copy of the <code>int</code> → <code>qty</code> stays <b>1</b>.</li>
</ul>
<p>Interview line: "C# passes everything by value by default — for reference types, the value is the reference."</p>`,
        hi: `<ul>
<li><code>AddItem</code> को reference की copy मिलती है, पर वो <b>उसी list</b> पर point करती है → "Dal" जुड़ जाता है।</li>
<li><code>Replace</code> <b>अपनी copy</b> वाले reference को नई list पर point करता है; caller का <code>cart</code> नहीं बदलता → <b>Atta,Dal</b>।</li>
<li><code>ReplaceByRef</code> को caller का variable ही मिलता है → <code>cart</code> अब नई list पर point करता है → <b>Oil</b>।</li>
<li><code>Increment</code> को <code>int</code> की copy मिलती है → <code>qty</code> <b>1</b> ही रहता है।</li>
</ul>
<p>Interview line: "C# by default सब कुछ by value pass करता है — reference types में वो value reference होती है।"</p>`,
        hg: `<ul>
<li><code>AddItem</code> ko reference ki copy milti hai, par woh <b>usi list</b> par point karti hai → "Dal" jud jaata hai.</li>
<li><code>Replace</code> <b>apni copy</b> wale reference ko nayi list par point karta hai; caller ka <code>cart</code> nahi badalta → <b>Atta,Dal</b>.</li>
<li><code>ReplaceByRef</code> ko caller ka variable hi milta hai → <code>cart</code> ab nayi list par point karta hai → <b>Oil</b>.</li>
<li><code>Increment</code> ko <code>int</code> ki copy milti hai → <code>qty</code> <b>1</b> hi rehta hai.</li>
</ul>
<p>Interview line: "C# by default sab kuch by value pass karta hai — reference types mein woh value reference hoti hai."</p>`
      }
    },
    {
      id: "boxing-snapshot",
      src: `int x = 10;
object o = x;
x++;
Console.WriteLine($"{x} {o}");

object a = 5;
object b = 5;
Console.WriteLine(a == b);
Console.WriteLine(a.Equals(b));

try
{
    Console.WriteLine((long)a);
}
catch (InvalidCastException)
{
    Console.WriteLine("InvalidCastException");
}`,
      answer: "11 10\nFalse\nTrue\nInvalidCastException",
      explain: {
        en: `<ul>
<li><code>object o = x</code> boxes a <b>copy</b> of 10. <code>x++</code> changes only <code>x</code> → <b>11 10</b>.</li>
<li><code>a</code> and <code>b</code> are two <b>different boxes</b>. <code>==</code> on <code>object</code> compares references → <b>False</b>.</li>
<li><code>Equals</code> is virtual → <code>Int32.Equals</code> compares the values → <b>True</b>.</li>
<li>A boxed <code>int</code> can only be unboxed to <code>int</code> (or <code>int?</code>) → <code>(long)a</code> throws <b>InvalidCastException</b>. <code>(long)(int)a</code> would work.</li>
</ul>`,
        hi: `<ul>
<li><code>object o = x</code> 10 की एक <b>copy</b> box करता है। <code>x++</code> सिर्फ़ <code>x</code> बदलता है → <b>11 10</b>।</li>
<li><code>a</code> और <code>b</code> दो <b>अलग boxes</b> हैं। <code>object</code> पर <code>==</code> references compare करता है → <b>False</b>।</li>
<li><code>Equals</code> virtual है → <code>Int32.Equals</code> values compare करता है → <b>True</b>।</li>
<li>Boxed <code>int</code> सिर्फ़ <code>int</code> (या <code>int?</code>) में unbox हो सकता है → <code>(long)a</code> <b>InvalidCastException</b> फेंकता है। <code>(long)(int)a</code> चल जाता।</li>
</ul>`,
        hg: `<ul>
<li><code>object o = x</code> 10 ki ek <b>copy</b> box karta hai. <code>x++</code> sirf <code>x</code> badalta hai → <b>11 10</b>.</li>
<li><code>a</code> aur <code>b</code> do <b>alag boxes</b> hain. <code>object</code> par <code>==</code> references compare karta hai → <b>False</b>.</li>
<li><code>Equals</code> virtual hai → <code>Int32.Equals</code> values compare karta hai → <b>True</b>.</li>
<li>Boxed <code>int</code> sirf <code>int</code> (ya <code>int?</code>) mein unbox ho sakta hai → <code>(long)a</code> <b>InvalidCastException</b> phenkta hai. <code>(long)(int)a</code> chal jaata.</li>
</ul>`
      }
    },
    {
      id: "boxed-struct-interface",
      src: `var counter = new Counter();
ICounter boxed = counter;     // boxing copies the struct
boxed.Increment();
boxed.Increment();
counter.Increment();

Console.WriteLine(counter.Value);
Console.WriteLine(boxed.Value);
Console.WriteLine(((Counter)boxed).Value);

interface ICounter
{
    int Value { get; }
    void Increment();
}

struct Counter : ICounter      // a mutable struct: exactly the kind to avoid
{
    public int Value { get; private set; }
    public void Increment() => Value++;
}`,
      answer: "1\n2\n2",
      explain: {
        en: `<ul>
<li>Assigning a struct to an interface variable <b>boxes</b> it: <code>boxed</code> is a separate copy on the heap.</li>
<li>Two calls through <code>boxed</code> change the <b>box</b> → its value is <b>2</b>.</li>
<li>One call on <code>counter</code> changes the original → <b>1</b>.</li>
<li>Unboxing <code>(Counter)boxed</code> copies the box's current value → <b>2</b>.</li>
</ul>
<p>Lesson: mutable structs + interfaces = surprising bugs. Keep structs <code>readonly</code>.</p>`,
        hi: `<ul>
<li>Struct को interface variable में assign करने पर वो <b>box</b> होता है: <code>boxed</code> heap पर एक अलग copy है।</li>
<li><code>boxed</code> से दो calls <b>box</b> को बदलती हैं → उसकी value <b>2</b>।</li>
<li><code>counter</code> पर एक call original को बदलती है → <b>1</b>।</li>
<li><code>(Counter)boxed</code> unboxing box की current value copy करती है → <b>2</b>।</li>
</ul>
<p>सीख: mutable structs + interfaces = चौंकाने वाले bugs। Structs को <code>readonly</code> रखो।</p>`,
        hg: `<ul>
<li>Struct ko interface variable mein assign karne par woh <b>box</b> hota hai: <code>boxed</code> heap par ek alag copy hai.</li>
<li><code>boxed</code> se do calls <b>box</b> ko badalti hain → uski value <b>2</b>.</li>
<li><code>counter</code> par ek call original ko badalti hai → <b>1</b>.</li>
<li><code>(Counter)boxed</code> unboxing box ki current value copy karti hai → <b>2</b>.</li>
</ul>
<p>Seekh: mutable structs + interfaces = chaunkane wale bugs. Structs ko <code>readonly</code> rakho.</p>`
      }
    },
    {
      id: "string-immutability-interning",
      src: `string a = "hello";
string b = a;
b += "!";
Console.WriteLine(a);

string city = "  Pune  ";
city.Trim();
Console.WriteLine($"[{city}]");

string lit = "ab";
string folded = "a" + "b";    // both constants: joined at compile time
string part = "a";
string built = part + "b";    // joined at runtime
Console.WriteLine(object.ReferenceEquals(lit, folded));
Console.WriteLine(object.ReferenceEquals(lit, built));
Console.WriteLine(lit == built);`,
      answer: "hello\n[  Pune  ]\nTrue\nFalse\nTrue",
      explain: {
        en: `<ul>
<li><code>b += "!"</code> creates a <b>new</b> string and points <code>b</code> to it; <code>a</code> still points to "hello".</li>
<li><code>city.Trim()</code> returns a new string that is thrown away; <code>city</code> is unchanged → <b>[  Pune  ]</b>.</li>
<li><code>"a" + "b"</code> is a constant expression, so the compiler emits the literal "ab" — the same interned object as <code>lit</code> → <b>True</b>.</li>
<li><code>part + "b"</code> is built at runtime → a new object → <b>False</b>, but the text is equal → <code>==</code> gives <b>True</b>.</li>
</ul>`,
        hi: `<ul>
<li><code>b += "!"</code> एक <b>नई</b> string बनाता है और <code>b</code> को उस पर point करता है; <code>a</code> अब भी "hello" पर point करता है।</li>
<li><code>city.Trim()</code> नई string return करता है जो फेंक दी जाती है; <code>city</code> नहीं बदलती → <b>[  Pune  ]</b>।</li>
<li><code>"a" + "b"</code> constant expression है, इसलिए compiler सीधे literal "ab" लिख देता है — <code>lit</code> वाला ही interned object → <b>True</b>।</li>
<li><code>part + "b"</code> runtime पर बनती है → नया object → <b>False</b>, पर text बराबर है → <code>==</code> से <b>True</b>।</li>
</ul>`,
        hg: `<ul>
<li><code>b += "!"</code> ek <b>nayi</b> string banata hai aur <code>b</code> ko us par point karta hai; <code>a</code> ab bhi "hello" par point karta hai.</li>
<li><code>city.Trim()</code> nayi string return karta hai jo phenk di jaati hai; <code>city</code> nahi badalti → <b>[  Pune  ]</b>.</li>
<li><code>"a" + "b"</code> constant expression hai, isliye compiler seedhe literal "ab" likh deta hai — <code>lit</code> wala hi interned object → <b>True</b>.</li>
<li><code>part + "b"</code> runtime par banti hai → naya object → <b>False</b>, par text barabar hai → <code>==</code> se <b>True</b>.</li>
</ul>`
      }
    },
    {
      id: "equals-vs-operator",
      src: `string s1 = "hi";
string s2 = new string("hi");   // a separate string object with the same text
object o1 = s1;
object o2 = s2;

Console.WriteLine(s1 == s2);
Console.WriteLine(o1 == o2);
Console.WriteLine(o1.Equals(o2));`,
      answer: "True\nFalse\nTrue",
      explain: {
        en: `<ul>
<li><code>s1 == s2</code>: both declared as <code>string</code> → the compiler picks <b>string's</b> <code>==</code> → compares text → <b>True</b>.</li>
<li><code>o1 == o2</code>: both declared as <code>object</code> → the compiler picks <b>object's</b> <code>==</code> → compares references; two different objects → <b>False</b>.</li>
<li><code>o1.Equals(o2)</code>: <code>Equals</code> is <b>virtual</b> → the runtime calls <code>string.Equals</code> → <b>True</b>.</li>
</ul>
<p>Interview line: "Operators are resolved at compile time from declared types; <code>Equals</code> is virtual and resolved at runtime."</p>`,
        hi: `<ul>
<li><code>s1 == s2</code>: दोनों <code>string</code> declared हैं → compiler <b>string का</b> <code>==</code> चुनता है → text compare → <b>True</b>।</li>
<li><code>o1 == o2</code>: दोनों <code>object</code> declared हैं → compiler <b>object का</b> <code>==</code> चुनता है → references compare; दो अलग objects → <b>False</b>।</li>
<li><code>o1.Equals(o2)</code>: <code>Equals</code> <b>virtual</b> है → runtime <code>string.Equals</code> call करता है → <b>True</b>।</li>
</ul>
<p>Interview line: "Operators compile time पर declared types से तय होते हैं; <code>Equals</code> virtual है और runtime पर तय होता है।"</p>`,
        hg: `<ul>
<li><code>s1 == s2</code>: dono <code>string</code> declared hain → compiler <b>string ka</b> <code>==</code> chunta hai → text compare → <b>True</b>.</li>
<li><code>o1 == o2</code>: dono <code>object</code> declared hain → compiler <b>object ka</b> <code>==</code> chunta hai → references compare; do alag objects → <b>False</b>.</li>
<li><code>o1.Equals(o2)</code>: <code>Equals</code> <b>virtual</b> hai → runtime <code>string.Equals</code> call karta hai → <b>True</b>.</li>
</ul>
<p>Interview line: "Operators compile time par declared types se tay hote hain; <code>Equals</code> virtual hai aur runtime par tay hota hai."</p>`
      }
    },
    {
      id: "closure-for-vs-foreach",
      src: `var actions = new List<Action>();
for (int i = 0; i < 3; i++)
    actions.Add(() => Console.Write(i));
foreach (var act in actions) act();
Console.WriteLine();

actions.Clear();
foreach (var n in new[] { 0, 1, 2 })
    actions.Add(() => Console.Write(n));
foreach (var act in actions) act();
Console.WriteLine();`,
      answer: "333\n012",
      explain: {
        en: `<ul>
<li>A lambda captures the <b>variable</b>, not its value.</li>
<li>The <code>for</code> loop has <b>one</b> <code>i</code> for all iterations. When the lambdas run, the loop has finished and <code>i</code> is 3 → <b>333</b>.</li>
<li>Since C# 5, <code>foreach</code> creates a <b>new</b> <code>n</code> for each iteration, so each lambda has its own → <b>012</b>.</li>
</ul>
<p>Fix for <code>for</code>: <code>int copy = i;</code> inside the loop and capture <code>copy</code>.</p>`,
        hi: `<ul>
<li>Lambda <b>variable</b> capture करता है, उसकी value नहीं।</li>
<li><code>for</code> loop में सारे iterations के लिए <b>एक ही</b> <code>i</code> है। जब lambdas चलते हैं, loop ख़त्म हो चुका है और <code>i</code> 3 है → <b>333</b>।</li>
<li>C# 5 से <code>foreach</code> हर iteration में <b>नया</b> <code>n</code> बनाता है, इसलिए हर lambda का अपना है → <b>012</b>।</li>
</ul>
<p><code>for</code> का fix: loop के अंदर <code>int copy = i;</code> और <code>copy</code> capture करो।</p>`,
        hg: `<ul>
<li>Lambda <b>variable</b> capture karta hai, uski value nahi.</li>
<li><code>for</code> loop mein saare iterations ke liye <b>ek hi</b> <code>i</code> hai. Jab lambdas chalte hain, loop khatam ho chuka hai aur <code>i</code> 3 hai → <b>333</b>.</li>
<li>C# 5 se <code>foreach</code> har iteration mein <b>naya</b> <code>n</code> banata hai, isliye har lambda ka apna hai → <b>012</b>.</li>
</ul>
<p><code>for</code> ka fix: loop ke andar <code>int copy = i;</code> aur <code>copy</code> capture karo.</p>`
      }
    },
    {
      id: "multicast-delegate",
      src: `Func<int> getNumber = () => 1;
getNumber += () => 2;
getNumber += () => 3;
Console.WriteLine(getNumber());
Console.WriteLine(getNumber.GetInvocationList().Length);

Action greet = () => Console.Write("A");
Action sayB = () => Console.Write("B");
greet += sayB;
greet += sayB;
greet -= sayB;
greet();
Console.WriteLine();`,
      answer: "3\n3\nAB",
      explain: {
        en: `<ul>
<li>A multicast <code>Func</code> runs <b>all three</b> lambdas, but only the <b>last</b> return value comes back → <b>3</b>.</li>
<li>The invocation list still has three methods → <b>3</b>.</li>
<li><code>greet</code> = A, B, B. <code>-= sayB</code> removes <b>one</b> occurrence (the last one) → A, B → <b>AB</b>.</li>
</ul>
<p>That is why events use <code>void</code> handlers — return values from many subscribers would be lost.</p>`,
        hi: `<ul>
<li>Multicast <code>Func</code> <b>तीनों</b> lambdas चलाता है, पर वापस सिर्फ़ <b>आख़िरी</b> return value आती है → <b>3</b>।</li>
<li>Invocation list में अब भी तीन methods हैं → <b>3</b>।</li>
<li><code>greet</code> = A, B, B। <code>-= sayB</code> <b>एक</b> occurrence (आख़िरी वाली) हटाता है → A, B → <b>AB</b>।</li>
</ul>
<p>इसीलिए events <code>void</code> handlers use करते हैं — कई subscribers की return values खो जातीं।</p>`,
        hg: `<ul>
<li>Multicast <code>Func</code> <b>teeno</b> lambdas chalata hai, par wapas sirf <b>aakhri</b> return value aati hai → <b>3</b>.</li>
<li>Invocation list mein ab bhi teen methods hain → <b>3</b>.</li>
<li><code>greet</code> = A, B, B. <code>-= sayB</code> <b>ek</b> occurrence (aakhri wali) hatata hai → A, B → <b>AB</b>.</li>
</ul>
<p>Isiliye events <code>void</code> handlers use karte hain — kai subscribers ki return values kho jaatin.</p>`
      }
    },
    {
      id: "generic-static-per-type",
      src: `Counter<int>.Hit();
Counter<int>.Hit();
Counter<string>.Hit();

Console.WriteLine(Counter<int>.Count);
Console.WriteLine(Counter<string>.Count);
Console.WriteLine(Counter<long>.Count);
Console.WriteLine(typeof(List<int>) == typeof(List<string>));

static class Counter<T>
{
    public static int Count;
    public static void Hit() => Count++;
}`,
      answer: "2\n1\n0\nFalse",
      explain: {
        en: `<ul>
<li>Each <b>closed</b> generic type (<code>Counter&lt;int&gt;</code>, <code>Counter&lt;string&gt;</code>, ...) is a separate type at runtime with its <b>own static fields</b>.</li>
<li><code>Counter&lt;int&gt;</code> was hit twice → <b>2</b>; <code>Counter&lt;string&gt;</code> once → <b>1</b>; <code>Counter&lt;long&gt;</code> never → <b>0</b>.</li>
<li>Generics are reified in .NET, so <code>List&lt;int&gt;</code> and <code>List&lt;string&gt;</code> are different types → <b>False</b>.</li>
</ul>
<p>Real use: a per-type cache such as <code>static class Cache&lt;T&gt;</code> — but remember it is one cache <b>per T</b>.</p>`,
        hi: `<ul>
<li>हर <b>closed</b> generic type (<code>Counter&lt;int&gt;</code>, <code>Counter&lt;string&gt;</code>, ...) runtime पर अलग type है और उसके <b>अपने static fields</b> हैं।</li>
<li><code>Counter&lt;int&gt;</code> दो बार hit हुआ → <b>2</b>; <code>Counter&lt;string&gt;</code> एक बार → <b>1</b>; <code>Counter&lt;long&gt;</code> कभी नहीं → <b>0</b>।</li>
<li>.NET में generics reified हैं, इसलिए <code>List&lt;int&gt;</code> और <code>List&lt;string&gt;</code> अलग types हैं → <b>False</b>।</li>
</ul>
<p>Real use: per-type cache जैसे <code>static class Cache&lt;T&gt;</code> — पर याद रखो, यह <b>हर T का</b> अलग cache है।</p>`,
        hg: `<ul>
<li>Har <b>closed</b> generic type (<code>Counter&lt;int&gt;</code>, <code>Counter&lt;string&gt;</code>, ...) runtime par alag type hai aur uske <b>apne static fields</b> hain.</li>
<li><code>Counter&lt;int&gt;</code> do baar hit hua → <b>2</b>; <code>Counter&lt;string&gt;</code> ek baar → <b>1</b>; <code>Counter&lt;long&gt;</code> kabhi nahi → <b>0</b>.</li>
<li>.NET mein generics reified hain, isliye <code>List&lt;int&gt;</code> aur <code>List&lt;string&gt;</code> alag types hain → <b>False</b>.</li>
</ul>
<p>Real use: per-type cache jaise <code>static class Cache&lt;T&gt;</code> — par yaad rakho, yeh <b>har T ka</b> alag cache hai.</p>`
      }
    },
    {
      id: "extension-static-binding",
      src: `var printer = new Printer();
printer.Print("hi");

string? name = null;
Console.WriteLine(name.OrDefault("guest"));

Animal pet = new Dog();
Console.WriteLine(pet.Describe());
Console.WriteLine(new Dog().Describe());

class Printer
{
    public void Print(string s) => Console.WriteLine($"instance: {s}");
}

class Animal { }
class Dog : Animal { }

static class Extensions
{
    public static void Print(this Printer p, string s) => Console.WriteLine($"extension: {s}");
    public static string OrDefault(this string? s, string fallback) => s ?? fallback;
    public static string Describe(this Animal a) => "animal";
    public static string Describe(this Dog d) => "dog";
}`,
      answer: "instance: hi\nguest\nanimal\ndog",
      explain: {
        en: `<ul>
<li><code>Printer</code> has its own <code>Print(string)</code> → the <b>instance method wins</b>; the extension is never considered → <b>instance: hi</b>.</li>
<li>An extension method is a static call, so calling it on <code>null</code> is fine → <b>guest</b>.</li>
<li><code>pet</code> is <b>declared</b> as <code>Animal</code>. Extension methods are chosen at compile time from the declared type → <b>animal</b> (no virtual dispatch).</li>
<li><code>new Dog()</code> has static type <code>Dog</code> → the more specific extension → <b>dog</b>.</li>
</ul>`,
        hi: `<ul>
<li><code>Printer</code> का अपना <code>Print(string)</code> है → <b>instance method जीतता है</b>; extension पर विचार ही नहीं होता → <b>instance: hi</b>।</li>
<li>Extension method एक static call है, इसलिए <code>null</code> पर call करना ठीक है → <b>guest</b>।</li>
<li><code>pet</code> का <b>declared</b> type <code>Animal</code> है। Extension methods compile time पर declared type से चुने जाते हैं → <b>animal</b> (कोई virtual dispatch नहीं)।</li>
<li><code>new Dog()</code> का static type <code>Dog</code> है → ज़्यादा specific extension → <b>dog</b>।</li>
</ul>`,
        hg: `<ul>
<li><code>Printer</code> ka apna <code>Print(string)</code> hai → <b>instance method jeetta hai</b>; extension par vichaar hi nahi hota → <b>instance: hi</b>.</li>
<li>Extension method ek static call hai, isliye <code>null</code> par call karna theek hai → <b>guest</b>.</li>
<li><code>pet</code> ka <b>declared</b> type <code>Animal</code> hai. Extension methods compile time par declared type se chune jaate hain → <b>animal</b> (koi virtual dispatch nahi).</li>
<li><code>new Dog()</code> ka static type <code>Dog</code> hai → zyada specific extension → <b>dog</b>.</li>
</ul>`
      }
    }
  ],
  revision: {
    en: [
      "<b>Value type</b> copies the data; <b>reference type</b> copies the reference — two variables, one object.",
      "A value type lives <b>where its container lives</b>: local → stack, field → inside the heap object, boxed or captured → heap. Class objects → heap, cleaned by the GC.",
      "<b>Boxing</b> = value type → <code>object</code>/interface (a heap copy); <b>unboxing</b> = cast back to the <b>exact</b> type. Avoid it in hot paths with generics.",
      "<b>string</b> is an immutable reference type; <code>==</code> compares text. Every \"change\" returns a new string.",
      "<b>StringBuilder</b> for loops and unknown counts; <code>+</code> or <code>$\"...\"</code> for a few pieces; <code>string.Join</code> for a collection.",
      "String <b>literals are interned</b>, runtime strings are not. Compare with <code>==</code> or <code>StringComparison.Ordinal(IgnoreCase)</code>, never by reference.",
      "<b>const</b> = compile-time, copied into callers; <b>readonly</b> = set in the constructor; <b>static readonly</b> = runtime, one per type. <code>readonly</code> is shallow.",
      "<b>Generics</b> = type safety + no boxing + reuse. Constraints (<code>class</code>, <code>struct</code>, <code>new()</code>, interface) unlock members on <code>T</code>. Static fields are per closed type.",
      "<b>Covariance</b> <code>out T</code> (<code>IEnumerable&lt;string&gt;</code> as <code>IEnumerable&lt;object&gt;</code>), <b>contravariance</b> <code>in T</code> (<code>Action&lt;object&gt;</code> as <code>Action&lt;string&gt;</code>) — interfaces/delegates, reference types only.",
      "Pick collections by operation: <b>List</b> (by index), <b>Dictionary</b> (by key, O(1) average), <b>HashSet</b> (unique), <b>Queue/Stack</b> (order). Read-only view ≠ immutable; <b>Frozen</b> for read-heavy lookups; <b>Concurrent</b> for multi-thread writes.",
      "<b>Delegate</b> = type-safe method reference (<code>Func</code> returns, <code>Action</code> void, <code>Predicate</code> bool). <b>Event</b> = delegate where outsiders can only <code>+=</code>/<code>-=</code>. Unsubscribe to avoid leaks.",
      "Lambdas capture <b>variables</b> (closures): a <code>for</code> loop shares one variable, <code>foreach</code> makes a new one. <b>Extension methods</b> = static calls bound at compile time; instance methods win."
    ],
    meaning: {
      hi: [
        "Value type data copy करता है; reference type reference copy करता है — दो variables, एक object।",
        "Value type वहीं रहता है जहाँ उसका container है: local → stack, field → heap object के अंदर, boxed या captured → heap। Class objects → heap, जिन्हें GC साफ़ करता है।",
        "Boxing = value type → object/interface (heap पर copy); unboxing = वापस exact type में cast। Hot paths में generics से इससे बचो।",
        "string एक immutable reference type है; == text compare करता है। हर \"बदलाव\" नई string return करता है।",
        "Loops और अनजान count के लिए StringBuilder; कुछ हिस्सों के लिए + या $\"...\"; collection के लिए string.Join।",
        "String literals intern होते हैं, runtime strings नहीं। == या StringComparison.Ordinal(IgnoreCase) से compare करो, reference से कभी नहीं।",
        "const = compile-time, callers में copy होता है; readonly = constructor में set; static readonly = runtime, हर type का एक। readonly shallow है।",
        "Generics = type safety + boxing नहीं + reuse। Constraints (class, struct, new(), interface) से T पर members use कर सकते हो। Static fields हर closed type के अलग हैं।",
        "Covariance out T (IEnumerable&lt;string&gt; को IEnumerable&lt;object&gt; की तरह), contravariance in T (Action&lt;object&gt; को Action&lt;string&gt; की तरह) — सिर्फ़ interfaces/delegates और reference types।",
        "Operation देखकर collection चुनो: List (index से), Dictionary (key से, average O(1)), HashSet (unique), Queue/Stack (order)। Read-only view ≠ immutable; ज़्यादा पढ़े जाने वाले lookups के लिए Frozen; कई threads के writes के लिए Concurrent।",
        "Delegate = method का type-safe reference (Func value देता है, Action void, Predicate bool)। Event = ऐसा delegate जिस पर बाहर वाले सिर्फ़ +=/-= कर सकते हैं। Leaks से बचने के लिए unsubscribe करो।",
        "Lambdas variables capture करते हैं (closures): for loop एक ही variable share करता है, foreach हर बार नया बनाता है। Extension methods = compile time पर bind होने वाले static calls; instance methods जीतते हैं।"
      ],
      hg: [
        "Value type data copy karta hai; reference type reference copy karta hai — do variables, ek object.",
        "Value type wahin rehta hai jahan uska container hai: local → stack, field → heap object ke andar, boxed ya captured → heap. Class objects → heap, jinhe GC saaf karta hai.",
        "Boxing = value type → object/interface (heap par copy); unboxing = wapas exact type mein cast. Hot paths mein generics se isse bacho.",
        "string ek immutable reference type hai; == text compare karta hai. Har \"badlaav\" nayi string return karta hai.",
        "Loops aur anjaan count ke liye StringBuilder; kuch hisson ke liye + ya $\"...\"; collection ke liye string.Join.",
        "String literals intern hote hain, runtime strings nahi. == ya StringComparison.Ordinal(IgnoreCase) se compare karo, reference se kabhi nahi.",
        "const = compile-time, callers mein copy hota hai; readonly = constructor mein set; static readonly = runtime, har type ka ek. readonly shallow hai.",
        "Generics = type safety + boxing nahi + reuse. Constraints (class, struct, new(), interface) se T par members use kar sakte ho. Static fields har closed type ke alag hain.",
        "Covariance out T (IEnumerable&lt;string&gt; ko IEnumerable&lt;object&gt; ki tarah), contravariance in T (Action&lt;object&gt; ko Action&lt;string&gt; ki tarah) — sirf interfaces/delegates aur reference types.",
        "Operation dekhkar collection chuno: List (index se), Dictionary (key se, average O(1)), HashSet (unique), Queue/Stack (order). Read-only view ≠ immutable; zyada padhe jaane wale lookups ke liye Frozen; kai threads ke writes ke liye Concurrent.",
        "Delegate = method ka type-safe reference (Func value deta hai, Action void, Predicate bool). Event = aisa delegate jis par bahar wale sirf +=/-= kar sakte hain. Leaks se bachne ke liye unsubscribe karo.",
        "Lambdas variables capture karte hain (closures): for loop ek hi variable share karta hai, foreach har baar naya banata hai. Extension methods = compile time par bind hone wale static calls; instance methods jeette hain."
      ]
    }
  },
  whatsNew: {
    en: `<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025). Recent features related to today's topics — each tagged with its version:</p>
<ul>
<li><b>C# 13</b> (.NET 9) — <b>params collections</b>: <code>params</code> now works with <code>Span&lt;T&gt;</code>, <code>ReadOnlySpan&lt;T&gt;</code>, <code>List&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> and more, not only arrays (see the collections section).</li>
<li><b>C# 13</b> — the new <code>System.Threading.Lock</code> type: <code>lock (gate)</code> on a <code>Lock</code> object uses its dedicated, more efficient API instead of <code>Monitor</code>.</li>
<li><b>C# 13</b> — <code>\\e</code> escape sequence for the ESC character (terminal colours), instead of <code>\\u001b</code>.</li>
<li><b>C# 13</b> — <code>allows ref struct</code> in generic constraints, and <code>ref struct</code> types can implement interfaces.</li>
<li><b>C# 14</b> (.NET 10) — <b>extension members</b>: <code>extension(...)</code> blocks add extension <b>properties</b> and <b>static</b> extension members (see the extension methods section).</li>
<li><b>C# 14</b> — the <code>field</code> keyword: use the compiler-generated backing field inside an accessor, e.g. <code>public string Name { get; set =&gt; field = value.Trim(); }</code>.</li>
<li><b>C# 14</b> — null-conditional assignment: <code>customer?.Address = newAddress;</code> assigns only when <code>customer</code> is not null.</li>
<li><b>C# 14</b> — <code>nameof</code> with unbound generic types: <code>nameof(List&lt;&gt;)</code> gives <code>"List"</code>.</li>
<li><b>C# 14</b> — lambda parameters with modifiers but no types: <code>(text, out result) =&gt; ...</code>.</li>
<li><b>C# 14</b> — implicit conversions from arrays to <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> ("first-class spans").</li>
</ul>
<p>The code checker for this tutorial uses the .NET 9 SDK (C# 13), so C# 14 snippets are marked as not compiled.</p>`,
    hi: `<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025)। आज के topics से जुड़े नए features — हर एक पर उसका version लिखा है:</p>
<ul>
<li><b>C# 13</b> (.NET 9) — <b>params collections</b>: <code>params</code> अब सिर्फ़ arrays नहीं, <code>Span&lt;T&gt;</code>, <code>ReadOnlySpan&lt;T&gt;</code>, <code>List&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> वगैरह के साथ भी चलता है (collections section देखो)।</li>
<li><b>C# 13</b> — नया <code>System.Threading.Lock</code> type: <code>Lock</code> object पर <code>lock (gate)</code> <code>Monitor</code> की जगह उसका अपना, ज़्यादा efficient API use करता है।</li>
<li><b>C# 13</b> — ESC character (terminal colours) के लिए <code>\\u001b</code> की जगह <code>\\e</code> escape sequence।</li>
<li><b>C# 13</b> — generic constraints में <code>allows ref struct</code>, और <code>ref struct</code> types अब interfaces implement कर सकते हैं।</li>
<li><b>C# 14</b> (.NET 10) — <b>extension members</b>: <code>extension(...)</code> blocks से extension <b>properties</b> और <b>static</b> extension members (extension methods section देखो)।</li>
<li><b>C# 14</b> — <code>field</code> keyword: accessor के अंदर compiler का बनाया backing field use करो, जैसे <code>public string Name { get; set =&gt; field = value.Trim(); }</code>।</li>
<li><b>C# 14</b> — null-conditional assignment: <code>customer?.Address = newAddress;</code> तभी assign करता है जब <code>customer</code> null न हो।</li>
<li><b>C# 14</b> — unbound generic types के साथ <code>nameof</code>: <code>nameof(List&lt;&gt;)</code> से <code>"List"</code> मिलता है।</li>
<li><b>C# 14</b> — lambda parameters पर modifiers, बिना types लिखे: <code>(text, out result) =&gt; ...</code>।</li>
<li><b>C# 14</b> — arrays से <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> में implicit conversions ("first-class spans")।</li>
</ul>
<p>इस tutorial का code checker .NET 9 SDK (C# 13) use करता है, इसलिए C# 14 snippets "compile नहीं हुए" mark किए गए हैं।</p>`,
    hg: `<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025). Aaj ke topics se jude naye features — har ek par uska version likha hai:</p>
<ul>
<li><b>C# 13</b> (.NET 9) — <b>params collections</b>: <code>params</code> ab sirf arrays nahi, <code>Span&lt;T&gt;</code>, <code>ReadOnlySpan&lt;T&gt;</code>, <code>List&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> waghera ke saath bhi chalta hai (collections section dekho).</li>
<li><b>C# 13</b> — naya <code>System.Threading.Lock</code> type: <code>Lock</code> object par <code>lock (gate)</code> <code>Monitor</code> ki jagah uska apna, zyada efficient API use karta hai.</li>
<li><b>C# 13</b> — ESC character (terminal colours) ke liye <code>\\u001b</code> ki jagah <code>\\e</code> escape sequence.</li>
<li><b>C# 13</b> — generic constraints mein <code>allows ref struct</code>, aur <code>ref struct</code> types ab interfaces implement kar sakte hain.</li>
<li><b>C# 14</b> (.NET 10) — <b>extension members</b>: <code>extension(...)</code> blocks se extension <b>properties</b> aur <b>static</b> extension members (extension methods section dekho).</li>
<li><b>C# 14</b> — <code>field</code> keyword: accessor ke andar compiler ka banaya backing field use karo, jaise <code>public string Name { get; set =&gt; field = value.Trim(); }</code>.</li>
<li><b>C# 14</b> — null-conditional assignment: <code>customer?.Address = newAddress;</code> tabhi assign karta hai jab <code>customer</code> null na ho.</li>
<li><b>C# 14</b> — unbound generic types ke saath <code>nameof</code>: <code>nameof(List&lt;&gt;)</code> se <code>"List"</code> milta hai.</li>
<li><b>C# 14</b> — lambda parameters par modifiers, bina types likhe: <code>(text, out result) =&gt; ...</code>.</li>
<li><b>C# 14</b> — arrays se <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> mein implicit conversions ("first-class spans").</li>
</ul>
<p>Is tutorial ka code checker .NET 9 SDK (C# 13) use karta hai, isliye C# 14 snippets "compile nahi hue" mark kiye gaye hain.</p>`
  }
};
