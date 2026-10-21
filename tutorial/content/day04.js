// Day 4 — LINQ. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 4,
  title: {
    en: "LINQ — deferred execution, IEnumerable vs IQueryable, Select/SelectMany, GroupBy, joins, First/Single, Any/Count, paging",
    hi: "LINQ — deferred execution, IEnumerable बनाम IQueryable, Select/SelectMany, GroupBy, joins, First/Single, Any/Count, paging",
    hg: "LINQ — deferred execution, IEnumerable vs IQueryable, Select/SelectMany, GroupBy, joins, First/Single, Any/Count, paging"
  },
  summary: {
    en: `<p>Today is <b>LINQ</b> — the C# feature you use every day, and the one interviewers love to test with <b>"what will this print?"</b> questions. You already know the building blocks from Day 2 (lambdas, delegates, extension methods). Today we learn <i>when</i> a query really runs and <i>where</i> it runs.</p>
<ul>
<li><b>Deferred vs immediate execution</b> — building a query runs nothing; <code>foreach</code>, <code>ToList()</code>, <code>Count()</code>, <code>First()</code> run it. Every run uses the data and variable values <b>of that moment</b>.</li>
<li><b>Multiple enumeration</b> — running the same query twice does the work twice (and hits the database twice).</li>
<li><b>IEnumerable vs IQueryable</b> — filter in your app's memory (<code>Func</code>) or send the query to the database (<code>Expression&lt;Func&gt;</code>).</li>
<li><b>The operators interviewers ask about</b> — <code>Select</code> vs <code>SelectMany</code>, <code>GroupBy</code> (and <code>ToLookup</code>), <code>Join</code>/<code>GroupJoin</code> and left joins, <code>First</code>/<code>Single</code>/<code>...OrDefault</code>, <code>Any</code> vs <code>Count</code>, <code>Distinct</code>/<code>DistinctBy</code>, <code>OrderBy</code>/<code>ThenBy</code>, <code>Skip</code>/<code>Take</code> paging.</li>
<li><b>Tech Lead angle</b> — readable LINQ vs hot-path performance, and the LINQ red flags to catch in code review.</li>
</ul>
<p>One line to remember for the whole day: <b>a LINQ query is a recipe, not the food — it cooks only when you enumerate it, and it cooks again every time you do.</b></p>`,
    hi: `<p>आज का topic है <b>LINQ</b> — C# का वो feature जो आप रोज़ use करते हो, और जिसे interviewers <b>"यह क्या print करेगा?"</b> वाले सवालों से test करना पसंद करते हैं। इसके building blocks आप Day 2 में देख चुके हो (lambdas, delegates, extension methods)। आज सीखेंगे कि query असल में <i>कब</i> चलती है और <i>कहाँ</i> चलती है।</p>
<ul>
<li><b>Deferred बनाम immediate execution</b> — query बनाने से कुछ नहीं चलता; <code>foreach</code>, <code>ToList()</code>, <code>Count()</code>, <code>First()</code> उसे चलाते हैं। हर बार query <b>उसी पल</b> का data और variables की values use करती है।</li>
<li><b>Multiple enumeration</b> — एक ही query दो बार चलाओ तो काम भी दो बार होता है (और database पर भी दो बार जाता है)।</li>
<li><b>IEnumerable बनाम IQueryable</b> — filter आपके app की memory में (<code>Func</code>) या query database को भेजी जाए (<code>Expression&lt;Func&gt;</code>)।</li>
<li><b>Interview में पूछे जाने वाले operators</b> — <code>Select</code> बनाम <code>SelectMany</code>, <code>GroupBy</code> (और <code>ToLookup</code>), <code>Join</code>/<code>GroupJoin</code> और left join, <code>First</code>/<code>Single</code>/<code>...OrDefault</code>, <code>Any</code> बनाम <code>Count</code>, <code>Distinct</code>/<code>DistinctBy</code>, <code>OrderBy</code>/<code>ThenBy</code>, <code>Skip</code>/<code>Take</code> से paging।</li>
<li><b>Tech Lead angle</b> — पढ़ने में आसान LINQ बनाम hot path की performance, और code review में पकड़ने लायक LINQ red flags।</li>
</ul>
<p>पूरे दिन की एक line याद रखो: <b>LINQ query एक recipe है, खाना नहीं — वो तभी पकती है जब आप उसे enumerate करते हो, और हर बार enumerate करने पर फिर से पकती है।</b></p>`,
    hg: `<p>Aaj ka topic hai <b>LINQ</b> — C# ka woh feature jo aap roz use karte ho, aur jise interviewers <b>"yeh kya print karega?"</b> wale sawaalon se test karna pasand karte hain. Iske building blocks aap Day 2 mein dekh chuke ho (lambdas, delegates, extension methods). Aaj seekhenge ki query asal mein <i>kab</i> chalti hai aur <i>kahan</i> chalti hai.</p>
<ul>
<li><b>Deferred vs immediate execution</b> — query banane se kuch nahi chalta; <code>foreach</code>, <code>ToList()</code>, <code>Count()</code>, <code>First()</code> use chalate hain. Har baar query <b>usi pal</b> ka data aur variables ki values use karti hai.</li>
<li><b>Multiple enumeration</b> — ek hi query do baar chalao to kaam bhi do baar hota hai (aur database par bhi do baar jaata hai).</li>
<li><b>IEnumerable vs IQueryable</b> — filter aapke app ki memory mein (<code>Func</code>) ya query database ko bheji jaaye (<code>Expression&lt;Func&gt;</code>).</li>
<li><b>Interview mein poochhe jaane wale operators</b> — <code>Select</code> vs <code>SelectMany</code>, <code>GroupBy</code> (aur <code>ToLookup</code>), <code>Join</code>/<code>GroupJoin</code> aur left join, <code>First</code>/<code>Single</code>/<code>...OrDefault</code>, <code>Any</code> vs <code>Count</code>, <code>Distinct</code>/<code>DistinctBy</code>, <code>OrderBy</code>/<code>ThenBy</code>, <code>Skip</code>/<code>Take</code> se paging.</li>
<li><b>Tech Lead angle</b> — padhne mein aasaan LINQ vs hot path ki performance, aur code review mein pakadne laayak LINQ red flags.</li>
</ul>
<p>Poore din ki ek line yaad rakho: <b>LINQ query ek recipe hai, khaana nahi — woh tabhi pakti hai jab aap use enumerate karte ho, aur har baar enumerate karne par phir se pakti hai.</b></p>`
  },
  sections: [
    {
      id: "linq-basics",
      depth: "short",
      title: {
        en: "What LINQ is — query syntax, method syntax and the pipeline",
        hi: "LINQ क्या है — query syntax, method syntax और pipeline",
        hg: "LINQ kya hai — query syntax, method syntax aur pipeline"
      },
      body: {
        en: `<p><b>Analogy — the kirana shop list:</b> you do not tell the kirana shopkeeper <i>how</i> to search his shelves. You just say <b>what</b> you want: "items under ₹100, cheapest first, only the names". He does the walking and checking. LINQ is that list: you <b>describe the result</b> (filter, sort, shape), and the library does the looping for you.</p>
<ul>
<li><b>LINQ</b> = Language Integrated Query. One query style for arrays, lists, dictionaries, XML, and databases (through EF Core).</li>
<li>The operators (<code>Where</code>, <code>Select</code>, <code>OrderBy</code>...) are <b>extension methods</b>: <code>System.Linq.Enumerable</code> for <code>IEnumerable&lt;T&gt;</code>, <code>System.Linq.Queryable</code> for <code>IQueryable&lt;T&gt;</code>. Each takes a <b>lambda</b> (Day 2).</li>
<li><b>Method syntax</b>: <code>products.Where(p =&gt; p.Price &lt; 100).OrderBy(p =&gt; p.Price).Select(p =&gt; p.Name)</code>.</li>
<li><b>Query syntax</b>: <code>from p in products where p.Price &lt; 100 orderby p.Price select p.Name</code>. The compiler turns it into the <b>same method calls</b> — no speed difference.</li>
<li>Some operators exist <b>only as methods</b>: <code>Count</code>, <code>First</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>Any</code>. You can mix: <code>(from p in products where ... select p).Count()</code>.</li>
<li>Each operator returns a <b>new sequence</b>. The source list is <b>not changed</b> — LINQ reads data, it does not edit it.</li>
<li>A query is a <b>pipeline</b>: items flow one by one through <code>Where</code> → <code>Select</code> → ... (except operators like <code>OrderBy</code> and <code>GroupBy</code>, which must read everything first).</li>
</ul>
<p><b>When to use:</b> filtering, shaping, sorting, grouping and joining in-memory data, and writing EF Core queries — it is shorter and clearer than hand-written loops. <b>When not:</b> very hot loops where every allocation counts (measure first), and when you need to <b>change</b> items in place — use a normal <code>foreach</code> for side effects.</p>`,
        hi: `<p><b>Analogy — kirana दुकान की list:</b> आप kirana वाले को यह नहीं बताते कि shelves में <i>कैसे</i> ढूँढना है। आप बस बताते हो कि <b>क्या</b> चाहिए: "₹100 से कम वाली चीज़ें, सबसे सस्ती पहले, सिर्फ़ नाम"। चलना और check करना उसका काम है। LINQ वही list है: आप <b>result describe करते हो</b> (filter, sort, shape), और loop library चलाती है।</p>
<ul>
<li><b>LINQ</b> = Language Integrated Query। Arrays, lists, dictionaries, XML, और databases (EF Core के ज़रिए) — सबके लिए एक ही query style।</li>
<li>Operators (<code>Where</code>, <code>Select</code>, <code>OrderBy</code>...) <b>extension methods</b> हैं: <code>IEnumerable&lt;T&gt;</code> के लिए <code>System.Linq.Enumerable</code>, <code>IQueryable&lt;T&gt;</code> के लिए <code>System.Linq.Queryable</code>। हर एक <b>lambda</b> लेता है (Day 2)।</li>
<li><b>Method syntax</b>: <code>products.Where(p =&gt; p.Price &lt; 100).OrderBy(p =&gt; p.Price).Select(p =&gt; p.Name)</code>।</li>
<li><b>Query syntax</b>: <code>from p in products where p.Price &lt; 100 orderby p.Price select p.Name</code>। Compiler इसे <b>उन्हीं method calls</b> में बदल देता है — speed में कोई फ़र्क नहीं।</li>
<li>कुछ operators <b>सिर्फ़ methods</b> के रूप में हैं: <code>Count</code>, <code>First</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>Any</code>। दोनों mix कर सकते हो: <code>(from p in products where ... select p).Count()</code>।</li>
<li>हर operator एक <b>नया sequence</b> return करता है। Source list <b>नहीं बदलती</b> — LINQ data पढ़ता है, edit नहीं करता।</li>
<li>Query एक <b>pipeline</b> है: items एक-एक करके <code>Where</code> → <code>Select</code> → ... से गुज़रते हैं (सिवाय <code>OrderBy</code> और <code>GroupBy</code> जैसे operators के, जिन्हें पहले सब कुछ पढ़ना पड़ता है)।</li>
</ul>
<p><b>कब use करें:</b> in-memory data को filter, shape, sort, group और join करने में, और EF Core queries लिखने में — यह हाथ से लिखे loops से छोटा और साफ़ है। <b>कब नहीं:</b> बहुत hot loops जहाँ हर allocation मायने रखता है (पहले measure करो), और जब items को वहीं <b>बदलना</b> हो — side effects के लिए normal <code>foreach</code> use करो।</p>`,
        hg: `<p><b>Analogy — kirana dukaan ki list:</b> aap kirana wale ko yeh nahi batate ki shelves mein <i>kaise</i> dhoondhna hai. Aap bas batate ho ki <b>kya</b> chahiye: "₹100 se kam wali cheezein, sabse sasti pehle, sirf naam". Chalna aur check karna uska kaam hai. LINQ wahi list hai: aap <b>result describe karte ho</b> (filter, sort, shape), aur loop library chalati hai.</p>
<ul>
<li><b>LINQ</b> = Language Integrated Query. Arrays, lists, dictionaries, XML, aur databases (EF Core ke zariye) — sabke liye ek hi query style.</li>
<li>Operators (<code>Where</code>, <code>Select</code>, <code>OrderBy</code>...) <b>extension methods</b> hain: <code>IEnumerable&lt;T&gt;</code> ke liye <code>System.Linq.Enumerable</code>, <code>IQueryable&lt;T&gt;</code> ke liye <code>System.Linq.Queryable</code>. Har ek <b>lambda</b> leta hai (Day 2).</li>
<li><b>Method syntax</b>: <code>products.Where(p =&gt; p.Price &lt; 100).OrderBy(p =&gt; p.Price).Select(p =&gt; p.Name)</code>.</li>
<li><b>Query syntax</b>: <code>from p in products where p.Price &lt; 100 orderby p.Price select p.Name</code>. Compiler ise <b>unhi method calls</b> mein badal deta hai — speed mein koi farq nahi.</li>
<li>Kuch operators <b>sirf methods</b> ke roop mein hain: <code>Count</code>, <code>First</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>Any</code>. Dono mix kar sakte ho: <code>(from p in products where ... select p).Count()</code>.</li>
<li>Har operator ek <b>naya sequence</b> return karta hai. Source list <b>nahi badalti</b> — LINQ data padhta hai, edit nahi karta.</li>
<li>Query ek <b>pipeline</b> hai: items ek-ek karke <code>Where</code> → <code>Select</code> → ... se guzarte hain (siwaay <code>OrderBy</code> aur <code>GroupBy</code> jaise operators ke, jinhe pehle sab kuch padhna padta hai).</li>
</ul>
<p><b>Kab use karein:</b> in-memory data ko filter, shape, sort, group aur join karne mein, aur EF Core queries likhne mein — yeh haath se likhe loops se chhota aur saaf hai. <b>Kab nahi:</b> bahut hot loops jahan har allocation maayne rakhta hai (pehle measure karo), aur jab items ko wahin <b>badalna</b> ho — side effects ke liye normal <code>foreach</code> use karo.</p>`
      }
    },
    {
      id: "deferred-basics",
      depth: "short",
      title: {
        en: "Deferred vs immediate execution — the recipe and the food",
        hi: "Deferred बनाम immediate execution — recipe और खाना",
        hg: "Deferred vs immediate execution — recipe aur khaana"
      },
      body: {
        en: `<p><b>Analogy — recipe card vs cooked food:</b> writing a recipe card cooks nothing. Food is cooked only when someone <b>follows</b> the recipe — and it uses whatever is in the kitchen <b>at that moment</b>. Cook it twice, and you do all the work twice. If you want to keep the food, you cook once and pack it in a <b>tiffin box</b>. A LINQ query is the recipe card; enumerating it is cooking; <code>ToList()</code> is the tiffin box.</p>
<ul>
<li><b>Deferred execution</b>: <code>Where</code>, <code>Select</code>, <code>SelectMany</code>, <code>OrderBy</code>, <code>GroupBy</code>, <code>Join</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>... only <b>build</b> a query object. Nothing runs yet.</li>
<li><b>The query runs when you enumerate it</b>: <code>foreach</code>; <code>ToList</code>, <code>ToArray</code>, <code>ToDictionary</code>, <code>ToHashSet</code>, <code>ToLookup</code>; <code>Count</code>, <code>Sum</code>, <code>Min</code>, <code>Max</code>, <code>Average</code>; <code>Any</code>, <code>All</code>, <code>Contains</code>; <code>First</code>, <code>Single</code>, <code>Last</code>, <code>ElementAt</code>; <code>Aggregate</code>. These are <b>immediate</b>.</li>
<li><b>It reads the data and the variables at run time</b>, not at build time. Change a variable used in the lambda, or add an item to the source list, before enumerating — the query sees the new value.</li>
<li><b>Every enumeration runs it again</b> (multiple enumeration): <code>query.Count()</code> then <code>foreach (var x in query)</code> = the work is done twice. Over EF Core, that is two database round trips.</li>
<li><b>Errors appear late</b>: a bug inside a lambda (divide by zero, null) throws when the query runs, not on the line where you wrote it.</li>
<li><b>Streaming vs buffering</b>: <code>Where</code>/<code>Select</code> pass items one at a time; <code>OrderBy</code>, <code>GroupBy</code> and <code>Reverse</code> must read the <b>whole</b> source before giving the first item.</li>
</ul>
<p><b>When to use:</b> deferred queries let you build a query step by step (add filters conditionally) and stream large data without loading it all. Call <code>ToList()</code>/<code>ToArray()</code> once when you need a <b>fixed snapshot</b> or will loop over the result more than once. <b>When not:</b> do not keep a deferred query and enumerate it in many places "by accident", and do not call <code>ToList()</code> after every line just to be safe — it copies data each time.</p>`,
        hi: `<p><b>Analogy — recipe card बनाम पका हुआ खाना:</b> recipe card लिखने से कुछ नहीं पकता। खाना तभी पकता है जब कोई recipe <b>follow</b> करता है — और वो उस <b>पल</b> kitchen में जो है वही use करता है। दो बार पकाओ तो सारा काम दो बार। खाना रखना है तो एक बार पकाकर <b>tiffin box</b> में pack कर लो। LINQ query recipe card है; उसे enumerate करना पकाना है; <code>ToList()</code> tiffin box है।</p>
<ul>
<li><b>Deferred execution</b>: <code>Where</code>, <code>Select</code>, <code>SelectMany</code>, <code>OrderBy</code>, <code>GroupBy</code>, <code>Join</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>... सिर्फ़ एक query object <b>बनाते</b> हैं। अभी कुछ नहीं चलता।</li>
<li><b>Query तब चलती है जब आप उसे enumerate करते हो</b>: <code>foreach</code>; <code>ToList</code>, <code>ToArray</code>, <code>ToDictionary</code>, <code>ToHashSet</code>, <code>ToLookup</code>; <code>Count</code>, <code>Sum</code>, <code>Min</code>, <code>Max</code>, <code>Average</code>; <code>Any</code>, <code>All</code>, <code>Contains</code>; <code>First</code>, <code>Single</code>, <code>Last</code>, <code>ElementAt</code>; <code>Aggregate</code>। ये <b>immediate</b> हैं।</li>
<li><b>Query data और variables को चलते समय पढ़ती है</b>, बनाते समय नहीं। Enumerate करने से पहले lambda में use हुआ variable बदल दो, या source list में item जोड़ दो — query नई value देखेगी।</li>
<li><b>हर enumeration उसे फिर से चलाता है</b> (multiple enumeration): <code>query.Count()</code> फिर <code>foreach (var x in query)</code> = काम दो बार। EF Core पर इसका मतलब database के दो चक्कर।</li>
<li><b>Errors देर से दिखते हैं</b>: lambda के अंदर का bug (divide by zero, null) तब throw होता है जब query चलती है, उस line पर नहीं जहाँ आपने लिखा।</li>
<li><b>Streaming बनाम buffering</b>: <code>Where</code>/<code>Select</code> items एक-एक करके आगे भेजते हैं; <code>OrderBy</code>, <code>GroupBy</code> और <code>Reverse</code> को पहला item देने से पहले <b>पूरा</b> source पढ़ना पड़ता है।</li>
</ul>
<p><b>कब use करें:</b> deferred queries से आप query step by step बना सकते हो (conditions के हिसाब से filters जोड़ना) और बड़ा data बिना पूरा load किए stream कर सकते हो। जब <b>fixed snapshot</b> चाहिए या result पर एक से ज़्यादा बार loop चलाना है, तब एक बार <code>ToList()</code>/<code>ToArray()</code> call करो। <b>कब नहीं:</b> deferred query को रखकर "गलती से" कई जगह enumerate मत करो, और "safe रहने" के लिए हर line के बाद <code>ToList()</code> मत लगाओ — हर बार data copy होता है।</p>`,
        hg: `<p><b>Analogy — recipe card vs paka hua khaana:</b> recipe card likhne se kuch nahi pakta. Khaana tabhi pakta hai jab koi recipe <b>follow</b> karta hai — aur woh us <b>pal</b> kitchen mein jo hai wahi use karta hai. Do baar pakao to saara kaam do baar. Khaana rakhna hai to ek baar pakaakar <b>tiffin box</b> mein pack kar lo. LINQ query recipe card hai; use enumerate karna pakaana hai; <code>ToList()</code> tiffin box hai.</p>
<ul>
<li><b>Deferred execution</b>: <code>Where</code>, <code>Select</code>, <code>SelectMany</code>, <code>OrderBy</code>, <code>GroupBy</code>, <code>Join</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>... sirf ek query object <b>banate</b> hain. Abhi kuch nahi chalta.</li>
<li><b>Query tab chalti hai jab aap use enumerate karte ho</b>: <code>foreach</code>; <code>ToList</code>, <code>ToArray</code>, <code>ToDictionary</code>, <code>ToHashSet</code>, <code>ToLookup</code>; <code>Count</code>, <code>Sum</code>, <code>Min</code>, <code>Max</code>, <code>Average</code>; <code>Any</code>, <code>All</code>, <code>Contains</code>; <code>First</code>, <code>Single</code>, <code>Last</code>, <code>ElementAt</code>; <code>Aggregate</code>. Yeh <b>immediate</b> hain.</li>
<li><b>Query data aur variables ko chalte samay padhti hai</b>, banate samay nahi. Enumerate karne se pehle lambda mein use hua variable badal do, ya source list mein item jod do — query nayi value dekhegi.</li>
<li><b>Har enumeration use phir se chalata hai</b> (multiple enumeration): <code>query.Count()</code> phir <code>foreach (var x in query)</code> = kaam do baar. EF Core par iska matlab database ke do chakkar.</li>
<li><b>Errors der se dikhte hain</b>: lambda ke andar ka bug (divide by zero, null) tab throw hota hai jab query chalti hai, us line par nahi jahan aapne likha.</li>
<li><b>Streaming vs buffering</b>: <code>Where</code>/<code>Select</code> items ek-ek karke aage bhejte hain; <code>OrderBy</code>, <code>GroupBy</code> aur <code>Reverse</code> ko pehla item dene se pehle <b>poora</b> source padhna padta hai.</li>
</ul>
<p><b>Kab use karein:</b> deferred queries se aap query step by step bana sakte ho (conditions ke hisaab se filters jodna) aur bada data bina poora load kiye stream kar sakte ho. Jab <b>fixed snapshot</b> chahiye ya result par ek se zyada baar loop chalana hai, tab ek baar <code>ToList()</code>/<code>ToArray()</code> call karo. <b>Kab nahi:</b> deferred query ko rakhkar "galti se" kai jagah enumerate mat karo, aur "safe rehne" ke liye har line ke baad <code>ToList()</code> mat lagao — har baar data copy hota hai.</p>`
      }
    },
    {
      id: "ienumerable-iqueryable-basics",
      depth: "short",
      title: {
        en: "IEnumerable vs IQueryable — where does the filtering happen?",
        hi: "IEnumerable बनाम IQueryable — filtering कहाँ होती है?",
        hg: "IEnumerable vs IQueryable — filtering kahan hoti hai?"
      },
      body: {
        en: `<p><b>Analogy — the godown vs a phone order:</b> you need 5 bags of basmati rice. Option 1: bring the <b>whole godown stock</b> home in a truck and pick 5 bags in your courtyard. Option 2: <b>phone the shopkeeper</b>, say "5 bags of basmati", and he sends only those. <code>IEnumerable</code> filtering on database data is option 1 (all rows come to your app first). <code>IQueryable</code> is option 2: your order slip (the query) is sent to the database, which does the work and returns only what you asked for.</p>
<ul>
<li><b>IEnumerable&lt;T&gt;</b> = "something you can loop over". Its LINQ methods (<code>Enumerable.Where</code>...) take <b><code>Func&lt;T,bool&gt;</code></b> — compiled code that runs <b>in your process</b>, on objects in memory.</li>
<li><b>IQueryable&lt;T&gt;</b> = a query for a <b>provider</b> (EF Core, for example). Its methods (<code>Queryable.Where</code>...) take <b><code>Expression&lt;Func&lt;T,bool&gt;&gt;</code></b> — an <b>expression tree</b>: the lambda as data that the provider can read and <b>translate</b> (to SQL).</li>
<li>With EF Core, <code>db.Orders.Where(o =&gt; o.Total &gt; 500)</code> becomes <code>WHERE Total &gt; 500</code> in SQL — the database filters, and only matching rows travel over the network.</li>
<li><code>IQueryable&lt;T&gt;</code> <b>inherits</b> <code>IEnumerable&lt;T&gt;</code>. Which <code>Where</code> you get is decided by the <b>compile-time type</b> of the variable. Put an <code>IQueryable</code> into an <code>IEnumerable</code> variable (or call <code>AsEnumerable()</code>/<code>ToList()</code>), and every operator <b>after</b> that runs in memory.</li>
<li>Both are <b>deferred</b>. An <code>IQueryable</code> runs when you enumerate it (<code>ToList()</code>, <code>ToListAsync()</code>, <code>First()</code>, <code>Count()</code>...).</li>
<li>Not every C# method can be translated. EF Core throws "could not be translated" for code it cannot turn into SQL — Day 5–6 cover EF Core queries in depth.</li>
</ul>
<p><b>When to use:</b> keep the query as <code>IQueryable</code> while you add filters, sorting and paging, so the database does that work; switch to memory (<code>ToList()</code>/<code>AsEnumerable()</code>) only for logic SQL cannot do. <b>When not:</b> do not pass <code>IQueryable</code> through every layer of the app (callers can build any query, and errors show up far from the data code), and do not call <code>ToList()</code> before <code>Where</code> on a big table.</p>`,
        hi: `<p><b>Analogy — godown बनाम phone order:</b> आपको basmati चावल के 5 बोरे चाहिए। Option 1: <b>पूरे godown का stock</b> truck में घर लाओ और आँगन में 5 बोरे चुनो। Option 2: <b>दुकानदार को phone करो</b>, बोलो "basmati के 5 बोरे", और वो सिर्फ़ वही भेजता है। Database data पर <code>IEnumerable</code> filtering option 1 है (सारी rows पहले आपके app में आती हैं)। <code>IQueryable</code> option 2 है: आपकी order slip (query) database को भेजी जाती है, वो काम करता है और सिर्फ़ वही लौटाता है जो आपने माँगा।</p>
<ul>
<li><b>IEnumerable&lt;T&gt;</b> = "जिस पर loop चला सको"। इसके LINQ methods (<code>Enumerable.Where</code>...) <b><code>Func&lt;T,bool&gt;</code></b> लेते हैं — compiled code जो <b>आपके process में</b>, memory के objects पर चलता है।</li>
<li><b>IQueryable&lt;T&gt;</b> = किसी <b>provider</b> (जैसे EF Core) के लिए query। इसके methods (<code>Queryable.Where</code>...) <b><code>Expression&lt;Func&lt;T,bool&gt;&gt;</code></b> लेते हैं — एक <b>expression tree</b>: lambda को data की तरह, जिसे provider पढ़कर (SQL में) <b>translate</b> कर सकता है।</li>
<li>EF Core के साथ <code>db.Orders.Where(o =&gt; o.Total &gt; 500)</code> SQL में <code>WHERE Total &gt; 500</code> बन जाता है — filter database करता है, और सिर्फ़ matching rows network पर आती हैं।</li>
<li><code>IQueryable&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> को <b>inherit</b> करता है। कौन सा <code>Where</code> मिलेगा, यह variable के <b>compile-time type</b> से तय होता है। <code>IQueryable</code> को <code>IEnumerable</code> variable में रख दो (या <code>AsEnumerable()</code>/<code>ToList()</code> call करो), तो उसके <b>बाद</b> का हर operator memory में चलता है।</li>
<li>दोनों <b>deferred</b> हैं। <code>IQueryable</code> तब चलता है जब आप उसे enumerate करते हो (<code>ToList()</code>, <code>ToListAsync()</code>, <code>First()</code>, <code>Count()</code>...)।</li>
<li>हर C# method translate नहीं हो सकता। जो code SQL में नहीं बदल सकता, उस पर EF Core "could not be translated" exception देता है — EF Core queries Day 5–6 में detail में हैं।</li>
</ul>
<p><b>कब use करें:</b> filters, sorting और paging जोड़ते समय query को <code>IQueryable</code> ही रखो, ताकि यह काम database करे; memory में (<code>ToList()</code>/<code>AsEnumerable()</code>) सिर्फ़ उस logic के लिए जाओ जो SQL नहीं कर सकता। <b>कब नहीं:</b> <code>IQueryable</code> को app की हर layer में मत घुमाओ (callers कोई भी query बना सकते हैं, और errors data code से बहुत दूर दिखते हैं), और बड़ी table पर <code>Where</code> से पहले <code>ToList()</code> मत लगाओ।</p>`,
        hg: `<p><b>Analogy — godown vs phone order:</b> aapko basmati chawal ke 5 bore chahiye. Option 1: <b>poore godown ka stock</b> truck mein ghar laao aur aangan mein 5 bore chuno. Option 2: <b>dukaandaar ko phone karo</b>, bolo "basmati ke 5 bore", aur woh sirf wahi bhejta hai. Database data par <code>IEnumerable</code> filtering option 1 hai (saari rows pehle aapke app mein aati hain). <code>IQueryable</code> option 2 hai: aapki order slip (query) database ko bheji jaati hai, woh kaam karta hai aur sirf wahi lautata hai jo aapne maanga.</p>
<ul>
<li><b>IEnumerable&lt;T&gt;</b> = "jis par loop chala sako". Iske LINQ methods (<code>Enumerable.Where</code>...) <b><code>Func&lt;T,bool&gt;</code></b> lete hain — compiled code jo <b>aapke process mein</b>, memory ke objects par chalta hai.</li>
<li><b>IQueryable&lt;T&gt;</b> = kisi <b>provider</b> (jaise EF Core) ke liye query. Iske methods (<code>Queryable.Where</code>...) <b><code>Expression&lt;Func&lt;T,bool&gt;&gt;</code></b> lete hain — ek <b>expression tree</b>: lambda ko data ki tarah, jise provider padhkar (SQL mein) <b>translate</b> kar sakta hai.</li>
<li>EF Core ke saath <code>db.Orders.Where(o =&gt; o.Total &gt; 500)</code> SQL mein <code>WHERE Total &gt; 500</code> ban jaata hai — filter database karta hai, aur sirf matching rows network par aati hain.</li>
<li><code>IQueryable&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> ko <b>inherit</b> karta hai. Kaun sa <code>Where</code> milega, yeh variable ke <b>compile-time type</b> se tay hota hai. <code>IQueryable</code> ko <code>IEnumerable</code> variable mein rakh do (ya <code>AsEnumerable()</code>/<code>ToList()</code> call karo), to uske <b>baad</b> ka har operator memory mein chalta hai.</li>
<li>Dono <b>deferred</b> hain. <code>IQueryable</code> tab chalta hai jab aap use enumerate karte ho (<code>ToList()</code>, <code>ToListAsync()</code>, <code>First()</code>, <code>Count()</code>...).</li>
<li>Har C# method translate nahi ho sakta. Jo code SQL mein nahi badal sakta, us par EF Core "could not be translated" exception deta hai — EF Core queries Day 5–6 mein detail mein hain.</li>
</ul>
<p><b>Kab use karein:</b> filters, sorting aur paging jodte samay query ko <code>IQueryable</code> hi rakho, taaki yeh kaam database kare; memory mein (<code>ToList()</code>/<code>AsEnumerable()</code>) sirf us logic ke liye jao jo SQL nahi kar sakta. <b>Kab nahi:</b> <code>IQueryable</code> ko app ki har layer mein mat ghumao (callers koi bhi query bana sakte hain, aur errors data code se bahut door dikhte hain), aur badi table par <code>Where</code> se pehle <code>ToList()</code> mat lagao.</p>`
      }
    },
    {
      id: "shaping-basics",
      depth: "short",
      title: {
        en: "Shaping data — Select vs SelectMany, GroupBy and Join",
        hi: "Data को shape देना — Select बनाम SelectMany, GroupBy और Join",
        hg: "Data ko shape dena — Select vs SelectMany, GroupBy aur Join"
      },
      body: {
        en: `<p><b>Analogy — the Mumbai dabbawala:</b> every office worker gets one <b>dabba</b> with several dishes inside. "Whose dabba is this?" — one answer per dabba — is <b>Select</b>. Opening <b>all</b> the dabbas and putting every dish on one big plate is <b>SelectMany</b>. Sorting the dabbas into crates by <b>station code</b> is <b>GroupBy</b>. Matching each dabba's code with the <b>office address list</b> is <b>Join</b>.</p>
<ul>
<li><b>Select</b> = <b>one output per input</b>. 10 orders in → 10 results out. If each result is a list, you get a <b>list of lists</b>.</li>
<li><b>SelectMany</b> = <b>one-to-many, then flatten</b>. 10 orders with 3 items each → one flat sequence of 30 items.</li>
<li><b>GroupBy</b> = buckets by a key. Each group has a <code>.Key</code> and is itself a sequence of its items, so you can <code>Count()</code> or <code>Sum()</code> per group.</li>
<li><b>Join</b> = <b>inner join</b> on equal keys — rows without a partner disappear. A <b>left join</b> keeps them: <code>GroupJoin</code> + <code>DefaultIfEmpty()</code>, or <code>LeftJoin</code> in .NET 10.</li>
</ul>
<p>Details — query syntax, <code>ToLookup</code>, composite keys, the left-join pattern in code — are in the detailed sections below.</p>
<p><b>When to use:</b> <code>Select</code> for DTOs, <code>SelectMany</code> for "all items of all orders", <code>GroupBy</code> for per-key reports, <code>Join</code> to combine two in-memory lists by key. <b>When not:</b> in EF Core, prefer <b>navigation properties</b> (<code>order.Customer.Name</code>) over a manual <code>Join</code> when the relationship is mapped.</p>`,
        hi: `<p><b>Analogy — Mumbai का dabbawala:</b> हर office वाले को एक <b>dabba</b> मिलता है जिसमें कई dishes हैं। "यह dabba किसका है?" — हर dabba का एक जवाब — यह है <b>Select</b>। <b>सारे</b> dabbe खोलकर हर dish एक बड़ी थाली में रखना है <b>SelectMany</b>। Dabbon को <b>station code</b> के हिसाब से crates में बाँटना है <b>GroupBy</b>। हर dabba के code को <b>office address list</b> से मिलाना है <b>Join</b>।</p>
<ul>
<li><b>Select</b> = <b>हर input का एक output</b>। 10 orders अंदर → 10 results बाहर। अगर हर result एक list है, तो <b>lists की list</b> मिलती है।</li>
<li><b>SelectMany</b> = <b>one-to-many, फिर flatten</b>। 3-3 items वाले 10 orders → 30 items का एक flat sequence।</li>
<li><b>GroupBy</b> = key के हिसाब से buckets। हर group के पास एक <code>.Key</code> है और वो ख़ुद अपने items का sequence है, इसलिए हर group पर <code>Count()</code> या <code>Sum()</code> कर सकते हो।</li>
<li><b>Join</b> = बराबर keys पर <b>inner join</b> — जिन rows का partner नहीं, वो गायब। <b>Left join</b> उन्हें रखता है: <code>GroupJoin</code> + <code>DefaultIfEmpty()</code>, या .NET 10 में <code>LeftJoin</code>।</li>
</ul>
<p>Details — query syntax, <code>ToLookup</code>, composite keys, code में left-join pattern — नीचे के detailed sections में हैं।</p>
<p><b>कब use करें:</b> DTOs के लिए <code>Select</code>, "सारे orders के सारे items" के लिए <code>SelectMany</code>, per-key reports के लिए <code>GroupBy</code>, दो in-memory lists को key से जोड़ने के लिए <code>Join</code>। <b>कब नहीं:</b> EF Core में relationship mapped हो तो manual <code>Join</code> की जगह <b>navigation properties</b> (<code>order.Customer.Name</code>) बेहतर हैं।</p>`,
        hg: `<p><b>Analogy — Mumbai ka dabbawala:</b> har office wale ko ek <b>dabba</b> milta hai jismein kai dishes hain. "Yeh dabba kiska hai?" — har dabba ka ek jawaab — yeh hai <b>Select</b>. <b>Saare</b> dabbe kholkar har dish ek badi thaali mein rakhna hai <b>SelectMany</b>. Dabbon ko <b>station code</b> ke hisaab se crates mein baantna hai <b>GroupBy</b>. Har dabba ke code ko <b>office address list</b> se milaana hai <b>Join</b>.</p>
<ul>
<li><b>Select</b> = <b>har input ka ek output</b>. 10 orders andar → 10 results bahar. Agar har result ek list hai, to <b>lists ki list</b> milti hai.</li>
<li><b>SelectMany</b> = <b>one-to-many, phir flatten</b>. 3-3 items wale 10 orders → 30 items ka ek flat sequence.</li>
<li><b>GroupBy</b> = key ke hisaab se buckets. Har group ke paas ek <code>.Key</code> hai aur woh khud apne items ka sequence hai, isliye har group par <code>Count()</code> ya <code>Sum()</code> kar sakte ho.</li>
<li><b>Join</b> = barabar keys par <b>inner join</b> — jin rows ka partner nahi, woh gaayab. <b>Left join</b> unhe rakhta hai: <code>GroupJoin</code> + <code>DefaultIfEmpty()</code>, ya .NET 10 mein <code>LeftJoin</code>.</li>
</ul>
<p>Details — query syntax, <code>ToLookup</code>, composite keys, code mein left-join pattern — neeche ke detailed sections mein hain.</p>
<p><b>Kab use karein:</b> DTOs ke liye <code>Select</code>, "saare orders ke saare items" ke liye <code>SelectMany</code>, per-key reports ke liye <code>GroupBy</code>, do in-memory lists ko key se jodne ke liye <code>Join</code>. <b>Kab nahi:</b> EF Core mein relationship mapped ho to manual <code>Join</code> ki jagah <b>navigation properties</b> (<code>order.Customer.Name</code>) behtar hain.</p>`
      }
    },
    {
      id: "picking-basics",
      depth: "short",
      title: {
        en: "Picking and checking — First vs Single, Any, and paging",
        hi: "चुनना और check करना — First बनाम Single, Any, और paging",
        hg: "Chunna aur check karna — First vs Single, Any, aur paging"
      },
      body: {
        en: `<p><b>Analogy — the railway reservation chart:</b> "Who is the <b>first</b> passenger on the waiting list?" — <b>First</b>. "Find the passenger with this <b>PNR</b>" — there must be <b>exactly one</b>; two would be a serious bug — <b>Single</b>. "Is <b>any</b> berth free?" — stop at the first free berth — <b>Any</b>. And the chart is shown <b>page by page</b>, in coach and berth order — <b>OrderBy + Skip/Take</b>.</p>
<ul>
<li><b>First()</b> = the first match; <b>throws</b> if there is none. <b>Single()</b> = the <b>only</b> match; throws on zero <b>or</b> many — use it to assert uniqueness (lookup by a unique key).</li>
<li><b>...OrDefault()</b> returns <code>default</code> (<code>null</code>, or <code>0</code> for <code>int</code>) when nothing matches — but <code>SingleOrDefault()</code> <b>still throws on duplicates</b>.</li>
<li><b>Any()</b> answers "is there at least one?" and stops at the first match — the right tool for existence checks (full comparison with <code>Count()</code> in the Q&amp;A).</li>
<li><b>Paging</b>: <b>sort first</b>, then <code>Skip((page - 1) * size).Take(size)</code>. Without <code>ORDER BY</code>, a database promises no row order, so pages can repeat or miss rows.</li>
</ul>
<p>More operators — <code>Distinct</code>/<code>DistinctBy</code>, <code>MinBy</code>/<code>MaxBy</code>, <code>All</code>, keyset paging — are in the detailed sections below.</p>
<p><b>When to use:</b> <code>Single</code> when duplicates mean bad data; <code>FirstOrDefault</code> when "not found" is normal; <code>Any</code> for "exists?". <b>When not:</b> <code>First()</code> when "not found" is expected — you get an exception instead of a clean 404.</p>`,
        hi: `<p><b>Analogy — railway reservation chart:</b> "Waiting list में <b>पहला</b> passenger कौन है?" — <b>First</b>। "इस <b>PNR</b> वाला passenger ढूँढो" — <b>ठीक एक</b> होना चाहिए; दो हों तो बड़ा bug है — <b>Single</b>। "क्या <b>कोई</b> berth खाली है?" — पहली खाली berth पर रुक जाओ — <b>Any</b>। और chart <b>page by page</b> दिखाया जाता है, coach और berth के order में — <b>OrderBy + Skip/Take</b>।</p>
<ul>
<li><b>First()</b> = पहला match; कोई न हो तो <b>throw</b>। <b>Single()</b> = <b>इकलौता</b> match; zero <b>या</b> कई हों तो throw — uniqueness assert करने के लिए (unique key से lookup)।</li>
<li><b>...OrDefault()</b> कुछ match न हो तो <code>default</code> देता है (<code>null</code>, या <code>int</code> के लिए <code>0</code>) — पर <code>SingleOrDefault()</code> <b>duplicates पर फिर भी throw</b> करता है।</li>
<li><b>Any()</b> पूछता है "कम से कम एक है?" और पहले match पर रुक जाता है — existence checks के लिए सही tool (<code>Count()</code> से पूरी तुलना Q&amp;A में)।</li>
<li><b>Paging</b>: <b>पहले sort करो</b>, फिर <code>Skip((page - 1) * size).Take(size)</code>। <code>ORDER BY</code> के बिना database किसी row order का वादा नहीं करता, इसलिए pages में rows दोहरा सकती हैं या छूट सकती हैं।</li>
</ul>
<p>और operators — <code>Distinct</code>/<code>DistinctBy</code>, <code>MinBy</code>/<code>MaxBy</code>, <code>All</code>, keyset paging — नीचे के detailed sections में हैं।</p>
<p><b>कब use करें:</b> <code>Single</code> जब duplicates का मतलब ख़राब data हो; <code>FirstOrDefault</code> जब "नहीं मिला" normal बात हो; "exists?" के लिए <code>Any</code>। <b>कब नहीं:</b> जब "नहीं मिला" expected हो तब <code>First()</code> — साफ़ 404 की जगह exception मिलेगा।</p>`,
        hg: `<p><b>Analogy — railway reservation chart:</b> "Waiting list mein <b>pehla</b> passenger kaun hai?" — <b>First</b>. "Is <b>PNR</b> wala passenger dhoondho" — <b>theek ek</b> hona chahiye; do hon to bada bug hai — <b>Single</b>. "Kya <b>koi</b> berth khaali hai?" — pehli khaali berth par ruk jao — <b>Any</b>. Aur chart <b>page by page</b> dikhaya jaata hai, coach aur berth ke order mein — <b>OrderBy + Skip/Take</b>.</p>
<ul>
<li><b>First()</b> = pehla match; koi na ho to <b>throw</b>. <b>Single()</b> = <b>iklauta</b> match; zero <b>ya</b> kai hon to throw — uniqueness assert karne ke liye (unique key se lookup).</li>
<li><b>...OrDefault()</b> kuch match na ho to <code>default</code> deta hai (<code>null</code>, ya <code>int</code> ke liye <code>0</code>) — par <code>SingleOrDefault()</code> <b>duplicates par phir bhi throw</b> karta hai.</li>
<li><b>Any()</b> poochhta hai "kam se kam ek hai?" aur pehle match par ruk jaata hai — existence checks ke liye sahi tool (<code>Count()</code> se poori tulna Q&amp;A mein).</li>
<li><b>Paging</b>: <b>pehle sort karo</b>, phir <code>Skip((page - 1) * size).Take(size)</code>. <code>ORDER BY</code> ke bina database kisi row order ka waada nahi karta, isliye pages mein rows dohra sakti hain ya chhoot sakti hain.</li>
</ul>
<p>Aur operators — <code>Distinct</code>/<code>DistinctBy</code>, <code>MinBy</code>/<code>MaxBy</code>, <code>All</code>, keyset paging — neeche ke detailed sections mein hain.</p>
<p><b>Kab use karein:</b> <code>Single</code> jab duplicates ka matlab kharaab data ho; <code>FirstOrDefault</code> jab "nahi mila" normal baat ho; "exists?" ke liye <code>Any</code>. <b>Kab nahi:</b> jab "nahi mila" expected ho tab <code>First()</code> — saaf 404 ki jagah exception milega.</p>`
      }
    },
    {
      id: "deferred-in-code",
      depth: "detailed",
      title: {
        en: "Deferred execution in code: when the query runs, what it sees, and when it stops early",
        hi: "Code में deferred execution: query कब चलती है, क्या देखती है, और कब जल्दी रुकती है",
        hg: "Code mein deferred execution: query kab chalti hai, kya dekhti hai, aur kab jaldi rukti hai"
      },
      body: {
        en: `<p><b>Analogy — the railway reservation chart:</b> you can book or cancel tickets for days, but the <b>chart is prepared only a few hours before departure</b>. Whatever bookings exist <b>at that moment</b> go on the chart. Once the chart is printed, later changes do not appear on that paper. A deferred query is the "prepare chart" instruction; enumerating it prepares the chart from the current bookings; <code>ToList()</code> is the printed copy.</p>
<ul>
<li><code>Where</code>, <code>Select</code> and friends return an <b>iterator object</b> that remembers the source and your lambda. No item is read until someone calls <code>GetEnumerator()</code>/<code>MoveNext()</code> — that is what <code>foreach</code>, <code>ToList()</code>, <code>Count()</code> and <code>First()</code> do.</li>
<li><b>Item by item</b>: in a <code>Where(...).Select(...)</code> chain, item 1 goes through <code>Where</code> and then <code>Select</code> before item 2 is even read. It is a pipeline, not "filter everything, then project everything".</li>
<li><b>Short-circuit</b>: <code>First()</code>, <code>Any()</code>, <code>Take(n)</code> stop pulling items as soon as they have their answer. <code>Count()</code>, <code>Sum()</code> and <code>ToList()</code> read to the end.</li>
<li><b>Captured variables</b>: the lambda captures the <b>variable</b>, not its value (a closure, Day 2). If you change <code>minLength</code> after building the query, the next run uses the new value.</li>
<li><b>Source changes</b>: items added to a <code>List</code> before enumeration are seen. Changing the list <b>during</b> enumeration throws <code>InvalidOperationException</code> ("Collection was modified").</li>
<li><b>Snapshot</b>: <code>ToList()</code>/<code>ToArray()</code> run the query <b>once</b> and copy the results. Later changes to the source do not affect that copy (the objects inside are still shared references).</li>
<li><b>Exceptions are deferred too</b>: a <code>DivideByZeroException</code> inside <code>Select</code> appears during the <code>foreach</code>, maybe after some items were already processed. (Argument checks such as a <code>null</code> source are eager: <code>ArgumentNullException</code> at the call.)</li>
</ul>
<p><b>When to use:</b> build queries step by step (<code>if (city != null) query = query.Where(...)</code>) and let them run once at the end; stream large sequences with <code>foreach</code>. <b>When not:</b> do not return a deferred query that depends on something that will be gone (a disposed <code>DbContext</code>, a closed file) — materialize it first; and do not rely on "when exactly the lambda runs" for side effects like logging or counters in real code.</p>`,
        hi: `<p><b>Analogy — railway reservation chart:</b> आप कई दिनों तक tickets book या cancel कर सकते हो, पर <b>chart departure से कुछ घंटे पहले ही बनता है</b>। उस <b>पल</b> जो bookings हैं, वही chart पर जाती हैं। Chart print होने के बाद के बदलाव उस कागज़ पर नहीं आते। Deferred query "chart बनाओ" वाला instruction है; उसे enumerate करना current bookings से chart बनाना है; <code>ToList()</code> printed copy है।</p>
<ul>
<li><code>Where</code>, <code>Select</code> वगैरह एक <b>iterator object</b> return करते हैं जो source और आपका lambda याद रखता है। जब तक कोई <code>GetEnumerator()</code>/<code>MoveNext()</code> call नहीं करता, एक भी item नहीं पढ़ा जाता — <code>foreach</code>, <code>ToList()</code>, <code>Count()</code> और <code>First()</code> यही करते हैं।</li>
<li><b>Item by item</b>: <code>Where(...).Select(...)</code> chain में item 1, <code>Where</code> और फिर <code>Select</code> से गुज़रता है, उसके बाद item 2 पढ़ा जाता है। यह pipeline है, "पहले सब filter, फिर सब project" नहीं।</li>
<li><b>Short-circuit</b>: <code>First()</code>, <code>Any()</code>, <code>Take(n)</code> जवाब मिलते ही items लेना बंद कर देते हैं। <code>Count()</code>, <code>Sum()</code> और <code>ToList()</code> आख़िर तक पढ़ते हैं।</li>
<li><b>Captured variables</b>: lambda <b>variable</b> को capture करता है, उसकी value को नहीं (closure, Day 2)। Query बनाने के बाद <code>minLength</code> बदलो, तो अगली बार नई value use होगी।</li>
<li><b>Source में बदलाव</b>: enumeration से पहले <code>List</code> में जोड़े गए items दिखते हैं। Enumeration के <b>दौरान</b> list बदलने पर <code>InvalidOperationException</code> ("Collection was modified") आता है।</li>
<li><b>Snapshot</b>: <code>ToList()</code>/<code>ToArray()</code> query को <b>एक बार</b> चलाकर results copy कर लेते हैं। बाद में source बदलने से वो copy नहीं बदलती (अंदर के objects फिर भी shared references हैं)।</li>
<li><b>Exceptions भी deferred हैं</b>: <code>Select</code> के अंदर का <code>DivideByZeroException</code> <code>foreach</code> के दौरान आता है, शायद कुछ items process होने के बाद। (Argument checks जैसे <code>null</code> source तुरंत होते हैं: call पर ही <code>ArgumentNullException</code>।)</li>
</ul>
<p><b>कब use करें:</b> queries step by step बनाओ (<code>if (city != null) query = query.Where(...)</code>) और आख़िर में एक बार चलाओ; बड़े sequences को <code>foreach</code> से stream करो। <b>कब नहीं:</b> ऐसी deferred query return मत करो जो किसी ऐसी चीज़ पर depend करे जो ख़त्म हो जाएगी (disposed <code>DbContext</code>, बंद file) — पहले materialize करो; और real code में logging या counters जैसे side effects के लिए इस पर भरोसा मत करो कि lambda "ठीक कब" चलेगा।</p>`,
        hg: `<p><b>Analogy — railway reservation chart:</b> aap kai dinon tak tickets book ya cancel kar sakte ho, par <b>chart departure se kuch ghante pehle hi banta hai</b>. Us <b>pal</b> jo bookings hain, wahi chart par jaati hain. Chart print hone ke baad ke badlaav us kaagaz par nahi aate. Deferred query "chart banao" wala instruction hai; use enumerate karna current bookings se chart banana hai; <code>ToList()</code> printed copy hai.</p>
<ul>
<li><code>Where</code>, <code>Select</code> waghera ek <b>iterator object</b> return karte hain jo source aur aapka lambda yaad rakhta hai. Jab tak koi <code>GetEnumerator()</code>/<code>MoveNext()</code> call nahi karta, ek bhi item nahi padha jaata — <code>foreach</code>, <code>ToList()</code>, <code>Count()</code> aur <code>First()</code> yahi karte hain.</li>
<li><b>Item by item</b>: <code>Where(...).Select(...)</code> chain mein item 1, <code>Where</code> aur phir <code>Select</code> se guzarta hai, uske baad item 2 padha jaata hai. Yeh pipeline hai, "pehle sab filter, phir sab project" nahi.</li>
<li><b>Short-circuit</b>: <code>First()</code>, <code>Any()</code>, <code>Take(n)</code> jawaab milte hi items lena band kar dete hain. <code>Count()</code>, <code>Sum()</code> aur <code>ToList()</code> aakhir tak padhte hain.</li>
<li><b>Captured variables</b>: lambda <b>variable</b> ko capture karta hai, uski value ko nahi (closure, Day 2). Query banane ke baad <code>minLength</code> badlo, to agli baar nayi value use hogi.</li>
<li><b>Source mein badlaav</b>: enumeration se pehle <code>List</code> mein jode gaye items dikhte hain. Enumeration ke <b>dauraan</b> list badalne par <code>InvalidOperationException</code> ("Collection was modified") aata hai.</li>
<li><b>Snapshot</b>: <code>ToList()</code>/<code>ToArray()</code> query ko <b>ek baar</b> chalakar results copy kar lete hain. Baad mein source badalne se woh copy nahi badalti (andar ke objects phir bhi shared references hain).</li>
<li><b>Exceptions bhi deferred hain</b>: <code>Select</code> ke andar ka <code>DivideByZeroException</code> <code>foreach</code> ke dauraan aata hai, shayad kuch items process hone ke baad. (Argument checks jaise <code>null</code> source turant hote hain: call par hi <code>ArgumentNullException</code>.)</li>
</ul>
<p><b>Kab use karein:</b> queries step by step banao (<code>if (city != null) query = query.Where(...)</code>) aur aakhir mein ek baar chalao; bade sequences ko <code>foreach</code> se stream karo. <b>Kab nahi:</b> aisi deferred query return mat karo jo kisi aisi cheez par depend kare jo khatam ho jaayegi (disposed <code>DbContext</code>, band file) — pehle materialize karo; aur real code mein logging ya counters jaise side effects ke liye is par bharosa mat karo ki lambda "theek kab" chalega.</p>`
      },
      code: [{
        caption: {
          en: "Count the lambda calls: nothing at build time, new data and new variable values at run time, ToList as a snapshot, First stops early",
          hi: "Lambda calls गिनो: बनाते समय कुछ नहीं, चलते समय नया data और नई values, ToList एक snapshot, First जल्दी रुकता है",
          hg: "Lambda calls gino: banate samay kuch nahi, chalte samay naya data aur nayi values, ToList ek snapshot, First jaldi rukta hai"
        },
        check: "run",
        expected: "Built. checks = 0\nforeach got sugar\nAfter foreach: checks = 4\nAfter ToList: checks = 8\nsnapshot = [sugar], live count = 2, checks = 13\nFirst = sugar, checks = 17",
        src: `var stock = new List<string> { "rice", "dal", "atta" };
int minLength = 4;
int checks = 0;

// 1. Building the query runs nothing
var query = stock.Where(item =>
{
    checks++;
    return item.Length >= minLength;
});
Console.WriteLine($"Built. checks = {checks}");

// 2. Changes BEFORE enumeration are visible to the query
stock.Add("sugar");
minLength = 5;

// 3. foreach runs it with today's data and today's minLength
foreach (var item in query)
    Console.WriteLine($"foreach got {item}");
Console.WriteLine($"After foreach: checks = {checks}");

// 4. ToList() runs it AGAIN and keeps a copy
List<string> snapshot = query.ToList();
Console.WriteLine($"After ToList: checks = {checks}");

stock.Add("jaggery");
// the copy does not change; the query sees the new item (and runs a third time)
Console.WriteLine($"snapshot = [{string.Join(", ", snapshot)}], live count = {query.Count()}, checks = {checks}");

// 5. First() stops at the first match: only 4 more checks, not 5
Console.WriteLine($"First = {query.First()}, checks = {checks}");`
      }]
    },
    {
      id: "multiple-enumeration-in-code",
      depth: "detailed",
      title: {
        en: "Multiple enumeration in code: the hidden double work, and how to fix it",
        hi: "Code में multiple enumeration: छुपा हुआ दोगुना काम, और उसे कैसे ठीक करें",
        hg: "Code mein multiple enumeration: chhupa hua dugna kaam, aur use kaise theek karein"
      },
      body: {
        en: `<p><b>Analogy — counting wedding guests:</b> the caterer walks through the hall to <b>count</b> the guests, then walks through it <b>again</b> to hand out sweets. Two walks for one job. And if guests keep arriving, the two walks may not even agree — 120 counted, 127 served. Enumerating a lazy query twice is exactly this: double the work, and possibly <b>different results</b> each time.</p>
<ul>
<li><b>Where it bites</b>: a method takes <code>IEnumerable&lt;T&gt;</code>, calls <code>items.Count()</code> or <code>items.Any()</code>, then loops with <code>foreach</code>. If the caller passed a lazy query, it runs twice.</li>
<li><b>The cost depends on the source</b>: over a <code>List</code> it is just extra CPU; over an <b>EF Core query</b> it is <b>two SQL round trips</b>; over a <code>yield</code> method that reads a file or calls an API, the I/O happens twice.</li>
<li><b>Results can differ</b>: if the source changed between the two runs, or the lambda is not pure (<code>Select(_ =&gt; Guid.NewGuid())</code>, <code>DateTime.Now</code>, random numbers), the second run gives different items.</li>
<li><b>Loops make it worse</b>: <code>for (int i = 0; i &lt; query.Count(); i++)</code> runs the query on <b>every</b> iteration; <code>query.ElementAt(i)</code> inside a loop restarts from the beginning each time — O(n²).</li>
<li><b>Fixes</b>: (1) materialize <b>once</b> at the boundary — <code>var list = query.ToList();</code> — and use <code>list.Count</code>; (2) if a method needs a count or several passes, ask for <b><code>IReadOnlyCollection&lt;T&gt;</code></b> or <b><code>IReadOnlyList&lt;T&gt;</code></b> so the caller must hand over a real collection; (3) or do everything in <b>one pass</b> (count while you loop).</li>
<li><b>Tooling</b>: analyzer <b>CA1851</b> ("Possible multiple enumerations of IEnumerable collection") — it is not enabled by default, so turn it on in <code>.editorconfig</code>. Rider/ReSharper also show a "possible multiple enumeration" warning.</li>
</ul>
<p><b>When to use</b> (an <code>IEnumerable&lt;T&gt;</code> parameter): when the method truly makes a <b>single pass</b> (stream, filter, write out) — it then accepts lists, arrays and lazy queries alike. <b>When not:</b> when the method needs <code>Count</code>, indexing, or more than one pass — take <code>IReadOnlyList&lt;T&gt;</code>/<code>IReadOnlyCollection&lt;T&gt;</code> instead of calling <code>ToList()</code> "just in case" inside every method.</p>`,
        hi: `<p><b>Analogy — शादी के मेहमान गिनना:</b> caterer पहले hall में घूमकर मेहमान <b>गिनता है</b>, फिर मिठाई बाँटने के लिए <b>दोबारा</b> घूमता है। एक काम के लिए दो चक्कर। और अगर मेहमान आते रहें, तो दोनों चक्करों के numbers भी अलग हो सकते हैं — गिने 120, मिठाई बँटी 127 को। Lazy query को दो बार enumerate करना बिल्कुल यही है: दोगुना काम, और हर बार <b>अलग results</b> भी हो सकते हैं।</p>
<ul>
<li><b>कहाँ चोट लगती है</b>: कोई method <code>IEnumerable&lt;T&gt;</code> लेता है, <code>items.Count()</code> या <code>items.Any()</code> call करता है, फिर <code>foreach</code> से loop करता है। अगर caller ने lazy query दी है, तो वो दो बार चलती है।</li>
<li><b>Cost source पर depend करता है</b>: <code>List</code> पर बस थोड़ा extra CPU; <b>EF Core query</b> पर <b>दो SQL round trips</b>; file पढ़ने या API call करने वाले <code>yield</code> method पर I/O दो बार।</li>
<li><b>Results अलग हो सकते हैं</b>: अगर दोनों runs के बीच source बदल गया, या lambda pure नहीं है (<code>Select(_ =&gt; Guid.NewGuid())</code>, <code>DateTime.Now</code>, random numbers), तो दूसरी बार अलग items मिलेंगे।</li>
<li><b>Loops इसे और बिगाड़ते हैं</b>: <code>for (int i = 0; i &lt; query.Count(); i++)</code> <b>हर</b> iteration पर query चलाता है; loop के अंदर <code>query.ElementAt(i)</code> हर बार शुरू से चलता है — O(n²)।</li>
<li><b>Fixes</b>: (1) boundary पर <b>एक बार</b> materialize करो — <code>var list = query.ToList();</code> — और <code>list.Count</code> use करो; (2) अगर method को count या कई passes चाहिए, तो <b><code>IReadOnlyCollection&lt;T&gt;</code></b> या <b><code>IReadOnlyList&lt;T&gt;</code></b> माँगो, ताकि caller को असली collection देनी पड़े; (3) या सब कुछ <b>एक ही pass</b> में करो (loop करते-करते गिनो)।</li>
<li><b>Tooling</b>: analyzer <b>CA1851</b> ("Possible multiple enumerations of IEnumerable collection") — यह by default enabled नहीं है, इसलिए <code>.editorconfig</code> में on करो। Rider/ReSharper भी "possible multiple enumeration" warning दिखाते हैं।</li>
</ul>
<p><b>कब use करें</b> (<code>IEnumerable&lt;T&gt;</code> parameter): जब method सच में <b>एक ही pass</b> करता है (stream, filter, लिखना) — तब वो lists, arrays और lazy queries सब ले सकता है। <b>कब नहीं:</b> जब method को <code>Count</code>, indexing, या एक से ज़्यादा pass चाहिए — तब हर method के अंदर "just in case" <code>ToList()</code> लगाने की जगह <code>IReadOnlyList&lt;T&gt;</code>/<code>IReadOnlyCollection&lt;T&gt;</code> लो।</p>`,
        hg: `<p><b>Analogy — shaadi ke mehmaan ginna:</b> caterer pehle hall mein ghoomkar mehmaan <b>ginta hai</b>, phir mithai baantne ke liye <b>dobara</b> ghoomta hai. Ek kaam ke liye do chakkar. Aur agar mehmaan aate rahein, to dono chakkaron ke numbers bhi alag ho sakte hain — gine 120, mithai bati 127 ko. Lazy query ko do baar enumerate karna bilkul yahi hai: dugna kaam, aur har baar <b>alag results</b> bhi ho sakte hain.</p>
<ul>
<li><b>Kahan chot lagti hai</b>: koi method <code>IEnumerable&lt;T&gt;</code> leta hai, <code>items.Count()</code> ya <code>items.Any()</code> call karta hai, phir <code>foreach</code> se loop karta hai. Agar caller ne lazy query di hai, to woh do baar chalti hai.</li>
<li><b>Cost source par depend karta hai</b>: <code>List</code> par bas thoda extra CPU; <b>EF Core query</b> par <b>do SQL round trips</b>; file padhne ya API call karne wale <code>yield</code> method par I/O do baar.</li>
<li><b>Results alag ho sakte hain</b>: agar dono runs ke beech source badal gaya, ya lambda pure nahi hai (<code>Select(_ =&gt; Guid.NewGuid())</code>, <code>DateTime.Now</code>, random numbers), to doosri baar alag items milenge.</li>
<li><b>Loops ise aur bigaadte hain</b>: <code>for (int i = 0; i &lt; query.Count(); i++)</code> <b>har</b> iteration par query chalata hai; loop ke andar <code>query.ElementAt(i)</code> har baar shuru se chalta hai — O(n²).</li>
<li><b>Fixes</b>: (1) boundary par <b>ek baar</b> materialize karo — <code>var list = query.ToList();</code> — aur <code>list.Count</code> use karo; (2) agar method ko count ya kai passes chahiye, to <b><code>IReadOnlyCollection&lt;T&gt;</code></b> ya <b><code>IReadOnlyList&lt;T&gt;</code></b> maango, taaki caller ko asli collection deni pade; (3) ya sab kuch <b>ek hi pass</b> mein karo (loop karte-karte gino).</li>
<li><b>Tooling</b>: analyzer <b>CA1851</b> ("Possible multiple enumerations of IEnumerable collection") — yeh by default enabled nahi hai, isliye <code>.editorconfig</code> mein on karo. Rider/ReSharper bhi "possible multiple enumeration" warning dikhate hain.</li>
</ul>
<p><b>Kab use karein</b> (<code>IEnumerable&lt;T&gt;</code> parameter): jab method sach mein <b>ek hi pass</b> karta hai (stream, filter, likhna) — tab woh lists, arrays aur lazy queries sab le sakta hai. <b>Kab nahi:</b> jab method ko <code>Count</code>, indexing, ya ek se zyada pass chahiye — tab har method ke andar "just in case" <code>ToList()</code> lagane ki jagah <code>IReadOnlyList&lt;T&gt;</code>/<code>IReadOnlyCollection&lt;T&gt;</code> lo.</p>`
      },
      code: [{
        caption: {
          en: "A fake database that counts its calls: IEnumerable parameter = 2 calls; materialize once + IReadOnlyCollection = 1 call; Count() in a loop condition",
          hi: "एक नकली database जो अपनी calls गिनता है: IEnumerable parameter = 2 calls; एक बार materialize + IReadOnlyCollection = 1 call; loop condition में Count()",
          hg: "Ek nakli database jo apni calls ginta hai: IEnumerable parameter = 2 calls; ek baar materialize + IReadOnlyCollection = 1 call; loop condition mein Count()"
        },
        check: "run",
        expected: "Total: 3\n - Asha\n - Ravi\n - Neha\nDB calls so far: 2\nTotal: 3\n - Asha\n - Ravi\n - Neha\nDB calls so far: 3\nWhere ran 9 times for 3 customers",
        src: `var db = new FakeDb();

// Lazy, like an EF Core query or a yield method: nothing runs yet
IEnumerable<string> customers = db.GetCustomers();

// Bad: the method enumerates twice -> two "database calls"
PrintReport(customers);
Console.WriteLine($"DB calls so far: {db.Calls}");

// Good: run the query once, pass a real collection
List<string> list = db.GetCustomers().ToList();
PrintReportFixed(list);
Console.WriteLine($"DB calls so far: {db.Calls}");

// Red flag: Count() in a loop condition re-runs the query on every iteration
int checks = 0;
var active = list.Where(c => { checks++; return c != "Ravi"; });
for (int i = 0; i < active.Count(); i++) { /* ... */ }
Console.WriteLine($"Where ran {checks} times for {list.Count} customers");

static void PrintReport(IEnumerable<string> items)
{
    Console.WriteLine($"Total: {items.Count()}");          // enumeration 1
    foreach (var c in items) Console.WriteLine($" - {c}"); // enumeration 2
}

static void PrintReportFixed(IReadOnlyCollection<string> items)
{
    Console.WriteLine($"Total: {items.Count}");            // a property: no enumeration
    foreach (var c in items) Console.WriteLine($" - {c}");
}

class FakeDb
{
    public int Calls { get; private set; }

    // An iterator method: its body runs again for EVERY enumeration
    public IEnumerable<string> GetCustomers()
    {
        Calls++;                 // imagine: open connection, run SELECT
        yield return "Asha";
        yield return "Ravi";
        yield return "Neha";
    }
}`
      }]
    },
    {
      id: "iqueryable-in-code",
      depth: "detailed",
      title: {
        en: "IQueryable in code: Func vs Expression, and the line where the query leaves the database",
        hi: "Code में IQueryable: Func बनाम Expression, और वो line जहाँ query database से बाहर आ जाती है",
        hg: "Code mein IQueryable: Func vs Expression, aur woh line jahan query database se bahar aa jaati hai"
      },
      body: {
        en: `<p><b>Analogy — a written order slip vs a sealed machine:</b> if you write your order on a slip in plain words ("basmati, 5 bags"), the shopkeeper can <b>read</b> it and pack only that. If instead you hand him a <b>sealed machine</b> that answers yes/no for each bag, he cannot read what is inside — so he must send you <b>everything</b>, and you run the machine at home. An <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> is the readable slip; a <code>Func&lt;T,bool&gt;</code> is the sealed machine.</p>
<ul>
<li>The <b>same lambda</b> <code>p =&gt; p.Price &gt; 100</code> becomes either a <b>delegate</b> (compiled code) or an <b>expression tree</b> (objects that describe the code), depending on the <b>target type</b>: <code>Func&lt;...&gt;</code> or <code>Expression&lt;Func&lt;...&gt;&gt;</code>.</li>
<li>An expression tree can be <b>inspected</b>: <code>Body</code>, <code>NodeType</code> (<code>GreaterThan</code>), left side <code>p.Price</code>, right side <code>100</code>. That is what EF Core reads to write <code>WHERE [p].[Price] &gt; 100</code>.</li>
<li>Only expression lambdas can become trees. A lambda with a <code>{ ... }</code> statement body gives compiler error <b>CS0834</b>.</li>
<li><code>IQueryable&lt;T&gt;</code> has three parts: <code>Expression</code> (the tree so far), <code>ElementType</code>, and <code>Provider</code>. Each <code>Queryable</code> operator just <b>adds a node</b> to the tree. When you enumerate, the provider translates and executes it.</li>
<li><b>The compile-time type picks the method</b>: on an <code>IQueryable&lt;T&gt;</code> variable, <code>Where(lambda)</code> binds to <code>Queryable.Where</code>. On an <code>IEnumerable&lt;T&gt;</code> variable — or when you pass a <b><code>Func</code> variable</b> — it binds to <code>Enumerable.Where</code>, and from there on everything runs in memory.</li>
<li><b>Switching points</b>: <code>AsEnumerable()</code> = "from here on, LINQ to Objects" (still lazy, rows stream in); <code>ToList()</code> = run now and copy everything; <code>AsQueryable()</code> on a list = wraps it in an in-memory <code>IQueryable</code> (useful in tests and for dynamic queries, not for speed).</li>
<li><b>Classic trap</b>: a repository method <code>Find(Func&lt;Order,bool&gt; filter)</code> that does <code>db.Orders.Where(filter)</code> compiles fine, but EF Core reads <b>all rows</b> of <code>Orders</code> (all columns, no <code>WHERE</code>) and filters in memory. Use <code>Expression&lt;Func&lt;Order,bool&gt;&gt;</code>.</li>
<li>Day 5–6 show the SQL that EF Core generates (<code>ToQueryString()</code>, logging) and what it can and cannot translate.</li>
</ul>
<p><b>When to use:</b> <code>Expression&lt;Func&lt;...&gt;&gt;</code> parameters for filters that must run in the database (specifications, repository filters); <code>AsEnumerable()</code> when the last step needs a C# method SQL cannot run. <b>When not:</b> do not take <code>Expression</code> parameters for in-memory-only code (a plain <code>Func</code> is simpler and faster), and do not call <code>AsEnumerable()</code>/<code>ToList()</code> before the filters that the database could have done.</p>`,
        hi: `<p><b>Analogy — लिखी हुई order slip बनाम बंद machine:</b> अगर आप अपना order slip पर साफ़ शब्दों में लिखो ("basmati, 5 बोरे"), तो दुकानदार उसे <b>पढ़</b> सकता है और सिर्फ़ वही pack करता है। अगर उसकी जगह आप उसे एक <b>बंद machine</b> दे दो जो हर बोरे के लिए हाँ/ना बताती है, तो वो अंदर क्या है पढ़ नहीं सकता — इसलिए उसे आपको <b>सब कुछ</b> भेजना पड़ता है, और machine आप घर पर चलाते हो। <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> पढ़ने लायक slip है; <code>Func&lt;T,bool&gt;</code> बंद machine है।</p>
<ul>
<li><b>वही lambda</b> <code>p =&gt; p.Price &gt; 100</code> या तो <b>delegate</b> (compiled code) बनता है या <b>expression tree</b> (code को describe करने वाले objects) — यह <b>target type</b> पर depend करता है: <code>Func&lt;...&gt;</code> या <code>Expression&lt;Func&lt;...&gt;&gt;</code>।</li>
<li>Expression tree को <b>पढ़ा</b> जा सकता है: <code>Body</code>, <code>NodeType</code> (<code>GreaterThan</code>), left side <code>p.Price</code>, right side <code>100</code>। EF Core यही पढ़कर <code>WHERE [p].[Price] &gt; 100</code> लिखता है।</li>
<li>सिर्फ़ expression lambdas ही trees बन सकते हैं। <code>{ ... }</code> statement body वाला lambda compiler error <b>CS0834</b> देता है।</li>
<li><code>IQueryable&lt;T&gt;</code> के तीन हिस्से हैं: <code>Expression</code> (अब तक का tree), <code>ElementType</code>, और <code>Provider</code>। हर <code>Queryable</code> operator बस tree में एक <b>node जोड़ता है</b>। Enumerate करने पर provider उसे translate करके चलाता है।</li>
<li><b>Compile-time type method चुनता है</b>: <code>IQueryable&lt;T&gt;</code> variable पर <code>Where(lambda)</code>, <code>Queryable.Where</code> से bind होता है। <code>IEnumerable&lt;T&gt;</code> variable पर — या जब आप <b><code>Func</code> variable</b> pass करते हो — यह <code>Enumerable.Where</code> से bind होता है, और वहाँ से सब कुछ memory में चलता है।</li>
<li><b>Switching points</b>: <code>AsEnumerable()</code> = "यहाँ से आगे LINQ to Objects" (अब भी lazy, rows stream होकर आती हैं); <code>ToList()</code> = अभी चलाओ और सब copy करो; list पर <code>AsQueryable()</code> = उसे in-memory <code>IQueryable</code> में wrap करता है (tests और dynamic queries के लिए काम का, speed के लिए नहीं)।</li>
<li><b>Classic trap</b>: repository method <code>Find(Func&lt;Order,bool&gt; filter)</code> जो <code>db.Orders.Where(filter)</code> करता है, compile तो हो जाता है, पर EF Core <code>Orders</code> की <b>सारी rows</b> पढ़ता है (सारे columns, कोई <code>WHERE</code> नहीं) और filter memory में करता है। <code>Expression&lt;Func&lt;Order,bool&gt;&gt;</code> use करो।</li>
<li>Day 5–6 में दिखेगा कि EF Core कौन सा SQL बनाता है (<code>ToQueryString()</code>, logging) और क्या translate कर सकता है, क्या नहीं।</li>
</ul>
<p><b>कब use करें:</b> जो filters database में चलने चाहिए (specifications, repository filters), उनके लिए <code>Expression&lt;Func&lt;...&gt;&gt;</code> parameters; जब आख़िरी step में ऐसा C# method चाहिए जो SQL नहीं चला सकता, तब <code>AsEnumerable()</code>। <b>कब नहीं:</b> सिर्फ़ in-memory code के लिए <code>Expression</code> parameters मत लो (plain <code>Func</code> आसान और तेज़ है), और जो filters database कर सकता था, उनसे पहले <code>AsEnumerable()</code>/<code>ToList()</code> मत लगाओ।</p>`,
        hg: `<p><b>Analogy — likhi hui order slip vs band machine:</b> agar aap apna order slip par saaf shabdon mein likho ("basmati, 5 bore"), to dukaandaar use <b>padh</b> sakta hai aur sirf wahi pack karta hai. Agar uski jagah aap use ek <b>band machine</b> de do jo har bore ke liye haan/na batati hai, to woh andar kya hai padh nahi sakta — isliye use aapko <b>sab kuch</b> bhejna padta hai, aur machine aap ghar par chalate ho. <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> padhne laayak slip hai; <code>Func&lt;T,bool&gt;</code> band machine hai.</p>
<ul>
<li><b>Wahi lambda</b> <code>p =&gt; p.Price &gt; 100</code> ya to <b>delegate</b> (compiled code) banta hai ya <b>expression tree</b> (code ko describe karne wale objects) — yeh <b>target type</b> par depend karta hai: <code>Func&lt;...&gt;</code> ya <code>Expression&lt;Func&lt;...&gt;&gt;</code>.</li>
<li>Expression tree ko <b>padha</b> ja sakta hai: <code>Body</code>, <code>NodeType</code> (<code>GreaterThan</code>), left side <code>p.Price</code>, right side <code>100</code>. EF Core yahi padhkar <code>WHERE [p].[Price] &gt; 100</code> likhta hai.</li>
<li>Sirf expression lambdas hi trees ban sakte hain. <code>{ ... }</code> statement body wala lambda compiler error <b>CS0834</b> deta hai.</li>
<li><code>IQueryable&lt;T&gt;</code> ke teen hisse hain: <code>Expression</code> (ab tak ka tree), <code>ElementType</code>, aur <code>Provider</code>. Har <code>Queryable</code> operator bas tree mein ek <b>node jodta hai</b>. Enumerate karne par provider use translate karke chalata hai.</li>
<li><b>Compile-time type method chunta hai</b>: <code>IQueryable&lt;T&gt;</code> variable par <code>Where(lambda)</code>, <code>Queryable.Where</code> se bind hota hai. <code>IEnumerable&lt;T&gt;</code> variable par — ya jab aap <b><code>Func</code> variable</b> pass karte ho — yeh <code>Enumerable.Where</code> se bind hota hai, aur wahan se sab kuch memory mein chalta hai.</li>
<li><b>Switching points</b>: <code>AsEnumerable()</code> = "yahan se aage LINQ to Objects" (ab bhi lazy, rows stream hokar aati hain); <code>ToList()</code> = abhi chalao aur sab copy karo; list par <code>AsQueryable()</code> = use in-memory <code>IQueryable</code> mein wrap karta hai (tests aur dynamic queries ke liye kaam ka, speed ke liye nahi).</li>
<li><b>Classic trap</b>: repository method <code>Find(Func&lt;Order,bool&gt; filter)</code> jo <code>db.Orders.Where(filter)</code> karta hai, compile to ho jaata hai, par EF Core <code>Orders</code> ki <b>saari rows</b> padhta hai (saare columns, koi <code>WHERE</code> nahi) aur filter memory mein karta hai. <code>Expression&lt;Func&lt;Order,bool&gt;&gt;</code> use karo.</li>
<li>Day 5–6 mein dikhega ki EF Core kaun sa SQL banata hai (<code>ToQueryString()</code>, logging) aur kya translate kar sakta hai, kya nahi.</li>
</ul>
<p><b>Kab use karein:</b> jo filters database mein chalne chahiye (specifications, repository filters), unke liye <code>Expression&lt;Func&lt;...&gt;&gt;</code> parameters; jab aakhri step mein aisa C# method chahiye jo SQL nahi chala sakta, tab <code>AsEnumerable()</code>. <b>Kab nahi:</b> sirf in-memory code ke liye <code>Expression</code> parameters mat lo (plain <code>Func</code> aasaan aur tez hai), aur jo filters database kar sakta tha, unse pehle <code>AsEnumerable()</code>/<code>ToList()</code> mat lagao.</p>`
      },
      code: [{
        caption: {
          en: "The same lambda as code and as data; the variable's type (and a Func variable) decides whether you stay in IQueryable",
          hi: "वही lambda code के रूप में और data के रूप में; variable का type (और Func variable) तय करता है कि आप IQueryable में रहोगे या नहीं",
          hg: "Wahi lambda code ke roop mein aur data ke roop mein; variable ka type (aur Func variable) tay karta hai ki aap IQueryable mein rahoge ya nahi"
        },
        check: "run",
        expected: "Expression: p => (p.Price > 100)\nNode: GreaterThan, left: p.Price, right: 100\nstillQuery is IQueryable: True\ninMemory is IQueryable: False\nviaFunc is IQueryable: False\nResults: Ghee | Ghee | Dal, Ghee",
        src: `using System.Linq.Expressions;

var products = new List<Product> { new("Rice", 60), new("Ghee", 550), new("Dal", 120) };

// The same lambda: compiled code vs a tree of objects that describes the code
Func<Product, bool> asCode = p => p.Price > 100;
Expression<Func<Product, bool>> asData = p => p.Price > 100;
Console.WriteLine($"Expression: {asData}");
var body = (BinaryExpression)asData.Body;
Console.WriteLine($"Node: {body.NodeType}, left: {body.Left}, right: {body.Right}");

// IQueryable: each operator adds to the tree. With EF Core this would become SQL.
IQueryable<Product> query = products.AsQueryable()
    .Where(p => p.Price > 100)
    .OrderBy(p => p.Name);

// Same object, but the variable's TYPE picks Queryable.Where or Enumerable.Where
var stillQuery = query.Where(p => p.Name.StartsWith("G"));    // Queryable.Where (Expression)
IEnumerable<Product> asEnumerable = query;
var inMemory = asEnumerable.Where(p => p.Name.StartsWith("G")); // Enumerable.Where (Func)
var viaFunc = query.Where(asCode);                              // a Func variable: Enumerable.Where too

Console.WriteLine($"stillQuery is IQueryable: {stillQuery is IQueryable<Product>}");
Console.WriteLine($"inMemory is IQueryable: {inMemory is IQueryable<Product>}");
Console.WriteLine($"viaFunc is IQueryable: {viaFunc is IQueryable<Product>}");

// Same results here - the difference is WHERE the filter would run against a real database
Console.WriteLine($"Results: {Names(stillQuery)} | {Names(inMemory)} | {Names(viaFunc)}");

static string Names(IEnumerable<Product> items) => string.Join(", ", items.Select(p => p.Name));

record Product(string Name, int Price);`
      }]
    },
    {
      id: "projection-in-code",
      depth: "detailed",
      title: {
        en: "Where, Select and SelectMany in code (plus Zip) — method and query syntax",
        hi: "Code में Where, Select और SelectMany (साथ में Zip) — method और query syntax",
        hg: "Code mein Where, Select aur SelectMany (saath mein Zip) — method aur query syntax"
      },
      body: {
        en: `<p><b>Analogy — wedding invitations vs plates:</b> you sent invitation cards to families; each card covers several people. The card-printing shop needs <b>one line per card</b> — that is <b>Select</b> (10 cards → 10 lines). The caterer needs <b>one plate per person</b> — open every card and list every member — that is <b>SelectMany</b> (10 cards → maybe 37 people). Same data, different question.</p>
<ul>
<li><b>Where</b> filters: keeps items whose predicate is <code>true</code>. An overload gives the index: <code>Where((x, i) =&gt; i % 2 == 0)</code>.</li>
<li><b>Select</b> projects <b>each</b> item into a new shape: a property, a DTO, an anonymous type <code>new { o.Id, Total = ... }</code>, or a tuple. Output count = input count. <code>Select((x, i) =&gt; ...)</code> also gives the index.</li>
<li>If the projection returns a collection, <code>Select</code> gives a <b>nested</b> sequence (<code>IEnumerable&lt;string[]&gt;</code>), and you would need two <code>foreach</code> loops.</li>
<li><b>SelectMany</b> projects each item to a collection and <b>flattens</b> them into one sequence. An overload with a <b>result selector</b> keeps the parent too: <code>SelectMany(o =&gt; o.Items, (o, item) =&gt; new { o.Id, item })</code>.</li>
<li>In <b>query syntax</b>, SelectMany is simply <b>two <code>from</code> clauses</b>: <code>from o in orders from item in o.Items select ...</code>. With unrelated sequences, two <code>from</code>s make a <b>cross join</b> (every pair).</li>
<li><b>Zip</b> pairs items by position: first with first, second with second — and <b>stops at the shorter</b> sequence. Since .NET Core 3.0 it can return tuples (<code>a.Zip(b)</code>); .NET 6 added a three-sequence version.</li>
<li>In EF Core, a <code>Select</code> to a DTO also <b>limits the columns</b> in the SQL — a cheap, big win compared to loading full entities.</li>
</ul>
<p><b>When to use:</b> <code>Select</code> to shape results (DTOs, view models); <code>SelectMany</code> for "all X of all Y" (all order lines of all orders, all roles of all users); <code>Zip</code> to combine two lists that line up by position. <b>When not:</b> do not use <code>Select</code> for side effects (sending emails, updating objects) — it is lazy and may run zero or many times; use <code>foreach</code>. And do not <code>SelectMany</code> over huge child collections when you only need a count — <code>Sum(o =&gt; o.Items.Count)</code> is cheaper.</p>`,
        hi: `<p><b>Analogy — शादी के invitation cards बनाम थालियाँ:</b> आपने परिवारों को invitation cards भेजे; हर card में कई लोग आते हैं। Card छापने वाली दुकान को <b>हर card की एक line</b> चाहिए — यह है <b>Select</b> (10 cards → 10 lines)। Caterer को <b>हर इंसान की एक थाली</b> चाहिए — हर card खोलो और हर member list करो — यह है <b>SelectMany</b> (10 cards → शायद 37 लोग)। Data वही, सवाल अलग।</p>
<ul>
<li><b>Where</b> filter करता है: वो items रखता है जिनका predicate <code>true</code> है। एक overload index भी देता है: <code>Where((x, i) =&gt; i % 2 == 0)</code>।</li>
<li><b>Select</b> <b>हर</b> item को नए shape में project करता है: एक property, DTO, anonymous type <code>new { o.Id, Total = ... }</code>, या tuple। Output count = input count। <code>Select((x, i) =&gt; ...)</code> से index भी मिलता है।</li>
<li>अगर projection एक collection return करता है, तो <code>Select</code> <b>nested</b> sequence देता है (<code>IEnumerable&lt;string[]&gt;</code>), और आपको दो <code>foreach</code> loops चाहिए होंगे।</li>
<li><b>SelectMany</b> हर item को एक collection में project करता है और उन्हें एक sequence में <b>flatten</b> कर देता है। <b>Result selector</b> वाला overload parent को भी साथ रखता है: <code>SelectMany(o =&gt; o.Items, (o, item) =&gt; new { o.Id, item })</code>।</li>
<li><b>Query syntax</b> में SelectMany बस <b>दो <code>from</code> clauses</b> है: <code>from o in orders from item in o.Items select ...</code>। आपस में unrelated sequences पर दो <code>from</code> एक <b>cross join</b> बनाते हैं (हर pair)।</li>
<li><b>Zip</b> items को position से जोड़ता है: पहला पहले के साथ, दूसरा दूसरे के साथ — और <b>छोटे</b> sequence पर रुक जाता है। .NET Core 3.0 से यह tuples return कर सकता है (<code>a.Zip(b)</code>); .NET 6 में तीन sequences वाला version आया।</li>
<li>EF Core में DTO वाला <code>Select</code> SQL में <b>columns भी कम</b> कर देता है — पूरी entities load करने के मुकाबले सस्ता और बड़ा फ़ायदा।</li>
</ul>
<p><b>कब use करें:</b> results को shape देने (DTOs, view models) के लिए <code>Select</code>; "सारे Y के सारे X" के लिए <code>SelectMany</code> (सारे orders की सारी order lines, सारे users के सारे roles); position से line up होने वाली दो lists जोड़ने के लिए <code>Zip</code>। <b>कब नहीं:</b> side effects (emails भेजना, objects update करना) के लिए <code>Select</code> मत use करो — यह lazy है और zero या कई बार चल सकता है; <code>foreach</code> use करो। और जब सिर्फ़ count चाहिए तो बड़ी child collections पर <code>SelectMany</code> मत करो — <code>Sum(o =&gt; o.Items.Count)</code> सस्ता है।</p>`,
        hg: `<p><b>Analogy — shaadi ke invitation cards vs thaaliyan:</b> aapne parivaaron ko invitation cards bheje; har card mein kai log aate hain. Card chhaapne wali dukaan ko <b>har card ki ek line</b> chahiye — yeh hai <b>Select</b> (10 cards → 10 lines). Caterer ko <b>har insaan ki ek thaali</b> chahiye — har card kholo aur har member list karo — yeh hai <b>SelectMany</b> (10 cards → shayad 37 log). Data wahi, sawaal alag.</p>
<ul>
<li><b>Where</b> filter karta hai: woh items rakhta hai jinka predicate <code>true</code> hai. Ek overload index bhi deta hai: <code>Where((x, i) =&gt; i % 2 == 0)</code>.</li>
<li><b>Select</b> <b>har</b> item ko naye shape mein project karta hai: ek property, DTO, anonymous type <code>new { o.Id, Total = ... }</code>, ya tuple. Output count = input count. <code>Select((x, i) =&gt; ...)</code> se index bhi milta hai.</li>
<li>Agar projection ek collection return karta hai, to <code>Select</code> <b>nested</b> sequence deta hai (<code>IEnumerable&lt;string[]&gt;</code>), aur aapko do <code>foreach</code> loops chahiye honge.</li>
<li><b>SelectMany</b> har item ko ek collection mein project karta hai aur unhe ek sequence mein <b>flatten</b> kar deta hai. <b>Result selector</b> wala overload parent ko bhi saath rakhta hai: <code>SelectMany(o =&gt; o.Items, (o, item) =&gt; new { o.Id, item })</code>.</li>
<li><b>Query syntax</b> mein SelectMany bas <b>do <code>from</code> clauses</b> hai: <code>from o in orders from item in o.Items select ...</code>. Aapas mein unrelated sequences par do <code>from</code> ek <b>cross join</b> banate hain (har pair).</li>
<li><b>Zip</b> items ko position se jodta hai: pehla pehle ke saath, doosra doosre ke saath — aur <b>chhote</b> sequence par ruk jaata hai. .NET Core 3.0 se yeh tuples return kar sakta hai (<code>a.Zip(b)</code>); .NET 6 mein teen sequences wala version aaya.</li>
<li>EF Core mein DTO wala <code>Select</code> SQL mein <b>columns bhi kam</b> kar deta hai — poori entities load karne ke muqaable sasta aur bada fayda.</li>
</ul>
<p><b>Kab use karein:</b> results ko shape dene (DTOs, view models) ke liye <code>Select</code>; "saare Y ke saare X" ke liye <code>SelectMany</code> (saare orders ki saari order lines, saare users ke saare roles); position se line up hone wali do lists jodne ke liye <code>Zip</code>. <b>Kab nahi:</b> side effects (emails bhejna, objects update karna) ke liye <code>Select</code> mat use karo — yeh lazy hai aur zero ya kai baar chal sakta hai; <code>foreach</code> use karo. Aur jab sirf count chahiye to badi child collections par <code>SelectMany</code> mat karo — <code>Sum(o =&gt; o.Items.Count)</code> sasta hai.</p>`
      },
      code: [{
        caption: {
          en: "Where + Select into an anonymous type; Select (nested) vs SelectMany (flat); result selector; two from clauses; Select with index; Zip",
          hi: "Where + Select से anonymous type; Select (nested) बनाम SelectMany (flat); result selector; दो from clauses; index वाला Select; Zip",
          hg: "Where + Select se anonymous type; Select (nested) vs SelectMany (flat); result selector; do from clauses; index wala Select; Zip"
        },
        check: "run",
        expected: "{ Id = 1, Customer = Asha, ItemCount = 2 }\n{ Id = 3, Customer = Neha, ItemCount = 3 }\nSelect: 3 arrays, SelectMany: 5 items\nAsha:Pen, Asha:Notebook, Neha:Bag, Neha:Pen, Neha:Ink\n1-Notebook, 3-Bag, 3-Ink\n1.Pen 2.Notebook 3.Bag 4.Pen 5.Ink\nMon=120, Tue=90",
        src: `var orders = new List<Order>
{
    new(1, "Asha", ["Pen", "Notebook"]),
    new(2, "Ravi", []),
    new(3, "Neha", ["Bag", "Pen", "Ink"])
};

// Where + Select: filter, then shape each order into an anonymous type
var summary = orders
    .Where(o => o.Items.Length > 0)
    .Select(o => new { o.Id, o.Customer, ItemCount = o.Items.Length });
foreach (var s in summary) Console.WriteLine(s);

// Select keeps the nesting (3 arrays); SelectMany flattens (5 items)
IEnumerable<string[]> nested = orders.Select(o => o.Items);
IEnumerable<string> flat = orders.SelectMany(o => o.Items);
Console.WriteLine($"Select: {nested.Count()} arrays, SelectMany: {flat.Count()} items");

// SelectMany with a result selector keeps the parent's data
var lines = orders.SelectMany(o => o.Items, (o, item) => $"{o.Customer}:{item}");
Console.WriteLine(string.Join(", ", lines));

// Query syntax: two 'from' clauses = SelectMany
var lines2 = from o in orders
             from item in o.Items
             where item != "Pen"
             select $"{o.Id}-{item}";
Console.WriteLine(string.Join(", ", lines2));

// Select with the index overload
Console.WriteLine(string.Join(" ", flat.Select((item, i) => $"{i + 1}.{item}")));

// Zip pairs by position and stops at the shorter sequence
string[] days = ["Mon", "Tue", "Wed"];
int[] sales = [120, 90];
Console.WriteLine(string.Join(", ", days.Zip(sales, (d, s) => $"{d}={s}")));

record Order(int Id, string Customer, string[] Items);`
      }]
    },
    {
      id: "ordering-paging-in-code",
      depth: "detailed",
      title: {
        en: "OrderBy, ThenBy and paging in code: stable sorting, Skip/Take, keyset paging, Chunk",
        hi: "Code में OrderBy, ThenBy और paging: stable sorting, Skip/Take, keyset paging, Chunk",
        hg: "Code mein OrderBy, ThenBy aur paging: stable sorting, Skip/Take, keyset paging, Chunk"
      },
      body: {
        en: `<p><b>Analogy — the school assembly line:</b> the PT teacher says "line up <b>by class</b>, and inside each class <b>by height</b>". Class is the main rule (<b>OrderBy</b>), height is the tie-breaker (<b>ThenBy</b>). Two students of the same class and height stay in the order they were already standing — that is a <b>stable</b> sort. Then the photographer takes <b>10 students per photo</b>, frame by frame — that is <b>paging</b>, and it only works if the line does not reshuffle between photos.</p>
<ul>
<li><b>OrderBy / OrderByDescending</b> set the <b>primary</b> sort key. <b>ThenBy / ThenByDescending</b> add tie-breakers. <code>ThenBy</code> is available only after an <code>OrderBy</code> (it works on <code>IOrderedEnumerable&lt;T&gt;</code>).</li>
<li><b>Calling OrderBy twice is a bug</b>: <code>OrderBy(p =&gt; p.Category).OrderBy(p =&gt; p.Price)</code> sorts by <b>Price</b>; the first sort only acts as a hidden tie-breaker (in memory) or may be ignored (in a database). Use <code>ThenBy</code>.</li>
<li><b>Stable</b>: LINQ to Objects <code>OrderBy</code> is a stable sort — equal keys keep their original order. <code>List&lt;T&gt;.Sort()</code> and <code>Array.Sort()</code> are <b>not</b> stable.</li>
<li>Sorting is <b>buffering</b>: it reads the whole source before giving the first item. For "the cheapest item" in memory, <code>MinBy(p =&gt; p.Price)</code> (.NET 6) states the intent directly; modern .NET already runs <code>OrderBy(...).First()</code> as a single pass, so this is a readability choice. In an EF Core query, keep <code>OrderBy(...).First()</code>. For plain values, <code>Order()</code> / <code>OrderDescending()</code> (.NET 7) sort by the value itself.</li>
<li><b>Paging</b>: <code>OrderBy(...).ThenBy(p =&gt; p.Id).Skip((page - 1) * size).Take(size)</code>. Sort by something <b>unique</b> (add the Id as the last tie-breaker) so every row has exactly one place. In EF Core on SQL Server this becomes <code>ORDER BY ... OFFSET ... ROWS FETCH NEXT ... ROWS ONLY</code>.</li>
<li>Total pages = <code>(total + size - 1) / size</code>. The total needs its own <code>Count()</code> query.</li>
<li><b>Deep pages are slow with OFFSET</b>: the database still reads and throws away all skipped rows. <b>Keyset (seek) paging</b> remembers the last key: <code>Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code> — fast at any depth, but no "jump to page 57".</li>
<li><b>Chunk(size)</b> (.NET 6) splits a sequence into arrays of up to <code>size</code> items — handy for batch API calls or bulk inserts.</li>
</ul>
<p><b>When to use:</b> <code>OrderBy</code> + <code>ThenBy</code> for any multi-key sort; <code>Skip</code>/<code>Take</code> for admin grids with page numbers; keyset paging for infinite scroll, feeds and large exports; <code>Chunk</code> for batching. <b>When not:</b> do not sort when nobody needs the order (it costs O(n log n)), do not page without a deterministic order, and avoid big <code>Skip</code> values on large tables.</p>`,
        hi: `<p><b>Analogy — school assembly की line:</b> PT teacher कहते हैं "<b>class के हिसाब से</b> line लगाओ, और हर class के अंदर <b>height के हिसाब से</b>"। Class मुख्य rule है (<b>OrderBy</b>), height tie-breaker है (<b>ThenBy</b>)। एक ही class और एक ही height वाले दो बच्चे उसी order में रहते हैं जिसमें वो पहले से खड़े थे — यही <b>stable</b> sort है। फिर photographer <b>एक photo में 10 बच्चे</b> लेता है, frame by frame — यह <b>paging</b> है, और यह तभी चलता है जब photos के बीच line बदले नहीं।</p>
<ul>
<li><b>OrderBy / OrderByDescending</b> <b>primary</b> sort key तय करते हैं। <b>ThenBy / ThenByDescending</b> tie-breakers जोड़ते हैं। <code>ThenBy</code> सिर्फ़ <code>OrderBy</code> के बाद मिलता है (यह <code>IOrderedEnumerable&lt;T&gt;</code> पर चलता है)।</li>
<li><b>OrderBy दो बार लगाना bug है</b>: <code>OrderBy(p =&gt; p.Category).OrderBy(p =&gt; p.Price)</code> <b>Price</b> से sort करता है; पहला sort सिर्फ़ छुपे हुए tie-breaker की तरह काम करता है (memory में) या ignore हो सकता है (database में)। <code>ThenBy</code> use करो।</li>
<li><b>Stable</b>: LINQ to Objects का <code>OrderBy</code> stable sort है — बराबर keys अपना original order रखती हैं। <code>List&lt;T&gt;.Sort()</code> और <code>Array.Sort()</code> stable <b>नहीं</b> हैं।</li>
<li>Sorting <b>buffering</b> है: पहला item देने से पहले पूरा source पढ़ता है। Memory में "सबसे सस्ता item" के लिए <code>MinBy(p =&gt; p.Price)</code> (.NET 6) इरादा सीधे बताता है; modern .NET <code>OrderBy(...).First()</code> को पहले से एक ही pass में चलाता है, इसलिए यह readability का फ़ैसला है। EF Core query में <code>OrderBy(...).First()</code> ही रखो। Plain values के लिए <code>Order()</code> / <code>OrderDescending()</code> (.NET 7) value से ही sort करते हैं।</li>
<li><b>Paging</b>: <code>OrderBy(...).ThenBy(p =&gt; p.Id).Skip((page - 1) * size).Take(size)</code>। किसी <b>unique</b> चीज़ से sort करो (आख़िरी tie-breaker के रूप में Id जोड़ो) ताकि हर row की एक ही जगह हो। SQL Server पर EF Core में यह <code>ORDER BY ... OFFSET ... ROWS FETCH NEXT ... ROWS ONLY</code> बनता है।</li>
<li>Total pages = <code>(total + size - 1) / size</code>। Total के लिए अलग <code>Count()</code> query चाहिए।</li>
<li><b>OFFSET से गहरे pages धीमे होते हैं</b>: database skip होने वाली सारी rows पढ़कर फेंकता है। <b>Keyset (seek) paging</b> आख़िरी key याद रखता है: <code>Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code> — किसी भी depth पर तेज़, पर "page 57 पर jump" नहीं।</li>
<li><b>Chunk(size)</b> (.NET 6) sequence को ज़्यादा से ज़्यादा <code>size</code> items के arrays में बाँटता है — batch API calls या bulk inserts के लिए काम का।</li>
</ul>
<p><b>कब use करें:</b> किसी भी multi-key sort के लिए <code>OrderBy</code> + <code>ThenBy</code>; page numbers वाले admin grids के लिए <code>Skip</code>/<code>Take</code>; infinite scroll, feeds और बड़े exports के लिए keyset paging; batching के लिए <code>Chunk</code>। <b>कब नहीं:</b> जब किसी को order नहीं चाहिए तब sort मत करो (O(n log n) का ख़र्च), deterministic order के बिना paging मत करो, और बड़ी tables पर बड़े <code>Skip</code> values से बचो।</p>`,
        hg: `<p><b>Analogy — school assembly ki line:</b> PT teacher kehte hain "<b>class ke hisaab se</b> line lagao, aur har class ke andar <b>height ke hisaab se</b>". Class mukhya rule hai (<b>OrderBy</b>), height tie-breaker hai (<b>ThenBy</b>). Ek hi class aur ek hi height wale do bachche usi order mein rehte hain jismein woh pehle se khade the — yahi <b>stable</b> sort hai. Phir photographer <b>ek photo mein 10 bachche</b> leta hai, frame by frame — yeh <b>paging</b> hai, aur yeh tabhi chalta hai jab photos ke beech line badle nahi.</p>
<ul>
<li><b>OrderBy / OrderByDescending</b> <b>primary</b> sort key tay karte hain. <b>ThenBy / ThenByDescending</b> tie-breakers jodte hain. <code>ThenBy</code> sirf <code>OrderBy</code> ke baad milta hai (yeh <code>IOrderedEnumerable&lt;T&gt;</code> par chalta hai).</li>
<li><b>OrderBy do baar lagana bug hai</b>: <code>OrderBy(p =&gt; p.Category).OrderBy(p =&gt; p.Price)</code> <b>Price</b> se sort karta hai; pehla sort sirf chhupe hue tie-breaker ki tarah kaam karta hai (memory mein) ya ignore ho sakta hai (database mein). <code>ThenBy</code> use karo.</li>
<li><b>Stable</b>: LINQ to Objects ka <code>OrderBy</code> stable sort hai — barabar keys apna original order rakhti hain. <code>List&lt;T&gt;.Sort()</code> aur <code>Array.Sort()</code> stable <b>nahi</b> hain.</li>
<li>Sorting <b>buffering</b> hai: pehla item dene se pehle poora source padhta hai. Memory mein "sabse sasta item" ke liye <code>MinBy(p =&gt; p.Price)</code> (.NET 6) iraada seedhe batata hai; modern .NET <code>OrderBy(...).First()</code> ko pehle se ek hi pass mein chalata hai, isliye yeh readability ka faisla hai. EF Core query mein <code>OrderBy(...).First()</code> hi rakho. Plain values ke liye <code>Order()</code> / <code>OrderDescending()</code> (.NET 7) value se hi sort karte hain.</li>
<li><b>Paging</b>: <code>OrderBy(...).ThenBy(p =&gt; p.Id).Skip((page - 1) * size).Take(size)</code>. Kisi <b>unique</b> cheez se sort karo (aakhri tie-breaker ke roop mein Id jodo) taaki har row ki ek hi jagah ho. SQL Server par EF Core mein yeh <code>ORDER BY ... OFFSET ... ROWS FETCH NEXT ... ROWS ONLY</code> banta hai.</li>
<li>Total pages = <code>(total + size - 1) / size</code>. Total ke liye alag <code>Count()</code> query chahiye.</li>
<li><b>OFFSET se gehre pages dheeme hote hain</b>: database skip hone wali saari rows padhkar phenkta hai. <b>Keyset (seek) paging</b> aakhri key yaad rakhta hai: <code>Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code> — kisi bhi depth par tez, par "page 57 par jump" nahi.</li>
<li><b>Chunk(size)</b> (.NET 6) sequence ko zyada se zyada <code>size</code> items ke arrays mein baantta hai — batch API calls ya bulk inserts ke liye kaam ka.</li>
</ul>
<p><b>Kab use karein:</b> kisi bhi multi-key sort ke liye <code>OrderBy</code> + <code>ThenBy</code>; page numbers wale admin grids ke liye <code>Skip</code>/<code>Take</code>; infinite scroll, feeds aur bade exports ke liye keyset paging; batching ke liye <code>Chunk</code>. <b>Kab nahi:</b> jab kisi ko order nahi chahiye tab sort mat karo (O(n log n) ka kharcha), deterministic order ke bina paging mat karo, aur badi tables par bade <code>Skip</code> values se bacho.</p>`
      },
      code: [{
        caption: {
          en: "OrderBy + ThenByDescending, stable ties, Order() for values, page-by-page Skip/Take with a unique tie-breaker, keyset paging, Chunk",
          hi: "OrderBy + ThenByDescending, stable ties, values के लिए Order(), unique tie-breaker के साथ page-by-page Skip/Take, keyset paging, Chunk",
          hg: "OrderBy + ThenByDescending, stable ties, values ke liye Order(), unique tie-breaker ke saath page-by-page Skip/Take, keyset paging, Chunk"
        },
        check: "run",
        expected: "Ghee, Atta, Dal, Rice, Broom, Bucket, Soap\nSoap(40), Rice(60), Broom(120), Dal(120), Bucket(120), Atta(300), Ghee(550)\n35, 72, 90\nPage 1: Soap, Rice, Broom\nPage 2: Dal, Bucket, Atta\nPage 3: Ghee\nTotal pages: 3\nAfter Id 4: Dal, Bucket\nBatch of 3: 1,2,3\nBatch of 3: 4,5,6\nBatch of 1: 7",
        src: `var products = new List<Product>
{
    new(1, "Soap", "Home", 40), new(2, "Rice", "Food", 60), new(3, "Ghee", "Food", 550),
    new(4, "Broom", "Home", 120), new(5, "Dal", "Food", 120), new(6, "Bucket", "Home", 120),
    new(7, "Atta", "Food", 300)
};

// Primary key + tie-breaker (Broom and Bucket tie on 120: original order kept)
var sorted = products.OrderBy(p => p.Category).ThenByDescending(p => p.Price);
Console.WriteLine(string.Join(", ", sorted.Select(p => p.Name)));

// Stable sort: Broom, Dal, Bucket (all 120) stay in their original order
Console.WriteLine(string.Join(", ", products.OrderBy(p => p.Price).Select(p => $"{p.Name}({p.Price})")));

// .NET 7: Order() sorts simple values by themselves
int[] marks = [72, 35, 90];
Console.WriteLine(string.Join(", ", marks.Order()));

// Offset paging: a deterministic order first (price, then the unique Id)
int pageSize = 3;
int totalPages = (products.Count + pageSize - 1) / pageSize;
for (int page = 1; page <= totalPages; page++)
{
    var items = products
        .OrderBy(p => p.Price).ThenBy(p => p.Id)
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .Select(p => p.Name);
    Console.WriteLine($"Page {page}: {string.Join(", ", items)}");
}
Console.WriteLine($"Total pages: {totalPages}");

// Keyset paging: remember the last key you showed, instead of skipping rows
int lastId = 4;
var next = products.Where(p => p.Id > lastId).OrderBy(p => p.Id).Take(2).Select(p => p.Name);
Console.WriteLine($"After Id {lastId}: {string.Join(", ", next)}");

// .NET 6: Chunk splits into batches (the last one can be smaller)
foreach (Product[] batch in products.Chunk(3))
    Console.WriteLine($"Batch of {batch.Length}: {string.Join(",", batch.Select(p => p.Id))}");

record Product(int Id, string Name, string Category, int Price);`
      }]
    },
    {
      id: "grouping-in-code",
      depth: "detailed",
      title: {
        en: "GroupBy and ToLookup in code: keys, totals, HAVING-style filters, composite keys, CountBy",
        hi: "Code में GroupBy और ToLookup: keys, totals, HAVING जैसे filters, composite keys, CountBy",
        hg: "Code mein GroupBy aur ToLookup: keys, totals, HAVING jaise filters, composite keys, CountBy"
      },
      body: {
        en: `<p><b>Analogy — the post office sorting room:</b> letters arrive in a random pile. The postman puts each letter into a <b>bag by PIN code</b> — that is <b>GroupBy</b>: a key (the PIN) and a bunch of items (the letters). Each bag has a label (<code>Key</code>) and you can count or weigh what is inside (<code>Count()</code>, <code>Sum()</code>). The finished <b>sorting rack</b>, where you can ask "give me PIN 411001" and get the bundle — or an <b>empty slot</b> if there is none — is <b>ToLookup</b>.</p>
<ul>
<li><code>GroupBy(keySelector)</code> returns <code>IEnumerable&lt;IGrouping&lt;TKey, T&gt;&gt;</code>. Each group has a <code>.Key</code> <b>and is itself a sequence</b> of its items — so you can call <code>g.Count()</code>, <code>g.Sum(...)</code>, <code>g.First()</code> on it.</li>
<li>Overloads: an <b>element selector</b> (<code>GroupBy(s =&gt; s.City, s =&gt; s.Amount)</code> keeps only amounts), a <b>result selector</b> (<code>(key, items) =&gt; new { ... }</code>), and a <b>comparer</b> (<code>StringComparer.OrdinalIgnoreCase</code> so "pune" and "Pune" fall into one group).</li>
<li><b>Order</b> (LINQ to Objects, documented): groups come in the order their key <b>first appears</b> in the source; items inside a group keep source order. Add <code>OrderBy</code> if you need a different order.</li>
<li><b>Composite keys</b>: <code>GroupBy(s =&gt; new { s.City, s.Product })</code> — anonymous types (and tuples, records) compare by value, so equal pairs share one group.</li>
<li>Query syntax: <code>group s.Amount by s.City into g where g.Sum() &gt;= 350 select ...</code> — a <code>where</code> after <code>into</code> filters <b>groups</b>, like SQL <code>HAVING</code>.</li>
<li><code>GroupBy</code> is <b>deferred but buffering</b>: when you start enumerating it, it reads the <b>whole</b> source and builds all groups; enumerate it twice and it groups twice.</li>
<li><b>ToLookup</b> runs <b>immediately</b> and returns an <code>ILookup&lt;TKey, T&gt;</code>: an indexer <code>lookup[key]</code> that gives an <b>empty</b> sequence for missing keys (a <code>Dictionary</code> would throw), plus <code>Contains(key)</code>. It is a snapshot; it does not see later changes.</li>
<li><b>.NET 9</b>: <code>CountBy(keySelector)</code> and <code>AggregateBy(keySelector, seed, func)</code> give per-key counts and totals directly as key/value pairs, without building group objects.</li>
<li>In EF Core, <code>GroupBy</code> followed by aggregates (<code>Count</code>, <code>Sum</code>) translates to SQL <code>GROUP BY</code> — Day 5–6 cover what translates.</li>
</ul>
<p><b>When to use:</b> reports and summaries (totals per city, orders per status); <code>ToLookup</code> when you will look up groups by key many times (for example, attaching child rows to parents in memory); <code>CountBy</code>/<code>AggregateBy</code> for simple per-key numbers. <b>When not:</b> do not group just to check "does a key exist" (use <code>Any</code> or a <code>HashSet</code>), and do not pull a big table into memory just to group it — let the database do <code>GROUP BY</code>.</p>`,
        hi: `<p><b>Analogy — post office का sorting room:</b> letters एक बेतरतीब ढेर में आते हैं। Postman हर letter को <b>PIN code के हिसाब से एक थैले</b> में डालता है — यही है <b>GroupBy</b>: एक key (PIN) और items का एक गुच्छा (letters)। हर थैले पर एक label (<code>Key</code>) है और आप अंदर का सामान गिन या तौल सकते हो (<code>Count()</code>, <code>Sum()</code>)। तैयार <b>sorting rack</b>, जहाँ आप पूछ सकते हो "PIN 411001 दो" और आपको bundle मिलता है — या कुछ न हो तो <b>खाली खाना</b> — वो है <b>ToLookup</b>।</p>
<ul>
<li><code>GroupBy(keySelector)</code> <code>IEnumerable&lt;IGrouping&lt;TKey, T&gt;&gt;</code> return करता है। हर group के पास एक <code>.Key</code> है <b>और वो ख़ुद अपने items का sequence है</b> — इसलिए उस पर <code>g.Count()</code>, <code>g.Sum(...)</code>, <code>g.First()</code> call कर सकते हो।</li>
<li>Overloads: <b>element selector</b> (<code>GroupBy(s =&gt; s.City, s =&gt; s.Amount)</code> सिर्फ़ amounts रखता है), <b>result selector</b> (<code>(key, items) =&gt; new { ... }</code>), और <b>comparer</b> (<code>StringComparer.OrdinalIgnoreCase</code> ताकि "pune" और "Pune" एक ही group में आएँ)।</li>
<li><b>Order</b> (LINQ to Objects, documented): groups उसी order में आते हैं जिसमें उनकी key source में <b>पहली बार दिखी</b>; group के अंदर items source order में रहते हैं। अलग order चाहिए तो <code>OrderBy</code> लगाओ।</li>
<li><b>Composite keys</b>: <code>GroupBy(s =&gt; new { s.City, s.Product })</code> — anonymous types (और tuples, records) value से compare होते हैं, इसलिए बराबर pairs एक ही group में आते हैं।</li>
<li>Query syntax: <code>group s.Amount by s.City into g where g.Sum() &gt;= 350 select ...</code> — <code>into</code> के बाद का <code>where</code> <b>groups</b> को filter करता है, SQL के <code>HAVING</code> की तरह।</li>
<li><code>GroupBy</code> <b>deferred है पर buffering</b>: enumerate शुरू करते ही यह <b>पूरा</b> source पढ़कर सारे groups बनाता है; दो बार enumerate करो तो दो बार grouping।</li>
<li><b>ToLookup</b> <b>तुरंत</b> चलता है और <code>ILookup&lt;TKey, T&gt;</code> return करता है: एक indexer <code>lookup[key]</code> जो missing key पर <b>खाली</b> sequence देता है (<code>Dictionary</code> throw करती), साथ में <code>Contains(key)</code>। यह snapshot है; बाद के बदलाव नहीं देखता।</li>
<li><b>.NET 9</b>: <code>CountBy(keySelector)</code> और <code>AggregateBy(keySelector, seed, func)</code> हर key के counts और totals सीधे key/value pairs में देते हैं, group objects बनाए बिना।</li>
<li>EF Core में aggregates (<code>Count</code>, <code>Sum</code>) के साथ <code>GroupBy</code> SQL <code>GROUP BY</code> में translate होता है — क्या translate होता है, यह Day 5–6 में।</li>
</ul>
<p><b>कब use करें:</b> reports और summaries (हर city का total, हर status के orders); <code>ToLookup</code> जब key से groups बार-बार ढूँढने हों (जैसे memory में child rows को parents से जोड़ना); simple per-key numbers के लिए <code>CountBy</code>/<code>AggregateBy</code>। <b>कब नहीं:</b> सिर्फ़ "key है या नहीं" check करने के लिए group मत बनाओ (<code>Any</code> या <code>HashSet</code> use करो), और सिर्फ़ group करने के लिए बड़ी table memory में मत लाओ — <code>GROUP BY</code> database को करने दो।</p>`,
        hg: `<p><b>Analogy — post office ka sorting room:</b> letters ek betarteeb dher mein aate hain. Postman har letter ko <b>PIN code ke hisaab se ek thaile</b> mein daalta hai — yahi hai <b>GroupBy</b>: ek key (PIN) aur items ka ek guchha (letters). Har thaile par ek label (<code>Key</code>) hai aur aap andar ka saamaan gin ya taul sakte ho (<code>Count()</code>, <code>Sum()</code>). Taiyaar <b>sorting rack</b>, jahan aap pooch sakte ho "PIN 411001 do" aur aapko bundle milta hai — ya kuch na ho to <b>khaali khaana</b> — woh hai <b>ToLookup</b>.</p>
<ul>
<li><code>GroupBy(keySelector)</code> <code>IEnumerable&lt;IGrouping&lt;TKey, T&gt;&gt;</code> return karta hai. Har group ke paas ek <code>.Key</code> hai <b>aur woh khud apne items ka sequence hai</b> — isliye us par <code>g.Count()</code>, <code>g.Sum(...)</code>, <code>g.First()</code> call kar sakte ho.</li>
<li>Overloads: <b>element selector</b> (<code>GroupBy(s =&gt; s.City, s =&gt; s.Amount)</code> sirf amounts rakhta hai), <b>result selector</b> (<code>(key, items) =&gt; new { ... }</code>), aur <b>comparer</b> (<code>StringComparer.OrdinalIgnoreCase</code> taaki "pune" aur "Pune" ek hi group mein aayein).</li>
<li><b>Order</b> (LINQ to Objects, documented): groups usi order mein aate hain jismein unki key source mein <b>pehli baar dikhi</b>; group ke andar items source order mein rehte hain. Alag order chahiye to <code>OrderBy</code> lagao.</li>
<li><b>Composite keys</b>: <code>GroupBy(s =&gt; new { s.City, s.Product })</code> — anonymous types (aur tuples, records) value se compare hote hain, isliye barabar pairs ek hi group mein aate hain.</li>
<li>Query syntax: <code>group s.Amount by s.City into g where g.Sum() &gt;= 350 select ...</code> — <code>into</code> ke baad ka <code>where</code> <b>groups</b> ko filter karta hai, SQL ke <code>HAVING</code> ki tarah.</li>
<li><code>GroupBy</code> <b>deferred hai par buffering</b>: enumerate shuru karte hi yeh <b>poora</b> source padhkar saare groups banata hai; do baar enumerate karo to do baar grouping.</li>
<li><b>ToLookup</b> <b>turant</b> chalta hai aur <code>ILookup&lt;TKey, T&gt;</code> return karta hai: ek indexer <code>lookup[key]</code> jo missing key par <b>khaali</b> sequence deta hai (<code>Dictionary</code> throw karti), saath mein <code>Contains(key)</code>. Yeh snapshot hai; baad ke badlaav nahi dekhta.</li>
<li><b>.NET 9</b>: <code>CountBy(keySelector)</code> aur <code>AggregateBy(keySelector, seed, func)</code> har key ke counts aur totals seedhe key/value pairs mein dete hain, group objects banaye bina.</li>
<li>EF Core mein aggregates (<code>Count</code>, <code>Sum</code>) ke saath <code>GroupBy</code> SQL <code>GROUP BY</code> mein translate hota hai — kya translate hota hai, yeh Day 5–6 mein.</li>
</ul>
<p><b>Kab use karein:</b> reports aur summaries (har city ka total, har status ke orders); <code>ToLookup</code> jab key se groups baar-baar dhoondhne hon (jaise memory mein child rows ko parents se jodna); simple per-key numbers ke liye <code>CountBy</code>/<code>AggregateBy</code>. <b>Kab nahi:</b> sirf "key hai ya nahi" check karne ke liye group mat banao (<code>Any</code> ya <code>HashSet</code> use karo), aur sirf group karne ke liye badi table memory mein mat laao — <code>GROUP BY</code> database ko karne do.</p>`
      },
      code: [{
        caption: {
          en: "GroupBy with Count/Sum per key (first-appearance order), a HAVING-style filter in query syntax, a composite key, ToLookup with a missing key, and .NET 9 CountBy/AggregateBy",
          hi: "हर key के Count/Sum के साथ GroupBy (पहली बार दिखने का order), query syntax में HAVING जैसा filter, composite key, missing key के साथ ToLookup, और .NET 9 CountBy/AggregateBy",
          hg: "Har key ke Count/Sum ke saath GroupBy (pehli baar dikhne ka order), query syntax mein HAVING jaisa filter, composite key, missing key ke saath ToLookup, aur .NET 9 CountBy/AggregateBy"
        },
        check: "run",
        expected: "Pune: 3 sales, total 350\nDelhi: 2 sales, total 400\nMumbai: 1 sales, total 300\nDelhi=400, Pune=350\nPune/Tea=250, Delhi/Coffee=150, Pune/Coffee=100, Mumbai/Tea=300, Delhi/Tea=250\nTea sales: 4, Juice sales: 0\nCountBy: Delhi=2, Mumbai=1, Pune=3\nAggregateBy: Delhi=400, Mumbai=300, Pune=350",
        src: `var sales = new List<Sale>
{
    new("Pune", "Tea", 200), new("Delhi", "Coffee", 150), new("Pune", "Coffee", 100),
    new("Mumbai", "Tea", 300), new("Delhi", "Tea", 250), new("Pune", "Tea", 50)
};

// Groups come in the order each key first appears: Pune, Delhi, Mumbai
foreach (IGrouping<string, Sale> g in sales.GroupBy(s => s.City))
    Console.WriteLine($"{g.Key}: {g.Count()} sales, total {g.Sum(s => s.Amount)}");

// Query syntax: element selector (amounts only), 'into', then a HAVING-style filter on groups
var bigCities = from s in sales
                group s.Amount by s.City into g
                where g.Sum() >= 350
                orderby g.Sum() descending
                select new { City = g.Key, Total = g.Sum() };
Console.WriteLine(string.Join(", ", bigCities.Select(x => $"{x.City}={x.Total}")));

// Composite key: anonymous types compare by value
var byCityProduct = sales
    .GroupBy(s => new { s.City, s.Product })
    .Select(g => $"{g.Key.City}/{g.Key.Product}={g.Sum(s => s.Amount)}");
Console.WriteLine(string.Join(", ", byCityProduct));

// ToLookup: runs now; a missing key gives an empty sequence, not an exception
ILookup<string, Sale> byProduct = sales.ToLookup(s => s.Product);
Console.WriteLine($"Tea sales: {byProduct["Tea"].Count()}, Juice sales: {byProduct["Juice"].Count()}");

// .NET 9: per-key counts and totals without group objects (sorted for a stable print)
var counts = sales.CountBy(s => s.City).OrderBy(kv => kv.Key);
Console.WriteLine("CountBy: " + string.Join(", ", counts.Select(kv => $"{kv.Key}={kv.Value}")));
var totals = sales.AggregateBy(s => s.City, 0, (sum, s) => sum + s.Amount).OrderBy(kv => kv.Key);
Console.WriteLine("AggregateBy: " + string.Join(", ", totals.Select(kv => $"{kv.Key}={kv.Value}")));

record Sale(string City, string Product, int Amount);`
      }]
    },
    {
      id: "joins-in-code",
      depth: "detailed",
      title: {
        en: "Join, GroupJoin and the left join in code (and .NET 10 LeftJoin/RightJoin)",
        hi: "Code में Join, GroupJoin और left join (और .NET 10 LeftJoin/RightJoin)",
        hg: "Code mein Join, GroupJoin aur left join (aur .NET 10 LeftJoin/RightJoin)"
      },
      body: {
        en: `<p><b>Analogy — the attendance register and the answer sheets:</b> after an exam, the teacher matches roll numbers in the <b>attendance register</b> with roll numbers on the <b>answer sheets</b>. "Students who have a sheet" is an <b>inner join</b> — a student without a sheet, or a sheet with a wrong roll number, is left out. "<b>Every</b> student on the register, with 'absent' where there is no sheet" is a <b>left join</b>. "Each student with the <b>pile</b> of their sheets (maybe empty)" is a <b>GroupJoin</b>.</p>
<ul>
<li><b>Join</b> = inner <b>equi</b>join: <code>outer.Join(inner, o =&gt; o.Key, i =&gt; i.Key, (o, i) =&gt; result)</code>. It builds a hash lookup of the inner sequence, so it is about O(n + m), not a nested loop. Result order: outer order, and for each outer item, the matching inner items in their order.</li>
<li>Query syntax: <code>join o in orders on c.Id equals o.CustomerId</code>. The <b>outer key goes on the left</b> of <code>equals</code>; swapping the sides gives compiler errors <b>CS1937</b>/<b>CS1938</b>. Only equality is allowed — for other conditions use two <code>from</code>s with a <code>where</code>.</li>
<li><b>GroupJoin</b> = each outer item with an <code>IEnumerable</code> of its matches (empty if none). Query syntax: <code>join ... into cOrders</code>. Good for "customer with their orders" and for counts/totals per parent.</li>
<li><b>Left join pattern</b> (before .NET 10): <code>join ... into g</code> + <code>from x in g.DefaultIfEmpty()</code>. <code>DefaultIfEmpty()</code> turns an empty group into one <code>null</code>/default item, so the outer row survives. Handle that <code>null</code> in your <code>select</code>.</li>
<li><b>.NET 10</b> adds <code>LeftJoin</code> and <code>RightJoin</code> operators to LINQ (both <code>Enumerable</code> and <code>Queryable</code>), and <b>EF Core 10</b> translates them to <code>LEFT JOIN</code>/<code>RIGHT JOIN</code>. Query syntax has no keyword for them yet. (Our checker uses the .NET 9 SDK, so that snippet below is not compiled.)</li>
<li><b>Composite keys</b>: join on anonymous types with the <b>same property names and types</b>: <code>c =&gt; new { c.Id, c.City }</code> and <code>a =&gt; new { Id = a.CustomerId, a.City }</code>.</li>
<li>In EF Core, if the relationship is mapped, prefer <b>navigation properties</b> (<code>o.Customer.Name</code>, <code>c.Orders.Count</code>) — EF writes the join for you. Manual <code>Join</code> is for data without a mapped relationship.</li>
</ul>
<p><b>When to use:</b> <code>Join</code> to combine two in-memory lists by a key (API results + lookup table); <code>GroupJoin</code> for parent-with-children; a left join when the parent must appear even without children. <b>When not:</b> nested <code>foreach</code> + <code>Where</code> to match items (O(n × m)); and manual joins in EF Core where a navigation property already expresses the relationship.</p>`,
        hi: `<p><b>Analogy — attendance register और answer sheets:</b> exam के बाद teacher <b>attendance register</b> के roll numbers को <b>answer sheets</b> के roll numbers से मिलाते हैं। "जिन students की sheet है" — यह <b>inner join</b> है — बिना sheet वाला student, या गलत roll number वाली sheet, बाहर रह जाती है। "Register का <b>हर</b> student, और जहाँ sheet नहीं वहाँ 'absent'" — यह <b>left join</b> है। "हर student के साथ उसकी sheets का <b>ढेर</b> (खाली भी हो सकता है)" — यह <b>GroupJoin</b> है।</p>
<ul>
<li><b>Join</b> = inner <b>equi</b>join: <code>outer.Join(inner, o =&gt; o.Key, i =&gt; i.Key, (o, i) =&gt; result)</code>। यह inner sequence का hash lookup बनाता है, इसलिए यह लगभग O(n + m) है, nested loop नहीं। Result का order: outer का order, और हर outer item के लिए matching inner items उनके अपने order में।</li>
<li>Query syntax: <code>join o in orders on c.Id equals o.CustomerId</code>। <b>Outer key <code>equals</code> के बाईं तरफ़</b> आती है; sides बदलने पर compiler errors <b>CS1937</b>/<b>CS1938</b> आते हैं। सिर्फ़ equality allowed है — दूसरी conditions के लिए <code>where</code> के साथ दो <code>from</code> use करो।</li>
<li><b>GroupJoin</b> = हर outer item के साथ उसके matches का एक <code>IEnumerable</code> (कोई न हो तो खाली)। Query syntax: <code>join ... into cOrders</code>। "Customer अपने orders के साथ" और हर parent के counts/totals के लिए अच्छा।</li>
<li><b>Left join pattern</b> (.NET 10 से पहले): <code>join ... into g</code> + <code>from x in g.DefaultIfEmpty()</code>। <code>DefaultIfEmpty()</code> खाली group को एक <code>null</code>/default item में बदल देता है, ताकि outer row बची रहे। अपने <code>select</code> में उस <code>null</code> को संभालो।</li>
<li><b>.NET 10</b> ने LINQ में <code>LeftJoin</code> और <code>RightJoin</code> operators जोड़े (<code>Enumerable</code> और <code>Queryable</code> दोनों में), और <b>EF Core 10</b> इन्हें <code>LEFT JOIN</code>/<code>RIGHT JOIN</code> में translate करता है। Query syntax में इनका कोई keyword अभी नहीं है। (हमारा checker .NET 9 SDK use करता है, इसलिए नीचे वाला वो snippet compile नहीं होता।)</li>
<li><b>Composite keys</b>: anonymous types पर join करो जिनके <b>property names और types एक जैसे</b> हों: <code>c =&gt; new { c.Id, c.City }</code> और <code>a =&gt; new { Id = a.CustomerId, a.City }</code>।</li>
<li>EF Core में अगर relationship mapped है, तो <b>navigation properties</b> (<code>o.Customer.Name</code>, <code>c.Orders.Count</code>) बेहतर हैं — join EF ख़ुद लिखता है। Manual <code>Join</code> उस data के लिए है जिसकी relationship mapped नहीं।</li>
</ul>
<p><b>कब use करें:</b> दो in-memory lists को key से जोड़ने के लिए <code>Join</code> (API results + lookup table); parent-with-children के लिए <code>GroupJoin</code>; left join जब parent बिना children के भी दिखना चाहिए। <b>कब नहीं:</b> items match करने के लिए nested <code>foreach</code> + <code>Where</code> (O(n × m)); और EF Core में manual joins जहाँ navigation property पहले से relationship बताती है।</p>`,
        hg: `<p><b>Analogy — attendance register aur answer sheets:</b> exam ke baad teacher <b>attendance register</b> ke roll numbers ko <b>answer sheets</b> ke roll numbers se milaate hain. "Jin students ki sheet hai" — yeh <b>inner join</b> hai — bina sheet wala student, ya galat roll number wali sheet, bahar reh jaati hai. "Register ka <b>har</b> student, aur jahan sheet nahi wahan 'absent'" — yeh <b>left join</b> hai. "Har student ke saath uski sheets ka <b>dher</b> (khaali bhi ho sakta hai)" — yeh <b>GroupJoin</b> hai.</p>
<ul>
<li><b>Join</b> = inner <b>equi</b>join: <code>outer.Join(inner, o =&gt; o.Key, i =&gt; i.Key, (o, i) =&gt; result)</code>. Yeh inner sequence ka hash lookup banata hai, isliye yeh lagbhag O(n + m) hai, nested loop nahi. Result ka order: outer ka order, aur har outer item ke liye matching inner items unke apne order mein.</li>
<li>Query syntax: <code>join o in orders on c.Id equals o.CustomerId</code>. <b>Outer key <code>equals</code> ke baayin taraf</b> aati hai; sides badalne par compiler errors <b>CS1937</b>/<b>CS1938</b> aate hain. Sirf equality allowed hai — doosri conditions ke liye <code>where</code> ke saath do <code>from</code> use karo.</li>
<li><b>GroupJoin</b> = har outer item ke saath uske matches ka ek <code>IEnumerable</code> (koi na ho to khaali). Query syntax: <code>join ... into cOrders</code>. "Customer apne orders ke saath" aur har parent ke counts/totals ke liye achha.</li>
<li><b>Left join pattern</b> (.NET 10 se pehle): <code>join ... into g</code> + <code>from x in g.DefaultIfEmpty()</code>. <code>DefaultIfEmpty()</code> khaali group ko ek <code>null</code>/default item mein badal deta hai, taaki outer row bachi rahe. Apne <code>select</code> mein us <code>null</code> ko sambhaalo.</li>
<li><b>.NET 10</b> ne LINQ mein <code>LeftJoin</code> aur <code>RightJoin</code> operators jode (<code>Enumerable</code> aur <code>Queryable</code> dono mein), aur <b>EF Core 10</b> inhe <code>LEFT JOIN</code>/<code>RIGHT JOIN</code> mein translate karta hai. Query syntax mein inka koi keyword abhi nahi hai. (Hamara checker .NET 9 SDK use karta hai, isliye neeche wala woh snippet compile nahi hota.)</li>
<li><b>Composite keys</b>: anonymous types par join karo jinke <b>property names aur types ek jaise</b> hon: <code>c =&gt; new { c.Id, c.City }</code> aur <code>a =&gt; new { Id = a.CustomerId, a.City }</code>.</li>
<li>EF Core mein agar relationship mapped hai, to <b>navigation properties</b> (<code>o.Customer.Name</code>, <code>c.Orders.Count</code>) behtar hain — join EF khud likhta hai. Manual <code>Join</code> us data ke liye hai jiski relationship mapped nahi.</li>
</ul>
<p><b>Kab use karein:</b> do in-memory lists ko key se jodne ke liye <code>Join</code> (API results + lookup table); parent-with-children ke liye <code>GroupJoin</code>; left join jab parent bina children ke bhi dikhna chahiye. <b>Kab nahi:</b> items match karne ke liye nested <code>foreach</code> + <code>Where</code> (O(n × m)); aur EF Core mein manual joins jahan navigation property pehle se relationship batati hai.</p>`
      },
      code: [{
        caption: {
          en: "Inner join in method and query syntax, GroupJoin with counts and totals, and the classic left join (GroupJoin + DefaultIfEmpty)",
          hi: "Method और query syntax में inner join, counts और totals के साथ GroupJoin, और classic left join (GroupJoin + DefaultIfEmpty)",
          hg: "Method aur query syntax mein inner join, counts aur totals ke saath GroupJoin, aur classic left join (GroupJoin + DefaultIfEmpty)"
        },
        check: "run",
        expected: "Join: Asha#101, Asha#103, Neha#102\nQuery join: Asha#101, Asha#103, Neha#102\nGroupJoin: Asha count=2 total=800 | Ravi count=0 total=0 | Neha count=1 total=200\nLeft join: Asha#101, Asha#103, Ravi#none, Neha#102",
        src: `var customers = new List<Customer> { new(1, "Asha"), new(2, "Ravi"), new(3, "Neha") };
var orders = new List<Order>
{
    new(101, 1, 500), new(102, 3, 200), new(103, 1, 300), new(104, 9, 50)   // 104: no such customer
};

// Inner join: only matching pairs. Ravi (no orders) and order 104 (no customer) disappear.
var inner = customers.Join(orders,
    c => c.Id, o => o.CustomerId,
    (c, o) => $"{c.Name}#{o.Id}");
Console.WriteLine("Join: " + string.Join(", ", inner));

// Query syntax: the outer key (c.Id) goes on the LEFT of 'equals'
var inner2 = from c in customers
             join o in orders on c.Id equals o.CustomerId
             select $"{c.Name}#{o.Id}";
Console.WriteLine("Query join: " + string.Join(", ", inner2));

// GroupJoin: every customer with their (maybe empty) group of orders
var perCustomer = customers.GroupJoin(orders,
    c => c.Id, o => o.CustomerId,
    (c, cOrders) => $"{c.Name} count={cOrders.Count()} total={cOrders.Sum(o => o.Amount)}");
Console.WriteLine("GroupJoin: " + string.Join(" | ", perCustomer));

// Left join: GroupJoin ('into') + SelectMany ('from') + DefaultIfEmpty
var left = from c in customers
           join o in orders on c.Id equals o.CustomerId into cOrders
           from o in cOrders.DefaultIfEmpty()
           select $"{c.Name}#{(o is null ? "none" : o.Id.ToString())}";
Console.WriteLine("Left join: " + string.Join(", ", left));

record Customer(int Id, string Name);
record Order(int Id, int CustomerId, int Amount);`
      }, {
        caption: {
          en: ".NET 10 only (not compiled by our .NET 9 checker): LeftJoin and RightJoin operators",
          hi: "सिर्फ़ .NET 10 (हमारा .NET 9 checker इसे compile नहीं करता): LeftJoin और RightJoin operators",
          hg: "Sirf .NET 10 (hamara .NET 9 checker ise compile nahi karta): LeftJoin aur RightJoin operators"
        },
        check: "none",
        src: `// .NET 10: every customer is kept; 'o' is null when the customer has no orders
var left = customers.LeftJoin(orders,
    c => c.Id, o => o.CustomerId,
    (c, o) => $"{c.Name}#{(o is null ? "none" : o.Id.ToString())}");
// Asha#101, Asha#103, Ravi#none, Neha#102

// RightJoin is the mirror image: every order is kept; 'c' is null for order 104
var right = customers.RightJoin(orders,
    c => c.Id, o => o.CustomerId,
    (c, o) => $"{c?.Name ?? "unknown"}#{o.Id}");

// EF Core 10 translates both to LEFT JOIN / RIGHT JOIN in SQL.`
      }]
    },
    {
      id: "element-quantifier-in-code",
      depth: "detailed",
      title: {
        en: "First, Single, Any, Count, All, MinBy/MaxBy in code — picking one item and asking yes/no questions",
        hi: "Code में First, Single, Any, Count, All, MinBy/MaxBy — एक item चुनना और हाँ/ना वाले सवाल",
        hg: "Code mein First, Single, Any, Count, All, MinBy/MaxBy — ek item chunna aur haan/na wale sawaal"
      },
      body: {
        en: `<p><b>Analogy — the housing society register:</b> "Find the flat owner with this <b>Aadhaar number</b>" — there must be exactly one; two would mean bad data (<b>Single</b>). "Give me <b>any one</b> resident named Sharma" (<b>First</b>). "Does <b>anyone</b> in the society own an electric car?" — stop at the first yes (<b>Any</b>). "<b>How many</b> own one?" — check every flat (<b>Count</b>). "Has <b>everyone</b> paid maintenance?" (<b>All</b>). "Which flat pays the <b>highest</b> maintenance?" — you want the flat, not just the amount (<b>MaxBy</b>).</p>
<ul>
<li><b>First / Last</b>: throw <code>InvalidOperationException</code> if nothing matches ("Sequence contains no matching element"). <b>FirstOrDefault / LastOrDefault</b>: return <code>default</code> instead.</li>
<li><b>Single</b>: throws if zero <b>or</b> more than one match. <b>SingleOrDefault</b>: default for zero, but still throws for two or more ("Sequence contains more than one matching element").</li>
<li><b>Cost</b>: <code>First</code> stops at the first match. <code>Single</code> must keep looking for a <b>second</b> match, so it reads further (in EF Core on SQL Server, <code>First</code> becomes <code>TOP(1)</code> and <code>Single</code> becomes <code>TOP(2)</code>).</li>
<li><b>The value-type trap</b>: <code>scores.FirstOrDefault(s =&gt; s &gt; 95)</code> returns <b>0</b> when nothing matches — but 0 could also be a real score. .NET 6 added overloads with your own default: <code>FirstOrDefault(s =&gt; s &gt; 95, -1)</code>. For classes, check for <code>null</code> before using the result.</li>
<li><b>Any vs Count</b>: <code>Any()</code> stops at the first match; <code>Count()</code> on a lazy or filtered query walks every item. The full comparison (EF Core, collections, analyzers) is in the Q&amp;A "Any() or Count() &gt; 0".</li>
<li><b>All</b> returns <code>true</code> for an <b>empty</b> sequence ("nobody failed" is true when there is nobody). A classic trick question.</li>
<li><b>Empty sequences</b>: <code>Sum()</code> gives 0; <code>Min()</code>, <code>Max()</code>, <code>Average()</code> on non-nullable numbers <b>throw</b>; on nullable numbers (<code>int?</code>) they return <code>null</code>.</li>
<li><b>MinBy / MaxBy</b> (.NET 6) return the <b>item</b> with the smallest/largest key. <code>Min</code>/<code>Max</code> return the <b>value</b>.</li>
</ul>
<p><b>When to use:</b> <code>Single</code>/<code>SingleOrDefault</code> for lookups by a unique key when duplicates mean corrupted data; <code>FirstOrDefault</code> + null check when "not found" is a normal case (return 404); <code>Any</code> for "exists?"; <code>MaxBy</code> for "the top item". <b>When not:</b> <code>Single</code> on a non-unique column (it will throw one day in production); <code>First()</code> without <code>OrderBy</code> when you expect a specific item ("first" of an unordered DB result is not defined); <code>Count() &gt; 0</code> on a lazy query or EF query.</p>`,
        hi: `<p><b>Analogy — housing society का register:</b> "इस <b>Aadhaar number</b> वाला flat owner ढूँढो" — ठीक एक होना चाहिए; दो हों तो data ख़राब है (<b>Single</b>)। "Sharma नाम का <b>कोई एक</b> resident बताओ" (<b>First</b>)। "क्या society में <b>किसी</b> के पास electric car है?" — पहली हाँ पर रुक जाओ (<b>Any</b>)। "<b>कितनों</b> के पास है?" — हर flat check करो (<b>Count</b>)। "क्या <b>सबने</b> maintenance भरा है?" (<b>All</b>)। "कौन सा flat <b>सबसे ज़्यादा</b> maintenance देता है?" — आपको flat चाहिए, सिर्फ़ amount नहीं (<b>MaxBy</b>)।</p>
<ul>
<li><b>First / Last</b>: कुछ match न हो तो <code>InvalidOperationException</code> throw करते हैं ("Sequence contains no matching element")। <b>FirstOrDefault / LastOrDefault</b>: उसकी जगह <code>default</code> return करते हैं।</li>
<li><b>Single</b>: zero <b>या</b> एक से ज़्यादा match पर throw। <b>SingleOrDefault</b>: zero पर default, पर दो या ज़्यादा पर फिर भी throw ("Sequence contains more than one matching element")।</li>
<li><b>Cost</b>: <code>First</code> पहले match पर रुक जाता है। <code>Single</code> को <b>दूसरा</b> match भी ढूँढना पड़ता है, इसलिए आगे तक पढ़ता है (SQL Server पर EF Core में <code>First</code>, <code>TOP(1)</code> बनता है और <code>Single</code>, <code>TOP(2)</code>)।</li>
<li><b>Value-type का जाल</b>: <code>scores.FirstOrDefault(s =&gt; s &gt; 95)</code> कुछ match न होने पर <b>0</b> देता है — पर 0 असली score भी हो सकता है। .NET 6 में अपने default वाले overloads आए: <code>FirstOrDefault(s =&gt; s &gt; 95, -1)</code>। Classes के लिए result use करने से पहले <code>null</code> check करो।</li>
<li><b>Any बनाम Count</b>: <code>Any()</code> पहले match पर रुकता है; lazy या filtered query पर <code>Count()</code> हर item से गुज़रता है। पूरी तुलना (EF Core, collections, analyzers) Q&amp;A "Any() or Count() &gt; 0" में है।</li>
<li><b>All</b> <b>खाली</b> sequence पर <code>true</code> देता है ("कोई fail नहीं हुआ" तब भी true है जब कोई है ही नहीं)। Classic trick question।</li>
<li><b>खाली sequences</b>: <code>Sum()</code> 0 देता है; non-nullable numbers पर <code>Min()</code>, <code>Max()</code>, <code>Average()</code> <b>throw</b> करते हैं; nullable numbers (<code>int?</code>) पर <code>null</code> return करते हैं।</li>
<li><b>MinBy / MaxBy</b> (.NET 6) सबसे छोटी/बड़ी key वाला <b>item</b> देते हैं। <code>Min</code>/<code>Max</code> <b>value</b> देते हैं।</li>
</ul>
<p><b>कब use करें:</b> unique key से lookup के लिए <code>Single</code>/<code>SingleOrDefault</code> जब duplicates का मतलब corrupted data हो; <code>FirstOrDefault</code> + null check जब "नहीं मिला" normal case हो (404 return करो); "exists?" के लिए <code>Any</code>; "top item" के लिए <code>MaxBy</code>। <b>कब नहीं:</b> non-unique column पर <code>Single</code> (किसी दिन production में throw करेगा); किसी ख़ास item की उम्मीद में <code>OrderBy</code> के बिना <code>First()</code> (unordered DB result का "पहला" तय नहीं है); lazy query या EF query पर <code>Count() &gt; 0</code>।</p>`,
        hg: `<p><b>Analogy — housing society ka register:</b> "Is <b>Aadhaar number</b> wala flat owner dhoondho" — theek ek hona chahiye; do hon to data kharaab hai (<b>Single</b>). "Sharma naam ka <b>koi ek</b> resident batao" (<b>First</b>). "Kya society mein <b>kisi</b> ke paas electric car hai?" — pehli haan par ruk jao (<b>Any</b>). "<b>Kitnon</b> ke paas hai?" — har flat check karo (<b>Count</b>). "Kya <b>sabne</b> maintenance bhara hai?" (<b>All</b>). "Kaun sa flat <b>sabse zyada</b> maintenance deta hai?" — aapko flat chahiye, sirf amount nahi (<b>MaxBy</b>).</p>
<ul>
<li><b>First / Last</b>: kuch match na ho to <code>InvalidOperationException</code> throw karte hain ("Sequence contains no matching element"). <b>FirstOrDefault / LastOrDefault</b>: uski jagah <code>default</code> return karte hain.</li>
<li><b>Single</b>: zero <b>ya</b> ek se zyada match par throw. <b>SingleOrDefault</b>: zero par default, par do ya zyada par phir bhi throw ("Sequence contains more than one matching element").</li>
<li><b>Cost</b>: <code>First</code> pehle match par ruk jaata hai. <code>Single</code> ko <b>doosra</b> match bhi dhoondhna padta hai, isliye aage tak padhta hai (SQL Server par EF Core mein <code>First</code>, <code>TOP(1)</code> banta hai aur <code>Single</code>, <code>TOP(2)</code>).</li>
<li><b>Value-type ka jaal</b>: <code>scores.FirstOrDefault(s =&gt; s &gt; 95)</code> kuch match na hone par <b>0</b> deta hai — par 0 asli score bhi ho sakta hai. .NET 6 mein apne default wale overloads aaye: <code>FirstOrDefault(s =&gt; s &gt; 95, -1)</code>. Classes ke liye result use karne se pehle <code>null</code> check karo.</li>
<li><b>Any vs Count</b>: <code>Any()</code> pehle match par rukta hai; lazy ya filtered query par <code>Count()</code> har item se guzarta hai. Poori tulna (EF Core, collections, analyzers) Q&amp;A "Any() or Count() &gt; 0" mein hai.</li>
<li><b>All</b> <b>khaali</b> sequence par <code>true</code> deta hai ("koi fail nahi hua" tab bhi true hai jab koi hai hi nahi). Classic trick question.</li>
<li><b>Khaali sequences</b>: <code>Sum()</code> 0 deta hai; non-nullable numbers par <code>Min()</code>, <code>Max()</code>, <code>Average()</code> <b>throw</b> karte hain; nullable numbers (<code>int?</code>) par <code>null</code> return karte hain.</li>
<li><b>MinBy / MaxBy</b> (.NET 6) sabse chhoti/badi key wala <b>item</b> dete hain. <code>Min</code>/<code>Max</code> <b>value</b> dete hain.</li>
</ul>
<p><b>Kab use karein:</b> unique key se lookup ke liye <code>Single</code>/<code>SingleOrDefault</code> jab duplicates ka matlab corrupted data ho; <code>FirstOrDefault</code> + null check jab "nahi mila" normal case ho (404 return karo); "exists?" ke liye <code>Any</code>; "top item" ke liye <code>MaxBy</code>. <b>Kab nahi:</b> non-unique column par <code>Single</code> (kisi din production mein throw karega); kisi khaas item ki ummeed mein <code>OrderBy</code> ke bina <code>First()</code> (unordered DB result ka "pehla" tay nahi hai); lazy query ya EF query par <code>Count() &gt; 0</code>.</p>`
      },
      code: [{
        caption: {
          en: "First vs FirstOrDefault, Single throwing on duplicates, the default-value overload, Any/Count/All, empty sequences, Max vs MaxBy",
          hi: "First बनाम FirstOrDefault, duplicates पर Single का throw, default-value overload, Any/Count/All, खाली sequences, Max बनाम MaxBy",
          hg: "First vs FirstOrDefault, duplicates par Single ka throw, default-value overload, Any/Count/All, khaali sequences, Max vs MaxBy"
        },
        check: "run",
        expected: "asha@x.in\nnot found -> return 404\nravi@x.in\nSingle: Sequence contains more than one matching element\n0\n-1\nAny inactive: True, active count: 2, list count: 3\nAll on empty: True\nSum of empty: 0, Max of empty int?: null\nMax score: 90, top user: neha@x.in",
        src: `var users = new List<User>
{
    new(1, "asha@x.in", true), new(2, "ravi@x.in", false), new(3, "neha@x.in", true)
};

// First: stops at the first match. FirstOrDefault: null when nothing matches.
Console.WriteLine(users.First(u => u.Active).Email);
User? missing = users.FirstOrDefault(u => u.Id == 99);
Console.WriteLine(missing is null ? "not found -> return 404" : missing.Email);

// Single: exactly one, otherwise an exception - right for unique keys
Console.WriteLine(users.Single(u => u.Id == 2).Email);
try
{
    users.Single(u => u.Active);          // two active users
}
catch (InvalidOperationException ex)
{
    Console.WriteLine($"Single: {ex.Message}");
}

// The value-type trap, and the .NET 6 default-value overload
int[] scores = [40, 75, 90];
Console.WriteLine(scores.FirstOrDefault(s => s > 95));       // 0 - a real score or "none"?
Console.WriteLine(scores.FirstOrDefault(s => s > 95, -1));   // -1 = clearly "none"

// Any stops early; Count() checks all; the Count property is free
Console.WriteLine($"Any inactive: {users.Any(u => !u.Active)}, active count: {users.Count(u => u.Active)}, list count: {users.Count}");

// Empty sequences
int[] none = [];
Console.WriteLine($"All on empty: {none.All(n => n > 100)}");
int? maxOfEmpty = none.Select(n => (int?)n).Max();
Console.WriteLine($"Sum of empty: {none.Sum()}, Max of empty int?: {maxOfEmpty?.ToString() ?? "null"}");

// Max returns the value; MaxBy (.NET 6) returns the item
Console.WriteLine($"Max score: {scores.Max()}, top user: {users.MaxBy(u => u.Id)!.Email}");

record User(int Id, string Email, bool Active);`
      }]
    },
    {
      id: "distinct-aggregate-in-code",
      depth: "detailed",
      title: {
        en: "Distinct, DistinctBy, set operators and Aggregate in code (plus .NET 9 Index)",
        hi: "Code में Distinct, DistinctBy, set operators और Aggregate (साथ में .NET 9 Index)",
        hg: "Code mein Distinct, DistinctBy, set operators aur Aggregate (saath mein .NET 9 Index)"
      },
      body: {
        en: `<p><b>Analogy — the wedding guest list and the shop's galla:</b> the bride's and the groom's families both send guest lists, and some uncles are on <b>both</b>. Removing the repeats is <b>Distinct</b>. But "same person" needs a rule: same name? same phone number? That rule is <b>equality</b> — or the key you give to <b>DistinctBy</b>. At the end of the day, the shopkeeper starts with an empty <b>galla</b> (cash box) and adds each sale one by one to get the day's total — that running fold is <b>Aggregate</b>.</p>
<ul>
<li><b>Distinct()</b> uses the type's <code>Equals</code>/<code>GetHashCode</code>. <b>Records</b> (and anonymous types, tuples) compare by <b>value</b>, so duplicates are removed. A normal <b>class</b> compares by <b>reference</b>, so two objects with the same data are both kept — unless you override equality or pass an <code>IEqualityComparer&lt;T&gt;</code>.</li>
<li>Strings: <code>Distinct(StringComparer.OrdinalIgnoreCase)</code> treats "Pune" and "PUNE" as the same.</li>
<li><b>DistinctBy(keySelector)</b> (.NET 6) keeps the <b>first</b> item for each key — for example, one row per customer. No custom comparer needed.</li>
<li>The docs describe <code>Distinct</code> as returning an <b>unordered</b> sequence. If order matters to you, sort the result.</li>
<li><b>Set operators</b>: <code>Union</code> (all, no duplicates), <code>Intersect</code> (in both), <code>Except</code> (in first, not in second). .NET 6 added <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>.</li>
<li><b>Aggregate</b> = a general "fold": <code>Aggregate(seed, (acc, x) =&gt; ...)</code>. Without a seed, the first item is the seed — and an <b>empty</b> sequence then throws. For sums, counts and joins of strings, the specialised methods (<code>Sum</code>, <code>Count</code>, <code>string.Join</code>) are clearer and usually faster.</li>
<li><b>Index()</b> (.NET 9) returns <code>(Index, Item)</code> tuples — a cleaner way to get the position than <code>Select((x, i) =&gt; ...)</code>.</li>
</ul>
<p><b>When to use:</b> <code>Distinct</code> for unique simple values or records; <code>DistinctBy</code> for "one per key"; set operators to compare two lists (new vs old IDs); <code>Aggregate</code> for custom folds that have no built-in method. <b>When not:</b> <code>Distinct</code> on classes without equality (it removes only same-instance duplicates); <code>Aggregate</code> with string concatenation on big lists (O(n²) copying — use <code>string.Join</code> or <code>StringBuilder</code>); clever <code>Aggregate</code> one-liners that a plain loop would make readable.</p>`,
        hi: `<p><b>Analogy — शादी की guest list और दुकान का गल्ला:</b> दुल्हन और दूल्हे, दोनों के परिवार guest lists भेजते हैं, और कुछ चाचा-मामा <b>दोनों</b> में हैं। दोहराव हटाना है <b>Distinct</b>। पर "वही इंसान" के लिए एक rule चाहिए: नाम एक जैसा? phone number एक जैसा? वो rule है <b>equality</b> — या वो key जो आप <b>DistinctBy</b> को देते हो। दिन के आख़िर में दुकानदार ख़ाली <b>गल्ले</b> से शुरू करता है और हर sale एक-एक करके जोड़कर दिन का total निकालता है — यही running fold है <b>Aggregate</b>।</p>
<ul>
<li><b>Distinct()</b> type का <code>Equals</code>/<code>GetHashCode</code> use करता है। <b>Records</b> (और anonymous types, tuples) <b>value</b> से compare होते हैं, इसलिए duplicates हट जाते हैं। Normal <b>class</b> <b>reference</b> से compare होती है, इसलिए एक जैसे data वाले दो objects दोनों रह जाते हैं — जब तक आप equality override न करो या <code>IEqualityComparer&lt;T&gt;</code> pass न करो।</li>
<li>Strings: <code>Distinct(StringComparer.OrdinalIgnoreCase)</code> "Pune" और "PUNE" को एक मानता है।</li>
<li><b>DistinctBy(keySelector)</b> (.NET 6) हर key का <b>पहला</b> item रखता है — जैसे हर customer की एक row। Custom comparer की ज़रूरत नहीं।</li>
<li>Docs के हिसाब से <code>Distinct</code> एक <b>unordered</b> sequence return करता है। अगर order आपके लिए ज़रूरी है, तो result को sort करो।</li>
<li><b>Set operators</b>: <code>Union</code> (सब, बिना duplicates), <code>Intersect</code> (दोनों में), <code>Except</code> (पहले में, दूसरे में नहीं)। .NET 6 में <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code> आए।</li>
<li><b>Aggregate</b> = एक general "fold": <code>Aggregate(seed, (acc, x) =&gt; ...)</code>। Seed न दो तो पहला item ही seed बनता है — और तब <b>खाली</b> sequence पर throw होता है। Sums, counts और strings जोड़ने के लिए specialised methods (<code>Sum</code>, <code>Count</code>, <code>string.Join</code>) ज़्यादा साफ़ और आमतौर पर तेज़ हैं।</li>
<li><b>Index()</b> (.NET 9) <code>(Index, Item)</code> tuples देता है — position पाने का <code>Select((x, i) =&gt; ...)</code> से साफ़ तरीका।</li>
</ul>
<p><b>कब use करें:</b> unique simple values या records के लिए <code>Distinct</code>; "हर key का एक" के लिए <code>DistinctBy</code>; दो lists compare करने के लिए set operators (नए बनाम पुराने IDs); ऐसे custom folds के लिए <code>Aggregate</code> जिनका कोई built-in method नहीं। <b>कब नहीं:</b> बिना equality वाली classes पर <code>Distinct</code> (यह सिर्फ़ same-instance duplicates हटाता है); बड़ी lists पर string जोड़ने वाला <code>Aggregate</code> (O(n²) copying — <code>string.Join</code> या <code>StringBuilder</code> use करो); ऐसे चालाक <code>Aggregate</code> one-liners जिन्हें plain loop पढ़ने लायक बना देता।</p>`,
        hg: `<p><b>Analogy — shaadi ki guest list aur dukaan ka galla:</b> dulhan aur dulhe, dono ke parivaar guest lists bhejte hain, aur kuch chacha-mama <b>dono</b> mein hain. Dohraav hataana hai <b>Distinct</b>. Par "wahi insaan" ke liye ek rule chahiye: naam ek jaisa? phone number ek jaisa? Woh rule hai <b>equality</b> — ya woh key jo aap <b>DistinctBy</b> ko dete ho. Din ke aakhir mein dukaandaar khaali <b>galle</b> se shuru karta hai aur har sale ek-ek karke jodkar din ka total nikaalta hai — yahi running fold hai <b>Aggregate</b>.</p>
<ul>
<li><b>Distinct()</b> type ka <code>Equals</code>/<code>GetHashCode</code> use karta hai. <b>Records</b> (aur anonymous types, tuples) <b>value</b> se compare hote hain, isliye duplicates hat jaate hain. Normal <b>class</b> <b>reference</b> se compare hoti hai, isliye ek jaise data wale do objects dono reh jaate hain — jab tak aap equality override na karo ya <code>IEqualityComparer&lt;T&gt;</code> pass na karo.</li>
<li>Strings: <code>Distinct(StringComparer.OrdinalIgnoreCase)</code> "Pune" aur "PUNE" ko ek maanta hai.</li>
<li><b>DistinctBy(keySelector)</b> (.NET 6) har key ka <b>pehla</b> item rakhta hai — jaise har customer ki ek row. Custom comparer ki zaroorat nahi.</li>
<li>Docs ke hisaab se <code>Distinct</code> ek <b>unordered</b> sequence return karta hai. Agar order aapke liye zaroori hai, to result ko sort karo.</li>
<li><b>Set operators</b>: <code>Union</code> (sab, bina duplicates), <code>Intersect</code> (dono mein), <code>Except</code> (pehle mein, doosre mein nahi). .NET 6 mein <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code> aaye.</li>
<li><b>Aggregate</b> = ek general "fold": <code>Aggregate(seed, (acc, x) =&gt; ...)</code>. Seed na do to pehla item hi seed banta hai — aur tab <b>khaali</b> sequence par throw hota hai. Sums, counts aur strings jodne ke liye specialised methods (<code>Sum</code>, <code>Count</code>, <code>string.Join</code>) zyada saaf aur aamtaur par tez hain.</li>
<li><b>Index()</b> (.NET 9) <code>(Index, Item)</code> tuples deta hai — position paane ka <code>Select((x, i) =&gt; ...)</code> se saaf tareeka.</li>
</ul>
<p><b>Kab use karein:</b> unique simple values ya records ke liye <code>Distinct</code>; "har key ka ek" ke liye <code>DistinctBy</code>; do lists compare karne ke liye set operators (naye vs purane IDs); aise custom folds ke liye <code>Aggregate</code> jinka koi built-in method nahi. <b>Kab nahi:</b> bina equality wali classes par <code>Distinct</code> (yeh sirf same-instance duplicates hataata hai); badi lists par string jodne wala <code>Aggregate</code> (O(n²) copying — <code>string.Join</code> ya <code>StringBuilder</code> use karo); aise chaalak <code>Aggregate</code> one-liners jinhe plain loop padhne laayak bana deta.</p>`
      },
      code: [{
        caption: {
          en: "Distinct on records vs classes, a case-insensitive comparer, DistinctBy, Union/Intersect/Except, Aggregate with and without a seed, and .NET 9 Index()",
          hi: "Records बनाम classes पर Distinct, case-insensitive comparer, DistinctBy, Union/Intersect/Except, seed के साथ और बिना Aggregate, और .NET 9 Index()",
          hg: "Records vs classes par Distinct, case-insensitive comparer, DistinctBy, Union/Intersect/Except, seed ke saath aur bina Aggregate, aur .NET 9 Index()"
        },
        check: "run",
        expected: "records: 2, classes: 3\nignore case: 2\nfirst visit: Asha/Mon, Neha/Wed, Ravi/Mon\nUnion: 5, Intersect: 3,4, Except: 1,2\n400 | 100,250,50 | 250\n1. Asha\n2. Ravi",
        src: `// Distinct uses Equals/GetHashCode: records by value, classes by reference
CityRec[] recordCities = [new("Pune"), new("Pune"), new("Delhi")];
CityClass[] classCities = [new("Pune"), new("Pune"), new("Delhi")];
Console.WriteLine($"records: {recordCities.Distinct().Count()}, classes: {classCities.Distinct().Count()}");

// A comparer changes what "equal" means
string[] typed = ["pune", "Pune", "PUNE", "delhi"];
Console.WriteLine($"ignore case: {typed.Distinct(StringComparer.OrdinalIgnoreCase).Count()}");

// DistinctBy (.NET 6): the first item per key (sorted only for a stable print)
Visit[] visits = [new("Asha", "Mon"), new("Ravi", "Mon"), new("Asha", "Tue"), new("Neha", "Wed")];
var firstVisit = visits.DistinctBy(v => v.Customer).OrderBy(v => v.Customer);
Console.WriteLine("first visit: " + string.Join(", ", firstVisit.Select(v => $"{v.Customer}/{v.Day}")));

// Set operators
int[] monday = [1, 2, 3, 4];
int[] tuesday = [3, 4, 5];
Console.WriteLine($"Union: {monday.Union(tuesday).Count()}, " +
                  $"Intersect: {string.Join(",", monday.Intersect(tuesday).Order())}, " +
                  $"Except: {string.Join(",", monday.Except(tuesday).Order())}");

// Aggregate: with a seed, and without (the first item becomes the seed)
int[] amounts = [100, 250, 50];
int total = amounts.Aggregate(0, (sum, a) => sum + a);               // same as Sum()
string csv = amounts.Aggregate("", (acc, a) => acc.Length == 0 ? $"{a}" : $"{acc},{a}"); // string.Join is better
int max = amounts.Aggregate((best, a) => a > best ? a : best);       // throws on an empty array
Console.WriteLine($"{total} | {csv} | {max}");

// .NET 9: Index() gives (Index, Item) pairs
foreach (var (i, name) in new[] { "Asha", "Ravi" }.Index())
    Console.WriteLine($"{i + 1}. {name}");

record CityRec(string Name);
record Visit(string Customer, string Day);
class CityClass(string name)
{
    public string Name { get; } = name;
}`
      }]
    },
    {
      id: "performance-review-in-code",
      depth: "detailed",
      title: {
        en: "Tech Lead angle: LINQ performance, when a plain loop wins, and code-review red flags",
        hi: "Tech Lead angle: LINQ performance, कब plain loop जीतता है, और code-review red flags",
        hg: "Tech Lead angle: LINQ performance, kab plain loop jeetta hai, aur code-review red flags"
      },
      body: {
        en: `<p><b>Analogy — auto-rickshaw vs walking:</b> for a 3 km trip, an auto is comfortable and fast enough — nobody walks to "save fuel". But for the last 50 metres inside a crowded gali, walking is quicker than squeezing the auto through. LINQ is the auto: the right default for most code. A plain loop is walking: better for the few hot, tight spots. And before arguing, <b>measure the trip</b> (a profiler or BenchmarkDotNet).</p>
<ul>
<li><b>What LINQ to Objects costs</b>: a delegate call per item per operator; an iterator object per operator; a closure object when the lambda captures local variables; and enumeration through the <code>IEnumerable&lt;T&gt;</code> interface. In a web request that also calls a database, this is usually noise.</li>
<li>.NET has special fast paths for arrays and lists in many operators, and they keep getting faster in each release. Write clear LINQ first; optimise what a profiler shows.</li>
<li><b>When a plain loop is better</b>: hot paths that run millions of times (parsers, pricing engines, tight per-item loops); computing <b>several</b> aggregates in one pass (<code>Sum</code> + <code>Count</code> + <code>Max</code> in LINQ = three passes); complex early exits or state; and changing items in place.</li>
<li><b>Readability matters too</b>: a 15-operator chain nobody can debug is worse than three named steps (<code>var paidOrders = ...; var byCity = ...;</code>).</li>
</ul>
<p><b>Code-review red flags</b>: the full checklist is in the Q&amp;A "As a Tech Lead, what LINQ problems do you look for in code review?". The demo below shows one of them — a <code>First()</code> lookup inside a loop — and its fix.</p>
<p><b>When to use</b> LINQ: business logic, mapping, filtering, reports, EF Core queries — clarity wins. <b>When not:</b> measured hot paths, multi-aggregate single passes, and code with heavy side effects — use a loop and leave a short comment saying why.</p>`,
        hi: `<p><b>Analogy — auto-rickshaw बनाम पैदल:</b> 3 km के सफ़र के लिए auto आरामदायक और काफ़ी तेज़ है — कोई "petrol बचाने" के लिए पैदल नहीं जाता। पर भीड़ वाली गली के आख़िरी 50 meter में auto घुसाने से पैदल चलना जल्दी है। LINQ auto है: ज़्यादातर code के लिए सही default। Plain loop पैदल चलना है: गिनी-चुनी hot, tight जगहों के लिए बेहतर। और बहस से पहले <b>सफ़र नापो</b> (profiler या BenchmarkDotNet)।</p>
<ul>
<li><b>LINQ to Objects का ख़र्च</b>: हर operator पर हर item के लिए एक delegate call; हर operator का एक iterator object; lambda जब local variables capture करे तो एक closure object; और <code>IEnumerable&lt;T&gt;</code> interface के ज़रिए enumeration। जो web request database भी call करती है, उसमें यह आमतौर पर noise है।</li>
<li>.NET में कई operators के लिए arrays और lists के special fast paths हैं, और हर release में ये और तेज़ होते जाते हैं। पहले साफ़ LINQ लिखो; जो profiler दिखाए उसे optimise करो।</li>
<li><b>Plain loop कब बेहतर है</b>: लाखों बार चलने वाले hot paths (parsers, pricing engines, tight per-item loops); एक ही pass में <b>कई</b> aggregates निकालना (LINQ में <code>Sum</code> + <code>Count</code> + <code>Max</code> = तीन passes); complex early exits या state; और items को वहीं बदलना।</li>
<li><b>Readability भी ज़रूरी है</b>: 15 operators की chain जिसे कोई debug न कर सके, तीन named steps से बदतर है (<code>var paidOrders = ...; var byCity = ...;</code>)।</li>
</ul>
<p><b>Code-review red flags</b>: पूरी checklist Q&amp;A "As a Tech Lead, what LINQ problems do you look for in code review?" में है। नीचे का demo उनमें से एक दिखाता है — loop के अंदर <code>First()</code> lookup — और उसका fix।</p>
<p><b>कब use करें</b> LINQ: business logic, mapping, filtering, reports, EF Core queries — यहाँ clarity जीतती है। <b>कब नहीं:</b> measured hot paths, एक pass में कई aggregates, और भारी side effects वाला code — loop use करो और एक छोटा comment छोड़ो कि क्यों।</p>`,
        hg: `<p><b>Analogy — auto-rickshaw vs paidal:</b> 3 km ke safar ke liye auto aaraamdaayak aur kaafi tez hai — koi "petrol bachane" ke liye paidal nahi jaata. Par bheed wali gali ke aakhri 50 meter mein auto ghusaane se paidal chalna jaldi hai. LINQ auto hai: zyadatar code ke liye sahi default. Plain loop paidal chalna hai: gini-chuni hot, tight jagahon ke liye behtar. Aur behes se pehle <b>safar naapo</b> (profiler ya BenchmarkDotNet).</p>
<ul>
<li><b>LINQ to Objects ka kharcha</b>: har operator par har item ke liye ek delegate call; har operator ka ek iterator object; lambda jab local variables capture kare to ek closure object; aur <code>IEnumerable&lt;T&gt;</code> interface ke zariye enumeration. Jo web request database bhi call karti hai, usmein yeh aamtaur par noise hai.</li>
<li>.NET mein kai operators ke liye arrays aur lists ke special fast paths hain, aur har release mein yeh aur tez hote jaate hain. Pehle saaf LINQ likho; jo profiler dikhaaye use optimise karo.</li>
<li><b>Plain loop kab behtar hai</b>: laakhon baar chalne wale hot paths (parsers, pricing engines, tight per-item loops); ek hi pass mein <b>kai</b> aggregates nikaalna (LINQ mein <code>Sum</code> + <code>Count</code> + <code>Max</code> = teen passes); complex early exits ya state; aur items ko wahin badalna.</li>
<li><b>Readability bhi zaroori hai</b>: 15 operators ki chain jise koi debug na kar sake, teen named steps se badtar hai (<code>var paidOrders = ...; var byCity = ...;</code>).</li>
</ul>
<p><b>Code-review red flags</b>: poori checklist Q&amp;A "As a Tech Lead, what LINQ problems do you look for in code review?" mein hai. Neeche ka demo unmein se ek dikhata hai — loop ke andar <code>First()</code> lookup — aur uska fix.</p>
<p><b>Kab use karein</b> LINQ: business logic, mapping, filtering, reports, EF Core queries — yahan clarity jeetti hai. <b>Kab nahi:</b> measured hot paths, ek pass mein kai aggregates, aur bhaari side effects wala code — loop use karo aur ek chhota comment chhodo ki kyon.</p>`
      },
      code: [{
        caption: {
          en: "Same result with LINQ and a loop; three aggregates in one pass; First() inside a loop vs a dictionary built once",
          hi: "LINQ और loop से एक ही result; एक pass में तीन aggregates; loop के अंदर First() बनाम एक बार बनी dictionary",
          hg: "LINQ aur loop se ek hi result; ek pass mein teen aggregates; loop ke andar First() vs ek baar bani dictionary"
        },
        check: "run",
        expected: "LINQ = loop: True\nOne pass: count=858, sum=4294290, max=10000\nLambda calls with First() in a loop: 9\nNames via dictionary: C1,C2,C3",
        src: `var orders = Enumerable.Range(1, 1000)
    .Select(i => new Order(i, CustomerId: i % 50, Amount: i * 10, Paid: i % 7 != 0))
    .ToList();
var customers = Enumerable.Range(0, 50).Select(id => new Customer(id, $"C{id}")).ToList();

// 1. Readable LINQ - the right default for business code
int paidTotal = orders.Where(o => o.Paid).Sum(o => o.Amount);

// 2. The same with a plain loop: no delegates, no iterator objects
int loopTotal = 0;
foreach (var o in orders)
    if (o.Paid) loopTotal += o.Amount;
Console.WriteLine($"LINQ = loop: {paidTotal == loopTotal}");

// 3. Several aggregates: LINQ would make three passes; a loop needs one
int count = 0, sum = 0, max = int.MinValue;
foreach (var o in orders)
{
    if (!o.Paid) continue;
    count++;
    sum += o.Amount;
    if (o.Amount > max) max = o.Amount;
}
Console.WriteLine($"One pass: count={count}, sum={sum}, max={max}");

// 4. Red flag: First() inside a loop scans the list again and again (O(n*m))
int calls = 0;
foreach (var o in orders.Take(3))
{
    _ = customers.First(x => { calls++; return x.Id == o.CustomerId; });
}
Console.WriteLine($"Lambda calls with First() in a loop: {calls}");

// Fix: build a dictionary once, then each lookup is O(1)
Dictionary<int, Customer> byId = customers.ToDictionary(c => c.Id);
Console.WriteLine("Names via dictionary: " + string.Join(",", orders.Take(3).Select(o => byId[o.CustomerId].Name)));

record Order(int Id, int CustomerId, int Amount, bool Paid);
record Customer(int Id, string Name);`
      }]
    },
  ],
  qa: [
    {
      id: "deferred-execution",
      depth: "short",
      q: "What is deferred execution in LINQ? Which methods run the query immediately?",
      answer: "A LINQ query runs only when you enumerate it — foreach, ToList, Count, First and similar. Building it with Where or Select runs nothing, and every enumeration runs it again with the current data.",
      meaning: {
        hi: "LINQ query तभी चलती है जब आप उसे enumerate करते हो — foreach, ToList, Count, First वगैरह। Where या Select से उसे बनाने पर कुछ नहीं चलता, और हर enumeration उसे current data के साथ फिर से चलाता है।",
        hg: "LINQ query tabhi chalti hai jab aap use enumerate karte ho — foreach, ToList, Count, First waghera. Where ya Select se use banane par kuch nahi chalta, aur har enumeration use current data ke saath phir se chalata hai."
      },
      explain: {
        en: `<ul>
<li><b>Deferred</b> (return a query): <code>Where</code>, <code>Select</code>, <code>SelectMany</code>, <code>OrderBy</code>/<code>ThenBy</code>, <code>GroupBy</code>, <code>Join</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>Concat</code>, <code>Zip</code>...</li>
<li><b>Immediate</b> (run it): <code>foreach</code>; <code>ToList</code>/<code>ToArray</code>/<code>ToDictionary</code>/<code>ToHashSet</code>/<code>ToLookup</code>; aggregates <code>Count</code>, <code>Sum</code>, <code>Min</code>, <code>Max</code>, <code>Average</code>, <code>Aggregate</code>; quantifiers <code>Any</code>, <code>All</code>, <code>Contains</code>; elements <code>First</code>, <code>Single</code>, <code>Last</code>, <code>ElementAt</code>.</li>
<li>Consequences: the query sees <b>current</b> source data and <b>current</b> values of captured variables; it runs <b>again</b> on each enumeration; exceptions inside lambdas appear <b>at enumeration</b>.</li>
<li>Inside "deferred" there are two kinds: <b>streaming</b> (<code>Where</code>, <code>Select</code> — one item at a time) and <b>buffering</b> (<code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> — read everything first).</li>
</ul>
<p>Follow-up: "Why is it designed this way?" — composition (add filters step by step and run once), streaming large data without loading it all, and for <code>IQueryable</code>, sending one combined SQL query at the end.</p>
<p>Follow-up: "How do you force execution?" — <code>ToList()</code>/<code>ToArray()</code> to get a snapshot you can reuse.</p>`,
        hi: `<ul>
<li><b>Deferred</b> (query return करते हैं): <code>Where</code>, <code>Select</code>, <code>SelectMany</code>, <code>OrderBy</code>/<code>ThenBy</code>, <code>GroupBy</code>, <code>Join</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>Concat</code>, <code>Zip</code>...</li>
<li><b>Immediate</b> (उसे चलाते हैं): <code>foreach</code>; <code>ToList</code>/<code>ToArray</code>/<code>ToDictionary</code>/<code>ToHashSet</code>/<code>ToLookup</code>; aggregates <code>Count</code>, <code>Sum</code>, <code>Min</code>, <code>Max</code>, <code>Average</code>, <code>Aggregate</code>; quantifiers <code>Any</code>, <code>All</code>, <code>Contains</code>; elements <code>First</code>, <code>Single</code>, <code>Last</code>, <code>ElementAt</code>।</li>
<li>नतीजे: query <b>current</b> source data और captured variables की <b>current</b> values देखती है; हर enumeration पर <b>फिर से</b> चलती है; lambdas के अंदर के exceptions <b>enumeration के समय</b> आते हैं।</li>
<li>"Deferred" के अंदर दो तरह हैं: <b>streaming</b> (<code>Where</code>, <code>Select</code> — एक बार में एक item) और <b>buffering</b> (<code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> — पहले सब पढ़ते हैं)।</li>
</ul>
<p>Follow-up: "ऐसा design क्यों है?" — composition (filters step by step जोड़ो और एक बार चलाओ), बड़े data को पूरा load किए बिना stream करना, और <code>IQueryable</code> के लिए आख़िर में एक combined SQL query भेजना।</p>
<p>Follow-up: "Execution force कैसे करोगे?" — <code>ToList()</code>/<code>ToArray()</code> से एक snapshot जिसे दोबारा use कर सको।</p>`,
        hg: `<ul>
<li><b>Deferred</b> (query return karte hain): <code>Where</code>, <code>Select</code>, <code>SelectMany</code>, <code>OrderBy</code>/<code>ThenBy</code>, <code>GroupBy</code>, <code>Join</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>Concat</code>, <code>Zip</code>...</li>
<li><b>Immediate</b> (use chalate hain): <code>foreach</code>; <code>ToList</code>/<code>ToArray</code>/<code>ToDictionary</code>/<code>ToHashSet</code>/<code>ToLookup</code>; aggregates <code>Count</code>, <code>Sum</code>, <code>Min</code>, <code>Max</code>, <code>Average</code>, <code>Aggregate</code>; quantifiers <code>Any</code>, <code>All</code>, <code>Contains</code>; elements <code>First</code>, <code>Single</code>, <code>Last</code>, <code>ElementAt</code>.</li>
<li>Nateeje: query <b>current</b> source data aur captured variables ki <b>current</b> values dekhti hai; har enumeration par <b>phir se</b> chalti hai; lambdas ke andar ke exceptions <b>enumeration ke samay</b> aate hain.</li>
<li>"Deferred" ke andar do tarah hain: <b>streaming</b> (<code>Where</code>, <code>Select</code> — ek baar mein ek item) aur <b>buffering</b> (<code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> — pehle sab padhte hain).</li>
</ul>
<p>Follow-up: "Aisa design kyon hai?" — composition (filters step by step jodo aur ek baar chalao), bade data ko poora load kiye bina stream karna, aur <code>IQueryable</code> ke liye aakhir mein ek combined SQL query bhejna.</p>
<p>Follow-up: "Execution force kaise karoge?" — <code>ToList()</code>/<code>ToArray()</code> se ek snapshot jise dobara use kar sako.</p>`
      }
    },
    {
      id: "ienumerable-vs-iqueryable",
      depth: "short",
      q: "What is the difference between IEnumerable and IQueryable?",
      answer: "IEnumerable runs LINQ in memory with compiled Func delegates. IQueryable builds an expression tree that a provider such as EF Core translates, for example to SQL, so the filtering happens in the database.",
      meaning: {
        hi: "IEnumerable, LINQ को memory में compiled Func delegates से चलाता है। IQueryable एक expression tree बनाता है जिसे EF Core जैसा provider translate करता है, जैसे SQL में, इसलिए filtering database में होती है।",
        hg: "IEnumerable, LINQ ko memory mein compiled Func delegates se chalata hai. IQueryable ek expression tree banata hai jise EF Core jaisa provider translate karta hai, jaise SQL mein, isliye filtering database mein hoti hai."
      },
      explain: {
        en: `<ul>
<li><code>Enumerable.Where(Func&lt;T,bool&gt;)</code> vs <code>Queryable.Where(Expression&lt;Func&lt;T,bool&gt;&gt;)</code>. Same lambda text — different target types.</li>
<li><code>IQueryable&lt;T&gt;</code> inherits <code>IEnumerable&lt;T&gt;</code>. The <b>compile-time type</b> of your variable decides which <code>Where</code> is called. Once the query is treated as <code>IEnumerable</code> (variable type, <code>AsEnumerable()</code>, <code>ToList()</code>), the rest runs in memory.</li>
<li>Both are deferred. <code>IQueryable</code> is executed by its <b>provider</b> when enumerated (EF Core: translate → run SQL → materialize objects).</li>
<li>Example: <code>db.Orders.Where(o =&gt; o.Total &gt; 500).ToList()</code> → SQL <code>WHERE</code>. But <code>db.Orders.AsEnumerable().Where(...)</code> → all rows and all columns, then filter in C#.</li>
</ul>
<p>Follow-up: "Then why not use IQueryable everywhere?" — Not every C# method can be translated, the query's shape becomes visible to all layers, and in-memory data does not need it. Keep it inside the data-access layer.</p>
<p><b>TL angle:</b> in code review, look for <code>IEnumerable&lt;T&gt;</code> parameters or <code>Func</code> filters on repository methods that wrap EF Core — they silently move filtering to memory. Day 5–6 show the generated SQL.</p>`,
        hi: `<ul>
<li><code>Enumerable.Where(Func&lt;T,bool&gt;)</code> बनाम <code>Queryable.Where(Expression&lt;Func&lt;T,bool&gt;&gt;)</code>। Lambda का text वही — target types अलग।</li>
<li><code>IQueryable&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> को inherit करता है। आपके variable का <b>compile-time type</b> तय करता है कि कौन सा <code>Where</code> call होगा। जैसे ही query <code>IEnumerable</code> की तरह treat हुई (variable type, <code>AsEnumerable()</code>, <code>ToList()</code>), बाकी सब memory में चलता है।</li>
<li>दोनों deferred हैं। <code>IQueryable</code> enumerate होने पर अपने <b>provider</b> से चलता है (EF Core: translate → SQL चलाओ → objects materialize करो)।</li>
<li>Example: <code>db.Orders.Where(o =&gt; o.Total &gt; 500).ToList()</code> → SQL <code>WHERE</code>। पर <code>db.Orders.AsEnumerable().Where(...)</code> → सारी rows और सारे columns, फिर C# में filter।</li>
</ul>
<p>Follow-up: "तो हर जगह IQueryable क्यों नहीं?" — हर C# method translate नहीं होता, query का shape सारी layers को दिखने लगता है, और in-memory data को इसकी ज़रूरत नहीं। इसे data-access layer के अंदर रखो।</p>
<p><b>TL angle:</b> code review में EF Core को wrap करने वाले repository methods पर <code>IEnumerable&lt;T&gt;</code> parameters या <code>Func</code> filters ढूँढो — ये चुपचाप filtering को memory में ले जाते हैं। Generated SQL Day 5–6 में दिखेगा।</p>`,
        hg: `<ul>
<li><code>Enumerable.Where(Func&lt;T,bool&gt;)</code> vs <code>Queryable.Where(Expression&lt;Func&lt;T,bool&gt;&gt;)</code>. Lambda ka text wahi — target types alag.</li>
<li><code>IQueryable&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> ko inherit karta hai. Aapke variable ka <b>compile-time type</b> tay karta hai ki kaun sa <code>Where</code> call hoga. Jaise hi query <code>IEnumerable</code> ki tarah treat hui (variable type, <code>AsEnumerable()</code>, <code>ToList()</code>), baaki sab memory mein chalta hai.</li>
<li>Dono deferred hain. <code>IQueryable</code> enumerate hone par apne <b>provider</b> se chalta hai (EF Core: translate → SQL chalao → objects materialize karo).</li>
<li>Example: <code>db.Orders.Where(o =&gt; o.Total &gt; 500).ToList()</code> → SQL <code>WHERE</code>. Par <code>db.Orders.AsEnumerable().Where(...)</code> → saari rows aur saare columns, phir C# mein filter.</li>
</ul>
<p>Follow-up: "To har jagah IQueryable kyon nahi?" — har C# method translate nahi hota, query ka shape saari layers ko dikhne lagta hai, aur in-memory data ko iski zaroorat nahi. Ise data-access layer ke andar rakho.</p>
<p><b>TL angle:</b> code review mein EF Core ko wrap karne wale repository methods par <code>IEnumerable&lt;T&gt;</code> parameters ya <code>Func</code> filters dhoondho — yeh chupchaap filtering ko memory mein le jaate hain. Generated SQL Day 5–6 mein dikhega.</p>`
      }
    },
    {
      id: "select-vs-selectmany",
      depth: "short",
      q: "What is the difference between Select and SelectMany?",
      answer: "Select maps each item to exactly one result, so a list property gives you a list of lists. SelectMany maps each item to a collection and flattens all of them into one sequence.",
      meaning: {
        hi: "Select हर item को ठीक एक result में बदलता है, इसलिए list वाली property से lists की list मिलती है। SelectMany हर item को एक collection में बदलता है और सबको flatten करके एक sequence बना देता है।",
        hg: "Select har item ko theek ek result mein badalta hai, isliye list wali property se lists ki list milti hai. SelectMany har item ko ek collection mein badalta hai aur sabko flatten karke ek sequence bana deta hai."
      },
      explain: {
        en: `<ul>
<li><code>orders.Select(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;List&lt;Line&gt;&gt;</code> (count = number of orders).</li>
<li><code>orders.SelectMany(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;Line&gt;</code> (count = total number of lines).</li>
<li>Keep the parent with the <b>result selector</b> overload: <code>SelectMany(o =&gt; o.Lines, (o, line) =&gt; new { o.Id, line.Product })</code>.</li>
<li>Query syntax: two <code>from</code> clauses — <code>from o in orders from line in o.Lines select ...</code>.</li>
<li>Two unrelated sequences with SelectMany give a <b>cross join</b> (every pair) — useful for combinations, dangerous on big data.</li>
</ul>
<p>Follow-up: "Real examples?" — all roles of all users, all tags of all posts, all files in all folders, all order lines for a sales report.</p>
<p>Follow-up: "What does it become in EF Core?" — over a collection navigation, usually a <code>JOIN</code> (or <code>CROSS APPLY</code>/<code>LATERAL</code> in some shapes) — Day 5–6.</p>`,
        hi: `<ul>
<li><code>orders.Select(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;List&lt;Line&gt;&gt;</code> (count = orders की संख्या)।</li>
<li><code>orders.SelectMany(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;Line&gt;</code> (count = कुल lines की संख्या)।</li>
<li>Parent को साथ रखना हो तो <b>result selector</b> वाला overload: <code>SelectMany(o =&gt; o.Lines, (o, line) =&gt; new { o.Id, line.Product })</code>।</li>
<li>Query syntax: दो <code>from</code> clauses — <code>from o in orders from line in o.Lines select ...</code>।</li>
<li>दो unrelated sequences पर SelectMany एक <b>cross join</b> देता है (हर pair) — combinations के लिए काम का, बड़े data पर ख़तरनाक।</li>
</ul>
<p>Follow-up: "Real examples?" — सारे users के सारे roles, सारे posts के सारे tags, सारे folders की सारी files, sales report के लिए सारी order lines।</p>
<p>Follow-up: "EF Core में यह क्या बनता है?" — collection navigation पर आमतौर पर एक <code>JOIN</code> (कुछ shapes में <code>CROSS APPLY</code>/<code>LATERAL</code>) — Day 5–6।</p>`,
        hg: `<ul>
<li><code>orders.Select(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;List&lt;Line&gt;&gt;</code> (count = orders ki sankhya).</li>
<li><code>orders.SelectMany(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;Line&gt;</code> (count = kul lines ki sankhya).</li>
<li>Parent ko saath rakhna ho to <b>result selector</b> wala overload: <code>SelectMany(o =&gt; o.Lines, (o, line) =&gt; new { o.Id, line.Product })</code>.</li>
<li>Query syntax: do <code>from</code> clauses — <code>from o in orders from line in o.Lines select ...</code>.</li>
<li>Do unrelated sequences par SelectMany ek <b>cross join</b> deta hai (har pair) — combinations ke liye kaam ka, bade data par khatarnaak.</li>
</ul>
<p>Follow-up: "Real examples?" — saare users ke saare roles, saare posts ke saare tags, saare folders ki saari files, sales report ke liye saari order lines.</p>
<p>Follow-up: "EF Core mein yeh kya banta hai?" — collection navigation par aamtaur par ek <code>JOIN</code> (kuch shapes mein <code>CROSS APPLY</code>/<code>LATERAL</code>) — Day 5–6.</p>`
      }
    },
    {
      id: "first-vs-single",
      depth: "short",
      q: "First, FirstOrDefault, Single, SingleOrDefault — what is the difference, and when do you use each?",
      answer: "First takes the first match and throws if there is none; Single demands exactly one and throws on zero or many. OrDefault versions return default for zero — SingleOrDefault still throws on duplicates.",
      meaning: {
        hi: "First पहला match लेता है और कोई न हो तो throw करता है; Single ठीक एक माँगता है और zero या कई पर throw करता है। OrDefault versions zero matches पर default देते हैं — पर SingleOrDefault duplicates पर फिर भी throw करता है।",
        hg: "First pehla match leta hai aur koi na ho to throw karta hai; Single theek ek maangta hai aur zero ya kai par throw karta hai. OrDefault versions zero matches par default dete hain — par SingleOrDefault duplicates par phir bhi throw karta hai."
      },
      explain: {
        en: `<ul>
<li><b>Single / SingleOrDefault</b>: lookups by a <b>unique</b> key (Id, email, PNR). If two rows come back, that is a data bug — failing loudly is good.</li>
<li><b>First / FirstOrDefault</b>: "any one" or "the top one" — with an <code>OrderBy</code> when you mean a specific one (latest order, cheapest product).</li>
<li><b>...OrDefault</b> when "not found" is a normal case; then check for <code>null</code> (or use the .NET 6 overload with your own default: <code>FirstOrDefault(pred, -1)</code>, important for value types where default is <code>0</code>).</li>
<li><b>Cost</b>: <code>First</code> stops at the first match; <code>Single</code> must check there is no second one. EF Core on SQL Server: <code>First</code> → <code>TOP(1)</code>, <code>Single</code> → <code>TOP(2)</code>.</li>
<li>Exception messages: "Sequence contains no elements" / "no matching element" / "more than one matching element" — all <code>InvalidOperationException</code>.</li>
</ul>
<p>Follow-up: "In an API, which do you use for GET /orders/{id}?" — <code>SingleOrDefault</code> (or <code>FirstOrDefault</code> on the primary key, or EF Core's <code>FindAsync</code>), then return 404 when it is <code>null</code>. Do not let <code>First()</code> throw and turn "not found" into a 500.</p>`,
        hi: `<ul>
<li><b>Single / SingleOrDefault</b>: <b>unique</b> key (Id, email, PNR) से lookup। अगर दो rows आ जाएँ तो वो data bug है — ज़ोर से fail होना अच्छा है।</li>
<li><b>First / FirstOrDefault</b>: "कोई एक" या "सबसे ऊपर वाला" — जब कोई ख़ास item चाहिए (latest order, सबसे सस्ता product) तो <code>OrderBy</code> के साथ।</li>
<li><b>...OrDefault</b> जब "नहीं मिला" normal case हो; फिर <code>null</code> check करो (या .NET 6 वाला अपने default वाला overload: <code>FirstOrDefault(pred, -1)</code>, value types के लिए ज़रूरी जहाँ default <code>0</code> होता है)।</li>
<li><b>Cost</b>: <code>First</code> पहले match पर रुकता है; <code>Single</code> को check करना पड़ता है कि दूसरा तो नहीं है। SQL Server पर EF Core: <code>First</code> → <code>TOP(1)</code>, <code>Single</code> → <code>TOP(2)</code>।</li>
<li>Exception messages: "Sequence contains no elements" / "no matching element" / "more than one matching element" — सब <code>InvalidOperationException</code>।</li>
</ul>
<p>Follow-up: "API में GET /orders/{id} के लिए कौन सा use करोगे?" — <code>SingleOrDefault</code> (या primary key पर <code>FirstOrDefault</code>, या EF Core का <code>FindAsync</code>), फिर <code>null</code> हो तो 404 return करो। <code>First()</code> को throw करके "not found" को 500 में मत बदलने दो।</p>`,
        hg: `<ul>
<li><b>Single / SingleOrDefault</b>: <b>unique</b> key (Id, email, PNR) se lookup. Agar do rows aa jaayein to woh data bug hai — zor se fail hona achha hai.</li>
<li><b>First / FirstOrDefault</b>: "koi ek" ya "sabse upar wala" — jab koi khaas item chahiye (latest order, sabse sasta product) to <code>OrderBy</code> ke saath.</li>
<li><b>...OrDefault</b> jab "nahi mila" normal case ho; phir <code>null</code> check karo (ya .NET 6 wala apne default wala overload: <code>FirstOrDefault(pred, -1)</code>, value types ke liye zaroori jahan default <code>0</code> hota hai).</li>
<li><b>Cost</b>: <code>First</code> pehle match par rukta hai; <code>Single</code> ko check karna padta hai ki doosra to nahi hai. SQL Server par EF Core: <code>First</code> → <code>TOP(1)</code>, <code>Single</code> → <code>TOP(2)</code>.</li>
<li>Exception messages: "Sequence contains no elements" / "no matching element" / "more than one matching element" — sab <code>InvalidOperationException</code>.</li>
</ul>
<p>Follow-up: "API mein GET /orders/{id} ke liye kaun sa use karoge?" — <code>SingleOrDefault</code> (ya primary key par <code>FirstOrDefault</code>, ya EF Core ka <code>FindAsync</code>), phir <code>null</code> ho to 404 return karo. <code>First()</code> ko throw karke "not found" ko 500 mein mat badalne do.</p>`
      }
    },
    {
      id: "any-vs-count",
      depth: "short",
      q: "Any() or Count() > 0 — which one should you use, and why?",
      answer: "Use Any(): it stops at the first match. Count() on a lazy or filtered query walks every item — COUNT instead of EXISTS in EF Core. On a List or array, use Count or Length.",
      meaning: {
        hi: "Any() use करो: यह पहले match पर रुक जाता है। Lazy या filtered query पर Count() हर item से गुज़रता है — EF Core में EXISTS की जगह COUNT। List या array पर Count या Length use करो।",
        hg: "Any() use karo: yeh pehle match par ruk jaata hai. Lazy ya filtered query par Count() har item se guzarta hai — EF Core mein EXISTS ki jagah COUNT. List ya array par Count ya Length use karo."
      },
      explain: {
        en: `<ul>
<li><b>Lazy query</b> (<code>Where(...)</code>, a <code>yield</code> method): <code>Any()</code> pulls one matching item; <code>Count()</code> runs the whole thing.</li>
<li><b>EF Core</b>: <code>Any()</code> → <code>EXISTS (...)</code>, which the database can stop early; <code>Count() &gt; 0</code> → <code>COUNT(*)</code> over all matching rows.</li>
<li><b>Collections</b> (<code>List&lt;T&gt;</code>, arrays): <code>list.Count</code>/<code>array.Length</code> are stored values — the clearest and cheapest. <code>Count()</code> on them is also fast (it detects <code>ICollection&lt;T&gt;</code>), but the property is simpler.</li>
<li><b>Analyzers</b>: CA1827 (Count() where Any() would do), CA1829 (use the Count property instead of Count()), CA1860 (prefer comparing Count/Length to 0 over Any() on collections).</li>
</ul>
<p>Follow-up: "When do you really need Count()?" — when you need the number itself (a badge "5 new messages", paging totals). Then call it <b>once</b> and keep the value.</p>
<p>Follow-up: "What is <code>TryGetNonEnumeratedCount</code>?" — .NET 6 method that gives the count only if it is cheap (a collection), without enumerating a lazy query.</p>`,
        hi: `<ul>
<li><b>Lazy query</b> (<code>Where(...)</code>, <code>yield</code> method): <code>Any()</code> एक matching item लेता है; <code>Count()</code> पूरी query चलाता है।</li>
<li><b>EF Core</b>: <code>Any()</code> → <code>EXISTS (...)</code>, जिसे database जल्दी रोक सकता है; <code>Count() &gt; 0</code> → सारी matching rows पर <code>COUNT(*)</code>।</li>
<li><b>Collections</b> (<code>List&lt;T&gt;</code>, arrays): <code>list.Count</code>/<code>array.Length</code> stored values हैं — सबसे साफ़ और सस्ते। इन पर <code>Count()</code> भी तेज़ है (यह <code>ICollection&lt;T&gt;</code> पहचान लेता है), पर property ज़्यादा simple है।</li>
<li><b>Analyzers</b>: CA1827 (जहाँ Any() काफ़ी हो वहाँ Count()), CA1829 (Count() की जगह Count property), CA1860 (collections पर Any() की जगह Count/Length को 0 से compare करो)।</li>
</ul>
<p>Follow-up: "Count() सच में कब चाहिए?" — जब number ख़ुद चाहिए (badge "5 new messages", paging totals)। तब उसे <b>एक बार</b> call करो और value रख लो।</p>
<p>Follow-up: "<code>TryGetNonEnumeratedCount</code> क्या है?" — .NET 6 का method जो count सिर्फ़ तब देता है जब वो सस्ता हो (collection), lazy query को enumerate किए बिना।</p>`,
        hg: `<ul>
<li><b>Lazy query</b> (<code>Where(...)</code>, <code>yield</code> method): <code>Any()</code> ek matching item leta hai; <code>Count()</code> poori query chalata hai.</li>
<li><b>EF Core</b>: <code>Any()</code> → <code>EXISTS (...)</code>, jise database jaldi rok sakta hai; <code>Count() &gt; 0</code> → saari matching rows par <code>COUNT(*)</code>.</li>
<li><b>Collections</b> (<code>List&lt;T&gt;</code>, arrays): <code>list.Count</code>/<code>array.Length</code> stored values hain — sabse saaf aur saste. In par <code>Count()</code> bhi tez hai (yeh <code>ICollection&lt;T&gt;</code> pehchaan leta hai), par property zyada simple hai.</li>
<li><b>Analyzers</b>: CA1827 (jahan Any() kaafi ho wahan Count()), CA1829 (Count() ki jagah Count property), CA1860 (collections par Any() ki jagah Count/Length ko 0 se compare karo).</li>
</ul>
<p>Follow-up: "Count() sach mein kab chahiye?" — jab number khud chahiye (badge "5 new messages", paging totals). Tab use <b>ek baar</b> call karo aur value rakh lo.</p>
<p>Follow-up: "<code>TryGetNonEnumeratedCount</code> kya hai?" — .NET 6 ka method jo count sirf tab deta hai jab woh sasta ho (collection), lazy query ko enumerate kiye bina.</p>`
      }
    },
    {
      id: "groupby",
      depth: "short",
      q: "How does GroupBy work in LINQ? What does it return?",
      answer: "GroupBy buckets items by a key and returns IGrouping objects. Each group has a Key and is itself a sequence of its items, so you can Count or Sum per group.",
      meaning: {
        hi: "GroupBy items को key के हिसाब से buckets में डालता है और IGrouping objects का sequence return करता है। हर group के पास एक Key है और वो ख़ुद उस group के items का sequence है, इसलिए हर group पर Count या Sum कर सकते हो।",
        hg: "GroupBy items ko key ke hisaab se buckets mein daalta hai aur IGrouping objects ka sequence return karta hai. Har group ke paas ek Key hai aur woh khud us group ke items ka sequence hai, isliye har group par Count ya Sum kar sakte ho."
      },
      explain: {
        en: `<ul>
<li>Type: <code>IEnumerable&lt;IGrouping&lt;TKey, TElement&gt;&gt;</code>. Typical use: <code>sales.GroupBy(s =&gt; s.City).Select(g =&gt; new { City = g.Key, Total = g.Sum(s =&gt; s.Amount) })</code>.</li>
<li>Overloads: element selector, result selector, and an <code>IEqualityComparer&lt;TKey&gt;</code> (for example, case-insensitive city names).</li>
<li>Order in LINQ to Objects (documented): groups in order of the key's <b>first appearance</b>, items in source order.</li>
<li>Deferred but <b>buffering</b>: the first <code>MoveNext</code> reads the whole source and builds all groups.</li>
<li>Composite keys: <code>GroupBy(x =&gt; new { x.City, x.Year })</code>. "HAVING": <code>.Where(g =&gt; g.Count() &gt; 5)</code> after grouping.</li>
<li><b>ToLookup</b> is the immediate, indexable version; <b>CountBy</b>/<b>AggregateBy</b> (.NET 9) give per-key numbers without group objects.</li>
</ul>
<p>Follow-up: "What does EF Core do with GroupBy?" — <code>GroupBy</code> + aggregates (<code>Count</code>, <code>Sum</code>, <code>Max</code>) becomes SQL <code>GROUP BY</code>. Returning full groups of entities is a different story — Day 5–6.</p>`,
        hi: `<ul>
<li>Type: <code>IEnumerable&lt;IGrouping&lt;TKey, TElement&gt;&gt;</code>। आम use: <code>sales.GroupBy(s =&gt; s.City).Select(g =&gt; new { City = g.Key, Total = g.Sum(s =&gt; s.Amount) })</code>।</li>
<li>Overloads: element selector, result selector, और एक <code>IEqualityComparer&lt;TKey&gt;</code> (जैसे case-insensitive city names)।</li>
<li>LINQ to Objects में order (documented): groups key के <b>पहली बार दिखने</b> के order में, items source order में।</li>
<li>Deferred पर <b>buffering</b>: पहला <code>MoveNext</code> पूरा source पढ़कर सारे groups बनाता है।</li>
<li>Composite keys: <code>GroupBy(x =&gt; new { x.City, x.Year })</code>। "HAVING": grouping के बाद <code>.Where(g =&gt; g.Count() &gt; 5)</code>।</li>
<li><b>ToLookup</b> इसका immediate, indexable version है; <b>CountBy</b>/<b>AggregateBy</b> (.NET 9) group objects के बिना per-key numbers देते हैं।</li>
</ul>
<p>Follow-up: "EF Core GroupBy के साथ क्या करता है?" — <code>GroupBy</code> + aggregates (<code>Count</code>, <code>Sum</code>, <code>Max</code>) SQL <code>GROUP BY</code> बनता है। Entities के पूरे groups return करना अलग कहानी है — Day 5–6।</p>`,
        hg: `<ul>
<li>Type: <code>IEnumerable&lt;IGrouping&lt;TKey, TElement&gt;&gt;</code>. Aam use: <code>sales.GroupBy(s =&gt; s.City).Select(g =&gt; new { City = g.Key, Total = g.Sum(s =&gt; s.Amount) })</code>.</li>
<li>Overloads: element selector, result selector, aur ek <code>IEqualityComparer&lt;TKey&gt;</code> (jaise case-insensitive city names).</li>
<li>LINQ to Objects mein order (documented): groups key ke <b>pehli baar dikhne</b> ke order mein, items source order mein.</li>
<li>Deferred par <b>buffering</b>: pehla <code>MoveNext</code> poora source padhkar saare groups banata hai.</li>
<li>Composite keys: <code>GroupBy(x =&gt; new { x.City, x.Year })</code>. "HAVING": grouping ke baad <code>.Where(g =&gt; g.Count() &gt; 5)</code>.</li>
<li><b>ToLookup</b> iska immediate, indexable version hai; <b>CountBy</b>/<b>AggregateBy</b> (.NET 9) group objects ke bina per-key numbers dete hain.</li>
</ul>
<p>Follow-up: "EF Core GroupBy ke saath kya karta hai?" — <code>GroupBy</code> + aggregates (<code>Count</code>, <code>Sum</code>, <code>Max</code>) SQL <code>GROUP BY</code> banta hai. Entities ke poore groups return karna alag kahaani hai — Day 5–6.</p>`
      }
    },
    {
      id: "join-left-join",
      depth: "short",
      q: "How do you write an inner join and a left join in LINQ?",
      answer: "Join gives an inner join on equal keys. For a left join, use GroupJoin (join ... into) plus SelectMany with DefaultIfEmpty(). .NET 10 also adds direct LeftJoin and RightJoin operators.",
      meaning: {
        hi: "Join बराबर keys पर inner join देता है। Left join के लिए GroupJoin (join ... into) के साथ SelectMany और DefaultIfEmpty() use करो। .NET 10 में सीधे LeftJoin और RightJoin operators भी आ गए हैं।",
        hg: "Join barabar keys par inner join deta hai. Left join ke liye GroupJoin (join ... into) ke saath SelectMany aur DefaultIfEmpty() use karo. .NET 10 mein seedhe LeftJoin aur RightJoin operators bhi aa gaye hain."
      },
      explain: {
        en: `<ul>
<li><b>Inner</b>: <code>from c in customers join o in orders on c.Id equals o.CustomerId select ...</code> — or <code>customers.Join(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>. Customers without orders disappear.</li>
<li><b>Left (classic)</b>: <code>join o in orders on c.Id equals o.CustomerId into cOrders from o in cOrders.DefaultIfEmpty() select new { c.Name, OrderId = o == null ? (int?)null : o.Id }</code>. Handle the <code>null</code>.</li>
<li><b>.NET 10</b>: <code>customers.LeftJoin(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>; EF Core 10 translates it to <code>LEFT JOIN</code>. Query syntax has no keyword for it yet.</li>
<li><code>equals</code> order matters in query syntax (outer key on the left; swapping gives CS1937/CS1938). Only equality joins — other conditions need <code>from</code> + <code>where</code>.</li>
<li>LINQ to Objects <code>Join</code> uses a hash lookup of the inner sequence — roughly O(n + m).</li>
</ul>
<p>Follow-up: "In EF Core, would you write the join yourself?" — If the relationship is mapped, use navigation properties (<code>c.Orders</code>, <code>o.Customer</code>) and let EF write the joins; use explicit joins for unrelated tables.</p>`,
        hi: `<ul>
<li><b>Inner</b>: <code>from c in customers join o in orders on c.Id equals o.CustomerId select ...</code> — या <code>customers.Join(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>। बिना orders वाले customers गायब।</li>
<li><b>Left (classic)</b>: <code>join o in orders on c.Id equals o.CustomerId into cOrders from o in cOrders.DefaultIfEmpty() select new { c.Name, OrderId = o == null ? (int?)null : o.Id }</code>। <code>null</code> को संभालो।</li>
<li><b>.NET 10</b>: <code>customers.LeftJoin(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>; EF Core 10 इसे <code>LEFT JOIN</code> में translate करता है। Query syntax में इसका keyword अभी नहीं है।</li>
<li>Query syntax में <code>equals</code> का order मायने रखता है (outer key बाईं तरफ़; बदलने पर CS1937/CS1938)। सिर्फ़ equality joins — दूसरी conditions के लिए <code>from</code> + <code>where</code>।</li>
<li>LINQ to Objects का <code>Join</code> inner sequence का hash lookup use करता है — लगभग O(n + m)।</li>
</ul>
<p>Follow-up: "EF Core में join ख़ुद लिखोगे?" — अगर relationship mapped है तो navigation properties (<code>c.Orders</code>, <code>o.Customer</code>) use करो और joins EF को लिखने दो; unrelated tables के लिए explicit joins।</p>`,
        hg: `<ul>
<li><b>Inner</b>: <code>from c in customers join o in orders on c.Id equals o.CustomerId select ...</code> — ya <code>customers.Join(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>. Bina orders wale customers gaayab.</li>
<li><b>Left (classic)</b>: <code>join o in orders on c.Id equals o.CustomerId into cOrders from o in cOrders.DefaultIfEmpty() select new { c.Name, OrderId = o == null ? (int?)null : o.Id }</code>. <code>null</code> ko sambhaalo.</li>
<li><b>.NET 10</b>: <code>customers.LeftJoin(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>; EF Core 10 ise <code>LEFT JOIN</code> mein translate karta hai. Query syntax mein iska keyword abhi nahi hai.</li>
<li>Query syntax mein <code>equals</code> ka order maayne rakhta hai (outer key baayin taraf; badalne par CS1937/CS1938). Sirf equality joins — doosri conditions ke liye <code>from</code> + <code>where</code>.</li>
<li>LINQ to Objects ka <code>Join</code> inner sequence ka hash lookup use karta hai — lagbhag O(n + m).</li>
</ul>
<p>Follow-up: "EF Core mein join khud likhoge?" — agar relationship mapped hai to navigation properties (<code>c.Orders</code>, <code>o.Customer</code>) use karo aur joins EF ko likhne do; unrelated tables ke liye explicit joins.</p>`
      }
    },
    {
      id: "pagination",
      depth: "short",
      q: "How do you implement pagination with LINQ?",
      answer: "Sort by a stable, unique order, then Skip((page - 1) * size).Take(size), with a separate Count for the total. For deep pages on big tables, prefer keyset paging: WHERE Id > lastId.",
      meaning: {
        hi: "एक stable, unique order से sort करो, फिर Skip((page - 1) * size).Take(size), और total के लिए अलग Count। बड़ी tables के गहरे pages के लिए keyset paging बेहतर है: WHERE Id > lastId।",
        hg: "Ek stable, unique order se sort karo, phir Skip((page - 1) * size).Take(size), aur total ke liye alag Count. Badi tables ke gehre pages ke liye keyset paging behtar hai: WHERE Id > lastId."
      },
      explain: {
        en: `<ul>
<li><b>Order first</b>: without <code>ORDER BY</code>, a database may return rows in any order, so page 2 can repeat or skip rows from page 1. Add a unique tie-breaker: <code>OrderBy(p =&gt; p.Name).ThenBy(p =&gt; p.Id)</code>.</li>
<li><b>Offset paging</b>: <code>query.OrderBy(...).Skip((page - 1) * size).Take(size)</code>. EF Core on SQL Server → <code>OFFSET ... ROWS FETCH NEXT ... ROWS ONLY</code>.</li>
<li><b>Total</b>: <code>await query.CountAsync()</code> — a second query; total pages = <code>(total + size - 1) / size</code>. Validate <code>page &gt;= 1</code> and cap <code>size</code> (for example, 100) so a client cannot ask for a million rows.</li>
<li><b>Keyset (seek) paging</b>: <code>query.Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code>. Uses the index directly, so page 10,000 is as fast as page 1, and rows inserted meanwhile do not shift pages. Trade-off: no "jump to page N".</li>
<li>Apply <code>Skip</code>/<code>Take</code> on the <b>IQueryable</b> — not after <code>ToList()</code>.</li>
</ul>
<p>Follow-up: "Which would you choose for an infinite-scroll mobile feed?" — keyset paging (a cursor such as the last Id or last timestamp + Id). For an admin grid with page numbers, offset paging is fine.</p>`,
        hi: `<ul>
<li><b>पहले order</b>: <code>ORDER BY</code> के बिना database rows किसी भी order में दे सकता है, इसलिए page 2 में page 1 की rows दोहरा सकती हैं या छूट सकती हैं। एक unique tie-breaker जोड़ो: <code>OrderBy(p =&gt; p.Name).ThenBy(p =&gt; p.Id)</code>।</li>
<li><b>Offset paging</b>: <code>query.OrderBy(...).Skip((page - 1) * size).Take(size)</code>। SQL Server पर EF Core → <code>OFFSET ... ROWS FETCH NEXT ... ROWS ONLY</code>।</li>
<li><b>Total</b>: <code>await query.CountAsync()</code> — एक दूसरी query; total pages = <code>(total + size - 1) / size</code>। <code>page &gt;= 1</code> validate करो और <code>size</code> पर limit लगाओ (जैसे 100), ताकि client दस लाख rows न माँग सके।</li>
<li><b>Keyset (seek) paging</b>: <code>query.Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code>। सीधे index use करता है, इसलिए page 10,000 भी page 1 जितना तेज़, और बीच में insert हुई rows pages को खिसकाती नहीं। Trade-off: "page N पर jump" नहीं।</li>
<li><code>Skip</code>/<code>Take</code> <b>IQueryable</b> पर लगाओ — <code>ToList()</code> के बाद नहीं।</li>
</ul>
<p>Follow-up: "Infinite-scroll mobile feed के लिए क्या चुनोगे?" — keyset paging (cursor जैसे last Id या last timestamp + Id)। Page numbers वाले admin grid के लिए offset paging ठीक है।</p>`,
        hg: `<ul>
<li><b>Pehle order</b>: <code>ORDER BY</code> ke bina database rows kisi bhi order mein de sakta hai, isliye page 2 mein page 1 ki rows dohra sakti hain ya chhoot sakti hain. Ek unique tie-breaker jodo: <code>OrderBy(p =&gt; p.Name).ThenBy(p =&gt; p.Id)</code>.</li>
<li><b>Offset paging</b>: <code>query.OrderBy(...).Skip((page - 1) * size).Take(size)</code>. SQL Server par EF Core → <code>OFFSET ... ROWS FETCH NEXT ... ROWS ONLY</code>.</li>
<li><b>Total</b>: <code>await query.CountAsync()</code> — ek doosri query; total pages = <code>(total + size - 1) / size</code>. <code>page &gt;= 1</code> validate karo aur <code>size</code> par limit lagao (jaise 100), taaki client das laakh rows na maang sake.</li>
<li><b>Keyset (seek) paging</b>: <code>query.Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code>. Seedhe index use karta hai, isliye page 10,000 bhi page 1 jitna tez, aur beech mein insert hui rows pages ko khiskaati nahi. Trade-off: "page N par jump" nahi.</li>
<li><code>Skip</code>/<code>Take</code> <b>IQueryable</b> par lagao — <code>ToList()</code> ke baad nahi.</li>
</ul>
<p>Follow-up: "Infinite-scroll mobile feed ke liye kya chunoge?" — keyset paging (cursor jaise last Id ya last timestamp + Id). Page numbers wale admin grid ke liye offset paging theek hai.</p>`
      }
    },
    {
      id: "multiple-enumeration",
      depth: "detailed",
      q: "What is multiple enumeration of an IEnumerable, and why is it a problem?",
      answer: "Enumerating the same lazy sequence more than once re-runs the whole query each time — extra CPU, repeated database or I/O calls, and possibly different results. Materialize it once, or accept IReadOnlyCollection.",
      meaning: {
        hi: "एक ही lazy sequence को एक से ज़्यादा बार enumerate करने पर हर बार पूरी query फिर से चलती है — extra CPU, बार-बार database या I/O calls, और शायद अलग results। इसे एक बार materialize करो, या IReadOnlyCollection लो।",
        hg: "Ek hi lazy sequence ko ek se zyada baar enumerate karne par har baar poori query phir se chalti hai — extra CPU, baar-baar database ya I/O calls, aur shayad alag results. Ise ek baar materialize karo, ya IReadOnlyCollection lo."
      },
      explain: {
        en: `<ul>
<li>Typical code: <code>void Send(IEnumerable&lt;User&gt; users) { if (!users.Any()) return; log(users.Count()); foreach (var u in users) ... }</code> — three enumerations. If <code>users</code> is an EF query, that is three SQL queries.</li>
<li>Results can differ between runs (data changed, or lambdas with <code>Guid.NewGuid()</code>/<code>DateTime.Now</code>/random).</li>
<li><b>Fix 1</b>: materialize once — <code>var list = users.ToList();</code> — and use <code>list.Count</code>.</li>
<li><b>Fix 2</b>: change the parameter to <code>IReadOnlyCollection&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> when the method needs a count or several passes — the type tells callers "give me a real collection".</li>
<li><b>Fix 3</b>: restructure into one pass (count while looping).</li>
<li>Detection: CA1851 (enable it in <code>.editorconfig</code>), Rider/ReSharper warnings, and code review.</li>
</ul>
<p>Follow-up: "So should every method call ToList() on its input?" — No. Copying "just in case" wastes memory and hides the real contract. Decide at the boundary and express it in the parameter type.</p>`,
        hi: `<ul>
<li>आम code: <code>void Send(IEnumerable&lt;User&gt; users) { if (!users.Any()) return; log(users.Count()); foreach (var u in users) ... }</code> — तीन enumerations। अगर <code>users</code> EF query है, तो तीन SQL queries।</li>
<li>Runs के बीच results अलग हो सकते हैं (data बदल गया, या <code>Guid.NewGuid()</code>/<code>DateTime.Now</code>/random वाले lambdas)।</li>
<li><b>Fix 1</b>: एक बार materialize करो — <code>var list = users.ToList();</code> — और <code>list.Count</code> use करो।</li>
<li><b>Fix 2</b>: जब method को count या कई passes चाहिए, तो parameter को <code>IReadOnlyCollection&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> बना दो — type ख़ुद callers को बताता है "मुझे असली collection दो"।</li>
<li><b>Fix 3</b>: code को एक pass में बदलो (loop करते-करते गिनो)।</li>
<li>पकड़ना: CA1851 (<code>.editorconfig</code> में enable करो), Rider/ReSharper warnings, और code review।</li>
</ul>
<p>Follow-up: "तो क्या हर method अपने input पर ToList() call करे?" — नहीं। "Just in case" copy करना memory बर्बाद करता है और असली contract छुपाता है। Boundary पर तय करो और parameter type में लिखो।</p>`,
        hg: `<ul>
<li>Aam code: <code>void Send(IEnumerable&lt;User&gt; users) { if (!users.Any()) return; log(users.Count()); foreach (var u in users) ... }</code> — teen enumerations. Agar <code>users</code> EF query hai, to teen SQL queries.</li>
<li>Runs ke beech results alag ho sakte hain (data badal gaya, ya <code>Guid.NewGuid()</code>/<code>DateTime.Now</code>/random wale lambdas).</li>
<li><b>Fix 1</b>: ek baar materialize karo — <code>var list = users.ToList();</code> — aur <code>list.Count</code> use karo.</li>
<li><b>Fix 2</b>: jab method ko count ya kai passes chahiye, to parameter ko <code>IReadOnlyCollection&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> bana do — type khud callers ko batata hai "mujhe asli collection do".</li>
<li><b>Fix 3</b>: code ko ek pass mein badlo (loop karte-karte gino).</li>
<li>Pakadna: CA1851 (<code>.editorconfig</code> mein enable karo), Rider/ReSharper warnings, aur code review.</li>
</ul>
<p>Follow-up: "To kya har method apne input par ToList() call kare?" — Nahi. "Just in case" copy karna memory barbaad karta hai aur asli contract chhupata hai. Boundary par tay karo aur parameter type mein likho.</p>`
      }
    },
    {
      id: "tolist-placement",
      depth: "detailed",
      q: "When should you call ToList()? What goes wrong if you call it too early or too late?",
      answer: "Call it once, after all filtering, sorting and paging, and before you need the data more than once or after its source is gone. Too early loads too much; too late re-runs or fails.",
      meaning: {
        hi: "इसे एक बार call करो — सारी filtering, sorting और paging के बाद, और data को एक से ज़्यादा बार चाहने या source ख़त्म होने से पहले। बहुत जल्दी = ज़रूरत से ज़्यादा load; बहुत देर = query दोबारा चलती है या fail होती है।",
        hg: "Ise ek baar call karo — saari filtering, sorting aur paging ke baad, aur data ko ek se zyada baar chahne ya source khatam hone se pehle. Bahut jaldi = zaroorat se zyada load; bahut der = query dobara chalti hai ya fail hoti hai."
      },
      explain: {
        en: `<ul>
<li><b>Too early</b>: <code>db.Orders.ToList().Where(o =&gt; o.Status == "Paid").Take(20)</code> loads the <b>whole table</b> into memory, then filters. Correct: <code>db.Orders.Where(...).OrderBy(...).Take(20).ToList()</code>.</li>
<li><b>Too early, in memory</b>: <code>ToList()</code> after every step copies the data again and again for no reason.</li>
<li><b>Too late</b>: a method returns <code>IEnumerable&lt;Order&gt;</code> built on a <code>DbContext</code> that is disposed when the method ends; the caller enumerates later → "Cannot access a disposed context instance". Or the same deferred query is enumerated in three places → three runs.</li>
<li><b>Never</b> can be right: streaming a big export row by row with <code>foreach</code> (or <code>IAsyncEnumerable</code> with <code>AsAsyncEnumerable()</code> in EF Core) keeps memory flat.</li>
<li><code>ToList()</code> vs <code>ToArray()</code>: both copy; choose by what the consumer needs (a growable list or a fixed array). The difference is rarely important.</li>
</ul>
<p>Follow-up: "What does a repository usually return?" — a materialized <code>List</code>/<code>IReadOnlyList</code> of DTOs, built with <code>ToListAsync()</code> at the end of the query.</p>`,
        hi: `<ul>
<li><b>बहुत जल्दी</b>: <code>db.Orders.ToList().Where(o =&gt; o.Status == "Paid").Take(20)</code> <b>पूरी table</b> memory में load करता है, फिर filter। सही: <code>db.Orders.Where(...).OrderBy(...).Take(20).ToList()</code>।</li>
<li><b>बहुत जल्दी, memory में</b>: हर step के बाद <code>ToList()</code> बिना वजह data बार-बार copy करता है।</li>
<li><b>बहुत देर</b>: कोई method ऐसे <code>DbContext</code> पर बना <code>IEnumerable&lt;Order&gt;</code> return करता है जो method ख़त्म होते ही dispose हो जाता है; caller बाद में enumerate करता है → "Cannot access a disposed context instance"। या वही deferred query तीन जगह enumerate होती है → तीन बार चलती है।</li>
<li><b>कभी नहीं</b> भी सही हो सकता है: बड़ा export <code>foreach</code> से row by row stream करना (या EF Core में <code>AsAsyncEnumerable()</code> के साथ <code>IAsyncEnumerable</code>) memory को flat रखता है।</li>
<li><code>ToList()</code> बनाम <code>ToArray()</code>: दोनों copy करते हैं; consumer को जो चाहिए वो चुनो (बढ़ने वाली list या fixed array)। फ़र्क शायद ही मायने रखता है।</li>
</ul>
<p>Follow-up: "Repository आमतौर पर क्या return करती है?" — DTOs की materialized <code>List</code>/<code>IReadOnlyList</code>, जो query के आख़िर में <code>ToListAsync()</code> से बनती है।</p>`,
        hg: `<ul>
<li><b>Bahut jaldi</b>: <code>db.Orders.ToList().Where(o =&gt; o.Status == "Paid").Take(20)</code> <b>poori table</b> memory mein load karta hai, phir filter. Sahi: <code>db.Orders.Where(...).OrderBy(...).Take(20).ToList()</code>.</li>
<li><b>Bahut jaldi, memory mein</b>: har step ke baad <code>ToList()</code> bina wajah data baar-baar copy karta hai.</li>
<li><b>Bahut der</b>: koi method aise <code>DbContext</code> par bana <code>IEnumerable&lt;Order&gt;</code> return karta hai jo method khatam hote hi dispose ho jaata hai; caller baad mein enumerate karta hai → "Cannot access a disposed context instance". Ya wahi deferred query teen jagah enumerate hoti hai → teen baar chalti hai.</li>
<li><b>Kabhi nahi</b> bhi sahi ho sakta hai: bada export <code>foreach</code> se row by row stream karna (ya EF Core mein <code>AsAsyncEnumerable()</code> ke saath <code>IAsyncEnumerable</code>) memory ko flat rakhta hai.</li>
<li><code>ToList()</code> vs <code>ToArray()</code>: dono copy karte hain; consumer ko jo chahiye woh chuno (badhne wali list ya fixed array). Farq shayad hi maayne rakhta hai.</li>
</ul>
<p>Follow-up: "Repository aamtaur par kya return karti hai?" — DTOs ki materialized <code>List</code>/<code>IReadOnlyList</code>, jo query ke aakhir mein <code>ToListAsync()</code> se banti hai.</p>`
      }
    },
    {
      id: "query-vs-method-syntax",
      depth: "detailed",
      q: "Query syntax or method syntax — is there a difference, and which do you prefer?",
      answer: "No runtime difference: the compiler turns query syntax into the same method calls. Method syntax covers every operator; query syntax reads better for joins, multiple from clauses and let. Teams usually pick one style.",
      meaning: {
        hi: "Runtime पर कोई फ़र्क नहीं: compiler query syntax को उन्हीं method calls में बदल देता है। Method syntax में हर operator है; joins, कई from clauses और let के लिए query syntax ज़्यादा पढ़ने लायक है। Teams आमतौर पर एक style चुनती हैं।",
        hg: "Runtime par koi farq nahi: compiler query syntax ko unhi method calls mein badal deta hai. Method syntax mein har operator hai; joins, kai from clauses aur let ke liye query syntax zyada padhne laayak hai. Teams aamtaur par ek style chunti hain."
      },
      explain: {
        en: `<ul>
<li><code>from p in products where p.Price &gt; 100 select p.Name</code> → <code>products.Where(p =&gt; p.Price &gt; 100).Select(p =&gt; p.Name)</code>. Same IL, same speed.</li>
<li><b>Only method syntax</b>: <code>Count</code>, <code>First</code>, <code>Any</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>ToList</code>, <code>MinBy</code>... Mix is fine: <code>(from ... select ...).ToList()</code>.</li>
<li><b>Query syntax shines</b> with <code>join ... into</code> (left joins), several <code>from</code> clauses (SelectMany), and <code>let</code> (an intermediate value: <code>let total = o.Lines.Sum(l =&gt; l.Price)</code>), which in method syntax needs an extra <code>Select</code> to an anonymous type.</li>
<li>Query syntax works with any type that has the right methods (<code>Where</code>, <code>Select</code>, <code>SelectMany</code>...) — it is a compiler pattern, not tied to <code>IEnumerable</code>.</li>
</ul>
<p><b>TL angle:</b> be consistent within a codebase; method syntax is more common in modern .NET code and in EF Core samples. A good answer shows you can read and write both.</p>`,
        hi: `<ul>
<li><code>from p in products where p.Price &gt; 100 select p.Name</code> → <code>products.Where(p =&gt; p.Price &gt; 100).Select(p =&gt; p.Name)</code>। वही IL, वही speed।</li>
<li><b>सिर्फ़ method syntax</b>: <code>Count</code>, <code>First</code>, <code>Any</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>ToList</code>, <code>MinBy</code>... Mix करना ठीक है: <code>(from ... select ...).ToList()</code>।</li>
<li><b>Query syntax चमकता है</b> <code>join ... into</code> (left joins), कई <code>from</code> clauses (SelectMany), और <code>let</code> के साथ (बीच की value: <code>let total = o.Lines.Sum(l =&gt; l.Price)</code>), जिसके लिए method syntax में anonymous type वाला एक extra <code>Select</code> लगता है।</li>
<li>Query syntax किसी भी type के साथ चलता है जिसमें सही methods (<code>Where</code>, <code>Select</code>, <code>SelectMany</code>...) हों — यह compiler का pattern है, <code>IEnumerable</code> से बँधा नहीं।</li>
</ul>
<p><b>TL angle:</b> एक codebase में consistent रहो; modern .NET code और EF Core samples में method syntax ज़्यादा common है। अच्छा जवाब दिखाता है कि आप दोनों पढ़ और लिख सकते हो।</p>`,
        hg: `<ul>
<li><code>from p in products where p.Price &gt; 100 select p.Name</code> → <code>products.Where(p =&gt; p.Price &gt; 100).Select(p =&gt; p.Name)</code>. Wahi IL, wahi speed.</li>
<li><b>Sirf method syntax</b>: <code>Count</code>, <code>First</code>, <code>Any</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>ToList</code>, <code>MinBy</code>... Mix karna theek hai: <code>(from ... select ...).ToList()</code>.</li>
<li><b>Query syntax chamakta hai</b> <code>join ... into</code> (left joins), kai <code>from</code> clauses (SelectMany), aur <code>let</code> ke saath (beech ki value: <code>let total = o.Lines.Sum(l =&gt; l.Price)</code>), jiske liye method syntax mein anonymous type wala ek extra <code>Select</code> lagta hai.</li>
<li>Query syntax kisi bhi type ke saath chalta hai jismein sahi methods (<code>Where</code>, <code>Select</code>, <code>SelectMany</code>...) hon — yeh compiler ka pattern hai, <code>IEnumerable</code> se bandha nahi.</li>
</ul>
<p><b>TL angle:</b> ek codebase mein consistent raho; modern .NET code aur EF Core samples mein method syntax zyada common hai. Achha jawaab dikhata hai ki aap dono padh aur likh sakte ho.</p>`
      }
    },
    {
      id: "how-deferred-works",
      depth: "detailed",
      q: "How is deferred execution implemented under the hood?",
      answer: "LINQ operators are iterators: they return an object holding the source and the lambda. Each MoveNext pulls the next item, applies the lambda and yields it — like a yield return method.",
      meaning: {
        hi: "LINQ operators iterators हैं: ये एक object return करते हैं जो source और lambda याद रखता है। हर MoveNext source से अगला item खींचता है, lambda लगाता है और result yield करता है — yield return वाले method की तरह।",
        hg: "LINQ operators iterators hain: yeh ek object return karte hain jo source aur lambda yaad rakhta hai. Har MoveNext source se agla item kheenchta hai, lambda lagata hai aur result yield karta hai — yield return wale method ki tarah."
      },
      explain: {
        en: `<ul>
<li>A method with <code>yield return</code> is compiled into a <b>state machine</b> class. Calling the method only creates that object; the body starts running on the first <code>MoveNext()</code> and pauses at each <code>yield return</code>.</li>
<li><code>Where</code> conceptually is: <code>foreach (var x in source) if (predicate(x)) yield return x;</code>. Chain several and each <code>MoveNext</code> on the last one pulls through the whole chain — that is why items flow one by one.</li>
<li>The real implementation adds special classes for arrays and lists, and merges common chains (for example <code>Where</code> + <code>Select</code>) into one iterator for speed. Behaviour stays the same.</li>
<li><b>Argument checks are eager</b>: real LINQ validates <code>null</code> arguments in a normal method and then returns the iterator, so <code>ArgumentNullException</code> appears at the call. In your own iterator methods, do the same: a public non-iterator method that validates, calling a private iterator.</li>
</ul>
<p>Follow-up: "What about IQueryable?" — different mechanism: operators add nodes to an expression tree; the provider executes the whole tree on enumeration.</p>`,
        hi: `<ul>
<li><code>yield return</code> वाला method एक <b>state machine</b> class में compile होता है। Method call करने से सिर्फ़ वो object बनता है; body पहले <code>MoveNext()</code> पर चलना शुरू होती है और हर <code>yield return</code> पर रुकती है।</li>
<li><code>Where</code> समझने के लिए बस इतना है: <code>foreach (var x in source) if (predicate(x)) yield return x;</code>। कई जोड़ दो, तो आख़िरी वाले पर हर <code>MoveNext</code> पूरी chain से item खींचता है — इसीलिए items एक-एक करके बहते हैं।</li>
<li>असली implementation arrays और lists के लिए special classes जोड़ता है, और speed के लिए common chains (जैसे <code>Where</code> + <code>Select</code>) को एक iterator में मिला देता है। Behaviour वही रहता है।</li>
<li><b>Argument checks तुरंत होते हैं</b>: असली LINQ <code>null</code> arguments को एक normal method में validate करता है और फिर iterator return करता है, इसलिए <code>ArgumentNullException</code> call पर ही आता है। अपने iterator methods में भी यही करो: एक public non-iterator method जो validate करे, और एक private iterator को call करे।</li>
</ul>
<p>Follow-up: "IQueryable का क्या?" — अलग mechanism: operators एक expression tree में nodes जोड़ते हैं; enumeration पर provider पूरा tree चलाता है।</p>`,
        hg: `<ul>
<li><code>yield return</code> wala method ek <b>state machine</b> class mein compile hota hai. Method call karne se sirf woh object banta hai; body pehle <code>MoveNext()</code> par chalna shuru hoti hai aur har <code>yield return</code> par rukti hai.</li>
<li><code>Where</code> samajhne ke liye bas itna hai: <code>foreach (var x in source) if (predicate(x)) yield return x;</code>. Kai jod do, to aakhri wale par har <code>MoveNext</code> poori chain se item kheenchta hai — isiliye items ek-ek karke behte hain.</li>
<li>Asli implementation arrays aur lists ke liye special classes jodta hai, aur speed ke liye common chains (jaise <code>Where</code> + <code>Select</code>) ko ek iterator mein mila deta hai. Behaviour wahi rehta hai.</li>
<li><b>Argument checks turant hote hain</b>: asli LINQ <code>null</code> arguments ko ek normal method mein validate karta hai aur phir iterator return karta hai, isliye <code>ArgumentNullException</code> call par hi aata hai. Apne iterator methods mein bhi yahi karo: ek public non-iterator method jo validate kare, aur ek private iterator ko call kare.</li>
</ul>
<p>Follow-up: "IQueryable ka kya?" — alag mechanism: operators ek expression tree mein nodes jodte hain; enumeration par provider poora tree chalata hai.</p>`
      },
      code: [{
        caption: {
          en: "A hand-written Where with yield return: nothing runs at the call; the body starts on the first MoveNext and pauses at each yield",
          hi: "yield return से हाथ से लिखा Where: call पर कुछ नहीं चलता; body पहले MoveNext पर शुरू होती है और हर yield पर रुकती है",
          hg: "yield return se haath se likha Where: call par kuch nahi chalta; body pehle MoveNext par shuru hoti hai aur har yield par rukti hai"
        },
        check: "run",
        expected: "Created\nMyWhere starts\n  checking 1\n  checking 2\nGot 2\n  checking 3\n  checking 4\nGot 4",
        src: `int[] numbers = [1, 2, 3, 4];
var evens = MyWhere(numbers, n => n % 2 == 0);
Console.WriteLine("Created");

foreach (var n in evens)
    Console.WriteLine($"Got {n}");

static IEnumerable<T> MyWhere<T>(IEnumerable<T> source, Func<T, bool> predicate)
{
    Console.WriteLine("MyWhere starts");      // runs on the first MoveNext, not at the call
    foreach (var item in source)
    {
        Console.WriteLine($"  checking {item}");
        if (predicate(item))
            yield return item;                // hand one item to the caller and pause here
    }
}`
      }]
    },
    {
      id: "func-vs-expression",
      depth: "detailed",
      q: "Why does IQueryable take Expression&lt;Func&lt;T,bool&gt;&gt; while IEnumerable takes Func&lt;T,bool&gt;?",
      answer: "A Func is compiled code that can only run. An Expression is the same lambda as data, which a provider can read and translate — for example into a SQL WHERE clause.",
      meaning: {
        hi: "Func compiled code है जो सिर्फ़ चल सकता है। Expression वही lambda है data के रूप में, जिसे provider पढ़कर translate कर सकता है — जैसे SQL WHERE clause में।",
        hg: "Func compiled code hai jo sirf chal sakta hai. Expression wahi lambda hai data ke roop mein, jise provider padhkar translate kar sakta hai — jaise SQL WHERE clause mein."
      },
      explain: {
        en: `<ul>
<li>The compiler decides by the <b>target type</b>: assign <code>x =&gt; x.Age &gt; 18</code> to <code>Func&lt;User,bool&gt;</code> → IL code; to <code>Expression&lt;Func&lt;User,bool&gt;&gt;</code> → code that builds a tree (<code>Lambda(GreaterThan(Member(x, Age), Constant(18)))</code>).</li>
<li>An expression tree can be walked by a visitor and turned into SQL, a REST query, a search query... It can also be compiled to a delegate with <code>.Compile()</code>.</li>
<li>Limits: only expression-bodied lambdas (statement bodies → CS0834); and the provider must understand every method you call inside — your own C# helper usually cannot be translated.</li>
<li><b>Trap</b>: passing a <code>Func</code> variable to <code>Where</code> on an <code>IQueryable</code> silently picks <code>Enumerable.Where</code> → the whole table is loaded.</li>
</ul>
<p>Follow-up: "Where else are expression trees used?" — EF Core, OData, mapping libraries, strongly typed config like <code>builder.Property(x =&gt; x.Name)</code>, and validation libraries that read property names from <code>x =&gt; x.Email</code>.</p>`,
        hi: `<ul>
<li>Compiler <b>target type</b> से तय करता है: <code>x =&gt; x.Age &gt; 18</code> को <code>Func&lt;User,bool&gt;</code> में रखो → IL code; <code>Expression&lt;Func&lt;User,bool&gt;&gt;</code> में रखो → ऐसा code जो एक tree बनाता है (<code>Lambda(GreaterThan(Member(x, Age), Constant(18)))</code>)।</li>
<li>Expression tree पर visitor चलाकर उसे SQL, REST query, search query... में बदला जा सकता है। <code>.Compile()</code> से उसे delegate में भी compile कर सकते हो।</li>
<li>Limits: सिर्फ़ expression-bodied lambdas (statement bodies → CS0834); और अंदर call किया हर method provider को समझ आना चाहिए — आपका अपना C# helper आमतौर पर translate नहीं होता।</li>
<li><b>Trap</b>: <code>IQueryable</code> पर <code>Where</code> को <code>Func</code> variable देने से चुपचाप <code>Enumerable.Where</code> चुना जाता है → पूरी table load होती है।</li>
</ul>
<p>Follow-up: "Expression trees और कहाँ use होते हैं?" — EF Core, OData, mapping libraries, <code>builder.Property(x =&gt; x.Name)</code> जैसी strongly typed config, और validation libraries जो <code>x =&gt; x.Email</code> से property names पढ़ती हैं।</p>`,
        hg: `<ul>
<li>Compiler <b>target type</b> se tay karta hai: <code>x =&gt; x.Age &gt; 18</code> ko <code>Func&lt;User,bool&gt;</code> mein rakho → IL code; <code>Expression&lt;Func&lt;User,bool&gt;&gt;</code> mein rakho → aisa code jo ek tree banata hai (<code>Lambda(GreaterThan(Member(x, Age), Constant(18)))</code>).</li>
<li>Expression tree par visitor chalakar use SQL, REST query, search query... mein badla ja sakta hai. <code>.Compile()</code> se use delegate mein bhi compile kar sakte ho.</li>
<li>Limits: sirf expression-bodied lambdas (statement bodies → CS0834); aur andar call kiya har method provider ko samajh aana chahiye — aapka apna C# helper aamtaur par translate nahi hota.</li>
<li><b>Trap</b>: <code>IQueryable</code> par <code>Where</code> ko <code>Func</code> variable dene se chupchaap <code>Enumerable.Where</code> chuna jaata hai → poori table load hoti hai.</li>
</ul>
<p>Follow-up: "Expression trees aur kahan use hote hain?" — EF Core, OData, mapping libraries, <code>builder.Property(x =&gt; x.Name)</code> jaisi strongly typed config, aur validation libraries jo <code>x =&gt; x.Email</code> se property names padhti hain.</p>`
      }
    },
    {
      id: "repository-iqueryable",
      depth: "detailed",
      q: "Should a repository or service return IQueryable or IEnumerable?",
      answer: "It is a trade-off. IQueryable is flexible but leaks query building and EF Core rules to every caller. Most teams return lists or DTOs from purpose-built methods and keep IQueryable in the data layer.",
      meaning: {
        hi: "यह एक trade-off है। IQueryable flexible है, पर query बनाना और EF Core के rules हर caller तक पहुँच जाते हैं। ज़्यादातर teams ख़ास मकसद वाले methods से lists या DTOs return करती हैं और IQueryable को data layer में रखती हैं।",
        hg: "Yeh ek trade-off hai. IQueryable flexible hai, par query banana aur EF Core ke rules har caller tak pahunch jaate hain. Zyadatar teams khaas maqsad wale methods se lists ya DTOs return karti hain aur IQueryable ko data layer mein rakhti hain."
      },
      explain: {
        en: `<ul>
<li><b>For returning IQueryable</b>: callers can add filters, sorting, paging and projections that still run in SQL; fewer repository methods.</li>
<li><b>Against</b>: the query can be built anywhere (controllers, UI), so performance problems (N+1, missing indexes, huge results) appear far from the data code; "could not be translated" errors appear at runtime in other layers; testing with in-memory <code>IQueryable</code> behaves differently from SQL; the <code>DbContext</code> lifetime must outlive the query.</li>
<li><b>Returning <code>IEnumerable&lt;T&gt;</code> that is secretly a deferred EF query</b> is the worst of both: it looks safe but runs late, maybe twice, maybe after the context is gone.</li>
<li><b>Common middle ground</b>: methods like <code>GetActiveOrdersAsync(customerId, page, size)</code> returning <code>IReadOnlyList&lt;OrderDto&gt;</code>; or the <b>specification pattern</b> (filters as <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code>) inside the data layer. Many teams also use <code>DbContext</code> directly in a thin application layer instead of a generic repository.</li>
</ul>
<p><b>TL angle:</b> there is no single right answer — say what your team chose, why, and what rule you enforce in reviews (for example, "no IQueryable outside Infrastructure").</p>`,
        hi: `<ul>
<li><b>IQueryable return करने के पक्ष में</b>: callers filters, sorting, paging और projections जोड़ सकते हैं जो फिर भी SQL में चलते हैं; repository methods कम।</li>
<li><b>विपक्ष में</b>: query कहीं भी बन सकती है (controllers, UI), इसलिए performance problems (N+1, missing indexes, बहुत बड़े results) data code से दूर दिखते हैं; "could not be translated" errors दूसरी layers में runtime पर आते हैं; in-memory <code>IQueryable</code> के साथ testing SQL से अलग behave करती है; <code>DbContext</code> की lifetime query से लंबी होनी चाहिए।</li>
<li><b>ऐसा <code>IEnumerable&lt;T&gt;</code> return करना जो अंदर से deferred EF query है</b> दोनों का सबसे बुरा है: safe दिखता है पर देर से चलता है, शायद दो बार, शायद context ख़त्म होने के बाद।</li>
<li><b>आम बीच का रास्ता</b>: <code>GetActiveOrdersAsync(customerId, page, size)</code> जैसे methods जो <code>IReadOnlyList&lt;OrderDto&gt;</code> return करें; या data layer के अंदर <b>specification pattern</b> (filters <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> के रूप में)। कई teams generic repository की जगह पतली application layer में सीधे <code>DbContext</code> use करती हैं।</li>
</ul>
<p><b>TL angle:</b> एक ही सही जवाब नहीं है — बताओ आपकी team ने क्या चुना, क्यों, और reviews में कौन सा rule लागू करते हो (जैसे "Infrastructure के बाहर IQueryable नहीं")।</p>`,
        hg: `<ul>
<li><b>IQueryable return karne ke paksh mein</b>: callers filters, sorting, paging aur projections jod sakte hain jo phir bhi SQL mein chalte hain; repository methods kam.</li>
<li><b>Vipaksh mein</b>: query kahin bhi ban sakti hai (controllers, UI), isliye performance problems (N+1, missing indexes, bahut bade results) data code se door dikhte hain; "could not be translated" errors doosri layers mein runtime par aate hain; in-memory <code>IQueryable</code> ke saath testing SQL se alag behave karti hai; <code>DbContext</code> ki lifetime query se lambi honi chahiye.</li>
<li><b>Aisa <code>IEnumerable&lt;T&gt;</code> return karna jo andar se deferred EF query hai</b> dono ka sabse bura hai: safe dikhta hai par der se chalta hai, shayad do baar, shayad context khatam hone ke baad.</li>
<li><b>Aam beech ka raasta</b>: <code>GetActiveOrdersAsync(customerId, page, size)</code> jaise methods jo <code>IReadOnlyList&lt;OrderDto&gt;</code> return karein; ya data layer ke andar <b>specification pattern</b> (filters <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> ke roop mein). Kai teams generic repository ki jagah patli application layer mein seedhe <code>DbContext</code> use karti hain.</li>
</ul>
<p><b>TL angle:</b> ek hi sahi jawaab nahi hai — batao aapki team ne kya chuna, kyon, aur reviews mein kaun sa rule laagu karte ho (jaise "Infrastructure ke bahar IQueryable nahi").</p>`
      }
    },
    {
      id: "asenumerable-vs-tolist",
      depth: "detailed",
      q: "What is the difference between AsEnumerable(), ToList() and AsQueryable()?",
      answer: "AsEnumerable() only changes the static type, so later operators run in memory, still lazily. ToList() runs the query now and copies results. AsQueryable() wraps a sequence as IQueryable, mainly for tests.",
      meaning: {
        hi: "AsEnumerable() सिर्फ़ static type बदलता है, इसलिए बाद के operators memory में चलते हैं, फिर भी lazily। ToList() query अभी चलाकर results copy करता है। AsQueryable() किसी sequence को IQueryable में wrap करता है — मुख्य रूप से tests के लिए।",
        hg: "AsEnumerable() sirf static type badalta hai, isliye baad ke operators memory mein chalte hain, phir bhi lazily. ToList() query abhi chalakar results copy karta hai. AsQueryable() kisi sequence ko IQueryable mein wrap karta hai — mukhya roop se tests ke liye."
      },
      explain: {
        en: `<ul>
<li><code>db.Orders.Where(o =&gt; o.Year == 2025).AsEnumerable().Where(o =&gt; MyCustomRule(o))</code>: the first <code>Where</code> goes to SQL; the second runs in C# on rows as they stream in. Nothing runs until you enumerate.</li>
<li><code>ToList()</code> at the same point would run the SQL immediately and hold all rows in a list before the second filter.</li>
<li>Use <code>AsEnumerable()</code> as the deliberate "switch to C#" point for logic SQL cannot do; use <code>ToList()</code> when you need a snapshot or several passes.</li>
<li><code>AsQueryable()</code> on a <code>List</code> gives an in-memory provider (<code>EnumerableQuery</code>) that compiles the expression tree back to delegates. It does not make anything faster, and it accepts code that a real database provider would reject — so tests with it can pass while production fails.</li>
</ul>
<p>Follow-up: "And <code>AsAsyncEnumerable()</code>?" — EF Core's way to stream results asynchronously with <code>await foreach</code> (Day 3 covered <code>IAsyncEnumerable</code>).</p>`,
        hi: `<ul>
<li><code>db.Orders.Where(o =&gt; o.Year == 2025).AsEnumerable().Where(o =&gt; MyCustomRule(o))</code>: पहला <code>Where</code> SQL में जाता है; दूसरा C# में चलता है, rows के stream होकर आते-आते। Enumerate करने तक कुछ नहीं चलता।</li>
<li>उसी जगह <code>ToList()</code> होता तो SQL तुरंत चलता और दूसरे filter से पहले सारी rows एक list में रखता।</li>
<li><code>AsEnumerable()</code> को सोच-समझकर "C# पर switch" वाले point की तरह use करो, उस logic के लिए जो SQL नहीं कर सकता; snapshot या कई passes चाहिए तो <code>ToList()</code>।</li>
<li><code>List</code> पर <code>AsQueryable()</code> एक in-memory provider (<code>EnumerableQuery</code>) देता है जो expression tree को वापस delegates में compile करता है। इससे कुछ तेज़ नहीं होता, और यह ऐसा code भी मान लेता है जिसे असली database provider reject करता — इसलिए इसके साथ tests pass हो सकते हैं और production fail।</li>
</ul>
<p>Follow-up: "और <code>AsAsyncEnumerable()</code>?" — EF Core का तरीका जिससे results <code>await foreach</code> के साथ asynchronously stream होते हैं (<code>IAsyncEnumerable</code> Day 3 में देखा था)।</p>`,
        hg: `<ul>
<li><code>db.Orders.Where(o =&gt; o.Year == 2025).AsEnumerable().Where(o =&gt; MyCustomRule(o))</code>: pehla <code>Where</code> SQL mein jaata hai; doosra C# mein chalta hai, rows ke stream hokar aate-aate. Enumerate karne tak kuch nahi chalta.</li>
<li>Usi jagah <code>ToList()</code> hota to SQL turant chalta aur doosre filter se pehle saari rows ek list mein rakhta.</li>
<li><code>AsEnumerable()</code> ko soch-samajhkar "C# par switch" wale point ki tarah use karo, us logic ke liye jo SQL nahi kar sakta; snapshot ya kai passes chahiye to <code>ToList()</code>.</li>
<li><code>List</code> par <code>AsQueryable()</code> ek in-memory provider (<code>EnumerableQuery</code>) deta hai jo expression tree ko wapas delegates mein compile karta hai. Isse kuch tez nahi hota, aur yeh aisa code bhi maan leta hai jise asli database provider reject karta — isliye iske saath tests pass ho sakte hain aur production fail.</li>
</ul>
<p>Follow-up: "Aur <code>AsAsyncEnumerable()</code>?" — EF Core ka tareeka jisse results <code>await foreach</code> ke saath asynchronously stream hote hain (<code>IAsyncEnumerable</code> Day 3 mein dekha tha).</p>`
      }
    },
    {
      id: "orderby-thenby",
      depth: "detailed",
      q: "What is the difference between OrderBy and ThenBy? Is LINQ sorting stable?",
      answer: "OrderBy sets the primary sort key; ThenBy adds tie-breakers within equal primary keys. Calling OrderBy twice replaces the primary key. LINQ to Objects OrderBy is stable — equal keys keep their original order.",
      meaning: {
        hi: "OrderBy primary sort key तय करता है; ThenBy बराबर primary keys के अंदर tie-breakers जोड़ता है। OrderBy दो बार लगाने से primary key बदल जाती है। LINQ to Objects का OrderBy stable है — बराबर keys अपना original order रखती हैं।",
        hg: "OrderBy primary sort key tay karta hai; ThenBy barabar primary keys ke andar tie-breakers jodta hai. OrderBy do baar lagane se primary key badal jaati hai. LINQ to Objects ka OrderBy stable hai — barabar keys apna original order rakhti hain."
      },
      explain: {
        en: `<ul>
<li><code>OrderBy(x =&gt; x.City).ThenBy(x =&gt; x.Name)</code> = SQL <code>ORDER BY City, Name</code>.</li>
<li><code>OrderBy(x =&gt; x.City).OrderBy(x =&gt; x.Name)</code> = sorted by <b>Name</b>. In memory, the earlier City order survives only as a hidden tie-breaker (because the sort is stable); a database provider may ignore it. Either way it is not what the author meant.</li>
<li><b>Stable</b>: documented for <code>Enumerable.OrderBy</code>. <code>List&lt;T&gt;.Sort</code>/<code>Array.Sort</code> are unstable (introsort) — equal items may swap.</li>
<li>Sorting is O(n log n) and buffers all items. For one min/max item in memory, <code>MinBy</code>/<code>MaxBy</code> say what you mean (modern .NET already runs <code>OrderBy(...).First()</code> as one pass, so this is about readability); in an EF Core query, use <code>OrderBy(...).First()</code>.</li>
<li>Strings: pass a comparer when culture matters: <code>OrderBy(x =&gt; x.Name, StringComparer.OrdinalIgnoreCase)</code>.</li>
</ul>
<p>Follow-up: "Does a database promise any order without ORDER BY?" — No. Even if rows "usually" come back in Id order, it can change with plans, parallelism or indexes.</p>`,
        hi: `<ul>
<li><code>OrderBy(x =&gt; x.City).ThenBy(x =&gt; x.Name)</code> = SQL <code>ORDER BY City, Name</code>।</li>
<li><code>OrderBy(x =&gt; x.City).OrderBy(x =&gt; x.Name)</code> = <b>Name</b> से sorted। Memory में पहले वाला City order सिर्फ़ छुपे tie-breaker की तरह बचता है (क्योंकि sort stable है); database provider उसे ignore कर सकता है। दोनों ही तरह लिखने वाले का इरादा यह नहीं था।</li>
<li><b>Stable</b>: <code>Enumerable.OrderBy</code> के लिए documented है। <code>List&lt;T&gt;.Sort</code>/<code>Array.Sort</code> unstable हैं (introsort) — बराबर items जगह बदल सकते हैं।</li>
<li>Sorting O(n log n) है और सारे items buffer करता है। Memory में एक min/max item के लिए <code>MinBy</code>/<code>MaxBy</code> इरादा साफ़ बताते हैं (modern .NET <code>OrderBy(...).First()</code> को पहले से एक pass में चलाता है, इसलिए बात readability की है); EF Core query में <code>OrderBy(...).First()</code> use करो।</li>
<li>Strings: जब culture मायने रखे तो comparer दो: <code>OrderBy(x =&gt; x.Name, StringComparer.OrdinalIgnoreCase)</code>।</li>
</ul>
<p>Follow-up: "क्या ORDER BY के बिना database किसी order का वादा करता है?" — नहीं। Rows "आमतौर पर" Id order में आती दिखें, तब भी plans, parallelism या indexes से यह बदल सकता है।</p>`,
        hg: `<ul>
<li><code>OrderBy(x =&gt; x.City).ThenBy(x =&gt; x.Name)</code> = SQL <code>ORDER BY City, Name</code>.</li>
<li><code>OrderBy(x =&gt; x.City).OrderBy(x =&gt; x.Name)</code> = <b>Name</b> se sorted. Memory mein pehle wala City order sirf chhupe tie-breaker ki tarah bachta hai (kyonki sort stable hai); database provider use ignore kar sakta hai. Dono hi tarah likhne wale ka iraada yeh nahi tha.</li>
<li><b>Stable</b>: <code>Enumerable.OrderBy</code> ke liye documented hai. <code>List&lt;T&gt;.Sort</code>/<code>Array.Sort</code> unstable hain (introsort) — barabar items jagah badal sakte hain.</li>
<li>Sorting O(n log n) hai aur saare items buffer karta hai. Memory mein ek min/max item ke liye <code>MinBy</code>/<code>MaxBy</code> iraada saaf batate hain (modern .NET <code>OrderBy(...).First()</code> ko pehle se ek pass mein chalata hai, isliye baat readability ki hai); EF Core query mein <code>OrderBy(...).First()</code> use karo.</li>
<li>Strings: jab culture maayne rakhe to comparer do: <code>OrderBy(x =&gt; x.Name, StringComparer.OrdinalIgnoreCase)</code>.</li>
</ul>
<p>Follow-up: "Kya ORDER BY ke bina database kisi order ka waada karta hai?" — Nahi. Rows "aamtaur par" Id order mein aati dikhein, tab bhi plans, parallelism ya indexes se yeh badal sakta hai.</p>`
      }
    },
    {
      id: "groupby-vs-tolookup",
      depth: "detailed",
      q: "What is the difference between GroupBy and ToLookup?",
      answer: "GroupBy is deferred: it groups when enumerated, and again on every enumeration. ToLookup runs immediately and returns an ILookup you can index by key; a missing key gives an empty sequence, not an exception.",
      meaning: {
        hi: "GroupBy deferred है: enumerate होने पर group करता है, और हर enumeration पर फिर से। ToLookup तुरंत चलता है और ILookup return करता है जिसे key से index कर सकते हो; missing key पर खाली sequence मिलता है, exception नहीं।",
        hg: "GroupBy deferred hai: enumerate hone par group karta hai, aur har enumeration par phir se. ToLookup turant chalta hai aur ILookup return karta hai jise key se index kar sakte ho; missing key par khaali sequence milta hai, exception nahi."
      },
      explain: {
        en: `<ul>
<li><b>GroupBy</b>: <code>IEnumerable&lt;IGrouping&lt;K,T&gt;&gt;</code>; sees source changes made before enumeration; regroups every time you enumerate it. On <code>IQueryable</code> it can become SQL <code>GROUP BY</code>.</li>
<li><b>ToLookup</b>: <code>ILookup&lt;K,T&gt;</code>; a snapshot built once; <code>lookup[key]</code> returns the items or an <b>empty</b> sequence; <code>lookup.Contains(key)</code>; <code>lookup.Count</code> = number of keys. Immutable — you cannot add to it. LINQ to Objects only (it materializes).</li>
<li><b>vs Dictionary&lt;K, List&lt;T&gt;&gt;</b>: a dictionary throws <code>KeyNotFoundException</code> for a missing key and is mutable; a lookup is read-only and forgiving.</li>
<li>Typical use of ToLookup: load parents and children in two queries, then <code>var linesByOrder = lines.ToLookup(l =&gt; l.OrderId);</code> and attach <code>linesByOrder[order.Id]</code> to each order — O(1) per parent instead of a <code>Where</code> per parent.</li>
</ul>`,
        hi: `<ul>
<li><b>GroupBy</b>: <code>IEnumerable&lt;IGrouping&lt;K,T&gt;&gt;</code>; enumeration से पहले हुए source changes देखता है; हर बार enumerate करने पर फिर से group करता है। <code>IQueryable</code> पर यह SQL <code>GROUP BY</code> बन सकता है।</li>
<li><b>ToLookup</b>: <code>ILookup&lt;K,T&gt;</code>; एक बार बना snapshot; <code>lookup[key]</code> items या <b>खाली</b> sequence देता है; <code>lookup.Contains(key)</code>; <code>lookup.Count</code> = keys की संख्या। Immutable — इसमें कुछ जोड़ नहीं सकते। सिर्फ़ LINQ to Objects (यह materialize करता है)।</li>
<li><b>Dictionary&lt;K, List&lt;T&gt;&gt; से तुलना</b>: dictionary missing key पर <code>KeyNotFoundException</code> throw करती है और mutable है; lookup read-only है और माफ़ कर देता है।</li>
<li>ToLookup का आम use: parents और children दो queries में load करो, फिर <code>var linesByOrder = lines.ToLookup(l =&gt; l.OrderId);</code> और हर order से <code>linesByOrder[order.Id]</code> जोड़ो — हर parent के लिए एक <code>Where</code> की जगह O(1)।</li>
</ul>`,
        hg: `<ul>
<li><b>GroupBy</b>: <code>IEnumerable&lt;IGrouping&lt;K,T&gt;&gt;</code>; enumeration se pehle hue source changes dekhta hai; har baar enumerate karne par phir se group karta hai. <code>IQueryable</code> par yeh SQL <code>GROUP BY</code> ban sakta hai.</li>
<li><b>ToLookup</b>: <code>ILookup&lt;K,T&gt;</code>; ek baar bana snapshot; <code>lookup[key]</code> items ya <b>khaali</b> sequence deta hai; <code>lookup.Contains(key)</code>; <code>lookup.Count</code> = keys ki sankhya. Immutable — ismein kuch jod nahi sakte. Sirf LINQ to Objects (yeh materialize karta hai).</li>
<li><b>Dictionary&lt;K, List&lt;T&gt;&gt; se tulna</b>: dictionary missing key par <code>KeyNotFoundException</code> throw karti hai aur mutable hai; lookup read-only hai aur maaf kar deta hai.</li>
<li>ToLookup ka aam use: parents aur children do queries mein load karo, phir <code>var linesByOrder = lines.ToLookup(l =&gt; l.OrderId);</code> aur har order se <code>linesByOrder[order.Id]</code> jodo — har parent ke liye ek <code>Where</code> ki jagah O(1).</li>
</ul>`
      }
    },
    {
      id: "distinct-distinctby",
      depth: "detailed",
      q: "How does Distinct decide that two items are equal? When do you use DistinctBy?",
      answer: "Distinct uses Equals and GetHashCode — value equality for records and primitives, reference equality for ordinary classes — or a comparer you pass. DistinctBy (.NET 6) keeps the first item for each key you choose.",
      meaning: {
        hi: "Distinct, Equals और GetHashCode use करता है — records और primitives के लिए value equality, आम classes के लिए reference equality — या आपका दिया comparer। DistinctBy (.NET 6) आपकी चुनी हर key का पहला item रखता है।",
        hg: "Distinct, Equals aur GetHashCode use karta hai — records aur primitives ke liye value equality, aam classes ke liye reference equality — ya aapka diya comparer. DistinctBy (.NET 6) aapki chuni har key ka pehla item rakhta hai."
      },
      explain: {
        en: `<ul>
<li>Classic bug: <code>customers.Distinct()</code> on a <code>class Customer</code> with no equality members removes only <b>same-instance</b> duplicates — two objects with the same data stay, because they are different references.</li>
<li>Fixes: make it a <code>record</code> (value equality on all properties), override <code>Equals</code>/<code>GetHashCode</code>, pass an <code>IEqualityComparer&lt;T&gt;</code>, or use <b><code>DistinctBy(c =&gt; c.Email)</code></b>.</li>
<li>Strings: <code>Distinct(StringComparer.OrdinalIgnoreCase)</code> for case-insensitive uniqueness.</li>
<li>Same idea for <code>Union</code>/<code>Intersect</code>/<code>Except</code> and their <code>...By</code> versions (.NET 6), <code>GroupBy</code>, <code>ToHashSet</code>, <code>ToDictionary</code>.</li>
<li>Order: the docs call the result unordered, so sort it when order matters.</li>
<li>EF Core: <code>Distinct()</code> becomes SQL <code>DISTINCT</code> over the selected columns — project to the columns you care about first.</li>
</ul>`,
        hi: `<ul>
<li>Classic bug: बिना equality members वाली <code>class Customer</code> पर <code>customers.Distinct()</code> सिर्फ़ <b>same-instance</b> duplicates हटाता है — एक जैसे data वाले दो objects रह जाते हैं, क्योंकि वो अलग references हैं।</li>
<li>Fixes: उसे <code>record</code> बना दो (सारी properties पर value equality), <code>Equals</code>/<code>GetHashCode</code> override करो, <code>IEqualityComparer&lt;T&gt;</code> pass करो, या <b><code>DistinctBy(c =&gt; c.Email)</code></b> use करो।</li>
<li>Strings: case-insensitive uniqueness के लिए <code>Distinct(StringComparer.OrdinalIgnoreCase)</code>।</li>
<li>यही बात <code>Union</code>/<code>Intersect</code>/<code>Except</code> और उनके <code>...By</code> versions (.NET 6), <code>GroupBy</code>, <code>ToHashSet</code>, <code>ToDictionary</code> पर भी लागू है।</li>
<li>Order: docs result को unordered कहते हैं, इसलिए जब order मायने रखे तो sort करो।</li>
<li>EF Core: <code>Distinct()</code> selected columns पर SQL <code>DISTINCT</code> बनता है — पहले उन columns में project करो जो आपको चाहिए।</li>
</ul>`,
        hg: `<ul>
<li>Classic bug: bina equality members wali <code>class Customer</code> par <code>customers.Distinct()</code> sirf <b>same-instance</b> duplicates hataata hai — ek jaise data wale do objects reh jaate hain, kyonki woh alag references hain.</li>
<li>Fixes: use <code>record</code> bana do (saari properties par value equality), <code>Equals</code>/<code>GetHashCode</code> override karo, <code>IEqualityComparer&lt;T&gt;</code> pass karo, ya <b><code>DistinctBy(c =&gt; c.Email)</code></b> use karo.</li>
<li>Strings: case-insensitive uniqueness ke liye <code>Distinct(StringComparer.OrdinalIgnoreCase)</code>.</li>
<li>Yahi baat <code>Union</code>/<code>Intersect</code>/<code>Except</code> aur unke <code>...By</code> versions (.NET 6), <code>GroupBy</code>, <code>ToHashSet</code>, <code>ToDictionary</code> par bhi laagu hai.</li>
<li>Order: docs result ko unordered kehte hain, isliye jab order maayne rakhe to sort karo.</li>
<li>EF Core: <code>Distinct()</code> selected columns par SQL <code>DISTINCT</code> banta hai — pehle un columns mein project karo jo aapko chahiye.</li>
</ul>`
      }
    },
    {
      id: "captured-variable",
      depth: "detailed",
      q: "A LINQ lambda uses a local variable, and the variable changes before the query runs. Which value is used?",
      answer: "The value at execution time. The lambda captures the variable itself, not a copy of its value, and a deferred query reads it only when enumerated. Materialize first, or copy the value, to freeze it.",
      meaning: {
        hi: "Execution के समय वाली value। Lambda variable को ही capture करता है, उसकी value की copy नहीं, और deferred query उसे सिर्फ़ enumerate होने पर पढ़ती है। Value fix करनी है तो पहले materialize करो, या value copy करो।",
        hg: "Execution ke samay wali value. Lambda variable ko hi capture karta hai, uski value ki copy nahi, aur deferred query use sirf enumerate hone par padhti hai. Value fix karni hai to pehle materialize karo, ya value copy karo."
      },
      explain: {
        en: `<ul>
<li><code>int limit = 100; var q = prices.Where(p =&gt; p &gt; limit); limit = 200;</code> → enumerating <code>q</code> uses <b>200</b>. The compiler moved <code>limit</code> into a closure object shared by the method and the lambda (Day 2).</li>
<li>Each enumeration reads the <b>current</b> value, so the same query can give different results at different times.</li>
<li>To freeze: <code>ToList()</code> right away, or copy into a new local that never changes (<code>var fixedLimit = limit;</code>).</li>
<li>Loop trap: building queries in a loop that capture the loop variable. <code>foreach</code> gets a fresh variable per iteration (since C# 5), but a <code>for (int i...)</code> variable is <b>shared</b> — all queries see its final value.</li>
<li>EF Core: captured variables become <b>SQL parameters</b> (<code>@limit</code>), read when the query executes — which is also why EF Core can reuse the query plan.</li>
</ul>`,
        hi: `<ul>
<li><code>int limit = 100; var q = prices.Where(p =&gt; p &gt; limit); limit = 200;</code> → <code>q</code> enumerate करने पर <b>200</b> use होता है। Compiler ने <code>limit</code> को एक closure object में डाल दिया जो method और lambda दोनों share करते हैं (Day 2)।</li>
<li>हर enumeration <b>current</b> value पढ़ता है, इसलिए वही query अलग-अलग समय पर अलग results दे सकती है।</li>
<li>Freeze करने के लिए: तुरंत <code>ToList()</code>, या value को एक नए local में copy करो जो कभी न बदले (<code>var fixedLimit = limit;</code>)।</li>
<li>Loop trap: loop में queries बनाना जो loop variable capture करें। <code>foreach</code> को हर iteration में नया variable मिलता है (C# 5 से), पर <code>for (int i...)</code> का variable <b>shared</b> है — सारी queries उसकी आख़िरी value देखती हैं।</li>
<li>EF Core: captured variables <b>SQL parameters</b> (<code>@limit</code>) बनते हैं, जो query execute होने पर पढ़े जाते हैं — इसी वजह से EF Core query plan दोबारा use कर पाता है।</li>
</ul>`,
        hg: `<ul>
<li><code>int limit = 100; var q = prices.Where(p =&gt; p &gt; limit); limit = 200;</code> → <code>q</code> enumerate karne par <b>200</b> use hota hai. Compiler ne <code>limit</code> ko ek closure object mein daal diya jo method aur lambda dono share karte hain (Day 2).</li>
<li>Har enumeration <b>current</b> value padhta hai, isliye wahi query alag-alag samay par alag results de sakti hai.</li>
<li>Freeze karne ke liye: turant <code>ToList()</code>, ya value ko ek naye local mein copy karo jo kabhi na badle (<code>var fixedLimit = limit;</code>).</li>
<li>Loop trap: loop mein queries banana jo loop variable capture karein. <code>foreach</code> ko har iteration mein naya variable milta hai (C# 5 se), par <code>for (int i...)</code> ka variable <b>shared</b> hai — saari queries uski aakhri value dekhti hain.</li>
<li>EF Core: captured variables <b>SQL parameters</b> (<code>@limit</code>) bante hain, jo query execute hone par padhe jaate hain — isi wajah se EF Core query plan dobara use kar paata hai.</li>
</ul>`
      }
    },
    {
      id: "linq-performance",
      depth: "detailed",
      q: "Is LINQ slow? When would you write a plain loop instead?",
      answer: "LINQ to Objects adds small costs — delegate calls, iterator and closure allocations — that rarely matter next to I/O. Use LINQ by default; switch to loops in hot paths a profiler shows.",
      meaning: {
        hi: "LINQ to Objects छोटे ख़र्च जोड़ता है — delegate calls, iterator और closure allocations — जो I/O के सामने शायद ही मायने रखते हैं। Default में LINQ use करो; loops पर उन hot paths में जाओ जो profiler दिखाए।",
        hg: "LINQ to Objects chhote kharche jodta hai — delegate calls, iterator aur closure allocations — jo I/O ke saamne shayad hi maayne rakhte hain. Default mein LINQ use karo; loops par un hot paths mein jao jo profiler dikhaaye."
      },
      explain: {
        en: `<ul>
<li><b>Costs</b>: one delegate call per item per operator; one iterator object per operator; closures when lambdas capture locals; interface-based enumeration (a <code>foreach</code> over a <code>List&lt;T&gt;</code> uses a struct enumerator with no allocation, LINQ goes through <code>IEnumerable&lt;T&gt;</code>).</li>
<li><b>Bigger wins usually come from elsewhere</b>: one SQL query instead of N, a dictionary instead of a nested search, not loading columns you do not need.</li>
<li><b>Loop is better</b> when: the code is a measured hot path (runs millions of times); you need several aggregates in one pass; you need complex early exit or mutation; or you are in an allocation-sensitive area (game loops, high-throughput parsers).</li>
<li>Measure with <b>BenchmarkDotNet</b> (with <code>[MemoryDiagnoser]</code> for allocations) — not with a stopwatch in a debug build.</li>
</ul>
<p><b>TL angle:</b> set the team rule as "readable LINQ by default, loops in measured hot paths with a comment", so reviews are about evidence, not taste.</p>`,
        hi: `<ul>
<li><b>ख़र्च</b>: हर operator पर हर item का एक delegate call; हर operator का एक iterator object; lambdas जब locals capture करें तो closures; interface के ज़रिए enumeration (<code>List&lt;T&gt;</code> पर <code>foreach</code> एक struct enumerator use करता है जिसमें allocation नहीं, LINQ <code>IEnumerable&lt;T&gt;</code> से होकर जाता है)।</li>
<li><b>बड़े फ़ायदे आमतौर पर कहीं और से आते हैं</b>: N की जगह एक SQL query, nested search की जगह dictionary, जो columns नहीं चाहिए उन्हें load न करना।</li>
<li><b>Loop बेहतर है</b> जब: code एक measured hot path हो (लाखों बार चले); एक pass में कई aggregates चाहिए; complex early exit या mutation चाहिए; या आप allocation-sensitive जगह पर हो (game loops, high-throughput parsers)।</li>
<li><b>BenchmarkDotNet</b> से measure करो (allocations के लिए <code>[MemoryDiagnoser]</code> के साथ) — debug build में stopwatch से नहीं।</li>
</ul>
<p><b>TL angle:</b> team का rule ऐसा रखो: "default में readable LINQ, measured hot paths में comment के साथ loops", ताकि reviews पसंद पर नहीं, सबूत पर हों।</p>`,
        hg: `<ul>
<li><b>Kharche</b>: har operator par har item ka ek delegate call; har operator ka ek iterator object; lambdas jab locals capture karein to closures; interface ke zariye enumeration (<code>List&lt;T&gt;</code> par <code>foreach</code> ek struct enumerator use karta hai jismein allocation nahi, LINQ <code>IEnumerable&lt;T&gt;</code> se hokar jaata hai).</li>
<li><b>Bade fayde aamtaur par kahin aur se aate hain</b>: N ki jagah ek SQL query, nested search ki jagah dictionary, jo columns nahi chahiye unhe load na karna.</li>
<li><b>Loop behtar hai</b> jab: code ek measured hot path ho (laakhon baar chale); ek pass mein kai aggregates chahiye; complex early exit ya mutation chahiye; ya aap allocation-sensitive jagah par ho (game loops, high-throughput parsers).</li>
<li><b>BenchmarkDotNet</b> se measure karo (allocations ke liye <code>[MemoryDiagnoser]</code> ke saath) — debug build mein stopwatch se nahi.</li>
</ul>
<p><b>TL angle:</b> team ka rule aisa rakho: "default mein readable LINQ, measured hot paths mein comment ke saath loops", taaki reviews pasand par nahi, saboot par hon.</p>`
      }
    },
    {
      id: "linq-code-review",
      depth: "detailed",
      q: "As a Tech Lead, what LINQ problems do you look for in code review?",
      answer: "Multiple enumeration of IEnumerable, Count() instead of Any() or the Count property, ToList() before filtering an IQueryable, lookups with First or Where inside loops, side effects in Select, and OrderBy used twice.",
      meaning: {
        hi: "IEnumerable का multiple enumeration, Any() या Count property की जगह Count(), IQueryable को filter करने से पहले ToList(), loops के अंदर First या Where से lookups, Select में side effects, और दो बार OrderBy।",
        hg: "IEnumerable ka multiple enumeration, Any() ya Count property ki jagah Count(), IQueryable ko filter karne se pehle ToList(), loops ke andar First ya Where se lookups, Select mein side effects, aur do baar OrderBy."
      },
      explain: {
        en: `<ul>
<li><b>Correctness</b>: <code>Single</code> on non-unique data; <code>FirstOrDefault()</code> result used without a null check; <code>First()</code> without <code>OrderBy</code> when a specific row is meant; <code>OrderBy</code>.<code>OrderBy</code> instead of <code>ThenBy</code>; paging without a deterministic order; <code>Distinct()</code> on classes without equality.</li>
<li><b>Hidden cost</b>: multiple enumeration (CA1851); <code>Count()</code> in loop conditions; <code>ElementAt(i)</code> on lazy sequences; <code>Where</code>/<code>First</code> inside a loop (use <code>ToDictionary</code>/<code>ToLookup</code>); <code>Count() &gt; 0</code> (CA1827); <code>Count()</code> on lists (CA1829).</li>
<li><b>EF Core boundary</b>: <code>ToList()</code>/<code>AsEnumerable()</code> too early or too late (details in the <code>ToList()</code> Q&amp;A); <code>Func</code> filters on repositories; deferred queries returned after the <code>DbContext</code> is gone; missing <code>Select</code> projection (loading whole entities for two fields).</li>
<li><b>Readability</b>: very long chains — split into named variables; side effects inside <code>Select</code>/<code>Where</code> — move to <code>foreach</code>.</li>
<li>Automate what you can: enable analyzers (CA1827, CA1829, CA1851, CA1860) in <code>.editorconfig</code>, then review for design.</li>
</ul>`,
        hi: `<ul>
<li><b>Correctness</b>: non-unique data पर <code>Single</code>; बिना null check के <code>FirstOrDefault()</code> का result use करना; जब कोई ख़ास row चाहिए तब <code>OrderBy</code> के बिना <code>First()</code>; <code>ThenBy</code> की जगह <code>OrderBy</code>.<code>OrderBy</code>; deterministic order के बिना paging; बिना equality वाली classes पर <code>Distinct()</code>।</li>
<li><b>छुपा हुआ ख़र्च</b>: multiple enumeration (CA1851); loop conditions में <code>Count()</code>; lazy sequences पर <code>ElementAt(i)</code>; loop के अंदर <code>Where</code>/<code>First</code> (<code>ToDictionary</code>/<code>ToLookup</code> use करो); <code>Count() &gt; 0</code> (CA1827); lists पर <code>Count()</code> (CA1829)।</li>
<li><b>EF Core boundary</b>: बहुत जल्दी या बहुत देर से <code>ToList()</code>/<code>AsEnumerable()</code> (details <code>ToList()</code> वाले Q&amp;A में); repositories पर <code>Func</code> filters; <code>DbContext</code> ख़त्म होने के बाद return हुई deferred queries; <code>Select</code> projection न होना (दो fields के लिए पूरी entities load करना)।</li>
<li><b>Readability</b>: बहुत लंबी chains — named variables में तोड़ो; <code>Select</code>/<code>Where</code> के अंदर side effects — <code>foreach</code> में ले जाओ।</li>
<li>जो automate हो सके करो: <code>.editorconfig</code> में analyzers (CA1827, CA1829, CA1851, CA1860) enable करो, फिर review design के लिए करो।</li>
</ul>`,
        hg: `<ul>
<li><b>Correctness</b>: non-unique data par <code>Single</code>; bina null check ke <code>FirstOrDefault()</code> ka result use karna; jab koi khaas row chahiye tab <code>OrderBy</code> ke bina <code>First()</code>; <code>ThenBy</code> ki jagah <code>OrderBy</code>.<code>OrderBy</code>; deterministic order ke bina paging; bina equality wali classes par <code>Distinct()</code>.</li>
<li><b>Chhupa hua kharcha</b>: multiple enumeration (CA1851); loop conditions mein <code>Count()</code>; lazy sequences par <code>ElementAt(i)</code>; loop ke andar <code>Where</code>/<code>First</code> (<code>ToDictionary</code>/<code>ToLookup</code> use karo); <code>Count() &gt; 0</code> (CA1827); lists par <code>Count()</code> (CA1829).</li>
<li><b>EF Core boundary</b>: bahut jaldi ya bahut der se <code>ToList()</code>/<code>AsEnumerable()</code> (details <code>ToList()</code> wale Q&amp;A mein); repositories par <code>Func</code> filters; <code>DbContext</code> khatam hone ke baad return hui deferred queries; <code>Select</code> projection na hona (do fields ke liye poori entities load karna).</li>
<li><b>Readability</b>: bahut lambi chains — named variables mein todo; <code>Select</code>/<code>Where</code> ke andar side effects — <code>foreach</code> mein le jao.</li>
<li>Jo automate ho sake karo: <code>.editorconfig</code> mein analyzers (CA1827, CA1829, CA1851, CA1860) enable karo, phir review design ke liye karo.</li>
</ul>`
      }
    },
    {
      id: "linq-new-operators",
      depth: "detailed",
      q: "Which newer LINQ operators from .NET 6 to .NET 10 do you use?",
      answer: ".NET 6 added DistinctBy, MinBy/MaxBy, Chunk and default-value overloads; .NET 7 added Order(); .NET 9 added CountBy, AggregateBy and Index(); .NET 10 added LeftJoin and RightJoin.",
      meaning: {
        hi: ".NET 6 में DistinctBy, MinBy/MaxBy, Chunk और default-value overloads आए; .NET 7 में Order(); .NET 9 में CountBy, AggregateBy और Index(); .NET 10 में LeftJoin और RightJoin।",
        hg: ".NET 6 mein DistinctBy, MinBy/MaxBy, Chunk aur default-value overloads aaye; .NET 7 mein Order(); .NET 9 mein CountBy, AggregateBy aur Index(); .NET 10 mein LeftJoin aur RightJoin."
      },
      explain: {
        en: `<ul>
<li><b>.NET 6</b>: <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; <code>FirstOrDefault</code>/<code>LastOrDefault</code>/<code>SingleOrDefault</code> with a default value; <code>Take(range)</code> such as <code>Take(2..5)</code>; <code>TryGetNonEnumeratedCount</code>; <code>Zip</code> with three sequences.</li>
<li><b>.NET 7</b>: <code>Order()</code> and <code>OrderDescending()</code> for sorting simple values.</li>
<li><b>.NET 9</b>: <code>CountBy</code>, <code>AggregateBy</code> (per-key counts/totals without <code>GroupBy</code> objects), <code>Index()</code> (<code>(Index, Item)</code> tuples).</li>
<li><b>.NET 10</b>: <code>LeftJoin</code>, <code>RightJoin</code> (EF Core 10 translates them); <code>System.Linq.AsyncEnumerable</code> brings LINQ for <code>IAsyncEnumerable&lt;T&gt;</code> into the base library (Day 3).</li>
</ul>
<p>Why mention them: they replace common hand-written helpers (<code>GroupBy(...).Select(g =&gt; g.First())</code> → <code>DistinctBy</code>, in-memory <code>OrderBy(...).First()</code> → <code>MinBy</code>), which states the intent more clearly.</p>`,
        hi: `<ul>
<li><b>.NET 6</b>: <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; default value के साथ <code>FirstOrDefault</code>/<code>LastOrDefault</code>/<code>SingleOrDefault</code>; <code>Take(range)</code> जैसे <code>Take(2..5)</code>; <code>TryGetNonEnumeratedCount</code>; तीन sequences वाला <code>Zip</code>।</li>
<li><b>.NET 7</b>: simple values sort करने के लिए <code>Order()</code> और <code>OrderDescending()</code>।</li>
<li><b>.NET 9</b>: <code>CountBy</code>, <code>AggregateBy</code> (<code>GroupBy</code> objects के बिना per-key counts/totals), <code>Index()</code> (<code>(Index, Item)</code> tuples)।</li>
<li><b>.NET 10</b>: <code>LeftJoin</code>, <code>RightJoin</code> (EF Core 10 इन्हें translate करता है); <code>System.Linq.AsyncEnumerable</code> से <code>IAsyncEnumerable&lt;T&gt;</code> के लिए LINQ base library में आ गया (Day 3)।</li>
</ul>
<p>इनका ज़िक्र क्यों: ये आम हाथ से लिखे helpers की जगह लेते हैं (<code>GroupBy(...).Select(g =&gt; g.First())</code> → <code>DistinctBy</code>, in-memory <code>OrderBy(...).First()</code> → <code>MinBy</code>), जिससे इरादा ज़्यादा साफ़ दिखता है।</p>`,
        hg: `<ul>
<li><b>.NET 6</b>: <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; default value ke saath <code>FirstOrDefault</code>/<code>LastOrDefault</code>/<code>SingleOrDefault</code>; <code>Take(range)</code> jaise <code>Take(2..5)</code>; <code>TryGetNonEnumeratedCount</code>; teen sequences wala <code>Zip</code>.</li>
<li><b>.NET 7</b>: simple values sort karne ke liye <code>Order()</code> aur <code>OrderDescending()</code>.</li>
<li><b>.NET 9</b>: <code>CountBy</code>, <code>AggregateBy</code> (<code>GroupBy</code> objects ke bina per-key counts/totals), <code>Index()</code> (<code>(Index, Item)</code> tuples).</li>
<li><b>.NET 10</b>: <code>LeftJoin</code>, <code>RightJoin</code> (EF Core 10 inhe translate karta hai); <code>System.Linq.AsyncEnumerable</code> se <code>IAsyncEnumerable&lt;T&gt;</code> ke liye LINQ base library mein aa gaya (Day 3).</li>
</ul>
<p>Inka zikr kyon: yeh aam haath se likhe helpers ki jagah lete hain (<code>GroupBy(...).Select(g =&gt; g.First())</code> → <code>DistinctBy</code>, in-memory <code>OrderBy(...).First()</code> → <code>MinBy</code>), jisse iraada zyada saaf dikhta hai.</p>`
      }
    },
  ],
  puzzles: [
    {
      id: "captured-variable",
      src: `int[] prices = [50, 120, 300, 80];
int limit = 100;

var expensive = prices.Where(p => p > limit);

limit = 200;
Console.WriteLine(string.Join(", ", expensive));

limit = 0;
Console.WriteLine(expensive.Count());`,
      answer: "300\n4",
      explain: {
        en: `<ul>
<li>Line 4 only <b>builds</b> the query. The lambda captures the <b>variable</b> <code>limit</code>, not the value 100.</li>
<li>When <code>string.Join</code> enumerates, <code>limit</code> is already <b>200</b> → only <b>300</b> passes.</li>
<li><code>Count()</code> runs the query <b>again</b>, now with <code>limit = 0</code> → all <b>4</b> prices pass.</li>
<li>Lesson: a deferred query reads captured variables <b>when it runs</b>, and it runs on every enumeration. To freeze the result, call <code>ToList()</code> right after building it.</li>
</ul>`,
        hi: `<ul>
<li>Line 4 सिर्फ़ query <b>बनाती</b> है। Lambda <code>limit</code> <b>variable</b> को capture करता है, value 100 को नहीं।</li>
<li>जब <code>string.Join</code> enumerate करता है, तब तक <code>limit</code> <b>200</b> हो चुका है → सिर्फ़ <b>300</b> pass होता है।</li>
<li><code>Count()</code> query को <b>फिर से</b> चलाता है, अब <code>limit = 0</code> के साथ → चारों prices pass → <b>4</b>।</li>
<li>सीख: deferred query captured variables को <b>चलते समय</b> पढ़ती है, और हर enumeration पर चलती है। Result fix करना है तो query बनाते ही <code>ToList()</code> call करो।</li>
</ul>`,
        hg: `<ul>
<li>Line 4 sirf query <b>banati</b> hai. Lambda <code>limit</code> <b>variable</b> ko capture karta hai, value 100 ko nahi.</li>
<li>Jab <code>string.Join</code> enumerate karta hai, tab tak <code>limit</code> <b>200</b> ho chuka hai → sirf <b>300</b> pass hota hai.</li>
<li><code>Count()</code> query ko <b>phir se</b> chalata hai, ab <code>limit = 0</code> ke saath → chaaron prices pass → <b>4</b>.</li>
<li>Seekh: deferred query captured variables ko <b>chalte samay</b> padhti hai, aur har enumeration par chalti hai. Result fix karna hai to query banate hi <code>ToList()</code> call karo.</li>
</ul>`
      }
    },
    {
      id: "any-then-count",
      src: `int[] orders = [120, 40, 300];

var big = orders.Where(o =>
{
    Console.WriteLine($"check {o}");
    return o > 100;
});
Console.WriteLine("query ready");

if (big.Any())
    Console.WriteLine($"count = {big.Count()}");`,
      answer: "query ready\ncheck 120\ncheck 120\ncheck 40\ncheck 300\ncount = 2",
      explain: {
        en: `<ul>
<li>Building <code>big</code> prints nothing — <b>"query ready"</b> comes first.</li>
<li><code>Any()</code> enumerates and <b>stops at the first match</b>: it checks 120 (a match) and is done → one <b>check 120</b>.</li>
<li><code>Count()</code> enumerates <b>again from the start</b> and visits every item → <b>check 120, check 40, check 300</b>, then <b>count = 2</b>.</li>
<li>Lesson: <code>Any()</code> short-circuits, <code>Count()</code> does not — and using both on a lazy query is <b>multiple enumeration</b>. With EF Core that would be two SQL queries. Materialize once if you need both.</li>
</ul>`,
        hi: `<ul>
<li><code>big</code> बनाने से कुछ print नहीं होता — पहले <b>"query ready"</b> आता है।</li>
<li><code>Any()</code> enumerate करता है और <b>पहले match पर रुक जाता है</b>: 120 check करता है (match) और बस → एक <b>check 120</b>।</li>
<li><code>Count()</code> <b>फिर से शुरू से</b> enumerate करता है और हर item देखता है → <b>check 120, check 40, check 300</b>, फिर <b>count = 2</b>।</li>
<li>सीख: <code>Any()</code> short-circuit करता है, <code>Count()</code> नहीं — और lazy query पर दोनों use करना <b>multiple enumeration</b> है। EF Core में यह दो SQL queries होतीं। दोनों चाहिए तो एक बार materialize करो।</li>
</ul>`,
        hg: `<ul>
<li><code>big</code> banane se kuch print nahi hota — pehle <b>"query ready"</b> aata hai.</li>
<li><code>Any()</code> enumerate karta hai aur <b>pehle match par ruk jaata hai</b>: 120 check karta hai (match) aur bas → ek <b>check 120</b>.</li>
<li><code>Count()</code> <b>phir se shuru se</b> enumerate karta hai aur har item dekhta hai → <b>check 120, check 40, check 300</b>, phir <b>count = 2</b>.</li>
<li>Seekh: <code>Any()</code> short-circuit karta hai, <code>Count()</code> nahi — aur lazy query par dono use karna <b>multiple enumeration</b> hai. EF Core mein yeh do SQL queries hotin. Dono chahiye to ek baar materialize karo.</li>
</ul>`
      }
    },
    {
      id: "pipeline-order",
      src: `string[] names = ["amit", "bina", "chetan", "dev"];

var query = names
    .Where(n => { Console.WriteLine($"Where {n}"); return n.Length > 3; })
    .Select(n => { Console.WriteLine($"Select {n}"); return n.ToUpper(); });

foreach (var name in query)
    Console.WriteLine($"got {name}");`,
      answer: "Where amit\nSelect amit\ngot AMIT\nWhere bina\nSelect bina\ngot BINA\nWhere chetan\nSelect chetan\ngot CHETAN\nWhere dev",
      explain: {
        en: `<ul>
<li>Many people expect "all <code>Where</code> lines first, then all <code>Select</code> lines". That is <b>not</b> how LINQ to Objects works.</li>
<li>Each item travels through the <b>whole pipeline</b> before the next item is read: <code>Where amit</code> → <code>Select amit</code> → the <code>foreach</code> body prints <code>got AMIT</code> → then <code>bina</code>...</li>
<li><code>dev</code> has 3 letters, so <code>Where</code> rejects it and <code>Select</code> never sees it.</li>
<li>Lesson: <code>Where</code>/<code>Select</code> are <b>streaming</b> — one item at a time, pulled by the consumer. That is why <code>First()</code> or <code>Take(1)</code> on a long chain can stop very early.</li>
</ul>`,
        hi: `<ul>
<li>बहुत लोग सोचते हैं "पहले सारी <code>Where</code> lines, फिर सारी <code>Select</code> lines"। LINQ to Objects ऐसे <b>नहीं</b> चलता।</li>
<li>हर item अगला item पढ़े जाने से पहले <b>पूरी pipeline</b> से गुज़रता है: <code>Where amit</code> → <code>Select amit</code> → <code>foreach</code> body <code>got AMIT</code> print करती है → फिर <code>bina</code>...</li>
<li><code>dev</code> में 3 letters हैं, इसलिए <code>Where</code> उसे reject कर देता है और <code>Select</code> उसे कभी नहीं देखता।</li>
<li>सीख: <code>Where</code>/<code>Select</code> <b>streaming</b> हैं — एक बार में एक item, जिसे consumer खींचता है। इसीलिए लंबी chain पर <code>First()</code> या <code>Take(1)</code> बहुत जल्दी रुक सकता है।</li>
</ul>`,
        hg: `<ul>
<li>Bahut log sochte hain "pehle saari <code>Where</code> lines, phir saari <code>Select</code> lines". LINQ to Objects aise <b>nahi</b> chalta.</li>
<li>Har item agla item padhe jaane se pehle <b>poori pipeline</b> se guzarta hai: <code>Where amit</code> → <code>Select amit</code> → <code>foreach</code> body <code>got AMIT</code> print karti hai → phir <code>bina</code>...</li>
<li><code>dev</code> mein 3 letters hain, isliye <code>Where</code> use reject kar deta hai aur <code>Select</code> use kabhi nahi dekhta.</li>
<li>Seekh: <code>Where</code>/<code>Select</code> <b>streaming</b> hain — ek baar mein ek item, jise consumer kheenchta hai. Isiliye lambi chain par <code>First()</code> ya <code>Take(1)</code> bahut jaldi ruk sakta hai.</li>
</ul>`
      }
    },
    {
      id: "orderby-buffers",
      src: `int[] scores = [30, 10, 20];

var sorted = scores
    .Select(s => { Console.WriteLine($"read {s}"); return s; })
    .OrderBy(s => s);

Console.WriteLine("start");
foreach (var s in sorted)
{
    Console.WriteLine($"got {s}");
    break;
}`,
      answer: "start\nread 30\nread 10\nread 20\ngot 10",
      explain: {
        en: `<ul>
<li>Nothing runs before the <code>foreach</code>, so <b>start</b> is first.</li>
<li>We want only <b>one</b> item (<code>break</code>), but <code>OrderBy</code> cannot know the smallest value until it has seen <b>all</b> values. So it reads <b>30, 10, 20</b> first, sorts, and only then gives <b>10</b>.</li>
<li>Compare with the previous puzzle: <code>Where</code>/<code>Select</code> stream; <code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> <b>buffer</b> the whole source.</li>
<li>Lesson: on a huge or endless source, a buffering operator loads everything. For "the smallest item", <code>MinBy</code>/<code>Min</code> say what you mean.</li>
</ul>`,
        hi: `<ul>
<li><code>foreach</code> से पहले कुछ नहीं चलता, इसलिए पहले <b>start</b>।</li>
<li>हमें सिर्फ़ <b>एक</b> item चाहिए (<code>break</code>), पर <code>OrderBy</code> को सबसे छोटी value तब तक पता नहीं चल सकती जब तक वो <b>सारी</b> values न देख ले। इसलिए वो पहले <b>30, 10, 20</b> पढ़ता है, sort करता है, और फिर <b>10</b> देता है।</li>
<li>पिछले puzzle से तुलना करो: <code>Where</code>/<code>Select</code> stream करते हैं; <code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> पूरे source को <b>buffer</b> करते हैं।</li>
<li>सीख: बहुत बड़े या कभी न ख़त्म होने वाले source पर buffering operator सब कुछ load कर लेता है। "सबसे छोटा item" के लिए <code>MinBy</code>/<code>Min</code> इरादा सीधे बताते हैं।</li>
</ul>`,
        hg: `<ul>
<li><code>foreach</code> se pehle kuch nahi chalta, isliye pehle <b>start</b>.</li>
<li>Hamein sirf <b>ek</b> item chahiye (<code>break</code>), par <code>OrderBy</code> ko sabse chhoti value tab tak pata nahi chal sakti jab tak woh <b>saari</b> values na dekh le. Isliye woh pehle <b>30, 10, 20</b> padhta hai, sort karta hai, aur phir <b>10</b> deta hai.</li>
<li>Pichhle puzzle se tulna karo: <code>Where</code>/<code>Select</code> stream karte hain; <code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> poore source ko <b>buffer</b> karte hain.</li>
<li>Seekh: bahut bade ya kabhi na khatam hone wale source par buffering operator sab kuch load kar leta hai. "Sabse chhota item" ke liye <code>MinBy</code>/<code>Min</code> iraada seedhe batate hain.</li>
</ul>`
      }
    },
    {
      id: "deferred-exception",
      src: `int[] divisors = [5, 2, 0, 1];

var results = divisors.Select(d => 100 / d);
Console.WriteLine("query built");

try
{
    foreach (var r in results)
        Console.WriteLine(r);
}
catch (DivideByZeroException)
{
    Console.WriteLine("boom during foreach");
}`,
      answer: "query built\n20\n50\nboom during foreach",
      explain: {
        en: `<ul>
<li><code>100 / 0</code> is written on line 3, but <code>Select</code> is deferred — the division does not run there, so <b>query built</b> prints.</li>
<li>The <code>foreach</code> runs the lambda item by item: <b>20</b>, <b>50</b>, then <code>d = 0</code> throws. The exception surfaces <b>inside the loop</b>, after some output already happened. The last item (1) is never reached.</li>
<li>Lesson: with deferred queries, a <code>try/catch</code> around the line that <b>builds</b> the query catches nothing — the error appears where the query is <b>enumerated</b>, maybe in another method or layer.</li>
</ul>`,
        hi: `<ul>
<li><code>100 / 0</code> line 3 पर लिखा है, पर <code>Select</code> deferred है — division वहाँ नहीं चलता, इसलिए <b>query built</b> print होता है।</li>
<li><code>foreach</code> lambda को item by item चलाता है: <b>20</b>, <b>50</b>, फिर <code>d = 0</code> पर throw। Exception <b>loop के अंदर</b> आता है, कुछ output हो जाने के बाद। आख़िरी item (1) तक पहुँचते ही नहीं।</li>
<li>सीख: deferred queries में query <b>बनाने</b> वाली line के आसपास का <code>try/catch</code> कुछ नहीं पकड़ता — error वहाँ आता है जहाँ query <b>enumerate</b> होती है, शायद किसी दूसरे method या layer में।</li>
</ul>`,
        hg: `<ul>
<li><code>100 / 0</code> line 3 par likha hai, par <code>Select</code> deferred hai — division wahan nahi chalta, isliye <b>query built</b> print hota hai.</li>
<li><code>foreach</code> lambda ko item by item chalata hai: <b>20</b>, <b>50</b>, phir <code>d = 0</code> par throw. Exception <b>loop ke andar</b> aata hai, kuch output ho jaane ke baad. Aakhri item (1) tak pahunchte hi nahi.</li>
<li>Seekh: deferred queries mein query <b>banane</b> wali line ke aaspaas ka <code>try/catch</code> kuch nahi pakadta — error wahan aata hai jahan query <b>enumerate</b> hoti hai, shayad kisi doosre method ya layer mein.</li>
</ul>`
      }
    },
    {
      id: "groupby-order",
      src: `string[] sales = ["Pune:200", "Delhi:100", "Pune:50", "Mumbai:300", "Delhi:400"];

var byCity = sales
    .Select(s => s.Split(':'))
    .GroupBy(parts => parts[0], parts => int.Parse(parts[1]));

foreach (var g in byCity)
    Console.WriteLine($"{g.Key}: count={g.Count()} total={g.Sum()} first={g.First()}");`,
      answer: "Pune: count=2 total=250 first=200\nDelhi: count=2 total=500 first=100\nMumbai: count=1 total=300 first=300",
      explain: {
        en: `<ul>
<li><b>Group order</b>: LINQ to Objects yields groups in the order each key <b>first appears</b> in the source — Pune (1st item), Delhi (2nd), Mumbai (4th). It is <b>not</b> alphabetical and not by size. This order is documented, so you can rely on it in memory.</li>
<li>The <b>element selector</b> (<code>parts =&gt; int.Parse(parts[1])</code>) means each group contains just the numbers, so <code>g.Sum()</code> and <code>g.First()</code> work on ints.</li>
<li><b>Items inside a group</b> keep source order: Delhi's first item is 100, not 400.</li>
<li>Lesson: each group is <b>a key plus a sequence</b>. If you need a specific order of groups (by total, by name), add an <code>OrderBy</code> — and in a database query, add one every time.</li>
</ul>`,
        hi: `<ul>
<li><b>Groups का order</b>: LINQ to Objects groups उसी order में देता है जिसमें हर key source में <b>पहली बार दिखी</b> — Pune (1st item), Delhi (2nd), Mumbai (4th)। यह alphabetical <b>नहीं</b> है और size से भी नहीं। यह order documented है, इसलिए memory में इस पर भरोसा कर सकते हो।</li>
<li><b>Element selector</b> (<code>parts =&gt; int.Parse(parts[1])</code>) का मतलब हर group में सिर्फ़ numbers हैं, इसलिए <code>g.Sum()</code> और <code>g.First()</code> ints पर चलते हैं।</li>
<li><b>Group के अंदर items</b> source order में रहते हैं: Delhi का पहला item 100 है, 400 नहीं।</li>
<li>सीख: हर group <b>एक key और एक sequence</b> है। Groups का कोई ख़ास order चाहिए (total से, नाम से) तो <code>OrderBy</code> लगाओ — और database query में हर बार लगाओ।</li>
</ul>`,
        hg: `<ul>
<li><b>Groups ka order</b>: LINQ to Objects groups usi order mein deta hai jismein har key source mein <b>pehli baar dikhi</b> — Pune (1st item), Delhi (2nd), Mumbai (4th). Yeh alphabetical <b>nahi</b> hai aur size se bhi nahi. Yeh order documented hai, isliye memory mein is par bharosa kar sakte ho.</li>
<li><b>Element selector</b> (<code>parts =&gt; int.Parse(parts[1])</code>) ka matlab har group mein sirf numbers hain, isliye <code>g.Sum()</code> aur <code>g.First()</code> ints par chalte hain.</li>
<li><b>Group ke andar items</b> source order mein rehte hain: Delhi ka pehla item 100 hai, 400 nahi.</li>
<li>Seekh: har group <b>ek key aur ek sequence</b> hai. Groups ka koi khaas order chahiye (total se, naam se) to <code>OrderBy</code> lagao — aur database query mein har baar lagao.</li>
</ul>`
      }
    },
    {
      id: "groupby-vs-tolookup",
      src: `var tickets = new List<string> { "AC", "Sleeper", "AC" };

var grouped = tickets.GroupBy(t => t);
var lookup = tickets.ToLookup(t => t);

tickets.Add("General");
tickets.Add("AC");

Console.WriteLine($"GroupBy: {grouped.Count()} groups, AC = {grouped.First(g => g.Key == "AC").Count()}");
Console.WriteLine($"ToLookup: {lookup.Count} groups, AC = {lookup["AC"].Count()}");
Console.WriteLine($"Tatkal: {lookup["Tatkal"].Count()}");`,
      answer: "GroupBy: 3 groups, AC = 3\nToLookup: 2 groups, AC = 2\nTatkal: 0",
      explain: {
        en: `<ul>
<li><code>GroupBy</code> is <b>deferred</b>: it groups when enumerated, after the two <code>Add</code> calls → 3 keys (AC, Sleeper, General) and AC has <b>3</b> tickets.</li>
<li><code>ToLookup</code> ran <b>immediately</b> on the original 3 tickets → a snapshot with 2 keys and AC = <b>2</b>. Later changes to the list do not affect it.</li>
<li>A lookup with a <b>missing key</b> (<code>"Tatkal"</code>) returns an <b>empty</b> sequence → <b>0</b>. A <code>Dictionary</code> would throw <code>KeyNotFoundException</code>.</li>
<li>Lesson: <code>GroupBy</code> = live, re-run each time; <code>ToLookup</code> = built once, fast key access, forgiving on missing keys.</li>
</ul>`,
        hi: `<ul>
<li><code>GroupBy</code> <b>deferred</b> है: enumerate होने पर group करता है, दोनों <code>Add</code> के बाद → 3 keys (AC, Sleeper, General) और AC में <b>3</b> tickets।</li>
<li><code>ToLookup</code> original 3 tickets पर <b>तुरंत</b> चल गया → 2 keys वाला snapshot और AC = <b>2</b>। List में बाद के बदलाव इस पर असर नहीं करते।</li>
<li>Lookup में <b>missing key</b> (<code>"Tatkal"</code>) पर <b>खाली</b> sequence मिलता है → <b>0</b>। <code>Dictionary</code> होती तो <code>KeyNotFoundException</code> throw करती।</li>
<li>सीख: <code>GroupBy</code> = live, हर बार फिर से चलता है; <code>ToLookup</code> = एक बार बनता है, key से तेज़ access, missing keys पर माफ़ कर देता है।</li>
</ul>`,
        hg: `<ul>
<li><code>GroupBy</code> <b>deferred</b> hai: enumerate hone par group karta hai, dono <code>Add</code> ke baad → 3 keys (AC, Sleeper, General) aur AC mein <b>3</b> tickets.</li>
<li><code>ToLookup</code> original 3 tickets par <b>turant</b> chal gaya → 2 keys wala snapshot aur AC = <b>2</b>. List mein baad ke badlaav is par asar nahi karte.</li>
<li>Lookup mein <b>missing key</b> (<code>"Tatkal"</code>) par <b>khaali</b> sequence milta hai → <b>0</b>. <code>Dictionary</code> hoti to <code>KeyNotFoundException</code> throw karti.</li>
<li>Seekh: <code>GroupBy</code> = live, har baar phir se chalta hai; <code>ToLookup</code> = ek baar banta hai, key se tez access, missing keys par maaf kar deta hai.</li>
</ul>`
      }
    },
    {
      id: "todictionary-duplicate-key",
      src: `string[] cities = ["Pune", "Delhi", "Pune"];

try
{
    var byName = cities.ToDictionary(c => c);
    Console.WriteLine($"dictionary size: {byName.Count}");
}
catch (ArgumentException ex)
{
    Console.WriteLine(ex.Message);
}

var counts = cities.GroupBy(c => c).ToDictionary(g => g.Key, g => g.Count());
Console.WriteLine($"Pune = {counts["Pune"]}, Delhi = {counts["Delhi"]}");`,
      answer: "An item with the same key has already been added. Key: Pune\nPune = 2, Delhi = 1",
      explain: {
        en: `<ul>
<li><code>ToDictionary</code> runs <b>immediately</b> and adds each item with its key. The second <code>"Pune"</code> is a duplicate key → <code>ArgumentException</code>, so <b>dictionary size</b> is never printed.</li>
<li>Unlike <code>ToLookup</code> (one key → many items), a dictionary allows <b>one value per key</b>.</li>
<li>Fix: decide what to do with duplicates first — group them (<code>GroupBy(...).ToDictionary(g =&gt; g.Key, g =&gt; g.Count())</code>), keep one (<code>DistinctBy</code>), or use <code>ToLookup</code>. Here Pune has <b>2</b>, Delhi <b>1</b>.</li>
<li>Lesson: <code>ToDictionary</code> on real data is a common production crash — the key that was "always unique" in testing is not unique in production. Ask "can this key repeat?" in code review.</li>
</ul>`,
        hi: `<ul>
<li><code>ToDictionary</code> <b>तुरंत</b> चलता है और हर item को उसकी key के साथ जोड़ता है। दूसरा <code>"Pune"</code> duplicate key है → <code>ArgumentException</code>, इसलिए <b>dictionary size</b> कभी print नहीं होता।</li>
<li><code>ToLookup</code> (एक key → कई items) के उलट, dictionary में <b>हर key की एक ही value</b> हो सकती है।</li>
<li>Fix: पहले तय करो कि duplicates का क्या करना है — उन्हें group करो (<code>GroupBy(...).ToDictionary(g =&gt; g.Key, g =&gt; g.Count())</code>), एक रखो (<code>DistinctBy</code>), या <code>ToLookup</code> use करो। यहाँ Pune के <b>2</b>, Delhi का <b>1</b>।</li>
<li>सीख: असली data पर <code>ToDictionary</code> production crash की आम वजह है — testing में जो key "हमेशा unique" थी, production में unique नहीं निकलती। Code review में पूछो "क्या यह key दोहरा सकती है?"।</li>
</ul>`,
        hg: `<ul>
<li><code>ToDictionary</code> <b>turant</b> chalta hai aur har item ko uski key ke saath jodta hai. Doosra <code>"Pune"</code> duplicate key hai → <code>ArgumentException</code>, isliye <b>dictionary size</b> kabhi print nahi hota.</li>
<li><code>ToLookup</code> (ek key → kai items) ke ulat, dictionary mein <b>har key ki ek hi value</b> ho sakti hai.</li>
<li>Fix: pehle tay karo ki duplicates ka kya karna hai — unhe group karo (<code>GroupBy(...).ToDictionary(g =&gt; g.Key, g =&gt; g.Count())</code>), ek rakho (<code>DistinctBy</code>), ya <code>ToLookup</code> use karo. Yahan Pune ke <b>2</b>, Delhi ka <b>1</b>.</li>
<li>Seekh: asli data par <code>ToDictionary</code> production crash ki aam wajah hai — testing mein jo key "hamesha unique" thi, production mein unique nahi nikalti. Code review mein poochho "kya yeh key dohra sakti hai?".</li>
</ul>`
      }
    },
    {
      id: "first-single-defaults",
      src: `int[] marks = [35, 72, 90, 72];

Console.WriteLine(marks.FirstOrDefault(m => m > 95));
Console.WriteLine(marks.FirstOrDefault(m => m > 95, -1));
Console.WriteLine(marks.First(m => m > 70));
Console.WriteLine(marks.SingleOrDefault(m => m == 90));

try
{
    Console.WriteLine(marks.SingleOrDefault(m => m == 72));
}
catch (InvalidOperationException ex)
{
    Console.WriteLine(ex.Message);
}

string[] names = [];
Console.WriteLine(names.FirstOrDefault() ?? "null");`,
      answer: "0\n-1\n72\n90\nSequence contains more than one matching element\nnull",
      explain: {
        en: `<ul>
<li>No mark is above 95, so <code>FirstOrDefault</code> returns <code>default(int)</code> = <b>0</b> — which looks like a real mark. The .NET 6 overload lets you choose <b>-1</b> instead.</li>
<li><code>First(m =&gt; m &gt; 70)</code> returns the <b>first</b> match in order → <b>72</b> (not 90).</li>
<li>Exactly one 90 → <code>SingleOrDefault</code> returns <b>90</b>.</li>
<li>Two 72s → <code>SingleOrDefault</code> <b>still throws</b>: "OrDefault" covers only the <b>zero</b> case, never duplicates.</li>
<li>For a reference type (<code>string</code>), the default is <code>null</code> → <b>null</b> via <code>??</code>.</li>
<li>Lesson: <code>...OrDefault</code> on value types can hide "not found" behind 0; and <code>Single</code> is an assertion of uniqueness.</li>
</ul>`,
        hi: `<ul>
<li>कोई mark 95 से ऊपर नहीं, इसलिए <code>FirstOrDefault</code> <code>default(int)</code> = <b>0</b> देता है — जो असली mark जैसा दिखता है। .NET 6 का overload आपको उसकी जगह <b>-1</b> चुनने देता है।</li>
<li><code>First(m =&gt; m &gt; 70)</code> order में <b>पहला</b> match देता है → <b>72</b> (90 नहीं)।</li>
<li>ठीक एक 90 है → <code>SingleOrDefault</code> <b>90</b> देता है।</li>
<li>दो 72 हैं → <code>SingleOrDefault</code> <b>फिर भी throw</b> करता है: "OrDefault" सिर्फ़ <b>zero</b> वाले case को संभालता है, duplicates को कभी नहीं।</li>
<li>Reference type (<code>string</code>) के लिए default <code>null</code> है → <code>??</code> से <b>null</b>।</li>
<li>सीख: value types पर <code>...OrDefault</code> "नहीं मिला" को 0 के पीछे छुपा सकता है; और <code>Single</code> uniqueness का assertion है।</li>
</ul>`,
        hg: `<ul>
<li>Koi mark 95 se upar nahi, isliye <code>FirstOrDefault</code> <code>default(int)</code> = <b>0</b> deta hai — jo asli mark jaisa dikhta hai. .NET 6 ka overload aapko uski jagah <b>-1</b> chunne deta hai.</li>
<li><code>First(m =&gt; m &gt; 70)</code> order mein <b>pehla</b> match deta hai → <b>72</b> (90 nahi).</li>
<li>Theek ek 90 hai → <code>SingleOrDefault</code> <b>90</b> deta hai.</li>
<li>Do 72 hain → <code>SingleOrDefault</code> <b>phir bhi throw</b> karta hai: "OrDefault" sirf <b>zero</b> wale case ko sambhaalta hai, duplicates ko kabhi nahi.</li>
<li>Reference type (<code>string</code>) ke liye default <code>null</code> hai → <code>??</code> se <b>null</b>.</li>
<li>Seekh: value types par <code>...OrDefault</code> "nahi mila" ko 0 ke peeche chhupa sakta hai; aur <code>Single</code> uniqueness ka assertion hai.</li>
</ul>`
      }
    },
    {
      id: "orderby-twice",
      src: `Emp[] staff =
[
    new("Asha", "Pune", 30),
    new("Ravi", "Delhi", 25),
    new("Neha", "Pune", 25),
    new("Amit", "Delhi", 30)
];

Console.WriteLine(Names(staff.OrderBy(e => e.City)));
Console.WriteLine(Names(staff.OrderBy(e => e.City).ThenBy(e => e.Age)));
Console.WriteLine(Names(staff.OrderBy(e => e.City).OrderBy(e => e.Age)));

static string Names(IEnumerable<Emp> list) => string.Join(" ", list.Select(e => e.Name));

record Emp(string Name, string City, int Age);`,
      answer: "Ravi Amit Asha Neha\nRavi Amit Neha Asha\nRavi Neha Amit Asha",
      explain: {
        en: `<ul>
<li><b>Line 1</b>: by City. Delhi (Ravi, Amit) before Pune (Asha, Neha). Inside a city the original order stays — the sort is <b>stable</b>.</li>
<li><b>Line 2</b>: City, then Age inside each city: Delhi → Ravi 25, Amit 30; Pune → Neha 25, Asha 30. This is what people usually want.</li>
<li><b>Line 3</b>: the second <code>OrderBy</code> makes <b>Age the primary key</b>. Age 25: Ravi, Neha; age 30: Amit, Asha. The City order survives only as a hidden tie-breaker because the sort is stable.</li>
<li>Lesson: use <code>ThenBy</code> for secondary keys. <code>OrderBy</code> twice is a common bug, and in a database query the first sort may simply be dropped.</li>
</ul>`,
        hi: `<ul>
<li><b>Line 1</b>: City से। Delhi (Ravi, Amit) पहले, फिर Pune (Asha, Neha)। एक city के अंदर original order बना रहता है — sort <b>stable</b> है।</li>
<li><b>Line 2</b>: City, फिर हर city के अंदर Age: Delhi → Ravi 25, Amit 30; Pune → Neha 25, Asha 30। लोग आमतौर पर यही चाहते हैं।</li>
<li><b>Line 3</b>: दूसरा <code>OrderBy</code> <b>Age को primary key</b> बना देता है। Age 25: Ravi, Neha; age 30: Amit, Asha। City वाला order सिर्फ़ छुपे tie-breaker की तरह बचता है क्योंकि sort stable है।</li>
<li>सीख: secondary keys के लिए <code>ThenBy</code> use करो। दो बार <code>OrderBy</code> एक आम bug है, और database query में पहला sort बस गिराया जा सकता है।</li>
</ul>`,
        hg: `<ul>
<li><b>Line 1</b>: City se. Delhi (Ravi, Amit) pehle, phir Pune (Asha, Neha). Ek city ke andar original order bana rehta hai — sort <b>stable</b> hai.</li>
<li><b>Line 2</b>: City, phir har city ke andar Age: Delhi → Ravi 25, Amit 30; Pune → Neha 25, Asha 30. Log aamtaur par yahi chahte hain.</li>
<li><b>Line 3</b>: doosra <code>OrderBy</code> <b>Age ko primary key</b> bana deta hai. Age 25: Ravi, Neha; age 30: Amit, Asha. City wala order sirf chhupe tie-breaker ki tarah bachta hai kyonki sort stable hai.</li>
<li>Seekh: secondary keys ke liye <code>ThenBy</code> use karo. Do baar <code>OrderBy</code> ek aam bug hai, aur database query mein pehla sort bas giraaya ja sakta hai.</li>
</ul>`
      }
    },
    {
      id: "inner-vs-left-join",
      src: `Customer[] customers = [new(1, "Asha"), new(2, "Ravi"), new(3, "Neha")];
Order[] orders = [new(101, 1), new(102, 3), new(103, 1), new(104, 9)];

var inner = customers.Join(orders, c => c.Id, o => o.CustomerId, (c, o) => $"{c.Name}-{o.Id}");
Console.WriteLine(string.Join(", ", inner));

var counts = customers.GroupJoin(orders, c => c.Id, o => o.CustomerId, (c, os) => $"{c.Name}:{os.Count()}");
Console.WriteLine(string.Join(", ", counts));

var left = from c in customers
           join o in orders on c.Id equals o.CustomerId into cOrders
           from o in cOrders.DefaultIfEmpty()
           select $"{c.Name}-{(o is null ? "none" : o.Id.ToString())}";
Console.WriteLine(string.Join(", ", left));

record Customer(int Id, string Name);
record Order(int Id, int CustomerId);`,
      answer: "Asha-101, Asha-103, Neha-102\nAsha:2, Ravi:0, Neha:1\nAsha-101, Asha-103, Ravi-none, Neha-102",
      explain: {
        en: `<ul>
<li><b>Join</b> (inner): only matching pairs. Ravi has no orders → gone. Order 104 points to customer 9, who does not exist → gone. Order of results: customers in their order, and for each customer the matching orders in <b>their</b> order (101 before 103).</li>
<li><b>GroupJoin</b>: <b>every</b> customer appears once, with a group of orders — Ravi's group is empty → <b>Ravi:0</b>.</li>
<li><b>Left join</b>: <code>DefaultIfEmpty()</code> turns Ravi's empty group into one <code>null</code>, so Ravi survives as <b>Ravi-none</b>. Order 104 still does not appear (it has no customer — that would be a right join).</li>
<li>Lesson: inner join drops rows on both sides; left join keeps every row of the left side. In .NET 10 you can write the same with <code>customers.LeftJoin(...)</code>.</li>
</ul>`,
        hi: `<ul>
<li><b>Join</b> (inner): सिर्फ़ matching pairs। Ravi के कोई orders नहीं → गायब। Order 104 customer 9 की तरफ़ इशारा करता है, जो है ही नहीं → गायब। Results का order: customers अपने order में, और हर customer के matching orders <b>उनके</b> order में (101 पहले, फिर 103)।</li>
<li><b>GroupJoin</b>: <b>हर</b> customer एक बार आता है, orders के एक group के साथ — Ravi का group खाली है → <b>Ravi:0</b>।</li>
<li><b>Left join</b>: <code>DefaultIfEmpty()</code> Ravi के खाली group को एक <code>null</code> में बदल देता है, इसलिए Ravi <b>Ravi-none</b> बनकर बच जाता है। Order 104 फिर भी नहीं दिखता (उसका customer नहीं है — वो right join होता)।</li>
<li>सीख: inner join दोनों तरफ़ की rows गिराता है; left join बाईं तरफ़ की हर row रखता है। .NET 10 में यही <code>customers.LeftJoin(...)</code> से लिख सकते हो।</li>
</ul>`,
        hg: `<ul>
<li><b>Join</b> (inner): sirf matching pairs. Ravi ke koi orders nahi → gaayab. Order 104 customer 9 ki taraf ishaara karta hai, jo hai hi nahi → gaayab. Results ka order: customers apne order mein, aur har customer ke matching orders <b>unke</b> order mein (101 pehle, phir 103).</li>
<li><b>GroupJoin</b>: <b>har</b> customer ek baar aata hai, orders ke ek group ke saath — Ravi ka group khaali hai → <b>Ravi:0</b>.</li>
<li><b>Left join</b>: <code>DefaultIfEmpty()</code> Ravi ke khaali group ko ek <code>null</code> mein badal deta hai, isliye Ravi <b>Ravi-none</b> bankar bach jaata hai. Order 104 phir bhi nahi dikhta (uska customer nahi hai — woh right join hota).</li>
<li>Seekh: inner join dono taraf ki rows giraata hai; left join baayin taraf ki har row rakhta hai. .NET 10 mein yahi <code>customers.LeftJoin(...)</code> se likh sakte ho.</li>
</ul>`
      }
    },
    {
      id: "func-vs-expression",
      src: `using System.Linq.Expressions;

IQueryable<int> prices = new List<int> { 50, 150, 250 }.AsQueryable();

Expression<Func<int, bool>> asExpression = p => p > 100;
Func<int, bool> asFunc = p => p > 100;

var q1 = prices.Where(asExpression);
var q2 = prices.Where(asFunc);

Console.WriteLine(q1 is IQueryable<int>);
Console.WriteLine(q2 is IQueryable<int>);
Console.WriteLine(asExpression);
Console.WriteLine(q1.Count() == q2.Count());`,
      answer: "True\nFalse\np => (p > 100)\nTrue",
      explain: {
        en: `<ul>
<li><code>prices.Where(asExpression)</code> binds to <code>Queryable.Where</code> → the result is still an <code>IQueryable</code> → <b>True</b>.</li>
<li>A <code>Func</code> cannot be converted to an <code>Expression</code>, so <code>prices.Where(asFunc)</code> binds to <code>Enumerable.Where</code> (an <code>IQueryable</code> is also an <code>IEnumerable</code>) → the result is a plain in-memory sequence → <b>False</b>.</li>
<li>Printing the expression shows the tree as text: <b>p =&gt; (p &gt; 100)</b>. A <code>Func</code> has no such readable form.</li>
<li>Both give 2 items here → <b>True</b>. Same result, very different cost against a real database: with EF Core, <code>q1</code> sends <code>WHERE p &gt; 100</code> to SQL, while <code>q2</code> loads <b>every row</b> and filters in C#.</li>
<li>Lesson: for EF Core filters, accept <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code>, not <code>Func&lt;T,bool&gt;</code>. It compiles either way — the bug shows up only as slowness.</li>
</ul>`,
        hi: `<ul>
<li><code>prices.Where(asExpression)</code>, <code>Queryable.Where</code> से bind होता है → result अब भी <code>IQueryable</code> है → <b>True</b>।</li>
<li><code>Func</code> को <code>Expression</code> में नहीं बदला जा सकता, इसलिए <code>prices.Where(asFunc)</code>, <code>Enumerable.Where</code> से bind होता है (<code>IQueryable</code> भी एक <code>IEnumerable</code> है) → result एक साधारण in-memory sequence है → <b>False</b>।</li>
<li>Expression print करने पर tree text की तरह दिखता है: <b>p =&gt; (p &gt; 100)</b>। <code>Func</code> का ऐसा कोई पढ़ने लायक form नहीं होता।</li>
<li>यहाँ दोनों 2 items देते हैं → <b>True</b>। Result वही, पर असली database पर ख़र्च बिल्कुल अलग: EF Core के साथ <code>q1</code> SQL में <code>WHERE p &gt; 100</code> भेजता है, जबकि <code>q2</code> <b>हर row</b> load करके C# में filter करता है।</li>
<li>सीख: EF Core filters के लिए <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> लो, <code>Func&lt;T,bool&gt;</code> नहीं। दोनों तरह compile होता है — bug सिर्फ़ धीमेपन के रूप में दिखता है।</li>
</ul>`,
        hg: `<ul>
<li><code>prices.Where(asExpression)</code>, <code>Queryable.Where</code> se bind hota hai → result ab bhi <code>IQueryable</code> hai → <b>True</b>.</li>
<li><code>Func</code> ko <code>Expression</code> mein nahi badla ja sakta, isliye <code>prices.Where(asFunc)</code>, <code>Enumerable.Where</code> se bind hota hai (<code>IQueryable</code> bhi ek <code>IEnumerable</code> hai) → result ek saadhaaran in-memory sequence hai → <b>False</b>.</li>
<li>Expression print karne par tree text ki tarah dikhta hai: <b>p =&gt; (p &gt; 100)</b>. <code>Func</code> ka aisa koi padhne laayak form nahi hota.</li>
<li>Yahan dono 2 items dete hain → <b>True</b>. Result wahi, par asli database par kharcha bilkul alag: EF Core ke saath <code>q1</code> SQL mein <code>WHERE p &gt; 100</code> bhejta hai, jabki <code>q2</code> <b>har row</b> load karke C# mein filter karta hai.</li>
<li>Seekh: EF Core filters ke liye <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> lo, <code>Func&lt;T,bool&gt;</code> nahi. Dono tarah compile hota hai — bug sirf dheemepan ke roop mein dikhta hai.</li>
</ul>`
      }
    },
  ],
  revision: {
    en: [
      "<b>Deferred execution</b>: <code>Where</code>/<code>Select</code>/<code>OrderBy</code> only build a query; <code>foreach</code>, <code>ToList</code>, <code>Count</code>, <code>First</code>, <code>Any</code> run it — with the data and variable values of that moment.",
      "<b>Multiple enumeration</b>: every enumeration re-runs the query (twice = two DB calls). Materialize once, or take <code>IReadOnlyCollection&lt;T&gt;</code>.",
      "<b>Streaming vs buffering</b>: <code>Where</code>/<code>Select</code> pass items one by one; <code>OrderBy</code>/<code>GroupBy</code> read the whole source first.",
      "<b>IEnumerable</b> = in memory with <code>Func</code>; <b>IQueryable</b> = <code>Expression</code> tree that a provider (EF Core) translates to SQL. The variable's type picks the method.",
      "<b>Select</b> = one output per input (lists stay nested); <b>SelectMany</b> = flatten all children into one sequence.",
      "<b>GroupBy</b> = groups with a <code>Key</code>, in first-appearance order, deferred. <b>ToLookup</b> = immediate, indexable, missing key gives empty.",
      "<b>Join</b> = inner join; <b>GroupJoin</b> + <code>DefaultIfEmpty()</code> = left join; .NET 10 adds <code>LeftJoin</code>/<code>RightJoin</code>.",
      "<b>First</b> throws on none; <b>Single</b> throws on none or many; <b>...OrDefault</b> returns default on none — but <code>SingleOrDefault</code> still throws on duplicates.",
      "<b>Any()</b> stops at the first match (EXISTS); <b>Count()</b> on a lazy or filtered query walks every item (COUNT). On lists and arrays, use the <code>Count</code>/<code>Length</code> property.",
      "<b>Distinct</b> uses Equals/GetHashCode (records by value, classes by reference); <b>DistinctBy</b> (.NET 6) keeps the first item per key.",
      "<b>Sorting and paging</b>: <code>OrderBy</code> + <code>ThenBy</code> (not <code>OrderBy</code> twice), a unique tie-breaker, then <code>Skip((page - 1) * size).Take(size)</code>; keyset paging for deep pages.",
      "<b>TL view</b>: readable LINQ by default; switch to a plain loop only in hot paths that a profiler or benchmark points to."
    ],
    meaning: {
      hi: [
        "Deferred execution: Where/Select/OrderBy सिर्फ़ query बनाते हैं; foreach, ToList, Count, First, Any उसे चलाते हैं — उस पल के data और variable values के साथ।",
        "Multiple enumeration: हर enumeration query फिर से चलाता है (दो बार = दो DB calls)। एक बार materialize करो, या IReadOnlyCollection&lt;T&gt; लो।",
        "Streaming बनाम buffering: Where/Select items एक-एक करके आगे भेजते हैं; OrderBy/GroupBy पहले पूरा source पढ़ते हैं।",
        "IEnumerable = memory में, Func के साथ; IQueryable = Expression tree जिसे provider (EF Core) SQL में translate करता है। Variable का type method चुनता है।",
        "Select = हर input का एक output (lists nested रहती हैं); SelectMany = सारे children को एक sequence में flatten करो।",
        "GroupBy = Key वाले groups, पहली बार दिखने के order में, deferred। ToLookup = तुरंत चलता है, index कर सकते हो, missing key पर खाली मिलता है।",
        "Join = inner join; GroupJoin + DefaultIfEmpty() = left join; .NET 10 में LeftJoin/RightJoin आए।",
        "First कुछ न मिले तो throw; Single कुछ न मिले या कई मिलें तो throw; ...OrDefault कुछ न मिले तो default — पर SingleOrDefault duplicates पर फिर भी throw करता है।",
        "Any() पहले match पर रुकता है (EXISTS); lazy या filtered query पर Count() हर item से गुज़रता है (COUNT)। Lists और arrays पर Count/Length property use करो।",
        "Distinct, Equals/GetHashCode use करता है (records value से, classes reference से); DistinctBy (.NET 6) हर key का पहला item रखता है।",
        "Sorting और paging: OrderBy + ThenBy (दो बार OrderBy नहीं), एक unique tie-breaker, फिर Skip((page - 1) * size).Take(size); गहरे pages के लिए keyset paging।",
        "TL view: default में readable LINQ; plain loop पर सिर्फ़ उन hot paths में जाओ जिन्हें profiler या benchmark दिखाए।"
      ],
      hg: [
        "Deferred execution: Where/Select/OrderBy sirf query banate hain; foreach, ToList, Count, First, Any use chalate hain — us pal ke data aur variable values ke saath.",
        "Multiple enumeration: har enumeration query phir se chalata hai (do baar = do DB calls). Ek baar materialize karo, ya IReadOnlyCollection&lt;T&gt; lo.",
        "Streaming vs buffering: Where/Select items ek-ek karke aage bhejte hain; OrderBy/GroupBy pehle poora source padhte hain.",
        "IEnumerable = memory mein, Func ke saath; IQueryable = Expression tree jise provider (EF Core) SQL mein translate karta hai. Variable ka type method chunta hai.",
        "Select = har input ka ek output (lists nested rehti hain); SelectMany = saare children ko ek sequence mein flatten karo.",
        "GroupBy = Key wale groups, pehli baar dikhne ke order mein, deferred. ToLookup = turant chalta hai, index kar sakte ho, missing key par khaali milta hai.",
        "Join = inner join; GroupJoin + DefaultIfEmpty() = left join; .NET 10 mein LeftJoin/RightJoin aaye.",
        "First kuch na mile to throw; Single kuch na mile ya kai milein to throw; ...OrDefault kuch na mile to default — par SingleOrDefault duplicates par phir bhi throw karta hai.",
        "Any() pehle match par rukta hai (EXISTS); lazy ya filtered query par Count() har item se guzarta hai (COUNT). Lists aur arrays par Count/Length property use karo.",
        "Distinct, Equals/GetHashCode use karta hai (records value se, classes reference se); DistinctBy (.NET 6) har key ka pehla item rakhta hai.",
        "Sorting aur paging: OrderBy + ThenBy (do baar OrderBy nahi), ek unique tie-breaker, phir Skip((page - 1) * size).Take(size); gehre pages ke liye keyset paging.",
        "TL view: default mein readable LINQ; plain loop par sirf un hot paths mein jao jinhe profiler ya benchmark dikhaaye."
      ]
    }
  },
  whatsNew: {
    en: `<p>Current: <b>.NET 10 LTS / C# 14 / EF Core 10</b> (Nov 2025). LINQ changes are <b>library</b> changes (new methods in <code>System.Linq</code>, shipped with a .NET version), not C# language features. What is new in each version — everything before it already worked:</p>
<ul>
<li><b>.NET 6</b> — <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; default-value overloads <code>FirstOrDefault(pred, value)</code> / <code>LastOrDefault</code> / <code>SingleOrDefault</code>; <code>Take(range)</code>; <code>TryGetNonEnumeratedCount</code>; three-sequence <code>Zip</code>.</li>
<li><b>.NET 7</b> — <code>Order()</code> and <code>OrderDescending()</code>: sort simple values without writing <code>x =&gt; x</code>.</li>
<li><b>.NET 9</b> — <code>CountBy</code> and <code>AggregateBy</code>: per-key counts and totals without building <code>GroupBy</code> groups; <code>Index()</code>: <code>(Index, Item)</code> pairs for <code>foreach</code>.</li>
<li><b>.NET 10</b> — <code>LeftJoin</code> and <code>RightJoin</code> operators on <code>Enumerable</code> and <code>Queryable</code>. Before, a left join needed <code>GroupJoin</code> + <code>SelectMany</code> + <code>DefaultIfEmpty</code>. C# query syntax has no keyword for them yet.</li>
<li><b>EF Core 10</b> — translates <code>LeftJoin</code>/<code>RightJoin</code> to SQL <code>LEFT JOIN</code>/<code>RIGHT JOIN</code> (more EF Core 9/10 changes on Day 6).</li>
<li><b>.NET 10</b> — <code>System.Linq.AsyncEnumerable</code>: LINQ for <code>IAsyncEnumerable&lt;T&gt;</code> is now built in (Day 3 whatsNew).</li>
</ul>
<p>The code checker for this tutorial uses the .NET 9 SDK, so the .NET 9 operators above are compiled and run; the .NET 10 <code>LeftJoin</code>/<code>RightJoin</code> snippet is shown but not compiled. Today's code uses C# 12 collection expressions (<code>int[] marks = [72, 35, 90];</code>).</p>`,
    hi: `<p>Current: <b>.NET 10 LTS / C# 14 / EF Core 10</b> (Nov 2025)। LINQ के बदलाव <b>library</b> बदलाव हैं (<code>System.Linq</code> में नए methods, जो किसी .NET version के साथ आते हैं), C# language features नहीं। हर version में क्या नया है — उससे पहले की हर चीज़ पहले से चलती थी:</p>
<ul>
<li><b>.NET 6</b> — <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; default-value overloads <code>FirstOrDefault(pred, value)</code> / <code>LastOrDefault</code> / <code>SingleOrDefault</code>; <code>Take(range)</code>; <code>TryGetNonEnumeratedCount</code>; तीन sequences वाला <code>Zip</code>।</li>
<li><b>.NET 7</b> — <code>Order()</code> और <code>OrderDescending()</code>: <code>x =&gt; x</code> लिखे बिना simple values sort करो।</li>
<li><b>.NET 9</b> — <code>CountBy</code> और <code>AggregateBy</code>: <code>GroupBy</code> groups बनाए बिना per-key counts और totals; <code>Index()</code>: <code>foreach</code> के लिए <code>(Index, Item)</code> pairs।</li>
<li><b>.NET 10</b> — <code>Enumerable</code> और <code>Queryable</code> पर <code>LeftJoin</code> और <code>RightJoin</code> operators। पहले left join के लिए <code>GroupJoin</code> + <code>SelectMany</code> + <code>DefaultIfEmpty</code> लगता था। C# query syntax में इनका keyword अभी नहीं है।</li>
<li><b>EF Core 10</b> — <code>LeftJoin</code>/<code>RightJoin</code> को SQL <code>LEFT JOIN</code>/<code>RIGHT JOIN</code> में translate करता है (EF Core 9/10 के और बदलाव Day 6 में)।</li>
<li><b>.NET 10</b> — <code>System.Linq.AsyncEnumerable</code>: <code>IAsyncEnumerable&lt;T&gt;</code> के लिए LINQ अब built-in है (Day 3 whatsNew)।</li>
</ul>
<p>इस tutorial का code checker .NET 9 SDK use करता है, इसलिए ऊपर के .NET 9 operators compile होकर चलते हैं; .NET 10 वाला <code>LeftJoin</code>/<code>RightJoin</code> snippet दिखाया गया है पर compile नहीं होता। आज का code C# 12 collection expressions use करता है (<code>int[] marks = [72, 35, 90];</code>)।</p>`,
    hg: `<p>Current: <b>.NET 10 LTS / C# 14 / EF Core 10</b> (Nov 2025). LINQ ke badlaav <b>library</b> badlaav hain (<code>System.Linq</code> mein naye methods, jo kisi .NET version ke saath aate hain), C# language features nahi. Har version mein kya naya hai — usse pehle ki har cheez pehle se chalti thi:</p>
<ul>
<li><b>.NET 6</b> — <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; default-value overloads <code>FirstOrDefault(pred, value)</code> / <code>LastOrDefault</code> / <code>SingleOrDefault</code>; <code>Take(range)</code>; <code>TryGetNonEnumeratedCount</code>; teen sequences wala <code>Zip</code>.</li>
<li><b>.NET 7</b> — <code>Order()</code> aur <code>OrderDescending()</code>: <code>x =&gt; x</code> likhe bina simple values sort karo.</li>
<li><b>.NET 9</b> — <code>CountBy</code> aur <code>AggregateBy</code>: <code>GroupBy</code> groups banaye bina per-key counts aur totals; <code>Index()</code>: <code>foreach</code> ke liye <code>(Index, Item)</code> pairs.</li>
<li><b>.NET 10</b> — <code>Enumerable</code> aur <code>Queryable</code> par <code>LeftJoin</code> aur <code>RightJoin</code> operators. Pehle left join ke liye <code>GroupJoin</code> + <code>SelectMany</code> + <code>DefaultIfEmpty</code> lagta tha. C# query syntax mein inka keyword abhi nahi hai.</li>
<li><b>EF Core 10</b> — <code>LeftJoin</code>/<code>RightJoin</code> ko SQL <code>LEFT JOIN</code>/<code>RIGHT JOIN</code> mein translate karta hai (EF Core 9/10 ke aur badlaav Day 6 mein).</li>
<li><b>.NET 10</b> — <code>System.Linq.AsyncEnumerable</code>: <code>IAsyncEnumerable&lt;T&gt;</code> ke liye LINQ ab built-in hai (Day 3 whatsNew).</li>
</ul>
<p>Is tutorial ka code checker .NET 9 SDK use karta hai, isliye upar ke .NET 9 operators compile hokar chalte hain; .NET 10 wala <code>LeftJoin</code>/<code>RightJoin</code> snippet dikhaya gaya hai par compile nahi hota. Aaj ka code C# 12 collection expressions use karta hai (<code>int[] marks = [72, 35, 90];</code>).</p>`
  }
};
