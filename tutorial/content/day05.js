// Day 5 — EF Core Part 1. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 5,
  title: {
    en: "EF Core Part 1 — DbContext and its lifetime, DbSet, Code-First vs DB-First, migrations, relationships, loading, tracking",
    hi: "EF Core Part 1 — DbContext और उसकी lifetime, DbSet, Code-First बनाम DB-First, migrations, relationships, loading, tracking",
    hg: "EF Core Part 1 — DbContext aur uski lifetime, DbSet, Code-First vs DB-First, migrations, relationships, loading, tracking"
  },
  summary: {
    en: `<p>Today is <b>EF Core, Part 1</b>. You already know SQL Server well. EF Core is not new magic: it <b>writes the SQL you already know</b> (SELECT, JOIN, INSERT, UPDATE, DELETE, CREATE TABLE, ALTER TABLE) from your C# classes and LINQ. Today we connect each EF Core idea to that SQL, so it stops feeling like a black box.</p>
<ul>
<li><b>DbContext and DbSet</b> — one DbContext is one working session with the database. <code>DbSet&lt;Customer&gt;</code> is the <code>Customers</code> table you can query with LINQ.</li>
<li><b>Lifetime</b> — in ASP.NET Core, <code>AddDbContext</code> registers it as <b>Scoped</b> (one per HTTP request). It is <b>not thread-safe</b>, so it should never be a singleton.</li>
<li><b>Code-First vs DB-First</b> — either C# classes are the source of truth (and <b>migrations</b> create the tables), or an existing database is the truth (and <b>scaffolding</b> creates the classes).</li>
<li><b>Relationships</b> — 1:1, 1:N and N:N become foreign keys, unique indexes and join tables.</li>
<li><b>Loading related data</b> — eager (<code>Include</code> → a JOIN), explicit (<code>Load()</code> when you ask), lazy (a query on first access).</li>
<li><b>Tracking vs AsNoTracking</b> — the change tracker remembers what you loaded, so <code>SaveChanges()</code> knows which INSERT/UPDATE/DELETE to send.</li>
</ul>
<p>One line to remember for the whole day: <b>EF Core is a smart clerk who writes SQL for you — so always know what SQL he wrote.</b> (Day 6 continues with N+1, projections, raw SQL, transactions, concurrency and performance.)</p>`,
    hi: `<p>आज का topic है <b>EF Core, Part 1</b>। SQL Server आप अच्छे से जानते हो। EF Core कोई नया जादू नहीं है: यह आपकी C# classes और LINQ से <b>वही SQL लिखता है जो आप पहले से जानते हो</b> (SELECT, JOIN, INSERT, UPDATE, DELETE, CREATE TABLE, ALTER TABLE)। आज हम EF Core के हर idea को उसी SQL से जोड़ेंगे, ताकि यह black box न लगे।</p>
<ul>
<li><b>DbContext और DbSet</b> — एक DbContext मतलब database के साथ एक working session। <code>DbSet&lt;Customer&gt;</code> वो <code>Customers</code> table है जिसे आप LINQ से query करते हो।</li>
<li><b>Lifetime</b> — ASP.NET Core में <code>AddDbContext</code> इसे <b>Scoped</b> register करता है (हर HTTP request के लिए एक)। यह <b>thread-safe नहीं है</b>, इसलिए इसे singleton कभी नहीं बनाना चाहिए।</li>
<li><b>Code-First बनाम DB-First</b> — या तो C# classes source of truth हैं (और <b>migrations</b> tables बनाते हैं), या पहले से बना database truth है (और <b>scaffolding</b> classes बनाता है)।</li>
<li><b>Relationships</b> — 1:1, 1:N और N:N, foreign keys, unique indexes और join tables बन जाते हैं।</li>
<li><b>Related data loading</b> — eager (<code>Include</code> → एक JOIN), explicit (जब आप कहो तब <code>Load()</code>), lazy (पहली बार access करने पर query)।</li>
<li><b>Tracking बनाम AsNoTracking</b> — change tracker याद रखता है कि आपने क्या load किया, ताकि <code>SaveChanges()</code> को पता हो कि कौन सा INSERT/UPDATE/DELETE भेजना है।</li>
</ul>
<p>पूरे दिन की एक line याद रखो: <b>EF Core एक smart clerk है जो आपके लिए SQL लिखता है — इसलिए हमेशा पता रखो कि उसने कौन सा SQL लिखा।</b> (Day 6 में आगे: N+1, projections, raw SQL, transactions, concurrency और performance।)</p>`,
    hg: `<p>Aaj ka topic hai <b>EF Core, Part 1</b>. SQL Server aap achhe se jaante ho. EF Core koi naya jaadu nahi hai: yeh aapki C# classes aur LINQ se <b>wahi SQL likhta hai jo aap pehle se jaante ho</b> (SELECT, JOIN, INSERT, UPDATE, DELETE, CREATE TABLE, ALTER TABLE). Aaj hum EF Core ke har idea ko usi SQL se jodenge, taaki yeh black box na lage.</p>
<ul>
<li><b>DbContext aur DbSet</b> — ek DbContext matlab database ke saath ek working session. <code>DbSet&lt;Customer&gt;</code> woh <code>Customers</code> table hai jise aap LINQ se query karte ho.</li>
<li><b>Lifetime</b> — ASP.NET Core mein <code>AddDbContext</code> ise <b>Scoped</b> register karta hai (har HTTP request ke liye ek). Yeh <b>thread-safe nahi hai</b>, isliye ise singleton kabhi nahi banana chahiye.</li>
<li><b>Code-First vs DB-First</b> — ya to C# classes source of truth hain (aur <b>migrations</b> tables banate hain), ya pehle se bana database truth hai (aur <b>scaffolding</b> classes banata hai).</li>
<li><b>Relationships</b> — 1:1, 1:N aur N:N, foreign keys, unique indexes aur join tables ban jaate hain.</li>
<li><b>Related data loading</b> — eager (<code>Include</code> → ek JOIN), explicit (jab aap kaho tab <code>Load()</code>), lazy (pehli baar access karne par query).</li>
<li><b>Tracking vs AsNoTracking</b> — change tracker yaad rakhta hai ki aapne kya load kiya, taaki <code>SaveChanges()</code> ko pata ho ki kaunsa INSERT/UPDATE/DELETE bhejna hai.</li>
</ul>
<p>Poore din ki ek line yaad rakho: <b>EF Core ek smart clerk hai jo aapke liye SQL likhta hai — isliye hamesha pata rakho ki usne kaunsa SQL likha.</b> (Day 6 mein aage: N+1, projections, raw SQL, transactions, concurrency aur performance.)</p>`
  },
  sections: [
    {
      id: "dbcontext-basics",
      depth: "short",
      title: {
        en: "DbContext and DbSet — your working session with the database",
        hi: "DbContext और DbSet — database के साथ आपका working session",
        hg: "DbContext aur DbSet — database ke saath aapka working session"
      },
      body: {
        en: `<p><b>Analogy — the bank counter:</b> you reach the counter with a token. The clerk opens the right <b>ledgers</b> (accounts, loans), notes each thing you ask for on a <b>slip</b>, and when you say "that's all", he <b>posts every entry together</b>. Then he closes your session and calls the next token. DbContext is that clerk, the ledgers are the DbSets, the slip is the change tracker, and posting is <code>SaveChanges()</code>.</p>
<ul>
<li><b>DbContext</b> = one session with the database. It opens and closes connections, turns your LINQ into SQL, <b>tracks</b> the objects it loaded, and writes changes back with <code>SaveChanges()</code>.</li>
<li><b>DbSet&lt;T&gt;</b> = one table (entity set). It is an <code>IQueryable&lt;T&gt;</code> (Day 4), so <code>db.Customers.Where(...)</code> becomes a SQL <code>WHERE</code>. You also call <code>Add</code>/<code>Remove</code> on it.</li>
<li><b>Entity</b> = a C# class mapped to a table; one object = one row. A property such as <code>Name</code> = one column.</li>
<li><code>SaveChanges()</code> sends all pending INSERT/UPDATE/DELETE statements, by default inside <b>one transaction</b> — all or nothing.</li>
<li>DbContext is <b>lightweight and short-lived</b>: create one per unit of work (one web request), use it, dispose it. Creating it is cheap; the model is built once and cached.</li>
<li>It is <b>not thread-safe</b>. In ASP.NET Core, <code>AddDbContext</code> registers it as <b>Scoped</b> — one instance per HTTP request.</li>
</ul>
<p><b>When to use:</b> one DbContext per request or per business operation, injected through the constructor. <b>When not:</b> do not keep one DbContext for the whole app (singleton/static) or share it across threads — it grows in memory, holds stale data, and fails on parallel calls.</p>`,
        hi: `<p><b>Analogy — bank का counter:</b> आप token लेकर counter पर पहुँचते हो। Clerk सही <b>ledgers</b> खोलता है (accounts, loans), आपकी हर माँग एक <b>slip</b> पर लिखता है, और जब आप कहते हो "बस इतना ही", वो <b>सारी entries एक साथ post</b> करता है। फिर आपका session बंद करके अगला token बुलाता है। DbContext वही clerk है, ledgers DbSets हैं, slip change tracker है, और post करना <code>SaveChanges()</code> है।</p>
<ul>
<li><b>DbContext</b> = database के साथ एक session। यह connections खोलता-बंद करता है, आपके LINQ को SQL में बदलता है, load किए objects को <b>track</b> करता है, और <code>SaveChanges()</code> से बदलाव वापस लिखता है।</li>
<li><b>DbSet&lt;T&gt;</b> = एक table (entity set)। यह <code>IQueryable&lt;T&gt;</code> है (Day 4), इसलिए <code>db.Customers.Where(...)</code> SQL का <code>WHERE</code> बन जाता है। इसी पर <code>Add</code>/<code>Remove</code> भी call करते हो।</li>
<li><b>Entity</b> = table से map हुई एक C# class; एक object = एक row। <code>Name</code> जैसी property = एक column।</li>
<li><code>SaveChanges()</code> सारे pending INSERT/UPDATE/DELETE भेजता है, by default <b>एक transaction</b> के अंदर — या तो सब, या कुछ नहीं।</li>
<li>DbContext <b>हल्का और कम समय के लिए</b> होता है: हर unit of work (एक web request) के लिए एक बनाओ, use करो, dispose करो। इसे बनाना सस्ता है; model एक बार बनकर cache हो जाता है।</li>
<li>यह <b>thread-safe नहीं है</b>। ASP.NET Core में <code>AddDbContext</code> इसे <b>Scoped</b> register करता है — हर HTTP request के लिए एक instance।</li>
</ul>
<p><b>कब use करें:</b> हर request या हर business operation के लिए एक DbContext, constructor से inject करके। <b>कब नहीं:</b> पूरे app के लिए एक ही DbContext (singleton/static) मत रखो और threads के बीच share मत करो — memory बढ़ती जाती है, पुराना data रहता है, और parallel calls पर error आता है।</p>`,
        hg: `<p><b>Analogy — bank ka counter:</b> aap token lekar counter par pahunchte ho. Clerk sahi <b>ledgers</b> kholta hai (accounts, loans), aapki har maang ek <b>slip</b> par likhta hai, aur jab aap kehte ho "bas itna hi", woh <b>saari entries ek saath post</b> karta hai. Phir aapka session band karke agla token bulata hai. DbContext wahi clerk hai, ledgers DbSets hain, slip change tracker hai, aur post karna <code>SaveChanges()</code> hai.</p>
<ul>
<li><b>DbContext</b> = database ke saath ek session. Yeh connections kholta-band karta hai, aapke LINQ ko SQL mein badalta hai, load kiye objects ko <b>track</b> karta hai, aur <code>SaveChanges()</code> se badlaav wapas likhta hai.</li>
<li><b>DbSet&lt;T&gt;</b> = ek table (entity set). Yeh <code>IQueryable&lt;T&gt;</code> hai (Day 4), isliye <code>db.Customers.Where(...)</code> SQL ka <code>WHERE</code> ban jaata hai. Isi par <code>Add</code>/<code>Remove</code> bhi call karte ho.</li>
<li><b>Entity</b> = table se map hui ek C# class; ek object = ek row. <code>Name</code> jaisi property = ek column.</li>
<li><code>SaveChanges()</code> saare pending INSERT/UPDATE/DELETE bhejta hai, by default <b>ek transaction</b> ke andar — ya to sab, ya kuch nahi.</li>
<li>DbContext <b>halka aur kam samay ke liye</b> hota hai: har unit of work (ek web request) ke liye ek banao, use karo, dispose karo. Ise banana sasta hai; model ek baar bankar cache ho jaata hai.</li>
<li>Yeh <b>thread-safe nahi hai</b>. ASP.NET Core mein <code>AddDbContext</code> ise <b>Scoped</b> register karta hai — har HTTP request ke liye ek instance.</li>
</ul>
<p><b>Kab use karein:</b> har request ya har business operation ke liye ek DbContext, constructor se inject karke. <b>Kab nahi:</b> poore app ke liye ek hi DbContext (singleton/static) mat rakho aur threads ke beech share mat karo — memory badhti jaati hai, purana data rehta hai, aur parallel calls par error aata hai.</p>`
      }
    },
    {
      id: "code-first-db-first-basics",
      depth: "short",
      title: {
        en: "Code-First vs Database-First, and what a migration is",
        hi: "Code-First बनाम Database-First, और migration क्या है",
        hg: "Code-First vs Database-First, aur migration kya hai"
      },
      body: {
        en: `<p><b>Analogy — building a house:</b> in a <b>new</b> house, the architect draws the plan first and the builder follows it (Code-First). For an <b>old</b> house, someone measures every room and draws the plan from what already stands (Database-First). Every later change — a new room, a wider door — is a <b>numbered work order</b>, and the house keeps a register of which work orders are done. Those work orders are <b>migrations</b>.</p>
<ul>
<li><b>Code-First</b>: your entity classes + DbContext configuration are the <b>source of truth</b>. EF Core generates the tables from them through migrations.</li>
<li><b>Database-First</b>: an existing database is the truth (often owned by a DBA team). You <b>scaffold</b> (reverse-engineer) entity classes and a DbContext from it: <code>dotnet ef dbcontext scaffold</code> or <code>Scaffold-DbContext</code>. After the DB changes, you scaffold again.</li>
<li>EF Core has <b>no EDMX designer</b> (that was the old EF6 on .NET Framework). In EF Core, "DB-First" means generated C# code, not a visual model.</li>
<li><b>Migration</b> = a C# class with <code>Up()</code> (apply the change) and <code>Down()</code> (undo it), generated by comparing your model with the last <b>model snapshot</b>. Think of it as version control for your schema: <code>ALTER TABLE</code> scripts that EF writes for you.</li>
<li>Applied migrations are recorded in the <code>__EFMigrationsHistory</code> table, so EF knows what is still pending.</li>
</ul>
<p><b>When to use:</b> Code-First for new services where the team owns the schema and wants it reviewed in pull requests. DB-First when the database already exists, is shared by many apps, or is changed by DBAs. <b>When not:</b> do not mix both on the same tables (hand-editing the DB and also running migrations) — the model snapshot and the real schema drift apart.</p>`,
        hi: `<p><b>Analogy — घर बनाना:</b> <b>नए</b> घर में architect पहले नक्शा बनाता है और builder उसे follow करता है (Code-First)। <b>पुराने</b> घर के लिए कोई हर कमरा नापता है और जो पहले से खड़ा है उससे नक्शा बनाता है (Database-First)। बाद का हर बदलाव — नया कमरा, चौड़ा दरवाज़ा — एक <b>numbered work order</b> है, और घर में एक register रहता है कि कौन से work orders हो चुके। यही work orders <b>migrations</b> हैं।</p>
<ul>
<li><b>Code-First</b>: आपकी entity classes + DbContext configuration <b>source of truth</b> हैं। EF Core इन्हीं से migrations के ज़रिए tables बनाता है।</li>
<li><b>Database-First</b>: पहले से बना database truth है (अक्सर DBA team का)। आप उससे entity classes और DbContext <b>scaffold</b> (reverse-engineer) करते हो: <code>dotnet ef dbcontext scaffold</code> या <code>Scaffold-DbContext</code>। DB बदलने के बाद फिर से scaffold करते हो।</li>
<li>EF Core में <b>EDMX designer नहीं है</b> (वो .NET Framework वाले पुराने EF6 में था)। EF Core में "DB-First" मतलब generated C# code, कोई visual model नहीं।</li>
<li><b>Migration</b> = एक C# class जिसमें <code>Up()</code> (बदलाव लगाओ) और <code>Down()</code> (बदलाव वापस लो) होते हैं, जो आपके model को पिछले <b>model snapshot</b> से compare करके बनती है। इसे schema का version control समझो: <code>ALTER TABLE</code> scripts जो EF आपके लिए लिखता है।</li>
<li>Apply हो चुके migrations <code>__EFMigrationsHistory</code> table में दर्ज होते हैं, ताकि EF को पता रहे कि क्या अभी pending है।</li>
</ul>
<p><b>कब use करें:</b> Code-First नई services के लिए, जहाँ schema team का अपना है और उसे pull requests में review करना है। DB-First तब, जब database पहले से है, कई apps share करते हैं, या DBAs उसे बदलते हैं। <b>कब नहीं:</b> एक ही tables पर दोनों मत मिलाओ (DB को हाथ से भी बदलना और migrations भी चलाना) — model snapshot और असली schema अलग-अलग हो जाते हैं।</p>`,
        hg: `<p><b>Analogy — ghar banana:</b> <b>naye</b> ghar mein architect pehle naksha banata hai aur builder use follow karta hai (Code-First). <b>Purane</b> ghar ke liye koi har kamra naapta hai aur jo pehle se khada hai usse naksha banata hai (Database-First). Baad ka har badlaav — naya kamra, chauda darwaaza — ek <b>numbered work order</b> hai, aur ghar mein ek register rehta hai ki kaunse work orders ho chuke. Yahi work orders <b>migrations</b> hain.</p>
<ul>
<li><b>Code-First</b>: aapki entity classes + DbContext configuration <b>source of truth</b> hain. EF Core inhi se migrations ke zariye tables banata hai.</li>
<li><b>Database-First</b>: pehle se bana database truth hai (aksar DBA team ka). Aap usse entity classes aur DbContext <b>scaffold</b> (reverse-engineer) karte ho: <code>dotnet ef dbcontext scaffold</code> ya <code>Scaffold-DbContext</code>. DB badalne ke baad phir se scaffold karte ho.</li>
<li>EF Core mein <b>EDMX designer nahi hai</b> (woh .NET Framework wale purane EF6 mein tha). EF Core mein "DB-First" matlab generated C# code, koi visual model nahi.</li>
<li><b>Migration</b> = ek C# class jismein <code>Up()</code> (badlaav lagao) aur <code>Down()</code> (badlaav wapas lo) hote hain, jo aapke model ko pichhle <b>model snapshot</b> se compare karke banti hai. Ise schema ka version control samjho: <code>ALTER TABLE</code> scripts jo EF aapke liye likhta hai.</li>
<li>Apply ho chuke migrations <code>__EFMigrationsHistory</code> table mein darj hote hain, taaki EF ko pata rahe ki kya abhi pending hai.</li>
</ul>
<p><b>Kab use karein:</b> Code-First nayi services ke liye, jahan schema team ka apna hai aur use pull requests mein review karna hai. DB-First tab, jab database pehle se hai, kai apps share karte hain, ya DBAs use badalte hain. <b>Kab nahi:</b> ek hi tables par dono mat milao (DB ko haath se bhi badalna aur migrations bhi chalana) — model snapshot aur asli schema alag-alag ho jaate hain.</p>`
      }
    },
    {
      id: "relationships-basics",
      depth: "short",
      title: {
        en: "Relationships — 1:1, 1:N and N:N, and the SQL behind them",
        hi: "Relationships — 1:1, 1:N और N:N, और उनके पीछे का SQL",
        hg: "Relationships — 1:1, 1:N aur N:N, aur unke peeche ka SQL"
      },
      body: {
        en: `<p><b>Analogy — a school:</b> each student has <b>one</b> ID card and each ID card belongs to one student (<b>1:1</b>). One class teacher has <b>many</b> students, each student has one class teacher (<b>1:N</b>). A student joins many courses and a course has many students — the school keeps an <b>enrolment register</b> with one line per (student, course) pair (<b>N:N</b>).</p>
<ul>
<li>In C#, a relationship is a <b>navigation property</b>: a reference (<code>Order.Customer</code>) or a collection (<code>Customer.Orders</code>), usually with a <b>foreign key property</b> (<code>Order.CustomerId</code>).</li>
<li>EF Core finds most relationships <b>by convention</b>: a property named <code>CustomerId</code> next to a <code>Customer</code> navigation is the FK. You configure the rest in <code>OnModelCreating</code> with <code>HasOne</code> / <code>WithMany</code> / <code>HasForeignKey</code>.</li>
<li><b>1:N</b> in SQL: the FK column sits on the "many" side (<code>Orders.CustomerId</code>), with an index on it.</li>
<li><b>1:1</b> in SQL: an FK on the dependent side with a <b>unique index</b>, so two rows cannot point to the same parent.</li>
<li><b>N:N</b> in SQL: a <b>join table</b> with a composite primary key. Since EF Core 5, two collection navigations (<code>Student.Courses</code> and <code>Course.Students</code>) are enough — EF creates the join table for you (<b>skip navigations</b>).</li>
<li><b>Required</b> FK (<code>int CustomerId</code>) → <code>NOT NULL</code> + <code>ON DELETE CASCADE</code> by default. <b>Optional</b> FK (<code>int? MentorId</code>) → <code>NULL</code>, no cascade in the database.</li>
</ul>
<p><b>When to use:</b> model the relationships your SQL schema really has, so EF can write the JOINs and keep FKs correct. <b>When not:</b> do not add navigations "just in case" in both directions on every entity — each one is another path for accidental loading and JSON cycles. Add a navigation when code really walks it.</p>`,
        hi: `<p><b>Analogy — एक school:</b> हर student का <b>एक</b> ID card होता है और हर ID card एक ही student का होता है (<b>1:1</b>)। एक class teacher के <b>कई</b> students होते हैं, हर student का एक class teacher (<b>1:N</b>)। एक student कई courses join करता है और एक course में कई students — school एक <b>enrolment register</b> रखता है जिसमें हर (student, course) जोड़ी की एक line होती है (<b>N:N</b>)।</p>
<ul>
<li>C# में relationship एक <b>navigation property</b> है: reference (<code>Order.Customer</code>) या collection (<code>Customer.Orders</code>), आमतौर पर एक <b>foreign key property</b> के साथ (<code>Order.CustomerId</code>)।</li>
<li>EF Core ज़्यादातर relationships <b>convention से</b> पहचान लेता है: <code>Customer</code> navigation के बगल में <code>CustomerId</code> नाम की property FK है। बाकी आप <code>OnModelCreating</code> में <code>HasOne</code> / <code>WithMany</code> / <code>HasForeignKey</code> से configure करते हो।</li>
<li>SQL में <b>1:N</b>: FK column "many" वाली side पर होता है (<code>Orders.CustomerId</code>), उस पर एक index के साथ।</li>
<li>SQL में <b>1:1</b>: dependent side पर FK, एक <b>unique index</b> के साथ, ताकि दो rows एक ही parent को point न कर सकें।</li>
<li>SQL में <b>N:N</b>: composite primary key वाला एक <b>join table</b>। EF Core 5 से दो collection navigations (<code>Student.Courses</code> और <code>Course.Students</code>) काफ़ी हैं — join table EF खुद बनाता है (<b>skip navigations</b>)।</li>
<li><b>Required</b> FK (<code>int CustomerId</code>) → by default <code>NOT NULL</code> + <code>ON DELETE CASCADE</code>। <b>Optional</b> FK (<code>int? MentorId</code>) → <code>NULL</code>, database में कोई cascade नहीं।</li>
</ul>
<p><b>कब use करें:</b> वही relationships model करो जो आपके SQL schema में सच में हैं, ताकि EF JOINs लिख सके और FKs सही रखे। <b>कब नहीं:</b> हर entity पर दोनों तरफ़ navigations "शायद काम आए" सोचकर मत जोड़ो — हर एक accidental loading और JSON cycles का एक और रास्ता है। Navigation तब जोड़ो जब code सच में उस पर चलता हो।</p>`,
        hg: `<p><b>Analogy — ek school:</b> har student ka <b>ek</b> ID card hota hai aur har ID card ek hi student ka hota hai (<b>1:1</b>). Ek class teacher ke <b>kai</b> students hote hain, har student ka ek class teacher (<b>1:N</b>). Ek student kai courses join karta hai aur ek course mein kai students — school ek <b>enrolment register</b> rakhta hai jismein har (student, course) jodi ki ek line hoti hai (<b>N:N</b>).</p>
<ul>
<li>C# mein relationship ek <b>navigation property</b> hai: reference (<code>Order.Customer</code>) ya collection (<code>Customer.Orders</code>), aamtaur par ek <b>foreign key property</b> ke saath (<code>Order.CustomerId</code>).</li>
<li>EF Core zyaadatar relationships <b>convention se</b> pehchaan leta hai: <code>Customer</code> navigation ke bagal mein <code>CustomerId</code> naam ki property FK hai. Baaki aap <code>OnModelCreating</code> mein <code>HasOne</code> / <code>WithMany</code> / <code>HasForeignKey</code> se configure karte ho.</li>
<li>SQL mein <b>1:N</b>: FK column "many" wali side par hota hai (<code>Orders.CustomerId</code>), us par ek index ke saath.</li>
<li>SQL mein <b>1:1</b>: dependent side par FK, ek <b>unique index</b> ke saath, taaki do rows ek hi parent ko point na kar sakein.</li>
<li>SQL mein <b>N:N</b>: composite primary key wala ek <b>join table</b>. EF Core 5 se do collection navigations (<code>Student.Courses</code> aur <code>Course.Students</code>) kaafi hain — join table EF khud banata hai (<b>skip navigations</b>).</li>
<li><b>Required</b> FK (<code>int CustomerId</code>) → by default <code>NOT NULL</code> + <code>ON DELETE CASCADE</code>. <b>Optional</b> FK (<code>int? MentorId</code>) → <code>NULL</code>, database mein koi cascade nahi.</li>
</ul>
<p><b>Kab use karein:</b> wahi relationships model karo jo aapke SQL schema mein sach mein hain, taaki EF JOINs likh sake aur FKs sahi rakhe. <b>Kab nahi:</b> har entity par dono taraf navigations "shayad kaam aaye" sochkar mat jodo — har ek accidental loading aur JSON cycles ka ek aur raasta hai. Navigation tab jodo jab code sach mein us par chalta ho.</p>`
      }
    },
    {
      id: "loading-basics",
      depth: "short",
      title: {
        en: "Loading related data — eager, explicit and lazy",
        hi: "Related data loading — eager, explicit और lazy",
        hg: "Related data loading — eager, explicit aur lazy"
      },
      body: {
        en: `<p><b>Analogy — eating at a dhaba:</b> a <b>thali</b> comes with dal, sabzi and roti on one plate in one trip (<b>eager</b>). Or you order only dal, and later <b>you call the waiter</b>: "now bring two rotis for this table" (<b>explicit</b>). Or the waiter <b>watches your plate</b> and runs to the kitchen every time you reach for something that is not there (<b>lazy</b>) — easy for you, but with ten people at the table he makes many trips.</p>
<ul>
<li><b>Default</b>: EF Core loads <b>only what you query</b>. <code>db.Orders.First()</code> gives an order whose <code>Customer</code> is <code>null</code> (unless that customer is already tracked). Nothing is loaded behind your back.</li>
<li><b>Eager loading</b>: <code>Include(o =&gt; o.Customer)</code> and <code>ThenInclude(...)</code> for the next level. EF adds a <b>JOIN</b> to the same SQL query — one round trip.</li>
<li><b>Explicit loading</b>: load the main entity first, then later <code>db.Entry(customer).Collection(c =&gt; c.Orders).Load()</code> (or <code>.Reference(...)</code>). One extra query, at the moment you choose.</li>
<li><b>Lazy loading</b>: off by default. Turn it on with the <code>Microsoft.EntityFrameworkCore.Proxies</code> package, <code>UseLazyLoadingProxies()</code> and <code>virtual</code> navigations. Then the first access to <code>customer.Orders</code> fires a query.</li>
<li>Lazy loading inside a loop is the classic <b>N+1 problem</b>: 1 query for the list + 1 per row (Day 6 goes deeper).</li>
</ul>
<p><b>When to use:</b> eager loading when you know up front that you need the related data (most API endpoints); explicit loading when you need it only on some code paths. <b>When not:</b> avoid lazy loading in web APIs and loops — the extra queries are hidden; and do not <code>Include</code> large collections you will not use.</p>`,
        hi: `<p><b>Analogy — dhaba पर खाना:</b> <b>थाली</b> में दाल, सब्ज़ी और रोटी एक ही plate में एक trip में आ जाती है (<b>eager</b>)। या आप सिर्फ़ दाल order करते हो, और बाद में <b>खुद waiter को बुलाते हो</b>: "अब इस table के लिए दो रोटी लाओ" (<b>explicit</b>)। या waiter <b>आपकी plate देखता रहता है</b> और जब भी आप किसी ऐसी चीज़ की तरफ़ हाथ बढ़ाते हो जो नहीं है, kitchen दौड़ता है (<b>lazy</b>) — आपके लिए आसान, पर table पर दस लोग हों तो उसके बहुत चक्कर लगते हैं।</p>
<ul>
<li><b>Default</b>: EF Core <b>सिर्फ़ वही load करता है जो आप query करते हो</b>। <code>db.Orders.First()</code> से जो order मिलता है उसका <code>Customer</code> <code>null</code> होता है (जब तक वो customer पहले से tracked न हो)। पीछे से कुछ load नहीं होता।</li>
<li><b>Eager loading</b>: <code>Include(o =&gt; o.Customer)</code> और अगले level के लिए <code>ThenInclude(...)</code>। EF उसी SQL query में एक <b>JOIN</b> जोड़ देता है — एक ही round trip।</li>
<li><b>Explicit loading</b>: पहले main entity load करो, फिर बाद में <code>db.Entry(customer).Collection(c =&gt; c.Orders).Load()</code> (या <code>.Reference(...)</code>)। एक extra query, उस पल जब आप चाहो।</li>
<li><b>Lazy loading</b>: by default बंद। इसे <code>Microsoft.EntityFrameworkCore.Proxies</code> package, <code>UseLazyLoadingProxies()</code> और <code>virtual</code> navigations से चालू करते हैं। फिर <code>customer.Orders</code> को पहली बार छूते ही query चलती है।</li>
<li>Loop के अंदर lazy loading ही classic <b>N+1 problem</b> है: list के लिए 1 query + हर row के लिए 1 (Day 6 में और गहराई से)।</li>
</ul>
<p><b>कब use करें:</b> eager loading जब पहले से पता हो कि related data चाहिए (ज़्यादातर API endpoints); explicit loading जब वो सिर्फ़ कुछ code paths पर चाहिए। <b>कब नहीं:</b> web APIs और loops में lazy loading से बचो — extra queries छुपी रहती हैं; और ऐसी बड़ी collections <code>Include</code> मत करो जो use नहीं होंगी।</p>`,
        hg: `<p><b>Analogy — dhaba par khaana:</b> <b>thaali</b> mein daal, sabzi aur roti ek hi plate mein ek trip mein aa jaati hai (<b>eager</b>). Ya aap sirf daal order karte ho, aur baad mein <b>khud waiter ko bulaate ho</b>: "ab is table ke liye do roti laao" (<b>explicit</b>). Ya waiter <b>aapki plate dekhta rehta hai</b> aur jab bhi aap kisi aisi cheez ki taraf haath badhaate ho jo nahi hai, kitchen daudta hai (<b>lazy</b>) — aapke liye aasaan, par table par das log hon to uske bahut chakkar lagte hain.</p>
<ul>
<li><b>Default</b>: EF Core <b>sirf wahi load karta hai jo aap query karte ho</b>. <code>db.Orders.First()</code> se jo order milta hai uska <code>Customer</code> <code>null</code> hota hai (jab tak woh customer pehle se tracked na ho). Peeche se kuch load nahi hota.</li>
<li><b>Eager loading</b>: <code>Include(o =&gt; o.Customer)</code> aur agle level ke liye <code>ThenInclude(...)</code>. EF usi SQL query mein ek <b>JOIN</b> jod deta hai — ek hi round trip.</li>
<li><b>Explicit loading</b>: pehle main entity load karo, phir baad mein <code>db.Entry(customer).Collection(c =&gt; c.Orders).Load()</code> (ya <code>.Reference(...)</code>). Ek extra query, us pal jab aap chaho.</li>
<li><b>Lazy loading</b>: by default band. Ise <code>Microsoft.EntityFrameworkCore.Proxies</code> package, <code>UseLazyLoadingProxies()</code> aur <code>virtual</code> navigations se chaalu karte hain. Phir <code>customer.Orders</code> ko pehli baar chhoote hi query chalti hai.</li>
<li>Loop ke andar lazy loading hi classic <b>N+1 problem</b> hai: list ke liye 1 query + har row ke liye 1 (Day 6 mein aur gehraai se).</li>
</ul>
<p><b>Kab use karein:</b> eager loading jab pehle se pata ho ki related data chahiye (zyaadatar API endpoints); explicit loading jab woh sirf kuch code paths par chahiye. <b>Kab nahi:</b> web APIs aur loops mein lazy loading se bacho — extra queries chhupi rehti hain; aur aisi badi collections <code>Include</code> mat karo jo use nahi hongi.</p>`
      }
    },
    {
      id: "tracking-basics",
      depth: "short",
      title: {
        en: "Tracking vs AsNoTracking, and the change tracker states",
        hi: "Tracking बनाम AsNoTracking, और change tracker की states",
        hg: "Tracking vs AsNoTracking, aur change tracker ki states"
      },
      body: {
        en: `<p><b>Analogy — the library:</b> when you <b>issue</b> a book, the librarian writes it in the register and notes its condition. When you return it, he compares it with his note — "page 12 is torn" — and records the change. That is a <b>tracked</b> entity. A <b>photocopy</b> of the same pages is yours: scribble on it, the library does not know or care. That is <b>AsNoTracking</b>.</p>
<ul>
<li>By default, entities returned by a query are <b>tracked</b>: the DbContext keeps them and a <b>snapshot</b> of their original values.</li>
<li>On <code>SaveChanges()</code>, EF runs <b>DetectChanges</b>: it compares current values with the snapshot and sends an <code>UPDATE</code> for only the changed columns.</li>
<li>Every tracked entity has a <b>state</b>: <b>Added</b> (→ INSERT), <b>Modified</b> (→ UPDATE), <b>Deleted</b> (→ DELETE), <b>Unchanged</b> (nothing to send). An object the context does not know is <b>Detached</b>.</li>
<li><code>AsNoTracking()</code>: no snapshot, no register entry. Faster and uses less memory. Changing such an object and calling <code>SaveChanges()</code> does <b>nothing</b>.</li>
<li>Tracking also gives <b>identity resolution</b>: one row = one object per DbContext. With <code>AsNoTracking()</code>, the same row can come back as several objects; <code>AsNoTrackingWithIdentityResolution()</code> keeps one object per row without tracking.</li>
</ul>
<p><b>When to use:</b> <code>AsNoTracking()</code> for read-only work — GET endpoints, reports, lists you only display. Tracking when you load entities to <b>change</b> them and save. <b>When not:</b> do not use no-tracking queries for data you plan to update in the same request; and do not keep one tracked context alive for thousands of rows "just in case" — every tracked entity costs memory and DetectChanges time.</p>`,
        hi: `<p><b>Analogy — library:</b> जब आप book <b>issue</b> करवाते हो, librarian उसे register में लिखता है और उसकी हालत note करता है। लौटाने पर वो अपने note से मिलाता है — "page 12 फटा है" — और बदलाव दर्ज करता है। यह <b>tracked</b> entity है। उन्हीं pages की <b>photocopy</b> आपकी अपनी है: उस पर कुछ भी लिखो, library को न पता है न फ़र्क पड़ता है। यह <b>AsNoTracking</b> है।</p>
<ul>
<li>By default, query से आई entities <b>tracked</b> होती हैं: DbContext उन्हें और उनकी original values का एक <b>snapshot</b> रखता है।</li>
<li><code>SaveChanges()</code> पर EF <b>DetectChanges</b> चलाता है: current values को snapshot से compare करता है और सिर्फ़ बदले हुए columns के लिए <code>UPDATE</code> भेजता है।</li>
<li>हर tracked entity की एक <b>state</b> होती है: <b>Added</b> (→ INSERT), <b>Modified</b> (→ UPDATE), <b>Deleted</b> (→ DELETE), <b>Unchanged</b> (भेजने को कुछ नहीं)। जिस object को context जानता ही नहीं, वो <b>Detached</b> है।</li>
<li><code>AsNoTracking()</code>: न snapshot, न register entry। तेज़ है और कम memory लेता है। ऐसे object को बदलकर <code>SaveChanges()</code> call करो तो <b>कुछ नहीं होता</b>।</li>
<li>Tracking से <b>identity resolution</b> भी मिलता है: हर DbContext में एक row = एक object। <code>AsNoTracking()</code> में एक ही row कई objects बनकर आ सकती है; <code>AsNoTrackingWithIdentityResolution()</code> बिना tracking के हर row का एक ही object रखता है।</li>
</ul>
<p><b>कब use करें:</b> read-only काम के लिए <code>AsNoTracking()</code> — GET endpoints, reports, सिर्फ़ दिखाने वाली lists। Tracking तब, जब entities को <b>बदलकर</b> save करना है। <b>कब नहीं:</b> जिस data को उसी request में update करना है, उसके लिए no-tracking query मत use करो; और हज़ारों rows के लिए एक tracked context "शायद काम आए" सोचकर ज़िंदा मत रखो — हर tracked entity memory और DetectChanges का समय लेती है।</p>`,
        hg: `<p><b>Analogy — library:</b> jab aap book <b>issue</b> karwaate ho, librarian use register mein likhta hai aur uski haalat note karta hai. Lautaane par woh apne note se milaata hai — "page 12 phata hai" — aur badlaav darj karta hai. Yeh <b>tracked</b> entity hai. Unhi pages ki <b>photocopy</b> aapki apni hai: us par kuch bhi likho, library ko na pata hai na farak padta hai. Yeh <b>AsNoTracking</b> hai.</p>
<ul>
<li>By default, query se aayi entities <b>tracked</b> hoti hain: DbContext unhe aur unki original values ka ek <b>snapshot</b> rakhta hai.</li>
<li><code>SaveChanges()</code> par EF <b>DetectChanges</b> chalata hai: current values ko snapshot se compare karta hai aur sirf badle hue columns ke liye <code>UPDATE</code> bhejta hai.</li>
<li>Har tracked entity ki ek <b>state</b> hoti hai: <b>Added</b> (→ INSERT), <b>Modified</b> (→ UPDATE), <b>Deleted</b> (→ DELETE), <b>Unchanged</b> (bhejne ko kuch nahi). Jis object ko context jaanta hi nahi, woh <b>Detached</b> hai.</li>
<li><code>AsNoTracking()</code>: na snapshot, na register entry. Tez hai aur kam memory leta hai. Aise object ko badalkar <code>SaveChanges()</code> call karo to <b>kuch nahi hota</b>.</li>
<li>Tracking se <b>identity resolution</b> bhi milta hai: har DbContext mein ek row = ek object. <code>AsNoTracking()</code> mein ek hi row kai objects bankar aa sakti hai; <code>AsNoTrackingWithIdentityResolution()</code> bina tracking ke har row ka ek hi object rakhta hai.</li>
</ul>
<p><b>Kab use karein:</b> read-only kaam ke liye <code>AsNoTracking()</code> — GET endpoints, reports, sirf dikhaane wali lists. Tracking tab, jab entities ko <b>badalkar</b> save karna hai. <b>Kab nahi:</b> jis data ko usi request mein update karna hai, uske liye no-tracking query mat use karo; aur hazaaron rows ke liye ek tracked context "shayad kaam aaye" sochkar zinda mat rakho — har tracked entity memory aur DetectChanges ka samay leti hai.</p>`
      }
    },
    {
      id: "dbcontext-lifetime-in-code",
      depth: "detailed",
      title: {
        en: "DbContext lifetime in code: Scoped, factory, pooling — and why never a singleton",
        hi: "Code में DbContext lifetime: Scoped, factory, pooling — और singleton क्यों नहीं",
        hg: "Code mein DbContext lifetime: Scoped, factory, pooling — aur singleton kyon nahi"
      },
      body: {
        en: `<p><b>Analogy — the token counter at a government office:</b> one token = one visit. The clerk serves <b>one token at a time</b>; if two people shout requests at him together, he gets confused. When your visit ends, he clears his desk for the next token. A <b>scope</b> is the visit, the <b>DbContext</b> is the clerk's desk for that visit, and <b>pooling</b> means the same clerk takes the next token after clearing his desk instead of a new clerk being hired every time.</p>
<ul>
<li><code>builder.Services.AddDbContext&lt;ShopContext&gt;(o =&gt; o.UseSqlServer(...))</code> registers the context as <b>Scoped</b> (its options are Scoped too). ASP.NET Core creates one scope per HTTP request, so every controller, service and repository in that request gets the <b>same</b> instance — they share one change tracker and one <code>SaveChanges()</code>.</li>
<li>Your context class takes <code>DbContextOptions&lt;ShopContext&gt;</code> in its constructor; the connection string comes from configuration, not hard-coded in <code>OnConfiguring</code>.</li>
<li><b>Not thread-safe</b>: two operations at the same time on one instance (for example <code>Task.WhenAll</code> over two queries on the same context) fail with <i>"A second operation was started on this context instance before a previous operation completed."</i> Always <code>await</code> each call before the next.</li>
<li><b>Never a singleton</b>: one context for the whole app would be shared by parallel requests (thread-safety errors), its change tracker would grow forever (memory) and return stale tracked data. Injecting a scoped DbContext into a singleton is a <b>captive dependency</b>; with scope validation (on by default in the Development environment) it fails with <i>"Cannot consume scoped service ... from singleton ..."</i>.</li>
<li><b>AddDbContextFactory</b>: registers <code>IDbContextFactory&lt;T&gt;</code> (a singleton). Call <code>CreateDbContext()</code> and dispose it yourself. Use it where there is no request scope or you need several contexts: <b>background services</b>, <b>Blazor Server</b> components, <b>parallel work</b> (one context per task).</li>
<li><b>AddDbContextPool</b>: reuses context instances from a pool (default size 1024) and resets their state between requests. It saves allocation and setup cost in very high-throughput APIs. Rule: the context class must not keep its own per-request state (fields), because the instance is reused.</li>
<li>In a <code>BackgroundService</code> (a singleton), create a scope per unit of work with <code>IServiceScopeFactory.CreateScope()</code> — or use the factory.</li>
</ul>
<p><b>When to use:</b> plain <code>AddDbContext</code> (Scoped) for normal web APIs; the factory for background jobs, Blazor Server and parallel tasks; pooling only after a load test shows context creation matters. <b>When not:</b> do not register DbContext as Singleton, do not store it in a static field, and do not share one instance across threads — and do not switch to pooling if your context class holds request-specific fields (for example a tenant id set per request) without resetting them.</p>`,
        hi: `<p><b>Analogy — सरकारी दफ़्तर का token counter:</b> एक token = एक visit। Clerk <b>एक बार में एक token</b> को serve करता है; दो लोग एक साथ चिल्लाकर काम बताएँ तो वो उलझ जाता है। आपका visit ख़त्म होने पर वो अगले token के लिए अपनी desk साफ़ करता है। <b>Scope</b> visit है, <b>DbContext</b> उस visit के लिए clerk की desk है, और <b>pooling</b> मतलब हर बार नया clerk रखने की बजाय वही clerk desk साफ़ करके अगला token लेता है।</p>
<ul>
<li><code>builder.Services.AddDbContext&lt;ShopContext&gt;(o =&gt; o.UseSqlServer(...))</code> context को <b>Scoped</b> register करता है (उसके options भी Scoped)। ASP.NET Core हर HTTP request के लिए एक scope बनाता है, इसलिए उस request के हर controller, service और repository को <b>वही</b> instance मिलता है — सब एक change tracker और एक <code>SaveChanges()</code> share करते हैं।</li>
<li>आपकी context class constructor में <code>DbContextOptions&lt;ShopContext&gt;</code> लेती है; connection string configuration से आती है, <code>OnConfiguring</code> में hard-code नहीं होती।</li>
<li><b>Thread-safe नहीं</b>: एक instance पर एक साथ दो operations (जैसे एक ही context पर दो queries का <code>Task.WhenAll</code>) इस error से fail होते हैं: <i>"A second operation was started on this context instance before a previous operation completed."</i> अगली call से पहले हर call को <code>await</code> करो।</li>
<li><b>Singleton कभी नहीं</b>: पूरे app का एक context parallel requests में share होगा (thread-safety errors), उसका change tracker हमेशा बढ़ता रहेगा (memory) और पुराना tracked data लौटाएगा। Scoped DbContext को singleton में inject करना <b>captive dependency</b> है; scope validation (Development environment में by default चालू) के साथ यह <i>"Cannot consume scoped service ... from singleton ..."</i> से fail होता है।</li>
<li><b>AddDbContextFactory</b>: <code>IDbContextFactory&lt;T&gt;</code> register करता है (एक singleton)। <code>CreateDbContext()</code> call करो और उसे खुद dispose करो। इसे वहाँ use करो जहाँ request scope नहीं है या कई contexts चाहिए: <b>background services</b>, <b>Blazor Server</b> components, <b>parallel काम</b> (हर task का अपना context)।</li>
<li><b>AddDbContextPool</b>: context instances को एक pool से दोबारा use करता है (default size 1024) और requests के बीच उनकी state reset करता है। बहुत ज़्यादा traffic वाली APIs में allocation और setup का खर्च बचाता है। नियम: context class अपनी per-request state (fields) न रखे, क्योंकि instance दोबारा use होता है।</li>
<li><code>BackgroundService</code> (एक singleton) में हर unit of work के लिए <code>IServiceScopeFactory.CreateScope()</code> से scope बनाओ — या factory use करो।</li>
</ul>
<p><b>कब use करें:</b> normal web APIs के लिए सीधा <code>AddDbContext</code> (Scoped); background jobs, Blazor Server और parallel tasks के लिए factory; pooling सिर्फ़ तब, जब load test दिखाए कि context बनाने का खर्च मायने रखता है। <b>कब नहीं:</b> DbContext को Singleton register मत करो, static field में मत रखो, और एक instance को threads के बीच share मत करो — और अगर आपकी context class request-specific fields रखती है (जैसे हर request पर set होने वाला tenant id), तो उन्हें reset किए बिना pooling पर मत जाओ।</p>`,
        hg: `<p><b>Analogy — sarkaari daftar ka token counter:</b> ek token = ek visit. Clerk <b>ek baar mein ek token</b> ko serve karta hai; do log ek saath chillaakar kaam batayein to woh ulajh jaata hai. Aapka visit khatam hone par woh agle token ke liye apni desk saaf karta hai. <b>Scope</b> visit hai, <b>DbContext</b> us visit ke liye clerk ki desk hai, aur <b>pooling</b> matlab har baar naya clerk rakhne ki bajaay wahi clerk desk saaf karke agla token leta hai.</p>
<ul>
<li><code>builder.Services.AddDbContext&lt;ShopContext&gt;(o =&gt; o.UseSqlServer(...))</code> context ko <b>Scoped</b> register karta hai (uske options bhi Scoped). ASP.NET Core har HTTP request ke liye ek scope banata hai, isliye us request ke har controller, service aur repository ko <b>wahi</b> instance milta hai — sab ek change tracker aur ek <code>SaveChanges()</code> share karte hain.</li>
<li>Aapki context class constructor mein <code>DbContextOptions&lt;ShopContext&gt;</code> leti hai; connection string configuration se aati hai, <code>OnConfiguring</code> mein hard-code nahi hoti.</li>
<li><b>Thread-safe nahi</b>: ek instance par ek saath do operations (jaise ek hi context par do queries ka <code>Task.WhenAll</code>) is error se fail hote hain: <i>"A second operation was started on this context instance before a previous operation completed."</i> Agli call se pehle har call ko <code>await</code> karo.</li>
<li><b>Singleton kabhi nahi</b>: poore app ka ek context parallel requests mein share hoga (thread-safety errors), uska change tracker hamesha badhta rahega (memory) aur purana tracked data lautaayega. Scoped DbContext ko singleton mein inject karna <b>captive dependency</b> hai; scope validation (Development environment mein by default chaalu) ke saath yeh <i>"Cannot consume scoped service ... from singleton ..."</i> se fail hota hai.</li>
<li><b>AddDbContextFactory</b>: <code>IDbContextFactory&lt;T&gt;</code> register karta hai (ek singleton). <code>CreateDbContext()</code> call karo aur use khud dispose karo. Ise wahan use karo jahan request scope nahi hai ya kai contexts chahiye: <b>background services</b>, <b>Blazor Server</b> components, <b>parallel kaam</b> (har task ka apna context).</li>
<li><b>AddDbContextPool</b>: context instances ko ek pool se dobara use karta hai (default size 1024) aur requests ke beech unki state reset karta hai. Bahut zyaada traffic wali APIs mein allocation aur setup ka kharch bachaata hai. Niyam: context class apni per-request state (fields) na rakhe, kyonki instance dobara use hota hai.</li>
<li><code>BackgroundService</code> (ek singleton) mein har unit of work ke liye <code>IServiceScopeFactory.CreateScope()</code> se scope banao — ya factory use karo.</li>
</ul>
<p><b>Kab use karein:</b> normal web APIs ke liye seedha <code>AddDbContext</code> (Scoped); background jobs, Blazor Server aur parallel tasks ke liye factory; pooling sirf tab, jab load test dikhaaye ki context banane ka kharch maayne rakhta hai. <b>Kab nahi:</b> DbContext ko Singleton register mat karo, static field mein mat rakho, aur ek instance ko threads ke beech share mat karo — aur agar aapki context class request-specific fields rakhti hai (jaise har request par set hone wala tenant id), to unhe reset kiye bina pooling par mat jao.</p>`
      },
      code: [{
        caption: {
          en: "What ASP.NET Core does for you: one DbContext per scope (request), a factory for jobs, and the captive-dependency error",
          hi: "ASP.NET Core आपके लिए क्या करता है: हर scope (request) का एक DbContext, jobs के लिए factory, और captive-dependency error",
          hg: "ASP.NET Core aapke liye kya karta hai: har scope (request) ka ek DbContext, jobs ke liye factory, aur captive-dependency error"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
        expected: "AddDbContext lifetime: Scoped\nSame request, same DbContext: True\nNext request, same DbContext: False\nFactory gives a new DbContext each time: True\nError while validating the service descriptor 'ServiceType: PriceCache Lifetime: Singleton ImplementationType: PriceCache': Cannot consume scoped service 'ShopContext' from singleton 'PriceCache'.",
        src: `using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

// In a web app this is builder.Services.AddDbContext<ShopContext>(...) in Program.cs
var services = new ServiceCollection();
services.AddDbContext<ShopContext>(o => o.UseSqlite("Data Source=:memory:"));
var registration = services.First(d => d.ServiceType == typeof(ShopContext));
Console.WriteLine($"AddDbContext lifetime: {registration.Lifetime}");      // Scoped

using var provider = services.BuildServiceProvider(validateScopes: true);

// ASP.NET Core creates one scope per HTTP request
ShopContext firstRequestDb;
using (var request1 = provider.CreateScope())
{
    var a = request1.ServiceProvider.GetRequiredService<ShopContext>();
    var b = request1.ServiceProvider.GetRequiredService<ShopContext>();
    Console.WriteLine($"Same request, same DbContext: {ReferenceEquals(a, b)}");
    firstRequestDb = a;
}   // scope ends -> DbContext disposed

using (var request2 = provider.CreateScope())
{
    var c = request2.ServiceProvider.GetRequiredService<ShopContext>();
    Console.WriteLine($"Next request, same DbContext: {ReferenceEquals(firstRequestDb, c)}");
}

// Background jobs / Blazor Server / parallel work: a factory, you own each context
var jobServices = new ServiceCollection();
jobServices.AddDbContextFactory<ShopContext>(o => o.UseSqlite("Data Source=:memory:"));
using var jobProvider = jobServices.BuildServiceProvider();
var factory = jobProvider.GetRequiredService<IDbContextFactory<ShopContext>>();
using (var job1 = factory.CreateDbContext())
using (var job2 = factory.CreateDbContext())
{
    Console.WriteLine($"Factory gives a new DbContext each time: {!ReferenceEquals(job1, job2)}");
}

// The mistake: a singleton that captures a scoped DbContext.
// ASP.NET Core (Development) validates this when the app starts.
services.AddSingleton<PriceCache>();
try
{
    using var badProvider = services.BuildServiceProvider(
        new ServiceProviderOptions { ValidateScopes = true, ValidateOnBuild = true });
}
catch (AggregateException ex)
{
    Console.WriteLine(ex.InnerExceptions[0].Message);
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
}

// Lives for the whole app -> must not hold a per-request DbContext
public class PriceCache(ShopContext db)
{
    public int CountProducts() => db.Products.Count();
}`
      }]
    },
    {
      id: "model-in-code",
      depth: "detailed",
      title: {
        en: "Code-First in code: entities, conventions, Fluent API — and the CREATE TABLE that EF writes",
        hi: "Code में Code-First: entities, conventions, Fluent API — और EF का लिखा CREATE TABLE",
        hg: "Code mein Code-First: entities, conventions, Fluent API — aur EF ka likha CREATE TABLE"
      },
      body: {
        en: `<p><b>Analogy — the tailor's measurement card:</b> you give the tailor a card with your measurements; he cuts the cloth exactly to it. Where you wrote nothing (collar style, pocket), he uses his <b>standard style</b>. Your entity classes are the card, EF Core's <b>conventions</b> are the standard style, and the <b>Fluent API</b> is the extra note "make the collar 2 cm narrower".</p>
<ul>
<li><b>Conventions</b> (no configuration needed): a property named <code>Id</code> or <code>&lt;Type&gt;Id</code> is the primary key (an <code>int</code> key becomes <code>IDENTITY</code> on SQL Server); <code>CustomerId</code> next to a <code>Customer</code> navigation is the FK; the table name is the <code>DbSet</code> property name.</li>
<li><b>Nullability</b> follows C# nullable reference types: <code>string</code> → <code>NOT NULL</code>, <code>string?</code> → <code>NULL</code>. A plain <code>string</code> is <code>nvarchar(max)</code> until you give it a length.</li>
<li><b>Data annotations</b> (<code>[MaxLength(100)]</code>, <code>[Required]</code>) are quick but limited and put database details on your domain class.</li>
<li><b>Fluent API</b> in <code>OnModelCreating</code> can do everything: lengths, precision, indexes, unique constraints, relationships, table names. It wins when both are used.</li>
<li>Large models: one <code>IEntityTypeConfiguration&lt;T&gt;</code> class per entity and <code>modelBuilder.ApplyConfigurationsFromAssembly(...)</code> keep <code>OnModelCreating</code> short.</li>
<li>Set <b>lengths and decimal precision</b> on purpose: <code>nvarchar(max)</code> columns cannot be index key columns on SQL Server, and a <code>decimal</code> without precision gets EF's default <code>decimal(18,2)</code> plus a warning.</li>
<li><code>db.Database.GenerateCreateScript()</code> prints the DDL for the whole model — a quick way to review what EF will create (a migration is the real way to apply it).</li>
</ul>
<p><b>When to use:</b> conventions for the obvious parts, Fluent API (in configuration classes) for everything a DBA would care about: lengths, precision, indexes, delete rules. <b>When not:</b> do not leave every string as <code>nvarchar(max)</code> and every decimal on the default — review the generated DDL the same way you would review a hand-written <code>CREATE TABLE</code>.</p>`,
        hi: `<p><b>Analogy — दर्ज़ी का measurement card:</b> आप दर्ज़ी को अपने नाप वाला card देते हो; वो कपड़ा ठीक उसी हिसाब से काटता है। जहाँ आपने कुछ नहीं लिखा (collar का style, pocket), वहाँ वो अपना <b>standard style</b> use करता है। आपकी entity classes वो card हैं, EF Core के <b>conventions</b> standard style हैं, और <b>Fluent API</b> वो extra note है: "collar 2 cm पतला रखना"।</p>
<ul>
<li><b>Conventions</b> (कोई configuration नहीं चाहिए): <code>Id</code> या <code>&lt;Type&gt;Id</code> नाम की property primary key है (SQL Server पर <code>int</code> key <code>IDENTITY</code> बन जाती है); <code>Customer</code> navigation के बगल में <code>CustomerId</code> FK है; table का नाम <code>DbSet</code> property का नाम होता है।</li>
<li><b>Nullability</b> C# nullable reference types से चलती है: <code>string</code> → <code>NOT NULL</code>, <code>string?</code> → <code>NULL</code>। Length न दो तो सादा <code>string</code> <code>nvarchar(max)</code> होता है।</li>
<li><b>Data annotations</b> (<code>[MaxLength(100)]</code>, <code>[Required]</code>) जल्दी लग जाते हैं पर limited हैं, और database की details आपकी domain class पर डाल देते हैं।</li>
<li><code>OnModelCreating</code> में <b>Fluent API</b> सब कुछ कर सकता है: lengths, precision, indexes, unique constraints, relationships, table names। दोनों use हों तो Fluent API जीतता है।</li>
<li>बड़े models: हर entity के लिए एक <code>IEntityTypeConfiguration&lt;T&gt;</code> class और <code>modelBuilder.ApplyConfigurationsFromAssembly(...)</code> से <code>OnModelCreating</code> छोटा रहता है।</li>
<li><b>Lengths और decimal precision</b> सोच-समझकर set करो: SQL Server पर <code>nvarchar(max)</code> columns index key column नहीं बन सकते, और बिना precision वाले <code>decimal</code> को EF का default <code>decimal(18,2)</code> और एक warning मिलती है।</li>
<li><code>db.Database.GenerateCreateScript()</code> पूरे model का DDL print करता है — EF क्या बनाएगा यह review करने का आसान तरीका (असल में apply करने का तरीका migration है)।</li>
</ul>
<p><b>कब use करें:</b> साफ़-साफ़ हिस्सों के लिए conventions, और जिन चीज़ों की DBA को परवाह होती है उनके लिए Fluent API (configuration classes में): lengths, precision, indexes, delete rules। <b>कब नहीं:</b> हर string को <code>nvarchar(max)</code> और हर decimal को default पर मत छोड़ो — generated DDL को वैसे ही review करो जैसे हाथ से लिखे <code>CREATE TABLE</code> को करते।</p>`,
        hg: `<p><b>Analogy — darzi ka measurement card:</b> aap darzi ko apne naap wala card dete ho; woh kapda theek usi hisaab se kaatta hai. Jahan aapne kuch nahi likha (collar ka style, pocket), wahan woh apna <b>standard style</b> use karta hai. Aapki entity classes woh card hain, EF Core ke <b>conventions</b> standard style hain, aur <b>Fluent API</b> woh extra note hai: "collar 2 cm patla rakhna".</p>
<ul>
<li><b>Conventions</b> (koi configuration nahi chahiye): <code>Id</code> ya <code>&lt;Type&gt;Id</code> naam ki property primary key hai (SQL Server par <code>int</code> key <code>IDENTITY</code> ban jaati hai); <code>Customer</code> navigation ke bagal mein <code>CustomerId</code> FK hai; table ka naam <code>DbSet</code> property ka naam hota hai.</li>
<li><b>Nullability</b> C# nullable reference types se chalti hai: <code>string</code> → <code>NOT NULL</code>, <code>string?</code> → <code>NULL</code>. Length na do to saada <code>string</code> <code>nvarchar(max)</code> hota hai.</li>
<li><b>Data annotations</b> (<code>[MaxLength(100)]</code>, <code>[Required]</code>) jaldi lag jaate hain par limited hain, aur database ki details aapki domain class par daal dete hain.</li>
<li><code>OnModelCreating</code> mein <b>Fluent API</b> sab kuch kar sakta hai: lengths, precision, indexes, unique constraints, relationships, table names. Dono use hon to Fluent API jeetta hai.</li>
<li>Bade models: har entity ke liye ek <code>IEntityTypeConfiguration&lt;T&gt;</code> class aur <code>modelBuilder.ApplyConfigurationsFromAssembly(...)</code> se <code>OnModelCreating</code> chhota rehta hai.</li>
<li><b>Lengths aur decimal precision</b> soch-samajhkar set karo: SQL Server par <code>nvarchar(max)</code> columns index key column nahi ban sakte, aur bina precision wale <code>decimal</code> ko EF ka default <code>decimal(18,2)</code> aur ek warning milti hai.</li>
<li><code>db.Database.GenerateCreateScript()</code> poore model ka DDL print karta hai — EF kya banayega yeh review karne ka aasaan tareeka (asal mein apply karne ka tareeka migration hai).</li>
</ul>
<p><b>Kab use karein:</b> saaf-saaf hisson ke liye conventions, aur jin cheezon ki DBA ko parwaah hoti hai unke liye Fluent API (configuration classes mein): lengths, precision, indexes, delete rules. <b>Kab nahi:</b> har string ko <code>nvarchar(max)</code> aur har decimal ko default par mat chhodo — generated DDL ko waise hi review karo jaise haath se likhe <code>CREATE TABLE</code> ko karte.</p>`
      },
      code: [{
        caption: {
          en: "Entities + conventions + Fluent API → the SQL Server DDL EF generates (no server needed: EF only writes the SQL text)",
          hi: "Entities + conventions + Fluent API → EF का बनाया SQL Server DDL (server की ज़रूरत नहीं: EF सिर्फ़ SQL text लिखता है)",
          hg: "Entities + conventions + Fluent API → EF ka banaya SQL Server DDL (server ki zaroorat nahi: EF sirf SQL text likhta hai)"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        expected: "CREATE TABLE [Customers] (\n    [Id] int NOT NULL IDENTITY,\n    [Name] nvarchar(100) NOT NULL,\n    [City] nvarchar(50) NULL,\n    [Email] nvarchar(200) NOT NULL,\n    CONSTRAINT [PK_Customers] PRIMARY KEY ([Id])\n);\nGO\n\n\nCREATE TABLE [Orders] (\n    [Id] int NOT NULL IDENTITY,\n    [OrderDate] date NOT NULL,\n    [Total] decimal(10,2) NOT NULL,\n    [CustomerId] int NOT NULL,\n    CONSTRAINT [PK_Orders] PRIMARY KEY ([Id]),\n    CONSTRAINT [FK_Orders_Customers_CustomerId] FOREIGN KEY ([CustomerId]) REFERENCES [Customers] ([Id]) ON DELETE CASCADE\n);\nGO\n\n\nCREATE UNIQUE INDEX [IX_Customers_Email] ON [Customers] ([Email]);\nGO\n\n\nCREATE INDEX [IX_Orders_CustomerId] ON [Orders] ([CustomerId]);\nGO",
        src: `using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

// Dummy connection string: nothing connects, EF only generates SQL text.
var options = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlServer("Server=.;Database=Shop;Trusted_Connection=True;")
    .Options;
using var db = new ShopContext(options);
Console.WriteLine(db.Database.GenerateCreateScript());

/* Output (GO lines removed):
CREATE TABLE [Customers] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(100) NOT NULL,
    [City] nvarchar(50) NULL,
    [Email] nvarchar(200) NOT NULL,
    CONSTRAINT [PK_Customers] PRIMARY KEY ([Id])
);
CREATE TABLE [Orders] (
    [Id] int NOT NULL IDENTITY,
    [OrderDate] date NOT NULL,
    [Total] decimal(10,2) NOT NULL,
    [CustomerId] int NOT NULL,
    CONSTRAINT [PK_Orders] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Orders_Customers_CustomerId] FOREIGN KEY ([CustomerId])
        REFERENCES [Customers] ([Id]) ON DELETE CASCADE
);
CREATE UNIQUE INDEX [IX_Customers_Email] ON [Customers] ([Email]);
CREATE INDEX [IX_Orders_CustomerId] ON [Orders] ([CustomerId]);   -- EF adds an index for the FK
*/

public class Customer
{
    public int Id { get; set; }                  // "Id" -> primary key, IDENTITY
    public string Name { get; set; } = "";       // string  -> NOT NULL
    public string? City { get; set; }            // string? -> NULL
    public string Email { get; set; } = "";
    public List<Order> Orders { get; } = [];     // one customer, many orders
}

public class Order
{
    public int Id { get; set; }
    public DateOnly OrderDate { get; set; }      // -> date
    public decimal Total { get; set; }
    public int CustomerId { get; set; }          // FK by convention (required: int, not int?)
    public Customer Customer { get; set; } = null!;
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();   // table name "Customers"
    public DbSet<Order> Orders => Set<Order>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // picks up every IEntityTypeConfiguration<T> in this assembly
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ShopContext).Assembly);
    }
}

public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
{
    public void Configure(EntityTypeBuilder<Customer> b)
    {
        b.Property(c => c.Name).HasMaxLength(100);
        b.Property(c => c.City).HasMaxLength(50);
        b.Property(c => c.Email).HasMaxLength(200);
        b.HasIndex(c => c.Email).IsUnique();
    }
}

public class OrderConfiguration : IEntityTypeConfiguration<Order>
{
    public void Configure(EntityTypeBuilder<Order> b)
    {
        b.Property(o => o.Total).HasPrecision(10, 2);
    }
}`
      }]
    },
    {
      id: "migrations-in-code",
      depth: "detailed",
      title: {
        en: "Migrations in code: add, review, apply — and how to ship them to production",
        hi: "Code में migrations: add, review, apply — और उन्हें production तक कैसे पहुँचाएँ",
        hg: "Code mein migrations: add, review, apply — aur unhe production tak kaise pahunchaayein"
      },
      body: {
        en: `<p><b>Analogy — a GST invoice and its credit note:</b> every sale gets a numbered invoice, and every invoice has a matching way to reverse it — a credit note. The shop's register shows which invoices are already filed. A migration's <code>Up()</code> is the invoice (apply the change), <code>Down()</code> is the credit note (undo it), and <code>__EFMigrationsHistory</code> is the filed register.</p>
<ul>
<li><b>Tools</b>: the <code>dotnet-ef</code> CLI tool + the <code>Microsoft.EntityFrameworkCore.Design</code> package in the startup project. In Visual Studio's Package Manager Console the same commands are <code>Add-Migration</code>, <code>Update-Database</code>, <code>Script-Migration</code>, <code>Remove-Migration</code>.</li>
<li><code>dotnet ef migrations add AddCustomerCity</code> compares your current model with the <b>model snapshot</b> (<code>ShopContextModelSnapshot.cs</code>) and writes three things: the migration class (<code>Up</code>/<code>Down</code>), its <code>.Designer.cs</code> metadata, and an updated snapshot. It does <b>not</b> touch the database.</li>
<li><b>Review every migration</b> like SQL code in a pull request. If EF thinks a change can lose data (dropping a column, shrinking a length), it warns: <i>"An operation was scaffolded that may result in the loss of data."</i> You can add your own SQL with <code>migrationBuilder.Sql("...")</code> for data fixes.</li>
<li><code>dotnet ef database update</code> applies all pending migrations and adds a row per migration to <code>__EFMigrationsHistory</code>. <code>dotnet ef database update &lt;OlderMigration&gt;</code> rolls back by running the <code>Down()</code> methods.</li>
<li><code>dotnet ef migrations remove</code> deletes the last migration — only safe while it has not been applied anywhere shared.</li>
<li><b>Production</b> (Microsoft's docs recommend SQL scripts first): a <b>SQL script</b> that a DBA or pipeline reviews and runs — <code>migrations script --idempotent</code> makes it safe to run on any version of the DB; or a <b>migration bundle</b> (<code>migrations bundle</code>, EF Core 6+) — a small executable your CD pipeline runs. Calling <code>db.Database.Migrate()</code> at app startup is easy, but with several instances they race, the app needs DDL rights, and nobody reviews the SQL.</li>
</ul>
<p><b>When to use:</b> migrations for every schema change in Code-First projects, committed with the code change, reviewed in the PR, and applied by the pipeline (script or bundle). <b>When not:</b> do not edit or delete a migration that is already applied to a shared database — add a new one; do not run <code>Migrate()</code> on startup for multi-instance production apps; and do not change the database by hand behind EF's back.</p>`,
        hi: `<p><b>Analogy — GST invoice और उसका credit note:</b> हर बिक्री का एक numbered invoice बनता है, और हर invoice को पलटने का एक matching तरीका होता है — credit note। दुकान का register दिखाता है कि कौन से invoices file हो चुके। Migration का <code>Up()</code> invoice है (बदलाव लगाओ), <code>Down()</code> credit note है (बदलाव वापस लो), और <code>__EFMigrationsHistory</code> filed register है।</p>
<ul>
<li><b>Tools</b>: <code>dotnet-ef</code> CLI tool + startup project में <code>Microsoft.EntityFrameworkCore.Design</code> package। Visual Studio के Package Manager Console में यही commands हैं <code>Add-Migration</code>, <code>Update-Database</code>, <code>Script-Migration</code>, <code>Remove-Migration</code>।</li>
<li><code>dotnet ef migrations add AddCustomerCity</code> आपके current model को <b>model snapshot</b> (<code>ShopContextModelSnapshot.cs</code>) से compare करता है और तीन चीज़ें लिखता है: migration class (<code>Up</code>/<code>Down</code>), उसकी <code>.Designer.cs</code> metadata, और updated snapshot। यह database को <b>छूता नहीं</b>।</li>
<li><b>हर migration review करो</b>, pull request में SQL code की तरह। अगर EF को लगे कि किसी बदलाव से data जा सकता है (column drop करना, length छोटी करना), तो वो warning देता है: <i>"An operation was scaffolded that may result in the loss of data."</i> Data fixes के लिए <code>migrationBuilder.Sql("...")</code> से अपना SQL जोड़ सकते हो।</li>
<li><code>dotnet ef database update</code> सारे pending migrations apply करता है और हर migration की एक row <code>__EFMigrationsHistory</code> में जोड़ता है। <code>dotnet ef database update &lt;OlderMigration&gt;</code> <code>Down()</code> methods चलाकर rollback करता है।</li>
<li><code>dotnet ef migrations remove</code> आख़िरी migration delete करता है — यह तभी safe है जब वो किसी shared जगह apply न हुआ हो।</li>
<li><b>Production</b> (Microsoft के docs सबसे पहले SQL scripts recommend करते हैं): एक <b>SQL script</b> जिसे DBA या pipeline review करके चलाए — <code>migrations script --idempotent</code> उसे DB के किसी भी version पर चलाने लायक safe बनाता है; या एक <b>migration bundle</b> (<code>migrations bundle</code>, EF Core 6+) — एक छोटा executable जिसे आपकी CD pipeline चलाती है। App startup पर <code>db.Database.Migrate()</code> call करना आसान है, पर कई instances हों तो वो आपस में race करते हैं, app को DDL rights चाहिए, और SQL कोई review नहीं करता।</li>
</ul>
<p><b>कब use करें:</b> Code-First projects में हर schema बदलाव के लिए migration — code change के साथ commit, PR में review, और pipeline से apply (script या bundle)। <b>कब नहीं:</b> जो migration किसी shared database पर apply हो चुका है उसे edit या delete मत करो — नया migration जोड़ो; multi-instance production apps में startup पर <code>Migrate()</code> मत चलाओ; और EF को बताए बिना database हाथ से मत बदलो।</p>`,
        hg: `<p><b>Analogy — GST invoice aur uska credit note:</b> har bikri ka ek numbered invoice banta hai, aur har invoice ko palatne ka ek matching tareeka hota hai — credit note. Dukaan ka register dikhaata hai ki kaunse invoices file ho chuke. Migration ka <code>Up()</code> invoice hai (badlaav lagao), <code>Down()</code> credit note hai (badlaav wapas lo), aur <code>__EFMigrationsHistory</code> filed register hai.</p>
<ul>
<li><b>Tools</b>: <code>dotnet-ef</code> CLI tool + startup project mein <code>Microsoft.EntityFrameworkCore.Design</code> package. Visual Studio ke Package Manager Console mein yahi commands hain <code>Add-Migration</code>, <code>Update-Database</code>, <code>Script-Migration</code>, <code>Remove-Migration</code>.</li>
<li><code>dotnet ef migrations add AddCustomerCity</code> aapke current model ko <b>model snapshot</b> (<code>ShopContextModelSnapshot.cs</code>) se compare karta hai aur teen cheezein likhta hai: migration class (<code>Up</code>/<code>Down</code>), uski <code>.Designer.cs</code> metadata, aur updated snapshot. Yeh database ko <b>chhoota nahi</b>.</li>
<li><b>Har migration review karo</b>, pull request mein SQL code ki tarah. Agar EF ko lage ki kisi badlaav se data ja sakta hai (column drop karna, length chhoti karna), to woh warning deta hai: <i>"An operation was scaffolded that may result in the loss of data."</i> Data fixes ke liye <code>migrationBuilder.Sql("...")</code> se apna SQL jod sakte ho.</li>
<li><code>dotnet ef database update</code> saare pending migrations apply karta hai aur har migration ki ek row <code>__EFMigrationsHistory</code> mein jodta hai. <code>dotnet ef database update &lt;OlderMigration&gt;</code> <code>Down()</code> methods chalakar rollback karta hai.</li>
<li><code>dotnet ef migrations remove</code> aakhri migration delete karta hai — yeh tabhi safe hai jab woh kisi shared jagah apply na hua ho.</li>
<li><b>Production</b> (Microsoft ke docs sabse pehle SQL scripts recommend karte hain): ek <b>SQL script</b> jise DBA ya pipeline review karke chalaaye — <code>migrations script --idempotent</code> use DB ke kisi bhi version par chalaane laayak safe banata hai; ya ek <b>migration bundle</b> (<code>migrations bundle</code>, EF Core 6+) — ek chhota executable jise aapki CD pipeline chalaati hai. App startup par <code>db.Database.Migrate()</code> call karna aasaan hai, par kai instances hon to woh aapas mein race karte hain, app ko DDL rights chahiye, aur SQL koi review nahi karta.</li>
</ul>
<p><b>Kab use karein:</b> Code-First projects mein har schema badlaav ke liye migration — code change ke saath commit, PR mein review, aur pipeline se apply (script ya bundle). <b>Kab nahi:</b> jo migration kisi shared database par apply ho chuka hai use edit ya delete mat karo — naya migration jodo; multi-instance production apps mein startup par <code>Migrate()</code> mat chalao; aur EF ko bataaye bina database haath se mat badlo.</p>`
      },
      code: [{
        caption: {
          en: "The migration workflow from the command line (text only — run these in your own project)",
          hi: "Command line से migration workflow (सिर्फ़ text — इन्हें अपने project में चलाओ)",
          hg: "Command line se migration workflow (sirf text — inhe apne project mein chalao)"
        },
        check: "none",
        src: `# one-time setup
dotnet tool install --global dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore.Design

# 1. change your entities, then create a migration (does NOT touch the DB)
dotnet ef migrations add AddCustomerCity
#   -> Migrations/<timestamp>_AddCustomerCity.cs           Up() / Down()
#   -> Migrations/<timestamp>_AddCustomerCity.Designer.cs   metadata
#   -> Migrations/ShopContextModelSnapshot.cs               updated "current model"

# 2. apply to your local database
dotnet ef database update

# oops, not applied anywhere yet? remove the last migration
dotnet ef migrations remove

# roll the database back to an earlier migration (runs Down())
dotnet ef database update AddCustomers

# 3. production, option A: a reviewed SQL script, safe on any DB version
dotnet ef migrations script --idempotent -o migrate.sql

# 3. production, option B: a migration bundle (EF Core 6+) run by the CD pipeline
dotnet ef migrations bundle -o efbundle.exe
./efbundle.exe --connection "<production connection string>"

# Database-First instead: scaffold entities + DbContext from an existing DB
dotnet ef dbcontext scaffold "Server=.;Database=Shop;Trusted_Connection=True;TrustServerCertificate=True" Microsoft.EntityFrameworkCore.SqlServer -o Models`
      }, {
        caption: {
          en: "What a generated migration looks like, with the SQL Server SQL that Up() and Down() produce",
          hi: "Generated migration कैसा दिखता है, और Up() व Down() से बनने वाला SQL Server SQL",
          hg: "Generated migration kaisa dikhta hai, aur Up() va Down() se banne wala SQL Server SQL"
        },
        check: "compile",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        src: `using Microsoft.EntityFrameworkCore.Migrations;

public partial class AddCustomerCity : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        // ALTER TABLE [Customers] ADD [City] nvarchar(50) NULL;
        migrationBuilder.AddColumn<string>(
            name: "City",
            table: "Customers",
            type: "nvarchar(50)",
            maxLength: 50,
            nullable: true);

        // CREATE INDEX [IX_Customers_City] ON [Customers] ([City]);
        migrationBuilder.CreateIndex(
            name: "IX_Customers_City",
            table: "Customers",
            column: "City");

        // Your own data fix, reviewed with the rest of the migration
        migrationBuilder.Sql("UPDATE [Customers] SET [City] = N'Unknown' WHERE [City] IS NULL;");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        // DROP INDEX [IX_Customers_City] ON [Customers];
        migrationBuilder.DropIndex(
            name: "IX_Customers_City",
            table: "Customers");

        // ALTER TABLE [Customers] DROP COLUMN [City];  (after dropping any default constraint)
        migrationBuilder.DropColumn(
            name: "City",
            table: "Customers");
    }
}`
      }]
    },
    {
      id: "relationships-in-code",
      depth: "detailed",
      title: {
        en: "Relationships in code: 1:N, 1:1, N:N with skip navigations, and delete rules",
        hi: "Code में relationships: 1:N, 1:1, skip navigations वाला N:N, और delete rules",
        hg: "Code mein relationships: 1:N, 1:1, skip navigations wala N:N, aur delete rules"
      },
      body: {
        en: `<p><b>Analogy — the school office again:</b> each student row in the register has a column "class teacher" (1:N — the FK lives with the student). The ID-card counter keeps one card per student and refuses a second one (1:1 — a unique rule). The enrolment register has one line per (student, course) pair (N:N — a join table). And the office has rules for leaving: if a student leaves, his ID card is cancelled too (<b>cascade</b>), but a teacher cannot leave while students are still assigned to her (<b>restrict</b>).</p>
<ul>
<li><b>Principal</b> = the "one" side that is referenced (Teacher). <b>Dependent</b> = the side that holds the FK (Student). The Fluent API reads like a sentence: <code>HasOne(s =&gt; s.Teacher).WithMany(t =&gt; t.Students).HasForeignKey(s =&gt; s.TeacherId)</code>.</li>
<li><b>1:1</b>: <code>HasOne(...).WithOne(...).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code> — the generic argument tells EF which side is the dependent. SQL: FK + <b>unique index</b>.</li>
<li><b>N:N with skip navigations</b> (EF Core 5+): <code>Student.Courses</code> and <code>Course.Students</code> are enough. EF creates the join table with a composite PK and two FKs. You never see the join rows in code — you just do <code>student.Courses.Add(course)</code>.</li>
<li><b>Payload</b>: when the link itself has data (enrolment date, grade), make it a normal entity (<code>Enrollment</code> with <code>StudentId</code>, <code>CourseId</code>, <code>EnrolledOn</code>) — two 1:N relationships. You can still keep skip navigations through it with <code>UsingEntity&lt;Enrollment&gt;()</code>.</li>
<li><b>Delete behaviour</b>: required relationships default to <code>Cascade</code> (database <code>ON DELETE CASCADE</code>); optional ones to <code>ClientSetNull</code> (EF sets the FK to NULL for tracked dependents; the database has no action). <code>Restrict</code>/<code>NoAction</code> block the delete while children exist. SQL Server rejects "multiple cascade paths", so on complex models you switch some FKs to <code>Restrict</code>.</li>
<li><b>Querying across relationships</b> needs no manual JOIN: <code>db.Students.Where(s =&gt; s.Courses.Any(c =&gt; c.Title == "SQL"))</code> becomes a <code>WHERE EXISTS</code> over the join table.</li>
</ul>
<p><b>When to use:</b> skip navigations for pure link tables; an explicit join entity as soon as the link carries data; explicit Fluent API whenever the convention is not obvious to a reader (1:1, custom FK names, delete rules). <b>When not:</b> do not rely on cascade delete for business rules you have not agreed with the team — deleting one customer can silently delete years of orders; and do not hand-write join tables in code when a skip navigation is enough.</p>`,
        hi: `<p><b>Analogy — फिर से school office:</b> register में हर student की row में "class teacher" का एक column है (1:N — FK student के साथ रहता है)। ID-card counter हर student का एक ही card रखता है और दूसरा मना कर देता है (1:1 — एक unique नियम)। Enrolment register में हर (student, course) जोड़ी की एक line है (N:N — एक join table)। और office में छोड़ने के नियम हैं: student school छोड़े तो उसका ID card भी cancel (<b>cascade</b>), पर teacher तब तक नहीं छोड़ सकती जब तक उसके students assigned हैं (<b>restrict</b>)।</p>
<ul>
<li><b>Principal</b> = "एक" वाली side जिसे refer किया जाता है (Teacher)। <b>Dependent</b> = वो side जिसके पास FK है (Student)। Fluent API एक sentence की तरह पढ़ता है: <code>HasOne(s =&gt; s.Teacher).WithMany(t =&gt; t.Students).HasForeignKey(s =&gt; s.TeacherId)</code>।</li>
<li><b>1:1</b>: <code>HasOne(...).WithOne(...).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code> — generic argument EF को बताता है कि dependent कौन सी side है। SQL: FK + <b>unique index</b>।</li>
<li><b>Skip navigations वाला N:N</b> (EF Core 5+): <code>Student.Courses</code> और <code>Course.Students</code> काफ़ी हैं। EF composite PK और दो FKs वाला join table बनाता है। Code में join rows कभी नहीं दिखतीं — आप बस <code>student.Courses.Add(course)</code> करते हो।</li>
<li><b>Payload</b>: जब link का अपना data हो (enrolment date, grade), तो उसे normal entity बनाओ (<code>StudentId</code>, <code>CourseId</code>, <code>EnrolledOn</code> वाली <code>Enrollment</code>) — दो 1:N relationships। <code>UsingEntity&lt;Enrollment&gt;()</code> से उसके through skip navigations फिर भी रख सकते हो।</li>
<li><b>Delete behaviour</b>: required relationships का default <code>Cascade</code> है (database में <code>ON DELETE CASCADE</code>); optional का <code>ClientSetNull</code> (EF tracked dependents का FK NULL कर देता है; database में कोई action नहीं)। <code>Restrict</code>/<code>NoAction</code> children रहते हुए delete रोक देते हैं। SQL Server "multiple cascade paths" मना करता है, इसलिए complex models में कुछ FKs को <code>Restrict</code> करना पड़ता है।</li>
<li><b>Relationships पर query</b> के लिए हाथ से JOIN नहीं लिखना पड़ता: <code>db.Students.Where(s =&gt; s.Courses.Any(c =&gt; c.Title == "SQL"))</code> join table पर एक <code>WHERE EXISTS</code> बन जाता है।</li>
</ul>
<p><b>कब use करें:</b> सिर्फ़ link वाली tables के लिए skip navigations; link पर data आते ही explicit join entity; और जहाँ convention पढ़ने वाले को साफ़ न दिखे वहाँ explicit Fluent API (1:1, custom FK names, delete rules)। <b>कब नहीं:</b> जिन business rules पर team से बात नहीं हुई, उनके लिए cascade delete पर भरोसा मत करो — एक customer delete करने से सालों के orders चुपचाप delete हो सकते हैं; और जब skip navigation काफ़ी हो तो code में join tables हाथ से मत लिखो।</p>`,
        hg: `<p><b>Analogy — phir se school office:</b> register mein har student ki row mein "class teacher" ka ek column hai (1:N — FK student ke saath rehta hai). ID-card counter har student ka ek hi card rakhta hai aur doosra mana kar deta hai (1:1 — ek unique niyam). Enrolment register mein har (student, course) jodi ki ek line hai (N:N — ek join table). Aur office mein chhodne ke niyam hain: student school chhode to uska ID card bhi cancel (<b>cascade</b>), par teacher tab tak nahi chhod sakti jab tak uske students assigned hain (<b>restrict</b>).</p>
<ul>
<li><b>Principal</b> = "ek" wali side jise refer kiya jaata hai (Teacher). <b>Dependent</b> = woh side jiske paas FK hai (Student). Fluent API ek sentence ki tarah padhta hai: <code>HasOne(s =&gt; s.Teacher).WithMany(t =&gt; t.Students).HasForeignKey(s =&gt; s.TeacherId)</code>.</li>
<li><b>1:1</b>: <code>HasOne(...).WithOne(...).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code> — generic argument EF ko batata hai ki dependent kaunsi side hai. SQL: FK + <b>unique index</b>.</li>
<li><b>Skip navigations wala N:N</b> (EF Core 5+): <code>Student.Courses</code> aur <code>Course.Students</code> kaafi hain. EF composite PK aur do FKs wala join table banata hai. Code mein join rows kabhi nahi dikhti — aap bas <code>student.Courses.Add(course)</code> karte ho.</li>
<li><b>Payload</b>: jab link ka apna data ho (enrolment date, grade), to use normal entity banao (<code>StudentId</code>, <code>CourseId</code>, <code>EnrolledOn</code> wali <code>Enrollment</code>) — do 1:N relationships. <code>UsingEntity&lt;Enrollment&gt;()</code> se uske through skip navigations phir bhi rakh sakte ho.</li>
<li><b>Delete behaviour</b>: required relationships ka default <code>Cascade</code> hai (database mein <code>ON DELETE CASCADE</code>); optional ka <code>ClientSetNull</code> (EF tracked dependents ka FK NULL kar deta hai; database mein koi action nahi). <code>Restrict</code>/<code>NoAction</code> children rehte hue delete rok dete hain. SQL Server "multiple cascade paths" mana karta hai, isliye complex models mein kuch FKs ko <code>Restrict</code> karna padta hai.</li>
<li><b>Relationships par query</b> ke liye haath se JOIN nahi likhna padta: <code>db.Students.Where(s =&gt; s.Courses.Any(c =&gt; c.Title == "SQL"))</code> join table par ek <code>WHERE EXISTS</code> ban jaata hai.</li>
</ul>
<p><b>Kab use karein:</b> sirf link wali tables ke liye skip navigations; link par data aate hi explicit join entity; aur jahan convention padhne wale ko saaf na dikhe wahan explicit Fluent API (1:1, custom FK names, delete rules). <b>Kab nahi:</b> jin business rules par team se baat nahi hui, unke liye cascade delete par bharosa mat karo — ek customer delete karne se saalon ke orders chupchaap delete ho sakte hain; aur jab skip navigation kaafi ho to code mein join tables haath se mat likho.</p>`
      },
      code: [{
        caption: {
          en: "A school model: 1:N with Restrict, 1:1 with a unique index, N:N with a named join table — and the SQL Server DDL it produces",
          hi: "School model: Restrict वाला 1:N, unique index वाला 1:1, named join table वाला N:N — और उससे बनने वाला SQL Server DDL",
          hg: "School model: Restrict wala 1:N, unique index wala 1:1, named join table wala N:N — aur usse banne wala SQL Server DDL"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        expected: "CREATE TABLE [Courses] (\n    [Id] int NOT NULL IDENTITY,\n    [Title] nvarchar(max) NOT NULL,\n    CONSTRAINT [PK_Courses] PRIMARY KEY ([Id])\n);\nGO\n\n\nCREATE TABLE [Teachers] (\n    [Id] int NOT NULL IDENTITY,\n    [Name] nvarchar(max) NOT NULL,\n    CONSTRAINT [PK_Teachers] PRIMARY KEY ([Id])\n);\nGO\n\n\nCREATE TABLE [Students] (\n    [Id] int NOT NULL IDENTITY,\n    [Name] nvarchar(max) NOT NULL,\n    [TeacherId] int NOT NULL,\n    CONSTRAINT [PK_Students] PRIMARY KEY ([Id]),\n    CONSTRAINT [FK_Students_Teachers_TeacherId] FOREIGN KEY ([TeacherId]) REFERENCES [Teachers] ([Id]) ON DELETE NO ACTION\n);\nGO\n\n\nCREATE TABLE [Enrolments] (\n    [CoursesId] int NOT NULL,\n    [StudentsId] int NOT NULL,\n    CONSTRAINT [PK_Enrolments] PRIMARY KEY ([CoursesId], [StudentsId]),\n    CONSTRAINT [FK_Enrolments_Courses_CoursesId] FOREIGN KEY ([CoursesId]) REFERENCES [Courses] ([Id]) ON DELETE CASCADE,\n    CONSTRAINT [FK_Enrolments_Students_StudentsId] FOREIGN KEY ([StudentsId]) REFERENCES [Students] ([Id]) ON DELETE CASCADE\n);\nGO\n\n\nCREATE TABLE [IdCards] (\n    [Id] int NOT NULL IDENTITY,\n    [CardNumber] nvarchar(max) NOT NULL,\n    [StudentId] int NOT NULL,\n    CONSTRAINT [PK_IdCards] PRIMARY KEY ([Id]),\n    CONSTRAINT [FK_IdCards_Students_StudentId] FOREIGN KEY ([StudentId]) REFERENCES [Students] ([Id]) ON DELETE CASCADE\n);\nGO\n\n\nCREATE INDEX [IX_Enrolments_StudentsId] ON [Enrolments] ([StudentsId]);\nGO\n\n\nCREATE UNIQUE INDEX [IX_IdCards_StudentId] ON [IdCards] ([StudentId]);\nGO\n\n\nCREATE INDEX [IX_Students_TeacherId] ON [Students] ([TeacherId]);\nGO\n\n\n\nSELECT [s].[Id], [s].[Name], [s].[TeacherId]\nFROM [Students] AS [s]\nWHERE EXISTS (\n    SELECT 1\n    FROM [Enrolments] AS [e]\n    INNER JOIN [Courses] AS [c] ON [e].[CoursesId] = [c].[Id]\n    WHERE [s].[Id] = [e].[StudentsId] AND [c].[Title] = N'SQL')",
        src: `using Microsoft.EntityFrameworkCore;

var options = new DbContextOptionsBuilder<SchoolContext>()
    .UseSqlServer("Server=.;Database=School;Trusted_Connection=True;")   // dummy: no connection is made
    .Options;
using var db = new SchoolContext(options);
Console.WriteLine(db.Database.GenerateCreateScript());
Console.WriteLine(db.Students.Where(s => s.Courses.Any(c => c.Title == "SQL")).ToQueryString());

/* Output, the interesting lines (GO lines removed):
CREATE TABLE [Students] ( ... [TeacherId] int NOT NULL,
    CONSTRAINT [FK_Students_Teachers_TeacherId] FOREIGN KEY ([TeacherId])
        REFERENCES [Teachers] ([Id]) ON DELETE NO ACTION );          -- Restrict
CREATE TABLE [Enrolments] (                                            -- N:N join table
    [CoursesId] int NOT NULL,
    [StudentsId] int NOT NULL,
    CONSTRAINT [PK_Enrolments] PRIMARY KEY ([CoursesId], [StudentsId]),
    CONSTRAINT [FK_Enrolments_Courses_CoursesId] FOREIGN KEY ([CoursesId])
        REFERENCES [Courses] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Enrolments_Students_StudentsId] FOREIGN KEY ([StudentsId])
        REFERENCES [Students] ([Id]) ON DELETE CASCADE );
CREATE TABLE [IdCards] ( ... [StudentId] int NOT NULL,
    CONSTRAINT [FK_IdCards_Students_StudentId] FOREIGN KEY ([StudentId])
        REFERENCES [Students] ([Id]) ON DELETE CASCADE );              -- required -> cascade
CREATE INDEX [IX_Enrolments_StudentsId] ON [Enrolments] ([StudentsId]);
CREATE UNIQUE INDEX [IX_IdCards_StudentId] ON [IdCards] ([StudentId]); -- this makes it 1:1
CREATE INDEX [IX_Students_TeacherId] ON [Students] ([TeacherId]);

SELECT [s].[Id], [s].[Name], [s].[TeacherId]
FROM [Students] AS [s]
WHERE EXISTS (
    SELECT 1
    FROM [Enrolments] AS [e]
    INNER JOIN [Courses] AS [c] ON [e].[CoursesId] = [c].[Id]
    WHERE [s].[Id] = [e].[StudentsId] AND [c].[Title] = N'SQL')
*/

public class Teacher
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Student> Students { get; } = [];      // 1:N principal
}

public class Student
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public int TeacherId { get; set; }                // required FK
    public Teacher Teacher { get; set; } = null!;
    public IdCard? IdCard { get; set; }               // 1:1 (optional for the student)
    public List<Course> Courses { get; } = [];        // N:N skip navigation
}

public class IdCard
{
    public int Id { get; set; }
    public string CardNumber { get; set; } = "";
    public int StudentId { get; set; }                // FK on the dependent side
    public Student Student { get; set; } = null!;
}

public class Course
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public List<Student> Students { get; } = [];      // N:N skip navigation
}

public class SchoolContext(DbContextOptions<SchoolContext> options) : DbContext(options)
{
    public DbSet<Teacher> Teachers => Set<Teacher>();
    public DbSet<Student> Students => Set<Student>();
    public DbSet<IdCard> IdCards => Set<IdCard>();
    public DbSet<Course> Courses => Set<Course>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // 1:N — a teacher with students cannot be deleted
        modelBuilder.Entity<Student>()
            .HasOne(s => s.Teacher)
            .WithMany(t => t.Students)
            .HasForeignKey(s => s.TeacherId)
            .OnDelete(DeleteBehavior.Restrict);

        // 1:1 — IdCard is the dependent (it holds the FK)
        modelBuilder.Entity<Student>()
            .HasOne(s => s.IdCard)
            .WithOne(c => c.Student)
            .HasForeignKey<IdCard>(c => c.StudentId);

        // N:N — EF creates the join table; we only choose its name
        modelBuilder.Entity<Student>()
            .HasMany(s => s.Courses)
            .WithMany(c => c.Students)
            .UsingEntity(j => j.ToTable("Enrolments"));
    }
}`
      }]
    },
    {
      id: "loading-in-code",
      depth: "detailed",
      title: {
        en: "Loading in code: Include/ThenInclude and its SQL, filtered Include, explicit Load, lazy proxies",
        hi: "Code में loading: Include/ThenInclude और उसका SQL, filtered Include, explicit Load, lazy proxies",
        hg: "Code mein loading: Include/ThenInclude aur uska SQL, filtered Include, explicit Load, lazy proxies"
      },
      body: {
        en: `<p><b>Analogy — a quick-commerce grocery app:</b> you can put everything in <b>one order</b> and get one delivery (eager). You can place an <b>add-on order</b> later when you decide you need curd (explicit). Or imagine an auto-mode where the app sends a rider <b>every time</b> you open the fridge and something is missing (lazy) — no planning needed, but on a busy day twenty riders ring your bell.</p>
<ul>
<li><b>Include</b> = a JOIN in the same SQL. A <b>required reference</b> (<code>Order.Customer</code>) becomes an <code>INNER JOIN</code>; a <b>collection</b> (<code>Customer.Orders</code>) becomes a <code>LEFT JOIN</code> plus <code>ORDER BY</code> on the keys, so EF can group the flat rows back into objects.</li>
<li><b>ThenInclude</b> goes one level deeper (<code>Customer → Orders → Items</code>). Each extra collection level adds another JOIN — and the parent columns repeat on every child row.</li>
<li><b>Filtered Include</b> (EF Core 5+): <code>Include(c =&gt; c.Orders.Where(o =&gt; o.Total &gt; 500).OrderByDescending(o =&gt; o.Total))</code> loads only some children. The filter goes into the JOIN's subquery.</li>
<li>Two or more collection Includes on one query multiply rows (<b>cartesian explosion</b>). <code>AsSplitQuery()</code> sends one SQL per collection instead — Day 6 covers the trade-off.</li>
<li><b>Explicit</b>: <code>db.Entry(customer).Collection(c =&gt; c.Orders).Load()</code> / <code>.Reference(o =&gt; o.Customer).Load()</code>. <code>.Query()</code> gives an <code>IQueryable</code> over just those children, so <code>.Query().Count()</code> runs a SQL <code>COUNT</code> without loading them.</li>
<li><b>Lazy</b>: package <code>Microsoft.EntityFrameworkCore.Proxies</code>, <code>options.UseLazyLoadingProxies()</code>, and every navigation <code>public virtual</code> (EF creates a runtime subclass, a proxy, that overrides the getter). The context must still be alive when you touch the navigation.</li>
<li><b>Relationship fix-up</b>: whatever loading style you use, EF connects tracked entities to each other automatically. If you load orders and later load their customer in the same context, <code>order.Customer</code> fills itself.</li>
<li>To see the SQL: <code>query.ToQueryString()</code> (no execution) or <code>optionsBuilder.LogTo(Console.WriteLine)</code> while developing.</li>
</ul>
<p><b>When to use:</b> <code>Include</code> for data every caller of that endpoint needs; explicit loading (or <code>.Query().Count()</code>) for data needed only on some branches; lazy loading only in small desktop/tooling apps where convenience matters more than query count. <b>When not:</b> do not chain Includes "for safety" — every one makes the SQL heavier; do not use lazy loading in web APIs or loops (hidden N+1); and if you need only a few columns, a projection with <code>Select</code> beats loading whole entity graphs (Day 6).</p>`,
        hi: `<p><b>Analogy — quick-commerce grocery app:</b> आप सब कुछ <b>एक order</b> में डालकर एक delivery ले सकते हो (eager)। बाद में दही की ज़रूरत लगे तो <b>add-on order</b> दे सकते हो (explicit)। या एक auto-mode सोचो जिसमें fridge खोलने पर कुछ कम दिखे तो app <b>हर बार</b> एक rider भेज देता है (lazy) — planning नहीं करनी पड़ती, पर busy दिन पर बीस riders आपकी bell बजाते हैं।</p>
<ul>
<li><b>Include</b> = उसी SQL में एक JOIN। <b>Required reference</b> (<code>Order.Customer</code>) <code>INNER JOIN</code> बनता है; <b>collection</b> (<code>Customer.Orders</code>) <code>LEFT JOIN</code> और keys पर <code>ORDER BY</code> बनता है, ताकि EF flat rows को वापस objects में group कर सके।</li>
<li><b>ThenInclude</b> एक level और अंदर जाता है (<code>Customer → Orders → Items</code>)। हर extra collection level एक और JOIN जोड़ता है — और parent के columns हर child row पर दोहराए जाते हैं।</li>
<li><b>Filtered Include</b> (EF Core 5+): <code>Include(c =&gt; c.Orders.Where(o =&gt; o.Total &gt; 500).OrderByDescending(o =&gt; o.Total))</code> सिर्फ़ कुछ children load करता है। Filter JOIN की subquery में जाता है।</li>
<li>एक query पर दो या ज़्यादा collection Includes rows को गुणा कर देते हैं (<b>cartesian explosion</b>)। <code>AsSplitQuery()</code> इसकी जगह हर collection के लिए अलग SQL भेजता है — trade-off Day 6 में।</li>
<li><b>Explicit</b>: <code>db.Entry(customer).Collection(c =&gt; c.Orders).Load()</code> / <code>.Reference(o =&gt; o.Customer).Load()</code>। <code>.Query()</code> सिर्फ़ उन्हीं children पर एक <code>IQueryable</code> देता है, इसलिए <code>.Query().Count()</code> उन्हें load किए बिना SQL <code>COUNT</code> चलाता है।</li>
<li><b>Lazy</b>: package <code>Microsoft.EntityFrameworkCore.Proxies</code>, <code>options.UseLazyLoadingProxies()</code>, और हर navigation <code>public virtual</code> (EF runtime पर एक subclass, यानी proxy, बनाता है जो getter को override करती है)। Navigation छूते समय context ज़िंदा होना चाहिए।</li>
<li><b>Relationship fix-up</b>: loading का कोई भी तरीका हो, EF tracked entities को आपस में खुद जोड़ देता है। Orders load करके बाद में उसी context में उनका customer load करो, तो <code>order.Customer</code> अपने-आप भर जाता है।</li>
<li>SQL देखने के लिए: <code>query.ToQueryString()</code> (बिना चलाए) या development में <code>optionsBuilder.LogTo(Console.WriteLine)</code>।</li>
</ul>
<p><b>कब use करें:</b> उस endpoint के हर caller को जो data चाहिए उसके लिए <code>Include</code>; सिर्फ़ कुछ branches पर चाहिए उसके लिए explicit loading (या <code>.Query().Count()</code>); lazy loading सिर्फ़ छोटे desktop/tooling apps में, जहाँ query count से ज़्यादा सुविधा मायने रखती है। <b>कब नहीं:</b> "safety के लिए" Includes की chain मत लगाओ — हर एक SQL को भारी करता है; web APIs या loops में lazy loading मत use करो (छुपा N+1); और अगर सिर्फ़ कुछ columns चाहिए, तो पूरे entity graphs load करने से <code>Select</code> वाला projection बेहतर है (Day 6)।</p>`,
        hg: `<p><b>Analogy — quick-commerce grocery app:</b> aap sab kuch <b>ek order</b> mein daalkar ek delivery le sakte ho (eager). Baad mein dahi ki zaroorat lage to <b>add-on order</b> de sakte ho (explicit). Ya ek auto-mode socho jismein fridge kholne par kuch kam dikhe to app <b>har baar</b> ek rider bhej deta hai (lazy) — planning nahi karni padti, par busy din par bees riders aapki bell bajaate hain.</p>
<ul>
<li><b>Include</b> = usi SQL mein ek JOIN. <b>Required reference</b> (<code>Order.Customer</code>) <code>INNER JOIN</code> banta hai; <b>collection</b> (<code>Customer.Orders</code>) <code>LEFT JOIN</code> aur keys par <code>ORDER BY</code> banta hai, taaki EF flat rows ko wapas objects mein group kar sake.</li>
<li><b>ThenInclude</b> ek level aur andar jaata hai (<code>Customer → Orders → Items</code>). Har extra collection level ek aur JOIN jodta hai — aur parent ke columns har child row par dohraaye jaate hain.</li>
<li><b>Filtered Include</b> (EF Core 5+): <code>Include(c =&gt; c.Orders.Where(o =&gt; o.Total &gt; 500).OrderByDescending(o =&gt; o.Total))</code> sirf kuch children load karta hai. Filter JOIN ki subquery mein jaata hai.</li>
<li>Ek query par do ya zyaada collection Includes rows ko guna kar dete hain (<b>cartesian explosion</b>). <code>AsSplitQuery()</code> iski jagah har collection ke liye alag SQL bhejta hai — trade-off Day 6 mein.</li>
<li><b>Explicit</b>: <code>db.Entry(customer).Collection(c =&gt; c.Orders).Load()</code> / <code>.Reference(o =&gt; o.Customer).Load()</code>. <code>.Query()</code> sirf unhi children par ek <code>IQueryable</code> deta hai, isliye <code>.Query().Count()</code> unhe load kiye bina SQL <code>COUNT</code> chalata hai.</li>
<li><b>Lazy</b>: package <code>Microsoft.EntityFrameworkCore.Proxies</code>, <code>options.UseLazyLoadingProxies()</code>, aur har navigation <code>public virtual</code> (EF runtime par ek subclass, yaani proxy, banata hai jo getter ko override karti hai). Navigation chhoote samay context zinda hona chahiye.</li>
<li><b>Relationship fix-up</b>: loading ka koi bhi tareeka ho, EF tracked entities ko aapas mein khud jod deta hai. Orders load karke baad mein usi context mein unka customer load karo, to <code>order.Customer</code> apne-aap bhar jaata hai.</li>
<li>SQL dekhne ke liye: <code>query.ToQueryString()</code> (bina chalaaye) ya development mein <code>optionsBuilder.LogTo(Console.WriteLine)</code>.</li>
</ul>
<p><b>Kab use karein:</b> us endpoint ke har caller ko jo data chahiye uske liye <code>Include</code>; sirf kuch branches par chahiye uske liye explicit loading (ya <code>.Query().Count()</code>); lazy loading sirf chhote desktop/tooling apps mein, jahan query count se zyaada suvidha maayne rakhti hai. <b>Kab nahi:</b> "safety ke liye" Includes ki chain mat lagao — har ek SQL ko bhaari karta hai; web APIs ya loops mein lazy loading mat use karo (chhupa N+1); aur agar sirf kuch columns chahiye, to poore entity graphs load karne se <code>Select</code> wala projection behtar hai (Day 6).</p>`
      },
      code: [{
        caption: {
          en: "Default vs eager vs explicit loading on in-memory SQLite, counting the SQL commands EF sends",
          hi: "In-memory SQLite पर default बनाम eager बनाम explicit loading, EF के भेजे SQL commands गिनते हुए",
          hg: "In-memory SQLite par default vs eager vs explicit loading, EF ke bheje SQL commands ginte hue"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
        expected: "Default:  Customer is null = True, queries = 1\nEager:    Customer = Asha, queries = 1\nExplicit: loaded = False, orders in memory = 0\nExplicit: big orders (SQL COUNT) = 1, orders in memory = 0\nExplicit: loaded = True, orders in memory = 2, queries = 3",
        src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;

// An in-memory SQLite database lives as long as this connection stays open
using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();

int queries = 0;
var options = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlite(connection)
    .LogTo(_ => queries++, new[] { RelationalEventId.CommandExecuted })   // count SQL commands
    .Options;

using (var db = new ShopContext(options))
{
    db.Database.EnsureCreated();
    var asha = new Customer { Name = "Asha" };
    asha.Orders.Add(new Order { Total = 300 });
    asha.Orders.Add(new Order { Total = 700 });
    db.Customers.Add(asha);
    db.SaveChanges();
}

// 1. Default: you get only what you query
using (var db = new ShopContext(options))
{
    queries = 0;
    var order = db.Orders.OrderBy(o => o.Id).First();
    Console.WriteLine($"Default:  Customer is null = {order.Customer is null}, queries = {queries}");
}

// 2. Eager: Include adds a JOIN to the same single query
using (var db = new ShopContext(options))
{
    queries = 0;
    var order = db.Orders.Include(o => o.Customer).OrderBy(o => o.Id).First();
    Console.WriteLine($"Eager:    Customer = {order.Customer.Name}, queries = {queries}");
}

// 3. Explicit: load the children later, only if you decide to
using (var db = new ShopContext(options))
{
    queries = 0;
    var customer = db.Customers.Single(c => c.Name == "Asha");                 // query 1
    var orders = db.Entry(customer).Collection(c => c.Orders);
    Console.WriteLine($"Explicit: loaded = {orders.IsLoaded}, orders in memory = {customer.Orders.Count}");

    int bigOrders = orders.Query().Count(o => o.Total > 500);                   // query 2: SQL COUNT only
    Console.WriteLine($"Explicit: big orders (SQL COUNT) = {bigOrders}, orders in memory = {customer.Orders.Count}");

    orders.Load();                                                              // query 3
    Console.WriteLine($"Explicit: loaded = {orders.IsLoaded}, orders in memory = {customer.Orders.Count}, queries = {queries}");
}

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Order> Orders { get; } = [];
}

public class Order
{
    public int Id { get; set; }
    public decimal Total { get; set; }
    public int CustomerId { get; set; }
    public Customer Customer { get; set; } = null!;   // null! : EF fills it only when loaded
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();
}`
      }, {
        caption: {
          en: "The SQL Server SQL behind ThenInclude and a filtered Include (ToQueryString — no database needed)",
          hi: "ThenInclude और filtered Include के पीछे का SQL Server SQL (ToQueryString — database की ज़रूरत नहीं)",
          hg: "ThenInclude aur filtered Include ke peeche ka SQL Server SQL (ToQueryString — database ki zaroorat nahi)"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        expected: "SELECT [c].[Id], [c].[Name], [s].[Id], [s].[CustomerId], [s].[Total], [s].[Id0], [s].[OrderId], [s].[Product]\nFROM [Customers] AS [c]\nLEFT JOIN (\n    SELECT [o].[Id], [o].[CustomerId], [o].[Total], [o0].[Id] AS [Id0], [o0].[OrderId], [o0].[Product]\n    FROM [Orders] AS [o]\n    LEFT JOIN [OrderItems] AS [o0] ON [o].[Id] = [o0].[OrderId]\n) AS [s] ON [c].[Id] = [s].[CustomerId]\nORDER BY [c].[Id], [s].[Id]\n-----\nSELECT [c].[Id], [c].[Name], [o0].[Id], [o0].[CustomerId], [o0].[Total]\nFROM [Customers] AS [c]\nLEFT JOIN (\n    SELECT [o].[Id], [o].[CustomerId], [o].[Total]\n    FROM [Orders] AS [o]\n    WHERE [o].[Total] > 500.0\n) AS [o0] ON [c].[Id] = [o0].[CustomerId]\nORDER BY [c].[Id]",
        src: `using Microsoft.EntityFrameworkCore;

var options = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlServer("Server=.;Database=Shop;Trusted_Connection=True;")   // dummy: nothing connects
    .Options;
using var db = new ShopContext(options);

// Two levels: Customer -> Orders -> Items
var withItems = db.Customers
    .Include(c => c.Orders)
        .ThenInclude(o => o.Items);
Console.WriteLine(withItems.ToQueryString());
Console.WriteLine("-----");

// Filtered Include (EF Core 5+): only the big orders
var bigOrdersOnly = db.Customers
    .Include(c => c.Orders.Where(o => o.Total > 500));
Console.WriteLine(bigOrdersOnly.ToQueryString());

/* Output (alias names such as [s], [o0] can differ between EF Core versions):
SELECT [c].[Id], [c].[Name], [s].[Id], [s].[CustomerId], [s].[Total], [s].[Id0], [s].[OrderId], [s].[Product]
FROM [Customers] AS [c]
LEFT JOIN (
    SELECT [o].[Id], [o].[CustomerId], [o].[Total], [o0].[Id] AS [Id0], [o0].[OrderId], [o0].[Product]
    FROM [Orders] AS [o]
    LEFT JOIN [OrderItems] AS [o0] ON [o].[Id] = [o0].[OrderId]
) AS [s] ON [c].[Id] = [s].[CustomerId]
ORDER BY [c].[Id], [s].[Id]          -- keys, so EF can rebuild the object graph
-----
SELECT [c].[Id], [c].[Name], [o0].[Id], [o0].[CustomerId], [o0].[Total]
FROM [Customers] AS [c]
LEFT JOIN (
    SELECT [o].[Id], [o].[CustomerId], [o].[Total]
    FROM [Orders] AS [o]
    WHERE [o].[Total] > 500.0        -- the Include filter lands in the subquery
) AS [o0] ON [c].[Id] = [o0].[CustomerId]
ORDER BY [c].[Id]
*/

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Order> Orders { get; } = [];
}

public class Order
{
    public int Id { get; set; }
    public decimal Total { get; set; }
    public int CustomerId { get; set; }
    public Customer Customer { get; set; } = null!;
    public List<OrderItem> Items { get; } = [];
}

public class OrderItem
{
    public int Id { get; set; }
    public string Product { get; set; } = "";
    public int OrderId { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<OrderItem> OrderItems => Set<OrderItem>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        => modelBuilder.Entity<Order>().Property(o => o.Total).HasPrecision(10, 2);
}`
      }]
    },
    {
      id: "tracking-in-code",
      depth: "detailed",
      title: {
        en: "The change tracker in code: states, snapshots, SaveChanges, AsNoTracking and identity resolution",
        hi: "Code में change tracker: states, snapshots, SaveChanges, AsNoTracking और identity resolution",
        hg: "Code mein change tracker: states, snapshots, SaveChanges, AsNoTracking aur identity resolution"
      },
      body: {
        en: `<p><b>Analogy — hotel check-in and check-out:</b> at check-in, the staff note what is in the minibar (the <b>snapshot</b>). At check-out, they compare and bill <b>only what changed</b> — one soft drink, not the whole minibar. A walk-in visitor who never checked in has no record, so nothing is compared or billed. The tracked entity is the checked-in guest; the walk-in visitor is a no-tracking (Detached) object.</p>
<ul>
<li><b>States</b>: <code>Detached</code> (not known to this context), <code>Added</code>, <code>Unchanged</code>, <code>Modified</code>, <code>Deleted</code>. Read one with <code>db.Entry(entity).State</code>; see all with <code>db.ChangeTracker.Entries()</code> or <code>db.ChangeTracker.DebugView.LongView</code> while debugging.</li>
<li><b>Snapshot change detection</b> (the default): when an entity is tracked, EF stores its original values. <code>DetectChanges()</code> compares current vs original values property by property. <code>SaveChanges()</code> calls it automatically (so does <code>Entry()</code> for that one entity).</li>
<li>The <code>UPDATE</code> contains <b>only the modified columns</b>: change <code>City</code> and EF sends <code>UPDATE [Customers] SET [City] = ... WHERE [Id] = ...</code> — not every column.</li>
<li><b>After SaveChanges</b>: Added/Modified become <code>Unchanged</code>, generated keys (IDENTITY) are copied back into your objects, and Deleted entities become <code>Detached</code>. All statements run in <b>one transaction</b> by default.</li>
<li><b>Identity resolution</b>: a tracked query that returns a row the context already tracks gives you the <b>existing object</b> — its in-memory values are not overwritten by fresh database values. That is why a long-lived context can show stale data.</li>
<li><code>AsNoTracking()</code>: no snapshot and no identity map; every row becomes a new object. <code>AsNoTrackingWithIdentityResolution()</code>: still no tracking, but one object per key inside that query (useful when Include brings the same parent many times).</li>
<li>Global default for read-heavy contexts: <code>options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, then use <code>AsTracking()</code> where you update.</li>
<li><code>db.ChangeTracker.Clear()</code> forgets everything — handy in batch jobs that process many chunks with one context.</li>
</ul>
<p><b>When to use:</b> tracking for the "load → change → SaveChanges" flow; <code>AsNoTracking()</code> for reads; <code>Entries()</code>/<code>DebugView</code> when an update does not behave as expected. <b>When not:</b> do not track thousands of rows you only display (memory + slower DetectChanges); do not assume a second tracked query refreshes an entity already in the context — use a new context (or <code>Reload()</code>) for fresh values.</p>`,
        hi: `<p><b>Analogy — hotel का check-in और check-out:</b> check-in पर staff minibar में क्या है वो note कर लेता है (<b>snapshot</b>)। Check-out पर वो मिलान करके <b>सिर्फ़ जो बदला उसका</b> bill बनाते हैं — एक cold drink, पूरा minibar नहीं। जो visitor बिना check-in के आया, उसका कोई record नहीं, तो न कुछ मिलाया जाता है न bill बनता है। Tracked entity check-in वाला guest है; बिना check-in वाला visitor no-tracking (Detached) object है।</p>
<ul>
<li><b>States</b>: <code>Detached</code> (यह context उसे नहीं जानता), <code>Added</code>, <code>Unchanged</code>, <code>Modified</code>, <code>Deleted</code>। एक की state <code>db.Entry(entity).State</code> से पढ़ो; debugging में सब <code>db.ChangeTracker.Entries()</code> या <code>db.ChangeTracker.DebugView.LongView</code> से देखो।</li>
<li><b>Snapshot change detection</b> (default): entity track होते ही EF उसकी original values रख लेता है। <code>DetectChanges()</code> current और original values को property by property compare करता है। <code>SaveChanges()</code> इसे अपने-आप call करता है (उस एक entity के लिए <code>Entry()</code> भी)।</li>
<li><code>UPDATE</code> में <b>सिर्फ़ बदले हुए columns</b> होते हैं: <code>City</code> बदलो तो EF भेजता है <code>UPDATE [Customers] SET [City] = ... WHERE [Id] = ...</code> — हर column नहीं।</li>
<li><b>SaveChanges के बाद</b>: Added/Modified <code>Unchanged</code> बन जाते हैं, generated keys (IDENTITY) आपके objects में वापस copy हो जाती हैं, और Deleted entities <code>Detached</code> हो जाती हैं। By default सारे statements <b>एक transaction</b> में चलते हैं।</li>
<li><b>Identity resolution</b>: tracked query अगर ऐसी row लौटाए जिसे context पहले से track कर रहा है, तो आपको <b>वही पुराना object</b> मिलता है — उसकी in-memory values database की नई values से overwrite नहीं होतीं। इसीलिए लंबे समय तक ज़िंदा context पुराना data दिखा सकता है।</li>
<li><code>AsNoTracking()</code>: न snapshot, न identity map; हर row एक नया object बनती है। <code>AsNoTrackingWithIdentityResolution()</code>: tracking फिर भी नहीं, पर उस query के अंदर हर key का एक object (काम का है जब Include एक ही parent को कई बार लाए)।</li>
<li>Read-heavy contexts के लिए global default: <code>options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, फिर जहाँ update करना है वहाँ <code>AsTracking()</code>।</li>
<li><code>db.ChangeTracker.Clear()</code> सब कुछ भुला देता है — उन batch jobs में काम का जो एक context से कई chunks process करते हैं।</li>
</ul>
<p><b>कब use करें:</b> "load → बदलो → SaveChanges" flow के लिए tracking; reads के लिए <code>AsNoTracking()</code>; जब कोई update उम्मीद के मुताबिक़ न चले तब <code>Entries()</code>/<code>DebugView</code>। <b>कब नहीं:</b> सिर्फ़ दिखाने वाली हज़ारों rows track मत करो (memory + धीमा DetectChanges); और यह मत मानो कि दूसरी tracked query context में पहले से मौजूद entity को refresh कर देगी — fresh values के लिए नया context (या <code>Reload()</code>) use करो।</p>`,
        hg: `<p><b>Analogy — hotel ka check-in aur check-out:</b> check-in par staff minibar mein kya hai woh note kar leta hai (<b>snapshot</b>). Check-out par woh milaan karke <b>sirf jo badla uska</b> bill banaate hain — ek cold drink, poora minibar nahi. Jo visitor bina check-in ke aaya, uska koi record nahi, to na kuch milaaya jaata hai na bill banta hai. Tracked entity check-in wala guest hai; bina check-in wala visitor no-tracking (Detached) object hai.</p>
<ul>
<li><b>States</b>: <code>Detached</code> (yeh context use nahi jaanta), <code>Added</code>, <code>Unchanged</code>, <code>Modified</code>, <code>Deleted</code>. Ek ki state <code>db.Entry(entity).State</code> se padho; debugging mein sab <code>db.ChangeTracker.Entries()</code> ya <code>db.ChangeTracker.DebugView.LongView</code> se dekho.</li>
<li><b>Snapshot change detection</b> (default): entity track hote hi EF uski original values rakh leta hai. <code>DetectChanges()</code> current aur original values ko property by property compare karta hai. <code>SaveChanges()</code> ise apne-aap call karta hai (us ek entity ke liye <code>Entry()</code> bhi).</li>
<li><code>UPDATE</code> mein <b>sirf badle hue columns</b> hote hain: <code>City</code> badlo to EF bhejta hai <code>UPDATE [Customers] SET [City] = ... WHERE [Id] = ...</code> — har column nahi.</li>
<li><b>SaveChanges ke baad</b>: Added/Modified <code>Unchanged</code> ban jaate hain, generated keys (IDENTITY) aapke objects mein wapas copy ho jaati hain, aur Deleted entities <code>Detached</code> ho jaati hain. By default saare statements <b>ek transaction</b> mein chalte hain.</li>
<li><b>Identity resolution</b>: tracked query agar aisi row lautaaye jise context pehle se track kar raha hai, to aapko <b>wahi purana object</b> milta hai — uski in-memory values database ki nayi values se overwrite nahi hoti. Isiliye lambe samay tak zinda context purana data dikha sakta hai.</li>
<li><code>AsNoTracking()</code>: na snapshot, na identity map; har row ek naya object banti hai. <code>AsNoTrackingWithIdentityResolution()</code>: tracking phir bhi nahi, par us query ke andar har key ka ek object (kaam ka hai jab Include ek hi parent ko kai baar laaye).</li>
<li>Read-heavy contexts ke liye global default: <code>options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, phir jahan update karna hai wahan <code>AsTracking()</code>.</li>
<li><code>db.ChangeTracker.Clear()</code> sab kuch bhula deta hai — un batch jobs mein kaam ka jo ek context se kai chunks process karte hain.</li>
</ul>
<p><b>Kab use karein:</b> "load → badlo → SaveChanges" flow ke liye tracking; reads ke liye <code>AsNoTracking()</code>; jab koi update ummeed ke mutaabik na chale tab <code>Entries()</code>/<code>DebugView</code>. <b>Kab nahi:</b> sirf dikhaane wali hazaaron rows track mat karo (memory + dheema DetectChanges); aur yeh mat maano ki doosri tracked query context mein pehle se maujood entity ko refresh kar degi — fresh values ke liye naya context (ya <code>Reload()</code>) use karo.</p>`
      },
      code: [{
        caption: {
          en: "Follow one customer through the states: Unchanged → Modified (only City) → Unchanged → Deleted → Detached, plus a no-tracking read",
          hi: "एक customer को states में follow करो: Unchanged → Modified (सिर्फ़ City) → Unchanged → Deleted → Detached, और एक no-tracking read",
          hg: "Ek customer ko states mein follow karo: Unchanged → Modified (sirf City) → Unchanged → Deleted → Detached, aur ek no-tracking read"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
        expected: "After query:  Unchanged\nAfter edit:   Modified, modified = [City], original City = Pune\n  tracked: Asha -> Modified\n  tracked: Ravi -> Added\nSaveChanges wrote 2 rows; Asha is Unchanged\nAfter Remove: Deleted\nAfter save:   Detached\nNo-tracking:  tracked entities = 0, SaveChanges wrote 0 rows",
        src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;

using (var db = new ShopContext(options))
{
    db.Database.EnsureCreated();
    db.Customers.Add(new Customer { Name = "Asha", City = "Pune" });
    db.SaveChanges();
}

using (var db = new ShopContext(options))
{
    var asha = db.Customers.Single(c => c.Name == "Asha");
    Console.WriteLine($"After query:  {db.Entry(asha).State}");

    asha.City = "Mumbai";                                    // just a property set, no EF call
    var entry = db.Entry(asha);                              // Entry() runs DetectChanges for asha
    var changed = entry.Properties.Where(p => p.IsModified).Select(p => p.Metadata.Name);
    Console.WriteLine($"After edit:   {entry.State}, modified = [{string.Join(", ", changed)}], " +
                      $"original City = {entry.Property(c => c.City).OriginalValue}");

    db.Customers.Add(new Customer { Name = "Ravi", City = "Delhi" });
    foreach (var e in db.ChangeTracker.Entries<Customer>().OrderBy(e => e.Entity.Name))
        Console.WriteLine($"  tracked: {e.Entity.Name} -> {e.State}");

    int rows = db.SaveChanges();                             // 1 UPDATE + 1 INSERT, one transaction
    Console.WriteLine($"SaveChanges wrote {rows} rows; Asha is {db.Entry(asha).State}");

    db.Customers.Remove(asha);
    Console.WriteLine($"After Remove: {db.Entry(asha).State}");
    db.SaveChanges();                                        // DELETE
    Console.WriteLine($"After save:   {db.Entry(asha).State}");
}

using (var db = new ShopContext(options))
{
    var ravi = db.Customers.AsNoTracking().Single(c => c.Name == "Ravi");
    int trackedCount = db.ChangeTracker.Entries().Count();
    ravi.City = "Chennai";                                   // nobody is watching this object
    Console.WriteLine($"No-tracking:  tracked entities = {trackedCount}, SaveChanges wrote {db.SaveChanges()} rows");
}

/* Output:
After query:  Unchanged
After edit:   Modified, modified = [City], original City = Pune
  tracked: Asha -> Modified
  tracked: Ravi -> Added
SaveChanges wrote 2 rows; Asha is Unchanged
After Remove: Deleted
After save:   Detached
No-tracking:  tracked entities = 0, SaveChanges wrote 0 rows
*/

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string? City { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`
      }]
    },
  ],
  qa: [
    {
      id: "what-is-dbcontext",
      depth: "short",
      q: "What is DbContext in EF Core? And what is a DbSet?",
      answer: "DbContext is a unit-of-work session with the database: it turns LINQ into SQL, tracks the entities it loads, and SaveChanges writes all changes in one transaction. A DbSet&lt;T&gt; represents one table.",
      meaning: {
        hi: "DbContext database के साथ एक unit-of-work session है: यह LINQ को SQL में बदलता है, load की गई entities track करता है, और SaveChanges सारे बदलाव एक transaction में लिखता है। DbSet&lt;T&gt; एक table को दर्शाता है।",
        hg: "DbContext database ke saath ek unit-of-work session hai: yeh LINQ ko SQL mein badalta hai, load ki gayi entities track karta hai, aur SaveChanges saare badlaav ek transaction mein likhta hai. DbSet&lt;T&gt; ek table ko darshaata hai."
      },
      explain: {
        en: `<ul>
<li>Jobs of DbContext: connection management, query translation (LINQ → SQL), materialization (rows → objects), <b>change tracking</b>, <b>SaveChanges</b>, and holding the <b>model</b> (mapping of classes to tables, built once and cached).</li>
<li><code>DbSet&lt;Customer&gt;</code> is an <code>IQueryable&lt;Customer&gt;</code> — <code>db.Customers.Where(...)</code> becomes SQL — plus <code>Add</code>, <code>Remove</code>, <code>Find</code>.</li>
<li>It already implements the <b>Unit of Work</b> (one <code>SaveChanges</code> for all changes) and <b>Repository</b>-like access (DbSet). That is why "should I wrap EF in my own repository?" is a common follow-up (Day 11).</li>
</ul>
<p>Follow-up: "Is DbContext expensive to create?" — No. It is designed to be short-lived; the model is cached per context type. Pooling only saves a little allocation in very hot paths.</p>`,
        hi: `<ul>
<li>DbContext के काम: connection management, query translation (LINQ → SQL), materialization (rows → objects), <b>change tracking</b>, <b>SaveChanges</b>, और <b>model</b> रखना (classes का tables से mapping, एक बार बनता है और cache रहता है)।</li>
<li><code>DbSet&lt;Customer&gt;</code> एक <code>IQueryable&lt;Customer&gt;</code> है — <code>db.Customers.Where(...)</code> SQL बनता है — साथ में <code>Add</code>, <code>Remove</code>, <code>Find</code>।</li>
<li>यह पहले से <b>Unit of Work</b> (सारे बदलावों के लिए एक <code>SaveChanges</code>) और <b>Repository</b> जैसा access (DbSet) देता है। इसीलिए "क्या EF को अपनी repository में wrap करें?" एक common follow-up है (Day 11)।</li>
</ul>
<p>Follow-up: "क्या DbContext बनाना महँगा है?" — नहीं। यह कम समय के लिए ही design हुआ है; model हर context type के लिए cache रहता है। Pooling बहुत hot paths में बस थोड़ा allocation बचाता है।</p>`,
        hg: `<ul>
<li>DbContext ke kaam: connection management, query translation (LINQ → SQL), materialization (rows → objects), <b>change tracking</b>, <b>SaveChanges</b>, aur <b>model</b> rakhna (classes ka tables se mapping, ek baar banta hai aur cache rehta hai).</li>
<li><code>DbSet&lt;Customer&gt;</code> ek <code>IQueryable&lt;Customer&gt;</code> hai — <code>db.Customers.Where(...)</code> SQL banta hai — saath mein <code>Add</code>, <code>Remove</code>, <code>Find</code>.</li>
<li>Yeh pehle se <b>Unit of Work</b> (saare badlaavon ke liye ek <code>SaveChanges</code>) aur <b>Repository</b> jaisa access (DbSet) deta hai. Isiliye "kya EF ko apni repository mein wrap karein?" ek common follow-up hai (Day 11).</li>
</ul>
<p>Follow-up: "Kya DbContext banana mehnga hai?" — Nahi. Yeh kam samay ke liye hi design hua hai; model har context type ke liye cache rehta hai. Pooling bahut hot paths mein bas thoda allocation bachaata hai.</p>`
      }
    },
    {
      id: "dbcontext-lifetime",
      depth: "short",
      q: "What is the lifetime of DbContext in ASP.NET Core, and why?",
      answer: "Scoped: AddDbContext gives one instance per HTTP request. DbContext is not thread-safe and its change tracker should be short-lived, so it must not be a singleton; background or parallel work uses a DbContext factory.",
      meaning: {
        hi: "Scoped: AddDbContext हर HTTP request को एक instance देता है। DbContext thread-safe नहीं है और उसका change tracker कम समय के लिए होना चाहिए, इसलिए वो singleton नहीं होना चाहिए; background या parallel काम के लिए DbContext factory use होती है।",
        hg: "Scoped: AddDbContext har HTTP request ko ek instance deta hai. DbContext thread-safe nahi hai aur uska change tracker kam samay ke liye hona chahiye, isliye woh singleton nahi hona chahiye; background ya parallel kaam ke liye DbContext factory use hoti hai."
      },
      explain: {
        en: `<ul>
<li><b>Scoped</b> fits a request: all services in that request share one context, one change tracker and one <code>SaveChanges</code>; it is disposed when the request ends.</li>
<li><b>Singleton</b> problems: concurrent requests on one instance (thread-safety exception), a tracker that grows forever, stale data from identity resolution.</li>
<li><b>Transient</b> (possible via <code>AddDbContext(..., ServiceLifetime.Transient)</code>): each service gets its own context, so two repositories in one request cannot save together in one <code>SaveChanges</code>. Rarely what you want.</li>
<li>Captive dependency: a singleton (or a <code>BackgroundService</code>) that injects DbContext keeps it forever. Use <code>IServiceScopeFactory</code> or <code>IDbContextFactory&lt;T&gt;</code> there.</li>
</ul>
<p>Follow-up: "How do you use EF Core in a BackgroundService?" — create a scope per unit of work (<code>using var scope = scopeFactory.CreateScope();</code>) or inject <code>IDbContextFactory</code> and dispose each context.</p>`,
        hi: `<ul>
<li><b>Scoped</b> request के लिए सही बैठता है: उस request की सारी services एक context, एक change tracker और एक <code>SaveChanges</code> share करती हैं; request ख़त्म होने पर dispose हो जाता है।</li>
<li><b>Singleton</b> की problems: एक instance पर एक साथ कई requests (thread-safety exception), हमेशा बढ़ता tracker, identity resolution से पुराना data।</li>
<li><b>Transient</b> (<code>AddDbContext(..., ServiceLifetime.Transient)</code> से हो सकता है): हर service का अपना context, इसलिए एक request की दो repositories एक <code>SaveChanges</code> में साथ save नहीं कर सकतीं। आमतौर पर यह नहीं चाहिए।</li>
<li>Captive dependency: जो singleton (या <code>BackgroundService</code>) DbContext inject करे, वो उसे हमेशा पकड़े रखता है। वहाँ <code>IServiceScopeFactory</code> या <code>IDbContextFactory&lt;T&gt;</code> use करो।</li>
</ul>
<p>Follow-up: "BackgroundService में EF Core कैसे use करोगे?" — हर unit of work के लिए scope बनाओ (<code>using var scope = scopeFactory.CreateScope();</code>) या <code>IDbContextFactory</code> inject करके हर context dispose करो।</p>`,
        hg: `<ul>
<li><b>Scoped</b> request ke liye sahi baithta hai: us request ki saari services ek context, ek change tracker aur ek <code>SaveChanges</code> share karti hain; request khatam hone par dispose ho jaata hai.</li>
<li><b>Singleton</b> ki problems: ek instance par ek saath kai requests (thread-safety exception), hamesha badhta tracker, identity resolution se purana data.</li>
<li><b>Transient</b> (<code>AddDbContext(..., ServiceLifetime.Transient)</code> se ho sakta hai): har service ka apna context, isliye ek request ki do repositories ek <code>SaveChanges</code> mein saath save nahi kar sakti. Aamtaur par yeh nahi chahiye.</li>
<li>Captive dependency: jo singleton (ya <code>BackgroundService</code>) DbContext inject kare, woh use hamesha pakde rakhta hai. Wahan <code>IServiceScopeFactory</code> ya <code>IDbContextFactory&lt;T&gt;</code> use karo.</li>
</ul>
<p>Follow-up: "BackgroundService mein EF Core kaise use karoge?" — har unit of work ke liye scope banao (<code>using var scope = scopeFactory.CreateScope();</code>) ya <code>IDbContextFactory</code> inject karke har context dispose karo.</p>`
      }
    },
    {
      id: "code-first-vs-db-first",
      depth: "short",
      q: "Code-First or Database-First — what is the difference and which would you choose?",
      answer: "In Code-First, the C# model is the source of truth and migrations create the schema — good for new services the team owns. In Database-First, you scaffold classes from an existing or DBA-owned database.",
      meaning: {
        hi: "Code-First में C# model source of truth है और migrations schema बनाते हैं — उन नई services के लिए अच्छा जिनका schema team का अपना है। Database-First में आप पहले से बने या DBA वाले database से classes scaffold करते हो।",
        hg: "Code-First mein C# model source of truth hai aur migrations schema banaate hain — un nayi services ke liye achha jinka schema team ka apna hai. Database-First mein aap pehle se bane ya DBA wale database se classes scaffold karte ho."
      },
      explain: {
        en: `<ul>
<li><b>Code-First pros</b>: schema changes live in Git next to code, are reviewed in PRs, and are repeatable on every environment. <b>Cons</b>: developers must know SQL well enough to review generated DDL.</li>
<li><b>DB-First pros</b>: works with legacy and shared databases, DBAs keep full control (stored procedures, partitioning, permissions). <b>Cons</b>: re-scaffold after every DB change; customizations must survive regeneration.</li>
<li>EF Core has no EDMX designer — "DB-First" in EF Core means <code>dotnet ef dbcontext scaffold</code> generating plain C# classes.</li>
<li>A common hybrid: scaffold once from an existing database, then continue Code-First with migrations (first migration as a baseline).</li>
</ul>
<p>TL angle: the real question is <b>who owns the schema</b>. If one team owns it, Code-First. If a DBA team or many apps share it, DB-First — and agree on a process for each change.</p>`,
        hi: `<ul>
<li><b>Code-First के फ़ायदे</b>: schema बदलाव code के साथ Git में रहते हैं, PRs में review होते हैं, और हर environment पर दोहराए जा सकते हैं। <b>नुकसान</b>: developers को इतना SQL आना चाहिए कि generated DDL review कर सकें।</li>
<li><b>DB-First के फ़ायदे</b>: legacy और shared databases के साथ चलता है, DBAs का पूरा control रहता है (stored procedures, partitioning, permissions)। <b>नुकसान</b>: हर DB बदलाव के बाद फिर से scaffold; customizations को regeneration के बाद भी बचे रहना चाहिए।</li>
<li>EF Core में EDMX designer नहीं है — EF Core में "DB-First" मतलब <code>dotnet ef dbcontext scaffold</code> से सादी C# classes बनाना।</li>
<li>एक common hybrid: पहले से बने database से एक बार scaffold करो, फिर migrations के साथ Code-First पर चलो (पहला migration baseline के रूप में)।</li>
</ul>
<p>TL angle: असली सवाल है <b>schema का owner कौन है</b>। अगर एक team owner है, तो Code-First। अगर DBA team या कई apps इसे share करते हैं, तो DB-First — और हर बदलाव के लिए एक process तय करो।</p>`,
        hg: `<ul>
<li><b>Code-First ke faayde</b>: schema badlaav code ke saath Git mein rehte hain, PRs mein review hote hain, aur har environment par dohraaye ja sakte hain. <b>Nuksaan</b>: developers ko itna SQL aana chahiye ki generated DDL review kar sakein.</li>
<li><b>DB-First ke faayde</b>: legacy aur shared databases ke saath chalta hai, DBAs ka poora control rehta hai (stored procedures, partitioning, permissions). <b>Nuksaan</b>: har DB badlaav ke baad phir se scaffold; customizations ko regeneration ke baad bhi bache rehna chahiye.</li>
<li>EF Core mein EDMX designer nahi hai — EF Core mein "DB-First" matlab <code>dotnet ef dbcontext scaffold</code> se saadi C# classes banana.</li>
<li>Ek common hybrid: pehle se bane database se ek baar scaffold karo, phir migrations ke saath Code-First par chalo (pehla migration baseline ke roop mein).</li>
</ul>
<p>TL angle: asli sawaal hai <b>schema ka owner kaun hai</b>. Agar ek team owner hai, to Code-First. Agar DBA team ya kai apps ise share karte hain, to DB-First — aur har badlaav ke liye ek process tay karo.</p>`
      }
    },
    {
      id: "what-are-migrations",
      depth: "short",
      q: "What are migrations in EF Core and how do they work?",
      answer: "A migration is a versioned schema change, generated by comparing the current model with the last model snapshot. It has Up and Down methods; applied migrations are recorded in __EFMigrationsHistory, so only pending ones run.",
      meaning: {
        hi: "Migration एक versioned schema बदलाव है, जो current model को पिछले model snapshot से compare करके बनता है। इसमें Up और Down methods होते हैं; apply हुए migrations __EFMigrationsHistory में दर्ज होते हैं, इसलिए सिर्फ़ pending वाले चलते हैं।",
        hg: "Migration ek versioned schema badlaav hai, jo current model ko pichhle model snapshot se compare karke banta hai. Ismein Up aur Down methods hote hain; apply hue migrations __EFMigrationsHistory mein darj hote hain, isliye sirf pending wale chalte hain."
      },
      explain: {
        en: `<ul>
<li>Flow: change entities → <code>dotnet ef migrations add Name</code> → <b>review</b> the generated <code>Up</code>/<code>Down</code> → <code>dotnet ef database update</code> locally → commit.</li>
<li>The <b>model snapshot</b> (<code>&lt;Context&gt;ModelSnapshot.cs</code>) is EF's memory of "the model after the last migration". EF diffs against the snapshot, <b>not</b> against the real database.</li>
<li>Rollback: <code>dotnet ef database update &lt;PreviousMigration&gt;</code> runs <code>Down()</code>. A migration not yet applied anywhere can be deleted with <code>migrations remove</code>.</li>
<li>For data changes inside a migration: <code>migrationBuilder.Sql("UPDATE ...")</code>.</li>
</ul>
<p>Follow-up: "Does EF compare with the live database?" — No, with the snapshot. If someone changes the DB by hand, EF does not know, and the next migration may fail or conflict.</p>`,
        hi: `<ul>
<li>Flow: entities बदलो → <code>dotnet ef migrations add Name</code> → generated <code>Up</code>/<code>Down</code> का <b>review</b> → local पर <code>dotnet ef database update</code> → commit।</li>
<li><b>Model snapshot</b> (<code>&lt;Context&gt;ModelSnapshot.cs</code>) EF की याद है कि "पिछले migration के बाद model कैसा था"। EF snapshot से diff करता है, असली database से <b>नहीं</b>।</li>
<li>Rollback: <code>dotnet ef database update &lt;PreviousMigration&gt;</code> <code>Down()</code> चलाता है। जो migration अभी कहीं apply नहीं हुआ, उसे <code>migrations remove</code> से हटा सकते हो।</li>
<li>Migration के अंदर data बदलाव के लिए: <code>migrationBuilder.Sql("UPDATE ...")</code>।</li>
</ul>
<p>Follow-up: "क्या EF live database से compare करता है?" — नहीं, snapshot से। अगर कोई DB को हाथ से बदल दे, तो EF को पता नहीं चलता, और अगला migration fail या conflict कर सकता है।</p>`,
        hg: `<ul>
<li>Flow: entities badlo → <code>dotnet ef migrations add Name</code> → generated <code>Up</code>/<code>Down</code> ka <b>review</b> → local par <code>dotnet ef database update</code> → commit.</li>
<li><b>Model snapshot</b> (<code>&lt;Context&gt;ModelSnapshot.cs</code>) EF ki yaad hai ki "pichhle migration ke baad model kaisa tha". EF snapshot se diff karta hai, asli database se <b>nahi</b>.</li>
<li>Rollback: <code>dotnet ef database update &lt;PreviousMigration&gt;</code> <code>Down()</code> chalata hai. Jo migration abhi kahin apply nahi hua, use <code>migrations remove</code> se hata sakte ho.</li>
<li>Migration ke andar data badlaav ke liye: <code>migrationBuilder.Sql("UPDATE ...")</code>.</li>
</ul>
<p>Follow-up: "Kya EF live database se compare karta hai?" — Nahi, snapshot se. Agar koi DB ko haath se badal de, to EF ko pata nahi chalta, aur agla migration fail ya conflict kar sakta hai.</p>`
      }
    },
    {
      id: "relationships",
      depth: "short",
      q: "How do you configure one-to-many and many-to-many relationships in EF Core?",
      answer: "Mostly by convention from navigation and foreign key properties, or explicitly with HasOne/WithMany/HasForeignKey. For many-to-many, two collection navigations are enough since EF Core 5 — EF creates the join table.",
      meaning: {
        hi: "ज़्यादातर navigation और foreign key properties से convention के ज़रिए, या explicitly HasOne/WithMany/HasForeignKey से। Many-to-many के लिए EF Core 5 से दो collection navigations काफ़ी हैं — join table EF बनाता है।",
        hg: "Zyaadatar navigation aur foreign key properties se convention ke zariye, ya explicitly HasOne/WithMany/HasForeignKey se. Many-to-many ke liye EF Core 5 se do collection navigations kaafi hain — join table EF banata hai."
      },
      explain: {
        en: `<ul>
<li><b>1:N</b>: <code>Customer.Orders</code> + <code>Order.CustomerId</code> + <code>Order.Customer</code>. SQL: FK column on <code>Orders</code> + an index.</li>
<li><b>1:1</b>: <code>HasOne(s =&gt; s.IdCard).WithOne(c =&gt; c.Student).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code>. SQL: FK + <b>unique</b> index.</li>
<li><b>N:N</b>: <code>Student.Courses</code> + <code>Course.Students</code> → a join table with a composite PK. Name it with <code>UsingEntity(j =&gt; j.ToTable("Enrolments"))</code>.</li>
<li>If the link needs columns (date, grade), create a join <b>entity</b> with two 1:N relationships.</li>
<li>Required FK → <code>NOT NULL</code> + cascade delete by default; nullable FK → optional relationship.</li>
</ul>
<p>Follow-up: "Fluent API or data annotations?" — Fluent API for relationships: it can express everything (delete behaviour, composite keys) and keeps entities clean.</p>`,
        hi: `<ul>
<li><b>1:N</b>: <code>Customer.Orders</code> + <code>Order.CustomerId</code> + <code>Order.Customer</code>। SQL: <code>Orders</code> पर FK column + एक index।</li>
<li><b>1:1</b>: <code>HasOne(s =&gt; s.IdCard).WithOne(c =&gt; c.Student).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code>। SQL: FK + <b>unique</b> index।</li>
<li><b>N:N</b>: <code>Student.Courses</code> + <code>Course.Students</code> → composite PK वाला join table। नाम <code>UsingEntity(j =&gt; j.ToTable("Enrolments"))</code> से दो।</li>
<li>अगर link को columns चाहिए (date, grade), तो दो 1:N relationships वाली एक join <b>entity</b> बनाओ।</li>
<li>Required FK → <code>NOT NULL</code> + by default cascade delete; nullable FK → optional relationship।</li>
</ul>
<p>Follow-up: "Fluent API या data annotations?" — Relationships के लिए Fluent API: यह सब कुछ express कर सकता है (delete behaviour, composite keys) और entities को साफ़ रखता है।</p>`,
        hg: `<ul>
<li><b>1:N</b>: <code>Customer.Orders</code> + <code>Order.CustomerId</code> + <code>Order.Customer</code>. SQL: <code>Orders</code> par FK column + ek index.</li>
<li><b>1:1</b>: <code>HasOne(s =&gt; s.IdCard).WithOne(c =&gt; c.Student).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code>. SQL: FK + <b>unique</b> index.</li>
<li><b>N:N</b>: <code>Student.Courses</code> + <code>Course.Students</code> → composite PK wala join table. Naam <code>UsingEntity(j =&gt; j.ToTable("Enrolments"))</code> se do.</li>
<li>Agar link ko columns chahiye (date, grade), to do 1:N relationships wali ek join <b>entity</b> banao.</li>
<li>Required FK → <code>NOT NULL</code> + by default cascade delete; nullable FK → optional relationship.</li>
</ul>
<p>Follow-up: "Fluent API ya data annotations?" — Relationships ke liye Fluent API: yeh sab kuch express kar sakta hai (delete behaviour, composite keys) aur entities ko saaf rakhta hai.</p>`
      }
    },
    {
      id: "loading-types",
      depth: "short",
      q: "What is the difference between eager, lazy and explicit loading?",
      answer: "Eager loads related data in the same query with Include (a JOIN). Explicit loads it later when you call Load(). Lazy loads it automatically on first access — convenient, but it risks N+1 queries.",
      meaning: {
        hi: "Eager related data को उसी query में Include (एक JOIN) से लाता है। Explicit उसे बाद में Load() call करने पर लाता है। Lazy पहली बार छूने पर अपने-आप लाता है — आसान, पर N+1 queries का ख़तरा।",
        hg: "Eager related data ko usi query mein Include (ek JOIN) se laata hai. Explicit use baad mein Load() call karne par laata hai. Lazy pehli baar chhoone par apne-aap laata hai — aasaan, par N+1 queries ka khatra."
      },
      explain: {
        en: `<ul>
<li><b>Default</b>: nothing related is loaded; navigations are <code>null</code>/empty unless the related entities are already tracked (fix-up).</li>
<li><b>Eager</b>: <code>Include</code>/<code>ThenInclude</code>; filtered Include since EF Core 5. One round trip, but wide Includes mean big result sets.</li>
<li><b>Explicit</b>: <code>db.Entry(c).Collection(x =&gt; x.Orders).Load()</code>, <code>.Reference(...).Load()</code>, or <code>.Query().Count()</code> to aggregate without loading.</li>
<li><b>Lazy</b>: off by default. Needs <code>Microsoft.EntityFrameworkCore.Proxies</code> + <code>UseLazyLoadingProxies()</code> + <code>virtual</code> navigations (or an injected <code>ILazyLoader</code>). Each first access = one query.</li>
</ul>
<p>Follow-up: "Which do you prefer in a Web API?" — Eager (or a <code>Select</code> projection to a DTO) so the number of queries is visible in code. Lazy loading also clashes with JSON serialization (it walks every navigation) and fails after the context is disposed.</p>`,
        hi: `<ul>
<li><b>Default</b>: कुछ भी related load नहीं होता; navigations <code>null</code>/खाली रहते हैं, जब तक related entities पहले से tracked न हों (fix-up)।</li>
<li><b>Eager</b>: <code>Include</code>/<code>ThenInclude</code>; EF Core 5 से filtered Include। एक round trip, पर बड़े Includes मतलब बड़े result sets।</li>
<li><b>Explicit</b>: <code>db.Entry(c).Collection(x =&gt; x.Orders).Load()</code>, <code>.Reference(...).Load()</code>, या load किए बिना aggregate के लिए <code>.Query().Count()</code>।</li>
<li><b>Lazy</b>: by default बंद। चाहिए <code>Microsoft.EntityFrameworkCore.Proxies</code> + <code>UseLazyLoadingProxies()</code> + <code>virtual</code> navigations (या inject किया हुआ <code>ILazyLoader</code>)। हर पहली access = एक query।</li>
</ul>
<p>Follow-up: "Web API में कौन सा पसंद करोगे?" — Eager (या DTO में <code>Select</code> projection), ताकि queries की गिनती code में दिखे। Lazy loading JSON serialization से भी टकराता है (वो हर navigation पर चलता है) और context dispose होने के बाद fail होता है।</p>`,
        hg: `<ul>
<li><b>Default</b>: kuch bhi related load nahi hota; navigations <code>null</code>/khaali rehte hain, jab tak related entities pehle se tracked na hon (fix-up).</li>
<li><b>Eager</b>: <code>Include</code>/<code>ThenInclude</code>; EF Core 5 se filtered Include. Ek round trip, par bade Includes matlab bade result sets.</li>
<li><b>Explicit</b>: <code>db.Entry(c).Collection(x =&gt; x.Orders).Load()</code>, <code>.Reference(...).Load()</code>, ya load kiye bina aggregate ke liye <code>.Query().Count()</code>.</li>
<li><b>Lazy</b>: by default band. Chahiye <code>Microsoft.EntityFrameworkCore.Proxies</code> + <code>UseLazyLoadingProxies()</code> + <code>virtual</code> navigations (ya inject kiya hua <code>ILazyLoader</code>). Har pehli access = ek query.</li>
</ul>
<p>Follow-up: "Web API mein kaunsa pasand karoge?" — Eager (ya DTO mein <code>Select</code> projection), taaki queries ki ginti code mein dikhe. Lazy loading JSON serialization se bhi takraata hai (woh har navigation par chalta hai) aur context dispose hone ke baad fail hota hai.</p>`
      }
    },
    {
      id: "tracking-vs-notracking",
      depth: "short",
      q: "What does AsNoTracking do, and when do you use it?",
      answer: "AsNoTracking returns entities the context does not track — no snapshot, no identity map — so reads are faster and lighter. I use it for read-only queries; changes to those objects are never saved.",
      meaning: {
        hi: "AsNoTracking ऐसी entities लौटाता है जिन्हें context track नहीं करता — न snapshot, न identity map — इसलिए reads तेज़ और हल्के होते हैं। मैं इसे read-only queries के लिए use करता हूँ; उन objects के बदलाव कभी save नहीं होते।",
        hg: "AsNoTracking aisi entities lautaata hai jinhe context track nahi karta — na snapshot, na identity map — isliye reads tez aur halke hote hain. Main ise read-only queries ke liye use karta hoon; un objects ke badlaav kabhi save nahi hote."
      },
      explain: {
        en: `<ul>
<li>Tracking cost: for every row EF looks up the identity map, stores original values, and later runs DetectChanges over it. For a 5,000-row report that is pure waste.</li>
<li>Good fits: GET endpoints, reports, dropdown lists, exports, data mapped straight to DTOs.</li>
<li>Side effect: the same row can appear as <b>two objects</b> (for example, one customer repeated across many orders with Include). Use <code>AsNoTrackingWithIdentityResolution()</code> if that matters.</li>
<li>Set it per context: <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, and opt back in with <code>AsTracking()</code>.</li>
<li>A <code>Select</code> projection to a DTO/anonymous type is not tracked either — no entity instance is created.</li>
</ul>
<p>Follow-up: "Can you still update a no-tracking entity?" — Yes, by attaching it (<code>Update</code>/<code>Attach</code>) — but then you lose "only changed columns" unless you mark properties yourself. Usually you re-query with tracking.</p>`,
        hi: `<ul>
<li>Tracking का खर्च: हर row के लिए EF identity map देखता है, original values रखता है, और बाद में उस पर DetectChanges चलाता है। 5,000 rows की report के लिए यह सिर्फ़ बर्बादी है।</li>
<li>सही जगहें: GET endpoints, reports, dropdown lists, exports, सीधे DTOs में map होने वाला data।</li>
<li>Side effect: एक ही row <b>दो objects</b> बनकर आ सकती है (जैसे Include के साथ कई orders में दोहराया गया एक customer)। अगर यह मायने रखता है तो <code>AsNoTrackingWithIdentityResolution()</code> use करो।</li>
<li>पूरे context के लिए set करो: <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, और ज़रूरत पर <code>AsTracking()</code> से वापस tracking लो।</li>
<li>DTO/anonymous type में <code>Select</code> projection भी track नहीं होता — कोई entity instance बनता ही नहीं।</li>
</ul>
<p>Follow-up: "क्या no-tracking entity को फिर भी update कर सकते हो?" — हाँ, उसे attach करके (<code>Update</code>/<code>Attach</code>) — पर तब "सिर्फ़ बदले columns" वाला फ़ायदा जाता है, जब तक आप properties खुद mark न करो। आमतौर पर tracking के साथ फिर से query करते हैं।</p>`,
        hg: `<ul>
<li>Tracking ka kharch: har row ke liye EF identity map dekhta hai, original values rakhta hai, aur baad mein us par DetectChanges chalata hai. 5,000 rows ki report ke liye yeh sirf barbaadi hai.</li>
<li>Sahi jagahein: GET endpoints, reports, dropdown lists, exports, seedhe DTOs mein map hone wala data.</li>
<li>Side effect: ek hi row <b>do objects</b> bankar aa sakti hai (jaise Include ke saath kai orders mein dohraaya gaya ek customer). Agar yeh maayne rakhta hai to <code>AsNoTrackingWithIdentityResolution()</code> use karo.</li>
<li>Poore context ke liye set karo: <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, aur zaroorat par <code>AsTracking()</code> se wapas tracking lo.</li>
<li>DTO/anonymous type mein <code>Select</code> projection bhi track nahi hota — koi entity instance banta hi nahi.</li>
</ul>
<p>Follow-up: "Kya no-tracking entity ko phir bhi update kar sakte ho?" — Haan, use attach karke (<code>Update</code>/<code>Attach</code>) — par tab "sirf badle columns" wala faayda jaata hai, jab tak aap properties khud mark na karo. Aamtaur par tracking ke saath phir se query karte hain.</p>`
      }
    },
    {
      id: "entity-states",
      depth: "short",
      q: "How does SaveChanges know what to insert, update or delete? What entity states are there?",
      answer: "The change tracker keeps each entity's state and original values. DetectChanges compares them, and SaveChanges turns Added, Modified and Deleted into INSERT, UPDATE and DELETE. Unchanged sends nothing; Detached is not tracked.",
      meaning: {
        hi: "Change tracker हर entity की state और original values रखता है। DetectChanges उन्हें compare करता है, और SaveChanges, Added, Modified और Deleted को INSERT, UPDATE और DELETE में बदलता है। Unchanged कुछ नहीं भेजता; Detached track ही नहीं होता।",
        hg: "Change tracker har entity ki state aur original values rakhta hai. DetectChanges unhe compare karta hai, aur SaveChanges, Added, Modified aur Deleted ko INSERT, UPDATE aur DELETE mein badalta hai. Unchanged kuch nahi bhejta; Detached track hi nahi hota."
      },
      explain: {
        en: `<ul>
<li><code>Add</code> → Added; query result → Unchanged; property change (seen by DetectChanges) → Modified; <code>Remove</code> → Deleted; never seen / after delete is saved → Detached.</li>
<li>Trick: <code>Add</code> then <code>Remove</code> before saving → <b>Detached</b>, not Deleted — there is nothing in the database to delete.</li>
<li>For Modified entities, only the changed columns go into the <code>UPDATE</code>.</li>
<li>After <code>SaveChanges</code>: everything becomes Unchanged (deleted ones Detached), and database-generated keys are set on your objects.</li>
<li>You can set a state yourself: <code>db.Entry(order).State = EntityState.Modified</code> (marks all properties modified).</li>
</ul>
<p>Follow-up: "Why can a changed property still show Unchanged?" — DetectChanges has not run yet. <code>Entry()</code>, <code>Entries()</code> and <code>SaveChanges()</code> run it; plain property sets do not.</p>`,
        hi: `<ul>
<li><code>Add</code> → Added; query result → Unchanged; property बदलना (DetectChanges ने देखा) → Modified; <code>Remove</code> → Deleted; कभी देखा ही नहीं / delete save होने के बाद → Detached।</li>
<li>Trick: save से पहले <code>Add</code> फिर <code>Remove</code> → <b>Detached</b>, Deleted नहीं — database में delete करने को कुछ है ही नहीं।</li>
<li>Modified entities के लिए सिर्फ़ बदले हुए columns <code>UPDATE</code> में जाते हैं।</li>
<li><code>SaveChanges</code> के बाद: सब Unchanged हो जाता है (deleted वाले Detached), और database में बनी keys आपके objects पर set हो जाती हैं।</li>
<li>State खुद भी set कर सकते हो: <code>db.Entry(order).State = EntityState.Modified</code> (सारी properties modified mark होती हैं)।</li>
</ul>
<p>Follow-up: "बदली हुई property फिर भी Unchanged क्यों दिख सकती है?" — DetectChanges अभी चला नहीं। <code>Entry()</code>, <code>Entries()</code> और <code>SaveChanges()</code> उसे चलाते हैं; सादा property set नहीं।</p>`,
        hg: `<ul>
<li><code>Add</code> → Added; query result → Unchanged; property badalna (DetectChanges ne dekha) → Modified; <code>Remove</code> → Deleted; kabhi dekha hi nahi / delete save hone ke baad → Detached.</li>
<li>Trick: save se pehle <code>Add</code> phir <code>Remove</code> → <b>Detached</b>, Deleted nahi — database mein delete karne ko kuch hai hi nahi.</li>
<li>Modified entities ke liye sirf badle hue columns <code>UPDATE</code> mein jaate hain.</li>
<li><code>SaveChanges</code> ke baad: sab Unchanged ho jaata hai (deleted wale Detached), aur database mein bani keys aapke objects par set ho jaati hain.</li>
<li>State khud bhi set kar sakte ho: <code>db.Entry(order).State = EntityState.Modified</code> (saari properties modified mark hoti hain).</li>
</ul>
<p>Follow-up: "Badli hui property phir bhi Unchanged kyon dikh sakti hai?" — DetectChanges abhi chala nahi. <code>Entry()</code>, <code>Entries()</code> aur <code>SaveChanges()</code> use chalaate hain; saada property set nahi.</p>`
      }
    },
    {
      id: "dbcontext-thread-safety",
      depth: "detailed",
      q: "Is DbContext thread-safe? Can I run two queries in parallel with Task.WhenAll on the same context?",
      answer: "No. A DbContext supports one operation at a time; overlapping calls throw \"A second operation was started on this context instance\". Await each call, or give each parallel task its own context from IDbContextFactory.",
      meaning: {
        hi: "नहीं। एक DbContext एक बार में एक ही operation support करता है; overlap होने वाली calls \"A second operation was started on this context instance\" throw करती हैं। हर call को await करो, या हर parallel task को IDbContextFactory से उसका अपना context दो।",
        hg: "Nahi. Ek DbContext ek baar mein ek hi operation support karta hai; overlap hone wali calls \"A second operation was started on this context instance\" throw karti hain. Har call ko await karo, ya har parallel task ko IDbContextFactory se uska apna context do."
      },
      explain: {
        en: `<ul>
<li>A context has one connection, one change tracker and internal state that are not protected by locks. EF detects many overlapping uses and throws <code>InvalidOperationException</code>: <i>"A second operation was started on this context instance before a previous operation completed. This is usually caused by different threads concurrently using the same instance of DbContext."</i></li>
<li>Typical causes: <code>Task.WhenAll(db.A.ToListAsync(), db.B.ToListAsync())</code>; a forgotten <code>await</code>; <code>Parallel.ForEach</code> over one context; an <code>async void</code> method; a DbContext captured by a singleton.</li>
<li>Fix: <code>await</code> each call in sequence (usually fast enough), or create one context per task with <code>IDbContextFactory&lt;T&gt;</code>.</li>
<li>Note: <code>async</code> is about not blocking threads while the database works — it does not make one context usable in parallel.</li>
</ul>
<p>TL angle: in code review, "missing await on an EF call" and "one context shared by parallel tasks" are bugs that pass tests and fail under load.</p>`,
        hi: `<ul>
<li>एक context के पास एक connection, एक change tracker और internal state होती है, जो locks से protected नहीं। EF कई overlapping uses पकड़कर <code>InvalidOperationException</code> throw करता है: <i>"A second operation was started on this context instance before a previous operation completed. This is usually caused by different threads concurrently using the same instance of DbContext."</i></li>
<li>आम कारण: <code>Task.WhenAll(db.A.ToListAsync(), db.B.ToListAsync())</code>; भूला हुआ <code>await</code>; एक context पर <code>Parallel.ForEach</code>; <code>async void</code> method; singleton के अंदर पकड़ा हुआ DbContext।</li>
<li>Fix: हर call को क्रम से <code>await</code> करो (आमतौर पर काफ़ी तेज़), या <code>IDbContextFactory&lt;T&gt;</code> से हर task का अपना context बनाओ।</li>
<li>ध्यान दो: <code>async</code> का मतलब है database के काम के दौरान threads को block न करना — इससे एक context parallel में use करने लायक नहीं बनता।</li>
</ul>
<p>TL angle: code review में "EF call पर await छूटा" और "parallel tasks में shared एक context" ऐसे bugs हैं जो tests pass कर जाते हैं और load पर fail होते हैं।</p>`,
        hg: `<ul>
<li>Ek context ke paas ek connection, ek change tracker aur internal state hoti hai, jo locks se protected nahi. EF kai overlapping uses pakadkar <code>InvalidOperationException</code> throw karta hai: <i>"A second operation was started on this context instance before a previous operation completed. This is usually caused by different threads concurrently using the same instance of DbContext."</i></li>
<li>Aam kaaran: <code>Task.WhenAll(db.A.ToListAsync(), db.B.ToListAsync())</code>; bhoola hua <code>await</code>; ek context par <code>Parallel.ForEach</code>; <code>async void</code> method; singleton ke andar pakda hua DbContext.</li>
<li>Fix: har call ko kram se <code>await</code> karo (aamtaur par kaafi tez), ya <code>IDbContextFactory&lt;T&gt;</code> se har task ka apna context banao.</li>
<li>Dhyaan do: <code>async</code> ka matlab hai database ke kaam ke dauraan threads ko block na karna — isse ek context parallel mein use karne laayak nahi banta.</li>
</ul>
<p>TL angle: code review mein "EF call par await chhoota" aur "parallel tasks mein shared ek context" aise bugs hain jo tests pass kar jaate hain aur load par fail hote hain.</p>`
      },
      code: [{
        caption: {
          en: "Wrong vs right: parallel queries need one context each (factory); otherwise await them one by one",
          hi: "ग़लत बनाम सही: parallel queries के लिए हर एक का अपना context (factory); वरना एक-एक करके await करो",
          hg: "Galat vs sahi: parallel queries ke liye har ek ka apna context (factory); warna ek-ek karke await karo"
        },
        check: "compile",
        packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
        src: `using Microsoft.EntityFrameworkCore;

public class DashboardService(IDbContextFactory<ShopContext> factory, ShopContext db)
{
    // WRONG: two operations overlap on ONE context -> InvalidOperationException at runtime
    public async Task<(int, int)> CountsWrongAsync()
    {
        var customers = db.Customers.CountAsync();
        var orders = db.Orders.CountAsync();
        await Task.WhenAll(customers, orders);
        return (customers.Result, orders.Result);
    }

    // RIGHT (simple): one after the other on the same context
    public async Task<(int, int)> CountsSequentialAsync()
    {
        int customers = await db.Customers.CountAsync();
        int orders = await db.Orders.CountAsync();
        return (customers, orders);
    }

    // RIGHT (parallel): each task gets its own short-lived context
    public async Task<(int, int)> CountsParallelAsync()
    {
        async Task<int> CountCustomers() { await using var c = await factory.CreateDbContextAsync(); return await c.Customers.CountAsync(); }
        async Task<int> CountOrders() { await using var c = await factory.CreateDbContextAsync(); return await c.Orders.CountAsync(); }

        var results = await Task.WhenAll(CountCustomers(), CountOrders());
        return (results[0], results[1]);
    }
}

public class Customer { public int Id { get; set; } public string Name { get; set; } = ""; }
public class Order { public int Id { get; set; } public int CustomerId { get; set; } }

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();
}`
      }]
    },
    {
      id: "pool-vs-factory",
      depth: "detailed",
      q: "AddDbContext vs AddDbContextPool vs AddDbContextFactory — when do you use each?",
      answer: "AddDbContext is the default: a new Scoped context per request. AddDbContextPool reuses context instances to save setup cost in high-throughput apps. AddDbContextFactory lets you create contexts yourself — for background jobs, Blazor Server or parallel work.",
      meaning: {
        hi: "AddDbContext default है: हर request के लिए एक नया Scoped context। AddDbContextPool ज़्यादा traffic वाले apps में setup का खर्च बचाने के लिए context instances दोबारा use करता है। AddDbContextFactory से आप contexts खुद बनाते हो — background jobs, Blazor Server या parallel काम के लिए।",
        hg: "AddDbContext default hai: har request ke liye ek naya Scoped context. AddDbContextPool zyaada traffic wale apps mein setup ka kharch bachaane ke liye context instances dobara use karta hai. AddDbContextFactory se aap contexts khud banaate ho — background jobs, Blazor Server ya parallel kaam ke liye."
      },
      explain: {
        en: `<ul>
<li><b>AddDbContext</b>: context Scoped, options Scoped. Simple, safe, enough for most APIs.</li>
<li><b>AddDbContextPool</b>: the context is still resolved per scope, but instances come from a pool (default <code>poolSize</code> 1024) and are reset when returned. Options become a singleton, so they cannot depend on per-request data (for example, a per-tenant connection string). Do not keep per-request fields in the context, or reset them yourself.</li>
<li><b>AddDbContextFactory</b>: registers <code>IDbContextFactory&lt;T&gt;</code> as a singleton (and the context itself as Scoped too). You call <code>CreateDbContext()</code> and own disposal. <b>AddPooledDbContextFactory</b> combines both ideas.</li>
<li>Blazor Server: one circuit lives for the whole user session, so a Scoped context would live too long and be shared by overlapping UI events — use the factory, one context per operation.</li>
</ul>
<p>TL angle: pick pooling only with evidence (profiling under load). The gain is real but small compared with fixing slow queries.</p>`,
        hi: `<ul>
<li><b>AddDbContext</b>: context Scoped, options Scoped। आसान, safe, ज़्यादातर APIs के लिए काफ़ी।</li>
<li><b>AddDbContextPool</b>: context अब भी हर scope में resolve होता है, पर instances एक pool से आते हैं (default <code>poolSize</code> 1024) और लौटाने पर reset होते हैं। Options singleton बन जाते हैं, इसलिए वो per-request data पर depend नहीं कर सकते (जैसे हर tenant की अलग connection string)। Context में per-request fields मत रखो, या उन्हें खुद reset करो।</li>
<li><b>AddDbContextFactory</b>: <code>IDbContextFactory&lt;T&gt;</code> को singleton register करता है (और context को भी Scoped)। आप <code>CreateDbContext()</code> call करते हो और dispose करना आपकी ज़िम्मेदारी है। <b>AddPooledDbContextFactory</b> दोनों ideas को मिलाता है।</li>
<li>Blazor Server: एक circuit पूरे user session तक चलता है, इसलिए Scoped context बहुत लंबा चलेगा और overlapping UI events में share होगा — factory use करो, हर operation का एक context।</li>
</ul>
<p>TL angle: pooling सिर्फ़ सबूत के साथ चुनो (load में profiling)। फ़ायदा असली है पर slow queries ठीक करने के मुक़ाबले छोटा।</p>`,
        hg: `<ul>
<li><b>AddDbContext</b>: context Scoped, options Scoped. Aasaan, safe, zyaadatar APIs ke liye kaafi.</li>
<li><b>AddDbContextPool</b>: context ab bhi har scope mein resolve hota hai, par instances ek pool se aate hain (default <code>poolSize</code> 1024) aur lautaane par reset hote hain. Options singleton ban jaate hain, isliye woh per-request data par depend nahi kar sakte (jaise har tenant ki alag connection string). Context mein per-request fields mat rakho, ya unhe khud reset karo.</li>
<li><b>AddDbContextFactory</b>: <code>IDbContextFactory&lt;T&gt;</code> ko singleton register karta hai (aur context ko bhi Scoped). Aap <code>CreateDbContext()</code> call karte ho aur dispose karna aapki zimmedaari hai. <b>AddPooledDbContextFactory</b> dono ideas ko milaata hai.</li>
<li>Blazor Server: ek circuit poore user session tak chalta hai, isliye Scoped context bahut lamba chalega aur overlapping UI events mein share hoga — factory use karo, har operation ka ek context.</li>
</ul>
<p>TL angle: pooling sirf saboot ke saath chuno (load mein profiling). Faayda asli hai par slow queries theek karne ke muqaable chhota.</p>`
      }
    },
    {
      id: "migrations-production",
      depth: "detailed",
      q: "How do you apply EF Core migrations in production?",
      answer: "The pipeline generates an idempotent SQL script or a migration bundle, we review it, and a deployment step applies it before the new version starts. I avoid Migrate() at startup on multiple instances.",
      meaning: {
        hi: "Pipeline एक idempotent SQL script या migration bundle बनाती है, हम उसे review करते हैं, और नया version start होने से पहले एक deployment step उसे apply करता है। कई instances पर startup में Migrate() से मैं बचता हूँ।",
        hg: "Pipeline ek idempotent SQL script ya migration bundle banati hai, hum use review karte hain, aur naya version start hone se pehle ek deployment step use apply karta hai. Kai instances par startup mein Migrate() se main bachta hoon."
      },
      explain: {
        en: `<ul>
<li><b>SQL script</b>: <code>dotnet ef migrations script --idempotent -o migrate.sql</code>. "Idempotent" wraps each migration in a check against <code>__EFMigrationsHistory</code>, so the same script works on any DB version. A DBA can read it before it runs — this is the approach Microsoft's docs recommend first.</li>
<li><b>Bundle</b> (EF Core 6+): <code>dotnet ef migrations bundle</code> builds a self-contained executable; the pipeline runs <code>efbundle --connection "..."</code>. No SDK or source code needed on the deployment agent.</li>
<li><b>Migrate() at startup</b>: easy for dev/test and single-instance apps. Risks in production: several instances racing (EF Core 9 added a migration lock, but the other issues remain), the app's DB user needs DDL rights, a failed migration blocks app startup, and nobody reviewed the SQL.</li>
<li><b>Backward compatibility</b>: during a rolling deploy, the old version runs against the new schema. Prefer additive changes (add a nullable column first, backfill, then make it required in a later release); avoid renames/drops in the same release.</li>
</ul>
<p>Follow-up: "How do you roll back?" — Ideally roll <b>forward</b> with a new fixing migration. <code>Down()</code> scripts exist (<code>migrations script From To</code>), but dropping columns loses data, so test rollback before relying on it.</p>`,
        hi: `<ul>
<li><b>SQL script</b>: <code>dotnet ef migrations script --idempotent -o migrate.sql</code>। "Idempotent" हर migration को <code>__EFMigrationsHistory</code> के check में लपेट देता है, इसलिए वही script DB के किसी भी version पर चलती है। चलने से पहले DBA उसे पढ़ सकता है — Microsoft के docs सबसे पहले यही तरीका recommend करते हैं।</li>
<li><b>Bundle</b> (EF Core 6+): <code>dotnet ef migrations bundle</code> एक self-contained executable बनाता है; pipeline <code>efbundle --connection "..."</code> चलाती है। Deployment agent पर SDK या source code नहीं चाहिए।</li>
<li><b>Startup पर Migrate()</b>: dev/test और single-instance apps के लिए आसान। Production में risks: कई instances की race (EF Core 9 ने migration lock जोड़ा, पर बाकी issues बने रहते हैं), app के DB user को DDL rights चाहिए, failed migration app startup रोक देता है, और SQL किसी ने review नहीं किया।</li>
<li><b>Backward compatibility</b>: rolling deploy के दौरान पुराना version नए schema पर चलता है। Additive बदलाव बेहतर हैं (पहले nullable column जोड़ो, data भरो, फिर अगली release में required बनाओ); एक ही release में renames/drops से बचो।</li>
</ul>
<p>Follow-up: "Rollback कैसे करोगे?" — बेहतर है नए fixing migration के साथ <b>आगे</b> roll करो। <code>Down()</code> scripts होते हैं (<code>migrations script From To</code>), पर columns drop करने से data जाता है, इसलिए भरोसा करने से पहले rollback test करो।</p>`,
        hg: `<ul>
<li><b>SQL script</b>: <code>dotnet ef migrations script --idempotent -o migrate.sql</code>. "Idempotent" har migration ko <code>__EFMigrationsHistory</code> ke check mein lapet deta hai, isliye wahi script DB ke kisi bhi version par chalti hai. Chalne se pehle DBA use padh sakta hai — Microsoft ke docs sabse pehle yahi tareeka recommend karte hain.</li>
<li><b>Bundle</b> (EF Core 6+): <code>dotnet ef migrations bundle</code> ek self-contained executable banata hai; pipeline <code>efbundle --connection "..."</code> chalaati hai. Deployment agent par SDK ya source code nahi chahiye.</li>
<li><b>Startup par Migrate()</b>: dev/test aur single-instance apps ke liye aasaan. Production mein risks: kai instances ki race (EF Core 9 ne migration lock joda, par baaki issues bane rehte hain), app ke DB user ko DDL rights chahiye, failed migration app startup rok deta hai, aur SQL kisi ne review nahi kiya.</li>
<li><b>Backward compatibility</b>: rolling deploy ke dauraan purana version naye schema par chalta hai. Additive badlaav behtar hain (pehle nullable column jodo, data bharo, phir agli release mein required banao); ek hi release mein renames/drops se bacho.</li>
</ul>
<p>Follow-up: "Rollback kaise karoge?" — Behtar hai naye fixing migration ke saath <b>aage</b> roll karo. <code>Down()</code> scripts hote hain (<code>migrations script From To</code>), par columns drop karne se data jaata hai, isliye bharosa karne se pehle rollback test karo.</p>`
      }
    },
    {
      id: "migration-conflicts",
      depth: "detailed",
      q: "Two developers added migrations on parallel branches. What happens when they merge, and how do you fix it?",
      answer: "Both were generated from the same model snapshot, so the snapshot file conflicts. Unrelated changes: merge the snapshot and keep both. Real conflict: remove your migration, merge, and add it again.",
      meaning: {
        hi: "दोनों एक ही model snapshot से बने थे, इसलिए snapshot file में conflict आता है। अलग-अलग बदलाव: snapshot merge करो और दोनों रखो। असली टकराव: अपना migration हटाओ, merge करो, और उसे फिर से add करो।",
        hg: "Dono ek hi model snapshot se bane the, isliye snapshot file mein conflict aata hai. Alag-alag badlaav: snapshot merge karo aur dono rakho. Asli takraav: apna migration hatao, merge karo, aur use phir se add karo."
      },
      explain: {
        en: `<ul>
<li>Each migration file has a timestamp in its name, so the files themselves rarely clash. The <b>model snapshot</b> is the single shared file — that is where Git shows the conflict.</li>
<li><b>Unrelated changes</b> (one adds <code>Customer.City</code>, the other adds a new table): resolve the snapshot so it contains both changes; the two migrations can coexist.</li>
<li><b>Related changes</b> (both touch the same column/table): abort the merge, <code>dotnet ef migrations remove</code> your migration (keep your entity changes), merge main, then <code>migrations add</code> again so it is generated on top of the merged model.</li>
<li>Check with <code>dotnet ef migrations has-pending-model-changes</code> (EF Core 8+) in CI: it fails if someone changed the model but forgot to add a migration.</li>
</ul>
<p>TL angle: agree on a team rule — rebase on main before adding a migration, one migration per PR, and never edit a migration that is already on main.</p>`,
        hi: `<ul>
<li>हर migration file के नाम में timestamp होता है, इसलिए files आपस में कम ही टकराती हैं। <b>Model snapshot</b> ही अकेली shared file है — Git conflict वहीं दिखाता है।</li>
<li><b>अलग-अलग बदलाव</b> (एक ने <code>Customer.City</code> जोड़ा, दूसरे ने नई table): snapshot ऐसे resolve करो कि उसमें दोनों बदलाव हों; दोनों migrations साथ रह सकते हैं।</li>
<li><b>जुड़े हुए बदलाव</b> (दोनों एक ही column/table छूते हैं): merge abort करो, अपना migration <code>dotnet ef migrations remove</code> से हटाओ (entity बदलाव रखो), main merge करो, फिर <code>migrations add</code> दोबारा करो ताकि वो merged model के ऊपर बने।</li>
<li>CI में <code>dotnet ef migrations has-pending-model-changes</code> (EF Core 8+) से check करो: अगर किसी ने model बदला पर migration जोड़ना भूल गया तो यह fail होता है।</li>
</ul>
<p>TL angle: team का नियम तय करो — migration जोड़ने से पहले main पर rebase, हर PR में एक migration, और main पर पहुँच चुके migration को कभी edit मत करो।</p>`,
        hg: `<ul>
<li>Har migration file ke naam mein timestamp hota hai, isliye files aapas mein kam hi takraati hain. <b>Model snapshot</b> hi akeli shared file hai — Git conflict wahin dikhaata hai.</li>
<li><b>Alag-alag badlaav</b> (ek ne <code>Customer.City</code> joda, doosre ne nayi table): snapshot aise resolve karo ki usmein dono badlaav hon; dono migrations saath reh sakte hain.</li>
<li><b>Jude hue badlaav</b> (dono ek hi column/table chhoote hain): merge abort karo, apna migration <code>dotnet ef migrations remove</code> se hatao (entity badlaav rakho), main merge karo, phir <code>migrations add</code> dobara karo taaki woh merged model ke upar bane.</li>
<li>CI mein <code>dotnet ef migrations has-pending-model-changes</code> (EF Core 8+) se check karo: agar kisi ne model badla par migration jodna bhool gaya to yeh fail hota hai.</li>
</ul>
<p>TL angle: team ka niyam tay karo — migration jodne se pehle main par rebase, har PR mein ek migration, aur main par pahunch chuke migration ko kabhi edit mat karo.</p>`
      }
    },
    {
      id: "scaffolding",
      depth: "detailed",
      q: "How do you work Database-First in EF Core, and how do you keep your customizations when you re-scaffold?",
      answer: "I run dotnet ef dbcontext scaffold with the connection string and provider. Re-scaffolding overwrites the generated files, so customizations go into partial classes and OnModelCreatingPartial, or into customized T4 templates.",
      meaning: {
        hi: "मैं connection string और provider के साथ dotnet ef dbcontext scaffold चलाता हूँ। फिर से scaffold करने पर generated files overwrite हो जाती हैं, इसलिए customizations partial classes और OnModelCreatingPartial में, या customized T4 templates में जाती हैं।",
        hg: "Main connection string aur provider ke saath dotnet ef dbcontext scaffold chalata hoon. Phir se scaffold karne par generated files overwrite ho jaati hain, isliye customizations partial classes aur OnModelCreatingPartial mein, ya customized T4 templates mein jaati hain."
      },
      explain: {
        en: `<ul>
<li>Useful options: <code>--output-dir Models</code>, <code>--context ShopContext</code>, <code>--table</code> (repeatable, to scaffold only some tables), <code>--data-annotations</code>, <code>--no-onconfiguring</code>, <code>--force</code> (overwrite on re-scaffold).</li>
<li>Do not hard-code the connection string: pass <code>"Name=ConnectionStrings:Shop"</code> so it is read from configuration/user secrets, and use <code>--no-onconfiguring</code> so it is not written into the generated context.</li>
<li>Generated entity classes and the context are <b>partial</b>, and the context calls <code>partial void OnModelCreatingPartial(ModelBuilder)</code>. Put extra properties, methods and configuration in your own partial files — they survive regeneration.</li>
<li>EF Core 7+ supports <b>T4 templates</b> (<code>dotnet new ef-templates</code>) to change how code is generated (naming, base classes, comments).</li>
<li>Stored procedures and views: views can be scaffolded as keyless entities; stored procedures are called with raw SQL (Day 6).</li>
</ul>
<p>Follow-up: "Can you add migrations to a scaffolded project?" — Yes: add an initial migration and mark it as already applied (or empty its <code>Up()</code>), then continue Code-First. Agree with the DBA team who owns the schema from then on.</p>`,
        hi: `<ul>
<li>काम के options: <code>--output-dir Models</code>, <code>--context ShopContext</code>, <code>--table</code> (कई बार दे सकते हो, सिर्फ़ कुछ tables scaffold करने के लिए), <code>--data-annotations</code>, <code>--no-onconfiguring</code>, <code>--force</code> (re-scaffold पर overwrite)।</li>
<li>Connection string hard-code मत करो: <code>"Name=ConnectionStrings:Shop"</code> दो ताकि वो configuration/user secrets से पढ़ी जाए, और <code>--no-onconfiguring</code> use करो ताकि वो generated context में न लिखी जाए।</li>
<li>Generated entity classes और context <b>partial</b> होते हैं, और context <code>partial void OnModelCreatingPartial(ModelBuilder)</code> call करता है। Extra properties, methods और configuration अपनी partial files में रखो — वो regeneration के बाद भी बचती हैं।</li>
<li>EF Core 7+ में <b>T4 templates</b> (<code>dotnet new ef-templates</code>) से code generation बदल सकते हो (naming, base classes, comments)।</li>
<li>Stored procedures और views: views को keyless entities के रूप में scaffold कर सकते हो; stored procedures raw SQL से call होते हैं (Day 6)।</li>
</ul>
<p>Follow-up: "क्या scaffolded project में migrations जोड़ सकते हो?" — हाँ: एक initial migration जोड़ो और उसे पहले से applied mark करो (या उसका <code>Up()</code> खाली करो), फिर Code-First पर चलो। उसके बाद schema का owner कौन है, यह DBA team के साथ तय करो।</p>`,
        hg: `<ul>
<li>Kaam ke options: <code>--output-dir Models</code>, <code>--context ShopContext</code>, <code>--table</code> (kai baar de sakte ho, sirf kuch tables scaffold karne ke liye), <code>--data-annotations</code>, <code>--no-onconfiguring</code>, <code>--force</code> (re-scaffold par overwrite).</li>
<li>Connection string hard-code mat karo: <code>"Name=ConnectionStrings:Shop"</code> do taaki woh configuration/user secrets se padhi jaaye, aur <code>--no-onconfiguring</code> use karo taaki woh generated context mein na likhi jaaye.</li>
<li>Generated entity classes aur context <b>partial</b> hote hain, aur context <code>partial void OnModelCreatingPartial(ModelBuilder)</code> call karta hai. Extra properties, methods aur configuration apni partial files mein rakho — woh regeneration ke baad bhi bachti hain.</li>
<li>EF Core 7+ mein <b>T4 templates</b> (<code>dotnet new ef-templates</code>) se code generation badal sakte ho (naming, base classes, comments).</li>
<li>Stored procedures aur views: views ko keyless entities ke roop mein scaffold kar sakte ho; stored procedures raw SQL se call hote hain (Day 6).</li>
</ul>
<p>Follow-up: "Kya scaffolded project mein migrations jod sakte ho?" — Haan: ek initial migration jodo aur use pehle se applied mark karo (ya uska <code>Up()</code> khaali karo), phir Code-First par chalo. Uske baad schema ka owner kaun hai, yeh DBA team ke saath tay karo.</p>`
      }
    },
    {
      id: "many-to-many",
      depth: "detailed",
      q: "How does EF Core handle many-to-many relationships? What if the join table needs extra columns?",
      answer: "Since EF Core 5, two collection navigations are enough: EF creates and manages a join table with a composite key. If the link needs data, like an enrolment date, I make the join its own entity.",
      meaning: {
        hi: "EF Core 5 से दो collection navigations काफ़ी हैं: EF composite key वाला join table बनाता और संभालता है। अगर link को enrolment date जैसा data चाहिए, तो मैं join को उसकी अपनी entity बनाता हूँ।",
        hg: "EF Core 5 se do collection navigations kaafi hain: EF composite key wala join table banata aur sambhaalta hai. Agar link ko enrolment date jaisa data chahiye, to main join ko uski apni entity banata hoon."
      },
      explain: {
        en: `<ul>
<li>By convention, <code>Student.Courses</code> + <code>Course.Students</code> give a table <code>CourseStudent</code> with columns <code>CoursesId</code>, <code>StudentsId</code>, a composite PK and two cascading FKs. Rename it with <code>UsingEntity(j =&gt; j.ToTable("Enrolments"))</code>.</li>
<li>Code works on objects: <code>student.Courses.Add(course)</code> → an INSERT into the join table on <code>SaveChanges()</code>; <code>student.Courses.Remove(course)</code> (with the collection loaded) → a DELETE.</li>
<li>Queries: <code>Include(s =&gt; s.Courses)</code> joins through the join table; <code>s.Courses.Any(...)</code> becomes <code>EXISTS</code>.</li>
<li><b>Payload</b>: create <code>Enrollment { StudentId, CourseId, EnrolledOn, Grade }</code> with a composite key. You can keep the skip navigations through it: <code>HasMany(s =&gt; s.Courses).WithMany(c =&gt; c.Students).UsingEntity&lt;Enrollment&gt;()</code>.</li>
<li>Before EF Core 5 (and in old answers online), many-to-many always needed an explicit join entity.</li>
</ul>
<p>TL angle: a pure link table often gets data later (who added it, when). If that is likely, start with an explicit join entity — changing later means a migration and code changes.</p>`,
        hi: `<ul>
<li>Convention से <code>Student.Courses</code> + <code>Course.Students</code> से <code>CourseStudent</code> table बनता है जिसमें <code>CoursesId</code>, <code>StudentsId</code> columns, एक composite PK और दो cascading FKs होते हैं। नाम <code>UsingEntity(j =&gt; j.ToTable("Enrolments"))</code> से बदलो।</li>
<li>Code objects पर काम करता है: <code>student.Courses.Add(course)</code> → <code>SaveChanges()</code> पर join table में INSERT; <code>student.Courses.Remove(course)</code> (collection load होने पर) → एक DELETE।</li>
<li>Queries: <code>Include(s =&gt; s.Courses)</code> join table के through JOIN करता है; <code>s.Courses.Any(...)</code> <code>EXISTS</code> बन जाता है।</li>
<li><b>Payload</b>: composite key वाली <code>Enrollment { StudentId, CourseId, EnrolledOn, Grade }</code> बनाओ। उसके through skip navigations रख सकते हो: <code>HasMany(s =&gt; s.Courses).WithMany(c =&gt; c.Students).UsingEntity&lt;Enrollment&gt;()</code>।</li>
<li>EF Core 5 से पहले (और online पुराने answers में) many-to-many के लिए हमेशा explicit join entity चाहिए होती थी।</li>
</ul>
<p>TL angle: सादी link table में अक्सर बाद में data जुड़ता है (किसने जोड़ा, कब)। अगर ऐसा होने की संभावना है, तो शुरू से explicit join entity रखो — बाद में बदलने का मतलब migration और code बदलाव।</p>`,
        hg: `<ul>
<li>Convention se <code>Student.Courses</code> + <code>Course.Students</code> se <code>CourseStudent</code> table banta hai jismein <code>CoursesId</code>, <code>StudentsId</code> columns, ek composite PK aur do cascading FKs hote hain. Naam <code>UsingEntity(j =&gt; j.ToTable("Enrolments"))</code> se badlo.</li>
<li>Code objects par kaam karta hai: <code>student.Courses.Add(course)</code> → <code>SaveChanges()</code> par join table mein INSERT; <code>student.Courses.Remove(course)</code> (collection load hone par) → ek DELETE.</li>
<li>Queries: <code>Include(s =&gt; s.Courses)</code> join table ke through JOIN karta hai; <code>s.Courses.Any(...)</code> <code>EXISTS</code> ban jaata hai.</li>
<li><b>Payload</b>: composite key wali <code>Enrollment { StudentId, CourseId, EnrolledOn, Grade }</code> banao. Uske through skip navigations rakh sakte ho: <code>HasMany(s =&gt; s.Courses).WithMany(c =&gt; c.Students).UsingEntity&lt;Enrollment&gt;()</code>.</li>
<li>EF Core 5 se pehle (aur online purane answers mein) many-to-many ke liye hamesha explicit join entity chahiye hoti thi.</li>
</ul>
<p>TL angle: saadi link table mein aksar baad mein data judta hai (kisne joda, kab). Agar aisa hone ki sambhaavna hai, to shuru se explicit join entity rakho — baad mein badalne ka matlab migration aur code badlaav.</p>`
      }
    },
    {
      id: "delete-behavior",
      depth: "detailed",
      q: "What happens to child rows when you delete a parent entity in EF Core?",
      answer: "It depends on the delete behaviour. Required relationships default to Cascade, so children are deleted too. Optional ones default to ClientSetNull: EF sets the FK to NULL on tracked children. Restrict or NoAction block the delete.",
      meaning: {
        hi: "यह delete behaviour पर depend करता है। Required relationships का default Cascade है, इसलिए children भी delete होते हैं। Optional का default ClientSetNull है: EF tracked children का FK NULL कर देता है। Restrict या NoAction delete रोक देते हैं।",
        hg: "Yeh delete behaviour par depend karta hai. Required relationships ka default Cascade hai, isliye children bhi delete hote hain. Optional ka default ClientSetNull hai: EF tracked children ka FK NULL kar deta hai. Restrict ya NoAction delete rok dete hain."
      },
      explain: {
        en: `<ul>
<li><b>Cascade</b>: EF deletes tracked children itself, and the database FK has <code>ON DELETE CASCADE</code> for the rest.</li>
<li><b>ClientSetNull</b> (optional default): EF nulls the FK on <b>tracked</b> children; the database has no action, so untracked children make the DELETE fail with an FK violation.</li>
<li><b>SetNull</b>: database <code>ON DELETE SET NULL</code> too. <b>Restrict</b>/<b>NoAction</b>: no cascade, the delete fails while children exist. <b>ClientCascade</b>: EF deletes tracked children, the database does nothing.</li>
<li>SQL Server refuses FKs that "may cause cycles or multiple cascade paths" — then set some relationships to <code>Restrict</code>/<code>NoAction</code>.</li>
<li>Many business systems do not hard-delete at all: a <b>soft delete</b> flag (<code>IsDeleted</code>) plus a global query filter (Day 6 territory).</li>
</ul>
<p>TL angle: cascade delete is a business decision, not a default to accept silently. Review every <code>ON DELETE CASCADE</code> in migrations — deleting one customer should not quietly remove invoices you must keep for audits.</p>`,
        hi: `<ul>
<li><b>Cascade</b>: EF tracked children खुद delete करता है, और बाकी के लिए database FK पर <code>ON DELETE CASCADE</code> होता है।</li>
<li><b>ClientSetNull</b> (optional का default): EF <b>tracked</b> children का FK null करता है; database में कोई action नहीं, इसलिए untracked children होने पर DELETE FK violation से fail होता है।</li>
<li><b>SetNull</b>: database में भी <code>ON DELETE SET NULL</code>। <b>Restrict</b>/<b>NoAction</b>: कोई cascade नहीं, children रहते हुए delete fail होता है। <b>ClientCascade</b>: EF tracked children delete करता है, database कुछ नहीं करता।</li>
<li>SQL Server उन FKs को मना करता है जो "may cause cycles or multiple cascade paths" — तब कुछ relationships को <code>Restrict</code>/<code>NoAction</code> करो।</li>
<li>कई business systems hard-delete करते ही नहीं: एक <b>soft delete</b> flag (<code>IsDeleted</code>) और global query filter (Day 6 का इलाक़ा)।</li>
</ul>
<p>TL angle: cascade delete एक business फ़ैसला है, चुपचाप मान लेने वाला default नहीं। Migrations में हर <code>ON DELETE CASCADE</code> review करो — एक customer delete करने से वो invoices चुपचाप नहीं हटने चाहिए जो audit के लिए रखने ज़रूरी हैं।</p>`,
        hg: `<ul>
<li><b>Cascade</b>: EF tracked children khud delete karta hai, aur baaki ke liye database FK par <code>ON DELETE CASCADE</code> hota hai.</li>
<li><b>ClientSetNull</b> (optional ka default): EF <b>tracked</b> children ka FK null karta hai; database mein koi action nahi, isliye untracked children hone par DELETE FK violation se fail hota hai.</li>
<li><b>SetNull</b>: database mein bhi <code>ON DELETE SET NULL</code>. <b>Restrict</b>/<b>NoAction</b>: koi cascade nahi, children rehte hue delete fail hota hai. <b>ClientCascade</b>: EF tracked children delete karta hai, database kuch nahi karta.</li>
<li>SQL Server un FKs ko mana karta hai jo "may cause cycles or multiple cascade paths" — tab kuch relationships ko <code>Restrict</code>/<code>NoAction</code> karo.</li>
<li>Kai business systems hard-delete karte hi nahi: ek <b>soft delete</b> flag (<code>IsDeleted</code>) aur global query filter (Day 6 ka ilaaka).</li>
</ul>
<p>TL angle: cascade delete ek business faisla hai, chupchaap maan lene wala default nahi. Migrations mein har <code>ON DELETE CASCADE</code> review karo — ek customer delete karne se woh invoices chupchaap nahi hatne chahiye jo audit ke liye rakhne zaroori hain.</p>`
      }
    },
    {
      id: "lazy-loading-pitfalls",
      depth: "detailed",
      q: "Why do many teams avoid lazy loading in web APIs?",
      answer: "It hides database calls behind property access: N+1 queries in loops, surprise loads during JSON serialization, and failures after the context is disposed. Include or projections keep every query visible.",
      meaning: {
        hi: "यह database calls को property access के पीछे छुपा देता है: loops में N+1 queries, JSON serialization के दौरान अचानक loads, और context dispose होने के बाद failures। Include या projections से हर query दिखती रहती है।",
        hg: "Yeh database calls ko property access ke peeche chhupa deta hai: loops mein N+1 queries, JSON serialization ke dauraan achaanak loads, aur context dispose hone ke baad failures. Include ya projections se har query dikhti rehti hai."
      },
      explain: {
        en: `<ul>
<li><b>N+1</b>: <code>foreach (var c in customers) total += c.Orders.Count;</code> = 1 query for customers + 1 per customer. Fine with 3 rows in dev, terrible with 3,000 in production (Day 6).</li>
<li><b>Serialization</b>: returning an entity from a controller makes the JSON serializer touch every navigation — each one may load, and back-references (<code>Order.Customer.Orders...</code>) create cycles.</li>
<li><b>Lifetime</b>: lazy loading needs the context alive. Accessing a navigation after the context is disposed fails (EF raises an error by default) instead of silently returning data.</li>
<li><b>Design cost</b>: proxies need every navigation <code>virtual</code> and classes that can be subclassed; the alternative <code>ILazyLoader</code> injection puts EF into your entities.</li>
<li>Where it can be fine: small desktop tools, admin scripts, prototypes — where convenience matters more and data is small.</li>
</ul>
<p>TL angle: if a codebase already uses lazy loading, do not rip it out in one go. Turn on SQL logging, find the hot N+1 paths, and replace them with Include or projections first.</p>`,
        hi: `<ul>
<li><b>N+1</b>: <code>foreach (var c in customers) total += c.Orders.Count;</code> = customers के लिए 1 query + हर customer के लिए 1। Dev में 3 rows के साथ ठीक, production में 3,000 के साथ बहुत बुरा (Day 6)।</li>
<li><b>Serialization</b>: controller से entity लौटाने पर JSON serializer हर navigation छूता है — हर एक load कर सकता है, और back-references (<code>Order.Customer.Orders...</code>) cycles बनाते हैं।</li>
<li><b>Lifetime</b>: lazy loading के लिए context ज़िंदा होना चाहिए। Context dispose होने के बाद navigation छूने पर चुपचाप data लौटाने की बजाय fail होता है (EF by default error देता है)।</li>
<li><b>Design का खर्च</b>: proxies के लिए हर navigation <code>virtual</code> और classes ऐसी चाहिए जिनकी subclass बन सके; दूसरा तरीका <code>ILazyLoader</code> injection EF को आपकी entities में डाल देता है।</li>
<li>कहाँ ठीक हो सकता है: छोटे desktop tools, admin scripts, prototypes — जहाँ सुविधा ज़्यादा मायने रखती है और data छोटा है।</li>
</ul>
<p>TL angle: अगर codebase पहले से lazy loading use करता है, तो उसे एक झटके में मत हटाओ। SQL logging चालू करो, hot N+1 paths ढूँढो, और पहले उन्हें Include या projections से बदलो।</p>`,
        hg: `<ul>
<li><b>N+1</b>: <code>foreach (var c in customers) total += c.Orders.Count;</code> = customers ke liye 1 query + har customer ke liye 1. Dev mein 3 rows ke saath theek, production mein 3,000 ke saath bahut bura (Day 6).</li>
<li><b>Serialization</b>: controller se entity lautaane par JSON serializer har navigation chhoota hai — har ek load kar sakta hai, aur back-references (<code>Order.Customer.Orders...</code>) cycles banaate hain.</li>
<li><b>Lifetime</b>: lazy loading ke liye context zinda hona chahiye. Context dispose hone ke baad navigation chhoone par chupchaap data lautaane ki bajaay fail hota hai (EF by default error deta hai).</li>
<li><b>Design ka kharch</b>: proxies ke liye har navigation <code>virtual</code> aur classes aisi chahiye jinki subclass ban sake; doosra tareeka <code>ILazyLoader</code> injection EF ko aapki entities mein daal deta hai.</li>
<li>Kahan theek ho sakta hai: chhote desktop tools, admin scripts, prototypes — jahan suvidha zyaada maayne rakhti hai aur data chhota hai.</li>
</ul>
<p>TL angle: agar codebase pehle se lazy loading use karta hai, to use ek jhatke mein mat hatao. SQL logging chaalu karo, hot N+1 paths dhoondho, aur pehle unhe Include ya projections se badlo.</p>`
      }
    },
    {
      id: "include-sql",
      depth: "detailed",
      q: "What SQL does Include generate? What is a cartesian explosion?",
      answer: "Include adds a JOIN: INNER JOIN for a required reference, LEFT JOIN plus ORDER BY keys for a collection. Several collection Includes multiply rows — a cartesian explosion; AsSplitQuery sends one query per collection instead.",
      meaning: {
        hi: "Include एक JOIN जोड़ता है: required reference के लिए INNER JOIN, collection के लिए LEFT JOIN और keys पर ORDER BY। कई collection Includes rows को गुणा करते हैं — cartesian explosion; AsSplitQuery इसकी जगह हर collection की अलग query भेजता है।",
        hg: "Include ek JOIN jodta hai: required reference ke liye INNER JOIN, collection ke liye LEFT JOIN aur keys par ORDER BY. Kai collection Includes rows ko guna karte hain — cartesian explosion; AsSplitQuery iski jagah har collection ki alag query bhejta hai."
      },
      explain: {
        en: `<ul>
<li>Why <code>ORDER BY</code> the keys? EF reads the flat rows in order and builds one <code>Customer</code> with its <code>Orders</code> list; sorted keys let it stream the result.</li>
<li>Why <code>LEFT</code> for collections? Customers with zero orders must still come back. A <b>required</b> reference (<code>Order.Customer</code>) can use <code>INNER JOIN</code>; an <b>optional</b> reference uses <code>LEFT JOIN</code>.</li>
<li><b>Cartesian explosion</b>: a customer with 10 orders and 5 addresses, loaded with <code>Include(c =&gt; c.Orders).Include(c =&gt; c.Addresses)</code>, returns 10 × 5 = 50 rows for that one customer, every row repeating all customer columns. EF logs a warning when one query loads several collections without a splitting choice.</li>
<li><code>AsSplitQuery()</code>: one SQL for customers, one for orders, one for addresses. Fewer duplicated rows, but more round trips, and the queries are not one consistent snapshot unless you use a transaction. Day 6 covers when to choose which.</li>
</ul>
<p>Follow-up: "How do you see the SQL?" — <code>ToQueryString()</code> during development, <code>LogTo</code>/logging category <code>Microsoft.EntityFrameworkCore.Database.Command</code> in apps, SQL Server Profiler / Extended Events / Query Store on the server — the SQL skills you already have.</p>`,
        hi: `<ul>
<li>Keys पर <code>ORDER BY</code> क्यों? EF flat rows को क्रम से पढ़कर एक <code>Customer</code> और उसकी <code>Orders</code> list बनाता है; sorted keys से वो result को stream कर पाता है।</li>
<li>Collections के लिए <code>LEFT</code> क्यों? Zero orders वाले customers भी वापस आने चाहिए। <b>Required</b> reference (<code>Order.Customer</code>) <code>INNER JOIN</code> use कर सकता है; <b>optional</b> reference <code>LEFT JOIN</code>।</li>
<li><b>Cartesian explosion</b>: 10 orders और 5 addresses वाला customer, <code>Include(c =&gt; c.Orders).Include(c =&gt; c.Addresses)</code> से load करो तो उस एक customer की 10 × 5 = 50 rows आती हैं, और हर row में customer के सारे columns दोहराए जाते हैं। जब एक query बिना splitting choice के कई collections load करे, EF warning log करता है।</li>
<li><code>AsSplitQuery()</code>: customers के लिए एक SQL, orders के लिए एक, addresses के लिए एक। कम duplicated rows, पर ज़्यादा round trips, और transaction के बिना ये queries एक consistent snapshot नहीं होतीं। कब कौन सा चुनें, Day 6 में।</li>
</ul>
<p>Follow-up: "SQL कैसे देखोगे?" — development में <code>ToQueryString()</code>, apps में <code>LogTo</code>/logging category <code>Microsoft.EntityFrameworkCore.Database.Command</code>, server पर SQL Server Profiler / Extended Events / Query Store — वही SQL skills जो आपके पास पहले से हैं।</p>`,
        hg: `<ul>
<li>Keys par <code>ORDER BY</code> kyon? EF flat rows ko kram se padhkar ek <code>Customer</code> aur uski <code>Orders</code> list banata hai; sorted keys se woh result ko stream kar paata hai.</li>
<li>Collections ke liye <code>LEFT</code> kyon? Zero orders wale customers bhi wapas aane chahiye. <b>Required</b> reference (<code>Order.Customer</code>) <code>INNER JOIN</code> use kar sakta hai; <b>optional</b> reference <code>LEFT JOIN</code>.</li>
<li><b>Cartesian explosion</b>: 10 orders aur 5 addresses wala customer, <code>Include(c =&gt; c.Orders).Include(c =&gt; c.Addresses)</code> se load karo to us ek customer ki 10 × 5 = 50 rows aati hain, aur har row mein customer ke saare columns dohraaye jaate hain. Jab ek query bina splitting choice ke kai collections load kare, EF warning log karta hai.</li>
<li><code>AsSplitQuery()</code>: customers ke liye ek SQL, orders ke liye ek, addresses ke liye ek. Kam duplicated rows, par zyaada round trips, aur transaction ke bina yeh queries ek consistent snapshot nahi hoti. Kab kaunsa chunein, Day 6 mein.</li>
</ul>
<p>Follow-up: "SQL kaise dekhoge?" — development mein <code>ToQueryString()</code>, apps mein <code>LogTo</code>/logging category <code>Microsoft.EntityFrameworkCore.Database.Command</code>, server par SQL Server Profiler / Extended Events / Query Store — wahi SQL skills jo aapke paas pehle se hain.</p>`
      }
    },
    {
      id: "identity-resolution",
      depth: "detailed",
      q: "What is identity resolution? How is AsNoTracking different from AsNoTrackingWithIdentityResolution?",
      answer: "Identity resolution means one row maps to one object instance. Tracking queries do it through the change tracker. AsNoTracking skips it, so repeated rows become separate objects; AsNoTrackingWithIdentityResolution keeps one instance per key without tracking.",
      meaning: {
        hi: "Identity resolution मतलब एक row का एक ही object instance। Tracking queries यह change tracker से करती हैं। AsNoTracking इसे छोड़ देता है, इसलिए दोहराई गई rows अलग-अलग objects बनती हैं; AsNoTrackingWithIdentityResolution बिना tracking के हर key का एक instance रखता है।",
        hg: "Identity resolution matlab ek row ka ek hi object instance. Tracking queries yeh change tracker se karti hain. AsNoTracking ise chhod deta hai, isliye dohraayi gayi rows alag-alag objects banti hain; AsNoTrackingWithIdentityResolution bina tracking ke har key ka ek instance rakhta hai."
      },
      explain: {
        en: `<ul>
<li>Tracked: query the same customer twice in one context → the <b>same object</b> both times. And if the DB changed in between, you still see the old in-memory values (the tracked instance wins).</li>
<li><code>AsNoTracking()</code> + <code>Include(o =&gt; o.Customer)</code> over 100 orders of one customer → up to 100 separate <code>Customer</code> objects with the same data. Usually harmless for DTO mapping, but wasteful for big graphs and confusing if you compare references.</li>
<li><code>AsNoTrackingWithIdentityResolution()</code> (EF Core 5+): a temporary identity map just for that query — one <code>Customer</code> object, nothing tracked afterwards.</li>
<li><code>Find(id)</code> uses identity resolution too: if the entity is already tracked, it returns it <b>without a database query</b>.</li>
</ul>
<p>Follow-up: "Which is faster?" — plain <code>AsNoTracking</code> is cheapest; with identity resolution there is a small lookup cost per row but fewer objects. Measure for large graphs.</p>`,
        hi: `<ul>
<li>Tracked: एक context में एक ही customer को दो बार query करो → दोनों बार <b>वही object</b>। और अगर बीच में DB बदल गया, तो भी आपको पुरानी in-memory values दिखेंगी (tracked instance जीतता है)।</li>
<li>एक customer के 100 orders पर <code>AsNoTracking()</code> + <code>Include(o =&gt; o.Customer)</code> → एक जैसे data वाले 100 तक अलग <code>Customer</code> objects। DTO mapping के लिए आमतौर पर नुकसान नहीं, पर बड़े graphs के लिए बर्बादी और references compare करो तो उलझन।</li>
<li><code>AsNoTrackingWithIdentityResolution()</code> (EF Core 5+): सिर्फ़ उस query के लिए एक temporary identity map — एक <code>Customer</code> object, बाद में कुछ tracked नहीं।</li>
<li><code>Find(id)</code> भी identity resolution use करता है: entity पहले से tracked हो तो उसे <b>बिना database query</b> के लौटा देता है।</li>
</ul>
<p>Follow-up: "कौन सा तेज़ है?" — सादा <code>AsNoTracking</code> सबसे सस्ता है; identity resolution में हर row पर थोड़ा lookup का खर्च है पर objects कम बनते हैं। बड़े graphs के लिए measure करो।</p>`,
        hg: `<ul>
<li>Tracked: ek context mein ek hi customer ko do baar query karo → dono baar <b>wahi object</b>. Aur agar beech mein DB badal gaya, to bhi aapko purani in-memory values dikhengi (tracked instance jeetta hai).</li>
<li>Ek customer ke 100 orders par <code>AsNoTracking()</code> + <code>Include(o =&gt; o.Customer)</code> → ek jaise data wale 100 tak alag <code>Customer</code> objects. DTO mapping ke liye aamtaur par nuksaan nahi, par bade graphs ke liye barbaadi aur references compare karo to uljhan.</li>
<li><code>AsNoTrackingWithIdentityResolution()</code> (EF Core 5+): sirf us query ke liye ek temporary identity map — ek <code>Customer</code> object, baad mein kuch tracked nahi.</li>
<li><code>Find(id)</code> bhi identity resolution use karta hai: entity pehle se tracked ho to use <b>bina database query</b> ke lauta deta hai.</li>
</ul>
<p>Follow-up: "Kaunsa tez hai?" — saada <code>AsNoTracking</code> sabse sasta hai; identity resolution mein har row par thoda lookup ka kharch hai par objects kam bante hain. Bade graphs ke liye measure karo.</p>`
      }
    },
    {
      id: "update-disconnected",
      depth: "detailed",
      q: "In a Web API PUT endpoint, how do you update an entity? Update() vs Attach() vs load-and-modify?",
      answer: "I load the entity with tracking, apply the allowed changes from a DTO, and call SaveChanges — only changed columns are updated. Update() on a detached object writes every column, or inserts if the key is unset.",
      meaning: {
        hi: "मैं entity को tracking के साथ load करता हूँ, DTO से allowed बदलाव लगाता हूँ, और SaveChanges call करता हूँ — सिर्फ़ बदले columns update होते हैं। Detached object पर Update() हर column लिखता है, या key set न हो तो insert करता है।",
        hg: "Main entity ko tracking ke saath load karta hoon, DTO se allowed badlaav lagaata hoon, aur SaveChanges call karta hoon — sirf badle columns update hote hain. Detached object par Update() har column likhta hai, ya key set na ho to insert karta hai."
      },
      explain: {
        en: `<ul>
<li><b>Load-and-modify</b>: one SELECT + an UPDATE of changed columns. You can validate business rules and check existence (404) first. <code>db.Entry(entity).CurrentValues.SetValues(dto)</code> copies matching properties and marks only the ones that really changed.</li>
<li><b>Update(entity)</b>: no SELECT, but <b>all</b> columns are written (risk: overwriting columns the client did not send with defaults). It walks the graph: related objects with a key → Modified, without a key → Added.</li>
<li><b>Attach(entity)</b> → Unchanged; then set properties (or <code>Entry(e).Property(x =&gt; x.City).IsModified = true</code>) to update only those columns.</li>
<li>Never bind the request body straight to the entity — <b>over-posting</b> lets a client set fields like <code>IsAdmin</code> or <code>Balance</code>. Bind a DTO and map allowed fields.</li>
<li>For "set one column on many rows" without loading, EF Core 7+ has <code>ExecuteUpdate</code> (Day 6). Lost-update protection uses concurrency tokens (Day 6).</li>
</ul>`,
        hi: `<ul>
<li><b>Load-and-modify</b>: एक SELECT + बदले columns का UPDATE। पहले business rules validate कर सकते हो और existence (404) check कर सकते हो। <code>db.Entry(entity).CurrentValues.SetValues(dto)</code> matching properties copy करता है और सिर्फ़ उन्हें mark करता है जो सच में बदलीं।</li>
<li><b>Update(entity)</b>: SELECT नहीं, पर <b>सारे</b> columns लिखे जाते हैं (risk: जो columns client ने नहीं भेजे वो defaults से overwrite)। यह graph पर चलता है: key वाले related objects → Modified, बिना key वाले → Added।</li>
<li><b>Attach(entity)</b> → Unchanged; फिर properties set करो (या <code>Entry(e).Property(x =&gt; x.City).IsModified = true</code>) ताकि सिर्फ़ वही columns update हों।</li>
<li>Request body को सीधे entity पर bind मत करो — <b>over-posting</b> से client <code>IsAdmin</code> या <code>Balance</code> जैसे fields set कर सकता है। DTO bind करो और allowed fields map करो।</li>
<li>बिना load किए "कई rows पर एक column set करना" हो तो EF Core 7+ में <code>ExecuteUpdate</code> है (Day 6)। Lost-update से बचाव concurrency tokens से होता है (Day 6)।</li>
</ul>`,
        hg: `<ul>
<li><b>Load-and-modify</b>: ek SELECT + badle columns ka UPDATE. Pehle business rules validate kar sakte ho aur existence (404) check kar sakte ho. <code>db.Entry(entity).CurrentValues.SetValues(dto)</code> matching properties copy karta hai aur sirf unhe mark karta hai jo sach mein badli.</li>
<li><b>Update(entity)</b>: SELECT nahi, par <b>saare</b> columns likhe jaate hain (risk: jo columns client ne nahi bheje woh defaults se overwrite). Yeh graph par chalta hai: key wale related objects → Modified, bina key wale → Added.</li>
<li><b>Attach(entity)</b> → Unchanged; phir properties set karo (ya <code>Entry(e).Property(x =&gt; x.City).IsModified = true</code>) taaki sirf wahi columns update hon.</li>
<li>Request body ko seedhe entity par bind mat karo — <b>over-posting</b> se client <code>IsAdmin</code> ya <code>Balance</code> jaise fields set kar sakta hai. DTO bind karo aur allowed fields map karo.</li>
<li>Bina load kiye "kai rows par ek column set karna" ho to EF Core 7+ mein <code>ExecuteUpdate</code> hai (Day 6). Lost-update se bachaav concurrency tokens se hota hai (Day 6).</li>
</ul>`
      },
      code: [{
        caption: {
          en: "A typical PUT handler: DTO in, load with tracking, copy allowed fields, save only what changed",
          hi: "एक typical PUT handler: DTO अंदर, tracking के साथ load, allowed fields copy, सिर्फ़ बदला हुआ save",
          hg: "Ek typical PUT handler: DTO andar, tracking ke saath load, allowed fields copy, sirf badla hua save"
        },
        check: "compile",
        packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
        src: `using Microsoft.EntityFrameworkCore;

public record UpdateCustomerRequest(string Name, string? City);   // only what the client may change

public class CustomerService(ShopContext db)
{
    public async Task<bool> UpdateAsync(int id, UpdateCustomerRequest request, CancellationToken ct)
    {
        var customer = await db.Customers.FirstOrDefaultAsync(c => c.Id == id, ct);   // tracked
        if (customer is null) return false;                                           // -> 404

        customer.Name = request.Name;      // Balance and IsAdmin cannot be touched from the request
        customer.City = request.City;

        await db.SaveChangesAsync(ct);     // UPDATE only the columns whose values changed
        return true;
    }
}

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string? City { get; set; }
    public decimal Balance { get; set; }
    public bool IsAdmin { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`
      }]
    },
    {
      id: "savechanges-transaction",
      depth: "detailed",
      q: "Is SaveChanges transactional? What happens if one of three inserts fails?",
      answer: "Yes. When SaveChanges sends several statements, EF wraps them in one transaction: if one insert fails, all roll back and DbUpdateException is thrown. Entities keep their states, so you can fix and retry.",
      meaning: {
        hi: "हाँ। जब SaveChanges कई statements भेजता है, EF उन्हें एक transaction में लपेटता है, इसलिए एक insert fail हो तो सब rollback होते हैं और DbUpdateException throw होता है। Entities की states बनी रहती हैं, इसलिए ठीक करके retry कर सकते हो।",
        hg: "Haan. Jab SaveChanges kai statements bhejta hai, EF unhe ek transaction mein lapet deta hai, isliye ek insert fail ho to sab rollback hote hain aur DbUpdateException throw hota hai. Entities ki states bani rehti hain, isliye theek karke retry kar sakte ho."
      },
      explain: {
        en: `<ul>
<li>Example: add three customers, the second violates a unique index on <code>Email</code> → <code>DbUpdateException</code>, <b>zero</b> rows saved, all three entries still <code>Added</code>.</li>
<li>EF also <b>batches</b> statements: several INSERT/UPDATE/DELETE go to SQL Server in one round trip.</li>
<li>Default since EF Core 7: <code>AutoTransactionBehavior.WhenNeeded</code> — a single statement needs no explicit transaction (it is atomic on its own); several statements get one.</li>
<li>Need several <code>SaveChanges()</code> calls (or EF + Dapper/raw SQL) to succeed or fail together? Use an explicit transaction: <code>db.Database.BeginTransaction()</code> — Day 6.</li>
<li>Concurrency conflicts surface as <code>DbUpdateConcurrencyException</code> — also Day 6.</li>
</ul>
<p>TL angle: one business operation = one <code>SaveChanges()</code> at the end. Calling <code>SaveChanges()</code> inside a loop is slower (a round trip per item) and leaves half-done work if item 7 fails.</p>`,
        hi: `<ul>
<li>उदाहरण: तीन customers add करो, दूसरा <code>Email</code> के unique index को तोड़ता है → <code>DbUpdateException</code>, <b>एक भी</b> row save नहीं, तीनों entries अब भी <code>Added</code>।</li>
<li>EF statements को <b>batch</b> भी करता है: कई INSERT/UPDATE/DELETE एक round trip में SQL Server तक जाते हैं।</li>
<li>EF Core 7 से default: <code>AutoTransactionBehavior.WhenNeeded</code> — एक statement को explicit transaction की ज़रूरत नहीं (वो खुद atomic है); कई statements को एक मिलता है।</li>
<li>कई <code>SaveChanges()</code> calls (या EF + Dapper/raw SQL) को साथ में succeed या fail करना है? Explicit transaction use करो: <code>db.Database.BeginTransaction()</code> — Day 6।</li>
<li>Concurrency conflicts <code>DbUpdateConcurrencyException</code> के रूप में आते हैं — वो भी Day 6।</li>
</ul>
<p>TL angle: एक business operation = आख़िर में एक <code>SaveChanges()</code>। Loop के अंदर <code>SaveChanges()</code> call करना धीमा है (हर item का एक round trip) और item 7 fail हो तो आधा-अधूरा काम छोड़ देता है।</p>`,
        hg: `<ul>
<li>Udaaharan: teen customers add karo, doosra <code>Email</code> ke unique index ko todta hai → <code>DbUpdateException</code>, <b>ek bhi</b> row save nahi, teenon entries ab bhi <code>Added</code>.</li>
<li>EF statements ko <b>batch</b> bhi karta hai: kai INSERT/UPDATE/DELETE ek round trip mein SQL Server tak jaate hain.</li>
<li>EF Core 7 se default: <code>AutoTransactionBehavior.WhenNeeded</code> — ek statement ko explicit transaction ki zaroorat nahi (woh khud atomic hai); kai statements ko ek milta hai.</li>
<li>Kai <code>SaveChanges()</code> calls (ya EF + Dapper/raw SQL) ko saath mein succeed ya fail karna hai? Explicit transaction use karo: <code>db.Database.BeginTransaction()</code> — Day 6.</li>
<li>Concurrency conflicts <code>DbUpdateConcurrencyException</code> ke roop mein aate hain — woh bhi Day 6.</li>
</ul>
<p>TL angle: ek business operation = aakhir mein ek <code>SaveChanges()</code>. Loop ke andar <code>SaveChanges()</code> call karna dheema hai (har item ka ek round trip) aur item 7 fail ho to aadha-adhoora kaam chhod deta hai.</p>`
      }
    },
    {
      id: "ef-code-review",
      depth: "detailed",
      q: "As a Tech Lead, what EF Core problems do you look for in code review?",
      answer: "I check DbContext lifetime and awaits, missing AsNoTracking on reads, hidden queries from lazy loading or wide Includes, SaveChanges in loops, entities returned from APIs, and the SQL of every migration.",
      meaning: {
        hi: "मैं DbContext की lifetime और awaits, reads पर छूटा AsNoTracking, lazy loading या बड़े Includes से छुपी queries, loops में SaveChanges, APIs से लौटाई गई entities, और हर migration का SQL check करता हूँ।",
        hg: "Main DbContext ki lifetime aur awaits, reads par chhoota AsNoTracking, lazy loading ya bade Includes se chhupi queries, loops mein SaveChanges, APIs se lautaayi gayi entities, aur har migration ka SQL check karta hoon."
      },
      explain: {
        en: `<ul>
<li><b>Lifetime</b>: DbContext in a singleton/static, shared across threads, missing <code>await</code>, <code>.Result</code>/<code>.Wait()</code> on EF async calls.</li>
<li><b>Reads</b>: tracking queries on read-only endpoints; loading whole entities when a <code>Select</code> to a DTO would do (Day 6); <code>ToList()</code> before <code>Where</code> (filtering in memory instead of SQL — Day 4).</li>
<li><b>Loading</b>: lazy loading in APIs, Include chains "just in case", several collection Includes in one query.</li>
<li><b>Writes</b>: <code>SaveChanges()</code> inside loops, <code>Update()</code> on request-bound entities (over-posting, all columns overwritten).</li>
<li><b>API surface</b>: returning EF entities from controllers (cycles, leaking columns, accidental lazy loads) instead of DTOs.</li>
<li><b>Migrations</b>: generated SQL reviewed, data-loss warnings understood, <code>ON DELETE CASCADE</code> intended, string lengths and decimal precision set, indexes on FK/filter columns.</li>
</ul>
<p>TL angle: make it cheap to see SQL — log EF commands in development and keep a short team checklist instead of relying on memory.</p>`,
        hi: `<ul>
<li><b>Lifetime</b>: singleton/static में DbContext, threads के बीच shared, छूटा हुआ <code>await</code>, EF async calls पर <code>.Result</code>/<code>.Wait()</code>।</li>
<li><b>Reads</b>: read-only endpoints पर tracking queries; जहाँ DTO में <code>Select</code> काफ़ी था वहाँ पूरी entities load करना (Day 6); <code>Where</code> से पहले <code>ToList()</code> (SQL की बजाय memory में filter — Day 4)।</li>
<li><b>Loading</b>: APIs में lazy loading, "शायद काम आए" वाली Include chains, एक query में कई collection Includes।</li>
<li><b>Writes</b>: loops के अंदर <code>SaveChanges()</code>, request से bind हुई entities पर <code>Update()</code> (over-posting, सारे columns overwrite)।</li>
<li><b>API surface</b>: controllers से DTOs की बजाय EF entities लौटाना (cycles, columns का leak, accidental lazy loads)।</li>
<li><b>Migrations</b>: generated SQL review हुआ, data-loss warnings समझी गईं, <code>ON DELETE CASCADE</code> जानबूझकर है, string lengths और decimal precision set हैं, FK/filter columns पर indexes हैं।</li>
</ul>
<p>TL angle: SQL देखना आसान बनाओ — development में EF commands log करो और याद्दाश्त पर भरोसा करने की बजाय team की एक छोटी checklist रखो।</p>`,
        hg: `<ul>
<li><b>Lifetime</b>: singleton/static mein DbContext, threads ke beech shared, chhoota hua <code>await</code>, EF async calls par <code>.Result</code>/<code>.Wait()</code>.</li>
<li><b>Reads</b>: read-only endpoints par tracking queries; jahan DTO mein <code>Select</code> kaafi tha wahan poori entities load karna (Day 6); <code>Where</code> se pehle <code>ToList()</code> (SQL ki bajaay memory mein filter — Day 4).</li>
<li><b>Loading</b>: APIs mein lazy loading, "shayad kaam aaye" wali Include chains, ek query mein kai collection Includes.</li>
<li><b>Writes</b>: loops ke andar <code>SaveChanges()</code>, request se bind hui entities par <code>Update()</code> (over-posting, saare columns overwrite).</li>
<li><b>API surface</b>: controllers se DTOs ki bajaay EF entities lautaana (cycles, columns ka leak, accidental lazy loads).</li>
<li><b>Migrations</b>: generated SQL review hua, data-loss warnings samjhi gayi, <code>ON DELETE CASCADE</code> jaanbujhkar hai, string lengths aur decimal precision set hain, FK/filter columns par indexes hain.</li>
</ul>
<p>TL angle: SQL dekhna aasaan banao — development mein EF commands log karo aur yaaddaasht par bharosa karne ki bajaay team ki ek chhoti checklist rakho.</p>`
      }
    },
  ],
  puzzles: [
    {
      id: "add-then-remove",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;

using var db = new ShopContext(options);
db.Database.EnsureCreated();

var asha = new Customer { Name = "Asha" };
db.Customers.Add(asha);
Console.WriteLine($"{db.Entry(asha).State}, Id = {asha.Id}");

db.SaveChanges();
Console.WriteLine($"{db.Entry(asha).State}, Id = {asha.Id}");

var ravi = new Customer { Name = "Ravi" };
db.Customers.Add(ravi);
db.Customers.Remove(ravi);
Console.WriteLine(db.Entry(ravi).State);

db.Customers.Remove(asha);
Console.WriteLine(db.Entry(asha).State);
Console.WriteLine($"rows written = {db.SaveChanges()}");

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`,
      answer: "Added, Id = 0\nUnchanged, Id = 1\nDetached\nDeleted\nrows written = 1",
      explain: {
        en: `<ul>
<li><code>Add</code> only marks the object <b>Added</b>; no SQL runs yet. The real key comes from the database (IDENTITY / autoincrement), so <code>asha.Id</code> is still <b>0</b> (EF keeps a temporary key inside the tracker, not on your object).</li>
<li><code>SaveChanges</code> sends the INSERT, copies the generated key back (<b>Id = 1</b>) and moves the entity to <b>Unchanged</b>.</li>
<li>Ravi was Added and then Removed <b>before saving</b>: nothing exists in the database to delete, so EF simply forgets him → <b>Detached</b> (not Deleted).</li>
<li>Asha exists in the database, so <code>Remove</code> → <b>Deleted</b>. The last <code>SaveChanges</code> sends one DELETE → <b>rows written = 1</b>.</li>
</ul>`,
        hi: `<ul>
<li><code>Add</code> object को सिर्फ़ <b>Added</b> mark करता है; अभी कोई SQL नहीं चलता। असली key database से आती है (IDENTITY / autoincrement), इसलिए <code>asha.Id</code> अभी भी <b>0</b> है (EF temporary key tracker के अंदर रखता है, आपके object पर नहीं)।</li>
<li><code>SaveChanges</code> INSERT भेजता है, generated key वापस copy करता है (<b>Id = 1</b>) और entity को <b>Unchanged</b> कर देता है।</li>
<li>Ravi को save से <b>पहले</b> Add फिर Remove किया: database में delete करने को कुछ है ही नहीं, इसलिए EF उसे बस भूल जाता है → <b>Detached</b> (Deleted नहीं)।</li>
<li>Asha database में है, इसलिए <code>Remove</code> → <b>Deleted</b>। आख़िरी <code>SaveChanges</code> एक DELETE भेजता है → <b>rows written = 1</b>।</li>
</ul>`,
        hg: `<ul>
<li><code>Add</code> object ko sirf <b>Added</b> mark karta hai; abhi koi SQL nahi chalta. Asli key database se aati hai (IDENTITY / autoincrement), isliye <code>asha.Id</code> abhi bhi <b>0</b> hai (EF temporary key tracker ke andar rakhta hai, aapke object par nahi).</li>
<li><code>SaveChanges</code> INSERT bhejta hai, generated key wapas copy karta hai (<b>Id = 1</b>) aur entity ko <b>Unchanged</b> kar deta hai.</li>
<li>Ravi ko save se <b>pehle</b> Add phir Remove kiya: database mein delete karne ko kuch hai hi nahi, isliye EF use bas bhool jaata hai → <b>Detached</b> (Deleted nahi).</li>
<li>Asha database mein hai, isliye <code>Remove</code> → <b>Deleted</b>. Aakhri <code>SaveChanges</code> ek DELETE bhejta hai → <b>rows written = 1</b>.</li>
</ul>`
      }
    },
    {
      id: "no-tracking-save",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;

using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    setup.Customers.Add(new Customer { Name = "Ravi", City = "Delhi" });
    setup.SaveChanges();
}

using var db = new ShopContext(options);

var ravi = db.Customers.AsNoTracking().Single(c => c.Name == "Ravi");
ravi.City = "Mumbai";
Console.WriteLine($"saved = {db.SaveChanges()}");

var again = db.Customers.Single(c => c.Name == "Ravi");
Console.WriteLine($"{again.City}, same object = {ReferenceEquals(ravi, again)}");

again.City = "Mumbai";
Console.WriteLine($"saved = {db.SaveChanges()}");

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string? City { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`,
      answer: "saved = 0\nDelhi, same object = False\nsaved = 1",
      explain: {
        en: `<ul>
<li><code>AsNoTracking()</code> gives you a plain object the context does not watch. Changing <code>City</code> is invisible to EF, so <code>SaveChanges()</code> has nothing to send → <b>0</b>.</li>
<li>The database still says <b>Delhi</b>. The second (tracked) query creates a <b>new</b> object — the no-tracking one was never in the identity map → <b>same object = False</b>.</li>
<li>Changing the tracked object works: DetectChanges sees <code>City</code> changed → one UPDATE → <b>saved = 1</b>.</li>
<li>Lesson: <code>AsNoTracking</code> for reads only. If you plan to save, query with tracking (or attach the object on purpose).</li>
</ul>`,
        hi: `<ul>
<li><code>AsNoTracking()</code> आपको एक सादा object देता है जिस पर context की नज़र नहीं है। <code>City</code> बदलना EF को दिखता ही नहीं, इसलिए <code>SaveChanges()</code> के पास भेजने को कुछ नहीं → <b>0</b>।</li>
<li>Database में अब भी <b>Delhi</b> है। दूसरी (tracked) query एक <b>नया</b> object बनाती है — no-tracking वाला कभी identity map में था ही नहीं → <b>same object = False</b>।</li>
<li>Tracked object बदलना काम करता है: DetectChanges देखता है कि <code>City</code> बदली → एक UPDATE → <b>saved = 1</b>।</li>
<li>सीख: <code>AsNoTracking</code> सिर्फ़ reads के लिए। Save करना है तो tracking के साथ query करो (या object को जानबूझकर attach करो)।</li>
</ul>`,
        hg: `<ul>
<li><code>AsNoTracking()</code> aapko ek saada object deta hai jis par context ki nazar nahi hai. <code>City</code> badalna EF ko dikhta hi nahi, isliye <code>SaveChanges()</code> ke paas bhejne ko kuch nahi → <b>0</b>.</li>
<li>Database mein ab bhi <b>Delhi</b> hai. Doosri (tracked) query ek <b>naya</b> object banati hai — no-tracking wala kabhi identity map mein tha hi nahi → <b>same object = False</b>.</li>
<li>Tracked object badalna kaam karta hai: DetectChanges dekhta hai ki <code>City</code> badli → ek UPDATE → <b>saved = 1</b>.</li>
<li>Seekh: <code>AsNoTracking</code> sirf reads ke liye. Save karna hai to tracking ke saath query karo (ya object ko jaanbujhkar attach karo).</li>
</ul>`
      }
    },
    {
      id: "identity-resolution",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;

using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    var asha = new Customer { Name = "Asha" };
    asha.Orders.Add(new Order { Item = "Phone" });
    asha.Orders.Add(new Order { Item = "Cover" });
    setup.Customers.Add(asha);
    setup.SaveChanges();
}

using var db = new ShopContext(options);

var first = db.Customers.Single(c => c.Name == "Asha");
var second = db.Customers.Single(c => c.Id == first.Id);
Console.WriteLine(ReferenceEquals(first, second));

var plain = db.Orders.AsNoTracking().Include(o => o.Customer).ToList();
Console.WriteLine(ReferenceEquals(plain[0].Customer, plain[1].Customer));

var resolved = db.Orders.AsNoTrackingWithIdentityResolution().Include(o => o.Customer).ToList();
Console.WriteLine(ReferenceEquals(resolved[0].Customer, resolved[1].Customer));

Console.WriteLine(db.ChangeTracker.Entries().Count());

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Order> Orders { get; } = [];
}

public class Order
{
    public int Id { get; set; }
    public string Item { get; set; } = "";
    public int CustomerId { get; set; }
    public Customer Customer { get; set; } = null!;
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();
}`,
      answer: "True\nFalse\nTrue\n1",
      explain: {
        en: `<ul>
<li>Two <b>tracked</b> queries for the same row return the <b>same instance</b>: the change tracker keeps one object per key → <b>True</b>.</li>
<li><code>AsNoTracking()</code> + <code>Include</code>: the JOIN returns Asha's columns on both order rows, and EF builds a <b>new</b> <code>Customer</code> for each row → <b>False</b>.</li>
<li><code>AsNoTrackingWithIdentityResolution()</code> keeps a temporary identity map for that query only → both orders share <b>one</b> Asha → <b>True</b>.</li>
<li>Only the tracked Asha from the first query is in the change tracker; neither no-tracking query added anything → <b>1</b>.</li>
</ul>`,
        hi: `<ul>
<li>एक ही row के लिए दो <b>tracked</b> queries <b>वही instance</b> लौटाती हैं: change tracker हर key का एक object रखता है → <b>True</b>।</li>
<li><code>AsNoTracking()</code> + <code>Include</code>: JOIN दोनों order rows पर Asha के columns लौटाता है, और EF हर row के लिए एक <b>नया</b> <code>Customer</code> बनाता है → <b>False</b>।</li>
<li><code>AsNoTrackingWithIdentityResolution()</code> सिर्फ़ उस query के लिए एक temporary identity map रखता है → दोनों orders <b>एक ही</b> Asha share करते हैं → <b>True</b>।</li>
<li>Change tracker में सिर्फ़ पहली query वाली tracked Asha है; किसी no-tracking query ने कुछ नहीं जोड़ा → <b>1</b>।</li>
</ul>`,
        hg: `<ul>
<li>Ek hi row ke liye do <b>tracked</b> queries <b>wahi instance</b> lautaati hain: change tracker har key ka ek object rakhta hai → <b>True</b>.</li>
<li><code>AsNoTracking()</code> + <code>Include</code>: JOIN dono order rows par Asha ke columns lautaata hai, aur EF har row ke liye ek <b>naya</b> <code>Customer</code> banata hai → <b>False</b>.</li>
<li><code>AsNoTrackingWithIdentityResolution()</code> sirf us query ke liye ek temporary identity map rakhta hai → dono orders <b>ek hi</b> Asha share karte hain → <b>True</b>.</li>
<li>Change tracker mein sirf pehli query wali tracked Asha hai; kisi no-tracking query ne kuch nahi joda → <b>1</b>.</li>
</ul>`
      }
    },
    {
      id: "fixup-without-include",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;

using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    var ravi = new Customer { Name = "Ravi" };
    ravi.Orders.Add(new Order { Item = "Laptop" });
    setup.Customers.Add(ravi);
    setup.SaveChanges();
}

using var db = new ShopContext(options);

var order = db.Orders.Single(o => o.Item == "Laptop");
Console.WriteLine(order.Customer is null);

var customer = db.Customers.Single(c => c.Name == "Ravi");
Console.WriteLine(order.Customer is null);
Console.WriteLine(customer.Orders.Count);

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Order> Orders { get; } = [];
}

public class Order
{
    public int Id { get; set; }
    public string Item { get; set; } = "";
    public int CustomerId { get; set; }
    public Customer? Customer { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();
}`,
      answer: "True\nFalse\n1",
      explain: {
        en: `<ul>
<li>No <code>Include</code>, no lazy loading → the first query loads only the order row. <code>order.Customer</code> is <b>null</b> → <b>True</b>.</li>
<li>The second query loads Ravi into the <b>same</b> context. EF's <b>relationship fix-up</b> sees that the tracked order has <code>CustomerId</code> = Ravi's key and connects them both ways → <code>order.Customer</code> is set (<b>False</b>), and <code>customer.Orders</code> contains the order (<b>1</b>).</li>
<li>No extra query ran for this — fix-up only connects entities that are <b>already tracked</b>.</li>
<li>Interview angle: this is why code sometimes "works" without Include (the related data happened to be loaded earlier in the request) and breaks when someone reorders the code. Be explicit with Include.</li>
</ul>`,
        hi: `<ul>
<li>न <code>Include</code>, न lazy loading → पहली query सिर्फ़ order की row load करती है। <code>order.Customer</code> <b>null</b> है → <b>True</b>।</li>
<li>दूसरी query Ravi को <b>उसी</b> context में load करती है। EF का <b>relationship fix-up</b> देखता है कि tracked order का <code>CustomerId</code> = Ravi की key, और दोनों को दोनों तरफ़ से जोड़ देता है → <code>order.Customer</code> set हो जाता है (<b>False</b>), और <code>customer.Orders</code> में order आ जाता है (<b>1</b>)।</li>
<li>इसके लिए कोई extra query नहीं चली — fix-up सिर्फ़ उन entities को जोड़ता है जो <b>पहले से tracked</b> हैं।</li>
<li>Interview angle: इसीलिए कभी-कभी code बिना Include के "चल जाता है" (related data उस request में पहले ही load हो गया था) और कोई code का क्रम बदले तो टूट जाता है। Include के साथ explicit रहो।</li>
</ul>`,
        hg: `<ul>
<li>Na <code>Include</code>, na lazy loading → pehli query sirf order ki row load karti hai. <code>order.Customer</code> <b>null</b> hai → <b>True</b>.</li>
<li>Doosri query Ravi ko <b>usi</b> context mein load karti hai. EF ka <b>relationship fix-up</b> dekhta hai ki tracked order ka <code>CustomerId</code> = Ravi ki key, aur dono ko dono taraf se jod deta hai → <code>order.Customer</code> set ho jaata hai (<b>False</b>), aur <code>customer.Orders</code> mein order aa jaata hai (<b>1</b>).</li>
<li>Iske liye koi extra query nahi chali — fix-up sirf un entities ko jodta hai jo <b>pehle se tracked</b> hain.</li>
<li>Interview angle: isiliye kabhi-kabhi code bina Include ke "chal jaata hai" (related data us request mein pehle hi load ho gaya tha) aur koi code ka kram badle to toot jaata hai. Include ke saath explicit raho.</li>
</ul>`
      }
    },
    {
      id: "include-join-type",
      packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
      src: `using Microsoft.EntityFrameworkCore;

// Dummy connection string: ToQueryString only generates SQL, nothing connects
var options = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlServer("Server=.;Database=Shop;Trusted_Connection=True;")
    .Options;
using var db = new ShopContext(options);

Console.WriteLine(db.Orders.Include(o => o.Customer).ToQueryString());
Console.WriteLine("---");
Console.WriteLine(db.Customers.Include(c => c.Orders).ToQueryString());

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Order> Orders { get; } = [];
}

public class Order
{
    public int Id { get; set; }
    public string Item { get; set; } = "";
    public int CustomerId { get; set; }              // required FK
    public Customer Customer { get; set; } = null!;
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();
}`,
      answer: "SELECT [o].[Id], [o].[CustomerId], [o].[Item], [c].[Id], [c].[Name]\nFROM [Orders] AS [o]\nINNER JOIN [Customers] AS [c] ON [o].[CustomerId] = [c].[Id]\n---\nSELECT [c].[Id], [c].[Name], [o].[Id], [o].[CustomerId], [o].[Item]\nFROM [Customers] AS [c]\nLEFT JOIN [Orders] AS [o] ON [c].[Id] = [o].[CustomerId]\nORDER BY [c].[Id]",
      explain: {
        en: `<ul>
<li><b>Order → Customer</b> is a required reference (<code>int CustomerId</code>, NOT NULL): every order has a customer, so EF can safely use an <b>INNER JOIN</b>. No <code>ORDER BY</code> is needed — each row is one complete order.</li>
<li><b>Customer → Orders</b> is a collection: customers with zero orders must still appear, so EF uses a <b>LEFT JOIN</b>. One customer becomes many rows, so EF adds <b>ORDER BY [c].[Id]</b> to read each customer's rows together and rebuild <code>customer.Orders</code>.</li>
<li>Notice the customer columns repeat on every order row — with several collection Includes this repetition multiplies (cartesian explosion; <code>AsSplitQuery</code> on Day 6).</li>
<li>If <code>CustomerId</code> were <code>int?</code> (optional), the first query would use a LEFT JOIN too.</li>
</ul>`,
        hi: `<ul>
<li><b>Order → Customer</b> एक required reference है (<code>int CustomerId</code>, NOT NULL): हर order का customer होता है, इसलिए EF बेझिझक <b>INNER JOIN</b> use कर सकता है। <code>ORDER BY</code> की ज़रूरत नहीं — हर row एक पूरा order है।</li>
<li><b>Customer → Orders</b> एक collection है: zero orders वाले customers भी दिखने चाहिए, इसलिए EF <b>LEFT JOIN</b> use करता है। एक customer कई rows बन जाता है, इसलिए EF <b>ORDER BY [c].[Id]</b> जोड़ता है ताकि हर customer की rows साथ पढ़कर <code>customer.Orders</code> फिर से बना सके।</li>
<li>ध्यान दो कि customer के columns हर order row पर दोहराए जाते हैं — कई collection Includes के साथ यह दोहराव गुणा हो जाता है (cartesian explosion; <code>AsSplitQuery</code> Day 6 में)।</li>
<li>अगर <code>CustomerId</code> <code>int?</code> (optional) होता, तो पहली query भी LEFT JOIN use करती।</li>
</ul>`,
        hg: `<ul>
<li><b>Order → Customer</b> ek required reference hai (<code>int CustomerId</code>, NOT NULL): har order ka customer hota hai, isliye EF bejhijhak <b>INNER JOIN</b> use kar sakta hai. <code>ORDER BY</code> ki zaroorat nahi — har row ek poora order hai.</li>
<li><b>Customer → Orders</b> ek collection hai: zero orders wale customers bhi dikhne chahiye, isliye EF <b>LEFT JOIN</b> use karta hai. Ek customer kai rows ban jaata hai, isliye EF <b>ORDER BY [c].[Id]</b> jodta hai taaki har customer ki rows saath padhkar <code>customer.Orders</code> phir se bana sake.</li>
<li>Dhyaan do ki customer ke columns har order row par dohraaye jaate hain — kai collection Includes ke saath yeh dohraav guna ho jaata hai (cartesian explosion; <code>AsSplitQuery</code> Day 6 mein).</li>
<li>Agar <code>CustomerId</code> <code>int?</code> (optional) hota, to pehli query bhi LEFT JOIN use karti.</li>
</ul>`
      }
    },
    {
      id: "lazy-n-plus-one",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite", "Microsoft.EntityFrameworkCore.Proxies"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();

int queries = 0;
var options = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlite(connection)
    .UseLazyLoadingProxies()
    .LogTo(_ => queries++, new[] { RelationalEventId.CommandExecuted })   // count SQL commands
    .Options;

using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    setup.Customers.AddRange(
        new Customer { Name = "Asha", Orders = { new Order { Item = "Phone" }, new Order { Item = "Cover" } } },
        new Customer { Name = "Ravi", Orders = { new Order { Item = "Laptop" } } },
        new Customer { Name = "Meena" });
    setup.SaveChanges();
}

using var db = new ShopContext(options);

queries = 0;
var customers = db.Customers.OrderBy(c => c.Name).ToList();
foreach (var c in customers)
    Console.WriteLine($"{c.Name}: {c.Orders.Count}");
Console.WriteLine($"queries = {queries}");

queries = 0;
int total = customers.Sum(c => c.Orders.Count);
Console.WriteLine($"total = {total}, queries = {queries}");

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public virtual List<Order> Orders { get; set; } = [];   // virtual: the proxy overrides it
}

public class Order
{
    public int Id { get; set; }
    public string Item { get; set; } = "";
    public int CustomerId { get; set; }
    public virtual Customer Customer { get; set; } = null!;
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`,
      answer: "Asha: 2\nMeena: 0\nRavi: 1\nqueries = 4\ntotal = 3, queries = 0",
      explain: {
        en: `<ul>
<li>Query 1 loads the three customers (sorted by name). With lazy-loading proxies, each <code>c.Orders</code> getter checks "loaded yet?" and, if not, runs a query.</li>
<li>Three customers → three more queries → <b>queries = 4</b>. That is <b>N+1</b>: 1 for the list + N for the children. Meena's query runs too, even though she has no orders.</li>
<li>The second loop touches the same navigations again, but they are now marked as loaded → <b>0</b> new queries. Lazy loading runs once per navigation per entity, not on every access.</li>
<li>With 3 customers this is harmless; with 3,000 it is 3,001 round trips. The fix is <code>Include(c =&gt; c.Orders)</code> (1 query) or a projection — Day 6 goes deeper into N+1.</li>
</ul>`,
        hi: `<ul>
<li>Query 1 तीनों customers load करती है (नाम से sorted)। Lazy-loading proxies के साथ हर <code>c.Orders</code> getter check करता है "load हुआ?" और नहीं हुआ तो एक query चलाता है।</li>
<li>तीन customers → तीन और queries → <b>queries = 4</b>। यही <b>N+1</b> है: list के लिए 1 + children के लिए N। Meena की query भी चलती है, जबकि उसके कोई orders नहीं हैं।</li>
<li>दूसरा loop वही navigations फिर छूता है, पर अब वो loaded mark हैं → <b>0</b> नई queries। Lazy loading हर entity के हर navigation के लिए एक बार चलता है, हर access पर नहीं।</li>
<li>3 customers के साथ यह नुकसानदेह नहीं; 3,000 के साथ यह 3,001 round trips है। Fix है <code>Include(c =&gt; c.Orders)</code> (1 query) या projection — N+1 पर और गहराई Day 6 में।</li>
</ul>`,
        hg: `<ul>
<li>Query 1 teenon customers load karti hai (naam se sorted). Lazy-loading proxies ke saath har <code>c.Orders</code> getter check karta hai "load hua?" aur nahi hua to ek query chalata hai.</li>
<li>Teen customers → teen aur queries → <b>queries = 4</b>. Yahi <b>N+1</b> hai: list ke liye 1 + children ke liye N. Meena ki query bhi chalti hai, jabki uske koi orders nahi hain.</li>
<li>Doosra loop wahi navigations phir chhoota hai, par ab woh loaded mark hain → <b>0</b> nayi queries. Lazy loading har entity ke har navigation ke liye ek baar chalta hai, har access par nahi.</li>
<li>3 customers ke saath yeh nuksaandeh nahi; 3,000 ke saath yeh 3,001 round trips hai. Fix hai <code>Include(c =&gt; c.Orders)</code> (1 query) ya projection — N+1 par aur gehraai Day 6 mein.</li>
</ul>`
      }
    },
    {
      id: "update-vs-attach",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.EntityFrameworkCore;

// No database needed: we only look at what the change tracker would send
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite("Data Source=:memory:").Options;
using var db = new ShopContext(options);

// Imagine these objects came from a PUT request body
var fromRequest = new Customer { Id = 1, Name = "Asha", City = "Mumbai" };
db.Update(fromRequest);
Console.WriteLine($"Update: {db.Entry(fromRequest).State}, modified = {Modified(fromRequest)}");
db.ChangeTracker.Clear();

var stub = new Customer { Id = 1, Name = "Asha", City = "Pune" };
db.Attach(stub);
Console.WriteLine($"Attach: {db.Entry(stub).State}");
stub.City = "Mumbai";
Console.WriteLine($"Attach + edit: {db.Entry(stub).State}, modified = {Modified(stub)}");
db.ChangeTracker.Clear();

var brandNew = new Customer { Name = "Neha", City = "Goa" };
db.Update(brandNew);
Console.WriteLine($"Update without key: {db.Entry(brandNew).State}");

string Modified(Customer c) =>
    string.Join(", ", db.Entry(c).Properties.Where(p => p.IsModified).Select(p => p.Metadata.Name));

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string? City { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`,
      answer: "Update: Modified, modified = City, Name\nAttach: Unchanged\nAttach + edit: Modified, modified = City\nUpdate without key: Added",
      explain: {
        en: `<ul>
<li><code>Update()</code> on an object with a key value: EF has no original values, so it marks the entity <b>Modified</b> and <b>every non-key property</b> modified → the UPDATE would write <code>City</code> <b>and</b> <code>Name</code> (and any column the client forgot would be overwritten too).</li>
<li><code>Attach()</code> says "this row exists exactly like this" → <b>Unchanged</b>. The current values become the snapshot.</li>
<li>Changing <code>City</code> after Attach → DetectChanges finds just that difference → only <b>City</b> is modified, so the UPDATE writes one column.</li>
<li><code>Update()</code> on an object whose key is the default (0) with a store-generated key: EF treats it as new → <b>Added</b> (an INSERT, not an UPDATE). A classic bug when a client forgets to send the id.</li>
</ul>`,
        hi: `<ul>
<li>Key value वाले object पर <code>Update()</code>: EF के पास original values नहीं हैं, इसलिए वो entity को <b>Modified</b> और <b>हर non-key property</b> को modified mark करता है → UPDATE <code>City</code> <b>और</b> <code>Name</code> दोनों लिखेगा (और जो column client भेजना भूल गया वो भी overwrite होगा)।</li>
<li><code>Attach()</code> कहता है "यह row बिल्कुल ऐसी ही मौजूद है" → <b>Unchanged</b>। Current values ही snapshot बन जाती हैं।</li>
<li>Attach के बाद <code>City</code> बदलो → DetectChanges को सिर्फ़ वही फ़र्क मिलता है → सिर्फ़ <b>City</b> modified, इसलिए UPDATE एक ही column लिखता है।</li>
<li>Store-generated key वाले object पर, जिसकी key default (0) है, <code>Update()</code>: EF उसे नया मानता है → <b>Added</b> (UPDATE नहीं, INSERT)। Client id भेजना भूल जाए तो यह classic bug है।</li>
</ul>`,
        hg: `<ul>
<li>Key value wale object par <code>Update()</code>: EF ke paas original values nahi hain, isliye woh entity ko <b>Modified</b> aur <b>har non-key property</b> ko modified mark karta hai → UPDATE <code>City</code> <b>aur</b> <code>Name</code> dono likhega (aur jo column client bhejna bhool gaya woh bhi overwrite hoga).</li>
<li><code>Attach()</code> kehta hai "yeh row bilkul aisi hi maujood hai" → <b>Unchanged</b>. Current values hi snapshot ban jaati hain.</li>
<li>Attach ke baad <code>City</code> badlo → DetectChanges ko sirf wahi farak milta hai → sirf <b>City</b> modified, isliye UPDATE ek hi column likhta hai.</li>
<li>Store-generated key wale object par, jiski key default (0) hai, <code>Update()</code>: EF use naya maanta hai → <b>Added</b> (UPDATE nahi, INSERT). Client id bhejna bhool jaaye to yeh classic bug hai.</li>
</ul>`
      }
    },
    {
      id: "stale-tracked-data",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;

using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    setup.Customers.Add(new Customer { Name = "Asha", City = "Pune" });
    setup.SaveChanges();
}

using var db = new ShopContext(options);
var asha = db.Customers.Single(c => c.Name == "Asha");

// Another request (another context) changes the same row
using (var other = new ShopContext(options))
{
    other.Customers.Single(c => c.Name == "Asha").City = "Mumbai";
    other.SaveChanges();
}

var again = db.Customers.Single(c => c.Name == "Asha");
Console.WriteLine($"{again.City}, same object = {ReferenceEquals(asha, again)}");

var fresh = db.Customers.AsNoTracking().Single(c => c.Name == "Asha");
Console.WriteLine(fresh.City);

db.Entry(asha).Reload();
Console.WriteLine(asha.City);

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string? City { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`,
      answer: "Pune, same object = True\nMumbai\nMumbai",
      explain: {
        en: `<ul>
<li>The second tracked query <b>does</b> go to the database and reads City = Mumbai. But Asha's key is already tracked, so EF returns the <b>existing instance</b> and does not overwrite its values → <b>Pune, same object = True</b>. (Otherwise your unsaved edits could be silently lost.)</li>
<li>The no-tracking query skips the identity map and builds a new object from the row → <b>Mumbai</b>.</li>
<li><code>Entry(asha).Reload()</code> re-reads the row and overwrites the tracked values → <b>Mumbai</b>.</li>
<li>Lesson: a long-lived context shows stale data. Keep contexts short (one per request) — then this rarely matters. For real "someone else changed it" conflicts, use concurrency tokens (Day 6).</li>
</ul>`,
        hi: `<ul>
<li>दूसरी tracked query database तक <b>जाती</b> है और City = Mumbai पढ़ती है। पर Asha की key पहले से tracked है, इसलिए EF <b>पुराना instance</b> लौटाता है और उसकी values overwrite नहीं करता → <b>Pune, same object = True</b>। (वरना आपके unsaved बदलाव चुपचाप खो सकते थे।)</li>
<li>No-tracking query identity map को छोड़कर row से नया object बनाती है → <b>Mumbai</b>।</li>
<li><code>Entry(asha).Reload()</code> row को फिर से पढ़कर tracked values overwrite करता है → <b>Mumbai</b>।</li>
<li>सीख: लंबे समय तक ज़िंदा context पुराना data दिखाता है। Contexts छोटे रखो (हर request का एक) — तब यह कम ही मायने रखता है। असली "किसी और ने बदल दिया" वाले conflicts के लिए concurrency tokens use करो (Day 6)।</li>
</ul>`,
        hg: `<ul>
<li>Doosri tracked query database tak <b>jaati</b> hai aur City = Mumbai padhti hai. Par Asha ki key pehle se tracked hai, isliye EF <b>purana instance</b> lautaata hai aur uski values overwrite nahi karta → <b>Pune, same object = True</b>. (Warna aapke unsaved badlaav chupchaap kho sakte the.)</li>
<li>No-tracking query identity map ko chhodkar row se naya object banati hai → <b>Mumbai</b>.</li>
<li><code>Entry(asha).Reload()</code> row ko phir se padhkar tracked values overwrite karta hai → <b>Mumbai</b>.</li>
<li>Seekh: lambe samay tak zinda context purana data dikhaata hai. Contexts chhote rakho (har request ka ek) — tab yeh kam hi maayne rakhta hai. Asli "kisi aur ne badal diya" wale conflicts ke liye concurrency tokens use karo (Day 6).</li>
</ul>`
      }
    },
  ],
  revision: {
    en: [
      "<b>DbContext</b> = a unit-of-work session: LINQ → SQL, tracks loaded entities, <code>SaveChanges()</code> writes all changes in one transaction. <b>DbSet&lt;T&gt;</b> = one table.",
      "<b>Lifetime</b>: <code>AddDbContext</code> = Scoped, one per HTTP request. Not thread-safe — never a singleton, never shared across parallel tasks.",
      "<b>Factory / pool</b>: <code>AddDbContextFactory</code> for background jobs, Blazor Server and parallel work; <code>AddDbContextPool</code> only for proven high-throughput needs.",
      "<b>Code-First</b> = C# model is the truth, migrations build the schema. <b>DB-First</b> = <code>dotnet ef dbcontext scaffold</code> from an existing database.",
      "<b>Migrations</b>: <code>migrations add</code> diffs against the model snapshot; review the SQL; applied ones are recorded in <code>__EFMigrationsHistory</code>.",
      "<b>Production migrations</b>: an idempotent SQL script or a bundle run by the pipeline — not <code>Migrate()</code> at startup on many instances.",
      "<b>Relationships</b>: FK on the many side; 1:1 = FK + unique index; N:N = join table, created for you by skip navigations (EF Core 5+).",
      "<b>Delete rules</b>: required FK → Cascade by default; optional FK → ClientSetNull. Review every <code>ON DELETE CASCADE</code>.",
      "<b>Loading</b>: eager = <code>Include</code> (a JOIN); explicit = <code>Entry().Collection().Load()</code>; lazy = proxies + <code>virtual</code>, one query per navigation (N+1 risk). Nothing loads by default.",
      "<b>Include SQL</b>: required reference → INNER JOIN; collection → LEFT JOIN + ORDER BY keys. Check it with <code>ToQueryString()</code>.",
      "<b>Tracking</b>: states Added / Unchanged / Modified / Deleted / Detached; the UPDATE contains only changed columns. <code>AsNoTracking()</code> for read-only queries.",
      "<b>Identity resolution</b>: one object per key in a context — a tracked query will not refresh it; <code>AsNoTrackingWithIdentityResolution()</code> dedupes without tracking."
    ],
    meaning: {
      hi: [
        "DbContext = एक unit-of-work session: LINQ → SQL, load की गई entities track करता है, SaveChanges() सारे बदलाव एक transaction में लिखता है। DbSet&lt;T&gt; = एक table।",
        "Lifetime: AddDbContext = Scoped, हर HTTP request का एक। Thread-safe नहीं — कभी singleton नहीं, कभी parallel tasks में share नहीं।",
        "Factory / pool: background jobs, Blazor Server और parallel काम के लिए AddDbContextFactory; AddDbContextPool सिर्फ़ साबित हुई high-throughput ज़रूरत के लिए।",
        "Code-First = C# model truth है, migrations schema बनाते हैं। DB-First = पहले से बने database से dotnet ef dbcontext scaffold।",
        "Migrations: migrations add, model snapshot से diff करता है; SQL review करो; apply हुए migrations __EFMigrationsHistory में दर्ज होते हैं।",
        "Production migrations: pipeline से चलने वाली idempotent SQL script या bundle — कई instances पर startup में Migrate() नहीं।",
        "Relationships: FK many वाली side पर; 1:1 = FK + unique index; N:N = join table, जो skip navigations से आपके लिए बनता है (EF Core 5+)।",
        "Delete rules: required FK → by default Cascade; optional FK → ClientSetNull। हर ON DELETE CASCADE review करो।",
        "Loading: eager = Include (एक JOIN); explicit = Entry().Collection().Load(); lazy = proxies + virtual, हर navigation की एक query (N+1 का ख़तरा)। By default कुछ load नहीं होता।",
        "Include का SQL: required reference → INNER JOIN; collection → LEFT JOIN + keys पर ORDER BY। ToQueryString() से check करो।",
        "Tracking: states Added / Unchanged / Modified / Deleted / Detached; UPDATE में सिर्फ़ बदले columns। Read-only queries के लिए AsNoTracking()।",
        "Identity resolution: एक context में हर key का एक object — tracked query उसे refresh नहीं करती; AsNoTrackingWithIdentityResolution() बिना tracking के duplicates हटाता है।"
      ],
      hg: [
        "DbContext = ek unit-of-work session: LINQ → SQL, load ki gayi entities track karta hai, SaveChanges() saare badlaav ek transaction mein likhta hai. DbSet&lt;T&gt; = ek table.",
        "Lifetime: AddDbContext = Scoped, har HTTP request ka ek. Thread-safe nahi — kabhi singleton nahi, kabhi parallel tasks mein share nahi.",
        "Factory / pool: background jobs, Blazor Server aur parallel kaam ke liye AddDbContextFactory; AddDbContextPool sirf saabit hui high-throughput zaroorat ke liye.",
        "Code-First = C# model truth hai, migrations schema banaate hain. DB-First = pehle se bane database se dotnet ef dbcontext scaffold.",
        "Migrations: migrations add, model snapshot se diff karta hai; SQL review karo; apply hue migrations __EFMigrationsHistory mein darj hote hain.",
        "Production migrations: pipeline se chalne wali idempotent SQL script ya bundle — kai instances par startup mein Migrate() nahi.",
        "Relationships: FK many wali side par; 1:1 = FK + unique index; N:N = join table, jo skip navigations se aapke liye banta hai (EF Core 5+).",
        "Delete rules: required FK → by default Cascade; optional FK → ClientSetNull. Har ON DELETE CASCADE review karo.",
        "Loading: eager = Include (ek JOIN); explicit = Entry().Collection().Load(); lazy = proxies + virtual, har navigation ki ek query (N+1 ka khatra). By default kuch load nahi hota.",
        "Include ka SQL: required reference → INNER JOIN; collection → LEFT JOIN + keys par ORDER BY. ToQueryString() se check karo.",
        "Tracking: states Added / Unchanged / Modified / Deleted / Detached; UPDATE mein sirf badle columns. Read-only queries ke liye AsNoTracking().",
        "Identity resolution: ek context mein har key ka ek object — tracked query use refresh nahi karti; AsNoTrackingWithIdentityResolution() bina tracking ke duplicates hataata hai."
      ]
    }
  },
  whatsNew: {
    en: `<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, requires .NET 10). Everything in today's lesson works the same in EF Core 10. Many "old" answers online predate the features below — this is what each version <b>added</b>:</p>
<ul>
<li><b>EF Core 5</b> — many-to-many with skip navigations (no join entity needed), filtered <code>Include</code>, split queries (<code>AsSplitQuery</code>), <code>AsNoTrackingWithIdentityResolution</code>.</li>
<li><b>EF Core 6</b> — migration bundles (<code>dotnet ef migrations bundle</code>).</li>
<li><b>EF Core 7</b> — <code>AutoTransactionBehavior</code> (a single-statement <code>SaveChanges</code> no longer opens a transaction); T4 templates to customize scaffolding.</li>
<li><b>EF Core 8</b> — lazy loading also works for no-tracking queries; <code>dotnet ef migrations has-pending-model-changes</code> to catch a forgotten migration in CI.</li>
<li><b>EF Core 9</b> — <code>Migrate()</code> takes a lock so concurrent instances do not apply the same migration twice; applying migrations now throws if the model has changes with no migration; new <code>UseSeeding</code>/<code>UseAsyncSeeding</code> for seed data.</li>
<li><b>EF Core 10</b> — the headline changes are on the query side (for example <code>LeftJoin</code>/<code>RightJoin</code>, Day 4); more EF Core 9/10 changes on Day 6.</li>
</ul>
<p>This tutorial's checker runs every EF snippet on EF Core 9 (.NET 9 SDK). The printed SQL is real SQL Server SQL from <code>ToQueryString()</code>/<code>GenerateCreateScript()</code>; alias and parameter names can differ slightly between EF Core versions.</p>`,
    hi: `<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, .NET 10 चाहिए)। आज के lesson की हर चीज़ EF Core 10 में वैसे ही काम करती है। Online कई "पुराने" answers नीचे के features से पहले के हैं — हर version ने यह <b>जोड़ा</b>:</p>
<ul>
<li><b>EF Core 5</b> — skip navigations वाला many-to-many (join entity की ज़रूरत नहीं), filtered <code>Include</code>, split queries (<code>AsSplitQuery</code>), <code>AsNoTrackingWithIdentityResolution</code>।</li>
<li><b>EF Core 6</b> — migration bundles (<code>dotnet ef migrations bundle</code>)।</li>
<li><b>EF Core 7</b> — <code>AutoTransactionBehavior</code> (एक statement वाला <code>SaveChanges</code> अब transaction नहीं खोलता); scaffolding customize करने के लिए T4 templates।</li>
<li><b>EF Core 8</b> — lazy loading no-tracking queries में भी काम करता है; CI में भूला हुआ migration पकड़ने के लिए <code>dotnet ef migrations has-pending-model-changes</code>।</li>
<li><b>EF Core 9</b> — <code>Migrate()</code> एक lock लेता है ताकि एक साथ चल रहे instances एक ही migration दो बार apply न करें; model में बिना migration वाले बदलाव हों तो migrations apply करते समय अब exception आता है; seed data के लिए नए <code>UseSeeding</code>/<code>UseAsyncSeeding</code>।</li>
<li><b>EF Core 10</b> — मुख्य बदलाव query वाली side पर हैं (जैसे <code>LeftJoin</code>/<code>RightJoin</code>, Day 4); EF Core 9/10 के और बदलाव Day 6 में।</li>
</ul>
<p>इस tutorial का checker हर EF snippet EF Core 9 (.NET 9 SDK) पर चलाता है। Print हुआ SQL <code>ToQueryString()</code>/<code>GenerateCreateScript()</code> से आया असली SQL Server SQL है; alias और parameter names EF Core versions के बीच थोड़े अलग हो सकते हैं।</p>`,
    hg: `<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, .NET 10 chahiye). Aaj ke lesson ki har cheez EF Core 10 mein waise hi kaam karti hai. Online kai "purane" answers neeche ke features se pehle ke hain — har version ne yeh <b>joda</b>:</p>
<ul>
<li><b>EF Core 5</b> — skip navigations wala many-to-many (join entity ki zaroorat nahi), filtered <code>Include</code>, split queries (<code>AsSplitQuery</code>), <code>AsNoTrackingWithIdentityResolution</code>.</li>
<li><b>EF Core 6</b> — migration bundles (<code>dotnet ef migrations bundle</code>).</li>
<li><b>EF Core 7</b> — <code>AutoTransactionBehavior</code> (ek statement wala <code>SaveChanges</code> ab transaction nahi kholta); scaffolding customize karne ke liye T4 templates.</li>
<li><b>EF Core 8</b> — lazy loading no-tracking queries mein bhi kaam karta hai; CI mein bhoola hua migration pakadne ke liye <code>dotnet ef migrations has-pending-model-changes</code>.</li>
<li><b>EF Core 9</b> — <code>Migrate()</code> ek lock leta hai taaki ek saath chal rahe instances ek hi migration do baar apply na karein; model mein bina migration wale badlaav hon to migrations apply karte samay ab exception aata hai; seed data ke liye naye <code>UseSeeding</code>/<code>UseAsyncSeeding</code>.</li>
<li><b>EF Core 10</b> — mukhya badlaav query wali side par hain (jaise <code>LeftJoin</code>/<code>RightJoin</code>, Day 4); EF Core 9/10 ke aur badlaav Day 6 mein.</li>
</ul>
<p>Is tutorial ka checker har EF snippet EF Core 9 (.NET 9 SDK) par chalata hai. Print hua SQL <code>ToQueryString()</code>/<code>GenerateCreateScript()</code> se aaya asli SQL Server SQL hai; alias aur parameter names EF Core versions ke beech thode alag ho sakte hain.</p>`
  }
};
