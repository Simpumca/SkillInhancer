// Day 11 — Enterprise Patterns + DI, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 11,
  format: "lesson",
  title: {
    en: "Enterprise Patterns + DI",
    hi: "Enterprise Patterns + DI (बड़े projects के patterns)",
    hg: "Enterprise Patterns + DI (bade projects ke patterns)"
  },
  summary: {
    en: "<p>Day 11 adds the enterprise building blocks to the same <b>customer-care CRM</b>, in 7 short lessons. First data access and use-cases: why EF Core already is a repository and a unit of work, a focused repository with a specification, CQRS with separate command and query handlers, and a small dispatcher with a pipeline behaviour (MediatR is optional). Then configuration and lifetimes: the Options pattern (<code>IOptions</code>, <code>IOptionsSnapshot</code>, <code>IOptionsMonitor</code>), <code>ValidateOnStart</code> and the captive dependency.</p><p>Every lesson follows the same path: what it is, why you need it, an analogy, a complete program with its output, line-by-line notes, common mistakes, a small exercise and a quick quiz. The Deep Dive holds the finer trade-offs, the MediatR shape, the scope inside a <code>BackgroundService</code> and the CI startup check. The Tech Lead habit for the whole day: say the trade-off (\"we added it because of this pain\"), not the buzzword.</p>",
    hi: "<p>Day 11 उसी <b>customer-care CRM</b> में 7 छोटे पाठों में enterprise के basic टुकड़े जोड़ता है। पहले data access और use-cases: EF Core पहले से repository और unit of work क्यों है, specification वाली focused repository, अलग command और query handlers वाला CQRS, और pipeline behaviour वाला छोटा dispatcher (MediatR optional है)। फिर configuration और lifetimes: Options pattern (<code>IOptions</code>, <code>IOptionsSnapshot</code>, <code>IOptionsMonitor</code>), <code>ValidateOnStart</code> और captive dependency।</p><p>हर पाठ एक ही order में चलता है: यह क्या है, क्यों चाहिए, एक मिसाल, output के साथ पूरा program, लाइन-दर-लाइन समझ, आम ग़लतियाँ, एक छोटा exercise और एक झटपट quiz। Deep Dive में बारीक trade-offs, MediatR की shape, <code>BackgroundService</code> के अंदर scope और CI का startup check है। पूरे दिन की Tech Lead आदत: trade-off बताओ (\"इस दर्द की वजह से जोड़ा\"), buzzword नहीं।</p>",
    hg: "<p>Day 11 usi <b>customer-care CRM</b> mein 7 chhote lessons mein enterprise ke basic tukde jodta hai. Pehle data access aur use-cases: EF Core pehle se repository aur unit of work kyun hai, specification wali focused repository, alag command aur query handlers wala CQRS, aur pipeline behaviour wala chhota dispatcher (MediatR optional hai). Phir configuration aur lifetimes: Options pattern (<code>IOptions</code>, <code>IOptionsSnapshot</code>, <code>IOptionsMonitor</code>), <code>ValidateOnStart</code> aur captive dependency.</p><p>Har lesson ek hi order mein chalta hai: ye kya hai, kyun chahiye, ek misaal, output ke saath poora program, line-by-line samajh, aam galtiyan, ek chhota exercise aur ek jhatpat quiz. Deep Dive mein baareek trade-offs, MediatR ki shape, <code>BackgroundService</code> ke andar scope aur CI ka startup check hai. Poore din ki Tech Lead aadat: trade-off batao (\"is dard ki wajah se joda\"), buzzword nahi.</p>"
  },
  sections: [
    {
      id: "repo-uow",
      depth: "short",
      title: {
        en: "Repository + Unit of Work: EF Core already has both",
        hi: "Repository + Unit of Work: EF Core में दोनों पहले से हैं",
        hg: "Repository + Unit of Work: EF Core mein dono pehle se hain"
      },
      lesson: {
        buildsOn: {
          en: "Day 5 and Day 6 built <code>CrmContext</code> with <code>Customer</code> and <code>SupportTicket</code>, and Day 5 said to keep one short-lived <code>DbContext</code> per request. Day 10 showed patterns that wrap objects. Today we ask a Tech Lead question: should we wrap EF Core in a Repository and a Unit of Work, or does it already give us both?",
          hi: "Day 5 और Day 6 में <code>CrmContext</code> बना था जिसमें <code>Customer</code> और <code>SupportTicket</code> थे, और Day 5 ने कहा था कि हर request के लिए एक छोटी उम्र वाला <code>DbContext</code> रखो। Day 10 में objects को लपेटने वाले patterns देखे। आज Tech Lead वाला सवाल है: क्या EF Core को Repository और Unit of Work में लपेटना चाहिए, या वह दोनों पहले से देता है?",
          hg: "Day 5 aur Day 6 mein <code>CrmContext</code> bana tha jismein <code>Customer</code> aur <code>SupportTicket</code> the, aur Day 5 ne kaha tha ki har request ke liye ek chhoti umar wala <code>DbContext</code> rakho. Day 10 mein objects ko lapetne wale patterns dekhe. Aaj Tech Lead wala sawaal hai: kya EF Core ko Repository aur Unit of Work mein lapetna chahiye, ya woh dono pehle se deta hai?"
        },
        what: {
          en: "<p>A <b>Repository</b> looks like an in-memory collection of items: you add, find and remove, and you do not care how they are stored. A <b>Unit of Work</b> remembers every change made during one business operation and writes them all together in one transaction.</p><p>EF Core already has both: <code>DbSet&lt;SupportTicket&gt;</code> is the repository and <code>CrmContext</code> is the unit of work. <code>SaveChanges</code> is the commit.</p>",
          hi: "<p><b>Repository</b> items के in-memory collection जैसा दिखता है: add, find और remove करो, data कैसे store होता है इससे मतलब नहीं। <b>Unit of Work</b> एक business operation में हुए हर बदलाव को याद रखता है और सबको एक transaction में साथ लिखता है।</p><p>EF Core में दोनों पहले से हैं: <code>DbSet&lt;SupportTicket&gt;</code> repository है और <code>CrmContext</code> unit of work है। <code>SaveChanges</code> ही commit है।</p>",
          hg: "<p><b>Repository</b> items ke in-memory collection jaisa dikhta hai: add, find aur remove karo, data kaise store hota hai isse matlab nahi. <b>Unit of Work</b> ek business operation mein hue har badlav ko yaad rakhta hai aur sabko ek transaction mein saath likhta hai.</p><p>EF Core mein dono pehle se hain: <code>DbSet&lt;SupportTicket&gt;</code> repository hai aur <code>CrmContext</code> unit of work hai. <code>SaveChanges</code> hi commit hai.</p>"
        },
        why: {
          en: "<p>Many projects add <code>IRepository&lt;T&gt;</code> and <code>IUnitOfWork</code> on top of EF Core out of habit. If you know what EF already gives you, you wrap it only for a clear reason, not by default. In an interview, \"EF is already a unit of work\" is the sentence that shows you understand the tool.</p>",
          hi: "<p>कई projects आदत से EF Core के ऊपर <code>IRepository&lt;T&gt;</code> और <code>IUnitOfWork</code> लगा देते हैं। जब पता हो कि EF पहले से क्या देता है, तो आप सिर्फ़ साफ़ वजह होने पर wrap करते हो, आदत से नहीं। Interview में \"EF पहले से unit of work है\" वही line है जो दिखाता है कि आप tool समझते हो।</p>",
          hg: "<p>Kai projects aadat se EF Core ke upar <code>IRepository&lt;T&gt;</code> aur <code>IUnitOfWork</code> laga dete hain. Jab pata ho ki EF pehle se kya deta hai, to aap sirf saaf wajah hone par wrap karte ho, aadat se nahi. Interview mein \"EF pehle se unit of work hai\" wahi line hai jo dikhata hai ki aap tool samajhte ho.</p>"
        },
        analogy: {
          en: "<p>A shopping cart at a big store. You keep putting items in and taking items out (the change tracker remembers it all). Nothing is final until you pay once at the counter (<code>SaveChanges</code>). The shelves you pick from are the repository.</p>",
          hi: "<p>बड़े store की shopping cart। आप सामान डालते और निकालते रहते हो (change tracker सब याद रखता है)। कुछ भी final नहीं होता जब तक आप counter पर एक बार payment नहीं करते (<code>SaveChanges</code>)। जिन shelves से उठाते हो, वे repository हैं।</p>",
          hg: "<p>Bade store ki shopping cart. Aap saamaan daalte aur nikalte rehte ho (change tracker sab yaad rakhta hai). Kuch bhi final nahi hota jab tak aap counter par ek baar payment nahi karte (<code>SaveChanges</code>). Jin shelves se uthate ho, woh repository hain.</p>"
        },
        focus: {
          caption: {
            en: "The pattern names and what EF Core gives",
            hi: "Pattern के नाम और EF Core में उनकी जगह",
            hg: "Pattern ke naam aur EF Core mein unki jagah"
          },
          src: "// Pattern idea            EF Core already gives\n// collection of items     db.Tickets            (DbSet<SupportTicket>)\n// find / add / remove     Single(...), Add(...), Remove(...)\n// unit of work            db                    (CrmContext)\n// commit                  db.SaveChanges()",
          lang: "text",
          check: "none"
        },
        lines: [
          {
            code: "using var db = new CrmContext(options);",
            note: {
              en: "One <code>CrmContext</code> instance is one unit of work. Keep it short-lived (Day 5).",
              hi: "एक <code>CrmContext</code> instance एक unit of work है। इसे छोटी उम्र का रखो (Day 5)।",
              hg: "Ek <code>CrmContext</code> instance ek unit of work hai. Ise chhoti umar ka rakho (Day 5)."
            }
          },
          {
            code: "var ticket = db.Tickets.Single(t => t.Id == 501);",
            note: {
              en: "<code>db.Tickets</code> acts as the repository: you find an item as in a collection. The context now tracks this ticket.",
              hi: "<code>db.Tickets</code> repository की तरह काम करता है: collection की तरह item ढूँढ लो। अब context इस ticket पर नज़र रखता है।",
              hg: "<code>db.Tickets</code> repository ki tarah kaam karta hai: collection ki tarah item dhoondh lo. Ab context is ticket par nazar rakhta hai."
            }
          },
          {
            code: "db.Tickets.Add(new SupportTicket { Id = 502, Issue = \"Wrong bill\", CustomerId = ticket.CustomerId });",
            note: {
              en: "<code>Add</code> only remembers the new ticket in memory. Nothing has reached the database yet.",
              hi: "<code>Add</code> नई ticket को सिर्फ़ memory में याद रखता है। अभी database तक कुछ नहीं पहुँचा।",
              hg: "<code>Add</code> nayi ticket ko sirf memory mein yaad rakhta hai. Abhi database tak kuch nahi pahuncha."
            }
          },
          {
            code: "Console.WriteLine($\"SaveChanges wrote {db.SaveChanges()} rows\");",
            note: {
              en: "The commit: both changes are written together in one transaction. Either both succeed or neither does.",
              hi: "Commit यही है: दोनों बदलाव एक transaction में साथ लिखे जाते हैं। या दोनों हो जाते हैं या कोई नहीं।",
              hg: "Commit yahi hai: dono badlav ek transaction mein saath likhe jaate hain. Ya dono ho jaate hain ya koi nahi."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Wrapping <code>DbSet&lt;T&gt;</code> in an <code>IRepository&lt;T&gt;</code> whose methods only forward the call. You get one more file per entity and nothing else.</li><li>Calling <code>SaveChanges</code> after every small step. Then the changes are no longer all-or-nothing.</li></ul>",
          hi: "<ul><li><code>DbSet&lt;T&gt;</code> को <code>IRepository&lt;T&gt;</code> में लपेटना जिसके methods सिर्फ़ call आगे भेजते हैं। हर entity के लिए एक file ज़्यादा मिलती है, और कुछ नहीं।</li><li>हर छोटे step के बाद <code>SaveChanges</code> बुलाना। तब बदलाव सब-या-कुछ-नहीं नहीं रहते।</li></ul>",
          hg: "<ul><li><code>DbSet&lt;T&gt;</code> ko <code>IRepository&lt;T&gt;</code> mein lapetna jiske methods sirf call aage bhejte hain. Har entity ke liye ek file zyada milti hai, aur kuch nahi.</li><li>Har chhote step ke baad <code>SaveChanges</code> bulana. Tab badlav sab-ya-kuch-nahi nahi rehte.</li></ul>"
        },
        whenToUse: {
          en: "<p>By default, inject <code>CrmContext</code> straight into your application services and call <code>SaveChanges</code> once per business operation. Add a wrapper only when you have a reason: tests without a database, or a query rule used in many places (next lesson).</p>",
          hi: "<p>शुरुआत में <code>CrmContext</code> सीधे application services में inject करो और हर business operation में एक बार <code>SaveChanges</code> बुलाओ। Wrapper तभी लगाओ जब वजह हो: database के बिना tests, या कई जगह इस्तेमाल होने वाला query rule (अगला पाठ)।</p>",
          hg: "<p>Shuruaat mein <code>CrmContext</code> seedha application services mein inject karo aur har business operation mein ek baar <code>SaveChanges</code> bulao. Wrapper tabhi lagao jab wajah ho: database ke bina tests, ya kai jagah use hone wala query rule (agla lesson).</p>"
        },
        exercise: {
          task: {
            en: "<p>Assign tickets 501 and 502 to agent Kiran in one unit of work. Load both with one query, set <code>Agent</code> and <code>Status</code> on each, call <code>SaveChanges</code> once and print the row count. Then open a new context and print how many tickets Kiran has.</p>",
            hi: "<p>Tickets 501 और 502 को एक unit of work में agent Kiran को दो। दोनों को एक query से लोड करो, हर एक पर <code>Agent</code> और <code>Status</code> set करो, <code>SaveChanges</code> एक बार बुलाओ और row count print करो। फिर नया context खोलकर print करो कि Kiran के पास कितनी tickets हैं।</p>",
            hg: "<p>Tickets 501 aur 502 ko ek unit of work mein agent Kiran ko do. Dono ko ek query se load karo, har ek par <code>Agent</code> aur <code>Status</code> set karo, <code>SaveChanges</code> ek baar bulao aur row count print karo. Phir naya context kholkar print karo ki Kiran ke paas kitni tickets hain.</p>"
          },
          hint: {
            en: "<p>Use <code>db.Tickets.Where(...).ToList()</code> and a <code>foreach</code>. Only one <code>SaveChanges</code>, after the loop.</p>",
            hi: "<p><code>db.Tickets.Where(...).ToList()</code> और <code>foreach</code> इस्तेमाल करो। <code>SaveChanges</code> सिर्फ़ एक, loop के बाद।</p>",
            hg: "<p><code>db.Tickets.Where(...).ToList()</code> aur <code>foreach</code> use karo. <code>SaveChanges</code> sirf ek, loop ke baad.</p>"
          },
          solution: {
            caption: {
              en: "Solution: two changes, one SaveChanges",
              hi: "हल: दो बदलाव, एक SaveChanges",
              hg: "Solution: do badlav, ek SaveChanges"
            },
            src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var setup = new CrmContext(options))\n{\n    setup.Database.EnsureCreated();\n    setup.Customers.Add(new Customer\n    {\n        Name = \"Asha\",\n        Tickets =\n        {\n            new SupportTicket { Id = 501, Issue = \"Router not working\" },\n            new SupportTicket { Id = 502, Issue = \"Wrong bill\" }\n        }\n    });\n    setup.SaveChanges();\n}\n\nusing (var db = new CrmContext(options))\n{\n    foreach (var t in db.Tickets.Where(t => t.Id == 501 || t.Id == 502).ToList())\n    {\n        t.Agent = \"Kiran\";\n        t.Status = \"Assigned\";\n    }\n    Console.WriteLine($\"SaveChanges wrote {db.SaveChanges()} rows\");\n}\n\nusing (var db = new CrmContext(options))\n{\n    Console.WriteLine($\"Kiran has {db.Tickets.Count(t => t.Agent == \"Kiran\")} tickets\");\n}\n\npublic class Customer { public int Id { get; set; } public string Name { get; set; } = \"\"; public List<SupportTicket> Tickets { get; } = []; }\n\npublic class SupportTicket\n{\n    public int Id { get; set; } public string Issue { get; set; } = \"\"; public string Status { get; set; } = \"Open\";\n    public string? Agent { get; set; } public int CustomerId { get; set; } public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ],
            expected: "SaveChanges wrote 2 rows\nKiran has 2 tickets"
          }
        },
        quiz: {
          q: {
            en: "Two repository classes receive the same scoped <code>CrmContext</code>. One edits a ticket, the other adds an audit row. How many <code>SaveChanges</code> calls commit both?",
            hi: "दो repository classes को एक ही scoped <code>CrmContext</code> मिला है। एक ticket बदलती है, दूसरी audit row जोड़ती है। दोनों को commit करने के लिए कितने <code>SaveChanges</code> चाहिए?",
            hg: "Do repository classes ko ek hi scoped <code>CrmContext</code> mila hai. Ek ticket badalti hai, doosri audit row jodti hai. Dono ko commit karne ke liye kitne <code>SaveChanges</code> chahiye?"
          },
          options: [
            {
              en: "Two, one per repository",
              hi: "दो, हर repository का अपना",
              hg: "Do, har repository ka apna"
            },
            {
              en: "One, because they share one change tracker",
              hi: "एक, क्योंकि दोनों एक change tracker share करती हैं",
              hg: "Ek, kyunki dono ek change tracker share karti hain"
            },
            {
              en: "None, each repository saves by itself",
              hi: "कोई नहीं, हर repository खुद save कर लेती है",
              hg: "Koi nahi, har repository khud save kar leti hai"
            },
            {
              en: "It cannot work without an <code>IUnitOfWork</code> interface",
              hi: "बिना <code>IUnitOfWork</code> interface के यह चल ही नहीं सकता",
              hg: "Bina <code>IUnitOfWork</code> interface ke yeh chal hi nahi sakta"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The change tracker lives in the <code>DbContext</code>, not in the repository. Same context, same tracker, so one <code>SaveChanges</code> writes everything in one transaction. Note: they must get the <b>same scoped</b> context, not a new one each.</p>",
            hi: "<p>Change tracker <code>DbContext</code> में रहता है, repository में नहीं। एक ही context, एक ही tracker, इसलिए एक <code>SaveChanges</code> सब कुछ एक transaction में लिख देता है। ध्यान रहे: दोनों को <b>वही scoped</b> context मिलना चाहिए, हर बार नया नहीं।</p>",
            hg: "<p>Change tracker <code>DbContext</code> mein rehta hai, repository mein nahi. Ek hi context, ek hi tracker, isliye ek <code>SaveChanges</code> sab kuch ek transaction mein likh deta hai. Dhyan rahe: dono ko <b>wahi scoped</b> context milna chahiye, har baar naya nahi.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>DbSet&lt;T&gt;</code> is already a repository and <code>DbContext</code> is already a unit of work; <code>SaveChanges</code> is the commit.</li><li>Changes stay in memory until <code>SaveChanges</code>, which writes them in one transaction.</li><li>Wrap EF Core only for a named reason, never by habit.</li></ul>",
          hi: "<ul><li><code>DbSet&lt;T&gt;</code> पहले से repository है और <code>DbContext</code> पहले से unit of work; <code>SaveChanges</code> ही commit है।</li><li>बदलाव <code>SaveChanges</code> तक memory में रहते हैं, फिर एक transaction में लिखे जाते हैं।</li><li>EF Core को सिर्फ़ किसी नाम लेने लायक वजह से wrap करो, आदत से कभी नहीं।</li></ul>",
          hg: "<ul><li><code>DbSet&lt;T&gt;</code> pehle se repository hai aur <code>DbContext</code> pehle se unit of work; <code>SaveChanges</code> hi commit hai.</li><li>Badlav <code>SaveChanges</code> tak memory mein rehte hain, phir ek transaction mein likhe jaate hain.</li><li>EF Core ko sirf kisi naam lene layak wajah se wrap karo, aadat se kabhi nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "One CrmContext: change one ticket, add another, one SaveChanges",
            hi: "एक CrmContext: एक ticket बदलो, दूसरी जोड़ो, एक SaveChanges",
            hg: "Ek CrmContext: ek ticket badlo, doosri jodo, ek SaveChanges"
          },
          src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing (var setup = new CrmContext(options))\n{\n    setup.Database.EnsureCreated();   // demo only: creates the tables\n    setup.Customers.Add(new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" } } });\n    setup.SaveChanges();\n}\n\nusing var db = new CrmContext(options);                 // one context = one unit of work\nvar ticket = db.Tickets.Single(t => t.Id == 501);       // DbSet: find like in a collection\nticket.Status = \"Assigned\";                             // no Update() call needed\nticket.Agent = \"Meena\";\ndb.Tickets.Add(new SupportTicket { Id = 502, Issue = \"Wrong bill\", CustomerId = ticket.CustomerId });\n\nvar pending = db.ChangeTracker.Entries().Count(e => e.State != EntityState.Unchanged);\nConsole.WriteLine($\"pending changes: {pending}\");\nConsole.WriteLine($\"SaveChanges wrote {db.SaveChanges()} rows\");   // one transaction\n\npublic class Customer { public int Id { get; set; } public string Name { get; set; } = \"\"; public List<SupportTicket> Tickets { get; } = []; }\n\npublic class SupportTicket\n{\n    public int Id { get; set; } public string Issue { get; set; } = \"\"; public string Status { get; set; } = \"Open\";\n    public string? Agent { get; set; } public int CustomerId { get; set; } public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ],
          expected: "pending changes: 2\nSaveChanges wrote 2 rows"
        }
      ]
    },
    {
      id: "focused-repository",
      depth: "short",
      title: {
        en: "A focused repository with a specification",
        hi: "Focused repository और specification",
        hg: "Focused repository aur specification"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 showed that <code>DbSet</code> and <code>CrmContext</code> already act as repository and unit of work, so a plain wrapper adds little. Here is a good reason to wrap: the rule \"open tickets\" is needed in many places, and services should be testable without a database. We write a small, focused repository over the same <code>CrmContext</code>.",
          hi: "पाठ 1 में दिखा कि <code>DbSet</code> और <code>CrmContext</code> पहले से repository और unit of work हैं, इसलिए साधारण wrapper से ज़्यादा फ़ायदा नहीं। अब wrap करने की एक अच्छी वजह: \"open tickets\" का rule कई जगह चाहिए, और services का test database के बिना होना चाहिए। उसी <code>CrmContext</code> पर हम एक छोटी, focused repository लिखते हैं।",
          hg: "Lesson 1 mein dikha ki <code>DbSet</code> aur <code>CrmContext</code> pehle se repository aur unit of work hain, isliye saadharan wrapper se zyada fayda nahi. Ab wrap karne ki ek achhi wajah: \"open tickets\" ka rule kai jagah chahiye, aur services ka test database ke bina hona chahiye. Usi <code>CrmContext</code> par hum ek chhoti, focused repository likhte hain."
        },
        what: {
          en: "<p>A <b>focused repository</b> is an interface with a few <i>named</i> methods that answer business questions, and it returns a plain list or DTO, not <code>IQueryable</code>. A <b>specification</b> is a small object that holds one query rule as an <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> (Day 4), so the rule can be named, reused and still translated to SQL.</p>",
          hi: "<p><b>Focused repository</b> एक interface है जिसमें कुछ <i>नाम वाले</i> methods हैं जो business सवालों का जवाब देते हैं, और वह <code>IQueryable</code> नहीं बल्कि साधारण list या DTO लौटाता है। <b>Specification</b> एक छोटा object है जो एक query rule को <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> (Day 4) के रूप में रखता है, ताकि rule का नाम हो, दोबारा इस्तेमाल हो और फिर भी SQL में बदल सके।</p>",
          hg: "<p><b>Focused repository</b> ek interface hai jismein kuch <i>naam wale</i> methods hain jo business sawalon ka jawab dete hain, aur woh <code>IQueryable</code> nahi balki saadharan list ya DTO lautata hai. <b>Specification</b> ek chhota object hai jo ek query rule ko <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> (Day 4) ke roop mein rakhta hai, taaki rule ka naam ho, dobara use ho aur phir bhi SQL mein badal sake.</p>"
        },
        why: {
          en: "<p>The rule \"open for Asha\" lives in one place instead of being copied into ten <code>Where</code> calls. A service test can fake <code>ITicketRepository</code>. And because callers get a list, they cannot add a surprise <code>Include</code> or run a half-built query after the context is gone.</p>",
          hi: "<p>\"Asha की open tickets\" वाला rule दस <code>Where</code> calls में copy होने की जगह एक ही जगह रहता है। Service का test <code>ITicketRepository</code> को fake कर सकता है। और callers को list मिलती है, इसलिए वे अचानक <code>Include</code> नहीं जोड़ सकते, न context के जाने के बाद अधूरी query चला सकते हैं।</p>",
          hg: "<p>\"Asha ki open tickets\" wala rule das <code>Where</code> calls mein copy hone ki jagah ek hi jagah rehta hai. Service ka test <code>ITicketRepository</code> ko fake kar sakta hai. Aur callers ko list milti hai, isliye woh achanak <code>Include</code> nahi jod sakte, na context ke jaane ke baad adhoori query chala sakte hain.</p>"
        },
        analogy: {
          en: "<p>A waiter at a dhaba. You say \"one special thali\" and the waiter knows what that means. You do not walk into the kitchen and tell the cook each step. The menu has a few clear items, not \"anything you can imagine\".</p>",
          hi: "<p>ढाबे का waiter। आप कहते हो \"एक special थाली\" और waiter जानता है इसका मतलब क्या है। आप रसोई में जाकर cook को हर step नहीं बताते। Menu में कुछ साफ़ items हैं, \"जो भी सोच लो\" नहीं।</p>",
          hg: "<p>Dhaabe ka waiter. Aap kehte ho \"ek special thali\" aur waiter jaanta hai iska matlab kya hai. Aap rasoi mein jaakar cook ko har step nahi batate. Menu mein kuch saaf items hain, \"jo bhi soch lo\" nahi.</p>"
        },
        lines: [
          {
            code: "public Expression<Func<T, bool>> Criteria { get; } = criteria;",
            note: {
              en: "The specification stores the rule as an <i>expression</i>, not a <code>Func</code>. That is what lets EF turn it into SQL.",
              hi: "Specification rule को <i>expression</i> के रूप में रखती है, <code>Func</code> के रूप में नहीं। इसी से EF उसे SQL बना पाता है।",
              hg: "Specification rule ko <i>expression</i> ke roop mein rakhti hai, <code>Func</code> ke roop mein nahi. Isi se EF use SQL bana paata hai."
            }
          },
          {
            code: "new(t => t.Status == \"Open\" && t.Customer.Name == customer);",
            note: {
              en: "One named rule, <code>OpenFor</code>. Any caller reuses it instead of rewriting the <code>Where</code>.",
              hi: "एक नाम वाला rule, <code>OpenFor</code>। कोई भी caller <code>Where</code> दोबारा लिखने की जगह इसे दोबारा इस्तेमाल करता है।",
              hg: "Ek naam wala rule, <code>OpenFor</code>. Koi bhi caller <code>Where</code> dobara likhne ki jagah ise dobara use karta hai."
            }
          },
          {
            code: "Task<List<TicketSummary>> FindAsync(Specification<SupportTicket> spec); }",
            note: {
              en: "The only method in the interface. A service test can replace this with a fake that returns a fixed list.",
              hi: "Interface का इकलौता method। Service का test इसे ऐसे fake से बदल सकता है जो तय list लौटाए।",
              hg: "Interface ka iklauta method. Service ka test ise aise fake se badal sakta hai jo tay list lautaye."
            }
          },
          {
            code: ".ToListAsync();                             // a list, not IQueryable",
            note: {
              en: "The query ends here. Returning a list means nobody outside can add to the query.",
              hi: "Query यहीं ख़त्म हो जाती है। List लौटाने का मतलब बाहर कोई query में कुछ जोड़ नहीं सकता।",
              hg: "Query yahin khatam ho jaati hai. List lautane ka matlab bahar koi query mein kuch jod nahi sakta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Making a thin <code>IRepository&lt;T&gt;</code> with <code>GetAll</code>, <code>Add</code>, <code>Remove</code> for every entity. It hides <code>Include</code> and projections and adds a file per entity.</li><li>Using <code>Func&lt;T,bool&gt;</code> instead of <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> in the specification. EF then loads all rows and filters in memory.</li></ul>",
          hi: "<ul><li>हर entity के लिए <code>GetAll</code>, <code>Add</code>, <code>Remove</code> वाली पतली <code>IRepository&lt;T&gt;</code> बनाना। यह <code>Include</code> और projections छुपा देती है और हर entity पर एक file बढ़ाती है।</li><li>Specification में <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> की जगह <code>Func&lt;T,bool&gt;</code> रखना। तब EF सारी rows लोड करके memory में filter करता है।</li></ul>",
          hg: "<ul><li>Har entity ke liye <code>GetAll</code>, <code>Add</code>, <code>Remove</code> wali patli <code>IRepository&lt;T&gt;</code> banana. Yeh <code>Include</code> aur projections chhupa deti hai aur har entity par ek file badhati hai.</li><li>Specification mein <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> ki jagah <code>Func&lt;T,bool&gt;</code> rakhna. Tab EF saari rows load karke memory mein filter karta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>When query rules are shared by many callers, or services must be tested without a database. Keep each method specific and return a list or DTO. Do not use it for plain CRUD where the repository would only forward calls to <code>DbSet</code>.</p>",
          hi: "<p>जब query rules कई callers में एक जैसे चाहिए हों, या services का test database के बिना करना हो। हर method specific रखो और list या DTO लौटाओ। सीधे CRUD के लिए नहीं, जहाँ repository सिर्फ़ calls <code>DbSet</code> को आगे भेजेगी।</p>",
          hg: "<p>Jab query rules kai callers mein ek jaise chahiye hon, ya services ka test database ke bina karna ho. Har method specific rakho aur list ya DTO lautao. Seedhe CRUD ke liye nahi, jahan repository sirf calls <code>DbSet</code> ko aage bhejegi.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a specification <code>Unassigned()</code> for open tickets whose <code>Agent</code> is <code>null</code>. Ticket 501 is already assigned to Meena. Use the repository to print the unassigned tickets as <code>Id Issue</code>.</p>",
            hi: "<p>Open tickets के लिए specification <code>Unassigned()</code> जोड़ो जिनका <code>Agent</code> <code>null</code> है। Ticket 501 पहले से Meena को दी हुई है। Repository से unassigned tickets <code>Id Issue</code> रूप में print करो।</p>",
            hg: "<p>Open tickets ke liye specification <code>Unassigned()</code> jodo jinka <code>Agent</code> <code>null</code> hai. Ticket 501 pehle se Meena ko di hui hai. Repository se unassigned tickets <code>Id Issue</code> roop mein print karo.</p>"
          },
          hint: {
            en: "<p>Copy <code>Open()</code> and add <code>&amp;&amp; t.Agent == null</code>. The repository does not change.</p>",
            hi: "<p><code>Open()</code> को copy करो और <code>&amp;&amp; t.Agent == null</code> जोड़ दो। Repository नहीं बदलेगी।</p>",
            hg: "<p><code>Open()</code> ko copy karo aur <code>&amp;&amp; t.Agent == null</code> jod do. Repository nahi badlegi.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a new rule, same repository",
              hi: "हल: नया rule, वही repository",
              hg: "Solution: naya rule, wahi repository"
            },
            src: "using System.Linq.Expressions;\nusing Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing var db = new CrmContext(options);\ndb.Database.EnsureCreated();\ndb.Customers.Add(new Customer\n{\n    Name = \"Asha\",\n    Tickets =\n    {\n        new SupportTicket { Id = 501, Issue = \"Router not working\", Agent = \"Meena\" },\n        new SupportTicket { Id = 502, Issue = \"Wrong bill\" },\n        new SupportTicket { Id = 503, Issue = \"Slow internet\" }\n    }\n});\nawait db.SaveChangesAsync();\n\nITicketRepository repo = new TicketRepository(db);\nforeach (var t in await repo.FindAsync(TicketSpecs.Unassigned()))\n    Console.WriteLine($\"{t.Id} {t.Issue}\");\n\npublic record TicketSummary(int Id, string Issue);\n\npublic class Specification<T>(Expression<Func<T, bool>> criteria)\n{\n    public Expression<Func<T, bool>> Criteria { get; } = criteria;\n}\n\npublic static class TicketSpecs\n{\n    public static Specification<SupportTicket> Unassigned() =>\n        new(t => t.Status == \"Open\" && t.Agent == null);\n}\n\npublic interface ITicketRepository\n{\n    Task<List<TicketSummary>> FindAsync(Specification<SupportTicket> spec);\n}\n\npublic class TicketRepository(CrmContext db) : ITicketRepository\n{\n    public Task<List<TicketSummary>> FindAsync(Specification<SupportTicket> spec) =>\n        db.Tickets.AsNoTracking()\n            .Where(spec.Criteria)\n            .OrderBy(t => t.Id)\n            .Select(t => new TicketSummary(t.Id, t.Issue))\n            .ToListAsync();\n}\n\npublic class Customer { public int Id { get; set; } public string Name { get; set; } = \"\"; public List<SupportTicket> Tickets { get; } = []; }\n\npublic class SupportTicket\n{\n    public int Id { get; set; } public string Issue { get; set; } = \"\"; public string Status { get; set; } = \"Open\";\n    public string? Agent { get; set; } public int CustomerId { get; set; } public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
            check: "run",
            packages: [
              "Microsoft.EntityFrameworkCore.Sqlite"
            ],
            expected: "502 Wrong bill\n503 Slow internet"
          }
        },
        quiz: {
          q: {
            en: "Why does <code>Specification&lt;T&gt;</code> hold an <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> and not a plain <code>Func&lt;T,bool&gt;</code>?",
            hi: "<code>Specification&lt;T&gt;</code> में साधारण <code>Func&lt;T,bool&gt;</code> की जगह <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> क्यों रखा जाता है?",
            hg: "<code>Specification&lt;T&gt;</code> mein saadharan <code>Func&lt;T,bool&gt;</code> ki jagah <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> kyun rakha jaata hai?"
          },
          options: [
            {
              en: "Only expressions can be stored in a class property",
              hi: "Class property में सिर्फ़ expressions रखी जा सकती हैं",
              hg: "Class property mein sirf expressions rakhi ja sakti hain"
            },
            {
              en: "An expression runs faster in memory than a delegate",
              hi: "Expression memory में delegate से तेज़ चलती है",
              hg: "Expression memory mein delegate se tez chalti hai"
            },
            {
              en: "A <code>Func</code> cannot take a parameter",
              hi: "<code>Func</code> parameter ले ही नहीं सकता",
              hg: "<code>Func</code> parameter le hi nahi sakta"
            },
            {
              en: "EF can read an expression and translate it to SQL, so the filter runs in the database",
              hi: "EF expression को पढ़कर SQL बना सकता है, इसलिए filter database में चलता है",
              hg: "EF expression ko padhkar SQL bana sakta hai, isliye filter database mein chalta hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>EF cannot read inside a compiled <code>Func</code>. With a <code>Func</code>, EF would load every row and run your rule in memory. An expression is a tree EF can translate into a SQL <code>WHERE</code>.</p>",
            hi: "<p>EF compiled <code>Func</code> के अंदर नहीं पढ़ सकता। <code>Func</code> हो तो EF हर row लोड करके आपका rule memory में चलाएगा। Expression एक tree है जिसे EF SQL के <code>WHERE</code> में बदल सकता है।</p>",
            hg: "<p>EF compiled <code>Func</code> ke andar nahi padh sakta. <code>Func</code> ho to EF har row load karke aapka rule memory mein chalayega. Expression ek tree hai jise EF SQL ke <code>WHERE</code> mein badal sakta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>A focused repository has a few named methods and returns a list or DTO, not <code>IQueryable</code>.</li><li>A specification names one query rule as an <code>Expression</code>, so it stays translatable to SQL.</li><li>Wrap for shared rules and database-free tests, not for plain CRUD.</li></ul>",
          hi: "<ul><li>Focused repository में कुछ नाम वाले methods होते हैं और वह list या DTO लौटाती है, <code>IQueryable</code> नहीं।</li><li>Specification एक query rule को <code>Expression</code> के रूप में नाम देती है, इसलिए वह SQL में बदलने लायक रहती है।</li><li>कई जगह लगने वाले rules और database-free tests के लिए wrap करो, सीधे CRUD के लिए नहीं।</li></ul>",
          hg: "<ul><li>Focused repository mein kuch naam wale methods hote hain aur woh list ya DTO lautati hai, <code>IQueryable</code> nahi.</li><li>Specification ek query rule ko <code>Expression</code> ke roop mein naam deti hai, isliye woh SQL mein badalne layak rehti hai.</li><li>Kai jagah lagne wale rules aur database-free tests ke liye wrap karo, seedhe CRUD ke liye nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "ITicketRepository: specific method, specification, DTO list",
            hi: "ITicketRepository: नाम वाला method, specification, DTO list",
            hg: "ITicketRepository: specific method, specification, DTO list"
          },
          src: "using System.Linq.Expressions;\nusing Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<CrmContext>().UseSqlite(connection).Options;\n\nusing var db = new CrmContext(options);\ndb.Database.EnsureCreated();   // demo only: creates the tables\ndb.Customers.AddRange(\n    new Customer { Name = \"Asha\", Tickets = { new SupportTicket { Id = 501, Issue = \"Router not working\" }, new SupportTicket { Id = 502, Issue = \"Wrong bill\", Status = \"Closed\" } } },\n    new Customer { Name = \"Ravi\", Tickets = { new SupportTicket { Id = 503, Issue = \"Slow internet\" } } });\nawait db.SaveChangesAsync();\n\nITicketRepository repo = new TicketRepository(db);\n\nvar open = await repo.FindAsync(TicketSpecs.Open());\nConsole.WriteLine($\"Open tickets: {open.Count}\");\nforeach (var t in open) Console.WriteLine($\"{t.Id} {t.Customer}: {t.Issue}\");\n\nvar ashaOpen = await repo.FindAsync(TicketSpecs.OpenFor(\"Asha\"));\nConsole.WriteLine($\"Open for Asha: {ashaOpen.Count}\");\n\npublic record TicketSummary(int Id, string Customer, string Issue);\n\n// A specification keeps one query rule as an expression, so EF can translate it to SQL.\npublic class Specification<T>(Expression<Func<T, bool>> criteria)\n{\n    public Expression<Func<T, bool>> Criteria { get; } = criteria;\n}\n\npublic static class TicketSpecs\n{\n    public static Specification<SupportTicket> Open() => new(t => t.Status == \"Open\");\n    public static Specification<SupportTicket> OpenFor(string customer) => new(t => t.Status == \"Open\" && t.Customer.Name == customer);\n}\n\npublic interface ITicketRepository { Task<List<TicketSummary>> FindAsync(Specification<SupportTicket> spec); }\n\npublic class TicketRepository(CrmContext db) : ITicketRepository\n{\n    public Task<List<TicketSummary>> FindAsync(Specification<SupportTicket> spec) =>\n        db.Tickets.AsNoTracking()\n            .Where(spec.Criteria)                       // still translated to SQL\n            .OrderBy(t => t.Id)\n            .Select(t => new TicketSummary(t.Id, t.Customer.Name, t.Issue))\n            .ToListAsync();                             // a list, not IQueryable\n}\n\npublic class Customer { public int Id { get; set; } public string Name { get; set; } = \"\"; public List<SupportTicket> Tickets { get; } = []; }\n\npublic class SupportTicket\n{\n    public int Id { get; set; } public string Issue { get; set; } = \"\"; public string Status { get; set; } = \"Open\";\n    public string? Agent { get; set; } public int CustomerId { get; set; } public Customer Customer { get; set; } = null!;\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          check: "run",
          packages: [
            "Microsoft.EntityFrameworkCore.Sqlite"
          ],
          expected: "Open tickets: 2\n501 Asha: Router not working\n503 Ravi: Slow internet\nOpen for Asha: 1"
        }
      ]
    },
    {
      id: "cqrs-split",
      depth: "short",
      title: {
        en: "CQRS: commands that change, queries that read",
        hi: "CQRS: बदलने वाले commands, पढ़ने वाली queries",
        hg: "CQRS: badalne wale commands, padhne wali queries"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1 and 2 were about how to reach the data. Now we look at how to <i>organise the use-cases</i> that use it. Today the CRM has a ticket store (like the context in lesson 1), and we split the work into a command that changes a ticket and a query that reads the open tickets. Day 10 gave us the idea of one class for one job; this applies it to use-cases.",
          hi: "पाठ 1 और 2 data तक पहुँचने के बारे में थे। अब देखते हैं कि उसे इस्तेमाल करने वाले <i>use-cases को कैसे organise करें</i>। आज CRM में ticket store है (पाठ 1 वाले context जैसा), और हम काम को दो हिस्सों में बाँटते हैं: ticket बदलने वाला command और open tickets पढ़ने वाली query। Day 10 से एक class एक काम का idea मिला था; यह उसे use-cases पर लगाता है।",
          hg: "Lessons 1 aur 2 data tak pahunchne ke baare mein the. Ab dekhte hain ki use istemal karne wale <i>use-cases ko kaise organise karein</i>. Aaj CRM mein ticket store hai (lesson 1 wale context jaisa), aur hum kaam ko do hisson mein baantte hain: ticket badalne wala command aur open tickets padhne wali query. Day 10 se ek class ek kaam ka idea mila tha; yeh use use-cases par lagata hai."
        },
        what: {
          en: "<p><b>CQRS</b> (Command Query Responsibility Segregation) means: a <b>command</b> changes state and returns very little; a <b>query</b> returns data and changes nothing. Each side can have its own model.</p><p>There are levels: (1) separate command and query classes, same database; (2) a separate read model, for example queries that go straight to DTOs; (3) a separate read database kept in sync (eventual consistency). Most teams stop at level 1 or 2. <b>CQRS does not need two databases.</b></p>",
          hi: "<p><b>CQRS</b> (Command Query Responsibility Segregation) का मतलब: <b>command</b> state बदलता है और बहुत कम लौटाता है; <b>query</b> data लौटाती है और कुछ नहीं बदलती। हर तरफ़ का अपना model हो सकता है।</p><p>इसके levels हैं: (1) अलग command और query classes, वही database; (2) अलग read model, जैसे queries जो सीधे DTOs बनाएँ; (3) sync रखा गया अलग read database (eventual consistency, यानी थोड़ी देर बाद एक जैसा)। ज़्यादातर teams level 1 या 2 पर रुकती हैं। <b>CQRS के लिए दो databases ज़रूरी नहीं।</b></p>",
          hg: "<p><b>CQRS</b> (Command Query Responsibility Segregation) ka matlab: <b>command</b> state badalta hai aur bahut kam lautata hai; <b>query</b> data lautati hai aur kuch nahi badalti. Har taraf ka apna model ho sakta hai.</p><p>Iske levels hain: (1) alag command aur query classes, wahi database; (2) alag read model, jaise queries jo seedhe DTOs banayein; (3) sync rakha gaya alag read database (eventual consistency, yaani thodi der baad ek jaisa). Zyadatar teams level 1 ya 2 par rukti hain. <b>CQRS ke liye do databases zaroori nahi.</b></p>"
        },
        why: {
          en: "<p>Writes carry rules (is the ticket open? is the agent valid?) while reads need fast, screen-shaped data. When one model serves both, it gets bloated. Splitting gives small, focused classes: one per use-case, easy to name, test and find.</p>",
          hi: "<p>Writes में rules होते हैं (ticket open है? agent सही है?) जबकि reads को तेज़, screen के आकार का data चाहिए। जब एक model दोनों करे तो वह फूल जाता है। बाँटने से छोटी, focused classes मिलती हैं: हर use-case की एक, जिसका नाम, test और ढूँढना आसान।</p>",
          hg: "<p>Writes mein rules hote hain (ticket open hai? agent sahi hai?) jabki reads ko tez, screen ke aakaar ka data chahiye. Jab ek model dono kare to woh phool jaata hai. Baantne se chhoti, focused classes milti hain: har use-case ki ek, jiska naam, test aur dhoondhna aasaan.</p>"
        },
        analogy: {
          en: "<p>A restaurant has an order counter and a menu board. Placing an order is careful work: the kitchen checks stock, cooks and bills. Reading the menu board must be quick. Nobody opens the kitchen stock register just to show the menu.</p>",
          hi: "<p>Restaurant में order counter भी होता है और menu board भी। Order देना सावधानी का काम है: kitchen stock देखती है, पकाती है, bill बनाती है। Menu board पढ़ना तेज़ होना चाहिए। Menu दिखाने के लिए कोई kitchen का stock register नहीं खोलता।</p>",
          hg: "<p>Restaurant mein order counter bhi hota hai aur menu board bhi. Order dena saavdhani ka kaam hai: kitchen stock dekhti hai, pakati hai, bill banati hai. Menu board padhna tez hona chahiye. Menu dikhane ke liye koi kitchen ka stock register nahi kholta.</p>"
        },
        lines: [
          {
            code: "public record AssignTicket(int TicketId, string Agent);",
            note: {
              en: "A command is just a small message that says what we want: \"assign ticket 501 to Meena\". Name it as an order, in the imperative.",
              hi: "Command बस एक छोटा message है जो बताता है हमें क्या चाहिए: \"ticket 501 Meena को दो\"। इसका नाम order की तरह रखो (imperative)।",
              hg: "Command bas ek chhota message hai jo batata hai hamein kya chahiye: \"ticket 501 Meena ko do\". Iska naam order ki tarah rakho (imperative)."
            }
          },
          {
            code: "public class AssignTicketHandler(List<SupportTicket> store)",
            note: {
              en: "Exactly one handler per command. It holds the rules and does the change.",
              hi: "हर command के लिए ठीक एक handler। Rules और बदलाव का काम उसी में है।",
              hg: "Har command ke liye theek ek handler. Rules aur badlav ka kaam usi mein hai."
            }
          },
          {
            code: "public record TicketRow(int Id, string Issue, string Agent);",
            note: {
              en: "The read model is shaped for the screen: it has just the three fields the board shows. It is not the <code>SupportTicket</code> entity.",
              hi: "Read model screen के आकार का है: बोर्ड जो तीन fields दिखाता है बस वही। यह <code>SupportTicket</code> entity नहीं है।",
              hg: "Read model screen ke aakaar ka hai: board jo teen fields dikhata hai bas wahi. Yeh <code>SupportTicket</code> entity nahi hai."
            }
          },
          {
            code: "public List<TicketRow> Handle(TicketBoard query) =>",
            note: {
              en: "The query handler only reads. Calling it twice gives the same answer and changes nothing.",
              hi: "Query handler सिर्फ़ पढ़ता है। दो बार बुलाओ तो वही जवाब मिलेगा और कुछ नहीं बदलेगा।",
              hg: "Query handler sirf padhta hai. Do baar bulao to wahi jawab milega aur kuch nahi badlega."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>A query that quietly changes state, for example marking a ticket \"seen\" while reading. Then callers cannot call it safely.</li><li>Believing CQRS needs two databases or an event bus. Level 1 is just separate classes.</li></ul>",
          hi: "<ul><li>ऐसी query जो चुपचाप state बदल दे, जैसे पढ़ते समय ticket को \"seen\" mark कर दे। तब callers उसे बेफ़िक्र होकर नहीं बुला सकते।</li><li>यह मानना कि CQRS के लिए दो databases या event bus चाहिए। Level 1 बस अलग classes है।</li></ul>",
          hg: "<ul><li>Aisi query jo chupchaap state badal de, jaise padhte samay ticket ko \"seen\" mark kar de. Tab callers use befikar hokar nahi bula sakte.</li><li>Yeh maanna ki CQRS ke liye do databases ya event bus chahiye. Level 1 bas alag classes hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>When reads and writes differ in shape, scale or rules: many report screens, complex write rules, or a team that wants one small class per use-case. Skip it for small CRUD apps where one model fits both.</p>",
          hi: "<p>जब reads और writes की shape, scale या rules अलग हों: कई report screens, complex write rules, या team को हर use-case की एक छोटी class चाहिए। छोटे CRUD apps में छोड़ दो जहाँ एक model दोनों के लिए काफ़ी है।</p>",
          hg: "<p>Jab reads aur writes ki shape, scale ya rules alag hon: kai report screens, complex write rules, ya team ko har use-case ki ek chhoti class chahiye. Chhote CRUD apps mein chhod do jahan ek model dono ke liye kaafi hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a command <code>CloseTicket(int TicketId)</code> with its handler. It sets <code>Status</code> to <code>\"Closed\"</code> and returns <code>false</code> if the ticket does not exist. Add a <code>Status</code> property, then print <code>close 501: True</code> and a query that counts open tickets.</p>",
            hi: "<p>Command <code>CloseTicket(int TicketId)</code> और उसका handler जोड़ो। वह <code>Status</code> को <code>\"Closed\"</code> करता है और ticket न मिले तो <code>false</code> लौटाता है। <code>Status</code> property जोड़ो, फिर <code>close 501: True</code> print करो और open tickets गिनने वाली एक query चलाओ।</p>",
            hg: "<p>Command <code>CloseTicket(int TicketId)</code> aur uska handler jodo. Woh <code>Status</code> ko <code>\"Closed\"</code> karta hai aur ticket na mile to <code>false</code> lautata hai. <code>Status</code> property jodo, phir <code>close 501: True</code> print karo aur open tickets ginne wali ek query chalao.</p>"
          },
          hint: {
            en: "<p>The query handler is <code>store.Tickets.Count(t =&gt; t.Status == \"Open\")</code>. Query and command stay in separate classes.</p>",
            hi: "<p>Query handler बस <code>store.Tickets.Count(t =&gt; t.Status == \"Open\")</code> है। Query और command अलग classes में रहें।</p>",
            hg: "<p>Query handler bas <code>store.Tickets.Count(t =&gt; t.Status == \"Open\")</code> hai. Query aur command alag classes mein rahein.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a second command and a counting query",
              hi: "हल: दूसरा command और गिनने वाली query",
              hg: "Solution: doosra command aur ginne wali query"
            },
            src: "var store = new TicketStore();\nstore.Tickets.Add(new SupportTicket { Id = 501, Issue = \"Router not working\" });\nstore.Tickets.Add(new SupportTicket { Id = 502, Issue = \"Wrong bill\" });\n\nConsole.WriteLine($\"close 501: {new CloseTicketHandler(store).Handle(new CloseTicket(501))}\");\nConsole.WriteLine($\"close 999: {new CloseTicketHandler(store).Handle(new CloseTicket(999))}\");\nConsole.WriteLine($\"open tickets: {new CountOpenHandler(store).Handle(new CountOpen())}\");\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n}\n\npublic class TicketStore\n{\n    public List<SupportTicket> Tickets { get; } = new();\n}\n\npublic record CloseTicket(int TicketId);\n\npublic class CloseTicketHandler(TicketStore store)\n{\n    public bool Handle(CloseTicket command)\n    {\n        var ticket = store.Tickets.FirstOrDefault(t => t.Id == command.TicketId);\n        if (ticket is null) return false;\n        ticket.Status = \"Closed\";\n        return true;\n    }\n}\n\npublic record CountOpen;\n\npublic class CountOpenHandler(TicketStore store)\n{\n    public int Handle(CountOpen query) => store.Tickets.Count(t => t.Status == \"Open\");\n}",
            check: "run",
            expected: "close 501: True\nclose 999: False\nopen tickets: 1"
          }
        },
        quiz: {
          q: {
            en: "Which statement about CQRS is true?",
            hi: "CQRS के बारे में कौन-सी बात सही है?",
            hg: "CQRS ke baare mein kaun si baat sahi hai?"
          },
          options: [
            {
              en: "A command changes state; a query returns data and changes nothing. One database is fine.",
              hi: "Command state बदलता है; query data लौटाती है और कुछ नहीं बदलती। एक database काफ़ी है।",
              hg: "Command state badalta hai; query data lautati hai aur kuch nahi badalti. Ek database kaafi hai."
            },
            {
              en: "CQRS means every read must go to a second database",
              hi: "CQRS का मतलब है हर read दूसरे database पर जाए",
              hg: "CQRS ka matlab hai har read doosre database par jaye"
            },
            {
              en: "A query may update the ticket as long as it also returns data",
              hi: "Query data लौटाने के साथ ticket update भी कर सकती है",
              hg: "Query data lautane ke saath ticket update bhi kar sakti hai"
            },
            {
              en: "CQRS needs an event bus and message broker",
              hi: "CQRS के लिए event bus और message broker चाहिए",
              hg: "CQRS ke liye event bus aur message broker chahiye"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>CQRS is about separating the models for writing and reading. Two databases and event buses are optional advanced levels, not part of the idea. A query must not change state.</p>",
            hi: "<p>CQRS लिखने और पढ़ने के models को अलग करने की बात है। दो databases और event buses optional ऊँचे levels हैं, idea का हिस्सा नहीं। Query को state नहीं बदलना चाहिए।</p>",
            hg: "<p>CQRS likhne aur padhne ke models ko alag karne ki baat hai. Do databases aur event buses optional unche levels hain, idea ka hissa nahi. Query ko state nahi badalna chahiye.</p>"
          }
        },
        recap: {
          en: "<ul><li>A command changes state and returns little; a query returns data and changes nothing.</li><li>Level 1 is only separate classes in one project and one database.</li><li>It pays off when reads and writes differ; it is overkill for plain CRUD.</li></ul>",
          hi: "<ul><li>Command state बदलता है और कम लौटाता है; query data लौटाती है और कुछ नहीं बदलती।</li><li>Level 1 सिर्फ़ एक project और एक database में अलग classes है।</li><li>जब reads और writes अलग हों तब फ़ायदा; सीधे CRUD के लिए overkill।</li></ul>",
          hg: "<ul><li>Command state badalta hai aur kam lautata hai; query data lautati hai aur kuch nahi badalti.</li><li>Level 1 sirf ek project aur ek database mein alag classes hai.</li><li>Jab reads aur writes alag hon tab fayda; seedhe CRUD ke liye overkill.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "One command handler writes, one query handler reads",
            hi: "एक command handler लिखता है, एक query handler पढ़ता है",
            hg: "Ek command handler likhta hai, ek query handler padhta hai"
          },
          src: "var store = new List<SupportTicket>\n{\n    new() { Id = 501, Issue = \"Router not working\" },\n    new() { Id = 502, Issue = \"Wrong bill\" }\n};\n\nvar assign = new AssignTicketHandler(store);\nConsole.WriteLine($\"assign 501 to Meena: {assign.Handle(new AssignTicket(501, \"Meena\"))}\");\nConsole.WriteLine($\"assign 999 to Kiran: {assign.Handle(new AssignTicket(999, \"Kiran\"))}\");\n\nvar board = new TicketBoardHandler(store).Handle(new TicketBoard());\nforeach (var row in board)\n    Console.WriteLine($\"{row.Id} {row.Issue} -> {row.Agent}\");\n\npublic class SupportTicket { public int Id { get; set; } public string Issue { get; set; } = \"\"; public string? Agent { get; set; } }\n\n// Command: asks for a change. It returns very little (true if it worked).\npublic record AssignTicket(int TicketId, string Agent);\n\npublic class AssignTicketHandler(List<SupportTicket> store)\n{\n    public bool Handle(AssignTicket command)\n    {\n        var ticket = store.FirstOrDefault(t => t.Id == command.TicketId);\n        if (ticket is null) return false;\n        ticket.Agent = command.Agent;\n        return true;\n    }\n}\n\n// Query: asks a question. It changes nothing and returns a read model.\npublic record TicketBoard;\npublic record TicketRow(int Id, string Issue, string Agent);\n\npublic class TicketBoardHandler(List<SupportTicket> store)\n{\n    public List<TicketRow> Handle(TicketBoard query) =>\n        store\n            .OrderBy(t => t.Id)\n            .Select(t => new TicketRow(t.Id, t.Issue, t.Agent ?? \"unassigned\"))\n            .ToList();\n}",
          check: "run",
          expected: "assign 501 to Meena: True\nassign 999 to Kiran: False\n501 Router not working -> Meena\n502 Wrong bill -> unassigned"
        }
      ]
    },
    {
      id: "dispatcher-pipeline",
      depth: "short",
      title: {
        en: "A dispatcher and pipeline behaviours, with or without MediatR",
        hi: "Dispatcher और pipeline behaviours, MediatR के साथ या बिना",
        hg: "Dispatcher aur pipeline behaviours, MediatR ke saath ya bina"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 gave us a command handler and a query handler, but the caller had to know each handler class and create it by hand. Now we register handlers in DI (Day 8), add a tiny dispatcher to find the right one, and wrap the command with a logging decorator (Day 10). That wrapper is what MediatR calls a pipeline behaviour.",
          hi: "पाठ 3 में command handler और query handler मिले, पर caller को हर handler class जाननी और हाथ से बनानी पड़ी। अब हम handlers को DI (Day 8) में register करते हैं, सही handler ढूँढने के लिए छोटा dispatcher जोड़ते हैं, और command को logging decorator (Day 10) से लपेटते हैं। यही wrapper MediatR में pipeline behaviour कहलाता है।",
          hg: "Lesson 3 mein command handler aur query handler mile, par caller ko har handler class jaanni aur haath se banani padi. Ab hum handlers ko DI (Day 8) mein register karte hain, sahi handler dhoondhne ke liye chhota dispatcher jodte hain, aur command ko logging decorator (Day 10) se lapette hain. Yahi wrapper MediatR mein pipeline behaviour kehlata hai."
        },
        what: {
          en: "<p>A <b>dispatcher</b> takes a command or query and hands it to the one registered handler for that type. A <b>pipeline behaviour</b> is a wrapper around handlers for cross-cutting work such as logging, validation or a transaction, written once instead of in every handler.</p><p><b>MediatR</b> is a library that does both. It is optional: the hand-rolled version below needs no library. From version 13 (July 2025) MediatR has a dual licence: a paid commercial licence or the reciprocal RPL-1.5 licence, with a free tier for small companies. Older versions keep their old open-source licence. Check the current terms before using it in a company.</p>",
          hi: "<p><b>Dispatcher</b> command या query लेकर उस type के लिए register हुए इकलौते handler को दे देता है। <b>Pipeline behaviour</b> handlers के चारों ओर का wrapper है, logging, validation या transaction जैसे हर जगह के काम के लिए, जो हर handler में लिखने की जगह एक बार लिखा जाता है।</p><p><b>MediatR</b> एक library है जो दोनों करती है। यह optional है: नीचे का hand-rolled version बिना library के चलता है। Version 13 (July 2025) से MediatR का dual licence है: paid commercial licence या reciprocal RPL-1.5 licence, और छोटी companies के लिए free tier। पुराने versions अपने पुराने open-source licence पर रहते हैं। Company में इस्तेमाल से पहले उसकी अभी की terms देख लो।</p>",
          hg: "<p><b>Dispatcher</b> command ya query lekar us type ke liye register hue iklaute handler ko de deta hai. <b>Pipeline behaviour</b> handlers ke charon or ka wrapper hai, logging, validation ya transaction jaise har jagah ke kaam ke liye, jo har handler mein likhne ki jagah ek baar likha jaata hai.</p><p><b>MediatR</b> ek library hai jo dono karti hai. Yeh optional hai: neeche ka hand-rolled version bina library ke chalta hai. Version 13 (July 2025) se MediatR ka dual licence hai: paid commercial licence ya reciprocal RPL-1.5 licence, aur chhoti companies ke liye free tier. Purane versions apne purane open-source licence par rehte hain. Company mein istemal se pehle uski abhi ki terms dekh lo.</p>"
        },
        why: {
          en: "<p>Controllers and services now depend on one small <code>Dispatcher</code>, not on ten handler classes. A cross-cutting rule like \"log every command\" lives in one decorator. You get the benefit of MediatR with no extra dependency, and you can switch later because the shapes match.</p>",
          hi: "<p>Controllers और services अब दस handler classes पर नहीं, एक छोटे <code>Dispatcher</code> पर depend करते हैं। \"हर command log करो\" जैसा rule एक decorator में रहता है। MediatR का फ़ायदा बिना extra dependency मिलता है, और बाद में बदल भी सकते हो क्योंकि shapes मिलती-जुलती हैं।</p>",
          hg: "<p>Controllers aur services ab das handler classes par nahi, ek chhote <code>Dispatcher</code> par depend karte hain. \"Har command log karo\" jaisa rule ek decorator mein rehta hai. MediatR ka fayda bina extra dependency mile, aur baad mein badal bhi sakte ho kyunki shapes milti-julti hain.</p>"
        },
        analogy: {
          en: "<p>A bank counter with a token system. You take a token for \"deposit\" (command) or \"balance enquiry\" (query), and the token sends you to the right counter. Before every deposit the clerk checks your ID. Only one place does that check, and no counter repeats it.</p>",
          hi: "<p>Token system वाला bank counter। आप \"deposit\" (command) या \"balance पूछना\" (query) का token लेते हो, और token आपको सही counter पर भेजता है। हर deposit से पहले clerk आपका ID देखता है। यह जाँच एक ही जगह होती है, कोई counter इसे दोहराता नहीं।</p>",
          hg: "<p>Token system wala bank counter. Aap \"deposit\" (command) ya \"balance poochna\" (query) ka token lete ho, aur token aapko sahi counter par bhejta hai. Har deposit se pehle clerk aapka ID dekhta hai. Yeh jaanch ek hi jagah hoti hai, koi counter ise dohrata nahi.</p>"
        },
        lines: [
          {
            code: "new LoggingHandler<AssignTicket, bool>(sp.GetRequiredService<AssignTicketHandler>()));",
            note: {
              en: "The registration wraps the real handler inside the logging decorator. Callers only see <code>ICommandHandler</code>.",
              hi: "Registration असली handler को logging decorator के अंदर लपेट देती है। Callers सिर्फ़ <code>ICommandHandler</code> देखते हैं।",
              hg: "Registration asli handler ko logging decorator ke andar lapet deti hai. Callers sirf <code>ICommandHandler</code> dekhte hain."
            }
          },
          {
            code: "var done = await dispatcher.Send<AssignTicket, bool>(new AssignTicket(501, \"Meena\"));",
            note: {
              en: "The caller knows the dispatcher and the message. It never names <code>AssignTicketHandler</code>.",
              hi: "Caller dispatcher और message को जानता है। वह <code>AssignTicketHandler</code> का नाम कभी नहीं लेता।",
              hg: "Caller dispatcher aur message ko jaanta hai. Woh <code>AssignTicketHandler</code> ka naam kabhi nahi leta."
            }
          },
          {
            code: "Console.WriteLine($\"before {typeof(TCommand).Name}\");",
            note: {
              en: "The cross-cutting work happens here, once for every command that gets this decorator.",
              hi: "हर जगह वाला काम यहाँ होता है, इस decorator वाले हर command के लिए एक बार।",
              hg: "Har jagah wala kaam yahan hota hai, is decorator wale har command ke liye ek baar."
            }
          },
          {
            code: "provider.GetRequiredService<ICommandHandler<TCommand, TResult>>().Handle(command);",
            note: {
              en: "The dispatcher is only a lookup: find the handler in DI and call it.",
              hi: "Dispatcher सिर्फ़ ढूँढने का काम है: DI से handler ढूँढो और बुला दो।",
              hg: "Dispatcher sirf dhoondhne ka kaam hai: DI se handler dhoondho aur bula do."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Adding MediatR to a three-endpoint app because it looks like clean architecture. The extra indirection makes debugging harder than a method call.</li><li>Registering the dispatcher as a singleton. It then resolves handlers from the root provider, so a handler that needs a scoped <code>CrmContext</code> breaks (lesson 7). Keep it transient or scoped, as MediatR does.</li></ul>",
          hi: "<ul><li>तीन endpoints वाले app में MediatR जोड़ना क्योंकि वह clean architecture जैसा दिखता है। Extra indirection से debugging method call से मुश्किल हो जाती है।</li><li>Dispatcher को singleton register करना। तब वह handlers root provider से लेता है, और scoped <code>CrmContext</code> वाला handler टूट जाता है (पाठ 7)। उसे transient या scoped रखो, जैसे MediatR करता है।</li></ul>",
          hg: "<ul><li>Teen endpoints wale app mein MediatR jodna kyunki woh clean architecture jaisa dikhta hai. Extra indirection se debugging method call se mushkil ho jaati hai.</li><li>Dispatcher ko singleton register karna. Tab woh handlers root provider se leta hai, aur scoped <code>CrmContext</code> wala handler toot jaata hai (lesson 7). Use transient ya scoped rakho, jaise MediatR karta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>When you have many use-cases and want shared behaviours (logging, validation, transactions) in one place. With only a few endpoints, call the handler directly. Choose MediatR only when its features help and the licence suits you; the hand-rolled version is the same structure.</p>",
          hi: "<p>जब कई use-cases हों और common behaviours (logging, validation, transactions) एक जगह चाहिए। कुछ ही endpoints हों तो handler को सीधे बुलाओ। MediatR तभी लो जब उसके features काम आएँ और licence ठीक हो; hand-rolled version भी वही structure है।</p>",
          hg: "<p>Jab kai use-cases hon aur common behaviours (logging, validation, transactions) ek jagah chahiye. Kuch hi endpoints hon to handler ko seedhe bulao. MediatR tabhi lo jab uske features kaam aayein aur licence theek ho; hand-rolled version bhi wahi structure hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a second query <code>CountAssigned</code> (tickets that have an agent) with its handler, register it in DI and ask it through the dispatcher. Ticket 501 starts with agent Meena. Expected: <code>assigned tickets = 1</code>.</p>",
            hi: "<p>दूसरी query <code>CountAssigned</code> (जिन tickets पर agent है) और उसका handler जोड़ो, DI में register करो और dispatcher से पूछो। Ticket 501 पर पहले से agent Meena है। Expected: <code>assigned tickets = 1</code>।</p>",
            hg: "<p>Doosri query <code>CountAssigned</code> (jin tickets par agent hai) aur uska handler jodo, DI mein register karo aur dispatcher se poocho. Ticket 501 par pehle se agent Meena hai. Expected: <code>assigned tickets = 1</code>.</p>"
          },
          hint: {
            en: "<p>Copy <code>CountUnassignedHandler</code> and test <code>t.Agent is not null</code>. The dispatcher does not change: that is the point.</p>",
            hi: "<p><code>CountUnassignedHandler</code> को copy करो और <code>t.Agent is not null</code> जाँचो। Dispatcher नहीं बदलता: यही तो फ़ायदा है।</p>",
            hg: "<p><code>CountUnassignedHandler</code> ko copy karo aur <code>t.Agent is not null</code> jaancho. Dispatcher nahi badalta: yahi to fayda hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a new query, no change to the dispatcher",
              hi: "हल: नई query, dispatcher में कोई बदलाव नहीं",
              hg: "Solution: nayi query, dispatcher mein koi badlav nahi"
            },
            src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddSingleton<TicketStore>();\nservices.AddTransient<IQueryHandler<CountAssigned, int>, CountAssignedHandler>();\nservices.AddTransient<Dispatcher>();\n\nusing var provider = services.BuildServiceProvider();\nvar store = provider.GetRequiredService<TicketStore>();\nstore.Tickets.Add(new SupportTicket { Id = 501, Issue = \"Router not working\", Agent = \"Meena\" });\nstore.Tickets.Add(new SupportTicket { Id = 502, Issue = \"Wrong bill\" });\n\nvar count = await provider.GetRequiredService<Dispatcher>().Ask<CountAssigned, int>(new CountAssigned());\nConsole.WriteLine($\"assigned tickets = {count}\");\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string? Agent { get; set; }\n}\n\npublic class TicketStore { public List<SupportTicket> Tickets { get; } = new(); }\n\npublic record CountAssigned;\n\npublic interface IQueryHandler<TQuery, TResult> { Task<TResult> Handle(TQuery query); }\n\npublic class CountAssignedHandler(TicketStore store) : IQueryHandler<CountAssigned, int>\n{\n    public Task<int> Handle(CountAssigned query) => Task.FromResult(store.Tickets.Count(t => t.Agent is not null));\n}\n\npublic class Dispatcher(IServiceProvider provider)\n{\n    public Task<TResult> Ask<TQuery, TResult>(TQuery query) =>\n        provider.GetRequiredService<IQueryHandler<TQuery, TResult>>().Handle(query);\n}",
            check: "run",
            packages: [
              "Microsoft.Extensions.DependencyInjection"
            ],
            expected: "assigned tickets = 1"
          }
        },
        quiz: {
          q: {
            en: "You want to log every command the same way. Where does that code belong?",
            hi: "आप हर command को एक ही तरह log करना चाहते हो। वह code कहाँ रहे?",
            hg: "Aap har command ko ek hi tarah log karna chahte ho. Woh code kahan rahe?"
          },
          options: [
            {
              en: "Inside the dispatcher, next to <code>GetRequiredService</code>",
              hi: "Dispatcher के अंदर, <code>GetRequiredService</code> के पास",
              hg: "Dispatcher ke andar, <code>GetRequiredService</code> ke paas"
            },
            {
              en: "Copied into every handler",
              hi: "हर handler में copy करके",
              hg: "Har handler mein copy karke"
            },
            {
              en: "In one decorator (pipeline behaviour) that wraps the handlers",
              hi: "एक decorator (pipeline behaviour) में जो handlers को लपेटे",
              hg: "Ek decorator (pipeline behaviour) mein jo handlers ko lapete"
            },
            {
              en: "In the <code>SupportTicket</code> entity",
              hi: "<code>SupportTicket</code> entity में",
              hg: "<code>SupportTicket</code> entity mein"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>A decorator or pipeline behaviour is made for this: write it once, wrap the handlers, and no handler repeats it. Putting it in the dispatcher mixes lookup with logging and applies to queries too.</p>",
            hi: "<p>Decorator या pipeline behaviour इसी के लिए बना है: एक बार लिखो, handlers को लपेटो, और कोई handler इसे दोहराता नहीं। Dispatcher में रखने से lookup और logging मिल जाते हैं और यह queries पर भी लग जाता है।</p>",
            hg: "<p>Decorator ya pipeline behaviour isi ke liye bana hai: ek baar likho, handlers ko lapeto, aur koi handler ise dohrata nahi. Dispatcher mein rakhne se lookup aur logging mil jaate hain aur yeh queries par bhi lag jaata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>A dispatcher finds the one handler for a command or query through DI.</li><li>A decorator around handlers is a pipeline behaviour: cross-cutting code written once.</li><li>MediatR is optional and, from version 13 (2025), commercially licensed; the hand-rolled version needs no library.</li></ul>",
          hi: "<ul><li>Dispatcher DI से command या query का इकलौता handler ढूँढता है।</li><li>Handlers के चारों ओर decorator ही pipeline behaviour है: हर जगह का code एक बार लिखा।</li><li>MediatR optional है और version 13 (2025) से commercial licence वाली है; hand-rolled version को library नहीं चाहिए।</li></ul>",
          hg: "<ul><li>Dispatcher DI se command ya query ka iklauta handler dhoondhta hai.</li><li>Handlers ke charon or decorator hi pipeline behaviour hai: har jagah ka code ek baar likha.</li><li>MediatR optional hai aur version 13 (2025) se commercial licence wali hai; hand-rolled version ko library nahi chahiye.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Handlers in DI, a tiny dispatcher and a logging decorator (no library)",
            hi: "DI में handlers, छोटा dispatcher और logging decorator (बिना library)",
            hg: "DI mein handlers, chhota dispatcher aur logging decorator (bina library)"
          },
          src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddSingleton<TicketStore>();\nservices.AddTransient<AssignTicketHandler>();\nservices.AddTransient<ICommandHandler<AssignTicket, bool>>(sp =>\n    new LoggingHandler<AssignTicket, bool>(sp.GetRequiredService<AssignTicketHandler>()));\nservices.AddTransient<IQueryHandler<CountUnassigned, int>, CountUnassignedHandler>();\nservices.AddTransient<Dispatcher>();       // not a singleton: it resolves handlers from the caller's scope\n\nusing var provider = services.BuildServiceProvider();\nprovider.GetRequiredService<TicketStore>().Tickets.AddRange(\n    [new SupportTicket { Id = 501, Issue = \"Router not working\" }, new SupportTicket { Id = 502, Issue = \"Wrong bill\" }]);\n\nvar dispatcher = provider.GetRequiredService<Dispatcher>();\nvar done = await dispatcher.Send<AssignTicket, bool>(new AssignTicket(501, \"Meena\"));\nConsole.WriteLine($\"assigned = {done}\");\nvar open = await dispatcher.Ask<CountUnassigned, int>(new CountUnassigned());\nConsole.WriteLine($\"unassigned tickets = {open}\");\n\npublic class SupportTicket { public int Id { get; set; } public string Issue { get; set; } = \"\"; public string? Agent { get; set; } }\npublic class TicketStore { public List<SupportTicket> Tickets { get; } = new(); }\n\npublic record AssignTicket(int TicketId, string Agent);\npublic record CountUnassigned;\n\npublic interface ICommandHandler<TCommand, TResult> { Task<TResult> Handle(TCommand command); }\npublic interface IQueryHandler<TQuery, TResult> { Task<TResult> Handle(TQuery query); }\n\npublic class AssignTicketHandler(TicketStore store) : ICommandHandler<AssignTicket, bool>\n{\n    public Task<bool> Handle(AssignTicket command)\n    {\n        var ticket = store.Tickets.FirstOrDefault(t => t.Id == command.TicketId);\n        if (ticket is not null) ticket.Agent = command.Agent;\n        return Task.FromResult(ticket is not null);\n    }\n}\n\npublic class CountUnassignedHandler(TicketStore store) : IQueryHandler<CountUnassigned, int>\n{\n    public Task<int> Handle(CountUnassigned query) => Task.FromResult(store.Tickets.Count(t => t.Agent is null));\n}\n\n// A \"pipeline behaviour\" by hand: a decorator around any command handler.\npublic class LoggingHandler<TCommand, TResult>(ICommandHandler<TCommand, TResult> inner)\n    : ICommandHandler<TCommand, TResult>\n{\n    public async Task<TResult> Handle(TCommand command)\n    {\n        Console.WriteLine($\"before {typeof(TCommand).Name}\");\n        var result = await inner.Handle(command);\n        Console.WriteLine($\"after {typeof(TCommand).Name}\");\n        return result;\n    }\n}\n\npublic class Dispatcher(IServiceProvider provider)\n{\n    public Task<TResult> Send<TCommand, TResult>(TCommand command) =>\n        provider.GetRequiredService<ICommandHandler<TCommand, TResult>>().Handle(command);\n\n    public Task<TResult> Ask<TQuery, TResult>(TQuery query) =>\n        provider.GetRequiredService<IQueryHandler<TQuery, TResult>>().Handle(query);\n}",
          check: "run",
          packages: [
            "Microsoft.Extensions.DependencyInjection"
          ],
          expected: "before AssignTicket\nafter AssignTicket\nassigned = True\nunassigned tickets = 1"
        }
      ]
    },
    {
      id: "options-three",
      depth: "short",
      title: {
        en: "Options pattern: IOptions, IOptionsSnapshot, IOptionsMonitor",
        hi: "Options pattern: IOptions, IOptionsSnapshot, IOptionsMonitor (settings को class से बाँधना)",
        hg: "Options pattern: IOptions, IOptionsSnapshot, IOptionsMonitor (settings ko class se baandhna)"
      },
      lesson: {
        buildsOn: {
          en: "The first four lessons were about data and use-cases. Now the CRM needs settings, for example how many hours an agent has to respond (the SLA from Day 10). We bind a configuration section to a class and inject it. Day 8 told us the three DI lifetimes; here each options interface has a different lifetime, and that decides which one you can inject where.",
          hi: "पहले चार पाठ data और use-cases के बारे में थे। अब CRM को settings चाहिए, जैसे agent के पास जवाब देने के कितने घंटे हैं (Day 10 वाला SLA)। हम configuration section को class से बाँधते हैं और inject करते हैं। Day 8 ने तीन DI lifetimes बताईं; यहाँ हर options interface की अलग lifetime है, और वही तय करती है कि किसे कहाँ inject कर सकते हो।",
          hg: "Pehle chaar lessons data aur use-cases ke baare mein the. Ab CRM ko settings chahiye, jaise agent ke paas jawab dene ke kitne ghante hain (Day 10 wala SLA). Hum configuration section ko class se baandhte hain aur inject karte hain. Day 8 ne teen DI lifetimes batayin; yahan har options interface ki alag lifetime hai, aur wahi tay karti hai ki kise kahan inject kar sakte ho."
        },
        what: {
          en: "<p>The <b>Options pattern</b> binds a configuration section (like <code>\"Sla\"</code> in <code>appsettings.json</code>) to a plain class such as <code>SlaOptions</code>. You inject the class instead of reading magic strings.</p><p>There are three ways to inject it: <code>IOptions&lt;T&gt;</code> (a singleton, read once), <code>IOptionsSnapshot&lt;T&gt;</code> (scoped, re-read for each request) and <code>IOptionsMonitor&lt;T&gt;</code> (a singleton that always shows the current value and has <code>OnChange</code>).</p>",
          hi: "<p><b>Options pattern</b> configuration section (जैसे <code>appsettings.json</code> में <code>\"Sla\"</code>) को <code>SlaOptions</code> जैसी साधारण class से बाँधता है। Magic strings पढ़ने की जगह आप class inject करते हो।</p><p>इसे inject करने के तीन तरीके हैं: <code>IOptions&lt;T&gt;</code> (singleton, एक बार पढ़ा जाता है), <code>IOptionsSnapshot&lt;T&gt;</code> (scoped, हर request पर दोबारा पढ़ा जाता है) और <code>IOptionsMonitor&lt;T&gt;</code> (singleton जो हमेशा अभी की value दिखाता है और जिसमें <code>OnChange</code> है)।</p>",
          hg: "<p><b>Options pattern</b> configuration section (jaise <code>appsettings.json</code> mein <code>\"Sla\"</code>) ko <code>SlaOptions</code> jaisi saadharan class se baandhta hai. Magic strings padhne ki jagah aap class inject karte ho.</p><p>Ise inject karne ke teen tareeke hain: <code>IOptions&lt;T&gt;</code> (singleton, ek baar padha jaata hai), <code>IOptionsSnapshot&lt;T&gt;</code> (scoped, har request par dobara padha jaata hai) aur <code>IOptionsMonitor&lt;T&gt;</code> (singleton jo hamesha abhi ki value dikhata hai aur jismein <code>OnChange</code> hai).</p>"
        },
        why: {
          en: "<p>Settings change after deployment: the SLA goes from 24 to 8 hours. If you pick the wrong interface, a long-lived service quietly keeps the old value. Strongly typed options also remove typos in key names and give you one place to add validation (next lesson).</p>",
          hi: "<p>Deployment के बाद settings बदलती हैं: SLA 24 से 8 घंटे हो जाता है। गलत interface चुना तो लंबी उम्र वाली service चुपचाप पुरानी value पकड़े रहती है। Typed options से key नाम की typos भी हटती हैं और validation जोड़ने की एक जगह मिलती है (अगला पाठ)।</p>",
          hg: "<p>Deployment ke baad settings badalti hain: SLA 24 se 8 ghante ho jaata hai. Galat interface chuna to lambi umar wali service chupchaap purani value pakde rehti hai. Typed options se key naam ki typos bhi hatati hain aur validation jodne ki ek jagah milti hai (agla lesson).</p>"
        },
        analogy: {
          en: "<p>The notice board of a housing society. <code>IOptions</code> is the printed rule book you got when you joined: read once, never changes. <code>IOptionsSnapshot</code> is a fresh copy of the notice board you get each time you enter the building. <code>IOptionsMonitor</code> is the society WhatsApp group that pings you the moment a notice changes.</p>",
          hi: "<p>Housing society का notice board। <code>IOptions</code> वह छपी rule book है जो join करते समय मिली: एक बार पढ़ी, कभी नहीं बदलती। <code>IOptionsSnapshot</code> notice board की ताज़ा copy है जो हर बार building में घुसते समय मिलती है। <code>IOptionsMonitor</code> society का WhatsApp group है जो notice बदलते ही आपको ping करता है।</p>",
          hg: "<p>Housing society ka notice board. <code>IOptions</code> woh chhapi rule book hai jo join karte samay mili: ek baar padhi, kabhi nahi badalti. <code>IOptionsSnapshot</code> notice board ki taaza copy hai jo har baar building mein ghuste samay milti hai. <code>IOptionsMonitor</code> society ka WhatsApp group hai jo notice badalte hi aapko ping karta hai.</p>"
        },
        lines: [
          {
            code: "public class SlaBanner(IOptions<SlaOptions> options)",
            note: {
              en: "<code>IOptions</code> is a singleton and computes the value once. It is fine in a singleton, but it never sees the reload.",
              hi: "<code>IOptions</code> singleton है और value एक बार निकालता है। Singleton में चलता है, पर reload कभी नहीं देखता।",
              hg: "<code>IOptions</code> singleton hai aur value ek baar nikalta hai. Singleton mein chalta hai, par reload kabhi nahi dekhta."
            }
          },
          {
            code: "_monitor.OnChange(o => Console.WriteLine($\"OnChange: {o.ResponseHours}\"));",
            note: {
              en: "<code>IOptionsMonitor</code> can call you back when the settings change. This is how a background service reacts to a reload.",
              hi: "Settings बदलें तो <code>IOptionsMonitor</code> आपको वापस call कर सकता है। Background service reload पर इसी तरह react करती है।",
              hg: "Settings badlein to <code>IOptionsMonitor</code> aapko wapas call kar sakta hai. Background service reload par isi tarah react karti hai."
            }
          },
          {
            code: "public class SlaPerRequest(IOptionsSnapshot<SlaOptions> options)",
            note: {
              en: "<code>IOptionsSnapshot</code> is scoped: one value per scope (one web request). It cannot be injected into a singleton.",
              hi: "<code>IOptionsSnapshot</code> scoped है: हर scope (एक web request) की अपनी value। इसे singleton में inject नहीं कर सकते।",
              hg: "<code>IOptionsSnapshot</code> scoped hai: har scope (ek web request) ki apni value. Ise singleton mein inject nahi kar sakte."
            }
          },
          {
            code: "config.Reload();                     // tells the options system the source changed",
            note: {
              en: "In a real app a JSON file with <code>reloadOnChange</code> does this for you. Environment variables do not change while the process runs.",
              hi: "असली app में <code>reloadOnChange</code> वाली JSON file यह खुद कर देती है। Environment variables process चलते समय नहीं बदलते।",
              hg: "Asli app mein <code>reloadOnChange</code> wali JSON file yeh khud kar deti hai. Environment variables process chalte samay nahi badalte."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Injecting <code>IOptionsSnapshot</code> into a singleton or a background service. It is scoped, so it fails with scope validation on, or becomes a captive dependency with it off (lesson 7).</li><li>Using <code>IOptions</code> and expecting a reload to show up. It is read once.</li></ul>",
          hi: "<ul><li><code>IOptionsSnapshot</code> को singleton या background service में inject करना। वह scoped है, इसलिए scope validation चालू हो तो fail होता है, बंद हो तो captive dependency बन जाता है (पाठ 7)।</li><li><code>IOptions</code> इस्तेमाल करके reload दिखने की उम्मीद करना। वह एक बार पढ़ा जाता है।</li></ul>",
          hg: "<ul><li><code>IOptionsSnapshot</code> ko singleton ya background service mein inject karna. Woh scoped hai, isliye scope validation chalu ho to fail hota hai, band ho to captive dependency ban jaata hai (lesson 7).</li><li><code>IOptions</code> istemal karke reload dikhne ki ummeed karna. Woh ek baar padha jaata hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use options for any group of related settings. Default to <code>IOptions</code>; use <code>IOptionsSnapshot</code> in a web request that must see the latest values per request; use <code>IOptionsMonitor</code> in singletons and background services. For one value read once at startup, <code>IConfiguration</code> is enough.</p>",
          hi: "<p>किसी भी जुड़ी हुई settings के समूह के लिए options इस्तेमाल करो। शुरुआत <code>IOptions</code> से; web request में हर request पर ताज़ा values चाहिए तो <code>IOptionsSnapshot</code>; singletons और background services में <code>IOptionsMonitor</code>। startup पर एक बार पढ़ी जाने वाली एक value के लिए <code>IConfiguration</code> काफ़ी है।</p>",
          hg: "<p>Kisi bhi judi hui settings ke samooh ke liye options istemal karo. Shuruaat <code>IOptions</code> se; web request mein har request par taaza values chahiye to <code>IOptionsSnapshot</code>; singletons aur background services mein <code>IOptionsMonitor</code>. Startup par ek baar padhi jaane wali ek value ke liye <code>IConfiguration</code> kaafi hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>The code below has a singleton <code>SlaBanner</code> that uses <code>IOptions</code>, so it keeps printing 24 after the reload. Change only the banner so it prints <code>before: 24</code> and then <code>after: 8</code>.</p>",
            hi: "<p>नीचे वाले code में singleton <code>SlaBanner</code> <code>IOptions</code> इस्तेमाल करता है, इसलिए reload के बाद भी 24 print करता है। सिर्फ़ banner को ऐसे बदलो कि वह <code>before: 24</code> और फिर <code>after: 8</code> print करे।</p>",
            hg: "<p>Neeche wale code mein singleton <code>SlaBanner</code> <code>IOptions</code> istemal karta hai, isliye reload ke baad bhi 24 print karta hai. Sirf banner ko aise badlo ki woh <code>before: 24</code> aur phir <code>after: 8</code> print kare.</p>"
          },
          hint: {
            en: "<p>A singleton that must see live changes takes <code>IOptionsMonitor&lt;SlaOptions&gt;</code> and reads <code>CurrentValue</code>. The registration lines stay the same.</p>",
            hi: "<p>जिस singleton को live बदलाव दिखने चाहिए वह <code>IOptionsMonitor&lt;SlaOptions&gt;</code> लेता है और <code>CurrentValue</code> पढ़ता है। Registration की lines वैसी ही रहेंगी।</p>",
            hg: "<p>Jis singleton ko live badlav dikhne chahiye woh <code>IOptionsMonitor&lt;SlaOptions&gt;</code> leta hai aur <code>CurrentValue</code> padhta hai. Registration ki lines waisi hi rahengi.</p>"
          },
          solution: {
            caption: {
              en: "Solution: the banner uses IOptionsMonitor",
              hi: "हल: banner में IOptionsMonitor",
              hg: "Solution: banner mein IOptionsMonitor"
            },
            src: "using Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Options;\n\nvar config = new ConfigurationBuilder()\n    .AddInMemoryCollection(new Dictionary<string, string?> { [\"Sla:ResponseHours\"] = \"24\" })\n    .Build();\n\nvar services = new ServiceCollection();\nservices.Configure<SlaOptions>(config.GetSection(\"Sla\"));\nservices.AddSingleton<SlaBanner>();\nusing var root = services.BuildServiceProvider();\n\nvar banner = root.GetRequiredService<SlaBanner>();\nConsole.WriteLine($\"before: {banner.Hours}\");\n\nconfig[\"Sla:ResponseHours\"] = \"8\";\nconfig.Reload();\nConsole.WriteLine($\"after: {banner.Hours}\");\n\npublic class SlaOptions\n{\n    public int ResponseHours { get; set; } = 24;\n}\n\npublic class SlaBanner(IOptionsMonitor<SlaOptions> options)\n{\n    public int Hours => options.CurrentValue.ResponseHours;\n}",
            check: "run",
            packages: [
              "Microsoft.Extensions.Options.ConfigurationExtensions",
              "Microsoft.Extensions.Configuration",
              "Microsoft.Extensions.DependencyInjection"
            ],
            expected: "before: 24\nafter: 8"
          }
        },
        quiz: {
          q: {
            en: "A singleton background service must always use the latest SLA hours. Which should it take?",
            hi: "एक singleton background service को हमेशा ताज़ा SLA hours इस्तेमाल करने हैं। उसे क्या लेना चाहिए?",
            hg: "Ek singleton background service ko hamesha taaza SLA hours istemal karne hain. Use kya lena chahiye?"
          },
          options: [
            {
              en: "<code>IOptions&lt;SlaOptions&gt;</code>, it refreshes itself",
              hi: "<code>IOptions&lt;SlaOptions&gt;</code>, वह खुद refresh होता है",
              hg: "<code>IOptions&lt;SlaOptions&gt;</code>, woh khud refresh hota hai"
            },
            {
              en: "<code>IOptionsMonitor&lt;SlaOptions&gt;</code> and read <code>CurrentValue</code>",
              hi: "<code>IOptionsMonitor&lt;SlaOptions&gt;</code> और <code>CurrentValue</code> पढ़ना",
              hg: "<code>IOptionsMonitor&lt;SlaOptions&gt;</code> aur <code>CurrentValue</code> padhna"
            },
            {
              en: "<code>IOptionsSnapshot&lt;SlaOptions&gt;</code>, it works in singletons",
              hi: "<code>IOptionsSnapshot&lt;SlaOptions&gt;</code>, वह singletons में चलता है",
              hg: "<code>IOptionsSnapshot&lt;SlaOptions&gt;</code>, woh singletons mein chalta hai"
            },
            {
              en: "None of them can see changes after startup",
              hi: "कोई भी startup के बाद के बदलाव नहीं देख सकता",
              hg: "Koi bhi startup ke baad ke badlav nahi dekh sakta"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The monitor is a singleton with a live <code>CurrentValue</code>. <code>IOptions</code> is read once. <code>IOptionsSnapshot</code> is scoped, so it does not belong in a singleton.</p>",
            hi: "<p>Monitor एक singleton है जिसकी <code>CurrentValue</code> live रहती है। <code>IOptions</code> एक बार पढ़ा जाता है। <code>IOptionsSnapshot</code> scoped है, इसलिए singleton में नहीं चलता।</p>",
            hg: "<p>Monitor ek singleton hai jiski <code>CurrentValue</code> live rehti hai. <code>IOptions</code> ek baar padha jaata hai. <code>IOptionsSnapshot</code> scoped hai, isliye singleton mein nahi chalta.</p>"
          }
        },
        recap: {
          en: "<ul><li>Options bind a configuration section to a typed class, so no magic strings.</li><li><code>IOptions</code> is read once, <code>IOptionsSnapshot</code> is per scope, <code>IOptionsMonitor</code> is live with <code>OnChange</code>.</li><li>Pick the interface by who consumes it: singleton needs <code>IOptions</code> or <code>IOptionsMonitor</code>.</li></ul>",
          hi: "<ul><li>Options configuration section को typed class से बाँधते हैं, इसलिए magic strings नहीं।</li><li><code>IOptions</code> एक बार पढ़ा जाता है, <code>IOptionsSnapshot</code> हर scope पर, <code>IOptionsMonitor</code> live है और <code>OnChange</code> देता है।</li><li>Interface उसे इस्तेमाल करने वाले के हिसाब से चुनो: singleton को <code>IOptions</code> या <code>IOptionsMonitor</code> चाहिए।</li></ul>",
          hg: "<ul><li>Options configuration section ko typed class se baandhte hain, isliye magic strings nahi.</li><li><code>IOptions</code> ek baar padha jaata hai, <code>IOptionsSnapshot</code> har scope par, <code>IOptionsMonitor</code> live hai aur <code>OnChange</code> deta hai.</li><li>Interface use istemal karne wale ke hisaab se chuno: singleton ko <code>IOptions</code> ya <code>IOptionsMonitor</code> chahiye.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "One setting, three interfaces, one reload",
            hi: "एक setting, तीन interfaces, एक reload",
            hg: "Ek setting, teen interfaces, ek reload"
          },
          src: "using Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Options;\n\nvar config = new ConfigurationBuilder()\n    .AddInMemoryCollection(new Dictionary<string, string?> { [\"Sla:ResponseHours\"] = \"24\" })\n    .Build();\n\nvar services = new ServiceCollection();\nservices.Configure<SlaOptions>(config.GetSection(\"Sla\"));\nservices.AddSingleton<SlaBanner>();        // takes IOptions\nservices.AddSingleton<SlaWatcher>();       // takes IOptionsMonitor\nservices.AddScoped<SlaPerRequest>();       // takes IOptionsSnapshot\nusing var root = services.BuildServiceProvider();\n\nvar banner = root.GetRequiredService<SlaBanner>();\nvar watcher = root.GetRequiredService<SlaWatcher>();\nusing var oldScope = root.CreateScope();\nvar oldRequest = oldScope.ServiceProvider.GetRequiredService<SlaPerRequest>();\nConsole.WriteLine($\"before: banner={banner.Hours} watcher={watcher.Hours} request={oldRequest.Hours}\");\n\nconfig[\"Sla:ResponseHours\"] = \"8\";   // the settings change after deployment\nconfig.Reload();                     // tells the options system the source changed\n\nusing var newScope = root.CreateScope();\nvar newRequest = newScope.ServiceProvider.GetRequiredService<SlaPerRequest>();\nConsole.WriteLine($\"after: banner={banner.Hours} watcher={watcher.Hours} oldRequest={oldRequest.Hours} newRequest={newRequest.Hours}\");\n\npublic class SlaOptions\n{\n    public int ResponseHours { get; set; } = 24;\n}\n\npublic class SlaBanner(IOptions<SlaOptions> options)\n{\n    public int Hours => options.Value.ResponseHours;\n}\n\npublic class SlaWatcher\n{\n    private readonly IOptionsMonitor<SlaOptions> _monitor;\n\n    public SlaWatcher(IOptionsMonitor<SlaOptions> monitor)\n    {\n        _monitor = monitor;\n        _monitor.OnChange(o => Console.WriteLine($\"OnChange: {o.ResponseHours}\"));\n    }\n\n    public int Hours => _monitor.CurrentValue.ResponseHours;\n}\n\npublic class SlaPerRequest(IOptionsSnapshot<SlaOptions> options)\n{\n    public int Hours => options.Value.ResponseHours;\n}",
          check: "run",
          packages: [
            "Microsoft.Extensions.Options.ConfigurationExtensions",
            "Microsoft.Extensions.Configuration",
            "Microsoft.Extensions.DependencyInjection"
          ],
          expected: "before: banner=24 watcher=24 request=24\nOnChange: 8\nafter: banner=24 watcher=8 oldRequest=24 newRequest=8"
        }
      ]
    },
    {
      id: "validate-on-start",
      depth: "short",
      title: {
        en: "Validate options and fail at startup",
        hi: "Options validate करो और startup पर ही fail कराओ",
        hg: "Options validate karo aur startup par hi fail karao"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 5 bound a configuration section to <code>SlaOptions</code>. A typed class has one more benefit: it is the right place to check the values. Today the CRM has notification settings (sender, retry count), and we make a wrong value stop the app when it starts, instead of failing on the first customer. We start a generic host (<code>Host.CreateApplicationBuilder</code>, seen in Day 9) and catch <code>OptionsValidationException</code>.",
          hi: "पाठ 5 में configuration section <code>SlaOptions</code> से बँधा। Typed class का एक और फ़ायदा है: values जाँचने की सही जगह वही है। आज CRM में notification settings हैं (sender, retry count), और हम गलत value को app शुरू होते ही रोकते हैं, पहले customer पर fail होने की जगह। हम generic host (<code>Host.CreateApplicationBuilder</code>, Day 9 में देखा) चलाते हैं और <code>OptionsValidationException</code> पकड़ते हैं।",
          hg: "Lesson 5 mein configuration section <code>SlaOptions</code> se bandha. Typed class ka ek aur fayda hai: values jaanchne ki sahi jagah wahi hai. Aaj CRM mein notification settings hain (sender, retry count), aur hum galat value ko app shuru hote hi rokte hain, pehle customer par fail hone ki jagah. Hum generic host (<code>Host.CreateApplicationBuilder</code>, Day 9 mein dekha) chalate hain aur <code>OptionsValidationException</code> pakadte hain."
        },
        what: {
          en: "<p><b>Options validation</b> checks the bound values with rules. There are three ways to write rules: data annotations such as <code>[Required]</code> and <code>[Range]</code> through <code>ValidateDataAnnotations()</code>, an inline <code>Validate(predicate, message)</code>, or an <code>IValidateOptions&lt;T&gt;</code> class (see the Deep Dive).</p><p><b>ValidateOnStart()</b> runs all the rules when the host starts. If any rule fails, the host throws <code>OptionsValidationException</code> and lists all the failures together.</p>",
          hi: "<p><b>Options validation</b> bind हुई values को rules से जाँचता है। Rules लिखने के तीन तरीके हैं: data annotations जैसे <code>[Required]</code> और <code>[Range]</code> (<code>ValidateDataAnnotations()</code> से), inline <code>Validate(predicate, message)</code>, या <code>IValidateOptions&lt;T&gt;</code> class (Deep Dive देखो)।</p><p><b>ValidateOnStart()</b> host शुरू होते समय सारे rules चलाता है। कोई भी rule fail हो तो host <code>OptionsValidationException</code> फेंकता है और सारी failures एक साथ दिखाता है।</p>",
          hg: "<p><b>Options validation</b> bind hui values ko rules se jaanchta hai. Rules likhne ke teen tareeke hain: data annotations jaise <code>[Required]</code> aur <code>[Range]</code> (<code>ValidateDataAnnotations()</code> se), inline <code>Validate(predicate, message)</code>, ya <code>IValidateOptions&lt;T&gt;</code> class (Deep Dive dekho).</p><p><b>ValidateOnStart()</b> host shuru hote samay saare rules chalata hai. Koi bhi rule fail ho to host <code>OptionsValidationException</code> phenkta hai aur saari failures ek saath dikhata hai.</p>"
        },
        why: {
          en: "<p>Without <code>ValidateOnStart</code>, a rule runs only when someone first reads <code>.Value</code>. A typo in production config can then surface hours after deployment, on a real customer. Failing at startup means the deployment itself fails, and you notice at once.</p>",
          hi: "<p><code>ValidateOnStart</code> के बिना rule तब चलता है जब कोई पहली बार <code>.Value</code> पढ़े। तब production config की typo deployment के घंटों बाद, असली customer पर सामने आ सकती है। Startup पर fail होने का मतलब deployment ही fail होती है, और आपको तुरंत पता चलता है।</p>",
          hg: "<p><code>ValidateOnStart</code> ke bina rule tab chalta hai jab koi pehli baar <code>.Value</code> padhe. Tab production config ki typo deployment ke ghanton baad, asli customer par saamne aa sakti hai. Startup par fail hone ka matlab deployment hi fail hoti hai, aur aapko turant pata chalta hai.</p>"
        },
        analogy: {
          en: "<p>Checking the gas cylinder and burner the day before the wedding, not while the guests are waiting and the rice is on the flame. A problem found early costs a phone call. A problem found during the function costs the function.</p>",
          hi: "<p>शादी से एक दिन पहले gas cylinder और burner जाँच लेना, उस वक़्त नहीं जब मेहमान इंतज़ार कर रहे हों और चावल आँच पर चढ़ा हो। पहले मिली दिक़्क़त एक phone call में सुलझती है। function के दौरान मिली दिक़्क़त पूरा function बिगाड़ देती है।</p>",
          hg: "<p>Shaadi se ek din pehle gas cylinder aur burner jaanch lena, us waqt nahi jab mehmaan intezaar kar rahe hon aur chawal aanch par chadha ho. Pehle mili dikkat ek phone call mein suljhti hai. Function ke dauran mili dikkat poora function bigaad deti hai.</p>"
        },
        focus: {
          caption: {
            en: "The registration chain: bind, validate, validate on start",
            hi: "Registration की chain: bind, validate, startup पर validate",
            hg: "Registration ki chain: bind, validate, startup par validate"
          },
          src: "builder.Services.AddOptions<NotifyOptions>()\n    .Bind(builder.Configuration.GetSection(\"Notify\"))   // fill the class from config\n    .ValidateDataAnnotations()                          // [Required], [Range]\n    .Validate(o => o.RetryCount <= 3, \"message\")        // an inline rule\n    .ValidateOnStart();                                 // run them when the host starts",
          check: "none"
        },
        lines: [
          {
            code: "[Range(1, 5)] public int RetryCount { get; set; } = 3;",
            note: {
              en: "Another rule: the retry count must be between 1 and 5. The config has 9, so this fails.",
              hi: "एक और rule: retry count 1 से 5 के बीच हो। Config में 9 है, इसलिए यह fail होगा।",
              hg: "Ek aur rule: retry count 1 se 5 ke beech ho. Config mein 9 hai, isliye yeh fail hoga."
            }
          },
          {
            code: ".Validate(o => o.RetryCount <= 3, \"RetryCount above 3 would flood the SMS gateway\")",
            note: {
              en: "An inline rule with your own message, for checks that attributes cannot express.",
              hi: "अपने message वाला inline rule, उन जाँचों के लिए जो attributes से नहीं हो सकतीं।",
              hg: "Apne message wala inline rule, un jaanchon ke liye jo attributes se nahi ho sakti."
            }
          },
          {
            code: ".ValidateOnStart();",
            note: {
              en: "Without this line the rules would wait for the first <code>.Value</code> read. With it, they run when the host starts.",
              hi: "इस line के बिना rules पहली <code>.Value</code> read का इंतज़ार करते। इसके साथ वे host शुरू होते ही चलते हैं।",
              hg: "Is line ke bina rules pehli <code>.Value</code> read ka intezaar karte. Iske saath woh host shuru hote hi chalte hain."
            }
          },
          {
            code: "catch (OptionsValidationException ex)",
            note: {
              en: "The host throws this exception at startup. <code>ex.Failures</code> lists every broken rule at once.",
              hi: "Host startup पर यही exception फेंकता है। <code>ex.Failures</code> हर टूटे rule को एक साथ गिनाता है।",
              hg: "Host startup par yahi exception phenkta hai. <code>ex.Failures</code> har toote rule ko ek saath ginata hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Forgetting <code>ValidateOnStart()</code>. The rules exist but only run on the first <code>.Value</code> read, so the failure comes late.</li><li>Putting secrets such as passwords in committed JSON. Bind them from user secrets, environment variables or a vault. Options classes are not a security boundary.</li></ul>",
          hi: "<ul><li><code>ValidateOnStart()</code> भूल जाना। Rules हैं पर सिर्फ़ पहली <code>.Value</code> read पर चलते हैं, इसलिए failure देर से आती है।</li><li>Passwords जैसे secrets commit हुई JSON में रखना। उन्हें user secrets, environment variables या vault से bind करो। Options classes कोई security boundary नहीं हैं।</li></ul>",
          hg: "<ul><li><code>ValidateOnStart()</code> bhool jaana. Rules hain par sirf pehli <code>.Value</code> read par chalte hain, isliye failure der se aati hai.</li><li>Passwords jaise secrets commit hui JSON mein rakhna. Unhe user secrets, environment variables ya vault se bind karo. Options classes koi security boundary nahi hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>For every group of settings the app cannot work without: connection options, API clients, limits. Not for values that change on every call (pass those as method parameters) or for one-off values that need no checking.</p>",
          hi: "<p>हर उस settings समूह के लिए जिसके बिना app चल नहीं सकता: connection options, API clients, limits। उन values के लिए नहीं जो हर call पर बदलती हैं (उन्हें method parameters से दो) या एक बार की values के लिए जिन्हें जाँच नहीं चाहिए।</p>",
          hg: "<p>Har us settings samooh ke liye jiske bina app chal nahi sakta: connection options, API clients, limits. Un values ke liye nahi jo har call par badalti hain (unhe method parameters se do) ya ek baar ki values ke liye jinhe jaanch nahi chahiye.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>SlaOptions</code> with <code>[Range(1, 72)]</code> on <code>ResponseHours</code>. Set <code>\"Sla:ResponseHours\"</code> to <code>\"100\"</code>, register with <code>ValidateDataAnnotations()</code> and <code>ValidateOnStart()</code>, and start the host. Print the number of failures, and whether the failure text contains <code>between 1 and 72</code>.</p>",
            hi: "<p><code>SlaOptions</code> लिखो जिसके <code>ResponseHours</code> पर <code>[Range(1, 72)]</code> हो। <code>\"Sla:ResponseHours\"</code> को <code>\"100\"</code> करो, <code>ValidateDataAnnotations()</code> और <code>ValidateOnStart()</code> के साथ register करो और host शुरू करो। Failures की गिनती print करो, और यह भी कि failure text में <code>between 1 and 72</code> है या नहीं।</p>",
            hg: "<p><code>SlaOptions</code> likho jiske <code>ResponseHours</code> par <code>[Range(1, 72)]</code> ho. <code>\"Sla:ResponseHours\"</code> ko <code>\"100\"</code> karo, <code>ValidateDataAnnotations()</code> aur <code>ValidateOnStart()</code> ke saath register karo aur host shuru karo. Failures ki ginti print karo, aur yeh bhi ki failure text mein <code>between 1 and 72</code> hai ya nahi.</p>"
          },
          hint: {
            en: "<p>Copy the lesson code, delete the inline <code>Validate</code> line, and print <code>ex.Failures.Count()</code> and <code>ex.Failures.First().Contains(\"between 1 and 72\")</code>.</p>",
            hi: "<p>पाठ का code copy करो, inline <code>Validate</code> line हटा दो, और <code>ex.Failures.Count()</code> व <code>ex.Failures.First().Contains(\"between 1 and 72\")</code> print करो।</p>",
            hg: "<p>Lesson ka code copy karo, inline <code>Validate</code> line hata do, aur <code>ex.Failures.Count()</code> va <code>ex.Failures.First().Contains(\"between 1 and 72\")</code> print karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a Range rule that stops the host",
              hi: "हल: Range rule जो host को रोक देता है",
              hg: "Solution: Range rule jo host ko rok deta hai"
            },
            src: "using System.ComponentModel.DataAnnotations;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.Extensions.Options;\n\nvar builder = Host.CreateApplicationBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.Configuration.AddInMemoryCollection(new Dictionary<string, string?> { [\"Sla:ResponseHours\"] = \"100\" });\n\nbuilder.Services.AddOptions<SlaOptions>()\n    .Bind(builder.Configuration.GetSection(\"Sla\"))\n    .ValidateDataAnnotations()\n    .ValidateOnStart();\n\nusing var host = builder.Build();\ntry\n{\n    await host.StartAsync();\n    Console.WriteLine(\"started\");\n}\ncatch (OptionsValidationException ex)\n{\n    Console.WriteLine(\"failures: \" + ex.Failures.Count());\n    Console.WriteLine(\"mentions range: \" + ex.Failures.First().Contains(\"between 1 and 72\"));\n}\n\npublic class SlaOptions\n{\n    [Range(1, 72)] public int ResponseHours { get; set; } = 24;\n}",
            check: "run",
            packages: [
              "Microsoft.Extensions.Hosting",
              "Microsoft.Extensions.Options.DataAnnotations"
            ],
            expected: "failures: 1\nmentions range: True"
          }
        },
        quiz: {
          q: {
            en: "When do the options rules run if you call <code>ValidateOnStart()</code>?",
            hi: "<code>ValidateOnStart()</code> लगाओ तो options के rules कब चलते हैं?",
            hg: "<code>ValidateOnStart()</code> lagao to options ke rules kab chalte hain?"
          },
          options: [
            {
              en: "Only when the project is compiled",
              hi: "सिर्फ़ जब project compile हो",
              hg: "Sirf jab project compile ho"
            },
            {
              en: "The first time some code reads <code>.Value</code>",
              hi: "पहली बार जब कोई code <code>.Value</code> पढ़े",
              hg: "Pehli baar jab koi code <code>.Value</code> padhe"
            },
            {
              en: "On every request",
              hi: "हर request पर",
              hg: "Har request par"
            },
            {
              en: "When the host starts, before it serves any request",
              hi: "जब host शुरू होता है, किसी request से पहले",
              hg: "Jab host shuru hota hai, kisi request se pehle"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>That is the whole point of <code>ValidateOnStart</code>. Without it, the rules wait for the first <code>.Value</code> read. Validation never runs at compile time, because configuration is only known at run time.</p>",
            hi: "<p><code>ValidateOnStart</code> का पूरा मक़सद यही है। इसके बिना rules पहली <code>.Value</code> read का इंतज़ार करते हैं। Compile के समय validation नहीं चलता, क्योंकि configuration run time पर ही पता चलती है।</p>",
            hg: "<p><code>ValidateOnStart</code> ka poora maqsad yahi hai. Iske bina rules pehli <code>.Value</code> read ka intezaar karte hain. Compile ke samay validation nahi chalta, kyunki configuration run time par hi pata chalti hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Validate options with data annotations, an inline <code>Validate</code>, or an <code>IValidateOptions</code> class.</li><li><code>ValidateOnStart()</code> runs the rules when the host starts and reports all failures together.</li><li>A bad config should stop the deployment, not the first customer.</li></ul>",
          hi: "<ul><li>Options को data annotations, inline <code>Validate</code> या <code>IValidateOptions</code> class से validate करो।</li><li><code>ValidateOnStart()</code> host शुरू होते ही rules चलाता है और सारी failures एक साथ बताता है।</li><li>गलत config से deployment रुके, पहला customer नहीं।</li></ul>",
          hg: "<ul><li>Options ko data annotations, inline <code>Validate</code> ya <code>IValidateOptions</code> class se validate karo.</li><li><code>ValidateOnStart()</code> host shuru hote hi rules chalata hai aur saari failures ek saath batata hai.</li><li>Galat config se deployment ruke, pehla customer nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "The host refuses to start with bad configuration, and reports all failures",
            hi: "Bad configuration के साथ host शुरू होने से मना कर देता है, और सारी failures बताता है",
            hg: "Bad configuration ke saath host shuru hone se mana kar deta hai, aur saari failures batata hai"
          },
          src: "using System.ComponentModel.DataAnnotations;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.Extensions.Options;\n\nvar builder = Host.CreateApplicationBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.Configuration.AddInMemoryCollection(new Dictionary<string, string?>\n{\n    [\"Notify:Sender\"] = \"\",        // missing on purpose\n    [\"Notify:RetryCount\"] = \"9\"    // too high on purpose\n});\n\nbuilder.Services.AddOptions<NotifyOptions>()\n    .Bind(builder.Configuration.GetSection(\"Notify\"))\n    .ValidateDataAnnotations()\n    .Validate(o => o.RetryCount <= 3, \"RetryCount above 3 would flood the SMS gateway\")\n    .ValidateOnStart();\n\nusing var host = builder.Build();\ntry\n{\n    await host.StartAsync();\n    Console.WriteLine(\"started\");\n}\ncatch (OptionsValidationException ex)\n{\n    Console.WriteLine(\"startup failed: \" + ex.GetType().Name);\n    Console.WriteLine(\"failures: \" + ex.Failures.Count());\n    Console.WriteLine(\"last: \" + ex.Failures.Last());\n}\n\npublic class NotifyOptions\n{\n    [Required] public string Sender { get; set; } = \"\";\n    [Range(1, 5)] public int RetryCount { get; set; } = 3;\n}",
          check: "run",
          packages: [
            "Microsoft.Extensions.Hosting",
            "Microsoft.Extensions.Options.DataAnnotations"
          ],
          expected: "startup failed: OptionsValidationException\nfailures: 3\nlast: RetryCount above 3 would flood the SMS gateway"
        }
      ]
    },
    {
      id: "captive-dependency",
      depth: "short",
      title: {
        en: "DI lifetimes and the captive dependency",
        hi: "DI lifetimes और captive dependency",
        hg: "DI lifetimes aur captive dependency"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 5 said <code>IOptionsSnapshot</code> (scoped) does not belong in a singleton, and lesson 1 said to keep <code>CrmContext</code> scoped. Both are one rule about lifetimes. Day 8 explained Transient, Scoped and Singleton; now we see what breaks when a long-lived service holds a short-lived one, and how <code>ValidateScopes</code> catches it in the CRM.",
          hi: "पाठ 5 ने कहा था कि <code>IOptionsSnapshot</code> (scoped) singleton में नहीं चलता, और पाठ 1 ने कहा था कि <code>CrmContext</code> scoped रखो। दोनों lifetimes का एक ही rule है। Day 8 में Transient, Scoped और Singleton समझाए थे; अब देखते हैं कि लंबी उम्र वाली service छोटी उम्र वाली को पकड़ ले तो क्या टूटता है, और CRM में <code>ValidateScopes</code> उसे कैसे पकड़ता है।",
          hg: "Lesson 5 ne kaha tha ki <code>IOptionsSnapshot</code> (scoped) singleton mein nahi chalta, aur lesson 1 ne kaha tha ki <code>CrmContext</code> scoped rakho. Dono lifetimes ka ek hi rule hai. Day 8 mein Transient, Scoped aur Singleton samjhaye the; ab dekhte hain ki lambi umar wali service chhoti umar wali ko pakad le to kya tootta hai, aur CRM mein <code>ValidateScopes</code> use kaise pakadta hai."
        },
        what: {
          en: "<p>A <b>Transient</b> service is new on every request to the container. A <b>Scoped</b> service is one per scope (one web request). A <b>Singleton</b> is one for the whole app.</p><p>A <b>captive dependency</b> is a singleton that receives a scoped (or transient) service in its constructor. The short-lived object is now stuck inside the singleton for the whole life of the app. The rule: depend on the <b>same or a longer</b> lifetime.</p>",
          hi: "<p><b>Transient</b> service container से हर माँग पर नई बनती है। <b>Scoped</b> service हर scope (एक web request) में एक। <b>Singleton</b> पूरे app में एक।</p><p><b>Captive dependency</b> वह singleton है जिसे constructor में scoped (या transient) service मिल जाए। छोटी उम्र वाला object अब app की पूरी उम्र singleton में फँसा रहता है। Rule: <b>बराबर या लंबी</b> lifetime पर depend करो।</p>",
          hg: "<p><b>Transient</b> service container se har maang par nayi banti hai. <b>Scoped</b> service har scope (ek web request) mein ek. <b>Singleton</b> poore app mein ek.</p><p><b>Captive dependency</b> woh singleton hai jise constructor mein scoped (ya transient) service mil jaye. Chhoti umar wala object ab app ki poori umar singleton mein phansa rehta hai. Rule: <b>barabar ya lambi</b> lifetime par depend karo.</p>"
        },
        why: {
          en: "<p>A captive <code>DbContext</code> never dies, grows its change tracker and is shared by many threads. A captive per-request value shows stale data to the next customer. These bugs appear only under load or after hours, so they are very hard to find. A check at startup finds them in seconds.</p>",
          hi: "<p>Captive <code>DbContext</code> कभी मरता नहीं, उसका change tracker बढ़ता जाता है और कई threads उसे share करते हैं। Captive per-request value अगले customer को पुराना data दिखाती है। ये bugs सिर्फ़ load में या घंटों बाद दिखते हैं, इसलिए ढूँढना बहुत मुश्किल है। Startup पर check उन्हें सेकंडों में पकड़ लेता है।</p>",
          hg: "<p>Captive <code>DbContext</code> kabhi marta nahi, uska change tracker badhta jaata hai aur kai threads use share karte hain. Captive per-request value agle customer ko purana data dikhati hai. Yeh bugs sirf load mein ya ghanton baad dikhte hain, isliye dhoondhna bahut mushkil hai. Startup par check unhe seconds mein pakad leta hai.</p>"
        },
        analogy: {
          en: "<p>The building generator versus a hotel room key. A Singleton is the generator: one for everyone, always on. A Scoped service is your room key for one stay. A captive dependency is the generator holding one guest's room key forever: the next guest finds the generator still using the old key.</p>",
          hi: "<p>Building का generator बनाम hotel room की चाबी। Singleton generator है: सबके लिए एक, हमेशा चालू। Scoped service एक stay की room चाबी है। Captive dependency वह generator है जो एक मेहमान की room चाबी हमेशा के लिए पकड़े बैठा है: अगला मेहमान देखता है कि generator अब भी पुरानी चाबी इस्तेमाल कर रहा है।</p>",
          hg: "<p>Building ka generator banam hotel room ki chaabi. Singleton generator hai: sabke liye ek, hamesha chalu. Scoped service ek stay ki room chaabi hai. Captive dependency woh generator hai jo ek mehmaan ki room chaabi hamesha ke liye pakde baitha hai: agla mehmaan dekhta hai ki generator ab bhi purani chaabi istemal kar raha hai.</p>"
        },
        lines: [
          {
            code: "services.BuildServiceProvider(new ServiceProviderOptions { ValidateScopes = true });",
            note: {
              en: "A provider you build yourself has validation off by default. This turns the scope check on.",
              hi: "आपका खुद बनाया हुआ provider validation बंद रखता है। यह scope की जाँच चालू करता है।",
              hg: "Aapka khud banaya hua provider validation band rakhta hai. Yeh scope ki jaanch chalu karta hai."
            }
          },
          {
            code: "public class BrokenDashboard(CurrentAgent agent)",
            note: {
              en: "The mistake: the scoped <code>CurrentAgent</code> is received once, in the singleton's constructor, and held forever.",
              hi: "गलती यही है: scoped <code>CurrentAgent</code> singleton के constructor में एक बार मिलता है और हमेशा पकड़ा रहता है।",
              hg: "Galti yahi hai: scoped <code>CurrentAgent</code> singleton ke constructor mein ek baar milta hai aur hamesha pakda rehta hai."
            }
          },
          {
            code: "public class FixedDashboard(IServiceScopeFactory scopeFactory)",
            note: {
              en: "The fix: a singleton may hold the scope <i>factory</i>, because the factory itself is a singleton.",
              hi: "हल: singleton scope <i>factory</i> पकड़ सकता है, क्योंकि factory खुद singleton है।",
              hg: "Hal: singleton scope <i>factory</i> pakad sakta hai, kyunki factory khud singleton hai."
            }
          },
          {
            code: "using var scope = scopeFactory.CreateScope();",
            note: {
              en: "Each call opens a short scope, so each call gets a fresh <code>CurrentAgent</code> (Agent-1, then Agent-2) and the scope is disposed after use.",
              hi: "हर call एक छोटा scope खोलता है, इसलिए हर call को नया <code>CurrentAgent</code> मिलता है (Agent-1, फिर Agent-2) और इस्तेमाल के बाद scope dispose हो जाता है।",
              hg: "Har call ek chhota scope kholta hai, isliye har call ko naya <code>CurrentAgent</code> milta hai (Agent-1, phir Agent-2) aur istemal ke baad scope dispose ho jaata hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Believing <code>ValidateScopes</code> catches everything. It catches a singleton consuming a <i>scoped</i> service, but not a singleton consuming a <i>transient</i> one. That transient is still captive and lives as long as the singleton.</li><li>Fixing the error by making the scoped service a singleton. Only do that if it is truly stateless and thread-safe.</li></ul>",
          hi: "<ul><li>यह मानना कि <code>ValidateScopes</code> सब पकड़ लेता है। वह <i>scoped</i> service लेने वाला singleton पकड़ता है, <i>transient</i> लेने वाला नहीं। वह transient भी captive रहता है और singleton जितना जीता है।</li><li>Error हटाने के लिए scoped service को singleton कर देना। ऐसा तभी करो जब वह सच में stateless और thread-safe हो।</li></ul>",
          hg: "<ul><li>Yeh maanna ki <code>ValidateScopes</code> sab pakad leta hai. Woh <i>scoped</i> service lene wala singleton pakadta hai, <i>transient</i> lene wala nahi. Woh transient bhi captive rehta hai aur singleton jitna jeeta hai.</li><li>Error hatane ke liye scoped service ko singleton kar dena. Aisa tabhi karo jab woh sach mein stateless aur thread-safe ho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use Scoped for per-request state and <code>DbContext</code>. When a singleton needs a scoped service, open a short scope with <code>IServiceScopeFactory</code> (or <code>IDbContextFactory&lt;T&gt;</code>), or pass the value as a method argument. A <code>BackgroundService</code> is a singleton too, so it opens a scope per job (see the Deep Dive). Run a startup check with <code>ValidateScopes</code> and <code>ValidateOnBuild</code> in a CI test.</p>",
          hi: "<p>Per-request state और <code>DbContext</code> के लिए Scoped इस्तेमाल करो। Singleton को scoped service चाहिए हो तो <code>IServiceScopeFactory</code> (या <code>IDbContextFactory&lt;T&gt;</code>) से छोटा scope खोलो, या value को method argument से दो। <code>BackgroundService</code> भी singleton है, इसलिए वह हर काम के लिए scope खोलती है (Deep Dive देखो)। CI test में <code>ValidateScopes</code> और <code>ValidateOnBuild</code> के साथ startup check चलाओ।</p>",
          hg: "<p>Per-request state aur <code>DbContext</code> ke liye Scoped istemal karo. Singleton ko scoped service chahiye ho to <code>IServiceScopeFactory</code> (ya <code>IDbContextFactory&lt;T&gt;</code>) se chhota scope kholo, ya value ko method argument se do. <code>BackgroundService</code> bhi singleton hai, isliye woh har kaam ke liye scope kholti hai (Deep Dive dekho). CI test mein <code>ValidateScopes</code> aur <code>ValidateOnBuild</code> ke saath startup check chalao.</p>"
        },
        exercise: {
          task: {
            en: "<p><code>ValidateOnBuild</code> catches a service that cannot be constructed. Register a singleton <code>TicketService</code> that needs an <code>INotifier</code>, but do <b>not</b> register <code>INotifier</code>. Build the provider with <code>ValidateOnBuild = true</code>. Print <code>build failed at startup</code> and whether the message contains <code>Unable to resolve service for type</code>.</p>",
            hi: "<p><code>ValidateOnBuild</code> उस service को पकड़ता है जो बन ही नहीं सकती। Singleton <code>TicketService</code> register करो जिसे <code>INotifier</code> चाहिए, पर <code>INotifier</code> register <b>मत</b> करो। Provider को <code>ValidateOnBuild = true</code> के साथ बनाओ। <code>build failed at startup</code> print करो और यह भी कि message में <code>Unable to resolve service for type</code> है या नहीं।</p>",
            hg: "<p><code>ValidateOnBuild</code> us service ko pakadta hai jo ban hi nahi sakti. Singleton <code>TicketService</code> register karo jise <code>INotifier</code> chahiye, par <code>INotifier</code> register <b>mat</b> karo. Provider ko <code>ValidateOnBuild = true</code> ke saath banao. <code>build failed at startup</code> print karo aur yeh bhi ki message mein <code>Unable to resolve service for type</code> hai ya nahi.</p>"
          },
          hint: {
            en: "<p>The build throws an <code>AggregateException</code>. Look at <code>ex.Message</code>, which includes the inner failure text.</p>",
            hi: "<p>Build <code>AggregateException</code> फेंकता है। <code>ex.Message</code> देखो, उसमें अंदर की failure का text होता है।</p>",
            hg: "<p>Build <code>AggregateException</code> phenkta hai. <code>ex.Message</code> dekho, usmein andar ki failure ka text hota hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: ValidateOnBuild finds the missing registration",
              hi: "हल: ValidateOnBuild छूटा हुआ registration पकड़ लेता है",
              hg: "Solution: ValidateOnBuild chhoota hua registration pakad leta hai"
            },
            src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddSingleton<TicketService>();   // INotifier is not registered\n\ntry\n{\n    using var provider = services.BuildServiceProvider(new ServiceProviderOptions { ValidateOnBuild = true });\n    Console.WriteLine(\"built\");\n}\ncatch (AggregateException ex)\n{\n    Console.WriteLine(\"build failed at startup\");\n    Console.WriteLine(ex.Message.Contains(\"Unable to resolve service for type\"));\n}\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class TicketService(INotifier notifier)\n{\n    public void Resolve(int id) => notifier.Send(\"98765\", $\"Ticket #{id} is resolved\");\n}",
            check: "run",
            packages: [
              "Microsoft.Extensions.DependencyInjection"
            ],
            expected: "build failed at startup\nTrue"
          }
        },
        quiz: {
          q: {
            en: "Which registration is a captive dependency?",
            hi: "कौन-सा registration captive dependency है?",
            hg: "Kaun sa registration captive dependency hai?"
          },
          options: [
            {
              en: "A transient <code>TicketNumber</code> that takes a singleton <code>Clock</code>",
              hi: "Transient <code>TicketNumber</code> जो singleton <code>Clock</code> लेता है",
              hg: "Transient <code>TicketNumber</code> jo singleton <code>Clock</code> leta hai"
            },
            {
              en: "A scoped <code>TicketSession</code> that takes a singleton <code>INotifier</code>",
              hi: "Scoped <code>TicketSession</code> जो singleton <code>INotifier</code> लेता है",
              hg: "Scoped <code>TicketSession</code> jo singleton <code>INotifier</code> leta hai"
            },
            {
              en: "A singleton <code>AgentDashboard</code> whose constructor takes a scoped <code>CurrentAgent</code>",
              hi: "Singleton <code>AgentDashboard</code> जिसका constructor scoped <code>CurrentAgent</code> लेता है",
              hg: "Singleton <code>AgentDashboard</code> jiska constructor scoped <code>CurrentAgent</code> leta hai"
            },
            {
              en: "A scoped <code>CrmContext</code> that takes a transient helper",
              hi: "Scoped <code>CrmContext</code> जो transient helper लेता है",
              hg: "Scoped <code>CrmContext</code> jo transient helper leta hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>A captive dependency is a long-lived service holding a shorter-lived one. Scoped or transient services using a singleton are fine, because the singleton lives longer. A scoped service using a transient is a small, usually harmless case.</p>",
            hi: "<p>Captive dependency वह है जिसमें लंबी उम्र वाली service छोटी उम्र वाली को पकड़े। Scoped या transient का singleton इस्तेमाल करना ठीक है, क्योंकि singleton ज़्यादा जीता है। Scoped का transient लेना छोटा और आमतौर पर बेनुक़सान मामला है।</p>",
            hg: "<p>Captive dependency woh hai jismein lambi umar wali service chhoti umar wali ko pakde. Scoped ya transient ka singleton istemal karna theek hai, kyunki singleton zyada jeeta hai. Scoped ka transient lena chhota aur aamtaur par benuksaan maamla hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Depend on the same or a longer lifetime; a singleton must not hold a scoped service.</li><li><code>ValidateScopes</code> catches singleton to scoped (not singleton to transient); <code>ValidateOnBuild</code> catches services that cannot be built.</li><li>The fix is a short scope from <code>IServiceScopeFactory</code>, not turning everything into singletons.</li></ul>",
          hi: "<ul><li>बराबर या लंबी lifetime पर depend करो; singleton scoped service को न पकड़े।</li><li><code>ValidateScopes</code> singleton से scoped पकड़ता है (singleton से transient नहीं); <code>ValidateOnBuild</code> उन services को पकड़ता है जो बन नहीं सकतीं।</li><li>हल <code>IServiceScopeFactory</code> से छोटा scope है, सब कुछ singleton बना देना नहीं।</li></ul>",
          hg: "<ul><li>Barabar ya lambi lifetime par depend karo; singleton scoped service ko na pakde.</li><li><code>ValidateScopes</code> singleton se scoped pakadta hai (singleton se transient nahi); <code>ValidateOnBuild</code> un services ko pakadta hai jo ban nahi sakti.</li><li>Hal <code>IServiceScopeFactory</code> se chhota scope hai, sab kuch singleton bana dena nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "ValidateScopes rejects a captive dependency; a scope factory is the fix",
            hi: "ValidateScopes captive dependency को रोकता है; scope factory उसका हल है",
            hg: "ValidateScopes captive dependency ko rokta hai; scope factory uska hal hai"
          },
          src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddScoped<CurrentAgent>();\nservices.AddSingleton<BrokenDashboard>();\nservices.AddSingleton<FixedDashboard>();\n\nusing var provider = services.BuildServiceProvider(new ServiceProviderOptions { ValidateScopes = true });\n\ntry\n{\n    provider.GetRequiredService<BrokenDashboard>();\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine(\"caught: \" + ex.Message.StartsWith(\"Cannot consume scoped service\"));\n}\n\nvar dashboard = provider.GetRequiredService<FixedDashboard>();\nConsole.WriteLine(dashboard.WhoIsOnDuty());\nConsole.WriteLine(dashboard.WhoIsOnDuty());\n\n// Scoped: a new instance for each scope.\npublic class CurrentAgent\n{\n    private static int _next;\n    public string Name { get; } = $\"Agent-{++_next}\";\n}\n\n// Wrong: a singleton that takes a scoped service in its constructor.\npublic class BrokenDashboard(CurrentAgent agent)\n{\n    public string WhoIsOnDuty() => agent.Name;\n}\n\n// Right: a singleton that opens a short scope each time it needs the scoped service.\npublic class FixedDashboard(IServiceScopeFactory scopeFactory)\n{\n    public string WhoIsOnDuty()\n    {\n        using var scope = scopeFactory.CreateScope();\n        return scope.ServiceProvider.GetRequiredService<CurrentAgent>().Name;\n    }\n}",
          check: "run",
          packages: [
            "Microsoft.Extensions.DependencyInjection"
          ],
          expected: "caught: True\nAgent-1\nAgent-2"
        }
      ]
    },
    {
      id: "repository-trade-offs",
      depth: "detailed",
      title: {
        en: "Repository trade-offs: generic repository, IQueryable, IUnitOfWork, testing",
        hi: "Repository के trade-offs: generic repository, IQueryable, IUnitOfWork, testing",
        hg: "Repository ke trade-offs: generic repository, IQueryable, IUnitOfWork, testing"
      },
      body: {
        en: "<p>Lessons 1 and 2 gave the default: use <code>DbContext</code> directly, or a small focused repository. These are the finer points an interviewer may ask about.</p>\n<ul>\n<li><b>Returning <code>IQueryable&lt;T&gt;</code></b> keeps flexibility (callers add <code>Where</code>, paging; the SQL is composed once; see puzzle) but leaks EF behaviour: deferred execution, provider limits, and a query that runs after the context is disposed fails. Returning <code>List&lt;T&gt;</code> hides that but loads all rows before in-memory filtering (puzzle). Pick one per boundary, deliberately.</li>\n<li><b>Unit of Work interface</b> (<code>IUnitOfWork.SaveChanges()</code> that just calls <code>DbContext.SaveChanges</code>) adds little over <code>DbContext</code>. It helps only when repositories must share a commit and you really cannot expose <code>DbContext</code>. Repositories must receive the <b>same scoped</b> context for that to work.</li>\n<li><b>Testing</b>: mocking <code>DbSet</code> is fragile and rarely matches real SQL translation. Test query code against the real engine (for example SQL Server in a container via Testcontainers; SQLite differs, see Day 7); mock the repository interface in service tests.</li>\n</ul>",
        hi: "<p>पाठ 1 और 2 ने default बताया: <code>DbContext</code> सीधे इस्तेमाल करो, या छोटी focused repository। ये वे बारीक बातें हैं जो interviewer पूछ सकता है।</p>\n<ul>\n<li><b><code>IQueryable&lt;T&gt;</code> लौटाने</b> से flexibility रहती है (callers <code>Where</code>, paging जोड़ते हैं; SQL एक बार बनती है; puzzle देखो) पर EF का व्यवहार leak होता है: deferred execution, provider की सीमाएँ, और context dispose होने के बाद चली query fail होती है। <code>List&lt;T&gt;</code> लौटाने से यह छुपता है पर in-memory filter से पहले सारी rows load होती हैं (puzzle)। हर boundary पर सोच-समझकर एक चुनो।</li>\n<li><b>Unit of Work interface</b> (<code>IUnitOfWork.SaveChanges()</code> जो बस <code>DbContext.SaveChanges</code> बुलाए) <code>DbContext</code> के ऊपर बहुत कम जोड़ता है। यह तभी काम का है जब repositories को एक commit share करना हो और <code>DbContext</code> सामने न रख सकें। इसके लिए repositories को <b>वही scoped</b> context मिलना चाहिए।</li>\n<li><b>Testing</b>: <code>DbSet</code> को mock करना नाज़ुक है और असली SQL translation से कम ही मेल खाता है। Query code को असली engine पर test करो (जैसे Testcontainers से container में SQL Server; SQLite अलग है, Day 7 देखो); service tests में repository interface mock करो।</li>\n</ul>",
        hg: "<p>Lesson 1 aur 2 ne default bataya: <code>DbContext</code> seedhe istemal karo, ya chhoti focused repository. Ye woh baareek baatein hain jo interviewer pooch sakta hai.</p>\n<ul>\n<li><b><code>IQueryable&lt;T&gt;</code> lautane</b> se flexibility rehti hai (callers <code>Where</code>, paging jodte hain; SQL ek baar banti hai; puzzle dekho) par EF ka vyavhaar leak hota hai: deferred execution, provider ki seemayein, aur context dispose hone ke baad chali query fail hoti hai. <code>List&lt;T&gt;</code> lautane se yeh chhupta hai par in-memory filter se pehle saari rows load hoti hain (puzzle). Har boundary par soch-samajhkar ek chuno.</li>\n<li><b>Unit of Work interface</b> (<code>IUnitOfWork.SaveChanges()</code> jo bas <code>DbContext.SaveChanges</code> bulaye) <code>DbContext</code> ke upar bahut kam jodta hai. Yeh tabhi kaam ka hai jab repositories ko ek commit share karna ho aur <code>DbContext</code> saamne na rakh sakein. Iske liye repositories ko <b>wahi scoped</b> context milna chahiye.</li>\n<li><b>Testing</b>: <code>DbSet</code> ko mock karna nazuk hai aur asli SQL translation se kam hi mel khata hai. Query code ko asli engine par test karo (jaise Testcontainers se container mein SQL Server; SQLite alag hai, Day 7 dekho); service tests mein repository interface mock karo.</li>\n</ul>"
      }
    },
    {
      id: "mediatr-in-detail",
      depth: "detailed",
      title: {
        en: "MediatR in detail: licence, alternative, traps",
        hi: "MediatR detail में: licence, दूसरा रास्ता, traps",
        hg: "MediatR detail mein: licence, doosra raasta, traps"
      },
      body: {
        en: "<p>Lesson 4 built the dispatcher and the decorator by hand. This section shows what MediatR looks like, what to check before adopting it, and the traps of any in-process dispatcher.</p>\n<ul>\n<li><b>MediatR</b>: a library that sends a request to one handler (<code>IRequest&lt;T&gt;</code>, <code>IRequestHandler</code>) and runs <b>pipeline behaviours</b> around it for cross-cutting concerns (logging, validation, transactions). It is the Mediator idea from Day 10, in-process only.</li>\n<li><b>Licence</b>: since July 2025, MediatR (from version 13) and AutoMapper (from version 15) are owned by Lucky Penny Software and ship under a dual licence: a paid commercial licence or the reciprocal open-source RPL-1.5 licence (its share-your-code duties are why many companies buy the commercial one), with a free tier for small companies. Older versions keep their earlier open-source licence. Terms can change, so check the current terms before adopting it in a company.</li>\n<li><b>Alternative</b>: a tiny dispatcher, or direct injection of handlers (<code>IPlaceOrderHandler</code>) with decorators for cross-cutting concerns. Same structure, no dependency.</li>\n<li><b>MediatR shape</b>: <code>record PlaceOrder(...) : IRequest&lt;int&gt;</code>, <code>IRequestHandler&lt;PlaceOrder,int&gt;</code>, <code>services.AddMediatR(...)</code>, <code>await mediator.Send(new PlaceOrder(...))</code>. Notifications (<code>INotification</code>) publish one event to many handlers.</li>\n<li><b>Traps</b>: handlers calling other handlers (a hidden call graph); one giant \"god\" pipeline behaviour; notifications: by default their handlers run one after another, so one failing handler stops the rest. Debugging cost: stack traces go through the dispatcher and every behaviour.</li>\n</ul>",
        hi: "<p>पाठ 4 में dispatcher और decorator हाथ से बनाए। यहाँ MediatR कैसा दिखता है, अपनाने से पहले क्या देखना है, और किसी भी in-process dispatcher के जाल क्या हैं, यह है।</p>\n<ul>\n<li><b>MediatR</b>: ऐसी library जो request को एक handler तक भेजती है (<code>IRequest&lt;T&gt;</code>, <code>IRequestHandler</code>) और उसके चारों ओर cross-cutting concerns (logging, validation, transactions) के लिए <b>pipeline behaviours</b> चलाती है। यह Day 10 वाला Mediator idea है, सिर्फ़ in-process।</li>\n<li><b>Licence</b>: MediatR 13 और AutoMapper 15 (July 2025) से दोनों Lucky Penny Software के हैं और dual licence पर आते हैं: paid commercial licence या reciprocal open-source RPL-1.5 licence (इसकी code share करने वाली शर्तों की वजह से कई companies commercial licence लेती हैं), और छोटी companies के लिए free tier। पुराने versions पहले वाले open-source licence पर ही रहते हैं। Terms बदल सकती हैं, इसलिए company में लेने से पहले अभी की terms देखो।</li>\n<li><b>विकल्प</b>: छोटा dispatcher, या handlers का सीधा injection (<code>IPlaceOrderHandler</code>) और cross-cutting के लिए decorators। वही structure, कोई dependency नहीं।</li>\n<li><b>MediatR का रूप</b>: <code>record PlaceOrder(...) : IRequest&lt;int&gt;</code>, <code>IRequestHandler&lt;PlaceOrder,int&gt;</code>, <code>services.AddMediatR(...)</code>, <code>await mediator.Send(new PlaceOrder(...))</code>। Notifications (<code>INotification</code>) एक event कई handlers को भेजते हैं।</li>\n<li><b>Traps</b>: handlers का दूसरे handlers को बुलाना (छुपा call graph); एक बहुत बड़ा \"god\" pipeline behaviour; notifications: default में handlers एक के बाद एक चलते हैं, इसलिए एक handler fail हो तो बाकी नहीं चलते। Debugging की कीमत: stack traces dispatcher और हर behaviour से गुज़रते हैं।</li>\n</ul>",
        hg: "<p>Lesson 4 mein dispatcher aur decorator haath se banaye. Yahan MediatR kaisa dikhta hai, apnane se pehle kya dekhna hai, aur kisi bhi in-process dispatcher ke jaal kya hain, yeh hai.</p>\n<ul>\n<li><b>MediatR</b>: aisi library jo request ko ek handler tak bhejti hai (<code>IRequest&lt;T&gt;</code>, <code>IRequestHandler</code>) aur uske charon taraf cross-cutting concerns (logging, validation, transactions) ke liye <b>pipeline behaviours</b> chalati hai. Yeh Day 10 wala Mediator idea hai, sirf in-process.</li>\n<li><b>Licence</b>: MediatR 13 aur AutoMapper 15 (July 2025) se dono Lucky Penny Software ke hain aur dual licence par aate hain: paid commercial licence ya reciprocal open-source RPL-1.5 licence (iski code share karne wali sharton ki wajah se kai companies commercial licence leti hain), aur chhoti companies ke liye free tier. Purane versions pehle wale open-source licence par hi rehte hain. Terms badal sakti hain, isliye company mein lene se pehle abhi ki terms dekho.</li>\n<li><b>Vikalp</b>: chhota dispatcher, ya handlers ka seedha injection (<code>IPlaceOrderHandler</code>) aur cross-cutting ke liye decorators. Wahi structure, koi dependency nahi.</li>\n<li><b>MediatR ka roop</b>: <code>record PlaceOrder(...) : IRequest&lt;int&gt;</code>, <code>IRequestHandler&lt;PlaceOrder,int&gt;</code>, <code>services.AddMediatR(...)</code>, <code>await mediator.Send(new PlaceOrder(...))</code>. Notifications (<code>INotification</code>) ek event kai handlers ko bhejte hain.</li>\n<li><b>Traps</b>: handlers ka doosre handlers ko bulana (chhupa call graph); ek bahut bada \"god\" pipeline behaviour; notifications: default mein handlers ek ke baad ek chalte hain, isliye ek handler fail ho to baaki nahi chalte. Debugging ki keemat: stack traces dispatcher aur har behaviour se guzarte hain.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "The same CQRS shape with MediatR (not compiled here: it needs the MediatR package; check the current API version before adopting).",
            hi: "MediatR के साथ वही CQRS shape (यहाँ compile नहीं होता: इसके लिए MediatR package चाहिए; अपनाने से पहले मौजूदा API version देख लो)।",
            hg: "MediatR ke saath wahi CQRS shape (yahan compile nahi hota: iske liye MediatR package chahiye; apnane se pehle maujooda API version dekh lo)."
          },
          check: "none",
          src: "// dotnet add package MediatR\npublic record PlaceOrder(string Item, int Quantity) : IRequest<int>;\n\npublic class PlaceOrderHandler(OrderStore store) : IRequestHandler<PlaceOrder, int>\n{\n    public Task<int> Handle(PlaceOrder request, CancellationToken ct)\n    {\n        store.Orders.Add($\"{request.Quantity} x {request.Item}\");\n        return Task.FromResult(store.Orders.Count);\n    }\n}\n\n// Pipeline behaviour: runs around every request.\npublic class LoggingBehavior<TRequest, TResponse>(ILogger<LoggingBehavior<TRequest, TResponse>> log)\n    : IPipelineBehavior<TRequest, TResponse> where TRequest : notnull\n{\n    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken ct)\n    {\n        log.LogInformation(\"Handling {Request}\", typeof(TRequest).Name);\n        return await next();\n    }\n}\n\n// Registration and use:\n// services.AddMediatR(cfg => {\n//     cfg.RegisterServicesFromAssemblyContaining<PlaceOrder>();\n//     cfg.AddOpenBehavior(typeof(LoggingBehavior<,>));\n// });\n// var id = await mediator.Send(new PlaceOrder(\"Pen\", 2), ct);"
        }
      ]
    },
    {
      id: "options-in-detail",
      depth: "detailed",
      title: {
        en: "Options in detail: named options, IValidateOptions, source generator",
        hi: "Options detail में: named options, IValidateOptions, source generator",
        hg: "Options detail mein: named options, IValidateOptions, source generator"
      },
      body: {
        en: "<p>Lessons 5 and 6 covered the three interfaces and <code>ValidateOnStart</code>. These are the next steps: several configurations of one class, rules that need injected services, and reloading.</p>\n<ul>\n<li><b>Named options</b>: several configurations of one class (<code>Configure&lt;T&gt;(\"primary\", ...)</code>, read with <code>IOptionsMonitor&lt;T&gt;.Get(\"primary\")</code>). Example: two SMTP servers.</li>\n<li><b>IValidateOptions&lt;T&gt; and the source generator</b>: a class that implements <code>IValidateOptions&lt;T&gt;</code> can take injected services; register several and all of them run. The <code>[OptionsValidator]</code> source generator (since .NET 8) writes such a class from the data-annotation attributes without reflection (good for trimming and AOT). <code>ValidateDataAnnotations()</code> comes from the package <code>Microsoft.Extensions.Options.DataAnnotations</code>.</li>\n<li><b>A bad reload</b>: the rules run again when the source reloads. If the new values break a rule, <code>IOptionsMonitor.CurrentValue</code> throws <code>OptionsValidationException</code> and the <code>OnChange</code> callback does not get the bad values. Decide in advance how the app should behave when a live reload brings bad values.</li>\n<li><b>Several options classes fail at startup</b>: if one class fails, <code>ValidateOnStart</code> throws <code>OptionsValidationException</code> with all its failures. If two or more classes fail, the host throws an <code>AggregateException</code> with one <code>OptionsValidationException</code> per class inside, so a startup catch block should handle both.</li>\n</ul>",
        hi: "<p>पाठ 5 और 6 में तीन interfaces और <code>ValidateOnStart</code> आए। अगले क़दम ये हैं: एक class की कई configurations, ऐसे rules जिन्हें inject हुई services चाहिए, और reload।</p>\n<ul>\n<li><b>Named options</b>: एक class की कई configurations (<code>Configure&lt;T&gt;(\"primary\", ...)</code>, पढ़ना <code>IOptionsMonitor&lt;T&gt;.Get(\"primary\")</code> से)। जैसे: दो SMTP servers।</li>\n<li><b>IValidateOptions&lt;T&gt; और source generator</b>: <code>IValidateOptions&lt;T&gt;</code> implement करने वाली class injected services ले सकती है; कई register करो तो सब चलती हैं। <code>[OptionsValidator]</code> source generator (.NET 8 से) data-annotation attributes से ऐसी class बिना reflection के लिख देता है (trimming और AOT के लिए अच्छा)। <code>ValidateDataAnnotations()</code> package <code>Microsoft.Extensions.Options.DataAnnotations</code> से आता है।</li>\n<li><b>गलत reload</b>: source reload होने पर rules फिर चलते हैं। नई values कोई rule तोड़ें तो <code>IOptionsMonitor.CurrentValue</code> <code>OptionsValidationException</code> फेंकता है और <code>OnChange</code> callback को गलत values नहीं मिलतीं। पहले से तय रखो कि live reload में गलत values आएँ तो app क्या करे।</li>\n<li><b>Startup पर कई options classes fail हों</b>: एक class fail हो तो <code>ValidateOnStart</code> उसकी सारी failures के साथ <code>OptionsValidationException</code> फेंकता है। दो या ज़्यादा classes fail हों तो host <code>AggregateException</code> फेंकता है, जिसके अंदर हर class का एक <code>OptionsValidationException</code> होता है, इसलिए startup का catch दोनों को सँभाले।</li>\n</ul>",
        hg: "<p>Lesson 5 aur 6 mein teen interfaces aur <code>ValidateOnStart</code> aaye. Agle qadam ye hain: ek class ki kai configurations, aise rules jinhe inject hui services chahiye, aur reload.</p>\n<ul>\n<li><b>Named options</b>: ek class ki kai configurations (<code>Configure&lt;T&gt;(\"primary\", ...)</code>, padhna <code>IOptionsMonitor&lt;T&gt;.Get(\"primary\")</code> se). Jaise: do SMTP servers.</li>\n<li><b>IValidateOptions&lt;T&gt; aur source generator</b>: <code>IValidateOptions&lt;T&gt;</code> implement karne wali class injected services le sakti hai; kai register karo to sab chalti hain. <code>[OptionsValidator]</code> source generator (.NET 8 se) data-annotation attributes se aisi class bina reflection ke likh deta hai (trimming aur AOT ke liye achha). <code>ValidateDataAnnotations()</code> package <code>Microsoft.Extensions.Options.DataAnnotations</code> se aata hai.</li>\n<li><b>Galat reload</b>: source reload hone par rules phir chalte hain. Nayi values koi rule todein to <code>IOptionsMonitor.CurrentValue</code> <code>OptionsValidationException</code> phenkta hai aur <code>OnChange</code> callback ko galat values nahi miltin. Pehle se tay rakho ki live reload mein galat values aayein to app kya kare.</li>\n<li><b>Startup par kai options classes fail hon</b>: ek class fail ho to <code>ValidateOnStart</code> uski saari failures ke saath <code>OptionsValidationException</code> phenkta hai. Do ya zyada classes fail hon to host <code>AggregateException</code> phenkta hai, jiske andar har class ka ek <code>OptionsValidationException</code> hota hai, isliye startup ka catch dono ko sambhale.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "Since .NET 8 a source generator writes the validator from attributes; a hand-written IValidateOptions class adds rules that attributes cannot express.",
            hi: ".NET 8 से source generator attributes से validator लिख देता है; हाथ से लिखी IValidateOptions class वे rules जोड़ती है जो attributes से नहीं हो सकते।",
            hg: ".NET 8 se source generator attributes se validator likh deta hai; haath se likhi IValidateOptions class woh rules jodti hai jo attributes se nahi ho sakte."
          },
          check: "compile",
          packages: [
            "Microsoft.Extensions.Hosting",
            "Microsoft.Extensions.Options.DataAnnotations"
          ],
          src: "using System.ComponentModel.DataAnnotations;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Options;\n\npublic class MailOptions\n{\n    public const string SectionName = \"Mail\";\n    [Required, MinLength(3)] public string Host { get; set; } = \"\";\n    [Range(1, 65535)] public int Port { get; set; } = 587;\n}\n\n// Source generator (.NET 8+): generates Validate(...) from the attributes, no reflection.\n[OptionsValidator]\npublic partial class MailOptionsValidator : IValidateOptions<MailOptions> { }\n\n// Hand-written: rules attributes cannot express (can also take injected services).\npublic class MailPortRule : IValidateOptions<MailOptions>\n{\n    public ValidateOptionsResult Validate(string? name, MailOptions options) =>\n        options.Port == 25\n            ? ValidateOptionsResult.Fail(\"Port 25 is blocked\")\n            : ValidateOptionsResult.Success;\n}\n\npublic static class Registration\n{\n    public static IServiceCollection AddMail(this IServiceCollection services)\n    {\n        services.AddOptions<MailOptions>().BindConfiguration(MailOptions.SectionName).ValidateOnStart();\n        services.AddSingleton<IValidateOptions<MailOptions>, MailOptionsValidator>();\n        services.AddSingleton<IValidateOptions<MailOptions>, MailPortRule>();\n        return services;\n    }\n}"
        }
      ]
    },
    {
      id: "background-worker-scope",
      depth: "detailed",
      title: {
        en: "A BackgroundService creates a scope for each job",
        hi: "BackgroundService हर काम के लिए एक scope बनाती है",
        hg: "BackgroundService har kaam ke liye ek scope banati hai"
      },
      body: {
        en: "<p>A <b>BackgroundService</b> (a hosted service) runs a loop for the life of the app, and the host registers it as a <b>singleton</b>. Inside <code>ExecuteAsync</code>, for each unit of work you call <code>CreateAsyncScope()</code> on an injected <code>IServiceScopeFactory</code>, resolve your scoped services from <code>scope.ServiceProvider</code>, and let the scope be disposed at the end of the work.</p>\n<p>Outside an HTTP request there is no automatic scope. If the worker takes <code>CrmContext</code> in its constructor, one context lives for days. With one scope per job, each run gets fresh services and releases them when it is done.</p>\n<p><b>Analogy:</b> A night-shift security guard with a visitor register. The guard is on duty all night (the singleton worker). Each visitor gets a fresh page (a scope) that is closed when the visitor leaves. The guard never writes everything on one endless page.</p>\n<p><b>Common mistakes</b></p><ul><li>Taking <code>CrmContext</code> or another scoped service in the worker constructor. With scope validation on it throws; with it off, one captive context lives for days.</li><li>Resolving scoped services from the root provider instead of from <code>scope.ServiceProvider</code>. They then live until the app stops.</li><li>Opening a scope by hand inside a controller or middleware. A web request already has its own scope.</li></ul>\n<p><b>When to use:</b> For code that runs outside an HTTP request: background jobs, message consumers, startup tasks. One scope per unit of work. Do not use it to hide a tangled lifetime design; if you need many scopes everywhere, rethink the registrations.</p>",
        hi: "<p><b>BackgroundService</b> (hosted service) app की पूरी उम्र एक loop चलाती है, और host उसे <b>singleton</b> की तरह register करता है। <code>ExecuteAsync</code> के अंदर हर काम के लिए आप inject हुए <code>IServiceScopeFactory</code> से <code>CreateAsyncScope()</code> बुलाते हो, अपनी scoped services <code>scope.ServiceProvider</code> से लेते हो, और काम ख़त्म होने पर scope dispose होने देते हो।</p>\n<p>HTTP request के बाहर कोई अपने आप वाला scope नहीं होता। Worker अपने constructor में <code>CrmContext</code> ले तो एक context दिनों तक जीता है। हर काम के लिए एक scope हो तो हर run को नई services मिलती हैं और काम पूरा होने पर वे छूट जाती हैं।</p>\n<p><b>मिसाल:</b> Visitor register वाला रात की shift का security guard। Guard पूरी रात duty पर है (singleton worker)। हर visitor को नया पन्ना मिलता है (scope) जो visitor के जाते ही बंद हो जाता है। Guard सब कुछ एक कभी न ख़त्म होने वाले पन्ने पर नहीं लिखता।</p>\n<p><b>आम ग़लतियाँ</b></p><ul><li>Worker के constructor में <code>CrmContext</code> या कोई और scoped service लेना। Scope validation चालू हो तो exception, बंद हो तो एक captive context दिनों तक जीता है।</li><li>Scoped services को <code>scope.ServiceProvider</code> की जगह root provider से लेना। तब वे app बंद होने तक ज़िंदा रहती हैं।</li><li>Controller या middleware के अंदर हाथ से scope खोलना। Web request का अपना scope पहले से होता है।</li></ul>\n<p><b>कब इस्तेमाल करें:</b> उस code के लिए जो HTTP request के बाहर चलता है: background jobs, message consumers, startup tasks। हर काम के लिए एक scope। उलझे lifetime design को छुपाने के लिए नहीं; हर जगह बहुत scopes चाहिए तो registrations दोबारा सोचो।</p>",
        hg: "<p><b>BackgroundService</b> (hosted service) app ki poori umar ek loop chalati hai, aur host use <b>singleton</b> ki tarah register karta hai. <code>ExecuteAsync</code> ke andar har kaam ke liye aap inject hue <code>IServiceScopeFactory</code> se <code>CreateAsyncScope()</code> bulate ho, apni scoped services <code>scope.ServiceProvider</code> se lete ho, aur kaam khatam hone par scope dispose hone dete ho.</p>\n<p>HTTP request ke bahar koi apne aap wala scope nahi hota. Worker apne constructor mein <code>CrmContext</code> le to ek context dinon tak jeeta hai. Har kaam ke liye ek scope ho to har run ko nayi services milti hain aur kaam poora hone par woh chhoot jaati hain.</p>\n<p><b>Misaal:</b> Visitor register wala raat ki shift ka security guard. Guard poori raat duty par hai (singleton worker). Har visitor ko naya panna milta hai (scope) jo visitor ke jaate hi band ho jaata hai. Guard sab kuch ek kabhi na khatam hone wale panne par nahi likhta.</p>\n<p><b>Aam galtiyan</b></p><ul><li>Worker ke constructor mein <code>CrmContext</code> ya koi aur scoped service lena. Scope validation chalu ho to exception, band ho to ek captive context dinon tak jeeta hai.</li><li>Scoped services ko <code>scope.ServiceProvider</code> ki jagah root provider se lena. Tab woh app band hone tak zinda rehti hain.</li><li>Controller ya middleware ke andar haath se scope kholna. Web request ka apna scope pehle se hota hai.</li></ul>\n<p><b>Kab use karein:</b> Us code ke liye jo HTTP request ke bahar chalta hai: background jobs, message consumers, startup tasks. Har kaam ke liye ek scope. Uljhe lifetime design ko chhupane ke liye nahi; har jagah bahut scopes chahiye to registrations dobara socho.</p>"
      },
      code: [
        {
          caption: {
            en: "SlaWorker: a singleton that opens one scope per run",
            hi: "SlaWorker: singleton जो हर run के लिए एक scope खोलता है",
            hg: "SlaWorker: singleton jo har run ke liye ek scope kholta hai"
          },
          src: "using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nvar builder = Host.CreateApplicationBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.Services.AddScoped<SlaChecker>();       // a new checker for each scope\nbuilder.Services.AddHostedService<SlaWorker>(); // the worker itself is a singleton\n\nusing var host = builder.Build();\nawait host.RunAsync();\n\npublic class SlaChecker : IDisposable\n{\n    private static int _created;\n    public int Number { get; } = ++_created;\n\n    public void Check() => Console.WriteLine($\"checking SLA with checker #{Number}\");\n    public void Dispose() => Console.WriteLine($\"checker #{Number} disposed\");\n}\n\n// The worker is a singleton, so it must not take SlaChecker in its constructor.\npublic class SlaWorker(IServiceScopeFactory scopeFactory, IHostApplicationLifetime lifetime) : BackgroundService\n{\n    protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n    {\n        await Task.Yield();\n        for (var run = 1; run <= 2; run++)\n        {\n            await using var scope = scopeFactory.CreateAsyncScope();   // one scope per run\n            var checker = scope.ServiceProvider.GetRequiredService<SlaChecker>();\n            checker.Check();\n        }   // scope disposed here, and the scoped checker with it\n\n        Console.WriteLine(\"worker finished\");\n        lifetime.StopApplication();\n    }\n}",
          check: "run",
          packages: [
            "Microsoft.Extensions.Hosting"
          ],
          expected: "checking SLA with checker #1\nchecker #1 disposed\nchecking SLA with checker #2\nchecker #2 disposed\nworker finished"
        }
      ]
    },
    {
      id: "di-in-detail",
      depth: "detailed",
      title: {
        en: "DI in detail: ValidateOnBuild, defaults, disposal, CI check",
        hi: "DI detail में: ValidateOnBuild, defaults, disposal, CI check",
        hg: "DI detail mein: ValidateOnBuild, defaults, disposal, CI check"
      },
      body: {
        en: "<p>Lesson 7 covered the captive dependency and the section above covered the worker scope. These are the remaining details: what each check does, where it is on by default, and who disposes what.</p>\n<ul>\n<li><code>ValidateOnBuild</code>: at <b>build time</b> checks that every registered service can be constructed (missing dependency = error at startup instead of first use). On its own it does <b>not</b> report a captive dependency; with <code>ValidateScopes</code> also on, it reports captive dependencies at build too.</li>\n<li><b>Defaults</b>: the generic host and <code>WebApplication.CreateBuilder</code> turn both on in the <b>Development</b> environment only. A provider you create yourself with <code>BuildServiceProvider()</code> has both off.</li>\n<li><b>Why not resolve from the root provider</b>: scoped services resolved from the root live until the app stops (a captive <code>DbContext</code>); with <code>ValidateScopes</code> on, it throws instead. In ASP.NET Core a request already has its own scope (<code>HttpContext.RequestServices</code>).</li>\n<li><b>Catch mistakes before production</b>: in Development both <code>ValidateScopes</code> and <code>ValidateOnBuild</code> are on. Production default is off (speed), so run an integration test or a startup check in CI with both options on, using your real registrations.</li>\n<li><b>Disposal</b>: the container disposes services it created (not instances you registered by hand with <code>AddSingleton(instance)</code>). Transient <code>IDisposable</code>s from the root provider pile up until shutdown (Day 8).</li>\n</ul>",
        hi: "<p>पाठ 7 में captive dependency आई और ऊपर वाले section में worker का scope। बाकी बारीकियाँ ये हैं: हर check क्या करता है, कहाँ default चालू है, और कौन क्या dispose करता है।</p>\n<ul>\n<li><code>ValidateOnBuild</code>: <b>build के वक़्त</b> जाँचता है कि हर registered service बन सकती है (dependency गायब = पहले इस्तेमाल की जगह startup पर error)। अकेला यह captive dependency report <b>नहीं</b> करता; <code>ValidateScopes</code> भी चालू हो तो build पर captive dependency भी पकड़ता है।</li>\n<li><b>Defaults</b>: generic host और <code>WebApplication.CreateBuilder</code> दोनों को सिर्फ़ <b>Development</b> environment में चालू करते हैं। खुद <code>BuildServiceProvider()</code> से बनाए provider में दोनों बंद होते हैं।</li>\n<li><b>Root provider से resolve क्यों नहीं</b>: root से resolve हुई scoped services app बंद होने तक जीती हैं (captive <code>DbContext</code>); <code>ValidateScopes</code> चालू हो तो exception आती है। ASP.NET Core में हर request का अपना scope होता है (<code>HttpContext.RequestServices</code>)।</li>\n<li><b>Production से पहले गलतियाँ पकड़ो</b>: Development में <code>ValidateScopes</code> और <code>ValidateOnBuild</code> दोनों चालू हैं। Production में default बंद (speed), इसलिए CI में अपनी असली registrations के साथ दोनों options चालू करके integration test या startup check चलाओ।</li>\n<li><b>Disposal</b>: container वही services dispose करता है जो उसने बनाईं (वह instance नहीं जो आपने <code>AddSingleton(instance)</code> से हाथ से दिया)। Root provider की transient <code>IDisposable</code>s shutdown तक जमा होती रहती हैं (Day 8)।</li>\n</ul>",
        hg: "<p>Lesson 7 mein captive dependency aayi aur upar wale section mein worker ka scope. Baaki baareekiyan ye hain: har check kya karta hai, kahan default chalu hai, aur kaun kya dispose karta hai.</p>\n<ul>\n<li><code>ValidateOnBuild</code>: <b>build ke waqt</b> jaanchta hai ki har registered service ban sakti hai (dependency gayab = pehle istemaal ki jagah startup par error). Akela yeh captive dependency report <b>nahi</b> karta; <code>ValidateScopes</code> bhi chaalu ho to build par captive dependency bhi pakadta hai.</li>\n<li><b>Defaults</b>: generic host aur <code>WebApplication.CreateBuilder</code> dono ko sirf <b>Development</b> environment mein chaalu karte hain. Khud <code>BuildServiceProvider()</code> se banaye provider mein dono band hote hain.</li>\n<li><b>Root provider se resolve kyon nahi</b>: root se resolve hui scoped services app band hone tak jeeti hain (captive <code>DbContext</code>); <code>ValidateScopes</code> chaalu ho to exception aati hai. ASP.NET Core mein har request ka apna scope hota hai (<code>HttpContext.RequestServices</code>).</li>\n<li><b>Production se pehle galtiyan pakdo</b>: Development mein <code>ValidateScopes</code> aur <code>ValidateOnBuild</code> dono chaalu hain. Production mein default band (speed), isliye CI mein apni asli registrations ke saath dono options chaalu karke integration test ya startup check chalao.</li>\n<li><b>Disposal</b>: container wahi services dispose karta hai jo usne banayi (woh instance nahi jo aapne <code>AddSingleton(instance)</code> se haath se diya). Root provider ki transient <code>IDisposable</code>s shutdown tak jama hoti rehti hain (Day 8).</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "A startup check for CI: build the real registrations with both validations on.",
            hi: "CI के लिए startup check: असली registrations को दोनों validations चालू करके build करो।",
            hg: "CI ke liye startup check: asli registrations ko dono validations chalu karke build karo."
          },
          src: "using Microsoft.Extensions.DependencyInjection;\n\npublic static class StartupCheck\n{\n    // Use in a CI/integration test with your real registrations.\n    public static ServiceProvider BuildStrict(IServiceCollection services) =>\n        services.BuildServiceProvider(new ServiceProviderOptions\n        {\n            ValidateScopes = true,    // catches scoped-from-root and singleton -> scoped\n            ValidateOnBuild = true    // catches registrations that cannot be constructed\n        });\n}",
          check: "compile",
          packages: [
            "Microsoft.Extensions.DependencyInjection"
          ]
        }
      ]
    }
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
        en: "<ul>\n<li><code>SaveChanges</code> already commits all tracked changes in one transaction, which is what a unit of work does (Day 5, Day 7).</li>\n<li>Reasons to add a repository: services tested without a database, a boundary between domain and EF, query rules reused in many places.</li>\n<li>Reasons not to: it forwards calls, hides EF features, adds a file per entity.</li>\n<li>Follow-up: \"How do you test then?\" — test query code against the real engine (for example SQL Server in a container; SQLite in-memory is faster but behaves differently, Day 7); fake the repository (or the service) in unit tests of the layer above.</li>\n<li>TL angle: decide once per codebase, write it in the team's conventions, and review for \"wrapper without a reason\".</li>\n</ul>",
        hi: "<ul>\n<li><code>SaveChanges</code> पहले से सारे tracked बदलाव एक transaction में commit करता है, यही unit of work का काम है (Day 5, Day 7)।</li>\n<li>Repository जोड़ने के कारण: बिना database के services की testing, domain और EF के बीच boundary, कई जगह दोहराए जाने वाले query rules।</li>\n<li>न जोड़ने के कारण: वह calls आगे भेजती है, EF features छुपाती है, हर entity पर एक file बढ़ाती है।</li>\n<li>Follow-up: \"तो test कैसे करोगे?\" — query code को असली engine पर test करो (जैसे container में SQL Server; SQLite in-memory तेज़ है पर अलग behave करता है, Day 7); ऊपर की layer के unit tests में repository (या service) fake करो।</li>\n<li>TL angle: एक बार codebase के लिए तय करो, team conventions में लिखो, और \"बिना वजह का wrapper\" review में पकड़ो।</li>\n</ul>",
        hg: "<ul>\n<li><code>SaveChanges</code> pehle se saare tracked badlav ek transaction mein commit karta hai, yahi unit of work ka kaam hai (Day 5, Day 7).</li>\n<li>Repository jodne ke kaaran: bina database ke services ki testing, domain aur EF ke beech boundary, kai jagah dohraye jane wale query rules.</li>\n<li>Na jodne ke kaaran: woh calls aage bhejti hai, EF features chhupati hai, har entity par ek file badhati hai.</li>\n<li>Follow-up: \"To test kaise karoge?\" — query code ko asli engine par test karo (jaise container mein SQL Server; SQLite in-memory tez hai par alag behave karta hai, Day 7); upar ki layer ke unit tests mein repository (ya service) fake karo.</li>\n<li>TL angle: ek baar codebase ke liye tay karo, team conventions mein likho, aur \"bina wajah ka wrapper\" review mein pakdo.</li>\n</ul>"
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
        en: "<ul>\n<li>Command: changes state, named like an order (<code>PlaceOrder</code>). Query: returns data, changes nothing (<code>GetOrderSummary</code>).</li>\n<li>Level 1: separate classes in one project and one database. Level 2: read side projects straight to DTOs (no tracking, hand-written SQL allowed). Level 3: separate read store, updated by events, so reads are eventually consistent.</li>\n<li>Do not confuse with Event Sourcing: they are often paired but independent ideas.</li>\n<li>Follow-up: \"Can a command return something?\" — usually just an id or a result; the data for screens comes from a query.</li>\n</ul>",
        hi: "<ul>\n<li>Command: state बदलता है, नाम आदेश जैसा (<code>PlaceOrder</code>)। Query: data लौटाती है, कुछ नहीं बदलती (<code>GetOrderSummary</code>)।</li>\n<li>Level 1: एक project और एक database में अलग classes। Level 2: read side सीधे DTOs में project करता है (tracking नहीं, हाथ का SQL चलता है)। Level 3: events से भरा अलग read store, इसलिए reads eventually consistent होते हैं।</li>\n<li>Event Sourcing से confuse मत करो: अक्सर साथ आते हैं पर अलग idea हैं।</li>\n<li>Follow-up: \"क्या command कुछ लौटा सकता है?\" — आमतौर पर बस id या result; screen का data query से आता है।</li>\n</ul>",
        hg: "<ul>\n<li>Command: state badalta hai, naam aadesh jaisa (<code>PlaceOrder</code>). Query: data lautati hai, kuch nahi badalti (<code>GetOrderSummary</code>).</li>\n<li>Level 1: ek project aur ek database mein alag classes. Level 2: read side seedhe DTOs mein project karta hai (tracking nahi, haath ka SQL chalta hai). Level 3: events se bhara alag read store, isliye reads eventually consistent hote hain.</li>\n<li>Event Sourcing se confuse mat karo: aksar saath aate hain par alag idea hain.</li>\n<li>Follow-up: \"Kya command kuch laut sakta hai?\" — aamtaur par bas id ya result; screen ka data query se aata hai.</li>\n</ul>"
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
        en: "<ul>\n<li>Good signals: write rules are rich, read screens need joins and aggregates, read load is much higher than write load, several teams work on the same area.</li>\n<li>Bad signals: one table, a form, a list; the \"query\" is just <code>Find</code>.</li>\n<li>Start small: level 1 or 2, split later if the pain appears. You can adopt it per feature, not for the whole app.</li>\n<li>Follow-up: \"What is the cost?\" — more classes, indirection, and with a separate read store, eventual consistency that the UI must handle.</li>\n</ul>",
        hi: "<ul>\n<li>अच्छे संकेत: write rules बहुत जटिल हैं, read screens को joins और aggregates चाहिए, read load write से बहुत ज़्यादा है, एक area पर कई teams काम करती हैं।</li>\n<li>बुरे संकेत: एक table, एक form, एक list; \"query\" बस <code>Find</code> है।</li>\n<li>छोटे से शुरू करो: level 1 या 2, दर्द दिखे तो बाद में बाँटो। इसे पूरे app की जगह feature-by-feature अपना सकते हो।</li>\n<li>Follow-up: \"कीमत क्या है?\" — ज़्यादा classes, indirection, और अलग read store हो तो eventual consistency जिसे UI को संभालना पड़ेगा।</li>\n</ul>",
        hg: "<ul>\n<li>Achhe sanket: write rules bahut jatil hain, read screens ko joins aur aggregates chahiye, read load write se bahut zyada hai, ek area par kai teams kaam karti hain.</li>\n<li>Bure sanket: ek table, ek form, ek list; \"query\" bas <code>Find</code> hai.</li>\n<li>Chhote se shuru karo: level 1 ya 2, dard dikhe to baad mein baanto. Ise poore app ki jagah feature-by-feature apna sakte ho.</li>\n<li>Follow-up: \"Keemat kya hai?\" — zyada classes, indirection, aur alag read store ho to eventual consistency jise UI ko sambhalna padega.</li>\n</ul>"
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
        en: "<ul>\n<li>MediatR gives one <code>Send</code> entry point, handler discovery by assembly scan, notifications and pipeline behaviours. AutoMapper changed licence the same way, from the same company (Lucky Penny Software).</li>\n<li>Licence facts: the Community edition is free below revenue limits and for non-production use, and registration of a licence key is required. Limits and prices can change, so a TL reads the current terms and asks legal/procurement before adding it to a company product.</li>\n<li>Alternatives: hand-rolled dispatcher (about 30 lines, see the code above), direct handler injection, or another mediator library with its own licence.</li>\n<li>TL angle: a dependency is a decision with cost (licence, upgrades, debugging through reflection-based dispatch). Justify it, do not assume it.</li>\n</ul>",
        hi: "<ul>\n<li>MediatR एक <code>Send</code> entry point, assembly scan से handler discovery, notifications और pipeline behaviours देता है। AutoMapper का licence भी इसी तरह, उसी company (Lucky Penny Software) ने बदला।</li>\n<li>Licence की बातें: Community edition revenue सीमा से नीचे और non-production में free है, और licence key का registration चाहिए। सीमाएँ और कीमतें बदल सकती हैं, इसलिए TL मौजूदा terms पढ़ता है और company product में जोड़ने से पहले legal/procurement से पूछता है।</li>\n<li>विकल्प: hand-rolled dispatcher (लगभग 30 lines, ऊपर का code देखो), handlers का सीधा injection, या अपने licence वाली दूसरी mediator library।</li>\n<li>TL angle: dependency एक फ़ैसला है जिसकी कीमत है (licence, upgrades, reflection-based dispatch में debugging)। उसे justify करो, मान मत लो।</li>\n</ul>",
        hg: "<ul>\n<li>MediatR ek <code>Send</code> entry point, assembly scan se handler discovery, notifications aur pipeline behaviours deta hai. AutoMapper ka licence bhi isi tarah, usi company (Lucky Penny Software) ne badla.</li>\n<li>Licence ki baatein: Community edition revenue seema se neeche aur non-production mein free hai, aur licence key ka registration chahiye. Seemayein aur keematein badal sakti hain, isliye TL maujooda terms padhta hai aur company product mein jodne se pehle legal/procurement se poochta hai.</li>\n<li>Vikalp: hand-rolled dispatcher (lagbhag 30 lines, upar ka code dekho), handlers ka seedha injection, ya apne licence wali doosri mediator library.</li>\n<li>TL angle: dependency ek faisla hai jiski keemat hai (licence, upgrades, reflection-based dispatch mein debugging). Use justify karo, maan mat lo.</li>\n</ul>"
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
        en: "<ul>\n<li><code>IOptions&lt;T&gt;</code>: fastest and simplest; configuration changes after the first read are ignored.</li>\n<li><code>IOptionsSnapshot&lt;T&gt;</code>: scoped, so it cannot be used in singletons. A reload appears on the next request, and the value stays stable inside one request.</li>\n<li><code>IOptionsMonitor&lt;T&gt;</code>: use in singletons and background services; <code>CurrentValue</code> is live, <code>OnChange</code> lets you react (for example rebuild a client).</li>\n<li>All three only see changes if the configuration provider reloads (JSON with <code>reloadOnChange</code>; not environment variables).</li>\n<li>Follow-up: \"Which would you pick?\" — <code>IOptions</code> unless you truly need live values; then Snapshot for request code, Monitor for singletons.</li>\n</ul>",
        hi: "<ul>\n<li><code>IOptions&lt;T&gt;</code>: सबसे तेज़ और आसान; पहली बार पढ़ने के बाद configuration के बदलाव अनदेखे।</li>\n<li><code>IOptionsSnapshot&lt;T&gt;</code>: scoped, इसलिए singletons में नहीं चलता। reload अगली request में दिखता है, और एक request के अंदर value स्थिर रहती है।</li>\n<li><code>IOptionsMonitor&lt;T&gt;</code>: singletons और background services में use करो; <code>CurrentValue</code> live है, <code>OnChange</code> से react कर सकते हो (जैसे client दोबारा बनाना)।</li>\n<li>तीनों बदलाव तभी देखते हैं जब configuration provider reload करे (<code>reloadOnChange</code> वाली JSON; environment variables नहीं)।</li>\n<li>Follow-up: \"कौन सा चुनोगे?\" — जब तक live values सच में न चाहिए, <code>IOptions</code>; फिर request code के लिए Snapshot, singletons के लिए Monitor।</li>\n</ul>",
        hg: "<ul>\n<li><code>IOptions&lt;T&gt;</code>: sabse tez aur aasan; pehli baar padhne ke baad configuration ke badlav andekhe.</li>\n<li><code>IOptionsSnapshot&lt;T&gt;</code>: scoped, isliye singletons mein nahi chalta. Reload agli request mein dikhta hai, aur ek request ke andar value sthir rehti hai.</li>\n<li><code>IOptionsMonitor&lt;T&gt;</code>: singletons aur background services mein use karo; <code>CurrentValue</code> live hai, <code>OnChange</code> se react kar sakte ho (jaise client dobara banana).</li>\n<li>Teeno badlav tabhi dekhte hain jab configuration provider reload kare (<code>reloadOnChange</code> wali JSON; environment variables nahi).</li>\n<li>Follow-up: \"Kaun sa chunoge?\" — jab tak live values sach mein na chahiye, <code>IOptions</code>; phir request code ke liye Snapshot, singletons ke liye Monitor.</li>\n</ul>"
      }
    },
    {
      id: "captive-dependency-detect",
      depth: "short",
      q: "What is a captive dependency and how do you detect it?",
      answer: "A longer-lived service holding a shorter-lived one, like a singleton keeping a scoped DbContext. ValidateScopes catches singleton→scoped at resolve time (on by default only in Development); singleton→transient is not reported.",
      meaning: {
        hi: "लंबी उम्र वाली service का छोटी उम्र वाली को पकड़े रखना, जैसे singleton में scoped DbContext। ValidateScopes singleton→scoped को resolve के वक़्त पकड़ता है (default में सिर्फ़ Development में चालू); singleton→transient रिपोर्ट नहीं होता।",
        hg: "Lambi umar wali service ka chhoti umar wali ko pakde rakhna, jaise singleton mein scoped DbContext. ValidateScopes singleton→scoped ko resolve ke waqt pakadta hai (default mein sirf Development mein chaalu); singleton→transient report nahi hota."
      },
      explain: {
        en: "<ul>\n<li>Effects: stale state, thread-safety bugs (one <code>DbContext</code> shared by parallel requests), memory growth. Lifetime basics are in Day 8.</li>\n<li>Detection: <code>ValidateScopes = true</code> throws <i>\"Cannot consume scoped service ... from singleton ...\"</i> when the singleton is resolved. With <code>ValidateOnBuild</code> also on, the same error appears at build time, before any request.</li>\n<li>Production default is off, so add a CI check that builds the provider with both options on.</li>\n<li>Fix: make the consumer scoped, or inject <code>IServiceScopeFactory</code> / a factory and create short scopes.</li>\n<li>Follow-up: \"Is Singleton → Transient also captive?\" — yes: the transient instance is created once and kept for the singleton's life, and <code>ValidateScopes</code> does not report it (it only checks scoped services).</li>\n</ul>",
        hi: "<ul>\n<li>असर: पुराना state, thread-safety bugs (एक साथ चल रही requests में एक <code>DbContext</code>), memory बढ़ना। Lifetime basics Day 8 में हैं।</li>\n<li>Detection: <code>ValidateScopes = true</code> singleton resolve होते ही <i>\"Cannot consume scoped service ... from singleton ...\"</i> फेंकता है। <code>ValidateOnBuild</code> भी चालू हो तो वही error build पर, किसी request से पहले, दिखता है।</li>\n<li>Production में default बंद है, इसलिए CI में ऐसा check जोड़ो जो provider दोनों options के साथ बनाए।</li>\n<li>Fix: consumer को scoped बनाओ, या <code>IServiceScopeFactory</code> / factory inject करके छोटे scopes बनाओ।</li>\n<li>Follow-up: \"क्या Singleton → Transient भी captive है?\" — हाँ: transient instance एक बार बनकर singleton की पूरी उम्र रहता है, और <code>ValidateScopes</code> उसे report नहीं करता (वह सिर्फ़ scoped services जाँचता है)।</li>\n</ul>",
        hg: "<ul>\n<li>Asar: purana state, thread-safety bugs (ek saath chal rahi requests mein ek <code>DbContext</code>), memory badhna. Lifetime basics Day 8 mein hain.</li>\n<li>Detection: <code>ValidateScopes = true</code> singleton resolve hote hi <i>\"Cannot consume scoped service ... from singleton ...\"</i> phenkta hai. <code>ValidateOnBuild</code> bhi chaalu ho to wahi error build par, kisi request se pehle, dikhta hai.</li>\n<li>Production mein default band hai, isliye CI mein aisa check jodo jo provider dono options ke saath banaye.</li>\n<li>Fix: consumer ko scoped banao, ya <code>IServiceScopeFactory</code> / factory inject karke chhote scopes banao.</li>\n<li>Follow-up: \"Kya Singleton → Transient bhi captive hai?\" — haan: transient instance ek baar banke singleton ki poori umar rehta hai, aur <code>ValidateScopes</code> use report nahi karta (woh sirf scoped services jaanchta hai).</li>\n</ul>"
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
        en: "<ul>\n<li>Without <code>ValidateOnStart</code>, validation runs on first read of the value, which can be minutes or hours after deployment.</li>\n<li>All failures are collected, so one startup shows every wrong setting (see the runnable example above).</li>\n<li>Validators can be attributes, a lambda, an <code>IValidateOptions&lt;T&gt;</code> class (can inject services), or the <code>[OptionsValidator]</code> source generator (since .NET 8).</li>\n<li>Follow-up: \"Does it help in a Kubernetes rollout?\" — yes: the new pod fails its start, the old pods keep serving, and the bad config never takes traffic.</li>\n</ul>",
        hi: "<ul>\n<li><code>ValidateOnStart</code> के बिना validation value के पहले पढ़ने पर चलता है, जो deploy के मिनटों या घंटों बाद हो सकता है।</li>\n<li>सारी failures इकट्ठा होती हैं, इसलिए एक startup में हर गलत setting दिख जाती है (ऊपर का runnable example देखो)।</li>\n<li>Validators attributes, lambda, <code>IValidateOptions&lt;T&gt;</code> class (services inject कर सकती है) या <code>[OptionsValidator]</code> source generator (.NET 8 से) हो सकते हैं।</li>\n<li>Follow-up: \"क्या Kubernetes rollout में मदद करता है?\" — हाँ: नया pod start पर fail होता है, पुराने pods serve करते रहते हैं, और गलत config कभी traffic नहीं लेता।</li>\n</ul>",
        hg: "<ul>\n<li><code>ValidateOnStart</code> ke bina validation value ke pehle padhne par chalta hai, jo deploy ke minuton ya ghanton baad ho sakta hai.</li>\n<li>Saari failures ikattha hoti hain, isliye ek startup mein har galat setting dikh jaati hai (upar ka runnable example dekho).</li>\n<li>Validators attributes, lambda, <code>IValidateOptions&lt;T&gt;</code> class (services inject kar sakti hai) ya <code>[OptionsValidator]</code> source generator (.NET 8 se) ho sakte hain.</li>\n<li>Follow-up: \"Kya Kubernetes rollout mein madad karta hai?\" — haan: naya pod start par fail hota hai, purane pods serve karte rehte hain, aur galat config kabhi traffic nahi leta.</li>\n</ul>"
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
        en: "<ul>\n<li>Constructor-injecting a scoped service into the worker makes it a captive dependency (and fails under <code>ValidateScopes</code>). Day 7 shows this with <code>DbContext</code>.</li>\n<li><code>await using var scope = factory.CreateAsyncScope();</code> per loop iteration or per message; the scope disposes the context.</li>\n<li>Alternative for EF: inject <code>IDbContextFactory&lt;T&gt;</code> and create a short-lived context (Day 5).</li>\n<li>Pass <code>stoppingToken</code> down so shutdown is graceful.</li>\n<li>Safe fire-and-forget from a request: queue the work and let a <code>BackgroundService</code> consume the queue (Day 3).</li>\n<li>Follow-up: \"Why not one scope for the whole loop?\" — the scope would be one long unit of work, with a growing change tracker and stale data.</li>\n</ul>",
        hi: "<ul>\n<li>Scoped service को worker के constructor में inject करना captive dependency बनाता है (और <code>ValidateScopes</code> में fail होता है)। Day 7 में <code>DbContext</code> के साथ दिखाया है।</li>\n<li>हर loop चक्कर या हर message पर <code>await using var scope = factory.CreateAsyncScope();</code>; scope context को dispose करता है।</li>\n<li>EF के लिए विकल्प: <code>IDbContextFactory&lt;T&gt;</code> inject करके छोटी उम्र का context बनाओ (Day 5)।</li>\n<li><code>stoppingToken</code> नीचे तक पास करो ताकि shutdown graceful रहे।</li>\n<li>Request से सुरक्षित fire-and-forget: काम को queue में डालो और <code>BackgroundService</code> से queue खाली करवाओ (Day 3)।</li>\n<li>Follow-up: \"पूरे loop के लिए एक scope क्यों नहीं?\" — scope एक लंबा unit of work बन जाएगा, change tracker बढ़ेगा और data पुराना होगा।</li>\n</ul>",
        hg: "<ul>\n<li>Scoped service ko worker ke constructor mein inject karna captive dependency banata hai (aur <code>ValidateScopes</code> mein fail hota hai). Day 7 mein <code>DbContext</code> ke saath dikhaya hai.</li>\n<li>Har loop chakkar ya har message par <code>await using var scope = factory.CreateAsyncScope();</code>; scope context ko dispose karta hai.</li>\n<li>EF ke liye vikalp: <code>IDbContextFactory&lt;T&gt;</code> inject karke chhoti umar ka context banao (Day 5).</li>\n<li><code>stoppingToken</code> neeche tak pass karo taaki shutdown graceful rahe.</li>\n<li>Request se surakshit fire-and-forget: kaam ko queue mein daalo aur <code>BackgroundService</code> se queue khali karvao (Day 3).</li>\n<li>Follow-up: \"Poore loop ke liye ek scope kyon nahi?\" — scope ek lamba unit of work ban jayega, change tracker badhega aur data purana hoga.</li>\n</ul>"
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
        en: "<ul>\n<li>This matches Day 7: <code>DbSet&lt;T&gt;</code> is already a generic repository and <code>DbContext</code> a unit of work.</li>\n<li>A <code>GetAll()</code> that returns a list loads everything before the caller filters; one that returns <code>IQueryable</code> hands out EF itself (see the puzzles).</li>\n<li>Different entities need different things (an aggregate root with includes, a read-only lookup table, a keyless view); one interface fits none of them well.</li>\n<li>Follow-up: \"What would you write instead?\" — <code>IOrderRepository.GetOpenOrdersFor(customerId)</code>, returning what the use-case needs, or no repository and a service using <code>DbContext</code>.</li>\n<li>Follow-up: \"Swap the database someday?\" — rarely happens; and a repository does not hide provider differences in SQL, indexes and transactions anyway.</li>\n</ul>",
        hi: "<ul>\n<li>यह Day 7 से मेल खाता है: <code>DbSet&lt;T&gt;</code> पहले से generic repository और <code>DbContext</code> unit of work है।</li>\n<li>list लौटाने वाला <code>GetAll()</code> caller के filter करने से पहले सब load कर देता है; <code>IQueryable</code> लौटाने वाला खुद EF बाहर दे देता है (puzzles देखो)।</li>\n<li>अलग entities को अलग चीज़ें चाहिए (includes वाला aggregate root, read-only lookup table, keyless view); एक interface किसी में ठीक नहीं बैठता।</li>\n<li>Follow-up: \"इसकी जगह क्या लिखोगे?\" — <code>IOrderRepository.GetOpenOrdersFor(customerId)</code>, जो use-case को चाहिए वही लौटाए, या repository नहीं और <code>DbContext</code> इस्तेमाल करने वाली service।</li>\n<li>Follow-up: \"कभी database बदलना हो तो?\" — कम ही होता है; और repository SQL, indexes, transactions के provider फ़र्क़ वैसे भी नहीं छुपाती।</li>\n</ul>",
        hg: "<ul>\n<li>Yeh Day 7 se mel khata hai: <code>DbSet&lt;T&gt;</code> pehle se generic repository aur <code>DbContext</code> unit of work hai.</li>\n<li>List lautane wala <code>GetAll()</code> caller ke filter karne se pehle sab load kar deta hai; <code>IQueryable</code> lautane wala khud EF bahar de deta hai (puzzles dekho).</li>\n<li>Alag entities ko alag cheezein chahiye (includes wala aggregate root, read-only lookup table, keyless view); ek interface kisi mein theek nahi baithta.</li>\n<li>Follow-up: \"Iski jagah kya likhoge?\" — <code>IOrderRepository.GetOpenOrdersFor(customerId)</code>, jo use-case ko chahiye wahi lautaye, ya repository nahi aur <code>DbContext</code> istemaal karne wali service.</li>\n<li>Follow-up: \"Kabhi database badalna ho to?\" — kam hi hota hai; aur repository SQL, indexes, transactions ke provider farq waise bhi nahi chhupati.</li>\n</ul>"
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
        en: "<ul>\n<li>With <code>IQueryable</code>, <code>repo.Query().Where(...).Count()</code> becomes one SQL statement; nothing runs until enumeration (Day 4, puzzle below).</li>\n<li>Leaks: a caller can call a C# method EF cannot translate (runtime error), forget to <code>await</code> inside a scope, or enumerate the query after the context is disposed.</li>\n<li>Middle path: return <code>IQueryable</code> only inside the data layer (query objects, specifications) and return DTOs/lists from the public interface; expose paging parameters explicitly.</li>\n<li>Follow-up: \"How do you test a method returning IQueryable?\" — an in-memory list <code>AsQueryable()</code> hides provider differences; prefer the real engine (a container) for translation behaviour; SQLite in-memory is faster but differs (Day 7).</li>\n</ul>",
        hi: "<ul>\n<li><code>IQueryable</code> के साथ <code>repo.Query().Where(...).Count()</code> एक SQL statement बनता है; enumeration तक कुछ नहीं चलता (Day 4, नीचे का puzzle)।</li>\n<li>Leaks: caller ऐसा C# method बुला सकता है जिसे EF translate नहीं कर सकता (runtime error), scope में <code>await</code> भूल सकता है, या context dispose होने के बाद query enumerate कर सकता है।</li>\n<li>बीच का रास्ता: <code>IQueryable</code> सिर्फ़ data layer के अंदर (query objects, specifications) और public interface से DTOs/lists लौटाओ; paging parameters साफ़ दिखाओ।</li>\n<li>Follow-up: \"IQueryable लौटाने वाले method को test कैसे करोगे?\" — in-memory list का <code>AsQueryable()</code> provider फ़र्क़ छुपाता है; translation व्यवहार के लिए असली engine (container) बेहतर; SQLite in-memory तेज़ है पर अलग है (Day 7)।</li>\n</ul>",
        hg: "<ul>\n<li><code>IQueryable</code> ke saath <code>repo.Query().Where(...).Count()</code> ek SQL statement banta hai; enumeration tak kuch nahi chalta (Day 4, neeche ka puzzle).</li>\n<li>Leaks: caller aisa C# method bula sakta hai jise EF translate nahi kar sakta (runtime error), scope mein <code>await</code> bhool sakta hai, ya context dispose hone ke baad query enumerate kar sakta hai.</li>\n<li>Beech ka raasta: <code>IQueryable</code> sirf data layer ke andar (query objects, specifications) aur public interface se DTOs/lists lautao; paging parameters saaf dikhao.</li>\n<li>Follow-up: \"IQueryable lautane wale method ko test kaise karoge?\" — in-memory list ka <code>AsQueryable()</code> provider farq chhupata hai; translation vyavhaar ke liye asli engine (container) behtar; SQLite in-memory tez hai par alag hai (Day 7).</li>\n</ul>"
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
        en: "<ul>\n<li>DbContext is registered scoped (Day 5), so within one request every repository gets the same instance (see puzzle).</li>\n<li>Repositories should <b>not</b> call <code>SaveChanges</code> themselves; the use-case (service/handler) does, once, at the end.</li>\n<li>For several <code>SaveChanges</code> calls on one context, use an explicit transaction (<code>Database.BeginTransactionAsync</code>; Day 6). A transaction begun on one context does not cover a second context: share one <code>DbConnection</code> and call <code>Database.UseTransactionAsync</code> on the second, or use <code>TransactionScope</code> (Day 6).</li>\n<li>A separate <code>IUnitOfWork</code> abstraction adds little here; it mainly lets a service commit without referencing <code>DbContext</code>.</li>\n<li>Follow-up: \"What if a repository is a singleton?\" — it would capture one context forever: a captive dependency.</li>\n</ul>",
        hi: "<ul>\n<li>DbContext scoped register होता है (Day 5), इसलिए एक request में हर repository को वही instance मिलता है (puzzle देखो)।</li>\n<li>Repositories खुद <code>SaveChanges</code> <b>न</b> बुलाएँ; use-case (service/handler) आख़िर में एक बार बुलाए।</li>\n<li>कई <code>SaveChanges</code> calls एक context पर हों तो explicit transaction (<code>Database.BeginTransactionAsync</code>; Day 6)। एक context में शुरू हुआ transaction दूसरे context को cover नहीं करता: एक <code>DbConnection</code> share करो और दूसरे पर <code>Database.UseTransactionAsync</code> बुलाओ, या <code>TransactionScope</code> (Day 6) use करो।</li>\n<li>अलग <code>IUnitOfWork</code> abstraction यहाँ कम जोड़ता है; यह मुख्य रूप से service को <code>DbContext</code> का नाम लिए बिना commit करने देता है।</li>\n<li>Follow-up: \"अगर repository singleton हो?\" — वह एक context हमेशा के लिए पकड़ लेगी: captive dependency।</li>\n</ul>",
        hg: "<ul>\n<li>DbContext scoped register hota hai (Day 5), isliye ek request mein har repository ko wahi instance milta hai (puzzle dekho).</li>\n<li>Repositories khud <code>SaveChanges</code> <b>na</b> bulayein; use-case (service/handler) aakhir mein ek baar bulaye.</li>\n<li>Kai <code>SaveChanges</code> calls ek context par hon to explicit transaction (<code>Database.BeginTransactionAsync</code>; Day 6). Ek context mein shuru hua transaction doosre context ko cover nahi karta: ek <code>DbConnection</code> share karo aur doosre par <code>Database.UseTransactionAsync</code> bulao, ya <code>TransactionScope</code> (Day 6) use karo.</li>\n<li>Alag <code>IUnitOfWork</code> abstraction yahan kam jodta hai; yeh mukhya roop se service ko <code>DbContext</code> ka naam liye bina commit karne deta hai.</li>\n<li>Follow-up: \"Agar repository singleton ho?\" — woh ek context hamesha ke liye pakad legi: captive dependency.</li>\n</ul>"
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
        en: "<ul>\n<li>Example: <code>Specs.LowStock(10)</code> wraps <code>p =&gt; p.Stock &lt; 10</code>. Callers say <code>repo.FindAsync(Specs.LowStock(10))</code>.</li>\n<li>Keep the rule as <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> so EF translates it to SQL; a <code>Func</code> would filter in memory (Day 4).</li>\n<li>Specifications can be combined (and/or) and can carry includes, sorting and paging.</li>\n<li>Libraries exist for this; a 10-line version is usually enough. Treat any library as an optional dependency.</li>\n<li>Follow-up: \"Spec vs extension method on IQueryable?\" — a real <code>IQueryable</code> extension such as <code>public static IQueryable&lt;Product&gt; LowStock(this IQueryable&lt;Product&gt; q, int t) =&gt; q.Where(p =&gt; p.Stock &lt; t);</code> is often simpler and still translates to SQL. Passing a method group to <code>Where</code> would bind to <code>Enumerable.Where</code> and filter in memory.</li>\n</ul>",
        hi: "<ul>\n<li>उदाहरण: <code>Specs.LowStock(10)</code> में <code>p =&gt; p.Stock &lt; 10</code> लिपटा है। callers कहते हैं <code>repo.FindAsync(Specs.LowStock(10))</code>।</li>\n<li>Rule को <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> रखो ताकि EF इसे SQL बनाए; <code>Func</code> memory में filter करेगा (Day 4)।</li>\n<li>Specifications को जोड़ा जा सकता है (and/or) और उनमें includes, sorting, paging हो सकते हैं।</li>\n<li>इसके लिए libraries हैं; 10 lines का version आमतौर पर काफ़ी है। किसी भी library को optional dependency मानो।</li>\n<li>Follow-up: \"Spec vs IQueryable पर extension method?\" — असली <code>IQueryable</code> extension, जैसे <code>public static IQueryable&lt;Product&gt; LowStock(this IQueryable&lt;Product&gt; q, int t) =&gt; q.Where(p =&gt; p.Stock &lt; t);</code>, अक्सर आसान है और फिर भी SQL में translate होता है। <code>Where</code> को method group देने पर वह <code>Enumerable.Where</code> से जुड़ जाएगा और memory में filter करेगा।</li>\n</ul>",
        hg: "<ul>\n<li>Udaharan: <code>Specs.LowStock(10)</code> mein <code>p =&gt; p.Stock &lt; 10</code> lipta hai. Callers kehte hain <code>repo.FindAsync(Specs.LowStock(10))</code>.</li>\n<li>Rule ko <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> rakho taaki EF ise SQL banaye; <code>Func</code> memory mein filter karega (Day 4).</li>\n<li>Specifications ko joda ja sakta hai (and/or) aur unmein includes, sorting, paging ho sakte hain.</li>\n<li>Iske liye libraries hain; 10 lines ka version aamtaur par kaafi hai. Kisi bhi library ko optional dependency maano.</li>\n<li>Follow-up: \"Spec vs IQueryable par extension method?\" — asli <code>IQueryable</code> extension, jaise <code>public static IQueryable&lt;Product&gt; LowStock(this IQueryable&lt;Product&gt; q, int t) =&gt; q.Where(p =&gt; p.Stock &lt; t);</code>, aksar aasan hai aur phir bhi SQL mein translate hota hai. <code>Where</code> ko method group dene par woh <code>Enumerable.Where</code> se jud jayega aur memory mein filter karega.</li>\n</ul>"
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
        en: "<ul>\n<li>After a command, the read model may not show the change yet; the UI can use the returned id, refresh after a moment, or read from the write side for that one screen.</li>\n<li>Event delivery is usually at-least-once, so projection handlers must be idempotent (applying the same event twice is safe).</li>\n<li>Use an outbox (write the event with the same transaction as the data) to avoid \"saved but event lost\".</li>\n<li>Follow-up: \"How do you rebuild a broken read model?\" — replay events or re-project from the write database.</li>\n<li>TL angle: this is the real cost of level 3. Many systems are fine on level 1 or 2 with strong consistency.</li>\n</ul>",
        hi: "<ul>\n<li>command के बाद read model में बदलाव अभी न दिखे; UI लौटाए गए id का उपयोग कर सकता है, थोड़ी देर बाद refresh कर सकता है, या उस एक screen के लिए write side से पढ़ सकता है।</li>\n<li>Event delivery आमतौर पर at-least-once होती है, इसलिए projection handlers idempotent होने चाहिए (वही event दो बार लगे तो भी सुरक्षित)।</li>\n<li>\"data सेव हुआ पर event खो गया\" से बचने के लिए outbox (event उसी transaction में data के साथ लिखो)।</li>\n<li>Follow-up: \"टूटा read model दोबारा कैसे बनाओगे?\" — events replay करो या write database से दोबारा project करो।</li>\n<li>TL angle: यही level 3 की असली कीमत है। कई systems level 1 या 2 में strong consistency के साथ ठीक रहते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Command ke baad read model mein badlav abhi na dikhe; UI lautaye gaye id ka upyog kar sakta hai, thodi der baad refresh kar sakta hai, ya us ek screen ke liye write side se padh sakta hai.</li>\n<li>Event delivery aamtaur par at-least-once hoti hai, isliye projection handlers idempotent hone chahiye (wahi event do baar lage to bhi surakshit).</li>\n<li>\"Data save hua par event kho gaya\" se bachne ke liye outbox (event usi transaction mein data ke saath likho).</li>\n<li>Follow-up: \"Toota read model dobara kaise banaoge?\" — events replay karo ya write database se dobara project karo.</li>\n<li>TL angle: yahi level 3 ki asli keemat hai. Kai systems level 1 ya 2 mein strong consistency ke saath theek rehte hain.</li>\n</ul>"
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
        en: "<ul>\n<li>MediatR: <code>IPipelineBehavior&lt;TRequest,TResponse&gt;</code> registered once (<code>AddOpenBehavior</code>) wraps every request in registration order.</li>\n<li>By hand: a generic <code>LoggingHandler&lt;TCommand,TResult&gt;</code> decorator (runnable example above). Libraries such as Scrutor can register decorators; plain factory lambdas work too.</li>\n<li>Order matters: usually logging, then validation, then transaction, then handler.</li>\n<li>Trap: one behaviour that does everything, or business rules hidden in a behaviour where reviewers cannot see them.</li>\n<li>Follow-up: \"ASP.NET Core middleware vs behaviours?\" — middleware wraps HTTP requests (Day 10 chain of responsibility); behaviours wrap use-cases, whatever triggered them (HTTP, queue, job).</li>\n</ul>",
        hi: "<ul>\n<li>MediatR: <code>IPipelineBehavior&lt;TRequest,TResponse&gt;</code> एक बार register (<code>AddOpenBehavior</code>) होकर हर request को registration order में wrap करता है।</li>\n<li>हाथ से: generic <code>LoggingHandler&lt;TCommand,TResult&gt;</code> decorator (ऊपर का runnable example)। Scrutor जैसी libraries decorators register कर सकती हैं; सादे factory lambdas भी चलते हैं।</li>\n<li>Order मायने रखता है: आमतौर पर logging, फिर validation, फिर transaction, फिर handler।</li>\n<li>Trap: सब कुछ करने वाला एक behaviour, या business rules ऐसे behaviour में छुपे जहाँ reviewers को न दिखें।</li>\n<li>Follow-up: \"ASP.NET Core middleware vs behaviours?\" — middleware HTTP requests wrap करता है (Day 10 chain of responsibility); behaviours use-cases wrap करते हैं, जो भी उन्हें चलाए (HTTP, queue, job)।</li>\n</ul>",
        hg: "<ul>\n<li>MediatR: <code>IPipelineBehavior&lt;TRequest,TResponse&gt;</code> ek baar register (<code>AddOpenBehavior</code>) hokar har request ko registration order mein wrap karta hai.</li>\n<li>Haath se: generic <code>LoggingHandler&lt;TCommand,TResult&gt;</code> decorator (upar ka runnable example). Scrutor jaisi libraries decorators register kar sakti hain; saade factory lambdas bhi chalte hain.</li>\n<li>Order maayne rakhta hai: aamtaur par logging, phir validation, phir transaction, phir handler.</li>\n<li>Trap: sab kuch karne wala ek behaviour, ya business rules aise behaviour mein chhupe jahan reviewers ko na dikhein.</li>\n<li>Follow-up: \"ASP.NET Core middleware vs behaviours?\" — middleware HTTP requests wrap karta hai (Day 10 chain of responsibility); behaviours use-cases wrap karte hain, jo bhi unhe chalaye (HTTP, queue, job).</li>\n</ul>"
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
        en: "<ul>\n<li>Register: <code>services.Configure&lt;MailOptions&gt;(\"primary\", config.GetSection(\"Mail:Primary\"))</code> and a second name for the backup.</li>\n<li>Read: <code>monitor.Get(\"primary\")</code>. <code>IOptionsSnapshot&lt;T&gt;.Get(name)</code> works too. <code>IOptions&lt;T&gt;</code> does not support names.</li>\n<li>The unnamed <code>.Value</code> / <code>CurrentValue</code> reads the default (empty) name, so it does not return the named ones.</li>\n<li>Validation can be per name: <code>AddOptions&lt;T&gt;(\"primary\").Validate(...)</code>.</li>\n<li>Follow-up: \"Alternative?\" — a list/dictionary in one options class, or keyed services (Day 9) for per-name clients.</li>\n</ul>",
        hi: "<ul>\n<li>Register: <code>services.Configure&lt;MailOptions&gt;(\"primary\", config.GetSection(\"Mail:Primary\"))</code> और backup के लिए दूसरा नाम।</li>\n<li>पढ़ना: <code>monitor.Get(\"primary\")</code>। <code>IOptionsSnapshot&lt;T&gt;.Get(name)</code> भी चलता है। <code>IOptions&lt;T&gt;</code> names support नहीं करता।</li>\n<li>बिना नाम का <code>.Value</code> / <code>CurrentValue</code> default (खाली) नाम पढ़ता है, इसलिए named वाले नहीं लौटाता।</li>\n<li>Validation नाम के हिसाब से हो सकता है: <code>AddOptions&lt;T&gt;(\"primary\").Validate(...)</code>।</li>\n<li>Follow-up: \"विकल्प?\" — एक options class में list/dictionary, या हर नाम के clients के लिए keyed services (Day 9)।</li>\n</ul>",
        hg: "<ul>\n<li>Register: <code>services.Configure&lt;MailOptions&gt;(\"primary\", config.GetSection(\"Mail:Primary\"))</code> aur backup ke liye doosra naam.</li>\n<li>Padhna: <code>monitor.Get(\"primary\")</code>. <code>IOptionsSnapshot&lt;T&gt;.Get(name)</code> bhi chalta hai. <code>IOptions&lt;T&gt;</code> names support nahi karta.</li>\n<li>Bina naam ka <code>.Value</code> / <code>CurrentValue</code> default (khali) naam padhta hai, isliye named wale nahi lautata.</li>\n<li>Validation naam ke hisaab se ho sakta hai: <code>AddOptions&lt;T&gt;(\"primary\").Validate(...)</code>.</li>\n<li>Follow-up: \"Vikalp?\" — ek options class mein list/dictionary, ya har naam ke clients ke liye keyed services (Day 9).</li>\n</ul>"
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
        en: "<ul>\n<li>It is an ordinary lifetime rule (Day 8), applied to options: scoped service inside singleton.</li>\n<li>With scope validation on, resolving such a singleton throws; without it, you silently get a stale snapshot.</li>\n<li><code>IOptionsMonitor&lt;T&gt;.CurrentValue</code> reads the latest value on each access; <code>OnChange</code> tells you when to refresh a cached object (a client built from the options).</li>\n<li>Follow-up: \"Is IOptions&lt;T&gt; fine in a singleton?\" — yes, it is a singleton, but it never sees reloads.</li>\n</ul>",
        hi: "<ul>\n<li>यह सामान्य lifetime rule (Day 8) है, options पर लागू: singleton के अंदर scoped service।</li>\n<li>scope validation चालू हो तो ऐसे singleton को resolve करने पर exception आती है; वरना चुपचाप पुराना snapshot मिलता है।</li>\n<li><code>IOptionsMonitor&lt;T&gt;.CurrentValue</code> हर access पर ताज़ा value पढ़ता है; <code>OnChange</code> बताता है कि cached object (options से बना client) कब refresh करें।</li>\n<li>Follow-up: \"क्या singleton में IOptions&lt;T&gt; ठीक है?\" — हाँ, वह singleton है, पर reload कभी नहीं देखता।</li>\n</ul>",
        hg: "<ul>\n<li>Yeh saamanya lifetime rule (Day 8) hai, options par laagu: singleton ke andar scoped service.</li>\n<li>Scope validation chaalu ho to aise singleton ko resolve karne par exception aati hai; warna chupchaap purana snapshot milta hai.</li>\n<li><code>IOptionsMonitor&lt;T&gt;.CurrentValue</code> har access par taaza value padhta hai; <code>OnChange</code> batata hai ki cached object (options se bana client) kab refresh karein.</li>\n<li>Follow-up: \"Kya singleton mein IOptions&lt;T&gt; theek hai?\" — haan, woh singleton hai, par reload kabhi nahi dekhta.</li>\n</ul>"
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
        en: "<ul>\n<li><code>ValidateOnBuild</code> alone: a missing dependency throws an <code>AggregateException</code> from <code>BuildServiceProvider</code> instead of an <code>InvalidOperationException</code> on first resolve; it does not report a singleton-consuming-scoped mistake.</li>\n<li>Both on: the captive dependency is reported at build too (see the puzzle on this day).</li>\n<li>Limits: open generics and factory lambdas cannot be fully checked at build time, and services resolved with <code>GetRequiredService</code> inside your own code (service locator, Day 8) are checked only when that code runs.</li>\n<li>Defaults: both on in Development for the generic host and <code>WebApplication.CreateBuilder</code>, off otherwise and off for a provider you build by hand.</li>\n</ul>",
        hi: "<ul>\n<li>अकेला <code>ValidateOnBuild</code>: गायब dependency पर <code>BuildServiceProvider</code> से <code>AggregateException</code> आती है, पहले resolve पर <code>InvalidOperationException</code> की जगह; singleton-consuming-scoped गलती यह report नहीं करता।</li>\n<li>दोनों चालू: captive dependency भी build पर report होती है (इस दिन का puzzle देखो)।</li>\n<li>सीमाएँ: open generics और factory lambdas build पर पूरी तरह जाँचे नहीं जा सकते, और आपके अपने code में <code>GetRequiredService</code> से resolve होने वाली services (service locator, Day 8) सिर्फ़ तब जाँची जाती हैं जब वह code चले।</li>\n<li>Defaults: generic host और <code>WebApplication.CreateBuilder</code> में Development में दोनों चालू, वरना बंद; हाथ से बनाए provider में भी बंद।</li>\n</ul>",
        hg: "<ul>\n<li>Akela <code>ValidateOnBuild</code>: gayab dependency par <code>BuildServiceProvider</code> se <code>AggregateException</code> aati hai, pehle resolve par <code>InvalidOperationException</code> ki jagah; singleton-consuming-scoped galti yeh report nahi karta.</li>\n<li>Dono chaalu: captive dependency bhi build par report hoti hai (is din ka puzzle dekho).</li>\n<li>Seemayein: open generics aur factory lambdas build par poori tarah jaanche nahi ja sakte, aur aapke apne code mein <code>GetRequiredService</code> se resolve hone wali services (service locator, Day 8) sirf tab jaanchi jaati hain jab woh code chale.</li>\n<li>Defaults: generic host aur <code>WebApplication.CreateBuilder</code> mein Development mein dono chaalu, warna band; haath se banaye provider mein bhi band.</li>\n</ul>"
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
        en: "<ul>\n<li>Error text with validation on: <i>\"Cannot resolve scoped service ... from root provider.\"</i> (printed in the puzzle).</li>\n<li>Disposal: scoped and transient <code>IDisposable</code>/<code>IAsyncDisposable</code> services created by a scope are disposed with that scope. Transients from the root pile up until provider disposal.</li>\n<li>Instances you register yourself (<code>AddSingleton(instance)</code>) are <b>not</b> disposed by the container; factory-created ones are.</li>\n<li>Do not dispose an injected dependency yourself (Day 7 shows this for <code>DbContext</code>); its owner (the container) does.</li>\n<li>Follow-up: \"Why prefer CreateAsyncScope?\" — a scope holding async-only disposables needs async disposal.</li>\n</ul>",
        hi: "<ul>\n<li>validation चालू होने पर error text: <i>\"Cannot resolve scoped service ... from root provider.\"</i> (puzzle में छपता है)।</li>\n<li>Disposal: scope से बनी scoped और transient <code>IDisposable</code>/<code>IAsyncDisposable</code> services उसी scope के साथ dispose होती हैं। root की transients provider dispose होने तक जमा रहती हैं।</li>\n<li>जो instances आप खुद register करते हो (<code>AddSingleton(instance)</code>) उन्हें container dispose <b>नहीं</b> करता; factory से बने instances करता है।</li>\n<li>injected dependency को खुद dispose मत करो (Day 7 में <code>DbContext</code> के लिए दिखाया है); उसका मालिक (container) करता है।</li>\n<li>Follow-up: \"CreateAsyncScope क्यों बेहतर?\" — async-only disposables वाले scope को async disposal चाहिए।</li>\n</ul>",
        hg: "<ul>\n<li>Validation chaalu hone par error text: <i>\"Cannot resolve scoped service ... from root provider.\"</i> (puzzle mein chhapta hai).</li>\n<li>Disposal: scope se bani scoped aur transient <code>IDisposable</code>/<code>IAsyncDisposable</code> services usi scope ke saath dispose hoti hain. Root ki transients provider dispose hone tak jama rehti hain.</li>\n<li>Jo instances aap khud register karte ho (<code>AddSingleton(instance)</code>) unhe container dispose <b>nahi</b> karta; factory se bane instances karta hai.</li>\n<li>Injected dependency ko khud dispose mat karo (Day 7 mein <code>DbContext</code> ke liye dikhaya hai); uska maalik (container) karta hai.</li>\n<li>Follow-up: \"CreateAsyncScope kyon behtar?\" — async-only disposables wale scope ko async disposal chahiye.</li>\n</ul>"
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
        en: "<ul>\n<li>A class that takes <code>IOptions&lt;MailOptions&gt;</code> declares its settings in its constructor; tests just create <code>Options.Create(new MailOptions {...})</code>.</li>\n<li>Binding converts types (int, TimeSpan, enums, lists) and validation catches mistakes at startup.</li>\n<li>Acceptable use of <code>IConfiguration</code>: composition-root code (<code>Program.cs</code>) that wires registrations, e.g. reading a connection string.</li>\n<li>Follow-up: \"Where do secrets come from?\" — user secrets in development; environment variables, a key vault or the platform's secret store in production, never committed files.</li>\n</ul>",
        hi: "<ul>\n<li><code>IOptions&lt;MailOptions&gt;</code> लेने वाली class अपनी settings constructor में बताती है; tests बस <code>Options.Create(new MailOptions {...})</code> बनाते हैं।</li>\n<li>Binding types बदलती है (int, TimeSpan, enums, lists) और validation गलतियाँ startup पर पकड़ता है।</li>\n<li><code>IConfiguration</code> का ठीक उपयोग: composition-root code (<code>Program.cs</code>) जो registrations जोड़ता है, जैसे connection string पढ़ना।</li>\n<li>Follow-up: \"Secrets कहाँ से आते हैं?\" — development में user secrets; production में environment variables, key vault या platform का secret store, commit हुई files से कभी नहीं।</li>\n</ul>",
        hg: "<ul>\n<li><code>IOptions&lt;MailOptions&gt;</code> lene wali class apni settings constructor mein batati hai; tests bas <code>Options.Create(new MailOptions {...})</code> banate hain.</li>\n<li>Binding types badalti hai (int, TimeSpan, enums, lists) aur validation galtiyan startup par pakadta hai.</li>\n<li><code>IConfiguration</code> ka theek upyog: composition-root code (<code>Program.cs</code>) jo registrations jodta hai, jaise connection string padhna.</li>\n<li>Follow-up: \"Secrets kahan se aate hain?\" — development mein user secrets; production mein environment variables, key vault ya platform ka secret store, commit hui files se kabhi nahi.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "transient-captured-by-singleton",
      packages: [
        "Microsoft.Extensions.DependencyInjection"
      ],
      src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddTransient<Ticket>();\nservices.AddSingleton<Printer>();\n\nusing var provider = services.BuildServiceProvider(new ServiceProviderOptions\n{\n    ValidateScopes = true,\n    ValidateOnBuild = true\n});\nConsole.WriteLine(\"validation passed\");\n\nusing var a = provider.CreateScope();\nusing var b = provider.CreateScope();\nvar printerA = a.ServiceProvider.GetRequiredService<Printer>();\nvar printerB = b.ServiceProvider.GetRequiredService<Printer>();\n\nConsole.WriteLine(\"same printer: \" + ReferenceEquals(printerA, printerB));\nConsole.WriteLine(\"ticket held by printer: \" + printerA.Ticket.Number);\nConsole.WriteLine(\"fresh ticket number: \" + a.ServiceProvider.GetRequiredService<Ticket>().Number);\nConsole.WriteLine(\"same ticket in both: \" + ReferenceEquals(printerA.Ticket, printerB.Ticket));\n\nclass Ticket\n{\n    private static int _next;\n    public int Number { get; } = ++_next;\n}\n\nclass Printer(Ticket ticket)\n{\n    public Ticket Ticket { get; } = ticket;\n}",
      answer: "validation passed\nsame printer: True\nticket held by printer: 1\nfresh ticket number: 2\nsame ticket in both: True",
      explain: {
        en: "<p>Both validations pass: <code>ValidateScopes</code> only checks <b>scoped</b> services, so a transient injected into a singleton is not reported. The <code>Printer</code> singleton is built once, receives <code>Ticket</code> number 1 and keeps it for the app's life; a fresh resolve gives a new ticket (2). \"Transient\" only means \"new per resolve\", and the singleton resolved it once. If the transient holds state or is <code>IDisposable</code>, this is a quiet bug: resolve it per use (factory or scope) instead.</p>",
        hi: "<p>दोनों validations पास हो जाते हैं: <code>ValidateScopes</code> सिर्फ़ <b>scoped</b> services जाँचता है, इसलिए singleton में inject हुआ transient report नहीं होता। <code>Printer</code> singleton एक बार बनता है, उसे <code>Ticket</code> नंबर 1 मिलता है और वह app की पूरी उम्र उसे रखता है; नया resolve नया ticket (2) देता है। \"Transient\" का मतलब बस \"हर resolve पर नया\" है, और singleton ने उसे एक ही बार resolve किया। transient में state हो या वह <code>IDisposable</code> हो तो यह चुपचाप का bug है: उसे हर इस्तेमाल पर (factory या scope से) resolve करो।</p>",
        hg: "<p>Dono validations pass ho jaate hain: <code>ValidateScopes</code> sirf <b>scoped</b> services jaanchta hai, isliye singleton mein inject hua transient report nahi hota. <code>Printer</code> singleton ek baar banta hai, use <code>Ticket</code> number 1 milta hai aur woh app ki poori umar use rakhta hai; naya resolve naya ticket (2) deta hai. \"Transient\" ka matlab bas \"har resolve par naya\" hai, aur singleton ne use ek hi baar resolve kiya. Transient mein state ho ya woh <code>IDisposable</code> ho to yeh chupchaap ka bug hai: use har istemaal par (factory ya scope se) resolve karo.</p>"
      }
    },
    {
      id: "captive-observed-value",
      packages: [
        "Microsoft.Extensions.DependencyInjection"
      ],
      src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddScoped<RequestCounter>();\nservices.AddSingleton<Report>();\n\nusing var root = services.BuildServiceProvider();   // validation is off by default here\n\nvar report = root.GetRequiredService<Report>();\nreport.Counter.Value = 42;                          // changes the captured scoped object\n\nusing (var scope = root.CreateScope())\n{\n    var counter = scope.ServiceProvider.GetRequiredService<RequestCounter>();\n    Console.WriteLine(\"a new request sees: \" + counter.Value);\n}\nConsole.WriteLine(\"the singleton still holds: \" + report.Counter.Value);\n\nclass RequestCounter { public int Value { get; set; } }\nclass Report(RequestCounter counter) { public RequestCounter Counter { get; } = counter; }",
      answer: "a new request sees: 0\nthe singleton still holds: 42",
      explain: {
        en: "<p>The singleton <code>Report</code> was resolved from the root provider, so its <code>RequestCounter</code> came from the root and stays captive for the app's life. A new scope creates its own <code>RequestCounter</code> (value 0). Nothing warns you because the manually built provider has validation off. With <code>ValidateScopes</code> on, resolving this singleton throws; the build itself is rejected only when <code>ValidateOnBuild</code> is also on.</p>",
        hi: "<p>singleton <code>Report</code> root provider से resolve हुआ, इसलिए उसका <code>RequestCounter</code> root से आया और app की पूरी उम्र captive रहता है। नया scope अपना <code>RequestCounter</code> बनाता है (value 0)। कोई चेतावनी नहीं आती क्योंकि हाथ से बने provider में validation बंद है। <code>ValidateScopes</code> चालू हो तो इस singleton को resolve करने पर exception आती है; build तभी reject होता है जब <code>ValidateOnBuild</code> भी चालू हो।</p>",
        hg: "<p>singleton <code>Report</code> root provider se resolve hua, isliye uska <code>RequestCounter</code> root se aaya aur app ki poori umar captive rehta hai. Naya scope apna <code>RequestCounter</code> banata hai (value 0). Koi chetavni nahi aati kyunki haath se bane provider mein validation band hai. <code>ValidateScopes</code> chaalu ho to is singleton ko resolve karne par exception aati hai; build tabhi reject hota hai jab <code>ValidateOnBuild</code> bhi chaalu ho.</p>"
      }
    },
    {
      id: "validate-scopes-on-build",
      packages: [
        "Microsoft.Extensions.DependencyInjection"
      ],
      src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddScoped<RequestCounter>();\nservices.AddSingleton<Report>();\n\n// 1) ValidateOnBuild alone\nusing (services.BuildServiceProvider(new ServiceProviderOptions { ValidateOnBuild = true }))\n{\n    Console.WriteLine(\"ValidateOnBuild only: built\");\n}\n\n// 2) ValidateOnBuild + ValidateScopes\ntry\n{\n    services.BuildServiceProvider(new ServiceProviderOptions { ValidateOnBuild = true, ValidateScopes = true });\n    Console.WriteLine(\"both: built\");\n}\ncatch (Exception ex)\n{\n    Console.WriteLine(\"both: \" + ex.GetType().Name);\n    Console.WriteLine(ex.Message.Contains(\"Cannot consume scoped service\"));\n}\n\n// 3) ValidateScopes: scoped service from the root provider\nusing var strict = services.BuildServiceProvider(new ServiceProviderOptions { ValidateScopes = true });\ntry\n{\n    strict.GetRequiredService<RequestCounter>();\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine(ex.Message);\n}\n\nclass RequestCounter { }\nclass Report(RequestCounter counter) { public RequestCounter Counter { get; } = counter; }",
      answer: "ValidateOnBuild only: built\nboth: AggregateException\nTrue\nCannot resolve scoped service 'RequestCounter' from root provider.",
      explain: {
        en: "<p><code>ValidateOnBuild</code> only checks that every registration can be constructed; here every dependency exists, so it builds, even though the registration is a captive dependency. With <code>ValidateScopes</code> also on, build reports it (wrapped in an <code>AggregateException</code>: \"Cannot consume scoped service ... from singleton ...\"). Step 3 shows the resolve-time check: a scoped service cannot come from the root provider.</p>",
        hi: "<p><code>ValidateOnBuild</code> सिर्फ़ यह जाँचता है कि हर registration बन सकती है; यहाँ हर dependency मौजूद है, इसलिए build हो जाता है, भले ही registration captive dependency हो। <code>ValidateScopes</code> भी चालू हो तो build उसे report करता है (<code>AggregateException</code> में लिपटा: \"Cannot consume scoped service ... from singleton ...\")। Step 3 resolve-time check दिखाता है: scoped service root provider से नहीं आ सकती।</p>",
        hg: "<p><code>ValidateOnBuild</code> sirf yeh jaanchta hai ki har registration ban sakti hai; yahan har dependency maujood hai, isliye build ho jaata hai, bhale hi registration captive dependency ho. <code>ValidateScopes</code> bhi chaalu ho to build use report karta hai (<code>AggregateException</code> mein lipta: \"Cannot consume scoped service ... from singleton ...\"). Step 3 resolve-time check dikhata hai: scoped service root provider se nahi aa sakti.</p>"
      }
    },
    {
      id: "options-reload-three-ways",
      packages: [
        "Microsoft.Extensions.Options.ConfigurationExtensions",
        "Microsoft.Extensions.Configuration",
        "Microsoft.Extensions.DependencyInjection"
      ],
      src: "using Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Options;\n\nvar config = new ConfigurationBuilder()\n    .AddInMemoryCollection(new Dictionary<string, string?> { [\"Shop:Name\"] = \"v1\" })\n    .Build();\n\nvar services = new ServiceCollection();\nservices.Configure<ShopOptions>(config.GetSection(\"Shop\"));\nusing var root = services.BuildServiceProvider();\n\nvar options = root.GetRequiredService<IOptions<ShopOptions>>();\nvar monitor = root.GetRequiredService<IOptionsMonitor<ShopOptions>>();\nmonitor.OnChange(o => Console.WriteLine(\"OnChange: \" + o.Name));\n\nusing var oldScope = root.CreateScope();\nvar oldSnapshot = oldScope.ServiceProvider.GetRequiredService<IOptionsSnapshot<ShopOptions>>();\nConsole.WriteLine($\"before: options={options.Value.Name} snapshot={oldSnapshot.Value.Name}\");\n\nconfig[\"Shop:Name\"] = \"v2\";\nconfig.Reload();                       // tells the options system the source changed\n\nusing var newScope = root.CreateScope();\nvar newSnapshot = newScope.ServiceProvider.GetRequiredService<IOptionsSnapshot<ShopOptions>>();\nConsole.WriteLine(\"IOptions: \" + options.Value.Name);\nConsole.WriteLine(\"old scope snapshot: \" + oldSnapshot.Value.Name);\nConsole.WriteLine(\"new scope snapshot: \" + newSnapshot.Value.Name);\nConsole.WriteLine(\"monitor: \" + monitor.CurrentValue.Name);\n\nclass ShopOptions { public string Name { get; set; } = \"\"; }",
      answer: "before: options=v1 snapshot=v1\nOnChange: v2\nIOptions: v1\nold scope snapshot: v1\nnew scope snapshot: v2\nmonitor: v2",
      explain: {
        en: "<p>The reload fires <code>OnChange</code> once (monitor). <code>IOptions</code> is a singleton computed on first read, so it keeps <code>v1</code>. A snapshot is computed once per scope: the scope that already read it keeps <code>v1</code>, a new scope gets <code>v2</code>. The monitor always returns the latest value. (An in-memory source needs an explicit <code>Reload()</code>; a JSON file with <code>reloadOnChange</code> triggers it for you.)</p>",
        hi: "<p>reload <code>OnChange</code> को एक बार चलाता है (monitor)। <code>IOptions</code> singleton है जो पहली बार पढ़ने पर बनता है, इसलिए <code>v1</code> रखता है। snapshot हर scope में एक बार बनता है: जिस scope ने पहले पढ़ लिया वह <code>v1</code> रखता है, नया scope <code>v2</code> पाता है। monitor हमेशा ताज़ा value लौटाता है। (in-memory source को explicit <code>Reload()</code> चाहिए; <code>reloadOnChange</code> वाली JSON file यह खुद चला देती है।)</p>",
        hg: "<p>reload <code>OnChange</code> ko ek baar chalata hai (monitor). <code>IOptions</code> singleton hai jo pehli baar padhne par banta hai, isliye <code>v1</code> rakhta hai. Snapshot har scope mein ek baar banta hai: jis scope ne pehle padh liya woh <code>v1</code> rakhta hai, naya scope <code>v2</code> paata hai. Monitor hamesha taaza value lautata hai. (in-memory source ko explicit <code>Reload()</code> chahiye; <code>reloadOnChange</code> wali JSON file yeh khud chala deti hai.)</p>"
      }
    },
    {
      id: "repository-iqueryable-vs-list",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopDb>().UseSqlite(connection).Options;\nusing var db = new ShopDb(options);\ndb.Database.EnsureCreated();\ndb.Products.AddRange(\n    new Product { Name = \"Pen\", Price = 5 },\n    new Product { Name = \"Bag\", Price = 500 },\n    new Product { Name = \"Book\", Price = 120 });\ndb.SaveChanges();\n\nvar repo = new ProductRepository(db);\n\n// Repository returns IQueryable: the caller's filter becomes part of the SQL.\nvar expensive = repo.Query().Where(p => p.Price > 100).OrderBy(p => p.Name);\nConsole.WriteLine(\"SQL has WHERE: \" + expensive.ToQueryString().Contains(\"WHERE\"));\nConsole.WriteLine(\"rows from IQueryable: \" + expensive.Count());\n\n// Repository returns a List: everything is loaded first, the filter runs in memory.\nvar all = repo.GetAll();\nConsole.WriteLine(\"rows loaded by GetAll: \" + all.Count);\nConsole.WriteLine(\"rows after in-memory filter: \" + all.Count(p => p.Price > 100));\n\nclass Product { public int Id { get; set; } public string Name { get; set; } = \"\"; public decimal Price { get; set; } }\n\nclass ShopDb(DbContextOptions<ShopDb> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n}\n\nclass ProductRepository(ShopDb db)\n{\n    public IQueryable<Product> Query() => db.Products.AsNoTracking();\n    public List<Product> GetAll() => db.Products.AsNoTracking().ToList();\n}",
      answer: "SQL has WHERE: True\nrows from IQueryable: 2\nrows loaded by GetAll: 3\nrows after in-memory filter: 2",
      explain: {
        en: "<p>With <code>IQueryable</code> nothing runs until <code>Count()</code>, and the caller's <code>Where</code> and <code>OrderBy</code> are translated into one SQL statement (<code>ToQueryString()</code> shows the <code>WHERE</code>). <code>GetAll()</code> returns a <code>List</code>: all 3 rows are loaded, then LINQ to Objects filters to 2. Same answer, very different cost on a big table. This is the trade-off behind returning <code>IQueryable</code> (Day 4: deferred execution; Day 6: generated SQL).</p>",
        hi: "<p><code>IQueryable</code> के साथ <code>Count()</code> तक कुछ नहीं चलता, और caller का <code>Where</code> व <code>OrderBy</code> एक SQL statement में translate होते हैं (<code>ToQueryString()</code> में <code>WHERE</code> दिखता है)। <code>GetAll()</code> <code>List</code> लौटाता है: सारी 3 rows load होती हैं, फिर LINQ to Objects 2 तक filter करता है। जवाब वही, बड़ी table पर कीमत बहुत अलग। यही <code>IQueryable</code> लौटाने का trade-off है (Day 4: deferred execution; Day 6: generated SQL)।</p>",
        hg: "<p><code>IQueryable</code> ke saath <code>Count()</code> tak kuch nahi chalta, aur caller ka <code>Where</code> va <code>OrderBy</code> ek SQL statement mein translate hote hain (<code>ToQueryString()</code> mein <code>WHERE</code> dikhta hai). <code>GetAll()</code> <code>List</code> lautata hai: saari 3 rows load hoti hain, phir LINQ to Objects 2 tak filter karta hai. Jawab wahi, badi table par keemat bahut alag. Yahi <code>IQueryable</code> lautane ka trade-off hai (Day 4: deferred execution; Day 6: generated SQL).</p>"
      }
    },
    {
      id: "unit-of-work-shared-context",
      packages: [
        "Microsoft.EntityFrameworkCore.Sqlite"
      ],
      src: "using Microsoft.Data.Sqlite;\nusing Microsoft.EntityFrameworkCore;\n\nusing var connection = new SqliteConnection(\"Data Source=:memory:\");\nconnection.Open();\nvar options = new DbContextOptionsBuilder<ShopDb>().UseSqlite(connection).Options;\nusing var db = new ShopDb(options);\ndb.Database.EnsureCreated();\n\nvar products = new ProductRepository(db);\nvar orders = new OrderRepository(db);\nConsole.WriteLine(\"same context: \" + ReferenceEquals(products.Context, orders.Context));\n\nproducts.Add(new Product { Name = \"Pen\" });\norders.Add(new Order { Note = \"first\" });\nConsole.WriteLine(\"pending changes: \" + db.ChangeTracker.HasChanges());\nConsole.WriteLine($\"in database before save: {await db.Products.CountAsync()} products, {await db.Orders.CountAsync()} orders\");\n\nvar written = await db.SaveChangesAsync();\nConsole.WriteLine(\"rows written: \" + written);\nConsole.WriteLine(\"pending changes: \" + db.ChangeTracker.HasChanges());\nConsole.WriteLine($\"in database after save: {await db.Products.CountAsync()} products, {await db.Orders.CountAsync()} orders\");\n\nclass Product { public int Id { get; set; } public string Name { get; set; } = \"\"; }\nclass Order { public int Id { get; set; } public string Note { get; set; } = \"\"; }\n\nclass ShopDb(DbContextOptions<ShopDb> options) : DbContext(options)\n{\n    public DbSet<Product> Products => Set<Product>();\n    public DbSet<Order> Orders => Set<Order>();\n}\n\nclass ProductRepository(ShopDb db)\n{\n    public ShopDb Context { get; } = db;\n    public void Add(Product p) => Context.Products.Add(p);\n}\n\nclass OrderRepository(ShopDb db)\n{\n    public ShopDb Context { get; } = db;\n    public void Add(Order o) => Context.Orders.Add(o);\n}",
      answer: "same context: True\npending changes: True\nin database before save: 0 products, 0 orders\nrows written: 2\npending changes: False\nin database after save: 1 products, 1 orders",
      explain: {
        en: "<p>Both repositories got the same <code>DbContext</code>, so both <code>Add</code> calls went into one change tracker. Nothing reaches the database until <code>SaveChangesAsync</code>, which writes both rows together (2 rows, in one transaction). That shared context plus <code>SaveChanges</code> is the unit of work; the repositories never called save themselves.</p>",
        hi: "<p>दोनों repositories को वही <code>DbContext</code> मिला, इसलिए दोनों <code>Add</code> calls एक change tracker में गईं। <code>SaveChangesAsync</code> तक database में कुछ नहीं पहुँचता, जो दोनों rows साथ लिखता है (2 rows, एक transaction में)। यह साझा context और <code>SaveChanges</code> ही unit of work है; repositories ने खुद save नहीं बुलाया।</p>",
        hg: "<p>Dono repositories ko wahi <code>DbContext</code> mila, isliye dono <code>Add</code> calls ek change tracker mein gayin. <code>SaveChangesAsync</code> tak database mein kuch nahi pahunchta, jo dono rows saath likhta hai (2 rows, ek transaction mein). Yeh saajha context aur <code>SaveChanges</code> hi unit of work hai; repositories ne khud save nahi bulaya.</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>DbSet</b> is already a repository and <b>DbContext</b> already a unit of work; <code>SaveChanges</code> is the commit.",
      "<b>Focused repository</b>: few named methods, a specification as an <code>Expression</code>, returns a list or DTO.",
      "<b>CQRS</b>: a command changes state and returns little; a query returns data and changes nothing. Level 1 is just separate classes.",
      "<b>Dispatcher + decorator</b> gives pipeline behaviours with DI; MediatR is the same idea as a library.",
      "<b>Options</b>: <code>IOptions</code> is read once, <code>IOptionsSnapshot</code> is per scope, <code>IOptionsMonitor</code> is live with <code>OnChange</code>.",
      "<b>ValidateOnStart</b> runs the options rules when the host starts and reports all failures together.",
      "<b>Captive dependency</b>: a singleton holding a scoped service; fix it with <code>IServiceScopeFactory</code>.",
      "Returning IQueryable composes into one SQL query but leaks EF; returning a list or DTO is a stable boundary that loads more.",
      "MediatR is optional and under a commercial licence since 2025, so check its current terms.",
      "A captive dependency is a long-lived service holding a short-lived one; ValidateScopes catches singleton to scoped, not singleton to transient.",
      "A BackgroundService is a singleton, so create a scope with IServiceScopeFactory.CreateAsyncScope for each unit of work."
    ],
    meaning: {
      hi: [
        "DbSet पहले से repository है और DbContext unit of work; SaveChanges ही commit है",
        "Focused repository: कुछ नाम वाले methods, Expression वाली specification, list या DTO लौटाती है",
        "CQRS: command state बदलता है और कम लौटाता है; query data लौटाती है और कुछ नहीं बदलती; level 1 बस अलग classes है",
        "Dispatcher + decorator DI से pipeline behaviours देते हैं; MediatR वही idea library के रूप में है",
        "Options: IOptions एक बार पढ़ा जाता है, IOptionsSnapshot हर scope पर, IOptionsMonitor live है और OnChange देता है",
        "ValidateOnStart host शुरू होते ही options के rules चलाता है और सारी failures एक साथ बताता है",
        "Captive dependency: singleton scoped service को पकड़े; हल IServiceScopeFactory से",
        "IQueryable लौटाने से एक SQL query बनती है पर EF leak होता है; list या DTO स्थिर boundary है जो ज़्यादा load करता है।",
        "MediatR optional है और 2025 से commercial licence में है, इसलिए उसकी मौजूदा terms देखो।",
        "Captive dependency यानी लंबी उम्र वाली service छोटी उम्र वाली को पकड़े; ValidateScopes singleton से scoped पकड़ता है, singleton से transient नहीं।",
        "BackgroundService singleton है, इसलिए हर काम के लिए IServiceScopeFactory.CreateAsyncScope से scope बनाओ।"
      ],
      hg: [
        "DbSet pehle se repository hai aur DbContext unit of work; SaveChanges hi commit hai",
        "Focused repository: kuch naam wale methods, Expression wali specification, list ya DTO lautati hai",
        "CQRS: command state badalta hai aur kam lautata hai; query data lautati hai aur kuch nahi badalti; level 1 bas alag classes hai",
        "Dispatcher + decorator DI se pipeline behaviours dete hain; MediatR wahi idea library ke roop mein hai",
        "Options: IOptions ek baar padha jaata hai, IOptionsSnapshot har scope par, IOptionsMonitor live hai aur OnChange deta hai",
        "ValidateOnStart host shuru hote hi options ke rules chalata hai aur saari failures ek saath batata hai",
        "Captive dependency: singleton scoped service ko pakde; hal IServiceScopeFactory se",
        "IQueryable lautane se ek SQL query banti hai par EF leak hota hai; list ya DTO sthir boundary hai jo zyada load karta hai.",
        "MediatR optional hai aur 2025 se commercial licence mein hai, isliye uski maujooda terms dekho.",
        "Captive dependency yaani lambi umar wali service chhoti umar wali ko pakde; ValidateScopes singleton se scoped pakadta hai, singleton se transient nahi.",
        "BackgroundService singleton hai, isliye har kaam ke liye IServiceScopeFactory.CreateAsyncScope se scope banao."
      ]
    }
  }
};
