// Day 6 — EF Core Part 2. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 6,
  title: {
    en: "EF Core Part 2 — Queries, Raw SQL, Transactions, Concurrency",
    hi: "EF Core Part 2 — Queries, SQL, Transactions और Concurrency",
    hg: "EF Core Part 2 — Queries, SQL, Transactions aur Concurrency"
  },
  summary: {
    en: `<p>Today is <b>EF Core, Part 2</b> — the part interviewers use to separate "I have used EF" from "I can run EF in production". Your SQL Server strength is the secret weapon today: every topic below is about <b>which SQL EF sends, and how many times</b>.</p>
<ul>
<li><b>N+1 problem</b> — 1 query for the list + 1 query per row. Find it by <b>looking at the SQL</b> (<code>ToQueryString()</code>, <code>LogTo</code>); fix it with <code>Include</code> or a projection.</li>
<li><b>Projections</b> — <code>Select</code> into a DTO, so SQL reads only the columns you need (and nothing is tracked).</li>
<li><b>Raw SQL</b> — <code>FromSql($"...{value}")</code> sends the value as a <b>parameter</b>; building SQL strings by hand opens the door to <b>SQL injection</b>.</li>
<li><b>Transactions</b> — one <code>SaveChanges()</code> is already atomic; <code>BeginTransaction()</code> joins several steps into one all-or-nothing unit.</li>
<li><b>Concurrency tokens</b> — a <code>rowversion</code> column in the UPDATE's WHERE stops two users from silently overwriting each other.</li>
<li><b>ExecuteUpdate / ExecuteDelete</b> — one set-based UPDATE/DELETE statement, without loading entities.</li>
<li><b>Performance tips</b> — AsNoTracking, split queries, paging, indexes, compiled queries, DbContext pooling, and no client evaluation.</li>
</ul>
<p>One line to remember for the whole day: <b>count the queries, read the SQL, fetch only what you need.</b> (Day 5 covered DbContext, migrations, relationships, loading and tracking — today builds on it.)</p>`,
    hi: `<p>आज का topic है <b>EF Core, Part 2</b> — वो हिस्सा जिससे interviewers "मैंने EF use किया है" और "मैं EF को production में चला सकता हूँ" का फ़र्क़ पकड़ते हैं। आपकी SQL Server की ताक़त आज सबसे काम आएगी: नीचे का हर topic इसी के बारे में है कि <b>EF कौन सा SQL भेजता है, और कितनी बार</b>।</p>
<ul>
<li><b>N+1 problem</b> — list के लिए 1 query + हर row के लिए 1 query। इसे <b>SQL देखकर</b> पकड़ो (<code>ToQueryString()</code>, <code>LogTo</code>); <code>Include</code> या projection से ठीक करो।</li>
<li><b>Projections</b> — <code>Select</code> से DTO में डालो, ताकि SQL सिर्फ़ ज़रूरी columns पढ़े (और कुछ track न हो)।</li>
<li><b>Raw SQL</b> — <code>FromSql($"...{value}")</code> value को <b>parameter</b> बनाकर भेजता है; हाथ से SQL string जोड़ने पर <b>SQL injection</b> का दरवाज़ा खुलता है।</li>
<li><b>Transactions</b> — एक <code>SaveChanges()</code> पहले से atomic है; <code>BeginTransaction()</code> कई steps को एक all-or-nothing unit में जोड़ता है।</li>
<li><b>Concurrency tokens</b> — UPDATE के WHERE में <code>rowversion</code> column, दो users को चुपचाप एक-दूसरे का data overwrite करने से रोकता है।</li>
<li><b>ExecuteUpdate / ExecuteDelete</b> — entities load किए बिना एक set-based UPDATE/DELETE statement।</li>
<li><b>Performance tips</b> — AsNoTracking, split queries, paging, indexes, compiled queries, DbContext pooling, और client evaluation से बचना।</li>
</ul>
<p>पूरे दिन की एक line याद रखो: <b>queries गिनो, SQL पढ़ो, सिर्फ़ उतना लाओ जितना चाहिए।</b> (Day 5 में DbContext, migrations, relationships, loading और tracking हो चुके — आज उसी पर आगे बढ़ते हैं।)</p>`,
    hg: `<p>Aaj ka topic hai <b>EF Core, Part 2</b> — woh hissa jisse interviewers "maine EF use kiya hai" aur "main EF ko production mein chala sakta hoon" ka farq pakadte hain. Aapki SQL Server ki taakat aaj sabse kaam aayegi: neeche ka har topic isi ke baare mein hai ki <b>EF kaunsa SQL bhejta hai, aur kitni baar</b>.</p>
<ul>
<li><b>N+1 problem</b> — list ke liye 1 query + har row ke liye 1 query. Ise <b>SQL dekhkar</b> pakdo (<code>ToQueryString()</code>, <code>LogTo</code>); <code>Include</code> ya projection se theek karo.</li>
<li><b>Projections</b> — <code>Select</code> se DTO mein daalo, taaki SQL sirf zaroori columns padhe (aur kuch track na ho).</li>
<li><b>Raw SQL</b> — <code>FromSql($"...{value}")</code> value ko <b>parameter</b> banakar bhejta hai; haath se SQL string jodne par <b>SQL injection</b> ka darwaaza khulta hai.</li>
<li><b>Transactions</b> — ek <code>SaveChanges()</code> pehle se atomic hai; <code>BeginTransaction()</code> kai steps ko ek all-or-nothing unit mein jodta hai.</li>
<li><b>Concurrency tokens</b> — UPDATE ke WHERE mein <code>rowversion</code> column, do users ko chupchaap ek-doosre ka data overwrite karne se rokta hai.</li>
<li><b>ExecuteUpdate / ExecuteDelete</b> — entities load kiye bina ek set-based UPDATE/DELETE statement.</li>
<li><b>Performance tips</b> — AsNoTracking, split queries, paging, indexes, compiled queries, DbContext pooling, aur client evaluation se bachna.</li>
</ul>
<p>Poore din ki ek line yaad rakho: <b>queries gino, SQL padho, sirf utna lao jitna chahiye.</b> (Day 5 mein DbContext, migrations, relationships, loading aur tracking ho chuke — aaj usi par aage badhte hain.)</p>`
  },
  sections: [
    {
      id: "n-plus-one-basics",
      depth: "short",
      title: {
        en: "The N+1 problem — and how to see the SQL EF writes",
        hi: "N+1 problem — और EF जो SQL लिखता है उसे कैसे देखें",
        hg: "N+1 problem — aur EF jo SQL likhta hai use kaise dekhein"
      },
      body: {
        en: `<p><b>Analogy — the kirana shop helper:</b> Mummy gives a list of 10 items. A slow helper first walks to the shop to read the price board (1 trip), then walks back and forth <b>once per item</b> (10 trips). A smart helper carries the whole list and comes back in <b>one</b> trip. Same groceries, 11 trips vs 1. N+1 is the slow helper.</p>
<ul>
<li><b>N+1</b> = 1 query to load N parent rows, then <b>1 more query per parent</b> inside a loop. 100 customers → 101 round trips to SQL Server.</li>
<li>Common sources: lazy loading (Day 5), a query written inside a <code>foreach</code> (<code>db.Orders.Where(o =&gt; o.CustomerId == c.Id)</code>), or a repository/service method called once per item.</li>
<li>It hides in development (5 rows feel fast) and hurts in production (5,000 rows = 5,001 round trips, each with network and parsing cost).</li>
<li><b>See the SQL</b>: <code>query.ToQueryString()</code> shows one query's SQL without running it; <code>optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information)</code> prints every command EF sends. In production: SQL Server Query Store / Extended Events, or Application Insights dependency calls — a repeating statement is the N+1 signature.</li>
<li><b>Fix</b> = load in one go: <code>Include</code> (a JOIN), a <code>Select</code> projection (subqueries in the same SQL), or one <code>WHERE CustomerId IN (...)</code> query for all children, grouped in memory.</li>
</ul>
<p><b>When to act:</b> any loop over database rows that touches a navigation or runs a query — check the query count in the log. <b>When not to worry:</b> a loop over a small, fixed set (say 3 settings rows on an admin screen) — readable code can win there; measure before you optimize.</p>`,
        hi: `<p><b>Analogy — किराना दुकान वाला helper:</b> मम्मी 10 items की list देती हैं। धीमा helper पहले price board पढ़ने दुकान जाता है (1 चक्कर), फिर <b>हर item के लिए एक बार</b> आता-जाता है (10 चक्कर)। समझदार helper पूरी list लेकर जाता है और <b>एक</b> चक्कर में लौट आता है। सामान वही, 11 चक्कर बनाम 1। N+1 वही धीमा helper है।</p>
<ul>
<li><b>N+1</b> = N parent rows load करने के लिए 1 query, फिर loop के अंदर <b>हर parent के लिए 1 और query</b>। 100 customers → SQL Server तक 101 round trips।</li>
<li>आम वजहें: lazy loading (Day 5), <code>foreach</code> के अंदर लिखी query (<code>db.Orders.Where(o =&gt; o.CustomerId == c.Id)</code>), या हर item के लिए एक बार call होने वाला repository/service method।</li>
<li>Development में यह छुप जाता है (5 rows तेज़ लगती हैं) और production में चोट करता है (5,000 rows = 5,001 round trips, हर एक का network और parsing cost)।</li>
<li><b>SQL देखो</b>: <code>query.ToQueryString()</code> एक query का SQL बिना चलाए दिखाता है; <code>optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information)</code> EF का भेजा हर command print करता है। Production में: SQL Server Query Store / Extended Events, या Application Insights की dependency calls — बार-बार दोहराया गया statement ही N+1 की पहचान है।</li>
<li><b>Fix</b> = एक बार में load करो: <code>Include</code> (एक JOIN), <code>Select</code> projection (उसी SQL में subqueries), या सारे children के लिए एक <code>WHERE CustomerId IN (...)</code> query, फिर memory में group।</li>
</ul>
<p><b>कब action लें:</b> database rows पर चलने वाला कोई भी loop जो navigation छूता है या query चलाता है — log में query count देखो। <b>कब चिंता नहीं:</b> छोटे, fixed set पर loop (जैसे admin screen पर 3 settings rows) — वहाँ readable code जीत सकता है; optimize करने से पहले measure करो।</p>`,
        hg: `<p><b>Analogy — kirana dukaan wala helper:</b> Mummy 10 items ki list deti hain. Dheema helper pehle price board padhne dukaan jaata hai (1 chakkar), phir <b>har item ke liye ek baar</b> aata-jaata hai (10 chakkar). Samajhdaar helper poori list lekar jaata hai aur <b>ek</b> chakkar mein laut aata hai. Saamaan wahi, 11 chakkar vs 1. N+1 wahi dheema helper hai.</p>
<ul>
<li><b>N+1</b> = N parent rows load karne ke liye 1 query, phir loop ke andar <b>har parent ke liye 1 aur query</b>. 100 customers → SQL Server tak 101 round trips.</li>
<li>Aam wajahein: lazy loading (Day 5), <code>foreach</code> ke andar likhi query (<code>db.Orders.Where(o =&gt; o.CustomerId == c.Id)</code>), ya har item ke liye ek baar call hone wala repository/service method.</li>
<li>Development mein yeh chhup jaata hai (5 rows tez lagti hain) aur production mein chot karta hai (5,000 rows = 5,001 round trips, har ek ka network aur parsing cost).</li>
<li><b>SQL dekho</b>: <code>query.ToQueryString()</code> ek query ka SQL bina chalaaye dikhata hai; <code>optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information)</code> EF ka bheja har command print karta hai. Production mein: SQL Server Query Store / Extended Events, ya Application Insights ki dependency calls — baar-baar dohraaya gaya statement hi N+1 ki pehchaan hai.</li>
<li><b>Fix</b> = ek baar mein load karo: <code>Include</code> (ek JOIN), <code>Select</code> projection (usi SQL mein subqueries), ya saare children ke liye ek <code>WHERE CustomerId IN (...)</code> query, phir memory mein group.</li>
</ul>
<p><b>Kab action lein:</b> database rows par chalne wala koi bhi loop jo navigation chhoota hai ya query chalata hai — log mein query count dekho. <b>Kab chinta nahi:</b> chhote, fixed set par loop (jaise admin screen par 3 settings rows) — wahan readable code jeet sakta hai; optimize karne se pehle measure karo.</p>`
      }
    },
    {
      id: "projection-basics",
      depth: "short",
      title: {
        en: "Projections — Select only the columns the screen needs",
        hi: "Projections — Select से सिर्फ़ वही columns जो screen को चाहिए",
        hg: "Projections — Select se sirf wahi columns jo screen ko chahiye"
      },
      body: {
        en: `<p><b>Analogy — the railway reservation chart:</b> the TTE's chart shows name, age, coach and berth. It does not carry every passenger's full IRCTC profile, address and payment history. Lighter paper, faster check. A projection is that chart: only the fields the job needs.</p>
<ul>
<li><b>Projection</b> = <code>Select</code> into a DTO or anonymous type: <code>db.Customers.Select(c =&gt; new CustomerSummary(c.Name, c.Orders.Count))</code>. The SQL <code>SELECT</code> lists <b>only those columns</b>.</li>
<li>Navigations used inside <code>Select</code> are translated for you — <code>c.Orders.Count</code> becomes a <code>COUNT(*)</code> subquery, <code>Sum</code> a <code>SUM</code>. No <code>Include</code> needed, and still <b>one</b> SQL statement.</li>
<li>DTOs are <b>not tracked</b> — no change-tracker snapshot, so you do not need <code>AsNoTracking()</code>. (An entity you put <i>inside</i> the projection is still tracked.)</li>
<li>Safer APIs: a DTO cannot leak columns like <code>PasswordHash</code>, has no JSON cycles, and cannot be over-posted.</li>
</ul>
<p><b>When to use:</b> read endpoints — lists, grids, dropdowns, reports, dashboards. <b>When not:</b> when you will change and save the data — load the tracked entity instead (Day 5); a DTO has no link back to the row, so <code>SaveChanges()</code> will not see edits to it.</p>`,
        hi: `<p><b>Analogy — railway reservation chart:</b> TTE के chart में नाम, उम्र, coach और berth होते हैं। उसमें हर यात्री की पूरी IRCTC profile, पता और payment history नहीं होती। हल्का कागज़, तेज़ check। Projection वही chart है: सिर्फ़ वो fields जो काम के लिए चाहिए।</p>
<ul>
<li><b>Projection</b> = DTO या anonymous type में <code>Select</code>: <code>db.Customers.Select(c =&gt; new CustomerSummary(c.Name, c.Orders.Count))</code>। SQL का <code>SELECT</code> <b>सिर्फ़ वही columns</b> लाता है।</li>
<li><code>Select</code> के अंदर use हुए navigations अपने-आप translate होते हैं — <code>c.Orders.Count</code> एक <code>COUNT(*)</code> subquery बनता है, <code>Sum</code> एक <code>SUM</code>। <code>Include</code> की ज़रूरत नहीं, और फिर भी <b>एक</b> SQL statement।</li>
<li>DTOs <b>track नहीं होते</b> — change-tracker का कोई snapshot नहीं, इसलिए <code>AsNoTracking()</code> की ज़रूरत नहीं। (Projection के <i>अंदर</i> रखी entity फिर भी track होती है।)</li>
<li>Safer APIs: DTO <code>PasswordHash</code> जैसे columns leak नहीं कर सकता, उसमें JSON cycles नहीं होते, और उसे over-post नहीं किया जा सकता।</li>
</ul>
<p><b>कब use करें:</b> read endpoints — lists, grids, dropdowns, reports, dashboards। <b>कब नहीं:</b> जब data बदलकर save करना हो — तब tracked entity load करो (Day 5); DTO का row से कोई link नहीं होता, इसलिए उसमें किए बदलाव <code>SaveChanges()</code> को नहीं दिखते।</p>`,
        hg: `<p><b>Analogy — railway reservation chart:</b> TTE ke chart mein naam, umar, coach aur berth hote hain. Usmein har yaatri ki poori IRCTC profile, pata aur payment history nahi hoti. Halka kaagaz, tez check. Projection wahi chart hai: sirf woh fields jo kaam ke liye chahiye.</p>
<ul>
<li><b>Projection</b> = DTO ya anonymous type mein <code>Select</code>: <code>db.Customers.Select(c =&gt; new CustomerSummary(c.Name, c.Orders.Count))</code>. SQL ka <code>SELECT</code> <b>sirf wahi columns</b> laata hai.</li>
<li><code>Select</code> ke andar use hue navigations apne-aap translate hote hain — <code>c.Orders.Count</code> ek <code>COUNT(*)</code> subquery banta hai, <code>Sum</code> ek <code>SUM</code>. <code>Include</code> ki zaroorat nahi, aur phir bhi <b>ek</b> SQL statement.</li>
<li>DTOs <b>track nahi hote</b> — change-tracker ka koi snapshot nahi, isliye <code>AsNoTracking()</code> ki zaroorat nahi. (Projection ke <i>andar</i> rakhi entity phir bhi track hoti hai.)</li>
<li>Safer APIs: DTO <code>PasswordHash</code> jaise columns leak nahi kar sakta, usmein JSON cycles nahi hote, aur use over-post nahi kiya ja sakta.</li>
</ul>
<p><b>Kab use karein:</b> read endpoints — lists, grids, dropdowns, reports, dashboards. <b>Kab nahi:</b> jab data badalkar save karna ho — tab tracked entity load karo (Day 5); DTO ka row se koi link nahi hota, isliye usmein kiye badlaav <code>SaveChanges()</code> ko nahi dikhte.</p>`
      }
    },
    {
      id: "raw-sql-basics",
      depth: "short",
      title: {
        en: "Raw SQL — FromSql, parameters and SQL injection",
        hi: "Raw SQL — FromSql, parameters और SQL injection",
        hg: "Raw SQL — FromSql, parameters aur SQL injection"
      },
      body: {
        en: `<p><b>Analogy — a printed bank form vs a blank sheet:</b> on a printed deposit slip, whatever you write in the "Amount" box is read only as an amount. On a blank sheet, a clever customer can write "deposit 100 <i>and also transfer 10,000 to me</i>" — and a careless clerk follows it. Parameters are the printed boxes; string concatenation is the blank sheet.</p>
<ul>
<li><code>db.Customers.FromSql($"SELECT * FROM Customers WHERE City = {city}")</code> (EF Core 7+; same as the older <code>FromSqlInterpolated</code>) looks like string interpolation, but EF turns each <code>{value}</code> into a <b>DbParameter</b> (<code>@p0</code>). Safe.</li>
<li><code>FromSqlRaw(sql, args)</code> takes a plain string. It is safe only when values go through <code>{0}</code> placeholders or <code>SqlParameter</code> objects — <b>never</b> concatenate user input into it. EF's analyzer warns (<b>EF1002</b>) when you pass an interpolated string to it.</li>
<li>You can add LINQ on top: <code>FromSql(...).Where(...).OrderBy(...)</code> — EF wraps your SQL as a subquery. Stored procedures cannot be wrapped: if you want more LINQ after one, put <code>AsEnumerable()</code> first so that LINQ runs in memory.</li>
<li>For non-entity results: <code>db.Database.SqlQuery&lt;T&gt;($"...")</code> (scalars since EF Core 7, unmapped DTO types since EF Core 8). For commands: <code>db.Database.ExecuteSql($"UPDATE ...")</code> returns rows affected.</li>
</ul>
<p><b>When to use:</b> SQL that LINQ cannot express well (window functions, query hints, tuned reports), existing stored procedures, and hot queries you have hand-tuned. <b>When not:</b> plain CRUD that LINQ handles — raw SQL loses compile-time checking and rename safety, and ties the code to one database engine.</p>`,
        hi: `<p><b>Analogy — छपा हुआ bank form बनाम कोरा कागज़:</b> छपी deposit slip पर "Amount" वाले box में जो भी लिखो, वो सिर्फ़ amount की तरह पढ़ा जाता है। कोरे कागज़ पर एक चालाक customer लिख सकता है "100 जमा करो <i>और 10,000 मेरे खाते में भेज दो</i>" — और लापरवाह clerk उसे मान लेता है। Parameters छपे हुए boxes हैं; string जोड़ना कोरा कागज़ है।</p>
<ul>
<li><code>db.Customers.FromSql($"SELECT * FROM Customers WHERE City = {city}")</code> (EF Core 7+; पुराने <code>FromSqlInterpolated</code> जैसा ही) string interpolation जैसा दिखता है, पर EF हर <code>{value}</code> को एक <b>DbParameter</b> (<code>@p0</code>) बना देता है। Safe।</li>
<li><code>FromSqlRaw(sql, args)</code> एक plain string लेता है। यह तभी safe है जब values <code>{0}</code> placeholders या <code>SqlParameter</code> objects से जाएँ — user input को इसमें <b>कभी</b> मत जोड़ो। इसमें interpolated string दो तो EF का analyzer warning (<b>EF1002</b>) देता है।</li>
<li>ऊपर LINQ जोड़ सकते हो: <code>FromSql(...).Where(...).OrderBy(...)</code> — EF आपके SQL को subquery बनाकर लपेट देता है। Stored procedures को लपेटा नहीं जा सकता: उसके बाद और LINQ चाहिए तो पहले <code>AsEnumerable()</code> लगाओ, ताकि वो LINQ memory में चले।</li>
<li>Non-entity results के लिए: <code>db.Database.SqlQuery&lt;T&gt;($"...")</code> (scalars EF Core 7 से, unmapped DTO types EF Core 8 से)। Commands के लिए: <code>db.Database.ExecuteSql($"UPDATE ...")</code> affected rows की गिनती लौटाता है।</li>
</ul>
<p><b>कब use करें:</b> ऐसा SQL जो LINQ से ठीक से नहीं बनता (window functions, query hints, tuned reports), पहले से बने stored procedures, और hot queries जिन्हें आपने हाथ से tune किया है। <b>कब नहीं:</b> सीधा CRUD जो LINQ संभाल लेता है — raw SQL में compile-time checking और rename safety खो जाती है, और code एक database engine से बँध जाता है।</p>`,
        hg: `<p><b>Analogy — chhapa hua bank form vs kora kaagaz:</b> chhapi deposit slip par "Amount" wale box mein jo bhi likho, woh sirf amount ki tarah padha jaata hai. Kore kaagaz par ek chaalaak customer likh sakta hai "100 jama karo <i>aur 10,000 mere khaate mein bhej do</i>" — aur laaparwaah clerk use maan leta hai. Parameters chhape hue boxes hain; string jodna kora kaagaz hai.</p>
<ul>
<li><code>db.Customers.FromSql($"SELECT * FROM Customers WHERE City = {city}")</code> (EF Core 7+; purane <code>FromSqlInterpolated</code> jaisa hi) string interpolation jaisa dikhta hai, par EF har <code>{value}</code> ko ek <b>DbParameter</b> (<code>@p0</code>) bana deta hai. Safe.</li>
<li><code>FromSqlRaw(sql, args)</code> ek plain string leta hai. Yeh tabhi safe hai jab values <code>{0}</code> placeholders ya <code>SqlParameter</code> objects se jaayein — user input ko ismein <b>kabhi</b> mat jodo. Ismein interpolated string do to EF ka analyzer warning (<b>EF1002</b>) deta hai.</li>
<li>Upar LINQ jod sakte ho: <code>FromSql(...).Where(...).OrderBy(...)</code> — EF aapke SQL ko subquery banakar lapet deta hai. Stored procedures ko lapeta nahi ja sakta: uske baad aur LINQ chahiye to pehle <code>AsEnumerable()</code> lagao, taaki woh LINQ memory mein chale.</li>
<li>Non-entity results ke liye: <code>db.Database.SqlQuery&lt;T&gt;($"...")</code> (scalars EF Core 7 se, unmapped DTO types EF Core 8 se). Commands ke liye: <code>db.Database.ExecuteSql($"UPDATE ...")</code> affected rows ki ginti lautaata hai.</li>
</ul>
<p><b>Kab use karein:</b> aisa SQL jo LINQ se theek se nahi banta (window functions, query hints, tuned reports), pehle se bane stored procedures, aur hot queries jinhe aapne haath se tune kiya hai. <b>Kab nahi:</b> seedha CRUD jo LINQ sambhaal leta hai — raw SQL mein compile-time checking aur rename safety kho jaati hai, aur code ek database engine se bandh jaata hai.</p>`
      }
    },
    {
      id: "transactions-basics",
      depth: "short",
      title: {
        en: "Transactions — SaveChanges is already atomic; BeginTransaction joins several steps",
        hi: "Transactions — SaveChanges पहले से atomic है; BeginTransaction कई steps को जोड़ता है",
        hg: "Transactions — SaveChanges pehle se atomic hai; BeginTransaction kai steps ko jodta hai"
      },
      body: {
        en: `<p><b>Analogy — a UPI transfer:</b> ₹500 leaves your account and reaches your friend's account. Either <b>both</b> happen or <b>neither</b> — never "debited but not credited". A transaction is that promise for your database steps.</p>
<ul>
<li>One <code>SaveChanges()</code> already runs all its INSERT/UPDATE/DELETE statements in <b>one transaction</b> (Day 5). For most requests, that is all you need.</li>
<li>When <b>several</b> steps must succeed or fail together — two <code>SaveChanges()</code> calls, or <code>SaveChanges()</code> plus <code>ExecuteUpdate</code>/raw SQL — use <code>using var tx = db.Database.BeginTransaction();</code> … <code>tx.Commit();</code>. If you dispose it without <code>Commit()</code>, everything rolls back.</li>
<li>Cloud databases drop connections for a moment. A <b>retrying execution strategy</b> (<code>EnableRetryOnFailure()</code> on SQL Server) retries such failures. With it on, wrap your whole transaction in <code>strategy.Execute(...)</code> so it is retried as <b>one unit</b>.</li>
</ul>
<p>Savepoints and <code>TransactionScope</code> cautions are in the detailed section "Transactions in code".</p>
<p><b>When to use:</b> money movement, "order + stock + payment record" together, multi-step imports. <b>When not:</b> do not wrap a single <code>SaveChanges()</code> in an extra transaction "for safety", and do not keep a transaction open while calling an external API or waiting for a user — the locks stay held and other requests queue behind you.</p>`,
        hi: `<p><b>Analogy — UPI transfer:</b> ₹500 आपके खाते से निकलकर दोस्त के खाते में पहुँचते हैं। या तो <b>दोनों</b> होते हैं या <b>कुछ नहीं</b> — "पैसे कट गए पर पहुँचे नहीं" कभी नहीं। Transaction आपके database steps के लिए यही वादा है।</p>
<ul>
<li>एक <code>SaveChanges()</code> अपने सारे INSERT/UPDATE/DELETE statements पहले से ही <b>एक transaction</b> में चलाता है (Day 5)। ज़्यादातर requests के लिए इतना ही काफ़ी है।</li>
<li>जब <b>कई</b> steps को साथ में succeed या fail होना हो — दो <code>SaveChanges()</code> calls, या <code>SaveChanges()</code> के साथ <code>ExecuteUpdate</code>/raw SQL — तो <code>using var tx = db.Database.BeginTransaction();</code> … <code>tx.Commit();</code> use करो। <code>Commit()</code> के बिना dispose हुआ तो सब rollback हो जाता है।</li>
<li>Cloud databases का connection पल भर के लिए टूट जाता है। <b>Retrying execution strategy</b> (SQL Server पर <code>EnableRetryOnFailure()</code>) ऐसी failures को retry करती है। इसके चालू होने पर पूरे transaction को <code>strategy.Execute(...)</code> में लपेटो, ताकि वो <b>एक unit</b> की तरह retry हो।</li>
</ul>
<p>Savepoints और <code>TransactionScope</code> की सावधानियाँ detailed section "Code में transactions" में हैं।</p>
<p><b>कब use करें:</b> पैसों का लेन-देन, "order + stock + payment record" एक साथ, multi-step imports। <b>कब नहीं:</b> एक अकेले <code>SaveChanges()</code> को "safety के लिए" extra transaction में मत लपेटो, और external API call करते समय या user का इंतज़ार करते समय transaction खुला मत रखो — locks पकड़े रहते हैं और बाकी requests आपके पीछे लाइन में लगती हैं।</p>`,
        hg: `<p><b>Analogy — UPI transfer:</b> ₹500 aapke khaate se nikalkar dost ke khaate mein pahunchte hain. Ya to <b>dono</b> hote hain ya <b>kuch nahi</b> — "paise kat gaye par pahunche nahi" kabhi nahi. Transaction aapke database steps ke liye yahi waada hai.</p>
<ul>
<li>Ek <code>SaveChanges()</code> apne saare INSERT/UPDATE/DELETE statements pehle se hi <b>ek transaction</b> mein chalata hai (Day 5). Zyaadatar requests ke liye itna hi kaafi hai.</li>
<li>Jab <b>kai</b> steps ko saath mein succeed ya fail hona ho — do <code>SaveChanges()</code> calls, ya <code>SaveChanges()</code> ke saath <code>ExecuteUpdate</code>/raw SQL — to <code>using var tx = db.Database.BeginTransaction();</code> … <code>tx.Commit();</code> use karo. <code>Commit()</code> ke bina dispose hua to sab rollback ho jaata hai.</li>
<li>Cloud databases ka connection pal bhar ke liye toot jaata hai. <b>Retrying execution strategy</b> (SQL Server par <code>EnableRetryOnFailure()</code>) aisi failures ko retry karti hai. Iske chaalu hone par poore transaction ko <code>strategy.Execute(...)</code> mein lapeto, taaki woh <b>ek unit</b> ki tarah retry ho.</li>
</ul>
<p>Savepoints aur <code>TransactionScope</code> ki saavdhaaniyaan detailed section "Code mein transactions" mein hain.</p>
<p><b>Kab use karein:</b> paison ka len-den, "order + stock + payment record" ek saath, multi-step imports. <b>Kab nahi:</b> ek akele <code>SaveChanges()</code> ko "safety ke liye" extra transaction mein mat lapeto, aur external API call karte samay ya user ka intezaar karte samay transaction khula mat rakho — locks pakde rehte hain aur baaki requests aapke peeche line mein lagti hain.</p>`
      }
    },
    {
      id: "concurrency-basics",
      depth: "short",
      title: {
        en: "Concurrency tokens — stopping silent lost updates",
        hi: "Concurrency tokens — चुपचाप खोने वाले updates को रोकना",
        hg: "Concurrency tokens — chupchaap khone wale updates ko rokna"
      },
      body: {
        en: `<p><b>Analogy — two booking clerks and the last berth:</b> two railway clerks both see "1 berth left" and both start a booking. Without a check, both sell it. With a check, each clerk notes the berth's <b>version stamp</b> when he looks; the booking goes through only if the stamp is still the same. The second clerk is told "this changed — look again".</p>
<ul>
<li><b>Lost update</b>: users A and B load the same row. A saves. B saves a moment later with old data — A's change disappears <b>with no error</b>. EF's default is "last write wins".</li>
<li><b>Optimistic concurrency</b>: mark a <b>concurrency token</b>. EF adds its original value to the UPDATE/DELETE: <code>WHERE [Id] = @p1 AND [Version] = @p2</code>. If 0 rows change, EF throws <code>DbUpdateConcurrencyException</code>.</li>
<li>On SQL Server, use <code>[Timestamp] public byte[] Version { get; set; }</code> → a <code>rowversion</code> column that the database changes on <b>every</b> update. Elsewhere, mark a column with <code>[ConcurrencyCheck]</code> or <code>.IsConcurrencyToken()</code>.</li>
<li>Handling the exception = a business decision: reload and show the user (<b>store wins</b>, also called "database wins"), overwrite (<b>client wins</b>), or merge field by field — then save again.</li>
<li><b>Pessimistic locking</b> (for example <code>UPDLOCK</code> via raw SQL inside a transaction) blocks other users while you work. Web apps usually prefer optimistic.</li>
</ul>
<p><b>When to use:</b> rows several people or processes edit — stock, bookings, account settings, admin forms. <b>When not:</b> insert-only data (logs, audit rows), or simple counters, where one atomic SQL statement is better: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Stock, p =&gt; p.Stock - 1))</code> with <code>WHERE Stock &gt; 0</code>.</p>`,
        hi: `<p><b>Analogy — दो booking clerks और आख़िरी berth:</b> दो railway clerks दोनों को "1 berth बची है" दिखती है और दोनों booking शुरू कर देते हैं। बिना check के दोनों उसे बेच देते हैं। Check के साथ, हर clerk देखते समय berth का <b>version stamp</b> नोट करता है; booking तभी होती है जब stamp अब भी वही हो। दूसरे clerk को बताया जाता है "यह बदल गया — फिर से देखो"।</p>
<ul>
<li><b>Lost update</b>: users A और B एक ही row load करते हैं। A save करता है। B पल भर बाद पुराने data के साथ save करता है — A का बदलाव <b>बिना किसी error के</b> गायब। EF का default है "last write wins"।</li>
<li><b>Optimistic concurrency</b>: एक <b>concurrency token</b> mark करो। EF उसकी original value UPDATE/DELETE में जोड़ता है: <code>WHERE [Id] = @p1 AND [Version] = @p2</code>। अगर 0 rows बदलीं, तो EF <code>DbUpdateConcurrencyException</code> throw करता है।</li>
<li>SQL Server पर <code>[Timestamp] public byte[] Version { get; set; }</code> use करो → एक <code>rowversion</code> column जिसे database <b>हर</b> update पर बदलता है। दूसरी जगह किसी column को <code>[ConcurrencyCheck]</code> या <code>.IsConcurrencyToken()</code> से mark करो।</li>
<li>Exception संभालना = business का फ़ैसला: reload करके user को दिखाओ (<b>store wins</b>, जिसे "database wins" भी कहते हैं), overwrite करो (<b>client wins</b>), या field-by-field merge करो — फिर दोबारा save।</li>
<li><b>Pessimistic locking</b> (जैसे transaction के अंदर raw SQL से <code>UPDLOCK</code>) आपके काम करते समय दूसरे users को रोक देता है। Web apps आमतौर पर optimistic पसंद करते हैं।</li>
</ul>
<p><b>कब use करें:</b> ऐसी rows जिन्हें कई लोग या processes edit करते हैं — stock, bookings, account settings, admin forms। <b>कब नहीं:</b> सिर्फ़ insert होने वाला data (logs, audit rows), या simple counters, जहाँ एक atomic SQL statement बेहतर है: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Stock, p =&gt; p.Stock - 1))</code> के साथ <code>WHERE Stock &gt; 0</code>।</p>`,
        hg: `<p><b>Analogy — do booking clerks aur aakhri berth:</b> do railway clerks dono ko "1 berth bachi hai" dikhti hai aur dono booking shuru kar dete hain. Bina check ke dono use bech dete hain. Check ke saath, har clerk dekhte samay berth ka <b>version stamp</b> note karta hai; booking tabhi hoti hai jab stamp ab bhi wahi ho. Doosre clerk ko bataaya jaata hai "yeh badal gaya — phir se dekho".</p>
<ul>
<li><b>Lost update</b>: users A aur B ek hi row load karte hain. A save karta hai. B pal bhar baad purane data ke saath save karta hai — A ka badlaav <b>bina kisi error ke</b> gaayab. EF ka default hai "last write wins".</li>
<li><b>Optimistic concurrency</b>: ek <b>concurrency token</b> mark karo. EF uski original value UPDATE/DELETE mein jodta hai: <code>WHERE [Id] = @p1 AND [Version] = @p2</code>. Agar 0 rows badlin, to EF <code>DbUpdateConcurrencyException</code> throw karta hai.</li>
<li>SQL Server par <code>[Timestamp] public byte[] Version { get; set; }</code> use karo → ek <code>rowversion</code> column jise database <b>har</b> update par badalta hai. Doosri jagah kisi column ko <code>[ConcurrencyCheck]</code> ya <code>.IsConcurrencyToken()</code> se mark karo.</li>
<li>Exception sambhaalna = business ka faisla: reload karke user ko dikhao (<b>store wins</b>, jise "database wins" bhi kehte hain), overwrite karo (<b>client wins</b>), ya field-by-field merge karo — phir dobara save.</li>
<li><b>Pessimistic locking</b> (jaise transaction ke andar raw SQL se <code>UPDLOCK</code>) aapke kaam karte samay doosre users ko rok deta hai. Web apps aamtaur par optimistic pasand karte hain.</li>
</ul>
<p><b>Kab use karein:</b> aisi rows jinhe kai log ya processes edit karte hain — stock, bookings, account settings, admin forms. <b>Kab nahi:</b> sirf insert hone wala data (logs, audit rows), ya simple counters, jahan ek atomic SQL statement behtar hai: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Stock, p =&gt; p.Stock - 1))</code> ke saath <code>WHERE Stock &gt; 0</code>.</p>`
      }
    },
    {
      id: "bulk-basics",
      depth: "short",
      title: {
        en: "ExecuteUpdate / ExecuteDelete — change many rows with one SQL statement",
        hi: "ExecuteUpdate / ExecuteDelete — एक SQL statement से कई rows बदलना",
        hg: "ExecuteUpdate / ExecuteDelete — ek SQL statement se kai rows badalna"
      },
      body: {
        en: `<p><b>Analogy — the school loudspeaker:</b> the principal wants all Class 10 students in the hall. The slow way: a peon visits every classroom and tells each student one by one. The fast way: <b>one announcement</b> on the loudspeaker. <code>ExecuteUpdate</code>/<code>ExecuteDelete</code> are the loudspeaker.</p>
<ul>
<li><code>db.Products.Where(p =&gt; p.Stock == 0).ExecuteDelete()</code> → one <code>DELETE ... WHERE</code>. <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m))</code> → one <code>UPDATE ... SET ... WHERE</code>. Both arrived in <b>EF Core 7</b>.</li>
<li>They run <b>immediately</b> — no <code>SaveChanges()</code> — and return the number of rows affected. No entities are loaded into memory.</li>
<li>They <b>bypass the change tracker</b>: entities already tracked in memory are <b>not</b> updated (they go stale), and SaveChanges-based logic (<code>SavingChanges</code> events, SaveChanges interceptors, audit columns set in <code>SaveChanges</code>) does not run. Command interceptors still see the SQL.</li>
<li>Global query filters still apply. There is no automatic concurrency check, and cascades happen only through the database's own FK rules.</li>
</ul>
<p><b>When to use:</b> bulk price changes, archive/cleanup jobs, soft-deleting many rows, counters. <b>When not:</b> when every row needs C# business rules or domain events, or when you need the changed entities in memory right after — then load, change and call <code>SaveChanges()</code>.</p>`,
        hi: `<p><b>Analogy — school का loudspeaker:</b> principal चाहते हैं कि Class 10 के सारे students hall में आएँ। धीमा तरीका: peon हर classroom में जाकर एक-एक student को बताए। तेज़ तरीका: loudspeaker पर <b>एक announcement</b>। <code>ExecuteUpdate</code>/<code>ExecuteDelete</code> वही loudspeaker हैं।</p>
<ul>
<li><code>db.Products.Where(p =&gt; p.Stock == 0).ExecuteDelete()</code> → एक <code>DELETE ... WHERE</code>। <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m))</code> → एक <code>UPDATE ... SET ... WHERE</code>। दोनों <b>EF Core 7</b> में आए।</li>
<li>ये <b>तुरंत</b> चलते हैं — <code>SaveChanges()</code> की ज़रूरत नहीं — और affected rows की गिनती लौटाते हैं। कोई entity memory में load नहीं होती।</li>
<li>ये <b>change tracker को bypass</b> करते हैं: memory में पहले से tracked entities update <b>नहीं</b> होतीं (पुरानी पड़ जाती हैं), और SaveChanges पर टिका logic (<code>SavingChanges</code> events, SaveChanges interceptors, <code>SaveChanges</code> में set होने वाले audit columns) नहीं चलता। Command interceptors को SQL फिर भी दिखता है।</li>
<li>Global query filters फिर भी लागू होते हैं। कोई automatic concurrency check नहीं होता, और cascades सिर्फ़ database के अपने FK rules से होते हैं।</li>
</ul>
<p><b>कब use करें:</b> bulk price changes, archive/cleanup jobs, कई rows को soft-delete करना, counters। <b>कब नहीं:</b> जब हर row पर C# business rules या domain events चलने हों, या बदली हुई entities तुरंत memory में चाहिए हों — तब load करो, बदलो और <code>SaveChanges()</code> call करो।</p>`,
        hg: `<p><b>Analogy — school ka loudspeaker:</b> principal chahte hain ki Class 10 ke saare students hall mein aayein. Dheema tareeka: peon har classroom mein jaakar ek-ek student ko bataaye. Tez tareeka: loudspeaker par <b>ek announcement</b>. <code>ExecuteUpdate</code>/<code>ExecuteDelete</code> wahi loudspeaker hain.</p>
<ul>
<li><code>db.Products.Where(p =&gt; p.Stock == 0).ExecuteDelete()</code> → ek <code>DELETE ... WHERE</code>. <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m))</code> → ek <code>UPDATE ... SET ... WHERE</code>. Dono <b>EF Core 7</b> mein aaye.</li>
<li>Yeh <b>turant</b> chalte hain — <code>SaveChanges()</code> ki zaroorat nahi — aur affected rows ki ginti lautaate hain. Koi entity memory mein load nahi hoti.</li>
<li>Yeh <b>change tracker ko bypass</b> karte hain: memory mein pehle se tracked entities update <b>nahi</b> hotin (purani pad jaati hain), aur SaveChanges par tika logic (<code>SavingChanges</code> events, SaveChanges interceptors, <code>SaveChanges</code> mein set hone wale audit columns) nahi chalta. Command interceptors ko SQL phir bhi dikhta hai.</li>
<li>Global query filters phir bhi laagu hote hain. Koi automatic concurrency check nahi hota, aur cascades sirf database ke apne FK rules se hote hain.</li>
</ul>
<p><b>Kab use karein:</b> bulk price changes, archive/cleanup jobs, kai rows ko soft-delete karna, counters. <b>Kab nahi:</b> jab har row par C# business rules ya domain events chalne hon, ya badli hui entities turant memory mein chahiye hon — tab load karo, badlo aur <code>SaveChanges()</code> call karo.</p>`
      }
    },
    {
      id: "n-plus-one-in-code",
      depth: "detailed",
      title: {
        en: "N+1 in code: count the queries, then fix with Include, a projection, or one batch query — and the split-query trade-off",
        hi: "Code में N+1: queries गिनो, फिर Include, projection या एक batch query से fix करो — और split-query का trade-off",
        hg: "Code mein N+1: queries gino, phir Include, projection ya ek batch query se fix karo — aur split-query ka trade-off"
      },
      body: {
        en: `<p><b>Analogy — the electricity meter reader:</b> a lazy agency sends one meter reader to the society office for the flat list, then one separate visit per flat. A good agency sends one reader with the full list who walks the building once. You can only tell which agency you hired by <b>counting the visits</b> — so count the queries.</p>
<ul>
<li><b>Measure first</b>: a <code>DbCommandInterceptor</code> or <code>LogTo(..., new[] { RelationalEventId.CommandExecuted })</code> with a counter tells you how many SQL commands a piece of code sends. Some teams assert this number in integration tests, so an N+1 cannot slip back in.</li>
<li><b>Fix 1 — <code>Include</code></b>: one SQL with a <code>LEFT JOIN</code> (Day 5). Good when you need the full child entities.</li>
<li><b>Fix 2 — projection</b>: <code>Select(c =&gt; new { c.Name, Total = c.Orders.Sum(o =&gt; o.Total) })</code> — the sum is done <b>by SQL Server</b> in a subquery; only the totals come back.</li>
<li><b>Fix 3 — one batch query</b>: collect the parent ids, run <b>one</b> <code>Where(o =&gt; ids.Contains(o.CustomerId))</code>, then group in memory. Two queries in total, whatever N is. Useful when the children come from another service or repository.</li>
<li><b>Cartesian explosion</b>: two collection Includes in one query multiply the rows (a customer with 10 orders and 10 addresses = 100 joined rows). <code>AsSplitQuery()</code> sends one SQL per collection instead. EF logs a warning when you load several collections without choosing a mode. You can set the default with <code>UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery)</code> and opt back in per query with <code>AsSingleQuery()</code>.</li>
<li><b>Split-query trade-off</b>: fewer duplicated rows, but more round trips. Without a transaction (Serializable or snapshot), the split queries can also see data that changed in between. Paging with <code>Skip</code>/<code>Take</code> needs a unique sort order so each split query sees the same rows — before EF Core 10, EF could even drop the key from the ordering inside the child query; EF Core 10 fixes that, but a unique order is still your job.</li>
<li><code>TagWith("Orders page")</code> adds a SQL comment to the query, so you can find it quickly in Query Store, Profiler or the logs.</li>
</ul>
<p><b>When to use:</b> projection for read screens, <code>Include</code> when you need whole entities, a batch query across service boundaries, <code>AsSplitQuery()</code> when two or more collections are large. <b>When not:</b> do not switch every query to split mode by habit — for small one-to-many results a single JOIN is usually faster; and do not "fix" N+1 by caching blindly — first remove the extra round trips.</p>`,
        hi: `<p><b>Analogy — बिजली का meter reader:</b> एक आलसी agency flat list लेने के लिए society office में एक meter reader भेजती है, फिर हर flat के लिए अलग visit। अच्छी agency पूरी list के साथ एक reader भेजती है जो building में एक बार घूमता है। कौन सी agency रखी है, यह आप <b>visits गिनकर</b> ही जान सकते हो — इसलिए queries गिनो।</p>
<ul>
<li><b>पहले measure करो</b>: <code>DbCommandInterceptor</code> या counter के साथ <code>LogTo(..., new[] { RelationalEventId.CommandExecuted })</code> बताता है कि code का एक टुकड़ा कितने SQL commands भेजता है। कुछ teams integration tests में इस संख्या को assert करती हैं, ताकि N+1 चुपके से वापस न आ जाए।</li>
<li><b>Fix 1 — <code>Include</code></b>: <code>LEFT JOIN</code> वाला एक SQL (Day 5)। तब अच्छा जब पूरी child entities चाहिए।</li>
<li><b>Fix 2 — projection</b>: <code>Select(c =&gt; new { c.Name, Total = c.Orders.Sum(o =&gt; o.Total) })</code> — sum <b>SQL Server</b> एक subquery में करता है; वापस सिर्फ़ totals आते हैं।</li>
<li><b>Fix 3 — एक batch query</b>: parent ids इकट्ठा करो, <b>एक</b> <code>Where(o =&gt; ids.Contains(o.CustomerId))</code> चलाओ, फिर memory में group करो। N कितना भी हो, कुल दो queries। तब काम का जब children किसी दूसरी service या repository से आते हैं।</li>
<li><b>Cartesian explosion</b>: एक query में दो collection Includes rows को गुणा कर देते हैं (10 orders और 10 addresses वाला customer = 100 joined rows)। <code>AsSplitQuery()</code> इसकी जगह हर collection के लिए एक SQL भेजता है। Mode चुने बिना कई collections load करो तो EF एक warning log करता है। Default <code>UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery)</code> से set कर सकते हो और किसी query के लिए <code>AsSingleQuery()</code> से वापस आ सकते हो।</li>
<li><b>Split-query का trade-off</b>: duplicated rows कम, पर round trips ज़्यादा। Transaction (Serializable या snapshot) के बिना split queries बीच में बदला हुआ data भी देख सकती हैं। <code>Skip</code>/<code>Take</code> वाली paging के लिए unique sort order चाहिए, ताकि हर split query वही rows देखे — EF Core 10 से पहले EF child query के अंदर ordering से key तक छोड़ सकता था; EF Core 10 ने यह ठीक किया, पर unique order देना फिर भी आपका काम है।</li>
<li><code>TagWith("Orders page")</code> query में एक SQL comment जोड़ता है, ताकि Query Store, Profiler या logs में उसे जल्दी ढूँढ सको।</li>
</ul>
<p><b>कब use करें:</b> read screens के लिए projection, पूरी entities चाहिए तो <code>Include</code>, service boundaries के पार batch query, और जब दो या ज़्यादा collections बड़ी हों तो <code>AsSplitQuery()</code>। <b>कब नहीं:</b> आदत से हर query को split mode में मत डालो — छोटे one-to-many results के लिए एक JOIN आमतौर पर तेज़ होता है; और N+1 को आँख बंद करके caching से "fix" मत करो — पहले extra round trips हटाओ।</p>`,
        hg: `<p><b>Analogy — bijli ka meter reader:</b> ek aalsi agency flat list lene ke liye society office mein ek meter reader bhejti hai, phir har flat ke liye alag visit. Achhi agency poori list ke saath ek reader bhejti hai jo building mein ek baar ghoomta hai. Kaunsi agency rakhi hai, yeh aap <b>visits ginkar</b> hi jaan sakte ho — isliye queries gino.</p>
<ul>
<li><b>Pehle measure karo</b>: <code>DbCommandInterceptor</code> ya counter ke saath <code>LogTo(..., new[] { RelationalEventId.CommandExecuted })</code> batata hai ki code ka ek tukda kitne SQL commands bhejta hai. Kuch teams integration tests mein is sankhya ko assert karti hain, taaki N+1 chupke se wapas na aa jaaye.</li>
<li><b>Fix 1 — <code>Include</code></b>: <code>LEFT JOIN</code> wala ek SQL (Day 5). Tab achha jab poori child entities chahiye.</li>
<li><b>Fix 2 — projection</b>: <code>Select(c =&gt; new { c.Name, Total = c.Orders.Sum(o =&gt; o.Total) })</code> — sum <b>SQL Server</b> ek subquery mein karta hai; wapas sirf totals aate hain.</li>
<li><b>Fix 3 — ek batch query</b>: parent ids ikattha karo, <b>ek</b> <code>Where(o =&gt; ids.Contains(o.CustomerId))</code> chalao, phir memory mein group karo. N kitna bhi ho, kul do queries. Tab kaam ka jab children kisi doosri service ya repository se aate hain.</li>
<li><b>Cartesian explosion</b>: ek query mein do collection Includes rows ko guna kar dete hain (10 orders aur 10 addresses wala customer = 100 joined rows). <code>AsSplitQuery()</code> iski jagah har collection ke liye ek SQL bhejta hai. Mode chune bina kai collections load karo to EF ek warning log karta hai. Default <code>UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery)</code> se set kar sakte ho aur kisi query ke liye <code>AsSingleQuery()</code> se wapas aa sakte ho.</li>
<li><b>Split-query ka trade-off</b>: duplicated rows kam, par round trips zyaada. Transaction (Serializable ya snapshot) ke bina split queries beech mein badla hua data bhi dekh sakti hain. <code>Skip</code>/<code>Take</code> wali paging ke liye unique sort order chahiye, taaki har split query wahi rows dekhe — EF Core 10 se pehle EF child query ke andar ordering se key tak chhod sakta tha; EF Core 10 ne yeh theek kiya, par unique order dena phir bhi aapka kaam hai.</li>
<li><code>TagWith("Orders page")</code> query mein ek SQL comment jodta hai, taaki Query Store, Profiler ya logs mein use jaldi dhoondh sako.</li>
</ul>
<p><b>Kab use karein:</b> read screens ke liye projection, poori entities chahiye to <code>Include</code>, service boundaries ke paar batch query, aur jab do ya zyaada collections badi hon to <code>AsSplitQuery()</code>. <b>Kab nahi:</b> aadat se har query ko split mode mein mat daalo — chhote one-to-many results ke liye ek JOIN aamtaur par tez hota hai; aur N+1 ko aankh band karke caching se "fix" mat karo — pehle extra round trips hatao.</p>`
      },
      code: [{
        caption: {
          en: "Same report, four ways — counting the SQL commands with a DbCommandInterceptor (in-memory SQLite)",
          hi: "एक ही report, चार तरीके — DbCommandInterceptor से SQL commands गिनते हुए (in-memory SQLite)",
          hg: "Ek hi report, chaar tareeke — DbCommandInterceptor se SQL commands ginte hue (in-memory SQLite)"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
        expected: "N+1 loop:    total = 1750, queries = 6\nInclude:     total = 1750, queries = 1\nProjection:  total = 1750, queries = 1\nBatch query: total = 1750, queries = 2",
        src: `using System.Data.Common;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var counter = new QueryCounter();
var options = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlite(connection)
    .AddInterceptors(counter)            // counts every query EF sends
    .Options;

using (var db = new ShopContext(options))
{
    db.Database.EnsureCreated();
    foreach (var name in new[] { "Asha", "Ravi", "Meera", "John", "Fatima" })
    {
        var c = new Customer { Name = name };
        c.Orders.Add(new Order { Total = 100 });
        c.Orders.Add(new Order { Total = 250 });
        db.Customers.Add(c);
    }
    db.SaveChanges();
}

// 1. N+1: one query for customers, then one query per customer inside the loop
using (var db = new ShopContext(options))
{
    counter.Count = 0;
    int grand = 0;
    foreach (var c in db.Customers.ToList())
        grand += db.Orders.Where(o => o.CustomerId == c.Id).Sum(o => o.Total);
    Console.WriteLine($"N+1 loop:    total = {grand}, queries = {counter.Count}");
}

// 2. Include: one query with a JOIN, sum in memory
using (var db = new ShopContext(options))
{
    counter.Count = 0;
    var customers = db.Customers.Include(c => c.Orders).ToList();
    int grand = customers.Sum(c => c.Orders.Sum(o => o.Total));
    Console.WriteLine($"Include:     total = {grand}, queries = {counter.Count}");
}

// 3. Projection: the database does the SUM, only totals come back
using (var db = new ShopContext(options))
{
    counter.Count = 0;
    var rows = db.Customers
        .Select(c => new { c.Name, Total = c.Orders.Sum(o => o.Total) })
        .ToList();
    Console.WriteLine($"Projection:  total = {rows.Sum(r => r.Total)}, queries = {counter.Count}");
}

// 4. Batch: parents first, then ONE query for all their children
using (var db = new ShopContext(options))
{
    counter.Count = 0;
    var customers = db.Customers.ToList();
    var ids = customers.Select(c => c.Id).ToList();
    var totals = db.Orders
        .Where(o => ids.Contains(o.CustomerId))
        .GroupBy(o => o.CustomerId)
        .Select(g => new { CustomerId = g.Key, Total = g.Sum(o => o.Total) })
        .ToDictionary(x => x.CustomerId, x => x.Total);
    Console.WriteLine($"Batch query: total = {customers.Sum(c => totals[c.Id])}, queries = {counter.Count}");
}

public class QueryCounter : DbCommandInterceptor
{
    public int Count;
    public override DbDataReader ReaderExecuted(DbCommand command, CommandExecutedEventData eventData, DbDataReader result)
    {
        Count++;
        return result;
    }
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
    public int Total { get; set; }   // whole rupees keeps the demo output simple
    public int CustomerId { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();
}`
      }]
    },
    {
      id: "projection-in-code",
      depth: "detailed",
      title: {
        en: "Projections in code: entity query vs DTO query — compare the SQL Server SQL",
        hi: "Code में projections: entity query बनाम DTO query — SQL Server SQL की तुलना",
        hg: "Code mein projections: entity query vs DTO query — SQL Server SQL ki tulna"
      },
      body: {
        en: `<p><b>Analogy — ordering at a dhaba:</b> you want only dal and two rotis. Ordering "the full thali" means paying for and carrying sweets, papad and rice you will not eat. A projection is ordering exactly the dishes you need.</p>
<ul>
<li><b>Entity query</b>: <code>db.Customers.Where(...)</code> selects <b>every mapped column</b> — including large ones like <code>Notes nvarchar(max)</code> — and (unless no-tracking) keeps a snapshot of each row in the change tracker.</li>
<li><b>DTO projection</b>: <code>Select(c =&gt; new CustomerSummary(c.Name, c.Orders.Count, c.Orders.Sum(o =&gt; o.Total)))</code> selects only <code>Name</code> and two <b>correlated subqueries</b> (<code>COUNT(*)</code>, <code>SUM</code>). The aggregation happens inside SQL Server; a few numbers come back instead of every order row.</li>
<li><b>No Include needed</b>: navigations used inside <code>Select</code> are turned into JOINs/subqueries. If the final result does not contain the entity, EF ignores any <code>Include</code> you wrote.</li>
<li><b>Nested collections</b> in a projection (a list of order totals per customer) become a <code>LEFT JOIN</code> plus <code>ORDER BY</code> keys — the same shape as <code>Include</code>, but only with the columns you picked.</li>
<li><b>SQL link</b>: selecting fewer columns lets SQL Server answer from a <b>covering index</b> (a non-clustered index with <code>INCLUDE</code> columns) instead of reading the clustered index — an easy interview point for someone strong in SQL.</li>
<li>Mapping libraries can build the <code>Select</code> for you (for example AutoMapper's <code>ProjectTo</code>), but a hand-written <code>Select</code> is the clearest and easiest to review.</li>
</ul>
<p><b>When to use:</b> every read-only query that feeds a screen, an API response or a report. <b>When not:</b> when you will update the data (load the tracked entity); and do not call your own C# methods inside the projection for logic SQL could do — EF runs them on the client after the rows arrive, which is fine for formatting but hides work from the database.</p>`,
        hi: `<p><b>Analogy — ढाबे पर order:</b> आपको सिर्फ़ दाल और दो रोटी चाहिए। "पूरी थाली" order करने का मतलब है मिठाई, पापड़ और चावल का पैसा देना और उठाना, जो आप खाओगे भी नहीं। Projection मतलब ठीक वही dishes order करना जो चाहिए।</p>
<ul>
<li><b>Entity query</b>: <code>db.Customers.Where(...)</code> <b>हर mapped column</b> select करता है — <code>Notes nvarchar(max)</code> जैसे बड़े columns भी — और (no-tracking न हो तो) हर row का snapshot change tracker में रखता है।</li>
<li><b>DTO projection</b>: <code>Select(c =&gt; new CustomerSummary(c.Name, c.Orders.Count, c.Orders.Sum(o =&gt; o.Total)))</code> सिर्फ़ <code>Name</code> और दो <b>correlated subqueries</b> (<code>COUNT(*)</code>, <code>SUM</code>) select करता है। Aggregation SQL Server के अंदर होता है; हर order row की जगह कुछ numbers वापस आते हैं।</li>
<li><b>Include की ज़रूरत नहीं</b>: <code>Select</code> के अंदर use हुए navigations JOINs/subqueries बन जाते हैं। अगर final result में entity ही नहीं है, तो EF आपका लिखा <code>Include</code> ignore कर देता है।</li>
<li>Projection में <b>nested collections</b> (हर customer के order totals की list) <code>LEFT JOIN</code> और keys पर <code>ORDER BY</code> बनती हैं — <code>Include</code> जैसा ही shape, पर सिर्फ़ आपके चुने columns के साथ।</li>
<li><b>SQL से link</b>: कम columns select करने से SQL Server clustered index पढ़ने की बजाय एक <b>covering index</b> (<code>INCLUDE</code> columns वाला non-clustered index) से जवाब दे सकता है — SQL में मज़बूत इंसान के लिए interview का आसान point।</li>
<li>Mapping libraries आपके लिए <code>Select</code> बना सकती हैं (जैसे AutoMapper का <code>ProjectTo</code>), पर हाथ से लिखा <code>Select</code> सबसे साफ़ और review में सबसे आसान है।</li>
</ul>
<p><b>कब use करें:</b> हर read-only query जो किसी screen, API response या report को data देती है। <b>कब नहीं:</b> जब data update करना हो (tracked entity load करो); और projection के अंदर ऐसे logic के लिए अपने C# methods मत call करो जो SQL कर सकता था — EF उन्हें rows आने के बाद client पर चलाता है, जो formatting के लिए ठीक है पर database से काम छुपा देता है।</p>`,
        hg: `<p><b>Analogy — dhaabe par order:</b> aapko sirf daal aur do roti chahiye. "Poori thaali" order karne ka matlab hai mithai, papad aur chawal ka paisa dena aur uthaana, jo aap khaoge bhi nahi. Projection matlab theek wahi dishes order karna jo chahiye.</p>
<ul>
<li><b>Entity query</b>: <code>db.Customers.Where(...)</code> <b>har mapped column</b> select karta hai — <code>Notes nvarchar(max)</code> jaise bade columns bhi — aur (no-tracking na ho to) har row ka snapshot change tracker mein rakhta hai.</li>
<li><b>DTO projection</b>: <code>Select(c =&gt; new CustomerSummary(c.Name, c.Orders.Count, c.Orders.Sum(o =&gt; o.Total)))</code> sirf <code>Name</code> aur do <b>correlated subqueries</b> (<code>COUNT(*)</code>, <code>SUM</code>) select karta hai. Aggregation SQL Server ke andar hota hai; har order row ki jagah kuch numbers wapas aate hain.</li>
<li><b>Include ki zaroorat nahi</b>: <code>Select</code> ke andar use hue navigations JOINs/subqueries ban jaate hain. Agar final result mein entity hi nahi hai, to EF aapka likha <code>Include</code> ignore kar deta hai.</li>
<li>Projection mein <b>nested collections</b> (har customer ke order totals ki list) <code>LEFT JOIN</code> aur keys par <code>ORDER BY</code> banti hain — <code>Include</code> jaisa hi shape, par sirf aapke chune columns ke saath.</li>
<li><b>SQL se link</b>: kam columns select karne se SQL Server clustered index padhne ki bajaay ek <b>covering index</b> (<code>INCLUDE</code> columns wala non-clustered index) se jawaab de sakta hai — SQL mein mazboot insaan ke liye interview ka aasaan point.</li>
<li>Mapping libraries aapke liye <code>Select</code> bana sakti hain (jaise AutoMapper ka <code>ProjectTo</code>), par haath se likha <code>Select</code> sabse saaf aur review mein sabse aasaan hai.</li>
</ul>
<p><b>Kab use karein:</b> har read-only query jo kisi screen, API response ya report ko data deti hai. <b>Kab nahi:</b> jab data update karna ho (tracked entity load karo); aur projection ke andar aise logic ke liye apne C# methods mat call karo jo SQL kar sakta tha — EF unhe rows aane ke baad client par chalata hai, jo formatting ke liye theek hai par database se kaam chhupa deta hai.</p>`
      },
      code: [{
        caption: {
          en: "Entity query vs DTO projection vs nested projection — the SQL Server SQL from ToQueryString (no database needed)",
          hi: "Entity query बनाम DTO projection बनाम nested projection — ToQueryString से SQL Server SQL (database की ज़रूरत नहीं)",
          hg: "Entity query vs DTO projection vs nested projection — ToQueryString se SQL Server SQL (database ki zaroorat nahi)"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        expected: "SELECT [c].[Id], [c].[City], [c].[Name], [c].[Notes]\nFROM [Customers] AS [c]\nWHERE [c].[City] = N'Pune'\n-----\n-- Customer summary page\n\nSELECT [c].[Name], (\n    SELECT COUNT(*)\n    FROM [Orders] AS [o]\n    WHERE [c].[Id] = [o].[CustomerId]), (\n    SELECT COALESCE(SUM([o0].[Total]), 0.0)\n    FROM [Orders] AS [o0]\n    WHERE [c].[Id] = [o0].[CustomerId])\nFROM [Customers] AS [c]\nWHERE [c].[City] = N'Pune'\n-----\nSELECT [c].[Name], [c].[Id], [o0].[Total], [o0].[Id]\nFROM [Customers] AS [c]\nLEFT JOIN (\n    SELECT [o].[Total], [o].[Id], [o].[CustomerId]\n    FROM [Orders] AS [o]\n    WHERE [o].[Total] > 500.0\n) AS [o0] ON [c].[Id] = [o0].[CustomerId]\nORDER BY [c].[Id]",
        src: `using Microsoft.EntityFrameworkCore;

var options = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlServer("Server=.;Database=Shop;Trusted_Connection=True;")   // dummy: nothing connects
    .Options;
using var db = new ShopContext(options);

// 1. Entity query: every column, including the big Notes column
Console.WriteLine(db.Customers.Where(c => c.City == "Pune").ToQueryString());
Console.WriteLine("-----");

// 2. DTO projection: only what the screen shows; COUNT and SUM run inside SQL Server
var summary = db.Customers
    .TagWith("Customer summary page")
    .Where(c => c.City == "Pune")
    .Select(c => new CustomerSummary(c.Name, c.Orders.Count, c.Orders.Sum(o => o.Total)));
Console.WriteLine(summary.ToQueryString());
Console.WriteLine("-----");

// 3. Nested collection inside a projection: LEFT JOIN + ORDER BY, only chosen columns
var bigOrders = db.Customers.Select(c => new
{
    c.Name,
    BigTotals = c.Orders.Where(o => o.Total > 500).Select(o => o.Total).ToList()
});
Console.WriteLine(bigOrders.ToQueryString());

/* Output:
SELECT [c].[Id], [c].[City], [c].[Name], [c].[Notes]
FROM [Customers] AS [c]
WHERE [c].[City] = N'Pune'
-----
-- Customer summary page

SELECT [c].[Name], (
    SELECT COUNT(*)
    FROM [Orders] AS [o]
    WHERE [c].[Id] = [o].[CustomerId]), (
    SELECT COALESCE(SUM([o0].[Total]), 0.0)
    FROM [Orders] AS [o0]
    WHERE [c].[Id] = [o0].[CustomerId])
FROM [Customers] AS [c]
WHERE [c].[City] = N'Pune'
-----
SELECT [c].[Name], [c].[Id], [o0].[Total], [o0].[Id]
FROM [Customers] AS [c]
LEFT JOIN (
    SELECT [o].[Total], [o].[Id], [o].[CustomerId]
    FROM [Orders] AS [o]
    WHERE [o].[Total] > 500.0
) AS [o0] ON [c].[Id] = [o0].[CustomerId]
ORDER BY [c].[Id]
*/

public record CustomerSummary(string Name, int OrderCount, decimal TotalSpent);

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string City { get; set; } = "";
    public string? Notes { get; set; }              // nvarchar(max): costly to drag along
    public List<Order> Orders { get; } = [];
}

public class Order
{
    public int Id { get; set; }
    public decimal Total { get; set; }
    public int CustomerId { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        => modelBuilder.Entity<Order>().Property(o => o.Total).HasPrecision(10, 2);
}`
      }]
    },
    {
      id: "raw-sql-in-code",
      depth: "detailed",
      title: {
        en: "Raw SQL in code: FromSql and composing LINQ on top, FromSqlRaw done safely, SqlQuery&lt;T&gt;, ExecuteSql",
        hi: "Code में raw SQL: FromSql और उस पर LINQ, FromSqlRaw को safe तरीके से, SqlQuery&lt;T&gt;, ExecuteSql",
        hg: "Code mein raw SQL: FromSql aur us par LINQ, FromSqlRaw ko safe tareeke se, SqlQuery&lt;T&gt;, ExecuteSql"
      },
      body: {
        en: `<p><b>Analogy — the hotel kitchen:</b> most guests order from the menu (LINQ) and the chef knows exactly what to do. Sometimes a regular guest gives the chef his <b>own recipe</b> (raw SQL). The chef still serves it on the hotel's plates (your entity types), and a waiter can still add a garnish on top (LINQ composed over your SQL) — but the hotel is now trusting the guest's recipe.</p>
<ul>
<li><code>FromSql($"... {city}")</code> takes a <code>FormattableString</code>, so each <code>{value}</code> becomes a parameter. Trap: if you first build the text into a <code>string</code> variable, the values are already pasted in — <code>FromSql</code> will not even compile with a plain <code>string</code>, and passing that string to <code>FromSqlRaw</code> brings back SQL injection.</li>
<li><code>FromSqlRaw</code> is for SQL whose <b>text</b> you build yourself. Values still go as parameters: <code>FromSqlRaw("EXEC dbo.GetCustomersByCity @city", new SqlParameter("@city", city))</code>. Table or column names cannot be parameters — pick them from a fixed allow-list, never from user input directly.</li>
<li>The SQL must return <b>all columns</b> of the entity, with matching names. EF wraps composable SQL (a <code>SELECT</code>) as a subquery, so <code>Where</code>, <code>OrderBy</code>, <code>Include</code> and paging still run in the database. The results are tracked like any other query unless you add <code>AsNoTracking()</code>.</li>
<li>SQL Server cannot compose over <code>EXEC</code>: put <code>AsEnumerable()</code>/<code>AsAsyncEnumerable()</code> right after a stored-procedure call, so any further LINQ runs in memory.</li>
<li><code>db.Database.SqlQuery&lt;T&gt;</code> returns non-entity types: scalars (EF Core 7) and unmapped DTOs (EF Core 8). To compose LINQ over a scalar query, name the column <code>Value</code> (<code>SELECT Id AS Value ...</code>).</li>
<li><code>db.Database.ExecuteSql($"...")</code> runs INSERT/UPDATE/DELETE/EXEC and returns rows affected. It does not touch the change tracker, and it joins the current transaction if one is open.</li>
<li>For views, map a <b>keyless entity</b>: <code>modelBuilder.Entity&lt;SalesRow&gt;().HasNoKey().ToView("vw_Sales")</code>, then query it with plain LINQ.</li>
<li>EF's analyzer warning <b>EF1002</b> catches an interpolated string passed to <code>FromSqlRaw</code>/<code>ExecuteSqlRaw</code>. In EF Core 9 it does not flag <code>+</code> concatenation; EF Core 10 adds a warning for concatenation inside the raw SQL methods. Code review is still the main guard.</li>
</ul>
<p><b>When to use:</b> tuned or complex reports, window functions, query hints, existing stored procedures and views. <b>When not:</b> as the default for CRUD; and never with values glued into the SQL text — if you cannot parameterize it, redesign it.</p>`,
        hi: `<p><b>Analogy — hotel की kitchen:</b> ज़्यादातर guests menu से order करते हैं (LINQ) और chef को ठीक पता होता है क्या करना है। कभी-कभी एक पुराना guest chef को अपनी <b>खुद की recipe</b> देता है (raw SQL)। Chef फिर भी उसे hotel की plates में परोसता है (आपकी entity types), और waiter ऊपर से garnish डाल सकता है (आपके SQL के ऊपर LINQ) — पर अब hotel guest की recipe पर भरोसा कर रहा है।</p>
<ul>
<li><code>FromSql($"... {city}")</code> एक <code>FormattableString</code> लेता है, इसलिए हर <code>{value}</code> parameter बनता है। जाल: अगर आप पहले text को एक <code>string</code> variable में बना लो, तो values उसमें पहले ही चिपक जाती हैं — plain <code>string</code> के साथ <code>FromSql</code> compile भी नहीं होगा, और वही string <code>FromSqlRaw</code> को दी तो SQL injection वापस आ जाता है।</li>
<li><code>FromSqlRaw</code> उस SQL के लिए है जिसका <b>text</b> आप खुद बनाते हो। Values फिर भी parameters से जाएँ: <code>FromSqlRaw("EXEC dbo.GetCustomersByCity @city", new SqlParameter("@city", city))</code>। Table या column names parameters नहीं बन सकते — उन्हें एक fixed allow-list से चुनो, user input से सीधे कभी नहीं।</li>
<li>SQL को entity के <b>सारे columns</b> matching names के साथ लौटाने चाहिए। EF composable SQL (एक <code>SELECT</code>) को subquery बनाकर लपेटता है, इसलिए <code>Where</code>, <code>OrderBy</code>, <code>Include</code> और paging फिर भी database में चलते हैं। Results बाकी queries की तरह track होते हैं, जब तक आप <code>AsNoTracking()</code> न जोड़ो।</li>
<li>SQL Server <code>EXEC</code> के ऊपर compose नहीं कर सकता: stored-procedure call के तुरंत बाद <code>AsEnumerable()</code>/<code>AsAsyncEnumerable()</code> लगाओ, ताकि आगे का LINQ memory में चले।</li>
<li><code>db.Database.SqlQuery&lt;T&gt;</code> non-entity types लौटाता है: scalars (EF Core 7) और unmapped DTOs (EF Core 8)। Scalar query पर LINQ compose करना हो तो column का नाम <code>Value</code> रखो (<code>SELECT Id AS Value ...</code>)।</li>
<li><code>db.Database.ExecuteSql($"...")</code> INSERT/UPDATE/DELETE/EXEC चलाता है और affected rows लौटाता है। यह change tracker को नहीं छूता, और अगर कोई transaction खुला है तो उसी में शामिल होता है।</li>
<li>Views के लिए एक <b>keyless entity</b> map करो: <code>modelBuilder.Entity&lt;SalesRow&gt;().HasNoKey().ToView("vw_Sales")</code>, फिर उसे सीधे LINQ से query करो।</li>
<li>EF का analyzer warning <b>EF1002</b> तब पकड़ता है जब <code>FromSqlRaw</code>/<code>ExecuteSqlRaw</code> को interpolated string दी जाए। EF Core 9 में यह <code>+</code> से जोड़ी गई string को flag नहीं करता; EF Core 10 raw SQL methods के अंदर string जोड़ने पर भी warning देता है। फिर भी असली पहरा code review का है।</li>
</ul>
<p><b>कब use करें:</b> tuned या complex reports, window functions, query hints, पहले से बने stored procedures और views। <b>कब नहीं:</b> CRUD के लिए default की तरह; और SQL text में चिपकाई गई values के साथ तो कभी नहीं — अगर parameterize नहीं कर सकते, तो design बदलो।</p>`,
        hg: `<p><b>Analogy — hotel ki kitchen:</b> zyaadatar guests menu se order karte hain (LINQ) aur chef ko theek pata hota hai kya karna hai. Kabhi-kabhi ek purana guest chef ko apni <b>khud ki recipe</b> deta hai (raw SQL). Chef phir bhi use hotel ki plates mein parosta hai (aapki entity types), aur waiter upar se garnish daal sakta hai (aapke SQL ke upar LINQ) — par ab hotel guest ki recipe par bharosa kar raha hai.</p>
<ul>
<li><code>FromSql($"... {city}")</code> ek <code>FormattableString</code> leta hai, isliye har <code>{value}</code> parameter banta hai. Jaal: agar aap pehle text ko ek <code>string</code> variable mein bana lo, to values usmein pehle hi chipak jaati hain — plain <code>string</code> ke saath <code>FromSql</code> compile bhi nahi hoga, aur wahi string <code>FromSqlRaw</code> ko di to SQL injection wapas aa jaata hai.</li>
<li><code>FromSqlRaw</code> us SQL ke liye hai jiska <b>text</b> aap khud banate ho. Values phir bhi parameters se jaayein: <code>FromSqlRaw("EXEC dbo.GetCustomersByCity @city", new SqlParameter("@city", city))</code>. Table ya column names parameters nahi ban sakte — unhe ek fixed allow-list se chuno, user input se seedhe kabhi nahi.</li>
<li>SQL ko entity ke <b>saare columns</b> matching names ke saath lautaane chahiye. EF composable SQL (ek <code>SELECT</code>) ko subquery banakar lapetta hai, isliye <code>Where</code>, <code>OrderBy</code>, <code>Include</code> aur paging phir bhi database mein chalte hain. Results baaki queries ki tarah track hote hain, jab tak aap <code>AsNoTracking()</code> na jodo.</li>
<li>SQL Server <code>EXEC</code> ke upar compose nahi kar sakta: stored-procedure call ke turant baad <code>AsEnumerable()</code>/<code>AsAsyncEnumerable()</code> lagao, taaki aage ka LINQ memory mein chale.</li>
<li><code>db.Database.SqlQuery&lt;T&gt;</code> non-entity types lautaata hai: scalars (EF Core 7) aur unmapped DTOs (EF Core 8). Scalar query par LINQ compose karna ho to column ka naam <code>Value</code> rakho (<code>SELECT Id AS Value ...</code>).</li>
<li><code>db.Database.ExecuteSql($"...")</code> INSERT/UPDATE/DELETE/EXEC chalata hai aur affected rows lautaata hai. Yeh change tracker ko nahi chhoota, aur agar koi transaction khula hai to usi mein shaamil hota hai.</li>
<li>Views ke liye ek <b>keyless entity</b> map karo: <code>modelBuilder.Entity&lt;SalesRow&gt;().HasNoKey().ToView("vw_Sales")</code>, phir use seedhe LINQ se query karo.</li>
<li>EF ka analyzer warning <b>EF1002</b> tab pakadta hai jab <code>FromSqlRaw</code>/<code>ExecuteSqlRaw</code> ko interpolated string di jaaye. EF Core 9 mein yeh <code>+</code> se jodi gayi string ko flag nahi karta; EF Core 10 raw SQL methods ke andar string jodne par bhi warning deta hai. Phir bhi asli pehra code review ka hai.</li>
</ul>
<p><b>Kab use karein:</b> tuned ya complex reports, window functions, query hints, pehle se bane stored procedures aur views. <b>Kab nahi:</b> CRUD ke liye default ki tarah; aur SQL text mein chipkaayi gayi values ke saath to kabhi nahi — agar parameterize nahi kar sakte, to design badlo.</p>`
      },
      code: [{
        caption: {
          en: "The SQL Server SQL when you compose LINQ over FromSql and SqlQuery&lt;T&gt; (ToQueryString — no database needed)",
          hi: "FromSql और SqlQuery&lt;T&gt; के ऊपर LINQ compose करने पर SQL Server SQL (ToQueryString — database की ज़रूरत नहीं)",
          hg: "FromSql aur SqlQuery&lt;T&gt; ke upar LINQ compose karne par SQL Server SQL (ToQueryString — database ki zaroorat nahi)"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        expected: "DECLARE p0 nvarchar(4000) = N'Pune';\n\nSELECT [c].[Id], [c].[City], [c].[Name]\nFROM (\n    SELECT * FROM Customers WHERE City = @p0\n) AS [c]\nWHERE [c].[Name] LIKE N'A%'\nORDER BY [c].[Name]\n-----\nSELECT [c].[City], [c].[Total]\nFROM (\n    SELECT City, COUNT(*) AS Total FROM Customers GROUP BY City\n) AS [c]\nWHERE [c].[Total] > 1",
        src: `using Microsoft.EntityFrameworkCore;

var options = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlServer("Server=.;Database=Shop;Trusted_Connection=True;")   // dummy: nothing connects
    .Options;
using var db = new ShopContext(options);

string city = "Pune";   // imagine this came from the user

// Your SQL becomes a subquery; the LINQ on top runs in SQL Server too
var fromSql = db.Customers
    .FromSql($"SELECT * FROM Customers WHERE City = {city}")
    .Where(c => c.Name.StartsWith("A"))
    .OrderBy(c => c.Name);
Console.WriteLine(fromSql.ToQueryString());
Console.WriteLine("-----");

// SqlQuery<T> with an unmapped DTO (EF Core 8+), composed with Where
var busyCities = db.Database
    .SqlQuery<CityCount>($"SELECT City, COUNT(*) AS Total FROM Customers GROUP BY City")
    .Where(x => x.Total > 1);
Console.WriteLine(busyCities.ToQueryString());

/* Output (EF Core 9 prints the DECLARE line without '@' — cosmetic; the command sends @p0 as a real parameter):
DECLARE p0 nvarchar(4000) = N'Pune';

SELECT [c].[Id], [c].[City], [c].[Name]
FROM (
    SELECT * FROM Customers WHERE City = @p0
) AS [c]
WHERE [c].[Name] LIKE N'A%'
ORDER BY [c].[Name]
-----
SELECT [c].[City], [c].[Total]
FROM (
    SELECT City, COUNT(*) AS Total FROM Customers GROUP BY City
) AS [c]
WHERE [c].[Total] > 1
*/

public record CityCount(string City, int Total);

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string City { get; set; } = "";
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`
      }, {
        caption: {
          en: "Running raw SQL for real on in-memory SQLite: FromSqlRaw with a placeholder, SqlQuery for a DTO and a scalar, ExecuteSql",
          hi: "In-memory SQLite पर raw SQL सच में चलाना: placeholder वाला FromSqlRaw, DTO और scalar के लिए SqlQuery, ExecuteSql",
          hg: "In-memory SQLite par raw SQL sach mein chalaana: placeholder wala FromSqlRaw, DTO aur scalar ke liye SqlQuery, ExecuteSql"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
        expected: "FromSqlRaw {0}: Asha, Meera\nSqlQuery DTO:    Delhi=1, Pune=2\nSqlQuery<int>:   2, 3\nExecuteSql:      rows affected = 2, tracked entities = 0",
        src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;

using var db = new ShopContext(options);
db.Database.EnsureCreated();
db.Customers.AddRange(
    new Customer { Name = "Asha", City = "Pune" },
    new Customer { Name = "Ravi", City = "Delhi" },
    new Customer { Name = "Meera", City = "Pune" });
db.SaveChanges();
db.ChangeTracker.Clear();

string city = "Pune";

// FromSqlRaw: you write the SQL text, the VALUE still goes as a parameter ({0})
var pune = db.Customers
    .FromSqlRaw("SELECT * FROM Customers WHERE City = {0}", city)
    .OrderBy(c => c.Name)
    .Select(c => c.Name)
    .ToList();
Console.WriteLine("FromSqlRaw {0}: " + string.Join(", ", pune));

// SqlQuery<T> into a DTO that is not part of the model (EF Core 8+)
var perCity = db.Database
    .SqlQuery<CityCount>($"SELECT City, COUNT(*) AS Total FROM Customers GROUP BY City")
    .OrderBy(x => x.City)
    .ToList();
Console.WriteLine("SqlQuery DTO:    " + string.Join(", ", perCity.Select(x => $"{x.City}={x.Total}")));

// Scalar SqlQuery: to compose LINQ on top, the column must be named Value
var ids = db.Database
    .SqlQuery<int>($"SELECT Id AS Value FROM Customers")
    .Where(id => id > 1)
    .ToList();
Console.WriteLine("SqlQuery<int>:   " + string.Join(", ", ids));

// ExecuteSql: a command, runs now, returns rows affected, change tracker untouched
int changed = db.Database.ExecuteSql($"UPDATE Customers SET City = 'Pune (MH)' WHERE City = {city}");
Console.WriteLine($"ExecuteSql:      rows affected = {changed}, tracked entities = {db.ChangeTracker.Entries().Count()}");

public record CityCount(string City, int Total);

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string City { get; set; } = "";
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`
      }]
    },
    {
      id: "transactions-in-code",
      depth: "detailed",
      title: {
        en: "Transactions in code: BeginTransaction, savepoints, retries with an execution strategy, and TransactionScope cautions",
        hi: "Code में transactions: BeginTransaction, savepoints, execution strategy से retries, और TransactionScope की सावधानियाँ",
        hg: "Code mein transactions: BeginTransaction, savepoints, execution strategy se retries, aur TransactionScope ki saavdhaaniyaan"
      },
      body: {
        en: `<p><b>Analogy — a Tatkal booking:</b> seat hold, payment and ticket generation must all succeed, or the seat goes back to the pool and the money is refunded. If the website times out halfway, you do not want to press "Pay" again on a half-finished booking — you want the <b>whole booking</b> retried from the start. That is a transaction plus an execution strategy.</p>
<ul>
<li><b>Explicit transaction</b>: <code>using var tx = db.Database.BeginTransaction();</code> → several <code>SaveChanges()</code>, <code>ExecuteUpdate</code> or <code>ExecuteSql</code> calls → <code>tx.Commit();</code>. Disposing without <code>Commit()</code> rolls everything back. Isolation is the database default (Read Committed on SQL Server) unless you pass one: <code>BeginTransaction(IsolationLevel.Serializable)</code>.</li>
<li><b>Savepoints</b> (EF Core 5+): inside your transaction, each <code>SaveChanges()</code> creates a savepoint first. If it fails, EF rolls back to that savepoint only, so your earlier work in the transaction is still there.</li>
<li><b>Sharing a transaction</b> with Dapper or plain ADO.NET: use the same connection, take <code>db.Database.GetDbTransaction()</code> for the other code, or hand an existing <code>DbTransaction</code> to EF with <code>db.Database.UseTransaction(tx)</code>.</li>
<li><b>Retries</b>: <code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure())</code> retries transient errors (Azure SQL failover, network blips). With retries on, if you open a transaction outside the strategy, the next <code>SaveChanges()</code> or query that the strategy runs throws <code>InvalidOperationException</code> — so run the whole unit inside <code>db.Database.CreateExecutionStrategy().Execute(...)</code>.</li>
<li>The retried block must be safe to run again: start each attempt from a clean change tracker (or a new DbContext), and do not call external services inside it.</li>
<li><b>TransactionScope</b>: works with EF Core, but its default isolation is <b>Serializable</b> (more blocking than you expect), <code>async</code> code needs <code>TransactionScopeAsyncFlowOption.Enabled</code>, and two different connections inside one scope can escalate to a distributed transaction, which modern .NET supports only on Windows and only when you opt in. Prefer <code>BeginTransaction()</code> on one connection.</li>
</ul>
<p><b>When to use:</b> an explicit transaction when several writes form one business operation; an execution strategy for every cloud database. <b>When not:</b> do not open a transaction for reads only or around one <code>SaveChanges()</code>; keep transactions short — no HTTP calls, emails or user waits inside them.</p>`,
        hi: `<p><b>Analogy — Tatkal booking:</b> seat hold, payment और ticket बनना — सब succeed होने चाहिए, वरना seat वापस pool में और पैसा refund। अगर website बीच में time out हो जाए, तो आप आधी booking पर दोबारा "Pay" नहीं दबाना चाहोगे — आप चाहोगे कि <b>पूरी booking</b> शुरू से retry हो। यही transaction और execution strategy है।</p>
<ul>
<li><b>Explicit transaction</b>: <code>using var tx = db.Database.BeginTransaction();</code> → कई <code>SaveChanges()</code>, <code>ExecuteUpdate</code> या <code>ExecuteSql</code> calls → <code>tx.Commit();</code>। <code>Commit()</code> के बिना dispose किया तो सब rollback। Isolation database का default रहता है (SQL Server पर Read Committed), जब तक आप खुद न दो: <code>BeginTransaction(IsolationLevel.Serializable)</code>।</li>
<li><b>Savepoints</b> (EF Core 5+): आपके transaction के अंदर हर <code>SaveChanges()</code> पहले एक savepoint बनाता है। Fail हुआ तो EF सिर्फ़ उसी savepoint तक rollback करता है, इसलिए transaction में आपका पहले का काम बचा रहता है।</li>
<li>Dapper या plain ADO.NET के साथ <b>transaction share करना</b>: वही connection use करो, दूसरे code के लिए <code>db.Database.GetDbTransaction()</code> लो, या पहले से बना <code>DbTransaction</code> <code>db.Database.UseTransaction(tx)</code> से EF को दो।</li>
<li><b>Retries</b>: <code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure())</code> transient errors (Azure SQL failover, network की छोटी गड़बड़) को retry करता है। Retries चालू हों और आप strategy के बाहर transaction खोलो, तो strategy का चलाया अगला <code>SaveChanges()</code> या query <code>InvalidOperationException</code> throw करता है — इसलिए पूरा unit <code>db.Database.CreateExecutionStrategy().Execute(...)</code> के अंदर चलाओ।</li>
<li>Retry होने वाला block दोबारा चलने लायक होना चाहिए: हर attempt साफ़ change tracker (या नए DbContext) से शुरू करो, और उसके अंदर external services call मत करो।</li>
<li><b>TransactionScope</b>: EF Core के साथ चलता है, पर इसका default isolation <b>Serializable</b> है (उम्मीद से ज़्यादा blocking), <code>async</code> code के लिए <code>TransactionScopeAsyncFlowOption.Enabled</code> चाहिए, और एक scope में दो अलग connections distributed transaction तक escalate हो सकते हैं, जो modern .NET सिर्फ़ Windows पर और सिर्फ़ opt-in करने पर support करता है। एक connection पर <code>BeginTransaction()</code> बेहतर है।</li>
</ul>
<p><b>कब use करें:</b> explicit transaction तब, जब कई writes मिलकर एक business operation बनाते हैं; execution strategy हर cloud database के लिए। <b>कब नहीं:</b> सिर्फ़ reads के लिए या एक <code>SaveChanges()</code> के चारों ओर transaction मत खोलो; transactions छोटे रखो — उनके अंदर HTTP calls, emails या user का इंतज़ार नहीं।</p>`,
        hg: `<p><b>Analogy — Tatkal booking:</b> seat hold, payment aur ticket banna — sab succeed hone chahiye, warna seat wapas pool mein aur paisa refund. Agar website beech mein time out ho jaaye, to aap aadhi booking par dobara "Pay" nahi dabaana chahoge — aap chahoge ki <b>poori booking</b> shuru se retry ho. Yahi transaction aur execution strategy hai.</p>
<ul>
<li><b>Explicit transaction</b>: <code>using var tx = db.Database.BeginTransaction();</code> → kai <code>SaveChanges()</code>, <code>ExecuteUpdate</code> ya <code>ExecuteSql</code> calls → <code>tx.Commit();</code>. <code>Commit()</code> ke bina dispose kiya to sab rollback. Isolation database ka default rehta hai (SQL Server par Read Committed), jab tak aap khud na do: <code>BeginTransaction(IsolationLevel.Serializable)</code>.</li>
<li><b>Savepoints</b> (EF Core 5+): aapke transaction ke andar har <code>SaveChanges()</code> pehle ek savepoint banata hai. Fail hua to EF sirf usi savepoint tak rollback karta hai, isliye transaction mein aapka pehle ka kaam bacha rehta hai.</li>
<li>Dapper ya plain ADO.NET ke saath <b>transaction share karna</b>: wahi connection use karo, doosre code ke liye <code>db.Database.GetDbTransaction()</code> lo, ya pehle se bana <code>DbTransaction</code> <code>db.Database.UseTransaction(tx)</code> se EF ko do.</li>
<li><b>Retries</b>: <code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure())</code> transient errors (Azure SQL failover, network ki chhoti gadbad) ko retry karta hai. Retries chaalu hon aur aap strategy ke baahar transaction kholo, to strategy ka chalaaya agla <code>SaveChanges()</code> ya query <code>InvalidOperationException</code> throw karta hai — isliye poora unit <code>db.Database.CreateExecutionStrategy().Execute(...)</code> ke andar chalao.</li>
<li>Retry hone wala block dobara chalne laayak hona chahiye: har attempt saaf change tracker (ya naye DbContext) se shuru karo, aur uske andar external services call mat karo.</li>
<li><b>TransactionScope</b>: EF Core ke saath chalta hai, par iska default isolation <b>Serializable</b> hai (ummeed se zyaada blocking), <code>async</code> code ke liye <code>TransactionScopeAsyncFlowOption.Enabled</code> chahiye, aur ek scope mein do alag connections distributed transaction tak escalate ho sakte hain, jo modern .NET sirf Windows par aur sirf opt-in karne par support karta hai. Ek connection par <code>BeginTransaction()</code> behtar hai.</li>
</ul>
<p><b>Kab use karein:</b> explicit transaction tab, jab kai writes milkar ek business operation banaate hain; execution strategy har cloud database ke liye. <b>Kab nahi:</b> sirf reads ke liye ya ek <code>SaveChanges()</code> ke chaaron or transaction mat kholo; transactions chhote rakho — unke andar HTTP calls, emails ya user ka intezaar nahi.</p>`
      },
      code: [{
        caption: {
          en: "Rollback undoes two SaveChanges and an ExecuteUpdate; a retrying strategy re-runs the whole transaction (in-memory SQLite)",
          hi: "Rollback दो SaveChanges और एक ExecuteUpdate को undo करता है; retrying strategy पूरे transaction को फिर से चलाती है (in-memory SQLite)",
          hg: "Rollback do SaveChanges aur ek ExecuteUpdate ko undo karta hai; retrying strategy poore transaction ko phir se chalati hai (in-memory SQLite)"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
        expected: "Inside tx:      products = 3, stock set to 0 on 3 rows\nAfter rollback: products = 1, Pen stock = 5\nOutside strategy: The configured execution strategy 'DemoRetryStrategy' does not support user-initiated transactions\nInside strategy: attempts = 2, Eraser rows = 1\nTransactionScope default isolation = Serializable",
        src: `using System.Transactions;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using (var db = new ShopContext(options))
{
    db.Database.EnsureCreated();
    db.Products.Add(new Product { Name = "Pen", Stock = 5 });
    db.SaveChanges();
}

// 1. One explicit transaction around several steps
using (var db = new ShopContext(options))
{
    using var tx = db.Database.BeginTransaction();
    db.Products.Add(new Product { Name = "Ink" });
    db.SaveChanges();                                                     // step 1
    db.Products.Add(new Product { Name = "Notebook" });
    db.SaveChanges();                                                     // step 2
    int updated = db.Products.ExecuteUpdate(s => s.SetProperty(p => p.Stock, 0));   // step 3
    Console.WriteLine($"Inside tx:      products = {db.Products.Count()}, stock set to 0 on {updated} rows");
    tx.Rollback();                                                        // or simply no Commit()
}
using (var db = new ShopContext(options))
{
    var pen = db.Products.Single();
    Console.WriteLine($"After rollback: products = {db.Products.Count()}, Pen stock = {pen.Stock}");
}

// 2. With a retrying strategy, a transaction must run INSIDE the strategy
var retryOptions = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlite(connection, o => o.ExecutionStrategy(deps => new DemoRetryStrategy(deps)))
    .Options;
using (var db = new ShopContext(retryOptions))
{
    try
    {
        using var tx = db.Database.BeginTransaction();
        db.Products.Add(new Product { Name = "Eraser" });
        db.SaveChanges();
    }
    catch (InvalidOperationException ex)
    {
        Console.WriteLine("Outside strategy: " + ex.Message[..ex.Message.IndexOf('.')]);
    }
}
using (var db = new ShopContext(retryOptions))
{
    int attempts = 0;
    db.Database.CreateExecutionStrategy().Execute(() =>
    {
        attempts++;
        db.ChangeTracker.Clear();                                         // each attempt starts clean
        using var tx = db.Database.BeginTransaction();
        db.Products.Add(new Product { Name = "Eraser" });
        db.SaveChanges();
        if (attempts == 1) throw new TimeoutException("simulated network blip");   // transient failure
        tx.Commit();
    });
    Console.WriteLine($"Inside strategy: attempts = {attempts}, Eraser rows = {db.Products.Count(p => p.Name == "Eraser")}");
}

// 3. TransactionScope's default isolation level
using (var scope = new TransactionScope())
{
    Console.WriteLine($"TransactionScope default isolation = {Transaction.Current!.IsolationLevel}");
}

// SQLite has no built-in retrying strategy (SQL Server has EnableRetryOnFailure).
// This tiny one treats TimeoutException as transient and retries without waiting.
public class DemoRetryStrategy(ExecutionStrategyDependencies deps)
    : ExecutionStrategy(deps, maxRetryCount: 3, maxRetryDelay: TimeSpan.Zero)
{
    protected override bool ShouldRetryOn(Exception exception) => exception is TimeoutException;
    protected override TimeSpan? GetNextDelay(Exception lastException)
        => base.GetNextDelay(lastException) is null ? null : TimeSpan.Zero;
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public int Stock { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
}`
      }, {
        caption: {
          en: "The production shape on SQL Server: EnableRetryOnFailure + ExecuteAsync around the transaction, and a safer TransactionScope (compiles)",
          hi: "SQL Server पर production वाला ढाँचा: EnableRetryOnFailure + transaction के चारों ओर ExecuteAsync, और एक safer TransactionScope (compile होता है)",
          hg: "SQL Server par production wala dhaancha: EnableRetryOnFailure + transaction ke chaaron or ExecuteAsync, aur ek safer TransactionScope (compile hota hai)"
        },
        check: "compile",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        src: `using System.Transactions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddDbContext<ShopContext>(o => o.UseSqlServer(
    "Server=.;Database=Shop;Trusted_Connection=True;",
    sql => sql.EnableRetryOnFailure(
        maxRetryCount: 5,
        maxRetryDelay: TimeSpan.FromSeconds(10),
        errorNumbersToAdd: null)));

public class OrderService(ShopContext db)
{
    public async Task PlaceOrderAsync(int productId, int quantity, CancellationToken ct)
    {
        var strategy = db.Database.CreateExecutionStrategy();
        await strategy.ExecuteAsync(async () =>
        {
            db.ChangeTracker.Clear();                         // safe to run again
            await using var tx = await db.Database.BeginTransactionAsync(ct);

            int reserved = await db.Products
                .Where(p => p.Id == productId && p.Stock >= quantity)
                .ExecuteUpdateAsync(s => s.SetProperty(p => p.Stock, p => p.Stock - quantity), ct);
            if (reserved == 0) throw new InvalidOperationException("Out of stock");

            db.Orders.Add(new Order { ProductId = productId, Quantity = quantity });
            await db.SaveChangesAsync(ct);

            await tx.CommitAsync(ct);                         // both steps or neither
        });
    }

    // If you must use TransactionScope: set the isolation level and enable async flow.
    // With retries on, an ambient TransactionScope is also a user transaction,
    // so it goes inside the strategy too.
    public Task ImportAsync(CancellationToken ct)
        => db.Database.CreateExecutionStrategy().ExecuteAsync(async () =>
        {
            db.ChangeTracker.Clear();
            using var scope = new TransactionScope(
                TransactionScopeOption.Required,
                new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadCommitted },
                TransactionScopeAsyncFlowOption.Enabled);

            db.Orders.Add(new Order { ProductId = 1, Quantity = 1 });
            await db.SaveChangesAsync(ct);

            scope.Complete();                                 // no Complete() = rollback
        });
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public int Stock { get; set; }
}

public class Order
{
    public int Id { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Order> Orders => Set<Order>();
}`
      }]
    },
    {
      id: "concurrency-in-code",
      depth: "detailed",
      title: {
        en: "Concurrency in code: rowversion and its SQL, DbUpdateConcurrencyException, store wins vs client wins",
        hi: "Code में concurrency: rowversion और उसका SQL, DbUpdateConcurrencyException, store wins बनाम client wins",
        hg: "Code mein concurrency: rowversion aur uska SQL, DbUpdateConcurrencyException, store wins vs client wins"
      },
      body: {
        en: `<p><b>Analogy — editing a shared Excel file on a network drive:</b> you open it, your colleague opens it too. She saves first. When you press Save, a good system says "the file changed since you opened it — reload, overwrite, or merge?" A bad system silently keeps whoever saved last. A concurrency token is that "changed since you opened it" check.</p>
<ul>
<li><b>SQL Server</b>: <code>[Timestamp] public byte[] Version { get; set; }</code> (or <code>.IsRowVersion()</code>) creates a <code>rowversion</code> column. SQL Server changes it on <b>every</b> update. EF puts the original value in the <code>WHERE</code> and reads the new value back with <code>OUTPUT INSERTED.[Version]</code> — see the SQL below.</li>
<li><b>Any column</b>: <code>[ConcurrencyCheck]</code> or <code>.IsConcurrencyToken()</code> adds that column to the <code>WHERE</code>. It only notices changes to <b>that</b> column, and you must change the value yourself — for example a <code>Version</code> integer you increase in a <code>SaveChanges</code> override.</li>
<li>When the UPDATE/DELETE affects 0 rows, EF throws <code>DbUpdateConcurrencyException</code>. <code>ex.Entries</code> gives the failed entries; <code>entry.GetDatabaseValues()</code> reads the current row (<code>null</code> = someone deleted it).</li>
<li><b>Store wins</b> ("database wins"): <code>entry.Reload()</code> — drop your change, show the latest data. <b>Client wins</b>: <code>entry.OriginalValues.SetValues(databaseValues)</code>, then save again — your values overwrite theirs. <b>Merge</b>: compare property by property and let the user decide.</li>
<li><b>Web APIs</b>: the "original value" must be what the <b>user saw</b>, not what you loaded a millisecond ago. Send the version to the client (often as an <code>ETag</code>), take it back with the PUT, and set <code>db.Entry(product).Property(p =&gt; p.Version).OriginalValue = dto.Version</code> before saving. Return <code>409 Conflict</code> (or <code>412</code> with <code>If-Match</code>) on a conflict.</li>
<li>Even without a token, an UPDATE/DELETE that hits 0 rows (for example, the row was deleted) raises the same exception.</li>
</ul>
<p><b>When to use:</b> a <code>rowversion</code> on every table that users edit through forms or APIs — it is cheap and catches all column changes. <b>When not:</b> do not choose "client wins" by default — it brings back the lost update you wanted to stop; and do not use a long-held pessimistic lock just to avoid writing conflict handling.</p>`,
        hi: `<p><b>Analogy — network drive पर shared Excel file edit करना:</b> आप file खोलते हो, आपकी colleague भी खोलती है। वो पहले save कर देती है। जब आप Save दबाते हो, तो अच्छा system कहता है "आपके खोलने के बाद file बदल गई — reload, overwrite या merge?" खराब system चुपचाप आख़िरी save करने वाले का data रख लेता है। Concurrency token वही "आपके खोलने के बाद बदला" वाला check है।</p>
<ul>
<li><b>SQL Server</b>: <code>[Timestamp] public byte[] Version { get; set; }</code> (या <code>.IsRowVersion()</code>) एक <code>rowversion</code> column बनाता है। SQL Server इसे <b>हर</b> update पर बदलता है। EF original value को <code>WHERE</code> में डालता है और नई value <code>OUTPUT INSERTED.[Version]</code> से वापस पढ़ता है — नीचे SQL देखो।</li>
<li><b>कोई भी column</b>: <code>[ConcurrencyCheck]</code> या <code>.IsConcurrencyToken()</code> उस column को <code>WHERE</code> में जोड़ता है। यह सिर्फ़ <b>उसी</b> column के बदलाव पकड़ता है, और value आपको खुद बदलनी पड़ती है — जैसे एक <code>Version</code> integer जिसे आप <code>SaveChanges</code> override में बढ़ाते हो।</li>
<li>जब UPDATE/DELETE 0 rows पर असर करे, EF <code>DbUpdateConcurrencyException</code> throw करता है। <code>ex.Entries</code> fail हुई entries देता है; <code>entry.GetDatabaseValues()</code> मौजूदा row पढ़ता है (<code>null</code> = किसी ने उसे delete कर दिया)।</li>
<li><b>Store wins</b> ("database wins"): <code>entry.Reload()</code> — अपना बदलाव छोड़ो, latest data दिखाओ। <b>Client wins</b>: <code>entry.OriginalValues.SetValues(databaseValues)</code>, फिर दोबारा save — आपकी values उनकी values को overwrite करती हैं। <b>Merge</b>: property-by-property compare करो और user को तय करने दो।</li>
<li><b>Web APIs</b>: "original value" वो होनी चाहिए जो <b>user ने देखी</b>, वो नहीं जो आपने एक millisecond पहले load की। Version client को भेजो (अक्सर <code>ETag</code> के रूप में), PUT के साथ वापस लो, और save से पहले <code>db.Entry(product).Property(p =&gt; p.Version).OriginalValue = dto.Version</code> set करो। Conflict पर <code>409 Conflict</code> (या <code>If-Match</code> के साथ <code>412</code>) लौटाओ।</li>
<li>Token के बिना भी, अगर UPDATE/DELETE 0 rows पर लगे (जैसे row delete हो चुकी), तो यही exception आता है।</li>
</ul>
<p><b>कब use करें:</b> हर उस table पर <code>rowversion</code> जिसे users forms या APIs से edit करते हैं — यह सस्ता है और हर column का बदलाव पकड़ता है। <b>कब नहीं:</b> default में "client wins" मत चुनो — वो वही lost update वापस ले आता है जिसे आप रोकना चाहते थे; और conflict handling लिखने से बचने के लिए लंबे समय तक pessimistic lock मत पकड़ो।</p>`,
        hg: `<p><b>Analogy — network drive par shared Excel file edit karna:</b> aap file kholte ho, aapki colleague bhi kholti hai. Woh pehle save kar deti hai. Jab aap Save dabaate ho, to achha system kehta hai "aapke kholne ke baad file badal gayi — reload, overwrite ya merge?" Kharaab system chupchaap aakhri save karne wale ka data rakh leta hai. Concurrency token wahi "aapke kholne ke baad badla" wala check hai.</p>
<ul>
<li><b>SQL Server</b>: <code>[Timestamp] public byte[] Version { get; set; }</code> (ya <code>.IsRowVersion()</code>) ek <code>rowversion</code> column banata hai. SQL Server ise <b>har</b> update par badalta hai. EF original value ko <code>WHERE</code> mein daalta hai aur nayi value <code>OUTPUT INSERTED.[Version]</code> se wapas padhta hai — neeche SQL dekho.</li>
<li><b>Koi bhi column</b>: <code>[ConcurrencyCheck]</code> ya <code>.IsConcurrencyToken()</code> us column ko <code>WHERE</code> mein jodta hai. Yeh sirf <b>usi</b> column ke badlaav pakadta hai, aur value aapko khud badalni padti hai — jaise ek <code>Version</code> integer jise aap <code>SaveChanges</code> override mein badhaate ho.</li>
<li>Jab UPDATE/DELETE 0 rows par asar kare, EF <code>DbUpdateConcurrencyException</code> throw karta hai. <code>ex.Entries</code> fail hui entries deta hai; <code>entry.GetDatabaseValues()</code> maujooda row padhta hai (<code>null</code> = kisi ne use delete kar diya).</li>
<li><b>Store wins</b> ("database wins"): <code>entry.Reload()</code> — apna badlaav chhodo, latest data dikhao. <b>Client wins</b>: <code>entry.OriginalValues.SetValues(databaseValues)</code>, phir dobara save — aapki values unki values ko overwrite karti hain. <b>Merge</b>: property-by-property compare karo aur user ko tay karne do.</li>
<li><b>Web APIs</b>: "original value" woh honi chahiye jo <b>user ne dekhi</b>, woh nahi jo aapne ek millisecond pehle load ki. Version client ko bhejo (aksar <code>ETag</code> ke roop mein), PUT ke saath wapas lo, aur save se pehle <code>db.Entry(product).Property(p =&gt; p.Version).OriginalValue = dto.Version</code> set karo. Conflict par <code>409 Conflict</code> (ya <code>If-Match</code> ke saath <code>412</code>) lautaao.</li>
<li>Token ke bina bhi, agar UPDATE/DELETE 0 rows par lage (jaise row delete ho chuki), to yahi exception aata hai.</li>
</ul>
<p><b>Kab use karein:</b> har us table par <code>rowversion</code> jise users forms ya APIs se edit karte hain — yeh sasta hai aur har column ka badlaav pakadta hai. <b>Kab nahi:</b> default mein "client wins" mat chuno — woh wahi lost update wapas le aata hai jise aap rokna chahte the; aur conflict handling likhne se bachne ke liye lambe samay tak pessimistic lock mat pakdo.</p>`
      },
      code: [{
        caption: {
          en: "SQL Server: the rowversion DDL and the UPDATE that EF sends (a demo interceptor prints the SQL instead of sending it — no server needed)",
          hi: "SQL Server: rowversion का DDL और EF का भेजा UPDATE (demo interceptor SQL भेजने की बजाय print करता है — server की ज़रूरत नहीं)",
          hg: "SQL Server: rowversion ka DDL aur EF ka bheja UPDATE (demo interceptor SQL bhejne ki bajaay print karta hai — server ki zaroorat nahi)"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        expected: "CREATE TABLE [Products] (\n    [Id] int NOT NULL IDENTITY,\n    [Name] nvarchar(100) NOT NULL,\n    [Price] decimal(10,2) NOT NULL,\n    [Version] rowversion NOT NULL,\n    CONSTRAINT [PK_Products] PRIMARY KEY ([Id])\n);\nGO\n-----\nSET IMPLICIT_TRANSACTIONS OFF;\nSET NOCOUNT ON;\nUPDATE [Products] SET [Price] = @p0\nOUTPUT INSERTED.[Version]\nWHERE [Id] = @p1 AND [Version] = @p2;",
        src: `using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Data.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;

var options = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlServer("Server=.;Database=Shop;Trusted_Connection=True;")   // dummy
    .AddInterceptors(new NoConnection(), new PrintSqlInsteadOfRunning())
    .Options;
using var db = new ShopContext(options);

// 1. The table EF creates for [Timestamp]
Console.WriteLine(db.Database.GenerateCreateScript().Trim());
Console.WriteLine("-----");

// 2. The UPDATE for a product that the user loaded with Version 0x...01
var pen = new Product { Id = 7, Name = "Pen", Price = 10, Version = [0, 0, 0, 0, 0, 0, 0, 1] };
db.Attach(pen);           // pretend we loaded it
pen.Price = 12;
db.SaveChanges();

/* Output:
CREATE TABLE [Products] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(100) NOT NULL,
    [Price] decimal(10,2) NOT NULL,
    [Version] rowversion NOT NULL,
    CONSTRAINT [PK_Products] PRIMARY KEY ([Id])
);
GO
-----
SET IMPLICIT_TRANSACTIONS OFF;
SET NOCOUNT ON;
UPDATE [Products] SET [Price] = @p0
OUTPUT INSERTED.[Version]                    -- read back the new rowversion
WHERE [Id] = @p1 AND [Version] = @p2;        -- @p2 = the version the user saw
*/

public class Product
{
    public int Id { get; set; }
    [MaxLength(100)] public string Name { get; set; } = "";
    public decimal Price { get; set; }
    [Timestamp] public byte[] Version { get; set; } = [];      // SQL Server rowversion
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    protected override void OnModelCreating(ModelBuilder modelBuilder)
        => modelBuilder.Entity<Product>().Property(p => p.Price).HasPrecision(10, 2);
}

// ---- Demo plumbing: print the SQL instead of sending it, so no SQL Server is needed ----
public class NoConnection : DbConnectionInterceptor
{
    public override InterceptionResult ConnectionOpening(DbConnection c, ConnectionEventData e, InterceptionResult r)
        => InterceptionResult.Suppress();
    public override InterceptionResult ConnectionClosing(DbConnection c, ConnectionEventData e, InterceptionResult r)
        => InterceptionResult.Suppress();
}

public class PrintSqlInsteadOfRunning : DbCommandInterceptor
{
    public override InterceptionResult<DbDataReader> ReaderExecuting(DbCommand command, CommandEventData e, InterceptionResult<DbDataReader> r)
    {
        Console.WriteLine(command.CommandText.Trim());
        var fake = new DataTable();                                   // pretend 1 row was updated
        fake.Columns.Add("Version", typeof(byte[]));
        fake.Rows.Add(new byte[] { 0, 0, 0, 0, 0, 0, 0, 2 });
        return InterceptionResult<DbDataReader>.SuppressWithResult(fake.CreateDataReader());
    }
}`
      }, {
        caption: {
          en: "A real conflict on in-memory SQLite: a Version token increased in SaveChanges, then store wins and client wins",
          hi: "In-memory SQLite पर असली conflict: SaveChanges में बढ़ने वाला Version token, फिर store wins और client wins",
          hg: "In-memory SQLite par asli conflict: SaveChanges mein badhne wala Version token, phir store wins aur client wins"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
        expected: "Conflict: B wanted 120, database has 110 (Version 2)\nStore wins: B now sees 110, state = Unchanged\nClient wins: saved on retry\nFinal row: Price = 140, Version = 4",
        src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    setup.Products.Add(new Product { Name = "Pen", Price = 100 });
    setup.SaveChanges();
}

// Round 1 — store wins
using (var a = new ShopContext(options))
using (var b = new ShopContext(options))
{
    var penA = a.Products.Single();
    var penB = b.Products.Single();            // both users see Price 100, Version 1

    penA.Price = 110;
    a.SaveChanges();                           // A wins the race: Version becomes 2

    penB.Price = 120;
    try
    {
        b.SaveChanges();
    }
    catch (DbUpdateConcurrencyException ex)
    {
        var entry = ex.Entries.Single();
        var inDb = entry.GetDatabaseValues()!;
        Console.WriteLine($"Conflict: B wanted {penB.Price}, database has {inDb["Price"]} (Version {inDb["Version"]})");
        entry.Reload();                        // store wins: drop B's change
        Console.WriteLine($"Store wins: B now sees {penB.Price}, state = {entry.State}");
    }
}

// Round 2 — client wins
using (var a = new ShopContext(options))
using (var b = new ShopContext(options))
{
    var penA = a.Products.Single();
    var penB = b.Products.Single();

    penA.Price = 130;
    a.SaveChanges();

    penB.Price = 140;
    try
    {
        b.SaveChanges();
    }
    catch (DbUpdateConcurrencyException ex)
    {
        var entry = ex.Entries.Single();
        entry.OriginalValues.SetValues(entry.GetDatabaseValues()!);   // "I have seen the latest version"
        b.SaveChanges();                                              // B's values overwrite A's
        Console.WriteLine("Client wins: saved on retry");
    }
}

using (var check = new ShopContext(options))
{
    var pen = check.Products.Single();
    Console.WriteLine($"Final row: Price = {pen.Price}, Version = {pen.Version}");
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public int Price { get; set; }
    public int Version { get; set; }           // concurrency token we manage ourselves
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        => modelBuilder.Entity<Product>().Property(p => p.Version).IsConcurrencyToken();

    // Increase Version on every insert/update (SQL Server's rowversion does this for you)
    public override int SaveChanges(bool acceptAllChangesOnSuccess)
    {
        foreach (var entry in ChangeTracker.Entries<Product>())
            if (entry.State is EntityState.Added or EntityState.Modified)
                entry.Entity.Version++;
        return base.SaveChanges(acceptAllChangesOnSuccess);
    }
}`
      }]
    },
    {
      id: "bulk-in-code",
      depth: "detailed",
      title: {
        en: "ExecuteUpdate and ExecuteDelete in code: the SQL Server SQL, what they skip, and how to use them safely",
        hi: "Code में ExecuteUpdate और ExecuteDelete: SQL Server SQL, ये क्या skip करते हैं, और इन्हें safely कैसे use करें",
        hg: "Code mein ExecuteUpdate aur ExecuteDelete: SQL Server SQL, yeh kya skip karte hain, aur inhe safely kaise use karein"
      },
      body: {
        en: `<p><b>Analogy — the electricity board's tariff change:</b> when the rate per unit changes, the board does not visit every house and rewrite each bill by hand. It runs <b>one rule</b> in its billing system: "for all domestic connections, new rate = old rate + 10%". But the printed bill already lying on your table still shows the old rate — that is the stale tracked entity.</p>
<ul>
<li><b>Syntax</b>: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m).SetProperty(p =&gt; p.UpdatedOn, today))</code>. Chain several <code>SetProperty</code> calls; a value can be a constant, a variable, or an expression over the row's own columns. Async: <code>ExecuteUpdateAsync</code>/<code>ExecuteDeleteAsync</code>.</li>
<li><b>SQL</b>: SQL Server gets <code>UPDATE [o] SET ... FROM [Orders] AS [o] INNER JOIN ... WHERE ...</code> — filters on navigations become JOINs or <code>EXISTS</code>, exactly as a DBA would write it (see below). One call updates <b>one table</b>.</li>
<li><b>Runs now</b>, as its own statement, and returns rows affected. If you opened a transaction with <code>BeginTransaction()</code>, it joins it — use that when it must succeed or fail together with a <code>SaveChanges()</code>.</li>
<li><b>Change tracker untouched</b>: entities already loaded keep old values. A later <code>SaveChanges()</code> on such a stale entity can overwrite the bulk change or throw (see the puzzles). Run bulk operations before loading, in a fresh context, or call <code>ChangeTracker.Clear()</code> after.</li>
<li><b>No SaveChanges pipeline</b>: <code>SavingChanges</code> events, SaveChanges interceptors and audit code in a <code>SaveChanges</code> override do not run — set <code>UpdatedOn</code>/<code>UpdatedBy</code> in the <code>SetProperty</code> calls yourself. There is no concurrency check unless you put the version in the <code>Where</code>.</li>
<li><b>Query filters</b> apply (soft-deleted rows are skipped; <code>IgnoreQueryFilters()</code> to include them). <b>Cascade</b> happens only through the database's <code>ON DELETE CASCADE</code>; if the FK has no cascade, deleting a parent with children fails with a constraint error.</li>
</ul>
<p><b>When to use:</b> set-based changes on many rows — price revisions, archiving, cleanup jobs, soft-deleting in bulk, atomic counters (<code>Stock = Stock - 1 WHERE Stock &gt; 0</code>). <b>When not:</b> when each row needs C# validation, domain events or per-entity audit logic, or when other code in the same request holds those entities in memory — load, change and <code>SaveChanges()</code> there.</p>`,
        hi: `<p><b>Analogy — बिजली बोर्ड का tariff बदलना:</b> जब per unit rate बदलता है, बोर्ड हर घर जाकर हर bill हाथ से दोबारा नहीं लिखता। वो अपने billing system में <b>एक rule</b> चलाता है: "सारे domestic connections के लिए नया rate = पुराना rate + 10%"। पर आपकी table पर पहले से पड़ा छपा bill अब भी पुराना rate दिखाता है — वही stale tracked entity है।</p>
<ul>
<li><b>Syntax</b>: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m).SetProperty(p =&gt; p.UpdatedOn, today))</code>। कई <code>SetProperty</code> calls chain करो; value एक constant, एक variable, या row के अपने columns पर बना expression हो सकती है। Async: <code>ExecuteUpdateAsync</code>/<code>ExecuteDeleteAsync</code>।</li>
<li><b>SQL</b>: SQL Server को <code>UPDATE [o] SET ... FROM [Orders] AS [o] INNER JOIN ... WHERE ...</code> मिलता है — navigations पर filters JOINs या <code>EXISTS</code> बन जाते हैं, बिल्कुल वैसे जैसे एक DBA लिखता (नीचे देखो)। एक call <b>एक table</b> update करती है।</li>
<li><b>अभी चलता है</b>, अपने अलग statement की तरह, और affected rows लौटाता है। अगर आपने <code>BeginTransaction()</code> से transaction खोला है, तो यह उसमें शामिल होता है — जब इसे किसी <code>SaveChanges()</code> के साथ succeed या fail होना हो तब यही करो।</li>
<li><b>Change tracker अछूता</b>: पहले से load हुई entities पुरानी values रखती हैं। ऐसी stale entity पर बाद का <code>SaveChanges()</code> bulk बदलाव को overwrite कर सकता है या throw कर सकता है (puzzles देखो)। Bulk operations load करने से पहले चलाओ, नए context में चलाओ, या बाद में <code>ChangeTracker.Clear()</code> call करो।</li>
<li><b>SaveChanges pipeline नहीं चलती</b>: <code>SavingChanges</code> events, SaveChanges interceptors और <code>SaveChanges</code> override वाला audit code नहीं चलता — <code>UpdatedOn</code>/<code>UpdatedBy</code> खुद <code>SetProperty</code> calls में set करो। जब तक आप version को <code>Where</code> में न डालो, कोई concurrency check नहीं होता।</li>
<li><b>Query filters</b> लागू होते हैं (soft-deleted rows छूट जाती हैं; उन्हें शामिल करने के लिए <code>IgnoreQueryFilters()</code>)। <b>Cascade</b> सिर्फ़ database के <code>ON DELETE CASCADE</code> से होता है; FK पर cascade न हो तो children वाले parent को delete करना constraint error से fail होता है।</li>
</ul>
<p><b>कब use करें:</b> कई rows पर set-based बदलाव — price revisions, archiving, cleanup jobs, bulk में soft-delete, atomic counters (<code>Stock = Stock - 1 WHERE Stock &gt; 0</code>)। <b>कब नहीं:</b> जब हर row पर C# validation, domain events या per-entity audit logic चाहिए, या उसी request में दूसरा code उन entities को memory में रखे हुए है — वहाँ load करो, बदलो और <code>SaveChanges()</code> करो।</p>`,
        hg: `<p><b>Analogy — bijli board ka tariff badalna:</b> jab per unit rate badalta hai, board har ghar jaakar har bill haath se dobara nahi likhta. Woh apne billing system mein <b>ek rule</b> chalata hai: "saare domestic connections ke liye naya rate = purana rate + 10%". Par aapki table par pehle se pada chhapa bill ab bhi purana rate dikhata hai — wahi stale tracked entity hai.</p>
<ul>
<li><b>Syntax</b>: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m).SetProperty(p =&gt; p.UpdatedOn, today))</code>. Kai <code>SetProperty</code> calls chain karo; value ek constant, ek variable, ya row ke apne columns par bana expression ho sakti hai. Async: <code>ExecuteUpdateAsync</code>/<code>ExecuteDeleteAsync</code>.</li>
<li><b>SQL</b>: SQL Server ko <code>UPDATE [o] SET ... FROM [Orders] AS [o] INNER JOIN ... WHERE ...</code> milta hai — navigations par filters JOINs ya <code>EXISTS</code> ban jaate hain, bilkul waise jaise ek DBA likhta (neeche dekho). Ek call <b>ek table</b> update karti hai.</li>
<li><b>Abhi chalta hai</b>, apne alag statement ki tarah, aur affected rows lautaata hai. Agar aapne <code>BeginTransaction()</code> se transaction khola hai, to yeh usmein shaamil hota hai — jab ise kisi <code>SaveChanges()</code> ke saath succeed ya fail hona ho tab yahi karo.</li>
<li><b>Change tracker achhoota</b>: pehle se load hui entities purani values rakhti hain. Aisi stale entity par baad ka <code>SaveChanges()</code> bulk badlaav ko overwrite kar sakta hai ya throw kar sakta hai (puzzles dekho). Bulk operations load karne se pehle chalao, naye context mein chalao, ya baad mein <code>ChangeTracker.Clear()</code> call karo.</li>
<li><b>SaveChanges pipeline nahi chalti</b>: <code>SavingChanges</code> events, SaveChanges interceptors aur <code>SaveChanges</code> override wala audit code nahi chalta — <code>UpdatedOn</code>/<code>UpdatedBy</code> khud <code>SetProperty</code> calls mein set karo. Jab tak aap version ko <code>Where</code> mein na daalo, koi concurrency check nahi hota.</li>
<li><b>Query filters</b> laagu hote hain (soft-deleted rows chhoot jaati hain; unhe shaamil karne ke liye <code>IgnoreQueryFilters()</code>). <b>Cascade</b> sirf database ke <code>ON DELETE CASCADE</code> se hota hai; FK par cascade na ho to children wale parent ko delete karna constraint error se fail hota hai.</li>
</ul>
<p><b>Kab use karein:</b> kai rows par set-based badlaav — price revisions, archiving, cleanup jobs, bulk mein soft-delete, atomic counters (<code>Stock = Stock - 1 WHERE Stock &gt; 0</code>). <b>Kab nahi:</b> jab har row par C# validation, domain events ya per-entity audit logic chahiye, ya usi request mein doosra code un entities ko memory mein rakhe hue hai — wahan load karo, badlo aur <code>SaveChanges()</code> karo.</p>`
      },
      code: [{
        caption: {
          en: "The SQL Server SQL for ExecuteUpdate and ExecuteDelete (a demo interceptor prints the SQL instead of sending it)",
          hi: "ExecuteUpdate और ExecuteDelete का SQL Server SQL (demo interceptor SQL भेजने की बजाय print करता है)",
          hg: "ExecuteUpdate aur ExecuteDelete ka SQL Server SQL (demo interceptor SQL bhejne ki bajaay print karta hai)"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        expected: "UPDATE [p]\nSET [p].[Status] = N'Restock',\n    [p].[Price] = [p].[Price] * 1.1\nFROM [Products] AS [p]\nWHERE [p].[Stock] = 0\n-----\nUPDATE [o]\nSET [o].[Status] = N'Archived'\nFROM [Orders] AS [o]\nINNER JOIN [Customers] AS [c] ON [o].[CustomerId] = [c].[Id]\nWHERE [c].[City] = N'Nagpur'\n-----\nDELETE FROM [c]\nFROM [Customers] AS [c]\nWHERE NOT EXISTS (\n    SELECT 1\n    FROM [Orders] AS [o]\n    WHERE [c].[Id] = [o].[CustomerId])\n-----",
        src: `using System.Data.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;

var options = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlServer("Server=.;Database=Shop;Trusted_Connection=True;")   // dummy
    .AddInterceptors(new NoConnection(), new PrintSqlInsteadOfRunning())
    .Options;
using var db = new ShopContext(options);

// 10% price rise on everything out of stock, plus a constant column
db.Products
    .Where(p => p.Stock == 0)
    .ExecuteUpdate(s => s
        .SetProperty(p => p.Price, p => p.Price * 1.1m)
        .SetProperty(p => p.Status, "Restock"));

// Archive the orders of customers in one city: the navigation becomes a JOIN
db.Orders
    .Where(o => o.Customer.City == "Nagpur")
    .ExecuteUpdate(s => s.SetProperty(o => o.Status, "Archived"));

// Delete customers who never ordered: Any() becomes NOT EXISTS
db.Customers.Where(c => !c.Orders.Any()).ExecuteDelete();

/* Output:
UPDATE [p]
SET [p].[Status] = N'Restock',
    [p].[Price] = [p].[Price] * 1.1
FROM [Products] AS [p]
WHERE [p].[Stock] = 0
-----
UPDATE [o]
SET [o].[Status] = N'Archived'
FROM [Orders] AS [o]
INNER JOIN [Customers] AS [c] ON [o].[CustomerId] = [c].[Id]
WHERE [c].[City] = N'Nagpur'
-----
DELETE FROM [c]
FROM [Customers] AS [c]
WHERE NOT EXISTS (
    SELECT 1
    FROM [Orders] AS [o]
    WHERE [c].[Id] = [o].[CustomerId])
-----
*/

public class Product
{
    public int Id { get; set; }
    public decimal Price { get; set; }
    public int Stock { get; set; }
    public string Status { get; set; } = "";
}

public class Customer
{
    public int Id { get; set; }
    public string City { get; set; } = "";
    public List<Order> Orders { get; } = [];
}

public class Order
{
    public int Id { get; set; }
    public string Status { get; set; } = "";
    public int CustomerId { get; set; }
    public Customer Customer { get; set; } = null!;
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();
    protected override void OnModelCreating(ModelBuilder modelBuilder)
        => modelBuilder.Entity<Product>().Property(p => p.Price).HasPrecision(10, 2);
}

// ---- Demo plumbing: print the SQL instead of sending it, so no SQL Server is needed ----
public class NoConnection : DbConnectionInterceptor
{
    public override InterceptionResult ConnectionOpening(DbConnection c, ConnectionEventData e, InterceptionResult r)
        => InterceptionResult.Suppress();
    public override InterceptionResult ConnectionClosing(DbConnection c, ConnectionEventData e, InterceptionResult r)
        => InterceptionResult.Suppress();
}

public class PrintSqlInsteadOfRunning : DbCommandInterceptor
{
    public override InterceptionResult<int> NonQueryExecuting(DbCommand command, CommandEventData e, InterceptionResult<int> r)
    {
        Console.WriteLine(command.CommandText.Trim());
        Console.WriteLine("-----");
        return InterceptionResult<int>.SuppressWithResult(0);         // pretend: 0 rows affected
    }
}`
      }, {
        caption: {
          en: "What ExecuteUpdate/ExecuteDelete skip and respect, on in-memory SQLite: SavingChanges, query filters, database cascade",
          hi: "In-memory SQLite पर ExecuteUpdate/ExecuteDelete क्या skip करते हैं और क्या मानते हैं: SavingChanges, query filters, database cascade",
          hg: "In-memory SQLite par ExecuteUpdate/ExecuteDelete kya skip karte hain aur kya maante hain: SavingChanges, query filters, database cascade"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
        expected: "Price raised on 1 row(s); SavingChanges events = 0\nPrices: Pen=15, Ink=20, Book=50\nCustomers deleted = 1, orders left = 0",
        src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;

using var db = new ShopContext(options);
db.Database.EnsureCreated();
db.Products.AddRange(
    new Product { Name = "Pen", Price = 10, Stock = 0 },
    new Product { Name = "Ink", Price = 20, Stock = 0, IsDeleted = true },   // soft-deleted
    new Product { Name = "Book", Price = 50, Stock = 3 });
var oldCo = new Customer { Name = "Old Co" };
oldCo.Orders.Add(new Order());
oldCo.Orders.Add(new Order());
db.Customers.Add(oldCo);
db.SaveChanges();
db.ChangeTracker.Clear();

int savingEvents = 0;
db.SavingChanges += (_, _) => savingEvents++;

// Query filter (!IsDeleted) applies: Ink is skipped
int raised = db.Products
    .Where(p => p.Stock == 0)
    .ExecuteUpdate(s => s.SetProperty(p => p.Price, p => p.Price + 5));
Console.WriteLine($"Price raised on {raised} row(s); SavingChanges events = {savingEvents}");

var prices = db.Products.IgnoreQueryFilters().OrderBy(p => p.Id).Select(p => p.Name + "=" + p.Price);
Console.WriteLine("Prices: " + string.Join(", ", prices));

// The parent goes; its orders go too — because the DATABASE has ON DELETE CASCADE
int customers = db.Customers.Where(c => c.Name == "Old Co").ExecuteDelete();
Console.WriteLine($"Customers deleted = {customers}, orders left = {db.Orders.Count()}");

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public int Price { get; set; }
    public int Stock { get; set; }
    public bool IsDeleted { get; set; }
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
    public int CustomerId { get; set; }          // required FK: EF creates ON DELETE CASCADE
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        => modelBuilder.Entity<Product>().HasQueryFilter(p => !p.IsDeleted);
}`
      }, {
        caption: {
          en: "EF Core 10 (.NET 10): ExecuteUpdateAsync also accepts a normal lambda, so setters can be conditional (not compiled here — local SDK is .NET 9)",
          hi: "EF Core 10 (.NET 10): ExecuteUpdateAsync एक normal lambda भी लेता है, इसलिए setters conditional हो सकते हैं (यहाँ compile नहीं हुआ — local SDK .NET 9 है)",
          hg: "EF Core 10 (.NET 10): ExecuteUpdateAsync ek normal lambda bhi leta hai, isliye setters conditional ho sakte hain (yahan compile nahi hua — local SDK .NET 9 hai)"
        },
        check: "none",
        src: `// EF Core 10: the setters argument can be a regular lambda with statements.
// In EF Core 7-9 it had to be an expression tree, so an "if" was not possible here.
await db.Products
    .Where(p => p.Stock == 0)
    .ExecuteUpdateAsync(s =>
    {
        s.SetProperty(p => p.Status, "Restock");
        if (applyDiscount)
            s.SetProperty(p => p.Price, p => p.Price * 0.9m);
    });`
      }]
    },
    {
      id: "performance-in-code",
      depth: "detailed",
      title: {
        en: "Performance in code: compiled queries, indexes and paging SQL, no client evaluation, and a TL checklist",
        hi: "Code में performance: compiled queries, indexes और paging SQL, client evaluation नहीं, और एक TL checklist",
        hg: "Code mein performance: compiled queries, indexes aur paging SQL, client evaluation nahi, aur ek TL checklist"
      },
      body: {
        en: `<p><b>Analogy — a busy dabbawala route:</b> speed does not come from running faster. It comes from <b>fewer trips</b> (no N+1), <b>lighter boxes</b> (projections, no tracking), a <b>good coding system</b> on each box so nobody searches (indexes), and a route <b>planned once and reused every day</b> (compiled queries and cached query plans).</p>
<ul>
<li><b>Read path</b>: <code>AsNoTracking()</code> on read-only queries — or <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code> as the context default for a read-heavy API — plus projections and paging (<code>OrderBy</code> + <code>Skip</code>/<code>Take</code> → <code>OFFSET ... FETCH</code>; keyset paging for deep pages, Day 4).</li>
<li><b>Indexes</b>: EF creates indexes for keys and foreign keys only. Columns you filter or sort on need <code>HasIndex(...)</code>; on SQL Server you can add <code>IncludeProperties(...)</code> (covering index) and <code>HasFilter(...)</code> (filtered index). Then read the execution plan of the logged SQL — your SQL Server skill applies directly.</li>
<li><b>No client evaluation</b>: since EF Core 3.0, if a <code>Where</code>/<code>OrderBy</code> cannot be translated to SQL, EF <b>throws</b> instead of silently loading the whole table. Only the final <code>Select</code> may call C# methods. If you really need C# logic, filter in SQL first, then call <code>AsEnumerable()</code> explicitly.</li>
<li><b>Compiled queries</b>: EF already caches the translation of each query shape. <code>EF.CompileQuery</code>/<code>EF.CompileAsyncQuery</code> also skip the cache lookup (hashing and comparing the expression tree) — a small gain that matters only for very hot, simple queries. Measure with a benchmark before adding them.</li>
<li><b>Compiled model</b> (<code>dotnet ef dbcontext optimize</code>) is a different thing: it speeds up <b>startup</b> for models with hundreds of entities.</li>
<li><b>DbContext pooling</b> (<code>AddDbContextPool</code>, Day 5) reuses context instances under high load. <b>Async</b> (<code>ToListAsync</code>) does not make one query faster, but frees threads so the server handles more requests.</li>
<li><b>Big exports</b>: stream with <code>AsNoTracking()</code> + <code>AsAsyncEnumerable()</code> instead of <code>ToListAsync()</code>, so rows are processed one by one instead of all held in memory (no tracking, or the change tracker keeps every row anyway). Caveat: EF buffers the results itself when a retrying execution strategy is on, and for all but the last query of a split query (unless MARS is enabled).</li>
<li><b>See everything</b>: <code>LogTo</code> or the <code>Microsoft.EntityFrameworkCore.Database.Command</code> log category at Information; <code>EnableSensitiveDataLogging()</code> (shows parameter values) in development only.</li>
</ul>
<p><b>When to use:</b> the basics (no-tracking reads, projections, paging, indexes, no N+1) on every query; compiled queries, pooling and compiled models only where a profiler or benchmark shows the need. <b>When not:</b> do not micro-optimize before you have looked at the SQL and the execution plan — most EF slowness is a missing index, a missing filter, or too many round trips.</p>`,
        hi: `<p><b>Analogy — व्यस्त dabbawala route:</b> speed तेज़ दौड़ने से नहीं आती। वो आती है <b>कम चक्करों</b> से (N+1 नहीं), <b>हल्के डिब्बों</b> से (projections, no tracking), हर डिब्बे पर <b>अच्छे coding system</b> से ताकि कोई ढूँढता न फिरे (indexes), और <b>एक बार plan करके रोज़ दोहराए गए</b> route से (compiled queries और cached query plans)।</p>
<ul>
<li><b>Read path</b>: read-only queries पर <code>AsNoTracking()</code> — या read-heavy API के लिए context default के रूप में <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code> — साथ में projections और paging (<code>OrderBy</code> + <code>Skip</code>/<code>Take</code> → <code>OFFSET ... FETCH</code>; गहरे pages के लिए keyset paging, Day 4)।</li>
<li><b>Indexes</b>: EF सिर्फ़ keys और foreign keys के indexes बनाता है। जिन columns पर filter या sort करते हो, उन्हें <code>HasIndex(...)</code> चाहिए; SQL Server पर <code>IncludeProperties(...)</code> (covering index) और <code>HasFilter(...)</code> (filtered index) भी जोड़ सकते हो। फिर logged SQL का execution plan पढ़ो — आपकी SQL Server skill सीधे काम आती है।</li>
<li><b>Client evaluation नहीं</b>: EF Core 3.0 से, अगर कोई <code>Where</code>/<code>OrderBy</code> SQL में translate नहीं हो सकता, तो EF चुपचाप पूरी table load करने की बजाय <b>throw</b> करता है। सिर्फ़ final <code>Select</code> में C# methods call हो सकते हैं। सच में C# logic चाहिए, तो पहले SQL में filter करो, फिर साफ़-साफ़ <code>AsEnumerable()</code> call करो।</li>
<li><b>Compiled queries</b>: EF हर query shape का translation पहले से cache करता है। <code>EF.CompileQuery</code>/<code>EF.CompileAsyncQuery</code> cache lookup (expression tree की hashing और comparison) भी skip कर देते हैं — छोटा फ़ायदा, जो सिर्फ़ बहुत hot और simple queries में मायने रखता है। इन्हें जोड़ने से पहले benchmark से measure करो।</li>
<li><b>Compiled model</b> (<code>dotnet ef dbcontext optimize</code>) अलग चीज़ है: यह सैकड़ों entities वाले models का <b>startup</b> तेज़ करता है।</li>
<li><b>DbContext pooling</b> (<code>AddDbContextPool</code>, Day 5) high load में context instances दोबारा use करता है। <b>Async</b> (<code>ToListAsync</code>) एक query को तेज़ नहीं करता, पर threads खाली करता है ताकि server ज़्यादा requests संभाल सके।</li>
<li><b>बड़े exports</b>: <code>ToListAsync()</code> की बजाय <code>AsNoTracking()</code> + <code>AsAsyncEnumerable()</code> से stream करो, ताकि सारी rows memory में रखने की बजाय एक-एक करके process हों (tracking नहीं, वरना change tracker हर row फिर भी रख लेता है)। ध्यान दो: retrying execution strategy चालू हो तो EF results खुद buffer करता है, और split query में आख़िरी query को छोड़कर बाकी सबके results भी (जब तक MARS चालू न हो)।</li>
<li><b>सब कुछ देखो</b>: <code>LogTo</code> या Information level पर <code>Microsoft.EntityFrameworkCore.Database.Command</code> log category; <code>EnableSensitiveDataLogging()</code> (parameter values दिखाता है) सिर्फ़ development में।</li>
</ul>
<p><b>कब use करें:</b> basics (no-tracking reads, projections, paging, indexes, N+1 नहीं) हर query पर; compiled queries, pooling और compiled models सिर्फ़ वहाँ जहाँ profiler या benchmark ज़रूरत दिखाए। <b>कब नहीं:</b> SQL और execution plan देखने से पहले micro-optimize मत करो — EF की ज़्यादातर धीमापन missing index, missing filter, या बहुत ज़्यादा round trips से आता है।</p>`,
        hg: `<p><b>Analogy — vyast dabbawala route:</b> speed tez daudne se nahi aati. Woh aati hai <b>kam chakkaron</b> se (N+1 nahi), <b>halke dibbon</b> se (projections, no tracking), har dibbe par <b>achhe coding system</b> se taaki koi dhoondhta na phire (indexes), aur <b>ek baar plan karke roz dohraaye gaye</b> route se (compiled queries aur cached query plans).</p>
<ul>
<li><b>Read path</b>: read-only queries par <code>AsNoTracking()</code> — ya read-heavy API ke liye context default ke roop mein <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code> — saath mein projections aur paging (<code>OrderBy</code> + <code>Skip</code>/<code>Take</code> → <code>OFFSET ... FETCH</code>; gehre pages ke liye keyset paging, Day 4).</li>
<li><b>Indexes</b>: EF sirf keys aur foreign keys ke indexes banata hai. Jin columns par filter ya sort karte ho, unhe <code>HasIndex(...)</code> chahiye; SQL Server par <code>IncludeProperties(...)</code> (covering index) aur <code>HasFilter(...)</code> (filtered index) bhi jod sakte ho. Phir logged SQL ka execution plan padho — aapki SQL Server skill seedhe kaam aati hai.</li>
<li><b>Client evaluation nahi</b>: EF Core 3.0 se, agar koi <code>Where</code>/<code>OrderBy</code> SQL mein translate nahi ho sakta, to EF chupchaap poori table load karne ki bajaay <b>throw</b> karta hai. Sirf final <code>Select</code> mein C# methods call ho sakte hain. Sach mein C# logic chahiye, to pehle SQL mein filter karo, phir saaf-saaf <code>AsEnumerable()</code> call karo.</li>
<li><b>Compiled queries</b>: EF har query shape ka translation pehle se cache karta hai. <code>EF.CompileQuery</code>/<code>EF.CompileAsyncQuery</code> cache lookup (expression tree ki hashing aur comparison) bhi skip kar dete hain — chhota faayda, jo sirf bahut hot aur simple queries mein maayne rakhta hai. Inhe jodne se pehle benchmark se measure karo.</li>
<li><b>Compiled model</b> (<code>dotnet ef dbcontext optimize</code>) alag cheez hai: yeh saikdon entities wale models ka <b>startup</b> tez karta hai.</li>
<li><b>DbContext pooling</b> (<code>AddDbContextPool</code>, Day 5) high load mein context instances dobara use karta hai. <b>Async</b> (<code>ToListAsync</code>) ek query ko tez nahi karta, par threads khaali karta hai taaki server zyaada requests sambhaal sake.</li>
<li><b>Bade exports</b>: <code>ToListAsync()</code> ki bajaay <code>AsNoTracking()</code> + <code>AsAsyncEnumerable()</code> se stream karo, taaki saari rows memory mein rakhne ki bajaay ek-ek karke process hon (tracking nahi, warna change tracker har row phir bhi rakh leta hai). Dhyaan do: retrying execution strategy chaalu ho to EF results khud buffer karta hai, aur split query mein aakhri query ko chhodkar baaki sabke results bhi (jab tak MARS chaalu na ho).</li>
<li><b>Sab kuch dekho</b>: <code>LogTo</code> ya Information level par <code>Microsoft.EntityFrameworkCore.Database.Command</code> log category; <code>EnableSensitiveDataLogging()</code> (parameter values dikhata hai) sirf development mein.</li>
</ul>
<p><b>Kab use karein:</b> basics (no-tracking reads, projections, paging, indexes, N+1 nahi) har query par; compiled queries, pooling aur compiled models sirf wahan jahan profiler ya benchmark zaroorat dikhaaye. <b>Kab nahi:</b> SQL aur execution plan dekhne se pehle micro-optimize mat karo — EF ka zyaadatar dheemapan missing index, missing filter, ya bahut zyaada round trips se aata hai.</p>`
      },
      code: [{
        caption: {
          en: "Compiled queries with EF.CompileQuery and EF.CompileAsyncQuery (in-memory SQLite)",
          hi: "EF.CompileQuery और EF.CompileAsyncQuery से compiled queries (in-memory SQLite)",
          hg: "EF.CompileQuery aur EF.CompileAsyncQuery se compiled queries (in-memory SQLite)"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
        expected: "Low stock: Ink, Pen\nBy name:   Book (stock 12)\nIn stock:  Book\nIn stock:  Pen",
        src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    setup.Products.AddRange(
        new Product { Name = "Pen", Stock = 5 },
        new Product { Name = "Ink", Stock = 0 },
        new Product { Name = "Book", Stock = 12 });
    setup.SaveChanges();
}

using var db = new ShopContext(options);

// Sync: returns IEnumerable<Product>. Take() keeps the return type IQueryable<T>.
var lowStock = Queries.LowStock(db, 10);
Console.WriteLine("Low stock: " + string.Join(", ", lowStock.Select(p => p.Name)));

// Async single result: returns Task<Product?>
var book = await Queries.ByNameAsync(db, "Book");
Console.WriteLine($"By name:   {book?.Name} (stock {book?.Stock})");

// Async sequence: returns IAsyncEnumerable<string>
await foreach (var name in Queries.InStockNamesAsync(db))
    Console.WriteLine("In stock:  " + name);

// Compile once (static fields), call many times with different parameters
static class Queries
{
    public static readonly Func<ShopContext, int, IEnumerable<Product>> LowStock =
        EF.CompileQuery((ShopContext db, int max) =>
            db.Products.AsNoTracking().Where(p => p.Stock < max).OrderBy(p => p.Stock).Take(50));

    public static readonly Func<ShopContext, string, Task<Product?>> ByNameAsync =
        EF.CompileAsyncQuery((ShopContext db, string name) =>
            db.Products.AsNoTracking().FirstOrDefault(p => p.Name == name));

    public static readonly Func<ShopContext, IAsyncEnumerable<string>> InStockNamesAsync =
        EF.CompileAsyncQuery((ShopContext db) =>
            db.Products.Where(p => p.Stock > 0).OrderBy(p => p.Name).Select(p => p.Name));
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public int Stock { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
}`
      }, {
        caption: {
          en: "A covering, filtered index from the model, and the OFFSET/FETCH paging SQL (SQL Server, no database needed)",
          hi: "Model से बना covering, filtered index, और OFFSET/FETCH वाला paging SQL (SQL Server, database की ज़रूरत नहीं)",
          hg: "Model se bana covering, filtered index, aur OFFSET/FETCH wala paging SQL (SQL Server, database ki zaroorat nahi)"
        },
        check: "run",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        expected: "CREATE TABLE [Orders] (\n    [Id] int NOT NULL IDENTITY,\n    [Status] nvarchar(20) NOT NULL,\n    [PlacedOn] datetime2 NOT NULL,\n    [Total] decimal(10,2) NOT NULL,\n    [Notes] nvarchar(max) NULL,\n    CONSTRAINT [PK_Orders] PRIMARY KEY ([Id])\n);\nGO\nCREATE INDEX [IX_Orders_Status_PlacedOn] ON [Orders] ([Status], [PlacedOn]) INCLUDE ([Total]) WHERE [Status] = 'Open';\nGO\n-----\nDECLARE @__p_0 int = 40;\nDECLARE @__p_1 int = 20;\n\nSELECT [o].[Id], [o].[PlacedOn], [o].[Total]\nFROM [Orders] AS [o]\nWHERE [o].[Status] = N'Open'\nORDER BY [o].[PlacedOn] DESC, [o].[Id]\nOFFSET @__p_0 ROWS FETCH NEXT @__p_1 ROWS ONLY",
        src: `using Microsoft.EntityFrameworkCore;

var options = new DbContextOptionsBuilder<ShopContext>()
    .UseSqlServer("Server=.;Database=Shop;Trusted_Connection=True;")      // dummy: nothing connects
    .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)           // read-heavy context default
    .Options;
using var db = new ShopContext(options);

// The DDL, without blank lines
var ddl = db.Database.GenerateCreateScript().Split('\\n').Where(l => !string.IsNullOrWhiteSpace(l));
Console.WriteLine(string.Join("\\n", ddl));
Console.WriteLine("-----");

// Page 3 of the open-orders grid: projection + stable sort + Skip/Take
int page = 3, size = 20;
var grid = db.Orders
    .Where(o => o.Status == "Open")
    .OrderByDescending(o => o.PlacedOn).ThenBy(o => o.Id)               // unique tie-breaker
    .Select(o => new { o.Id, o.PlacedOn, o.Total })
    .Skip((page - 1) * size)
    .Take(size);
Console.WriteLine(grid.ToQueryString());

/* Output on EF Core 9 (EF Core 10 uses simpler parameter names, e.g. @p instead of @__p_0):
CREATE TABLE [Orders] (
    [Id] int NOT NULL IDENTITY,
    [Status] nvarchar(20) NOT NULL,
    [PlacedOn] datetime2 NOT NULL,
    [Total] decimal(10,2) NOT NULL,
    [Notes] nvarchar(max) NULL,
    CONSTRAINT [PK_Orders] PRIMARY KEY ([Id])
);
GO
CREATE INDEX [IX_Orders_Status_PlacedOn] ON [Orders] ([Status], [PlacedOn]) INCLUDE ([Total]) WHERE [Status] = 'Open';
GO
-----
DECLARE @__p_0 int = 40;
DECLARE @__p_1 int = 20;

SELECT [o].[Id], [o].[PlacedOn], [o].[Total]
FROM [Orders] AS [o]
WHERE [o].[Status] = N'Open'
ORDER BY [o].[PlacedOn] DESC, [o].[Id]
OFFSET @__p_0 ROWS FETCH NEXT @__p_1 ROWS ONLY
*/

public class Order
{
    public int Id { get; set; }
    public string Status { get; set; } = "";
    public DateTime PlacedOn { get; set; }
    public decimal Total { get; set; }
    public string? Notes { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Order> Orders => Set<Order>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        => modelBuilder.Entity<Order>(order =>
        {
            order.Property(o => o.Status).HasMaxLength(20);
            order.Property(o => o.Total).HasPrecision(10, 2);
            order.HasIndex(o => new { o.Status, o.PlacedOn })             // seek on Status, sorted by date
                 .IncludeProperties(o => o.Total)                         // covering: no key lookup
                 .HasFilter("[Status] = 'Open'");                         // filtered: only open orders
        });
}`
      }]
    },
  ],
  qa: [
    {
      id: "n-plus-one",
      depth: "short",
      q: "What is the N+1 problem in EF Core, and how do you fix it?",
      answer: "N+1 is one query for a list plus one per row, usually from lazy loading or a query in a loop. Fix: load in one go — Include, a projection, or one batch query.",
      meaning: {
        hi: "N+1 मतलब list के लिए एक query और हर row के लिए एक और query, आमतौर पर lazy loading या loop के अंदर लिखी query से। Fix: एक बार में load करो — Include, projection, या एक batch query।",
        hg: "N+1 matlab list ke liye ek query aur har row ke liye ek aur query, aamtaur par lazy loading ya loop ke andar likhi query se. Fix: ek baar mein load karo — Include, projection, ya ek batch query."
      },
      explain: {
        en: `<ul>
<li>Example: show 100 customers with their order count. <code>foreach</code> + <code>c.Orders.Count</code> with lazy loading = 1 + 100 queries.</li>
<li>Fixes, each sending one SQL: <code>Include(c =&gt; c.Orders)</code> (JOIN, full entities), <code>Select(c =&gt; new { c.Name, Count = c.Orders.Count })</code> (a <code>COUNT(*)</code> subquery, only numbers come back). Or two queries in total: parents, then one <code>Where(o =&gt; ids.Contains(o.CustomerId))</code> for all children.</li>
<li>How you <b>find</b> it: count commands in the log during development; in production look for the same statement repeating in Query Store or Application Insights.</li>
</ul>
<p>Follow-up: "Is Include always the answer?" — No. Several collection Includes can cause a cartesian explosion; then a projection or <code>AsSplitQuery()</code> is better.</p>
<p>TL angle: add a query-count assertion to an integration test for the hot endpoints, so N+1 cannot come back silently.</p>`,
        hi: `<ul>
<li>उदाहरण: 100 customers उनके order count के साथ दिखाने हैं। Lazy loading के साथ <code>foreach</code> + <code>c.Orders.Count</code> = 1 + 100 queries।</li>
<li>Fixes, हर एक एक ही SQL भेजता है: <code>Include(c =&gt; c.Orders)</code> (JOIN, पूरी entities), <code>Select(c =&gt; new { c.Name, Count = c.Orders.Count })</code> (एक <code>COUNT(*)</code> subquery, सिर्फ़ numbers वापस आते हैं)। या कुल दो queries: पहले parents, फिर सारे children के लिए एक <code>Where(o =&gt; ids.Contains(o.CustomerId))</code>।</li>
<li>इसे <b>पकड़ें</b> कैसे: development में log में commands गिनो; production में Query Store या Application Insights में एक ही statement बार-बार दोहराता दिखे तो वही है।</li>
</ul>
<p>Follow-up: "क्या Include हमेशा जवाब है?" — नहीं। कई collection Includes cartesian explosion कर सकते हैं; तब projection या <code>AsSplitQuery()</code> बेहतर है।</p>
<p>TL angle: hot endpoints के integration test में query-count assertion जोड़ो, ताकि N+1 चुपचाप वापस न आ सके।</p>`,
        hg: `<ul>
<li>Udaaharan: 100 customers unke order count ke saath dikhaane hain. Lazy loading ke saath <code>foreach</code> + <code>c.Orders.Count</code> = 1 + 100 queries.</li>
<li>Fixes, har ek ek hi SQL bhejta hai: <code>Include(c =&gt; c.Orders)</code> (JOIN, poori entities), <code>Select(c =&gt; new { c.Name, Count = c.Orders.Count })</code> (ek <code>COUNT(*)</code> subquery, sirf numbers wapas aate hain). Ya kul do queries: pehle parents, phir saare children ke liye ek <code>Where(o =&gt; ids.Contains(o.CustomerId))</code>.</li>
<li>Ise <b>pakdein</b> kaise: development mein log mein commands gino; production mein Query Store ya Application Insights mein ek hi statement baar-baar dohraata dikhe to wahi hai.</li>
</ul>
<p>Follow-up: "Kya Include hamesha jawaab hai?" — Nahi. Kai collection Includes cartesian explosion kar sakte hain; tab projection ya <code>AsSplitQuery()</code> behtar hai.</p>
<p>TL angle: hot endpoints ke integration test mein query-count assertion jodo, taaki N+1 chupchaap wapas na aa sake.</p>`
      }
    },
    {
      id: "see-generated-sql",
      depth: "short",
      q: "How do you see the SQL that EF Core generates?",
      answer: "ToQueryString() shows one query's SQL without running it; LogTo or the Database.Command log category prints every command EF sends. In production, Query Store or Application Insights, with TagWith to spot my queries.",
      meaning: {
        hi: "ToQueryString() एक query का SQL बिना चलाए दिखाता है; LogTo या Database.Command log category EF का भेजा हर command print करती है। Production में Query Store या Application Insights, और अपनी queries पहचानने के लिए TagWith।",
        hg: "ToQueryString() ek query ka SQL bina chalaaye dikhata hai; LogTo ya Database.Command log category EF ka bheja har command print karti hai. Production mein Query Store ya Application Insights, aur apni queries pehchaanne ke liye TagWith."
      },
      explain: {
        en: `<ul>
<li><code>query.ToQueryString()</code> — great in unit tests and while writing a query; it does not execute.</li>
<li><code>optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information)</code>, or in ASP.NET Core set the log level of <code>Microsoft.EntityFrameworkCore.Database.Command</code> to Information — every command with its duration.</li>
<li><code>EnableSensitiveDataLogging()</code> adds parameter values to the log — development only, because it can log personal data.</li>
<li><code>TagWith("Orders page")</code> puts a <code>-- Orders page</code> comment at the top of the SQL, so you can find it in Query Store, Extended Events or Profiler.</li>
<li>Then use your SQL Server skills: copy the SQL into SSMS, look at the actual execution plan, check missing indexes, scans vs seeks, and row estimates.</li>
</ul>
<p>Follow-up: "Is ToQueryString exactly what runs?" — Treat it as a debugging aid: the query text matches, parameters are shown as <code>DECLARE</code> lines, and for a split query it shows only the first SQL. The command log shows what really ran.</p>`,
        hi: `<ul>
<li><code>query.ToQueryString()</code> — unit tests में और query लिखते समय बहुत काम का; यह execute नहीं करता।</li>
<li><code>optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information)</code>, या ASP.NET Core में <code>Microsoft.EntityFrameworkCore.Database.Command</code> का log level Information रखो — हर command उसकी duration के साथ।</li>
<li><code>EnableSensitiveDataLogging()</code> log में parameter values जोड़ता है — सिर्फ़ development में, क्योंकि यह personal data log कर सकता है।</li>
<li><code>TagWith("Orders page")</code> SQL के ऊपर एक <code>-- Orders page</code> comment लगाता है, ताकि Query Store, Extended Events या Profiler में उसे ढूँढ सको।</li>
<li>फिर अपनी SQL Server skills लगाओ: SQL को SSMS में copy करो, actual execution plan देखो, missing indexes, scans बनाम seeks, और row estimates check करो।</li>
</ul>
<p>Follow-up: "क्या ToQueryString बिल्कुल वही है जो चलता है?" — इसे debugging की मदद समझो: query text वही होता है, parameters <code>DECLARE</code> lines की तरह दिखते हैं, और split query में सिर्फ़ पहला SQL दिखता है। असल में क्या चला, वो command log बताता है।</p>`,
        hg: `<ul>
<li><code>query.ToQueryString()</code> — unit tests mein aur query likhte samay bahut kaam ka; yeh execute nahi karta.</li>
<li><code>optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information)</code>, ya ASP.NET Core mein <code>Microsoft.EntityFrameworkCore.Database.Command</code> ka log level Information rakho — har command uski duration ke saath.</li>
<li><code>EnableSensitiveDataLogging()</code> log mein parameter values jodta hai — sirf development mein, kyunki yeh personal data log kar sakta hai.</li>
<li><code>TagWith("Orders page")</code> SQL ke upar ek <code>-- Orders page</code> comment lagata hai, taaki Query Store, Extended Events ya Profiler mein use dhoondh sako.</li>
<li>Phir apni SQL Server skills lagao: SQL ko SSMS mein copy karo, actual execution plan dekho, missing indexes, scans vs seeks, aur row estimates check karo.</li>
</ul>
<p>Follow-up: "Kya ToQueryString bilkul wahi hai jo chalta hai?" — Ise debugging ki madad samjho: query text wahi hota hai, parameters <code>DECLARE</code> lines ki tarah dikhte hain, aur split query mein sirf pehla SQL dikhta hai. Asal mein kya chala, woh command log batata hai.</p>`
      }
    },
    {
      id: "projection-dto",
      depth: "short",
      q: "Why project to a DTO with Select instead of loading full entities?",
      answer: "A projection selects only the needed columns, computes counts and sums in SQL, and is not tracked — less data, less memory. It also stops entities leaking extra columns or cycles into the API.",
      meaning: {
        hi: "Projection सिर्फ़ ज़रूरी columns select करता है, counts और sums SQL में निकालता है, और track नहीं होता — कम data, कम memory। साथ ही entities के extra columns या cycles API में leak नहीं होते।",
        hg: "Projection sirf zaroori columns select karta hai, counts aur sums SQL mein nikaalta hai, aur track nahi hota — kam data, kam memory. Saath hi entities ke extra columns ya cycles API mein leak nahi hote."
      },
      explain: {
        en: `<ul>
<li>Entity query: <code>SELECT [Id], [City], [Name], [Notes] ...</code> — every column, plus a change-tracker snapshot per row.</li>
<li>Projection: <code>SELECT [c].[Name], (SELECT COUNT(*) ...), (SELECT COALESCE(SUM(...), 0.0) ...)</code> — only what the screen shows.</li>
<li>Fewer columns can let SQL Server use a covering index instead of a key lookup.</li>
<li>No <code>Include</code> needed; navigations inside <code>Select</code> are translated automatically.</li>
</ul>
<p>Follow-up: "Is an entity inside a projection tracked?" — Yes. <code>Select(c =&gt; new { Customer = c, ... })</code> tracks the customer; scalar fields are not tracked.</p>
<p>Follow-up: "When would you not project?" — when you are going to modify and save the entity.</p>`,
        hi: `<ul>
<li>Entity query: <code>SELECT [Id], [City], [Name], [Notes] ...</code> — हर column, साथ में हर row का change-tracker snapshot।</li>
<li>Projection: <code>SELECT [c].[Name], (SELECT COUNT(*) ...), (SELECT COALESCE(SUM(...), 0.0) ...)</code> — सिर्फ़ वही जो screen दिखाती है।</li>
<li>कम columns से SQL Server key lookup की बजाय covering index use कर सकता है।</li>
<li><code>Include</code> की ज़रूरत नहीं; <code>Select</code> के अंदर navigations अपने-आप translate होते हैं।</li>
</ul>
<p>Follow-up: "क्या projection के अंदर रखी entity track होती है?" — हाँ। <code>Select(c =&gt; new { Customer = c, ... })</code> customer को track करता है; scalar fields track नहीं होते।</p>
<p>Follow-up: "Projection कब नहीं करोगे?" — जब entity को बदलकर save करना हो।</p>`,
        hg: `<ul>
<li>Entity query: <code>SELECT [Id], [City], [Name], [Notes] ...</code> — har column, saath mein har row ka change-tracker snapshot.</li>
<li>Projection: <code>SELECT [c].[Name], (SELECT COUNT(*) ...), (SELECT COALESCE(SUM(...), 0.0) ...)</code> — sirf wahi jo screen dikhati hai.</li>
<li>Kam columns se SQL Server key lookup ki bajaay covering index use kar sakta hai.</li>
<li><code>Include</code> ki zaroorat nahi; <code>Select</code> ke andar navigations apne-aap translate hote hain.</li>
</ul>
<p>Follow-up: "Kya projection ke andar rakhi entity track hoti hai?" — Haan. <code>Select(c =&gt; new { Customer = c, ... })</code> customer ko track karta hai; scalar fields track nahi hote.</p>
<p>Follow-up: "Projection kab nahi karoge?" — jab entity ko badalkar save karna ho.</p>`
      }
    },
    {
      id: "raw-sql-safe",
      depth: "short",
      q: "How do you run raw SQL in EF Core without SQL injection? FromSql vs FromSqlRaw?",
      answer: "FromSql (formerly FromSqlInterpolated) turns each interpolated value into a DbParameter, so it is safe. FromSqlRaw takes plain text — pass values through {0} placeholders or SqlParameter, never by concatenation.",
      meaning: {
        hi: "FromSql (पहले FromSqlInterpolated) हर interpolated value को DbParameter बना देता है, इसलिए safe है। FromSqlRaw plain text लेता है — values {0} placeholders या SqlParameter से दो, string जोड़कर कभी नहीं।",
        hg: "FromSql (pehle FromSqlInterpolated) har interpolated value ko DbParameter bana deta hai, isliye safe hai. FromSqlRaw plain text leta hai — values {0} placeholders ya SqlParameter se do, string jodkar kabhi nahi."
      },
      explain: {
        en: `<ul>
<li><code>FromSql($"SELECT * FROM Customers WHERE City = {city}")</code> → SQL text has <code>@p0</code>; the value travels separately. Same for <code>ExecuteSql</code> and <code>SqlQuery</code>.</li>
<li><code>FromSqlRaw("... WHERE City = '" + city + "'")</code> → the input becomes part of the SQL. Input <code>Pune' OR '1'='1</code> returns every row (see the puzzle).</li>
<li>The analyzer warning <b>EF1002</b> flags interpolated strings passed to the <code>Raw</code> methods. On EF Core 9 it does not catch <code>+</code> concatenation; EF Core 10 adds that warning. Code review must still check.</li>
<li>Identifiers (table/column names, sort direction) cannot be parameters — map user choices through an allow-list.</li>
</ul>
<p>Follow-up: "Can you compose LINQ over FromSql?" — Yes, if the SQL is a composable <code>SELECT</code>; EF wraps it in a subquery. Not over <code>EXEC</code> — to add LINQ after a stored procedure, call <code>AsEnumerable()</code> first.</p>`,
        hi: `<ul>
<li><code>FromSql($"SELECT * FROM Customers WHERE City = {city}")</code> → SQL text में <code>@p0</code> होता है; value अलग से जाती है। <code>ExecuteSql</code> और <code>SqlQuery</code> के लिए भी यही।</li>
<li><code>FromSqlRaw("... WHERE City = '" + city + "'")</code> → input SQL का हिस्सा बन जाता है। Input <code>Pune' OR '1'='1</code> हर row लौटा देता है (puzzle देखो)।</li>
<li>Analyzer warning <b>EF1002</b> <code>Raw</code> methods को दी गई interpolated strings को flag करता है। EF Core 9 पर यह <code>+</code> से जोड़ना नहीं पकड़ता; EF Core 10 वो warning भी जोड़ता है। Code review को फिर भी check करना है।</li>
<li>Identifiers (table/column names, sort direction) parameters नहीं बन सकते — user की choices को एक allow-list से map करो।</li>
</ul>
<p>Follow-up: "क्या FromSql के ऊपर LINQ compose कर सकते हैं?" — हाँ, अगर SQL एक composable <code>SELECT</code> है; EF उसे subquery में लपेटता है। <code>EXEC</code> के ऊपर नहीं — stored procedure के बाद LINQ जोड़ना हो तो पहले <code>AsEnumerable()</code> call करो।</p>`,
        hg: `<ul>
<li><code>FromSql($"SELECT * FROM Customers WHERE City = {city}")</code> → SQL text mein <code>@p0</code> hota hai; value alag se jaati hai. <code>ExecuteSql</code> aur <code>SqlQuery</code> ke liye bhi yahi.</li>
<li><code>FromSqlRaw("... WHERE City = '" + city + "'")</code> → input SQL ka hissa ban jaata hai. Input <code>Pune' OR '1'='1</code> har row lauta deta hai (puzzle dekho).</li>
<li>Analyzer warning <b>EF1002</b> <code>Raw</code> methods ko di gayi interpolated strings ko flag karta hai. EF Core 9 par yeh <code>+</code> se jodna nahi pakadta; EF Core 10 woh warning bhi jodta hai. Code review ko phir bhi check karna hai.</li>
<li>Identifiers (table/column names, sort direction) parameters nahi ban sakte — user ki choices ko ek allow-list se map karo.</li>
</ul>
<p>Follow-up: "Kya FromSql ke upar LINQ compose kar sakte hain?" — Haan, agar SQL ek composable <code>SELECT</code> hai; EF use subquery mein lapetta hai. <code>EXEC</code> ke upar nahi — stored procedure ke baad LINQ jodna ho to pehle <code>AsEnumerable()</code> call karo.</p>`
      }
    },
    {
      id: "transactions",
      depth: "short",
      q: "How do transactions work in EF Core? When do you need BeginTransaction?",
      answer: "Each SaveChanges is atomic on its own. I use BeginTransaction when several SaveChanges, ExecuteUpdate or raw SQL calls must commit or roll back together — inside the execution strategy when retries are on.",
      meaning: {
        hi: "हर SaveChanges अपने-आप में atomic है। BeginTransaction तब use करता हूँ जब कई SaveChanges, ExecuteUpdate या raw SQL calls को साथ में commit या rollback होना हो — retries चालू हों तो execution strategy के अंदर।",
        hg: "Har SaveChanges apne-aap mein atomic hai. BeginTransaction tab use karta hoon jab kai SaveChanges, ExecuteUpdate ya raw SQL calls ko saath mein commit ya rollback hona ho — retries chaalu hon to execution strategy ke andar."
      },
      explain: {
        en: `<ul>
<li>Pattern: <code>using var tx = db.Database.BeginTransaction();</code> → work → <code>tx.Commit();</code>. No <code>Commit()</code> = rollback on dispose.</li>
<li><code>ExecuteUpdate</code>, <code>ExecuteDelete</code> and <code>ExecuteSql</code> run immediately, outside <code>SaveChanges</code> — an explicit transaction is how you tie them to it.</li>
<li>Each <code>SaveChanges()</code> inside your transaction creates a savepoint (EF Core 5+), so a failed one does not undo the earlier steps.</li>
<li>Pass an isolation level when you need one: <code>BeginTransaction(IsolationLevel.Serializable)</code>; otherwise you get the database default (Read Committed on SQL Server).</li>
</ul>
<p>Follow-up: "What about the outbox pattern?" — writing the business row and the outbox message in the same transaction is exactly this use case (Day 16).</p>
<p>TL angle: keep transactions short; never call an external API or send an email while a transaction holds locks.</p>`,
        hi: `<ul>
<li>Pattern: <code>using var tx = db.Database.BeginTransaction();</code> → काम → <code>tx.Commit();</code>। <code>Commit()</code> नहीं = dispose पर rollback।</li>
<li><code>ExecuteUpdate</code>, <code>ExecuteDelete</code> और <code>ExecuteSql</code> तुरंत चलते हैं, <code>SaveChanges</code> के बाहर — उन्हें उसके साथ बाँधने का तरीका explicit transaction है।</li>
<li>आपके transaction के अंदर हर <code>SaveChanges()</code> एक savepoint बनाता है (EF Core 5+), इसलिए एक fail हो तो पहले के steps undo नहीं होते।</li>
<li>ज़रूरत हो तो isolation level दो: <code>BeginTransaction(IsolationLevel.Serializable)</code>; वरना database का default मिलता है (SQL Server पर Read Committed)।</li>
</ul>
<p>Follow-up: "Outbox pattern का क्या?" — business row और outbox message को एक ही transaction में लिखना ठीक यही use case है (Day 16)।</p>
<p>TL angle: transactions छोटे रखो; जब transaction locks पकड़े हो तब कभी external API call या email मत भेजो।</p>`,
        hg: `<ul>
<li>Pattern: <code>using var tx = db.Database.BeginTransaction();</code> → kaam → <code>tx.Commit();</code>. <code>Commit()</code> nahi = dispose par rollback.</li>
<li><code>ExecuteUpdate</code>, <code>ExecuteDelete</code> aur <code>ExecuteSql</code> turant chalte hain, <code>SaveChanges</code> ke baahar — unhe uske saath baandhne ka tareeka explicit transaction hai.</li>
<li>Aapke transaction ke andar har <code>SaveChanges()</code> ek savepoint banata hai (EF Core 5+), isliye ek fail ho to pehle ke steps undo nahi hote.</li>
<li>Zaroorat ho to isolation level do: <code>BeginTransaction(IsolationLevel.Serializable)</code>; warna database ka default milta hai (SQL Server par Read Committed).</li>
</ul>
<p>Follow-up: "Outbox pattern ka kya?" — business row aur outbox message ko ek hi transaction mein likhna theek yahi use case hai (Day 16).</p>
<p>TL angle: transactions chhote rakho; jab transaction locks pakde ho tab kabhi external API call ya email mat bhejo.</p>`
      }
    },
    {
      id: "concurrency",
      depth: "short",
      q: "How do you handle concurrency conflicts in EF Core?",
      answer: "With optimistic concurrency: a rowversion or concurrency token goes into the UPDATE's WHERE. If no row matches, EF throws DbUpdateConcurrencyException, and I reload, overwrite or merge as the business decides.",
      meaning: {
        hi: "Optimistic concurrency से: rowversion या concurrency token UPDATE के WHERE में जाता है। कोई row match न हो तो EF DbUpdateConcurrencyException throw करता है, और business के फ़ैसले के हिसाब से मैं reload, overwrite या merge करता हूँ।",
        hg: "Optimistic concurrency se: rowversion ya concurrency token UPDATE ke WHERE mein jaata hai. Koi row match na ho to EF DbUpdateConcurrencyException throw karta hai, aur business ke faisle ke hisaab se main reload, overwrite ya merge karta hoon."
      },
      explain: {
        en: `<ul>
<li>SQL Server: <code>[Timestamp] public byte[] Version { get; set; }</code> → <code>rowversion</code>. EF sends <code>UPDATE ... OUTPUT INSERTED.[Version] WHERE [Id] = @p1 AND [Version] = @p2</code>.</li>
<li>In the <code>catch</code>: <code>ex.Entries</code> → <code>GetDatabaseValues()</code>; <b>store wins</b> = <code>Reload()</code>; <b>client wins</b> = <code>OriginalValues.SetValues(dbValues)</code> and save again; <b>merge</b> = decide per property or ask the user.</li>
<li>Default EF behaviour without a token is <b>last write wins</b> — the lost update happens silently.</li>
</ul>
<p>Follow-up: "Optimistic vs pessimistic?" — Optimistic assumes conflicts are rare and checks at save time (no locks held while the user edits). Pessimistic locks the row first (<code>UPDLOCK</code>/<code>SELECT ... FOR UPDATE</code>) — safer for very hot rows, but it blocks others and needs a transaction.</p>
<p>Follow-up: "How does the API return it?" — <code>409 Conflict</code>, or <code>412 Precondition Failed</code> when you use ETag/<code>If-Match</code>.</p>`,
        hi: `<ul>
<li>SQL Server: <code>[Timestamp] public byte[] Version { get; set; }</code> → <code>rowversion</code>। EF भेजता है <code>UPDATE ... OUTPUT INSERTED.[Version] WHERE [Id] = @p1 AND [Version] = @p2</code>।</li>
<li><code>catch</code> में: <code>ex.Entries</code> → <code>GetDatabaseValues()</code>; <b>store wins</b> = <code>Reload()</code>; <b>client wins</b> = <code>OriginalValues.SetValues(dbValues)</code> और फिर से save; <b>merge</b> = हर property के लिए तय करो या user से पूछो।</li>
<li>Token के बिना EF का default है <b>last write wins</b> — lost update चुपचाप हो जाता है।</li>
</ul>
<p>Follow-up: "Optimistic बनाम pessimistic?" — Optimistic मानता है कि conflicts कम होते हैं और save के समय check करता है (user के edit करते समय कोई lock नहीं)। Pessimistic पहले row lock करता है (<code>UPDLOCK</code>/<code>SELECT ... FOR UPDATE</code>) — बहुत hot rows के लिए safer, पर दूसरों को रोकता है और transaction चाहिए।</p>
<p>Follow-up: "API इसे कैसे लौटाती है?" — <code>409 Conflict</code>, या ETag/<code>If-Match</code> use करते हो तो <code>412 Precondition Failed</code>।</p>`,
        hg: `<ul>
<li>SQL Server: <code>[Timestamp] public byte[] Version { get; set; }</code> → <code>rowversion</code>. EF bhejta hai <code>UPDATE ... OUTPUT INSERTED.[Version] WHERE [Id] = @p1 AND [Version] = @p2</code>.</li>
<li><code>catch</code> mein: <code>ex.Entries</code> → <code>GetDatabaseValues()</code>; <b>store wins</b> = <code>Reload()</code>; <b>client wins</b> = <code>OriginalValues.SetValues(dbValues)</code> aur phir se save; <b>merge</b> = har property ke liye tay karo ya user se poochho.</li>
<li>Token ke bina EF ka default hai <b>last write wins</b> — lost update chupchaap ho jaata hai.</li>
</ul>
<p>Follow-up: "Optimistic vs pessimistic?" — Optimistic maanta hai ki conflicts kam hote hain aur save ke samay check karta hai (user ke edit karte samay koi lock nahi). Pessimistic pehle row lock karta hai (<code>UPDLOCK</code>/<code>SELECT ... FOR UPDATE</code>) — bahut hot rows ke liye safer, par doosron ko rokta hai aur transaction chahiye.</p>
<p>Follow-up: "API ise kaise lautaati hai?" — <code>409 Conflict</code>, ya ETag/<code>If-Match</code> use karte ho to <code>412 Precondition Failed</code>.</p>`
      }
    },
    {
      id: "execute-update",
      depth: "short",
      q: "What are ExecuteUpdate and ExecuteDelete, and when would you use them?",
      answer: "EF Core 7+ methods that send one set-based UPDATE or DELETE straight to the database, without loading entities. Great for bulk changes, but they bypass the change tracker and SaveChanges logic.",
      meaning: {
        hi: "EF Core 7+ के methods जो entities load किए बिना एक set-based UPDATE या DELETE सीधे database को भेजते हैं। Bulk changes के लिए बढ़िया, पर ये change tracker और SaveChanges logic को bypass करते हैं।",
        hg: "EF Core 7+ ke methods jo entities load kiye bina ek set-based UPDATE ya DELETE seedhe database ko bhejte hain. Bulk changes ke liye badhiya, par yeh change tracker aur SaveChanges logic ko bypass karte hain."
      },
      explain: {
        en: `<ul>
<li><code>db.Products.Where(p =&gt; p.Stock == 0).ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m))</code> → <code>UPDATE [p] SET [p].[Price] = [p].[Price] * 1.1 FROM [Products] AS [p] WHERE [p].[Stock] = 0</code>.</li>
<li>Before EF Core 7 you loaded every row, changed it in C#, and <code>SaveChanges()</code> sent one UPDATE per row (batched, but still per row) — or you wrote raw SQL.</li>
<li>They run immediately (no <code>SaveChanges()</code>), return rows affected, apply global query filters, and join an open transaction.</li>
<li>Not updated: entities already tracked in memory. Not run: SaveChanges events, SaveChanges interceptors and overrides (command interceptors still fire). Not checked: concurrency tokens (unless you add them to the <code>Where</code>).</li>
</ul>
<p>Follow-up: "How do you keep audit columns correct?" — set them in the same call: <code>.SetProperty(p =&gt; p.UpdatedOn, now)</code>.</p>
<p>Follow-up: "Do they work with SQLite/PostgreSQL?" — Yes, they are relational features; each provider writes its own SQL.</p>`,
        hi: `<ul>
<li><code>db.Products.Where(p =&gt; p.Stock == 0).ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m))</code> → <code>UPDATE [p] SET [p].[Price] = [p].[Price] * 1.1 FROM [Products] AS [p] WHERE [p].[Stock] = 0</code>।</li>
<li>EF Core 7 से पहले आप हर row load करते थे, C# में बदलते थे, और <code>SaveChanges()</code> हर row के लिए एक UPDATE भेजता था (batched, पर फिर भी हर row का) — या आप raw SQL लिखते थे।</li>
<li>ये तुरंत चलते हैं (<code>SaveChanges()</code> नहीं), affected rows लौटाते हैं, global query filters लगाते हैं, और खुले transaction में शामिल होते हैं।</li>
<li>Update नहीं होतीं: memory में पहले से tracked entities। नहीं चलते: SaveChanges events, SaveChanges interceptors और overrides (command interceptors फिर भी चलते हैं)। Check नहीं होते: concurrency tokens (जब तक आप उन्हें <code>Where</code> में न जोड़ो)।</li>
</ul>
<p>Follow-up: "Audit columns सही कैसे रखोगे?" — उसी call में set करो: <code>.SetProperty(p =&gt; p.UpdatedOn, now)</code>।</p>
<p>Follow-up: "क्या ये SQLite/PostgreSQL पर चलते हैं?" — हाँ, ये relational features हैं; हर provider अपना SQL लिखता है।</p>`,
        hg: `<ul>
<li><code>db.Products.Where(p =&gt; p.Stock == 0).ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m))</code> → <code>UPDATE [p] SET [p].[Price] = [p].[Price] * 1.1 FROM [Products] AS [p] WHERE [p].[Stock] = 0</code>.</li>
<li>EF Core 7 se pehle aap har row load karte the, C# mein badalte the, aur <code>SaveChanges()</code> har row ke liye ek UPDATE bhejta tha (batched, par phir bhi har row ka) — ya aap raw SQL likhte the.</li>
<li>Yeh turant chalte hain (<code>SaveChanges()</code> nahi), affected rows lautaate hain, global query filters lagaate hain, aur khule transaction mein shaamil hote hain.</li>
<li>Update nahi hotin: memory mein pehle se tracked entities. Nahi chalte: SaveChanges events, SaveChanges interceptors aur overrides (command interceptors phir bhi chalte hain). Check nahi hote: concurrency tokens (jab tak aap unhe <code>Where</code> mein na jodo).</li>
</ul>
<p>Follow-up: "Audit columns sahi kaise rakhoge?" — usi call mein set karo: <code>.SetProperty(p =&gt; p.UpdatedOn, now)</code>.</p>
<p>Follow-up: "Kya yeh SQLite/PostgreSQL par chalte hain?" — Haan, yeh relational features hain; har provider apna SQL likhta hai.</p>`
      }
    },
    {
      id: "ef-performance",
      depth: "short",
      q: "How do you improve EF Core query performance?",
      answer: "First read the SQL. Then remove N+1, project only the needed columns, use AsNoTracking for reads, page the results and add the right indexes. Compiled queries and pooling only for proven hot paths.",
      meaning: {
        hi: "पहले SQL पढ़ो। फिर N+1 हटाओ, सिर्फ़ ज़रूरी columns project करो, reads के लिए AsNoTracking, results को page करो और सही indexes जोड़ो। Compiled queries और pooling सिर्फ़ साबित हुए hot paths के लिए।",
        hg: "Pehle SQL padho. Phir N+1 hatao, sirf zaroori columns project karo, reads ke liye AsNoTracking, results ko page karo aur sahi indexes jodo. Compiled queries aur pooling sirf saabit hue hot paths ke liye."
      },
      explain: {
        en: `<ul>
<li><b>Fewer round trips</b>: no N+1, no <code>SaveChanges()</code> in loops, <code>ExecuteUpdate</code>/<code>ExecuteDelete</code> for set-based changes.</li>
<li><b>Less data</b>: projections, paging (<code>OFFSET/FETCH</code>, keyset for deep pages), <code>AsSplitQuery()</code> when several large collections multiply rows.</li>
<li><b>Less overhead</b>: <code>AsNoTracking()</code> for reads; DbContext pooling, compiled queries and compiled models only when measured.</li>
<li><b>Database side</b>: indexes on filter/sort columns (EF only indexes keys and FKs), covering/filtered indexes, check the execution plan.</li>
<li><b>No client evaluation</b>: EF Core 3.0+ throws if a filter cannot be translated — never "fix" that with an early <code>ToList()</code> on a big table.</li>
</ul>
<p>Follow-up: "How do you prove it is faster?" — compare query count, duration and logical reads (<code>SET STATISTICS IO ON</code>) before and after; for C# micro-paths use BenchmarkDotNet.</p>
<p>Follow-up: "How do you insert 100k+ rows?" — EF Core has no built-in bulk insert. <code>AddRange</code> + <code>SaveChanges</code> batches the INSERTs (tune with <code>UseSqlServer(cs, o =&gt; o.MaxBatchSize(...))</code>), but every row is still tracked and sent as INSERT statements — save in chunks and call <code>ChangeTracker.Clear()</code> between them. For real bulk loads use <code>SqlBulkCopy</code> on SQL Server, or a bulk-extensions library.</p>`,
        hi: `<ul>
<li><b>कम round trips</b>: N+1 नहीं, loops में <code>SaveChanges()</code> नहीं, set-based बदलावों के लिए <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>।</li>
<li><b>कम data</b>: projections, paging (<code>OFFSET/FETCH</code>, गहरे pages के लिए keyset), और जब कई बड़ी collections rows को गुणा करें तो <code>AsSplitQuery()</code>।</li>
<li><b>कम overhead</b>: reads के लिए <code>AsNoTracking()</code>; DbContext pooling, compiled queries और compiled models सिर्फ़ measure करने के बाद।</li>
<li><b>Database side</b>: filter/sort columns पर indexes (EF सिर्फ़ keys और FKs पर index बनाता है), covering/filtered indexes, execution plan check करो।</li>
<li><b>Client evaluation नहीं</b>: EF Core 3.0+ throw करता है अगर filter translate न हो — इसे बड़ी table पर पहले <code>ToList()</code> लगाकर कभी "fix" मत करो।</li>
</ul>
<p>Follow-up: "कैसे साबित करोगे कि तेज़ हुआ?" — पहले और बाद में query count, duration और logical reads (<code>SET STATISTICS IO ON</code>) compare करो; C# के micro-paths के लिए BenchmarkDotNet।</p>
<p>Follow-up: "100k+ rows कैसे insert करोगे?" — EF Core में built-in bulk insert नहीं है। <code>AddRange</code> + <code>SaveChanges</code> INSERTs को batch करता है (<code>UseSqlServer(cs, o =&gt; o.MaxBatchSize(...))</code> से tune करो), पर हर row फिर भी track होती है और INSERT statements के रूप में जाती है — chunks में save करो और बीच में <code>ChangeTracker.Clear()</code> call करो। असली bulk loads के लिए SQL Server पर <code>SqlBulkCopy</code>, या कोई bulk-extensions library।</p>`,
        hg: `<ul>
<li><b>Kam round trips</b>: N+1 nahi, loops mein <code>SaveChanges()</code> nahi, set-based badlaavon ke liye <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>.</li>
<li><b>Kam data</b>: projections, paging (<code>OFFSET/FETCH</code>, gehre pages ke liye keyset), aur jab kai badi collections rows ko guna karein to <code>AsSplitQuery()</code>.</li>
<li><b>Kam overhead</b>: reads ke liye <code>AsNoTracking()</code>; DbContext pooling, compiled queries aur compiled models sirf measure karne ke baad.</li>
<li><b>Database side</b>: filter/sort columns par indexes (EF sirf keys aur FKs par index banata hai), covering/filtered indexes, execution plan check karo.</li>
<li><b>Client evaluation nahi</b>: EF Core 3.0+ throw karta hai agar filter translate na ho — ise badi table par pehle <code>ToList()</code> lagaakar kabhi "fix" mat karo.</li>
</ul>
<p>Follow-up: "Kaise saabit karoge ki tez hua?" — pehle aur baad mein query count, duration aur logical reads (<code>SET STATISTICS IO ON</code>) compare karo; C# ke micro-paths ke liye BenchmarkDotNet.</p>
<p>Follow-up: "100k+ rows kaise insert karoge?" — EF Core mein built-in bulk insert nahi hai. <code>AddRange</code> + <code>SaveChanges</code> INSERTs ko batch karta hai (<code>UseSqlServer(cs, o =&gt; o.MaxBatchSize(...))</code> se tune karo), par har row phir bhi track hoti hai aur INSERT statements ke roop mein jaati hai — chunks mein save karo aur beech mein <code>ChangeTracker.Clear()</code> call karo. Asli bulk loads ke liye SQL Server par <code>SqlBulkCopy</code>, ya koi bulk-extensions library.</p>`
      }
    },
    {
      id: "split-query",
      depth: "detailed",
      q: "When would you make split queries the default for a DbContext, and what can break?",
      answer: "When most queries load several large collections. Set UseQuerySplittingBehavior(SplitQuery) and opt out with AsSingleQuery. What can break: more round trips, no single snapshot without a transaction, and paging without a unique order.",
      meaning: {
        hi: "जब ज़्यादातर queries कई बड़ी collections load करती हों। UseQuerySplittingBehavior(SplitQuery) set करो और AsSingleQuery से बाहर निकलो। क्या टूट सकता है: ज़्यादा round trips, transaction के बिना एक snapshot नहीं, और unique order के बिना paging।",
        hg: "Jab zyaadatar queries kai badi collections load karti hon. UseQuerySplittingBehavior(SplitQuery) set karo aur AsSingleQuery se baahar niklo. Kya toot sakta hai: zyaada round trips, transaction ke bina ek snapshot nahi, aur unique order ke bina paging."
      },
      explain: {
        en: `<ul>
<li>Why split at all: two collection Includes multiply the JOIN rows (the <b>split-query-rows</b> puzzle: 18 rows for 15 children; Day 5 "include-sql" shows the single-query SQL).</li>
<li>Good default when: your read models routinely include 2+ big collections (an order with lines, payments, shipments). Keep <code>AsSingleQuery()</code> for small or single-row lookups, where one round trip is cheaper.</li>
<li><b>Latency</b>: each collection is another round trip; across a slow network or a busy server this can cost more than the duplicated rows saved.</li>
<li><b>Consistency</b>: the queries run one after another, so without a Serializable/snapshot transaction a row added in between can show up in one query but not another.</li>
<li><b>Paging</b>: <code>Skip</code>/<code>Take</code> needs a unique order (<code>ThenBy(c =&gt; c.Id)</code>). Before EF Core 10 the child query's ordering could even miss the key; EF Core 10 fixes that, but a non-unique order is still your bug.</li>
<li><b>Memory</b>: EF buffers the results of all but the last split query (unless MARS is enabled), so a split query does not stream end to end.</li>
<li><b>Diagnostics</b>: <code>ToQueryString()</code> shows only the first SQL — check the command log to see them all.</li>
</ul>
<p>TL angle: often the better fix is a projection that returns counts or a few child columns — then neither the explosion nor the extra round trips happen.</p>`,
        hi: `<ul>
<li>Split क्यों: दो collection Includes JOIN की rows को गुणा कर देते हैं (<b>split-query-rows</b> puzzle: 15 children के लिए 18 rows; Day 5 का "include-sql" single-query वाला SQL दिखाता है)।</li>
<li>Default कब अच्छा: जब आपके read models में अक्सर 2+ बड़ी collections आती हैं (order के साथ lines, payments, shipments)। छोटे या एक-row वाले lookups के लिए <code>AsSingleQuery()</code> रखो, वहाँ एक round trip सस्ता है।</li>
<li><b>Latency</b>: हर collection एक और round trip है; धीमे network या busy server पर यह बचाई गई duplicate rows से ज़्यादा महँगा पड़ सकता है।</li>
<li><b>Consistency</b>: queries एक के बाद एक चलती हैं, इसलिए Serializable/snapshot transaction के बिना बीच में जुड़ी row एक query में दिख सकती है और दूसरी में नहीं।</li>
<li><b>Paging</b>: <code>Skip</code>/<code>Take</code> को unique order चाहिए (<code>ThenBy(c =&gt; c.Id)</code>)। EF Core 10 से पहले child query की ordering से key तक छूट सकती थी; EF Core 10 ने यह ठीक किया, पर non-unique order फिर भी आपका bug है।</li>
<li><b>Memory</b>: EF आख़िरी split query को छोड़कर बाकी सबके results buffer करता है (जब तक MARS चालू न हो), इसलिए split query शुरू से आख़िर तक stream नहीं होती।</li>
<li><b>Diagnostics</b>: <code>ToQueryString()</code> सिर्फ़ पहला SQL दिखाता है — सब देखने के लिए command log देखो।</li>
</ul>
<p>TL angle: अक्सर बेहतर fix एक projection है जो counts या child के कुछ columns लौटाए — तब न explosion होता है न extra round trips।</p>`,
        hg: `<ul>
<li>Split kyun: do collection Includes JOIN ki rows ko guna kar dete hain (<b>split-query-rows</b> puzzle: 15 children ke liye 18 rows; Day 5 ka "include-sql" single-query wala SQL dikhata hai).</li>
<li>Default kab achha: jab aapke read models mein aksar 2+ badi collections aati hain (order ke saath lines, payments, shipments). Chhote ya ek-row wale lookups ke liye <code>AsSingleQuery()</code> rakho, wahan ek round trip sasta hai.</li>
<li><b>Latency</b>: har collection ek aur round trip hai; dheeme network ya busy server par yeh bachaayi gayi duplicate rows se zyaada mehnga pad sakta hai.</li>
<li><b>Consistency</b>: queries ek ke baad ek chalti hain, isliye Serializable/snapshot transaction ke bina beech mein judi row ek query mein dikh sakti hai aur doosri mein nahi.</li>
<li><b>Paging</b>: <code>Skip</code>/<code>Take</code> ko unique order chahiye (<code>ThenBy(c =&gt; c.Id)</code>). EF Core 10 se pehle child query ki ordering se key tak chhoot sakti thi; EF Core 10 ne yeh theek kiya, par non-unique order phir bhi aapka bug hai.</li>
<li><b>Memory</b>: EF aakhri split query ko chhodkar baaki sabke results buffer karta hai (jab tak MARS chaalu na ho), isliye split query shuru se aakhir tak stream nahi hoti.</li>
<li><b>Diagnostics</b>: <code>ToQueryString()</code> sirf pehla SQL dikhata hai — sab dekhne ke liye command log dekho.</li>
</ul>
<p>TL angle: aksar behtar fix ek projection hai jo counts ya child ke kuch columns lautaaye — tab na explosion hota hai na extra round trips.</p>`
      }
    },
    {
      id: "compiled-queries",
      depth: "detailed",
      q: "What are compiled queries in EF Core, and are they worth using?",
      answer: "EF.CompileQuery turns a LINQ query into a reusable delegate, skipping the per-call expression-tree cache lookup. EF already caches translations, so the gain is small — use it only on hot, measured paths.",
      meaning: {
        hi: "EF.CompileQuery एक LINQ query को दोबारा use होने वाले delegate में बदल देता है, जिससे हर call पर expression tree का cache lookup बचता है। EF पहले से translations cache करता है, इसलिए फ़ायदा छोटा है — सिर्फ़ बहुत hot, measured paths पर काम का।",
        hg: "EF.CompileQuery ek LINQ query ko dobara use hone wale delegate mein badal deta hai, jisse har call par expression tree ka cache lookup bachta hai. EF pehle se translations cache karta hai, isliye faayda chhota hai — sirf bahut hot, measured paths par kaam ka."
      },
      explain: {
        en: `<ul>
<li>Normal query: every call builds an expression tree, EF hashes and compares it to find the cached translation, then runs the SQL.</li>
<li>Compiled: <code>static readonly Func&lt;ShopContext, int, IEnumerable&lt;Product&gt;&gt; q = EF.CompileQuery((ShopContext db, int max) =&gt; ...);</code> — store it in a static field and call <code>q(db, 10)</code>.</li>
<li>Async versions: <code>EF.CompileAsyncQuery</code> returns <code>Task&lt;T&gt;</code> for a single result or <code>IAsyncEnumerable&lt;T&gt;</code> for a sequence.</li>
<li>Limits: the query shape is fixed — no adding <code>Where</code> on top later; parameters are only the delegate's arguments.</li>
<li>Do not confuse with the <b>compiled model</b> (<code>dotnet ef dbcontext optimize</code>), which speeds up startup for very large models.</li>
</ul>
<p>Follow-up: "What gives a bigger win usually?" — removing N+1, projecting, adding an index. Compiled queries come last.</p>`,
        hi: `<ul>
<li>Normal query: हर call पर expression tree बनता है, EF cached translation ढूँढने के लिए उसे hash और compare करता है, फिर SQL चलाता है।</li>
<li>Compiled: <code>static readonly Func&lt;ShopContext, int, IEnumerable&lt;Product&gt;&gt; q = EF.CompileQuery((ShopContext db, int max) =&gt; ...);</code> — इसे static field में रखो और <code>q(db, 10)</code> call करो।</li>
<li>Async versions: <code>EF.CompileAsyncQuery</code> एक result के लिए <code>Task&lt;T&gt;</code> या sequence के लिए <code>IAsyncEnumerable&lt;T&gt;</code> लौटाता है।</li>
<li>सीमाएँ: query का shape fixed है — बाद में ऊपर से <code>Where</code> नहीं जोड़ सकते; parameters सिर्फ़ delegate के arguments होते हैं।</li>
<li><b>Compiled model</b> (<code>dotnet ef dbcontext optimize</code>) से confuse मत करो, जो बहुत बड़े models का startup तेज़ करता है।</li>
</ul>
<p>Follow-up: "आमतौर पर बड़ा फ़ायदा किससे मिलता है?" — N+1 हटाने, projection करने, index जोड़ने से। Compiled queries सबसे आख़िर में।</p>`,
        hg: `<ul>
<li>Normal query: har call par expression tree banta hai, EF cached translation dhoondhne ke liye use hash aur compare karta hai, phir SQL chalata hai.</li>
<li>Compiled: <code>static readonly Func&lt;ShopContext, int, IEnumerable&lt;Product&gt;&gt; q = EF.CompileQuery((ShopContext db, int max) =&gt; ...);</code> — ise static field mein rakho aur <code>q(db, 10)</code> call karo.</li>
<li>Async versions: <code>EF.CompileAsyncQuery</code> ek result ke liye <code>Task&lt;T&gt;</code> ya sequence ke liye <code>IAsyncEnumerable&lt;T&gt;</code> lautaata hai.</li>
<li>Seemaayein: query ka shape fixed hai — baad mein upar se <code>Where</code> nahi jod sakte; parameters sirf delegate ke arguments hote hain.</li>
<li><b>Compiled model</b> (<code>dotnet ef dbcontext optimize</code>) se confuse mat karo, jo bahut bade models ka startup tez karta hai.</li>
</ul>
<p>Follow-up: "Aamtaur par bada faayda kisse milta hai?" — N+1 hataane, projection karne, index jodne se. Compiled queries sabse aakhir mein.</p>`
      }
    },
    {
      id: "client-evaluation",
      depth: "detailed",
      q: "What happens when EF Core cannot translate part of your LINQ query to SQL?",
      answer: "Since EF Core 3.0 it throws InvalidOperationException ('could not be translated') instead of silently pulling rows into memory. Only the final Select may call C# methods; otherwise rewrite the query or switch explicitly with AsEnumerable.",
      meaning: {
        hi: "EF Core 3.0 से यह चुपचाप rows memory में लाने की बजाय InvalidOperationException ('could not be translated') throw करता है। सिर्फ़ final Select में C# methods call हो सकते हैं; बाकी जगह query दोबारा लिखो या AsEnumerable से साफ़-साफ़ switch करो।",
        hg: "EF Core 3.0 se yeh chupchaap rows memory mein laane ki bajaay InvalidOperationException ('could not be translated') throw karta hai. Sirf final Select mein C# methods call ho sakte hain; baaki jagah query dobara likho ya AsEnumerable se saaf-saaf switch karo."
      },
      explain: {
        en: `<ul>
<li><code>db.Customers.Where(c =&gt; MyFormat(c.Name) == "ASHA")</code> → <code>InvalidOperationException: The LINQ expression ... could not be translated</code>. EF cannot turn your C# method into SQL.</li>
<li><code>db.Customers.Select(c =&gt; MyFormat(c.Name))</code> works: EF selects <code>Name</code> in SQL and calls the method on each row after it arrives (top-level projection only).</li>
<li>EF Core 1.x/2.x quietly evaluated such filters in memory — fine in dev, a full table scan into memory in production. That is why 3.0 changed it.</li>
<li>Fixes: use translatable operations (<code>c.Name.ToUpper()</code> is translated), <code>EF.Functions.Like</code>, map a SQL function with <code>HasDbFunction</code>, or filter in SQL first and then <code>AsEnumerable()</code> for the C#-only step.</li>
</ul>
<p>Follow-up: "Is <code>AsEnumerable()</code> after a <code>Where</code> bad?" — No, it is the honest way to say "the rest runs in C#". It becomes bad when it comes before the filters on a big table.</p>`,
        hi: `<ul>
<li><code>db.Customers.Where(c =&gt; MyFormat(c.Name) == "ASHA")</code> → <code>InvalidOperationException: The LINQ expression ... could not be translated</code>। EF आपके C# method को SQL में नहीं बदल सकता।</li>
<li><code>db.Customers.Select(c =&gt; MyFormat(c.Name))</code> चलता है: EF SQL में <code>Name</code> select करता है और हर row आने के बाद उस पर method call करता है (सिर्फ़ top-level projection में)।</li>
<li>EF Core 1.x/2.x ऐसे filters चुपचाप memory में चलाते थे — dev में ठीक, production में पूरी table memory में। इसीलिए 3.0 में यह बदला गया।</li>
<li>Fixes: translate होने वाले operations use करो (<code>c.Name.ToUpper()</code> translate होता है), <code>EF.Functions.Like</code>, <code>HasDbFunction</code> से SQL function map करो, या पहले SQL में filter करो फिर C#-only step के लिए <code>AsEnumerable()</code>।</li>
</ul>
<p>Follow-up: "क्या <code>Where</code> के बाद <code>AsEnumerable()</code> बुरा है?" — नहीं, यह ईमानदारी से कहने का तरीका है कि "बाकी C# में चलेगा"। बुरा तब है जब यह बड़ी table पर filters से पहले आए।</p>`,
        hg: `<ul>
<li><code>db.Customers.Where(c =&gt; MyFormat(c.Name) == "ASHA")</code> → <code>InvalidOperationException: The LINQ expression ... could not be translated</code>. EF aapke C# method ko SQL mein nahi badal sakta.</li>
<li><code>db.Customers.Select(c =&gt; MyFormat(c.Name))</code> chalta hai: EF SQL mein <code>Name</code> select karta hai aur har row aane ke baad us par method call karta hai (sirf top-level projection mein).</li>
<li>EF Core 1.x/2.x aise filters chupchaap memory mein chalaate the — dev mein theek, production mein poori table memory mein. Isiliye 3.0 mein yeh badla gaya.</li>
<li>Fixes: translate hone wale operations use karo (<code>c.Name.ToUpper()</code> translate hota hai), <code>EF.Functions.Like</code>, <code>HasDbFunction</code> se SQL function map karo, ya pehle SQL mein filter karo phir C#-only step ke liye <code>AsEnumerable()</code>.</li>
</ul>
<p>Follow-up: "Kya <code>Where</code> ke baad <code>AsEnumerable()</code> bura hai?" — Nahi, yeh imaandaari se kehne ka tareeka hai ki "baaki C# mein chalega". Bura tab hai jab yeh badi table par filters se pehle aaye.</p>`
      }
    },
    {
      id: "stored-procedures",
      depth: "detailed",
      q: "How do you call a stored procedure from EF Core?",
      answer: "For entity rows, FromSql($\"EXEC dbo.Proc {param}\"); add AsEnumerable before any further LINQ, since SQL Server cannot compose over EXEC. Other shapes: SqlQuery&lt;T&gt;; commands: ExecuteSql. OUTPUT parameters need a SqlParameter.",
      meaning: {
        hi: "Entity से map होने वाली rows के लिए FromSql($\"EXEC dbo.Proc {param}\") और फिर AsEnumerable, क्योंकि SQL Server EXEC के ऊपर compose नहीं कर सकता। दूसरे shapes के लिए SqlQuery&lt;T&gt;; commands के लिए ExecuteSql। Output parameters के लिए SqlParameter चाहिए।",
        hg: "Entity se map hone wali rows ke liye FromSql($\"EXEC dbo.Proc {param}\") aur phir AsEnumerable, kyunki SQL Server EXEC ke upar compose nahi kar sakta. Doosre shapes ke liye SqlQuery&lt;T&gt;; commands ke liye ExecuteSql. Output parameters ke liye SqlParameter chahiye."
      },
      explain: {
        en: `<ul>
<li>Entity results: <code>db.Customers.FromSql($"EXEC dbo.GetCustomersByCity {city}").AsEnumerable()</code>. The procedure must return all the entity's columns.</li>
<li>Custom shape (report): <code>db.Database.SqlQuery&lt;SalesRow&gt;($"EXEC dbo.SalesReport {year}")</code> — EF Core 8+ maps columns to properties by name.</li>
<li>No result set: <code>db.Database.ExecuteSql($"EXEC dbo.ArchiveOrders {cutoff}")</code> returns rows affected.</li>
<li>Output parameter: create <code>new SqlParameter("@total", SqlDbType.Int) { Direction = ParameterDirection.Output }</code>, run <code>ExecuteSqlRaw("EXEC dbo.CountOrders @total OUTPUT", total)</code>, then read <code>total.Value</code>.</li>
<li>Insert/update/delete through procedures: EF Core 7+ can map an entity's writes to stored procedures with <code>InsertUsingStoredProcedure</code>/<code>UpdateUsingStoredProcedure</code>/<code>DeleteUsingStoredProcedure</code>, so <code>SaveChanges()</code> calls them.</li>
</ul>
<p>TL angle: procedures are fine for heavy reports or when a DBA team owns the logic; keep business rules in one place, not half in C# and half in procedures.</p>`,
        hi: `<ul>
<li>Entity results: <code>db.Customers.FromSql($"EXEC dbo.GetCustomersByCity {city}").AsEnumerable()</code>। Procedure को entity के सारे columns लौटाने चाहिए।</li>
<li>Custom shape (report): <code>db.Database.SqlQuery&lt;SalesRow&gt;($"EXEC dbo.SalesReport {year}")</code> — EF Core 8+ columns को नाम से properties पर map करता है।</li>
<li>कोई result set नहीं: <code>db.Database.ExecuteSql($"EXEC dbo.ArchiveOrders {cutoff}")</code> affected rows लौटाता है।</li>
<li>Output parameter: <code>new SqlParameter("@total", SqlDbType.Int) { Direction = ParameterDirection.Output }</code> बनाओ, <code>ExecuteSqlRaw("EXEC dbo.CountOrders @total OUTPUT", total)</code> चलाओ, फिर <code>total.Value</code> पढ़ो।</li>
<li>Procedures से insert/update/delete: EF Core 7+ किसी entity की writes को <code>InsertUsingStoredProcedure</code>/<code>UpdateUsingStoredProcedure</code>/<code>DeleteUsingStoredProcedure</code> से stored procedures पर map कर सकता है, ताकि <code>SaveChanges()</code> उन्हें call करे।</li>
</ul>
<p>TL angle: heavy reports के लिए या जब logic DBA team का हो तब procedures ठीक हैं; business rules एक ही जगह रखो, आधे C# में और आधे procedures में नहीं।</p>`,
        hg: `<ul>
<li>Entity results: <code>db.Customers.FromSql($"EXEC dbo.GetCustomersByCity {city}").AsEnumerable()</code>. Procedure ko entity ke saare columns lautaane chahiye.</li>
<li>Custom shape (report): <code>db.Database.SqlQuery&lt;SalesRow&gt;($"EXEC dbo.SalesReport {year}")</code> — EF Core 8+ columns ko naam se properties par map karta hai.</li>
<li>Koi result set nahi: <code>db.Database.ExecuteSql($"EXEC dbo.ArchiveOrders {cutoff}")</code> affected rows lautaata hai.</li>
<li>Output parameter: <code>new SqlParameter("@total", SqlDbType.Int) { Direction = ParameterDirection.Output }</code> banao, <code>ExecuteSqlRaw("EXEC dbo.CountOrders @total OUTPUT", total)</code> chalao, phir <code>total.Value</code> padho.</li>
<li>Procedures se insert/update/delete: EF Core 7+ kisi entity ki writes ko <code>InsertUsingStoredProcedure</code>/<code>UpdateUsingStoredProcedure</code>/<code>DeleteUsingStoredProcedure</code> se stored procedures par map kar sakta hai, taaki <code>SaveChanges()</code> unhe call kare.</li>
</ul>
<p>TL angle: heavy reports ke liye ya jab logic DBA team ka ho tab procedures theek hain; business rules ek hi jagah rakho, aadhe C# mein aur aadhe procedures mein nahi.</p>`
      },
      code: [{
        caption: {
          en: "Calling stored procedures: entity rows, a custom DTO, a command, and an OUTPUT parameter (compiles; needs a real SQL Server to run)",
          hi: "Stored procedures call करना: entity rows, custom DTO, command, और OUTPUT parameter (compile होता है; चलाने के लिए असली SQL Server चाहिए)",
          hg: "Stored procedures call karna: entity rows, custom DTO, command, aur OUTPUT parameter (compile hota hai; chalaane ke liye asli SQL Server chahiye)"
        },
        check: "compile",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        src: `using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

public class ReportService(ShopContext db)
{
    // 1. Rows that map to an entity. AsEnumerable(): SQL Server cannot compose over EXEC
    public List<Customer> CustomersIn(string city) =>
        db.Customers
          .FromSql($"EXEC dbo.GetCustomersByCity {city}")
          .AsEnumerable()
          .OrderBy(c => c.Name)                 // runs in memory, after EXEC
          .ToList();

    // 2. Any shape, mapped by column name (EF Core 8+)
    public Task<List<SalesRow>> SalesAsync(int year) =>
        db.Database
          .SqlQuery<SalesRow>($"EXEC dbo.SalesReport {year}")
          .ToListAsync();

    // 3. A command with no result set: returns rows affected
    public Task<int> ArchiveAsync(DateTime cutoff) =>
        db.Database.ExecuteSqlAsync($"EXEC dbo.ArchiveOrders {cutoff}");

    // 4. An OUTPUT parameter needs a SqlParameter object
    public int CountOrders(int customerId)
    {
        var total = new SqlParameter("@total", SqlDbType.Int) { Direction = ParameterDirection.Output };
        db.Database.ExecuteSqlRaw(
            "EXEC dbo.CountOrders @customerId, @total OUTPUT",
            new SqlParameter("@customerId", customerId),
            total);
        return (int)total.Value;
    }
}

public record SalesRow(string City, decimal Revenue);

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string City { get; set; } = "";
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`
      }]
    },
    {
      id: "ef-vs-dapper",
      depth: "detailed",
      q: "When would you use Dapper or raw SQL instead of EF Core?",
      answer: "EF Core by default for CRUD, change tracking and migrations; Dapper or raw SQL for heavy reports, tuned hot queries, or SQL that LINQ cannot express. Many teams use both, sharing one connection and transaction.",
      meaning: {
        hi: "CRUD, change tracking और migrations के लिए default EF Core; heavy reports, tuned hot queries या ऐसे SQL के लिए जो LINQ से नहीं बनता, Dapper या raw SQL। कई teams दोनों use करती हैं, एक connection और transaction share करके।",
        hg: "CRUD, change tracking aur migrations ke liye default EF Core; heavy reports, tuned hot queries ya aise SQL ke liye jo LINQ se nahi banta, Dapper ya raw SQL. Kai teams dono use karti hain, ek connection aur transaction share karke."
      },
      explain: {
        en: `<ul>
<li><b>EF Core strengths</b>: LINQ with compile-time checks, change tracking + unit of work, relationships, migrations, provider independence, less boilerplate for writes.</li>
<li><b>Dapper strengths</b>: you write exactly the SQL you want, very low overhead mapping, simple mental model — good for read-heavy reporting.</li>
<li>The gap is smaller than it used to be: no-tracking queries, projections, <code>SqlQuery&lt;T&gt;</code> (EF Core 8) and <code>ExecuteUpdate</code> (EF Core 7) cover many cases that once needed Dapper.</li>
<li>Mixing: Dapper can run on <code>db.Database.GetDbConnection()</code> with <code>db.Database.CurrentTransaction?.GetDbTransaction()</code>, so both commit together.</li>
</ul>
<p>TL angle: decide per use case, not per developer taste — write the rule down ("writes and normal reads via EF; reports via Dapper in the Reporting module") so the codebase stays consistent.</p>`,
        hi: `<ul>
<li><b>EF Core की ताक़त</b>: compile-time checks वाला LINQ, change tracking + unit of work, relationships, migrations, provider independence, writes के लिए कम boilerplate।</li>
<li><b>Dapper की ताक़त</b>: आप ठीक वही SQL लिखते हो जो चाहिए, बहुत कम overhead वाली mapping, सीधा mental model — read-heavy reporting के लिए अच्छा।</li>
<li>फ़र्क़ पहले से कम है: no-tracking queries, projections, <code>SqlQuery&lt;T&gt;</code> (EF Core 8) और <code>ExecuteUpdate</code> (EF Core 7) कई ऐसे cases संभालते हैं जिनके लिए पहले Dapper चाहिए था।</li>
<li>दोनों मिलाना: Dapper <code>db.Database.GetDbConnection()</code> पर <code>db.Database.CurrentTransaction?.GetDbTransaction()</code> के साथ चल सकता है, ताकि दोनों साथ commit हों।</li>
</ul>
<p>TL angle: फ़ैसला use case के हिसाब से लो, developer की पसंद से नहीं — rule लिख दो ("writes और normal reads EF से; reports Reporting module में Dapper से") ताकि codebase consistent रहे।</p>`,
        hg: `<ul>
<li><b>EF Core ki taakat</b>: compile-time checks wala LINQ, change tracking + unit of work, relationships, migrations, provider independence, writes ke liye kam boilerplate.</li>
<li><b>Dapper ki taakat</b>: aap theek wahi SQL likhte ho jo chahiye, bahut kam overhead wali mapping, seedha mental model — read-heavy reporting ke liye achha.</li>
<li>Farq pehle se kam hai: no-tracking queries, projections, <code>SqlQuery&lt;T&gt;</code> (EF Core 8) aur <code>ExecuteUpdate</code> (EF Core 7) kai aise cases sambhaalte hain jinke liye pehle Dapper chahiye tha.</li>
<li>Dono milaana: Dapper <code>db.Database.GetDbConnection()</code> par <code>db.Database.CurrentTransaction?.GetDbTransaction()</code> ke saath chal sakta hai, taaki dono saath commit hon.</li>
</ul>
<p>TL angle: faisla use case ke hisaab se lo, developer ki pasand se nahi — rule likh do ("writes aur normal reads EF se; reports Reporting module mein Dapper se") taaki codebase consistent rahe.</p>`
      }
    },
    {
      id: "execution-strategy",
      depth: "detailed",
      q: "How do you handle transient database failures with EF Core, and why do transactions need special care?",
      answer: "Enable a retrying execution strategy, like EnableRetryOnFailure for SQL Server. Because a retry must replay the whole unit, a user transaction has to run inside strategy.Execute; otherwise EF throws InvalidOperationException.",
      meaning: {
        hi: "Retrying execution strategy चालू करो, जैसे SQL Server के लिए EnableRetryOnFailure। Retry को पूरा unit दोबारा चलाना होता है, इसलिए user transaction strategy.Execute के अंदर चलना चाहिए; वरना EF InvalidOperationException throw करता है।",
        hg: "Retrying execution strategy chaalu karo, jaise SQL Server ke liye EnableRetryOnFailure. Retry ko poora unit dobara chalana hota hai, isliye user transaction strategy.Execute ke andar chalna chahiye; warna EF InvalidOperationException throw karta hai."
      },
      explain: {
        en: `<ul>
<li>Transient errors: Azure SQL failover, throttling, a dropped connection. Retrying after a short delay usually succeeds.</li>
<li><code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure(maxRetryCount: 5, maxRetryDelay: TimeSpan.FromSeconds(10), errorNumbersToAdd: null))</code> — single <code>SaveChanges()</code> calls and queries are retried automatically.</li>
<li>With your own <code>BeginTransaction()</code> (or a <code>TransactionScope</code>) EF cannot retry just one statement in the middle, so the next <code>SaveChanges()</code> or query throws: "The configured execution strategy ... does not support user-initiated transactions." Wrap the whole unit: <code>await db.Database.CreateExecutionStrategy().ExecuteAsync(async () =&gt; { ... })</code>.</li>
<li>Inside the lambda: start clean (<code>ChangeTracker.Clear()</code> or a new context), no external calls, no non-idempotent side effects.</li>
<li>Edge case: if the connection drops <b>during commit</b>, you cannot know whether it committed. EF offers <code>ExecuteInTransaction(..., verifySucceeded)</code> so you can check before retrying.</li>
</ul>
<p>Follow-up: "Polly or EF retries?" — for database calls, use EF's strategy (it knows SQL Server's transient error numbers); Polly is for HTTP and other dependencies (Day 16).</p>`,
        hi: `<ul>
<li>Transient errors: Azure SQL failover, throttling, टूटा connection। थोड़ी देर बाद retry करने पर आमतौर पर काम हो जाता है।</li>
<li><code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure(maxRetryCount: 5, maxRetryDelay: TimeSpan.FromSeconds(10), errorNumbersToAdd: null))</code> — अकेले <code>SaveChanges()</code> calls और queries अपने-आप retry होते हैं।</li>
<li>आपके अपने <code>BeginTransaction()</code> (या <code>TransactionScope</code>) के साथ EF बीच का सिर्फ़ एक statement retry नहीं कर सकता, इसलिए अगला <code>SaveChanges()</code> या query throw करता है: "The configured execution strategy ... does not support user-initiated transactions." पूरे unit को लपेटो: <code>await db.Database.CreateExecutionStrategy().ExecuteAsync(async () =&gt; { ... })</code>।</li>
<li>Lambda के अंदर: साफ़ शुरुआत (<code>ChangeTracker.Clear()</code> या नया context), कोई external calls नहीं, कोई non-idempotent side effects नहीं।</li>
<li>Edge case: अगर connection <b>commit के दौरान</b> टूटे, तो पता नहीं चलता कि commit हुआ या नहीं। EF <code>ExecuteInTransaction(..., verifySucceeded)</code> देता है ताकि retry से पहले check कर सको।</li>
</ul>
<p>Follow-up: "Polly या EF retries?" — database calls के लिए EF की strategy (उसे SQL Server के transient error numbers पता हैं); Polly HTTP और बाकी dependencies के लिए (Day 16)।</p>`,
        hg: `<ul>
<li>Transient errors: Azure SQL failover, throttling, toota connection. Thodi der baad retry karne par aamtaur par kaam ho jaata hai.</li>
<li><code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure(maxRetryCount: 5, maxRetryDelay: TimeSpan.FromSeconds(10), errorNumbersToAdd: null))</code> — akele <code>SaveChanges()</code> calls aur queries apne-aap retry hote hain.</li>
<li>Aapke apne <code>BeginTransaction()</code> (ya <code>TransactionScope</code>) ke saath EF beech ka sirf ek statement retry nahi kar sakta, isliye agla <code>SaveChanges()</code> ya query throw karta hai: "The configured execution strategy ... does not support user-initiated transactions." Poore unit ko lapeto: <code>await db.Database.CreateExecutionStrategy().ExecuteAsync(async () =&gt; { ... })</code>.</li>
<li>Lambda ke andar: saaf shuruaat (<code>ChangeTracker.Clear()</code> ya naya context), koi external calls nahi, koi non-idempotent side effects nahi.</li>
<li>Edge case: agar connection <b>commit ke dauraan</b> toote, to pata nahi chalta ki commit hua ya nahi. EF <code>ExecuteInTransaction(..., verifySucceeded)</code> deta hai taaki retry se pehle check kar sako.</li>
</ul>
<p>Follow-up: "Polly ya EF retries?" — database calls ke liye EF ki strategy (use SQL Server ke transient error numbers pata hain); Polly HTTP aur baaki dependencies ke liye (Day 16).</p>`
      }
    },
    {
      id: "timestamp-vs-concurrencycheck",
      depth: "detailed",
      q: "What is the difference between [Timestamp] and [ConcurrencyCheck] in EF Core?",
      answer: "[Timestamp] maps a byte[] to SQL Server rowversion, which changes on every update, so any column change is caught. [ConcurrencyCheck] makes one ordinary column a token — it guards only that column.",
      meaning: {
        hi: "[Timestamp] एक byte[] को SQL Server के rowversion से map करता है, जिसे database हर update पर बदलता है, इसलिए किसी भी column का बदलाव पकड़ा जाता है। [ConcurrencyCheck] एक साधारण column को token बनाता है — यह सिर्फ़ उसी column के बदलाव पकड़ता है।",
        hg: "[Timestamp] ek byte[] ko SQL Server ke rowversion se map karta hai, jise database har update par badalta hai, isliye kisi bhi column ka badlaav pakda jaata hai. [ConcurrencyCheck] ek saadhaaran column ko token banata hai — yeh sirf usi column ke badlaav pakadta hai."
      },
      explain: {
        en: `<ul>
<li><code>[Timestamp]</code> = <code>.IsRowVersion()</code> in Fluent API: a concurrency token that is also <b>generated by the database</b> on add and update. EF reads the new value back after each save.</li>
<li><code>[ConcurrencyCheck]</code> = <code>.IsConcurrencyToken()</code>: the column's original value goes into the <code>WHERE</code>, but nobody changes it automatically. Puzzle below: a token on <code>Price</code> does not stop two users editing <code>Stock</code> and <code>Name</code> at the same time.</li>
<li>For databases without <code>rowversion</code>, add a <code>Version</code> integer (or a GUID) as a token and change it in a <code>SaveChanges</code> override, as in the section demo. PostgreSQL has its own options (Day 19).</li>
</ul>
<p>Follow-up: "Is rowversion a date/time?" — No. Despite the old name <code>timestamp</code>, it is an 8-byte, database-wide increasing number, unrelated to clock time.</p>`,
        hi: `<ul>
<li><code>[Timestamp]</code> = Fluent API में <code>.IsRowVersion()</code>: एक concurrency token जो add और update पर <b>database ही generate</b> करता है। हर save के बाद EF नई value वापस पढ़ता है।</li>
<li><code>[ConcurrencyCheck]</code> = <code>.IsConcurrencyToken()</code>: column की original value <code>WHERE</code> में जाती है, पर उसे कोई अपने-आप नहीं बदलता। नीचे का puzzle: <code>Price</code> पर token दो users को एक साथ <code>Stock</code> और <code>Name</code> edit करने से नहीं रोकता।</li>
<li>जिन databases में <code>rowversion</code> नहीं है, वहाँ token के रूप में एक <code>Version</code> integer (या GUID) जोड़ो और उसे <code>SaveChanges</code> override में बदलो, जैसे section demo में। PostgreSQL के अपने options हैं (Day 19)।</li>
</ul>
<p>Follow-up: "क्या rowversion कोई date/time है?" — नहीं। पुराने नाम <code>timestamp</code> के बावजूद, यह 8-byte का पूरे database में बढ़ता हुआ number है, घड़ी के समय से इसका कोई लेना-देना नहीं।</p>`,
        hg: `<ul>
<li><code>[Timestamp]</code> = Fluent API mein <code>.IsRowVersion()</code>: ek concurrency token jo add aur update par <b>database hi generate</b> karta hai. Har save ke baad EF nayi value wapas padhta hai.</li>
<li><code>[ConcurrencyCheck]</code> = <code>.IsConcurrencyToken()</code>: column ki original value <code>WHERE</code> mein jaati hai, par use koi apne-aap nahi badalta. Neeche ka puzzle: <code>Price</code> par token do users ko ek saath <code>Stock</code> aur <code>Name</code> edit karne se nahi rokta.</li>
<li>Jin databases mein <code>rowversion</code> nahi hai, wahan token ke roop mein ek <code>Version</code> integer (ya GUID) jodo aur use <code>SaveChanges</code> override mein badlo, jaise section demo mein. PostgreSQL ke apne options hain (Day 19).</li>
</ul>
<p>Follow-up: "Kya rowversion koi date/time hai?" — Nahi. Purane naam <code>timestamp</code> ke bawajood, yeh 8-byte ka poore database mein badhta hua number hai, ghadi ke samay se iska koi lena-dena nahi.</p>`
      }
    },
    {
      id: "concurrency-web-api",
      depth: "detailed",
      q: "How do you implement optimistic concurrency for a PUT endpoint in a Web API?",
      answer: "Send the rowversion to the client with the GET, take it back in the PUT, and set it as the entity's original Version before SaveChanges. On DbUpdateConcurrencyException, return 409 Conflict (or 412 with If-Match).",
      meaning: {
        hi: "GET के साथ rowversion client को भेजो, PUT में वापस लो, और SaveChanges से पहले उसे entity की original Version के रूप में set करो। DbUpdateConcurrencyException पर 409 Conflict लौटाओ (या If-Match के साथ 412)।",
        hg: "GET ke saath rowversion client ko bhejo, PUT mein wapas lo, aur SaveChanges se pehle use entity ki original Version ke roop mein set karo. DbUpdateConcurrencyException par 409 Conflict lautaao (ya If-Match ke saath 412)."
      },
      explain: {
        en: `<ul>
<li>The trap: in a PUT you load the row <b>now</b> and save it a millisecond later — the version you loaded is always fresh, so no conflict is ever detected. The check must use the version the <b>user</b> saw when the form was opened.</li>
<li>That is why the code sets <code>Property(p =&gt; p.Version).OriginalValue = dto.Version</code>. EF then sends <code>WHERE [Id] = @id AND [Version] = @versionFromUser</code>.</li>
<li>In HTTP terms: the GET returns the version (in the body or as an <code>ETag</code> header); the client sends it back (in the body or as <code>If-Match</code>); the API answers <code>409</code>/<code>412</code> with the current data so the user can retry.</li>
</ul>
<p>TL angle: put this in a shared base (for example an <code>IVersioned</code> interface and one helper) so every edit endpoint gets it, instead of each developer remembering it.</p>`,
        hi: `<ul>
<li>जाल: PUT में आप row <b>अभी</b> load करते हो और एक millisecond बाद save करते हो — load की गई version हमेशा ताज़ा होती है, इसलिए कोई conflict कभी पकड़ा ही नहीं जाता। Check उस version से होना चाहिए जो form खोलते समय <b>user</b> ने देखी थी।</li>
<li>इसीलिए code <code>Property(p =&gt; p.Version).OriginalValue = dto.Version</code> set करता है। फिर EF भेजता है <code>WHERE [Id] = @id AND [Version] = @versionFromUser</code>।</li>
<li>HTTP की भाषा में: GET version लौटाता है (body में या <code>ETag</code> header में); client उसे वापस भेजता है (body में या <code>If-Match</code> में); API मौजूदा data के साथ <code>409</code>/<code>412</code> जवाब देती है ताकि user फिर से कोशिश कर सके।</li>
</ul>
<p>TL angle: इसे एक shared base में रखो (जैसे एक <code>IVersioned</code> interface और एक helper) ताकि हर edit endpoint को यह मिले, बजाय इसके कि हर developer इसे याद रखे।</p>`,
        hg: `<ul>
<li>Jaal: PUT mein aap row <b>abhi</b> load karte ho aur ek millisecond baad save karte ho — load ki gayi version hamesha taaza hoti hai, isliye koi conflict kabhi pakda hi nahi jaata. Check us version se hona chahiye jo form kholte samay <b>user</b> ne dekhi thi.</li>
<li>Isiliye code <code>Property(p =&gt; p.Version).OriginalValue = dto.Version</code> set karta hai. Phir EF bhejta hai <code>WHERE [Id] = @id AND [Version] = @versionFromUser</code>.</li>
<li>HTTP ki bhaasha mein: GET version lautaata hai (body mein ya <code>ETag</code> header mein); client use wapas bhejta hai (body mein ya <code>If-Match</code> mein); API maujooda data ke saath <code>409</code>/<code>412</code> jawaab deti hai taaki user phir se koshish kar sake.</li>
</ul>
<p>TL angle: ise ek shared base mein rakho (jaise ek <code>IVersioned</code> interface aur ek helper) taaki har edit endpoint ko yeh mile, bajaay iske ki har developer ise yaad rakhe.</p>`
      },
      code: [{
        caption: {
          en: "Update with the version the user saw; a conflict becomes a result the controller maps to 409 (compiles)",
          hi: "User की देखी version के साथ update; conflict एक result बनता है जिसे controller 409 पर map करता है (compile होता है)",
          hg: "User ki dekhi version ke saath update; conflict ek result banta hai jise controller 409 par map karta hai (compile hota hai)"
        },
        check: "compile",
        packages: ["Microsoft.EntityFrameworkCore.SqlServer"],
        src: `using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

public record ProductDto(int Id, string Name, decimal Price, byte[] Version);

public enum UpdateResult { Updated, NotFound, Conflict }

public class ProductService(ShopContext db)
{
    public async Task<UpdateResult> UpdateAsync(ProductDto dto, CancellationToken ct)
    {
        var product = await db.Products.FindAsync([dto.Id], ct);
        if (product is null) return UpdateResult.NotFound;

        // Compare with the version the USER saw, not the one we just loaded
        db.Entry(product).Property(p => p.Version).OriginalValue = dto.Version;

        product.Name = dto.Name;
        product.Price = dto.Price;
        try
        {
            await db.SaveChangesAsync(ct);   // UPDATE ... WHERE [Id] = @p AND [Version] = @userVersion
            return UpdateResult.Updated;
        }
        catch (DbUpdateConcurrencyException)
        {
            return UpdateResult.Conflict;    // controller: return Conflict(...) => HTTP 409
        }
    }
}

public class Product
{
    public int Id { get; set; }
    [MaxLength(100)] public string Name { get; set; } = "";
    public decimal Price { get; set; }
    [Timestamp] public byte[] Version { get; set; } = [];
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    protected override void OnModelCreating(ModelBuilder modelBuilder)
        => modelBuilder.Entity<Product>().Property(p => p.Price).HasPrecision(10, 2);
}`
      }]
    },
    {
      id: "execute-update-pitfalls",
      depth: "detailed",
      q: "What can go wrong with ExecuteUpdate and ExecuteDelete? What do you check in code review?",
      answer: "They skip the change tracker, so loaded entities go stale; SaveChanges logic like auditing and events does not run; there is no concurrency check; and cascades depend on database FK rules. I check all four.",
      meaning: {
        hi: "ये change tracker को skip करते हैं, इसलिए load हुई entities पुरानी पड़ जाती हैं; auditing और events जैसा SaveChanges logic नहीं चलता; कोई concurrency check नहीं होता; और cascades database के FK rules पर टिके हैं। मैं ये चारों check करता हूँ।",
        hg: "Yeh change tracker ko skip karte hain, isliye load hui entities purani pad jaati hain; auditing aur events jaisa SaveChanges logic nahi chalta; koi concurrency check nahi hota; aur cascades database ke FK rules par tike hain. Main yeh chaaron check karta hoon."
      },
      explain: {
        en: `<ul>
<li><b>Stale entities</b>: a tracked entity keeps its old values after an <code>ExecuteUpdate</code>. If you then change another property and save, EF updates only that column (bulk value survives); if the row was removed by <code>ExecuteDelete</code>, saving the stale entity throws <code>DbUpdateConcurrencyException</code>. Both are puzzles below.</li>
<li><b>Audit and events</b>: <code>UpdatedOn</code>/<code>UpdatedBy</code> set in a <code>SaveChanges</code> override or interceptor, domain events, outbox messages — none of it runs. Set audit columns in <code>SetProperty</code>; raise events explicitly.</li>
<li><b>Concurrency</b>: no token check — add <code>&amp;&amp; p.Version == expected</code> to the <code>Where</code> if it matters, and check the returned row count.</li>
<li><b>Cascades</b>: only the database's FK rules act; EF does not delete or null-out dependents for you.</li>
<li><b>Transactions</b>: each call is its own statement; use an explicit transaction to tie it to other work.</li>
<li><b>Tests</b>: the EF InMemory provider throws "not supported" for these methods — test them with SQLite or a real SQL Server (for example in a container).</li>
</ul>`,
        hi: `<ul>
<li><b>Stale entities</b>: <code>ExecuteUpdate</code> के बाद tracked entity पुरानी values रखती है। अगर फिर आप कोई दूसरी property बदलकर save करो, तो EF सिर्फ़ वही column update करता है (bulk वाली value बची रहती है); अगर row <code>ExecuteDelete</code> से हट चुकी थी, तो stale entity को save करना <code>DbUpdateConcurrencyException</code> throw करता है। दोनों नीचे puzzles में हैं।</li>
<li><b>Audit और events</b>: <code>SaveChanges</code> override या interceptor में set होने वाले <code>UpdatedOn</code>/<code>UpdatedBy</code>, domain events, outbox messages — इनमें से कुछ नहीं चलता। Audit columns <code>SetProperty</code> में set करो; events खुद raise करो।</li>
<li><b>Concurrency</b>: token check नहीं होता — ज़रूरी हो तो <code>Where</code> में <code>&amp;&amp; p.Version == expected</code> जोड़ो, और लौटी row count check करो।</li>
<li><b>Cascades</b>: सिर्फ़ database के FK rules काम करते हैं; EF आपके लिए dependents को delete या null नहीं करता।</li>
<li><b>Transactions</b>: हर call अपना अलग statement है; उसे दूसरे काम से बाँधने के लिए explicit transaction use करो।</li>
<li><b>Tests</b>: EF InMemory provider इन methods के लिए "not supported" throw करता है — इन्हें SQLite या असली SQL Server (जैसे container में) से test करो।</li>
</ul>`,
        hg: `<ul>
<li><b>Stale entities</b>: <code>ExecuteUpdate</code> ke baad tracked entity purani values rakhti hai. Agar phir aap koi doosri property badalkar save karo, to EF sirf wahi column update karta hai (bulk wali value bachi rehti hai); agar row <code>ExecuteDelete</code> se hat chuki thi, to stale entity ko save karna <code>DbUpdateConcurrencyException</code> throw karta hai. Dono neeche puzzles mein hain.</li>
<li><b>Audit aur events</b>: <code>SaveChanges</code> override ya interceptor mein set hone wale <code>UpdatedOn</code>/<code>UpdatedBy</code>, domain events, outbox messages — inmein se kuch nahi chalta. Audit columns <code>SetProperty</code> mein set karo; events khud raise karo.</li>
<li><b>Concurrency</b>: token check nahi hota — zaroori ho to <code>Where</code> mein <code>&amp;&amp; p.Version == expected</code> jodo, aur lauti row count check karo.</li>
<li><b>Cascades</b>: sirf database ke FK rules kaam karte hain; EF aapke liye dependents ko delete ya null nahi karta.</li>
<li><b>Transactions</b>: har call apna alag statement hai; use doosre kaam se baandhne ke liye explicit transaction use karo.</li>
<li><b>Tests</b>: EF InMemory provider in methods ke liye "not supported" throw karta hai — inhe SQLite ya asli SQL Server (jaise container mein) se test karo.</li>
</ul>`
      }
    },
    {
      id: "soft-delete",
      depth: "detailed",
      q: "How do you implement soft delete in EF Core?",
      answer: "Add an IsDeleted flag, hide those rows with a global query filter (HasQueryFilter), and turn deletes into updates — in a SaveChanges override or interceptor, or with ExecuteUpdate for bulk. IgnoreQueryFilters shows them when needed.",
      meaning: {
        hi: "एक IsDeleted flag जोड़ो, global query filter (HasQueryFilter) से उन rows को छुपाओ, और deletes को updates में बदलो — SaveChanges override या interceptor में, या bulk के लिए ExecuteUpdate से। ज़रूरत पर IgnoreQueryFilters उन्हें दिखाता है।",
        hg: "Ek IsDeleted flag jodo, global query filter (HasQueryFilter) se un rows ko chhupao, aur deletes ko updates mein badlo — SaveChanges override ya interceptor mein, ya bulk ke liye ExecuteUpdate se. Zaroorat par IgnoreQueryFilters unhe dikhata hai."
      },
      explain: {
        en: `<ul>
<li>Filter: <code>modelBuilder.Entity&lt;Product&gt;().HasQueryFilter(p =&gt; !p.IsDeleted)</code> → every query gets <code>WHERE [p].[IsDeleted] = CAST(0 AS bit)</code>, including <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>.</li>
<li>Delete → update: in a <code>SaveChanges</code> override (or <code>SaveChangesInterceptor</code>), change <code>Deleted</code> entries to <code>Modified</code> and set <code>IsDeleted = true</code>, <code>DeletedOn = now</code>. Bulk: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.IsDeleted, true))</code>.</li>
<li>Admin/reporting screens use <code>IgnoreQueryFilters()</code>.</li>
<li>SQL Server side: unique indexes should ignore deleted rows — <code>HasIndex(p =&gt; p.Code).IsUnique().HasFilter("[IsDeleted] = 0")</code>; and most indexes benefit from the filter column.</li>
<li><b>EF Core 10</b> adds <b>named query filters</b>: several filters per entity (for example soft delete and tenant) and switching off one by name: <code>IgnoreQueryFilters(["SoftDelete"])</code>. Before EF Core 10, an entity had one filter, so you combined conditions in one expression.</li>
</ul>
<p>TL angle: soft delete affects every query, report and unique rule — agree on it as a team (and on data retention/GDPR) before adding the flag.</p>`,
        hi: `<ul>
<li>Filter: <code>modelBuilder.Entity&lt;Product&gt;().HasQueryFilter(p =&gt; !p.IsDeleted)</code> → हर query में <code>WHERE [p].[IsDeleted] = CAST(0 AS bit)</code> जुड़ता है, <code>ExecuteUpdate</code>/<code>ExecuteDelete</code> में भी।</li>
<li>Delete → update: <code>SaveChanges</code> override (या <code>SaveChangesInterceptor</code>) में <code>Deleted</code> entries को <code>Modified</code> करो और <code>IsDeleted = true</code>, <code>DeletedOn = now</code> set करो। Bulk: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.IsDeleted, true))</code>।</li>
<li>Admin/reporting screens <code>IgnoreQueryFilters()</code> use करती हैं।</li>
<li>SQL Server side: unique indexes को deleted rows ignore करनी चाहिए — <code>HasIndex(p =&gt; p.Code).IsUnique().HasFilter("[IsDeleted] = 0")</code>; और ज़्यादातर indexes को filter column से फ़ायदा होता है।</li>
<li><b>EF Core 10</b> में <b>named query filters</b> आए: हर entity पर कई filters (जैसे soft delete और tenant) और किसी एक को नाम से बंद करना: <code>IgnoreQueryFilters(["SoftDelete"])</code>। EF Core 10 से पहले हर entity का एक ही filter होता था, इसलिए conditions एक expression में जोड़नी पड़ती थीं।</li>
</ul>
<p>TL angle: soft delete हर query, report और unique rule पर असर डालता है — flag जोड़ने से पहले team के साथ इस पर (और data retention/GDPR पर) सहमति बनाओ।</p>`,
        hg: `<ul>
<li>Filter: <code>modelBuilder.Entity&lt;Product&gt;().HasQueryFilter(p =&gt; !p.IsDeleted)</code> → har query mein <code>WHERE [p].[IsDeleted] = CAST(0 AS bit)</code> judta hai, <code>ExecuteUpdate</code>/<code>ExecuteDelete</code> mein bhi.</li>
<li>Delete → update: <code>SaveChanges</code> override (ya <code>SaveChangesInterceptor</code>) mein <code>Deleted</code> entries ko <code>Modified</code> karo aur <code>IsDeleted = true</code>, <code>DeletedOn = now</code> set karo. Bulk: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.IsDeleted, true))</code>.</li>
<li>Admin/reporting screens <code>IgnoreQueryFilters()</code> use karti hain.</li>
<li>SQL Server side: unique indexes ko deleted rows ignore karni chahiye — <code>HasIndex(p =&gt; p.Code).IsUnique().HasFilter("[IsDeleted] = 0")</code>; aur zyaadatar indexes ko filter column se faayda hota hai.</li>
<li><b>EF Core 10</b> mein <b>named query filters</b> aaye: har entity par kai filters (jaise soft delete aur tenant) aur kisi ek ko naam se band karna: <code>IgnoreQueryFilters(["SoftDelete"])</code>. EF Core 10 se pehle har entity ka ek hi filter hota tha, isliye conditions ek expression mein jodni padti thin.</li>
</ul>
<p>TL angle: soft delete har query, report aur unique rule par asar daalta hai — flag jodne se pehle team ke saath is par (aur data retention/GDPR par) sahmati banao.</p>`
      }
    },
    {
      id: "slow-query-investigation",
      depth: "detailed",
      q: "A page is slow in production and you suspect EF Core. How do you investigate as a Tech Lead?",
      answer: "Measure first: query count and duration per request. Capture the SQL and read its execution plan, then fix the cause — N+1, over-fetching, a missing index or implicit conversion — and prove it with numbers.",
      meaning: {
        hi: "पहले measure करो: हर request की query count और duration। SQL पकड़ो और उसका execution plan पढ़ो, फिर वजह ठीक करो — N+1, ज़्यादा data, missing index या implicit conversion — और numbers से साबित करो।",
        hg: "Pehle measure karo: har request ki query count aur duration. SQL pakdo aur uska execution plan padho, phir wajah theek karo — N+1, zyaada data, missing index ya implicit conversion — aur numbers se saabit karo."
      },
      explain: {
        en: `<ul>
<li><b>1. Measure</b>: Application Insights dependency calls (how many SQL calls per request, which is slowest), or EF command logs with durations.</li>
<li><b>2. Find the SQL</b>: <code>TagWith</code> comments, Query Store "top resource consuming queries", Extended Events.</li>
<li><b>3. Read the plan</b> in SSMS: scans vs seeks, key lookups (covering index?), bad row estimates, parameter sniffing.</li>
<li><b>Implicit conversion trap</b>: if a column is <code>varchar</code> in the database but the EF model maps it as Unicode (<code>nvarchar</code>), the parameter type does not match and SQL Server may scan instead of seek. Map it correctly with <code>IsUnicode(false)</code> / <code>HasColumnType("varchar(50)")</code>.</li>
<li><b>4. Fix in EF</b>: remove N+1, project, <code>AsNoTracking</code>, split query, page; add the index through a migration so it is reviewed and versioned.</li>
<li><b>5. Prove and guard</b>: before/after numbers, a query-count test for the endpoint, and an alert on slow dependencies.</li>
</ul>
<p>TL angle: interviewers want a calm, ordered process and the habit of measuring — not a list of random tips.</p>`,
        hi: `<ul>
<li><b>1. Measure</b>: Application Insights की dependency calls (हर request में कितनी SQL calls, कौन सी सबसे धीमी), या durations के साथ EF command logs।</li>
<li><b>2. SQL ढूँढो</b>: <code>TagWith</code> comments, Query Store की "top resource consuming queries", Extended Events।</li>
<li><b>3. SSMS में plan पढ़ो</b>: scans बनाम seeks, key lookups (covering index?), गलत row estimates, parameter sniffing।</li>
<li><b>Implicit conversion का जाल</b>: अगर database में column <code>varchar</code> है पर EF model उसे Unicode (<code>nvarchar</code>) map करता है, तो parameter type match नहीं करता और SQL Server seek की जगह scan कर सकता है। <code>IsUnicode(false)</code> / <code>HasColumnType("varchar(50)")</code> से सही map करो।</li>
<li><b>4. EF में fix</b>: N+1 हटाओ, project करो, <code>AsNoTracking</code>, split query, paging; index migration से जोड़ो ताकि वो review और version हो।</li>
<li><b>5. साबित करो और बचाव रखो</b>: पहले/बाद के numbers, endpoint के लिए query-count test, और धीमी dependencies पर alert।</li>
</ul>
<p>TL angle: interviewers एक शांत, क्रम वाला process और measure करने की आदत देखना चाहते हैं — random tips की list नहीं।</p>`,
        hg: `<ul>
<li><b>1. Measure</b>: Application Insights ki dependency calls (har request mein kitni SQL calls, kaunsi sabse dheemi), ya durations ke saath EF command logs.</li>
<li><b>2. SQL dhoondho</b>: <code>TagWith</code> comments, Query Store ki "top resource consuming queries", Extended Events.</li>
<li><b>3. SSMS mein plan padho</b>: scans vs seeks, key lookups (covering index?), galat row estimates, parameter sniffing.</li>
<li><b>Implicit conversion ka jaal</b>: agar database mein column <code>varchar</code> hai par EF model use Unicode (<code>nvarchar</code>) map karta hai, to parameter type match nahi karta aur SQL Server seek ki jagah scan kar sakta hai. <code>IsUnicode(false)</code> / <code>HasColumnType("varchar(50)")</code> se sahi map karo.</li>
<li><b>4. EF mein fix</b>: N+1 hatao, project karo, <code>AsNoTracking</code>, split query, paging; index migration se jodo taaki woh review aur version ho.</li>
<li><b>5. Saabit karo aur bachaav rakho</b>: pehle/baad ke numbers, endpoint ke liye query-count test, aur dheemi dependencies par alert.</li>
</ul>
<p>TL angle: interviewers ek shaant, kram wala process aur measure karne ki aadat dekhna chahte hain — random tips ki list nahi.</p>`
      }
    },
  ],
  puzzles: [
    {
      id: "projection-tracking",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    foreach (var name in new[] { "Asha", "Ravi", "Meera" })
    {
        var c = new Customer { Name = name };
        c.Orders.Add(new Order());
        setup.Customers.Add(c);
    }
    setup.SaveChanges();
}

using var db = new ShopContext(options);

var rows = db.Customers
    .Select(c => new { c.Name, OrderCount = c.Orders.Count })
    .ToList();
Console.WriteLine($"Scalars only:  tracked = {db.ChangeTracker.Entries().Count()}");

var withEntity = db.Customers
    .Select(c => new { Customer = c, OrderCount = c.Orders.Count })
    .ToList();
Console.WriteLine($"Entity inside: tracked = {db.ChangeTracker.Entries().Count()}");

withEntity[0].Customer.Name = "Asha K";
Console.WriteLine($"Rows saved = {db.SaveChanges()}");

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Order> Orders { get; } = [];
}

public class Order
{
    public int Id { get; set; }
    public int CustomerId { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`,
      answer: "Scalars only:  tracked = 0\nEntity inside: tracked = 3\nRows saved = 1",
      explain: {
        en: `<ul>
<li>The first projection returns only a string and a number. There is no entity in the result, so <b>nothing is tracked</b> → 0. No <code>AsNoTracking()</code> needed.</li>
<li>The second projection puts the whole <code>Customer</code> entity inside the anonymous type. Entities in a projection <b>are tracked</b> (in a tracking query) → 3.</li>
<li>Because they are tracked, changing <code>Name</code> and calling <code>SaveChanges()</code> writes 1 UPDATE → <b>Rows saved = 1</b>.</li>
<li>Lesson: "projections are not tracked" is true for DTO/scalar fields — not for entities you carry inside them.</li>
</ul>`,
        hi: `<ul>
<li>पहला projection सिर्फ़ एक string और एक number लौटाता है। Result में कोई entity नहीं, इसलिए <b>कुछ track नहीं होता</b> → 0। <code>AsNoTracking()</code> की ज़रूरत नहीं।</li>
<li>दूसरा projection पूरी <code>Customer</code> entity को anonymous type के अंदर रखता है। Projection के अंदर की entities (tracking query में) <b>track होती हैं</b> → 3।</li>
<li>क्योंकि वो tracked हैं, <code>Name</code> बदलकर <code>SaveChanges()</code> call करने पर 1 UPDATE जाता है → <b>Rows saved = 1</b>।</li>
<li>सीख: "projections track नहीं होते" DTO/scalar fields के लिए सच है — उनके अंदर रखी entities के लिए नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Pehla projection sirf ek string aur ek number lautaata hai. Result mein koi entity nahi, isliye <b>kuch track nahi hota</b> → 0. <code>AsNoTracking()</code> ki zaroorat nahi.</li>
<li>Doosra projection poori <code>Customer</code> entity ko anonymous type ke andar rakhta hai. Projection ke andar ki entities (tracking query mein) <b>track hoti hain</b> → 3.</li>
<li>Kyunki woh tracked hain, <code>Name</code> badalkar <code>SaveChanges()</code> call karne par 1 UPDATE jaata hai → <b>Rows saved = 1</b>.</li>
<li>Seekh: "projections track nahi hote" DTO/scalar fields ke liye sach hai — unke andar rakhi entities ke liye nahi.</li>
</ul>`
      }
    },
    {
      id: "execute-update-stale",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using var db = new ShopContext(options);
db.Database.EnsureCreated();
db.Products.Add(new Product { Name = "Pen", Price = 10 });
db.SaveChanges();

var pen = db.Products.Single();                       // tracked, Price 10

int rows = db.Products.ExecuteUpdate(s => s.SetProperty(p => p.Price, p => p.Price + 5));
Console.WriteLine($"Rows = {rows}, tracked Price = {pen.Price}");
Console.WriteLine($"Tracking re-query Price = {db.Products.Single().Price}");
Console.WriteLine($"No-tracking Price = {db.Products.AsNoTracking().Single().Price}");

pen.Name = "Blue Pen";
db.SaveChanges();
var saved = db.Products.AsNoTracking().Single();
Console.WriteLine($"After SaveChanges: {saved.Name}, {saved.Price}");

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public int Price { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
}`,
      answer: "Rows = 1, tracked Price = 10\nTracking re-query Price = 10\nNo-tracking Price = 15\nAfter SaveChanges: Blue Pen, 15",
      explain: {
        en: `<ul>
<li><code>ExecuteUpdate</code> changes the row in the database (Price 15) and returns 1 — but the tracked <code>pen</code> object is <b>not touched</b>: still 10.</li>
<li>A tracking re-query finds the same key already tracked and returns the <b>same object</b> without overwriting it (identity resolution, Day 5) → still 10.</li>
<li><code>AsNoTracking()</code> builds a new object straight from the row → 15.</li>
<li>Changing only <code>Name</code> makes EF send <code>UPDATE ... SET Name = ...</code> — only the modified column. The bulk price survives: <b>Blue Pen, 15</b>. (Had you also changed <code>Price</code> on the stale object, you would have overwritten 15 with your value.)</li>
</ul>`,
        hi: `<ul>
<li><code>ExecuteUpdate</code> database में row बदल देता है (Price 15) और 1 लौटाता है — पर tracked <code>pen</code> object को <b>छूता भी नहीं</b>: अब भी 10।</li>
<li>Tracking re-query को वही key पहले से tracked मिलती है और वो उसे overwrite किए बिना <b>वही object</b> लौटाती है (identity resolution, Day 5) → अब भी 10।</li>
<li><code>AsNoTracking()</code> सीधे row से नया object बनाता है → 15।</li>
<li>सिर्फ़ <code>Name</code> बदलने पर EF <code>UPDATE ... SET Name = ...</code> भेजता है — सिर्फ़ बदला हुआ column। Bulk वाला price बचा रहता है: <b>Blue Pen, 15</b>। (अगर stale object पर <code>Price</code> भी बदलते, तो 15 आपकी value से overwrite हो जाता।)</li>
</ul>`,
        hg: `<ul>
<li><code>ExecuteUpdate</code> database mein row badal deta hai (Price 15) aur 1 lautaata hai — par tracked <code>pen</code> object ko <b>chhoota bhi nahi</b>: ab bhi 10.</li>
<li>Tracking re-query ko wahi key pehle se tracked milti hai aur woh use overwrite kiye bina <b>wahi object</b> lautaati hai (identity resolution, Day 5) → ab bhi 10.</li>
<li><code>AsNoTracking()</code> seedhe row se naya object banata hai → 15.</li>
<li>Sirf <code>Name</code> badalne par EF <code>UPDATE ... SET Name = ...</code> bhejta hai — sirf badla hua column. Bulk wala price bacha rehta hai: <b>Blue Pen, 15</b>. (Agar stale object par <code>Price</code> bhi badalte, to 15 aapki value se overwrite ho jaata.)</li>
</ul>`
      }
    },
    {
      id: "execute-delete-then-save",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using var db = new ShopContext(options);
db.Database.EnsureCreated();
db.Products.Add(new Product { Name = "Ink", Stock = 0 });
db.SaveChanges();

var ink = db.Products.Single();                        // tracked

int deleted = db.Products.Where(p => p.Stock == 0).ExecuteDelete();
Console.WriteLine($"Deleted = {deleted}, ink state = {db.Entry(ink).State}");

ink.Stock = 10;                                        // edit the stale entity
try
{
    db.SaveChanges();
    Console.WriteLine("Saved");
}
catch (Exception ex)
{
    Console.WriteLine(ex.GetType().Name);
    Console.WriteLine(ex.Message[..ex.Message.IndexOf(';')]);
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public int Stock { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
}`,
      answer: "Deleted = 1, ink state = Unchanged\nDbUpdateConcurrencyException\nThe database operation was expected to affect 1 row(s), but actually affected 0 row(s)",
      explain: {
        en: `<ul>
<li><code>ExecuteDelete</code> removes the row in SQL, but the change tracker does not know: <code>ink</code> stays <b>Unchanged</b>.</li>
<li>Editing it makes it Modified; <code>SaveChanges()</code> sends <code>UPDATE ... WHERE Id = 1</code>, which matches <b>0 rows</b>.</li>
<li>EF expects 1 row and treats 0 as a concurrency problem → <b>DbUpdateConcurrencyException</b>, even though there is no concurrency token at all.</li>
<li>Lesson: after bulk operations, do not keep using entities loaded earlier — clear the tracker or use a fresh context.</li>
</ul>`,
        hi: `<ul>
<li><code>ExecuteDelete</code> SQL में row हटा देता है, पर change tracker को पता नहीं चलता: <code>ink</code> <b>Unchanged</b> ही रहती है।</li>
<li>Edit करने पर वो Modified होती है; <code>SaveChanges()</code> <code>UPDATE ... WHERE Id = 1</code> भेजता है, जो <b>0 rows</b> से match करता है।</li>
<li>EF 1 row की उम्मीद करता है और 0 को concurrency problem मानता है → <b>DbUpdateConcurrencyException</b>, जबकि कोई concurrency token है ही नहीं।</li>
<li>सीख: bulk operations के बाद पहले load की गई entities use करते मत रहो — tracker clear करो या नया context लो।</li>
</ul>`,
        hg: `<ul>
<li><code>ExecuteDelete</code> SQL mein row hata deta hai, par change tracker ko pata nahi chalta: <code>ink</code> <b>Unchanged</b> hi rehti hai.</li>
<li>Edit karne par woh Modified hoti hai; <code>SaveChanges()</code> <code>UPDATE ... WHERE Id = 1</code> bhejta hai, jo <b>0 rows</b> se match karta hai.</li>
<li>EF 1 row ki ummeed karta hai aur 0 ko concurrency problem maanta hai → <b>DbUpdateConcurrencyException</b>, jabki koi concurrency token hai hi nahi.</li>
<li>Seekh: bulk operations ke baad pehle load ki gayi entities use karte mat raho — tracker clear karo ya naya context lo.</li>
</ul>`
      }
    },
    {
      id: "token-on-one-column",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using System.ComponentModel.DataAnnotations;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    setup.Products.Add(new Product { Name = "Pen", Price = 10, Stock = 5 });
    setup.SaveChanges();
}

Console.WriteLine("Round 1: " + Race(options, p => p.Stock = 4, p => p.Name = "Blue Pen"));
Console.WriteLine("Round 2: " + Race(options, p => p.Price = 12, p => p.Name = "Red Pen"));

// Two users load the same row; A saves first, then B saves
static string Race(DbContextOptions<ShopContext> options, Action<Product> userA, Action<Product> userB)
{
    using var a = new ShopContext(options);
    using var b = new ShopContext(options);
    var pa = a.Products.Single();
    var pb = b.Products.Single();
    userA(pa);
    a.SaveChanges();
    userB(pb);
    try
    {
        b.SaveChanges();
        return "B saved";
    }
    catch (DbUpdateConcurrencyException)
    {
        return "B conflict";
    }
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    [ConcurrencyCheck] public int Price { get; set; }   // token on Price only
    public int Stock { get; set; }
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
}`,
      answer: "Round 1: B saved\nRound 2: B conflict",
      explain: {
        en: `<ul>
<li>B's UPDATE always contains <code>WHERE Id = @id AND Price = @originalPrice</code> — the token's original value is checked even when B did not change <code>Price</code>.</li>
<li>Round 1: A changed <code>Stock</code>, not <code>Price</code>. The price in the database still equals B's original price → 1 row matches → <b>B saved</b>. Two users edited the same row and nobody was warned.</li>
<li>Round 2: A changed <code>Price</code> (10 → 12). B's <code>WHERE Price = 10</code> now matches 0 rows → <b>B conflict</b>.</li>
<li>Lesson: a token on one ordinary column only guards that column. A <code>rowversion</code> (or a version number changed on every save) guards the whole row.</li>
</ul>`,
        hi: `<ul>
<li>B के UPDATE में हमेशा <code>WHERE Id = @id AND Price = @originalPrice</code> होता है — token की original value check होती है, भले ही B ने <code>Price</code> न बदला हो।</li>
<li>Round 1: A ने <code>Stock</code> बदला, <code>Price</code> नहीं। Database में price अब भी B की original price के बराबर है → 1 row match → <b>B saved</b>। दो users ने एक ही row edit की और किसी को warning नहीं मिली।</li>
<li>Round 2: A ने <code>Price</code> बदला (10 → 12)। अब B का <code>WHERE Price = 10</code> 0 rows से match करता है → <b>B conflict</b>।</li>
<li>सीख: एक साधारण column पर token सिर्फ़ उसी column की रक्षा करता है। <code>rowversion</code> (या हर save पर बदलने वाला version number) पूरी row की रक्षा करता है।</li>
</ul>`,
        hg: `<ul>
<li>B ke UPDATE mein hamesha <code>WHERE Id = @id AND Price = @originalPrice</code> hota hai — token ki original value check hoti hai, bhale hi B ne <code>Price</code> na badla ho.</li>
<li>Round 1: A ne <code>Stock</code> badla, <code>Price</code> nahi. Database mein price ab bhi B ki original price ke baraabar hai → 1 row match → <b>B saved</b>. Do users ne ek hi row edit ki aur kisi ko warning nahi mili.</li>
<li>Round 2: A ne <code>Price</code> badla (10 → 12). Ab B ka <code>WHERE Price = 10</code> 0 rows se match karta hai → <b>B conflict</b>.</li>
<li>Seekh: ek saadhaaran column par token sirf usi column ki raksha karta hai. <code>rowversion</code> (ya har save par badalne wala version number) poori row ki raksha karta hai.</li>
</ul>`
      }
    },
    {
      id: "sql-injection",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using var db = new ShopContext(options);
db.Database.EnsureCreated();
db.Customers.AddRange(
    new Customer { Name = "Asha", City = "Pune" },
    new Customer { Name = "Ravi", City = "Delhi" },
    new Customer { Name = "Meera", City = "Chennai" });
db.SaveChanges();

string city = "Pune' OR '1'='1";      // typed by an attacker into the search box

// DON'T: the input becomes part of the SQL text
int glued = db.Customers
    .FromSqlRaw("SELECT * FROM Customers WHERE City = '" + city + "'")
    .Count();

// DO: the input travels as a parameter
int interpolated = db.Customers
    .FromSql($"SELECT * FROM Customers WHERE City = {city}")
    .Count();
int placeholder = db.Customers
    .FromSqlRaw("SELECT * FROM Customers WHERE City = {0}", city)
    .Count();

Console.WriteLine($"Concatenated:    {glued}");
Console.WriteLine($"FromSql:         {interpolated}");
Console.WriteLine($"FromSqlRaw {{0}}:  {placeholder}");

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string City { get; set; } = "";
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`,
      answer: "Concatenated:    3\nFromSql:         0\nFromSqlRaw {0}:  0",
      explain: {
        en: `<ul>
<li>Concatenation produces <code>WHERE City = 'Pune' OR '1'='1'</code>. <code>'1'='1'</code> is true for every row → <b>3</b>: the attacker sees every customer.</li>
<li><code>FromSql($"...{city}")</code> sends <code>WHERE City = @p0</code> with the whole input as the value. No city is literally called <code>Pune' OR '1'='1</code> → <b>0</b>.</li>
<li><code>FromSqlRaw</code> with a <code>{0}</code> placeholder also creates a parameter → <b>0</b>.</li>
<li>Note: the EF1002 analyzer warns about interpolated strings in <code>FromSqlRaw</code>, but on EF Core 9 (this checker) the <code>+</code> concatenation compiles with no warning. EF Core 10 adds a concatenation warning — still, code review is the real guard.</li>
</ul>`,
        hi: `<ul>
<li>String जोड़ने से <code>WHERE City = 'Pune' OR '1'='1'</code> बनता है। <code>'1'='1'</code> हर row के लिए true है → <b>3</b>: attacker को हर customer दिख जाता है।</li>
<li><code>FromSql($"...{city}")</code> <code>WHERE City = @p0</code> भेजता है और पूरा input value की तरह जाता है। किसी city का नाम सच में <code>Pune' OR '1'='1</code> नहीं है → <b>0</b>।</li>
<li><code>{0}</code> placeholder वाला <code>FromSqlRaw</code> भी parameter बनाता है → <b>0</b>।</li>
<li>ध्यान दो: EF1002 analyzer <code>FromSqlRaw</code> में interpolated strings पर warning देता है, पर EF Core 9 (यह checker) पर <code>+</code> वाला जोड़ बिना किसी warning के compile हो जाता है। EF Core 10 जोड़ने पर भी warning देता है — फिर भी असली पहरा code review का है।</li>
</ul>`,
        hg: `<ul>
<li>String jodne se <code>WHERE City = 'Pune' OR '1'='1'</code> banta hai. <code>'1'='1'</code> har row ke liye true hai → <b>3</b>: attacker ko har customer dikh jaata hai.</li>
<li><code>FromSql($"...{city}")</code> <code>WHERE City = @p0</code> bhejta hai aur poora input value ki tarah jaata hai. Kisi city ka naam sach mein <code>Pune' OR '1'='1</code> nahi hai → <b>0</b>.</li>
<li><code>{0}</code> placeholder wala <code>FromSqlRaw</code> bhi parameter banata hai → <b>0</b>.</li>
<li>Dhyaan do: EF1002 analyzer <code>FromSqlRaw</code> mein interpolated strings par warning deta hai, par EF Core 9 (yeh checker) par <code>+</code> wala jod bina kisi warning ke compile ho jaata hai. EF Core 10 jodne par bhi warning deta hai — phir bhi asli pehra code review ka hai.</li>
</ul>`
      }
    },
    {
      id: "translate-or-throw",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using var db = new ShopContext(options);
db.Database.EnsureCreated();
db.Customers.AddRange(new Customer { Name = "Asha" }, new Customer { Name = "Ravi" });
db.SaveChanges();

// 1. Your own C# method in the FINAL Select
var labels = db.Customers.OrderBy(c => c.Id).Select(c => Text.Shout(c.Name)).ToList();
Console.WriteLine("Select:   " + string.Join(", ", labels));

// 2. A string method EF knows how to translate
var found = db.Customers.Where(c => c.Name.ToUpper() == "ASHA").Select(c => c.Name).ToList();
Console.WriteLine("ToUpper:  " + string.Join(", ", found));

// 3. Your own C# method in a Where
try
{
    var bad = db.Customers.Where(c => Text.Shout(c.Name) == "ASHA!").ToList();
    Console.WriteLine("Where:    " + bad.Count);
}
catch (InvalidOperationException ex)
{
    Console.WriteLine("Where:    " + ex.GetType().Name + " - " + (ex.Message.Contains("could not be translated") ? "could not be translated" : "?"));
}

static class Text
{
    public static string Shout(string s) => s.ToUpperInvariant() + "!";
}

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`,
      answer: "Select:   ASHA!, RAVI!\nToUpper:  Asha\nWhere:    InvalidOperationException - could not be translated",
      explain: {
        en: `<ul>
<li><b>Select</b>: in the final projection EF reads <code>Name</code> with SQL and then calls <code>Text.Shout</code> in C# on each row → <b>ASHA!, RAVI!</b>.</li>
<li><b>ToUpper</b>: EF knows this method and translates it to SQL <code>upper(...)</code> → the filter runs in the database → <b>Asha</b>.</li>
<li><b>Where</b> with your own method: EF cannot turn <code>Text.Shout</code> into SQL, and since EF Core 3.0 it refuses to filter in memory silently → <b>InvalidOperationException ... could not be translated</b>.</li>
<li>Side note: the method lives in a class, not as a local function — C# does not allow a local function inside an expression tree (CS8110).</li>
</ul>`,
        hi: `<ul>
<li><b>Select</b>: final projection में EF SQL से <code>Name</code> पढ़ता है और फिर हर row पर C# में <code>Text.Shout</code> call करता है → <b>ASHA!, RAVI!</b>।</li>
<li><b>ToUpper</b>: EF यह method जानता है और इसे SQL के <code>upper(...)</code> में translate करता है → filter database में चलता है → <b>Asha</b>।</li>
<li>अपने method वाला <b>Where</b>: EF <code>Text.Shout</code> को SQL में नहीं बदल सकता, और EF Core 3.0 से वो चुपचाप memory में filter करने से मना करता है → <b>InvalidOperationException ... could not be translated</b>।</li>
<li>एक बात और: method एक class में है, local function नहीं — C# expression tree के अंदर local function की इजाज़त नहीं देता (CS8110)।</li>
</ul>`,
        hg: `<ul>
<li><b>Select</b>: final projection mein EF SQL se <code>Name</code> padhta hai aur phir har row par C# mein <code>Text.Shout</code> call karta hai → <b>ASHA!, RAVI!</b>.</li>
<li><b>ToUpper</b>: EF yeh method jaanta hai aur ise SQL ke <code>upper(...)</code> mein translate karta hai → filter database mein chalta hai → <b>Asha</b>.</li>
<li>Apne method wala <b>Where</b>: EF <code>Text.Shout</code> ko SQL mein nahi badal sakta, aur EF Core 3.0 se woh chupchaap memory mein filter karne se mana karta hai → <b>InvalidOperationException ... could not be translated</b>.</li>
<li>Ek baat aur: method ek class mein hai, local function nahi — C# expression tree ke andar local function ki ijaazat nahi deta (CS8110).</li>
</ul>`
      }
    },
    {
      id: "savepoint-in-transaction",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;
using var db = new ShopContext(options);
db.Database.EnsureCreated();

using (var tx = db.Database.BeginTransaction())
{
    db.Products.Add(new Product { Code = "PEN" });
    Console.WriteLine($"Save 1 = {db.SaveChanges()}");

    db.Products.Add(new Product { Code = "PEN" });          // breaks the unique index
    try
    {
        db.SaveChanges();
    }
    catch (DbUpdateException ex)
    {
        Console.WriteLine($"Save 2 failed: {ex.GetType().Name}");
    }

    db.ChangeTracker.Clear();
    db.Products.Add(new Product { Code = "INK" });
    Console.WriteLine($"Save 3 = {db.SaveChanges()}");

    tx.Commit();
}

var codes = db.Products.AsNoTracking().OrderBy(p => p.Id).Select(p => p.Code).ToList();
Console.WriteLine("After commit: " + string.Join(", ", codes));

public class Product
{
    public int Id { get; set; }
    public string Code { get; set; } = "";
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    protected override void OnModelCreating(ModelBuilder modelBuilder)
        => modelBuilder.Entity<Product>().HasIndex(p => p.Code).IsUnique();
}`,
      answer: "Save 1 = 1\nSave 2 failed: DbUpdateException\nSave 3 = 1\nAfter commit: PEN, INK",
      explain: {
        en: `<ul>
<li>Inside a transaction you started, each <code>SaveChanges()</code> first creates a <b>savepoint</b> (EF Core 5+).</li>
<li>Save 2 breaks the unique index → <code>DbUpdateException</code>. EF rolls back only to <b>its</b> savepoint, so PEN from Save 1 is still part of the open transaction.</li>
<li><code>ChangeTracker.Clear()</code> drops the failed duplicate (it would otherwise be retried by the next save). Save 3 adds INK.</li>
<li><code>Commit()</code> keeps everything that is still in the transaction → <b>PEN, INK</b>. Without the commit (or with <code>Rollback()</code>), both would be gone.</li>
</ul>`,
        hi: `<ul>
<li>आपके शुरू किए transaction के अंदर हर <code>SaveChanges()</code> पहले एक <b>savepoint</b> बनाता है (EF Core 5+)।</li>
<li>Save 2 unique index तोड़ता है → <code>DbUpdateException</code>। EF सिर्फ़ <b>अपने</b> savepoint तक rollback करता है, इसलिए Save 1 वाला PEN अब भी खुले transaction का हिस्सा है।</li>
<li><code>ChangeTracker.Clear()</code> fail हुए duplicate को हटा देता है (वरना अगला save उसे फिर कोशिश करता)। Save 3 INK जोड़ता है।</li>
<li><code>Commit()</code> transaction में बची हर चीज़ रखता है → <b>PEN, INK</b>। Commit के बिना (या <code>Rollback()</code> के साथ) दोनों चले जाते।</li>
</ul>`,
        hg: `<ul>
<li>Aapke shuru kiye transaction ke andar har <code>SaveChanges()</code> pehle ek <b>savepoint</b> banata hai (EF Core 5+).</li>
<li>Save 2 unique index todta hai → <code>DbUpdateException</code>. EF sirf <b>apne</b> savepoint tak rollback karta hai, isliye Save 1 wala PEN ab bhi khule transaction ka hissa hai.</li>
<li><code>ChangeTracker.Clear()</code> fail hue duplicate ko hata deta hai (warna agla save use phir koshish karta). Save 3 INK jodta hai.</li>
<li><code>Commit()</code> transaction mein bachi har cheez rakhta hai → <b>PEN, INK</b>. Commit ke bina (ya <code>Rollback()</code> ke saath) dono chale jaate.</li>
</ul>`
      }
    },
    {
      id: "split-query-rows",
      packages: ["Microsoft.EntityFrameworkCore.Sqlite"],
      src: `using System.Data.Common;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;

using var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
var counter = new QueryCounter();
var options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).AddInterceptors(counter).Options;
using (var setup = new ShopContext(options))
{
    setup.Database.EnsureCreated();
    foreach (var name in new[] { "Asha", "Ravi", "Meera" })
    {
        var c = new Customer { Name = name };
        for (int i = 0; i < 2; i++) c.Orders.Add(new Order());
        for (int i = 0; i < 3; i++) c.Addresses.Add(new Address());
        setup.Customers.Add(c);
    }
    setup.SaveChanges();
}

using (var db = new ShopContext(options))
{
    var query = db.Customers.Include(c => c.Orders).Include(c => c.Addresses);

    counter.Count = 0;
    var single = query.ToList();
    Console.WriteLine($"Single query: commands = {counter.Count}, orders = {single.Sum(c => c.Orders.Count)}, addresses = {single.Sum(c => c.Addresses.Count)}");

    // How many rows did that one JOIN return? Run its SQL by hand and count.
    using var cmd = connection.CreateCommand();
    cmd.CommandText = query.ToQueryString();
    using var reader = cmd.ExecuteReader();
    int rows = 0;
    while (reader.Read()) rows++;
    Console.WriteLine($"Rows in the JOIN result = {rows}");
}

using (var db = new ShopContext(options))
{
    counter.Count = 0;
    var split = db.Customers.Include(c => c.Orders).Include(c => c.Addresses).AsSplitQuery().ToList();
    Console.WriteLine($"Split query:  commands = {counter.Count}, orders = {split.Sum(c => c.Orders.Count)}, addresses = {split.Sum(c => c.Addresses.Count)}");
}

public class QueryCounter : DbCommandInterceptor
{
    public int Count;
    public override DbDataReader ReaderExecuted(DbCommand command, CommandExecutedEventData eventData, DbDataReader result)
    {
        Count++;
        return result;
    }
}

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Order> Orders { get; } = [];
    public List<Address> Addresses { get; } = [];
}

public class Order { public int Id { get; set; } public int CustomerId { get; set; } }
public class Address { public int Id { get; set; } public int CustomerId { get; set; } }

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();
}`,
      answer: "Single query: commands = 1, orders = 6, addresses = 9\nRows in the JOIN result = 18\nSplit query:  commands = 3, orders = 6, addresses = 9",
      explain: {
        en: `<ul>
<li>Single query: one SQL with two <code>LEFT JOIN</code>s. EF still builds the right objects — 6 orders and 9 addresses — by de-duplicating rows on the keys.</li>
<li>But the JOIN itself returns <b>orders × addresses per customer</b>: 2 × 3 = 6 rows per customer, × 3 customers = <b>18 rows</b> to carry 15 child objects, and each customer's columns repeat 6 times. With 50 orders and 20 addresses it would be 1,000 rows per customer.</li>
<li>Split query: <b>3 commands</b> — customers, then orders, then addresses — and each row comes back once. Same objects, more round trips.</li>
</ul>`,
        hi: `<ul>
<li>Single query: दो <code>LEFT JOIN</code> वाला एक SQL। EF फिर भी सही objects बनाता है — 6 orders और 9 addresses — keys पर rows के duplicates हटाकर।</li>
<li>पर JOIN खुद <b>हर customer के orders × addresses</b> लौटाता है: हर customer की 2 × 3 = 6 rows, × 3 customers = 15 child objects के लिए <b>18 rows</b>, और हर customer के columns 6 बार दोहराए जाते हैं। 50 orders और 20 addresses होते तो हर customer की 1,000 rows।</li>
<li>Split query: <b>3 commands</b> — customers, फिर orders, फिर addresses — और हर row एक ही बार आती है। Objects वही, round trips ज़्यादा।</li>
</ul>`,
        hg: `<ul>
<li>Single query: do <code>LEFT JOIN</code> wala ek SQL. EF phir bhi sahi objects banata hai — 6 orders aur 9 addresses — keys par rows ke duplicates hataakar.</li>
<li>Par JOIN khud <b>har customer ke orders × addresses</b> lautaata hai: har customer ki 2 × 3 = 6 rows, × 3 customers = 15 child objects ke liye <b>18 rows</b>, aur har customer ke columns 6 baar dohraaye jaate hain. 50 orders aur 20 addresses hote to har customer ki 1,000 rows.</li>
<li>Split query: <b>3 commands</b> — customers, phir orders, phir addresses — aur har row ek hi baar aati hai. Objects wahi, round trips zyaada.</li>
</ul>`
      }
    },
  ],
  revision: {
    en: [
      "<b>N+1</b> = 1 query for the list + 1 per row; the fix is to load in one go (<code>Include</code>, a projection or one batch query).",
      "<b>See the SQL</b>: <code>ToQueryString()</code> for one query, <code>LogTo</code> / Database.Command logging for all, <code>TagWith</code> to find it in Query Store.",
      "<b>Projection</b> (<code>Select</code> into a DTO) = only needed columns, COUNT/SUM done in SQL, nothing tracked.",
      "<b>Cartesian explosion</b>: two collection Includes multiply rows; <code>AsSplitQuery()</code> sends one SQL per collection, at the cost of more round trips.",
      "<b><code>FromSql($\"...{x}\")</code></b> sends x as a parameter — safe. <code>FromSqlRaw</code> with string concatenation = SQL injection.",
      "<b><code>SqlQuery&lt;T&gt;</code></b> returns non-entity results: scalars (EF Core 7) and unmapped DTOs (EF Core 8).",
      "<b>Transactions</b>: one <code>SaveChanges()</code> is atomic; <code>BeginTransaction()</code> ties several SaveChanges / ExecuteUpdate / raw SQL calls into one commit or rollback.",
      "<b>Retries</b>: <code>EnableRetryOnFailure()</code>; with retries on, run the whole transaction inside <code>CreateExecutionStrategy().Execute(...)</code>.",
      "<b>Optimistic concurrency</b>: <code>[Timestamp]</code> rowversion goes into the UPDATE's WHERE; 0 rows → <code>DbUpdateConcurrencyException</code> → store wins, client wins or merge.",
      "<b>ExecuteUpdate / ExecuteDelete</b> (EF Core 7): one set-based SQL statement, no loading — but tracked entities go stale and SaveChanges logic is skipped.",
      "<b>Client evaluation</b>: since EF Core 3.0 an untranslatable <code>Where</code> throws; only the final <code>Select</code> may call your C# methods.",
      "<b>Performance</b>: measure first — read the SQL and its execution plan before reaching for compiled queries or pooling."
    ],
    meaning: {
      hi: [
        "N+1 = list के लिए 1 query + हर row के लिए 1; fix है एक बार में load करना (Include, projection या एक batch query)।",
        "SQL देखो: एक query के लिए ToQueryString(), सबके लिए LogTo / Database.Command logging, और Query Store में ढूँढने के लिए TagWith।",
        "Projection (Select से DTO) = सिर्फ़ ज़रूरी columns, COUNT/SUM SQL में, कुछ भी track नहीं।",
        "Cartesian explosion: दो collection Includes rows को गुणा करते हैं; AsSplitQuery() हर collection के लिए एक SQL भेजता है, बदले में round trips ज़्यादा।",
        "FromSql($\"...{x}\") x को parameter बनाकर भेजता है — safe। FromSqlRaw के साथ string जोड़ना = SQL injection।",
        "SqlQuery&lt;T&gt; non-entity results लौटाता है: scalars (EF Core 7) और unmapped DTOs (EF Core 8)।",
        "Transactions: एक SaveChanges() atomic है; BeginTransaction() कई SaveChanges / ExecuteUpdate / raw SQL calls को एक commit या rollback में बाँधता है।",
        "Retries: EnableRetryOnFailure(); retries चालू हों तो पूरा transaction CreateExecutionStrategy().Execute(...) के अंदर चलाओ।",
        "Optimistic concurrency: [Timestamp] rowversion UPDATE के WHERE में जाता है; 0 rows → DbUpdateConcurrencyException → store wins, client wins या merge।",
        "ExecuteUpdate / ExecuteDelete (EF Core 7): एक set-based SQL statement, कुछ load नहीं — पर tracked entities पुरानी पड़ जाती हैं और SaveChanges logic skip होता है।",
        "Client evaluation: EF Core 3.0 से translate न होने वाला Where throw करता है; सिर्फ़ final Select में आपके C# methods call हो सकते हैं।",
        "Performance: पहले measure करो — compiled queries या pooling की तरफ़ जाने से पहले SQL और उसका execution plan पढ़ो।"
      ],
      hg: [
        "N+1 = list ke liye 1 query + har row ke liye 1; fix hai ek baar mein load karna (Include, projection ya ek batch query).",
        "SQL dekho: ek query ke liye ToQueryString(), sabke liye LogTo / Database.Command logging, aur Query Store mein dhoondhne ke liye TagWith.",
        "Projection (Select se DTO) = sirf zaroori columns, COUNT/SUM SQL mein, kuch bhi track nahi.",
        "Cartesian explosion: do collection Includes rows ko guna karte hain; AsSplitQuery() har collection ke liye ek SQL bhejta hai, badle mein round trips zyaada.",
        "FromSql($\"...{x}\") x ko parameter banakar bhejta hai — safe. FromSqlRaw ke saath string jodna = SQL injection.",
        "SqlQuery&lt;T&gt; non-entity results lautaata hai: scalars (EF Core 7) aur unmapped DTOs (EF Core 8).",
        "Transactions: ek SaveChanges() atomic hai; BeginTransaction() kai SaveChanges / ExecuteUpdate / raw SQL calls ko ek commit ya rollback mein baandhta hai.",
        "Retries: EnableRetryOnFailure(); retries chaalu hon to poora transaction CreateExecutionStrategy().Execute(...) ke andar chalao.",
        "Optimistic concurrency: [Timestamp] rowversion UPDATE ke WHERE mein jaata hai; 0 rows → DbUpdateConcurrencyException → store wins, client wins ya merge.",
        "ExecuteUpdate / ExecuteDelete (EF Core 7): ek set-based SQL statement, kuch load nahi — par tracked entities purani pad jaati hain aur SaveChanges logic skip hota hai.",
        "Client evaluation: EF Core 3.0 se translate na hone wala Where throw karta hai; sirf final Select mein aapke C# methods call ho sakte hain.",
        "Performance: pehle measure karo — compiled queries ya pooling ki taraf jaane se pehle SQL aur uska execution plan padho."
      ]
    }
  },
  whatsNew: {
    en: `<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, requires .NET 10). Everything in today's lesson still applies in EF Core 10. Many blog answers predate the features below — this is what each version <b>added</b>:</p>
<ul>
<li><b>EF Core 5</b> — split queries (<code>AsSplitQuery</code>); automatic savepoints when <code>SaveChanges()</code> runs inside your own transaction.</li>
<li><b>EF Core 6</b> — compiled models (<code>dotnet ef dbcontext optimize</code>) for faster startup of large models.</li>
<li><b>EF Core 7</b> — <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>; the shorter <code>FromSql</code>/<code>ExecuteSql</code> names for the interpolated (parameterized) methods; <code>SqlQuery</code> for scalar results; mapping inserts/updates/deletes to stored procedures.</li>
<li><b>EF Core 8</b> — <code>SqlQuery&lt;T&gt;</code> for unmapped types (any DTO, matched by column name).</li>
<li><b>EF Core 9</b> — experimental NativeAOT support with <b>precompiled queries</b>: LINQ queries are translated to SQL at publish time instead of at runtime (a step beyond <code>EF.CompileQuery</code>).</li>
<li><b>EF Core 10</b> — <code>ExecuteUpdateAsync</code> accepts a regular lambda for the setters, so you can add <code>SetProperty</code> calls conditionally (before, it had to be an expression tree); <b>named query filters</b> — several global filters per entity (for example soft delete + tenant) that you can switch off one at a time with <code>IgnoreQueryFilters(["SoftDelete"])</code>.</li>
<li><b>EF Core 10, also</b> — split queries keep the same ordering (including the key) in every query, fixing a paging consistency bug; an analyzer warning for string concatenation inside raw SQL methods; simpler SQL parameter names (<code>@city</code> instead of <code>@__city_0</code>); and <code>ids.Contains(...)</code> now becomes <code>IN (@ids1, @ids2, ...)</code> with one parameter per value by default.</li>
</ul>
<p>This tutorial's checker runs every EF snippet on EF Core 9 (.NET 9 SDK). The printed SQL is real SQL Server SQL from EF Core 9; on EF Core 10 the parameter names are simpler and aliases can differ slightly.</p>`,
    hi: `<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, .NET 10 चाहिए)। आज के lesson की हर बात EF Core 10 में भी लागू है। कई blog answers नीचे के features से पहले के हैं — हर version ने यह <b>जोड़ा</b>:</p>
<ul>
<li><b>EF Core 5</b> — split queries (<code>AsSplitQuery</code>); आपके अपने transaction के अंदर <code>SaveChanges()</code> चलने पर अपने-आप savepoints।</li>
<li><b>EF Core 6</b> — बड़े models के तेज़ startup के लिए compiled models (<code>dotnet ef dbcontext optimize</code>)।</li>
<li><b>EF Core 7</b> — <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>; interpolated (parameterized) methods के छोटे नाम <code>FromSql</code>/<code>ExecuteSql</code>; scalar results के लिए <code>SqlQuery</code>; inserts/updates/deletes को stored procedures पर map करना।</li>
<li><b>EF Core 8</b> — unmapped types के लिए <code>SqlQuery&lt;T&gt;</code> (कोई भी DTO, column name से match)।</li>
<li><b>EF Core 9</b> — <b>precompiled queries</b> के साथ experimental NativeAOT support: LINQ queries runtime की बजाय publish के समय SQL में translate होती हैं (<code>EF.CompileQuery</code> से एक कदम आगे)।</li>
<li><b>EF Core 10</b> — <code>ExecuteUpdateAsync</code> setters के लिए एक normal lambda लेता है, इसलिए <code>SetProperty</code> calls शर्त के साथ जोड़ सकते हो (पहले expression tree ज़रूरी था); <b>named query filters</b> — हर entity पर कई global filters (जैसे soft delete + tenant) जिन्हें <code>IgnoreQueryFilters(["SoftDelete"])</code> से एक-एक करके बंद कर सकते हो।</li>
<li><b>EF Core 10, और भी</b> — split queries हर query में एक जैसी ordering (key समेत) रखती हैं, जिससे paging का एक consistency bug ठीक हुआ; raw SQL methods के अंदर string जोड़ने पर analyzer warning; आसान SQL parameter names (<code>@__city_0</code> की जगह <code>@city</code>); और <code>ids.Contains(...)</code> अब by default <code>IN (@ids1, @ids2, ...)</code> बनता है, हर value का एक parameter।</li>
</ul>
<p>इस tutorial का checker हर EF snippet EF Core 9 (.NET 9 SDK) पर चलाता है। Print हुआ SQL EF Core 9 का असली SQL Server SQL है; EF Core 10 पर parameter names आसान होते हैं और aliases थोड़े अलग हो सकते हैं।</p>`,
    hg: `<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, .NET 10 chahiye). Aaj ke lesson ki har baat EF Core 10 mein bhi laagu hai. Kai blog answers neeche ke features se pehle ke hain — har version ne yeh <b>joda</b>:</p>
<ul>
<li><b>EF Core 5</b> — split queries (<code>AsSplitQuery</code>); aapke apne transaction ke andar <code>SaveChanges()</code> chalne par apne-aap savepoints.</li>
<li><b>EF Core 6</b> — bade models ke tez startup ke liye compiled models (<code>dotnet ef dbcontext optimize</code>).</li>
<li><b>EF Core 7</b> — <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>; interpolated (parameterized) methods ke chhote naam <code>FromSql</code>/<code>ExecuteSql</code>; scalar results ke liye <code>SqlQuery</code>; inserts/updates/deletes ko stored procedures par map karna.</li>
<li><b>EF Core 8</b> — unmapped types ke liye <code>SqlQuery&lt;T&gt;</code> (koi bhi DTO, column name se match).</li>
<li><b>EF Core 9</b> — <b>precompiled queries</b> ke saath experimental NativeAOT support: LINQ queries runtime ki bajaay publish ke samay SQL mein translate hoti hain (<code>EF.CompileQuery</code> se ek kadam aage).</li>
<li><b>EF Core 10</b> — <code>ExecuteUpdateAsync</code> setters ke liye ek normal lambda leta hai, isliye <code>SetProperty</code> calls shart ke saath jod sakte ho (pehle expression tree zaroori tha); <b>named query filters</b> — har entity par kai global filters (jaise soft delete + tenant) jinhe <code>IgnoreQueryFilters(["SoftDelete"])</code> se ek-ek karke band kar sakte ho.</li>
<li><b>EF Core 10, aur bhi</b> — split queries har query mein ek jaisi ordering (key samet) rakhti hain, jisse paging ka ek consistency bug theek hua; raw SQL methods ke andar string jodne par analyzer warning; aasaan SQL parameter names (<code>@__city_0</code> ki jagah <code>@city</code>); aur <code>ids.Contains(...)</code> ab by default <code>IN (@ids1, @ids2, ...)</code> banta hai, har value ka ek parameter.</li>
</ul>
<p>Is tutorial ka checker har EF snippet EF Core 9 (.NET 9 SDK) par chalata hai. Print hua SQL EF Core 9 ka asli SQL Server SQL hai; EF Core 10 par parameter names aasaan hote hain aur aliases thode alag ho sakte hain.</p>`
  }
};
