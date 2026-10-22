// Day 18 — SQL Server for Tech Lead rounds. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 18,
  title: {
    en: "SQL Server — indexes, execution plans, joins and window functions, isolation levels, tuning",
    hi: "SQL Server — indexes, execution plans, joins और window functions, isolation levels, tuning",
    hg: "SQL Server — indexes, execution plans, joins aur window functions, isolation levels, tuning"
  },
  summary: {
    en: `<p>SQL Server is your strongest skill (6/10), so today is about <b>Tech Lead depth</b>: not "what is an index" but "why did the optimizer ignore it, and how do I prove it in production".</p>
<ul>
<li><b>Indexes:</b> clustered (the table itself, one per table) vs non-clustered (a second sorted copy, with a <b>key lookup</b> back to the table); covering with <code>INCLUDE</code>, filtered, columnstore (brief), fill factor and fragmentation (brief).</li>
<li><b>SARGability:</b> keep the column bare: no function on it, match its data type (varchar vs nvarchar, Day 6), prefix <code>LIKE</code> only.</li>
<li><b>Execution plans:</b> seek vs scan, key lookup, estimated vs actual rows, statistics; <b>parameter sniffing</b> and its fixes (<code>OPTION (RECOMPILE)</code>, <code>OPTIMIZE FOR</code>, Query Store; SQL Server 2022 adds PSP optimization).</li>
<li><b>Query shapes:</b> joins, <code>CROSS/OUTER APPLY</code>, <code>NOT EXISTS</code> vs the <code>NOT IN</code> NULL trap, CTEs and recursive CTEs, window functions (<code>ROWS</code> vs <code>RANGE</code>).</li>
<li><b>Programmability:</b> stored procedures vs functions, scalar UDF cost and 2019 inlining, inline vs multi-statement TVF, temp table vs table variable (2019 deferred compilation).</li>
<li><b>Concurrency:</b> READ COMMITTED default, RCSI vs SNAPSHOT, blocking vs deadlocks, how to diagnose (system_health) and avoid them (Day 6 has the EF side).</li>
<li><b>Tuning checklist:</b> the calm, ordered way to investigate a slow query in production.</li>
</ul>
<p>Plan (about 1 hour 20 minutes): Short mode, then Q&amp;A aloud, then the SQL sections (run them in SSMS or Azure Data Studio if you can), then the seven puzzles.</p>`,
    hi: `<p>SQL Server तुम्हारी सबसे strong skill है (6/10), इसलिए आज <b>Tech Lead depth</b> है: "index क्या है" नहीं, बल्कि "optimizer ने उसे ignore क्यों किया, और production में यह कैसे prove करूँ"।</p>
<ul>
<li><b>Indexes:</b> clustered (table खुद, हर table में एक) बनाम non-clustered (दूसरी sorted copy, जिसमें table तक वापस <b>key lookup</b> होता है); <code>INCLUDE</code> वाला covering, filtered, columnstore (brief), fill factor और fragmentation (brief)।</li>
<li><b>SARGability:</b> column को bare रखो: उस पर function नहीं, data type match करो (varchar बनाम nvarchar, Day 6), <code>LIKE</code> सिर्फ़ prefix वाला।</li>
<li><b>Execution plans:</b> seek बनाम scan, key lookup, estimated बनाम actual rows, statistics; <b>parameter sniffing</b> और उसके fixes (<code>OPTION (RECOMPILE)</code>, <code>OPTIMIZE FOR</code>, Query Store; SQL Server 2022 में PSP optimization)।</li>
<li><b>Query shapes:</b> joins, <code>CROSS/OUTER APPLY</code>, <code>NOT EXISTS</code> बनाम <code>NOT IN</code> का NULL trap, CTEs और recursive CTEs, window functions (<code>ROWS</code> बनाम <code>RANGE</code>)।</li>
<li><b>Programmability:</b> stored procedures बनाम functions, scalar UDF का cost और 2019 inlining, inline बनाम multi-statement TVF, temp table बनाम table variable (2019 deferred compilation)।</li>
<li><b>Concurrency:</b> READ COMMITTED default, RCSI बनाम SNAPSHOT, blocking बनाम deadlocks, diagnose कैसे करें (system_health) और बचें कैसे (EF वाला हिस्सा Day 6 में है)।</li>
<li><b>Tuning checklist:</b> production में slow query investigate करने का शांत, क्रम वाला तरीका।</li>
</ul>
<p>Plan (लगभग 1 घंटा 20 मिनट): पहले Short mode, फिर Q&amp;A ज़ोर से, फिर SQL sections (हो सके तो SSMS या Azure Data Studio में चलाओ), फिर सात puzzles।</p>`,
    hg: `<p>SQL Server tumhari sabse strong skill hai (6/10), isliye aaj <b>Tech Lead depth</b> hai: "index kya hai" nahi, balki "optimizer ne use ignore kyon kiya, aur production mein yeh kaise prove karun".</p>
<ul>
<li><b>Indexes:</b> clustered (table khud, har table mein ek) vs non-clustered (doosri sorted copy, jisme table tak wapas <b>key lookup</b> hota hai); <code>INCLUDE</code> wala covering, filtered, columnstore (brief), fill factor aur fragmentation (brief).</li>
<li><b>SARGability:</b> column ko bare rakho: us par function nahi, data type match karo (varchar vs nvarchar, Day 6), <code>LIKE</code> sirf prefix wala.</li>
<li><b>Execution plans:</b> seek vs scan, key lookup, estimated vs actual rows, statistics; <b>parameter sniffing</b> aur uske fixes (<code>OPTION (RECOMPILE)</code>, <code>OPTIMIZE FOR</code>, Query Store; SQL Server 2022 mein PSP optimization).</li>
<li><b>Query shapes:</b> joins, <code>CROSS/OUTER APPLY</code>, <code>NOT EXISTS</code> vs <code>NOT IN</code> ka NULL trap, CTEs aur recursive CTEs, window functions (<code>ROWS</code> vs <code>RANGE</code>).</li>
<li><b>Programmability:</b> stored procedures vs functions, scalar UDF ka cost aur 2019 inlining, inline vs multi-statement TVF, temp table vs table variable (2019 deferred compilation).</li>
<li><b>Concurrency:</b> READ COMMITTED default, RCSI vs SNAPSHOT, blocking vs deadlocks, diagnose kaise karein (system_health) aur bachein kaise (EF wala hissa Day 6 mein hai).</li>
<li><b>Tuning checklist:</b> production mein slow query investigate karne ka shaant, kram wala tareeka.</li>
</ul>
<p>Plan (lagbhag 1 ghanta 20 minute): pehle Short mode, phir Q&amp;A zor se, phir SQL sections (ho sake to SSMS ya Azure Data Studio mein chalao), phir saat puzzles.</p>`
  },
  sections: [
    {
      id: "indexes-overview",
      depth: "short",
      title: {
        en: "Indexes — clustered, non-clustered, covering, filtered",
        hi: "Indexes — clustered, non-clustered, covering और filtered",
        hg: "Indexes — clustered, non-clustered, covering, filtered"
      },
      body: {
        en: `<p><b>Picture — a phone directory and a textbook:</b> the directory itself is sorted by name: that is a <b>clustered index</b>, the data <i>is</i> the index, so there can be only one order. The index at the back of a textbook is a <b>non-clustered index</b>: a separate sorted list that says "topic X is on page 212". If you then flip to page 212 to read more, that is a <b>key lookup</b>. If the back-of-book entry already told you everything you needed, it was <b>covering</b>.</p>
<ul>
<li><b>Clustered:</b> one per table; the leaf level holds the full rows. A table without one is a <b>heap</b> (unordered, rows found through a row id). Choose a key that is <b>narrow, unique, stable and ever-increasing</b> (an <code>int IDENTITY</code> is the usual choice), because every non-clustered index carries the clustered key.</li>
<li><b>Non-clustered:</b> a separate B-tree with the index key columns plus a pointer to the row (the clustered key, or the row id on a heap). Many per table, but each one is <b>paid for on every INSERT/UPDATE/DELETE</b> and in storage.</li>
<li><b>Key lookup:</b> the index found the rows but the query needs more columns, so SQL Server jumps into the clustered index once per row. Cheap for 10 rows, painful for 100,000; the optimizer then prefers a scan.</li>
<li><b>Covering index:</b> put the filter and join columns in the <b>key</b> (equality columns first, then the range or sort column) and the other selected columns in <code>INCLUDE</code>. Included columns live only at the leaf and are not sorted.</li>
<li><b>Filtered index:</b> <code>WHERE Status = 0</code> on the index itself: small and cheap for "open items" style queries. Queries must use a matching literal predicate; a parameter such as <code>Status = @s</code> will usually not match it.</li>
<li><b>Columnstore (brief):</b> column-wise compressed storage for analytics (big scans, aggregates). Not for single-row lookups. Keep it for reporting tables.</li>
<li><b>Fill factor and fragmentation (brief):</b> fill factor leaves free space per page (for example 90) to slow down page splits on random inserts. Fragmentation matters less than good statistics today; many teams reorganize or rebuild only the few large, heavily scanned indexes (a common rule of thumb: reorganize at about 5-30%, rebuild above 30%).</li>
</ul>
<p>Day 6 showed EF projections that let SQL use a covering index; today is the SQL side. Day 17 used indexes and read replicas as the first scaling steps.</p>
<p><b>When to use:</b> index the columns of frequent <code>WHERE</code>, <code>JOIN</code> and <code>ORDER BY</code>, and foreign keys; use <code>INCLUDE</code> for a hot query's extra columns. <b>When not:</b> do not index every column "just in case", do not include wide columns such as <code>nvarchar(max)</code>, and drop indexes the usage DMVs show as unused after a safe observation period.</p>`,
        hi: `<p><b>Picture — phone directory और textbook:</b> directory खुद name से sorted है: यह <b>clustered index</b> है, data ही index है, इसलिए order एक ही हो सकता है। Textbook के पीछे का index <b>non-clustered index</b> है: एक अलग sorted list जो कहती है "topic X page 212 पर है"। फिर page 212 खोलकर और पढ़ना <b>key lookup</b> है। अगर पीछे की entry ने ही सब बता दिया जो चाहिए था, तो वो <b>covering</b> थी।</p>
<ul>
<li><b>Clustered:</b> हर table में एक; leaf level पर पूरी rows होती हैं। जिस table में नहीं है वह <b>heap</b> है (बिना order, rows row id से मिलती हैं)। ऐसी key चुनो जो <b>narrow, unique, stable और बढ़ती जाने वाली</b> हो (<code>int IDENTITY</code> आम choice है), क्योंकि हर non-clustered index clustered key साथ रखता है।</li>
<li><b>Non-clustered:</b> अलग B-tree, जिसमें index key columns और row का pointer होता है (clustered key, या heap पर row id)। एक table पर कई हो सकते हैं, पर हर एक की <b>कीमत हर INSERT/UPDATE/DELETE पर</b> और storage में देनी पड़ती है।</li>
<li><b>Key lookup:</b> index ने rows ढूँढ लीं पर query को और columns चाहिए, तो SQL Server हर row के लिए clustered index में जाता है। 10 rows के लिए सस्ता, 100,000 के लिए दर्दनाक; तब optimizer scan पसंद करता है।</li>
<li><b>Covering index:</b> filter और join columns <b>key</b> में रखो (पहले equality columns, फिर range या sort column) और बाकी selected columns <code>INCLUDE</code> में। Included columns सिर्फ़ leaf पर रहते हैं और sorted नहीं होते।</li>
<li><b>Filtered index:</b> index पर ही <code>WHERE Status = 0</code>: "open items" जैसी queries के लिए छोटा और सस्ता। Query में matching literal predicate चाहिए; <code>Status = @s</code> जैसा parameter आम तौर पर match नहीं करता।</li>
<li><b>Columnstore (brief):</b> analytics के लिए column-wise compressed storage (बड़े scans, aggregates)। Single-row lookups के लिए नहीं। Reporting tables के लिए रखो।</li>
<li><b>Fill factor और fragmentation (brief):</b> fill factor हर page में खाली जगह छोड़ता है (जैसे 90) ताकि random inserts पर page splits धीमे हों। आज fragmentation से ज़्यादा अहम अच्छी statistics है; कई teams सिर्फ़ कुछ बड़े, ज़्यादा scan होने वाले indexes को reorganize या rebuild करती हैं (आम rule of thumb: लगभग 5-30% पर reorganize, 30% से ऊपर rebuild)।</li>
</ul>
<p>Day 6 में EF projections दिखे थे जो SQL को covering index use करने देते हैं; आज SQL वाला हिस्सा है। Day 17 में indexes और read replicas पहले scaling steps थे।</p>
<p><b>कब use करें:</b> frequent <code>WHERE</code>, <code>JOIN</code> और <code>ORDER BY</code> के columns और foreign keys पर index; hot query के extra columns के लिए <code>INCLUDE</code>। <b>कब नहीं:</b> हर column पर "क्या पता" वाला index नहीं, <code>nvarchar(max)</code> जैसे wide columns include नहीं, और जो indexes usage DMVs में unused दिखें उन्हें safe observation period के बाद drop करो।</p>`,
        hg: `<p><b>Picture — phone directory aur textbook:</b> directory khud name se sorted hai: yeh <b>clustered index</b> hai, data hi index hai, isliye order ek hi ho sakta hai. Textbook ke peeche ka index <b>non-clustered index</b> hai: ek alag sorted list jo kehti hai "topic X page 212 par hai". Phir page 212 kholkar aur padhna <b>key lookup</b> hai. Agar peeche ki entry ne hi sab bata diya jo chahiye tha, to woh <b>covering</b> thi.</p>
<ul>
<li><b>Clustered:</b> har table mein ek; leaf level par poori rows hoti hain. Jis table mein nahi hai woh <b>heap</b> hai (bina order, rows row id se milti hain). Aisi key chuno jo <b>narrow, unique, stable aur badhti jaane wali</b> ho (<code>int IDENTITY</code> aam choice hai), kyunki har non-clustered index clustered key saath rakhta hai.</li>
<li><b>Non-clustered:</b> alag B-tree, jisme index key columns aur row ka pointer hota hai (clustered key, ya heap par row id). Ek table par kai ho sakte hain, par har ek ki <b>keemat har INSERT/UPDATE/DELETE par</b> aur storage mein deni padti hai.</li>
<li><b>Key lookup:</b> index ne rows dhoondh li par query ko aur columns chahiye, to SQL Server har row ke liye clustered index mein jaata hai. 10 rows ke liye sasta, 100,000 ke liye dardnaak; tab optimizer scan pasand karta hai.</li>
<li><b>Covering index:</b> filter aur join columns <b>key</b> mein rakho (pehle equality columns, phir range ya sort column) aur baaki selected columns <code>INCLUDE</code> mein. Included columns sirf leaf par rehte hain aur sorted nahi hote.</li>
<li><b>Filtered index:</b> index par hi <code>WHERE Status = 0</code>: "open items" jaisi queries ke liye chhota aur sasta. Query mein matching literal predicate chahiye; <code>Status = @s</code> jaisa parameter aam taur par match nahi karta.</li>
<li><b>Columnstore (brief):</b> analytics ke liye column-wise compressed storage (bade scans, aggregates). Single-row lookups ke liye nahi. Reporting tables ke liye rakho.</li>
<li><b>Fill factor aur fragmentation (brief):</b> fill factor har page mein khaali jagah chhodta hai (jaise 90) taaki random inserts par page splits dheeme hon. Aaj fragmentation se zyaada ahem achhi statistics hai; kai teams sirf kuch bade, zyaada scan hone wale indexes ko reorganize ya rebuild karti hain (aam rule of thumb: lagbhag 5-30% par reorganize, 30% se upar rebuild).</li>
</ul>
<p>Day 6 mein EF projections dikhe the jo SQL ko covering index use karne dete hain; aaj SQL wala hissa hai. Day 17 mein indexes aur read replicas pehle scaling steps the.</p>
<p><b>Kab use karein:</b> frequent <code>WHERE</code>, <code>JOIN</code> aur <code>ORDER BY</code> ke columns aur foreign keys par index; hot query ke extra columns ke liye <code>INCLUDE</code>. <b>Kab nahi:</b> har column par "kya pata" wala index nahi, <code>nvarchar(max)</code> jaise wide columns include nahi, aur jo indexes usage DMVs mein unused dikhein unhe safe observation period ke baad drop karo.</p>`
      }
    },
    {
      id: "sargable-plans-overview",
      depth: "short",
      title: {
        en: "SARGability and execution plans — why the index was ignored",
        hi: "SARGability और execution plans — index ignore क्यों हुआ",
        hg: "SARGability aur execution plans — index ignore kyon hua"
      },
      body: {
        en: `<p><b>Picture — finding a name in a sorted guest list:</b> "everyone whose name starts with Ra" is easy: jump to R and read. "Everyone whose name, <i>spelled backwards</i>, starts with 'an'" forces you to read the whole list. A <b>SARGable</b> predicate (Search ARGument able) lets SQL Server <b>seek</b> into the sorted index; a non-SARGable one forces a <b>scan</b>.</p>
<ul>
<li><b>Keep the column bare:</b> <code>YEAR(CreatedOn) = 2025</code> or <code>CONVERT(date, CreatedOn) = @d</code> hide the column behind a function. Rewrite as a half-open range: <code>CreatedOn &gt;= '2025-01-01' AND CreatedOn &lt; '2026-01-01'</code>. Same for <code>ISNULL(col, 0) = 0</code> (use <code>col = 0 OR col IS NULL</code>) and for arithmetic on the column side (<code>Price * 2 &gt; 100</code> becomes <code>Price &gt; 50</code>).</li>
<li><b>Match the data type:</b> data type precedence says <code>nvarchar</code> beats <code>varchar</code>, so a <code>varchar</code> column compared to an <code>nvarchar</code> parameter gets <code>CONVERT_IMPLICIT</code> on the <b>column</b> side, and the seek can turn into a scan (especially with SQL collations). In EF this is the Unicode mapping trap from Day 6. The plan shows a warning triangle; read it.</li>
<li><b>LIKE:</b> <code>LIKE 'INV-00%'</code> can seek; <code>LIKE '%00'</code> cannot (a leading wildcard needs full-text search or a different design).</li>
<li><b>Read a plan:</b> right to left, top to bottom. Look at <b>Index Seek vs Index/Table Scan</b>, <b>Key Lookup</b> (and its row count), thick arrows, <b>warnings</b> (implicit conversion, spills to tempdb) and the biggest cost percentage. Use <b>actual</b> plans for real numbers.</li>
<li><b>Estimated vs actual rows:</b> the optimizer chooses a plan from <b>statistics</b> (a histogram per index or column). A big gap between estimated and actual rows is the clue: outdated or sampled statistics, skewed data, or a parameter sniffed from an unusual value. The cardinality estimator model changes with the compatibility level.</li>
<li><b>Parameter sniffing:</b> the first execution compiles a plan for its parameter value and the plan is cached for later values. With skewed data, a plan good for 3 rows is terrible for 5,000 rows (and the reverse). Not a bug, a trade-off: reuse saves compile CPU.</li>
<li><b>Fixes, cheapest first:</b> update statistics; fix SARGability or types; a better index; <code>OPTION (RECOMPILE)</code> for rare, heavy queries; <code>OPTIMIZE FOR (@p UNKNOWN)</code> (average plan) or a specific value; split the procedure for the skewed case; <b>Query Store</b> (SQL Server 2016+) to find the regression and force the last good plan. SQL Server 2022 adds <b>PSP optimization</b> (database compatibility level 160): one parameterized query can keep several plans for different value ranges. Avoid index hints and plan guides as the first answer.</li>
</ul>
<p><b>When to use:</b> check the actual plan whenever a query is slow or its timing changes without a code change. <b>When not:</b> do not tune from the estimated cost percentage alone, and do not rewrite working queries for theoretical elegance.</p>`,
        hi: `<p><b>Picture — sorted guest list में नाम ढूँढना:</b> "जिनका नाम Ra से शुरू होता है" आसान है: R पर कूदो और पढ़ो। "जिनका नाम <i>उल्टा लिखने पर</i> 'an' से शुरू होता है" में पूरी list पढ़नी पड़ती है। <b>SARGable</b> predicate (Search ARGument able) SQL Server को sorted index में <b>seek</b> करने देता है; non-SARGable predicate <b>scan</b> करवाता है।</p>
<ul>
<li><b>Column को bare रखो:</b> <code>YEAR(CreatedOn) = 2025</code> या <code>CONVERT(date, CreatedOn) = @d</code> column को function के पीछे छुपा देते हैं। Half-open range में लिखो: <code>CreatedOn &gt;= '2025-01-01' AND CreatedOn &lt; '2026-01-01'</code>। <code>ISNULL(col, 0) = 0</code> के लिए भी यही (<code>col = 0 OR col IS NULL</code> लिखो), और column की तरफ़ arithmetic के लिए भी (<code>Price * 2 &gt; 100</code> की जगह <code>Price &gt; 50</code>)।</li>
<li><b>Data type match करो:</b> data type precedence में <code>nvarchar</code>, <code>varchar</code> से ऊपर है, इसलिए <code>varchar</code> column को <code>nvarchar</code> parameter से compare करो तो <b>column</b> की तरफ़ <code>CONVERT_IMPLICIT</code> लगता है और seek, scan बन सकता है (खासकर SQL collations में)। EF में यह Day 6 वाला Unicode mapping trap है। Plan में warning triangle दिखता है; उसे पढ़ो।</li>
<li><b>LIKE:</b> <code>LIKE 'INV-00%'</code> seek कर सकता है; <code>LIKE '%00'</code> नहीं कर सकता (leading wildcard के लिए full-text search या दूसरा design चाहिए)।</li>
<li><b>Plan कैसे पढ़ें:</b> दाएँ से बाएँ, ऊपर से नीचे। देखो <b>Index Seek बनाम Index/Table Scan</b>, <b>Key Lookup</b> (और उसकी row count), मोटे arrows, <b>warnings</b> (implicit conversion, tempdb में spill) और सबसे बड़ा cost percentage। असली numbers के लिए <b>actual</b> plan use करो।</li>
<li><b>Estimated बनाम actual rows:</b> optimizer plan <b>statistics</b> (हर index या column का histogram) से चुनता है। Estimated और actual rows में बड़ा फ़र्क़ क्लू है: पुरानी या sampled statistics, skewed data, या किसी अजीब value से sniff हुआ parameter। Cardinality estimator का model compatibility level के साथ बदलता है।</li>
<li><b>Parameter sniffing:</b> पहली execution अपने parameter value के लिए plan compile करती है और वह plan आगे की values के लिए cache रहता है। Skewed data में, 3 rows के लिए अच्छा plan 5,000 rows के लिए बहुत बुरा होता है (और उल्टा भी)। यह bug नहीं, trade-off है: reuse से compile CPU बचता है।</li>
<li><b>Fixes, सबसे सस्ते पहले:</b> statistics update; SARGability या types ठीक करो; बेहतर index; rare, heavy queries के लिए <code>OPTION (RECOMPILE)</code>; <code>OPTIMIZE FOR (@p UNKNOWN)</code> (average plan) या कोई specific value; skewed case के लिए procedure को split करो; regression ढूँढने और last good plan force करने के लिए <b>Query Store</b> (SQL Server 2016+)। SQL Server 2022 में <b>PSP optimization</b> आया (database compatibility level 160): एक parameterized query अलग value ranges के लिए कई plans रख सकती है। पहले जवाब के तौर पर index hints और plan guides से बचो।</li>
</ul>
<p><b>कब use करें:</b> जब भी query slow हो या code बदले बिना timing बदले, actual plan देखो। <b>कब नहीं:</b> सिर्फ़ estimated cost percentage देखकर tune मत करो, और चलती हुई queries को theoretical elegance के लिए मत बदलो।</p>`,
        hg: `<p><b>Picture — sorted guest list mein naam dhoondhna:</b> "jinka naam Ra se shuru hota hai" aasaan hai: R par kudo aur padho. "Jinka naam <i>ulta likhne par</i> 'an' se shuru hota hai" mein poori list padhni padti hai. <b>SARGable</b> predicate (Search ARGument able) SQL Server ko sorted index mein <b>seek</b> karne deta hai; non-SARGable predicate <b>scan</b> karwata hai.</p>
<ul>
<li><b>Column ko bare rakho:</b> <code>YEAR(CreatedOn) = 2025</code> ya <code>CONVERT(date, CreatedOn) = @d</code> column ko function ke peeche chhupa dete hain. Half-open range mein likho: <code>CreatedOn &gt;= '2025-01-01' AND CreatedOn &lt; '2026-01-01'</code>. <code>ISNULL(col, 0) = 0</code> ke liye bhi yahi (<code>col = 0 OR col IS NULL</code> likho), aur column ki taraf arithmetic ke liye bhi (<code>Price * 2 &gt; 100</code> ki jagah <code>Price &gt; 50</code>).</li>
<li><b>Data type match karo:</b> data type precedence mein <code>nvarchar</code>, <code>varchar</code> se upar hai, isliye <code>varchar</code> column ko <code>nvarchar</code> parameter se compare karo to <b>column</b> ki taraf <code>CONVERT_IMPLICIT</code> lagta hai aur seek, scan ban sakta hai (khaaskar SQL collations mein). EF mein yeh Day 6 wala Unicode mapping trap hai. Plan mein warning triangle dikhta hai; use padho.</li>
<li><b>LIKE:</b> <code>LIKE 'INV-00%'</code> seek kar sakta hai; <code>LIKE '%00'</code> nahi kar sakta (leading wildcard ke liye full-text search ya doosra design chahiye).</li>
<li><b>Plan kaise padhein:</b> daayein se baayein, upar se neeche. Dekho <b>Index Seek vs Index/Table Scan</b>, <b>Key Lookup</b> (aur uski row count), mote arrows, <b>warnings</b> (implicit conversion, tempdb mein spill) aur sabse bada cost percentage. Asli numbers ke liye <b>actual</b> plan use karo.</li>
<li><b>Estimated vs actual rows:</b> optimizer plan <b>statistics</b> (har index ya column ka histogram) se chunta hai. Estimated aur actual rows mein bada farq clue hai: purani ya sampled statistics, skewed data, ya kisi ajeeb value se sniff hua parameter. Cardinality estimator ka model compatibility level ke saath badalta hai.</li>
<li><b>Parameter sniffing:</b> pehli execution apne parameter value ke liye plan compile karti hai aur woh plan aage ki values ke liye cache rehta hai. Skewed data mein, 3 rows ke liye achha plan 5,000 rows ke liye bahut bura hota hai (aur ulta bhi). Yeh bug nahi, trade-off hai: reuse se compile CPU bachta hai.</li>
<li><b>Fixes, sabse saste pehle:</b> statistics update; SARGability ya types theek karo; behtar index; rare, heavy queries ke liye <code>OPTION (RECOMPILE)</code>; <code>OPTIMIZE FOR (@p UNKNOWN)</code> (average plan) ya koi specific value; skewed case ke liye procedure ko split karo; regression dhoondhne aur last good plan force karne ke liye <b>Query Store</b> (SQL Server 2016+). SQL Server 2022 mein <b>PSP optimization</b> aaya (database compatibility level 160): ek parameterized query alag value ranges ke liye kai plans rakh sakti hai. Pehle jawab ke taur par index hints aur plan guides se bacho.</li>
</ul>
<p><b>Kab use karein:</b> jab bhi query slow ho ya code badle bina timing badle, actual plan dekho. <b>Kab nahi:</b> sirf estimated cost percentage dekhkar tune mat karo, aur chalti hui queries ko theoretical elegance ke liye mat badlo.</p>`
      }
    },
    {
      id: "query-shapes-overview",
      depth: "short",
      title: {
        en: "Joins, anti-joins, CTEs and window functions",
        hi: "Joins, anti-joins, CTEs और window functions",
        hg: "Joins, anti-joins, CTEs aur window functions"
      },
      body: {
        en: `<p><b>Picture — a school register:</b> a <b>join</b> matches students with fee records; an <b>anti-join</b> asks "which students have no fee record"; a <b>window function</b> is "rank within each class" without squeezing the class into one row.</p>
<ul>
<li><b>Joins:</b> <code>INNER</code> keeps matches only; <code>LEFT</code> keeps all left rows (NULLs on the right); <code>CROSS JOIN</code> is every combination. <b>Trap:</b> a <code>WHERE</code> filter on the right table of a LEFT JOIN removes the NULL rows and silently turns it into an inner join; put that condition in the <code>ON</code> clause (Puzzle 3).</li>
<li><b>APPLY:</b> <code>CROSS APPLY</code> runs a subquery or table function <b>per left row</b> (inner-join-like); <code>OUTER APPLY</code> keeps left rows with no result. The classic use is "top N per group".</li>
<li><b>Anti-join:</b> use <code>NOT EXISTS</code>. <code>NOT IN (subquery)</code> returns <b>no rows at all</b> if the subquery returns even one NULL, because <code>x &lt;&gt; NULL</code> is unknown, not true (Puzzle 1). <code>LEFT JOIN ... WHERE right.key IS NULL</code> is a valid alternative.</li>
<li><b>CTE:</b> a named query for readability. In SQL Server it is <b>not materialised</b>: the text is expanded where used, so referencing it twice can run it twice. A <b>recursive CTE</b> (anchor <code>UNION ALL</code> recursive part) walks trees such as an org chart; <code>MAXRECURSION</code> defaults to 100, <code>0</code> removes the limit (careful with cycles).</li>
<li><b>Window functions:</b> <code>ROW_NUMBER()</code> (unique), <code>RANK()</code> (ties share a number, gaps follow), <code>DENSE_RANK()</code> (ties share, no gaps) (Puzzle 2); <code>LAG/LEAD</code> read the previous or next row; <code>SUM() OVER (ORDER BY ...)</code> gives running totals.</li>
<li><b>Frame trap:</b> with <code>ORDER BY</code> and no frame, the default is <code>RANGE UNBOUNDED PRECEDING</code>: rows with the <b>same</b> order value are peers and get the same total. Write <code>ROWS UNBOUNDED PRECEDING</code> for a true row-by-row running total (and it is usually faster; Puzzle 4).</li>
</ul>
<p><b>When to use:</b> <code>NOT EXISTS</code> for "has no", APPLY for top-N per group, window functions instead of self-joins for running totals and rankings, recursive CTEs for hierarchies. <b>When not:</b> do not use a CTE as a performance trick (it does not cache results; use a temp table for that), and do not hide a missing tie-breaker: add a unique column to <code>ORDER BY</code> so results are deterministic.</p>`,
        hi: `<p><b>Picture — school register:</b> <b>join</b> students को fee records से match करता है; <b>anti-join</b> पूछता है "किन students का fee record नहीं है"; <b>window function</b> है "हर class में rank" बिना class को एक row में दबाए।</p>
<ul>
<li><b>Joins:</b> <code>INNER</code> सिर्फ़ matches रखता है; <code>LEFT</code> सारी left rows रखता है (right में NULLs); <code>CROSS JOIN</code> हर combination है। <b>Trap:</b> LEFT JOIN की right table पर <code>WHERE</code> filter NULL rows हटा देता है और चुपचाप उसे inner join बना देता है; वह condition <code>ON</code> clause में रखो (Puzzle 3)।</li>
<li><b>APPLY:</b> <code>CROSS APPLY</code> हर <b>left row</b> के लिए subquery या table function चलाता है (inner-join जैसा); <code>OUTER APPLY</code> उन left rows को रखता है जिनका result नहीं है। Classic use है "हर group में top N"।</li>
<li><b>Anti-join:</b> <code>NOT EXISTS</code> use करो। <code>NOT IN (subquery)</code> में subquery एक भी NULL दे दे तो <b>कोई row नहीं आती</b>, क्योंकि <code>x &lt;&gt; NULL</code> unknown है, true नहीं (Puzzle 1)। <code>LEFT JOIN ... WHERE right.key IS NULL</code> सही विकल्प है।</li>
<li><b>CTE:</b> readability के लिए नाम वाली query। SQL Server में यह <b>materialise नहीं होती</b>: text जहाँ use हो वहाँ expand होता है, इसलिए दो बार reference करने पर दो बार चल सकती है। <b>Recursive CTE</b> (anchor <code>UNION ALL</code> recursive part) org chart जैसे trees चलती है; <code>MAXRECURSION</code> default 100 है, <code>0</code> limit हटा देता है (cycles से सावधान)।</li>
<li><b>Window functions:</b> <code>ROW_NUMBER()</code> (unique), <code>RANK()</code> (ties को एक number, फिर gap), <code>DENSE_RANK()</code> (ties को एक number, gap नहीं) (Puzzle 2); <code>LAG/LEAD</code> पिछली या अगली row पढ़ते हैं; <code>SUM() OVER (ORDER BY ...)</code> running total देता है।</li>
<li><b>Frame trap:</b> <code>ORDER BY</code> हो और frame न लिखा हो तो default <code>RANGE UNBOUNDED PRECEDING</code> है: <b>same</b> order value वाली rows peers होती हैं और उन्हें same total मिलता है। सच्चे row-by-row running total के लिए <code>ROWS UNBOUNDED PRECEDING</code> लिखो (और यह आम तौर पर तेज़ भी है; Puzzle 4)।</li>
</ul>
<p><b>कब use करें:</b> "नहीं है" के लिए <code>NOT EXISTS</code>, हर group के top-N के लिए APPLY, running totals और rankings के लिए self-joins की जगह window functions, hierarchies के लिए recursive CTEs। <b>कब नहीं:</b> CTE को performance trick की तरह use मत करो (यह result cache नहीं करती; उसके लिए temp table), और missing tie-breaker मत छुपाओ: <code>ORDER BY</code> में unique column जोड़ो ताकि results deterministic हों।</p>`,
        hg: `<p><b>Picture — school register:</b> <b>join</b> students ko fee records se match karta hai; <b>anti-join</b> poochta hai "kin students ka fee record nahi hai"; <b>window function</b> hai "har class mein rank" bina class ko ek row mein dabaye.</p>
<ul>
<li><b>Joins:</b> <code>INNER</code> sirf matches rakhta hai; <code>LEFT</code> saari left rows rakhta hai (right mein NULLs); <code>CROSS JOIN</code> har combination hai. <b>Trap:</b> LEFT JOIN ki right table par <code>WHERE</code> filter NULL rows hata deta hai aur chupchaap use inner join bana deta hai; woh condition <code>ON</code> clause mein rakho (Puzzle 3).</li>
<li><b>APPLY:</b> <code>CROSS APPLY</code> har <b>left row</b> ke liye subquery ya table function chalata hai (inner-join jaisa); <code>OUTER APPLY</code> un left rows ko rakhta hai jinka result nahi hai. Classic use hai "har group mein top N".</li>
<li><b>Anti-join:</b> <code>NOT EXISTS</code> use karo. <code>NOT IN (subquery)</code> mein subquery ek bhi NULL de de to <b>koi row nahi aati</b>, kyunki <code>x &lt;&gt; NULL</code> unknown hai, true nahi (Puzzle 1). <code>LEFT JOIN ... WHERE right.key IS NULL</code> sahi vikalp hai.</li>
<li><b>CTE:</b> readability ke liye naam wali query. SQL Server mein yeh <b>materialise nahi hoti</b>: text jahan use ho wahan expand hota hai, isliye do baar reference karne par do baar chal sakti hai. <b>Recursive CTE</b> (anchor <code>UNION ALL</code> recursive part) org chart jaise trees chalti hai; <code>MAXRECURSION</code> default 100 hai, <code>0</code> limit hata deta hai (cycles se saavdhaan).</li>
<li><b>Window functions:</b> <code>ROW_NUMBER()</code> (unique), <code>RANK()</code> (ties ko ek number, phir gap), <code>DENSE_RANK()</code> (ties ko ek number, gap nahi) (Puzzle 2); <code>LAG/LEAD</code> pichli ya agli row padhte hain; <code>SUM() OVER (ORDER BY ...)</code> running total deta hai.</li>
<li><b>Frame trap:</b> <code>ORDER BY</code> ho aur frame na likha ho to default <code>RANGE UNBOUNDED PRECEDING</code> hai: <b>same</b> order value wali rows peers hoti hain aur unhe same total milta hai. Sachche row-by-row running total ke liye <code>ROWS UNBOUNDED PRECEDING</code> likho (aur yeh aam taur par tez bhi hai; Puzzle 4).</li>
</ul>
<p><b>Kab use karein:</b> "nahi hai" ke liye <code>NOT EXISTS</code>, har group ke top-N ke liye APPLY, running totals aur rankings ke liye self-joins ki jagah window functions, hierarchies ke liye recursive CTEs. <b>Kab nahi:</b> CTE ko performance trick ki tarah use mat karo (yeh result cache nahi karti; uske liye temp table), aur missing tie-breaker mat chhupao: <code>ORDER BY</code> mein unique column jodo taaki results deterministic hon.</p>`
      }
    },
    {
      id: "concurrency-overview",
      depth: "short",
      title: {
        en: "Isolation levels, blocking and deadlocks",
        hi: "Isolation levels, blocking और deadlocks",
        hg: "Isolation levels, blocking aur deadlocks"
      },
      body: {
        en: `<p><b>Picture — one railway ticket window with two queues:</b> if the clerk keeps your form on the desk while you fetch a document, the people behind you <b>block</b>. A <b>deadlock</b> is two clerks each holding a form the other needs: someone must give way, and SQL Server picks one transaction as the <b>victim</b> (error 1205).</p>
<ul>
<li><b>READ COMMITTED (default in SQL Server):</b> you never read uncommitted data, but readers take short shared locks, so <b>readers and writers can block each other</b>, and a row can change between two reads in the same transaction.</li>
<li><b>RCSI</b> (<code>READ_COMMITTED_SNAPSHOT ON</code>): the same level, but readers see the <b>last committed version of each row at statement start</b> from the version store instead of taking shared locks. Readers stop blocking writers. No code change; costs tempdb space and version-store management. Azure SQL Database turns it on by default (check current docs).</li>
<li><b>SNAPSHOT</b> (<code>ALLOW_SNAPSHOT_ISOLATION ON</code>, then <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code>): a <b>transaction-level</b> consistent view. If another transaction changed a row you try to update, you get an <b>update conflict (error 3960)</b> and retry. Use it for multi-statement consistent reads.</li>
<li><b>REPEATABLE READ / SERIALIZABLE:</b> hold more locks for longer (SERIALIZABLE also locks key ranges). Correct for some money rules, but more blocking and deadlocks. Avoid <code>NOLOCK</code> as a speed trick: it allows dirty, duplicated or missing rows.</li>
<li><b>Blocking vs deadlock:</b> blocking is a queue (the waiter waits, then proceeds); a deadlock is a cycle (nobody can proceed). Blocking is found with <code>sys.dm_exec_requests</code> (<code>blocking_session_id</code>) and the blocked process report; deadlocks are recorded in the always-on <b>system_health</b> Extended Events session as an <code>xml_deadlock_report</code> (trace flag 1222 is the old way).</li>
<li><b>Avoiding deadlocks:</b> touch tables and rows in the <b>same order</b> everywhere, keep transactions <b>short</b> (no user input or HTTP calls inside), add the index that lets the update find its row without scanning and locking extra rows, use RCSI to remove reader/writer conflicts, and <b>retry</b> error 1205 in the caller.</li>
<li><b>EF side:</b> Day 6 covered <code>BeginTransaction</code>, the isolation level you pass, and rowversion optimistic concurrency; this section is what happens inside SQL Server.</li>
</ul>
<p><b>When to use:</b> RCSI for read-heavy OLTP with blocking; SNAPSHOT for a report that must see one consistent moment; SERIALIZABLE only for a narrow, measured need. <b>When not:</b> do not raise isolation levels "to be safe", do not leave transactions open across network calls, and do not treat a deadlock as a bug to hide: log it and fix the access order.</p>`,
        hi: `<p><b>Picture — railway ticket window पर दो queues:</b> अगर clerk आपका form desk पर रखे रहे जब आप document लेने गए हैं, तो पीछे वाले <b>block</b> होते हैं। <b>Deadlock</b> है दो clerks जिनमें हर एक के पास वह form है जो दूसरे को चाहिए: किसी को पीछे हटना पड़ेगा, और SQL Server एक transaction को <b>victim</b> चुन लेता है (error 1205)।</p>
<ul>
<li><b>READ COMMITTED (SQL Server में default):</b> तुम कभी uncommitted data नहीं पढ़ते, पर readers छोटे shared locks लेते हैं, इसलिए <b>readers और writers एक-दूसरे को block कर सकते हैं</b>, और एक ही transaction में दो reads के बीच row बदल सकती है।</li>
<li><b>RCSI</b> (<code>READ_COMMITTED_SNAPSHOT ON</code>): वही level, पर readers shared locks की जगह version store से <b>statement शुरू होने पर हर row का last committed version</b> देखते हैं। Readers writers को block करना बंद कर देते हैं। Code बदलना नहीं पड़ता; tempdb space और version-store management की कीमत है। Azure SQL Database में यह default ON है (current docs देख लो)।</li>
<li><b>SNAPSHOT</b> (<code>ALLOW_SNAPSHOT_ISOLATION ON</code>, फिर <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code>): <b>transaction-level</b> consistent view। अगर किसी और transaction ने वह row बदली जिसे तुम update करने जा रहे हो, तो <b>update conflict (error 3960)</b> आता है और retry करना पड़ता है। Multi-statement consistent reads के लिए use करो।</li>
<li><b>REPEATABLE READ / SERIALIZABLE:</b> ज़्यादा locks ज़्यादा देर रखते हैं (SERIALIZABLE key ranges भी lock करता है)। कुछ पैसे वाले rules के लिए सही, पर blocking और deadlocks ज़्यादा। <code>NOLOCK</code> को speed trick की तरह use मत करो: इससे dirty, duplicate या missing rows मिल सकती हैं।</li>
<li><b>Blocking बनाम deadlock:</b> blocking एक queue है (इंतज़ार करने वाला रुकता है, फिर आगे बढ़ता है); deadlock एक cycle है (कोई आगे नहीं बढ़ सकता)। Blocking <code>sys.dm_exec_requests</code> (<code>blocking_session_id</code>) और blocked process report से मिलता है; deadlocks हमेशा चलने वाले <b>system_health</b> Extended Events session में <code>xml_deadlock_report</code> के रूप में record होते हैं (trace flag 1222 पुराना तरीका है)।</li>
<li><b>Deadlocks से बचना:</b> हर जगह tables और rows <b>same order</b> में छुओ, transactions <b>short</b> रखो (अंदर user input या HTTP calls नहीं), वह index जोड़ो जिससे update अपनी row बिना scan और extra rows lock किए ढूँढ ले, reader/writer conflicts हटाने के लिए RCSI, और caller में error 1205 <b>retry</b> करो।</li>
<li><b>EF की तरफ़:</b> Day 6 में <code>BeginTransaction</code>, जो isolation level तुम pass करते हो, और rowversion optimistic concurrency थे; यह section बताता है कि SQL Server के अंदर क्या होता है।</li>
</ul>
<p><b>कब use करें:</b> blocking वाले read-heavy OLTP के लिए RCSI; जिस report को एक consistent moment देखना है उसके लिए SNAPSHOT; SERIALIZABLE सिर्फ़ छोटी, measured ज़रूरत के लिए। <b>कब नहीं:</b> "safe रहने के लिए" isolation levels मत बढ़ाओ, network calls के पार transactions खुली मत छोड़ो, और deadlock को छुपाने वाला bug मत समझो: उसे log करो और access order ठीक करो।</p>`,
        hg: `<p><b>Picture — railway ticket window par do queues:</b> agar clerk aapka form desk par rakhe rahe jab aap document lene gaye hain, to peeche wale <b>block</b> hote hain. <b>Deadlock</b> hai do clerks jinme har ek ke paas woh form hai jo doosre ko chahiye: kisi ko peeche hatna padega, aur SQL Server ek transaction ko <b>victim</b> chun leta hai (error 1205).</p>
<ul>
<li><b>READ COMMITTED (SQL Server mein default):</b> tum kabhi uncommitted data nahi padhte, par readers chhote shared locks lete hain, isliye <b>readers aur writers ek-doosre ko block kar sakte hain</b>, aur ek hi transaction mein do reads ke beech row badal sakti hai.</li>
<li><b>RCSI</b> (<code>READ_COMMITTED_SNAPSHOT ON</code>): wahi level, par readers shared locks ki jagah version store se <b>statement shuru hone par har row ka last committed version</b> dekhte hain. Readers writers ko block karna band kar dete hain. Code badalna nahi padta; tempdb space aur version-store management ki keemat hai. Azure SQL Database mein yeh default ON hai (current docs dekh lo).</li>
<li><b>SNAPSHOT</b> (<code>ALLOW_SNAPSHOT_ISOLATION ON</code>, phir <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code>): <b>transaction-level</b> consistent view. Agar kisi aur transaction ne woh row badli jise tum update karne ja rahe ho, to <b>update conflict (error 3960)</b> aata hai aur retry karna padta hai. Multi-statement consistent reads ke liye use karo.</li>
<li><b>REPEATABLE READ / SERIALIZABLE:</b> zyaada locks zyaada der rakhte hain (SERIALIZABLE key ranges bhi lock karta hai). Kuch paise wale rules ke liye sahi, par blocking aur deadlocks zyaada. <code>NOLOCK</code> ko speed trick ki tarah use mat karo: isse dirty, duplicate ya missing rows mil sakti hain.</li>
<li><b>Blocking vs deadlock:</b> blocking ek queue hai (intezaar karne wala rukta hai, phir aage badhta hai); deadlock ek cycle hai (koi aage nahi badh sakta). Blocking <code>sys.dm_exec_requests</code> (<code>blocking_session_id</code>) aur blocked process report se milta hai; deadlocks hamesha chalne wale <b>system_health</b> Extended Events session mein <code>xml_deadlock_report</code> ke roop mein record hote hain (trace flag 1222 purana tareeka hai).</li>
<li><b>Deadlocks se bachna:</b> har jagah tables aur rows <b>same order</b> mein chhuo, transactions <b>short</b> rakho (andar user input ya HTTP calls nahi), woh index jodo jisse update apni row bina scan aur extra rows lock kiye dhoondh le, reader/writer conflicts hatane ke liye RCSI, aur caller mein error 1205 <b>retry</b> karo.</li>
<li><b>EF ki taraf:</b> Day 6 mein <code>BeginTransaction</code>, jo isolation level tum pass karte ho, aur rowversion optimistic concurrency the; yeh section batata hai ki SQL Server ke andar kya hota hai.</li>
</ul>
<p><b>Kab use karein:</b> blocking wale read-heavy OLTP ke liye RCSI; jis report ko ek consistent moment dekhna hai uske liye SNAPSHOT; SERIALIZABLE sirf chhoti, measured zaroorat ke liye. <b>Kab nahi:</b> "safe rehne ke liye" isolation levels mat badhao, network calls ke paar transactions khuli mat chhodo, aur deadlock ko chhupane wala bug mat samjho: use log karo aur access order theek karo.</p>`
      }
    },
    {
      id: "indexes-in-code",
      depth: "detailed",
      title: {
        en: "Indexes in code: clustered key, covering INCLUDE, filtered, fill factor",
        hi: "Code में indexes: clustered key, covering INCLUDE, filtered, fill factor",
        hg: "Code mein indexes: clustered key, covering INCLUDE, filtered, fill factor"
      },
      body: {
        en: `<p><b>Analogy — a kirana shop's register:</b> the main ledger is in bill-number order (clustered). A small card box by customer name (non-clustered) points to bill numbers; if the card also writes the amount and status, you never open the ledger (covering).</p>
<ul>
<li>The table has a narrow, ever-increasing clustered key (<code>OrderId</code>).</li>
<li><code>IX_Orders_Customer_Date</code> serves "orders of one customer, newest first": equality column <code>CustomerId</code> first, sort column <code>OrderDate DESC</code> second, and <code>Status</code>, <code>Total</code> in <code>INCLUDE</code> so no key lookup is needed. <code>Notes</code> is left out on purpose: wide columns bloat the index.</li>
<li><code>IX_Orders_Open</code> is filtered to the small open slice.</li>
<li>The catalog query shows what was built (fill factor 90 only on the index that takes random inserts).</li>
</ul>
<p><b>When to use:</b> a covering index for your top 3-5 hot queries, found with the plan and Query Store, not guesswork. <b>When not:</b> on write-heavy tables, each extra index slows every write; do not add a second index that is only a left-prefix of an existing one.</p>`,
        hi: `<p><b>Analogy — kirana दुकान का register:</b> main ledger bill-number के order में है (clustered)। Customer के नाम से छोटा card box (non-clustered) bill numbers की तरफ़ इशारा करता है; अगर card पर amount और status भी लिखा हो तो ledger खोलनी ही नहीं पड़ती (covering)।</p>
<ul>
<li>Table में narrow, बढ़ती जाने वाली clustered key है (<code>OrderId</code>)।</li>
<li><code>IX_Orders_Customer_Date</code> "एक customer के orders, नए पहले" को serve करता है: पहले equality column <code>CustomerId</code>, फिर sort column <code>OrderDate DESC</code>, और <code>Status</code>, <code>Total</code> <code>INCLUDE</code> में ताकि key lookup न लगे। <code>Notes</code> जानबूझकर बाहर है: wide columns index को फुला देते हैं।</li>
<li><code>IX_Orders_Open</code> छोटे open slice तक filtered है।</li>
<li>Catalog query दिखाती है कि क्या बना (fill factor 90 सिर्फ़ उस index पर जिसमें random inserts आते हैं)।</li>
</ul>
<p><b>कब use करें:</b> अपनी top 3-5 hot queries के लिए covering index, जो plan और Query Store से मिले, अंदाज़े से नहीं। <b>कब नहीं:</b> write-heavy tables पर हर extra index हर write को धीमा करता है; ऐसा दूसरा index मत जोड़ो जो किसी मौजूदा index का सिर्फ़ left-prefix हो।</p>`,
        hg: `<p><b>Analogy — kirana dukaan ka register:</b> main ledger bill-number ke order mein hai (clustered). Customer ke naam se chhota card box (non-clustered) bill numbers ki taraf ishaara karta hai; agar card par amount aur status bhi likha ho to ledger kholni hi nahi padti (covering).</p>
<ul>
<li>Table mein narrow, badhti jaane wali clustered key hai (<code>OrderId</code>).</li>
<li><code>IX_Orders_Customer_Date</code> "ek customer ke orders, naye pehle" ko serve karta hai: pehle equality column <code>CustomerId</code>, phir sort column <code>OrderDate DESC</code>, aur <code>Status</code>, <code>Total</code> <code>INCLUDE</code> mein taaki key lookup na lage. <code>Notes</code> jaanbujhkar bahar hai: wide columns index ko phula dete hain.</li>
<li><code>IX_Orders_Open</code> chhote open slice tak filtered hai.</li>
<li>Catalog query dikhati hai ki kya bana (fill factor 90 sirf us index par jisme random inserts aate hain).</li>
</ul>
<p><b>Kab use karein:</b> apni top 3-5 hot queries ke liye covering index, jo plan aur Query Store se mile, andaze se nahi. <b>Kab nahi:</b> write-heavy tables par har extra index har write ko dheema karta hai; aisa doosra index mat jodo jo kisi maujooda index ka sirf left-prefix ho.</p>`
      },
      code: [{
        lang: "sql",
        caption: {
          en: "Orders table with a covering and a filtered index (runs on SQL Server 2019 LocalDB; fill factor and filter are read back from the catalog)",
          hi: "Covering और filtered index वाली Orders table (SQL Server 2019 LocalDB पर चलती है; fill factor और filter catalog से वापस पढ़े गए हैं)",
          hg: "Covering aur filtered index wali Orders table (SQL Server 2019 LocalDB par chalti hai; fill factor aur filter catalog se wapas padhe gaye hain)"
        },
        check: "run",
        expected: "PK_Orders CLUSTERED 0 0\nIX_Orders_Customer_Date NONCLUSTERED 90 0\nIX_Orders_Open NONCLUSTERED 0 1\nIX_Orders_Customer_Date CustomerId 1 0\nIX_Orders_Customer_Date OrderDate 2 0\nIX_Orders_Customer_Date Status 0 1\nIX_Orders_Customer_Date Total 0 1",
        src: `CREATE TABLE dbo.Orders (
    OrderId    int IDENTITY(1,1) CONSTRAINT PK_Orders PRIMARY KEY CLUSTERED,
    CustomerId int           NOT NULL,
    Status     tinyint       NOT NULL,
    OrderDate  date          NOT NULL,
    Total      decimal(10,2) NOT NULL,
    Notes      nvarchar(400) NULL
);

-- Covering: seek on CustomerId, already sorted by OrderDate, Status and Total ride along in the leaf
CREATE NONCLUSTERED INDEX IX_Orders_Customer_Date
    ON dbo.Orders (CustomerId, OrderDate DESC) INCLUDE (Status, Total)
    WITH (FILLFACTOR = 90);

-- Filtered: indexes only the small "open" slice (Status = 0)
CREATE NONCLUSTERED INDEX IX_Orders_Open
    ON dbo.Orders (OrderDate) INCLUDE (CustomerId)
    WHERE Status = 0;

SELECT i.name, i.type_desc, i.fill_factor, i.has_filter
FROM sys.indexes AS i
WHERE i.object_id = OBJECT_ID('dbo.Orders')
ORDER BY i.index_id;

SELECT i.name AS index_name, c.name AS column_name, ic.key_ordinal, ic.is_included_column
FROM sys.indexes AS i
JOIN sys.index_columns AS ic ON ic.object_id = i.object_id AND ic.index_id = i.index_id
JOIN sys.columns AS c ON c.object_id = ic.object_id AND c.column_id = ic.column_id
WHERE i.object_id = OBJECT_ID('dbo.Orders') AND i.name = 'IX_Orders_Customer_Date'
ORDER BY ic.is_included_column, ic.key_ordinal, c.name;`
      }]
    },
    {
      id: "sargable-in-code",
      depth: "detailed",
      title: {
        en: "SARGability in code: the same rows, two ways to ask",
        hi: "Code में SARGability: वही rows, पूछने के दो तरीके",
        hg: "Code mein SARGability: wahi rows, poochne ke do tareeke"
      },
      body: {
        en: `<p><b>Analogy — a library catalogue sorted by year:</b> "books from 2025" is a range you can jump to; "books where the year <i>divided by 7</i> is a whole number" needs you to check every card.</p>
<ul>
<li>Both queries return the same count, but only the range form leaves <code>CreatedOn</code> bare so <code>IX_Invoices_CreatedOn</code> can seek. Results are identical; the <b>plan</b> is what differs, so compare plans and <code>SET STATISTICS IO ON</code> logical reads, not the output.</li>
<li>The half-open range (<code>&gt;=</code> start, <code>&lt;</code> next start) is safe for <code>datetime2</code> with time parts; <code>BETWEEN</code> with a 23:59:59 end is not.</li>
<li>The variable is declared <code>varchar(20)</code> to match the column. In application code, set the parameter type (ADO.NET <code>SqlDbType.VarChar</code>, EF <code>IsUnicode(false)</code>, Day 6) so the driver does not send <code>nvarchar</code>.</li>
<li>Prefix <code>LIKE</code> can seek; a leading wildcard cannot.</li>
</ul>
<p><b>When to use:</b> rewrite on hot paths and in code review whenever a plan shows a scan caused by a function or conversion on the column. <b>When not:</b> on a 500-row lookup table the difference is invisible; do not rewrite readable queries without a measured cost.</p>`,
        hi: `<p><b>Analogy — साल से sorted library catalogue:</b> "2025 की books" एक range है जिस पर कूद सकते हो; "वो books जिनका साल <i>7 से भाग देने पर</i> पूरा number आए" के लिए हर card देखना पड़ेगा।</p>
<ul>
<li>दोनों queries same count देती हैं, पर सिर्फ़ range form <code>CreatedOn</code> को bare छोड़ता है ताकि <code>IX_Invoices_CreatedOn</code> seek कर सके। Results identical हैं; फ़र्क़ <b>plan</b> में है, इसलिए output नहीं, plans और <code>SET STATISTICS IO ON</code> के logical reads compare करो।</li>
<li>Half-open range (<code>&gt;=</code> start, <code>&lt;</code> अगला start) time parts वाले <code>datetime2</code> के लिए safe है; 23:59:59 end वाला <code>BETWEEN</code> safe नहीं।</li>
<li>Variable <code>varchar(20)</code> declare है ताकि column से match करे। Application code में parameter का type set करो (ADO.NET <code>SqlDbType.VarChar</code>, EF <code>IsUnicode(false)</code>, Day 6) ताकि driver <code>nvarchar</code> न भेजे।</li>
<li>Prefix <code>LIKE</code> seek कर सकता है; leading wildcard नहीं।</li>
</ul>
<p><b>कब use करें:</b> hot paths पर और code review में, जब भी plan में column पर function या conversion की वजह से scan दिखे। <b>कब नहीं:</b> 500 rows की lookup table पर फ़र्क़ दिखता ही नहीं; measured cost के बिना readable queries मत बदलो।</p>`,
        hg: `<p><b>Analogy — saal se sorted library catalogue:</b> "2025 ki books" ek range hai jis par kood sakte ho; "woh books jinka saal <i>7 se bhaag dene par</i> poora number aaye" ke liye har card dekhna padega.</p>
<ul>
<li>Dono queries same count deti hain, par sirf range form <code>CreatedOn</code> ko bare chhodta hai taaki <code>IX_Invoices_CreatedOn</code> seek kar sake. Results identical hain; farq <b>plan</b> mein hai, isliye output nahi, plans aur <code>SET STATISTICS IO ON</code> ke logical reads compare karo.</li>
<li>Half-open range (<code>&gt;=</code> start, <code>&lt;</code> agla start) time parts wale <code>datetime2</code> ke liye safe hai; 23:59:59 end wala <code>BETWEEN</code> safe nahi.</li>
<li>Variable <code>varchar(20)</code> declare hai taaki column se match kare. Application code mein parameter ka type set karo (ADO.NET <code>SqlDbType.VarChar</code>, EF <code>IsUnicode(false)</code>, Day 6) taaki driver <code>nvarchar</code> na bheje.</li>
<li>Prefix <code>LIKE</code> seek kar sakta hai; leading wildcard nahi.</li>
</ul>
<p><b>Kab use karein:</b> hot paths par aur code review mein, jab bhi plan mein column par function ya conversion ki wajah se scan dikhe. <b>Kab nahi:</b> 500 rows ki lookup table par farq dikhta hi nahi; measured cost ke bina readable queries mat badlo.</p>`
      },
      code: [{
        lang: "sql",
        caption: {
          en: "Function on the column vs half-open range, matching parameter type, prefix LIKE (same results; compare the plans in SSMS)",
          hi: "Column पर function बनाम half-open range, matching parameter type, prefix LIKE (results same; SSMS में plans compare करो)",
          hg: "Column par function vs half-open range, matching parameter type, prefix LIKE (results same; SSMS mein plans compare karo)"
        },
        check: "run",
        expected: "3\n3\n3\n5",
        src: `CREATE TABLE dbo.Invoices (
    InvoiceId  int IDENTITY(1,1) PRIMARY KEY,
    InvoiceNo  varchar(20)   NOT NULL,   -- varchar on purpose: ASCII codes
    CreatedOn  datetime2(0)  NOT NULL,
    Amount     decimal(10,2) NOT NULL
);
CREATE INDEX IX_Invoices_CreatedOn ON dbo.Invoices (CreatedOn) INCLUDE (Amount);
CREATE INDEX IX_Invoices_InvoiceNo ON dbo.Invoices (InvoiceNo);

INSERT dbo.Invoices (InvoiceNo, CreatedOn, Amount) VALUES
 ('INV-001', '2024-12-31T23:59:59', 100),
 ('INV-002', '2025-01-01T00:00:00', 200),
 ('INV-003', '2025-06-15T10:30:00', 300),
 ('INV-004', '2025-12-31T23:59:59', 400),
 ('INV-005', '2026-01-01T00:00:00', 500);

-- NOT sargable: a function on the column hides the index order
SELECT COUNT(*) AS with_function
FROM dbo.Invoices WHERE YEAR(CreatedOn) = 2025;

-- Sargable: same rows, half-open range on the bare column (works for date and time parts)
SELECT COUNT(*) AS with_range
FROM dbo.Invoices
WHERE CreatedOn >= '2025-01-01' AND CreatedOn < '2026-01-01';

-- Match the column type: varchar column, varchar parameter
DECLARE @no varchar(20) = 'INV-003';
SELECT InvoiceId FROM dbo.Invoices WHERE InvoiceNo = @no;

-- Prefix search can seek; leading wildcard cannot
SELECT COUNT(*) AS prefix_match FROM dbo.Invoices WHERE InvoiceNo LIKE 'INV-00%';`
      }]
    },
    {
      id: "joins-cte-in-code",
      depth: "detailed",
      title: {
        en: "Joins in code: NOT EXISTS, APPLY, recursive CTE",
        hi: "Code में joins: NOT EXISTS, APPLY, recursive CTE",
        hg: "Code mein joins: NOT EXISTS, APPLY, recursive CTE"
      },
      body: {
        en: `<p><b>Analogy — a company notice board:</b> "who has never raised a ticket" is an anti-join; "each person's latest two tickets" is a per-row lookup (APPLY); "who reports to whom, level by level" is a recursive walk.</p>
<ul>
<li><b>NOT EXISTS</b> finds customers with no orders and stays correct if <code>CustomerId</code> ever becomes nullable.</li>
<li><b>CROSS APPLY with TOP</b> returns the latest two orders per customer; the inner <code>ORDER BY</code> has a unique tie-breaker (<code>OrderId</code>) so the result is repeatable. An index on <code>(CustomerId, OrderDate DESC)</code> makes each APPLY a tiny seek.</li>
<li><b>OUTER APPLY</b> keeps customers with no orders (NULL).</li>
<li><b>Recursive CTE</b> builds a tree: an anchor row (no manager), then each level joins children to the previous level. <code>MAXRECURSION</code> is explicit as a guard against bad data with cycles.</li>
</ul>
<p>SQL Server 2022 added null-safe comparison, shown in the second snippet; LocalDB here is 2019, so that one is not run.</p>
<p><b>When to use:</b> APPLY for top-N per group and for calling an inline table function per row; recursive CTE for org charts, category trees and bill-of-materials of modest depth. <b>When not:</b> for very deep or huge graphs consider a hierarchy design such as <code>hierarchyid</code> or a closure table; do not use <code>NOT IN</code> over a nullable column.</p>`,
        hi: `<p><b>Analogy — company notice board:</b> "किसने कभी ticket नहीं डाला" anti-join है; "हर आदमी के आख़िरी दो tickets" per-row lookup (APPLY) है; "कौन किसको report करता है, level by level" recursive walk है।</p>
<ul>
<li><b>NOT EXISTS</b> उन customers को ढूँढता है जिनका कोई order नहीं, और <code>CustomerId</code> कल nullable हो जाए तब भी सही रहता है।</li>
<li><b>TOP के साथ CROSS APPLY</b> हर customer के आख़िरी दो orders देता है; अंदर के <code>ORDER BY</code> में unique tie-breaker (<code>OrderId</code>) है ताकि result repeatable रहे। <code>(CustomerId, OrderDate DESC)</code> पर index हो तो हर APPLY एक छोटा seek बन जाता है।</li>
<li><b>OUTER APPLY</b> उन customers को रखता है जिनके orders नहीं हैं (NULL)।</li>
<li><b>Recursive CTE</b> tree बनाती है: एक anchor row (जिसका manager नहीं), फिर हर level पर children को पिछले level से join करते हैं। <code>MAXRECURSION</code> cycles वाले ख़राब data से बचाने के लिए साफ़ लिखा है।</li>
</ul>
<p>SQL Server 2022 में null-safe comparison आया, जो दूसरे snippet में है; यहाँ LocalDB 2019 है, इसलिए वह snippet चलाया नहीं गया।</p>
<p><b>कब use करें:</b> हर group के top-N और हर row पर inline table function बुलाने के लिए APPLY; org charts, category trees और modest depth के bill-of-materials के लिए recursive CTE। <b>कब नहीं:</b> बहुत deep या huge graphs के लिए <code>hierarchyid</code> या closure table जैसा hierarchy design सोचो; nullable column पर <code>NOT IN</code> मत use करो।</p>`,
        hg: `<p><b>Analogy — company notice board:</b> "kisne kabhi ticket nahi daala" anti-join hai; "har aadmi ke aakhri do tickets" per-row lookup (APPLY) hai; "kaun kisko report karta hai, level by level" recursive walk hai.</p>
<ul>
<li><b>NOT EXISTS</b> un customers ko dhoondhta hai jinka koi order nahi, aur <code>CustomerId</code> kal nullable ho jaaye tab bhi sahi rehta hai.</li>
<li><b>TOP ke saath CROSS APPLY</b> har customer ke aakhri do orders deta hai; andar ke <code>ORDER BY</code> mein unique tie-breaker (<code>OrderId</code>) hai taaki result repeatable rahe. <code>(CustomerId, OrderDate DESC)</code> par index ho to har APPLY ek chhota seek ban jaata hai.</li>
<li><b>OUTER APPLY</b> un customers ko rakhta hai jinke orders nahi hain (NULL).</li>
<li><b>Recursive CTE</b> tree banati hai: ek anchor row (jiska manager nahi), phir har level par children ko pichhle level se join karte hain. <code>MAXRECURSION</code> cycles wale kharab data se bachane ke liye saaf likha hai.</li>
</ul>
<p>SQL Server 2022 mein null-safe comparison aaya, jo doosre snippet mein hai; yahan LocalDB 2019 hai, isliye woh snippet chalaya nahi gaya.</p>
<p><b>Kab use karein:</b> har group ke top-N aur har row par inline table function bulane ke liye APPLY; org charts, category trees aur modest depth ke bill-of-materials ke liye recursive CTE. <b>Kab nahi:</b> bahut deep ya huge graphs ke liye <code>hierarchyid</code> ya closure table jaisa hierarchy design socho; nullable column par <code>NOT IN</code> mat use karo.</p>`
      },
      code: [{
        lang: "sql",
        caption: {
          en: "Anti-join, top-2 per customer with APPLY, OUTER APPLY, and an org-chart recursive CTE (LocalDB 2019)",
          hi: "Anti-join, APPLY से हर customer के top-2, OUTER APPLY, और org-chart recursive CTE (LocalDB 2019)",
          hg: "Anti-join, APPLY se har customer ke top-2, OUTER APPLY, aur org-chart recursive CTE (LocalDB 2019)"
        },
        check: "run",
        expected: "Chitra\nDev\nAsha 1 500.00\nAsha 2 300.00\nBilal 4 900.00\nBilal 5 100.00\nAsha 2\nBilal 5\nChitra NULL\nDev NULL\nAsha\n-Bilal\n-Chitra\n--Dev",
        src: `CREATE TABLE dbo.Customers (CustomerId int PRIMARY KEY, Name varchar(30) NOT NULL, ManagerId int NULL);
CREATE TABLE dbo.Orders (OrderId int PRIMARY KEY, CustomerId int NOT NULL, Total decimal(10,2) NOT NULL, OrderDate date NOT NULL);
INSERT dbo.Customers (CustomerId, Name, ManagerId) VALUES (1,'Asha',NULL),(2,'Bilal',1),(3,'Chitra',1),(4,'Dev',2);
INSERT dbo.Orders (OrderId, CustomerId, Total, OrderDate) VALUES
 (1,1,500,'2025-01-05'),(2,1,300,'2025-02-10'),(3,2,200,'2025-01-20'),(4,2,900,'2025-03-01'),(5,2,100,'2025-03-15');

-- 1. Customers who never ordered: NOT EXISTS (safe with NULLs)
SELECT c.Name FROM dbo.Customers c
WHERE NOT EXISTS (SELECT 1 FROM dbo.Orders o WHERE o.CustomerId = c.CustomerId)
ORDER BY c.Name;

-- 2. Latest 2 orders per customer: CROSS APPLY with TOP and a unique tie-breaker
SELECT c.Name, t.OrderId, t.Total
FROM dbo.Customers c
CROSS APPLY (SELECT TOP (2) o.OrderId, o.Total FROM dbo.Orders o
             WHERE o.CustomerId = c.CustomerId ORDER BY o.OrderDate DESC, o.OrderId DESC) t
ORDER BY c.Name, t.OrderId;

-- 3. OUTER APPLY keeps customers with no rows
SELECT c.Name, x.LastOrder
FROM dbo.Customers c
OUTER APPLY (SELECT MAX(o.OrderId) AS LastOrder FROM dbo.Orders o WHERE o.CustomerId = c.CustomerId) x
ORDER BY c.Name;

-- 4. Recursive CTE: org chart with depth
WITH Org AS (
    SELECT CustomerId, Name, ManagerId, 0 AS Depth FROM dbo.Customers WHERE ManagerId IS NULL
    UNION ALL
    SELECT c.CustomerId, c.Name, c.ManagerId, o.Depth + 1
    FROM dbo.Customers c JOIN Org o ON c.ManagerId = o.CustomerId
)
SELECT REPLICATE('-', Depth) + Name AS Tree FROM Org ORDER BY Depth, Name
OPTION (MAXRECURSION 100);`
      }, {
        lang: "sql",
        caption: {
          en: "SQL Server 2022 and later: null-safe comparison and GREATEST (not run here, LocalDB is 2019)",
          hi: "SQL Server 2022 और बाद: null-safe comparison और GREATEST (यहाँ चलाया नहीं, LocalDB 2019 है)",
          hg: "SQL Server 2022 aur baad: null-safe comparison aur GREATEST (yahan chalaya nahi, LocalDB 2019 hai)"
        },
        check: "none",
        src: `-- SQL Server 2022+ (compatibility level 160): NULL-safe equality, no OR ... IS NULL dance
SELECT o.OrderId
FROM dbo.Orders AS o
JOIN dbo.Shipments AS s ON o.PromisedDate IS NOT DISTINCT FROM s.PromisedDate;

-- SQL Server 2022+: largest of several columns per row (NULLs are ignored)
SELECT OrderId, GREATEST(PromisedDate, ShippedDate, DeliveredDate) AS LastEvent
FROM dbo.Orders;`
      }]
    },
    {
      id: "windows-in-code",
      depth: "detailed",
      title: {
        en: "Window functions in code: LAG, running total with ROWS, top-1 per group",
        hi: "Code में window functions: LAG, ROWS वाला running total, हर group का top-1",
        hg: "Code mein window functions: LAG, ROWS wala running total, har group ka top-1"
      },
      body: {
        en: `<p><b>Analogy — a passbook:</b> every line shows the amount, the balance so far, and you can glance at the line above. You never collapse the lines into one total.</p>
<ul>
<li><code>LAG(Amount)</code> reads the previous row inside the partition (NULL for the first row; give a default as the third argument if you prefer 0).</li>
<li>The running total spells out <code>ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</code> and its <code>ORDER BY</code> ends with <code>SaleId</code>, so two sales on the same day still add one at a time.</li>
<li><b>Top-1 per group</b>: <code>ROW_NUMBER()</code> with a unique tie-breaker in a subquery, filtered outside. Window functions cannot be used directly in <code>WHERE</code>.</li>
<li>Pick the function by what ties should do: <code>ROW_NUMBER</code> never ties (needs a deterministic <code>ORDER BY</code>), <code>RANK</code> leaves gaps, <code>DENSE_RANK</code> does not (Puzzle 2).</li>
</ul>
<p><b>When to use:</b> running totals, month-over-month change, top-N per group, de-duplication (<code>ROW_NUMBER() = 1</code>). <b>When not:</b> do not window over a huge unindexed set (it sorts: an index on the partition and order columns can remove the sort); a plain <code>GROUP BY</code> is enough when you only need one row per group.</p>`,
        hi: `<p><b>Analogy — passbook:</b> हर line में amount, अब तक का balance दिखता है, और ऊपर वाली line पर नज़र डाल सकते हो। Lines को कभी एक total में नहीं दबाते।</p>
<ul>
<li><code>LAG(Amount)</code> partition के अंदर पिछली row पढ़ता है (पहली row के लिए NULL; 0 चाहिए तो तीसरे argument में default दो)।</li>
<li>Running total साफ़ <code>ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</code> लिखता है और उसका <code>ORDER BY</code> <code>SaleId</code> पर ख़त्म होता है, इसलिए same दिन की दो sales भी एक-एक करके जुड़ती हैं।</li>
<li><b>हर group का top-1</b>: subquery में unique tie-breaker के साथ <code>ROW_NUMBER()</code>, बाहर filter। Window functions सीधे <code>WHERE</code> में नहीं चलते।</li>
<li>Function इस हिसाब से चुनो कि ties क्या करें: <code>ROW_NUMBER</code> कभी tie नहीं करता (deterministic <code>ORDER BY</code> चाहिए), <code>RANK</code> gaps छोड़ता है, <code>DENSE_RANK</code> नहीं छोड़ता (Puzzle 2)।</li>
</ul>
<p><b>कब use करें:</b> running totals, month-over-month change, हर group का top-N, de-duplication (<code>ROW_NUMBER() = 1</code>)। <b>कब नहीं:</b> huge unindexed set पर window मत चलाओ (यह sort करता है: partition और order columns पर index sort हटा सकता है); हर group की सिर्फ़ एक row चाहिए तो सादा <code>GROUP BY</code> काफ़ी है।</p>`,
        hg: `<p><b>Analogy — passbook:</b> har line mein amount, ab tak ka balance dikhta hai, aur upar wali line par nazar daal sakte ho. Lines ko kabhi ek total mein nahi dabate.</p>
<ul>
<li><code>LAG(Amount)</code> partition ke andar pichhli row padhta hai (pehli row ke liye NULL; 0 chahiye to teesre argument mein default do).</li>
<li>Running total saaf <code>ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</code> likhta hai aur uska <code>ORDER BY</code> <code>SaleId</code> par khatam hota hai, isliye same din ki do sales bhi ek-ek karke judti hain.</li>
<li><b>Har group ka top-1</b>: subquery mein unique tie-breaker ke saath <code>ROW_NUMBER()</code>, bahar filter. Window functions seedhe <code>WHERE</code> mein nahi chalte.</li>
<li>Function is hisaab se chuno ki ties kya karein: <code>ROW_NUMBER</code> kabhi tie nahi karta (deterministic <code>ORDER BY</code> chahiye), <code>RANK</code> gaps chhodta hai, <code>DENSE_RANK</code> nahi chhodta (Puzzle 2).</li>
</ul>
<p><b>Kab use karein:</b> running totals, month-over-month change, har group ka top-N, de-duplication (<code>ROW_NUMBER() = 1</code>). <b>Kab nahi:</b> huge unindexed set par window mat chalao (yeh sort karta hai: partition aur order columns par index sort hata sakta hai); har group ki sirf ek row chahiye to saada <code>GROUP BY</code> kaafi hai.</p>`
      },
      code: [{
        lang: "sql",
        caption: {
          en: "LAG, a ROWS running total per region, and top-1 per group (LocalDB 2019)",
          hi: "LAG, हर region का ROWS running total, और हर group का top-1 (LocalDB 2019)",
          hg: "LAG, har region ka ROWS running total, aur har group ka top-1 (LocalDB 2019)"
        },
        check: "run",
        expected: "North 2025-01-01 100 NULL 100\nNorth 2025-01-02 150 100 250\nNorth 2025-01-03 150 150 400\nSouth 2025-01-01 80 NULL 80\nSouth 2025-01-02 120 80 200\nNorth 2 150\nSouth 5 120",
        src: `CREATE TABLE dbo.Sales (SaleId int PRIMARY KEY, Region varchar(10) NOT NULL, SaleDate date NOT NULL, Amount int NOT NULL);
INSERT dbo.Sales (SaleId, Region, SaleDate, Amount) VALUES
 (1,'North','2025-01-01',100),(2,'North','2025-01-02',150),(3,'North','2025-01-03',150),
 (4,'South','2025-01-01',80),(5,'South','2025-01-02',120);

-- Per region: previous amount (LAG) and a running total with an explicit ROWS frame
SELECT Region, SaleDate, Amount,
       LAG(Amount) OVER (PARTITION BY Region ORDER BY SaleDate, SaleId) AS PrevAmount,
       SUM(Amount) OVER (PARTITION BY Region ORDER BY SaleDate, SaleId
                         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS RunningTotal
FROM dbo.Sales
ORDER BY Region, SaleDate, SaleId;

-- Top-1 per group: ROW_NUMBER with a unique tie-breaker, filtered in an outer query
SELECT Region, SaleId, Amount
FROM (SELECT Region, SaleId, Amount,
             ROW_NUMBER() OVER (PARTITION BY Region ORDER BY Amount DESC, SaleId) AS rn
      FROM dbo.Sales) AS s
WHERE rn = 1
ORDER BY Region;`
      }]
    },
    {
      id: "sniffing-in-code",
      depth: "detailed",
      title: {
        en: "Parameter sniffing in code: skewed data and the fixes",
        hi: "Code में parameter sniffing: skewed data और fixes",
        hg: "Code mein parameter sniffing: skewed data aur fixes"
      },
      body: {
        en: `<p><b>Analogy — a courier's route plan:</b> the first parcel of the day goes to a lane with one house, so the courier plans "walk". The next parcel is for a society of 5,000 flats, but the cached plan still says "walk". A good plan for one case is a bad plan for another.</p>
<ul>
<li>The table is deliberately skewed: 5,000 closed tickets and 3 open ones, with an index on <code>Status</code>. For <code>'Open'</code> a seek plus lookups is best; for <code>'Closed'</code> a scan is best.</li>
<li><code>TicketsByStatus</code> is the problem shape: whichever value runs first decides the cached plan.</li>
<li><code>_Recompile</code> compiles every time: perfect plan, extra CPU per call. Fine for a rare report, wrong for a 500-calls-per-second endpoint.</li>
<li><code>_Unknown</code> uses the density average: a stable "middle" plan, mediocre for both extremes.</li>
<li><b>Query Store</b> is on, so after a regression you can compare plans per query and, if needed, force the earlier plan (<code>sp_query_store_force_plan</code>). On SQL Server 2022 with compatibility level 160, PSP optimization may keep several plans for such a query automatically; check on your version before relying on it.</li>
<li>The output only counts rows; the plan difference is visible in SSMS (actual plan) or Query Store, which is why a TL checks plans, not results.</li>
</ul>
<p><b>When to use:</b> RECOMPILE for rare heavy queries, OPTIMIZE FOR UNKNOWN when no single value dominates, Query Store forcing as a quick safety net, a split procedure when two shapes of data need two shapes of plan. <b>When not:</b> do not add RECOMPILE to every procedure (compile cost and plan-cache churn), and do not "fix" sniffing with a local-variable copy of the parameter without knowing it changes the plan to the average one.</p>`,
        hi: `<p><b>Analogy — courier का route plan:</b> दिन का पहला parcel ऐसी गली में जाता है जहाँ एक ही घर है, तो courier "पैदल" plan बनाता है। अगला parcel 5,000 flats की society का है, पर cached plan अब भी "पैदल" कहता है। एक case का अच्छा plan दूसरे case के लिए बुरा होता है।</p>
<ul>
<li>Table जानबूझकर skewed है: 5,000 closed tickets और 3 open, <code>Status</code> पर index के साथ। <code>'Open'</code> के लिए seek और lookups सबसे अच्छे हैं; <code>'Closed'</code> के लिए scan।</li>
<li><code>TicketsByStatus</code> problem वाली shape है: जो value पहले चले वही cached plan तय करती है।</li>
<li><code>_Recompile</code> हर बार compile करता है: perfect plan, हर call पर extra CPU। Rare report के लिए ठीक, 500-calls-per-second वाले endpoint के लिए ग़लत।</li>
<li><code>_Unknown</code> density average use करता है: स्थिर "बीच वाला" plan, दोनों extremes के लिए average।</li>
<li><b>Query Store</b> ON है, इसलिए regression के बाद हर query के plans compare कर सकते हो और ज़रूरत हो तो पुराना plan force (<code>sp_query_store_force_plan</code>)। SQL Server 2022 में compatibility level 160 पर PSP optimization ऐसी query के लिए कई plans अपने आप रख सकता है; भरोसा करने से पहले अपने version पर check करो।</li>
<li>Output सिर्फ़ rows गिनता है; plan का फ़र्क़ SSMS (actual plan) या Query Store में दिखता है, इसीलिए TL results नहीं, plans देखता है।</li>
</ul>
<p><b>कब use करें:</b> rare heavy queries के लिए RECOMPILE, जब कोई एक value हावी न हो तब OPTIMIZE FOR UNKNOWN, quick safety net के लिए Query Store forcing, जब दो तरह के data को दो तरह के plans चाहिए तो split procedure। <b>कब नहीं:</b> हर procedure में RECOMPILE मत जोड़ो (compile cost और plan-cache churn), और parameter की local-variable copy से sniffing "fix" मत करो जब तक न पता हो कि इससे plan average वाला बन जाता है।</p>`,
        hg: `<p><b>Analogy — courier ka route plan:</b> din ka pehla parcel aisi gali mein jaata hai jahan ek hi ghar hai, to courier "paidal" plan banata hai. Agla parcel 5,000 flats ki society ka hai, par cached plan ab bhi "paidal" kehta hai. Ek case ka achha plan doosre case ke liye bura hota hai.</p>
<ul>
<li>Table jaanbujhkar skewed hai: 5,000 closed tickets aur 3 open, <code>Status</code> par index ke saath. <code>'Open'</code> ke liye seek aur lookups sabse achhe hain; <code>'Closed'</code> ke liye scan.</li>
<li><code>TicketsByStatus</code> problem wali shape hai: jo value pehle chale wahi cached plan tay karti hai.</li>
<li><code>_Recompile</code> har baar compile karta hai: perfect plan, har call par extra CPU. Rare report ke liye theek, 500-calls-per-second wale endpoint ke liye galat.</li>
<li><code>_Unknown</code> density average use karta hai: sthir "beech wala" plan, dono extremes ke liye average.</li>
<li><b>Query Store</b> ON hai, isliye regression ke baad har query ke plans compare kar sakte ho aur zaroorat ho to purana plan force (<code>sp_query_store_force_plan</code>). SQL Server 2022 mein compatibility level 160 par PSP optimization aisi query ke liye kai plans apne aap rakh sakta hai; bharosa karne se pehle apne version par check karo.</li>
<li>Output sirf rows ginta hai; plan ka farq SSMS (actual plan) ya Query Store mein dikhta hai, isiliye TL results nahi, plans dekhta hai.</li>
</ul>
<p><b>Kab use karein:</b> rare heavy queries ke liye RECOMPILE, jab koi ek value haavi na ho tab OPTIMIZE FOR UNKNOWN, quick safety net ke liye Query Store forcing, jab do tarah ke data ko do tarah ke plans chahiye to split procedure. <b>Kab nahi:</b> har procedure mein RECOMPILE mat jodo (compile cost aur plan-cache churn), aur parameter ki local-variable copy se sniffing "fix" mat karo jab tak na pata ho ki isse plan average wala ban jaata hai.</p>`
      },
      code: [{
        lang: "sql",
        caption: {
          en: "A skewed table, the sniffing-prone procedure, two fixes, and Query Store switched on (LocalDB 2019; output counts rows only)",
          hi: "Skewed table, sniffing वाली procedure, दो fixes, और Query Store ON (LocalDB 2019; output सिर्फ़ rows गिनता है)",
          hg: "Skewed table, sniffing wali procedure, do fixes, aur Query Store ON (LocalDB 2019; output sirf rows ginta hai)"
        },
        check: "run",
        expected: "open_rows 3\nclosed_rows 5000",
        src: `CREATE TABLE dbo.Tickets (TicketId int IDENTITY(1,1) PRIMARY KEY, Status varchar(10) NOT NULL, Title varchar(50) NOT NULL);
CREATE INDEX IX_Tickets_Status ON dbo.Tickets (Status);
-- Skewed data: 5000 closed, 3 open
INSERT dbo.Tickets (Status, Title)
SELECT TOP (5000) 'Closed', 'old' FROM sys.all_objects AS a CROSS JOIN sys.all_objects AS b;
INSERT dbo.Tickets (Status, Title) VALUES ('Open','a'),('Open','b'),('Open','c');
GO
-- Problem shape: the first caller's @status decides the cached plan for everyone
CREATE PROCEDURE dbo.TicketsByStatus @status varchar(10)
AS
    SELECT TicketId, Title FROM dbo.Tickets WHERE Status = @status;
GO
-- Fix 1: compile for this call only (CPU on every execution; fine for rare, heavy reports)
CREATE PROCEDURE dbo.TicketsByStatus_Recompile @status varchar(10)
AS
    SELECT TicketId, Title FROM dbo.Tickets WHERE Status = @status OPTION (RECOMPILE);
GO
-- Fix 2: plan for the average value instead of the sniffed one
CREATE PROCEDURE dbo.TicketsByStatus_Unknown @status varchar(10)
AS
    SELECT TicketId, Title FROM dbo.Tickets WHERE Status = @status OPTION (OPTIMIZE FOR (@status UNKNOWN));
GO
-- Query Store keeps plan history per query: find the regression, force a good plan if needed
ALTER DATABASE CURRENT SET QUERY_STORE = ON;
GO
CREATE TABLE #r (TicketId int, Title varchar(50));
INSERT #r EXEC dbo.TicketsByStatus 'Open';
SELECT 'open_rows', COUNT(*) FROM #r;
DELETE #r;
INSERT #r EXEC dbo.TicketsByStatus_Recompile 'Closed';
SELECT 'closed_rows', COUNT(*) FROM #r;`
      }]
    },
    {
      id: "programmability-in-code",
      depth: "detailed",
      title: {
        en: "Functions and temp storage in code: inline TVF, scalar UDF inlining, temp table vs table variable",
        hi: "Code में functions और temp storage: inline TVF, scalar UDF inlining, temp table बनाम table variable",
        hg: "Code mein functions aur temp storage: inline TVF, scalar UDF inlining, temp table vs table variable"
      },
      body: {
        en: `<p><b>Analogy — a recipe card vs a cook:</b> an <b>inline table function</b> is a recipe card the chef reads and merges into the dish (the optimizer expands it into the outer query). A multi-statement function or an old scalar UDF is a separate cook you call for every plate: opaque to the optimizer and slow at scale.</p>
<ul>
<li><b>Inline TVF</b> (<code>RETURNS TABLE AS RETURN SELECT ...</code>): behaves like a parameterised view; it gets real statistics and can be combined with other joins and filters. Prefer it to a multi-statement TVF (<code>@t TABLE ... INSERT ...</code>), which is a black box: fixed estimates (1 row before SQL Server 2014, 100 rows from 2014; interleaved execution fixes this from SQL Server 2017 at compatibility level 140).</li>
<li><b>Scalar UDF:</b> before SQL Server 2019 it ran <b>once per row</b>, prevented parallelism and hid its cost from the plan. <b>Scalar UDF inlining</b> (SQL Server 2019, compatibility level 150) rewrites many simple ones into the query. <code>sys.sql_modules.is_inlineable</code> tells you; the snippet prints 1 for <code>WithGst</code>. Anything with loops, certain functions or table variables may not inline.</li>
<li><b>Stored procedure vs function:</b> a procedure can do DML, transactions and return several result sets; a function must be side-effect free and can sit inside a query. Procedures are the unit of deployment, permissions and plan reuse; EF Core (Day 6) is often enough, but procedures fit set-based batch work and strict permission models.</li>
<li><b>Temp table</b> (<code>#t</code>): lives in tempdb, has <b>statistics</b> and can have indexes, is visible to child procedures, and takes part in rollback. <b>Table variable</b> (<code>@t</code>): no column statistics, and it is <b>not rolled back</b> by <code>ROLLBACK</code> of the surrounding transaction (the last query shows 2 table-variable rows and 3 temp-table rows). Before SQL Server 2019 the optimizer assumed 1 row for it; <b>deferred compilation</b> (2019, compat 150) uses the real count at first execution, still without value statistics.</li>
<li>Rule of thumb: small and few rows or a TVP: table variable; more than a few hundred rows, joins, or need statistics: temp table.</li>
</ul>
<p><b>When to use:</b> inline TVFs for reusable filters/joins, temp tables to break up a big query into measured steps, procedures for batch jobs and permission boundaries. <b>When not:</b> avoid multi-statement TVFs and scalar UDFs on large sets (check <code>is_inlineable</code>), and do not use a CTE where you really want a materialised temp table.</p>`,
        hi: `<p><b>Analogy — recipe card बनाम cook:</b> <b>inline table function</b> एक recipe card है जिसे chef पढ़कर dish में मिला लेता है (optimizer उसे outer query में expand कर देता है)। Multi-statement function या पुराना scalar UDF एक अलग cook है जिसे हर plate के लिए बुलाना पड़ता है: optimizer को opaque और scale पर slow।</p>
<ul>
<li><b>Inline TVF</b> (<code>RETURNS TABLE AS RETURN SELECT ...</code>): parameterised view जैसा चलता है; उसे असली statistics मिलती हैं और वह दूसरे joins और filters के साथ मिल सकता है। Multi-statement TVF (<code>@t TABLE ... INSERT ...</code>) से बेहतर, जो black box है: fixed estimates (SQL Server 2014 से पहले 1 row, 2014 से 100 rows; interleaved execution इसे SQL Server 2017 में compatibility level 140 पर ठीक करता है)।</li>
<li><b>Scalar UDF:</b> SQL Server 2019 से पहले यह <b>हर row के लिए एक बार</b> चलता था, parallelism रोकता था और अपना cost plan से छुपाता था। <b>Scalar UDF inlining</b> (SQL Server 2019, compatibility level 150) कई simple UDFs को query में rewrite कर देता है। <code>sys.sql_modules.is_inlineable</code> बताता है; snippet <code>WithGst</code> के लिए 1 print करता है। Loops, कुछ functions या table variables वाला UDF inline न भी हो।</li>
<li><b>Stored procedure बनाम function:</b> procedure DML, transactions और कई result sets कर सकता है; function side-effect free होना चाहिए और query के अंदर बैठ सकता है। Procedures deployment, permissions और plan reuse की इकाई हैं; EF Core (Day 6) अक्सर काफ़ी है, पर procedures set-based batch काम और सख़्त permission models में फ़िट होते हैं।</li>
<li><b>Temp table</b> (<code>#t</code>): tempdb में रहती है, उस पर <b>statistics</b> होती हैं और indexes बन सकते हैं, child procedures को दिखती है, और rollback में हिस्सा लेती है। <b>Table variable</b> (<code>@t</code>): column statistics नहीं, और आसपास की transaction के <code>ROLLBACK</code> से यह <b>rollback नहीं होता</b> (आख़िरी query में table-variable की 2 rows और temp-table की 3 rows दिखती हैं)। SQL Server 2019 से पहले optimizer इसे 1 row मानता था; <b>deferred compilation</b> (2019, compat 150) पहली execution पर असली count use करता है, पर value statistics फिर भी नहीं।</li>
<li>Rule of thumb: छोटा और कम rows या TVP: table variable; कुछ सौ rows से ज़्यादा, joins, या statistics चाहिए: temp table।</li>
</ul>
<p><b>कब use करें:</b> reusable filters/joins के लिए inline TVFs, बड़ी query को measured steps में तोड़ने के लिए temp tables, batch jobs और permission boundaries के लिए procedures। <b>कब नहीं:</b> बड़े sets पर multi-statement TVFs और scalar UDFs से बचो (<code>is_inlineable</code> देखो), और जहाँ materialised temp table चाहिए वहाँ CTE मत लगाओ।</p>`,
        hg: `<p><b>Analogy — recipe card vs cook:</b> <b>inline table function</b> ek recipe card hai jise chef padhkar dish mein mila leta hai (optimizer use outer query mein expand kar deta hai). Multi-statement function ya purana scalar UDF ek alag cook hai jise har plate ke liye bulana padta hai: optimizer ko opaque aur scale par slow.</p>
<ul>
<li><b>Inline TVF</b> (<code>RETURNS TABLE AS RETURN SELECT ...</code>): parameterised view jaisa chalta hai; use asli statistics milti hain aur woh doosre joins aur filters ke saath mil sakta hai. Multi-statement TVF (<code>@t TABLE ... INSERT ...</code>) se behtar, jo black box hai: fixed estimates (SQL Server 2014 se pehle 1 row, 2014 se 100 rows; interleaved execution ise SQL Server 2017 mein compatibility level 140 par theek karta hai).</li>
<li><b>Scalar UDF:</b> SQL Server 2019 se pehle yeh <b>har row ke liye ek baar</b> chalta tha, parallelism rokta tha aur apna cost plan se chhupata tha. <b>Scalar UDF inlining</b> (SQL Server 2019, compatibility level 150) kai simple UDFs ko query mein rewrite kar deta hai. <code>sys.sql_modules.is_inlineable</code> batata hai; snippet <code>WithGst</code> ke liye 1 print karta hai. Loops, kuch functions ya table variables wala UDF inline na bhi ho.</li>
<li><b>Stored procedure vs function:</b> procedure DML, transactions aur kai result sets kar sakta hai; function side-effect free hona chahiye aur query ke andar baith sakta hai. Procedures deployment, permissions aur plan reuse ki ikaai hain; EF Core (Day 6) aksar kaafi hai, par procedures set-based batch kaam aur sakht permission models mein fit hote hain.</li>
<li><b>Temp table</b> (<code>#t</code>): tempdb mein rehti hai, us par <b>statistics</b> hoti hain aur indexes ban sakte hain, child procedures ko dikhti hai, aur rollback mein hissa leti hai. <b>Table variable</b> (<code>@t</code>): column statistics nahi, aur aaspaas ki transaction ke <code>ROLLBACK</code> se yeh <b>rollback nahi hota</b> (aakhri query mein table-variable ki 2 rows aur temp-table ki 3 rows dikhti hain). SQL Server 2019 se pehle optimizer ise 1 row maanta tha; <b>deferred compilation</b> (2019, compat 150) pehli execution par asli count use karta hai, par value statistics phir bhi nahi.</li>
<li>Rule of thumb: chhota aur kam rows ya TVP: table variable; kuch sau rows se zyaada, joins, ya statistics chahiye: temp table.</li>
</ul>
<p><b>Kab use karein:</b> reusable filters/joins ke liye inline TVFs, badi query ko measured steps mein todne ke liye temp tables, batch jobs aur permission boundaries ke liye procedures. <b>Kab nahi:</b> bade sets par multi-statement TVFs aur scalar UDFs se bacho (<code>is_inlineable</code> dekho), aur jahan materialised temp table chahiye wahan CTE mat lagao.</p>`
      },
      code: [{
        lang: "sql",
        caption: {
          en: "Inline TVF, an inlineable scalar UDF, temp table vs table variable under ROLLBACK (LocalDB 2019)",
          hi: "Inline TVF, inline हो सकने वाला scalar UDF, ROLLBACK में temp table बनाम table variable (LocalDB 2019)",
          hg: "Inline TVF, inline ho sakne wala scalar UDF, ROLLBACK mein temp table vs table variable (LocalDB 2019)"
        },
        check: "run",
        expected: "1\n1 800.00 944.00\n2 1100.00 1298.00\n3\n2 3",
        src: `CREATE TABLE dbo.Orders (OrderId int PRIMARY KEY, CustomerId int NOT NULL, Total decimal(10,2) NOT NULL);
INSERT dbo.Orders (OrderId, CustomerId, Total) VALUES (1,1,500),(2,1,300),(3,2,200),(4,2,900),(5,3,100);
GO
-- Inline table-valued function: one RETURN SELECT, the optimizer expands it into the calling query
CREATE FUNCTION dbo.CustomerTotals (@minTotal decimal(10,2))
RETURNS TABLE
AS RETURN
    SELECT CustomerId, SUM(Total) AS Spent FROM dbo.Orders GROUP BY CustomerId HAVING SUM(Total) >= @minTotal;
GO
-- Scalar UDF written so SQL Server 2019+ can inline it (compatibility level 150+)
CREATE FUNCTION dbo.WithGst (@amount decimal(10,2))
RETURNS decimal(10,2)
AS BEGIN RETURN @amount * 1.18; END;
GO
SELECT is_inlineable FROM sys.sql_modules WHERE object_id = OBJECT_ID('dbo.WithGst');
SELECT t.CustomerId, t.Spent, dbo.WithGst(t.Spent) AS WithTax FROM dbo.CustomerTotals(250) AS t ORDER BY t.CustomerId;
GO
-- Temp table: has statistics and indexes, takes part in rollback
CREATE TABLE #big (CustomerId int PRIMARY KEY, Spent decimal(10,2));
INSERT #big (CustomerId, Spent) SELECT CustomerId, Spent FROM dbo.CustomerTotals(0);
SELECT COUNT(*) AS temp_rows FROM #big;
-- Table variable: its rows survive a ROLLBACK of the surrounding transaction
DECLARE @tv TABLE (Id int);
BEGIN TRAN;
INSERT @tv (Id) VALUES (1),(2);
INSERT #big (CustomerId, Spent) VALUES (99, 1);
ROLLBACK;
SELECT (SELECT COUNT(*) FROM @tv) AS table_var_rows, (SELECT COUNT(*) FROM #big) AS temp_table_rows;`
      }]
    },
    {
      id: "transactions-in-code",
      depth: "detailed",
      title: {
        en: "Transactions in code: ordered updates, retry on 1205, RCSI and SNAPSHOT",
        hi: "Code में transactions: ordered updates, 1205 पर retry, RCSI और SNAPSHOT",
        hg: "Code mein transactions: ordered updates, 1205 par retry, RCSI aur SNAPSHOT"
      },
      body: {
        en: `<p><b>Analogy — two people crossing a narrow lane:</b> if both always keep to the left, they pass. If one steps left and the other steps right toward each other's spot, they freeze. A fixed rule (always lock the lower account id first) stops the freeze.</p>
<ul>
<li><code>Transfer</code> updates the <b>lower AccountId first</b>, whatever the direction, so two opposite transfers (1 to 2, 2 to 1) queue up instead of deadlocking.</li>
<li>The transaction is <b>short</b> (two updates, then commit); <code>SET XACT_ABORT ON</code> makes any runtime error roll the transaction back.</li>
<li>Error <b>1205</b> (deadlock victim) is retried up to three times; any other error, such as the check constraint 547 on an overdraft, is re-thrown with <code>THROW</code>. The last two selects prove the failed transfer changed nothing.</li>
<li>The second snippet turns on <b>RCSI</b> and <b>SNAPSHOT</b>. Switching RCSI needs exclusive access to the database for a moment (<code>WITH ROLLBACK IMMEDIATE</code> disconnects others), so plan it for a quiet window. Test the tempdb version-store load first.</li>
<li>The third snippet reads deadlock graphs from <code>system_health</code> (ring buffer here; the event files hold more history). It is not run here because LocalDB has no deadlocks to show.</li>
<li>In application code the retry belongs in the caller or in a resilience policy (Day 13); with EF Core the execution strategy (Day 6) covers transient connection errors, not deadlock logic you must design.</li>
</ul>
<p><b>When to use:</b> ordered access plus a bounded retry for hot, contended rows; RCSI for read-heavy systems with reader/writer blocking; SNAPSHOT for consistent reports. <b>When not:</b> do not retry non-idempotent work blindly outside the transaction (an email or payment call); do not switch RCSI on production without checking code that relies on blocking reads (some "queue table" patterns do).</p>`,
        hi: `<p><b>Analogy — संकरी गली पार करते दो लोग:</b> दोनों हमेशा बाईं तरफ़ चलें तो निकल जाते हैं। एक बाएँ और दूसरा दाएँ, एक-दूसरे की जगह की तरफ़ जाएँ तो अटक जाते हैं। एक तय नियम (हमेशा कम account id पहले lock करो) अटकना रोकता है।</p>
<ul>
<li><code>Transfer</code> direction कोई भी हो, <b>पहले कम AccountId</b> update करता है, इसलिए दो उल्टे transfers (1 से 2, 2 से 1) deadlock की जगह कतार में लगते हैं।</li>
<li>Transaction <b>short</b> है (दो updates, फिर commit); <code>SET XACT_ABORT ON</code> किसी भी runtime error पर transaction rollback करवा देता है।</li>
<li>Error <b>1205</b> (deadlock victim) तीन बार तक retry होता है; कोई और error, जैसे overdraft पर check constraint 547, <code>THROW</code> से फिर फेंका जाता है। आख़िरी दो selects साबित करते हैं कि failed transfer ने कुछ नहीं बदला।</li>
<li>दूसरा snippet <b>RCSI</b> और <b>SNAPSHOT</b> ON करता है। RCSI बदलने के लिए database पर पल भर exclusive access चाहिए (<code>WITH ROLLBACK IMMEDIATE</code> बाक़ी connections काट देता है), इसलिए शांत window में करो। पहले tempdb version-store का load test करो।</li>
<li>तीसरा snippet <code>system_health</code> से deadlock graphs पढ़ता है (यहाँ ring buffer; event files में ज़्यादा history होती है)। यह यहाँ चलाया नहीं गया क्योंकि LocalDB में दिखाने लायक़ deadlocks नहीं हैं।</li>
<li>Application code में retry caller में या resilience policy में (Day 13) लगता है; EF Core में execution strategy (Day 6) transient connection errors संभालती है, deadlock logic नहीं जो तुम्हें design करना है।</li>
</ul>
<p><b>कब use करें:</b> hot, contended rows के लिए ordered access और bounded retry; reader/writer blocking वाले read-heavy systems के लिए RCSI; consistent reports के लिए SNAPSHOT। <b>कब नहीं:</b> transaction के बाहर non-idempotent काम (email या payment call) को आँख मूँदकर retry मत करो; production में RCSI ON करने से पहले उस code को देखो जो blocking reads पर टिका है (कुछ "queue table" patterns ऐसे हैं)।</p>`,
        hg: `<p><b>Analogy — sankri gali paar karte do log:</b> dono hamesha baayein chalein to nikal jaate hain. Ek baayein aur doosra daayein, ek-doosre ki jagah ki taraf jaayein to atak jaate hain. Ek tay niyam (hamesha kam account id pehle lock karo) atakna rokta hai.</p>
<ul>
<li><code>Transfer</code> direction koi bhi ho, <b>pehle kam AccountId</b> update karta hai, isliye do ulte transfers (1 se 2, 2 se 1) deadlock ki jagah qatar mein lagte hain.</li>
<li>Transaction <b>short</b> hai (do updates, phir commit); <code>SET XACT_ABORT ON</code> kisi bhi runtime error par transaction rollback karwa deta hai.</li>
<li>Error <b>1205</b> (deadlock victim) teen baar tak retry hota hai; koi aur error, jaise overdraft par check constraint 547, <code>THROW</code> se phir phenka jaata hai. Aakhri do selects saabit karte hain ki failed transfer ne kuch nahi badla.</li>
<li>Doosra snippet <b>RCSI</b> aur <b>SNAPSHOT</b> ON karta hai. RCSI badalne ke liye database par pal bhar exclusive access chahiye (<code>WITH ROLLBACK IMMEDIATE</code> baaki connections kaat deta hai), isliye shaant window mein karo. Pehle tempdb version-store ka load test karo.</li>
<li>Teesra snippet <code>system_health</code> se deadlock graphs padhta hai (yahan ring buffer; event files mein zyaada history hoti hai). Yeh yahan chalaya nahi gaya kyunki LocalDB mein dikhane laayak deadlocks nahi hain.</li>
<li>Application code mein retry caller mein ya resilience policy mein (Day 13) lagta hai; EF Core mein execution strategy (Day 6) transient connection errors sambhalti hai, deadlock logic nahi jo tumhe design karna hai.</li>
</ul>
<p><b>Kab use karein:</b> hot, contended rows ke liye ordered access aur bounded retry; reader/writer blocking wale read-heavy systems ke liye RCSI; consistent reports ke liye SNAPSHOT. <b>Kab nahi:</b> transaction ke bahar non-idempotent kaam (email ya payment call) ko aankh moondkar retry mat karo; production mein RCSI ON karne se pehle us code ko dekho jo blocking reads par tika hai (kuch "queue table" patterns aise hain).</p>`
      },
      code: [{
        lang: "sql",
        caption: {
          en: "Transfer with ordered updates, XACT_ABORT and a bounded retry on deadlock victim 1205 (LocalDB 2019)",
          hi: "Ordered updates, XACT_ABORT और deadlock victim 1205 पर bounded retry वाला Transfer (LocalDB 2019)",
          hg: "Ordered updates, XACT_ABORT aur deadlock victim 1205 par bounded retry wala Transfer (LocalDB 2019)"
        },
        check: "run",
        expected: "1 1200.00\n2 300.00\nfailed: 547\n1 1200.00\n2 300.00",
        src: `CREATE TABLE dbo.Accounts (AccountId int PRIMARY KEY, Balance decimal(10,2) NOT NULL, CONSTRAINT CK_Balance CHECK (Balance >= 0));
INSERT dbo.Accounts (AccountId, Balance) VALUES (1, 1000), (2, 500);
GO
-- Short transaction; rows are always updated in AccountId order, whatever the transfer direction;
-- a deadlock victim (error 1205) is retried a few times
CREATE PROCEDURE dbo.Transfer @from int, @to int, @amount decimal(10,2)
AS
BEGIN
    SET NOCOUNT ON;
    SET XACT_ABORT ON;
    DECLARE @try int = 1;
    DECLARE @low int = IIF(@from < @to, @from, @to);
    DECLARE @high int = IIF(@from < @to, @to, @from);
    WHILE @try <= 3
    BEGIN
        BEGIN TRY
            BEGIN TRAN;
            UPDATE dbo.Accounts SET Balance += IIF(AccountId = @to, @amount, -@amount) WHERE AccountId = @low;
            UPDATE dbo.Accounts SET Balance += IIF(AccountId = @to, @amount, -@amount) WHERE AccountId = @high;
            COMMIT;
            RETURN 0;
        END TRY
        BEGIN CATCH
            IF XACT_STATE() <> 0 ROLLBACK;
            IF ERROR_NUMBER() = 1205 AND @try < 3
            BEGIN
                SET @try += 1;
                CONTINUE;
            END;
            THROW;
        END CATCH;
    END;
END;
GO
EXEC dbo.Transfer 2, 1, 200;
SELECT AccountId, Balance FROM dbo.Accounts ORDER BY AccountId;
BEGIN TRY
    EXEC dbo.Transfer 2, 1, 5000;
END TRY
BEGIN CATCH
    PRINT 'failed: ' + CAST(ERROR_NUMBER() AS varchar(10));
END CATCH;
SELECT AccountId, Balance FROM dbo.Accounts ORDER BY AccountId;`
      }, {
        lang: "sql",
        caption: {
          en: "Switch on RCSI and SNAPSHOT for a database (needs a quiet moment; LocalDB 2019 throw-away database)",
          hi: "Database पर RCSI और SNAPSHOT ON करना (शांत समय चाहिए; LocalDB 2019 का throw-away database)",
          hg: "Database par RCSI aur SNAPSHOT ON karna (shaant samay chahiye; LocalDB 2019 ka throw-away database)"
        },
        check: "run",
        expected: "1 ON",
        src: `ALTER DATABASE CURRENT SET ALLOW_SNAPSHOT_ISOLATION ON;
ALTER DATABASE CURRENT SET READ_COMMITTED_SNAPSHOT ON WITH ROLLBACK IMMEDIATE;
SELECT is_read_committed_snapshot_on, snapshot_isolation_state_desc FROM sys.databases WHERE name = DB_NAME();`
      }, {
        lang: "sql",
        caption: {
          en: "Read recent deadlock graphs from the always-on system_health session (not run: LocalDB has no deadlocks to show)",
          hi: "हमेशा चालू system_health session से हाल के deadlock graphs पढ़ना (चलाया नहीं: LocalDB में दिखाने को deadlocks नहीं)",
          hg: "Hamesha chalu system_health session se haal ke deadlock graphs padhna (chalaya nahi: LocalDB mein dikhane ko deadlocks nahi)"
        },
        check: "none",
        src: `SELECT x.n.query('.') AS deadlock_event
FROM (SELECT CAST(st.target_data AS xml) AS target_xml
      FROM sys.dm_xe_session_targets AS st
      JOIN sys.dm_xe_sessions AS s ON s.address = st.event_session_address
      WHERE s.name = N'system_health' AND st.target_name = N'ring_buffer') AS t
CROSS APPLY t.target_xml.nodes('RingBufferTarget/event[@name="xml_deadlock_report"]') AS x(n);`
      }]
    },
    {
      id: "tuning-checklist",
      depth: "detailed",
      title: {
        en: "The tuning checklist: how a TL investigates a slow query in production",
        hi: "Tuning checklist: TL production में slow query कैसे investigate करता है",
        hg: "Tuning checklist: TL production mein slow query kaise investigate karta hai"
      },
      body: {
        en: `<p><b>Analogy — a doctor, not a pharmacist:</b> you do not hand out medicine before the diagnosis. Symptoms, tests, then treatment, then a follow-up check.</p>
<ul>
<li><b>1. Confirm and scope:</b> which endpoint or job, since when, always or sometimes, one tenant or all? A sudden change with no deploy points to a plan change, statistics, or a data-volume tipping point.</li>
<li><b>2. Find the statement:</b> Application Insights dependency data, Query Store (top resource consumers, regressed queries), or the DMV query below. Current waits: <code>sys.dm_exec_requests</code> and <code>wait_type</code>.</li>
<li><b>3. Is it waiting or working?</b> Blocked (locks), I/O, CPU, or memory grants. Do not tune a query that is only waiting on a blocker.</li>
<li><b>4. Read the actual plan:</b> scan vs seek, key lookups, estimated vs actual rows, warnings, spills; <code>SET STATISTICS IO, TIME ON</code> for logical reads.</li>
<li><b>5. Fix the cheapest cause first:</b> SARGability and types, statistics, a covering index, query rewrite (<code>EXISTS</code>, no row-by-row), then sniffing options. Hints and forced plans are the last tools, and they need an owner and a review date.</li>
<li><b>6. Prove and protect:</b> before/after reads, CPU and duration; deploy the index through migration scripts; watch Query Store afterwards; add an alert. Keep a rollback.</li>
<li><b>Team angle:</b> write the finding down (what, why, fix, number), review index changes like code, and keep the DMV numbers in perspective: they reset on restart.</li>
</ul>
<p><b>When to use:</b> every production slowness, in this order. <b>When not:</b> do not start with "add an index" or "scale up the tier": you may hide the cause, add write cost, and pay for it every month.</p>`,
        hi: `<p><b>Analogy — doctor, pharmacist नहीं:</b> diagnosis से पहले दवा नहीं बाँटते। Symptoms, tests, फिर इलाज, फिर follow-up check।</p>
<ul>
<li><b>1. Confirm और scope:</b> कौन सा endpoint या job, कब से, हमेशा या कभी-कभी, एक tenant या सब? Deploy के बिना अचानक बदलाव plan change, statistics, या data-volume के tipping point की तरफ़ इशारा करता है।</li>
<li><b>2. Statement ढूँढो:</b> Application Insights dependency data, Query Store (top resource consumers, regressed queries), या नीचे वाली DMV query। अभी की waits: <code>sys.dm_exec_requests</code> और <code>wait_type</code>।</li>
<li><b>3. यह इंतज़ार कर रही है या काम?</b> Blocked (locks), I/O, CPU, या memory grants। जो query सिर्फ़ किसी blocker का इंतज़ार कर रही है उसे tune मत करो।</li>
<li><b>4. Actual plan पढ़ो:</b> scan बनाम seek, key lookups, estimated बनाम actual rows, warnings, spills; logical reads के लिए <code>SET STATISTICS IO, TIME ON</code>।</li>
<li><b>5. सबसे सस्ती वजह पहले ठीक करो:</b> SARGability और types, statistics, covering index, query rewrite (<code>EXISTS</code>, row-by-row नहीं), फिर sniffing options। Hints और forced plans आख़िरी औज़ार हैं, और उनका एक owner और review date होनी चाहिए।</li>
<li><b>6. साबित करो और बचाव रखो:</b> पहले/बाद के reads, CPU और duration; index को migration scripts से deploy करो; बाद में Query Store देखो; alert लगाओ। Rollback रखो।</li>
<li><b>Team angle:</b> finding लिख लो (क्या, क्यों, fix, number), index changes को code की तरह review करो, और DMV numbers को सही perspective में रखो: restart पर वे reset होते हैं।</li>
</ul>
<p><b>कब use करें:</b> हर production slowness में, इसी क्रम में। <b>कब नहीं:</b> "index जोड़ दो" या "tier बढ़ा दो" से शुरू मत करो: वजह छुप सकती है, write cost बढ़ती है, और हर महीने उसका पैसा देना पड़ता है।</p>`,
        hg: `<p><b>Analogy — doctor, pharmacist nahi:</b> diagnosis se pehle dawa nahi baantte. Symptoms, tests, phir ilaaj, phir follow-up check.</p>
<ul>
<li><b>1. Confirm aur scope:</b> kaun sa endpoint ya job, kab se, hamesha ya kabhi-kabhi, ek tenant ya sab? Deploy ke bina achanak badlaav plan change, statistics, ya data-volume ke tipping point ki taraf ishaara karta hai.</li>
<li><b>2. Statement dhoondho:</b> Application Insights dependency data, Query Store (top resource consumers, regressed queries), ya neeche wali DMV query. Abhi ki waits: <code>sys.dm_exec_requests</code> aur <code>wait_type</code>.</li>
<li><b>3. Yeh intezaar kar rahi hai ya kaam?</b> Blocked (locks), I/O, CPU, ya memory grants. Jo query sirf kisi blocker ka intezaar kar rahi hai use tune mat karo.</li>
<li><b>4. Actual plan padho:</b> scan vs seek, key lookups, estimated vs actual rows, warnings, spills; logical reads ke liye <code>SET STATISTICS IO, TIME ON</code>.</li>
<li><b>5. Sabse sasti wajah pehle theek karo:</b> SARGability aur types, statistics, covering index, query rewrite (<code>EXISTS</code>, row-by-row nahi), phir sniffing options. Hints aur forced plans aakhri auzaar hain, aur unka ek owner aur review date honi chahiye.</li>
<li><b>6. Saabit karo aur bachaav rakho:</b> pehle/baad ke reads, CPU aur duration; index ko migration scripts se deploy karo; baad mein Query Store dekho; alert lagao. Rollback rakho.</li>
<li><b>Team angle:</b> finding likh lo (kya, kyon, fix, number), index changes ko code ki tarah review karo, aur DMV numbers ko sahi perspective mein rakho: restart par woh reset hote hain.</li>
</ul>
<p><b>Kab use karein:</b> har production slowness mein, isi kram mein. <b>Kab nahi:</b> "index jod do" ya "tier badha do" se shuru mat karo: wajah chhup sakti hai, write cost badhti hai, aur har mahine uska paisa dena padta hai.</p>`
      },
      code: [{
        lang: "sql",
        caption: {
          en: "Top statements by CPU from the plan cache: a starting point to find the culprit (compiles and runs on LocalDB; output depends on the server, so it is not compared)",
          hi: "Plan cache से CPU के हिसाब से top statements: दोषी ढूँढने की शुरुआत (LocalDB पर compile और run होता है; output server पर निर्भर है, इसलिए compare नहीं किया)",
          hg: "Plan cache se CPU ke hisaab se top statements: doshi dhoondhne ki shuruaat (LocalDB par compile aur run hota hai; output server par nirbhar hai, isliye compare nahi kiya)"
        },
        check: "compile",
        src: `-- Top 5 statements by total CPU since the plan was cached (a starting point, not the truth: the cache is cleared on restart)
SELECT TOP (5)
       qs.execution_count,
       qs.total_worker_time / 1000 AS total_cpu_ms,
       qs.total_logical_reads,
       SUBSTRING(st.text, qs.statement_start_offset / 2 + 1,
                 (CASE qs.statement_end_offset WHEN -1 THEN DATALENGTH(st.text) ELSE qs.statement_end_offset END
                  - qs.statement_start_offset) / 2 + 1) AS statement_text
FROM sys.dm_exec_query_stats AS qs
CROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) AS st
ORDER BY qs.total_worker_time DESC;`
      }]
    },
  ],
  qa: [
    {
      id: "clustered-vs-nonclustered",
      depth: "short",
      q: "Clustered vs non-clustered index — what is the difference, and how do you choose the clustered key?",
      answer: "Clustered stores the table's rows in key order, so there is one per table. Non-clustered is a separate sorted structure pointing back to rows; choose a narrow, unique, ever-increasing clustered key.",
      meaning: {
        hi: "Clustered: table की rows key order में रखी होती हैं, इसलिए हर table में एक। Non-clustered: अलग sorted structure जो rows की तरफ़ इशारा करता है; कई हो सकते हैं। Clustered key narrow, unique और बढ़ती जाने वाली चुनो।",
        hg: "Clustered: table ki rows key order mein rakhi hoti hain, isliye har table mein ek. Non-clustered: alag sorted structure jo rows ki taraf ishaara karta hai; kai ho sakte hain. Clustered key narrow, unique aur badhti jaane wali chuno."
      },
      explain: {
        en: `<ul>
<li>Every non-clustered index stores the clustered key as its row pointer, so a wide clustered key makes <b>all</b> indexes bigger.</li>
<li>Ever-increasing keys (<code>IDENTITY</code>, sequential GUID) append at the end of the B-tree; random GUIDs cause page splits and fragmentation.</li>
<li>A table with no clustered index is a <b>heap</b>; it is sometimes fine for staging or bulk-load tables, but lookups then use a row id.</li>
<li>Follow-up: "Can the primary key be non-clustered?" Yes, it is a common choice when the natural access path is another column. "Does a clustered index guarantee row order in a query result?" No, only <code>ORDER BY</code> does.</li>
</ul>`,
        hi: `<ul>
<li>हर non-clustered index अपने row pointer के रूप में clustered key रखता है, इसलिए wide clustered key <b>सभी</b> indexes बड़े कर देती है।</li>
<li>बढ़ती जाने वाली keys (<code>IDENTITY</code>, sequential GUID) B-tree के आख़िर में जुड़ती हैं; random GUIDs से page splits और fragmentation होता है।</li>
<li>बिना clustered index वाली table <b>heap</b> है; staging या bulk-load tables के लिए कभी-कभी ठीक है, पर lookups तब row id से होते हैं।</li>
<li>Follow-up: "क्या primary key non-clustered हो सकती है?" हाँ, जब असली access path कोई दूसरा column हो तो यह आम choice है। "क्या clustered index query result में row order की guarantee देता है?" नहीं, सिर्फ़ <code>ORDER BY</code> देता है।</li>
</ul>`,
        hg: `<ul>
<li>Har non-clustered index apne row pointer ke roop mein clustered key rakhta hai, isliye wide clustered key <b>sabhi</b> indexes bade kar deti hai.</li>
<li>Badhti jaane wali keys (<code>IDENTITY</code>, sequential GUID) B-tree ke aakhir mein judti hain; random GUIDs se page splits aur fragmentation hota hai.</li>
<li>Bina clustered index wali table <b>heap</b> hai; staging ya bulk-load tables ke liye kabhi-kabhi theek hai, par lookups tab row id se hote hain.</li>
<li>Follow-up: "Kya primary key non-clustered ho sakti hai?" Haan, jab asli access path koi doosra column ho to yeh aam choice hai. "Kya clustered index query result mein row order ki guarantee deta hai?" Nahi, sirf <code>ORDER BY</code> deta hai.</li>
</ul>`
      }
    },
    {
      id: "covering-index-key-lookup",
      depth: "short",
      q: "What is a key lookup and how does a covering index with INCLUDE remove it?",
      answer: "A key lookup fetches extra columns from the clustered index once per row found. A covering index holds filter columns in its key and other needed columns in INCLUDE, so no lookup is needed.",
      meaning: {
        hi: "Key lookup हर मिली row के लिए clustered index से extra columns लाता है। Covering index में filter columns key में और बाकी ज़रूरी columns INCLUDE में होते हैं, इसलिए lookup नहीं लगता।",
        hg: "Key lookup har mili row ke liye clustered index se extra columns laata hai. Covering index mein filter columns key mein aur baaki zaroori columns INCLUDE mein hote hain, isliye lookup nahi lagta."
      },
      explain: {
        en: `<ul>
<li>In the plan: a <b>Key Lookup</b> (or RID Lookup on a heap) next to an Index Seek. Look at its <b>actual number of executions</b>: 10 is fine, 50,000 is the problem.</li>
<li>When the lookup count is high the optimizer may skip the index and scan instead; adding <code>INCLUDE</code> columns can flip that decision.</li>
<li>Do not include everything: each included column duplicates data and slows writes. Cover the few hot queries, not all of them.</li>
<li>Follow-up: "Key column or INCLUDE column?" Key if used for seek, join or sort order; INCLUDE if only returned.</li>
</ul>`,
        hi: `<ul>
<li>Plan में: Index Seek के पास <b>Key Lookup</b> (heap पर RID Lookup)। उसकी <b>actual number of executions</b> देखो: 10 ठीक है, 50,000 problem है।</li>
<li>Lookup count ज़्यादा हो तो optimizer index छोड़कर scan कर सकता है; <code>INCLUDE</code> columns जोड़ने से वह फ़ैसला पलट सकता है।</li>
<li>सब कुछ include मत करो: हर included column data दोहराता है और writes धीमे करता है। कुछ hot queries cover करो, सब नहीं।</li>
<li>Follow-up: "Key column या INCLUDE column?" Seek, join या sort order में use हो तो key; सिर्फ़ return होता हो तो INCLUDE।</li>
</ul>`,
        hg: `<ul>
<li>Plan mein: Index Seek ke paas <b>Key Lookup</b> (heap par RID Lookup). Uski <b>actual number of executions</b> dekho: 10 theek hai, 50,000 problem hai.</li>
<li>Lookup count zyaada ho to optimizer index chhodkar scan kar sakta hai; <code>INCLUDE</code> columns jodne se woh faisla palat sakta hai.</li>
<li>Sab kuch include mat karo: har included column data dohraata hai aur writes dheeme karta hai. Kuch hot queries cover karo, sab nahi.</li>
<li>Follow-up: "Key column ya INCLUDE column?" Seek, join ya sort order mein use ho to key; sirf return hota ho to INCLUDE.</li>
</ul>`
      }
    },
    {
      id: "sargable-query",
      depth: "short",
      q: "What does SARGable mean? Give an example of a query you would rewrite.",
      answer: "A predicate is SARGable when SQL Server can seek an index with it. Functions or conversions on the column break that, so rewrite YEAR(col) = 2025 as a range on the bare column.",
      meaning: {
        hi: "Predicate SARGable तब है जब SQL Server उससे index पर seek कर सके। Column पर function या conversion इसे तोड़ देता है, इसलिए YEAR(col) = 2025 को bare column पर range में लिखो।",
        hg: "Predicate SARGable tab hai jab SQL Server usse index par seek kar sake. Column par function ya conversion ise tod deta hai, isliye YEAR(col) = 2025 ko bare column par range mein likho."
      },
      explain: {
        en: `<ul>
<li>Typical breakers: a function on the column (<code>YEAR</code>, <code>CONVERT</code>, <code>ISNULL</code>, <code>LEFT</code>), arithmetic on the column, a leading-wildcard <code>LIKE</code>, and an <b>implicit conversion</b> from mismatched types.</li>
<li>Implicit conversion: data type precedence converts the lower-precedence side. A <code>varchar</code> column vs an <code>nvarchar</code> parameter converts the column. EF Core and Dapper can send <code>nvarchar</code> by default (Day 6).</li>
<li>Rewrite: <code>CreatedOn &gt;= @from AND CreatedOn &lt; @toExclusive</code>.</li>
<li>Follow-up: "What if you cannot change the query?" A computed column plus an index on it, or fix the parameter type.</li>
</ul>`,
        hi: `<ul>
<li>आम तोड़ने वाले: column पर function (<code>YEAR</code>, <code>CONVERT</code>, <code>ISNULL</code>, <code>LEFT</code>), column पर arithmetic, leading-wildcard <code>LIKE</code>, और mismatched types से <b>implicit conversion</b>।</li>
<li>Implicit conversion: data type precedence में नीचे वाली side convert होती है। <code>varchar</code> column बनाम <code>nvarchar</code> parameter में column convert होता है। EF Core और Dapper default में <code>nvarchar</code> भेज सकते हैं (Day 6)।</li>
<li>Rewrite: <code>CreatedOn &gt;= @from AND CreatedOn &lt; @toExclusive</code>।</li>
<li>Follow-up: "अगर query बदल नहीं सकते?" Computed column और उस पर index, या parameter type ठीक करो।</li>
</ul>`,
        hg: `<ul>
<li>Aam todne wale: column par function (<code>YEAR</code>, <code>CONVERT</code>, <code>ISNULL</code>, <code>LEFT</code>), column par arithmetic, leading-wildcard <code>LIKE</code>, aur mismatched types se <b>implicit conversion</b>.</li>
<li>Implicit conversion: data type precedence mein neeche wali side convert hoti hai. <code>varchar</code> column vs <code>nvarchar</code> parameter mein column convert hota hai. EF Core aur Dapper default mein <code>nvarchar</code> bhej sakte hain (Day 6).</li>
<li>Rewrite: <code>CreatedOn &gt;= @from AND CreatedOn &lt; @toExclusive</code>.</li>
<li>Follow-up: "Agar query badal nahi sakte?" Computed column aur us par index, ya parameter type theek karo.</li>
</ul>`
      }
    },
    {
      id: "seek-vs-scan-estimates",
      depth: "short",
      q: "How do you read an execution plan, and what do estimated vs actual rows tell you?",
      answer: "I look for scans, key lookups, warnings and spills, then compare estimated with actual rows. A big gap means bad statistics, skewed data or a sniffed parameter, and that explains most wrong plans.",
      meaning: {
        hi: "मैं scans, key lookups, warnings और spills देखता हूँ, फिर estimated और actual rows compare करता हूँ। बड़ा gap यानी ख़राब statistics, skewed data या sniffed parameter, और ज़्यादातर ग़लत plans इसी से समझ आते हैं।",
        hg: "Main scans, key lookups, warnings aur spills dekhta hoon, phir estimated aur actual rows compare karta hoon. Bada gap yaani kharab statistics, skewed data ya sniffed parameter, aur zyaadatar galat plans isi se samajh aate hain."
      },
      explain: {
        en: `<ul>
<li>Use the <b>actual</b> plan; the estimated plan has no run-time numbers. Read right to left; thick arrows mean many rows.</li>
<li>A scan is not automatically bad (small table, or you need most rows); a seek is not automatically good (a seek with 100,000 lookups).</li>
<li>The optimizer estimates from <b>statistics</b>; they are auto-updated after a threshold of changes, but large tables can drift. <code>UPDATE STATISTICS</code> is a cheap first experiment.</li>
<li>Warnings to act on: implicit conversion, missing-index hints (treat as a hint, not an order), and sort or hash spills to tempdb (memory grant too small).</li>
<li>Follow-up: "Estimated cost says 90% for this operator, so is that the bottleneck?" Not necessarily: costs are estimates; trust actual time and reads.</li>
</ul>`,
        hi: `<ul>
<li><b>Actual</b> plan use करो; estimated plan में run-time numbers नहीं होते। दाएँ से बाएँ पढ़ो; मोटे arrows यानी ज़्यादा rows।</li>
<li>Scan अपने आप बुरा नहीं (छोटी table, या ज़्यादातर rows चाहिए); seek अपने आप अच्छा नहीं (100,000 lookups वाला seek)।</li>
<li>Optimizer <b>statistics</b> से estimate करता है; changes की एक threshold के बाद वे auto-update होती हैं, पर बड़ी tables में drift हो सकता है। <code>UPDATE STATISTICS</code> एक सस्ता पहला experiment है।</li>
<li>जिन warnings पर action लो: implicit conversion, missing-index hints (hint मानो, हुक्म नहीं), और sort या hash का tempdb में spill (memory grant छोटा)।</li>
<li>Follow-up: "Estimated cost इस operator पर 90% है, तो क्या यही bottleneck है?" ज़रूरी नहीं: costs estimates हैं; actual time और reads पर भरोसा करो।</li>
</ul>`,
        hg: `<ul>
<li><b>Actual</b> plan use karo; estimated plan mein run-time numbers nahi hote. Daayein se baayein padho; mote arrows yaani zyaada rows.</li>
<li>Scan apne aap bura nahi (chhoti table, ya zyaadatar rows chahiye); seek apne aap achha nahi (100,000 lookups wala seek).</li>
<li>Optimizer <b>statistics</b> se estimate karta hai; changes ki ek threshold ke baad woh auto-update hoti hain, par badi tables mein drift ho sakta hai. <code>UPDATE STATISTICS</code> ek sasta pehla experiment hai.</li>
<li>Jin warnings par action lo: implicit conversion, missing-index hints (hint mano, hukm nahi), aur sort ya hash ka tempdb mein spill (memory grant chhota).</li>
<li>Follow-up: "Estimated cost is operator par 90% hai, to kya yahi bottleneck hai?" Zaroori nahi: costs estimates hain; actual time aur reads par bharosa karo.</li>
</ul>`
      }
    },
    {
      id: "parameter-sniffing",
      depth: "short",
      q: "What is parameter sniffing and how would you fix it?",
      answer: "The first call's parameter value shapes the cached plan, which can be wrong for other values on skewed data. Fix with updated statistics or better indexes first, then RECOMPILE, OPTIMIZE FOR, or Query Store forcing.",
      meaning: {
        hi: "पहली call का parameter value cached plan बनाता है, जो skewed data में दूसरी values के लिए ग़लत हो सकता है। पहले statistics या बेहतर indexes से fix करो, फिर RECOMPILE, OPTIMIZE FOR, या Query Store forcing।",
        hg: "Pehli call ka parameter value cached plan banata hai, jo skewed data mein doosri values ke liye galat ho sakta hai. Pehle statistics ya behtar indexes se fix karo, phir RECOMPILE, OPTIMIZE FOR, ya Query Store forcing."
      },
      explain: {
        en: `<ul>
<li>It is a trade-off, not a bug: plan reuse saves compile CPU; sniffing only hurts when the best plan depends on the value.</li>
<li>Symptoms: the same procedure is fast for one customer and slow for another; it was fine until a restart or a statistics update cleared the cache.</li>
<li>Options: <code>OPTION (RECOMPILE)</code> (rare queries), <code>OPTIMIZE FOR UNKNOWN</code> or a chosen value, splitting into two procedures by data shape, dynamic SQL for the extreme case, Query Store plan forcing (SQL Server 2016+).</li>
<li><b>SQL Server 2022:</b> PSP (parameter sensitive plan) optimization at compatibility level 160 can keep several plans per query; it covers equality predicates on skewed columns, not everything.</li>
<li>Follow-up: "Why not add RECOMPILE everywhere?" Compile CPU on hot paths and plan-cache churn.</li>
</ul>`,
        hi: `<ul>
<li>यह trade-off है, bug नहीं: plan reuse से compile CPU बचता है; sniffing तभी नुकसान करती है जब सबसे अच्छा plan value पर निर्भर हो।</li>
<li>Symptoms: वही procedure एक customer के लिए तेज़ और दूसरे के लिए slow; restart या statistics update से cache साफ़ होने तक ठीक चल रही थी।</li>
<li>Options: <code>OPTION (RECOMPILE)</code> (rare queries), <code>OPTIMIZE FOR UNKNOWN</code> या चुनी हुई value, data की shape के हिसाब से दो procedures में split, extreme case के लिए dynamic SQL, Query Store plan forcing (SQL Server 2016+)।</li>
<li><b>SQL Server 2022:</b> compatibility level 160 पर PSP (parameter sensitive plan) optimization एक query के कई plans रख सकता है; यह skewed columns पर equality predicates cover करता है, सब कुछ नहीं।</li>
<li>Follow-up: "हर जगह RECOMPILE क्यों नहीं?" Hot paths पर compile CPU और plan-cache churn।</li>
</ul>`,
        hg: `<ul>
<li>Yeh trade-off hai, bug nahi: plan reuse se compile CPU bachta hai; sniffing tabhi nuksaan karti hai jab sabse achha plan value par nirbhar ho.</li>
<li>Symptoms: wahi procedure ek customer ke liye tez aur doosre ke liye slow; restart ya statistics update se cache saaf hone tak theek chal rahi thi.</li>
<li>Options: <code>OPTION (RECOMPILE)</code> (rare queries), <code>OPTIMIZE FOR UNKNOWN</code> ya chuni hui value, data ki shape ke hisaab se do procedures mein split, extreme case ke liye dynamic SQL, Query Store plan forcing (SQL Server 2016+).</li>
<li><b>SQL Server 2022:</b> compatibility level 160 par PSP (parameter sensitive plan) optimization ek query ke kai plans rakh sakta hai; yeh skewed columns par equality predicates cover karta hai, sab kuch nahi.</li>
<li>Follow-up: "Har jagah RECOMPILE kyon nahi?" Hot paths par compile CPU aur plan-cache churn.</li>
</ul>`
      }
    },
    {
      id: "not-in-vs-not-exists",
      depth: "short",
      q: "NOT IN vs NOT EXISTS — which is safer and why?",
      answer: "NOT EXISTS. If the NOT IN subquery returns a single NULL, the comparison is unknown for every row and the query returns nothing; NOT EXISTS handles NULLs correctly.",
      meaning: {
        hi: "NOT EXISTS। NOT IN की subquery एक भी NULL दे दे तो हर row के लिए comparison unknown हो जाता है और query कुछ नहीं देती; NOT EXISTS NULLs को सही संभालता है।",
        hg: "NOT EXISTS. NOT IN ki subquery ek bhi NULL de de to har row ke liye comparison unknown ho jaata hai aur query kuch nahi deti; NOT EXISTS NULLs ko sahi sambhalta hai."
      },
      explain: {
        en: `<ul>
<li><code>x NOT IN (1, 2, NULL)</code> expands to <code>x &lt;&gt; 1 AND x &lt;&gt; 2 AND x &lt;&gt; NULL</code>; the last part is unknown, so the whole result is never true (Puzzle 1 shows it).</li>
<li>The bug appears later: it works until someone inserts the first NULL into the subquery column. That is why the safe habit matters.</li>
<li><code>NOT EXISTS</code> is also usually planned as an efficient anti-join; <code>LEFT JOIN ... IS NULL</code> is an equivalent form.</li>
<li>Follow-up: "And EF Core?" LINQ <code>!ids.Contains(x)</code> translates to <code>NOT IN</code> on a list of values (no NULL risk unless the list holds NULL); <code>!db.Y.Any(...)</code> translates to <code>NOT EXISTS</code>.</li>
</ul>`,
        hi: `<ul>
<li><code>x NOT IN (1, 2, NULL)</code> का मतलब है <code>x &lt;&gt; 1 AND x &lt;&gt; 2 AND x &lt;&gt; NULL</code>; आख़िरी हिस्सा unknown है, इसलिए पूरा result कभी true नहीं (Puzzle 1 में दिखता है)।</li>
<li>Bug बाद में दिखता है: जब तक कोई subquery column में पहला NULL नहीं डालता तब तक चलता है। इसीलिए safe आदत ज़रूरी है।</li>
<li><code>NOT EXISTS</code> का plan भी आम तौर पर efficient anti-join बनता है; <code>LEFT JOIN ... IS NULL</code> equivalent form है।</li>
<li>Follow-up: "और EF Core?" LINQ <code>!ids.Contains(x)</code> values की list पर <code>NOT IN</code> बनता है (list में NULL न हो तो NULL का risk नहीं); <code>!db.Y.Any(...)</code> <code>NOT EXISTS</code> बनता है।</li>
</ul>`,
        hg: `<ul>
<li><code>x NOT IN (1, 2, NULL)</code> ka matlab hai <code>x &lt;&gt; 1 AND x &lt;&gt; 2 AND x &lt;&gt; NULL</code>; aakhri hissa unknown hai, isliye poora result kabhi true nahi (Puzzle 1 mein dikhta hai).</li>
<li>Bug baad mein dikhta hai: jab tak koi subquery column mein pehla NULL nahi daalta tab tak chalta hai. Isiliye safe aadat zaroori hai.</li>
<li><code>NOT EXISTS</code> ka plan bhi aam taur par efficient anti-join banta hai; <code>LEFT JOIN ... IS NULL</code> equivalent form hai.</li>
<li>Follow-up: "Aur EF Core?" LINQ <code>!ids.Contains(x)</code> values ki list par <code>NOT IN</code> banta hai (list mein NULL na ho to NULL ka risk nahi); <code>!db.Y.Any(...)</code> <code>NOT EXISTS</code> banta hai.</li>
</ul>`
      }
    },
    {
      id: "isolation-levels-rcsi",
      depth: "short",
      q: "What is the default isolation level in SQL Server, and when would you use RCSI or SNAPSHOT?",
      answer: "READ COMMITTED with locking. RCSI makes readers use row versions, so they stop blocking writers with no code change; SNAPSHOT gives a transaction-level consistent view but can raise update conflicts.",
      meaning: {
        hi: "locking के साथ READ COMMITTED। RCSI में readers row versions use करते हैं, इसलिए code बदले बिना writers को block नहीं करते; SNAPSHOT transaction-level consistent view देता है पर update conflicts आ सकते हैं।",
        hg: "Locking ke saath READ COMMITTED. RCSI mein readers row versions use karte hain, isliye code badle bina writers ko block nahi karte; SNAPSHOT transaction-level consistent view deta hai par update conflicts aa sakte hain."
      },
      explain: {
        en: `<ul>
<li>RCSI: statement-level consistency, version store (tempdb by default), switch with <code>ALTER DATABASE ... SET READ_COMMITTED_SNAPSHOT ON</code>.</li>
<li>SNAPSHOT: needs <code>ALLOW_SNAPSHOT_ISOLATION ON</code> and an explicit <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code>; error 3960 on update conflict, so the caller must retry.</li>
<li>Both cost version-store space and make long-running transactions more expensive; monitor tempdb.</li>
<li>Follow-up: "What about NOLOCK?" It is READ UNCOMMITTED: dirty, duplicate or missing rows; do not use it for correctness-sensitive data. "Where is this in EF?" Day 6: the isolation level you pass to <code>BeginTransaction</code>; rowversion for optimistic concurrency.</li>
</ul>`,
        hi: `<ul>
<li>RCSI: statement-level consistency, version store (default में tempdb), <code>ALTER DATABASE ... SET READ_COMMITTED_SNAPSHOT ON</code> से चालू।</li>
<li>SNAPSHOT: <code>ALLOW_SNAPSHOT_ISOLATION ON</code> और explicit <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code> चाहिए; update conflict पर error 3960, इसलिए caller को retry करना होगा।</li>
<li>दोनों में version-store space लगता है और लंबी transactions महँगी हो जाती हैं; tempdb monitor करो।</li>
<li>Follow-up: "NOLOCK का क्या?" यह READ UNCOMMITTED है: dirty, duplicate या missing rows; correctness वाले data के लिए use मत करो। "EF में यह कहाँ?" Day 6: <code>BeginTransaction</code> में जो isolation level pass करते हो; optimistic concurrency के लिए rowversion।</li>
</ul>`,
        hg: `<ul>
<li>RCSI: statement-level consistency, version store (default mein tempdb), <code>ALTER DATABASE ... SET READ_COMMITTED_SNAPSHOT ON</code> se chalu.</li>
<li>SNAPSHOT: <code>ALLOW_SNAPSHOT_ISOLATION ON</code> aur explicit <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code> chahiye; update conflict par error 3960, isliye caller ko retry karna hoga.</li>
<li>Dono mein version-store space lagta hai aur lambi transactions mehngi ho jaati hain; tempdb monitor karo.</li>
<li>Follow-up: "NOLOCK ka kya?" Yeh READ UNCOMMITTED hai: dirty, duplicate ya missing rows; correctness wale data ke liye use mat karo. "EF mein yeh kahan?" Day 6: <code>BeginTransaction</code> mein jo isolation level pass karte ho; optimistic concurrency ke liye rowversion.</li>
</ul>`
      }
    },
    {
      id: "deadlock-handling",
      depth: "short",
      q: "Your service logs deadlock errors in production. How do you diagnose and prevent them?",
      answer: "Capture the deadlock graph from the system_health session, see which statements and indexes conflict, then fix the access order, shorten transactions or add an index. Retry error 1205 in the caller.",
      meaning: {
        hi: "system_health session से deadlock graph लो, देखो कौन से statements और indexes टकरा रहे हैं, फिर access order ठीक करो, transactions छोटी करो या index जोड़ो। Caller में error 1205 retry करो।",
        hg: "system_health session se deadlock graph lo, dekho kaun se statements aur indexes takra rahe hain, phir access order theek karo, transactions chhoti karo ya index jodo. Caller mein error 1205 retry karo."
      },
      explain: {
        en: `<ul>
<li><b>Diagnose:</b> <code>xml_deadlock_report</code> in system_health (file or ring buffer), or a deadlock Extended Events session. The graph names the two processes, the resources (keys or pages) and the statements.</li>
<li><b>Typical causes:</b> two code paths update the same tables in opposite order; a long transaction holding locks; a missing index so an UPDATE scans and locks many rows; reader/writer conflicts (RCSI helps).</li>
<li><b>Prevent:</b> same order everywhere, short transactions, right indexes, lower isolation or RCSI, smaller batches for bulk updates.</li>
<li><b>Survive:</b> SQL Server kills the cheapest victim (<code>DEADLOCK_PRIORITY</code> can influence it); the caller retries safely only if the work is idempotent or fully rolled back.</li>
<li>Follow-up: "Blocking or deadlock?" Blocking resolves itself when the blocker finishes; a deadlock never does.</li>
</ul>`,
        hi: `<ul>
<li><b>Diagnose:</b> system_health में <code>xml_deadlock_report</code> (file या ring buffer), या deadlock Extended Events session। Graph दोनों processes, resources (keys या pages) और statements के नाम बताता है।</li>
<li><b>आम वजहें:</b> दो code paths एक ही tables को उल्टे order में update करते हैं; लंबी transaction जो locks पकड़े रहती है; missing index की वजह से UPDATE scan करके कई rows lock करता है; reader/writer conflicts (RCSI मदद करता है)।</li>
<li><b>Prevent:</b> हर जगह same order, short transactions, सही indexes, कम isolation या RCSI, bulk updates के लिए छोटे batches।</li>
<li><b>Survive:</b> SQL Server सबसे सस्ता victim मारता है (<code>DEADLOCK_PRIORITY</code> असर डाल सकता है); caller तभी safely retry कर सकता है जब काम idempotent हो या पूरा rollback हुआ हो।</li>
<li>Follow-up: "Blocking या deadlock?" Blocking blocker के ख़त्म होने पर अपने आप सुलझ जाती है; deadlock कभी नहीं।</li>
</ul>`,
        hg: `<ul>
<li><b>Diagnose:</b> system_health mein <code>xml_deadlock_report</code> (file ya ring buffer), ya deadlock Extended Events session. Graph dono processes, resources (keys ya pages) aur statements ke naam batata hai.</li>
<li><b>Aam wajahein:</b> do code paths ek hi tables ko ulte order mein update karte hain; lambi transaction jo locks pakde rehti hai; missing index ki wajah se UPDATE scan karke kai rows lock karta hai; reader/writer conflicts (RCSI madad karta hai).</li>
<li><b>Prevent:</b> har jagah same order, short transactions, sahi indexes, kam isolation ya RCSI, bulk updates ke liye chhote batches.</li>
<li><b>Survive:</b> SQL Server sabse sasta victim maarta hai (<code>DEADLOCK_PRIORITY</code> asar daal sakta hai); caller tabhi safely retry kar sakta hai jab kaam idempotent ho ya poora rollback hua ho.</li>
<li>Follow-up: "Blocking ya deadlock?" Blocking blocker ke khatam hone par apne aap suljh jaati hai; deadlock kabhi nahi.</li>
</ul>`
      }
    },
    {
      id: "rank-vs-row-number-frames",
      depth: "detailed",
      q: "ROW_NUMBER vs RANK vs DENSE_RANK, and what is the default frame of a running total?",
      answer: "ROW_NUMBER is always unique, RANK shares a number on ties and leaves gaps, DENSE_RANK shares without gaps. With ORDER BY and no frame, SUM uses RANGE, so equal order values get the same total.",
      meaning: {
        hi: "ROW_NUMBER हमेशा unique, RANK ties को एक number देकर gaps छोड़ता है, DENSE_RANK बिना gaps के। ORDER BY हो और frame न हो तो SUM RANGE use करता है, इसलिए बराबर order values को same total मिलता है।",
        hg: "ROW_NUMBER hamesha unique, RANK ties ko ek number dekar gaps chhodta hai, DENSE_RANK bina gaps ke. ORDER BY ho aur frame na ho to SUM RANGE use karta hai, isliye barabar order values ko same total milta hai."
      },
      explain: {
        en: `<ul>
<li>"Top-1 per group" uses <code>ROW_NUMBER()</code> with a tie-breaker; "all rows tied for first" uses <code>RANK() = 1</code>; "third highest salary" uses <code>DENSE_RANK() = 3</code>.</li>
<li>Without a unique <code>ORDER BY</code>, <code>ROW_NUMBER</code> on ties is arbitrary and can change between runs.</li>
<li><code>RANGE</code> treats rows with the same ORDER BY value as peers; <code>ROWS</code> counts physical rows. <code>ROWS</code> is also usually faster, because <code>RANGE</code> can spill to disk.</li>
<li>Follow-up: "LAG or self-join?" Prefer <code>LAG/LEAD</code>: one pass instead of a join on <code>rn - 1</code>.</li>
</ul>`,
        hi: `<ul>
<li>"हर group का top-1" में tie-breaker के साथ <code>ROW_NUMBER()</code>; "पहले नंबर पर बराबर वाली सब rows" में <code>RANK() = 1</code>; "तीसरी सबसे ज़्यादा salary" में <code>DENSE_RANK() = 3</code>।</li>
<li>Unique <code>ORDER BY</code> के बिना, ties पर <code>ROW_NUMBER</code> मनमाना है और runs के बीच बदल सकता है।</li>
<li><code>RANGE</code> same ORDER BY value वाली rows को peers मानता है; <code>ROWS</code> physical rows गिनता है। <code>ROWS</code> आम तौर पर तेज़ भी है, क्योंकि <code>RANGE</code> disk पर spill कर सकता है।</li>
<li>Follow-up: "LAG या self-join?" <code>LAG/LEAD</code> पसंद करो: <code>rn - 1</code> पर join की जगह एक pass।</li>
</ul>`,
        hg: `<ul>
<li>"Har group ka top-1" mein tie-breaker ke saath <code>ROW_NUMBER()</code>; "pehle number par barabar wali sab rows" mein <code>RANK() = 1</code>; "teesri sabse zyaada salary" mein <code>DENSE_RANK() = 3</code>.</li>
<li>Unique <code>ORDER BY</code> ke bina, ties par <code>ROW_NUMBER</code> manmaana hai aur runs ke beech badal sakta hai.</li>
<li><code>RANGE</code> same ORDER BY value wali rows ko peers maanta hai; <code>ROWS</code> physical rows ginta hai. <code>ROWS</code> aam taur par tez bhi hai, kyunki <code>RANGE</code> disk par spill kar sakta hai.</li>
<li>Follow-up: "LAG ya self-join?" <code>LAG/LEAD</code> pasand karo: <code>rn - 1</code> par join ki jagah ek pass.</li>
</ul>`
      }
    },
    {
      id: "cte-vs-temp-table",
      depth: "detailed",
      q: "CTE vs temp table vs subquery — when does each make sense, and how does a recursive CTE work?",
      answer: "A CTE is a named subquery for readability, not stored results; use a temp table to reuse a large result or get statistics. A recursive CTE joins an anchor to itself level by level.",
      meaning: {
        hi: "CTE readability के लिए नाम वाली subquery है, stored results नहीं। बड़ा result दोबारा use करना हो या statistics चाहिए तो temp table। Recursive CTE एक anchor को level by level खुद से join करती है।",
        hg: "CTE readability ke liye naam wali subquery hai, stored results nahi. Bada result dobara use karna ho ya statistics chahiye to temp table. Recursive CTE ek anchor ko level by level khud se join karti hai."
      },
      explain: {
        en: `<ul>
<li>SQL Server does <b>not</b> materialise CTEs: a CTE referenced twice may run twice. A temp table runs once and has statistics.</li>
<li>CTE and subquery usually give the same plan; choose on readability. CTEs are ideal for stepwise reading and for recursion.</li>
<li>Recursive CTE: anchor member, <code>UNION ALL</code>, recursive member referencing the CTE; stops when the recursive part returns no rows. Default <code>MAXRECURSION</code> is 100; <code>0</code> means unlimited, so guard against cycles.</li>
<li>A CTE can also feed an <code>UPDATE</code> or <code>DELETE</code> (the classic "delete duplicates with ROW_NUMBER").</li>
<li>Follow-up: "Is a CTE faster than a subquery?" No, not by itself.</li>
</ul>`,
        hi: `<ul>
<li>SQL Server CTEs को materialise <b>नहीं</b> करता: दो बार reference की गई CTE दो बार चल सकती है। Temp table एक बार चलती है और उसकी statistics होती हैं।</li>
<li>CTE और subquery आम तौर पर same plan देते हैं; readability से चुनो। CTEs step-by-step पढ़ने और recursion के लिए बढ़िया हैं।</li>
<li>Recursive CTE: anchor member, <code>UNION ALL</code>, CTE को reference करने वाला recursive member; recursive part कोई row न दे तब रुकती है। Default <code>MAXRECURSION</code> 100 है; <code>0</code> का मतलब unlimited, इसलिए cycles से बचाव रखो।</li>
<li>CTE <code>UPDATE</code> या <code>DELETE</code> को भी feed कर सकती है (classic "ROW_NUMBER से duplicates delete करना")।</li>
<li>Follow-up: "क्या CTE subquery से तेज़ है?" नहीं, अपने आप में नहीं।</li>
</ul>`,
        hg: `<ul>
<li>SQL Server CTEs ko materialise <b>nahi</b> karta: do baar reference ki gayi CTE do baar chal sakti hai. Temp table ek baar chalti hai aur uski statistics hoti hain.</li>
<li>CTE aur subquery aam taur par same plan dete hain; readability se chuno. CTEs step-by-step padhne aur recursion ke liye badhiya hain.</li>
<li>Recursive CTE: anchor member, <code>UNION ALL</code>, CTE ko reference karne wala recursive member; recursive part koi row na de tab rukti hai. Default <code>MAXRECURSION</code> 100 hai; <code>0</code> ka matlab unlimited, isliye cycles se bachaav rakho.</li>
<li>CTE <code>UPDATE</code> ya <code>DELETE</code> ko bhi feed kar sakti hai (classic "ROW_NUMBER se duplicates delete karna").</li>
<li>Follow-up: "Kya CTE subquery se tez hai?" Nahi, apne aap mein nahi.</li>
</ul>`
      }
    },
    {
      id: "scalar-udf-and-tvf",
      depth: "detailed",
      q: "Why were scalar functions slow, and what changed in SQL Server 2019? Inline vs multi-statement table-valued function?",
      answer: "Before 2019 a scalar UDF ran once per row and blocked parallelism; SQL Server 2019 can inline many. Prefer inline TVFs over multi-statement TVFs, which are opaque to the optimizer.",
      meaning: {
        hi: "2019 से पहले scalar UDF हर row पर एक बार चलता था और parallelism रोकता था। SQL Server 2019 कई को inline कर सकता है। Inline TVFs को multi-statement TVFs पर तरजीह दो, जो optimizer के लिए opaque हैं।",
        hg: "2019 se pehle scalar UDF har row par ek baar chalta tha aur parallelism rokta tha. SQL Server 2019 kai ko inline kar sakta hai. Inline TVFs ko multi-statement TVFs par tarjeeh do, jo optimizer ke liye opaque hain."
      },
      explain: {
        en: `<ul>
<li><b>SQL Server 2019 (compat 150):</b> scalar UDF inlining. Not every function qualifies; check <code>is_inlineable</code> in <code>sys.sql_modules</code>.</li>
<li>Multi-statement TVF: before 2014 the optimizer guessed 1 row, from 2014 it guessed 100; interleaved execution (SQL Server 2017, compat 140) uses the real row count for the rest of the plan.</li>
<li>Inline TVF: expanded like a view; best choice for reusable logic.</li>
<li>Follow-up: "Procedure or function?" A function cannot change data and is usable inside queries; a procedure can run DML and transactions. "Where does EF fit?" Day 6: it can map a table-valued function or call a stored procedure.</li>
</ul>`,
        hi: `<ul>
<li><b>SQL Server 2019 (compat 150):</b> scalar UDF inlining। हर function qualify नहीं करता; <code>sys.sql_modules</code> में <code>is_inlineable</code> देखो।</li>
<li>Multi-statement TVF: 2014 से पहले optimizer 1 row का अंदाज़ा लगाता था, 2014 से 100 का; interleaved execution (SQL Server 2017, compat 140) plan के बाक़ी हिस्से के लिए असली row count use करता है।</li>
<li>Inline TVF: view की तरह expand होता है; reusable logic के लिए सबसे अच्छा choice।</li>
<li>Follow-up: "Procedure या function?" Function data बदल नहीं सकता और queries के अंदर use हो सकता है; procedure DML और transactions चला सकता है। "EF कहाँ आता है?" Day 6: यह table-valued function map कर सकता है या stored procedure बुला सकता है।</li>
</ul>`,
        hg: `<ul>
<li><b>SQL Server 2019 (compat 150):</b> scalar UDF inlining. Har function qualify nahi karta; <code>sys.sql_modules</code> mein <code>is_inlineable</code> dekho.</li>
<li>Multi-statement TVF: 2014 se pehle optimizer 1 row ka andaza lagata tha, 2014 se 100 ka; interleaved execution (SQL Server 2017, compat 140) plan ke baaki hisse ke liye asli row count use karta hai.</li>
<li>Inline TVF: view ki tarah expand hota hai; reusable logic ke liye sabse achha choice.</li>
<li>Follow-up: "Procedure ya function?" Function data badal nahi sakta aur queries ke andar use ho sakta hai; procedure DML aur transactions chala sakta hai. "EF kahan aata hai?" Day 6: yeh table-valued function map kar sakta hai ya stored procedure bula sakta hai.</li>
</ul>`
      }
    },
    {
      id: "temp-table-vs-table-variable",
      depth: "detailed",
      q: "Temp table vs table variable — what are the real differences?",
      answer: "A temp table has statistics, supports indexes and takes part in rollback. A table variable has no column statistics and ignores rollback; SQL Server 2019 deferred compilation at least fixes its row estimate.",
      meaning: {
        hi: "Temp table में statistics होती हैं, indexes चलते हैं और rollback में हिस्सा लेती है। Table variable में column statistics नहीं और rollback नहीं; SQL Server 2019 की deferred compilation कम से कम उसका row estimate ठीक करती है।",
        hg: "Temp table mein statistics hoti hain, indexes chalte hain aur rollback mein hissa leti hai. Table variable mein column statistics nahi aur rollback nahi; SQL Server 2019 ki deferred compilation kam se kam uska row estimate theek karti hai."
      },
      explain: {
        en: `<ul>
<li>Both live in tempdb; "table variables are in memory" is a myth.</li>
<li>Before SQL Server 2019 the estimate for a table variable was 1 row at compile time (a recompile could fix it). <b>Deferred compilation</b> (SQL Server 2019, compat 150) uses the actual row count at first execution.</li>
<li>A temp table can be created in a calling procedure and read by child procedures; scope and name rules differ (<code>#</code> local, <code>##</code> global).</li>
<li>Table-valued parameters are table variables with a user-defined table type; good for passing small batches from .NET.</li>
<li>Follow-up: "Why does my table variable plan scan?" Probably a wrong estimate; try a temp table.</li>
</ul>`,
        hi: `<ul>
<li>दोनों tempdb में रहते हैं; "table variables memory में होते हैं" एक myth है।</li>
<li>SQL Server 2019 से पहले table variable का estimate compile time पर 1 row था (recompile से ठीक हो सकता था)। <b>Deferred compilation</b> (SQL Server 2019, compat 150) पहली execution पर actual row count use करता है।</li>
<li>Temp table calling procedure में बनकर child procedures पढ़ सकती हैं; scope और name rules अलग हैं (<code>#</code> local, <code>##</code> global)।</li>
<li>Table-valued parameters user-defined table type वाले table variables हैं; .NET से छोटे batches भेजने के लिए अच्छे।</li>
<li>Follow-up: "मेरे table variable का plan scan क्यों करता है?" शायद estimate ग़लत है; temp table try करो।</li>
</ul>`,
        hg: `<ul>
<li>Dono tempdb mein rehte hain; "table variables memory mein hote hain" ek myth hai.</li>
<li>SQL Server 2019 se pehle table variable ka estimate compile time par 1 row tha (recompile se theek ho sakta tha). <b>Deferred compilation</b> (SQL Server 2019, compat 150) pehli execution par actual row count use karta hai.</li>
<li>Temp table calling procedure mein banke child procedures padh sakti hain; scope aur name rules alag hain (<code>#</code> local, <code>##</code> global).</li>
<li>Table-valued parameters user-defined table type wale table variables hain; .NET se chhote batches bhejne ke liye achhe.</li>
<li>Follow-up: "Mere table variable ka plan scan kyon karta hai?" Shayad estimate galat hai; temp table try karo.</li>
</ul>`
      }
    },
    {
      id: "slow-query-production",
      depth: "detailed",
      q: "A query that was fast last week is slow in production today. Walk me through how you investigate.",
      answer: "Scope it, find the statement in Query Store or monitoring, check blocking, then read the actual plan against last week's. Fix the cheapest cause first and prove it with before-and-after numbers.",
      meaning: {
        hi: "पहले scope तय करो, Query Store या monitoring में statement ढूँढो, blocking check करो, फिर actual plan को पिछले हफ़्ते वाले से compare करो। सबसे सस्ती वजह पहले ठीक करो और before-after numbers से साबित करो।",
        hg: "Pehle scope tay karo, Query Store ya monitoring mein statement dhoondho, blocking check karo, phir actual plan ko pichhle hafte wale se compare karo. Sabse sasti wajah pehle theek karo aur before-after numbers se saabit karo."
      },
      explain: {
        en: `<ul>
<li>Use the checklist from the section "tuning checklist": confirm, find the statement, waiting or working, actual plan, cheapest fix, prove and protect.</li>
<li>"Fast last week" suggests a <b>plan regression</b> (Query Store compares plans over time), a statistics change, parameter sniffing after a restart, or data growth past a tipping point.</li>
<li>Day 6 has the EF side: query count per request, <code>TagWith</code>, implicit conversion from the Unicode mapping.</li>
<li>TL angle: stabilise first (force the last good plan or add the safe index), then root-cause, then add a guard (alert, test). Do not change five things at once.</li>
<li>Follow-up: "What if the cause is the application?" Then the fix is N+1, over-fetching or a missing cache, not SQL tuning.</li>
</ul>`,
        hi: `<ul>
<li>"tuning checklist" section की checklist use करो: confirm, statement ढूँढो, इंतज़ार या काम, actual plan, सबसे सस्ता fix, साबित करो और बचाव रखो।</li>
<li>"पिछले हफ़्ते तेज़ थी" का इशारा <b>plan regression</b> (Query Store समय के साथ plans compare करता है), statistics change, restart के बाद parameter sniffing, या data growth के tipping point की तरफ़ है।</li>
<li>EF वाला हिस्सा Day 6 में है: हर request की query count, <code>TagWith</code>, Unicode mapping से implicit conversion।</li>
<li>TL angle: पहले stabilise करो (पिछला अच्छा plan force करो या safe index जोड़ो), फिर root cause, फिर guard (alert, test)। पाँच चीज़ें एक साथ मत बदलो।</li>
<li>Follow-up: "अगर वजह application है?" तब fix N+1, over-fetching या missing cache है, SQL tuning नहीं।</li>
</ul>`,
        hg: `<ul>
<li>"tuning checklist" section ki checklist use karo: confirm, statement dhoondho, intezaar ya kaam, actual plan, sabse sasta fix, saabit karo aur bachaav rakho.</li>
<li>"Pichhle hafte tez thi" ka ishaara <b>plan regression</b> (Query Store samay ke saath plans compare karta hai), statistics change, restart ke baad parameter sniffing, ya data growth ke tipping point ki taraf hai.</li>
<li>EF wala hissa Day 6 mein hai: har request ki query count, <code>TagWith</code>, Unicode mapping se implicit conversion.</li>
<li>TL angle: pehle stabilise karo (pichhla achha plan force karo ya safe index jodo), phir root cause, phir guard (alert, test). Paanch cheezein ek saath mat badlo.</li>
<li>Follow-up: "Agar wajah application hai?" Tab fix N+1, over-fetching ya missing cache hai, SQL tuning nahi.</li>
</ul>`
      }
    },
    {
      id: "index-write-cost",
      depth: "detailed",
      q: "Is adding more indexes always better? What about fragmentation and fill factor?",
      answer: "No: every index costs storage and slows each insert, update and delete. Rebuild or reorganize only large, heavily scanned, really fragmented indexes, and keep statistics fresh.",
      meaning: {
        hi: "नहीं। हर index storage लेता है और हर insert, update और delete धीमा करता है। सिर्फ़ बड़े, ज़्यादा scan होने वाले और सच में fragmented indexes को rebuild या reorganize करो, और statistics fresh रखो।",
        hg: "Nahi. Har index storage leta hai aur har insert, update aur delete dheema karta hai. Sirf bade, zyaada scan hone wale aur sach mein fragmented indexes ko rebuild ya reorganize karo, aur statistics fresh rakho."
      },
      explain: {
        en: `<ul>
<li>Find unused or duplicate indexes with <code>sys.dm_db_index_usage_stats</code> (resets on restart; observe over a full business cycle before dropping).</li>
<li>Missing-index DMV suggestions are a starting point, not a design; merge suggestions that overlap.</li>
<li>Fragmentation: random-key inserts split pages; a lower fill factor trades space for fewer splits. Rule of thumb: reorganize about 5-30%, rebuild above 30%, for large indexes only. On SSD, up-to-date statistics usually matter more.</li>
<li><b>Columnstore (brief):</b> use a clustered or nonclustered columnstore index for large analytic scans and aggregates, not for point lookups.</li>
<li>Follow-up: "Index on a bit or status column?" Usually low value alone; a filtered index or a composite key is better.</li>
</ul>`,
        hi: `<ul>
<li>Unused या duplicate indexes <code>sys.dm_db_index_usage_stats</code> से ढूँढो (restart पर reset होता है; drop करने से पहले पूरे business cycle तक observe करो)।</li>
<li>Missing-index DMV के suggestions शुरुआत हैं, design नहीं; overlap करने वाले suggestions merge करो।</li>
<li>Fragmentation: random-key inserts pages split करते हैं; कम fill factor space के बदले कम splits देता है। Rule of thumb: लगभग 5-30% पर reorganize, 30% से ऊपर rebuild, सिर्फ़ बड़े indexes के लिए। SSD पर up-to-date statistics आम तौर पर ज़्यादा मायने रखती हैं।</li>
<li><b>Columnstore (brief):</b> बड़े analytic scans और aggregates के लिए clustered या nonclustered columnstore index use करो, point lookups के लिए नहीं।</li>
<li>Follow-up: "bit या status column पर index?" अकेले आम तौर पर कम value; filtered index या composite key बेहतर।</li>
</ul>`,
        hg: `<ul>
<li>Unused ya duplicate indexes <code>sys.dm_db_index_usage_stats</code> se dhoondho (restart par reset hota hai; drop karne se pehle poore business cycle tak observe karo).</li>
<li>Missing-index DMV ke suggestions shuruaat hain, design nahi; overlap karne wale suggestions merge karo.</li>
<li>Fragmentation: random-key inserts pages split karte hain; kam fill factor space ke badle kam splits deta hai. Rule of thumb: lagbhag 5-30% par reorganize, 30% se upar rebuild, sirf bade indexes ke liye. SSD par up-to-date statistics aam taur par zyaada maayne rakhti hain.</li>
<li><b>Columnstore (brief):</b> bade analytic scans aur aggregates ke liye clustered ya nonclustered columnstore index use karo, point lookups ke liye nahi.</li>
<li>Follow-up: "bit ya status column par index?" Akele aam taur par kam value; filtered index ya composite key behtar.</li>
</ul>`
      }
    },
    {
      id: "apply-vs-join",
      depth: "detailed",
      q: "When would you use CROSS APPLY instead of a JOIN?",
      answer: "When the right side depends on each left row: top-N per group, or calling an inline table function per row. OUTER APPLY keeps left rows that have no match, like a LEFT JOIN.",
      meaning: {
        hi: "जब right side हर left row पर निर्भर हो: हर group का top-N, या हर row पर inline table function बुलाना। OUTER APPLY match न होने वाली left rows रखता है, LEFT JOIN की तरह।",
        hg: "Jab right side har left row par nirbhar ho: har group ka top-N, ya har row par inline table function bulana. OUTER APPLY match na hone wali left rows rakhta hai, LEFT JOIN ki tarah."
      },
      explain: {
        en: `<ul>
<li>A plain join cannot reference the left row inside the right-hand subquery; <code>APPLY</code> can, including <code>TOP (n) ... ORDER BY</code>.</li>
<li>Performance relies on an index that matches the inner filter and order (for example <code>(CustomerId, OrderDate DESC)</code>); otherwise each left row scans.</li>
<li>Alternative for top-N per group: <code>ROW_NUMBER()</code> in a subquery; usually better when most groups are large and you need all groups, while APPLY wins for few left rows with big groups and a good index.</li>
<li>Follow-up: "Anti-join?" <code>NOT EXISTS</code>.</li>
</ul>`,
        hi: `<ul>
<li>सादा join right-hand subquery के अंदर left row को reference नहीं कर सकता; <code>APPLY</code> कर सकता है, <code>TOP (n) ... ORDER BY</code> समेत।</li>
<li>Performance ऐसे index पर टिकी है जो inner filter और order से match करे (जैसे <code>(CustomerId, OrderDate DESC)</code>); वरना हर left row scan करती है।</li>
<li>हर group के top-N का विकल्प: subquery में <code>ROW_NUMBER()</code>; जब ज़्यादातर groups बड़े हों और सब groups चाहिए तब आम तौर पर बेहतर, जबकि कम left rows, बड़े groups और अच्छे index में APPLY जीतता है।</li>
<li>Follow-up: "Anti-join?" <code>NOT EXISTS</code>।</li>
</ul>`,
        hg: `<ul>
<li>Saada join right-hand subquery ke andar left row ko reference nahi kar sakta; <code>APPLY</code> kar sakta hai, <code>TOP (n) ... ORDER BY</code> samet.</li>
<li>Performance aise index par tiki hai jo inner filter aur order se match kare (jaise <code>(CustomerId, OrderDate DESC)</code>); warna har left row scan karti hai.</li>
<li>Har group ke top-N ka vikalp: subquery mein <code>ROW_NUMBER()</code>; jab zyaadatar groups bade hon aur sab groups chahiye tab aam taur par behtar, jabki kam left rows, bade groups aur achhe index mein APPLY jeetta hai.</li>
<li>Follow-up: "Anti-join?" <code>NOT EXISTS</code>.</li>
</ul>`
      }
    },
  ],
  puzzles: [
    {
      id: "not-in-null",
      lang: "sql",
      src: `CREATE TABLE dbo.Staff (Id int PRIMARY KEY, ManagerId int NULL);
INSERT dbo.Staff (Id, ManagerId) VALUES (1, NULL), (2, 1), (3, 1), (4, 2);

SELECT 'not_in' AS test, COUNT(*) AS n
FROM dbo.Staff WHERE Id NOT IN (SELECT ManagerId FROM dbo.Staff);

SELECT 'not_exists' AS test, COUNT(*) AS n
FROM dbo.Staff s WHERE NOT EXISTS (SELECT 1 FROM dbo.Staff m WHERE m.ManagerId = s.Id);`,
      answer: "not_in 0\nnot_exists 2",
      explain: {
        en: `<p>Employee 1 has <code>ManagerId = NULL</code>, so the <code>NOT IN</code> list is <code>(NULL, 1, 1, 2)</code>. For every Id, the test against NULL is unknown, so no row can be true: <b>0 rows</b>. <code>NOT EXISTS</code> asks "does anyone report to me?" and correctly finds people 3 and 4 (nobody reports to them): <b>2</b>.</p>`,
        hi: `<p>Employee 1 का <code>ManagerId = NULL</code> है, इसलिए <code>NOT IN</code> list <code>(NULL, 1, 1, 2)</code> है। हर Id के लिए NULL वाला test unknown है, इसलिए कोई row true नहीं हो सकती: <b>0 rows</b>। <code>NOT EXISTS</code> पूछता है "क्या कोई मुझे report करता है?" और सही तरह से 3 और 4 को ढूँढता है (उन्हें कोई report नहीं करता): <b>2</b>।</p>`,
        hg: `<p>Employee 1 ka <code>ManagerId = NULL</code> hai, isliye <code>NOT IN</code> list <code>(NULL, 1, 1, 2)</code> hai. Har Id ke liye NULL wala test unknown hai, isliye koi row true nahi ho sakti: <b>0 rows</b>. <code>NOT EXISTS</code> poochta hai "kya koi mujhe report karta hai?" aur sahi tarah se 3 aur 4 ko dhoondhta hai (unhe koi report nahi karta): <b>2</b>.</p>`
      }
    },
    {
      id: "rank-ties",
      lang: "sql",
      src: `CREATE TABLE dbo.Scores (Name varchar(10) PRIMARY KEY, Score int NOT NULL);
INSERT dbo.Scores (Name, Score) VALUES ('Asha', 90), ('Bilal', 90), ('Chitra', 80), ('Dev', 70);

SELECT Name, Score,
       ROW_NUMBER() OVER (ORDER BY Score DESC, Name) AS rn,
       RANK()       OVER (ORDER BY Score DESC) AS rk,
       DENSE_RANK() OVER (ORDER BY Score DESC) AS dr
FROM dbo.Scores
ORDER BY rn;`,
      answer: "Asha 90 1 1 1\nBilal 90 2 1 1\nChitra 80 3 3 2\nDev 70 4 4 3",
      explain: {
        en: `<p>Asha and Bilal tie on 90. <code>ROW_NUMBER</code> never ties (the Name tie-breaker gives 1, 2). <code>RANK</code> gives both 1, then <b>skips</b> to 3 for Chitra. <code>DENSE_RANK</code> gives both 1 and continues with 2, 3 (no gaps).</p>`,
        hi: `<p>Asha और Bilal 90 पर tie हैं। <code>ROW_NUMBER</code> कभी tie नहीं करता (Name tie-breaker से 1, 2)। <code>RANK</code> दोनों को 1 देता है, फिर Chitra के लिए <b>skip</b> करके 3। <code>DENSE_RANK</code> दोनों को 1 देकर 2, 3 से आगे बढ़ता है (gaps नहीं)।</p>`,
        hg: `<p>Asha aur Bilal 90 par tie hain. <code>ROW_NUMBER</code> kabhi tie nahi karta (Name tie-breaker se 1, 2). <code>RANK</code> dono ko 1 deta hai, phir Chitra ke liye <b>skip</b> karke 3. <code>DENSE_RANK</code> dono ko 1 dekar 2, 3 se aage badhta hai (gaps nahi).</p>`
      }
    },
    {
      id: "left-join-where",
      lang: "sql",
      src: `CREATE TABLE dbo.Customers (Id int PRIMARY KEY, Name varchar(10) NOT NULL);
CREATE TABLE dbo.Orders (Id int PRIMARY KEY, CustomerId int NOT NULL, Status varchar(10) NOT NULL);
INSERT dbo.Customers (Id, Name) VALUES (1, 'Asha'), (2, 'Bilal'), (3, 'Chitra');
INSERT dbo.Orders (Id, CustomerId, Status) VALUES (1, 1, 'Paid'), (2, 1, 'Open'), (3, 2, 'Open');

SELECT 'where' AS variant, COUNT(*) AS customers
FROM (SELECT DISTINCT c.Id FROM dbo.Customers c
      LEFT JOIN dbo.Orders o ON o.CustomerId = c.Id
      WHERE o.Status = 'Paid') x;

SELECT 'on' AS variant, COUNT(*) AS customers
FROM (SELECT DISTINCT c.Id FROM dbo.Customers c
      LEFT JOIN dbo.Orders o ON o.CustomerId = c.Id AND o.Status = 'Paid') x;`,
      answer: "where 1\non 3",
      explain: {
        en: `<p>With the filter in <code>WHERE</code>, the NULL rows produced by the LEFT JOIN fail <code>o.Status = 'Paid'</code> and disappear, so only Asha remains: the LEFT JOIN behaved like an inner join. With the condition in <code>ON</code>, all three customers are kept and only the match is restricted: <b>3</b>.</p>`,
        hi: `<p>Filter <code>WHERE</code> में हो तो LEFT JOIN से बनी NULL rows <code>o.Status = 'Paid'</code> में fail होकर गायब हो जाती हैं, इसलिए सिर्फ़ Asha बचती है: LEFT JOIN inner join की तरह चला। Condition <code>ON</code> में हो तो तीनों customers रहते हैं और सिर्फ़ match restrict होता है: <b>3</b>।</p>`,
        hg: `<p>Filter <code>WHERE</code> mein ho to LEFT JOIN se bani NULL rows <code>o.Status = 'Paid'</code> mein fail hokar gayab ho jaati hain, isliye sirf Asha bachti hai: LEFT JOIN inner join ki tarah chala. Condition <code>ON</code> mein ho to teeno customers rehte hain aur sirf match restrict hota hai: <b>3</b>.</p>`
      }
    },
    {
      id: "running-total-range",
      lang: "sql",
      src: `CREATE TABLE dbo.Pay (Id int PRIMARY KEY, Day int NOT NULL, Amount int NOT NULL);
INSERT dbo.Pay (Id, Day, Amount) VALUES (1, 1, 10), (2, 2, 20), (3, 2, 30), (4, 3, 40);

SELECT Id, Day, Amount,
       SUM(Amount) OVER (ORDER BY Day) AS dflt,
       SUM(Amount) OVER (ORDER BY Day ROWS UNBOUNDED PRECEDING) AS by_rows
FROM dbo.Pay
ORDER BY Id;`,
      answer: "1 1 10 10 10\n2 2 20 60 30\n3 2 30 60 60\n4 3 40 100 100",
      explain: {
        en: `<p>The default frame with <code>ORDER BY</code> is <code>RANGE UNBOUNDED PRECEDING</code>: Ids 2 and 3 share Day 2, so they are peers and both see 10+20+30 = <b>60</b>. With <code>ROWS</code>, rows are counted one by one; here the tie order between Ids 2 and 3 is not defined by <code>ORDER BY Day</code>, so a real query should add a unique tie-breaker (<code>Day, Id</code>) to make the by_rows column repeatable.</p>`,
        hi: `<p><code>ORDER BY</code> के साथ default frame <code>RANGE UNBOUNDED PRECEDING</code> है: Id 2 और 3 का Day 2 same है, इसलिए वे peers हैं और दोनों को 10+20+30 = <b>60</b> दिखता है। <code>ROWS</code> में rows एक-एक करके गिनी जाती हैं; यहाँ Id 2 और 3 के बीच tie order <code>ORDER BY Day</code> से तय नहीं है, इसलिए असली query में unique tie-breaker (<code>Day, Id</code>) जोड़ो ताकि by_rows column repeatable हो।</p>`,
        hg: `<p><code>ORDER BY</code> ke saath default frame <code>RANGE UNBOUNDED PRECEDING</code> hai: Id 2 aur 3 ka Day 2 same hai, isliye woh peers hain aur dono ko 10+20+30 = <b>60</b> dikhta hai. <code>ROWS</code> mein rows ek-ek karke ginti jaati hain; yahan Id 2 aur 3 ke beech tie order <code>ORDER BY Day</code> se tay nahi hai, isliye asli query mein unique tie-breaker (<code>Day, Id</code>) jodo taaki by_rows column repeatable ho.</p>`
      }
    },
    {
      id: "recursive-cte-factorial",
      lang: "sql",
      src: `WITH F (n, v) AS (
    SELECT 1, CAST(1 AS bigint)
    UNION ALL
    SELECT n + 1, v * (n + 1) FROM F WHERE n < 5
)
SELECT COUNT(*) AS steps, SUM(v) AS total, MAX(v) AS last_value FROM F;`,
      answer: "5 153 120",
      explain: {
        en: `<p>The anchor gives n=1, v=1. Each recursive step multiplies: 2, 6, 24, 120, and stops when <code>n &lt; 5</code> fails. Five rows (steps = 5); 1+2+6+24+120 = <b>153</b>; the last value is 120.</p>`,
        hi: `<p>Anchor n=1, v=1 देता है। हर recursive step गुणा करता है: 2, 6, 24, 120, और <code>n &lt; 5</code> fail होने पर रुकता है। पाँच rows (steps = 5); 1+2+6+24+120 = <b>153</b>; आख़िरी value 120।</p>`,
        hg: `<p>Anchor n=1, v=1 deta hai. Har recursive step guna karta hai: 2, 6, 24, 120, aur <code>n &lt; 5</code> fail hone par rukta hai. Paanch rows (steps = 5); 1+2+6+24+120 = <b>153</b>; aakhri value 120.</p>`
      }
    },
    {
      id: "count-star-vs-column",
      lang: "sql",
      src: `CREATE TABLE dbo.Marks (Id int PRIMARY KEY, Score int NULL);
INSERT dbo.Marks (Id, Score) VALUES (1, 10), (2, NULL), (3, 20);

SELECT COUNT(*) AS c_star, COUNT(Score) AS c_col, AVG(Score) AS avg_score, SUM(Score) / COUNT(*) AS sum_over_all
FROM dbo.Marks;`,
      answer: "3 2 15 10",
      explain: {
        en: `<p><code>COUNT(*)</code> counts rows (3); <code>COUNT(Score)</code> skips NULLs (2). <code>AVG</code> ignores NULLs too: 30 / 2 = 15. Dividing the sum by <code>COUNT(*)</code> gives 30 / 3 = 10. Both integer divisions here are exact, but remember integer division truncates.</p>`,
        hi: `<p><code>COUNT(*)</code> rows गिनता है (3); <code>COUNT(Score)</code> NULLs छोड़ देता है (2)। <code>AVG</code> भी NULLs ignore करता है: 30 / 2 = 15। Sum को <code>COUNT(*)</code> से भाग दो तो 30 / 3 = 10। यहाँ दोनों integer divisions exact हैं, पर याद रखो integer division truncate करता है।</p>`,
        hg: `<p><code>COUNT(*)</code> rows ginta hai (3); <code>COUNT(Score)</code> NULLs chhod deta hai (2). <code>AVG</code> bhi NULLs ignore karta hai: 30 / 2 = 15. Sum ko <code>COUNT(*)</code> se bhaag do to 30 / 3 = 10. Yahan dono integer divisions exact hain, par yaad rakho integer division truncate karta hai.</p>`
      }
    },
    {
      id: "trailing-spaces-equal",
      lang: "sql",
      src: `SELECT CASE WHEN 'a' = 'a ' THEN 'equal' ELSE 'different' END AS trailing_test,
       CASE WHEN ' a' = 'a' THEN 'equal' ELSE 'different' END AS leading_test,
       LEN('a ') AS len_value,
       DATALENGTH('a ') AS bytes;`,
      answer: "equal different 1 2",
      explain: {
        en: `<p>In SQL Server string comparison pads the shorter value with spaces, so <b>trailing</b> spaces are ignored: <code>'a' = 'a '</code> is true. A <b>leading</b> space counts. <code>LEN</code> ignores trailing spaces (1) while <code>DATALENGTH</code> counts the bytes (2). Surprising for unique keys: <code>'abc'</code> and <code>'abc '</code> collide.</p>`,
        hi: `<p>SQL Server में string comparison छोटी value को spaces से pad करता है, इसलिए <b>trailing</b> spaces ignore होते हैं: <code>'a' = 'a '</code> true है। <b>Leading</b> space गिना जाता है। <code>LEN</code> trailing spaces ignore करता है (1) जबकि <code>DATALENGTH</code> bytes गिनता है (2)। Unique keys के लिए चौंकाने वाला: <code>'abc'</code> और <code>'abc '</code> टकराते हैं।</p>`,
        hg: `<p>SQL Server mein string comparison chhoti value ko spaces se pad karta hai, isliye <b>trailing</b> spaces ignore hote hain: <code>'a' = 'a '</code> true hai. <b>Leading</b> space ginta jaata hai. <code>LEN</code> trailing spaces ignore karta hai (1) jabki <code>DATALENGTH</code> bytes ginta hai (2). Unique keys ke liye chaunkane wala: <code>'abc'</code> aur <code>'abc '</code> takrate hain.</p>`
      }
    }
  ],
  revision: {
    en: [
      "Clustered index = the table's rows in key order, one per table; choose a narrow, unique, ever-increasing key.",
      "Every non-clustered index carries the clustered key, so a wide clustered key bloats all of them.",
      "A key lookup runs once per row found; INCLUDE columns can make an index covering.",
      "Keep the column bare in WHERE: no function on it, and match the data type (varchar vs nvarchar).",
      "Compare estimated with actual rows in the actual plan; a big gap points to statistics, skew or sniffing.",
      "Parameter sniffing is a trade-off: fix statistics and indexes first, then RECOMPILE, OPTIMIZE FOR or Query Store forcing.",
      "NOT IN returns nothing if the subquery has one NULL; prefer NOT EXISTS.",
      "A WHERE filter on the right table of a LEFT JOIN turns it into an inner join.",
      "With ORDER BY and no frame, SUM defaults to RANGE, so ties share a total; write ROWS for row-by-row.",
      "Scalar UDF inlining and table-variable deferred compilation arrived in SQL Server 2019 (compat 150).",
      "RCSI makes readers use row versions instead of shared locks; SNAPSHOT is transaction-level and can raise error 3960.",
      "Avoid deadlocks with the same access order and short transactions; diagnose from system_health and retry error 1205."
    ],
    meaning: {
      hi: [
        "Clustered index = table की rows key order में, हर table में एक; narrow, unique, बढ़ती जाने वाली key चुनो।",
        "हर non-clustered index clustered key साथ रखता है, इसलिए wide clustered key सबको फुला देती है।",
        "Key lookup हर मिली row पर एक बार चलता है; INCLUDE columns से index covering बन सकता है।",
        "WHERE में column को bare रखो: उस पर function नहीं, और data type match करो (varchar बनाम nvarchar)।",
        "Actual plan में estimated और actual rows compare करो; बड़ा gap statistics, skew या sniffing की तरफ़ इशारा है।",
        "Parameter sniffing एक trade-off है: पहले statistics और indexes ठीक करो, फिर RECOMPILE, OPTIMIZE FOR या Query Store forcing।",
        "Subquery में एक NULL हो तो NOT IN कुछ नहीं देता; NOT EXISTS पसंद करो।",
        "LEFT JOIN की right table पर WHERE filter उसे inner join बना देता है।",
        "ORDER BY हो और frame न हो तो SUM का default RANGE है, इसलिए ties का total same; row-by-row के लिए ROWS लिखो।",
        "Scalar UDF inlining और table-variable deferred compilation SQL Server 2019 (compat 150) में आए।",
        "RCSI में readers shared locks की जगह row versions use करते हैं; SNAPSHOT transaction-level है और error 3960 दे सकता है।",
        "Deadlocks से बचो same access order और short transactions से; system_health से diagnose करो और error 1205 retry करो।"
      ],
      hg: [
        "Clustered index = table ki rows key order mein, har table mein ek; narrow, unique, badhti jaane wali key chuno.",
        "Har non-clustered index clustered key saath rakhta hai, isliye wide clustered key sabko phula deti hai.",
        "Key lookup har mili row par ek baar chalta hai; INCLUDE columns se index covering ban sakta hai.",
        "WHERE mein column ko bare rakho: us par function nahi, aur data type match karo (varchar vs nvarchar).",
        "Actual plan mein estimated aur actual rows compare karo; bada gap statistics, skew ya sniffing ki taraf ishaara hai.",
        "Parameter sniffing ek trade-off hai: pehle statistics aur indexes theek karo, phir RECOMPILE, OPTIMIZE FOR ya Query Store forcing.",
        "Subquery mein ek NULL ho to NOT IN kuch nahi deta; NOT EXISTS pasand karo.",
        "LEFT JOIN ki right table par WHERE filter use inner join bana deta hai.",
        "ORDER BY ho aur frame na ho to SUM ka default RANGE hai, isliye ties ka total same; row-by-row ke liye ROWS likho.",
        "Scalar UDF inlining aur table-variable deferred compilation SQL Server 2019 (compat 150) mein aaye.",
        "RCSI mein readers shared locks ki jagah row versions use karte hain; SNAPSHOT transaction-level hai aur error 3960 de sakta hai.",
        "Deadlocks se bacho same access order aur short transactions se; system_health se diagnose karo aur error 1205 retry karo."
      ]
    }
  },
  whatsNew: {
    en: `<p><b>SQL Server versions that matter for these topics (each is a database engine release, with some features tied to the compatibility level):</b></p>
<ul>
<li><b>2016:</b> Query Store, updatable nonclustered columnstore.</li>
<li><b>2017:</b> <code>STRING_AGG</code>, interleaved execution for multi-statement TVFs (compat 140).</li>
<li><b>2019:</b> scalar UDF inlining and table-variable deferred compilation (compat 150).</li>
<li><b>2022:</b> parameter sensitive plan (PSP) optimization (compat 160), <code>GREATEST/LEAST</code>, <code>IS [NOT] DISTINCT FROM</code>, <code>DATE_BUCKET</code>, <code>GENERATE_SERIES</code>. Check the release notes of the version you run; newer releases add more.</li>
</ul>
<p>The snippets that ran on this machine used SQL Server 2019 LocalDB, so 2022-only syntax is shown but not executed.</p>`,
    hi: `<p><b>इन topics के लिए जो SQL Server versions मायने रखते हैं (हर एक database engine release है, कुछ features compatibility level से जुड़े हैं):</b></p>
<ul>
<li><b>2016:</b> Query Store, updatable nonclustered columnstore।</li>
<li><b>2017:</b> <code>STRING_AGG</code>, multi-statement TVFs के लिए interleaved execution (compat 140)।</li>
<li><b>2019:</b> scalar UDF inlining और table-variable deferred compilation (compat 150)।</li>
<li><b>2022:</b> parameter sensitive plan (PSP) optimization (compat 160), <code>GREATEST/LEAST</code>, <code>IS [NOT] DISTINCT FROM</code>, <code>DATE_BUCKET</code>, <code>GENERATE_SERIES</code>। जो version चलाते हो उसके release notes देखो; नए releases और जोड़ते हैं।</li>
</ul>
<p>इस machine पर जो snippets चले वे SQL Server 2019 LocalDB पर थे, इसलिए सिर्फ़ 2022 वाली syntax दिखाई गई है, चलाई नहीं गई।</p>`,
    hg: `<p><b>In topics ke liye jo SQL Server versions maayne rakhte hain (har ek database engine release hai, kuch features compatibility level se jude hain):</b></p>
<ul>
<li><b>2016:</b> Query Store, updatable nonclustered columnstore.</li>
<li><b>2017:</b> <code>STRING_AGG</code>, multi-statement TVFs ke liye interleaved execution (compat 140).</li>
<li><b>2019:</b> scalar UDF inlining aur table-variable deferred compilation (compat 150).</li>
<li><b>2022:</b> parameter sensitive plan (PSP) optimization (compat 160), <code>GREATEST/LEAST</code>, <code>IS [NOT] DISTINCT FROM</code>, <code>DATE_BUCKET</code>, <code>GENERATE_SERIES</code>. Jo version chalate ho uske release notes dekho; naye releases aur jodte hain.</li>
</ul>
<p>Is machine par jo snippets chale woh SQL Server 2019 LocalDB par the, isliye sirf 2022 wali syntax dikhayi gayi hai, chalayi nahi gayi.</p>`
  }
};
