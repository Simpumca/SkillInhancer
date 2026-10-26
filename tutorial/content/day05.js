// Day 5 — EF Core Part 1, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 5,
  format: "lesson",
  title: {
    en: "EF Core Part 1 — DbContext and its lifetime, DbSet, Code-First vs DB-First, migrations, relationships, loading, tracking",
    hi: "EF Core Part 1 — DbContext और उसकी lifetime, DbSet, Code-First बनाम DB-First, migrations, relationships, loading, tracking",
    hg: "EF Core Part 1 — DbContext aur uski lifetime, DbSet, Code-First vs DB-First, migrations, relationships, loading, tracking"
  },
  summary: {
    en: "<p>Day 5 builds the database layer of the <b>customer-care CRM</b> with EF Core in 7 short lessons. You already know the SQL; EF Core <b>writes it for you</b> from your C# classes and LINQ. Each lesson adds one idea to the same small model: a <code>Customer</code> with many <code>SupportTicket</code>s.</p><p>First DbContext, DbSet and <code>SaveChanges()</code>, then how long a context should live, then the Code-First model and migrations. After that relationships, loading related data, and the change tracker. Every lesson has a complete program that runs offline on an in-memory SQLite database, line-by-line notes, an exercise and a quiz.</p>",
    hi: "<p>Day 5 में EF Core से <b>customer-care CRM</b> की database layer 7 छोटे पाठों में बनती है। SQL तुम जानते हो; EF Core तुम्हारी C# classes और LINQ से वही SQL <b>खुद लिखता है</b>। हर पाठ उसी छोटे model में एक नई बात जोड़ता है: एक <code>Customer</code> और उसके कई <code>SupportTicket</code>।</p><p>पहले DbContext, DbSet और <code>SaveChanges()</code>, फिर context कितनी देर ज़िंदा रहे, फिर Code-First model और migrations। उसके बाद relationships, related data loading और change tracker। हर पाठ में पूरा program है जो in-memory SQLite database पर offline चलता है, लाइन-दर-लाइन समझ, एक exercise और एक quiz।</p>",
    hg: "<p>Day 5 mein EF Core se <b>customer-care CRM</b> ki database layer 7 chhote lessons mein banti hai. SQL tum jaante ho; EF Core tumhari C# classes aur LINQ se wahi SQL <b>khud likhta hai</b>. Har lesson usi chhote model mein ek nayi baat jodta hai: ek <code>Customer</code> aur uske kai <code>SupportTicket</code>.</p><p>Pehle DbContext, DbSet aur <code>SaveChanges()</code>, phir context kitni der zinda rahe, phir Code-First model aur migrations. Uske baad relationships, related data loading aur change tracker. Har lesson mein poora program hai jo in-memory SQLite database par offline chalta hai, line-by-line samajh, ek exercise aur ek quiz.</p>"
  },
  sections: [
    {
      id: "dbcontext-dbset",
      depth: "short",
      title: {
        en: "DbContext and DbSet: your first save",
        hi: "DbContext और DbSet: पहला save",
        hg: "DbContext aur DbSet: pehla save"
      },
      lesson: {
        buildsOn: {
          en: "Day 1 built <code>Customer</code> and <code>SupportTicket</code> as in-memory C# classes, and Day 4 showed that LINQ on an <code>IQueryable</code> goes to a provider that translates it. Today EF Core is that provider: it stores the classes as rows and turns your LINQ into SQL.",
          hi: "Day 1 में <code>Customer</code> और <code>SupportTicket</code> memory में रहने वाली C# classes बनीं, और Day 4 में देखा कि <code>IQueryable</code> पर लिखी LINQ एक provider के पास जाती है जो उसे translate करता है। आज EF Core वही provider है: यह classes को rows की तरह रखता है और तुम्हारी LINQ को SQL में बदलता है।",
          hg: "Day 1 mein <code>Customer</code> aur <code>SupportTicket</code> memory mein rehne wali C# classes banin, aur Day 4 mein dekha ki <code>IQueryable</code> par likhi LINQ ek provider ke paas jaati hai jo use translate karta hai. Aaj EF Core wahi provider hai: ye classes ko rows ki tarah rakhta hai aur tumhari LINQ ko SQL mein badalta hai."
        },
        what: {
          en: "<p><b>DbContext</b> is one working session with the database. <b>DbSet&lt;T&gt;</b> is one table inside it. You <code>Add</code> objects, then <code>SaveChanges()</code> sends all the changes together, in one transaction. This \"collect now, save together\" idea is the <b>unit of work</b>.</p>",
          hi: "<p><b>DbContext</b> database के साथ एक काम का session है। <b>DbSet&lt;T&gt;</b> उसके अंदर एक table है। तुम objects <code>Add</code> करते हो, फिर <code>SaveChanges()</code> सारे बदलाव एक साथ, एक transaction में भेजता है। यह \"अभी जमा करो, फिर साथ में save करो\" वाली बात <b>unit of work</b> (काम की एक इकाई) कहलाती है।</p>",
          hg: "<p><b>DbContext</b> database ke saath ek kaam ka session hai. <b>DbSet&lt;T&gt;</b> uske andar ek table hai. Tum objects <code>Add</code> karte ho, phir <code>SaveChanges()</code> saare badlaav ek saath, ek transaction mein bhejta hai. Ye \"abhi jama karo, phir saath mein save karo\" wali baat <b>unit of work</b> (kaam ki ek ikaai) kehlati hai.</p>"
        },
        why: {
          en: "<p>You already know the SQL: <code>INSERT</code>, <code>SELECT ... WHERE</code>. EF Core writes that SQL from your C# objects and LINQ, so you work with <code>Customer</code> objects, not with strings of SQL. All-or-nothing saving keeps a customer and their tickets consistent.</p>",
          hi: "<p>SQL तो तुम जानते ही हो: <code>INSERT</code>, <code>SELECT ... WHERE</code>। EF Core यही SQL तुम्हारे C# objects और LINQ से खुद लिख देता है, इसलिए तुम SQL के strings से नहीं, <code>Customer</code> objects से काम करते हो। सब-या-कुछ-नहीं वाली saving से customer और उसके tickets एक-दूसरे से मेल खाते रहते हैं।</p>",
          hg: "<p>SQL toh tum jaante hi ho: <code>INSERT</code>, <code>SELECT ... WHERE</code>. EF Core yahi SQL tumhare C# objects aur LINQ se khud likh deta hai, isliye tum SQL ke strings se nahi, <code>Customer</code> objects se kaam karte ho. Sab-ya-kuch-nahi wali saving se customer aur uske tickets ek-doosre se mel khaate rehte hain.</p>"
        },
        analogy: {
          en: "<p>A bank counter. You hand the clerk several slips (deposit, cheque, form). He keeps them on his desk and does nothing yet. When you say \"that is all\", he posts every entry together. DbContext is the clerk, <code>Add</code> puts a slip on the desk, and <code>SaveChanges()</code> is \"post it all\".</p>",
          hi: "<p>बैंक का counter। तुम clerk को कई पर्चियाँ (deposit, cheque, form) देते हो। वह उन्हें अपनी मेज़ पर रखता है, अभी कुछ नहीं करता। जब तुम कहते हो \"बस इतना ही\", तब वह सारी entries एक साथ post करता है। DbContext वह clerk है, <code>Add</code> पर्ची मेज़ पर रखना है, और <code>SaveChanges()</code> \"सब post कर दो\" है।</p>",
          hg: "<p>Bank ka counter. Tum clerk ko kai parchiyan (deposit, cheque, form) dete ho. Woh unhein apni mez par rakhta hai, abhi kuch nahi karta. Jab tum kehte ho \"bas itna hi\", tab woh saari entries ek saath post karta hai. DbContext woh clerk hai, <code>Add</code> parchi mez par rakhna hai, aur <code>SaveChanges()</code> \"sab post kar do\" hai.</p>"
        },
        lines: [
          {
            code: "using var connection = new SqliteConnection(\"Data Source=:memory:\");",
            note: {
              en: "An in-memory SQLite database that lives as long as this connection stays open. Nothing to install, so every program here runs offline. The <b>options</b> on the next line pick the provider and connection: change them to move to SQL Server.",
              hi: "Memory में रहने वाला SQLite database, जो तब तक ज़िंदा है जब तक यह connection खुला है। कुछ install नहीं करना, इसलिए यहाँ का हर program offline चलता है। अगली line के <b>options</b> provider और connection चुनते हैं: SQL Server जाना हो तो उन्हें बदलो।",
              hg: "Memory mein rehne wala SQLite database, jo tab tak zinda hai jab tak ye connection khula hai. Kuch install nahi karna, isliye yahan ka har program offline chalta hai. Agli line ke <b>options</b> provider aur connection chunte hain: SQL Server jaana ho toh unhein badlo."
            }
          },
          {
            code: "db.Database.EnsureCreated();",
            note: {
              en: "Creates the tables from the classes. This is for demos and tests only. Lesson 4 shows the real way: migrations.",
              hi: "Classes से tables बना देता है। यह सिर्फ़ demo और tests के लिए है। असली तरीका migrations है, पाठ 4 में देखेंगे।",
              hg: "Classes se tables bana deta hai. Ye sirf demo aur tests ke liye hai. Asli tareeka migrations hai, lesson 4 mein dekhenge."
            }
          },
          {
            code: "db.Customers.Add(asha);",
            note: {
              en: "<code>Add</code> only marks the object (and the tickets inside it) as \"to be inserted\". Nothing has gone to the database yet: the next line counts 0 rows.",
              hi: "<code>Add</code> सिर्फ़ object (और उसके अंदर के tickets) पर \"insert होना है\" का निशान लगाता है। अभी database तक कुछ नहीं गया: अगली line 0 rows गिनती है।",
              hg: "<code>Add</code> sirf object (aur uske andar ke tickets) par \"insert hona hai\" ka nishaan lagata hai. Abhi database tak kuch nahi gaya: agli line 0 rows ginti hai."
            }
          },
          {
            code: "db.SaveChanges()",
            note: {
              en: "Now EF sends one <code>INSERT</code> per row (1 customer + 2 tickets = 3), inside one transaction. It returns the number of rows written, and fills in the generated customer <code>Id</code>.",
              hi: "अब EF हर row के लिए एक <code>INSERT</code> भेजता है (1 customer + 2 tickets = 3), एक ही transaction में। यह लिखी गई rows की गिनती लौटाता है और generate हुआ customer <code>Id</code> भर देता है।",
              hg: "Ab EF har row ke liye ek <code>INSERT</code> bhejta hai (1 customer + 2 tickets = 3), ek hi transaction mein. Ye likhi gayi rows ki ginti lautata hai aur generate hua customer <code>Id</code> bhar deta hai."
            }
          },
          {
            code: "foreach (var t in db.Tickets.Where(t => t.Status == \"Open\").OrderBy(t => t.Id))",
            note: {
              en: "LINQ on a <code>DbSet</code> becomes SQL: <code>WHERE Status = 'Open' ORDER BY Id</code>. It runs when the <code>foreach</code> reads it. We use a new context, a new unit of work.",
              hi: "<code>DbSet</code> पर LINQ, SQL बन जाता है: <code>WHERE Status = 'Open' ORDER BY Id</code>। यह <code>foreach</code> के पढ़ने पर चलता है। हम नया context, यानी नई unit of work, इस्तेमाल करते हैं।",
              hg: "<code>DbSet</code> par LINQ, SQL ban jaata hai: <code>WHERE Status = 'Open' ORDER BY Id</code>. Ye <code>foreach</code> ke padhne par chalta hai. Hum naya context, yaani nayi unit of work, use karte hain."
            }
          },
          {
            code: "public DbSet<SupportTicket> Tickets => Set<SupportTicket>();",
            note: {
              en: "One <code>DbSet</code> property = one table. The property name (<code>Tickets</code>) becomes the table name.",
              hi: "एक <code>DbSet</code> property = एक table। Property का नाम (<code>Tickets</code>) ही table का नाम बनता है।",
              hg: "Ek <code>DbSet</code> property = ek table. Property ka naam (<code>Tickets</code>) hi table ka naam banta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Forgetting <code>SaveChanges()</code>. <code>Add</code> alone writes nothing, so the data is lost when the context ends.</li><li>Calling <code>SaveChanges()</code> after every single <code>Add</code> in a loop. Add everything first, then save once.</li></ul>",
          hi: "<ul><li><code>SaveChanges()</code> भूल जाना। सिर्फ़ <code>Add</code> कुछ नहीं लिखता, इसलिए context ख़त्म होते ही data चला जाता है।</li><li>Loop में हर <code>Add</code> के बाद <code>SaveChanges()</code> बुलाना। पहले सब Add करो, फिर एक बार save करो।</li></ul>",
          hg: "<ul><li><code>SaveChanges()</code> bhool jaana. Sirf <code>Add</code> kuch nahi likhta, isliye context khatam hote hi data chala jaata hai.</li><li>Loop mein har <code>Add</code> ke baad <code>SaveChanges()</code> bulana. Pehle sab Add karo, phir ek baar save karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a DbContext every time your code reads or writes the database: one context for one business operation (for example \"close this ticket\"). Group related changes, then save once.</p>",
          hi: "<p>जब भी तुम्हारा code database पढ़े या लिखे, DbContext इस्तेमाल करो: एक business operation (जैसे \"यह ticket बंद करो\") के लिए एक context। जुड़े हुए बदलाव इकट्ठा करो, फिर एक बार save करो।</p>",
          hg: "<p>Jab bhi tumhara code database padhe ya likhe, DbContext use karo: ek business operation (jaise \"ye ticket band karo\") ke liye ek context. Jude hue badlaav ikatthe karo, phir ek baar save karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a second customer, <b>Ravi</b>, with ticket <b>503</b> (\"Slow internet\", Open), save, and print <code>Open tickets: 2</code> (tickets 501 and 503).</p>",
            hi: "<p>दूसरा customer <b>Ravi</b> जोड़ो, ticket <b>503</b> (\"Slow internet\", Open) के साथ, save करो, और <code>Open tickets: 2</code> print करो (tickets 501 और 503)।</p>",
            hg: "<p>Doosra customer <b>Ravi</b> jodo, ticket <b>503</b> (\"Slow internet\", Open) ke saath, save karo, aur <code>Open tickets: 2</code> print karo (tickets 501 aur 503).</p>"
          },
          hint: {
            en: "<p>Copy the lines that create Asha and her ticket, change the names, and add Ravi to <code>db.Customers</code> before the single <code>SaveChanges()</code>. Count with <code>db.Tickets.Count(t =&gt; t.Status == \"Open\")</code>.</p>",
            hi: "<p>Asha और उसका ticket बनाने वाली lines copy करो, नाम बदलो, और एकमात्र <code>SaveChanges()</code> से पहले Ravi को <code>db.Customers</code> में जोड़ दो। गिनती के लिए <code>db.Tickets.Count(t =&gt; t.Status == \"Open\")</code> लगाओ।</p>",
            hg: "<p>Asha aur uska ticket banane wali lines copy karo, naam badlo, aur ekmatra <code>SaveChanges()</code> se pehle Ravi ko <code>db.Customers</code> mein jod do. Ginti ke liye <code>db.Tickets.Count(t =&gt; t.Status == \"Open\")</code> lagao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: two customers, one save",
              hi: "हल: दो customers, एक save",
              hg: "Solution: do customers, ek save"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    var asha = new Customer { Name = \"Asha\" };\n    asha.Tickets.Add(new SupportTicket { Id = 501, Issue = \"Router not working\", Status = \"Open\" });\n    db.Customers.Add(asha);\n\n    var ravi = new Customer { Name = \"Ravi\" };\n    ravi.Tickets.Add(new SupportTicket { Id = 503, Issue = \"Slow internet\", Status = \"Open\" });\n    db.Customers.Add(ravi);\n    db.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))\n{\n    Console.WriteLine($\"Open tickets: {db.Tickets.Count(t => t.Status == \"Open\")}\");\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            expected: "Open tickets: 2",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "You call <code>db.Customers.Add(asha)</code> but never call <code>SaveChanges()</code>. What happens?",
            hi: "तुम <code>db.Customers.Add(asha)</code> बुलाते हो लेकिन <code>SaveChanges()</code> कभी नहीं बुलाते। क्या होगा?",
            hg: "Tum <code>db.Customers.Add(asha)</code> bulate ho lekin <code>SaveChanges()</code> kabhi nahi bulate. Kya hoga?"
          },
          options: [
            {
              en: "EF saves it automatically when the context is disposed",
              hi: "Context dispose होने पर EF खुद save कर देता है",
              hg: "Context dispose hone par EF khud save kar deta hai"
            },
            {
              en: "Nothing is written; the customer is lost when the context ends",
              hi: "कुछ नहीं लिखा जाता; context ख़त्म होते ही customer चला जाता है",
              hg: "Kuch nahi likha jaata; context khatam hote hi customer chala jaata hai"
            },
            {
              en: "A compile error",
              hi: "Compile error आता है",
              hg: "Compile error aata hai"
            },
            {
              en: "The row is inserted but without its tickets",
              hi: "Row insert हो जाती है, पर उसके tickets के बिना",
              hg: "Row insert ho jaati hai, par uske tickets ke bina"
            }
          ],
          answer: 1,
          explain: {
            en: "<p><code>Add</code> only records the intention. Only <code>SaveChanges()</code> sends the <code>INSERT</code> statements. Disposing the context does not save anything.</p>",
            hi: "<p><code>Add</code> सिर्फ़ इरादा दर्ज करता है। <code>INSERT</code> statements सिर्फ़ <code>SaveChanges()</code> भेजता है। Context dispose करने से कुछ save नहीं होता।</p>",
            hg: "<p><code>Add</code> sirf irada darj karta hai. <code>INSERT</code> statements sirf <code>SaveChanges()</code> bhejta hai. Context dispose karne se kuch save nahi hota.</p>"
          }
        },
        recap: {
          en: "<ul><li>DbContext = one short session; <code>DbSet&lt;T&gt;</code> = one table.</li><li><code>Add</code> only collects; <code>SaveChanges()</code> writes everything in one transaction.</li><li>LINQ on a DbSet becomes SQL when you enumerate it (<code>foreach</code>, <code>ToList()</code>, <code>Count()</code>).</li></ul>",
          hi: "<ul><li>DbContext = एक छोटा session; <code>DbSet&lt;T&gt;</code> = एक table।</li><li><code>Add</code> सिर्फ़ जमा करता है; <code>SaveChanges()</code> सब कुछ एक transaction में लिखता है।</li><li>DbSet पर LINQ तब SQL बनता है जब तुम उसे चलाते हो (<code>foreach</code>, <code>ToList()</code>, <code>Count()</code>)।</li></ul>",
          hg: "<ul><li>DbContext = ek chhota session; <code>DbSet&lt;T&gt;</code> = ek table.</li><li><code>Add</code> sirf jama karta hai; <code>SaveChanges()</code> sab kuch ek transaction mein likhta hai.</li><li>DbSet par LINQ tab SQL banta hai jab tum use chalate ho (<code>foreach</code>, <code>ToList()</code>, <code>Count()</code>).</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Add, save and query customers and tickets",
            hi: "Customers और tickets add, save और query करना",
            hg: "Customers aur tickets add, save aur query karna"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();                       // demo only: creates the tables\n    var asha = new Customer { Name = \"Asha\" };\n    asha.Tickets.Add(new SupportTicket { Id = 501, Issue = \"Router not working\", Status = \"Open\" });\n    asha.Tickets.Add(new SupportTicket { Id = 502, Issue = \"Wrong bill\", Status = \"Closed\" });\n    db.Customers.Add(asha);                            // only remembered in memory so far\n    Console.WriteLine($\"Rows in table before save: {db.Tickets.Count()}\");\n    Console.WriteLine($\"SaveChanges wrote {db.SaveChanges()} rows\");   // one INSERT per row, one transaction\n}\n\nusing (var db = new CrmContext(options))               // a new unit of work\n{\n    foreach (var t in db.Tickets.Where(t => t.Status == \"Open\").OrderBy(t => t.Id))\n        Console.WriteLine($\"Open ticket {t.Id}: {t.Issue}\");\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "Rows in table before save: 0\nSaveChanges wrote 3 rows\nOpen ticket 501: Router not working",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "dbcontext-lifetime",
      depth: "short",
      title: {
        en: "DbContext lifetime: one per request",
        hi: "DbContext की lifetime: हर request के लिए एक",
        hg: "DbContext ki lifetime: har request ke liye ek"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 created <code>CrmContext</code> by hand with <code>new</code>. A real web app lets the dependency-injection container create it. The question this lesson answers: how long should one context live?",
          hi: "पाठ 1 में <code>CrmContext</code> हमने हाथ से <code>new</code> लिखकर बनाया था। असली web app में dependency-injection container इसे बनाता है। यह पाठ इस सवाल का जवाब देता है: एक context कितनी देर ज़िंदा रहे?",
          hg: "Lesson 1 mein <code>CrmContext</code> humne haath se <code>new</code> likhkar banaya tha. Asli web app mein dependency-injection container ise banata hai. Ye lesson is sawaal ka jawaab deta hai: ek context kitni der zinda rahe?"
        },
        what: {
          en: "<p><code>AddDbContext</code> registers your context as <b>Scoped</b>: one new instance for each HTTP request, shared by everything in that request, then disposed. A DbContext is <b>not thread-safe</b>, so it must never be a singleton. Where there is no request (a background job), use <code>IDbContextFactory</code> and create contexts yourself.</p>",
          hi: "<p><code>AddDbContext</code> तुम्हारे context को <b>Scoped</b> register करता है: हर HTTP request के लिए एक नया instance, जो उस request की सारी classes में साझा रहता है, और फिर dispose हो जाता है। DbContext <b>thread-safe नहीं</b> है, इसलिए इसे कभी singleton नहीं बनाना। जहाँ request नहीं है (background job), वहाँ <code>IDbContextFactory</code> से context खुद बनाओ।</p>",
          hg: "<p><code>AddDbContext</code> tumhare context ko <b>Scoped</b> register karta hai: har HTTP request ke liye ek naya instance, jo us request ki saari classes mein saajha rehta hai, aur phir dispose ho jaata hai. DbContext <b>thread-safe nahi</b> hai, isliye ise kabhi singleton nahi banana. Jahan request nahi hai (background job), wahan <code>IDbContextFactory</code> se context khud banao.</p>"
        },
        why: {
          en: "<p>A context remembers every object it loaded (lesson 7). A context that lives for the whole app would grow forever, show stale data, and break when two requests use it at once. One context per request gives each request a clean desk.</p>",
          hi: "<p>Context हर उस object को याद रखता है जो उसने load किया (पाठ 7)। पूरी app भर ज़िंदा रहने वाला context बढ़ता ही जाएगा, पुराना data दिखाएगा, और दो requests के एक साथ इस्तेमाल करने पर टूट जाएगा। हर request के लिए एक context से हर request को साफ़ मेज़ मिलती है।</p>",
          hg: "<p>Context har us object ko yaad rakhta hai jo usne load kiya (lesson 7). Poori app bhar zinda rehne wala context badhta hi jaayega, purana data dikhayega, aur do requests ke ek saath use karne par toot jaayega. Har request ke liye ek context se har request ko saaf mez milti hai.</p>"
        },
        analogy: {
          en: "<p>A government office token counter. One token is one visit. The clerk serves one token at a time, and when the visit ends he clears his desk. A scope is the visit and the DbContext is the clerk's desk for that visit. If two people shout at him together, he gets confused: that is the thread-safety problem.</p>",
          hi: "<p>सरकारी दफ़्तर का token counter। एक token = एक visit। Clerk एक समय में एक ही token सँभालता है, और visit ख़त्म होते ही मेज़ साफ़ कर देता है। Scope वह visit है और DbContext उस visit की clerk की मेज़। अगर दो लोग एक साथ उस पर चिल्लाएँ तो वह उलझ जाता है: यही thread-safety की समस्या है।</p>",
          hg: "<p>Sarkari daftar ka token counter. Ek token = ek visit. Clerk ek samay mein ek hi token sambhalta hai, aur visit khatam hote hi mez saaf kar deta hai. Scope woh visit hai aur DbContext us visit ki clerk ki mez. Agar do log ek saath us par chillayein toh woh uljh jaata hai: yahi thread-safety ki samasya hai.</p>"
        },
        focus: {
          caption: {
            en: "Never do this: two operations at the same time on one context",
            hi: "यह कभी मत करो: एक context पर एक साथ दो operations",
            hg: "Ye kabhi mat karo: ek context par ek saath do operations"
          },
          src: "// WRONG: both queries start on the same DbContext at the same time.\n// It throws: \"A second operation was started on this context instance\n// before a previous operation completed.\"\nawait Task.WhenAll(db.Customers.CountAsync(), db.Tickets.CountAsync());\n\n// RIGHT: await one call before starting the next.\nvar customers = await db.Customers.CountAsync();\nvar tickets = await db.Tickets.CountAsync();",
          check: "none"
        },
        lines: [
          {
            code: "services.AddDbContext<CrmContext>(o => o.UseSqlite(\"Data Source=:memory:\"));",
            note: {
              en: "In a web app this is one line in <code>Program.cs</code>. It registers <code>CrmContext</code> with the <b>Scoped</b> lifetime; the program prints <code>Scoped</code> to prove it.",
              hi: "Web app में यह <code>Program.cs</code> की एक line होती है। यह <code>CrmContext</code> को <b>Scoped</b> lifetime के साथ register करती है; program <code>Scoped</code> print करके यह साबित करता है।",
              hg: "Web app mein ye <code>Program.cs</code> ki ek line hoti hai. Ye <code>CrmContext</code> ko <b>Scoped</b> lifetime ke saath register karti hai; program <code>Scoped</code> print karke ye saabit karta hai."
            }
          },
          {
            code: "using var provider = services.BuildServiceProvider(validateScopes: true);",
            note: {
              en: "Builds the container. <code>validateScopes</code> catches mistakes such as a singleton using a scoped service; ASP.NET Core turns it on in Development.",
              hi: "Container बनाता है। <code>validateScopes</code> ऐसी ग़लतियाँ पकड़ता है जैसे singleton का scoped service इस्तेमाल करना; ASP.NET Core इसे Development में चालू रखता है।",
              hg: "Container banata hai. <code>validateScopes</code> aisi galtiyan pakadta hai jaise singleton ka scoped service use karna; ASP.NET Core ise Development mein chalu rakhta hai."
            }
          },
          {
            code: "using (var request1 = provider.CreateScope())",
            note: {
              en: "ASP.NET Core opens one scope for each HTTP request. Here we open one by hand to imitate a request.",
              hi: "ASP.NET Core हर HTTP request के लिए एक scope खोलता है। यहाँ हम request की नक़ल करने के लिए हाथ से एक scope खोलते हैं।",
              hg: "ASP.NET Core har HTTP request ke liye ek scope kholta hai. Yahan hum request ki nakal karne ke liye haath se ek scope kholte hain."
            }
          },
          {
            code: "Console.WriteLine($\"Same request, same DbContext: {ReferenceEquals(a, b)}\");",
            note: {
              en: "<code>True</code>: two classes in the same request receive the same context, so they share one change tracker and one <code>SaveChanges()</code>.",
              hi: "<code>True</code>: एक ही request की दो classes को वही context मिलता है, इसलिए वे एक change tracker और एक <code>SaveChanges()</code> साझा करती हैं।",
              hg: "<code>True</code>: ek hi request ki do classes ko wahi context milta hai, isliye woh ek change tracker aur ek <code>SaveChanges()</code> saajha karti hain."
            }
          },
          {
            code: "Console.WriteLine($\"Next request, same DbContext: {ReferenceEquals(firstRequest, c)}\");",
            note: {
              en: "<code>False</code>: the next request gets a fresh context. The old one was disposed when its scope ended.",
              hi: "<code>False</code>: अगली request को नया context मिलता है। पुराना, scope ख़त्म होते ही dispose हो गया था।",
              hg: "<code>False</code>: agli request ko naya context milta hai. Purana, scope khatam hote hi dispose ho gaya tha."
            }
          },
          {
            code: "var factory = provider.GetRequiredService<IDbContextFactory<JobContext>>();",
            note: {
              en: "A background job has no request scope. The factory (a singleton) hands out contexts, and you own them: each <code>CreateDbContext()</code> is a new instance, so parallel tasks can have one each. Dispose it (<code>using</code>).",
              hi: "Background job में request scope नहीं होता। Factory (एक singleton) contexts देती है, और उनकी ज़िम्मेदारी तुम्हारी होती है: हर <code>CreateDbContext()</code> नया instance है, इसलिए parallel tasks को एक-एक मिल सकता है। उसे dispose करो (<code>using</code>)।",
              hg: "Background job mein request scope nahi hota. Factory (ek singleton) contexts deti hai, aur unki zimmedaari tumhari hoti hai: har <code>CreateDbContext()</code> naya instance hai, isliye parallel tasks ko ek-ek mil sakta hai. Use dispose karo (<code>using</code>)."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Registering the context as a singleton or keeping it in a <code>static</code> field. It grows forever, shows stale data and fails under parallel requests.</li><li>Starting two operations on one context at once (<code>Task.WhenAll</code>). Await each call, or use one context per task from the factory.</li></ul>",
          hi: "<ul><li>Context को singleton register करना या <code>static</code> field में रखना। यह बढ़ता ही जाता है, पुराना data दिखाता है और parallel requests में फ़ेल होता है।</li><li>एक context पर एक साथ दो operations शुरू करना (<code>Task.WhenAll</code>)। हर call को await करो, या factory से हर task के लिए अलग context लो।</li></ul>",
          hg: "<ul><li>Context ko singleton register karna ya <code>static</code> field mein rakhna. Ye badhta hi jaata hai, purana data dikhata hai aur parallel requests mein fail hota hai.</li><li>Ek context par ek saath do operations shuru karna (<code>Task.WhenAll</code>). Har call ko await karo, ya factory se har task ke liye alag context lo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Plain <code>AddDbContext</code> for normal web APIs. <code>IDbContextFactory</code> for background services, Blazor Server and parallel work. Pooling (<code>AddDbContextPool</code>) only after a load test shows context creation is a cost; see Deep Dive.</p>",
          hi: "<p>सामान्य web APIs के लिए सादा <code>AddDbContext</code>। Background services, Blazor Server और parallel काम के लिए <code>IDbContextFactory</code>। Pooling (<code>AddDbContextPool</code>) तभी जब load test दिखाए कि context बनाना महँगा है; Deep Dive देखो।</p>",
          hg: "<p>Saamanya web APIs ke liye saada <code>AddDbContext</code>. Background services, Blazor Server aur parallel kaam ke liye <code>IDbContextFactory</code>. Pooling (<code>AddDbContextPool</code>) tabhi jab load test dikhaye ki context banana mehnga hai; Deep Dive dekho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Open three scopes in a loop (three \"requests\"), resolve <code>CrmContext</code> in each, and print <code>Distinct DbContext objects for 3 requests: 3</code>.</p>",
            hi: "<p>Loop में तीन scopes खोलो (तीन \"requests\"), हर एक में <code>CrmContext</code> resolve करो, और <code>Distinct DbContext objects for 3 requests: 3</code> print करो।</p>",
            hg: "<p>Loop mein teen scopes kholo (teen \"requests\"), har ek mein <code>CrmContext</code> resolve karo, aur <code>Distinct DbContext objects for 3 requests: 3</code> print karo.</p>"
          },
          hint: {
            en: "<p>Keep a <code>List&lt;CrmContext&gt;</code> outside the loop. Inside it, create a scope, resolve the context, and add it to the list only if no item in the list is the same object (<code>ReferenceEquals</code>).</p>",
            hi: "<p>Loop के बाहर एक <code>List&lt;CrmContext&gt;</code> रखो। अंदर scope बनाओ, context resolve करो, और list में तभी जोड़ो जब list में कोई उसी object जैसा न हो (<code>ReferenceEquals</code>)।</p>",
            hg: "<p>Loop ke bahar ek <code>List&lt;CrmContext&gt;</code> rakho. Andar scope banao, context resolve karo, aur list mein tabhi jodo jab list mein koi usi object jaisa na ho (<code>ReferenceEquals</code>).</p>"
          },
          solution: {
            caption: {
              en: "Solution: three requests, three contexts",
              hi: "हल: तीन requests, तीन contexts",
              hg: "Solution: teen requests, teen contexts"
            },
            src: "using Microsoft.EntityFrameworkCore;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddDbContext<CrmContext>(o => o.UseSqlite(\"Data Source=:memory:\"));\nusing var provider = services.BuildServiceProvider();\n\nvar seen = new List<CrmContext>();\nfor (int i = 0; i < 3; i++)\n{\n    using var request = provider.CreateScope();        // one scope = one HTTP request\n    var db = request.ServiceProvider.GetRequiredService<CrmContext>();\n    if (!seen.Any(s => ReferenceEquals(s, db))) seen.Add(db);\n}\nConsole.WriteLine($\"Distinct DbContext objects for 3 requests: {seen.Count}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}",
            check: "run",
            expected: "Distinct DbContext objects for 3 requests: 3",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "A <code>BackgroundService</code> (a singleton) must read open tickets every minute. What should it use to get a DbContext?",
            hi: "एक <code>BackgroundService</code> (singleton) को हर मिनट open tickets पढ़ने हैं। DbContext पाने के लिए उसे क्या इस्तेमाल करना चाहिए?",
            hg: "Ek <code>BackgroundService</code> (singleton) ko har minute open tickets padhne hain. DbContext paane ke liye use kya use karna chahiye?"
          },
          options: [
            {
              en: "Inject <code>CrmContext</code> directly in its constructor",
              hi: "अपने constructor में सीधे <code>CrmContext</code> inject करे",
              hg: "Apne constructor mein seedhe <code>CrmContext</code> inject kare"
            },
            {
              en: "Keep one <code>static CrmContext</code> field",
              hi: "एक <code>static CrmContext</code> field रखे",
              hg: "Ek <code>static CrmContext</code> field rakhe"
            },
            {
              en: "Register <code>CrmContext</code> as a singleton",
              hi: "<code>CrmContext</code> को singleton register करे",
              hg: "<code>CrmContext</code> ko singleton register kare"
            },
            {
              en: "Inject <code>IDbContextFactory&lt;CrmContext&gt;</code> and create a short-lived context for each run",
              hi: "<code>IDbContextFactory&lt;CrmContext&gt;</code> inject करे और हर बार के लिए एक छोटी उम्र का context बनाए",
              hg: "<code>IDbContextFactory&lt;CrmContext&gt;</code> inject kare aur har baar ke liye ek chhoti umr ka context banaye"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>A singleton lives for the whole app, but a context must be short-lived. The factory lets the service create a fresh context for each unit of work and dispose it. (Creating a scope with <code>IServiceScopeFactory</code> also works.)</p>",
            hi: "<p>Singleton पूरी app भर जीता है, पर context छोटी उम्र का होना चाहिए। Factory से service हर unit of work के लिए नया context बनाकर dispose कर सकती है। (<code>IServiceScopeFactory</code> से scope बनाना भी चलता है।)</p>",
            hg: "<p>Singleton poori app bhar jeeta hai, par context chhoti umr ka hona chahiye. Factory se service har unit of work ke liye naya context banakar dispose kar sakti hai. (<code>IServiceScopeFactory</code> se scope banana bhi chalta hai.)</p>"
          }
        },
        recap: {
          en: "<ul><li><code>AddDbContext</code> = Scoped: one context per HTTP request, shared inside it.</li><li>Not thread-safe: never a singleton, never two operations at once.</li><li>No request scope (background job, Blazor Server, parallel work): use <code>IDbContextFactory</code>.</li></ul>",
          hi: "<ul><li><code>AddDbContext</code> = Scoped: हर HTTP request के लिए एक context, उसके अंदर साझा।</li><li>Thread-safe नहीं: कभी singleton नहीं, कभी एक साथ दो operations नहीं।</li><li>Request scope नहीं (background job, Blazor Server, parallel काम): <code>IDbContextFactory</code> इस्तेमाल करो।</li></ul>",
          hg: "<ul><li><code>AddDbContext</code> = Scoped: har HTTP request ke liye ek context, uske andar saajha.</li><li>Thread-safe nahi: kabhi singleton nahi, kabhi ek saath do operations nahi.</li><li>Request scope nahi (background job, Blazor Server, parallel kaam): <code>IDbContextFactory</code> use karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Scoped contexts per request, factory for jobs",
            hi: "हर request के लिए Scoped context, jobs के लिए factory",
            hg: "Har request ke liye Scoped context, jobs ke liye factory"
          },
          src: "using Microsoft.EntityFrameworkCore;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddDbContext<CrmContext>(o => o.UseSqlite(\"Data Source=:memory:\"));\nservices.AddDbContextFactory<JobContext>(o => o.UseSqlite(\"Data Source=:memory:\"));\nvar registration = services.First(d => d.ServiceType == typeof(CrmContext));\nConsole.WriteLine($\"AddDbContext lifetime: {registration.Lifetime}\");\n\nusing var provider = services.BuildServiceProvider(validateScopes: true);\n\nCrmContext firstRequest;\nusing (var request1 = provider.CreateScope())          // ASP.NET Core makes one scope per HTTP request\n{\n    var a = request1.ServiceProvider.GetRequiredService<CrmContext>();\n    var b = request1.ServiceProvider.GetRequiredService<CrmContext>();\n    Console.WriteLine($\"Same request, same DbContext: {ReferenceEquals(a, b)}\");\n    firstRequest = a;\n}                                                      // scope ends: DbContext is disposed\n\nusing (var request2 = provider.CreateScope())\n{\n    var c = request2.ServiceProvider.GetRequiredService<CrmContext>();\n    Console.WriteLine($\"Next request, same DbContext: {ReferenceEquals(firstRequest, c)}\");\n}\n\nvar factory = provider.GetRequiredService<IDbContextFactory<JobContext>>();\nusing var job1 = factory.CreateDbContext();\nusing var job2 = factory.CreateDbContext();\nConsole.WriteLine($\"Factory gives a new DbContext each time: {!ReferenceEquals(job1, job2)}\");\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options) { }\n\npublic class JobContext(DbContextOptions<JobContext> options) : DbContext(options) { }",
          check: "run",
          expected: "AddDbContext lifetime: Scoped\nSame request, same DbContext: True\nNext request, same DbContext: False\nFactory gives a new DbContext each time: True",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "code-first-model",
      depth: "short",
      title: {
        en: "Code-First model: conventions and Fluent API",
        hi: "Code-First model: conventions और Fluent API",
        hg: "Code-First model: conventions aur Fluent API"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1 and 2 let EF Core create the tables with its defaults. Now you control them: what EF decides by itself (conventions) and what you tell it (Fluent API), with the exact SQL it will create.",
          hi: "पाठ 1 और 2 में tables EF Core ने अपने defaults से बनाए थे। अब तुम उन्हें control करते हो: EF खुद क्या तय करता है (conventions) और तुम उसे क्या बताते हो (Fluent API), और वह कौन-सा SQL बनाएगा।",
          hg: "Lesson 1 aur 2 mein tables EF Core ne apne defaults se banaye the. Ab tum unhein control karte ho: EF khud kya tay karta hai (conventions) aur tum use kya batate ho (Fluent API), aur woh kaunsa SQL banayega."
        },
        what: {
          en: "<p><b>Code-First</b> means your C# classes are the source of truth for the schema. EF Core follows <b>conventions</b> (<code>Id</code> is the primary key, <code>string?</code> is nullable) and you add the rest with the <b>Fluent API</b> in <code>OnModelCreating</code>: lengths, required, indexes.</p>",
          hi: "<p><b>Code-First</b> का मतलब है कि schema का सच तुम्हारी C# classes हैं। EF Core <b>conventions</b> मानता है (<code>Id</code> primary key है, <code>string?</code> nullable है) और बाक़ी तुम <code>OnModelCreating</code> में <b>Fluent API</b> से जोड़ते हो: लंबाई, required, indexes।</p>",
          hg: "<p><b>Code-First</b> ka matlab hai ki schema ka sach tumhari C# classes hain. EF Core <b>conventions</b> maanta hai (<code>Id</code> primary key hai, <code>string?</code> nullable hai) aur baaki tum <code>OnModelCreating</code> mein <b>Fluent API</b> se jodte ho: lambai, required, indexes.</p>"
        },
        why: {
          en: "<p>Defaults are fine for a demo but not for production: every <code>string</code> becomes <code>nvarchar(max)</code>, which cannot be an index key. You review the generated SQL the same way you would review a hand-written <code>CREATE TABLE</code>.</p>",
          hi: "<p>Defaults demo के लिए ठीक हैं, production के लिए नहीं: हर <code>string</code> <code>nvarchar(max)</code> बन जाता है, जो index key नहीं बन सकता। तुम generate हुए SQL को वैसे ही review करते हो जैसे हाथ से लिखे <code>CREATE TABLE</code> को।</p>",
          hg: "<p>Defaults demo ke liye theek hain, production ke liye nahi: har <code>string</code> <code>nvarchar(max)</code> ban jaata hai, jo index key nahi ban sakta. Tum generate hue SQL ko waise hi review karte ho jaise haath se likhe <code>CREATE TABLE</code> ko.</p>"
        },
        analogy: {
          en: "<p>A tailor's measurement card. Your classes are the card. Where you wrote nothing (collar style), the tailor uses his standard style: the conventions. The Fluent API is the extra note \"make the collar 2 cm narrower\".</p>",
          hi: "<p>दर्ज़ी का नाप-पर्चा। तुम्हारी classes वह पर्चा हैं। जहाँ तुमने कुछ नहीं लिखा (कॉलर का स्टाइल), वहाँ दर्ज़ी अपना standard स्टाइल लगाता है: यही conventions हैं। Fluent API वह अलग से लिखा नोट है \"कॉलर 2 सेमी तंग रखना\"।</p>",
          hg: "<p>Darzi ka naap-parcha. Tumhari classes woh parcha hain. Jahan tumne kuch nahi likha (collar ka style), wahan darzi apna standard style lagata hai: yahi conventions hain. Fluent API woh alag se likha note hai \"collar 2 cm tang rakhna\".</p>"
        },
        lines: [
          {
            code: "public int Id { get; set; }",
            note: {
              en: "A property named <code>Id</code> (or <code>&lt;Type&gt;Id</code>) is the <b>primary key</b>. An <code>int</code> key becomes <code>IDENTITY</code> on SQL Server.",
              hi: "<code>Id</code> (या <code>&lt;Type&gt;Id</code>) नाम की property <b>primary key</b> होती है। <code>int</code> key SQL Server पर <code>IDENTITY</code> बन जाती है।",
              hg: "<code>Id</code> (ya <code>&lt;Type&gt;Id</code>) naam ki property <b>primary key</b> hoti hai. <code>int</code> key SQL Server par <code>IDENTITY</code> ban jaati hai."
            }
          },
          {
            code: "public string? City { get; set; }",
            note: {
              en: "Nullability follows C# nullable reference types: <code>string?</code> gives <code>NULL</code>, plain <code>string</code> gives <code>NOT NULL</code>. Look at the output: <code>City</code> is still <code>nvarchar(max)</code> because we gave it no length.",
              hi: "Nullability C# के nullable reference types से चलती है: <code>string?</code> से <code>NULL</code>, सादे <code>string</code> से <code>NOT NULL</code>। Output देखो: <code>City</code> अब भी <code>nvarchar(max)</code> है क्योंकि हमने उसे लंबाई नहीं दी।",
              hg: "Nullability C# ke nullable reference types se chalti hai: <code>string?</code> se <code>NULL</code>, saade <code>string</code> se <code>NOT NULL</code>. Output dekho: <code>City</code> ab bhi <code>nvarchar(max)</code> hai kyunki humne use lambai nahi di."
            }
          },
          {
            code: "public int CustomerId { get; set; }",
            note: {
              en: "A <code>CustomerId</code> next to a <code>Customer</code> navigation is the <b>foreign key</b>, found by convention. EF also adds an index on it and <code>ON DELETE CASCADE</code>.",
              hi: "<code>Customer</code> navigation के पास का <code>CustomerId</code> <b>foreign key</b> है, convention से मिल जाता है। EF उस पर index और <code>ON DELETE CASCADE</code> भी जोड़ देता है।",
              hg: "<code>Customer</code> navigation ke paas ka <code>CustomerId</code> <b>foreign key</b> hai, convention se mil jaata hai. EF us par index aur <code>ON DELETE CASCADE</code> bhi jod deta hai."
            }
          },
          {
            code: "Console.WriteLine(db.Database.GenerateCreateScript());",
            note: {
              en: "Prints the <code>CREATE TABLE</code> script for the whole model without connecting (the connection string is a dummy). A review tool; migrations (lesson 4) are the real way to apply it.",
              hi: "पूरे model का <code>CREATE TABLE</code> script print करता है। ऊपर की connection string नक़ली है: कुछ connect नहीं होता, EF सिर्फ़ SQL Server का text बनाता है। यह review का तरीका है; लागू करने का असली तरीका migrations है (पाठ 4)।",
              hg: "Poore model ka <code>CREATE TABLE</code> script print karta hai. Upar ki connection string nakli hai: kuch connect nahi hota, EF sirf SQL Server ka text banata hai. Ye review ka tareeka hai; laagu karne ka asli tareeka migrations hai (lesson 4)."
            }
          },
          {
            code: "t.Property(x => x.Issue).HasMaxLength(200).IsRequired();",
            note: {
              en: "The <b>Fluent API</b>: <code>HasMaxLength(200)</code> turns <code>nvarchar(max)</code> into <code>nvarchar(200)</code>, and <code>IsRequired()</code> makes the rule visible (<code>NOT NULL</code>). The line for <code>Name</code> above does the same with 100. This is the part a DBA cares about.",
              hi: "<b>Fluent API</b>: <code>HasMaxLength(200)</code> <code>nvarchar(max)</code> को <code>nvarchar(200)</code> बनाता है, और <code>IsRequired()</code> नियम को दिखाई देने वाला बनाता है (<code>NOT NULL</code>)। ऊपर <code>Name</code> वाली line यही 100 के साथ करती है। DBA को यही हिस्सा चाहिए।",
              hg: "<b>Fluent API</b>: <code>HasMaxLength(200)</code> <code>nvarchar(max)</code> ko <code>nvarchar(200)</code> banata hai, aur <code>IsRequired()</code> niyam ko dikhai dene wala banata hai (<code>NOT NULL</code>). Upar <code>Name</code> wali line yahi 100 ke saath karti hai. DBA ko yahi hissa chahiye."
            }
          },
          {
            code: "t.HasIndex(x => x.Status);",
            note: {
              en: "Adds <code>CREATE INDEX IX_Tickets_Status</code>, because agents filter tickets by status all day.",
              hi: "<code>CREATE INDEX IX_Tickets_Status</code> जोड़ता है, क्योंकि agents दिन भर status से tickets filter करते हैं।",
              hg: "<code>CREATE INDEX IX_Tickets_Status</code> jodta hai, kyunki agents din bhar status se tickets filter karte hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Leaving every string at <code>nvarchar(max)</code>. Set lengths on purpose; a max column cannot be an index key.</li><li>Naming the foreign key wrongly (<code>CustId</code> with a <code>Customer</code> navigation). EF then creates its own hidden <code>CustomerId</code> column and <code>CustId</code> is just another column.</li></ul>",
          hi: "<ul><li>हर string को <code>nvarchar(max)</code> पर छोड़ देना। लंबाई सोच-समझकर दो; max column index key नहीं बन सकता।</li><li>Foreign key का नाम ग़लत रखना (<code>Customer</code> navigation के साथ <code>CustId</code>)। तब EF अपना छिपा <code>CustomerId</code> column बना लेता है और <code>CustId</code> बस एक आम column रह जाता है।</li></ul>",
          hg: "<ul><li>Har string ko <code>nvarchar(max)</code> par chhod dena. Lambai soch-samajhkar do; max column index key nahi ban sakta.</li><li>Foreign key ka naam galat rakhna (<code>Customer</code> navigation ke saath <code>CustId</code>). Tab EF apna chhipa <code>CustomerId</code> column bana leta hai aur <code>CustId</code> bas ek aam column reh jaata hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Rely on conventions for the obvious parts (keys, nullability, foreign keys). Use the Fluent API for everything a DBA would ask about: lengths, precision, indexes, unique constraints, delete rules. For big models, one configuration class per entity (Deep Dive).</p>",
          hi: "<p>साफ़ बातों (keys, nullability, foreign keys) के लिए conventions पर भरोसा करो। जो भी DBA पूछेगा उसके लिए Fluent API: लंबाई, precision, indexes, unique constraints, delete rules। बड़े models में हर entity के लिए एक configuration class (Deep Dive)।</p>",
          hg: "<p>Saaf baaton (keys, nullability, foreign keys) ke liye conventions par bharosa karo. Jo bhi DBA poochhega uske liye Fluent API: lambai, precision, indexes, unique constraints, delete rules. Bade models mein har entity ke liye ek configuration class (Deep Dive).</p>"
        },
        exercise: {
          task: {
            en: "<p>Give <code>Customer.City</code> a maximum length of 50 and print only the script line that mentions <code>[City]</code>. It must read <code>[City] nvarchar(50) NULL,</code>.</p>",
            hi: "<p><code>Customer.City</code> को अधिकतम लंबाई 50 दो और script की सिर्फ़ वह line print करो जिसमें <code>[City]</code> है। वह <code>[City] nvarchar(50) NULL,</code> होनी चाहिए।</p>",
            hg: "<p><code>Customer.City</code> ko adhiktam lambai 50 do aur script ki sirf woh line print karo jisme <code>[City]</code> hai. Woh <code>[City] nvarchar(50) NULL,</code> honi chahiye.</p>"
          },
          hint: {
            en: "<p>Add <code>modelBuilder.Entity&lt;Customer&gt;().Property(c =&gt; c.City).HasMaxLength(50);</code> in <code>OnModelCreating</code>. Split the script with <code>Split('\\n')</code> and filter lines containing <code>\"[City]\"</code>.</p>",
            hi: "<p><code>OnModelCreating</code> में <code>modelBuilder.Entity&lt;Customer&gt;().Property(c =&gt; c.City).HasMaxLength(50);</code> जोड़ो। Script को <code>Split('\\n')</code> से तोड़ो और <code>\"[City]\"</code> वाली line छाँटो।</p>",
            hg: "<p><code>OnModelCreating</code> mein <code>modelBuilder.Entity&lt;Customer&gt;().Property(c =&gt; c.City).HasMaxLength(50);</code> jodo. Script ko <code>Split('\\n')</code> se todo aur <code>\"[City]\"</code> wali line chhanto.</p>"
          },
          solution: {
            caption: {
              en: "Solution: City gets a length",
              hi: "हल: City को लंबाई मिली",
              hg: "Solution: City ko lambai mili"
            },
            src: "using Microsoft.EntityFrameworkCore;\n\nvar options = new DbContextOptionsBuilder<CrmContext>()\n    .UseSqlServer(\"Server=.;Database=Crm;Trusted_Connection=True;\")\n    .Options;\nusing var db = new CrmContext(options);\n\nforeach (var line in db.Database.GenerateCreateScript().Split('\\n'))\n    if (line.Contains(\"[City]\")) Console.WriteLine(line.Trim());\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public string? City { get; set; }\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n    {\n        modelBuilder.Entity<Customer>().Property(c => c.Name).HasMaxLength(100);\n        modelBuilder.Entity<Customer>().Property(c => c.City).HasMaxLength(50);\n    }\n}",
            check: "run",
            expected: "[City] nvarchar(50) NULL,",
            packages: [
              "Microsoft.EntityFrameworkCore.SqlServer"
            ]
          }
        },
        quiz: {
          q: {
            en: "In a Code-First model, a property <code>public string? City { get; set; }</code> has no Fluent API configuration. Which column does EF create on SQL Server?",
            hi: "Code-First model में <code>public string? City { get; set; }</code> property पर कोई Fluent API configuration नहीं है। SQL Server पर EF कौन-सा column बनाता है?",
            hg: "Code-First model mein <code>public string? City { get; set; }</code> property par koi Fluent API configuration nahi hai. SQL Server par EF kaunsa column banata hai?"
          },
          options: [
            {
              en: "<code>nvarchar(max) NULL</code>",
              hi: "<code>nvarchar(max) NULL</code> बनता है",
              hg: "<code>nvarchar(max) NULL</code> banta hai"
            },
            {
              en: "<code>nvarchar(50) NOT NULL</code>",
              hi: "<code>nvarchar(50) NOT NULL</code> बनता है",
              hg: "<code>nvarchar(50) NOT NULL</code> banta hai"
            },
            {
              en: "<code>varchar(255) NULL</code>",
              hi: "<code>varchar(255) NULL</code> बनता है",
              hg: "<code>varchar(255) NULL</code> banta hai"
            },
            {
              en: "<code>nvarchar(max) NOT NULL</code>",
              hi: "<code>nvarchar(max) NOT NULL</code> बनता है",
              hg: "<code>nvarchar(max) NOT NULL</code> banta hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p><code>string?</code> means nullable, so <code>NULL</code>. With no length configured, a <code>string</code> maps to <code>nvarchar(max)</code> on SQL Server.</p>",
            hi: "<p><code>string?</code> का मतलब nullable, यानी <code>NULL</code>। लंबाई configure न हो तो <code>string</code>, SQL Server पर <code>nvarchar(max)</code> बनता है।</p>",
            hg: "<p><code>string?</code> ka matlab nullable, yaani <code>NULL</code>. Lambai configure na ho toh <code>string</code>, SQL Server par <code>nvarchar(max)</code> banta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Code-First: the C# classes are the truth; conventions give sensible defaults.</li><li>Fluent API (<code>OnModelCreating</code>) sets lengths, required, indexes and relationships.</li><li>Review <code>GenerateCreateScript()</code> output like hand-written DDL.</li></ul>",
          hi: "<ul><li>Code-First: सच C# classes हैं; conventions समझदार defaults देते हैं।</li><li>Fluent API (<code>OnModelCreating</code>) लंबाई, required, indexes और relationships तय करती है।</li><li><code>GenerateCreateScript()</code> के output को हाथ से लिखे DDL की तरह review करो।</li></ul>",
          hg: "<ul><li>Code-First: sach C# classes hain; conventions samajhdaar defaults dete hain.</li><li>Fluent API (<code>OnModelCreating</code>) lambai, required, indexes aur relationships tay karti hai.</li><li><code>GenerateCreateScript()</code> ke output ko haath se likhe DDL ki tarah review karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Conventions plus Fluent API, and the SQL they produce",
            hi: "Conventions और Fluent API, और उनसे बना SQL",
            hg: "Conventions aur Fluent API, aur unse bana SQL"
          },
          src: "using Microsoft.EntityFrameworkCore;\n\n// Dummy connection string: nothing connects, EF only builds the SQL text.\nvar options = new DbContextOptionsBuilder<CrmContext>()\n    .UseSqlServer(\"Server=.;Database=Crm;Trusted_Connection=True;\")\n    .Options;\nusing var db = new CrmContext(options);\nConsole.WriteLine(db.Database.GenerateCreateScript());\n\npublic class Customer\n{\n    public int Id { get; set; }                          // \"Id\" -> primary key, IDENTITY\n    public string Name { get; set; } = \"\";               // string -> NOT NULL\n    public string? City { get; set; }                    // string? -> NULL\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int CustomerId { get; set; }                  // FK by convention\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n    {\n        modelBuilder.Entity<Customer>().Property(c => c.Name).HasMaxLength(100);\n        modelBuilder.Entity<SupportTicket>(t =>\n        {\n            t.Property(x => x.Issue).HasMaxLength(200).IsRequired();\n            t.Property(x => x.Status).HasMaxLength(20);\n            t.HasIndex(x => x.Status);\n        });\n    }\n}",
          check: "run",
          expected: "CREATE TABLE [Customers] (\n    [Id] int NOT NULL IDENTITY,\n    [Name] nvarchar(100) NOT NULL,\n    [City] nvarchar(max) NULL,\n    CONSTRAINT [PK_Customers] PRIMARY KEY ([Id])\n);\nGO\n\n\nCREATE TABLE [Tickets] (\n    [Id] int NOT NULL IDENTITY,\n    [Issue] nvarchar(200) NOT NULL,\n    [Status] nvarchar(20) NOT NULL,\n    [CustomerId] int NOT NULL,\n    CONSTRAINT [PK_Tickets] PRIMARY KEY ([Id]),\n    CONSTRAINT [FK_Tickets_Customers_CustomerId] FOREIGN KEY ([CustomerId]) REFERENCES [Customers] ([Id]) ON DELETE CASCADE\n);\nGO\n\n\nCREATE INDEX [IX_Tickets_CustomerId] ON [Tickets] ([CustomerId]);\nGO\n\n\nCREATE INDEX [IX_Tickets_Status] ON [Tickets] ([Status]);\nGO",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ]
        }
      ]
    },
    {
      id: "migrations",
      depth: "short",
      title: {
        en: "Migrations: version control for the schema",
        hi: "Migrations: schema का version control",
        hg: "Migrations: schema ka version control"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 showed the SQL EF would create. But the CRM will change: tomorrow tickets need a <code>Priority</code>. Migrations apply such changes step by step, without losing the data already in the tables.",
          hi: "पाठ 3 में दिखा कि EF कौन-सा SQL बनाएगा। लेकिन CRM बदलता रहेगा: कल tickets को <code>Priority</code> चाहिए होगी। Migrations ऐसे बदलाव कदम-दर-कदम लागू करते हैं, tables में पहले से मौजूद data खोए बिना।",
          hg: "Lesson 3 mein dikha ki EF kaunsa SQL banayega. Lekin CRM badalta rahega: kal tickets ko <code>Priority</code> chahiye hogi. Migrations aise badlaav kadam-dar-kadam laagu karte hain, tables mein pehle se maujood data khoye bina."
        },
        what: {
          en: "<p>A <b>migration</b> is a C# class with <code>Up()</code> (apply the change) and <code>Down()</code> (undo it). EF writes it by comparing your model with the last <b>model snapshot</b>. Applied migrations are recorded in the <code>__EFMigrationsHistory</code> table, so EF knows what is still pending.</p>",
          hi: "<p><b>Migration</b> एक C# class है जिसमें <code>Up()</code> (बदलाव लागू करो) और <code>Down()</code> (वापस लो) होते हैं। EF इसे तुम्हारे model की तुलना पिछले <b>model snapshot</b> से करके लिखता है। लागू हुए migrations <code>__EFMigrationsHistory</code> table में दर्ज होते हैं, ताकि EF को पता रहे कि क्या बाक़ी है।</p>",
          hg: "<p><b>Migration</b> ek C# class hai jisme <code>Up()</code> (badlaav laagu karo) aur <code>Down()</code> (wapas lo) hote hain. EF ise tumhare model ki tulna pichhle <b>model snapshot</b> se karke likhta hai. Laagu hue migrations <code>__EFMigrationsHistory</code> table mein darj hote hain, taaki EF ko pata rahe ki kya baaki hai.</p>"
        },
        why: {
          en: "<p>Dropping and re-creating the database is fine on your laptop, never in production. Migrations give the whole team the same numbered, reviewable steps, and every environment ends up with the same schema.</p>",
          hi: "<p>Database को drop करके दोबारा बनाना तुम्हारे laptop पर ठीक है, production में कभी नहीं। Migrations पूरी team को वही क्रमांक वाले, review होने लायक़ कदम देते हैं, और हर environment का schema एक जैसा हो जाता है।</p>",
          hg: "<p>Database ko drop karke dobara banana tumhare laptop par theek hai, production mein kabhi nahi. Migrations poori team ko wahi kramank wale, review hone layak kadam dete hain, aur har environment ka schema ek jaisa ho jaata hai.</p>"
        },
        analogy: {
          en: "<p>A GST invoice and its credit note. Every sale gets a numbered invoice and every invoice can be reversed by a credit note. The register shows which invoices are already filed. <code>Up()</code> is the invoice, <code>Down()</code> is the credit note, and <code>__EFMigrationsHistory</code> is the filed register.</p>",
          hi: "<p>GST invoice और उसका credit note। हर बिक्री का एक क्रमांक वाला invoice होता है और हर invoice को credit note से पलटा जा सकता है। Register बताता है कि कौन-से invoices पहले ही file हो चुके हैं। <code>Up()</code> invoice है, <code>Down()</code> credit note है, और <code>__EFMigrationsHistory</code> file किया हुआ register है।</p>",
          hg: "<p>GST invoice aur uska credit note. Har bikri ka ek kramank wala invoice hota hai aur har invoice ko credit note se palta ja sakta hai. Register batata hai ki kaunse invoices pehle hi file ho chuke hain. <code>Up()</code> invoice hai, <code>Down()</code> credit note hai, aur <code>__EFMigrationsHistory</code> file kiya hua register hai.</p>"
        },
        focus: {
          caption: {
            en: "The everyday workflow (terminal commands)",
            hi: "रोज़ का workflow (terminal commands)",
            hg: "Roz ka workflow (terminal commands)"
          },
          lang: "bash",
          src: "# one-time setup\ndotnet tool install --global dotnet-ef\ndotnet add package Microsoft.EntityFrameworkCore.Design\n\n# 1. change your classes, then create a migration (does NOT touch the database)\ndotnet ef migrations add AddTicketStatus\n\n# 2. apply it to your local database\ndotnet ef database update",
          check: "none"
        },
        lines: [
          {
            code: "db.Database.Migrate();",
            note: {
              en: "Runs every pending <code>Up()</code> in order and records each one. Before it, both of our migrations are \"pending\": found by EF but not yet in the history table. Fine for development; for production see Deep Dive.",
              hi: "हर pending <code>Up()</code> को क्रम से चलाता है और हर एक को दर्ज करता है। इससे पहले हमारे दोनों migrations \"pending\" हैं: EF को मिले पर history table में अभी नहीं। Development के लिए ठीक; production के लिए Deep Dive देखो।",
              hg: "Har pending <code>Up()</code> ko kram se chalata hai aur har ek ko darj karta hai. Isse pehle hamare dono migrations \"pending\" hain: EF ko mile par history table mein abhi nahi. Development ke liye theek; production ke liye Deep Dive dekho."
            }
          },
          {
            code: "SELECT MigrationId AS Value FROM __EFMigrationsHistory",
            note: {
              en: "The history table: one row per applied migration. This is how EF knows which migrations to skip next time.",
              hi: "History table: हर लागू हुए migration की एक row। इसी से EF को पता चलता है कि अगली बार कौन-से migrations छोड़ने हैं।",
              hg: "History table: har laagu hue migration ki ek row. Isi se EF ko pata chalta hai ki agli baar kaunse migrations chhodne hain."
            }
          },
          {
            code: "[DbContext(typeof(CrmContext)), Migration(\"20261001_CreateTickets\")]",
            note: {
              en: "The id is \"timestamp_name\"; EF applies migrations in that order. Normally <code>dotnet ef migrations add</code> writes this class (plus a Designer file and the snapshot) for you.",
              hi: "Id \"timestamp_name\" होता है; EF इसी क्रम में migrations लागू करता है। आम तौर पर <code>dotnet ef migrations add</code> यह class (और Designer file तथा snapshot) खुद लिखता है।",
              hg: "Id \"timestamp_name\" hota hai; EF isi kram mein migrations laagu karta hai. Aam taur par <code>dotnet ef migrations add</code> ye class (aur Designer file tatha snapshot) khud likhta hai."
            }
          },
          {
            code: "protected override void Down(MigrationBuilder m) => m.DropTable(name: \"Tickets\");",
            note: {
              en: "<code>Down()</code> is the exact opposite, used to roll back with <code>dotnet ef database update &lt;OlderMigration&gt;</code>.",
              hi: "<code>Down()</code> ठीक उल्टा है, जो <code>dotnet ef database update &lt;OlderMigration&gt;</code> से rollback में काम आता है।",
              hg: "<code>Down()</code> theek ulta hai, jo <code>dotnet ef database update &lt;OlderMigration&gt;</code> se rollback mein kaam aata hai."
            }
          },
          {
            code: "public class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options) { }",
            note: {
              en: "The context is empty on purpose: <code>Migrate()</code> needs only the migration classes. A real context has its DbSets, and the snapshot describes them.",
              hi: "Context जान-बूझकर ख़ाली है: <code>Migrate()</code> को सिर्फ़ migration classes चाहिए। असली context में DbSets होते हैं, और snapshot उनका ब्योरा रखता है।",
              hg: "Context jaan-boojhkar khaali hai: <code>Migrate()</code> ko sirf migration classes chahiye. Asli context mein DbSets hote hain, aur snapshot unka byora rakhta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Thinking <code>EnsureCreated()</code> and migrations are the same. <code>EnsureCreated()</code> builds the schema straight from the model, skips migrations and writes no history, so a later <code>Migrate()</code> on that database fails. Use it for tests and demos only.</li><li>Not reading the migration. Dropping a column or shrinking a length can lose data; EF warns \"may result in the loss of data\".</li></ul>",
          hi: "<ul><li>यह सोचना कि <code>EnsureCreated()</code> और migrations एक ही हैं। <code>EnsureCreated()</code> schema सीधे model से बनाता है, migrations छोड़ देता है और history नहीं लिखता, इसलिए बाद में उसी database पर <code>Migrate()</code> फ़ेल होता है। इसे सिर्फ़ tests और demos में इस्तेमाल करो।</li><li>Migration को पढ़ना नहीं। Column drop करने या लंबाई घटाने से data जा सकता है; EF चेतावनी देता है \"may result in the loss of data\"।</li></ul>",
          hg: "<ul><li>Ye sochna ki <code>EnsureCreated()</code> aur migrations ek hi hain. <code>EnsureCreated()</code> schema seedhe model se banata hai, migrations chhod deta hai aur history nahi likhta, isliye baad mein usi database par <code>Migrate()</code> fail hota hai. Ise sirf tests aur demos mein use karo.</li><li>Migration ko padhna nahi. Column drop karne ya lambai ghatane se data ja sakta hai; EF chetavni deta hai \"may result in the loss of data\".</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a migration for every schema change in a Code-First project. Commit it with the code change, review the SQL in the pull request, and apply it from the pipeline (a script or a bundle, see Deep Dive). Use <code>EnsureCreated()</code> only for throwaway test databases.</p>",
          hi: "<p>Code-First project में हर schema बदलाव के लिए migration इस्तेमाल करो। उसे code बदलाव के साथ commit करो, pull request में SQL review करो, और pipeline से लागू करो (script या bundle, Deep Dive देखो)। <code>EnsureCreated()</code> सिर्फ़ फेंक देने वाले test databases के लिए।</p>",
          hg: "<p>Code-First project mein har schema badlaav ke liye migration use karo. Use code badlaav ke saath commit karo, pull request mein SQL review karo, aur pipeline se laagu karo (script ya bundle, Deep Dive dekho). <code>EnsureCreated()</code> sirf phenk dene wale test databases ke liye.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a third migration, <code>20261020_AddTicketPriority</code>, that adds an <code>int</code> column <code>Priority</code> (default 1) to <code>Tickets</code>. After <code>Migrate()</code> print <code>Applied: 3</code> and <code>Pending: 0</code>.</p>",
            hi: "<p>तीसरा migration <code>20261020_AddTicketPriority</code> जोड़ो, जो <code>Tickets</code> में <code>int</code> column <code>Priority</code> (default 1) जोड़े। <code>Migrate()</code> के बाद <code>Applied: 3</code> और <code>Pending: 0</code> print करो।</p>",
            hg: "<p>Teesra migration <code>20261020_AddTicketPriority</code> jodo, jo <code>Tickets</code> mein <code>int</code> column <code>Priority</code> (default 1) jode. <code>Migrate()</code> ke baad <code>Applied: 3</code> aur <code>Pending: 0</code> print karo.</p>"
          },
          hint: {
            en: "<p>Copy the <code>AddTicketStatus</code> class, change the id, use <code>AddColumn&lt;int&gt;</code> with <code>defaultValue: 1</code>, and mirror it in <code>Down()</code> with <code>DropColumn</code>. Count with <code>GetAppliedMigrations().Count()</code>.</p>",
            hi: "<p><code>AddTicketStatus</code> class copy करो, id बदलो, <code>defaultValue: 1</code> के साथ <code>AddColumn&lt;int&gt;</code> लगाओ, और <code>Down()</code> में <code>DropColumn</code> से उल्टा करो। गिनती <code>GetAppliedMigrations().Count()</code> से।</p>",
            hg: "<p><code>AddTicketStatus</code> class copy karo, id badlo, <code>defaultValue: 1</code> ke saath <code>AddColumn&lt;int&gt;</code> lagao, aur <code>Down()</code> mein <code>DropColumn</code> se ulta karo. Ginti <code>GetAppliedMigrations().Count()</code> se.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a third migration",
              hi: "हल: तीसरा migration",
              hg: "Solution: teesra migration"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Infrastructure;\nusing Microsoft.EntityFrameworkCore.Migrations;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\nusing var db = new CrmContext(options);\n\ndb.Database.Migrate();\nConsole.WriteLine($\"Applied: {db.Database.GetAppliedMigrations().Count()}\");\nConsole.WriteLine($\"Pending: {db.Database.GetPendingMigrations().Count()}\");\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options) { }\n\n[DbContext(typeof(CrmContext)), Migration(\"20261001_CreateTickets\")]\npublic class CreateTickets : Migration\n{\n    protected override void Up(MigrationBuilder m) => m.CreateTable(\n        name: \"Tickets\",\n        columns: t => new { Id = t.Column<int>(nullable: false), Issue = t.Column<string>(nullable: false) },\n        constraints: t => t.PrimaryKey(\"PK_Tickets\", x => x.Id));\n\n    protected override void Down(MigrationBuilder m) => m.DropTable(name: \"Tickets\");\n}\n\n[DbContext(typeof(CrmContext)), Migration(\"20261015_AddTicketStatus\")]\npublic class AddTicketStatus : Migration\n{\n    protected override void Up(MigrationBuilder m) =>\n        m.AddColumn<string>(name: \"Status\", table: \"Tickets\", nullable: false, defaultValue: \"Open\");\n\n    protected override void Down(MigrationBuilder m) => m.DropColumn(name: \"Status\", table: \"Tickets\");\n}\n\n[DbContext(typeof(CrmContext)), Migration(\"20261020_AddTicketPriority\")]\npublic class AddTicketPriority : Migration\n{\n    protected override void Up(MigrationBuilder m) =>\n        m.AddColumn<int>(name: \"Priority\", table: \"Tickets\", nullable: false, defaultValue: 1);\n\n    protected override void Down(MigrationBuilder m) => m.DropColumn(name: \"Priority\", table: \"Tickets\");\n}",
            check: "run",
            expected: "Applied: 3\nPending: 0",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "You run <code>dotnet ef migrations add AddTicketStatus</code>. What changes in the database?",
            hi: "तुम <code>dotnet ef migrations add AddTicketStatus</code> चलाते हो। Database में क्या बदलता है?",
            hg: "Tum <code>dotnet ef migrations add AddTicketStatus</code> chalate ho. Database mein kya badalta hai?"
          },
          options: [
            {
              en: "A <code>Status</code> column is added to <code>Tickets</code>",
              hi: "<code>Tickets</code> में <code>Status</code> column जुड़ जाता है",
              hg: "<code>Tickets</code> mein <code>Status</code> column jud jaata hai"
            },
            {
              en: "A row is added to <code>__EFMigrationsHistory</code>",
              hi: "<code>__EFMigrationsHistory</code> में एक row जुड़ती है",
              hg: "<code>__EFMigrationsHistory</code> mein ek row judti hai"
            },
            {
              en: "Nothing: it only writes migration files into your project",
              hi: "कुछ नहीं: यह सिर्फ़ तुम्हारे project में migration files लिखता है",
              hg: "Kuch nahi: ye sirf tumhare project mein migration files likhta hai"
            },
            {
              en: "The <code>Tickets</code> table is dropped and re-created",
              hi: "<code>Tickets</code> table drop होकर दोबारा बनती है",
              hg: "<code>Tickets</code> table drop hokar dobara banti hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p><code>migrations add</code> only generates C# files (the migration, its Designer file and the updated snapshot). The database changes when you run <code>dotnet ef database update</code> or <code>Migrate()</code>.</p>",
            hi: "<p><code>migrations add</code> सिर्फ़ C# files बनाता है (migration, उसकी Designer file और नया snapshot)। Database तब बदलता है जब तुम <code>dotnet ef database update</code> या <code>Migrate()</code> चलाते हो।</p>",
            hg: "<p><code>migrations add</code> sirf C# files banata hai (migration, uski Designer file aur naya snapshot). Database tab badalta hai jab tum <code>dotnet ef database update</code> ya <code>Migrate()</code> chalate ho.</p>"
          }
        },
        recap: {
          en: "<ul><li>A migration = <code>Up()</code> + <code>Down()</code>, generated by diffing the model against the snapshot.</li><li><code>migrations add</code> writes files only; <code>database update</code> / <code>Migrate()</code> changes the database and fills <code>__EFMigrationsHistory</code>.</li><li><code>EnsureCreated()</code> is for tests and demos; never mix it with migrations.</li></ul>",
          hi: "<ul><li>Migration = <code>Up()</code> + <code>Down()</code>, जो model और snapshot के फ़र्क़ से बनता है।</li><li><code>migrations add</code> सिर्फ़ files लिखता है; <code>database update</code> / <code>Migrate()</code> database बदलता है और <code>__EFMigrationsHistory</code> भरता है।</li><li><code>EnsureCreated()</code> tests और demos के लिए है; इसे migrations के साथ कभी मत मिलाओ।</li></ul>",
          hg: "<ul><li>Migration = <code>Up()</code> + <code>Down()</code>, jo model aur snapshot ke farq se banta hai.</li><li><code>migrations add</code> sirf files likhta hai; <code>database update</code> / <code>Migrate()</code> database badalta hai aur <code>__EFMigrationsHistory</code> bharta hai.</li><li><code>EnsureCreated()</code> tests aur demos ke liye hai; ise migrations ke saath kabhi mat milao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Applying migrations and reading the history table",
            hi: "Migrations लागू करना और history table पढ़ना",
            hg: "Migrations laagu karna aur history table padhna"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Infrastructure;\nusing Microsoft.EntityFrameworkCore.Migrations;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\nusing var db = new CrmContext(options);\n\nConsole.WriteLine($\"Pending before: {string.Join(\", \", db.Database.GetPendingMigrations())}\");\ndb.Database.Migrate();                                 // runs each pending Up() in order (fine for dev)\nConsole.WriteLine($\"Applied after:  {string.Join(\", \", db.Database.GetAppliedMigrations())}\");\n\n// EF remembers what it has applied in a history table, one row per migration.\nvar history = db.Database.SqlQuery<string>($\"SELECT MigrationId AS Value FROM __EFMigrationsHistory ORDER BY MigrationId\");\nConsole.WriteLine($\"__EFMigrationsHistory rows: {history.Count()}\");\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options) { }\n\n// Normally 'dotnet ef migrations add' writes this class for you.\n[DbContext(typeof(CrmContext)), Migration(\"20261001_CreateTickets\")]\npublic class CreateTickets : Migration\n{\n    protected override void Up(MigrationBuilder m) => m.CreateTable(\n        name: \"Tickets\",\n        columns: t => new { Id = t.Column<int>(nullable: false), Issue = t.Column<string>(nullable: false) },\n        constraints: t => t.PrimaryKey(\"PK_Tickets\", x => x.Id));\n\n    protected override void Down(MigrationBuilder m) => m.DropTable(name: \"Tickets\");\n}\n\n[DbContext(typeof(CrmContext)), Migration(\"20261015_AddTicketStatus\")]\npublic class AddTicketStatus : Migration\n{\n    protected override void Up(MigrationBuilder m) =>\n        m.AddColumn<string>(name: \"Status\", table: \"Tickets\", nullable: false, defaultValue: \"Open\");\n\n    protected override void Down(MigrationBuilder m) => m.DropColumn(name: \"Status\", table: \"Tickets\");\n}",
          check: "run",
          expected: "Pending before: 20261001_CreateTickets, 20261015_AddTicketStatus\nApplied after:  20261001_CreateTickets, 20261015_AddTicketStatus\n__EFMigrationsHistory rows: 2",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "relationships",
      depth: "short",
      title: {
        en: "Relationships: one-to-many and many-to-many",
        hi: "Relationships: one-to-many और many-to-many",
        hg: "Relationships: one-to-many aur many-to-many"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 showed that <code>CustomerId</code> becomes a foreign key. Now we look at both sides: a customer has many tickets (1:N), and a ticket can carry many tags such as \"billing\" or \"urgent\" (N:N).",
          hi: "पाठ 3 में दिखा कि <code>CustomerId</code> foreign key बनती है। अब दोनों तरफ़ देखते हैं: एक customer के कई tickets (1:N), और एक ticket पर कई tags जैसे \"billing\" या \"urgent\" (N:N)।",
          hg: "Lesson 3 mein dikha ki <code>CustomerId</code> foreign key banti hai. Ab dono taraf dekhte hain: ek customer ke kai tickets (1:N), aur ek ticket par kai tags jaise \"billing\" ya \"urgent\" (N:N)."
        },
        what: {
          en: "<p>In C# a relationship is a <b>navigation property</b>: <code>Customer.Tickets</code> (a collection) and <code>SupportTicket.Customer</code> (a reference), plus a <b>foreign key</b> property <code>CustomerId</code>. In SQL, 1:N is an FK column on the \"many\" side; N:N is a <b>join table</b>, which EF Core creates for you when both sides have a collection (skip navigations).</p>",
          hi: "<p>C# में relationship एक <b>navigation property</b> है: <code>Customer.Tickets</code> (collection) और <code>SupportTicket.Customer</code> (reference), साथ में <b>foreign key</b> property <code>CustomerId</code>। SQL में 1:N का मतलब \"many\" वाली तरफ़ FK column है; N:N एक <b>join table</b> है, जो दोनों तरफ़ collection होने पर EF Core खुद बना देता है (skip navigations)।</p>",
          hg: "<p>C# mein relationship ek <b>navigation property</b> hai: <code>Customer.Tickets</code> (collection) aur <code>SupportTicket.Customer</code> (reference), saath mein <b>foreign key</b> property <code>CustomerId</code>. SQL mein 1:N ka matlab \"many\" wali taraf FK column hai; N:N ek <b>join table</b> hai, jo dono taraf collection hone par EF Core khud bana deta hai (skip navigations).</p>"
        },
        why: {
          en: "<p>With navigations you write <code>customer.Tickets.Add(ticket)</code> and EF fills the foreign key. You can also filter across tables without writing a JOIN: \"tickets that have the tag urgent\" is a plain LINQ <code>Any</code>.</p>",
          hi: "<p>Navigations होने पर तुम <code>customer.Tickets.Add(ticket)</code> लिखते हो और EF foreign key भर देता है। Tables के आर-पार filter भी बिना JOIN लिखे होता है: \"tag urgent वाले tickets\" एक सादा LINQ <code>Any</code> है।</p>",
          hg: "<p>Navigations hone par tum <code>customer.Tickets.Add(ticket)</code> likhte ho aur EF foreign key bhar deta hai. Tables ke aar-paar filter bhi bina JOIN likhe hota hai: \"tag urgent wale tickets\" ek saada LINQ <code>Any</code> hai.</p>"
        },
        analogy: {
          en: "<p>A school. One class teacher has many students, and every student has one class teacher: the teacher's name is written on each student's row (1:N). A student joins many clubs and a club has many students, so the office keeps an enrolment register with one line per pair (N:N). That register is the join table.</p>",
          hi: "<p>एक स्कूल। एक class teacher के कई students होते हैं, और हर student का एक class teacher: teacher का नाम हर student की row पर लिखा होता है (1:N)। एक student कई clubs में जाता है और एक club में कई students होते हैं, इसलिए office एक enrolment register रखता है जिसमें हर जोड़ी की एक line होती है (N:N)। वह register ही join table है।</p>",
          hg: "<p>Ek school. Ek class teacher ke kai students hote hain, aur har student ka ek class teacher: teacher ka naam har student ki row par likha hota hai (1:N). Ek student kai clubs mein jaata hai aur ek club mein kai students hote hain, isliye office ek enrolment register rakhta hai jisme har jodi ki ek line hoti hai (N:N). Woh register hi join table hai.</p>"
        },
        lines: [
          {
            code: "public List<SupportTicket> Tickets { get; } = [];",
            note: {
              en: "The <b>collection navigation</b> on the \"one\" side: everything a customer owns. It is get-only and starts empty, so it is never null.",
              hi: "\"One\" वाली तरफ़ की <b>collection navigation</b>: customer के सारे tickets। यह get-only है और ख़ाली शुरू होती है, इसलिए कभी null नहीं।",
              hg: "\"One\" wali taraf ki <b>collection navigation</b>: customer ke saare tickets. Ye get-only hai aur khaali shuru hoti hai, isliye kabhi null nahi."
            }
          },
          {
            code: "public int CustomerId { get; set; }",
            note: {
              en: "The <b>foreign key</b> on the \"many\" side. In SQL this is the <code>CustomerId</code> column of <code>Tickets</code>. Not <code>int?</code>, so every ticket must have a customer.",
              hi: "\"Many\" वाली तरफ़ की <b>foreign key</b>। SQL में यह <code>Tickets</code> का <code>CustomerId</code> column है। <code>int?</code> नहीं है, इसलिए हर ticket का एक customer ज़रूरी है।",
              hg: "\"Many\" wali taraf ki <b>foreign key</b>. SQL mein ye <code>Tickets</code> ka <code>CustomerId</code> column hai. <code>int?</code> nahi hai, isliye har ticket ka ek customer zaroori hai."
            }
          },
          {
            code: "public Customer Customer { get; set; } = null!;",
            note: {
              en: "The <b>reference navigation</b> back to the customer. <code>null!</code> says \"EF will fill this when it is loaded\" (lesson 6).",
              hi: "Customer की तरफ़ वापस जाने वाली <b>reference navigation</b>। <code>null!</code> कहता है \"load होने पर EF इसे भरेगा\" (पाठ 6)।",
              hg: "Customer ki taraf wapas jaane wali <b>reference navigation</b>. <code>null!</code> kehta hai \"load hone par EF ise bharega\" (lesson 6)."
            }
          },
          {
            code: "public List<Tag> Tags { get; } = [];",
            note: {
              en: "A collection on <b>both</b> sides (<code>Tag.Tickets</code> too) is all EF needs for N:N. It creates the join table <code>SupportTicketTag</code> itself.",
              hi: "<b>दोनों</b> तरफ़ collection (<code>Tag.Tickets</code> भी) होना ही N:N के लिए काफ़ी है। EF join table <code>SupportTicketTag</code> खुद बना लेता है।",
              hg: "<b>Dono</b> taraf collection (<code>Tag.Tickets</code> bhi) hona hi N:N ke liye kaafi hai. EF join table <code>SupportTicketTag</code> khud bana leta hai."
            }
          },
          {
            code: ".Where(t => t.Tags.Any(g => g.Name == \"urgent\"))",
            note: {
              en: "Filtering across the join table with no manual JOIN: EF writes a <code>WHERE EXISTS (...)</code> over <code>SupportTicketTag</code>.",
              hi: "Join table के आर-पार filter, बिना हाथ से JOIN लिखे: EF <code>SupportTicketTag</code> पर <code>WHERE EXISTS (...)</code> लिखता है।",
              hg: "Join table ke aar-paar filter, bina haath se JOIN likhe: EF <code>SupportTicketTag</code> par <code>WHERE EXISTS (...)</code> likhta hai."
            }
          },
          {
            code: "SELECT COUNT(*) AS Value FROM SupportTicketTag",
            note: {
              en: "Peeking at the join table with raw SQL: two rows, one for each (ticket 501, tag) pair. You never create these rows in code.",
              hi: "Raw SQL से join table में झाँकना: दो rows, हर (ticket 501, tag) जोड़ी की एक। इन rows को तुम code में कभी नहीं बनाते।",
              hg: "Raw SQL se join table mein jhaankna: do rows, har (ticket 501, tag) jodi ki ek. In rows ko tum code mein kabhi nahi banate."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Creating a join entity class for a plain N:N link. Since EF Core 5 two collections are enough; use a join entity only when the link carries data (date, grade).</li><li>Adding navigations in both directions on every class \"just in case\". Each one is another path for accidental loading and JSON cycles. Add one when code really walks it.</li></ul>",
          hi: "<ul><li>सादे N:N link के लिए join entity class बनाना। EF Core 5 से दो collections काफ़ी हैं; join entity तभी जब link में data हो (तारीख़, grade)।</li><li>हर class में \"कभी काम आए\" सोचकर दोनों दिशाओं की navigations जोड़ना। हर एक अनजाने loading और JSON cycles का नया रास्ता है। तब जोड़ो जब code सच में उस पर चले।</li></ul>",
          hg: "<ul><li>Saade N:N link ke liye join entity class banana. EF Core 5 se do collections kaafi hain; join entity tabhi jab link mein data ho (taareekh, grade).</li><li>Har class mein \"kabhi kaam aaye\" sochkar dono dishaon ki navigations jodna. Har ek anjaane loading aur JSON cycles ka naya raasta hai. Tab jodo jab code sach mein us par chale.</li></ul>"
        },
        whenToUse: {
          en: "<p>Model the relationships your SQL schema really has, so EF can write the JOINs and keep foreign keys correct. Use skip navigations for pure link tables. 1:1 relations and delete rules (cascade, restrict) are in Deep Dive.</p>",
          hi: "<p>वही relationships model करो जो तुम्हारे SQL schema में सच में हैं, ताकि EF JOINs लिख सके और foreign keys सही रखे। सिर्फ़ link वाली tables के लिए skip navigations। 1:1 relations और delete rules (cascade, restrict) Deep Dive में हैं।</p>",
          hg: "<p>Wahi relationships model karo jo tumhare SQL schema mein sach mein hain, taaki EF JOINs likh sake aur foreign keys sahi rakhe. Sirf link wali tables ke liye skip navigations. 1:1 relations aur delete rules (cascade, restrict) Deep Dive mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a second customer, <b>Ravi</b>, with ticket <b>503</b> (\"Double charge\") that uses the <b>same</b> <code>billing</code> tag object as ticket 501. Print <code>Billing tickets: 2</code>.</p>",
            hi: "<p>दूसरा customer <b>Ravi</b> जोड़ो, ticket <b>503</b> (\"Double charge\") के साथ, जो ticket 501 वाला <b>वही</b> <code>billing</code> tag object इस्तेमाल करे। <code>Billing tickets: 2</code> print करो।</p>",
            hg: "<p>Doosra customer <b>Ravi</b> jodo, ticket <b>503</b> (\"Double charge\") ke saath, jo ticket 501 wala <b>wahi</b> <code>billing</code> tag object use kare. <code>Billing tickets: 2</code> print karo.</p>"
          },
          hint: {
            en: "<p>Create <code>billing</code> once and put it in both <code>Tags = { billing }</code> initializers. Count with <code>db.Tickets.Count(t =&gt; t.Tags.Any(g =&gt; g.Name == \"billing\"))</code>.</p>",
            hi: "<p><code>billing</code> एक बार बनाओ और दोनों <code>Tags = { billing }</code> initializers में रखो। गिनती <code>db.Tickets.Count(t =&gt; t.Tags.Any(g =&gt; g.Name == \"billing\"))</code> से।</p>",
            hg: "<p><code>billing</code> ek baar banao aur dono <code>Tags = { billing }</code> initializers mein rakho. Ginti <code>db.Tickets.Count(t =&gt; t.Tags.Any(g =&gt; g.Name == \"billing\"))</code> se.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one tag shared by two tickets",
              hi: "हल: दो tickets के बीच एक tag",
              hg: "Solution: do tickets ke beech ek tag"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    var billing = new Tag { Name = \"billing\" };\n    var asha = new Customer { Name = \"Asha\" };\n    asha.Tickets.Add(new SupportTicket { Id = 501, Issue = \"Wrong bill\", Tags = { billing } });\n    var ravi = new Customer { Name = \"Ravi\" };\n    ravi.Tickets.Add(new SupportTicket { Id = 503, Issue = \"Double charge\", Tags = { billing } });\n    db.AddRange(asha, ravi);\n    db.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))\n{\n    var count = db.Tickets.Count(t => t.Tags.Any(g => g.Name == \"billing\"));\n    Console.WriteLine($\"Billing tickets: {count}\");\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n    public List<Tag> Tags { get; } = [];\n}\n\npublic class Tag\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            expected: "Billing tickets: 2",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "In a 1:N relationship between <code>Customer</code> and <code>SupportTicket</code>, where does the foreign key column live in SQL?",
            hi: "<code>Customer</code> और <code>SupportTicket</code> के बीच 1:N relationship में foreign key column SQL में कहाँ रहता है?",
            hg: "<code>Customer</code> aur <code>SupportTicket</code> ke beech 1:N relationship mein foreign key column SQL mein kahan rehta hai?"
          },
          options: [
            {
              en: "In <code>Customers</code>, as a <code>TicketId</code> column",
              hi: "<code>Customers</code> में, <code>TicketId</code> column के रूप में",
              hg: "<code>Customers</code> mein, <code>TicketId</code> column ke roop mein"
            },
            {
              en: "In <code>Tickets</code>, as a <code>CustomerId</code> column (the \"many\" side)",
              hi: "<code>Tickets</code> में, <code>CustomerId</code> column के रूप में (\"many\" वाली तरफ़)",
              hg: "<code>Tickets</code> mein, <code>CustomerId</code> column ke roop mein (\"many\" wali taraf)"
            },
            {
              en: "In a separate join table",
              hi: "एक अलग join table में",
              hg: "Ek alag join table mein"
            },
            {
              en: "Nowhere: EF keeps it in memory only",
              hi: "कहीं नहीं: EF इसे सिर्फ़ memory में रखता है",
              hg: "Kahin nahi: EF ise sirf memory mein rakhta hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The \"many\" side points to its one parent, so <code>Tickets.CustomerId</code> holds the customer's id. A join table is only for N:N.</p>",
            hi: "<p>\"Many\" वाली तरफ़ अपने एक parent की ओर इशारा करती है, इसलिए <code>Tickets.CustomerId</code> में customer का id रहता है। Join table सिर्फ़ N:N के लिए होती है।</p>",
            hg: "<p>\"Many\" wali taraf apne ek parent ki or ishaara karti hai, isliye <code>Tickets.CustomerId</code> mein customer ka id rehta hai. Join table sirf N:N ke liye hoti hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Navigation properties + a foreign key describe a relationship in C#.</li><li>1:N = FK column on the \"many\" side; N:N = a join table, created for you from two collections.</li><li>Query across relationships with LINQ (<code>Any</code>, <code>Where</code>); EF writes the JOIN.</li></ul>",
          hi: "<ul><li>Navigation properties और foreign key मिलकर C# में relationship बताते हैं।</li><li>1:N = \"many\" वाली तरफ़ FK column; N:N = join table, जो दो collections से अपने-आप बनती है।</li><li>Relationships के आर-पार LINQ से query करो (<code>Any</code>, <code>Where</code>); JOIN EF लिखता है।</li></ul>",
          hg: "<ul><li>Navigation properties aur foreign key milkar C# mein relationship batate hain.</li><li>1:N = \"many\" wali taraf FK column; N:N = join table, jo do collections se apne-aap banti hai.</li><li>Relationships ke aar-paar LINQ se query karo (<code>Any</code>, <code>Where</code>); JOIN EF likhta hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "One customer, many tickets, many tags",
            hi: "एक customer, कई tickets, कई tags",
            hg: "Ek customer, kai tickets, kai tags"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    var asha = new Customer { Name = \"Asha\" };\n    asha.Tickets.Add(new SupportTicket { Id = 501, Issue = \"Wrong bill\",\n        Tags = { new Tag { Name = \"billing\" }, new Tag { Name = \"urgent\" } } });\n    asha.Tickets.Add(new SupportTicket { Id = 502, Issue = \"Router not working\" });\n    db.Customers.Add(asha);                            // tickets and tags come along\n    db.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))\n{\n    var urgent = db.Tickets.Where(t => t.Tags.Any(g => g.Name == \"urgent\"))\n        .Select(t => new { t.Id, Customer = t.Customer.Name });\n    foreach (var t in urgent) Console.WriteLine($\"Urgent ticket {t.Id} belongs to {t.Customer}\");\n\n    var links = db.Database.SqlQuery<int>($\"SELECT COUNT(*) AS Value FROM SupportTicketTag\");\n    Console.WriteLine($\"Rows in the join table: {links.Single()}\");\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];            // one customer, many tickets\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public int CustomerId { get; set; }                          // foreign key on the \"many\" side\n    public Customer Customer { get; set; } = null!;\n    public List<Tag> Tags { get; } = [];                         // many tickets, many tags\n}\n\npublic class Tag\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "Urgent ticket 501 belongs to Asha\nRows in the join table: 2",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "loading-related-data",
      depth: "short",
      title: {
        en: "Loading related data: Include and Load",
        hi: "Related data load करना: Include और Load",
        hg: "Related data load karna: Include aur Load"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 5 left <code>ticket.Customer</code> empty until loaded. This lesson shows the three ways to fill navigations: eager (<code>Include</code>), explicit (<code>Load</code>) and lazy.",
          hi: "पाठ 5 में <code>ticket.Customer</code> load होने तक ख़ाली रहा। यह पाठ navigations भरने के तीन तरीक़े दिखाता है: eager (<code>Include</code>), explicit (<code>Load</code>) और lazy।",
          hg: "Lesson 5 mein <code>ticket.Customer</code> load hone tak khaali raha. Ye lesson navigations bharne ke teen tareeke dikhata hai: eager (<code>Include</code>), explicit (<code>Load</code>) aur lazy."
        },
        what: {
          en: "<p>By default EF Core loads <b>only what you query</b>. To get related rows: <b><code>Include</code></b> (and <code>ThenInclude</code> for the next level) adds a JOIN to the same query; <b>explicit loading</b> (<code>Entry(x).Collection(...).Load()</code>) runs one extra query when you decide; <b>lazy loading</b> runs a hidden query the first time you touch a navigation (off by default).</p>",
          hi: "<p>Default में EF Core <b>सिर्फ़ वही load करता है जो तुम query करते हो</b>। Related rows पाने के लिए: <b><code>Include</code></b> (और अगले level के लिए <code>ThenInclude</code>) उसी query में JOIN जोड़ता है; <b>explicit loading</b> (<code>Entry(x).Collection(...).Load()</code>) जब तुम तय करो तब एक अतिरिक्त query चलाती है; <b>lazy loading</b> navigation को पहली बार छूने पर छिपी query चलाती है (default में बंद)।</p>",
          hg: "<p>Default mein EF Core <b>sirf wahi load karta hai jo tum query karte ho</b>. Related rows paane ke liye: <b><code>Include</code></b> (aur agle level ke liye <code>ThenInclude</code>) usi query mein JOIN jodta hai; <b>explicit loading</b> (<code>Entry(x).Collection(...).Load()</code>) jab tum tay karo tab ek atirikt query chalati hai; <b>lazy loading</b> navigation ko pehli baar chhune par chhipi query chalati hai (default mein band).</p>"
        },
        why: {
          en: "<p>Related data costs queries. Knowing which style runs how many queries lets you keep an endpoint at one query instead of 1 + N (the N+1 problem).</p>",
          hi: "<p>Related data की क़ीमत queries हैं। किस style में कितनी queries चलती हैं, यह जानने से endpoint एक query पर रहता है, 1 + N पर नहीं (N+1 समस्या)।</p>",
          hg: "<p>Related data ki keemat queries hain. Kis style mein kitni queries chalti hain, ye jaanne se endpoint ek query par rehta hai, 1 + N par nahi (N+1 samasya).</p>"
        },
        analogy: {
          en: "<p>A dhaba. A <b>thali</b> brings everything on one plate in one trip: <code>Include</code>. Ordering only dal and later calling the waiter for rotis is explicit loading. A waiter who runs to the kitchen every time something is missing is lazy loading: easy for you, but many trips.</p>",
          hi: "<p>ढाबा। <b>थाली</b> में सब कुछ एक प्लेट में, एक ही फेरे में आता है: <code>Include</code>। सिर्फ़ दाल मँगाकर बाद में रोटी के लिए वेटर को बुलाना explicit loading है। जो वेटर हर कमी पर रसोई भागता है वह lazy loading है: तुम्हारे लिए आसान, पर बहुत फेरे।</p>",
          hg: "<p>Dhaba. <b>Thali</b> mein sab kuch ek plate mein, ek hi phere mein aata hai: <code>Include</code>. Sirf dal mangakar baad mein roti ke liye waiter ko bulana explicit loading hai. Jo waiter har kami par rasoi bhagta hai woh lazy loading hai: tumhare liye aasaan, par bahut phere.</p>"
        },
        lines: [
          {
            code: ".LogTo(_ => queries++, [RelationalEventId.CommandExecuted])",
            note: {
              en: "A small trick: count the SQL commands EF sends, to compare the three styles.",
              hi: "छोटी तरकीब: EF जितने SQL commands भेजता है उन्हें गिनो, ताकि तीनों styles की तुलना हो सके।",
              hg: "Chhoti tarkeeb: EF jitne SQL commands bhejta hai unhein gino, taaki teeno styles ki tulna ho sake."
            }
          },
          {
            code: "var ticket = db.Tickets.OrderBy(t => t.Id).First();",
            note: {
              en: "Default: only the ticket is loaded. Its <code>Customer</code> is still <code>null</code>, and one query ran.",
              hi: "Default: सिर्फ़ ticket load होता है। उसका <code>Customer</code> अब भी <code>null</code> है, और एक query चली।",
              hg: "Default: sirf ticket load hota hai. Uska <code>Customer</code> ab bhi <code>null</code> hai, aur ek query chali."
            }
          },
          {
            code: "var asha = db.Customers.Include(c => c.Tickets).Single();",
            note: {
              en: "<b>Eager</b>: customer and tickets come back in ONE query with a JOIN. Add <code>.ThenInclude(t =&gt; t.Tags)</code> to go one level deeper.",
              hi: "<b>Eager</b>: customer और tickets JOIN के साथ एक ही query में आते हैं। एक level और गहरा जाने के लिए <code>.ThenInclude(t =&gt; t.Tags)</code> जोड़ो।",
              hg: "<b>Eager</b>: customer aur tickets JOIN ke saath ek hi query mein aate hain. Ek level aur gehra jaane ke liye <code>.ThenInclude(t =&gt; t.Tags)</code> jodo."
            }
          },
          {
            code: "var tickets = db.Entry(asha).Collection(c => c.Tickets);",
            note: {
              en: "<b>Explicit</b>: get a handle on one navigation of an already loaded customer. Nothing is loaded until you call <code>Load()</code>.",
              hi: "<b>Explicit</b>: पहले से load हुए customer की एक navigation का handle लो। <code>Load()</code> बुलाने तक कुछ load नहीं होता।",
              hg: "<b>Explicit</b>: pehle se load hue customer ki ek navigation ka handle lo. <code>Load()</code> bulane tak kuch load nahi hota."
            }
          },
          {
            code: "tickets.Load();",
            note: {
              en: "Runs the second query now, at the moment you chose: <code>IsLoaded</code> becomes <code>True</code>. Total is 2 queries: the customer, then the tickets.",
              hi: "दूसरी query अभी चलती है, उसी पल जो तुमने चुना: <code>IsLoaded</code> <code>True</code> हो जाता है। कुल 2 queries: customer, फिर tickets।",
              hg: "Doosri query abhi chalti hai, usi pal jo tumne chuna: <code>IsLoaded</code> <code>True</code> ho jaata hai. Kul 2 queries: customer, phir tickets."
            }
          },
          {
            code: "public Customer Customer { get; set; } = null!;      // stays null until you load it",
            note: {
              en: "This is why lesson 5 used <code>null!</code>: it is filled only when the customer is loaded into this context, by <code>Include</code>, <code>Load</code> or an earlier query (fix-up, Deep Dive).",
              hi: "इसीलिए पाठ 5 में <code>null!</code> था: property तभी भरती है जब customer इसी context में load हो, <code>Include</code>, <code>Load</code> या किसी पिछली query से (fix-up, Deep Dive)।",
              hg: "Isiliye lesson 5 mein <code>null!</code> tha: property tabhi bharti hai jab customer isi context mein load ho, <code>Include</code>, <code>Load</code> ya kisi pichhli query se (fix-up, Deep Dive)."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Reading <code>ticket.Customer.Name</code> without loading the customer: <code>NullReferenceException</code>. Add <code>Include(t =&gt; t.Customer)</code>.</li><li>Using lazy loading in a web API or a loop. The queries are hidden and the count explodes (N+1).</li></ul>",
          hi: "<ul><li>Customer load किए बिना <code>ticket.Customer.Name</code> पढ़ना: <code>NullReferenceException</code>। <code>Include(t =&gt; t.Customer)</code> जोड़ो।</li><li>Web API या loop में lazy loading इस्तेमाल करना। Queries छिपी रहती हैं और गिनती फट पड़ती है (N+1)।</li></ul>",
          hg: "<ul><li>Customer load kiye bina <code>ticket.Customer.Name</code> padhna: <code>NullReferenceException</code>. <code>Include(t =&gt; t.Customer)</code> jodo.</li><li>Web API ya loop mein lazy loading use karna. Queries chhipi rehti hain aur ginti phat padti hai (N+1).</li></ul>"
        },
        whenToUse: {
          en: "<p><code>Include</code> when every caller of that code needs the related data (most API endpoints). Explicit loading when only some code paths need it. Lazy loading only in small desktop or tooling apps. If you need just a few columns, a <code>Select</code> projection beats loading whole objects (Day 6).</p>",
          hi: "<p><code>Include</code> तब जब उस code के हर caller को related data चाहिए (ज़्यादातर API endpoints)। Explicit loading तब जब कुछ ही code paths को चाहिए। Lazy loading सिर्फ़ छोटे desktop या tooling apps में। सिर्फ़ कुछ columns चाहिए तो <code>Select</code> projection पूरे objects load करने से बेहतर है (Day 6)।</p>",
          hg: "<p><code>Include</code> tab jab us code ke har caller ko related data chahiye (zyaadatar API endpoints). Explicit loading tab jab kuch hi code paths ko chahiye. Lazy loading sirf chhote desktop ya tooling apps mein. Sirf kuch columns chahiye toh <code>Select</code> projection poore objects load karne se behtar hai (Day 6).</p>"
        },
        exercise: {
          task: {
            en: "<p>Load all tickets <b>with their customer</b> in a single query. Print one line per ticket (<code>501 Asha</code>), then <code>queries = 1</code>.</p>",
            hi: "<p>सारे tickets उनके <b>customer के साथ</b> एक ही query में load करो। हर ticket की एक line print करो (<code>501 Asha</code>), फिर <code>queries = 1</code>।</p>",
            hg: "<p>Saare tickets unke <b>customer ke saath</b> ek hi query mein load karo. Har ticket ki ek line print karo (<code>501 Asha</code>), phir <code>queries = 1</code>.</p>"
          },
          hint: {
            en: "<p><code>db.Tickets.Include(t =&gt; t.Customer).OrderBy(t =&gt; t.Id).ToList()</code>, then loop and print <code>t.Id</code> and <code>t.Customer.Name</code>.</p>",
            hi: "<p><code>db.Tickets.Include(t =&gt; t.Customer).OrderBy(t =&gt; t.Id).ToList()</code>, फिर loop में <code>t.Id</code> और <code>t.Customer.Name</code> print करो।</p>",
            hg: "<p><code>db.Tickets.Include(t =&gt; t.Customer).OrderBy(t =&gt; t.Id).ToList()</code>, phir loop mein <code>t.Id</code> aur <code>t.Customer.Name</code> print karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: tickets with their customer",
              hi: "हल: tickets अपने customer के साथ",
              hg: "Solution: tickets apne customer ke saath"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Diagnostics;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nint queries = 0;\nvar options = new DbContextOptionsBuilder<CrmContext>()\n    .UseSqlite(connection)\n    .LogTo(_ => queries++, [RelationalEventId.CommandExecuted])\n    .Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    var asha = new Customer { Name = \"Asha\" };\n    asha.Tickets.Add(new SupportTicket { Id = 501, Issue = \"Wrong bill\" });\n    asha.Tickets.Add(new SupportTicket { Id = 502, Issue = \"Router not working\" });\n    db.Customers.Add(asha);\n    db.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))\n{\n    queries = 0;\n    var tickets = db.Tickets.Include(t => t.Customer).OrderBy(t => t.Id).ToList();\n    foreach (var t in tickets) Console.WriteLine($\"{t.Id} {t.Customer.Name}\");\n    Console.WriteLine($\"queries = {queries}\");\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            expected: "501 Asha\n502 Asha\nqueries = 1",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "In a <b>new</b> context you run <code>var t = db.Tickets.First();</code> and then read <code>t.Customer.Name</code>. Lazy loading is off. What happens?",
            hi: "एक <b>नए</b> context में तुम <code>var t = db.Tickets.First();</code> चलाते हो और फिर <code>t.Customer.Name</code> पढ़ते हो। Lazy loading बंद है। क्या होगा?",
            hg: "Ek <b>naye</b> context mein tum <code>var t = db.Tickets.First();</code> chalate ho aur phir <code>t.Customer.Name</code> padhte ho. Lazy loading band hai. Kya hoga?"
          },
          options: [
            {
              en: "EF runs a second query automatically and returns the name",
              hi: "EF अपने-आप दूसरी query चलाकर नाम लौटाता है",
              hg: "EF apne-aap doosri query chalakar naam lautata hai"
            },
            {
              en: "It returns an empty string",
              hi: "यह ख़ाली string लौटाता है",
              hg: "Ye khaali string lautata hai"
            },
            {
              en: "The <code>First()</code> call fails",
              hi: "<code>First()</code> call ही फ़ेल हो जाती है",
              hg: "<code>First()</code> call hi fail ho jaati hai"
            },
            {
              en: "<code>NullReferenceException</code>, because <code>Customer</code> was never loaded",
              hi: "<code>NullReferenceException</code>, क्योंकि <code>Customer</code> कभी load ही नहीं हुआ",
              hg: "<code>NullReferenceException</code>, kyunki <code>Customer</code> kabhi load hi nahi hua"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>EF loads only what you query, and this new context tracks no customer, so <code>t.Customer</code> is still <code>null</code>. (Had it already loaded that customer, fix-up would fill it.) Fix it with <code>Include(t =&gt; t.Customer)</code> in the query, or load it explicitly.</p>",
            hi: "<p>EF सिर्फ़ वही load करता है जो तुम query करते हो, और इस नए context में कोई customer tracked नहीं है, इसलिए <code>t.Customer</code> अब भी <code>null</code> है। (अगर context ने वह customer पहले ही load किया होता, तो fix-up उसे भर देता।) Query में <code>Include(t =&gt; t.Customer)</code> लगाकर या explicit load करके ठीक करो।</p>",
            hg: "<p>EF sirf wahi load karta hai jo tum query karte ho, aur is naye context mein koi customer tracked nahi hai, isliye <code>t.Customer</code> ab bhi <code>null</code> hai. (Agar context ne woh customer pehle hi load kiya hota, toh fix-up use bhar deta.) Query mein <code>Include(t =&gt; t.Customer)</code> lagakar ya explicit load karke theek karo.</p>"
          }
        },
        recap: {
          en: "<ul><li>Default: related data is NOT loaded.</li><li><code>Include</code>/<code>ThenInclude</code> = one query with JOINs; <code>Load()</code> = one extra query when you choose.</li><li>Lazy loading hides queries (N+1); avoid it in web APIs and loops.</li></ul>",
          hi: "<ul><li>Default: related data load नहीं होता।</li><li><code>Include</code>/<code>ThenInclude</code> = JOINs के साथ एक query; <code>Load()</code> = तुम जब चुनो तब एक अतिरिक्त query।</li><li>Lazy loading queries छिपाती है (N+1); web APIs और loops में इससे बचो।</li></ul>",
          hg: "<ul><li>Default: related data load nahi hota.</li><li><code>Include</code>/<code>ThenInclude</code> = JOINs ke saath ek query; <code>Load()</code> = tum jab chuno tab ek atirikt query.</li><li>Lazy loading queries chhipati hai (N+1); web APIs aur loops mein isse bacho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Default, Include and explicit Load, with query counts",
            hi: "Default, Include और explicit Load, queries की गिनती के साथ",
            hg: "Default, Include aur explicit Load, queries ki ginti ke saath"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Diagnostics;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nint queries = 0;\nvar options = new DbContextOptionsBuilder<CrmContext>()\n    .UseSqlite(connection)\n    .LogTo(_ => queries++, [RelationalEventId.CommandExecuted])   // count the SQL commands\n    .Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    var asha = new Customer { Name = \"Asha\" };\n    asha.Tickets.Add(new SupportTicket { Id = 501 });\n    asha.Tickets.Add(new SupportTicket { Id = 502 });\n    db.Customers.Add(asha);\n    db.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))               // 1. Default: only what you ask for\n{\n    queries = 0;\n    var ticket = db.Tickets.OrderBy(t => t.Id).First();\n    Console.WriteLine($\"Default:  Customer is null = {ticket.Customer is null}, queries = {queries}\");\n}\n\nusing (var db = new CrmContext(options))               // 2. Eager: Include adds JOINs to ONE query\n{\n    queries = 0;\n    var asha = db.Customers.Include(c => c.Tickets).Single();\n    Console.WriteLine($\"Eager:    tickets = {asha.Tickets.Count}, queries = {queries}\");\n}\n\nusing (var db = new CrmContext(options))               // 3. Explicit: you decide when to load\n{\n    queries = 0;\n    var asha = db.Customers.Single();\n    var tickets = db.Entry(asha).Collection(c => c.Tickets);\n    tickets.Load();\n    Console.WriteLine($\"Explicit: loaded = {tickets.IsLoaded}, tickets = {asha.Tickets.Count}, queries = {queries}\");\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<SupportTicket> Tickets { get; } = [];\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;      // stays null until you load it\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "Default:  Customer is null = True, queries = 1\nEager:    tickets = 2, queries = 1\nExplicit: loaded = True, tickets = 2, queries = 2",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "tracking",
      depth: "short",
      title: {
        en: "Tracking and AsNoTracking",
        hi: "Tracking और AsNoTracking",
        hg: "Tracking aur AsNoTracking"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1 and 6 loaded objects and lesson 1 saved new ones. How does <code>SaveChanges()</code> know that a loaded ticket changed? Because the context was watching it: the change tracker.",
          hi: "पाठ 1 और 6 में objects load हुए और पाठ 1 में नए objects save हुए। <code>SaveChanges()</code> को कैसे पता चलता है कि load किया हुआ ticket बदल गया? क्योंकि context उस पर नज़र रखे था: change tracker।",
          hg: "Lesson 1 aur 6 mein objects load hue aur lesson 1 mein naye objects save hue. <code>SaveChanges()</code> ko kaise pata chalta hai ki load kiya hua ticket badal gaya? Kyunki context us par nazar rakhe tha: change tracker."
        },
        what: {
          en: "<p>By default every entity a query returns is <b>tracked</b>: the context keeps it and a <b>snapshot</b> of its original values. On <code>SaveChanges()</code> EF compares current values with the snapshot and sends an <code>UPDATE</code> for only the changed columns. Each tracked entity has a <b>state</b>: <code>Added</code>, <code>Unchanged</code>, <code>Modified</code>, <code>Deleted</code>, or <code>Detached</code> (not known to the context). <code>AsNoTracking()</code> skips all of this.</p>",
          hi: "<p>Default में query का लौटाया हर entity <b>tracked</b> होता है: context उसे और उसकी original values का <b>snapshot</b> रखता है। <code>SaveChanges()</code> पर EF मौजूदा values की तुलना snapshot से करता है और सिर्फ़ बदले columns का <code>UPDATE</code> भेजता है। हर tracked entity की एक <b>state</b> होती है: <code>Added</code>, <code>Unchanged</code>, <code>Modified</code>, <code>Deleted</code>, या <code>Detached</code> (context को पता नहीं)। <code>AsNoTracking()</code> यह सब छोड़ देता है।</p>",
          hg: "<p>Default mein query ka lautaya har entity <b>tracked</b> hota hai: context use aur uski original values ka <b>snapshot</b> rakhta hai. <code>SaveChanges()</code> par EF maujooda values ki tulna snapshot se karta hai aur sirf badle columns ka <code>UPDATE</code> bhejta hai. Har tracked entity ki ek <b>state</b> hoti hai: <code>Added</code>, <code>Unchanged</code>, <code>Modified</code>, <code>Deleted</code>, ya <code>Detached</code> (context ko pata nahi). <code>AsNoTracking()</code> ye sab chhod deta hai.</p>"
        },
        why: {
          en: "<p>Tracking is what lets you write \"load, change a property, save\" with no UPDATE statement of your own. But it costs memory and time per row, so for read-only screens you switch it off and get faster queries.</p>",
          hi: "<p>Tracking की वजह से तुम \"load करो, property बदलो, save करो\" बिना अपना UPDATE लिखे कर पाते हो। पर इसकी क़ीमत हर row पर memory और समय है, इसलिए सिर्फ़-पढ़ने वाली screens पर इसे बंद करके queries तेज़ करते हो।</p>",
          hg: "<p>Tracking ki wajah se tum \"load karo, property badlo, save karo\" bina apna UPDATE likhe kar paate ho. Par iski keemat har row par memory aur samay hai, isliye sirf-padhne wali screens par ise band karke queries tez karte ho.</p>"
        },
        analogy: {
          en: "<p>A library. When you <b>issue</b> a book, the librarian notes its condition in the register. On return he compares: \"page 12 is torn\" and records only that. That is a tracked entity. A <b>photocopy</b> of the same pages is yours: scribble on it and the library neither knows nor cares. That is <code>AsNoTracking</code>.</p>",
          hi: "<p>लाइब्रेरी। जब तुम किताब <b>issue</b> कराते हो, librarian register में उसकी हालत लिख लेता है। लौटाने पर वह मिलान करता है: \"पेज 12 फटा है\" और सिर्फ़ वही दर्ज करता है। यह tracked entity है। उन्हीं पन्नों की <b>photocopy</b> तुम्हारी अपनी है: उस पर कुछ भी लिखो, लाइब्रेरी न जानती है न परवाह करती है। यह <code>AsNoTracking</code> है।</p>",
          hg: "<p>Library. Jab tum kitaab <b>issue</b> karate ho, librarian register mein uski haalat likh leta hai. Lautane par woh milaan karta hai: \"page 12 phata hai\" aur sirf wahi darj karta hai. Ye tracked entity hai. Unhi panno ki <b>photocopy</b> tumhari apni hai: us par kuch bhi likho, library na jaanti hai na parwaah karti hai. Ye <code>AsNoTracking</code> hai.</p>"
        },
        lines: [
          {
            code: "var ticket = db.Tickets.Single(t => t.Id == 501);",
            note: {
              en: "A normal query, so the ticket is tracked and EF stores a snapshot of its values. <code>db.Entry(x).State</code> shows the state: a freshly loaded, untouched entity is <code>Unchanged</code> (nothing to send).",
              hi: "सामान्य query, इसलिए ticket tracked है और EF उसकी values का snapshot रख लेता है। <code>db.Entry(x).State</code> state दिखाता है: अभी load हुआ, बिना छुआ entity <code>Unchanged</code> है (भेजने को कुछ नहीं)।",
              hg: "Saamanya query, isliye ticket tracked hai aur EF uski values ka snapshot rakh leta hai. <code>db.Entry(x).State</code> state dikhata hai: abhi load hua, bina chhua entity <code>Unchanged</code> hai (bhejne ko kuch nahi)."
            }
          },
          {
            code: "ticket.Status = \"Closed\";",
            note: {
              en: "Just a normal property set. You never tell EF about it; the tracker finds the change by comparing with the snapshot.",
              hi: "सादा property set। तुम EF को इसके बारे में कभी नहीं बताते; tracker snapshot से तुलना करके बदलाव ढूँढ लेता है।",
              hg: "Saada property set. Tum EF ko iske baare mein kabhi nahi batate; tracker snapshot se tulna karke badlaav dhoondh leta hai."
            }
          },
          {
            code: "var entry = db.Entry(ticket);",
            note: {
              en: "Asking for the entry makes EF compare the values. The state is now <code>Modified</code> and <code>OriginalValue</code> still remembers <code>Open</code>.",
              hi: "Entry माँगने पर EF values की तुलना करता है। State अब <code>Modified</code> है और <code>OriginalValue</code> को अब भी <code>Open</code> याद है।",
              hg: "Entry maangne par EF values ki tulna karta hai. State ab <code>Modified</code> hai aur <code>OriginalValue</code> ko ab bhi <code>Open</code> yaad hai."
            }
          },
          {
            code: "db.Tickets.Add(new SupportTicket { Id = 502, Issue = \"Router not working\" });",
            note: {
              en: "A new object becomes <code>Added</code>. The next line, <code>SaveChanges()</code>, sends one <code>UPDATE</code> (only the <code>Status</code> column) and one <code>INSERT</code>: 2 rows, in one transaction. Afterwards both entities are <code>Unchanged</code> again.",
              hi: "नया object <code>Added</code> बनता है। अगली line का <code>SaveChanges()</code> एक <code>UPDATE</code> (सिर्फ़ <code>Status</code> column) और एक <code>INSERT</code> भेजता है: 2 rows, एक transaction में। इसके बाद दोनों entities फिर <code>Unchanged</code> हैं।",
              hg: "Naya object <code>Added</code> banta hai. Agli line ka <code>SaveChanges()</code> ek <code>UPDATE</code> (sirf <code>Status</code> column) aur ek <code>INSERT</code> bhejta hai: 2 rows, ek transaction mein. Iske baad dono entities phir <code>Unchanged</code> hain."
            }
          },
          {
            code: "var ticket = db.Tickets.AsNoTracking().Single(t => t.Id == 502);",
            note: {
              en: "Read-only query: no snapshot, no entry in the tracker. Faster and lighter for lists you only display.",
              hi: "सिर्फ़-पढ़ने वाली query: न snapshot, न tracker में entry। जो lists सिर्फ़ दिखानी हैं उनके लिए तेज़ और हल्की।",
              hg: "Sirf-padhne wali query: na snapshot, na tracker mein entry. Jo lists sirf dikhani hain unke liye tez aur halki."
            }
          },
          {
            code: "db.ChangeTracker.Entries().Count()",
            note: {
              en: "Lists everything the context tracks: 0 here. Changing this ticket and calling <code>SaveChanges()</code> writes 0 rows, and gives no error.",
              hi: "Context जो कुछ track करता है उसकी सूची: यहाँ 0। इस ticket को बदलकर <code>SaveChanges()</code> बुलाने पर 0 rows लिखी जाती हैं, और कोई error भी नहीं आता।",
              hg: "Context jo kuch track karta hai uski soochi: yahan 0. Is ticket ko badalkar <code>SaveChanges()</code> bulane par 0 rows likhi jaati hain, aur koi error bhi nahi aata."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Loading with <code>AsNoTracking()</code>, changing the object and expecting <code>SaveChanges()</code> to save it. It silently writes nothing.</li><li>Tracking thousands of rows you only display. Every tracked entity costs memory and change-detection time; use <code>AsNoTracking()</code>.</li></ul>",
          hi: "<ul><li><code>AsNoTracking()</code> से load करके object बदलना और उम्मीद करना कि <code>SaveChanges()</code> उसे save करेगा। यह चुपचाप कुछ नहीं लिखता।</li><li>हज़ारों rows track करना जो सिर्फ़ दिखानी हैं। हर tracked entity memory और change-detection का समय लेता है; <code>AsNoTracking()</code> इस्तेमाल करो।</li></ul>",
          hg: "<ul><li><code>AsNoTracking()</code> se load karke object badalna aur ummeed karna ki <code>SaveChanges()</code> use save karega. Ye chupchaap kuch nahi likhta.</li><li>Hazaaron rows track karna jo sirf dikhani hain. Har tracked entity memory aur change-detection ka samay leta hai; <code>AsNoTracking()</code> use karo.</li></ul>"
        },
        whenToUse: {
          en: "<p><code>AsNoTracking()</code> for read-only work: GET endpoints, reports, lists. Normal tracking when you load entities to change them and save. Do not use a no-tracking query for data you plan to update in the same request.</p>",
          hi: "<p>सिर्फ़-पढ़ने के काम के लिए <code>AsNoTracking()</code>: GET endpoints, reports, lists। जब entities बदलकर save करनी हों तब सामान्य tracking। जिस data को उसी request में update करना है उसके लिए no-tracking query मत इस्तेमाल करो।</p>",
          hg: "<p>Sirf-padhne ke kaam ke liye <code>AsNoTracking()</code>: GET endpoints, reports, lists. Jab entities badalkar save karni hon tab saamanya tracking. Jis data ko usi request mein update karna hai uske liye no-tracking query mat use karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Load ticket 501 <b>with tracking</b>, set its <code>Status</code> to <code>Closed</code>, and call <code>SaveChanges()</code> twice. Print <code>First save wrote 1 rows</code> and <code>Second save wrote 0 rows</code>.</p>",
            hi: "<p>Ticket 501 को <b>tracking के साथ</b> load करो, उसका <code>Status</code> <code>Closed</code> करो, और <code>SaveChanges()</code> दो बार बुलाओ। <code>First save wrote 1 rows</code> और <code>Second save wrote 0 rows</code> print करो।</p>",
            hg: "<p>Ticket 501 ko <b>tracking ke saath</b> load karo, uska <code>Status</code> <code>Closed</code> karo, aur <code>SaveChanges()</code> do baar bulao. <code>First save wrote 1 rows</code> aur <code>Second save wrote 0 rows</code> print karo.</p>"
          },
          hint: {
            en: "<p>After the first save the entity is <code>Unchanged</code> again, so there is nothing left to send. <code>SaveChanges()</code> returns the number of rows written.</p>",
            hi: "<p>पहले save के बाद entity फिर <code>Unchanged</code> हो जाती है, इसलिए भेजने को कुछ नहीं बचता। <code>SaveChanges()</code> लिखी गई rows की गिनती लौटाता है।</p>",
            hg: "<p>Pehle save ke baad entity phir <code>Unchanged</code> ho jaati hai, isliye bhejne ko kuch nahi bachta. <code>SaveChanges()</code> likhi gayi rows ki ginti lautata hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: save twice",
              hi: "हल: दो बार save",
              hg: "Solution: do baar save"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing var db = new CrmContext(options);\ndb.Database.EnsureCreated();\ndb.Tickets.Add(new SupportTicket { Id = 501, Issue = \"Wrong bill\", Status = \"Open\" });\ndb.SaveChanges();\n\nvar ticket = db.Tickets.Single(t => t.Id == 501);      // tracked\nticket.Status = \"Closed\";\nConsole.WriteLine($\"First save wrote {db.SaveChanges()} rows\");\nConsole.WriteLine($\"Second save wrote {db.SaveChanges()} rows\");\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            expected: "First save wrote 1 rows\nSecond save wrote 0 rows",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ]
          }
        },
        quiz: {
          q: {
            en: "A ticket is loaded with <code>AsNoTracking()</code>, its <code>Status</code> is changed, then <code>SaveChanges()</code> is called. What happens?",
            hi: "एक ticket <code>AsNoTracking()</code> से load हुआ, उसका <code>Status</code> बदला, फिर <code>SaveChanges()</code> बुलाया गया। क्या होता है?",
            hg: "Ek ticket <code>AsNoTracking()</code> se load hua, uska <code>Status</code> badla, phir <code>SaveChanges()</code> bulaya gaya. Kya hota hai?"
          },
          options: [
            {
              en: "An <code>UPDATE</code> is sent for <code>Status</code>",
              hi: "<code>Status</code> का <code>UPDATE</code> भेजा जाता है",
              hg: "<code>Status</code> ka <code>UPDATE</code> bheja jaata hai"
            },
            {
              en: "An exception tells you the entity is not tracked",
              hi: "एक exception बताती है कि entity tracked नहीं है",
              hg: "Ek exception batati hai ki entity tracked nahi hai"
            },
            {
              en: "Nothing is written and no error is raised",
              hi: "कुछ नहीं लिखा जाता और कोई error नहीं आता",
              hg: "Kuch nahi likha jaata aur koi error nahi aata"
            },
            {
              en: "The whole row is deleted and re-inserted",
              hi: "पूरी row delete होकर दोबारा insert होती है",
              hg: "Poori row delete hokar dobara insert hoti hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>The context never saw the object, so there is no snapshot to compare with. <code>SaveChanges()</code> finds nothing to do and returns 0. To update such an object you would have to attach it (for example with <code>Update</code>) first.</p>",
            hi: "<p>Context ने उस object को कभी देखा ही नहीं, इसलिए तुलना के लिए snapshot नहीं है। <code>SaveChanges()</code> को कुछ करने को नहीं मिलता और 0 लौटता है। ऐसे object को update करने के लिए पहले उसे attach करना पड़ेगा (जैसे <code>Update</code> से)।</p>",
            hg: "<p>Context ne us object ko kabhi dekha hi nahi, isliye tulna ke liye snapshot nahi hai. <code>SaveChanges()</code> ko kuch karne ko nahi milta aur 0 lautata hai. Aise object ko update karne ke liye pehle use attach karna padega (jaise <code>Update</code> se).</p>"
          }
        },
        recap: {
          en: "<ul><li>Tracked by default: snapshot + state (<code>Added</code>, <code>Unchanged</code>, <code>Modified</code>, <code>Deleted</code>, <code>Detached</code>).</li><li><code>SaveChanges()</code> sends only the changed columns, in one transaction.</li><li><code>AsNoTracking()</code> for read-only queries: faster, but changes are not saved.</li></ul>",
          hi: "<ul><li>Default में tracked: snapshot + state (<code>Added</code>, <code>Unchanged</code>, <code>Modified</code>, <code>Deleted</code>, <code>Detached</code>)।</li><li><code>SaveChanges()</code> सिर्फ़ बदले columns भेजता है, एक transaction में।</li><li>सिर्फ़-पढ़ने वाली queries के लिए <code>AsNoTracking()</code>: तेज़, पर बदलाव save नहीं होते।</li></ul>",
          hg: "<ul><li>Default mein tracked: snapshot + state (<code>Added</code>, <code>Unchanged</code>, <code>Modified</code>, <code>Deleted</code>, <code>Detached</code>).</li><li><code>SaveChanges()</code> sirf badle columns bhejta hai, ek transaction mein.</li><li>Sirf-padhne wali queries ke liye <code>AsNoTracking()</code>: tez, par badlaav save nahi hote.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Entity states, SaveChanges and AsNoTracking",
            hi: "Entity states, SaveChanges और AsNoTracking",
            hg: "Entity states, SaveChanges aur AsNoTracking"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    db.Tickets.Add(new SupportTicket { Id = 501, Issue = \"Wrong bill\", Status = \"Open\" });\n    db.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))               // tracked (the default)\n{\n    var ticket = db.Tickets.Single(t => t.Id == 501);\n    Console.WriteLine($\"After query: {db.Entry(ticket).State}\");\n\n    ticket.Status = \"Closed\";                          // only a property set, no EF call\n    var entry = db.Entry(ticket);                      // Entry() notices the change\n    Console.WriteLine($\"After edit:  {entry.State}, original Status = {entry.Property(t => t.Status).OriginalValue}\");\n\n    db.Tickets.Add(new SupportTicket { Id = 502, Issue = \"Router not working\" });\n    Console.WriteLine($\"SaveChanges wrote {db.SaveChanges()} rows\");   // 1 UPDATE + 1 INSERT\n}\n\nusing (var db = new CrmContext(options))               // read-only: AsNoTracking\n{\n    var ticket = db.Tickets.AsNoTracking().Single(t => t.Id == 502);\n    ticket.Status = \"Closed\";                          // nobody is watching this object\n    Console.WriteLine($\"No tracking: tracked = {db.ChangeTracker.Entries().Count()}, SaveChanges wrote {db.SaveChanges()} rows\");\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "After query: Unchanged\nAfter edit:  Modified, original Status = Open\nSaveChanges wrote 2 rows\nNo tracking: tracked = 0, SaveChanges wrote 0 rows",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "lifetime-pooling-captive",
      depth: "detailed",
      title: {
        en: "Pooling, background scopes and the captive dependency",
        hi: "Pooling, background scopes और captive dependency",
        hg: "Pooling, background scopes aur captive dependency"
      },
      body: {
        en: "<ul>\n<li><b>Never a singleton</b>: one context for the whole app would be shared by parallel requests (thread-safety errors), its change tracker would grow forever (memory) and return stale tracked data. Injecting a scoped DbContext into a singleton is a <b>captive dependency</b>; with scope validation (on by default in the Development environment) it fails with <i>\"Cannot consume scoped service ... from singleton ...\"</i>.</li>\n<li><b>AddDbContextPool</b>: reuses context instances from a pool (default size 1024) and resets their state between requests. It saves allocation and setup cost in very high-throughput APIs. Rules: the context class must not keep its own per-request state (fields), because the instance is reused; and its constructor should take only <code>DbContextOptions</code> (no scoped services), because it runs once per pooled instance, not once per request.</li>\n<li>In a <code>BackgroundService</code> (a singleton), create a scope per unit of work with <code>IServiceScopeFactory.CreateScope()</code> — or use the factory.</li>\n</ul>\n<p><b>When to use:</b> plain <code>AddDbContext</code> (Scoped) for normal web APIs; the factory for background jobs, Blazor Server and parallel tasks; pooling only after a load test shows context creation matters. <b>When not:</b> do not register DbContext as Singleton, do not store it in a static field, and do not share one instance across threads — and do not switch to pooling if your context class holds request-specific fields (for example a tenant id set per request) without resetting them.</p>",
        hi: "<ul>\n<li><b>Singleton कभी नहीं</b>: पूरे app का एक context parallel requests में share होगा (thread-safety errors), उसका change tracker हमेशा बढ़ता रहेगा (memory) और पुराना tracked data लौटाएगा। Scoped DbContext को singleton में inject करना <b>captive dependency</b> है; scope validation (Development environment में by default चालू) के साथ यह <i>\"Cannot consume scoped service ... from singleton ...\"</i> से fail होता है।</li>\n<li><b>AddDbContextPool</b>: context instances को एक pool से दोबारा use करता है (default size 1024) और requests के बीच उनकी state reset करता है। बहुत ज़्यादा traffic वाली APIs में allocation और setup का खर्च बचाता है। नियम: context class अपनी per-request state (fields) न रखे, क्योंकि instance दोबारा use होता है; और उसका constructor सिर्फ़ <code>DbContextOptions</code> ले (कोई scoped services नहीं), क्योंकि वो हर request पर नहीं, हर pooled instance के लिए एक बार चलता है।</li>\n<li><code>BackgroundService</code> (एक singleton) में हर unit of work के लिए <code>IServiceScopeFactory.CreateScope()</code> से scope बनाओ — या factory use करो।</li>\n</ul>\n<p><b>कब use करें:</b> normal web APIs के लिए सीधा <code>AddDbContext</code> (Scoped); background jobs, Blazor Server और parallel tasks के लिए factory; pooling सिर्फ़ तब, जब load test दिखाए कि context बनाने का खर्च मायने रखता है। <b>कब नहीं:</b> DbContext को Singleton register मत करो, static field में मत रखो, और एक instance को threads के बीच share मत करो — और अगर आपकी context class request-specific fields रखती है (जैसे हर request पर set होने वाला tenant id), तो उन्हें reset किए बिना pooling पर मत जाओ।</p>",
        hg: "<ul>\n<li><b>Singleton kabhi nahi</b>: poore app ka ek context parallel requests mein share hoga (thread-safety errors), uska change tracker hamesha badhta rahega (memory) aur purana tracked data lautaayega. Scoped DbContext ko singleton mein inject karna <b>captive dependency</b> hai; scope validation (Development environment mein by default chaalu) ke saath yeh <i>\"Cannot consume scoped service ... from singleton ...\"</i> se fail hota hai.</li>\n<li><b>AddDbContextPool</b>: context instances ko ek pool se dobara use karta hai (default size 1024) aur requests ke beech unki state reset karta hai. Bahut zyaada traffic wali APIs mein allocation aur setup ka kharch bachaata hai. Niyam: context class apni per-request state (fields) na rakhe, kyonki instance dobara use hota hai; aur uska constructor sirf <code>DbContextOptions</code> le (koi scoped services nahi), kyonki woh har request par nahi, har pooled instance ke liye ek baar chalta hai.</li>\n<li><code>BackgroundService</code> (ek singleton) mein har unit of work ke liye <code>IServiceScopeFactory.CreateScope()</code> se scope banao — ya factory use karo.</li>\n</ul>\n<p><b>Kab use karein:</b> normal web APIs ke liye seedha <code>AddDbContext</code> (Scoped); background jobs, Blazor Server aur parallel tasks ke liye factory; pooling sirf tab, jab load test dikhaaye ki context banane ka kharch maayne rakhta hai. <b>Kab nahi:</b> DbContext ko Singleton register mat karo, static field mein mat rakho, aur ek instance ko threads ke beech share mat karo — aur agar aapki context class request-specific fields rakhti hai (jaise har request par set hone wala tenant id), to unhe reset kiye bina pooling par mat jao.</p>"
      },
      code: [
        {
          caption: {
            en: "A singleton that captures a scoped DbContext fails at start-up",
            hi: "Scoped DbContext पकड़ने वाला singleton start-up पर फ़ेल होता है",
            hg: "Scoped DbContext pakadne wala singleton start-up par fail hota hai"
          },
          src: "using Microsoft.EntityFrameworkCore;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddDbContext<CrmContext>(o => o.UseSqlite(\"Data Source=:memory:\"));\nservices.AddSingleton<TicketCounter>();                // lives for the whole app...\n\ntry\n{\n    // ASP.NET Core does this check at start-up in Development.\n    using var provider = services.BuildServiceProvider(\n        new ServiceProviderOptions { ValidateScopes = true, ValidateOnBuild = true });\n}\ncatch (AggregateException ex)\n{\n    Console.WriteLine(ex.InnerExceptions[0].Message);  // ...but needs a per-request DbContext\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}\n\npublic class TicketCounter(CrmContext db)\n{\n    public int Count() => db.Tickets.Count();\n}",
          check: "run",
          expected: "Error while validating the service descriptor 'ServiceType: TicketCounter Lifetime: Singleton ImplementationType: TicketCounter': Cannot consume scoped service 'CrmContext' from singleton 'TicketCounter'.",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
        }
      ]
    },
    {
      id: "model-configuration",
      depth: "detailed",
      title: {
        en: "Model configuration: annotations, configuration classes, precision",
        hi: "Model configuration: annotations, configuration classes और precision",
        hg: "Model configuration: annotations, configuration classes, precision"
      },
      body: {
        en: "<ul>\n<li><b>Data annotations</b> (<code>[MaxLength(100)]</code>, <code>[Required]</code>) are quick but limited and put database details on your domain class.</li>\n<li>Large models: one <code>IEntityTypeConfiguration&lt;T&gt;</code> class per entity and <code>modelBuilder.ApplyConfigurationsFromAssembly(...)</code> keep <code>OnModelCreating</code> short.</li>\n<li>Set <b>lengths and decimal precision</b> on purpose: <code>nvarchar(max)</code> columns cannot be index key columns on SQL Server, and a <code>decimal</code> without precision gets EF's default <code>decimal(18,2)</code> plus a warning.</li>\n</ul>\n<p><b>When to use:</b> conventions for the obvious parts, Fluent API (in configuration classes) for everything a DBA would care about: lengths, precision, indexes, delete rules. <b>When not:</b> do not leave every string as <code>nvarchar(max)</code> and every decimal on the default — review the generated DDL the same way you would review a hand-written <code>CREATE TABLE</code>.</p>",
        hi: "<ul>\n<li><b>Data annotations</b> (<code>[MaxLength(100)]</code>, <code>[Required]</code>) जल्दी लग जाते हैं पर limited हैं, और database की details आपकी domain class पर डाल देते हैं।</li>\n<li>बड़े models: हर entity के लिए एक <code>IEntityTypeConfiguration&lt;T&gt;</code> class और <code>modelBuilder.ApplyConfigurationsFromAssembly(...)</code> से <code>OnModelCreating</code> छोटा रहता है।</li>\n<li><b>Lengths और decimal precision</b> सोच-समझकर set करो: SQL Server पर <code>nvarchar(max)</code> columns index key column नहीं बन सकते, और बिना precision वाले <code>decimal</code> को EF का default <code>decimal(18,2)</code> और एक warning मिलती है।</li>\n</ul>\n<p><b>कब use करें:</b> साफ़-साफ़ हिस्सों के लिए conventions, और जिन चीज़ों की DBA को परवाह होती है उनके लिए Fluent API (configuration classes में): lengths, precision, indexes, delete rules। <b>कब नहीं:</b> हर string को <code>nvarchar(max)</code> और हर decimal को default पर मत छोड़ो — generated DDL को वैसे ही review करो जैसे हाथ से लिखे <code>CREATE TABLE</code> को करते।</p>",
        hg: "<ul>\n<li><b>Data annotations</b> (<code>[MaxLength(100)]</code>, <code>[Required]</code>) jaldi lag jaate hain par limited hain, aur database ki details aapki domain class par daal dete hain.</li>\n<li>Bade models: har entity ke liye ek <code>IEntityTypeConfiguration&lt;T&gt;</code> class aur <code>modelBuilder.ApplyConfigurationsFromAssembly(...)</code> se <code>OnModelCreating</code> chhota rehta hai.</li>\n<li><b>Lengths aur decimal precision</b> soch-samajhkar set karo: SQL Server par <code>nvarchar(max)</code> columns index key column nahi ban sakte, aur bina precision wale <code>decimal</code> ko EF ka default <code>decimal(18,2)</code> aur ek warning milti hai.</li>\n</ul>\n<p><b>Kab use karein:</b> saaf-saaf hisson ke liye conventions, aur jin cheezon ki DBA ko parwaah hoti hai unke liye Fluent API (configuration classes mein): lengths, precision, indexes, delete rules. <b>Kab nahi:</b> har string ko <code>nvarchar(max)</code> aur har decimal ko default par mat chhodo — generated DDL ko waise hi review karo jaise haath se likhe <code>CREATE TABLE</code> ko karte.</p>"
      },
      code: [
        {
          caption: {
            en: "Entities + conventions + Fluent API → the SQL Server DDL EF generates (no server needed: EF only writes the SQL text)",
            hi: "Entities + conventions + Fluent API → EF का बनाया SQL Server DDL (server की ज़रूरत नहीं: EF सिर्फ़ SQL text लिखता है)",
            hg: "Entities + conventions + Fluent API → EF ka banaya SQL Server DDL (server ki zaroorat nahi: EF sirf SQL text likhta hai)"
          },
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          expected: "CREATE TABLE [Customers] (\n    [Id] int NOT NULL IDENTITY,\n    [Name] nvarchar(100) NOT NULL,\n    [City] nvarchar(50) NULL,\n    [Email] nvarchar(200) NOT NULL,\n    CONSTRAINT [PK_Customers] PRIMARY KEY ([Id])\n);\nGO\n\n\nCREATE TABLE [Orders] (\n    [Id] int NOT NULL IDENTITY,\n    [OrderDate] date NOT NULL,\n    [Total] decimal(10,2) NOT NULL,\n    [CustomerId] int NOT NULL,\n    CONSTRAINT [PK_Orders] PRIMARY KEY ([Id]),\n    CONSTRAINT [FK_Orders_Customers_CustomerId] FOREIGN KEY ([CustomerId]) REFERENCES [Customers] ([Id]) ON DELETE CASCADE\n);\nGO\n\n\nCREATE UNIQUE INDEX [IX_Customers_Email] ON [Customers] ([Email]);\nGO\n\n\nCREATE INDEX [IX_Orders_CustomerId] ON [Orders] ([CustomerId]);\nGO",
          src: "using Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\n\n// Dummy connection string: nothing connects, EF only generates SQL text.\nvar options = new DbContextOptionsBuilder<ShopContext>()\n    .UseSqlServer(\"Server=.;Database=Shop;Trusted_Connection=True;\")\n    .Options;\nusing var db = new ShopContext(options);\nConsole.WriteLine(db.Database.GenerateCreateScript());\n\n/* Output (GO lines removed):\nCREATE TABLE [Customers] (\n    [Id] int NOT NULL IDENTITY,\n    [Name] nvarchar(100) NOT NULL,\n    [City] nvarchar(50) NULL,\n    [Email] nvarchar(200) NOT NULL,\n    CONSTRAINT [PK_Customers] PRIMARY KEY ([Id])\n);\nCREATE TABLE [Orders] (\n    [Id] int NOT NULL IDENTITY,\n    [OrderDate] date NOT NULL,\n    [Total] decimal(10,2) NOT NULL,\n    [CustomerId] int NOT NULL,\n    CONSTRAINT [PK_Orders] PRIMARY KEY ([Id]),\n    CONSTRAINT [FK_Orders_Customers_CustomerId] FOREIGN KEY ([CustomerId])\n        REFERENCES [Customers] ([Id]) ON DELETE CASCADE\n);\nCREATE UNIQUE INDEX [IX_Customers_Email] ON [Customers] ([Email]);\nCREATE INDEX [IX_Orders_CustomerId] ON [Orders] ([CustomerId]);   -- EF adds an index for the FK\n*/\n\npublic class Customer\n{\n    public int Id { get; set; }                  // \"Id\" -> primary key, IDENTITY\n    public string Name { get; set; } = \"\";       // string  -> NOT NULL\n    public string? City { get; set; }            // string? -> NULL\n    public string Email { get; set; } = \"\";\n    public List<Order> Orders { get; } = [];     // one customer, many orders\n}\n\npublic class Order\n{\n    public int Id { get; set; }\n    public DateOnly OrderDate { get; set; }      // -> date\n    public decimal Total { get; set; }\n    public int CustomerId { get; set; }          // FK by convention (required: int, not int?)\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();   // table name \"Customers\"\n    public DbSet<Order> Orders => Set<Order>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n    {\n        // picks up every IEntityTypeConfiguration<T> in this assembly\n        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ShopContext).Assembly);\n    }\n}\n\npublic class CustomerConfiguration : IEntityTypeConfiguration<Customer>\n{\n    public void Configure(EntityTypeBuilder<Customer> b)\n    {\n        b.Property(c => c.Name).HasMaxLength(100);\n        b.Property(c => c.City).HasMaxLength(50);\n        b.Property(c => c.Email).HasMaxLength(200);\n        b.HasIndex(c => c.Email).IsUnique();\n    }\n}\n\npublic class OrderConfiguration : IEntityTypeConfiguration<Order>\n{\n    public void Configure(EntityTypeBuilder<Order> b)\n    {\n        b.Property(o => o.Total).HasPrecision(10, 2);\n    }\n}"
        }
      ]
    },
    {
      id: "db-first-scaffolding",
      depth: "detailed",
      title: {
        en: "Database-First: scaffolding from an existing database",
        hi: "Database-First: मौजूदा database से scaffolding",
        hg: "Database-First: maujooda database se scaffolding"
      },
      body: {
        en: "<ul>\n<li><b>Database-First</b>: an existing database is the truth (often owned by a DBA team). You <b>scaffold</b> (reverse-engineer) entity classes and a DbContext from it: <code>dotnet ef dbcontext scaffold</code> or <code>Scaffold-DbContext</code>. After the DB changes, you scaffold again.</li>\n<li>EF Core has <b>no EDMX designer</b> (that was the old EF6 on .NET Framework). In EF Core, \"DB-First\" means generated C# code, not a visual model.</li>\n</ul>\n<p><b>When to use:</b> Code-First for new services where the team owns the schema and wants it reviewed in pull requests. DB-First when the database already exists, is shared by many apps, or is changed by DBAs. <b>When not:</b> do not mix both on the same tables (hand-editing the DB and also running migrations) — the model snapshot and the real schema drift apart.</p>",
        hi: "<ul>\n<li><b>Database-First</b>: पहले से बना database truth है (अक्सर DBA team का)। आप उससे entity classes और DbContext <b>scaffold</b> (reverse-engineer) करते हो: <code>dotnet ef dbcontext scaffold</code> या <code>Scaffold-DbContext</code>। DB बदलने के बाद फिर से scaffold करते हो।</li>\n<li>EF Core में <b>EDMX designer नहीं है</b> (वो .NET Framework वाले पुराने EF6 में था)। EF Core में \"DB-First\" मतलब generated C# code, कोई visual model नहीं।</li>\n</ul>\n<p><b>कब use करें:</b> Code-First नई services के लिए, जहाँ schema team का अपना है और उसे pull requests में review करना है। DB-First तब, जब database पहले से है, कई apps share करते हैं, या DBAs उसे बदलते हैं। <b>कब नहीं:</b> एक ही tables पर दोनों मत मिलाओ (DB को हाथ से भी बदलना और migrations भी चलाना) — model snapshot और असली schema अलग-अलग हो जाते हैं।</p>",
        hg: "<ul>\n<li><b>Database-First</b>: pehle se bana database truth hai (aksar DBA team ka). Aap usse entity classes aur DbContext <b>scaffold</b> (reverse-engineer) karte ho: <code>dotnet ef dbcontext scaffold</code> ya <code>Scaffold-DbContext</code>. DB badalne ke baad phir se scaffold karte ho.</li>\n<li>EF Core mein <b>EDMX designer nahi hai</b> (woh .NET Framework wale purane EF6 mein tha). EF Core mein \"DB-First\" matlab generated C# code, koi visual model nahi.</li>\n</ul>\n<p><b>Kab use karein:</b> Code-First nayi services ke liye, jahan schema team ka apna hai aur use pull requests mein review karna hai. DB-First tab, jab database pehle se hai, kai apps share karte hain, ya DBAs use badalte hain. <b>Kab nahi:</b> ek hi tables par dono mat milao (DB ko haath se bhi badalna aur migrations bhi chalana) — model snapshot aur asli schema alag-alag ho jaate hain.</p>"
      },
      code: [
        {
          caption: {
            en: "Scaffold entities and a DbContext (terminal command)",
            hi: "Entities और DbContext scaffold करना (terminal command)",
            hg: "Entities aur DbContext scaffold karna (terminal command)"
          },
          lang: "bash",
          check: "none",
          src: "# Database-First: generate entity classes + a DbContext from an existing database\ndotnet ef dbcontext scaffold \"Server=.;Database=Crm;Trusted_Connection=True;TrustServerCertificate=True\" Microsoft.EntityFrameworkCore.SqlServer -o Models\n# the database changed? scaffold again (add --force to overwrite the generated files)"
        }
      ]
    },
    {
      id: "migrations-in-production",
      depth: "detailed",
      title: {
        en: "Migrations in production: review, roll back, script and bundle",
        hi: "Production में migrations: review, rollback, script और bundle",
        hg: "Production mein migrations: review, rollback, script aur bundle"
      },
      body: {
        en: "<ul>\n<li><b>Review every migration</b> like SQL code in a pull request. If EF thinks a change can lose data (dropping a column, shrinking a length), it warns: <i>\"An operation was scaffolded that may result in the loss of data.\"</i> You can add your own SQL with <code>migrationBuilder.Sql(\"...\")</code> for data fixes.</li>\n<li><code>dotnet ef database update</code> applies all pending migrations and adds a row per migration to <code>__EFMigrationsHistory</code>. <code>dotnet ef database update &lt;OlderMigration&gt;</code> rolls back by running the <code>Down()</code> methods.</li>\n<li><code>dotnet ef migrations remove</code> deletes the last migration — only safe while it has not been applied anywhere shared.</li>\n<li><b>Production</b> (Microsoft's docs recommend SQL scripts first): a <b>SQL script</b> that a DBA or pipeline reviews and runs — <code>migrations script --idempotent</code> makes it safe to run on any version of the DB; or a <b>migration bundle</b> (<code>migrations bundle</code>, EF Core 6+) — a small executable your CD pipeline runs. Calling <code>db.Database.Migrate()</code> at app startup is easy, but in production the app needs DDL rights, a failed migration blocks startup, and nobody reviews the SQL (EF Core 9 added a lock so several instances do not apply the same migration twice, but those issues remain).</li>\n</ul>\n<p><b>When to use:</b> migrations for every schema change in Code-First projects, committed with the code change, reviewed in the PR, and applied by the pipeline (script or bundle). <b>When not:</b> do not edit or delete a migration that is already applied to a shared database — add a new one; do not run <code>Migrate()</code> on startup for multi-instance production apps; and do not change the database by hand behind EF's back.</p>",
        hi: "<ul>\n<li><b>हर migration review करो</b>, pull request में SQL code की तरह। अगर EF को लगे कि किसी बदलाव से data जा सकता है (column drop करना, length छोटी करना), तो वो warning देता है: <i>\"An operation was scaffolded that may result in the loss of data.\"</i> Data fixes के लिए <code>migrationBuilder.Sql(\"...\")</code> से अपना SQL जोड़ सकते हो।</li>\n<li><code>dotnet ef database update</code> सारे pending migrations apply करता है और हर migration की एक row <code>__EFMigrationsHistory</code> में जोड़ता है। <code>dotnet ef database update &lt;OlderMigration&gt;</code> <code>Down()</code> methods चलाकर rollback करता है।</li>\n<li><code>dotnet ef migrations remove</code> आख़िरी migration delete करता है — यह तभी safe है जब वो किसी shared जगह apply न हुआ हो।</li>\n<li><b>Production</b> (Microsoft के docs सबसे पहले SQL scripts recommend करते हैं): एक <b>SQL script</b> जिसे DBA या pipeline review करके चलाए — <code>migrations script --idempotent</code> उसे DB के किसी भी version पर चलाने लायक safe बनाता है; या एक <b>migration bundle</b> (<code>migrations bundle</code>, EF Core 6+) — एक छोटा executable जिसे आपकी CD pipeline चलाती है। App startup पर <code>db.Database.Migrate()</code> call करना आसान है, पर production में app को DDL rights चाहिए, failed migration startup रोक देता है, और SQL कोई review नहीं करता (EF Core 9 ने lock जोड़ा ताकि कई instances एक ही migration दो बार apply न करें, पर ये issues बने रहते हैं)।</li>\n</ul>\n<p><b>कब use करें:</b> Code-First projects में हर schema बदलाव के लिए migration — code change के साथ commit, PR में review, और pipeline से apply (script या bundle)। <b>कब नहीं:</b> जो migration किसी shared database पर apply हो चुका है उसे edit या delete मत करो — नया migration जोड़ो; multi-instance production apps में startup पर <code>Migrate()</code> मत चलाओ; और EF को बताए बिना database हाथ से मत बदलो।</p>",
        hg: "<ul>\n<li><b>Har migration review karo</b>, pull request mein SQL code ki tarah. Agar EF ko lage ki kisi badlaav se data ja sakta hai (column drop karna, length chhoti karna), to woh warning deta hai: <i>\"An operation was scaffolded that may result in the loss of data.\"</i> Data fixes ke liye <code>migrationBuilder.Sql(\"...\")</code> se apna SQL jod sakte ho.</li>\n<li><code>dotnet ef database update</code> saare pending migrations apply karta hai aur har migration ki ek row <code>__EFMigrationsHistory</code> mein jodta hai. <code>dotnet ef database update &lt;OlderMigration&gt;</code> <code>Down()</code> methods chalakar rollback karta hai.</li>\n<li><code>dotnet ef migrations remove</code> aakhri migration delete karta hai — yeh tabhi safe hai jab woh kisi shared jagah apply na hua ho.</li>\n<li><b>Production</b> (Microsoft ke docs sabse pehle SQL scripts recommend karte hain): ek <b>SQL script</b> jise DBA ya pipeline review karke chalaaye — <code>migrations script --idempotent</code> use DB ke kisi bhi version par chalaane laayak safe banata hai; ya ek <b>migration bundle</b> (<code>migrations bundle</code>, EF Core 6+) — ek chhota executable jise aapki CD pipeline chalaati hai. App startup par <code>db.Database.Migrate()</code> call karna aasaan hai, par production mein app ko DDL rights chahiye, failed migration startup rok deta hai, aur SQL koi review nahi karta (EF Core 9 ne lock joda taaki kai instances ek hi migration do baar apply na karein, par yeh issues bane rehte hain).</li>\n</ul>\n<p><b>Kab use karein:</b> Code-First projects mein har schema badlaav ke liye migration — code change ke saath commit, PR mein review, aur pipeline se apply (script ya bundle). <b>Kab nahi:</b> jo migration kisi shared database par apply ho chuka hai use edit ya delete mat karo — naya migration jodo; multi-instance production apps mein startup par <code>Migrate()</code> mat chalao; aur EF ko bataaye bina database haath se mat badlo.</p>"
      },
      code: [
        {
          caption: {
            en: "The migration workflow from the command line (text only — run these in your own project)",
            hi: "Command line से migration workflow (सिर्फ़ text — इन्हें अपने project में चलाओ)",
            hg: "Command line se migration workflow (sirf text — inhe apne project mein chalao)"
          },
          check: "none",
          src: "# one-time setup\ndotnet tool install --global dotnet-ef\ndotnet add package Microsoft.EntityFrameworkCore.Design\n\n# 1. change your entities, then create a migration (does NOT touch the DB)\ndotnet ef migrations add AddCustomerCity\n#   -> Migrations/<timestamp>_AddCustomerCity.cs           Up() / Down()\n#   -> Migrations/<timestamp>_AddCustomerCity.Designer.cs   metadata\n#   -> Migrations/CrmContextModelSnapshot.cs               updated \"current model\"\n\n# 2. apply to your local database\ndotnet ef database update\n\n# oops, not applied anywhere yet? remove the last migration\ndotnet ef migrations remove\n\n# roll the database back to an earlier migration (runs Down())\ndotnet ef database update AddCustomers\n\n# 3. production, option A: a reviewed SQL script, safe on any DB version\ndotnet ef migrations script --idempotent -o migrate.sql\n\n# 3. production, option B: a migration bundle (EF Core 6+) run by the CD pipeline\ndotnet ef migrations bundle -o efbundle.exe\n./efbundle.exe --connection \"<production connection string>\""
        },
        {
          caption: {
            en: "What a generated migration looks like, with the SQL Server SQL that Up() and Down() produce",
            hi: "Generated migration कैसा दिखता है, और Up() व Down() से बनने वाला SQL Server SQL",
            hg: "Generated migration kaisa dikhta hai, aur Up() va Down() se banne wala SQL Server SQL"
          },
          check: "compile",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          src: "using Microsoft.EntityFrameworkCore.Migrations;\n\npublic partial class AddCustomerCity : Migration\n{\n    protected override void Up(MigrationBuilder migrationBuilder)\n    {\n        // ALTER TABLE [Customers] ADD [City] nvarchar(50) NULL;\n        migrationBuilder.AddColumn<string>(\n            name: \"City\",\n            table: \"Customers\",\n            type: \"nvarchar(50)\",\n            maxLength: 50,\n            nullable: true);\n\n        // CREATE INDEX [IX_Customers_City] ON [Customers] ([City]);\n        migrationBuilder.CreateIndex(\n            name: \"IX_Customers_City\",\n            table: \"Customers\",\n            column: \"City\");\n\n        // Your own data fix, reviewed with the rest of the migration\n        migrationBuilder.Sql(\"UPDATE [Customers] SET [City] = N'Unknown' WHERE [City] IS NULL;\");\n    }\n\n    protected override void Down(MigrationBuilder migrationBuilder)\n    {\n        // DROP INDEX [IX_Customers_City] ON [Customers];\n        migrationBuilder.DropIndex(\n            name: \"IX_Customers_City\",\n            table: \"Customers\");\n\n        // ALTER TABLE [Customers] DROP COLUMN [City];  (after dropping any default constraint)\n        migrationBuilder.DropColumn(\n            name: \"City\",\n            table: \"Customers\");\n    }\n}"
        }
      ]
    },
    {
      id: "one-to-one-and-delete-rules",
      depth: "detailed",
      title: {
        en: "1:1 relationships, join entities and delete rules",
        hi: "1:1 relationships, join entities और delete rules",
        hg: "1:1 relationships, join entities aur delete rules"
      },
      body: {
        en: "<p><b>Analogy — the school office again:</b> each student row in the register has a column \"class teacher\" (1:N — the FK lives with the student). The ID-card counter keeps one card per student and refuses a second one (1:1 — a unique rule). The enrolment register has one line per (student, course) pair (N:N — a join table). And the office has rules for leaving: if a student leaves, his ID card is cancelled too (<b>cascade</b>), but a teacher cannot leave while students are still assigned to her (<b>restrict</b>).</p>\n<ul>\n<li><b>Principal</b> = the \"one\" side that is referenced (Teacher). <b>Dependent</b> = the side that holds the FK (Student). The Fluent API reads like a sentence: <code>HasOne(s =&gt; s.Teacher).WithMany(t =&gt; t.Students).HasForeignKey(s =&gt; s.TeacherId)</code>.</li>\n<li><b>1:1</b>: <code>HasOne(...).WithOne(...).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code> — the generic argument tells EF which side is the dependent. SQL: FK + <b>unique index</b>.</li>\n<li><b>Payload</b>: when the link itself has data (enrolment date, grade), make it a normal entity (<code>Enrollment</code> with <code>StudentId</code>, <code>CourseId</code>, <code>EnrolledOn</code>) — two 1:N relationships. You can still keep skip navigations through it with <code>UsingEntity&lt;Enrollment&gt;()</code>.</li>\n<li><b>Delete behaviour</b>: required relationships default to <code>Cascade</code> (database <code>ON DELETE CASCADE</code>); optional ones to <code>ClientSetNull</code> (EF sets the FK to NULL for tracked dependents; the database has no action). <code>Restrict</code>/<code>NoAction</code> put no cascade in the database, so the database blocks the delete while children exist. For a <b>required</b> FK the delete fails; for an <b>optional</b> FK, EF still sets the FK of <b>tracked</b> children to NULL (only <code>ClientNoAction</code> stops that). SQL Server rejects \"multiple cascade paths\", so on complex models you switch some FKs to <code>Restrict</code>.</li>\n</ul>\n<p><b>When to use:</b> skip navigations for pure link tables; an explicit join entity as soon as the link carries data; explicit Fluent API whenever the convention is not obvious to a reader (1:1, custom FK names, delete rules). <b>When not:</b> do not rely on cascade delete for business rules you have not agreed with the team — deleting one customer can silently delete years of orders; and do not hand-write join tables in code when a skip navigation is enough.</p>",
        hi: "<p><b>Analogy — फिर से school office:</b> register में हर student की row में \"class teacher\" का एक column है (1:N — FK student के साथ रहता है)। ID-card counter हर student का एक ही card रखता है और दूसरा मना कर देता है (1:1 — एक unique नियम)। Enrolment register में हर (student, course) जोड़ी की एक line है (N:N — एक join table)। और office में छोड़ने के नियम हैं: student school छोड़े तो उसका ID card भी cancel (<b>cascade</b>), पर teacher तब तक नहीं छोड़ सकती जब तक उसके students assigned हैं (<b>restrict</b>)।</p>\n<ul>\n<li><b>Principal</b> = \"एक\" वाली side जिसे refer किया जाता है (Teacher)। <b>Dependent</b> = वो side जिसके पास FK है (Student)। Fluent API एक sentence की तरह पढ़ता है: <code>HasOne(s =&gt; s.Teacher).WithMany(t =&gt; t.Students).HasForeignKey(s =&gt; s.TeacherId)</code>।</li>\n<li><b>1:1</b>: <code>HasOne(...).WithOne(...).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code> — generic argument EF को बताता है कि dependent कौन सी side है। SQL: FK + <b>unique index</b>।</li>\n<li><b>Payload</b>: जब link का अपना data हो (enrolment date, grade), तो उसे normal entity बनाओ (<code>StudentId</code>, <code>CourseId</code>, <code>EnrolledOn</code> वाली <code>Enrollment</code>) — दो 1:N relationships। <code>UsingEntity&lt;Enrollment&gt;()</code> से उसके through skip navigations फिर भी रख सकते हो।</li>\n<li><b>Delete behaviour</b>: required relationships का default <code>Cascade</code> है (database में <code>ON DELETE CASCADE</code>); optional का <code>ClientSetNull</code> (EF tracked dependents का FK NULL कर देता है; database में कोई action नहीं)। <code>Restrict</code>/<code>NoAction</code> database में कोई cascade नहीं रखते, इसलिए children रहते हुए database delete रोक देता है। <b>Required</b> FK पर delete fail होता है; <b>optional</b> FK पर EF फिर भी <b>tracked</b> children का FK NULL कर देता है (इसे सिर्फ़ <code>ClientNoAction</code> रोकता है)। SQL Server \"multiple cascade paths\" मना करता है, इसलिए complex models में कुछ FKs को <code>Restrict</code> करना पड़ता है।</li>\n</ul>\n<p><b>कब use करें:</b> सिर्फ़ link वाली tables के लिए skip navigations; link पर data आते ही explicit join entity; और जहाँ convention पढ़ने वाले को साफ़ न दिखे वहाँ explicit Fluent API (1:1, custom FK names, delete rules)। <b>कब नहीं:</b> जिन business rules पर team से बात नहीं हुई, उनके लिए cascade delete पर भरोसा मत करो — एक customer delete करने से सालों के orders चुपचाप delete हो सकते हैं; और जब skip navigation काफ़ी हो तो code में join tables हाथ से मत लिखो।</p>",
        hg: "<p><b>Analogy — phir se school office:</b> register mein har student ki row mein \"class teacher\" ka ek column hai (1:N — FK student ke saath rehta hai). ID-card counter har student ka ek hi card rakhta hai aur doosra mana kar deta hai (1:1 — ek unique niyam). Enrolment register mein har (student, course) jodi ki ek line hai (N:N — ek join table). Aur office mein chhodne ke niyam hain: student school chhode to uska ID card bhi cancel (<b>cascade</b>), par teacher tab tak nahi chhod sakti jab tak uske students assigned hain (<b>restrict</b>).</p>\n<ul>\n<li><b>Principal</b> = \"ek\" wali side jise refer kiya jaata hai (Teacher). <b>Dependent</b> = woh side jiske paas FK hai (Student). Fluent API ek sentence ki tarah padhta hai: <code>HasOne(s =&gt; s.Teacher).WithMany(t =&gt; t.Students).HasForeignKey(s =&gt; s.TeacherId)</code>.</li>\n<li><b>1:1</b>: <code>HasOne(...).WithOne(...).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code> — generic argument EF ko batata hai ki dependent kaunsi side hai. SQL: FK + <b>unique index</b>.</li>\n<li><b>Payload</b>: jab link ka apna data ho (enrolment date, grade), to use normal entity banao (<code>StudentId</code>, <code>CourseId</code>, <code>EnrolledOn</code> wali <code>Enrollment</code>) — do 1:N relationships. <code>UsingEntity&lt;Enrollment&gt;()</code> se uske through skip navigations phir bhi rakh sakte ho.</li>\n<li><b>Delete behaviour</b>: required relationships ka default <code>Cascade</code> hai (database mein <code>ON DELETE CASCADE</code>); optional ka <code>ClientSetNull</code> (EF tracked dependents ka FK NULL kar deta hai; database mein koi action nahi). <code>Restrict</code>/<code>NoAction</code> database mein koi cascade nahi rakhte, isliye children rehte hue database delete rok deta hai. <b>Required</b> FK par delete fail hota hai; <b>optional</b> FK par EF phir bhi <b>tracked</b> children ka FK NULL kar deta hai (ise sirf <code>ClientNoAction</code> rokta hai). SQL Server \"multiple cascade paths\" mana karta hai, isliye complex models mein kuch FKs ko <code>Restrict</code> karna padta hai.</li>\n</ul>\n<p><b>Kab use karein:</b> sirf link wali tables ke liye skip navigations; link par data aate hi explicit join entity; aur jahan convention padhne wale ko saaf na dikhe wahan explicit Fluent API (1:1, custom FK names, delete rules). <b>Kab nahi:</b> jin business rules par team se baat nahi hui, unke liye cascade delete par bharosa mat karo — ek customer delete karne se saalon ke orders chupchaap delete ho sakte hain; aur jab skip navigation kaafi ho to code mein join tables haath se mat likho.</p>"
      },
      code: [
        {
          caption: {
            en: "A school model: 1:N with Restrict, 1:1 with a unique index, N:N with a named join table — and the SQL Server DDL it produces",
            hi: "School model: Restrict वाला 1:N, unique index वाला 1:1, named join table वाला N:N — और उससे बनने वाला SQL Server DDL",
            hg: "School model: Restrict wala 1:N, unique index wala 1:1, named join table wala N:N — aur usse banne wala SQL Server DDL"
          },
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          expected: "CREATE TABLE [Courses] (\n    [Id] int NOT NULL IDENTITY,\n    [Title] nvarchar(max) NOT NULL,\n    CONSTRAINT [PK_Courses] PRIMARY KEY ([Id])\n);\nGO\n\n\nCREATE TABLE [Teachers] (\n    [Id] int NOT NULL IDENTITY,\n    [Name] nvarchar(max) NOT NULL,\n    CONSTRAINT [PK_Teachers] PRIMARY KEY ([Id])\n);\nGO\n\n\nCREATE TABLE [Students] (\n    [Id] int NOT NULL IDENTITY,\n    [Name] nvarchar(max) NOT NULL,\n    [TeacherId] int NOT NULL,\n    CONSTRAINT [PK_Students] PRIMARY KEY ([Id]),\n    CONSTRAINT [FK_Students_Teachers_TeacherId] FOREIGN KEY ([TeacherId]) REFERENCES [Teachers] ([Id]) ON DELETE NO ACTION\n);\nGO\n\n\nCREATE TABLE [Enrolments] (\n    [CoursesId] int NOT NULL,\n    [StudentsId] int NOT NULL,\n    CONSTRAINT [PK_Enrolments] PRIMARY KEY ([CoursesId], [StudentsId]),\n    CONSTRAINT [FK_Enrolments_Courses_CoursesId] FOREIGN KEY ([CoursesId]) REFERENCES [Courses] ([Id]) ON DELETE CASCADE,\n    CONSTRAINT [FK_Enrolments_Students_StudentsId] FOREIGN KEY ([StudentsId]) REFERENCES [Students] ([Id]) ON DELETE CASCADE\n);\nGO\n\n\nCREATE TABLE [IdCards] (\n    [Id] int NOT NULL IDENTITY,\n    [CardNumber] nvarchar(max) NOT NULL,\n    [StudentId] int NOT NULL,\n    CONSTRAINT [PK_IdCards] PRIMARY KEY ([Id]),\n    CONSTRAINT [FK_IdCards_Students_StudentId] FOREIGN KEY ([StudentId]) REFERENCES [Students] ([Id]) ON DELETE CASCADE\n);\nGO\n\n\nCREATE INDEX [IX_Enrolments_StudentsId] ON [Enrolments] ([StudentsId]);\nGO\n\n\nCREATE UNIQUE INDEX [IX_IdCards_StudentId] ON [IdCards] ([StudentId]);\nGO\n\n\nCREATE INDEX [IX_Students_TeacherId] ON [Students] ([TeacherId]);\nGO\n\n\n\nSELECT [s].[Id], [s].[Name], [s].[TeacherId]\nFROM [Students] AS [s]\nWHERE EXISTS (\n    SELECT 1\n    FROM [Enrolments] AS [e]\n    INNER JOIN [Courses] AS [c] ON [e].[CoursesId] = [c].[Id]\n    WHERE [s].[Id] = [e].[StudentsId] AND [c].[Title] = N'SQL')",
          src: "using Microsoft.EntityFrameworkCore;\n\nvar options = new DbContextOptionsBuilder<SchoolContext>()\n    .UseSqlServer(\"Server=.;Database=School;Trusted_Connection=True;\")   // dummy: no connection is made\n    .Options;\nusing var db = new SchoolContext(options);\nConsole.WriteLine(db.Database.GenerateCreateScript());\nConsole.WriteLine(db.Students.Where(s => s.Courses.Any(c => c.Title == \"SQL\")).ToQueryString());\n\n/* Output, the interesting lines (GO lines removed):\nCREATE TABLE [Students] ( ... [TeacherId] int NOT NULL,\n    CONSTRAINT [FK_Students_Teachers_TeacherId] FOREIGN KEY ([TeacherId])\n        REFERENCES [Teachers] ([Id]) ON DELETE NO ACTION );          -- Restrict\nCREATE TABLE [Enrolments] (                                            -- N:N join table\n    [CoursesId] int NOT NULL,\n    [StudentsId] int NOT NULL,\n    CONSTRAINT [PK_Enrolments] PRIMARY KEY ([CoursesId], [StudentsId]),\n    CONSTRAINT [FK_Enrolments_Courses_CoursesId] FOREIGN KEY ([CoursesId])\n        REFERENCES [Courses] ([Id]) ON DELETE CASCADE,\n    CONSTRAINT [FK_Enrolments_Students_StudentsId] FOREIGN KEY ([StudentsId])\n        REFERENCES [Students] ([Id]) ON DELETE CASCADE );\nCREATE TABLE [IdCards] ( ... [StudentId] int NOT NULL,\n    CONSTRAINT [FK_IdCards_Students_StudentId] FOREIGN KEY ([StudentId])\n        REFERENCES [Students] ([Id]) ON DELETE CASCADE );              -- required -> cascade\nCREATE INDEX [IX_Enrolments_StudentsId] ON [Enrolments] ([StudentsId]);\nCREATE UNIQUE INDEX [IX_IdCards_StudentId] ON [IdCards] ([StudentId]); -- this makes it 1:1\nCREATE INDEX [IX_Students_TeacherId] ON [Students] ([TeacherId]);\n\nSELECT [s].[Id], [s].[Name], [s].[TeacherId]\nFROM [Students] AS [s]\nWHERE EXISTS (\n    SELECT 1\n    FROM [Enrolments] AS [e]\n    INNER JOIN [Courses] AS [c] ON [e].[CoursesId] = [c].[Id]\n    WHERE [s].[Id] = [e].[StudentsId] AND [c].[Title] = N'SQL')\n*/\n\npublic class Teacher\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<Student> Students { get; } = [];      // 1:N principal\n}\n\npublic class Student\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public int TeacherId { get; set; }                // required FK\n    public Teacher Teacher { get; set; } = null!;\n    public IdCard? IdCard { get; set; }               // 1:1 (optional for the student)\n    public List<Course> Courses { get; } = [];        // N:N skip navigation\n}\n\npublic class IdCard\n{\n    public int Id { get; set; }\n    public string CardNumber { get; set; } = \"\";\n    public int StudentId { get; set; }                // FK on the dependent side\n    public Student Student { get; set; } = null!;\n}\n\npublic class Course\n{\n    public int Id { get; set; }\n    public string Title { get; set; } = \"\";\n    public List<Student> Students { get; } = [];      // N:N skip navigation\n}\n\npublic class SchoolContext(DbContextOptions<SchoolContext> options) : DbContext(options)\n{\n    public DbSet<Teacher> Teachers => Set<Teacher>();\n    public DbSet<Student> Students => Set<Student>();\n    public DbSet<IdCard> IdCards => Set<IdCard>();\n    public DbSet<Course> Courses => Set<Course>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n    {\n        // 1:N — a teacher with students cannot be deleted\n        modelBuilder.Entity<Student>()\n            .HasOne(s => s.Teacher)\n            .WithMany(t => t.Students)\n            .HasForeignKey(s => s.TeacherId)\n            .OnDelete(DeleteBehavior.Restrict);\n\n        // 1:1 — IdCard is the dependent (it holds the FK)\n        modelBuilder.Entity<Student>()\n            .HasOne(s => s.IdCard)\n            .WithOne(c => c.Student)\n            .HasForeignKey<IdCard>(c => c.StudentId);\n\n        // N:N — EF creates the join table; we only choose its name\n        modelBuilder.Entity<Student>()\n            .HasMany(s => s.Courses)\n            .WithMany(c => c.Students)\n            .UsingEntity(j => j.ToTable(\"Enrolments\"));\n    }\n}"
        }
      ]
    },
    {
      id: "filtered-include-split-queries",
      depth: "detailed",
      title: {
        en: "Filtered Include, split queries and lazy-loading proxies",
        hi: "Filtered Include, split queries और lazy-loading proxies",
        hg: "Filtered Include, split queries aur lazy-loading proxies"
      },
      body: {
        en: "<p><b>Analogy — a quick-commerce grocery app:</b> you can put everything in <b>one order</b> and get one delivery (eager). You can place an <b>add-on order</b> later when you decide you need curd (explicit). Or imagine an auto-mode where the app sends a rider <b>every time</b> you open the fridge and something is missing (lazy) — no planning needed, but on a busy day twenty riders ring your bell.</p>\n<ul>\n<li><b>Include</b> = a JOIN in the same SQL. A <b>required reference</b> (<code>Order.Customer</code>) becomes an <code>INNER JOIN</code>; a <b>collection</b> (<code>Customer.Orders</code>) becomes a <code>LEFT JOIN</code> plus <code>ORDER BY</code> on the keys, so EF can group the flat rows back into objects.</li>\n<li><b>Filtered Include</b> (EF Core 5+): <code>Include(c =&gt; c.Orders.Where(o =&gt; o.Total &gt; 500).OrderByDescending(o =&gt; o.Total))</code> loads only some children. The filter goes into the JOIN's subquery.</li>\n<li>Two or more collection Includes on one query multiply rows (<b>cartesian explosion</b>). <code>AsSplitQuery()</code> sends one SQL per collection instead — Day 6 covers the trade-off.</li>\n<li><b>Lazy</b>: package <code>Microsoft.EntityFrameworkCore.Proxies</code>, <code>options.UseLazyLoadingProxies()</code>, and every navigation <code>public virtual</code> (EF creates a runtime subclass, a proxy, that overrides the getter). The context must still be alive when you touch the navigation.</li>\n<li><b>Relationship fix-up</b>: whatever loading style you use, EF connects tracked entities to each other automatically. If you load orders and later load their customer in the same context, <code>order.Customer</code> fills itself.</li>\n<li>To see the SQL: <code>query.ToQueryString()</code> (no execution) or <code>optionsBuilder.LogTo(Console.WriteLine)</code> while developing.</li>\n</ul>\n<p><b>When to use:</b> <code>Include</code> for data every caller of that endpoint needs; explicit loading (or <code>.Query().Count()</code>) for data needed only on some branches; lazy loading only in small desktop/tooling apps where convenience matters more than query count. <b>When not:</b> do not chain Includes \"for safety\" — every one makes the SQL heavier; do not use lazy loading in web APIs or loops (hidden N+1); and if you need only a few columns, a projection with <code>Select</code> beats loading whole entity graphs (Day 6).</p>",
        hi: "<p><b>Analogy — quick-commerce grocery app:</b> आप सब कुछ <b>एक order</b> में डालकर एक delivery ले सकते हो (eager)। बाद में दही की ज़रूरत लगे तो <b>add-on order</b> दे सकते हो (explicit)। या एक auto-mode सोचो जिसमें fridge खोलने पर कुछ कम दिखे तो app <b>हर बार</b> एक rider भेज देता है (lazy) — planning नहीं करनी पड़ती, पर busy दिन पर बीस riders आपकी bell बजाते हैं।</p>\n<ul>\n<li><b>Include</b> = उसी SQL में एक JOIN। <b>Required reference</b> (<code>Order.Customer</code>) <code>INNER JOIN</code> बनता है; <b>collection</b> (<code>Customer.Orders</code>) <code>LEFT JOIN</code> और keys पर <code>ORDER BY</code> बनता है, ताकि EF flat rows को वापस objects में group कर सके।</li>\n<li><b>Filtered Include</b> (EF Core 5+): <code>Include(c =&gt; c.Orders.Where(o =&gt; o.Total &gt; 500).OrderByDescending(o =&gt; o.Total))</code> सिर्फ़ कुछ children load करता है। Filter JOIN की subquery में जाता है।</li>\n<li>एक query पर दो या ज़्यादा collection Includes rows को गुणा कर देते हैं (<b>cartesian explosion</b>)। <code>AsSplitQuery()</code> इसकी जगह हर collection के लिए अलग SQL भेजता है — trade-off Day 6 में।</li>\n<li><b>Lazy</b>: package <code>Microsoft.EntityFrameworkCore.Proxies</code>, <code>options.UseLazyLoadingProxies()</code>, और हर navigation <code>public virtual</code> (EF runtime पर एक subclass, यानी proxy, बनाता है जो getter को override करती है)। Navigation छूते समय context ज़िंदा होना चाहिए।</li>\n<li><b>Relationship fix-up</b>: loading का कोई भी तरीका हो, EF tracked entities को आपस में खुद जोड़ देता है। Orders load करके बाद में उसी context में उनका customer load करो, तो <code>order.Customer</code> अपने-आप भर जाता है।</li>\n<li>SQL देखने के लिए: <code>query.ToQueryString()</code> (बिना चलाए) या development में <code>optionsBuilder.LogTo(Console.WriteLine)</code>।</li>\n</ul>\n<p><b>कब use करें:</b> उस endpoint के हर caller को जो data चाहिए उसके लिए <code>Include</code>; सिर्फ़ कुछ branches पर चाहिए उसके लिए explicit loading (या <code>.Query().Count()</code>); lazy loading सिर्फ़ छोटे desktop/tooling apps में, जहाँ query count से ज़्यादा सुविधा मायने रखती है। <b>कब नहीं:</b> \"safety के लिए\" Includes की chain मत लगाओ — हर एक SQL को भारी करता है; web APIs या loops में lazy loading मत use करो (छुपा N+1); और अगर सिर्फ़ कुछ columns चाहिए, तो पूरे entity graphs load करने से <code>Select</code> वाला projection बेहतर है (Day 6)।</p>",
        hg: "<p><b>Analogy — quick-commerce grocery app:</b> aap sab kuch <b>ek order</b> mein daalkar ek delivery le sakte ho (eager). Baad mein dahi ki zaroorat lage to <b>add-on order</b> de sakte ho (explicit). Ya ek auto-mode socho jismein fridge kholne par kuch kam dikhe to app <b>har baar</b> ek rider bhej deta hai (lazy) — planning nahi karni padti, par busy din par bees riders aapki bell bajaate hain.</p>\n<ul>\n<li><b>Include</b> = usi SQL mein ek JOIN. <b>Required reference</b> (<code>Order.Customer</code>) <code>INNER JOIN</code> banta hai; <b>collection</b> (<code>Customer.Orders</code>) <code>LEFT JOIN</code> aur keys par <code>ORDER BY</code> banta hai, taaki EF flat rows ko wapas objects mein group kar sake.</li>\n<li><b>Filtered Include</b> (EF Core 5+): <code>Include(c =&gt; c.Orders.Where(o =&gt; o.Total &gt; 500).OrderByDescending(o =&gt; o.Total))</code> sirf kuch children load karta hai. Filter JOIN ki subquery mein jaata hai.</li>\n<li>Ek query par do ya zyaada collection Includes rows ko guna kar dete hain (<b>cartesian explosion</b>). <code>AsSplitQuery()</code> iski jagah har collection ke liye alag SQL bhejta hai — trade-off Day 6 mein.</li>\n<li><b>Lazy</b>: package <code>Microsoft.EntityFrameworkCore.Proxies</code>, <code>options.UseLazyLoadingProxies()</code>, aur har navigation <code>public virtual</code> (EF runtime par ek subclass, yaani proxy, banata hai jo getter ko override karti hai). Navigation chhoote samay context zinda hona chahiye.</li>\n<li><b>Relationship fix-up</b>: loading ka koi bhi tareeka ho, EF tracked entities ko aapas mein khud jod deta hai. Orders load karke baad mein usi context mein unka customer load karo, to <code>order.Customer</code> apne-aap bhar jaata hai.</li>\n<li>SQL dekhne ke liye: <code>query.ToQueryString()</code> (bina chalaaye) ya development mein <code>optionsBuilder.LogTo(Console.WriteLine)</code>.</li>\n</ul>\n<p><b>Kab use karein:</b> us endpoint ke har caller ko jo data chahiye uske liye <code>Include</code>; sirf kuch branches par chahiye uske liye explicit loading (ya <code>.Query().Count()</code>); lazy loading sirf chhote desktop/tooling apps mein, jahan query count se zyaada suvidha maayne rakhti hai. <b>Kab nahi:</b> \"safety ke liye\" Includes ki chain mat lagao — har ek SQL ko bhaari karta hai; web APIs ya loops mein lazy loading mat use karo (chhupa N+1); aur agar sirf kuch columns chahiye, to poore entity graphs load karne se <code>Select</code> wala projection behtar hai (Day 6).</p>"
      },
      code: [
        {
          caption: {
            en: "The SQL Server SQL behind ThenInclude and a filtered Include (ToQueryString — no database needed)",
            hi: "ThenInclude और filtered Include के पीछे का SQL Server SQL (ToQueryString — database की ज़रूरत नहीं)",
            hg: "ThenInclude aur filtered Include ke peeche ka SQL Server SQL (ToQueryString — database ki zaroorat nahi)"
          },
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.SqlServer"
          ],
          expected: "SELECT [c].[Id], [c].[Name], [s].[Id], [s].[CustomerId], [s].[Total], [s].[Id0], [s].[OrderId], [s].[Product]\nFROM [Customers] AS [c]\nLEFT JOIN (\n    SELECT [o].[Id], [o].[CustomerId], [o].[Total], [o0].[Id] AS [Id0], [o0].[OrderId], [o0].[Product]\n    FROM [Orders] AS [o]\n    LEFT JOIN [OrderItems] AS [o0] ON [o].[Id] = [o0].[OrderId]\n) AS [s] ON [c].[Id] = [s].[CustomerId]\nORDER BY [c].[Id], [s].[Id]\n-----\nSELECT [c].[Id], [c].[Name], [o0].[Id], [o0].[CustomerId], [o0].[Total]\nFROM [Customers] AS [c]\nLEFT JOIN (\n    SELECT [o].[Id], [o].[CustomerId], [o].[Total]\n    FROM [Orders] AS [o]\n    WHERE [o].[Total] > 500.0\n) AS [o0] ON [c].[Id] = [o0].[CustomerId]\nORDER BY [c].[Id]",
          src: "using Microsoft.EntityFrameworkCore;\n\nvar options = new DbContextOptionsBuilder<ShopContext>()\n    .UseSqlServer(\"Server=.;Database=Shop;Trusted_Connection=True;\")   // dummy: nothing connects\n    .Options;\nusing var db = new ShopContext(options);\n\n// Two levels: Customer -> Orders -> Items\nvar withItems = db.Customers\n    .Include(c => c.Orders)\n        .ThenInclude(o => o.Items);\nConsole.WriteLine(withItems.ToQueryString());\nConsole.WriteLine(\"-----\");\n\n// Filtered Include (EF Core 5+): only the big orders\nvar bigOrdersOnly = db.Customers\n    .Include(c => c.Orders.Where(o => o.Total > 500));\nConsole.WriteLine(bigOrdersOnly.ToQueryString());\n\n/* Output (alias names such as [s], [o0] can differ between EF Core versions):\nSELECT [c].[Id], [c].[Name], [s].[Id], [s].[CustomerId], [s].[Total], [s].[Id0], [s].[OrderId], [s].[Product]\nFROM [Customers] AS [c]\nLEFT JOIN (\n    SELECT [o].[Id], [o].[CustomerId], [o].[Total], [o0].[Id] AS [Id0], [o0].[OrderId], [o0].[Product]\n    FROM [Orders] AS [o]\n    LEFT JOIN [OrderItems] AS [o0] ON [o].[Id] = [o0].[OrderId]\n) AS [s] ON [c].[Id] = [s].[CustomerId]\nORDER BY [c].[Id], [s].[Id]          -- keys, so EF can rebuild the object graph\n-----\nSELECT [c].[Id], [c].[Name], [o0].[Id], [o0].[CustomerId], [o0].[Total]\nFROM [Customers] AS [c]\nLEFT JOIN (\n    SELECT [o].[Id], [o].[CustomerId], [o].[Total]\n    FROM [Orders] AS [o]\n    WHERE [o].[Total] > 500.0        -- the Include filter lands in the subquery\n) AS [o0] ON [c].[Id] = [o0].[CustomerId]\nORDER BY [c].[Id]\n*/\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<Order> Orders { get; } = [];\n}\n\npublic class Order\n{\n    public int Id { get; set; }\n    public decimal Total { get; set; }\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n    public List<OrderItem> Items { get; } = [];\n}\n\npublic class OrderItem\n{\n    public int Id { get; set; }\n    public string Product { get; set; } = \"\";\n    public int OrderId { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<Order> Orders => Set<Order>();\n    public DbSet<OrderItem> OrderItems => Set<OrderItem>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n        => modelBuilder.Entity<Order>().Property(o => o.Total).HasPrecision(10, 2);\n}"
        },
        {
          caption: {
            en: "Lazy loading: a hidden query per customer (N+1)",
            hi: "Lazy loading: हर customer पर एक छिपी query (N+1)",
            hg: "Lazy loading: har customer par ek chhipi query (N+1)"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Diagnostics;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nint queries = 0;\nvar options = new DbContextOptionsBuilder<CrmContext>()\n    .UseSqlite(connection)\n    .UseLazyLoadingProxies()                           // needs the Proxies package\n    .LogTo(_ => queries++, [RelationalEventId.CommandExecuted])\n    .Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    foreach (var name in new[] { \"Asha\", \"Ravi\", \"Meena\" })\n    {\n        var c = new Customer { Name = name };\n        c.Tickets.Add(new SupportTicket { Issue = $\"{name}'s issue\" });\n        db.Customers.Add(c);\n    }\n    db.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))\n{\n    queries = 0;\n    foreach (var c in db.Customers.ToList())           // 1 query for the customers\n        Console.WriteLine($\"{c.Name}: {c.Tickets.Count} ticket(s)\");   // + 1 hidden query per customer\n    Console.WriteLine($\"Lazy loading ran {queries} queries\");\n\n    var customer = db.Customers.First();\n    Console.WriteLine($\"Proxy type is a subclass: {customer.GetType() != typeof(Customer)}\");\n}\n\npublic class Customer\n{\n    public virtual int Id { get; set; }\n    public virtual string Name { get; set; } = \"\";\n    public virtual List<SupportTicket> Tickets { get; } = [];     // virtual: EF's proxy overrides it\n}\n\npublic class SupportTicket\n{\n    public virtual int Id { get; set; }\n    public virtual string Issue { get; set; } = \"\";\n    public virtual int CustomerId { get; set; }\n    public virtual Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "Asha: 1 ticket(s)\nRavi: 1 ticket(s)\nMeena: 1 ticket(s)\nLazy loading ran 4 queries\nProxy type is a subclass: True",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite",
            "Microsoft.EntityFrameworkCore.Proxies"
          ]
        }
      ]
    },
    {
      id: "identity-resolution-snapshots",
      depth: "detailed",
      title: {
        en: "Identity resolution, snapshots and stale data",
        hi: "Identity resolution, snapshots और पुराना data",
        hg: "Identity resolution, snapshots aur purana data"
      },
      body: {
        en: "<p><b>Analogy — hotel check-in and check-out:</b> at check-in, the staff note what is in the minibar (the <b>snapshot</b>). At check-out, they compare and bill <b>only what changed</b> — one soft drink, not the whole minibar. A walk-in visitor who never checked in has no record, so nothing is compared or billed. The tracked entity is the checked-in guest; the walk-in visitor is a no-tracking (Detached) object.</p>\n<ul>\n<li><b>After SaveChanges</b>: Added/Modified become <code>Unchanged</code>, generated keys (IDENTITY) are copied back into your objects, and Deleted entities become <code>Detached</code>. All statements run in <b>one transaction</b> by default.</li>\n<li><b>Identity resolution</b>: a tracked query that returns a row the context already tracks gives you the <b>existing object</b> — its in-memory values are not overwritten by fresh database values. That is why a long-lived context can show stale data.</li>\n<li><code>AsNoTracking()</code>: no snapshot and no identity map; every row becomes a new object. <code>AsNoTrackingWithIdentityResolution()</code>: still no tracking, but one object per key inside that query (useful when Include brings the same parent many times).</li>\n<li>Global default for read-heavy contexts: <code>options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, then use <code>AsTracking()</code> where you update.</li>\n<li><code>db.ChangeTracker.Clear()</code> forgets everything — handy in batch jobs that process many chunks with one context.</li>\n</ul>\n<p><b>When to use:</b> tracking for the \"load → change → SaveChanges\" flow; <code>AsNoTracking()</code> for reads; <code>Entries()</code>/<code>DebugView</code> when an update does not behave as expected. <b>When not:</b> do not track thousands of rows you only display (memory + slower DetectChanges); do not assume a second tracked query refreshes an entity already in the context — use a new context (or <code>Reload()</code>) for fresh values.</p>",
        hi: "<p><b>Analogy — hotel का check-in और check-out:</b> check-in पर staff minibar में क्या है वो note कर लेता है (<b>snapshot</b>)। Check-out पर वो मिलान करके <b>सिर्फ़ जो बदला उसका</b> bill बनाते हैं — एक cold drink, पूरा minibar नहीं। जो visitor बिना check-in के आया, उसका कोई record नहीं, तो न कुछ मिलाया जाता है न bill बनता है। Tracked entity check-in वाला guest है; बिना check-in वाला visitor no-tracking (Detached) object है।</p>\n<ul>\n<li><b>SaveChanges के बाद</b>: Added/Modified <code>Unchanged</code> बन जाते हैं, generated keys (IDENTITY) आपके objects में वापस copy हो जाती हैं, और Deleted entities <code>Detached</code> हो जाती हैं। By default सारे statements <b>एक transaction</b> में चलते हैं।</li>\n<li><b>Identity resolution</b>: tracked query अगर ऐसी row लौटाए जिसे context पहले से track कर रहा है, तो आपको <b>वही पुराना object</b> मिलता है — उसकी in-memory values database की नई values से overwrite नहीं होतीं। इसीलिए लंबे समय तक ज़िंदा context पुराना data दिखा सकता है।</li>\n<li><code>AsNoTracking()</code>: न snapshot, न identity map; हर row एक नया object बनती है। <code>AsNoTrackingWithIdentityResolution()</code>: tracking फिर भी नहीं, पर उस query के अंदर हर key का एक object (काम का है जब Include एक ही parent को कई बार लाए)।</li>\n<li>Read-heavy contexts के लिए global default: <code>options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, फिर जहाँ update करना है वहाँ <code>AsTracking()</code>।</li>\n<li><code>db.ChangeTracker.Clear()</code> सब कुछ भुला देता है — उन batch jobs में काम का जो एक context से कई chunks process करते हैं।</li>\n</ul>\n<p><b>कब use करें:</b> \"load → बदलो → SaveChanges\" flow के लिए tracking; reads के लिए <code>AsNoTracking()</code>; जब कोई update उम्मीद के मुताबिक़ न चले तब <code>Entries()</code>/<code>DebugView</code>। <b>कब नहीं:</b> सिर्फ़ दिखाने वाली हज़ारों rows track मत करो (memory + धीमा DetectChanges); और यह मत मानो कि दूसरी tracked query context में पहले से मौजूद entity को refresh कर देगी — fresh values के लिए नया context (या <code>Reload()</code>) use करो।</p>",
        hg: "<p><b>Analogy — hotel ka check-in aur check-out:</b> check-in par staff minibar mein kya hai woh note kar leta hai (<b>snapshot</b>). Check-out par woh milaan karke <b>sirf jo badla uska</b> bill banaate hain — ek cold drink, poora minibar nahi. Jo visitor bina check-in ke aaya, uska koi record nahi, to na kuch milaaya jaata hai na bill banta hai. Tracked entity check-in wala guest hai; bina check-in wala visitor no-tracking (Detached) object hai.</p>\n<ul>\n<li><b>SaveChanges ke baad</b>: Added/Modified <code>Unchanged</code> ban jaate hain, generated keys (IDENTITY) aapke objects mein wapas copy ho jaati hain, aur Deleted entities <code>Detached</code> ho jaati hain. By default saare statements <b>ek transaction</b> mein chalte hain.</li>\n<li><b>Identity resolution</b>: tracked query agar aisi row lautaaye jise context pehle se track kar raha hai, to aapko <b>wahi purana object</b> milta hai — uski in-memory values database ki nayi values se overwrite nahi hoti. Isiliye lambe samay tak zinda context purana data dikha sakta hai.</li>\n<li><code>AsNoTracking()</code>: na snapshot, na identity map; har row ek naya object banti hai. <code>AsNoTrackingWithIdentityResolution()</code>: tracking phir bhi nahi, par us query ke andar har key ka ek object (kaam ka hai jab Include ek hi parent ko kai baar laaye).</li>\n<li>Read-heavy contexts ke liye global default: <code>options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, phir jahan update karna hai wahan <code>AsTracking()</code>.</li>\n<li><code>db.ChangeTracker.Clear()</code> sab kuch bhula deta hai — un batch jobs mein kaam ka jo ek context se kai chunks process karte hain.</li>\n</ul>\n<p><b>Kab use karein:</b> \"load → badlo → SaveChanges\" flow ke liye tracking; reads ke liye <code>AsNoTracking()</code>; jab koi update ummeed ke mutaabik na chale tab <code>Entries()</code>/<code>DebugView</code>. <b>Kab nahi:</b> sirf dikhaane wali hazaaron rows track mat karo (memory + dheema DetectChanges); aur yeh mat maano ki doosri tracked query context mein pehle se maujood entity ko refresh kar degi — fresh values ke liye naya context (ya <code>Reload()</code>) use karo.</p>"
      },
      code: [
        {
          caption: {
            en: "A tracked query does not refresh an object the context already holds",
            hi: "Tracked query उस object को refresh नहीं करती जो context के पास पहले से है",
            hg: "Tracked query us object ko refresh nahi karti jo context ke paas pehle se hai"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var db = new CrmContext(options))\n{\n    db.Database.EnsureCreated();\n    db.Tickets.Add(new SupportTicket { Id = 501, Status = \"Open\" });\n    db.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))\n{\n    var first = db.Tickets.Single();\n    // Someone else changes the row in the database behind our back.\n    db.Database.ExecuteSql($\"UPDATE Tickets SET Status = 'Closed' WHERE Id = 501\");\n\n    var again = db.Tickets.Single();                   // tracked query for the same row\n    Console.WriteLine($\"Same object (identity resolution): {ReferenceEquals(first, again)}\");\n    Console.WriteLine($\"Status we see: {again.Status} (the database says Closed)\");\n\n    var fresh = db.Tickets.AsNoTracking().Single();    // not tracked: a brand-new object\n    Console.WriteLine($\"No tracking gives a new object: {!ReferenceEquals(first, fresh)}, Status = {fresh.Status}\");\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Status { get; set; } = \"Open\";\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          expected: "Same object (identity resolution): True\nStatus we see: Open (the database says Closed)\nNo tracking gives a new object: True, Status = Closed",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ]
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
        en: "<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, requires .NET 10). The concepts in today's lesson are unchanged in EF Core 10. Many \"old\" answers online predate the features below — this is what each version <b>added</b>:</p>\n<ul>\n<li><b>EF Core 5</b> — many-to-many with skip navigations (no join entity needed), filtered <code>Include</code>, split queries (<code>AsSplitQuery</code>), <code>AsNoTrackingWithIdentityResolution</code>.</li>\n<li><b>EF Core 6</b> — migration bundles (<code>dotnet ef migrations bundle</code>).</li>\n<li><b>EF Core 7</b> — <code>AutoTransactionBehavior</code> (a single-statement <code>SaveChanges</code> no longer opens a transaction); T4 templates to customize scaffolding.</li>\n<li><b>EF Core 8</b> — lazy loading also works for no-tracking queries; <code>dotnet ef migrations has-pending-model-changes</code> to catch a forgotten migration in CI.</li>\n<li><b>EF Core 9</b> — <code>Migrate()</code> takes a lock so concurrent instances do not apply the same migration twice; applying migrations now throws if the model has changes with no migration; new <code>UseSeeding</code>/<code>UseAsyncSeeding</code> for seed data.</li>\n<li><b>EF Core 10</b> — the headline changes are on the query side (for example <code>LeftJoin</code>/<code>RightJoin</code>, Day 4); more EF Core 9/10 changes on Day 6.</li>\n</ul>\n<p>This tutorial's checker runs every EF snippet on EF Core 9 (.NET 9 SDK). The printed SQL is real SQL Server SQL from <code>ToQueryString()</code>/<code>GenerateCreateScript()</code>; alias and parameter names can differ slightly between EF Core versions.</p>\n<p><b>Next (as of Oct 2026):</b> .NET 11 (STS) is due in November 2026; .NET 10 stays the LTS.</p>",
        hi: "<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, .NET 10 चाहिए)। आज के lesson के concepts EF Core 10 में नहीं बदले। Online कई \"पुराने\" answers नीचे के features से पहले के हैं — हर version ने यह <b>जोड़ा</b>:</p>\n<ul>\n<li><b>EF Core 5</b> — skip navigations वाला many-to-many (join entity की ज़रूरत नहीं), filtered <code>Include</code>, split queries (<code>AsSplitQuery</code>), <code>AsNoTrackingWithIdentityResolution</code>।</li>\n<li><b>EF Core 6</b> — migration bundles (<code>dotnet ef migrations bundle</code>)।</li>\n<li><b>EF Core 7</b> — <code>AutoTransactionBehavior</code> (एक statement वाला <code>SaveChanges</code> अब transaction नहीं खोलता); scaffolding customize करने के लिए T4 templates।</li>\n<li><b>EF Core 8</b> — lazy loading no-tracking queries में भी काम करता है; CI में भूला हुआ migration पकड़ने के लिए <code>dotnet ef migrations has-pending-model-changes</code>।</li>\n<li><b>EF Core 9</b> — <code>Migrate()</code> एक lock लेता है ताकि एक साथ चल रहे instances एक ही migration दो बार apply न करें; model में बिना migration वाले बदलाव हों तो migrations apply करते समय अब exception आता है; seed data के लिए नए <code>UseSeeding</code>/<code>UseAsyncSeeding</code>।</li>\n<li><b>EF Core 10</b> — मुख्य बदलाव query वाली side पर हैं (जैसे <code>LeftJoin</code>/<code>RightJoin</code>, Day 4); EF Core 9/10 के और बदलाव Day 6 में।</li>\n</ul>\n<p>इस tutorial का checker हर EF snippet EF Core 9 (.NET 9 SDK) पर चलाता है। Print हुआ SQL <code>ToQueryString()</code>/<code>GenerateCreateScript()</code> से आया असली SQL Server SQL है; alias और parameter names EF Core versions के बीच थोड़े अलग हो सकते हैं।</p>\n<p><b>आगे (Oct 2026 तक की जानकारी):</b> .NET 11 (STS) November 2026 में आने वाला है; .NET 10 ही LTS रहेगा।</p>",
        hg: "<p>Current: <b>EF Core 10</b> (LTS, Nov 2025, .NET 10 chahiye). Aaj ke lesson ke concepts EF Core 10 mein nahi badle. Online kai \"purane\" answers neeche ke features se pehle ke hain — har version ne yeh <b>joda</b>:</p>\n<ul>\n<li><b>EF Core 5</b> — skip navigations wala many-to-many (join entity ki zaroorat nahi), filtered <code>Include</code>, split queries (<code>AsSplitQuery</code>), <code>AsNoTrackingWithIdentityResolution</code>.</li>\n<li><b>EF Core 6</b> — migration bundles (<code>dotnet ef migrations bundle</code>).</li>\n<li><b>EF Core 7</b> — <code>AutoTransactionBehavior</code> (ek statement wala <code>SaveChanges</code> ab transaction nahi kholta); scaffolding customize karne ke liye T4 templates.</li>\n<li><b>EF Core 8</b> — lazy loading no-tracking queries mein bhi kaam karta hai; CI mein bhoola hua migration pakadne ke liye <code>dotnet ef migrations has-pending-model-changes</code>.</li>\n<li><b>EF Core 9</b> — <code>Migrate()</code> ek lock leta hai taaki ek saath chal rahe instances ek hi migration do baar apply na karein; model mein bina migration wale badlaav hon to migrations apply karte samay ab exception aata hai; seed data ke liye naye <code>UseSeeding</code>/<code>UseAsyncSeeding</code>.</li>\n<li><b>EF Core 10</b> — mukhya badlaav query wali side par hain (jaise <code>LeftJoin</code>/<code>RightJoin</code>, Day 4); EF Core 9/10 ke aur badlaav Day 6 mein.</li>\n</ul>\n<p>Is tutorial ka checker har EF snippet EF Core 9 (.NET 9 SDK) par chalata hai. Print hua SQL <code>ToQueryString()</code>/<code>GenerateCreateScript()</code> se aaya asli SQL Server SQL hai; alias aur parameter names EF Core versions ke beech thode alag ho sakte hain.</p>\n<p><b>Aage (Oct 2026 tak ki jaankari):</b> .NET 11 (STS) November 2026 mein aane wala hai; .NET 10 hi LTS rahega.</p>"
      }
    }
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
        en: "<ul>\n<li>Jobs of DbContext: connection management, query translation (LINQ → SQL), materialization (rows → objects), <b>change tracking</b>, <b>SaveChanges</b>, and holding the <b>model</b> (mapping of classes to tables, built once and cached).</li>\n<li><code>DbSet&lt;Customer&gt;</code> is an <code>IQueryable&lt;Customer&gt;</code> — <code>db.Customers.Where(...)</code> becomes SQL — plus <code>Add</code>, <code>Remove</code>, <code>Find</code>.</li>\n<li>It already implements the <b>Unit of Work</b> (one <code>SaveChanges</code> for all changes) and <b>Repository</b>-like access (DbSet). That is why \"should I wrap EF in my own repository?\" is a common follow-up (Day 11).</li>\n</ul>\n<p>Follow-up: \"Is DbContext expensive to create?\" — No. It is designed to be short-lived; the model is cached per context type. Pooling only saves a little allocation in very hot paths.</p>",
        hi: "<ul>\n<li>DbContext के काम: connection management, query translation (LINQ → SQL), materialization (rows → objects), <b>change tracking</b>, <b>SaveChanges</b>, और <b>model</b> रखना (classes का tables से mapping, एक बार बनता है और cache रहता है)।</li>\n<li><code>DbSet&lt;Customer&gt;</code> एक <code>IQueryable&lt;Customer&gt;</code> है — <code>db.Customers.Where(...)</code> SQL बनता है — साथ में <code>Add</code>, <code>Remove</code>, <code>Find</code>।</li>\n<li>यह पहले से <b>Unit of Work</b> (सारे बदलावों के लिए एक <code>SaveChanges</code>) और <b>Repository</b> जैसा access (DbSet) देता है। इसीलिए \"क्या EF को अपनी repository में wrap करें?\" एक common follow-up है (Day 11)।</li>\n</ul>\n<p>Follow-up: \"क्या DbContext बनाना महँगा है?\" — नहीं। यह कम समय के लिए ही design हुआ है; model हर context type के लिए cache रहता है। Pooling बहुत hot paths में बस थोड़ा allocation बचाता है।</p>",
        hg: "<ul>\n<li>DbContext ke kaam: connection management, query translation (LINQ → SQL), materialization (rows → objects), <b>change tracking</b>, <b>SaveChanges</b>, aur <b>model</b> rakhna (classes ka tables se mapping, ek baar banta hai aur cache rehta hai).</li>\n<li><code>DbSet&lt;Customer&gt;</code> ek <code>IQueryable&lt;Customer&gt;</code> hai — <code>db.Customers.Where(...)</code> SQL banta hai — saath mein <code>Add</code>, <code>Remove</code>, <code>Find</code>.</li>\n<li>Yeh pehle se <b>Unit of Work</b> (saare badlaavon ke liye ek <code>SaveChanges</code>) aur <b>Repository</b> jaisa access (DbSet) deta hai. Isiliye \"kya EF ko apni repository mein wrap karein?\" ek common follow-up hai (Day 11).</li>\n</ul>\n<p>Follow-up: \"Kya DbContext banana mehnga hai?\" — Nahi. Yeh kam samay ke liye hi design hua hai; model har context type ke liye cache rehta hai. Pooling bahut hot paths mein bas thoda allocation bachaata hai.</p>"
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
        en: "<ul>\n<li><b>Scoped</b> fits a request: all services in that request share one context, one change tracker and one <code>SaveChanges</code>; it is disposed when the request ends.</li>\n<li><b>Singleton</b> problems: concurrent requests on one instance (thread-safety exception), a tracker that grows forever, stale data from identity resolution.</li>\n<li><b>Transient</b> (possible via <code>AddDbContext(..., ServiceLifetime.Transient)</code>): each service gets its own context, so two repositories in one request cannot save together in one <code>SaveChanges</code>. Rarely what you want.</li>\n<li>Captive dependency: a singleton (or a <code>BackgroundService</code>) that injects DbContext keeps it forever. Use <code>IServiceScopeFactory</code> or <code>IDbContextFactory&lt;T&gt;</code> there.</li>\n</ul>\n<p>Follow-up: \"How do you use EF Core in a BackgroundService?\" — create a scope per unit of work (<code>using var scope = scopeFactory.CreateScope();</code>) or inject <code>IDbContextFactory</code> and dispose each context.</p>",
        hi: "<ul>\n<li><b>Scoped</b> request के लिए सही बैठता है: उस request की सारी services एक context, एक change tracker और एक <code>SaveChanges</code> share करती हैं; request ख़त्म होने पर dispose हो जाता है।</li>\n<li><b>Singleton</b> की problems: एक instance पर एक साथ कई requests (thread-safety exception), हमेशा बढ़ता tracker, identity resolution से पुराना data।</li>\n<li><b>Transient</b> (<code>AddDbContext(..., ServiceLifetime.Transient)</code> से हो सकता है): हर service का अपना context, इसलिए एक request की दो repositories एक <code>SaveChanges</code> में साथ save नहीं कर सकतीं। आमतौर पर यह नहीं चाहिए।</li>\n<li>Captive dependency: जो singleton (या <code>BackgroundService</code>) DbContext inject करे, वो उसे हमेशा पकड़े रखता है। वहाँ <code>IServiceScopeFactory</code> या <code>IDbContextFactory&lt;T&gt;</code> use करो।</li>\n</ul>\n<p>Follow-up: \"BackgroundService में EF Core कैसे use करोगे?\" — हर unit of work के लिए scope बनाओ (<code>using var scope = scopeFactory.CreateScope();</code>) या <code>IDbContextFactory</code> inject करके हर context dispose करो।</p>",
        hg: "<ul>\n<li><b>Scoped</b> request ke liye sahi baithta hai: us request ki saari services ek context, ek change tracker aur ek <code>SaveChanges</code> share karti hain; request khatam hone par dispose ho jaata hai.</li>\n<li><b>Singleton</b> ki problems: ek instance par ek saath kai requests (thread-safety exception), hamesha badhta tracker, identity resolution se purana data.</li>\n<li><b>Transient</b> (<code>AddDbContext(..., ServiceLifetime.Transient)</code> se ho sakta hai): har service ka apna context, isliye ek request ki do repositories ek <code>SaveChanges</code> mein saath save nahi kar sakti. Aamtaur par yeh nahi chahiye.</li>\n<li>Captive dependency: jo singleton (ya <code>BackgroundService</code>) DbContext inject kare, woh use hamesha pakde rakhta hai. Wahan <code>IServiceScopeFactory</code> ya <code>IDbContextFactory&lt;T&gt;</code> use karo.</li>\n</ul>\n<p>Follow-up: \"BackgroundService mein EF Core kaise use karoge?\" — har unit of work ke liye scope banao (<code>using var scope = scopeFactory.CreateScope();</code>) ya <code>IDbContextFactory</code> inject karke har context dispose karo.</p>"
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
        en: "<ul>\n<li><b>Code-First pros</b>: schema changes live in Git next to code, are reviewed in PRs, and are repeatable on every environment. <b>Cons</b>: developers must know SQL well enough to review generated DDL.</li>\n<li><b>DB-First pros</b>: works with legacy and shared databases, DBAs keep full control (stored procedures, partitioning, permissions). <b>Cons</b>: re-scaffold after every DB change; customizations must survive regeneration.</li>\n<li>EF Core has no EDMX designer — \"DB-First\" in EF Core means <code>dotnet ef dbcontext scaffold</code> generating plain C# classes.</li>\n<li>A common hybrid: scaffold once from an existing database, then continue Code-First with migrations (first migration as a baseline).</li>\n</ul>\n<p>TL angle: the real question is <b>who owns the schema</b>. If one team owns it, Code-First. If a DBA team or many apps share it, DB-First — and agree on a process for each change.</p>",
        hi: "<ul>\n<li><b>Code-First के फ़ायदे</b>: schema बदलाव code के साथ Git में रहते हैं, PRs में review होते हैं, और हर environment पर दोहराए जा सकते हैं। <b>नुकसान</b>: developers को इतना SQL आना चाहिए कि generated DDL review कर सकें।</li>\n<li><b>DB-First के फ़ायदे</b>: legacy और shared databases के साथ चलता है, DBAs का पूरा control रहता है (stored procedures, partitioning, permissions)। <b>नुकसान</b>: हर DB बदलाव के बाद फिर से scaffold; customizations को regeneration के बाद भी बचे रहना चाहिए।</li>\n<li>EF Core में EDMX designer नहीं है — EF Core में \"DB-First\" मतलब <code>dotnet ef dbcontext scaffold</code> से सादी C# classes बनाना।</li>\n<li>एक common hybrid: पहले से बने database से एक बार scaffold करो, फिर migrations के साथ Code-First पर चलो (पहला migration baseline के रूप में)।</li>\n</ul>\n<p>TL angle: असली सवाल है <b>schema का owner कौन है</b>। अगर एक team owner है, तो Code-First। अगर DBA team या कई apps इसे share करते हैं, तो DB-First — और हर बदलाव के लिए एक process तय करो।</p>",
        hg: "<ul>\n<li><b>Code-First ke faayde</b>: schema badlaav code ke saath Git mein rehte hain, PRs mein review hote hain, aur har environment par dohraaye ja sakte hain. <b>Nuksaan</b>: developers ko itna SQL aana chahiye ki generated DDL review kar sakein.</li>\n<li><b>DB-First ke faayde</b>: legacy aur shared databases ke saath chalta hai, DBAs ka poora control rehta hai (stored procedures, partitioning, permissions). <b>Nuksaan</b>: har DB badlaav ke baad phir se scaffold; customizations ko regeneration ke baad bhi bache rehna chahiye.</li>\n<li>EF Core mein EDMX designer nahi hai — EF Core mein \"DB-First\" matlab <code>dotnet ef dbcontext scaffold</code> se saadi C# classes banana.</li>\n<li>Ek common hybrid: pehle se bane database se ek baar scaffold karo, phir migrations ke saath Code-First par chalo (pehla migration baseline ke roop mein).</li>\n</ul>\n<p>TL angle: asli sawaal hai <b>schema ka owner kaun hai</b>. Agar ek team owner hai, to Code-First. Agar DBA team ya kai apps ise share karte hain, to DB-First — aur har badlaav ke liye ek process tay karo.</p>"
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
        en: "<ul>\n<li>Flow: change entities → <code>dotnet ef migrations add Name</code> → <b>review</b> the generated <code>Up</code>/<code>Down</code> → <code>dotnet ef database update</code> locally → commit.</li>\n<li>The <b>model snapshot</b> (<code>&lt;Context&gt;ModelSnapshot.cs</code>) is EF's memory of \"the model after the last migration\". EF diffs against the snapshot, <b>not</b> against the real database.</li>\n<li>Rollback: <code>dotnet ef database update &lt;PreviousMigration&gt;</code> runs <code>Down()</code>. A migration not yet applied anywhere can be deleted with <code>migrations remove</code>.</li>\n<li>For data changes inside a migration: <code>migrationBuilder.Sql(\"UPDATE ...\")</code>.</li>\n</ul>\n<p>Follow-up: \"Does EF compare with the live database?\" — No, with the snapshot. If someone changes the DB by hand, EF does not know, and the next migration may fail or conflict.</p>",
        hi: "<ul>\n<li>Flow: entities बदलो → <code>dotnet ef migrations add Name</code> → generated <code>Up</code>/<code>Down</code> का <b>review</b> → local पर <code>dotnet ef database update</code> → commit।</li>\n<li><b>Model snapshot</b> (<code>&lt;Context&gt;ModelSnapshot.cs</code>) EF की याद है कि \"पिछले migration के बाद model कैसा था\"। EF snapshot से diff करता है, असली database से <b>नहीं</b>।</li>\n<li>Rollback: <code>dotnet ef database update &lt;PreviousMigration&gt;</code> <code>Down()</code> चलाता है। जो migration अभी कहीं apply नहीं हुआ, उसे <code>migrations remove</code> से हटा सकते हो।</li>\n<li>Migration के अंदर data बदलाव के लिए: <code>migrationBuilder.Sql(\"UPDATE ...\")</code>।</li>\n</ul>\n<p>Follow-up: \"क्या EF live database से compare करता है?\" — नहीं, snapshot से। अगर कोई DB को हाथ से बदल दे, तो EF को पता नहीं चलता, और अगला migration fail या conflict कर सकता है।</p>",
        hg: "<ul>\n<li>Flow: entities badlo → <code>dotnet ef migrations add Name</code> → generated <code>Up</code>/<code>Down</code> ka <b>review</b> → local par <code>dotnet ef database update</code> → commit.</li>\n<li><b>Model snapshot</b> (<code>&lt;Context&gt;ModelSnapshot.cs</code>) EF ki yaad hai ki \"pichhle migration ke baad model kaisa tha\". EF snapshot se diff karta hai, asli database se <b>nahi</b>.</li>\n<li>Rollback: <code>dotnet ef database update &lt;PreviousMigration&gt;</code> <code>Down()</code> chalata hai. Jo migration abhi kahin apply nahi hua, use <code>migrations remove</code> se hata sakte ho.</li>\n<li>Migration ke andar data badlaav ke liye: <code>migrationBuilder.Sql(\"UPDATE ...\")</code>.</li>\n</ul>\n<p>Follow-up: \"Kya EF live database se compare karta hai?\" — Nahi, snapshot se. Agar koi DB ko haath se badal de, to EF ko pata nahi chalta, aur agla migration fail ya conflict kar sakta hai.</p>"
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
        en: "<ul>\n<li><b>1:N</b>: <code>Customer.Orders</code> + <code>Order.CustomerId</code> + <code>Order.Customer</code>. SQL: FK column on <code>Orders</code> + an index.</li>\n<li><b>1:1</b>: <code>HasOne(s =&gt; s.IdCard).WithOne(c =&gt; c.Student).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code>. SQL: FK + <b>unique</b> index.</li>\n<li><b>N:N</b>: <code>Student.Courses</code> + <code>Course.Students</code> → a join table with a composite PK. Name it with <code>UsingEntity(j =&gt; j.ToTable(\"Enrolments\"))</code>.</li>\n<li>If the link needs columns (date, grade), create a join <b>entity</b> with two 1:N relationships.</li>\n<li>Required FK → <code>NOT NULL</code> + cascade delete by default; nullable FK → optional relationship.</li>\n</ul>\n<p>Follow-up: \"Fluent API or data annotations?\" — Fluent API for relationships: it can express everything (delete behaviour, composite keys) and keeps entities clean.</p>",
        hi: "<ul>\n<li><b>1:N</b>: <code>Customer.Orders</code> + <code>Order.CustomerId</code> + <code>Order.Customer</code>। SQL: <code>Orders</code> पर FK column + एक index।</li>\n<li><b>1:1</b>: <code>HasOne(s =&gt; s.IdCard).WithOne(c =&gt; c.Student).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code>। SQL: FK + <b>unique</b> index।</li>\n<li><b>N:N</b>: <code>Student.Courses</code> + <code>Course.Students</code> → composite PK वाला join table। नाम <code>UsingEntity(j =&gt; j.ToTable(\"Enrolments\"))</code> से दो।</li>\n<li>अगर link को columns चाहिए (date, grade), तो दो 1:N relationships वाली एक join <b>entity</b> बनाओ।</li>\n<li>Required FK → <code>NOT NULL</code> + by default cascade delete; nullable FK → optional relationship।</li>\n</ul>\n<p>Follow-up: \"Fluent API या data annotations?\" — Relationships के लिए Fluent API: यह सब कुछ express कर सकता है (delete behaviour, composite keys) और entities को साफ़ रखता है।</p>",
        hg: "<ul>\n<li><b>1:N</b>: <code>Customer.Orders</code> + <code>Order.CustomerId</code> + <code>Order.Customer</code>. SQL: <code>Orders</code> par FK column + ek index.</li>\n<li><b>1:1</b>: <code>HasOne(s =&gt; s.IdCard).WithOne(c =&gt; c.Student).HasForeignKey&lt;IdCard&gt;(c =&gt; c.StudentId)</code>. SQL: FK + <b>unique</b> index.</li>\n<li><b>N:N</b>: <code>Student.Courses</code> + <code>Course.Students</code> → composite PK wala join table. Naam <code>UsingEntity(j =&gt; j.ToTable(\"Enrolments\"))</code> se do.</li>\n<li>Agar link ko columns chahiye (date, grade), to do 1:N relationships wali ek join <b>entity</b> banao.</li>\n<li>Required FK → <code>NOT NULL</code> + by default cascade delete; nullable FK → optional relationship.</li>\n</ul>\n<p>Follow-up: \"Fluent API ya data annotations?\" — Relationships ke liye Fluent API: yeh sab kuch express kar sakta hai (delete behaviour, composite keys) aur entities ko saaf rakhta hai.</p>"
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
        en: "<ul>\n<li><b>Default</b>: nothing related is loaded; navigations are <code>null</code>/empty unless the related entities are already tracked (fix-up).</li>\n<li><b>Eager</b>: <code>Include</code>/<code>ThenInclude</code>; filtered Include since EF Core 5. One round trip, but wide Includes mean big result sets.</li>\n<li><b>Explicit</b>: <code>db.Entry(c).Collection(x =&gt; x.Orders).Load()</code>, <code>.Reference(...).Load()</code>, or <code>.Query().Count()</code> to aggregate without loading.</li>\n<li><b>Lazy</b>: off by default. Usual setup: <code>Microsoft.EntityFrameworkCore.Proxies</code> + <code>UseLazyLoadingProxies()</code> + <code>virtual</code> navigations. Alternative without proxies: inject <code>ILazyLoader</code> into the entity — no Proxies package and no <code>virtual</code> needed. Each first access = one query.</li>\n</ul>\n<p>Follow-up: \"Which do you prefer in a Web API?\" — Eager (or a <code>Select</code> projection to a DTO) so the number of queries is visible in code. Lazy loading also clashes with JSON serialization (it walks every navigation) and fails after the context is disposed.</p>",
        hi: "<ul>\n<li><b>Default</b>: कुछ भी related load नहीं होता; navigations <code>null</code>/खाली रहते हैं, जब तक related entities पहले से tracked न हों (fix-up)।</li>\n<li><b>Eager</b>: <code>Include</code>/<code>ThenInclude</code>; EF Core 5 से filtered Include। एक round trip, पर बड़े Includes मतलब बड़े result sets।</li>\n<li><b>Explicit</b>: <code>db.Entry(c).Collection(x =&gt; x.Orders).Load()</code>, <code>.Reference(...).Load()</code>, या load किए बिना aggregate के लिए <code>.Query().Count()</code>।</li>\n<li><b>Lazy</b>: by default बंद। आम setup: <code>Microsoft.EntityFrameworkCore.Proxies</code> + <code>UseLazyLoadingProxies()</code> + <code>virtual</code> navigations। Proxies के बिना दूसरा तरीका: entity में <code>ILazyLoader</code> inject करो — न Proxies package चाहिए, न <code>virtual</code>। हर पहली access = एक query।</li>\n</ul>\n<p>Follow-up: \"Web API में कौन सा पसंद करोगे?\" — Eager (या DTO में <code>Select</code> projection), ताकि queries की गिनती code में दिखे। Lazy loading JSON serialization से भी टकराता है (वो हर navigation पर चलता है) और context dispose होने के बाद fail होता है।</p>",
        hg: "<ul>\n<li><b>Default</b>: kuch bhi related load nahi hota; navigations <code>null</code>/khaali rehte hain, jab tak related entities pehle se tracked na hon (fix-up).</li>\n<li><b>Eager</b>: <code>Include</code>/<code>ThenInclude</code>; EF Core 5 se filtered Include. Ek round trip, par bade Includes matlab bade result sets.</li>\n<li><b>Explicit</b>: <code>db.Entry(c).Collection(x =&gt; x.Orders).Load()</code>, <code>.Reference(...).Load()</code>, ya load kiye bina aggregate ke liye <code>.Query().Count()</code>.</li>\n<li><b>Lazy</b>: by default band. Aam setup: <code>Microsoft.EntityFrameworkCore.Proxies</code> + <code>UseLazyLoadingProxies()</code> + <code>virtual</code> navigations. Proxies ke bina doosra tareeka: entity mein <code>ILazyLoader</code> inject karo — na Proxies package chahiye, na <code>virtual</code>. Har pehli access = ek query.</li>\n</ul>\n<p>Follow-up: \"Web API mein kaunsa pasand karoge?\" — Eager (ya DTO mein <code>Select</code> projection), taaki queries ki ginti code mein dikhe. Lazy loading JSON serialization se bhi takraata hai (woh har navigation par chalta hai) aur context dispose hone ke baad fail hota hai.</p>"
      }
    },
    {
      id: "tracking-vs-notracking",
      depth: "short",
      q: "What does AsNoTracking do, and when do you use it?",
      answer: "AsNoTracking returns entities the context does not track — no snapshot, no identity map — so reads are faster and lighter. I use it for read-only queries; changes to those objects are not saved by SaveChanges.",
      meaning: {
        hi: "AsNoTracking ऐसी entities लौटाता है जिन्हें context track नहीं करता — न snapshot, न identity map — इसलिए reads तेज़ और हल्के होते हैं। मैं इसे read-only queries के लिए use करता हूँ; उन objects के बदलाव SaveChanges से save नहीं होते।",
        hg: "AsNoTracking aisi entities lautaata hai jinhe context track nahi karta — na snapshot, na identity map — isliye reads tez aur halke hote hain. Main ise read-only queries ke liye use karta hoon; un objects ke badlaav SaveChanges se save nahi hote."
      },
      explain: {
        en: "<ul>\n<li>Tracking cost: for every row EF looks up the identity map, stores original values, and later runs DetectChanges over it. For a 5,000-row report that is pure waste.</li>\n<li>Good fits: GET endpoints, reports, dropdown lists, exports, data mapped straight to DTOs.</li>\n<li>Side effect: the same row can appear as <b>two objects</b> (for example, one customer repeated across many orders with Include). Use <code>AsNoTrackingWithIdentityResolution()</code> if that matters.</li>\n<li>Set it per context: <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, and opt back in with <code>AsTracking()</code>.</li>\n<li>A <code>Select</code> projection to a DTO/anonymous type is not tracked either — no entity instance is created.</li>\n</ul>\n<p>Follow-up: \"Can you still update a no-tracking entity?\" — Yes, by attaching it (<code>Update</code>/<code>Attach</code>) — but then you lose \"only changed columns\" unless you mark properties yourself. Usually you re-query with tracking.</p>",
        hi: "<ul>\n<li>Tracking का खर्च: हर row के लिए EF identity map देखता है, original values रखता है, और बाद में उस पर DetectChanges चलाता है। 5,000 rows की report के लिए यह सिर्फ़ बर्बादी है।</li>\n<li>सही जगहें: GET endpoints, reports, dropdown lists, exports, सीधे DTOs में map होने वाला data।</li>\n<li>Side effect: एक ही row <b>दो objects</b> बनकर आ सकती है (जैसे Include के साथ कई orders में दोहराया गया एक customer)। अगर यह मायने रखता है तो <code>AsNoTrackingWithIdentityResolution()</code> use करो।</li>\n<li>पूरे context के लिए set करो: <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, और ज़रूरत पर <code>AsTracking()</code> से वापस tracking लो।</li>\n<li>DTO/anonymous type में <code>Select</code> projection भी track नहीं होता — कोई entity instance बनता ही नहीं।</li>\n</ul>\n<p>Follow-up: \"क्या no-tracking entity को फिर भी update कर सकते हो?\" — हाँ, उसे attach करके (<code>Update</code>/<code>Attach</code>) — पर तब \"सिर्फ़ बदले columns\" वाला फ़ायदा जाता है, जब तक आप properties खुद mark न करो। आमतौर पर tracking के साथ फिर से query करते हैं।</p>",
        hg: "<ul>\n<li>Tracking ka kharch: har row ke liye EF identity map dekhta hai, original values rakhta hai, aur baad mein us par DetectChanges chalata hai. 5,000 rows ki report ke liye yeh sirf barbaadi hai.</li>\n<li>Sahi jagahein: GET endpoints, reports, dropdown lists, exports, seedhe DTOs mein map hone wala data.</li>\n<li>Side effect: ek hi row <b>do objects</b> bankar aa sakti hai (jaise Include ke saath kai orders mein dohraaya gaya ek customer). Agar yeh maayne rakhta hai to <code>AsNoTrackingWithIdentityResolution()</code> use karo.</li>\n<li>Poore context ke liye set karo: <code>UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)</code>, aur zaroorat par <code>AsTracking()</code> se wapas tracking lo.</li>\n<li>DTO/anonymous type mein <code>Select</code> projection bhi track nahi hota — koi entity instance banta hi nahi.</li>\n</ul>\n<p>Follow-up: \"Kya no-tracking entity ko phir bhi update kar sakte ho?\" — Haan, use attach karke (<code>Update</code>/<code>Attach</code>) — par tab \"sirf badle columns\" wala faayda jaata hai, jab tak aap properties khud mark na karo. Aamtaur par tracking ke saath phir se query karte hain.</p>"
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
        en: "<ul>\n<li><code>Add</code> → Added; query result → Unchanged; property change (seen by DetectChanges) → Modified; <code>Remove</code> → Deleted; never seen / after delete is saved → Detached.</li>\n<li>Trick: <code>Add</code> then <code>Remove</code> before saving → <b>Detached</b>, not Deleted — there is nothing in the database to delete.</li>\n<li>For Modified entities, only the changed columns go into the <code>UPDATE</code>.</li>\n<li>After <code>SaveChanges</code>: everything becomes Unchanged (deleted ones Detached), and database-generated keys are set on your objects.</li>\n<li>You can set a state yourself: <code>db.Entry(order).State = EntityState.Modified</code> (marks all properties modified).</li>\n</ul>\n<p>Follow-up: \"Why can a changed property still show Unchanged?\" — DetectChanges has not run yet. <code>Entry()</code>, <code>Entries()</code> and <code>SaveChanges()</code> run it; plain property sets do not.</p>",
        hi: "<ul>\n<li><code>Add</code> → Added; query result → Unchanged; property बदलना (DetectChanges ने देखा) → Modified; <code>Remove</code> → Deleted; कभी देखा ही नहीं / delete save होने के बाद → Detached।</li>\n<li>Trick: save से पहले <code>Add</code> फिर <code>Remove</code> → <b>Detached</b>, Deleted नहीं — database में delete करने को कुछ है ही नहीं।</li>\n<li>Modified entities के लिए सिर्फ़ बदले हुए columns <code>UPDATE</code> में जाते हैं।</li>\n<li><code>SaveChanges</code> के बाद: सब Unchanged हो जाता है (deleted वाले Detached), और database में बनी keys आपके objects पर set हो जाती हैं।</li>\n<li>State खुद भी set कर सकते हो: <code>db.Entry(order).State = EntityState.Modified</code> (सारी properties modified mark होती हैं)।</li>\n</ul>\n<p>Follow-up: \"बदली हुई property फिर भी Unchanged क्यों दिख सकती है?\" — DetectChanges अभी चला नहीं। <code>Entry()</code>, <code>Entries()</code> और <code>SaveChanges()</code> उसे चलाते हैं; सादा property set नहीं।</p>",
        hg: "<ul>\n<li><code>Add</code> → Added; query result → Unchanged; property badalna (DetectChanges ne dekha) → Modified; <code>Remove</code> → Deleted; kabhi dekha hi nahi / delete save hone ke baad → Detached.</li>\n<li>Trick: save se pehle <code>Add</code> phir <code>Remove</code> → <b>Detached</b>, Deleted nahi — database mein delete karne ko kuch hai hi nahi.</li>\n<li>Modified entities ke liye sirf badle hue columns <code>UPDATE</code> mein jaate hain.</li>\n<li><code>SaveChanges</code> ke baad: sab Unchanged ho jaata hai (deleted wale Detached), aur database mein bani keys aapke objects par set ho jaati hain.</li>\n<li>State khud bhi set kar sakte ho: <code>db.Entry(order).State = EntityState.Modified</code> (saari properties modified mark hoti hain).</li>\n</ul>\n<p>Follow-up: \"Badli hui property phir bhi Unchanged kyon dikh sakti hai?\" — DetectChanges abhi chala nahi. <code>Entry()</code>, <code>Entries()</code> aur <code>SaveChanges()</code> use chalaate hain; saada property set nahi.</p>"
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
        en: "<ul>\n<li>A context has one connection, one change tracker and internal state that are not protected by locks. EF detects many overlapping uses and throws <code>InvalidOperationException</code>: <i>\"A second operation was started on this context instance before a previous operation completed. This is usually caused by different threads concurrently using the same instance of DbContext.\"</i></li>\n<li>Typical causes: <code>Task.WhenAll(db.A.ToListAsync(), db.B.ToListAsync())</code>; a forgotten <code>await</code>; <code>Parallel.ForEach</code> over one context; an <code>async void</code> method; a DbContext captured by a singleton.</li>\n<li>Fix: <code>await</code> each call in sequence (usually fast enough), or create one context per task with <code>IDbContextFactory&lt;T&gt;</code>.</li>\n<li>Note: <code>async</code> is about not blocking threads while the database works — it does not make one context usable in parallel.</li>\n</ul>\n<p>TL angle: in code review, \"missing await on an EF call\" and \"one context shared by parallel tasks\" are bugs that pass tests and fail under load.</p>",
        hi: "<ul>\n<li>एक context के पास एक connection, एक change tracker और internal state होती है, जो locks से protected नहीं। EF कई overlapping uses पकड़कर <code>InvalidOperationException</code> throw करता है: <i>\"A second operation was started on this context instance before a previous operation completed. This is usually caused by different threads concurrently using the same instance of DbContext.\"</i></li>\n<li>आम कारण: <code>Task.WhenAll(db.A.ToListAsync(), db.B.ToListAsync())</code>; भूला हुआ <code>await</code>; एक context पर <code>Parallel.ForEach</code>; <code>async void</code> method; singleton के अंदर पकड़ा हुआ DbContext।</li>\n<li>Fix: हर call को क्रम से <code>await</code> करो (आमतौर पर काफ़ी तेज़), या <code>IDbContextFactory&lt;T&gt;</code> से हर task का अपना context बनाओ।</li>\n<li>ध्यान दो: <code>async</code> का मतलब है database के काम के दौरान threads को block न करना — इससे एक context parallel में use करने लायक नहीं बनता।</li>\n</ul>\n<p>TL angle: code review में \"EF call पर await छूटा\" और \"parallel tasks में shared एक context\" ऐसे bugs हैं जो tests pass कर जाते हैं और load पर fail होते हैं।</p>",
        hg: "<ul>\n<li>Ek context ke paas ek connection, ek change tracker aur internal state hoti hai, jo locks se protected nahi. EF kai overlapping uses pakadkar <code>InvalidOperationException</code> throw karta hai: <i>\"A second operation was started on this context instance before a previous operation completed. This is usually caused by different threads concurrently using the same instance of DbContext.\"</i></li>\n<li>Aam kaaran: <code>Task.WhenAll(db.A.ToListAsync(), db.B.ToListAsync())</code>; bhoola hua <code>await</code>; ek context par <code>Parallel.ForEach</code>; <code>async void</code> method; singleton ke andar pakda hua DbContext.</li>\n<li>Fix: har call ko kram se <code>await</code> karo (aamtaur par kaafi tez), ya <code>IDbContextFactory&lt;T&gt;</code> se har task ka apna context banao.</li>\n<li>Dhyaan do: <code>async</code> ka matlab hai database ke kaam ke dauraan threads ko block na karna — isse ek context parallel mein use karne laayak nahi banta.</li>\n</ul>\n<p>TL angle: code review mein \"EF call par await chhoota\" aur \"parallel tasks mein shared ek context\" aise bugs hain jo tests pass kar jaate hain aur load par fail hote hain.</p>"
      },
      code: [
        {
          caption: {
            en: "Wrong vs right: parallel queries need one context each (factory); otherwise await them one by one",
            hi: "ग़लत बनाम सही: parallel queries के लिए हर एक का अपना context (factory); वरना एक-एक करके await करो",
            hg: "Galat vs sahi: parallel queries ke liye har ek ka apna context (factory); warna ek-ek karke await karo"
          },
          check: "compile",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ],
          src: "using Microsoft.EntityFrameworkCore;\n\npublic class DashboardService(IDbContextFactory<ShopContext> factory, ShopContext db)\n{\n    // WRONG: two operations overlap on ONE context -> InvalidOperationException at runtime\n    public async Task<(int, int)> CountsWrongAsync()\n    {\n        var customers = db.Customers.CountAsync();\n        var orders = db.Orders.CountAsync();\n        await Task.WhenAll(customers, orders);\n        return (customers.Result, orders.Result);\n    }\n\n    // RIGHT (simple): one after the other on the same context\n    public async Task<(int, int)> CountsSequentialAsync()\n    {\n        int customers = await db.Customers.CountAsync();\n        int orders = await db.Orders.CountAsync();\n        return (customers, orders);\n    }\n\n    // RIGHT (parallel): each task gets its own short-lived context\n    public async Task<(int, int)> CountsParallelAsync()\n    {\n        async Task<int> CountCustomers() { await using var c = await factory.CreateDbContextAsync(); return await c.Customers.CountAsync(); }\n        async Task<int> CountOrders() { await using var c = await factory.CreateDbContextAsync(); return await c.Orders.CountAsync(); }\n\n        var results = await Task.WhenAll(CountCustomers(), CountOrders());\n        return (results[0], results[1]);\n    }\n}\n\npublic class Customer { public int Id { get; set; } public string Name { get; set; } = \"\"; }\npublic class Order { public int Id { get; set; } public int CustomerId { get; set; } }\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<Order> Orders => Set<Order>();\n}"
        }
      ]
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
        en: "<ul>\n<li><b>AddDbContext</b>: context Scoped, options Scoped. Simple, safe, enough for most APIs.</li>\n<li><b>AddDbContextPool</b>: the context is still resolved per scope, but instances come from a pool (default <code>poolSize</code> 1024) and are reset when returned. Options become a singleton, so they cannot depend on per-request data (for example, a per-tenant connection string). Do not keep per-request fields in the context, or reset them yourself. The constructor should take only <code>DbContextOptions</code> — it runs once per pooled instance, so injected scoped services would be shared across requests.</li>\n<li><b>AddDbContextFactory</b>: registers <code>IDbContextFactory&lt;T&gt;</code> as a singleton (and the context itself as Scoped too). You call <code>CreateDbContext()</code> and own disposal. <b>AddPooledDbContextFactory</b> combines both ideas.</li>\n<li>Blazor Server: one circuit lives for the whole user session, so a Scoped context would live too long and be shared by overlapping UI events — use the factory, one context per operation.</li>\n</ul>\n<p>TL angle: pick pooling only with evidence (profiling under load). The gain is real but small compared with fixing slow queries.</p>",
        hi: "<ul>\n<li><b>AddDbContext</b>: context Scoped, options Scoped। आसान, safe, ज़्यादातर APIs के लिए काफ़ी।</li>\n<li><b>AddDbContextPool</b>: context अब भी हर scope में resolve होता है, पर instances एक pool से आते हैं (default <code>poolSize</code> 1024) और लौटाने पर reset होते हैं। Options singleton बन जाते हैं, इसलिए वो per-request data पर depend नहीं कर सकते (जैसे हर tenant की अलग connection string)। Context में per-request fields मत रखो, या उन्हें खुद reset करो। Constructor सिर्फ़ <code>DbContextOptions</code> ले — वो हर pooled instance के लिए एक बार चलता है, इसलिए inject की गई scoped services requests के बीच share हो जातीं।</li>\n<li><b>AddDbContextFactory</b>: <code>IDbContextFactory&lt;T&gt;</code> को singleton register करता है (और context को भी Scoped)। आप <code>CreateDbContext()</code> call करते हो और dispose करना आपकी ज़िम्मेदारी है। <b>AddPooledDbContextFactory</b> दोनों ideas को मिलाता है।</li>\n<li>Blazor Server: एक circuit पूरे user session तक चलता है, इसलिए Scoped context बहुत लंबा चलेगा और overlapping UI events में share होगा — factory use करो, हर operation का एक context।</li>\n</ul>\n<p>TL angle: pooling सिर्फ़ सबूत के साथ चुनो (load में profiling)। फ़ायदा असली है पर slow queries ठीक करने के मुक़ाबले छोटा।</p>",
        hg: "<ul>\n<li><b>AddDbContext</b>: context Scoped, options Scoped. Aasaan, safe, zyaadatar APIs ke liye kaafi.</li>\n<li><b>AddDbContextPool</b>: context ab bhi har scope mein resolve hota hai, par instances ek pool se aate hain (default <code>poolSize</code> 1024) aur lautaane par reset hote hain. Options singleton ban jaate hain, isliye woh per-request data par depend nahi kar sakte (jaise har tenant ki alag connection string). Context mein per-request fields mat rakho, ya unhe khud reset karo. Constructor sirf <code>DbContextOptions</code> le — woh har pooled instance ke liye ek baar chalta hai, isliye inject ki gayi scoped services requests ke beech share ho jaati.</li>\n<li><b>AddDbContextFactory</b>: <code>IDbContextFactory&lt;T&gt;</code> ko singleton register karta hai (aur context ko bhi Scoped). Aap <code>CreateDbContext()</code> call karte ho aur dispose karna aapki zimmedaari hai. <b>AddPooledDbContextFactory</b> dono ideas ko milaata hai.</li>\n<li>Blazor Server: ek circuit poore user session tak chalta hai, isliye Scoped context bahut lamba chalega aur overlapping UI events mein share hoga — factory use karo, har operation ka ek context.</li>\n</ul>\n<p>TL angle: pooling sirf saboot ke saath chuno (load mein profiling). Faayda asli hai par slow queries theek karne ke muqaable chhota.</p>"
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
        en: "<ul>\n<li><b>SQL script</b>: <code>dotnet ef migrations script --idempotent -o migrate.sql</code>. \"Idempotent\" wraps each migration in a check against <code>__EFMigrationsHistory</code>, so the same script works on any DB version. A DBA can read it before it runs — this is the approach Microsoft's docs recommend first.</li>\n<li><b>Bundle</b> (EF Core 6+): <code>dotnet ef migrations bundle</code> builds a small executable; the pipeline runs <code>efbundle --connection \"...\"</code>. By default it is framework-dependent: the deployment agent needs the .NET runtime, but not the SDK or the source code. Add <code>--self-contained</code> to include the runtime too.</li>\n<li><b>Migrate() at startup</b>: easy for dev/test and single-instance apps. Risks in production: several instances racing (EF Core 9 added a migration lock, but the other issues remain), the app's DB user needs DDL rights, a failed migration blocks app startup, and nobody reviewed the SQL.</li>\n<li><b>Backward compatibility</b>: during a rolling deploy, the old version runs against the new schema. Prefer additive changes (add a nullable column first, backfill, then make it required in a later release); avoid renames/drops in the same release.</li>\n</ul>\n<p>Follow-up: \"How do you roll back?\" — Ideally roll <b>forward</b> with a new fixing migration. <code>Down()</code> scripts exist (<code>migrations script From To</code>), but dropping columns loses data, so test rollback before relying on it.</p>",
        hi: "<ul>\n<li><b>SQL script</b>: <code>dotnet ef migrations script --idempotent -o migrate.sql</code>। \"Idempotent\" हर migration को <code>__EFMigrationsHistory</code> के check में लपेट देता है, इसलिए वही script DB के किसी भी version पर चलती है। चलने से पहले DBA उसे पढ़ सकता है — Microsoft के docs सबसे पहले यही तरीका recommend करते हैं।</li>\n<li><b>Bundle</b> (EF Core 6+): <code>dotnet ef migrations bundle</code> एक छोटा executable बनाता है; pipeline <code>efbundle --connection \"...\"</code> चलाती है। By default यह framework-dependent है: deployment agent पर .NET runtime चाहिए, पर SDK या source code नहीं। Runtime भी साथ रखना हो तो <code>--self-contained</code> जोड़ो।</li>\n<li><b>Startup पर Migrate()</b>: dev/test और single-instance apps के लिए आसान। Production में risks: कई instances की race (EF Core 9 ने migration lock जोड़ा, पर बाकी issues बने रहते हैं), app के DB user को DDL rights चाहिए, failed migration app startup रोक देता है, और SQL किसी ने review नहीं किया।</li>\n<li><b>Backward compatibility</b>: rolling deploy के दौरान पुराना version नए schema पर चलता है। Additive बदलाव बेहतर हैं (पहले nullable column जोड़ो, data भरो, फिर अगली release में required बनाओ); एक ही release में renames/drops से बचो।</li>\n</ul>\n<p>Follow-up: \"Rollback कैसे करोगे?\" — बेहतर है नए fixing migration के साथ <b>आगे</b> roll करो। <code>Down()</code> scripts होते हैं (<code>migrations script From To</code>), पर columns drop करने से data जाता है, इसलिए भरोसा करने से पहले rollback test करो।</p>",
        hg: "<ul>\n<li><b>SQL script</b>: <code>dotnet ef migrations script --idempotent -o migrate.sql</code>. \"Idempotent\" har migration ko <code>__EFMigrationsHistory</code> ke check mein lapet deta hai, isliye wahi script DB ke kisi bhi version par chalti hai. Chalne se pehle DBA use padh sakta hai — Microsoft ke docs sabse pehle yahi tareeka recommend karte hain.</li>\n<li><b>Bundle</b> (EF Core 6+): <code>dotnet ef migrations bundle</code> ek chhota executable banata hai; pipeline <code>efbundle --connection \"...\"</code> chalaati hai. By default yeh framework-dependent hai: deployment agent par .NET runtime chahiye, par SDK ya source code nahi. Runtime bhi saath rakhna ho to <code>--self-contained</code> jodo.</li>\n<li><b>Startup par Migrate()</b>: dev/test aur single-instance apps ke liye aasaan. Production mein risks: kai instances ki race (EF Core 9 ne migration lock joda, par baaki issues bane rehte hain), app ke DB user ko DDL rights chahiye, failed migration app startup rok deta hai, aur SQL kisi ne review nahi kiya.</li>\n<li><b>Backward compatibility</b>: rolling deploy ke dauraan purana version naye schema par chalta hai. Additive badlaav behtar hain (pehle nullable column jodo, data bharo, phir agli release mein required banao); ek hi release mein renames/drops se bacho.</li>\n</ul>\n<p>Follow-up: \"Rollback kaise karoge?\" — Behtar hai naye fixing migration ke saath <b>aage</b> roll karo. <code>Down()</code> scripts hote hain (<code>migrations script From To</code>), par columns drop karne se data jaata hai, isliye bharosa karne se pehle rollback test karo.</p>"
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
        en: "<ul>\n<li>Each migration file has a timestamp in its name, so the files themselves rarely clash. The <b>model snapshot</b> is the single shared file — that is where Git shows the conflict.</li>\n<li><b>Unrelated changes</b> (one adds <code>Customer.City</code>, the other adds a new table): resolve the snapshot so it contains both changes; the two migrations can coexist.</li>\n<li><b>Related changes</b> (both touch the same column/table): abort the merge, <code>dotnet ef migrations remove</code> your migration (keep your entity changes), merge main, then <code>migrations add</code> again so it is generated on top of the merged model.</li>\n<li>Check with <code>dotnet ef migrations has-pending-model-changes</code> (EF Core 8+) in CI: it fails if someone changed the model but forgot to add a migration.</li>\n</ul>\n<p>TL angle: agree on a team rule — rebase on main before adding a migration, one migration per PR, and never edit a migration that is already on main.</p>",
        hi: "<ul>\n<li>हर migration file के नाम में timestamp होता है, इसलिए files आपस में कम ही टकराती हैं। <b>Model snapshot</b> ही अकेली shared file है — Git conflict वहीं दिखाता है।</li>\n<li><b>अलग-अलग बदलाव</b> (एक ने <code>Customer.City</code> जोड़ा, दूसरे ने नई table): snapshot ऐसे resolve करो कि उसमें दोनों बदलाव हों; दोनों migrations साथ रह सकते हैं।</li>\n<li><b>जुड़े हुए बदलाव</b> (दोनों एक ही column/table छूते हैं): merge abort करो, अपना migration <code>dotnet ef migrations remove</code> से हटाओ (entity बदलाव रखो), main merge करो, फिर <code>migrations add</code> दोबारा करो ताकि वो merged model के ऊपर बने।</li>\n<li>CI में <code>dotnet ef migrations has-pending-model-changes</code> (EF Core 8+) से check करो: अगर किसी ने model बदला पर migration जोड़ना भूल गया तो यह fail होता है।</li>\n</ul>\n<p>TL angle: team का नियम तय करो — migration जोड़ने से पहले main पर rebase, हर PR में एक migration, और main पर पहुँच चुके migration को कभी edit मत करो।</p>",
        hg: "<ul>\n<li>Har migration file ke naam mein timestamp hota hai, isliye files aapas mein kam hi takraati hain. <b>Model snapshot</b> hi akeli shared file hai — Git conflict wahin dikhaata hai.</li>\n<li><b>Alag-alag badlaav</b> (ek ne <code>Customer.City</code> joda, doosre ne nayi table): snapshot aise resolve karo ki usmein dono badlaav hon; dono migrations saath reh sakte hain.</li>\n<li><b>Jude hue badlaav</b> (dono ek hi column/table chhoote hain): merge abort karo, apna migration <code>dotnet ef migrations remove</code> se hatao (entity badlaav rakho), main merge karo, phir <code>migrations add</code> dobara karo taaki woh merged model ke upar bane.</li>\n<li>CI mein <code>dotnet ef migrations has-pending-model-changes</code> (EF Core 8+) se check karo: agar kisi ne model badla par migration jodna bhool gaya to yeh fail hota hai.</li>\n</ul>\n<p>TL angle: team ka niyam tay karo — migration jodne se pehle main par rebase, har PR mein ek migration, aur main par pahunch chuke migration ko kabhi edit mat karo.</p>"
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
        en: "<ul>\n<li>Useful options: <code>--output-dir Models</code>, <code>--context ShopContext</code>, <code>--table</code> (repeatable, to scaffold only some tables), <code>--data-annotations</code>, <code>--no-onconfiguring</code>, <code>--force</code> (overwrite on re-scaffold).</li>\n<li>Do not hard-code the connection string: pass <code>\"Name=ConnectionStrings:Shop\"</code> so it is read from configuration/user secrets, and use <code>--no-onconfiguring</code> so it is not written into the generated context.</li>\n<li>Generated entity classes and the context are <b>partial</b>, and the context calls <code>partial void OnModelCreatingPartial(ModelBuilder)</code>. Put extra properties, methods and configuration in your own partial files — they survive regeneration.</li>\n<li>EF Core 7+ supports <b>T4 templates</b> (<code>dotnet new ef-templates</code>) to change how code is generated (naming, base classes, comments).</li>\n<li>Stored procedures and views: views can be scaffolded as keyless entities; stored procedures are called with raw SQL (Day 6).</li>\n</ul>\n<p>Follow-up: \"Can you add migrations to a scaffolded project?\" — Yes: add an initial migration and mark it as already applied (or empty its <code>Up()</code>), then continue Code-First. Agree with the DBA team who owns the schema from then on.</p>",
        hi: "<ul>\n<li>काम के options: <code>--output-dir Models</code>, <code>--context ShopContext</code>, <code>--table</code> (कई बार दे सकते हो, सिर्फ़ कुछ tables scaffold करने के लिए), <code>--data-annotations</code>, <code>--no-onconfiguring</code>, <code>--force</code> (re-scaffold पर overwrite)।</li>\n<li>Connection string hard-code मत करो: <code>\"Name=ConnectionStrings:Shop\"</code> दो ताकि वो configuration/user secrets से पढ़ी जाए, और <code>--no-onconfiguring</code> use करो ताकि वो generated context में न लिखी जाए।</li>\n<li>Generated entity classes और context <b>partial</b> होते हैं, और context <code>partial void OnModelCreatingPartial(ModelBuilder)</code> call करता है। Extra properties, methods और configuration अपनी partial files में रखो — वो regeneration के बाद भी बचती हैं।</li>\n<li>EF Core 7+ में <b>T4 templates</b> (<code>dotnet new ef-templates</code>) से code generation बदल सकते हो (naming, base classes, comments)।</li>\n<li>Stored procedures और views: views को keyless entities के रूप में scaffold कर सकते हो; stored procedures raw SQL से call होते हैं (Day 6)।</li>\n</ul>\n<p>Follow-up: \"क्या scaffolded project में migrations जोड़ सकते हो?\" — हाँ: एक initial migration जोड़ो और उसे पहले से applied mark करो (या उसका <code>Up()</code> खाली करो), फिर Code-First पर चलो। उसके बाद schema का owner कौन है, यह DBA team के साथ तय करो।</p>",
        hg: "<ul>\n<li>Kaam ke options: <code>--output-dir Models</code>, <code>--context ShopContext</code>, <code>--table</code> (kai baar de sakte ho, sirf kuch tables scaffold karne ke liye), <code>--data-annotations</code>, <code>--no-onconfiguring</code>, <code>--force</code> (re-scaffold par overwrite).</li>\n<li>Connection string hard-code mat karo: <code>\"Name=ConnectionStrings:Shop\"</code> do taaki woh configuration/user secrets se padhi jaaye, aur <code>--no-onconfiguring</code> use karo taaki woh generated context mein na likhi jaaye.</li>\n<li>Generated entity classes aur context <b>partial</b> hote hain, aur context <code>partial void OnModelCreatingPartial(ModelBuilder)</code> call karta hai. Extra properties, methods aur configuration apni partial files mein rakho — woh regeneration ke baad bhi bachti hain.</li>\n<li>EF Core 7+ mein <b>T4 templates</b> (<code>dotnet new ef-templates</code>) se code generation badal sakte ho (naming, base classes, comments).</li>\n<li>Stored procedures aur views: views ko keyless entities ke roop mein scaffold kar sakte ho; stored procedures raw SQL se call hote hain (Day 6).</li>\n</ul>\n<p>Follow-up: \"Kya scaffolded project mein migrations jod sakte ho?\" — Haan: ek initial migration jodo aur use pehle se applied mark karo (ya uska <code>Up()</code> khaali karo), phir Code-First par chalo. Uske baad schema ka owner kaun hai, yeh DBA team ke saath tay karo.</p>"
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
        en: "<ul>\n<li>By convention, <code>Student.Courses</code> + <code>Course.Students</code> give a table <code>CourseStudent</code> with columns <code>CoursesId</code>, <code>StudentsId</code>, a composite PK and two cascading FKs. Rename it with <code>UsingEntity(j =&gt; j.ToTable(\"Enrolments\"))</code>.</li>\n<li>Code works on objects: <code>student.Courses.Add(course)</code> → an INSERT into the join table on <code>SaveChanges()</code>; <code>student.Courses.Remove(course)</code> (with the collection loaded) → a DELETE.</li>\n<li>Queries: <code>Include(s =&gt; s.Courses)</code> joins through the join table; <code>s.Courses.Any(...)</code> becomes <code>EXISTS</code>.</li>\n<li><b>Payload</b>: create <code>Enrollment { StudentId, CourseId, EnrolledOn, Grade }</code> with a composite key. You can keep the skip navigations through it: <code>HasMany(s =&gt; s.Courses).WithMany(c =&gt; c.Students).UsingEntity&lt;Enrollment&gt;()</code>.</li>\n<li>Before EF Core 5 (and in old answers online), many-to-many always needed an explicit join entity.</li>\n</ul>\n<p>TL angle: a pure link table often gets data later (who added it, when). If that is likely, start with an explicit join entity — changing later means a migration and code changes.</p>",
        hi: "<ul>\n<li>Convention से <code>Student.Courses</code> + <code>Course.Students</code> से <code>CourseStudent</code> table बनता है जिसमें <code>CoursesId</code>, <code>StudentsId</code> columns, एक composite PK और दो cascading FKs होते हैं। नाम <code>UsingEntity(j =&gt; j.ToTable(\"Enrolments\"))</code> से बदलो।</li>\n<li>Code objects पर काम करता है: <code>student.Courses.Add(course)</code> → <code>SaveChanges()</code> पर join table में INSERT; <code>student.Courses.Remove(course)</code> (collection load होने पर) → एक DELETE।</li>\n<li>Queries: <code>Include(s =&gt; s.Courses)</code> join table के through JOIN करता है; <code>s.Courses.Any(...)</code> <code>EXISTS</code> बन जाता है।</li>\n<li><b>Payload</b>: composite key वाली <code>Enrollment { StudentId, CourseId, EnrolledOn, Grade }</code> बनाओ। उसके through skip navigations रख सकते हो: <code>HasMany(s =&gt; s.Courses).WithMany(c =&gt; c.Students).UsingEntity&lt;Enrollment&gt;()</code>।</li>\n<li>EF Core 5 से पहले (और online पुराने answers में) many-to-many के लिए हमेशा explicit join entity चाहिए होती थी।</li>\n</ul>\n<p>TL angle: सादी link table में अक्सर बाद में data जुड़ता है (किसने जोड़ा, कब)। अगर ऐसा होने की संभावना है, तो शुरू से explicit join entity रखो — बाद में बदलने का मतलब migration और code बदलाव।</p>",
        hg: "<ul>\n<li>Convention se <code>Student.Courses</code> + <code>Course.Students</code> se <code>CourseStudent</code> table banta hai jismein <code>CoursesId</code>, <code>StudentsId</code> columns, ek composite PK aur do cascading FKs hote hain. Naam <code>UsingEntity(j =&gt; j.ToTable(\"Enrolments\"))</code> se badlo.</li>\n<li>Code objects par kaam karta hai: <code>student.Courses.Add(course)</code> → <code>SaveChanges()</code> par join table mein INSERT; <code>student.Courses.Remove(course)</code> (collection load hone par) → ek DELETE.</li>\n<li>Queries: <code>Include(s =&gt; s.Courses)</code> join table ke through JOIN karta hai; <code>s.Courses.Any(...)</code> <code>EXISTS</code> ban jaata hai.</li>\n<li><b>Payload</b>: composite key wali <code>Enrollment { StudentId, CourseId, EnrolledOn, Grade }</code> banao. Uske through skip navigations rakh sakte ho: <code>HasMany(s =&gt; s.Courses).WithMany(c =&gt; c.Students).UsingEntity&lt;Enrollment&gt;()</code>.</li>\n<li>EF Core 5 se pehle (aur online purane answers mein) many-to-many ke liye hamesha explicit join entity chahiye hoti thi.</li>\n</ul>\n<p>TL angle: saadi link table mein aksar baad mein data judta hai (kisne joda, kab). Agar aisa hone ki sambhaavna hai, to shuru se explicit join entity rakho — baad mein badalne ka matlab migration aur code badlaav.</p>"
      }
    },
    {
      id: "delete-behavior",
      depth: "detailed",
      q: "What happens to child rows when you delete a parent entity in EF Core?",
      answer: "Required FKs default to Cascade, so children are deleted too. Optional FKs default to ClientSetNull: EF nulls the FK on tracked children. Restrict blocks the delete for required FKs and in the database.",
      meaning: {
        hi: "Required FKs का default Cascade है, इसलिए children भी delete होते हैं। Optional का default ClientSetNull है: EF tracked children का FK NULL कर देता है। Restrict, required FKs पर और database के स्तर पर delete रोकता है।",
        hg: "Required FKs ka default Cascade hai, isliye children bhi delete hote hain. Optional ka default ClientSetNull hai: EF tracked children ka FK NULL kar deta hai. Restrict, required FKs par aur database ke star par delete rokta hai."
      },
      explain: {
        en: "<ul>\n<li><b>Cascade</b>: EF deletes tracked children itself, and the database FK has <code>ON DELETE CASCADE</code> for the rest.</li>\n<li><b>ClientSetNull</b> (optional default): EF nulls the FK on <b>tracked</b> children; the database has no action, so untracked children make the DELETE fail with an FK violation.</li>\n<li><b>SetNull</b>: database <code>ON DELETE SET NULL</code> too. <b>Restrict</b>/<b>NoAction</b>: no cascade in the database, so the database rejects the delete while children exist. For a <b>required</b> FK the delete fails. For an <b>optional</b> FK, EF still sets <b>tracked</b> children's FK to NULL and the delete succeeds; only <b>ClientNoAction</b> leaves them alone and lets the database FK block it. <b>ClientCascade</b>: EF deletes tracked children, the database does nothing.</li>\n<li>Practical rule: for an optional FK, whether the delete is blocked depends on whether the children happen to be loaded — so test the exact case (see the puzzle <i>restrict-optional-fk</i>).</li>\n<li>SQL Server refuses FKs that \"may cause cycles or multiple cascade paths\" — then set some relationships to <code>Restrict</code>/<code>NoAction</code>.</li>\n<li>Many business systems do not hard-delete at all: a <b>soft delete</b> flag (<code>IsDeleted</code>) plus a global query filter (Day 6 territory).</li>\n</ul>\n<p>TL angle: cascade delete is a business decision, not a default to accept silently. Review every <code>ON DELETE CASCADE</code> in migrations — deleting one customer should not quietly remove invoices you must keep for audits.</p>",
        hi: "<ul>\n<li><b>Cascade</b>: EF tracked children खुद delete करता है, और बाकी के लिए database FK पर <code>ON DELETE CASCADE</code> होता है।</li>\n<li><b>ClientSetNull</b> (optional का default): EF <b>tracked</b> children का FK null करता है; database में कोई action नहीं, इसलिए untracked children होने पर DELETE FK violation से fail होता है।</li>\n<li><b>SetNull</b>: database में भी <code>ON DELETE SET NULL</code>। <b>Restrict</b>/<b>NoAction</b>: database में कोई cascade नहीं, इसलिए children रहते हुए database delete मना कर देता है। <b>Required</b> FK पर delete fail होता है। <b>Optional</b> FK पर EF फिर भी <b>tracked</b> children का FK NULL कर देता है और delete हो जाता है; सिर्फ़ <b>ClientNoAction</b> उन्हें नहीं छूता और database FK को delete रोकने देता है। <b>ClientCascade</b>: EF tracked children delete करता है, database कुछ नहीं करता।</li>\n<li>Practical नियम: optional FK पर delete रुकेगा या नहीं, यह इस पर depend करता है कि children load हैं या नहीं — इसलिए ठीक वही case test करो (puzzle <i>restrict-optional-fk</i> देखो)।</li>\n<li>SQL Server उन FKs को मना करता है जो \"may cause cycles or multiple cascade paths\" — तब कुछ relationships को <code>Restrict</code>/<code>NoAction</code> करो।</li>\n<li>कई business systems hard-delete करते ही नहीं: एक <b>soft delete</b> flag (<code>IsDeleted</code>) और global query filter (Day 6 का इलाक़ा)।</li>\n</ul>\n<p>TL angle: cascade delete एक business फ़ैसला है, चुपचाप मान लेने वाला default नहीं। Migrations में हर <code>ON DELETE CASCADE</code> review करो — एक customer delete करने से वो invoices चुपचाप नहीं हटने चाहिए जो audit के लिए रखने ज़रूरी हैं।</p>",
        hg: "<ul>\n<li><b>Cascade</b>: EF tracked children khud delete karta hai, aur baaki ke liye database FK par <code>ON DELETE CASCADE</code> hota hai.</li>\n<li><b>ClientSetNull</b> (optional ka default): EF <b>tracked</b> children ka FK null karta hai; database mein koi action nahi, isliye untracked children hone par DELETE FK violation se fail hota hai.</li>\n<li><b>SetNull</b>: database mein bhi <code>ON DELETE SET NULL</code>. <b>Restrict</b>/<b>NoAction</b>: database mein koi cascade nahi, isliye children rehte hue database delete mana kar deta hai. <b>Required</b> FK par delete fail hota hai. <b>Optional</b> FK par EF phir bhi <b>tracked</b> children ka FK NULL kar deta hai aur delete ho jaata hai; sirf <b>ClientNoAction</b> unhe nahi chhoota aur database FK ko delete rokne deta hai. <b>ClientCascade</b>: EF tracked children delete karta hai, database kuch nahi karta.</li>\n<li>Practical niyam: optional FK par delete rukega ya nahi, yeh is par depend karta hai ki children load hain ya nahi — isliye theek wahi case test karo (puzzle <i>restrict-optional-fk</i> dekho).</li>\n<li>SQL Server un FKs ko mana karta hai jo \"may cause cycles or multiple cascade paths\" — tab kuch relationships ko <code>Restrict</code>/<code>NoAction</code> karo.</li>\n<li>Kai business systems hard-delete karte hi nahi: ek <b>soft delete</b> flag (<code>IsDeleted</code>) aur global query filter (Day 6 ka ilaaka).</li>\n</ul>\n<p>TL angle: cascade delete ek business faisla hai, chupchaap maan lene wala default nahi. Migrations mein har <code>ON DELETE CASCADE</code> review karo — ek customer delete karne se woh invoices chupchaap nahi hatne chahiye jo audit ke liye rakhne zaroori hain.</p>"
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
        en: "<ul>\n<li><b>N+1</b>: <code>foreach (var c in customers) total += c.Orders.Count;</code> = 1 query for customers + 1 per customer. Fine with 3 rows in dev, terrible with 3,000 in production (Day 6).</li>\n<li><b>Serialization</b>: returning an entity from a controller makes the JSON serializer touch every navigation — each one may load, and back-references (<code>Order.Customer.Orders...</code>) create cycles.</li>\n<li><b>Lifetime</b>: lazy loading needs the context alive. Accessing a navigation after the context is disposed fails (EF raises an error by default) instead of silently returning data.</li>\n<li><b>Design cost</b>: proxies need every navigation <code>virtual</code> and classes that can be subclassed; the alternative <code>ILazyLoader</code> injection puts EF into your entities.</li>\n<li>Where it can be fine: small desktop tools, admin scripts, prototypes — where convenience matters more and data is small.</li>\n</ul>\n<p>TL angle: if a codebase already uses lazy loading, do not rip it out in one go. Turn on SQL logging, find the hot N+1 paths, and replace them with Include or projections first.</p>",
        hi: "<ul>\n<li><b>N+1</b>: <code>foreach (var c in customers) total += c.Orders.Count;</code> = customers के लिए 1 query + हर customer के लिए 1। Dev में 3 rows के साथ ठीक, production में 3,000 के साथ बहुत बुरा (Day 6)।</li>\n<li><b>Serialization</b>: controller से entity लौटाने पर JSON serializer हर navigation छूता है — हर एक load कर सकता है, और back-references (<code>Order.Customer.Orders...</code>) cycles बनाते हैं।</li>\n<li><b>Lifetime</b>: lazy loading के लिए context ज़िंदा होना चाहिए। Context dispose होने के बाद navigation छूने पर चुपचाप data लौटाने की बजाय fail होता है (EF by default error देता है)।</li>\n<li><b>Design का खर्च</b>: proxies के लिए हर navigation <code>virtual</code> और classes ऐसी चाहिए जिनकी subclass बन सके; दूसरा तरीका <code>ILazyLoader</code> injection EF को आपकी entities में डाल देता है।</li>\n<li>कहाँ ठीक हो सकता है: छोटे desktop tools, admin scripts, prototypes — जहाँ सुविधा ज़्यादा मायने रखती है और data छोटा है।</li>\n</ul>\n<p>TL angle: अगर codebase पहले से lazy loading use करता है, तो उसे एक झटके में मत हटाओ। SQL logging चालू करो, hot N+1 paths ढूँढो, और पहले उन्हें Include या projections से बदलो।</p>",
        hg: "<ul>\n<li><b>N+1</b>: <code>foreach (var c in customers) total += c.Orders.Count;</code> = customers ke liye 1 query + har customer ke liye 1. Dev mein 3 rows ke saath theek, production mein 3,000 ke saath bahut bura (Day 6).</li>\n<li><b>Serialization</b>: controller se entity lautaane par JSON serializer har navigation chhoota hai — har ek load kar sakta hai, aur back-references (<code>Order.Customer.Orders...</code>) cycles banaate hain.</li>\n<li><b>Lifetime</b>: lazy loading ke liye context zinda hona chahiye. Context dispose hone ke baad navigation chhoone par chupchaap data lautaane ki bajaay fail hota hai (EF by default error deta hai).</li>\n<li><b>Design ka kharch</b>: proxies ke liye har navigation <code>virtual</code> aur classes aisi chahiye jinki subclass ban sake; doosra tareeka <code>ILazyLoader</code> injection EF ko aapki entities mein daal deta hai.</li>\n<li>Kahan theek ho sakta hai: chhote desktop tools, admin scripts, prototypes — jahan suvidha zyaada maayne rakhti hai aur data chhota hai.</li>\n</ul>\n<p>TL angle: agar codebase pehle se lazy loading use karta hai, to use ek jhatke mein mat hatao. SQL logging chaalu karo, hot N+1 paths dhoondho, aur pehle unhe Include ya projections se badlo.</p>"
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
        en: "<ul>\n<li>Why <code>ORDER BY</code> the keys? EF reads the flat rows in order and builds one <code>Customer</code> with its <code>Orders</code> list; sorted keys let it stream the result.</li>\n<li>Why <code>LEFT</code> for collections? Customers with zero orders must still come back. A <b>required</b> reference (<code>Order.Customer</code>) can use <code>INNER JOIN</code>; an <b>optional</b> reference uses <code>LEFT JOIN</code>.</li>\n<li><b>Cartesian explosion</b>: a customer with 10 orders and 5 addresses, loaded with <code>Include(c =&gt; c.Orders).Include(c =&gt; c.Addresses)</code>, returns 10 × 5 = 50 rows for that one customer, every row repeating all customer columns. EF logs a warning when one query loads several collections without a splitting choice.</li>\n<li><code>AsSplitQuery()</code>: one SQL for customers, one for orders, one for addresses. Fewer duplicated rows, but more round trips, and the queries are not one consistent snapshot unless you use a transaction. Day 6 covers when to choose which.</li>\n</ul>\n<p>Follow-up: \"How do you see the SQL?\" — <code>ToQueryString()</code> during development, <code>LogTo</code>/logging category <code>Microsoft.EntityFrameworkCore.Database.Command</code> in apps, SQL Server Profiler / Extended Events / Query Store on the server — the SQL skills you already have.</p>",
        hi: "<ul>\n<li>Keys पर <code>ORDER BY</code> क्यों? EF flat rows को क्रम से पढ़कर एक <code>Customer</code> और उसकी <code>Orders</code> list बनाता है; sorted keys से वो result को stream कर पाता है।</li>\n<li>Collections के लिए <code>LEFT</code> क्यों? Zero orders वाले customers भी वापस आने चाहिए। <b>Required</b> reference (<code>Order.Customer</code>) <code>INNER JOIN</code> use कर सकता है; <b>optional</b> reference <code>LEFT JOIN</code>।</li>\n<li><b>Cartesian explosion</b>: 10 orders और 5 addresses वाला customer, <code>Include(c =&gt; c.Orders).Include(c =&gt; c.Addresses)</code> से load करो तो उस एक customer की 10 × 5 = 50 rows आती हैं, और हर row में customer के सारे columns दोहराए जाते हैं। जब एक query बिना splitting choice के कई collections load करे, EF warning log करता है।</li>\n<li><code>AsSplitQuery()</code>: customers के लिए एक SQL, orders के लिए एक, addresses के लिए एक। कम duplicated rows, पर ज़्यादा round trips, और transaction के बिना ये queries एक consistent snapshot नहीं होतीं। कब कौन सा चुनें, Day 6 में।</li>\n</ul>\n<p>Follow-up: \"SQL कैसे देखोगे?\" — development में <code>ToQueryString()</code>, apps में <code>LogTo</code>/logging category <code>Microsoft.EntityFrameworkCore.Database.Command</code>, server पर SQL Server Profiler / Extended Events / Query Store — वही SQL skills जो आपके पास पहले से हैं।</p>",
        hg: "<ul>\n<li>Keys par <code>ORDER BY</code> kyon? EF flat rows ko kram se padhkar ek <code>Customer</code> aur uski <code>Orders</code> list banata hai; sorted keys se woh result ko stream kar paata hai.</li>\n<li>Collections ke liye <code>LEFT</code> kyon? Zero orders wale customers bhi wapas aane chahiye. <b>Required</b> reference (<code>Order.Customer</code>) <code>INNER JOIN</code> use kar sakta hai; <b>optional</b> reference <code>LEFT JOIN</code>.</li>\n<li><b>Cartesian explosion</b>: 10 orders aur 5 addresses wala customer, <code>Include(c =&gt; c.Orders).Include(c =&gt; c.Addresses)</code> se load karo to us ek customer ki 10 × 5 = 50 rows aati hain, aur har row mein customer ke saare columns dohraaye jaate hain. Jab ek query bina splitting choice ke kai collections load kare, EF warning log karta hai.</li>\n<li><code>AsSplitQuery()</code>: customers ke liye ek SQL, orders ke liye ek, addresses ke liye ek. Kam duplicated rows, par zyaada round trips, aur transaction ke bina yeh queries ek consistent snapshot nahi hoti. Kab kaunsa chunein, Day 6 mein.</li>\n</ul>\n<p>Follow-up: \"SQL kaise dekhoge?\" — development mein <code>ToQueryString()</code>, apps mein <code>LogTo</code>/logging category <code>Microsoft.EntityFrameworkCore.Database.Command</code>, server par SQL Server Profiler / Extended Events / Query Store — wahi SQL skills jo aapke paas pehle se hain.</p>"
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
        en: "<ul>\n<li>Tracked: query the same customer twice in one context → the <b>same object</b> both times. And if the DB changed in between, you still see the old in-memory values (the tracked instance wins).</li>\n<li><code>AsNoTracking()</code> + <code>Include(o =&gt; o.Customer)</code> over 100 orders of one customer → up to 100 separate <code>Customer</code> objects with the same data. Usually harmless for DTO mapping, but wasteful for big graphs and confusing if you compare references.</li>\n<li><code>AsNoTrackingWithIdentityResolution()</code> (EF Core 5+): a temporary identity map just for that query — one <code>Customer</code> object, nothing tracked afterwards.</li>\n<li><code>Find(id)</code> uses identity resolution too: if the entity is already tracked, it returns it <b>without a database query</b>.</li>\n</ul>\n<p>Follow-up: \"Which is faster?\" — plain <code>AsNoTracking</code> is cheapest; with identity resolution there is a small lookup cost per row but fewer objects. Measure for large graphs.</p>",
        hi: "<ul>\n<li>Tracked: एक context में एक ही customer को दो बार query करो → दोनों बार <b>वही object</b>। और अगर बीच में DB बदल गया, तो भी आपको पुरानी in-memory values दिखेंगी (tracked instance जीतता है)।</li>\n<li>एक customer के 100 orders पर <code>AsNoTracking()</code> + <code>Include(o =&gt; o.Customer)</code> → एक जैसे data वाले 100 तक अलग <code>Customer</code> objects। DTO mapping के लिए आमतौर पर नुकसान नहीं, पर बड़े graphs के लिए बर्बादी और references compare करो तो उलझन।</li>\n<li><code>AsNoTrackingWithIdentityResolution()</code> (EF Core 5+): सिर्फ़ उस query के लिए एक temporary identity map — एक <code>Customer</code> object, बाद में कुछ tracked नहीं।</li>\n<li><code>Find(id)</code> भी identity resolution use करता है: entity पहले से tracked हो तो उसे <b>बिना database query</b> के लौटा देता है।</li>\n</ul>\n<p>Follow-up: \"कौन सा तेज़ है?\" — सादा <code>AsNoTracking</code> सबसे सस्ता है; identity resolution में हर row पर थोड़ा lookup का खर्च है पर objects कम बनते हैं। बड़े graphs के लिए measure करो।</p>",
        hg: "<ul>\n<li>Tracked: ek context mein ek hi customer ko do baar query karo → dono baar <b>wahi object</b>. Aur agar beech mein DB badal gaya, to bhi aapko purani in-memory values dikhengi (tracked instance jeetta hai).</li>\n<li>Ek customer ke 100 orders par <code>AsNoTracking()</code> + <code>Include(o =&gt; o.Customer)</code> → ek jaise data wale 100 tak alag <code>Customer</code> objects. DTO mapping ke liye aamtaur par nuksaan nahi, par bade graphs ke liye barbaadi aur references compare karo to uljhan.</li>\n<li><code>AsNoTrackingWithIdentityResolution()</code> (EF Core 5+): sirf us query ke liye ek temporary identity map — ek <code>Customer</code> object, baad mein kuch tracked nahi.</li>\n<li><code>Find(id)</code> bhi identity resolution use karta hai: entity pehle se tracked ho to use <b>bina database query</b> ke lauta deta hai.</li>\n</ul>\n<p>Follow-up: \"Kaunsa tez hai?\" — saada <code>AsNoTracking</code> sabse sasta hai; identity resolution mein har row par thoda lookup ka kharch hai par objects kam bante hain. Bade graphs ke liye measure karo.</p>"
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
        en: "<ul>\n<li><b>Load-and-modify</b>: one SELECT + an UPDATE of changed columns. You can validate business rules and check existence (404) first. <code>db.Entry(entity).CurrentValues.SetValues(dto)</code> copies matching properties and marks only the ones that really changed.</li>\n<li><b>Update(entity)</b>: no SELECT, but <b>all</b> columns are written (risk: overwriting columns the client did not send with defaults). It walks the graph: related objects with a key → Modified, without a key → Added.</li>\n<li><b>Attach(entity)</b> → Unchanged; then set properties (or <code>Entry(e).Property(x =&gt; x.City).IsModified = true</code>) to update only those columns.</li>\n<li>Never bind the request body straight to the entity — <b>over-posting</b> lets a client set fields like <code>IsAdmin</code> or <code>Balance</code>. Bind a DTO and map allowed fields.</li>\n<li>For \"set one column on many rows\" without loading, EF Core 7+ has <code>ExecuteUpdate</code> (Day 6). Lost-update protection uses concurrency tokens (Day 6).</li>\n</ul>",
        hi: "<ul>\n<li><b>Load-and-modify</b>: एक SELECT + बदले columns का UPDATE। पहले business rules validate कर सकते हो और existence (404) check कर सकते हो। <code>db.Entry(entity).CurrentValues.SetValues(dto)</code> matching properties copy करता है और सिर्फ़ उन्हें mark करता है जो सच में बदलीं।</li>\n<li><b>Update(entity)</b>: SELECT नहीं, पर <b>सारे</b> columns लिखे जाते हैं (risk: जो columns client ने नहीं भेजे वो defaults से overwrite)। यह graph पर चलता है: key वाले related objects → Modified, बिना key वाले → Added।</li>\n<li><b>Attach(entity)</b> → Unchanged; फिर properties set करो (या <code>Entry(e).Property(x =&gt; x.City).IsModified = true</code>) ताकि सिर्फ़ वही columns update हों।</li>\n<li>Request body को सीधे entity पर bind मत करो — <b>over-posting</b> से client <code>IsAdmin</code> या <code>Balance</code> जैसे fields set कर सकता है। DTO bind करो और allowed fields map करो।</li>\n<li>बिना load किए \"कई rows पर एक column set करना\" हो तो EF Core 7+ में <code>ExecuteUpdate</code> है (Day 6)। Lost-update से बचाव concurrency tokens से होता है (Day 6)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Load-and-modify</b>: ek SELECT + badle columns ka UPDATE. Pehle business rules validate kar sakte ho aur existence (404) check kar sakte ho. <code>db.Entry(entity).CurrentValues.SetValues(dto)</code> matching properties copy karta hai aur sirf unhe mark karta hai jo sach mein badli.</li>\n<li><b>Update(entity)</b>: SELECT nahi, par <b>saare</b> columns likhe jaate hain (risk: jo columns client ne nahi bheje woh defaults se overwrite). Yeh graph par chalta hai: key wale related objects → Modified, bina key wale → Added.</li>\n<li><b>Attach(entity)</b> → Unchanged; phir properties set karo (ya <code>Entry(e).Property(x =&gt; x.City).IsModified = true</code>) taaki sirf wahi columns update hon.</li>\n<li>Request body ko seedhe entity par bind mat karo — <b>over-posting</b> se client <code>IsAdmin</code> ya <code>Balance</code> jaise fields set kar sakta hai. DTO bind karo aur allowed fields map karo.</li>\n<li>Bina load kiye \"kai rows par ek column set karna\" ho to EF Core 7+ mein <code>ExecuteUpdate</code> hai (Day 6). Lost-update se bachaav concurrency tokens se hota hai (Day 6).</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "A typical PUT handler: DTO in, load with tracking, copy allowed fields, save only what changed",
            hi: "एक typical PUT handler: DTO अंदर, tracking के साथ load, allowed fields copy, सिर्फ़ बदला हुआ save",
            hg: "Ek typical PUT handler: DTO andar, tracking ke saath load, allowed fields copy, sirf badla hua save"
          },
          check: "compile",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ],
          src: "using Microsoft.EntityFrameworkCore;\n\npublic record UpdateCustomerRequest(string Name, string? City);   // only what the client may change\n\npublic class CustomerService(ShopContext db)\n{\n    public async Task<bool> UpdateAsync(int id, UpdateCustomerRequest request, CancellationToken ct)\n    {\n        var customer = await db.Customers.FirstOrDefaultAsync(c => c.Id == id, ct);   // tracked\n        if (customer is null) return false;                                           // -> 404\n\n        customer.Name = request.Name;      // Balance and IsAdmin cannot be touched from the request\n        customer.City = request.City;\n\n        await db.SaveChangesAsync(ct);     // UPDATE only the columns whose values changed\n        return true;\n    }\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public string? City { get; set; }\n    public decimal Balance { get; set; }\n    public bool IsAdmin { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}"
        }
      ]
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
        en: "<ul>\n<li>Example: add three customers, the second violates a unique index on <code>Email</code> → <code>DbUpdateException</code>, <b>zero</b> rows saved, all three entries still <code>Added</code>.</li>\n<li>EF also <b>batches</b> statements: several INSERT/UPDATE/DELETE go to SQL Server in one round trip.</li>\n<li>Default since EF Core 7: <code>AutoTransactionBehavior.WhenNeeded</code> — a single statement needs no explicit transaction (it is atomic on its own); several statements get one.</li>\n<li>Need several <code>SaveChanges()</code> calls (or EF + Dapper/raw SQL) to succeed or fail together? Use an explicit transaction: <code>db.Database.BeginTransaction()</code> — Day 6.</li>\n<li>Concurrency conflicts surface as <code>DbUpdateConcurrencyException</code> — also Day 6.</li>\n</ul>\n<p>TL angle: one business operation = one <code>SaveChanges()</code> at the end. Calling <code>SaveChanges()</code> inside a loop is slower (a round trip per item) and leaves half-done work if item 7 fails.</p>",
        hi: "<ul>\n<li>उदाहरण: तीन customers add करो, दूसरा <code>Email</code> के unique index को तोड़ता है → <code>DbUpdateException</code>, <b>एक भी</b> row save नहीं, तीनों entries अब भी <code>Added</code>।</li>\n<li>EF statements को <b>batch</b> भी करता है: कई INSERT/UPDATE/DELETE एक round trip में SQL Server तक जाते हैं।</li>\n<li>EF Core 7 से default: <code>AutoTransactionBehavior.WhenNeeded</code> — एक statement को explicit transaction की ज़रूरत नहीं (वो खुद atomic है); कई statements को एक मिलता है।</li>\n<li>कई <code>SaveChanges()</code> calls (या EF + Dapper/raw SQL) को साथ में succeed या fail करना है? Explicit transaction use करो: <code>db.Database.BeginTransaction()</code> — Day 6।</li>\n<li>Concurrency conflicts <code>DbUpdateConcurrencyException</code> के रूप में आते हैं — वो भी Day 6।</li>\n</ul>\n<p>TL angle: एक business operation = आख़िर में एक <code>SaveChanges()</code>। Loop के अंदर <code>SaveChanges()</code> call करना धीमा है (हर item का एक round trip) और item 7 fail हो तो आधा-अधूरा काम छोड़ देता है।</p>",
        hg: "<ul>\n<li>Udaaharan: teen customers add karo, doosra <code>Email</code> ke unique index ko todta hai → <code>DbUpdateException</code>, <b>ek bhi</b> row save nahi, teenon entries ab bhi <code>Added</code>.</li>\n<li>EF statements ko <b>batch</b> bhi karta hai: kai INSERT/UPDATE/DELETE ek round trip mein SQL Server tak jaate hain.</li>\n<li>EF Core 7 se default: <code>AutoTransactionBehavior.WhenNeeded</code> — ek statement ko explicit transaction ki zaroorat nahi (woh khud atomic hai); kai statements ko ek milta hai.</li>\n<li>Kai <code>SaveChanges()</code> calls (ya EF + Dapper/raw SQL) ko saath mein succeed ya fail karna hai? Explicit transaction use karo: <code>db.Database.BeginTransaction()</code> — Day 6.</li>\n<li>Concurrency conflicts <code>DbUpdateConcurrencyException</code> ke roop mein aate hain — woh bhi Day 6.</li>\n</ul>\n<p>TL angle: ek business operation = aakhir mein ek <code>SaveChanges()</code>. Loop ke andar <code>SaveChanges()</code> call karna dheema hai (har item ka ek round trip) aur item 7 fail ho to aadha-adhoora kaam chhod deta hai.</p>"
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
        en: "<ul>\n<li><b>Lifetime</b>: DbContext in a singleton/static, shared across threads, missing <code>await</code>, <code>.Result</code>/<code>.Wait()</code> on EF async calls.</li>\n<li><b>Reads</b>: tracking queries on read-only endpoints; loading whole entities when a <code>Select</code> to a DTO would do (Day 6); <code>ToList()</code> before <code>Where</code> (filtering in memory instead of SQL — Day 4).</li>\n<li><b>Loading</b>: lazy loading in APIs, Include chains \"just in case\", several collection Includes in one query.</li>\n<li><b>Writes</b>: <code>SaveChanges()</code> inside loops, <code>Update()</code> on request-bound entities (over-posting, all columns overwritten).</li>\n<li><b>API surface</b>: returning EF entities from controllers (cycles, leaking columns, accidental lazy loads) instead of DTOs.</li>\n<li><b>Migrations</b>: generated SQL reviewed, data-loss warnings understood, <code>ON DELETE CASCADE</code> intended, string lengths and decimal precision set, indexes on FK/filter columns.</li>\n</ul>\n<p>TL angle: make it cheap to see SQL — log EF commands in development and keep a short team checklist instead of relying on memory.</p>",
        hi: "<ul>\n<li><b>Lifetime</b>: singleton/static में DbContext, threads के बीच shared, छूटा हुआ <code>await</code>, EF async calls पर <code>.Result</code>/<code>.Wait()</code>।</li>\n<li><b>Reads</b>: read-only endpoints पर tracking queries; जहाँ DTO में <code>Select</code> काफ़ी था वहाँ पूरी entities load करना (Day 6); <code>Where</code> से पहले <code>ToList()</code> (SQL की बजाय memory में filter — Day 4)।</li>\n<li><b>Loading</b>: APIs में lazy loading, \"शायद काम आए\" वाली Include chains, एक query में कई collection Includes।</li>\n<li><b>Writes</b>: loops के अंदर <code>SaveChanges()</code>, request से bind हुई entities पर <code>Update()</code> (over-posting, सारे columns overwrite)।</li>\n<li><b>API surface</b>: controllers से DTOs की बजाय EF entities लौटाना (cycles, columns का leak, accidental lazy loads)।</li>\n<li><b>Migrations</b>: generated SQL review हुआ, data-loss warnings समझी गईं, <code>ON DELETE CASCADE</code> जानबूझकर है, string lengths और decimal precision set हैं, FK/filter columns पर indexes हैं।</li>\n</ul>\n<p>TL angle: SQL देखना आसान बनाओ — development में EF commands log करो और याद्दाश्त पर भरोसा करने की बजाय team की एक छोटी checklist रखो।</p>",
        hg: "<ul>\n<li><b>Lifetime</b>: singleton/static mein DbContext, threads ke beech shared, chhoota hua <code>await</code>, EF async calls par <code>.Result</code>/<code>.Wait()</code>.</li>\n<li><b>Reads</b>: read-only endpoints par tracking queries; jahan DTO mein <code>Select</code> kaafi tha wahan poori entities load karna (Day 6); <code>Where</code> se pehle <code>ToList()</code> (SQL ki bajaay memory mein filter — Day 4).</li>\n<li><b>Loading</b>: APIs mein lazy loading, \"shayad kaam aaye\" wali Include chains, ek query mein kai collection Includes.</li>\n<li><b>Writes</b>: loops ke andar <code>SaveChanges()</code>, request se bind hui entities par <code>Update()</code> (over-posting, saare columns overwrite).</li>\n<li><b>API surface</b>: controllers se DTOs ki bajaay EF entities lautaana (cycles, columns ka leak, accidental lazy loads).</li>\n<li><b>Migrations</b>: generated SQL review hua, data-loss warnings samjhi gayi, <code>ON DELETE CASCADE</code> jaanbujhkar hai, string lengths aur decimal precision set hain, FK/filter columns par indexes hain.</li>\n</ul>\n<p>TL angle: SQL dekhna aasaan banao — development mein EF commands log karo aur yaaddaasht par bharosa karne ki bajaay team ki ek chhoti checklist rakho.</p>"
      }
    }
  ],
  puzzles: [
    {
      id: "add-then-remove",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\n\nusing var db = new ShopContext(options);\ndb.Database.EnsureCreated();\n\nvar asha = new Customer { Name = \"Asha\" };\ndb.Customers.Add(asha);\nConsole.WriteLine($\"{db.Entry(asha).State}, Id = {asha.Id}\");\n\ndb.SaveChanges();\nConsole.WriteLine($\"{db.Entry(asha).State}, Id = {asha.Id}\");\n\nvar ravi = new Customer { Name = \"Ravi\" };\ndb.Customers.Add(ravi);\ndb.Customers.Remove(ravi);\nConsole.WriteLine(db.Entry(ravi).State);\n\ndb.Customers.Remove(asha);\nConsole.WriteLine(db.Entry(asha).State);\nConsole.WriteLine($\"rows written = {db.SaveChanges()}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}",
      answer: "Added, Id = 0\nUnchanged, Id = 1\nDetached\nDeleted\nrows written = 1",
      explain: {
        en: "<ul>\n<li><code>Add</code> only marks the object <b>Added</b>; no SQL runs yet. The real key comes from the database (IDENTITY / autoincrement), so <code>asha.Id</code> is still <b>0</b> (EF keeps a temporary key inside the tracker, not on your object).</li>\n<li><code>SaveChanges</code> sends the INSERT, copies the generated key back (<b>Id = 1</b>) and moves the entity to <b>Unchanged</b>.</li>\n<li>Ravi was Added and then Removed <b>before saving</b>: nothing exists in the database to delete, so EF simply forgets him → <b>Detached</b> (not Deleted).</li>\n<li>Asha exists in the database, so <code>Remove</code> → <b>Deleted</b>. The last <code>SaveChanges</code> sends one DELETE → <b>rows written = 1</b>.</li>\n</ul>",
        hi: "<ul>\n<li><code>Add</code> object को सिर्फ़ <b>Added</b> mark करता है; अभी कोई SQL नहीं चलता। असली key database से आती है (IDENTITY / autoincrement), इसलिए <code>asha.Id</code> अभी भी <b>0</b> है (EF temporary key tracker के अंदर रखता है, आपके object पर नहीं)।</li>\n<li><code>SaveChanges</code> INSERT भेजता है, generated key वापस copy करता है (<b>Id = 1</b>) और entity को <b>Unchanged</b> कर देता है।</li>\n<li>Ravi को save से <b>पहले</b> Add फिर Remove किया: database में delete करने को कुछ है ही नहीं, इसलिए EF उसे बस भूल जाता है → <b>Detached</b> (Deleted नहीं)।</li>\n<li>Asha database में है, इसलिए <code>Remove</code> → <b>Deleted</b>। आख़िरी <code>SaveChanges</code> एक DELETE भेजता है → <b>rows written = 1</b>।</li>\n</ul>",
        hg: "<ul>\n<li><code>Add</code> object ko sirf <b>Added</b> mark karta hai; abhi koi SQL nahi chalta. Asli key database se aati hai (IDENTITY / autoincrement), isliye <code>asha.Id</code> abhi bhi <b>0</b> hai (EF temporary key tracker ke andar rakhta hai, aapke object par nahi).</li>\n<li><code>SaveChanges</code> INSERT bhejta hai, generated key wapas copy karta hai (<b>Id = 1</b>) aur entity ko <b>Unchanged</b> kar deta hai.</li>\n<li>Ravi ko save se <b>pehle</b> Add phir Remove kiya: database mein delete karne ko kuch hai hi nahi, isliye EF use bas bhool jaata hai → <b>Detached</b> (Deleted nahi).</li>\n<li>Asha database mein hai, isliye <code>Remove</code> → <b>Deleted</b>. Aakhri <code>SaveChanges</code> ek DELETE bhejta hai → <b>rows written = 1</b>.</li>\n</ul>"
      }
    },
    {
      id: "no-tracking-save",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\n\nusing (var setup = new ShopContext(options))\n{\n    setup.Database.EnsureCreated();\n    setup.Customers.Add(new Customer { Name = \"Ravi\", City = \"Delhi\" });\n    setup.SaveChanges();\n}\n\nusing var db = new ShopContext(options);\n\nvar ravi = db.Customers.AsNoTracking().Single(c => c.Name == \"Ravi\");\nravi.City = \"Mumbai\";\nConsole.WriteLine($\"saved = {db.SaveChanges()}\");\n\nvar again = db.Customers.Single(c => c.Name == \"Ravi\");\nConsole.WriteLine($\"{again.City}, same object = {ReferenceEquals(ravi, again)}\");\n\nagain.City = \"Mumbai\";\nConsole.WriteLine($\"saved = {db.SaveChanges()}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public string? City { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}",
      answer: "saved = 0\nDelhi, same object = False\nsaved = 1",
      explain: {
        en: "<ul>\n<li><code>AsNoTracking()</code> gives you a plain object the context does not watch. Changing <code>City</code> is invisible to EF, so <code>SaveChanges()</code> has nothing to send → <b>0</b>.</li>\n<li>The database still says <b>Delhi</b>. The second (tracked) query creates a <b>new</b> object — the no-tracking one was never in the identity map → <b>same object = False</b>.</li>\n<li>Changing the tracked object works: DetectChanges sees <code>City</code> changed → one UPDATE → <b>saved = 1</b>.</li>\n<li>Lesson: <code>AsNoTracking</code> for reads only. If you plan to save, query with tracking (or attach the object on purpose).</li>\n</ul>",
        hi: "<ul>\n<li><code>AsNoTracking()</code> आपको एक सादा object देता है जिस पर context की नज़र नहीं है। <code>City</code> बदलना EF को दिखता ही नहीं, इसलिए <code>SaveChanges()</code> के पास भेजने को कुछ नहीं → <b>0</b>।</li>\n<li>Database में अब भी <b>Delhi</b> है। दूसरी (tracked) query एक <b>नया</b> object बनाती है — no-tracking वाला कभी identity map में था ही नहीं → <b>same object = False</b>।</li>\n<li>Tracked object बदलना काम करता है: DetectChanges देखता है कि <code>City</code> बदली → एक UPDATE → <b>saved = 1</b>।</li>\n<li>सीख: <code>AsNoTracking</code> सिर्फ़ reads के लिए। Save करना है तो tracking के साथ query करो (या object को जानबूझकर attach करो)।</li>\n</ul>",
        hg: "<ul>\n<li><code>AsNoTracking()</code> aapko ek saada object deta hai jis par context ki nazar nahi hai. <code>City</code> badalna EF ko dikhta hi nahi, isliye <code>SaveChanges()</code> ke paas bhejne ko kuch nahi → <b>0</b>.</li>\n<li>Database mein ab bhi <b>Delhi</b> hai. Doosri (tracked) query ek <b>naya</b> object banati hai — no-tracking wala kabhi identity map mein tha hi nahi → <b>same object = False</b>.</li>\n<li>Tracked object badalna kaam karta hai: DetectChanges dekhta hai ki <code>City</code> badli → ek UPDATE → <b>saved = 1</b>.</li>\n<li>Seekh: <code>AsNoTracking</code> sirf reads ke liye. Save karna hai to tracking ke saath query karo (ya object ko jaanbujhkar attach karo).</li>\n</ul>"
      }
    },
    {
      id: "identity-resolution",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\n\nusing (var setup = new ShopContext(options))\n{\n    setup.Database.EnsureCreated();\n    var asha = new Customer { Name = \"Asha\" };\n    asha.Orders.Add(new Order { Item = \"Phone\" });\n    asha.Orders.Add(new Order { Item = \"Cover\" });\n    setup.Customers.Add(asha);\n    setup.SaveChanges();\n}\n\nusing var db = new ShopContext(options);\n\nvar first = db.Customers.Single(c => c.Name == \"Asha\");\nvar second = db.Customers.Single(c => c.Id == first.Id);\nConsole.WriteLine(ReferenceEquals(first, second));\n\nvar plain = db.Orders.AsNoTracking().Include(o => o.Customer).ToList();\nConsole.WriteLine(ReferenceEquals(plain[0].Customer, plain[1].Customer));\n\nvar resolved = db.Orders.AsNoTrackingWithIdentityResolution().Include(o => o.Customer).ToList();\nConsole.WriteLine(ReferenceEquals(resolved[0].Customer, resolved[1].Customer));\n\nConsole.WriteLine(db.ChangeTracker.Entries().Count());\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<Order> Orders { get; } = [];\n}\n\npublic class Order\n{\n    public int Id { get; set; }\n    public string Item { get; set; } = \"\";\n    public int CustomerId { get; set; }\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<Order> Orders => Set<Order>();\n}",
      answer: "True\nFalse\nTrue\n1",
      explain: {
        en: "<ul>\n<li>Two <b>tracked</b> queries for the same row return the <b>same instance</b>: the change tracker keeps one object per key → <b>True</b>.</li>\n<li><code>AsNoTracking()</code> + <code>Include</code>: the JOIN returns Asha's columns on both order rows, and EF builds a <b>new</b> <code>Customer</code> for each row → <b>False</b>.</li>\n<li><code>AsNoTrackingWithIdentityResolution()</code> keeps a temporary identity map for that query only → both orders share <b>one</b> Asha → <b>True</b>.</li>\n<li>Only the tracked Asha from the first query is in the change tracker; neither no-tracking query added anything → <b>1</b>.</li>\n</ul>",
        hi: "<ul>\n<li>एक ही row के लिए दो <b>tracked</b> queries <b>वही instance</b> लौटाती हैं: change tracker हर key का एक object रखता है → <b>True</b>।</li>\n<li><code>AsNoTracking()</code> + <code>Include</code>: JOIN दोनों order rows पर Asha के columns लौटाता है, और EF हर row के लिए एक <b>नया</b> <code>Customer</code> बनाता है → <b>False</b>।</li>\n<li><code>AsNoTrackingWithIdentityResolution()</code> सिर्फ़ उस query के लिए एक temporary identity map रखता है → दोनों orders <b>एक ही</b> Asha share करते हैं → <b>True</b>।</li>\n<li>Change tracker में सिर्फ़ पहली query वाली tracked Asha है; किसी no-tracking query ने कुछ नहीं जोड़ा → <b>1</b>।</li>\n</ul>",
        hg: "<ul>\n<li>Ek hi row ke liye do <b>tracked</b> queries <b>wahi instance</b> lautaati hain: change tracker har key ka ek object rakhta hai → <b>True</b>.</li>\n<li><code>AsNoTracking()</code> + <code>Include</code>: JOIN dono order rows par Asha ke columns lautaata hai, aur EF har row ke liye ek <b>naya</b> <code>Customer</code> banata hai → <b>False</b>.</li>\n<li><code>AsNoTrackingWithIdentityResolution()</code> sirf us query ke liye ek temporary identity map rakhta hai → dono orders <b>ek hi</b> Asha share karte hain → <b>True</b>.</li>\n<li>Change tracker mein sirf pehli query wali tracked Asha hai; kisi no-tracking query ne kuch nahi joda → <b>1</b>.</li>\n</ul>"
      }
    },
    {
      id: "fixup-without-include",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\n\nusing (var setup = new ShopContext(options))\n{\n    setup.Database.EnsureCreated();\n    var ravi = new Customer { Name = \"Ravi\" };\n    ravi.Orders.Add(new Order { Item = \"Laptop\" });\n    setup.Customers.Add(ravi);\n    setup.SaveChanges();\n}\n\nusing var db = new ShopContext(options);\n\nvar order = db.Orders.Single(o => o.Item == \"Laptop\");\nConsole.WriteLine(order.Customer is null);\n\nvar customer = db.Customers.Single(c => c.Name == \"Ravi\");\nConsole.WriteLine(order.Customer is null);\nConsole.WriteLine(customer.Orders.Count);\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<Order> Orders { get; } = [];\n}\n\npublic class Order\n{\n    public int Id { get; set; }\n    public string Item { get; set; } = \"\";\n    public int CustomerId { get; set; }\n    public Customer? Customer { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<Order> Orders => Set<Order>();\n}",
      answer: "True\nFalse\n1",
      explain: {
        en: "<ul>\n<li>No <code>Include</code>, no lazy loading → the first query loads only the order row. <code>order.Customer</code> is <b>null</b> → <b>True</b>.</li>\n<li>The second query loads Ravi into the <b>same</b> context. EF's <b>relationship fix-up</b> sees that the tracked order has <code>CustomerId</code> = Ravi's key and connects them both ways → <code>order.Customer</code> is set (<b>False</b>), and <code>customer.Orders</code> contains the order (<b>1</b>).</li>\n<li>No extra query ran for this — fix-up only connects entities that are <b>already tracked</b>.</li>\n<li>Interview angle: this is why code sometimes \"works\" without Include (the related data happened to be loaded earlier in the request) and breaks when someone reorders the code. Be explicit with Include.</li>\n</ul>",
        hi: "<ul>\n<li>न <code>Include</code>, न lazy loading → पहली query सिर्फ़ order की row load करती है। <code>order.Customer</code> <b>null</b> है → <b>True</b>।</li>\n<li>दूसरी query Ravi को <b>उसी</b> context में load करती है। EF का <b>relationship fix-up</b> देखता है कि tracked order का <code>CustomerId</code> = Ravi की key, और दोनों को दोनों तरफ़ से जोड़ देता है → <code>order.Customer</code> set हो जाता है (<b>False</b>), और <code>customer.Orders</code> में order आ जाता है (<b>1</b>)।</li>\n<li>इसके लिए कोई extra query नहीं चली — fix-up सिर्फ़ उन entities को जोड़ता है जो <b>पहले से tracked</b> हैं।</li>\n<li>Interview angle: इसीलिए कभी-कभी code बिना Include के \"चल जाता है\" (related data उस request में पहले ही load हो गया था) और कोई code का क्रम बदले तो टूट जाता है। Include के साथ explicit रहो।</li>\n</ul>",
        hg: "<ul>\n<li>Na <code>Include</code>, na lazy loading → pehli query sirf order ki row load karti hai. <code>order.Customer</code> <b>null</b> hai → <b>True</b>.</li>\n<li>Doosri query Ravi ko <b>usi</b> context mein load karti hai. EF ka <b>relationship fix-up</b> dekhta hai ki tracked order ka <code>CustomerId</code> = Ravi ki key, aur dono ko dono taraf se jod deta hai → <code>order.Customer</code> set ho jaata hai (<b>False</b>), aur <code>customer.Orders</code> mein order aa jaata hai (<b>1</b>).</li>\n<li>Iske liye koi extra query nahi chali — fix-up sirf un entities ko jodta hai jo <b>pehle se tracked</b> hain.</li>\n<li>Interview angle: isiliye kabhi-kabhi code bina Include ke \"chal jaata hai\" (related data us request mein pehle hi load ho gaya tha) aur koi code ka kram badle to toot jaata hai. Include ke saath explicit raho.</li>\n</ul>"
      }
    },
    {
      id: "include-join-type",
      packages: [
        "Microsoft.EntityFrameworkCore.SqlServer"
      ],
      src: "using Microsoft.EntityFrameworkCore;\n\n// Dummy connection string: ToQueryString only generates SQL, nothing connects\nvar options = new DbContextOptionsBuilder<ShopContext>()\n    .UseSqlServer(\"Server=.;Database=Shop;Trusted_Connection=True;\")\n    .Options;\nusing var db = new ShopContext(options);\n\nConsole.WriteLine(db.Orders.Include(o => o.Customer).ToQueryString());\nConsole.WriteLine(\"---\");\nConsole.WriteLine(db.Customers.Include(c => c.Orders).ToQueryString());\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<Order> Orders { get; } = [];\n}\n\npublic class Order\n{\n    public int Id { get; set; }\n    public string Item { get; set; } = \"\";\n    public int CustomerId { get; set; }              // required FK\n    public Customer Customer { get; set; } = null!;\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<Order> Orders => Set<Order>();\n}",
      answer: "SELECT [o].[Id], [o].[CustomerId], [o].[Item], [c].[Id], [c].[Name]\nFROM [Orders] AS [o]\nINNER JOIN [Customers] AS [c] ON [o].[CustomerId] = [c].[Id]\n---\nSELECT [c].[Id], [c].[Name], [o].[Id], [o].[CustomerId], [o].[Item]\nFROM [Customers] AS [c]\nLEFT JOIN [Orders] AS [o] ON [c].[Id] = [o].[CustomerId]\nORDER BY [c].[Id]",
      explain: {
        en: "<ul>\n<li><b>Order → Customer</b> is a required reference (<code>int CustomerId</code>, NOT NULL): every order has a customer, so EF can safely use an <b>INNER JOIN</b>. No <code>ORDER BY</code> is needed — each row is one complete order.</li>\n<li><b>Customer → Orders</b> is a collection: customers with zero orders must still appear, so EF uses a <b>LEFT JOIN</b>. One customer becomes many rows, so EF adds <b>ORDER BY [c].[Id]</b> to read each customer's rows together and rebuild <code>customer.Orders</code>.</li>\n<li>Notice the customer columns repeat on every order row — with several collection Includes this repetition multiplies (cartesian explosion; <code>AsSplitQuery</code> on Day 6).</li>\n<li>If <code>CustomerId</code> were <code>int?</code> (optional), the first query would use a LEFT JOIN too.</li>\n</ul>",
        hi: "<ul>\n<li><b>Order → Customer</b> एक required reference है (<code>int CustomerId</code>, NOT NULL): हर order का customer होता है, इसलिए EF बेझिझक <b>INNER JOIN</b> use कर सकता है। <code>ORDER BY</code> की ज़रूरत नहीं — हर row एक पूरा order है।</li>\n<li><b>Customer → Orders</b> एक collection है: zero orders वाले customers भी दिखने चाहिए, इसलिए EF <b>LEFT JOIN</b> use करता है। एक customer कई rows बन जाता है, इसलिए EF <b>ORDER BY [c].[Id]</b> जोड़ता है ताकि हर customer की rows साथ पढ़कर <code>customer.Orders</code> फिर से बना सके।</li>\n<li>ध्यान दो कि customer के columns हर order row पर दोहराए जाते हैं — कई collection Includes के साथ यह दोहराव गुणा हो जाता है (cartesian explosion; <code>AsSplitQuery</code> Day 6 में)।</li>\n<li>अगर <code>CustomerId</code> <code>int?</code> (optional) होता, तो पहली query भी LEFT JOIN use करती।</li>\n</ul>",
        hg: "<ul>\n<li><b>Order → Customer</b> ek required reference hai (<code>int CustomerId</code>, NOT NULL): har order ka customer hota hai, isliye EF bejhijhak <b>INNER JOIN</b> use kar sakta hai. <code>ORDER BY</code> ki zaroorat nahi — har row ek poora order hai.</li>\n<li><b>Customer → Orders</b> ek collection hai: zero orders wale customers bhi dikhne chahiye, isliye EF <b>LEFT JOIN</b> use karta hai. Ek customer kai rows ban jaata hai, isliye EF <b>ORDER BY [c].[Id]</b> jodta hai taaki har customer ki rows saath padhkar <code>customer.Orders</code> phir se bana sake.</li>\n<li>Dhyaan do ki customer ke columns har order row par dohraaye jaate hain — kai collection Includes ke saath yeh dohraav guna ho jaata hai (cartesian explosion; <code>AsSplitQuery</code> Day 6 mein).</li>\n<li>Agar <code>CustomerId</code> <code>int?</code> (optional) hota, to pehli query bhi LEFT JOIN use karti.</li>\n</ul>"
      }
    },
    {
      id: "lazy-n-plus-one",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite",
        "Microsoft.EntityFrameworkCore.Proxies"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Diagnostics;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\n\nint queries = 0;\nvar options = new DbContextOptionsBuilder<ShopContext>()\n    .UseSqlite(connection)\n    .UseLazyLoadingProxies()\n    .LogTo(_ => queries++, new[] { RelationalEventId.CommandExecuted })   // count SQL commands\n    .Options;\n\nusing (var setup = new ShopContext(options))\n{\n    setup.Database.EnsureCreated();\n    setup.Customers.AddRange(\n        new Customer { Name = \"Asha\", Orders = { new Order { Item = \"Phone\" }, new Order { Item = \"Cover\" } } },\n        new Customer { Name = \"Ravi\", Orders = { new Order { Item = \"Laptop\" } } },\n        new Customer { Name = \"Meena\" });\n    setup.SaveChanges();\n}\n\nusing var db = new ShopContext(options);\n\nqueries = 0;\nvar customers = db.Customers.OrderBy(c => c.Name).ToList();\nforeach (var c in customers)\n    Console.WriteLine($\"{c.Name}: {c.Orders.Count}\");\nConsole.WriteLine($\"queries = {queries}\");\n\nqueries = 0;\nint total = customers.Sum(c => c.Orders.Count);\nConsole.WriteLine($\"total = {total}, queries = {queries}\");\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public virtual List<Order> Orders { get; set; } = [];   // virtual: the proxy overrides it\n}\n\npublic class Order\n{\n    public int Id { get; set; }\n    public string Item { get; set; } = \"\";\n    public int CustomerId { get; set; }\n    public virtual Customer Customer { get; set; } = null!;\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}",
      answer: "Asha: 2\nMeena: 0\nRavi: 1\nqueries = 4\ntotal = 3, queries = 0",
      explain: {
        en: "<ul>\n<li>Query 1 loads the three customers (sorted by name). With lazy-loading proxies, each <code>c.Orders</code> getter checks \"loaded yet?\" and, if not, runs a query.</li>\n<li>Three customers → three more queries → <b>queries = 4</b>. That is <b>N+1</b>: 1 for the list + N for the children. Meena's query runs too, even though she has no orders.</li>\n<li>The second loop touches the same navigations again, but they are now marked as loaded → <b>0</b> new queries. Lazy loading runs once per navigation per entity, not on every access.</li>\n<li>With 3 customers this is harmless; with 3,000 it is 3,001 round trips. The fix is <code>Include(c =&gt; c.Orders)</code> (1 query) or a projection — Day 6 goes deeper into N+1.</li>\n</ul>",
        hi: "<ul>\n<li>Query 1 तीनों customers load करती है (नाम से sorted)। Lazy-loading proxies के साथ हर <code>c.Orders</code> getter check करता है \"load हुआ?\" और नहीं हुआ तो एक query चलाता है।</li>\n<li>तीन customers → तीन और queries → <b>queries = 4</b>। यही <b>N+1</b> है: list के लिए 1 + children के लिए N। Meena की query भी चलती है, जबकि उसके कोई orders नहीं हैं।</li>\n<li>दूसरा loop वही navigations फिर छूता है, पर अब वो loaded mark हैं → <b>0</b> नई queries। Lazy loading हर entity के हर navigation के लिए एक बार चलता है, हर access पर नहीं।</li>\n<li>3 customers के साथ यह नुकसानदेह नहीं; 3,000 के साथ यह 3,001 round trips है। Fix है <code>Include(c =&gt; c.Orders)</code> (1 query) या projection — N+1 पर और गहराई Day 6 में।</li>\n</ul>",
        hg: "<ul>\n<li>Query 1 teenon customers load karti hai (naam se sorted). Lazy-loading proxies ke saath har <code>c.Orders</code> getter check karta hai \"load hua?\" aur nahi hua to ek query chalata hai.</li>\n<li>Teen customers → teen aur queries → <b>queries = 4</b>. Yahi <b>N+1</b> hai: list ke liye 1 + children ke liye N. Meena ki query bhi chalti hai, jabki uske koi orders nahi hain.</li>\n<li>Doosra loop wahi navigations phir chhoota hai, par ab woh loaded mark hain → <b>0</b> nayi queries. Lazy loading har entity ke har navigation ke liye ek baar chalta hai, har access par nahi.</li>\n<li>3 customers ke saath yeh nuksaandeh nahi; 3,000 ke saath yeh 3,001 round trips hai. Fix hai <code>Include(c =&gt; c.Orders)</code> (1 query) ya projection — N+1 par aur gehraai Day 6 mein.</li>\n</ul>"
      }
    },
    {
      id: "update-vs-attach",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.EntityFrameworkCore;\n\n// No database needed: we only look at what the change tracker would send\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(\"Data Source=:memory:\").Options;\nusing var db = new ShopContext(options);\n\n// Imagine these objects came from a PUT request body\nvar fromRequest = new Customer { Id = 1, Name = \"Asha\", City = \"Mumbai\" };\ndb.Update(fromRequest);\nConsole.WriteLine($\"Update: {db.Entry(fromRequest).State}, modified = {Modified(fromRequest)}\");\ndb.ChangeTracker.Clear();\n\nvar stub = new Customer { Id = 1, Name = \"Asha\", City = \"Pune\" };\ndb.Attach(stub);\nConsole.WriteLine($\"Attach: {db.Entry(stub).State}\");\nstub.City = \"Mumbai\";\nConsole.WriteLine($\"Attach + edit: {db.Entry(stub).State}, modified = {Modified(stub)}\");\ndb.ChangeTracker.Clear();\n\nvar brandNew = new Customer { Name = \"Neha\", City = \"Goa\" };\ndb.Update(brandNew);\nConsole.WriteLine($\"Update without key: {db.Entry(brandNew).State}\");\n\nstring Modified(Customer c) =>\n    string.Join(\", \", db.Entry(c).Properties.Where(p => p.IsModified).Select(p => p.Metadata.Name));\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public string? City { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}",
      answer: "Update: Modified, modified = City, Name\nAttach: Unchanged\nAttach + edit: Modified, modified = City\nUpdate without key: Added",
      explain: {
        en: "<ul>\n<li><code>Update()</code> on an object with a key value: EF has no original values, so it marks the entity <b>Modified</b> and <b>every non-key property</b> modified → the UPDATE would write <code>City</code> <b>and</b> <code>Name</code> (and any column the client forgot would be overwritten too).</li>\n<li><code>Attach()</code> says \"this row exists exactly like this\" → <b>Unchanged</b>. The current values become the snapshot.</li>\n<li>Changing <code>City</code> after Attach → DetectChanges finds just that difference → only <b>City</b> is modified, so the UPDATE writes one column.</li>\n<li><code>Update()</code> on an object whose key is the default (0) with a store-generated key: EF treats it as new → <b>Added</b> (an INSERT, not an UPDATE). A classic bug when a client forgets to send the id.</li>\n</ul>",
        hi: "<ul>\n<li>Key value वाले object पर <code>Update()</code>: EF के पास original values नहीं हैं, इसलिए वो entity को <b>Modified</b> और <b>हर non-key property</b> को modified mark करता है → UPDATE <code>City</code> <b>और</b> <code>Name</code> दोनों लिखेगा (और जो column client भेजना भूल गया वो भी overwrite होगा)।</li>\n<li><code>Attach()</code> कहता है \"यह row बिल्कुल ऐसी ही मौजूद है\" → <b>Unchanged</b>। Current values ही snapshot बन जाती हैं।</li>\n<li>Attach के बाद <code>City</code> बदलो → DetectChanges को सिर्फ़ वही फ़र्क मिलता है → सिर्फ़ <b>City</b> modified, इसलिए UPDATE एक ही column लिखता है।</li>\n<li>Store-generated key वाले object पर, जिसकी key default (0) है, <code>Update()</code>: EF उसे नया मानता है → <b>Added</b> (UPDATE नहीं, INSERT)। Client id भेजना भूल जाए तो यह classic bug है।</li>\n</ul>",
        hg: "<ul>\n<li>Key value wale object par <code>Update()</code>: EF ke paas original values nahi hain, isliye woh entity ko <b>Modified</b> aur <b>har non-key property</b> ko modified mark karta hai → UPDATE <code>City</code> <b>aur</b> <code>Name</code> dono likhega (aur jo column client bhejna bhool gaya woh bhi overwrite hoga).</li>\n<li><code>Attach()</code> kehta hai \"yeh row bilkul aisi hi maujood hai\" → <b>Unchanged</b>. Current values hi snapshot ban jaati hain.</li>\n<li>Attach ke baad <code>City</code> badlo → DetectChanges ko sirf wahi farak milta hai → sirf <b>City</b> modified, isliye UPDATE ek hi column likhta hai.</li>\n<li>Store-generated key wale object par, jiski key default (0) hai, <code>Update()</code>: EF use naya maanta hai → <b>Added</b> (UPDATE nahi, INSERT). Client id bhejna bhool jaaye to yeh classic bug hai.</li>\n</ul>"
      }
    },
    {
      id: "stale-tracked-data",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopContext>().UseSqlite(connection).Options;\n\nusing (var setup = new ShopContext(options))\n{\n    setup.Database.EnsureCreated();\n    setup.Customers.Add(new Customer { Name = \"Asha\", City = \"Pune\" });\n    setup.SaveChanges();\n}\n\nusing var db = new ShopContext(options);\nvar asha = db.Customers.Single(c => c.Name == \"Asha\");\n\n// Another request (another context) changes the same row\nusing (var other = new ShopContext(options))\n{\n    other.Customers.Single(c => c.Name == \"Asha\").City = \"Mumbai\";\n    other.SaveChanges();\n}\n\nvar again = db.Customers.Single(c => c.Name == \"Asha\");\nConsole.WriteLine($\"{again.City}, same object = {ReferenceEquals(asha, again)}\");\n\nvar fresh = db.Customers.AsNoTracking().Single(c => c.Name == \"Asha\");\nConsole.WriteLine(fresh.City);\n\ndb.Entry(asha).Reload();\nConsole.WriteLine(asha.City);\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public string? City { get; set; }\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n}",
      answer: "Pune, same object = True\nMumbai\nMumbai",
      explain: {
        en: "<ul>\n<li>The second tracked query <b>does</b> go to the database and reads City = Mumbai. But Asha's key is already tracked, so EF returns the <b>existing instance</b> and does not overwrite its values → <b>Pune, same object = True</b>. (Otherwise your unsaved edits could be silently lost.)</li>\n<li>The no-tracking query skips the identity map and builds a new object from the row → <b>Mumbai</b>.</li>\n<li><code>Entry(asha).Reload()</code> re-reads the row and overwrites the tracked values → <b>Mumbai</b>.</li>\n<li>Lesson: a long-lived context shows stale data. Keep contexts short (one per request) — then this rarely matters. For real \"someone else changed it\" conflicts, use concurrency tokens (Day 6).</li>\n</ul>",
        hi: "<ul>\n<li>दूसरी tracked query database तक <b>जाती</b> है और City = Mumbai पढ़ती है। पर Asha की key पहले से tracked है, इसलिए EF <b>पुराना instance</b> लौटाता है और उसकी values overwrite नहीं करता → <b>Pune, same object = True</b>। (वरना आपके unsaved बदलाव चुपचाप खो सकते थे।)</li>\n<li>No-tracking query identity map को छोड़कर row से नया object बनाती है → <b>Mumbai</b>।</li>\n<li><code>Entry(asha).Reload()</code> row को फिर से पढ़कर tracked values overwrite करता है → <b>Mumbai</b>।</li>\n<li>सीख: लंबे समय तक ज़िंदा context पुराना data दिखाता है। Contexts छोटे रखो (हर request का एक) — तब यह कम ही मायने रखता है। असली \"किसी और ने बदल दिया\" वाले conflicts के लिए concurrency tokens use करो (Day 6)।</li>\n</ul>",
        hg: "<ul>\n<li>Doosri tracked query database tak <b>jaati</b> hai aur City = Mumbai padhti hai. Par Asha ki key pehle se tracked hai, isliye EF <b>purana instance</b> lautaata hai aur uski values overwrite nahi karta → <b>Pune, same object = True</b>. (Warna aapke unsaved badlaav chupchaap kho sakte the.)</li>\n<li>No-tracking query identity map ko chhodkar row se naya object banati hai → <b>Mumbai</b>.</li>\n<li><code>Entry(asha).Reload()</code> row ko phir se padhkar tracked values overwrite karta hai → <b>Mumbai</b>.</li>\n<li>Seekh: lambe samay tak zinda context purana data dikhaata hai. Contexts chhote rakho (har request ka ek) — tab yeh kam hi maayne rakhta hai. Asli \"kisi aur ne badal diya\" wale conflicts ke liye concurrency tokens use karo (Day 6).</li>\n</ul>"
      }
    },
    {
      id: "restrict-optional-fk",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<SchoolContext>().UseSqlite(connection).Options;\n\nusing (var setup = new SchoolContext(options))\n{\n    setup.Database.EnsureCreated();\n    setup.Teachers.Add(new Teacher { Name = \"Rao\", Students = { new Student { Name = \"Asha\" } } });\n    setup.Teachers.Add(new Teacher { Name = \"Iyer\", Students = { new Student { Name = \"Ravi\" } } });\n    setup.SaveChanges();\n}\n\n// 1. Delete a mentor WITH her students loaded (tracked)\nusing (var db = new SchoolContext(options))\n{\n    var rao = db.Teachers.Include(t => t.Students).Single(t => t.Name == \"Rao\");\n    db.Teachers.Remove(rao);\n    Console.WriteLine($\"saved = {db.SaveChanges()}\");\n    var asha = db.Students.AsNoTracking().Single(s => s.Name == \"Asha\");\n    Console.WriteLine($\"Asha.MentorId = {asha.MentorId?.ToString() ?? \"null\"}\");\n}\n\n// 2. Delete a mentor WITHOUT loading her students\nusing (var db = new SchoolContext(options))\n{\n    var iyer = db.Teachers.Single(t => t.Name == \"Iyer\");\n    db.Teachers.Remove(iyer);\n    try\n    {\n        db.SaveChanges();\n        Console.WriteLine(\"deleted\");\n    }\n    catch (DbUpdateException)\n    {\n        Console.WriteLine(\"DbUpdateException: the database FK blocked the delete\");\n    }\n}\n\npublic class Teacher\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public List<Student> Students { get; } = [];\n}\n\npublic class Student\n{\n    public int Id { get; set; }\n    public string Name { get; set; } = \"\";\n    public int? MentorId { get; set; }              // optional FK\n    public Teacher? Mentor { get; set; }\n}\n\npublic class SchoolContext(DbContextOptions<SchoolContext> options) : DbContext(options)\n{\n    public DbSet<Teacher> Teachers => Set<Teacher>();\n    public DbSet<Student> Students => Set<Student>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n        => modelBuilder.Entity<Student>()\n            .HasOne(s => s.Mentor)\n            .WithMany(t => t.Students)\n            .HasForeignKey(s => s.MentorId)\n            .OnDelete(DeleteBehavior.Restrict);      // \"Restrict\" — but the FK is optional\n}",
      answer: "saved = 2\nAsha.MentorId = null\nDbUpdateException: the database FK blocked the delete",
      explain: {
        en: "<ul>\n<li>The FK is <b>optional</b> (<code>int? MentorId</code>) and configured with <code>Restrict</code>, so the database FK has no cascade (<code>NO ACTION</code>).</li>\n<li><b>Case 1</b>: Asha is <b>tracked</b> (loaded with Include). For an optional relationship, EF still severs it: it sets Asha's <code>MentorId</code> to NULL (an UPDATE) and deletes Rao (a DELETE) → <b>saved = 2</b>, <b>MentorId = null</b>. \"Restrict\" did not stop anything.</li>\n<li><b>Case 2</b>: Ravi is <b>not loaded</b>, so EF knows nothing about him and sends only the DELETE. The database FK still points from Ravi to Iyer → the database rejects it → <b>DbUpdateException</b>.</li>\n<li>Lesson: for optional FKs, <code>Restrict</code>/<code>NoAction</code> block the delete only at the database level. If you want EF to leave tracked children alone too, use <code>DeleteBehavior.ClientNoAction</code>. For a <b>required</b> FK, the delete fails in both cases.</li>\n</ul>",
        hi: "<ul>\n<li>FK <b>optional</b> है (<code>int? MentorId</code>) और <code>Restrict</code> से configure है, इसलिए database FK में कोई cascade नहीं (<code>NO ACTION</code>)।</li>\n<li><b>Case 1</b>: Asha <b>tracked</b> है (Include से load)। Optional relationship में EF फिर भी रिश्ता तोड़ देता है: Asha का <code>MentorId</code> NULL करता है (एक UPDATE) और Rao को delete करता है (एक DELETE) → <b>saved = 2</b>, <b>MentorId = null</b>। \"Restrict\" ने कुछ नहीं रोका।</li>\n<li><b>Case 2</b>: Ravi <b>load नहीं</b> हुआ, इसलिए EF उसके बारे में कुछ नहीं जानता और सिर्फ़ DELETE भेजता है। Database FK अब भी Ravi से Iyer को point करता है → database मना कर देता है → <b>DbUpdateException</b>।</li>\n<li>सीख: optional FKs पर <code>Restrict</code>/<code>NoAction</code> delete को सिर्फ़ database के स्तर पर रोकते हैं। अगर EF भी tracked children को न छुए, तो <code>DeleteBehavior.ClientNoAction</code> use करो। <b>Required</b> FK पर delete दोनों cases में fail होता है।</li>\n</ul>",
        hg: "<ul>\n<li>FK <b>optional</b> hai (<code>int? MentorId</code>) aur <code>Restrict</code> se configure hai, isliye database FK mein koi cascade nahi (<code>NO ACTION</code>).</li>\n<li><b>Case 1</b>: Asha <b>tracked</b> hai (Include se load). Optional relationship mein EF phir bhi rishta tod deta hai: Asha ka <code>MentorId</code> NULL karta hai (ek UPDATE) aur Rao ko delete karta hai (ek DELETE) → <b>saved = 2</b>, <b>MentorId = null</b>. \"Restrict\" ne kuch nahi roka.</li>\n<li><b>Case 2</b>: Ravi <b>load nahi</b> hua, isliye EF uske baare mein kuch nahi jaanta aur sirf DELETE bhejta hai. Database FK ab bhi Ravi se Iyer ko point karta hai → database mana kar deta hai → <b>DbUpdateException</b>.</li>\n<li>Seekh: optional FKs par <code>Restrict</code>/<code>NoAction</code> delete ko sirf database ke star par rokte hain. Agar aap chahte ho ki EF bhi tracked children ko na chhuye, to <code>DeleteBehavior.ClientNoAction</code> use karo. <b>Required</b> FK par delete dono cases mein fail hota hai.</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>DbContext</b> = a short unit-of-work session; <code>DbSet&lt;T&gt;</code> = a table. <code>Add</code> only collects; <code>SaveChanges()</code> writes everything in one transaction.",
      "<b>Lifetime</b>: <code>AddDbContext</code> = Scoped, one per HTTP request. Not thread-safe: never a singleton. No request scope: <code>IDbContextFactory</code>.",
      "<b>Code-First model</b>: conventions give defaults (<code>Id</code> = key, <code>string?</code> = NULL); the Fluent API sets lengths, required and indexes. Review <code>GenerateCreateScript()</code>.",
      "<b>Migrations</b>: <code>Up()</code> + <code>Down()</code> made by diffing against the model snapshot; <code>migrations add</code> writes files only, <code>database update</code> applies and fills <code>__EFMigrationsHistory</code>.",
      "<b>Relationships</b>: navigation + foreign key; 1:N = FK on the many side; N:N = join table made from two collections (EF Core 5+).",
      "<b>Loading</b>: related data is not loaded by default. <code>Include</code>/<code>ThenInclude</code> = one query with JOINs; <code>Load()</code> = one extra query; lazy loading hides queries (N+1).",
      "<b>Tracking</b>: states Added / Unchanged / Modified / Deleted / Detached; the UPDATE has only changed columns. <code>AsNoTracking()</code> for read-only queries.",
      "<b>Factory / pool</b>: <code>AddDbContextFactory</code> for background jobs, Blazor Server and parallel work; <code>AddDbContextPool</code> only for proven high-throughput needs.",
      "<b>Production migrations</b>: an idempotent SQL script or a bundle run by the pipeline — not <code>Migrate()</code> at startup on many instances.",
      "<b>Identity resolution</b>: one object per key in a context — a tracked query will not refresh it; <code>AsNoTrackingWithIdentityResolution()</code> dedupes without tracking."
    ],
    meaning: {
      hi: [
        "DbContext छोटी unit-of-work session है; DbSet = table। Add सिर्फ़ जमा करता है; SaveChanges() सब एक transaction में लिखता है",
        "Lifetime: AddDbContext = Scoped, हर HTTP request के लिए एक। Thread-safe नहीं: कभी singleton नहीं। Request नहीं तो IDbContextFactory",
        "Code-First model: conventions defaults देते हैं; Fluent API लंबाई, required, indexes तय करती है। GenerateCreateScript() review करो",
        "Migrations: Up() + Down(), model snapshot से फ़र्क़ करके बनते हैं; migrations add सिर्फ़ files लिखता है, database update लागू करता है और history भरता है",
        "Relationships: navigation + foreign key; 1:N = many वाली तरफ़ FK; N:N = दो collections से बनी join table (EF Core 5+)",
        "Loading: related data default में load नहीं होता। Include/ThenInclude = JOINs के साथ एक query; Load() = एक अतिरिक्त query; lazy loading queries छिपाती है (N+1)",
        "Tracking: states Added / Unchanged / Modified / Deleted / Detached; UPDATE में सिर्फ़ बदले columns। सिर्फ़-पढ़ने वाली queries के लिए AsNoTracking()",
        "Factory / pool: background jobs, Blazor Server और parallel काम के लिए AddDbContextFactory; AddDbContextPool सिर्फ़ साबित हुई high-throughput ज़रूरत के लिए।",
        "Production migrations: pipeline से चलने वाली idempotent SQL script या bundle — कई instances पर startup में Migrate() नहीं।",
        "Identity resolution: एक context में हर key का एक object — tracked query उसे refresh नहीं करती; AsNoTrackingWithIdentityResolution() बिना tracking के duplicates हटाता है।"
      ],
      hg: [
        "DbContext chhoti unit-of-work session hai; DbSet = table. Add sirf jama karta hai; SaveChanges() sab ek transaction mein likhta hai",
        "Lifetime: AddDbContext = Scoped, har HTTP request ke liye ek. Thread-safe nahi: kabhi singleton nahi. Request nahi toh IDbContextFactory",
        "Code-First model: conventions defaults dete hain; Fluent API lambai, required, indexes tay karti hai. GenerateCreateScript() review karo",
        "Migrations: Up() + Down(), model snapshot se farq karke bante hain; migrations add sirf files likhta hai, database update laagu karta hai aur history bharta hai",
        "Relationships: navigation + foreign key; 1:N = many wali taraf FK; N:N = do collections se bani join table (EF Core 5+)",
        "Loading: related data default mein load nahi hota. Include/ThenInclude = JOINs ke saath ek query; Load() = ek atirikt query; lazy loading queries chhipati hai (N+1)",
        "Tracking: states Added / Unchanged / Modified / Deleted / Detached; UPDATE mein sirf badle columns. Sirf-padhne wali queries ke liye AsNoTracking()",
        "Factory / pool: background jobs, Blazor Server aur parallel kaam ke liye AddDbContextFactory; AddDbContextPool sirf saabit hui high-throughput zaroorat ke liye.",
        "Production migrations: pipeline se chalne wali idempotent SQL script ya bundle — kai instances par startup mein Migrate() nahi.",
        "Identity resolution: ek context mein har key ka ek object — tracked query use refresh nahi karti; AsNoTrackingWithIdentityResolution() bina tracking ke duplicates hataata hai."
      ]
    }
  }
};
