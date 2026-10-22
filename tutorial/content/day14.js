// Day 14 — Week 2 revision + mixed quiz. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 14,
  title: {
    en: "Week 2 Revision — cheat sheets + mixed quiz",
    hi: "हफ़्ता 2 Revision — cheat sheets और mixed quiz",
    hg: "Week 2 Revision — cheat sheets aur mixed quiz"
  },
  summary: {
    en: `<p>Week 2 is done: <b>SOLID, creational patterns, structural and behavioural patterns, enterprise patterns, ASP.NET Core fundamentals and Web API</b>. Well done! Today there is <b>nothing new to learn</b>. You turn what you read into what you can <b>say</b>, and you connect Week 2 with Week 1 (EF Core, async, LINQ), because interviewers mix them.</p>
<p><b>How to revise today (about 1 hour 15 minutes):</b></p>
<ul>
<li><b>Cheat sheets (20 min, Short mode)</b> — one per day. Read a line, cover it, say it aloud in English. If a line feels shaky, open that day's section again.</li>
<li><b>Mixed Q&amp;A (25 min)</b> — new questions that mix patterns, DI, the pipeline and EF Core. Say your answer aloud <b>before</b> you open it. Start with the 8 short ones.</li>
<li><b>Puzzles (20 min, Detailed mode)</b> — write the output on paper first, then check. A wrong guess shows what to re-read.</li>
<li><b>Top 10 lines (10 min)</b> — read them once more on interview morning.</li>
</ul>
<p>Tip: keep a short <b>"weak list"</b> of 3 to 5 topics where you stumbled, and re-read only those days' revision bullets. Revision is about <b>confidence</b>, not about covering everything again.</p>`,
    hi: `<p>Week 2 पूरा हुआ: <b>SOLID, creational patterns, structural और behavioural patterns, enterprise patterns, ASP.NET Core की बुनियाद और Web API</b>। बहुत बढ़िया! आज <b>कुछ नया नहीं सीखना</b> है। पढ़ी हुई चीज़ों को <b>बोलने लायक</b> बनाओ, और Week 2 को Week 1 (EF Core, async, LINQ) से जोड़ो, क्योंकि interviewers इन्हें मिलाकर पूछते हैं।</p>
<p><b>आज revision कैसे करें (लगभग 1 घंटा 15 मिनट):</b></p>
<ul>
<li><b>Cheat sheets (20 min, Short mode)</b> — हर दिन की एक। एक line पढ़ो, उसे ढको, English में ज़ोर से बोलो। कोई line कच्ची लगे, तो उस दिन का section फिर खोलो।</li>
<li><b>Mixed Q&amp;A (25 min)</b> — नए सवाल जो patterns, DI, pipeline और EF Core को मिलाते हैं। Answer खोलने से <b>पहले</b> अपना जवाब ज़ोर से बोलो। 8 short सवालों से शुरू करो।</li>
<li><b>Puzzles (20 min, Detailed mode)</b> — पहले output काग़ज़ पर लिखो, फिर check करो। ग़लत अंदाज़ा बताता है कि क्या दोबारा पढ़ना है।</li>
<li><b>Top 10 lines (10 min)</b> — interview वाली सुबह इन्हें एक बार फिर पढ़ो।</li>
</ul>
<p>Tip: एक छोटी <b>"weak list"</b> रखो — 3 से 5 topics जहाँ आप अटके — और सिर्फ़ उन दिनों के revision bullets दोबारा पढ़ो। Revision का मक़सद <b>confidence</b> है, सब कुछ फिर से पढ़ना नहीं।</p>`,
    hg: `<p>Week 2 poora hua: <b>SOLID, creational patterns, structural aur behavioural patterns, enterprise patterns, ASP.NET Core ki buniyad aur Web API</b>. Bahut badhiya! Aaj <b>kuch naya nahi seekhna</b> hai. Padhi hui cheezon ko <b>bolne laayak</b> banao, aur Week 2 ko Week 1 (EF Core, async, LINQ) se jodo, kyunki interviewers inhe milakar poochhte hain.</p>
<p><b>Aaj revision kaise karein (lagbhag 1 ghanta 15 minute):</b></p>
<ul>
<li><b>Cheat sheets (20 min, Short mode)</b> — har din ki ek. Ek line padho, use dhako, English mein zor se bolo. Koi line kachchi lage, to us din ka section phir kholo.</li>
<li><b>Mixed Q&amp;A (25 min)</b> — naye sawaal jo patterns, DI, pipeline aur EF Core ko milate hain. Answer kholne se <b>pehle</b> apna jawaab zor se bolo. 8 short sawaalon se shuru karo.</li>
<li><b>Puzzles (20 min, Detailed mode)</b> — pehle output kaagaz par likho, phir check karo. Galat andaaza batata hai ki kya dobara padhna hai.</li>
<li><b>Top 10 lines (10 min)</b> — interview wali subah inhe ek baar phir padho.</li>
</ul>
<p>Tip: ek chhoti <b>"weak list"</b> rakho — 3 se 5 topics jahan aap atke — aur sirf un dinon ke revision bullets dobara padho. Revision ka maqsad <b>confidence</b> hai, sab kuch phir se padhna nahi.</p>`
  },
  sections: [
    {
      id: "cheat-day8-solid",
      depth: "short",
      title: {
        en: "Day 8 cheat sheet — SOLID and DI",
        hi: "Day 8 की cheat sheet — SOLID और DI",
        hg: "Day 8 ki cheat sheet — SOLID aur DI"
      },
      body: {
        en: `<p><b>Picture — the kirana shop:</b> one person weighs, one bills, one delivers (<b>SRP</b>); a new item goes on a new shelf, not into the old counter (<b>OCP</b>).</p>
<p><b>Must say:</b></p>
<ul>
<li><b>SOLID</b> = five habits (SRP, OCP, LSP, ISP, DIP) that make change and testing cheap. Guidelines, not laws.</li>
<li><b>SRP</b> = one <i>reason to change</i>. <b>OCP</b> = add a class (Strategy), do not grow a type-<code>switch</code>; a small closed switch is fine.</li>
<li><b>LSP</b> = a child works wherever the parent is expected. <code>ReadOnlyCollection&lt;T&gt;.Add</code> through <code>ICollection&lt;T&gt;</code> throws, so prefer <code>IReadOnlyList&lt;T&gt;</code>.</li>
<li><b>ISP</b> = small role interfaces; ask for the smallest abstraction (<code>IEnumerable&lt;T&gt;</code>).</li>
<li><b>DIP</b> = principle, <b>DI</b> = technique, <b>container</b> = tool. Prefer constructor injection; register in the composition root; <code>GetService</code> in business code is the Service Locator anti-pattern.</li>
<li>Lifetimes: Transient / Scoped / Singleton. The last registration wins for one service; <code>IEnumerable&lt;T&gt;</code> gets all in registration order.</li>
<li>Do not overdo it: no interface for a pure helper or a class with nothing to fake.</li>
</ul>`,
        hi: `<p><b>तस्वीर — किराना दुकान:</b> एक आदमी तौलता है, एक बिल बनाता है, एक डिलीवरी करता है (<b>SRP</b>); नया सामान नई shelf पर जाता है, पुराने counter में नहीं (<b>OCP</b>)।</p>
<p><b>ज़रूर बोलना:</b></p>
<ul>
<li><b>SOLID</b> = पाँच आदतें (SRP, OCP, LSP, ISP, DIP) जो बदलाव और testing सस्ता बनाती हैं। Guidelines हैं, कानून नहीं।</li>
<li><b>SRP</b> = बदलने की एक <i>वजह</i>। <b>OCP</b> = नई class जोड़ो (Strategy), type-<code>switch</code> मत बढ़ाओ; छोटा बंद switch ठीक है।</li>
<li><b>LSP</b> = child वहाँ चले जहाँ parent की उम्मीद हो। <code>ICollection&lt;T&gt;</code> के ज़रिए <code>ReadOnlyCollection&lt;T&gt;.Add</code> exception फेंकता है, इसलिए <code>IReadOnlyList&lt;T&gt;</code> चुनो।</li>
<li><b>ISP</b> = छोटे role interfaces; सबसे छोटा abstraction माँगो (<code>IEnumerable&lt;T&gt;</code>)।</li>
<li><b>DIP</b> = सिद्धांत, <b>DI</b> = तकनीक, <b>container</b> = औज़ार। Constructor injection चुनो; composition root में register करो; business code में <code>GetService</code> Service Locator anti-pattern है।</li>
<li>Lifetimes: Transient / Scoped / Singleton। एक service के लिए आख़िरी registration जीतती है; <code>IEnumerable&lt;T&gt;</code> सब देता है, registration के क्रम में।</li>
<li>ज़्यादा मत करो: pure helper या ऐसी class के लिए interface नहीं जिसका fake बनाने की ज़रूरत नहीं।</li>
</ul>`,
        hg: `<p><b>Tasveer — kirana dukaan:</b> ek aadmi taulta hai, ek bill banata hai, ek delivery karta hai (<b>SRP</b>); naya saamaan nayi shelf par jaata hai, purane counter mein nahi (<b>OCP</b>).</p>
<p><b>Zaroor bolna:</b></p>
<ul>
<li><b>SOLID</b> = paanch aadatein (SRP, OCP, LSP, ISP, DIP) jo badlaav aur testing sasta banati hain. Guidelines hain, kanoon nahi.</li>
<li><b>SRP</b> = badalne ki ek <i>wajah</i>. <b>OCP</b> = nayi class jodo (Strategy), type-<code>switch</code> mat badhao; chhota band switch theek hai.</li>
<li><b>LSP</b> = child wahan chale jahan parent ki ummeed ho. <code>ICollection&lt;T&gt;</code> ke zariye <code>ReadOnlyCollection&lt;T&gt;.Add</code> exception phenkta hai, isliye <code>IReadOnlyList&lt;T&gt;</code> chuno.</li>
<li><b>ISP</b> = chhote role interfaces; sabse chhota abstraction maango (<code>IEnumerable&lt;T&gt;</code>).</li>
<li><b>DIP</b> = siddhant, <b>DI</b> = technique, <b>container</b> = aujaar. Constructor injection chuno; composition root mein register karo; business code mein <code>GetService</code> Service Locator anti-pattern hai.</li>
<li>Lifetimes: Transient / Scoped / Singleton. Ek service ke liye aakhri registration jeetti hai; <code>IEnumerable&lt;T&gt;</code> sab deta hai, registration ke kram mein.</li>
<li>Zyada mat karo: pure helper ya aisi class ke liye interface nahi jiska fake banane ki zaroorat nahi.</li>
</ul>`
      }
    },
    {
      id: "cheat-day9-creational",
      depth: "short",
      title: {
        en: "Day 9 cheat sheet — Creational patterns",
        hi: "Day 9 की cheat sheet — Creational patterns",
        hg: "Day 9 ki cheat sheet — Creational patterns"
      },
      body: {
        en: `<p><b>Picture — the chai stall:</b> one kettle for everyone (<b>Singleton</b>), a menu that makes the right cup (<b>Factory</b>), an order built step by step (<b>Builder</b>).</p>
<p><b>Must say:</b></p>
<ul>
<li><b>Singleton</b> = one instance plus a global access point; the risk is hidden mutable global state. In ASP.NET Core use <code>AddSingleton</code>, not a hand-written <code>Instance</code>.</li>
<li>Simplest thread-safe singleton: a <code>static readonly</code> field. <code>Lazy&lt;T&gt;</code> defers creation until the first <code>.Value</code>. Prefer these over double-checked locking.</li>
<li>Double-checked locking: <code>volatile</code> is recommended by the ECMA memory model; the modern .NET memory model is stronger, but <code>Lazy&lt;T&gt;</code> or <code>static readonly</code> avoids the question.</li>
<li><b>beforefieldinit</b> (no explicit static constructor): the initialiser runs any time before the first static field access, earlier or lazier. An explicit static constructor makes the timing precise.</li>
<li><b>Factory Method</b>: a subclass picks one product. <b>Abstract Factory</b>: one factory makes a matching family. <b>Simple Factory</b> (a static switch) is not a GoF pattern.</li>
<li><b>Builder</b>: step by step, then <code>Build()</code> validates and returns an immutable product. <b>Prototype</b>: a record <code>with</code> is a shallow copy.</li>
<li>Choose an implementation at runtime with keyed services or <code>Func&lt;string, T&gt;</code>. Add a factory only when it makes a likely change cheaper.</li>
</ul>`,
        hi: `<p><b>तस्वीर — चाय की टपरी:</b> सबके लिए एक केतली (<b>Singleton</b>), सही कप बनाने वाला menu (<b>Factory</b>), कदम-दर-कदम बना order (<b>Builder</b>)।</p>
<p><b>ज़रूर बोलना:</b></p>
<ul>
<li><b>Singleton</b> = एक instance और global access point; ख़तरा है छुपी mutable global state। ASP.NET Core में हाथ से लिखे <code>Instance</code> की जगह <code>AddSingleton</code> लो।</li>
<li>सबसे आसान thread-safe singleton: <code>static readonly</code> field। <code>Lazy&lt;T&gt;</code> पहले <code>.Value</code> तक creation टालता है। Double-checked locking से इन्हें चुनो।</li>
<li>Double-checked locking: ECMA memory model में <code>volatile</code> recommended है; modern .NET memory model मज़बूत है, पर <code>Lazy&lt;T&gt;</code> या <code>static readonly</code> से सवाल ही ख़त्म हो जाता है।</li>
<li><b>beforefieldinit</b> (explicit static constructor नहीं): initialiser पहले static field access से पहले कभी भी चलता है, जल्दी या देर से। Explicit static constructor से timing सटीक होती है।</li>
<li><b>Factory Method</b>: subclass एक product चुनती है। <b>Abstract Factory</b>: एक factory मेल खाता family बनाती है। <b>Simple Factory</b> (static switch) GoF pattern नहीं है।</li>
<li><b>Builder</b>: कदम-दर-कदम, फिर <code>Build()</code> validate करके immutable product देता है। <b>Prototype</b>: record का <code>with</code> shallow copy है।</li>
<li>Runtime पर implementation keyed services या <code>Func&lt;string, T&gt;</code> से चुनो। Factory तभी जोड़ो जब वो संभावित बदलाव सस्ता करे।</li>
</ul>`,
        hg: `<p><b>Tasveer — chai ki tapri:</b> sabke liye ek ketli (<b>Singleton</b>), sahi cup banane wala menu (<b>Factory</b>), kadam-dar-kadam bana order (<b>Builder</b>).</p>
<p><b>Zaroor bolna:</b></p>
<ul>
<li><b>Singleton</b> = ek instance aur global access point; khatra hai chhupi mutable global state. ASP.NET Core mein haath se likhe <code>Instance</code> ki jagah <code>AddSingleton</code> lo.</li>
<li>Sabse aasaan thread-safe singleton: <code>static readonly</code> field. <code>Lazy&lt;T&gt;</code> pehle <code>.Value</code> tak creation taalta hai. Double-checked locking se inhe chuno.</li>
<li>Double-checked locking: ECMA memory model mein <code>volatile</code> recommended hai; modern .NET memory model mazboot hai, par <code>Lazy&lt;T&gt;</code> ya <code>static readonly</code> se sawaal hi khatam ho jaata hai.</li>
<li><b>beforefieldinit</b> (explicit static constructor nahi): initialiser pehle static field access se pehle kabhi bhi chalta hai, jaldi ya der se. Explicit static constructor se timing sateek hoti hai.</li>
<li><b>Factory Method</b>: subclass ek product chunti hai. <b>Abstract Factory</b>: ek factory mel khata family banati hai. <b>Simple Factory</b> (static switch) GoF pattern nahi hai.</li>
<li><b>Builder</b>: kadam-dar-kadam, phir <code>Build()</code> validate karke immutable product deta hai. <b>Prototype</b>: record ka <code>with</code> shallow copy hai.</li>
<li>Runtime par implementation keyed services ya <code>Func&lt;string, T&gt;</code> se chuno. Factory tabhi jodo jab woh sambhavit badlaav sasta kare.</li>
</ul>`
      }
    },
    {
      id: "cheat-day10-structural-behavioural",
      depth: "short",
      title: {
        en: "Day 10 cheat sheet — Structural and behavioural patterns",
        hi: "Day 10 की cheat sheet — Structural और behavioural patterns",
        hg: "Day 10 ki cheat sheet — Structural aur behavioural patterns"
      },
      body: {
        en: `<p><b>Picture — the mobile charger:</b> the travel adapter changes the plug shape (<b>Adapter</b>); a case adds protection and still fits the same pocket (<b>Decorator</b>).</p>
<p><b>Must say:</b></p>
<ul>
<li><b>Adapter</b> changes an interface; <b>Decorator</b> adds behaviour with the same interface; <b>Proxy</b> controls access; <b>Facade</b> is one simple entry over several parts.</li>
<li>In .NET, <code>StreamReader</code> and <code>StreamWriter</code> are Adapters (bytes to text); <code>GZipStream</code> over a <code>FileStream</code> is a Decorator chain.</li>
<li>Decorator order matters. With Scrutor, the <b>last</b> <code>Decorate</code> call is outermost; for middleware and <code>AddHttpMessageHandler</code>, the <b>first</b> registered is outermost.</li>
<li><b>Strategy</b> = the client picks an algorithm. <b>State</b> = the context swaps its own state object. Choose a Strategy at runtime with keyed services.</li>
<li><b>Observer</b> = one-to-many notification (events or <code>IObservable&lt;T&gt;</code>); unsubscribe, or a long-lived publisher keeps subscribers alive. <b>Mediator</b> = a hub so components do not know each other.</li>
<li><b>Chain of Responsibility</b>: a link may stop the request (middleware). A decorator normally always delegates.</li>
<li>Add a pattern only when you can name the pain it removes.</li>
</ul>`,
        hi: `<p><b>तस्वीर — mobile charger:</b> travel adapter plug का आकार बदलता है (<b>Adapter</b>); case सुरक्षा जोड़ता है और उसी जेब में फिट रहता है (<b>Decorator</b>)।</p>
<p><b>ज़रूर बोलना:</b></p>
<ul>
<li><b>Adapter</b> interface बदलता है; <b>Decorator</b> उसी interface के साथ behaviour जोड़ता है; <b>Proxy</b> access नियंत्रित करता है; <b>Facade</b> कई हिस्सों के ऊपर एक आसान entry है।</li>
<li>.NET में <code>StreamReader</code> और <code>StreamWriter</code> Adapters हैं (bytes से text); <code>FileStream</code> पर <code>GZipStream</code> Decorator chain है।</li>
<li>Decorator का क्रम मायने रखता है। Scrutor में <b>आख़िरी</b> <code>Decorate</code> call सबसे बाहर होती है; middleware और <code>AddHttpMessageHandler</code> में <b>पहली</b> registered सबसे बाहर होती है।</li>
<li><b>Strategy</b> = client algorithm चुनता है। <b>State</b> = context अपना state object बदलता है। Runtime पर Strategy keyed services से चुनो।</li>
<li><b>Observer</b> = एक से कई को सूचना (events या <code>IObservable&lt;T&gt;</code>); unsubscribe करो, वरना लंबी उम्र वाला publisher subscribers को ज़िंदा रखता है। <b>Mediator</b> = hub ताकि components एक-दूसरे को न जानें।</li>
<li><b>Chain of Responsibility</b>: कोई link request रोक सकती है (middleware)। Decorator आम तौर पर हमेशा आगे देता है।</li>
<li>Pattern तभी जोड़ो जब उस दर्द का नाम बता सको जो वो हटाता है।</li>
</ul>`,
        hg: `<p><b>Tasveer — mobile charger:</b> travel adapter plug ka aakaar badalta hai (<b>Adapter</b>); case suraksha jodta hai aur usi jeb mein fit rehta hai (<b>Decorator</b>).</p>
<p><b>Zaroor bolna:</b></p>
<ul>
<li><b>Adapter</b> interface badalta hai; <b>Decorator</b> usi interface ke saath behaviour jodta hai; <b>Proxy</b> access control karta hai; <b>Facade</b> kai hisson ke upar ek aasaan entry hai.</li>
<li>.NET mein <code>StreamReader</code> aur <code>StreamWriter</code> Adapters hain (bytes se text); <code>FileStream</code> par <code>GZipStream</code> Decorator chain hai.</li>
<li>Decorator ka kram maayne rakhta hai. Scrutor mein <b>aakhri</b> <code>Decorate</code> call sabse bahar hoti hai; middleware aur <code>AddHttpMessageHandler</code> mein <b>pehli</b> registered sabse bahar hoti hai.</li>
<li><b>Strategy</b> = client algorithm chunta hai. <b>State</b> = context apna state object badalta hai. Runtime par Strategy keyed services se chuno.</li>
<li><b>Observer</b> = ek se kai ko soochna (events ya <code>IObservable&lt;T&gt;</code>); unsubscribe karo, warna lambi umr wala publisher subscribers ko zinda rakhta hai. <b>Mediator</b> = hub taaki components ek-dusre ko na jaanein.</li>
<li><b>Chain of Responsibility</b>: koi link request rok sakti hai (middleware). Decorator aam taur par hamesha aage deta hai.</li>
<li>Pattern tabhi jodo jab us dard ka naam bata sako jo woh hatata hai.</li>
</ul>`
      }
    },
    {
      id: "cheat-day11-enterprise",
      depth: "short",
      title: {
        en: "Day 11 cheat sheet — Enterprise patterns",
        hi: "Day 11 की cheat sheet — Enterprise patterns",
        hg: "Day 11 ki cheat sheet — Enterprise patterns"
      },
      body: {
        en: `<p><b>Picture — the restaurant:</b> the order counter (commands) and the menu board (queries) are different things, and the kitchen is one shared unit of work.</p>
<p><b>Must say:</b></p>
<ul>
<li><code>DbSet</code> is already a repository and <code>DbContext</code> is already a unit of work; wrap them only for a clear reason. A thin generic <code>IRepository&lt;T&gt;</code> hides EF features.</li>
<li>Returning <code>IQueryable</code> composes into one SQL query but leaks EF; a list or DTO is a stable boundary that loads more.</li>
<li>Two repositories sharing one scoped <code>DbContext</code> commit together with one <code>SaveChanges</code>.</li>
<li><b>CQRS</b> = separate models for commands and queries; it does not need two databases and is overkill for plain CRUD.</li>
<li><b>MediatR</b> is optional and under a commercial licence since 2025, so check its terms; a hand-rolled dispatcher plus decorators works too.</li>
<li><code>IOptions</code> is read once, <code>IOptionsSnapshot</code> is per scope, <code>IOptionsMonitor</code> is live. <code>ValidateOnStart</code> fails bad config at startup.</li>
<li><b>Captive dependency</b>: <code>ValidateScopes</code> catches singleton to scoped, not singleton to transient; <code>ValidateOnBuild</code> checks at build, and both are on by default in Development.</li>
<li>A <code>BackgroundService</code> is a singleton, so create a scope per unit of work with <code>IServiceScopeFactory</code>.</li>
</ul>`,
        hi: `<p><b>तस्वीर — restaurant:</b> order counter (commands) और menu board (queries) अलग चीज़ें हैं, और kitchen एक साझा unit of work है।</p>
<p><b>ज़रूर बोलना:</b></p>
<ul>
<li><code>DbSet</code> पहले से repository है और <code>DbContext</code> पहले से unit of work है; इन्हें साफ़ वजह होने पर ही wrap करो। पतला generic <code>IRepository&lt;T&gt;</code> EF की features छुपा देता है।</li>
<li><code>IQueryable</code> लौटाने से एक SQL query बनती है पर EF leak होता है; list या DTO स्थिर सीमा है जो ज़्यादा load करती है।</li>
<li>एक scoped <code>DbContext</code> बाँटने वाली दो repositories एक <code>SaveChanges</code> से साथ commit होती हैं।</li>
<li><b>CQRS</b> = commands और queries के अलग models; इसे दो databases नहीं चाहिए और सादे CRUD के लिए overkill है।</li>
<li><b>MediatR</b> optional है और 2025 से commercial licence में है, इसलिए शर्तें देखो; हाथ से बना dispatcher और decorators भी चलते हैं।</li>
<li><code>IOptions</code> एक बार पढ़ता है, <code>IOptionsSnapshot</code> हर scope में, <code>IOptionsMonitor</code> live है। <code>ValidateOnStart</code> ग़लत config को startup पर फेल करता है।</li>
<li><b>Captive dependency</b>: <code>ValidateScopes</code> singleton से scoped पकड़ता है, singleton से transient नहीं; <code>ValidateOnBuild</code> build पर जाँचता है, और दोनों Development में default रूप से on रहते हैं।</li>
<li><code>BackgroundService</code> singleton है, इसलिए हर काम के लिए <code>IServiceScopeFactory</code> से scope बनाओ।</li>
</ul>`,
        hg: `<p><b>Tasveer — restaurant:</b> order counter (commands) aur menu board (queries) alag cheezein hain, aur kitchen ek saajha unit of work hai.</p>
<p><b>Zaroor bolna:</b></p>
<ul>
<li><code>DbSet</code> pehle se repository hai aur <code>DbContext</code> pehle se unit of work hai; inhe saaf wajah hone par hi wrap karo. Patla generic <code>IRepository&lt;T&gt;</code> EF ki features chhupa deta hai.</li>
<li><code>IQueryable</code> lautane se ek SQL query banti hai par EF leak hota hai; list ya DTO sthir seema hai jo zyada load karti hai.</li>
<li>Ek scoped <code>DbContext</code> baantne wali do repositories ek <code>SaveChanges</code> se saath commit hoti hain.</li>
<li><b>CQRS</b> = commands aur queries ke alag models; ise do databases nahi chahiye aur saade CRUD ke liye overkill hai.</li>
<li><b>MediatR</b> optional hai aur 2025 se commercial licence mein hai, isliye sharten dekho; haath se bana dispatcher aur decorators bhi chalte hain.</li>
<li><code>IOptions</code> ek baar padhta hai, <code>IOptionsSnapshot</code> har scope mein, <code>IOptionsMonitor</code> live hai. <code>ValidateOnStart</code> galat config ko startup par fail karta hai.</li>
<li><b>Captive dependency</b>: <code>ValidateScopes</code> singleton se scoped pakadta hai, singleton se transient nahi; <code>ValidateOnBuild</code> build par jaanchta hai, aur dono Development mein default roop se on rehte hain.</li>
<li><code>BackgroundService</code> singleton hai, isliye har kaam ke liye <code>IServiceScopeFactory</code> se scope banao.</li>
</ul>`
      }
    },
    {
      id: "cheat-day12-aspnetcore",
      depth: "short",
      title: {
        en: "Day 12 cheat sheet — ASP.NET Core fundamentals",
        hi: "Day 12 की cheat sheet — ASP.NET Core की बुनियाद",
        hg: "Day 12 ki cheat sheet — ASP.NET Core ki buniyad"
      },
      body: {
        en: `<p><b>Picture — the railway station gates:</b> every passenger passes the gates in order, and any gate can turn you back (<b>middleware</b>).</p>
<p><b>Must say:</b></p>
<ul>
<li>Program.cs: register services, build, add middleware in order, map endpoints, run. <code>WebApplication</code> adds <code>UseRouting</code> and <code>UseEndpoints</code> implicitly, with <code>UseRouting</code> at the start; call it yourself to control where it runs (usually later, for example after <code>UseStaticFiles</code>).</li>
<li>Code before <code>next</code> runs in order, code after <code>next</code> runs in reverse. Short-circuit = not calling <code>next</code>; earlier middleware still runs its after-code.</li>
<li><code>Use</code> may call next, <code>Run</code> is terminal, <code>Map</code> branches away, <code>UseWhen</code> branches and rejoins.</li>
<li><code>UseAuthentication</code> sets <code>HttpContext.User</code> and calls next; authorization produces 401 or 403.</li>
<li>Configuration: the last source wins (appsettings, environment file, user secrets in Development, environment variables, command line). The environment defaults to Production.</li>
<li>Log with <code>ILogger&lt;T&gt;</code> message templates. A convention middleware is created once, so take scoped services as <code>InvokeAsync</code> parameters.</li>
<li>Filter order: authorization, resource, action, result. Exception filters cover controller creation, model binding, action filters and actions, not resource or result filters. Middleware sees every request; MVC filters run only inside MVC (Minimal APIs have endpoint filters).</li>
</ul>`,
        hi: `<p><b>तस्वीर — railway station के gates:</b> हर यात्री gates से क्रम में गुज़रता है, और कोई भी gate आपको वापस भेज सकता है (<b>middleware</b>)।</p>
<p><b>ज़रूर बोलना:</b></p>
<ul>
<li>Program.cs: services register करो, build करो, middleware क्रम से जोड़ो, endpoints map करो, run करो। <code>WebApplication</code> <code>UseRouting</code> और <code>UseEndpoints</code> अपने आप जोड़ता है, <code>UseRouting</code> शुरू में रखकर; वो कहाँ चले यह तय करने के लिए <code>UseRouting</code> खुद बुलाओ (आम तौर पर देर से, जैसे <code>UseStaticFiles</code> के बाद)।</li>
<li><code>next</code> से पहले का code क्रम में चलता है, <code>next</code> के बाद का उल्टे क्रम में। Short-circuit = <code>next</code> न बुलाना; पहले वाले middleware का after-code फिर भी चलता है।</li>
<li><code>Use</code> next बुला सकता है, <code>Run</code> आख़िरी है, <code>Map</code> अलग शाखा में ले जाता है, <code>UseWhen</code> शाखा बनाकर वापस जुड़ता है।</li>
<li><code>UseAuthentication</code> <code>HttpContext.User</code> सेट करता है और next बुलाता है; authorization 401 या 403 देता है।</li>
<li>Configuration: आख़िरी source जीतता है (appsettings, environment file, Development में user secrets, environment variables, command line)। Environment default Production है।</li>
<li><code>ILogger&lt;T&gt;</code> message templates से log करो। Convention middleware एक बार बनता है, इसलिए scoped services <code>InvokeAsync</code> के parameters में लो।</li>
<li>Filter क्रम: authorization, resource, action, result। Exception filters controller बनने, model binding, action filters और actions को cover करते हैं, resource या result filters को नहीं। Middleware हर request देखता है; filters सिर्फ़ MVC के अंदर चलते हैं (Minimal APIs में endpoint filters होते हैं)।</li>
</ul>`,
        hg: `<p><b>Tasveer — railway station ke gates:</b> har yatri gates se kram mein guzarta hai, aur koi bhi gate aapko wapas bhej sakta hai (<b>middleware</b>).</p>
<p><b>Zaroor bolna:</b></p>
<ul>
<li>Program.cs: services register karo, build karo, middleware kram se jodo, endpoints map karo, run karo. <code>WebApplication</code> <code>UseRouting</code> aur <code>UseEndpoints</code> apne aap jodta hai, <code>UseRouting</code> shuru mein rakhkar; woh kahan chale yeh tay karne ke liye <code>UseRouting</code> khud bulao (aam taur par der se, jaise <code>UseStaticFiles</code> ke baad).</li>
<li><code>next</code> se pehle ka code kram mein chalta hai, <code>next</code> ke baad ka ulte kram mein. Short-circuit = <code>next</code> na bulana; pehle wale middleware ka after-code phir bhi chalta hai.</li>
<li><code>Use</code> next bula sakta hai, <code>Run</code> aakhri hai, <code>Map</code> alag shaakha mein le jaata hai, <code>UseWhen</code> shaakha banakar wapas judta hai.</li>
<li><code>UseAuthentication</code> <code>HttpContext.User</code> set karta hai aur next bulata hai; authorization 401 ya 403 deta hai.</li>
<li>Configuration: aakhri source jeetta hai (appsettings, environment file, Development mein user secrets, environment variables, command line). Environment default Production hai.</li>
<li><code>ILogger&lt;T&gt;</code> message templates se log karo. Convention middleware ek baar banta hai, isliye scoped services <code>InvokeAsync</code> ke parameters mein lo.</li>
<li>Filter kram: authorization, resource, action, result. Exception filters controller banne, model binding, action filters aur actions ko cover karte hain, resource ya result filters ko nahi. Middleware har request dekhta hai; filters sirf MVC ke andar chalte hain (Minimal APIs mein endpoint filters hote hain).</li>
</ul>`
      }
    },
    {
      id: "cheat-day13-webapi",
      depth: "short",
      title: {
        en: "Day 13 cheat sheet — Web API",
        hi: "Day 13 की cheat sheet — Web API",
        hg: "Day 13 ki cheat sheet — Web API"
      },
      body: {
        en: `<p><b>Picture — the courier receipt:</b> the status code is the delivery slip, the ETag is the parcel tag, and the JWT is a sealed-but-see-through envelope (signed, not encrypted).</p>
<p><b>Must say:</b></p>
<ul>
<li>Safe = read-only (GET, HEAD, OPTIONS). Idempotent adds PUT and DELETE. POST is not idempotent and PATCH is not guaranteed to be. PUT replaces; PATCH sends changes.</li>
<li>201 with <code>Location</code> after create; 401 not authenticated, 403 not allowed, 409 conflict, 429 throttled.</li>
<li>With <code>[ApiController]</code>, an invalid model gets 400 <code>ValidationProblemDetails</code> before the action runs.</li>
<li><code>UseExceptionHandler</code> invokes your <code>IExceptionHandler</code> classes; <code>AddProblemDetails</code> gives the RFC 9457 shape.</li>
<li>A JWT is signed, not encrypted: non-secret payload, short lifetime. The refresh token is held by the client or BFF, and the auth server tracks, rotates and revokes it.</li>
<li>CORS is enforced by browsers only and is not authentication. Output caching lets the server decide and evict by tag; <code>HybridCache</code> came with .NET 9 (stable package March 2025, runs on .NET 8).</li>
<li>ETag: <code>If-None-Match</code> gives 304 on a read, <code>If-Match</code> gives 412 on a stale write. Rate limiting: set <code>RejectionStatusCode</code> to 429 (default 503).</li>
<li>Use <code>IHttpClientFactory</code> with <code>AddStandardResilienceHandler</code> (3 retries, so up to 4 calls); disable retries for unsafe methods like POST (<code>DisableForUnsafeHttpMethods</code>) or make the call idempotent (idempotency key).</li>
</ul>`,
        hi: `<p><b>तस्वीर — courier की रसीद:</b> status code डिलीवरी slip है, ETag पार्सल का tag है, और JWT बंद-पर-पारदर्शी लिफ़ाफ़ा है (signed, encrypted नहीं)।</p>
<p><b>ज़रूर बोलना:</b></p>
<ul>
<li>Safe = सिर्फ़ पढ़ना (GET, HEAD, OPTIONS)। Idempotent में PUT और DELETE जुड़ते हैं। POST idempotent नहीं है और PATCH के होने की गारंटी नहीं। PUT पूरा resource बदलता है; PATCH सिर्फ़ बदलाव भेजता है।</li>
<li>Create के बाद <code>Location</code> के साथ 201; 401 authenticated नहीं, 403 इजाज़त नहीं, 409 conflict, 429 throttled।</li>
<li><code>[ApiController]</code> के साथ, ग़लत model पर action चलने से पहले 400 <code>ValidationProblemDetails</code> मिलता है।</li>
<li><code>UseExceptionHandler</code> आपकी <code>IExceptionHandler</code> classes को बुलाता है; <code>AddProblemDetails</code> RFC 9457 का रूप देता है।</li>
<li>JWT signed है, encrypted नहीं: payload में secret नहीं, lifetime छोटी। Refresh token client या BFF के पास रहता है, और auth server उसे track, rotate और revoke करता है।</li>
<li>CORS सिर्फ़ browsers लागू करते हैं और authentication नहीं है। Output caching में server तय करता है और tag से हटाता है; <code>HybridCache</code> .NET 9 के साथ आया (stable package मार्च 2025, .NET 8 पर चलता है)।</li>
<li>ETag: <code>If-None-Match</code> से read पर 304, <code>If-Match</code> से पुराने write पर 412। Rate limiting: <code>RejectionStatusCode</code> 429 रखो (default 503)।</li>
<li><code>IHttpClientFactory</code> के साथ <code>AddStandardResilienceHandler</code> (3 retries, यानी 4 calls तक); POST जैसे unsafe methods पर retries बंद करो (<code>DisableForUnsafeHttpMethods</code>) या call को idempotent बनाओ (idempotency key)।</li>
</ul>`,
        hg: `<p><b>Tasveer — courier ki raseed:</b> status code delivery slip hai, ETag parcel ka tag hai, aur JWT band-par-paardarshi lifafa hai (signed, encrypted nahi).</p>
<p><b>Zaroor bolna:</b></p>
<ul>
<li>Safe = sirf padhna (GET, HEAD, OPTIONS). Idempotent mein PUT aur DELETE jud jaate hain. POST idempotent nahi hai aur PATCH ke hone ki guarantee nahi. PUT poora resource badalta hai; PATCH sirf badlaav bhejta hai.</li>
<li>Create ke baad <code>Location</code> ke saath 201; 401 authenticated nahi, 403 ijaazat nahi, 409 conflict, 429 throttled.</li>
<li><code>[ApiController]</code> ke saath, galat model par action chalne se pehle 400 <code>ValidationProblemDetails</code> milta hai.</li>
<li><code>UseExceptionHandler</code> aapki <code>IExceptionHandler</code> classes ko bulata hai; <code>AddProblemDetails</code> RFC 9457 ka roop deta hai.</li>
<li>JWT signed hai, encrypted nahi: payload mein secret nahi, lifetime chhoti. Refresh token client ya BFF ke paas rehta hai, aur auth server use track, rotate aur revoke karta hai.</li>
<li>CORS sirf browsers lagu karte hain aur authentication nahi hai. Output caching mein server tay karta hai aur tag se hatata hai; <code>HybridCache</code> .NET 9 ke saath aaya (stable package March 2025, .NET 8 par chalta hai).</li>
<li>ETag: <code>If-None-Match</code> se read par 304, <code>If-Match</code> se purane write par 412. Rate limiting: <code>RejectionStatusCode</code> 429 rakho (default 503).</li>
<li><code>IHttpClientFactory</code> ke saath <code>AddStandardResilienceHandler</code> (3 retries, yaani 4 calls tak); POST jaise unsafe methods par retries band karo (<code>DisableForUnsafeHttpMethods</code>) ya call ko idempotent banao (idempotency key).</li>
</ul>`
      }
    }
  ],
  qa: [
    {
      id: "repo-async-linq-ef-pitfalls",
      depth: "short",
      q: "You wrap EF Core in a repository with async methods and LINQ. What goes wrong most often?",
      answer: "An early ToList or IEnumerable loads whole tables into memory, a leaked IQueryable ties callers to EF, and blocking on async calls wastes threads. Return lists or DTOs from async methods that take a CancellationToken.",
      meaning: {
        hi: "जल्दी ToList या IEnumerable पूरी table memory में ले आता है, leak हुआ IQueryable callers को EF से बाँध देता है, और async calls पर block करने से threads बेकार जाते हैं। Async methods से list या DTO लौटाओ, जो CancellationToken लें।",
        hg: "Jaldi ToList ya IEnumerable poori table memory mein le aata hai, leak hua IQueryable callers ko EF se baandh deta hai, aur async calls par block karne se threads bekaar jaate hain. Async methods se list ya DTO lautao, jo CancellationToken lein."
      },
      explain: {
        en: `<ul>
<li><b>Early materialisation</b> (Day 4 + Day 11): <code>GetAll()</code> returning <code>List&lt;T&gt;</code> and then <code>Where</code> in the caller filters in memory, after every row travelled and was tracked (Day 5).</li>
<li><b>Leaked IQueryable</b> (Day 11): callers can compose one SQL query, but they now depend on EF translation rules and on the context still being alive.</li>
<li><b>Async mistakes</b> (Day 3): <code>.Result</code> or <code>.Wait()</code> blocks a thread; a missing <code>await</code> returns before the query finishes; no <code>CancellationToken</code> means abandoned requests keep running queries.</li>
<li><b>Read-only paths</b>: use <code>AsNoTracking</code> or a <code>Select</code> projection to DTOs (Day 6).</li>
</ul>
<p>Follow-up: "So should we drop the repository?" — Often, yes, for simple CRUD: <code>DbContext</code> is already a unit of work (Day 11). Keep one when it hides a real, stable boundary.</p>`,
        hi: `<ul>
<li><b>जल्दी materialisation</b> (Day 4 + Day 11): <code>GetAll()</code> का <code>List&lt;T&gt;</code> लौटाना और caller में <code>Where</code> चलाना memory में filter करता है, जबकि हर row आ चुकी और track हो चुकी (Day 5)।</li>
<li><b>Leak हुआ IQueryable</b> (Day 11): callers एक SQL query बना सकते हैं, पर अब वे EF के translation rules और ज़िंदा context पर निर्भर हैं।</li>
<li><b>Async की ग़लतियाँ</b> (Day 3): <code>.Result</code> या <code>.Wait()</code> thread block करता है; <code>await</code> छूटे तो query पूरी होने से पहले लौट जाता है; <code>CancellationToken</code> न हो तो छोड़ी गई requests भी queries चलाती रहती हैं।</li>
<li><b>Read-only रास्ते</b>: <code>AsNoTracking</code> या DTOs में <code>Select</code> projection (Day 6)।</li>
</ul>
<p>Follow-up: "तो repository हटा दें?" — सादे CRUD के लिए अक्सर हाँ: <code>DbContext</code> पहले से unit of work है (Day 11)। तभी रखो जब वो असली, स्थिर सीमा छुपाए।</p>`,
        hg: `<ul>
<li><b>Jaldi materialisation</b> (Day 4 + Day 11): <code>GetAll()</code> ka <code>List&lt;T&gt;</code> lautana aur caller mein <code>Where</code> chalana memory mein filter karta hai, jabki har row aa chuki aur track ho chuki (Day 5).</li>
<li><b>Leak hua IQueryable</b> (Day 11): callers ek SQL query bana sakte hain, par ab woh EF ke translation rules aur zinda context par nirbhar hain.</li>
<li><b>Async ki galtiyaan</b> (Day 3): <code>.Result</code> ya <code>.Wait()</code> thread block karta hai; <code>await</code> chhoote to query poori hone se pehle laut jaata hai; <code>CancellationToken</code> na ho to chhodi gayi requests bhi queries chalati rehti hain.</li>
<li><b>Read-only raaste</b>: <code>AsNoTracking</code> ya DTOs mein <code>Select</code> projection (Day 6).</li>
</ul>
<p>Follow-up: "To repository hata dein?" — Saade CRUD ke liye aksar haan: <code>DbContext</code> pehle se unit of work hai (Day 11). Tabhi rakho jab woh asli, sthir seema chhupaye.</p>`
      }
    },
    {
      id: "singleton-uses-dbcontext",
      depth: "short",
      q: "A singleton service takes a DbContext in its constructor. What happens, and what do you do instead?",
      answer: "The singleton keeps one DbContext for the whole app lifetime: it is not thread-safe, its tracker grows and its data goes stale. Use IDbContextFactory or a scope for each operation.",
      meaning: {
        hi: "Singleton पूरे app की उम्र भर एक DbContext रखता है। वो thread-safe नहीं है, उसका tracker बढ़ता है और data पुराना हो जाता है। IDbContextFactory लो या हर operation के लिए scope बनाओ।",
        hg: "Singleton poore app ki umr bhar ek DbContext rakhta hai. Woh thread-safe nahi hai, uska tracker badhta hai aur data purana ho jaata hai. IDbContextFactory lo ya har operation ke liye scope banao."
      },
      explain: {
        en: `<ul>
<li>This is a <b>captive dependency</b> (Day 11): <code>DbContext</code> is Scoped (Day 6), but the singleton holds it forever.</li>
<li>Concurrent requests share one non-thread-safe context. The change tracker keeps every entity it ever loaded, and the cached data is not refreshed.</li>
<li><b>Detect it</b>: <code>ValidateScopes</code> throws for a singleton that consumes a scoped service; it is on by default in Development.</li>
<li><b>Fix</b>: inject <code>IDbContextFactory&lt;T&gt;</code> and create a short-lived context per call, or inject <code>IServiceScopeFactory</code> and use <code>CreateAsyncScope</code> per unit of work. Or make the service Scoped, if it does not need to live that long.</li>
</ul>
<p>Follow-up: "Is a singleton holding a Transient also a problem?" — It is the same kind of mistake (one instance lives on), but <code>ValidateScopes</code> does not flag it.</p>`,
        hi: `<ul>
<li>यह <b>captive dependency</b> है (Day 11): <code>DbContext</code> Scoped है (Day 6), पर singleton उसे हमेशा पकड़े रखता है।</li>
<li>Concurrent requests एक non-thread-safe context बाँटती हैं। Change tracker हर लोड की गई entity रखता है, और cached data refresh नहीं होता।</li>
<li><b>पकड़ने का तरीका</b>: scoped service लेने वाले singleton पर <code>ValidateScopes</code> exception फेंकता है; Development में यह default रूप से on है।</li>
<li><b>Fix</b>: <code>IDbContextFactory&lt;T&gt;</code> inject करके हर call में छोटी उम्र का context बनाओ, या <code>IServiceScopeFactory</code> लेकर हर काम के लिए <code>CreateAsyncScope</code> करो। या service को Scoped बनाओ, अगर उसे इतना लंबा जीना नहीं।</li>
</ul>
<p>Follow-up: "Singleton में Transient पकड़ना भी problem है?" — ग़लती उसी तरह की है (एक instance ज़िंदा रहता है), पर <code>ValidateScopes</code> उसे flag नहीं करता।</p>`,
        hg: `<ul>
<li>Yeh <b>captive dependency</b> hai (Day 11): <code>DbContext</code> Scoped hai (Day 6), par singleton use hamesha pakde rakhta hai.</li>
<li>Concurrent requests ek non-thread-safe context baantti hain. Change tracker har load ki gayi entity rakhta hai, aur cached data refresh nahi hota.</li>
<li><b>Pakadne ka tareeka</b>: scoped service lene wale singleton par <code>ValidateScopes</code> exception phenkta hai; Development mein yeh default roop se on hai.</li>
<li><b>Fix</b>: <code>IDbContextFactory&lt;T&gt;</code> inject karke har call mein chhoti umr ka context banao, ya <code>IServiceScopeFactory</code> lekar har kaam ke liye <code>CreateAsyncScope</code> karo. Ya service ko Scoped banao, agar use itna lamba jeena nahi.</li>
</ul>
<p>Follow-up: "Singleton mein Transient pakadna bhi problem hai?" — Galti usi tarah ki hai (ek instance zinda rehta hai), par <code>ValidateScopes</code> use flag nahi karta.</p>`
      }
    },
    {
      id: "api-returns-entities-lazy-loading",
      depth: "short",
      q: "Your API action returns EF entities directly and lazy loading is enabled. What problems do you expect?",
      answer: "Serialization touches navigations and fires lazy loads, so one request runs many queries; cycles can break the JSON and columns leak by accident. Return DTOs built with Select.",
      meaning: {
        hi: "Serialization navigations को छूता है और lazy loads चलाता है, इसलिए एक request कई queries चलाती है। Cycles JSON output तोड़ सकते हैं, और अनजाने में columns खुल सकते हैं। Select से बने DTOs लौटाओ।",
        hg: "Serialization navigations ko chhoota hai aur lazy loads chalata hai, isliye ek request kai queries chalati hai. Cycles JSON output tod sakte hain, aur anjaane mein columns khul sakte hain. Select se bane DTOs lautao."
      },
      explain: {
        en: `<ul>
<li><b>N+1 during serialization</b> (Day 5 + Day 6): the JSON writer reads each navigation property, and each read can trigger a lazy-load query. The action looks like one query, the request runs hundreds.</li>
<li><b>Cycles</b>: <code>Order.Customer.Orders...</code> loops back, and the serializer fails or needs special settings.</li>
<li><b>Over-exposure</b>: new columns (internal flags, price margins) leak into the public contract; renaming a column becomes a breaking API change (Day 13 versioning).</li>
<li><b>Fix</b>: project to a DTO or <code>record</code> in the query with <code>Select</code>, so SQL fetches only the needed columns, and keep entities inside the data layer.</li>
</ul>
<p>Follow-up: "Is lazy loading bad?" — It is a convenience that hides queries; many teams keep it off and use <code>Include</code> or projection so every query is visible.</p>`,
        hi: `<ul>
<li><b>Serialization के दौरान N+1</b> (Day 5 + Day 6): JSON writer हर navigation property पढ़ता है, और हर पढ़ना lazy-load query चला सकता है। Action एक query दिखता है, request सैकड़ों चलाती है।</li>
<li><b>Cycles</b>: <code>Order.Customer.Orders...</code> घूमकर लौटता है, और serializer फेल होता है या ख़ास settings माँगता है।</li>
<li><b>ज़रूरत से ज़्यादा खुलना</b>: नए columns (internal flags, price margins) public contract में leak होते हैं; column का नाम बदलना API का breaking change बन जाता है (Day 13 versioning)।</li>
<li><b>Fix</b>: query में <code>Select</code> से DTO या <code>record</code> में project करो, ताकि SQL सिर्फ़ ज़रूरी columns लाए, और entities को data layer के अंदर रखो।</li>
</ul>
<p>Follow-up: "Lazy loading बुरा है?" — यह सुविधा है जो queries छुपाती है; कई teams इसे बंद रखती हैं और <code>Include</code> या projection से हर query दिखाती हैं।</p>`,
        hg: `<ul>
<li><b>Serialization ke dauraan N+1</b> (Day 5 + Day 6): JSON writer har navigation property padhta hai, aur har padhna lazy-load query chala sakta hai. Action ek query dikhta hai, request saikdon chalati hai.</li>
<li><b>Cycles</b>: <code>Order.Customer.Orders...</code> ghoomkar lautta hai, aur serializer fail hota hai ya khaas settings maangta hai.</li>
<li><b>Zaroorat se zyada khulna</b>: naye columns (internal flags, price margins) public contract mein leak hote hain; column ka naam badalna API ka breaking change ban jaata hai (Day 13 versioning).</li>
<li><b>Fix</b>: query mein <code>Select</code> se DTO ya <code>record</code> mein project karo, taaki SQL sirf zaroori columns laaye, aur entities ko data layer ke andar rakho.</li>
</ul>
<p>Follow-up: "Lazy loading bura hai?" — Yeh suvidha hai jo queries chhupati hai; kai teams ise band rakhti hain aur <code>Include</code> ya projection se har query dikhati hain.</p>`
      }
    },
    {
      id: "wrapper-order-everywhere",
      depth: "short",
      q: "Which one ends up outermost: a Scrutor Decorate, a middleware, an AddHttpMessageHandler?",
      answer: "Middleware and AddHttpMessageHandler: the first one registered is outermost. Scrutor is the opposite: the last Decorate call is outermost.",
      meaning: {
        hi: "Middleware और AddHttpMessageHandler में पहला registered सबसे बाहर होता है। Scrutor में आख़िरी Decorate call सबसे बाहर होती है।",
        hg: "Middleware aur AddHttpMessageHandler mein pehla registered sabse bahar hota hai. Scrutor mein aakhri Decorate call sabse bahar hoti hai."
      },
      explain: {
        en: `<ul>
<li><b>Middleware</b> (Day 12): the first <code>Use</code> sees the request first and the response last.</li>
<li><b>AddHttpMessageHandler</b> (Day 10 + Day 13): the first handler registered is the outermost, so it runs first on the way out and last on the way back.</li>
<li><b>Scrutor <code>Decorate</code></b> (Day 10): each call wraps the current registration, so the last call is outermost. The decorator you write last runs first.</li>
<li><b>Why it matters</b>: put caching outside or inside the logging? Retry outside or inside the timing? Wrong order gives wrong numbers or wrong behaviour.</li>
</ul>
<p>Follow-up: "How do you prove the order?" — Write a tiny test that records "before/after" lines, like the puzzles in Day 10 and Day 12.</p>`,
        hi: `<ul>
<li><b>Middleware</b> (Day 12): पहला <code>Use</code> request पहले देखता है और response आख़िर में।</li>
<li><b>AddHttpMessageHandler</b> (Day 10 + Day 13): पहला registered handler सबसे बाहर है, इसलिए जाते समय पहले और लौटते समय आख़िर में चलता है।</li>
<li><b>Scrutor <code>Decorate</code></b> (Day 10): हर call मौजूदा registration को wrap करती है, इसलिए आख़िरी call सबसे बाहर है। जो decorator आप आख़िर में लिखते हो वो पहले चलता है।</li>
<li><b>क्यों मायने रखता है</b>: caching logging के बाहर हो या अंदर? Retry timing के बाहर हो या अंदर? ग़लत क्रम से ग़लत numbers या ग़लत behaviour मिलता है।</li>
</ul>
<p>Follow-up: "क्रम कैसे साबित करोगे?" — छोटा test लिखो जो "before/after" lines record करे, जैसे Day 10 और Day 12 के puzzles में।</p>`,
        hg: `<ul>
<li><b>Middleware</b> (Day 12): pehla <code>Use</code> request pehle dekhta hai aur response aakhir mein.</li>
<li><b>AddHttpMessageHandler</b> (Day 10 + Day 13): pehla registered handler sabse bahar hai, isliye jaate samay pehle aur lautte samay aakhir mein chalta hai.</li>
<li><b>Scrutor <code>Decorate</code></b> (Day 10): har call maujooda registration ko wrap karti hai, isliye aakhri call sabse bahar hai. Jo decorator aap aakhir mein likhte ho woh pehle chalta hai.</li>
<li><b>Kyon maayne rakhta hai</b>: caching logging ke bahar ho ya andar? Retry timing ke bahar ho ya andar? Galat kram se galat numbers ya galat behaviour milta hai.</li>
</ul>
<p>Follow-up: "Kram kaise saabit karoge?" — Chhota test likho jo "before/after" lines record kare, jaise Day 10 aur Day 12 ke puzzles mein.</p>`
      }
    },
    {
      id: "cross-cutting-where",
      depth: "short",
      q: "Where do you put a cross-cutting concern such as logging, validation or caching: middleware, a filter, a decorator, or a pipeline behaviour?",
      answer: "Pick the narrowest place that has the data you need. Middleware sees every HTTP request, filters know the MVC action, and decorators or pipeline behaviours wrap application handlers, whatever the transport.",
      meaning: {
        hi: "वो सबसे संकरी जगह चुनो जिसके पास ज़रूरी data हो। Middleware हर HTTP request देखता है, filters MVC action जानते हैं, और decorators या pipeline behaviours application handlers को wrap करते हैं, transport कोई भी हो।",
        hg: "Woh sabse sankri jagah chuno jiske paas zaroori data ho. Middleware har HTTP request dekhta hai, filters MVC action jaante hain, aur decorators ya pipeline behaviours application handlers ko wrap karte hain, transport koi bhi ho."
      },
      explain: {
        en: `<ul>
<li><b>Middleware</b> (Day 12): HTTP-level and global: request ID, exception handling, CORS, rate limiting. It does not know which action or handler will run.</li>
<li><b>Filters</b> (Day 12): inside MVC, with access to the action, arguments and result: per-action validation or audit.</li>
<li><b>Decorator</b> (Day 10) or <b>pipeline behaviour</b> (Day 11): around a service or handler, for example caching a repository or timing every command, and it works for a console job as well as an API.</li>
<li><b>TL angle</b>: avoid putting business rules in HTTP-level code, and avoid three layers doing the same logging.</li>
</ul>
<p>Follow-up: "Where would you check that a user may edit this order?" — In the application layer or an authorization policy with the resource; middleware does not know the order.</p>`,
        hi: `<ul>
<li><b>Middleware</b> (Day 12): HTTP-level और global: request ID, exception handling, CORS, rate limiting। उसे नहीं पता कौन सा action या handler चलेगा।</li>
<li><b>Filters</b> (Day 12): MVC के अंदर, action, arguments और result तक पहुँच के साथ: per-action validation या audit।</li>
<li><b>Decorator</b> (Day 10) या <b>pipeline behaviour</b> (Day 11): service या handler के चारों ओर, जैसे repository की caching या हर command की timing, और यह console job में भी चलता है, API में भी।</li>
<li><b>TL नज़रिया</b>: business rules को HTTP-level code में मत रखो, और तीन layers में एक ही logging मत करो।</li>
</ul>
<p>Follow-up: "User इस order को edit कर सकता है, यह कहाँ जाँचोगे?" — application layer में या resource के साथ authorization policy में; middleware को order नहीं पता।</p>`,
        hg: `<ul>
<li><b>Middleware</b> (Day 12): HTTP-level aur global: request ID, exception handling, CORS, rate limiting. Use nahi pata kaun sa action ya handler chalega.</li>
<li><b>Filters</b> (Day 12): MVC ke andar, action, arguments aur result tak pahunch ke saath: per-action validation ya audit.</li>
<li><b>Decorator</b> (Day 10) ya <b>pipeline behaviour</b> (Day 11): service ya handler ke chaaron or, jaise repository ki caching ya har command ki timing, aur yeh console job mein bhi chalta hai, API mein bhi.</li>
<li><b>TL nazariya</b>: business rules ko HTTP-level code mein mat rakho, aur teen layers mein ek hi logging mat karo.</li>
</ul>
<p>Follow-up: "User is order ko edit kar sakta hai, yeh kahan jaanchoge?" — application layer mein ya resource ke saath authorization policy mein; middleware ko order nahi pata.</p>`
      }
    },
    {
      id: "dev-works-prod-di-surprise",
      depth: "short",
      q: "A scoped service injected into a singleton throws at startup in Development, but nobody noticed in Production. Why?",
      answer: "Development turns on ValidateScopes and ValidateOnBuild, so the captive dependency throws early. In Production they are off by default, so the singleton silently keeps one instance.",
      meaning: {
        hi: "Development में ValidateScopes और ValidateOnBuild on रहते हैं, इसलिए captive dependency जल्दी exception देती है। Production में ये default रूप से off हैं, इसलिए singleton चुपचाप एक instance पकड़े रहता है।",
        hg: "Development mein ValidateScopes aur ValidateOnBuild on rehte hain, isliye captive dependency jaldi exception deti hai. Production mein yeh default roop se off hain, isliye singleton chupchaap ek instance pakde rehta hai."
      },
      explain: {
        en: `<ul>
<li>The host builder turns on <code>ValidateScopes</code> and <code>ValidateOnBuild</code> in the Development environment (Day 11 + Day 12 environments).</li>
<li><code>ValidateScopes</code> flags a singleton that depends on a scoped service; it does <b>not</b> flag singleton to transient.</li>
<li>With validation off, the bug is silent: the singleton keeps the first scoped instance (for example one <code>DbContext</code>) for the app's lifetime.</li>
<li><b>TL habit</b>: run integration tests in Development-like validation, or turn both options on explicitly for the test host, so the build fails in CI instead of in production.</li>
</ul>
<p>Follow-up: "Should you leave the validation on in Production?" — It costs some startup time; many teams enable it in CI and Development only. It is a trade-off, not a rule.</p>`,
        hi: `<ul>
<li>Host builder Development environment में <code>ValidateScopes</code> और <code>ValidateOnBuild</code> on करता है (Day 11 + Day 12 environments)।</li>
<li><code>ValidateScopes</code> scoped service पर निर्भर singleton को flag करता है; singleton से transient को <b>नहीं</b>।</li>
<li>Validation off हो तो bug चुपचाप रहता है: singleton पहला scoped instance (जैसे एक <code>DbContext</code>) app की उम्र भर रखता है।</li>
<li><b>TL आदत</b>: integration tests Development जैसी validation के साथ चलाओ, या test host के लिए दोनों options खुद on करो, ताकि build production में नहीं, CI में फेल हो।</li>
</ul>
<p>Follow-up: "Production में validation on रखनी चाहिए?" — इसमें थोड़ा startup time लगता है; कई teams इसे सिर्फ़ CI और Development में रखती हैं। यह trade-off है, नियम नहीं।</p>`,
        hg: `<ul>
<li>Host builder Development environment mein <code>ValidateScopes</code> aur <code>ValidateOnBuild</code> on karta hai (Day 11 + Day 12 environments).</li>
<li><code>ValidateScopes</code> scoped service par nirbhar singleton ko flag karta hai; singleton se transient ko <b>nahi</b>.</li>
<li>Validation off ho to bug chupchaap rehta hai: singleton pehla scoped instance (jaise ek <code>DbContext</code>) app ki umr bhar rakhta hai.</li>
<li><b>TL aadat</b>: integration tests Development jaisi validation ke saath chalao, ya test host ke liye dono options khud on karo, taaki build production mein nahi, CI mein fail ho.</li>
</ul>
<p>Follow-up: "Production mein validation on rakhni chahiye?" — Isme thoda startup time lagta hai; kai teams ise sirf CI aur Development mein rakhti hain. Yeh trade-off hai, niyam nahi.</p>`
      }
    },
    {
      id: "request-lifecycle-walkthrough",
      depth: "short",
      q: "Walk me through what happens when a POST /orders request reaches your ASP.NET Core API.",
      answer: "Kestrel passes it to the middleware pipeline; routing picks the endpoint, authentication, authorization, binding and validation run, and the action executes with scoped services. The response returns through middleware in reverse order.",
      meaning: {
        hi: "Kestrel उसे middleware pipeline को देता है। Routing endpoint चुनती है, authentication और authorization चलते हैं, फिर model binding और validation, और action scoped services के साथ चलता है। Response middleware से उल्टे क्रम में लौटता है।",
        hg: "Kestrel use middleware pipeline ko deta hai. Routing endpoint chunti hai, authentication aur authorization chalte hain, phir model binding aur validation, aur action scoped services ke saath chalta hai. Response middleware se ulte kram mein lautta hai."
      },
      explain: {
        en: `<ul>
<li><b>Kestrel</b> parses HTTP and builds an <code>HttpContext</code> (Day 12). A DI scope is created for the request.</li>
<li><b>Middleware</b> runs in registration order: exception handler, HTTPS redirection, routing, CORS, authentication (sets <code>User</code>), authorization (401/403), rate limiter, and so on.</li>
<li><b>Endpoint</b>: for controllers, filters wrap the action; <code>[ApiController]</code> returns 400 for an invalid model before the action (Day 13).</li>
<li><b>Action</b> calls application services; the scoped <code>DbContext</code> saves once (Day 6, Day 11). It returns 201 with a <code>Location</code> header.</li>
<li>The <b>response</b> goes back out through the "after" part of each middleware in reverse order; the scope is disposed.</li>
</ul>
<p>Follow-up: "Where would a global exception be turned into ProblemDetails?" — <code>UseExceptionHandler</code> invokes your <code>IExceptionHandler</code>, near the top of the pipeline (Day 13).</p>`,
        hi: `<ul>
<li><b>Kestrel</b> HTTP parse करके <code>HttpContext</code> बनाता है (Day 12)। Request के लिए एक DI scope बनता है।</li>
<li><b>Middleware</b> registration के क्रम में चलते हैं: exception handler, HTTPS redirection, routing, CORS, authentication (<code>User</code> सेट करता है), authorization (401/403), rate limiter, वग़ैरह।</li>
<li><b>Endpoint</b>: controllers के लिए filters action को घेरते हैं; <code>[ApiController]</code> ग़लत model पर action से पहले 400 देता है (Day 13)।</li>
<li><b>Action</b> application services बुलाता है; scoped <code>DbContext</code> एक बार save करता है (Day 6, Day 11)। वो <code>Location</code> header के साथ 201 लौटाता है।</li>
<li><b>Response</b> हर middleware के "after" हिस्से से उल्टे क्रम में बाहर जाता है; scope dispose हो जाता है।</li>
</ul>
<p>Follow-up: "Global exception ProblemDetails कहाँ बनती है?" — <code>UseExceptionHandler</code> आपकी <code>IExceptionHandler</code> बुलाता है, pipeline के ऊपरी हिस्से में (Day 13)।</p>`,
        hg: `<ul>
<li><b>Kestrel</b> HTTP parse karke <code>HttpContext</code> banata hai (Day 12). Request ke liye ek DI scope banta hai.</li>
<li><b>Middleware</b> registration ke kram mein chalte hain: exception handler, HTTPS redirection, routing, CORS, authentication (<code>User</code> set karta hai), authorization (401/403), rate limiter, vagairah.</li>
<li><b>Endpoint</b>: controllers ke liye filters action ko gherte hain; <code>[ApiController]</code> galat model par action se pehle 400 deta hai (Day 13).</li>
<li><b>Action</b> application services bulata hai; scoped <code>DbContext</code> ek baar save karta hai (Day 6, Day 11). Woh <code>Location</code> header ke saath 201 lautata hai.</li>
<li><b>Response</b> har middleware ke "after" hisse se ulte kram mein bahar jaata hai; scope dispose ho jaata hai.</li>
</ul>
<p>Follow-up: "Global exception ProblemDetails kahan banti hai?" — <code>UseExceptionHandler</code> aapki <code>IExceptionHandler</code> bulata hai, pipeline ke upari hisse mein (Day 13).</p>`
      }
    },
    {
      id: "result-blocking-aspnetcore",
      depth: "short",
      q: "Is it acceptable to call .Result on an async method inside a controller action or middleware?",
      answer: "Avoid it: ASP.NET Core has no synchronization context, so it usually will not deadlock, but it blocks a thread-pool thread and can starve the pool under load. Use await instead.",
      meaning: {
        hi: "इससे बचो। ASP.NET Core में synchronization context नहीं है, इसलिए आम तौर पर deadlock नहीं होता, पर यह thread-pool का thread block करता है और load में pool भूखा हो सकता है। इसकी जगह await करो।",
        hg: "Isse bacho. ASP.NET Core mein synchronization context nahi hai, isliye aam taur par deadlock nahi hota, par yeh thread-pool ka thread block karta hai aur load mein pool bhookha ho sakta hai. Iski jagah await karo."
      },
      explain: {
        en: `<ul>
<li><b>Day 3 recap</b>: classic ASP.NET and UI apps had a synchronization context, and <code>.Result</code> could deadlock. ASP.NET Core has none, so the deadlock is much less likely.</li>
<li><b>The remaining cost</b>: the thread sits blocked while it waits. With many concurrent requests, the thread pool grows slowly and requests queue up: <b>thread-pool starvation</b>.</li>
<li><b>Where it hides</b>: constructors, static initialisers, sync-only interfaces, <code>Lazy&lt;T&gt;</code> factories. Prefer an async factory or <code>IHostedService.StartAsync</code>.</li>
<li><b>Fix</b>: make the chain async all the way (<code>async Task&lt;IActionResult&gt;</code>) and pass the <code>CancellationToken</code>.</li>
</ul>
<p>Follow-up: "What if a library only offers a sync method?" — Wrap it only at the edge, keep it short, and treat it as debt; do not wrap fast sync work in <code>Task.Run</code> to look async.</p>`,
        hi: `<ul>
<li><b>Day 3 recap</b>: classic ASP.NET और UI apps में synchronization context था, और <code>.Result</code> deadlock कर सकता था। ASP.NET Core में नहीं है, इसलिए deadlock की संभावना बहुत कम है।</li>
<li><b>बाक़ी क़ीमत</b>: इंतज़ार में thread अटका रहता है। कई concurrent requests में thread pool धीरे बढ़ता है और requests कतार में लगती हैं: <b>thread-pool starvation</b>।</li>
<li><b>कहाँ छुपता है</b>: constructors, static initialisers, sync-only interfaces, <code>Lazy&lt;T&gt;</code> factories। Async factory या <code>IHostedService.StartAsync</code> चुनो।</li>
<li><b>Fix</b>: पूरी chain async बनाओ (<code>async Task&lt;IActionResult&gt;</code>) और <code>CancellationToken</code> आगे दो।</li>
</ul>
<p>Follow-up: "Library सिर्फ़ sync method दे तो?" — उसे सिर्फ़ किनारे पर wrap करो, छोटा रखो, और उसे कर्ज़ मानो; तेज़ sync काम को async दिखाने के लिए <code>Task.Run</code> में मत लपेटो।</p>`,
        hg: `<ul>
<li><b>Day 3 recap</b>: classic ASP.NET aur UI apps mein synchronization context tha, aur <code>.Result</code> deadlock kar sakta tha. ASP.NET Core mein nahi hai, isliye deadlock ki sambhaavna bahut kam hai.</li>
<li><b>Baaki keemat</b>: intezaar mein thread atka rehta hai. Kai concurrent requests mein thread pool dheere badhta hai aur requests qataar mein lagti hain: <b>thread-pool starvation</b>.</li>
<li><b>Kahan chhupta hai</b>: constructors, static initialisers, sync-only interfaces, <code>Lazy&lt;T&gt;</code> factories. Async factory ya <code>IHostedService.StartAsync</code> chuno.</li>
<li><b>Fix</b>: poori chain async banao (<code>async Task&lt;IActionResult&gt;</code>) aur <code>CancellationToken</code> aage do.</li>
</ul>
<p>Follow-up: "Library sirf sync method de to?" — Use sirf kinare par wrap karo, chhota rakho, aur use karz maano; tez sync kaam ko async dikhane ke liye <code>Task.Run</code> mein mat lapeto.</p>`
      }
    },
    {
      id: "options-for-http-client-settings",
      depth: "detailed",
      q: "A typed HttpClient needs a base URL and timeout from configuration. Which options interface do you use?",
      answer: "IOptions is enough when the values are read once at startup. Use IOptionsMonitor if they must change at runtime, and add ValidateOnStart so a bad URL fails the deployment, not the first request.",
      meaning: {
        hi: "जब values startup पर एक बार पढ़नी हों तो IOptions काफ़ी है। Runtime पर बदलनी हों तो IOptionsMonitor लो, और ValidateOnStart जोड़ो ताकि ग़लत URL पहली request पर नहीं, deployment पर फेल हो।",
        hg: "Jab values startup par ek baar padhni hon to IOptions kaafi hai. Runtime par badalni hon to IOptionsMonitor lo, aur ValidateOnStart jodo taaki galat URL pehli request par nahi, deployment par fail ho."
      },
      explain: {
        en: `<ul>
<li><b>Read once</b> (Day 11): <code>IOptions&lt;T&gt;</code> is a singleton snapshot taken at first use; simple and safe to inject anywhere.</li>
<li><b>Must change live</b>: <code>IOptionsMonitor&lt;T&gt;</code> with <code>OnChange</code>. Remember that a <code>HttpClient</code> from <code>IHttpClientFactory</code> has its configuration applied when the client is created, so a changed URL shows up when a new client is created (Day 13).</li>
<li><b>Fail early</b>: bind with <code>ValidateDataAnnotations</code> and <code>ValidateOnStart</code>.</li>
<li><b>Do not</b> inject <code>IOptionsSnapshot&lt;T&gt;</code> into a singleton (it is scoped, Day 11) and do not read <code>IConfiguration</code> directly in business code.</li>
</ul>
<p>When to use / when not: start with <code>IOptions</code>; move to the monitor only when you really change settings without a restart.</p>`,
        hi: `<ul>
<li><b>एक बार पढ़ना</b> (Day 11): <code>IOptions&lt;T&gt;</code> पहले उपयोग पर बना singleton snapshot है; सादा और कहीं भी inject करने के लिए सुरक्षित।</li>
<li><b>Live बदलना हो</b>: <code>OnChange</code> के साथ <code>IOptionsMonitor&lt;T&gt;</code>। याद रखो कि <code>IHttpClientFactory</code> के <code>HttpClient</code> की configuration client बनते समय लगती है, इसलिए बदला URL नया client बनने पर दिखता है (Day 13)।</li>
<li><b>जल्दी फेल</b>: <code>ValidateDataAnnotations</code> और <code>ValidateOnStart</code> के साथ bind करो।</li>
<li><b>मत करो</b>: <code>IOptionsSnapshot&lt;T&gt;</code> को singleton में inject मत करो (वो scoped है, Day 11) और business code में सीधे <code>IConfiguration</code> मत पढ़ो।</li>
</ul>
<p>कब use / कब नहीं: <code>IOptions</code> से शुरू करो; monitor पर तभी जाओ जब सच में restart के बिना settings बदलती हों।</p>`,
        hg: `<ul>
<li><b>Ek baar padhna</b> (Day 11): <code>IOptions&lt;T&gt;</code> pehle upyog par bana singleton snapshot hai; saada aur kahin bhi inject karne ke liye surakshit.</li>
<li><b>Live badalna ho</b>: <code>OnChange</code> ke saath <code>IOptionsMonitor&lt;T&gt;</code>. Yaad rakho ki <code>IHttpClientFactory</code> ke <code>HttpClient</code> ki configuration client bante samay lagti hai, isliye badla URL naya client banne par dikhta hai (Day 13).</li>
<li><b>Jaldi fail</b>: <code>ValidateDataAnnotations</code> aur <code>ValidateOnStart</code> ke saath bind karo.</li>
<li><b>Mat karo</b>: <code>IOptionsSnapshot&lt;T&gt;</code> ko singleton mein inject mat karo (woh scoped hai, Day 11) aur business code mein seedha <code>IConfiguration</code> mat padho.</li>
</ul>
<p>Kab use / kab nahi: <code>IOptions</code> se shuru karo; monitor par tabhi jao jab sach mein restart ke bina settings badalti hon.</p>`
      }
    },
    {
      id: "fat-controller-refactor",
      depth: "detailed",
      q: "A controller has 12 dependencies and business rules inside its actions. How do you refactor it using what you learned in Week 2?",
      answer: "Keep controllers thin: bind, call one application service or handler, map the result. Split the service by reason to change, and move cross-cutting code to middleware, filters or decorators.",
      meaning: {
        hi: "Controllers पतले रखो: bind करो, एक application service या handler बुलाओ, result map करो। Service को बदलने की वजह के हिसाब से बाँटो, और cross-cutting code को middleware, filters या decorators में ले जाओ।",
        hg: "Controllers patle rakho: bind karo, ek application service ya handler bulao, result map karo. Service ko badalne ki wajah ke hisaab se baanto, aur cross-cutting code ko middleware, filters ya decorators mein le jao."
      },
      explain: {
        en: `<ul>
<li><b>Read the smell</b> (Day 8): 12 constructor dependencies usually means several reasons to change (SRP). Group dependencies that always travel together into one service.</li>
<li><b>Thin action</b> (Day 12/13): model binding and <code>[ApiController]</code> validation in the controller; the rule lives in a service or a command handler (Day 11).</li>
<li><b>Cross-cutting</b>: logging, caching and retry go to middleware, filters or a decorator (Day 10), not copied in each action.</li>
<li><b>Small safe steps</b> (Day 8 legacy refactor): tests first, one extraction per PR, commit messages that say why.</li>
<li><b>Do not</b> jump straight to CQRS and MediatR for a three-action controller; extract a service first.</li>
</ul>
<p>When to use / when not: the full handler-per-use-case style pays off when the actions are many and different; for a tiny CRUD controller a single service is enough.</p>`,
        hi: `<ul>
<li><b>Smell पढ़ो</b> (Day 8): 12 constructor dependencies का मतलब आम तौर पर बदलने की कई वजहें (SRP)। जो dependencies हमेशा साथ चलती हैं उन्हें एक service में जोड़ो।</li>
<li><b>पतला action</b> (Day 12/13): model binding और <code>[ApiController]</code> validation controller में; नियम service या command handler में (Day 11)।</li>
<li><b>Cross-cutting</b>: logging, caching और retry middleware, filters या decorator में (Day 10), हर action में कॉपी नहीं।</li>
<li><b>छोटे सुरक्षित कदम</b> (Day 8 legacy refactor): पहले tests, हर PR में एक extraction, ऐसे commit messages जो वजह बताएँ।</li>
<li><b>मत करो</b>: तीन actions के controller के लिए सीधे CQRS और MediatR पर मत कूदो; पहले एक service निकालो।</li>
</ul>
<p>कब use / कब नहीं: हर use case के लिए handler वाला तरीका तब फ़ायदा देता है जब actions कई और अलग हों; छोटे CRUD controller के लिए एक service काफ़ी है।</p>`,
        hg: `<ul>
<li><b>Smell padho</b> (Day 8): 12 constructor dependencies ka matlab aam taur par badalne ki kai wajahein (SRP). Jo dependencies hamesha saath chalti hain unhe ek service mein jodo.</li>
<li><b>Patla action</b> (Day 12/13): model binding aur <code>[ApiController]</code> validation controller mein; niyam service ya command handler mein (Day 11).</li>
<li><b>Cross-cutting</b>: logging, caching aur retry middleware, filters ya decorator mein (Day 10), har action mein copy nahi.</li>
<li><b>Chhote surakshit kadam</b> (Day 8 legacy refactor): pehle tests, har PR mein ek extraction, aise commit messages jo wajah batayein.</li>
<li><b>Mat karo</b>: teen actions ke controller ke liye seedhe CQRS aur MediatR par mat kudo; pehle ek service nikalo.</li>
</ul>
<p>Kab use / kab nahi: har use case ke liye handler wala tareeka tab faayda deta hai jab actions kai aur alag hon; chhote CRUD controller ke liye ek service kaafi hai.</p>`
      }
    },
    {
      id: "test-api-in-process",
      depth: "detailed",
      q: "How do you test a Web API endpoint without deploying it, and what do you replace with fakes?",
      answer: "Run the real pipeline in memory with WebApplicationFactory or TestServer and call it through an HttpClient. Replace outside dependencies, such as the database or a payment gateway, in DI.",
      meaning: {
        hi: "असली pipeline को memory में WebApplicationFactory या TestServer से चलाओ और HttpClient से call करो। बाहरी dependencies, जैसे database या payment gateway, DI में बदल दो।",
        hg: "Asli pipeline ko memory mein WebApplicationFactory ya TestServer se chalao aur HttpClient se call karo. Bahari dependencies, jaise database ya payment gateway, DI mein badal do."
      },
      explain: {
        en: `<ul>
<li><b>In-process</b>: <code>WebApplicationFactory&lt;Program&gt;</code> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) or <code>TestServer</code> (<code>Microsoft.AspNetCore.TestHost</code>) starts the real middleware, routing, binding and filters, with no network port.</li>
<li><b>Replace in DI</b>: swap the payment client for a fake; for the database use a real engine in a container for realistic SQL, or SQLite in-memory as a cheaper stand-in (Day 7 notes on provider differences).</li>
<li><b>What you check</b>: status codes, headers (<code>Location</code>, <code>ETag</code>), ProblemDetails body, 401 vs 403 (Day 13).</li>
<li>This site's own puzzles use <code>TestServer</code>; look at them for a working shape.</li>
</ul>
<p>When to use / when not: integration tests for the pipeline and wiring; keep fast unit tests for domain rules, which need no web host at all.</p>`,
        hi: `<ul>
<li><b>In-process</b>: <code>WebApplicationFactory&lt;Program&gt;</code> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) या <code>TestServer</code> (<code>Microsoft.AspNetCore.TestHost</code>) असली middleware, routing, binding और filters चलाता है, बिना network port के।</li>
<li><b>DI में बदलो</b>: payment client की जगह fake; database के लिए realistic SQL को container में असली engine, या सस्ते विकल्प के रूप में SQLite in-memory (provider के फ़र्क़ पर Day 7 के notes)।</li>
<li><b>क्या जाँचते हैं</b>: status codes, headers (<code>Location</code>, <code>ETag</code>), ProblemDetails body, 401 बनाम 403 (Day 13)।</li>
<li>इस site के अपने puzzles <code>TestServer</code> इस्तेमाल करते हैं; चलता हुआ नमूना वहाँ देखो।</li>
</ul>
<p>कब use / कब नहीं: pipeline और wiring के लिए integration tests; domain rules के लिए तेज़ unit tests रखो, जिन्हें web host चाहिए ही नहीं।</p>`,
        hg: `<ul>
<li><b>In-process</b>: <code>WebApplicationFactory&lt;Program&gt;</code> (package <code>Microsoft.AspNetCore.Mvc.Testing</code>) ya <code>TestServer</code> (<code>Microsoft.AspNetCore.TestHost</code>) asli middleware, routing, binding aur filters chalata hai, bina network port ke.</li>
<li><b>DI mein badlo</b>: payment client ki jagah fake; database ke liye realistic SQL ko container mein asli engine, ya saste vikalp ke roop mein SQLite in-memory (provider ke farq par Day 7 ke notes).</li>
<li><b>Kya jaanchte hain</b>: status codes, headers (<code>Location</code>, <code>ETag</code>), ProblemDetails body, 401 banaam 403 (Day 13).</li>
<li>Is site ke apne puzzles <code>TestServer</code> istemaal karte hain; chalta hua namoona wahan dekho.</li>
</ul>
<p>Kab use / kab nahi: pipeline aur wiring ke liye integration tests; domain rules ke liye tez unit tests rakho, jinhe web host chahiye hi nahi.</p>`
      }
    },
    {
      id: "lost-update-etag-rowversion",
      depth: "detailed",
      q: "Two users edit the same record through your API. How do you prevent lost updates end to end?",
      answer: "Use an EF rowversion for optimistic concurrency and expose it as an ETag. The client sends If-Match, and a stale write returns 412 Precondition Failed instead of silently overwriting.",
      meaning: {
        hi: "Optimistic concurrency के लिए EF rowversion लो और उसे ETag के रूप में दिखाओ। Client If-Match भेजता है, और पुराना write चुपचाप overwrite करने की जगह 412 Precondition Failed देता है।",
        hg: "Optimistic concurrency ke liye EF rowversion lo aur use ETag ke roop mein dikhao. Client If-Match bhejta hai, aur purana write chupchaap overwrite karne ki jagah 412 Precondition Failed deta hai."
      },
      explain: {
        en: `<ul>
<li><b>Database side</b> (Day 6/7): a <code>rowversion</code> column goes into the <code>UPDATE ... WHERE</code>; 0 rows affected throws <code>DbUpdateConcurrencyException</code>.</li>
<li><b>API side</b> (Day 13): return the version as an <code>ETag</code> on GET. The client sends it back with <code>If-Match</code> on PUT; a mismatch gives <b>412</b>. Some teams return <b>409</b> when the conflict is detected by the exception.</li>
<li><b>The client's job</b>: reload, show the difference or merge, and retry with the new ETag.</li>
<li>Do not hide the exception behind a generic 500; map it to the conflict response with <code>ProblemDetails</code> through your exception handling.</li>
</ul>
<p>When to use / when not: optimistic concurrency fits mostly-read data with rare conflicts; for hot rows that conflict all the time, consider a queue or a pessimistic approach.</p>`,
        hi: `<ul>
<li><b>Database की तरफ़</b> (Day 6/7): <code>rowversion</code> column <code>UPDATE ... WHERE</code> में जाता है; 0 rows affected होने पर <code>DbUpdateConcurrencyException</code> आता है।</li>
<li><b>API की तरफ़</b> (Day 13): GET पर version को <code>ETag</code> के रूप में लौटाओ। Client PUT पर उसे <code>If-Match</code> में वापस भेजता है; mismatch पर <b>412</b>। कुछ teams exception से conflict पकड़े जाने पर <b>409</b> लौटाती हैं।</li>
<li><b>Client का काम</b>: reload करो, फ़र्क़ दिखाओ या merge करो, और नए ETag के साथ फिर कोशिश करो।</li>
<li>Exception को generic 500 के पीछे मत छुपाओ; exception handling से उसे <code>ProblemDetails</code> के साथ conflict response में map करो।</li>
</ul>
<p>कब use / कब नहीं: optimistic concurrency ज़्यादातर पढ़े जाने वाले data के लिए ठीक है जहाँ conflict कम हों; जिन hot rows पर हर समय conflict हो, वहाँ queue या pessimistic तरीका सोचो।</p>`,
        hg: `<ul>
<li><b>Database ki taraf</b> (Day 6/7): <code>rowversion</code> column <code>UPDATE ... WHERE</code> mein jaata hai; 0 rows affected hone par <code>DbUpdateConcurrencyException</code> aata hai.</li>
<li><b>API ki taraf</b> (Day 13): GET par version ko <code>ETag</code> ke roop mein lautao. Client PUT par use <code>If-Match</code> mein wapas bhejta hai; mismatch par <b>412</b>. Kuch teams exception se conflict pakde jaane par <b>409</b> lautati hain.</li>
<li><b>Client ka kaam</b>: reload karo, farq dikhao ya merge karo, aur naye ETag ke saath phir koshish karo.</li>
<li>Exception ko generic 500 ke peeche mat chhupao; exception handling se use <code>ProblemDetails</code> ke saath conflict response mein map karo.</li>
</ul>
<p>Kab use / kab nahi: optimistic concurrency zyaadatar padhe jaane wale data ke liye theek hai jahan conflict kam hon; jin hot rows par har samay conflict ho, wahan queue ya pessimistic tareeka socho.</p>`
      }
    },
    {
      id: "email-after-order-design",
      depth: "detailed",
      q: "After an order is saved, you must send a confirmation email without slowing the request. How do you design it?",
      answer: "Save the order and an outbox message in one transaction, and let a BackgroundService send it later using a fresh scope per message. Do not fire-and-forget with Task.Run inside the request.",
      meaning: {
        hi: "Order और एक outbox message एक transaction में save करो, और BackgroundService उसे बाद में हर message के लिए नए scope के साथ भेजे। Request के अंदर Task.Run से fire-and-forget मत करो।",
        hg: "Order aur ek outbox message ek transaction mein save karo, aur BackgroundService use baad mein har message ke liye naye scope ke saath bheje. Request ke andar Task.Run se fire-and-forget mat karo."
      },
      explain: {
        en: `<ul>
<li><b>Why not Task.Run</b>: the work is lost when the process stops, errors disappear, and the request's scoped services (such as <code>DbContext</code>) may already be disposed (Day 11).</li>
<li><b>Outbox idea</b>: <code>SaveChanges</code> writes the order and a "send email" row together, so both succeed or both fail (Day 6/7 transactions).</li>
<li><b>Worker</b>: a <code>BackgroundService</code> (singleton) reads pending rows, creates a scope per message with <code>IServiceScopeFactory</code>, sends, and marks them done (Day 11).</li>
<li><b>Be honest about delivery</b>: the worker may send twice after a crash, so the email step should tolerate duplicates (Day 13 idempotency).</li>
<li>For a larger system, a message broker replaces the table-polling; the idea stays the same.</li>
</ul>
<p>When to use / when not: this adds moving parts; for a low-volume internal tool, sending inside the request with a short timeout may be acceptable.</p>`,
        hi: `<ul>
<li><b>Task.Run क्यों नहीं</b>: process रुकने पर काम खो जाता है, errors ग़ायब हो जाती हैं, और request की scoped services (जैसे <code>DbContext</code>) पहले ही dispose हो चुकी हो सकती हैं (Day 11)।</li>
<li><b>Outbox का विचार</b>: <code>SaveChanges</code> order और "send email" row साथ लिखता है, इसलिए दोनों सफल होते हैं या दोनों फेल (Day 6/7 transactions)।</li>
<li><b>Worker</b>: <code>BackgroundService</code> (singleton) pending rows पढ़ता है, <code>IServiceScopeFactory</code> से हर message के लिए scope बनाता है, भेजता है, और done मार्क करता है (Day 11)।</li>
<li><b>Delivery के बारे में ईमानदार रहो</b>: crash के बाद worker दो बार भेज सकता है, इसलिए email step को duplicates सह लेने चाहिए (Day 13 idempotency)।</li>
<li>बड़े system में table-polling की जगह message broker आता है; विचार वही रहता है।</li>
</ul>
<p>कब use / कब नहीं: इससे चलते हिस्से बढ़ते हैं; कम volume के internal tool के लिए छोटे timeout के साथ request के अंदर भेजना भी चल सकता है।</p>`,
        hg: `<ul>
<li><b>Task.Run kyon nahi</b>: process rukne par kaam kho jaata hai, errors gaayab ho jaati hain, aur request ki scoped services (jaise <code>DbContext</code>) pehle hi dispose ho chuki ho sakti hain (Day 11).</li>
<li><b>Outbox ka vichaar</b>: <code>SaveChanges</code> order aur "send email" row saath likhta hai, isliye dono safal hote hain ya dono fail (Day 6/7 transactions).</li>
<li><b>Worker</b>: <code>BackgroundService</code> (singleton) pending rows padhta hai, <code>IServiceScopeFactory</code> se har message ke liye scope banata hai, bhejta hai, aur done mark karta hai (Day 11).</li>
<li><b>Delivery ke baare mein imaandaar raho</b>: crash ke baad worker do baar bhej sakta hai, isliye email step ko duplicates sah lene chahiye (Day 13 idempotency).</li>
<li>Bade system mein table-polling ki jagah message broker aata hai; vichaar wahi rehta hai.</li>
</ul>
<p>Kab use / kab nahi: isse chalte hisse badhte hain; kam volume ke internal tool ke liye chhote timeout ke saath request ke andar bhejna bhi chal sakta hai.</p>`
      }
    },
    {
      id: "exceptions-vs-results-api",
      depth: "detailed",
      q: "In a Web API, when do you throw exceptions and when do you return a result or ProblemDetails?",
      answer: "Return a result or ProblemDetails for expected outcomes like validation errors or not found. Throw exceptions for unexpected failures and let one global handler turn them into a 500 ProblemDetails.",
      meaning: {
        hi: "Validation errors या not found जैसे अपेक्षित नतीजों के लिए result या ProblemDetails लौटाओ। अनपेक्षित failures पर exception फेंको और एक global handler से उसे 500 ProblemDetails बनने दो।",
        hg: "Validation errors ya not found jaise apekshit nateejon ke liye result ya ProblemDetails lautao. Anapekshit failures par exception phenko aur ek global handler se use 500 ProblemDetails banne do."
      },
      explain: {
        en: `<ul>
<li><b>Expected</b> (user typed a bad email, product not found, stock too low): normal business outcomes. Return a result type or a status code with <code>ProblemDetails</code> (Day 13). Using exceptions for them hides control flow, and throwing is slower than returning.</li>
<li><b>Unexpected</b> (database down, null where impossible): throw (Day 3) and let <code>UseExceptionHandler</code> with an <code>IExceptionHandler</code> return a 500 without leaking internals (Day 13).</li>
<li><b>Consistency</b>: pick one strategy per layer and write it down; Day 3's exception strategy applies.</li>
<li>Never swallow an exception with an empty <code>catch</code>; log it with context and rethrow with <code>throw;</code> (Day 3).</li>
</ul>
<p>When to use / when not: a Result type adds ceremony; for a small API, a few well-named domain exceptions mapped by a handler can be simpler. Choose, and stay consistent.</p>`,
        hi: `<ul>
<li><b>अपेक्षित</b> (user ने ग़लत email लिखा, product नहीं मिला, stock कम): सामान्य business नतीजे। Result type या <code>ProblemDetails</code> के साथ status code लौटाओ (Day 13)। इनके लिए exceptions control flow छुपाते हैं, और throw करना return करने से धीमा है।</li>
<li><b>अनपेक्षित</b> (database down, जहाँ असंभव था वहाँ null): throw करो (Day 3) और <code>UseExceptionHandler</code> के साथ <code>IExceptionHandler</code> को internals leak किए बिना 500 लौटाने दो (Day 13)।</li>
<li><b>Consistency</b>: हर layer के लिए एक रणनीति चुनो और लिख लो; Day 3 की exception strategy लागू होती है।</li>
<li>Empty <code>catch</code> से exception कभी मत निगलो; context के साथ log करो और <code>throw;</code> से दोबारा फेंको (Day 3)।</li>
</ul>
<p>कब use / कब नहीं: Result type में रस्म बढ़ती है; छोटे API के लिए handler से map होने वाले कुछ अच्छे नाम के domain exceptions सरल हो सकते हैं। चुनो, और एक जैसा रहो।</p>`,
        hg: `<ul>
<li><b>Apekshit</b> (user ne galat email likha, product nahi mila, stock kam): saamaanya business nateeje. Result type ya <code>ProblemDetails</code> ke saath status code lautao (Day 13). Inke liye exceptions control flow chhupate hain, aur throw karna return karne se dheema hai.</li>
<li><b>Anapekshit</b> (database down, jahan asambhav tha wahan null): throw karo (Day 3) aur <code>UseExceptionHandler</code> ke saath <code>IExceptionHandler</code> ko internals leak kiye bina 500 lautane do (Day 13).</li>
<li><b>Consistency</b>: har layer ke liye ek ranneeti chuno aur likh lo; Day 3 ki exception strategy lagu hoti hai.</li>
<li>Empty <code>catch</code> se exception kabhi mat nigalo; context ke saath log karo aur <code>throw;</code> se dobara phenko (Day 3).</li>
</ul>
<p>Kab use / kab nahi: Result type mein rasm badhti hai; chhote API ke liye handler se map hone wale kuch achhe naam ke domain exceptions saral ho sakte hain. Chuno, aur ek jaisa raho.</p>`
      }
    },
    {
      id: "secure-api-end-to-end",
      depth: "detailed",
      q: "Walk me through how you would secure a new Web API end to end.",
      answer: "HTTPS everywhere, JWT bearer authentication with short lifetimes, authorization policies per resource, input validation, CORS limited to known origins, rate limiting, secrets outside source code, and safe error responses.",
      meaning: {
        hi: "हर जगह HTTPS, छोटी lifetime वाला JWT bearer authentication, resource के हिसाब से authorization policies, input validation, जाने-पहचाने origins तक सीमित CORS, rate limiting, source code के बाहर secrets, और सुरक्षित error responses।",
        hg: "Har jagah HTTPS, chhoti lifetime wala JWT bearer authentication, resource ke hisaab se authorization policies, input validation, jaane-pehchaane origins tak seemit CORS, rate limiting, source code ke bahar secrets, aur surakshit error responses."
      },
      explain: {
        en: `<ul>
<li><b>Transport</b>: HTTPS and HSTS; do not put secrets in URLs.</li>
<li><b>Authentication</b> (Day 13): validate the JWT (issuer, audience, signature, expiry); a JWT is signed, not encrypted. Prefer an identity provider using OIDC over writing your own login.</li>
<li><b>Authorization</b> (Day 12/13): policies and claims; <code>UseAuthentication</code> sets the user, authorization answers 401 or 403. Check the resource owner, not only the role.</li>
<li><b>Input</b>: <code>[ApiController]</code> validation; parameterised queries come free with EF Core when you avoid raw string SQL (Day 6).</li>
<li><b>Browsers and abuse</b>: CORS is a browser rule, not authentication; add rate limiting with 429.</li>
<li><b>Secrets and errors</b>: user secrets in development, a vault or environment variables in production (Day 12); ProblemDetails without stack traces.</li>
</ul>
<p>When to use / when not: this is a checklist; say which parts a gateway already gives you, and which stay in the app.</p>`,
        hi: `<ul>
<li><b>Transport</b>: HTTPS और HSTS; secrets को URLs में मत रखो।</li>
<li><b>Authentication</b> (Day 13): JWT validate करो (issuer, audience, signature, expiry); JWT signed है, encrypted नहीं। अपना login लिखने की जगह OIDC वाला identity provider चुनो।</li>
<li><b>Authorization</b> (Day 12/13): policies और claims; <code>UseAuthentication</code> user सेट करता है, authorization 401 या 403 देता है। सिर्फ़ role नहीं, resource का मालिक भी जाँचो।</li>
<li><b>Input</b>: <code>[ApiController]</code> validation; parameterised queries EF Core के साथ मुफ़्त मिलती हैं, जब raw string SQL से बचो (Day 6)।</li>
<li><b>Browsers और दुरुपयोग</b>: CORS browser का नियम है, authentication नहीं; rate limiting 429 के साथ जोड़ो।</li>
<li><b>Secrets और errors</b>: development में user secrets, production में vault या environment variables (Day 12); stack trace के बिना ProblemDetails।</li>
</ul>
<p>कब use / कब नहीं: यह checklist है; बताओ कि कौन से हिस्से gateway पहले ही देता है, और कौन से app में रहते हैं।</p>`,
        hg: `<ul>
<li><b>Transport</b>: HTTPS aur HSTS; secrets ko URLs mein mat rakho.</li>
<li><b>Authentication</b> (Day 13): JWT validate karo (issuer, audience, signature, expiry); JWT signed hai, encrypted nahi. Apna login likhne ki jagah OIDC wala identity provider chuno.</li>
<li><b>Authorization</b> (Day 12/13): policies aur claims; <code>UseAuthentication</code> user set karta hai, authorization 401 ya 403 deta hai. Sirf role nahi, resource ka maalik bhi jaancho.</li>
<li><b>Input</b>: <code>[ApiController]</code> validation; parameterised queries EF Core ke saath muft milti hain, jab raw string SQL se bacho (Day 6).</li>
<li><b>Browsers aur durupyog</b>: CORS browser ka niyam hai, authentication nahi; rate limiting 429 ke saath jodo.</li>
<li><b>Secrets aur errors</b>: development mein user secrets, production mein vault ya environment variables (Day 12); stack trace ke bina ProblemDetails.</li>
</ul>
<p>Kab use / kab nahi: yeh checklist hai; batao ki kaun se hisse gateway pehle hi deta hai, aur kaun se app mein rehte hain.</p>`
      }
    },
    {
      id: "caching-decorator-over-repository",
      depth: "detailed",
      q: "You want to add caching to an existing repository without changing it. How do you do it, and what can go wrong?",
      answer: "Write a caching decorator with the same interface that wraps the repository, and register it so the decorator is the one resolved. Watch lifetimes: the decorator must not outlive a scoped repository.",
      meaning: {
        hi: "वही interface वाला caching decorator लिखो जो repository को wrap करे, और उसे ऐसे register करो कि decorator ही resolve हो। Lifetimes देखो: decorator scoped repository से ज़्यादा नहीं जीना चाहिए।",
        hg: "Wahi interface wala caching decorator likho jo repository ko wrap kare, aur use aise register karo ki decorator hi resolve ho. Lifetimes dekho: decorator scoped repository se zyada nahi jeena chahiye."
      },
      explain: {
        en: `<ul>
<li><b>Decorator</b> (Day 10): <code>CachingProductRepository : IProductRepository</code> holds the real one and an <code>IMemoryCache</code> or <code>HybridCache</code> (Day 13); the callers do not change (OCP, Day 8).</li>
<li><b>Registration</b>: with Scrutor, <code>Decorate</code>; without it, a factory lambda. Check which registration is outermost (Day 10).</li>
<li><b>Lifetime trap</b> (Day 11): a repository using a scoped <code>DbContext</code> is Scoped, so the decorator that holds it is Scoped too; keep the cache itself in a singleton such as <code>IMemoryCache</code>.</li>
<li><b>Cache risks</b>: stale data after a write (invalidate on update), per-user data under a shared key, and returning cached entity objects that someone then mutates; cache DTOs or immutable records.</li>
</ul>
<p>When to use / when not: cache only measured, hot, read-mostly data; do not cache writes, and do not add a cache before you have a number that says you need it.</p>`,
        hi: `<ul>
<li><b>Decorator</b> (Day 10): <code>CachingProductRepository : IProductRepository</code> असली repository और <code>IMemoryCache</code> या <code>HybridCache</code> (Day 13) रखता है; callers नहीं बदलते (OCP, Day 8)।</li>
<li><b>Registration</b>: Scrutor के साथ <code>Decorate</code>; उसके बिना factory lambda। जाँचो कौन सी registration सबसे बाहर है (Day 10)।</li>
<li><b>Lifetime का जाल</b> (Day 11): scoped <code>DbContext</code> इस्तेमाल करने वाली repository Scoped है, इसलिए उसे पकड़ने वाला decorator भी Scoped है; cache को खुद <code>IMemoryCache</code> जैसे singleton में रखो।</li>
<li><b>Cache के जोखिम</b>: write के बाद पुराना data (update पर invalidate करो), shared key पर per-user data, और cached entity objects लौटाना जिन्हें कोई बदल दे; DTOs या immutable records cache करो।</li>
</ul>
<p>कब use / कब नहीं: सिर्फ़ नापे हुए, hot, ज़्यादातर पढ़े जाने वाले data को cache करो; writes cache मत करो, और जब तक ज़रूरत बताने वाला number न हो, cache मत जोड़ो।</p>`,
        hg: `<ul>
<li><b>Decorator</b> (Day 10): <code>CachingProductRepository : IProductRepository</code> asli repository aur <code>IMemoryCache</code> ya <code>HybridCache</code> (Day 13) rakhta hai; callers nahi badalte (OCP, Day 8).</li>
<li><b>Registration</b>: Scrutor ke saath <code>Decorate</code>; uske bina factory lambda. Jaancho kaun si registration sabse bahar hai (Day 10).</li>
<li><b>Lifetime ka jaal</b> (Day 11): scoped <code>DbContext</code> istemaal karne wali repository Scoped hai, isliye use pakadne wala decorator bhi Scoped hai; cache ko khud <code>IMemoryCache</code> jaise singleton mein rakho.</li>
<li><b>Cache ke jokhim</b>: write ke baad purana data (update par invalidate karo), shared key par per-user data, aur cached entity objects lautana jinhe koi badal de; DTOs ya immutable records cache karo.</li>
</ul>
<p>Kab use / kab nahi: sirf naape hue, hot, zyaadatar padhe jaane wale data ko cache karo; writes cache mat karo, aur jab tak zaroorat batane wala number na ho, cache mat jodo.</p>`
      }
    }
  ],
  puzzles: [
    {
      id: "scope-dispose-reverse-order",
      packages: ["Microsoft.Extensions.DependencyInjection"],
      src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddScoped<Db>();
services.AddScoped<Repo>();
services.AddScoped<Handler>();
using var provider = services.BuildServiceProvider();

using (var scope = provider.CreateScope())
{
    var handler = scope.ServiceProvider.GetRequiredService<Handler>();
    Console.WriteLine("handler resolved");
}
Console.WriteLine("scope closed");

class Db : IDisposable
{
    public Db() => Console.WriteLine("Db created");
    public void Dispose() => Console.WriteLine("Db disposed");
}

class Repo : IDisposable
{
    public Repo(Db db) => Console.WriteLine("Repo created");
    public void Dispose() => Console.WriteLine("Repo disposed");
}

class Handler : IDisposable
{
    public Handler(Repo repo) => Console.WriteLine("Handler created");
    public void Dispose() => Console.WriteLine("Handler disposed");
}`,
      answer: "Db created\nRepo created\nHandler created\nhandler resolved\nHandler disposed\nRepo disposed\nDb disposed\nscope closed",
      explain: {
        en: "<p>Resolving <code>Handler</code> builds its dependencies first: Db, then Repo, then Handler. When the scope ends, the container disposes what it created in <b>reverse order of creation</b>: Handler, Repo, Db. So a service can still use its dependencies inside its own <code>Dispose</code>. Nobody called <code>Dispose</code> in the code: the scope did it, because the container owns what it creates. Interview point: do not dispose injected services yourself.</p>",
        hi: "<p><code>Handler</code> resolve करने पर पहले उसकी dependencies बनती हैं: Db, फिर Repo, फिर Handler। Scope ख़त्म होने पर container जो बनाया था उसे <b>बनने के उल्टे क्रम</b> में dispose करता है: Handler, Repo, Db। इसलिए कोई service अपने <code>Dispose</code> में भी अपनी dependencies इस्तेमाल कर सकती है। Code में किसी ने <code>Dispose</code> नहीं बुलाया: scope ने बुलाया, क्योंकि जो container बनाता है उसका मालिक वही है। Interview point: inject की गई services को ख़ुद dispose मत करो।</p>",
        hg: "<p><code>Handler</code> resolve karne par pehle uski dependencies banti hain: Db, phir Repo, phir Handler. Scope khatam hone par container jo banaya tha use <b>banne ke ulte kram</b> mein dispose karta hai: Handler, Repo, Db. Isliye koi service apne <code>Dispose</code> mein bhi apni dependencies istemaal kar sakti hai. Code mein kisi ne <code>Dispose</code> nahi bulaya: scope ne bulaya, kyunki jo container banata hai uska maalik wahi hai. Interview point: inject ki gayi services ko khud dispose mat karo.</p>"
      }
    },
    {
      id: "state-pattern-order-lifecycle",
      src: `var order = new Order();
order.Pay();
order.Cancel();
order.Ship();
order.Cancel();
order.Pay();
Console.WriteLine("final: " + order.State.Name);

class Order
{
    public IOrderState State { get; set; } = new Pending();
    public void Pay() => State.Pay(this);
    public void Ship() => State.Ship(this);
    public void Cancel() => State.Cancel(this);
}

interface IOrderState
{
    string Name { get; }
    void Pay(Order o);
    void Ship(Order o);
    void Cancel(Order o);
}

class Pending : IOrderState
{
    public string Name => "Pending";
    public void Pay(Order o) { Console.WriteLine("paid"); o.State = new Paid(); }
    public void Ship(Order o) => Console.WriteLine("cannot ship unpaid");
    public void Cancel(Order o) { Console.WriteLine("cancelled"); o.State = new Cancelled(); }
}

class Paid : IOrderState
{
    public string Name => "Paid";
    public void Pay(Order o) => Console.WriteLine("already paid");
    public void Ship(Order o) { Console.WriteLine("shipped"); o.State = new Shipped(); }
    public void Cancel(Order o) { Console.WriteLine("refund and cancel"); o.State = new Cancelled(); }
}

class Shipped : IOrderState
{
    public string Name => "Shipped";
    public void Pay(Order o) => Console.WriteLine("already paid");
    public void Ship(Order o) => Console.WriteLine("already shipped");
    public void Cancel(Order o) => Console.WriteLine("too late to cancel");
}

class Cancelled : IOrderState
{
    public string Name => "Cancelled";
    public void Pay(Order o) => Console.WriteLine("order is closed");
    public void Ship(Order o) => Console.WriteLine("order is closed");
    public void Cancel(Order o) => Console.WriteLine("order is closed");
}`,
      answer: "paid\nrefund and cancel\norder is closed\norder is closed\norder is closed\nfinal: Cancelled",
      explain: {
        en: "<p>The order starts in <code>Pending</code>. <code>Pay</code> moves it to <code>Paid</code>. The next call, <code>Cancel</code>, is handled by the <b>Paid</b> state: it prints \"refund and cancel\" and switches to <code>Cancelled</code>. From then on, every call lands in <code>Cancelled</code>, which answers \"order is closed\" and never changes state again. The same <code>Cancel()</code> call did different things because the <b>state object</b> changed, with no <code>if</code> on a status field. Interview point: State = the context swaps its own state; in Strategy the client chooses.</p>",
        hi: "<p>Order <code>Pending</code> से शुरू होता है। <code>Pay</code> उसे <code>Paid</code> में ले जाता है। अगली call, <code>Cancel</code>, <b>Paid</b> state संभालती है: \"refund and cancel\" print करती है और <code>Cancelled</code> में बदल देती है। उसके बाद हर call <code>Cancelled</code> में जाती है, जो \"order is closed\" कहता है और state फिर नहीं बदलता। एक ही <code>Cancel()</code> call ने अलग काम किए क्योंकि <b>state object</b> बदल गया, status field पर <code>if</code> के बिना। Interview point: State = context अपनी state ख़ुद बदलता है; Strategy में client चुनता है।</p>",
        hg: "<p>Order <code>Pending</code> se shuru hota hai. <code>Pay</code> use <code>Paid</code> mein le jaata hai. Agli call, <code>Cancel</code>, <b>Paid</b> state sambhalti hai: \"refund and cancel\" print karti hai aur <code>Cancelled</code> mein badal deti hai. Uske baad har call <code>Cancelled</code> mein jaati hai, jo \"order is closed\" kehta hai aur state phir nahi badalta. Ek hi <code>Cancel()</code> call ne alag kaam kiye kyunki <b>state object</b> badal gaya, status field par <code>if</code> ke bina. Interview point: State = context apni state khud badalta hai; Strategy mein client chunta hai.</p>"
      }
    },
    {
      id: "route-precedence-literal-constraint",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
var app = builder.Build();

app.MapGet("/items/{name}", (string name) => "named " + name);
app.MapGet("/items/{id:int}", (int id) => "item " + id);
app.MapGet("/items/special", () => "special");

await app.StartAsync();
var client = app.GetTestClient();
foreach (var path in new[] { "/items/special", "/items/42", "/items/abc", "/items/42/x" })
{
    var response = await client.GetAsync(path);
    Console.WriteLine($"{path} -> {(int)response.StatusCode} {await response.Content.ReadAsStringAsync()}");
}
await app.StopAsync();`,
      answer: "/items/special -> 200 special\n/items/42 -> 200 item 42\n/items/abc -> 200 named abc\n/items/42/x -> 404 ",
      explain: {
        en: "<p>The routes were registered with the most general first, yet the result does not depend on that order: the router ranks matching endpoints by <b>specificity</b>. A literal segment (<code>special</code>) beats a parameter, and a parameter with a constraint (<code>{id:int}</code>) beats a plain one (<code>{name}</code>). So \"special\" and \"42\" hit the specific routes, \"abc\" fails the <code>int</code> constraint and falls back to <code>{name}</code>, and \"/items/42/x\" has an extra segment, so nothing matches: 404 with an empty body. Interview point: for endpoint routing, specificity beats registration order. Middleware is different: there, order is everything.</p>",
        hi: "<p>Routes सबसे general पहले register हुईं, फिर भी नतीजा उस क्रम पर निर्भर नहीं है: router मिलते endpoints को <b>specificity</b> से rank करता है। Literal segment (<code>special</code>) parameter से जीतता है, और constraint वाला parameter (<code>{id:int}</code>) सादे वाले (<code>{name}</code>) से जीतता है। इसलिए \"special\" और \"42\" specific routes पर जाते हैं, \"abc\" <code>int</code> constraint में फेल होकर <code>{name}</code> पर आता है, और \"/items/42/x\" में एक extra segment है, इसलिए कुछ नहीं मिलता: खाली body के साथ 404। Interview point: endpoint routing में specificity registration order से बड़ी है। Middleware अलग है: वहाँ order ही सब कुछ है।</p>",
        hg: "<p>Routes sabse general pehle register hui, phir bhi nateeja us kram par nirbhar nahi hai: router milte endpoints ko <b>specificity</b> se rank karta hai. Literal segment (<code>special</code>) parameter se jeetta hai, aur constraint wala parameter (<code>{id:int}</code>) saade wale (<code>{name}</code>) se jeetta hai. Isliye \"special\" aur \"42\" specific routes par jaate hain, \"abc\" <code>int</code> constraint mein fail hokar <code>{name}</code> par aata hai, aur \"/items/42/x\" mein ek extra segment hai, isliye kuch nahi milta: khaali body ke saath 404. Interview point: endpoint routing mein specificity registration order se badi hai. Middleware alag hai: wahan order hi sab kuch hai.</p>"
      }
    },
    {
      id: "minimal-api-binding-failure-400",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
var app = builder.Build();

app.MapGet("/square", (int n) => (n * n).ToString());
app.MapGet("/greet", (string? name) => "hi " + (name ?? "guest"));
app.MapGet("/page", (int page = 1) => "page " + page);

await app.StartAsync();
var client = app.GetTestClient();
foreach (var path in new[] { "/square?n=4", "/square", "/square?n=four", "/greet", "/page", "/page?page=3" })
{
    var response = await client.GetAsync(path);
    var body = await response.Content.ReadAsStringAsync();
    Console.WriteLine($"{path} -> {(int)response.StatusCode} {(body.Length > 0 ? body : "(empty)")}");
}
await app.StopAsync();`,
      answer: "/square?n=4 -> 200 16\n/square -> 400 (empty)\n/square?n=four -> 400 (empty)\n/greet -> 200 hi guest\n/page -> 200 page 1\n/page?page=3 -> 200 page 3",
      explain: {
        en: "<p>Minimal APIs bind simple parameters from the route or the query string. <code>int n</code> is required: a missing value or text that is not an integer gives <b>400 Bad Request</b> before your lambda runs, so the lambda is never called. <code>string? name</code> is optional (nullable), so a missing value becomes <code>null</code>. <code>int page = 1</code> is optional because of its default value. Interview point: nullability and defaults decide what is required in Minimal APIs. The 400 body is empty because nothing here writes one (no <code>UseStatusCodePages</code> with <code>AddProblemDetails</code>). The default environment is Production; in Development, <code>ThrowOnBadRequest</code> makes the developer exception page write a body.</p>",
        hi: "<p>Minimal APIs सादे parameters को route या query string से bind करते हैं। <code>int n</code> ज़रूरी है: value न हो या integer न हो तो आपकी lambda चलने से पहले <b>400 Bad Request</b> मिलता है, यानी lambda बुलाई ही नहीं जाती। <code>string? name</code> optional (nullable) है, इसलिए ग़ैरहाज़िर value <code>null</code> बनती है। <code>int page = 1</code> default value की वजह से optional है। Interview point: Minimal APIs में nullability और defaults तय करते हैं कि क्या ज़रूरी है। यहाँ 400 की body खाली है क्योंकि यहाँ कुछ उसे लिखता ही नहीं (<code>UseStatusCodePages</code> के साथ <code>AddProblemDetails</code> नहीं)। Default environment Production है; Development में <code>ThrowOnBadRequest</code> की वजह से developer exception page body लिखता है।</p>",
        hg: "<p>Minimal APIs saade parameters ko route ya query string se bind karte hain. <code>int n</code> zaroori hai: value na ho ya integer na ho to aapki lambda chalne se pehle <b>400 Bad Request</b> milta hai, yaani lambda bulayi hi nahi jaati. <code>string? name</code> optional (nullable) hai, isliye gaihaazir value <code>null</code> banti hai. <code>int page = 1</code> default value ki wajah se optional hai. Interview point: Minimal APIs mein nullability aur defaults tay karte hain ki kya zaroori hai. Yahan 400 ki body khaali hai kyunki yahan kuch use likhta hi nahi (<code>UseStatusCodePages</code> ke saath <code>AddProblemDetails</code> nahi). Default environment Production hai; Development mein <code>ThrowOnBadRequest</code> ki wajah se developer exception page body likhta hai.</p>"
      }
    },
    {
      id: "deferred-repository-after-dispose",
      src: `var repo = new Repo();
List<string> list;
IEnumerable<string> lazy;

using (var db = new FakeDb())
{
    list = repo.GetList(db);
    lazy = repo.GetLazy(db);
    Console.WriteLine("inside: " + list.Count);
}

Console.WriteLine("list after dispose: " + list.Count);
try
{
    Console.WriteLine("lazy count: " + lazy.Count());
}
catch (ObjectDisposedException e)
{
    Console.WriteLine("lazy failed: " + e.ObjectName);
}

class FakeDb : IDisposable
{
    private bool _disposed;

    public IEnumerable<string> Names()
    {
        foreach (var name in new[] { "Asha", "Ravindra", "Meena" })
        {
            if (_disposed) throw new ObjectDisposedException(nameof(FakeDb));
            yield return name;
        }
    }

    public void Dispose()
    {
        _disposed = true;
        Console.WriteLine("db disposed");
    }
}

class Repo
{
    public List<string> GetList(FakeDb db) => db.Names().Where(n => n.Length > 4).ToList();
    public IEnumerable<string> GetLazy(FakeDb db) => db.Names().Where(n => n.Length > 4);
}`,
      answer: "inside: 2\ndb disposed\nlist after dispose: 2\nlazy failed: FakeDb",
      explain: {
        en: "<p>Both repository methods build the same query. <code>GetList</code> ends with <code>ToList()</code>, so it runs <b>now</b>, while the database is alive: the list holds 2 names for good. <code>GetLazy</code> returns the query itself, which has not run yet (Week 1: deferred execution). After the <code>using</code> block the database is disposed, and when <code>lazy.Count()</code> finally enumerates it, the first step hits the disposed database and throws. This is the same trap as returning <code>IEnumerable</code> or <code>IQueryable</code> from a repository over a <code>DbContext</code> that a scope has already closed. Interview point: materialise inside the scope that owns the connection, or return a DTO list.</p>",
        hi: "<p>दोनों repository methods एक ही query बनाती हैं। <code>GetList</code> <code>ToList()</code> पर ख़त्म होती है, इसलिए वो <b>अभी</b> चलती है, जब database ज़िंदा है: list में हमेशा के लिए 2 नाम हैं। <code>GetLazy</code> query ही लौटाती है, जो अभी चली नहीं (Week 1: deferred execution)। <code>using</code> block के बाद database dispose हो जाता है, और जब <code>lazy.Count()</code> आख़िर में उसे enumerate करता है, पहला क़दम ही dispose हुए database से टकराकर exception फेंकता है। यह वही जाल है जो उस <code>DbContext</code> पर बने repository से <code>IEnumerable</code> या <code>IQueryable</code> लौटाने पर मिलता है जिसे scope बंद कर चुका हो। Interview point: उसी scope के अंदर materialise करो जो connection का मालिक है, या DTO list लौटाओ।</p>",
        hg: "<p>Dono repository methods ek hi query banati hain. <code>GetList</code> <code>ToList()</code> par khatam hoti hai, isliye woh <b>abhi</b> chalti hai, jab database zinda hai: list mein hamesha ke liye 2 naam hain. <code>GetLazy</code> query hi lautati hai, jo abhi chali nahi (Week 1: deferred execution). <code>using</code> block ke baad database dispose ho jaata hai, aur jab <code>lazy.Count()</code> aakhir mein use enumerate karta hai, pehla kadam hi dispose hue database se takraakar exception phenkta hai. Yeh wahi jaal hai jo us <code>DbContext</code> par bane repository se <code>IEnumerable</code> ya <code>IQueryable</code> lautane par milta hai jise scope band kar chuka ho. Interview point: usi scope ke andar materialise karo jo connection ka maalik hai, ya DTO list lautao.</p>"
      }
    },
    {
      id: "response-started-status-locked",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
var app = builder.Build();

app.Run(async context =>
{
    Console.WriteLine("started before write: " + context.Response.HasStarted);
    await context.Response.WriteAsync("hello");
    Console.WriteLine("started after write: " + context.Response.HasStarted);
    try
    {
        context.Response.StatusCode = 500;
        Console.WriteLine("status changed");
    }
    catch (InvalidOperationException)
    {
        Console.WriteLine("status change rejected");
    }
});

await app.StartAsync();
var client = app.GetTestClient();
var response = await client.GetAsync("/");
Console.WriteLine((int)response.StatusCode + " " + await response.Content.ReadAsStringAsync());
await app.StopAsync();`,
      answer: "started before write: False\nstarted after write: True\nstatus change rejected\n200 hello",
      explain: {
        en: "<p>The first write to the body sends the status line and headers, so <code>HasStarted</code> flips from false to true. After that the status code and headers are frozen: setting <code>StatusCode</code> throws <code>InvalidOperationException</code>, and the client still sees 200 with \"hello\". This is why an exception handler that runs <b>after</b> the response has started cannot turn the result into a 500 or a ProblemDetails. Interview point: check <code>HasStarted</code> before you change the response, and avoid writing the body from middleware that still wants to set headers.</p>",
        hi: "<p>Body में पहला write status line और headers भेज देता है, इसलिए <code>HasStarted</code> false से true हो जाता है। उसके बाद status code और headers जम जाते हैं: <code>StatusCode</code> सेट करने पर <code>InvalidOperationException</code> आता है, और client को फिर भी \"hello\" के साथ 200 दिखता है। इसीलिए response शुरू होने के <b>बाद</b> चलने वाला exception handler नतीजे को 500 या ProblemDetails नहीं बना सकता। Interview point: response बदलने से पहले <code>HasStarted</code> जाँचो, और जिस middleware को अभी headers सेट करने हों वो body न लिखे।</p>",
        hg: "<p>Body mein pehla write status line aur headers bhej deta hai, isliye <code>HasStarted</code> false se true ho jaata hai. Uske baad status code aur headers jam jaate hain: <code>StatusCode</code> set karne par <code>InvalidOperationException</code> aata hai, aur client ko phir bhi \"hello\" ke saath 200 dikhta hai. Isiliye response shuru hone ke <b>baad</b> chalne wala exception handler nateeje ko 500 ya ProblemDetails nahi bana sakta. Interview point: response badalne se pehle <code>HasStarted</code> jaancho, aur jis middleware ko abhi headers set karne hon woh body na likhe.</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>SOLID</b> = five habits that make change cheap; guidelines, not laws.",
      "<b>DIP</b> is the principle, <b>DI</b> the technique, the container the tool.",
      "<b>Decorator, Proxy and Adapter</b> share the wrapper shape; the intent differs: add behaviour, control access, change interface.",
      "<b>Wrapper order</b>: middleware and <code>AddHttpMessageHandler</code> register the outermost first; with Scrutor the last <code>Decorate</code> is outermost.",
      "<code>DbSet</code> is already a repository and <code>DbContext</code> a unit of work; wrap them only for a clear reason.",
      "<b>Captive dependency</b>: <code>ValidateScopes</code> catches singleton to scoped, not singleton to transient.",
      "<b>Middleware</b>: code before <code>next</code> runs in order, code after <code>next</code> runs in reverse.",
      "<b>Idempotent</b> methods are GET, HEAD, OPTIONS, PUT and DELETE; POST is not, and PATCH is not guaranteed to be.",
      "<b>Status codes</b>: 201 with Location after create; 401 means not authenticated, 403 means not allowed.",
      "A <b>JWT</b> is signed, not encrypted: keep the payload non-secret and the lifetime short."
    ],
    meaning: {
      hi: [
        "SOLID = पाँच आदतें जो बदलाव सस्ता करती हैं; guidelines हैं, कानून नहीं।",
        "DIP सिद्धांत है, DI तकनीक, container औज़ार।",
        "Decorator, Proxy और Adapter का wrapper आकार एक है; मक़सद अलग: behaviour जोड़ना, access नियंत्रित करना, interface बदलना।",
        "Wrapper का क्रम: middleware और AddHttpMessageHandler में पहला registered सबसे बाहर; Scrutor में आख़िरी Decorate सबसे बाहर।",
        "DbSet पहले से repository है और DbContext unit of work; इन्हें साफ़ वजह होने पर ही wrap करो।",
        "Captive dependency: ValidateScopes singleton से scoped पकड़ता है, singleton से transient नहीं।",
        "Middleware: next से पहले का code क्रम में चलता है, next के बाद का उल्टे क्रम में।",
        "Idempotent methods हैं GET, HEAD, OPTIONS, PUT और DELETE; POST नहीं है, और PATCH के होने की गारंटी नहीं।",
        "Status codes: create के बाद Location के साथ 201; 401 यानी authenticated नहीं, 403 यानी इजाज़त नहीं।",
        "JWT signed है, encrypted नहीं: payload में secret नहीं, lifetime छोटी।"
      ],
      hg: [
        "SOLID = paanch aadatein jo badlaav sasta karti hain; guidelines hain, kanoon nahi.",
        "DIP siddhant hai, DI technique, container aujaar.",
        "Decorator, Proxy aur Adapter ka wrapper aakaar ek hai; maqsad alag: behaviour jodna, access control karna, interface badalna.",
        "Wrapper ka kram: middleware aur AddHttpMessageHandler mein pehla registered sabse bahar; Scrutor mein aakhri Decorate sabse bahar.",
        "DbSet pehle se repository hai aur DbContext unit of work; inhe saaf wajah hone par hi wrap karo.",
        "Captive dependency: ValidateScopes singleton se scoped pakadta hai, singleton se transient nahi.",
        "Middleware: next se pehle ka code kram mein chalta hai, next ke baad ka ulte kram mein.",
        "Idempotent methods hain GET, HEAD, OPTIONS, PUT aur DELETE; POST nahi hai, aur PATCH ke hone ki guarantee nahi.",
        "Status codes: create ke baad Location ke saath 201; 401 yaani authenticated nahi, 403 yaani ijaazat nahi.",
        "JWT signed hai, encrypted nahi: payload mein secret nahi, lifetime chhoti."
      ]
    }
  }
};
