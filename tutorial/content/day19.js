// Day 19 — PostgreSQL and data-store choices. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 19,
  title: {
    en: "PostgreSQL and data choices — Postgres vs SQL Server, JSONB, indexing, EF Core with Npgsql, SQL vs NoSQL",
    hi: "PostgreSQL और data choices — Postgres बनाम SQL Server, JSONB, indexing, Npgsql के साथ EF Core, SQL बनाम NoSQL",
    hg: "PostgreSQL aur data choices — Postgres vs SQL Server, JSONB, indexing, Npgsql ke saath EF Core, SQL vs NoSQL"
  },
  summary: {
    en: `<p>PostgreSQL is your weakest database skill (3/10), but a Tech Lead is rarely asked for Postgres trivia. The questions are "<b>how is it different from SQL Server, and when would you pick something else?</b>" Today you map what you already know from Day 18 onto Postgres.</p>
<ul>
<li><b>MVCC:</b> an UPDATE writes a <b>new row version in the table itself</b>; old versions are dead until <b>VACUUM</b> (autovacuum) cleans them. SQL Server keeps row versions (when RCSI or SNAPSHOT is on) in the tempdb version store by default (with Accelerated Database Recovery, 2019+, a persistent version store in the user database).</li>
<li><b>Isolation:</b> READ COMMITTED is the default and plain reads do not block writers. Repeatable Read in Postgres is a snapshot and does not allow phantoms.</li>
<li><b>Everyday differences:</b> identity columns and sequences, unquoted names folded to lower case, case-sensitive text comparison (<code>ILIKE</code>, citext), <code>INSERT ... ON CONFLICT</code> (MERGE arrived in Postgres 15), <code>RETURNING</code> (SQL Server: <code>OUTPUT</code>), <code>LIMIT/OFFSET</code>.</li>
<li><b>JSONB and indexes:</b> binary JSON with <code>-&gt;</code>, <code>-&gt;&gt;</code>, <code>@&gt;</code>; B-tree (default), GIN, GiST, BRIN, partial and expression indexes, <code>INCLUDE</code> (Postgres 11).</li>
<li><b>.NET side:</b> Npgsql, <code>UseNpgsql</code>, snake_case naming, UTC-only <code>timestamptz</code>, connection pooling and PgBouncer (EF Core itself: Day 5 and 6).</li>
<li><b>Data-store choice:</b> when Cosmos DB, MongoDB or Redis earns its place, and the cost of polyglot persistence (system-design view: Day 17, caching: Day 13).</li>
</ul>
<p>Plan (Short about 20 minutes; Detailed is reference, see the estimate on this page): Short mode, then Q&amp;A aloud, then the sections (the Postgres snippets are labelled and are not run here, there is no local Postgres), then the six puzzles, which all run on .NET or SQL Server.</p>`,
    hi: `<p>PostgreSQL तुम्हारी सबसे कमज़ोर database skill है (3/10), लेकिन Tech Lead से Postgres की trivia कम ही पूछी जाती है। सवाल होता है "<b>यह SQL Server से अलग कैसे है, और कब कुछ और चुनोगे?</b>" आज तुम Day 18 में जो जानते हो उसे Postgres पर map करोगे।</p>
<ul>
<li><b>MVCC:</b> UPDATE <b>table के अंदर ही नया row version</b> लिखता है; पुराने versions dead रहते हैं जब तक <b>VACUUM</b> (autovacuum) उन्हें साफ़ न करे। SQL Server में RCSI या SNAPSHOT on हो तो row versions by default tempdb के version store में रहते हैं (Accelerated Database Recovery, 2019+, में user database का persistent version store)।</li>
<li><b>Isolation:</b> READ COMMITTED default है और सादी reads writers को block नहीं करतीं। Postgres का Repeatable Read एक snapshot है और उसमें phantoms नहीं आते।</li>
<li><b>रोज़ के फ़र्क:</b> identity columns और sequences, बिना quote वाले नाम lower case में बदल जाते हैं, text comparison case-sensitive है (<code>ILIKE</code>, citext), <code>INSERT ... ON CONFLICT</code> (MERGE Postgres 15 में आया), <code>RETURNING</code> (SQL Server में <code>OUTPUT</code>), <code>LIMIT/OFFSET</code>।</li>
<li><b>JSONB और indexes:</b> binary JSON, operators <code>-&gt;</code>, <code>-&gt;&gt;</code>, <code>@&gt;</code>; B-tree (default), GIN, GiST, BRIN, partial और expression indexes, <code>INCLUDE</code> (Postgres 11)।</li>
<li><b>.NET की तरफ़:</b> Npgsql, <code>UseNpgsql</code>, snake_case naming, सिर्फ़ UTC वाला <code>timestamptz</code>, connection pooling और PgBouncer (EF Core खुद: Day 5 और 6)।</li>
<li><b>Data-store का चुनाव:</b> Cosmos DB, MongoDB या Redis कब जगह कमाता है, और polyglot persistence की कीमत (system-design view: Day 17, caching: Day 13)।</li>
</ul>
<p>Plan (Short लगभग 20 मिनट; Detailed reference है, इस page का estimate देखो): पहले Short mode, फिर Q&amp;A ज़ोर से, फिर sections (Postgres वाले snippets पर label है और यहाँ चलते नहीं, क्योंकि local Postgres नहीं है), फिर छह puzzles जो सब .NET या SQL Server पर चलते हैं।</p>`,
    hg: `<p>PostgreSQL tumhari sabse kamzor database skill hai (3/10), lekin Tech Lead se Postgres ki trivia kam hi poochi jaati hai. Sawaal hota hai "<b>yeh SQL Server se alag kaise hai, aur kab kuch aur chunoge?</b>" Aaj tum Day 18 mein jo jaante ho use Postgres par map karoge.</p>
<ul>
<li><b>MVCC:</b> UPDATE <b>table ke andar hi naya row version</b> likhta hai; purane versions dead rehte hain jab tak <b>VACUUM</b> (autovacuum) unhe saaf na kare. SQL Server mein RCSI ya SNAPSHOT on ho to row versions by default tempdb ke version store mein rehte hain (Accelerated Database Recovery, 2019+, mein user database ka persistent version store).</li>
<li><b>Isolation:</b> READ COMMITTED default hai aur saadi reads writers ko block nahi karti. Postgres ka Repeatable Read ek snapshot hai aur usme phantoms nahi aate.</li>
<li><b>Roz ke farq:</b> identity columns aur sequences, bina quote wale naam lower case mein badal jaate hain, text comparison case-sensitive hai (<code>ILIKE</code>, citext), <code>INSERT ... ON CONFLICT</code> (MERGE Postgres 15 mein aaya), <code>RETURNING</code> (SQL Server mein <code>OUTPUT</code>), <code>LIMIT/OFFSET</code>.</li>
<li><b>JSONB aur indexes:</b> binary JSON, operators <code>-&gt;</code>, <code>-&gt;&gt;</code>, <code>@&gt;</code>; B-tree (default), GIN, GiST, BRIN, partial aur expression indexes, <code>INCLUDE</code> (Postgres 11).</li>
<li><b>.NET ki taraf:</b> Npgsql, <code>UseNpgsql</code>, snake_case naming, sirf UTC wala <code>timestamptz</code>, connection pooling aur PgBouncer (EF Core khud: Day 5 aur 6).</li>
<li><b>Data-store ka chunav:</b> Cosmos DB, MongoDB ya Redis kab jagah kamata hai, aur polyglot persistence ki keemat (system-design view: Day 17, caching: Day 13).</li>
</ul>
<p>Plan (Short lagbhag 20 minute; Detailed reference hai, is page ka estimate dekho): pehle Short mode, phir Q&amp;A zor se, phir sections (Postgres wale snippets par label hai aur yahan chalte nahi, kyunki local Postgres nahi hai), phir chhe puzzles jo sab .NET ya SQL Server par chalte hain.</p>`
  },
  sections: [
    {
      id: "mvcc-vs-sqlserver",
      depth: "short",
      title: {
        en: "MVCC, VACUUM and isolation — Postgres vs SQL Server",
        hi: "MVCC, VACUUM और isolation — Postgres बनाम SQL Server",
        hg: "MVCC, VACUUM aur isolation — Postgres vs SQL Server"
      },
      body: {
        en: `<p><b>Picture — a government file with stamped notes:</b> nobody erases a line. A correction is a new note stamped with the date, and the old note stays until the record room clears out old pages. That is Postgres MVCC; the record-room clerk is <b>VACUUM</b>.</p>
<ul>
<li><b>Row versions live in the table:</b> an <code>UPDATE</code> inserts a new version (a "tuple") and marks the old one as ended (<code>xmax</code>). Each reader uses a <b>snapshot</b> and sees the versions that were committed when it began. Dead versions stay until <b>VACUUM</b> removes them; <b>autovacuum</b> runs in the background by default.</li>
<li><b>Why it matters:</b> heavy updates create <b>bloat</b> (dead space); a long-running or "idle in transaction" session holds back cleanup; and index-only scans depend on the <b>visibility map</b>, which VACUUM maintains.</li>
<li><b>SQL Server contrast (Day 18):</b> with RCSI or SNAPSHOT the old versions go to the <b>version store</b> (tempdb by default; with Accelerated Database Recovery, 2019+, a persistent version store in the user database), so the table itself stays tidy. Without them, READ COMMITTED uses locks and readers can block writers.</li>
<li><b>Isolation in Postgres:</b> READ COMMITTED is the default, each statement sees data committed before it began, and plain SELECTs do not block writers (and writers do not block them). Repeatable Read is a transaction-wide snapshot and, in Postgres, does not allow phantoms; Serializable (SSI, serializable snapshot isolation) adds conflict detection and can fail with a serialization error you must retry. The closest SQL Server match for Postgres Repeatable Read is SNAPSHOT isolation.</li>
<li><b>Layout contrast:</b> Postgres tables are heaps; there is no clustered index (the <code>CLUSTER</code> command reorders once, it is not maintained).</li>
</ul>
<p><b>When to use / when not:</b> know this to explain bloat, "table is huge but has few rows", and slow queries caused by one forgotten open transaction. Do not tune autovacuum blindly: first find the long transaction or the table with the highest update rate.</p>`,
        hi: `<p><b>Picture — stamp लगे notes वाली सरकारी file:</b> कोई line मिटाता नहीं। Correction एक नया note है जिस पर तारीख़ का stamp है, और पुराना note तब तक रहता है जब तक record room पुराने pages साफ़ न करे। यही Postgres MVCC है; record room का clerk <b>VACUUM</b> है।</p>
<ul>
<li><b>Row versions table में ही रहते हैं:</b> <code>UPDATE</code> नया version (एक "tuple") insert करता है और पुराने को ended mark करता है (<code>xmax</code>)। हर reader एक <b>snapshot</b> use करता है और वही versions देखता है जो उसके शुरू होने पर committed थे। Dead versions तब तक रहते हैं जब तक <b>VACUUM</b> उन्हें हटा न दे; <b>autovacuum</b> default से background में चलता है।</li>
<li><b>क्यों ज़रूरी है:</b> heavy updates से <b>bloat</b> (dead space) बनता है; लंबा चलता या "idle in transaction" session cleanup रोक देता है; और index-only scans <b>visibility map</b> पर depend करते हैं, जिसे VACUUM maintain करता है।</li>
<li><b>SQL Server से फ़र्क (Day 18):</b> RCSI या SNAPSHOT में पुराने versions <b>version store</b> में जाते हैं (default में tempdb; Accelerated Database Recovery, 2019+, में user database का persistent version store), इसलिए table खुद साफ़ रहती है। इनके बिना READ COMMITTED locks use करता है और readers writers को block कर सकते हैं।</li>
<li><b>Postgres में isolation:</b> READ COMMITTED default है, हर statement वही data देखता है जो उसके शुरू होने से पहले committed था, और सादे SELECT writers को block नहीं करते (और writers उन्हें नहीं)। Repeatable Read पूरे transaction का snapshot है और Postgres में phantoms नहीं आने देता; Serializable (SSI, serializable snapshot isolation) में conflict detection जुड़ता है और serialization error आ सकता है जिसे retry करना पड़ता है। Postgres Repeatable Read का सबसे करीबी SQL Server मेल SNAPSHOT isolation है।</li>
<li><b>Layout का फ़र्क:</b> Postgres tables heap हैं; clustered index नहीं है (<code>CLUSTER</code> command एक बार reorder करता है, maintain नहीं होता)।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> bloat, "table बहुत बड़ी है पर rows कम हैं", और एक भूले हुए open transaction से आई slow queries समझाने के लिए यह जानो। Autovacuum को आँख बंद करके tune मत करो: पहले long transaction या सबसे ज़्यादा update वाली table ढूँढो।</p>`,
        hg: `<p><b>Picture — stamp lage notes wali sarkari file:</b> koi line mitata nahi. Correction ek naya note hai jis par taareekh ka stamp hai, aur purana note tab tak rehta hai jab tak record room purane pages saaf na kare. Yahi Postgres MVCC hai; record room ka clerk <b>VACUUM</b> hai.</p>
<ul>
<li><b>Row versions table mein hi rehte hain:</b> <code>UPDATE</code> naya version (ek "tuple") insert karta hai aur purane ko ended mark karta hai (<code>xmax</code>). Har reader ek <b>snapshot</b> use karta hai aur wahi versions dekhta hai jo uske shuru hone par committed the. Dead versions tab tak rehte hain jab tak <b>VACUUM</b> unhe hata na de; <b>autovacuum</b> default se background mein chalta hai.</li>
<li><b>Kyon zaroori hai:</b> heavy updates se <b>bloat</b> (dead space) banta hai; lamba chalta ya "idle in transaction" session cleanup rok deta hai; aur index-only scans <b>visibility map</b> par depend karte hain, jise VACUUM maintain karta hai.</li>
<li><b>SQL Server se farq (Day 18):</b> RCSI ya SNAPSHOT mein purane versions <b>version store</b> mein jaate hain (default mein tempdb; Accelerated Database Recovery, 2019+, mein user database ka persistent version store), isliye table khud saaf rehti hai. Inke bina READ COMMITTED locks use karta hai aur readers writers ko block kar sakte hain.</li>
<li><b>Postgres mein isolation:</b> READ COMMITTED default hai, har statement wahi data dekhta hai jo uske shuru hone se pehle committed tha, aur saade SELECT writers ko block nahi karte (aur writers unhe nahi). Repeatable Read poore transaction ka snapshot hai aur Postgres mein phantoms nahi aane deta; Serializable (SSI, serializable snapshot isolation) mein conflict detection judta hai aur serialization error aa sakta hai jise retry karna padta hai. Postgres Repeatable Read ka sabse kareebi SQL Server mel SNAPSHOT isolation hai.</li>
<li><b>Layout ka farq:</b> Postgres tables heap hain; clustered index nahi hai (<code>CLUSTER</code> command ek baar reorder karta hai, maintain nahi hota).</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> bloat, "table bahut badi hai par rows kam hain", aur ek bhoole hue open transaction se aayi slow queries samjhane ke liye yeh jaano. Autovacuum ko aankh band karke tune mat karo: pehle long transaction ya sabse zyada update wali table dhoondho.</p>`
      }
    },
    {
      id: "everyday-differences",
      depth: "short",
      title: {
        en: "Everyday differences a .NET developer trips on",
        hi: "रोज़ के फ़र्क जिन पर .NET developer अटकता है",
        hg: "Roz ke farq jin par .NET developer atakta hai"
      },
      body: {
        en: `<p><b>Picture — two kirana shops with different ledger habits:</b> one writes names exactly as spoken, the other lower-cases everything on entry. Same goods, different habits; you only get into trouble if you assume the habits match.</p>
<ul>
<li><b>Names are folded:</b> unquoted identifiers become <b>lower case</b>, so <code>Orders</code> means <code>orders</code>. A quoted <code>"Orders"</code> is kept exactly and then must always be quoted. EF Core's default PascalCase names are quoted, which is why many teams switch to <b>snake_case</b>.</li>
<li><b>Text compares are case-sensitive</b> by default (<code>'Pankaj' = 'pankaj'</code> is false). Use <code>ILIKE</code>, an index on <code>lower(col)</code>, or the <code>citext</code> extension. SQL Server's default collations are usually case-insensitive.</li>
<li><b>Auto numbers:</b> <code>GENERATED ... AS IDENTITY</code> (Postgres 10+) is the modern form; <code>serial</code> is the older shorthand. Both use a <b>sequence</b>, and a rolled-back insert still burns a number.</li>
<li><b>Upsert:</b> <code>INSERT ... ON CONFLICT (key) DO UPDATE</code> or <code>DO NOTHING</code> needs a unique index on the key. <code>MERGE</code> exists since Postgres 15 (<code>RETURNING</code> on MERGE since 17).</li>
<li><b>Get the row back:</b> <code>RETURNING</code> (SQL Server: <code>OUTPUT</code>). <b>Paging:</b> <code>LIMIT n OFFSET m</code> (SQL Server: <code>TOP</code>, <code>OFFSET ... FETCH</code>).</li>
<li><b>Dates:</b> <code>timestamptz</code> stores an instant; Npgsql accepts only UTC <code>DateTime</code> for it (since Npgsql 6).</li>
</ul>
<p><b>When to use / when not:</b> state these as "differences to check", not as "Postgres is better". When porting a SQL Server database, run a list of assumptions (case, trailing spaces, identity, <code>TOP</code>, <code>GETDATE()</code> vs <code>now()</code>) before you rewrite queries.</p>`,
        hi: `<p><b>Picture — अलग ledger habits वाली दो kirana दुकानें:</b> एक नाम वैसे ही लिखती है जैसे बोले गए, दूसरी entry पर सब lower case कर देती है। सामान वही, habits अलग; मुसीबत तब आती है जब तुम मान लो कि habits एक जैसी हैं।</p>
<ul>
<li><b>Names fold होते हैं:</b> बिना quote वाले identifiers <b>lower case</b> हो जाते हैं, इसलिए <code>Orders</code> का मतलब <code>orders</code> है। Quote वाला <code>"Orders"</code> जैसा है वैसा रहता है और फिर हमेशा quote करना पड़ता है। EF Core के default PascalCase नाम quoted होते हैं, इसीलिए कई teams <b>snake_case</b> पर जाती हैं।</li>
<li><b>Text compare default से case-sensitive</b> है (<code>'Pankaj' = 'pankaj'</code> false है)। <code>ILIKE</code>, <code>lower(col)</code> पर index, या <code>citext</code> extension use करो। SQL Server की default collations आमतौर पर case-insensitive होती हैं।</li>
<li><b>Auto numbers:</b> <code>GENERATED ... AS IDENTITY</code> (Postgres 10+) नया तरीका है; <code>serial</code> पुराना shorthand है। दोनों <b>sequence</b> use करते हैं, और rollback हुआ insert भी एक number जला देता है।</li>
<li><b>Upsert:</b> <code>INSERT ... ON CONFLICT (key) DO UPDATE</code> या <code>DO NOTHING</code> के लिए key पर unique index चाहिए। <code>MERGE</code> Postgres 15 से है (MERGE पर <code>RETURNING</code> 17 से)।</li>
<li><b>Row वापस पाना:</b> <code>RETURNING</code> (SQL Server: <code>OUTPUT</code>)। <b>Paging:</b> <code>LIMIT n OFFSET m</code> (SQL Server: <code>TOP</code>, <code>OFFSET ... FETCH</code>)।</li>
<li><b>Dates:</b> <code>timestamptz</code> एक instant रखता है; Npgsql उसके लिए सिर्फ़ UTC <code>DateTime</code> लेता है (Npgsql 6 से)।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> इन्हें "check करने वाले फ़र्क" की तरह बोलो, "Postgres बेहतर है" की तरह नहीं। SQL Server database port करते समय queries बदलने से पहले assumptions की list चलाओ (case, trailing spaces, identity, <code>TOP</code>, <code>GETDATE()</code> बनाम <code>now()</code>)।</p>`,
        hg: `<p><b>Picture — alag ledger habits wali do kirana dukaanein:</b> ek naam waise hi likhti hai jaise bole gaye, doosri entry par sab lower case kar deti hai. Saamaan wahi, habits alag; museebat tab aati hai jab tum maan lo ki habits ek jaisi hain.</p>
<ul>
<li><b>Names fold hote hain:</b> bina quote wale identifiers <b>lower case</b> ho jaate hain, isliye <code>Orders</code> ka matlab <code>orders</code> hai. Quote wala <code>"Orders"</code> jaisa hai waisa rehta hai aur phir hamesha quote karna padta hai. EF Core ke default PascalCase naam quoted hote hain, isiliye kai teams <b>snake_case</b> par jaati hain.</li>
<li><b>Text compare default se case-sensitive</b> hai (<code>'Pankaj' = 'pankaj'</code> false hai). <code>ILIKE</code>, <code>lower(col)</code> par index, ya <code>citext</code> extension use karo. SQL Server ki default collations aamtaur par case-insensitive hoti hain.</li>
<li><b>Auto numbers:</b> <code>GENERATED ... AS IDENTITY</code> (Postgres 10+) naya tareeka hai; <code>serial</code> purana shorthand hai. Dono <b>sequence</b> use karte hain, aur rollback hua insert bhi ek number jala deta hai.</li>
<li><b>Upsert:</b> <code>INSERT ... ON CONFLICT (key) DO UPDATE</code> ya <code>DO NOTHING</code> ke liye key par unique index chahiye. <code>MERGE</code> Postgres 15 se hai (MERGE par <code>RETURNING</code> 17 se).</li>
<li><b>Row wapas paana:</b> <code>RETURNING</code> (SQL Server: <code>OUTPUT</code>). <b>Paging:</b> <code>LIMIT n OFFSET m</code> (SQL Server: <code>TOP</code>, <code>OFFSET ... FETCH</code>).</li>
<li><b>Dates:</b> <code>timestamptz</code> ek instant rakhta hai; Npgsql uske liye sirf UTC <code>DateTime</code> leta hai (Npgsql 6 se).</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> inhe "check karne wale farq" ki tarah bolo, "Postgres behtar hai" ki tarah nahi. SQL Server database port karte samay queries badalne se pehle assumptions ki list chalao (case, trailing spaces, identity, <code>TOP</code>, <code>GETDATE()</code> vs <code>now()</code>).</p>`
      }
    },
    {
      id: "choosing-a-data-store",
      depth: "short",
      title: {
        en: "Choosing a data store — relational, Cosmos DB, MongoDB, Redis",
        hi: "Data store चुनना — relational, Cosmos DB, MongoDB, Redis",
        hg: "Data store chunna — relational, Cosmos DB, MongoDB, Redis"
      },
      body: {
        en: `<p><b>Picture — kitchen storage:</b> a steel almirah (relational: shelves, labels, rules), a tiffin box (document: one self-contained meal), the fridge door (Redis: quick, small, and you do not store the only copy of anything precious there).</p>
<ul>
<li><b>Default: a relational database</b> (PostgreSQL or SQL Server). Joins, constraints, transactions, ad-hoc queries; Postgres JSONB covers many "flexible attributes" needs.</li>
<li><b>Cosmos DB:</b> managed, globally distributed document store. You choose a <b>partition key</b>, pay in <b>Request Units (RU)</b> for throughput, and pick one of <b>five consistency levels</b> (Strong, Bounded staleness, Session, Consistent prefix, Eventual). A bad partition key gives a hot partition.</li>
<li><b>MongoDB:</b> document model for aggregates read and written as a whole; flexible schema, rich queries. It has multi-document transactions, but joining across documents is not its strength.</li>
<li><b>Redis:</b> in-memory structures (strings, hashes, sorted sets, streams) for cache, rate limits, leaderboards, short-lived state. Treat it as a cache unless you have designed its persistence on purpose (Day 13, Day 17).</li>
<li><b>Polyglot persistence</b> means several stores. The price is more things to run, secure, back up and keep consistent; there is no cross-store transaction.</li>
</ul>
<p><b>When to use / when not:</b> add a second store for a measured need (scale pattern, latency, global writes, data shape), not for a CV. A good Tech Lead answer names the access pattern first and the product second.</p>`,
        hi: `<p><b>Picture — रसोई की storage:</b> steel की almirah (relational: shelves, labels, rules), tiffin box (document: एक पूरा self-contained खाना), fridge का door (Redis: तेज़, छोटा, और वहाँ कोई कीमती चीज़ की अकेली copy नहीं रखते)।</p>
<ul>
<li><b>Default: relational database</b> (PostgreSQL या SQL Server)। Joins, constraints, transactions, ad-hoc queries; Postgres JSONB "flexible attributes" की कई ज़रूरतें पूरी कर देता है।</li>
<li><b>Cosmos DB:</b> managed, globally distributed document store। तुम <b>partition key</b> चुनते हो, throughput के लिए <b>Request Units (RU)</b> में पैसे देते हो, और <b>पाँच consistency levels</b> में से एक चुनते हो (Strong, Bounded staleness, Session, Consistent prefix, Eventual)। गलत partition key से hot partition बनता है।</li>
<li><b>MongoDB:</b> उन aggregates के लिए document model जो पूरे पढ़े और लिखे जाते हैं; flexible schema, rich queries। इसमें multi-document transactions हैं, पर documents के बीच join इसकी strength नहीं है।</li>
<li><b>Redis:</b> in-memory structures (strings, hashes, sorted sets, streams) cache, rate limits, leaderboards, छोटी उम्र के state के लिए। इसे cache ही मानो, जब तक तुमने उसकी persistence जानबूझकर design न की हो (Day 13, Day 17)।</li>
<li><b>Polyglot persistence</b> यानी कई stores। कीमत: चलाने, secure करने, backup लेने और consistent रखने के लिए ज़्यादा चीज़ें; stores के बीच कोई transaction नहीं।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> दूसरा store किसी measured ज़रूरत (scale pattern, latency, global writes, data की shape) के लिए जोड़ो, CV के लिए नहीं। अच्छा Tech Lead जवाब पहले access pattern बताता है, product बाद में।</p>`,
        hg: `<p><b>Picture — rasoi ki storage:</b> steel ki almirah (relational: shelves, labels, rules), tiffin box (document: ek poora self-contained khaana), fridge ka door (Redis: tez, chhota, aur wahan koi keemti cheez ki akeli copy nahi rakhte).</p>
<ul>
<li><b>Default: relational database</b> (PostgreSQL ya SQL Server). Joins, constraints, transactions, ad-hoc queries; Postgres JSONB "flexible attributes" ki kai zaroortein poori kar deta hai.</li>
<li><b>Cosmos DB:</b> managed, globally distributed document store. Tum <b>partition key</b> chunte ho, throughput ke liye <b>Request Units (RU)</b> mein paise dete ho, aur <b>paanch consistency levels</b> mein se ek chunte ho (Strong, Bounded staleness, Session, Consistent prefix, Eventual). Galat partition key se hot partition banta hai.</li>
<li><b>MongoDB:</b> un aggregates ke liye document model jo poore padhe aur likhe jaate hain; flexible schema, rich queries. Ismein multi-document transactions hain, par documents ke beech join iski strength nahi hai.</li>
<li><b>Redis:</b> in-memory structures (strings, hashes, sorted sets, streams) cache, rate limits, leaderboards, chhoti umr ke state ke liye. Ise cache hi maano, jab tak tumne uski persistence jaanbujhkar design na ki ho (Day 13, Day 17).</li>
<li><b>Polyglot persistence</b> yaani kai stores. Keemat: chalane, secure karne, backup lene aur consistent rakhne ke liye zyada cheezein; stores ke beech koi transaction nahi.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> doosra store kisi measured zaroorat (scale pattern, latency, global writes, data ki shape) ke liye jodo, CV ke liye nahi. Achha Tech Lead jawab pehle access pattern batata hai, product baad mein.</p>`
      }
    },
    {
      id: "pg-sql-in-code",
      depth: "detailed",
      title: {
        en: "Postgres SQL in code: identity, upsert, RETURNING, ILIKE, keyset paging (and the SQL Server twin)",
        hi: "Code में Postgres SQL: identity, upsert, RETURNING, ILIKE, keyset paging (और SQL Server का जोड़ीदार)",
        hg: "Code mein Postgres SQL: identity, upsert, RETURNING, ILIKE, keyset paging (aur SQL Server ka jodidaar)"
      },
      body: {
        en: `<p><b>Analogy — a railway ticket counter:</b> "book this seat, or if it is already yours, just change the berth" is one atomic counter action in Postgres (<code>ON CONFLICT</code>). In SQL Server you write the two steps yourself and hold a lock between them, so two clerks cannot both think the seat is free.</p>
<ul>
<li>The <b>PostgreSQL</b> snippet is not run here (no local Postgres): table with <code>GENERATED ALWAYS AS IDENTITY</code>, a unique <code>sku</code> as the conflict target, the upsert with <code>RETURNING</code>, <code>ILIKE</code>, a <code>lower(name)</code> expression index, and <b>keyset paging</b> (remember the last id) instead of a growing <code>OFFSET</code>.</li>
<li>The <b>SQL Server</b> twin does run on LocalDB: <code>UPDATE ... WITH (UPDLOCK, HOLDLOCK)</code> then <code>INSERT</code> when <code>@@ROWCOUNT = 0</code>, the <code>OUTPUT</code> clause (SQL Server's <code>RETURNING</code>), <code>TOP</code>, and a case-insensitive match that Postgres would not give.</li>
<li><code>ON CONFLICT</code> needs a unique index or constraint as its target. <code>DO UPDATE</code> cannot touch the same row twice in one statement (puzzle 3).</li>
</ul>
<p><b>When to use:</b> upsert for idempotent writes (retries, message consumers, Day 16). <b>When not:</b> do not use <code>OFFSET 100000</code> for deep pages, it still reads and discards those rows; and do not copy the SQL Server lock pattern into Postgres, use <code>ON CONFLICT</code> there.</p>`,
        hi: `<p><b>Analogy — railway ticket counter:</b> "यह seat book करो, या अगर पहले से तुम्हारी है तो बस berth बदल दो", Postgres में यह एक atomic counter action है (<code>ON CONFLICT</code>)। SQL Server में दोनों steps तुम खुद लिखते हो और बीच में lock पकड़ते हो, ताकि दो clerk यह न सोच लें कि seat खाली है।</p>
<ul>
<li><b>PostgreSQL</b> snippet यहाँ चलता नहीं (local Postgres नहीं है): <code>GENERATED ALWAYS AS IDENTITY</code> वाली table, conflict target के रूप में unique <code>sku</code>, <code>RETURNING</code> के साथ upsert, <code>ILIKE</code>, <code>lower(name)</code> expression index, और बढ़ते <code>OFFSET</code> की जगह <b>keyset paging</b> (आख़िरी id याद रखो)।</li>
<li><b>SQL Server</b> जोड़ीदार LocalDB पर चलता है: <code>UPDATE ... WITH (UPDLOCK, HOLDLOCK)</code> फिर <code>@@ROWCOUNT = 0</code> पर <code>INSERT</code>, <code>OUTPUT</code> clause (SQL Server का <code>RETURNING</code>), <code>TOP</code>, और case-insensitive match जो Postgres नहीं देगा।</li>
<li><code>ON CONFLICT</code> को target के रूप में unique index या constraint चाहिए। <code>DO UPDATE</code> एक statement में एक ही row को दो बार नहीं छू सकता (puzzle 3)।</li>
</ul>
<p><b>कब use करें:</b> idempotent writes (retries, message consumers, Day 16) के लिए upsert। <b>कब नहीं:</b> गहरे pages के लिए <code>OFFSET 100000</code> मत करो, वह उन rows को फिर भी पढ़कर फेंकता है; और SQL Server वाला lock pattern Postgres में copy मत करो, वहाँ <code>ON CONFLICT</code> use करो।</p>`,
        hg: `<p><b>Analogy — railway ticket counter:</b> "yeh seat book karo, ya agar pehle se tumhari hai to bas berth badal do", Postgres mein yeh ek atomic counter action hai (<code>ON CONFLICT</code>). SQL Server mein dono steps tum khud likhte ho aur beech mein lock pakadte ho, taaki do clerk yeh na soch lein ki seat khaali hai.</p>
<ul>
<li><b>PostgreSQL</b> snippet yahan chalta nahi (local Postgres nahi hai): <code>GENERATED ALWAYS AS IDENTITY</code> wali table, conflict target ke roop mein unique <code>sku</code>, <code>RETURNING</code> ke saath upsert, <code>ILIKE</code>, <code>lower(name)</code> expression index, aur badhte <code>OFFSET</code> ki jagah <b>keyset paging</b> (aakhri id yaad rakho).</li>
<li><b>SQL Server</b> jodidaar LocalDB par chalta hai: <code>UPDATE ... WITH (UPDLOCK, HOLDLOCK)</code> phir <code>@@ROWCOUNT = 0</code> par <code>INSERT</code>, <code>OUTPUT</code> clause (SQL Server ka <code>RETURNING</code>), <code>TOP</code>, aur case-insensitive match jo Postgres nahi dega.</li>
<li><code>ON CONFLICT</code> ko target ke roop mein unique index ya constraint chahiye. <code>DO UPDATE</code> ek statement mein ek hi row ko do baar nahi chhu sakta (puzzle 3).</li>
</ul>
<p><b>Kab use karein:</b> idempotent writes (retries, message consumers, Day 16) ke liye upsert. <b>Kab nahi:</b> gehre pages ke liye <code>OFFSET 100000</code> mat karo, woh un rows ko phir bhi padhkar phenkta hai; aur SQL Server wala lock pattern Postgres mein copy mat karo, wahan <code>ON CONFLICT</code> use karo.</p>`
      },
      code: [
        {
          lang: "sql",
          caption: {
            en: "PostgreSQL: identity, upsert with RETURNING, ILIKE, expression index, keyset paging (not run here, no local Postgres)",
            hi: "PostgreSQL: identity, RETURNING के साथ upsert, ILIKE, expression index, keyset paging (यहाँ चलता नहीं, local Postgres नहीं है)",
            hg: "PostgreSQL: identity, RETURNING ke saath upsert, ILIKE, expression index, keyset paging (yahan chalta nahi, local Postgres nahi hai)"
          },
          check: "none",
          src: `CREATE TABLE product (
    product_id integer       GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    sku        varchar(20)   NOT NULL UNIQUE,
    name       text          NOT NULL,
    price      numeric(10,2) NOT NULL,
    updated_at timestamptz   NOT NULL DEFAULT now()
);

-- upsert: insert, or update the row that already has this sku (atomic, needs the unique key)
INSERT INTO product (sku, name, price)
VALUES ('A1', 'Pen', 12), ('B2', 'Book', 80)
ON CONFLICT (sku) DO UPDATE
    SET price = EXCLUDED.price, updated_at = now()
RETURNING product_id, sku, price;

-- text compare is case-sensitive: use ILIKE, or an index on lower(name) and the same expression in the query
CREATE INDEX ix_product_lower_name ON product (lower(name));
SELECT product_id, name FROM product WHERE lower(name) = lower('PEN');
SELECT product_id, name FROM product WHERE name ILIKE 'pe%' ORDER BY product_id LIMIT 20;

-- keyset paging: ask for "after the last id I saw", not OFFSET 40
SELECT product_id, name FROM product WHERE product_id > 40 ORDER BY product_id LIMIT 20;`
        },
        {
          lang: "sql",
          caption: {
            en: "SQL Server twin (runs on LocalDB): UPDATE then INSERT under a lock, OUTPUT, TOP, and a case-insensitive match",
            hi: "SQL Server जोड़ीदार (LocalDB पर चलता है): lock के नीचे UPDATE फिर INSERT, OUTPUT, TOP, और case-insensitive match",
            hg: "SQL Server jodidaar (LocalDB par chalta hai): lock ke neeche UPDATE phir INSERT, OUTPUT, TOP, aur case-insensitive match"
          },
          check: "run",
          expected: "2 B2\n1 A1 12.00\n2 B2 80.00\n1",
          src: `CREATE TABLE dbo.Product (
    ProductId int           IDENTITY(1,1) PRIMARY KEY,
    Sku       varchar(20)   NOT NULL UNIQUE,
    Name      nvarchar(50)  NOT NULL,
    Price     decimal(10,2) NOT NULL
);
INSERT dbo.Product (Sku, Name, Price) VALUES ('A1', N'Pen', 10);

-- upsert, SQL Server style: UPDATE first while holding the locks, INSERT only when no row matched
BEGIN TRAN;
UPDATE dbo.Product WITH (UPDLOCK, HOLDLOCK) SET Price = 12 WHERE Sku = 'A1';
IF @@ROWCOUNT = 0 INSERT dbo.Product (Sku, Name, Price) VALUES ('A1', N'Pen', 12);

UPDATE dbo.Product WITH (UPDLOCK, HOLDLOCK) SET Price = 80 WHERE Sku = 'B2';
IF @@ROWCOUNT = 0 INSERT dbo.Product (Sku, Name, Price) OUTPUT inserted.ProductId, inserted.Sku VALUES ('B2', N'Book', 80);
COMMIT;

SELECT TOP (2) ProductId, Sku, Price FROM dbo.Product ORDER BY ProductId;

-- the default collation here is case-insensitive: Postgres would return 0 for the same comparison
SELECT COUNT(*) AS ci_match FROM dbo.Product WHERE Name = N'PEN';`
        }
      ]
    },
    {
      id: "jsonb-indexes-in-code",
      depth: "detailed",
      title: {
        en: "JSONB and indexes in code: GIN, expression, partial, covering, BRIN",
        hi: "Code में JSONB और indexes: GIN, expression, partial, covering, BRIN",
        hg: "Code mein JSONB aur indexes: GIN, expression, partial, covering, BRIN"
      },
      body: {
        en: `<p><b>Analogy — a school bag with a main compartment and a pencil pouch:</b> fixed columns are the main compartment (always the same items, easy to find). A JSONB column is the pouch for "extra stuff that differs per student". It is handy, but you still need a good way to find things inside it.</p>
<ul>
<li><b>json vs jsonb:</b> <code>json</code> stores the exact text; <code>jsonb</code> stores a parsed binary form (key order not kept, duplicate keys collapsed) and can be indexed. Use <code>jsonb</code> unless you must keep the original text.</li>
<li><b>Operators:</b> <code>-&gt;</code> gives jsonb, <code>-&gt;&gt;</code> gives text, <code>@&gt;</code> means "contains" (puzzle 4 mirrors it in C#). <b>GIN</b> indexes serve <code>@&gt;</code>; <code>jsonb_path_ops</code> is smaller and supports <code>@&gt;</code>, <code>@?</code> and <code>@@</code>, but not the key-exists operators.</li>
<li><b>Other index tools:</b> an <b>expression index</b> on <code>lower(email)</code> (queries must use the same expression), a <b>partial index</b> (<code>WHERE status = 1</code>) that is small and cheap, <code>INCLUDE</code> for covering (Postgres 11), and <b>BRIN</b> for huge append-only tables whose values follow insert order (time series).</li>
<li><b>Postgres-specific catch:</b> an index-only scan still checks the <b>visibility map</b>, so a table that autovacuum has not visited can fall back to reading the table. GIN indexes do not support index-only scans.</li>
</ul>
<p><b>When to use:</b> JSONB for sparse, changing attributes you mostly read whole; real columns for anything you filter, join or constrain often. <b>When not:</b> do not turn a relational model into one JSONB blob, and do not add a GIN index "just in case": it slows writes and takes space.</p>`,
        hi: `<p><b>Analogy — school bag जिसमें main compartment और pencil pouch है:</b> fixed columns main compartment हैं (हमेशा वही चीज़ें, ढूँढना आसान)। JSONB column वह pouch है जिसमें "हर student के हिसाब से बदलता extra सामान" रहता है। यह काम की है, पर अंदर की चीज़ ढूँढने का अच्छा तरीका फिर भी चाहिए।</p>
<ul>
<li><b>json बनाम jsonb:</b> <code>json</code> exact text रखता है; <code>jsonb</code> parsed binary form रखता है (key order नहीं रहता, duplicate keys एक हो जाती हैं) और उस पर index बन सकता है। जब तक original text रखना ज़रूरी न हो, <code>jsonb</code> use करो।</li>
<li><b>Operators:</b> <code>-&gt;</code> jsonb देता है, <code>-&gt;&gt;</code> text देता है, <code>@&gt;</code> का मतलब "contains" (puzzle 4 इसे C# में दोहराता है)। <b>GIN</b> indexes <code>@&gt;</code> को serve करते हैं; <code>jsonb_path_ops</code> छोटा है और <code>@&gt;</code>, <code>@?</code>, <code>@@</code> support करता है, पर key-exists operators नहीं।</li>
<li><b>बाक़ी index tools:</b> <code>lower(email)</code> पर <b>expression index</b> (queries में वही expression लिखना पड़ता है), <b>partial index</b> (<code>WHERE status = 1</code>) जो छोटा और सस्ता है, covering के लिए <code>INCLUDE</code> (Postgres 11), और <b>BRIN</b> उन बहुत बड़ी append-only tables के लिए जिनके values insert order में चलते हैं (time series)।</li>
<li><b>Postgres की ख़ास बात:</b> index-only scan फिर भी <b>visibility map</b> देखता है, इसलिए जिस table पर autovacuum नहीं पहुँचा वह table पढ़ने पर लौट सकता है। GIN indexes index-only scans support नहीं करते।</li>
</ul>
<p><b>कब use करें:</b> sparse, बदलते attributes के लिए JSONB जिन्हें तुम ज़्यादातर पूरा पढ़ते हो; जो चीज़ अक्सर filter, join या constrain होती है उसके लिए असली columns। <b>कब नहीं:</b> relational model को एक JSONB blob मत बनाओ, और "बस ऐसे ही" GIN index मत जोड़ो: वह writes धीमे करता है और जगह लेता है।</p>`,
        hg: `<p><b>Analogy — school bag jisme main compartment aur pencil pouch hai:</b> fixed columns main compartment hain (hamesha wahi cheezein, dhoondhna aasaan). JSONB column woh pouch hai jisme "har student ke hisaab se badalta extra saamaan" rehta hai. Yeh kaam ki hai, par andar ki cheez dhoondhne ka achha tareeka phir bhi chahiye.</p>
<ul>
<li><b>json vs jsonb:</b> <code>json</code> exact text rakhta hai; <code>jsonb</code> parsed binary form rakhta hai (key order nahi rehta, duplicate keys ek ho jaati hain) aur us par index ban sakta hai. Jab tak original text rakhna zaroori na ho, <code>jsonb</code> use karo.</li>
<li><b>Operators:</b> <code>-&gt;</code> jsonb deta hai, <code>-&gt;&gt;</code> text deta hai, <code>@&gt;</code> ka matlab "contains" (puzzle 4 ise C# mein dohraata hai). <b>GIN</b> indexes <code>@&gt;</code> ko serve karte hain; <code>jsonb_path_ops</code> chhota hai aur <code>@&gt;</code>, <code>@?</code>, <code>@@</code> support karta hai, par key-exists operators nahi.</li>
<li><b>Baaki index tools:</b> <code>lower(email)</code> par <b>expression index</b> (queries mein wahi expression likhna padta hai), <b>partial index</b> (<code>WHERE status = 1</code>) jo chhota aur sasta hai, covering ke liye <code>INCLUDE</code> (Postgres 11), aur <b>BRIN</b> un bahut badi append-only tables ke liye jinke values insert order mein chalte hain (time series).</li>
<li><b>Postgres ki khaas baat:</b> index-only scan phir bhi <b>visibility map</b> dekhta hai, isliye jis table par autovacuum nahi pahuncha woh table padhne par laut sakta hai. GIN indexes index-only scans support nahi karte.</li>
</ul>
<p><b>Kab use karein:</b> sparse, badalte attributes ke liye JSONB jinhe tum zyadatar poora padhte ho; jo cheez aksar filter, join ya constrain hoti hai uske liye asli columns. <b>Kab nahi:</b> relational model ko ek JSONB blob mat banao, aur "bas aise hi" GIN index mat jodo: woh writes dheeme karta hai aur jagah leta hai.</p>`
      },
      code: [{
        lang: "sql",
        caption: {
          en: "PostgreSQL: JSONB containment with a GIN index, expression, partial and covering indexes, BRIN (not run here, no local Postgres)",
          hi: "PostgreSQL: GIN index के साथ JSONB containment, expression, partial और covering indexes, BRIN (यहाँ चलता नहीं, local Postgres नहीं है)",
          hg: "PostgreSQL: GIN index ke saath JSONB containment, expression, partial aur covering indexes, BRIN (yahan chalta nahi, local Postgres nahi hai)"
        },
        check: "none",
        src: `CREATE TABLE customer (
    customer_id bigint      GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email       text        NOT NULL,
    status      smallint    NOT NULL DEFAULT 0,
    attrs       jsonb       NOT NULL DEFAULT '{}',
    created_at  timestamptz NOT NULL DEFAULT now()
);

-- -> returns jsonb, ->> returns text, @> means "contains"
SELECT customer_id, attrs ->> 'city' AS city
FROM customer
WHERE attrs @> '{"tags": ["vip"]}';

CREATE INDEX ix_customer_attrs ON customer USING gin (attrs jsonb_path_ops);   -- smaller; supports @>, @? and @@, not the ? key-exists operators
CREATE UNIQUE INDEX ux_customer_email ON customer (lower(email));               -- expression: query by lower(email)
CREATE INDEX ix_customer_active ON customer (created_at) WHERE status = 1;      -- partial: only active rows
CREATE INDEX ix_customer_status ON customer (status) INCLUDE (email);           -- covering (Postgres 11+)

-- BRIN: tiny index for a huge append-only table whose created_at follows insert order
CREATE TABLE event (
    event_id   bigint      GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    payload    jsonb       NOT NULL
);
CREATE INDEX ix_event_created_brin ON event USING brin (created_at);`
      }]
    },
    {
      id: "efcore-npgsql-in-code",
      depth: "detailed",
      title: {
        en: "EF Core with Npgsql in code: UseNpgsql, snake_case, jsonb, UTC",
        hi: "Code में Npgsql के साथ EF Core: UseNpgsql, snake_case, jsonb, UTC",
        hg: "Code mein Npgsql ke saath EF Core: UseNpgsql, snake_case, jsonb, UTC"
      },
      body: {
        en: `<p><b>Analogy — a travel adapter:</b> your laptop (EF Core, Day 5 and 6) stays the same; the adapter (the Npgsql provider) makes it fit the Postgres socket. Most of what you know carries over; the plug shape (names, time zones, JSON) is what changes.</p>
<ul>
<li><b>Setup:</b> package <code>Npgsql.EntityFrameworkCore.PostgreSQL</code>, then <code>UseNpgsql(connectionString)</code> instead of <code>UseSqlServer</code>. Keep the connection string in configuration or a secret store, not in the code.</li>
<li><b>Names:</b> EF's default PascalCase table and column names are created quoted, so raw SQL needs <code>"Customers"</code>. The community package <code>EFCore.NamingConventions</code> adds <code>UseSnakeCaseNamingConvention()</code> to get <code>customers</code> and <code>created_utc</code>.</li>
<li><b>JSON:</b> JSON mapping needs Npgsql provider 8.0 or later: <code>ToJson()</code> on an owned type stores it as <code>jsonb</code> (the snippet), and on EF Core 10 complex types with <code>ComplexProperty(...).ToJson()</code> are the recommended shape; the old <code>[Column(TypeName="jsonb")]</code> POCO mapping is deprecated. Check the Npgsql JSON docs for your version.</li>
<li><b>Time:</b> <code>timestamptz</code> accepts only UTC <code>DateTime</code> values in Npgsql 6 and later; write <code>DateTime.UtcNow</code>, or a <code>DateTimeOffset</code> with offset 0 (<code>.ToUniversalTime()</code>). <code>Npgsql.EnableLegacyTimestampBehavior</code> exists only as a migration crutch.</li>
<li><b>Pooling:</b> Npgsql pools connections by default (default maximum 100 per connection string); EF Core's <code>DbContext</code> pooling is a separate layer on top.</li>
</ul>
<p><b>When to use:</b> EF Core for CRUD and migrations; raw SQL (<code>ExecuteSqlAsync</code> or Dapper) for the Postgres-only features such as <code>ON CONFLICT</code> or JSONB operators you cannot express in LINQ. <b>When not:</b> do not assume SQL Server behaviour (case-insensitive compare, <code>DateTime.Now</code>) carries over, and do not multiply Npgsql <code>Max Pool Size</code> by many app instances against a small <code>max_connections</code> without a pooler.</p>`,
        hi: `<p><b>Analogy — travel adapter:</b> तुम्हारा laptop (EF Core, Day 5 और 6) वही रहता है; adapter (Npgsql provider) उसे Postgres के socket में fit कराता है। जो तुम जानते हो वह ज़्यादातर चलता है; plug की shape (names, time zones, JSON) बदलती है।</p>
<ul>
<li><b>Setup:</b> package <code>Npgsql.EntityFrameworkCore.PostgreSQL</code>, फिर <code>UseSqlServer</code> की जगह <code>UseNpgsql(connectionString)</code>। Connection string configuration या secret store में रखो, code में नहीं।</li>
<li><b>Names:</b> EF के default PascalCase table और column names quoted बनते हैं, इसलिए raw SQL में <code>"Customers"</code> लिखना पड़ता है। Community package <code>EFCore.NamingConventions</code> <code>UseSnakeCaseNamingConvention()</code> देता है ताकि <code>customers</code> और <code>created_utc</code> मिलें।</li>
<li><b>JSON:</b> JSON mapping के लिए Npgsql provider 8.0 या उसके बाद चाहिए: owned type पर <code>ToJson()</code> उसे <code>jsonb</code> में रखता है (snippet), और EF Core 10 में <code>ComplexProperty(...).ToJson()</code> वाले complex types recommended हैं; पुराना <code>[Column(TypeName="jsonb")]</code> POCO mapping deprecated है। अपने version का Npgsql JSON doc देखो।</li>
<li><b>Time:</b> Npgsql 6 और उसके बाद <code>timestamptz</code> सिर्फ़ UTC <code>DateTime</code> values लेता है; <code>DateTime.UtcNow</code> लिखो, या offset 0 वाला <code>DateTimeOffset</code> (<code>.ToUniversalTime()</code>)। <code>Npgsql.EnableLegacyTimestampBehavior</code> सिर्फ़ migration में कुछ समय के सहारे के लिए है।</li>
<li><b>Pooling:</b> Npgsql default से connections pool करता है (हर connection string पर default maximum 100); EF Core का <code>DbContext</code> pooling उसके ऊपर अलग layer है।</li>
</ul>
<p><b>कब use करें:</b> CRUD और migrations के लिए EF Core; Postgres-only features (जैसे <code>ON CONFLICT</code> या JSONB operators जो LINQ में नहीं लिखे जा सकते) के लिए raw SQL (<code>ExecuteSqlAsync</code> या Dapper)। <b>कब नहीं:</b> यह मत मानो कि SQL Server का behaviour (case-insensitive compare, <code>DateTime.Now</code>) साथ चलेगा, और छोटे <code>max_connections</code> पर बिना pooler के Npgsql <code>Max Pool Size</code> को बहुत सारे app instances से गुणा मत होने दो।</p>`,
        hg: `<p><b>Analogy — travel adapter:</b> tumhara laptop (EF Core, Day 5 aur 6) wahi rehta hai; adapter (Npgsql provider) use Postgres ke socket mein fit karata hai. Jo tum jaante ho woh zyadatar chalta hai; plug ki shape (names, time zones, JSON) badalti hai.</p>
<ul>
<li><b>Setup:</b> package <code>Npgsql.EntityFrameworkCore.PostgreSQL</code>, phir <code>UseSqlServer</code> ki jagah <code>UseNpgsql(connectionString)</code>. Connection string configuration ya secret store mein rakho, code mein nahi.</li>
<li><b>Names:</b> EF ke default PascalCase table aur column names quoted bante hain, isliye raw SQL mein <code>"Customers"</code> likhna padta hai. Community package <code>EFCore.NamingConventions</code> <code>UseSnakeCaseNamingConvention()</code> deta hai taaki <code>customers</code> aur <code>created_utc</code> milein.</li>
<li><b>JSON:</b> JSON mapping ke liye Npgsql provider 8.0 ya uske baad chahiye: owned type par <code>ToJson()</code> use <code>jsonb</code> mein rakhta hai (snippet), aur EF Core 10 mein <code>ComplexProperty(...).ToJson()</code> wale complex types recommended hain; purana <code>[Column(TypeName="jsonb")]</code> POCO mapping deprecated hai. Apne version ka Npgsql JSON doc dekho.</li>
<li><b>Time:</b> Npgsql 6 aur uske baad <code>timestamptz</code> sirf UTC <code>DateTime</code> values leta hai; <code>DateTime.UtcNow</code> likho, ya offset 0 wala <code>DateTimeOffset</code> (<code>.ToUniversalTime()</code>). <code>Npgsql.EnableLegacyTimestampBehavior</code> sirf migration mein kuch samay ke sahare ke liye hai.</li>
<li><b>Pooling:</b> Npgsql default se connections pool karta hai (har connection string par default maximum 100); EF Core ka <code>DbContext</code> pooling uske upar alag layer hai.</li>
</ul>
<p><b>Kab use karein:</b> CRUD aur migrations ke liye EF Core; Postgres-only features (jaise <code>ON CONFLICT</code> ya JSONB operators jo LINQ mein nahi likhe ja sakte) ke liye raw SQL (<code>ExecuteSqlAsync</code> ya Dapper). <b>Kab nahi:</b> yeh mat maano ki SQL Server ka behaviour (case-insensitive compare, <code>DateTime.Now</code>) saath chalega, aur chhote <code>max_connections</code> par bina pooler ke Npgsql <code>Max Pool Size</code> ko bahut saare app instances se guna mat hone do.</p>`
      },
      code: [{
        caption: {
          en: "EF Core with Npgsql: UseNpgsql, snake_case names, a jsonb owned type, UTC time (compile check only; packages Npgsql.EntityFrameworkCore.PostgreSQL and EFCore.NamingConventions)",
          hi: "Npgsql के साथ EF Core: UseNpgsql, snake_case names, jsonb owned type, UTC time (सिर्फ़ compile check; packages Npgsql.EntityFrameworkCore.PostgreSQL और EFCore.NamingConventions)",
          hg: "Npgsql ke saath EF Core: UseNpgsql, snake_case names, jsonb owned type, UTC time (sirf compile check; packages Npgsql.EntityFrameworkCore.PostgreSQL aur EFCore.NamingConventions)"
        },
        check: "compile",
        packages: ["Npgsql.EntityFrameworkCore.PostgreSQL", "EFCore.NamingConventions"],
        src: `using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

public static class ShopDbRegistration
{
    // The connection string comes from configuration or a secret store, never from source code.
    public static IServiceCollection AddShopDb(this IServiceCollection services, string connectionString) =>
        services.AddDbContext<ShopContext>(o => o
            .UseNpgsql(connectionString)
            .UseSnakeCaseNamingConvention());   // customers, created_utc instead of quoted "Customers"
}

public class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)
{
    public DbSet<Customer> Customers => Set<Customer>();

    protected override void OnModelCreating(ModelBuilder modelBuilder) =>
        modelBuilder.Entity<Customer>(e =>
        {
            e.HasIndex(c => c.Email).IsUnique();   // case-sensitive in Postgres: also add a unique index on lower(email) in a migration (raw SQL)
            e.OwnsOne(c => c.Profile, p => p.ToJson());   // stored as a jsonb column
        });

    public async Task<int> AddCustomerAsync(string email, string city, CancellationToken ct)
    {
        var customer = new Customer
        {
            Email = email,
            CreatedUtc = DateTime.UtcNow,                  // timestamptz accepts only UTC DateTime
            Profile = new CustomerProfile { City = city }
        };
        Customers.Add(customer);
        await SaveChangesAsync(ct);
        return customer.Id;
    }
}

public class Customer
{
    public int Id { get; set; }
    public string Email { get; set; } = "";
    public DateTime CreatedUtc { get; set; }
    public CustomerProfile Profile { get; set; } = new();
}

public class CustomerProfile
{
    public string City { get; set; } = "";
}`
      }]
    },
    {
      id: "cosmos-key-in-code",
      depth: "detailed",
      title: {
        en: "Cosmos DB in code: id, partition key and a synthetic key",
        hi: "Code में Cosmos DB: id, partition key और synthetic key",
        hg: "Code mein Cosmos DB: id, partition key aur synthetic key"
      },
      body: {
        en: `<p><b>Analogy — a bank with many counters:</b> customers are sent to a counter by a rule (the partition key). If the rule is "by branch name" and one branch has a huge crowd, one counter is jammed while the others sit idle. Cosmos DB has the same problem, called a <b>hot partition</b>.</p>
<ul>
<li>Every item has an <code>id</code> (unique within its logical partition) and a <b>partition key</b> value. Queries that include the key go to one partition; queries without it fan out across partitions and cost more <b>RU</b>.</li>
<li>A good key has <b>many distinct values</b>, spreads writes evenly and appears in your most common queries. A single huge tenant can ruin <code>tenantId</code> as a key (puzzle 6), so a <b>synthetic key</b> such as <code>tenantId-bucket</code> spreads that tenant over several partitions.</li>
<li>The trade-off: reads for one tenant now touch several partitions. Choose the bucket count from your write rate, and keep the key in the document so the SDK can use it.</li>
<li>Consistency is a separate choice (Session is the account default and the most widely used level): the five levels trade latency and availability for freshness. Check current limits and pricing in the Azure docs, they change.</li>
</ul>
<p><b>When to use:</b> Cosmos DB for key-based access at large or global scale with predictable access patterns. <b>When not:</b> for ad-hoc reporting, many joins, or a small single-region app; a relational database is simpler and cheaper to reason about.</p>`,
        hi: `<p><b>Analogy — कई counters वाला bank:</b> customers को एक rule (partition key) से counter पर भेजा जाता है। अगर rule "branch के नाम से" है और एक branch की भारी भीड़ है, तो एक counter जाम है और बाक़ी खाली बैठे हैं। Cosmos DB में यही दिक्कत होती है, जिसे <b>hot partition</b> कहते हैं।</p>
<ul>
<li>हर item का एक <code>id</code> होता है (अपने logical partition में unique) और एक <b>partition key</b> value। जिन queries में key होती है वे एक partition पर जाती हैं; बिना key वाली queries सब partitions में फैलती हैं और ज़्यादा <b>RU</b> खर्च करती हैं।</li>
<li>अच्छी key में <b>बहुत सारी अलग values</b> होती हैं, writes बराबर फैलाती है और तुम्हारी सबसे common queries में आती है। एक बहुत बड़ा tenant <code>tenantId</code> को key के रूप में बिगाड़ सकता है (puzzle 6), इसलिए <code>tenantId-bucket</code> जैसी <b>synthetic key</b> उस tenant को कई partitions में फैला देती है।</li>
<li>Trade-off: अब एक tenant की reads कई partitions को छूती हैं। Bucket count अपने write rate से चुनो, और key को document में रखो ताकि SDK उसे use कर सके।</li>
<li>Consistency अलग चुनाव है (Session account default है और सबसे ज़्यादा use होने वाला level है): पाँच levels freshness के बदले latency और availability का सौदा करते हैं। Limits और pricing Azure docs में देखो, वे बदलती रहती हैं।</li>
</ul>
<p><b>कब use करें:</b> बड़े या global scale पर key-based access के लिए Cosmos DB, जहाँ access patterns पहले से पता हों। <b>कब नहीं:</b> ad-hoc reporting, बहुत सारे joins, या छोटी single-region app के लिए; relational database सरल और सस्ता है।</p>`,
        hg: `<p><b>Analogy — kai counters wala bank:</b> customers ko ek rule (partition key) se counter par bheja jaata hai. Agar rule "branch ke naam se" hai aur ek branch ki bhaari bheed hai, to ek counter jaam hai aur baaki khaali baithe hain. Cosmos DB mein yahi dikkat hoti hai, jise <b>hot partition</b> kehte hain.</p>
<ul>
<li>Har item ka ek <code>id</code> hota hai (apne logical partition mein unique) aur ek <b>partition key</b> value. Jin queries mein key hoti hai woh ek partition par jaati hain; bina key wali queries sab partitions mein phailti hain aur zyada <b>RU</b> kharch karti hain.</li>
<li>Achhi key mein <b>bahut saari alag values</b> hoti hain, writes barabar phailati hai aur tumhari sabse common queries mein aati hai. Ek bahut bada tenant <code>tenantId</code> ko key ke roop mein bigaad sakta hai (puzzle 6), isliye <code>tenantId-bucket</code> jaisi <b>synthetic key</b> us tenant ko kai partitions mein phaila deti hai.</li>
<li>Trade-off: ab ek tenant ki reads kai partitions ko chhooti hain. Bucket count apne write rate se chuno, aur key ko document mein rakho taaki SDK use use kar sake.</li>
<li>Consistency alag chunav hai (Session account default hai aur sabse zyada use hone wala level hai): paanch levels freshness ke badle latency aur availability ka sauda karte hain. Limits aur pricing Azure docs mein dekho, woh badalti rehti hain.</li>
</ul>
<p><b>Kab use karein:</b> bade ya global scale par key-based access ke liye Cosmos DB, jahan access patterns pehle se pata hon. <b>Kab nahi:</b> ad-hoc reporting, bahut saare joins, ya chhoti single-region app ke liye; relational database saral aur sasta hai.</p>`
      },
      code: [{
        caption: {
          en: "A Cosmos-style document with id, partition key and a synthetic bucket (plain C#, no Cosmos SDK needed)",
          hi: "id, partition key और synthetic bucket वाला Cosmos-style document (सादा C#, Cosmos SDK की ज़रूरत नहीं)",
          hg: "id, partition key aur synthetic bucket wala Cosmos-style document (saada C#, Cosmos SDK ki zaroorat nahi)"
        },
        check: "run",
        expected: `{"id":"o-1001","pk":"bigco-1","tenantId":"bigco","total":250}`,
        src: `using System.Text.Json;
using System.Text.Json.Serialization;

var doc = new OrderDoc("o-1001", OrderDoc.PartitionKeyFor("bigco", 1001), "bigco", 250m);
Console.WriteLine(JsonSerializer.Serialize(doc));

// 'id' must be unique inside one logical partition; 'pk' holds the partition key value.
public record OrderDoc(
    [property: JsonPropertyName("id")] string Id,
    [property: JsonPropertyName("pk")] string Pk,
    [property: JsonPropertyName("tenantId")] string TenantId,
    [property: JsonPropertyName("total")] decimal Total)
{
    private const int Buckets = 8;   // pick from the write rate of your biggest tenant

    // Synthetic key: a big tenant is spread over several partitions.
    public static string PartitionKeyFor(string tenantId, int orderNo) => $"{tenantId}-{orderNo % Buckets}";
}`
      }]
    },
  ],
  qa: [
    {
      id: "mvcc-pg-vs-sqlserver",
      depth: "short",
      q: "How does PostgreSQL's MVCC differ from SQL Server's row versioning?",
      answer: "Postgres keeps old row versions in the table itself and VACUUM cleans them later. SQL Server, with RCSI or SNAPSHOT, keeps them in the version store (tempdb by default).",
      meaning: {
        hi: "Postgres पुराने row versions table में ही रखता है और बाद में VACUUM साफ़ करता है। SQL Server में RCSI या SNAPSHOT के साथ वे tempdb के version store में रहते हैं।",
        hg: "Postgres purane row versions table mein hi rakhta hai aur baad mein VACUUM saaf karta hai. SQL Server mein RCSI ya SNAPSHOT ke saath woh tempdb ke version store mein rehte hain."
      },
      explain: {
        en: `<ul>
<li>Postgres: an UPDATE writes a new tuple and ends the old one; readers use snapshots, so they do not block writers. The cost is dead tuples and bloat until VACUUM.</li>
<li>SQL Server: only when RCSI or SNAPSHOT is on do readers use versions (Day 18); otherwise READ COMMITTED takes shared locks. The versions sit in tempdb, so watch tempdb size.</li>
<li>Follow-up: "Which is better?" Neither; each moves the cost somewhere else (table bloat vs tempdb load). Know where to look for each.</li>
</ul>`,
        hi: `<ul>
<li>Postgres: UPDATE नया tuple लिखता है और पुराने को end करता है; readers snapshots use करते हैं, इसलिए writers को block नहीं करते। कीमत है dead tuples और bloat, VACUUM तक।</li>
<li>SQL Server: RCSI या SNAPSHOT on हो तभी readers versions use करते हैं (Day 18); वरना READ COMMITTED shared locks लेता है। Versions tempdb में रहते हैं, इसलिए tempdb का size देखते रहो।</li>
<li>Follow-up: "कौन बेहतर है?" कोई नहीं; दोनों cost को कहीं और ले जाते हैं (table bloat बनाम tempdb load)। दोनों में कहाँ देखना है यह जानो।</li>
</ul>`,
        hg: `<ul>
<li>Postgres: UPDATE naya tuple likhta hai aur purane ko end karta hai; readers snapshots use karte hain, isliye writers ko block nahi karte. Keemat hai dead tuples aur bloat, VACUUM tak.</li>
<li>SQL Server: RCSI ya SNAPSHOT on ho tabhi readers versions use karte hain (Day 18); warna READ COMMITTED shared locks leta hai. Versions tempdb mein rehte hain, isliye tempdb ka size dekhte raho.</li>
<li>Follow-up: "Kaun behtar hai?" Koi nahi; dono cost ko kahin aur le jaate hain (table bloat vs tempdb load). Dono mein kahan dekhna hai yeh jaano.</li>
</ul>`
      }
    },
    {
      id: "vacuum-why",
      depth: "short",
      q: "What is VACUUM and why does PostgreSQL need it?",
      answer: "UPDATE and DELETE leave dead row versions behind. VACUUM marks that space reusable and updates the visibility map; autovacuum does this in the background by default.",
      meaning: {
        hi: "UPDATE और DELETE dead row versions छोड़ जाते हैं। VACUUM वह जगह दोबारा use करने लायक बनाता है और visibility map update करता है; autovacuum default से यह background में करता है।",
        hg: "UPDATE aur DELETE dead row versions chhod jaate hain. VACUUM woh jagah dobara use karne layak banata hai aur visibility map update karta hai; autovacuum default se yeh background mein karta hai."
      },
      explain: {
        en: `<ul>
<li>Dead versions cannot be removed while any open transaction could still need them, so one long or "idle in transaction" session can cause bloat everywhere.</li>
<li>Plain VACUUM does not shrink the file much; <code>VACUUM FULL</code> rewrites the table under an exclusive lock, so treat it as a maintenance-window tool.</li>
<li>VACUUM also freezes very old rows, which protects against transaction-id wraparound. Follow-up: "What do you monitor?" Dead tuple counts, last autovacuum time, longest open transaction.</li>
</ul>`,
        hi: `<ul>
<li>जब तक कोई open transaction को उनकी ज़रूरत पड़ सकती है तब तक dead versions हटाए नहीं जा सकते, इसलिए एक लंबा या "idle in transaction" session हर जगह bloat करा सकता है।</li>
<li>सादा VACUUM file को ज़्यादा छोटा नहीं करता; <code>VACUUM FULL</code> exclusive lock के साथ table दोबारा लिखता है, इसलिए उसे maintenance window का tool मानो।</li>
<li>VACUUM बहुत पुरानी rows को freeze भी करता है, जो transaction-id wraparound से बचाता है। Follow-up: "क्या monitor करोगे?" Dead tuple counts, last autovacuum time, सबसे लंबा open transaction।</li>
</ul>`,
        hg: `<ul>
<li>Jab tak koi open transaction ko unki zaroorat pad sakti hai tab tak dead versions hataye nahi ja sakte, isliye ek lamba ya "idle in transaction" session har jagah bloat kara sakta hai.</li>
<li>Saada VACUUM file ko zyada chhota nahi karta; <code>VACUUM FULL</code> exclusive lock ke saath table dobara likhta hai, isliye use maintenance window ka tool maano.</li>
<li>VACUUM bahut purani rows ko freeze bhi karta hai, jo transaction-id wraparound se bachata hai. Follow-up: "Kya monitor karoge?" Dead tuple counts, last autovacuum time, sabse lamba open transaction.</li>
</ul>`
      }
    },
    {
      id: "pg-default-isolation",
      depth: "short",
      q: "What is PostgreSQL's default isolation level, and do readers block writers?",
      answer: "READ COMMITTED: each statement sees only data committed before it started, and plain reads and writes do not block each other. Writers still wait for other writers on the same row.",
      meaning: {
        hi: "READ COMMITTED। हर statement वही data देखता है जो उसके शुरू होने से पहले committed था, और सादी reads न writers को block करती हैं न block होती हैं। Writers उसी row पर दूसरे writers का इंतज़ार फिर भी करते हैं।",
        hg: "READ COMMITTED. Har statement wahi data dekhta hai jo uske shuru hone se pehle committed tha, aur saadi reads na writers ko block karti hain na block hoti hain. Writers usi row par doosre writers ka intezaar phir bhi karte hain."
      },
      explain: {
        en: `<ul>
<li>Repeatable Read in Postgres is a snapshot for the whole transaction and does not allow phantom reads; it can fail with a serialization error, so the caller must retry. Serializable (SSI) adds conflict detection with the same retry rule.</li>
<li>SQL Server's default READ COMMITTED uses locks, so readers can block writers unless RCSI is on (Day 18). That is the practical difference users feel.</li>
<li>Follow-up: "How do you lock a row on purpose?" <code>SELECT ... FOR UPDATE</code>, with <code>SKIP LOCKED</code> for queue-like work.</li>
</ul>`,
        hi: `<ul>
<li>Postgres में Repeatable Read पूरे transaction का snapshot है और phantom reads नहीं आने देता; उसमें serialization error आ सकता है, इसलिए caller को retry करना पड़ता है। Serializable में conflict detection जुड़ता है, retry का वही rule है।</li>
<li>SQL Server का default READ COMMITTED locks use करता है, इसलिए RCSI on न हो तो readers writers को block कर सकते हैं (Day 18)। Users को यही practical फ़र्क महसूस होता है।</li>
<li>Follow-up: "जानबूझकर row lock कैसे करोगे?" <code>SELECT ... FOR UPDATE</code>, और queue जैसे काम के लिए <code>SKIP LOCKED</code>।</li>
</ul>`,
        hg: `<ul>
<li>Postgres mein Repeatable Read poore transaction ka snapshot hai aur phantom reads nahi aane deta; usme serialization error aa sakta hai, isliye caller ko retry karna padta hai. Serializable mein conflict detection judta hai, retry ka wahi rule hai.</li>
<li>SQL Server ka default READ COMMITTED locks use karta hai, isliye RCSI on na ho to readers writers ko block kar sakte hain (Day 18). Users ko yahi practical farq mehsoos hota hai.</li>
<li>Follow-up: "Jaanbujhkar row lock kaise karoge?" <code>SELECT ... FOR UPDATE</code>, aur queue jaise kaam ke liye <code>SKIP LOCKED</code>.</li>
</ul>`
      }
    },
    {
      id: "case-sensitivity-pg",
      depth: "short",
      q: "How do case sensitivity and identifier quoting differ between PostgreSQL and SQL Server?",
      answer: "Postgres folds unquoted names to lower case and compares text case-sensitively by default. SQL Server keeps name case and its usual collations compare case-insensitively.",
      meaning: {
        hi: "Postgres बिना quote वाले नाम lower case कर देता है और text को default से case-sensitive compare करता है। SQL Server नाम का case रखता है और उसकी आम collations case-insensitive compare करती हैं।",
        hg: "Postgres bina quote wale naam lower case kar deta hai aur text ko default se case-sensitive compare karta hai. SQL Server naam ka case rakhta hai aur uski aam collations case-insensitive compare karti hain."
      },
      explain: {
        en: `<ul>
<li>A table created as <code>"Orders"</code> (quoted) must always be quoted; <code>SELECT * FROM Orders</code> looks for <code>orders</code> and fails with "relation does not exist". Puzzle 1 models the rule.</li>
<li>For case-insensitive search: <code>ILIKE</code>, <code>lower(col)</code> with an expression index, or <code>citext</code>. Nondeterministic ICU collations also exist (Postgres 12+) but have limits that depend on the version.</li>
<li>Follow-up: "Trailing spaces?" Postgres <code>text</code> compares them as data; SQL Server ignores trailing spaces in <code>=</code> (Day 18). Always test unique keys after a migration.</li>
</ul>`,
        hi: `<ul>
<li><code>"Orders"</code> (quoted) बनी table को हमेशा quote करना पड़ता है; <code>SELECT * FROM Orders</code> <code>orders</code> ढूँढता है और "relation does not exist" से fail होता है। Puzzle 1 यही rule model करता है।</li>
<li>Case-insensitive search के लिए: <code>ILIKE</code>, expression index के साथ <code>lower(col)</code>, या <code>citext</code>। Nondeterministic ICU collations भी हैं (Postgres 12+) पर version के हिसाब से उनकी limits हैं।</li>
<li>Follow-up: "Trailing spaces?" Postgres <code>text</code> उन्हें data की तरह compare करता है; SQL Server <code>=</code> में trailing spaces ignore करता है (Day 18)। Migration के बाद unique keys ज़रूर test करो।</li>
</ul>`,
        hg: `<ul>
<li><code>"Orders"</code> (quoted) bani table ko hamesha quote karna padta hai; <code>SELECT * FROM Orders</code> <code>orders</code> dhoondhta hai aur "relation does not exist" se fail hota hai. Puzzle 1 yahi rule model karta hai.</li>
<li>Case-insensitive search ke liye: <code>ILIKE</code>, expression index ke saath <code>lower(col)</code>, ya <code>citext</code>. Nondeterministic ICU collations bhi hain (Postgres 12+) par version ke hisaab se unki limits hain.</li>
<li>Follow-up: "Trailing spaces?" Postgres <code>text</code> unhe data ki tarah compare karta hai; SQL Server <code>=</code> mein trailing spaces ignore karta hai (Day 18). Migration ke baad unique keys zaroor test karo.</li>
</ul>`
      }
    },
    {
      id: "upsert-pg-vs-sqlserver",
      depth: "short",
      q: "How do you write an upsert in PostgreSQL, and how does it compare with MERGE in SQL Server?",
      answer: "Use INSERT ... ON CONFLICT (key) DO UPDATE or DO NOTHING, backed by a unique index. SQL Server uses MERGE or UPDATE-then-INSERT under a lock; Postgres has MERGE since 15.",
      meaning: {
        hi: "unique index के साथ INSERT ... ON CONFLICT (key) DO UPDATE या DO NOTHING use करो। SQL Server में MERGE या lock के नीचे UPDATE-फिर-INSERT होता है; Postgres में MERGE 15 से है।",
        hg: "unique index ke saath INSERT ... ON CONFLICT (key) DO UPDATE ya DO NOTHING use karo. SQL Server mein MERGE ya lock ke neeche UPDATE-phir-INSERT hota hai; Postgres mein MERGE 15 se hai."
      },
      explain: {
        en: `<ul>
<li><code>ON CONFLICT</code> is a single atomic statement: you get either an insert or an update, with no race between a separate check and write. The conflict target must match a unique index or constraint.</li>
<li>One statement cannot update the same key twice (puzzle 3): de-duplicate the batch first. <code>EXCLUDED</code> refers to the row you tried to insert.</li>
<li>Postgres 15 added <code>MERGE</code>, which is more batch-oriented; 17 added <code>RETURNING</code> and <code>WHEN NOT MATCHED BY SOURCE</code> to it. Under concurrency <code>ON CONFLICT</code> is the usual choice for single-row idempotent writes. Follow-up: "Why avoid MERGE in SQL Server?" It has a history of bugs and race conditions; many teams prefer the explicit pattern.</li>
</ul>`,
        hi: `<ul>
<li><code>ON CONFLICT</code> एक atomic statement है: या insert मिलता है या update, अलग check और write के बीच कोई race नहीं। Conflict target को unique index या constraint से match करना होता है।</li>
<li>एक statement एक ही key को दो बार update नहीं कर सकता (puzzle 3): पहले batch को de-duplicate करो। <code>EXCLUDED</code> उस row को कहता है जो तुमने insert करने की कोशिश की।</li>
<li>Postgres 15 में <code>MERGE</code> आया, जो ज़्यादा batch-oriented है; 17 ने उसमें <code>RETURNING</code> और <code>WHEN NOT MATCHED BY SOURCE</code> जोड़े। Concurrency में single-row idempotent writes के लिए आम choice <code>ON CONFLICT</code> है। Follow-up: "SQL Server में MERGE से क्यों बचें?" उसमें bugs और race conditions का इतिहास है; कई teams explicit pattern पसंद करती हैं।</li>
</ul>`,
        hg: `<ul>
<li><code>ON CONFLICT</code> ek atomic statement hai: ya insert milta hai ya update, alag check aur write ke beech koi race nahi. Conflict target ko unique index ya constraint se match karna hota hai.</li>
<li>Ek statement ek hi key ko do baar update nahi kar sakta (puzzle 3): pehle batch ko de-duplicate karo. <code>EXCLUDED</code> us row ko kehta hai jo tumne insert karne ki koshish ki.</li>
<li>Postgres 15 mein <code>MERGE</code> aaya, jo zyada batch-oriented hai; 17 ne usme <code>RETURNING</code> aur <code>WHEN NOT MATCHED BY SOURCE</code> jode. Concurrency mein single-row idempotent writes ke liye aam choice <code>ON CONFLICT</code> hai. Follow-up: "SQL Server mein MERGE se kyon bachein?" Usme bugs aur race conditions ka itihaas hai; kai teams explicit pattern pasand karti hain.</li>
</ul>`
      }
    },
    {
      id: "json-vs-jsonb",
      depth: "short",
      q: "json vs jsonb in PostgreSQL: which do you use, and how do you index it?",
      answer: "Use jsonb: it is parsed binary, queryable and indexable, while json keeps the exact text. A GIN index serves containment (@&gt;) and key-exists lookups.",
      meaning: {
        hi: "jsonb use करो: वह parsed binary है, query और index हो सकता है, जबकि json exact text रखता है। GIN index containment (@&gt;) और key-exists lookups को serve करता है।",
        hg: "jsonb use karo: woh parsed binary hai, query aur index ho sakta hai, jabki json exact text rakhta hai. GIN index containment (@&gt;) aur key-exists lookups ko serve karta hai."
      },
      explain: {
        en: `<ul>
<li>jsonb does not keep key order or duplicate keys; use <code>json</code> only if the original text matters (audit copy of a payload).</li>
<li>Operators: <code>-&gt;</code> (jsonb), <code>-&gt;&gt;</code> (text), <code>@&gt;</code> (contains). The default GIN opclass also supports the key-exists operators; <code>jsonb_path_ops</code> is smaller but does not.</li>
<li>For one hot field, an expression B-tree index on <code>(attrs -&gt;&gt; 'city')</code> can beat GIN. Postgres 17 added <code>JSON_TABLE()</code> to turn JSON into rows. Follow-up: "SQL Server?" JSON lives in text columns with <code>JSON_VALUE</code> and <code>OPENJSON</code> (before SQL Server 2025; 2025 and Azure SQL add a native <code>json</code> type); indexing usually goes through a computed column.</li>
</ul>`,
        hi: `<ul>
<li>jsonb key order या duplicate keys नहीं रखता; <code>json</code> तभी use करो जब original text मायने रखे (payload की audit copy)।</li>
<li>Operators: <code>-&gt;</code> (jsonb), <code>-&gt;&gt;</code> (text), <code>@&gt;</code> (contains)। Default GIN opclass key-exists operators भी support करता है; <code>jsonb_path_ops</code> छोटा है पर वे support नहीं करता।</li>
<li>एक hot field के लिए <code>(attrs -&gt;&gt; 'city')</code> पर expression B-tree index GIN से बेहतर हो सकता है। Postgres 17 में JSON को rows बनाने वाला <code>JSON_TABLE()</code> आया। Follow-up: "SQL Server?" JSON text columns में रहता है, <code>JSON_VALUE</code> और <code>OPENJSON</code> के साथ (SQL Server 2025 से पहले; 2025 और Azure SQL में native <code>json</code> type आया); indexing आमतौर पर computed column से होती है।</li>
</ul>`,
        hg: `<ul>
<li>jsonb key order ya duplicate keys nahi rakhta; <code>json</code> tabhi use karo jab original text maayne rakhe (payload ki audit copy).</li>
<li>Operators: <code>-&gt;</code> (jsonb), <code>-&gt;&gt;</code> (text), <code>@&gt;</code> (contains). Default GIN opclass key-exists operators bhi support karta hai; <code>jsonb_path_ops</code> chhota hai par woh support nahi karta.</li>
<li>Ek hot field ke liye <code>(attrs -&gt;&gt; 'city')</code> par expression B-tree index GIN se behtar ho sakta hai. Postgres 17 mein JSON ko rows banane wala <code>JSON_TABLE()</code> aaya. Follow-up: "SQL Server?" JSON text columns mein rehta hai, <code>JSON_VALUE</code> aur <code>OPENJSON</code> ke saath (SQL Server 2025 se pehle; 2025 aur Azure SQL mein native <code>json</code> type aaya); indexing aamtaur par computed column se hoti hai.</li>
</ul>`
      }
    },
    {
      id: "pg-index-types",
      depth: "short",
      q: "Which index types does PostgreSQL offer, and when do you use each?",
      answer: "B-tree is the default for equality and ranges. GIN suits jsonb, arrays and full-text; GiST suits geometry and ranges; BRIN suits huge append-ordered tables.",
      meaning: {
        hi: "equality और ranges के लिए B-tree default है। GIN jsonb, arrays और full-text के लिए है; GiST geometry और ranges के लिए; BRIN बहुत बड़ी append-ordered tables के लिए।",
        hg: "equality aur ranges ke liye B-tree default hai. GIN jsonb, arrays aur full-text ke liye hai; GiST geometry aur ranges ke liye; BRIN bahut badi append-ordered tables ke liye."
      },
      explain: {
        en: `<ul>
<li>Not index types but index shapes: <b>partial</b> (<code>WHERE</code>), <b>expression</b> (<code>lower(email)</code>), <b>covering</b> (<code>INCLUDE</code>, Postgres 11 for B-tree; GiST since 12, SP-GiST since 14).</li>
<li>There is no clustered index; physical order is the heap. BRIN works only when column values correlate with physical order, such as an insert-time column.</li>
<li>Follow-up: "How do you add an index on a live table?" <code>CREATE INDEX CONCURRENTLY</code> avoids blocking writes (it takes longer and cannot run inside a transaction block). Compare Day 18: SQL Server's clustered key choice does not exist here.</li>
</ul>`,
        hi: `<ul>
<li>ये index types नहीं, index की shapes हैं: <b>partial</b> (<code>WHERE</code>), <b>expression</b> (<code>lower(email)</code>), <b>covering</b> (<code>INCLUDE</code>, B-tree के लिए Postgres 11; GiST में 12 से, SP-GiST में 14 से)।</li>
<li>Clustered index नहीं है; physical order heap का है। BRIN तभी काम करता है जब column values physical order से मेल खाएँ, जैसे insert-time वाला column।</li>
<li>Follow-up: "Live table पर index कैसे जोड़ोगे?" <code>CREATE INDEX CONCURRENTLY</code> writes को block नहीं करता (ज़्यादा समय लेता है और transaction block के अंदर नहीं चलता)। Day 18 से तुलना: SQL Server का clustered key वाला चुनाव यहाँ नहीं है।</li>
</ul>`,
        hg: `<ul>
<li>Yeh index types nahi, index ki shapes hain: <b>partial</b> (<code>WHERE</code>), <b>expression</b> (<code>lower(email)</code>), <b>covering</b> (<code>INCLUDE</code>, B-tree ke liye Postgres 11; GiST mein 12 se, SP-GiST mein 14 se).</li>
<li>Clustered index nahi hai; physical order heap ka hai. BRIN tabhi kaam karta hai jab column values physical order se mel khayein, jaise insert-time wala column.</li>
<li>Follow-up: "Live table par index kaise jodoge?" <code>CREATE INDEX CONCURRENTLY</code> writes ko block nahi karta (zyada samay leta hai aur transaction block ke andar nahi chalta). Day 18 se tulna: SQL Server ka clustered key wala chunav yahan nahi hai.</li>
</ul>`
      }
    },
    {
      id: "sql-or-nosql",
      depth: "short",
      q: "When would you choose a NoSQL store instead of PostgreSQL or SQL Server?",
      answer: "When a measured need beats relational strengths: key-based access at huge or global scale, a document-shaped aggregate, or in-memory speed. Otherwise a relational database is the safer default.",
      meaning: {
        hi: "जब कोई measured ज़रूरत relational की strengths से भारी पड़े: बहुत बड़े या global scale पर key-based access, document-shaped aggregate, या in-memory speed। वरना relational database ज़्यादा safe default है।",
        hg: "Jab koi measured zaroorat relational ki strengths se bhaari pade: bahut bade ya global scale par key-based access, document-shaped aggregate, ya in-memory speed. Warna relational database zyada safe default hai."
      },
      explain: {
        en: `<ul>
<li>Cosmos DB: global distribution, tunable consistency, key-based reads. MongoDB: whole-document reads and writes with a flexible schema. Redis: cache, counters, rate limits, sorted sets (Day 13, Day 17).</li>
<li>Name the access pattern and consistency need first. "We might scale" is not a measurement; Postgres with JSONB, read replicas and partitioning goes a long way.</li>
<li>Follow-up: "What do you give up?" Joins, ad-hoc queries, cross-entity transactions, and familiarity. Say it out loud; interviewers listen for trade-offs, not product names.</li>
</ul>`,
        hi: `<ul>
<li>Cosmos DB: global distribution, tunable consistency, key-based reads। MongoDB: flexible schema के साथ पूरे document की reads और writes। Redis: cache, counters, rate limits, sorted sets (Day 13, Day 17)।</li>
<li>पहले access pattern और consistency की ज़रूरत बताओ। "शायद scale करना पड़े" कोई measurement नहीं है; JSONB, read replicas और partitioning के साथ Postgres काफ़ी दूर जाता है।</li>
<li>Follow-up: "क्या छोड़ना पड़ता है?" Joins, ad-hoc queries, cross-entity transactions, और जान-पहचान। यह ज़ोर से बोलो; interviewers trade-offs सुनते हैं, product names नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Cosmos DB: global distribution, tunable consistency, key-based reads. MongoDB: flexible schema ke saath poore document ki reads aur writes. Redis: cache, counters, rate limits, sorted sets (Day 13, Day 17).</li>
<li>Pehle access pattern aur consistency ki zaroorat batao. "Shayad scale karna pade" koi measurement nahi hai; JSONB, read replicas aur partitioning ke saath Postgres kaafi door jaata hai.</li>
<li>Follow-up: "Kya chhodna padta hai?" Joins, ad-hoc queries, cross-entity transactions, aur jaan-pehchaan. Yeh zor se bolo; interviewers trade-offs sunte hain, product names nahi.</li>
</ul>`
      }
    },
    {
      id: "identity-vs-serial",
      depth: "detailed",
      q: "What is the difference between serial, identity columns and sequences in PostgreSQL, and how does it compare with SQL Server IDENTITY?",
      answer: "serial is the older shorthand for a sequence plus default; GENERATED ... AS IDENTITY (Postgres 10+) is the standard form. Like SQL Server IDENTITY, both can leave gaps after rollbacks.",
      meaning: {
        hi: "serial sequence plus default का पुराना shorthand है; GENERATED ... AS IDENTITY (Postgres 10+) standard form है। SQL Server IDENTITY की तरह दोनों में rollback के बाद gaps आ सकते हैं।",
        hg: "serial sequence plus default ka purana shorthand hai; GENERATED ... AS IDENTITY (Postgres 10+) standard form hai. SQL Server IDENTITY ki tarah dono mein rollback ke baad gaps aa sakte hain."
      },
      explain: {
        en: `<ul>
<li><code>GENERATED ALWAYS</code> rejects explicit values unless you override on purpose; <code>BY DEFAULT</code> allows them. A plain sequence is a separate object you can share between tables.</li>
<li>Sequence values are handed out outside the transaction, so a rollback or crash leaves a gap. Never promise gap-free invoice numbers from an identity; use a separate counter table with locking if law requires it.</li>
<li>For distributed ids, Postgres 18 added <code>uuidv7()</code> (time-ordered UUIDs, friendlier to B-tree indexes than random v4); .NET has <code>Guid.CreateVersion7()</code> since .NET 9.</li>
</ul>`,
        hi: `<ul>
<li><code>GENERATED ALWAYS</code> explicit values reject करता है जब तक तुम जानबूझकर override न करो; <code>BY DEFAULT</code> उन्हें allow करता है। सादा sequence अलग object है जिसे tables के बीच share किया जा सकता है।</li>
<li>Sequence values transaction के बाहर दिए जाते हैं, इसलिए rollback या crash से gap बनता है। Identity से gap-free invoice numbers का वादा मत करो; क़ानून माँगे तो locking वाली अलग counter table use करो।</li>
<li>Distributed ids के लिए Postgres 18 में <code>uuidv7()</code> आया (time-ordered UUIDs, random v4 से B-tree indexes के लिए बेहतर); .NET 9 से <code>Guid.CreateVersion7()</code> है।</li>
</ul>`,
        hg: `<ul>
<li><code>GENERATED ALWAYS</code> explicit values reject karta hai jab tak tum jaanbujhkar override na karo; <code>BY DEFAULT</code> unhe allow karta hai. Saada sequence alag object hai jise tables ke beech share kiya ja sakta hai.</li>
<li>Sequence values transaction ke bahar diye jaate hain, isliye rollback ya crash se gap banta hai. Identity se gap-free invoice numbers ka vaada mat karo; kanoon maange to locking wali alag counter table use karo.</li>
<li>Distributed ids ke liye Postgres 18 mein <code>uuidv7()</code> aaya (time-ordered UUIDs, random v4 se B-tree indexes ke liye behtar); .NET 9 se <code>Guid.CreateVersion7()</code> hai.</li>
</ul>`
      }
    },
    {
      id: "returning-and-paging",
      depth: "detailed",
      q: "What does RETURNING do, and how do LIMIT/OFFSET compare with TOP and OFFSET-FETCH?",
      answer: "RETURNING gives back the affected rows from INSERT, UPDATE or DELETE, like SQL Server's OUTPUT. LIMIT/OFFSET pages like TOP and OFFSET-FETCH, but a big OFFSET still reads and discards rows.",
      meaning: {
        hi: "RETURNING, INSERT, UPDATE या DELETE से affected rows वापस देता है, SQL Server के OUTPUT की तरह। LIMIT/OFFSET, TOP और OFFSET-FETCH की तरह paging करता है, पर बड़ा OFFSET फिर भी rows पढ़कर फेंकता है।",
        hg: "RETURNING, INSERT, UPDATE ya DELETE se affected rows wapas deta hai, SQL Server ke OUTPUT ki tarah. LIMIT/OFFSET, TOP aur OFFSET-FETCH ki tarah paging karta hai, par bada OFFSET phir bhi rows padhkar phenkta hai."
      },
      explain: {
        en: `<ul>
<li><code>RETURNING</code> saves a second round trip, for example to read the generated id or the new version number after an upsert.</li>
<li>Postgres also accepts the standard <code>FETCH FIRST n ROWS ONLY</code>. SQL Server needs <code>ORDER BY</code> with <code>OFFSET ... FETCH</code>; <code>TOP</code> has no offset.</li>
<li>Deep paging with OFFSET gets slower with each page and can skip or repeat rows when data changes. Prefer keyset paging (<code>WHERE id &gt; @last ORDER BY id LIMIT n</code>) with an index on the sort key. Follow-up: "What if users need page numbers?" Cap the depth or accept the cost.</li>
</ul>`,
        hi: `<ul>
<li><code>RETURNING</code> दूसरा round trip बचाता है, जैसे upsert के बाद generated id या नया version number पढ़ने के लिए।</li>
<li>Postgres standard <code>FETCH FIRST n ROWS ONLY</code> भी मानता है। SQL Server में <code>OFFSET ... FETCH</code> के साथ <code>ORDER BY</code> चाहिए; <code>TOP</code> में offset नहीं होता।</li>
<li>OFFSET वाली deep paging हर page के साथ धीमी होती जाती है और data बदलने पर rows छोड़ या दोहरा सकती है। Sort key पर index के साथ keyset paging (<code>WHERE id &gt; @last ORDER BY id LIMIT n</code>) बेहतर है। Follow-up: "अगर users को page numbers चाहिए?" Depth की limit रखो या cost मानो।</li>
</ul>`,
        hg: `<ul>
<li><code>RETURNING</code> doosra round trip bachata hai, jaise upsert ke baad generated id ya naya version number padhne ke liye.</li>
<li>Postgres standard <code>FETCH FIRST n ROWS ONLY</code> bhi maanta hai. SQL Server mein <code>OFFSET ... FETCH</code> ke saath <code>ORDER BY</code> chahiye; <code>TOP</code> mein offset nahi hota.</li>
<li>OFFSET wali deep paging har page ke saath dheemi hoti jaati hai aur data badalne par rows chhod ya dohra sakti hai. Sort key par index ke saath keyset paging (<code>WHERE id &gt; @last ORDER BY id LIMIT n</code>) behtar hai. Follow-up: "Agar users ko page numbers chahiye?" Depth ki limit rakho ya cost maano.</li>
</ul>`
      }
    },
    {
      id: "partial-expression-index",
      depth: "detailed",
      q: "What are partial and expression indexes in PostgreSQL, and when do they help?",
      answer: "A partial index covers only rows matching a WHERE condition; an expression index covers a computed value such as lower(email). Both are smaller, but the query must match their condition or expression.",
      meaning: {
        hi: "Partial index सिर्फ़ WHERE condition वाली rows को cover करता है; expression index किसी computed value जैसे lower(email) को। दोनों छोटे होते हैं, पर query को उनकी condition या expression से match करना पड़ता है।",
        hg: "Partial index sirf WHERE condition wali rows ko cover karta hai; expression index kisi computed value jaise lower(email) ko. Dono chhote hote hain, par query ko unki condition ya expression se match karna padta hai."
      },
      explain: {
        en: `<ul>
<li>Partial: <code>CREATE INDEX ... WHERE status = 1</code> for "open orders". SQL Server's filtered index (Day 18) is the same idea; both need the query predicate to imply the index predicate.</li>
<li>Expression: <code>CREATE UNIQUE INDEX ... (lower(email))</code> gives case-insensitive uniqueness without citext. The query must say <code>lower(email) = lower(@e)</code>, or the planner will not use it.</li>
<li>Each index costs write time and space, and a partial index with a parameterised predicate may not match. Follow-up: "How do you check?" <code>EXPLAIN (ANALYZE)</code> and the index usage statistics.</li>
</ul>`,
        hi: `<ul>
<li>Partial: "open orders" के लिए <code>CREATE INDEX ... WHERE status = 1</code>। SQL Server का filtered index (Day 18) यही idea है; दोनों में query predicate को index predicate imply करना चाहिए।</li>
<li>Expression: <code>CREATE UNIQUE INDEX ... (lower(email))</code> citext के बिना case-insensitive uniqueness देता है। Query में <code>lower(email) = lower(@e)</code> लिखना होगा, वरना planner उसे use नहीं करेगा।</li>
<li>हर index write time और जगह की कीमत लेता है, और parameterised predicate वाला partial index match न भी हो सकता है। Follow-up: "कैसे check करोगे?" <code>EXPLAIN (ANALYZE)</code> और index usage statistics।</li>
</ul>`,
        hg: `<ul>
<li>Partial: "open orders" ke liye <code>CREATE INDEX ... WHERE status = 1</code>. SQL Server ka filtered index (Day 18) yahi idea hai; dono mein query predicate ko index predicate imply karna chahiye.</li>
<li>Expression: <code>CREATE UNIQUE INDEX ... (lower(email))</code> citext ke bina case-insensitive uniqueness deta hai. Query mein <code>lower(email) = lower(@e)</code> likhna hoga, warna planner use use nahi karega.</li>
<li>Har index write time aur jagah ki keemat leta hai, aur parameterised predicate wala partial index match na bhi ho sakta hai. Follow-up: "Kaise check karoge?" <code>EXPLAIN (ANALYZE)</code> aur index usage statistics.</li>
</ul>`
      }
    },
    {
      id: "efcore-npgsql-gotchas",
      depth: "detailed",
      q: "What changes when you move an EF Core app from SQL Server to PostgreSQL with Npgsql?",
      answer: "Swap UseSqlServer for UseNpgsql, then check naming (quoted PascalCase vs snake_case), UTC-only timestamptz, case-sensitive comparisons, and provider-specific features such as jsonb.",
      meaning: {
        hi: "UseSqlServer की जगह UseNpgsql लगाओ, फिर naming (quoted PascalCase बनाम snake_case), सिर्फ़ UTC वाला timestamptz, case-sensitive comparisons और jsonb जैसे provider-specific features check करो।",
        hg: "UseSqlServer ki jagah UseNpgsql lagao, phir naming (quoted PascalCase vs snake_case), sirf UTC wala timestamptz, case-sensitive comparisons aur jsonb jaise provider-specific features check karo."
      },
      explain: {
        en: `<ul>
<li>Migrations must be regenerated for the new provider; do not reuse SQL Server migration files (Day 5 and 6). Types change: <code>nvarchar</code> becomes <code>text</code> or <code>varchar</code>, <code>datetime2</code> becomes <code>timestamp</code> or <code>timestamptz</code>.</li>
<li>Case-sensitive <code>Where(c =&gt; c.Name == x)</code> may now miss rows that matched on SQL Server. Run your integration tests against a real Postgres (for example in a container), not SQLite or in-memory: they hide exactly these differences.</li>
<li>Concurrency tokens differ: Postgres uses the <code>xmin</code> system column as a row version, not a <code>rowversion</code> column. Check the Npgsql docs for the current mapping.</li>
</ul>`,
        hi: `<ul>
<li>नए provider के लिए migrations दोबारा बनानी होंगी; SQL Server की migration files reuse मत करो (Day 5 और 6)। Types बदलते हैं: <code>nvarchar</code> <code>text</code> या <code>varchar</code> बनता है, <code>datetime2</code> <code>timestamp</code> या <code>timestamptz</code> बनता है।</li>
<li>Case-sensitive <code>Where(c =&gt; c.Name == x)</code> अब वे rows miss कर सकता है जो SQL Server पर match होती थीं। Integration tests असली Postgres पर चलाओ (जैसे container में), SQLite या in-memory पर नहीं: वे ठीक यही फ़र्क छुपाते हैं।</li>
<li>Concurrency tokens अलग हैं: Postgres row version के लिए <code>xmin</code> system column use करता है, <code>rowversion</code> column नहीं। मौजूदा mapping के लिए Npgsql docs देखो।</li>
</ul>`,
        hg: `<ul>
<li>Naye provider ke liye migrations dobara banani hongi; SQL Server ki migration files reuse mat karo (Day 5 aur 6). Types badalte hain: <code>nvarchar</code> <code>text</code> ya <code>varchar</code> banta hai, <code>datetime2</code> <code>timestamp</code> ya <code>timestamptz</code> banta hai.</li>
<li>Case-sensitive <code>Where(c =&gt; c.Name == x)</code> ab woh rows miss kar sakta hai jo SQL Server par match hoti thi. Integration tests asli Postgres par chalao (jaise container mein), SQLite ya in-memory par nahi: woh theek yahi farq chhupate hain.</li>
<li>Concurrency tokens alag hain: Postgres row version ke liye <code>xmin</code> system column use karta hai, <code>rowversion</code> column nahi. Maujooda mapping ke liye Npgsql docs dekho.</li>
</ul>`
      }
    },
    {
      id: "pooling-pgbouncer",
      depth: "detailed",
      q: "Why does PostgreSQL need connection pooling, and how do Npgsql and PgBouncer fit?",
      answer: "Each Postgres connection is a server process, so thousands are costly. Npgsql pools inside each app instance; PgBouncer pools across instances in front of the server.",
      meaning: {
        hi: "हर Postgres connection एक server process है, इसलिए हज़ारों महँगे पड़ते हैं। Npgsql हर app instance के अंदर pool करता है; PgBouncer server के आगे सब instances के लिए pool करता है।",
        hg: "Har Postgres connection ek server process hai, isliye hazaaron mehenge padte hain. Npgsql har app instance ke andar pool karta hai; PgBouncer server ke aage sab instances ke liye pool karta hai."
      },
      explain: {
        en: `<ul>
<li>Math to say aloud: 50 pods x Npgsql default maximum 100 = up to 5,000 possible connections against a server with a <code>max_connections</code> of around 100 by default. Lower the per-pod maximum or add PgBouncer.</li>
<li>PgBouncer modes: session, transaction, statement. <b>Transaction</b> mode gives the best sharing but breaks session state (<code>SET</code>, session advisory locks, <code>LISTEN</code>); check the Npgsql docs for settings with PgBouncer.</li>
<li>Same discipline as SQL Server (Day 6): short-lived <code>DbContext</code>, open late, close early. Follow-up: "Symptom of exhaustion?" Timeouts waiting for a connection from the pool, or "too many clients" errors.</li>
</ul>`,
        hi: `<ul>
<li>ज़ोर से बोलने वाला हिसाब: 50 pods x Npgsql का default maximum 100 = ऐसे server पर 5,000 तक connections, जिसका <code>max_connections</code> default से लगभग 100 है। Per-pod maximum घटाओ या PgBouncer लगाओ।</li>
<li>PgBouncer modes: session, transaction, statement। <b>Transaction</b> mode में sharing सबसे अच्छी है पर session state टूटता है (<code>SET</code>, session advisory locks, <code>LISTEN</code>); PgBouncer के साथ settings के लिए Npgsql docs देखो।</li>
<li>वही discipline जो SQL Server में (Day 6): छोटी उम्र का <code>DbContext</code>, देर से खोलो, जल्दी बंद करो। Follow-up: "Exhaustion के symptoms?" Pool से connection मिलने का इंतज़ार करते timeouts, या "too many clients" errors।</li>
</ul>`,
        hg: `<ul>
<li>Zor se bolne wala hisaab: 50 pods x Npgsql ka default maximum 100 = aise server par 5,000 tak connections, jiska <code>max_connections</code> default se lagbhag 100 hai. Per-pod maximum ghatao ya PgBouncer lagao.</li>
<li>PgBouncer modes: session, transaction, statement. <b>Transaction</b> mode mein sharing sabse achhi hai par session state tootta hai (<code>SET</code>, session advisory locks, <code>LISTEN</code>); PgBouncer ke saath settings ke liye Npgsql docs dekho.</li>
<li>Wahi discipline jo SQL Server mein (Day 6): chhoti umr ka <code>DbContext</code>, der se kholo, jaldi band karo. Follow-up: "Exhaustion ke symptoms?" Pool se connection milne ka intezaar karte timeouts, ya "too many clients" errors.</li>
</ul>`
      }
    },
    {
      id: "cosmos-partition-key",
      depth: "detailed",
      q: "How do you choose a partition key in Cosmos DB, and what is a hot partition?",
      answer: "Pick a key with many distinct values that spreads load and appears in your common queries. A hot partition is one logical key taking most traffic, so it throttles while others sit idle.",
      meaning: {
        hi: "ऐसी key चुनो जिसमें बहुत सारी अलग values हों, जो load फैलाए और तुम्हारी common queries में आए। Hot partition वह है जिसमें एक logical key पर ज़्यादातर traffic आता है, इसलिए वह throttle होती है और बाक़ी खाली बैठती हैं।",
        hg: "Aisi key chuno jisme bahut saari alag values hon, jo load phailaye aur tumhari common queries mein aaye. Hot partition woh hai jisme ek logical key par zyadatar traffic aata hai, isliye woh throttle hoti hai aur baaki khaali baithti hain."
      },
      explain: {
        en: `<ul>
<li>Throughput (RU) is spread across physical partitions, so one hot key cannot use the container's whole provisioned throughput. Cross-partition queries fan out and cost more RU.</li>
<li>Fixes: a higher-cardinality key (<code>userId</code> instead of <code>country</code>), or a synthetic key like <code>tenantId-bucket</code> (puzzle 6). Time-only keys are risky: all current writes hit today's partition.</li>
<li>Follow-up: "Can you change the key later?" Treat it as hard to change; plan a data migration. Check the current docs for limits and the newer hierarchical partition keys.</li>
</ul>`,
        hi: `<ul>
<li>Throughput (RU) physical partitions में बँटा होता है, इसलिए एक hot key container का पूरा provisioned throughput use नहीं कर सकती। Cross-partition queries फैलती हैं और ज़्यादा RU लेती हैं।</li>
<li>Fixes: ज़्यादा cardinality वाली key (<code>country</code> की जगह <code>userId</code>), या <code>tenantId-bucket</code> जैसी synthetic key (puzzle 6)। सिर्फ़ time वाली keys जोखिम भरी हैं: सारी मौजूदा writes आज के partition पर आती हैं।</li>
<li>Follow-up: "Key बाद में बदल सकते हो?" इसे बदलना मुश्किल मानो; data migration की planning करो। Limits और नई hierarchical partition keys के लिए current docs देखो।</li>
</ul>`,
        hg: `<ul>
<li>Throughput (RU) physical partitions mein bantta hai, isliye ek hot key poore container ka provisioned throughput use nahi kar sakti. Cross-partition queries phailti hain aur zyada RU leti hain.</li>
<li>Fixes: zyada cardinality wali key (<code>country</code> ki jagah <code>userId</code>), ya <code>tenantId-bucket</code> jaisi synthetic key (puzzle 6). Sirf time wali keys jokhim bhari hain: saari maujooda writes aaj ke partition par aati hain.</li>
<li>Follow-up: "Key baad mein badal sakte ho?" Ise badalna mushkil maano; data migration ki planning karo. Limits aur nayi hierarchical partition keys ke liye current docs dekho.</li>
</ul>`
      }
    },
    {
      id: "cosmos-consistency",
      depth: "detailed",
      q: "What are the Cosmos DB consistency levels, and how do you choose one?",
      answer: "Five levels, strongest to weakest: Strong, Bounded staleness, Session, Consistent prefix, Eventual. Session is the default and most widely used: a client reads its own writes with low latency.",
      meaning: {
        hi: "पाँच levels, सबसे strong से सबसे weak: Strong, Bounded staleness, Session, Consistent prefix, Eventual। Session default और सबसे ज़्यादा use होने वाला है: client अपनी writes कम latency में पढ़ लेता है।",
        hg: "Paanch levels, sabse strong se sabse weak: Strong, Bounded staleness, Session, Consistent prefix, Eventual. Session default aur sabse zyada use hone wala hai: client apni writes kam latency mein padh leta hai."
      },
      explain: {
        en: `<ul>
<li>Stronger levels give fresher reads but cost latency and availability across regions; weaker ones are cheaper and faster. Strong and Bounded staleness reads cost about twice the RU of the weaker levels, per the Cosmos DB docs.</li>
<li>Choose by user-visible harm: money or inventory may need Strong or Bounded; a "likes" counter can be Eventual; user-facing profile edits suit Session.</li>
<li>Link to Day 17: this is the CAP/PACELC trade-off in a product. Follow-up: "Can you override per request?" Yes, but only to relax it (weaker than the account default) and only for reads; to strengthen, change the account default. A preview <code>ReadConsistencyStrategy</code> option exists in newer .NET SDKs, check the docs.</li>
</ul>`,
        hi: `<ul>
<li>Strong levels ज़्यादा fresh reads देते हैं पर regions के बीच latency और availability की कीमत पर; weak levels सस्ते और तेज़ हैं। Cosmos DB docs के अनुसार Strong और Bounded staleness reads का RU cost weak levels से लगभग दोगुना है।</li>
<li>User को दिखने वाले नुक़सान से चुनो: पैसे या inventory को Strong या Bounded चाहिए; "likes" counter Eventual हो सकता है; user की profile edits के लिए Session ठीक है।</li>
<li>Day 17 से link: यह product में CAP/PACELC trade-off है। Follow-up: "Per request override कर सकते हो?" हाँ, पर सिर्फ़ उसे हल्का करने के लिए (account default से weaker) और सिर्फ़ reads के लिए; मज़बूत करना हो तो account default बदलो। नए .NET SDKs में preview <code>ReadConsistencyStrategy</code> option है, docs देखो।</li>
</ul>`,
        hg: `<ul>
<li>Strong levels zyada fresh reads dete hain par regions ke beech latency aur availability ki keemat par; weak levels sasta aur tez hain. Cosmos DB docs ke anusaar Strong aur Bounded staleness reads ka RU cost weak levels se lagbhag double hai.</li>
<li>User ko dikhne wale nuksaan se chuno: paise ya inventory ko Strong ya Bounded chahiye; "likes" counter Eventual ho sakta hai; user ki profile edits ke liye Session theek hai.</li>
<li>Day 17 se link: yeh product mein CAP/PACELC trade-off hai. Follow-up: "Per request override kar sakte ho?" Haan, par sirf use halka karne ke liye (account default se weaker) aur sirf reads ke liye; mazboot karna ho to account default badlo. Naye .NET SDKs mein preview <code>ReadConsistencyStrategy</code> option hai, docs dekho.</li>
</ul>`
      }
    },
    {
      id: "redis-and-mongo-roles",
      depth: "detailed",
      q: "Where do Redis and MongoDB fit next to a relational database?",
      answer: "Redis is an in-memory store for caches, counters, rate limits and sorted sets, usually not the system of record. MongoDB stores whole documents for aggregates read and written together.",
      meaning: {
        hi: "Redis in-memory store है cache, counters, rate limits और sorted sets के लिए, आमतौर पर system of record नहीं। MongoDB पूरे documents रखता है, उन aggregates के लिए जो साथ पढ़े और लिखे जाते हैं।",
        hg: "Redis in-memory store hai cache, counters, rate limits aur sorted sets ke liye, aamtaur par system of record nahi. MongoDB poore documents rakhta hai, un aggregates ke liye jo saath padhe aur likhe jaate hain."
      },
      explain: {
        en: `<ul>
<li>Redis: a cache-aside layer (Day 13), distributed locks and rate limits with care, leaderboards with sorted sets. Persistence options exist, but design them deliberately before storing anything you cannot rebuild.</li>
<li>MongoDB: good when the aggregate is one document (an order with its lines). It supports multi-document transactions, but heavy cross-document joins and constraints are easier in a relational database.</li>
<li>TL angle: each added store needs an owner, backups, monitoring and a failure story. Follow-up: "Cache says price 100, database says 120?" Define TTL and invalidation; the database is the truth.</li>
</ul>`,
        hi: `<ul>
<li>Redis: cache-aside layer (Day 13), सावधानी के साथ distributed locks और rate limits, sorted sets से leaderboards। Persistence options हैं, पर कुछ भी जो दोबारा न बन सके उसे रखने से पहले उन्हें सोच-समझकर design करो।</li>
<li>MongoDB: तब अच्छा जब aggregate एक document हो (lines के साथ order)। उसमें multi-document transactions हैं, पर भारी cross-document joins और constraints relational database में आसान हैं।</li>
<li>TL angle: हर जोड़े गए store को owner, backups, monitoring और failure की कहानी चाहिए। Follow-up: "Cache में price 100, database में 120?" TTL और invalidation तय करो; सच database है।</li>
</ul>`,
        hg: `<ul>
<li>Redis: cache-aside layer (Day 13), saavdhaani ke saath distributed locks aur rate limits, sorted sets se leaderboards. Persistence options hain, par kuch bhi jo dobara na ban sake use rakhne se pehle unhe soch-samajhkar design karo.</li>
<li>MongoDB: tab achha jab aggregate ek document ho (lines ke saath order). Usme multi-document transactions hain, par bhaari cross-document joins aur constraints relational database mein aasaan hain.</li>
<li>TL angle: har jode gaye store ko owner, backups, monitoring aur failure ki kahani chahiye. Follow-up: "Cache mein price 100, database mein 120?" TTL aur invalidation tay karo; sach database hai.</li>
</ul>`
      }
    },
    {
      id: "polyglot-persistence-tl",
      depth: "detailed",
      q: "What are the trade-offs of polyglot persistence, and how would you decide as a Tech Lead?",
      answer: "Each store fits one access pattern better, but you add operations, security, backups and consistency work, with no cross-store transaction. Add one only for a measured need.",
      meaning: {
        hi: "हर store एक access pattern में बेहतर बैठता है, पर operations, security, backups और consistency का काम बढ़ता है, और stores के बीच transaction नहीं होता। एक तभी जोड़ो जब measured ज़रूरत हो।",
        hg: "Har store ek access pattern mein behtar baithta hai, par operations, security, backups aur consistency ka kaam badhta hai, aur stores ke beech transaction nahi hota. Ek tabhi jodo jab measured zaroorat ho."
      },
      explain: {
        en: `<ul>
<li>Decision checklist: access pattern, consistency needed, volume and growth, team skills, on-call cost, exit plan. Write a short design note (Day 17 style) and name what you tried first, such as an index, cache or read replica.</li>
<li>Keeping stores in sync: write to the database of record and publish an event through an outbox (Day 16), then update the second store from that event. Accept eventual consistency and make consumers idempotent.</li>
<li>Postgres can already do a lot (jsonb, full-text search, queues with <code>SKIP LOCKED</code>), so ask whether the new store replaces real pain or just fashion.</li>
</ul>`,
        hi: `<ul>
<li>Decision checklist: access pattern, ज़रूरी consistency, volume और growth, team की skills, on-call cost, exit plan। छोटा design note लिखो (Day 17 style) और बताओ कि पहले क्या आज़माया, जैसे index, cache या read replica।</li>
<li>Stores को sync रखना: system-of-record database में लिखो और outbox (Day 16) से event publish करो, फिर उस event से दूसरा store update करो। Eventual consistency मानो और consumers को idempotent बनाओ।</li>
<li>Postgres पहले से बहुत कुछ कर सकता है (jsonb, full-text search, <code>SKIP LOCKED</code> वाली queues), इसलिए पूछो कि नया store असली दर्द की जगह आ रहा है या सिर्फ़ fashion की।</li>
</ul>`,
        hg: `<ul>
<li>Decision checklist: access pattern, zaroori consistency, volume aur growth, team ki skills, on-call cost, exit plan. Chhota design note likho (Day 17 style) aur batao ki pehle kya aazmaya, jaise index, cache ya read replica.</li>
<li>Stores ko sync rakhna: system-of-record database mein likho aur outbox (Day 16) se event publish karo, phir us event se doosra store update karo. Eventual consistency maano aur consumers ko idempotent banao.</li>
<li>Postgres pehle se bahut kuch kar sakta hai (jsonb, full-text search, <code>SKIP LOCKED</code> wali queues), isliye pucho ki naya store asli dard ki jagah aa raha hai ya sirf fashion ki.</li>
</ul>`
      }
    },
    {
      id: "pg-slow-and-bloated",
      depth: "detailed",
      q: "A PostgreSQL table is huge but has few live rows and queries slowed down. How do you investigate?",
      answer: "Suspect bloat: check dead tuples and last autovacuum, then look for long-open or idle-in-transaction sessions blocking cleanup. Fix the cause before reaching for VACUUM FULL.",
      meaning: {
        hi: "bloat पर शक करो: dead tuples और last autovacuum देखो, फिर cleanup रोकने वाले लंबे open या idle-in-transaction sessions ढूँढो। VACUUM FULL तक जाने से पहले कारण ठीक करो।",
        hg: "Bloat par shak karo: dead tuples aur last autovacuum dekho, phir cleanup rokne wale lambe open ya idle-in-transaction sessions dhoondho. VACUUM FULL tak jaane se pehle kaaran theek karo."
      },
      explain: {
        en: `<ul>
<li>Look at <code>pg_stat_user_tables</code> (dead tuples, last autovacuum) and <code>pg_stat_activity</code> (old transactions, idle in transaction). Then <code>EXPLAIN (ANALYZE, BUFFERS)</code> on the slow query, as with Day 18 plans.</li>
<li>Typical causes: an app that opens a transaction and waits (a missing <code>await</code>, or a call to another service inside it), a very high update rate, or autovacuum settings too relaxed for that table.</li>
<li>Remedies: fix the app, tune autovacuum for that table, and if space must shrink use a rewrite tool in a window. Mention frequent updates of the same row as a design smell.</li>
</ul>`,
        hi: `<ul>
<li><code>pg_stat_user_tables</code> (dead tuples, last autovacuum) और <code>pg_stat_activity</code> (पुराने transactions, idle in transaction) देखो। फिर slow query पर <code>EXPLAIN (ANALYZE, BUFFERS)</code>, जैसे Day 18 के plans।</li>
<li>आम कारण: ऐसी app जो transaction खोलकर इंतज़ार करती है (छूटा हुआ <code>await</code>, या उसके अंदर दूसरी service की call), बहुत ऊँचा update rate, या उस table के लिए autovacuum settings ज़्यादा ढीली।</li>
<li>Remedies: app ठीक करो, उस table के लिए autovacuum tune करो, और space घटाना ही हो तो window में rewrite tool use करो। एक ही row के बार-बार updates को design smell बताओ।</li>
</ul>`,
        hg: `<ul>
<li><code>pg_stat_user_tables</code> (dead tuples, last autovacuum) aur <code>pg_stat_activity</code> (purane transactions, idle in transaction) dekho. Phir slow query par <code>EXPLAIN (ANALYZE, BUFFERS)</code>, jaise Day 18 ke plans.</li>
<li>Aam kaaran: aisi app jo transaction kholkar intezaar karti hai (chhoota hua <code>await</code>, ya uske andar doosri service ki call), bahut ooncha update rate, ya us table ke liye autovacuum settings zyada dheeli.</li>
<li>Remedies: app theek karo, us table ke liye autovacuum tune karo, aur space ghatana hi ho to window mein rewrite tool use karo. Ek hi row ke baar-baar updates ko design smell batao.</li>
</ul>`
      }
    },
  ],
  puzzles: [
    {
      id: "fold-identifiers",
      src: `// A toy model of the PostgreSQL naming rule (not a SQL parser):
// unquoted names are folded to lower case, "quoted" names are kept exactly.
var catalog = new HashSet<string>(StringComparer.Ordinal) { "orders", "Order Lines" };

foreach (var written in new[] { "Orders", "\\"Orders\\"", "ORDERS", "\\"Order Lines\\"" })
{
    var resolved = written.StartsWith('"') ? written.Trim('"') : written.ToLowerInvariant();
    Console.WriteLine($"{written} -> {resolved}: {(catalog.Contains(resolved) ? "found" : "missing")}");
}`,
      answer: `Orders -> orders: found\n"Orders" -> Orders: missing\nORDERS -> orders: found\n"Order Lines" -> Order Lines: found`,
      explain: {
        en: `<p>The table was created as <code>orders</code> (unquoted), so <code>Orders</code> and <code>ORDERS</code> fold to <code>orders</code> and are found. <code>"Orders"</code> keeps its capital O, so it points to a table that does not exist: in real Postgres you get "relation does not exist". <code>"Order Lines"</code> was created quoted, so it is found only when quoted exactly. This is why EF Core's quoted PascalCase names surprise people in psql, and why teams pick snake_case.</p>`,
        hi: `<p>Table <code>orders</code> (बिना quote) के नाम से बनी थी, इसलिए <code>Orders</code> और <code>ORDERS</code> fold होकर <code>orders</code> बनते हैं और मिल जाते हैं। <code>"Orders"</code> का बड़ा O रहता है, इसलिए वह ऐसी table की तरफ़ जाता है जो है ही नहीं: असली Postgres में "relation does not exist" मिलता है। <code>"Order Lines"</code> quoted बनी थी, इसलिए वह तभी मिलती है जब ठीक वैसे ही quote किया जाए। इसीलिए EF Core के quoted PascalCase names psql में लोगों को चौंकाते हैं, और teams snake_case चुनती हैं।</p>`,
        hg: `<p>Table <code>orders</code> (bina quote) ke naam se bani thi, isliye <code>Orders</code> aur <code>ORDERS</code> fold hokar <code>orders</code> bante hain aur mil jaate hain. <code>"Orders"</code> ka bada O rehta hai, isliye woh aisi table ki taraf jaata hai jo hai hi nahi: asli Postgres mein "relation does not exist" milta hai. <code>"Order Lines"</code> quoted bani thi, isliye woh tabhi milti hai jab theek waise hi quote kiya jaaye. Isiliye EF Core ke quoted PascalCase names psql mein logon ko chaunkate hain, aur teams snake_case chunti hain.</p>`
      }
    },
    {
      id: "mvcc-visibility",
      src: `// A toy MVCC model: every row version has xmin (creator) and xmax (deleter, 0 = none).
// A snapshot is the set of transactions that were committed when it was taken.
var table = new List<RowVersion>
{
    new(Xmin: 10, Xmax: 30, Balance: 100),  // original row, ended by transaction 30
    new(Xmin: 30, Xmax: 0,  Balance: 150),  // the version written by transaction 30
};

var snapshotOfReader20 = new HashSet<int> { 10 };       // taken before 30 committed
var snapshotOfReader40 = new HashSet<int> { 10, 30 };   // taken after 30 committed

int? Read(HashSet<int> snapshot) => table
    .Where(v => snapshot.Contains(v.Xmin) && (v.Xmax == 0 || !snapshot.Contains(v.Xmax)))
    .Select(v => (int?)v.Balance)
    .SingleOrDefault();

Console.WriteLine($"reader20 sees {Read(snapshotOfReader20)}");
Console.WriteLine($"reader40 sees {Read(snapshotOfReader40)}");
Console.WriteLine($"versions in table: {table.Count}");

// Once reader 20 has finished, the oldest snapshot still open is reader 40's.
var dead = table.Count(v => v.Xmax != 0 && snapshotOfReader40.Contains(v.Xmax));
Console.WriteLine($"dead for VACUUM: {dead}");

record RowVersion(int Xmin, int Xmax, int Balance);`,
      answer: "reader20 sees 100\nreader40 sees 150\nversions in table: 2\ndead for VACUUM: 1",
      explain: {
        en: `<p>One UPDATE left <b>two versions in the table</b>. Reader 20 started before transaction 30 committed, so version 2 is invisible to it and version 1 (whose deleter 30 it cannot see) is still visible: <b>100</b>. Reader 40 sees 30 as committed, so version 1 is ended and version 2 is visible: <b>150</b>. When no open snapshot can see the old version any more, it is <b>dead</b> and VACUUM can reclaim it. Real Postgres snapshots also track in-progress transactions (and a long-open reader delays this cleanup), but the visibility idea is the same.</p>`,
        hi: `<p>एक UPDATE ने <b>table में दो versions</b> छोड़े। Reader 20 transaction 30 के commit होने से पहले शुरू हुआ था, इसलिए version 2 उसे दिखता नहीं और version 1 (जिसका deleter 30 वह नहीं देख सकता) अब भी दिखता है: <b>100</b>। Reader 40 को 30 committed दिखता है, इसलिए version 1 ended है और version 2 दिखता है: <b>150</b>। जब कोई open snapshot पुराने version को देख न सके, वह <b>dead</b> है और VACUUM उसे वापस ले सकता है। असली Postgres snapshots in-progress transactions भी track करते हैं (और लंबा open reader इस cleanup को रोकता है), पर visibility का idea यही है।</p>`,
        hg: `<p>Ek UPDATE ne <b>table mein do versions</b> chhode. Reader 20 transaction 30 ke commit hone se pehle shuru hua tha, isliye version 2 use dikhta nahi aur version 1 (jiska deleter 30 woh nahi dekh sakta) ab bhi dikhta hai: <b>100</b>. Reader 40 ko 30 committed dikhta hai, isliye version 1 ended hai aur version 2 dikhta hai: <b>150</b>. Jab koi open snapshot purane version ko dekh na sake, woh <b>dead</b> hai aur VACUUM use wapas le sakta hai. Asli Postgres snapshots in-progress transactions bhi track karte hain (aur lamba open reader is cleanup ko rokta hai), par visibility ka idea yahi hai.</p>`
      }
    },
    {
      id: "upsert-semantics",
      src: `// Toy model of INSERT ... ON CONFLICT on a table keyed by Id.
var table = new SortedDictionary<int, string> { [1] = "Asha", [2] = "Ravi" };
var incoming = new[] { (Id: 2, Name: "Ravi K"), (Id: 3, Name: "Meena"), (Id: 2, Name: "Ravi Kumar") };

// DO NOTHING: rows whose key already exists are skipped
var doNothing = new SortedDictionary<int, string>(table);
var inserted = 0;
foreach (var row in incoming)
    if (doNothing.TryAdd(row.Id, row.Name)) inserted++;
Console.WriteLine($"do-nothing affected={inserted} names={string.Join(",", doNothing.Values)}");

// DO UPDATE in one statement: a key may not be touched twice
try
{
    var touched = new HashSet<int>();
    var copy = new SortedDictionary<int, string>(table);
    foreach (var row in incoming)
    {
        if (!touched.Add(row.Id)) throw new InvalidOperationException($"row {row.Id} affected twice");
        copy[row.Id] = row.Name;
    }
    table = copy;
}
catch (InvalidOperationException e)
{
    Console.WriteLine($"do-update batch failed: {e.Message}");
}

// De-duplicate first (last value wins), then it works
var deduped = incoming.GroupBy(r => r.Id).Select(g => g.Last()).ToList();
foreach (var row in deduped) table[row.Id] = row.Name;
Console.WriteLine($"do-update dedup affected={deduped.Count} names={string.Join(",", table.Values)}");`,
      answer: "do-nothing affected=1 names=Asha,Ravi,Meena\ndo-update batch failed: row 2 affected twice\ndo-update dedup affected=2 names=Asha,Ravi Kumar,Meena",
      explain: {
        en: `<p><code>DO NOTHING</code> skips both rows for key 2 and inserts only key 3: <b>1</b> row affected. <code>DO UPDATE</code> with key 2 twice in one statement fails in real Postgres too ("ON CONFLICT DO UPDATE command cannot affect row a second time"), and the whole statement is rolled back, which the toy models by working on a copy. After de-duplicating (last wins) you update key 2 and insert key 3: <b>2</b> rows affected. TL point: batch upserts need a de-dup step, and decide which duplicate should win.</p>`,
        hi: `<p><code>DO NOTHING</code> key 2 की दोनों rows skip करता है और सिर्फ़ key 3 insert करता है: <b>1</b> row affected। एक statement में key 2 दो बार वाला <code>DO UPDATE</code> असली Postgres में भी fail होता है ("ON CONFLICT DO UPDATE command cannot affect row a second time"), और पूरा statement rollback हो जाता है, जिसे toy model copy पर काम करके दिखाता है। De-duplicate करने के बाद (आख़िरी जीतती है) key 2 update होती है और key 3 insert: <b>2</b> rows affected। TL point: batch upserts को de-dup step चाहिए, और तय करो कि कौन सा duplicate जीतेगा।</p>`,
        hg: `<p><code>DO NOTHING</code> key 2 ki dono rows skip karta hai aur sirf key 3 insert karta hai: <b>1</b> row affected. Ek statement mein key 2 do baar wala <code>DO UPDATE</code> asli Postgres mein bhi fail hota hai ("ON CONFLICT DO UPDATE command cannot affect row a second time"), aur poora statement rollback ho jaata hai, jise toy model copy par kaam karke dikhata hai. De-duplicate karne ke baad (aakhri jeetti hai) key 2 update hoti hai aur key 3 insert: <b>2</b> rows affected. TL point: batch upserts ko de-dup step chahiye, aur tay karo ki kaun sa duplicate jeetega.</p>`
      }
    },
    {
      id: "jsonb-contains",
      src: `using System.Text.Json;

// Mirrors the idea of jsonb @> (containment): every key and array element in the pattern
// must be present in the document. Not the full Postgres rule set (no top-level scalar cases).
static bool Contains(JsonElement doc, JsonElement pattern)
{
    switch (pattern.ValueKind)
    {
        case JsonValueKind.Object:
            return doc.ValueKind == JsonValueKind.Object && pattern.EnumerateObject()
                .All(p => doc.TryGetProperty(p.Name, out var d) && Contains(d, p.Value));
        case JsonValueKind.Array:
            return doc.ValueKind == JsonValueKind.Array && pattern.EnumerateArray()
                .All(pe => doc.EnumerateArray().Any(de => Contains(de, pe)));
        default:
            return doc.ValueKind == pattern.ValueKind && doc.GetRawText() == pattern.GetRawText();
    }
}

using var doc = JsonDocument.Parse("""{"name":"Asha","tags":["vip","new","pune"],"address":{"city":"Pune","pin":"411001"}}""");
var patterns = new[]
{
    """{"tags":["vip"]}""",
    """{"address":{"city":"Pune"}}""",
    """{"address":{"city":"Delhi"}}""",
    """{"tags":["vip","gold"]}""",
    """{"name":"asha"}""",
};
for (var i = 0; i < patterns.Length; i++)
{
    using var p = JsonDocument.Parse(patterns[i]);
    Console.WriteLine($"{i + 1} {Contains(doc.RootElement, p.RootElement)}");
}`,
      answer: "1 True\n2 True\n3 False\n4 False\n5 False",
      explain: {
        en: `<p>Pattern 1: the document's <code>tags</code> array has "vip", so it is contained. Pattern 2: nested <code>address.city</code> matches. Pattern 3: city differs. Pattern 4: "gold" is missing, and <b>every</b> pattern element must be present. Pattern 5: "asha" is not "Asha"; comparisons are case-sensitive, like all text in Postgres by default. In Postgres, array containment ignores order and duplicates, and a GIN index can answer <code>@&gt;</code> without scanning every row. The C# here only mirrors the logic; it does not use an index.</p>`,
        hi: `<p>Pattern 1: document के <code>tags</code> array में "vip" है, इसलिए contained है। Pattern 2: nested <code>address.city</code> match होता है। Pattern 3: city अलग है। Pattern 4: "gold" नहीं है, और pattern का <b>हर</b> element मौजूद होना चाहिए। Pattern 5: "asha", "Asha" नहीं है; comparisons case-sensitive हैं, जैसे Postgres में सारा text default से। Postgres में array containment order और duplicates ignore करता है, और GIN index हर row scan किए बिना <code>@&gt;</code> का जवाब दे सकता है। यहाँ का C# सिर्फ़ logic दोहराता है; वह index use नहीं करता।</p>`,
        hg: `<p>Pattern 1: document ke <code>tags</code> array mein "vip" hai, isliye contained hai. Pattern 2: nested <code>address.city</code> match hota hai. Pattern 3: city alag hai. Pattern 4: "gold" nahi hai, aur pattern ka <b>har</b> element maujood hona chahiye. Pattern 5: "asha", "Asha" nahi hai; comparisons case-sensitive hain, jaise Postgres mein saara text default se. Postgres mein array containment order aur duplicates ignore karta hai, aur GIN index har row scan kiye bina <code>@&gt;</code> ka jawab de sakta hai. Yahan ka C# sirf logic dohraata hai; woh index use nahi karta.</p>`
      }
    },
    {
      id: "collation-compare",
      lang: "sql",
      src: `SELECT CASE WHEN 'Pankaj' COLLATE Latin1_General_CI_AS = 'PANKAJ' THEN 'equal' ELSE 'different' END AS ci,
       CASE WHEN 'Pankaj' COLLATE Latin1_General_CS_AS = 'PANKAJ' THEN 'equal' ELSE 'different' END AS cs,
       CASE WHEN LOWER('Pankaj' COLLATE Latin1_General_CS_AS) = LOWER('PANKAJ') THEN 'equal' ELSE 'different' END AS cs_lower;`,
      answer: "equal different equal",
      explain: {
        en: `<p>A case-insensitive collation (<code>CI</code>) treats 'Pankaj' and 'PANKAJ' as equal, which is how SQL Server databases usually behave. A case-sensitive one (<code>CS</code>) says different: that is how Postgres compares text by default. Lower-casing both sides makes them equal again, which is exactly what a <code>lower(col)</code> expression index or <code>ILIKE</code> does in Postgres. Porting lesson: a query that "just worked" on SQL Server can silently return fewer rows on Postgres. (This puzzle runs on SQL Server; the Postgres side is stated, not executed.)</p>`,
        hi: `<p>Case-insensitive collation (<code>CI</code>) 'Pankaj' और 'PANKAJ' को बराबर मानती है, जैसा SQL Server databases आमतौर पर करते हैं। Case-sensitive (<code>CS</code>) कहती है different: Postgres text को default से ऐसे ही compare करता है। दोनों तरफ़ lower case करने पर वे फिर बराबर हो जाते हैं, और Postgres में <code>lower(col)</code> expression index या <code>ILIKE</code> ठीक यही करता है। Porting का सबक: जो query SQL Server पर "बस चल जाती थी" वह Postgres पर चुपचाप कम rows दे सकती है। (यह puzzle SQL Server पर चलता है; Postgres वाली बात बताई गई है, चलाई नहीं गई।)</p>`,
        hg: `<p>Case-insensitive collation (<code>CI</code>) 'Pankaj' aur 'PANKAJ' ko barabar maanti hai, jaisa SQL Server databases aamtaur par karte hain. Case-sensitive (<code>CS</code>) kehti hai different: Postgres text ko default se aise hi compare karta hai. Dono taraf lower case karne par woh phir barabar ho jaate hain, aur Postgres mein <code>lower(col)</code> expression index ya <code>ILIKE</code> theek yahi karta hai. Porting ka sabak: jo query SQL Server par "bas chal jaati thi" woh Postgres par chupchaap kam rows de sakti hai. (Yeh puzzle SQL Server par chalta hai; Postgres wali baat batayi gayi hai, chalayi nahi gayi.)</p>`
      }
    },
    {
      id: "hot-partition",
      src: `using System.Text;

// A toy partitioner (sum of the key's bytes modulo 4). Real Cosmos DB hashes the partition key
// itself; this only shows how a skewed key concentrates load.
var tenants = new (string Id, int Orders)[] { ("bigco", 480), ("acme", 60), ("zenith", 40), ("orbit", 20) };
const int partitions = 4;

int Partition(string key)
{
    var sum = 0;
    foreach (var b in Encoding.UTF8.GetBytes(key)) sum += b;
    return sum % partitions;
}

void Report(string name, Func<string, int, string> keyOf)
{
    var load = new int[partitions];
    foreach (var (id, orders) in tenants)
        for (var n = 1; n <= orders; n++)
            load[Partition(keyOf(id, n))]++;
    Console.WriteLine($"{name}: busiest partition {load.Max()} of {load.Sum()}");
}

Report("tenantId", (tenant, orderNo) => tenant);
Report("tenantId-bucket", (tenant, orderNo) => $"{tenant}-{orderNo % 8}");`,
      answer: "tenantId: busiest partition 500 of 600\ntenantId-bucket: busiest partition 150 of 600",
      explain: {
        en: `<p>With <code>tenantId</code> as the key, all 480 orders of the big tenant land in one partition, which also shares its slot with the small tenant "orbit": 500 of 600 writes hit one partition while two sit empty. With a synthetic key <code>tenantId-bucket</code> the same tenant is spread over eight keys and, in this toy, the load is perfectly even at 150 each. Real hashing is not perfectly even, and the toy hash is only for the demo. The cost of the fix: reading all of one tenant's orders now touches several partitions.</p>`,
        hi: `<p><code>tenantId</code> को key रखने पर बड़े tenant के सारे 480 orders एक partition में जाते हैं, जो छोटे tenant "orbit" के साथ भी वही slot बाँटता है: 600 में से 500 writes एक partition पर आती हैं और दो खाली बैठे हैं। Synthetic key <code>tenantId-bucket</code> से वही tenant आठ keys में फैल जाता है और इस toy में load बिल्कुल बराबर, 150-150 रहता है। असली hashing बिल्कुल बराबर नहीं होती, और toy hash सिर्फ़ demo के लिए है। Fix की कीमत: एक tenant के सारे orders पढ़ने पर अब कई partitions छूने पड़ते हैं।</p>`,
        hg: `<p><code>tenantId</code> ko key rakhne par bade tenant ke saare 480 orders ek partition mein jaate hain, jo chhote tenant "orbit" ke saath bhi wahi slot baantta hai: 600 mein se 500 writes ek partition par aati hain aur do khaali baithe hain. Synthetic key <code>tenantId-bucket</code> se wahi tenant aath keys mein phail jaata hai aur is toy mein load bilkul barabar, 150-150 rehta hai. Asli hashing bilkul barabar nahi hoti, aur toy hash sirf demo ke liye hai. Fix ki keemat: ek tenant ke saare orders padhne par ab kai partitions chhoone padte hain.</p>`
      }
    }
  ],
  revision: {
    en: [
      "Postgres MVCC keeps old row versions in the table; VACUUM reclaims them later.",
      "A long-open or idle-in-transaction session holds back VACUUM and causes bloat.",
      "READ COMMITTED is the Postgres default; plain reads and writes do not block each other.",
      "Unquoted names fold to lower case; text comparison is case-sensitive by default.",
      "ON CONFLICT DO UPDATE cannot touch the same key twice in one statement.",
      "MERGE arrived in Postgres 15; its RETURNING clause came in 17.",
      "jsonb is indexable binary JSON, and a GIN index serves the @&gt; containment operator.",
      "A partial index covers only the rows that match its WHERE condition.",
      "Npgsql writes timestamptz only from UTC values (Npgsql 6 and later).",
      "Each Postgres connection is a process: size the pools or put PgBouncer in front.",
      "Cosmos DB: pick a high-cardinality partition key; a skewed key makes a hot partition.",
      "Add a second data store only for a measured need, and say what you give up."
    ],
    meaning: {
      hi: [
        "Postgres MVCC पुराने row versions table में रखता है; VACUUM उन्हें बाद में वापस लेता है।",
        "लंबा open या idle-in-transaction session VACUUM को रोकता है और bloat कराता है।",
        "Postgres का default READ COMMITTED है; सादी reads और writes एक-दूसरे को block नहीं करतीं।",
        "बिना quote वाले नाम lower case हो जाते हैं; text comparison default से case-sensitive है।",
        "ON CONFLICT DO UPDATE एक statement में एक ही key को दो बार नहीं छू सकता।",
        "MERGE Postgres 15 में आया; उसकी RETURNING clause 17 में आई।",
        "jsonb index होने लायक binary JSON है, और GIN index @&gt; containment operator को serve करता है।",
        "Partial index सिर्फ़ उन्हीं rows को cover करता है जो उसकी WHERE condition से match करती हैं।",
        "Npgsql में timestamptz के लिए सिर्फ़ UTC values चलती हैं (Npgsql 6 और बाद)।",
        "हर Postgres connection एक process है: pools का size सोचो या PgBouncer आगे लगाओ।",
        "Cosmos DB: ज़्यादा cardinality वाली partition key चुनो; skewed key से hot partition बनता है।",
        "दूसरा data store सिर्फ़ measured ज़रूरत पर जोड़ो, और बताओ कि क्या छोड़ रहे हो।"
      ],
      hg: [
        "Postgres MVCC purane row versions table mein rakhta hai; VACUUM unhe baad mein wapas leta hai.",
        "Lamba open ya idle-in-transaction session VACUUM ko rokta hai aur bloat karata hai.",
        "Postgres ka default READ COMMITTED hai; saadi reads aur writes ek-doosre ko block nahi karti.",
        "Bina quote wale naam lower case ho jaate hain; text comparison default se case-sensitive hai.",
        "ON CONFLICT DO UPDATE ek statement mein ek hi key ko do baar nahi chhu sakta.",
        "MERGE Postgres 15 mein aaya; uski RETURNING clause 17 mein aayi.",
        "jsonb index hone layak binary JSON hai, aur GIN index @&gt; containment operator ko serve karta hai.",
        "Partial index sirf unhi rows ko cover karta hai jo uski WHERE condition se match karti hain.",
        "Npgsql mein timestamptz ke liye sirf UTC values chalti hain (Npgsql 6 aur baad).",
        "Har Postgres connection ek process hai: pools ka size socho ya PgBouncer aage lagao.",
        "Cosmos DB: zyada cardinality wali partition key chuno; skewed key se hot partition banta hai.",
        "Doosra data store sirf measured zaroorat par jodo, aur batao ki kya chhod rahe ho."
      ]
    }
  }
};
