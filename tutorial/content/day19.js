// Day 19 — PostgreSQL and data choices, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 19,
  format: "lesson",
  title: {
    en: "PostgreSQL and data choices — Postgres vs SQL Server, JSONB, indexing, EF Core with Npgsql, SQL vs NoSQL",
    hi: "PostgreSQL और data choices — Postgres बनाम SQL Server, JSONB, indexing, Npgsql के साथ EF Core, SQL बनाम NoSQL",
    hg: "PostgreSQL aur data choices — Postgres vs SQL Server, JSONB, indexing, Npgsql ke saath EF Core, SQL vs NoSQL"
  },
  summary: {
    en: "<p>Day 19 moves the <b>customer-care CRM</b> from SQL Server (Day 18) to PostgreSQL in 7 short lessons. Each lesson takes one thing a .NET developer trips on: how an UPDATE stores row versions, names and case, a jsonb column, index kinds, UTC time, upsert, and how to choose a data store.</p><p>Programs run without a Postgres server: EF Core with Npgsql prints its SQL and its schema script, plain C# models the ideas, and the upsert runs on SQL Server LocalDB. Postgres-only SQL appears as a short, unrun snippet.</p>",
    hi: "<p>Day 19 में <b>customer-care CRM</b>, SQL Server (Day 18) से PostgreSQL में आता है, 7 छोटे पाठों में। हर पाठ एक ऐसी बात लेता है जिस पर .NET developer अटकता है: UPDATE row versions कैसे रखता है, names और case, jsonb column, index की क़िस्में, UTC time, upsert, और data store कैसे चुनें।</p><p>Programs बिना Postgres server के चलते हैं: Npgsql वाला EF Core अपना SQL और schema script print करता है, साधारण C# बातों को model करता है, और upsert SQL Server LocalDB पर चलता है। सिर्फ़ Postgres वाला SQL छोटे, बिना चले snippet में दिखता है।</p>",
    hg: "<p>Day 19 mein <b>customer-care CRM</b>, SQL Server (Day 18) se PostgreSQL mein aata hai, 7 chhote lessons mein. Har lesson ek aisi baat leta hai jis par .NET developer atakta hai: UPDATE row versions kaise rakhta hai, names aur case, jsonb column, index ki qismein, UTC time, upsert, aur data store kaise chunein.</p><p>Programs bina Postgres server ke chalte hain: Npgsql wala EF Core apna SQL aur schema script print karta hai, saadharan C# baaton ko model karta hai, aur upsert SQL Server LocalDB par chalta hai. Sirf Postgres wala SQL chhote, bina chale snippet mein dikhta hai.</p>"
  },
  sections: [
    {
      id: "mvcc-vacuum",
      depth: "short",
      title: {
        en: "An UPDATE adds a row version (MVCC and VACUUM)",
        hi: "UPDATE नया row version जोड़ता है (MVCC और VACUUM)",
        hg: "UPDATE naya row version jodta hai (MVCC aur VACUUM)"
      },
      lesson: {
        buildsOn: {
          en: "Day 18 covered SQL Server: isolation levels, locks and the row-version store that RCSI or SNAPSHOT use. Today the same CRM tickets move to PostgreSQL, and the first question is what an <code>UPDATE</code> physically does there.",
          hi: "Day 18 में SQL Server था: isolation levels, locks और वह row-version store जो RCSI या SNAPSHOT इस्तेमाल करते हैं। आज वही CRM tickets PostgreSQL में हैं, और पहला सवाल यह है कि वहाँ <code>UPDATE</code> असल में करता क्या है।",
          hg: "Day 18 mein SQL Server tha: isolation levels, locks aur woh row-version store jo RCSI ya SNAPSHOT use karte hain. Aaj wahi CRM tickets PostgreSQL mein hain, aur pehla sawaal ye hai ki wahan <code>UPDATE</code> asal mein karta kya hai."
        },
        what: {
          en: "<p>PostgreSQL uses <b>MVCC</b> (multi-version concurrency control). An <code>UPDATE</code> does not overwrite the row. It adds a <b>new version</b> of the row in the table and marks the old version as ended (<code>xmax</code>).</p><p>Each reader works on a <b>snapshot</b> and sees only the versions that were committed when it started. Old versions that nobody can see any more are dead. <b>VACUUM</b> (run in the background by <b>autovacuum</b>) removes them.</p>",
          hi: "<p>PostgreSQL <b>MVCC</b> (multi-version concurrency control) इस्तेमाल करता है। <code>UPDATE</code> पुरानी row को overwrite नहीं करता। वह table में row का एक <b>नया version</b> जोड़ता है और पुराने version पर \"ख़त्म\" का निशान (<code>xmax</code>) लगा देता है।</p><p>हर reader एक <b>snapshot</b> पर काम करता है और सिर्फ़ वही versions देखता है जो उसके शुरू होने तक commit हो चुके थे। जिन पुराने versions को अब कोई नहीं देख सकता, वे dead हैं। <b>VACUUM</b> (जिसे <b>autovacuum</b> पीछे चलाता है) उन्हें साफ़ करता है।</p>",
          hg: "<p>PostgreSQL <b>MVCC</b> (multi-version concurrency control) use karta hai. <code>UPDATE</code> purani row ko overwrite nahi karta. Woh table mein row ka ek <b>naya version</b> jodta hai aur purane version par \"khatam\" ka nishaan (<code>xmax</code>) laga deta hai.</p><p>Har reader ek <b>snapshot</b> par kaam karta hai aur sirf wahi versions dekhta hai jo uske shuru hone tak commit ho chuke the. Jin purane versions ko ab koi nahi dekh sakta, woh dead hain. <b>VACUUM</b> (jise <b>autovacuum</b> peeche chalata hai) unhe saaf karta hai.</p>"
        },
        why: {
          en: "<p>This explains the surprises: a table that is huge but has few rows (<b>bloat</b>), and queries that slow down because one forgotten open transaction stops VACUUM from cleaning. SQL Server with RCSI keeps old versions in the version store (tempdb, or in the user database with Accelerated Database Recovery), so the table itself stays tidy.</p>",
          hi: "<p>इससे कई हैरानियाँ समझ आती हैं: table बहुत बड़ी है पर rows कम (<b>bloat</b>), और एक भूला हुआ open transaction VACUUM को सफ़ाई से रोक दे तो queries धीमी हो जाती हैं। SQL Server में RCSI पुराने versions version store में रखता है (tempdb में, या Accelerated Database Recovery हो तो user database में), इसलिए table ख़ुद साफ़ रहती है।</p>",
          hg: "<p>Isse kai hairaniyan samajh aati hain: table bahut badi hai par rows kam (<b>bloat</b>), aur ek bhula hua open transaction VACUUM ko safai se rok de to queries dheemi ho jaati hain. SQL Server mein RCSI purane versions version store mein rakhta hai (tempdb mein, ya Accelerated Database Recovery ho to user database mein), isliye table khud saaf rehti hai.</p>"
        },
        analogy: {
          en: "<p>A government file where nobody erases a line. A correction is a new note with a date; the old note stays. The record-room clerk (VACUUM) throws away old pages only when no officer still needs them.</p>",
          hi: "<p>सरकारी file जिसमें कोई लाइन मिटाता नहीं। सुधार एक नया नोट है, तारीख़ के साथ; पुराना नोट वहीं रहता है। Record-room का clerk (VACUUM) पुराने पन्ने तभी फेंकता है जब किसी अफ़सर को उनकी ज़रूरत न रहे।</p>",
          hg: "<p>Sarkari file jisme koi line mitaata nahi. Sudhaar ek naya note hai, taareekh ke saath; purana note wahin rehta hai. Record-room ka clerk (VACUUM) purane panne tabhi phenkta hai jab kisi afsar ko unki zaroorat na rahe.</p>"
        },
        focus: {
          caption: {
            en: "PostgreSQL only: see the hidden version columns and the dead rows",
            hi: "सिर्फ़ PostgreSQL: छिपे version columns और dead rows देखो",
            hg: "Sirf PostgreSQL: chhupe version columns aur dead rows dekho"
          },
          lang: "sql",
          check: "none",
          src: "-- xmin / xmax are hidden columns on every row version\nSELECT xmin, xmax, ticket_id, status FROM tickets WHERE ticket_id = 501;\n\n-- how many dead row versions is the table carrying?\nSELECT relname, n_live_tup, n_dead_tup, last_autovacuum\nFROM pg_stat_user_tables\nWHERE relname = 'tickets';"
        },
        lines: [
          {
            code: "heap.Update(501, \"Closed\", tx: 3);",
            note: {
              en: "Ticket 501 is updated twice (Assigned, then Closed). Every update adds a version; none overwrites.",
              hi: "Ticket 501 दो बार update होता है (Assigned, फिर Closed)। हर update एक version जोड़ता है; कोई overwrite नहीं करता।",
              hg: "Ticket 501 do baar update hota hai (Assigned, phir Closed). Har update ek version jodta hai; koi overwrite nahi karta."
            }
          },
          {
            code: "Versions.Add(new TicketVersion(id, status, tx));",
            note: {
              en: "The new version is added next to the old one, in the same table (heap). That is why heavy updates make a table grow.",
              hi: "नया version पुराने के पास, उसी table (heap) में जुड़ता है। इसीलिए बहुत updates से table बड़ी होती जाती है।",
              hg: "Naya version purane ke paas, usi table (heap) mein judta hai. Isiliye bahut updates se table badi hoti jaati hai."
            }
          },
          {
            code: ".Single(v => v.TicketId == id && v.XMin <= snapshot && (v.XMax is null || v.XMax > snapshot)).Status;",
            note: {
              en: "The visibility rule, simplified: a version is visible to a snapshot if it started at or before it and had not ended yet. (Real Postgres also checks which transactions had committed.) The old report keeps seeing <code>Open</code>.",
              hi: "Visibility का नियम, आसान रूप में: version किसी snapshot को तब दिखता है जब वह उससे पहले (या उसी वक़्त) शुरू हुआ हो और तब तक ख़त्म न हुआ हो। (असली Postgres यह भी देखता है कि कौन-से transactions commit हुए थे।) पुरानी report को <code>Open</code> ही दिखता रहता है।",
              hg: "Visibility ka niyam, aasaan roop mein: version kisi snapshot ko tab dikhta hai jab woh usse pehle (ya usi waqt) shuru hua ho aur tab tak khatam na hua ho. (Asli Postgres ye bhi dekhta hai ki kaunse transactions commit hue the.) Purani report ko <code>Open</code> hi dikhta rehta hai."
            }
          },
          {
            code: "public int Vacuum(int oldestSnapshot) => Versions.RemoveAll(v => v.XMax is not null && v.XMax <= oldestSnapshot);",
            note: {
              en: "Dead means ended before the <b>oldest snapshot still in use</b>. Only those versions can be removed.",
              hi: "Dead का मतलब है: <b>अभी चल रहे सबसे पुराने snapshot</b> से पहले ख़त्म हुआ। सिर्फ़ ऐसे versions हटाए जा सकते हैं।",
              hg: "Dead ka matlab hai: <b>abhi chal rahe sabse purane snapshot</b> se pehle khatam hua. Sirf aise versions hataye ja sakte hain."
            }
          },
          {
            code: "Console.WriteLine($\"VACUUM while the report is open removes: {heap.Vacuum(oldestSnapshot: reportSnapshot)}\");",
            note: {
              en: "Prints <code>0</code>: the open report might still need the old versions, so VACUUM must keep them. This is the \"one forgotten transaction\" problem.",
              hi: "<code>0</code> print होता है: खुली report को पुराने versions अब भी चाहिए हो सकते हैं, इसलिए VACUUM उन्हें रखता है। यही \"एक भूला हुआ transaction\" वाली दिक़्क़त है।",
              hg: "<code>0</code> print hota hai: khuli report ko purane versions ab bhi chahiye ho sakte hain, isliye VACUUM unhe rakhta hai. Yahi \"ek bhula hua transaction\" wali dikkat hai."
            }
          },
          {
            code: "Console.WriteLine($\"VACUUM after the report ends removes: {heap.Vacuum(oldestSnapshot: 3)}\");",
            note: {
              en: "Once the report is gone, the two dead versions are removed. One live version is left.",
              hi: "Report ख़त्म होते ही दो dead versions हट जाते हैं। एक live version बचता है।",
              hg: "Report khatam hote hi do dead versions hat jaate hain. Ek live version bachta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Thinking an UPDATE is an in-place change. In Postgres it writes a new version, so a table with heavy updates needs VACUUM to keep up.</li><li>Opening a transaction and leaving it \"idle in transaction\" (for example in a debugger or a report script). It holds back VACUUM for the whole database.</li><li>Tuning autovacuum blindly, or running <code>VACUUM FULL</code> on a busy table (it takes an exclusive lock). First find the long transaction or the table with the most updates.</li></ul>",
          hi: "<ul><li>यह सोचना कि UPDATE उसी जगह बदलाव करता है। Postgres में यह नया version लिखता है, इसलिए ज़्यादा updates वाली table को VACUUM चाहिए।</li><li>Transaction खोलकर \"idle in transaction\" छोड़ देना (जैसे debugger या report script में)। यह पूरे database का VACUUM रोक देता है।</li><li>Autovacuum को आँख मूँदकर tune करना, या busy table पर <code>VACUUM FULL</code> चलाना (यह exclusive lock लेता है)। पहले लंबा transaction या सबसे ज़्यादा updates वाली table ढूँढो।</li></ul>",
          hg: "<ul><li>Ye sochna ki UPDATE usi jagah badlaav karta hai. Postgres mein ye naya version likhta hai, isliye zyada updates wali table ko VACUUM chahiye.</li><li>Transaction kholkar \"idle in transaction\" chhod dena (jaise debugger ya report script mein). Ye poore database ka VACUUM rok deta hai.</li><li>Autovacuum ko aankh moondkar tune karna, ya busy table par <code>VACUUM FULL</code> chalana (ye exclusive lock leta hai). Pehle lamba transaction ya sabse zyada updates wali table dhoondho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use this picture when someone asks why a Postgres table is big, why a query got slow after a long report, or how Postgres differs from SQL Server. Look at <code>n_dead_tup</code> and the oldest open transaction before you change any setting.</p>",
          hi: "<p>यह तस्वीर तब काम आती है जब कोई पूछे कि Postgres की table बड़ी क्यों है, लंबी report के बाद query धीमी क्यों हुई, या Postgres SQL Server से कैसे अलग है। कोई setting बदलने से पहले <code>n_dead_tup</code> और सबसे पुराना open transaction देखो।</p>",
          hg: "<p>Ye tasveer tab kaam aati hai jab koi poochhe ki Postgres ki table badi kyun hai, lambi report ke baad query dheemi kyun hui, ya Postgres SQL Server se kaise alag hai. Koi setting badalne se pehle <code>n_dead_tup</code> aur sabse purana open transaction dekho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Ticket <b>502</b> is inserted by transaction 4 and updated to <code>Assigned</code> by transaction 5. No older snapshot is open (oldest snapshot is 5). Print how many versions <code>Vacuum</code> removes.</p>",
            hi: "<p>Ticket <b>502</b> transaction 4 से insert होता है और transaction 5 से <code>Assigned</code> में update होता है। कोई पुराना snapshot खुला नहीं है (सबसे पुराना snapshot 5 है)। print करो कि <code>Vacuum</code> कितने versions हटाता है।</p>",
            hg: "<p>Ticket <b>502</b> transaction 4 se insert hota hai aur transaction 5 se <code>Assigned</code> mein update hota hai. Koi purana snapshot khula nahi hai (sabse purana snapshot 5 hai). Print karo ki <code>Vacuum</code> kitne versions hataata hai.</p>"
          },
          hint: {
            en: "<p>Insert, Update, then call <code>heap.Vacuum(oldestSnapshot: 5)</code>. The first version ended at 5, and 5 &lt;= 5.</p>",
            hi: "<p>Insert, Update, फिर <code>heap.Vacuum(oldestSnapshot: 5)</code> call करो। पहला version 5 पर ख़त्म हुआ, और 5 &lt;= 5।</p>",
            hg: "<p>Insert, Update, phir <code>heap.Vacuum(oldestSnapshot: 5)</code> call karo. Pehla version 5 par khatam hua, aur 5 &lt;= 5.</p>"
          },
          solution: {
            caption: {
              en: "Solution: vacuum ticket 502",
              hi: "हल: ticket 502 का vacuum",
              hg: "Solution: ticket 502 ka vacuum"
            },
            check: "run",
            expected: "1",
            src: "var heap = new TicketHeap();\nheap.Insert(502, \"Open\", tx: 4);\nheap.Update(502, \"Assigned\", tx: 5);\nConsole.WriteLine(heap.Vacuum(oldestSnapshot: 5));\n\npublic record TicketVersion(int TicketId, string Status, int XMin)\n{\n    public int? XMax { get; set; }            // the transaction that ended this version\n}\n\npublic class TicketHeap\n{\n    public List<TicketVersion> Versions { get; } = [];\n\n    public void Insert(int id, string status, int tx) => Versions.Add(new TicketVersion(id, status, tx));\n\n    public void Update(int id, string status, int tx)\n    {\n        var current = Versions.Single(v => v.TicketId == id && v.XMax is null);\n        current.XMax = tx;                    // the old version ends ...\n        Versions.Add(new TicketVersion(id, status, tx));   // ... a new one is added; nothing is overwritten\n    }\n\n    public string Read(int id, int snapshot) => Versions\n        .Single(v => v.TicketId == id && v.XMin <= snapshot && (v.XMax is null || v.XMax > snapshot)).Status;\n\n    // Dead = ended before the oldest snapshot still in use.\n    public int Vacuum(int oldestSnapshot) => Versions.RemoveAll(v => v.XMax is not null && v.XMax <= oldestSnapshot);\n}"
          }
        },
        quiz: {
          q: {
            en: "In PostgreSQL, what does <code>UPDATE tickets SET status = 'Closed' WHERE ticket_id = 501</code> do to the table?",
            hi: "PostgreSQL में <code>UPDATE tickets SET status = 'Closed' WHERE ticket_id = 501</code> table के साथ क्या करता है?",
            hg: "PostgreSQL mein <code>UPDATE tickets SET status = 'Closed' WHERE ticket_id = 501</code> table ke saath kya karta hai?"
          },
          options: [
            {
              en: "Overwrites the old row in place",
              hi: "पुरानी row को उसी जगह overwrite करता है",
              hg: "Purani row ko usi jagah overwrite karta hai"
            },
            {
              en: "Adds a new row version and marks the old one as ended",
              hi: "नया row version जोड़ता है और पुराने को ख़त्म मार्क करता है",
              hg: "Naya row version jodta hai aur purane ko khatam mark karta hai"
            },
            {
              en: "Moves the old row to tempdb",
              hi: "पुरानी row को tempdb में भेजता है",
              hg: "Purani row ko tempdb mein bhejta hai"
            },
            {
              en: "Locks the whole table until commit",
              hi: "commit तक पूरी table lock कर देता है",
              hg: "commit tak poori table lock kar deta hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>That is MVCC in Postgres: versions live in the table itself. Readers keep their snapshot, and VACUUM removes the dead versions later. Postgres has no tempdb, and a plain UPDATE locks only the rows it changes.</p>",
            hi: "<p>यही Postgres का MVCC है: versions table के अंदर ही रहते हैं। Readers अपना snapshot रखते हैं और VACUUM बाद में dead versions हटाता है। Postgres में tempdb नहीं होता, और साधारण UPDATE सिर्फ़ उन्हीं rows को lock करता है जिन्हें वह बदलता है।</p>",
            hg: "<p>Yahi Postgres ka MVCC hai: versions table ke andar hi rehte hain. Readers apna snapshot rakhte hain aur VACUUM baad mein dead versions hataata hai. Postgres mein tempdb nahi hota, aur saadharan UPDATE sirf unhi rows ko lock karta hai jinhe woh badalta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Postgres UPDATE = new row version in the table; old one is dead later.</li><li>VACUUM removes only versions that no snapshot can see.</li><li>One forgotten open transaction holds back cleanup and causes bloat.</li></ul>",
          hi: "<ul><li>Postgres UPDATE = table में नया row version; पुराना बाद में dead।</li><li>VACUUM सिर्फ़ वे versions हटाता है जो किसी snapshot को नहीं दिखते।</li><li>एक भूला हुआ open transaction सफ़ाई रोकता है और bloat बनाता है।</li></ul>",
          hg: "<ul><li>Postgres UPDATE = table mein naya row version; purana baad mein dead.</li><li>VACUUM sirf wo versions hataata hai jo kisi snapshot ko nahi dikhte.</li><li>Ek bhula hua open transaction safai rokta hai aur bloat banata hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Row versions and VACUUM: a simplified C# model, not Postgres itself",
            hi: "Row versions और VACUUM: C# में एक आसान model, असली Postgres नहीं",
            hg: "Row versions aur VACUUM: C# mein ek aasaan model, asli Postgres nahi"
          },
          src: "// A simplified model of Postgres MVCC (not real Postgres): numbers stand for transactions and snapshots.\nvar heap = new TicketHeap();\nheap.Insert(501, \"Open\", tx: 1);\nint reportSnapshot = 1;                       // a long report starts right after tx 1 committed\nheap.Update(501, \"Assigned\", tx: 2);\nheap.Update(501, \"Closed\", tx: 3);\n\nConsole.WriteLine($\"Versions in the table: {heap.Versions.Count}\");\nConsole.WriteLine($\"Report still sees: {heap.Read(501, reportSnapshot)}\");\nConsole.WriteLine($\"New reader sees: {heap.Read(501, snapshot: 3)}\");\nConsole.WriteLine($\"VACUUM while the report is open removes: {heap.Vacuum(oldestSnapshot: reportSnapshot)}\");\nConsole.WriteLine($\"VACUUM after the report ends removes: {heap.Vacuum(oldestSnapshot: 3)}\");\nConsole.WriteLine($\"Versions left: {heap.Versions.Count}\");\n\npublic record TicketVersion(int TicketId, string Status, int XMin)\n{\n    public int? XMax { get; set; }            // the transaction that ended this version\n}\n\npublic class TicketHeap\n{\n    public List<TicketVersion> Versions { get; } = [];\n\n    public void Insert(int id, string status, int tx) => Versions.Add(new TicketVersion(id, status, tx));\n\n    public void Update(int id, string status, int tx)\n    {\n        var current = Versions.Single(v => v.TicketId == id && v.XMax is null);\n        current.XMax = tx;                    // the old version ends ...\n        Versions.Add(new TicketVersion(id, status, tx));   // ... a new one is added; nothing is overwritten\n    }\n\n    public string Read(int id, int snapshot) => Versions\n        .Single(v => v.TicketId == id && v.XMin <= snapshot && (v.XMax is null || v.XMax > snapshot)).Status;\n\n    // Dead = ended before the oldest snapshot still in use.\n    public int Vacuum(int oldestSnapshot) => Versions.RemoveAll(v => v.XMax is not null && v.XMax <= oldestSnapshot);\n}",
          check: "run",
          expected: "Versions in the table: 3\nReport still sees: Open\nNew reader sees: Closed\nVACUUM while the report is open removes: 0\nVACUUM after the report ends removes: 2\nVersions left: 1"
        }
      ]
    },
    {
      id: "names-and-case",
      depth: "short",
      title: {
        en: "Names and case: \"Tickets\" vs tickets, ILIKE",
        hi: "Names और case: \"Tickets\" बनाम tickets, ILIKE",
        hg: "Names aur case: \"Tickets\" banaam tickets, ILIKE"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 showed how Postgres stores tickets. Now the EF Core <code>CrmContext</code> from Day 5 and 6 talks to Postgres through the Npgsql provider, and the first thing you notice is the spelling of table names and how text is compared.",
          hi: "पाठ 1 में देखा कि Postgres tickets कैसे रखता है। अब Day 5 और 6 का EF Core <code>CrmContext</code> Npgsql provider से Postgres से बात करता है, और सबसे पहले table names की spelling और text compare में फ़र्क़ दिखता है।",
          hg: "Lesson 1 mein dekha ki Postgres tickets kaise rakhta hai. Ab Day 5 aur 6 ka EF Core <code>CrmContext</code> Npgsql provider se Postgres se baat karta hai, aur sabse pehle table names ki spelling aur text compare mein farq dikhta hai."
        },
        what: {
          en: "<p>Postgres turns an <b>unquoted</b> name into lower case: <code>Tickets</code> means <code>tickets</code>. A <b>quoted</b> name such as <code>\"Tickets\"</code> is kept exactly and must then be quoted every time.</p><p>EF Core creates PascalCase names, so they are quoted. The <code>UseSnakeCaseNamingConvention()</code> option (package <code>EFCore.NamingConventions</code>) makes <code>tickets</code> and <code>status</code> instead. Also, text comparison is <b>case-sensitive</b>: use <code>ILIKE</code> (in EF Core, <code>EF.Functions.ILike</code>) for a case-insensitive search.</p>",
          hi: "<p>Postgres <b>बिना quote</b> वाले name को lower case बना देता है: <code>Tickets</code> का मतलब <code>tickets</code>। <b>Quote</b> वाला name जैसे <code>\"Tickets\"</code> जैसा लिखा है वैसा ही रहता है, और फिर हर बार quote करना पड़ता है।</p><p>EF Core PascalCase names बनाता है, इसलिए वे quoted होते हैं। <code>UseSnakeCaseNamingConvention()</code> (package <code>EFCore.NamingConventions</code>) इसकी जगह <code>tickets</code> और <code>status</code> बनाता है। साथ ही text compare <b>case-sensitive</b> है: case का फ़र्क़ छोड़कर खोजना हो तो <code>ILIKE</code> लो (EF Core में <code>EF.Functions.ILike</code>)।</p>",
          hg: "<p>Postgres <b>bina quote</b> wale name ko lower case bana deta hai: <code>Tickets</code> ka matlab <code>tickets</code>. <b>Quote</b> wala name jaise <code>\"Tickets\"</code> jaisa likha hai waisa hi rehta hai, aur phir har baar quote karna padta hai.</p><p>EF Core PascalCase names banata hai, isliye woh quoted hote hain. <code>UseSnakeCaseNamingConvention()</code> (package <code>EFCore.NamingConventions</code>) iski jagah <code>tickets</code> aur <code>status</code> banata hai. Saath hi text compare <b>case-sensitive</b> hai: case ka farq chhodkar khojna ho to <code>ILIKE</code> lo (EF Core mein <code>EF.Functions.ILike</code>).</p>"
        },
        why: {
          en: "<p>A query copied from your SQL Server notes (<code>SELECT * FROM Tickets</code>) fails with \"relation does not exist\" when EF created <code>\"Tickets\"</code>. And a search for <code>Asha</code> will miss <code>asha</code>, while SQL Server's default collation would have found it.</p>",
          hi: "<p>SQL Server के notes से copy की हुई query (<code>SELECT * FROM Tickets</code>) \"relation does not exist\" से फ़ेल होती है जब EF ने <code>\"Tickets\"</code> बनाया हो। और <code>Asha</code> की खोज <code>asha</code> को miss कर देगी, जबकि SQL Server की default collation उसे ढूँढ लेती।</p>",
          hg: "<p>SQL Server ke notes se copy ki hui query (<code>SELECT * FROM Tickets</code>) \"relation does not exist\" se fail hoti hai jab EF ne <code>\"Tickets\"</code> banaya ho. Aur <code>Asha</code> ki khoj <code>asha</code> ko miss kar degi, jabki SQL Server ki default collation use dhoondh leti.</p>"
        },
        analogy: {
          en: "<p>Two kirana shops with different ledger habits: one writes names exactly as spoken, the other lower-cases everything on entry. Same goods; you only get into trouble if you assume the habits match.</p>",
          hi: "<p>दो किराना दुकानें जिनके खाते की आदतें अलग हैं: एक नाम जैसे बोला वैसा लिखती है, दूसरी हर नाम लिखते समय lower case कर देती है। सामान वही; दिक़्क़त तब होती है जब मान लो कि आदतें एक जैसी हैं।</p>",
          hg: "<p>Do kirana dukaanein jinke khaate ki aadatein alag hain: ek naam jaise bola waisa likhti hai, doosri har naam likhte samay lower case kar deti hai. Saaman wahi; dikkat tab hoti hai jab maan lo ki aadatein ek jaisi hain.</p>"
        },
        focus: {
          caption: {
            en: "PostgreSQL only: the same table, two spellings",
            hi: "सिर्फ़ PostgreSQL: एक ही table, दो spellings",
            hg: "Sirf PostgreSQL: ek hi table, do spellings"
          },
          lang: "sql",
          check: "none",
          src: "SELECT * FROM Tickets;     -- folded to tickets: \"relation does not exist\" if the table is \"Tickets\"\nSELECT * FROM \"Tickets\";   -- exact name: works\nSELECT 'Asha' = 'asha';    -- false: text compare is case-sensitive"
        },
        lines: [
          {
            code: "using var snake = new CrmContext(Build(snakeCase: true));",
            note: {
              en: "Two contexts over the same model: one with default names, one with the snake_case convention.",
              hi: "एक ही model पर दो contexts: एक default names के साथ, एक snake_case convention के साथ।",
              hg: "Ek hi model par do contexts: ek default names ke saath, ek snake_case convention ke saath."
            }
          },
          {
            code: "var builder = new DbContextOptionsBuilder<CrmContext>().UseNpgsql(\"Host=localhost;Database=crm\");",
            note: {
              en: "<code>UseNpgsql</code> replaces <code>UseSqlServer</code>. The connection string is a dummy here; a real app reads it from configuration or a secret store.",
              hi: "<code>UseNpgsql</code>, <code>UseSqlServer</code> की जगह लेता है। यहाँ connection string नकली है; असली app इसे configuration या secret store से पढ़ती है।",
              hg: "<code>UseNpgsql</code>, <code>UseSqlServer</code> ki jagah leta hai. Yahan connection string nakli hai; asli app ise configuration ya secret store se padhti hai."
            }
          },
          {
            code: "if (snakeCase) builder.UseSnakeCaseNamingConvention();",
            note: {
              en: "One line changes every table and column name: <code>Tickets</code> becomes <code>tickets</code>, <code>Issue</code> becomes <code>issue</code>.",
              hi: "एक line हर table और column का name बदल देती है: <code>Tickets</code> से <code>tickets</code>, <code>Issue</code> से <code>issue</code>।",
              hg: "Ek line har table aur column ka name badal deti hai: <code>Tickets</code> se <code>tickets</code>, <code>Issue</code> se <code>issue</code>."
            }
          },
          {
            code: "Console.WriteLine(plain.Tickets.Where(t => t.Status == \"Open\").Select(t => t.Issue).ToQueryString());",
            note: {
              en: "<code>ToQueryString()</code> shows the SQL without running it. With default names you see <code>\"Tickets\"</code> and <code>t.\"Status\"</code>, all quoted.",
              hi: "<code>ToQueryString()</code> SQL बिना चलाए दिखाता है। Default names में <code>\"Tickets\"</code> और <code>t.\"Status\"</code> दिखते हैं, सब quoted।",
              hg: "<code>ToQueryString()</code> SQL bina chalaye dikhata hai. Default names mein <code>\"Tickets\"</code> aur <code>t.\"Status\"</code> dikhte hain, sab quoted."
            }
          },
          {
            code: "Console.WriteLine(snake.Tickets.Where(t => EF.Functions.ILike(t.Issue, \"%bill%\")).Select(t => t.Id).ToQueryString());",
            note: {
              en: "<code>EF.Functions.ILike</code> becomes <code>ILIKE</code>: a case-insensitive search that only works on Postgres.",
              hi: "<code>EF.Functions.ILike</code> का <code>ILIKE</code> बनता है: case-insensitive खोज जो सिर्फ़ Postgres पर चलती है।",
              hg: "<code>EF.Functions.ILike</code> ka <code>ILIKE</code> banta hai: case-insensitive khoj jo sirf Postgres par chalti hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Writing raw SQL with <code>Tickets</code> when EF created <code>\"Tickets\"</code>. Quote it, or switch to snake_case from the start.</li><li>Expecting <code>Where(t =&gt; t.Issue == \"Router\")</code> to match \"router\". On Postgres the match is exact.</li><li>Changing to snake_case on a database that already exists. The names change, so you need a migration that renames everything.</li></ul>",
          hi: "<ul><li><code>Tickets</code> लिखकर raw SQL चलाना जबकि EF ने <code>\"Tickets\"</code> बनाया है। Quote लगाओ, या शुरू से snake_case रखो।</li><li>यह उम्मीद करना कि <code>Where(t =&gt; t.Issue == \"Router\")</code> \"router\" से भी match करेगा। Postgres पर match ठीक वैसा ही होता है।</li><li>पहले से बने database पर snake_case कर देना। names बदलते हैं, इसलिए सब कुछ rename करने वाला migration चाहिए।</li></ul>",
          hg: "<ul><li><code>Tickets</code> likhkar raw SQL chalana jabki EF ne <code>\"Tickets\"</code> banaya hai. Quote lagao, ya shuru se snake_case rakho.</li><li>Ye ummeed karna ki <code>Where(t =&gt; t.Issue == \"Router\")</code> \"router\" se bhi match karega. Postgres par match bilkul waisa hi hota hai.</li><li>Pehle se bane database par snake_case kar dena. Names badalte hain, isliye sab kuch rename karne wala migration chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>Choose snake_case for a new Postgres database so raw SQL, reports and BI tools stay readable. Use <code>ILIKE</code> (or an index on <code>lower(column)</code>, or the <code>citext</code> type) when users type names in any case.</p>",
          hi: "<p>नए Postgres database के लिए snake_case चुनो ताकि raw SQL, reports और BI tools पढ़ने में आसान रहें। जब users किसी भी case में नाम लिखें तो <code>ILIKE</code> लो (या <code>lower(column)</code> पर index, या <code>citext</code> type)।</p>",
          hg: "<p>Naye Postgres database ke liye snake_case chuno taaki raw SQL, reports aur BI tools padhne mein aasaan rahein. Jab users kisi bhi case mein naam likhein to <code>ILIKE</code> lo (ya <code>lower(column)</code> par index, ya <code>citext</code> type).</p>"
        },
        exercise: {
          task: {
            en: "<p>With the snake_case convention, print the SQL that finds the <b>ids</b> of tickets whose issue starts with <code>router</code> in any case (<code>ILike</code>), ordered by <code>Id</code>.</p>",
            hi: "<p>snake_case convention के साथ वह SQL print करो जो उन tickets के <b>ids</b> ढूँढे जिनका issue किसी भी case में <code>router</code> से शुरू होता है (<code>ILike</code>), <code>Id</code> के क्रम में।</p>",
            hg: "<p>snake_case convention ke saath wo SQL print karo jo un tickets ke <b>ids</b> dhoondhe jinka issue kisi bhi case mein <code>router</code> se shuru hota hai (<code>ILike</code>), <code>Id</code> ke kram mein.</p>"
          },
          hint: {
            en: "<p>Use the pattern <code>\"router%\"</code>, then <code>OrderBy(t =&gt; t.Id)</code> and <code>Select(t =&gt; t.Id)</code> before <code>ToQueryString()</code>.</p>",
            hi: "<p>Pattern <code>\"router%\"</code> लो, फिर <code>ToQueryString()</code> से पहले <code>OrderBy(t =&gt; t.Id)</code> और <code>Select(t =&gt; t.Id)</code> लगाओ।</p>",
            hg: "<p>Pattern <code>\"router%\"</code> lo, phir <code>ToQueryString()</code> se pehle <code>OrderBy(t =&gt; t.Id)</code> aur <code>Select(t =&gt; t.Id)</code> lagao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: ILIKE with snake_case",
              hi: "हल: snake_case के साथ ILIKE",
              hg: "Solution: snake_case ke saath ILIKE"
            },
            check: "run",
            expected: "SELECT t.id\nFROM tickets AS t\nWHERE t.issue ILIKE 'router%'\nORDER BY t.id",
            packages: [
              "Npgsql.EntityFrameworkCore.PostgreSQL",
              "EFCore.NamingConventions"
            ],
            src: "using Microsoft.EntityFrameworkCore;\n\nvar options = new DbContextOptionsBuilder<CrmContext>()\n    .UseNpgsql(\"Host=localhost;Database=crm\")\n    .UseSnakeCaseNamingConvention()\n    .Options;\nusing var db = new CrmContext(options);\n\nConsole.WriteLine(db.Tickets\n    .Where(t => EF.Functions.ILike(t.Issue, \"router%\"))\n    .OrderBy(t => t.Id)\n    .Select(t => t.Id)\n    .ToQueryString());\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}"
          }
        },
        quiz: {
          q: {
            en: "EF Core created the table with its default names. Which Postgres query reads it?",
            hi: "EF Core ने table अपने default names से बनाई है। कौन-सी Postgres query उसे पढ़ेगी?",
            hg: "EF Core ne table apne default names se banayi hai. Kaunsi Postgres query use padhegi?"
          },
          options: [
            {
              en: "<code>SELECT * FROM [Tickets]</code>",
              hi: "<code>SELECT * FROM [Tickets]</code> (square brackets में)",
              hg: "<code>SELECT * FROM [Tickets]</code> (square brackets mein)"
            },
            {
              en: "<code>SELECT * FROM Tickets</code>",
              hi: "<code>SELECT * FROM Tickets</code> (बिना quote)",
              hg: "<code>SELECT * FROM Tickets</code> (bina quote)"
            },
            {
              en: "<code>SELECT * FROM \"Tickets\"</code>",
              hi: "<code>SELECT * FROM \"Tickets\"</code> (quote के साथ)",
              hg: "<code>SELECT * FROM \"Tickets\"</code> (quote ke saath)"
            },
            {
              en: "<code>SELECT * FROM TICKETS</code>",
              hi: "<code>SELECT * FROM TICKETS</code> (बड़े अक्षरों में)",
              hg: "<code>SELECT * FROM TICKETS</code> (bade aksharon mein)"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>The table is called <code>Tickets</code> with a capital T, so you must quote it. Unquoted <code>Tickets</code> and <code>TICKETS</code> both fold to <code>tickets</code>, which is a different name. Square brackets are SQL Server syntax.</p>",
            hi: "<p>Table का नाम बड़े T वाला <code>Tickets</code> है, इसलिए quote लगाना ही पड़ेगा। बिना quote के <code>Tickets</code> और <code>TICKETS</code> दोनों <code>tickets</code> बन जाते हैं, जो अलग नाम है। Square brackets SQL Server की syntax है।</p>",
            hg: "<p>Table ka naam bade T wala <code>Tickets</code> hai, isliye quote lagana hi padega. Bina quote ke <code>Tickets</code> aur <code>TICKETS</code> dono <code>tickets</code> ban jaate hain, jo alag naam hai. Square brackets SQL Server ki syntax hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Unquoted names fold to lower case; quoted names stay exact.</li><li><code>UseSnakeCaseNamingConvention()</code> gives readable lower-case names.</li><li>Text compare is case-sensitive: use <code>ILIKE</code> for a case-insensitive search.</li></ul>",
          hi: "<ul><li>बिना quote के names lower case बनते हैं; quoted names जैसे हैं वैसे रहते हैं।</li><li><code>UseSnakeCaseNamingConvention()</code> पढ़ने लायक lower-case names देता है।</li><li>Text compare case-sensitive है: case का फ़र्क़ छोड़कर खोजने के लिए <code>ILIKE</code> लो।</li></ul>",
          hg: "<ul><li>Bina quote ke names lower case bante hain; quoted names jaise hain waise rehte hain.</li><li><code>UseSnakeCaseNamingConvention()</code> padhne laayak lower-case names deta hai.</li><li>Text compare case-sensitive hai: case ka farq chhodkar khojne ke liye <code>ILIKE</code> lo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "The same query with default names and snake_case",
            hi: "एक ही query, default names और snake_case के साथ",
            hg: "Ek hi query, default names aur snake_case ke saath"
          },
          src: "using Microsoft.EntityFrameworkCore;\n\nusing var plain = new CrmContext(Build(snakeCase: false));\nusing var snake = new CrmContext(Build(snakeCase: true));\n\nConsole.WriteLine(\"Default names:\");\nConsole.WriteLine(plain.Tickets.Where(t => t.Status == \"Open\").Select(t => t.Issue).ToQueryString());\nConsole.WriteLine(\"snake_case names:\");\nConsole.WriteLine(snake.Tickets.Where(t => t.Status == \"Open\").Select(t => t.Issue).ToQueryString());\nConsole.WriteLine(\"Case-insensitive search:\");\nConsole.WriteLine(snake.Tickets.Where(t => EF.Functions.ILike(t.Issue, \"%bill%\")).Select(t => t.Id).ToQueryString());\n\nstatic DbContextOptions<CrmContext> Build(bool snakeCase)\n{\n    // ToQueryString only translates LINQ to SQL: it never opens this connection.\n    var builder = new DbContextOptionsBuilder<CrmContext>().UseNpgsql(\"Host=localhost;Database=crm\");\n    if (snakeCase) builder.UseSnakeCaseNamingConvention();\n    return builder.Options;\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          packages: [
            "Npgsql.EntityFrameworkCore.PostgreSQL",
            "EFCore.NamingConventions"
          ],
          check: "run",
          expected: "Default names:\nSELECT t.\"Issue\"\nFROM \"Tickets\" AS t\nWHERE t.\"Status\" = 'Open'\nsnake_case names:\nSELECT t.issue\nFROM tickets AS t\nWHERE t.status = 'Open'\nCase-insensitive search:\nSELECT t.id\nFROM tickets AS t\nWHERE t.issue ILIKE '%bill%'"
        }
      ]
    },
    {
      id: "jsonb-column",
      depth: "short",
      title: {
        en: "JSONB: flexible extras in one column",
        hi: "JSONB: एक column में लचीला extra data",
        hg: "JSONB: ek column mein lachila extra data"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 2 mapped the names and the search. Now a ticket gets an <code>Extras</code> part (channel, tags) that differs from ticket to ticket, and Postgres has a column type for it: <code>jsonb</code>. EF Core maps it from the same <code>SupportTicket</code> class.",
          hi: "पाठ 2 में names और search map हुए। अब ticket में एक <code>Extras</code> हिस्सा जुड़ता है (channel, tags) जो हर ticket में अलग होता है, और Postgres में इसके लिए column type है: <code>jsonb</code>। EF Core इसे उसी <code>SupportTicket</code> class से map करता है।",
          hg: "Lesson 2 mein names aur search map hue. Ab ticket mein ek <code>Extras</code> hissa judta hai (channel, tags) jo har ticket mein alag hota hai, aur Postgres mein iske liye column type hai: <code>jsonb</code>. EF Core ise usi <code>SupportTicket</code> class se map karta hai."
        },
        what: {
          en: "<p><b>jsonb</b> stores a JSON document in a parsed, binary form in one column. You read inside it with operators: <code>-&gt;</code> gives jsonb, <code>-&gt;&gt;</code> gives text, <code>@&gt;</code> means \"contains\".</p><p>In EF Core, <code>OwnsOne(..., x =&gt; x.ToJson())</code> maps a class to a <code>jsonb</code> column, and LINQ on its properties becomes <code>-&gt;&gt;</code> in SQL.</p>",
          hi: "<p><b>jsonb</b> एक column में JSON document को parsed, binary रूप में रखता है। अंदर की चीज़ें operators से पढ़ते हैं: <code>-&gt;</code> jsonb देता है, <code>-&gt;&gt;</code> text देता है, <code>@&gt;</code> का मतलब \"contains\" (शामिल है)।</p><p>EF Core में <code>OwnsOne(..., x =&gt; x.ToJson())</code> एक class को <code>jsonb</code> column से map करता है, और उसकी properties पर LINQ, SQL में <code>-&gt;&gt;</code> बन जाता है।</p>",
          hg: "<p><b>jsonb</b> ek column mein JSON document ko parsed, binary roop mein rakhta hai. Andar ki cheezein operators se padhte hain: <code>-&gt;</code> jsonb deta hai, <code>-&gt;&gt;</code> text deta hai, <code>@&gt;</code> ka matlab \"contains\" (shamil hai).</p><p>EF Core mein <code>OwnsOne(..., x =&gt; x.ToJson())</code> ek class ko <code>jsonb</code> column se map karta hai, aur uski properties par LINQ, SQL mein <code>-&gt;&gt;</code> ban jaata hai.</p>"
        },
        why: {
          en: "<p>Extra details such as the channel, device info or tags change often and are mostly read together. A jsonb column avoids thirty nullable columns and a migration for every new detail, and you can still filter and index it.</p>",
          hi: "<p>Channel, device info या tags जैसी extra बातें अक्सर बदलती हैं और ज़्यादातर साथ ही पढ़ी जाती हैं। jsonb column से तीस nullable columns और हर नई बात के लिए migration बच जाते हैं, और फिर भी तुम उस पर filter और index लगा सकते हो।</p>",
          hg: "<p>Channel, device info ya tags jaisi extra baatein aksar badalti hain aur zyadatar saath hi padhi jaati hain. jsonb column se tees nullable columns aur har nayi baat ke liye migration bach jaate hain, aur phir bhi tum us par filter aur index laga sakte ho.</p>"
        },
        analogy: {
          en: "<p>A school bag with a main compartment and a pencil pouch. Fixed columns are the main compartment: the same items every day, easy to find. The jsonb column is the pouch for \"extra stuff that differs per student\".</p>",
          hi: "<p>School bag जिसमें बड़ा खाना और पेंसिल पाउच है। Fixed columns बड़ा खाना हैं: रोज़ वही चीज़ें, आसानी से मिलती हैं। jsonb column पाउच है, \"हर बच्चे की अलग-अलग extra चीज़ों\" के लिए।</p>",
          hg: "<p>School bag jisme bada khaana aur pencil pouch hai. Fixed columns bada khaana hain: roz wahi cheezein, aasaani se milti hain. jsonb column pouch hai, \"har bachche ki alag-alag extra cheezon\" ke liye.</p>"
        },
        focus: {
          caption: {
            en: "PostgreSQL only: the jsonb operators",
            hi: "सिर्फ़ PostgreSQL: jsonb operators",
            hg: "Sirf PostgreSQL: jsonb operators"
          },
          lang: "sql",
          check: "none",
          src: "-- ->> returns text, @> means \"contains\"\nSELECT ticket_id, extras ->> 'Channel' AS channel\nFROM tickets\nWHERE extras @> '{\"Tags\": [\"vip\"]}';"
        },
        lines: [
          {
            code: "var extras = new TicketExtras { Channel = \"whatsapp\", Tags = [\"vip\", \"escalated\"] };",
            note: {
              en: "A normal C# object. The extras have a channel and a list of tags.",
              hi: "एक साधारण C# object। Extras में channel और tags की list है।",
              hg: "Ek saadharan C# object. Extras mein channel aur tags ki list hai."
            }
          },
          {
            code: "Console.WriteLine(JsonSerializer.Serialize(extras));",
            note: {
              en: "Prints the JSON document that goes into the column: <code>{\"Channel\":\"whatsapp\",\"Tags\":[\"vip\",\"escalated\"]}</code>.",
              hi: "वह JSON document print होता है जो column में जाता है: <code>{\"Channel\":\"whatsapp\",\"Tags\":[\"vip\",\"escalated\"]}</code>।",
              hg: "Wo JSON document print hota hai jo column mein jaata hai: <code>{\"Channel\":\"whatsapp\",\"Tags\":[\"vip\",\"escalated\"]}</code>."
            }
          },
          {
            code: "modelBuilder.Entity<SupportTicket>().OwnsOne(t => t.Extras, x => x.ToJson());",
            note: {
              en: "The mapping. <code>ToJson()</code> says: store this owned class as one JSON column, not as separate columns.",
              hi: "यही mapping है। <code>ToJson()</code> कहता है: इस owned class को अलग columns में नहीं, एक JSON column में रखो।",
              hg: "Yahi mapping hai. <code>ToJson()</code> kehta hai: is owned class ko alag columns mein nahi, ek JSON column mein rakho."
            }
          },
          {
            code: "Console.WriteLine(script.Single(l => l.Contains(\"\\\"Extras\\\"\")).Trim());",
            note: {
              en: "Reads the generated <code>CREATE TABLE</code> script (no database needed) and prints the column line: <code>jsonb</code>.",
              hi: "Generate हुई <code>CREATE TABLE</code> script पढ़ता है (database की ज़रूरत नहीं) और column की line print करता है: <code>jsonb</code>।",
              hg: "Generate hui <code>CREATE TABLE</code> script padhta hai (database ki zaroorat nahi) aur column ki line print karta hai: <code>jsonb</code>."
            }
          },
          {
            code: "Console.WriteLine(db.Tickets.Where(t => t.Extras.Channel == \"whatsapp\").Select(t => t.Id).ToQueryString());",
            note: {
              en: "A normal LINQ filter on a JSON property. The SQL uses <code>-&gt;&gt;</code> to take the text out of the document.",
              hi: "JSON property पर साधारण LINQ filter। SQL में <code>-&gt;&gt;</code> document से text निकालता है।",
              hg: "JSON property par saadharan LINQ filter. SQL mein <code>-&gt;&gt;</code> document se text nikaalta hai."
            }
          },
          {
            code: "public List<string> Tags { get; set; } = [];",
            note: {
              en: "A list inside the JSON document becomes a JSON array. No extra table, no join.",
              hi: "JSON document के अंदर की list, JSON array बन जाती है। कोई extra table नहीं, कोई join नहीं।",
              hg: "JSON document ke andar ki list, JSON array ban jaati hai. Koi extra table nahi, koi join nahi."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Putting the whole ticket into one jsonb blob. Keep fields you filter, join or constrain often (status, priority, customer id) as real columns.</li><li>Filtering on a JSON field all day with no index. Lesson 4 shows the GIN index for it.</li><li>Using <code>json</code> instead of <code>jsonb</code>. <code>json</code> keeps the exact text and gets no GIN index; <code>jsonb</code> does not keep key order and collapses duplicate keys.</li></ul>",
          hi: "<ul><li>पूरा ticket एक jsonb blob में डाल देना। जिन fields पर बार-बार filter, join या constraint लगता है (status, priority, customer id), उन्हें असली columns रखो।</li><li>किसी JSON field पर दिन भर filter करना, बिना index के। पाठ 4 में इसके लिए GIN index है।</li><li><code>jsonb</code> की जगह <code>json</code> लेना। <code>json</code> जैसा text है वैसा रखता है और उस पर GIN index नहीं लगता; <code>jsonb</code> keys का क्रम नहीं रखता और दोहराई हुई keys को एक कर देता है।</li></ul>",
          hg: "<ul><li>Poora ticket ek jsonb blob mein daal dena. Jin fields par baar-baar filter, join ya constraint lagta hai (status, priority, customer id), unhe asli columns rakho.</li><li>Kisi JSON field par din bhar filter karna, bina index ke. Lesson 4 mein iske liye GIN index hai.</li><li><code>jsonb</code> ki jagah <code>json</code> lena. <code>json</code> jaisa text hai waisa rakhta hai aur us par GIN index nahi lagta; <code>jsonb</code> keys ka kram nahi rakhta aur dohrayi hui keys ko ek kar deta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use jsonb for sparse, changing details that you mostly read as a whole (ticket channel, tags, device info). Use real columns for anything you filter, join or constrain often. On EF Core 10, complex types with <code>ComplexProperty(...).ToJson()</code> are the newer shape; check the Npgsql JSON docs for your versions.</p>",
          hi: "<p>jsonb उन बिखरी, बदलती बातों के लिए लो जिन्हें ज़्यादातर पूरा पढ़ते हैं (ticket channel, tags, device info)। जिन पर बार-बार filter, join या constraint लगता है, उनके लिए असली columns लो। EF Core 10 में <code>ComplexProperty(...).ToJson()</code> वाले complex types नया तरीक़ा हैं; अपने versions के लिए Npgsql JSON docs देखो।</p>",
          hg: "<p>jsonb un bikhri, badalti baaton ke liye lo jinhe zyadatar poora padhte hain (ticket channel, tags, device info). Jin par baar-baar filter, join ya constraint lagta hai, unke liye asli columns lo. EF Core 10 mein <code>ComplexProperty(...).ToJson()</code> wale complex types naya tareeka hain; apne versions ke liye Npgsql JSON docs dekho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Print the SQL that selects the <code>Issue</code> of tickets whose <code>Extras.Channel</code> is <code>sms</code>.</p>",
            hi: "<p>वह SQL print करो जो उन tickets का <code>Issue</code> चुने जिनका <code>Extras.Channel</code> <code>sms</code> है।</p>",
            hg: "<p>Wo SQL print karo jo un tickets ka <code>Issue</code> chune jinka <code>Extras.Channel</code> <code>sms</code> hai.</p>"
          },
          hint: {
            en: "<p>Copy the last <code>Console.WriteLine</code>, change <code>\"whatsapp\"</code> to <code>\"sms\"</code> and select <code>t.Issue</code>.</p>",
            hi: "<p>आख़िरी <code>Console.WriteLine</code> copy करो, <code>\"whatsapp\"</code> को <code>\"sms\"</code> करो और <code>t.Issue</code> select करो।</p>",
            hg: "<p>Aakhiri <code>Console.WriteLine</code> copy karo, <code>\"whatsapp\"</code> ko <code>\"sms\"</code> karo aur <code>t.Issue</code> select karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: filter on the SMS channel",
              hi: "हल: SMS channel पर filter",
              hg: "Solution: SMS channel par filter"
            },
            check: "run",
            expected: "SELECT t.\"Issue\"\nFROM \"Tickets\" AS t\nWHERE (t.\"Extras\" ->> 'Channel') = 'sms'",
            packages: [
              "Npgsql.EntityFrameworkCore.PostgreSQL"
            ],
            src: "using Microsoft.EntityFrameworkCore;\n\nvar options = new DbContextOptionsBuilder<CrmContext>().UseNpgsql(\"Host=localhost;Database=crm\").Options;\nusing var db = new CrmContext(options);\nConsole.WriteLine(db.Tickets.Where(t => t.Extras.Channel == \"sms\").Select(t => t.Issue).ToQueryString());\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public TicketExtras Extras { get; set; } = new();\n}\n\npublic class TicketExtras\n{\n    public string Channel { get; set; } = \"\";\n    public List<string> Tags { get; set; } = [];\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder) =>\n        modelBuilder.Entity<SupportTicket>().OwnsOne(t => t.Extras, x => x.ToJson());   // one jsonb column\n}"
          }
        },
        quiz: {
          q: {
            en: "In a Postgres query, what does <code>extras @&gt; '{\"Tags\": [\"vip\"]}'</code> check?",
            hi: "Postgres query में <code>extras @&gt; '{\"Tags\": [\"vip\"]}'</code> क्या जाँचता है?",
            hg: "Postgres query mein <code>extras @&gt; '{\"Tags\": [\"vip\"]}'</code> kya jaanchta hai?"
          },
          options: [
            {
              en: "That the document <b>contains</b> the tag vip",
              hi: "कि document में vip tag <b>शामिल</b> है",
              hg: "Ki document mein vip tag <b>shamil</b> hai"
            },
            {
              en: "That the whole document is equal to that text",
              hi: "कि पूरा document उस text के बराबर है",
              hg: "Ki poora document us text ke barabar hai"
            },
            {
              en: "That the key Tags exists, whatever its value",
              hi: "कि key Tags मौजूद है, value चाहे जो हो",
              hg: "Ki key Tags maujood hai, value chahe jo ho"
            },
            {
              en: "That the document is valid JSON",
              hi: "कि document सही JSON है",
              hg: "Ki document sahi JSON hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p><code>@&gt;</code> is the \"contains\" operator. A document with Tags <code>[\"vip\",\"escalated\"]</code> matches, because it contains the vip tag. It is not an equality check, and key-exists is a different operator (<code>?</code>).</p>",
            hi: "<p><code>@&gt;</code> \"contains\" operator है। जिस document में Tags <code>[\"vip\",\"escalated\"]</code> हैं वह match होता है, क्योंकि उसमें vip tag शामिल है। यह बराबरी की जाँच नहीं है, और key-exists के लिए अलग operator (<code>?</code>) है।</p>",
            hg: "<p><code>@&gt;</code> \"contains\" operator hai. Jis document mein Tags <code>[\"vip\",\"escalated\"]</code> hain woh match hota hai, kyunki usme vip tag shamil hai. Ye barabari ki jaanch nahi hai, aur key-exists ke liye alag operator (<code>?</code>) hai.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>jsonb</code> = one column holding a JSON document you can query.</li><li>EF Core: <code>OwnsOne(..., x =&gt; x.ToJson())</code>; LINQ becomes <code>-&gt;&gt;</code>.</li><li>Keep often-filtered fields as real columns.</li></ul>",
          hi: "<ul><li><code>jsonb</code> = एक column जिसमें JSON document है और जिस पर query चलती है।</li><li>EF Core: <code>OwnsOne(..., x =&gt; x.ToJson())</code>; LINQ का <code>-&gt;&gt;</code> बनता है।</li><li>बार-बार filter होने वाले fields को असली columns रखो।</li></ul>",
          hg: "<ul><li><code>jsonb</code> = ek column jisme JSON document hai aur jis par query chalti hai.</li><li>EF Core: <code>OwnsOne(..., x =&gt; x.ToJson())</code>; LINQ ka <code>-&gt;&gt;</code> banta hai.</li><li>Baar-baar filter hone wale fields ko asli columns rakho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A ticket with a jsonb Extras column",
            hi: "jsonb Extras column वाला ticket",
            hg: "jsonb Extras column wala ticket"
          },
          src: "using System.Text.Json;\nusing Microsoft.EntityFrameworkCore;\n\nvar extras = new TicketExtras { Channel = \"whatsapp\", Tags = [\"vip\", \"escalated\"] };\nConsole.WriteLine(JsonSerializer.Serialize(extras));      // the document stored in the jsonb column\n\nvar options = new DbContextOptionsBuilder<CrmContext>().UseNpgsql(\"Host=localhost;Database=crm\").Options;\nusing var db = new CrmContext(options);\n\nvar script = db.Database.GenerateCreateScript().Split('\\n');\nConsole.WriteLine(script.Single(l => l.Contains(\"\\\"Extras\\\"\")).Trim());\nConsole.WriteLine(db.Tickets.Where(t => t.Extras.Channel == \"whatsapp\").Select(t => t.Id).ToQueryString());\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public TicketExtras Extras { get; set; } = new();\n}\n\npublic class TicketExtras\n{\n    public string Channel { get; set; } = \"\";\n    public List<string> Tags { get; set; } = [];\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder) =>\n        modelBuilder.Entity<SupportTicket>().OwnsOne(t => t.Extras, x => x.ToJson());   // one jsonb column\n}",
          packages: [
            "Npgsql.EntityFrameworkCore.PostgreSQL"
          ],
          check: "run",
          expected: "{\"Channel\":\"whatsapp\",\"Tags\":[\"vip\",\"escalated\"]}\n\"Extras\" jsonb NOT NULL,\nSELECT t.\"Id\"\nFROM \"Tickets\" AS t\nWHERE (t.\"Extras\" ->> 'Channel') = 'whatsapp'"
        }
      ]
    },
    {
      id: "index-kinds",
      depth: "short",
      title: {
        en: "Index kinds: partial, covering, GIN, BRIN",
        hi: "Index की क़िस्में: partial, covering, GIN, BRIN",
        hg: "Index ki qismein: partial, covering, GIN, BRIN"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 said a JSON or array field needs the right index. Day 18 gave you SQL Server indexes (filtered index, <code>INCLUDE</code>). Postgres has the same ideas and adds two more kinds, GIN and BRIN, and EF Core can declare all of them on <code>SupportTicket</code>.",
          hi: "पाठ 3 में कहा था कि JSON या array field को सही index चाहिए। Day 18 में SQL Server के indexes थे (filtered index, <code>INCLUDE</code>)। Postgres में वही बातें हैं और दो नई क़िस्में जुड़ती हैं, GIN और BRIN, और EF Core इन सबको <code>SupportTicket</code> पर declare कर सकता है।",
          hg: "Lesson 3 mein kaha tha ki JSON ya array field ko sahi index chahiye. Day 18 mein SQL Server ke indexes the (filtered index, <code>INCLUDE</code>). Postgres mein wahi baatein hain aur do nayi qismein judti hain, GIN aur BRIN, aur EF Core in sabko <code>SupportTicket</code> par declare kar sakta hai."
        },
        what: {
          en: "<p>The default index is a <b>B-tree</b>. Postgres adds more kinds:</p><ul><li><b>Partial</b> (<code>WHERE ...</code>): indexes only some rows, like the open tickets. Same idea as a SQL Server filtered index.</li><li><b>Covering</b> (<code>INCLUDE</code>): extra columns stored in the index, so the query need not visit the table.</li><li><b>GIN</b>: many values inside one cell, such as an array or a jsonb document.</li><li><b>BRIN</b>: a tiny index for a huge table whose values follow insert order, like <code>CreatedUtc</code>.</li></ul>",
          hi: "<p>Default index <b>B-tree</b> है। Postgres में और क़िस्में हैं:</p><ul><li><b>Partial</b> (<code>WHERE ...</code>): सिर्फ़ कुछ rows का index, जैसे open tickets। SQL Server के filtered index जैसा।</li><li><b>Covering</b> (<code>INCLUDE</code>): extra columns index में ही रहते हैं, ताकि query को table तक जाना न पड़े।</li><li><b>GIN</b>: एक cell में कई values, जैसे array या jsonb document।</li><li><b>BRIN</b>: बहुत बड़ी table के लिए छोटा-सा index, जिसकी values insert के क्रम में बढ़ती हैं, जैसे <code>CreatedUtc</code>।</li></ul>",
          hg: "<p>Default index <b>B-tree</b> hai. Postgres mein aur qismein hain:</p><ul><li><b>Partial</b> (<code>WHERE ...</code>): sirf kuch rows ka index, jaise open tickets. SQL Server ke filtered index jaisa.</li><li><b>Covering</b> (<code>INCLUDE</code>): extra columns index mein hi rehte hain, taaki query ko table tak jaana na pade.</li><li><b>GIN</b>: ek cell mein kai values, jaise array ya jsonb document.</li><li><b>BRIN</b>: bahut badi table ke liye chhota-sa index, jiski values insert ke kram mein badhti hain, jaise <code>CreatedUtc</code>.</li></ul>"
        },
        why: {
          en: "<p>The right index makes the \"open tickets by priority\" queue fast and small. The wrong one only slows every write and takes disk space.</p>",
          hi: "<p>सही index \"priority के हिसाब से open tickets\" वाली queue को तेज़ और छोटा रखता है। ग़लत index सिर्फ़ हर write धीमा करता है और disk घेरता है।</p>",
          hg: "<p>Sahi index \"priority ke hisaab se open tickets\" wali queue ko tez aur chhota rakhta hai. Galat index sirf har write dheema karta hai aur disk gherta hai.</p>"
        },
        analogy: {
          en: "<p>A library. The main catalogue is the B-tree. A register of \"only issued books\" is a partial index. The keyword list at the back of a book is GIN. The shelf labels \"Jan to Mar\", \"Apr to Jun\" are BRIN: tiny, and they work because books arrive in date order.</p>",
          hi: "<p>एक library। मुख्य catalogue B-tree है। \"सिर्फ़ issue हुई किताबों\" का register partial index है। किताब के पीछे की keyword सूची GIN है। Shelf के लेबल \"जनवरी से मार्च\", \"अप्रैल से जून\" BRIN हैं: छोटे, और काम इसलिए करते हैं कि किताबें तारीख़ के क्रम में आती हैं।</p>",
          hg: "<p>Ek library. Mukhya catalogue B-tree hai. \"Sirf issue hui kitaabon\" ka register partial index hai. Kitaab ke peeche ki keyword soochi GIN hai. Shelf ke label \"January se March\", \"April se June\" BRIN hain: chhote, aur kaam isliye karte hain ki kitaabein taareekh ke kram mein aati hain.</p>"
        },
        focus: {
          caption: {
            en: "PostgreSQL only: an expression index (EF Core cannot declare it, use a migration)",
            hi: "सिर्फ़ PostgreSQL: expression index (EF Core इसे declare नहीं कर सकता, migration में लिखो)",
            hg: "Sirf PostgreSQL: expression index (EF Core ise declare nahi kar sakta, migration mein likho)"
          },
          lang: "sql",
          check: "none",
          src: "CREATE UNIQUE INDEX ux_customers_email ON customers (lower(email));\n\n-- the query must use the same expression, or the index is not used\nSELECT * FROM customers WHERE lower(email) = lower('Asha@Example.com');"
        },
        lines: [
          {
            code: ".HasFilter(\"\\\"Status\\\" <> 'Closed'\")",
            note: {
              en: "<code>HasFilter</code> takes raw SQL, so the quoted <code>\"Status\"</code> must match the column name. This makes the index partial: closed tickets are not in it.",
              hi: "<code>HasFilter</code> raw SQL लेता है, इसलिए quoted <code>\"Status\"</code> column के name से मेल खाना चाहिए। इससे index partial बनता है: closed tickets उसमें नहीं हैं।",
              hg: "<code>HasFilter</code> raw SQL leta hai, isliye quoted <code>\"Status\"</code> column ke name se mel khana chahiye. Isse index partial banta hai: closed tickets usme nahi hain."
            }
          },
          {
            code: ".IncludeProperties(t => t.Issue);",
            note: {
              en: "The covering part: <code>Issue</code> is stored in the index, so the queue can be listed without touching the table.",
              hi: "Covering वाला हिस्सा: <code>Issue</code> index में रखा जाता है, इसलिए queue को table छुए बिना दिखाया जा सकता है।",
              hg: "Covering wala hissa: <code>Issue</code> index mein rakha jaata hai, isliye queue ko table chhue bina dikhaya ja sakta hai."
            }
          },
          {
            code: "e.HasIndex(t => t.Tags).HasDatabaseName(\"ix_tags\").HasMethod(\"gin\");",
            note: {
              en: "<code>HasMethod(\"gin\")</code> picks the GIN kind. <code>Tags</code> is a <code>text[]</code> array column, and GIN serves \"contains\" searches on it.",
              hi: "<code>HasMethod(\"gin\")</code> GIN क़िस्म चुनता है। <code>Tags</code> एक <code>text[]</code> array column है, और GIN उस पर \"contains\" खोज तेज़ करता है।",
              hg: "<code>HasMethod(\"gin\")</code> GIN qism chunta hai. <code>Tags</code> ek <code>text[]</code> array column hai, aur GIN us par \"contains\" khoj tez karta hai."
            }
          },
          {
            code: "e.HasIndex(t => t.CreatedUtc).HasDatabaseName(\"ix_created_brin\").HasMethod(\"brin\");",
            note: {
              en: "BRIN stores only a min/max summary per block of pages. It is tiny, and it works because new tickets arrive in time order.",
              hi: "BRIN हर block के लिए सिर्फ़ min/max का छोटा summary रखता है। यह बहुत छोटा है, और इसलिए चलता है कि नए tickets समय के क्रम में आते हैं।",
              hg: "BRIN har block ke liye sirf min/max ka chhota summary rakhta hai. Ye bahut chhota hai, aur isliye chalta hai ki naye tickets samay ke kram mein aate hain."
            }
          },
          {
            code: "if (line.StartsWith(\"CREATE INDEX\"))",
            note: {
              en: "The program reads the generated SQL script (no database needed) and keeps only the index lines.",
              hi: "Program generate हुई SQL script पढ़ता है (database की ज़रूरत नहीं) और सिर्फ़ index वाली lines रखता है।",
              hg: "Program generate hui SQL script padhta hai (database ki zaroorat nahi) aur sirf index wali lines rakhta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Adding a GIN index \"just in case\". It slows every write and takes space; add it for a query you really run.</li><li>Using BRIN on a column that is not in physical order (for example a random id). BRIN then skips nothing.</li><li>Writing <code>WHERE email = ...</code> when the index is on <code>lower(email)</code>. The query must use the same expression.</li></ul>",
          hi: "<ul><li>\"क्या पता काम आए\" सोचकर GIN index लगाना। यह हर write धीमा करता है और जगह घेरता है; वह query हो जो सच में चलती है, तब लगाओ।</li><li>BRIN ऐसे column पर लगाना जो physical क्रम में नहीं है (जैसे random id)। तब BRIN कुछ skip नहीं कर पाता।</li><li>Index <code>lower(email)</code> पर हो और query में <code>WHERE email = ...</code> लिखना। Query में वही expression चाहिए।</li></ul>",
          hg: "<ul><li>\"Kya pata kaam aaye\" sochkar GIN index lagana. Ye har write dheema karta hai aur jagah gherta hai; wo query ho jo sach mein chalti hai, tab lagao.</li><li>BRIN aise column par lagana jo physical kram mein nahi hai (jaise random id). Tab BRIN kuch skip nahi kar paata.</li><li>Index <code>lower(email)</code> par ho aur query mein <code>WHERE email = ...</code> likhna. Query mein wahi expression chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>Partial index for a queue you read often (open tickets). Covering index when one hot query needs only a few columns. GIN for arrays and jsonb. BRIN for a huge, append-only table such as an event log. Check the plan before and after (Day 18).</p>",
          hi: "<p>जिस queue को बार-बार पढ़ते हो (open tickets) उसके लिए partial index। जब एक ज़्यादा चलने वाली query को सिर्फ़ कुछ columns चाहिए तो covering index। Arrays और jsonb के लिए GIN। बहुत बड़ी, सिर्फ़ बढ़ने वाली table (जैसे event log) के लिए BRIN। पहले और बाद में plan देखो (Day 18)।</p>",
          hg: "<p>Jis queue ko baar-baar padhte ho (open tickets) uske liye partial index. Jab ek zyada chalne wali query ko sirf kuch columns chahiye to covering index. Arrays aur jsonb ke liye GIN. Bahut badi, sirf badhne wali table (jaise event log) ke liye BRIN. Pehle aur baad mein plan dekho (Day 18).</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <b>partial index</b> named <code>ix_open_agent</code> on <code>Agent</code> for tickets whose status is <code>Open</code>, and print its <code>CREATE INDEX</code> line.</p>",
            hi: "<p><code>Agent</code> पर <code>ix_open_agent</code> नाम का <b>partial index</b> जोड़ो, उन tickets के लिए जिनका status <code>Open</code> है, और उसकी <code>CREATE INDEX</code> line print करो।</p>",
            hg: "<p><code>Agent</code> par <code>ix_open_agent</code> naam ka <b>partial index</b> jodo, un tickets ke liye jinka status <code>Open</code> hai, aur uski <code>CREATE INDEX</code> line print karo.</p>"
          },
          hint: {
            en: "<p>Use <code>HasIndex(t =&gt; t.Agent)</code>, <code>HasDatabaseName(\"ix_open_agent\")</code> and <code>HasFilter(\"\\\"Status\\\" = 'Open'\")</code>.</p>",
            hi: "<p><code>HasIndex(t =&gt; t.Agent)</code>, <code>HasDatabaseName(\"ix_open_agent\")</code> और <code>HasFilter(\"\\\"Status\\\" = 'Open'\")</code> लगाओ।</p>",
            hg: "<p><code>HasIndex(t =&gt; t.Agent)</code>, <code>HasDatabaseName(\"ix_open_agent\")</code> aur <code>HasFilter(\"\\\"Status\\\" = 'Open'\")</code> lagao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: partial index on open tickets",
              hi: "हल: open tickets पर partial index",
              hg: "Solution: open tickets par partial index"
            },
            check: "run",
            expected: "CREATE INDEX ix_open_agent ON \"Tickets\" (\"Agent\") WHERE \"Status\" = 'Open';",
            packages: [
              "Npgsql.EntityFrameworkCore.PostgreSQL"
            ],
            src: "using Microsoft.EntityFrameworkCore;\n\nvar options = new DbContextOptionsBuilder<CrmContext>().UseNpgsql(\"Host=localhost;Database=crm\").Options;\nusing var db = new CrmContext(options);\n\nforeach (var line in db.Database.GenerateCreateScript().Split('\\n'))\n    if (line.StartsWith(\"CREATE INDEX\"))\n        Console.WriteLine(line.Trim());\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Agent { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder) =>\n        modelBuilder.Entity<SupportTicket>()\n            .HasIndex(t => t.Agent).HasDatabaseName(\"ix_open_agent\")\n            .HasFilter(\"\\\"Status\\\" = 'Open'\");\n}"
          }
        },
        quiz: {
          q: {
            en: "The <code>events</code> table has hundreds of millions of rows, only grows, and you filter by time range. Which index is tiny and fits?",
            hi: "<code>events</code> table में करोड़ों rows हैं, वह सिर्फ़ बढ़ती है, और तुम समय की range से filter करते हो। कौन-सा index छोटा है और फिट बैठता है?",
            hg: "<code>events</code> table mein karodon rows hain, woh sirf badhti hai, aur tum samay ki range se filter karte ho. Kaunsa index chhota hai aur fit baithta hai?"
          },
          options: [
            {
              en: "A partial index with <code>WHERE false</code>",
              hi: "<code>WHERE false</code> वाला partial index",
              hg: "<code>WHERE false</code> wala partial index"
            },
            {
              en: "GIN on the timestamp column",
              hi: "timestamp column पर GIN",
              hg: "timestamp column par GIN"
            },
            {
              en: "A unique B-tree on every column",
              hi: "हर column पर unique B-tree",
              hg: "Har column par unique B-tree"
            },
            {
              en: "BRIN on the timestamp column",
              hi: "timestamp column पर BRIN",
              hg: "timestamp column par BRIN"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>BRIN keeps one small summary per block of pages, and rows arrive in time order, so whole blocks can be skipped. GIN is for many values inside one cell. A unique B-tree on every column would be huge and slow to write.</p>",
            hi: "<p>BRIN हर block के लिए एक छोटा summary रखता है, और rows समय के क्रम में आती हैं, इसलिए पूरे blocks skip हो जाते हैं। GIN एक cell में कई values के लिए है। हर column पर unique B-tree बहुत बड़ा और write में धीमा होगा।</p>",
            hg: "<p>BRIN har block ke liye ek chhota summary rakhta hai, aur rows samay ke kram mein aati hain, isliye poore blocks skip ho jaate hain. GIN ek cell mein kai values ke liye hai. Har column par unique B-tree bahut bada aur write mein dheema hoga.</p>"
          }
        },
        recap: {
          en: "<ul><li>Partial = fewer rows; covering = <code>INCLUDE</code> columns; GIN = many values per cell; BRIN = tiny, for ordered huge tables.</li><li>EF Core: <code>HasFilter</code>, <code>IncludeProperties</code>, <code>HasMethod</code>.</li><li>An expression index needs raw SQL, and the query must use the same expression.</li></ul>",
          hi: "<ul><li>Partial = कम rows; covering = <code>INCLUDE</code> columns; GIN = एक cell में कई values; BRIN = छोटा, क्रम में बढ़ती बड़ी tables के लिए।</li><li>EF Core: <code>HasFilter</code>, <code>IncludeProperties</code>, <code>HasMethod</code>।</li><li>Expression index के लिए raw SQL चाहिए, और query में वही expression होना चाहिए।</li></ul>",
          hg: "<ul><li>Partial = kam rows; covering = <code>INCLUDE</code> columns; GIN = ek cell mein kai values; BRIN = chhota, kram mein badhti badi tables ke liye.</li><li>EF Core: <code>HasFilter</code>, <code>IncludeProperties</code>, <code>HasMethod</code>.</li><li>Expression index ke liye raw SQL chahiye, aur query mein wahi expression hona chahiye.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Three Postgres index kinds declared in EF Core",
            hi: "EF Core में declare की गई Postgres index की तीन क़िस्में",
            hg: "EF Core mein declare ki gayi Postgres index ki teen qismein"
          },
          src: "using Microsoft.EntityFrameworkCore;\n\nvar options = new DbContextOptionsBuilder<CrmContext>().UseNpgsql(\"Host=localhost;Database=crm\").Options;\nusing var db = new CrmContext(options);\n\nforeach (var line in db.Database.GenerateCreateScript().Split('\\n'))\n    if (line.StartsWith(\"CREATE INDEX\"))\n        Console.WriteLine(line.Trim());\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Issue { get; set; } = \"\";\n    public string Status { get; set; } = \"Open\";\n    public int Priority { get; set; }\n    public DateTime CreatedUtc { get; set; }\n    public List<string> Tags { get; set; } = [];\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder) =>\n        modelBuilder.Entity<SupportTicket>(e =>\n        {\n            e.HasIndex(t => t.Priority).HasDatabaseName(\"ix_open_by_priority\")\n                .HasFilter(\"\\\"Status\\\" <> 'Closed'\")        // partial: only the open queue\n                .IncludeProperties(t => t.Issue);           // covering: Issue is read from the index\n            e.HasIndex(t => t.Tags).HasDatabaseName(\"ix_tags\").HasMethod(\"gin\");   // text[] containment\n            e.HasIndex(t => t.CreatedUtc).HasDatabaseName(\"ix_created_brin\").HasMethod(\"brin\");   // huge append-only table\n        });\n}",
          packages: [
            "Npgsql.EntityFrameworkCore.PostgreSQL"
          ],
          check: "run",
          expected: "CREATE INDEX ix_created_brin ON \"Tickets\" USING brin (\"CreatedUtc\");\nCREATE INDEX ix_open_by_priority ON \"Tickets\" (\"Priority\") INCLUDE (\"Issue\") WHERE \"Status\" <> 'Closed';\nCREATE INDEX ix_tags ON \"Tickets\" USING gin (\"Tags\");"
        }
      ]
    },
    {
      id: "utc-timestamptz",
      depth: "short",
      title: {
        en: "Time: timestamptz accepts only UTC",
        hi: "Time: timestamptz सिर्फ़ UTC लेता है",
        hg: "Time: timestamptz sirf UTC leta hai"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 3 and 4 used a <code>CreatedUtc</code> column in an index. Now we look at what that column really is in Postgres (<code>timestamptz</code>) and the rule Npgsql enforces when <code>SupportTicket</code> writes a date.",
          hi: "पाठ 3 और 4 में index में <code>CreatedUtc</code> column इस्तेमाल हुआ था। अब देखते हैं कि Postgres में वह column असल में क्या है (<code>timestamptz</code>) और <code>SupportTicket</code> तारीख़ लिखता है तो Npgsql कौन-सा नियम लागू करता है।",
          hg: "Lessons 3 aur 4 mein index mein <code>CreatedUtc</code> column use hua tha. Ab dekhte hain ki Postgres mein woh column asal mein kya hai (<code>timestamptz</code>) aur <code>SupportTicket</code> taareekh likhta hai to Npgsql kaunsa niyam laagu karta hai."
        },
        what: {
          en: "<p><code>timestamptz</code> (\"timestamp with time zone\") stores one <b>instant in time</b>. Postgres keeps it in UTC internally and does not remember the zone you sent. It is the right type for \"when was the ticket created\".</p><p>Since Npgsql 6, a .NET <code>DateTime</code> can be written to <code>timestamptz</code> only when its <code>Kind</code> is <code>Utc</code>. Otherwise Npgsql throws. A <code>Local</code> or <code>Unspecified</code> value goes to <code>timestamp</code> (without time zone) instead.</p>",
          hi: "<p><code>timestamptz</code> (\"timestamp with time zone\") समय का एक <b>असली पल</b> रखता है। Postgres उसे अंदर UTC में रखता है और यह याद नहीं रखता कि तुमने कौन-सा zone भेजा था। \"ticket कब बना\" के लिए यही सही type है।</p><p>Npgsql 6 से, .NET <code>DateTime</code> को <code>timestamptz</code> में तभी लिख सकते हैं जब उसका <code>Kind</code> <code>Utc</code> हो। नहीं तो Npgsql exception फेंकता है। <code>Local</code> या <code>Unspecified</code> value इसके बजाय <code>timestamp</code> (बिना time zone) में जाती है।</p>",
          hg: "<p><code>timestamptz</code> (\"timestamp with time zone\") samay ka ek <b>asli pal</b> rakhta hai. Postgres use andar UTC mein rakhta hai aur ye yaad nahi rakhta ki tumne kaunsa zone bheja tha. \"Ticket kab bana\" ke liye yahi sahi type hai.</p><p>Npgsql 6 se, .NET <code>DateTime</code> ko <code>timestamptz</code> mein tabhi likh sakte hain jab uska <code>Kind</code> <code>Utc</code> ho. Nahi to Npgsql exception phenkta hai. <code>Local</code> ya <code>Unspecified</code> value iske bajaay <code>timestamp</code> (bina time zone) mein jaati hai.</p>"
        },
        why: {
          en: "<p>On SQL Server many teams wrote <code>DateTime.Now</code> into <code>datetime2</code> and nothing complained. On Postgres the same habit fails at run time. Better: the app always works in UTC and converts to IST only when it shows a time to an agent.</p>",
          hi: "<p>SQL Server में कई teams <code>DateTime.Now</code> को <code>datetime2</code> में लिखती थीं और किसी ने शिकायत नहीं की। Postgres में वही आदत run time पर फ़ेल होती है। बेहतर: app हमेशा UTC में काम करे और agent को समय दिखाते वक़्त ही IST में बदले।</p>",
          hg: "<p>SQL Server mein kai teams <code>DateTime.Now</code> ko <code>datetime2</code> mein likhti thin aur kisi ne shikayat nahi ki. Postgres mein wahi aadat run time par fail hoti hai. Behtar: app hamesha UTC mein kaam kare aur agent ko samay dikhate waqt hi IST mein badle.</p>"
        },
        analogy: {
          en: "<p>Think of a flight ticket booked abroad. The airline stores one clear moment (like GMT). Your phone then shows it as your local time. Nobody stores \"9:30\" without saying whose 9:30.</p>",
          hi: "<p>विदेश से बुक की गई flight ticket सोचो। Airline एक साफ़ पल (जैसे GMT) रखती है। तुम्हारा phone उसे तुम्हारे local time में दिखाता है। कोई \"9:30\" बिना यह बताए नहीं रखता कि किसके हिसाब से 9:30।</p>",
          hg: "<p>Videsh se book ki gayi flight ticket socho. Airline ek saaf pal (jaise GMT) rakhti hai. Tumhara phone use tumhare local time mein dikhata hai. Koi \"9:30\" bina bataye nahi rakhta ki kiske hisaab se 9:30.</p>"
        },
        focus: {
          caption: {
            en: "PostgreSQL only: show a stored instant in IST",
            hi: "सिर्फ़ PostgreSQL: रखे हुए पल को IST में दिखाओ",
            hg: "Sirf PostgreSQL: rakhe hue pal ko IST mein dikhao"
          },
          lang: "sql",
          check: "none",
          src: "-- created_utc is timestamptz; AT TIME ZONE shows it as a local clock time\nSELECT ticket_id, created_utc AT TIME ZONE 'Asia/Kolkata' AS created_ist\nFROM tickets;"
        },
        lines: [
          {
            code: "var ist = new DateTimeOffset(2026, 11, 7, 9, 30, 0, TimeSpan.FromHours(5.5));",
            note: {
              en: "An agent's time with its offset: 9:30 at +05:30 (IST). A <code>DateTimeOffset</code> knows its offset, so the instant is clear.",
              hi: "Agent का समय अपने offset के साथ: +05:30 (IST) पर 9:30। <code>DateTimeOffset</code> अपना offset जानता है, इसलिए पल साफ़ है।",
              hg: "Agent ka samay apne offset ke saath: +05:30 (IST) par 9:30. <code>DateTimeOffset</code> apna offset jaanta hai, isliye pal saaf hai."
            }
          },
          {
            code: "var ticket = new SupportTicket { Id = 501, CreatedUtc = Utc.Require(ist.UtcDateTime) };",
            note: {
              en: "<code>UtcDateTime</code> converts the instant to UTC (<code>Kind = Utc</code>). That is the value Npgsql accepts for <code>timestamptz</code>.",
              hi: "<code>UtcDateTime</code> पल को UTC में बदलता है (<code>Kind = Utc</code>)। यही value Npgsql <code>timestamptz</code> के लिए मंज़ूर करता है।",
              hg: "<code>UtcDateTime</code> pal ko UTC mein badalta hai (<code>Kind = Utc</code>). Yahi value Npgsql <code>timestamptz</code> ke liye manzoor karta hai."
            }
          },
          {
            code: "Console.WriteLine(ticket.CreatedUtc.ToString(\"yyyy-MM-dd HH:mm 'UTC'\", CultureInfo.InvariantCulture));",
            note: {
              en: "Prints <code>2026-11-07 04:00 UTC</code>: 9:30 IST is 04:00 UTC (5 hours 30 minutes earlier).",
              hi: "<code>2026-11-07 04:00 UTC</code> print होता है: 9:30 IST यानी 04:00 UTC (5 घंटे 30 मिनट पहले)।",
              hg: "<code>2026-11-07 04:00 UTC</code> print hota hai: 9:30 IST yaani 04:00 UTC (5 ghante 30 minute pehle)."
            }
          },
          {
            code: "public static DateTime Require(DateTime value) => value.Kind == DateTimeKind.Utc",
            note: {
              en: "Our own guard repeats Npgsql's rule, so a wrong value fails early, in your code, with a clear message.",
              hi: "हमारा अपना guard Npgsql का नियम दोहराता है, ताकि ग़लत value जल्दी, तुम्हारे code में, साफ़ message के साथ फ़ेल हो।",
              hg: "Hamara apna guard Npgsql ka niyam dohraata hai, taaki galat value jaldi, tumhare code mein, saaf message ke saath fail ho."
            }
          },
          {
            code: ": throw new ArgumentException(\"CreatedUtc must be a UTC DateTime. Convert before saving.\");",
            note: {
              en: "A <code>DateTime</code> with <code>Kind = Unspecified</code> (for example from <code>DateTime.Parse</code>) is rejected, because nobody knows its zone. Do not guess.",
              hi: "<code>Kind = Unspecified</code> वाला <code>DateTime</code> (जैसे <code>DateTime.Parse</code> से) reject हो जाता है, क्योंकि उसका zone कोई नहीं जानता। अंदाज़ा मत लगाओ।",
              hg: "<code>Kind = Unspecified</code> wala <code>DateTime</code> (jaise <code>DateTime.Parse</code> se) reject ho jaata hai, kyunki uska zone koi nahi jaanta. Andaaza mat lagao."
            }
          },
          {
            code: "Console.WriteLine(script.Single(l => l.Contains(\"\\\"CreatedUtc\\\"\")).Trim());",
            note: {
              en: "The generated script shows the column type EF Core picks for a <code>DateTime</code> with Npgsql: <code>timestamp with time zone</code>.",
              hi: "Generate हुई script दिखाती है कि Npgsql के साथ <code>DateTime</code> के लिए EF Core कौन-सा column type चुनता है: <code>timestamp with time zone</code>।",
              hg: "Generate hui script dikhati hai ki Npgsql ke saath <code>DateTime</code> ke liye EF Core kaunsa column type chunta hai: <code>timestamp with time zone</code>."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Saving <code>DateTime.Now</code>. Its <code>Kind</code> is <code>Local</code>, so Npgsql refuses it for <code>timestamptz</code>. Use <code>DateTime.UtcNow</code>.</li><li>Using <code>DateTime.Parse</code> and saving the result. The <code>Kind</code> is <code>Unspecified</code>. Parse into a <code>DateTimeOffset</code> instead.</li><li>Turning on <code>Npgsql.EnableLegacyTimestampBehavior</code> to make errors go away. It is a migration crutch for old code, not a fix.</li></ul>",
          hi: "<ul><li><code>DateTime.Now</code> save करना। उसका <code>Kind</code> <code>Local</code> है, इसलिए Npgsql उसे <code>timestamptz</code> के लिए मना कर देता है। <code>DateTime.UtcNow</code> लो।</li><li><code>DateTime.Parse</code> करके नतीजा save करना। <code>Kind</code> <code>Unspecified</code> होता है। इसकी जगह <code>DateTimeOffset</code> में parse करो।</li><li>Errors हटाने के लिए <code>Npgsql.EnableLegacyTimestampBehavior</code> चालू कर देना। यह पुराने code के migration का सहारा है, हल नहीं।</li></ul>",
          hg: "<ul><li><code>DateTime.Now</code> save karna. Uska <code>Kind</code> <code>Local</code> hai, isliye Npgsql use <code>timestamptz</code> ke liye mana kar deta hai. <code>DateTime.UtcNow</code> lo.</li><li><code>DateTime.Parse</code> karke nateeja save karna. <code>Kind</code> <code>Unspecified</code> hota hai. Iski jagah <code>DateTimeOffset</code> mein parse karo.</li><li>Errors hatane ke liye <code>Npgsql.EnableLegacyTimestampBehavior</code> chaalu kar dena. Ye purane code ke migration ka sahara hai, hal nahi.</li></ul>"
        },
        whenToUse: {
          en: "<p>Store every \"moment\" (created, closed, SLA deadline) as <code>timestamptz</code> from a UTC value. Convert to IST only at the edge: the UI or a report (<code>AT TIME ZONE</code> in SQL). A plain date such as a birthday is a different thing: use <code>date</code>.</p>",
          hi: "<p>हर \"पल\" (created, closed, SLA deadline) UTC value से <code>timestamptz</code> में रखो। IST में सिर्फ़ किनारे पर बदलो: UI या report में (SQL में <code>AT TIME ZONE</code>)। सिर्फ़ तारीख़, जैसे जन्मदिन, अलग चीज़ है: उसके लिए <code>date</code> लो।</p>",
          hg: "<p>Har \"pal\" (created, closed, SLA deadline) UTC value se <code>timestamptz</code> mein rakho. IST mein sirf kinaare par badlo: UI ya report mein (SQL mein <code>AT TIME ZONE</code>). Sirf taareekh, jaise janmdin, alag cheez hai: uske liye <code>date</code> lo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Meena's ticket 502 was created at <b>18:00 IST</b> (+05:30) on 7 Nov 2026. Print the UTC time as <code>yyyy-MM-dd HH:mm UTC</code> and then its <code>Kind</code>.</p>",
            hi: "<p>Meena का ticket 502 7 Nov 2026 को <b>18:00 IST</b> (+05:30) पर बना। UTC समय <code>yyyy-MM-dd HH:mm UTC</code> format में print करो, फिर उसका <code>Kind</code>।</p>",
            hg: "<p>Meena ka ticket 502 7 Nov 2026 ko <b>18:00 IST</b> (+05:30) par bana. UTC samay <code>yyyy-MM-dd HH:mm UTC</code> format mein print karo, phir uska <code>Kind</code>.</p>"
          },
          hint: {
            en: "<p>Build a <code>DateTimeOffset</code> with offset <code>TimeSpan.FromHours(5.5)</code> and take <code>.UtcDateTime</code>.</p>",
            hi: "<p><code>TimeSpan.FromHours(5.5)</code> offset के साथ <code>DateTimeOffset</code> बनाओ और <code>.UtcDateTime</code> लो।</p>",
            hg: "<p><code>TimeSpan.FromHours(5.5)</code> offset ke saath <code>DateTimeOffset</code> banao aur <code>.UtcDateTime</code> lo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: 18:00 IST in UTC",
              hi: "हल: 18:00 IST, UTC में",
              hg: "Solution: 18:00 IST, UTC mein"
            },
            check: "run",
            expected: "2026-11-07 12:30 UTC\nUtc",
            src: "using System.Globalization;\n\nvar created = new DateTimeOffset(2026, 11, 7, 18, 0, 0, TimeSpan.FromHours(5.5)).UtcDateTime;\nConsole.WriteLine(created.ToString(\"yyyy-MM-dd HH:mm 'UTC'\", CultureInfo.InvariantCulture));\nConsole.WriteLine(created.Kind);"
          }
        },
        quiz: {
          q: {
            en: "An EF Core entity has <code>DateTime CreatedUtc</code> mapped to <code>timestamptz</code>. You save <code>DateTime.Now</code> (Kind Local). What does Npgsql do?",
            hi: "EF Core entity में <code>DateTime CreatedUtc</code> है, जो <code>timestamptz</code> से map है। तुम <code>DateTime.Now</code> (Kind Local) save करते हो। Npgsql क्या करेगा?",
            hg: "EF Core entity mein <code>DateTime CreatedUtc</code> hai, jo <code>timestamptz</code> se map hai. Tum <code>DateTime.Now</code> (Kind Local) save karte ho. Npgsql kya karega?"
          },
          options: [
            {
              en: "Silently converts it to IST",
              hi: "चुपचाप उसे IST में बदल देगा",
              hg: "Chupchaap use IST mein badal dega"
            },
            {
              en: "Throws an exception: only UTC is accepted",
              hi: "Exception फेंकेगा: सिर्फ़ UTC मंज़ूर है",
              hg: "Exception phenkega: sirf UTC manzoor hai"
            },
            {
              en: "Saves it, dropping the time zone",
              hi: "Save कर देगा, time zone हटाकर",
              hg: "Save kar dega, time zone hatakar"
            },
            {
              en: "Rounds it to the nearest hour",
              hi: "सबसे पास के घंटे पर round कर देगा",
              hg: "Sabse paas ke ghante par round kar dega"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Since Npgsql 6, a non-UTC <code>DateTime</code> sent as <code>timestamptz</code> throws. Npgsql will not guess the zone for you. Write <code>DateTime.UtcNow</code> or convert with a <code>DateTimeOffset</code> first.</p>",
            hi: "<p>Npgsql 6 से, <code>timestamptz</code> के रूप में भेजा गया non-UTC <code>DateTime</code> exception फेंकता है। Npgsql तुम्हारे लिए zone का अंदाज़ा नहीं लगाएगा। <code>DateTime.UtcNow</code> लिखो या पहले <code>DateTimeOffset</code> से बदलो।</p>",
            hg: "<p>Npgsql 6 se, <code>timestamptz</code> ke roop mein bheja gaya non-UTC <code>DateTime</code> exception phenkta hai. Npgsql tumhare liye zone ka andaaza nahi lagayega. <code>DateTime.UtcNow</code> likho ya pehle <code>DateTimeOffset</code> se badlo.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>timestamptz</code> = one instant, kept in UTC.</li><li>Npgsql accepts only <code>Kind = Utc</code> for it; <code>Local</code> and <code>Unspecified</code> throw.</li><li>Work in UTC, convert to IST only when you show the time.</li></ul>",
          hi: "<ul><li><code>timestamptz</code> = एक असली पल, UTC में रखा हुआ।</li><li>Npgsql इसके लिए सिर्फ़ <code>Kind = Utc</code> लेता है; <code>Local</code> और <code>Unspecified</code> पर exception।</li><li>UTC में काम करो, समय दिखाते वक़्त ही IST में बदलो।</li></ul>",
          hg: "<ul><li><code>timestamptz</code> = ek asli pal, UTC mein rakha hua.</li><li>Npgsql iske liye sirf <code>Kind = Utc</code> leta hai; <code>Local</code> aur <code>Unspecified</code> par exception.</li><li>UTC mein kaam karo, samay dikhate waqt hi IST mein badlo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Convert to UTC before saving, and check the column type",
            hi: "Save से पहले UTC में बदलो, और column type देखो",
            hg: "Save se pehle UTC mein badlo, aur column type dekho"
          },
          src: "using System.Globalization;\nusing Microsoft.EntityFrameworkCore;\n\nvar ist = new DateTimeOffset(2026, 11, 7, 9, 30, 0, TimeSpan.FromHours(5.5));   // agent's phone says 9:30 IST\nvar ticket = new SupportTicket { Id = 501, CreatedUtc = Utc.Require(ist.UtcDateTime) };\nConsole.WriteLine(ticket.CreatedUtc.ToString(\"yyyy-MM-dd HH:mm 'UTC'\", CultureInfo.InvariantCulture));\n\ntry { Utc.Require(new DateTime(2026, 11, 7, 9, 30, 0)); }      // Kind = Unspecified: nobody knows the zone\ncatch (ArgumentException e) { Console.WriteLine(e.Message); }\n\nvar options = new DbContextOptionsBuilder<CrmContext>().UseNpgsql(\"Host=localhost;Database=crm\").Options;\nusing var db = new CrmContext(options);\nvar script = db.Database.GenerateCreateScript().Split('\\n');\nConsole.WriteLine(script.Single(l => l.Contains(\"\\\"CreatedUtc\\\"\")).Trim());\n\npublic static class Utc\n{\n    // Npgsql writes timestamptz only from UTC values, so make that rule visible in our own code too.\n    public static DateTime Require(DateTime value) => value.Kind == DateTimeKind.Utc\n        ? value\n        : throw new ArgumentException(\"CreatedUtc must be a UTC DateTime. Convert before saving.\");\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public DateTime CreatedUtc { get; set; }\n}\n\npublic class CrmContext(DbContextOptions<CrmContext> options) : DbContext(options)\n{\n    public DbSet<SupportTicket> Tickets => Set<SupportTicket>();\n}",
          packages: [
            "Npgsql.EntityFrameworkCore.PostgreSQL"
          ],
          check: "run",
          expected: "2026-11-07 04:00 UTC\nCreatedUtc must be a UTC DateTime. Convert before saving.\n\"CreatedUtc\" timestamp with time zone NOT NULL,"
        }
      ]
    },
    {
      id: "upsert-returning",
      depth: "short",
      title: {
        en: "Upsert: ON CONFLICT vs the SQL Server way",
        hi: "Upsert: ON CONFLICT बनाम SQL Server का तरीक़ा",
        hg: "Upsert: ON CONFLICT banaam SQL Server ka tareeka"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 5 fixed how dates are saved. The next everyday write is \"save the customer, or update it if the email already exists\". Postgres has one statement for it; SQL Server (Day 18) needs two steps with a lock, and this lesson runs the SQL Server version on LocalDB.",
          hi: "पाठ 5 में तारीख़ें save करने का तरीक़ा ठीक हुआ। अगला रोज़ का write है \"customer save करो, या email पहले से हो तो update करो\"। Postgres में इसके लिए एक statement है; SQL Server (Day 18) में lock के साथ दो steps चाहिए, और यह पाठ SQL Server वाला रूप LocalDB पर चलाता है।",
          hg: "Lesson 5 mein taareekhein save karne ka tareeka theek hua. Agla roz ka write hai \"customer save karo, ya email pehle se ho to update karo\". Postgres mein iske liye ek statement hai; SQL Server (Day 18) mein lock ke saath do steps chahiye, aur ye lesson SQL Server wala roop LocalDB par chalata hai."
        },
        what: {
          en: "<p>An <b>upsert</b> means \"update the row if it exists, otherwise insert it\", as one safe action. In Postgres: <code>INSERT ... ON CONFLICT (email) DO UPDATE ...</code>. It needs a unique index or constraint on the key. <code>RETURNING</code> gives back the saved rows.</p><p>In SQL Server you write it yourself: <code>UPDATE</code> first with <code>UPDLOCK, HOLDLOCK</code>, then <code>INSERT</code> only when <code>@@ROWCOUNT</code> is 0. The <code>OUTPUT</code> clause is the twin of <code>RETURNING</code>.</p>",
          hi: "<p><b>Upsert</b> का मतलब है \"row हो तो update करो, नहीं तो insert करो\", एक सुरक्षित काम की तरह। Postgres में: <code>INSERT ... ON CONFLICT (email) DO UPDATE ...</code>। इसके लिए key पर unique index या constraint चाहिए। <code>RETURNING</code> save हुई rows वापस देता है।</p><p>SQL Server में यह तुम्हें ख़ुद लिखना पड़ता है: पहले <code>UPDATE</code> जिसमें <code>UPDLOCK, HOLDLOCK</code>, फिर <code>INSERT</code> सिर्फ़ तब जब <code>@@ROWCOUNT</code> 0 हो। <code>OUTPUT</code> clause, <code>RETURNING</code> का जोड़ीदार है।</p>",
          hg: "<p><b>Upsert</b> ka matlab hai \"row ho to update karo, nahi to insert karo\", ek surakshit kaam ki tarah. Postgres mein: <code>INSERT ... ON CONFLICT (email) DO UPDATE ...</code>. Iske liye key par unique index ya constraint chahiye. <code>RETURNING</code> save hui rows wapas deta hai.</p><p>SQL Server mein ye tumhe khud likhna padta hai: pehle <code>UPDATE</code> jisme <code>UPDLOCK, HOLDLOCK</code>, phir <code>INSERT</code> sirf tab jab <code>@@ROWCOUNT</code> 0 ho. <code>OUTPUT</code> clause, <code>RETURNING</code> ka jodidaar hai.</p>"
        },
        why: {
          en: "<p>Retries, message consumers and imports run the same write twice. A plain \"check, then insert\" lets two sessions both see \"no row\" and both insert, so you get a duplicate or an error. An upsert makes the check and the write one atomic step.</p>",
          hi: "<p>Retries, message consumers और imports एक ही write दो बार चलाते हैं। साधारण \"पहले check, फिर insert\" में दो sessions दोनों को \"row नहीं है\" दिखता है और दोनों insert करते हैं, तो duplicate या error आता है। Upsert check और write को एक atomic step बना देता है।</p>",
          hg: "<p>Retries, message consumers aur imports ek hi write do baar chalate hain. Saadharan \"pehle check, phir insert\" mein do sessions dono ko \"row nahi hai\" dikhta hai aur dono insert karte hain, to duplicate ya error aata hai. Upsert check aur write ko ek atomic step bana deta hai.</p>"
        },
        analogy: {
          en: "<p>A railway ticket counter. \"Book this seat, or if it is already yours, just change the berth\" is one action at the counter. If the clerk first looks at the chart and then writes, two clerks can both think the seat is free, unless one holds the chart in hand (the lock) till the work is done.</p>",
          hi: "<p>रेलवे का ticket counter। \"यह seat book करो, या अगर पहले से तुम्हारी है तो बस berth बदल दो\" counter पर एक ही काम है। अगर clerk पहले chart देखे और फिर लिखे, तो दो clerks दोनों सोच सकते हैं कि seat ख़ाली है, जब तक एक काम पूरा होने तक chart हाथ में न पकड़े रहे (lock)।</p>",
          hg: "<p>Railway ka ticket counter. \"Ye seat book karo, ya agar pehle se tumhari hai to bas berth badal do\" counter par ek hi kaam hai. Agar clerk pehle chart dekhe aur phir likhe, to do clerks dono soch sakte hain ki seat khaali hai, jab tak ek kaam poora hone tak chart haath mein pakde na rahe (lock).</p>"
        },
        focus: {
          caption: {
            en: "PostgreSQL only: the upsert (not run here)",
            hi: "सिर्फ़ PostgreSQL: upsert (यहाँ चलाया नहीं जाता)",
            hg: "Sirf PostgreSQL: upsert (yahan chalaya nahi jaata)"
          },
          lang: "sql",
          check: "none",
          src: "-- needs a unique index or constraint on email\nINSERT INTO customers (email, name, city)\nVALUES ('asha@example.com', 'Asha', 'Mumbai'),\n       ('ravi@example.com', 'Ravi', 'Delhi')\nON CONFLICT (email) DO UPDATE\n    SET city = EXCLUDED.city\nRETURNING customer_id, name, city;"
        },
        lines: [
          {
            code: "Email      varchar(100)  NOT NULL UNIQUE,",
            note: {
              en: "The <code>UNIQUE</code> key on <code>Email</code> is what makes a second insert of the same customer impossible. Postgres <code>ON CONFLICT</code> needs the same thing.",
              hi: "<code>Email</code> पर <code>UNIQUE</code> key की वजह से एक ही customer का दूसरा insert नामुमकिन हो जाता है। Postgres के <code>ON CONFLICT</code> को भी यही चाहिए।",
              hg: "<code>Email</code> par <code>UNIQUE</code> key ki wajah se ek hi customer ka doosra insert naamumkin ho jaata hai. Postgres ke <code>ON CONFLICT</code> ko bhi yahi chahiye."
            }
          },
          {
            code: "BEGIN TRAN;",
            note: {
              en: "The locks taken below are held until <code>COMMIT</code>, so the check and the write cannot be split by another session.",
              hi: "नीचे जो locks लगते हैं वे <code>COMMIT</code> तक रहते हैं, इसलिए check और write को कोई दूसरा session बीच में नहीं तोड़ सकता।",
              hg: "Neeche jo locks lagte hain woh <code>COMMIT</code> tak rehte hain, isliye check aur write ko koi doosra session beech mein nahi tod sakta."
            }
          },
          {
            code: "UPDATE dbo.Customer WITH (UPDLOCK, HOLDLOCK) SET City = N'Mumbai' WHERE Email = 'asha@example.com';",
            note: {
              en: "Step 1: try to update. <code>UPDLOCK, HOLDLOCK</code> also locks the key range, even if no row is found, so nobody can insert it meanwhile.",
              hi: "Step 1: update करने की कोशिश। <code>UPDLOCK, HOLDLOCK</code> key की range को भी lock करता है, row न मिले तब भी, इसलिए बीच में कोई उसे insert नहीं कर सकता।",
              hg: "Step 1: update karne ki koshish. <code>UPDLOCK, HOLDLOCK</code> key ki range ko bhi lock karta hai, row na mile tab bhi, isliye beech mein koi use insert nahi kar sakta."
            }
          },
          {
            code: "IF @@ROWCOUNT = 0 INSERT dbo.Customer (Email, Name, City) VALUES ('asha@example.com', N'Asha', N'Mumbai');",
            note: {
              en: "Step 2: insert only when step 1 touched no row. Asha exists, so this does nothing.",
              hi: "Step 2: insert सिर्फ़ तब जब step 1 ने कोई row नहीं छुई। Asha मौजूद है, इसलिए यह कुछ नहीं करता।",
              hg: "Step 2: insert sirf tab jab step 1 ne koi row nahi chhui. Asha maujood hai, isliye ye kuch nahi karta."
            }
          },
          {
            code: "OUTPUT inserted.CustomerId, inserted.Name",
            note: {
              en: "<code>OUTPUT</code> is SQL Server's <code>RETURNING</code>. It prints <code>2 Ravi</code>, because Ravi was really inserted.",
              hi: "<code>OUTPUT</code>, SQL Server का <code>RETURNING</code> है। यह <code>2 Ravi</code> print करता है, क्योंकि Ravi सच में insert हुआ।",
              hg: "<code>OUTPUT</code>, SQL Server ka <code>RETURNING</code> hai. Ye <code>2 Ravi</code> print karta hai, kyunki Ravi sach mein insert hua."
            }
          },
          {
            code: "SELECT COUNT(*) AS ci_match FROM dbo.Customer WHERE Email = 'ASHA@EXAMPLE.COM';",
            note: {
              en: "Prints <code>1</code>: SQL Server's default collation ignores case. Postgres would give <code>0</code>, as lesson 2 said.",
              hi: "<code>1</code> print होता है: SQL Server की default collation case नहीं देखती। Postgres में <code>0</code> आता, जैसा पाठ 2 में कहा था।",
              hg: "<code>1</code> print hota hai: SQL Server ki default collation case nahi dekhti. Postgres mein <code>0</code> aata, jaisa lesson 2 mein kaha tha."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>\"Check, then insert\" without a lock or a unique key. Under load it creates duplicates or random errors.</li><li><code>ON CONFLICT</code> on a column that has no unique index or constraint. Postgres raises an error. Also, one statement must not hit the same key twice in <code>DO UPDATE</code>: it fails with a cardinality violation.</li><li>Copying the SQL Server lock hints into Postgres. <code>UPDLOCK</code> and <code>HOLDLOCK</code> do not exist there; use <code>ON CONFLICT</code>.</li></ul>",
          hi: "<ul><li>बिना lock या unique key के \"check, फिर insert\"। Load में duplicates या अजीब errors बनते हैं।</li><li>जिस column पर unique index या constraint नहीं, उस पर <code>ON CONFLICT</code>। Postgres error देता है। साथ ही एक statement में <code>DO UPDATE</code> एक ही key को दो बार नहीं छू सकता: cardinality violation से फ़ेल होता है।</li><li>SQL Server के lock hints को Postgres में copy करना। वहाँ <code>UPDLOCK</code> और <code>HOLDLOCK</code> होते ही नहीं; <code>ON CONFLICT</code> लो।</li></ul>",
          hg: "<ul><li>Bina lock ya unique key ke \"check, phir insert\". Load mein duplicates ya ajeeb errors bante hain.</li><li>Jis column par unique index ya constraint nahi, us par <code>ON CONFLICT</code>. Postgres error deta hai. Saath hi ek statement mein <code>DO UPDATE</code> ek hi key ko do baar nahi chhu sakta: cardinality violation se fail hota hai.</li><li>SQL Server ke lock hints ko Postgres mein copy karna. Wahan <code>UPDLOCK</code> aur <code>HOLDLOCK</code> hote hi nahi; <code>ON CONFLICT</code> lo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use an upsert for idempotent writes: a retried API call, a message consumer, a nightly import. Do not use it when a duplicate should be an error (for example a second payment with the same id): there, a plain <code>INSERT</code> and its unique-key failure is the right answer.</p>",
          hi: "<p>Idempotent writes के लिए upsert लो: दोबारा चली API call, message consumer, रात का import। जब duplicate को error ही होना चाहिए (जैसे उसी id का दूसरा payment), तब नहीं: वहाँ साधारण <code>INSERT</code> और उसकी unique-key की failure ही सही जवाब है।</p>",
          hg: "<p>Idempotent writes ke liye upsert lo: dobara chali API call, message consumer, raat ka import. Jab duplicate ko error hi hona chahiye (jaise usi id ka doosra payment), tab nahi: wahan saadharan <code>INSERT</code> aur uski unique-key ki failure hi sahi jawab hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Upsert <b>Meena</b> (<code>meena@example.com</code>) with city <code>Chennai</code>, then run the same upsert again with city <code>Hyderabad</code>. Print <code>CustomerId, Name, City</code>: it must be one row.</p>",
            hi: "<p><b>Meena</b> (<code>meena@example.com</code>) को city <code>Chennai</code> के साथ upsert करो, फिर वही upsert city <code>Hyderabad</code> के साथ दोबारा चलाओ। <code>CustomerId, Name, City</code> print करो: एक ही row आनी चाहिए।</p>",
            hg: "<p><b>Meena</b> (<code>meena@example.com</code>) ko city <code>Chennai</code> ke saath upsert karo, phir wahi upsert city <code>Hyderabad</code> ke saath dobara chalao. <code>CustomerId, Name, City</code> print karo: ek hi row aani chahiye.</p>"
          },
          hint: {
            en: "<p>Copy the UPDATE plus <code>IF @@ROWCOUNT = 0 INSERT</code> pair twice, inside one <code>BEGIN TRAN</code> ... <code>COMMIT</code>, and change the city in the second pair.</p>",
            hi: "<p>UPDATE और <code>IF @@ROWCOUNT = 0 INSERT</code> वाली जोड़ी दो बार copy करो, एक <code>BEGIN TRAN</code> ... <code>COMMIT</code> के अंदर, और दूसरी जोड़ी में city बदल दो।</p>",
            hg: "<p>UPDATE aur <code>IF @@ROWCOUNT = 0 INSERT</code> wali jodi do baar copy karo, ek <code>BEGIN TRAN</code> ... <code>COMMIT</code> ke andar, aur doosri jodi mein city badal do.</p>"
          },
          solution: {
            caption: {
              en: "Solution: Meena twice, one row",
              hi: "हल: Meena दो बार, एक row",
              hg: "Solution: Meena do baar, ek row"
            },
            lang: "sql",
            check: "run",
            expected: "1 Meena Hyderabad",
            src: "CREATE TABLE dbo.Customer (\n    CustomerId int           IDENTITY(1,1) PRIMARY KEY,\n    Email      varchar(100)  NOT NULL UNIQUE,\n    Name       nvarchar(50)  NOT NULL,\n    City       nvarchar(50)  NOT NULL\n);\n\nBEGIN TRAN;\nUPDATE dbo.Customer WITH (UPDLOCK, HOLDLOCK) SET City = N'Chennai' WHERE Email = 'meena@example.com';\nIF @@ROWCOUNT = 0 INSERT dbo.Customer (Email, Name, City) VALUES ('meena@example.com', N'Meena', N'Chennai');\n\nUPDATE dbo.Customer WITH (UPDLOCK, HOLDLOCK) SET City = N'Hyderabad' WHERE Email = 'meena@example.com';\nIF @@ROWCOUNT = 0 INSERT dbo.Customer (Email, Name, City) VALUES ('meena@example.com', N'Meena', N'Hyderabad');\nCOMMIT;\n\nSELECT CustomerId, Name, City FROM dbo.Customer;"
          }
        },
        quiz: {
          q: {
            en: "Why does the SQL Server upsert use <code>UPDLOCK, HOLDLOCK</code> on the UPDATE?",
            hi: "SQL Server upsert में UPDATE पर <code>UPDLOCK, HOLDLOCK</code> क्यों लगता है?",
            hg: "SQL Server upsert mein UPDATE par <code>UPDLOCK, HOLDLOCK</code> kyun lagta hai?"
          },
          options: [
            {
              en: "So the table is read-only for everyone",
              hi: "ताकि table सबके लिए read-only हो जाए",
              hg: "Taaki table sabke liye read-only ho jaaye"
            },
            {
              en: "So the speed of the query improves",
              hi: "ताकि query की speed बढ़े",
              hg: "Taaki query ki speed badhe"
            },
            {
              en: "So no other session can insert the same key between the UPDATE and the INSERT",
              hi: "ताकि UPDATE और INSERT के बीच कोई दूसरा session वही key insert न कर सके",
              hg: "Taaki UPDATE aur INSERT ke beech koi doosra session wahi key insert na kar sake"
            },
            {
              en: "So the UPDATE can skip the unique key",
              hi: "ताकि UPDATE unique key को छोड़ सके",
              hg: "Taaki UPDATE unique key ko chhod sake"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Without the locks, two sessions could both find no row and both insert. The hints keep the key range locked until <code>COMMIT</code>, so check and write behave as one step. They do not make the query faster, and they lock only that key range, not the whole table.</p>",
            hi: "<p>Locks के बिना दो sessions दोनों को row न मिले और दोनों insert कर दें। Hints key की range को <code>COMMIT</code> तक lock रखते हैं, इसलिए check और write एक step की तरह चलते हैं। इनसे query तेज़ नहीं होती, और ये पूरी table नहीं, सिर्फ़ उस key की range lock करते हैं।</p>",
            hg: "<p>Locks ke bina do sessions dono ko row na mile aur dono insert kar dein. Hints key ki range ko <code>COMMIT</code> tak lock rakhte hain, isliye check aur write ek step ki tarah chalte hain. Inse query tez nahi hoti, aur ye poori table nahi, sirf us key ki range lock karte hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Upsert = update if it exists, else insert, as one safe step.</li><li>Postgres: <code>ON CONFLICT (key) DO UPDATE ... RETURNING</code>, needs a unique key.</li><li>SQL Server: <code>UPDATE ... WITH (UPDLOCK, HOLDLOCK)</code>, then <code>INSERT</code> if <code>@@ROWCOUNT = 0</code>.</li></ul>",
          hi: "<ul><li>Upsert = हो तो update, नहीं तो insert, एक सुरक्षित step में।</li><li>Postgres: <code>ON CONFLICT (key) DO UPDATE ... RETURNING</code>, unique key चाहिए।</li><li>SQL Server: <code>UPDATE ... WITH (UPDLOCK, HOLDLOCK)</code>, फिर <code>@@ROWCOUNT = 0</code> हो तो <code>INSERT</code>।</li></ul>",
          hg: "<ul><li>Upsert = ho to update, nahi to insert, ek surakshit step mein.</li><li>Postgres: <code>ON CONFLICT (key) DO UPDATE ... RETURNING</code>, unique key chahiye.</li><li>SQL Server: <code>UPDATE ... WITH (UPDLOCK, HOLDLOCK)</code>, phir <code>@@ROWCOUNT = 0</code> ho to <code>INSERT</code>.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "The SQL Server upsert, run on LocalDB (the Postgres form is above)",
            hi: "SQL Server का upsert, LocalDB पर चला हुआ (Postgres वाला रूप ऊपर है)",
            hg: "SQL Server ka upsert, LocalDB par chala hua (Postgres wala roop upar hai)"
          },
          lang: "sql",
          src: "CREATE TABLE dbo.Customer (\n    CustomerId int           IDENTITY(1,1) PRIMARY KEY,\n    Email      varchar(100)  NOT NULL UNIQUE,\n    Name       nvarchar(50)  NOT NULL,\n    City       nvarchar(50)  NOT NULL\n);\nINSERT dbo.Customer (Email, Name, City) VALUES ('asha@example.com', N'Asha', N'Pune');\n\n-- upsert, SQL Server style: UPDATE first while holding the locks, INSERT only when no row matched\nBEGIN TRAN;\nUPDATE dbo.Customer WITH (UPDLOCK, HOLDLOCK) SET City = N'Mumbai' WHERE Email = 'asha@example.com';\nIF @@ROWCOUNT = 0 INSERT dbo.Customer (Email, Name, City) VALUES ('asha@example.com', N'Asha', N'Mumbai');\n\nUPDATE dbo.Customer WITH (UPDLOCK, HOLDLOCK) SET City = N'Delhi' WHERE Email = 'ravi@example.com';\nIF @@ROWCOUNT = 0 INSERT dbo.Customer (Email, Name, City) OUTPUT inserted.CustomerId, inserted.Name VALUES ('ravi@example.com', N'Ravi', N'Delhi');\nCOMMIT;\n\nSELECT CustomerId, Name, City FROM dbo.Customer ORDER BY CustomerId;\n\n-- SQL Server's default collation is case-insensitive: Postgres would return 0 for this comparison\nSELECT COUNT(*) AS ci_match FROM dbo.Customer WHERE Email = 'ASHA@EXAMPLE.COM';",
          check: "run",
          expected: "2 Ravi\n1 Asha Mumbai\n2 Ravi Delhi\n1"
        }
      ]
    },
    {
      id: "choose-data-store",
      depth: "short",
      title: {
        en: "SQL vs NoSQL: choose by access pattern",
        hi: "SQL बनाम NoSQL: access pattern से चुनो",
        hg: "SQL banaam NoSQL: access pattern se chuno"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1 to 6 stayed inside PostgreSQL: versions, names, jsonb, indexes, time and upsert. Now the last question of the day: when is Postgres (or SQL Server from Day 18) not the right home for a piece of CRM data, and what do you give up if you pick something else?",
          hi: "पाठ 1 से 6 PostgreSQL के अंदर रहे: versions, names, jsonb, indexes, time और upsert। अब दिन का आख़िरी सवाल: CRM के किसी data के लिए Postgres (या Day 18 का SQL Server) कब सही घर नहीं है, और कुछ और चुनो तो क्या छोड़ना पड़ता है?",
          hg: "Lessons 1 se 6 PostgreSQL ke andar rahe: versions, names, jsonb, indexes, time aur upsert. Ab din ka aakhiri sawaal: CRM ke kisi data ke liye Postgres (ya Day 18 ka SQL Server) kab sahi ghar nahi hai, aur kuch aur chuno to kya chhodna padta hai?"
        },
        what: {
          en: "<p>Choose a data store by the <b>access pattern</b> first, the product name second. The default is a relational database (PostgreSQL or SQL Server): joins, constraints, transactions, and jsonb for flexible parts.</p><p>A second store earns its place for a measured need: <b>Redis</b> for fast, rebuildable data (a cache), <b>Cosmos DB</b> or <b>MongoDB</b> for whole documents read by key at large or global scale. Every extra store must be run, secured, backed up and kept consistent.</p>",
          hi: "<p>Data store पहले <b>access pattern</b> देखकर चुनो, product का नाम बाद में। Default relational database है (PostgreSQL या SQL Server): joins, constraints, transactions, और लचीले हिस्सों के लिए jsonb।</p><p>दूसरा store तभी जगह पाता है जब मापी हुई ज़रूरत हो: तेज़, दोबारा बनाए जा सकने वाले data के लिए <b>Redis</b> (cache), और बड़े या दुनिया भर के scale पर key से पढ़े जाने वाले पूरे documents के लिए <b>Cosmos DB</b> या <b>MongoDB</b>। हर extra store को चलाना, सुरक्षित रखना, backup लेना और बाक़ी data से मेल में रखना पड़ता है।</p>",
          hg: "<p>Data store pehle <b>access pattern</b> dekhkar chuno, product ka naam baad mein. Default relational database hai (PostgreSQL ya SQL Server): joins, constraints, transactions, aur lachile hisson ke liye jsonb.</p><p>Doosra store tabhi jagah paata hai jab maapi hui zaroorat ho: tez, dobara banaye ja sakne wale data ke liye <b>Redis</b> (cache), aur bade ya duniya bhar ke scale par key se padhe jaane wale poore documents ke liye <b>Cosmos DB</b> ya <b>MongoDB</b>. Har extra store ko chalana, surakshit rakhna, backup lena aur baaki data se mel mein rakhna padta hai.</p>"
        },
        why: {
          en: "<p>Choosing by hype gives a CRM that is hard to run: a join that must now be done in code, a \"cache\" that quietly became the only copy of the data, or two stores that disagree. A Tech Lead is expected to name the access pattern and the cost of the choice.</p>",
          hi: "<p>Hype देखकर चुनने से ऐसा CRM बनता है जिसे चलाना मुश्किल है: ऐसा join जो अब code में करना पड़ता है, ऐसा \"cache\" जो चुपचाप data की अकेली copy बन गया, या दो stores जो एक-दूसरे से मेल नहीं खाते। Tech Lead से उम्मीद है कि वह access pattern और अपने चुनाव की क़ीमत बताए।</p>",
          hg: "<p>Hype dekhkar chunne se aisa CRM banta hai jise chalana mushkil hai: aisa join jo ab code mein karna padta hai, aisa \"cache\" jo chupchaap data ki akeli copy ban gaya, ya do stores jo ek-doosre se mel nahi khaate. Tech Lead se ummeed hai ki woh access pattern aur apne chunaav ki keemat bataye.</p>"
        },
        analogy: {
          en: "<p>Kitchen storage. The steel almirah has shelves, labels and rules (relational). A tiffin box holds one complete meal (a document). The fridge door is quick and small (Redis): you do not keep the only copy of anything precious there.</p>",
          hi: "<p>रसोई की storage। Steel की अलमारी में खाने, लेबल और नियम हैं (relational)। Tiffin में एक पूरा खाना है (document)। Fridge का दरवाज़ा तेज़ और छोटा है (Redis): वहाँ किसी क़ीमती चीज़ की अकेली copy नहीं रखते।</p>",
          hg: "<p>Rasoi ki storage. Steel ki almari mein khaane, label aur niyam hain (relational). Tiffin mein ek poora khaana hai (document). Fridge ka darwaza tez aur chhota hai (Redis): wahan kisi keemti cheez ki akeli copy nahi rakhte.</p>"
        },
        lines: [
          {
            code: "new Need(\"Agent dashboard counters (can be rebuilt)\", Joins: false, Transactions: false, KeyLookupOnly: true, GlobalWrites: false, Rebuildable: true),",
            note: {
              en: "Each need is described by its access pattern: joins? transactions? lookup by key? writes from many regions? can it be rebuilt?",
              hi: "हर ज़रूरत को उसके access pattern से बताया गया है: joins? transactions? key से lookup? कई regions से writes? दोबारा बन सकता है?",
              hg: "Har zaroorat ko uske access pattern se bataya gaya hai: joins? transactions? key se lookup? kai regions se writes? dobara ban sakta hai?"
            }
          },
          {
            code: "var (store, giveUp) = Choose.For(need);",
            note: {
              en: "The helper returns two things: the store and what you give up by choosing it. Say both in a design review.",
              hi: "Helper दो चीज़ें लौटाता है: store और उसे चुनने पर क्या छूटता है। Design review में दोनों बोलो।",
              hg: "Helper do cheezein lautata hai: store aur use chunne par kya chhootta hai. Design review mein dono bolo."
            }
          },
          {
            code: "public static (string Store, string GiveUp) For(Need n) => n switch",
            note: {
              en: "A <code>switch</code> expression reads like a decision list. The order matters: the first matching rule wins.",
              hi: "<code>switch</code> expression decision की सूची की तरह पढ़ी जाती है। क्रम मायने रखता है: जो rule पहले match हो, वही जीतता है।",
              hg: "<code>switch</code> expression decision ki list ki tarah padhi jaati hai. Kram maayne rakhta hai: jo rule pehle match ho, wahi jeetta hai."
            }
          },
          {
            code: "{ Joins: true } or { Transactions: true } => (\"PostgreSQL or SQL Server\", \"easy scale-out of writes\"),",
            note: {
              en: "The first rule is the default: if you need joins or transactions, stay relational. The cost is that scaling writes out is harder.",
              hi: "पहला rule default है: joins या transactions चाहिए तो relational में रहो। क़ीमत यह है कि writes को कई machines पर फैलाना मुश्किल है।",
              hg: "Pehla rule default hai: joins ya transactions chahiye to relational mein raho. Keemat ye hai ki writes ko kai machines par phailana mushkil hai."
            }
          },
          {
            code: "{ Rebuildable: true, KeyLookupOnly: true } => (\"Redis cache\", \"durability: it is a cache, not the only copy\"),",
            note: {
              en: "Rebuildable data read by key suits Redis. The price: it can vanish, so the real data lives elsewhere.",
              hi: "दोबारा बन सकने वाला, key से पढ़ा जाने वाला data Redis को सूट करता है। क़ीमत: वह ग़ायब हो सकता है, इसलिए असली data कहीं और रहता है।",
              hg: "Dobara ban sakne wala, key se padha jaane wala data Redis ko suit karta hai. Keemat: woh gaayab ho sakta hai, isliye asli data kahin aur rehta hai."
            }
          },
          {
            code: "_ => (\"PostgreSQL or SQL Server\", \"nothing yet: stay simple\")",
            note: {
              en: "When nothing special is needed, stay with the relational default.",
              hi: "जब कुछ ख़ास ज़रूरत न हो, तो relational default पर ही रहो।",
              hg: "Jab kuch khaas zaroorat na ho, to relational default par hi raho."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Picking a store for the CV or the hype, not for a measured need.</li><li>Keeping the only copy of important data in Redis. Treat it as a cache unless you designed its persistence on purpose.</li><li>Moving to a document store and then needing joins and transactions across many documents, which are limited or costly there. Think of the reports and the consistency rules first.</li></ul>",
          hi: "<ul><li>Store को CV या hype के लिए चुनना, मापी हुई ज़रूरत के लिए नहीं।</li><li>ज़रूरी data की अकेली copy Redis में रखना। जब तक persistence सोच-समझकर न बनाई हो, उसे cache ही समझो।</li><li>Document store पर जाना और फिर joins और कई documents पर transactions की ज़रूरत पड़ना, जो वहाँ कम मिलते हैं या महँगे हैं। पहले reports और consistency के नियम सोचो।</li></ul>",
          hg: "<ul><li>Store ko CV ya hype ke liye chunna, maapi hui zaroorat ke liye nahi.</li><li>Zaroori data ki akeli copy Redis mein rakhna. Jab tak persistence soch-samajhkar na banayi ho, use cache hi samjho.</li><li>Document store par jaana aur phir joins aur kai documents par transactions ki zaroorat padna, jo wahan kam milte hain ya mehenge hain. Pehle reports aur consistency ke niyam socho.</li></ul>"
        },
        whenToUse: {
          en: "<p>In a design discussion, say the access pattern first (\"tickets and customers need joins and transactions, so PostgreSQL\"), then add a second store only for a measured need (latency, write volume, global users, data shape) and say what you give up. Cosmos DB, MongoDB and Redis details are in the Deep Dive.</p>",
          hi: "<p>Design की बातचीत में पहले access pattern बोलो (\"tickets और customers को joins और transactions चाहिए, इसलिए PostgreSQL\"), फिर दूसरा store सिर्फ़ मापी हुई ज़रूरत (latency, कितने writes, दुनिया भर के users, data की शक्ल) के लिए जोड़ो और बताओ कि क्या छोड़ रहे हो। Cosmos DB, MongoDB और Redis की details Deep Dive में हैं।</p>",
          hg: "<p>Design ki baatcheet mein pehle access pattern bolo (\"tickets aur customers ko joins aur transactions chahiye, isliye PostgreSQL\"), phir doosra store sirf maapi hui zaroorat (latency, kitne writes, duniya bhar ke users, data ki shakl) ke liye jodo aur batao ki kya chhod rahe ho. Cosmos DB, MongoDB aur Redis ki details Deep Dive mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a fourth need, <b>Login sessions</b>: no joins, no transactions, lookup by key, no global writes, and it can be rebuilt. Print the choice for it only.</p>",
            hi: "<p>चौथी ज़रूरत जोड़ो, <b>Login sessions</b>: joins नहीं, transactions नहीं, key से lookup, global writes नहीं, और दोबारा बन सकती है। सिर्फ़ उसी का चुनाव print करो।</p>",
            hg: "<p>Chauthi zaroorat jodo, <b>Login sessions</b>: joins nahi, transactions nahi, key se lookup, global writes nahi, aur dobara ban sakti hai. Sirf usi ka chunaav print karo.</p>"
          },
          hint: {
            en: "<p>Create a <code>Need</code> with <code>KeyLookupOnly: true</code> and <code>Rebuildable: true</code>, then call <code>Choose.For</code>.</p>",
            hi: "<p><code>KeyLookupOnly: true</code> और <code>Rebuildable: true</code> के साथ एक <code>Need</code> बनाओ, फिर <code>Choose.For</code> call करो।</p>",
            hg: "<p><code>KeyLookupOnly: true</code> aur <code>Rebuildable: true</code> ke saath ek <code>Need</code> banao, phir <code>Choose.For</code> call karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: login sessions",
              hi: "हल: login sessions",
              hg: "Solution: login sessions"
            },
            check: "run",
            expected: "Login sessions -> Redis cache (you give up: durability: it is a cache, not the only copy)",
            src: "var need = new Need(\"Login sessions\", Joins: false, Transactions: false, KeyLookupOnly: true, GlobalWrites: false, Rebuildable: true);\nvar (store, giveUp) = Choose.For(need);\nConsole.WriteLine($\"{need.Name} -> {store} (you give up: {giveUp})\");\n\npublic record Need(string Name, bool Joins, bool Transactions, bool KeyLookupOnly, bool GlobalWrites, bool Rebuildable = false);\n\npublic static class Choose\n{\n    // Ask about the access pattern first. The default answer is a relational database.\n    public static (string Store, string GiveUp) For(Need n) => n switch\n    {\n        { Joins: true } or { Transactions: true } => (\"PostgreSQL or SQL Server\", \"easy scale-out of writes\"),\n        { Rebuildable: true, KeyLookupOnly: true } => (\"Redis cache\", \"durability: it is a cache, not the only copy\"),\n        { GlobalWrites: true, KeyLookupOnly: true } => (\"Cosmos DB or MongoDB\", \"easy joins and cross-partition transactions\"),\n        _ => (\"PostgreSQL or SQL Server\", \"nothing yet: stay simple\")\n    };\n}"
          }
        },
        quiz: {
          q: {
            en: "A Tech Lead is asked \"which database for the CRM tickets?\". What should the answer start with?",
            hi: "Tech Lead से पूछा गया \"CRM tickets के लिए कौन-सा database?\"। जवाब किस बात से शुरू होना चाहिए?",
            hg: "Tech Lead se poochha gaya \"CRM tickets ke liye kaunsa database?\". Jawab kis baat se shuru hona chahiye?"
          },
          options: [
            {
              en: "Always NoSQL, because it scales",
              hi: "हमेशा NoSQL, क्योंकि वह scale होता है",
              hg: "Hamesha NoSQL, kyunki woh scale hota hai"
            },
            {
              en: "The newest database product on the market",
              hi: "बाज़ार का सबसे नया database product",
              hg: "Bazaar ka sabse naya database product"
            },
            {
              en: "The database the last team used",
              hi: "जो database पिछली team ने इस्तेमाल किया",
              hg: "Jo database pichhli team ne use kiya"
            },
            {
              en: "The access pattern: joins, transactions, how data is read and written",
              hi: "Access pattern से: joins, transactions, data कैसे पढ़ा और लिखा जाता है",
              hg: "Access pattern se: joins, transactions, data kaise padha aur likha jaata hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>The access pattern decides what you need: joins and transactions point to a relational database, key lookups at global scale point to a document store. Name the pattern first, then the product, and say what you give up.</p>",
            hi: "<p>Access pattern तय करता है कि क्या चाहिए: joins और transactions relational database की तरफ़ ले जाते हैं, दुनिया भर के scale पर key lookups document store की तरफ़। पहले pattern बताओ, फिर product, और बताओ कि क्या छोड़ रहे हो।</p>",
            hg: "<p>Access pattern tay karta hai ki kya chahiye: joins aur transactions relational database ki taraf le jaate hain, duniya bhar ke scale par key lookups document store ki taraf. Pehle pattern batao, phir product, aur batao ki kya chhod rahe ho.</p>"
          }
        },
        recap: {
          en: "<ul><li>Start from the access pattern; the default is a relational database.</li><li>Redis for rebuildable data (a cache); Cosmos DB or MongoDB for whole documents read by key at scale.</li><li>Every extra store costs operations and consistency; say what you give up.</li></ul>",
          hi: "<ul><li>Access pattern से शुरू करो; default relational database है।</li><li>दोबारा बन सकने वाले data (cache) के लिए Redis; scale पर key से पढ़े जाने वाले पूरे documents के लिए Cosmos DB या MongoDB।</li><li>हर extra store का ख़र्च operations और consistency में आता है; बताओ कि क्या छोड़ रहे हो।</li></ul>",
          hg: "<ul><li>Access pattern se shuru karo; default relational database hai.</li><li>Dobara ban sakne wale data (cache) ke liye Redis; scale par key se padhe jaane wale poore documents ke liye Cosmos DB ya MongoDB.</li><li>Har extra store ka kharch operations aur consistency mein aata hai; batao ki kya chhod rahe ho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A tiny helper that chooses by access pattern",
            hi: "Access pattern से चुनने वाला छोटा helper",
            hg: "Access pattern se chunne wala chhota helper"
          },
          src: "var needs = new[]\n{\n    new Need(\"Tickets, customers and their billing\", Joins: true, Transactions: true, KeyLookupOnly: false, GlobalWrites: false),\n    new Need(\"Agent dashboard counters (can be rebuilt)\", Joins: false, Transactions: false, KeyLookupOnly: true, GlobalWrites: false, Rebuildable: true),\n    new Need(\"Chat history by conversation id, many regions\", Joins: false, Transactions: false, KeyLookupOnly: true, GlobalWrites: true)\n};\n\nforeach (var need in needs)\n{\n    var (store, giveUp) = Choose.For(need);\n    Console.WriteLine($\"{need.Name} -> {store} (you give up: {giveUp})\");\n}\n\npublic record Need(string Name, bool Joins, bool Transactions, bool KeyLookupOnly, bool GlobalWrites, bool Rebuildable = false);\n\npublic static class Choose\n{\n    // Ask about the access pattern first. The default answer is a relational database.\n    public static (string Store, string GiveUp) For(Need n) => n switch\n    {\n        { Joins: true } or { Transactions: true } => (\"PostgreSQL or SQL Server\", \"easy scale-out of writes\"),\n        { Rebuildable: true, KeyLookupOnly: true } => (\"Redis cache\", \"durability: it is a cache, not the only copy\"),\n        { GlobalWrites: true, KeyLookupOnly: true } => (\"Cosmos DB or MongoDB\", \"easy joins and cross-partition transactions\"),\n        _ => (\"PostgreSQL or SQL Server\", \"nothing yet: stay simple\")\n    };\n}",
          check: "run",
          expected: "Tickets, customers and their billing -> PostgreSQL or SQL Server (you give up: easy scale-out of writes)\nAgent dashboard counters (can be rebuilt) -> Redis cache (you give up: durability: it is a cache, not the only copy)\nChat history by conversation id, many regions -> Cosmos DB or MongoDB (you give up: easy joins and cross-partition transactions)"
        }
      ]
    },
    {
      id: "postgres-isolation-heap",
      depth: "detailed",
      title: {
        en: "Isolation levels and table layout in Postgres",
        hi: "Postgres में isolation levels और table की बनावट",
        hg: "Postgres mein isolation levels aur table ki banaavat"
      },
      body: {
        en: "<ul>\n<li><b>Isolation in Postgres:</b> READ COMMITTED is the default, each statement sees data committed before it began, and plain SELECTs do not block writers (and writers do not block them). Repeatable Read is a transaction-wide snapshot and, in Postgres, does not allow phantoms; Serializable (SSI, serializable snapshot isolation) adds conflict detection and can fail with a serialization error you must retry. The closest SQL Server match for Postgres Repeatable Read is SNAPSHOT isolation.</li>\n<li><b>Layout contrast:</b> Postgres tables are heaps; there is no clustered index (the <code>CLUSTER</code> command reorders once, it is not maintained).</li>\n</ul>",
        hi: "<ul>\n<li><b>Postgres में isolation:</b> READ COMMITTED default है, हर statement वही data देखता है जो उसके शुरू होने से पहले committed था, और सादे SELECT writers को block नहीं करते (और writers उन्हें नहीं)। Repeatable Read पूरे transaction का snapshot है और Postgres में phantoms नहीं आने देता; Serializable (SSI, serializable snapshot isolation) में conflict detection जुड़ता है और serialization error आ सकता है जिसे retry करना पड़ता है। Postgres Repeatable Read का सबसे करीबी SQL Server मेल SNAPSHOT isolation है।</li>\n<li><b>Layout का फ़र्क:</b> Postgres tables heap हैं; clustered index नहीं है (<code>CLUSTER</code> command एक बार reorder करता है, maintain नहीं होता)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Postgres mein isolation:</b> READ COMMITTED default hai, har statement wahi data dekhta hai jo uske shuru hone se pehle committed tha, aur saade SELECT writers ko block nahi karte (aur writers unhe nahi). Repeatable Read poore transaction ka snapshot hai aur Postgres mein phantoms nahi aane deta; Serializable (SSI, serializable snapshot isolation) mein conflict detection judta hai aur serialization error aa sakta hai jise retry karna padta hai. Postgres Repeatable Read ka sabse kareebi SQL Server mel SNAPSHOT isolation hai.</li>\n<li><b>Layout ka farq:</b> Postgres tables heap hain; clustered index nahi hai (<code>CLUSTER</code> command ek baar reorder karta hai, maintain nahi hota).</li>\n</ul>"
      }
    },
    {
      id: "postgres-sql-extras",
      depth: "detailed",
      title: {
        en: "More Postgres SQL: identity, RETURNING, paging, MERGE",
        hi: "और Postgres SQL: identity, RETURNING, paging, MERGE",
        hg: "Aur Postgres SQL: identity, RETURNING, paging, MERGE"
      },
      body: {
        en: "<ul>\n<li><b>Auto numbers:</b> <code>GENERATED ... AS IDENTITY</code> (Postgres 10+) is the modern form; <code>serial</code> is the older shorthand. Both use a <b>sequence</b>, and a rolled-back insert still burns a number.</li>\n<li><b>Get the row back:</b> <code>RETURNING</code> (SQL Server: <code>OUTPUT</code>). <b>Paging:</b> <code>LIMIT n OFFSET m</code> (SQL Server: <code>TOP</code>, <code>OFFSET ... FETCH</code>).</li>\n<li><b>Keyset paging:</b> <code>LIMIT n OFFSET m</code> still reads and throws away the first m rows, so a deep page gets slow. Ask for \"rows after the last id I saw\" instead.</li>\n<li><b>MERGE:</b> exists since Postgres 15 (<code>RETURNING</code> on MERGE since 17). <code>ON CONFLICT</code> is still the simpler tool for a one-key upsert (lesson 6).</li>\n</ul>\n<p><b>When to use / when not:</b> state these as \"differences to check\", not as \"Postgres is better\". When porting a SQL Server database, run a list of assumptions (case, trailing spaces, identity, <code>TOP</code>, <code>GETDATE()</code> vs <code>now()</code>) before you rewrite queries.</p>",
        hi: "<ul>\n<li><b>Auto numbers:</b> <code>GENERATED ... AS IDENTITY</code> (Postgres 10+) नया तरीका है; <code>serial</code> पुराना shorthand है। दोनों <b>sequence</b> use करते हैं, और rollback हुआ insert भी एक number जला देता है।</li>\n<li><b>Row वापस पाना:</b> <code>RETURNING</code> (SQL Server: <code>OUTPUT</code>)। <b>Paging:</b> <code>LIMIT n OFFSET m</code> (SQL Server: <code>TOP</code>, <code>OFFSET ... FETCH</code>)।</li>\n<li><b>Keyset paging:</b> <code>LIMIT n OFFSET m</code> फिर भी पहली m rows पढ़कर फेंकता है, इसलिए गहरा page धीमा हो जाता है। इसकी जगह माँगो \"आख़िरी देखे id के बाद की rows\"।</li>\n<li><b>MERGE:</b> Postgres 15 से है (MERGE पर <code>RETURNING</code> 17 से)। एक key वाले upsert के लिए <code>ON CONFLICT</code> अब भी आसान औज़ार है (पाठ 6)।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> इन्हें \"check करने वाले फ़र्क\" की तरह बोलो, \"Postgres बेहतर है\" की तरह नहीं। SQL Server database port करते समय queries बदलने से पहले assumptions की list चलाओ (case, trailing spaces, identity, <code>TOP</code>, <code>GETDATE()</code> बनाम <code>now()</code>)।</p>",
        hg: "<ul>\n<li><b>Auto numbers:</b> <code>GENERATED ... AS IDENTITY</code> (Postgres 10+) naya tareeka hai; <code>serial</code> purana shorthand hai. Dono <b>sequence</b> use karte hain, aur rollback hua insert bhi ek number jala deta hai.</li>\n<li><b>Row wapas paana:</b> <code>RETURNING</code> (SQL Server: <code>OUTPUT</code>). <b>Paging:</b> <code>LIMIT n OFFSET m</code> (SQL Server: <code>TOP</code>, <code>OFFSET ... FETCH</code>).</li>\n<li><b>Keyset paging:</b> <code>LIMIT n OFFSET m</code> phir bhi pehli m rows padhkar phenkta hai, isliye gehra page dheema ho jaata hai. Iski jagah maango \"aakhiri dekhe id ke baad ki rows\".</li>\n<li><b>MERGE:</b> Postgres 15 se hai (MERGE par <code>RETURNING</code> 17 se). Ek key wale upsert ke liye <code>ON CONFLICT</code> ab bhi aasaan auzaar hai (lesson 6).</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> inhe \"check karne wale farq\" ki tarah bolo, \"Postgres behtar hai\" ki tarah nahi. SQL Server database port karte samay queries badalne se pehle assumptions ki list chalao (case, trailing spaces, identity, <code>TOP</code>, <code>GETDATE()</code> vs <code>now()</code>).</p>"
      },
      code: [
        {
          caption: {
            en: "PostgreSQL only: identity and keyset paging",
            hi: "सिर्फ़ PostgreSQL: identity और keyset paging",
            hg: "Sirf PostgreSQL: identity aur keyset paging"
          },
          lang: "sql",
          check: "none",
          src: "CREATE TABLE product (\n    product_id integer       GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    sku        varchar(20)   NOT NULL UNIQUE,\n    name       text          NOT NULL\n);\n\n-- keyset paging: ask for \"after the last id I saw\", not OFFSET 40\nSELECT product_id, name FROM product WHERE product_id > 40 ORDER BY product_id LIMIT 20;"
        }
      ]
    },
    {
      id: "jsonb-details",
      depth: "detailed",
      title: {
        en: "jsonb in more detail: GIN classes, index-only scans",
        hi: "jsonb ज़रा और गहराई से: GIN classes, index-only scans",
        hg: "jsonb zara aur gehraai se: GIN classes, index-only scans"
      },
      body: {
        en: "<ul>\n<li><b>GIN operator classes:</b> the default <code>jsonb_ops</code> serves <code>@&gt;</code> and the key-exists operators (<code>?</code>, <code>?|</code>, <code>?&amp;</code>). <code>jsonb_path_ops</code> is smaller and faster for <code>@&gt;</code>, <code>@?</code> and <code>@@</code>, but cannot serve key-exists. Puzzle 4 mirrors <code>@&gt;</code> in C#.</li>\n<li><b>Postgres-specific catch:</b> an index-only scan still checks the <b>visibility map</b>, so a table that autovacuum has not visited can fall back to reading the table. GIN indexes do not support index-only scans.</li>\n</ul>",
        hi: "<ul>\n<li><b>GIN operator classes:</b> default <code>jsonb_ops</code>, <code>@&gt;</code> और key-exists operators (<code>?</code>, <code>?|</code>, <code>?&amp;</code>) में मदद करता है। <code>jsonb_path_ops</code> छोटा है और <code>@&gt;</code>, <code>@?</code>, <code>@@</code> के लिए तेज़, पर key-exists में काम नहीं आता। Puzzle 4 <code>@&gt;</code> को C# में दोहराता है।</li>\n<li><b>Postgres की ख़ास बात:</b> index-only scan फिर भी <b>visibility map</b> देखता है, इसलिए जिस table पर autovacuum नहीं पहुँचा वह table पढ़ने पर लौट सकता है। GIN indexes index-only scans support नहीं करते।</li>\n</ul>",
        hg: "<ul>\n<li><b>GIN operator classes:</b> default <code>jsonb_ops</code>, <code>@&gt;</code> aur key-exists operators (<code>?</code>, <code>?|</code>, <code>?&amp;</code>) mein madad karta hai. <code>jsonb_path_ops</code> chhota hai aur <code>@&gt;</code>, <code>@?</code>, <code>@@</code> ke liye tez, par key-exists mein kaam nahi aata. Puzzle 4 <code>@&gt;</code> ko C# mein dohraata hai.</li>\n<li><b>Postgres ki khaas baat:</b> index-only scan phir bhi <b>visibility map</b> dekhta hai, isliye jis table par autovacuum nahi pahuncha woh table padhne par laut sakta hai. GIN indexes index-only scans support nahi karte.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "PostgreSQL only: a smaller GIN index for containment",
            hi: "सिर्फ़ PostgreSQL: containment के लिए छोटा GIN index",
            hg: "Sirf PostgreSQL: containment ke liye chhota GIN index"
          },
          lang: "sql",
          check: "none",
          src: "-- jsonb_path_ops: smaller; supports @>, @? and @@, not the ? key-exists operators\nCREATE INDEX ix_tickets_extras ON tickets USING gin (extras jsonb_path_ops);"
        }
      ]
    },
    {
      id: "efcore-npgsql-setup",
      depth: "detailed",
      title: {
        en: "EF Core with Npgsql: setup, JSON versions, pooling",
        hi: "Npgsql के साथ EF Core: setup, JSON versions, pooling",
        hg: "Npgsql ke saath EF Core: setup, JSON versions, pooling"
      },
      body: {
        en: "<ul>\n<li><b>Setup:</b> package <code>Npgsql.EntityFrameworkCore.PostgreSQL</code>, then <code>UseNpgsql(connectionString)</code> instead of <code>UseSqlServer</code>. Keep the connection string in configuration or a secret store, not in the code.</li>\n<li><b>JSON:</b> JSON mapping needs Npgsql provider 8.0 or later: <code>ToJson()</code> on an owned type stores it as <code>jsonb</code> (the snippet), and on EF Core 10 complex types with <code>ComplexProperty(...).ToJson()</code> are the recommended shape; the old <code>[Column(TypeName=\"jsonb\")]</code> POCO mapping is deprecated. Check the Npgsql JSON docs for your version.</li>\n<li><b>Pooling:</b> Npgsql pools connections by default (default maximum 100 per connection string); EF Core's <code>DbContext</code> pooling is a separate layer on top.</li>\n</ul>\n<p><b>When to use:</b> EF Core for CRUD and migrations; raw SQL (<code>ExecuteSqlAsync</code> or Dapper) for the Postgres-only features such as <code>ON CONFLICT</code> or JSONB operators you cannot express in LINQ. <b>When not:</b> do not assume SQL Server behaviour (case-insensitive compare, <code>DateTime.Now</code>) carries over, and do not multiply Npgsql <code>Max Pool Size</code> by many app instances against a small <code>max_connections</code> without a pooler.</p>",
        hi: "<ul>\n<li><b>Setup:</b> package <code>Npgsql.EntityFrameworkCore.PostgreSQL</code>, फिर <code>UseSqlServer</code> की जगह <code>UseNpgsql(connectionString)</code>। Connection string configuration या secret store में रखो, code में नहीं।</li>\n<li><b>JSON:</b> JSON mapping के लिए Npgsql provider 8.0 या उसके बाद चाहिए: owned type पर <code>ToJson()</code> उसे <code>jsonb</code> में रखता है (snippet), और EF Core 10 में <code>ComplexProperty(...).ToJson()</code> वाले complex types recommended हैं; पुराना <code>[Column(TypeName=\"jsonb\")]</code> POCO mapping deprecated है। अपने version का Npgsql JSON doc देखो।</li>\n<li><b>Pooling:</b> Npgsql default से connections pool करता है (हर connection string पर default maximum 100); EF Core का <code>DbContext</code> pooling उसके ऊपर अलग layer है।</li>\n</ul>\n<p><b>कब use करें:</b> CRUD और migrations के लिए EF Core; Postgres-only features (जैसे <code>ON CONFLICT</code> या JSONB operators जो LINQ में नहीं लिखे जा सकते) के लिए raw SQL (<code>ExecuteSqlAsync</code> या Dapper)। <b>कब नहीं:</b> यह मत मानो कि SQL Server का behaviour (case-insensitive compare, <code>DateTime.Now</code>) साथ चलेगा, और छोटे <code>max_connections</code> पर बिना pooler के Npgsql <code>Max Pool Size</code> को बहुत सारे app instances से गुणा मत होने दो।</p>",
        hg: "<ul>\n<li><b>Setup:</b> package <code>Npgsql.EntityFrameworkCore.PostgreSQL</code>, phir <code>UseSqlServer</code> ki jagah <code>UseNpgsql(connectionString)</code>. Connection string configuration ya secret store mein rakho, code mein nahi.</li>\n<li><b>JSON:</b> JSON mapping ke liye Npgsql provider 8.0 ya uske baad chahiye: owned type par <code>ToJson()</code> use <code>jsonb</code> mein rakhta hai (snippet), aur EF Core 10 mein <code>ComplexProperty(...).ToJson()</code> wale complex types recommended hain; purana <code>[Column(TypeName=\"jsonb\")]</code> POCO mapping deprecated hai. Apne version ka Npgsql JSON doc dekho.</li>\n<li><b>Pooling:</b> Npgsql default se connections pool karta hai (har connection string par default maximum 100); EF Core ka <code>DbContext</code> pooling uske upar alag layer hai.</li>\n</ul>\n<p><b>Kab use karein:</b> CRUD aur migrations ke liye EF Core; Postgres-only features (jaise <code>ON CONFLICT</code> ya JSONB operators jo LINQ mein nahi likhe ja sakte) ke liye raw SQL (<code>ExecuteSqlAsync</code> ya Dapper). <b>Kab nahi:</b> yeh mat maano ki SQL Server ka behaviour (case-insensitive compare, <code>DateTime.Now</code>) saath chalega, aur chhote <code>max_connections</code> par bina pooler ke Npgsql <code>Max Pool Size</code> ko bahut saare app instances se guna mat hone do.</p>"
      },
      code: [
        {
          caption: {
            en: "EF Core with Npgsql: UseNpgsql, snake_case names, a jsonb owned type, UTC time (compile check only; packages Npgsql.EntityFrameworkCore.PostgreSQL and EFCore.NamingConventions)",
            hi: "Npgsql के साथ EF Core: UseNpgsql, snake_case names, jsonb owned type, UTC time (सिर्फ़ compile check; packages Npgsql.EntityFrameworkCore.PostgreSQL और EFCore.NamingConventions)",
            hg: "Npgsql ke saath EF Core: UseNpgsql, snake_case names, jsonb owned type, UTC time (sirf compile check; packages Npgsql.EntityFrameworkCore.PostgreSQL aur EFCore.NamingConventions)"
          },
          check: "compile",
          packages: [
            "Npgsql.EntityFrameworkCore.PostgreSQL",
            "EFCore.NamingConventions"
          ],
          src: "using Microsoft.EntityFrameworkCore;\nusing Microsoft.Extensions.DependencyInjection;\n\npublic static class ShopDbRegistration\n{\n    // The connection string comes from configuration or a secret store, never from source code.\n    public static IServiceCollection AddShopDb(this IServiceCollection services, string connectionString) =>\n        services.AddDbContext<ShopContext>(o => o\n            .UseNpgsql(connectionString)\n            .UseSnakeCaseNamingConvention());   // customers, created_utc instead of quoted \"Customers\"\n}\n\npublic class ShopContext(DbContextOptions<ShopContext> options) : DbContext(options)\n{\n    public DbSet<Customer> Customers => Set<Customer>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder) =>\n        modelBuilder.Entity<Customer>(e =>\n        {\n            e.HasIndex(c => c.Email).IsUnique();   // case-sensitive in Postgres: also add a unique index on lower(email) in a migration (raw SQL)\n            e.OwnsOne(c => c.Profile, p => p.ToJson());   // stored as a jsonb column\n        });\n\n    public async Task<int> AddCustomerAsync(string email, string city, CancellationToken ct)\n    {\n        var customer = new Customer\n        {\n            Email = email,\n            CreatedUtc = DateTime.UtcNow,                  // timestamptz accepts only UTC DateTime\n            Profile = new CustomerProfile { City = city }\n        };\n        Customers.Add(customer);\n        await SaveChangesAsync(ct);\n        return customer.Id;\n    }\n}\n\npublic class Customer\n{\n    public int Id { get; set; }\n    public string Email { get; set; } = \"\";\n    public DateTime CreatedUtc { get; set; }\n    public CustomerProfile Profile { get; set; } = new();\n}\n\npublic class CustomerProfile\n{\n    public string City { get; set; } = \"\";\n}"
        }
      ]
    },
    {
      id: "nosql-stores",
      depth: "detailed",
      title: {
        en: "Cosmos DB, MongoDB and Redis in more detail",
        hi: "Cosmos DB, MongoDB और Redis थोड़ा और गहराई से",
        hg: "Cosmos DB, MongoDB aur Redis thoda aur gehraai se"
      },
      body: {
        en: "<ul>\n<li><b>Cosmos DB:</b> managed, globally distributed document store. You choose a <b>partition key</b>, pay in <b>Request Units (RU)</b> for throughput, and pick one of <b>five consistency levels</b> (Strong, Bounded staleness, Session, Consistent prefix, Eventual). A bad partition key gives a hot partition.</li>\n<li><b>MongoDB:</b> document model for aggregates read and written as a whole; flexible schema, rich queries. It has multi-document transactions, but joining across documents is not its strength.</li>\n<li><b>Redis:</b> in-memory structures (strings, hashes, sorted sets, streams) for cache, rate limits, leaderboards, short-lived state. Treat it as a cache unless you have designed its persistence on purpose (Day 13, Day 17).</li>\n</ul>",
        hi: "<ul>\n<li><b>Cosmos DB:</b> managed, globally distributed document store। तुम <b>partition key</b> चुनते हो, throughput के लिए <b>Request Units (RU)</b> में पैसे देते हो, और <b>पाँच consistency levels</b> में से एक चुनते हो (Strong, Bounded staleness, Session, Consistent prefix, Eventual)। गलत partition key से hot partition बनता है।</li>\n<li><b>MongoDB:</b> उन aggregates के लिए document model जो पूरे पढ़े और लिखे जाते हैं; flexible schema, rich queries। इसमें multi-document transactions हैं, पर documents के बीच join इसकी strength नहीं है।</li>\n<li><b>Redis:</b> in-memory structures (strings, hashes, sorted sets, streams) cache, rate limits, leaderboards, छोटी उम्र के state के लिए। इसे cache ही मानो, जब तक तुमने उसकी persistence जानबूझकर design न की हो (Day 13, Day 17)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Cosmos DB:</b> managed, globally distributed document store. Tum <b>partition key</b> chunte ho, throughput ke liye <b>Request Units (RU)</b> mein paise dete ho, aur <b>paanch consistency levels</b> mein se ek chunte ho (Strong, Bounded staleness, Session, Consistent prefix, Eventual). Galat partition key se hot partition banta hai.</li>\n<li><b>MongoDB:</b> un aggregates ke liye document model jo poore padhe aur likhe jaate hain; flexible schema, rich queries. Ismein multi-document transactions hain, par documents ke beech join iski strength nahi hai.</li>\n<li><b>Redis:</b> in-memory structures (strings, hashes, sorted sets, streams) cache, rate limits, leaderboards, chhoti umr ke state ke liye. Ise cache hi maano, jab tak tumne uski persistence jaanbujhkar design na ki ho (Day 13, Day 17).</li>\n</ul>"
      }
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
        en: "<p><b>Analogy — a bank with many counters:</b> customers are sent to a counter by a rule (the partition key). If the rule is \"by branch name\" and one branch has a huge crowd, one counter is jammed while the others sit idle. Cosmos DB has the same problem, called a <b>hot partition</b>.</p>\n<ul>\n<li>Every item has an <code>id</code> (unique within its logical partition) and a <b>partition key</b> value. Queries that include the key go to one partition; queries without it fan out across partitions and cost more <b>RU</b>.</li>\n<li>A good key has <b>many distinct values</b>, spreads writes evenly and appears in your most common queries. A single huge tenant can ruin <code>tenantId</code> as a key (puzzle 6), so a <b>synthetic key</b> such as <code>tenantId-bucket</code> spreads that tenant over several partitions.</li>\n<li>The trade-off: reads for one tenant now touch several partitions. Choose the bucket count from your write rate, and keep the key in the document so the SDK can use it.</li>\n<li>Consistency is a separate choice (Session is the account default and the most widely used level): the five levels trade latency and availability for freshness. Check current limits and pricing in the Azure docs, they change.</li>\n</ul>\n<p><b>When to use:</b> Cosmos DB for key-based access at large or global scale with predictable access patterns. <b>When not:</b> for ad-hoc reporting, many joins, or a small single-region app; a relational database is simpler and cheaper to reason about.</p>",
        hi: "<p><b>Analogy — कई counters वाला bank:</b> customers को एक rule (partition key) से counter पर भेजा जाता है। अगर rule \"branch के नाम से\" है और एक branch की भारी भीड़ है, तो एक counter जाम है और बाक़ी खाली बैठे हैं। Cosmos DB में यही दिक्कत होती है, जिसे <b>hot partition</b> कहते हैं।</p>\n<ul>\n<li>हर item का एक <code>id</code> होता है (अपने logical partition में unique) और एक <b>partition key</b> value। जिन queries में key होती है वे एक partition पर जाती हैं; बिना key वाली queries सब partitions में फैलती हैं और ज़्यादा <b>RU</b> खर्च करती हैं।</li>\n<li>अच्छी key में <b>बहुत सारी अलग values</b> होती हैं, writes बराबर फैलाती है और तुम्हारी सबसे common queries में आती है। एक बहुत बड़ा tenant <code>tenantId</code> को key के रूप में बिगाड़ सकता है (puzzle 6), इसलिए <code>tenantId-bucket</code> जैसी <b>synthetic key</b> उस tenant को कई partitions में फैला देती है।</li>\n<li>Trade-off: अब एक tenant की reads कई partitions को छूती हैं। Bucket count अपने write rate से चुनो, और key को document में रखो ताकि SDK उसे use कर सके।</li>\n<li>Consistency अलग चुनाव है (Session account default है और सबसे ज़्यादा use होने वाला level है): पाँच levels freshness के बदले latency और availability का सौदा करते हैं। Limits और pricing Azure docs में देखो, वे बदलती रहती हैं।</li>\n</ul>\n<p><b>कब use करें:</b> बड़े या global scale पर key-based access के लिए Cosmos DB, जहाँ access patterns पहले से पता हों। <b>कब नहीं:</b> ad-hoc reporting, बहुत सारे joins, या छोटी single-region app के लिए; relational database सरल और सस्ता है।</p>",
        hg: "<p><b>Analogy — kai counters wala bank:</b> customers ko ek rule (partition key) se counter par bheja jaata hai. Agar rule \"branch ke naam se\" hai aur ek branch ki bhaari bheed hai, to ek counter jaam hai aur baaki khaali baithe hain. Cosmos DB mein yahi dikkat hoti hai, jise <b>hot partition</b> kehte hain.</p>\n<ul>\n<li>Har item ka ek <code>id</code> hota hai (apne logical partition mein unique) aur ek <b>partition key</b> value. Jin queries mein key hoti hai woh ek partition par jaati hain; bina key wali queries sab partitions mein phailti hain aur zyada <b>RU</b> kharch karti hain.</li>\n<li>Achhi key mein <b>bahut saari alag values</b> hoti hain, writes barabar phailati hai aur tumhari sabse common queries mein aati hai. Ek bahut bada tenant <code>tenantId</code> ko key ke roop mein bigaad sakta hai (puzzle 6), isliye <code>tenantId-bucket</code> jaisi <b>synthetic key</b> us tenant ko kai partitions mein phaila deti hai.</li>\n<li>Trade-off: ab ek tenant ki reads kai partitions ko chhooti hain. Bucket count apne write rate se chuno, aur key ko document mein rakho taaki SDK use use kar sake.</li>\n<li>Consistency alag chunav hai (Session account default hai aur sabse zyada use hone wala level hai): paanch levels freshness ke badle latency aur availability ka sauda karte hain. Limits aur pricing Azure docs mein dekho, woh badalti rehti hain.</li>\n</ul>\n<p><b>Kab use karein:</b> bade ya global scale par key-based access ke liye Cosmos DB, jahan access patterns pehle se pata hon. <b>Kab nahi:</b> ad-hoc reporting, bahut saare joins, ya chhoti single-region app ke liye; relational database saral aur sasta hai.</p>"
      },
      code: [
        {
          caption: {
            en: "A Cosmos-style document with id, partition key and a synthetic bucket (plain C#, no Cosmos SDK needed)",
            hi: "id, partition key और synthetic bucket वाला Cosmos-style document (सादा C#, Cosmos SDK की ज़रूरत नहीं)",
            hg: "id, partition key aur synthetic bucket wala Cosmos-style document (saada C#, Cosmos SDK ki zaroorat nahi)"
          },
          check: "run",
          expected: "{\"id\":\"o-1001\",\"pk\":\"bigco-1\",\"tenantId\":\"bigco\",\"total\":250}",
          src: "using System.Text.Json;\nusing System.Text.Json.Serialization;\n\nvar doc = new OrderDoc(\"o-1001\", OrderDoc.PartitionKeyFor(\"bigco\", 1001), \"bigco\", 250m);\nConsole.WriteLine(JsonSerializer.Serialize(doc));\n\n// 'id' must be unique inside one logical partition; 'pk' holds the partition key value.\npublic record OrderDoc(\n    [property: JsonPropertyName(\"id\")] string Id,\n    [property: JsonPropertyName(\"pk\")] string Pk,\n    [property: JsonPropertyName(\"tenantId\")] string TenantId,\n    [property: JsonPropertyName(\"total\")] decimal Total)\n{\n    private const int Buckets = 8;   // pick from the write rate of your biggest tenant\n\n    // Synthetic key: a big tenant is spread over several partitions.\n    public static string PartitionKeyFor(string tenantId, int orderNo) => $\"{tenantId}-{orderNo % Buckets}\";\n}"
        }
      ]
    }
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
        en: "<ul>\n<li>Postgres: an UPDATE writes a new tuple and ends the old one; readers use snapshots, so they do not block writers. The cost is dead tuples and bloat until VACUUM.</li>\n<li>SQL Server: only when RCSI or SNAPSHOT is on do readers use versions (Day 18); otherwise READ COMMITTED takes shared locks. The versions sit in tempdb, so watch tempdb size.</li>\n<li>Follow-up: \"Which is better?\" Neither; each moves the cost somewhere else (table bloat vs tempdb load). Know where to look for each.</li>\n</ul>",
        hi: "<ul>\n<li>Postgres: UPDATE नया tuple लिखता है और पुराने को end करता है; readers snapshots use करते हैं, इसलिए writers को block नहीं करते। कीमत है dead tuples और bloat, VACUUM तक।</li>\n<li>SQL Server: RCSI या SNAPSHOT on हो तभी readers versions use करते हैं (Day 18); वरना READ COMMITTED shared locks लेता है। Versions tempdb में रहते हैं, इसलिए tempdb का size देखते रहो।</li>\n<li>Follow-up: \"कौन बेहतर है?\" कोई नहीं; दोनों cost को कहीं और ले जाते हैं (table bloat बनाम tempdb load)। दोनों में कहाँ देखना है यह जानो।</li>\n</ul>",
        hg: "<ul>\n<li>Postgres: UPDATE naya tuple likhta hai aur purane ko end karta hai; readers snapshots use karte hain, isliye writers ko block nahi karte. Keemat hai dead tuples aur bloat, VACUUM tak.</li>\n<li>SQL Server: RCSI ya SNAPSHOT on ho tabhi readers versions use karte hain (Day 18); warna READ COMMITTED shared locks leta hai. Versions tempdb mein rehte hain, isliye tempdb ka size dekhte raho.</li>\n<li>Follow-up: \"Kaun behtar hai?\" Koi nahi; dono cost ko kahin aur le jaate hain (table bloat vs tempdb load). Dono mein kahan dekhna hai yeh jaano.</li>\n</ul>"
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
        en: "<ul>\n<li>Dead versions cannot be removed while any open transaction could still need them, so one long or \"idle in transaction\" session can cause bloat everywhere.</li>\n<li>Plain VACUUM does not shrink the file much; <code>VACUUM FULL</code> rewrites the table under an exclusive lock, so treat it as a maintenance-window tool.</li>\n<li>VACUUM also freezes very old rows, which protects against transaction-id wraparound. Follow-up: \"What do you monitor?\" Dead tuple counts, last autovacuum time, longest open transaction.</li>\n</ul>",
        hi: "<ul>\n<li>जब तक कोई open transaction को उनकी ज़रूरत पड़ सकती है तब तक dead versions हटाए नहीं जा सकते, इसलिए एक लंबा या \"idle in transaction\" session हर जगह bloat करा सकता है।</li>\n<li>सादा VACUUM file को ज़्यादा छोटा नहीं करता; <code>VACUUM FULL</code> exclusive lock के साथ table दोबारा लिखता है, इसलिए उसे maintenance window का tool मानो।</li>\n<li>VACUUM बहुत पुरानी rows को freeze भी करता है, जो transaction-id wraparound से बचाता है। Follow-up: \"क्या monitor करोगे?\" Dead tuple counts, last autovacuum time, सबसे लंबा open transaction।</li>\n</ul>",
        hg: "<ul>\n<li>Jab tak koi open transaction ko unki zaroorat pad sakti hai tab tak dead versions hataye nahi ja sakte, isliye ek lamba ya \"idle in transaction\" session har jagah bloat kara sakta hai.</li>\n<li>Saada VACUUM file ko zyada chhota nahi karta; <code>VACUUM FULL</code> exclusive lock ke saath table dobara likhta hai, isliye use maintenance window ka tool maano.</li>\n<li>VACUUM bahut purani rows ko freeze bhi karta hai, jo transaction-id wraparound se bachata hai. Follow-up: \"Kya monitor karoge?\" Dead tuple counts, last autovacuum time, sabse lamba open transaction.</li>\n</ul>"
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
        en: "<ul>\n<li>Repeatable Read in Postgres is a snapshot for the whole transaction and does not allow phantom reads; it can fail with a serialization error, so the caller must retry. Serializable (SSI) adds conflict detection with the same retry rule.</li>\n<li>SQL Server's default READ COMMITTED uses locks, so readers can block writers unless RCSI is on (Day 18). That is the practical difference users feel.</li>\n<li>Follow-up: \"How do you lock a row on purpose?\" <code>SELECT ... FOR UPDATE</code>, with <code>SKIP LOCKED</code> for queue-like work.</li>\n</ul>",
        hi: "<ul>\n<li>Postgres में Repeatable Read पूरे transaction का snapshot है और phantom reads नहीं आने देता; उसमें serialization error आ सकता है, इसलिए caller को retry करना पड़ता है। Serializable में conflict detection जुड़ता है, retry का वही rule है।</li>\n<li>SQL Server का default READ COMMITTED locks use करता है, इसलिए RCSI on न हो तो readers writers को block कर सकते हैं (Day 18)। Users को यही practical फ़र्क महसूस होता है।</li>\n<li>Follow-up: \"जानबूझकर row lock कैसे करोगे?\" <code>SELECT ... FOR UPDATE</code>, और queue जैसे काम के लिए <code>SKIP LOCKED</code>।</li>\n</ul>",
        hg: "<ul>\n<li>Postgres mein Repeatable Read poore transaction ka snapshot hai aur phantom reads nahi aane deta; usme serialization error aa sakta hai, isliye caller ko retry karna padta hai. Serializable mein conflict detection judta hai, retry ka wahi rule hai.</li>\n<li>SQL Server ka default READ COMMITTED locks use karta hai, isliye RCSI on na ho to readers writers ko block kar sakte hain (Day 18). Users ko yahi practical farq mehsoos hota hai.</li>\n<li>Follow-up: \"Jaanbujhkar row lock kaise karoge?\" <code>SELECT ... FOR UPDATE</code>, aur queue jaise kaam ke liye <code>SKIP LOCKED</code>.</li>\n</ul>"
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
        en: "<ul>\n<li>A table created as <code>\"Orders\"</code> (quoted) must always be quoted; <code>SELECT * FROM Orders</code> looks for <code>orders</code> and fails with \"relation does not exist\". Puzzle 1 models the rule.</li>\n<li>For case-insensitive search: <code>ILIKE</code>, <code>lower(col)</code> with an expression index, or <code>citext</code>. Nondeterministic ICU collations also exist (Postgres 12+) but have limits that depend on the version.</li>\n<li>Follow-up: \"Trailing spaces?\" Postgres <code>text</code> compares them as data; SQL Server ignores trailing spaces in <code>=</code> (Day 18). Always test unique keys after a migration.</li>\n</ul>",
        hi: "<ul>\n<li><code>\"Orders\"</code> (quoted) बनी table को हमेशा quote करना पड़ता है; <code>SELECT * FROM Orders</code> <code>orders</code> ढूँढता है और \"relation does not exist\" से fail होता है। Puzzle 1 यही rule model करता है।</li>\n<li>Case-insensitive search के लिए: <code>ILIKE</code>, expression index के साथ <code>lower(col)</code>, या <code>citext</code>। Nondeterministic ICU collations भी हैं (Postgres 12+) पर version के हिसाब से उनकी limits हैं।</li>\n<li>Follow-up: \"Trailing spaces?\" Postgres <code>text</code> उन्हें data की तरह compare करता है; SQL Server <code>=</code> में trailing spaces ignore करता है (Day 18)। Migration के बाद unique keys ज़रूर test करो।</li>\n</ul>",
        hg: "<ul>\n<li><code>\"Orders\"</code> (quoted) bani table ko hamesha quote karna padta hai; <code>SELECT * FROM Orders</code> <code>orders</code> dhoondhta hai aur \"relation does not exist\" se fail hota hai. Puzzle 1 yahi rule model karta hai.</li>\n<li>Case-insensitive search ke liye: <code>ILIKE</code>, expression index ke saath <code>lower(col)</code>, ya <code>citext</code>. Nondeterministic ICU collations bhi hain (Postgres 12+) par version ke hisaab se unki limits hain.</li>\n<li>Follow-up: \"Trailing spaces?\" Postgres <code>text</code> unhe data ki tarah compare karta hai; SQL Server <code>=</code> mein trailing spaces ignore karta hai (Day 18). Migration ke baad unique keys zaroor test karo.</li>\n</ul>"
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
        en: "<ul>\n<li><code>ON CONFLICT</code> is a single atomic statement: you get either an insert or an update, with no race between a separate check and write. The conflict target must match a unique index or constraint.</li>\n<li>One statement cannot update the same key twice (puzzle 3): de-duplicate the batch first. <code>EXCLUDED</code> refers to the row you tried to insert.</li>\n<li>Postgres 15 added <code>MERGE</code>, which is more batch-oriented; 17 added <code>RETURNING</code> and <code>WHEN NOT MATCHED BY SOURCE</code> to it. Under concurrency <code>ON CONFLICT</code> is the usual choice for single-row idempotent writes. Follow-up: \"Why avoid MERGE in SQL Server?\" It has a history of bugs and race conditions; many teams prefer the explicit pattern.</li>\n</ul>",
        hi: "<ul>\n<li><code>ON CONFLICT</code> एक atomic statement है: या insert मिलता है या update, अलग check और write के बीच कोई race नहीं। Conflict target को unique index या constraint से match करना होता है।</li>\n<li>एक statement एक ही key को दो बार update नहीं कर सकता (puzzle 3): पहले batch को de-duplicate करो। <code>EXCLUDED</code> उस row को कहता है जो तुमने insert करने की कोशिश की।</li>\n<li>Postgres 15 में <code>MERGE</code> आया, जो ज़्यादा batch-oriented है; 17 ने उसमें <code>RETURNING</code> और <code>WHEN NOT MATCHED BY SOURCE</code> जोड़े। Concurrency में single-row idempotent writes के लिए आम choice <code>ON CONFLICT</code> है। Follow-up: \"SQL Server में MERGE से क्यों बचें?\" उसमें bugs और race conditions का इतिहास है; कई teams explicit pattern पसंद करती हैं।</li>\n</ul>",
        hg: "<ul>\n<li><code>ON CONFLICT</code> ek atomic statement hai: ya insert milta hai ya update, alag check aur write ke beech koi race nahi. Conflict target ko unique index ya constraint se match karna hota hai.</li>\n<li>Ek statement ek hi key ko do baar update nahi kar sakta (puzzle 3): pehle batch ko de-duplicate karo. <code>EXCLUDED</code> us row ko kehta hai jo tumne insert karne ki koshish ki.</li>\n<li>Postgres 15 mein <code>MERGE</code> aaya, jo zyada batch-oriented hai; 17 ne usme <code>RETURNING</code> aur <code>WHEN NOT MATCHED BY SOURCE</code> jode. Concurrency mein single-row idempotent writes ke liye aam choice <code>ON CONFLICT</code> hai. Follow-up: \"SQL Server mein MERGE se kyon bachein?\" Usme bugs aur race conditions ka itihaas hai; kai teams explicit pattern pasand karti hain.</li>\n</ul>"
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
        en: "<ul>\n<li>jsonb does not keep key order or duplicate keys; use <code>json</code> only if the original text matters (audit copy of a payload).</li>\n<li>Operators: <code>-&gt;</code> (jsonb), <code>-&gt;&gt;</code> (text), <code>@&gt;</code> (contains). The default GIN opclass also supports the key-exists operators; <code>jsonb_path_ops</code> is smaller but does not.</li>\n<li>For one hot field, an expression B-tree index on <code>(attrs -&gt;&gt; 'city')</code> can beat GIN. Postgres 17 added <code>JSON_TABLE()</code> to turn JSON into rows. Follow-up: \"SQL Server?\" JSON lives in text columns with <code>JSON_VALUE</code> and <code>OPENJSON</code> (before SQL Server 2025; 2025 and Azure SQL add a native <code>json</code> type); indexing usually goes through a computed column.</li>\n</ul>",
        hi: "<ul>\n<li>jsonb key order या duplicate keys नहीं रखता; <code>json</code> तभी use करो जब original text मायने रखे (payload की audit copy)।</li>\n<li>Operators: <code>-&gt;</code> (jsonb), <code>-&gt;&gt;</code> (text), <code>@&gt;</code> (contains)। Default GIN opclass key-exists operators भी support करता है; <code>jsonb_path_ops</code> छोटा है पर वे support नहीं करता।</li>\n<li>एक hot field के लिए <code>(attrs -&gt;&gt; 'city')</code> पर expression B-tree index GIN से बेहतर हो सकता है। Postgres 17 में JSON को rows बनाने वाला <code>JSON_TABLE()</code> आया। Follow-up: \"SQL Server?\" JSON text columns में रहता है, <code>JSON_VALUE</code> और <code>OPENJSON</code> के साथ (SQL Server 2025 से पहले; 2025 और Azure SQL में native <code>json</code> type आया); indexing आमतौर पर computed column से होती है।</li>\n</ul>",
        hg: "<ul>\n<li>jsonb key order ya duplicate keys nahi rakhta; <code>json</code> tabhi use karo jab original text maayne rakhe (payload ki audit copy).</li>\n<li>Operators: <code>-&gt;</code> (jsonb), <code>-&gt;&gt;</code> (text), <code>@&gt;</code> (contains). Default GIN opclass key-exists operators bhi support karta hai; <code>jsonb_path_ops</code> chhota hai par woh support nahi karta.</li>\n<li>Ek hot field ke liye <code>(attrs -&gt;&gt; 'city')</code> par expression B-tree index GIN se behtar ho sakta hai. Postgres 17 mein JSON ko rows banane wala <code>JSON_TABLE()</code> aaya. Follow-up: \"SQL Server?\" JSON text columns mein rehta hai, <code>JSON_VALUE</code> aur <code>OPENJSON</code> ke saath (SQL Server 2025 se pehle; 2025 aur Azure SQL mein native <code>json</code> type aaya); indexing aamtaur par computed column se hoti hai.</li>\n</ul>"
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
        en: "<ul>\n<li>Not index types but index shapes: <b>partial</b> (<code>WHERE</code>), <b>expression</b> (<code>lower(email)</code>), <b>covering</b> (<code>INCLUDE</code>, Postgres 11 for B-tree; GiST since 12, SP-GiST since 14).</li>\n<li>There is no clustered index; physical order is the heap. BRIN works only when column values correlate with physical order, such as an insert-time column.</li>\n<li>Follow-up: \"How do you add an index on a live table?\" <code>CREATE INDEX CONCURRENTLY</code> avoids blocking writes (it takes longer and cannot run inside a transaction block). Compare Day 18: SQL Server's clustered key choice does not exist here.</li>\n</ul>",
        hi: "<ul>\n<li>ये index types नहीं, index की shapes हैं: <b>partial</b> (<code>WHERE</code>), <b>expression</b> (<code>lower(email)</code>), <b>covering</b> (<code>INCLUDE</code>, B-tree के लिए Postgres 11; GiST में 12 से, SP-GiST में 14 से)।</li>\n<li>Clustered index नहीं है; physical order heap का है। BRIN तभी काम करता है जब column values physical order से मेल खाएँ, जैसे insert-time वाला column।</li>\n<li>Follow-up: \"Live table पर index कैसे जोड़ोगे?\" <code>CREATE INDEX CONCURRENTLY</code> writes को block नहीं करता (ज़्यादा समय लेता है और transaction block के अंदर नहीं चलता)। Day 18 से तुलना: SQL Server का clustered key वाला चुनाव यहाँ नहीं है।</li>\n</ul>",
        hg: "<ul>\n<li>Yeh index types nahi, index ki shapes hain: <b>partial</b> (<code>WHERE</code>), <b>expression</b> (<code>lower(email)</code>), <b>covering</b> (<code>INCLUDE</code>, B-tree ke liye Postgres 11; GiST mein 12 se, SP-GiST mein 14 se).</li>\n<li>Clustered index nahi hai; physical order heap ka hai. BRIN tabhi kaam karta hai jab column values physical order se mel khayein, jaise insert-time wala column.</li>\n<li>Follow-up: \"Live table par index kaise jodoge?\" <code>CREATE INDEX CONCURRENTLY</code> writes ko block nahi karta (zyada samay leta hai aur transaction block ke andar nahi chalta). Day 18 se tulna: SQL Server ka clustered key wala chunav yahan nahi hai.</li>\n</ul>"
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
        en: "<ul>\n<li>Cosmos DB: global distribution, tunable consistency, key-based reads. MongoDB: whole-document reads and writes with a flexible schema. Redis: cache, counters, rate limits, sorted sets (Day 13, Day 17).</li>\n<li>Name the access pattern and consistency need first. \"We might scale\" is not a measurement; Postgres with JSONB, read replicas and partitioning goes a long way.</li>\n<li>Follow-up: \"What do you give up?\" Joins, ad-hoc queries, cross-entity transactions, and familiarity. Say it out loud; interviewers listen for trade-offs, not product names.</li>\n</ul>",
        hi: "<ul>\n<li>Cosmos DB: global distribution, tunable consistency, key-based reads। MongoDB: flexible schema के साथ पूरे document की reads और writes। Redis: cache, counters, rate limits, sorted sets (Day 13, Day 17)।</li>\n<li>पहले access pattern और consistency की ज़रूरत बताओ। \"शायद scale करना पड़े\" कोई measurement नहीं है; JSONB, read replicas और partitioning के साथ Postgres काफ़ी दूर जाता है।</li>\n<li>Follow-up: \"क्या छोड़ना पड़ता है?\" Joins, ad-hoc queries, cross-entity transactions, और जान-पहचान। यह ज़ोर से बोलो; interviewers trade-offs सुनते हैं, product names नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Cosmos DB: global distribution, tunable consistency, key-based reads. MongoDB: flexible schema ke saath poore document ki reads aur writes. Redis: cache, counters, rate limits, sorted sets (Day 13, Day 17).</li>\n<li>Pehle access pattern aur consistency ki zaroorat batao. \"Shayad scale karna pade\" koi measurement nahi hai; JSONB, read replicas aur partitioning ke saath Postgres kaafi door jaata hai.</li>\n<li>Follow-up: \"Kya chhodna padta hai?\" Joins, ad-hoc queries, cross-entity transactions, aur jaan-pehchaan. Yeh zor se bolo; interviewers trade-offs sunte hain, product names nahi.</li>\n</ul>"
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
        en: "<ul>\n<li><code>GENERATED ALWAYS</code> rejects explicit values unless you override on purpose; <code>BY DEFAULT</code> allows them. A plain sequence is a separate object you can share between tables.</li>\n<li>Sequence values are handed out outside the transaction, so a rollback or crash leaves a gap. Never promise gap-free invoice numbers from an identity; use a separate counter table with locking if law requires it.</li>\n<li>For distributed ids, Postgres 18 added <code>uuidv7()</code> (time-ordered UUIDs, friendlier to B-tree indexes than random v4); .NET has <code>Guid.CreateVersion7()</code> since .NET 9.</li>\n</ul>",
        hi: "<ul>\n<li><code>GENERATED ALWAYS</code> explicit values reject करता है जब तक तुम जानबूझकर override न करो; <code>BY DEFAULT</code> उन्हें allow करता है। सादा sequence अलग object है जिसे tables के बीच share किया जा सकता है।</li>\n<li>Sequence values transaction के बाहर दिए जाते हैं, इसलिए rollback या crash से gap बनता है। Identity से gap-free invoice numbers का वादा मत करो; क़ानून माँगे तो locking वाली अलग counter table use करो।</li>\n<li>Distributed ids के लिए Postgres 18 में <code>uuidv7()</code> आया (time-ordered UUIDs, random v4 से B-tree indexes के लिए बेहतर); .NET 9 से <code>Guid.CreateVersion7()</code> है।</li>\n</ul>",
        hg: "<ul>\n<li><code>GENERATED ALWAYS</code> explicit values reject karta hai jab tak tum jaanbujhkar override na karo; <code>BY DEFAULT</code> unhe allow karta hai. Saada sequence alag object hai jise tables ke beech share kiya ja sakta hai.</li>\n<li>Sequence values transaction ke bahar diye jaate hain, isliye rollback ya crash se gap banta hai. Identity se gap-free invoice numbers ka vaada mat karo; kanoon maange to locking wali alag counter table use karo.</li>\n<li>Distributed ids ke liye Postgres 18 mein <code>uuidv7()</code> aaya (time-ordered UUIDs, random v4 se B-tree indexes ke liye behtar); .NET 9 se <code>Guid.CreateVersion7()</code> hai.</li>\n</ul>"
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
        en: "<ul>\n<li><code>RETURNING</code> saves a second round trip, for example to read the generated id or the new version number after an upsert.</li>\n<li>Postgres also accepts the standard <code>FETCH FIRST n ROWS ONLY</code>. SQL Server needs <code>ORDER BY</code> with <code>OFFSET ... FETCH</code>; <code>TOP</code> has no offset.</li>\n<li>Deep paging with OFFSET gets slower with each page and can skip or repeat rows when data changes. Prefer keyset paging (<code>WHERE id &gt; @last ORDER BY id LIMIT n</code>) with an index on the sort key. Follow-up: \"What if users need page numbers?\" Cap the depth or accept the cost.</li>\n</ul>",
        hi: "<ul>\n<li><code>RETURNING</code> दूसरा round trip बचाता है, जैसे upsert के बाद generated id या नया version number पढ़ने के लिए।</li>\n<li>Postgres standard <code>FETCH FIRST n ROWS ONLY</code> भी मानता है। SQL Server में <code>OFFSET ... FETCH</code> के साथ <code>ORDER BY</code> चाहिए; <code>TOP</code> में offset नहीं होता।</li>\n<li>OFFSET वाली deep paging हर page के साथ धीमी होती जाती है और data बदलने पर rows छोड़ या दोहरा सकती है। Sort key पर index के साथ keyset paging (<code>WHERE id &gt; @last ORDER BY id LIMIT n</code>) बेहतर है। Follow-up: \"अगर users को page numbers चाहिए?\" Depth की limit रखो या cost मानो।</li>\n</ul>",
        hg: "<ul>\n<li><code>RETURNING</code> doosra round trip bachata hai, jaise upsert ke baad generated id ya naya version number padhne ke liye.</li>\n<li>Postgres standard <code>FETCH FIRST n ROWS ONLY</code> bhi maanta hai. SQL Server mein <code>OFFSET ... FETCH</code> ke saath <code>ORDER BY</code> chahiye; <code>TOP</code> mein offset nahi hota.</li>\n<li>OFFSET wali deep paging har page ke saath dheemi hoti jaati hai aur data badalne par rows chhod ya dohra sakti hai. Sort key par index ke saath keyset paging (<code>WHERE id &gt; @last ORDER BY id LIMIT n</code>) behtar hai. Follow-up: \"Agar users ko page numbers chahiye?\" Depth ki limit rakho ya cost maano.</li>\n</ul>"
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
        en: "<ul>\n<li>Partial: <code>CREATE INDEX ... WHERE status = 1</code> for \"open orders\". SQL Server's filtered index (Day 18) is the same idea; both need the query predicate to imply the index predicate.</li>\n<li>Expression: <code>CREATE UNIQUE INDEX ... (lower(email))</code> gives case-insensitive uniqueness without citext. The query must say <code>lower(email) = lower(@e)</code>, or the planner will not use it.</li>\n<li>Each index costs write time and space, and a partial index with a parameterised predicate may not match. Follow-up: \"How do you check?\" <code>EXPLAIN (ANALYZE)</code> and the index usage statistics.</li>\n</ul>",
        hi: "<ul>\n<li>Partial: \"open orders\" के लिए <code>CREATE INDEX ... WHERE status = 1</code>। SQL Server का filtered index (Day 18) यही idea है; दोनों में query predicate को index predicate imply करना चाहिए।</li>\n<li>Expression: <code>CREATE UNIQUE INDEX ... (lower(email))</code> citext के बिना case-insensitive uniqueness देता है। Query में <code>lower(email) = lower(@e)</code> लिखना होगा, वरना planner उसे use नहीं करेगा।</li>\n<li>हर index write time और जगह की कीमत लेता है, और parameterised predicate वाला partial index match न भी हो सकता है। Follow-up: \"कैसे check करोगे?\" <code>EXPLAIN (ANALYZE)</code> और index usage statistics।</li>\n</ul>",
        hg: "<ul>\n<li>Partial: \"open orders\" ke liye <code>CREATE INDEX ... WHERE status = 1</code>. SQL Server ka filtered index (Day 18) yahi idea hai; dono mein query predicate ko index predicate imply karna chahiye.</li>\n<li>Expression: <code>CREATE UNIQUE INDEX ... (lower(email))</code> citext ke bina case-insensitive uniqueness deta hai. Query mein <code>lower(email) = lower(@e)</code> likhna hoga, warna planner use use nahi karega.</li>\n<li>Har index write time aur jagah ki keemat leta hai, aur parameterised predicate wala partial index match na bhi ho sakta hai. Follow-up: \"Kaise check karoge?\" <code>EXPLAIN (ANALYZE)</code> aur index usage statistics.</li>\n</ul>"
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
        en: "<ul>\n<li>Migrations must be regenerated for the new provider; do not reuse SQL Server migration files (Day 5 and 6). Types change: <code>nvarchar</code> becomes <code>text</code> or <code>varchar</code>, <code>datetime2</code> becomes <code>timestamp</code> or <code>timestamptz</code>.</li>\n<li>Case-sensitive <code>Where(c =&gt; c.Name == x)</code> may now miss rows that matched on SQL Server. Run your integration tests against a real Postgres (for example in a container), not SQLite or in-memory: they hide exactly these differences.</li>\n<li>Concurrency tokens differ: Postgres uses the <code>xmin</code> system column as a row version, not a <code>rowversion</code> column. Check the Npgsql docs for the current mapping.</li>\n</ul>",
        hi: "<ul>\n<li>नए provider के लिए migrations दोबारा बनानी होंगी; SQL Server की migration files reuse मत करो (Day 5 और 6)। Types बदलते हैं: <code>nvarchar</code> <code>text</code> या <code>varchar</code> बनता है, <code>datetime2</code> <code>timestamp</code> या <code>timestamptz</code> बनता है।</li>\n<li>Case-sensitive <code>Where(c =&gt; c.Name == x)</code> अब वे rows miss कर सकता है जो SQL Server पर match होती थीं। Integration tests असली Postgres पर चलाओ (जैसे container में), SQLite या in-memory पर नहीं: वे ठीक यही फ़र्क छुपाते हैं।</li>\n<li>Concurrency tokens अलग हैं: Postgres row version के लिए <code>xmin</code> system column use करता है, <code>rowversion</code> column नहीं। मौजूदा mapping के लिए Npgsql docs देखो।</li>\n</ul>",
        hg: "<ul>\n<li>Naye provider ke liye migrations dobara banani hongi; SQL Server ki migration files reuse mat karo (Day 5 aur 6). Types badalte hain: <code>nvarchar</code> <code>text</code> ya <code>varchar</code> banta hai, <code>datetime2</code> <code>timestamp</code> ya <code>timestamptz</code> banta hai.</li>\n<li>Case-sensitive <code>Where(c =&gt; c.Name == x)</code> ab woh rows miss kar sakta hai jo SQL Server par match hoti thi. Integration tests asli Postgres par chalao (jaise container mein), SQLite ya in-memory par nahi: woh theek yahi farq chhupate hain.</li>\n<li>Concurrency tokens alag hain: Postgres row version ke liye <code>xmin</code> system column use karta hai, <code>rowversion</code> column nahi. Maujooda mapping ke liye Npgsql docs dekho.</li>\n</ul>"
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
        en: "<ul>\n<li>Math to say aloud: 50 pods x Npgsql default maximum 100 = up to 5,000 possible connections against a server with a <code>max_connections</code> of around 100 by default. Lower the per-pod maximum or add PgBouncer.</li>\n<li>PgBouncer modes: session, transaction, statement. <b>Transaction</b> mode gives the best sharing but breaks session state (<code>SET</code>, session advisory locks, <code>LISTEN</code>); check the Npgsql docs for settings with PgBouncer.</li>\n<li>Same discipline as SQL Server (Day 6): short-lived <code>DbContext</code>, open late, close early. Follow-up: \"Symptom of exhaustion?\" Timeouts waiting for a connection from the pool, or \"too many clients\" errors.</li>\n</ul>",
        hi: "<ul>\n<li>ज़ोर से बोलने वाला हिसाब: 50 pods x Npgsql का default maximum 100 = ऐसे server पर 5,000 तक connections, जिसका <code>max_connections</code> default से लगभग 100 है। Per-pod maximum घटाओ या PgBouncer लगाओ।</li>\n<li>PgBouncer modes: session, transaction, statement। <b>Transaction</b> mode में sharing सबसे अच्छी है पर session state टूटता है (<code>SET</code>, session advisory locks, <code>LISTEN</code>); PgBouncer के साथ settings के लिए Npgsql docs देखो।</li>\n<li>वही discipline जो SQL Server में (Day 6): छोटी उम्र का <code>DbContext</code>, देर से खोलो, जल्दी बंद करो। Follow-up: \"Exhaustion के symptoms?\" Pool से connection मिलने का इंतज़ार करते timeouts, या \"too many clients\" errors।</li>\n</ul>",
        hg: "<ul>\n<li>Zor se bolne wala hisaab: 50 pods x Npgsql ka default maximum 100 = aise server par 5,000 tak connections, jiska <code>max_connections</code> default se lagbhag 100 hai. Per-pod maximum ghatao ya PgBouncer lagao.</li>\n<li>PgBouncer modes: session, transaction, statement. <b>Transaction</b> mode mein sharing sabse achhi hai par session state tootta hai (<code>SET</code>, session advisory locks, <code>LISTEN</code>); PgBouncer ke saath settings ke liye Npgsql docs dekho.</li>\n<li>Wahi discipline jo SQL Server mein (Day 6): chhoti umr ka <code>DbContext</code>, der se kholo, jaldi band karo. Follow-up: \"Exhaustion ke symptoms?\" Pool se connection milne ka intezaar karte timeouts, ya \"too many clients\" errors.</li>\n</ul>"
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
        en: "<ul>\n<li>Throughput (RU) is spread across physical partitions, so one hot key cannot use the container's whole provisioned throughput. Cross-partition queries fan out and cost more RU.</li>\n<li>Fixes: a higher-cardinality key (<code>userId</code> instead of <code>country</code>), or a synthetic key like <code>tenantId-bucket</code> (puzzle 6). Time-only keys are risky: all current writes hit today's partition.</li>\n<li>Follow-up: \"Can you change the key later?\" Treat it as hard to change; plan a data migration. Check the current docs for limits and the newer hierarchical partition keys.</li>\n</ul>",
        hi: "<ul>\n<li>Throughput (RU) physical partitions में बँटा होता है, इसलिए एक hot key container का पूरा provisioned throughput use नहीं कर सकती। Cross-partition queries फैलती हैं और ज़्यादा RU लेती हैं।</li>\n<li>Fixes: ज़्यादा cardinality वाली key (<code>country</code> की जगह <code>userId</code>), या <code>tenantId-bucket</code> जैसी synthetic key (puzzle 6)। सिर्फ़ time वाली keys जोखिम भरी हैं: सारी मौजूदा writes आज के partition पर आती हैं।</li>\n<li>Follow-up: \"Key बाद में बदल सकते हो?\" इसे बदलना मुश्किल मानो; data migration की planning करो। Limits और नई hierarchical partition keys के लिए current docs देखो।</li>\n</ul>",
        hg: "<ul>\n<li>Throughput (RU) physical partitions mein bantta hai, isliye ek hot key poore container ka provisioned throughput use nahi kar sakti. Cross-partition queries phailti hain aur zyada RU leti hain.</li>\n<li>Fixes: zyada cardinality wali key (<code>country</code> ki jagah <code>userId</code>), ya <code>tenantId-bucket</code> jaisi synthetic key (puzzle 6). Sirf time wali keys jokhim bhari hain: saari maujooda writes aaj ke partition par aati hain.</li>\n<li>Follow-up: \"Key baad mein badal sakte ho?\" Ise badalna mushkil maano; data migration ki planning karo. Limits aur nayi hierarchical partition keys ke liye current docs dekho.</li>\n</ul>"
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
        en: "<ul>\n<li>Stronger levels give fresher reads but cost latency and availability across regions; weaker ones are cheaper and faster. Strong and Bounded staleness reads cost about twice the RU of the weaker levels, per the Cosmos DB docs.</li>\n<li>Choose by user-visible harm: money or inventory may need Strong or Bounded; a \"likes\" counter can be Eventual; user-facing profile edits suit Session.</li>\n<li>Link to Day 17: this is the CAP/PACELC trade-off in a product. Follow-up: \"Can you override per request?\" Yes, but only to relax it (weaker than the account default) and only for reads; to strengthen, change the account default. A preview <code>ReadConsistencyStrategy</code> option exists in newer .NET SDKs, check the docs.</li>\n</ul>",
        hi: "<ul>\n<li>Strong levels ज़्यादा fresh reads देते हैं पर regions के बीच latency और availability की कीमत पर; weak levels सस्ते और तेज़ हैं। Cosmos DB docs के अनुसार Strong और Bounded staleness reads का RU cost weak levels से लगभग दोगुना है।</li>\n<li>User को दिखने वाले नुक़सान से चुनो: पैसे या inventory को Strong या Bounded चाहिए; \"likes\" counter Eventual हो सकता है; user की profile edits के लिए Session ठीक है।</li>\n<li>Day 17 से link: यह product में CAP/PACELC trade-off है। Follow-up: \"Per request override कर सकते हो?\" हाँ, पर सिर्फ़ उसे हल्का करने के लिए (account default से weaker) और सिर्फ़ reads के लिए; मज़बूत करना हो तो account default बदलो। नए .NET SDKs में preview <code>ReadConsistencyStrategy</code> option है, docs देखो।</li>\n</ul>",
        hg: "<ul>\n<li>Strong levels zyada fresh reads dete hain par regions ke beech latency aur availability ki keemat par; weak levels sasta aur tez hain. Cosmos DB docs ke anusaar Strong aur Bounded staleness reads ka RU cost weak levels se lagbhag double hai.</li>\n<li>User ko dikhne wale nuksaan se chuno: paise ya inventory ko Strong ya Bounded chahiye; \"likes\" counter Eventual ho sakta hai; user ki profile edits ke liye Session theek hai.</li>\n<li>Day 17 se link: yeh product mein CAP/PACELC trade-off hai. Follow-up: \"Per request override kar sakte ho?\" Haan, par sirf use halka karne ke liye (account default se weaker) aur sirf reads ke liye; mazboot karna ho to account default badlo. Naye .NET SDKs mein preview <code>ReadConsistencyStrategy</code> option hai, docs dekho.</li>\n</ul>"
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
        en: "<ul>\n<li>Redis: a cache-aside layer (Day 13), distributed locks and rate limits with care, leaderboards with sorted sets. Persistence options exist, but design them deliberately before storing anything you cannot rebuild.</li>\n<li>MongoDB: good when the aggregate is one document (an order with its lines). It supports multi-document transactions, but heavy cross-document joins and constraints are easier in a relational database.</li>\n<li>TL angle: each added store needs an owner, backups, monitoring and a failure story. Follow-up: \"Cache says price 100, database says 120?\" Define TTL and invalidation; the database is the truth.</li>\n</ul>",
        hi: "<ul>\n<li>Redis: cache-aside layer (Day 13), सावधानी के साथ distributed locks और rate limits, sorted sets से leaderboards। Persistence options हैं, पर कुछ भी जो दोबारा न बन सके उसे रखने से पहले उन्हें सोच-समझकर design करो।</li>\n<li>MongoDB: तब अच्छा जब aggregate एक document हो (lines के साथ order)। उसमें multi-document transactions हैं, पर भारी cross-document joins और constraints relational database में आसान हैं।</li>\n<li>TL angle: हर जोड़े गए store को owner, backups, monitoring और failure की कहानी चाहिए। Follow-up: \"Cache में price 100, database में 120?\" TTL और invalidation तय करो; सच database है।</li>\n</ul>",
        hg: "<ul>\n<li>Redis: cache-aside layer (Day 13), saavdhaani ke saath distributed locks aur rate limits, sorted sets se leaderboards. Persistence options hain, par kuch bhi jo dobara na ban sake use rakhne se pehle unhe soch-samajhkar design karo.</li>\n<li>MongoDB: tab achha jab aggregate ek document ho (lines ke saath order). Usme multi-document transactions hain, par bhaari cross-document joins aur constraints relational database mein aasaan hain.</li>\n<li>TL angle: har jode gaye store ko owner, backups, monitoring aur failure ki kahani chahiye. Follow-up: \"Cache mein price 100, database mein 120?\" TTL aur invalidation tay karo; sach database hai.</li>\n</ul>"
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
        en: "<ul>\n<li>Decision checklist: access pattern, consistency needed, volume and growth, team skills, on-call cost, exit plan. Write a short design note (Day 17 style) and name what you tried first, such as an index, cache or read replica.</li>\n<li>Keeping stores in sync: write to the database of record and publish an event through an outbox (Day 16), then update the second store from that event. Accept eventual consistency and make consumers idempotent.</li>\n<li>Postgres can already do a lot (jsonb, full-text search, queues with <code>SKIP LOCKED</code>), so ask whether the new store replaces real pain or just fashion.</li>\n</ul>",
        hi: "<ul>\n<li>Decision checklist: access pattern, ज़रूरी consistency, volume और growth, team की skills, on-call cost, exit plan। छोटा design note लिखो (Day 17 style) और बताओ कि पहले क्या आज़माया, जैसे index, cache या read replica।</li>\n<li>Stores को sync रखना: system-of-record database में लिखो और outbox (Day 16) से event publish करो, फिर उस event से दूसरा store update करो। Eventual consistency मानो और consumers को idempotent बनाओ।</li>\n<li>Postgres पहले से बहुत कुछ कर सकता है (jsonb, full-text search, <code>SKIP LOCKED</code> वाली queues), इसलिए पूछो कि नया store असली दर्द की जगह आ रहा है या सिर्फ़ fashion की।</li>\n</ul>",
        hg: "<ul>\n<li>Decision checklist: access pattern, zaroori consistency, volume aur growth, team ki skills, on-call cost, exit plan. Chhota design note likho (Day 17 style) aur batao ki pehle kya aazmaya, jaise index, cache ya read replica.</li>\n<li>Stores ko sync rakhna: system-of-record database mein likho aur outbox (Day 16) se event publish karo, phir us event se doosra store update karo. Eventual consistency maano aur consumers ko idempotent banao.</li>\n<li>Postgres pehle se bahut kuch kar sakta hai (jsonb, full-text search, <code>SKIP LOCKED</code> wali queues), isliye pucho ki naya store asli dard ki jagah aa raha hai ya sirf fashion ki.</li>\n</ul>"
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
        en: "<ul>\n<li>Look at <code>pg_stat_user_tables</code> (dead tuples, last autovacuum) and <code>pg_stat_activity</code> (old transactions, idle in transaction). Then <code>EXPLAIN (ANALYZE, BUFFERS)</code> on the slow query, as with Day 18 plans.</li>\n<li>Typical causes: an app that opens a transaction and waits (a missing <code>await</code>, or a call to another service inside it), a very high update rate, or autovacuum settings too relaxed for that table.</li>\n<li>Remedies: fix the app, tune autovacuum for that table, and if space must shrink use a rewrite tool in a window. Mention frequent updates of the same row as a design smell.</li>\n</ul>",
        hi: "<ul>\n<li><code>pg_stat_user_tables</code> (dead tuples, last autovacuum) और <code>pg_stat_activity</code> (पुराने transactions, idle in transaction) देखो। फिर slow query पर <code>EXPLAIN (ANALYZE, BUFFERS)</code>, जैसे Day 18 के plans।</li>\n<li>आम कारण: ऐसी app जो transaction खोलकर इंतज़ार करती है (छूटा हुआ <code>await</code>, या उसके अंदर दूसरी service की call), बहुत ऊँचा update rate, या उस table के लिए autovacuum settings ज़्यादा ढीली।</li>\n<li>Remedies: app ठीक करो, उस table के लिए autovacuum tune करो, और space घटाना ही हो तो window में rewrite tool use करो। एक ही row के बार-बार updates को design smell बताओ।</li>\n</ul>",
        hg: "<ul>\n<li><code>pg_stat_user_tables</code> (dead tuples, last autovacuum) aur <code>pg_stat_activity</code> (purane transactions, idle in transaction) dekho. Phir slow query par <code>EXPLAIN (ANALYZE, BUFFERS)</code>, jaise Day 18 ke plans.</li>\n<li>Aam kaaran: aisi app jo transaction kholkar intezaar karti hai (chhoota hua <code>await</code>, ya uske andar doosri service ki call), bahut ooncha update rate, ya us table ke liye autovacuum settings zyada dheeli.</li>\n<li>Remedies: app theek karo, us table ke liye autovacuum tune karo, aur space ghatana hi ho to window mein rewrite tool use karo. Ek hi row ke baar-baar updates ko design smell batao.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "fold-identifiers",
      src: "// A toy model of the PostgreSQL naming rule (not a SQL parser):\n// unquoted names are folded to lower case, \"quoted\" names are kept exactly.\nvar catalog = new HashSet<string>(StringComparer.Ordinal) { \"orders\", \"Order Lines\" };\n\nforeach (var written in new[] { \"Orders\", \"\\\"Orders\\\"\", \"ORDERS\", \"\\\"Order Lines\\\"\" })\n{\n    var resolved = written.StartsWith('\"') ? written.Trim('\"') : written.ToLowerInvariant();\n    Console.WriteLine($\"{written} -> {resolved}: {(catalog.Contains(resolved) ? \"found\" : \"missing\")}\");\n}",
      answer: "Orders -> orders: found\n\"Orders\" -> Orders: missing\nORDERS -> orders: found\n\"Order Lines\" -> Order Lines: found",
      explain: {
        en: "<p>The table was created as <code>orders</code> (unquoted), so <code>Orders</code> and <code>ORDERS</code> fold to <code>orders</code> and are found. <code>\"Orders\"</code> keeps its capital O, so it points to a table that does not exist: in real Postgres you get \"relation does not exist\". <code>\"Order Lines\"</code> was created quoted, so it is found only when quoted exactly. This is why EF Core's quoted PascalCase names surprise people in psql, and why teams pick snake_case.</p>",
        hi: "<p>Table <code>orders</code> (बिना quote) के नाम से बनी थी, इसलिए <code>Orders</code> और <code>ORDERS</code> fold होकर <code>orders</code> बनते हैं और मिल जाते हैं। <code>\"Orders\"</code> का बड़ा O रहता है, इसलिए वह ऐसी table की तरफ़ जाता है जो है ही नहीं: असली Postgres में \"relation does not exist\" मिलता है। <code>\"Order Lines\"</code> quoted बनी थी, इसलिए वह तभी मिलती है जब ठीक वैसे ही quote किया जाए। इसीलिए EF Core के quoted PascalCase names psql में लोगों को चौंकाते हैं, और teams snake_case चुनती हैं।</p>",
        hg: "<p>Table <code>orders</code> (bina quote) ke naam se bani thi, isliye <code>Orders</code> aur <code>ORDERS</code> fold hokar <code>orders</code> bante hain aur mil jaate hain. <code>\"Orders\"</code> ka bada O rehta hai, isliye woh aisi table ki taraf jaata hai jo hai hi nahi: asli Postgres mein \"relation does not exist\" milta hai. <code>\"Order Lines\"</code> quoted bani thi, isliye woh tabhi milti hai jab theek waise hi quote kiya jaaye. Isiliye EF Core ke quoted PascalCase names psql mein logon ko chaunkate hain, aur teams snake_case chunti hain.</p>"
      }
    },
    {
      id: "mvcc-visibility",
      src: "// A toy MVCC model: every row version has xmin (creator) and xmax (deleter, 0 = none).\n// A snapshot is the set of transactions that were committed when it was taken.\nvar table = new List<RowVersion>\n{\n    new(Xmin: 10, Xmax: 30, Balance: 100),  // original row, ended by transaction 30\n    new(Xmin: 30, Xmax: 0,  Balance: 150),  // the version written by transaction 30\n};\n\nvar snapshotOfReader20 = new HashSet<int> { 10 };       // taken before 30 committed\nvar snapshotOfReader40 = new HashSet<int> { 10, 30 };   // taken after 30 committed\n\nint? Read(HashSet<int> snapshot) => table\n    .Where(v => snapshot.Contains(v.Xmin) && (v.Xmax == 0 || !snapshot.Contains(v.Xmax)))\n    .Select(v => (int?)v.Balance)\n    .SingleOrDefault();\n\nConsole.WriteLine($\"reader20 sees {Read(snapshotOfReader20)}\");\nConsole.WriteLine($\"reader40 sees {Read(snapshotOfReader40)}\");\nConsole.WriteLine($\"versions in table: {table.Count}\");\n\n// Once reader 20 has finished, the oldest snapshot still open is reader 40's.\nvar dead = table.Count(v => v.Xmax != 0 && snapshotOfReader40.Contains(v.Xmax));\nConsole.WriteLine($\"dead for VACUUM: {dead}\");\n\nrecord RowVersion(int Xmin, int Xmax, int Balance);",
      answer: "reader20 sees 100\nreader40 sees 150\nversions in table: 2\ndead for VACUUM: 1",
      explain: {
        en: "<p>One UPDATE left <b>two versions in the table</b>. Reader 20 started before transaction 30 committed, so version 2 is invisible to it and version 1 (whose deleter 30 it cannot see) is still visible: <b>100</b>. Reader 40 sees 30 as committed, so version 1 is ended and version 2 is visible: <b>150</b>. When no open snapshot can see the old version any more, it is <b>dead</b> and VACUUM can reclaim it. Real Postgres snapshots also track in-progress transactions (and a long-open reader delays this cleanup), but the visibility idea is the same.</p>",
        hi: "<p>एक UPDATE ने <b>table में दो versions</b> छोड़े। Reader 20 transaction 30 के commit होने से पहले शुरू हुआ था, इसलिए version 2 उसे दिखता नहीं और version 1 (जिसका deleter 30 वह नहीं देख सकता) अब भी दिखता है: <b>100</b>। Reader 40 को 30 committed दिखता है, इसलिए version 1 ended है और version 2 दिखता है: <b>150</b>। जब कोई open snapshot पुराने version को देख न सके, वह <b>dead</b> है और VACUUM उसे वापस ले सकता है। असली Postgres snapshots in-progress transactions भी track करते हैं (और लंबा open reader इस cleanup को रोकता है), पर visibility का idea यही है।</p>",
        hg: "<p>Ek UPDATE ne <b>table mein do versions</b> chhode. Reader 20 transaction 30 ke commit hone se pehle shuru hua tha, isliye version 2 use dikhta nahi aur version 1 (jiska deleter 30 woh nahi dekh sakta) ab bhi dikhta hai: <b>100</b>. Reader 40 ko 30 committed dikhta hai, isliye version 1 ended hai aur version 2 dikhta hai: <b>150</b>. Jab koi open snapshot purane version ko dekh na sake, woh <b>dead</b> hai aur VACUUM use wapas le sakta hai. Asli Postgres snapshots in-progress transactions bhi track karte hain (aur lamba open reader is cleanup ko rokta hai), par visibility ka idea yahi hai.</p>"
      }
    },
    {
      id: "upsert-semantics",
      src: "// Toy model of INSERT ... ON CONFLICT on a table keyed by Id.\nvar table = new SortedDictionary<int, string> { [1] = \"Asha\", [2] = \"Ravi\" };\nvar incoming = new[] { (Id: 2, Name: \"Ravi K\"), (Id: 3, Name: \"Meena\"), (Id: 2, Name: \"Ravi Kumar\") };\n\n// DO NOTHING: rows whose key already exists are skipped\nvar doNothing = new SortedDictionary<int, string>(table);\nvar inserted = 0;\nforeach (var row in incoming)\n    if (doNothing.TryAdd(row.Id, row.Name)) inserted++;\nConsole.WriteLine($\"do-nothing affected={inserted} names={string.Join(\",\", doNothing.Values)}\");\n\n// DO UPDATE in one statement: a key may not be touched twice\ntry\n{\n    var touched = new HashSet<int>();\n    var copy = new SortedDictionary<int, string>(table);\n    foreach (var row in incoming)\n    {\n        if (!touched.Add(row.Id)) throw new InvalidOperationException($\"row {row.Id} affected twice\");\n        copy[row.Id] = row.Name;\n    }\n    table = copy;\n}\ncatch (InvalidOperationException e)\n{\n    Console.WriteLine($\"do-update batch failed: {e.Message}\");\n}\n\n// De-duplicate first (last value wins), then it works\nvar deduped = incoming.GroupBy(r => r.Id).Select(g => g.Last()).ToList();\nforeach (var row in deduped) table[row.Id] = row.Name;\nConsole.WriteLine($\"do-update dedup affected={deduped.Count} names={string.Join(\",\", table.Values)}\");",
      answer: "do-nothing affected=1 names=Asha,Ravi,Meena\ndo-update batch failed: row 2 affected twice\ndo-update dedup affected=2 names=Asha,Ravi Kumar,Meena",
      explain: {
        en: "<p><code>DO NOTHING</code> skips both rows for key 2 and inserts only key 3: <b>1</b> row affected. <code>DO UPDATE</code> with key 2 twice in one statement fails in real Postgres too (\"ON CONFLICT DO UPDATE command cannot affect row a second time\"), and the whole statement is rolled back, which the toy models by working on a copy. After de-duplicating (last wins) you update key 2 and insert key 3: <b>2</b> rows affected. TL point: batch upserts need a de-dup step, and decide which duplicate should win.</p>",
        hi: "<p><code>DO NOTHING</code> key 2 की दोनों rows skip करता है और सिर्फ़ key 3 insert करता है: <b>1</b> row affected। एक statement में key 2 दो बार वाला <code>DO UPDATE</code> असली Postgres में भी fail होता है (\"ON CONFLICT DO UPDATE command cannot affect row a second time\"), और पूरा statement rollback हो जाता है, जिसे toy model copy पर काम करके दिखाता है। De-duplicate करने के बाद (आख़िरी जीतती है) key 2 update होती है और key 3 insert: <b>2</b> rows affected। TL point: batch upserts को de-dup step चाहिए, और तय करो कि कौन सा duplicate जीतेगा।</p>",
        hg: "<p><code>DO NOTHING</code> key 2 ki dono rows skip karta hai aur sirf key 3 insert karta hai: <b>1</b> row affected. Ek statement mein key 2 do baar wala <code>DO UPDATE</code> asli Postgres mein bhi fail hota hai (\"ON CONFLICT DO UPDATE command cannot affect row a second time\"), aur poora statement rollback ho jaata hai, jise toy model copy par kaam karke dikhata hai. De-duplicate karne ke baad (aakhri jeetti hai) key 2 update hoti hai aur key 3 insert: <b>2</b> rows affected. TL point: batch upserts ko de-dup step chahiye, aur tay karo ki kaun sa duplicate jeetega.</p>"
      }
    },
    {
      id: "jsonb-contains",
      src: "using System.Text.Json;\n\n// Mirrors the idea of jsonb @> (containment): every key and array element in the pattern\n// must be present in the document. Not the full Postgres rule set (no top-level scalar cases).\nstatic bool Contains(JsonElement doc, JsonElement pattern)\n{\n    switch (pattern.ValueKind)\n    {\n        case JsonValueKind.Object:\n            return doc.ValueKind == JsonValueKind.Object && pattern.EnumerateObject()\n                .All(p => doc.TryGetProperty(p.Name, out var d) && Contains(d, p.Value));\n        case JsonValueKind.Array:\n            return doc.ValueKind == JsonValueKind.Array && pattern.EnumerateArray()\n                .All(pe => doc.EnumerateArray().Any(de => Contains(de, pe)));\n        default:\n            return doc.ValueKind == pattern.ValueKind && doc.GetRawText() == pattern.GetRawText();\n    }\n}\n\nusing var doc = JsonDocument.Parse(\"\"\"{\"name\":\"Asha\",\"tags\":[\"vip\",\"new\",\"pune\"],\"address\":{\"city\":\"Pune\",\"pin\":\"411001\"}}\"\"\");\nvar patterns = new[]\n{\n    \"\"\"{\"tags\":[\"vip\"]}\"\"\",\n    \"\"\"{\"address\":{\"city\":\"Pune\"}}\"\"\",\n    \"\"\"{\"address\":{\"city\":\"Delhi\"}}\"\"\",\n    \"\"\"{\"tags\":[\"vip\",\"gold\"]}\"\"\",\n    \"\"\"{\"name\":\"asha\"}\"\"\",\n};\nfor (var i = 0; i < patterns.Length; i++)\n{\n    using var p = JsonDocument.Parse(patterns[i]);\n    Console.WriteLine($\"{i + 1} {Contains(doc.RootElement, p.RootElement)}\");\n}",
      answer: "1 True\n2 True\n3 False\n4 False\n5 False",
      explain: {
        en: "<p>Pattern 1: the document's <code>tags</code> array has \"vip\", so it is contained. Pattern 2: nested <code>address.city</code> matches. Pattern 3: city differs. Pattern 4: \"gold\" is missing, and <b>every</b> pattern element must be present. Pattern 5: \"asha\" is not \"Asha\"; comparisons are case-sensitive, like all text in Postgres by default. In Postgres, array containment ignores order and duplicates, and a GIN index can answer <code>@&gt;</code> without scanning every row. The C# here only mirrors the logic; it does not use an index.</p>",
        hi: "<p>Pattern 1: document के <code>tags</code> array में \"vip\" है, इसलिए contained है। Pattern 2: nested <code>address.city</code> match होता है। Pattern 3: city अलग है। Pattern 4: \"gold\" नहीं है, और pattern का <b>हर</b> element मौजूद होना चाहिए। Pattern 5: \"asha\", \"Asha\" नहीं है; comparisons case-sensitive हैं, जैसे Postgres में सारा text default से। Postgres में array containment order और duplicates ignore करता है, और GIN index हर row scan किए बिना <code>@&gt;</code> का जवाब दे सकता है। यहाँ का C# सिर्फ़ logic दोहराता है; वह index use नहीं करता।</p>",
        hg: "<p>Pattern 1: document ke <code>tags</code> array mein \"vip\" hai, isliye contained hai. Pattern 2: nested <code>address.city</code> match hota hai. Pattern 3: city alag hai. Pattern 4: \"gold\" nahi hai, aur pattern ka <b>har</b> element maujood hona chahiye. Pattern 5: \"asha\", \"Asha\" nahi hai; comparisons case-sensitive hain, jaise Postgres mein saara text default se. Postgres mein array containment order aur duplicates ignore karta hai, aur GIN index har row scan kiye bina <code>@&gt;</code> ka jawab de sakta hai. Yahan ka C# sirf logic dohraata hai; woh index use nahi karta.</p>"
      }
    },
    {
      id: "collation-compare",
      lang: "sql",
      src: "SELECT CASE WHEN 'Pankaj' COLLATE Latin1_General_CI_AS = 'PANKAJ' THEN 'equal' ELSE 'different' END AS ci,\n       CASE WHEN 'Pankaj' COLLATE Latin1_General_CS_AS = 'PANKAJ' THEN 'equal' ELSE 'different' END AS cs,\n       CASE WHEN LOWER('Pankaj' COLLATE Latin1_General_CS_AS) = LOWER('PANKAJ') THEN 'equal' ELSE 'different' END AS cs_lower;",
      answer: "equal different equal",
      explain: {
        en: "<p>A case-insensitive collation (<code>CI</code>) treats 'Pankaj' and 'PANKAJ' as equal, which is how SQL Server databases usually behave. A case-sensitive one (<code>CS</code>) says different: that is how Postgres compares text by default. Lower-casing both sides makes them equal again, which is exactly what a <code>lower(col)</code> expression index or <code>ILIKE</code> does in Postgres. Porting lesson: a query that \"just worked\" on SQL Server can silently return fewer rows on Postgres. (This puzzle runs on SQL Server; the Postgres side is stated, not executed.)</p>",
        hi: "<p>Case-insensitive collation (<code>CI</code>) 'Pankaj' और 'PANKAJ' को बराबर मानती है, जैसा SQL Server databases आमतौर पर करते हैं। Case-sensitive (<code>CS</code>) कहती है different: Postgres text को default से ऐसे ही compare करता है। दोनों तरफ़ lower case करने पर वे फिर बराबर हो जाते हैं, और Postgres में <code>lower(col)</code> expression index या <code>ILIKE</code> ठीक यही करता है। Porting का सबक: जो query SQL Server पर \"बस चल जाती थी\" वह Postgres पर चुपचाप कम rows दे सकती है। (यह puzzle SQL Server पर चलता है; Postgres वाली बात बताई गई है, चलाई नहीं गई।)</p>",
        hg: "<p>Case-insensitive collation (<code>CI</code>) 'Pankaj' aur 'PANKAJ' ko barabar maanti hai, jaisa SQL Server databases aamtaur par karte hain. Case-sensitive (<code>CS</code>) kehti hai different: Postgres text ko default se aise hi compare karta hai. Dono taraf lower case karne par woh phir barabar ho jaate hain, aur Postgres mein <code>lower(col)</code> expression index ya <code>ILIKE</code> theek yahi karta hai. Porting ka sabak: jo query SQL Server par \"bas chal jaati thi\" woh Postgres par chupchaap kam rows de sakti hai. (Yeh puzzle SQL Server par chalta hai; Postgres wali baat batayi gayi hai, chalayi nahi gayi.)</p>"
      }
    },
    {
      id: "hot-partition",
      src: "using System.Text;\n\n// A toy partitioner (sum of the key's bytes modulo 4). Real Cosmos DB hashes the partition key\n// itself; this only shows how a skewed key concentrates load.\nvar tenants = new (string Id, int Orders)[] { (\"bigco\", 480), (\"acme\", 60), (\"zenith\", 40), (\"orbit\", 20) };\nconst int partitions = 4;\n\nint Partition(string key)\n{\n    var sum = 0;\n    foreach (var b in Encoding.UTF8.GetBytes(key)) sum += b;\n    return sum % partitions;\n}\n\nvoid Report(string name, Func<string, int, string> keyOf)\n{\n    var load = new int[partitions];\n    foreach (var (id, orders) in tenants)\n        for (var n = 1; n <= orders; n++)\n            load[Partition(keyOf(id, n))]++;\n    Console.WriteLine($\"{name}: busiest partition {load.Max()} of {load.Sum()}\");\n}\n\nReport(\"tenantId\", (tenant, orderNo) => tenant);\nReport(\"tenantId-bucket\", (tenant, orderNo) => $\"{tenant}-{orderNo % 8}\");",
      answer: "tenantId: busiest partition 500 of 600\ntenantId-bucket: busiest partition 150 of 600",
      explain: {
        en: "<p>With <code>tenantId</code> as the key, all 480 orders of the big tenant land in one partition, which also shares its slot with the small tenant \"orbit\": 500 of 600 writes hit one partition while two sit empty. With a synthetic key <code>tenantId-bucket</code> the same tenant is spread over eight keys and, in this toy, the load is perfectly even at 150 each. Real hashing is not perfectly even, and the toy hash is only for the demo. The cost of the fix: reading all of one tenant's orders now touches several partitions.</p>",
        hi: "<p><code>tenantId</code> को key रखने पर बड़े tenant के सारे 480 orders एक partition में जाते हैं, जो छोटे tenant \"orbit\" के साथ भी वही slot बाँटता है: 600 में से 500 writes एक partition पर आती हैं और दो खाली बैठे हैं। Synthetic key <code>tenantId-bucket</code> से वही tenant आठ keys में फैल जाता है और इस toy में load बिल्कुल बराबर, 150-150 रहता है। असली hashing बिल्कुल बराबर नहीं होती, और toy hash सिर्फ़ demo के लिए है। Fix की कीमत: एक tenant के सारे orders पढ़ने पर अब कई partitions छूने पड़ते हैं।</p>",
        hg: "<p><code>tenantId</code> ko key rakhne par bade tenant ke saare 480 orders ek partition mein jaate hain, jo chhote tenant \"orbit\" ke saath bhi wahi slot baantta hai: 600 mein se 500 writes ek partition par aati hain aur do khaali baithe hain. Synthetic key <code>tenantId-bucket</code> se wahi tenant aath keys mein phail jaata hai aur is toy mein load bilkul barabar, 150-150 rehta hai. Asli hashing bilkul barabar nahi hoti, aur toy hash sirf demo ke liye hai. Fix ki keemat: ek tenant ke saare orders padhne par ab kai partitions chhoone padte hain.</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>MVCC</b>: a Postgres <code>UPDATE</code> adds a new row version in the table; <b>VACUUM</b> removes the dead ones that no snapshot can see.",
      "Unquoted names fold to lower case, so EF's <code>\"Tickets\"</code> must be quoted; use <code>UseSnakeCaseNamingConvention()</code> and <code>ILIKE</code> for case-insensitive search.",
      "<b>jsonb</b>: <code>-&gt;&gt;</code> text, <code>@&gt;</code> contains; EF Core <code>OwnsOne(..., x =&gt; x.ToJson())</code> maps a class to jsonb.",
      "<b>Index kinds</b>: partial (<code>WHERE</code>), covering (<code>INCLUDE</code>), GIN (arrays, jsonb), BRIN (huge ordered tables).",
      "<b>timestamptz</b> is an instant kept in UTC; Npgsql writes it only from <code>Kind = Utc</code> and throws otherwise.",
      "<b>Upsert</b>: Postgres <code>ON CONFLICT (key) DO UPDATE ... RETURNING</code> needs a unique key; SQL Server uses <code>UPDLOCK, HOLDLOCK</code> then <code>INSERT</code>.",
      "<b>Choose a store</b> by access pattern: relational by default; Redis for rebuildable data; Cosmos DB or MongoDB for documents read by key at scale.",
      "A long-open or idle-in-transaction session holds back VACUUM and causes bloat.",
      "MERGE arrived in Postgres 15; its RETURNING clause came in 17.",
      "Each Postgres connection is a process: size the pools or put PgBouncer in front.",
      "Cosmos DB: pick a high-cardinality partition key; a skewed key makes a hot partition."
    ],
    meaning: {
      hi: [
        "MVCC: Postgres का UPDATE table में नया row version जोड़ता है; VACUUM वे dead versions हटाता है जो किसी snapshot को नहीं दिखते",
        "बिना quote के names lower case बनते हैं, इसलिए EF का \"Tickets\" quote करना पड़ता है; snake_case और case-insensitive खोज के लिए ILIKE लो",
        "jsonb: ->> text देता है, @> contains; EF Core का OwnsOne(..., x => x.ToJson()) class को jsonb से map करता है",
        "Index की क़िस्में: partial (WHERE), covering (INCLUDE), GIN (arrays, jsonb), BRIN (बड़ी क्रम वाली tables)",
        "timestamptz UTC में रखा एक पल है; Npgsql उसे सिर्फ़ Kind = Utc से लिखता है, नहीं तो exception",
        "Upsert: Postgres में ON CONFLICT (key) DO UPDATE ... RETURNING, unique key चाहिए; SQL Server में UPDLOCK, HOLDLOCK फिर INSERT",
        "Store access pattern से चुनो: default relational; दोबारा बन सकने वाले data के लिए Redis; scale पर key से पढ़े documents के लिए Cosmos DB या MongoDB",
        "लंबा open या idle-in-transaction session VACUUM को रोकता है और bloat कराता है।",
        "MERGE Postgres 15 में आया; उसकी RETURNING clause 17 में आई।",
        "हर Postgres connection एक process है: pools का size सोचो या PgBouncer आगे लगाओ।",
        "Cosmos DB: ज़्यादा cardinality वाली partition key चुनो; skewed key से hot partition बनता है।"
      ],
      hg: [
        "MVCC: Postgres ka UPDATE table mein naya row version jodta hai; VACUUM woh dead versions hataata hai jo kisi snapshot ko nahi dikhte",
        "Bina quote ke names lower case bante hain, isliye EF ka \"Tickets\" quote karna padta hai; snake_case aur case-insensitive khoj ke liye ILIKE lo",
        "jsonb: ->> text deta hai, @> contains; EF Core ka OwnsOne(..., x => x.ToJson()) class ko jsonb se map karta hai",
        "Index ki qismein: partial (WHERE), covering (INCLUDE), GIN (arrays, jsonb), BRIN (badi kram wali tables)",
        "timestamptz UTC mein rakha ek pal hai; Npgsql use sirf Kind = Utc se likhta hai, nahi to exception",
        "Upsert: Postgres mein ON CONFLICT (key) DO UPDATE ... RETURNING, unique key chahiye; SQL Server mein UPDLOCK, HOLDLOCK phir INSERT",
        "Store access pattern se chuno: default relational; dobara ban sakne wale data ke liye Redis; scale par key se padhe documents ke liye Cosmos DB ya MongoDB",
        "Lamba open ya idle-in-transaction session VACUUM ko rokta hai aur bloat karata hai.",
        "MERGE Postgres 15 mein aaya; uski RETURNING clause 17 mein aayi.",
        "Har Postgres connection ek process hai: pools ka size socho ya PgBouncer aage lagao.",
        "Cosmos DB: zyada cardinality wali partition key chuno; skewed key se hot partition banta hai."
      ]
    }
  }
};
