// Day 10 — Structural + Behavioral Design Patterns. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 10,
  title: {
    en: "Structural + Behavioral Patterns",
    hi: "Structural + Behavioral Patterns (जोड़ने और व्यवहार वाले patterns)",
    hg: "Structural + Behavioral Patterns (jodne aur vyavhaar wale patterns)"
  },
  summary: {
    en: `<p>Day 9 was about <b>who creates</b> objects. Today is about <b>how objects are connected</b> (structural) and <b>how they talk to each other</b> (behavioral). Eight patterns sound like a lot, but you already use most of them in .NET every day — the goal is to know the name, the one-line intent, and the interview distinctions.</p>
<ul>
<li><b>Adapter</b>: make an incompatible class fit the interface you want (wrap a third-party SDK behind your own interface).</li>
<li><b>Decorator</b>: wrap an object with the <i>same</i> interface to add behaviour (logging, caching). <code>GZipStream</code> wrapping a stream is the classic .NET example.</li>
<li><b>Facade</b>: one simple entry point over several subsystems.</li>
<li><b>Proxy</b>: a stand-in with the <i>same</i> interface that <i>controls access</i> (lazy, security, remote). EF Core lazy-loading proxies are one.</li>
<li><b>Strategy</b>: swap an algorithm at runtime behind an interface (or a delegate). With DI, keyed services pick the strategy.</li>
<li><b>Observer</b>: a subject notifies many subscribers. In C# these are <code>event</code>s and <code>IObservable&lt;T&gt;</code>.</li>
<li><b>Mediator</b>: components talk to one hub instead of to each other.</li>
<li><b>Chain of Responsibility</b>: a request travels through handlers; each may handle it, change it or stop it. ASP.NET Core middleware and <code>DelegatingHandler</code> work like this.</li>
<li><b>Interview favourites</b>: Decorator vs Proxy vs Adapter (same shape, different intent), Strategy vs State, Observer vs Mediator, Chain vs Decorator.</li>
<li><b>TL angle</b>: patterns are a shared vocabulary for code reviews. Name the pattern, say the trade-off, and do not add one before the pain shows up.</li>
</ul>`,
    hi: `<p>Day 9 में बात थी कि object <b>कौन बनाता है</b>। आज बात है कि objects <b>आपस में कैसे जुड़ते हैं</b> (structural) और <b>कैसे बात करते हैं</b> (behavioral)। आठ patterns ज़्यादा लगते हैं, पर इनमें से ज़्यादातर आप रोज़ .NET में use करते हो — मक़सद है नाम, एक line का intent और interview वाले फ़र्क़ याद रखना।</p>
<ul>
<li><b>Adapter</b>: बेमेल class को अपने चाहे interface में फ़िट करना (third-party SDK को अपने interface के पीछे wrap करना)।</li>
<li><b>Decorator</b>: <i>वही</i> interface वाला wrapper जो behaviour जोड़ता है (logging, caching)। <code>GZipStream</code> का stream को wrap करना classic .NET example है।</li>
<li><b>Facade</b>: कई subsystems के ऊपर एक आसान entry point।</li>
<li><b>Proxy</b>: <i>वही</i> interface वाला stand-in जो <i>access control</i> करता है (lazy, security, remote)। EF Core के lazy-loading proxies इसका उदाहरण हैं।</li>
<li><b>Strategy</b>: algorithm को runtime पर interface (या delegate) के पीछे बदलना। DI में keyed services strategy चुनती हैं।</li>
<li><b>Observer</b>: एक subject कई subscribers को बताता है। C# में ये <code>event</code> और <code>IObservable&lt;T&gt;</code> हैं।</li>
<li><b>Mediator</b>: components आपस में नहीं, एक hub से बात करते हैं।</li>
<li><b>Chain of Responsibility</b>: request handlers की कतार से गुज़रती है; हर handler उसे संभाल सकता है, बदल सकता है या रोक सकता है। ASP.NET Core middleware और <code>DelegatingHandler</code> ऐसे ही चलते हैं।</li>
<li><b>Interview favourites</b>: Decorator vs Proxy vs Adapter (shape एक, intent अलग), Strategy vs State, Observer vs Mediator, Chain vs Decorator।</li>
<li><b>TL angle</b>: patterns code review की साझा भाषा हैं। pattern का नाम लो, trade-off बताओ, और दर्द दिखने से पहले pattern मत जोड़ो।</li>
</ul>`,
    hg: `<p>Day 9 mein baat thi ki object <b>kaun banata hai</b>. Aaj baat hai ki objects <b>aapas mein kaise jude hote hain</b> (structural) aur <b>kaise baat karte hain</b> (behavioral). Aath patterns zyada lagte hain, par inmein se zyadatar aap roz .NET mein use karte ho — maksad hai naam, ek line ka intent aur interview wale farq yaad rakhna.</p>
<ul>
<li><b>Adapter</b>: bemel class ko apne chahe interface mein fit karna (third-party SDK ko apne interface ke peeche wrap karna).</li>
<li><b>Decorator</b>: <i>wahi</i> interface wala wrapper jo behaviour jodta hai (logging, caching). <code>GZipStream</code> ka stream ko wrap karna classic .NET example hai.</li>
<li><b>Facade</b>: kai subsystems ke upar ek aasan entry point.</li>
<li><b>Proxy</b>: <i>wahi</i> interface wala stand-in jo <i>access control</i> karta hai (lazy, security, remote). EF Core ke lazy-loading proxies iska udaharan hain.</li>
<li><b>Strategy</b>: algorithm ko runtime par interface (ya delegate) ke peeche badalna. DI mein keyed services strategy chunti hain.</li>
<li><b>Observer</b>: ek subject kai subscribers ko batata hai. C# mein ye <code>event</code> aur <code>IObservable&lt;T&gt;</code> hain.</li>
<li><b>Mediator</b>: components aapas mein nahi, ek hub se baat karte hain.</li>
<li><b>Chain of Responsibility</b>: request handlers ki katar se guzarti hai; har handler use sambhal sakta hai, badal sakta hai ya rok sakta hai. ASP.NET Core middleware aur <code>DelegatingHandler</code> aise hi chalte hain.</li>
<li><b>Interview favourites</b>: Decorator vs Proxy vs Adapter (shape ek, intent alag), Strategy vs State, Observer vs Mediator, Chain vs Decorator.</li>
<li><b>TL angle</b>: patterns code review ki saajhi bhasha hain. Pattern ka naam lo, trade-off batao, aur dard dikhne se pehle pattern mat jodo.</li>
</ul>`
  },
  sections: [
    {
      id: "structural-overview",
      depth: "short",
      title: {
        en: "Structural patterns: Adapter, Decorator, Facade, Proxy",
        hi: "Structural patterns (जोड़ने वाले): Adapter, Decorator, Facade, Proxy",
        hg: "Structural patterns: Adapter, Decorator, Facade, Proxy"
      },
      body: {
        en: `<p><b>Analogy — travel plug adapter, phone case, reception desk, security guard:</b> a <b>plug adapter</b> lets your Indian charger fit a foreign socket (Adapter). A <b>phone case</b> with a card slot is still a phone but does more (Decorator). A hotel <b>reception desk</b> is one counter instead of calling housekeeping, kitchen and cab separately (Facade). A <b>society gate guard</b> stands in front of the building and decides who enters (Proxy).</p>
<ul>
<li><b>Adapter</b> — intent: <i>convert one interface into the one the client expects.</i> The interface <b>changes</b>.</li>
<li><b>Decorator</b> — intent: <i>add behaviour by wrapping, keeping the same interface.</i> Stackable: logging around caching around the real thing.</li>
<li><b>Facade</b> — intent: <i>one simple interface over a complex subsystem.</i> A <b>new, simpler</b> interface; the subsystem stays reachable.</li>
<li><b>Proxy</b> — intent: <i>control access to an object through a stand-in with the same interface.</i> The proxy decides <b>whether and when</b> the real object is used.</li>
<li><b>The big three look alike</b> (a wrapper holding a reference). Tell them apart by intent: Adapter changes the interface, Decorator adds behaviour, Proxy controls access.</li>
<li><b>In .NET:</b> <code>BufferedStream</code>, <code>GZipStream</code>, <code>CryptoStream</code> wrap another <code>Stream</code> (Decorator); EF Core lazy-loading proxies and <code>DispatchProxy</code> (Proxy); wrapping a vendor SDK behind your interface (Adapter).</li>
<li><b>TL angle:</b> Adapter is the pattern that protects your domain from third-party churn.</li>
</ul>
<p><b>When to use / when not:</b> use these when the need is real — a vendor API you cannot change (Adapter), a cross-cutting concern you want out of business code (Decorator), a noisy subsystem (Facade), expensive or restricted access (Proxy). Do not wrap something just in case; each wrapper is one more class to read and debug.</p>`,
        hi: `<p><b>Analogy — travel plug adapter, phone case, reception desk, gate guard:</b> <b>plug adapter</b> आपके Indian charger को विदेशी socket में फ़िट कर देता है (Adapter)। card slot वाला <b>phone case</b> है तो phone ही, पर ज़्यादा काम करता है (Decorator)। hotel का <b>reception desk</b> एक counter है, housekeeping, kitchen और cab को अलग-अलग फ़ोन करने की जगह (Facade)। <b>society का gate guard</b> building के सामने खड़ा होकर तय करता है कि कौन अंदर जाए (Proxy)।</p>
<ul>
<li><b>Adapter</b> — intent: <i>एक interface को वह बना दो जो client चाहता है।</i> Interface <b>बदलता</b> है।</li>
<li><b>Decorator</b> — intent: <i>wrap करके behaviour जोड़ो, interface वही रखो।</i> Stack हो सकता है: caching के ऊपर logging, उसके नीचे असली object।</li>
<li><b>Facade</b> — intent: <i>जटिल subsystem के ऊपर एक आसान interface।</i> <b>नया, सरल</b> interface; subsystem तक पहुँच बनी रहती है।</li>
<li><b>Proxy</b> — intent: <i>उसी interface वाले stand-in से object का access control करो।</i> Proxy तय करता है कि असली object <b>कब और use होगा या नहीं</b>।</li>
<li><b>तीनों की शक्ल एक जैसी</b> है (reference पकड़े wrapper)। फ़र्क़ intent से करो: Adapter interface बदलता है, Decorator behaviour जोड़ता है, Proxy access control करता है।</li>
<li><b>.NET में:</b> <code>BufferedStream</code>, <code>GZipStream</code>, <code>CryptoStream</code> दूसरे <code>Stream</code> को wrap करते हैं (Decorator); EF Core lazy-loading proxies और <code>DispatchProxy</code> (Proxy); vendor SDK को अपने interface के पीछे wrap करना (Adapter)।</li>
<li><b>TL angle:</b> Adapter वह pattern है जो आपके domain को third-party बदलावों से बचाता है।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> जब ज़रूरत सच में हो — vendor API जो आप बदल नहीं सकते (Adapter), business code से बाहर रखना चाहते cross-cutting concern (Decorator), शोर वाला subsystem (Facade), महँगा या restricted access (Proxy)। "शायद काम आए" सोचकर wrap मत करो; हर wrapper एक और class है जिसे पढ़ना और debug करना पड़ता है।</p>`,
        hg: `<p><b>Analogy — travel plug adapter, phone case, reception desk, gate guard:</b> <b>plug adapter</b> aapke Indian charger ko videshi socket mein fit kar deta hai (Adapter). card slot wala <b>phone case</b> hai to phone hi, par zyada kaam karta hai (Decorator). hotel ka <b>reception desk</b> ek counter hai, housekeeping, kitchen aur cab ko alag-alag phone karne ki jagah (Facade). <b>society ka gate guard</b> building ke saamne khade hokar tay karta hai ki kaun andar jaye (Proxy).</p>
<ul>
<li><b>Adapter</b> — intent: <i>ek interface ko woh bana do jo client chahta hai.</i> Interface <b>badalta</b> hai.</li>
<li><b>Decorator</b> — intent: <i>wrap karke behaviour jodo, interface wahi rakho.</i> Stack ho sakta hai: caching ke upar logging, uske neeche asli object.</li>
<li><b>Facade</b> — intent: <i>jatil subsystem ke upar ek aasan interface.</i> <b>Naya, saral</b> interface; subsystem tak pahunch bani rehti hai.</li>
<li><b>Proxy</b> — intent: <i>usi interface wale stand-in se object ka access control karo.</i> Proxy tay karta hai ki asli object <b>kab aur use hoga ya nahi</b>.</li>
<li><b>Teeno ki shakl ek jaisi</b> hai (reference pakde wrapper). Farq intent se karo: Adapter interface badalta hai, Decorator behaviour jodta hai, Proxy access control karta hai.</li>
<li><b>.NET mein:</b> <code>BufferedStream</code>, <code>GZipStream</code>, <code>CryptoStream</code> doosre <code>Stream</code> ko wrap karte hain (Decorator); EF Core lazy-loading proxies aur <code>DispatchProxy</code> (Proxy); vendor SDK ko apne interface ke peeche wrap karna (Adapter).</li>
<li><b>TL angle:</b> Adapter woh pattern hai jo aapke domain ko third-party badlavon se bachata hai.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> jab zarurat sach mein ho — vendor API jo aap badal nahi sakte (Adapter), business code se bahar rakhna chahte cross-cutting concern (Decorator), shor wala subsystem (Facade), mehnga ya restricted access (Proxy). "Shayad kaam aaye" soch kar wrap mat karo; har wrapper ek aur class hai jise padhna aur debug karna padta hai.</p>`
      }
    },
    {
      id: "behavioral-overview",
      depth: "short",
      title: {
        en: "Behavioral patterns: Strategy, Observer, Mediator, Chain of Responsibility",
        hi: "Behavioral patterns (व्यवहार वाले): Strategy, Observer, Mediator, Chain of Responsibility",
        hg: "Behavioral patterns: Strategy, Observer, Mediator, Chain of Responsibility"
      },
      body: {
        en: `<p><b>Analogy — Google Maps route, WhatsApp group, control tower, office approvals:</b> <b>Strategy</b> = pick a route option (fastest, avoid tolls); same trip, swappable algorithm. <b>Observer</b> = a WhatsApp group: one message goes to every member who joined. <b>Mediator</b> = the control tower: planes talk to the tower, not to each other. <b>Chain of Responsibility</b> = a leave or expense approval: team lead, then manager, then director — the first one with authority decides.</p>
<ul>
<li><b>Strategy</b> — <i>make algorithms interchangeable behind one interface.</i> The client (or DI) picks which. In C# it can be an interface or just a <code>Func&lt;,&gt;</code> delegate.</li>
<li><b>Observer</b> — <i>one subject, many subscribers, loosely coupled.</i> The subject does not know who listens. C#: <code>event</code> (Day 2) and <code>IObservable&lt;T&gt;</code>/<code>IObserver&lt;T&gt;</code>.</li>
<li><b>Mediator</b> — <i>centralise how a set of objects interact</i> so they do not reference each other. Many-to-many becomes many-to-one-to-many.</li>
<li><b>Chain of Responsibility</b> — <i>pass a request along handlers until one handles it (or all get a turn).</i> Each handler can stop the chain. ASP.NET Core middleware (Day 12) and <code>HttpClient</code> <code>DelegatingHandler</code>s are chains.</li>
<li><b>Distinctions:</b> Strategy vs State — the <i>client</i> picks a strategy; a State object changes <i>itself</i> as the context moves through states. Observer vs Mediator — Observer is one-to-many broadcast; Mediator is a coordinating hub. Chain vs Decorator — a chain link may stop the request; a decorator normally always delegates and adds to it.</li>
<li><b>TL angle:</b> many "if/else on type" smells are a Strategy waiting to happen, and much hand-rolled event wiring is an Observer — name it in the review.</li>
</ul>
<p><b>When to use / when not:</b> use Strategy when behaviour varies and keeps growing, Observer for one-to-many notification, Mediator when many components are tangled, Chain when the handler is decided at runtime. Do not use any of them for two stable branches of an <code>if</code>, one subscriber, or a handful of classes that talk simply.</p>`,
        hi: `<p><b>Analogy — Google Maps route, WhatsApp group, control tower, office approval:</b> <b>Strategy</b> = route option चुनना (fastest, toll से बचो); सफ़र वही, algorithm बदलने लायक। <b>Observer</b> = WhatsApp group: एक message हर join किए member तक जाता है। <b>Mediator</b> = control tower: planes tower से बात करते हैं, आपस में नहीं। <b>Chain of Responsibility</b> = leave या expense approval: team lead, फिर manager, फिर director — जिसके पास authority हो, वह तय करता है।</p>
<ul>
<li><b>Strategy</b> — <i>algorithms को एक interface के पीछे बदलने लायक बनाओ।</i> कौन सा चलेगा, यह client (या DI) चुनता है। C# में interface या सिर्फ़ <code>Func&lt;,&gt;</code> delegate भी चलता है।</li>
<li><b>Observer</b> — <i>एक subject, कई subscribers, ढीला coupling।</i> Subject को पता नहीं कौन सुन रहा है। C#: <code>event</code> (Day 2) और <code>IObservable&lt;T&gt;</code>/<code>IObserver&lt;T&gt;</code>।</li>
<li><b>Mediator</b> — <i>objects की आपसी बातचीत का तरीक़ा एक जगह रखो</i> ताकि वे एक-दूसरे को reference न करें। many-to-many की जगह many-to-one-to-many।</li>
<li><b>Chain of Responsibility</b> — <i>request को handlers में आगे बढ़ाओ जब तक कोई संभाल न ले (या सबको मौक़ा मिल जाए)।</i> हर handler chain रोक सकता है। ASP.NET Core middleware (Day 12) और <code>HttpClient</code> के <code>DelegatingHandler</code> chains हैं।</li>
<li><b>फ़र्क़:</b> Strategy vs State — strategy <i>client</i> चुनता है; State object context के states बदलने के साथ <i>खुद</i> बदलता है। Observer vs Mediator — Observer one-to-many broadcast है; Mediator coordinating hub है। Chain vs Decorator — chain का link request रोक सकता है; decorator आम तौर पर हमेशा आगे देता है और उसमें जोड़ता है।</li>
<li><b>TL angle:</b> type पर "if/else" वाली कई smells Strategy बनने का इंतज़ार कर रही हैं, और हाथ से जोड़ी बहुत सी event wiring Observer है — review में नाम बोलो।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> behaviour बदलता और बढ़ता हो तो Strategy, one-to-many notification के लिए Observer, कई components उलझे हों तो Mediator, handler runtime पर तय होना हो तो Chain। <code>if</code> की दो स्थिर branches, एक subscriber, या सीधी बात करने वाली मुट्ठी भर classes के लिए इनमें से कोई मत लो।</p>`,
        hg: `<p><b>Analogy — Google Maps route, WhatsApp group, control tower, office approval:</b> <b>Strategy</b> = route option chunna (fastest, toll se bacho); safar wahi, algorithm badalne layak. <b>Observer</b> = WhatsApp group: ek message har join kiye member tak jata hai. <b>Mediator</b> = control tower: planes tower se baat karte hain, aapas mein nahi. <b>Chain of Responsibility</b> = leave ya expense approval: team lead, phir manager, phir director — jiske paas authority ho, woh tay karta hai.</p>
<ul>
<li><b>Strategy</b> — <i>algorithms ko ek interface ke peeche badalne layak banao.</i> Kaun sa chalega, yeh client (ya DI) chunta hai. C# mein interface ya sirf <code>Func&lt;,&gt;</code> delegate bhi chalta hai.</li>
<li><b>Observer</b> — <i>ek subject, kai subscribers, dhila coupling.</i> Subject ko pata nahi kaun sun raha hai. C#: <code>event</code> (Day 2) aur <code>IObservable&lt;T&gt;</code>/<code>IObserver&lt;T&gt;</code>.</li>
<li><b>Mediator</b> — <i>objects ki aapsi baatchit ka tarika ek jagah rakho</i> taaki woh ek-doosre ko reference na karein. many-to-many ki jagah many-to-one-to-many.</li>
<li><b>Chain of Responsibility</b> — <i>request ko handlers mein aage badhao jab tak koi sambhal na le (ya sabko mauka mil jaye).</i> Har handler chain rok sakta hai. ASP.NET Core middleware (Day 12) aur <code>HttpClient</code> ke <code>DelegatingHandler</code> chains hain.</li>
<li><b>Farq:</b> Strategy vs State — strategy <i>client</i> chunta hai; State object context ke states badalne ke saath <i>khud</i> badalta hai. Observer vs Mediator — Observer one-to-many broadcast hai; Mediator coordinating hub hai. Chain vs Decorator — chain ka link request rok sakta hai; decorator aam taur par hamesha aage deta hai aur usme jodta hai.</li>
<li><b>TL angle:</b> type par "if/else" wali kai smells Strategy banne ka intezaar kar rahi hain, aur haath se jodi bahut si event wiring Observer hai — review mein naam bolo.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> behaviour badalta aur badhta ho to Strategy, one-to-many notification ke liye Observer, kai components uljhe hon to Mediator, handler runtime par tay hona ho to Chain. <code>if</code> ki do sthir branches, ek subscriber, ya seedhi baat karne wali mutthi bhar classes ke liye inmein se koi mat lo.</p>`
      }
    },
    {
      id: "adapter-facade-code",
      depth: "detailed",
      title: {
        en: "Adapter and Facade in code",
        hi: "Adapter और Facade code में",
        hg: "Adapter aur Facade code mein"
      },
      body: {
        en: `<p><b>Analogy:</b> an <b>Adapter</b> is the plug converter in your travel bag — the socket and the charger both stay as they are. A <b>Facade</b> is the hotel reception: you say "airport cab at 6" once, and reception talks to the driver, billing and the front gate for you.</p>
<ul>
<li><b>Adapter — intent:</b> make a class you cannot change fit the interface your code wants. Implement <b>your</b> interface, hold the vendor object, translate the calls (names, parameter shapes, error codes).</li>
<li><b>Facade — intent:</b> give callers one simple method instead of the right sequence of several subsystem calls. The subsystems stay public for people who need full control.</li>
<li><b>Adapter vs Facade:</b> Adapter makes <i>one</i> thing fit a <i>given</i> interface. Facade <i>designs a new, simpler</i> interface over <i>many</i> things.</li>
<li><b>Real .NET:</b> wrapping a payment, SMS or cloud SDK behind your own interface is an Adapter — it also keeps vendor types out of your domain. <code>ILogger</code> feels like a Facade: one <code>Log</code> call hides several logging providers. An application service that runs "reserve stock, charge, notify" in one method is a Facade.</li>
<li><b>TL angle:</b> put the Adapter at the boundary (Infrastructure layer) so a vendor change touches one class; unit tests use a fake of your interface. Watch Facades growing into <b>god classes</b> that hold business rules — a Facade should coordinate, not decide.</li>
</ul>
<p><b>When to use / when not:</b> use an Adapter when a vendor or legacy API shape does not match your code, and a Facade when callers keep repeating the same multi-step sequence. Do not adapt a class you own (just change it), and do not add a Facade over a single class or hide a subsystem others legitimately need.</p>`,
        hi: `<p><b>Analogy:</b> <b>Adapter</b> आपके travel bag का plug converter है — socket और charger दोनों जैसे हैं वैसे रहते हैं। <b>Facade</b> hotel का reception है: आप एक बार बोलते हो "सुबह 6 बजे airport cab", और reception driver, billing और gate से बात कर लेता है।</p>
<ul>
<li><b>Adapter — intent:</b> जो class आप बदल नहीं सकते उसे अपने code के चाहे interface में फ़िट करना। <b>अपना</b> interface implement करो, vendor object पकड़ो, calls translate करो (नाम, parameter shape, error codes)।</li>
<li><b>Facade — intent:</b> कई subsystem calls के सही क्रम की जगह caller को एक आसान method देना। जिन्हें पूरा control चाहिए उनके लिए subsystems public रहते हैं।</li>
<li><b>Adapter vs Facade:</b> Adapter <i>एक</i> चीज़ को <i>दिए हुए</i> interface में फ़िट करता है। Facade <i>कई</i> चीज़ों के ऊपर <i>नया, सरल</i> interface बनाता है।</li>
<li><b>Real .NET:</b> payment, SMS या cloud SDK को अपने interface के पीछे wrap करना Adapter है — इससे vendor types आपके domain से बाहर रहते हैं। <code>ILogger</code> Facade जैसा लगता है: एक <code>Log</code> call के पीछे कई logging providers। जो application service एक method में "stock reserve, charge, notify" चलाती है वह Facade है।</li>
<li><b>TL angle:</b> Adapter को boundary (Infrastructure layer) पर रखो ताकि vendor बदलने पर एक class छुए; unit tests आपके interface का fake लेते हैं। Facade के <b>god class</b> बन जाने से सावधान रहो जिसमें business rules भर जाएँ — Facade coordinate करे, फ़ैसले न ले।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> vendor या legacy API की shape आपके code से न मिले तो Adapter; callers बार-बार वही multi-step sequence दोहराएँ तो Facade। जो class आपकी अपनी है उसे Adapter मत करो (सीधे बदलो), और एक class के ऊपर Facade या ऐसा subsystem छुपाना जो दूसरों को सच में चाहिए — मत करो।</p>`,
        hg: `<p><b>Analogy:</b> <b>Adapter</b> aapke travel bag ka plug converter hai — socket aur charger dono jaise hain waise rehte hain. <b>Facade</b> hotel ka reception hai: aap ek baar bolte ho "subah 6 baje airport cab", aur reception driver, billing aur gate se baat kar leta hai.</p>
<ul>
<li><b>Adapter — intent:</b> jo class aap badal nahi sakte use apne code ke chahe interface mein fit karna. <b>Apna</b> interface implement karo, vendor object pakdo, calls translate karo (naam, parameter shape, error codes).</li>
<li><b>Facade — intent:</b> kai subsystem calls ke sahi kram ki jagah caller ko ek aasan method dena. Jinhe poora control chahiye unke liye subsystems public rehte hain.</li>
<li><b>Adapter vs Facade:</b> Adapter <i>ek</i> cheez ko <i>diye hue</i> interface mein fit karta hai. Facade <i>kai</i> cheezon ke upar <i>naya, saral</i> interface banata hai.</li>
<li><b>Real .NET:</b> payment, SMS ya cloud SDK ko apne interface ke peeche wrap karna Adapter hai — isse vendor types aapke domain se bahar rehte hain. <code>ILogger</code> Facade jaisa lagta hai: ek <code>Log</code> call ke peeche kai logging providers. Jo application service ek method mein "stock reserve, charge, notify" chalati hai woh Facade hai.</li>
<li><b>TL angle:</b> Adapter ko boundary (Infrastructure layer) par rakho taaki vendor badalne par ek class chhue; unit tests aapke interface ka fake lete hain. Facade ke <b>god class</b> ban jane se savdhan raho jisme business rules bhar jayein — Facade coordinate kare, faisle na le.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> vendor ya legacy API ki shape aapke code se na mile to Adapter; callers baar-baar wahi multi-step sequence dohrayein to Facade. Jo class aapki apni hai use Adapter mat karo (seedhe badlo), aur ek class ke upar Facade ya aisa subsystem chhupana jo doosron ko sach mein chahiye — mat karo.</p>`
      },
      code: [
        {
          caption: {
            en: "Adapter: wrap a vendor SDK behind your interface (runs)",
            hi: "Adapter: vendor SDK को अपने interface के पीछे wrap करो (run होता है)",
            hg: "Adapter: vendor SDK ko apne interface ke peeche wrap karo (run hota hai)"
          },
          check: "run",
          expected: `[vendor] 1 number(s), priority 1: Order shipped
sent`,
          src: `ISmsSender sender = new LegacySmsAdapter(new LegacySmsGateway());
Console.WriteLine(sender.Send("98765", "Order shipped"));

// Your own interface: what the rest of the app depends on.
public interface ISmsSender { string Send(string phone, string text); }

// Vendor class you cannot change: different names and shape.
public sealed class LegacySmsGateway
{
    public int Dispatch(string[] numbers, string payload, int priority)
    {
        Console.WriteLine($"[vendor] {numbers.Length} number(s), priority {priority}: {payload}");
        return 200;
    }
}

// Adapter: implements YOUR interface, translates to the vendor call.
public sealed class LegacySmsAdapter : ISmsSender
{
    private readonly LegacySmsGateway _gateway;

    public LegacySmsAdapter(LegacySmsGateway gateway) => _gateway = gateway;

    public string Send(string phone, string text)
    {
        var code = _gateway.Dispatch(new[] { phone }, text, priority: 1);
        return code == 200 ? "sent" : "failed";
    }
}`
        },
        {
          caption: {
            en: "Facade: one method over three subsystems (runs)",
            hi: "Facade: तीन subsystems के ऊपर एक method (run होता है)",
            hg: "Facade: teen subsystems ke upar ek method (run hota hai)"
          },
          check: "run",
          expected: `reserve 2 x tiffin-box
charge Asha 1000
notify Asha: Order placed
Order placed
reserve 1 x sold-out-item
Out of stock`,
          src: `var checkout = new CheckoutFacade(new Inventory(), new Payments(), new Notifier());
Console.WriteLine(checkout.PlaceOrder("Asha", "tiffin-box", 2, 500m));
Console.WriteLine(checkout.PlaceOrder("Ravi", "sold-out-item", 1, 99m));

// Three subsystems, each with its own API.
public sealed class Inventory
{
    public bool Reserve(string sku, int qty)
    {
        Console.WriteLine($"reserve {qty} x {sku}");
        return sku != "sold-out-item";
    }
}

public sealed class Payments
{
    public bool Charge(string customer, decimal amount)
    {
        Console.WriteLine($"charge {customer} {amount}");
        return true;
    }
}

public sealed class Notifier
{
    public void Send(string customer, string text) => Console.WriteLine($"notify {customer}: {text}");
}

// Facade: ONE method for callers; it knows the order of the subsystem calls.
public sealed class CheckoutFacade
{
    private readonly Inventory _inventory;
    private readonly Payments _payments;
    private readonly Notifier _notifier;

    public CheckoutFacade(Inventory inventory, Payments payments, Notifier notifier)
        => (_inventory, _payments, _notifier) = (inventory, payments, notifier);

    public string PlaceOrder(string customer, string sku, int qty, decimal price)
    {
        if (!_inventory.Reserve(sku, qty)) return "Out of stock";
        if (!_payments.Charge(customer, qty * price)) return "Payment failed";
        _notifier.Send(customer, "Order placed");
        return "Order placed";
    }
}`
        }
      ]
    },
    {
      id: "decorator-proxy-code",
      depth: "detailed",
      title: {
        en: "Decorator and Proxy in code",
        hi: "Decorator और Proxy code में",
        hg: "Decorator aur Proxy code mein"
      },
      body: {
        en: `<p><b>Analogy:</b> a <b>Decorator</b> is a samosa wrapped in a paper napkin, then in a bag, then in a delivery box — each layer adds something, and it is still your samosa. A <b>Proxy</b> is the security guard at the society gate: same entrance, but he decides whether you go in and when the lift is called.</p>
<ul>
<li><b>Decorator — intent:</b> add behaviour by wrapping an object that has the <b>same interface</b>, without editing it or subclassing. Layers stack, and <b>order matters</b> (the outermost runs first on the way in).</li>
<li><b>Proxy — intent:</b> a stand-in with the <b>same interface</b> that controls access. Common kinds: <b>virtual/lazy</b> (create the real object only when needed), <b>protection</b> (check permission), <b>remote</b> (look local, call over the network), <b>caching/logging</b>.</li>
<li><b>Same shape, different intent:</b> a Decorator is <i>given</i> its inner object and adds a feature; a Proxy usually <i>manages</i> the real object's lifetime and access. Adapter changes the interface; both of these keep it.</li>
<li><b>Real .NET Decorators:</b> <code>BufferedStream</code>, <code>GZipStream</code> and <code>CryptoStream</code> each wrap a <code>Stream</code> and are a <code>Stream</code>. <code>StreamReader</code>/<code>StreamWriter</code> wrap a stream too, but expose a text API, so they lean to Adapter.</li>
<li><b>Real .NET Proxies:</b> EF Core lazy-loading proxies (Day 5) are generated subclasses of your entity — that is why navigation properties must be <code>virtual</code>. <code>DispatchProxy</code> generates a proxy for an interface at runtime (below). A typed <code>HttpClient</code> is a remote-proxy-style wrapper over an API: callers use a method, the HTTP call is hidden.</li>
<li><b>TL angle:</b> Decorator is how you keep logging, caching, retry and metrics out of business classes (SRP + OCP from Day 8). With DI you register it by hand, or with a library such as Scrutor — optional, a few lines of code do the same. Prefer a Decorator over subclassing when behaviours must combine (Day 1: composition over inheritance).</li>
</ul>
<p><b>When to use / when not:</b> use a Decorator for optional, combinable cross-cutting behaviour; a Proxy for lazy creation, permission checks or remote access. Do not stack many layers for one concern, and do not use <code>DispatchProxy</code> or reflection-based proxies on a hot path — reflection costs. A middleware or <code>DelegatingHandler</code> may fit better when the concern is a request pipeline.</p>`,
        hi: `<p><b>Analogy:</b> <b>Decorator</b> ऐसा samosa है जो पहले paper napkin, फिर bag, फिर delivery box में लिपटा है — हर layer कुछ जोड़ती है, और वह फिर भी आपका samosa है। <b>Proxy</b> society के gate का security guard है: दरवाज़ा वही, पर वह तय करता है कि आप अंदर जाओगे या नहीं और lift कब बुलानी है।</p>
<ul>
<li><b>Decorator — intent:</b> <b>वही interface</b> वाले object को wrap करके behaviour जोड़ना, उसे बदले या subclass किए बिना। Layers stack होती हैं और <b>order मायने रखता है</b> (अंदर जाते समय सबसे बाहरी पहले चलता है)।</li>
<li><b>Proxy — intent:</b> <b>वही interface</b> वाला stand-in जो access control करता है। आम kinds: <b>virtual/lazy</b> (असली object ज़रूरत पर बनाओ), <b>protection</b> (permission जाँचो), <b>remote</b> (local दिखे, network पर call जाए), <b>caching/logging</b>।</li>
<li><b>शक्ल एक, intent अलग:</b> Decorator को उसका inner object <i>दिया</i> जाता है और वह एक feature जोड़ता है; Proxy आम तौर पर असली object की lifetime और access <i>संभालता</i> है। Adapter interface बदलता है; ये दोनों उसे वैसा ही रखते हैं।</li>
<li><b>Real .NET Decorators:</b> <code>BufferedStream</code>, <code>GZipStream</code> और <code>CryptoStream</code> हर एक <code>Stream</code> को wrap करता है और खुद भी <code>Stream</code> है। <code>StreamReader</code>/<code>StreamWriter</code> भी stream wrap करते हैं पर text API देते हैं, इसलिए Adapter की तरफ़ झुकते हैं।</li>
<li><b>Real .NET Proxies:</b> EF Core lazy-loading proxies (Day 5) आपकी entity की generated subclasses हैं — इसीलिए navigation properties <code>virtual</code> चाहिए। <code>DispatchProxy</code> runtime पर interface का proxy बनाता है (नीचे)। Typed <code>HttpClient</code> API के ऊपर remote-proxy जैसा wrapper है: caller method बुलाता है, HTTP call छुपी रहती है।</li>
<li><b>TL angle:</b> Decorator से logging, caching, retry और metrics business classes से बाहर रहते हैं (Day 8 के SRP + OCP)। DI में इसे हाथ से register करो, या Scrutor जैसी library से — optional है, कुछ lines का code वही करता है। जब behaviours मिलाने हों तो subclassing की जगह Decorator लो (Day 1: composition over inheritance)।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> optional, मिलाने लायक cross-cutting behaviour के लिए Decorator; lazy creation, permission check या remote access के लिए Proxy। एक concern के लिए कई layers मत चढ़ाओ, और hot path पर <code>DispatchProxy</code> या reflection वाले proxies मत लो — reflection की cost है। जब concern request pipeline का हो तो middleware या <code>DelegatingHandler</code> बेहतर बैठ सकता है।</p>`,
        hg: `<p><b>Analogy:</b> <b>Decorator</b> aisa samosa hai jo pehle paper napkin, phir bag, phir delivery box mein lipta hai — har layer kuch jodti hai, aur woh phir bhi aapka samosa hai. <b>Proxy</b> society ke gate ka security guard hai: darwaza wahi, par woh tay karta hai ki aap andar jaoge ya nahi aur lift kab bulani hai.</p>
<ul>
<li><b>Decorator — intent:</b> <b>wahi interface</b> wale object ko wrap karke behaviour jodna, use badle ya subclass kiye bina. Layers stack hoti hain aur <b>order mayne rakhta hai</b> (andar jate samay sabse bahari pehle chalta hai).</li>
<li><b>Proxy — intent:</b> <b>wahi interface</b> wala stand-in jo access control karta hai. Aam kinds: <b>virtual/lazy</b> (asli object zarurat par banao), <b>protection</b> (permission jaancho), <b>remote</b> (local dikhe, network par call jaye), <b>caching/logging</b>.</li>
<li><b>Shakl ek, intent alag:</b> Decorator ko uska inner object <i>diya</i> jata hai aur woh ek feature jodta hai; Proxy aam taur par asli object ki lifetime aur access <i>sambhalta</i> hai. Adapter interface badalta hai; ye dono use waisa hi rakhte hain.</li>
<li><b>Real .NET Decorators:</b> <code>BufferedStream</code>, <code>GZipStream</code> aur <code>CryptoStream</code> har ek <code>Stream</code> ko wrap karta hai aur khud bhi <code>Stream</code> hai. <code>StreamReader</code>/<code>StreamWriter</code> bhi stream wrap karte hain par text API dete hain, isliye Adapter ki taraf jhukte hain.</li>
<li><b>Real .NET Proxies:</b> EF Core lazy-loading proxies (Day 5) aapki entity ki generated subclasses hain — isiliye navigation properties <code>virtual</code> chahiye. <code>DispatchProxy</code> runtime par interface ka proxy banata hai (neeche). Typed <code>HttpClient</code> API ke upar remote-proxy jaisa wrapper hai: caller method bulata hai, HTTP call chhupi rehti hai.</li>
<li><b>TL angle:</b> Decorator se logging, caching, retry aur metrics business classes se bahar rehte hain (Day 8 ke SRP + OCP). DI mein ise haath se register karo, ya Scrutor jaisi library se — optional hai, kuch lines ka code wahi karta hai. Jab behaviours milane hon to subclassing ki jagah Decorator lo (Day 1: composition over inheritance).</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> optional, milane layak cross-cutting behaviour ke liye Decorator; lazy creation, permission check ya remote access ke liye Proxy. Ek concern ke liye kai layers mat chadhao, aur hot path par <code>DispatchProxy</code> ya reflection wale proxies mat lo — reflection ki cost hai. Jab concern request pipeline ka ho to middleware ya <code>DelegatingHandler</code> behtar baith sakta hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Decorator: logging around caching around the real service (runs)",
            hi: "Decorator: असली service के ऊपर caching, उसके ऊपर logging (run होता है)",
            hg: "Decorator: asli service ke upar caching, uske upar logging (run hota hai)"
          },
          check: "run",
          expected: `get tea
db read tea
-> 20
20
get tea
-> 20
20`,
          src: `// Same interface all the way down: logging -> caching -> real.
IPriceService service = new LoggingPriceService(new CachingPriceService(new DbPriceService()));
Console.WriteLine(service.GetPrice("tea"));
Console.WriteLine(service.GetPrice("tea"));

public interface IPriceService { decimal GetPrice(string sku); }

public sealed class DbPriceService : IPriceService
{
    public decimal GetPrice(string sku)
    {
        Console.WriteLine($"db read {sku}");
        return 20m;
    }
}

public sealed class CachingPriceService : IPriceService
{
    private readonly IPriceService _inner;
    private readonly Dictionary<string, decimal> _cache = new();

    public CachingPriceService(IPriceService inner) => _inner = inner;

    public decimal GetPrice(string sku)
    {
        if (!_cache.TryGetValue(sku, out var price))
        {
            price = _inner.GetPrice(sku);
            _cache[sku] = price;
        }
        return price;
    }
}

public sealed class LoggingPriceService : IPriceService
{
    private readonly IPriceService _inner;

    public LoggingPriceService(IPriceService inner) => _inner = inner;

    public decimal GetPrice(string sku)
    {
        Console.WriteLine($"get {sku}");
        var price = _inner.GetPrice(sku);
        Console.WriteLine($"-> {price}");
        return price;
    }
}`
        },
        {
          caption: {
            en: "Built-in Decorators: StreamReader/GZipStream wrapping a MemoryStream (runs)",
            hi: "Built-in Decorators: MemoryStream को wrap करते StreamReader/GZipStream (run होता है)",
            hg: "Built-in Decorators: MemoryStream ko wrap karte StreamReader/GZipStream (run hota hai)"
          },
          check: "run",
          expected: `Namaste, Tech Lead interview!`,
          src: `using System.IO.Compression;

var text = "Namaste, Tech Lead interview!";
using var raw = new MemoryStream();

// Write: StreamWriter -> GZipStream -> MemoryStream (each wraps the next).
using (var gzip = new GZipStream(raw, CompressionMode.Compress, leaveOpen: true))
using (var writer = new StreamWriter(gzip))
{
    writer.Write(text);
}

// Read it back: StreamReader -> GZipStream -> MemoryStream.
raw.Position = 0;
using var unzip = new GZipStream(raw, CompressionMode.Decompress);
using var reader = new StreamReader(unzip);
Console.WriteLine(reader.ReadToEnd());`
        },
        {
          caption: {
            en: "Proxy: protection + lazy creation (runs)",
            hi: "Proxy: protection + lazy creation (run होता है)",
            hg: "Proxy: protection + lazy creation (run hota hai)"
          },
          check: "run",
          expected: `denied
loading big report (expensive)
Q3 numbers
Q3 numbers`,
          src: `IReport guest = new ReportProxy("guest");
Console.WriteLine(guest.Read());

IReport admin = new ReportProxy("admin");
Console.WriteLine(admin.Read());
Console.WriteLine(admin.Read());

public interface IReport { string Read(); }

public sealed class BigReport : IReport
{
    public BigReport() => Console.WriteLine("loading big report (expensive)");
    public string Read() => "Q3 numbers";
}

// Protection proxy + lazy proxy: same interface as the real object.
public sealed class ReportProxy : IReport
{
    private readonly string _role;
    private BigReport? _real;

    public ReportProxy(string role) => _role = role;

    public string Read()
    {
        if (_role != "admin") return "denied";   // control access
        _real ??= new BigReport();                // create only when needed
        return _real.Read();
    }
}`
        },
        {
          caption: {
            en: "Dynamic proxy with DispatchProxy (runs)",
            hi: "DispatchProxy से dynamic proxy (run होता है)",
            hg: "DispatchProxy se dynamic proxy (run hota hai)"
          },
          check: "run",
          expected: `calling Greet
Hi Asha`,
          src: `using System.Reflection;

var greeter = LoggingProxy<IGreeter>.Wrap(new Greeter());
Console.WriteLine(greeter.Greet("Asha"));

public interface IGreeter { string Greet(string name); }

public sealed class Greeter : IGreeter
{
    public string Greet(string name) => $"Hi {name}";
}

// DispatchProxy builds the proxy class at runtime: one Invoke for every method.
public class LoggingProxy<T> : DispatchProxy where T : class
{
    private T _target = null!;

    public static T Wrap(T target)
    {
        var proxy = Create<T, LoggingProxy<T>>();
        ((LoggingProxy<T>)(object)proxy)._target = target;
        return proxy;
    }

    protected override object? Invoke(MethodInfo? targetMethod, object?[]? args)
    {
        Console.WriteLine($"calling {targetMethod!.Name}");
        return targetMethod.Invoke(_target, args);
    }
}`
        }
      ]
    },
    {
      id: "strategy-observer-code",
      depth: "detailed",
      title: {
        en: "Strategy and Observer in code",
        hi: "Strategy और Observer code में",
        hg: "Strategy aur Observer code mein"
      },
      body: {
        en: `<p><b>Analogy:</b> <b>Strategy</b> is choosing UPI, card or cash-on-delivery at checkout: the order flow is the same, only the payment step changes. <b>Observer</b> is the "notify me" bell on a product page: when the stock arrives, everyone who clicked it gets a message, and the shop does not keep a list in its head.</p>
<ul>
<li><b>Strategy — intent:</b> put each algorithm behind one interface (or delegate) so it can be swapped without touching the caller. It replaces a growing <code>switch</code>/<code>if</code> chain and supports Open/Closed (Day 8).</li>
<li><b>Strategy in .NET:</b> <code>IComparer&lt;T&gt;</code> passed to <code>Sort</code>, a <code>Comparison&lt;T&gt;</code> lambda, a <code>Func</code> you inject, and DI itself. With <b>keyed services</b> (.NET 8+, Day 9) you register each strategy with a key and resolve by key. Keep the lookup in the composition root, not inside business code.</li>
<li><b>Observer — intent:</b> a subject notifies subscribers about changes without knowing them. In C#: <code>event</code> (Day 2) for in-process notification, or <code>IObservable&lt;T&gt;</code>/<code>IObserver&lt;T&gt;</code> (in the BCL), where <code>Subscribe</code> returns an <code>IDisposable</code> to unsubscribe. The Reactive Extensions (Rx) library builds operators on top of those interfaces; it is a separate NuGet package.</li>
<li><b>Observer traps:</b> handlers run <b>synchronously, in subscription order, on the raising thread</b>; an exception in one handler stops the later ones (see the puzzle). A long-lived publisher (for example a static event) keeps its subscribers alive, so <b>unsubscribe</b> (<code>-=</code> or <code>Dispose</code>) or you leak memory.</li>
<li><b>Strategy vs State:</b> same class diagram, different intent. The <i>client</i> picks a Strategy and it usually stays; a State object swaps <i>itself</i> when the context moves (order: Placed → Paid → Shipped), so states know their successors.</li>
<li><b>TL angle:</b> in review, "this switch on payment type grows every sprint" is a Strategy. For Observer, ask what happens on a slow or failing subscriber — if delivery must be reliable or cross-process, use a message broker (not an in-process event).</li>
</ul>
<p><b>When to use / when not:</b> use Strategy when behaviour varies by input or config and keeps growing; Observer for one-to-many, in-process notification. Do not build a Strategy for two stable branches, and do not use in-process events when you need guaranteed delivery, ordering across services, or retries.</p>`,
        hi: `<p><b>Analogy:</b> <b>Strategy</b> checkout पर UPI, card या cash-on-delivery चुनना है: order का flow वही, बस payment step बदलता है। <b>Observer</b> product page की "notify me" घंटी है: stock आने पर जिसने click किया सबको message जाता है, और दुकान सूची दिमाग में नहीं रखती।</p>
<ul>
<li><b>Strategy — intent:</b> हर algorithm को एक interface (या delegate) के पीछे रखो ताकि caller को छुए बिना बदला जा सके। यह बढ़ती <code>switch</code>/<code>if</code> chain की जगह लेता है और Open/Closed (Day 8) को सहारा देता है।</li>
<li><b>.NET में Strategy:</b> <code>Sort</code> को दिया <code>IComparer&lt;T&gt;</code>, <code>Comparison&lt;T&gt;</code> lambda, inject किया <code>Func</code>, और DI खुद। <b>Keyed services</b> (.NET 8+, Day 9) में हर strategy key के साथ register करो और key से resolve करो। Lookup composition root में रखो, business code में नहीं।</li>
<li><b>Observer — intent:</b> subject बदलावों की ख़बर subscribers को देता है, उन्हें जाने बिना। C# में: in-process के लिए <code>event</code> (Day 2), या <code>IObservable&lt;T&gt;</code>/<code>IObserver&lt;T&gt;</code> (BCL में), जहाँ <code>Subscribe</code> unsubscribe के लिए <code>IDisposable</code> लौटाता है। Reactive Extensions (Rx) library इन interfaces पर operators बनाती है; वह अलग NuGet package है।</li>
<li><b>Observer के जाल:</b> handlers <b>synchronously, subscribe के क्रम में, raise करने वाले thread पर</b> चलते हैं; एक handler का exception बाद वालों को रोक देता है (puzzle देखो)। लंबी उम्र वाला publisher (जैसे static event) अपने subscribers को ज़िंदा रखता है, इसलिए <b>unsubscribe</b> करो (<code>-=</code> या <code>Dispose</code>), वरना memory leak।</li>
<li><b>Strategy vs State:</b> class diagram एक जैसा, intent अलग। Strategy <i>client</i> चुनता है और वह आम तौर पर टिकी रहती है; State object context के आगे बढ़ने पर <i>खुद</i> बदलता है (Placed → Paid → Shipped), इसलिए states अपने अगले state जानती हैं।</li>
<li><b>TL angle:</b> review में "payment type पर यह switch हर sprint बढ़ता है" = Strategy। Observer के लिए पूछो कि धीमा या fail होता subscriber हो तो क्या होगा — delivery भरोसेमंद या cross-process चाहिए तो message broker लो (in-process event नहीं)।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> behaviour input या config से बदलता और बढ़ता हो तो Strategy; one-to-many, in-process notification के लिए Observer। दो स्थिर branches के लिए Strategy मत बनाओ, और जब guaranteed delivery, services के पार ordering या retries चाहिए तो in-process events मत लो।</p>`,
        hg: `<p><b>Analogy:</b> <b>Strategy</b> checkout par UPI, card ya cash-on-delivery chunna hai: order ka flow wahi, bas payment step badalta hai. <b>Observer</b> product page ki "notify me" ghanti hai: stock aane par jisne click kiya sabko message jata hai, aur dukaan soochi dimaag mein nahi rakhti.</p>
<ul>
<li><b>Strategy — intent:</b> har algorithm ko ek interface (ya delegate) ke peeche rakho taaki caller ko chhue bina badla ja sake. Yeh badhti <code>switch</code>/<code>if</code> chain ki jagah leta hai aur Open/Closed (Day 8) ko sahara deta hai.</li>
<li><b>.NET mein Strategy:</b> <code>Sort</code> ko diya <code>IComparer&lt;T&gt;</code>, <code>Comparison&lt;T&gt;</code> lambda, inject kiya <code>Func</code>, aur DI khud. <b>Keyed services</b> (.NET 8+, Day 9) mein har strategy key ke saath register karo aur key se resolve karo. Lookup composition root mein rakho, business code mein nahi.</li>
<li><b>Observer — intent:</b> subject badlavon ki khabar subscribers ko deta hai, unhe jane bina. C# mein: in-process ke liye <code>event</code> (Day 2), ya <code>IObservable&lt;T&gt;</code>/<code>IObserver&lt;T&gt;</code> (BCL mein), jahan <code>Subscribe</code> unsubscribe ke liye <code>IDisposable</code> lautata hai. Reactive Extensions (Rx) library in interfaces par operators banati hai; woh alag NuGet package hai.</li>
<li><b>Observer ke jaal:</b> handlers <b>synchronously, subscribe ke kram mein, raise karne wale thread par</b> chalte hain; ek handler ka exception baad walon ko rok deta hai (puzzle dekho). Lambi umr wala publisher (jaise static event) apne subscribers ko zinda rakhta hai, isliye <b>unsubscribe</b> karo (<code>-=</code> ya <code>Dispose</code>), warna memory leak.</li>
<li><b>Strategy vs State:</b> class diagram ek jaisa, intent alag. Strategy <i>client</i> chunta hai aur woh aam taur par tiki rehti hai; State object context ke aage badhne par <i>khud</i> badalta hai (Placed → Paid → Shipped), isliye states apne agle state jaanti hain.</li>
<li><b>TL angle:</b> review mein "payment type par yeh switch har sprint badhta hai" = Strategy. Observer ke liye poocho ki dheema ya fail hota subscriber ho to kya hoga — delivery bharosemand ya cross-process chahiye to message broker lo (in-process event nahi).</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> behaviour input ya config se badalta aur badhta ho to Strategy; one-to-many, in-process notification ke liye Observer. Do sthir branches ke liye Strategy mat banao, aur jab guaranteed delivery, services ke paar ordering ya retries chahiye to in-process events mat lo.</p>`
      },
      code: [
        {
          caption: {
            en: "Strategy: keyed DI services, a Func lookup and a delegate (runs)",
            hi: "Strategy: keyed DI services, Func lookup और delegate (run होता है)",
            hg: "Strategy: keyed DI services, Func lookup aur delegate (run hota hai)"
          },
          check: "run",
          packages: ["Microsoft.Extensions.DependencyInjection"],
          expected: `900
1000
950`,
          src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddKeyedSingleton<IDiscount, FestivalDiscount>("festival");
services.AddKeyedSingleton<IDiscount, NoDiscount>("none");
// Runtime choice: the lookup lives here (composition root), not in business code.
services.AddSingleton<Func<string, IDiscount>>(sp => key => sp.GetRequiredKeyedService<IDiscount>(key));
services.AddSingleton<Checkout>();
using var provider = services.BuildServiceProvider();

var checkout = provider.GetRequiredService<Checkout>();
Console.WriteLine(checkout.Total("festival", 1000m));
Console.WriteLine(checkout.Total("none", 1000m));

// A strategy can also be just a delegate.
Func<decimal, decimal> flat50 = price => price - 50m;
Console.WriteLine(flat50(1000m));

public interface IDiscount { decimal Apply(decimal price); }

public sealed class FestivalDiscount : IDiscount
{
    public decimal Apply(decimal price) => price - price / 10m;   // 10% off
}

public sealed class NoDiscount : IDiscount
{
    public decimal Apply(decimal price) => price;
}

public sealed class Checkout
{
    private readonly Func<string, IDiscount> _pick;

    public Checkout(Func<string, IDiscount> pick) => _pick = pick;

    public decimal Total(string discountKey, decimal price) => _pick(discountKey).Apply(price);
}`
        },
        {
          caption: {
            en: "Observer with a C# event, including -= (runs)",
            hi: "C# event से Observer, -= समेत (run होता है)",
            hg: "C# event se Observer, -= samet (run hota hai)"
          },
          check: "run",
          expected: `SMS: Packed
Email: Packed
Email: Shipped`,
          src: `var order = new OrderTracker();

EventHandler<string> sms = (sender, status) => Console.WriteLine($"SMS: {status}");
order.StatusChanged += sms;
order.StatusChanged += OnEmail;

order.Update("Packed");
order.StatusChanged -= sms;       // unsubscribe: keep the reference you subscribed with
order.Update("Shipped");

static void OnEmail(object? sender, string status) => Console.WriteLine($"Email: {status}");

public sealed class OrderTracker
{
    // The subject does not know who listens.
    public event EventHandler<string>? StatusChanged;

    public void Update(string status) => StatusChanged?.Invoke(this, status);
}`
        },
        {
          caption: {
            en: "Observer with IObservable<T> and IDisposable unsubscribe (runs)",
            hi: "IObservable<T> और IDisposable unsubscribe से Observer (run होता है)",
            hg: "IObservable<T> aur IDisposable unsubscribe se Observer (run hota hai)"
          },
          check: "run",
          expected: `A got 100
A got 101
B got 101
done`,
          src: `var feed = new PriceFeed();

using (feed.Subscribe(new Printer("A")))
{
    feed.Publish(100);
    using var b = feed.Subscribe(new Printer("B"));
    feed.Publish(101);
}                                   // both subscriptions disposed here

feed.Publish(102);
Console.WriteLine("done");

public sealed class PriceFeed : IObservable<int>
{
    private readonly List<IObserver<int>> _observers = new();

    public IDisposable Subscribe(IObserver<int> observer)
    {
        _observers.Add(observer);
        return new Unsubscriber(() => _observers.Remove(observer));
    }

    public void Publish(int price)
    {
        foreach (var observer in _observers.ToArray()) observer.OnNext(price);
    }
}

public sealed class Unsubscriber : IDisposable
{
    private readonly Action _onDispose;

    public Unsubscriber(Action onDispose) => _onDispose = onDispose;

    public void Dispose() => _onDispose();
}

public sealed class Printer : IObserver<int>
{
    private readonly string _name;

    public Printer(string name) => _name = name;

    public void OnNext(int value) => Console.WriteLine($"{_name} got {value}");
    public void OnError(Exception error) { }
    public void OnCompleted() { }
}`
        }
      ]
    },
    {
      id: "mediator-chain-code",
      depth: "detailed",
      title: {
        en: "Mediator and Chain of Responsibility in code",
        hi: "Mediator और Chain of Responsibility code में",
        hg: "Mediator aur Chain of Responsibility code mein"
      },
      body: {
        en: `<p><b>Analogy:</b> a <b>Mediator</b> is the airport control tower: pilots never radio each other, they talk to the tower, which decides who lands first. A <b>Chain of Responsibility</b> is the expense claim that goes team lead → manager → director: each checks the amount, approves or forwards it.</p>
<ul>
<li><b>Mediator — intent:</b> components talk to one hub, so they do not hold references to each other. It turns a tangled web into a star, and the rules of interaction live in one place.</li>
<li><b>Mediator in .NET:</b> you can write a tiny one by hand (chat room below). In-process <b>request/handler</b> dispatchers are the same idea; the MediatR library is one popular implementation (Day 11 covers CQRS and when it helps). It is optional — check its current licence terms before adopting it in a company, and plain method calls are often enough.</li>
<li><b>Mediator vs Observer:</b> Observer broadcasts one-to-many and the subject does not care who listens. A Mediator <i>coordinates</i> specific participants and holds the interaction logic. Watch out: the mediator can become a <b>god object</b>.</li>
<li><b>Chain of Responsibility — intent:</b> pass a request along a chain of handlers; each one handles it, modifies it, passes it on, or stops. The sender does not know which handler acts.</li>
<li><b>Chain in .NET:</b> the <b>ASP.NET Core middleware pipeline</b> (Day 12): each middleware gets <code>next</code>, can run code before and after it, or short-circuit by not calling it. <code>HttpClient</code> <code>DelegatingHandler</code>s form the same kind of pipeline around the actual HTTP call (<code>AddHttpMessageHandler</code> with <code>IHttpClientFactory</code>; handlers run in registration order, the first one is outermost).</li>
<li><b>Chain vs Decorator:</b> both wrap the next thing. A classic chain link <i>decides</i> whether to continue and may stop; a Decorator normally always delegates and adds behaviour. Middleware sits in between: it is a chain, built from delegates, and often used like a decorator.</li>
<li><b>TL angle:</b> order is part of the design — authentication before authorization, exception handling outermost. Document the order, and test that a short-circuit really skips later links.</li>
</ul>
<p><b>When to use / when not:</b> use a Mediator when many components interact in tangled ways; use a Chain when the handler is picked at runtime or steps are optional and re-orderable. Do not add a Mediator for two or three classes, or a chain when one <code>if</code> will do — and avoid hidden magic that makes it hard to see who handles a request.</p>`,
        hi: `<p><b>Analogy:</b> <b>Mediator</b> airport का control tower है: pilots आपस में radio नहीं करते, tower से बात करते हैं, और tower तय करता है कि पहले कौन उतरे। <b>Chain of Responsibility</b> expense claim है जो team lead → manager → director जाता है: हर कोई amount देखकर approve करता है या आगे भेजता है।</p>
<ul>
<li><b>Mediator — intent:</b> components एक hub से बात करते हैं, एक-दूसरे का reference नहीं रखते। उलझा जाल तारा (star) बन जाता है और बातचीत के नियम एक जगह रहते हैं।</li>
<li><b>.NET में Mediator:</b> हाथ से छोटा सा बना सकते हो (नीचे chat room)। in-process <b>request/handler</b> dispatchers वही idea हैं; MediatR library एक लोकप्रिय implementation है (Day 11 में CQRS और कब फ़ायदा)। यह optional है — company में अपनाने से पहले उसकी मौजूदा licence शर्तें देख लो, और सीधे method calls अक्सर काफ़ी होते हैं।</li>
<li><b>Mediator vs Observer:</b> Observer one-to-many broadcast करता है और subject को परवाह नहीं कि कौन सुन रहा है। Mediator तय participants को <i>coordinate</i> करता है और interaction logic रखता है। ध्यान: mediator <b>god object</b> बन सकता है।</li>
<li><b>Chain of Responsibility — intent:</b> request को handlers की chain में आगे बढ़ाओ; हर handler उसे संभालता, बदलता, आगे देता या रोक देता है। भेजने वाले को नहीं पता कौन सा handler काम करेगा।</li>
<li><b>.NET में Chain:</b> <b>ASP.NET Core middleware pipeline</b> (Day 12): हर middleware को <code>next</code> मिलता है, वह उसके पहले और बाद code चला सकता है, या <code>next</code> न बुलाकर short-circuit कर सकता है। <code>HttpClient</code> के <code>DelegatingHandler</code> असली HTTP call के चारों ओर वैसी ही pipeline बनाते हैं (<code>IHttpClientFactory</code> के साथ <code>AddHttpMessageHandler</code>; handlers register के क्रम में चलते हैं, पहला सबसे बाहर)।</li>
<li><b>Chain vs Decorator:</b> दोनों अगली चीज़ को wrap करते हैं। Classic chain का link आगे बढ़ना <i>तय</i> करता है और रुक सकता है; Decorator आम तौर पर हमेशा आगे देता है और behaviour जोड़ता है। Middleware बीच में है: यह delegates से बनी chain है और अक्सर decorator की तरह use होती है।</li>
<li><b>TL angle:</b> order भी design का हिस्सा है — authentication, authorization से पहले; exception handling सबसे बाहर। order document करो, और test करो कि short-circuit सच में बाद के links छोड़ता है।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> कई components उलझकर बात करें तो Mediator; handler runtime पर चुना जाए या steps optional और reorder होने लायक हों तो Chain। दो-तीन classes के लिए Mediator, या एक <code>if</code> से काम चले तो chain मत बनाओ — और ऐसा छुपा जादू मत रखो जिससे दिखे ही नहीं कि request कौन संभालता है।</p>`,
        hg: `<p><b>Analogy:</b> <b>Mediator</b> airport ka control tower hai: pilots aapas mein radio nahi karte, tower se baat karte hain, aur tower tay karta hai ki pehle kaun utre. <b>Chain of Responsibility</b> expense claim hai jo team lead → manager → director jata hai: har koi amount dekhkar approve karta hai ya aage bhejta hai.</p>
<ul>
<li><b>Mediator — intent:</b> components ek hub se baat karte hain, ek-doosre ka reference nahi rakhte. Uljha jaal taara (star) ban jata hai aur baatchit ke niyam ek jagah rehte hain.</li>
<li><b>.NET mein Mediator:</b> haath se chhota sa bana sakte ho (neeche chat room). in-process <b>request/handler</b> dispatchers wahi idea hain; MediatR library ek lokpriya implementation hai (Day 11 mein CQRS aur kab fayda). Yeh optional hai — company mein apnane se pehle uski maujooda licence shartein dekh lo, aur seedhe method calls aksar kaafi hote hain.</li>
<li><b>Mediator vs Observer:</b> Observer one-to-many broadcast karta hai aur subject ko parwah nahi ki kaun sun raha hai. Mediator tay participants ko <i>coordinate</i> karta hai aur interaction logic rakhta hai. Dhyan: mediator <b>god object</b> ban sakta hai.</li>
<li><b>Chain of Responsibility — intent:</b> request ko handlers ki chain mein aage badhao; har handler use sambhalta, badalta, aage deta ya rok deta hai. Bhejne wale ko nahi pata kaun sa handler kaam karega.</li>
<li><b>.NET mein Chain:</b> <b>ASP.NET Core middleware pipeline</b> (Day 12): har middleware ko <code>next</code> milta hai, woh uske pehle aur baad code chala sakta hai, ya <code>next</code> na bulakar short-circuit kar sakta hai. <code>HttpClient</code> ke <code>DelegatingHandler</code> asli HTTP call ke charon or waisi hi pipeline banate hain (<code>IHttpClientFactory</code> ke saath <code>AddHttpMessageHandler</code>; handlers register ke kram mein chalte hain, pehla sabse bahar).</li>
<li><b>Chain vs Decorator:</b> dono agli cheez ko wrap karte hain. Classic chain ka link aage badhna <i>tay</i> karta hai aur ruk sakta hai; Decorator aam taur par hamesha aage deta hai aur behaviour jodta hai. Middleware beech mein hai: yeh delegates se bani chain hai aur aksar decorator ki tarah use hoti hai.</li>
<li><b>TL angle:</b> order bhi design ka hissa hai — authentication, authorization se pehle; exception handling sabse bahar. Order document karo, aur test karo ki short-circuit sach mein baad ke links chhodta hai.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> kai components uljhkar baat karein to Mediator; handler runtime par chuna jaye ya steps optional aur reorder hone layak hon to Chain. Do-teen classes ke liye Mediator, ya ek <code>if</code> se kaam chale to chain mat banao — aur aisa chhupa jaadu mat rakho jisse dikhe hi nahi ki request kaun sambhalta hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Mediator: a tiny chat room (runs)",
            hi: "Mediator: छोटा chat room (run होता है)",
            hg: "Mediator: chhota chat room (run hota hai)"
          },
          check: "run",
          expected: `Ravi hears Asha: Standup at 10
Meena hears Asha: Standup at 10
Asha hears Ravi: Ok
Meena hears Ravi: Ok`,
          src: `var room = new ChatRoom();
var asha = new User("Asha", room);
var ravi = new User("Ravi", room);
var meena = new User("Meena", room);
room.Join(asha);
room.Join(ravi);
room.Join(meena);

asha.Say("Standup at 10");
ravi.Say("Ok");

public interface IChatMediator
{
    void Join(User user);
    void Broadcast(User from, string message);
}

// Mediator: users know only the room, never each other.
public sealed class ChatRoom : IChatMediator
{
    private readonly List<User> _users = new();

    public void Join(User user) => _users.Add(user);

    public void Broadcast(User from, string message)
    {
        foreach (var user in _users)
            if (user != from) user.Hear(from.Name, message);
    }
}

public sealed class User
{
    private readonly IChatMediator _room;

    public string Name { get; }

    public User(string name, IChatMediator room) => (Name, _room) = (name, room);

    public void Say(string message) => _room.Broadcast(this, message);

    public void Hear(string from, string message) => Console.WriteLine($"{Name} hears {from}: {message}");
}`
        },
        {
          caption: {
            en: "Chain of Responsibility: approval limits (runs)",
            hi: "Chain of Responsibility: approval limits (run होता है)",
            hg: "Chain of Responsibility: approval limits (run hota hai)"
          },
          check: "run",
          expected: `TeamLead approved 5000
Manager approved 30000
Director approved 200000
nobody can approve 2000000`,
          src: `var chain = new TeamLead(new Manager(new Director(null)));

foreach (var amount in new[] { 5_000, 30_000, 200_000, 2_000_000 })
    Console.WriteLine(chain.Approve(amount));

public abstract class Approver
{
    private readonly Approver? _next;

    protected Approver(Approver? next) => _next = next;

    protected abstract string Title { get; }
    protected abstract int Limit { get; }

    // Handle it, or pass it on. A link can stop the chain.
    public string Approve(int amount) =>
        amount <= Limit
            ? $"{Title} approved {amount}"
            : _next?.Approve(amount) ?? $"nobody can approve {amount}";
}

public sealed class TeamLead : Approver
{
    public TeamLead(Approver? next) : base(next) { }
    protected override string Title => "TeamLead";
    protected override int Limit => 10_000;
}

public sealed class Manager : Approver
{
    public Manager(Approver? next) : base(next) { }
    protected override string Title => "Manager";
    protected override int Limit => 50_000;
}

public sealed class Director : Approver
{
    public Director(Approver? next) : base(next) { }
    protected override string Title => "Director";
    protected override int Limit => 500_000;
}`
        },
        {
          caption: {
            en: "Middleware-style pipeline with a short-circuit (runs)",
            hi: "Short-circuit वाली middleware-style pipeline (run होता है)",
            hg: "Short-circuit wali middleware-style pipeline (run hota hai)"
          },
          check: "run",
          expected: `log in: /home
log out: 200 OK for /home
200 OK for /home
log in: /secret
log out: 401 Unauthorized
401 Unauthorized`,
          src: `Handler endpoint = request => $"200 OK for {request}";

Middleware logging = next => request =>
{
    Console.WriteLine($"log in: {request}");
    var response = next(request);
    Console.WriteLine($"log out: {response}");
    return response;
};

Middleware auth = next => request =>
    request.Contains("secret") ? "401 Unauthorized"   // short-circuit: next is never called
                               : next(request);

// Build the pipeline from the end: first registered = outermost.
Middleware[] registered = { logging, auth };
var pipeline = endpoint;
for (var i = registered.Length - 1; i >= 0; i--)
    pipeline = registered[i](pipeline);

Console.WriteLine(pipeline("/home"));
Console.WriteLine(pipeline("/secret"));

delegate string Handler(string request);
delegate Handler Middleware(Handler next);`
        }
      ]
    },
    {
      id: "patterns-tl-view",
      depth: "detailed",
      title: {
        en: "TL view: choosing, naming and decorating with DI",
        hi: "TL view: चुनना, नाम देना और DI से decorate करना",
        hg: "TL view: chunna, naam dena aur DI se decorate karna"
      },
      body: {
        en: `<p><b>Analogy:</b> a tool kit. A good mechanic does not use every spanner on every bike; he names the tool, says why, and puts it back. Patterns are the same: a vocabulary for the team, not a checklist.</p>
<ul>
<li><b>Same shape, different intent (say this aloud):</b> Adapter <i>changes</i> the interface; Decorator <i>adds</i> behaviour behind the same interface; Proxy <i>controls access</i> behind the same interface; Facade <i>simplifies</i> many interfaces into a new one.</li>
<li><b>Behavioral quick map:</b> Strategy = swap the algorithm; Observer = broadcast a change; Mediator = hub between peers; Chain = ordered handlers that may stop.</li>
<li><b>Decorating with DI:</b> the built-in container has no decorator feature. Register the inner type, then register the interface with a factory that wraps it (below). A library such as Scrutor adds a <code>Decorate</code> helper — convenient but optional. Keyed services (Day 9) are for choosing between implementations, not for wrapping.</li>
<li><b>Lifetimes:</b> a decorator should not outlive what it wraps — a singleton decorator around a scoped inner service captures a stale instance (a "captive dependency"). Match or shorten the lifetime.</li>
<li><b>Where each shows up in a Web API:</b> middleware = Chain; <code>DelegatingHandler</code> = Chain/Decorator around <code>HttpClient</code>; logging/caching wrappers = Decorator; SDK wrappers in Infrastructure = Adapter; application service = Facade; payment/discount selection = Strategy; domain events or <code>event</code>s = Observer.</li>
<li><b>TL angle:</b> in code review, ask "what changes independently here?" before adding a pattern. Prefer the simplest thing (a delegate, a method, DI) and introduce the named pattern when the second or third variation arrives.</li>
</ul>
<p><b>When to use / when not:</b> reach for a pattern when you can name the pain it removes (duplicated cross-cutting code, a switch growing each sprint, vendor types leaking in). Do not pattern-match on day one: an interface plus a single implementation plus a wrapper plus a factory for one behaviour is over-engineering that slows the team.</p>`,
        hi: `<p><b>Analogy:</b> tool kit। अच्छा mechanic हर bike पर हर spanner नहीं लगाता; वह tool का नाम बोलता है, वजह बताता है और वापस रख देता है। Patterns भी ऐसे ही हैं: team की शब्दावली, checklist नहीं।</p>
<ul>
<li><b>शक्ल एक, intent अलग (यह बोलकर कहो):</b> Adapter interface <i>बदलता</i> है; Decorator उसी interface के पीछे behaviour <i>जोड़ता</i> है; Proxy उसी interface के पीछे <i>access control</i> करता है; Facade कई interfaces को एक नए interface में <i>सरल</i> करता है।</li>
<li><b>Behavioral का quick map:</b> Strategy = algorithm बदलो; Observer = बदलाव broadcast करो; Mediator = peers के बीच hub; Chain = क्रम में handlers जो रुक सकते हैं।</li>
<li><b>DI से decorate करना:</b> built-in container में decorator feature नहीं है। inner type register करो, फिर interface को ऐसी factory से register करो जो उसे wrap करे (नीचे)। Scrutor जैसी library <code>Decorate</code> helper देती है — सुविधाजनक पर optional। Keyed services (Day 9) implementations में से चुनने के लिए हैं, wrap करने के लिए नहीं।</li>
<li><b>Lifetimes:</b> decorator को उससे ज़्यादा नहीं जीना चाहिए जिसे वह wrap करता है — scoped inner service के ऊपर singleton decorator पुराना instance पकड़ लेता है ("captive dependency")। Lifetime बराबर या छोटी रखो।</li>
<li><b>Web API में कहाँ दिखते हैं:</b> middleware = Chain; <code>DelegatingHandler</code> = <code>HttpClient</code> के चारों ओर Chain/Decorator; logging/caching wrappers = Decorator; Infrastructure में SDK wrappers = Adapter; application service = Facade; payment/discount चुनाव = Strategy; domain events या <code>event</code> = Observer।</li>
<li><b>TL angle:</b> code review में pattern जोड़ने से पहले पूछो "यहाँ क्या अलग-अलग बदलता है?" सबसे सरल चीज़ (delegate, method, DI) लो और दूसरी-तीसरी variation आने पर नामी pattern लाओ।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> pattern तब लो जब उस दर्द का नाम ले सको जिसे वह हटाता है (दोहराया cross-cutting code, हर sprint बढ़ती switch, अंदर घुसते vendor types)। पहले दिन से pattern मत ठूँसो: एक behaviour के लिए interface + एक implementation + wrapper + factory over-engineering है जो team को धीमा करती है।</p>`,
        hg: `<p><b>Analogy:</b> tool kit. Achha mechanic har bike par har spanner nahi lagata; woh tool ka naam bolta hai, wajah batata hai aur wapas rakh deta hai. Patterns bhi aise hi hain: team ki shabdawali, checklist nahi.</p>
<ul>
<li><b>Shakl ek, intent alag (yeh bolkar kaho):</b> Adapter interface <i>badalta</i> hai; Decorator usi interface ke peeche behaviour <i>jodta</i> hai; Proxy usi interface ke peeche <i>access control</i> karta hai; Facade kai interfaces ko ek naye interface mein <i>saral</i> karta hai.</li>
<li><b>Behavioral ka quick map:</b> Strategy = algorithm badlo; Observer = badlav broadcast karo; Mediator = peers ke beech hub; Chain = kram mein handlers jo ruk sakte hain.</li>
<li><b>DI se decorate karna:</b> built-in container mein decorator feature nahi hai. Inner type register karo, phir interface ko aisi factory se register karo jo use wrap kare (neeche). Scrutor jaisi library <code>Decorate</code> helper deti hai — suvidhajanak par optional. Keyed services (Day 9) implementations mein se chunne ke liye hain, wrap karne ke liye nahi.</li>
<li><b>Lifetimes:</b> decorator ko usse zyada nahi jeena chahiye jise woh wrap karta hai — scoped inner service ke upar singleton decorator purana instance pakad leta hai ("captive dependency"). Lifetime barabar ya chhoti rakho.</li>
<li><b>Web API mein kahan dikhte hain:</b> middleware = Chain; <code>DelegatingHandler</code> = <code>HttpClient</code> ke charon or Chain/Decorator; logging/caching wrappers = Decorator; Infrastructure mein SDK wrappers = Adapter; application service = Facade; payment/discount chunav = Strategy; domain events ya <code>event</code> = Observer.</li>
<li><b>TL angle:</b> code review mein pattern jodne se pehle poocho "yahan kya alag-alag badalta hai?" Sabse saral cheez (delegate, method, DI) lo aur doosri-teesri variation aane par naami pattern lao.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> pattern tab lo jab us dard ka naam le sako jise woh hatata hai (dohraya cross-cutting code, har sprint badhti switch, andar ghuste vendor types). Pehle din se pattern mat thoonso: ek behaviour ke liye interface + ek implementation + wrapper + factory over-engineering hai jo team ko dheema karti hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Decorator registered by hand in DI (runs)",
            hi: "DI में हाथ से register किया Decorator (run होता है)",
            hg: "DI mein haath se register kiya Decorator (run hota hai)"
          },
          check: "run",
          packages: ["Microsoft.Extensions.DependencyInjection"],
          expected: `sql read 1
Item 1
Item 1`,
          src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddSingleton<SqlRepo>();
// Manual decoration: IRepo resolves to the cached wrapper around SqlRepo.
services.AddSingleton<IRepo>(sp => new CachedRepo(sp.GetRequiredService<SqlRepo>()));
using var provider = services.BuildServiceProvider();

var repo = provider.GetRequiredService<IRepo>();
Console.WriteLine(repo.Get(1));
Console.WriteLine(repo.Get(1));

public interface IRepo { string Get(int id); }

public sealed class SqlRepo : IRepo
{
    public string Get(int id)
    {
        Console.WriteLine($"sql read {id}");
        return $"Item {id}";
    }
}

public sealed class CachedRepo : IRepo
{
    private readonly IRepo _inner;
    private readonly Dictionary<int, string> _cache = new();

    public CachedRepo(IRepo inner) => _inner = inner;

    public string Get(int id)
    {
        if (!_cache.TryGetValue(id, out var value))
            _cache[id] = value = _inner.Get(id);
        return value;
    }
}`
        }
      ]
    }
  ],
  qa: [
    {
      id: "decorator-vs-proxy-vs-adapter",
      depth: "short",
      q: "Decorator, Proxy and Adapter all wrap an object. What is the difference?",
      answer: "The shape is the same; the intent differs. Adapter changes the interface, Decorator adds behaviour behind the same interface, and Proxy controls access to the real object behind the same interface.",
      meaning: {
        hi: "Shape एक है, intent अलग। Adapter interface बदलता है, Decorator उसी interface के पीछे behaviour जोड़ता है, और Proxy उसी interface के पीछे असली object का access control करता है।",
        hg: "Shape ek hai, intent alag. Adapter interface badalta hai, Decorator usi interface ke peeche behaviour jodta hai, aur Proxy usi interface ke peeche asli object ka access control karta hai."
      },
      explain: {
        en: `<ul>
<li><b>Adapter:</b> client expects <code>ISmsSender</code>, vendor gives <code>Dispatch(string[], string, int)</code>. The adapter translates. Different interface in and out.</li>
<li><b>Decorator:</b> <code>IPriceService</code> in, <code>IPriceService</code> out, plus logging or caching. The caller builds the stack, and layers are combinable.</li>
<li><b>Proxy:</b> same interface, but the proxy decides <i>whether/when</i> the real object is created or called (lazy, permission, remote).</li>
<li>Quick test: "Am I changing the interface? Adding a feature? Guarding access?"</li>
</ul>
<p>Follow-up: "Can a class be two of these?" — yes, a caching proxy and a caching decorator look almost the same; the label follows the main intent.</p>`,
        hi: `<ul>
<li><b>Adapter:</b> client को <code>ISmsSender</code> चाहिए, vendor देता है <code>Dispatch(string[], string, int)</code>। Adapter translate करता है। अंदर और बाहर अलग interface।</li>
<li><b>Decorator:</b> <code>IPriceService</code> अंदर, <code>IPriceService</code> बाहर, ऊपर से logging या caching। Stack caller बनाता है, layers मिलाई जा सकती हैं।</li>
<li><b>Proxy:</b> वही interface, पर proxy तय करता है कि असली object <i>कब/बनेगा या नहीं</i> (lazy, permission, remote)।</li>
<li>Quick test: "क्या मैं interface बदल रहा हूँ? Feature जोड़ रहा हूँ? Access guard कर रहा हूँ?"</li>
</ul>
<p>Follow-up: "क्या एक class इनमें से दो हो सकती है?" — हाँ, caching proxy और caching decorator लगभग एक जैसे दिखते हैं; label मुख्य intent से तय होता है।</p>`,
        hg: `<ul>
<li><b>Adapter:</b> client ko <code>ISmsSender</code> chahiye, vendor deta hai <code>Dispatch(string[], string, int)</code>. Adapter translate karta hai. Andar aur bahar alag interface.</li>
<li><b>Decorator:</b> <code>IPriceService</code> andar, <code>IPriceService</code> bahar, upar se logging ya caching. Stack caller banata hai, layers milayi ja sakti hain.</li>
<li><b>Proxy:</b> wahi interface, par proxy tay karta hai ki asli object <i>kab/banega ya nahi</i> (lazy, permission, remote).</li>
<li>Quick test: "Kya main interface badal raha hoon? Feature jod raha hoon? Access guard kar raha hoon?"</li>
</ul>
<p>Follow-up: "Kya ek class inmein se do ho sakti hai?" — haan, caching proxy aur caching decorator lagbhag ek jaise dikhte hain; label mukhya intent se tay hota hai.</p>`
      }
    },
    {
      id: "decorator-dotnet-example",
      depth: "short",
      q: "Where do you see the Decorator pattern inside .NET itself?",
      answer: "Stream classes: GZipStream, BufferedStream and CryptoStream each wrap another Stream and are a Stream themselves, so they stack. DelegatingHandler and DI cache or logging wrappers are other examples.",
      meaning: {
        hi: "Stream classes: GZipStream, BufferedStream और CryptoStream हर एक दूसरे Stream को wrap करता है और खुद भी Stream है, इसलिए stack होते हैं। DelegatingHandler और DI के cache या logging wrappers और उदाहरण हैं।",
        hg: "Stream classes: GZipStream, BufferedStream aur CryptoStream har ek doosre Stream ko wrap karta hai aur khud bhi Stream hai, isliye stack hote hain. DelegatingHandler aur DI ke cache ya logging wrappers aur udaharan hain."
      },
      explain: {
        en: `<ul>
<li><code>new StreamWriter(new GZipStream(new FileStream(...), CompressionMode.Compress))</code> — text goes through compression to the file. Each layer only knows the <code>Stream</code> contract.</li>
<li>Because they share the base type, you can add <code>BufferedStream</code> or <code>CryptoStream</code> without changing the others.</li>
<li>Remember to dispose the outer layer (it usually disposes the inner one unless <code>leaveOpen: true</code>).</li>
<li>In your own code: a <code>CachingRepository</code> wrapping a <code>SqlRepository</code>, both <code>IRepository</code>.</li>
</ul>
<p>Follow-up: "Why not inheritance?" — with subclassing you need a class per combination (cached-and-logged, cached-only, logged-only...); decorators combine at composition time (Day 1: composition over inheritance).</p>`,
        hi: `<ul>
<li><code>new StreamWriter(new GZipStream(new FileStream(...), CompressionMode.Compress))</code> — text compression से होकर file में जाता है। हर layer सिर्फ़ <code>Stream</code> contract जानती है।</li>
<li>Base type एक है, इसलिए बाकी को बदले बिना <code>BufferedStream</code> या <code>CryptoStream</code> जोड़ सकते हो।</li>
<li>सबसे बाहरी layer को dispose करना याद रखो (वह आम तौर पर inner को भी dispose करती है, जब तक <code>leaveOpen: true</code> न हो)।</li>
<li>अपने code में: <code>SqlRepository</code> को wrap करती <code>CachingRepository</code>, दोनों <code>IRepository</code>।</li>
</ul>
<p>Follow-up: "Inheritance क्यों नहीं?" — subclassing में हर combination के लिए class चाहिए (cached-and-logged, सिर्फ़ cached, सिर्फ़ logged...); decorators composition के समय मिलते हैं (Day 1: composition over inheritance)।</p>`,
        hg: `<ul>
<li><code>new StreamWriter(new GZipStream(new FileStream(...), CompressionMode.Compress))</code> — text compression se hokar file mein jata hai. Har layer sirf <code>Stream</code> contract jaanti hai.</li>
<li>Base type ek hai, isliye baaki ko badle bina <code>BufferedStream</code> ya <code>CryptoStream</code> jod sakte ho.</li>
<li>Sabse bahari layer ko dispose karna yaad rakho (woh aam taur par inner ko bhi dispose karti hai, jab tak <code>leaveOpen: true</code> na ho).</li>
<li>Apne code mein: <code>SqlRepository</code> ko wrap karti <code>CachingRepository</code>, dono <code>IRepository</code>.</li>
</ul>
<p>Follow-up: "Inheritance kyun nahi?" — subclassing mein har combination ke liye class chahiye (cached-and-logged, sirf cached, sirf logged...); decorators composition ke samay milte hain (Day 1: composition over inheritance).</p>`
      }
    },
    {
      id: "strategy-when",
      depth: "short",
      q: "What is the Strategy pattern, and when would you use it?",
      answer: "It puts interchangeable algorithms behind one interface so the caller can swap them. I use it when a switch on type keeps growing, such as payment methods or discount rules.",
      meaning: {
        hi: "यह interchangeable algorithms को एक interface के पीछे रखता है ताकि caller उन्हें बदल सके। मैं इसे तब use करता हूँ जब type पर switch बढ़ती जाए, जैसे payment methods या discount rules।",
        hg: "Yeh interchangeable algorithms ko ek interface ke peeche rakhta hai taaki caller unhe badal sake. Main ise tab use karta hoon jab type par switch badhti jaye, jaise payment methods ya discount rules."
      },
      explain: {
        en: `<ul>
<li>Define <code>IDiscount.Apply(price)</code>; each rule is a class; the caller gets one through constructor injection or a key.</li>
<li>Adding a new rule = a new class + one registration — the Day 8 Open/Closed test.</li>
<li>For tiny cases a <code>Func&lt;decimal, decimal&gt;</code> is a strategy too; do not create an interface for one lambda.</li>
<li>Built-in examples: <code>IComparer&lt;T&gt;</code> with <code>Sort</code>, <code>IEqualityComparer&lt;T&gt;</code> with dictionaries.</li>
</ul>
<p>Follow-up: "Is a switch always bad?" — no; two stable branches are fine. Move to Strategy when it grows or when each branch needs its own dependencies and tests.</p>`,
        hi: `<ul>
<li><code>IDiscount.Apply(price)</code> बनाओ; हर rule एक class; caller को constructor injection या key से एक मिलता है।</li>
<li>नया rule जोड़ना = एक नई class + एक registration — Day 8 का Open/Closed test।</li>
<li>छोटे cases में <code>Func&lt;decimal, decimal&gt;</code> भी strategy है; एक lambda के लिए interface मत बनाओ।</li>
<li>Built-in उदाहरण: <code>Sort</code> के साथ <code>IComparer&lt;T&gt;</code>, dictionaries के साथ <code>IEqualityComparer&lt;T&gt;</code>।</li>
</ul>
<p>Follow-up: "क्या switch हमेशा बुरी है?" — नहीं; दो स्थिर branches ठीक हैं। जब बढ़े या हर branch को अपनी dependencies और tests चाहिए, तब Strategy पर जाओ।</p>`,
        hg: `<ul>
<li><code>IDiscount.Apply(price)</code> banao; har rule ek class; caller ko constructor injection ya key se ek milta hai.</li>
<li>Naya rule jodna = ek nayi class + ek registration — Day 8 ka Open/Closed test.</li>
<li>Chhote cases mein <code>Func&lt;decimal, decimal&gt;</code> bhi strategy hai; ek lambda ke liye interface mat banao.</li>
<li>Built-in udaharan: <code>Sort</code> ke saath <code>IComparer&lt;T&gt;</code>, dictionaries ke saath <code>IEqualityComparer&lt;T&gt;</code>.</li>
</ul>
<p>Follow-up: "Kya switch hamesha buri hai?" — nahi; do sthir branches theek hain. Jab badhe ya har branch ko apni dependencies aur tests chahiye, tab Strategy par jao.</p>`
      }
    },
    {
      id: "strategy-vs-state",
      depth: "short",
      q: "Strategy vs State — the diagrams look identical. How do you tell them apart?",
      answer: "Intent differs. The client picks a Strategy and it normally stays put. A State object changes itself as the context moves, so states know which state comes next.",
      meaning: {
        hi: "Intent अलग है। Strategy client चुनता है और वह आम तौर पर बनी रहती है। State object context के आगे बढ़ने पर खुद बदलता है, इसलिए states जानती हैं कि अगला state कौन सा है।",
        hg: "Intent alag hai. Strategy client chunta hai aur woh aam taur par bani rehti hai. State object context ke aage badhne par khud badalta hai, isliye states jaanti hain ki agla state kaun sa hai."
      },
      explain: {
        en: `<ul>
<li><b>Strategy:</b> "How should I calculate shipping?" — chosen from outside, strategies do not know each other.</li>
<li><b>State:</b> an order is Placed → Paid → Shipped; <code>Pay()</code> in <code>PlacedState</code> moves the context to <code>PaidState</code>; in <code>ShippedState</code> it throws or is ignored. The same call behaves differently per state.</li>
<li>Both use composition and polymorphism instead of <code>switch</code>/<code>if</code>.</li>
<li>In practice many teams model simple state machines with an <code>enum</code> and a transition table; use the full State pattern when each state has real, different behaviour.</li>
</ul>`,
        hi: `<ul>
<li><b>Strategy:</b> "shipping कैसे calculate करूँ?" — बाहर से चुनी जाती है, strategies एक-दूसरे को नहीं जानतीं।</li>
<li><b>State:</b> order Placed → Paid → Shipped होता है; <code>PlacedState</code> में <code>Pay()</code> context को <code>PaidState</code> पर ले जाता है; <code>ShippedState</code> में वह throw करता है या ignore होता है। वही call हर state में अलग चलती है।</li>
<li>दोनों <code>switch</code>/<code>if</code> की जगह composition और polymorphism use करते हैं।</li>
<li>Practice में कई teams सरल state machines <code>enum</code> और transition table से बनाती हैं; पूरा State pattern तब लो जब हर state का सच में अलग behaviour हो।</li>
</ul>`,
        hg: `<ul>
<li><b>Strategy:</b> "shipping kaise calculate karoon?" — bahar se chuni jati hai, strategies ek-doosre ko nahi jaantin.</li>
<li><b>State:</b> order Placed → Paid → Shipped hota hai; <code>PlacedState</code> mein <code>Pay()</code> context ko <code>PaidState</code> par le jata hai; <code>ShippedState</code> mein woh throw karta hai ya ignore hota hai. Wahi call har state mein alag chalti hai.</li>
<li>Dono <code>switch</code>/<code>if</code> ki jagah composition aur polymorphism use karte hain.</li>
<li>Practice mein kai teams saral state machines <code>enum</code> aur transition table se banati hain; poora State pattern tab lo jab har state ka sach mein alag behaviour ho.</li>
</ul>`
      }
    },
    {
      id: "observer-dotnet",
      depth: "short",
      q: "How is the Observer pattern implemented in .NET?",
      answer: "With C# events for in-process notification, or IObservable<T> and IObserver<T>, where Subscribe returns an IDisposable to unsubscribe. Handlers run synchronously in subscription order.",
      meaning: {
        hi: "In-process notification के लिए C# events से, या IObservable<T> और IObserver<T> से, जहाँ Subscribe unsubscribe के लिए IDisposable लौटाता है। Handlers synchronously, subscribe के क्रम में चलते हैं।",
        hg: "In-process notification ke liye C# events se, ya IObservable<T> aur IObserver<T> se, jahan Subscribe unsubscribe ke liye IDisposable lautata hai. Handlers synchronously, subscribe ke kram mein chalte hain."
      },
      explain: {
        en: `<ul>
<li><b>Event:</b> publisher declares <code>public event EventHandler&lt;T&gt;? Changed;</code> and raises it; subscribers use <code>+=</code> / <code>-=</code> (Day 2).</li>
<li><b>IObservable&lt;T&gt;:</b> push-based stream with <code>OnNext</code>, <code>OnError</code>, <code>OnCompleted</code>. Reactive Extensions (Rx, a separate package) adds LINQ-like operators over it.</li>
<li>Both are in-process and synchronous by default. A slow handler slows the publisher; an exception can stop later handlers.</li>
<li>For cross-service or reliable delivery, use a message broker, not an event.</li>
</ul>
<p>Follow-up: "What can go wrong?" — leaks from forgotten unsubscribe, handler exceptions, ordering assumptions, and raising from a background thread into UI code.</p>`,
        hi: `<ul>
<li><b>Event:</b> publisher <code>public event EventHandler&lt;T&gt;? Changed;</code> declare करके raise करता है; subscribers <code>+=</code> / <code>-=</code> करते हैं (Day 2)।</li>
<li><b>IObservable&lt;T&gt;:</b> push-based stream, <code>OnNext</code>, <code>OnError</code>, <code>OnCompleted</code> के साथ। Reactive Extensions (Rx, अलग package) उस पर LINQ जैसे operators जोड़ता है।</li>
<li>दोनों in-process और default रूप से synchronous हैं। धीमा handler publisher को धीमा करता है; एक exception बाद के handlers रोक सकता है।</li>
<li>Cross-service या भरोसेमंद delivery के लिए message broker लो, event नहीं।</li>
</ul>
<p>Follow-up: "क्या गलत हो सकता है?" — unsubscribe भूलने से leak, handler exceptions, ordering की धारणाएँ, और background thread से UI code में raise करना।</p>`,
        hg: `<ul>
<li><b>Event:</b> publisher <code>public event EventHandler&lt;T&gt;? Changed;</code> declare karke raise karta hai; subscribers <code>+=</code> / <code>-=</code> karte hain (Day 2).</li>
<li><b>IObservable&lt;T&gt;:</b> push-based stream, <code>OnNext</code>, <code>OnError</code>, <code>OnCompleted</code> ke saath. Reactive Extensions (Rx, alag package) us par LINQ jaise operators jodta hai.</li>
<li>Dono in-process aur default roop se synchronous hain. Dheema handler publisher ko dheema karta hai; ek exception baad ke handlers rok sakta hai.</li>
<li>Cross-service ya bharosemand delivery ke liye message broker lo, event nahi.</li>
</ul>
<p>Follow-up: "Kya galat ho sakta hai?" — unsubscribe bhoolne se leak, handler exceptions, ordering ki dharnayein, aur background thread se UI code mein raise karna.</p>`
      }
    },
    {
      id: "observer-vs-mediator",
      depth: "short",
      q: "Observer vs Mediator — what is the difference?",
      answer: "Observer broadcasts one-to-many and the subject does not know its subscribers. Mediator is a hub that coordinates specific colleagues and holds the interaction rules, so they never reference each other.",
      meaning: {
        hi: "Observer one-to-many broadcast करता है और subject अपने subscribers को नहीं जानता। Mediator एक hub है जो तय साथियों को coordinate करता है और interaction rules रखता है, ताकि वे एक-दूसरे को reference न करें।",
        hg: "Observer one-to-many broadcast karta hai aur subject apne subscribers ko nahi jaanta. Mediator ek hub hai jo tay saathiyon ko coordinate karta hai aur interaction rules rakhta hai, taaki woh ek-doosre ko reference na karein."
      },
      explain: {
        en: `<ul>
<li><b>Observer:</b> price changed → whoever subscribed reacts. Direction is subject → observers; logic lives in each observer.</li>
<li><b>Mediator:</b> in a form, the "country" dropdown changing must reload "state", disable "pin code"... The mediator (form controller) holds those rules; the controls only tell it "I changed".</li>
<li>A mediator often <i>uses</i> observer-style events internally to hear from colleagues.</li>
<li>Risk: the mediator grows into a god object; the benefit: interaction rules in one place, easy to read and test.</li>
</ul>`,
        hi: `<ul>
<li><b>Observer:</b> price बदला → जिसने subscribe किया वह react करता है। Direction subject → observers; logic हर observer में।</li>
<li><b>Mediator:</b> form में "country" dropdown बदलने पर "state" reload हो, "pin code" disable हो... वे rules mediator (form controller) में हैं; controls बस बताते हैं "मैं बदला"।</li>
<li>Mediator अक्सर colleagues की बात सुनने के लिए अंदर observer-style events <i>use</i> करता है।</li>
<li>Risk: mediator god object बन जाए; फ़ायदा: interaction rules एक जगह, पढ़ने और test करने में आसान।</li>
</ul>`,
        hg: `<ul>
<li><b>Observer:</b> price badla → jisne subscribe kiya woh react karta hai. Direction subject → observers; logic har observer mein.</li>
<li><b>Mediator:</b> form mein "country" dropdown badalne par "state" reload ho, "pin code" disable ho... woh rules mediator (form controller) mein hain; controls bas batate hain "main badla".</li>
<li>Mediator aksar colleagues ki baat sunne ke liye andar observer-style events <i>use</i> karta hai.</li>
<li>Risk: mediator god object ban jaye; fayda: interaction rules ek jagah, padhne aur test karne mein aasan.</li>
</ul>`
      }
    },
    {
      id: "chain-middleware",
      depth: "short",
      q: "Where does Chain of Responsibility appear in ASP.NET Core?",
      answer: "In the middleware pipeline. Each middleware receives next, can run code before and after it, or short-circuit by not calling it. Registration order is the order of the chain.",
      meaning: {
        hi: "Middleware pipeline में। हर middleware को next मिलता है, वह उसके पहले और बाद code चला सकता है, या उसे न बुलाकर short-circuit कर सकता है। Registration का क्रम ही chain का क्रम है।",
        hg: "Middleware pipeline mein. Har middleware ko next milta hai, woh uske pehle aur baad code chala sakta hai, ya use na bulakar short-circuit kar sakta hai. Registration ka kram hi chain ka kram hai."
      },
      explain: {
        en: `<ul>
<li>Authentication middleware can end the request with 401 without calling <code>next</code> — a link that stops the chain.</li>
<li>Logging or exception middleware calls <code>next</code> inside a try/log block — it behaves like a decorator around the rest.</li>
<li>Order matters: for example exception handling first (outermost), then authentication before authorization. Day 12 covers the pipeline in detail.</li>
<li>The "Middleware-style pipeline" code in this day builds the same shape from plain delegates.</li>
</ul>
<p>Follow-up: "Is middleware a Decorator or a Chain?" — It is a chain built from delegates; individual middleware often acts like a decorator, but it may short-circuit.</p>`,
        hi: `<ul>
<li>Authentication middleware <code>next</code> बुलाए बिना 401 से request ख़त्म कर सकता है — chain रोकने वाला link।</li>
<li>Logging या exception middleware try/log block के अंदर <code>next</code> बुलाता है — बाक़ी के चारों ओर decorator जैसा।</li>
<li>Order मायने रखता है: जैसे exception handling पहले (सबसे बाहर), फिर authorization से पहले authentication। Day 12 में pipeline विस्तार से है।</li>
<li>इस दिन का "Middleware-style pipeline" code साधारण delegates से वही shape बनाता है।</li>
</ul>
<p>Follow-up: "Middleware Decorator है या Chain?" — यह delegates से बनी chain है; अलग-अलग middleware अक्सर decorator जैसा चलता है, पर short-circuit भी कर सकता है।</p>`,
        hg: `<ul>
<li>Authentication middleware <code>next</code> bulaye bina 401 se request khatam kar sakta hai — chain rokne wala link.</li>
<li>Logging ya exception middleware try/log block ke andar <code>next</code> bulata hai — baaki ke charon or decorator jaisa.</li>
<li>Order mayne rakhta hai: jaise exception handling pehle (sabse bahar), phir authorization se pehle authentication. Day 12 mein pipeline vistar se hai.</li>
<li>Is din ka "Middleware-style pipeline" code saadharan delegates se wahi shape banata hai.</li>
</ul>
<p>Follow-up: "Middleware Decorator hai ya Chain?" — yeh delegates se bani chain hai; alag-alag middleware aksar decorator jaisa chalta hai, par short-circuit bhi kar sakta hai.</p>`
      }
    },
    {
      id: "chain-vs-decorator",
      depth: "short",
      q: "Chain of Responsibility vs Decorator — how do you distinguish them?",
      answer: "A chain link decides whether to handle the request or pass it on, and can stop it. A Decorator normally always delegates to its inner object and adds behaviour around the call.",
      meaning: {
        hi: "Chain का link तय करता है कि request को संभाले या आगे दे, और उसे रोक सकता है। Decorator आम तौर पर हमेशा अपने inner object को call देता है और call के चारों ओर behaviour जोड़ता है।",
        hg: "Chain ka link tay karta hai ki request ko sambhale ya aage de, aur use rok sakta hai. Decorator aam taur par hamesha apne inner object ko call deta hai aur call ke charon or behaviour jodta hai."
      },
      explain: {
        en: `<ul>
<li><b>Chain:</b> approval limits — the first approver with enough authority handles it and the rest never see it. The sender does not know which one acts.</li>
<li><b>Decorator:</b> logging around caching around the real service — all layers run for each call (a cache decorator may skip the inner call on a hit, which is where the two ideas blur).</li>
<li>Structure is similar (each holds the next). Ask: "is the purpose to <i>choose a handler</i>, or to <i>add behaviour</i> to one object?"</li>
</ul>`,
        hi: `<ul>
<li><b>Chain:</b> approval limits — पर्याप्त authority वाला पहला approver संभालता है और बाक़ी उसे देखते भी नहीं। भेजने वाले को नहीं पता कौन काम करेगा।</li>
<li><b>Decorator:</b> असली service के ऊपर caching, उसके ऊपर logging — हर call पर सारी layers चलती हैं (cache decorator hit पर inner call छोड़ सकता है, यहीं दोनों idea धुँधले होते हैं)।</li>
<li>Structure मिलता-जुलता है (हर एक अगले को पकड़ता है)। पूछो: "मक़सद <i>handler चुनना</i> है, या एक object में <i>behaviour जोड़ना</i>?"</li>
</ul>`,
        hg: `<ul>
<li><b>Chain:</b> approval limits — paryapt authority wala pehla approver sambhalta hai aur baaki use dekhte bhi nahi. Bhejne wale ko nahi pata kaun kaam karega.</li>
<li><b>Decorator:</b> asli service ke upar caching, uske upar logging — har call par saari layers chalti hain (cache decorator hit par inner call chhod sakta hai, yahin dono idea dhundhle hote hain).</li>
<li>Structure milta-julta hai (har ek agle ko pakadta hai). Poocho: "maksad <i>handler chunna</i> hai, ya ek object mein <i>behaviour jodna</i>?"</li>
</ul>`
      }
    },
    {
      id: "adapter-sdk-boundary",
      depth: "detailed",
      q: "How would you integrate a third-party SDK so that changing the vendor later is cheap?",
      answer: "Define my own interface in the domain, implement it with an Adapter in Infrastructure that wraps the SDK, and register it in DI. Vendor types never leak outward, and tests use a fake.",
      meaning: {
        hi: "Domain में अपना interface बनाऊँगा, Infrastructure में उसे Adapter से implement करूँगा जो SDK को wrap करे, और DI में register करूँगा। Vendor types बाहर नहीं निकलते, और tests fake use करते हैं।",
        hg: "Domain mein apna interface banaunga, Infrastructure mein use Adapter se implement karunga jo SDK ko wrap kare, aur DI mein register karunga. Vendor types bahar nahi nikalte, aur tests fake use karte hain."
      },
      explain: {
        en: `<ul>
<li>The interface speaks <b>your</b> language (<code>Send(phone, text)</code>), not the vendor's (<code>Dispatch(string[], payload, priority)</code>).</li>
<li>The adapter maps vendor errors and status codes to your own results or exceptions, so callers do not depend on vendor error types.</li>
<li>Switching vendor = a new adapter + one registration; business code is untouched (Day 8 DIP/OCP).</li>
<li>This is also an "anti-corruption layer" idea at class level.</li>
</ul>
<p>Trade-off: an extra interface per vendor. Skip it for a trivial, stable, low-risk library (for example a JSON serializer) — wrapping everything is noise.</p>
<p>Follow-up: "What if the SDK has 40 methods?" — expose only the 3 your domain uses; do not mirror the SDK.</p>`,
        hi: `<ul>
<li>Interface <b>आपकी</b> भाषा बोलता है (<code>Send(phone, text)</code>), vendor की नहीं (<code>Dispatch(string[], payload, priority)</code>)।</li>
<li>Adapter vendor के errors और status codes को आपके अपने results या exceptions में map करता है, ताकि callers vendor के error types पर निर्भर न हों।</li>
<li>Vendor बदलना = नया adapter + एक registration; business code अछूता (Day 8 DIP/OCP)।</li>
<li>यह class level पर "anti-corruption layer" का idea भी है।</li>
</ul>
<p>Trade-off: हर vendor के लिए एक extra interface। मामूली, स्थिर, कम-जोखिम library (जैसे JSON serializer) के लिए छोड़ दो — सब कुछ wrap करना शोर है।</p>
<p>Follow-up: "SDK में 40 methods हों तो?" — सिर्फ़ वे 3 expose करो जो आपका domain use करता है; SDK की नक़ल मत करो।</p>`,
        hg: `<ul>
<li>Interface <b>aapki</b> bhasha bolta hai (<code>Send(phone, text)</code>), vendor ki nahi (<code>Dispatch(string[], payload, priority)</code>).</li>
<li>Adapter vendor ke errors aur status codes ko aapke apne results ya exceptions mein map karta hai, taaki callers vendor ke error types par nirbhar na hon.</li>
<li>Vendor badalna = naya adapter + ek registration; business code achhuta (Day 8 DIP/OCP).</li>
<li>Yeh class level par "anti-corruption layer" ka idea bhi hai.</li>
</ul>
<p>Trade-off: har vendor ke liye ek extra interface. Maamooli, sthir, kam-jokhim library (jaise JSON serializer) ke liye chhod do — sab kuch wrap karna shor hai.</p>
<p>Follow-up: "SDK mein 40 methods hon to?" — sirf woh 3 expose karo jo aapka domain use karta hai; SDK ki nakal mat karo.</p>`
      }
    },
    {
      id: "facade-vs-adapter",
      depth: "detailed",
      q: "What is the difference between Facade and Adapter?",
      answer: "Adapter makes one existing class fit an interface that is already expected. Facade designs a new, simpler interface over several classes or a whole subsystem.",
      meaning: {
        hi: "Adapter एक मौजूदा class को पहले से expected interface में फ़िट करता है। Facade कई classes या पूरे subsystem के ऊपर नया, सरल interface बनाता है।",
        hg: "Adapter ek maujooda class ko pehle se expected interface mein fit karta hai. Facade kai classes ya poore subsystem ke upar naya, saral interface banata hai."
      },
      explain: {
        en: `<ul>
<li><b>Adapter:</b> the target interface exists first (yours); you bend a vendor class to it. One-to-one translation.</li>
<li><b>Facade:</b> you invent the simple interface (<code>PlaceOrder</code>) and hide the call sequence over inventory, payment and notification.</li>
<li>A Facade does not stop people from using the subsystem directly if they need to.</li>
<li>Both reduce coupling to messy APIs; Adapter is about <i>compatibility</i>, Facade about <i>simplicity</i>.</li>
</ul>`,
        hi: `<ul>
<li><b>Adapter:</b> target interface पहले से है (आपका); आप vendor class को उसमें मोड़ते हो। एक-से-एक translation।</li>
<li><b>Facade:</b> आप सरल interface (<code>PlaceOrder</code>) खुद बनाते हो और inventory, payment, notification पर call sequence छुपाते हो।</li>
<li>Facade लोगों को ज़रूरत हो तो subsystem सीधे use करने से नहीं रोकता।</li>
<li>दोनों गंदे APIs से coupling घटाते हैं; Adapter <i>compatibility</i> के लिए, Facade <i>simplicity</i> के लिए।</li>
</ul>`,
        hg: `<ul>
<li><b>Adapter:</b> target interface pehle se hai (aapka); aap vendor class ko usme modte ho. Ek-se-ek translation.</li>
<li><b>Facade:</b> aap saral interface (<code>PlaceOrder</code>) khud banate ho aur inventory, payment, notification par call sequence chhupate ho.</li>
<li>Facade logon ko zarurat ho to subsystem seedhe use karne se nahi rokta.</li>
<li>Dono gande APIs se coupling ghataate hain; Adapter <i>compatibility</i> ke liye, Facade <i>simplicity</i> ke liye.</li>
</ul>`
      }
    },
    {
      id: "facade-god-class",
      depth: "detailed",
      q: "Is there a downside to a Facade? How do you keep it healthy?",
      answer: "It can grow into a god class that holds business rules and every use case. Keep it a thin coordinator, split by use case, and leave real logic in the subsystems.",
      meaning: {
        hi: "यह god class बन सकता है जिसमें business rules और हर use case भर जाए। इसे पतला coordinator रखो, use case के हिसाब से बाँटो, और असली logic subsystems में छोड़ो।",
        hg: "Yeh god class ban sakta hai jisme business rules aur har use case bhar jaye. Ise patla coordinator rakho, use case ke hisaab se baanto, aur asli logic subsystems mein chhodo."
      },
      explain: {
        en: `<ul>
<li>Smell: the facade has 30 methods, many dependencies, and <code>if</code>s about pricing or eligibility.</li>
<li>Fix: one facade (application service) per use case or area, e.g. <code>CheckoutService</code>, <code>ReturnsService</code>; move rules to domain classes.</li>
<li>Another trap: hiding errors. A good facade still reports which step failed.</li>
<li>Do not add a facade over one class "just to be tidy" — it adds a hop with no gain.</li>
</ul>`,
        hi: `<ul>
<li>Smell: facade में 30 methods, कई dependencies, और pricing या eligibility के <code>if</code>।</li>
<li>Fix: हर use case या area के लिए एक facade (application service), जैसे <code>CheckoutService</code>, <code>ReturnsService</code>; rules domain classes में ले जाओ।</li>
<li>एक और जाल: errors छुपाना। अच्छा facade फिर भी बताता है कि कौन सा step fail हुआ।</li>
<li>एक class के ऊपर "बस साफ़-सुथरा दिखने के लिए" facade मत जोड़ो — बिना फ़ायदे के एक hop बढ़ता है।</li>
</ul>`,
        hg: `<ul>
<li>Smell: facade mein 30 methods, kai dependencies, aur pricing ya eligibility ke <code>if</code>.</li>
<li>Fix: har use case ya area ke liye ek facade (application service), jaise <code>CheckoutService</code>, <code>ReturnsService</code>; rules domain classes mein le jao.</li>
<li>Ek aur jaal: errors chhupana. Achha facade phir bhi batata hai ki kaun sa step fail hua.</li>
<li>Ek class ke upar "bas saaf-suthra dikhne ke liye" facade mat jodo — bina fayde ke ek hop badhta hai.</li>
</ul>`
      }
    },
    {
      id: "decorator-di-registration",
      depth: "detailed",
      q: "How do you register a Decorator with the built-in DI container?",
      answer: "Register the inner type, then register the interface with a factory that wraps it, as in the code on this page. Libraries like Scrutor offer a Decorate helper, but they are optional.",
      meaning: {
        hi: "Inner type register करो, फिर interface को ऐसी factory से register करो जो उसे wrap करे, जैसा इस page के code में है। Scrutor जैसी libraries Decorate helper देती हैं, पर वे optional हैं।",
        hg: "Inner type register karo, phir interface ko aisi factory se register karo jo use wrap kare, jaisa is page ke code mein hai. Scrutor jaisi libraries Decorate helper deti hain, par woh optional hain."
      },
      explain: {
        en: `<ul>
<li><b>Manual:</b> <code>services.AddSingleton&lt;SqlRepo&gt;(); services.AddSingleton&lt;IRepo&gt;(sp =&gt; new CachedRepo(sp.GetRequiredService&lt;SqlRepo&gt;()));</code></li>
<li><b>Library:</b> Scrutor's <code>services.Decorate&lt;IRepo, CachedRepo&gt;()</code> reduces boilerplate when you have many decorators. Weigh a new dependency against ~3 lines.</li>
<li><b>Lifetimes:</b> the decorator should not outlive the inner service. A singleton decorator over a scoped inner service holds a stale or disposed instance.</li>
<li><b>Order:</b> the last wrapper registered is the outermost one (for the manual approach, whatever you build last).</li>
<li>Keyed services choose <i>between</i> implementations; they do not wrap.</li>
</ul>`,
        hi: `<ul>
<li><b>Manual:</b> <code>services.AddSingleton&lt;SqlRepo&gt;(); services.AddSingleton&lt;IRepo&gt;(sp =&gt; new CachedRepo(sp.GetRequiredService&lt;SqlRepo&gt;()));</code></li>
<li><b>Library:</b> Scrutor का <code>services.Decorate&lt;IRepo, CachedRepo&gt;()</code> कई decorators होने पर boilerplate घटाता है। नई dependency को ~3 lines के सामने तौलो।</li>
<li><b>Lifetimes:</b> decorator को inner service से ज़्यादा नहीं जीना चाहिए। scoped inner service के ऊपर singleton decorator पुराना या dispose हो चुका instance पकड़ता है।</li>
<li><b>Order:</b> manual तरीक़े में जो wrapper आख़िर में बनाओ वही सबसे बाहरी होता है।</li>
<li>Keyed services implementations के <i>बीच</i> चुनती हैं; wrap नहीं करतीं।</li>
</ul>`,
        hg: `<ul>
<li><b>Manual:</b> <code>services.AddSingleton&lt;SqlRepo&gt;(); services.AddSingleton&lt;IRepo&gt;(sp =&gt; new CachedRepo(sp.GetRequiredService&lt;SqlRepo&gt;()));</code></li>
<li><b>Library:</b> Scrutor ka <code>services.Decorate&lt;IRepo, CachedRepo&gt;()</code> kai decorators hone par boilerplate ghataata hai. Nayi dependency ko ~3 lines ke saamne taulo.</li>
<li><b>Lifetimes:</b> decorator ko inner service se zyada nahi jeena chahiye. scoped inner service ke upar singleton decorator purana ya dispose ho chuka instance pakadta hai.</li>
<li><b>Order:</b> manual tarike mein jo wrapper aakhir mein banao wahi sabse bahari hota hai.</li>
<li>Keyed services implementations ke <i>beech</i> chunti hain; wrap nahi karti.</li>
</ul>`
      }
    },
    {
      id: "proxy-kinds",
      depth: "detailed",
      q: "What kinds of Proxy are there, and where do you meet them in .NET?",
      answer: "Virtual (lazy creation), protection (permission checks), remote (local-looking call to a remote service), and caching or logging proxies. EF Core lazy-loading proxies and DispatchProxy are .NET examples.",
      meaning: {
        hi: "Virtual (lazy creation), protection (permission checks), remote (remote service को local जैसा call), और caching या logging proxies। EF Core lazy-loading proxies और DispatchProxy .NET के उदाहरण हैं।",
        hg: "Virtual (lazy creation), protection (permission checks), remote (remote service ko local jaisa call), aur caching ya logging proxies. EF Core lazy-loading proxies aur DispatchProxy .NET ke udaharan hain."
      },
      explain: {
        en: `<ul>
<li><b>Virtual:</b> EF Core lazy loading (Day 5) — a generated subclass of your entity loads a navigation property on first access (hence <code>virtual</code> properties).</li>
<li><b>Protection:</b> a wrapper that checks the role before calling the real service.</li>
<li><b>Remote:</b> a typed client or generated API client hides HTTP behind a method call — "remote proxy" idea, although you still must handle latency and failure.</li>
<li><b>Dynamic:</b> <code>DispatchProxy</code> builds a proxy for an interface at runtime with one <code>Invoke</code> method — handy for cross-cutting code, with reflection cost.</li>
</ul>
<p>TL angle: lazy loading hides database round-trips (N+1) — a classic proxy downside: the cost is invisible at the call site.</p>`,
        hi: `<ul>
<li><b>Virtual:</b> EF Core lazy loading (Day 5) — आपकी entity की generated subclass पहले access पर navigation property load करती है (इसीलिए <code>virtual</code> properties)।</li>
<li><b>Protection:</b> असली service बुलाने से पहले role जाँचने वाला wrapper।</li>
<li><b>Remote:</b> typed client या generated API client HTTP को method call के पीछे छुपाता है — "remote proxy" idea, हालाँकि latency और failure आपको फिर भी संभालनी है।</li>
<li><b>Dynamic:</b> <code>DispatchProxy</code> runtime पर interface का proxy एक <code>Invoke</code> method से बनाता है — cross-cutting code के लिए काम का, reflection की cost के साथ।</li>
</ul>
<p>TL angle: lazy loading database round-trips (N+1) छुपाता है — proxy की classic कमज़ोरी: cost call site पर दिखती नहीं।</p>`,
        hg: `<ul>
<li><b>Virtual:</b> EF Core lazy loading (Day 5) — aapki entity ki generated subclass pehle access par navigation property load karti hai (isiliye <code>virtual</code> properties).</li>
<li><b>Protection:</b> asli service bulane se pehle role jaanchne wala wrapper.</li>
<li><b>Remote:</b> typed client ya generated API client HTTP ko method call ke peeche chhupata hai — "remote proxy" idea, haalanki latency aur failure aapko phir bhi sambhalni hai.</li>
<li><b>Dynamic:</b> <code>DispatchProxy</code> runtime par interface ka proxy ek <code>Invoke</code> method se banata hai — cross-cutting code ke liye kaam ka, reflection ki cost ke saath.</li>
</ul>
<p>TL angle: lazy loading database round-trips (N+1) chhupata hai — proxy ki classic kamzori: cost call site par dikhti nahi.</p>`
      }
    },
    {
      id: "strategy-di-keyed",
      depth: "detailed",
      q: "How do you choose a Strategy at runtime when using dependency injection?",
      answer: "Register each strategy under a key with AddKeyedSingleton and resolve by key at the composition root, or inject IEnumerable<IStrategy> and pick one by a property. Avoid injecting IServiceProvider into business code.",
      meaning: {
        hi: "हर strategy को AddKeyedSingleton से key के साथ register करो और composition root पर key से resolve करो, या IEnumerable<IStrategy> inject करके property से एक चुनो। Business code में IServiceProvider inject करने से बचो।",
        hg: "Har strategy ko AddKeyedSingleton se key ke saath register karo aur composition root par key se resolve karo, ya IEnumerable<IStrategy> inject karke property se ek chuno. Business code mein IServiceProvider inject karne se bacho."
      },
      explain: {
        en: `<ul>
<li><b>Keyed:</b> <code>AddKeyedSingleton&lt;IDiscount, FestivalDiscount&gt;("festival")</code>; a fixed choice uses <code>[FromKeyedServices("festival")]</code> on the constructor parameter (.NET 8+, Day 9).</li>
<li><b>Runtime key:</b> inject a <code>Func&lt;string, IDiscount&gt;</code> registered over <code>GetRequiredKeyedService</code> (code on this page).</li>
<li><b>All of them:</b> <code>IEnumerable&lt;IDiscount&gt;</code> and a <code>Name</code> property; fine for a handful.</li>
<li>Keyed registrations are not returned for a plain <code>GetService&lt;IDiscount&gt;()</code> request — see the puzzle.</li>
</ul>
<p>Follow-up: "Unknown key?" — <code>GetRequiredKeyedService</code> throws; validate input or use <code>GetKeyedService</code> and handle <code>null</code>.</p>`,
        hi: `<ul>
<li><b>Keyed:</b> <code>AddKeyedSingleton&lt;IDiscount, FestivalDiscount&gt;("festival")</code>; fixed choice में constructor parameter पर <code>[FromKeyedServices("festival")]</code> (.NET 8+, Day 9)।</li>
<li><b>Runtime key:</b> <code>GetRequiredKeyedService</code> पर register किया <code>Func&lt;string, IDiscount&gt;</code> inject करो (इस page का code)।</li>
<li><b>सब कुछ:</b> <code>IEnumerable&lt;IDiscount&gt;</code> और <code>Name</code> property; मुट्ठी भर के लिए ठीक।</li>
<li>Keyed registrations सादे <code>GetService&lt;IDiscount&gt;()</code> request पर नहीं मिलतीं — puzzle देखो।</li>
</ul>
<p>Follow-up: "Key अनजान हो तो?" — <code>GetRequiredKeyedService</code> throw करता है; input validate करो या <code>GetKeyedService</code> लेकर <code>null</code> संभालो।</p>`,
        hg: `<ul>
<li><b>Keyed:</b> <code>AddKeyedSingleton&lt;IDiscount, FestivalDiscount&gt;("festival")</code>; fixed choice mein constructor parameter par <code>[FromKeyedServices("festival")]</code> (.NET 8+, Day 9).</li>
<li><b>Runtime key:</b> <code>GetRequiredKeyedService</code> par register kiya <code>Func&lt;string, IDiscount&gt;</code> inject karo (is page ka code).</li>
<li><b>Sab kuch:</b> <code>IEnumerable&lt;IDiscount&gt;</code> aur <code>Name</code> property; mutthi bhar ke liye theek.</li>
<li>Keyed registrations saade <code>GetService&lt;IDiscount&gt;()</code> request par nahi milti — puzzle dekho.</li>
</ul>
<p>Follow-up: "Key anjaan ho to?" — <code>GetRequiredKeyedService</code> throw karta hai; input validate karo ya <code>GetKeyedService</code> lekar <code>null</code> sambhalo.</p>`
      }
    },
    {
      id: "event-memory-leak",
      depth: "detailed",
      q: "How can C# events cause memory leaks, and how do you prevent them?",
      answer: "The publisher's delegate list holds a reference to every subscriber. A long-lived publisher, such as a static event, keeps short-lived subscribers alive unless they unsubscribe with -= or Dispose.",
      meaning: {
        hi: "Publisher की delegate list हर subscriber का reference रखती है। लंबी उम्र वाला publisher, जैसे static event, छोटी उम्र के subscribers को ज़िंदा रखता है जब तक वे -= या Dispose से unsubscribe न करें।",
        hg: "Publisher ki delegate list har subscriber ka reference rakhti hai. Lambi umr wala publisher, jaise static event, chhoti umr ke subscribers ko zinda rakhta hai jab tak woh -= ya Dispose se unsubscribe na karein."
      },
      explain: {
        en: `<ul>
<li><code>publisher.Changed += view.OnChanged</code> makes <code>publisher → view</code> a reference. If the publisher lives for the whole app and the view should die, the view stays in memory.</li>
<li><b>Prevent:</b> unsubscribe in <code>Dispose</code>, in a "closed" handler, or use a short-lived publisher. Keep the delegate reference when you subscribe with a lambda, otherwise <code>-=</code> with a new lambda does not remove it (see the puzzle).</li>
<li>Weak events exist in some UI frameworks but are not a general .NET default.</li>
<li>Profile suspicion: growing instances of your subscriber class in a memory snapshot, rooted by an event delegate.</li>
</ul>`,
        hi: `<ul>
<li><code>publisher.Changed += view.OnChanged</code> से <code>publisher → view</code> reference बनता है। Publisher पूरे app जितना जिए और view को मरना हो, तो view memory में रहता है।</li>
<li><b>Prevent:</b> <code>Dispose</code> में, "closed" handler में unsubscribe करो, या छोटी उम्र का publisher रखो। Lambda से subscribe करो तो delegate का reference रखो, वरना नए lambda से <code>-=</code> उसे नहीं हटाता (puzzle देखो)।</li>
<li>कुछ UI frameworks में weak events होते हैं पर वे general .NET default नहीं हैं।</li>
<li>Profile में शक: memory snapshot में आपकी subscriber class के बढ़ते instances, जिन्हें event delegate पकड़े है।</li>
</ul>`,
        hg: `<ul>
<li><code>publisher.Changed += view.OnChanged</code> se <code>publisher → view</code> reference banta hai. Publisher poore app jitna jiye aur view ko marna ho, to view memory mein rehta hai.</li>
<li><b>Prevent:</b> <code>Dispose</code> mein, "closed" handler mein unsubscribe karo, ya chhoti umr ka publisher rakho. Lambda se subscribe karo to delegate ka reference rakho, warna naye lambda se <code>-=</code> use nahi hatata (puzzle dekho).</li>
<li>Kuch UI frameworks mein weak events hote hain par woh general .NET default nahi hain.</li>
<li>Profile mein shak: memory snapshot mein aapki subscriber class ke badhte instances, jinhe event delegate pakde hai.</li>
</ul>`
      }
    },
    {
      id: "event-vs-iobservable",
      depth: "detailed",
      q: "When would you choose IObservable<T> over a plain C# event?",
      answer: "When I need streams: composing, filtering or throttling notifications with Rx operators, or explicit completion and error signals. For simple in-process notifications, a plain event is lighter and enough.",
      meaning: {
        hi: "जब मुझे streams चाहिए: Rx operators से notifications को compose, filter या throttle करना, या साफ़ completion और error signals। सरल in-process notifications के लिए सादा event हल्का और काफ़ी है।",
        hg: "Jab mujhe streams chahiye: Rx operators se notifications ko compose, filter ya throttle karna, ya saaf completion aur error signals. Saral in-process notifications ke liye saada event halka aur kaafi hai."
      },
      explain: {
        en: `<ul>
<li><b>Event:</b> built into the language, no dependency, minimal ceremony. No built-in way to say "finished" or "failed".</li>
<li><b>IObservable&lt;T&gt;:</b> the interfaces are in the BCL; the useful operators (<code>Where</code>, <code>Throttle</code>, <code>Merge</code>) come from the Rx package <code>System.Reactive</code> (extra dependency, learning curve).</li>
<li>Subscribing returns an <code>IDisposable</code>, which makes lifetime management (and avoiding leaks) explicit.</li>
<li>For async streams that you pull, also look at <code>IAsyncEnumerable&lt;T&gt;</code> and <code>Channel&lt;T&gt;</code> (Day 3).</li>
</ul>`,
        hi: `<ul>
<li><b>Event:</b> language में built-in, कोई dependency नहीं, कम रस्म-अदायगी। "ख़त्म" या "fail" बताने का built-in तरीक़ा नहीं।</li>
<li><b>IObservable&lt;T&gt;:</b> interfaces BCL में हैं; काम के operators (<code>Where</code>, <code>Throttle</code>, <code>Merge</code>) Rx package <code>System.Reactive</code> से आते हैं (extra dependency, सीखने की curve)।</li>
<li>Subscribe करने पर <code>IDisposable</code> मिलता है, जिससे lifetime management (और leaks से बचाव) साफ़ हो जाता है।</li>
<li>जिन async streams को आप pull करते हो, उनके लिए <code>IAsyncEnumerable&lt;T&gt;</code> और <code>Channel&lt;T&gt;</code> भी देखो (Day 3)।</li>
</ul>`,
        hg: `<ul>
<li><b>Event:</b> language mein built-in, koi dependency nahi, kam rasm-adayegi. "Khatam" ya "fail" batane ka built-in tarika nahi.</li>
<li><b>IObservable&lt;T&gt;:</b> interfaces BCL mein hain; kaam ke operators (<code>Where</code>, <code>Throttle</code>, <code>Merge</code>) Rx package <code>System.Reactive</code> se aate hain (extra dependency, seekhne ki curve).</li>
<li>Subscribe karne par <code>IDisposable</code> milta hai, jisse lifetime management (aur leaks se bachav) saaf ho jata hai.</li>
<li>Jin async streams ko aap pull karte ho, unke liye <code>IAsyncEnumerable&lt;T&gt;</code> aur <code>Channel&lt;T&gt;</code> bhi dekho (Day 3).</li>
</ul>`
      }
    },
    {
      id: "mediator-vs-mediatr",
      depth: "detailed",
      q: "Is the Mediator pattern the same as the MediatR library, and do we need MediatR?",
      answer: "No. Mediator is a pattern; MediatR is one library implementing an in-process request/handler version of it. It is optional. Plain method calls or a small hand-written mediator are often enough.",
      meaning: {
        hi: "नहीं। Mediator एक pattern है; MediatR उसका in-process request/handler version implement करने वाली एक library है। यह optional है। सीधे method calls या छोटा हाथ से लिखा mediator अक्सर काफ़ी है।",
        hg: "Nahi. Mediator ek pattern hai; MediatR uska in-process request/handler version implement karne wali ek library hai. Yeh optional hai. Seedhe method calls ya chhota haath se likha mediator aksar kaafi hai."
      },
      explain: {
        en: `<ul>
<li>A mediator can be 20 lines (the chat room code on this page). MediatR adds request/response handlers, notifications and pipeline behaviours (cross-cutting code around handlers).</li>
<li><b>Trade-offs:</b> fewer direct dependencies and a uniform handler shape, but indirection — "who handles this?" needs search or IDE support, and stack traces are longer. A third-party package also means upgrade and licensing decisions: check its current licence terms before adopting it in a company.</li>
<li>Day 11 covers CQRS and when a request/handler style helps.</li>
<li><b>Mediator risks:</b> it becomes a god object holding all rules; keep each handler small and focused.</li>
</ul>
<p>Follow-up: "Would you add it to a small CRUD API?" — probably not; start with direct service calls and add a mediator when interactions get tangled.</p>`,
        hi: `<ul>
<li>Mediator 20 lines का हो सकता है (इस page का chat room code)। MediatR request/response handlers, notifications और pipeline behaviours (handlers के चारों ओर cross-cutting code) जोड़ता है।</li>
<li><b>Trade-offs:</b> कम सीधी dependencies और एक जैसी handler shape, पर indirection — "इसे कौन संभालता है?" के लिए search या IDE support चाहिए, और stack traces लंबे होते हैं। Third-party package का मतलब upgrade और licensing के फ़ैसले भी: company में अपनाने से पहले उसकी मौजूदा licence शर्तें देखो।</li>
<li>Day 11 में CQRS और request/handler style कब काम आता है, वह है।</li>
<li><b>Mediator के risks:</b> वह सारे rules रखने वाला god object बन जाता है; हर handler छोटा और focused रखो।</li>
</ul>
<p>Follow-up: "क्या छोटे CRUD API में जोड़ोगे?" — शायद नहीं; सीधे service calls से शुरू करो और interactions उलझें तब mediator लाओ।</p>`,
        hg: `<ul>
<li>Mediator 20 lines ka ho sakta hai (is page ka chat room code). MediatR request/response handlers, notifications aur pipeline behaviours (handlers ke charon or cross-cutting code) jodta hai.</li>
<li><b>Trade-offs:</b> kam seedhi dependencies aur ek jaisi handler shape, par indirection — "ise kaun sambhalta hai?" ke liye search ya IDE support chahiye, aur stack traces lambe hote hain. Third-party package ka matlab upgrade aur licensing ke faisle bhi: company mein apnane se pehle uski maujooda licence shartein dekho.</li>
<li>Day 11 mein CQRS aur request/handler style kab kaam aata hai, woh hai.</li>
<li><b>Mediator ke risks:</b> woh saare rules rakhne wala god object ban jata hai; har handler chhota aur focused rakho.</li>
</ul>
<p>Follow-up: "Kya chhote CRUD API mein jodoge?" — shayad nahi; seedhe service calls se shuru karo aur interactions uljhein tab mediator lao.</p>`
      }
    },
    {
      id: "delegatinghandler-pipeline",
      depth: "detailed",
      q: "How does the HttpClient DelegatingHandler pipeline work, and which pattern is it?",
      answer: "Each DelegatingHandler wraps an inner handler and calls base.SendAsync to continue, so request and response pass through a chain. It can also short-circuit by returning its own response.",
      meaning: {
        hi: "हर DelegatingHandler एक inner handler को wrap करता है और आगे बढ़ने के लिए base.SendAsync बुलाता है, इसलिए request और response एक chain से गुज़रते हैं। वह अपना response लौटाकर short-circuit भी कर सकता है।",
        hg: "Har DelegatingHandler ek inner handler ko wrap karta hai aur aage badhne ke liye base.SendAsync bulata hai, isliye request aur response ek chain se guzarte hain. Woh apna response lautakar short-circuit bhi kar sakta hai."
      },
      explain: {
        en: `<ul>
<li>The last handler in the chain (usually <code>HttpClientHandler</code>/<code>SocketsHttpHandler</code>) does the real network call.</li>
<li>With <code>IHttpClientFactory</code> (Day 3) you add handlers with <code>AddHttpMessageHandler&lt;T&gt;()</code>; they run in the order registered, the first being outermost.</li>
<li>Typical uses: add an auth header, correlation id, logging, retry policies. A retry handler calls the inner handler several times — so it is more than a pure chain or a pure decorator.</li>
<li>Pattern name: Chain of Responsibility in structure, often used as Decorator in intent. In an interview, name both and explain why.</li>
<li>Test tip: put a fake <code>HttpMessageHandler</code> at the end (as in the puzzle) instead of using the network.</li>
</ul>`,
        hi: `<ul>
<li>Chain का आख़िरी handler (आम तौर पर <code>HttpClientHandler</code>/<code>SocketsHttpHandler</code>) असली network call करता है।</li>
<li><code>IHttpClientFactory</code> (Day 3) के साथ handlers <code>AddHttpMessageHandler&lt;T&gt;()</code> से जोड़ते हैं; वे register के क्रम में चलते हैं, पहला सबसे बाहर।</li>
<li>आम उपयोग: auth header, correlation id, logging, retry policies जोड़ना। Retry handler inner handler को कई बार बुलाता है — इसलिए यह पूरी तरह न pure chain है न pure decorator।</li>
<li>Pattern का नाम: structure में Chain of Responsibility, intent में अक्सर Decorator। Interview में दोनों नाम लो और कारण बताओ।</li>
<li>Test tip: network की जगह आख़िर में fake <code>HttpMessageHandler</code> रखो (जैसा puzzle में)।</li>
</ul>`,
        hg: `<ul>
<li>Chain ka aakhri handler (aam taur par <code>HttpClientHandler</code>/<code>SocketsHttpHandler</code>) asli network call karta hai.</li>
<li><code>IHttpClientFactory</code> (Day 3) ke saath handlers <code>AddHttpMessageHandler&lt;T&gt;()</code> se jodte hain; woh register ke kram mein chalte hain, pehla sabse bahar.</li>
<li>Aam upyog: auth header, correlation id, logging, retry policies jodna. Retry handler inner handler ko kai baar bulata hai — isliye yeh poori tarah na pure chain hai na pure decorator.</li>
<li>Pattern ka naam: structure mein Chain of Responsibility, intent mein aksar Decorator. Interview mein dono naam lo aur karan batao.</li>
<li>Test tip: network ki jagah aakhir mein fake <code>HttpMessageHandler</code> rakho (jaisa puzzle mein).</li>
</ul>`
      }
    },
    {
      id: "patterns-in-dotnet",
      depth: "detailed",
      q: "Which design patterns are already built into .NET and ASP.NET Core?",
      answer: "Decorator in Stream wrappers, Chain in middleware and DelegatingHandler, Observer in events and IObservable, Strategy in IComparer and DI, Builder in WebApplication.CreateBuilder, and Factory in IHttpClientFactory.",
      meaning: {
        hi: "Stream wrappers में Decorator, middleware और DelegatingHandler में Chain, events और IObservable में Observer, IComparer और DI में Strategy, WebApplication.CreateBuilder में Builder, और IHttpClientFactory में Factory।",
        hg: "Stream wrappers mein Decorator, middleware aur DelegatingHandler mein Chain, events aur IObservable mein Observer, IComparer aur DI mein Strategy, WebApplication.CreateBuilder mein Builder, aur IHttpClientFactory mein Factory."
      },
      explain: {
        en: `<ul>
<li><b>Decorator:</b> <code>GZipStream</code>, <code>BufferedStream</code>, <code>CryptoStream</code>.</li>
<li><b>Chain:</b> ASP.NET Core middleware (Day 12), <code>DelegatingHandler</code>.</li>
<li><b>Observer:</b> <code>event</code>, <code>IObservable&lt;T&gt;</code>, also <code>INotifyPropertyChanged</code> in UI binding.</li>
<li><b>Strategy:</b> <code>IComparer&lt;T&gt;</code>, <code>IEqualityComparer&lt;T&gt;</code>, injected services chosen by DI.</li>
<li><b>Proxy:</b> EF Core lazy-loading proxies; <b>Facade:</b> <code>File</code> and <code>HttpClient</code> helper methods hide several lower-level steps.</li>
<li><b>Builder / Factory</b> (Day 9): <code>WebApplication.CreateBuilder</code>, <code>IHttpClientFactory</code>.</li>
</ul>
<p>This answer shows that you use patterns daily without the ceremony. Choose three examples and explain each in one line.</p>`,
        hi: `<ul>
<li><b>Decorator:</b> <code>GZipStream</code>, <code>BufferedStream</code>, <code>CryptoStream</code>।</li>
<li><b>Chain:</b> ASP.NET Core middleware (Day 12), <code>DelegatingHandler</code>।</li>
<li><b>Observer:</b> <code>event</code>, <code>IObservable&lt;T&gt;</code>, और UI binding में <code>INotifyPropertyChanged</code> भी।</li>
<li><b>Strategy:</b> <code>IComparer&lt;T&gt;</code>, <code>IEqualityComparer&lt;T&gt;</code>, DI से चुनी inject की हुई services।</li>
<li><b>Proxy:</b> EF Core lazy-loading proxies; <b>Facade:</b> <code>File</code> और <code>HttpClient</code> के helper methods कई निचले steps छुपाते हैं।</li>
<li><b>Builder / Factory</b> (Day 9): <code>WebApplication.CreateBuilder</code>, <code>IHttpClientFactory</code>।</li>
</ul>
<p>यह जवाब दिखाता है कि आप patterns रोज़ बिना तामझाम के use करते हो। तीन उदाहरण चुनो और हर एक एक line में समझाओ।</p>`,
        hg: `<ul>
<li><b>Decorator:</b> <code>GZipStream</code>, <code>BufferedStream</code>, <code>CryptoStream</code>.</li>
<li><b>Chain:</b> ASP.NET Core middleware (Day 12), <code>DelegatingHandler</code>.</li>
<li><b>Observer:</b> <code>event</code>, <code>IObservable&lt;T&gt;</code>, aur UI binding mein <code>INotifyPropertyChanged</code> bhi.</li>
<li><b>Strategy:</b> <code>IComparer&lt;T&gt;</code>, <code>IEqualityComparer&lt;T&gt;</code>, DI se chuni inject ki hui services.</li>
<li><b>Proxy:</b> EF Core lazy-loading proxies; <b>Facade:</b> <code>File</code> aur <code>HttpClient</code> ke helper methods kai nichle steps chhupate hain.</li>
<li><b>Builder / Factory</b> (Day 9): <code>WebApplication.CreateBuilder</code>, <code>IHttpClientFactory</code>.</li>
</ul>
<p>Yeh jawab dikhata hai ki aap patterns roz bina taamjhaam ke use karte ho. Teen udaharan chuno aur har ek ek line mein samjhao.</p>`
      }
    },
    {
      id: "patterns-overuse",
      depth: "detailed",
      q: "As a Tech Lead, how do you stop a team from over-using design patterns?",
      answer: "I ask what changes independently and what pain the pattern removes. Start with the simplest code, and add the named pattern when a second or third variation appears.",
      meaning: {
        hi: "मैं पूछता हूँ कि क्या अलग-अलग बदलता है और pattern कौन सा दर्द हटाता है। सबसे सरल code से शुरू करो, और दूसरी-तीसरी variation आने पर नामी pattern जोड़ो।",
        hg: "Main poochta hoon ki kya alag-alag badalta hai aur pattern kaun sa dard hatata hai. Sabse saral code se shuru karo, aur doosri-teesri variation aane par naami pattern jodo."
      },
      explain: {
        en: `<ul>
<li><b>Code-review questions:</b> "What varies here?", "How many implementations today?", "What does the extra layer let us do tomorrow that we cannot do now?"</li>
<li><b>Smells:</b> an interface with one implementation and no test seam, a factory for one type, a mediator for three classes, decorators stacked for one concern.</li>
<li><b>Healthy use:</b> name the pattern in the PR so the team shares vocabulary; link to the pain (duplicated logging, growing switch, vendor leak).</li>
<li>Rule of thumb: tolerate duplication once, abstract on the third occurrence — but not when the second occurrence is a risky area like security.</li>
</ul>
<p>Follow-up: "And when the team under-uses patterns?" — repeated cross-cutting code, huge switches and vendor types spread across layers are the signals.</p>`,
        hi: `<ul>
<li><b>Code-review सवाल:</b> "यहाँ क्या बदलता है?", "आज कितनी implementations हैं?", "यह extra layer हमें कल क्या करने देती है जो आज नहीं कर सकते?"</li>
<li><b>Smells:</b> एक implementation वाला interface जिसमें test seam भी नहीं, एक type के लिए factory, तीन classes के लिए mediator, एक concern के लिए stack किए decorators।</li>
<li><b>सही use:</b> PR में pattern का नाम लो ताकि team की शब्दावली साझा रहे; दर्द से जोड़ो (दोहराई logging, बढ़ती switch, vendor leak)।</li>
<li>Rule of thumb: एक बार duplication सह लो, तीसरी बार abstract करो — पर तब नहीं जब दूसरी बार security जैसा जोखिम वाला area हो।</li>
</ul>
<p>Follow-up: "और जब team patterns कम use करे?" — दोहराया cross-cutting code, बड़ी switches और layers में फैले vendor types इसके संकेत हैं।</p>`,
        hg: `<ul>
<li><b>Code-review sawal:</b> "Yahan kya badalta hai?", "Aaj kitni implementations hain?", "Yeh extra layer hamein kal kya karne deti hai jo aaj nahi kar sakte?"</li>
<li><b>Smells:</b> ek implementation wala interface jisme test seam bhi nahi, ek type ke liye factory, teen classes ke liye mediator, ek concern ke liye stack kiye decorators.</li>
<li><b>Sahi use:</b> PR mein pattern ka naam lo taaki team ki shabdawali saajhi rahe; dard se jodo (dohrai logging, badhti switch, vendor leak).</li>
<li>Rule of thumb: ek baar duplication sah lo, teesri baar abstract karo — par tab nahi jab doosri baar security jaisa jokhim wala area ho.</li>
</ul>
<p>Follow-up: "Aur jab team patterns kam use kare?" — dohraya cross-cutting code, badi switches aur layers mein phaile vendor types iske sanket hain.</p>`
      }
    }
  ],
  puzzles: [
    {
      id: "decorator-wrap-order",
      src: `IText a = new Bracket(new Exclaim(new Plain("hi")));
IText b = new Exclaim(new Bracket(new Plain("hi")));
Console.WriteLine(a.Render());
Console.WriteLine(b.Render());

interface IText { string Render(); }

class Plain : IText
{
    private readonly string _text;
    public Plain(string text) => _text = text;
    public string Render() => _text;
}

class Bracket : IText
{
    private readonly IText _inner;
    public Bracket(IText inner) => _inner = inner;

    public string Render()
    {
        Console.WriteLine("enter Bracket");
        return "[" + _inner.Render() + "]";
    }
}

class Exclaim : IText
{
    private readonly IText _inner;
    public Exclaim(IText inner) => _inner = inner;

    public string Render()
    {
        Console.WriteLine("enter Exclaim");
        return _inner.Render() + "!";
    }
}`,
      answer: `enter Bracket
enter Exclaim
[hi!]
enter Exclaim
enter Bracket
[hi]!`,
      explain: {
        en: `<ul>
<li>The outermost decorator's <code>Render</code> runs first, so "enter Bracket" prints before "enter Exclaim" in the first program.</li>
<li>Then the call goes inward to <code>Plain</code>, and the results are built on the way <b>out</b>: Exclaim adds "!" first, then Bracket wraps it: <code>[hi!]</code>.</li>
<li>Swap the wrapping order and both the trace and the result change: <code>[hi]!</code>. Decorator order is part of the behaviour.</li>
</ul>`,
        hi: `<ul>
<li>सबसे बाहरी decorator का <code>Render</code> पहले चलता है, इसलिए पहले program में "enter Bracket", "enter Exclaim" से पहले छपता है।</li>
<li>फिर call अंदर <code>Plain</code> तक जाती है, और नतीजा <b>बाहर लौटते</b> समय बनता है: पहले Exclaim "!" जोड़ता है, फिर Bracket उसे wrap करता है: <code>[hi!]</code>।</li>
<li>Wrapping का क्रम बदलो तो trace और नतीजा दोनों बदल जाते हैं: <code>[hi]!</code>। Decorator का order behaviour का हिस्सा है।</li>
</ul>`,
        hg: `<ul>
<li>Sabse bahari decorator ka <code>Render</code> pehle chalta hai, isliye pehle program mein "enter Bracket", "enter Exclaim" se pehle chhapta hai.</li>
<li>Phir call andar <code>Plain</code> tak jati hai, aur nateeja <b>bahar lautte</b> samay banta hai: pehle Exclaim "!" jodta hai, phir Bracket use wrap karta hai: <code>[hi!]</code>.</li>
<li>Wrapping ka kram badlo to trace aur nateeja dono badal jate hain: <code>[hi]!</code>. Decorator ka order behaviour ka hissa hai.</li>
</ul>`
      }
    },
    {
      id: "pipeline-short-circuit-cache",
      src: `var cache = new Dictionary<string, string>();

Handler endpoint = request =>
{
    Console.WriteLine("endpoint");
    return "data";
};

Middleware timing = next => request =>
{
    Console.WriteLine("timing in");
    var response = next(request);
    Console.WriteLine("timing out");
    return response;
};

Middleware caching = next => request =>
{
    if (cache.TryGetValue(request, out var hit))
    {
        Console.WriteLine("cache hit");
        return hit;
    }
    var response = next(request);
    cache[request] = response;
    return response;
};

var pipeline = timing(caching(endpoint));
Console.WriteLine(pipeline("/a"));
Console.WriteLine(pipeline("/a"));

delegate string Handler(string request);
delegate Handler Middleware(Handler next);`,
      answer: `timing in
endpoint
timing out
data
timing in
cache hit
timing out
data`,
      explain: {
        en: `<ul>
<li>Pipeline = <code>timing(caching(endpoint))</code>; the first call goes through all three: "timing in", "endpoint", "timing out", then <code>data</code> is printed.</li>
<li>On the second call <code>caching</code> finds the key and returns early — "endpoint" is skipped (short-circuit).</li>
<li>But <code>timing</code> is <b>outside</b> caching, so it still prints "timing in" and "timing out". A short-circuit only skips the links <i>after</i> it.</li>
</ul>`,
        hi: `<ul>
<li>Pipeline = <code>timing(caching(endpoint))</code>; पहली call तीनों से गुज़रती है: "timing in", "endpoint", "timing out", फिर <code>data</code> छपता है।</li>
<li>दूसरी call पर <code>caching</code> को key मिल जाती है और वह जल्दी लौट जाता है — "endpoint" छूट जाता है (short-circuit)।</li>
<li>पर <code>timing</code> caching के <b>बाहर</b> है, इसलिए "timing in" और "timing out" फिर भी छपते हैं। Short-circuit सिर्फ़ अपने <i>बाद</i> वाले links को छोड़ता है।</li>
</ul>`,
        hg: `<ul>
<li>Pipeline = <code>timing(caching(endpoint))</code>; pehli call teeno se guzarti hai: "timing in", "endpoint", "timing out", phir <code>data</code> chhapta hai.</li>
<li>Doosri call par <code>caching</code> ko key mil jati hai aur woh jaldi laut jata hai — "endpoint" chhoot jata hai (short-circuit).</li>
<li>Par <code>timing</code> caching ke <b>bahar</b> hai, isliye "timing in" aur "timing out" phir bhi chhapte hain. Short-circuit sirf apne <i>baad</i> wale links ko chhodta hai.</li>
</ul>`
      }
    },
    {
      id: "event-order-and-unsubscribe",
      src: `var button = new Button();

button.Clicked += A;
button.Clicked += B;
button.Clicked += A;
button.Click();

Console.WriteLine("--");
button.Clicked -= A;
button.Click();

Console.WriteLine("--");
button.Clicked += (s, e) => Console.WriteLine("L");
button.Clicked -= (s, e) => Console.WriteLine("L");
button.Click();

static void A(object? sender, EventArgs e) => Console.WriteLine("A");
static void B(object? sender, EventArgs e) => Console.WriteLine("B");

class Button
{
    public event EventHandler? Clicked;
    public void Click() => Clicked?.Invoke(this, EventArgs.Empty);
}`,
      answer: `A
B
A
--
A
B
--
A
B
L`,
      explain: {
        en: `<ul>
<li>Handlers run in subscription order, and the same method can be subscribed twice: A, B, A.</li>
<li><code>-= A</code> removes only <b>one</b> subscription — the <b>last</b> matching one — leaving A, B.</li>
<li>Two separate lambdas are two different delegate instances (different compiler-generated methods), so <code>-=</code> with a new lambda removes nothing and "L" stays subscribed. Keep the delegate in a variable to unsubscribe.</li>
</ul>`,
        hi: `<ul>
<li>Handlers subscribe के क्रम में चलते हैं, और एक ही method दो बार subscribe हो सकता है: A, B, A।</li>
<li><code>-= A</code> सिर्फ़ <b>एक</b> subscription हटाता है — <b>आख़िरी</b> मेल खाता — और A, B बचते हैं।</li>
<li>दो अलग lambdas दो अलग delegate instances हैं (compiler के बनाए अलग methods), इसलिए नए lambda से <code>-=</code> कुछ नहीं हटाता और "L" subscribe रहता है। Unsubscribe के लिए delegate को variable में रखो।</li>
</ul>`,
        hg: `<ul>
<li>Handlers subscribe ke kram mein chalte hain, aur ek hi method do baar subscribe ho sakta hai: A, B, A.</li>
<li><code>-= A</code> sirf <b>ek</b> subscription hatata hai — <b>aakhri</b> match karta — aur A, B bachte hain.</li>
<li>Do alag lambdas do alag delegate instances hain (compiler ke banaye alag methods), isliye naye lambda se <code>-=</code> kuch nahi hatata aur "L" subscribe rehta hai. Unsubscribe ke liye delegate ko variable mein rakho.</li>
</ul>`
      }
    },
    {
      id: "keyed-vs-plain-resolution",
      packages: ["Microsoft.Extensions.DependencyInjection"],
      src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddSingleton<IShipping, Standard>();
services.AddKeyedSingleton<IShipping, Express>("exp");
using var provider = services.BuildServiceProvider();

Console.WriteLine(provider.GetRequiredService<IShipping>().Cost(10));
Console.WriteLine(provider.GetRequiredKeyedService<IShipping>("exp").Cost(10));
Console.WriteLine(provider.GetKeyedService<IShipping>("zzz") is null);
Console.WriteLine(provider.GetServices<IShipping>().Count());

interface IShipping { int Cost(int kg); }
class Standard : IShipping { public int Cost(int kg) => kg * 5; }
class Express : IShipping { public int Cost(int kg) => kg * 12; }`,
      answer: `50
120
True
1`,
      explain: {
        en: `<ul>
<li><code>GetRequiredService&lt;IShipping&gt;()</code> returns the <b>non-keyed</b> registration: <code>Standard</code>, 10 × 5 = <code>50</code>.</li>
<li><code>GetRequiredKeyedService&lt;IShipping&gt;("exp")</code> returns <code>Express</code>: 10 × 12 = <code>120</code>.</li>
<li>An unknown key with <code>GetKeyedService</code> gives <code>null</code>, so <code>is null</code> prints <code>True</code>.</li>
<li><code>GetServices&lt;IShipping&gt;()</code> (plain) returns only non-keyed registrations: <code>1</code>. Keyed strategies are not part of the plain list.</li>
</ul>`,
        hi: `<ul>
<li><code>GetRequiredService&lt;IShipping&gt;()</code> <b>non-keyed</b> registration देता है: <code>Standard</code>, 10 × 5 = <code>50</code>।</li>
<li><code>GetRequiredKeyedService&lt;IShipping&gt;("exp")</code> <code>Express</code> देता है: 10 × 12 = <code>120</code>।</li>
<li>अनजान key पर <code>GetKeyedService</code> <code>null</code> देता है, इसलिए <code>is null</code> <code>True</code> छापता है।</li>
<li>सादा <code>GetServices&lt;IShipping&gt;()</code> सिर्फ़ non-keyed registrations देता है: <code>1</code>। Keyed strategies सादी list का हिस्सा नहीं हैं।</li>
</ul>`,
        hg: `<ul>
<li><code>GetRequiredService&lt;IShipping&gt;()</code> <b>non-keyed</b> registration deta hai: <code>Standard</code>, 10 × 5 = <code>50</code>.</li>
<li><code>GetRequiredKeyedService&lt;IShipping&gt;("exp")</code> <code>Express</code> deta hai: 10 × 12 = <code>120</code>.</li>
<li>Anjaan key par <code>GetKeyedService</code> <code>null</code> deta hai, isliye <code>is null</code> <code>True</code> chhapta hai.</li>
<li>Saada <code>GetServices&lt;IShipping&gt;()</code> sirf non-keyed registrations deta hai: <code>1</code>. Keyed strategies saadi list ka hissa nahi hain.</li>
</ul>`
      }
    },
    {
      id: "delegating-handler-order",
      src: `var client = new HttpClient(new Tag("A", new Tag("B", new FakeNetwork())));
var body = await client.GetStringAsync("http://example.test/ping");
Console.WriteLine(body);

class Tag : DelegatingHandler
{
    private readonly string _name;

    public Tag(string name, HttpMessageHandler inner)
    {
        _name = name;
        InnerHandler = inner;
    }

    protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        Console.WriteLine($"{_name} before");
        var response = await base.SendAsync(request, cancellationToken);
        Console.WriteLine($"{_name} after");
        return response;
    }
}

class FakeNetwork : HttpMessageHandler
{
    protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        Console.WriteLine("network");
        return Task.FromResult(new HttpResponseMessage { Content = new StringContent("pong") });
    }
}`,
      answer: `A before
B before
network
B after
A after
pong`,
      explain: {
        en: `<ul>
<li>Handler A wraps B, which wraps the fake network. The request travels A → B → network.</li>
<li>"before" lines print on the way in (A, then B), "network" at the end of the chain, and "after" lines on the way <b>out</b> in reverse (B, then A).</li>
<li>The response body <code>pong</code> prints last. Same shape as middleware: code before <code>next</code>, code after <code>next</code>.</li>
<li>No real network call is made because the last handler is a fake — a handy test trick.</li>
</ul>`,
        hi: `<ul>
<li>Handler A, B को wrap करता है, और B fake network को। Request A → B → network जाती है।</li>
<li>"before" lines अंदर जाते समय छपती हैं (A, फिर B), "network" chain के अंत में, और "after" lines <b>बाहर</b> लौटते समय उल्टे क्रम में (B, फिर A)।</li>
<li>Response body <code>pong</code> आख़िर में छपती है। Middleware जैसी ही shape: <code>next</code> से पहले code, <code>next</code> के बाद code।</li>
<li>असली network call नहीं होती क्योंकि आख़िरी handler fake है — test की काम की ट्रिक।</li>
</ul>`,
        hg: `<ul>
<li>Handler A, B ko wrap karta hai, aur B fake network ko. Request A → B → network jati hai.</li>
<li>"before" lines andar jate samay chhapti hain (A, phir B), "network" chain ke ant mein, aur "after" lines <b>bahar</b> lautte samay ulte kram mein (B, phir A).</li>
<li>Response body <code>pong</code> aakhir mein chhapti hai. Middleware jaisi hi shape: <code>next</code> se pehle code, <code>next</code> ke baad code.</li>
<li>Asli network call nahi hoti kyunki aakhri handler fake hai — test ki kaam ki trick.</li>
</ul>`
      }
    },
    {
      id: "event-handler-exception",
      src: `var alerts = new Alerts();
alerts.Raised += (s, e) => Console.WriteLine("1 ok");
alerts.Raised += (s, e) => throw new InvalidOperationException("boom");
alerts.Raised += (s, e) => Console.WriteLine("3 ok");

try
{
    alerts.Raise();
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"caught {ex.Message}");
}

class Alerts
{
    public event EventHandler? Raised;
    public void Raise() => Raised?.Invoke(this, EventArgs.Empty);
}`,
      answer: `1 ok
caught boom`,
      explain: {
        en: `<ul>
<li>Event handlers run <b>synchronously</b>, one after another, on the thread that raises the event.</li>
<li>The second handler throws, the exception propagates out of <code>Invoke</code> into <code>Raise</code>, and the third handler never runs.</li>
<li>The caller's <code>catch</code> prints "caught boom". In an Observer, one bad subscriber can break the others: for isolation, catch inside each handler or loop over <code>GetInvocationList()</code> yourself.</li>
</ul>`,
        hi: `<ul>
<li>Event handlers <b>synchronously</b>, एक के बाद एक, event raise करने वाले thread पर चलते हैं।</li>
<li>दूसरा handler throw करता है, exception <code>Invoke</code> से निकलकर <code>Raise</code> में पहुँचता है, और तीसरा handler कभी नहीं चलता।</li>
<li>Caller का <code>catch</code> "caught boom" छापता है। Observer में एक ख़राब subscriber बाक़ियों को तोड़ सकता है: अलग रखने के लिए हर handler के अंदर catch करो या <code>GetInvocationList()</code> पर खुद loop चलाओ।</li>
</ul>`,
        hg: `<ul>
<li>Event handlers <b>synchronously</b>, ek ke baad ek, event raise karne wale thread par chalte hain.</li>
<li>Doosra handler throw karta hai, exception <code>Invoke</code> se nikalkar <code>Raise</code> mein pahunchta hai, aur teesra handler kabhi nahi chalta.</li>
<li>Caller ka <code>catch</code> "caught boom" chhapta hai. Observer mein ek kharab subscriber baakiyon ko tod sakta hai: alag rakhne ke liye har handler ke andar catch karo ya <code>GetInvocationList()</code> par khud loop chalao.</li>
</ul>`
      }
    }
  ],
  revision: {
    en: [
      "Adapter converts one interface into the one the client expects.",
      "Decorator wraps an object with the same interface to add behaviour, and the wrapping order matters.",
      "Proxy has the same interface as the real object but controls access (lazy, protection, remote).",
      "Facade gives one simple entry point over several subsystems.",
      "Decorator vs Proxy vs Adapter: same wrapper shape; intent is add behaviour, control access, change interface.",
      "Strategy swaps an algorithm behind an interface; with DI, keyed services pick one by key.",
      "Strategy vs State: the client picks a Strategy; a State object moves the context to the next state itself.",
      "Observer is one-to-many notification, via C# events or IObservable<T>.",
      "Mediator is a hub so components do not reference each other; MediatR is optional.",
      "Chain of Responsibility passes a request along handlers that may stop it; ASP.NET Core middleware is a chain.",
      "Chain vs Decorator: a chain link may stop the request; a decorator normally always delegates.",
      "Add a pattern only when you can name the pain it removes."
    ],
    meaning: {
      hi: [
        "Adapter एक interface को वह बना देता है जो client को चाहिए।",
        "Decorator उसी interface वाले object को wrap करके behaviour जोड़ता है, और wrapping का क्रम मायने रखता है।",
        "Proxy का interface असली object जैसा होता है पर वह access control करता है (lazy, protection, remote)।",
        "Facade कई subsystems के ऊपर एक आसान entry point देता है।",
        "Decorator vs Proxy vs Adapter: wrapper की shape एक; intent है behaviour जोड़ना, access control, interface बदलना।",
        "Strategy algorithm को interface के पीछे बदलती है; DI में keyed services key से एक चुनती हैं।",
        "Strategy vs State: Strategy client चुनता है; State object context को खुद अगले state पर ले जाता है।",
        "Observer one-to-many notification है, C# events या IObservable<T> से।",
        "Mediator एक hub है ताकि components एक-दूसरे को reference न करें; MediatR optional है।",
        "Chain of Responsibility request को handlers में आगे बढ़ाती है जो उसे रोक सकते हैं; ASP.NET Core middleware chain है।",
        "Chain vs Decorator: chain का link request रोक सकता है; decorator आम तौर पर हमेशा आगे देता है।",
        "Pattern तभी जोड़ो जब उस दर्द का नाम बता सको जो वह हटाता है।"
      ],
      hg: [
        "Adapter ek interface ko woh bana deta hai jo client ko chahiye.",
        "Decorator usi interface wale object ko wrap karke behaviour jodta hai, aur wrapping ka kram mayne rakhta hai.",
        "Proxy ka interface asli object jaisa hota hai par woh access control karta hai (lazy, protection, remote).",
        "Facade kai subsystems ke upar ek aasan entry point deta hai.",
        "Decorator vs Proxy vs Adapter: wrapper ki shape ek; intent hai behaviour jodna, access control, interface badalna.",
        "Strategy algorithm ko interface ke peeche badalti hai; DI mein keyed services key se ek chunti hain.",
        "Strategy vs State: Strategy client chunta hai; State object context ko khud agle state par le jata hai.",
        "Observer one-to-many notification hai, C# events ya IObservable<T> se.",
        "Mediator ek hub hai taaki components ek-doosre ko reference na karein; MediatR optional hai.",
        "Chain of Responsibility request ko handlers mein aage badhati hai jo use rok sakte hain; ASP.NET Core middleware chain hai.",
        "Chain vs Decorator: chain ka link request rok sakta hai; decorator aam taur par hamesha aage deta hai.",
        "Pattern tabhi jodo jab us dard ka naam bata sako jo woh hatata hai."
      ]
    }
  }
};
