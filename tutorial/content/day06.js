// Day 6 — EF Core Part 2, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 6,
  format: "lesson",
  title: {
    en: "EF Core Part 2 — Queries, Raw SQL, Transactions, Concurrency",
    hi: "EF Core Part 2 — Queries, SQL, Transactions और Concurrency",
    hg: "EF Core Part 2 — Queries, SQL, Transactions aur Concurrency"
  },
  summary: {
    en: "<p>Day 6 teaches the habits that keep EF Core fast and safe in the <b>customer-care CRM</b>, in 6 short lessons on the same small model (a <code>Customer</code> with many <code>SupportTicket</code>s). Each lesson fixes one real production problem and every program runs offline on an in-memory SQLite database.</p><p>First seeing the SQL and fixing N+1, then projections, then raw SQL without SQL injection. After that transactions, concurrency tokens against lost updates, and bulk changes with <code>ExecuteUpdate</code>. The Deep Dive adds fast reads (<code>AsNoTracking</code>, paging), indexes and retries. Each lesson has line-by-line notes, an exercise and a quiz.</p>",
    hi: "<p>Day 6 वे आदतें सिखाता है जो <b>customer-care CRM</b> में EF Core को तेज़ और सुरक्षित रखती हैं, 6 छोटे पाठों में, उसी छोटे model पर (एक <code>Customer</code> और उसके कई <code>SupportTicket</code>)। हर पाठ production की एक असली समस्या ठीक करता है और हर program in-memory SQLite database पर offline चलता है।</p><p>पहले SQL देखना और N+1 ठीक करना, फिर projections, फिर SQL injection के बिना raw SQL। उसके बाद transactions, lost updates के ख़िलाफ़ concurrency tokens, <code>ExecuteUpdate</code> से bulk changes। Deep Dive में तेज़ reads (<code>AsNoTracking</code>, paging), indexes और retries हैं। हर पाठ में लाइन-दर-लाइन समझ, एक exercise और एक quiz है।</p>",
    hg: "<p>Day 6 ve aadatein sikhata hai jo <b>customer-care CRM</b> mein EF Core ko tez aur surakshit rakhti hain, 6 chhote lessons mein, usi chhote model par (ek <code>Customer</code> aur uske kai <code>SupportTicket</code>). Har lesson production ki ek asli samasya theek karta hai aur har program in-memory SQLite database par offline chalta hai.</p><p>Pehle SQL dekhna aur N+1 theek karna, phir projections, phir SQL injection ke bina raw SQL. Uske baad transactions, lost updates ke khilaaf concurrency tokens, <code>ExecuteUpdate</code> se bulk changes. Deep Dive mein tez reads (<code>AsNoTracking</code>, paging), indexes aur retries hain. Har lesson mein line-by-line samajh, ek exercise aur ek quiz hai.</p>"
  },
  sections: [
    {
      id: "n-plus-one",
      depth: "short",
      title: {
        en: "See the SQL and fix the N+1 problem",
        hi: "SQL देखना और N+1 problem ठीक करना",
        hg: "SQL dekhna aur N+1 problem theek karna"
      },
      lesson: {
        buildsOn: {
          en: "Day 5 built the small CRM database with EF Core: <code>Customer</code> has many <code>SupportTicket</code>s, and <code>Include</code> loads them together. Today we stop trusting EF blindly. First skill: look at the SQL it sends and count it. A loop that runs one query per customer is the classic trap.",
          hi: "Day 5 में EF Core से छोटा CRM database बना: <code>Customer</code> के कई <code>SupportTicket</code> हैं, और <code>Include</code> उन्हें साथ में load करता है। आज हम EF पर आँख बंद करके भरोसा करना छोड़ते हैं। पहली skill: EF जो SQL भेजता है उसे देखना और गिनना। हर customer के लिए एक query चलाने वाला loop सबसे पुराना जाल है।",
          hg: "Day 5 mein EF Core se chhota CRM database bana: <code>Customer</code> ke kai <code>SupportTicket</code> hain, aur <code>Include</code> unhein saath mein load karta hai. Aaj hum EF par aankh band karke bharosa karna chhodte hain. Pehli skill: EF jo SQL bhejta hai use dekhna aur ginna. Har customer ke liye ek query chalane wala loop sabse purana jaal hai."
        },
        what: {
          en: "<p>The <b>N+1 problem</b> is 1 query to load N customers, then 1 more query for each customer inside a loop: N+1 trips to the database. You find it by <b>counting the SQL commands</b>, and fix it by loading everything in one query (<code>Include</code> or a projection).</p>",
          hi: "<p><b>N+1 problem</b> यानी N customers लाने के लिए 1 query, फिर loop के अंदर हर customer के लिए 1 और query: database के N+1 चक्कर। इसे <b>SQL commands गिनकर</b> पकड़ते हैं, और सब कुछ एक ही query में लाकर (<code>Include</code> या projection) ठीक करते हैं।</p>",
          hg: "<p><b>N+1 problem</b> yaani N customers laane ke liye 1 query, phir loop ke andar har customer ke liye 1 aur query: database ke N+1 chakkar. Ise <b>SQL commands ginkar</b> pakadte hain, aur sab kuch ek hi query mein laakar (<code>Include</code> ya projection) theek karte hain.</p>"
        },
        why: {
          en: "<p>With 4 customers nobody notices. With 5,000 customers it is 5,001 round trips, each paying network time. The code looks innocent, so the only reliable defence is to <b>measure</b>: print or assert the number of queries.</p>",
          hi: "<p>4 customers पर किसी को पता नहीं चलता। 5,000 customers पर यह 5,001 चक्कर है, हर एक में network का समय लगता है। Code मासूम दिखता है, इसलिए भरोसेमंद तरीका सिर्फ़ <b>नापना</b> है: queries की गिनती print करो या test में assert करो।</p>",
          hg: "<p>4 customers par kisi ko pata nahi chalta. 5,000 customers par ye 5,001 chakkar hai, har ek mein network ka samay lagta hai. Code masoom dikhta hai, isliye bharosemand tareeka sirf <b>naapna</b> hai: queries ki ginti print karo ya test mein assert karo.</p>"
        },
        analogy: {
          en: "<p>A kirana shop helper. Mummy gives a list of 4 items. The slow helper walks to the shop once <b>per item</b>: 4 trips, plus one to read the price board. The smart helper takes the whole list and brings everything in <b>one</b> trip. Same groceries; N+1 is the slow helper.</p>",
          hi: "<p>Kirana दुकान का helper। मम्मी 4 चीज़ों की list देती हैं। धीमा helper <b>हर चीज़ के लिए</b> दुकान जाता है: 4 चक्कर, और एक भाव पढ़ने का। समझदार helper पूरी list लेकर <b>एक ही</b> चक्कर में सब ले आता है। सामान वही; N+1 धीमा helper है।</p>",
          hg: "<p>Kirana dukaan ka helper. Mummy 4 cheezon ki list deti hain. Dheema helper <b>har cheez ke liye</b> dukaan jaata hai: 4 chakkar, aur ek bhaav padhne ka. Samajhdaar helper poori list lekar <b>ek hi</b> chakkar mein sab le aata hai. Saamaan wahi; N+1 dheema helper hai.</p>"
        },
        focus: {
          caption: {
            en: "Two ways to see the SQL (development only)",
            hi: "SQL देखने के दो तरीके (सिर्फ़ development में)",
            hg: "SQL dekhne ke do tareeke (sirf development mein)"
          },
          src: "// 1. Print the SQL of ONE query without running it\nConsole.WriteLine(db.Tickets.Where(t => t.Status == \"Open\").ToQueryString());\n\n// 2. Print EVERY command EF sends (put this on the DbContext options)\noptionsBuilder.LogTo(Console.WriteLine, LogLevel.Information);",
          check: "none"
        },
        lines: [
          {
            code: ".LogTo(_ => queries++, [RelationalEventId.CommandExecuted])",
            note: {
              en: "EF raises a <code>CommandExecuted</code> event for every SQL command it sends. We do not print anything, we just add 1 to <code>queries</code>. Teams use the same trick in integration tests to stop an N+1 from coming back.",
              hi: "EF हर SQL command भेजने पर <code>CommandExecuted</code> event उठाता है। हम कुछ print नहीं करते, बस <code>queries</code> में 1 जोड़ते हैं। Teams यही trick integration tests में लगाती हैं ताकि N+1 वापस न आए।",
              hg: "EF har SQL command bhejne par <code>CommandExecuted</code> event uthata hai. Hum kuch print nahi karte, bas <code>queries</code> mein 1 jodte hain. Teams yahi trick integration tests mein lagati hain taaki N+1 wapas na aaye."
            }
          },
          {
            code: "_ = db.Tickets.Count(t => t.CustomerId == c.Id);",
            note: {
              en: "A query inside the loop. It runs once for each customer, so 3 more queries. Total 1 + 3 = 4. The program prints <code>4</code>.",
              hi: "Loop के अंदर एक query। यह हर customer के लिए एक बार चलती है, यानी 3 और queries। कुल 1 + 3 = 4। Program <code>4</code> print करता है।",
              hg: "Loop ke andar ek query. Ye har customer ke liye ek baar chalti hai, yaani 3 aur queries. Kul 1 + 3 = 4. Program <code>4</code> print karta hai."
            }
          },
          {
            code: "foreach (var c in db.Customers.Include(c => c.Tickets).OrderBy(c => c.Name))",
            note: {
              en: "<code>Include</code> tells EF to fetch the tickets in the same SQL, with a JOIN. The loop then only reads memory.",
              hi: "<code>Include</code> EF को बताता है कि tickets उसी SQL में, JOIN के साथ, ले आओ। फिर loop सिर्फ़ memory पढ़ता है।",
              hg: "<code>Include</code> EF ko batata hai ki tickets usi SQL mein, JOIN ke saath, le aao. Phir loop sirf memory padhta hai."
            }
          },
          {
            code: "Console.WriteLine($\"With Include: {queries} query\");",
            note: {
              en: "Now the counter says <b>1</b> whatever the number of customers. That number, not the code style, is what proves the fix.",
              hi: "अब counter <b>1</b> बताता है, चाहे customers कितने भी हों। यही गिनती, code का style नहीं, fix को साबित करती है।",
              hg: "Ab counter <b>1</b> batata hai, chaahe customers kitne bhi hon. Yahi ginti, code ka style nahi, fix ko saabit karti hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Judging speed on 5 rows of test data. N+1 only hurts when the data grows, so count queries instead of timing them.</li><li>Calling a repository or service method once per item in a loop. The query hides inside the method.</li><li>Using <code>Include</code> for everything. If you only need a number or two, a projection (next lesson) is lighter.</li></ul>",
          hi: "<ul><li>5 rows के test data पर speed जाँचना। N+1 तभी दुखता है जब data बढ़े, इसलिए समय नहीं, queries गिनो।</li><li>Loop में हर item के लिए repository या service method बुलाना। Query method के अंदर छिपी रहती है।</li><li>हर जगह <code>Include</code> लगाना। अगर एक-दो numbers चाहिए तो projection (अगला पाठ) हल्का है।</li></ul>",
          hg: "<ul><li>5 rows ke test data par speed jaanchna. N+1 tabhi dukhta hai jab data badhe, isliye samay nahi, queries gino.</li><li>Loop mein har item ke liye repository ya service method bulana. Query method ke andar chhipi rehti hai.</li><li>Har jagah <code>Include</code> lagana. Agar ek-do numbers chahiye toh projection (agla lesson) halka hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Check the query count whenever a loop over database rows touches a navigation property or calls a method that queries. A loop over 3 fixed settings rows is fine; measure before you optimise.</p>",
          hi: "<p>जब भी database rows पर चलने वाला loop किसी navigation property को छुए या query करने वाला method बुलाए, query की गिनती जाँचो। 3 fixed settings rows पर loop ठीक है; optimise करने से पहले नापो।</p>",
          hg: "<p>Jab bhi database rows par chalne wala loop kisi navigation property ko chhue ya query karne wala method bulaye, query ki ginti jaancho. 3 fixed settings rows par loop theek hai; optimise karne se pehle naapo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Print each customer with the number of their <b>Open</b> tickets (<code>Asha: 1 open</code>, <code>Ravi: 1 open</code>) and then <code>Queries: 1</code>, without using <code>Include</code>.</p>",
            hi: "<p>हर customer के साथ उसके <b>Open</b> tickets की संख्या print करो (<code>Asha: 1 open</code>, <code>Ravi: 1 open</code>) और फिर <code>Queries: 1</code>, <code>Include</code> के बिना।</p>",
            hg: "<p>Har customer ke saath uske <b>Open</b> tickets ki sankhya print karo (<code>Asha: 1 open</code>, <code>Ravi: 1 open</code>) aur phir <code>Queries: 1</code>, <code>Include</code> ke bina.</p>"
          },
          hint: {
            en: "<p>Use <code>Select</code> to build <code>new { c.Name, Open = c.Tickets.Count(...) }</code>. EF turns the count into a subquery inside the same SQL.</p>",
            hi: "<p><code>Select</code> से <code>new { c.Name, Open = c.Tickets.Count(...) }</code> बनाओ। EF गिनती को उसी SQL के अंदर subquery बना देता है।</p>",
            hg: "<p><code>Select</code> se <code>new { c.Name, Open = c.Tickets.Count(...) }</code> banao. EF ginti ko usi SQL ke andar subquery bana deta hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one projection query",
              hi: "हल: एक projection query",
              hg: "Solution: ek projection query"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Diagnostics;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nint queries = 0;\nvar options = new DbContextOptionsBuilder<CrmContext>()\n    .UseSqlite(connection)\n    .LogTo(_ => queries++, [RelationalEventId.CommandExecuted])\n    .Options;\n\nusing var db = new CrmContext(options);\ndb.Database.EnsureCreated();\ndb.Customers.AddRange(\n    new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" }, new SupportTicket { Id = 502, Issue = \"Wrong bill\", Status = \"Closed\" } } },\n    new Customer { Name = \"Ravi\", Tickets = { new SupportTicket { Id = 503, Issue = \"Slow internet\" } } });\ndb.SaveChanges();\n\nqueries = 0;\nvar report = db.Customers.OrderBy(c => c.Name)\n    .Select(c => new { c.Name, Open = c.Tickets.Count(t => t.Status == \"Open\") })   // one query, no Include needed\n    .ToList();\nforeach (var r in report)\n    Console.WriteLine($\"{r.Name}: {r.Open} open\");\nConsole.WriteLine($\"Queries: {queries}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            expected: "Asha: 1 open\nRavi: 1 open\nQueries: 1",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "A page loads 200 customers, then reads <code>db.Tickets.Count(...)</code> for each one inside a <code>foreach</code>. How many queries does it send?",
            hi: "एक page 200 customers load करता है, फिर <code>foreach</code> के अंदर हर एक के लिए <code>db.Tickets.Count(...)</code> पढ़ता है। कितनी queries जाती हैं?",
            hg: "Ek page 200 customers load karta hai, phir <code>foreach</code> ke andar har ek ke liye <code>db.Tickets.Count(...)</code> padhta hai. Kitni queries jaati hain?"
          },
          options: [
            {
              en: "200 (one per customer)",
              hi: "200 (हर customer की एक)",
              hg: "200 (har customer ki ek)"
            },
            {
              en: "1 (one query for everything)",
              hi: "1 (सबके लिए एक query)",
              hg: "1 (sabke liye ek query)"
            },
            {
              en: "201 (1 + 200)",
              hi: "201 (यानी 1 + 200)",
              hg: "201 (yaani 1 + 200)"
            },
            {
              en: "2 (one per table)",
              hi: "2 (हर table की एक)",
              hg: "2 (har table ki ek)"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>One query for the customers plus one for each of the 200: 201. That is the N+1 pattern. An <code>Include</code> or a projection brings it back to 1.</p>",
            hi: "<p>Customers के लिए एक query और 200 में से हर एक के लिए एक: 201। यही N+1 pattern है। <code>Include</code> या projection इसे वापस 1 पर ले आता है।</p>",
            hg: "<p>Customers ke liye ek query aur 200 mein se har ek ke liye ek: 201. Yahi N+1 pattern hai. <code>Include</code> ya projection ise wapas 1 par le aata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>N+1 = 1 query for the parents + 1 per parent inside a loop.</li><li>Find it by counting commands: <code>ToQueryString()</code> for one query, <code>LogTo</code> for all.</li><li>Fix it by loading in one query: <code>Include</code> or a projection.</li></ul>",
          hi: "<ul><li>N+1 = parents के लिए 1 query + loop में हर parent के लिए 1।</li><li>Commands गिनकर पकड़ो: एक query के लिए <code>ToQueryString()</code>, सब के लिए <code>LogTo</code>।</li><li>एक ही query में load करके ठीक करो: <code>Include</code> या projection।</li></ul>",
          hg: "<ul><li>N+1 = parents ke liye 1 query + loop mein har parent ke liye 1.</li><li>Commands ginkar pakdo: ek query ke liye <code>ToQueryString()</code>, sab ke liye <code>LogTo</code>.</li><li>Ek hi query mein load karke theek karo: <code>Include</code> ya projection.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Counting SQL commands: the N+1 loop vs Include",
            hi: "SQL commands की गिनती: N+1 loop बनाम Include",
            hg: "SQL commands ki ginti: N+1 loop banaam Include"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Diagnostics;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nint queries = 0;\nvar options = new DbContextOptionsBuilder<CrmContext>()\n    .UseSqlite(connection)\n    .LogTo(_ => queries++, [RelationalEventId.CommandExecuted])   // count every SQL command\n    .Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    db.Customers.AddRange(\n        new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" }, new SupportTicket { Id = 502, Issue = \"Wrong bill\" } } },\n        new Customer { Name = \"Ravi\", Tickets = { new SupportTicket { Id = 503, Issue = \"Slow internet\" } } },\n        new Customer { Name = \"Meena\", Tickets = { new SupportTicket { Id = 504, Issue = \"No signal\" } } });\n    db.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))\n{\n    queries = 0;\n    foreach (var c in db.Customers.ToList())                  // 1 query for the customers ...\n        _ = db.Tickets.Count(t => t.CustomerId == c.Id);      // ... plus 1 more for EACH customer: N+1\n    Console.WriteLine($\"N+1 loop: {queries} queries\");\n}\n\nusing (var db = new CrmContext(options))\n{\n    queries = 0;\n    foreach (var c in db.Customers.Include(c => c.Tickets).OrderBy(c => c.Name))   // one JOIN query\n        Console.WriteLine($\"{c.Name}: {c.Tickets.Count} ticket(s)\");\n    Console.WriteLine($\"With Include: {queries} query\");\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "N+1 loop: 4 queries\nAsha: 2 ticket(s)\nMeena: 1 ticket(s)\nRavi: 1 ticket(s)\nWith Include: 1 query",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "projection",
      depth: "short",
      title: {
        en: "Projections: select only what the screen needs",
        hi: "Projections: सिर्फ़ वही select करो जो screen को चाहिए",
        hg: "Projections: sirf wahi select karo jo screen ko chahiye"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 fixed N+1 with <code>Include</code>, which still loads whole tickets. Often the screen needs two columns or one number. Day 4's <code>Select</code> becomes a SQL <code>SELECT</code> list here: you decide the columns, and EF writes exactly those.",
          hi: "पाठ 1 में हमने N+1 को <code>Include</code> से ठीक किया, जो फिर भी पूरे tickets load करता है। अक्सर screen को दो columns या एक number चाहिए। Day 4 का <code>Select</code> यहाँ SQL की <code>SELECT</code> list बन जाता है: columns तुम चुनते हो, और EF ठीक वही लिखता है।",
          hg: "Lesson 1 mein humne N+1 ko <code>Include</code> se theek kiya, jo phir bhi poore tickets load karta hai. Aksar screen ko do columns ya ek number chahiye. Day 4 ka <code>Select</code> yahan SQL ki <code>SELECT</code> list ban jaata hai: columns tum chunte ho, aur EF theek wahi likhta hai."
        },
        what: {
          en: "<p>A <b>projection</b> is a <code>Select</code> that builds a small DTO (or anonymous type) instead of returning the whole entity. EF puts only those columns in the SQL, does counts and sums inside the database, and does not track the result.</p>",
          hi: "<p><b>Projection</b> वह <code>Select</code> है जो पूरा entity लौटाने की जगह एक छोटा DTO (या anonymous type) बनाता है। EF SQL में सिर्फ़ वही columns रखता है, counts और sums database के अंदर करता है, और नतीजे को track नहीं करता।</p>",
          hg: "<p><b>Projection</b> woh <code>Select</code> hai jo poora entity lautane ki jagah ek chhota DTO (ya anonymous type) banata hai. EF SQL mein sirf wahi columns rakhta hai, counts aur sums database ke andar karta hai, aur nateeje ko track nahi karta.</p>"
        },
        why: {
          en: "<p>A list screen that shows ticket id and issue should not download every column of every row, or keep a tracked copy of each. Less data on the wire, less memory, and the database can do the counting it is good at.</p>",
          hi: "<p>जो list screen ticket id और issue दिखाती है, उसे हर row का हर column download नहीं करना चाहिए, न हर एक की tracked copy रखनी चाहिए। Wire पर कम data, कम memory, और गिनती का काम database करता है जिसमें वह माहिर है।</p>",
          hg: "<p>Jo list screen ticket id aur issue dikhati hai, use har row ka har column download nahi karna chahiye, na har ek ki tracked copy rakhni chahiye. Wire par kam data, kam memory, aur ginti ka kaam database karta hai jismein woh maahir hai.</p>"
        },
        analogy: {
          en: "<p>Train ticket reservation chart. The chart pasted on the platform shows only coach, seat and name. It does not show your Aadhaar, phone and address, although the railway holds them. A projection is that chart: the full record stays in the database, the screen gets what it needs.</p>",
          hi: "<p>Train की reservation chart। Platform पर लगी chart में सिर्फ़ coach, seat और नाम होता है। उसमें तुम्हारा Aadhaar, phone और पता नहीं होता, भले रेलवे के पास हो। Projection वही chart है: पूरा record database में रहता है, screen को वही मिलता है जो चाहिए।</p>",
          hg: "<p>Train ki reservation chart. Platform par lagi chart mein sirf coach, seat aur naam hota hai. Usmein tumhara Aadhaar, phone aur pata nahi hota, bhale railway ke paas ho. Projection wahi chart hai: poora record database mein rehta hai, screen ko wahi milta hai jo chahiye.</p>"
        },
        lines: [
          {
            code: "Console.WriteLine(\"Whole entity: \" + db.Tickets.ToQueryString().ReplaceLineEndings(\" \"));",
            note: {
              en: "<code>ToQueryString()</code> shows the SQL without running it. For the whole entity EF lists <b>every</b> mapped column: Id, CustomerId, Issue, Status. <code>ReplaceLineEndings(\" \")</code> only puts the SQL on one line.",
              hi: "<code>ToQueryString()</code> SQL को चलाए बिना दिखाता है। पूरे entity के लिए EF <b>हर</b> mapped column लिखता है: Id, CustomerId, Issue, Status। <code>ReplaceLineEndings(\" \")</code> सिर्फ़ SQL को एक line में रखता है।",
              hg: "<code>ToQueryString()</code> SQL ko chalaye bina dikhata hai. Poore entity ke liye EF <b>har</b> mapped column likhta hai: Id, CustomerId, Issue, Status. <code>ReplaceLineEndings(\" \")</code> sirf SQL ko ek line mein rakhta hai."
            }
          },
          {
            code: "var rows = db.Tickets.Select(t => new TicketRow(t.Id, t.Issue));",
            note: {
              en: "The projection. The SQL now lists only <code>Id</code> and <code>Issue</code>. Compare the two printed SQL lines.",
              hi: "Projection। अब SQL में सिर्फ़ <code>Id</code> और <code>Issue</code> हैं। दोनों print हुई SQL lines की तुलना करो।",
              hg: "Projection. Ab SQL mein sirf <code>Id</code> aur <code>Issue</code> hain. Dono print hui SQL lines ki tulna karo."
            }
          },
          {
            code: ".Select(c => new CustomerSummary(c.Name, c.Tickets.Count(t => t.Status == \"Open\")))",
            note: {
              en: "A count over a navigation. EF writes a subquery <code>COUNT(*)</code> in the same SQL, so only a name and a number come back per customer. No <code>Include</code> needed.",
              hi: "Navigation पर गिनती। EF उसी SQL में <code>COUNT(*)</code> का subquery लिखता है, इसलिए हर customer का सिर्फ़ नाम और एक number लौटता है। <code>Include</code> की ज़रूरत नहीं।",
              hg: "Navigation par ginti. EF usi SQL mein <code>COUNT(*)</code> ka subquery likhta hai, isliye har customer ka sirf naam aur ek number lautta hai. <code>Include</code> ki zaroorat nahi."
            }
          },
          {
            code: "public record TicketRow(int Id, string Issue);",
            note: {
              en: "The DTO is a one-line <code>record</code> (Day 1). It is not an entity, so EF does not track it: you cannot save changes through it.",
              hi: "DTO एक line का <code>record</code> है (Day 1)। यह entity नहीं है, इसलिए EF इसे track नहीं करता: इसके ज़रिए changes save नहीं हो सकते।",
              hg: "DTO ek line ka <code>record</code> hai (Day 1). Ye entity nahi hai, isliye EF ise track nahi karta: iske zariye changes save nahi ho sakte."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Projecting, changing the DTO and expecting <code>SaveChanges()</code> to save it. A DTO is a copy; to update, load the real entity.</li><li>Writing <code>Include</code> and then a <code>Select</code> that does not use the entity. EF ignores the <code>Include</code>.</li><li>Calling your own C# method inside the <code>Select</code> for logic SQL could do. It runs in memory after the rows arrive and hides work from the database.</li></ul>",
          hi: "<ul><li>Projection करना, DTO बदलना और उम्मीद करना कि <code>SaveChanges()</code> उसे save करेगा। DTO एक copy है; update करना हो तो असली entity load करो।</li><li><code>Include</code> लगाना और फिर ऐसा <code>Select</code> जो entity इस्तेमाल नहीं करता। EF <code>Include</code> को अनदेखा कर देता है।</li><li><code>Select</code> में अपना C# method बुलाना उस logic के लिए जो SQL कर सकता था। वह rows आने के बाद memory में चलता है और database से काम छिपाता है।</li></ul>",
          hg: "<ul><li>Projection karna, DTO badalna aur ummeed karna ki <code>SaveChanges()</code> use save karega. DTO ek copy hai; update karna ho toh asli entity load karo.</li><li><code>Include</code> lagana aur phir aisa <code>Select</code> jo entity use nahi karta. EF <code>Include</code> ko andekha kar deta hai.</li><li><code>Select</code> mein apna C# method bulana us logic ke liye jo SQL kar sakta tha. Woh rows aane ke baad memory mein chalta hai aur database se kaam chhipata hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a projection for every read-only query that feeds a list, an API response or a report. When you will <b>change</b> the data, load the tracked entity instead.</p>",
          hi: "<p>हर सिर्फ़-पढ़ने वाली query के लिए projection इस्तेमाल करो जो list, API response या report बनाती है। जब data <b>बदलना</b> हो, तब tracked entity load करो।</p>",
          hg: "<p>Har sirf-padhne wali query ke liye projection use karo jo list, API response ya report banati hai. Jab data <b>badalna</b> ho, tab tracked entity load karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Print the SQL for <b>open</b> tickets ordered by <code>Id</code>, selecting only <code>Id</code> and <code>Issue</code>, then print each row as <code>501: Router not working</code>.</p>",
            hi: "<p><b>Open</b> tickets की SQL print करो, <code>Id</code> से sort करके, सिर्फ़ <code>Id</code> और <code>Issue</code> select करके, फिर हर row <code>501: Router not working</code> की तरह print करो।</p>",
            hg: "<p><b>Open</b> tickets ki SQL print karo, <code>Id</code> se sort karke, sirf <code>Id</code> aur <code>Issue</code> select karke, phir har row <code>501: Router not working</code> ki tarah print karo.</p>"
          },
          hint: {
            en: "<p>Put <code>Where</code> and <code>OrderBy</code> first, then <code>Select(t =&gt; new { t.Id, t.Issue })</code>. You can print <code>query.ToQueryString()</code> and also loop over <code>query</code>.</p>",
            hi: "<p>पहले <code>Where</code> और <code>OrderBy</code> लगाओ, फिर <code>Select(t =&gt; new { t.Id, t.Issue })</code>। <code>query.ToQueryString()</code> print कर सकते हो और <code>query</code> पर loop भी चला सकते हो।</p>",
            hg: "<p>Pehle <code>Where</code> aur <code>OrderBy</code> lagao, phir <code>Select(t =&gt; new { t.Id, t.Issue })</code>. <code>query.ToQueryString()</code> print kar sakte ho aur <code>query</code> par loop bhi chala sakte ho.</p>"
          },
          solution: {
            caption: {
              en: "Solution: two columns for open tickets",
              hi: "हल: open tickets के लिए दो columns",
              hg: "Solution: open tickets ke liye do columns"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing var db = new CrmContext(options);\ndb.Database.EnsureCreated();\ndb.Customers.AddRange(\n    new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" }, new SupportTicket { Id = 502, Issue = \"Wrong bill\", Status = \"Closed\" } } },\n    new Customer { Name = \"Ravi\", Tickets = { new SupportTicket { Id = 503, Issue = \"Slow internet\" } } });\ndb.SaveChanges();\n\nvar query = db.Tickets.Where(t => t.Status == \"Open\").OrderBy(t => t.Id)\n    .Select(t => new { t.Id, t.Issue });           // only two columns\nConsole.WriteLine(query.ToQueryString().ReplaceLineEndings(\" \"));\nforeach (var t in query)\n    Console.WriteLine($\"{t.Id}: {t.Issue}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            expected: "SELECT \"t\".\"Id\", \"t\".\"Issue\" FROM \"Tickets\" AS \"t\" WHERE \"t\".\"Status\" = 'Open' ORDER BY \"t\".\"Id\"\n501: Router not working\n503: Slow internet",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "Which query sends the fewest columns for a screen that shows only ticket ids?",
            hi: "जो screen सिर्फ़ ticket ids दिखाती है, उसके लिए कौन-सी query सबसे कम columns भेजती है?",
            hg: "Jo screen sirf ticket ids dikhati hai, uske liye kaun-si query sabse kam columns bhejti hai?"
          },
          options: [
            {
              en: "<code>db.Tickets.ToList().Select(t =&gt; t.Id)</code> (all columns first)",
              hi: "<code>db.Tickets.ToList().Select(t =&gt; t.Id)</code> (पहले सारे columns)",
              hg: "<code>db.Tickets.ToList().Select(t =&gt; t.Id)</code> (pehle saare columns)"
            },
            {
              en: "<code>db.Tickets.Include(t =&gt; t.Customer)</code> (all columns, plus customers)",
              hi: "<code>db.Tickets.Include(t =&gt; t.Customer)</code> (सारे columns, और customers भी)",
              hg: "<code>db.Tickets.Include(t =&gt; t.Customer)</code> (saare columns, aur customers bhi)"
            },
            {
              en: "<code>db.Tickets.AsNoTracking()</code> (all columns)",
              hi: "<code>db.Tickets.AsNoTracking()</code> (सारे columns)",
              hg: "<code>db.Tickets.AsNoTracking()</code> (saare columns)"
            },
            {
              en: "<code>db.Tickets.Select(t =&gt; t.Id)</code> (one column)",
              hi: "<code>db.Tickets.Select(t =&gt; t.Id)</code> (सिर्फ़ एक column)",
              hg: "<code>db.Tickets.Select(t =&gt; t.Id)</code> (sirf ek column)"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Only a <code>Select</code> on the <code>IQueryable</code> changes the SQL column list. <code>AsNoTracking()</code> skips tracking but still reads every column, and <code>ToList()</code> before <code>Select</code> loads whole rows first and projects in memory.</p>",
            hi: "<p>सिर्फ़ <code>IQueryable</code> पर <code>Select</code> SQL की column list बदलता है। <code>AsNoTracking()</code> tracking छोड़ता है पर फिर भी हर column पढ़ता है, और <code>Select</code> से पहले <code>ToList()</code> पहले पूरी rows लाता है और memory में projection करता है।</p>",
            hg: "<p>Sirf <code>IQueryable</code> par <code>Select</code> SQL ki column list badalta hai. <code>AsNoTracking()</code> tracking chhodta hai par phir bhi har column padhta hai, aur <code>Select</code> se pehle <code>ToList()</code> pehle poori rows laata hai aur memory mein projection karta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>Select</code> into a DTO = only those columns in the SQL.</li><li>Counts and sums run inside the database; no <code>Include</code> needed.</li><li>Projections are not tracked: use them for reads, load the entity to update.</li></ul>",
          hi: "<ul><li>DTO में <code>Select</code> = SQL में सिर्फ़ वही columns।</li><li>Counts और sums database के अंदर चलते हैं; <code>Include</code> की ज़रूरत नहीं।</li><li>Projections track नहीं होते: पढ़ने के लिए इस्तेमाल करो, update के लिए entity load करो।</li></ul>",
          hg: "<ul><li>DTO mein <code>Select</code> = SQL mein sirf wahi columns.</li><li>Counts aur sums database ke andar chalte hain; <code>Include</code> ki zaroorat nahi.</li><li>Projections track nahi hote: padhne ke liye use karo, update ke liye entity load karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Whole entity vs projection: the SQL EF writes",
            hi: "पूरा entity बनाम projection: EF का लिखा SQL",
            hg: "Poora entity banaam projection: EF ka likha SQL"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    db.Customers.AddRange(\n        new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" }, new SupportTicket { Id = 502, Issue = \"Wrong bill\", Status = \"Closed\" } } },\n        new Customer { Name = \"Ravi\", Tickets = { new SupportTicket { Id = 503, Issue = \"Slow internet\" } } });\n    db.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))\n{\n    Console.WriteLine(\"Whole entity: \" + db.Tickets.ToQueryString().ReplaceLineEndings(\" \"));\n    var rows = db.Tickets.Select(t => new TicketRow(t.Id, t.Issue));\n    Console.WriteLine(\"Projection:   \" + rows.ToQueryString().ReplaceLineEndings(\" \"));\n\n    var summaries = db.Customers.OrderBy(c => c.Name)\n        .Select(c => new CustomerSummary(c.Name, c.Tickets.Count(t => t.Status == \"Open\")))   // COUNT runs in the database\n        .ToList();\n    foreach (var s in summaries)\n        Console.WriteLine($\"{s.Name}: {s.OpenTickets} open\");\n}\n\npublic record TicketRow(int Id, string Issue);\npublic record CustomerSummary(string Name, int OpenTickets);\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "Whole entity: SELECT \"t\".\"Id\", \"t\".\"CustomerId\", \"t\".\"Issue\", \"t\".\"Status\" FROM \"Tickets\" AS \"t\"\nProjection:   SELECT \"t\".\"Id\", \"t\".\"Issue\" FROM \"Tickets\" AS \"t\"\nAsha: 1 open\nRavi: 1 open",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "raw-sql",
      depth: "short",
      title: {
        en: "Raw SQL safely: FromSql and SQL injection",
        hi: "Raw SQL सुरक्षित तरीके से: FromSql और SQL injection",
        hg: "Raw SQL surakshit tareeke se: FromSql aur SQL injection"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1 and 2 stayed with LINQ, and EF wrote the SQL. Sometimes you already have a tuned SQL query or a stored procedure and want to use it. You know SQL, so this is easy; the one new danger is building the text from user input. Day 5's <code>CrmContext</code> and tickets are unchanged.",
          hi: "पाठ 1 और 2 में हम LINQ पर रहे और SQL EF ने लिखा। कभी-कभी तुम्हारे पास पहले से tuned SQL query या stored procedure होता है और उसे इस्तेमाल करना होता है। SQL तुम जानते हो, इसलिए यह आसान है; बस एक नया ख़तरा user input से text बनाना है। Day 5 का <code>CrmContext</code> और tickets वैसे ही हैं।",
          hg: "Lessons 1 aur 2 mein hum LINQ par rahe aur SQL EF ne likha. Kabhi-kabhi tumhare paas pehle se tuned SQL query ya stored procedure hota hai aur use chalana hota hai. SQL tum jaante ho, isliye ye aasaan hai; bas ek naya khatra user input se text banana hai. Day 5 ka <code>CrmContext</code> aur tickets waise hi hain."
        },
        what: {
          en: "<p><code>FromSql($\"...\")</code> runs your own SQL and returns entities. Because it takes an interpolated string, every <code>{value}</code> is sent as a <b>parameter</b>, never pasted into the text. <code>SqlQuery&lt;T&gt;</code> does the same for plain values and DTOs.</p>",
          hi: "<p><code>FromSql($\"...\")</code> तुम्हारी अपनी SQL चलाता है और entities लौटाता है। यह interpolated string लेता है, इसलिए हर <code>{value}</code> <b>parameter</b> बनकर जाता है, text में चिपकाया नहीं जाता। <code>SqlQuery&lt;T&gt;</code> सादे values और DTOs के लिए यही करता है।</p>",
          hg: "<p><code>FromSql($\"...\")</code> tumhari apni SQL chalata hai aur entities lautata hai. Ye interpolated string leta hai, isliye har <code>{value}</code> <b>parameter</b> banakar jaata hai, text mein chipkaya nahi jaata. <code>SqlQuery&lt;T&gt;</code> saade values aur DTOs ke liye yahi karta hai.</p>"
        },
        why: {
          en: "<p><b>SQL injection</b> is when a user types SQL code into a text box and your program runs it. A parameter is treated as data only, so the trick fails. One careless string concatenation can leak or delete the whole customer table.</p>",
          hi: "<p><b>SQL injection</b> तब होता है जब user text box में SQL code लिख दे और तुम्हारा program उसे चला दे। Parameter सिर्फ़ data माना जाता है, इसलिए यह चाल नाकाम हो जाती है। एक लापरवाह string जोड़ पूरी customer table leak या delete करवा सकती है।</p>",
          hg: "<p><b>SQL injection</b> tab hota hai jab user text box mein SQL code likh de aur tumhara program use chala de. Parameter sirf data maana jaata hai, isliye ye chaal naakaam ho jaati hai. Ek laparwah string jod poori customer table leak ya delete karwa sakti hai.</p>"
        },
        analogy: {
          en: "<p>A cheque with the amount written in words. A blank \"pay\" line can be filled by anyone, so the bank prints the amount in a separate boxed field that is only ever read as a number. A parameter is that boxed field. Concatenation is leaving a blank line and letting the customer write whatever instructions he likes.</p>",
          hi: "<p>Cheque जिस पर रक़म शब्दों में लिखी हो। ख़ाली \"pay\" line कोई भी भर सकता है, इसलिए bank रक़म अलग डिब्बे में छापता है जो सिर्फ़ number की तरह पढ़ा जाता है। Parameter वही डिब्बा है। Concatenation ख़ाली line छोड़ना है जहाँ customer जो चाहे instructions लिख दे।</p>",
          hg: "<p>Cheque jis par raqam shabdon mein likhi ho. Khaali \"pay\" line koi bhi bhar sakta hai, isliye bank raqam alag dibbe mein chhapta hai jo sirf number ki tarah padha jaata hai. Parameter wahi dibba hai. Concatenation khaali line chhodna hai jahan customer jo chahe instructions likh de.</p>"
        },
        focus: {
          caption: {
            en: "Never do this: values glued into the SQL text",
            hi: "यह कभी मत करो: values को SQL text में चिपकाना",
            hg: "Ye kabhi mat karo: values ko SQL text mein chipkana"
          },
          src: "// DANGEROUS: the text is built first, so the user's quote ends your string.\nvar userInput = \"Open' OR '1'='1\";\nvar sql = \"SELECT * FROM Tickets WHERE Status = '\" + userInput + \"'\";\ndb.Tickets.FromSqlRaw(sql);   // the WHERE becomes ... Status = 'Open' OR '1'='1'  -> EVERY ticket\n\n// SAFE: an interpolated string, so {userInput} is sent as a parameter\ndb.Tickets.FromSql($\"SELECT * FROM Tickets WHERE Status = {userInput}\");",
          check: "none"
        },
        lines: [
          {
            code: "var open = db.Tickets.FromSql($\"SELECT * FROM Tickets WHERE Status = {status}\")",
            note: {
              en: "The <code>$\"...\"</code> string is not formatted by C#. <code>FromSql</code> takes it as a <code>FormattableString</code> and sends <code>{status}</code> as the parameter <code>@p0</code>. The SQL must return all columns of <code>SupportTicket</code>.",
              hi: "<code>$\"...\"</code> string को C# format नहीं करता। <code>FromSql</code> इसे <code>FormattableString</code> की तरह लेता है और <code>{status}</code> को parameter <code>@p0</code> बनाकर भेजता है। SQL को <code>SupportTicket</code> के सारे columns लौटाने होंगे।",
              hg: "<code>$\"...\"</code> string ko C# format nahi karta. <code>FromSql</code> ise <code>FormattableString</code> ki tarah leta hai aur <code>{status}</code> ko parameter <code>@p0</code> banakar bhejta hai. SQL ko <code>SupportTicket</code> ke saare columns lautane honge."
            }
          },
          {
            code: ".OrderBy(t => t.Id)",
            note: {
              en: "Your raw SELECT becomes a subquery, so LINQ operators like <code>OrderBy</code>, <code>Where</code> and <code>Count</code> still run in the database on top of it.",
              hi: "तुम्हारा raw SELECT subquery बन जाता है, इसलिए <code>OrderBy</code>, <code>Where</code>, <code>Count</code> जैसे LINQ operators उसके ऊपर database में ही चलते हैं।",
              hg: "Tumhara raw SELECT subquery ban jaata hai, isliye <code>OrderBy</code>, <code>Where</code>, <code>Count</code> jaise LINQ operators uske upar database mein hi chalte hain."
            }
          },
          {
            code: "var userInput = \"Open' OR '1'='1\";",
            note: {
              en: "A typical attack text. It tries to close the quote and add <code>OR 1=1</code>.",
              hi: "एक आम attack text। यह quote बंद करके <code>OR 1=1</code> जोड़ने की कोशिश करता है।",
              hg: "Ek aam attack text. Ye quote band karke <code>OR 1=1</code> jodne ki koshish karta hai."
            }
          },
          {
            code: "var matched = db.Tickets.FromSql($\"SELECT * FROM Tickets WHERE Status = {userInput}\").Count();",
            note: {
              en: "It matches <b>0</b> tickets, because the whole text is compared as one value of <code>Status</code>. No ticket has that status, and nothing was executed as SQL.",
              hi: "यह <b>0</b> tickets match करता है, क्योंकि पूरा text <code>Status</code> की एक value की तरह compare होता है। किसी ticket का ऐसा status नहीं है, और कुछ भी SQL की तरह नहीं चला।",
              hg: "Ye <b>0</b> tickets match karta hai, kyunki poora text <code>Status</code> ki ek value ki tarah compare hota hai. Kisi ticket ka aisa status nahi hai, aur kuch bhi SQL ki tarah nahi chala."
            }
          },
          {
            code: "var closed = db.Database.SqlQuery<int>($\"SELECT COUNT(*) AS Value FROM Tickets WHERE Status = {wanted}\").Single();",
            note: {
              en: "<code>SqlQuery&lt;T&gt;</code> returns non-entity results: a scalar like this <code>int</code> (EF Core 7) or an unmapped DTO (EF Core 8). For a scalar, name the column <code>Value</code>.",
              hi: "<code>SqlQuery&lt;T&gt;</code> non-entity नतीजे लौटाता है: ऐसा scalar <code>int</code> (EF Core 7) या unmapped DTO (EF Core 8)। Scalar के लिए column का नाम <code>Value</code> रखो।",
              hg: "<code>SqlQuery&lt;T&gt;</code> non-entity nateeje lautata hai: aisa scalar <code>int</code> (EF Core 7) ya unmapped DTO (EF Core 8). Scalar ke liye column ka naam <code>Value</code> rakho."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Building the SQL in a string variable first and then passing it to <code>FromSqlRaw</code>. The values are already pasted in; that is SQL injection.</li><li>Trying to parameterise a table or column name. Parameters are only for values; pick names from a fixed allow-list.</li><li>Using raw SQL for simple CRUD where LINQ is shorter and safer.</li></ul>",
          hi: "<ul><li>पहले string variable में SQL बनाना और फिर <code>FromSqlRaw</code> को देना। Values पहले ही चिपक चुकी हैं; यही SQL injection है।</li><li>Table या column के नाम को parameter बनाने की कोशिश। Parameters सिर्फ़ values के लिए हैं; नाम एक तय allow-list से चुनो।</li><li>सादे CRUD के लिए raw SQL जहाँ LINQ छोटा और सुरक्षित है।</li></ul>",
          hg: "<ul><li>Pehle string variable mein SQL banana aur phir <code>FromSqlRaw</code> ko dena. Values pehle hi chipak chuki hain; yahi SQL injection hai.</li><li>Table ya column ke naam ko parameter banane ki koshish. Parameters sirf values ke liye hain; naam ek tay allow-list se chuno.</li><li>Saade CRUD ke liye raw SQL jahan LINQ chhota aur surakshit hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use raw SQL for tuned or complex reports, window functions, query hints and existing stored procedures. Use LINQ for everything else. If you cannot pass a value as a parameter, redesign the code.</p>",
          hi: "<p>Tuned या complex reports, window functions, query hints और मौजूदा stored procedures के लिए raw SQL इस्तेमाल करो। बाकी सब के लिए LINQ। अगर कोई value parameter बनाकर नहीं दे सकते, तो code का design बदलो।</p>",
          hg: "<p>Tuned ya complex reports, window functions, query hints aur maujooda stored procedures ke liye raw SQL use karo. Baaki sab ke liye LINQ. Agar koi value parameter banakar nahi de sakte, toh code ka design badlo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Find tickets whose <code>Issue</code> contains the word in a variable (<code>bill</code>) with <code>FromSql</code> and <code>LIKE</code>, and print <code>502: Wrong bill</code>. Keep the word out of the SQL text.</p>",
            hi: "<p>किसी variable (<code>bill</code>) के word वाले <code>Issue</code> के tickets <code>FromSql</code> और <code>LIKE</code> से ढूँढो, और <code>502: Wrong bill</code> print करो। Word को SQL text से बाहर रखो।</p>",
            hg: "<p>Kisi variable (<code>bill</code>) ke word wale <code>Issue</code> ke tickets <code>FromSql</code> aur <code>LIKE</code> se dhoondho, aur <code>502: Wrong bill</code> print karo. Word ko SQL text se bahar rakho.</p>"
          },
          hint: {
            en: "<p>Build the pattern as a C# value, <code>$\"%{word}%\"</code>, and pass that single variable as <code>{pattern}</code>. The wildcards belong to the value, not the SQL.</p>",
            hi: "<p>Pattern को C# value की तरह बनाओ, <code>$\"%{word}%\"</code>, और वही एक variable <code>{pattern}</code> बनाकर दो। Wildcards value के हैं, SQL के नहीं।</p>",
            hg: "<p>Pattern ko C# value ki tarah banao, <code>$\"%{word}%\"</code>, aur wahi ek variable <code>{pattern}</code> banakar do. Wildcards value ke hain, SQL ke nahi.</p>"
          },
          solution: {
            caption: {
              en: "Solution: LIKE with a parameter",
              hi: "हल: parameter के साथ LIKE",
              hg: "Solution: parameter ke saath LIKE"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing var db = new CrmContext(options);\ndb.Database.EnsureCreated();\ndb.Customers.Add(new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" }, new SupportTicket { Id = 502, Issue = \"Wrong bill\", Status = \"Closed\" } } });\ndb.SaveChanges();\n\nvar word = \"bill\";\nvar pattern = $\"%{word}%\";                          // the wildcards go into the VALUE, not into the SQL text\nvar found = db.Tickets.FromSql($\"SELECT * FROM Tickets WHERE Issue LIKE {pattern}\").ToList();\nforeach (var t in found)\n    Console.WriteLine($\"{t.Id}: {t.Issue}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            expected: "502: Wrong bill",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "Which call is safe against SQL injection?",
            hi: "कौन-सा call SQL injection से सुरक्षित है?",
            hg: "Kaun-sa call SQL injection se surakshit hai?"
          },
          options: [
            {
              en: "<code>FromSqlRaw(\"... WHERE Status = '\" + input + \"'\")</code> (concatenation)",
              hi: "<code>FromSqlRaw(\"... WHERE Status = '\" + input + \"'\")</code> (string जोड़ना)",
              hg: "<code>FromSqlRaw(\"... WHERE Status = '\" + input + \"'\")</code> (string jodna)"
            },
            {
              en: "<code>FromSql($\"... WHERE Status = {input}\")</code> (a parameter)",
              hi: "<code>FromSql($\"... WHERE Status = {input}\")</code> (parameter बनकर जाता है)",
              hg: "<code>FromSql($\"... WHERE Status = {input}\")</code> (parameter banakar jaata hai)"
            },
            {
              en: "<code>FromSqlRaw($\"... WHERE Status = '{input}'\")</code> (interpolated, but raw)",
              hi: "<code>FromSqlRaw($\"... WHERE Status = '{input}'\")</code> (interpolated, पर raw)",
              hg: "<code>FromSqlRaw($\"... WHERE Status = '{input}'\")</code> (interpolated, par raw)"
            },
            {
              en: "Any of them, if the input is trimmed first",
              hi: "इनमें से कोई भी, अगर input पहले trim कर लिया जाए",
              hg: "Inmein se koi bhi, agar input pehle trim kar liya jaaye"
            }
          ],
          answer: 1,
          explain: {
            en: "<p><code>FromSql</code> with an interpolated string sends <code>{input}</code> as a parameter. The other two paste the value into the text before EF sees it (the third looks interpolated but goes to <code>FromSqlRaw</code>, which takes a plain string). Trimming does not stop a quote.</p>",
            hi: "<p>Interpolated string के साथ <code>FromSql</code> <code>{input}</code> को parameter बनाकर भेजता है। बाकी दो EF के देखने से पहले value को text में चिपका देते हैं (तीसरा interpolated दिखता है पर <code>FromSqlRaw</code> में जाता है, जो सादी string लेता है)। Trim करने से quote नहीं रुकता।</p>",
            hg: "<p>Interpolated string ke saath <code>FromSql</code> <code>{input}</code> ko parameter banakar bhejta hai. Baaki do EF ke dekhne se pehle value ko text mein chipka dete hain (teesra interpolated dikhta hai par <code>FromSqlRaw</code> mein jaata hai, jo saadi string leta hai). Trim karne se quote nahi rukta.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>FromSql($\"...{x}\")</code> sends <code>x</code> as a parameter: safe. <code>FromSqlRaw</code> with concatenation is SQL injection.</li><li>Your SELECT becomes a subquery, so LINQ still composes on top.</li><li><code>SqlQuery&lt;T&gt;</code> returns scalars and DTOs; names cannot be parameters.</li></ul>",
          hi: "<ul><li><code>FromSql($\"...{x}\")</code> <code>x</code> को parameter बनाकर भेजता है: सुरक्षित। जोड़ के साथ <code>FromSqlRaw</code> SQL injection है।</li><li>तुम्हारा SELECT subquery बनता है, इसलिए LINQ ऊपर भी चलती है।</li><li><code>SqlQuery&lt;T&gt;</code> scalars और DTOs लौटाता है; नाम parameter नहीं बन सकते।</li></ul>",
          hg: "<ul><li><code>FromSql($\"...{x}\")</code> <code>x</code> ko parameter banakar bhejta hai: surakshit. Jod ke saath <code>FromSqlRaw</code> SQL injection hai.</li><li>Tumhara SELECT subquery banta hai, isliye LINQ upar bhi chalti hai.</li><li><code>SqlQuery&lt;T&gt;</code> scalars aur DTOs lautata hai; naam parameter nahi ban sakte.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "FromSql with parameters, an attack text, and SqlQuery",
            hi: "Parameters के साथ FromSql, attack text और SqlQuery",
            hg: "Parameters ke saath FromSql, attack text aur SqlQuery"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing var db = new CrmContext(options);\ndb.Database.EnsureCreated();\ndb.Customers.Add(new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" }, new SupportTicket { Id = 502, Issue = \"Wrong bill\", Status = \"Closed\" } } });\ndb.SaveChanges();\n\nvar status = \"Open\";\nvar open = db.Tickets.FromSql($\"SELECT * FROM Tickets WHERE Status = {status}\")   // {status} becomes a parameter\n    .OrderBy(t => t.Id)                                                           // LINQ still composes on top\n    .ToList();\nConsole.WriteLine($\"Open tickets: {string.Join(\", \", open.Select(t => t.Id))}\");\n\nvar userInput = \"Open' OR '1'='1\";                                                // an attacker's text\nvar matched = db.Tickets.FromSql($\"SELECT * FROM Tickets WHERE Status = {userInput}\").Count();\nConsole.WriteLine($\"Attack text matched {matched} tickets\");\n\nvar wanted = \"Closed\";\nvar closed = db.Database.SqlQuery<int>($\"SELECT COUNT(*) AS Value FROM Tickets WHERE Status = {wanted}\").Single();\nConsole.WriteLine($\"Closed tickets: {closed}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "Open tickets: 501\nAttack text matched 0 tickets\nClosed tickets: 1",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "transactions",
      depth: "short",
      title: {
        en: "Transactions: all steps or none",
        hi: "Transactions: सारे steps या कोई नहीं",
        hg: "Transactions: saare steps ya koi nahi"
      },
      lesson: {
        buildsOn: {
          en: "Day 5 said <code>SaveChanges()</code> writes everything in one transaction. That covers one save. Real work has several steps: save a ticket, run raw SQL from lesson 3, call another save. This lesson ties them into one all-or-nothing unit.",
          hi: "Day 5 में कहा था कि <code>SaveChanges()</code> सब कुछ एक transaction में लिखता है। यह एक save तक है। असली काम में कई steps होते हैं: ticket save करो, पाठ 3 वाली raw SQL चलाओ, दूसरा save करो। यह पाठ उन्हें एक सब-या-कुछ-नहीं unit में बाँधता है।",
          hg: "Day 5 mein kaha tha ki <code>SaveChanges()</code> sab kuch ek transaction mein likhta hai. Ye ek save tak hai. Asli kaam mein kai steps hote hain: ticket save karo, lesson 3 wali raw SQL chalao, doosra save karo. Ye lesson unhein ek sab-ya-kuch-nahi unit mein baandhta hai."
        },
        what: {
          en: "<p>A <b>transaction</b> makes several database steps succeed or fail together. One <code>SaveChanges()</code> is already atomic. For more steps, call <code>db.Database.BeginTransaction()</code>, do the work, then <code>Commit()</code>. If you never commit, everything is rolled back.</p>",
          hi: "<p><b>Transaction</b> कई database steps को साथ में सफल या असफल करवाता है। एक <code>SaveChanges()</code> पहले से atomic है। ज़्यादा steps के लिए <code>db.Database.BeginTransaction()</code> बुलाओ, काम करो, फिर <code>Commit()</code>। अगर commit नहीं किया, तो सब rollback हो जाता है।</p>",
          hg: "<p><b>Transaction</b> kai database steps ko saath mein safal ya asafal karwata hai. Ek <code>SaveChanges()</code> pehle se atomic hai. Zyada steps ke liye <code>db.Database.BeginTransaction()</code> bulao, kaam karo, phir <code>Commit()</code>. Agar commit nahi kiya, toh sab rollback ho jaata hai.</p>"
        },
        why: {
          en: "<p>Without it, a failure in step 3 leaves steps 1 and 2 in the database: a follow-up ticket exists but the old one is closed for no reason, and the data no longer matches the real story.</p>",
          hi: "<p>इसके बिना, step 3 में fail होने पर steps 1 और 2 database में रह जाते हैं: follow-up ticket बन गया पर पुराना बिना वजह बंद हो गया, और data असली कहानी से मेल नहीं खाता।</p>",
          hg: "<p>Iske bina, step 3 mein fail hone par steps 1 aur 2 database mein reh jaate hain: follow-up ticket ban gaya par purana bina wajah band ho gaya, aur data asli kahani se mel nahi khaata.</p>"
        },
        analogy: {
          en: "<p>An IRCTC booking. You pick seats, the payment goes through, the ticket is issued. If the payment fails, the seats you held are released and no money is taken. Either the whole booking happens or none of it does. <code>Commit()</code> is \"booking confirmed\"; <code>Rollback()</code> is \"seats released\".</p>",
          hi: "<p>IRCTC की booking। तुम seats चुनते हो, payment होता है, ticket बनता है। Payment fail हो तो रोकी हुई seats छूट जाती हैं और पैसे नहीं कटते। या तो पूरी booking होती है या कुछ नहीं। <code>Commit()</code> \"booking confirmed\" है; <code>Rollback()</code> \"seats छूट गईं\" है।</p>",
          hg: "<p>IRCTC ki booking. Tum seats chunte ho, payment hota hai, ticket banta hai. Payment fail ho toh roki hui seats chhoot jaati hain aur paise nahi katte. Ya toh poori booking hoti hai ya kuch nahi. <code>Commit()</code> \"booking confirmed\" hai; <code>Rollback()</code> \"seats chhoot gayin\" hai.</p>"
        },
        lines: [
          {
            code: "using var tx = db.Database.BeginTransaction();",
            note: {
              en: "Opens a transaction on the connection. From here, every <code>SaveChanges()</code> and raw command on this context joins it. <code>using</code> matters: disposing an uncommitted transaction rolls it back.",
              hi: "Connection पर transaction खोलता है। यहाँ से इस context का हर <code>SaveChanges()</code> और raw command उसमें शामिल होता है। <code>using</code> ज़रूरी है: बिना commit वाला transaction dispose होने पर rollback हो जाता है।",
              hg: "Connection par transaction kholta hai. Yahan se is context ka har <code>SaveChanges()</code> aur raw command usmein shaamil hota hai. <code>using</code> zaroori hai: bina commit wala transaction dispose hone par rollback ho jaata hai."
            }
          },
          {
            code: "db.Database.ExecuteSql($\"UPDATE Tickets SET Status = 'Closed' WHERE Id = 501\");",
            note: {
              en: "Step 2: a raw command (lesson 3) in the same transaction. EF knows nothing about this change; the transaction still covers it.",
              hi: "Step 2: उसी transaction में raw command (पाठ 3)। EF को इस बदलाव का पता नहीं; transaction फिर भी इसे सँभालता है।",
              hg: "Step 2: usi transaction mein raw command (lesson 3). EF ko is badlaav ka pata nahi; transaction phir bhi ise sambhalta hai."
            }
          },
          {
            code: "tx.Commit();",
            note: {
              en: "Only now do both steps become permanent. The \"Committed\" run ends with 1 open and 1 closed ticket.",
              hi: "अब जाकर दोनों steps पक्के होते हैं। \"Committed\" वाला run 1 open और 1 closed ticket पर ख़त्म होता है।",
              hg: "Ab jaakar dono steps pakke hote hain. \"Committed\" wala run 1 open aur 1 closed ticket par khatam hota hai."
            }
          },
          {
            code: "tx.Rollback();",
            note: {
              en: "On failure both steps are undone: the first run prints <code>Open: 1, Closed: 0</code>, as if nothing happened. We call it explicitly for clarity; disposing would do the same.",
              hi: "Fail होने पर दोनों steps वापस हो जाते हैं: पहला run <code>Open: 1, Closed: 0</code> print करता है, जैसे कुछ हुआ ही नहीं। हम साफ़ दिखाने के लिए इसे खुद बुलाते हैं; dispose भी यही करता।",
              hg: "Fail hone par dono steps wapas ho jaate hain: pehla run <code>Open: 1, Closed: 0</code> print karta hai, jaise kuch hua hi nahi. Hum saaf dikhane ke liye ise khud bulate hain; dispose bhi yahi karta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Opening a transaction around one <code>SaveChanges()</code>. It is already atomic; the extra transaction only adds cost.</li><li>Forgetting <code>Commit()</code>. Nothing is saved, and no error is shown.</li><li>Holding a transaction open while calling an HTTP API or sending an SMS. Keep transactions short: database work only.</li></ul>",
          hi: "<ul><li>एक ही <code>SaveChanges()</code> के आसपास transaction खोलना। वह पहले से atomic है; extra transaction सिर्फ़ खर्च बढ़ाता है।</li><li><code>Commit()</code> भूल जाना। कुछ save नहीं होता, और कोई error भी नहीं दिखता।</li><li>Transaction खुला रखकर HTTP API बुलाना या SMS भेजना। Transactions छोटे रखो: सिर्फ़ database का काम।</li></ul>",
          hg: "<ul><li>Ek hi <code>SaveChanges()</code> ke aaspaas transaction kholna. Woh pehle se atomic hai; extra transaction sirf kharcha badhata hai.</li><li><code>Commit()</code> bhool jaana. Kuch save nahi hota, aur koi error bhi nahi dikhta.</li><li>Transaction khula rakhkar HTTP API bulana ya SMS bhejna. Transactions chhote rakho: sirf database ka kaam.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use an explicit transaction when several writes form <b>one business operation</b>: they must all succeed or all fail. For one <code>SaveChanges()</code>, or reads only, you do not need one.</p>",
          hi: "<p>जब कई writes मिलकर <b>एक business operation</b> बनें, तब explicit transaction इस्तेमाल करो: सब सफल हों या सब फ़ेल। एक <code>SaveChanges()</code> या सिर्फ़ reads के लिए ज़रूरत नहीं।</p>",
          hg: "<p>Jab kai writes milkar <b>ek business operation</b> banein, tab explicit transaction use karo: sab safal hon ya sab fail. Ek <code>SaveChanges()</code> ya sirf reads ke liye zaroorat nahi.</p>"
        },
        exercise: {
          task: {
            en: "<p>Run the same two steps in a transaction but <b>never call Commit()</b>. Print <code>Inside: 2 rows</code> while it is open, then <code>After: 1 rows, 0 closed</code> from a new context.</p>",
            hi: "<p>वही दो steps एक transaction में चलाओ पर <b>Commit() कभी मत बुलाओ</b>। खुले रहते समय <code>Inside: 2 rows</code> print करो, फिर नए context से <code>After: 1 rows, 0 closed</code>।</p>",
            hg: "<p>Wahi do steps ek transaction mein chalao par <b>Commit() kabhi mat bulao</b>. Khule rehte samay <code>Inside: 2 rows</code> print karo, phir naye context se <code>After: 1 rows, 0 closed</code>.</p>"
          },
          hint: {
            en: "<p>Put the transaction in a <code>using</code> block with the context. When the block ends, Dispose rolls back. Count rows with a <b>new</b> context to see the real database.</p>",
            hi: "<p>Transaction को context के साथ <code>using</code> block में रखो। Block ख़त्म होने पर Dispose rollback कर देता है। असली database देखने के लिए rows <b>नए</b> context से गिनो।</p>",
            hg: "<p>Transaction ko context ke saath <code>using</code> block mein rakho. Block khatam hone par Dispose rollback kar deta hai. Asli database dekhne ke liye rows <b>naye</b> context se gino.</p>"
          },
          solution: {
            caption: {
              en: "Solution: no Commit means rollback",
              hi: "हल: Commit नहीं तो rollback",
              hg: "Solution: Commit nahi toh rollback"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    db.Customers.Add(new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" } } });\n    db.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))\n{\n    using var tx = db.Database.BeginTransaction();\n    db.Tickets.Add(new SupportTicket { Id = 502, Issue = \"Follow-up call\", CustomerId = 1 });\n    db.SaveChanges();\n    db.Database.ExecuteSql($\"UPDATE Tickets SET Status = 'Closed' WHERE Id = 501\");\n    Console.WriteLine($\"Inside: {db.Tickets.Count()} rows\");\n}                                                   // no Commit(): Dispose rolls everything back\n\nusing (var db = new CrmContext(options))\n    Console.WriteLine($\"After: {db.Tickets.Count()} rows, {db.Tickets.Count(t => t.Status == \"Closed\")} closed\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            expected: "Inside: 2 rows\nAfter: 1 rows, 0 closed",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "Inside <code>BeginTransaction()</code> you call <code>SaveChanges()</code>, then an exception is thrown before <code>Commit()</code>, and the transaction is disposed. What is in the database?",
            hi: "<code>BeginTransaction()</code> के अंदर तुमने <code>SaveChanges()</code> बुलाया, फिर <code>Commit()</code> से पहले exception आया, और transaction dispose हुआ। Database में क्या है?",
            hg: "<code>BeginTransaction()</code> ke andar tumne <code>SaveChanges()</code> bulaya, phir <code>Commit()</code> se pehle exception aaya, aur transaction dispose hua. Database mein kya hai?"
          },
          options: [
            {
              en: "Nothing from this transaction: it was rolled back",
              hi: "इस transaction का कुछ नहीं: वह rollback हो गया",
              hg: "Is transaction ka kuch nahi: woh rollback ho gaya"
            },
            {
              en: "The row from the <code>SaveChanges()</code>, because it ran first",
              hi: "<code>SaveChanges()</code> की row, क्योंकि वह पहले चला था",
              hg: "<code>SaveChanges()</code> ki row, kyunki woh pehle chala tha"
            },
            {
              en: "Half the rows, chosen by EF",
              hi: "आधी rows, जो EF चुनता है",
              hg: "Aadhi rows, jo EF chunta hai"
            },
            {
              en: "It depends on the database provider",
              hi: "यह database provider पर निर्भर है",
              hg: "Ye database provider par nirbhar hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Without <code>Commit()</code>, disposing the transaction rolls back every step, including the earlier <code>SaveChanges()</code>. That is the point of the transaction: all or nothing.</p>",
            hi: "<p><code>Commit()</code> के बिना, transaction dispose होने पर हर step, पहले वाला <code>SaveChanges()</code> भी, rollback हो जाता है। यही transaction का मतलब है: सब या कुछ नहीं।</p>",
            hg: "<p><code>Commit()</code> ke bina, transaction dispose hone par har step, pehle wala <code>SaveChanges()</code> bhi, rollback ho jaata hai. Yahi transaction ka matlab hai: sab ya kuch nahi.</p>"
          }
        },
        recap: {
          en: "<ul><li>One <code>SaveChanges()</code> is atomic by itself.</li><li><code>BeginTransaction()</code> ties several saves and raw commands into one unit.</li><li><code>Commit()</code> makes it permanent; no commit, or <code>Rollback()</code>, undoes everything.</li></ul>",
          hi: "<ul><li>एक <code>SaveChanges()</code> अपने आप में atomic है।</li><li><code>BeginTransaction()</code> कई saves और raw commands को एक unit में बाँधता है।</li><li><code>Commit()</code> पक्का करता है; commit नहीं, या <code>Rollback()</code>, सब वापस कर देता है।</li></ul>",
          hg: "<ul><li>Ek <code>SaveChanges()</code> apne aap mein atomic hai.</li><li><code>BeginTransaction()</code> kai saves aur raw commands ko ek unit mein baandhta hai.</li><li><code>Commit()</code> pakka karta hai; commit nahi, ya <code>Rollback()</code>, sab wapas kar deta hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "One transaction around two steps: rollback and commit",
            hi: "दो steps के आसपास एक transaction: rollback और commit",
            hg: "Do steps ke aaspaas ek transaction: rollback aur commit"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    db.Customers.Add(new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" } } });\n    db.SaveChanges();\n}\n\nint Count(string status)\n{\n    using var db = new CrmContext(options);\n    return db.Tickets.Count(t => t.Status == status);\n}\n\nvoid FollowUpAndClose(bool agentOnLeave)\n{\n    using var db = new CrmContext(options);\n    using var tx = db.Database.BeginTransaction();\n    try\n    {\n        db.Tickets.Add(new SupportTicket { Id = 502, Issue = \"Follow-up call\", CustomerId = 1 });\n        db.SaveChanges();                                                                  // step 1\n        db.Database.ExecuteSql($\"UPDATE Tickets SET Status = 'Closed' WHERE Id = 501\");    // step 2\n        if (agentOnLeave) throw new InvalidOperationException(\"Agent Kiran is on leave\");\n        tx.Commit();                                                                       // both steps become permanent\n        Console.WriteLine(\"Committed\");\n    }\n    catch (InvalidOperationException ex)\n    {\n        tx.Rollback();                                                                     // both steps are undone\n        Console.WriteLine($\"Rolled back: {ex.Message}\");\n    }\n}\n\nFollowUpAndClose(agentOnLeave: true);\nConsole.WriteLine($\"Open: {Count(\"Open\")}, Closed: {Count(\"Closed\")}\");\nFollowUpAndClose(agentOnLeave: false);\nConsole.WriteLine($\"Open: {Count(\"Open\")}, Closed: {Count(\"Closed\")}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "Rolled back: Agent Kiran is on leave\nOpen: 1, Closed: 0\nCommitted\nOpen: 1, Closed: 1",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "concurrency",
      depth: "short",
      title: {
        en: "Concurrency: stop the lost update",
        hi: "Concurrency: lost update को रोकना",
        hg: "Concurrency: lost update ko rokna"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 4 made several steps atomic, but a transaction does not stop <b>two users</b> editing the same ticket at the same time. This lesson adds a token column that EF checks in every <code>UPDATE</code>. The change tracker from Day 5 already remembers the original values, so it can send that token back.",
          hi: "पाठ 4 ने कई steps को atomic बनाया, पर transaction <b>दो users</b> को एक ही ticket साथ में बदलने से नहीं रोकता। यह पाठ एक token column जोड़ता है जिसे EF हर <code>UPDATE</code> में जाँचता है। Day 5 का change tracker पहले से original values याद रखता है, इसलिए वह यह token वापस भेज सकता है।",
          hg: "Lesson 4 ne kai steps ko atomic banaya, par transaction <b>do users</b> ko ek hi ticket saath mein badalne se nahi rokta. Ye lesson ek token column jodta hai jise EF har <code>UPDATE</code> mein jaanchta hai. Day 5 ka change tracker pehle se original values yaad rakhta hai, isliye woh ye token wapas bhej sakta hai."
        },
        what: {
          en: "<p><b>Optimistic concurrency</b>: assume nobody else edits, but check at save time. A <b>concurrency token</b> column goes into the <code>WHERE</code> of the <code>UPDATE</code>. If someone changed the row first, 0 rows match and EF throws <code>DbUpdateConcurrencyException</code>.</p>",
          hi: "<p><b>Optimistic concurrency</b>: मान लो कोई और edit नहीं करेगा, पर save के समय जाँचो। <b>Concurrency token</b> column <code>UPDATE</code> की <code>WHERE</code> में जाता है। अगर किसी ने पहले row बदल दी, तो 0 rows match होती हैं और EF <code>DbUpdateConcurrencyException</code> फेंकता है।</p>",
          hg: "<p><b>Optimistic concurrency</b>: maan lo koi aur edit nahi karega, par save ke samay jaancho. <b>Concurrency token</b> column <code>UPDATE</code> ki <code>WHERE</code> mein jaata hai. Agar kisi ne pehle row badal di, toh 0 rows match hoti hain aur EF <code>DbUpdateConcurrencyException</code> phenkta hai.</p>"
        },
        why: {
          en: "<p>Without it, the <b>lost update</b> happens: agent A closes the ticket, agent B (who opened it earlier) saves an old copy and silently overwrites A's work. Nobody sees an error, and the data is wrong.</p>",
          hi: "<p>इसके बिना <b>lost update</b> होता है: agent A ticket बंद करता है, agent B (जिसने पहले खोला था) पुरानी copy save करके चुपचाप A का काम मिटा देता है। किसी को error नहीं दिखता, और data ग़लत हो जाता है।</p>",
          hg: "<p>Iske bina <b>lost update</b> hota hai: agent A ticket band karta hai, agent B (jisne pehle khola tha) purani copy save karke chupchaap A ka kaam mita deta hai. Kisi ko error nahi dikhta, aur data galat ho jaata hai.</p>"
        },
        analogy: {
          en: "<p>Two relatives editing the same shared wedding guest list on paper. Both copy it in the morning. Evening: one adds \"Neha\" and hands his sheet in; the other, still holding the morning copy, hands his in and Neha vanishes. A version number written at the top (\"list v1\") lets the organiser say \"your v1 is old, look again\".</p>",
          hi: "<p>शादी की guest list दो रिश्तेदार काग़ज़ पर बदल रहे हैं। दोनों सुबह उसकी copy लेते हैं। शाम को एक \"Neha\" जोड़कर अपना पन्ना जमा करता है; दूसरा, सुबह की copy लिए, अपना जमा करता है और Neha ग़ायब। ऊपर लिखा version नंबर (\"list v1\") आयोजक को कहने देता है \"तुम्हारा v1 पुराना है, फिर देखो\"।</p>",
          hg: "<p>Shaadi ki guest list do rishtedaar kaagaz par badal rahe hain. Dono subah uski copy lete hain. Shaam ko ek \"Neha\" jodkar apna panna jama karta hai; doosra, subah ki copy liye, apna jama karta hai aur Neha gaayab. Upar likha version number (\"list v1\") aayojak ko kehne deta hai \"tumhara v1 purana hai, phir dekho\".</p>"
        },
        focus: {
          caption: {
            en: "What EF sends (simplified: parameters shown as values)",
            hi: "EF क्या भेजता है (आसान रूप: parameters की जगह values दिखाई हैं)",
            hg: "EF kya bhejta hai (aasaan roop: parameters ki jagah values dikhayi hain)"
          },
          src: "-- Agent B saves with the Version it originally loaded (1):\nUPDATE Tickets SET Issue = 'Router replaced', Version = 2\nWHERE Id = 501 AND Version = 1;\n-- Agent A already moved Version to 2, so 0 rows are updated\n-- -> EF throws DbUpdateConcurrencyException",
          lang: "sql",
          check: "none"
        },
        lines: [
          {
            code: "[ConcurrencyCheck] public int Version { get; set; } = 1;",
            note: {
              en: "This marks <code>Version</code> as a concurrency token: EF adds <code>AND Version = @original</code> to the <code>WHERE</code> of every <code>UPDATE</code> and <code>DELETE</code>. On SQL Server you would use a <code>rowversion</code> column that the database changes for you; on SQLite you bump it yourself.",
              hi: "यह <code>Version</code> को concurrency token बनाता है: EF हर <code>UPDATE</code> और <code>DELETE</code> की <code>WHERE</code> में <code>AND Version = @original</code> जोड़ता है। SQL Server में <code>rowversion</code> column होता है जिसे database खुद बदलता है; SQLite में तुम खुद बढ़ाते हो।",
              hg: "Ye <code>Version</code> ko concurrency token banata hai: EF har <code>UPDATE</code> aur <code>DELETE</code> ki <code>WHERE</code> mein <code>AND Version = @original</code> jodta hai. SQL Server mein <code>rowversion</code> column hota hai jise database khud badalta hai; SQLite mein tum khud badhate ho."
            }
          },
          {
            code: "using var agentA = new CrmContext(options);        // two agents open the same ticket",
            note: {
              en: "Two separate contexts are two separate agents. Both load ticket 501 while its <code>Version</code> is 1.",
              hi: "दो अलग contexts दो अलग agents हैं। दोनों ticket 501 को तब load करते हैं जब उसका <code>Version</code> 1 है।",
              hg: "Do alag contexts do alag agents hain. Dono ticket 501 ko tab load karte hain jab uska <code>Version</code> 1 hai."
            }
          },
          {
            code: "ticketA.Version++;",
            note: {
              en: "Every edit must also bump the token. Agent A saves first: <code>WHERE Version = 1</code> matches, and the row now has version 2. (A real app does this in one place, for example in a <code>SaveChanges</code> override.)",
              hi: "हर edit को token भी बढ़ाना होगा। Agent A पहले save करता है: <code>WHERE Version = 1</code> match होती है, और row का version अब 2 है। (असली app यह एक ही जगह करती है, जैसे <code>SaveChanges</code> override में।)",
              hg: "Har edit ko token bhi badhana hoga. Agent A pehle save karta hai: <code>WHERE Version = 1</code> match hoti hai, aur row ka version ab 2 hai. (Asli app ye ek hi jagah karti hai, jaise <code>SaveChanges</code> override mein.)"
            }
          },
          {
            code: "catch (DbUpdateConcurrencyException ex)",
            note: {
              en: "Agent B still believes the version is 1, so his <code>UPDATE ... WHERE Version = 1</code> changes 0 rows. EF notices and throws this exception instead of silently overwriting.",
              hi: "Agent B अब भी मानता है कि version 1 है, इसलिए उसका <code>UPDATE ... WHERE Version = 1</code> 0 rows बदलता है। EF यह देखकर चुपचाप overwrite करने की जगह यह exception फेंकता है।",
              hg: "Agent B ab bhi maanta hai ki version 1 hai, isliye uska <code>UPDATE ... WHERE Version = 1</code> 0 rows badalta hai. EF ye dekhkar chupchaap overwrite karne ki jagah ye exception phenkta hai."
            }
          },
          {
            code: "ex.Entries.Single().Reload();",
            note: {
              en: "<code>Entries</code> lists the rows that failed. <code>Reload()</code> is <b>store wins</b>: drop B's edit and take what is in the database (Closed, version 2). The alternatives are client wins and merge, in the Deep Dive.",
              hi: "<code>Entries</code> उन rows की सूची है जो fail हुईं। <code>Reload()</code> <b>store wins</b> है: B की edit छोड़ो और database की value लो (Closed, version 2)। बाकी विकल्प, client wins और merge, Deep Dive में हैं।",
              hg: "<code>Entries</code> un rows ki soochi hai jo fail hui. <code>Reload()</code> <b>store wins</b> hai: B ki edit chhodo aur database ki value lo (Closed, version 2). Baaki vikalp, client wins aur merge, Deep Dive mein hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Marking the token but forgetting to change it on edit. Then the check passes for everyone and nothing is caught.</li><li>Catching the exception and just saving again with the user's old data (\"client wins\" by habit). That brings back the lost update.</li><li>Adding a token to every table. Use it on rows that several users really edit.</li></ul>",
          hi: "<ul><li>Token बनाना पर edit पर उसे बदलना भूल जाना। तब check सबके लिए पास हो जाता है और कुछ नहीं पकड़ा जाता।</li><li>Exception पकड़कर user के पुराने data से फिर save कर देना (आदतन \"client wins\")। इससे lost update वापस आ जाता है।</li><li>हर table में token लगाना। उसे उन rows पर लगाओ जो कई users सच में बदलते हैं।</li></ul>",
          hg: "<ul><li>Token banana par edit par use badalna bhool jaana. Tab check sabke liye pass ho jaata hai aur kuch nahi pakda jaata.</li><li>Exception pakadkar user ke purane data se phir save kar dena (aadatan \"client wins\"). Isse lost update wapas aa jaata hai.</li><li>Har table mein token lagana. Use un rows par lagao jo kai users sach mein badalte hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a concurrency token on rows that people edit through forms or APIs, such as tickets or customer profiles. It is cheap. Skip it for append-only data like logs.</p>",
          hi: "<p>उन rows पर concurrency token लगाओ जिन्हें लोग forms या APIs से बदलते हैं, जैसे tickets या customer profiles। यह सस्ता है। Logs जैसे सिर्फ़-जोड़ने वाले data पर ज़रूरत नहीं।</p>",
          hg: "<p>Un rows par concurrency token lagao jinhein log forms ya APIs se badalte hain, jaise tickets ya customer profiles. Ye sasta hai. Logs jaise sirf-jodne wale data par zaroorat nahi.</p>"
        },
        exercise: {
          task: {
            en: "<p>After the conflict, do a <b>retry</b>: reload ticket 501, apply Agent B's edit (<code>Issue = \"Router replaced\"</code>) again, bump the version, save, and print <code>Retry saved: Closed, 'Router replaced', version 3</code>.</p>",
            hi: "<p>Conflict के बाद <b>retry</b> करो: ticket 501 reload करो, Agent B की edit (<code>Issue = \"Router replaced\"</code>) फिर लगाओ, version बढ़ाओ, save करो, और <code>Retry saved: Closed, 'Router replaced', version 3</code> print करो।</p>",
            hg: "<p>Conflict ke baad <b>retry</b> karo: ticket 501 reload karo, Agent B ki edit (<code>Issue = \"Router replaced\"</code>) phir lagao, version badhao, save karo, aur <code>Retry saved: Closed, 'Router replaced', version 3</code> print karo.</p>"
          },
          hint: {
            en: "<p>Inside the <code>catch</code>: <code>Reload()</code>, set <code>ticketB.Issue</code> again, <code>ticketB.Version++</code>, then call <code>agentB.SaveChanges()</code> once more. The reloaded version is 2, so the bump makes 3.</p>",
            hi: "<p><code>catch</code> के अंदर: <code>Reload()</code>, <code>ticketB.Issue</code> फिर set करो, <code>ticketB.Version++</code>, फिर एक बार और <code>agentB.SaveChanges()</code>। Reload के बाद version 2 है, इसलिए बढ़ाने पर 3।</p>",
            hg: "<p><code>catch</code> ke andar: <code>Reload()</code>, <code>ticketB.Issue</code> phir set karo, <code>ticketB.Version++</code>, phir ek baar aur <code>agentB.SaveChanges()</code>. Reload ke baad version 2 hai, isliye badhane par 3.</p>"
          },
          solution: {
            caption: {
              en: "Solution: reload and retry",
              hi: "हल: reload करके दोबारा कोशिश",
              hg: "Solution: reload karke dobara koshish"
            },
            src: "using System.ComponentModel.DataAnnotations;\nusing Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    db.Customers.Add(new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" } } });\n    db.SaveChanges();\n}\n\nusing var agentA = new CrmContext(options);\nusing var agentB = new CrmContext(options);\nvar ticketA = agentA.Tickets.Single();\nvar ticketB = agentB.Tickets.Single();\n\nticketA.Status = \"Closed\";\nticketA.Version++;\nagentA.SaveChanges();\n\nticketB.Issue = \"Router replaced\";\nticketB.Version++;\ntry\n{\n    agentB.SaveChanges();\n}\ncatch (DbUpdateConcurrencyException ex)\n{\n    ex.Entries.Single().Reload();                  // fresh values: Closed, version 2\n    ticketB.Issue = \"Router replaced\";             // re-apply B's own edit on top\n    ticketB.Version++;\n    agentB.SaveChanges();                          // the retry succeeds\n    Console.WriteLine($\"Retry saved: {ticketB.Status}, '{ticketB.Issue}', version {ticketB.Version}\");\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    [ConcurrencyCheck] public int Version { get; set; } = 1;\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            expected: "Retry saved: Closed, 'Router replaced', version 3",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "Agent B saves a ticket that Agent A changed after B loaded it, and the table has a concurrency token. What happens?",
            hi: "Agent B वह ticket save करता है जिसे Agent A ने B के load करने के बाद बदला, और table में concurrency token है। क्या होता है?",
            hg: "Agent B woh ticket save karta hai jise Agent A ne B ke load karne ke baad badla, aur table mein concurrency token hai. Kya hota hai?"
          },
          options: [
            {
              en: "B's save silently overwrites A's change",
              hi: "B का save चुपचाप A की बदली हुई value मिटा देता है",
              hg: "B ka save chupchaap A ki badli hui value mita deta hai"
            },
            {
              en: "EF merges both edits automatically",
              hi: "EF दोनों edits अपने आप merge कर देता है",
              hg: "EF dono edits apne aap merge kar deta hai"
            },
            {
              en: "The row is locked until A leaves",
              hi: "A के जाने तक row lock रहती है",
              hg: "A ke jaane tak row lock rehti hai"
            },
            {
              en: "<code>DbUpdateConcurrencyException</code> is thrown",
              hi: "<code>DbUpdateConcurrencyException</code> फेंका जाता है",
              hg: "<code>DbUpdateConcurrencyException</code> phenka jaata hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>The <code>UPDATE ... WHERE Version = original</code> matches 0 rows, so EF throws <code>DbUpdateConcurrencyException</code>. EF never merges for you, and optimistic concurrency takes no lock: it detects the conflict at save time.</p>",
            hi: "<p><code>UPDATE ... WHERE Version = original</code> 0 rows match करती है, इसलिए EF <code>DbUpdateConcurrencyException</code> फेंकता है। EF कभी अपने आप merge नहीं करता, और optimistic concurrency कोई lock नहीं लेती: वह conflict को save के समय पकड़ती है।</p>",
            hg: "<p><code>UPDATE ... WHERE Version = original</code> 0 rows match karti hai, isliye EF <code>DbUpdateConcurrencyException</code> phenkta hai. EF kabhi apne aap merge nahi karta, aur optimistic concurrency koi lock nahi leti: woh conflict ko save ke samay pakadti hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Lost update = the later save silently overwrites the earlier one.</li><li>A concurrency token (<code>[ConcurrencyCheck]</code>, or <code>rowversion</code> on SQL Server) goes into the <code>UPDATE</code>'s <code>WHERE</code>.</li><li>0 rows updated = <code>DbUpdateConcurrencyException</code>; then reload, retry or ask the user.</li></ul>",
          hi: "<ul><li>Lost update = बाद का save पहले वाले को चुपचाप मिटा देता है।</li><li>Concurrency token (<code>[ConcurrencyCheck]</code>, या SQL Server में <code>rowversion</code>) <code>UPDATE</code> की <code>WHERE</code> में जाता है।</li><li>0 rows update = <code>DbUpdateConcurrencyException</code>; फिर reload, retry या user से पूछो।</li></ul>",
          hg: "<ul><li>Lost update = baad ka save pehle wale ko chupchaap mita deta hai.</li><li>Concurrency token (<code>[ConcurrencyCheck]</code>, ya SQL Server mein <code>rowversion</code>) <code>UPDATE</code> ki <code>WHERE</code> mein jaata hai.</li><li>0 rows update = <code>DbUpdateConcurrencyException</code>; phir reload, retry ya user se poocho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A lost update caught by a concurrency token",
            hi: "Concurrency token से पकड़ा गया lost update",
            hg: "Concurrency token se pakda gaya lost update"
          },
          src: "using System.ComponentModel.DataAnnotations;\nusing Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    db.Customers.Add(new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" } } });\n    db.SaveChanges();\n}\n\nusing var agentA = new CrmContext(options);        // two agents open the same ticket\nusing var agentB = new CrmContext(options);\nvar ticketA = agentA.Tickets.Single();\nvar ticketB = agentB.Tickets.Single();\n\nticketA.Status = \"Closed\";\nticketA.Version++;                                 // we bump the token ourselves\nagentA.SaveChanges();\nConsole.WriteLine(\"Agent A saved\");\n\nticketB.Issue = \"Router replaced\";\nticketB.Version++;\ntry\n{\n    agentB.SaveChanges();                          // UPDATE ... WHERE Id = 501 AND Version = 1 -> 0 rows\n}\ncatch (DbUpdateConcurrencyException ex)\n{\n    ex.Entries.Single().Reload();                  // store wins: take what is in the database\n    Console.WriteLine($\"Agent B: conflict. Now {ticketB.Status}, version {ticketB.Version}, issue '{ticketB.Issue}'\");\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    [ConcurrencyCheck] public int Version { get; set; } = 1;   // goes into the WHERE of every UPDATE\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "Agent A saved\nAgent B: conflict. Now Closed, version 2, issue 'Router not working'",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "bulk-changes",
      depth: "short",
      title: {
        en: "Bulk changes: ExecuteUpdate and ExecuteDelete",
        hi: "Bulk changes: ExecuteUpdate और ExecuteDelete",
        hg: "Bulk changes: ExecuteUpdate aur ExecuteDelete"
      },
      lesson: {
        buildsOn: {
          en: "So far every change loaded entities, edited them and called <code>SaveChanges()</code> (Day 5's change tracker). For thousands of rows that is slow. Lesson 3's raw SQL was one answer; EF Core 7 adds a typed one. It also shows the price of skipping the tracker, which lesson 5's stale values already hinted at.",
          hi: "अब तक हर बदलाव में entities load हुईं, edit हुईं और <code>SaveChanges()</code> बुलाया गया (Day 5 का change tracker)। हज़ारों rows के लिए यह धीमा है। पाठ 3 की raw SQL एक जवाब थी; EF Core 7 एक typed जवाब जोड़ता है। यह tracker छोड़ने की क़ीमत भी दिखाता है, जिसका इशारा पाठ 5 की पुरानी values ने दिया था।",
          hg: "Ab tak har badlaav mein entities load hui, edit hui aur <code>SaveChanges()</code> bulaya gaya (Day 5 ka change tracker). Hazaaron rows ke liye ye dheema hai. Lesson 3 ki raw SQL ek jawaab thi; EF Core 7 ek typed jawaab jodta hai. Ye tracker chhodne ki keemat bhi dikhata hai, jiska ishara lesson 5 ki purani values ne diya tha."
        },
        what: {
          en: "<p><code>ExecuteUpdate</code> and <code>ExecuteDelete</code> turn a LINQ query into <b>one</b> <code>UPDATE</code> or <code>DELETE</code> statement that runs immediately, without loading any rows. They return the number of rows changed. They do not use <code>SaveChanges()</code> and do not tell the change tracker.</p>",
          hi: "<p><code>ExecuteUpdate</code> और <code>ExecuteDelete</code> LINQ query को <b>एक</b> <code>UPDATE</code> या <code>DELETE</code> statement बना देते हैं जो तुरंत चलता है, कोई row load किए बिना। ये बदली हुई rows की गिनती लौटाते हैं। ये <code>SaveChanges()</code> इस्तेमाल नहीं करते और change tracker को नहीं बताते।</p>",
          hg: "<p><code>ExecuteUpdate</code> aur <code>ExecuteDelete</code> LINQ query ko <b>ek</b> <code>UPDATE</code> ya <code>DELETE</code> statement bana dete hain jo turant chalta hai, koi row load kiye bina. Ye badli hui rows ki ginti lautate hain. Ye <code>SaveChanges()</code> use nahi karte aur change tracker ko nahi batate.</p>"
        },
        why: {
          en: "<p>\"Escalate all open tickets\" on 50,000 rows by loading each, changing it and saving is slow and memory-hungry. One set-based <code>UPDATE</code> does it in one trip, the way you would write it in SQL.</p>",
          hi: "<p>50,000 rows पर \"सारे open tickets escalate करो\" को हर एक load, बदल और save करके करना धीमा और memory-खाऊ है। एक set-based <code>UPDATE</code> यह एक चक्कर में कर देता है, जैसे तुम SQL में लिखते।</p>",
          hg: "<p>50,000 rows par \"saare open tickets escalate karo\" ko har ek load, badal aur save karke karna dheema aur memory-khaau hai. Ek set-based <code>UPDATE</code> ye ek chakkar mein kar deta hai, jaise tum SQL mein likhte.</p>"
        },
        analogy: {
          en: "<p>Painting a society's name board versus knocking on every flat. Normally you go flat by flat, note each flat's colour and repaint it (load, change, save). Bulk change is giving the painter one instruction, \"repaint all red boards blue\", and he does it on site. Fast, but the residents who copied the old colour in their notebooks still have the old colour.</p>",
          hi: "<p>Society के नाम-board रंगना बनाम हर flat का दरवाज़ा खटखटाना। आम तौर पर तुम flat-flat जाते हो, हर flat का रंग नोट करके दोबारा रंगते हो (load, change, save)। Bulk change painter को एक हुक्म देना है, \"सारे लाल boards नीले कर दो\", और वह मौक़े पर कर देता है। तेज़, पर जिन निवासियों ने पुराना रंग अपनी कॉपी में लिख लिया था, उनके पास पुराना रंग ही रहता है।</p>",
          hg: "<p>Society ke naam-board rangna banaam har flat ka darwaza khatkhatana. Aam taur par tum flat-flat jaate ho, har flat ka rang note karke dobara rangte ho (load, change, save). Bulk change painter ko ek hukm dena hai, \"saare laal boards neele kar do\", aur woh mauke par kar deta hai. Tez, par jin nivasiyon ne purana rang apni copy mein likh liya tha, unke paas purana rang hi rehta hai.</p>"
        },
        lines: [
          {
            code: "var loaded = db.Tickets.Find(501)!;                // tracked in memory",
            note: {
              en: "We load ticket 501 first, so the change tracker holds a copy with <code>Status = \"Open\"</code>. This sets up the surprise below.",
              hi: "पहले हम ticket 501 load करते हैं, इसलिए change tracker के पास <code>Status = \"Open\"</code> वाली copy है। यह नीचे की हैरानी की तैयारी है।",
              hg: "Pehle hum ticket 501 load karte hain, isliye change tracker ke paas <code>Status = \"Open\"</code> wali copy hai. Ye neeche ki hairani ki taiyaari hai."
            }
          },
          {
            code: ".ExecuteUpdate(s => s.SetProperty(t => t.Status, \"Escalated\"));   // one UPDATE, runs right now",
            note: {
              en: "One <code>UPDATE Tickets SET Status = 'Escalated' WHERE Status = 'Open'</code>. <code>SetProperty</code> says which column gets which value; chain several for more columns. It returns 2, the rows changed, and needs no <code>SaveChanges()</code>.",
              hi: "एक <code>UPDATE Tickets SET Status = 'Escalated' WHERE Status = 'Open'</code>। <code>SetProperty</code> बताता है किस column को कौन-सी value; ज़्यादा columns के लिए कई जोड़ो। यह 2 लौटाता है, यानी बदली rows, और <code>SaveChanges()</code> नहीं चाहिए।",
              hg: "Ek <code>UPDATE Tickets SET Status = 'Escalated' WHERE Status = 'Open'</code>. <code>SetProperty</code> batata hai kis column ko kaun-si value; zyada columns ke liye kai jodo. Ye 2 lautata hai, yaani badli rows, aur <code>SaveChanges()</code> nahi chahiye."
            }
          },
          {
            code: "Console.WriteLine($\"In memory: {loaded.Status}\");  // the change tracker was not told",
            note: {
              en: "Prints <code>Open</code>. The database row says Escalated, but the object in memory is stale. If you now edited <code>loaded</code> and saved, you could overwrite the bulk change.",
              hi: "<code>Open</code> print होता है। Database की row में Escalated है, पर memory का object पुराना है। अब अगर <code>loaded</code> को बदलकर save करो, तो bulk change मिट सकता है।",
              hg: "<code>Open</code> print hota hai. Database ki row mein Escalated hai, par memory ka object purana hai. Ab agar <code>loaded</code> ko badalkar save karo, toh bulk change mit sakta hai."
            }
          },
          {
            code: "db.Entry(loaded).Reload();",
            note: {
              en: "Reads the row again, so the object now says <code>Escalated</code>. Better habits: run bulk operations in a fresh context, or call <code>db.ChangeTracker.Clear()</code> afterwards.",
              hi: "Row दोबारा पढ़ता है, इसलिए object अब <code>Escalated</code> दिखाता है। बेहतर आदतें: bulk operations नए context में चलाओ, या बाद में <code>db.ChangeTracker.Clear()</code> बुलाओ।",
              hg: "Row dobara padhta hai, isliye object ab <code>Escalated</code> dikhata hai. Behtar aadatein: bulk operations naye context mein chalao, ya baad mein <code>db.ChangeTracker.Clear()</code> bulao."
            }
          },
          {
            code: "int removed = db.Tickets.Where(t => t.Status == \"Closed\").ExecuteDelete();",
            note: {
              en: "One <code>DELETE ... WHERE Status = 'Closed'</code>, nothing loaded. It removes 1 row, leaving 2. Also skipped: <code>SaveChanges</code> interceptors, events and any audit code in a <code>SaveChanges</code> override.",
              hi: "एक <code>DELETE ... WHERE Status = 'Closed'</code>, कुछ load नहीं। यह 1 row हटाता है, 2 बचती हैं। ये भी छूट जाते हैं: <code>SaveChanges</code> interceptors, events और <code>SaveChanges</code> override का audit code।",
              hg: "Ek <code>DELETE ... WHERE Status = 'Closed'</code>, kuch load nahi. Ye 1 row hatata hai, 2 bachti hain. Ye bhi chhoot jaate hain: <code>SaveChanges</code> interceptors, events aur <code>SaveChanges</code> override ka audit code."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Keeping entities loaded across a bulk call and saving them later. The stale object can overwrite the bulk change.</li><li>Expecting <code>SaveChanges()</code> to be needed (or to batch it). The bulk call runs at once as its own statement.</li><li>Using it where each row needs C# validation, domain events or audit fields. Those are skipped; set audit columns yourself with <code>SetProperty</code>, or load and save normally.</li></ul>",
          hi: "<ul><li>Bulk call के पार entities load रखना और बाद में उन्हें save करना। पुराना object bulk change मिटा सकता है।</li><li>उम्मीद करना कि <code>SaveChanges()</code> चाहिए (या batch होगा)। Bulk call तुरंत, अपने statement की तरह चलता है।</li><li>वहाँ इस्तेमाल करना जहाँ हर row को C# validation, domain events या audit fields चाहिए। वे छूट जाते हैं; audit columns <code>SetProperty</code> से खुद भरो, या सामान्य load और save करो।</li></ul>",
          hg: "<ul><li>Bulk call ke paar entities load rakhna aur baad mein unhein save karna. Purana object bulk change mita sakta hai.</li><li>Ummeed karna ki <code>SaveChanges()</code> chahiye (ya batch hoga). Bulk call turant, apne statement ki tarah chalta hai.</li><li>Wahan use karna jahan har row ko C# validation, domain events ya audit fields chahiye. Woh chhoot jaate hain; audit columns <code>SetProperty</code> se khud bharo, ya saamanya load aur save karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use it for set-based changes on many rows: price revisions, archiving, cleanup jobs, bulk soft-delete. Load, change and <code>SaveChanges()</code> when each row needs C# logic, or when the same request already holds those entities in memory.</p>",
          hi: "<p>कई rows पर set-based बदलाव के लिए इस्तेमाल करो: price revisions, archiving, cleanup jobs, bulk soft-delete। जब हर row को C# logic चाहिए, या उसी request में वे entities memory में हों, तब load, change और <code>SaveChanges()</code> करो।</p>",
          hg: "<p>Kai rows par set-based badlaav ke liye use karo: price revisions, archiving, cleanup jobs, bulk soft-delete. Jab har row ko C# logic chahiye, ya usi request mein woh entities memory mein hon, tab load, change aur <code>SaveChanges()</code> karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Close <b>all of Asha's tickets</b> with one <code>ExecuteUpdate</code>, filtering through the navigation (<code>t.Customer.Name</code>). Print <code>Closed 2 tickets</code> and <code>Open left: 1</code>.</p>",
            hi: "<p><b>Asha के सारे tickets</b> एक <code>ExecuteUpdate</code> से बंद करो, navigation (<code>t.Customer.Name</code>) से filter करके। <code>Closed 2 tickets</code> और <code>Open left: 1</code> print करो।</p>",
            hg: "<p><b>Asha ke saare tickets</b> ek <code>ExecuteUpdate</code> se band karo, navigation (<code>t.Customer.Name</code>) se filter karke. <code>Closed 2 tickets</code> aur <code>Open left: 1</code> print karo.</p>"
          },
          hint: {
            en: "<p><code>Where(t =&gt; t.Customer.Name == \"Asha\")</code> is allowed: EF turns the navigation into a join or subquery in the same <code>UPDATE</code>. Count afterwards with <code>AsNoTracking()</code>.</p>",
            hi: "<p><code>Where(t =&gt; t.Customer.Name == \"Asha\")</code> चलता है: EF navigation को उसी <code>UPDATE</code> में join या subquery बना देता है। बाद में <code>AsNoTracking()</code> के साथ गिनो।</p>",
            hg: "<p><code>Where(t =&gt; t.Customer.Name == \"Asha\")</code> chalta hai: EF navigation ko usi <code>UPDATE</code> mein join ya subquery bana deta hai. Baad mein <code>AsNoTracking()</code> ke saath gino.</p>"
          },
          solution: {
            caption: {
              en: "Solution: close all of Asha's tickets",
              hi: "हल: Asha के सारे tickets बंद करो",
              hg: "Solution: Asha ke saare tickets band karo"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing var db = new CrmContext(options);\ndb.Database.EnsureCreated();\ndb.Customers.AddRange(\n    new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" }, new SupportTicket { Id = 502, Issue = \"Wrong bill\" } } },\n    new Customer { Name = \"Ravi\", Tickets = { new SupportTicket { Id = 503, Issue = \"Slow internet\" } } });\ndb.SaveChanges();\n\nint closed = db.Tickets.Where(t => t.Customer.Name == \"Asha\")       // the filter may use a navigation\n    .ExecuteUpdate(s => s.SetProperty(t => t.Status, \"Closed\"));\nConsole.WriteLine($\"Closed {closed} tickets\");\nConsole.WriteLine($\"Open left: {db.Tickets.AsNoTracking().Count(t => t.Status == \"Open\")}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            expected: "Closed 2 tickets\nOpen left: 1",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "A ticket is already loaded in the context. You run <code>ExecuteUpdate</code> to change its <code>Status</code>. What does the loaded object show?",
            hi: "Context में एक ticket पहले से load है। तुम उसका <code>Status</code> बदलने को <code>ExecuteUpdate</code> चलाते हो। Load हुआ object क्या दिखाता है?",
            hg: "Context mein ek ticket pehle se load hai. Tum uska <code>Status</code> badalne ko <code>ExecuteUpdate</code> chalate ho. Load hua object kya dikhata hai?"
          },
          options: [
            {
              en: "The new status, because EF refreshes tracked objects",
              hi: "नया status, क्योंकि EF tracked objects को refresh करता है",
              hg: "Naya status, kyunki EF tracked objects ko refresh karta hai"
            },
            {
              en: "The old status: the change tracker was not told",
              hi: "पुराना status: change tracker को बताया नहीं गया",
              hg: "Purana status: change tracker ko bataya nahi gaya"
            },
            {
              en: "The new status after the next <code>SaveChanges()</code>",
              hi: "अगले <code>SaveChanges()</code> के बाद नया status",
              hg: "Agle <code>SaveChanges()</code> ke baad naya status"
            },
            {
              en: "An exception, because the object is tracked",
              hi: "Exception, क्योंकि object tracked है",
              hg: "Exception, kyunki object tracked hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The bulk statement goes straight to the database and bypasses the change tracker, so the in-memory object keeps the old value until you <code>Reload()</code> it or use a fresh context.</p>",
            hi: "<p>Bulk statement सीधे database जाता है और change tracker को छोड़ देता है, इसलिए memory का object पुरानी value रखता है जब तक तुम <code>Reload()</code> न करो या नया context न लो।</p>",
            hg: "<p>Bulk statement seedha database jaata hai aur change tracker ko chhod deta hai, isliye memory ka object purani value rakhta hai jab tak tum <code>Reload()</code> na karo ya naya context na lo.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>ExecuteUpdate</code>/<code>ExecuteDelete</code> = one set-based statement, runs now, returns rows changed.</li><li>No loading, no <code>SaveChanges()</code>, no change tracker: tracked objects go stale.</li><li>Use for many rows; use load, change, save when each row needs C# logic.</li></ul>",
          hi: "<ul><li><code>ExecuteUpdate</code>/<code>ExecuteDelete</code> = एक set-based statement, अभी चलता है, बदली rows की गिनती लौटाता है।</li><li>कोई loading नहीं, <code>SaveChanges()</code> नहीं, change tracker नहीं: tracked objects पुराने रह जाते हैं।</li><li>कई rows के लिए इस्तेमाल करो; जब हर row को C# logic चाहिए तब load, change, save।</li></ul>",
          hg: "<ul><li><code>ExecuteUpdate</code>/<code>ExecuteDelete</code> = ek set-based statement, abhi chalta hai, badli rows ki ginti lautata hai.</li><li>Koi loading nahi, <code>SaveChanges()</code> nahi, change tracker nahi: tracked objects purane reh jaate hain.</li><li>Kai rows ke liye use karo; jab har row ko C# logic chahiye tab load, change, save.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "ExecuteUpdate and ExecuteDelete versus the change tracker",
            hi: "ExecuteUpdate और ExecuteDelete बनाम change tracker",
            hg: "ExecuteUpdate aur ExecuteDelete banaam change tracker"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing var db = new CrmContext(options);\ndb.Database.EnsureCreated();\ndb.Customers.AddRange(\n    new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" }, new SupportTicket { Id = 502, Issue = \"Wrong bill\", Status = \"Closed\" } } },\n    new Customer { Name = \"Ravi\", Tickets = { new SupportTicket { Id = 503, Issue = \"Slow internet\" } } });\ndb.SaveChanges();\n\nvar loaded = db.Tickets.Find(501)!;                // tracked in memory\n\nint escalated = db.Tickets.Where(t => t.Status == \"Open\")\n    .ExecuteUpdate(s => s.SetProperty(t => t.Status, \"Escalated\"));   // one UPDATE, runs right now\nConsole.WriteLine($\"ExecuteUpdate changed {escalated} rows\");\nConsole.WriteLine($\"In memory: {loaded.Status}\");  // the change tracker was not told\n\ndb.Entry(loaded).Reload();\nConsole.WriteLine($\"After Reload: {loaded.Status}\");\n\nint removed = db.Tickets.Where(t => t.Status == \"Closed\").ExecuteDelete();   // one DELETE, nothing loaded\nConsole.WriteLine($\"ExecuteDelete removed {removed} row, {db.Tickets.Count()} left\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "ExecuteUpdate changed 2 rows\nIn memory: Open\nAfter Reload: Escalated\nExecuteDelete removed 1 row, 2 left",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "batch-split-tagwith",
      depth: "detailed",
      title: {
        en: "More N+1 fixes: batch queries, split queries and TagWith",
        hi: "N+1 के और हल: batch queries, split queries और TagWith",
        hg: "N+1 ke aur hal: batch queries, split queries aur TagWith"
      },
      body: {
        en: "<ul>\n<li><b>Fix 3 — one batch query</b>: collect the parent ids, run <b>one</b> <code>Where(o =&gt; ids.Contains(o.CustomerId))</code>, then group in memory. Two queries in total, whatever N is. Useful when the children come from another service or repository.</li>\n<li><b>Cartesian explosion</b>: two collection Includes in one query multiply the rows (a customer with 10 orders and 10 addresses = 100 joined rows). <code>AsSplitQuery()</code> sends one SQL per collection instead. EF logs a warning when you load several collections without choosing a mode. You can set the default with <code>UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery)</code> and opt back in per query with <code>AsSingleQuery()</code>.</li>\n<li><b>Split-query trade-off</b>: fewer duplicated rows, but more round trips. Without a transaction (Serializable or snapshot), the split queries can also see data that changed in between. Paging with <code>Skip</code>/<code>Take</code> needs a unique sort order so each split query sees the same rows — before EF Core 10, EF could even drop the key from the ordering inside the child query; EF Core 10 fixes that, but a unique order is still your job.</li>\n<li><code>TagWith(\"Orders page\")</code> adds a SQL comment to the query, so you can find it quickly in Query Store, Profiler or the logs.</li>\n</ul>\n<p><b>When to use:</b> projection for read screens, <code>Include</code> when you need whole entities, a batch query across service boundaries, <code>AsSplitQuery()</code> when two or more collections are large. <b>When not:</b> do not switch every query to split mode by habit — for small one-to-many results a single JOIN is usually faster; and do not \"fix\" N+1 by caching blindly — first remove the extra round trips.</p>",
        hi: "<ul>\n<li><b>Fix 3 — एक batch query</b>: parent ids इकट्ठा करो, <b>एक</b> <code>Where(o =&gt; ids.Contains(o.CustomerId))</code> चलाओ, फिर memory में group करो। N कितना भी हो, कुल दो queries। तब काम का जब children किसी दूसरी service या repository से आते हैं।</li>\n<li><b>Cartesian explosion</b>: एक query में दो collection Includes rows को गुणा कर देते हैं (10 orders और 10 addresses वाला customer = 100 joined rows)। <code>AsSplitQuery()</code> इसकी जगह हर collection के लिए एक SQL भेजता है। Mode चुने बिना कई collections load करो तो EF एक warning log करता है। Default <code>UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery)</code> से set कर सकते हो और किसी query के लिए <code>AsSingleQuery()</code> से वापस आ सकते हो।</li>\n<li><b>Split-query का trade-off</b>: duplicated rows कम, पर round trips ज़्यादा। Transaction (Serializable या snapshot) के बिना split queries बीच में बदला हुआ data भी देख सकती हैं। <code>Skip</code>/<code>Take</code> वाली paging के लिए unique sort order चाहिए, ताकि हर split query वही rows देखे — EF Core 10 से पहले EF child query के अंदर ordering से key तक छोड़ सकता था; EF Core 10 ने यह ठीक किया, पर unique order देना फिर भी आपका काम है।</li>\n<li><code>TagWith(\"Orders page\")</code> query में एक SQL comment जोड़ता है, ताकि Query Store, Profiler या logs में उसे जल्दी ढूँढ सको।</li>\n</ul>\n<p><b>कब use करें:</b> read screens के लिए projection, पूरी entities चाहिए तो <code>Include</code>, service boundaries के पार batch query, और जब दो या ज़्यादा collections बड़ी हों तो <code>AsSplitQuery()</code>। <b>कब नहीं:</b> आदत से हर query को split mode में मत डालो — छोटे one-to-many results के लिए एक JOIN आमतौर पर तेज़ होता है; और N+1 को आँख बंद करके caching से \"fix\" मत करो — पहले extra round trips हटाओ।</p>",
        hg: "<ul>\n<li><b>Fix 3 — ek batch query</b>: parent ids ikattha karo, <b>ek</b> <code>Where(o =&gt; ids.Contains(o.CustomerId))</code> chalao, phir memory mein group karo. N kitna bhi ho, kul do queries. Tab kaam ka jab children kisi doosri service ya repository se aate hain.</li>\n<li><b>Cartesian explosion</b>: ek query mein do collection Includes rows ko guna kar dete hain (10 orders aur 10 addresses wala customer = 100 joined rows). <code>AsSplitQuery()</code> iski jagah har collection ke liye ek SQL bhejta hai. Mode chune bina kai collections load karo to EF ek warning log karta hai. Default <code>UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery)</code> se set kar sakte ho aur kisi query ke liye <code>AsSingleQuery()</code> se wapas aa sakte ho.</li>\n<li><b>Split-query ka trade-off</b>: duplicated rows kam, par round trips zyaada. Transaction (Serializable ya snapshot) ke bina split queries beech mein badla hua data bhi dekh sakti hain. <code>Skip</code>/<code>Take</code> wali paging ke liye unique sort order chahiye, taaki har split query wahi rows dekhe — EF Core 10 se pehle EF child query ke andar ordering se key tak chhod sakta tha; EF Core 10 ne yeh theek kiya, par unique order dena phir bhi aapka kaam hai.</li>\n<li><code>TagWith(\"Orders page\")</code> query mein ek SQL comment jodta hai, taaki Query Store, Profiler ya logs mein use jaldi dhoondh sako.</li>\n</ul>\n<p><b>Kab use karein:</b> read screens ke liye projection, poori entities chahiye to <code>Include</code>, service boundaries ke paar batch query, aur jab do ya zyaada collections badi hon to <code>AsSplitQuery()</code>. <b>Kab nahi:</b> aadat se har query ko split mode mein mat daalo — chhote one-to-many results ke liye ek JOIN aamtaur par tez hota hai; aur N+1 ko aankh band karke caching se \"fix\" mat karo — pehle extra round trips hatao.</p>"
      }
    },
    {
      id: "projection-details",
      depth: "detailed",
      title: {
        en: "Projection details: nested collections, covering indexes, mapping libraries",
        hi: "Projection की बारीकियाँ: nested collections, covering indexes, mapping libraries",
        hg: "Projection ki baareekiyan: nested collections, covering indexes, mapping libraries"
      },
      body: {
        en: "<ul>\n<li><b>Nested collections</b> in a projection (a list of order totals per customer) become a <code>LEFT JOIN</code> plus <code>ORDER BY</code> keys — the same shape as <code>Include</code>, but only with the columns you picked.</li>\n<li><b>SQL link</b>: selecting fewer columns lets SQL Server answer from a <b>covering index</b> (a non-clustered index with <code>INCLUDE</code> columns) instead of reading the clustered index — an easy interview point for someone strong in SQL.</li>\n<li>Mapping libraries can build the <code>Select</code> for you (for example AutoMapper's <code>ProjectTo</code>), but a hand-written <code>Select</code> is the clearest and easiest to review.</li>\n</ul>",
        hi: "<ul>\n<li>Projection में <b>nested collections</b> (हर customer के order totals की list) <code>LEFT JOIN</code> और keys पर <code>ORDER BY</code> बनती हैं — <code>Include</code> जैसा ही shape, पर सिर्फ़ आपके चुने columns के साथ।</li>\n<li><b>SQL से link</b>: कम columns select करने से SQL Server clustered index पढ़ने की बजाय एक <b>covering index</b> (<code>INCLUDE</code> columns वाला non-clustered index) से जवाब दे सकता है — SQL में मज़बूत इंसान के लिए interview का आसान point।</li>\n<li>Mapping libraries आपके लिए <code>Select</code> बना सकती हैं (जैसे AutoMapper का <code>ProjectTo</code>), पर हाथ से लिखा <code>Select</code> सबसे साफ़ और review में सबसे आसान है।</li>\n</ul>",
        hg: "<ul>\n<li>Projection mein <b>nested collections</b> (har customer ke order totals ki list) <code>LEFT JOIN</code> aur keys par <code>ORDER BY</code> banti hain — <code>Include</code> jaisa hi shape, par sirf aapke chune columns ke saath.</li>\n<li><b>SQL se link</b>: kam columns select karne se SQL Server clustered index padhne ki bajaay ek <b>covering index</b> (<code>INCLUDE</code> columns wala non-clustered index) se jawaab de sakta hai — SQL mein mazboot insaan ke liye interview ka aasaan point.</li>\n<li>Mapping libraries aapke liye <code>Select</code> bana sakti hain (jaise AutoMapper ka <code>ProjectTo</code>), par haath se likha <code>Select</code> sabse saaf aur review mein sabse aasaan hai.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "Entity query vs DTO projection vs nested projection — the SQL Server SQL from ToQueryString (no database needed)",
            hi: "Entity query बनाम DTO projection बनाम nested projection — ToQueryString से SQL Server SQL (database की ज़रूरत नहीं)",
            hg: "Entity query vs DTO projection vs nested projection — ToQueryString se SQL Server SQL (database ki zaroorat nahi)"
          },
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          expected: "SELECT [c].[Id], [c].[City], [c].[Name], [c].[Notes]\nFROM [Customers] AS [c]\nWHERE [c].[City] = N'Pune'\n-----\n-- Customer summary page\n\nSELECT [c].[Name], (\n    SELECT COUNT(*)\n    FROM [Orders] AS [o]\n    WHERE [c].[Id] = [o].[CustomerId]), (\n    SELECT COALESCE(SUM([o0].[Total]), 0.0)\n    FROM [Orders] AS [o0]\n    WHERE [c].[Id] = [o0].[CustomerId])\nFROM [Customers] AS [c]\nWHERE [c].[City] = N'Pune'\n-----\nSELECT [c].[Name], [c].[Id], [o0].[Total], [o0].[Id]\nFROM [Customers] AS [c]\nLEFT JOIN (\n    SELECT [o].[Total], [o].[Id], [o].[CustomerId]\n    FROM [Orders] AS [o]\n    WHERE [o].[Total] > 500.0\n) AS [o0] ON [c].[Id] = [o0].[CustomerId]\nORDER BY [c].[Id]",
          src: "using Microsoft.EntityFrameworkCore;\n\nvar options = new DbContextOptionsBuilder<ShopContext>()\n    .UseSqlServer(\"Server=.;Database=Shop;Trusted_Connection=True;\")   // dummy: nothing connects\n    .Options;\nusing var db = new ShopContext(options);\n\n// 1. Entity query: every column, including the big Notes column\nConsole.WriteLine(db.Customers.Where(c => c.City == \"Pune\").ToQueryString());\nConsole.WriteLine(\"-----\");\n\n// 2. DTO projection: only what the screen shows; COUNT and SUM run inside SQL Server\nvar summary = db.Customers\n    .TagWith(\"Customer summary page\")\n    .Where(c => c.City == \"Pune\")\n    .Select(c => new CustomerSummary(c.Name, c.Orders.Count, c.Orders.Sum(o => o.Total)));\nConsole.WriteLine(summary.ToQueryString());\nConsole.WriteLine(\"-----\");\n\n// 3. Nested collection inside a projection: LEFT JOIN + ORDER BY, only chosen columns\nvar bigOrders = db.Customers.Select(c => new\n{\n    c.Name,\n    BigTotals = c.Orders.Where(o => o.Total > 500).Select(o => o.Total).ToList()\n});\nConsole.WriteLine(bigOrders.ToQueryString());\n\n/* Output:\nSELECT [c].[Id], [c].[City], [c].[Name], [c].[Notes]\nFROM [Customers] AS [c]\nWHERE [c].[City] = N'Pune'\n-----\n-- Customer summary page\n\nSELECT [c].[Name], (\n    SELECT COUNT(*)\n    FROM [Orders] AS [o]\n    WHERE [c].[Id] = [o].[CustomerId]), (\n    SELECT COALESCE(SUM([o0].[Total]), 0.0)\n    FROM [Orders] AS [o0]\n    WHERE [c].[Id] = [o0].[CustomerId])\nFROM [Customers] AS [c]\nWHERE [c].[City] = N'Pune'\n-----\nSELECT [c].[Name], [c].[Id], [o0].[Total], [o0].[Id]\nFROM [Customers] AS [c]\nLEFT JOIN (\n    SELECT [o].[Total], [o].[Id], [o].[CustomerId]\n    FROM [Orders] AS [o]\n    WHERE [o].[Total] > 500.0\n) AS [o0] ON [c].[Id] = [o0].[CustomerId]\nORDER BY [c].[Id]\n*/\n\npublic record CustomerSummary(string Name, int OrderCount, decimal TotalSpent);\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public string City { get; set; } = \"\";\n    public string? Notes { get; set; }              // nvarchar(max): costly to drag along\n    public List<Order> Orders { get; } = [];\n}\n\npublic class Order\n{\n    public int Id { get; set; }\n    public decimal Total { get; set; }\n    public int CustomerId { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<Order> Orders => Set<Order>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n        => modelBuilder.Entity<Order>().Property(o => o.Total).HasPrecision(10, 2);\n}"
        }
      ]
    },
    {
      id: "raw-sql-in-depth",
      depth: "detailed",
      title: {
        en: "Raw SQL in depth: FromSqlRaw, stored procedures, ExecuteSql, views",
        hi: "Raw SQL गहराई में: FromSqlRaw, stored procedures, ExecuteSql, views",
        hg: "Raw SQL gehraai mein: FromSqlRaw, stored procedures, ExecuteSql, views"
      },
      body: {
        en: "<ul>\n<li><code>FromSqlRaw</code> is for SQL whose <b>text</b> you build yourself. Values still go as parameters: <code>FromSqlRaw(\"EXEC dbo.GetCustomersByCity @city\", new SqlParameter(\"@city\", city))</code>. Table or column names cannot be parameters — pick them from a fixed allow-list, never from user input directly.</li>\n<li>The SQL must return <b>all columns</b> of the entity, with matching names. EF wraps composable SQL (a <code>SELECT</code>) as a subquery, so <code>Where</code>, <code>OrderBy</code>, <code>Include</code> and paging still run in the database. The results are tracked like any other query unless you add <code>AsNoTracking()</code>.</li>\n<li>SQL Server cannot compose over <code>EXEC</code>: put <code>AsEnumerable()</code>/<code>AsAsyncEnumerable()</code> right after a stored-procedure call, so any further LINQ runs in memory.</li>\n<li><code>db.Database.ExecuteSql($\"...\")</code> runs INSERT/UPDATE/DELETE/EXEC and returns rows affected. It does not touch the change tracker, and it joins the current transaction if one is open.</li>\n<li>For views, map a <b>keyless entity</b>: <code>modelBuilder.Entity&lt;SalesRow&gt;().HasNoKey().ToView(\"vw_Sales\")</code>, then query it with plain LINQ.</li>\n<li>EF's analyzer warning <b>EF1002</b> catches an interpolated string passed to <code>FromSqlRaw</code>/<code>ExecuteSqlRaw</code>. In EF Core 9 it does not flag <code>+</code> concatenation; EF Core 10 adds a warning for concatenation inside the raw SQL methods. Code review is still the main guard.</li>\n</ul>",
        hi: "<ul>\n<li><code>FromSqlRaw</code> उस SQL के लिए है जिसका <b>text</b> आप खुद बनाते हो। Values फिर भी parameters से जाएँ: <code>FromSqlRaw(\"EXEC dbo.GetCustomersByCity @city\", new SqlParameter(\"@city\", city))</code>। Table या column names parameters नहीं बन सकते — उन्हें एक fixed allow-list से चुनो, user input से सीधे कभी नहीं।</li>\n<li>SQL को entity के <b>सारे columns</b> matching names के साथ लौटाने चाहिए। EF composable SQL (एक <code>SELECT</code>) को subquery बनाकर लपेटता है, इसलिए <code>Where</code>, <code>OrderBy</code>, <code>Include</code> और paging फिर भी database में चलते हैं। Results बाकी queries की तरह track होते हैं, जब तक आप <code>AsNoTracking()</code> न जोड़ो।</li>\n<li>SQL Server <code>EXEC</code> के ऊपर compose नहीं कर सकता: stored-procedure call के तुरंत बाद <code>AsEnumerable()</code>/<code>AsAsyncEnumerable()</code> लगाओ, ताकि आगे का LINQ memory में चले।</li>\n<li><code>db.Database.ExecuteSql($\"...\")</code> INSERT/UPDATE/DELETE/EXEC चलाता है और affected rows लौटाता है। यह change tracker को नहीं छूता, और अगर कोई transaction खुला है तो उसी में शामिल होता है।</li>\n<li>Views के लिए एक <b>keyless entity</b> map करो: <code>modelBuilder.Entity&lt;SalesRow&gt;().HasNoKey().ToView(\"vw_Sales\")</code>, फिर उसे सीधे LINQ से query करो।</li>\n<li>EF का analyzer warning <b>EF1002</b> तब पकड़ता है जब <code>FromSqlRaw</code>/<code>ExecuteSqlRaw</code> को interpolated string दी जाए। EF Core 9 में यह <code>+</code> से जोड़ी गई string को flag नहीं करता; EF Core 10 raw SQL methods के अंदर string जोड़ने पर भी warning देता है। फिर भी असली पहरा code review का है।</li>\n</ul>",
        hg: "<ul>\n<li><code>FromSqlRaw</code> us SQL ke liye hai jiska <b>text</b> aap khud banate ho. Values phir bhi parameters se jaayein: <code>FromSqlRaw(\"EXEC dbo.GetCustomersByCity @city\", new SqlParameter(\"@city\", city))</code>. Table ya column names parameters nahi ban sakte — unhe ek fixed allow-list se chuno, user input se seedhe kabhi nahi.</li>\n<li>SQL ko entity ke <b>saare columns</b> matching names ke saath lautaane chahiye. EF composable SQL (ek <code>SELECT</code>) ko subquery banakar lapetta hai, isliye <code>Where</code>, <code>OrderBy</code>, <code>Include</code> aur paging phir bhi database mein chalte hain. Results baaki queries ki tarah track hote hain, jab tak aap <code>AsNoTracking()</code> na jodo.</li>\n<li>SQL Server <code>EXEC</code> ke upar compose nahi kar sakta: stored-procedure call ke turant baad <code>AsEnumerable()</code>/<code>AsAsyncEnumerable()</code> lagao, taaki aage ka LINQ memory mein chale.</li>\n<li><code>db.Database.ExecuteSql($\"...\")</code> INSERT/UPDATE/DELETE/EXEC chalata hai aur affected rows lautaata hai. Yeh change tracker ko nahi chhoota, aur agar koi transaction khula hai to usi mein shaamil hota hai.</li>\n<li>Views ke liye ek <b>keyless entity</b> map karo: <code>modelBuilder.Entity&lt;SalesRow&gt;().HasNoKey().ToView(\"vw_Sales\")</code>, phir use seedhe LINQ se query karo.</li>\n<li>EF ka analyzer warning <b>EF1002</b> tab pakadta hai jab <code>FromSqlRaw</code>/<code>ExecuteSqlRaw</code> ko interpolated string di jaaye. EF Core 9 mein yeh <code>+</code> se jodi gayi string ko flag nahi karta; EF Core 10 raw SQL methods ke andar string jodne par bhi warning deta hai. Phir bhi asli pehra code review ka hai.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "The SQL Server SQL when you compose LINQ over FromSql and SqlQuery&lt;T&gt; (ToQueryString — no database needed)",
            hi: "FromSql और SqlQuery&lt;T&gt; के ऊपर LINQ compose करने पर SQL Server SQL (ToQueryString — database की ज़रूरत नहीं)",
            hg: "FromSql aur SqlQuery&lt;T&gt; ke upar LINQ compose karne par SQL Server SQL (ToQueryString — database ki zaroorat nahi)"
          },
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          expected: "DECLARE p0 nvarchar(4000) = N'Pune';\n\nSELECT [c].[Id], [c].[City], [c].[Name]\nFROM (\n    SELECT * FROM Customers WHERE City = @p0\n) AS [c]\nWHERE [c].[Name] LIKE N'A%'\nORDER BY [c].[Name]\n-----\nSELECT [c].[City], [c].[Total]\nFROM (\n    SELECT City, COUNT(*) AS Total FROM Customers GROUP BY City\n) AS [c]\nWHERE [c].[Total] > 1",
          src: "using Microsoft.EntityFrameworkCore;\n\nvar options = new DbContextOptionsBuilder<ShopContext>()\n    .UseSqlServer(\"Server=.;Database=Shop;Trusted_Connection=True;\")   // dummy: nothing connects\n    .Options;\nusing var db = new ShopContext(options);\n\nstring city = \"Pune\";   // imagine this came from the user\n\n// Your SQL becomes a subquery; the LINQ on top runs in SQL Server too\nvar fromSql = db.Customers\n    .FromSql($\"SELECT * FROM Customers WHERE City = {city}\")\n    .Where(c => c.Name.StartsWith(\"A\"))\n    .OrderBy(c => c.Name);\nConsole.WriteLine(fromSql.ToQueryString());\nConsole.WriteLine(\"-----\");\n\n// SqlQuery<T> with an unmapped DTO (EF Core 8+), composed with Where\nvar busyCities = db.Database\n    .SqlQuery<CityCount>($\"SELECT City, COUNT(*) AS Total FROM Customers GROUP BY City\")\n    .Where(x => x.Total > 1);\nConsole.WriteLine(busyCities.ToQueryString());\n\n/* Output (EF Core 9 prints the DECLARE line without '@' — cosmetic; the command sends @p0 as a real parameter):\nDECLARE p0 nvarchar(4000) = N'Pune';\n\nSELECT [c].[Id], [c].[City], [c].[Name]\nFROM (\n    SELECT * FROM Customers WHERE City = @p0\n) AS [c]\nWHERE [c].[Name] LIKE N'A%'\nORDER BY [c].[Name]\n-----\nSELECT [c].[City], [c].[Total]\nFROM (\n    SELECT City, COUNT(*) AS Total FROM Customers GROUP BY City\n) AS [c]\nWHERE [c].[Total] > 1\n*/\n\npublic record CityCount(string City, int Total);\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public string City { get; set; } = \"\";\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}"
        }
      ]
    },
    {
      id: "savepoints-retries",
      depth: "detailed",
      title: {
        en: "Savepoints, execution-strategy retries and TransactionScope",
        hi: "Savepoints, execution-strategy retries और TransactionScope",
        hg: "Savepoints, execution-strategy retries aur TransactionScope"
      },
      body: {
        en: "<ul>\n<li><b>Savepoints</b> (EF Core 5+): inside your transaction, each <code>SaveChanges()</code> creates a savepoint first. If it fails, EF rolls back to that savepoint only, so your earlier work in the transaction is still there.</li>\n<li><b>Sharing a transaction</b> with Dapper or plain ADO.NET: use the same connection, take <code>db.Database.GetDbTransaction()</code> for the other code, or hand an existing <code>DbTransaction</code> to EF with <code>db.Database.UseTransaction(tx)</code>.</li>\n<li><b>Retries</b>: <code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure())</code> retries transient errors (Azure SQL failover, network blips). With retries on, if you open a transaction outside the strategy, the next <code>SaveChanges()</code> or query that the strategy runs throws <code>InvalidOperationException</code> — so run the whole unit inside <code>db.Database.CreateExecutionStrategy().Execute(...)</code>.</li>\n<li>The retried block must be safe to run again: start each attempt from a clean change tracker (or a new DbContext), and do not call external services inside it.</li>\n<li><b>TransactionScope</b>: works with EF Core, but its default isolation is <b>Serializable</b> (more blocking than you expect), <code>async</code> code needs <code>TransactionScopeAsyncFlowOption.Enabled</code>, and two different connections inside one scope can escalate to a distributed transaction, which modern .NET supports only on Windows and only when you opt in. Prefer <code>BeginTransaction()</code> on one connection.</li>\n</ul>",
        hi: "<ul>\n<li><b>Savepoints</b> (EF Core 5+): आपके transaction के अंदर हर <code>SaveChanges()</code> पहले एक savepoint बनाता है। Fail हुआ तो EF सिर्फ़ उसी savepoint तक rollback करता है, इसलिए transaction में आपका पहले का काम बचा रहता है।</li>\n<li>Dapper या plain ADO.NET के साथ <b>transaction share करना</b>: वही connection use करो, दूसरे code के लिए <code>db.Database.GetDbTransaction()</code> लो, या पहले से बना <code>DbTransaction</code> <code>db.Database.UseTransaction(tx)</code> से EF को दो।</li>\n<li><b>Retries</b>: <code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure())</code> transient errors (Azure SQL failover, network की छोटी गड़बड़) को retry करता है। Retries चालू हों और आप strategy के बाहर transaction खोलो, तो strategy का चलाया अगला <code>SaveChanges()</code> या query <code>InvalidOperationException</code> throw करता है — इसलिए पूरा unit <code>db.Database.CreateExecutionStrategy().Execute(...)</code> के अंदर चलाओ।</li>\n<li>Retry होने वाला block दोबारा चलने लायक होना चाहिए: हर attempt साफ़ change tracker (या नए DbContext) से शुरू करो, और उसके अंदर external services call मत करो।</li>\n<li><b>TransactionScope</b>: EF Core के साथ चलता है, पर इसका default isolation <b>Serializable</b> है (उम्मीद से ज़्यादा blocking), <code>async</code> code के लिए <code>TransactionScopeAsyncFlowOption.Enabled</code> चाहिए, और एक scope में दो अलग connections distributed transaction तक escalate हो सकते हैं, जो modern .NET सिर्फ़ Windows पर और सिर्फ़ opt-in करने पर support करता है। एक connection पर <code>BeginTransaction()</code> बेहतर है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Savepoints</b> (EF Core 5+): aapke transaction ke andar har <code>SaveChanges()</code> pehle ek savepoint banata hai. Fail hua to EF sirf usi savepoint tak rollback karta hai, isliye transaction mein aapka pehle ka kaam bacha rehta hai.</li>\n<li>Dapper ya plain ADO.NET ke saath <b>transaction share karna</b>: wahi connection use karo, doosre code ke liye <code>db.Database.GetDbTransaction()</code> lo, ya pehle se bana <code>DbTransaction</code> <code>db.Database.UseTransaction(tx)</code> se EF ko do.</li>\n<li><b>Retries</b>: <code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure())</code> transient errors (Azure SQL failover, network ki chhoti gadbad) ko retry karta hai. Retries chaalu hon aur aap strategy ke baahar transaction kholo, to strategy ka chalaaya agla <code>SaveChanges()</code> ya query <code>InvalidOperationException</code> throw karta hai — isliye poora unit <code>db.Database.CreateExecutionStrategy().Execute(...)</code> ke andar chalao.</li>\n<li>Retry hone wala block dobara chalne laayak hona chahiye: har attempt saaf change tracker (ya naye DbContext) se shuru karo, aur uske andar external services call mat karo.</li>\n<li><b>TransactionScope</b>: EF Core ke saath chalta hai, par iska default isolation <b>Serializable</b> hai (ummeed se zyaada blocking), <code>async</code> code ke liye <code>TransactionScopeAsyncFlowOption.Enabled</code> chahiye, aur ek scope mein do alag connections distributed transaction tak escalate ho sakte hain, jo modern .NET sirf Windows par aur sirf opt-in karne par support karta hai. Ek connection par <code>BeginTransaction()</code> behtar hai.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "The production shape on SQL Server: EnableRetryOnFailure + ExecuteAsync around the transaction, and a safer TransactionScope (compiles)",
            hi: "SQL Server पर production वाला ढाँचा: EnableRetryOnFailure + transaction के चारों ओर ExecuteAsync, और एक safer TransactionScope (compile होता है)",
            hg: "SQL Server par production wala dhaancha: EnableRetryOnFailure + transaction ke chaaron or ExecuteAsync, aur ek safer TransactionScope (compile hota hai)"
          },
          check: "compile",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          src: "using System.Transactions;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddDbContext<ShopContext>(o => o.UseSqlServer(\n    \"Server=.;Database=Shop;Trusted_Connection=True;\",\n    sql => sql.EnableRetryOnFailure(\n        maxRetryCount: 5,\n        maxRetryDelay: TimeSpan.FromSeconds(10),\n        errorNumbersToAdd: null)));\n\npublic class OrderService(ShopContext db)\n{\n    public async Task PlaceOrderAsync(int productId, int quantity, CancellationToken ct)\n    {\n        var strategy = db.Database.CreateExecutionStrategy();\n        await strategy.ExecuteAsync(async () =>\n        {\n            db.ChangeTracker.Clear();                         // safe to run again\n            await using var tx = await db.Database.BeginTransactionAsync(ct);\n\n            int reserved = await db.Products\n                .Where(p => p.Id == productId && p.Stock >= quantity)\n                .ExecuteUpdateAsync(s => s.SetProperty(p => p.Stock, p => p.Stock - quantity), ct);\n            if (reserved == 0) throw new InvalidOperationException(\"Out of stock\");\n\n            db.Orders.Add(new Order { ProductId = productId, Quantity = quantity });\n            await db.SaveChangesAsync(ct);\n\n            await tx.CommitAsync(ct);                         // both steps or neither\n        });\n    }\n\n    // If you must use TransactionScope: set the isolation level and enable async flow.\n    // With retries on, an ambient TransactionScope is also a user transaction,\n    // so it goes inside the strategy too.\n    public Task ImportAsync(CancellationToken ct)\n        => db.Database.CreateExecutionStrategy().ExecuteAsync(async () =>\n        {\n            db.ChangeTracker.Clear();\n            using var scope = new TransactionScope(\n                TransactionScopeOption.Required,\n                new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadCommitted },\n                TransactionScopeAsyncFlowOption.Enabled);\n\n            db.Orders.Add(new Order { ProductId = 1, Quantity = 1 });\n            await db.SaveChangesAsync(ct);\n\n            scope.Complete();                                 // no Complete() = rollback\n        });\n}\n\npublic class Product\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public int Stock { get; set; }\n}\n\npublic class Order\n{\n    public int Id { get; set; }\n    public int ProductId { get; set; }\n    public int Quantity { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n    public DbSet<Order> Orders => Set<Order>();\n}"
        }
      ]
    },
    {
      id: "rowversion-store-vs-client-wins",
      depth: "detailed",
      title: {
        en: "rowversion on SQL Server, store wins vs client wins, web APIs",
        hi: "SQL Server में rowversion, store wins बनाम client wins, web APIs",
        hg: "SQL Server mein rowversion, store wins banaam client wins, web APIs"
      },
      body: {
        en: "<ul>\n<li><b>SQL Server</b>: <code>[Timestamp] public byte[] Version { get; set; }</code> (or <code>.IsRowVersion()</code>) creates a <code>rowversion</code> column. SQL Server changes it on <b>every</b> update. EF puts the original value in the <code>WHERE</code> and reads the new value back with <code>OUTPUT INSERTED.[Version]</code> — see the SQL below.</li>\n<li><b>Store wins</b> (\"database wins\"): <code>entry.Reload()</code> — drop your change, show the latest data. <b>Client wins</b>: <code>entry.OriginalValues.SetValues(databaseValues)</code>, then save again — your values overwrite theirs. <b>Merge</b>: compare property by property and let the user decide.</li>\n<li><b>Web APIs</b>: the \"original value\" must be what the <b>user saw</b>, not what you loaded a millisecond ago. Send the version to the client (often as an <code>ETag</code>), take it back with the PUT, and set <code>db.Entry(product).Property(p =&gt; p.Version).OriginalValue = dto.Version</code> before saving. Return <code>409 Conflict</code> (or <code>412</code> with <code>If-Match</code>) on a conflict.</li>\n<li>Even without a token, an UPDATE/DELETE that hits 0 rows (for example, the row was deleted) raises the same exception.</li>\n</ul>",
        hi: "<ul>\n<li><b>SQL Server</b>: <code>[Timestamp] public byte[] Version { get; set; }</code> (या <code>.IsRowVersion()</code>) एक <code>rowversion</code> column बनाता है। SQL Server इसे <b>हर</b> update पर बदलता है। EF original value को <code>WHERE</code> में डालता है और नई value <code>OUTPUT INSERTED.[Version]</code> से वापस पढ़ता है — नीचे SQL देखो।</li>\n<li><b>Store wins</b> (\"database wins\"): <code>entry.Reload()</code> — अपना बदलाव छोड़ो, latest data दिखाओ। <b>Client wins</b>: <code>entry.OriginalValues.SetValues(databaseValues)</code>, फिर दोबारा save — आपकी values उनकी values को overwrite करती हैं। <b>Merge</b>: property-by-property compare करो और user को तय करने दो।</li>\n<li><b>Web APIs</b>: \"original value\" वो होनी चाहिए जो <b>user ने देखी</b>, वो नहीं जो आपने एक millisecond पहले load की। Version client को भेजो (अक्सर <code>ETag</code> के रूप में), PUT के साथ वापस लो, और save से पहले <code>db.Entry(product).Property(p =&gt; p.Version).OriginalValue = dto.Version</code> set करो। Conflict पर <code>409 Conflict</code> (या <code>If-Match</code> के साथ <code>412</code>) लौटाओ।</li>\n<li>Token के बिना भी, अगर UPDATE/DELETE 0 rows पर लगे (जैसे row delete हो चुकी), तो यही exception आता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>SQL Server</b>: <code>[Timestamp] public byte[] Version { get; set; }</code> (ya <code>.IsRowVersion()</code>) ek <code>rowversion</code> column banata hai. SQL Server ise <b>har</b> update par badalta hai. EF original value ko <code>WHERE</code> mein daalta hai aur nayi value <code>OUTPUT INSERTED.[Version]</code> se wapas padhta hai — neeche SQL dekho.</li>\n<li><b>Store wins</b> (\"database wins\"): <code>entry.Reload()</code> — apna badlaav chhodo, latest data dikhao. <b>Client wins</b>: <code>entry.OriginalValues.SetValues(databaseValues)</code>, phir dobara save — aapki values unki values ko overwrite karti hain. <b>Merge</b>: property-by-property compare karo aur user ko tay karne do.</li>\n<li><b>Web APIs</b>: \"original value\" woh honi chahiye jo <b>user ne dekhi</b>, woh nahi jo aapne ek millisecond pehle load ki. Version client ko bhejo (aksar <code>ETag</code> ke roop mein), PUT ke saath wapas lo, aur save se pehle <code>db.Entry(product).Property(p =&gt; p.Version).OriginalValue = dto.Version</code> set karo. Conflict par <code>409 Conflict</code> (ya <code>If-Match</code> ke saath <code>412</code>) lautaao.</li>\n<li>Token ke bina bhi, agar UPDATE/DELETE 0 rows par lage (jaise row delete ho chuki), to yahi exception aata hai.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "SQL Server: the rowversion DDL and the UPDATE that EF sends (a demo interceptor prints the SQL instead of sending it — no server needed)",
            hi: "SQL Server: rowversion का DDL और EF का भेजा UPDATE (demo interceptor SQL भेजने की बजाय print करता है — server की ज़रूरत नहीं)",
            hg: "SQL Server: rowversion ka DDL aur EF ka bheja UPDATE (demo interceptor SQL bhejne ki bajaay print karta hai — server ki zaroorat nahi)"
          },
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          expected: "CREATE TABLE [Products] (\n    [Id] int NOT NULL IDENTITY,\n    [Name] nvarchar(100) NOT NULL,\n    [Price] decimal(10,2) NOT NULL,\n    [Version] rowversion NOT NULL,\n    CONSTRAINT [PK_Products] PRIMARY KEY ([Id])\n);\nGO\n-----\nSET IMPLICIT_TRANSACTIONS OFF;\nSET NOCOUNT ON;\nUPDATE [Products] SET [Price] = @p0\nOUTPUT INSERTED.[Version]\nWHERE [Id] = @p1 AND [Version] = @p2;",
          src: "using System.ComponentModel.DataAnnotations;\nusing System.Data;\nusing System.Data.Common;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Diagnostics;\n\nvar options = new DbContextOptionsBuilder<ShopContext>()\n    .UseSqlServer(\"Server=.;Database=Shop;Trusted_Connection=True;\")   // dummy\n    .AddInterceptors(new NoConnection(), new PrintSqlInsteadOfRunning())\n    .Options;\nusing var db = new ShopContext(options);\n\n// 1. The table EF creates for [Timestamp]\nConsole.WriteLine(db.Database.GenerateCreateScript().Trim());\nConsole.WriteLine(\"-----\");\n\n// 2. The UPDATE for a product that the user loaded with Version 0x...01\nvar pen = new Product { Id = 7, Name = \"Pen\", Price = 10, Version = [0, 0, 0, 0, 0, 0, 0, 1] };\ndb.Attach(pen);           // pretend we loaded it\npen.Price = 12;\ndb.SaveChanges();\n\n/* Output:\nCREATE TABLE [Products] (\n    [Id] int NOT NULL IDENTITY,\n    [Name] nvarchar(100) NOT NULL,\n    [Price] decimal(10,2) NOT NULL,\n    [Version] rowversion NOT NULL,\n    CONSTRAINT [PK_Products] PRIMARY KEY ([Id])\n);\nGO\n-----\nSET IMPLICIT_TRANSACTIONS OFF;\nSET NOCOUNT ON;\nUPDATE [Products] SET [Price] = @p0\nOUTPUT INSERTED.[Version]                    -- read back the new rowversion\nWHERE [Id] = @p1 AND [Version] = @p2;        -- @p2 = the version the user saw\n*/\n\npublic class Product\n{\n    public int Id { get; set; }\n    [MaxLength(100)] public string Name { get; set; } = \"\";\n    public decimal Price { get; set; }\n    [Timestamp] public byte[] Version { get; set; } = [];      // SQL Server rowversion\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n        => modelBuilder.Entity<Product>().Property(p => p.Price).HasPrecision(10, 2);\n}\n\n// ---- Demo plumbing: print the SQL instead of sending it, so no SQL Server is needed ----\npublic class NoConnection : DbConnectionInterceptor\n{\n    public override InterceptionResult ConnectionOpening(DbConnection c, ConnectionEventData e, InterceptionResult r)\n        => InterceptionResult.Suppress();\n    public override InterceptionResult ConnectionClosing(DbConnection c, ConnectionEventData e, InterceptionResult r)\n        => InterceptionResult.Suppress();\n}\n\npublic class PrintSqlInsteadOfRunning : DbCommandInterceptor\n{\n    public override InterceptionResult<DbDataReader> ReaderExecuting(DbCommand command, CommandEventData e, InterceptionResult<DbDataReader> r)\n    {\n        Console.WriteLine(command.CommandText.Trim());\n        var fake = new DataTable();                                   // pretend 1 row was updated\n        fake.Columns.Add(\"Version\", typeof(byte[]));\n        fake.Rows.Add(new byte[] { 0, 0, 0, 0, 0, 0, 0, 2 });\n        return InterceptionResult<DbDataReader>.SuppressWithResult(fake.CreateDataReader());\n    }\n}"
        }
      ]
    },
    {
      id: "bulk-in-depth",
      depth: "detailed",
      title: {
        en: "ExecuteUpdate in depth: the SQL, transactions and what is skipped",
        hi: "ExecuteUpdate गहराई में: SQL, transactions और क्या छूटता है",
        hg: "ExecuteUpdate gehraai mein: SQL, transactions aur kya chhoot jaata hai"
      },
      body: {
        en: "<ul>\n<li><b>SQL</b>: SQL Server gets <code>UPDATE [o] SET ... FROM [Orders] AS [o] INNER JOIN ... WHERE ...</code> — filters on navigations become JOINs or <code>EXISTS</code>, exactly as a DBA would write it (see below). One call updates <b>one table</b>.</li>\n<li><b>Runs now</b>, as its own statement, and returns rows affected. If you opened a transaction with <code>BeginTransaction()</code>, it joins it — use that when it must succeed or fail together with a <code>SaveChanges()</code>.</li>\n<li><b>No SaveChanges pipeline</b>: <code>SavingChanges</code> events, SaveChanges interceptors and audit code in a <code>SaveChanges</code> override do not run — set <code>UpdatedOn</code>/<code>UpdatedBy</code> in the <code>SetProperty</code> calls yourself. There is no concurrency check unless you put the version in the <code>Where</code>.</li>\n<li><b>Query filters</b> apply (soft-deleted rows are skipped; <code>IgnoreQueryFilters()</code> to include them). <b>Cascade</b> happens only through the database's <code>ON DELETE CASCADE</code>; if the FK has no cascade, deleting a parent with children fails with a constraint error.</li>\n</ul>",
        hi: "<ul>\n<li><b>SQL</b>: SQL Server को <code>UPDATE [o] SET ... FROM [Orders] AS [o] INNER JOIN ... WHERE ...</code> मिलता है — navigations पर filters JOINs या <code>EXISTS</code> बन जाते हैं, बिल्कुल वैसे जैसे एक DBA लिखता (नीचे देखो)। एक call <b>एक table</b> update करती है।</li>\n<li><b>अभी चलता है</b>, अपने अलग statement की तरह, और affected rows लौटाता है। अगर आपने <code>BeginTransaction()</code> से transaction खोला है, तो यह उसमें शामिल होता है — जब इसे किसी <code>SaveChanges()</code> के साथ succeed या fail होना हो तब यही करो।</li>\n<li><b>SaveChanges pipeline नहीं चलती</b>: <code>SavingChanges</code> events, SaveChanges interceptors और <code>SaveChanges</code> override वाला audit code नहीं चलता — <code>UpdatedOn</code>/<code>UpdatedBy</code> खुद <code>SetProperty</code> calls में set करो। जब तक आप version को <code>Where</code> में न डालो, कोई concurrency check नहीं होता।</li>\n<li><b>Query filters</b> लागू होते हैं (soft-deleted rows छूट जाती हैं; उन्हें शामिल करने के लिए <code>IgnoreQueryFilters()</code>)। <b>Cascade</b> सिर्फ़ database के <code>ON DELETE CASCADE</code> से होता है; FK पर cascade न हो तो children वाले parent को delete करना constraint error से fail होता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>SQL</b>: SQL Server ko <code>UPDATE [o] SET ... FROM [Orders] AS [o] INNER JOIN ... WHERE ...</code> milta hai — navigations par filters JOINs ya <code>EXISTS</code> ban jaate hain, bilkul waise jaise ek DBA likhta (neeche dekho). Ek call <b>ek table</b> update karti hai.</li>\n<li><b>Abhi chalta hai</b>, apne alag statement ki tarah, aur affected rows lautaata hai. Agar aapne <code>BeginTransaction()</code> se transaction khola hai, to yeh usmein shaamil hota hai — jab ise kisi <code>SaveChanges()</code> ke saath succeed ya fail hona ho tab yahi karo.</li>\n<li><b>SaveChanges pipeline nahi chalti</b>: <code>SavingChanges</code> events, SaveChanges interceptors aur <code>SaveChanges</code> override wala audit code nahi chalta — <code>UpdatedOn</code>/<code>UpdatedBy</code> khud <code>SetProperty</code> calls mein set karo. Jab tak aap version ko <code>Where</code> mein na daalo, koi concurrency check nahi hota.</li>\n<li><b>Query filters</b> laagu hote hain (soft-deleted rows chhoot jaati hain; unhe shaamil karne ke liye <code>IgnoreQueryFilters()</code>). <b>Cascade</b> sirf database ke <code>ON DELETE CASCADE</code> se hota hai; FK par cascade na ho to children wale parent ko delete karna constraint error se fail hota hai.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "The SQL Server SQL for ExecuteUpdate and ExecuteDelete (a demo interceptor prints the SQL instead of sending it)",
            hi: "ExecuteUpdate और ExecuteDelete का SQL Server SQL (demo interceptor SQL भेजने की बजाय print करता है)",
            hg: "ExecuteUpdate aur ExecuteDelete ka SQL Server SQL (demo interceptor SQL bhejne ki bajaay print karta hai)"
          },
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          expected: "UPDATE [p]\nSET [p].[Status] = N'Restock',\n    [p].[Price] = [p].[Price] * 1.1\nFROM [Products] AS [p]\nWHERE [p].[Stock] = 0\n-----\nUPDATE [o]\nSET [o].[Status] = N'Archived'\nFROM [Orders] AS [o]\nINNER JOIN [Customers] AS [c] ON [o].[CustomerId] = [c].[Id]\nWHERE [c].[City] = N'Nagpur'\n-----\nDELETE FROM [c]\nFROM [Customers] AS [c]\nWHERE NOT EXISTS (\n    SELECT 1\n    FROM [Orders] AS [o]\n    WHERE [c].[Id] = [o].[CustomerId])\n-----",
          src: "using System.Data.Common;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Diagnostics;\n\nvar options = new DbContextOptionsBuilder<ShopContext>()\n    .UseSqlServer(\"Server=.;Database=Shop;Trusted_Connection=True;\")   // dummy\n    .AddInterceptors(new NoConnection(), new PrintSqlInsteadOfRunning())\n    .Options;\nusing var db = new ShopContext(options);\n\n// 10% price rise on everything out of stock, plus a constant column\ndb.Products\n    .Where(p => p.Stock == 0)\n    .ExecuteUpdate(s => s\n        .SetProperty(p => p.Price, p => p.Price * 1.1m)\n        .SetProperty(p => p.Status, \"Restock\"));\n\n// Archive the orders of customers in one city: the navigation becomes a JOIN\ndb.Orders\n    .Where(o => o.Customer.City == \"Nagpur\")\n    .ExecuteUpdate(s => s.SetProperty(o => o.Status, \"Archived\"));\n\n// Delete customers who never ordered: Any() becomes NOT EXISTS\ndb.Customers.Where(c => !c.Orders.Any()).ExecuteDelete();\n\n/* Output:\nUPDATE [p]\nSET [p].[Status] = N'Restock',\n    [p].[Price] = [p].[Price] * 1.1\nFROM [Products] AS [p]\nWHERE [p].[Stock] = 0\n-----\nUPDATE [o]\nSET [o].[Status] = N'Archived'\nFROM [Orders] AS [o]\nINNER JOIN [Customers] AS [c] ON [o].[CustomerId] = [c].[Id]\nWHERE [c].[City] = N'Nagpur'\n-----\nDELETE FROM [c]\nFROM [Customers] AS [c]\nWHERE NOT EXISTS (\n    SELECT 1\n    FROM [Orders] AS [o]\n    WHERE [c].[Id] = [o].[CustomerId])\n-----\n*/\n\npublic class Product\n{\n    public int Id { get; set; }\n    public decimal Price { get; set; }\n    public int Stock { get; set; }\n    public string Status { get; set; } = \"\";\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string City { get; set; } = \"\";\n    public List<Order> Orders { get; } = [];\n}\n\npublic class Order\n{\n    public int Id { get; set; }\n    public string Status { get; set; } = \"\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<Order> Orders => Set<Order>();\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n        => modelBuilder.Entity<Product>().Property(p => p.Price).HasPrecision(10, 2);\n}\n\n// ---- Demo plumbing: print the SQL instead of sending it, so no SQL Server is needed ----\npublic class NoConnection : DbConnectionInterceptor\n{\n    public override InterceptionResult ConnectionOpening(DbConnection c, ConnectionEventData e, InterceptionResult r)\n        => InterceptionResult.Suppress();\n    public override InterceptionResult ConnectionClosing(DbConnection c, ConnectionEventData e, InterceptionResult r)\n        => InterceptionResult.Suppress();\n}\n\npublic class PrintSqlInsteadOfRunning : DbCommandInterceptor\n{\n    public override InterceptionResult<int> NonQueryExecuting(DbCommand command, CommandEventData e, InterceptionResult<int> r)\n    {\n        Console.WriteLine(command.CommandText.Trim());\n        Console.WriteLine(\"-----\");\n        return InterceptionResult<int>.SuppressWithResult(0);         // pretend: 0 rows affected\n    }\n}"
        },
        {
          caption: {
            en: "What ExecuteUpdate/ExecuteDelete skip and respect, on in-memory SQLite: SavingChanges, query filters, database cascade",
            hi: "In-memory SQLite पर ExecuteUpdate/ExecuteDelete क्या skip करते हैं और क्या मानते हैं: SavingChanges, query filters, database cascade",
            hg: "In-memory SQLite par ExecuteUpdate/ExecuteDelete kya skip karte hain aur kya maante hain: SavingChanges, query filters, database cascade"
          },
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ],
          expected: "Price raised on 1 row(s); SavingChanges events = 0\nPrices: Pen=15, Ink=20, Book=50\nCustomers deleted = 1, orders left = 0",
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\n\nusing var db = new ShopContext(options);\ndb.Database.EnsureCreated();\ndb.Products.AddRange(\n    new Product { Name = \"Pen\", Price = 10, Stock = 0 },\n    new Product { Name = \"Ink\", Price = 20, Stock = 0, IsDeleted = true },   // soft-deleted\n    new Product { Name = \"Book\", Price = 50, Stock = 3 });\nvar oldCo = new Customer { Name = \"Old Co\" };\noldCo.Orders.Add(new Order());\noldCo.Orders.Add(new Order());\ndb.Customers.Add(oldCo);\ndb.SaveChanges();\ndb.ChangeTracker.Clear();\n\nint savingEvents = 0;\ndb.SavingChanges += (_, _) => savingEvents++;\n\n// Query filter (!IsDeleted) applies: Ink is skipped\nint raised = db.Products\n    .Where(p => p.Stock == 0)\n    .ExecuteUpdate(s => s.SetProperty(p => p.Price, p => p.Price + 5));\nConsole.WriteLine($\"Price raised on {raised} row(s); SavingChanges events = {savingEvents}\");\n\nvar prices = db.Products.IgnoreQueryFilters().OrderBy(p => p.Id).Select(p => p.Name + \"=\" + p.Price);\nConsole.WriteLine(\"Prices: \" + string.Join(\", \", prices));\n\n// The parent goes; its orders go too — because the DATABASE has ON DELETE CASCADE\nint customers = db.Customers.Where(c => c.Name == \"Old Co\").ExecuteDelete();\nConsole.WriteLine($\"Customers deleted = {customers}, orders left = {db.Orders.Count()}\");\n\npublic class Product\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public int Price { get; set; }\n    public int Stock { get; set; }\n    public bool IsDeleted { get; set; }\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<Order> Orders { get; } = [];\n}\n\npublic class Order\n{\n    public int Id { get; set; }\n    public int CustomerId { get; set; }          // required FK: EF creates ON DELETE CASCADE\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<Order> Orders => Set<Order>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n        => modelBuilder.Entity<Product>().HasQueryFilter(p => !p.IsDeleted);\n}"
        },
        {
          caption: {
            en: "EF Core 10 (.NET 10): ExecuteUpdateAsync also accepts a normal lambda, so setters can be conditional (not compiled here — local SDK is .NET 9)",
            hi: "EF Core 10 (.NET 10): ExecuteUpdateAsync एक normal lambda भी लेता है, इसलिए setters conditional हो सकते हैं (यहाँ compile नहीं हुआ — local SDK .NET 9 है)",
            hg: "EF Core 10 (.NET 10): ExecuteUpdateAsync ek normal lambda bhi leta hai, isliye setters conditional ho sakte hain (yahan compile nahi hua — local SDK .NET 9 hai)"
          },
          check: "none",
          src: "// EF Core 10: the setters argument can be a regular lambda with statements.\n// In EF Core 7-9 it had to be an expression tree, so an \"if\" was not possible here.\nawait db.Products\n    .Where(p => p.Stock == 0)\n    .ExecuteUpdateAsync(s =>\n    {\n        s.SetProperty(p => p.Status, \"Restock\");\n        if (applyDiscount)\n            s.SetProperty(p => p.Price, p => p.Price * 0.9m);\n    });"
        }
      ]
    },
    {
      id: "indexes-compiled-queries",
      depth: "detailed",
      title: {
        en: "Fast reads: AsNoTracking, paging, indexes, compiled queries",
        hi: "तेज़ reads: AsNoTracking, paging, indexes, compiled queries",
        hg: "Tez reads: AsNoTracking, paging, indexes, compiled queries"
      },
      body: {
        en: "<ul>\n<li><b>Read path</b>: <code>AsNoTracking()</code> on read-only queries — or <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code> as the context default for a read-heavy API — plus projections and paging (<code>OrderBy</code> + <code>Skip</code>/<code>Take</code> → <code>OFFSET ... FETCH</code>; keyset paging for deep pages, Day 4).</li>\n<li><b>Indexes</b>: EF creates indexes for keys and foreign keys only. Columns you filter or sort on need <code>HasIndex(...)</code>; on SQL Server you can add <code>IncludeProperties(...)</code> (covering index) and <code>HasFilter(...)</code> (filtered index). Then read the execution plan of the logged SQL — your SQL Server skill applies directly.</li>\n<li><b>No client evaluation</b>: since EF Core 3.0, if a <code>Where</code>/<code>OrderBy</code> cannot be translated to SQL, EF <b>throws</b> instead of silently loading the whole table. Only the final <code>Select</code> may call C# methods. If you really need C# logic, filter in SQL first, then call <code>AsEnumerable()</code> explicitly.</li>\n<li><b>Compiled queries</b>: EF already caches the translation of each query shape. <code>EF.CompileQuery</code>/<code>EF.CompileAsyncQuery</code> also skip the cache lookup (hashing and comparing the expression tree) — a small gain that matters only for very hot, simple queries. Measure with a benchmark before adding them.</li>\n<li><b>Compiled model</b> (<code>dotnet ef dbcontext optimize</code>) is a different thing: it speeds up <b>startup</b> for models with hundreds of entities.</li>\n<li><b>DbContext pooling</b> (<code>AddDbContextPool</code>, Day 5) reuses context instances under high load. <b>Async</b> (<code>ToListAsync</code>) does not make one query faster, but frees threads so the server handles more requests.</li>\n<li><b>Big exports</b>: stream with <code>AsNoTracking()</code> + <code>AsAsyncEnumerable()</code> instead of <code>ToListAsync()</code>, so rows are processed one by one instead of all held in memory (no tracking, or the change tracker keeps every row anyway). Caveat: EF buffers the results itself when a retrying execution strategy is on, and for all but the last query of a split query (unless MARS is enabled).</li>\n<li><b>See everything</b>: <code>LogTo</code> or the <code>Microsoft.EntityFrameworkCore.Database.Command</code> log category at Information; <code>EnableSensitiveDataLogging()</code> (shows parameter values) in development only.</li>\n</ul>\n<p><b>When to use:</b> the basics (no-tracking reads, projections, paging, indexes, no N+1) on every query; compiled queries, pooling and compiled models only where a profiler or benchmark shows the need. <b>When not:</b> do not micro-optimize before you have looked at the SQL and the execution plan — most EF slowness is a missing index, a missing filter, or too many round trips.</p>",
        hi: "<ul>\n<li><b>Read path</b>: read-only queries पर <code>AsNoTracking()</code> — या read-heavy API के लिए context default के रूप में <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code> — साथ में projections और paging (<code>OrderBy</code> + <code>Skip</code>/<code>Take</code> → <code>OFFSET ... FETCH</code>; गहरे pages के लिए keyset paging, Day 4)।</li>\n<li><b>Indexes</b>: EF सिर्फ़ keys और foreign keys के indexes बनाता है। जिन columns पर filter या sort करते हो, उन्हें <code>HasIndex(...)</code> चाहिए; SQL Server पर <code>IncludeProperties(...)</code> (covering index) और <code>HasFilter(...)</code> (filtered index) भी जोड़ सकते हो। फिर logged SQL का execution plan पढ़ो — आपकी SQL Server skill सीधे काम आती है।</li>\n<li><b>Client evaluation नहीं</b>: EF Core 3.0 से, अगर कोई <code>Where</code>/<code>OrderBy</code> SQL में translate नहीं हो सकता, तो EF चुपचाप पूरी table load करने की बजाय <b>throw</b> करता है। सिर्फ़ final <code>Select</code> में C# methods call हो सकते हैं। सच में C# logic चाहिए, तो पहले SQL में filter करो, फिर साफ़-साफ़ <code>AsEnumerable()</code> call करो।</li>\n<li><b>Compiled queries</b>: EF हर query shape का translation पहले से cache करता है। <code>EF.CompileQuery</code>/<code>EF.CompileAsyncQuery</code> cache lookup (expression tree की hashing और comparison) भी skip कर देते हैं — छोटा फ़ायदा, जो सिर्फ़ बहुत hot और simple queries में मायने रखता है। इन्हें जोड़ने से पहले benchmark से measure करो।</li>\n<li><b>Compiled model</b> (<code>dotnet ef dbcontext optimize</code>) अलग चीज़ है: यह सैकड़ों entities वाले models का <b>startup</b> तेज़ करता है।</li>\n<li><b>DbContext pooling</b> (<code>AddDbContextPool</code>, Day 5) high load में context instances दोबारा use करता है। <b>Async</b> (<code>ToListAsync</code>) एक query को तेज़ नहीं करता, पर threads खाली करता है ताकि server ज़्यादा requests संभाल सके।</li>\n<li><b>बड़े exports</b>: <code>ToListAsync()</code> की बजाय <code>AsNoTracking()</code> + <code>AsAsyncEnumerable()</code> से stream करो, ताकि सारी rows memory में रखने की बजाय एक-एक करके process हों (tracking नहीं, वरना change tracker हर row फिर भी रख लेता है)। ध्यान दो: retrying execution strategy चालू हो तो EF results खुद buffer करता है, और split query में आख़िरी query को छोड़कर बाकी सबके results भी (जब तक MARS चालू न हो)।</li>\n<li><b>सब कुछ देखो</b>: <code>LogTo</code> या Information level पर <code>Microsoft.EntityFrameworkCore.Database.Command</code> log category; <code>EnableSensitiveDataLogging()</code> (parameter values दिखाता है) सिर्फ़ development में।</li>\n</ul>\n<p><b>कब use करें:</b> basics (no-tracking reads, projections, paging, indexes, N+1 नहीं) हर query पर; compiled queries, pooling और compiled models सिर्फ़ वहाँ जहाँ profiler या benchmark ज़रूरत दिखाए। <b>कब नहीं:</b> SQL और execution plan देखने से पहले micro-optimize मत करो — EF की ज़्यादातर धीमापन missing index, missing filter, या बहुत ज़्यादा round trips से आता है।</p>",
        hg: "<ul>\n<li><b>Read path</b>: read-only queries par <code>AsNoTracking()</code> — ya read-heavy API ke liye context default ke roop mein <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code> — saath mein projections aur paging (<code>OrderBy</code> + <code>Skip</code>/<code>Take</code> → <code>OFFSET ... FETCH</code>; gehre pages ke liye keyset paging, Day 4).</li>\n<li><b>Indexes</b>: EF sirf keys aur foreign keys ke indexes banata hai. Jin columns par filter ya sort karte ho, unhe <code>HasIndex(...)</code> chahiye; SQL Server par <code>IncludeProperties(...)</code> (covering index) aur <code>HasFilter(...)</code> (filtered index) bhi jod sakte ho. Phir logged SQL ka execution plan padho — aapki SQL Server skill seedhe kaam aati hai.</li>\n<li><b>Client evaluation nahi</b>: EF Core 3.0 se, agar koi <code>Where</code>/<code>OrderBy</code> SQL mein translate nahi ho sakta, to EF chupchaap poori table load karne ki bajaay <b>throw</b> karta hai. Sirf final <code>Select</code> mein C# methods call ho sakte hain. Sach mein C# logic chahiye, to pehle SQL mein filter karo, phir saaf-saaf <code>AsEnumerable()</code> call karo.</li>\n<li><b>Compiled queries</b>: EF har query shape ka translation pehle se cache karta hai. <code>EF.CompileQuery</code>/<code>EF.CompileAsyncQuery</code> cache lookup (expression tree ki hashing aur comparison) bhi skip kar dete hain — chhota faayda, jo sirf bahut hot aur simple queries mein maayne rakhta hai. Inhe jodne se pehle benchmark se measure karo.</li>\n<li><b>Compiled model</b> (<code>dotnet ef dbcontext optimize</code>) alag cheez hai: yeh saikdon entities wale models ka <b>startup</b> tez karta hai.</li>\n<li><b>DbContext pooling</b> (<code>AddDbContextPool</code>, Day 5) high load mein context instances dobara use karta hai. <b>Async</b> (<code>ToListAsync</code>) ek query ko tez nahi karta, par threads khaali karta hai taaki server zyaada requests sambhaal sake.</li>\n<li><b>Bade exports</b>: <code>ToListAsync()</code> ki bajaay <code>AsNoTracking()</code> + <code>AsAsyncEnumerable()</code> se stream karo, taaki saari rows memory mein rakhne ki bajaay ek-ek karke process hon (tracking nahi, warna change tracker har row phir bhi rakh leta hai). Dhyaan do: retrying execution strategy chaalu ho to EF results khud buffer karta hai, aur split query mein aakhri query ko chhodkar baaki sabke results bhi (jab tak MARS chaalu na ho).</li>\n<li><b>Sab kuch dekho</b>: <code>LogTo</code> ya Information level par <code>Microsoft.EntityFrameworkCore.Database.Command</code> log category; <code>EnableSensitiveDataLogging()</code> (parameter values dikhata hai) sirf development mein.</li>\n</ul>\n<p><b>Kab use karein:</b> basics (no-tracking reads, projections, paging, indexes, N+1 nahi) har query par; compiled queries, pooling aur compiled models sirf wahan jahan profiler ya benchmark zaroorat dikhaaye. <b>Kab nahi:</b> SQL aur execution plan dekhne se pehle micro-optimize mat karo — EF ka zyaadatar dheemapan missing index, missing filter, ya bahut zyaada round trips se aata hai.</p>"
      },
      code: [
        {
          caption: {
            en: "Compiled queries with EF.CompileQuery and EF.CompileAsyncQuery (in-memory SQLite)",
            hi: "EF.CompileQuery और EF.CompileAsyncQuery से compiled queries (in-memory SQLite)",
            hg: "EF.CompileQuery aur EF.CompileAsyncQuery se compiled queries (in-memory SQLite)"
          },
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ],
          expected: "Low stock: Ink, Pen\nBy name:   Book (stock 12)\nIn stock:  Book\nIn stock:  Pen",
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\nusing (var setup = new ShopContext(options))\n{\n    setup.Database.EnsureCreated();\n    setup.Products.AddRange(\n        new Product { Name = \"Pen\", Stock = 5 },\n        new Product { Name = \"Ink\", Stock = 0 },\n        new Product { Name = \"Book\", Stock = 12 });\n    setup.SaveChanges();\n}\n\nusing var db = new ShopContext(options);\n\n// Sync: returns IEnumerable<Product>. Take() keeps the return type IQueryable<T>.\nvar lowStock = Queries.LowStock(db, 10);\nConsole.WriteLine(\"Low stock: \" + string.Join(\", \", lowStock.Select(p => p.Name)));\n\n// Async single result: returns Task<Product?>\nvar book = await Queries.ByNameAsync(db, \"Book\");\nConsole.WriteLine($\"By name:   {book?.Name} (stock {book?.Stock})\");\n\n// Async sequence: returns IAsyncEnumerable<string>\nawait foreach (var name in Queries.InStockNamesAsync(db))\n    Console.WriteLine(\"In stock:  \" + name);\n\n// Compile once (static fields), call many times with different parameters\nstatic class Queries\n{\n    public static readonly Func<ShopContext, int, IEnumerable<Product>> LowStock =\n        EF.CompileQuery((ShopContext db, int max) =>\n            db.Products.AsNoTracking().Where(p => p.Stock < max).OrderBy(p => p.Stock).Take(50));\n\n    public static readonly Func<ShopContext, string, Task<Product?>> ByNameAsync =\n        EF.CompileAsyncQuery((ShopContext db, string name) =>\n            db.Products.AsNoTracking().FirstOrDefault(p => p.Name == name));\n\n    public static readonly Func<ShopContext, IAsyncEnumerable<string>> InStockNamesAsync =\n        EF.CompileAsyncQuery((ShopContext db) =>\n            db.Products.Where(p => p.Stock > 0).OrderBy(p => p.Name).Select(p => p.Name));\n}\n\npublic class Product\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public int Stock { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n}"
        },
        {
          caption: {
            en: "A covering, filtered index from the model, and the OFFSET/FETCH paging SQL (SQL Server, no database needed)",
            hi: "Model से बना covering, filtered index, और OFFSET/FETCH वाला paging SQL (SQL Server, database की ज़रूरत नहीं)",
            hg: "Model se bana covering, filtered index, aur OFFSET/FETCH wala paging SQL (SQL Server, database ki zaroorat nahi)"
          },
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          expected: "CREATE TABLE [Orders] (\n    [Id] int NOT NULL IDENTITY,\n    [Status] nvarchar(20) NOT NULL,\n    [PlacedOn] datetime2 NOT NULL,\n    [Total] decimal(10,2) NOT NULL,\n    [Notes] nvarchar(max) NULL,\n    CONSTRAINT [PK_Orders] PRIMARY KEY ([Id])\n);\nGO\nCREATE INDEX [IX_Orders_Status_PlacedOn] ON [Orders] ([Status], [PlacedOn]) INCLUDE ([Total]) WHERE [Status] = 'Open';\nGO\n-----\nDECLARE @__p_0 int = 40;\nDECLARE @__p_1 int = 20;\n\nSELECT [o].[Id], [o].[PlacedOn], [o].[Total]\nFROM [Orders] AS [o]\nWHERE [o].[Status] = N'Open'\nORDER BY [o].[PlacedOn] DESC, [o].[Id]\nOFFSET @__p_0 ROWS FETCH NEXT @__p_1 ROWS ONLY",
          src: "using Microsoft.EntityFrameworkCore;\n\nvar options = new DbContextOptionsBuilder<ShopContext>()\n    .UseSqlServer(\"Server=.;Database=Shop;Trusted_Connection=True;\")      // dummy: nothing connects\n    .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)           // read-heavy context default\n    .Options;\nusing var db = new ShopContext(options);\n\n// The DDL, without blank lines\nvar ddl = db.Database.GenerateCreateScript().Split('\\n').Where(l => !string.IsNullOrWhiteSpace(l));\nConsole.WriteLine(string.Join(\"\\n\", ddl));\nConsole.WriteLine(\"-----\");\n\n// Page 3 of the open-orders grid: projection + stable sort + Skip/Take\nint page = 3, size = 20;\nvar grid = db.Orders\n    .Where(o => o.Status == \"Open\")\n    .OrderByDescending(o => o.PlacedOn).ThenBy(o => o.Id)               // unique tie-breaker\n    .Select(o => new { o.Id, o.PlacedOn, o.Total })\n    .Skip((page - 1) * size)\n    .Take(size);\nConsole.WriteLine(grid.ToQueryString());\n\n/* Output on EF Core 9 (EF Core 10 uses simpler parameter names, e.g. @p instead of @__p_0):\nCREATE TABLE [Orders] (\n    [Id] int NOT NULL IDENTITY,\n    [Status] nvarchar(20) NOT NULL,\n    [PlacedOn] datetime2 NOT NULL,\n    [Total] decimal(10,2) NOT NULL,\n    [Notes] nvarchar(max) NULL,\n    CONSTRAINT [PK_Orders] PRIMARY KEY ([Id])\n);\nGO\nCREATE INDEX [IX_Orders_Status_PlacedOn] ON [Orders] ([Status], [PlacedOn]) INCLUDE ([Total]) WHERE [Status] = 'Open';\nGO\n-----\nDECLARE @__p_0 int = 40;\nDECLARE @__p_1 int = 20;\n\nSELECT [o].[Id], [o].[PlacedOn], [o].[Total]\nFROM [Orders] AS [o]\nWHERE [o].[Status] = N'Open'\nORDER BY [o].[PlacedOn] DESC, [o].[Id]\nOFFSET @__p_0 ROWS FETCH NEXT @__p_1 ROWS ONLY\n*/\n\npublic class Order\n{\n    public int Id { get; set; }\n    public string Status { get; set; } = \"\";\n    public DateTime PlacedOn { get; set; }\n    public decimal Total { get; set; }\n    public string? Notes { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Order> Orders => Set<Order>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n        => modelBuilder.Entity<Order>(order =>\n        {\n            order.Property(o => o.Status).HasMaxLength(20);\n            order.Property(o => o.Total).HasPrecision(10, 2);\n            order.HasIndex(o => new { o.Status, o.PlacedOn })             // seek on Status, sorted by date\n                 .IncludeProperties(o => o.Total)                         // covering: no key lookup\n                 .HasFilter(\"[Status] = 'Open'\");                         // filtered: only open orders\n        });\n}"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in recent EF Core versions",
        hi: "हाल के EF Core versions में नया क्या है",
        hg: "Haal ke EF Core versions mein naya kya hai"
      },
      body: {
        en: "<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, requires .NET 10). Everything in today's lesson still applies in EF Core 10. Many blog answers predate the features below — this is what each version <b>added</b>:</p>\n<ul>\n<li><b>EF Core 5</b> — split queries (<code>AsSplitQuery</code>); automatic savepoints when <code>SaveChanges()</code> runs inside your own transaction.</li>\n<li><b>EF Core 6</b> — compiled models (<code>dotnet ef dbcontext optimize</code>) for faster startup of large models.</li>\n<li><b>EF Core 7</b> — <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>; the shorter <code>FromSql</code>/<code>ExecuteSql</code> names for the interpolated (parameterized) methods; <code>SqlQuery</code> for scalar results; mapping inserts/updates/deletes to stored procedures.</li>\n<li><b>EF Core 8</b> — <code>SqlQuery&lt;T&gt;</code> for unmapped types (any DTO, matched by column name).</li>\n<li><b>EF Core 9</b> — experimental NativeAOT support with <b>precompiled queries</b>: LINQ queries are translated to SQL at publish time instead of at runtime (a step beyond <code>EF.CompileQuery</code>).</li>\n<li><b>EF Core 10</b> — <code>ExecuteUpdateAsync</code> accepts a regular lambda for the setters, so you can add <code>SetProperty</code> calls conditionally (before, it had to be an expression tree); <b>named query filters</b> — several global filters per entity (for example soft delete + tenant) that you can switch off one at a time with <code>IgnoreQueryFilters([\"SoftDelete\"])</code>.</li>\n<li><b>EF Core 10, also</b> — split queries keep the same ordering (including the key) in every query, fixing a paging consistency bug; an analyzer warning for string concatenation inside raw SQL methods; simpler SQL parameter names (<code>@city</code> instead of <code>@__city_0</code>); and <code>ids.Contains(...)</code> now becomes <code>IN (@ids1, @ids2, ...)</code> with one parameter per value by default.</li>\n</ul>\n<p>This tutorial's checker runs every EF snippet on EF Core 9 (.NET 9 SDK). The printed SQL is real SQL Server SQL from EF Core 9; on EF Core 10 the parameter names are simpler and aliases can differ slightly.</p>\n<p><b>Next (as of Oct 2026):</b> .NET 11 (STS) is due in November 2026; .NET 10 stays the LTS.</p>",
        hi: "<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, .NET 10 चाहिए)। आज के lesson की हर बात EF Core 10 में भी लागू है। कई blog answers नीचे के features से पहले के हैं — हर version ने यह <b>जोड़ा</b>:</p>\n<ul>\n<li><b>EF Core 5</b> — split queries (<code>AsSplitQuery</code>); आपके अपने transaction के अंदर <code>SaveChanges()</code> चलने पर अपने-आप savepoints।</li>\n<li><b>EF Core 6</b> — बड़े models के तेज़ startup के लिए compiled models (<code>dotnet ef dbcontext optimize</code>)।</li>\n<li><b>EF Core 7</b> — <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>; interpolated (parameterized) methods के छोटे नाम <code>FromSql</code>/<code>ExecuteSql</code>; scalar results के लिए <code>SqlQuery</code>; inserts/updates/deletes को stored procedures पर map करना।</li>\n<li><b>EF Core 8</b> — unmapped types के लिए <code>SqlQuery&lt;T&gt;</code> (कोई भी DTO, column name से match)।</li>\n<li><b>EF Core 9</b> — <b>precompiled queries</b> के साथ experimental NativeAOT support: LINQ queries runtime की बजाय publish के समय SQL में translate होती हैं (<code>EF.CompileQuery</code> से एक कदम आगे)।</li>\n<li><b>EF Core 10</b> — <code>ExecuteUpdateAsync</code> setters के लिए एक normal lambda लेता है, इसलिए <code>SetProperty</code> calls शर्त के साथ जोड़ सकते हो (पहले expression tree ज़रूरी था); <b>named query filters</b> — हर entity पर कई global filters (जैसे soft delete + tenant) जिन्हें <code>IgnoreQueryFilters([\"SoftDelete\"])</code> से एक-एक करके बंद कर सकते हो।</li>\n<li><b>EF Core 10, और भी</b> — split queries हर query में एक जैसी ordering (key समेत) रखती हैं, जिससे paging का एक consistency bug ठीक हुआ; raw SQL methods के अंदर string जोड़ने पर analyzer warning; आसान SQL parameter names (<code>@__city_0</code> की जगह <code>@city</code>); और <code>ids.Contains(...)</code> अब by default <code>IN (@ids1, @ids2, ...)</code> बनता है, हर value का एक parameter।</li>\n</ul>\n<p>इस tutorial का checker हर EF snippet EF Core 9 (.NET 9 SDK) पर चलाता है। Print हुआ SQL EF Core 9 का असली SQL Server SQL है; EF Core 10 पर parameter names आसान होते हैं और aliases थोड़े अलग हो सकते हैं।</p>\n<p><b>आगे (Oct 2026 तक की जानकारी):</b> .NET 11 (STS) November 2026 में आने वाला है; .NET 10 ही LTS रहेगा।</p>",
        hg: "<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, .NET 10 chahiye). Aaj ke lesson ki har baat EF Core 10 mein bhi laagu hai. Kai blog answers neeche ke features se pehle ke hain — har version ne yeh <b>joda</b>:</p>\n<ul>\n<li><b>EF Core 5</b> — split queries (<code>AsSplitQuery</code>); aapke apne transaction ke andar <code>SaveChanges()</code> chalne par apne-aap savepoints.</li>\n<li><b>EF Core 6</b> — bade models ke tez startup ke liye compiled models (<code>dotnet ef dbcontext optimize</code>).</li>\n<li><b>EF Core 7</b> — <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>; interpolated (parameterized) methods ke chhote naam <code>FromSql</code>/<code>ExecuteSql</code>; scalar results ke liye <code>SqlQuery</code>; inserts/updates/deletes ko stored procedures par map karna.</li>\n<li><b>EF Core 8</b> — unmapped types ke liye <code>SqlQuery&lt;T&gt;</code> (koi bhi DTO, column name se match).</li>\n<li><b>EF Core 9</b> — <b>precompiled queries</b> ke saath experimental NativeAOT support: LINQ queries runtime ki bajaay publish ke samay SQL mein translate hoti hain (<code>EF.CompileQuery</code> se ek kadam aage).</li>\n<li><b>EF Core 10</b> — <code>ExecuteUpdateAsync</code> setters ke liye ek normal lambda leta hai, isliye <code>SetProperty</code> calls shart ke saath jod sakte ho (pehle expression tree zaroori tha); <b>named query filters</b> — har entity par kai global filters (jaise soft delete + tenant) jinhe <code>IgnoreQueryFilters([\"SoftDelete\"])</code> se ek-ek karke band kar sakte ho.</li>\n<li><b>EF Core 10, aur bhi</b> — split queries har query mein ek jaisi ordering (key samet) rakhti hain, jisse paging ka ek consistency bug theek hua; raw SQL methods ke andar string jodne par analyzer warning; aasaan SQL parameter names (<code>@__city_0</code> ki jagah <code>@city</code>); aur <code>ids.Contains(...)</code> ab by default <code>IN (@ids1, @ids2, ...)</code> banta hai, har value ka ek parameter.</li>\n</ul>\n<p>Is tutorial ka checker har EF snippet EF Core 9 (.NET 9 SDK) par chalata hai. Print hua SQL EF Core 9 ka asli SQL Server SQL hai; EF Core 10 par parameter names aasaan hote hain aur aliases thode alag ho sakte hain.</p>\n<p><b>Aage (Oct 2026 tak ki jaankari):</b> .NET 11 (STS) November 2026 mein aane wala hai; .NET 10 hi LTS rahega.</p>"
      }
    }
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
        en: "<ul>\n<li>Example: show 100 customers with their order count. <code>foreach</code> + <code>c.Orders.Count</code> with lazy loading = 1 + 100 queries.</li>\n<li>Fixes, each sending one SQL: <code>Include(c =&gt; c.Orders)</code> (JOIN, full entities), <code>Select(c =&gt; new { c.Name, Count = c.Orders.Count })</code> (a <code>COUNT(*)</code> subquery, only numbers come back). Or two queries in total: parents, then one <code>Where(o =&gt; ids.Contains(o.CustomerId))</code> for all children.</li>\n<li>How you <b>find</b> it: count commands in the log during development; in production look for the same statement repeating in Query Store or Application Insights.</li>\n</ul>\n<p>Follow-up: \"Is Include always the answer?\" — No. Several collection Includes can cause a cartesian explosion; then a projection or <code>AsSplitQuery()</code> is better.</p>\n<p>TL angle: add a query-count assertion to an integration test for the hot endpoints, so N+1 cannot come back silently.</p>",
        hi: "<ul>\n<li>उदाहरण: 100 customers उनके order count के साथ दिखाने हैं। Lazy loading के साथ <code>foreach</code> + <code>c.Orders.Count</code> = 1 + 100 queries।</li>\n<li>Fixes, हर एक एक ही SQL भेजता है: <code>Include(c =&gt; c.Orders)</code> (JOIN, पूरी entities), <code>Select(c =&gt; new { c.Name, Count = c.Orders.Count })</code> (एक <code>COUNT(*)</code> subquery, सिर्फ़ numbers वापस आते हैं)। या कुल दो queries: पहले parents, फिर सारे children के लिए एक <code>Where(o =&gt; ids.Contains(o.CustomerId))</code>।</li>\n<li>इसे <b>पकड़ें</b> कैसे: development में log में commands गिनो; production में Query Store या Application Insights में एक ही statement बार-बार दोहराता दिखे तो वही है।</li>\n</ul>\n<p>Follow-up: \"क्या Include हमेशा जवाब है?\" — नहीं। कई collection Includes cartesian explosion कर सकते हैं; तब projection या <code>AsSplitQuery()</code> बेहतर है।</p>\n<p>TL angle: hot endpoints के integration test में query-count assertion जोड़ो, ताकि N+1 चुपचाप वापस न आ सके।</p>",
        hg: "<ul>\n<li>Udaaharan: 100 customers unke order count ke saath dikhaane hain. Lazy loading ke saath <code>foreach</code> + <code>c.Orders.Count</code> = 1 + 100 queries.</li>\n<li>Fixes, har ek ek hi SQL bhejta hai: <code>Include(c =&gt; c.Orders)</code> (JOIN, poori entities), <code>Select(c =&gt; new { c.Name, Count = c.Orders.Count })</code> (ek <code>COUNT(*)</code> subquery, sirf numbers wapas aate hain). Ya kul do queries: pehle parents, phir saare children ke liye ek <code>Where(o =&gt; ids.Contains(o.CustomerId))</code>.</li>\n<li>Ise <b>pakdein</b> kaise: development mein log mein commands gino; production mein Query Store ya Application Insights mein ek hi statement baar-baar dohraata dikhe to wahi hai.</li>\n</ul>\n<p>Follow-up: \"Kya Include hamesha jawaab hai?\" — Nahi. Kai collection Includes cartesian explosion kar sakte hain; tab projection ya <code>AsSplitQuery()</code> behtar hai.</p>\n<p>TL angle: hot endpoints ke integration test mein query-count assertion jodo, taaki N+1 chupchaap wapas na aa sake.</p>"
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
        en: "<ul>\n<li><code>query.ToQueryString()</code> — great in unit tests and while writing a query; it does not execute.</li>\n<li><code>optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information)</code>, or in ASP.NET Core set the log level of <code>Microsoft.EntityFrameworkCore.Database.Command</code> to Information — every command with its duration.</li>\n<li><code>EnableSensitiveDataLogging()</code> adds parameter values to the log — development only, because it can log personal data.</li>\n<li><code>TagWith(\"Orders page\")</code> puts a <code>-- Orders page</code> comment at the top of the SQL, so you can find it in Query Store, Extended Events or Profiler.</li>\n<li>Then use your SQL Server skills: copy the SQL into SSMS, look at the actual execution plan, check missing indexes, scans vs seeks, and row estimates.</li>\n</ul>\n<p>Follow-up: \"Is ToQueryString exactly what runs?\" — Treat it as a debugging aid: the query text matches, parameters are shown as <code>DECLARE</code> lines, and for a split query it shows only the first SQL. The command log shows what really ran.</p>",
        hi: "<ul>\n<li><code>query.ToQueryString()</code> — unit tests में और query लिखते समय बहुत काम का; यह execute नहीं करता।</li>\n<li><code>optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information)</code>, या ASP.NET Core में <code>Microsoft.EntityFrameworkCore.Database.Command</code> का log level Information रखो — हर command उसकी duration के साथ।</li>\n<li><code>EnableSensitiveDataLogging()</code> log में parameter values जोड़ता है — सिर्फ़ development में, क्योंकि यह personal data log कर सकता है।</li>\n<li><code>TagWith(\"Orders page\")</code> SQL के ऊपर एक <code>-- Orders page</code> comment लगाता है, ताकि Query Store, Extended Events या Profiler में उसे ढूँढ सको।</li>\n<li>फिर अपनी SQL Server skills लगाओ: SQL को SSMS में copy करो, actual execution plan देखो, missing indexes, scans बनाम seeks, और row estimates check करो।</li>\n</ul>\n<p>Follow-up: \"क्या ToQueryString बिल्कुल वही है जो चलता है?\" — इसे debugging की मदद समझो: query text वही होता है, parameters <code>DECLARE</code> lines की तरह दिखते हैं, और split query में सिर्फ़ पहला SQL दिखता है। असल में क्या चला, वो command log बताता है।</p>",
        hg: "<ul>\n<li><code>query.ToQueryString()</code> — unit tests mein aur query likhte samay bahut kaam ka; yeh execute nahi karta.</li>\n<li><code>optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information)</code>, ya ASP.NET Core mein <code>Microsoft.EntityFrameworkCore.Database.Command</code> ka log level Information rakho — har command uski duration ke saath.</li>\n<li><code>EnableSensitiveDataLogging()</code> log mein parameter values jodta hai — sirf development mein, kyunki yeh personal data log kar sakta hai.</li>\n<li><code>TagWith(\"Orders page\")</code> SQL ke upar ek <code>-- Orders page</code> comment lagata hai, taaki Query Store, Extended Events ya Profiler mein use dhoondh sako.</li>\n<li>Phir apni SQL Server skills lagao: SQL ko SSMS mein copy karo, actual execution plan dekho, missing indexes, scans vs seeks, aur row estimates check karo.</li>\n</ul>\n<p>Follow-up: \"Kya ToQueryString bilkul wahi hai jo chalta hai?\" — Ise debugging ki madad samjho: query text wahi hota hai, parameters <code>DECLARE</code> lines ki tarah dikhte hain, aur split query mein sirf pehla SQL dikhta hai. Asal mein kya chala, woh command log batata hai.</p>"
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
        en: "<ul>\n<li>Entity query: <code>SELECT [Id], [City], [Name], [Notes] ...</code> — every column, plus a change-tracker snapshot per row.</li>\n<li>Projection: <code>SELECT [c].[Name], (SELECT COUNT(*) ...), (SELECT COALESCE(SUM(...), 0.0) ...)</code> — only what the screen shows.</li>\n<li>Fewer columns can let SQL Server use a covering index instead of a key lookup.</li>\n<li>No <code>Include</code> needed; navigations inside <code>Select</code> are translated automatically.</li>\n</ul>\n<p>Follow-up: \"Is an entity inside a projection tracked?\" — Yes. <code>Select(c =&gt; new { Customer = c, ... })</code> tracks the customer; scalar fields are not tracked.</p>\n<p>Follow-up: \"When would you not project?\" — when you are going to modify and save the entity.</p>",
        hi: "<ul>\n<li>Entity query: <code>SELECT [Id], [City], [Name], [Notes] ...</code> — हर column, साथ में हर row का change-tracker snapshot।</li>\n<li>Projection: <code>SELECT [c].[Name], (SELECT COUNT(*) ...), (SELECT COALESCE(SUM(...), 0.0) ...)</code> — सिर्फ़ वही जो screen दिखाती है।</li>\n<li>कम columns से SQL Server key lookup की बजाय covering index use कर सकता है।</li>\n<li><code>Include</code> की ज़रूरत नहीं; <code>Select</code> के अंदर navigations अपने-आप translate होते हैं।</li>\n</ul>\n<p>Follow-up: \"क्या projection के अंदर रखी entity track होती है?\" — हाँ। <code>Select(c =&gt; new { Customer = c, ... })</code> customer को track करता है; scalar fields track नहीं होते।</p>\n<p>Follow-up: \"Projection कब नहीं करोगे?\" — जब entity को बदलकर save करना हो।</p>",
        hg: "<ul>\n<li>Entity query: <code>SELECT [Id], [City], [Name], [Notes] ...</code> — har column, saath mein har row ka change-tracker snapshot.</li>\n<li>Projection: <code>SELECT [c].[Name], (SELECT COUNT(*) ...), (SELECT COALESCE(SUM(...), 0.0) ...)</code> — sirf wahi jo screen dikhati hai.</li>\n<li>Kam columns se SQL Server key lookup ki bajaay covering index use kar sakta hai.</li>\n<li><code>Include</code> ki zaroorat nahi; <code>Select</code> ke andar navigations apne-aap translate hote hain.</li>\n</ul>\n<p>Follow-up: \"Kya projection ke andar rakhi entity track hoti hai?\" — Haan. <code>Select(c =&gt; new { Customer = c, ... })</code> customer ko track karta hai; scalar fields track nahi hote.</p>\n<p>Follow-up: \"Projection kab nahi karoge?\" — jab entity ko badalkar save karna ho.</p>"
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
        en: "<ul>\n<li><code>FromSql($\"SELECT * FROM Customers WHERE City = {city}\")</code> → SQL text has <code>@p0</code>; the value travels separately. Same for <code>ExecuteSql</code> and <code>SqlQuery</code>.</li>\n<li><code>FromSqlRaw(\"... WHERE City = '\" + city + \"'\")</code> → the input becomes part of the SQL. Input <code>Pune' OR '1'='1</code> returns every row (see the puzzle).</li>\n<li>The analyzer warning <b>EF1002</b> flags interpolated strings passed to the <code>Raw</code> methods. On EF Core 9 it does not catch <code>+</code> concatenation; EF Core 10 adds that warning. Code review must still check.</li>\n<li>Identifiers (table/column names, sort direction) cannot be parameters — map user choices through an allow-list.</li>\n</ul>\n<p>Follow-up: \"Can you compose LINQ over FromSql?\" — Yes, if the SQL is a composable <code>SELECT</code>; EF wraps it in a subquery. Not over <code>EXEC</code> — to add LINQ after a stored procedure, call <code>AsEnumerable()</code> first.</p>",
        hi: "<ul>\n<li><code>FromSql($\"SELECT * FROM Customers WHERE City = {city}\")</code> → SQL text में <code>@p0</code> होता है; value अलग से जाती है। <code>ExecuteSql</code> और <code>SqlQuery</code> के लिए भी यही।</li>\n<li><code>FromSqlRaw(\"... WHERE City = '\" + city + \"'\")</code> → input SQL का हिस्सा बन जाता है। Input <code>Pune' OR '1'='1</code> हर row लौटा देता है (puzzle देखो)।</li>\n<li>Analyzer warning <b>EF1002</b> <code>Raw</code> methods को दी गई interpolated strings को flag करता है। EF Core 9 पर यह <code>+</code> से जोड़ना नहीं पकड़ता; EF Core 10 वो warning भी जोड़ता है। Code review को फिर भी check करना है।</li>\n<li>Identifiers (table/column names, sort direction) parameters नहीं बन सकते — user की choices को एक allow-list से map करो।</li>\n</ul>\n<p>Follow-up: \"क्या FromSql के ऊपर LINQ compose कर सकते हैं?\" — हाँ, अगर SQL एक composable <code>SELECT</code> है; EF उसे subquery में लपेटता है। <code>EXEC</code> के ऊपर नहीं — stored procedure के बाद LINQ जोड़ना हो तो पहले <code>AsEnumerable()</code> call करो।</p>",
        hg: "<ul>\n<li><code>FromSql($\"SELECT * FROM Customers WHERE City = {city}\")</code> → SQL text mein <code>@p0</code> hota hai; value alag se jaati hai. <code>ExecuteSql</code> aur <code>SqlQuery</code> ke liye bhi yahi.</li>\n<li><code>FromSqlRaw(\"... WHERE City = '\" + city + \"'\")</code> → input SQL ka hissa ban jaata hai. Input <code>Pune' OR '1'='1</code> har row lauta deta hai (puzzle dekho).</li>\n<li>Analyzer warning <b>EF1002</b> <code>Raw</code> methods ko di gayi interpolated strings ko flag karta hai. EF Core 9 par yeh <code>+</code> se jodna nahi pakadta; EF Core 10 woh warning bhi jodta hai. Code review ko phir bhi check karna hai.</li>\n<li>Identifiers (table/column names, sort direction) parameters nahi ban sakte — user ki choices ko ek allow-list se map karo.</li>\n</ul>\n<p>Follow-up: \"Kya FromSql ke upar LINQ compose kar sakte hain?\" — Haan, agar SQL ek composable <code>SELECT</code> hai; EF use subquery mein lapetta hai. <code>EXEC</code> ke upar nahi — stored procedure ke baad LINQ jodna ho to pehle <code>AsEnumerable()</code> call karo.</p>"
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
        en: "<ul>\n<li>Pattern: <code>using var tx = db.Database.BeginTransaction();</code> → work → <code>tx.Commit();</code>. No <code>Commit()</code> = rollback on dispose.</li>\n<li><code>ExecuteUpdate</code>, <code>ExecuteDelete</code> and <code>ExecuteSql</code> run immediately, outside <code>SaveChanges</code> — an explicit transaction is how you tie them to it.</li>\n<li>Each <code>SaveChanges()</code> inside your transaction creates a savepoint (EF Core 5+), so a failed one does not undo the earlier steps.</li>\n<li>Pass an isolation level when you need one: <code>BeginTransaction(IsolationLevel.Serializable)</code>; otherwise you get the database default (Read Committed on SQL Server).</li>\n</ul>\n<p>Follow-up: \"What about the outbox pattern?\" — writing the business row and the outbox message in the same transaction is exactly this use case (Day 16).</p>\n<p>TL angle: keep transactions short; never call an external API or send an email while a transaction holds locks.</p>",
        hi: "<ul>\n<li>Pattern: <code>using var tx = db.Database.BeginTransaction();</code> → काम → <code>tx.Commit();</code>। <code>Commit()</code> नहीं = dispose पर rollback।</li>\n<li><code>ExecuteUpdate</code>, <code>ExecuteDelete</code> और <code>ExecuteSql</code> तुरंत चलते हैं, <code>SaveChanges</code> के बाहर — उन्हें उसके साथ बाँधने का तरीका explicit transaction है।</li>\n<li>आपके transaction के अंदर हर <code>SaveChanges()</code> एक savepoint बनाता है (EF Core 5+), इसलिए एक fail हो तो पहले के steps undo नहीं होते।</li>\n<li>ज़रूरत हो तो isolation level दो: <code>BeginTransaction(IsolationLevel.Serializable)</code>; वरना database का default मिलता है (SQL Server पर Read Committed)।</li>\n</ul>\n<p>Follow-up: \"Outbox pattern का क्या?\" — business row और outbox message को एक ही transaction में लिखना ठीक यही use case है (Day 16)।</p>\n<p>TL angle: transactions छोटे रखो; जब transaction locks पकड़े हो तब कभी external API call या email मत भेजो।</p>",
        hg: "<ul>\n<li>Pattern: <code>using var tx = db.Database.BeginTransaction();</code> → kaam → <code>tx.Commit();</code>. <code>Commit()</code> nahi = dispose par rollback.</li>\n<li><code>ExecuteUpdate</code>, <code>ExecuteDelete</code> aur <code>ExecuteSql</code> turant chalte hain, <code>SaveChanges</code> ke baahar — unhe uske saath baandhne ka tareeka explicit transaction hai.</li>\n<li>Aapke transaction ke andar har <code>SaveChanges()</code> ek savepoint banata hai (EF Core 5+), isliye ek fail ho to pehle ke steps undo nahi hote.</li>\n<li>Zaroorat ho to isolation level do: <code>BeginTransaction(IsolationLevel.Serializable)</code>; warna database ka default milta hai (SQL Server par Read Committed).</li>\n</ul>\n<p>Follow-up: \"Outbox pattern ka kya?\" — business row aur outbox message ko ek hi transaction mein likhna theek yahi use case hai (Day 16).</p>\n<p>TL angle: transactions chhote rakho; jab transaction locks pakde ho tab kabhi external API call ya email mat bhejo.</p>"
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
        en: "<ul>\n<li>SQL Server: <code>[Timestamp] public byte[] Version { get; set; }</code> → <code>rowversion</code>. EF sends <code>UPDATE ... OUTPUT INSERTED.[Version] WHERE [Id] = @p1 AND [Version] = @p2</code>.</li>\n<li>In the <code>catch</code>: <code>ex.Entries</code> → <code>GetDatabaseValues()</code>; <b>store wins</b> = <code>Reload()</code>; <b>client wins</b> = <code>OriginalValues.SetValues(dbValues)</code> and save again; <b>merge</b> = decide per property or ask the user.</li>\n<li>Default EF behaviour without a token is <b>last write wins</b> — the lost update happens silently.</li>\n</ul>\n<p>Follow-up: \"Optimistic vs pessimistic?\" — Optimistic assumes conflicts are rare and checks at save time (no locks held while the user edits). Pessimistic locks the row first (<code>UPDLOCK</code>/<code>SELECT ... FOR UPDATE</code>) — safer for very hot rows, but it blocks others and needs a transaction.</p>\n<p>Follow-up: \"How does the API return it?\" — <code>409 Conflict</code>, or <code>412 Precondition Failed</code> when you use ETag/<code>If-Match</code>.</p>",
        hi: "<ul>\n<li>SQL Server: <code>[Timestamp] public byte[] Version { get; set; }</code> → <code>rowversion</code>। EF भेजता है <code>UPDATE ... OUTPUT INSERTED.[Version] WHERE [Id] = @p1 AND [Version] = @p2</code>।</li>\n<li><code>catch</code> में: <code>ex.Entries</code> → <code>GetDatabaseValues()</code>; <b>store wins</b> = <code>Reload()</code>; <b>client wins</b> = <code>OriginalValues.SetValues(dbValues)</code> और फिर से save; <b>merge</b> = हर property के लिए तय करो या user से पूछो।</li>\n<li>Token के बिना EF का default है <b>last write wins</b> — lost update चुपचाप हो जाता है।</li>\n</ul>\n<p>Follow-up: \"Optimistic बनाम pessimistic?\" — Optimistic मानता है कि conflicts कम होते हैं और save के समय check करता है (user के edit करते समय कोई lock नहीं)। Pessimistic पहले row lock करता है (<code>UPDLOCK</code>/<code>SELECT ... FOR UPDATE</code>) — बहुत hot rows के लिए safer, पर दूसरों को रोकता है और transaction चाहिए।</p>\n<p>Follow-up: \"API इसे कैसे लौटाती है?\" — <code>409 Conflict</code>, या ETag/<code>If-Match</code> use करते हो तो <code>412 Precondition Failed</code>।</p>",
        hg: "<ul>\n<li>SQL Server: <code>[Timestamp] public byte[] Version { get; set; }</code> → <code>rowversion</code>. EF bhejta hai <code>UPDATE ... OUTPUT INSERTED.[Version] WHERE [Id] = @p1 AND [Version] = @p2</code>.</li>\n<li><code>catch</code> mein: <code>ex.Entries</code> → <code>GetDatabaseValues()</code>; <b>store wins</b> = <code>Reload()</code>; <b>client wins</b> = <code>OriginalValues.SetValues(dbValues)</code> aur phir se save; <b>merge</b> = har property ke liye tay karo ya user se poochho.</li>\n<li>Token ke bina EF ka default hai <b>last write wins</b> — lost update chupchaap ho jaata hai.</li>\n</ul>\n<p>Follow-up: \"Optimistic vs pessimistic?\" — Optimistic maanta hai ki conflicts kam hote hain aur save ke samay check karta hai (user ke edit karte samay koi lock nahi). Pessimistic pehle row lock karta hai (<code>UPDLOCK</code>/<code>SELECT ... FOR UPDATE</code>) — bahut hot rows ke liye safer, par doosron ko rokta hai aur transaction chahiye.</p>\n<p>Follow-up: \"API ise kaise lautaati hai?\" — <code>409 Conflict</code>, ya ETag/<code>If-Match</code> use karte ho to <code>412 Precondition Failed</code>.</p>"
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
        en: "<ul>\n<li><code>db.Products.Where(p =&gt; p.Stock == 0).ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m))</code> → <code>UPDATE [p] SET [p].[Price] = [p].[Price] * 1.1 FROM [Products] AS [p] WHERE [p].[Stock] = 0</code>.</li>\n<li>Before EF Core 7 you loaded every row, changed it in C#, and <code>SaveChanges()</code> sent one UPDATE per row (batched, but still per row) — or you wrote raw SQL.</li>\n<li>They run immediately (no <code>SaveChanges()</code>), return rows affected, apply global query filters, and join an open transaction.</li>\n<li>Not updated: entities already tracked in memory. Not run: SaveChanges events, SaveChanges interceptors and overrides (command interceptors still fire). Not checked: concurrency tokens (unless you add them to the <code>Where</code>).</li>\n</ul>\n<p>Follow-up: \"How do you keep audit columns correct?\" — set them in the same call: <code>.SetProperty(p =&gt; p.UpdatedOn, now)</code>.</p>\n<p>Follow-up: \"Do they work with SQLite/PostgreSQL?\" — Yes, they are relational features; each provider writes its own SQL.</p>",
        hi: "<ul>\n<li><code>db.Products.Where(p =&gt; p.Stock == 0).ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m))</code> → <code>UPDATE [p] SET [p].[Price] = [p].[Price] * 1.1 FROM [Products] AS [p] WHERE [p].[Stock] = 0</code>।</li>\n<li>EF Core 7 से पहले आप हर row load करते थे, C# में बदलते थे, और <code>SaveChanges()</code> हर row के लिए एक UPDATE भेजता था (batched, पर फिर भी हर row का) — या आप raw SQL लिखते थे।</li>\n<li>ये तुरंत चलते हैं (<code>SaveChanges()</code> नहीं), affected rows लौटाते हैं, global query filters लगाते हैं, और खुले transaction में शामिल होते हैं।</li>\n<li>Update नहीं होतीं: memory में पहले से tracked entities। नहीं चलते: SaveChanges events, SaveChanges interceptors और overrides (command interceptors फिर भी चलते हैं)। Check नहीं होते: concurrency tokens (जब तक आप उन्हें <code>Where</code> में न जोड़ो)।</li>\n</ul>\n<p>Follow-up: \"Audit columns सही कैसे रखोगे?\" — उसी call में set करो: <code>.SetProperty(p =&gt; p.UpdatedOn, now)</code>।</p>\n<p>Follow-up: \"क्या ये SQLite/PostgreSQL पर चलते हैं?\" — हाँ, ये relational features हैं; हर provider अपना SQL लिखता है।</p>",
        hg: "<ul>\n<li><code>db.Products.Where(p =&gt; p.Stock == 0).ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.Price, p =&gt; p.Price * 1.1m))</code> → <code>UPDATE [p] SET [p].[Price] = [p].[Price] * 1.1 FROM [Products] AS [p] WHERE [p].[Stock] = 0</code>.</li>\n<li>EF Core 7 se pehle aap har row load karte the, C# mein badalte the, aur <code>SaveChanges()</code> har row ke liye ek UPDATE bhejta tha (batched, par phir bhi har row ka) — ya aap raw SQL likhte the.</li>\n<li>Yeh turant chalte hain (<code>SaveChanges()</code> nahi), affected rows lautaate hain, global query filters lagaate hain, aur khule transaction mein shaamil hote hain.</li>\n<li>Update nahi hotin: memory mein pehle se tracked entities. Nahi chalte: SaveChanges events, SaveChanges interceptors aur overrides (command interceptors phir bhi chalte hain). Check nahi hote: concurrency tokens (jab tak aap unhe <code>Where</code> mein na jodo).</li>\n</ul>\n<p>Follow-up: \"Audit columns sahi kaise rakhoge?\" — usi call mein set karo: <code>.SetProperty(p =&gt; p.UpdatedOn, now)</code>.</p>\n<p>Follow-up: \"Kya yeh SQLite/PostgreSQL par chalte hain?\" — Haan, yeh relational features hain; har provider apna SQL likhta hai.</p>"
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
        en: "<ul>\n<li><b>Fewer round trips</b>: no N+1, no <code>SaveChanges()</code> in loops, <code>ExecuteUpdate</code>/<code>ExecuteDelete</code> for set-based changes.</li>\n<li><b>Less data</b>: projections, paging (<code>OFFSET/FETCH</code>, keyset for deep pages), <code>AsSplitQuery()</code> when several large collections multiply rows.</li>\n<li><b>Less overhead</b>: <code>AsNoTracking()</code> for reads; DbContext pooling, compiled queries and compiled models only when measured.</li>\n<li><b>Database side</b>: indexes on filter/sort columns (EF only indexes keys and FKs), covering/filtered indexes, check the execution plan.</li>\n<li><b>No client evaluation</b>: EF Core 3.0+ throws if a filter cannot be translated — never \"fix\" that with an early <code>ToList()</code> on a big table.</li>\n</ul>\n<p>Follow-up: \"How do you prove it is faster?\" — compare query count, duration and logical reads (<code>SET STATISTICS IO ON</code>) before and after; for C# micro-paths use BenchmarkDotNet.</p>\n<p>Follow-up: \"How do you insert 100k+ rows?\" — EF Core has no built-in bulk insert. <code>AddRange</code> + <code>SaveChanges</code> batches the INSERTs (tune with <code>UseSqlServer(cs, o =&gt; o.MaxBatchSize(...))</code>), but every row is still tracked and sent as INSERT statements — save in chunks and call <code>ChangeTracker.Clear()</code> between them. For real bulk loads use <code>SqlBulkCopy</code> on SQL Server, or a bulk-extensions library.</p>",
        hi: "<ul>\n<li><b>कम round trips</b>: N+1 नहीं, loops में <code>SaveChanges()</code> नहीं, set-based बदलावों के लिए <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>।</li>\n<li><b>कम data</b>: projections, paging (<code>OFFSET/FETCH</code>, गहरे pages के लिए keyset), और जब कई बड़ी collections rows को गुणा करें तो <code>AsSplitQuery()</code>।</li>\n<li><b>कम overhead</b>: reads के लिए <code>AsNoTracking()</code>; DbContext pooling, compiled queries और compiled models सिर्फ़ measure करने के बाद।</li>\n<li><b>Database side</b>: filter/sort columns पर indexes (EF सिर्फ़ keys और FKs पर index बनाता है), covering/filtered indexes, execution plan check करो।</li>\n<li><b>Client evaluation नहीं</b>: EF Core 3.0+ throw करता है अगर filter translate न हो — इसे बड़ी table पर पहले <code>ToList()</code> लगाकर कभी \"fix\" मत करो।</li>\n</ul>\n<p>Follow-up: \"कैसे साबित करोगे कि तेज़ हुआ?\" — पहले और बाद में query count, duration और logical reads (<code>SET STATISTICS IO ON</code>) compare करो; C# के micro-paths के लिए BenchmarkDotNet।</p>\n<p>Follow-up: \"100k+ rows कैसे insert करोगे?\" — EF Core में built-in bulk insert नहीं है। <code>AddRange</code> + <code>SaveChanges</code> INSERTs को batch करता है (<code>UseSqlServer(cs, o =&gt; o.MaxBatchSize(...))</code> से tune करो), पर हर row फिर भी track होती है और INSERT statements के रूप में जाती है — chunks में save करो और बीच में <code>ChangeTracker.Clear()</code> call करो। असली bulk loads के लिए SQL Server पर <code>SqlBulkCopy</code>, या कोई bulk-extensions library।</p>",
        hg: "<ul>\n<li><b>Kam round trips</b>: N+1 nahi, loops mein <code>SaveChanges()</code> nahi, set-based badlaavon ke liye <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>.</li>\n<li><b>Kam data</b>: projections, paging (<code>OFFSET/FETCH</code>, gehre pages ke liye keyset), aur jab kai badi collections rows ko guna karein to <code>AsSplitQuery()</code>.</li>\n<li><b>Kam overhead</b>: reads ke liye <code>AsNoTracking()</code>; DbContext pooling, compiled queries aur compiled models sirf measure karne ke baad.</li>\n<li><b>Database side</b>: filter/sort columns par indexes (EF sirf keys aur FKs par index banata hai), covering/filtered indexes, execution plan check karo.</li>\n<li><b>Client evaluation nahi</b>: EF Core 3.0+ throw karta hai agar filter translate na ho — ise badi table par pehle <code>ToList()</code> lagaakar kabhi \"fix\" mat karo.</li>\n</ul>\n<p>Follow-up: \"Kaise saabit karoge ki tez hua?\" — pehle aur baad mein query count, duration aur logical reads (<code>SET STATISTICS IO ON</code>) compare karo; C# ke micro-paths ke liye BenchmarkDotNet.</p>\n<p>Follow-up: \"100k+ rows kaise insert karoge?\" — EF Core mein built-in bulk insert nahi hai. <code>AddRange</code> + <code>SaveChanges</code> INSERTs ko batch karta hai (<code>UseSqlServer(cs, o =&gt; o.MaxBatchSize(...))</code> se tune karo), par har row phir bhi track hoti hai aur INSERT statements ke roop mein jaati hai — chunks mein save karo aur beech mein <code>ChangeTracker.Clear()</code> call karo. Asli bulk loads ke liye SQL Server par <code>SqlBulkCopy</code>, ya koi bulk-extensions library.</p>"
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
        en: "<ul>\n<li>Why split at all: two collection Includes multiply the JOIN rows (the <b>split-query-rows</b> puzzle: 18 rows for 15 children; Day 5 \"include-sql\" shows the single-query SQL).</li>\n<li>Good default when: your read models routinely include 2+ big collections (an order with lines, payments, shipments). Keep <code>AsSingleQuery()</code> for small or single-row lookups, where one round trip is cheaper.</li>\n<li><b>Latency</b>: each collection is another round trip; across a slow network or a busy server this can cost more than the duplicated rows saved.</li>\n<li><b>Consistency</b>: the queries run one after another, so without a Serializable/snapshot transaction a row added in between can show up in one query but not another.</li>\n<li><b>Paging</b>: <code>Skip</code>/<code>Take</code> needs a unique order (<code>ThenBy(c =&gt; c.Id)</code>). Before EF Core 10 the child query's ordering could even miss the key; EF Core 10 fixes that, but a non-unique order is still your bug.</li>\n<li><b>Memory</b>: EF buffers the results of all but the last split query (unless MARS is enabled), so a split query does not stream end to end.</li>\n<li><b>Diagnostics</b>: <code>ToQueryString()</code> shows only the first SQL — check the command log to see them all.</li>\n</ul>\n<p>TL angle: often the better fix is a projection that returns counts or a few child columns — then neither the explosion nor the extra round trips happen.</p>",
        hi: "<ul>\n<li>Split क्यों: दो collection Includes JOIN की rows को गुणा कर देते हैं (<b>split-query-rows</b> puzzle: 15 children के लिए 18 rows; Day 5 का \"include-sql\" single-query वाला SQL दिखाता है)।</li>\n<li>Default कब अच्छा: जब आपके read models में अक्सर 2+ बड़ी collections आती हैं (order के साथ lines, payments, shipments)। छोटे या एक-row वाले lookups के लिए <code>AsSingleQuery()</code> रखो, वहाँ एक round trip सस्ता है।</li>\n<li><b>Latency</b>: हर collection एक और round trip है; धीमे network या busy server पर यह बचाई गई duplicate rows से ज़्यादा महँगा पड़ सकता है।</li>\n<li><b>Consistency</b>: queries एक के बाद एक चलती हैं, इसलिए Serializable/snapshot transaction के बिना बीच में जुड़ी row एक query में दिख सकती है और दूसरी में नहीं।</li>\n<li><b>Paging</b>: <code>Skip</code>/<code>Take</code> को unique order चाहिए (<code>ThenBy(c =&gt; c.Id)</code>)। EF Core 10 से पहले child query की ordering से key तक छूट सकती थी; EF Core 10 ने यह ठीक किया, पर non-unique order फिर भी आपका bug है।</li>\n<li><b>Memory</b>: EF आख़िरी split query को छोड़कर बाकी सबके results buffer करता है (जब तक MARS चालू न हो), इसलिए split query शुरू से आख़िर तक stream नहीं होती।</li>\n<li><b>Diagnostics</b>: <code>ToQueryString()</code> सिर्फ़ पहला SQL दिखाता है — सब देखने के लिए command log देखो।</li>\n</ul>\n<p>TL angle: अक्सर बेहतर fix एक projection है जो counts या child के कुछ columns लौटाए — तब न explosion होता है न extra round trips।</p>",
        hg: "<ul>\n<li>Split kyun: do collection Includes JOIN ki rows ko guna kar dete hain (<b>split-query-rows</b> puzzle: 15 children ke liye 18 rows; Day 5 ka \"include-sql\" single-query wala SQL dikhata hai).</li>\n<li>Default kab achha: jab aapke read models mein aksar 2+ badi collections aati hain (order ke saath lines, payments, shipments). Chhote ya ek-row wale lookups ke liye <code>AsSingleQuery()</code> rakho, wahan ek round trip sasta hai.</li>\n<li><b>Latency</b>: har collection ek aur round trip hai; dheeme network ya busy server par yeh bachaayi gayi duplicate rows se zyaada mehnga pad sakta hai.</li>\n<li><b>Consistency</b>: queries ek ke baad ek chalti hain, isliye Serializable/snapshot transaction ke bina beech mein judi row ek query mein dikh sakti hai aur doosri mein nahi.</li>\n<li><b>Paging</b>: <code>Skip</code>/<code>Take</code> ko unique order chahiye (<code>ThenBy(c =&gt; c.Id)</code>). EF Core 10 se pehle child query ki ordering se key tak chhoot sakti thi; EF Core 10 ne yeh theek kiya, par non-unique order phir bhi aapka bug hai.</li>\n<li><b>Memory</b>: EF aakhri split query ko chhodkar baaki sabke results buffer karta hai (jab tak MARS chaalu na ho), isliye split query shuru se aakhir tak stream nahi hoti.</li>\n<li><b>Diagnostics</b>: <code>ToQueryString()</code> sirf pehla SQL dikhata hai — sab dekhne ke liye command log dekho.</li>\n</ul>\n<p>TL angle: aksar behtar fix ek projection hai jo counts ya child ke kuch columns lautaaye — tab na explosion hota hai na extra round trips.</p>"
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
        en: "<ul>\n<li>Normal query: every call builds an expression tree, EF hashes and compares it to find the cached translation, then runs the SQL.</li>\n<li>Compiled: <code>static readonly Func&lt;ShopContext, int, IEnumerable&lt;Product&gt;&gt; q = EF.CompileQuery((ShopContext db, int max) =&gt; ...);</code> — store it in a static field and call <code>q(db, 10)</code>.</li>\n<li>Async versions: <code>EF.CompileAsyncQuery</code> returns <code>Task&lt;T&gt;</code> for a single result or <code>IAsyncEnumerable&lt;T&gt;</code> for a sequence.</li>\n<li>Limits: the query shape is fixed — no adding <code>Where</code> on top later; parameters are only the delegate's arguments.</li>\n<li>Do not confuse with the <b>compiled model</b> (<code>dotnet ef dbcontext optimize</code>), which speeds up startup for very large models.</li>\n</ul>\n<p>Follow-up: \"What gives a bigger win usually?\" — removing N+1, projecting, adding an index. Compiled queries come last.</p>",
        hi: "<ul>\n<li>Normal query: हर call पर expression tree बनता है, EF cached translation ढूँढने के लिए उसे hash और compare करता है, फिर SQL चलाता है।</li>\n<li>Compiled: <code>static readonly Func&lt;ShopContext, int, IEnumerable&lt;Product&gt;&gt; q = EF.CompileQuery((ShopContext db, int max) =&gt; ...);</code> — इसे static field में रखो और <code>q(db, 10)</code> call करो।</li>\n<li>Async versions: <code>EF.CompileAsyncQuery</code> एक result के लिए <code>Task&lt;T&gt;</code> या sequence के लिए <code>IAsyncEnumerable&lt;T&gt;</code> लौटाता है।</li>\n<li>सीमाएँ: query का shape fixed है — बाद में ऊपर से <code>Where</code> नहीं जोड़ सकते; parameters सिर्फ़ delegate के arguments होते हैं।</li>\n<li><b>Compiled model</b> (<code>dotnet ef dbcontext optimize</code>) से confuse मत करो, जो बहुत बड़े models का startup तेज़ करता है।</li>\n</ul>\n<p>Follow-up: \"आमतौर पर बड़ा फ़ायदा किससे मिलता है?\" — N+1 हटाने, projection करने, index जोड़ने से। Compiled queries सबसे आख़िर में।</p>",
        hg: "<ul>\n<li>Normal query: har call par expression tree banta hai, EF cached translation dhoondhne ke liye use hash aur compare karta hai, phir SQL chalata hai.</li>\n<li>Compiled: <code>static readonly Func&lt;ShopContext, int, IEnumerable&lt;Product&gt;&gt; q = EF.CompileQuery((ShopContext db, int max) =&gt; ...);</code> — ise static field mein rakho aur <code>q(db, 10)</code> call karo.</li>\n<li>Async versions: <code>EF.CompileAsyncQuery</code> ek result ke liye <code>Task&lt;T&gt;</code> ya sequence ke liye <code>IAsyncEnumerable&lt;T&gt;</code> lautaata hai.</li>\n<li>Seemaayein: query ka shape fixed hai — baad mein upar se <code>Where</code> nahi jod sakte; parameters sirf delegate ke arguments hote hain.</li>\n<li><b>Compiled model</b> (<code>dotnet ef dbcontext optimize</code>) se confuse mat karo, jo bahut bade models ka startup tez karta hai.</li>\n</ul>\n<p>Follow-up: \"Aamtaur par bada faayda kisse milta hai?\" — N+1 hataane, projection karne, index jodne se. Compiled queries sabse aakhir mein.</p>"
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
        en: "<ul>\n<li><code>db.Customers.Where(c =&gt; MyFormat(c.Name) == \"ASHA\")</code> → <code>InvalidOperationException: The LINQ expression ... could not be translated</code>. EF cannot turn your C# method into SQL.</li>\n<li><code>db.Customers.Select(c =&gt; MyFormat(c.Name))</code> works: EF selects <code>Name</code> in SQL and calls the method on each row after it arrives (top-level projection only).</li>\n<li>EF Core 1.x/2.x quietly evaluated such filters in memory — fine in dev, a full table scan into memory in production. That is why 3.0 changed it.</li>\n<li>Fixes: use translatable operations (<code>c.Name.ToUpper()</code> is translated), <code>EF.Functions.Like</code>, map a SQL function with <code>HasDbFunction</code>, or filter in SQL first and then <code>AsEnumerable()</code> for the C#-only step.</li>\n</ul>\n<p>Follow-up: \"Is <code>AsEnumerable()</code> after a <code>Where</code> bad?\" — No, it is the honest way to say \"the rest runs in C#\". It becomes bad when it comes before the filters on a big table.</p>",
        hi: "<ul>\n<li><code>db.Customers.Where(c =&gt; MyFormat(c.Name) == \"ASHA\")</code> → <code>InvalidOperationException: The LINQ expression ... could not be translated</code>। EF आपके C# method को SQL में नहीं बदल सकता।</li>\n<li><code>db.Customers.Select(c =&gt; MyFormat(c.Name))</code> चलता है: EF SQL में <code>Name</code> select करता है और हर row आने के बाद उस पर method call करता है (सिर्फ़ top-level projection में)।</li>\n<li>EF Core 1.x/2.x ऐसे filters चुपचाप memory में चलाते थे — dev में ठीक, production में पूरी table memory में। इसीलिए 3.0 में यह बदला गया।</li>\n<li>Fixes: translate होने वाले operations use करो (<code>c.Name.ToUpper()</code> translate होता है), <code>EF.Functions.Like</code>, <code>HasDbFunction</code> से SQL function map करो, या पहले SQL में filter करो फिर C#-only step के लिए <code>AsEnumerable()</code>।</li>\n</ul>\n<p>Follow-up: \"क्या <code>Where</code> के बाद <code>AsEnumerable()</code> बुरा है?\" — नहीं, यह ईमानदारी से कहने का तरीका है कि \"बाकी C# में चलेगा\"। बुरा तब है जब यह बड़ी table पर filters से पहले आए।</p>",
        hg: "<ul>\n<li><code>db.Customers.Where(c =&gt; MyFormat(c.Name) == \"ASHA\")</code> → <code>InvalidOperationException: The LINQ expression ... could not be translated</code>. EF aapke C# method ko SQL mein nahi badal sakta.</li>\n<li><code>db.Customers.Select(c =&gt; MyFormat(c.Name))</code> chalta hai: EF SQL mein <code>Name</code> select karta hai aur har row aane ke baad us par method call karta hai (sirf top-level projection mein).</li>\n<li>EF Core 1.x/2.x aise filters chupchaap memory mein chalaate the — dev mein theek, production mein poori table memory mein. Isiliye 3.0 mein yeh badla gaya.</li>\n<li>Fixes: translate hone wale operations use karo (<code>c.Name.ToUpper()</code> translate hota hai), <code>EF.Functions.Like</code>, <code>HasDbFunction</code> se SQL function map karo, ya pehle SQL mein filter karo phir C#-only step ke liye <code>AsEnumerable()</code>.</li>\n</ul>\n<p>Follow-up: \"Kya <code>Where</code> ke baad <code>AsEnumerable()</code> bura hai?\" — Nahi, yeh imaandaari se kehne ka tareeka hai ki \"baaki C# mein chalega\". Bura tab hai jab yeh badi table par filters se pehle aaye.</p>"
      }
    },
    {
      id: "stored-procedures",
      depth: "detailed",
      q: "How do you call a stored procedure from EF Core?",
      answer: "For entity rows, FromSql($\"EXEC dbo.Proc {param}\"); add AsEnumerable before any further LINQ, since SQL Server cannot compose over EXEC. Other shapes: SqlQuery&lt;T&gt;; commands: ExecuteSql. OUTPUT parameters need a SqlParameter.",
      meaning: {
        hi: "Entity से map होने वाली rows के लिए FromSql($\"EXEC dbo.Proc {param}\"); आगे कोई LINQ लगाना हो तो उससे पहले AsEnumerable जोड़ो, क्योंकि SQL Server EXEC के ऊपर compose नहीं कर सकता। दूसरे shapes के लिए SqlQuery&lt;T&gt;; commands के लिए ExecuteSql। Output parameters के लिए SqlParameter चाहिए।",
        hg: "Entity se map hone wali rows ke liye FromSql($\"EXEC dbo.Proc {param}\"); aage koi LINQ lagaana ho to usse pehle AsEnumerable jodo, kyunki SQL Server EXEC ke upar compose nahi kar sakta. Doosre shapes ke liye SqlQuery&lt;T&gt;; commands ke liye ExecuteSql. Output parameters ke liye SqlParameter chahiye."
      },
      explain: {
        en: "<ul>\n<li>Entity results: <code>db.Customers.FromSql($\"EXEC dbo.GetCustomersByCity {city}\").ToList()</code>. The procedure must return all the entity's columns. Only if more LINQ follows (for example <code>OrderBy</code>), put <code>AsEnumerable()</code> before it so it runs in memory.</li>\n<li>Custom shape (report): <code>db.Database.SqlQuery&lt;SalesRow&gt;($\"EXEC dbo.SalesReport {year}\")</code> — EF Core 8+ maps columns to properties by name.</li>\n<li>No result set: <code>db.Database.ExecuteSql($\"EXEC dbo.ArchiveOrders {cutoff}\")</code> returns rows affected.</li>\n<li>Output parameter: create <code>new SqlParameter(\"@total\", SqlDbType.Int) { Direction = ParameterDirection.Output }</code>, run <code>ExecuteSqlRaw(\"EXEC dbo.CountOrders @total OUTPUT\", total)</code>, then read <code>total.Value</code>.</li>\n<li>Insert/update/delete through procedures: EF Core 7+ can map an entity's writes to stored procedures with <code>InsertUsingStoredProcedure</code>/<code>UpdateUsingStoredProcedure</code>/<code>DeleteUsingStoredProcedure</code>, so <code>SaveChanges()</code> calls them.</li>\n</ul>\n<p>TL angle: procedures are fine for heavy reports or when a DBA team owns the logic; keep business rules in one place, not half in C# and half in procedures.</p>",
        hi: "<ul>\n<li>Entity results: <code>db.Customers.FromSql($\"EXEC dbo.GetCustomersByCity {city}\").ToList()</code>। Procedure को entity के सारे columns लौटाने चाहिए। सिर्फ़ तब, जब आगे और LINQ हो (जैसे <code>OrderBy</code>), उससे पहले <code>AsEnumerable()</code> लगाओ ताकि वो memory में चले।</li>\n<li>Custom shape (report): <code>db.Database.SqlQuery&lt;SalesRow&gt;($\"EXEC dbo.SalesReport {year}\")</code> — EF Core 8+ columns को नाम से properties पर map करता है।</li>\n<li>कोई result set नहीं: <code>db.Database.ExecuteSql($\"EXEC dbo.ArchiveOrders {cutoff}\")</code> affected rows लौटाता है।</li>\n<li>Output parameter: <code>new SqlParameter(\"@total\", SqlDbType.Int) { Direction = ParameterDirection.Output }</code> बनाओ, <code>ExecuteSqlRaw(\"EXEC dbo.CountOrders @total OUTPUT\", total)</code> चलाओ, फिर <code>total.Value</code> पढ़ो।</li>\n<li>Procedures से insert/update/delete: EF Core 7+ किसी entity की writes को <code>InsertUsingStoredProcedure</code>/<code>UpdateUsingStoredProcedure</code>/<code>DeleteUsingStoredProcedure</code> से stored procedures पर map कर सकता है, ताकि <code>SaveChanges()</code> उन्हें call करे।</li>\n</ul>\n<p>TL angle: heavy reports के लिए या जब logic DBA team का हो तब procedures ठीक हैं; business rules एक ही जगह रखो, आधे C# में और आधे procedures में नहीं।</p>",
        hg: "<ul>\n<li>Entity results: <code>db.Customers.FromSql($\"EXEC dbo.GetCustomersByCity {city}\").ToList()</code>. Procedure ko entity ke saare columns lautaane chahiye. Sirf tab, jab aage aur LINQ ho (jaise <code>OrderBy</code>), usse pehle <code>AsEnumerable()</code> lagao taaki woh memory mein chale.</li>\n<li>Custom shape (report): <code>db.Database.SqlQuery&lt;SalesRow&gt;($\"EXEC dbo.SalesReport {year}\")</code> — EF Core 8+ columns ko naam se properties par map karta hai.</li>\n<li>Koi result set nahi: <code>db.Database.ExecuteSql($\"EXEC dbo.ArchiveOrders {cutoff}\")</code> affected rows lautaata hai.</li>\n<li>Output parameter: <code>new SqlParameter(\"@total\", SqlDbType.Int) { Direction = ParameterDirection.Output }</code> banao, <code>ExecuteSqlRaw(\"EXEC dbo.CountOrders @total OUTPUT\", total)</code> chalao, phir <code>total.Value</code> padho.</li>\n<li>Procedures se insert/update/delete: EF Core 7+ kisi entity ki writes ko <code>InsertUsingStoredProcedure</code>/<code>UpdateUsingStoredProcedure</code>/<code>DeleteUsingStoredProcedure</code> se stored procedures par map kar sakta hai, taaki <code>SaveChanges()</code> unhe call kare.</li>\n</ul>\n<p>TL angle: heavy reports ke liye ya jab logic DBA team ka ho tab procedures theek hain; business rules ek hi jagah rakho, aadhe C# mein aur aadhe procedures mein nahi.</p>"
      },
      code: [
        {
          caption: {
            en: "Calling stored procedures: entity rows, a custom DTO, a command, and an OUTPUT parameter (compiles; needs a real SQL Server to run)",
            hi: "Stored procedures call करना: entity rows, custom DTO, command, और OUTPUT parameter (compile होता है; चलाने के लिए असली SQL Server चाहिए)",
            hg: "Stored procedures call karna: entity rows, custom DTO, command, aur OUTPUT parameter (compile hota hai; chalaane ke liye asli SQL Server chahiye)"
          },
          check: "compile",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          src: "using System.Data;\nusing Microsoft.Data.SqlClient;\nusing Microsoft.EntityFrameworkCore;\n\npublic class ReportService(ShopContext db)\n{\n    // 1a. Rows that map to an entity: no further LINQ, so just ToList()\n    public List<Customer> AllCustomersIn(string city) =>\n        db.Customers.FromSql($\"EXEC dbo.GetCustomersByCity {city}\").ToList();\n\n    // 1b. More LINQ follows: AsEnumerable() first, because SQL Server cannot compose over EXEC\n    public List<Customer> CustomersIn(string city) =>\n        db.Customers\n          .FromSql($\"EXEC dbo.GetCustomersByCity {city}\")\n          .AsEnumerable()\n          .OrderBy(c => c.Name)                 // runs in memory, after EXEC\n          .ToList();\n\n    // 2. Any shape, mapped by column name (EF Core 8+)\n    public Task<List<SalesRow>> SalesAsync(int year) =>\n        db.Database\n          .SqlQuery<SalesRow>($\"EXEC dbo.SalesReport {year}\")\n          .ToListAsync();\n\n    // 3. A command with no result set: returns rows affected\n    public Task<int> ArchiveAsync(DateTime cutoff) =>\n        db.Database.ExecuteSqlAsync($\"EXEC dbo.ArchiveOrders {cutoff}\");\n\n    // 4. An OUTPUT parameter needs a SqlParameter object\n    public int CountOrders(int customerId)\n    {\n        var total = new SqlParameter(\"@total\", SqlDbType.Int) { Direction = ParameterDirection.Output };\n        db.Database.ExecuteSqlRaw(\n            \"EXEC dbo.CountOrders @customerId, @total OUTPUT\",\n            new SqlParameter(\"@customerId\", customerId),\n            total);\n        return (int)total.Value;\n    }\n}\n\npublic record SalesRow(string City, decimal Revenue);\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public string City { get; set; } = \"\";\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}"
        }
      ]
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
        en: "<ul>\n<li><b>EF Core strengths</b>: LINQ with compile-time checks, change tracking + unit of work, relationships, migrations, provider independence, less boilerplate for writes.</li>\n<li><b>Dapper strengths</b>: you write exactly the SQL you want, very low overhead mapping, simple mental model — good for read-heavy reporting.</li>\n<li>The gap is smaller than it used to be: no-tracking queries, projections, <code>SqlQuery&lt;T&gt;</code> (EF Core 8) and <code>ExecuteUpdate</code> (EF Core 7) cover many cases that once needed Dapper.</li>\n<li>Mixing: Dapper can run on <code>db.Database.GetDbConnection()</code> with <code>db.Database.CurrentTransaction?.GetDbTransaction()</code>, so both commit together.</li>\n</ul>\n<p>TL angle: decide per use case, not per developer taste — write the rule down (\"writes and normal reads via EF; reports via Dapper in the Reporting module\") so the codebase stays consistent.</p>",
        hi: "<ul>\n<li><b>EF Core की ताक़त</b>: compile-time checks वाला LINQ, change tracking + unit of work, relationships, migrations, provider independence, writes के लिए कम boilerplate।</li>\n<li><b>Dapper की ताक़त</b>: आप ठीक वही SQL लिखते हो जो चाहिए, बहुत कम overhead वाली mapping, सीधा mental model — read-heavy reporting के लिए अच्छा।</li>\n<li>फ़र्क़ पहले से कम है: no-tracking queries, projections, <code>SqlQuery&lt;T&gt;</code> (EF Core 8) और <code>ExecuteUpdate</code> (EF Core 7) कई ऐसे cases संभालते हैं जिनके लिए पहले Dapper चाहिए था।</li>\n<li>दोनों मिलाना: Dapper <code>db.Database.GetDbConnection()</code> पर <code>db.Database.CurrentTransaction?.GetDbTransaction()</code> के साथ चल सकता है, ताकि दोनों साथ commit हों।</li>\n</ul>\n<p>TL angle: फ़ैसला use case के हिसाब से लो, developer की पसंद से नहीं — rule लिख दो (\"writes और normal reads EF से; reports Reporting module में Dapper से\") ताकि codebase consistent रहे।</p>",
        hg: "<ul>\n<li><b>EF Core ki taakat</b>: compile-time checks wala LINQ, change tracking + unit of work, relationships, migrations, provider independence, writes ke liye kam boilerplate.</li>\n<li><b>Dapper ki taakat</b>: aap theek wahi SQL likhte ho jo chahiye, bahut kam overhead wali mapping, seedha mental model — read-heavy reporting ke liye achha.</li>\n<li>Farq pehle se kam hai: no-tracking queries, projections, <code>SqlQuery&lt;T&gt;</code> (EF Core 8) aur <code>ExecuteUpdate</code> (EF Core 7) kai aise cases sambhaalte hain jinke liye pehle Dapper chahiye tha.</li>\n<li>Dono milaana: Dapper <code>db.Database.GetDbConnection()</code> par <code>db.Database.CurrentTransaction?.GetDbTransaction()</code> ke saath chal sakta hai, taaki dono saath commit hon.</li>\n</ul>\n<p>TL angle: faisla use case ke hisaab se lo, developer ki pasand se nahi — rule likh do (\"writes aur normal reads EF se; reports Reporting module mein Dapper se\") taaki codebase consistent rahe.</p>"
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
        en: "<ul>\n<li>Transient errors: Azure SQL failover, throttling, a dropped connection. Retrying after a short delay usually succeeds.</li>\n<li><code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure(maxRetryCount: 5, maxRetryDelay: TimeSpan.FromSeconds(10), errorNumbersToAdd: null))</code> — single <code>SaveChanges()</code> calls and queries are retried automatically.</li>\n<li>With your own <code>BeginTransaction()</code> (or a <code>TransactionScope</code>) EF cannot retry just one statement in the middle, so the next <code>SaveChanges()</code> or query throws: \"The configured execution strategy ... does not support user-initiated transactions.\" Wrap the whole unit: <code>await db.Database.CreateExecutionStrategy().ExecuteAsync(async () =&gt; { ... })</code>.</li>\n<li>Inside the lambda: start clean (<code>ChangeTracker.Clear()</code> or a new context), no external calls, no non-idempotent side effects.</li>\n<li>Edge case: if the connection drops <b>during commit</b>, you cannot know whether it committed. EF offers <code>ExecuteInTransaction(..., verifySucceeded)</code> so you can check before retrying.</li>\n</ul>\n<p>Follow-up: \"Polly or EF retries?\" — for database calls, use EF's strategy (it knows SQL Server's transient error numbers); Polly is for HTTP and other dependencies (Day 16).</p>",
        hi: "<ul>\n<li>Transient errors: Azure SQL failover, throttling, टूटा connection। थोड़ी देर बाद retry करने पर आमतौर पर काम हो जाता है।</li>\n<li><code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure(maxRetryCount: 5, maxRetryDelay: TimeSpan.FromSeconds(10), errorNumbersToAdd: null))</code> — अकेले <code>SaveChanges()</code> calls और queries अपने-आप retry होते हैं।</li>\n<li>आपके अपने <code>BeginTransaction()</code> (या <code>TransactionScope</code>) के साथ EF बीच का सिर्फ़ एक statement retry नहीं कर सकता, इसलिए अगला <code>SaveChanges()</code> या query throw करता है: \"The configured execution strategy ... does not support user-initiated transactions.\" पूरे unit को लपेटो: <code>await db.Database.CreateExecutionStrategy().ExecuteAsync(async () =&gt; { ... })</code>।</li>\n<li>Lambda के अंदर: साफ़ शुरुआत (<code>ChangeTracker.Clear()</code> या नया context), कोई external calls नहीं, कोई non-idempotent side effects नहीं।</li>\n<li>Edge case: अगर connection <b>commit के दौरान</b> टूटे, तो पता नहीं चलता कि commit हुआ या नहीं। EF <code>ExecuteInTransaction(..., verifySucceeded)</code> देता है ताकि retry से पहले check कर सको।</li>\n</ul>\n<p>Follow-up: \"Polly या EF retries?\" — database calls के लिए EF की strategy (उसे SQL Server के transient error numbers पता हैं); Polly HTTP और बाकी dependencies के लिए (Day 16)।</p>",
        hg: "<ul>\n<li>Transient errors: Azure SQL failover, throttling, toota connection. Thodi der baad retry karne par aamtaur par kaam ho jaata hai.</li>\n<li><code>UseSqlServer(cs, o =&gt; o.EnableRetryOnFailure(maxRetryCount: 5, maxRetryDelay: TimeSpan.FromSeconds(10), errorNumbersToAdd: null))</code> — akele <code>SaveChanges()</code> calls aur queries apne-aap retry hote hain.</li>\n<li>Aapke apne <code>BeginTransaction()</code> (ya <code>TransactionScope</code>) ke saath EF beech ka sirf ek statement retry nahi kar sakta, isliye agla <code>SaveChanges()</code> ya query throw karta hai: \"The configured execution strategy ... does not support user-initiated transactions.\" Poore unit ko lapeto: <code>await db.Database.CreateExecutionStrategy().ExecuteAsync(async () =&gt; { ... })</code>.</li>\n<li>Lambda ke andar: saaf shuruaat (<code>ChangeTracker.Clear()</code> ya naya context), koi external calls nahi, koi non-idempotent side effects nahi.</li>\n<li>Edge case: agar connection <b>commit ke dauraan</b> toote, to pata nahi chalta ki commit hua ya nahi. EF <code>ExecuteInTransaction(..., verifySucceeded)</code> deta hai taaki retry se pehle check kar sako.</li>\n</ul>\n<p>Follow-up: \"Polly ya EF retries?\" — database calls ke liye EF ki strategy (use SQL Server ke transient error numbers pata hain); Polly HTTP aur baaki dependencies ke liye (Day 16).</p>"
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
        en: "<ul>\n<li><code>[Timestamp]</code> = <code>.IsRowVersion()</code> in Fluent API: a concurrency token that is also <b>generated by the database</b> on add and update. EF reads the new value back after each save.</li>\n<li><code>[ConcurrencyCheck]</code> = <code>.IsConcurrencyToken()</code>: the column's original value goes into the <code>WHERE</code>, but nobody changes it automatically. Puzzle below: a token on <code>Price</code> does not stop two users editing <code>Stock</code> and <code>Name</code> at the same time.</li>\n<li>For databases without <code>rowversion</code>, add a <code>Version</code> integer (or a GUID) as a token and change it in a <code>SaveChanges</code> override, as in the section demo. PostgreSQL has its own options (Day 19).</li>\n</ul>\n<p>Follow-up: \"Is rowversion a date/time?\" — No. Despite the old name <code>timestamp</code>, it is an 8-byte, database-wide increasing number, unrelated to clock time.</p>",
        hi: "<ul>\n<li><code>[Timestamp]</code> = Fluent API में <code>.IsRowVersion()</code>: एक concurrency token जो add और update पर <b>database ही generate</b> करता है। हर save के बाद EF नई value वापस पढ़ता है।</li>\n<li><code>[ConcurrencyCheck]</code> = <code>.IsConcurrencyToken()</code>: column की original value <code>WHERE</code> में जाती है, पर उसे कोई अपने-आप नहीं बदलता। नीचे का puzzle: <code>Price</code> पर token दो users को एक साथ <code>Stock</code> और <code>Name</code> edit करने से नहीं रोकता।</li>\n<li>जिन databases में <code>rowversion</code> नहीं है, वहाँ token के रूप में एक <code>Version</code> integer (या GUID) जोड़ो और उसे <code>SaveChanges</code> override में बदलो, जैसे section demo में। PostgreSQL के अपने options हैं (Day 19)।</li>\n</ul>\n<p>Follow-up: \"क्या rowversion कोई date/time है?\" — नहीं। पुराने नाम <code>timestamp</code> के बावजूद, यह 8-byte का पूरे database में बढ़ता हुआ number है, घड़ी के समय से इसका कोई लेना-देना नहीं।</p>",
        hg: "<ul>\n<li><code>[Timestamp]</code> = Fluent API mein <code>.IsRowVersion()</code>: ek concurrency token jo add aur update par <b>database hi generate</b> karta hai. Har save ke baad EF nayi value wapas padhta hai.</li>\n<li><code>[ConcurrencyCheck]</code> = <code>.IsConcurrencyToken()</code>: column ki original value <code>WHERE</code> mein jaati hai, par use koi apne-aap nahi badalta. Neeche ka puzzle: <code>Price</code> par token do users ko ek saath <code>Stock</code> aur <code>Name</code> edit karne se nahi rokta.</li>\n<li>Jin databases mein <code>rowversion</code> nahi hai, wahan token ke roop mein ek <code>Version</code> integer (ya GUID) jodo aur use <code>SaveChanges</code> override mein badlo, jaise section demo mein. PostgreSQL ke apne options hain (Day 19).</li>\n</ul>\n<p>Follow-up: \"Kya rowversion koi date/time hai?\" — Nahi. Purane naam <code>timestamp</code> ke bawajood, yeh 8-byte ka poore database mein badhta hua number hai, ghadi ke samay se iska koi lena-dena nahi.</p>"
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
        en: "<ul>\n<li>The trap: in a PUT you load the row <b>now</b> and save it a millisecond later — the version you loaded is always fresh, so no conflict is ever detected. The check must use the version the <b>user</b> saw when the form was opened.</li>\n<li>That is why the code sets <code>Property(p =&gt; p.Version).OriginalValue = dto.Version</code>. EF then sends <code>WHERE [Id] = @id AND [Version] = @versionFromUser</code>.</li>\n<li>In HTTP terms: the GET returns the version (in the body or as an <code>ETag</code> header); the client sends it back (in the body or as <code>If-Match</code>); the API answers <code>409</code>/<code>412</code> with the current data so the user can retry.</li>\n</ul>\n<p>TL angle: put this in a shared base (for example an <code>IVersioned</code> interface and one helper) so every edit endpoint gets it, instead of each developer remembering it.</p>",
        hi: "<ul>\n<li>जाल: PUT में आप row <b>अभी</b> load करते हो और एक millisecond बाद save करते हो — load की गई version हमेशा ताज़ा होती है, इसलिए कोई conflict कभी पकड़ा ही नहीं जाता। Check उस version से होना चाहिए जो form खोलते समय <b>user</b> ने देखी थी।</li>\n<li>इसीलिए code <code>Property(p =&gt; p.Version).OriginalValue = dto.Version</code> set करता है। फिर EF भेजता है <code>WHERE [Id] = @id AND [Version] = @versionFromUser</code>।</li>\n<li>HTTP की भाषा में: GET version लौटाता है (body में या <code>ETag</code> header में); client उसे वापस भेजता है (body में या <code>If-Match</code> में); API मौजूदा data के साथ <code>409</code>/<code>412</code> जवाब देती है ताकि user फिर से कोशिश कर सके।</li>\n</ul>\n<p>TL angle: इसे एक shared base में रखो (जैसे एक <code>IVersioned</code> interface और एक helper) ताकि हर edit endpoint को यह मिले, बजाय इसके कि हर developer इसे याद रखे।</p>",
        hg: "<ul>\n<li>Jaal: PUT mein aap row <b>abhi</b> load karte ho aur ek millisecond baad save karte ho — load ki gayi version hamesha taaza hoti hai, isliye koi conflict kabhi pakda hi nahi jaata. Check us version se hona chahiye jo form kholte samay <b>user</b> ne dekhi thi.</li>\n<li>Isiliye code <code>Property(p =&gt; p.Version).OriginalValue = dto.Version</code> set karta hai. Phir EF bhejta hai <code>WHERE [Id] = @id AND [Version] = @versionFromUser</code>.</li>\n<li>HTTP ki bhaasha mein: GET version lautaata hai (body mein ya <code>ETag</code> header mein); client use wapas bhejta hai (body mein ya <code>If-Match</code> mein); API maujooda data ke saath <code>409</code>/<code>412</code> jawaab deti hai taaki user phir se koshish kar sake.</li>\n</ul>\n<p>TL angle: ise ek shared base mein rakho (jaise ek <code>IVersioned</code> interface aur ek helper) taaki har edit endpoint ko yeh mile, bajaay iske ki har developer ise yaad rakhe.</p>"
      },
      code: [
        {
          caption: {
            en: "Update with the version the user saw; a conflict becomes a result the controller maps to 409 (compiles)",
            hi: "User की देखी version के साथ update; conflict एक result बनता है जिसे controller 409 पर map करता है (compile होता है)",
            hg: "User ki dekhi version ke saath update; conflict ek result banta hai jise controller 409 par map karta hai (compile hota hai)"
          },
          check: "compile",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          src: "using System.ComponentModel.DataAnnotations;\nusing Microsoft.EntityFrameworkCore;\n\npublic record ProductDto(int Id, string Name, decimal Price, byte[] Version);\n\npublic enum UpdateResult { Updated, NotFound, Conflict }\n\npublic class ProductService(ShopContext db)\n{\n    public async Task<UpdateResult> UpdateAsync(ProductDto dto, CancellationToken ct)\n    {\n        var product = await db.Products.FindAsync([dto.Id], ct);\n        if (product is null) return UpdateResult.NotFound;\n\n        // Compare with the version the USER saw, not the one we just loaded\n        db.Entry(product).Property(p => p.Version).OriginalValue = dto.Version;\n\n        product.Name = dto.Name;\n        product.Price = dto.Price;\n        try\n        {\n            await db.SaveChangesAsync(ct);   // UPDATE ... WHERE [Id] = @p AND [Version] = @userVersion\n            return UpdateResult.Updated;\n        }\n        catch (DbUpdateConcurrencyException)\n        {\n            return UpdateResult.Conflict;    // controller: return Conflict(...) => HTTP 409\n        }\n    }\n}\n\npublic class Product\n{\n    public int Id { get; set; }\n    [MaxLength(100)] public string Name { get; set; } = \"\";\n    public decimal Price { get; set; }\n    [Timestamp] public byte[] Version { get; set; } = [];\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n        => modelBuilder.Entity<Product>().Property(p => p.Price).HasPrecision(10, 2);\n}"
        }
      ]
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
        en: "<ul>\n<li><b>Stale entities</b>: a tracked entity keeps its old values after an <code>ExecuteUpdate</code>. If you then change another property and save, EF updates only that column (bulk value survives); if the row was removed by <code>ExecuteDelete</code>, saving the stale entity throws <code>DbUpdateConcurrencyException</code>. Both are puzzles below.</li>\n<li><b>Audit and events</b>: <code>UpdatedOn</code>/<code>UpdatedBy</code> set in a <code>SaveChanges</code> override or interceptor, domain events, outbox messages — none of it runs. Set audit columns in <code>SetProperty</code>; raise events explicitly.</li>\n<li><b>Concurrency</b>: no token check — add <code>&amp;&amp; p.Version == expected</code> to the <code>Where</code> if it matters, and check the returned row count.</li>\n<li><b>Cascades</b>: only the database's FK rules act; EF does not delete or null-out dependents for you.</li>\n<li><b>Transactions</b>: each call is its own statement; use an explicit transaction to tie it to other work.</li>\n<li><b>Tests</b>: the EF InMemory provider throws \"not supported\" for these methods — test them with SQLite or a real SQL Server (for example in a container).</li>\n</ul>",
        hi: "<ul>\n<li><b>Stale entities</b>: <code>ExecuteUpdate</code> के बाद tracked entity पुरानी values रखती है। अगर फिर आप कोई दूसरी property बदलकर save करो, तो EF सिर्फ़ वही column update करता है (bulk वाली value बची रहती है); अगर row <code>ExecuteDelete</code> से हट चुकी थी, तो stale entity को save करना <code>DbUpdateConcurrencyException</code> throw करता है। दोनों नीचे puzzles में हैं।</li>\n<li><b>Audit और events</b>: <code>SaveChanges</code> override या interceptor में set होने वाले <code>UpdatedOn</code>/<code>UpdatedBy</code>, domain events, outbox messages — इनमें से कुछ नहीं चलता। Audit columns <code>SetProperty</code> में set करो; events खुद raise करो।</li>\n<li><b>Concurrency</b>: token check नहीं होता — ज़रूरी हो तो <code>Where</code> में <code>&amp;&amp; p.Version == expected</code> जोड़ो, और लौटी row count check करो।</li>\n<li><b>Cascades</b>: सिर्फ़ database के FK rules काम करते हैं; EF आपके लिए dependents को delete या null नहीं करता।</li>\n<li><b>Transactions</b>: हर call अपना अलग statement है; उसे दूसरे काम से बाँधने के लिए explicit transaction use करो।</li>\n<li><b>Tests</b>: EF InMemory provider इन methods के लिए \"not supported\" throw करता है — इन्हें SQLite या असली SQL Server (जैसे container में) से test करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Stale entities</b>: <code>ExecuteUpdate</code> ke baad tracked entity purani values rakhti hai. Agar phir aap koi doosri property badalkar save karo, to EF sirf wahi column update karta hai (bulk wali value bachi rehti hai); agar row <code>ExecuteDelete</code> se hat chuki thi, to stale entity ko save karna <code>DbUpdateConcurrencyException</code> throw karta hai. Dono neeche puzzles mein hain.</li>\n<li><b>Audit aur events</b>: <code>SaveChanges</code> override ya interceptor mein set hone wale <code>UpdatedOn</code>/<code>UpdatedBy</code>, domain events, outbox messages — inmein se kuch nahi chalta. Audit columns <code>SetProperty</code> mein set karo; events khud raise karo.</li>\n<li><b>Concurrency</b>: token check nahi hota — zaroori ho to <code>Where</code> mein <code>&amp;&amp; p.Version == expected</code> jodo, aur lauti row count check karo.</li>\n<li><b>Cascades</b>: sirf database ke FK rules kaam karte hain; EF aapke liye dependents ko delete ya null nahi karta.</li>\n<li><b>Transactions</b>: har call apna alag statement hai; use doosre kaam se baandhne ke liye explicit transaction use karo.</li>\n<li><b>Tests</b>: EF InMemory provider in methods ke liye \"not supported\" throw karta hai — inhe SQLite ya asli SQL Server (jaise container mein) se test karo.</li>\n</ul>"
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
        en: "<ul>\n<li>Filter: <code>modelBuilder.Entity&lt;Product&gt;().HasQueryFilter(p =&gt; !p.IsDeleted)</code> → every query gets <code>WHERE [p].[IsDeleted] = CAST(0 AS bit)</code>, including <code>ExecuteUpdate</code>/<code>ExecuteDelete</code>.</li>\n<li>Delete → update: in a <code>SaveChanges</code> override (or <code>SaveChangesInterceptor</code>), change <code>Deleted</code> entries to <code>Modified</code> and set <code>IsDeleted = true</code>, <code>DeletedOn = now</code>. Bulk: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.IsDeleted, true))</code>.</li>\n<li>Admin/reporting screens use <code>IgnoreQueryFilters()</code>.</li>\n<li>SQL Server side: unique indexes should ignore deleted rows — <code>HasIndex(p =&gt; p.Code).IsUnique().HasFilter(\"[IsDeleted] = 0\")</code>; and most indexes benefit from the filter column.</li>\n<li><b>EF Core 10</b> adds <b>named query filters</b>: several filters per entity (for example soft delete and tenant) and switching off one by name: <code>IgnoreQueryFilters([\"SoftDelete\"])</code>. Before EF Core 10, an entity had one filter, so you combined conditions in one expression.</li>\n</ul>\n<p>TL angle: soft delete affects every query, report and unique rule — agree on it as a team (and on data retention/GDPR) before adding the flag.</p>",
        hi: "<ul>\n<li>Filter: <code>modelBuilder.Entity&lt;Product&gt;().HasQueryFilter(p =&gt; !p.IsDeleted)</code> → हर query में <code>WHERE [p].[IsDeleted] = CAST(0 AS bit)</code> जुड़ता है, <code>ExecuteUpdate</code>/<code>ExecuteDelete</code> में भी।</li>\n<li>Delete → update: <code>SaveChanges</code> override (या <code>SaveChangesInterceptor</code>) में <code>Deleted</code> entries को <code>Modified</code> करो और <code>IsDeleted = true</code>, <code>DeletedOn = now</code> set करो। Bulk: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.IsDeleted, true))</code>।</li>\n<li>Admin/reporting screens <code>IgnoreQueryFilters()</code> use करती हैं।</li>\n<li>SQL Server side: unique indexes को deleted rows ignore करनी चाहिए — <code>HasIndex(p =&gt; p.Code).IsUnique().HasFilter(\"[IsDeleted] = 0\")</code>; और ज़्यादातर indexes को filter column से फ़ायदा होता है।</li>\n<li><b>EF Core 10</b> में <b>named query filters</b> आए: हर entity पर कई filters (जैसे soft delete और tenant) और किसी एक को नाम से बंद करना: <code>IgnoreQueryFilters([\"SoftDelete\"])</code>। EF Core 10 से पहले हर entity का एक ही filter होता था, इसलिए conditions एक expression में जोड़नी पड़ती थीं।</li>\n</ul>\n<p>TL angle: soft delete हर query, report और unique rule पर असर डालता है — flag जोड़ने से पहले team के साथ इस पर (और data retention/GDPR पर) सहमति बनाओ।</p>",
        hg: "<ul>\n<li>Filter: <code>modelBuilder.Entity&lt;Product&gt;().HasQueryFilter(p =&gt; !p.IsDeleted)</code> → har query mein <code>WHERE [p].[IsDeleted] = CAST(0 AS bit)</code> judta hai, <code>ExecuteUpdate</code>/<code>ExecuteDelete</code> mein bhi.</li>\n<li>Delete → update: <code>SaveChanges</code> override (ya <code>SaveChangesInterceptor</code>) mein <code>Deleted</code> entries ko <code>Modified</code> karo aur <code>IsDeleted = true</code>, <code>DeletedOn = now</code> set karo. Bulk: <code>ExecuteUpdate(s =&gt; s.SetProperty(p =&gt; p.IsDeleted, true))</code>.</li>\n<li>Admin/reporting screens <code>IgnoreQueryFilters()</code> use karti hain.</li>\n<li>SQL Server side: unique indexes ko deleted rows ignore karni chahiye — <code>HasIndex(p =&gt; p.Code).IsUnique().HasFilter(\"[IsDeleted] = 0\")</code>; aur zyaadatar indexes ko filter column se faayda hota hai.</li>\n<li><b>EF Core 10</b> mein <b>named query filters</b> aaye: har entity par kai filters (jaise soft delete aur tenant) aur kisi ek ko naam se band karna: <code>IgnoreQueryFilters([\"SoftDelete\"])</code>. EF Core 10 se pehle har entity ka ek hi filter hota tha, isliye conditions ek expression mein jodni padti thin.</li>\n</ul>\n<p>TL angle: soft delete har query, report aur unique rule par asar daalta hai — flag jodne se pehle team ke saath is par (aur data retention/GDPR par) sahmati banao.</p>"
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
        en: "<ul>\n<li><b>1. Measure</b>: Application Insights dependency calls (how many SQL calls per request, which is slowest), or EF command logs with durations.</li>\n<li><b>2. Find the SQL</b>: <code>TagWith</code> comments, Query Store \"top resource consuming queries\", Extended Events.</li>\n<li><b>3. Read the plan</b> in SSMS: scans vs seeks, key lookups (covering index?), bad row estimates, parameter sniffing.</li>\n<li><b>Implicit conversion trap</b>: if a column is <code>varchar</code> in the database but the EF model maps it as Unicode (<code>nvarchar</code>), the parameter type does not match and SQL Server may scan instead of seek. Map it correctly with <code>IsUnicode(false)</code> / <code>HasColumnType(\"varchar(50)\")</code>.</li>\n<li><b>4. Fix in EF</b>: remove N+1, project, <code>AsNoTracking</code>, split query, page; add the index through a migration so it is reviewed and versioned.</li>\n<li><b>5. Prove and guard</b>: before/after numbers, a query-count test for the endpoint, and an alert on slow dependencies.</li>\n</ul>\n<p>TL angle: interviewers want a calm, ordered process and the habit of measuring — not a list of random tips.</p>",
        hi: "<ul>\n<li><b>1. Measure</b>: Application Insights की dependency calls (हर request में कितनी SQL calls, कौन सी सबसे धीमी), या durations के साथ EF command logs।</li>\n<li><b>2. SQL ढूँढो</b>: <code>TagWith</code> comments, Query Store की \"top resource consuming queries\", Extended Events।</li>\n<li><b>3. SSMS में plan पढ़ो</b>: scans बनाम seeks, key lookups (covering index?), गलत row estimates, parameter sniffing।</li>\n<li><b>Implicit conversion का जाल</b>: अगर database में column <code>varchar</code> है पर EF model उसे Unicode (<code>nvarchar</code>) map करता है, तो parameter type match नहीं करता और SQL Server seek की जगह scan कर सकता है। <code>IsUnicode(false)</code> / <code>HasColumnType(\"varchar(50)\")</code> से सही map करो।</li>\n<li><b>4. EF में fix</b>: N+1 हटाओ, project करो, <code>AsNoTracking</code>, split query, paging; index migration से जोड़ो ताकि वो review और version हो।</li>\n<li><b>5. साबित करो और बचाव रखो</b>: पहले/बाद के numbers, endpoint के लिए query-count test, और धीमी dependencies पर alert।</li>\n</ul>\n<p>TL angle: interviewers एक शांत, क्रम वाला process और measure करने की आदत देखना चाहते हैं — random tips की list नहीं।</p>",
        hg: "<ul>\n<li><b>1. Measure</b>: Application Insights ki dependency calls (har request mein kitni SQL calls, kaunsi sabse dheemi), ya durations ke saath EF command logs.</li>\n<li><b>2. SQL dhoondho</b>: <code>TagWith</code> comments, Query Store ki \"top resource consuming queries\", Extended Events.</li>\n<li><b>3. SSMS mein plan padho</b>: scans vs seeks, key lookups (covering index?), galat row estimates, parameter sniffing.</li>\n<li><b>Implicit conversion ka jaal</b>: agar database mein column <code>varchar</code> hai par EF model use Unicode (<code>nvarchar</code>) map karta hai, to parameter type match nahi karta aur SQL Server seek ki jagah scan kar sakta hai. <code>IsUnicode(false)</code> / <code>HasColumnType(\"varchar(50)\")</code> se sahi map karo.</li>\n<li><b>4. EF mein fix</b>: N+1 hatao, project karo, <code>AsNoTracking</code>, split query, paging; index migration se jodo taaki woh review aur version ho.</li>\n<li><b>5. Saabit karo aur bachaav rakho</b>: pehle/baad ke numbers, endpoint ke liye query-count test, aur dheemi dependencies par alert.</li>\n</ul>\n<p>TL angle: interviewers ek shaant, kram wala process aur measure karne ki aadat dekhna chahte hain — random tips ki list nahi.</p>"
      }
    }
  ],
  puzzles: [
    {
      id: "projection-tracking",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\nusing (var setup = new ShopContext(options))\n{\n    setup.Database.EnsureCreated();\n    foreach (var name in new[] { \"Asha\", \"Ravi\", \"Meera\" })\n    {\n        var c = new Customer { Name = name };\n        c.Orders.Add(new Order());\n        setup.Customers.Add(c);\n    }\n    setup.SaveChanges();\n}\n\nusing var db = new ShopContext(options);\n\nvar rows = db.Customers\n    .Select(c => new { c.Name, OrderCount = c.Orders.Count })\n    .ToList();\nConsole.WriteLine($\"Scalars only:  tracked = {db.ChangeTracker.Entries().Count()}\");\n\nvar withEntity = db.Customers\n    .Select(c => new { Customer = c, OrderCount = c.Orders.Count })\n    .ToList();\nConsole.WriteLine($\"Entity inside: tracked = {db.ChangeTracker.Entries().Count()}\");\n\nwithEntity[0].Customer.Name = \"Asha K\";\nConsole.WriteLine($\"Rows saved = {db.SaveChanges()}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<Order> Orders { get; } = [];\n}\n\npublic class Order\n{\n    public int Id { get; set; }\n    public int CustomerId { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}",
      answer: "Scalars only:  tracked = 0\nEntity inside: tracked = 3\nRows saved = 1",
      explain: {
        en: "<ul>\n<li>The first projection returns only a string and a number. There is no entity in the result, so <b>nothing is tracked</b> → 0. No <code>AsNoTracking()</code> needed.</li>\n<li>The second projection puts the whole <code>Customer</code> entity inside the anonymous type. Entities in a projection <b>are tracked</b> (in a tracking query) → 3.</li>\n<li>Because they are tracked, changing <code>Name</code> and calling <code>SaveChanges()</code> writes 1 UPDATE → <b>Rows saved = 1</b>.</li>\n<li>Lesson: \"projections are not tracked\" is true for DTO/scalar fields — not for entities you carry inside them.</li>\n</ul>",
        hi: "<ul>\n<li>पहला projection सिर्फ़ एक string और एक number लौटाता है। Result में कोई entity नहीं, इसलिए <b>कुछ track नहीं होता</b> → 0। <code>AsNoTracking()</code> की ज़रूरत नहीं।</li>\n<li>दूसरा projection पूरी <code>Customer</code> entity को anonymous type के अंदर रखता है। Projection के अंदर की entities (tracking query में) <b>track होती हैं</b> → 3।</li>\n<li>क्योंकि वो tracked हैं, <code>Name</code> बदलकर <code>SaveChanges()</code> call करने पर 1 UPDATE जाता है → <b>Rows saved = 1</b>।</li>\n<li>सीख: \"projections track नहीं होते\" DTO/scalar fields के लिए सच है — उनके अंदर रखी entities के लिए नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Pehla projection sirf ek string aur ek number lautaata hai. Result mein koi entity nahi, isliye <b>kuch track nahi hota</b> → 0. <code>AsNoTracking()</code> ki zaroorat nahi.</li>\n<li>Doosra projection poori <code>Customer</code> entity ko anonymous type ke andar rakhta hai. Projection ke andar ki entities (tracking query mein) <b>track hoti hain</b> → 3.</li>\n<li>Kyunki woh tracked hain, <code>Name</code> badalkar <code>SaveChanges()</code> call karne par 1 UPDATE jaata hai → <b>Rows saved = 1</b>.</li>\n<li>Seekh: \"projections track nahi hote\" DTO/scalar fields ke liye sach hai — unke andar rakhi entities ke liye nahi.</li>\n</ul>"
      }
    },
    {
      id: "execute-update-stale",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\nusing var db = new ShopContext(options);\ndb.Database.EnsureCreated();\ndb.Products.Add(new Product { Name = \"Pen\", Price = 10 });\ndb.SaveChanges();\n\nvar pen = db.Products.Single();                       // tracked, Price 10\n\nint rows = db.Products.ExecuteUpdate(s => s.SetProperty(p => p.Price, p => p.Price + 5));\nConsole.WriteLine($\"Rows = {rows}, tracked Price = {pen.Price}\");\nConsole.WriteLine($\"Tracking re-query Price = {db.Products.Single().Price}\");\nConsole.WriteLine($\"No-tracking Price = {db.Products.AsNoTracking().Single().Price}\");\n\npen.Name = \"Blue Pen\";\ndb.SaveChanges();\nvar saved = db.Products.AsNoTracking().Single();\nConsole.WriteLine($\"After SaveChanges: {saved.Name}, {saved.Price}\");\n\npublic class Product\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public int Price { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n}",
      answer: "Rows = 1, tracked Price = 10\nTracking re-query Price = 10\nNo-tracking Price = 15\nAfter SaveChanges: Blue Pen, 15",
      explain: {
        en: "<ul>\n<li><code>ExecuteUpdate</code> changes the row in the database (Price 15) and returns 1 — but the tracked <code>pen</code> object is <b>not touched</b>: still 10.</li>\n<li>A tracking re-query finds the same key already tracked and returns the <b>same object</b> without overwriting it (identity resolution, Day 5) → still 10.</li>\n<li><code>AsNoTracking()</code> builds a new object straight from the row → 15.</li>\n<li>Changing only <code>Name</code> makes EF send <code>UPDATE ... SET Name = ...</code> — only the modified column. The bulk price survives: <b>Blue Pen, 15</b>. (Had you also changed <code>Price</code> on the stale object, you would have overwritten 15 with your value.)</li>\n</ul>",
        hi: "<ul>\n<li><code>ExecuteUpdate</code> database में row बदल देता है (Price 15) और 1 लौटाता है — पर tracked <code>pen</code> object को <b>छूता भी नहीं</b>: अब भी 10।</li>\n<li>Tracking re-query को वही key पहले से tracked मिलती है और वो उसे overwrite किए बिना <b>वही object</b> लौटाती है (identity resolution, Day 5) → अब भी 10।</li>\n<li><code>AsNoTracking()</code> सीधे row से नया object बनाता है → 15।</li>\n<li>सिर्फ़ <code>Name</code> बदलने पर EF <code>UPDATE ... SET Name = ...</code> भेजता है — सिर्फ़ बदला हुआ column। Bulk वाला price बचा रहता है: <b>Blue Pen, 15</b>। (अगर stale object पर <code>Price</code> भी बदलते, तो 15 आपकी value से overwrite हो जाता।)</li>\n</ul>",
        hg: "<ul>\n<li><code>ExecuteUpdate</code> database mein row badal deta hai (Price 15) aur 1 lautaata hai — par tracked <code>pen</code> object ko <b>chhoota bhi nahi</b>: ab bhi 10.</li>\n<li>Tracking re-query ko wahi key pehle se tracked milti hai aur woh use overwrite kiye bina <b>wahi object</b> lautaati hai (identity resolution, Day 5) → ab bhi 10.</li>\n<li><code>AsNoTracking()</code> seedhe row se naya object banata hai → 15.</li>\n<li>Sirf <code>Name</code> badalne par EF <code>UPDATE ... SET Name = ...</code> bhejta hai — sirf badla hua column. Bulk wala price bacha rehta hai: <b>Blue Pen, 15</b>. (Agar stale object par <code>Price</code> bhi badalte, to 15 aapki value se overwrite ho jaata.)</li>\n</ul>"
      }
    },
    {
      id: "execute-delete-then-save",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\nusing var db = new ShopContext(options);\ndb.Database.EnsureCreated();\ndb.Products.Add(new Product { Name = \"Ink\", Stock = 0 });\ndb.SaveChanges();\n\nvar ink = db.Products.Single();                        // tracked\n\nint deleted = db.Products.Where(p => p.Stock == 0).ExecuteDelete();\nConsole.WriteLine($\"Deleted = {deleted}, ink state = {db.Entry(ink).State}\");\n\nink.Stock = 10;                                        // edit the stale entity\ntry\n{\n    db.SaveChanges();\n    Console.WriteLine(\"Saved\");\n}\ncatch (Exception ex)\n{\n    Console.WriteLine(ex.GetType().Name);\n    Console.WriteLine(ex.Message[..ex.Message.IndexOf(';')]);\n}\n\npublic class Product\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public int Stock { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n}",
      answer: "Deleted = 1, ink state = Unchanged\nDbUpdateConcurrencyException\nThe database operation was expected to affect 1 row(s), but actually affected 0 row(s)",
      explain: {
        en: "<ul>\n<li><code>ExecuteDelete</code> removes the row in SQL, but the change tracker does not know: <code>ink</code> stays <b>Unchanged</b>.</li>\n<li>Editing it makes it Modified; <code>SaveChanges()</code> sends <code>UPDATE ... WHERE Id = 1</code>, which matches <b>0 rows</b>.</li>\n<li>EF expects 1 row and treats 0 as a concurrency problem → <b>DbUpdateConcurrencyException</b>, even though there is no concurrency token at all.</li>\n<li>Lesson: after bulk operations, do not keep using entities loaded earlier — clear the tracker or use a fresh context.</li>\n</ul>",
        hi: "<ul>\n<li><code>ExecuteDelete</code> SQL में row हटा देता है, पर change tracker को पता नहीं चलता: <code>ink</code> <b>Unchanged</b> ही रहती है।</li>\n<li>Edit करने पर वो Modified होती है; <code>SaveChanges()</code> <code>UPDATE ... WHERE Id = 1</code> भेजता है, जो <b>0 rows</b> से match करता है।</li>\n<li>EF 1 row की उम्मीद करता है और 0 को concurrency problem मानता है → <b>DbUpdateConcurrencyException</b>, जबकि कोई concurrency token है ही नहीं।</li>\n<li>सीख: bulk operations के बाद पहले load की गई entities use करते मत रहो — tracker clear करो या नया context लो।</li>\n</ul>",
        hg: "<ul>\n<li><code>ExecuteDelete</code> SQL mein row hata deta hai, par change tracker ko pata nahi chalta: <code>ink</code> <b>Unchanged</b> hi rehti hai.</li>\n<li>Edit karne par woh Modified hoti hai; <code>SaveChanges()</code> <code>UPDATE ... WHERE Id = 1</code> bhejta hai, jo <b>0 rows</b> se match karta hai.</li>\n<li>EF 1 row ki ummeed karta hai aur 0 ko concurrency problem maanta hai → <b>DbUpdateConcurrencyException</b>, jabki koi concurrency token hai hi nahi.</li>\n<li>Seekh: bulk operations ke baad pehle load ki gayi entities use karte mat raho — tracker clear karo ya naya context lo.</li>\n</ul>"
      }
    },
    {
      id: "token-on-one-column",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using System.ComponentModel.DataAnnotations;\nusing Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\nusing (var setup = new ShopContext(options))\n{\n    setup.Database.EnsureCreated();\n    setup.Products.Add(new Product { Name = \"Pen\", Price = 10, Stock = 5 });\n    setup.SaveChanges();\n}\n\nConsole.WriteLine(\"Round 1: \" + Race(options, p => p.Stock = 4, p => p.Name = \"Blue Pen\"));\nConsole.WriteLine(\"Round 2: \" + Race(options, p => p.Price = 12, p => p.Name = \"Red Pen\"));\n\n// Two users load the same row; A saves first, then B saves\nstatic string Race(DbContextOptions<ShopContext> options, Action<Product> userA, Action<Product> userB)\n{\n    using var a = new ShopContext(options);\n    using var b = new ShopContext(options);\n    var pa = a.Products.Single();\n    var pb = b.Products.Single();\n    userA(pa);\n    a.SaveChanges();\n    userB(pb);\n    try\n    {\n        b.SaveChanges();\n        return \"B saved\";\n    }\n    catch (DbUpdateConcurrencyException)\n    {\n        return \"B conflict\";\n    }\n}\n\npublic class Product\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    [ConcurrencyCheck] public int Price { get; set; }   // token on Price only\n    public int Stock { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n}",
      answer: "Round 1: B saved\nRound 2: B conflict",
      explain: {
        en: "<ul>\n<li>B's UPDATE always contains <code>WHERE Id = @id AND Price = @originalPrice</code> — the token's original value is checked even when B did not change <code>Price</code>.</li>\n<li>Round 1: A changed <code>Stock</code>, not <code>Price</code>. The price in the database still equals B's original price → 1 row matches → <b>B saved</b>. Two users edited the same row and nobody was warned.</li>\n<li>Round 2: A changed <code>Price</code> (10 → 12). B's <code>WHERE Price = 10</code> now matches 0 rows → <b>B conflict</b>.</li>\n<li>Lesson: a token on one ordinary column only guards that column. A <code>rowversion</code> (or a version number changed on every save) guards the whole row.</li>\n</ul>",
        hi: "<ul>\n<li>B के UPDATE में हमेशा <code>WHERE Id = @id AND Price = @originalPrice</code> होता है — token की original value check होती है, भले ही B ने <code>Price</code> न बदला हो।</li>\n<li>Round 1: A ने <code>Stock</code> बदला, <code>Price</code> नहीं। Database में price अब भी B की original price के बराबर है → 1 row match → <b>B saved</b>। दो users ने एक ही row edit की और किसी को warning नहीं मिली।</li>\n<li>Round 2: A ने <code>Price</code> बदला (10 → 12)। अब B का <code>WHERE Price = 10</code> 0 rows से match करता है → <b>B conflict</b>।</li>\n<li>सीख: एक साधारण column पर token सिर्फ़ उसी column की रक्षा करता है। <code>rowversion</code> (या हर save पर बदलने वाला version number) पूरी row की रक्षा करता है।</li>\n</ul>",
        hg: "<ul>\n<li>B ke UPDATE mein hamesha <code>WHERE Id = @id AND Price = @originalPrice</code> hota hai — token ki original value check hoti hai, bhale hi B ne <code>Price</code> na badla ho.</li>\n<li>Round 1: A ne <code>Stock</code> badla, <code>Price</code> nahi. Database mein price ab bhi B ki original price ke baraabar hai → 1 row match → <b>B saved</b>. Do users ne ek hi row edit ki aur kisi ko warning nahi mili.</li>\n<li>Round 2: A ne <code>Price</code> badla (10 → 12). Ab B ka <code>WHERE Price = 10</code> 0 rows se match karta hai → <b>B conflict</b>.</li>\n<li>Seekh: ek saadhaaran column par token sirf usi column ki raksha karta hai. <code>rowversion</code> (ya har save par badalne wala version number) poori row ki raksha karta hai.</li>\n</ul>"
      }
    },
    {
      id: "sql-injection",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\nusing var db = new ShopContext(options);\ndb.Database.EnsureCreated();\ndb.Customers.AddRange(\n    new Customer { Name = \"Asha\", City = \"Pune\" },\n    new Customer { Name = \"Ravi\", City = \"Delhi\" },\n    new Customer { Name = \"Meera\", City = \"Chennai\" });\ndb.SaveChanges();\n\nstring city = \"Pune' OR '1'='1\";      // typed by an attacker into the search box\n\n// DON'T: the input becomes part of the SQL text\nint glued = db.Customers\n    .FromSqlRaw(\"SELECT * FROM Customers WHERE City = '\" + city + \"'\")\n    .Count();\n\n// DO: the input travels as a parameter\nint interpolated = db.Customers\n    .FromSql($\"SELECT * FROM Customers WHERE City = {city}\")\n    .Count();\nint placeholder = db.Customers\n    .FromSqlRaw(\"SELECT * FROM Customers WHERE City = {0}\", city)\n    .Count();\n\nConsole.WriteLine($\"Concatenated:    {glued}\");\nConsole.WriteLine($\"FromSql:         {interpolated}\");\nConsole.WriteLine($\"FromSqlRaw {{0}}:  {placeholder}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public string City { get; set; } = \"\";\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}",
      answer: "Concatenated:    3\nFromSql:         0\nFromSqlRaw {0}:  0",
      explain: {
        en: "<ul>\n<li>Concatenation produces <code>WHERE City = 'Pune' OR '1'='1'</code>. <code>'1'='1'</code> is true for every row → <b>3</b>: the attacker sees every customer.</li>\n<li><code>FromSql($\"...{city}\")</code> sends <code>WHERE City = @p0</code> with the whole input as the value. No city is literally called <code>Pune' OR '1'='1</code> → <b>0</b>.</li>\n<li><code>FromSqlRaw</code> with a <code>{0}</code> placeholder also creates a parameter → <b>0</b>.</li>\n<li>Note: the EF1002 analyzer warns about interpolated strings in <code>FromSqlRaw</code>, but on EF Core 9 (this checker) the <code>+</code> concatenation compiles with no warning. EF Core 10 adds a concatenation warning — still, code review is the real guard.</li>\n</ul>",
        hi: "<ul>\n<li>String जोड़ने से <code>WHERE City = 'Pune' OR '1'='1'</code> बनता है। <code>'1'='1'</code> हर row के लिए true है → <b>3</b>: attacker को हर customer दिख जाता है।</li>\n<li><code>FromSql($\"...{city}\")</code> <code>WHERE City = @p0</code> भेजता है और पूरा input value की तरह जाता है। किसी city का नाम सच में <code>Pune' OR '1'='1</code> नहीं है → <b>0</b>।</li>\n<li><code>{0}</code> placeholder वाला <code>FromSqlRaw</code> भी parameter बनाता है → <b>0</b>।</li>\n<li>ध्यान दो: EF1002 analyzer <code>FromSqlRaw</code> में interpolated strings पर warning देता है, पर EF Core 9 (यह checker) पर <code>+</code> वाला जोड़ बिना किसी warning के compile हो जाता है। EF Core 10 जोड़ने पर भी warning देता है — फिर भी असली पहरा code review का है।</li>\n</ul>",
        hg: "<ul>\n<li>String jodne se <code>WHERE City = 'Pune' OR '1'='1'</code> banta hai. <code>'1'='1'</code> har row ke liye true hai → <b>3</b>: attacker ko har customer dikh jaata hai.</li>\n<li><code>FromSql($\"...{city}\")</code> <code>WHERE City = @p0</code> bhejta hai aur poora input value ki tarah jaata hai. Kisi city ka naam sach mein <code>Pune' OR '1'='1</code> nahi hai → <b>0</b>.</li>\n<li><code>{0}</code> placeholder wala <code>FromSqlRaw</code> bhi parameter banata hai → <b>0</b>.</li>\n<li>Dhyaan do: EF1002 analyzer <code>FromSqlRaw</code> mein interpolated strings par warning deta hai, par EF Core 9 (yeh checker) par <code>+</code> wala jod bina kisi warning ke compile ho jaata hai. EF Core 10 jodne par bhi warning deta hai — phir bhi asli pehra code review ka hai.</li>\n</ul>"
      }
    },
    {
      id: "translate-or-throw",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\nusing var db = new ShopContext(options);\ndb.Database.EnsureCreated();\ndb.Customers.AddRange(new Customer { Name = \"Asha\" }, new Customer { Name = \"Ravi\" });\ndb.SaveChanges();\n\n// 1. Your own C# method in the FINAL Select\nvar labels = db.Customers.OrderBy(c => c.Id).Select(c => Text.Shout(c.Name)).ToList();\nConsole.WriteLine(\"Select:   \" + string.Join(\", \", labels));\n\n// 2. A string method EF knows how to translate\nvar found = db.Customers.Where(c => c.Name.ToUpper() == \"ASHA\").Select(c => c.Name).ToList();\nConsole.WriteLine(\"ToUpper:  \" + string.Join(\", \", found));\n\n// 3. Your own C# method in a Where\ntry\n{\n    var bad = db.Customers.Where(c => Text.Shout(c.Name) == \"ASHA!\").ToList();\n    Console.WriteLine(\"Where:    \" + bad.Count);\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine(\"Where:    \" + ex.GetType().Name + \" - \" + (ex.Message.Contains(\"could not be translated\") ? \"could not be translated\" : \"?\"));\n}\n\nstatic class Text\n{\n    public static string Shout(string s) => s.ToUpperInvariant() + \"!\";\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}",
      answer: "Select:   ASHA!, RAVI!\nToUpper:  Asha\nWhere:    InvalidOperationException - could not be translated",
      explain: {
        en: "<ul>\n<li><b>Select</b>: in the final projection EF reads <code>Name</code> with SQL and then calls <code>Text.Shout</code> in C# on each row → <b>ASHA!, RAVI!</b>.</li>\n<li><b>ToUpper</b>: EF knows this method and translates it to SQL <code>upper(...)</code> → the filter runs in the database → <b>Asha</b>.</li>\n<li><b>Where</b> with your own method: EF cannot turn <code>Text.Shout</code> into SQL, and since EF Core 3.0 it refuses to filter in memory silently → <b>InvalidOperationException ... could not be translated</b>.</li>\n<li>Side note: the method lives in a class, not as a local function — C# does not allow a local function inside an expression tree (CS8110).</li>\n</ul>",
        hi: "<ul>\n<li><b>Select</b>: final projection में EF SQL से <code>Name</code> पढ़ता है और फिर हर row पर C# में <code>Text.Shout</code> call करता है → <b>ASHA!, RAVI!</b>।</li>\n<li><b>ToUpper</b>: EF यह method जानता है और इसे SQL के <code>upper(...)</code> में translate करता है → filter database में चलता है → <b>Asha</b>।</li>\n<li>अपने method वाला <b>Where</b>: EF <code>Text.Shout</code> को SQL में नहीं बदल सकता, और EF Core 3.0 से वो चुपचाप memory में filter करने से मना करता है → <b>InvalidOperationException ... could not be translated</b>।</li>\n<li>एक बात और: method एक class में है, local function नहीं — C# expression tree के अंदर local function की इजाज़त नहीं देता (CS8110)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Select</b>: final projection mein EF SQL se <code>Name</code> padhta hai aur phir har row par C# mein <code>Text.Shout</code> call karta hai → <b>ASHA!, RAVI!</b>.</li>\n<li><b>ToUpper</b>: EF yeh method jaanta hai aur ise SQL ke <code>upper(...)</code> mein translate karta hai → filter database mein chalta hai → <b>Asha</b>.</li>\n<li>Apne method wala <b>Where</b>: EF <code>Text.Shout</code> ko SQL mein nahi badal sakta, aur EF Core 3.0 se woh chupchaap memory mein filter karne se mana karta hai → <b>InvalidOperationException ... could not be translated</b>.</li>\n<li>Ek baat aur: method ek class mein hai, local function nahi — C# expression tree ke andar local function ki ijaazat nahi deta (CS8110).</li>\n</ul>"
      }
    },
    {
      id: "savepoint-in-transaction",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\nusing var db = new ShopContext(options);\ndb.Database.EnsureCreated();\n\nusing (var tx = db.Database.BeginTransaction())\n{\n    db.Products.Add(new Product { Code = \"PEN\" });\n    Console.WriteLine($\"Save 1 = {db.SaveChanges()}\");\n\n    db.Products.Add(new Product { Code = \"PEN\" });          // breaks the unique index\n    try\n    {\n        db.SaveChanges();\n    }\n    catch (DbUpdateException ex)\n    {\n        Console.WriteLine($\"Save 2 failed: {ex.GetType().Name}\");\n    }\n\n    db.ChangeTracker.Clear();\n    db.Products.Add(new Product { Code = \"INK\" });\n    Console.WriteLine($\"Save 3 = {db.SaveChanges()}\");\n\n    tx.Commit();\n}\n\nvar codes = db.Products.AsNoTracking().OrderBy(p => p.Id).Select(p => p.Code).ToList();\nConsole.WriteLine(\"After commit: \" + string.Join(\", \", codes));\n\npublic class Product\n{\n    public int Id { get; set; }\n    public string Code { get; set; } = \"\";\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n        => modelBuilder.Entity<Product>().HasIndex(p => p.Code).IsUnique();\n}",
      answer: "Save 1 = 1\nSave 2 failed: DbUpdateException\nSave 3 = 1\nAfter commit: PEN, INK",
      explain: {
        en: "<ul>\n<li>Inside a transaction you started, each <code>SaveChanges()</code> first creates a <b>savepoint</b> (EF Core 5+).</li>\n<li>Save 2 breaks the unique index → <code>DbUpdateException</code>. EF rolls back only to <b>its</b> savepoint, so PEN from Save 1 is still part of the open transaction.</li>\n<li><code>ChangeTracker.Clear()</code> drops the failed duplicate (it would otherwise be retried by the next save). Save 3 adds INK.</li>\n<li><code>Commit()</code> keeps everything that is still in the transaction → <b>PEN, INK</b>. Without the commit (or with <code>Rollback()</code>), both would be gone.</li>\n</ul>",
        hi: "<ul>\n<li>आपके शुरू किए transaction के अंदर हर <code>SaveChanges()</code> पहले एक <b>savepoint</b> बनाता है (EF Core 5+)।</li>\n<li>Save 2 unique index तोड़ता है → <code>DbUpdateException</code>। EF सिर्फ़ <b>अपने</b> savepoint तक rollback करता है, इसलिए Save 1 वाला PEN अब भी खुले transaction का हिस्सा है।</li>\n<li><code>ChangeTracker.Clear()</code> fail हुए duplicate को हटा देता है (वरना अगला save उसे फिर कोशिश करता)। Save 3 INK जोड़ता है।</li>\n<li><code>Commit()</code> transaction में बची हर चीज़ रखता है → <b>PEN, INK</b>। Commit के बिना (या <code>Rollback()</code> के साथ) दोनों चले जाते।</li>\n</ul>",
        hg: "<ul>\n<li>Aapke shuru kiye transaction ke andar har <code>SaveChanges()</code> pehle ek <b>savepoint</b> banata hai (EF Core 5+).</li>\n<li>Save 2 unique index todta hai → <code>DbUpdateException</code>. EF sirf <b>apne</b> savepoint tak rollback karta hai, isliye Save 1 wala PEN ab bhi khule transaction ka hissa hai.</li>\n<li><code>ChangeTracker.Clear()</code> fail hue duplicate ko hata deta hai (warna agla save use phir koshish karta). Save 3 INK jodta hai.</li>\n<li><code>Commit()</code> transaction mein bachi har cheez rakhta hai → <b>PEN, INK</b>. Commit ke bina (ya <code>Rollback()</code> ke saath) dono chale jaate.</li>\n</ul>"
      }
    },
    {
      id: "split-query-rows",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using System.Data.Common;\nusing Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Diagnostics;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar counter = new QueryCounter();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).AddInterceptors(counter).Options;\nusing (var setup = new ShopContext(options))\n{\n    setup.Database.EnsureCreated();\n    foreach (var name in new[] { \"Asha\", \"Ravi\", \"Meera\" })\n    {\n        var c = new Customer { Name = name };\n        for (int i = 0; i < 2; i++) c.Orders.Add(new Order());\n        for (int i = 0; i < 3; i++) c.Addresses.Add(new Address());\n        setup.Customers.Add(c);\n    }\n    setup.SaveChanges();\n}\n\nusing (var db = new ShopContext(options))\n{\n    var query = db.Customers.Include(c => c.Orders).Include(c => c.Addresses);\n\n    counter.Count = 0;\n    var single = query.ToList();\n    Console.WriteLine($\"Single query: commands = {counter.Count}, orders = {single.Sum(c => c.Orders.Count)}, addresses = {single.Sum(c => c.Addresses.Count)}\");\n\n    // How many rows did that one JOIN return? Run its SQL by hand and count.\n    using var cmd = connection.CreateCommand();\n    cmd.CommandText = query.ToQueryString();\n    using var reader = cmd.ExecuteReader();\n    int rows = 0;\n    while (reader.Read()) rows++;\n    Console.WriteLine($\"Rows in the JOIN result = {rows}\");\n}\n\nusing (var db = new ShopContext(options))\n{\n    counter.Count = 0;\n    var split = db.Customers.Include(c => c.Orders).Include(c => c.Addresses).AsSplitQuery().ToList();\n    Console.WriteLine($\"Split query:  commands = {counter.Count}, orders = {split.Sum(c => c.Orders.Count)}, addresses = {split.Sum(c => c.Addresses.Count)}\");\n}\n\npublic class QueryCounter : DbCommandInterceptor\n{\n    public int Count;\n    public override DbDataReader ReaderExecuted(DbCommand command, CommandExecutedEventData eventData, DbDataReader result)\n    {\n        Count++;\n        return result;\n    }\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<Order> Orders { get; } = [];\n    public List<Address> Addresses { get; } = [];\n}\n\npublic class Order { public int Id { get; set; } public int CustomerId { get; set; } }\npublic class Address { public int Id { get; set; } public int CustomerId { get; set; } }\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}",
      answer: "Single query: commands = 1, orders = 6, addresses = 9\nRows in the JOIN result = 18\nSplit query:  commands = 3, orders = 6, addresses = 9",
      explain: {
        en: "<ul>\n<li>Single query: one SQL with two <code>LEFT JOIN</code>s. EF still builds the right objects — 6 orders and 9 addresses — by de-duplicating rows on the keys.</li>\n<li>But the JOIN itself returns <b>orders × addresses per customer</b>: 2 × 3 = 6 rows per customer, × 3 customers = <b>18 rows</b> to carry 15 child objects, and each customer's columns repeat 6 times. With 50 orders and 20 addresses it would be 1,000 rows per customer.</li>\n<li>Split query: <b>3 commands</b> — customers, then orders, then addresses — and each row comes back once. Same objects, more round trips.</li>\n</ul>",
        hi: "<ul>\n<li>Single query: दो <code>LEFT JOIN</code> वाला एक SQL। EF फिर भी सही objects बनाता है — 6 orders और 9 addresses — keys पर rows के duplicates हटाकर।</li>\n<li>पर JOIN खुद <b>हर customer के orders × addresses</b> लौटाता है: हर customer की 2 × 3 = 6 rows, × 3 customers = 15 child objects के लिए <b>18 rows</b>, और हर customer के columns 6 बार दोहराए जाते हैं। 50 orders और 20 addresses होते तो हर customer की 1,000 rows।</li>\n<li>Split query: <b>3 commands</b> — customers, फिर orders, फिर addresses — और हर row एक ही बार आती है। Objects वही, round trips ज़्यादा।</li>\n</ul>",
        hg: "<ul>\n<li>Single query: do <code>LEFT JOIN</code> wala ek SQL. EF phir bhi sahi objects banata hai — 6 orders aur 9 addresses — keys par rows ke duplicates hataakar.</li>\n<li>Par JOIN khud <b>har customer ke orders × addresses</b> lautaata hai: har customer ki 2 × 3 = 6 rows, × 3 customers = 15 child objects ke liye <b>18 rows</b>, aur har customer ke columns 6 baar dohraaye jaate hain. 50 orders aur 20 addresses hote to har customer ki 1,000 rows.</li>\n<li>Split query: <b>3 commands</b> — customers, phir orders, phir addresses — aur har row ek hi baar aati hai. Objects wahi, round trips zyaada.</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>N+1</b> = 1 query for the list + 1 per row. Count commands with <code>LogTo</code> / <code>ToQueryString()</code>; fix with <code>Include</code> or a projection.",
      "<b>Projection</b> (<code>Select</code> into a DTO) = only the needed columns, COUNT/SUM done in SQL, nothing tracked.",
      "<b>Raw SQL</b>: <code>FromSql($\"...{x}\")</code> sends <code>x</code> as a parameter (safe); <code>FromSqlRaw</code> with concatenation is SQL injection.",
      "<b>Transactions</b>: one <code>SaveChanges()</code> is atomic; <code>BeginTransaction()</code> ties several steps into one <code>Commit()</code> or rollback.",
      "<b>Concurrency</b>: a token (<code>[ConcurrencyCheck]</code> or <code>rowversion</code>) goes into the UPDATE's WHERE; 0 rows gives <code>DbUpdateConcurrencyException</code>.",
      "<b>Bulk</b>: <code>ExecuteUpdate</code>/<code>ExecuteDelete</code> run one set-based statement now, but the change tracker is not told and <code>SaveChanges</code> logic is skipped.",
      "<b>Fast reads</b>: <code>AsNoTracking()</code> when not saving; page with a stable <code>OrderBy</code> + <code>Skip</code>/<code>Take</code>, or keyset for deep pages.",
      "<b>Cartesian explosion</b>: two collection Includes multiply rows; <code>AsSplitQuery()</code> sends one SQL per collection, at the cost of more round trips.",
      "<b>Retries</b>: <code>EnableRetryOnFailure()</code>; with retries on, run the whole transaction inside <code>CreateExecutionStrategy().Execute(...)</code>.",
      "<b>Client evaluation</b>: since EF Core 3.0 an untranslatable <code>Where</code> throws; only the final <code>Select</code> may call your C# methods.",
      "<b>Performance</b>: measure first — read the SQL and its execution plan before reaching for compiled queries or pooling."
    ],
    meaning: {
      hi: [
        "N+1 = list के लिए 1 query + हर row के लिए 1। Commands को LogTo / ToQueryString() से गिनो; Include या projection से ठीक करो",
        "Projection (DTO में Select) = सिर्फ़ ज़रूरी columns, COUNT/SUM SQL में, कुछ track नहीं होता",
        "Raw SQL: FromSql($\"...{x}\") x को parameter बनाकर भेजता है (सुरक्षित); जोड़ के साथ FromSqlRaw SQL injection है",
        "Transactions: एक SaveChanges() atomic है; BeginTransaction() कई steps को एक Commit() या rollback में बाँधता है",
        "Concurrency: token (ConcurrencyCheck या rowversion) UPDATE की WHERE में जाता है; 0 rows पर DbUpdateConcurrencyException",
        "Bulk: ExecuteUpdate/ExecuteDelete एक set-based statement अभी चलाते हैं, पर change tracker को पता नहीं चलता और SaveChanges का logic छूट जाता है",
        "तेज़ reads: save नहीं करना तो AsNoTracking(); स्थिर OrderBy + Skip/Take से page, गहरे pages के लिए keyset",
        "Cartesian explosion: दो collection Includes rows को गुणा करते हैं; AsSplitQuery() हर collection के लिए एक SQL भेजता है, बदले में round trips ज़्यादा।",
        "Retries: EnableRetryOnFailure(); retries चालू हों तो पूरा transaction CreateExecutionStrategy().Execute(...) के अंदर चलाओ।",
        "Client evaluation: EF Core 3.0 से translate न होने वाला Where throw करता है; सिर्फ़ final Select में आपके C# methods call हो सकते हैं।",
        "Performance: पहले measure करो — compiled queries या pooling की तरफ़ जाने से पहले SQL और उसका execution plan पढ़ो।"
      ],
      hg: [
        "N+1 = list ke liye 1 query + har row ke liye 1. Commands ko LogTo / ToQueryString() se gino; Include ya projection se theek karo",
        "Projection (DTO mein Select) = sirf zaroori columns, COUNT/SUM SQL mein, kuch track nahi hota",
        "Raw SQL: FromSql($\"...{x}\") x ko parameter banakar bhejta hai (surakshit); jod ke saath FromSqlRaw SQL injection hai",
        "Transactions: ek SaveChanges() atomic hai; BeginTransaction() kai steps ko ek Commit() ya rollback mein baandhta hai",
        "Concurrency: token (ConcurrencyCheck ya rowversion) UPDATE ki WHERE mein jaata hai; 0 rows par DbUpdateConcurrencyException",
        "Bulk: ExecuteUpdate/ExecuteDelete ek set-based statement abhi chalate hain, par change tracker ko pata nahi chalta aur SaveChanges ka logic chhoot jaata hai",
        "Tez reads: save nahi karna toh AsNoTracking(); sthir OrderBy + Skip/Take se page, gehre pages ke liye keyset",
        "Cartesian explosion: do collection Includes rows ko guna karte hain; AsSplitQuery() har collection ke liye ek SQL bhejta hai, badle mein round trips zyaada.",
        "Retries: EnableRetryOnFailure(); retries chaalu hon to poora transaction CreateExecutionStrategy().Execute(...) ke andar chalao.",
        "Client evaluation: EF Core 3.0 se translate na hone wala Where throw karta hai; sirf final Select mein aapke C# methods call ho sakte hain.",
        "Performance: pehle measure karo — compiled queries ya pooling ki taraf jaane se pehle SQL aur uska execution plan padho."
      ]
    }
  }
};
