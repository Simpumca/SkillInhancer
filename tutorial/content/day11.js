// Day 11 — Enterprise Patterns + DI. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 11,
  title: {
    en: "Enterprise Patterns + DI",
    hi: "Enterprise Patterns + DI (बड़े projects के patterns)",
    hg: "Enterprise Patterns + DI (bade projects ke patterns)"
  },
  summary: {
    en: `<p>Today is four topics that every .NET Tech Lead interview touches: <b>Repository + Unit of Work</b>, <b>CQRS</b>, the <b>Options pattern</b> and <b>DI lifetimes</b>. None is hard once you can say <i>what problem it solves</i> and <i>when it is overkill</i>.</p>
<ul>
<li><b>Repository + Unit of Work with EF Core</b>: <code>DbSet&lt;T&gt;</code> already behaves like a repository and <code>DbContext</code> like a unit of work (Day 5, Day 7). A wrapper is a trade-off, not a rule: you gain easier unit tests and focused methods; you risk hiding EF features and leaking <code>IQueryable</code>.</li>
<li><b>CQRS</b>: use different models for writing (commands) and reading (queries). It does <b>not</b> require two databases. It pays off when reads and writes differ a lot; it is overkill for plain CRUD.</li>
<li><b>MediatR</b> is one way to dispatch commands and queries in-process, not a requirement. A small hand-rolled dispatcher works too. MediatR moved to a commercial edition in 2025 (with a free Community tier), so check its current licence terms.</li>
<li><b>Options pattern</b>: bind a configuration section to a class. <code>IOptions&lt;T&gt;</code> is read once; <code>IOptionsSnapshot&lt;T&gt;</code> is re-read per request; <code>IOptionsMonitor&lt;T&gt;</code> sees changes live. Validate with <code>ValidateOnStart</code> so bad config fails at startup.</li>
<li><b>DI lifetimes</b>: Transient, Scoped, Singleton (basics in Day 8). A <b>captive dependency</b> is a long-lived service holding a short-lived one. <code>ValidateScopes</code> catches singleton → scoped (not singleton → transient); <code>ValidateOnBuild</code> catches registrations that cannot be constructed.</li>
<li><b>Background services</b> are singletons: create a scope with <code>IServiceScopeFactory</code> for each unit of work.</li>
<li><b>TL angle</b>: say the trade-off, not the buzzword. "We added it because of X pain" beats "it is best practice".</li>
</ul>`,
    hi: `<p>आज चार topics हैं जो हर .NET Tech Lead interview में आते हैं: <b>Repository + Unit of Work</b>, <b>CQRS</b>, <b>Options pattern</b> और <b>DI lifetimes</b>। जब आप बता सको कि यह <i>कौन सी problem हल करता है</i> और <i>कब overkill है</i>, तो कोई भी मुश्किल नहीं।</p>
<ul>
<li><b>EF Core के साथ Repository + Unit of Work</b>: <code>DbSet&lt;T&gt;</code> पहले से repository जैसा और <code>DbContext</code> unit of work जैसा है (Day 5, Day 7)। Wrapper एक trade-off है, rule नहीं: unit test आसान और focused methods मिलते हैं; EF के features छुप सकते हैं और <code>IQueryable</code> बाहर leak हो सकता है।</li>
<li><b>CQRS</b>: लिखने (commands) और पढ़ने (queries) के लिए अलग models। इसके लिए दो databases <b>ज़रूरी नहीं</b>। जब reads और writes बहुत अलग हों तब फ़ायदा; सीधे CRUD के लिए overkill।</li>
<li><b>MediatR</b> commands/queries को in-process dispatch करने का एक तरीका है, ज़रूरत नहीं। छोटा hand-rolled dispatcher भी चलता है। MediatR 2025 में commercial edition बना (free Community tier के साथ), इसलिए इसकी मौजूदा licence terms देख लो।</li>
<li><b>Options pattern</b>: configuration section को class में bind करना। <code>IOptions&lt;T&gt;</code> एक बार पढ़ता है; <code>IOptionsSnapshot&lt;T&gt;</code> हर request पर दोबारा; <code>IOptionsMonitor&lt;T&gt;</code> बदलाव live देखता है। <code>ValidateOnStart</code> से गलत config startup पर ही fail हो जाता है।</li>
<li><b>DI lifetimes</b>: Transient, Scoped, Singleton (basics Day 8 में)। <b>Captive dependency</b> = लंबी उम्र वाली service छोटी उम्र वाली को पकड़े रखे। <code>ValidateScopes</code> singleton → scoped पकड़ता है (singleton → transient नहीं); <code>ValidateOnBuild</code> उन registrations को पकड़ता है जो बन ही नहीं सकतीं।</li>
<li><b>Background services</b> singleton होती हैं: हर काम के लिए <code>IServiceScopeFactory</code> से scope बनाओ।</li>
<li><b>TL angle</b>: buzzword नहीं, trade-off बताओ। "X दर्द की वजह से जोड़ा" बेहतर है "यह best practice है" से।</li>
</ul>`,
    hg: `<p>Aaj chaar topics hain jo har .NET Tech Lead interview mein aate hain: <b>Repository + Unit of Work</b>, <b>CQRS</b>, <b>Options pattern</b> aur <b>DI lifetimes</b>. Jab aap bata sako ki yeh <i>kaun si problem hal karta hai</i> aur <i>kab overkill hai</i>, to koi bhi mushkil nahi.</p>
<ul>
<li><b>EF Core ke saath Repository + Unit of Work</b>: <code>DbSet&lt;T&gt;</code> pehle se repository jaisa aur <code>DbContext</code> unit of work jaisa hai (Day 5, Day 7). Wrapper ek trade-off hai, rule nahi: unit test aasan aur focused methods milte hain; EF ke features chhup sakte hain aur <code>IQueryable</code> bahar leak ho sakta hai.</li>
<li><b>CQRS</b>: likhne (commands) aur padhne (queries) ke liye alag models. Iske liye do databases <b>zaroori nahi</b>. Jab reads aur writes bahut alag ho tab fayda; seedhe CRUD ke liye overkill.</li>
<li><b>MediatR</b> commands/queries ko in-process dispatch karne ka ek tareeka hai, zaroorat nahi. Chhota hand-rolled dispatcher bhi chalta hai. MediatR 2025 mein commercial edition bana (free Community tier ke saath), isliye uski maujooda licence terms dekh lo.</li>
<li><b>Options pattern</b>: configuration section ko class mein bind karna. <code>IOptions&lt;T&gt;</code> ek baar padhta hai; <code>IOptionsSnapshot&lt;T&gt;</code> har request par dobara; <code>IOptionsMonitor&lt;T&gt;</code> badlav live dekhta hai. <code>ValidateOnStart</code> se galat config startup par hi fail ho jaata hai.</li>
<li><b>DI lifetimes</b>: Transient, Scoped, Singleton (basics Day 8 mein). <b>Captive dependency</b> = lambi umar wali service chhoti umar wali ko pakde rakhe. <code>ValidateScopes</code> singleton → scoped pakadta hai (singleton → transient nahi); <code>ValidateOnBuild</code> un registrations ko pakadta hai jo ban hi nahi sakti.</li>
<li><b>Background services</b> singleton hoti hain: har kaam ke liye <code>IServiceScopeFactory</code> se scope banao.</li>
<li><b>TL angle</b>: buzzword nahi, trade-off batao. "X dard ki wajah se joda" behtar hai "yeh best practice hai" se.</li>
</ul>`
  },
  sections: [
    {
      id: "repo-uow-overview",
      depth: "short",
      title: {
        en: "Repository + Unit of Work: needed with EF Core?",
        hi: "Repository + Unit of Work: क्या EF Core के साथ ज़रूरी है?",
        hg: "Repository + Unit of Work: kya EF Core ke saath zaroori hai?"
      },
      body: {
        en: `<p><b>Analogy — kirana shop and the final bill:</b> the <b>repository</b> is the shelf-keeper: you say "bring me the rice" and you do not care where it is stored. The <b>unit of work</b> is the shopkeeper's final bill: he collects everything on the counter and rings up <i>one</i> bill, all or nothing.</p>
<ul>
<li><b>Repository</b>: looks like an in-memory collection of aggregates (<code>Add</code>, <code>GetById</code>, <code>Find</code>) and hides how data is stored.</li>
<li><b>Unit of Work</b>: tracks changes during one business operation and writes them together in one transaction.</li>
<li><b>EF Core already does both</b>: <code>DbSet&lt;T&gt;</code> ≈ repository, <code>DbContext</code> ≈ unit of work (<code>SaveChanges</code> = commit; Day 5, Day 7). Two repositories that receive the same scoped <code>DbContext</code> share one change tracker, so one <code>SaveChanges</code> saves both.</li>
<li><b>Reasons to still wrap</b>: unit tests without a database, one place for query rules used in many places, domain code that should not know EF (some DDD teams).</li>
<li><b>Costs of wrapping</b>: a thin generic <code>IRepository&lt;T&gt;</code> hides <code>Include</code>, projections and <code>ExecuteUpdate</code> (Day 6); returning <code>IQueryable</code> leaks EF into callers; every new query becomes another method.</li>
<li><b>Middle path</b>: inject <code>DbContext</code> directly in application services, or write small, <i>specific</i> repositories (<code>IOrderRepository.GetOpenOrdersFor(customerId)</code>) where a boundary helps. A <b>specification</b> is an object that describes one query rule so it can be reused.</li>
<li><b>When to use</b>: you need a clear data boundary, many callers share query rules, or the store may not be EF only. <b>When not</b>: simple CRUD on EF Core where the wrapper only forwards calls.</li>
</ul>`,
        hi: `<p><b>Analogy — kirana दुकान और आख़िरी बिल:</b> <b>repository</b> shelf वाला भाई है: आप कहते हो "चावल लाओ", कहाँ रखा है इससे मतलब नहीं। <b>unit of work</b> दुकानदार का आख़िरी बिल है: counter पर रखा सारा सामान जोड़कर <i>एक</i> बिल बनाता है, सब या कुछ नहीं।</p>
<ul>
<li><b>Repository</b>: aggregates के in-memory collection जैसा दिखता है (<code>Add</code>, <code>GetById</code>, <code>Find</code>) और data कैसे store होता है यह छुपाता है।</li>
<li><b>Unit of Work</b>: एक business operation के बदलाव track करता है और एक transaction में साथ लिखता है।</li>
<li><b>EF Core दोनों पहले से करता है</b>: <code>DbSet&lt;T&gt;</code> ≈ repository, <code>DbContext</code> ≈ unit of work (<code>SaveChanges</code> = commit; Day 5, Day 7)। एक ही scoped <code>DbContext</code> लेने वाली दो repositories एक change tracker share करती हैं, इसलिए एक <code>SaveChanges</code> दोनों सेव करता है।</li>
<li><b>फिर भी wrap करने के कारण</b>: database के बिना unit tests, कई जगह इस्तेमाल होने वाले query rules की एक जगह, domain code जिसे EF का पता न हो (कुछ DDD teams)।</li>
<li><b>Wrap की कीमत</b>: पतली generic <code>IRepository&lt;T&gt;</code> <code>Include</code>, projections और <code>ExecuteUpdate</code> (Day 6) छुपा देती है; <code>IQueryable</code> लौटाने से EF callers तक leak होता है; हर नई query एक नया method बन जाती है।</li>
<li><b>बीच का रास्ता</b>: application services में सीधे <code>DbContext</code> inject करो, या जहाँ boundary चाहिए वहाँ छोटी, <i>specific</i> repositories (<code>IOrderRepository.GetOpenOrdersFor(customerId)</code>) बनाओ। <b>Specification</b> = एक query rule बताने वाला object जिसे दोबारा use कर सकते हैं।</li>
<li><b>कब use करें</b>: साफ़ data boundary चाहिए, कई callers query rules share करते हैं, या store सिर्फ़ EF न हो। <b>कब नहीं</b>: EF Core पर सीधा CRUD जहाँ wrapper सिर्फ़ calls आगे भेजता है।</li>
</ul>`,
        hg: `<p><b>Analogy — kirana dukaan aur aakhri bill:</b> <b>repository</b> shelf wala bhai hai: aap kehte ho "chawal lao", kahan rakha hai isse matlab nahi. <b>unit of work</b> dukaandaar ka aakhri bill hai: counter par rakha saara saamaan jodkar <i>ek</i> bill banata hai, sab ya kuch nahi.</p>
<ul>
<li><b>Repository</b>: aggregates ke in-memory collection jaisa dikhta hai (<code>Add</code>, <code>GetById</code>, <code>Find</code>) aur data kaise store hota hai yeh chhupata hai.</li>
<li><b>Unit of Work</b>: ek business operation ke badlav track karta hai aur ek transaction mein saath likhta hai.</li>
<li><b>EF Core dono pehle se karta hai</b>: <code>DbSet&lt;T&gt;</code> ≈ repository, <code>DbContext</code> ≈ unit of work (<code>SaveChanges</code> = commit; Day 5, Day 7). Ek hi scoped <code>DbContext</code> lene wali do repositories ek change tracker share karti hain, isliye ek <code>SaveChanges</code> dono save karta hai.</li>
<li><b>Phir bhi wrap karne ke kaaran</b>: database ke bina unit tests, kai jagah use hone wale query rules ki ek jagah, domain code jise EF ka pata na ho (kuch DDD teams).</li>
<li><b>Wrap ki keemat</b>: patli generic <code>IRepository&lt;T&gt;</code> <code>Include</code>, projections aur <code>ExecuteUpdate</code> (Day 6) chhupa deti hai; <code>IQueryable</code> lautane se EF callers tak leak hota hai; har nayi query ek naya method ban jaati hai.</li>
<li><b>Beech ka raasta</b>: application services mein seedha <code>DbContext</code> inject karo, ya jahan boundary chahiye wahan chhoti, <i>specific</i> repositories (<code>IOrderRepository.GetOpenOrdersFor(customerId)</code>) banao. <b>Specification</b> = ek query rule batane wala object jise dobara use kar sakte hain.</li>
<li><b>Kab use karein</b>: saaf data boundary chahiye, kai callers query rules share karte hain, ya store sirf EF na ho. <b>Kab nahi</b>: EF Core par seedha CRUD jahan wrapper sirf calls aage bhejta hai.</li>
</ul>`
      }
    },
    {
      id: "cqrs-overview",
      depth: "short",
      title: {
        en: "CQRS and MediatR",
        hi: "CQRS और MediatR",
        hg: "CQRS aur MediatR"
      },
      body: {
        en: `<p><b>Analogy — restaurant order counter vs menu board:</b> placing an order (write) goes through a careful process: the kitchen checks stock, cooks, bills. Reading the menu board (read) must be quick and shaped for the customer. Nobody opens the kitchen's stock register to show the menu.</p>
<ul>
<li><b>CQRS</b> (Command Query Responsibility Segregation): <b>commands</b> change state and return little; <b>queries</b> return data and change nothing. Each side can have its own model.</li>
<li><b>Levels</b>: (1) separate command/query classes, one project, one database; (2) a separate read model, e.g. queries project straight to DTOs with <code>AsNoTracking</code> or SQL; (3) a separate read database kept in sync (eventual consistency). Most teams stop at 1 or 2. <b>It does not need two databases.</b></li>
<li><b>Pays off when</b>: reads and writes differ in shape, scale or rules; complex rules on writes but many read screens; the team wants small handlers.</li>
<li><b>Overkill when</b>: plain CRUD, a small team, or one model fits both. You add classes without removing pain.</li>
<li><b>MediatR</b>: a library that sends a request to one handler (<code>IRequest&lt;T&gt;</code>, <code>IRequestHandler</code>) and runs <b>pipeline behaviours</b> around it for cross-cutting concerns (logging, validation, transactions). It is the Mediator idea from Day 10, in-process only.</li>
<li><b>Licence</b>: MediatR (and AutoMapper) moved to a commercial licence model in 2025 under Lucky Penny Software, with a free Community edition below certain revenue limits. Check the current licence terms before adopting it in a company.</li>
<li><b>Alternative</b>: a tiny dispatcher, or direct injection of handlers (<code>IPlaceOrderHandler</code>) with decorators for cross-cutting concerns. Same structure, no dependency.</li>
<li><b>When to use</b>: many use-cases, a team that wants one class per use-case and shared behaviours. <b>When not</b>: a few endpoints, or when the "send" indirection makes debugging harder than a method call.</li>
</ul>`,
        hi: `<p><b>Analogy — restaurant का order counter बनाम menu board:</b> order देना (write) सावधान process से गुज़रता है: kitchen stock देखती है, पकाती है, bill बनाती है। Menu board पढ़ना (read) तेज़ और customer के हिसाब का होना चाहिए। menu दिखाने के लिए कोई kitchen का stock register नहीं खोलता।</p>
<ul>
<li><b>CQRS</b> (Command Query Responsibility Segregation): <b>commands</b> state बदलते हैं और कम लौटाते हैं; <b>queries</b> data लौटाती हैं और कुछ नहीं बदलतीं। हर तरफ़ का अपना model हो सकता है।</li>
<li><b>Levels</b>: (1) अलग command/query classes, एक project, एक database; (2) अलग read model, जैसे queries <code>AsNoTracking</code> या SQL से सीधे DTOs बनाएँ; (3) sync रखा गया अलग read database (eventual consistency)। ज़्यादातर teams 1 या 2 पर रुकती हैं। <b>दो databases ज़रूरी नहीं।</b></li>
<li><b>कब फ़ायदा</b>: reads और writes की shape, scale या rules अलग हों; writes पर जटिल rules पर पढ़ने की बहुत screens; team को छोटे handlers चाहिए।</li>
<li><b>कब overkill</b>: सीधा CRUD, छोटी team, या एक model दोनों के लिए काफ़ी। दर्द घटाए बिना classes बढ़ती हैं।</li>
<li><b>MediatR</b>: ऐसी library जो request को एक handler तक भेजती है (<code>IRequest&lt;T&gt;</code>, <code>IRequestHandler</code>) और उसके चारों ओर cross-cutting concerns (logging, validation, transactions) के लिए <b>pipeline behaviours</b> चलाती है। यह Day 10 वाला Mediator idea है, सिर्फ़ in-process।</li>
<li><b>Licence</b>: MediatR (और AutoMapper) 2025 में Lucky Penny Software के तहत commercial licence model पर गए, कुछ revenue सीमा से नीचे free Community edition के साथ। company में अपनाने से पहले मौजूदा licence terms देखो।</li>
<li><b>विकल्प</b>: छोटा dispatcher, या handlers का सीधा injection (<code>IPlaceOrderHandler</code>) और cross-cutting के लिए decorators। वही structure, कोई dependency नहीं।</li>
<li><b>कब use करें</b>: कई use-cases, team को one-class-per-use-case और साझा behaviours चाहिए। <b>कब नहीं</b>: कुछ ही endpoints, या "send" की indirection से debugging method call से मुश्किल हो।</li>
</ul>`,
        hg: `<p><b>Analogy — restaurant ka order counter vs menu board:</b> order dena (write) saavdhan process se guzarta hai: kitchen stock dekhti hai, pakati hai, bill banati hai. Menu board padhna (read) tez aur customer ke hisaab ka hona chahiye. Menu dikhane ke liye koi kitchen ka stock register nahi kholta.</p>
<ul>
<li><b>CQRS</b> (Command Query Responsibility Segregation): <b>commands</b> state badalte hain aur kam lautate hain; <b>queries</b> data lautati hain aur kuch nahi badalti. Har taraf ka apna model ho sakta hai.</li>
<li><b>Levels</b>: (1) alag command/query classes, ek project, ek database; (2) alag read model, jaise queries <code>AsNoTracking</code> ya SQL se seedhe DTOs banayein; (3) sync rakha gaya alag read database (eventual consistency). Zyadatar teams 1 ya 2 par rukti hain. <b>Do databases zaroori nahi.</b></li>
<li><b>Kab fayda</b>: reads aur writes ki shape, scale ya rules alag ho; writes par jatil rules par padhne ki bahut screens; team ko chhote handlers chahiye.</li>
<li><b>Kab overkill</b>: seedha CRUD, chhoti team, ya ek model dono ke liye kaafi. Dard ghatae bina classes badhti hain.</li>
<li><b>MediatR</b>: aisi library jo request ko ek handler tak bhejti hai (<code>IRequest&lt;T&gt;</code>, <code>IRequestHandler</code>) aur uske charon taraf cross-cutting concerns (logging, validation, transactions) ke liye <b>pipeline behaviours</b> chalati hai. Yeh Day 10 wala Mediator idea hai, sirf in-process.</li>
<li><b>Licence</b>: MediatR (aur AutoMapper) 2025 mein Lucky Penny Software ke tahat commercial licence model par gaye, kuch revenue seema se neeche free Community edition ke saath. Company mein apnane se pehle maujooda licence terms dekho.</li>
<li><b>Vikalp</b>: chhota dispatcher, ya handlers ka seedha injection (<code>IPlaceOrderHandler</code>) aur cross-cutting ke liye decorators. Wahi structure, koi dependency nahi.</li>
<li><b>Kab use karein</b>: kai use-cases, team ko one-class-per-use-case aur saajhe behaviours chahiye. <b>Kab nahi</b>: kuch hi endpoints, ya "send" ki indirection se debugging method call se mushkil ho.</li>
</ul>`
      }
    },
    {
      id: "options-overview",
      depth: "short",
      title: {
        en: "Options pattern: IOptions, IOptionsSnapshot, IOptionsMonitor",
        hi: "Options pattern: IOptions, IOptionsSnapshot, IOptionsMonitor (settings को class में बाँधना)",
        hg: "Options pattern: IOptions, IOptionsSnapshot, IOptionsMonitor (settings ko class mein baandhna)"
      },
      body: {
        en: `<p><b>Analogy — a notice board at your housing society:</b> <code>IOptions</code> is the printed rule book you got on joining (read once, never changes). <code>IOptionsSnapshot</code> is a fresh copy of the notice board handed to you each time you enter the building (per request). <code>IOptionsMonitor</code> is a WhatsApp group that pings you the moment a notice changes.</p>
<ul>
<li><b>Options pattern</b>: bind a configuration section to a strongly typed class (<code>services.Configure&lt;MailOptions&gt;(config.GetSection("Mail"))</code>) and inject it. No magic strings in your code.</li>
<li><code>IOptions&lt;T&gt;</code>: <b>singleton</b>, value computed once; later configuration changes are not seen. Simplest; the default choice.</li>
<li><code>IOptionsSnapshot&lt;T&gt;</code>: <b>scoped</b>, recomputed once per scope (request), so a reload shows up on the <i>next</i> request. Cannot be injected into singletons.</li>
<li><code>IOptionsMonitor&lt;T&gt;</code>: <b>singleton</b> with <code>CurrentValue</code> always up to date and <code>OnChange</code> callbacks. Use it in singletons and background services that must react to changes.</li>
<li><b>Named options</b>: several configurations of one class (<code>Configure&lt;T&gt;("primary", ...)</code>, read with <code>IOptionsMonitor&lt;T&gt;.Get("primary")</code>). Example: two SMTP servers.</li>
<li><b>Validation</b>: <code>ValidateDataAnnotations()</code> (attributes), <code>Validate(predicate, message)</code>, or an <code>IValidateOptions&lt;T&gt;</code> class. Add <code>ValidateOnStart()</code> so a bad config stops the app at startup, not on the first request. (Since .NET 8 a source generator, <code>[OptionsValidator]</code>, can also write the validator for you without reflection.)</li>
<li><b>Reload needs a source that can reload</b>: JSON files with <code>reloadOnChange</code> do; environment variables do not change while the process runs.</li>
<li><b>When to use</b>: any group of related settings. <b>When not</b>: one value read once at startup (read it from <code>IConfiguration</code>), and avoid injecting the whole <code>IConfiguration</code> across the app.</li>
</ul>`,
        hi: `<p><b>Analogy — housing society का notice board:</b> <code>IOptions</code> join करते वक़्त मिली छपी rule book है (एक बार पढ़ी, कभी नहीं बदलती)। <code>IOptionsSnapshot</code> हर बार building में घुसने पर मिली notice board की नई copy है (per request)। <code>IOptionsMonitor</code> WhatsApp group है जो notice बदलते ही ping करता है।</p>
<ul>
<li><b>Options pattern</b>: configuration section को strongly typed class में bind करो (<code>services.Configure&lt;MailOptions&gt;(config.GetSection("Mail"))</code>) और inject करो। code में magic strings नहीं।</li>
<li><code>IOptions&lt;T&gt;</code>: <b>singleton</b>, value एक बार बनती है; बाद के configuration बदलाव नहीं दिखते। सबसे आसान; default choice।</li>
<li><code>IOptionsSnapshot&lt;T&gt;</code>: <b>scoped</b>, हर scope (request) में एक बार दोबारा बनता है, इसलिए reload <i>अगली</i> request में दिखता है। Singletons में inject नहीं हो सकता।</li>
<li><code>IOptionsMonitor&lt;T&gt;</code>: <b>singleton</b>, <code>CurrentValue</code> हमेशा ताज़ा और <code>OnChange</code> callbacks। उन singletons और background services में use करो जिन्हें बदलाव पर react करना है।</li>
<li><b>Named options</b>: एक class की कई configurations (<code>Configure&lt;T&gt;("primary", ...)</code>, पढ़ना <code>IOptionsMonitor&lt;T&gt;.Get("primary")</code> से)। उदाहरण: दो SMTP servers।</li>
<li><b>Validation</b>: <code>ValidateDataAnnotations()</code> (attributes), <code>Validate(predicate, message)</code>, या <code>IValidateOptions&lt;T&gt;</code> class। <code>ValidateOnStart()</code> जोड़ो ताकि गलत config पर app startup पर ही रुके, पहली request पर नहीं। (.NET 8 से एक source generator, <code>[OptionsValidator]</code>, भी बिना reflection के validator लिख सकता है।)</li>
<li><b>Reload के लिए ऐसा source चाहिए जो reload कर सके</b>: <code>reloadOnChange</code> वाली JSON files करती हैं; environment variables process चलते वक़्त नहीं बदलते।</li>
<li><b>कब use करें</b>: जुड़ी हुई settings का कोई भी group। <b>कब नहीं</b>: startup पर एक बार पढ़ी जाने वाली एक value (<code>IConfiguration</code> से पढ़ लो), और पूरा <code>IConfiguration</code> पूरे app में inject करने से बचो।</li>
</ul>`,
        hg: `<p><b>Analogy — housing society ka notice board:</b> <code>IOptions</code> join karte waqt mili chhapi rule book hai (ek baar padhi, kabhi nahi badalti). <code>IOptionsSnapshot</code> har baar building mein ghusne par mili notice board ki nayi copy hai (per request). <code>IOptionsMonitor</code> WhatsApp group hai jo notice badalte hi ping karta hai.</p>
<ul>
<li><b>Options pattern</b>: configuration section ko strongly typed class mein bind karo (<code>services.Configure&lt;MailOptions&gt;(config.GetSection("Mail"))</code>) aur inject karo. Code mein magic strings nahi.</li>
<li><code>IOptions&lt;T&gt;</code>: <b>singleton</b>, value ek baar banti hai; baad ke configuration badlav nahi dikhte. Sabse aasan; default choice.</li>
<li><code>IOptionsSnapshot&lt;T&gt;</code>: <b>scoped</b>, har scope (request) mein ek baar dobara banta hai, isliye reload <i>agli</i> request mein dikhta hai. Singletons mein inject nahi ho sakta.</li>
<li><code>IOptionsMonitor&lt;T&gt;</code>: <b>singleton</b>, <code>CurrentValue</code> hamesha taaza aur <code>OnChange</code> callbacks. Un singletons aur background services mein use karo jinhe badlav par react karna hai.</li>
<li><b>Named options</b>: ek class ki kai configurations (<code>Configure&lt;T&gt;("primary", ...)</code>, padhna <code>IOptionsMonitor&lt;T&gt;.Get("primary")</code> se). Udaharan: do SMTP servers.</li>
<li><b>Validation</b>: <code>ValidateDataAnnotations()</code> (attributes), <code>Validate(predicate, message)</code>, ya <code>IValidateOptions&lt;T&gt;</code> class. <code>ValidateOnStart()</code> jodo taaki galat config par app startup par hi ruke, pehli request par nahi. (.NET 8 se ek source generator, <code>[OptionsValidator]</code>, bhi bina reflection ke validator likh sakta hai.)</li>
<li><b>Reload ke liye aisa source chahiye jo reload kar sake</b>: <code>reloadOnChange</code> wali JSON files karti hain; environment variables process chalte waqt nahi badalte.</li>
<li><b>Kab use karein</b>: judi hui settings ka koi bhi group. <b>Kab nahi</b>: startup par ek baar padhi jaane wali ek value (<code>IConfiguration</code> se padh lo), aur poora <code>IConfiguration</code> poore app mein inject karne se bacho.</li>
</ul>`
      }
    },
    {
      id: "di-lifetimes-overview",
      depth: "short",
      title: {
        en: "DI lifetimes, captive dependency, ValidateScopes and ValidateOnBuild",
        hi: "DI lifetimes, captive dependency, ValidateScopes और ValidateOnBuild",
        hg: "DI lifetimes, captive dependency, ValidateScopes aur ValidateOnBuild"
      },
      body: {
        en: `<p><b>Analogy — rented flat vs hotel room vs the building's generator:</b> a <b>Transient</b> is a disposable cup (new each time). A <b>Scoped</b> service is your hotel room for one stay (same room all through the stay, a new room for the next guest). A <b>Singleton</b> is the building's generator: one for everyone, always on. A <b>captive dependency</b> is the generator holding a guest's room key forever.</p>
<ul>
<li><b>Basics</b> (Day 8 has the lifetime Q&amp;A and Day 9 has keyed services): Transient = new per resolve, Scoped = one per scope (one web request), Singleton = one per app.</li>
<li><b>Rule</b>: depend on the <b>same or longer</b> lifetime. Singleton → Scoped/Transient is a captive dependency: the short-lived object lives as long as the singleton (stale data, thread-safety bugs, a <code>DbContext</code> that never dies).</li>
<li><code>ValidateScopes</code>: checks at <b>resolve time</b> that (a) a scoped service is not resolved from the root provider and (b) a singleton does not consume a scoped one. Error: <i>"Cannot resolve scoped service ... from root provider"</i> / <i>"Cannot consume scoped service ... from singleton ..."</i>.</li>
<li><code>ValidateOnBuild</code>: at <b>build time</b> checks that every registered service can be constructed (missing dependency = error at startup instead of first use). On its own it does <b>not</b> report a captive dependency; with <code>ValidateScopes</code> also on, it reports captive dependencies at build too.</li>
<li><b>Defaults</b>: the generic host and <code>WebApplication.CreateBuilder</code> turn both on in the <b>Development</b> environment only. A provider you create yourself with <code>BuildServiceProvider()</code> has both off.</li>
<li><b>Background services</b> (<code>BackgroundService</code>, hosted services) are singletons: inject <code>IServiceScopeFactory</code> and call <code>CreateAsyncScope()</code> per unit of work (Day 7 shows it with <code>DbContext</code>).</li>
<li><b>When to use scoped</b>: per-request state, <code>DbContext</code>. <b>When not</b>: a "scoped" service that must be shared with a singleton, which signals a design problem; fix with a factory or a scope, not by changing everything to singleton.</li>
</ul>`,
        hi: `<p><b>Analogy — किराये का flat बनाम hotel room बनाम building का generator:</b> <b>Transient</b> disposable कप है (हर बार नया)। <b>Scoped</b> service आपका hotel room है (पूरे stay में वही room, अगले guest को नया)। <b>Singleton</b> building का generator है: सबके लिए एक, हमेशा चालू। <b>Captive dependency</b> यानी generator ने किसी guest के कमरे की चाबी हमेशा के लिए पकड़ ली।</p>
<ul>
<li><b>Basics</b> (Day 8 में lifetime Q&amp;A और Day 9 में keyed services): Transient = हर resolve पर नया, Scoped = हर scope (एक web request) में एक, Singleton = पूरे app में एक।</li>
<li><b>Rule</b>: <b>बराबर या ज़्यादा</b> उम्र वाली service पर depend करो। Singleton → Scoped/Transient captive dependency है: छोटी उम्र वाला object singleton जितना जीता है (पुराना data, thread-safety bugs, कभी न मरने वाला <code>DbContext</code>)।</li>
<li><code>ValidateScopes</code>: <b>resolve के वक़्त</b> जाँचता है कि (a) scoped service root provider से resolve न हो और (b) singleton scoped service consume न करे। Error: <i>"Cannot resolve scoped service ... from root provider"</i> / <i>"Cannot consume scoped service ... from singleton ..."</i>।</li>
<li><code>ValidateOnBuild</code>: <b>build के वक़्त</b> जाँचता है कि हर registered service बन सकती है (dependency गायब = पहले इस्तेमाल की जगह startup पर error)। अकेला यह captive dependency report <b>नहीं</b> करता; <code>ValidateScopes</code> भी चालू हो तो build पर captive dependency भी पकड़ता है।</li>
<li><b>Defaults</b>: generic host और <code>WebApplication.CreateBuilder</code> दोनों को सिर्फ़ <b>Development</b> environment में चालू करते हैं। खुद <code>BuildServiceProvider()</code> से बनाए provider में दोनों बंद होते हैं।</li>
<li><b>Background services</b> (<code>BackgroundService</code>, hosted services) singleton हैं: <code>IServiceScopeFactory</code> inject करो और हर काम के लिए <code>CreateAsyncScope()</code> बुलाओ (Day 7 में <code>DbContext</code> के साथ दिखाया है)।</li>
<li><b>Scoped कब use करें</b>: per-request state, <code>DbContext</code>। <b>कब नहीं</b>: ऐसी "scoped" service जिसे singleton के साथ share करना है — यह design problem का संकेत है; factory या scope से सुलझाओ, सब कुछ singleton करके नहीं।</li>
</ul>`,
        hg: `<p><b>Analogy — kiraye ka flat vs hotel room vs building ka generator:</b> <b>Transient</b> disposable cup hai (har baar naya). <b>Scoped</b> service aapka hotel room hai (poore stay mein wahi room, agle guest ko naya). <b>Singleton</b> building ka generator hai: sabke liye ek, hamesha chaalu. <b>Captive dependency</b> yaani generator ne kisi guest ke kamre ki chaabi hamesha ke liye pakad li.</p>
<ul>
<li><b>Basics</b> (Day 8 mein lifetime Q&amp;A aur Day 9 mein keyed services): Transient = har resolve par naya, Scoped = har scope (ek web request) mein ek, Singleton = poore app mein ek.</li>
<li><b>Rule</b>: <b>barabar ya zyada</b> umar wali service par depend karo. Singleton → Scoped/Transient captive dependency hai: chhoti umar wala object singleton jitna jeeta hai (purana data, thread-safety bugs, kabhi na marne wala <code>DbContext</code>).</li>
<li><code>ValidateScopes</code>: <b>resolve ke waqt</b> jaanchta hai ki (a) scoped service root provider se resolve na ho aur (b) singleton scoped service consume na kare. Error: <i>"Cannot resolve scoped service ... from root provider"</i> / <i>"Cannot consume scoped service ... from singleton ..."</i>.</li>
<li><code>ValidateOnBuild</code>: <b>build ke waqt</b> jaanchta hai ki har registered service ban sakti hai (dependency gayab = pehle istemaal ki jagah startup par error). Akela yeh captive dependency report <b>nahi</b> karta; <code>ValidateScopes</code> bhi chaalu ho to build par captive dependency bhi pakadta hai.</li>
<li><b>Defaults</b>: generic host aur <code>WebApplication.CreateBuilder</code> dono ko sirf <b>Development</b> environment mein chaalu karte hain. Khud <code>BuildServiceProvider()</code> se banaye provider mein dono band hote hain.</li>
<li><b>Background services</b> (<code>BackgroundService</code>, hosted services) singleton hain: <code>IServiceScopeFactory</code> inject karo aur har kaam ke liye <code>CreateAsyncScope()</code> bulao (Day 7 mein <code>DbContext</code> ke saath dikhaya hai).</li>
<li><b>Scoped kab use karein</b>: per-request state, <code>DbContext</code>. <b>Kab nahi</b>: aisi "scoped" service jise singleton ke saath share karna hai — yeh design problem ka sanket hai; factory ya scope se suljhao, sab kuch singleton karke nahi.</li>
</ul>`
      }
    },
    {
      id: "repo-uow-in-code",
      depth: "detailed",
      title: {
        en: "Repository + Unit of Work in code: DbContext directly, or a focused repository",
        hi: "Code में Repository + Unit of Work: सीधे DbContext, या focused repository",
        hg: "Code mein Repository + Unit of Work: seedha DbContext, ya focused repository"
      },
      body: {
        en: `<p><b>Analogy — ordering at a dhaba:</b> you can walk into the kitchen and pick ingredients yourself (use <code>DbContext</code> directly), or give your order to the waiter who knows the menu (a repository with specific methods). The waiter helps when the kitchen is big and rules are many; for a tiny dhaba the extra waiter just repeats what you say.</p>
<ul>
<li><b>Option A</b>: the application service takes <code>DbContext</code>. The change tracker is the unit of work: change a product, add an order, call <code>SaveChangesAsync</code> once. EF wraps that save in one transaction.</li>
<li><b>Option B</b>: a small repository with <i>specific</i>, named methods. Return a projection or a materialised list, not <code>IQueryable</code>, so callers cannot add accidental <code>Include</code>s or build queries that run in the wrong place.</li>
<li><b>Returning <code>IQueryable&lt;T&gt;</code></b> keeps flexibility (callers add <code>Where</code>, paging; the SQL is composed once; see puzzle) but leaks EF behaviour: deferred execution, provider limits, and a query that runs after the context is disposed fails. Returning <code>List&lt;T&gt;</code> hides that but loads all rows before in-memory filtering (puzzle). Pick one per boundary, deliberately.</li>
<li><b>Specification</b>: an object holding an <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> (plus optional includes/order). Keep it an <i>expression</i> (Day 4) so EF translates it to SQL.</li>
<li><b>Unit of Work interface</b> (<code>IUnitOfWork.SaveChanges()</code> that just calls <code>DbContext.SaveChanges</code>) adds little over <code>DbContext</code>. It helps only when repositories must share a commit and you really cannot expose <code>DbContext</code>. Repositories must receive the <b>same scoped</b> context for that to work.</li>
<li><b>Testing</b>: mocking <code>DbSet</code> is fragile and rarely matches real SQL translation. Test query code against the real engine (for example SQL Server in a container via Testcontainers; SQLite differs, see Day 7); mock the repository interface in service tests.</li>
<li><b>When to use</b>: a clear data boundary, query rules shared by many callers, services that must be tested without a database. <b>When not</b>: one-to-one wrappers over <code>DbSet</code> (<code>GetAll</code>, <code>Add</code>, <code>Remove</code>) that add a file per entity and nothing else.</li>
</ul>`,
        hi: `<p><b>Analogy — dhaba में order:</b> आप खुद kitchen में जाकर सामान उठा सकते हो (सीधे <code>DbContext</code>), या menu जानने वाले waiter को order दे सकते हो (specific methods वाली repository)। kitchen बड़ी और rules ज़्यादा हों तो waiter काम आता है; छोटे dhaba में extra waiter बस आपकी बात दोहराता है।</p>
<ul>
<li><b>Option A</b>: application service <code>DbContext</code> लेती है। change tracker ही unit of work है: product बदलो, order जोड़ो, एक बार <code>SaveChangesAsync</code>। EF उस save को एक transaction में रखता है।</li>
<li><b>Option B</b>: <i>specific</i>, नाम वाले methods की छोटी repository। <code>IQueryable</code> नहीं, projection या materialised list लौटाओ, ताकि callers गलती से <code>Include</code> न जोड़ें या ऐसी query न बनाएँ जो गलत जगह चले।</li>
<li><b><code>IQueryable&lt;T&gt;</code> लौटाने</b> से flexibility रहती है (callers <code>Where</code>, paging जोड़ते हैं; SQL एक बार बनती है; puzzle देखो) पर EF का व्यवहार leak होता है: deferred execution, provider की सीमाएँ, और context dispose होने के बाद चली query fail होती है। <code>List&lt;T&gt;</code> लौटाने से यह छुपता है पर in-memory filter से पहले सारी rows load होती हैं (puzzle)। हर boundary पर सोच-समझकर एक चुनो।</li>
<li><b>Specification</b>: <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> रखने वाला object (साथ में optional includes/order)। इसे <i>expression</i> ही रखो (Day 4) ताकि EF इसे SQL में बदल सके।</li>
<li><b>Unit of Work interface</b> (<code>IUnitOfWork.SaveChanges()</code> जो बस <code>DbContext.SaveChanges</code> बुलाए) <code>DbContext</code> के ऊपर बहुत कम जोड़ता है। यह तभी काम का है जब repositories को एक commit share करना हो और <code>DbContext</code> सामने न रख सकें। इसके लिए repositories को <b>वही scoped</b> context मिलना चाहिए।</li>
<li><b>Testing</b>: <code>DbSet</code> को mock करना नाज़ुक है और असली SQL translation से कम ही मेल खाता है। Query code को असली engine पर test करो (जैसे Testcontainers से container में SQL Server; SQLite अलग है, Day 7 देखो); service tests में repository interface mock करो।</li>
<li><b>कब use करें</b>: साफ़ data boundary, कई callers के साझा query rules, बिना database test होने वाली services। <b>कब नहीं</b>: <code>DbSet</code> के एक-एक wrapper (<code>GetAll</code>, <code>Add</code>, <code>Remove</code>) जो हर entity पर एक file जोड़ें और कुछ नहीं।</li>
</ul>`,
        hg: `<p><b>Analogy — dhaba mein order:</b> aap khud kitchen mein jaakar saamaan utha sakte ho (seedha <code>DbContext</code>), ya menu jaanne wale waiter ko order de sakte ho (specific methods wali repository). Kitchen badi aur rules zyada ho to waiter kaam aata hai; chhote dhaba mein extra waiter bas aapki baat dohrata hai.</p>
<ul>
<li><b>Option A</b>: application service <code>DbContext</code> leti hai. Change tracker hi unit of work hai: product badlo, order jodo, ek baar <code>SaveChangesAsync</code>. EF us save ko ek transaction mein rakhta hai.</li>
<li><b>Option B</b>: <i>specific</i>, naam wale methods ki chhoti repository. <code>IQueryable</code> nahi, projection ya materialised list lautao, taaki callers galti se <code>Include</code> na jodein ya aisi query na banayein jo galat jagah chale.</li>
<li><b><code>IQueryable&lt;T&gt;</code> lautane</b> se flexibility rehti hai (callers <code>Where</code>, paging jodte hain; SQL ek baar banti hai; puzzle dekho) par EF ka vyavhaar leak hota hai: deferred execution, provider ki seemayein, aur context dispose hone ke baad chali query fail hoti hai. <code>List&lt;T&gt;</code> lautane se yeh chhupta hai par in-memory filter se pehle saari rows load hoti hain (puzzle). Har boundary par soch-samajhkar ek chuno.</li>
<li><b>Specification</b>: <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> rakhne wala object (saath mein optional includes/order). Ise <i>expression</i> hi rakho (Day 4) taaki EF ise SQL mein badal sake.</li>
<li><b>Unit of Work interface</b> (<code>IUnitOfWork.SaveChanges()</code> jo bas <code>DbContext.SaveChanges</code> bulaye) <code>DbContext</code> ke upar bahut kam jodta hai. Yeh tabhi kaam ka hai jab repositories ko ek commit share karna ho aur <code>DbContext</code> saamne na rakh sakein. Iske liye repositories ko <b>wahi scoped</b> context milna chahiye.</li>
<li><b>Testing</b>: <code>DbSet</code> ko mock karna nazuk hai aur asli SQL translation se kam hi mel khata hai. Query code ko asli engine par test karo (jaise Testcontainers se container mein SQL Server; SQLite alag hai, Day 7 dekho); service tests mein repository interface mock karo.</li>
<li><b>Kab use karein</b>: saaf data boundary, kai callers ke saajhe query rules, bina database test hone wali services. <b>Kab nahi</b>: <code>DbSet</code> ke ek-ek wrapper (<code>GetAll</code>, <code>Add</code>, <code>Remove</code>) jo har entity par ek file jodein aur kuch nahi.</li>
</ul>`
      },
      code: [
        {
          caption: {
            en: "Option A: DbContext as the unit of work. Option B: a focused repository with a specification. One SaveChanges commits the order and the stock change together.",
            hi: "Option A: DbContext ही unit of work। Option B: specification वाली focused repository। एक SaveChanges order और stock बदलाव साथ commit करता है।",
            hg: "Option A: DbContext hi unit of work. Option B: specification wali focused repository. Ek SaveChanges order aur stock badlav saath commit karta hai."
          },
          check: "compile",
          packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
          src: `using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

public class Product { public int Id { get; set; } public string Name { get; set; } = ""; public int Stock { get; set; } }
public class Order { public int Id { get; set; } public int ProductId { get; set; } public int Quantity { get; set; } }

public class ShopDb(DbContextOptions<ShopDb> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Order> Orders => Set<Order>();
}

// Option A: the application service uses DbContext directly (DbContext = unit of work).
public class OrderService(ShopDb db)
{
    public async Task PlaceAsync(int productId, int quantity, CancellationToken ct)
    {
        var product = await db.Products.SingleAsync(p => p.Id == productId, ct);
        product.Stock -= quantity;
        db.Orders.Add(new Order { ProductId = productId, Quantity = quantity });
        await db.SaveChangesAsync(ct); // one transaction: stock change + new order
    }
}

// Option B: a small repository with specific methods. It returns a DTO list, not IQueryable.
public record ProductSummary(int Id, string Name, int Stock);

public class Specification<T>(Expression<Func<T, bool>> criteria)
{
    public Expression<Func<T, bool>> Criteria { get; } = criteria;
}

public interface IProductRepository
{
    Task<List<ProductSummary>> FindAsync(Specification<Product> spec, CancellationToken ct);
}

public class ProductRepository(ShopDb db) : IProductRepository
{
    public Task<List<ProductSummary>> FindAsync(Specification<Product> spec, CancellationToken ct) =>
        db.Products.AsNoTracking()
            .Where(spec.Criteria)                       // still translated to SQL
            .Select(p => new ProductSummary(p.Id, p.Name, p.Stock))
            .ToListAsync(ct);
}

public static class Specs
{
    public static Specification<Product> LowStock(int threshold) => new(p => p.Stock < threshold);
}`
        }
      ]
    },
    {
      id: "cqrs-in-code",
      depth: "detailed",
      title: {
        en: "CQRS in code: hand-rolled dispatcher, behaviours, and MediatR",
        hi: "Code में CQRS: hand-rolled dispatcher, behaviours और MediatR",
        hg: "Code mein CQRS: hand-rolled dispatcher, behaviours aur MediatR"
      },
      body: {
        en: `<p><b>Analogy — a bank counter with a token system:</b> you take a token for "deposit" (a command) or "balance enquiry" (a query). The token routes you to the right counter. Before every deposit the clerk checks your ID (a pipeline behaviour) without each counter writing that check again.</p>
<ul>
<li><b>Command</b>: <code>PlaceOrder</code>, a request to change state, handled by exactly one handler. <b>Query</b>: <code>CountOrders</code>, returns data, no side effects. Name commands in the imperative; queries as questions.</li>
<li><b>The core idea needs no library</b>: <code>ICommandHandler&lt;TCommand,TResult&gt;</code> and <code>IQueryHandler&lt;TQuery,TResult&gt;</code> registered in DI, and a dispatcher that resolves the handler (the snippet below runs). Controllers can also inject the handler directly and skip the dispatcher.</li>
<li><b>Cross-cutting concerns</b> (logging, validation, transaction, retries): wrap handlers with a <b>decorator</b> (Day 10). MediatR calls these <b>pipeline behaviours</b> (<code>IPipelineBehavior&lt;TRequest,TResponse&gt;</code>), applied to all requests from one registration.</li>
<li><b>MediatR shape</b>: <code>record PlaceOrder(...) : IRequest&lt;int&gt;</code>, <code>IRequestHandler&lt;PlaceOrder,int&gt;</code>, <code>services.AddMediatR(...)</code>, <code>await mediator.Send(new PlaceOrder(...))</code>. Notifications (<code>INotification</code>) publish one event to many handlers.</li>
<li><b>Traps</b>: handlers calling other handlers (hidden call graph); queries that change state; one giant "god" pipeline behaviour; using <code>Send</code> indirection for a 3-endpoint app; "CQRS" used to justify two databases nobody needs. Debugging cost: stack traces go through the dispatcher.</li>
<li><b>When to use</b>: many use-cases with their own validation and rules, a team that benefits from one-class-per-use-case, reads that need a different model (reporting screens). <b>When not</b>: simple CRUD, tiny services, or when you add the library only for "clean architecture" looks.</li>
</ul>`,
        hi: `<p><b>Analogy — token system वाला bank counter:</b> आप "deposit" (command) या "balance enquiry" (query) का token लेते हो। token आपको सही counter तक पहुँचाता है। हर deposit से पहले clerk आपकी ID जाँचता है (pipeline behaviour), हर counter वह जाँच दोबारा नहीं लिखता।</p>
<ul>
<li><b>Command</b>: <code>PlaceOrder</code>, state बदलने की request, ठीक एक handler से handle। <b>Query</b>: <code>CountOrders</code>, data लौटाती है, कोई side effect नहीं। commands के नाम आदेश में, queries के नाम सवाल की तरह।</li>
<li><b>मूल idea को library नहीं चाहिए</b>: DI में registered <code>ICommandHandler&lt;TCommand,TResult&gt;</code> और <code>IQueryHandler&lt;TQuery,TResult&gt;</code>, और handler ढूँढने वाला dispatcher (नीचे का snippet चलता है)। Controllers handler सीधे inject भी कर सकते हैं, dispatcher के बिना।</li>
<li><b>Cross-cutting concerns</b> (logging, validation, transaction, retries): handlers को <b>decorator</b> से wrap करो (Day 10)। MediatR इन्हें <b>pipeline behaviours</b> कहता है (<code>IPipelineBehavior&lt;TRequest,TResponse&gt;</code>), एक registration से सब requests पर लगते हैं।</li>
<li><b>MediatR का रूप</b>: <code>record PlaceOrder(...) : IRequest&lt;int&gt;</code>, <code>IRequestHandler&lt;PlaceOrder,int&gt;</code>, <code>services.AddMediatR(...)</code>, <code>await mediator.Send(new PlaceOrder(...))</code>। Notifications (<code>INotification</code>) एक event कई handlers को भेजते हैं।</li>
<li><b>Traps</b>: handlers का दूसरे handlers को बुलाना (छुपा call graph); state बदलने वाली queries; एक बहुत बड़ा "god" pipeline behaviour; 3 endpoints के app में <code>Send</code> indirection; "CQRS" के नाम पर दो databases जिनकी किसी को ज़रूरत नहीं। Debugging की कीमत: stack traces dispatcher से गुज़रते हैं।</li>
<li><b>कब use करें</b>: कई use-cases जिनकी अपनी validation और rules हों, team को one-class-per-use-case से फ़ायदा हो, reads को अलग model चाहिए (reporting screens)। <b>कब नहीं</b>: सीधा CRUD, छोटी services, या library बस "clean architecture" दिखने के लिए जोड़ी जा रही हो।</li>
</ul>`,
        hg: `<p><b>Analogy — token system wala bank counter:</b> aap "deposit" (command) ya "balance enquiry" (query) ka token lete ho. Token aapko sahi counter tak pahunchata hai. Har deposit se pehle clerk aapki ID jaanchta hai (pipeline behaviour), har counter wo jaanch dobara nahi likhta.</p>
<ul>
<li><b>Command</b>: <code>PlaceOrder</code>, state badalne ki request, theek ek handler se handle. <b>Query</b>: <code>CountOrders</code>, data lautati hai, koi side effect nahi. Commands ke naam aadesh mein, queries ke naam sawaal ki tarah.</li>
<li><b>Mool idea ko library nahi chahiye</b>: DI mein registered <code>ICommandHandler&lt;TCommand,TResult&gt;</code> aur <code>IQueryHandler&lt;TQuery,TResult&gt;</code>, aur handler dhundhne wala dispatcher (neeche ka snippet chalta hai). Controllers handler seedha inject bhi kar sakte hain, dispatcher ke bina.</li>
<li><b>Cross-cutting concerns</b> (logging, validation, transaction, retries): handlers ko <b>decorator</b> se wrap karo (Day 10). MediatR inhe <b>pipeline behaviours</b> kehta hai (<code>IPipelineBehavior&lt;TRequest,TResponse&gt;</code>), ek registration se sab requests par lagte hain.</li>
<li><b>MediatR ka roop</b>: <code>record PlaceOrder(...) : IRequest&lt;int&gt;</code>, <code>IRequestHandler&lt;PlaceOrder,int&gt;</code>, <code>services.AddMediatR(...)</code>, <code>await mediator.Send(new PlaceOrder(...))</code>. Notifications (<code>INotification</code>) ek event kai handlers ko bhejte hain.</li>
<li><b>Traps</b>: handlers ka doosre handlers ko bulana (chhupa call graph); state badalne wali queries; ek bahut bada "god" pipeline behaviour; 3 endpoints ke app mein <code>Send</code> indirection; "CQRS" ke naam par do databases jinki kisi ko zaroorat nahi. Debugging ki keemat: stack traces dispatcher se guzarte hain.</li>
<li><b>Kab use karein</b>: kai use-cases jinki apni validation aur rules hon, team ko one-class-per-use-case se fayda ho, reads ko alag model chahiye (reporting screens). <b>Kab nahi</b>: seedha CRUD, chhoti services, ya library bas "clean architecture" dikhne ke liye jodi ja rahi ho.</li>
</ul>`
      },
      code: [
        {
          caption: {
            en: "Hand-rolled CQRS: command and query handlers in DI, a tiny dispatcher, and a logging decorator as the pipeline behaviour (no library).",
            hi: "Hand-rolled CQRS: DI में command और query handlers, छोटा dispatcher, और pipeline behaviour के रूप में logging decorator (कोई library नहीं)।",
            hg: "Hand-rolled CQRS: DI mein command aur query handlers, chhota dispatcher, aur pipeline behaviour ke roop mein logging decorator (koi library nahi)."
          },
          check: "run",
          packages: ["Microsoft.Extensions.DependencyInjection"],
          expected: `before PlaceOrder
after PlaceOrder
order id = 1
orders = 1`,
          src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddSingleton<OrderStore>();
services.AddTransient<PlaceOrderHandler>();
services.AddTransient<ICommandHandler<PlaceOrder, int>>(sp =>
    new LoggingHandler<PlaceOrder, int>(sp.GetRequiredService<PlaceOrderHandler>()));
services.AddTransient<IQueryHandler<CountOrders, int>, CountOrdersHandler>();
services.AddSingleton<Dispatcher>();

using var provider = services.BuildServiceProvider();
var dispatcher = provider.GetRequiredService<Dispatcher>();

var id = await dispatcher.Send<PlaceOrder, int>(new PlaceOrder("Pen", 2));
Console.WriteLine($"order id = {id}");
var count = await dispatcher.Ask<CountOrders, int>(new CountOrders());
Console.WriteLine($"orders = {count}");

public record PlaceOrder(string Item, int Quantity);
public record CountOrders;

public interface ICommandHandler<TCommand, TResult> { Task<TResult> Handle(TCommand command); }
public interface IQueryHandler<TQuery, TResult> { Task<TResult> Handle(TQuery query); }

public class OrderStore { public List<string> Orders { get; } = new(); }

public class PlaceOrderHandler(OrderStore store) : ICommandHandler<PlaceOrder, int>
{
    public Task<int> Handle(PlaceOrder command)
    {
        store.Orders.Add($"{command.Quantity} x {command.Item}");
        return Task.FromResult(store.Orders.Count);
    }
}

public class CountOrdersHandler(OrderStore store) : IQueryHandler<CountOrders, int>
{
    public Task<int> Handle(CountOrders query) => Task.FromResult(store.Orders.Count);
}

// A "pipeline behaviour" by hand: a decorator around any command handler.
public class LoggingHandler<TCommand, TResult>(ICommandHandler<TCommand, TResult> inner)
    : ICommandHandler<TCommand, TResult>
{
    public async Task<TResult> Handle(TCommand command)
    {
        Console.WriteLine($"before {typeof(TCommand).Name}");
        var result = await inner.Handle(command);
        Console.WriteLine($"after {typeof(TCommand).Name}");
        return result;
    }
}

public class Dispatcher(IServiceProvider provider)
{
    public Task<TResult> Send<TCommand, TResult>(TCommand command) =>
        provider.GetRequiredService<ICommandHandler<TCommand, TResult>>().Handle(command);

    public Task<TResult> Ask<TQuery, TResult>(TQuery query) =>
        provider.GetRequiredService<IQueryHandler<TQuery, TResult>>().Handle(query);
}`
        },
        {
          caption: {
            en: "The same idea with MediatR (shape only, not compiled here: it needs the MediatR package; check the current API version before adopting).",
            hi: "वही idea MediatR के साथ (सिर्फ़ shape, यहाँ compile नहीं: इसे MediatR package चाहिए; अपनाने से पहले मौजूदा API version देखो)।",
            hg: "Wahi idea MediatR ke saath (sirf shape, yahan compile nahi: ise MediatR package chahiye; apnane se pehle maujooda API version dekho)."
          },
          check: "none",
          src: `// dotnet add package MediatR
public record PlaceOrder(string Item, int Quantity) : IRequest<int>;

public class PlaceOrderHandler(OrderStore store) : IRequestHandler<PlaceOrder, int>
{
    public Task<int> Handle(PlaceOrder request, CancellationToken ct)
    {
        store.Orders.Add($"{request.Quantity} x {request.Item}");
        return Task.FromResult(store.Orders.Count);
    }
}

// Pipeline behaviour: runs around every request.
public class LoggingBehavior<TRequest, TResponse>(ILogger<LoggingBehavior<TRequest, TResponse>> log)
    : IPipelineBehavior<TRequest, TResponse> where TRequest : notnull
{
    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken ct)
    {
        log.LogInformation("Handling {Request}", typeof(TRequest).Name);
        return await next();
    }
}

// Registration and use:
// services.AddMediatR(cfg => {
//     cfg.RegisterServicesFromAssemblyContaining<PlaceOrder>();
//     cfg.AddOpenBehavior(typeof(LoggingBehavior<,>));
// });
// var id = await mediator.Send(new PlaceOrder("Pen", 2), ct);`
        }
      ]
    },
    {
      id: "options-in-code",
      depth: "detailed",
      title: {
        en: "Options in code: binding, validation, and failing at startup",
        hi: "Code में Options: binding, validation और startup पर fail",
        hg: "Code mein Options: binding, validation aur startup par fail"
      },
      body: {
        en: `<p><b>Analogy — checking the gas cylinder before the wedding, not during it:</b> you test the burner the day before. <code>ValidateOnStart</code> checks configuration when the app starts, not when the first customer arrives and the rice is already on the flame.</p>
<ul>
<li><b>Define</b> a plain class with defaults and attributes (<code>[Required]</code>, <code>[Range]</code>). <b>Register</b> with <code>AddOptions&lt;T&gt;().Bind(section)</code> (or <code>Configure&lt;T&gt;(section)</code>), then chain validation.</li>
<li><b>Without ValidateOnStart</b>, validation runs the first time someone reads <code>.Value</code> / <code>CurrentValue</code>, so a typo in production config can surface hours after deployment. <code>ValidateOnStart</code> runs it as the host starts (needs the generic host).</li>
<li><b>Three ways to validate</b>: data annotations (<code>ValidateDataAnnotations()</code>, package <code>Microsoft.Extensions.Options.DataAnnotations</code>); an inline <code>Validate(predicate, message)</code>; a class implementing <code>IValidateOptions&lt;T&gt;</code> (can use injected services). The <code>[OptionsValidator]</code> source generator (since .NET 8) produces an <code>IValidateOptions&lt;T&gt;</code> from the attributes without reflection (good for trimming/AOT).</li>
<li><b>Failure</b>: <code>OptionsValidationException</code> with a <code>Failures</code> list; all failures are reported together.</li>
<li><b>Reload</b>: with <code>IOptionsMonitor&lt;T&gt;</code>, subscribe via <code>OnChange</code>; validation runs again on each reload, and an invalid reload surfaces as an <code>OptionsValidationException</code>. Decide in advance how the app should behave if a live reload brings bad values.</li>
<li><b>Secrets</b>: bind them from user secrets, environment variables or a vault, not from committed JSON. Options classes are not a security boundary.</li>
<li><b>When to use</b>: every group of settings that the app cannot work without (connection options, API clients, limits). <b>When not</b>: values that change per call (pass them as method parameters), or one-off values with no validation need.</li>
</ul>`,
        hi: `<p><b>Analogy — शादी से पहले गैस सिलेंडर जाँचना, शादी के दौरान नहीं:</b> आप एक दिन पहले burner test करते हो। <code>ValidateOnStart</code> app शुरू होते ही configuration जाँचता है, तब नहीं जब पहला customer आ चुका हो और चावल आग पर हों।</p>
<ul>
<li><b>Define</b> करो defaults और attributes (<code>[Required]</code>, <code>[Range]</code>) वाली सादी class। <b>Register</b> करो <code>AddOptions&lt;T&gt;().Bind(section)</code> (या <code>Configure&lt;T&gt;(section)</code>) से, फिर validation जोड़ो।</li>
<li><b>ValidateOnStart के बिना</b> validation तब चलता है जब कोई पहली बार <code>.Value</code> / <code>CurrentValue</code> पढ़े, इसलिए production config की typo deploy के घंटों बाद दिख सकती है। <code>ValidateOnStart</code> host शुरू होते वक़्त चलाता है (generic host चाहिए)।</li>
<li><b>Validate के तीन तरीके</b>: data annotations (<code>ValidateDataAnnotations()</code>, package <code>Microsoft.Extensions.Options.DataAnnotations</code>); inline <code>Validate(predicate, message)</code>; <code>IValidateOptions&lt;T&gt;</code> implement करने वाली class (injected services use कर सकती है)। <code>[OptionsValidator]</code> source generator (.NET 8 से) attributes से बिना reflection के <code>IValidateOptions&lt;T&gt;</code> बना देता है (trimming/AOT के लिए अच्छा)।</li>
<li><b>Failure</b>: <code>Failures</code> list वाली <code>OptionsValidationException</code>; सारी failures साथ में report होती हैं।</li>
<li><b>Reload</b>: <code>IOptionsMonitor&lt;T&gt;</code> में <code>OnChange</code> से subscribe करो; हर reload पर validation दोबारा चलता है, और invalid reload <code>OptionsValidationException</code> बनकर सामने आता है। पहले से तय रखो कि live reload में गलत values आएँ तो app क्या करे।</li>
<li><b>Secrets</b>: उन्हें user secrets, environment variables या vault से bind करो, commit हुई JSON से नहीं। Options classes कोई security boundary नहीं हैं।</li>
<li><b>कब use करें</b>: settings का हर वह group जिसके बिना app नहीं चलता (connection options, API clients, limits)। <b>कब नहीं</b>: हर call पर बदलने वाली values (method parameters में दो), या बिना validation ज़रूरत की एक-दो values।</li>
</ul>`,
        hg: `<p><b>Analogy — shaadi se pehle gas cylinder jaanchna, shaadi ke dauraan nahi:</b> aap ek din pehle burner test karte ho. <code>ValidateOnStart</code> app shuru hote hi configuration jaanchta hai, tab nahi jab pehla customer aa chuka ho aur chawal aag par hon.</p>
<ul>
<li><b>Define</b> karo defaults aur attributes (<code>[Required]</code>, <code>[Range]</code>) wali saadi class. <b>Register</b> karo <code>AddOptions&lt;T&gt;().Bind(section)</code> (ya <code>Configure&lt;T&gt;(section)</code>) se, phir validation jodo.</li>
<li><b>ValidateOnStart ke bina</b> validation tab chalta hai jab koi pehli baar <code>.Value</code> / <code>CurrentValue</code> padhe, isliye production config ki typo deploy ke ghanton baad dikh sakti hai. <code>ValidateOnStart</code> host shuru hote waqt chalata hai (generic host chahiye).</li>
<li><b>Validate ke teen tareeke</b>: data annotations (<code>ValidateDataAnnotations()</code>, package <code>Microsoft.Extensions.Options.DataAnnotations</code>); inline <code>Validate(predicate, message)</code>; <code>IValidateOptions&lt;T&gt;</code> implement karne wali class (injected services use kar sakti hai). <code>[OptionsValidator]</code> source generator (.NET 8 se) attributes se bina reflection ke <code>IValidateOptions&lt;T&gt;</code> bana deta hai (trimming/AOT ke liye achha).</li>
<li><b>Failure</b>: <code>Failures</code> list wali <code>OptionsValidationException</code>; saari failures saath mein report hoti hain.</li>
<li><b>Reload</b>: <code>IOptionsMonitor&lt;T&gt;</code> mein <code>OnChange</code> se subscribe karo; har reload par validation dobara chalta hai, aur invalid reload <code>OptionsValidationException</code> banke saamne aata hai. Pehle se tay rakho ki live reload mein galat values aayein to app kya kare.</li>
<li><b>Secrets</b>: unhe user secrets, environment variables ya vault se bind karo, commit hui JSON se nahi. Options classes koi security boundary nahi hain.</li>
<li><b>Kab use karein</b>: settings ka har woh group jiske bina app nahi chalta (connection options, API clients, limits). <b>Kab nahi</b>: har call par badalne wali values (method parameters mein do), ya bina validation zaroorat ki ek-do values.</li>
</ul>`
      },
      code: [
        {
          caption: {
            en: "ValidateOnStart: the host refuses to start with bad configuration. Both failures are reported together.",
            hi: "ValidateOnStart: गलत configuration पर host start होने से मना कर देता है। दोनों failures साथ report होती हैं।",
            hg: "ValidateOnStart: galat configuration par host start hone se mana kar deta hai. Dono failures saath report hoti hain."
          },
          check: "run",
          packages: ["Microsoft.Extensions.Hosting", "Microsoft.Extensions.Options.DataAnnotations"],
          expected: `startup failed: OptionsValidationException
failures: 2
last: Port 25 is blocked`,
          src: `using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

var builder = Host.CreateApplicationBuilder();
builder.Logging.ClearProviders();
builder.Configuration.AddInMemoryCollection(new Dictionary<string, string?>
{
    ["Mail:Host"] = "",      // missing on purpose
    ["Mail:Port"] = "25"
});

builder.Services.AddOptions<MailOptions>()
    .Bind(builder.Configuration.GetSection("Mail"))
    .ValidateDataAnnotations()
    .Validate(m => m.Port != 25, "Port 25 is blocked")
    .ValidateOnStart();

using var host = builder.Build();
try
{
    await host.StartAsync();
    Console.WriteLine("started");
}
catch (OptionsValidationException ex)
{
    Console.WriteLine("startup failed: " + ex.GetType().Name);
    Console.WriteLine("failures: " + ex.Failures.Count());
    Console.WriteLine("last: " + ex.Failures.Last());
}

public class MailOptions
{
    [Required] public string Host { get; set; } = "";
    [Range(1, 65535)] public int Port { get; set; } = 587;
}`
        },
        {
          caption: {
            en: "Since .NET 8 a source generator writes the validator from attributes; a hand-written IValidateOptions class adds rules that attributes cannot express.",
            hi: ".NET 8 से source generator attributes से validator लिख देता है; हाथ से लिखी IValidateOptions class वे rules जोड़ती है जो attributes नहीं कह सकते।",
            hg: ".NET 8 se source generator attributes se validator likh deta hai; haath se likhi IValidateOptions class woh rules jodti hai jo attributes nahi keh sakte."
          },
          check: "compile",
          packages: ["Microsoft.Extensions.Hosting", "Microsoft.Extensions.Options.DataAnnotations"],
          src: `using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

public class MailOptions
{
    public const string SectionName = "Mail";
    [Required, MinLength(3)] public string Host { get; set; } = "";
    [Range(1, 65535)] public int Port { get; set; } = 587;
}

// Source generator (.NET 8+): generates Validate(...) from the attributes, no reflection.
[OptionsValidator]
public partial class MailOptionsValidator : IValidateOptions<MailOptions> { }

// Hand-written: rules attributes cannot express (can also take injected services).
public class MailPortRule : IValidateOptions<MailOptions>
{
    public ValidateOptionsResult Validate(string? name, MailOptions options) =>
        options.Port == 25
            ? ValidateOptionsResult.Fail("Port 25 is blocked")
            : ValidateOptionsResult.Success;
}

public static class Registration
{
    public static IServiceCollection AddMail(this IServiceCollection services)
    {
        services.AddOptions<MailOptions>().BindConfiguration(MailOptions.SectionName).ValidateOnStart();
        services.AddSingleton<IValidateOptions<MailOptions>, MailOptionsValidator>();
        services.AddSingleton<IValidateOptions<MailOptions>, MailPortRule>();
        return services;
    }
}`
        }
      ]
    },
    {
      id: "di-in-code",
      depth: "detailed",
      title: {
        en: "DI in code: scopes in background services, and catching mistakes early",
        hi: "Code में DI: background services में scopes, और गलतियाँ जल्दी पकड़ना",
        hg: "Code mein DI: background services mein scopes, aur galtiyan jaldi pakadna"
      },
      body: {
        en: `<p><b>Analogy — a night-shift security guard who opens a fresh visitor register for every visitor:</b> the guard (the singleton worker) is on duty all night, but each visitor (each unit of work) gets a new page (a scope) that is closed afterwards. The guard never writes everything in one never-ending page.</p>
<ul>
<li><b>Pattern</b>: <code>BackgroundService</code> is a singleton, so inject <code>IServiceScopeFactory</code>, then per loop iteration: <code>await using var scope = factory.CreateAsyncScope();</code> and resolve scoped services (<code>DbContext</code>, repositories) from <code>scope.ServiceProvider</code>. Dispose the scope when the work ends (Day 7 shows the same with EF).</li>
<li><b>Why not resolve from the root provider</b>: scoped services resolved from the root live until the app stops (a captive <code>DbContext</code>); with <code>ValidateScopes</code> on, it throws instead. In ASP.NET Core a request already has its own scope (<code>HttpContext.RequestServices</code>).</li>
<li><b>Prefer <code>CreateAsyncScope</code></b> over <code>CreateScope</code> when anything inside the scope implements only <code>IAsyncDisposable</code>; <code>CreateScope</code> disposes synchronously and can throw for those services.</li>
<li><b>Catch mistakes before production</b>: in Development both <code>ValidateScopes</code> and <code>ValidateOnBuild</code> are on. Production default is off (speed), so run an integration test or a startup check in CI with both options on, using your real registrations.</li>
<li><b>A singleton needs a scoped dependency?</b> Options: make the consumer scoped; inject <code>IServiceScopeFactory</code> / <code>IDbContextFactory&lt;T&gt;</code> and create short scopes; or pass the needed value as a method argument. Do not "fix" it by making the dependency a singleton unless it is truly stateless and thread-safe.</li>
<li><b>Disposal</b>: the container disposes services it created (not instances you registered by hand with <code>AddSingleton(instance)</code>). Transient <code>IDisposable</code>s from the root provider pile up until shutdown (Day 8).</li>
<li><b>When to use scopes manually</b>: background jobs, message consumers, startup tasks, any code outside an HTTP request. <b>When not</b>: inside a controller or middleware that already has a request scope, and never to hide a design problem of tangled lifetimes.</li>
</ul>`,
        hi: `<p><b>Analogy — रात का security guard जो हर visitor के लिए नया visitor register पन्ना खोलता है:</b> guard (singleton worker) रात भर ड्यूटी पर है, पर हर visitor (हर unit of work) को नया पन्ना (scope) मिलता है जो बाद में बंद हो जाता है। guard सब कुछ एक कभी न ख़त्म होने वाले पन्ने पर नहीं लिखता।</p>
<ul>
<li><b>Pattern</b>: <code>BackgroundService</code> singleton है, इसलिए <code>IServiceScopeFactory</code> inject करो, फिर हर loop चक्कर में: <code>await using var scope = factory.CreateAsyncScope();</code> और scoped services (<code>DbContext</code>, repositories) <code>scope.ServiceProvider</code> से resolve करो। काम ख़त्म होने पर scope dispose करो (Day 7 में EF के साथ यही दिखाया है)।</li>
<li><b>Root provider से resolve क्यों नहीं</b>: root से resolve हुई scoped services app बंद होने तक जीती हैं (captive <code>DbContext</code>); <code>ValidateScopes</code> चालू हो तो exception आती है। ASP.NET Core में हर request का अपना scope होता है (<code>HttpContext.RequestServices</code>)।</li>
<li><b><code>CreateScope</code> की जगह <code>CreateAsyncScope</code> पसंद करो</b> जब scope की किसी service में सिर्फ़ <code>IAsyncDisposable</code> हो; <code>CreateScope</code> synchronous dispose करता है और ऐसी services पर exception दे सकता है।</li>
<li><b>Production से पहले गलतियाँ पकड़ो</b>: Development में <code>ValidateScopes</code> और <code>ValidateOnBuild</code> दोनों चालू हैं। Production में default बंद (speed), इसलिए CI में अपनी असली registrations के साथ दोनों options चालू करके integration test या startup check चलाओ।</li>
<li><b>Singleton को scoped dependency चाहिए?</b> विकल्प: consumer को scoped बनाओ; <code>IServiceScopeFactory</code> / <code>IDbContextFactory&lt;T&gt;</code> inject करके छोटे scopes बनाओ; या ज़रूरी value method argument में दो। dependency को singleton बनाकर "ठीक" मत करो, जब तक वह सच में stateless और thread-safe न हो।</li>
<li><b>Disposal</b>: container वही services dispose करता है जो उसने बनाईं (वह instance नहीं जो आपने <code>AddSingleton(instance)</code> से हाथ से दिया)। Root provider की transient <code>IDisposable</code>s shutdown तक जमा होती रहती हैं (Day 8)।</li>
<li><b>कब हाथ से scope बनाएँ</b>: background jobs, message consumers, startup tasks, HTTP request के बाहर का कोई भी code। <b>कब नहीं</b>: controller या middleware में जिसके पास request scope पहले से है, और उलझे lifetimes की design problem छुपाने के लिए कभी नहीं।</li>
</ul>`,
        hg: `<p><b>Analogy — raat ka security guard jo har visitor ke liye naya visitor register ka panna kholta hai:</b> guard (singleton worker) raat bhar duty par hai, par har visitor (har unit of work) ko naya panna (scope) milta hai jo baad mein band ho jaata hai. Guard sab kuch ek kabhi na khatam hone wale panne par nahi likhta.</p>
<ul>
<li><b>Pattern</b>: <code>BackgroundService</code> singleton hai, isliye <code>IServiceScopeFactory</code> inject karo, phir har loop chakkar mein: <code>await using var scope = factory.CreateAsyncScope();</code> aur scoped services (<code>DbContext</code>, repositories) <code>scope.ServiceProvider</code> se resolve karo. Kaam khatam hone par scope dispose karo (Day 7 mein EF ke saath yahi dikhaya hai).</li>
<li><b>Root provider se resolve kyon nahi</b>: root se resolve hui scoped services app band hone tak jeeti hain (captive <code>DbContext</code>); <code>ValidateScopes</code> chaalu ho to exception aati hai. ASP.NET Core mein har request ka apna scope hota hai (<code>HttpContext.RequestServices</code>).</li>
<li><b><code>CreateScope</code> ki jagah <code>CreateAsyncScope</code> pasand karo</b> jab scope ki kisi service mein sirf <code>IAsyncDisposable</code> ho; <code>CreateScope</code> synchronous dispose karta hai aur aisi services par exception de sakta hai.</li>
<li><b>Production se pehle galtiyan pakdo</b>: Development mein <code>ValidateScopes</code> aur <code>ValidateOnBuild</code> dono chaalu hain. Production mein default band (speed), isliye CI mein apni asli registrations ke saath dono options chaalu karke integration test ya startup check chalao.</li>
<li><b>Singleton ko scoped dependency chahiye?</b> Vikalp: consumer ko scoped banao; <code>IServiceScopeFactory</code> / <code>IDbContextFactory&lt;T&gt;</code> inject karke chhote scopes banao; ya zaroori value method argument mein do. Dependency ko singleton banakar "theek" mat karo, jab tak woh sach mein stateless aur thread-safe na ho.</li>
<li><b>Disposal</b>: container wahi services dispose karta hai jo usne banayi (woh instance nahi jo aapne <code>AddSingleton(instance)</code> se haath se diya). Root provider ki transient <code>IDisposable</code>s shutdown tak jama hoti rehti hain (Day 8).</li>
<li><b>Kab haath se scope banayein</b>: background jobs, message consumers, startup tasks, HTTP request ke bahar ka koi bhi code. <b>Kab nahi</b>: controller ya middleware mein jiske paas request scope pehle se hai, aur uljhe lifetimes ki design problem chhupane ke liye kabhi nahi.</li>
</ul>`
      },
      code: [
        {
          caption: {
            en: "A BackgroundService (singleton) creating one async scope per unit of work, and a startup check with ValidateScopes + ValidateOnBuild on.",
            hi: "BackgroundService (singleton) जो हर काम के लिए एक async scope बनाती है, और ValidateScopes + ValidateOnBuild चालू करके startup check।",
            hg: "BackgroundService (singleton) jo har kaam ke liye ek async scope banati hai, aur ValidateScopes + ValidateOnBuild chaalu karke startup check."
          },
          check: "compile",
          packages: ["Microsoft.Extensions.Hosting"],
          src: `using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

public interface IInvoiceJob { Task RunAsync(CancellationToken ct); }

// Scoped: new instance per unit of work (it may hold a DbContext).
public class InvoiceJob : IInvoiceJob
{
    public Task RunAsync(CancellationToken ct) => Task.CompletedTask;
}

// The worker is a singleton, so it must not take scoped services in its constructor.
public class InvoiceWorker(IServiceScopeFactory scopeFactory) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        using var timer = new PeriodicTimer(TimeSpan.FromMinutes(1));
        while (await timer.WaitForNextTickAsync(stoppingToken))
        {
            await using var scope = scopeFactory.CreateAsyncScope();   // one scope per run
            var job = scope.ServiceProvider.GetRequiredService<IInvoiceJob>();
            await job.RunAsync(stoppingToken);
        }   // scope disposed here, scoped services disposed with it
    }
}

public static class Registration
{
    public static IServiceCollection AddInvoicing(this IServiceCollection services)
    {
        services.AddScoped<IInvoiceJob, InvoiceJob>();   // new instance per scope
        services.AddHostedService<InvoiceWorker>();      // the worker itself is a singleton
        return services;
    }
}

public static class StartupCheck
{
    // Use in a CI/integration test with your real registrations.
    public static ServiceProvider BuildStrict(IServiceCollection services) =>
        services.BuildServiceProvider(new ServiceProviderOptions
        {
            ValidateScopes = true,    // catches scoped-from-root and singleton -> scoped
            ValidateOnBuild = true    // catches registrations that cannot be constructed
        });
}`
        }
      ]
    },
  ],
  qa: [
    {
      id: "repo-uow-needed-with-ef",
      depth: "short",
      q: "Do you need the Repository and Unit of Work patterns on top of EF Core?",
      answer: "Not by default: DbSet already acts as a repository and DbContext as a unit of work. Add a repository only for a clear reason, like testability or shared query rules.",
      meaning: {
        hi: "डिफ़ॉल्ट रूप से नहीं। DbSet पहले से repository और DbContext unit of work की तरह काम करता है। repository तभी जोड़ो जब साफ़ वजह हो, जैसे testability या साझा query rules, और उसे specific रखो।",
        hg: "Default roop se nahi. DbSet pehle se repository aur DbContext unit of work ki tarah kaam karta hai. Repository tabhi jodo jab saaf wajah ho, jaise testability ya saajhe query rules, aur use specific rakho."
      },
      explain: {
        en: `<ul>
<li><code>SaveChanges</code> already commits all tracked changes in one transaction, which is what a unit of work does (Day 5, Day 7).</li>
<li>Reasons to add a repository: services tested without a database, a boundary between domain and EF, query rules reused in many places.</li>
<li>Reasons not to: it forwards calls, hides EF features, adds a file per entity.</li>
<li>Follow-up: "How do you test then?" — test query code against the real engine (for example SQL Server in a container; SQLite in-memory is faster but behaves differently, Day 7); fake the repository (or the service) in unit tests of the layer above.</li>
<li>TL angle: decide once per codebase, write it in the team's conventions, and review for "wrapper without a reason".</li>
</ul>`,
        hi: `<ul>
<li><code>SaveChanges</code> पहले से सारे tracked बदलाव एक transaction में commit करता है, यही unit of work का काम है (Day 5, Day 7)।</li>
<li>Repository जोड़ने के कारण: बिना database के services की testing, domain और EF के बीच boundary, कई जगह दोहराए जाने वाले query rules।</li>
<li>न जोड़ने के कारण: वह calls आगे भेजती है, EF features छुपाती है, हर entity पर एक file बढ़ाती है।</li>
<li>Follow-up: "तो test कैसे करोगे?" — query code को असली engine पर test करो (जैसे container में SQL Server; SQLite in-memory तेज़ है पर अलग behave करता है, Day 7); ऊपर की layer के unit tests में repository (या service) fake करो।</li>
<li>TL angle: एक बार codebase के लिए तय करो, team conventions में लिखो, और "बिना वजह का wrapper" review में पकड़ो।</li>
</ul>`,
        hg: `<ul>
<li><code>SaveChanges</code> pehle se saare tracked badlav ek transaction mein commit karta hai, yahi unit of work ka kaam hai (Day 5, Day 7).</li>
<li>Repository jodne ke kaaran: bina database ke services ki testing, domain aur EF ke beech boundary, kai jagah dohraye jane wale query rules.</li>
<li>Na jodne ke kaaran: woh calls aage bhejti hai, EF features chhupati hai, har entity par ek file badhati hai.</li>
<li>Follow-up: "To test kaise karoge?" — query code ko asli engine par test karo (jaise container mein SQL Server; SQLite in-memory tez hai par alag behave karta hai, Day 7); upar ki layer ke unit tests mein repository (ya service) fake karo.</li>
<li>TL angle: ek baar codebase ke liye tay karo, team conventions mein likho, aur "bina wajah ka wrapper" review mein pakdo.</li>
</ul>`
      }
    },
    {
      id: "what-is-cqrs",
      depth: "short",
      q: "What is CQRS? Does it require separate databases?",
      answer: "CQRS separates writing (commands) from reading (queries), so each can have its own model. It does not require separate databases; that is only the most advanced level.",
      meaning: {
        hi: "CQRS लिखने (commands) और पढ़ने (queries) को अलग करता है, ताकि हर एक का अपना model हो सके। इसके लिए अलग databases ज़रूरी नहीं; वह बस सबसे advanced level है।",
        hg: "CQRS likhne (commands) aur padhne (queries) ko alag karta hai, taaki har ek ka apna model ho sake. Iske liye alag databases zaroori nahi; woh bas sabse advanced level hai."
      },
      explain: {
        en: `<ul>
<li>Command: changes state, named like an order (<code>PlaceOrder</code>). Query: returns data, changes nothing (<code>GetOrderSummary</code>).</li>
<li>Level 1: separate classes in one project and one database. Level 2: read side projects straight to DTOs (no tracking, hand-written SQL allowed). Level 3: separate read store, updated by events, so reads are eventually consistent.</li>
<li>Do not confuse with Event Sourcing: they are often paired but independent ideas.</li>
<li>Follow-up: "Can a command return something?" — usually just an id or a result; the data for screens comes from a query.</li>
</ul>`,
        hi: `<ul>
<li>Command: state बदलता है, नाम आदेश जैसा (<code>PlaceOrder</code>)। Query: data लौटाती है, कुछ नहीं बदलती (<code>GetOrderSummary</code>)।</li>
<li>Level 1: एक project और एक database में अलग classes। Level 2: read side सीधे DTOs में project करता है (tracking नहीं, हाथ का SQL चलता है)। Level 3: events से भरा अलग read store, इसलिए reads eventually consistent होते हैं।</li>
<li>Event Sourcing से confuse मत करो: अक्सर साथ आते हैं पर अलग idea हैं।</li>
<li>Follow-up: "क्या command कुछ लौटा सकता है?" — आमतौर पर बस id या result; screen का data query से आता है।</li>
</ul>`,
        hg: `<ul>
<li>Command: state badalta hai, naam aadesh jaisa (<code>PlaceOrder</code>). Query: data lautati hai, kuch nahi badalti (<code>GetOrderSummary</code>).</li>
<li>Level 1: ek project aur ek database mein alag classes. Level 2: read side seedhe DTOs mein project karta hai (tracking nahi, haath ka SQL chalta hai). Level 3: events se bhara alag read store, isliye reads eventually consistent hote hain.</li>
<li>Event Sourcing se confuse mat karo: aksar saath aate hain par alag idea hain.</li>
<li>Follow-up: "Kya command kuch laut sakta hai?" — aamtaur par bas id ya result; screen ka data query se aata hai.</li>
</ul>`
      }
    },
    {
      id: "cqrs-when-overkill",
      depth: "short",
      q: "When is CQRS worth it, and when is it overkill?",
      answer: "It pays off when reads and writes differ in shape, scale or rules, such as complex write logic with many read screens. For plain CRUD it adds classes without removing any pain.",
      meaning: {
        hi: "जब reads और writes की shape, scale या rules अलग हों तब फ़ायदा देता है, जैसे जटिल write logic और बहुत सारी read screens। सीधे CRUD में दर्द घटाए बिना classes बढ़ाता है।",
        hg: "Jab reads aur writes ki shape, scale ya rules alag ho tab fayda deta hai, jaise jatil write logic aur bahut saari read screens. Seedhe CRUD mein dard ghatae bina classes badhata hai."
      },
      explain: {
        en: `<ul>
<li>Good signals: write rules are rich, read screens need joins and aggregates, read load is much higher than write load, several teams work on the same area.</li>
<li>Bad signals: one table, a form, a list; the "query" is just <code>Find</code>.</li>
<li>Start small: level 1 or 2, split later if the pain appears. You can adopt it per feature, not for the whole app.</li>
<li>Follow-up: "What is the cost?" — more classes, indirection, and with a separate read store, eventual consistency that the UI must handle.</li>
</ul>`,
        hi: `<ul>
<li>अच्छे संकेत: write rules बहुत जटिल हैं, read screens को joins और aggregates चाहिए, read load write से बहुत ज़्यादा है, एक area पर कई teams काम करती हैं।</li>
<li>बुरे संकेत: एक table, एक form, एक list; "query" बस <code>Find</code> है।</li>
<li>छोटे से शुरू करो: level 1 या 2, दर्द दिखे तो बाद में बाँटो। इसे पूरे app की जगह feature-by-feature अपना सकते हो।</li>
<li>Follow-up: "कीमत क्या है?" — ज़्यादा classes, indirection, और अलग read store हो तो eventual consistency जिसे UI को संभालना पड़ेगा।</li>
</ul>`,
        hg: `<ul>
<li>Achhe sanket: write rules bahut jatil hain, read screens ko joins aur aggregates chahiye, read load write se bahut zyada hai, ek area par kai teams kaam karti hain.</li>
<li>Bure sanket: ek table, ek form, ek list; "query" bas <code>Find</code> hai.</li>
<li>Chhote se shuru karo: level 1 ya 2, dard dikhe to baad mein baanto. Ise poore app ki jagah feature-by-feature apna sakte ho.</li>
<li>Follow-up: "Keemat kya hai?" — zyada classes, indirection, aur alag read store ho to eventual consistency jise UI ko sambhalna padega.</li>
</ul>`
      }
    },
    {
      id: "mediatr-needed-licence",
      depth: "short",
      q: "Do you need MediatR to do CQRS? Any licensing concern?",
      answer: "No: handlers injected through DI, or a tiny dispatcher, give the same structure. MediatR moved to a commercial licence in 2025 with a free Community tier, so check current terms.",
      meaning: {
        hi: "नहीं। DI से inject हुए handlers या छोटा dispatcher वही structure देते हैं। MediatR 2025 में commercial licence पर गया, free Community tier के साथ, इसलिए मौजूदा terms देख लो।",
        hg: "Nahi. DI se inject hue handlers ya chhota dispatcher wahi structure dete hain. MediatR 2025 mein commercial licence par gaya, free Community tier ke saath, isliye maujooda terms dekh lo."
      },
      explain: {
        en: `<ul>
<li>MediatR gives one <code>Send</code> entry point, handler discovery by assembly scan, notifications and pipeline behaviours. AutoMapper changed licence the same way, from the same company (Lucky Penny Software).</li>
<li>Licence facts: the Community edition is free below revenue limits and for non-production use, and registration of a licence key is required. Limits and prices can change, so a TL reads the current terms and asks legal/procurement before adding it to a company product.</li>
<li>Alternatives: hand-rolled dispatcher (about 30 lines, see the code above), direct handler injection, or another mediator library with its own licence.</li>
<li>TL angle: a dependency is a decision with cost (licence, upgrades, debugging through reflection-based dispatch). Justify it, do not assume it.</li>
</ul>`,
        hi: `<ul>
<li>MediatR एक <code>Send</code> entry point, assembly scan से handler discovery, notifications और pipeline behaviours देता है। AutoMapper का licence भी इसी तरह, उसी company (Lucky Penny Software) ने बदला।</li>
<li>Licence की बातें: Community edition revenue सीमा से नीचे और non-production में free है, और licence key का registration चाहिए। सीमाएँ और कीमतें बदल सकती हैं, इसलिए TL मौजूदा terms पढ़ता है और company product में जोड़ने से पहले legal/procurement से पूछता है।</li>
<li>विकल्प: hand-rolled dispatcher (लगभग 30 lines, ऊपर का code देखो), handlers का सीधा injection, या अपने licence वाली दूसरी mediator library।</li>
<li>TL angle: dependency एक फ़ैसला है जिसकी कीमत है (licence, upgrades, reflection-based dispatch में debugging)। उसे justify करो, मान मत लो।</li>
</ul>`,
        hg: `<ul>
<li>MediatR ek <code>Send</code> entry point, assembly scan se handler discovery, notifications aur pipeline behaviours deta hai. AutoMapper ka licence bhi isi tarah, usi company (Lucky Penny Software) ne badla.</li>
<li>Licence ki baatein: Community edition revenue seema se neeche aur non-production mein free hai, aur licence key ka registration chahiye. Seemayein aur keematein badal sakti hain, isliye TL maujooda terms padhta hai aur company product mein jodne se pehle legal/procurement se poochta hai.</li>
<li>Vikalp: hand-rolled dispatcher (lagbhag 30 lines, upar ka code dekho), handlers ka seedha injection, ya apne licence wali doosri mediator library.</li>
<li>TL angle: dependency ek faisla hai jiski keemat hai (licence, upgrades, reflection-based dispatch mein debugging). Use justify karo, maan mat lo.</li>
</ul>`
      }
    },
    {
      id: "options-three-interfaces",
      depth: "short",
      q: "What is the difference between IOptions, IOptionsSnapshot and IOptionsMonitor?",
      answer: "IOptions is a singleton read once; IOptionsSnapshot is scoped and re-read per request. IOptionsMonitor is a singleton with the current value and OnChange.",
      meaning: {
        hi: "IOptions singleton है जो एक बार पढ़ता है। IOptionsSnapshot scoped है और हर request पर दोबारा पढ़ता है। IOptionsMonitor singleton है जिसके पास हमेशा मौजूदा value है और जो OnChange उठाता है।",
        hg: "IOptions singleton hai jo ek baar padhta hai. IOptionsSnapshot scoped hai aur har request par dobara padhta hai. IOptionsMonitor singleton hai jiske paas hamesha maujooda value hai aur jo OnChange uthata hai."
      },
      explain: {
        en: `<ul>
<li><code>IOptions&lt;T&gt;</code>: fastest and simplest; configuration changes after the first read are ignored.</li>
<li><code>IOptionsSnapshot&lt;T&gt;</code>: scoped, so it cannot be used in singletons. A reload appears on the next request, and the value stays stable inside one request.</li>
<li><code>IOptionsMonitor&lt;T&gt;</code>: use in singletons and background services; <code>CurrentValue</code> is live, <code>OnChange</code> lets you react (for example rebuild a client).</li>
<li>All three only see changes if the configuration provider reloads (JSON with <code>reloadOnChange</code>; not environment variables).</li>
<li>Follow-up: "Which would you pick?" — <code>IOptions</code> unless you truly need live values; then Snapshot for request code, Monitor for singletons.</li>
</ul>`,
        hi: `<ul>
<li><code>IOptions&lt;T&gt;</code>: सबसे तेज़ और आसान; पहली बार पढ़ने के बाद configuration के बदलाव अनदेखे।</li>
<li><code>IOptionsSnapshot&lt;T&gt;</code>: scoped, इसलिए singletons में नहीं चलता। reload अगली request में दिखता है, और एक request के अंदर value स्थिर रहती है।</li>
<li><code>IOptionsMonitor&lt;T&gt;</code>: singletons और background services में use करो; <code>CurrentValue</code> live है, <code>OnChange</code> से react कर सकते हो (जैसे client दोबारा बनाना)।</li>
<li>तीनों बदलाव तभी देखते हैं जब configuration provider reload करे (<code>reloadOnChange</code> वाली JSON; environment variables नहीं)।</li>
<li>Follow-up: "कौन सा चुनोगे?" — जब तक live values सच में न चाहिए, <code>IOptions</code>; फिर request code के लिए Snapshot, singletons के लिए Monitor।</li>
</ul>`,
        hg: `<ul>
<li><code>IOptions&lt;T&gt;</code>: sabse tez aur aasan; pehli baar padhne ke baad configuration ke badlav andekhe.</li>
<li><code>IOptionsSnapshot&lt;T&gt;</code>: scoped, isliye singletons mein nahi chalta. Reload agli request mein dikhta hai, aur ek request ke andar value sthir rehti hai.</li>
<li><code>IOptionsMonitor&lt;T&gt;</code>: singletons aur background services mein use karo; <code>CurrentValue</code> live hai, <code>OnChange</code> se react kar sakte ho (jaise client dobara banana).</li>
<li>Teeno badlav tabhi dekhte hain jab configuration provider reload kare (<code>reloadOnChange</code> wali JSON; environment variables nahi).</li>
<li>Follow-up: "Kaun sa chunoge?" — jab tak live values sach mein na chahiye, <code>IOptions</code>; phir request code ke liye Snapshot, singletons ke liye Monitor.</li>
</ul>`
      }
    },
    {
      id: "captive-dependency-detect",
      depth: "short",
      q: "What is a captive dependency and how do you detect it?",
      answer: "A longer-lived service holding a shorter-lived one, like a singleton keeping a scoped DbContext. ValidateScopes detects it at resolve time; it is on by default only in Development.",
      meaning: {
        hi: "लंबी उम्र वाली service का छोटी उम्र वाली को पकड़े रखना, जैसे singleton में scoped DbContext। ValidateScopes इसे resolve के वक़्त पकड़ता है; यह default में सिर्फ़ Development में चालू होता है।",
        hg: "Lambi umar wali service ka chhoti umar wali ko pakde rakhna, jaise singleton mein scoped DbContext. ValidateScopes ise resolve ke waqt pakadta hai; yeh default mein sirf Development mein chaalu hota hai."
      },
      explain: {
        en: `<ul>
<li>Effects: stale state, thread-safety bugs (one <code>DbContext</code> shared by parallel requests), memory growth. Lifetime basics are in Day 8.</li>
<li>Detection: <code>ValidateScopes = true</code> throws <i>"Cannot consume scoped service ... from singleton ..."</i> when the singleton is resolved. With <code>ValidateOnBuild</code> also on, the same error appears at build time, before any request.</li>
<li>Production default is off, so add a CI check that builds the provider with both options on.</li>
<li>Fix: make the consumer scoped, or inject <code>IServiceScopeFactory</code> / a factory and create short scopes.</li>
<li>Follow-up: "Is Singleton → Transient also captive?" — yes: the transient instance is created once and kept for the singleton's life, and <code>ValidateScopes</code> does not report it (it only checks scoped services).</li>
</ul>`,
        hi: `<ul>
<li>असर: पुराना state, thread-safety bugs (एक साथ चल रही requests में एक <code>DbContext</code>), memory बढ़ना। Lifetime basics Day 8 में हैं।</li>
<li>Detection: <code>ValidateScopes = true</code> singleton resolve होते ही <i>"Cannot consume scoped service ... from singleton ..."</i> फेंकता है। <code>ValidateOnBuild</code> भी चालू हो तो वही error build पर, किसी request से पहले, दिखता है।</li>
<li>Production में default बंद है, इसलिए CI में ऐसा check जोड़ो जो provider दोनों options के साथ बनाए।</li>
<li>Fix: consumer को scoped बनाओ, या <code>IServiceScopeFactory</code> / factory inject करके छोटे scopes बनाओ।</li>
<li>Follow-up: "क्या Singleton → Transient भी captive है?" — हाँ: transient instance एक बार बनकर singleton की पूरी उम्र रहता है, और <code>ValidateScopes</code> उसे report नहीं करता (वह सिर्फ़ scoped services जाँचता है)।</li>
</ul>`,
        hg: `<ul>
<li>Asar: purana state, thread-safety bugs (ek saath chal rahi requests mein ek <code>DbContext</code>), memory badhna. Lifetime basics Day 8 mein hain.</li>
<li>Detection: <code>ValidateScopes = true</code> singleton resolve hote hi <i>"Cannot consume scoped service ... from singleton ..."</i> phenkta hai. <code>ValidateOnBuild</code> bhi chaalu ho to wahi error build par, kisi request se pehle, dikhta hai.</li>
<li>Production mein default band hai, isliye CI mein aisa check jodo jo provider dono options ke saath banaye.</li>
<li>Fix: consumer ko scoped banao, ya <code>IServiceScopeFactory</code> / factory inject karke chhote scopes banao.</li>
<li>Follow-up: "Kya Singleton → Transient bhi captive hai?" — haan: transient instance ek baar banke singleton ki poori umar rehta hai, aur <code>ValidateScopes</code> use report nahi karta (woh sirf scoped services jaanchta hai).</li>
</ul>`
      }
    },
    {
      id: "options-validate-on-start",
      depth: "short",
      q: "How do you make invalid configuration fail at application startup?",
      answer: "Register the options with AddOptions, add ValidateDataAnnotations, Validate or an IValidateOptions class, then chain ValidateOnStart. The host then throws OptionsValidationException while starting.",
      meaning: {
        hi: "options को AddOptions से register करो, ValidateDataAnnotations, Validate या IValidateOptions class जोड़ो, फिर ValidateOnStart लगाओ। तब host शुरू होते वक़्त OptionsValidationException फेंकता है।",
        hg: "options ko AddOptions se register karo, ValidateDataAnnotations, Validate ya IValidateOptions class jodo, phir ValidateOnStart lagao. Tab host shuru hote waqt OptionsValidationException phenkta hai."
      },
      explain: {
        en: `<ul>
<li>Without <code>ValidateOnStart</code>, validation runs on first read of the value, which can be minutes or hours after deployment.</li>
<li>All failures are collected, so one startup shows every wrong setting (see the runnable example above).</li>
<li>Validators can be attributes, a lambda, an <code>IValidateOptions&lt;T&gt;</code> class (can inject services), or the <code>[OptionsValidator]</code> source generator (since .NET 8).</li>
<li>Follow-up: "Does it help in a Kubernetes rollout?" — yes: the new pod fails its start, the old pods keep serving, and the bad config never takes traffic.</li>
</ul>`,
        hi: `<ul>
<li><code>ValidateOnStart</code> के बिना validation value के पहले पढ़ने पर चलता है, जो deploy के मिनटों या घंटों बाद हो सकता है।</li>
<li>सारी failures इकट्ठा होती हैं, इसलिए एक startup में हर गलत setting दिख जाती है (ऊपर का runnable example देखो)।</li>
<li>Validators attributes, lambda, <code>IValidateOptions&lt;T&gt;</code> class (services inject कर सकती है) या <code>[OptionsValidator]</code> source generator (.NET 8 से) हो सकते हैं।</li>
<li>Follow-up: "क्या Kubernetes rollout में मदद करता है?" — हाँ: नया pod start पर fail होता है, पुराने pods serve करते रहते हैं, और गलत config कभी traffic नहीं लेता।</li>
</ul>`,
        hg: `<ul>
<li><code>ValidateOnStart</code> ke bina validation value ke pehle padhne par chalta hai, jo deploy ke minuton ya ghanton baad ho sakta hai.</li>
<li>Saari failures ikattha hoti hain, isliye ek startup mein har galat setting dikh jaati hai (upar ka runnable example dekho).</li>
<li>Validators attributes, lambda, <code>IValidateOptions&lt;T&gt;</code> class (services inject kar sakti hai) ya <code>[OptionsValidator]</code> source generator (.NET 8 se) ho sakte hain.</li>
<li>Follow-up: "Kya Kubernetes rollout mein madad karta hai?" — haan: naya pod start par fail hota hai, purane pods serve karte rehte hain, aur galat config kabhi traffic nahi leta.</li>
</ul>`
      }
    },
    {
      id: "scoped-in-background-service",
      depth: "short",
      q: "How do you use a scoped service such as DbContext inside a BackgroundService?",
      answer: "The worker is a singleton, so inject IServiceScopeFactory and call CreateAsyncScope for each unit of work. Resolve the DbContext from that scope and dispose the scope afterwards.",
      meaning: {
        hi: "worker singleton है, इसलिए IServiceScopeFactory inject करो और हर काम के लिए CreateAsyncScope बुलाओ। DbContext उसी scope से resolve करो और बाद में scope dispose करो।",
        hg: "worker singleton hai, isliye IServiceScopeFactory inject karo aur har kaam ke liye CreateAsyncScope bulao. DbContext usi scope se resolve karo aur baad mein scope dispose karo."
      },
      explain: {
        en: `<ul>
<li>Constructor-injecting a scoped service into the worker makes it a captive dependency (and fails under <code>ValidateScopes</code>). Day 7 shows this with <code>DbContext</code>.</li>
<li><code>await using var scope = factory.CreateAsyncScope();</code> per loop iteration or per message; the scope disposes the context.</li>
<li>Alternative for EF: inject <code>IDbContextFactory&lt;T&gt;</code> and create a short-lived context (Day 5).</li>
<li>Pass <code>stoppingToken</code> down so shutdown is graceful.</li>
<li>Safe fire-and-forget from a request: queue the work and let a <code>BackgroundService</code> consume the queue (Day 3).</li>
<li>Follow-up: "Why not one scope for the whole loop?" — the scope would be one long unit of work, with a growing change tracker and stale data.</li>
</ul>`,
        hi: `<ul>
<li>Scoped service को worker के constructor में inject करना captive dependency बनाता है (और <code>ValidateScopes</code> में fail होता है)। Day 7 में <code>DbContext</code> के साथ दिखाया है।</li>
<li>हर loop चक्कर या हर message पर <code>await using var scope = factory.CreateAsyncScope();</code>; scope context को dispose करता है।</li>
<li>EF के लिए विकल्प: <code>IDbContextFactory&lt;T&gt;</code> inject करके छोटी उम्र का context बनाओ (Day 5)।</li>
<li><code>stoppingToken</code> नीचे तक पास करो ताकि shutdown graceful रहे।</li>
<li>Request से सुरक्षित fire-and-forget: काम को queue में डालो और <code>BackgroundService</code> से queue खाली करवाओ (Day 3)।</li>
<li>Follow-up: "पूरे loop के लिए एक scope क्यों नहीं?" — scope एक लंबा unit of work बन जाएगा, change tracker बढ़ेगा और data पुराना होगा।</li>
</ul>`,
        hg: `<ul>
<li>Scoped service ko worker ke constructor mein inject karna captive dependency banata hai (aur <code>ValidateScopes</code> mein fail hota hai). Day 7 mein <code>DbContext</code> ke saath dikhaya hai.</li>
<li>Har loop chakkar ya har message par <code>await using var scope = factory.CreateAsyncScope();</code>; scope context ko dispose karta hai.</li>
<li>EF ke liye vikalp: <code>IDbContextFactory&lt;T&gt;</code> inject karke chhoti umar ka context banao (Day 5).</li>
<li><code>stoppingToken</code> neeche tak pass karo taaki shutdown graceful rahe.</li>
<li>Request se surakshit fire-and-forget: kaam ko queue mein daalo aur <code>BackgroundService</code> se queue khali karvao (Day 3).</li>
<li>Follow-up: "Poore loop ke liye ek scope kyon nahi?" — scope ek lamba unit of work ban jayega, change tracker badhega aur data purana hoga.</li>
</ul>`
      }
    },
    {
      id: "generic-repository-trade-off",
      depth: "detailed",
      q: "What are the trade-offs of a generic repository (IRepository&lt;T&gt;) over EF Core?",
      answer: "Gains: easier unit tests and one data-access place; costs: it hides Include, projections and bulk updates, leaks IQueryable and forwards calls. Specific, query-focused repositories usually serve teams better.",
      meaning: {
        hi: "फ़ायदे: आसान unit tests और data access की एक जगह। कीमत: यह Include, projections और bulk updates छुपाती है, IQueryable leak करती है और calls आगे भेजती है। Specific, query-focused repositories आमतौर पर बेहतर रहती हैं।",
        hg: "Fayde: aasan unit tests aur data access ki ek jagah. Keemat: yeh Include, projections aur bulk updates chhupati hai, IQueryable leak karti hai aur calls aage bhejti hai. Specific, query-focused repositories aamtaur par behtar rehti hain."
      },
      explain: {
        en: `<ul>
<li>This matches Day 7: <code>DbSet&lt;T&gt;</code> is already a generic repository and <code>DbContext</code> a unit of work.</li>
<li>A <code>GetAll()</code> that returns a list loads everything before the caller filters; one that returns <code>IQueryable</code> hands out EF itself (see the puzzles).</li>
<li>Different entities need different things (an aggregate root with includes, a read-only lookup table, a keyless view); one interface fits none of them well.</li>
<li>Follow-up: "What would you write instead?" — <code>IOrderRepository.GetOpenOrdersFor(customerId)</code>, returning what the use-case needs, or no repository and a service using <code>DbContext</code>.</li>
<li>Follow-up: "Swap the database someday?" — rarely happens; and a repository does not hide provider differences in SQL, indexes and transactions anyway.</li>
</ul>`,
        hi: `<ul>
<li>यह Day 7 से मेल खाता है: <code>DbSet&lt;T&gt;</code> पहले से generic repository और <code>DbContext</code> unit of work है।</li>
<li>list लौटाने वाला <code>GetAll()</code> caller के filter करने से पहले सब load कर देता है; <code>IQueryable</code> लौटाने वाला खुद EF बाहर दे देता है (puzzles देखो)।</li>
<li>अलग entities को अलग चीज़ें चाहिए (includes वाला aggregate root, read-only lookup table, keyless view); एक interface किसी में ठीक नहीं बैठता।</li>
<li>Follow-up: "इसकी जगह क्या लिखोगे?" — <code>IOrderRepository.GetOpenOrdersFor(customerId)</code>, जो use-case को चाहिए वही लौटाए, या repository नहीं और <code>DbContext</code> इस्तेमाल करने वाली service।</li>
<li>Follow-up: "कभी database बदलना हो तो?" — कम ही होता है; और repository SQL, indexes, transactions के provider फ़र्क़ वैसे भी नहीं छुपाती।</li>
</ul>`,
        hg: `<ul>
<li>Yeh Day 7 se mel khata hai: <code>DbSet&lt;T&gt;</code> pehle se generic repository aur <code>DbContext</code> unit of work hai.</li>
<li>List lautane wala <code>GetAll()</code> caller ke filter karne se pehle sab load kar deta hai; <code>IQueryable</code> lautane wala khud EF bahar de deta hai (puzzles dekho).</li>
<li>Alag entities ko alag cheezein chahiye (includes wala aggregate root, read-only lookup table, keyless view); ek interface kisi mein theek nahi baithta.</li>
<li>Follow-up: "Iski jagah kya likhoge?" — <code>IOrderRepository.GetOpenOrdersFor(customerId)</code>, jo use-case ko chahiye wahi lautaye, ya repository nahi aur <code>DbContext</code> istemaal karne wali service.</li>
<li>Follow-up: "Kabhi database badalna ho to?" — kam hi hota hai; aur repository SQL, indexes, transactions ke provider farq waise bhi nahi chhupati.</li>
</ul>`
      }
    },
    {
      id: "iqueryable-from-repository",
      depth: "detailed",
      q: "Should a repository return IQueryable&lt;T&gt;?",
      answer: "It is a trade-off: IQueryable lets callers compose paging and filters into one SQL query but leaks EF behaviour and deferred execution. A list or DTO gives a stable boundary but loads more.",
      meaning: {
        hi: "यह trade-off है। IQueryable callers को paging और filters एक SQL query में जोड़ने देता है, पर EF का व्यवहार और deferred execution leak करता है। list या DTO लौटाना स्थिर boundary देता है पर ज़्यादा load करता है।",
        hg: "Yeh trade-off hai. IQueryable callers ko paging aur filters ek SQL query mein jodne deta hai, par EF ka vyavhaar aur deferred execution leak karta hai. List ya DTO lautana sthir boundary deta hai par zyada load karta hai."
      },
      explain: {
        en: `<ul>
<li>With <code>IQueryable</code>, <code>repo.Query().Where(...).Count()</code> becomes one SQL statement; nothing runs until enumeration (Day 4, puzzle below).</li>
<li>Leaks: a caller can call a C# method EF cannot translate (runtime error), forget to <code>await</code> inside a scope, or enumerate the query after the context is disposed.</li>
<li>Middle path: return <code>IQueryable</code> only inside the data layer (query objects, specifications) and return DTOs/lists from the public interface; expose paging parameters explicitly.</li>
<li>Follow-up: "How do you test a method returning IQueryable?" — an in-memory list <code>AsQueryable()</code> hides provider differences; prefer the real engine (a container) for translation behaviour; SQLite in-memory is faster but differs (Day 7).</li>
</ul>`,
        hi: `<ul>
<li><code>IQueryable</code> के साथ <code>repo.Query().Where(...).Count()</code> एक SQL statement बनता है; enumeration तक कुछ नहीं चलता (Day 4, नीचे का puzzle)।</li>
<li>Leaks: caller ऐसा C# method बुला सकता है जिसे EF translate नहीं कर सकता (runtime error), scope में <code>await</code> भूल सकता है, या context dispose होने के बाद query enumerate कर सकता है।</li>
<li>बीच का रास्ता: <code>IQueryable</code> सिर्फ़ data layer के अंदर (query objects, specifications) और public interface से DTOs/lists लौटाओ; paging parameters साफ़ दिखाओ।</li>
<li>Follow-up: "IQueryable लौटाने वाले method को test कैसे करोगे?" — in-memory list का <code>AsQueryable()</code> provider फ़र्क़ छुपाता है; translation व्यवहार के लिए असली engine (container) बेहतर; SQLite in-memory तेज़ है पर अलग है (Day 7)।</li>
</ul>`,
        hg: `<ul>
<li><code>IQueryable</code> ke saath <code>repo.Query().Where(...).Count()</code> ek SQL statement banta hai; enumeration tak kuch nahi chalta (Day 4, neeche ka puzzle).</li>
<li>Leaks: caller aisa C# method bula sakta hai jise EF translate nahi kar sakta (runtime error), scope mein <code>await</code> bhool sakta hai, ya context dispose hone ke baad query enumerate kar sakta hai.</li>
<li>Beech ka raasta: <code>IQueryable</code> sirf data layer ke andar (query objects, specifications) aur public interface se DTOs/lists lautao; paging parameters saaf dikhao.</li>
<li>Follow-up: "IQueryable lautane wale method ko test kaise karoge?" — in-memory list ka <code>AsQueryable()</code> provider farq chhupata hai; translation vyavhaar ke liye asli engine (container) behtar; SQLite in-memory tez hai par alag hai (Day 7).</li>
</ul>`
      }
    },
    {
      id: "uow-shared-context",
      depth: "detailed",
      q: "How do two repositories commit together in one transaction with EF Core?",
      answer: "Both receive the same scoped DbContext, so they share one change tracker. One SaveChanges then writes all their changes in a single transaction, which is the unit of work.",
      meaning: {
        hi: "दोनों को वही scoped DbContext मिलता है, इसलिए वे एक change tracker share करती हैं। फिर एक SaveChanges उनके सारे बदलाव एक transaction में लिखता है, यही unit of work है।",
        hg: "Dono ko wahi scoped DbContext milta hai, isliye woh ek change tracker share karti hain. Phir ek SaveChanges unke saare badlav ek transaction mein likhta hai, yahi unit of work hai."
      },
      explain: {
        en: `<ul>
<li>DbContext is registered scoped (Day 5), so within one request every repository gets the same instance (see puzzle).</li>
<li>Repositories should <b>not</b> call <code>SaveChanges</code> themselves; the use-case (service/handler) does, once, at the end.</li>
<li>For several <code>SaveChanges</code> calls on one context, use an explicit transaction (<code>Database.BeginTransactionAsync</code>; Day 6). A transaction begun on one context does not cover a second context: share one <code>DbConnection</code> and call <code>Database.UseTransactionAsync</code> on the second, or use <code>TransactionScope</code> (Day 6).</li>
<li>A separate <code>IUnitOfWork</code> abstraction adds little here; it mainly lets a service commit without referencing <code>DbContext</code>.</li>
<li>Follow-up: "What if a repository is a singleton?" — it would capture one context forever: a captive dependency.</li>
</ul>`,
        hi: `<ul>
<li>DbContext scoped register होता है (Day 5), इसलिए एक request में हर repository को वही instance मिलता है (puzzle देखो)।</li>
<li>Repositories खुद <code>SaveChanges</code> <b>न</b> बुलाएँ; use-case (service/handler) आख़िर में एक बार बुलाए।</li>
<li>कई <code>SaveChanges</code> calls एक context पर हों तो explicit transaction (<code>Database.BeginTransactionAsync</code>; Day 6)। एक context में शुरू हुआ transaction दूसरे context को cover नहीं करता: एक <code>DbConnection</code> share करो और दूसरे पर <code>Database.UseTransactionAsync</code> बुलाओ, या <code>TransactionScope</code> (Day 6) use करो।</li>
<li>अलग <code>IUnitOfWork</code> abstraction यहाँ कम जोड़ता है; यह मुख्य रूप से service को <code>DbContext</code> का नाम लिए बिना commit करने देता है।</li>
<li>Follow-up: "अगर repository singleton हो?" — वह एक context हमेशा के लिए पकड़ लेगी: captive dependency।</li>
</ul>`,
        hg: `<ul>
<li>DbContext scoped register hota hai (Day 5), isliye ek request mein har repository ko wahi instance milta hai (puzzle dekho).</li>
<li>Repositories khud <code>SaveChanges</code> <b>na</b> bulayein; use-case (service/handler) aakhir mein ek baar bulaye.</li>
<li>Kai <code>SaveChanges</code> calls ek context par hon to explicit transaction (<code>Database.BeginTransactionAsync</code>; Day 6). Ek context mein shuru hua transaction doosre context ko cover nahi karta: ek <code>DbConnection</code> share karo aur doosre par <code>Database.UseTransactionAsync</code> bulao, ya <code>TransactionScope</code> (Day 6) use karo.</li>
<li>Alag <code>IUnitOfWork</code> abstraction yahan kam jodta hai; yeh mukhya roop se service ko <code>DbContext</code> ka naam liye bina commit karne deta hai.</li>
<li>Follow-up: "Agar repository singleton ho?" — woh ek context hamesha ke liye pakad legi: captive dependency.</li>
</ul>`
      }
    },
    {
      id: "specification-pattern",
      depth: "detailed",
      q: "What is the specification pattern and when is it useful?",
      answer: "A specification is an object that captures one query rule, usually an expression, so the rule is named, reusable and testable. It helps when many places share filters; for a few queries it is overkill.",
      meaning: {
        hi: "specification एक object है जो एक query rule पकड़ता है, आमतौर पर expression के रूप में, ताकि rule का नाम हो, दोबारा use हो और test हो सके। कई जगह filters साझा हों तो काम का; कुछ queries के लिए overkill।",
        hg: "specification ek object hai jo ek query rule pakadta hai, aamtaur par expression ke roop mein, taaki rule ka naam ho, dobara use ho aur test ho sake. Kai jagah filters saajhe hon to kaam ka; kuch queries ke liye overkill."
      },
      explain: {
        en: `<ul>
<li>Example: <code>Specs.LowStock(10)</code> wraps <code>p =&gt; p.Stock &lt; 10</code>. Callers say <code>repo.FindAsync(Specs.LowStock(10))</code>.</li>
<li>Keep the rule as <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> so EF translates it to SQL; a <code>Func</code> would filter in memory (Day 4).</li>
<li>Specifications can be combined (and/or) and can carry includes, sorting and paging.</li>
<li>Libraries exist for this; a 10-line version is usually enough. Treat any library as an optional dependency.</li>
<li>Follow-up: "Spec vs extension method on IQueryable?" — a real <code>IQueryable</code> extension such as <code>public static IQueryable&lt;Product&gt; LowStock(this IQueryable&lt;Product&gt; q, int t) =&gt; q.Where(p =&gt; p.Stock &lt; t);</code> is often simpler and still translates to SQL. Passing a method group to <code>Where</code> would bind to <code>Enumerable.Where</code> and filter in memory.</li>
</ul>`,
        hi: `<ul>
<li>उदाहरण: <code>Specs.LowStock(10)</code> में <code>p =&gt; p.Stock &lt; 10</code> लिपटा है। callers कहते हैं <code>repo.FindAsync(Specs.LowStock(10))</code>।</li>
<li>Rule को <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> रखो ताकि EF इसे SQL बनाए; <code>Func</code> memory में filter करेगा (Day 4)।</li>
<li>Specifications को जोड़ा जा सकता है (and/or) और उनमें includes, sorting, paging हो सकते हैं।</li>
<li>इसके लिए libraries हैं; 10 lines का version आमतौर पर काफ़ी है। किसी भी library को optional dependency मानो।</li>
<li>Follow-up: "Spec vs IQueryable पर extension method?" — असली <code>IQueryable</code> extension, जैसे <code>public static IQueryable&lt;Product&gt; LowStock(this IQueryable&lt;Product&gt; q, int t) =&gt; q.Where(p =&gt; p.Stock &lt; t);</code>, अक्सर आसान है और फिर भी SQL में translate होता है। <code>Where</code> को method group देने पर वह <code>Enumerable.Where</code> से जुड़ जाएगा और memory में filter करेगा।</li>
</ul>`,
        hg: `<ul>
<li>Udaharan: <code>Specs.LowStock(10)</code> mein <code>p =&gt; p.Stock &lt; 10</code> lipta hai. Callers kehte hain <code>repo.FindAsync(Specs.LowStock(10))</code>.</li>
<li>Rule ko <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> rakho taaki EF ise SQL banaye; <code>Func</code> memory mein filter karega (Day 4).</li>
<li>Specifications ko joda ja sakta hai (and/or) aur unmein includes, sorting, paging ho sakte hain.</li>
<li>Iske liye libraries hain; 10 lines ka version aamtaur par kaafi hai. Kisi bhi library ko optional dependency maano.</li>
<li>Follow-up: "Spec vs IQueryable par extension method?" — asli <code>IQueryable</code> extension, jaise <code>public static IQueryable&lt;Product&gt; LowStock(this IQueryable&lt;Product&gt; q, int t) =&gt; q.Where(p =&gt; p.Stock &lt; t);</code>, aksar aasan hai aur phir bhi SQL mein translate hota hai. <code>Where</code> ko method group dene par woh <code>Enumerable.Where</code> se jud jayega aur memory mein filter karega.</li>
</ul>`
      }
    },
    {
      id: "cqrs-read-side-consistency",
      depth: "detailed",
      q: "In CQRS with a separate read store, how do you handle eventual consistency?",
      answer: "The write side raises events that update the read store, so reads can lag briefly. Design the UI for it: return ids from commands, show pending state, and make handlers idempotent.",
      meaning: {
        hi: "write side events उठाती है जो read store update करते हैं, इसलिए reads थोड़ा पीछे रह सकते हैं। UI इसी हिसाब से बनाओ: commands से id लौटाओ, pending state दिखाओ, और handlers idempotent रखो।",
        hg: "write side events uthati hai jo read store update karte hain, isliye reads thoda peeche reh sakte hain. UI isi hisaab se banao: commands se id lautao, pending state dikhao, aur handlers idempotent rakho."
      },
      explain: {
        en: `<ul>
<li>After a command, the read model may not show the change yet; the UI can use the returned id, refresh after a moment, or read from the write side for that one screen.</li>
<li>Event delivery is usually at-least-once, so projection handlers must be idempotent (applying the same event twice is safe).</li>
<li>Use an outbox (write the event with the same transaction as the data) to avoid "saved but event lost".</li>
<li>Follow-up: "How do you rebuild a broken read model?" — replay events or re-project from the write database.</li>
<li>TL angle: this is the real cost of level 3. Many systems are fine on level 1 or 2 with strong consistency.</li>
</ul>`,
        hi: `<ul>
<li>command के बाद read model में बदलाव अभी न दिखे; UI लौटाए गए id का उपयोग कर सकता है, थोड़ी देर बाद refresh कर सकता है, या उस एक screen के लिए write side से पढ़ सकता है।</li>
<li>Event delivery आमतौर पर at-least-once होती है, इसलिए projection handlers idempotent होने चाहिए (वही event दो बार लगे तो भी सुरक्षित)।</li>
<li>"data सेव हुआ पर event खो गया" से बचने के लिए outbox (event उसी transaction में data के साथ लिखो)।</li>
<li>Follow-up: "टूटा read model दोबारा कैसे बनाओगे?" — events replay करो या write database से दोबारा project करो।</li>
<li>TL angle: यही level 3 की असली कीमत है। कई systems level 1 या 2 में strong consistency के साथ ठीक रहते हैं।</li>
</ul>`,
        hg: `<ul>
<li>Command ke baad read model mein badlav abhi na dikhe; UI lautaye gaye id ka upyog kar sakta hai, thodi der baad refresh kar sakta hai, ya us ek screen ke liye write side se padh sakta hai.</li>
<li>Event delivery aamtaur par at-least-once hoti hai, isliye projection handlers idempotent hone chahiye (wahi event do baar lage to bhi surakshit).</li>
<li>"Data save hua par event kho gaya" se bachne ke liye outbox (event usi transaction mein data ke saath likho).</li>
<li>Follow-up: "Toota read model dobara kaise banaoge?" — events replay karo ya write database se dobara project karo.</li>
<li>TL angle: yahi level 3 ki asli keemat hai. Kai systems level 1 ya 2 mein strong consistency ke saath theek rehte hain.</li>
</ul>`
      }
    },
    {
      id: "pipeline-behaviours",
      depth: "detailed",
      q: "What are pipeline behaviours, and how would you do them without MediatR?",
      answer: "They wrap every request handler for cross-cutting concerns like logging, validation or transactions. Without MediatR, use decorators around handlers registered in DI.",
      meaning: {
        hi: "ये हर request handler को logging, validation या transactions जैसे cross-cutting concerns के लिए wrap करते हैं। MediatR के बिना DI में registered handlers के चारों ओर decorators use करो।",
        hg: "Yeh har request handler ko logging, validation ya transactions jaise cross-cutting concerns ke liye wrap karte hain. MediatR ke bina DI mein registered handlers ke charon taraf decorators use karo."
      },
      explain: {
        en: `<ul>
<li>MediatR: <code>IPipelineBehavior&lt;TRequest,TResponse&gt;</code> registered once (<code>AddOpenBehavior</code>) wraps every request in registration order.</li>
<li>By hand: a generic <code>LoggingHandler&lt;TCommand,TResult&gt;</code> decorator (runnable example above). Libraries such as Scrutor can register decorators; plain factory lambdas work too.</li>
<li>Order matters: usually logging, then validation, then transaction, then handler.</li>
<li>Trap: one behaviour that does everything, or business rules hidden in a behaviour where reviewers cannot see them.</li>
<li>Follow-up: "ASP.NET Core middleware vs behaviours?" — middleware wraps HTTP requests (Day 10 chain of responsibility); behaviours wrap use-cases, whatever triggered them (HTTP, queue, job).</li>
</ul>`,
        hi: `<ul>
<li>MediatR: <code>IPipelineBehavior&lt;TRequest,TResponse&gt;</code> एक बार register (<code>AddOpenBehavior</code>) होकर हर request को registration order में wrap करता है।</li>
<li>हाथ से: generic <code>LoggingHandler&lt;TCommand,TResult&gt;</code> decorator (ऊपर का runnable example)। Scrutor जैसी libraries decorators register कर सकती हैं; सादे factory lambdas भी चलते हैं।</li>
<li>Order मायने रखता है: आमतौर पर logging, फिर validation, फिर transaction, फिर handler।</li>
<li>Trap: सब कुछ करने वाला एक behaviour, या business rules ऐसे behaviour में छुपे जहाँ reviewers को न दिखें।</li>
<li>Follow-up: "ASP.NET Core middleware vs behaviours?" — middleware HTTP requests wrap करता है (Day 10 chain of responsibility); behaviours use-cases wrap करते हैं, जो भी उन्हें चलाए (HTTP, queue, job)।</li>
</ul>`,
        hg: `<ul>
<li>MediatR: <code>IPipelineBehavior&lt;TRequest,TResponse&gt;</code> ek baar register (<code>AddOpenBehavior</code>) hokar har request ko registration order mein wrap karta hai.</li>
<li>Haath se: generic <code>LoggingHandler&lt;TCommand,TResult&gt;</code> decorator (upar ka runnable example). Scrutor jaisi libraries decorators register kar sakti hain; saade factory lambdas bhi chalte hain.</li>
<li>Order maayne rakhta hai: aamtaur par logging, phir validation, phir transaction, phir handler.</li>
<li>Trap: sab kuch karne wala ek behaviour, ya business rules aise behaviour mein chhupe jahan reviewers ko na dikhein.</li>
<li>Follow-up: "ASP.NET Core middleware vs behaviours?" — middleware HTTP requests wrap karta hai (Day 10 chain of responsibility); behaviours use-cases wrap karte hain, jo bhi unhe chalaye (HTTP, queue, job).</li>
</ul>`
      }
    },
    {
      id: "named-options",
      depth: "detailed",
      q: "What are named options and when would you use them?",
      answer: "Named options give several configurations of one options class, each with a name, read with IOptionsMonitor.Get(name). Use them for things like two SMTP servers or several API clients.",
      meaning: {
        hi: "Named options एक ही options class की कई configurations देते हैं, हर एक का नाम होता है। IOptionsMonitor.Get(name) से पढ़ो। दो SMTP servers या कई API clients जैसी चीज़ों के लिए।",
        hg: "Named options ek hi options class ki kai configurations dete hain, har ek ka naam hota hai. IOptionsMonitor.Get(name) se padho. Do SMTP servers ya kai API clients jaisi cheezon ke liye."
      },
      explain: {
        en: `<ul>
<li>Register: <code>services.Configure&lt;MailOptions&gt;("primary", config.GetSection("Mail:Primary"))</code> and a second name for the backup.</li>
<li>Read: <code>monitor.Get("primary")</code>. <code>IOptionsSnapshot&lt;T&gt;.Get(name)</code> works too. <code>IOptions&lt;T&gt;</code> does not support names.</li>
<li>The unnamed <code>.Value</code> / <code>CurrentValue</code> reads the default (empty) name, so it does not return the named ones.</li>
<li>Validation can be per name: <code>AddOptions&lt;T&gt;("primary").Validate(...)</code>.</li>
<li>Follow-up: "Alternative?" — a list/dictionary in one options class, or keyed services (Day 9) for per-name clients.</li>
</ul>`,
        hi: `<ul>
<li>Register: <code>services.Configure&lt;MailOptions&gt;("primary", config.GetSection("Mail:Primary"))</code> और backup के लिए दूसरा नाम।</li>
<li>पढ़ना: <code>monitor.Get("primary")</code>। <code>IOptionsSnapshot&lt;T&gt;.Get(name)</code> भी चलता है। <code>IOptions&lt;T&gt;</code> names support नहीं करता।</li>
<li>बिना नाम का <code>.Value</code> / <code>CurrentValue</code> default (खाली) नाम पढ़ता है, इसलिए named वाले नहीं लौटाता।</li>
<li>Validation नाम के हिसाब से हो सकता है: <code>AddOptions&lt;T&gt;("primary").Validate(...)</code>।</li>
<li>Follow-up: "विकल्प?" — एक options class में list/dictionary, या हर नाम के clients के लिए keyed services (Day 9)।</li>
</ul>`,
        hg: `<ul>
<li>Register: <code>services.Configure&lt;MailOptions&gt;("primary", config.GetSection("Mail:Primary"))</code> aur backup ke liye doosra naam.</li>
<li>Padhna: <code>monitor.Get("primary")</code>. <code>IOptionsSnapshot&lt;T&gt;.Get(name)</code> bhi chalta hai. <code>IOptions&lt;T&gt;</code> names support nahi karta.</li>
<li>Bina naam ka <code>.Value</code> / <code>CurrentValue</code> default (khali) naam padhta hai, isliye named wale nahi lautata.</li>
<li>Validation naam ke hisaab se ho sakta hai: <code>AddOptions&lt;T&gt;("primary").Validate(...)</code>.</li>
<li>Follow-up: "Vikalp?" — ek options class mein list/dictionary, ya har naam ke clients ke liye keyed services (Day 9).</li>
</ul>`
      }
    },
    {
      id: "snapshot-in-singleton",
      depth: "detailed",
      q: "Why can't you inject IOptionsSnapshot into a singleton, and what do you use instead?",
      answer: "IOptionsSnapshot is scoped, so a singleton would capture one scope's value forever, a captive dependency. Use IOptionsMonitor in singletons, or create a scope when you need the snapshot.",
      meaning: {
        hi: "IOptionsSnapshot scoped है, इसलिए singleton एक scope की value हमेशा के लिए पकड़ लेगा, captive dependency। singletons में IOptionsMonitor use करो, या snapshot चाहिए तो scope बनाओ।",
        hg: "IOptionsSnapshot scoped hai, isliye singleton ek scope ki value hamesha ke liye pakad lega, captive dependency. Singletons mein IOptionsMonitor use karo, ya snapshot chahiye to scope banao."
      },
      explain: {
        en: `<ul>
<li>It is an ordinary lifetime rule (Day 8), applied to options: scoped service inside singleton.</li>
<li>With scope validation on, resolving such a singleton throws; without it, you silently get a stale snapshot.</li>
<li><code>IOptionsMonitor&lt;T&gt;.CurrentValue</code> reads the latest value on each access; <code>OnChange</code> tells you when to refresh a cached object (a client built from the options).</li>
<li>Follow-up: "Is IOptions&lt;T&gt; fine in a singleton?" — yes, it is a singleton, but it never sees reloads.</li>
</ul>`,
        hi: `<ul>
<li>यह सामान्य lifetime rule (Day 8) है, options पर लागू: singleton के अंदर scoped service।</li>
<li>scope validation चालू हो तो ऐसे singleton को resolve करने पर exception आती है; वरना चुपचाप पुराना snapshot मिलता है।</li>
<li><code>IOptionsMonitor&lt;T&gt;.CurrentValue</code> हर access पर ताज़ा value पढ़ता है; <code>OnChange</code> बताता है कि cached object (options से बना client) कब refresh करें।</li>
<li>Follow-up: "क्या singleton में IOptions&lt;T&gt; ठीक है?" — हाँ, वह singleton है, पर reload कभी नहीं देखता।</li>
</ul>`,
        hg: `<ul>
<li>Yeh saamanya lifetime rule (Day 8) hai, options par laagu: singleton ke andar scoped service.</li>
<li>Scope validation chaalu ho to aise singleton ko resolve karne par exception aati hai; warna chupchaap purana snapshot milta hai.</li>
<li><code>IOptionsMonitor&lt;T&gt;.CurrentValue</code> har access par taaza value padhta hai; <code>OnChange</code> batata hai ki cached object (options se bana client) kab refresh karein.</li>
<li>Follow-up: "Kya singleton mein IOptions&lt;T&gt; theek hai?" — haan, woh singleton hai, par reload kabhi nahi dekhta.</li>
</ul>`
      }
    },
    {
      id: "validatescopes-vs-validateonbuild",
      depth: "detailed",
      q: "What is the difference between ValidateScopes and ValidateOnBuild?",
      answer: "ValidateScopes checks lifetimes at resolve time: no scoped service from the root provider, no singleton consuming scoped. ValidateOnBuild checks at build time that every registration can be constructed.",
      meaning: {
        hi: "ValidateScopes resolve के वक़्त lifetimes जाँचता है: root provider से scoped नहीं, singleton scoped consume नहीं करे। ValidateOnBuild build के वक़्त जाँचता है कि हर registration बन सकती है।",
        hg: "ValidateScopes resolve ke waqt lifetimes jaanchta hai: root provider se scoped nahi, singleton scoped consume nahi kare. ValidateOnBuild build ke waqt jaanchta hai ki har registration ban sakti hai."
      },
      explain: {
        en: `<ul>
<li><code>ValidateOnBuild</code> alone: a missing dependency throws an <code>AggregateException</code> from <code>BuildServiceProvider</code> instead of an <code>InvalidOperationException</code> on first resolve; it does not report a singleton-consuming-scoped mistake.</li>
<li>Both on: the captive dependency is reported at build too (see the puzzle on this day).</li>
<li>Limits: open generics and factory lambdas cannot be fully checked at build time, and services resolved with <code>GetRequiredService</code> inside your own code (service locator, Day 8) are checked only when that code runs.</li>
<li>Defaults: both on in Development for the generic host and <code>WebApplication.CreateBuilder</code>, off otherwise and off for a provider you build by hand.</li>
</ul>`,
        hi: `<ul>
<li>अकेला <code>ValidateOnBuild</code>: गायब dependency पर <code>BuildServiceProvider</code> से <code>AggregateException</code> आती है, पहले resolve पर <code>InvalidOperationException</code> की जगह; singleton-consuming-scoped गलती यह report नहीं करता।</li>
<li>दोनों चालू: captive dependency भी build पर report होती है (इस दिन का puzzle देखो)।</li>
<li>सीमाएँ: open generics और factory lambdas build पर पूरी तरह जाँचे नहीं जा सकते, और आपके अपने code में <code>GetRequiredService</code> से resolve होने वाली services (service locator, Day 8) सिर्फ़ तब जाँची जाती हैं जब वह code चले।</li>
<li>Defaults: generic host और <code>WebApplication.CreateBuilder</code> में Development में दोनों चालू, वरना बंद; हाथ से बनाए provider में भी बंद।</li>
</ul>`,
        hg: `<ul>
<li>Akela <code>ValidateOnBuild</code>: gayab dependency par <code>BuildServiceProvider</code> se <code>AggregateException</code> aati hai, pehle resolve par <code>InvalidOperationException</code> ki jagah; singleton-consuming-scoped galti yeh report nahi karta.</li>
<li>Dono chaalu: captive dependency bhi build par report hoti hai (is din ka puzzle dekho).</li>
<li>Seemayein: open generics aur factory lambdas build par poori tarah jaanche nahi ja sakte, aur aapke apne code mein <code>GetRequiredService</code> se resolve hone wali services (service locator, Day 8) sirf tab jaanchi jaati hain jab woh code chale.</li>
<li>Defaults: generic host aur <code>WebApplication.CreateBuilder</code> mein Development mein dono chaalu, warna band; haath se banaye provider mein bhi band.</li>
</ul>`
      }
    },
    {
      id: "scoped-from-root-and-disposal",
      depth: "detailed",
      q: "What happens if you resolve a scoped service from the root provider, and who disposes services?",
      answer: "Without validation it works but lives until the root provider is disposed; with ValidateScopes it throws. The container disposes only instances it created, when their scope or provider is disposed.",
      meaning: {
        hi: "validation के बिना यह चलता है पर root provider dispose होने तक singleton जैसा जीता है। ValidateScopes के साथ exception आती है। container सिर्फ़ वही instances dispose करता है जो उसने बनाए, जब उनका scope या provider dispose हो।",
        hg: "Validation ke bina yeh chalta hai par root provider dispose hone tak singleton jaisa jeeta hai. ValidateScopes ke saath exception aati hai. Container sirf wahi instances dispose karta hai jo usne banaye, jab unka scope ya provider dispose ho."
      },
      explain: {
        en: `<ul>
<li>Error text with validation on: <i>"Cannot resolve scoped service ... from root provider."</i> (printed in the puzzle).</li>
<li>Disposal: scoped and transient <code>IDisposable</code>/<code>IAsyncDisposable</code> services created by a scope are disposed with that scope. Transients from the root pile up until provider disposal (Day 8).</li>
<li>Instances you register yourself (<code>AddSingleton(instance)</code>) are <b>not</b> disposed by the container; factory-created ones are.</li>
<li>Do not dispose an injected dependency yourself (Day 7 shows this for <code>DbContext</code>); its owner (the container) does.</li>
<li>Follow-up: "Why prefer CreateAsyncScope?" — a scope holding async-only disposables needs async disposal.</li>
</ul>`,
        hi: `<ul>
<li>validation चालू होने पर error text: <i>"Cannot resolve scoped service ... from root provider."</i> (puzzle में छपता है)।</li>
<li>Disposal: scope से बनी scoped और transient <code>IDisposable</code>/<code>IAsyncDisposable</code> services उसी scope के साथ dispose होती हैं। root की transients provider dispose होने तक जमा रहती हैं (Day 8)।</li>
<li>जो instances आप खुद register करते हो (<code>AddSingleton(instance)</code>) उन्हें container dispose <b>नहीं</b> करता; factory से बने instances करता है।</li>
<li>injected dependency को खुद dispose मत करो (Day 7 में <code>DbContext</code> के लिए दिखाया है); उसका मालिक (container) करता है।</li>
<li>Follow-up: "CreateAsyncScope क्यों बेहतर?" — async-only disposables वाले scope को async disposal चाहिए।</li>
</ul>`,
        hg: `<ul>
<li>Validation chaalu hone par error text: <i>"Cannot resolve scoped service ... from root provider."</i> (puzzle mein chhapta hai).</li>
<li>Disposal: scope se bani scoped aur transient <code>IDisposable</code>/<code>IAsyncDisposable</code> services usi scope ke saath dispose hoti hain. Root ki transients provider dispose hone tak jama rehti hain (Day 8).</li>
<li>Jo instances aap khud register karte ho (<code>AddSingleton(instance)</code>) unhe container dispose <b>nahi</b> karta; factory se bane instances karta hai.</li>
<li>Injected dependency ko khud dispose mat karo (Day 7 mein <code>DbContext</code> ke liye dikhaya hai); uska maalik (container) karta hai.</li>
<li>Follow-up: "CreateAsyncScope kyon behtar?" — async-only disposables wale scope ko async disposal chahiye.</li>
</ul>`
      }
    },
    {
      id: "options-vs-iconfiguration",
      depth: "detailed",
      q: "Why use the Options pattern instead of injecting IConfiguration everywhere?",
      answer: "Options give typed, validated, testable settings with no magic strings. Injecting IConfiguration spreads string keys through the code and hides which settings a class needs.",
      meaning: {
        hi: "Options typed, validated, testable settings देते हैं, magic strings के बिना। हर जगह IConfiguration inject करने से string keys code में फैलती हैं और छुप जाता है कि class को कौन सी settings चाहिए।",
        hg: "Options typed, validated, testable settings dete hain, magic strings ke bina. Har jagah IConfiguration inject karne se string keys code mein phailti hain aur chhup jaata hai ki class ko kaun si settings chahiye."
      },
      explain: {
        en: `<ul>
<li>A class that takes <code>IOptions&lt;MailOptions&gt;</code> declares its settings in its constructor; tests just create <code>Options.Create(new MailOptions {...})</code>.</li>
<li>Binding converts types (int, TimeSpan, enums, lists) and validation catches mistakes at startup.</li>
<li>Acceptable use of <code>IConfiguration</code>: composition-root code (<code>Program.cs</code>) that wires registrations, e.g. reading a connection string.</li>
<li>Follow-up: "Where do secrets come from?" — user secrets in development; environment variables, a key vault or the platform's secret store in production, never committed files.</li>
</ul>`,
        hi: `<ul>
<li><code>IOptions&lt;MailOptions&gt;</code> लेने वाली class अपनी settings constructor में बताती है; tests बस <code>Options.Create(new MailOptions {...})</code> बनाते हैं।</li>
<li>Binding types बदलती है (int, TimeSpan, enums, lists) और validation गलतियाँ startup पर पकड़ता है।</li>
<li><code>IConfiguration</code> का ठीक उपयोग: composition-root code (<code>Program.cs</code>) जो registrations जोड़ता है, जैसे connection string पढ़ना।</li>
<li>Follow-up: "Secrets कहाँ से आते हैं?" — development में user secrets; production में environment variables, key vault या platform का secret store, commit हुई files से कभी नहीं।</li>
</ul>`,
        hg: `<ul>
<li><code>IOptions&lt;MailOptions&gt;</code> lene wali class apni settings constructor mein batati hai; tests bas <code>Options.Create(new MailOptions {...})</code> banate hain.</li>
<li>Binding types badalti hai (int, TimeSpan, enums, lists) aur validation galtiyan startup par pakadta hai.</li>
<li><code>IConfiguration</code> ka theek upyog: composition-root code (<code>Program.cs</code>) jo registrations jodta hai, jaise connection string padhna.</li>
<li>Follow-up: "Secrets kahan se aate hain?" — development mein user secrets; production mein environment variables, key vault ya platform ka secret store, commit hui files se kabhi nahi.</li>
</ul>`
      }
    }
  ],
  puzzles: [
    {
      id: "transient-captured-by-singleton",
      packages: ["Microsoft.Extensions.DependencyInjection"],
      src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddTransient<Ticket>();
services.AddSingleton<Printer>();

using var provider = services.BuildServiceProvider(new ServiceProviderOptions
{
    ValidateScopes = true,
    ValidateOnBuild = true
});
Console.WriteLine("validation passed");

using var a = provider.CreateScope();
using var b = provider.CreateScope();
var printerA = a.ServiceProvider.GetRequiredService<Printer>();
var printerB = b.ServiceProvider.GetRequiredService<Printer>();

Console.WriteLine("same printer: " + ReferenceEquals(printerA, printerB));
Console.WriteLine("ticket held by printer: " + printerA.Ticket.Number);
Console.WriteLine("fresh ticket number: " + a.ServiceProvider.GetRequiredService<Ticket>().Number);
Console.WriteLine("same ticket in both: " + ReferenceEquals(printerA.Ticket, printerB.Ticket));

class Ticket
{
    private static int _next;
    public int Number { get; } = ++_next;
}

class Printer(Ticket ticket)
{
    public Ticket Ticket { get; } = ticket;
}`,
      answer: `validation passed
same printer: True
ticket held by printer: 1
fresh ticket number: 2
same ticket in both: True`,
      explain: {
        en: `<p>Both validations pass: <code>ValidateScopes</code> only checks <b>scoped</b> services, so a transient injected into a singleton is not reported. The <code>Printer</code> singleton is built once, receives <code>Ticket</code> number 1 and keeps it for the app's life; a fresh resolve gives a new ticket (2). "Transient" only means "new per resolve", and the singleton resolved it once. If the transient holds state or is <code>IDisposable</code>, this is a quiet bug: resolve it per use (factory or scope) instead.</p>`,
        hi: `<p>दोनों validations पास हो जाते हैं: <code>ValidateScopes</code> सिर्फ़ <b>scoped</b> services जाँचता है, इसलिए singleton में inject हुआ transient report नहीं होता। <code>Printer</code> singleton एक बार बनता है, उसे <code>Ticket</code> नंबर 1 मिलता है और वह app की पूरी उम्र उसे रखता है; नया resolve नया ticket (2) देता है। "Transient" का मतलब बस "हर resolve पर नया" है, और singleton ने उसे एक ही बार resolve किया। transient में state हो या वह <code>IDisposable</code> हो तो यह चुपचाप का bug है: उसे हर इस्तेमाल पर (factory या scope से) resolve करो।</p>`,
        hg: `<p>Dono validations pass ho jaate hain: <code>ValidateScopes</code> sirf <b>scoped</b> services jaanchta hai, isliye singleton mein inject hua transient report nahi hota. <code>Printer</code> singleton ek baar banta hai, use <code>Ticket</code> number 1 milta hai aur woh app ki poori umar use rakhta hai; naya resolve naya ticket (2) deta hai. "Transient" ka matlab bas "har resolve par naya" hai, aur singleton ne use ek hi baar resolve kiya. Transient mein state ho ya woh <code>IDisposable</code> ho to yeh chupchaap ka bug hai: use har istemaal par (factory ya scope se) resolve karo.</p>`
      }
    },
    {
      id: "captive-observed-value",
      packages: ["Microsoft.Extensions.DependencyInjection"],
      src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddScoped<RequestCounter>();
services.AddSingleton<Report>();

using var root = services.BuildServiceProvider();   // validation is off by default here

var report = root.GetRequiredService<Report>();
report.Counter.Value = 42;                          // changes the captured scoped object

using (var scope = root.CreateScope())
{
    var counter = scope.ServiceProvider.GetRequiredService<RequestCounter>();
    Console.WriteLine("a new request sees: " + counter.Value);
}
Console.WriteLine("the singleton still holds: " + report.Counter.Value);

class RequestCounter { public int Value { get; set; } }
class Report(RequestCounter counter) { public RequestCounter Counter { get; } = counter; }`,
      answer: `a new request sees: 0
the singleton still holds: 42`,
      explain: {
        en: `<p>The singleton <code>Report</code> was resolved from the root provider, so its <code>RequestCounter</code> came from the root and stays captive for the app's life. A new scope creates its own <code>RequestCounter</code> (value 0). Nothing warns you because the manually built provider has validation off. With <code>ValidateScopes</code> on, resolving this singleton throws; the build itself is rejected only when <code>ValidateOnBuild</code> is also on.</p>`,
        hi: `<p>singleton <code>Report</code> root provider से resolve हुआ, इसलिए उसका <code>RequestCounter</code> root से आया और app की पूरी उम्र captive रहता है। नया scope अपना <code>RequestCounter</code> बनाता है (value 0)। कोई चेतावनी नहीं आती क्योंकि हाथ से बने provider में validation बंद है। <code>ValidateScopes</code> चालू हो तो इस singleton को resolve करने पर exception आती है; build तभी reject होता है जब <code>ValidateOnBuild</code> भी चालू हो।</p>`,
        hg: `<p>singleton <code>Report</code> root provider se resolve hua, isliye uska <code>RequestCounter</code> root se aaya aur app ki poori umar captive rehta hai. Naya scope apna <code>RequestCounter</code> banata hai (value 0). Koi chetavni nahi aati kyunki haath se bane provider mein validation band hai. <code>ValidateScopes</code> chaalu ho to is singleton ko resolve karne par exception aati hai; build tabhi reject hota hai jab <code>ValidateOnBuild</code> bhi chaalu ho.</p>`
      }
    },
    {
      id: "validate-scopes-on-build",
      packages: ["Microsoft.Extensions.DependencyInjection"],
      src: `using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddScoped<RequestCounter>();
services.AddSingleton<Report>();

// 1) ValidateOnBuild alone
using (services.BuildServiceProvider(new ServiceProviderOptions { ValidateOnBuild = true }))
{
    Console.WriteLine("ValidateOnBuild only: built");
}

// 2) ValidateOnBuild + ValidateScopes
try
{
    services.BuildServiceProvider(new ServiceProviderOptions { ValidateOnBuild = true, ValidateScopes = true });
    Console.WriteLine("both: built");
}
catch (Exception ex)
{
    Console.WriteLine("both: " + ex.GetType().Name);
    Console.WriteLine(ex.Message.Contains("Cannot consume scoped service"));
}

// 3) ValidateScopes: scoped service from the root provider
using var strict = services.BuildServiceProvider(new ServiceProviderOptions { ValidateScopes = true });
try
{
    strict.GetRequiredService<RequestCounter>();
}
catch (InvalidOperationException ex)
{
    Console.WriteLine(ex.Message);
}

class RequestCounter { }
class Report(RequestCounter counter) { public RequestCounter Counter { get; } = counter; }`,
      answer: `ValidateOnBuild only: built
both: AggregateException
True
Cannot resolve scoped service 'RequestCounter' from root provider.`,
      explain: {
        en: `<p><code>ValidateOnBuild</code> only checks that every registration can be constructed; here every dependency exists, so it builds, even though the registration is a captive dependency. With <code>ValidateScopes</code> also on, build reports it (wrapped in an <code>AggregateException</code>: "Cannot consume scoped service ... from singleton ..."). Step 3 shows the resolve-time check: a scoped service cannot come from the root provider.</p>`,
        hi: `<p><code>ValidateOnBuild</code> सिर्फ़ यह जाँचता है कि हर registration बन सकती है; यहाँ हर dependency मौजूद है, इसलिए build हो जाता है, भले ही registration captive dependency हो। <code>ValidateScopes</code> भी चालू हो तो build उसे report करता है (<code>AggregateException</code> में लिपटा: "Cannot consume scoped service ... from singleton ...")। Step 3 resolve-time check दिखाता है: scoped service root provider से नहीं आ सकती।</p>`,
        hg: `<p><code>ValidateOnBuild</code> sirf yeh jaanchta hai ki har registration ban sakti hai; yahan har dependency maujood hai, isliye build ho jaata hai, bhale hi registration captive dependency ho. <code>ValidateScopes</code> bhi chaalu ho to build use report karta hai (<code>AggregateException</code> mein lipta: "Cannot consume scoped service ... from singleton ..."). Step 3 resolve-time check dikhata hai: scoped service root provider se nahi aa sakti.</p>`
      }
    },
    {
      id: "options-reload-three-ways",
      packages: ["Microsoft.Extensions.Options.ConfigurationExtensions", "Microsoft.Extensions.Configuration", "Microsoft.Extensions.DependencyInjection"],
      src: `using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

var config = new ConfigurationBuilder()
    .AddInMemoryCollection(new Dictionary<string, string?> { ["Shop:Name"] = "v1" })
    .Build();

var services = new ServiceCollection();
services.Configure<ShopOptions>(config.GetSection("Shop"));
using var root = services.BuildServiceProvider();

var options = root.GetRequiredService<IOptions<ShopOptions>>();
var monitor = root.GetRequiredService<IOptionsMonitor<ShopOptions>>();
monitor.OnChange(o => Console.WriteLine("OnChange: " + o.Name));

using var oldScope = root.CreateScope();
var oldSnapshot = oldScope.ServiceProvider.GetRequiredService<IOptionsSnapshot<ShopOptions>>();
Console.WriteLine($"before: options={options.Value.Name} snapshot={oldSnapshot.Value.Name}");

config["Shop:Name"] = "v2";
config.Reload();                       // tells the options system the source changed

using var newScope = root.CreateScope();
var newSnapshot = newScope.ServiceProvider.GetRequiredService<IOptionsSnapshot<ShopOptions>>();
Console.WriteLine("IOptions: " + options.Value.Name);
Console.WriteLine("old scope snapshot: " + oldSnapshot.Value.Name);
Console.WriteLine("new scope snapshot: " + newSnapshot.Value.Name);
Console.WriteLine("monitor: " + monitor.CurrentValue.Name);

class ShopOptions { public string Name { get; set; } = ""; }`,
      answer: `before: options=v1 snapshot=v1
OnChange: v2
IOptions: v1
old scope snapshot: v1
new scope snapshot: v2
monitor: v2`,
      explain: {
        en: `<p>The reload fires <code>OnChange</code> once (monitor). <code>IOptions</code> is a singleton computed on first read, so it keeps <code>v1</code>. A snapshot is computed once per scope: the scope that already read it keeps <code>v1</code>, a new scope gets <code>v2</code>. The monitor always returns the latest value. (An in-memory source needs an explicit <code>Reload()</code>; a JSON file with <code>reloadOnChange</code> triggers it for you.)</p>`,
        hi: `<p>reload <code>OnChange</code> को एक बार चलाता है (monitor)। <code>IOptions</code> singleton है जो पहली बार पढ़ने पर बनता है, इसलिए <code>v1</code> रखता है। snapshot हर scope में एक बार बनता है: जिस scope ने पहले पढ़ लिया वह <code>v1</code> रखता है, नया scope <code>v2</code> पाता है। monitor हमेशा ताज़ा value लौटाता है। (in-memory source को explicit <code>Reload()</code> चाहिए; <code>reloadOnChange</code> वाली JSON file यह खुद चला देती है।)</p>`,
        hg: `<p>reload <code>OnChange</code> ko ek baar chalata hai (monitor). <code>IOptions</code> singleton hai jo pehli baar padhne par banta hai, isliye <code>v1</code> rakhta hai. Snapshot har scope mein ek baar banta hai: jis scope ne pehle padh liya woh <code>v1</code> rakhta hai, naya scope <code>v2</code> paata hai. Monitor hamesha taaza value lautata hai. (in-memory source ko explicit <code>Reload()</code> chahiye; <code>reloadOnChange</code> wali JSON file yeh khud chala deti hai.)</p>`
      }
    },
    {
      id: "repository-iqueryable-vs-list",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopDb>().UseSqlite(connection).Options;
using var db = new ShopDb(options);
db.Database.EnsureCreated();
db.Products.AddRange(
    new Product { Name = "Pen", Price = 5 },
    new Product { Name = "Bag", Price = 500 },
    new Product { Name = "Book", Price = 120 });
db.SaveChanges();

var repo = new ProductRepository(db);

// Repository returns IQueryable: the caller's filter becomes part of the SQL.
var expensive = repo.Query().Where(p => p.Price > 100).OrderBy(p => p.Name);
Console.WriteLine("SQL has WHERE: " + expensive.ToQueryString().Contains("WHERE"));
Console.WriteLine("rows from IQueryable: " + expensive.Count());

// Repository returns a List: everything is loaded first, the filter runs in memory.
var all = repo.GetAll();
Console.WriteLine("rows loaded by GetAll: " + all.Count);
Console.WriteLine("rows after in-memory filter: " + all.Count(p => p.Price > 100));

class Product { public int Id { get; set; } public string Name { get; set; } = ""; public decimal Price { get; set; } }

class ShopDb(DbContextOptions<ShopDb> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
}

class ProductRepository(ShopDb db)
{
    public IQueryable<Product> Query() => db.Products.AsNoTracking();
    public List<Product> GetAll() => db.Products.AsNoTracking().ToList();
}`,
      answer: `SQL has WHERE: True
rows from IQueryable: 2
rows loaded by GetAll: 3
rows after in-memory filter: 2`,
      explain: {
        en: `<p>With <code>IQueryable</code> nothing runs until <code>Count()</code>, and the caller's <code>Where</code> and <code>OrderBy</code> are translated into one SQL statement (<code>ToQueryString()</code> shows the <code>WHERE</code>). <code>GetAll()</code> returns a <code>List</code>: all 3 rows are loaded, then LINQ to Objects filters to 2. Same answer, very different cost on a big table. This is the trade-off behind returning <code>IQueryable</code> (Day 4: deferred execution; Day 6: generated SQL).</p>`,
        hi: `<p><code>IQueryable</code> के साथ <code>Count()</code> तक कुछ नहीं चलता, और caller का <code>Where</code> व <code>OrderBy</code> एक SQL statement में translate होते हैं (<code>ToQueryString()</code> में <code>WHERE</code> दिखता है)। <code>GetAll()</code> <code>List</code> लौटाता है: सारी 3 rows load होती हैं, फिर LINQ to Objects 2 तक filter करता है। जवाब वही, बड़ी table पर कीमत बहुत अलग। यही <code>IQueryable</code> लौटाने का trade-off है (Day 4: deferred execution; Day 6: generated SQL)।</p>`,
        hg: `<p><code>IQueryable</code> ke saath <code>Count()</code> tak kuch nahi chalta, aur caller ka <code>Where</code> va <code>OrderBy</code> ek SQL statement mein translate hote hain (<code>ToQueryString()</code> mein <code>WHERE</code> dikhta hai). <code>GetAll()</code> <code>List</code> lautata hai: saari 3 rows load hoti hain, phir LINQ to Objects 2 tak filter karta hai. Jawab wahi, badi table par keemat bahut alag. Yahi <code>IQueryable</code> lautane ka trade-off hai (Day 4: deferred execution; Day 6: generated SQL).</p>`
      }
    },
    {
      id: "unit-of-work-shared-context",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopDb>().UseSqlite(connection).Options;
using var db = new ShopDb(options);
db.Database.EnsureCreated();

var products = new ProductRepository(db);
var orders = new OrderRepository(db);
Console.WriteLine("same context: " + ReferenceEquals(products.Context, orders.Context));

products.Add(new Product { Name = "Pen" });
orders.Add(new Order { Note = "first" });
Console.WriteLine("pending changes: " + db.ChangeTracker.HasChanges());
Console.WriteLine($"in database before save: {await db.Products.CountAsync()} products, {await db.Orders.CountAsync()} orders");

var written = await db.SaveChangesAsync();
Console.WriteLine("rows written: " + written);
Console.WriteLine("pending changes: " + db.ChangeTracker.HasChanges());
Console.WriteLine($"in database after save: {await db.Products.CountAsync()} products, {await db.Orders.CountAsync()} orders");

class Product { public int Id { get; set; } public string Name { get; set; } = ""; }
class Order { public int Id { get; set; } public string Note { get; set; } = ""; }

class ShopDb(DbContextOptions<ShopDb> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Order> Orders => Set<Order>();
}

class ProductRepository(ShopDb db)
{
    public ShopDb Context { get; } = db;
    public void Add(Product p) => Context.Products.Add(p);
}

class OrderRepository(ShopDb db)
{
    public ShopDb Context { get; } = db;
    public void Add(Order o) => Context.Orders.Add(o);
}`,
      answer: `same context: True
pending changes: True
in database before save: 0 products, 0 orders
rows written: 2
pending changes: False
in database after save: 1 products, 1 orders`,
      explain: {
        en: `<p>Both repositories got the same <code>DbContext</code>, so both <code>Add</code> calls went into one change tracker. Nothing reaches the database until <code>SaveChangesAsync</code>, which writes both rows together (2 rows, in one transaction). That shared context plus <code>SaveChanges</code> is the unit of work; the repositories never called save themselves.</p>`,
        hi: `<p>दोनों repositories को वही <code>DbContext</code> मिला, इसलिए दोनों <code>Add</code> calls एक change tracker में गईं। <code>SaveChangesAsync</code> तक database में कुछ नहीं पहुँचता, जो दोनों rows साथ लिखता है (2 rows, एक transaction में)। यह साझा context और <code>SaveChanges</code> ही unit of work है; repositories ने खुद save नहीं बुलाया।</p>`,
        hg: `<p>Dono repositories ko wahi <code>DbContext</code> mila, isliye dono <code>Add</code> calls ek change tracker mein gayin. <code>SaveChangesAsync</code> tak database mein kuch nahi pahunchta, jo dono rows saath likhta hai (2 rows, ek transaction mein). Yeh saajha context aur <code>SaveChanges</code> hi unit of work hai; repositories ne khud save nahi bulaya.</p>`
      }
    }
  ],
  revision: {
    en: [
      "DbSet is already a repository and DbContext is already a unit of work; wrap them only for a clear reason.",
      "A thin generic IRepository over EF Core hides EF features and adds a file per entity.",
      "Returning IQueryable composes into one SQL query but leaks EF; returning a list or DTO is a stable boundary that loads more.",
      "Two repositories sharing one scoped DbContext commit together with one SaveChanges.",
      "CQRS means separate models for commands (write) and queries (read); it does not need two databases.",
      "CQRS pays off when reads and writes differ a lot, and is overkill for plain CRUD.",
      "MediatR is optional and under a commercial licence since 2025, so check its current terms.",
      "A hand-rolled dispatcher plus decorators gives pipeline behaviours without any library.",
      "IOptions is read once, IOptionsSnapshot is per scope, IOptionsMonitor is live with OnChange.",
      "ValidateOnStart makes bad configuration fail at startup, not on the first request.",
      "A captive dependency is a long-lived service holding a short-lived one; ValidateScopes catches singleton to scoped, not singleton to transient.",
      "A BackgroundService is a singleton, so create a scope with IServiceScopeFactory.CreateAsyncScope for each unit of work."
    ],
    meaning: {
      hi: [
        "DbSet पहले से repository और DbContext पहले से unit of work है; साफ़ वजह हो तभी wrap करो।",
        "EF Core के ऊपर पतली generic IRepository EF features छुपाती है और हर entity पर एक file जोड़ती है।",
        "IQueryable लौटाने से एक SQL query बनती है पर EF leak होता है; list या DTO स्थिर boundary है जो ज़्यादा load करता है।",
        "एक scoped DbContext share करने वाली दो repositories एक SaveChanges से साथ commit होती हैं।",
        "CQRS यानी commands (write) और queries (read) के अलग models; इसे दो databases नहीं चाहिए।",
        "CQRS तब फ़ायदा देता है जब reads और writes बहुत अलग हों, और सीधे CRUD के लिए overkill है।",
        "MediatR optional है और 2025 से commercial licence में है, इसलिए उसकी मौजूदा terms देखो।",
        "hand-rolled dispatcher और decorators बिना किसी library के pipeline behaviours देते हैं।",
        "IOptions एक बार पढ़ता है, IOptionsSnapshot per scope, IOptionsMonitor live और OnChange के साथ।",
        "ValidateOnStart गलत configuration को startup पर fail कराता है, पहली request पर नहीं।",
        "Captive dependency यानी लंबी उम्र वाली service छोटी उम्र वाली को पकड़े; ValidateScopes singleton से scoped पकड़ता है, singleton से transient नहीं।",
        "BackgroundService singleton है, इसलिए हर काम के लिए IServiceScopeFactory.CreateAsyncScope से scope बनाओ।"
      ],
      hg: [
        "DbSet pehle se repository aur DbContext pehle se unit of work hai; saaf wajah ho tabhi wrap karo.",
        "EF Core ke upar patli generic IRepository EF features chhupati hai aur har entity par ek file jodti hai.",
        "IQueryable lautane se ek SQL query banti hai par EF leak hota hai; list ya DTO sthir boundary hai jo zyada load karta hai.",
        "Ek scoped DbContext share karne wali do repositories ek SaveChanges se saath commit hoti hain.",
        "CQRS yaani commands (write) aur queries (read) ke alag models; ise do databases nahi chahiye.",
        "CQRS tab fayda deta hai jab reads aur writes bahut alag hon, aur seedhe CRUD ke liye overkill hai.",
        "MediatR optional hai aur 2025 se commercial licence mein hai, isliye uski maujooda terms dekho.",
        "Hand-rolled dispatcher aur decorators bina kisi library ke pipeline behaviours dete hain.",
        "IOptions ek baar padhta hai, IOptionsSnapshot per scope, IOptionsMonitor live aur OnChange ke saath.",
        "ValidateOnStart galat configuration ko startup par fail karata hai, pehli request par nahi.",
        "Captive dependency yaani lambi umar wali service chhoti umar wali ko pakde; ValidateScopes singleton se scoped pakadta hai, singleton se transient nahi.",
        "BackgroundService singleton hai, isliye har kaam ke liye IServiceScopeFactory.CreateAsyncScope se scope banao."
      ]
    }
  }
};
