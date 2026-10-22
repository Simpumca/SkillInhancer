// Day 9 — Creational Design Patterns. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 9,
  title: {
    en: "Creational Patterns",
    hi: "Creational Patterns (object बनाने वाले patterns)",
    hg: "Creational Patterns (object banane wale patterns)"
  },
  summary: {
    en: `<p>Creational patterns answer one question: <b>who creates an object, and how?</b> This is the "design patterns" topic that feels scary, so here is the good news: in modern .NET the dependency injection (DI) container already does most of this job. You need to know the classic names, the C# code, and — as a Tech Lead — <i>when the container replaces the pattern</i>.</p>
<ul>
<li><b>Singleton</b>: exactly one instance. In C# the safe options are a <code>static readonly</code> field or <code>Lazy&lt;T&gt;</code>; in an ASP.NET Core app the usual answer is <code>AddSingleton</code>.</li>
<li><b>Factory Method</b>: a method (or subclass) decides which concrete type to create; the caller only sees an interface.</li>
<li><b>Abstract Factory</b>: a factory that creates a <i>family</i> of related objects that must match (e.g. SQL Server connection + command, or Light-theme button + checkbox).</li>
<li><b>Builder</b>: build a complex object step by step (fluent chain), then call <code>Build()</code>. Seen in <code>WebApplication.CreateBuilder</code>, <code>StringBuilder</code>, <code>UriBuilder</code>.</li>
<li><b>Prototype</b>: create an object by copying an existing one. In C# this is mostly a record <code>with</code> expression.</li>
<li><b>Simple Factory</b> (a static method with a <code>switch</code>) is <i>not</i> a GoF pattern — a classic trick question.</li>
<li><b>TL angle</b>: DI plus <code>Func&lt;T&gt;</code> and .NET 8 keyed services replace most hand-written singletons and factories. Write one only when it adds value, and be ready to say why.</li>
</ul>
<p>One line for the day: <b>creational patterns hide <code>new</code> behind a name — and DI is the modern place where that hiding happens.</b></p>`,
    hi: `<p>Creational patterns एक सवाल का जवाब देते हैं: <b>object कौन बनाएगा, और कैसे?</b> यही "design patterns" वाला topic है जो डरावना लगता है, पर अच्छी खबर यह है: modern .NET में dependency injection (DI) container यह काम पहले से ज़्यादातर कर देता है। आपको classic नाम, C# code और — Tech Lead के तौर पर — यह पता होना चाहिए कि <i>container कब pattern की जगह ले लेता है</i>।</p>
<ul>
<li><b>Singleton</b>: बिल्कुल एक instance। C# में safe तरीके हैं <code>static readonly</code> field या <code>Lazy&lt;T&gt;</code>; ASP.NET Core app में आम जवाब <code>AddSingleton</code> है।</li>
<li><b>Factory Method</b>: एक method (या subclass) तय करता है कि कौन-सा concrete type बनेगा; caller को सिर्फ़ interface दिखता है।</li>
<li><b>Abstract Factory</b>: ऐसी factory जो आपस में मेल खाने वाले objects का <i>family</i> बनाती है (जैसे SQL Server की connection + command, या Light-theme का button + checkbox)।</li>
<li><b>Builder</b>: complex object को step by step (fluent chain से) बनाओ, फिर <code>Build()</code> बुलाओ। <code>WebApplication.CreateBuilder</code>, <code>StringBuilder</code>, <code>UriBuilder</code> में दिखता है।</li>
<li><b>Prototype</b>: मौजूदा object की copy से नया object बनाना। C# में यह ज़्यादातर record की <code>with</code> expression है।</li>
<li><b>Simple Factory</b> (<code>switch</code> वाला static method) GoF pattern <i>नहीं</i> है — एक classic trick question।</li>
<li><b>TL angle</b>: DI के साथ <code>Func&lt;T&gt;</code> और .NET 8 keyed services ज़्यादातर hand-written singletons और factories की जगह ले लेते हैं। हाथ से तभी लिखो जब value मिले, और वजह बता सको।</li>
</ul>
<p>दिन की एक line: <b>creational patterns <code>new</code> को एक नाम के पीछे छुपाते हैं — और आज के दौर में यह छुपाना DI में होता है।</b></p>`,
    hg: `<p>Creational patterns ek sawaal ka jawab dete hain: <b>object kaun banayega, aur kaise?</b> Yehi "design patterns" wala topic hai jo darawna lagta hai, par achhi khabar yeh hai: modern .NET mein dependency injection (DI) container yeh kaam pehle se zyadatar kar deta hai. Aapko classic naam, C# code aur — Tech Lead ke taur par — yeh pata hona chahiye ki <i>container kab pattern ki jagah le leta hai</i>.</p>
<ul>
<li><b>Singleton</b>: bilkul ek instance. C# mein safe tareeke hain <code>static readonly</code> field ya <code>Lazy&lt;T&gt;</code>; ASP.NET Core app mein aam jawab <code>AddSingleton</code> hai.</li>
<li><b>Factory Method</b>: ek method (ya subclass) tay karta hai ki kaun-sa concrete type banega; caller ko sirf interface dikhta hai.</li>
<li><b>Abstract Factory</b>: aisi factory jo aapas mein match karne wale objects ka <i>family</i> banati hai (jaise SQL Server ki connection + command, ya Light-theme ka button + checkbox).</li>
<li><b>Builder</b>: complex object ko step by step (fluent chain se) banao, phir <code>Build()</code> bulao. <code>WebApplication.CreateBuilder</code>, <code>StringBuilder</code>, <code>UriBuilder</code> mein dikhta hai.</li>
<li><b>Prototype</b>: maujood object ki copy se naya object banana. C# mein yeh zyadatar record ki <code>with</code> expression hai.</li>
<li><b>Simple Factory</b> (<code>switch</code> wala static method) GoF pattern <i>nahi</i> hai — ek classic trick question.</li>
<li><b>TL angle</b>: DI ke saath <code>Func&lt;T&gt;</code> aur .NET 8 keyed services zyadatar hand-written singletons aur factories ki jagah le lete hain. Haath se tabhi likho jab value mile, aur wajah bata sako.</li>
</ul>
<p>Din ki ek line: <b>creational patterns <code>new</code> ko ek naam ke peeche chhupate hain — aur aaj ke daur mein yeh chhupana DI mein hota hai.</b></p>`
  },
  sections: [
    {
      id: "creational-overview",
      depth: "short",
      title: {
        en: "Creational patterns in one picture",
        hi: "Creational patterns एक नज़र में",
        hg: "Creational patterns ek nazar mein"
      },
      body: {
        en: `<p><b>Analogy — a tiffin service:</b> you do not cook, you say "one veg thali". The kitchen (a <b>factory</b>) decides the recipe. The <b>singleton</b> is the one head office everybody calls. The <b>builder</b> is the thali order sheet — roti, dal, sabzi, add sweet, add extra rice — filled step by step, then "confirm". The <b>prototype</b> is "send me the same thali as yesterday". The <b>abstract factory</b> is a cloud kitchen that always sends a matching set (plates + spoons + napkins).</p>
<ul>
<li><b>Problem they solve:</b> <code>new ConcreteClass()</code> spread everywhere glues your code to that class (Day 8: the DIP problem). Creational patterns put creation behind a name so it can change in one place.</li>
<li><b>Singleton</b> — one instance, global access point.</li>
<li><b>Factory Method</b> — one product, the creator decides the concrete type.</li>
<li><b>Abstract Factory</b> — a family of matching products.</li>
<li><b>Builder</b> — a complex object assembled in steps.</li>
<li><b>Prototype</b> — clone an existing object.</li>
<li><b>Simple Factory</b> — just a method with a <code>switch</code>; useful, but not a GoF pattern.</li>
<li><b>TL angle:</b> before writing any of these ask "can the DI container do this?" (Day 11 goes deeper into DI). Often yes.</li>
</ul>
<p><b>When to use / when not:</b> use a creational pattern when creation is complex, varies by condition, or must be swapped in tests. Do not add a factory for a plain class with a simple constructor — <code>new</code> is fine for small value-like objects such as <code>new Uri(...)</code> or a DTO.</p>`,
        hi: `<p><b>Analogy — tiffin service:</b> आप खाना नहीं बनाते, बस कहते हो "एक veg thali"। Kitchen (<b>factory</b>) तय करती है कि recipe क्या होगी। <b>Singleton</b> वह एक head office है जिसे सब call करते हैं। <b>Builder</b> thali का order sheet है — roti, dal, sabzi, मीठा जोड़ो, extra rice जोड़ो — step by step भरो, फिर "confirm"। <b>Prototype</b> है "कल वाली थाली जैसी ही भेज दो"। <b>Abstract factory</b> एक cloud kitchen है जो हमेशा मेल खाता पूरा set भेजती है (plates + spoons + napkins)।</p>
<ul>
<li><b>कौन-सी problem solve होती है:</b> हर जगह फैला <code>new ConcreteClass()</code> आपके code को उसी class से चिपका देता है (Day 8: DIP वाली problem)। Creational patterns creation को एक नाम के पीछे रखते हैं ताकि वह एक ही जगह बदल सके।</li>
<li><b>Singleton</b> — एक instance, global access point।</li>
<li><b>Factory Method</b> — एक product, creator तय करता है कि concrete type क्या होगा।</li>
<li><b>Abstract Factory</b> — मेल खाने वाले products का family।</li>
<li><b>Builder</b> — steps में जोड़कर बना complex object।</li>
<li><b>Prototype</b> — मौजूदा object का clone।</li>
<li><b>Simple Factory</b> — बस <code>switch</code> वाला method; काम का है, पर GoF pattern नहीं।</li>
<li><b>TL angle:</b> इनमें से कुछ भी लिखने से पहले पूछो "क्या DI container यह कर सकता है?" (Day 11 में DI और गहराई से)। अक्सर हाँ।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> creation complex हो, condition से बदलती हो, या tests में बदलनी हो तब creational pattern लगाओ। सीधे constructor वाली simple class के लिए factory मत जोड़ो — <code>new Uri(...)</code> या DTO जैसे छोटे value-जैसे objects के लिए <code>new</code> ठीक है।</p>`,
        hg: `<p><b>Analogy — tiffin service:</b> aap khana nahi banate, bas kehte ho "ek veg thali". Kitchen (<b>factory</b>) tay karti hai ki recipe kya hogi. <b>Singleton</b> woh ek head office hai jise sab call karte hain. <b>Builder</b> thali ka order sheet hai — roti, dal, sabzi, meetha jodo, extra rice jodo — step by step bharo, phir "confirm". <b>Prototype</b> hai "kal wali thali jaisi hi bhej do". <b>Abstract factory</b> ek cloud kitchen hai jo hamesha match karta poora set bhejti hai (plates + spoons + napkins).</p>
<ul>
<li><b>Kaun-si problem solve hoti hai:</b> har jagah faila <code>new ConcreteClass()</code> aapke code ko usi class se chipka deta hai (Day 8: DIP wali problem). Creational patterns creation ko ek naam ke peeche rakhte hain taaki woh ek hi jagah badal sake.</li>
<li><b>Singleton</b> — ek instance, global access point.</li>
<li><b>Factory Method</b> — ek product, creator tay karta hai ki concrete type kya hoga.</li>
<li><b>Abstract Factory</b> — match karne wale products ka family.</li>
<li><b>Builder</b> — steps mein jodkar bana complex object.</li>
<li><b>Prototype</b> — maujood object ka clone.</li>
<li><b>Simple Factory</b> — bas <code>switch</code> wala method; kaam ka hai, par GoF pattern nahi.</li>
<li><b>TL angle:</b> inmein se kuch bhi likhne se pehle poochho "kya DI container yeh kar sakta hai?" (Day 11 mein DI aur gehraai se). Aksar haan.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> creation complex ho, condition se badalti ho, ya tests mein badalni ho tab creational pattern lagao. Seedhe constructor wali simple class ke liye factory mat jodo — <code>new Uri(...)</code> ya DTO jaise chhote value-jaise objects ke liye <code>new</code> theek hai.</p>`
      }
    },
    {
      id: "singleton-modern",
      depth: "short",
      title: {
        en: "Singleton today: the options and the recommendation",
        hi: "आज का Singleton: options और recommendation",
        hg: "Aaj ka Singleton: options aur recommendation"
      },
      body: {
        en: `<p><b>Analogy — the school principal's office:</b> there is exactly one, everyone knows where it is, and if ten students knock at the same time they must not create ten principals. That is the thread-safety question.</p>
<ul>
<li><b>Definition:</b> one instance for the whole app, reachable from one global point.</li>
<li><b>Ways to get it in C#, from naive to recommended:</b> naive <code>if (_i == null)</code> (not thread-safe), <code>lock</code> on every call (safe, slow-ish), double-checked locking (fast, easy to get wrong), <code>static readonly</code> or <code>Lazy&lt;T&gt;</code> (simplest correct hand-written choice), and DI <code>AddSingleton</code> in apps (recommended).</li>
<li><b>Modern recommendation:</b> in ASP.NET Core do not write the pattern; register it with <code>services.AddSingleton&lt;IPriceCache, PriceCache&gt;()</code> (or <code>TimeProvider.System</code>). Same single instance, but the lifetime is owned by the container and the class stays testable.</li>
<li><b>Why it is controversial:</b> a hand-written <code>Instance</code> property is hidden global state; callers hide their dependency, tests share state, and shared mutable state needs locks.</li>
</ul>
<p><b>When to use / when not:</b> use one instance for things that are expensive or must be shared — cache, configuration snapshot, connection factory, <code>HttpClient</code> handler. Do not use it for state that belongs to one request or one user, and do not hand-write it when DI is available.</p>`,
        hi: `<p><b>Analogy — school principal का office:</b> ठीक एक होता है, सबको पता है कहाँ है, और अगर दस students एक साथ knock करें तो दस principals नहीं बनने चाहिए। यही thread-safety का सवाल है।</p>
<ul>
<li><b>Definition:</b> पूरे app के लिए एक instance, एक global point से मिलता है।</li>
<li><b>C# में पाने के तरीके, naive से recommended तक:</b> naive <code>if (_i == null)</code> (thread-safe नहीं), हर call पर <code>lock</code> (safe, थोड़ा slow), double-checked locking (तेज़, पर गलती आसान), <code>static readonly</code> या <code>Lazy&lt;T&gt;</code> (हाथ से लिखने का सबसे आसान सही तरीका), और apps में DI <code>AddSingleton</code> (recommended)।</li>
<li><b>Modern recommendation:</b> ASP.NET Core में pattern खुद मत लिखो; <code>services.AddSingleton&lt;IPriceCache, PriceCache&gt;()</code> (या <code>TimeProvider.System</code>) से register करो। Instance वही एक, पर lifetime container के पास और class testable।</li>
<li><b>Controversial क्यों:</b> हाथ से लिखी <code>Instance</code> property छुपा हुआ global state है; callers अपनी dependency छुपाते हैं, tests state share करते हैं, और shared mutable state को locks चाहिए।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> जो चीज़ें महँगी हैं या share होनी चाहिए उनके लिए एक instance लो — cache, configuration snapshot, connection factory, <code>HttpClient</code> handler। एक request या एक user के state के लिए मत लो, और DI मौजूद हो तो हाथ से मत लिखो।</p>`,
        hg: `<p><b>Analogy — school principal ka office:</b> theek ek hota hai, sabko pata hai kahaan hai, aur agar das students ek saath knock karein to das principals nahi banne chahiye. Yehi thread-safety ka sawaal hai.</p>
<ul>
<li><b>Definition:</b> poore app ke liye ek instance, ek global point se milta hai.</li>
<li><b>C# mein paane ke tareeke, naive se recommended tak:</b> naive <code>if (_i == null)</code> (thread-safe nahi), har call par <code>lock</code> (safe, thoda slow), double-checked locking (tez, par galti aasan), <code>static readonly</code> ya <code>Lazy&lt;T&gt;</code> (haath se likhne ka sabse aasan sahi tareeka), aur apps mein DI <code>AddSingleton</code> (recommended).</li>
<li><b>Modern recommendation:</b> ASP.NET Core mein pattern khud mat likho; <code>services.AddSingleton&lt;IPriceCache, PriceCache&gt;()</code> (ya <code>TimeProvider.System</code>) se register karo. Instance wahi ek, par lifetime container ke paas aur class testable.</li>
<li><b>Controversial kyun:</b> haath se likhi <code>Instance</code> property chhupa hua global state hai; callers apni dependency chhupate hain, tests state share karte hain, aur shared mutable state ko locks chahiye.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> jo cheezein mehngi hain ya share honi chahiye unke liye ek instance lo — cache, configuration snapshot, connection factory, <code>HttpClient</code> handler. Ek request ya ek user ke state ke liye mat lo, aur DI maujood ho to haath se mat likho.</p>`
      }
    },
    {
      id: "singleton-in-code",
      depth: "detailed",
      title: {
        en: "Singleton in C#: naive, lock, double-checked, static, Lazy<T>",
        hi: "C# में Singleton: naive, lock, double-checked, static, Lazy<T>",
        hg: "C# mein Singleton: naive, lock, double-checked, static, Lazy<T>"
      },
      body: {
        en: `<p><b>Analogy — one ATM cabin and a queue:</b> if the guard checks "is the cabin empty?" and two people both hear "yes" at the same instant, both walk in. Locking the door fixes it, but making everyone wait at the door even after the cabin is built is wasteful.</p>
<ul>
<li><b>Naive</b> (<code>_instance ??= new()</code>): two threads can both see <code>null</code> and create two objects. Not thread-safe.</li>
<li><b>lock on every call:</b> correct, but each read pays for the lock. Fine when the property is rarely read.</li>
<li><b>Double-checked locking:</b> check without a lock, lock only when <code>null</code>, check again inside. Use a <code>volatile</code> field (recommended). It is easy to get wrong, so most teams skip it.</li>
<li><b>static readonly / static property initialiser:</b> the runtime runs the type initialiser exactly once and thread-safely. Shortest correct code. Without an explicit static constructor the class is marked <code>beforefieldinit</code>, so the runtime may run it at any point before the first static <i>field</i> access — earlier or lazier than you expect; usually harmless, but do not rely on the exact moment. (Day 1 covers static constructors.)</li>
<li><b>Lazy&lt;T&gt;:</b> creation happens on first <code>.Value</code>, once, thread-safe by default (<code>ExecutionAndPublication</code>). Pick it when start-up is expensive.</li>
<li>Usually <code>sealed</code> + private constructor, so nobody can derive or create a second instance.</li>
</ul>
<p><b>When to use / when not:</b> use <code>static readonly</code> for cheap objects and <code>Lazy&lt;T&gt;</code> for expensive ones, if you really need a hand-written singleton (for example in a library with no DI). Avoid double-checked locking unless you can explain <code>volatile</code>. In an app with DI, skip all of these and register <code>AddSingleton</code>.</p>`,
        hi: `<p><b>Analogy — एक ATM cabin और queue:</b> अगर guard पूछे "cabin खाली है?" और दो लोग एक ही पल में "हाँ" सुन लें तो दोनों अंदर घुस जाते हैं। दरवाज़ा lock करने से ठीक होता है, पर cabin बन जाने के बाद भी सबको दरवाज़े पर रोकना फ़ालतू है।</p>
<ul>
<li><b>Naive</b> (<code>_instance ??= new()</code>): दो threads दोनों को <code>null</code> दिख सकता है और दो objects बन सकते हैं। Thread-safe नहीं।</li>
<li><b>हर call पर lock:</b> सही है, पर हर read lock का दाम देता है। जब property कम पढ़ी जाए तब ठीक।</li>
<li><b>Double-checked locking:</b> बिना lock check करो, <code>null</code> हो तभी lock लो, अंदर फिर check करो। इसमें <code>volatile</code> field रखना recommended है। गलती आसान है, इसलिए ज़्यादातर teams इसे छोड़ देती हैं।</li>
<li><b>static readonly / static property initialiser:</b> runtime type initialiser ठीक एक बार और thread-safe चलाता है। सबसे छोटा सही code। Explicit static constructor न हो तो class <code>beforefieldinit</code> होती है, यानी runtime उसे पहले static <i>field</i> access से पहले किसी भी समय चला सकता है — उम्मीद से जल्दी या देर से; आम तौर पर बेअसर, पर सही समय पर भरोसा मत करो। (Static constructors Day 1 में हैं।)</li>
<li><b>Lazy&lt;T&gt;:</b> creation पहले <code>.Value</code> पर, एक बार, default में thread-safe (<code>ExecutionAndPublication</code>)। Start-up महँगा हो तो चुनो।</li>
<li>आम तौर पर <code>sealed</code> + private constructor, ताकि कोई derive न करे और दूसरा instance न बना सके।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> अगर हाथ से लिखा singleton सच में चाहिए (जैसे DI-रहित library में) तो सस्ते objects के लिए <code>static readonly</code> और महँगे के लिए <code>Lazy&lt;T&gt;</code> लो। Double-checked locking तभी जब <code>volatile</code> समझा सको। DI वाले app में ये सब छोड़ो और <code>AddSingleton</code> register करो।</p>`,
        hg: `<p><b>Analogy — ek ATM cabin aur queue:</b> agar guard poochhe "cabin khaali hai?" aur do log ek hi pal mein "haan" sun lein to dono andar ghus jaate hain. Darwaza lock karne se theek hota hai, par cabin ban jaane ke baad bhi sabko darwaze par rokna faltu hai.</p>
<ul>
<li><b>Naive</b> (<code>_instance ??= new()</code>): do threads dono ko <code>null</code> dikh sakta hai aur do objects ban sakte hain. Thread-safe nahi.</li>
<li><b>Har call par lock:</b> sahi hai, par har read lock ka daam deta hai. Jab property kam padhi jaaye tab theek.</li>
<li><b>Double-checked locking:</b> bina lock check karo, <code>null</code> ho tabhi lock lo, andar phir check karo. Isme <code>volatile</code> field rakhna recommended hai. Galti aasan hai, isliye zyadatar teams ise chhod deti hain.</li>
<li><b>static readonly / static property initialiser:</b> runtime type initialiser theek ek baar aur thread-safe chalata hai. Sabse chhota sahi code. Explicit static constructor na ho to class <code>beforefieldinit</code> hoti hai, yaani runtime use pehle static <i>field</i> access se pehle kisi bhi samay chala sakta hai — ummeed se jaldi ya der se; aam taur par beasar, par sahi samay par bharosa mat karo. (Static constructors Day 1 mein hain.)</li>
<li><b>Lazy&lt;T&gt;:</b> creation pehle <code>.Value</code> par, ek baar, default mein thread-safe (<code>ExecutionAndPublication</code>). Start-up mehnga ho to chuno.</li>
<li>Aam taur par <code>sealed</code> + private constructor, taaki koi derive na kare aur doosra instance na bana sake.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> agar haath se likha singleton sach mein chahiye (jaise DI-rahit library mein) to saste objects ke liye <code>static readonly</code> aur mehnge objects ke liye <code>Lazy&lt;T&gt;</code> lo. Double-checked locking tabhi jab <code>volatile</code> samjha sako. DI wale app mein yeh sab chhodo aur <code>AddSingleton</code> register karo.</p>`
      },
      code: [
        {
          caption: {
            en: "The three classic hand-written versions (compiles)",
            hi: "तीन classic hand-written versions (compile होता है)",
            hg: "Teen classic hand-written versions (compile hota hai)"
          },
          check: "compile",
          src: `// 1) Naive: NOT thread-safe - two threads can both see null.
public sealed class NaiveSingleton
{
    private static NaiveSingleton? _instance;
    private NaiveSingleton() { }
    public static NaiveSingleton Instance => _instance ??= new NaiveSingleton();
}

// 2) lock on every call: safe, but every read pays for the lock.
public sealed class LockSingleton
{
    private static readonly object Gate = new();
    private static LockSingleton? _instance;
    private LockSingleton() { }

    public static LockSingleton Instance
    {
        get
        {
            lock (Gate)
            {
                return _instance ??= new LockSingleton();
            }
        }
    }
}

// 3) Double-checked locking: fast path without a lock. Mark the field volatile (recommended).
public sealed class DoubleCheckedSingleton
{
    private static readonly object Gate = new();
    private static volatile DoubleCheckedSingleton? _instance;
    private DoubleCheckedSingleton() { }

    public static DoubleCheckedSingleton Instance
    {
        get
        {
            if (_instance is null)
            {
                lock (Gate)
                {
                    _instance ??= new DoubleCheckedSingleton();
                }
            }
            return _instance;
        }
    }
}`
        },
        {
          caption: {
            en: "The two simple, safe versions: static initialiser and Lazy<T> (compiles)",
            hi: "दो simple, safe versions: static initialiser और Lazy<T> (compile होता है)",
            hg: "Do simple, safe versions: static initialiser aur Lazy<T> (compile hota hai)"
          },
          check: "compile",
          src: `// Cheap object: a static property initialiser is enough. The runtime guarantees thread safety.
public sealed class AppSettings
{
    public static AppSettings Instance { get; } = new();
    private AppSettings() { }
    public string Environment => "Production";
}

// Expensive object: Lazy<T> creates it on first use, once, thread-safely (default mode).
public sealed class ReportEngine
{
    private static readonly Lazy<ReportEngine> Holder = new(() => new ReportEngine());
    private ReportEngine() { /* imagine 2 seconds of start-up work */ }
    public static ReportEngine Instance => Holder.Value;
    public string Render(string name) => $"Report {name}";
}`
        },
        {
          caption: {
            en: "Modern way: let the DI container own the single instance (runs)",
            hi: "Modern तरीका: एक instance container के पास रहने दो (run होता है)",
            hg: "Modern tareeka: ek instance container ke paas rehne do (run hota hai)"
          },
          check: "run",
          packages: ["Microsoft.Extensions.DependencyInjection"],
          expected: `True
Price of A1: 99`,
          src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddSingleton<IPriceCache, PriceCache>();   // one instance per container
using var provider = services.BuildServiceProvider();

var first = provider.GetRequiredService<IPriceCache>();
var second = provider.GetRequiredService<IPriceCache>();
Console.WriteLine(ReferenceEquals(first, second));

// The consumer asks for the interface: no global Instance, easy to fake in a test.
var checkout = new Checkout(first);
Console.WriteLine(checkout.Describe("A1"));

public interface IPriceCache { decimal Get(string sku); }

public sealed class PriceCache : IPriceCache
{
    public decimal Get(string sku) => 99m;
}

public sealed class Checkout(IPriceCache prices)
{
    public string Describe(string sku) => $"Price of {sku}: {prices.Get(sku)}";
}`
        }
      ]
    },
    {
      id: "factories-in-code",
      depth: "detailed",
      title: {
        en: "Simple Factory, Factory Method and Abstract Factory",
        hi: "Simple Factory, Factory Method और Abstract Factory",
        hg: "Simple Factory, Factory Method aur Abstract Factory"
      },
      body: {
        en: `<p><b>Analogy — pizza outlets:</b> <b>Simple Factory</b> = one counter with a menu; you say "paneer" and the counter hands over a pizza. <b>Factory Method</b> = each city outlet inherits the same ordering workflow but decides its own local recipe. <b>Abstract Factory</b> = a combo desk that always gives a matching set, so you never get a Domino's box with a Pizza Hut sauce sachet.</p>
<ul>
<li><b>Simple Factory</b> — one method, usually a <code>switch</code>. Easy and useful, but adding a case edits the method (Day 8 OCP). Not a GoF pattern.</li>
<li><b>Factory Method</b> — a base class has a workflow and an <code>abstract</code> method that returns the product; a subclass decides the concrete type. One product, decided by <b>inheritance</b>.</li>
<li><b>Abstract Factory</b> — an interface with several <code>Create...()</code> methods that return <b>related</b> products. Swap the factory and the whole family changes together. Decided by <b>composition</b>.</li>
<li><b>Quick tell:</b> one product + subclass decides → Factory Method. A matching family → Abstract Factory. One static switch → Simple Factory.</li>
<li><b>In .NET:</b> <code>DbProviderFactory</code> (creates connection, command, parameter for one database provider) is a textbook Abstract Factory; <code>ILoggerFactory</code> and <code>IHttpClientFactory</code> are factories you inject; <code>Encoding.GetEncoding(name)</code> behaves like a Simple Factory.</li>
<li><b>TL angle:</b> with DI, a factory interface is needed mainly when the choice depends on a <i>runtime value</i> (a channel name in the request). If the choice is fixed at start-up, just register the right implementation. Keyed services (last section, "TL view") cover many runtime-choice cases.</li>
</ul>
<p><b>When to use / when not:</b> use a factory when the concrete type depends on input or configuration, or when creation needs set-up the caller should not know. Use Abstract Factory only when products truly must match. Do not add a factory interface that has one implementation and one caller — plain DI or <code>new</code> is simpler.</p>`,
        hi: `<p><b>Analogy — pizza outlets:</b> <b>Simple Factory</b> = एक counter जिस पर menu है; आप "paneer" बोलते हो और counter pizza दे देता है। <b>Factory Method</b> = हर शहर का outlet वही ordering workflow inherit करता है पर अपनी local recipe खुद तय करता है। <b>Abstract Factory</b> = combo desk जो हमेशा मेल खाता set देता है, ताकि आपको Domino's के box में Pizza Hut का sauce sachet न मिले।</p>
<ul>
<li><b>Simple Factory</b> — एक method, आम तौर पर <code>switch</code>। आसान और काम का, पर नया case जोड़ने पर method बदलना पड़ता है (Day 8 OCP)। GoF pattern नहीं।</li>
<li><b>Factory Method</b> — base class में workflow और product लौटाने वाला <code>abstract</code> method होता है; subclass concrete type तय करती है। एक product, <b>inheritance</b> से तय।</li>
<li><b>Abstract Factory</b> — ऐसा interface जिसमें कई <code>Create...()</code> methods <b>related</b> products लौटाते हैं। Factory बदलो तो पूरा family साथ बदलता है। <b>Composition</b> से तय।</li>
<li><b>जल्दी पहचान:</b> एक product + subclass तय करे → Factory Method। मेल खाता family → Abstract Factory। एक static switch → Simple Factory।</li>
<li><b>.NET में:</b> <code>DbProviderFactory</code> (एक database provider के लिए connection, command, parameter बनाता है) textbook Abstract Factory है; <code>ILoggerFactory</code> और <code>IHttpClientFactory</code> ऐसी factories हैं जिन्हें आप inject करते हो; <code>Encoding.GetEncoding(name)</code> Simple Factory जैसा चलता है।</li>
<li><b>TL angle:</b> DI के साथ factory interface मुख्य रूप से तब चाहिए जब choice <i>runtime value</i> पर निर्भर हो (request में channel का नाम)। अगर choice start-up पर तय है तो सही implementation register कर दो। Keyed services (आख़िरी section, "TL view") कई runtime-choice cases संभाल लेते हैं।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> जब concrete type input या configuration पर निर्भर हो, या creation में ऐसा set-up हो जो caller को पता नहीं होना चाहिए, तब factory लो। Abstract Factory तभी जब products सच में मेल खाने चाहिए। एक implementation और एक caller वाला factory interface मत जोड़ो — सीधा DI या <code>new</code> आसान है।</p>`,
        hg: `<p><b>Analogy — pizza outlets:</b> <b>Simple Factory</b> = ek counter jis par menu hai; aap "paneer" bolte ho aur counter pizza de deta hai. <b>Factory Method</b> = har shehar ka outlet wahi ordering workflow inherit karta hai par apni local recipe khud tay karta hai. <b>Abstract Factory</b> = combo desk jo hamesha match karta set deta hai, taaki aapko Domino's ke box mein Pizza Hut ka sauce sachet na mile.</p>
<ul>
<li><b>Simple Factory</b> — ek method, aam taur par <code>switch</code>. Aasan aur kaam ka, par naya case jodne par method badalna padta hai (Day 8 OCP). GoF pattern nahi.</li>
<li><b>Factory Method</b> — base class mein workflow aur product lautane wala <code>abstract</code> method hota hai; subclass concrete type tay karti hai. Ek product, <b>inheritance</b> se tay.</li>
<li><b>Abstract Factory</b> — aisa interface jisme kai <code>Create...()</code> methods <b>related</b> products lautate hain. Factory badlo to poora family saath badalta hai. <b>Composition</b> se tay.</li>
<li><b>Jaldi pehchaan:</b> ek product + subclass tay kare → Factory Method. Match karta family → Abstract Factory. Ek static switch → Simple Factory.</li>
<li><b>.NET mein:</b> <code>DbProviderFactory</code> (ek database provider ke liye connection, command, parameter banata hai) textbook Abstract Factory hai; <code>ILoggerFactory</code> aur <code>IHttpClientFactory</code> aisi factories hain jinhe aap inject karte ho; <code>Encoding.GetEncoding(name)</code> Simple Factory jaisa chalta hai.</li>
<li><b>TL angle:</b> DI ke saath factory interface mukhya roop se tab chahiye jab choice <i>runtime value</i> par nirbhar ho (request mein channel ka naam). Agar choice start-up par tay hai to sahi implementation register kar do. Keyed services (aakhri section, "TL view") kai runtime-choice cases sambhaal lete hain.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> jab concrete type input ya configuration par nirbhar ho, ya creation mein aisa set-up ho jo caller ko pata nahi hona chahiye, tab factory lo. Abstract Factory tabhi jab products sach mein match hone chahiye. Ek implementation aur ek caller wala factory interface mat jodo — seedha DI ya <code>new</code> aasan hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Simple Factory vs Factory Method (runs)",
            hi: "Simple Factory बनाम Factory Method (run होता है)",
            hg: "Simple Factory banam Factory Method (run hota hai)"
          },
          check: "run",
          expected: `SMS to Asha: Hi
Email to Ravi: Order confirmed
SMS to Meena: Order confirmed`,
          src: `Console.WriteLine(NotifierFactory.Create("sms").Send("Asha", "Hi"));
Console.WriteLine(new EmailOrderProcess().Complete("Ravi"));
Console.WriteLine(new SmsOrderProcess().Complete("Meena"));

public interface INotifier { string Send(string to, string message); }

public sealed class EmailNotifier : INotifier
{
    public string Send(string to, string message) => $"Email to {to}: {message}";
}

public sealed class SmsNotifier : INotifier
{
    public string Send(string to, string message) => $"SMS to {to}: {message}";
}

// Simple Factory: one switch. Handy, but a new channel edits this method.
public static class NotifierFactory
{
    public static INotifier Create(string channel) => channel switch
    {
        "email" => new EmailNotifier(),
        "sms" => new SmsNotifier(),
        _ => throw new ArgumentException($"Unknown channel: {channel}", nameof(channel))
    };
}

// Factory Method: the base class owns the workflow, the subclass picks the product.
public abstract class OrderProcess
{
    protected abstract INotifier CreateNotifier();   // <- the factory method

    public string Complete(string customer) =>
        CreateNotifier().Send(customer, "Order confirmed");
}

public sealed class EmailOrderProcess : OrderProcess
{
    protected override INotifier CreateNotifier() => new EmailNotifier();
}

public sealed class SmsOrderProcess : OrderProcess
{
    protected override INotifier CreateNotifier() => new SmsNotifier();
}`
        },
        {
          caption: {
            en: "Abstract Factory: a matching family per database (runs)",
            hi: "Abstract Factory: हर database के लिए मेल खाता family (run होता है)",
            hg: "Abstract Factory: har database ke liye match karta family (run hota hai)"
          },
          check: "run",
          expected: `SqlServer connection open
SqlServer ran: SELECT 1
Postgres connection open
Postgres ran: SELECT 1`,
          src: `Demo(new SqlServerFactory());
Demo(new PostgresFactory());

static void Demo(IDbFactory factory)
{
    var connection = factory.CreateConnection();
    var command = factory.CreateCommand();
    Console.WriteLine(connection.Open());
    Console.WriteLine(command.Run("SELECT 1"));
}

public interface IConn { string Open(); }
public interface ICmd { string Run(string sql); }

// Abstract Factory: one interface, a family of matching products.
public interface IDbFactory
{
    IConn CreateConnection();
    ICmd CreateCommand();
}

public sealed class SqlServerConn : IConn { public string Open() => "SqlServer connection open"; }
public sealed class SqlServerCmd : ICmd { public string Run(string sql) => $"SqlServer ran: {sql}"; }
public sealed class PostgresConn : IConn { public string Open() => "Postgres connection open"; }
public sealed class PostgresCmd : ICmd { public string Run(string sql) => $"Postgres ran: {sql}"; }

public sealed class SqlServerFactory : IDbFactory
{
    public IConn CreateConnection() => new SqlServerConn();
    public ICmd CreateCommand() => new SqlServerCmd();
}

public sealed class PostgresFactory : IDbFactory
{
    public IConn CreateConnection() => new PostgresConn();
    public ICmd CreateCommand() => new PostgresCmd();
}`
        }
      ]
    },
    {
      id: "builder-in-code",
      depth: "detailed",
      title: {
        en: "Builder: fluent steps, then Build()",
        hi: "Builder: fluent steps, फिर Build()",
        hg: "Builder: fluent steps, phir Build()"
      },
      body: {
        en: `<p><b>Analogy — the tiffin order sheet / a Subway counter:</b> you do not hand over twelve ingredients in one breath. You answer step by step — bread, filling, sauce, extras — and only at the end the counter says "ready" and gives the finished sub. The sheet can be half-filled; the sandwich cannot.</p>
<ul>
<li><b>Problem it solves:</b> a constructor with many optional parameters (the "telescoping constructor"), or an object that must be valid <i>only when complete</i>.</li>
<li><b>Shape:</b> a builder class with chainable methods (each returns <code>this</code>) and a final <code>Build()</code> that validates and returns the finished — ideally <b>immutable</b> — object.</li>
<li><b>Validation lives in <code>Build()</code></b>: required parts are checked once, in one place.</li>
<li><b>Pitfall — reusing a builder:</b> if <code>Build()</code> hands out the builder's own list, two products share state. Copy the data (<code>ToArray()</code>) or create a fresh builder per object.</li>
<li><b>In .NET:</b> <code>WebApplication.CreateBuilder(args)</code> → configure → <code>builder.Build()</code>; <code>Host.CreateApplicationBuilder</code> / <code>HostBuilder</code>; <code>StringBuilder</code> (builds a string); <code>UriBuilder</code>; <code>ConfigurationBuilder</code>; <code>DbContextOptionsBuilder</code>.</li>
<li><b>TL angle:</b> C# often needs less builder than Java. For a few optional values use a <code>record</code> with <code>init</code> properties or named and optional parameters. Reach for a builder when there are many steps, validation, or the product must not exist half-built.</li>
</ul>
<p><b>When to use / when not:</b> use a builder for complex objects with many optional parts, step-by-step set-up, or validation at the end (test data builders are a great TL tip). Do not write one for a class with three fields — an object initialiser or a record is clearer.</p>`,
        hi: `<p><b>Analogy — tiffin का order sheet / Subway का counter:</b> आप बारह ingredients एक साँस में नहीं बताते। Step by step जवाब देते हो — bread, filling, sauce, extras — और अंत में counter "ready" कहकर पूरा sub देता है। Sheet आधी भरी हो सकती है; sandwich आधा नहीं हो सकता।</p>
<ul>
<li><b>कौन-सी problem solve होती है:</b> बहुत सारे optional parameters वाला constructor ("telescoping constructor"), या ऐसा object जो <i>पूरा होने पर ही</i> valid हो।</li>
<li><b>Shape:</b> chain होने वाले methods (हर एक <code>this</code> लौटाता है) वाली builder class और आख़िर में <code>Build()</code>, जो validate करके तैयार — बेहतर हो तो <b>immutable</b> — object लौटाता है।</li>
<li><b>Validation <code>Build()</code> में रहती है</b>: ज़रूरी हिस्से एक बार, एक जगह check होते हैं।</li>
<li><b>Pitfall — builder दोबारा use करना:</b> अगर <code>Build()</code> builder की अपनी list बाँट दे, तो दो products state share करते हैं। Data copy करो (<code>ToArray()</code>) या हर object के लिए नया builder लो।</li>
<li><b>.NET में:</b> <code>WebApplication.CreateBuilder(args)</code> → configure → <code>builder.Build()</code>; <code>Host.CreateApplicationBuilder</code> / <code>HostBuilder</code>; <code>StringBuilder</code> (string बनाता है); <code>UriBuilder</code>; <code>ConfigurationBuilder</code>; <code>DbContextOptionsBuilder</code>।</li>
<li><b>TL angle:</b> C# में अक्सर Java से कम builder चाहिए। कुछ optional values के लिए <code>init</code> properties वाला <code>record</code> या named और optional parameters लो। Builder तब लो जब कई steps हों, validation हो, या product आधा-बना नहीं होना चाहिए।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> कई optional हिस्सों वाले complex objects, step-by-step set-up, या अंत में validation के लिए builder लो (test data builders TL का बढ़िया tip हैं)। तीन fields वाली class के लिए मत लिखो — object initialiser या record ज़्यादा साफ़ है।</p>`,
        hg: `<p><b>Analogy — tiffin ka order sheet / Subway ka counter:</b> aap barah ingredients ek saans mein nahi batate. Step by step jawab dete ho — bread, filling, sauce, extras — aur ant mein counter "ready" kehkar poora sub deta hai. Sheet aadhi bhari ho sakti hai; sandwich aadha nahi ho sakta.</p>
<ul>
<li><b>Kaun-si problem solve hoti hai:</b> bahut saare optional parameters wala constructor ("telescoping constructor"), ya aisa object jo <i>poora hone par hi</i> valid ho.</li>
<li><b>Shape:</b> chain hone wale methods (har ek <code>this</code> lautata hai) wali builder class aur aakhir mein <code>Build()</code>, jo validate karke taiyaar — behtar ho to <b>immutable</b> — object lautata hai.</li>
<li><b>Validation <code>Build()</code> mein rehti hai</b>: zaroori hisse ek baar, ek jagah check hote hain.</li>
<li><b>Pitfall — builder dobara use karna:</b> agar <code>Build()</code> builder ki apni list baant de, to do products state share karte hain. Data copy karo (<code>ToArray()</code>) ya har object ke liye naya builder lo.</li>
<li><b>.NET mein:</b> <code>WebApplication.CreateBuilder(args)</code> → configure → <code>builder.Build()</code>; <code>Host.CreateApplicationBuilder</code> / <code>HostBuilder</code>; <code>StringBuilder</code> (string banata hai); <code>UriBuilder</code>; <code>ConfigurationBuilder</code>; <code>DbContextOptionsBuilder</code>.</li>
<li><b>TL angle:</b> C# mein aksar Java se kam builder chahiye. Kuch optional values ke liye <code>init</code> properties wala <code>record</code> ya named aur optional parameters lo. Builder tab lo jab kai steps hon, validation ho, ya product aadha-bana nahi hona chahiye.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> kai optional hisson wale complex objects, step-by-step set-up, ya ant mein validation ke liye builder lo (test data builders TL ka badhiya tip hain). Teen fields wali class ke liye mat likho — object initialiser ya record zyada saaf hai.</p>`
      },
      code: [
        {
          caption: {
            en: "A fluent builder that returns an immutable product (runs)",
            hi: "Fluent builder जो immutable product लौटाता है (run होता है)",
            hg: "Fluent builder jo immutable product lautata hai (run hota hai)"
          },
          check: "run",
          expected: `Sales A4 landscape=True cols=Region,Total
At least one column is required`,
          src: `var report = new ReportBuilder("Sales")
    .WithPageSize("A4")
    .Landscape()
    .AddColumn("Region")
    .AddColumn("Total")
    .Build();

Console.WriteLine($"{report.Title} {report.PageSize} landscape={report.IsLandscape} cols={string.Join(",", report.Columns)}");

try
{
    new ReportBuilder("Empty").Build();
}
catch (InvalidOperationException ex)
{
    Console.WriteLine(ex.Message);
}

// The product: immutable, always valid.
public sealed record Report(string Title, string PageSize, bool IsLandscape, IReadOnlyList<string> Columns);

public sealed class ReportBuilder(string title)
{
    private string _pageSize = "A4";
    private bool _landscape;
    private readonly List<string> _columns = new();

    public ReportBuilder WithPageSize(string size) { _pageSize = size; return this; }
    public ReportBuilder Landscape() { _landscape = true; return this; }
    public ReportBuilder AddColumn(string name) { _columns.Add(name); return this; }

    public Report Build()
    {
        if (_columns.Count == 0)
            throw new InvalidOperationException("At least one column is required");

        // Copy, so later calls on this builder cannot change an already built Report.
        return new Report(title, _pageSize, _landscape, _columns.ToArray());
    }
}`
        },
        {
          caption: {
            en: "Builders you already use: StringBuilder and UriBuilder (runs)",
            hi: "Builders जो आप पहले से use करते हो: StringBuilder और UriBuilder (run होता है)",
            hg: "Builders jo aap pehle se use karte ho: StringBuilder aur UriBuilder (run hota hai)"
          },
          check: "run",
          expected: `Order 42 shipped
https://api.example.com/orders?page=2`,
          src: `using System.Text;

var text = new StringBuilder()
    .Append("Order ")
    .Append(42)
    .Append(" shipped")
    .ToString();
Console.WriteLine(text);

var uri = new UriBuilder("https", "api.example.com")
{
    Path = "orders",
    Query = "page=2"
}.Uri;
Console.WriteLine(uri);`
        },
        {
          caption: {
            en: "WebApplication.CreateBuilder: configure, then Build() (runs)",
            hi: "WebApplication.CreateBuilder: configure करो, फिर Build() (run होता है)",
            hg: "WebApplication.CreateBuilder: configure karo, phir Build() (run hota hai)"
          },
          check: "run",
          frameworks: ["aspnetcore"],
          expected: `Hello from the builder`,
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);
builder.Logging.ClearProviders();
builder.Services.AddSingleton<Greeter>();   // configuration phase: the app does not exist yet

var app = builder.Build();                  // Build() freezes the service collection
Console.WriteLine(app.Services.GetRequiredService<Greeter>().Hello());

public sealed class Greeter
{
    public string Hello() => "Hello from the builder";
}`
        }
      ]
    },
    {
      id: "di-replaces-patterns",
      depth: "detailed",
      title: {
        en: "TL view: when DI replaces Singleton and Factory",
        hi: "TL view: DI कब Singleton और Factory की जगह लेता है",
        hg: "TL view: DI kab Singleton aur Factory ki jagah leta hai"
      },
      body: {
        en: `<p><b>Analogy — a restaurant with a head waiter:</b> you do not walk into the kitchen to find the cook; the head waiter (the container) brings the right dish. You only keep a private chef (a hand-written factory) when the order depends on something the waiter cannot know in advance.</p>
<ul>
<li><b>Singleton → <code>AddSingleton</code>:</b> same one instance, but you ask for an interface in the constructor. No global <code>Instance</code>, so tests can pass a fake. Day 8's DIP in action.</li>
<li><b>Choose a named implementation → keyed services (.NET 8):</b> register each implementation under a key (<code>AddKeyedSingleton&lt;IPayment, UpiPayment&gt;("upi")</code>). <i>Fixed</i> choice: put <code>[FromKeyedServices("upi")]</code> on the constructor parameter. <i>Runtime</i> choice: register a <code>Func&lt;string, T&gt;</code> over <code>GetRequiredKeyedService</code>.</li>
<li><b>Several implementations of one interface:</b> inject <code>IEnumerable&lt;IPayment&gt;</code> and pick one — fine for a few, a <code>switch</code> in disguise for many.</li>
<li><b>Create when needed, repeatedly → <code>Func&lt;T&gt;</code> or <code>IServiceScopeFactory</code>:</b> a delegate you register yourself (the built-in container does not supply <code>Func&lt;T&gt;</code> automatically).</li>
<li><b>Avoid:</b> injecting <code>IServiceProvider</code> into business classes. That is the <b>Service Locator</b> anti-pattern: it hides what the class needs. Keep lookups inside a small factory or the composition root.</li>
<li><b>Lifetime check:</b> a singleton must not hold a scoped service (it would live longer than its request). Day 11 covers lifetimes in depth.</li>
</ul>
<p><b>When to use / when not:</b> use DI first. Write a hand-made factory when creation needs runtime data (an id, a channel name) plus logic the container cannot express. Do not wrap every <code>new</code> in a factory "just in case" — that is the over-engineering Day 8 warned about.</p>`,
        hi: `<p><b>Analogy — head waiter वाला restaurant:</b> आप cook ढूँढने kitchen में नहीं जाते; head waiter (container) सही dish ले आता है। निजी chef (hand-written factory) तभी रखो जब order ऐसी चीज़ पर निर्भर हो जो waiter को पहले से पता नहीं हो सकती।</p>
<ul>
<li><b>Singleton → <code>AddSingleton</code>:</b> वही एक instance, पर आप constructor में interface माँगते हो। Global <code>Instance</code> नहीं, इसलिए tests fake पास कर सकते हैं। Day 8 का DIP असल में।</li>
<li><b>नाम से implementation चुनना → keyed services (.NET 8):</b> हर implementation को key से register करो (<code>AddKeyedSingleton&lt;IPayment, UpiPayment&gt;("upi")</code>)। <i>Fixed</i> choice: constructor parameter पर <code>[FromKeyedServices("upi")]</code> लगाओ। <i>Runtime</i> choice: <code>GetRequiredKeyedService</code> पर <code>Func&lt;string, T&gt;</code> register करो।</li>
<li><b>एक interface के कई implementations:</b> <code>IEnumerable&lt;IPayment&gt;</code> inject करके एक चुनो — कुछ के लिए ठीक, ज़्यादा हों तो भेस बदला हुआ <code>switch</code>।</li>
<li><b>ज़रूरत पर बार-बार बनाना → <code>Func&lt;T&gt;</code> या <code>IServiceScopeFactory</code>:</b> ऐसा delegate जो आप खुद register करते हो (built-in container <code>Func&lt;T&gt;</code> अपने-आप नहीं देता)।</li>
<li><b>बचो:</b> business classes में <code>IServiceProvider</code> inject करने से। यह <b>Service Locator</b> anti-pattern है: यह छुपा देता है कि class को क्या चाहिए। Lookups को छोटी factory या composition root में रखो।</li>
<li><b>Lifetime check:</b> singleton scoped service को पकड़कर नहीं रख सकता (वह अपनी request से ज़्यादा जिएगा)। Lifetimes Day 11 में गहराई से हैं।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> पहले DI लो। Hand-made factory तब लिखो जब creation को runtime data (id, channel नाम) और ऐसी logic चाहिए जो container express न कर सके। हर <code>new</code> को "just in case" factory में मत लपेटो — यही over-engineering है जिसकी चेतावनी Day 8 ने दी थी।</p>`,
        hg: `<p><b>Analogy — head waiter wala restaurant:</b> aap cook dhoondhne kitchen mein nahi jaate; head waiter (container) sahi dish le aata hai. Niji chef (hand-written factory) tabhi rakho jab order aisi cheez par nirbhar ho jo waiter ko pehle se pata nahi ho sakti.</p>
<ul>
<li><b>Singleton → <code>AddSingleton</code>:</b> wahi ek instance, par aap constructor mein interface maangte ho. Global <code>Instance</code> nahi, isliye tests fake pass kar sakte hain. Day 8 ka DIP asal mein.</li>
<li><b>Naam se implementation chunna → keyed services (.NET 8):</b> har implementation ko key se register karo (<code>AddKeyedSingleton&lt;IPayment, UpiPayment&gt;("upi")</code>). <i>Fixed</i> choice: constructor parameter par <code>[FromKeyedServices("upi")]</code> lagao. <i>Runtime</i> choice: <code>GetRequiredKeyedService</code> par <code>Func&lt;string, T&gt;</code> register karo.</li>
<li><b>Ek interface ke kai implementations:</b> <code>IEnumerable&lt;IPayment&gt;</code> inject karke ek chuno — kuch ke liye theek, zyada hon to bhes badla hua <code>switch</code>.</li>
<li><b>Zaroorat par baar-baar banana → <code>Func&lt;T&gt;</code> ya <code>IServiceScopeFactory</code>:</b> aisa delegate jo aap khud register karte ho (built-in container <code>Func&lt;T&gt;</code> apne-aap nahi deta).</li>
<li><b>Bacho:</b> business classes mein <code>IServiceProvider</code> inject karne se. Yeh <b>Service Locator</b> anti-pattern hai: yeh chhupa deta hai ki class ko kya chahiye. Lookups ko chhoti factory ya composition root mein rakho.</li>
<li><b>Lifetime check:</b> singleton scoped service ko pakadkar nahi rakh sakta (woh apni request se zyada jiyega). Lifetimes Day 11 mein gehraai se hain.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> pehle DI lo. Hand-made factory tab likho jab creation ko runtime data (id, channel naam) aur aisi logic chahiye jo container express na kar sake. Har <code>new</code> ko "just in case" factory mein mat lapeto — yehi over-engineering hai jiski chetavni Day 8 ne di thi.</p>`
      },
      code: [
        {
          caption: {
            en: "Keyed services and a Func<string, T> factory (runs)",
            hi: "Keyed services और Func<string, T> factory (run होता है)",
            hg: "Keyed services aur Func<string, T> factory (run hota hai)"
          },
          check: "run",
          packages: ["Microsoft.Extensions.DependencyInjection"],
          expected: `UPI paid 500
Card paid 700
UPI paid 100`,
          src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddKeyedSingleton<IPayment, UpiPayment>("upi");
services.AddKeyedSingleton<IPayment, CardPayment>("card");

// Runtime choice: a tiny delegate over the container (the container does not supply Func<,> by itself).
services.AddSingleton<Func<string, IPayment>>(sp => key => sp.GetRequiredKeyedService<IPayment>(key));

// Fixed choice: the key is written on the constructor parameter.
services.AddTransient<UpiCheckout>();

using var provider = services.BuildServiceProvider();

var pick = provider.GetRequiredService<Func<string, IPayment>>();
Console.WriteLine(pick("upi").Pay(500));
Console.WriteLine(pick("card").Pay(700));
Console.WriteLine(provider.GetRequiredService<UpiCheckout>().Run(100));

public interface IPayment { string Pay(decimal amount); }
public sealed class UpiPayment : IPayment { public string Pay(decimal amount) => $"UPI paid {amount}"; }
public sealed class CardPayment : IPayment { public string Pay(decimal amount) => $"Card paid {amount}"; }

public sealed class UpiCheckout([FromKeyedServices("upi")] IPayment payment)
{
    public string Run(decimal amount) => payment.Pay(amount);
}`
        }
      ]
    }
  ],
  qa: [
    {
      id: "what-are-creational-patterns",
      depth: "short",
      q: "What are creational design patterns and why do we use them?",
      answer: "They hide how objects are created, so callers depend on abstractions instead of concrete classes. The classics are Singleton, Factory Method, Abstract Factory, Builder and Prototype.",
      meaning: {
        hi: "ये object बनाने का तरीका छुपाते हैं, ताकि callers concrete classes की जगह abstractions पर depend करें। Classics हैं Singleton, Factory Method, Abstract Factory, Builder और Prototype।",
        hg: "Ye object banane ka tareeka chhupate hain, taaki callers concrete classes ki jagah abstractions par depend karein. Classics hain Singleton, Factory Method, Abstract Factory, Builder aur Prototype."
      },
      explain: {
        en: `<ul>
<li>Scattered <code>new ConcreteClass()</code> couples code to that class and makes tests and changes harder (Day 8 DIP).</li>
<li>A creational pattern gives creation one named home: change it there once.</li>
<li>Gang of Four split patterns into creational, structural and behavioral — Day 10 covers the other two.</li>
</ul>
<p><b>TL angle:</b> in modern .NET the DI container is the default creational mechanism; hand-written patterns are for what the container cannot express.</p>
<p>Follow-up: "Which one have you used in production?" — pick a real one (Builder via <code>WebApplication.CreateBuilder</code>, factory via <code>IHttpClientFactory</code>) and say why.</p>`,
        hi: `<ul>
<li>बिखरा हुआ <code>new ConcreteClass()</code> code को उस class से जोड़ देता है और tests व बदलाव मुश्किल कर देता है (Day 8 DIP)।</li>
<li>Creational pattern creation को एक नाम वाला घर देता है: वहीं एक बार बदलो।</li>
<li>Gang of Four ने patterns को creational, structural और behavioral में बाँटा — बाकी दो Day 10 में।</li>
</ul>
<p><b>TL angle:</b> modern .NET में DI container default creational mechanism है; hand-written patterns उसके लिए हैं जो container express नहीं कर सकता।</p>
<p>Follow-up: "Production में कौन-सा use किया है?" — कोई असली चुनो (<code>WebApplication.CreateBuilder</code> से Builder, <code>IHttpClientFactory</code> से factory) और वजह बताओ।</p>`,
        hg: `<ul>
<li>Bikhra hua <code>new ConcreteClass()</code> code ko us class se jod deta hai aur tests va badlaav mushkil kar deta hai (Day 8 DIP).</li>
<li>Creational pattern creation ko ek naam wala ghar deta hai: wahin ek baar badlo.</li>
<li>Gang of Four ne patterns ko creational, structural aur behavioral mein baanta — baaki do Day 10 mein.</li>
</ul>
<p><b>TL angle:</b> modern .NET mein DI container default creational mechanism hai; hand-written patterns uske liye hain jo container express nahi kar sakta.</p>
<p>Follow-up: "Production mein kaun-sa use kiya hai?" — koi asli chuno (<code>WebApplication.CreateBuilder</code> se Builder, <code>IHttpClientFactory</code> se factory) aur wajah batao.</p>`
      }
    },
    {
      id: "singleton-controversy",
      depth: "short",
      q: "What is the Singleton pattern, and why do many people call it an anti-pattern?",
      answer: "Singleton guarantees one instance with a global access point. It is criticised as hidden global state: it hides dependencies, makes tests share state, and needs thread-safety care.",
      meaning: {
        hi: "Singleton एक instance और एक global access point की गारंटी देता है। इसकी आलोचना इसलिए होती है कि यह छुपा global state है: dependencies छुपाता है, tests में state share होती है, और thread-safety संभालनी पड़ती है।",
        hg: "Singleton ek instance aur ek global access point ki guarantee deta hai. Iski aalochna isliye hoti hai ki yeh chhupa global state hai: dependencies chhupata hai, tests mein state share hoti hai, aur thread-safety sambhaalni padti hai."
      },
      explain: {
        en: `<ul>
<li>The idea is fine: one cache, one configuration snapshot. The <i>hand-written global <code>Instance</code></i> is the problem.</li>
<li>Callers use it without declaring it, so the constructor lies about what the class needs.</li>
<li>Shared mutable state means locks, and tests leak state into each other.</li>
<li>Fix: keep "one instance" but get it by injection (<code>AddSingleton</code>) — the lifetime is still single, the global access goes away.</li>
</ul>
<p>Follow-up: "So is Singleton always bad?" — no; a stateless, immutable or thread-safe singleton (<code>TimeProvider.System</code>, <code>ArrayPool&lt;T&gt;.Shared</code>) is harmless. The risk is <i>mutable</i> shared state.</p>`,
        hi: `<ul>
<li>Idea ठीक है: एक cache, एक configuration snapshot। समस्या <i>हाथ से लिखा global <code>Instance</code></i> है।</li>
<li>Callers इसे बिना declare किए use करते हैं, इसलिए constructor झूठ बोलता है कि class को क्या चाहिए।</li>
<li>Shared mutable state का मतलब locks, और tests एक-दूसरे में state leak करते हैं।</li>
<li>Fix: "एक instance" रखो पर injection (<code>AddSingleton</code>) से लो — lifetime अब भी एक, global access गया।</li>
</ul>
<p>Follow-up: "तो क्या Singleton हमेशा बुरा है?" — नहीं; stateless, immutable या thread-safe singleton (<code>TimeProvider.System</code>, <code>ArrayPool&lt;T&gt;.Shared</code>) नुकसान नहीं करता। ख़तरा <i>mutable</i> shared state का है।</p>`,
        hg: `<ul>
<li>Idea theek hai: ek cache, ek configuration snapshot. Samasya <i>haath se likha global <code>Instance</code></i> hai.</li>
<li>Callers ise bina declare kiye use karte hain, isliye constructor jhooth bolta hai ki class ko kya chahiye.</li>
<li>Shared mutable state ka matlab locks, aur tests ek-doosre mein state leak karte hain.</li>
<li>Fix: "ek instance" rakho par injection (<code>AddSingleton</code>) se lo — lifetime ab bhi ek, global access gaya.</li>
</ul>
<p>Follow-up: "To kya Singleton hamesha bura hai?" — nahi; stateless, immutable ya thread-safe singleton (<code>TimeProvider.System</code>, <code>ArrayPool&lt;T&gt;.Shared</code>) nuksaan nahi karta. Khatra <i>mutable</i> shared state ka hai.</p>`
      }
    },
    {
      id: "thread-safe-singleton",
      depth: "short",
      q: "How do you make a Singleton thread-safe in C#?",
      answer: "Simplest is a static readonly field or property initialiser; the runtime runs it once, thread-safely. For expensive start-up use Lazy<T>. Double-checked locking should use a volatile field.",
      meaning: {
        hi: "सबसे आसान है static readonly field या property initialiser; runtime उसे एक बार और thread-safe चलाता है। महँगे start-up के लिए Lazy<T>। Double-checked locking में volatile field रखना चाहिए।",
        hg: "Sabse aasan hai static readonly field ya property initialiser; runtime use ek baar aur thread-safe chalata hai. Mehnge start-up ke liye Lazy<T>. Double-checked locking mein volatile field rakhna chahiye."
      },
      explain: {
        en: `<ul>
<li><b>static readonly / static property initialiser</b> — the CLR guarantees the type initialiser runs once; no lock code to write.</li>
<li><b>Lazy&lt;T&gt;</b> — create on first <code>.Value</code>; default mode takes a lock so the factory runs once.</li>
<li><b>lock on every call</b> — correct but pays on each read.</li>
<li><b>Double-checked locking</b> — fast but fragile; use <code>volatile</code>.</li>
<li><b>Naive null-check</b> — not thread-safe; two threads can create two objects.</li>
</ul>
<p><b>TL angle:</b> in an ASP.NET Core app the real answer is "I let DI own it with <code>AddSingleton</code>"; the container creates it once and resolves it thread-safely. The instance itself must still be thread-safe to <i>use</i> — creating it safely does not make its fields safe.</p>
<p>Follow-up: "Is a thread-safe singleton enough?" — no, its mutable state needs protection too.</p>`,
        hi: `<ul>
<li><b>static readonly / static property initialiser</b> — CLR गारंटी देता है कि type initialiser एक बार चलता है; lock का code नहीं लिखना।</li>
<li><b>Lazy&lt;T&gt;</b> — पहले <code>.Value</code> पर बनाओ; default mode lock लेता है ताकि factory एक बार चले।</li>
<li><b>हर call पर lock</b> — सही, पर हर read पर दाम।</li>
<li><b>Double-checked locking</b> — तेज़ पर नाज़ुक; <code>volatile</code> रखो।</li>
<li><b>Naive null-check</b> — thread-safe नहीं; दो threads दो objects बना सकते हैं।</li>
</ul>
<p><b>TL angle:</b> ASP.NET Core app में असली जवाब है "मैं DI को <code>AddSingleton</code> से संभालने देता हूँ"; container एक बार बनाता है और thread-safe resolve करता है। Instance को <i>use</i> करने के लिए खुद thread-safe होना फिर भी ज़रूरी है — सुरक्षित बनाने से उसके fields सुरक्षित नहीं हो जाते।</p>
<p>Follow-up: "क्या thread-safe singleton काफ़ी है?" — नहीं, उसके mutable state को भी सुरक्षा चाहिए।</p>`,
        hg: `<ul>
<li><b>static readonly / static property initialiser</b> — CLR guarantee deta hai ki type initialiser ek baar chalta hai; lock ka code nahi likhna.</li>
<li><b>Lazy&lt;T&gt;</b> — pehle <code>.Value</code> par banao; default mode lock leta hai taaki factory ek baar chale.</li>
<li><b>Har call par lock</b> — sahi, par har read par daam.</li>
<li><b>Double-checked locking</b> — tez par nazuk; <code>volatile</code> rakho.</li>
<li><b>Naive null-check</b> — thread-safe nahi; do threads do objects bana sakte hain.</li>
</ul>
<p><b>TL angle:</b> ASP.NET Core app mein asli jawab hai "main DI ko <code>AddSingleton</code> se sambhalne deta hoon"; container ek baar banata hai aur thread-safe resolve karta hai. Instance ko <i>use</i> karne ke liye khud thread-safe hona phir bhi zaroori hai — surakshit banane se uske fields surakshit nahi ho jaate.</p>
<p>Follow-up: "Kya thread-safe singleton kaafi hai?" — nahi, uske mutable state ko bhi suraksha chahiye.</p>`
      }
    },
    {
      id: "singleton-vs-static-class",
      depth: "short",
      q: "Singleton vs static class — what is the difference and which do you prefer?",
      answer: "A singleton is an object: it can implement interfaces, be injected, faked and disposed. A static class is only static members, so it is hard to mock or swap. I prefer DI singletons.",
      meaning: {
        hi: "Singleton एक object है: interface implement कर सकता है, inject, fake और dispose हो सकता है। Static class सिर्फ़ static members है, इसलिए mock या swap करना मुश्किल। मैं DI singleton पसंद करता हूँ।",
        hg: "Singleton ek object hai: interface implement kar sakta hai, inject, fake aur dispose ho sakta hai. Static class sirf static members hai, isliye mock ya swap karna mushkil. Main DI singleton pasand karta hoon."
      },
      explain: {
        en: `<ul>
<li>Static class: no instances, no interfaces, no inheritance. Good for pure helpers (<code>Math</code>, <code>Path</code>).</li>
<li>Singleton: a normal class that happens to have one instance — it can hold state with a lifetime, implement <code>IDisposable</code>, and be created lazily.</li>
<li>Rule of thumb: stateless utility → static class; shared, swappable service → singleton (via DI).</li>
<li>Day 1 compared them with the static-class-vs-singleton question; here the new point is the DI recommendation.</li>
</ul>
<p>Follow-up: "Can a static class be unit-tested?" — pure static methods yes; static methods that touch the clock, files or network are the problem.</p>`,
        hi: `<ul>
<li>Static class: कोई instance नहीं, interface नहीं, inheritance नहीं। Pure helpers (<code>Math</code>, <code>Path</code>) के लिए अच्छी।</li>
<li>Singleton: सामान्य class जिसका एक ही instance होता है — lifetime वाला state रख सकती है, <code>IDisposable</code> implement कर सकती है, lazily बन सकती है।</li>
<li>Rule of thumb: stateless utility → static class; shared, बदलने लायक service → singleton (DI से)।</li>
<li>Day 1 में static-class-vs-singleton की तुलना थी; यहाँ नई बात DI की recommendation है।</li>
</ul>
<p>Follow-up: "क्या static class को unit-test कर सकते हैं?" — pure static methods हाँ; जो static methods घड़ी, files या network छूते हैं वे समस्या हैं।</p>`,
        hg: `<ul>
<li>Static class: koi instance nahi, interface nahi, inheritance nahi. Pure helpers (<code>Math</code>, <code>Path</code>) ke liye achhi.</li>
<li>Singleton: saamanya class jiska ek hi instance hota hai — lifetime wala state rakh sakti hai, <code>IDisposable</code> implement kar sakti hai, lazily ban sakti hai.</li>
<li>Rule of thumb: stateless utility → static class; shared, badalne layak service → singleton (DI se).</li>
<li>Day 1 mein static-class-vs-singleton ki tulna thi; yahaan nayi baat DI ki recommendation hai.</li>
</ul>
<p>Follow-up: "Kya static class ko unit-test kar sakte hain?" — pure static methods haan; jo static methods ghadi, files ya network chhute hain woh samasya hain.</p>`
      }
    },
    {
      id: "singleton-vs-di-singleton",
      depth: "short",
      q: "Hand-written Singleton vs AddSingleton in DI — what is the difference?",
      answer: "Both give one instance. A hand-written one controls its own lifetime through a global Instance; with AddSingleton the container owns it and consumers take an interface, so tests can swap it.",
      meaning: {
        hi: "दोनों एक instance देते हैं। Hand-written वाला global Instance से अपनी lifetime खुद चलाता है; AddSingleton में container उसका मालिक है और consumers interface लेते हैं, इसलिए tests में बदल सकते हैं।",
        hg: "Dono ek instance dete hain. Hand-written wala global Instance se apni lifetime khud chalata hai; AddSingleton mein container uska malik hai aur consumers interface lete hain, isliye tests mein badal sakte hain."
      },
      explain: {
        en: `<ul>
<li>Hand-written: private constructor + static <code>Instance</code>; the class decides its own lifetime and everyone reaches it globally.</li>
<li>DI singleton: a normal public class; the <b>composition root</b> decides "one per container"; consumers declare the dependency in the constructor.</li>
<li>The container also disposes <code>IDisposable</code> singletons it created when the host shuts down.</li>
<li>Same single instance, but the DI version separates <i>what the class does</i> from <i>how long it lives</i> — a Day 8 DIP/SRP win.</li>
</ul>
<p>Follow-up: "Any risk with AddSingleton?" — thread-safety of its state, and a singleton must not capture a scoped service (Day 11).</p>`,
        hi: `<ul>
<li>Hand-written: private constructor + static <code>Instance</code>; class अपनी lifetime खुद तय करती है और सब global तरीके से पहुँचते हैं।</li>
<li>DI singleton: सामान्य public class; <b>composition root</b> तय करता है "एक per container"; consumers constructor में dependency declare करते हैं।</li>
<li>Host बंद होने पर container अपने बनाए <code>IDisposable</code> singletons को dispose भी करता है।</li>
<li>वही एक instance, पर DI version <i>class क्या करती है</i> और <i>कितना जीती है</i> को अलग करता है — Day 8 के DIP/SRP की जीत।</li>
</ul>
<p>Follow-up: "AddSingleton में कोई risk?" — उसके state की thread-safety, और singleton scoped service को capture नहीं करना चाहिए (Day 11)।</p>`,
        hg: `<ul>
<li>Hand-written: private constructor + static <code>Instance</code>; class apni lifetime khud tay karti hai aur sab global tareeke se pahunchte hain.</li>
<li>DI singleton: saamanya public class; <b>composition root</b> tay karta hai "ek per container"; consumers constructor mein dependency declare karte hain.</li>
<li>Host band hone par container apne banaye <code>IDisposable</code> singletons ko dispose bhi karta hai.</li>
<li>Wahi ek instance, par DI version <i>class kya karti hai</i> aur <i>kitna jeeti hai</i> ko alag karta hai — Day 8 ke DIP/SRP ki jeet.</li>
</ul>
<p>Follow-up: "AddSingleton mein koi risk?" — uske state ki thread-safety, aur singleton scoped service ko capture nahi karna chahiye (Day 11).</p>`
      }
    },
    {
      id: "factory-method-vs-abstract-factory",
      depth: "short",
      q: "Explain Simple Factory, Factory Method and Abstract Factory. How are they different?",
      answer: "Simple Factory is usually a static method with a switch. Factory Method is an overridable method that creates one product. Abstract Factory is an object that creates a matching family of products.",
      meaning: {
        hi: "Simple Factory आम तौर पर switch वाला static method है। Factory Method एक override होने वाला method है जो एक product बनाता है। Abstract Factory ऐसा object है जो मेल खाते products का family बनाता है।",
        hg: "Simple Factory aam taur par switch wala static method hai. Factory Method ek override hone wala method hai jo ek product banata hai. Abstract Factory aisa object hai jo match karte products ka family banata hai."
      },
      explain: {
        en: `<ul>
<li><b>Simple Factory</b> — <code>Create(string kind)</code> with a <code>switch</code>. Not a GoF pattern; adding a case edits the method (Day 8 OCP).</li>
<li><b>Factory Method</b> — base class workflow calls an <code>abstract CreateX()</code>; each subclass returns its product. Inheritance decides.</li>
<li><b>Abstract Factory</b> — interface with several <code>CreateX()</code> / <code>CreateY()</code> methods; swap the whole factory to switch the family. Composition decides.</li>
<li>Think "one product → Factory Method; matching set → Abstract Factory".</li>
</ul>
<p>Follow-up: "Which is a Strategy in disguise?" — a Factory Method subclass that only swaps one behaviour is often better as a Strategy (Day 10).</p>`,
        hi: `<ul>
<li><b>Simple Factory</b> — <code>Create(string kind)</code> जिसमें <code>switch</code> है। GoF pattern नहीं; case जोड़ने पर method बदलना पड़ता है (Day 8 OCP)।</li>
<li><b>Factory Method</b> — base class का workflow <code>abstract CreateX()</code> बुलाता है; हर subclass अपना product लौटाती है। Inheritance तय करती है।</li>
<li><b>Abstract Factory</b> — interface जिसमें कई <code>CreateX()</code> / <code>CreateY()</code> methods हैं; family बदलने के लिए पूरी factory बदलो। Composition तय करती है।</li>
<li>याद रखो: "एक product → Factory Method; मेल खाता set → Abstract Factory"।</li>
</ul>
<p>Follow-up: "कौन-सा भेस बदला हुआ Strategy है?" — जो Factory Method subclass सिर्फ़ एक behaviour बदलती है वह अक्सर Strategy के रूप में बेहतर है (Day 10)।</p>`,
        hg: `<ul>
<li><b>Simple Factory</b> — <code>Create(string kind)</code> jisme <code>switch</code> hai. GoF pattern nahi; case jodne par method badalna padta hai (Day 8 OCP).</li>
<li><b>Factory Method</b> — base class ka workflow <code>abstract CreateX()</code> bulata hai; har subclass apna product lautati hai. Inheritance tay karti hai.</li>
<li><b>Abstract Factory</b> — interface jisme kai <code>CreateX()</code> / <code>CreateY()</code> methods hain; family badalne ke liye poori factory badlo. Composition tay karti hai.</li>
<li>Yaad rakho: "ek product → Factory Method; match karta set → Abstract Factory".</li>
</ul>
<p>Follow-up: "Kaun-sa bhes badla hua Strategy hai?" — jo Factory Method subclass sirf ek behaviour badalti hai woh aksar Strategy ke roop mein behtar hai (Day 10).</p>`
      }
    },
    {
      id: "builder-when",
      depth: "short",
      q: "When would you use the Builder pattern in C#?",
      answer: "When an object has many optional parts or must be valid only when complete: set it up step by step and validate in Build(). For a few values, a record or initialiser is simpler.",
      meaning: {
        hi: "जब object में कई optional हिस्से हों या वह पूरा होने पर ही valid हो: step by step set करो और Build() में validate करो। कुछ values के लिए record या initialiser आसान है।",
        hg: "Jab object mein kai optional hisse hon ya woh poora hone par hi valid ho: step by step set karo aur Build() mein validate karo. Kuch values ke liye record ya initialiser aasan hai."
      },
      explain: {
        en: `<ul>
<li>Fluent methods return <code>this</code>; <code>Build()</code> validates and returns an immutable product.</li>
<li>Good fits: complex configuration, SQL/query or HTTP request construction, <b>test data builders</b> (<code>new OrderBuilder().WithTwoItems().Build()</code>).</li>
<li>Not needed for 3-4 simple fields — use a <code>record</code>, <code>init</code> properties, or optional parameters.</li>
<li>.NET examples: <code>WebApplication.CreateBuilder</code>, <code>StringBuilder</code>, <code>UriBuilder</code>.</li>
</ul>
<p><b>TL angle:</b> test data builders keep unit tests short and readable — an easy win to suggest in code review.</p>
<p>Follow-up: "Is StringBuilder really the Builder pattern?" — it is builder-style (accumulate, then <code>ToString()</code>), not the textbook Director/Builder version.</p>`,
        hi: `<ul>
<li>Fluent methods <code>this</code> लौटाते हैं; <code>Build()</code> validate करके immutable product लौटाता है।</li>
<li>अच्छे fits: complex configuration, SQL/query या HTTP request बनाना, <b>test data builders</b> (<code>new OrderBuilder().WithTwoItems().Build()</code>)।</li>
<li>3-4 simple fields के लिए ज़रूरी नहीं — <code>record</code>, <code>init</code> properties या optional parameters लो।</li>
<li>.NET उदाहरण: <code>WebApplication.CreateBuilder</code>, <code>StringBuilder</code>, <code>UriBuilder</code>।</li>
</ul>
<p><b>TL angle:</b> test data builders unit tests को छोटा और पढ़ने लायक रखते हैं — code review में सुझाने के लिए आसान जीत।</p>
<p>Follow-up: "क्या StringBuilder सच में Builder pattern है?" — यह builder-style है (जमा करो, फिर <code>ToString()</code>), textbook Director/Builder वाला नहीं।</p>`,
        hg: `<ul>
<li>Fluent methods <code>this</code> lautate hain; <code>Build()</code> validate karke immutable product lautata hai.</li>
<li>Achhe fits: complex configuration, SQL/query ya HTTP request banana, <b>test data builders</b> (<code>new OrderBuilder().WithTwoItems().Build()</code>).</li>
<li>3-4 simple fields ke liye zaroori nahi — <code>record</code>, <code>init</code> properties ya optional parameters lo.</li>
<li>.NET udaharan: <code>WebApplication.CreateBuilder</code>, <code>StringBuilder</code>, <code>UriBuilder</code>.</li>
</ul>
<p><b>TL angle:</b> test data builders unit tests ko chhota aur padhne layak rakhte hain — code review mein sujhane ke liye aasan jeet.</p>
<p>Follow-up: "Kya StringBuilder sach mein Builder pattern hai?" — yeh builder-style hai (jama karo, phir <code>ToString()</code>), textbook Director/Builder wala nahi.</p>`
      }
    },
    {
      id: "di-replaces-factories",
      depth: "short",
      q: "With dependency injection, do we still need Singleton and Factory patterns?",
      answer: "Often not: AddSingleton replaces hand-written singletons, and Func<T> or keyed services replace many factories. I still write a factory when creation needs runtime data plus real logic.",
      meaning: {
        hi: "अक्सर नहीं: AddSingleton hand-written singletons की जगह लेता है, और Func<T> या keyed services कई factories की। जब creation को runtime data और असली logic चाहिए तब मैं factory लिखता हूँ।",
        hg: "Aksar nahi: AddSingleton hand-written singletons ki jagah leta hai, aur Func<T> ya keyed services kai factories ki. Jab creation ko runtime data aur asli logic chahiye tab main factory likhta hoon."
      },
      explain: {
        en: `<ul>
<li>Singleton → <code>AddSingleton&lt;IThing, Thing&gt;()</code>; consumers take <code>IThing</code>.</li>
<li>Choose by key → .NET 8 keyed services (<code>AddKeyedSingleton</code>, <code>[FromKeyedServices]</code>).</li>
<li>Create on demand → inject a <code>Func&lt;T&gt;</code> you registered, or <code>IServiceScopeFactory</code> for scoped work.</li>
<li>Keep a real factory when it takes runtime input (user id, tenant) and applies logic, or when you ship a library without DI.</li>
</ul>
<p><b>TL angle:</b> the patterns are still the vocabulary for design reviews — you name what the container is doing for you.</p>
<p>Follow-up: "Why not inject IServiceProvider everywhere?" — that is Service Locator; it hides dependencies and makes tests harder.</p>`,
        hi: `<ul>
<li>Singleton → <code>AddSingleton&lt;IThing, Thing&gt;()</code>; consumers <code>IThing</code> लेते हैं।</li>
<li>Key से चुनना → .NET 8 keyed services (<code>AddKeyedSingleton</code>, <code>[FromKeyedServices]</code>)।</li>
<li>ज़रूरत पर बनाना → आपका register किया हुआ <code>Func&lt;T&gt;</code> inject करो, या scoped काम के लिए <code>IServiceScopeFactory</code>।</li>
<li>असली factory तब रखो जब वह runtime input (user id, tenant) लेकर logic लगाए, या आप DI-रहित library भेज रहे हों।</li>
</ul>
<p><b>TL angle:</b> patterns अब भी design reviews की भाषा हैं — आप बताते हो कि container आपके लिए क्या कर रहा है।</p>
<p>Follow-up: "हर जगह IServiceProvider inject क्यों नहीं?" — यह Service Locator है; dependencies छुपाता है और tests मुश्किल करता है।</p>`,
        hg: `<ul>
<li>Singleton → <code>AddSingleton&lt;IThing, Thing&gt;()</code>; consumers <code>IThing</code> lete hain.</li>
<li>Key se chunna → .NET 8 keyed services (<code>AddKeyedSingleton</code>, <code>[FromKeyedServices]</code>).</li>
<li>Zaroorat par banana → aapka register kiya hua <code>Func&lt;T&gt;</code> inject karo, ya scoped kaam ke liye <code>IServiceScopeFactory</code>.</li>
<li>Asli factory tab rakho jab woh runtime input (user id, tenant) lekar logic lagaye, ya aap DI-rahit library bhej rahe hon.</li>
</ul>
<p><b>TL angle:</b> patterns ab bhi design reviews ki bhasha hain — aap batate ho ki container aapke liye kya kar raha hai.</p>
<p>Follow-up: "Har jagah IServiceProvider inject kyun nahi?" — yeh Service Locator hai; dependencies chhupata hai aur tests mushkil karta hai.</p>`
      }
    },
    {
      id: "double-checked-locking-volatile",
      depth: "detailed",
      q: "Why is volatile recommended in double-checked locking?",
      answer: "The ECMA-335 spec allows the reference to be published before the constructor finishes; volatile rules that out portably. Modern .NET is stronger, but do not rely on that: use Lazy<T> or static readonly.",
      meaning: {
        hi: "ECMA-335 spec reference को constructor ख़त्म होने से पहले publish होने देता है; volatile इसे portable तरीके से रोकता है। Modern .NET ज़्यादा मज़बूत है, पर उस पर भरोसा मत करो: Lazy<T> या static readonly लो।",
        hg: "ECMA-335 spec reference ko constructor khatam hone se pehle publish hone deta hai; volatile ise portable tareeke se rokta hai. Modern .NET zyada mazboot hai, par us par bharosa mat karo: Lazy<T> ya static readonly lo."
      },
      explain: {
        en: `<ul>
<li>The first check runs outside the lock. The ECMA-335 memory model lets "store reference" become visible before "finish constructor", so in theory a second thread can pass the check and use a partly built object.</li>
<li><code>volatile</code> (or <code>Volatile.Read</code>/<code>Volatile.Write</code>) rules that out portably. The dotnet/runtime memory-model document says object-reference stores are release operations in CoreCLR, so modern .NET is stronger than the spec — but that is an implementation detail, so do not rely on it.</li>
<li>The cleaner answer: use <code>static readonly</code> or <code>Lazy&lt;T&gt;</code> and skip the technique.</li>
</ul>
<p><b>TL angle:</b> if someone proposes double-checked locking in a pull request, ask "why not Lazy&lt;T&gt;?" — hand-rolled lock-free code needs a strong reason.</p>
<p>Follow-up: "Does <code>lock</code> alone make the first read safe?" — only if the read is also inside the lock; that is the "lock on every call" version.</p>`,
        hi: `<ul>
<li>पहला check lock के बाहर चलता है। ECMA-335 memory model "reference store करो" को "constructor ख़त्म करो" से पहले दिखने देता है, इसलिए theory में दूसरा thread check पार करके आधे बने object को use कर सकता है।</li>
<li><code>volatile</code> (या <code>Volatile.Read</code>/<code>Volatile.Write</code>) इसे portable तरीके से रोकता है। dotnet/runtime का memory-model document कहता है कि CoreCLR में object-reference stores release operations हैं, यानी modern .NET spec से मज़बूत है — पर यह implementation detail है, इसलिए उस पर भरोसा मत करो।</li>
<li>साफ़ जवाब: <code>static readonly</code> या <code>Lazy&lt;T&gt;</code> लो और यह technique छोड़ो।</li>
</ul>
<p><b>TL angle:</b> pull request में कोई double-checked locking लाए तो पूछो "Lazy&lt;T&gt; क्यों नहीं?" — हाथ से बना lock-free code मज़बूत वजह माँगता है।</p>
<p>Follow-up: "क्या सिर्फ़ <code>lock</code> पहली read को safe बना देता है?" — तभी जब read भी lock के अंदर हो; यही "हर call पर lock" वाला version है।</p>`,
        hg: `<ul>
<li>Pehla check lock ke bahar chalta hai. ECMA-335 memory model "reference store karo" ko "constructor khatam karo" se pehle dikhne deta hai, isliye theory mein doosra thread check paar karke aadhe bane object ko use kar sakta hai.</li>
<li><code>volatile</code> (ya <code>Volatile.Read</code>/<code>Volatile.Write</code>) ise portable tareeke se rokta hai. dotnet/runtime ka memory-model document kehta hai ki CoreCLR mein object-reference stores release operations hain, yaani modern .NET spec se mazboot hai — par yeh implementation detail hai, isliye us par bharosa mat karo.</li>
<li>Saaf jawab: <code>static readonly</code> ya <code>Lazy&lt;T&gt;</code> lo aur yeh technique chhodo.</li>
</ul>
<p><b>TL angle:</b> pull request mein koi double-checked locking laye to poochho "Lazy&lt;T&gt; kyun nahi?" — haath se bana lock-free code mazboot wajah maangta hai.</p>
<p>Follow-up: "Kya sirf <code>lock</code> pehli read ko safe bana deta hai?" — tabhi jab read bhi lock ke andar ho; yehi "har call par lock" wala version hai.</p>`
      }
    },
    {
      id: "lazy-thread-safety-modes",
      depth: "detailed",
      q: "What are the LazyThreadSafetyMode options for Lazy<T>?",
      answer: "None: no thread safety. PublicationOnly: several threads may run the factory, the first result wins. ExecutionAndPublication (the default): one lock, the factory runs once, and exceptions are cached.",
      meaning: {
        hi: "None: कोई thread safety नहीं। PublicationOnly: कई threads factory चला सकते हैं, पहला result जीतता है। ExecutionAndPublication (default): एक lock, factory एक बार चलती है, और exceptions cache होते हैं।",
        hg: "None: koi thread safety nahi. PublicationOnly: kai threads factory chala sakte hain, pehla result jeetta hai. ExecutionAndPublication (default): ek lock, factory ek baar chalti hai, aur exceptions cache hote hain."
      },
      explain: {
        en: `<ul>
<li><b>None</b> — fastest, only for single-threaded use.</li>
<li><b>PublicationOnly</b> — no lock; racing threads may each run the factory, but only the first stored value is used. Exceptions are <i>not</i> cached. Useful when the factory is cheap and side-effect free.</li>
<li><b>ExecutionAndPublication</b> — default for <code>new Lazy&lt;T&gt;(factory)</code>: a lock makes sure the factory runs once. If it throws, the exception is cached and rethrown on every later <code>.Value</code> (the puzzle below shows it).</li>
<li>For a cache that should retry after failure, prefer <code>PublicationOnly</code> or a small custom retry.</li>
</ul>
<p>Follow-up: "Is <code>IsValueCreated</code> true after an exception?" — no, no value was created.</p>`,
        hi: `<ul>
<li><b>None</b> — सबसे तेज़, सिर्फ़ single-threaded use के लिए।</li>
<li><b>PublicationOnly</b> — lock नहीं; दौड़ते threads हर एक factory चला सकते हैं, पर सिर्फ़ पहली store हुई value इस्तेमाल होती है। Exceptions cache <i>नहीं</i> होते। जब factory सस्ती और side-effect-रहित हो तब काम की।</li>
<li><b>ExecutionAndPublication</b> — <code>new Lazy&lt;T&gt;(factory)</code> का default: lock पक्का करता है कि factory एक बार चले। अगर वह throw करे तो exception cache होकर हर आगे के <code>.Value</code> पर दोबारा फेंका जाता है (नीचे वाला puzzle दिखाता है)।</li>
<li>जिस cache को failure के बाद retry करना हो, उसके लिए <code>PublicationOnly</code> या छोटा custom retry लो।</li>
</ul>
<p>Follow-up: "Exception के बाद <code>IsValueCreated</code> true होता है?" — नहीं, कोई value बनी ही नहीं।</p>`,
        hg: `<ul>
<li><b>None</b> — sabse tez, sirf single-threaded use ke liye.</li>
<li><b>PublicationOnly</b> — lock nahi; daudte threads har ek factory chala sakte hain, par sirf pehli store hui value istemaal hoti hai. Exceptions cache <i>nahi</i> hote. Jab factory sasti aur side-effect-rahit ho tab kaam ki.</li>
<li><b>ExecutionAndPublication</b> — <code>new Lazy&lt;T&gt;(factory)</code> ka default: lock pakka karta hai ki factory ek baar chale. Agar woh throw kare to exception cache hokar har aage ke <code>.Value</code> par dobara phenka jaata hai (neeche wala puzzle dikhata hai).</li>
<li>Jis cache ko failure ke baad retry karna ho, uske liye <code>PublicationOnly</code> ya chhota custom retry lo.</li>
</ul>
<p>Follow-up: "Exception ke baad <code>IsValueCreated</code> true hota hai?" — nahi, koi value bani hi nahi.</p>`
      },
      code: [
        {
          caption: {
            en: "Choosing the mode in the constructor (compiles)",
            hi: "Constructor में mode चुनना (compile होता है)",
            hg: "Constructor mein mode chunna (compile hota hai)"
          },
          check: "compile",
          src: `public static class LazyModes
{
    // Default: ExecutionAndPublication - factory runs once, behind a lock.
    public static readonly Lazy<string> Default = new(() => "built once");

    // Same thing, spelled out.
    public static readonly Lazy<string> Explicit =
        new(() => "built once", LazyThreadSafetyMode.ExecutionAndPublication);

    // No lock: racing threads may each build a value, the first one stored wins.
    public static readonly Lazy<string> Racing =
        new(() => "cheap value", LazyThreadSafetyMode.PublicationOnly);

    // No thread safety at all: single-threaded code only.
    public static readonly Lazy<string> Single =
        new(() => "single thread", LazyThreadSafetyMode.None);
}`
        }
      ]
    },
    {
      id: "beforefieldinit-static-ctor",
      depth: "detailed",
      q: "What is beforefieldinit, and how does a static constructor change static initialisation?",
      answer: "With an explicit static constructor, the initialiser runs just before first use. Without one (beforefieldinit) it still runs once, but the runtime picks the moment, at or before first static field access.",
      meaning: {
        hi: "Explicit static constructor हो तो type initialiser पहले use से ठीक पहले चलता है। न हो तो class beforefieldinit होती है: वह अब भी एक बार चलता है, पर runtime उसे पहले भी चला सकता है।",
        hg: "Explicit static constructor ho to type initialiser pehle use se theek pehle chalta hai. Na ho to class beforefieldinit hoti hai: woh ab bhi ek baar chalta hai, par runtime use pehle bhi chala sakta hai."
      },
      explain: {
        en: `<ul>
<li>Static field initialisers run in the order written, then the static constructor body (Day 1: static constructors run once, before first use).</li>
<li><b>With</b> a static constructor: the exact moment is "before the first static member access or instance creation" — predictable.</li>
<li><b>Without</b> one: the C# compiler marks the type <code>beforefieldinit</code>, which lets the runtime run initialisers at any point before the first static <i>field</i> access — earlier (for example when JIT-compiling code that uses the class) or lazier; a static method call alone may not trigger it. Exactly once, thread-safe, but the timing can differ between runtimes.</li>
<li>So: for a logging-order or "must happen at first use" requirement, add a static constructor (or use <code>Lazy&lt;T&gt;</code>); for plain singletons the difference does not matter.</li>
</ul>
<p>Follow-up: "Can static initialisation deadlock?" — yes, two types whose initialisers wait on each other across threads; keep static initialisers small and free of cross-type dependencies.</p>`,
        hi: `<ul>
<li>Static field initialisers लिखे क्रम में चलते हैं, फिर static constructor की body (Day 1: static constructors एक बार, पहले use से पहले चलते हैं)।</li>
<li>Static constructor <b>हो</b> तो: सही पल है "पहले static member access या instance बनाने से पहले" — अनुमान लगाने लायक।</li>
<li><b>न हो</b> तो: C# compiler type को <code>beforefieldinit</code> मार्क करता है, जिससे runtime initialisers को पहले static <i>field</i> access से पहले किसी भी समय चला सकता है — पहले (जैसे class use करने वाले code के JIT compile पर) या देर से; सिर्फ़ static method call से शायद न चले। ठीक एक बार, thread-safe, पर समय runtimes में अलग हो सकता है।</li>
<li>इसलिए: logging-order या "पहले use पर ही होना चाहिए" ज़रूरत में static constructor जोड़ो (या <code>Lazy&lt;T&gt;</code>); साधारण singletons के लिए फ़र्क मायने नहीं रखता।</li>
</ul>
<p>Follow-up: "क्या static initialisation deadlock हो सकता है?" — हाँ, दो types जिनके initialisers threads के पार एक-दूसरे का इंतज़ार करें; static initialisers छोटे रखो और cross-type dependency से बचो।</p>`,
        hg: `<ul>
<li>Static field initialisers likhe kram mein chalte hain, phir static constructor ki body (Day 1: static constructors ek baar, pehle use se pehle chalte hain).</li>
<li>Static constructor <b>ho</b> to: sahi pal hai "pehle static member access ya instance banane se pehle" — anumaan lagane layak.</li>
<li><b>Na ho</b> to: C# compiler type ko <code>beforefieldinit</code> mark karta hai, jisse runtime initialisers ko pehle static <i>field</i> access se pehle kisi bhi samay chala sakta hai — pehle (jaise class use karne wale code ke JIT compile par) ya der se; sirf static method call se shayad na chale. Theek ek baar, thread-safe, par samay runtimes mein alag ho sakta hai.</li>
<li>Isliye: logging-order ya "pehle use par hi hona chahiye" zaroorat mein static constructor jodo (ya <code>Lazy&lt;T&gt;</code>); saadharan singletons ke liye fark maayne nahi rakhta.</li>
</ul>
<p>Follow-up: "Kya static initialisation deadlock ho sakta hai?" — haan, do types jinke initialisers threads ke paar ek-doosre ka intezaar karein; static initialisers chhote rakho aur cross-type dependency se bacho.</p>`
      }
    },
    {
      id: "singleton-testability",
      depth: "detailed",
      q: "How do you unit-test code that uses a Singleton?",
      answer: "A global Instance cannot be replaced, so tests share state and cannot fake it. Put it behind an interface, inject it, and register it with AddSingleton so tests can pass a fake.",
      meaning: {
        hi: "Global Instance बदला नहीं जा सकता, इसलिए tests state share करते हैं और fake नहीं कर सकते। उसे interface के पीछे रखो, inject करो, और AddSingleton से register करो ताकि tests fake पास कर सकें।",
        hg: "Global Instance badla nahi ja sakta, isliye tests state share karte hain aur fake nahi kar sakte. Use interface ke peeche rakho, inject karo, aur AddSingleton se register karo taaki tests fake pass kar sakein."
      },
      explain: {
        en: `<ul>
<li>Problem: <code>ReportEngine.Instance.Render(...)</code> inside a method — the test cannot swap it, and state from test 1 leaks into test 2.</li>
<li>Fix 1 (best): <code>IReportEngine</code> in the constructor, registered as a singleton; tests pass a fake.</li>
<li>Fix 2 (legacy code): wrap the global in an adapter class you can fake, then migrate callers gradually.</li>
<li>Do <b>not</b> add a public "Reset()" or a setter just for tests — it leaks into production design.</li>
</ul>
<p><b>TL angle:</b> "singleton-ness" is a lifetime decision for the composition root, not a property the class should enforce on itself.</p>
<p>Follow-up: "Where is the time-based case?" — use <code>TimeProvider</code> instead of a static clock singleton (Day 1).</p>`,
        hi: `<ul>
<li>Problem: method के अंदर <code>ReportEngine.Instance.Render(...)</code> — test उसे बदल नहीं सकता, और test 1 की state test 2 में लीक होती है।</li>
<li>Fix 1 (सबसे अच्छा): constructor में <code>IReportEngine</code>, singleton के रूप में register; tests fake पास करते हैं।</li>
<li>Fix 2 (legacy code): global को ऐसी adapter class में लपेटो जिसे fake कर सको, फिर callers धीरे-धीरे migrate करो।</li>
<li>सिर्फ़ tests के लिए public "Reset()" या setter <b>मत</b> जोड़ो — यह production design में लीक हो जाता है।</li>
</ul>
<p><b>TL angle:</b> "singleton होना" composition root का lifetime फ़ैसला है, ऐसी property नहीं जो class खुद पर थोपे।</p>
<p>Follow-up: "समय वाला case?" — static clock singleton की जगह <code>TimeProvider</code> लो (Day 1)।</p>`,
        hg: `<ul>
<li>Problem: method ke andar <code>ReportEngine.Instance.Render(...)</code> — test use badal nahi sakta, aur test 1 ki state test 2 mein leak hoti hai.</li>
<li>Fix 1 (sabse achha): constructor mein <code>IReportEngine</code>, singleton ke roop mein register; tests fake pass karte hain.</li>
<li>Fix 2 (legacy code): global ko aisi adapter class mein lapeto jise fake kar sako, phir callers dheere-dheere migrate karo.</li>
<li>Sirf tests ke liye public "Reset()" ya setter <b>mat</b> jodo — yeh production design mein leak ho jaata hai.</li>
</ul>
<p><b>TL angle:</b> "singleton hona" composition root ka lifetime faisla hai, aisi property nahi jo class khud par thope.</p>
<p>Follow-up: "Samay wala case?" — static clock singleton ki jagah <code>TimeProvider</code> lo (Day 1).</p>`
      }
    },
    {
      id: "abstract-factory-dotnet",
      depth: "detailed",
      q: "Give a real Abstract Factory example in .NET.",
      answer: "DbProviderFactory in ADO.NET: one factory per database provider creates a matching connection, command and parameter, so you never mix SQL Server and Postgres parts.",
      meaning: {
        hi: "ADO.NET का DbProviderFactory: हर database provider की एक factory मेल खाती connection, command और parameter बनाती है, इसलिए SQL Server और Postgres के हिस्से मिलते नहीं।",
        hg: "ADO.NET ka DbProviderFactory: har database provider ki ek factory match karti connection, command aur parameter banati hai, isliye SQL Server aur Postgres ke hisse milte nahi."
      },
      explain: {
        en: `<ul>
<li><code>DbProviderFactory</code> has <code>CreateConnection()</code>, <code>CreateCommand()</code>, <code>CreateParameter()</code> and more; each provider (SqlClient, Npgsql) supplies its own subclass.</li>
<li>Code written against <code>DbConnection</code> and <code>DbCommand</code> works for any provider; switching database means switching the factory.</li>
<li>UI toolkits give the classic textbook example (Light and Dark theme widgets), but ADO.NET is the one interviewers can verify in a .NET codebase.</li>
<li>EF Core hides this: you choose a provider with <code>UseSqlServer</code> or <code>UseNpgsql</code> and EF builds the matching pieces.</li>
</ul>
<p>Follow-up: "What is the downside of Abstract Factory?" — adding a new product type (say <code>CreateTransaction</code>) means changing every factory.</p>`,
        hi: `<ul>
<li><code>DbProviderFactory</code> में <code>CreateConnection()</code>, <code>CreateCommand()</code>, <code>CreateParameter()</code> वगैरह हैं; हर provider (SqlClient, Npgsql) अपनी subclass देता है।</li>
<li><code>DbConnection</code> और <code>DbCommand</code> पर लिखा code किसी भी provider के साथ चलता है; database बदलना यानी factory बदलना।</li>
<li>UI toolkits textbook उदाहरण देते हैं (Light और Dark theme widgets), पर ADO.NET वह है जिसे interviewer .NET codebase में जाँच सकता है।</li>
<li>EF Core इसे छुपा लेता है: आप <code>UseSqlServer</code> या <code>UseNpgsql</code> से provider चुनते हो और EF मेल खाते हिस्से बना लेता है।</li>
</ul>
<p>Follow-up: "Abstract Factory का नुकसान?" — नया product type (मान लो <code>CreateTransaction</code>) जोड़ने का मतलब हर factory बदलना।</p>`,
        hg: `<ul>
<li><code>DbProviderFactory</code> mein <code>CreateConnection()</code>, <code>CreateCommand()</code>, <code>CreateParameter()</code> waghera hain; har provider (SqlClient, Npgsql) apni subclass deta hai.</li>
<li><code>DbConnection</code> aur <code>DbCommand</code> par likha code kisi bhi provider ke saath chalta hai; database badalna yaani factory badalna.</li>
<li>UI toolkits textbook udaharan dete hain (Light aur Dark theme widgets), par ADO.NET woh hai jise interviewer .NET codebase mein jaanch sakta hai.</li>
<li>EF Core ise chhupa leta hai: aap <code>UseSqlServer</code> ya <code>UseNpgsql</code> se provider chunte ho aur EF match karte hisse bana leta hai.</li>
</ul>
<p>Follow-up: "Abstract Factory ka nuksaan?" — naya product type (maan lo <code>CreateTransaction</code>) jodne ka matlab har factory badalna.</p>`
      }
    },
    {
      id: "builder-vs-initializer",
      depth: "detailed",
      q: "Builder vs object initialiser vs constructor with optional parameters — how do you choose?",
      answer: "Initialisers or records suit a few independent values. Optional parameters suit simple defaults. Builder suits many steps, derived values or whole-object validation, and can return an immutable object.",
      meaning: {
        hi: "कुछ independent values के लिए initialiser या record। Simple defaults के लिए optional parameters। कई steps, derived values या पूरे object की validation के लिए Builder, और वह immutable object लौटा सकता है।",
        hg: "Kuch independent values ke liye initialiser ya record. Simple defaults ke liye optional parameters. Kai steps, derived values ya poore object ki validation ke liye Builder, aur woh immutable object lauta sakta hai."
      },
      explain: {
        en: `<ul>
<li><b>Object initialiser / <code>init</code> properties:</b> readable, but the object exists half-set between <code>new</code> and the last property; use <code>required</code> members (C# 11) to force the must-haves.</li>
<li><b>Optional parameters:</b> fine up to ~4 values; beyond that, call sites become unreadable.</li>
<li><b>Builder:</b> validation in one place, step-by-step or conditional construction, immutable result.</li>
<li>Do not default to a builder because Java code did — C# has records, <code>with</code>, named arguments and <code>required</code>.</li>
</ul>
<p>Follow-up: "Mutable or immutable builder?" — usually a mutable builder producing an immutable product; an immutable (copy-on-change) builder is safer to share but allocates more.</p>`,
        hi: `<ul>
<li><b>Object initialiser / <code>init</code> properties:</b> पढ़ने में आसान, पर <code>new</code> और आख़िरी property के बीच object आधा-set रहता है; ज़रूरी चीज़ों के लिए <code>required</code> members (C# 11) लो।</li>
<li><b>Optional parameters:</b> ~4 values तक ठीक; उसके बाद call sites पढ़ने लायक नहीं रहते।</li>
<li><b>Builder:</b> validation एक जगह, step-by-step या conditional construction, immutable result।</li>
<li>Java code ने किया इसलिए default में builder मत लो — C# में records, <code>with</code>, named arguments और <code>required</code> हैं।</li>
</ul>
<p>Follow-up: "Mutable या immutable builder?" — आम तौर पर mutable builder जो immutable product बनाए; immutable (बदलाव पर copy) builder share करने में safe है पर ज़्यादा allocate करता है।</p>`,
        hg: `<ul>
<li><b>Object initialiser / <code>init</code> properties:</b> padhne mein aasan, par <code>new</code> aur aakhri property ke beech object aadha-set rehta hai; zaroori cheezon ke liye <code>required</code> members (C# 11) lo.</li>
<li><b>Optional parameters:</b> ~4 values tak theek; uske baad call sites padhne layak nahi rehte.</li>
<li><b>Builder:</b> validation ek jagah, step-by-step ya conditional construction, immutable result.</li>
<li>Java code ne kiya isliye default mein builder mat lo — C# mein records, <code>with</code>, named arguments aur <code>required</code> hain.</li>
</ul>
<p>Follow-up: "Mutable ya immutable builder?" — aam taur par mutable builder jo immutable product banaye; immutable (badlaav par copy) builder share karne mein safe hai par zyada allocate karta hai.</p>`
      }
    },
    {
      id: "dotnet-builders",
      depth: "detailed",
      q: "Which builders do you know in the .NET libraries?",
      answer: "WebApplication.CreateBuilder then Build(), Host.CreateApplicationBuilder, StringBuilder, UriBuilder, ConfigurationBuilder and DbContextOptionsBuilder. Each collects settings first, then produces the final object.",
      meaning: {
        hi: "WebApplication.CreateBuilder फिर Build(), Host.CreateApplicationBuilder, StringBuilder, UriBuilder, ConfigurationBuilder और DbContextOptionsBuilder। हर एक पहले settings जमा करता है, फिर final object बनाता है।",
        hg: "WebApplication.CreateBuilder phir Build(), Host.CreateApplicationBuilder, StringBuilder, UriBuilder, ConfigurationBuilder aur DbContextOptionsBuilder. Har ek pehle settings jama karta hai, phir final object banata hai."
      },
      explain: {
        en: `<ul>
<li><code>WebApplicationBuilder</code>: register services and configuration, then <code>Build()</code> gives the <code>WebApplication</code>; the service collection is frozen after that.</li>
<li><code>HostApplicationBuilder</code> / <code>HostBuilder</code>: same idea for worker services and generic hosts.</li>
<li><code>StringBuilder</code> and <code>UriBuilder</code>: accumulate parts; <code>ToString()</code> / <code>.Uri</code> gives the result.</li>
<li><code>ConfigurationBuilder</code> (add sources, <code>Build()</code>) and <code>DbContextOptionsBuilder</code> (provider and options for EF Core).</li>
</ul>
<p><b>TL angle:</b> the "two-phase" shape — configure, then Build — is why you cannot add services after <code>builder.Build()</code>; say that in interviews to show you understand the pattern, not just the name.</p>
<p>Follow-up: "Which is closest to the textbook Builder?" — <code>WebApplicationBuilder</code>: many steps, a validated final product.</p>`,
        hi: `<ul>
<li><code>WebApplicationBuilder</code>: services और configuration register करो, फिर <code>Build()</code> से <code>WebApplication</code> मिलता है; उसके बाद service collection जम जाती है।</li>
<li><code>HostApplicationBuilder</code> / <code>HostBuilder</code>: worker services और generic hosts के लिए वही idea।</li>
<li><code>StringBuilder</code> और <code>UriBuilder</code>: हिस्से जमा करो; <code>ToString()</code> / <code>.Uri</code> से result मिलता है।</li>
<li><code>ConfigurationBuilder</code> (sources जोड़ो, <code>Build()</code>) और <code>DbContextOptionsBuilder</code> (EF Core के लिए provider और options)।</li>
</ul>
<p><b>TL angle:</b> "दो-phase" shape — configure, फिर Build — इसीलिए <code>builder.Build()</code> के बाद services नहीं जोड़ सकते; interview में यह बोलो ताकि दिखे कि आप pattern समझते हैं, सिर्फ़ नाम नहीं।</p>
<p>Follow-up: "Textbook Builder के सबसे करीब कौन?" — <code>WebApplicationBuilder</code>: कई steps, validated final product।</p>`,
        hg: `<ul>
<li><code>WebApplicationBuilder</code>: services aur configuration register karo, phir <code>Build()</code> se <code>WebApplication</code> milta hai; uske baad service collection jam jaati hai.</li>
<li><code>HostApplicationBuilder</code> / <code>HostBuilder</code>: worker services aur generic hosts ke liye wahi idea.</li>
<li><code>StringBuilder</code> aur <code>UriBuilder</code>: hisse jama karo; <code>ToString()</code> / <code>.Uri</code> se result milta hai.</li>
<li><code>ConfigurationBuilder</code> (sources jodo, <code>Build()</code>) aur <code>DbContextOptionsBuilder</code> (EF Core ke liye provider aur options).</li>
</ul>
<p><b>TL angle:</b> "do-phase" shape — configure, phir Build — isiliye <code>builder.Build()</code> ke baad services nahi jod sakte; interview mein yeh bolo taaki dikhe ki aap pattern samajhte hain, sirf naam nahi.</p>
<p>Follow-up: "Textbook Builder ke sabse kareeb kaun?" — <code>WebApplicationBuilder</code>: kai steps, validated final product.</p>`
      }
    },
    {
      id: "prototype-clone",
      depth: "detailed",
      q: "What is the Prototype pattern, and how do you copy objects in modern C#?",
      answer: "Prototype creates a new object by copying an existing one. In modern C# use a record's with expression; it is a shallow copy, so reference members are shared. ICloneable does not say shallow or deep.",
      meaning: {
        hi: "Prototype मौजूदा object की copy से नया object बनाता है। Modern C# में record की with expression लो; यह shallow copy है, इसलिए reference members share होते हैं। ICloneable नहीं बताता कि shallow है या deep।",
        hg: "Prototype maujood object ki copy se naya object banata hai. Modern C# mein record ki with expression lo; yeh shallow copy hai, isliye reference members share hote hain. ICloneable nahi batata ki shallow hai ya deep."
      },
      explain: {
        en: `<ul>
<li><b>Why:</b> creating from scratch is costly or complicated, but "same as this one, with two changes" is easy (templates, default settings, undo snapshots).</li>
<li><b>Records:</b> <code>original with { Id = "A2" }</code> copies the record. Value-type and string members are fine; a <code>List&lt;T&gt;</code> member is the <i>same list</i> in both objects (see the code).</li>
<li><b>ICloneable</b> returns <code>object</code> and its contract does not state shallow vs deep, so the design guidelines advise against exposing it in new public APIs. Write an explicit <code>DeepCopy()</code> or use immutable members instead.</li>
<li>Prefer immutable collections (<code>ImmutableList&lt;T&gt;</code>, <code>IReadOnlyList&lt;T&gt;</code> of a copied array) so a shallow copy is safe.</li>
</ul>
<p>Follow-up: "Is deep copy via serialisation fine?" — works, but slow and breaks on non-serialisable types; hand-written copy is clearer.</p>`,
        hi: `<ul>
<li><b>क्यों:</b> शुरू से बनाना महँगा या जटिल है, पर "इसके जैसा ही, दो बदलावों के साथ" आसान है (templates, default settings, undo snapshots)।</li>
<li><b>Records:</b> <code>original with { Id = "A2" }</code> record की copy बनाता है। Value-type और string members ठीक हैं; <code>List&lt;T&gt;</code> member दोनों objects में <i>एक ही list</i> है (code देखो)।</li>
<li><b>ICloneable</b> <code>object</code> लौटाता है और उसका contract shallow vs deep नहीं बताता, इसलिए design guidelines नए public APIs में इसे expose न करने की सलाह देती हैं। साफ़ <code>DeepCopy()</code> लिखो या immutable members लो।</li>
<li>Immutable collections (<code>ImmutableList&lt;T&gt;</code>, copy किए array की <code>IReadOnlyList&lt;T&gt;</code>) लो ताकि shallow copy safe रहे।</li>
</ul>
<p>Follow-up: "Serialisation से deep copy ठीक है?" — चलता है, पर धीमा और non-serialisable types पर टूटता है; हाथ से लिखी copy साफ़ है।</p>`,
        hg: `<ul>
<li><b>Kyun:</b> shuru se banana mehnga ya jatil hai, par "iske jaisa hi, do badlaavon ke saath" aasan hai (templates, default settings, undo snapshots).</li>
<li><b>Records:</b> <code>original with { Id = "A2" }</code> record ki copy banata hai. Value-type aur string members theek hain; <code>List&lt;T&gt;</code> member dono objects mein <i>ek hi list</i> hai (code dekho).</li>
<li><b>ICloneable</b> <code>object</code> lautata hai aur uska contract shallow vs deep nahi batata, isliye design guidelines naye public APIs mein ise expose na karne ki salah deti hain. Saaf <code>DeepCopy()</code> likho ya immutable members lo.</li>
<li>Immutable collections (<code>ImmutableList&lt;T&gt;</code>, copy kiye array ki <code>IReadOnlyList&lt;T&gt;</code>) lo taaki shallow copy safe rahe.</li>
</ul>
<p>Follow-up: "Serialisation se deep copy theek hai?" — chalta hai, par dheema aur non-serialisable types par tootta hai; haath se likhi copy saaf hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Record with: shallow copy shares the List (runs)",
            hi: "Record with: shallow copy में List share होती है (run होता है)",
            hg: "Record with: shallow copy mein List share hoti hai (run hota hai)"
          },
          check: "run",
          expected: `2
True
2`,
          src: `var original = new Basket("A1", new List<string> { "tea" });

var copy = original with { Id = "A2" };      // shallow copy
copy.Items.Add("biscuit");
Console.WriteLine(original.Items.Count);                      // the list is shared
Console.WriteLine(ReferenceEquals(original.Items, copy.Items));

var safe = original with { Id = "A3", Items = new List<string>(original.Items) };
safe.Items.Add("sugar");
Console.WriteLine(original.Items.Count);                      // unchanged: own list

public record Basket(string Id, List<string> Items);`
        }
      ]
    },
    {
      id: "keyed-services-func",
      depth: "detailed",
      q: "How do you pick one of several implementations at runtime with DI?",
      answer: "Register implementations with keys (AddKeyedSingleton) and resolve by key, or inject a Func<string, T> you registered. Injecting IServiceProvider into business classes hides dependencies, so I avoid it.",
      meaning: {
        hi: "Implementations को keys के साथ register करो (AddKeyedSingleton) और key से resolve करो, या अपना register किया Func<string, T> inject करो। Business classes में IServiceProvider inject करना dependencies छुपाता है, इसलिए मैं बचता हूँ।",
        hg: "Implementations ko keys ke saath register karo (AddKeyedSingleton) aur key se resolve karo, ya apna register kiya Func<string, T> inject karo. Business classes mein IServiceProvider inject karna dependencies chhupata hai, isliye main bachta hoon."
      },
      explain: {
        en: `<ul>
<li><b>Fixed choice:</b> <code>[FromKeyedServices("upi")]</code> on the constructor parameter (.NET 8+).</li>
<li><b>Runtime choice:</b> a <code>Func&lt;string, IPayment&gt;</code> registered as a small lambda over <code>GetRequiredKeyedService</code>; the lookup lives in the composition root, not in business code.</li>
<li><b>All of them:</b> inject <code>IEnumerable&lt;IPayment&gt;</code> and choose by a property such as <code>Name</code> — fine for a handful.</li>
<li>Before keyed services, teams used a hand-written factory class with a dictionary or switch; it still works.</li>
</ul>
<p><b>TL angle:</b> adding a payment method should be "one class + one registration" — the Day 8 Open/Closed test for your design.</p>
<p>Follow-up: "What if the key is unknown?" — <code>GetRequiredKeyedService</code> throws; validate input first or use <code>GetKeyedService</code> and handle <code>null</code>.</p>`,
        hi: `<ul>
<li><b>Fixed choice:</b> constructor parameter पर <code>[FromKeyedServices("upi")]</code> (.NET 8+)।</li>
<li><b>Runtime choice:</b> <code>GetRequiredKeyedService</code> पर छोटे lambda के रूप में register किया <code>Func&lt;string, IPayment&gt;</code>; lookup composition root में रहता है, business code में नहीं।</li>
<li><b>सब कुछ:</b> <code>IEnumerable&lt;IPayment&gt;</code> inject करो और <code>Name</code> जैसी property से चुनो — मुट्ठी भर के लिए ठीक।</li>
<li>Keyed services से पहले teams dictionary या switch वाली hand-written factory class लिखती थीं; वह अब भी चलती है।</li>
</ul>
<p><b>TL angle:</b> नया payment method "एक class + एक registration" होना चाहिए — आपके design का Day 8 Open/Closed test।</p>
<p>Follow-up: "Key अनजान हो तो?" — <code>GetRequiredKeyedService</code> throw करता है; पहले input validate करो या <code>GetKeyedService</code> लेकर <code>null</code> संभालो।</p>`,
        hg: `<ul>
<li><b>Fixed choice:</b> constructor parameter par <code>[FromKeyedServices("upi")]</code> (.NET 8+).</li>
<li><b>Runtime choice:</b> <code>GetRequiredKeyedService</code> par chhote lambda ke roop mein register kiya <code>Func&lt;string, IPayment&gt;</code>; lookup composition root mein rehta hai, business code mein nahi.</li>
<li><b>Sab kuch:</b> <code>IEnumerable&lt;IPayment&gt;</code> inject karo aur <code>Name</code> jaisi property se chuno — mutthi bhar ke liye theek.</li>
<li>Keyed services se pehle teams dictionary ya switch wali hand-written factory class likhti thi; woh ab bhi chalti hai.</li>
</ul>
<p><b>TL angle:</b> naya payment method "ek class + ek registration" hona chahiye — aapke design ka Day 8 Open/Closed test.</p>
<p>Follow-up: "Key anjaan ho to?" — <code>GetRequiredKeyedService</code> throw karta hai; pehle input validate karo ya <code>GetKeyedService</code> lekar <code>null</code> sambhalo.</p>`
      }
    },
    {
      id: "when-not-factory",
      depth: "detailed",
      q: "When would you not introduce a factory or any creational pattern?",
      answer: "When the class has a simple constructor and one implementation. A factory interface with one implementation and one caller is indirection without benefit; plain new or DI registration is clearer.",
      meaning: {
        hi: "जब class का constructor simple हो और implementation एक हो। एक implementation और एक caller वाला factory interface बिना फ़ायदे की indirection है; सीधा new या DI registration साफ़ है।",
        hg: "Jab class ka constructor simple ho aur implementation ek ho. Ek implementation aur ek caller wala factory interface bina fayde ki indirection hai; seedha new ya DI registration saaf hai."
      },
      explain: {
        en: `<ul>
<li>Patterns cost readability: another type, another file, another hop in the debugger.</li>
<li>Good reasons to add one: creation varies by input, needs set-up the caller should not know, must be faked in tests, or is expensive.</li>
<li>Weak reasons: "we might need another implementation someday" (YAGNI), "it is in the book", "Java did it".</li>
<li>Small value-like objects (<code>new Uri(...)</code>, DTOs, records) are fine with plain <code>new</code>.</li>
</ul>
<p><b>TL angle:</b> in review, ask "what change does this make cheaper?" — if the answer is vague, ask the author to delete the abstraction. Day 8 SOLID applies the same test.</p>
<p>Follow-up: "How do you decide between a Factory and a Strategy?" — Factory decides <i>which object to create</i>; Strategy swaps <i>behaviour</i> of an existing object (Day 10).</p>`,
        hi: `<ul>
<li>Patterns readability की क़ीमत लेते हैं: एक और type, एक और file, debugger में एक और hop।</li>
<li>जोड़ने की अच्छी वजहें: creation input से बदलती है, ऐसा set-up चाहिए जो caller को पता न हो, tests में fake करनी है, या महँगी है।</li>
<li>कमज़ोर वजहें: "शायद कभी दूसरी implementation चाहिए होगी" (YAGNI), "किताब में है", "Java में करते थे"।</li>
<li>छोटे value-जैसे objects (<code>new Uri(...)</code>, DTOs, records) सीधे <code>new</code> से ठीक हैं।</li>
</ul>
<p><b>TL angle:</b> review में पूछो "यह कौन-सा बदलाव सस्ता करता है?" — जवाब धुंधला हो तो author से abstraction हटवाओ। Day 8 SOLID भी यही test लगाता है।</p>
<p>Follow-up: "Factory और Strategy में कैसे चुनें?" — Factory तय करती है <i>कौन-सा object बनाना है</i>; Strategy मौजूदा object का <i>behaviour</i> बदलती है (Day 10)।</p>`,
        hg: `<ul>
<li>Patterns readability ki keemat lete hain: ek aur type, ek aur file, debugger mein ek aur hop.</li>
<li>Jodne ki achhi wajahein: creation input se badalti hai, aisa set-up chahiye jo caller ko pata na ho, tests mein fake karni hai, ya mehngi hai.</li>
<li>Kamzor wajahein: "shayad kabhi doosri implementation chahiye hogi" (YAGNI), "kitaab mein hai", "Java mein karte the".</li>
<li>Chhote value-jaise objects (<code>new Uri(...)</code>, DTOs, records) seedhe <code>new</code> se theek hain.</li>
</ul>
<p><b>TL angle:</b> review mein poochho "yeh kaun-sa badlaav sasta karta hai?" — jawab dhundhla ho to author se abstraction hatwao. Day 8 SOLID bhi yehi test lagata hai.</p>
<p>Follow-up: "Factory aur Strategy mein kaise chunein?" — Factory tay karti hai <i>kaun-sa object banana hai</i>; Strategy maujood object ka <i>behaviour</i> badalti hai (Day 10).</p>`
      }
    }
  ],
  puzzles: [
    {
      id: "static-ctor-order",
      src: `Console.WriteLine("Main start");
Console.WriteLine(Config.Name);
Console.WriteLine(Config.Name);

class Config
{
    public static readonly string Name = Make("field A");
    public static readonly string Other = Make("field B");

    static Config()
    {
        Console.WriteLine("static ctor");
    }

    static string Make(string text)
    {
        Console.WriteLine(text);
        return text;
    }
}`,
      answer: `Main start
field A
field B
static ctor
field A
field A`,
      explain: {
        en: `<ul>
<li>The type initialiser runs on the first access to <code>Config.Name</code>, after "Main start".</li>
<li>Static field initialisers run in the order written (A, then B), then the static constructor body.</li>
<li>It runs once; the second access only reads the field.</li>
<li>Because there is an explicit static constructor, the "just before first access" timing is predictable (see Q&amp;A on beforefieldinit; Day 1 covers static constructors).</li>
</ul>`,
        hi: `<ul>
<li>Type initialiser <code>Config.Name</code> के पहले access पर चलता है, "Main start" के बाद।</li>
<li>Static field initialisers लिखे क्रम में चलते हैं (A, फिर B), फिर static constructor की body।</li>
<li>यह एक बार चलता है; दूसरा access सिर्फ़ field पढ़ता है।</li>
<li>Explicit static constructor है, इसलिए "पहले access से ठीक पहले" वाला समय अनुमान लगाने लायक है (beforefieldinit वाला Q&amp;A देखो; static constructors Day 1 में हैं)।</li>
</ul>`,
        hg: `<ul>
<li>Type initialiser <code>Config.Name</code> ke pehle access par chalta hai, "Main start" ke baad.</li>
<li>Static field initialisers likhe kram mein chalte hain (A, phir B), phir static constructor ki body.</li>
<li>Yeh ek baar chalta hai; doosra access sirf field padhta hai.</li>
<li>Explicit static constructor hai, isliye "pehle access se theek pehle" wala samay anumaan lagane layak hai (beforefieldinit wala Q&amp;A dekho; static constructors Day 1 mein hain).</li>
</ul>`
      }
    },
    {
      id: "static-field-order-trap",
      src: `Console.WriteLine(Counter.Instance.Start);
Console.WriteLine(Counter.Default);

class Counter
{
    public static readonly Counter Instance = new Counter();
    public static readonly int Default = 10;

    public int Start { get; }

    private Counter()
    {
        Start = Default;
    }
}`,
      answer: `0
10`,
      explain: {
        en: `<ul>
<li>Static field initialisers run top to bottom. <code>Instance</code> is created first, while <code>Default</code> still holds its default value 0.</li>
<li>The constructor copies <code>Default</code> (0) into <code>Start</code>.</li>
<li>Only after that does <code>Default</code> become 10 — so <code>Instance.Start</code> is 0 and <code>Default</code> prints 10.</li>
<li>Singleton lesson: put dependent static fields <i>before</i> the instance field, or use <code>Lazy&lt;T&gt;</code>.</li>
</ul>`,
        hi: `<ul>
<li>Static field initialisers ऊपर से नीचे चलते हैं। <code>Instance</code> पहले बनता है, तब <code>Default</code> में अब भी default value 0 है।</li>
<li>Constructor <code>Default</code> (0) को <code>Start</code> में copy करता है।</li>
<li>उसके बाद ही <code>Default</code> 10 बनता है — इसलिए <code>Instance.Start</code> 0 है और <code>Default</code> 10 print करता है।</li>
<li>Singleton की सीख: dependent static fields को instance field से <i>पहले</i> रखो, या <code>Lazy&lt;T&gt;</code> लो।</li>
</ul>`,
        hg: `<ul>
<li>Static field initialisers upar se neeche chalte hain. <code>Instance</code> pehle banta hai, tab <code>Default</code> mein ab bhi default value 0 hai.</li>
<li>Constructor <code>Default</code> (0) ko <code>Start</code> mein copy karta hai.</li>
<li>Uske baad hi <code>Default</code> 10 banta hai — isliye <code>Instance.Start</code> 0 hai aur <code>Default</code> 10 print karta hai.</li>
<li>Singleton ki seekh: dependent static fields ko instance field se <i>pehle</i> rakho, ya <code>Lazy&lt;T&gt;</code> lo.</li>
</ul>`
      }
    },
    {
      id: "lazy-evaluation-count",
      src: `int calls = 0;
var lazy = new Lazy<string>(() =>
{
    calls++;
    return "ready";
});

Console.WriteLine(lazy.IsValueCreated);
Console.WriteLine(calls);
Console.WriteLine(lazy.Value);
Console.WriteLine(lazy.Value);
Console.WriteLine($"{lazy.IsValueCreated} {calls}");`,
      answer: `False
0
ready
ready
True 1`,
      explain: {
        en: `<ul>
<li>Creating the <code>Lazy&lt;T&gt;</code> does not run the factory: <code>IsValueCreated</code> is False and <code>calls</code> is 0.</li>
<li>The first <code>.Value</code> runs the factory once and stores the result.</li>
<li>The second <code>.Value</code> returns the stored value; the factory does not run again.</li>
<li>At the end: created = True, calls = 1.</li>
</ul>`,
        hi: `<ul>
<li><code>Lazy&lt;T&gt;</code> बनाने से factory नहीं चलती: <code>IsValueCreated</code> False है और <code>calls</code> 0।</li>
<li>पहला <code>.Value</code> factory को एक बार चलाकर result store करता है।</li>
<li>दूसरा <code>.Value</code> store की हुई value लौटाता है; factory दोबारा नहीं चलती।</li>
<li>अंत में: created = True, calls = 1।</li>
</ul>`,
        hg: `<ul>
<li><code>Lazy&lt;T&gt;</code> banane se factory nahi chalti: <code>IsValueCreated</code> False hai aur <code>calls</code> 0.</li>
<li>Pehla <code>.Value</code> factory ko ek baar chalakar result store karta hai.</li>
<li>Doosra <code>.Value</code> store ki hui value lautata hai; factory dobara nahi chalti.</li>
<li>Ant mein: created = True, calls = 1.</li>
</ul>`
      }
    },
    {
      id: "lazy-exception-cached",
      src: `Run(LazyThreadSafetyMode.ExecutionAndPublication);
Run(LazyThreadSafetyMode.PublicationOnly);

static void Run(LazyThreadSafetyMode mode)
{
    int attempts = 0;
    var lazy = new Lazy<int>(() =>
    {
        attempts++;
        if (attempts == 1) throw new InvalidOperationException("boom");
        return 42;
    }, mode);

    for (int i = 0; i < 2; i++)
    {
        try { Console.WriteLine(lazy.Value); }
        catch (InvalidOperationException ex) { Console.WriteLine($"error: {ex.Message}"); }
    }
    Console.WriteLine($"{mode} attempts={attempts}");
}`,
      answer: `error: boom
error: boom
ExecutionAndPublication attempts=1
error: boom
42
PublicationOnly attempts=2`,
      explain: {
        en: `<ul>
<li><b>ExecutionAndPublication</b> (the default): the first call throws, and the exception is <b>cached</b>. The second <code>.Value</code> rethrows it without calling the factory again, so attempts stays 1.</li>
<li><b>PublicationOnly</b>: exceptions are not cached. The second <code>.Value</code> runs the factory again (attempt 2) and succeeds with 42.</li>
<li>Takeaway: with the default mode a failed lazy singleton stays broken until the process restarts — design retries on purpose.</li>
</ul>`,
        hi: `<ul>
<li><b>ExecutionAndPublication</b> (default): पहली call throw करती है और exception <b>cache</b> हो जाता है। दूसरा <code>.Value</code> factory दोबारा बुलाए बिना उसे फिर फेंकता है, इसलिए attempts 1 रहता है।</li>
<li><b>PublicationOnly</b>: exceptions cache नहीं होते। दूसरा <code>.Value</code> factory फिर चलाता है (attempt 2) और 42 के साथ सफल होता है।</li>
<li>सीख: default mode में फेल हुआ lazy singleton process restart तक टूटा रहता है — retry सोच-समझकर design करो।</li>
</ul>`,
        hg: `<ul>
<li><b>ExecutionAndPublication</b> (default): pehli call throw karti hai aur exception <b>cache</b> ho jaata hai. Doosra <code>.Value</code> factory dobara bulaye bina use phir phenkta hai, isliye attempts 1 rehta hai.</li>
<li><b>PublicationOnly</b>: exceptions cache nahi hote. Doosra <code>.Value</code> factory phir chalata hai (attempt 2) aur 42 ke saath safal hota hai.</li>
<li>Seekh: default mode mein fail hua lazy singleton process restart tak toota rehta hai — retry soch-samajhkar design karo.</li>
</ul>`
      }
    },
    {
      id: "lazy-parallel-once",
      src: `using System.Collections.Concurrent;

int created = 0;
var lazy = new Lazy<object>(() =>
{
    Interlocked.Increment(ref created);
    Thread.Sleep(20);
    return new object();
});

var seen = new ConcurrentBag<object>();
Parallel.For(0, 50, _ => seen.Add(lazy.Value));

Console.WriteLine($"created={created}");
Console.WriteLine($"distinct={seen.Distinct().Count()}");`,
      answer: `created=1
distinct=1`,
      explain: {
        en: `<ul>
<li>Fifty parallel iterations all ask for <code>lazy.Value</code> at about the same time.</li>
<li>The default mode (ExecutionAndPublication) takes a lock: one thread runs the factory, the others wait and then read the same value.</li>
<li>So the factory ran once (<code>created=1</code>) and every thread saw the same object (<code>distinct=1</code>).</li>
<li>This is exactly what the naive null-check singleton cannot promise.</li>
</ul>`,
        hi: `<ul>
<li>पचास parallel iterations लगभग एक ही समय पर <code>lazy.Value</code> माँगते हैं।</li>
<li>Default mode (ExecutionAndPublication) lock लेता है: एक thread factory चलाता है, बाकी इंतज़ार करके वही value पढ़ते हैं।</li>
<li>इसलिए factory एक बार चली (<code>created=1</code>) और हर thread को वही object दिखा (<code>distinct=1</code>)।</li>
<li>यही वह चीज़ है जिसका वादा naive null-check singleton नहीं कर सकता।</li>
</ul>`,
        hg: `<ul>
<li>Pachaas parallel iterations lagbhag ek hi samay par <code>lazy.Value</code> maangte hain.</li>
<li>Default mode (ExecutionAndPublication) lock leta hai: ek thread factory chalata hai, baaki intezaar karke wahi value padhte hain.</li>
<li>Isliye factory ek baar chali (<code>created=1</code>) aur har thread ko wahi object dikha (<code>distinct=1</code>).</li>
<li>Yehi woh cheez hai jiska waada naive null-check singleton nahi kar sakta.</li>
</ul>`
      }
    },
    {
      id: "di-lifetime-identity",
      packages: ["Microsoft.Extensions.DependencyInjection"],
      src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddSingleton<AppCache>();
services.AddScoped<Basket>();
services.AddTransient<Job>();

using var root = services.BuildServiceProvider();
using var scope1 = root.CreateScope();
using var scope2 = root.CreateScope();

Console.WriteLine($"singleton same: {ReferenceEquals(scope1.ServiceProvider.GetRequiredService<AppCache>(), scope2.ServiceProvider.GetRequiredService<AppCache>())}");
Console.WriteLine($"scoped same in one scope: {ReferenceEquals(scope1.ServiceProvider.GetRequiredService<Basket>(), scope1.ServiceProvider.GetRequiredService<Basket>())}");
Console.WriteLine($"scoped same across scopes: {ReferenceEquals(scope1.ServiceProvider.GetRequiredService<Basket>(), scope2.ServiceProvider.GetRequiredService<Basket>())}");
Console.WriteLine($"transient same: {ReferenceEquals(scope1.ServiceProvider.GetRequiredService<Job>(), scope1.ServiceProvider.GetRequiredService<Job>())}");

class AppCache { }
class Basket { }
class Job { }`,
      answer: `singleton same: True
scoped same in one scope: True
scoped same across scopes: False
transient same: False`,
      explain: {
        en: `<ul>
<li><b>Singleton</b>: one instance for the whole container, even across scopes — True.</li>
<li><b>Scoped</b>: one instance per scope (per HTTP request in ASP.NET Core) — True inside one scope, False across two scopes.</li>
<li><b>Transient</b>: a new instance on every resolve — False.</li>
<li>Link to today: <code>AddSingleton</code> is the DI version of the Singleton pattern; Day 11 covers lifetimes and the captive-dependency trap.</li>
</ul>`,
        hi: `<ul>
<li><b>Singleton</b>: पूरे container के लिए एक instance, scopes के पार भी — True।</li>
<li><b>Scoped</b>: हर scope (ASP.NET Core में हर HTTP request) के लिए एक instance — एक scope में True, दो scopes में False।</li>
<li><b>Transient</b>: हर resolve पर नया instance — False।</li>
<li>आज से जुड़ाव: <code>AddSingleton</code> Singleton pattern का DI version है; lifetimes और captive-dependency जाल Day 11 में हैं।</li>
</ul>`,
        hg: `<ul>
<li><b>Singleton</b>: poore container ke liye ek instance, scopes ke paar bhi — True.</li>
<li><b>Scoped</b>: har scope (ASP.NET Core mein har HTTP request) ke liye ek instance — ek scope mein True, do scopes mein False.</li>
<li><b>Transient</b>: har resolve par naya instance — False.</li>
<li>Aaj se judaav: <code>AddSingleton</code> Singleton pattern ka DI version hai; lifetimes aur captive-dependency jaal Day 11 mein hain.</li>
</ul>`
      }
    },
    {
      id: "builder-reuse-shared-list",
      src: `var builder = new PizzaBuilder();
var first = builder.AddTopping("onion").Build();
var second = builder.AddTopping("corn").Build();

Console.WriteLine(first.Toppings.Count);
Console.WriteLine(second.Toppings.Count);
Console.WriteLine(ReferenceEquals(first.Toppings, second.Toppings));

class Pizza(List<string> toppings)
{
    public List<string> Toppings { get; } = toppings;
}

class PizzaBuilder
{
    private readonly List<string> _toppings = new();

    public PizzaBuilder AddTopping(string name)
    {
        _toppings.Add(name);
        return this;
    }

    public Pizza Build() => new Pizza(_toppings);
}`,
      answer: `2
2
True`,
      explain: {
        en: `<ul>
<li><code>Build()</code> passes the builder's own list to the product — no copy.</li>
<li>So <code>first</code> and <code>second</code> hold the <i>same</i> list; adding "corn" later also changed the first pizza.</li>
<li>Both counts are 2 and <code>ReferenceEquals</code> is True.</li>
<li>Fix: return a copy (<code>new List&lt;string&gt;(_toppings)</code> or <code>ToArray()</code>), or expose <code>IReadOnlyList&lt;T&gt;</code> over a copied array so the product is truly immutable.</li>
</ul>`,
        hi: `<ul>
<li><code>Build()</code> builder की अपनी list ही product को दे देता है — copy नहीं।</li>
<li>इसलिए <code>first</code> और <code>second</code> में <i>एक ही</i> list है; बाद में "corn" जोड़ने से पहली pizza भी बदल गई।</li>
<li>दोनों counts 2 हैं और <code>ReferenceEquals</code> True है।</li>
<li>Fix: copy लौटाओ (<code>new List&lt;string&gt;(_toppings)</code> या <code>ToArray()</code>), या copy किए array पर <code>IReadOnlyList&lt;T&gt;</code> दो ताकि product सच में immutable हो।</li>
</ul>`,
        hg: `<ul>
<li><code>Build()</code> builder ki apni list hi product ko de deta hai — copy nahi.</li>
<li>Isliye <code>first</code> aur <code>second</code> mein <i>ek hi</i> list hai; baad mein "corn" jodne se pehli pizza bhi badal gayi.</li>
<li>Dono counts 2 hain aur <code>ReferenceEquals</code> True hai.</li>
<li>Fix: copy lautao (<code>new List&lt;string&gt;(_toppings)</code> ya <code>ToArray()</code>), ya copy kiye array par <code>IReadOnlyList&lt;T&gt;</code> do taaki product sach mein immutable ho.</li>
</ul>`
      }
    },
    {
      id: "keyed-services-identity",
      packages: ["Microsoft.Extensions.DependencyInjection"],
      src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddKeyedSingleton<IGreeter, EnglishGreeter>("en");
services.AddKeyedSingleton<IGreeter, HindiGreeter>("hi");
services.AddKeyedTransient<IGreeter, HindiGreeter>("hi-new");

using var sp = services.BuildServiceProvider();

Console.WriteLine(sp.GetRequiredKeyedService<IGreeter>("en").Greet());
Console.WriteLine(sp.GetRequiredKeyedService<IGreeter>("hi").Greet());
Console.WriteLine(ReferenceEquals(sp.GetRequiredKeyedService<IGreeter>("hi"), sp.GetRequiredKeyedService<IGreeter>("hi")));
Console.WriteLine(ReferenceEquals(sp.GetRequiredKeyedService<IGreeter>("hi-new"), sp.GetRequiredKeyedService<IGreeter>("hi-new")));
Console.WriteLine(sp.GetKeyedService<IGreeter>("fr") is null);

interface IGreeter { string Greet(); }
class EnglishGreeter : IGreeter { public string Greet() => "Hello"; }
class HindiGreeter : IGreeter { public string Greet() => "Namaste"; }`,
      answer: `Hello
Namaste
True
False
True`,
      explain: {
        en: `<ul>
<li>Each key selects its own registration: "en" gives <code>EnglishGreeter</code>, "hi" gives <code>HindiGreeter</code>.</li>
<li>Lifetime still applies per key: "hi" is a singleton so two lookups return the same object (True); "hi-new" is transient so each lookup is new (False).</li>
<li>An unknown key with <code>GetKeyedService</code> returns <code>null</code> (True); <code>GetRequiredKeyedService</code> would throw.</li>
<li>This is the .NET 8 way to "pick an implementation by name" without a hand-written factory.</li>
</ul>`,
        hi: `<ul>
<li>हर key अपनी registration चुनती है: "en" से <code>EnglishGreeter</code>, "hi" से <code>HindiGreeter</code>।</li>
<li>Lifetime हर key पर लागू रहती है: "hi" singleton है इसलिए दो lookups एक ही object देते हैं (True); "hi-new" transient है इसलिए हर lookup नया (False)।</li>
<li>अनजान key पर <code>GetKeyedService</code> <code>null</code> लौटाता है (True); <code>GetRequiredKeyedService</code> throw करता।</li>
<li>बिना hand-written factory के "नाम से implementation चुनने" का यह .NET 8 तरीका है।</li>
</ul>`,
        hg: `<ul>
<li>Har key apni registration chunti hai: "en" se <code>EnglishGreeter</code>, "hi" se <code>HindiGreeter</code>.</li>
<li>Lifetime har key par lagu rehti hai: "hi" singleton hai isliye do lookups ek hi object dete hain (True); "hi-new" transient hai isliye har lookup naya (False).</li>
<li>Anjaan key par <code>GetKeyedService</code> <code>null</code> lautata hai (True); <code>GetRequiredKeyedService</code> throw karta.</li>
<li>Bina hand-written factory ke "naam se implementation chunne" ka yeh .NET 8 tareeka hai.</li>
</ul>`
      }
    }
  ],
  revision: {
    en: [
      "<b>Creational patterns</b> hide <code>new</code> behind a name so callers depend on abstractions; the DI container is the modern default.",
      "<b>Singleton</b> = one instance plus a global access point; the risk is hidden mutable global state.",
      "Simplest thread-safe singleton: a <code>static readonly</code> field or property initialiser.",
      "<code>Lazy&lt;T&gt;</code> defers expensive creation until the first <code>.Value</code>.",
      "A static class is a bag of statics; a singleton is an object you can inject, fake and dispose.",
      "In ASP.NET Core use <code>AddSingleton</code> instead of a hand-written <code>Instance</code> (Day 8 DIP).",
      "<b>Factory Method</b>: a subclass picks one product. <b>Abstract Factory</b>: one factory creates a matching family.",
      "<b>Simple Factory</b> is a static switch, not a GoF pattern; adding a case edits the method.",
      "<b>Builder</b>: step by step, then <code>Build()</code> validates and returns an immutable product.",
      "<b>Prototype</b>: a record <code>with</code> makes a shallow copy; avoid <code>ICloneable</code>.",
      "Pick an implementation at runtime with keyed services or a registered <code>Func&lt;string, T&gt;</code>, not <code>IServiceProvider</code> in business code.",
      "Add a factory only when it makes a likely change cheaper; one implementation and one caller needs none."
    ],
    meaning: {
      hi: [
        "<b>Creational patterns</b> <code>new</code> को नाम के पीछे छुपाते हैं ताकि callers abstractions पर depend करें; DI container आज का default है।",
        "<b>Singleton</b> = एक instance + एक global access point; ख़तरा छुपा mutable global state है।",
        "सबसे आसान thread-safe singleton: <code>static readonly</code> field या property initialiser।",
        "<code>Lazy&lt;T&gt;</code> पहले <code>.Value</code> तक महँगी creation टालता है।",
        "Static class statics का थैला है; singleton ऐसा object है जिसे inject, fake और dispose कर सकते हैं।",
        "ASP.NET Core में hand-written <code>Instance</code> की जगह <code>AddSingleton</code> लो (Day 8 DIP)।",
        "<b>Factory Method</b>: subclass एक product चुनती है। <b>Abstract Factory</b>: एक factory मेल खाता family बनाती है।",
        "<b>Simple Factory</b> static switch है, GoF pattern नहीं; case जोड़ने पर method बदलता है।",
        "<b>Builder</b>: step by step, फिर <code>Build()</code> validate करके immutable product लौटाता है।",
        "<b>Prototype</b>: record का <code>with</code> shallow copy बनाता है; <code>ICloneable</code> से बचो।",
        "Runtime पर implementation keyed services या register किए <code>Func&lt;string, T&gt;</code> से चुनो, business code में <code>IServiceProvider</code> से नहीं।",
        "Factory तभी जोड़ो जब वह संभावित बदलाव सस्ता करे; एक implementation और एक caller को ज़रूरत नहीं।"
      ],
      hg: [
        "<b>Creational patterns</b> <code>new</code> ko naam ke peeche chhupate hain taaki callers abstractions par depend karein; DI container aaj ka default hai.",
        "<b>Singleton</b> = ek instance + ek global access point; khatra chhupa mutable global state hai.",
        "Sabse aasan thread-safe singleton: <code>static readonly</code> field ya property initialiser.",
        "<code>Lazy&lt;T&gt;</code> pehle <code>.Value</code> tak mehngi creation taalta hai.",
        "Static class statics ka thaila hai; singleton aisa object hai jise inject, fake aur dispose kar sakte hain.",
        "ASP.NET Core mein hand-written <code>Instance</code> ki jagah <code>AddSingleton</code> lo (Day 8 DIP).",
        "<b>Factory Method</b>: subclass ek product chunti hai. <b>Abstract Factory</b>: ek factory match karta family banati hai.",
        "<b>Simple Factory</b> static switch hai, GoF pattern nahi; case jodne par method badalta hai.",
        "<b>Builder</b>: step by step, phir <code>Build()</code> validate karke immutable product lautata hai.",
        "<b>Prototype</b>: record ka <code>with</code> shallow copy banata hai; <code>ICloneable</code> se bacho.",
        "Runtime par implementation keyed services ya register kiye <code>Func&lt;string, T&gt;</code> se chuno, business code mein <code>IServiceProvider</code> se nahi.",
        "Factory tabhi jodo jab woh sambhavit badlaav sasta kare; ek implementation aur ek caller ko zaroorat nahi."
      ]
    }
  }
};
