// Day 18 — SQL Server, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 18,
  format: "lesson",
  title: {
    en: "SQL Server — indexes, execution plans, joins and window functions, isolation levels, tuning",
    hi: "SQL Server — indexes, execution plans, joins और window functions, isolation levels, tuning",
    hg: "SQL Server — indexes, execution plans, joins aur window functions, isolation levels, tuning"
  },
  summary: {
    en: "<p>Day 18 looks inside <b>SQL Server</b> using the CRM tables, in 8 short lessons. First how rows are found: clustered and non-clustered indexes, key lookups and covering indexes, and why a function on a column switches an index off. Then correct queries: joins, anti-joins and window functions. Last, many users at once: isolation levels and locks, deadlocks with retry, and statistics with parameter sniffing.</p><p>Every lesson has a T-SQL script that runs on LocalDB and prints facts you can check, not timings.</p>",
    hi: "<p>Day 18 में CRM की tables के साथ <b>SQL Server</b> के अंदर झाँकते हैं, 8 छोटे पाठों में। पहले rows कैसे मिलती हैं: clustered और non-clustered indexes, key lookups और covering indexes, और column पर function index को क्यों बंद कर देता है। फिर सही queries: joins, anti-joins और window functions। आख़िर में कई users एक साथ: isolation levels और locks, retry के साथ deadlocks, और statistics के साथ parameter sniffing।</p><p>हर पाठ में T-SQL script है जो LocalDB पर चलती है और जाँचने लायक़ तथ्य print करती है, समय नहीं।</p>",
    hg: "<p>Day 18 mein CRM ki tables ke saath <b>SQL Server</b> ke andar jhaankte hain, 8 chhote lessons mein. Pehle rows kaise milti hain: clustered aur non-clustered indexes, key lookups aur covering indexes, aur column par function index ko kyon band kar deta hai. Phir sahi queries: joins, anti-joins aur window functions. Aakhir mein kai users ek saath: isolation levels aur locks, retry ke saath deadlocks, aur statistics ke saath parameter sniffing.</p><p>Har lesson mein T-SQL script hai jo LocalDB par chalti hai aur jaanchne layak tathya print karti hai, samay nahi.</p>"
  },
  sections: [
    {
      id: "index-basics",
      depth: "short",
      title: {
        en: "Clustered and non-clustered indexes",
        hi: "Clustered और non-clustered index",
        hg: "Clustered aur non-clustered index"
      },
      lesson: {
        buildsOn: {
          en: "<p>Days 5 and 6 sent LINQ and raw SQL from EF Core to a database. Today we look at the other side: how SQL Server finds rows for those queries. We start with the table that holds <code>SupportTickets</code> and the index that decides how fast every one of those queries is.</p>",
          hi: "<p>Day 5 और 6 में EF Core से LINQ और raw SQL database तक गया। आज दूसरी तरफ़ देखते हैं: SQL Server उन queries के लिए rows कैसे ढूँढता है। हम <code>SupportTickets</code> वाली table से शुरू करते हैं और उस index से जो तय करता है कि हर query कितनी तेज़ चलेगी।</p>",
          hg: "<p>Day 5 aur 6 mein EF Core se LINQ aur raw SQL database tak gaya. Aaj doosri taraf dekhte hain: SQL Server un queries ke liye rows kaise dhoondhta hai. Hum <code>SupportTickets</code> wali table se shuru karte hain aur us index se jo tay karta hai ki har query kitni tez chalegi.</p>"
        },
        what: {
          en: "<p>An <b>index</b> is a sorted structure that lets SQL Server jump to rows instead of reading the whole table. A <b>clustered</b> index is the table itself, stored in key order: one per table. A <b>non-clustered</b> index is a separate sorted list that points back to the rows: many per table. A table with no clustered index is a <b>heap</b>.</p>",
          hi: "<p><b>Index</b> एक sorted structure है जिससे SQL Server पूरी table पढ़ने के बजाय सीधे rows तक पहुँच जाता है। <b>Clustered</b> index खुद table है, key के क्रम में रखी हुई: एक table में सिर्फ़ एक। <b>Non-clustered</b> index अलग से बनी sorted list है जो वापस rows की तरफ़ इशारा करती है: एक table में कई हो सकते हैं। जिस table में clustered index नहीं होता, उसे <b>heap</b> कहते हैं।</p>",
          hg: "<p><b>Index</b> ek sorted structure hai jisse SQL Server poori table padhne ke bajay seedhe rows tak pahunch jaata hai. <b>Clustered</b> index khud table hai, key ke kram mein rakhi hui: ek table mein sirf ek. <b>Non-clustered</b> index alag se bani sorted list hai jo wapas rows ki taraf ishaara karti hai: ek table mein kai ho sakte hain. Jis table mein clustered index nahi hota, use <b>heap</b> kehte hain.</p>"
        },
        why: {
          en: "<p>A support desk looks tickets up by <code>TicketId</code> and by customer all day. Without an index, each lookup reads every ticket, so the time grows with the table. With one, it reads a few pages. Each extra index also costs space and slows every INSERT, UPDATE and DELETE, so you choose them on purpose.</p>",
          hi: "<p>Support desk दिनभर tickets को <code>TicketId</code> और customer से ढूँढता है। Index न हो तो हर lookup हर ticket पढ़ता है, यानी table बड़ी होने पर समय बढ़ता जाता है। Index हो तो कुछ ही pages पढ़ने पड़ते हैं। हर extra index जगह भी खाता है और हर INSERT, UPDATE, DELETE को धीमा भी करता है, इसलिए उन्हें सोच-समझकर चुनो।</p>",
          hg: "<p>Support desk din bhar tickets ko <code>TicketId</code> aur customer se dhoondhta hai. Index na ho to har lookup har ticket padhta hai, yaani table badi hone par samay badhta jaata hai. Index ho to kuch hi pages padhne padte hain. Har extra index jagah bhi khaata hai aur har INSERT, UPDATE, DELETE ko dheema bhi karta hai, isliye unhe soch-samajhkar chuno.</p>"
        },
        analogy: {
          en: "<p>A government office file room. The files themselves stand on the shelves in file-number order: that is the clustered index. The card cabinet near the door is sorted by applicant name and each card says \"file 512\": that is a non-clustered index. A pile of papers thrown in a corner with no order is a heap.</p>",
          hi: "<p>सरकारी दफ़्तर का file room। Files खुद shelves पर file-number के क्रम में रखी हैं: यह clustered index है। दरवाज़े के पास card cabinet applicant के नाम से sorted है और हर card पर लिखा है \"file 512\": यह non-clustered index है। कोने में बिना क्रम के फेंके कागज़ों का ढेर heap है।</p>",
          hg: "<p>Sarkari daftar ka file room. Files khud shelves par file-number ke kram mein rakhi hain: ye clustered index hai. Darwaze ke paas card cabinet applicant ke naam se sorted hai aur har card par likha hai \"file 512\": ye non-clustered index hai. Kone mein bina kram ke phenke kaagazon ka dher heap hai.</p>"
        },
        focus: {
          caption: {
            en: "A narrow, ever-increasing clustered key",
            hi: "Narrow और लगातार बढ़ने वाली clustered key",
            hg: "Narrow aur lagaataar badhne wali clustered key"
          },
          lang: "sql",
          src: "-- a good clustered key is narrow, unique and ever-increasing\nTicketId int IDENTITY(501,1) CONSTRAINT PK_SupportTickets PRIMARY KEY CLUSTERED",
          check: "none"
        },
        lines: [
          {
            code: "CONSTRAINT PK_SupportTickets PRIMARY KEY CLUSTERED",
            note: {
              en: "A primary key is clustered by default. The ticket rows are now stored in <code>TicketId</code> order, and this is the one clustered index the table can have.",
              hi: "Primary key by default clustered होती है। Ticket rows अब <code>TicketId</code> के क्रम में रखी जाती हैं, और table में सिर्फ़ यही एक clustered index हो सकता है।",
              hg: "Primary key by default clustered hoti hai. Ticket rows ab <code>TicketId</code> ke kram mein rakhi jaati hain, aur table mein sirf yahi ek clustered index ho sakta hai."
            }
          },
          {
            code: "CREATE TABLE dbo.TicketNotes (TicketId int NOT NULL, Note varchar(100) NOT NULL);",
            note: {
              en: "No key and no clustered index, so this table is a <b>heap</b>: rows sit in no particular order.",
              hi: "कोई key नहीं और clustered index नहीं, इसलिए यह table <b>heap</b> है: rows बिना किसी क्रम के पड़ी रहती हैं।",
              hg: "Koi key nahi aur clustered index nahi, isliye ye table <b>heap</b> hai: rows bina kisi kram ke padi rehti hain."
            }
          },
          {
            code: "CREATE NONCLUSTERED INDEX IX_SupportTickets_Customer",
            note: {
              en: "A second, separate sorted structure on <code>CustomerId</code>. Each entry also carries the clustered key (<code>TicketId</code>), which is how it finds the full row.",
              hi: "<code>CustomerId</code> पर दूसरी, अलग sorted structure। हर entry में clustered key (<code>TicketId</code>) भी रहती है, उसी से पूरी row मिलती है।",
              hg: "<code>CustomerId</code> par doosri, alag sorted structure. Har entry mein clustered key (<code>TicketId</code>) bhi rehti hai, usi se poori row milti hai."
            }
          },
          {
            code: "FROM sys.indexes AS i",
            note: {
              en: "The catalog view <code>sys.indexes</code> lists every index. Reading it is the safest way to see what a table really has.",
              hi: "Catalog view <code>sys.indexes</code> हर index की list देता है। किसी table में असल में क्या है, यह देखने का सबसे भरोसेमंद तरीका यही है।",
              hg: "Catalog view <code>sys.indexes</code> har index ki list deta hai. Kisi table mein asal mein kya hai, ye dekhne ka sabse bharosemand tareeka yahi hai."
            }
          },
          {
            code: "CREATE CLUSTERED INDEX IX_SupportTickets_Status ON dbo.SupportTickets (Status);",
            note: {
              en: "A second clustered index fails: the rows can only be in one order. The catch block prints error 1902.",
              hi: "दूसरा clustered index fail हो जाता है: rows एक ही क्रम में रह सकती हैं। Catch block error 1902 print करता है।",
              hg: "Doosra clustered index fail ho jaata hai: rows ek hi kram mein reh sakti hain. Catch block error 1902 print karta hai."
            }
          },
          {
            code: "PRINT 'error ' + CAST(ERROR_NUMBER() AS varchar(10))",
            note: {
              en: "<code>ERROR_NUMBER()</code> inside <code>CATCH</code> gives the SQL Server error code, so the script can report it and carry on.",
              hi: "<code>CATCH</code> के अंदर <code>ERROR_NUMBER()</code> SQL Server का error code देता है, जिससे script उसे बताकर आगे चल सकती है।",
              hg: "<code>CATCH</code> ke andar <code>ERROR_NUMBER()</code> SQL Server ka error code deta hai, jisse script use bata kar aage chal sakti hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Choosing a wide or changing column as the clustered key. Every non-clustered index copies it, so they all grow.</li><li>Thinking \"primary key\" and \"clustered index\" are the same thing. The key is a rule; the clustered index is how the rows are stored. They only usually go together.</li><li>Adding an index for every column \"just in case\". Each one slows every write.</li></ul>",
          hi: "<ul><li>Clustered key के लिए चौड़ा या बदलने वाला column चुनना। हर non-clustered index उसकी copy रखता है, इसलिए सब बड़े हो जाते हैं।</li><li>\"Primary key\" और \"clustered index\" को एक ही चीज़ समझना। Key एक rule है; clustered index rows रखने का तरीका है। दोनों बस अक्सर साथ आते हैं।</li><li>\"क्या पता काम आए\" सोचकर हर column पर index लगाना। हर एक index हर write को धीमा करता है।</li></ul>",
          hg: "<ul><li>Clustered key ke liye chaura ya badalne wala column chunna. Har non-clustered index uski copy rakhta hai, isliye sab bade ho jaate hain.</li><li>\"Primary key\" aur \"clustered index\" ko ek hi cheez samajhna. Key ek rule hai; clustered index rows rakhne ka tareeka hai. Dono bas aksar saath aate hain.</li><li>\"Kya pata kaam aaye\" soch kar har column par index lagana. Har ek index har write ko dheema karta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Make the clustered key a narrow <code>int IDENTITY</code> id. Add non-clustered indexes for columns that appear in frequent <code>WHERE</code>, <code>JOIN</code> and <code>ORDER BY</code>, and for foreign keys. Skip them on tiny tables and on write-heavy tables where reads are rare.</p>",
          hi: "<p>Clustered key एक narrow <code>int IDENTITY</code> id रखो। जो columns बार-बार <code>WHERE</code>, <code>JOIN</code> और <code>ORDER BY</code> में आते हैं और foreign keys पर non-clustered index लगाओ। बहुत छोटी tables पर और जिन tables में writes ज़्यादा और reads कम हैं, वहाँ मत लगाओ।</p>",
          hg: "<p>Clustered key ek narrow <code>int IDENTITY</code> id rakho. Jo columns baar-baar <code>WHERE</code>, <code>JOIN</code> aur <code>ORDER BY</code> mein aate hain aur foreign keys par non-clustered index lagao. Bahut chhoti tables par aur jin tables mein writes zyada aur reads kam hain, wahan mat lagao.</p>"
        },
        exercise: {
          task: {
            en: "<p>Create an <code>Agents</code> table whose primary key is clustered, then add a <b>unique non-clustered</b> index on <code>Email</code>. Print the indexes from <code>sys.indexes</code>, then insert the same email twice and print the error number of the second insert.</p>",
            hi: "<p>एक <code>Agents</code> table बनाओ जिसकी primary key clustered हो, फिर <code>Email</code> पर <b>unique non-clustered</b> index जोड़ो। <code>sys.indexes</code> से indexes print करो, फिर वही email दो बार insert करो और दूसरे insert का error number print करो।</p>",
            hg: "<p>Ek <code>Agents</code> table banao jiski primary key clustered ho, phir <code>Email</code> par <b>unique non-clustered</b> index jodo. <code>sys.indexes</code> se indexes print karo, phir wahi email do baar insert karo aur doosre insert ka error number print karo.</p>"
          },
          hint: {
            en: "<p><code>CREATE UNIQUE NONCLUSTERED INDEX ... ON dbo.Agents (Email)</code>. A duplicate raises error 2601.</p>",
            hi: "<p><code>CREATE UNIQUE NONCLUSTERED INDEX ... ON dbo.Agents (Email)</code>। Duplicate पर error 2601 आता है।</p>",
            hg: "<p><code>CREATE UNIQUE NONCLUSTERED INDEX ... ON dbo.Agents (Email)</code>. Duplicate par error 2601 aata hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a unique index on Email",
              hi: "हल: Email पर unique index",
              hg: "Solution: Email par unique index"
            },
            lang: "sql",
            src: "CREATE TABLE dbo.Agents (\n    AgentId int         NOT NULL CONSTRAINT PK_Agents PRIMARY KEY,\n    Email   varchar(60) NOT NULL\n);\nCREATE UNIQUE NONCLUSTERED INDEX UX_Agents_Email ON dbo.Agents (Email);\n\nSELECT i.name AS index_name, i.type_desc, i.is_unique\nFROM sys.indexes AS i\nWHERE i.object_id = OBJECT_ID('dbo.Agents')\nORDER BY i.index_id;\n\nINSERT dbo.Agents VALUES (1, 'meena@care.in');\nBEGIN TRY\n    INSERT dbo.Agents VALUES (2, 'meena@care.in');   -- same email again\nEND TRY\nBEGIN CATCH\n    PRINT 'error ' + CAST(ERROR_NUMBER() AS varchar(10)) + ': duplicate email rejected';\nEND CATCH;",
            check: "run",
            expected: "PK_Agents CLUSTERED 1\nUX_Agents_Email NONCLUSTERED 1\nerror 2601: duplicate email rejected"
          }
        },
        quiz: {
          q: {
            en: "<p>How many clustered indexes can one table have?</p>",
            hi: "<p>एक table में कितने clustered index हो सकते हैं?</p>",
            hg: "<p>Ek table mein kitne clustered index ho sakte hain?</p>"
          },
          options: [
            {
              en: "One per column that is indexed",
              hi: "हर indexed column पर एक",
              hg: "Har indexed column par ek"
            },
            {
              en: "One: the rows can be stored in only one order",
              hi: "एक: rows सिर्फ़ एक क्रम में रखी जा सकती हैं",
              hg: "Ek: rows sirf ek kram mein rakhi ja sakti hain"
            },
            {
              en: "As many as you like, like non-clustered ones",
              hi: "जितने चाहो, non-clustered की तरह",
              hg: "Jitne chaho, non-clustered ki tarah"
            },
            {
              en: "Two: one ascending and one descending",
              hi: "दो: एक ascending और एक descending",
              hg: "Do: ek ascending aur ek descending"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The clustered index <i>is</i> the table, so there is exactly one. Non-clustered indexes are extra structures, and you can have many (each costing writes).</p>",
            hi: "<p>Clustered index ही table है, इसलिए ठीक एक होता है। Non-clustered indexes extra structures हैं, और कई हो सकते हैं (हर एक writes पर बोझ डालता है)।</p>",
            hg: "<p>Clustered index hi table hai, isliye theek ek hota hai. Non-clustered indexes extra structures hain, aur kai ho sakte hain (har ek writes par bojh daalta hai).</p>"
          }
        },
        recap: {
          en: "<ul><li>Clustered = the table in key order, one per table; no clustered index = heap.</li><li>Non-clustered = a separate sorted list that carries the clustered key to reach the row.</li><li>Every index speeds reads and slows writes: choose them on purpose.</li></ul>",
          hi: "<ul><li>Clustered = key के क्रम में table, एक table में एक; clustered index नहीं = heap।</li><li>Non-clustered = अलग sorted list जो row तक पहुँचने के लिए clustered key रखती है।</li><li>हर index reads तेज़ और writes धीमे करता है: सोच-समझकर चुनो।</li></ul>",
          hg: "<ul><li>Clustered = key ke kram mein table, ek table mein ek; clustered index nahi = heap.</li><li>Non-clustered = alag sorted list jo row tak pahunchne ke liye clustered key rakhti hai.</li><li>Har index reads tez aur writes dheeme karta hai: soch-samajhkar chuno.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Two tables, a non-clustered index, and what sys.indexes reports",
            hi: "दो tables, एक non-clustered index, और sys.indexes क्या बताता है",
            hg: "Do tables, ek non-clustered index, aur sys.indexes kya batata hai"
          },
          lang: "sql",
          src: "CREATE TABLE dbo.SupportTickets (\n    TicketId   int          NOT NULL CONSTRAINT PK_SupportTickets PRIMARY KEY CLUSTERED,\n    CustomerId int          NOT NULL,\n    Status     varchar(10)  NOT NULL,\n    Priority   tinyint      NOT NULL,\n    Issue      varchar(100) NOT NULL\n);\nCREATE TABLE dbo.TicketNotes (TicketId int NOT NULL, Note varchar(100) NOT NULL);  -- no key: a heap\n\nCREATE NONCLUSTERED INDEX IX_SupportTickets_Customer\n    ON dbo.SupportTickets (CustomerId);\n\nSELECT OBJECT_NAME(i.object_id) AS table_name, ISNULL(i.name, '(none)') AS index_name, i.type_desc, i.is_primary_key\nFROM sys.indexes AS i\nWHERE i.object_id IN (OBJECT_ID('dbo.SupportTickets'), OBJECT_ID('dbo.TicketNotes'))\nORDER BY table_name, i.index_id;\n\nBEGIN TRY\n    CREATE CLUSTERED INDEX IX_SupportTickets_Status ON dbo.SupportTickets (Status);\nEND TRY\nBEGIN CATCH\n    PRINT 'error ' + CAST(ERROR_NUMBER() AS varchar(10)) + ': only one clustered index per table';\nEND CATCH;",
          check: "run",
          expected: "SupportTickets PK_SupportTickets CLUSTERED 1\nSupportTickets IX_SupportTickets_Customer NONCLUSTERED 0\nTicketNotes (none) HEAP 0\nerror 1902: only one clustered index per table"
        }
      ]
    },
    {
      id: "covering-lookups",
      depth: "short",
      title: {
        en: "Key lookups and covering indexes",
        hi: "Key lookup और covering index",
        hg: "Key lookup aur covering index"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 gave <code>SupportTickets</code> a non-clustered index on <code>CustomerId</code> and said each entry carries the clustered key. Now we see what that costs: when the query needs more columns than the index holds, SQL Server must go back to the table once per row. Day 6 showed EF projections (<code>Select</code> of a few columns); this lesson shows why that helps in SQL.</p>",
          hi: "<p>पाठ 1 में <code>SupportTickets</code> पर <code>CustomerId</code> का non-clustered index बना और कहा गया कि हर entry में clustered key रहती है। अब देखते हैं इसकी कीमत क्या है: query को index में रखे columns से ज़्यादा चाहिए, तो SQL Server को हर row के लिए table में वापस जाना पड़ता है। Day 6 में EF projection (कुछ ही columns का <code>Select</code>) देखा था; यह पाठ दिखाता है कि SQL में वह क्यों मदद करता है।</p>",
          hg: "<p>Lesson 1 mein <code>SupportTickets</code> par <code>CustomerId</code> ka non-clustered index bana aur kaha gaya ki har entry mein clustered key rehti hai. Ab dekhte hain iski keemat kya hai: query ko index mein rakhe columns se zyada chahiye, to SQL Server ko har row ke liye table mein wapas jaana padta hai. Day 6 mein EF projection (kuch hi columns ka <code>Select</code>) dekha tha; ye lesson dikhata hai ki SQL mein wo kyon madad karta hai.</p>"
        },
        what: {
          en: "<p>A <b>key lookup</b> is the extra trip into the clustered index to fetch columns the non-clustered index does not hold. A <b>covering</b> index avoids it: the search column goes in the key and the other columns the query reads go in <code>INCLUDE</code>, so the index alone answers the query.</p>",
          hi: "<p><b>Key lookup</b> वह extra चक्कर है जो clustered index में उन columns के लिए लगता है जो non-clustered index में नहीं हैं। <b>Covering</b> index इसे बचाता है: search वाला column key में और query जो बाक़ी columns पढ़ती है वे <code>INCLUDE</code> में, ताकि index अकेले ही query का जवाब दे दे।</p>",
          hg: "<p><b>Key lookup</b> wo extra chakkar hai jo clustered index mein un columns ke liye lagta hai jo non-clustered index mein nahi hain. <b>Covering</b> index ise bachata hai: search wala column key mein aur query jo baaki columns padhti hai wo <code>INCLUDE</code> mein, taaki index akele hi query ka jawab de de.</p>"
        },
        why: {
          en: "<p>Fetching 10 tickets with 10 lookups is fine. Fetching 10,000 means 10,000 trips, and past a tipping point the optimizer gives up on the index and scans the table. A covering index for your hottest query removes the trips and keeps the query fast as data grows.</p>",
          hi: "<p>10 tickets के लिए 10 lookups ठीक हैं। 10,000 के लिए 10,000 चक्कर लगते हैं, और एक सीमा के बाद optimizer index छोड़कर पूरी table scan करने लगता है। सबसे ज़्यादा चलने वाली query के लिए covering index ये चक्कर हटा देता है और data बढ़ने पर भी query तेज़ रहती है।</p>",
          hg: "<p>10 tickets ke liye 10 lookups theek hain. 10,000 ke liye 10,000 chakkar lagte hain, aur ek seema ke baad optimizer index chhodkar poori table scan karne lagta hai. Sabse zyada chalne wali query ke liye covering index ye chakkar hata deta hai aur data badhne par bhi query tez rehti hai.</p>"
        },
        analogy: {
          en: "<p>A dhaba menu. If the menu lists the dish <i>and</i> its price, you order straight away. If it lists only the dish name, you must call the waiter to ask the price for every dish: that is a key lookup. Putting the price on the menu is <code>INCLUDE</code>.</p>",
          hi: "<p>ढाबे का menu। Menu में dish <i>और</i> उसकी price दोनों लिखी हों, तो आप सीधे order कर देते हैं। सिर्फ़ dish का नाम लिखा हो, तो हर dish की price पूछने के लिए waiter को बुलाना पड़ता है: यह key lookup है। Menu पर price लिख देना <code>INCLUDE</code> है।</p>",
          hg: "<p>Dhabe ka menu. Menu mein dish <i>aur</i> uski price dono likhi hon, to aap seedhe order kar dete hain. Sirf dish ka naam likha ho, to har dish ki price poochne ke liye waiter ko bulana padta hai: ye key lookup hai. Menu par price likh dena <code>INCLUDE</code> hai.</p>"
        },
        focus: {
          caption: {
            en: "Key columns versus INCLUDE columns",
            hi: "Key columns बनाम INCLUDE columns",
            hg: "Key columns versus INCLUDE columns"
          },
          lang: "sql",
          src: "-- key = what you search and sort by; INCLUDE = what you only read\nCREATE INDEX IX_Tickets_Customer_Covering\n    ON dbo.SupportTickets (CustomerId) INCLUDE (Status, Priority);",
          check: "none"
        },
        lines: [
          {
            code: "CREATE INDEX IX_Tickets_Customer ON dbo.SupportTickets (CustomerId);",
            note: {
              en: "The plain index from lesson 1. It finds the ticket ids of a customer, but <code>Status</code> and <code>Priority</code> are not in it.",
              hi: "पाठ 1 वाला सादा index। यह customer के ticket ids ढूँढ देता है, पर <code>Status</code> और <code>Priority</code> इसमें नहीं हैं।",
              hg: "Lesson 1 wala saada index. Ye customer ke ticket ids dhoondh deta hai, par <code>Status</code> aur <code>Priority</code> ismein nahi hain."
            }
          },
          {
            code: "INCLUDE (Status, Priority);",
            note: {
              en: "<code>INCLUDE</code> stores these columns at the leaf of the index. They are not sorted and cannot be searched, but the query can read them without leaving the index.",
              hi: "<code>INCLUDE</code> इन columns को index के leaf पर रखता है। ये sorted नहीं होते और इनमें search नहीं होती, पर query इन्हें index से बाहर गए बिना पढ़ सकती है।",
              hg: "<code>INCLUDE</code> in columns ko index ke leaf par rakhta hai. Ye sorted nahi hote aur inmein search nahi hoti, par query inhe index se bahar gaye bina padh sakti hai."
            }
          },
          {
            code: "WITH (INDEX(IX_Tickets_Customer))",
            note: {
              en: "An index hint forces the plain index, so the lookup is guaranteed. Hints are for teaching and emergencies, not everyday code.",
              hi: "Index hint plain index को मजबूर करता है, इसलिए lookup पक्का होता है। Hints सिखाने और emergency के लिए हैं, रोज़ के code के लिए नहीं।",
              hg: "Index hint plain index ko majboor karta hai, isliye lookup pakka hota hai. Hints sikhane aur emergency ke liye hain, roz ke code ke liye nahi."
            }
          },
          {
            code: "WITH (INDEX(IX_Tickets_Customer_Covering))",
            note: {
              en: "Same query, forced through the covering index. It returns the same rows without any lookup.",
              hi: "वही query, covering index से चलवाई गई। वही rows मिलती हैं, बिना किसी lookup के।",
              hg: "Wahi query, covering index se chalwayi gayi. Wahi rows milti hain, bina kisi lookup ke."
            }
          },
          {
            code: "FROM sys.dm_db_index_usage_stats AS s",
            note: {
              en: "This view counts how each index was used. The plain index shows 1 seek and the clustered key (<code>PK_SupportTickets</code>) shows 1 lookup. The covering index shows 1 seek and caused no lookup. The count is per query, not per row.",
              hi: "यह view बताता है कि हर index कैसे इस्तेमाल हुआ। Plain index में 1 seek और clustered key (<code>PK_SupportTickets</code>) में 1 lookup दिखता है। Covering index में 1 seek और कोई lookup नहीं। गिनती query के हिसाब से है, row के हिसाब से नहीं।",
              hg: "Ye view batata hai ki har index kaise istemaal hua. Plain index mein 1 seek aur clustered key (<code>PK_SupportTickets</code>) mein 1 lookup dikhta hai. Covering index mein 1 seek aur koi lookup nahi. Ginti query ke hisaab se hai, row ke hisaab se nahi."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Putting every selected column in the index <i>key</i>. Key columns are sorted and copied up the whole tree; use <code>INCLUDE</code> for columns you only read.</li><li>Including wide columns such as <code>nvarchar(max)</code>: the index becomes as big as the table.</li><li>Adding a covering index for a query that runs once a month. Cover only the hot queries.</li></ul>",
          hi: "<ul><li>Select किए हर column को index की <i>key</i> में डाल देना। Key columns sorted होते हैं और पूरे tree में copy होते हैं; जो columns सिर्फ़ पढ़ने हैं उनके लिए <code>INCLUDE</code> लो।</li><li><code>nvarchar(max)</code> जैसे चौड़े columns include करना: index table जितना बड़ा हो जाता है।</li><li>महीने में एक बार चलने वाली query के लिए covering index बनाना। सिर्फ़ ज़्यादा चलने वाली queries को cover करो।</li></ul>",
          hg: "<ul><li>Select kiye har column ko index ki <i>key</i> mein daal dena. Key columns sorted hote hain aur poore tree mein copy hote hain; jo columns sirf padhne hain unke liye <code>INCLUDE</code> lo.</li><li><code>nvarchar(max)</code> jaise chaure columns include karna: index table jitna bada ho jaata hai.</li><li>Mahine mein ek baar chalne wali query ke liye covering index banana. Sirf zyada chalne wali queries ko cover karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Cover your top three to five hot queries once you have seen the key lookup in the plan or in Query Store. Put equality and join columns first in the key, then the sort column, then the rest in <code>INCLUDE</code>. Do not cover rare reports.</p>",
          hi: "<p>अपनी सबसे ज़्यादा चलने वाली तीन-पाँच queries को cover करो, पर तभी जब plan या Query Store में key lookup दिख चुका हो। Equality और join columns key में पहले रखो, फिर sort वाला column, बाक़ी <code>INCLUDE</code> में। कभी-कभार चलने वाली reports को cover मत करो।</p>",
          hg: "<p>Apni sabse zyada chalne wali teen-paanch queries ko cover karo, par tabhi jab plan ya Query Store mein key lookup dikh chuka ho. Equality aur join columns key mein pehle rakho, phir sort wala column, baaki <code>INCLUDE</code> mein. Kabhi-kabhaar chalne wali reports ko cover mat karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>The ticket table now has a wide <code>Issue</code> column. Build an index that covers the query \"status of one customer's tickets\" and includes <b>only</b> <code>Status</code>. Force it with a hint, read the tickets of customer 5, and print the index usage so that it shows no key lookup.</p>",
            hi: "<p>Ticket table में अब एक चौड़ा <code>Issue</code> column है। एक ऐसा index बनाओ जो \"एक customer के tickets का status\" query को cover करे और <b>सिर्फ़</b> <code>Status</code> include करे। Hint से उसे चलाओ, customer 5 के tickets पढ़ो, और index usage print करो ताकि कोई key lookup न दिखे।</p>",
            hg: "<p>Ticket table mein ab ek chaura <code>Issue</code> column hai. Ek aisa index banao jo \"ek customer ke tickets ka status\" query ko cover kare aur <b>sirf</b> <code>Status</code> include kare. Hint se use chalao, customer 5 ke tickets padho, aur index usage print karo taaki koi key lookup na dikhe.</p>"
          },
          hint: {
            en: "<p><code>(CustomerId) INCLUDE (Status)</code>. Keep <code>Issue</code> out of the index.</p>",
            hi: "<p><code>(CustomerId) INCLUDE (Status)</code>। <code>Issue</code> को index से बाहर रखो।</p>",
            hg: "<p><code>(CustomerId) INCLUDE (Status)</code>. <code>Issue</code> ko index se bahar rakho.</p>"
          },
          solution: {
            caption: {
              en: "Solution: cover only what the query reads",
              hi: "हल: सिर्फ़ वही cover करो जो query पढ़ती है",
              hg: "Solution: sirf wahi cover karo jo query padhti hai"
            },
            lang: "sql",
            src: "CREATE TABLE dbo.SupportTickets (\n    TicketId   int         NOT NULL CONSTRAINT PK_SupportTickets PRIMARY KEY,\n    CustomerId int         NOT NULL,\n    Status     varchar(10) NOT NULL,\n    Issue      varchar(50) NOT NULL\n);\nINSERT dbo.SupportTickets (TicketId, CustomerId, Status, Issue)\nSELECT TOP (500) n, (n % 20) + 1, IIF(n % 4 = 0, 'Open', 'Closed'), 'issue ' + CAST(n AS varchar(10))\nFROM (SELECT ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) + 500 AS n\n      FROM sys.all_objects AS a CROSS JOIN sys.all_objects AS b) AS nums\nORDER BY n;\n\n-- Only Status is needed, so only Status goes into INCLUDE (Issue stays out: it is wide)\nCREATE INDEX IX_Tickets_Customer_Status ON dbo.SupportTickets (CustomerId) INCLUDE (Status);\nGO\nDECLARE @rows TABLE (Status varchar(10));\nINSERT @rows SELECT Status FROM dbo.SupportTickets WITH (INDEX(IX_Tickets_Customer_Status)) WHERE CustomerId = 5;\nSELECT COUNT(*) AS rows_read FROM @rows;\nGO\nSELECT i.name AS index_name, s.user_seeks, s.user_lookups\nFROM sys.dm_db_index_usage_stats AS s\nJOIN sys.indexes AS i ON i.object_id = s.object_id AND i.index_id = s.index_id\nWHERE s.database_id = DB_ID() AND s.object_id = OBJECT_ID('dbo.SupportTickets')\nORDER BY i.name;",
            check: "run",
            expected: "25\nIX_Tickets_Customer_Status 1 0\nPK_SupportTickets 0 0"
          }
        },
        quiz: {
          q: {
            en: "<p>A query filters on <code>CustomerId</code> but also selects <code>Status</code>. How do you make the index cover it?</p>",
            hi: "<p>Query <code>CustomerId</code> पर filter करती है और <code>Status</code> भी select करती है। Index को उसे cover कराने के लिए क्या करोगे?</p>",
            hg: "<p>Query <code>CustomerId</code> par filter karti hai aur <code>Status</code> bhi select karti hai. Index ko use cover karane ke liye kya karoge?</p>"
          },
          options: [
            {
              en: "Drop the index so the table is scanned",
              hi: "Index हटा दो ताकि table scan हो",
              hg: "Index hata do taaki table scan ho"
            },
            {
              en: "Make <code>Status</code> the clustered key",
              hi: "<code>Status</code> को clustered key बनाओ",
              hg: "<code>Status</code> ko clustered key banao"
            },
            {
              en: "Add <code>WITH (NOLOCK)</code> to the query",
              hi: "Query में <code>WITH (NOLOCK)</code> लगाओ",
              hg: "Query mein <code>WITH (NOLOCK)</code> lagao"
            },
            {
              en: "Keep <code>CustomerId</code> as the key and add <code>Status</code> with <code>INCLUDE</code>",
              hi: "<code>CustomerId</code> को key रखो और <code>Status</code> को <code>INCLUDE</code> से जोड़ो",
              hg: "<code>CustomerId</code> ko key rakho aur <code>Status</code> ko <code>INCLUDE</code> se jodo"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Search column in the key, extra read columns in <code>INCLUDE</code>: the index then holds everything the query needs, so no key lookup is needed.</p>",
            hi: "<p>Search वाला column key में, पढ़ने वाले extra columns <code>INCLUDE</code> में: तब index में query की ज़रूरत की हर चीज़ होती है, इसलिए key lookup नहीं लगता।</p>",
            hg: "<p>Search wala column key mein, padhne wale extra columns <code>INCLUDE</code> mein: tab index mein query ki zaroorat ki har cheez hoti hai, isliye key lookup nahi lagta.</p>"
          }
        },
        recap: {
          en: "<ul><li>A key lookup is one extra trip into the table per row found.</li><li>Covering = search column in the key, read-only columns in <code>INCLUDE</code>.</li><li>Cover the hot queries only; wide columns and rare queries are not worth it.</li></ul>",
          hi: "<ul><li>Key lookup मिली हर row के लिए table में एक extra चक्कर है।</li><li>Covering = search column key में, सिर्फ़ पढ़ने वाले columns <code>INCLUDE</code> में।</li><li>सिर्फ़ ज़्यादा चलने वाली queries cover करो; चौड़े columns और कभी-कभार की queries इसके लायक़ नहीं।</li></ul>",
          hg: "<ul><li>Key lookup mili har row ke liye table mein ek extra chakkar hai.</li><li>Covering = search column key mein, sirf padhne wale columns <code>INCLUDE</code> mein.</li><li>Sirf zyada chalne wali queries cover karo; chaure columns aur kabhi-kabhaar ki queries iske layak nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "The same query through a plain index and a covering index",
            hi: "एक ही query plain index और covering index से",
            hg: "Ek hi query plain index aur covering index se"
          },
          lang: "sql",
          src: "CREATE TABLE dbo.SupportTickets (\n    TicketId   int         NOT NULL CONSTRAINT PK_SupportTickets PRIMARY KEY,\n    CustomerId int         NOT NULL,\n    Status     varchar(10) NOT NULL,\n    Priority   tinyint     NOT NULL\n);\n-- 3000 tickets for 50 customers: ticket n belongs to customer (n % 50) + 1\nINSERT dbo.SupportTickets (TicketId, CustomerId, Status, Priority)\nSELECT TOP (3000) n, (n % 50) + 1, IIF(n % 10 = 0, 'Open', 'Closed'), (n % 3) + 1\nFROM (SELECT ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) + 500 AS n\n      FROM sys.all_objects AS a CROSS JOIN sys.all_objects AS b) AS nums\nORDER BY n;\n\nCREATE INDEX IX_Tickets_Customer ON dbo.SupportTickets (CustomerId);\nCREATE INDEX IX_Tickets_Customer_Covering ON dbo.SupportTickets (CustomerId) INCLUDE (Status, Priority);\nGO\n-- Same question twice, forced through each index (rows go to a variable; we only study how they were found)\nDECLARE @rows TABLE (Status varchar(10), Priority tinyint);\nINSERT @rows SELECT Status, Priority FROM dbo.SupportTickets WITH (INDEX(IX_Tickets_Customer)) WHERE CustomerId = 7;\nINSERT @rows SELECT Status, Priority FROM dbo.SupportTickets WITH (INDEX(IX_Tickets_Customer_Covering)) WHERE CustomerId = 7;\nSELECT COUNT(*) AS rows_read FROM @rows;\nGO\n-- How SQL Server says it found them: seeks and key lookups per index\nSELECT i.name AS index_name, s.user_seeks, s.user_lookups\nFROM sys.dm_db_index_usage_stats AS s\nJOIN sys.indexes AS i ON i.object_id = s.object_id AND i.index_id = s.index_id\nWHERE s.database_id = DB_ID() AND s.object_id = OBJECT_ID('dbo.SupportTickets')\nORDER BY i.name;",
          check: "run",
          expected: "120\nIX_Tickets_Customer 1 0\nIX_Tickets_Customer_Covering 1 0\nPK_SupportTickets 0 1"
        }
      ]
    },
    {
      id: "sargable-plans",
      depth: "short",
      title: {
        en: "SARGable queries and execution plans",
        hi: "SARGable queries और execution plans",
        hg: "SARGable queries aur execution plans"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 2 made an index that can answer a query without lookups. But an index only helps if the query is written so SQL Server can use its sort order. Here we meet the most common way to switch the index off by accident: a function wrapped around the indexed column.</p>",
          hi: "<p>पाठ 2 में ऐसा index बना जो बिना lookup के query का जवाब दे सकता है। पर index तभी काम आता है जब query ऐसे लिखी हो कि SQL Server उसका sort order इस्तेमाल कर सके। यहाँ index को ग़लती से बंद करने का सबसे आम तरीका मिलता है: indexed column के चारों तरफ़ function लपेट देना।</p>",
          hg: "<p>Lesson 2 mein aisa index bana jo bina lookup ke query ka jawab de sakta hai. Par index tabhi kaam aata hai jab query aise likhi ho ki SQL Server uska sort order istemaal kar sake. Yahan index ko galti se band karne ka sabse aam tareeka milta hai: indexed column ke charon taraf function lapet dena.</p>"
        },
        what: {
          en: "<p>A predicate is <b>SARGable</b> (Search ARGument able) when SQL Server can <b>seek</b> straight to the matching range of an index. If you put a function or arithmetic on the column, it must <b>scan</b> every entry and test it. An <b>execution plan</b> is the map of how SQL Server decided to run the query; seek versus scan is the first thing to read in it.</p>",
          hi: "<p>Predicate <b>SARGable</b> (Search ARGument able) तब है जब SQL Server index की matching range तक सीधे <b>seek</b> कर सके। Column पर function या arithmetic लगा दो, तो उसे हर entry <b>scan</b> करके जाँचनी पड़ती है। <b>Execution plan</b> वह नक्शा है जिसमें SQL Server ने तय किया कि query कैसे चलेगी; seek बनाम scan उसमें सबसे पहले पढ़ने की चीज़ है।</p>",
          hg: "<p>Predicate <b>SARGable</b> (Search ARGument able) tab hai jab SQL Server index ki matching range tak seedhe <b>seek</b> kar sake. Column par function ya arithmetic laga do, to use har entry <b>scan</b> karke jaanchni padti hai. <b>Execution plan</b> wo naksha hai jisme SQL Server ne tay kiya ki query kaise chalegi; seek versus scan usme sabse pehle padhne ki cheez hai.</p>"
        },
        why: {
          en: "<p>A report that filters tickets by year looks harmless. With <code>YEAR(CreatedOn) = 2026</code> it reads the whole index; with a date range it jumps to the right place. Both return the same rows, so the output never warns you. Only the plan, or the cost at a million rows, shows the difference.</p>",
          hi: "<p>साल के हिसाब से tickets filter करने वाली report सीधी-सादी लगती है। <code>YEAR(CreatedOn) = 2026</code> से पूरा index पढ़ना पड़ता है; date range से सीधे सही जगह पहुँच जाते हैं। दोनों वही rows लौटाते हैं, इसलिए output कभी चेतावनी नहीं देता। फ़र्क़ सिर्फ़ plan में दिखता है, या दस लाख rows पर लगने वाले समय में।</p>",
          hg: "<p>Saal ke hisaab se tickets filter karne wali report seedhi-saadi lagti hai. <code>YEAR(CreatedOn) = 2026</code> se poora index padhna padta hai; date range se seedhe sahi jagah pahunch jaate hain. Dono wahi rows lautate hain, isliye output kabhi chetawani nahi deta. Fark sirf plan mein dikhta hai, ya das lakh rows par lagne wale samay mein.</p>"
        },
        analogy: {
          en: "<p>A dictionary. \"Words starting with <i>pra</i>\" is easy: open the page and read. \"Words whose letters add up to 50\" means reading every word in the book. The index is the dictionary; a function on the column is the second kind of question.</p>",
          hi: "<p>शब्दकोश (dictionary)। \"<i>pra</i> से शुरू होने वाले शब्द\" आसान है: पन्ना खोलो और पढ़ो। \"वे शब्द जिनके अक्षरों का जोड़ 50 है\" में किताब का हर शब्द पढ़ना पड़ेगा। Index शब्दकोश है; column पर function लगाना दूसरी तरह का सवाल है।</p>",
          hg: "<p>Shabdkosh (dictionary). \"<i>pra</i> se shuru hone wale shabd\" aasan hai: panna kholo aur padho. \"Wo shabd jinke aksharon ka jod 50 hai\" mein kitaab ka har shabd padhna padega. Index shabdkosh hai; column par function lagana doosri tarah ka sawaal hai.</p>"
        },
        lines: [
          {
            code: "CREATE INDEX IX_Tickets_CreatedOn ON dbo.SupportTickets (CreatedOn);",
            note: {
              en: "An index sorted by <code>CreatedOn</code>. This is what a good predicate can use to jump to a range.",
              hi: "<code>CreatedOn</code> के हिसाब से sorted index। अच्छा predicate इसी से किसी range तक छलाँग लगा सकता है।",
              hg: "<code>CreatedOn</code> ke hisaab se sorted index. Achha predicate isi se kisi range tak chhalaang laga sakta hai."
            }
          },
          {
            code: "WHERE YEAR(CreatedOn) = 2026;",
            note: {
              en: "Not SARGable: SQL Server cannot know where 2026 starts without computing <code>YEAR</code> for every entry, so it scans the index.",
              hi: "SARGable नहीं: हर entry पर <code>YEAR</code> निकाले बिना SQL Server नहीं जान सकता कि 2026 कहाँ शुरू होता है, इसलिए वह index scan करता है।",
              hg: "SARGable nahi: har entry par <code>YEAR</code> nikaale bina SQL Server nahi jaan sakta ki 2026 kahan shuru hota hai, isliye wo index scan karta hai."
            }
          },
          {
            code: "WHERE CreatedOn >= '2026-01-01' AND CreatedOn < '2027-01-01';",
            note: {
              en: "SARGable: the column is bare and compared with a half-open range (<code>&gt;=</code> start, <code>&lt;</code> next start). This also works when <code>CreatedOn</code> has a time part, unlike <code>BETWEEN</code> with 23:59:59.",
              hi: "SARGable: column खाली है और half-open range से compare हो रहा है (<code>&gt;=</code> शुरुआत, <code>&lt;</code> अगली शुरुआत)। <code>CreatedOn</code> में समय हो तब भी यह सही चलता है, जबकि 23:59:59 वाला <code>BETWEEN</code> नहीं चलता।",
              hg: "SARGable: column khaali hai aur half-open range se compare ho raha hai (<code>&gt;=</code> shuruaat, <code>&lt;</code> agli shuruaat). <code>CreatedOn</code> mein samay ho tab bhi ye sahi chalta hai, jabki 23:59:59 wala <code>BETWEEN</code> nahi chalta."
            }
          },
          {
            code: "SELECT s.user_seeks, s.user_scans",
            note: {
              en: "Usage counts for the date index. Both queries were forced onto it with a hint (as in lesson 2), so only the predicate differs: the range made 1 seek, the function 1 scan. Facts, not timings.",
              hi: "Date index की usage गिनती। दोनों queries hint से इसी index पर चलाई गईं (पाठ 2 की तरह), इसलिए फ़र्क़ सिर्फ़ predicate का है: range से 1 seek, function से 1 scan। ये facts हैं, समय नहीं।",
              hg: "Date index ki usage ginti. Dono queries hint se isi index par chalayi gayin (lesson 2 ki tarah), isliye fark sirf predicate ka hai: range se 1 seek, function se 1 scan. Ye facts hain, samay nahi."
            }
          },
          {
            code: "DATEADD(HOUR, (n - 501) * 8, '2025-01-01')",
            note: {
              en: "One ticket every 8 hours from 1 January 2025, so 2026 holds exactly 365 days of tickets: 1095 rows (3 per day).",
              hi: "1 जनवरी 2025 से हर 8 घंटे में एक ticket, इसलिए 2026 में ठीक 365 दिन के tickets हैं: 1095 rows (रोज़ 3)।",
              hg: "1 January 2025 se har 8 ghante mein ek ticket, isliye 2026 mein theek 365 din ke tickets hain: 1095 rows (roz 3)."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Wrapping the column: <code>YEAR(col)</code>, <code>CONVERT(varchar(10), col, 23)</code>, <code>col + 1</code>, <code>ISNULL(col, 0)</code> on a nullable column. Move the work to the other side of the comparison. (Exception: <code>CAST(col AS date)</code> can still seek, with a rougher estimate.)</li><li>Comparing a <code>varchar</code> column with an <code>nvarchar</code> value. SQL Server converts the <i>column</i> (data type precedence), and the seek can become a scan. EF can cause this by default (Day 6).</li><li>A leading wildcard: <code>LIKE '%123'</code> cannot seek; <code>LIKE 'TKT-1%'</code> can.</li></ul>",
          hi: "<ul><li>Column को लपेटना: <code>YEAR(col)</code>, <code>CONVERT(varchar(10), col, 23)</code>, <code>col + 1</code>, nullable column पर <code>ISNULL(col, 0)</code>। काम comparison की दूसरी तरफ़ ले जाओ। (Exception: <code>CAST(col AS date)</code> फिर भी seek कर सकता है, पर estimate कम सही होता है।)</li><li><code>varchar</code> column की तुलना <code>nvarchar</code> value से करना। SQL Server <i>column</i> को convert करता है (data type precedence), और seek scan बन सकता है। EF यह by default कर सकता है (Day 6)।</li><li>शुरुआत में wildcard: <code>LIKE '%123'</code> seek नहीं कर सकता; <code>LIKE 'TKT-1%'</code> कर सकता है।</li></ul>",
          hg: "<ul><li>Column ko lapetna: <code>YEAR(col)</code>, <code>CONVERT(varchar(10), col, 23)</code>, <code>col + 1</code>, nullable column par <code>ISNULL(col, 0)</code>. Kaam comparison ki doosri taraf le jao. (Exception: <code>CAST(col AS date)</code> phir bhi seek kar sakta hai, par estimate kam sahi hota hai.)</li><li><code>varchar</code> column ki tulna <code>nvarchar</code> value se karna. SQL Server <i>column</i> ko convert karta hai (data type precedence), aur seek scan ban sakta hai. EF ye by default kar sakta hai (Day 6).</li><li>Shuruaat mein wildcard: <code>LIKE '%123'</code> seek nahi kar sakta; <code>LIKE 'TKT-1%'</code> kar sakta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Check the actual plan whenever a query is slow or gets slow without a code change: look for Index Seek versus Scan, Key Lookup, warnings and big gaps between estimated and actual rows. Rewrite for SARGability on hot paths; on a 500-row table the difference is invisible, so leave readable queries alone.</p>",
          hi: "<p>जब भी query धीमी हो या बिना code बदले धीमी होने लगे, actual plan देखो: Index Seek बनाम Scan, Key Lookup, warnings और estimated बनाम actual rows का बड़ा फ़र्क़। Hot paths पर SARGability के लिए query दोबारा लिखो; 500 rows की table पर फ़र्क़ दिखता ही नहीं, इसलिए पढ़ने में आसान queries को मत छेड़ो।</p>",
          hg: "<p>Jab bhi query dheemi ho ya bina code badle dheemi hone lage, actual plan dekho: Index Seek versus Scan, Key Lookup, warnings aur estimated versus actual rows ka bada fark. Hot paths par SARGability ke liye query dobara likho; 500 rows ki table par fark dikhta hi nahi, isliye padhne mein aasan queries ko mat chhedo.</p>"
        },
        exercise: {
          task: {
            en: "<p>This query finds tickets older than 30 days at 1 March 2025: <code>WHERE DATEADD(DAY, 30, CreatedOn) &lt; '2025-03-01'</code>. Run it, then write the SARGable version that keeps <code>CreatedOn</code> bare and show that both counts are equal.</p>",
            hi: "<p>यह query 1 मार्च 2025 को 30 दिन से पुराने tickets ढूँढती है: <code>WHERE DATEADD(DAY, 30, CreatedOn) &lt; '2025-03-01'</code>। इसे चलाओ, फिर SARGable version लिखो जिसमें <code>CreatedOn</code> खाली रहे, और दिखाओ कि दोनों counts बराबर हैं।</p>",
            hg: "<p>Ye query 1 March 2025 ko 30 din se purane tickets dhoondhti hai: <code>WHERE DATEADD(DAY, 30, CreatedOn) &lt; '2025-03-01'</code>. Ise chalao, phir SARGable version likho jisme <code>CreatedOn</code> khaali rahe, aur dikhao ki dono counts barabar hain.</p>"
          },
          hint: {
            en: "<p>Move the arithmetic to the constant: <code>CreatedOn &lt; DATEADD(DAY, -30, '2025-03-01')</code>.</p>",
            hi: "<p>Arithmetic को constant की तरफ़ ले जाओ: <code>CreatedOn &lt; DATEADD(DAY, -30, '2025-03-01')</code>।</p>",
            hg: "<p>Arithmetic ko constant ki taraf le jao: <code>CreatedOn &lt; DATEADD(DAY, -30, '2025-03-01')</code>.</p>"
          },
          solution: {
            caption: {
              en: "Solution: arithmetic on the constant side",
              hi: "हल: arithmetic constant की तरफ़",
              hg: "Solution: arithmetic constant ki taraf"
            },
            lang: "sql",
            src: "CREATE TABLE dbo.SupportTickets (\n    TicketId  int          NOT NULL CONSTRAINT PK_SupportTickets PRIMARY KEY,\n    CreatedOn datetime2(0) NOT NULL\n);\nINSERT dbo.SupportTickets (TicketId, CreatedOn)\nSELECT TOP (3000) n, DATEADD(HOUR, (n - 501) * 8, '2025-01-01')\nFROM (SELECT ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) + 500 AS n\n      FROM sys.all_objects AS a CROSS JOIN sys.all_objects AS b) AS nums\nORDER BY n;\nCREATE INDEX IX_Tickets_CreatedOn ON dbo.SupportTickets (CreatedOn);\nGO\n-- Slow way: tickets older than 30 days at the reference date, with a function on the column\nSELECT COUNT(*) AS with_function FROM dbo.SupportTickets\nWHERE DATEADD(DAY, 30, CreatedOn) < '2025-03-01';\n\n-- Fast way: do the arithmetic on the other side, so CreatedOn stays bare\nSELECT COUNT(*) AS bare_column FROM dbo.SupportTickets\nWHERE CreatedOn < DATEADD(DAY, -30, '2025-03-01');",
            check: "run",
            expected: "87\n87"
          }
        },
        quiz: {
          q: {
            en: "<p>Which predicate on an indexed <code>CreatedOn</code> column can use an index seek?</p>",
            hi: "<p>Indexed <code>CreatedOn</code> column पर कौन-सा predicate index seek इस्तेमाल कर सकता है?</p>",
            hg: "<p>Indexed <code>CreatedOn</code> column par kaun-sa predicate index seek istemaal kar sakta hai?</p>"
          },
          options: [
            {
              en: "<code>CreatedOn &gt;= '2026-01-01' AND CreatedOn &lt; '2027-01-01'</code>",
              hi: "<code>CreatedOn &gt;= '2026-01-01' AND CreatedOn &lt; '2027-01-01'</code> लिखना",
              hg: "<code>CreatedOn &gt;= '2026-01-01' AND CreatedOn &lt; '2027-01-01'</code>"
            },
            {
              en: "<code>YEAR(CreatedOn) = 2026</code>",
              hi: "<code>YEAR(CreatedOn) = 2026</code> लिखना",
              hg: "<code>YEAR(CreatedOn) = 2026</code>"
            },
            {
              en: "<code>CONVERT(varchar(10), CreatedOn, 23) = '2026-01-01'</code>",
              hi: "<code>CONVERT(varchar(10), CreatedOn, 23) = '2026-01-01'</code> लिखना",
              hg: "<code>CONVERT(varchar(10), CreatedOn, 23) = '2026-01-01'</code>"
            },
            {
              en: "<code>DATEADD(DAY, 1, CreatedOn) &gt; '2026-01-01'</code>",
              hi: "<code>DATEADD(DAY, 1, CreatedOn) &gt; '2026-01-01'</code> लिखना",
              hg: "<code>DATEADD(DAY, 1, CreatedOn) &gt; '2026-01-01'</code>"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Only the first keeps the column bare. The other three compute something from every row before comparing, so the sort order of the index cannot be used.</p>",
            hi: "<p>सिर्फ़ पहला column को खाली रखता है। बाक़ी तीनों तुलना से पहले हर row से कुछ निकालते हैं, इसलिए index का sort order काम नहीं आ सकता।</p>",
            hg: "<p>Sirf pehla column ko khaali rakhta hai. Baaki teenon tulna se pehle har row se kuch nikaalte hain, isliye index ka sort order kaam nahi aa sakta.</p>"
          }
        },
        recap: {
          en: "<ul><li>Keep the indexed column bare; move functions and arithmetic to the other side.</li><li>Match the data type (<code>varchar</code> column, <code>varchar</code> value) so the column is not converted.</li><li>Read the plan for Seek versus Scan; same output does not mean same cost.</li></ul>",
          hi: "<ul><li>Indexed column को खाली रखो; function और arithmetic दूसरी तरफ़ ले जाओ।</li><li>Data type मिलाओ (<code>varchar</code> column, <code>varchar</code> value) ताकि column convert न हो।</li><li>Seek बनाम Scan के लिए plan पढ़ो; output एक जैसा होने का मतलब cost एक जैसी नहीं।</li></ul>",
          hg: "<ul><li>Indexed column ko khaali rakho; function aur arithmetic doosri taraf le jao.</li><li>Data type milao (<code>varchar</code> column, <code>varchar</code> value) taaki column convert na ho.</li><li>Seek versus Scan ke liye plan padho; output ek jaisa hone ka matlab cost ek jaisi nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A function on the column versus a range, and how the index was used",
            hi: "Column पर function बनाम range, और index कैसे इस्तेमाल हुआ",
            hg: "Column par function versus range, aur index kaise istemaal hua"
          },
          lang: "sql",
          src: "CREATE TABLE dbo.SupportTickets (\n    TicketId  int          NOT NULL CONSTRAINT PK_SupportTickets PRIMARY KEY,\n    CreatedOn datetime2(0) NOT NULL,\n    Reference varchar(20)  NOT NULL\n);\n-- 3000 tickets, one every 8 hours from 2025-01-01\nINSERT dbo.SupportTickets (TicketId, CreatedOn, Reference)\nSELECT TOP (3000) n, DATEADD(HOUR, (n - 501) * 8, '2025-01-01'), 'TKT-' + CAST(n AS varchar(10))\nFROM (SELECT ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) + 500 AS n\n      FROM sys.all_objects AS a CROSS JOIN sys.all_objects AS b) AS nums\nORDER BY n;\nCREATE INDEX IX_Tickets_CreatedOn ON dbo.SupportTickets (CreatedOn);\nGO\n-- Not sargable: the function hides CreatedOn, so the whole index is read\nSELECT COUNT(*) AS with_function FROM dbo.SupportTickets WITH (INDEX(IX_Tickets_CreatedOn))\nWHERE YEAR(CreatedOn) = 2026;\n-- Sargable: same rows, bare column against a half-open range\nSELECT COUNT(*) AS with_range FROM dbo.SupportTickets WITH (INDEX(IX_Tickets_CreatedOn))\nWHERE CreatedOn >= '2026-01-01' AND CreatedOn < '2027-01-01';\nGO\nSELECT s.user_seeks, s.user_scans\nFROM sys.dm_db_index_usage_stats AS s\nWHERE s.database_id = DB_ID() AND s.object_id = OBJECT_ID('dbo.SupportTickets') AND s.index_id = INDEXPROPERTY(s.object_id, 'IX_Tickets_CreatedOn', 'IndexID');",
          check: "run",
          expected: "1095\n1095\n1 1"
        }
      ]
    },
    {
      id: "joins-anti-joins",
      depth: "short",
      title: {
        en: "Joins and anti-joins",
        hi: "Joins और anti-joins",
        hg: "Joins aur anti-joins"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 1 to 3 were about reaching rows fast in one table. Real questions span tables: customers and their tickets, agents and their load. A join is only fast when the join columns are indexed (lesson 1), but first it has to be <i>correct</i>. This lesson covers the two join mistakes that give silently wrong answers.</p>",
          hi: "<p>पाठ 1 से 3 एक table में rows तेज़ी से पहुँचने के बारे में थे। असली सवाल कई tables में फैले होते हैं: customers और उनके tickets, agents और उनका load। Join तभी तेज़ होता है जब join columns indexed हों (पाठ 1), पर पहले उसे <i>सही</i> होना चाहिए। यह पाठ उन दो join ग़लतियों के बारे में है जो चुपचाप ग़लत जवाब देती हैं।</p>",
          hg: "<p>Lesson 1 se 3 ek table mein rows tezi se pahunchne ke baare mein the. Asli sawaal kai tables mein phaile hote hain: customers aur unke tickets, agents aur unka load. Join tabhi tez hota hai jab join columns indexed hon (lesson 1), par pehle use <i>sahi</i> hona chahiye. Ye lesson un do join galtiyon ke baare mein hai jo chupchaap galat jawab deti hain.</p>"
        },
        what: {
          en: "<p>A <b>LEFT JOIN</b> keeps every row of the left table, with NULLs where the right table has no match. An <b>anti-join</b> asks \"which rows have <i>no</i> match\" and is written with <code>NOT EXISTS</code>. The two traps: <code>NOT IN</code> breaks when the list contains NULL, and a <code>WHERE</code> filter on the right table silently turns a LEFT JOIN into an inner join.</p>",
          hi: "<p><b>LEFT JOIN</b> left table की हर row रखता है, और जहाँ right table में match नहीं होता वहाँ NULL आता है। <b>Anti-join</b> पूछता है \"किन rows का कोई match <i>नहीं</i> है\" और <code>NOT EXISTS</code> से लिखा जाता है। दो जाल: list में NULL हो तो <code>NOT IN</code> टूट जाता है, और right table पर <code>WHERE</code> filter LEFT JOIN को चुपचाप inner join बना देता है।</p>",
          hg: "<p><b>LEFT JOIN</b> left table ki har row rakhta hai, aur jahan right table mein match nahi hota wahan NULL aata hai. <b>Anti-join</b> poochta hai \"kin rows ka koi match <i>nahi</i> hai\" aur <code>NOT EXISTS</code> se likha jaata hai. Do jaal: list mein NULL ho to <code>NOT IN</code> toot jaata hai, aur right table par <code>WHERE</code> filter LEFT JOIN ko chupchaap inner join bana deta hai.</p>"
        },
        why: {
          en: "<p>\"Which customers have no tickets?\" and \"which agents are idle?\" are everyday CRM questions. A wrong join does not throw an error. It returns a plausible list that is missing rows. One unassigned ticket (<code>AgentId</code> NULL) is enough to empty a <code>NOT IN</code> report.</p>",
          hi: "<p>\"किन customers का कोई ticket नहीं?\" और \"कौन-से agents खाली हैं?\" CRM के रोज़ के सवाल हैं। ग़लत join error नहीं देता। वह ऐसी list लौटाता है जो ठीक लगती है पर उसमें rows कम होती हैं। एक unassigned ticket (<code>AgentId</code> NULL) <code>NOT IN</code> वाली report को खाली करने के लिए काफ़ी है।</p>",
          hg: "<p>\"Kin customers ka koi ticket nahi?\" aur \"kaun-se agents khaali hain?\" CRM ke roz ke sawaal hain. Galat join error nahi deta. Wo aisi list lautata hai jo theek lagti hai par usmein rows kam hoti hain. Ek unassigned ticket (<code>AgentId</code> NULL) <code>NOT IN</code> wali report ko khaali karne ke liye kaafi hai.</p>"
        },
        analogy: {
          en: "<p>A wedding. The guest list and the gift list are two tables. \"Who came but gave no gift?\" is an anti-join. If one gift card has no name on it (a NULL), the question \"whose name is <i>not in</i> the gift list?\" cannot be answered for anyone, because that nameless card might belong to any of them.</p>",
          hi: "<p>शादी। Guest list और gift list दो tables हैं। \"कौन आया पर gift नहीं दिया?\" anti-join है। अगर एक gift card पर नाम ही नहीं लिखा (NULL), तो \"किसका नाम gift list में <i>नहीं</i> है?\" का जवाब किसी के लिए नहीं दिया जा सकता, क्योंकि वह बिना नाम वाला card किसी का भी हो सकता है।</p>",
          hg: "<p>Shaadi. Guest list aur gift list do tables hain. \"Kaun aaya par gift nahi diya?\" anti-join hai. Agar ek gift card par naam hi nahi likha (NULL), to \"kiska naam gift list mein <i>nahi</i> hai?\" ka jawab kisi ke liye nahi diya ja sakta, kyunki wo bina naam wala card kisi ka bhi ho sakta hai.</p>"
        },
        lines: [
          {
            code: "LEFT JOIN dbo.SupportTickets AS t ON t.CustomerId = c.CustomerId",
            note: {
              en: "Every customer stays in the result. Neha has no tickets, so her ticket columns are NULL.",
              hi: "हर customer result में रहता है। Neha का कोई ticket नहीं, इसलिए उसके ticket columns NULL हैं।",
              hg: "Har customer result mein rehta hai. Neha ka koi ticket nahi, isliye uske ticket columns NULL hain."
            }
          },
          {
            code: "SELECT c.Name, COUNT(t.TicketId) AS tickets",
            note: {
              en: "<code>COUNT(t.TicketId)</code> skips NULLs, so Neha counts 0. <code>COUNT(*)</code> would count her NULL row as 1.",
              hi: "<code>COUNT(t.TicketId)</code> NULL को छोड़ देता है, इसलिए Neha का count 0 आता है। <code>COUNT(*)</code> उसकी NULL row को 1 गिन लेता।",
              hg: "<code>COUNT(t.TicketId)</code> NULL ko chhod deta hai, isliye Neha ka count 0 aata hai. <code>COUNT(*)</code> uski NULL row ko 1 gin leta."
            }
          },
          {
            code: "WHERE NOT EXISTS (SELECT 1 FROM dbo.SupportTickets AS t WHERE t.AgentId = a.AgentId)",
            note: {
              en: "The anti-join: keep an agent when no ticket matches. It prints <code>Dev</code>, the only idle agent, even though ticket 504 has a NULL agent.",
              hi: "Anti-join: agent तब रखो जब कोई ticket match न करे। यह <code>Dev</code> print करता है, जो अकेला खाली agent है, भले ही ticket 504 का agent NULL है।",
              hg: "Anti-join: agent tab rakho jab koi ticket match na kare. Ye <code>Dev</code> print karta hai, jo akela khaali agent hai, bhale hi ticket 504 ka agent NULL hai."
            }
          },
          {
            code: "WHERE a.AgentId NOT IN (SELECT t.AgentId FROM dbo.SupportTickets AS t);",
            note: {
              en: "The subquery returns a NULL, so <code>a.AgentId NOT IN (...)</code> is never true: the count is 0. This is the silent wrong answer.",
              hi: "Subquery एक NULL लौटाती है, इसलिए <code>a.AgentId NOT IN (...)</code> कभी true नहीं होता: count 0 आता है। यही चुपचाप ग़लत जवाब है।",
              hg: "Subquery ek NULL lautati hai, isliye <code>a.AgentId NOT IN (...)</code> kabhi true nahi hota: count 0 aata hai. Yahi chupchaap galat jawab hai."
            }
          },
          {
            code: "WHERE t.Status = 'Open';",
            note: {
              en: "A <code>WHERE</code> on the right table throws away the NULL rows, so the LEFT JOIN behaves like an inner join. Result: 2 customers (Asha, Meena).",
              hi: "Right table पर <code>WHERE</code> NULL वाली rows हटा देता है, इसलिए LEFT JOIN inner join जैसा बन जाता है। नतीजा: 2 customers (Asha, Meena)।",
              hg: "Right table par <code>WHERE</code> NULL wali rows hata deta hai, isliye LEFT JOIN inner join jaisa ban jaata hai. Nateeja: 2 customers (Asha, Meena)."
            }
          },
          {
            code: "ON t.CustomerId = c.CustomerId AND t.Status = 'Open';",
            note: {
              en: "The same test inside <code>ON</code> only decides which tickets match. All 4 customers stay.",
              hi: "वही शर्त <code>ON</code> के अंदर सिर्फ़ यह तय करती है कि कौन-से tickets match हों। चारों customers बने रहते हैं।",
              hg: "Wahi shart <code>ON</code> ke andar sirf ye tay karti hai ki kaun-se tickets match hon. Chaaron customers bane rehte hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using <code>NOT IN (subquery)</code> on a column that can be NULL. Use <code>NOT EXISTS</code>.</li><li>Filtering the right table of a LEFT JOIN in <code>WHERE</code>. Put that condition in <code>ON</code>.</li><li>Counting with <code>COUNT(*)</code> after a LEFT JOIN, so customers with no tickets show 1 instead of 0.</li></ul>",
          hi: "<ul><li>ऐसे column पर <code>NOT IN (subquery)</code> लगाना जो NULL हो सकता है। <code>NOT EXISTS</code> लो।</li><li>LEFT JOIN की right table को <code>WHERE</code> में filter करना। वह शर्त <code>ON</code> में रखो।</li><li>LEFT JOIN के बाद <code>COUNT(*)</code> से गिनना, जिससे बिना tickets वाले customers 0 की जगह 1 दिखते हैं।</li></ul>",
          hg: "<ul><li>Aise column par <code>NOT IN (subquery)</code> lagana jo NULL ho sakta hai. <code>NOT EXISTS</code> lo.</li><li>LEFT JOIN ki right table ko <code>WHERE</code> mein filter karna. Wo shart <code>ON</code> mein rakho.</li><li>LEFT JOIN ke baad <code>COUNT(*)</code> se ginna, jisse bina tickets wale customers 0 ki jagah 1 dikhte hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>NOT EXISTS</code> for every \"has no ...\" question. Use LEFT JOIN when you need the left rows even without matches, and put right-table conditions in <code>ON</code>. Index the join columns (for example <code>SupportTickets.CustomerId</code>) so each join is a seek, not a scan.</p>",
          hi: "<p>हर \"जिसका ... नहीं है\" सवाल के लिए <code>NOT EXISTS</code> लो। जब match न होने पर भी left rows चाहिए हों तो LEFT JOIN लो, और right table की शर्तें <code>ON</code> में रखो। Join columns (जैसे <code>SupportTickets.CustomerId</code>) पर index रखो ताकि हर join seek हो, scan नहीं।</p>",
          hg: "<p>Har \"jiska ... nahi hai\" sawaal ke liye <code>NOT EXISTS</code> lo. Jab match na hone par bhi left rows chahiye hon to LEFT JOIN lo, aur right table ki shartein <code>ON</code> mein rakho. Join columns (jaise <code>SupportTickets.CustomerId</code>) par index rakho taaki har join seek ho, scan nahi.</p>"
        },
        exercise: {
          task: {
            en: "<p>List every customer with the number of their <b>Open</b> tickets, including customers with 0. Use a LEFT JOIN and put the Status test where it keeps Neha in the result.</p>",
            hi: "<p>हर customer के <b>Open</b> tickets की गिनती के साथ list करो, 0 वाले customers भी शामिल। LEFT JOIN लो और Status की शर्त वहाँ रखो जहाँ Neha result में बनी रहे।</p>",
            hg: "<p>Har customer ke <b>Open</b> tickets ki ginti ke saath list karo, 0 wale customers bhi shaamil. LEFT JOIN lo aur Status ki shart wahan rakho jahan Neha result mein bani rahe.</p>"
          },
          hint: {
            en: "<p>Put <code>AND t.Status = 'Open'</code> in the <code>ON</code> clause and count <code>t.TicketId</code>.</p>",
            hi: "<p><code>AND t.Status = 'Open'</code> को <code>ON</code> clause में रखो और <code>t.TicketId</code> गिनो।</p>",
            hg: "<p><code>AND t.Status = 'Open'</code> ko <code>ON</code> clause mein rakho aur <code>t.TicketId</code> gino.</p>"
          },
          solution: {
            caption: {
              en: "Solution: the filter lives in ON",
              hi: "हल: filter ON में है",
              hg: "Solution: filter ON mein hai"
            },
            lang: "sql",
            src: "CREATE TABLE dbo.Customers (CustomerId int PRIMARY KEY, Name varchar(20) NOT NULL);\nCREATE TABLE dbo.SupportTickets (TicketId int PRIMARY KEY, CustomerId int NOT NULL, Status varchar(10) NOT NULL);\nINSERT dbo.Customers VALUES (1,'Asha'),(2,'Ravi'),(3,'Meena'),(4,'Neha');\nINSERT dbo.SupportTickets VALUES (501,1,'Open'),(502,1,'Closed'),(503,2,'Closed'),(504,3,'Open');\n\n-- Every customer with the number of OPEN tickets (0 allowed): the Status test lives in ON\nSELECT c.Name, COUNT(t.TicketId) AS open_tickets\nFROM dbo.Customers AS c\nLEFT JOIN dbo.SupportTickets AS t ON t.CustomerId = c.CustomerId AND t.Status = 'Open'\nGROUP BY c.Name\nORDER BY c.Name;",
            check: "run",
            expected: "Asha 1\nMeena 1\nNeha 0\nRavi 0"
          }
        },
        quiz: {
          q: {
            en: "<p>Why does <code>WHERE a.AgentId NOT IN (SELECT AgentId FROM SupportTickets)</code> return no rows when one ticket has a NULL agent?</p>",
            hi: "<p>जब एक ticket का agent NULL हो, तो <code>WHERE a.AgentId NOT IN (SELECT AgentId FROM SupportTickets)</code> कोई row क्यों नहीं देता?</p>",
            hg: "<p>Jab ek ticket ka agent NULL ho, to <code>WHERE a.AgentId NOT IN (SELECT AgentId FROM SupportTickets)</code> koi row kyon nahi deta?</p>"
          },
          options: [
            {
              en: "<code>NOT IN</code> only works on the clustered key",
              hi: "<code>NOT IN</code> सिर्फ़ clustered key पर चलता है",
              hg: "<code>NOT IN</code> sirf clustered key par chalta hai"
            },
            {
              en: "SQL Server ignores subqueries that contain NULL",
              hi: "जिस subquery में NULL हो उसे SQL Server ignore कर देता है",
              hg: "Jis subquery mein NULL ho use SQL Server ignore kar deta hai"
            },
            {
              en: "Comparing with NULL gives \"unknown\", so the <code>NOT IN</code> test is never true",
              hi: "NULL से तुलना का नतीजा \"unknown\" होता है, इसलिए <code>NOT IN</code> की शर्त कभी true नहीं होती",
              hg: "NULL se tulna ka nateeja \"unknown\" hota hai, isliye <code>NOT IN</code> ki shart kabhi true nahi hoti"
            },
            {
              en: "The query throws error 547 and returns nothing",
              hi: "Query error 547 देती है और कुछ नहीं लौटाती",
              hg: "Query error 547 deti hai aur kuch nahi lautati"
            }
          ],
          answer: 2,
          explain: {
            en: "<p><code>x &lt;&gt; NULL</code> is unknown, not true, so no agent can pass <code>NOT IN</code>. There is no error, which is why it is dangerous. <code>NOT EXISTS</code> compares row by row and is not fooled.</p>",
            hi: "<p><code>x &lt;&gt; NULL</code> unknown होता है, true नहीं, इसलिए कोई agent <code>NOT IN</code> पास नहीं कर पाता। कोई error नहीं आता, इसीलिए यह ख़तरनाक है। <code>NOT EXISTS</code> row-by-row compare करता है और धोखा नहीं खाता।</p>",
            hg: "<p><code>x &lt;&gt; NULL</code> unknown hota hai, true nahi, isliye koi agent <code>NOT IN</code> paas nahi kar paata. Koi error nahi aata, isiliye ye khatarnaak hai. <code>NOT EXISTS</code> row-by-row compare karta hai aur dhokha nahi khaata.</p>"
          }
        },
        recap: {
          en: "<ul><li>LEFT JOIN keeps all left rows; <code>COUNT(right.col)</code> gives 0 for no match.</li><li>For \"has no ...\" use <code>NOT EXISTS</code>, never <code>NOT IN</code> on a nullable column.</li><li>Right-table conditions of a LEFT JOIN belong in <code>ON</code>, not <code>WHERE</code>.</li></ul>",
          hi: "<ul><li>LEFT JOIN left की सारी rows रखता है; <code>COUNT(right.col)</code> match न होने पर 0 देता है।</li><li>\"जिसका ... नहीं है\" के लिए <code>NOT EXISTS</code> लो, nullable column पर कभी <code>NOT IN</code> नहीं।</li><li>LEFT JOIN में right table की शर्तें <code>ON</code> में रखो, <code>WHERE</code> में नहीं।</li></ul>",
          hg: "<ul><li>LEFT JOIN left ki saari rows rakhta hai; <code>COUNT(right.col)</code> match na hone par 0 deta hai.</li><li>\"Jiska ... nahi hai\" ke liye <code>NOT EXISTS</code> lo, nullable column par kabhi <code>NOT IN</code> nahi.</li><li>LEFT JOIN mein right table ki shartein <code>ON</code> mein rakho, <code>WHERE</code> mein nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "LEFT JOIN, NOT EXISTS versus NOT IN, and the WHERE trap",
            hi: "LEFT JOIN, NOT EXISTS बनाम NOT IN, और WHERE का जाल",
            hg: "LEFT JOIN, NOT EXISTS versus NOT IN, aur WHERE ka jaal"
          },
          lang: "sql",
          src: "CREATE TABLE dbo.Customers (CustomerId int PRIMARY KEY, Name varchar(20) NOT NULL);\nCREATE TABLE dbo.Agents (AgentId int PRIMARY KEY, Name varchar(20) NOT NULL);\nCREATE TABLE dbo.SupportTickets (\n    TicketId int PRIMARY KEY, CustomerId int NOT NULL, AgentId int NULL, Status varchar(10) NOT NULL);\nINSERT dbo.Customers VALUES (1,'Asha'),(2,'Ravi'),(3,'Meena'),(4,'Neha');\nINSERT dbo.Agents VALUES (1,'Meena'),(2,'Kiran'),(3,'Dev');\nINSERT dbo.SupportTickets VALUES\n (501,1,1,'Open'),(502,1,2,'Closed'),(503,2,1,'Closed'),(504,3,NULL,'Open');   -- 504 is unassigned\n\n-- 1. LEFT JOIN keeps every customer, even Neha with no tickets (COUNT of a right-side column ignores NULL)\nSELECT c.Name, COUNT(t.TicketId) AS tickets\nFROM dbo.Customers AS c\nLEFT JOIN dbo.SupportTickets AS t ON t.CustomerId = c.CustomerId\nGROUP BY c.Name\nORDER BY c.Name;\n\n-- 2. Anti-join: agents with no ticket. NOT EXISTS works; NOT IN meets the NULL AgentId and returns nothing\nSELECT a.Name AS idle_agent\nFROM dbo.Agents AS a\nWHERE NOT EXISTS (SELECT 1 FROM dbo.SupportTickets AS t WHERE t.AgentId = a.AgentId)\nORDER BY a.Name;\n\nSELECT COUNT(*) AS not_in_rows\nFROM dbo.Agents AS a\nWHERE a.AgentId NOT IN (SELECT t.AgentId FROM dbo.SupportTickets AS t);\n\n-- 3. A filter on the right table in WHERE turns the LEFT JOIN into an inner join\nSELECT COUNT(DISTINCT c.CustomerId) AS where_filter\nFROM dbo.Customers AS c\nLEFT JOIN dbo.SupportTickets AS t ON t.CustomerId = c.CustomerId\nWHERE t.Status = 'Open';\n\nSELECT COUNT(DISTINCT c.CustomerId) AS on_filter\nFROM dbo.Customers AS c\nLEFT JOIN dbo.SupportTickets AS t ON t.CustomerId = c.CustomerId AND t.Status = 'Open';",
          check: "run",
          expected: "Asha 2\nMeena 1\nNeha 0\nRavi 1\nDev\n0\n2\n4"
        }
      ]
    },
    {
      id: "window-functions",
      depth: "short",
      title: {
        en: "Window functions",
        hi: "Window functions: हर row के साथ हिसाब",
        hg: "Window functions: har row ke saath hisaab"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 4 joined tables to answer \"who has no ticket?\". Another everyday question needs no join at all: \"what is each ticket's rank, its previous value, the running total so far?\" A plain <code>GROUP BY</code> squeezes rows into one per group. A window function keeps every row and adds a calculated column next to it, like the LINQ <code>GroupBy</code> and <code>Select</code> you wrote on Day 4, but done inside SQL Server.</p>",
          hi: "<p>पाठ 4 में tables join करके पूछा था \"किसका ticket नहीं है?\"। एक और रोज़ का सवाल बिना join के हल होता है: \"हर ticket की rank, उसकी पिछली value और अब तक का running total क्या है?\" सादा <code>GROUP BY</code> rows को हर group की एक row में समेट देता है। Window function हर row रखता है और उसके बगल में calculated column जोड़ देता है, जैसे Day 4 का LINQ <code>GroupBy</code> और <code>Select</code>, पर यह SQL Server के अंदर होता है।</p>",
          hg: "<p>Lesson 4 mein tables join karke poocha tha \"kiska ticket nahi hai?\". Ek aur roz ka sawaal bina join ke hal hota hai: \"har ticket ki rank, uski pichhli value aur ab tak ka running total kya hai?\" Saada <code>GROUP BY</code> rows ko har group ki ek row mein samet deta hai. Window function har row rakhta hai aur uske bagal mein calculated column jod deta hai, jaise Day 4 ka LINQ <code>GroupBy</code> aur <code>Select</code>, par ye SQL Server ke andar hota hai.</p>"
        },
        what: {
          en: "<p>A <b>window function</b> calculates over a set of related rows (the \"window\") but returns one value per row. <code>OVER (PARTITION BY x ORDER BY y)</code> defines the window: <code>PARTITION BY</code> splits rows into groups, <code>ORDER BY</code> sets the order inside each group. <code>ROW_NUMBER</code>, <code>RANK</code>, <code>DENSE_RANK</code>, <code>LAG</code>, <code>LEAD</code> and <code>SUM() OVER</code> are the ones you use daily.</p>",
          hi: "<p><b>Window function</b> related rows के एक set (\"window\") पर calculate करता है, पर हर row के लिए एक value लौटाता है। <code>OVER (PARTITION BY x ORDER BY y)</code> window तय करता है: <code>PARTITION BY</code> rows को groups में बाँटता है, <code>ORDER BY</code> हर group के अंदर क्रम तय करता है। <code>ROW_NUMBER</code>, <code>RANK</code>, <code>DENSE_RANK</code>, <code>LAG</code>, <code>LEAD</code> और <code>SUM() OVER</code> रोज़ काम आने वाले हैं।</p>",
          hg: "<p><b>Window function</b> related rows ke ek set (\"window\") par calculate karta hai, par har row ke liye ek value lautata hai. <code>OVER (PARTITION BY x ORDER BY y)</code> window tay karta hai: <code>PARTITION BY</code> rows ko groups mein baantta hai, <code>ORDER BY</code> har group ke andar kram tay karta hai. <code>ROW_NUMBER</code>, <code>RANK</code>, <code>DENSE_RANK</code>, <code>LAG</code>, <code>LEAD</code> aur <code>SUM() OVER</code> roz kaam aane wale hain.</p>"
        },
        why: {
          en: "<p>Support leads ask for the latest ticket per customer, each agent's running workload, or the top-priority tickets with ties handled fairly. Without window functions you write self-joins or loops that are slow and hard to read. With them it is one short query.</p>",
          hi: "<p>Support leads हर customer का सबसे नया ticket, हर agent का running workload, या ties को ठीक से संभालते हुए top-priority tickets माँगते हैं। Window functions के बिना self-joins या loops लिखने पड़ते हैं जो धीमे और पढ़ने में मुश्किल होते हैं। इनके साथ यह एक छोटी query है।</p>",
          hg: "<p>Support leads har customer ka sabse naya ticket, har agent ka running workload, ya ties ko theek se sambhalte hue top-priority tickets maangte hain. Window functions ke bina self-joins ya loops likhne padte hain jo dheeme aur padhne mein mushkil hote hain. Inke saath ye ek chhoti query hai.</p>"
        },
        analogy: {
          en: "<p>A cricket scoreboard. After every ball it shows that ball's runs, the total so far, and you can glance at the previous over. No ball disappears into a single final score. A points table where two teams have the same points shows ties the same way: both are 1st, and the next team is 3rd (RANK) or 2nd (DENSE_RANK).</p>",
          hi: "<p>Cricket का scoreboard। हर ball के बाद वह उस ball के runs, अब तक का total दिखाता है, और आप पिछला over भी देख सकते हैं। कोई ball एक अंतिम score में गुम नहीं होती। Points table में दो teams के points बराबर हों तो ties ऐसे ही दिखते हैं: दोनों 1st, और अगली team 3rd (RANK) या 2nd (DENSE_RANK)।</p>",
          hg: "<p>Cricket ka scoreboard. Har ball ke baad wo us ball ke runs, ab tak ka total dikhata hai, aur aap pichhla over bhi dekh sakte hain. Koi ball ek antim score mein gum nahi hoti. Points table mein do teams ke points barabar hon to ties aise hi dikhte hain: dono 1st, aur agli team 3rd (RANK) ya 2nd (DENSE_RANK).</p>"
        },
        lines: [
          {
            code: "ROW_NUMBER() OVER (ORDER BY Priority DESC, TicketId) AS row_no,",
            note: {
              en: "<code>ROW_NUMBER</code> never repeats. The second sort column <code>TicketId</code> breaks ties, so the numbering is the same on every run.",
              hi: "<code>ROW_NUMBER</code> कभी दोहराता नहीं। दूसरा sort column <code>TicketId</code> ties तोड़ता है, इसलिए numbering हर run में एक जैसी रहती है।",
              hg: "<code>ROW_NUMBER</code> kabhi dohraata nahi. Doosra sort column <code>TicketId</code> ties todta hai, isliye numbering har run mein ek jaisi rehti hai."
            }
          },
          {
            code: "RANK() OVER (ORDER BY Priority DESC) AS rnk,",
            note: {
              en: "<code>RANK</code> gives tied rows the same number and then skips: 1, 1, 3, 3, 5, 5.",
              hi: "<code>RANK</code> बराबर वाली rows को एक ही number देता है और फिर आगे छोड़ देता है: 1, 1, 3, 3, 5, 5।",
              hg: "<code>RANK</code> barabar wali rows ko ek hi number deta hai aur phir aage chhod deta hai: 1, 1, 3, 3, 5, 5."
            }
          },
          {
            code: "DENSE_RANK() OVER (ORDER BY Priority DESC) AS dense_rnk",
            note: {
              en: "<code>DENSE_RANK</code> ties share a number but nothing is skipped: 1, 1, 2, 2, 3, 3.",
              hi: "<code>DENSE_RANK</code> में ties एक number बाँटती हैं पर कुछ छूटता नहीं: 1, 1, 2, 2, 3, 3।",
              hg: "<code>DENSE_RANK</code> mein ties ek number baantti hain par kuch chhootta nahi: 1, 1, 2, 2, 3, 3."
            }
          },
          {
            code: "LAG(Minutes) OVER (PARTITION BY Agent ORDER BY TicketId) AS prev_minutes,",
            note: {
              en: "<code>LAG</code> reads the previous row inside the same agent's group. The first ticket of each agent has no previous row, so it shows NULL.",
              hi: "<code>LAG</code> उसी agent के group की पिछली row पढ़ता है। हर agent के पहले ticket की पिछली row नहीं होती, इसलिए NULL दिखता है।",
              hg: "<code>LAG</code> usi agent ke group ki pichhli row padhta hai. Har agent ke pehle ticket ki pichhli row nahi hoti, isliye NULL dikhta hai."
            }
          },
          {
            code: "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running",
            note: {
              en: "An explicit <code>ROWS</code> frame: add every row from the start of the group up to this one. Without it, the default frame treats rows with the same <code>ORDER BY</code> value as one block.",
              hi: "साफ़ लिखा <code>ROWS</code> frame: group की शुरुआत से इस row तक सब जोड़ो। इसके बिना default frame एक ही <code>ORDER BY</code> value वाली rows को एक block मान लेता है।",
              hg: "Saaf likha <code>ROWS</code> frame: group ki shuruaat se is row tak sab jodo. Iske bina default frame ek hi <code>ORDER BY</code> value wali rows ko ek block maan leta hai."
            }
          },
          {
            code: "ROW_NUMBER() OVER (PARTITION BY Customer ORDER BY TicketId DESC) AS rn",
            note: {
              en: "Numbers each customer's tickets newest first. Ticket 1 in each group is the latest one.",
              hi: "हर customer के tickets को नए से पुराने क्रम में number देता है। हर group का नंबर 1 सबसे नया ticket है।",
              hg: "Har customer ke tickets ko naye se purane kram mein number deta hai. Har group ka number 1 sabse naya ticket hai."
            }
          },
          {
            code: "WHERE rn = 1",
            note: {
              en: "A window function cannot appear directly in <code>WHERE</code>, so the numbering sits in a subquery and the outer query filters it. This is the standard \"top 1 per group\" shape.",
              hi: "Window function सीधे <code>WHERE</code> में नहीं आ सकता, इसलिए numbering subquery में रहती है और बाहरी query उसे filter करती है। \"हर group का top 1\" का यही standard रूप है।",
              hg: "Window function seedhe <code>WHERE</code> mein nahi aa sakta, isliye numbering subquery mein rehti hai aur bahari query use filter karti hai. \"Har group ka top 1\" ka yahi standard roop hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using <code>SUM() OVER (ORDER BY x)</code> without a frame. The default is <code>RANGE</code>, so rows with equal <code>x</code> get the same total. Write <code>ROWS</code> for a true row-by-row total.</li><li>Ordering by a column with ties and expecting the same numbering every time. Add a unique tie-breaker such as the id.</li></ul>",
          hi: "<ul><li>Frame के बिना <code>SUM() OVER (ORDER BY x)</code> लिखना। Default <code>RANGE</code> है, इसलिए बराबर <code>x</code> वाली rows को एक ही total मिलता है। सच में row-by-row total के लिए <code>ROWS</code> लिखो।</li><li>ऐसे column से order करना जिसमें ties हों और हर बार वही numbering की उम्मीद करना। Id जैसा unique tie-breaker जोड़ो।</li></ul>",
          hg: "<ul><li>Frame ke bina <code>SUM() OVER (ORDER BY x)</code> likhna. Default <code>RANGE</code> hai, isliye barabar <code>x</code> wali rows ko ek hi total milta hai. Sach mein row-by-row total ke liye <code>ROWS</code> likho.</li><li>Aise column se order karna jisme ties hon aur har baar wahi numbering ki ummeed karna. Id jaisa unique tie-breaker jodo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use window functions for top-N per group, de-duplication (<code>ROW_NUMBER() = 1</code>), running totals, previous-versus-current comparison and rankings. Use plain <code>GROUP BY</code> when you only need one row per group. On big tables an index on the partition and order columns can remove the sort.</p>",
          hi: "<p>हर group का top-N, duplicates हटाना (<code>ROW_NUMBER() = 1</code>), running totals, पिछली बनाम मौजूदा value की तुलना और rankings के लिए window functions लो। जब हर group की सिर्फ़ एक row चाहिए तो सादा <code>GROUP BY</code> लो। बड़ी tables पर partition और order columns का index sort हटा सकता है।</p>",
          hg: "<p>Har group ka top-N, duplicates hatana (<code>ROW_NUMBER() = 1</code>), running totals, pichhli versus maujooda value ki tulna aur rankings ke liye window functions lo. Jab har group ki sirf ek row chahiye to saada <code>GROUP BY</code> lo. Badi tables par partition aur order columns ka index sort hata sakta hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>For each customer, show every ticket together with the id of the <b>next</b> ticket of the same customer (NULL for the last one). Order the result by customer, then ticket id.</p>",
            hi: "<p>हर customer के लिए हर ticket के साथ उसी customer के <b>अगले</b> ticket का id दिखाओ (आख़िरी के लिए NULL)। Result को customer और फिर ticket id से order करो।</p>",
            hg: "<p>Har customer ke liye har ticket ke saath usi customer ke <b>agle</b> ticket ka id dikhao (aakhiri ke liye NULL). Result ko customer aur phir ticket id se order karo.</p>"
          },
          hint: {
            en: "<p><code>LEAD(TicketId) OVER (PARTITION BY Customer ORDER BY TicketId)</code>.</p>",
            hi: "<p><code>LEAD(TicketId) OVER (PARTITION BY Customer ORDER BY TicketId)</code>।</p>",
            hg: "<p><code>LEAD(TicketId) OVER (PARTITION BY Customer ORDER BY TicketId)</code>.</p>"
          },
          solution: {
            caption: {
              en: "Solution: LEAD per customer",
              hi: "हल: हर customer पर LEAD",
              hg: "Solution: har customer par LEAD"
            },
            lang: "sql",
            src: "CREATE TABLE dbo.SupportTickets (TicketId int PRIMARY KEY, Customer varchar(20) NOT NULL);\nINSERT dbo.SupportTickets VALUES (501,'Asha'),(502,'Ravi'),(503,'Asha'),(504,'Meena'),(505,'Ravi'),(506,'Asha');\n\n-- Next ticket of the same customer (NULL when there is none)\nSELECT Customer, TicketId,\n       LEAD(TicketId) OVER (PARTITION BY Customer ORDER BY TicketId) AS next_ticket\nFROM dbo.SupportTickets\nORDER BY Customer, TicketId;",
            check: "run",
            expected: "Asha 501 503\nAsha 503 506\nAsha 506 NULL\nMeena 504 NULL\nRavi 502 505\nRavi 505 NULL"
          }
        },
        quiz: {
          q: {
            en: "<p>Two tickets share the top priority. Which function gives them both rank 1 and the next ticket rank 3?</p>",
            hi: "<p>दो tickets की priority सबसे ऊँची और बराबर है। कौन-सा function दोनों को rank 1 और अगले ticket को rank 3 देता है?</p>",
            hg: "<p>Do tickets ki priority sabse oonchi aur barabar hai. Kaun-sa function dono ko rank 1 aur agle ticket ko rank 3 deta hai?</p>"
          },
          options: [
            {
              en: "<code>DENSE_RANK()</code>",
              hi: "<code>DENSE_RANK()</code> लिखना",
              hg: "<code>DENSE_RANK()</code>"
            },
            {
              en: "<code>RANK()</code>",
              hi: "<code>RANK()</code> लिखना",
              hg: "<code>RANK()</code>"
            },
            {
              en: "<code>ROW_NUMBER()</code>",
              hi: "<code>ROW_NUMBER()</code> लिखना",
              hg: "<code>ROW_NUMBER()</code>"
            },
            {
              en: "<code>LAG()</code>",
              hi: "<code>LAG()</code> लिखना",
              hg: "<code>LAG()</code>"
            }
          ],
          answer: 1,
          explain: {
            en: "<p><code>RANK</code> leaves a gap after a tie (1, 1, 3). <code>DENSE_RANK</code> gives 1, 1, 2. <code>ROW_NUMBER</code> gives 1, 2, 3 and never ties.</p>",
            hi: "<p><code>RANK</code> tie के बाद gap छोड़ता है (1, 1, 3)। <code>DENSE_RANK</code> 1, 1, 2 देता है। <code>ROW_NUMBER</code> 1, 2, 3 देता है और ties नहीं बनाता।</p>",
            hg: "<p><code>RANK</code> tie ke baad gap chhodta hai (1, 1, 3). <code>DENSE_RANK</code> 1, 1, 2 deta hai. <code>ROW_NUMBER</code> 1, 2, 3 deta hai aur ties nahi banata.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>OVER (PARTITION BY ... ORDER BY ...)</code> keeps every row and adds a calculated column.</li><li>Ties: <code>ROW_NUMBER</code> never, <code>RANK</code> with gaps, <code>DENSE_RANK</code> without gaps.</li><li>Write <code>ROWS</code> for running totals; filter window results in an outer query.</li></ul>",
          hi: "<ul><li><code>OVER (PARTITION BY ... ORDER BY ...)</code> हर row रखता है और calculated column जोड़ता है।</li><li>Ties: <code>ROW_NUMBER</code> कभी नहीं, <code>RANK</code> gaps के साथ, <code>DENSE_RANK</code> बिना gaps के।</li><li>Running totals के लिए <code>ROWS</code> लिखो; window के नतीजे बाहरी query में filter करो।</li></ul>",
          hg: "<ul><li><code>OVER (PARTITION BY ... ORDER BY ...)</code> har row rakhta hai aur calculated column jodta hai.</li><li>Ties: <code>ROW_NUMBER</code> kabhi nahi, <code>RANK</code> gaps ke saath, <code>DENSE_RANK</code> bina gaps ke.</li><li>Running totals ke liye <code>ROWS</code> likho; window ke nateeje bahari query mein filter karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Ranking, LAG with a running total, and the latest ticket per customer",
            hi: "Ranking, LAG के साथ running total, और हर customer का सबसे नया ticket",
            hg: "Ranking, LAG ke saath running total, aur har customer ka sabse naya ticket"
          },
          lang: "sql",
          src: "CREATE TABLE dbo.SupportTickets (\n    TicketId int PRIMARY KEY, Customer varchar(20) NOT NULL, Agent varchar(20) NOT NULL,\n    Priority tinyint NOT NULL, Minutes int NOT NULL);   -- Minutes = time spent on the ticket\nINSERT dbo.SupportTickets VALUES\n (501,'Asha','Meena',3,40),(502,'Ravi','Kiran',2,25),(503,'Asha','Meena',3,15),\n (504,'Meena','Kiran',1,30),(505,'Ravi','Meena',2,20),(506,'Asha','Kiran',1,10);\n\n-- 1. Three ways to number the same ordering: ties are where they differ\nSELECT TicketId, Priority,\n       ROW_NUMBER() OVER (ORDER BY Priority DESC, TicketId) AS row_no,\n       RANK()       OVER (ORDER BY Priority DESC)           AS rnk,\n       DENSE_RANK() OVER (ORDER BY Priority DESC)           AS dense_rnk\nFROM dbo.SupportTickets\nORDER BY row_no;\n\n-- 2. Per agent: previous ticket's minutes (LAG) and a running total, row by row\nSELECT Agent, TicketId, Minutes,\n       LAG(Minutes) OVER (PARTITION BY Agent ORDER BY TicketId) AS prev_minutes,\n       SUM(Minutes) OVER (PARTITION BY Agent ORDER BY TicketId\n                          ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running\nFROM dbo.SupportTickets\nORDER BY Agent, TicketId;\n\n-- 3. Latest ticket per customer: number the rows, then filter in an outer query\nSELECT Customer, TicketId\nFROM (SELECT Customer, TicketId,\n             ROW_NUMBER() OVER (PARTITION BY Customer ORDER BY TicketId DESC) AS rn\n      FROM dbo.SupportTickets) AS x\nWHERE rn = 1\nORDER BY Customer;",
          check: "run",
          expected: "501 3 1 1 1\n503 3 2 1 1\n502 2 3 3 2\n505 2 4 3 2\n504 1 5 5 3\n506 1 6 5 3\nKiran 502 25 NULL 25\nKiran 504 30 25 55\nKiran 506 10 30 65\nMeena 501 40 NULL 40\nMeena 503 15 40 55\nMeena 505 20 15 75\nAsha 506\nMeena 504\nRavi 505"
        }
      ]
    },
    {
      id: "isolation-levels",
      depth: "short",
      title: {
        en: "Isolation levels and locks",
        hi: "Isolation levels और locks",
        hg: "Isolation levels aur locks"
      },
      lesson: {
        buildsOn: {
          en: "<p>So far one user ran each query alone. A real CRM has agents reading and updating the same tickets at the same moment. Day 6 showed <code>BeginTransaction</code> and the isolation level you pass from EF Core. This lesson looks inside SQL Server: what each level actually does, seen through the locks it keeps.</p>",
          hi: "<p>अब तक हर query अकेले एक user ने चलाई। असली CRM में agents एक ही समय पर वही tickets पढ़ते और बदलते हैं। Day 6 में EF Core से <code>BeginTransaction</code> और पास किया जाने वाला isolation level देखा था। यह पाठ SQL Server के अंदर देखता है: हर level असल में क्या करता है, उसके रखे locks के ज़रिए।</p>",
          hg: "<p>Ab tak har query akele ek user ne chalayi. Asli CRM mein agents ek hi samay par wahi tickets padhte aur badalte hain. Day 6 mein EF Core se <code>BeginTransaction</code> aur pass kiya jaane wala isolation level dekha tha. Ye lesson SQL Server ke andar dekhta hai: har level asal mein kya karta hai, uske rakhe locks ke zariye.</p>"
        },
        what: {
          en: "<p>An <b>isolation level</b> sets how much one transaction is protected from the changes of others. <b>READ COMMITTED</b> (the default) never shows uncommitted data. <b>REPEATABLE READ</b> also stops a row you read from changing. <b>SERIALIZABLE</b> also stops new rows from appearing in the range you read. <b>RCSI</b> and <b>SNAPSHOT</b> use row versions so readers do not wait for writers.</p>",
          hi: "<p><b>Isolation level</b> तय करता है कि एक transaction दूसरों के बदलावों से कितनी सुरक्षित है। <b>READ COMMITTED</b> (default) कभी uncommitted data नहीं दिखाता। <b>REPEATABLE READ</b> यह भी रोकता है कि पढ़ी हुई row बदल जाए। <b>SERIALIZABLE</b> यह भी रोकता है कि जिस range को पढ़ा उसमें नई rows आ जाएँ। <b>RCSI</b> और <b>SNAPSHOT</b> row versions इस्तेमाल करते हैं ताकि readers को writers का इंतज़ार न करना पड़े।</p>",
          hg: "<p><b>Isolation level</b> tay karta hai ki ek transaction doosron ke badlaavon se kitni surakshit hai. <b>READ COMMITTED</b> (default) kabhi uncommitted data nahi dikhata. <b>REPEATABLE READ</b> ye bhi rokta hai ki padhi hui row badal jaaye. <b>SERIALIZABLE</b> ye bhi rokta hai ki jis range ko padha usmein nayi rows aa jaayein. <b>RCSI</b> aur <b>SNAPSHOT</b> row versions istemaal karte hain taaki readers ko writers ka intezaar na karna pade.</p>"
        },
        why: {
          en: "<p>Too little isolation gives wrong data: two agents see the same ticket as unassigned, or a total changes between two reads. Too much makes everyone wait or deadlock. Choosing the level is choosing which of these risks your business rule can accept.</p>",
          hi: "<p>बहुत कम isolation से data ग़लत मिलता है: दो agents एक ही ticket को unassigned देखते हैं, या दो reads के बीच total बदल जाता है। बहुत ज़्यादा से सब इंतज़ार करते हैं या deadlock होता है। Level चुनना यह चुनना है कि आपका business rule इनमें से कौन-सा risk सह सकता है।</p>",
          hg: "<p>Bahut kam isolation se data galat milta hai: do agents ek hi ticket ko unassigned dekhte hain, ya do reads ke beech total badal jaata hai. Bahut zyada se sab intezaar karte hain ya deadlock hota hai. Level chunna ye chunna hai ki aapka business rule inmein se kaun-sa risk sah sakta hai.</p>"
        },
        analogy: {
          en: "<p>A library reading room. READ COMMITTED: you may read only books that are returned, but once you put one back, anyone can take it. REPEATABLE READ: the librarian puts a \"reserved\" slip on every book you read until you leave. SERIALIZABLE: the librarian also reserves the empty space on the shelf, so nobody can slip a new book into the section you looked at.</p>",
          hi: "<p>Library का reading room। READ COMMITTED: आप सिर्फ़ लौटाई हुई किताबें पढ़ सकते हैं, पर किताब वापस रखते ही कोई भी उसे ले जा सकता है। REPEATABLE READ: librarian आपके पढ़ी हर किताब पर जाने तक \"reserved\" पर्ची लगा देता है। SERIALIZABLE: librarian shelf की ख़ाली जगह भी reserve कर देता है, ताकि जिस हिस्से को आपने देखा उसमें कोई नई किताब न रख सके।</p>",
          hg: "<p>Library ka reading room. READ COMMITTED: aap sirf lautayi hui kitaabein padh sakte hain, par kitaab wapas rakhte hi koi bhi use le ja sakta hai. REPEATABLE READ: librarian aapke padhi har kitaab par jaane tak \"reserved\" parchi laga deta hai. SERIALIZABLE: librarian shelf ki khaali jagah bhi reserve kar deta hai, taaki jis hisse ko aapne dekha usmein koi nayi kitaab na rakh sake.</p>"
        },
        lines: [
          {
            code: "CREATE PROCEDURE dbo.ShowRowLocks",
            note: {
              en: "A small helper that reads three tickets inside a transaction and then asks SQL Server which row locks this session still holds. It uses whatever isolation level the caller set.",
              hi: "एक छोटा helper जो transaction के अंदर तीन tickets पढ़ता है और फिर SQL Server से पूछता है कि इस session के पास अब भी कौन-से row locks हैं। यह caller का set किया हुआ isolation level इस्तेमाल करता है।",
              hg: "Ek chhota helper jo transaction ke andar teen tickets padhta hai aur phir SQL Server se poochta hai ki is session ke paas ab bhi kaun-se row locks hain. Ye caller ka set kiya hua isolation level istemaal karta hai."
            }
          },
          {
            code: "FROM sys.dm_tran_locks",
            note: {
              en: "The live list of locks. We keep only this session (<code>@@SPID</code>) and only row (<code>KEY</code>) locks, so the output is the same on every run.",
              hi: "Locks की live list। हम सिर्फ़ यही session (<code>@@SPID</code>) और सिर्फ़ row (<code>KEY</code>) locks रखते हैं, इसलिए output हर run में एक जैसा रहता है।",
              hg: "Locks ki live list. Hum sirf yahi session (<code>@@SPID</code>) aur sirf row (<code>KEY</code>) locks rakhte hain, isliye output har run mein ek jaisa rehta hai."
            }
          },
          {
            code: "SET TRANSACTION ISOLATION LEVEL READ COMMITTED;",
            note: {
              en: "The default: the shared lock is released as soon as the row is read, so nothing is held. Another session could change those rows before you read them again.",
              hi: "Default: row पढ़ते ही shared lock छूट जाता है, इसलिए कुछ पकड़ा नहीं रहता। दोबारा पढ़ने से पहले कोई दूसरा session उन rows को बदल सकता है।",
              hg: "Default: row padhte hi shared lock chhoot jaata hai, isliye kuch pakda nahi rehta. Dobara padhne se pehle koi doosra session un rows ko badal sakta hai."
            }
          },
          {
            code: "SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;",
            note: {
              en: "Shared (<code>S</code>) locks stay on the rows you read until the transaction ends, so nobody can change them under you.",
              hi: "आपकी पढ़ी rows पर shared (<code>S</code>) locks transaction ख़त्म होने तक रहते हैं, इसलिए कोई उन्हें आपके नीचे से नहीं बदल सकता।",
              hg: "Aapki padhi rows par shared (<code>S</code>) locks transaction khatam hone tak rehte hain, isliye koi unhe aapke neeche se nahi badal sakta."
            }
          },
          {
            code: "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;",
            note: {
              en: "Adds a key-range lock (<code>RangeS-S</code>) that also covers the gaps between the rows, so no new ticket can appear in the range (no phantoms). More protection, more blocking.",
              hi: "Key-range lock (<code>RangeS-S</code>) जोड़ता है जो rows के बीच की ख़ाली जगह भी ढकता है, इसलिए range में कोई नया ticket नहीं आ सकता (phantoms नहीं)। ज़्यादा सुरक्षा, ज़्यादा blocking।",
              hg: "Key-range lock (<code>RangeS-S</code>) jodta hai jo rows ke beech ki khaali jagah bhi dhakta hai, isliye range mein koi naya ticket nahi aa sakta (phantoms nahi). Zyada suraksha, zyada blocking."
            }
          },
          {
            code: "ALTER DATABASE CURRENT SET READ_COMMITTED_SNAPSHOT ON WITH ROLLBACK IMMEDIATE;",
            note: {
              en: "Turns on <b>RCSI</b>: READ COMMITTED readers now read the last committed version of each row and take no shared locks, so they do not block writers. It is a database setting, and <code>ROLLBACK IMMEDIATE</code> disconnects other sessions, so do it in a quiet window.",
              hi: "<b>RCSI</b> चालू करता है: READ COMMITTED readers अब हर row का आख़िरी committed version पढ़ते हैं और shared locks नहीं लेते, इसलिए writers को नहीं रोकते। यह database setting है, और <code>ROLLBACK IMMEDIATE</code> दूसरे sessions को काट देता है, इसलिए शांत समय में करो।",
              hg: "<b>RCSI</b> chaalu karta hai: READ COMMITTED readers ab har row ka aakhiri committed version padhte hain aur shared locks nahi lete, isliye writers ko nahi rokte. Ye database setting hai, aur <code>ROLLBACK IMMEDIATE</code> doosre sessions ko kaat deta hai, isliye shaant samay mein karo."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Raising the level \"to be safe\". REPEATABLE READ and SERIALIZABLE hold locks longer, so they cause blocking and deadlocks.</li><li>Using <code>WITH (NOLOCK)</code> as a speed trick. It can return uncommitted, duplicated or missing rows.</li></ul>",
          hi: "<ul><li>\"सुरक्षित रहने के लिए\" level बढ़ाना। REPEATABLE READ और SERIALIZABLE locks ज़्यादा देर रखते हैं, इसलिए blocking और deadlocks होते हैं।</li><li><code>WITH (NOLOCK)</code> को speed की तरकीब बनाना। यह uncommitted, दोहराई हुई या ग़ायब rows लौटा सकता है।</li></ul>",
          hg: "<ul><li>\"Surakshit rehne ke liye\" level badhana. REPEATABLE READ aur SERIALIZABLE locks zyada der rakhte hain, isliye blocking aur deadlocks hote hain.</li><li><code>WITH (NOLOCK)</code> ko speed ki tarkeeb banana. Ye uncommitted, dohrayi hui ya gayab rows laut sakta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Stay on READ COMMITTED for most work. Switch the database to RCSI for read-heavy systems where readers and writers block each other. Use SNAPSHOT for a report that must see one consistent moment. Use SERIALIZABLE only for a narrow, measured need such as a money rule.</p>",
          hi: "<p>ज़्यादातर काम के लिए READ COMMITTED पर रहो। जिन read-heavy systems में readers और writers एक-दूसरे को रोकते हैं, वहाँ database को RCSI पर ले जाओ। जिस report को एक ही consistent पल दिखना चाहिए उसके लिए SNAPSHOT लो। SERIALIZABLE सिर्फ़ किसी तंग, नापी हुई ज़रूरत के लिए लो, जैसे पैसे का rule।</p>",
          hg: "<p>Zyadatar kaam ke liye READ COMMITTED par raho. Jin read-heavy systems mein readers aur writers ek-doosre ko rokte hain, wahan database ko RCSI par le jao. Jis report ko ek hi consistent pal dikhna chahiye uske liye SNAPSHOT lo. SERIALIZABLE sirf kisi tang, naapi hui zaroorat ke liye lo, jaise paise ka rule.</p>"
        },
        exercise: {
          task: {
            en: "<p>SNAPSHOT isolation must be allowed on the database before a transaction can use it. Print <code>snapshot_isolation_state_desc</code> from <code>sys.databases</code>, turn on <code>ALLOW_SNAPSHOT_ISOLATION</code>, and print it again.</p>",
            hi: "<p>Transaction SNAPSHOT isolation तभी इस्तेमाल कर सकती है जब database में उसकी इजाज़त हो। <code>sys.databases</code> से <code>snapshot_isolation_state_desc</code> print करो, <code>ALLOW_SNAPSHOT_ISOLATION</code> चालू करो, और फिर से print करो।</p>",
            hg: "<p>Transaction SNAPSHOT isolation tabhi istemaal kar sakti hai jab database mein uski ijaazat ho. <code>sys.databases</code> se <code>snapshot_isolation_state_desc</code> print karo, <code>ALLOW_SNAPSHOT_ISOLATION</code> chaalu karo, aur phir se print karo.</p>"
          },
          hint: {
            en: "<p><code>ALTER DATABASE CURRENT SET ALLOW_SNAPSHOT_ISOLATION ON;</code></p>",
            hi: "<p>यह लिखो: <code>ALTER DATABASE CURRENT SET ALLOW_SNAPSHOT_ISOLATION ON;</code></p>",
            hg: "<p><code>ALTER DATABASE CURRENT SET ALLOW_SNAPSHOT_ISOLATION ON;</code></p>"
          },
          solution: {
            caption: {
              en: "Solution: allow SNAPSHOT",
              hi: "हल: SNAPSHOT की इजाज़त",
              hg: "Solution: SNAPSHOT ki ijaazat"
            },
            lang: "sql",
            src: "-- SNAPSHOT is off until the database allows it\nSELECT snapshot_isolation_state_desc AS before_state FROM sys.databases WHERE name = DB_NAME();\n\nALTER DATABASE CURRENT SET ALLOW_SNAPSHOT_ISOLATION ON;\n\nSELECT snapshot_isolation_state_desc AS after_state FROM sys.databases WHERE name = DB_NAME();",
            check: "run",
            expected: "OFF\nON"
          }
        },
        quiz: {
          q: {
            en: "<p>Which problem does SERIALIZABLE prevent that REPEATABLE READ does not?</p>",
            hi: "<p>SERIALIZABLE कौन-सी समस्या रोकता है जो REPEATABLE READ नहीं रोकता?</p>",
            hg: "<p>SERIALIZABLE kaun-si samasya rokta hai jo REPEATABLE READ nahi rokta?</p>"
          },
          options: [
            {
              en: "Deadlocks",
              hi: "Deadlocks होना",
              hg: "Deadlocks"
            },
            {
              en: "Dirty reads of uncommitted data",
              hi: "Uncommitted data के dirty reads",
              hg: "Uncommitted data ke dirty reads"
            },
            {
              en: "Non-repeatable reads of a row you read",
              hi: "पढ़ी हुई row के non-repeatable reads",
              hg: "Padhi hui row ke non-repeatable reads"
            },
            {
              en: "Phantoms: new rows appearing in a range you already read",
              hi: "Phantoms: जिस range को पढ़ चुके उसमें नई rows का आ जाना",
              hg: "Phantoms: jis range ko padh chuke usmein nayi rows ka aa jaana"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>READ COMMITTED stops dirty reads. REPEATABLE READ also stops non-repeatable reads by keeping locks on the rows you read. Only SERIALIZABLE adds range locks, which also stop phantoms. It does not prevent deadlocks; it makes them more likely.</p>",
            hi: "<p>READ COMMITTED dirty reads रोकता है। REPEATABLE READ पढ़ी rows पर locks रखकर non-repeatable reads भी रोकता है। सिर्फ़ SERIALIZABLE range locks जोड़ता है, जो phantoms भी रोकते हैं। यह deadlocks नहीं रोकता; उन्हें और संभव बनाता है।</p>",
            hg: "<p>READ COMMITTED dirty reads rokta hai. REPEATABLE READ padhi rows par locks rakhkar non-repeatable reads bhi rokta hai. Sirf SERIALIZABLE range locks jodta hai, jo phantoms bhi rokte hain. Ye deadlocks nahi rokta; unhe aur sambhav banata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>READ COMMITTED: no dirty reads, locks released at once. REPEATABLE READ: keeps row locks. SERIALIZABLE: adds range locks.</li><li>RCSI and SNAPSHOT read row versions, so readers and writers stop blocking each other.</li><li>A higher level costs blocking and deadlocks: raise it only for a measured need.</li></ul>",
          hi: "<ul><li>READ COMMITTED: dirty reads नहीं, locks तुरंत छूटते हैं। REPEATABLE READ: row locks रखता है। SERIALIZABLE: range locks जोड़ता है।</li><li>RCSI और SNAPSHOT row versions पढ़ते हैं, इसलिए readers और writers एक-दूसरे को नहीं रोकते।</li><li>ऊँचा level blocking और deadlocks की कीमत पर आता है: सिर्फ़ नापी हुई ज़रूरत पर बढ़ाओ।</li></ul>",
          hg: "<ul><li>READ COMMITTED: dirty reads nahi, locks turant chhootte hain. REPEATABLE READ: row locks rakhta hai. SERIALIZABLE: range locks jodta hai.</li><li>RCSI aur SNAPSHOT row versions padhte hain, isliye readers aur writers ek-doosre ko nahi rokte.</li><li>Ooncha level blocking aur deadlocks ki keemat par aata hai: sirf naapi hui zaroorat par badhao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Which row locks each isolation level keeps, and switching on RCSI",
            hi: "हर isolation level कौन-से row locks रखता है, और RCSI चालू करना",
            hg: "Har isolation level kaun-se row locks rakhta hai, aur RCSI chaalu karna"
          },
          lang: "sql",
          src: "CREATE TABLE dbo.SupportTickets (TicketId int PRIMARY KEY, Status varchar(10) NOT NULL);\nINSERT dbo.SupportTickets VALUES (501,'Open'),(502,'Open'),(503,'Closed'),(504,'Open'),(505,'Closed');\nGO\n-- Reads three tickets inside a transaction, then reports which row locks the session still holds\nCREATE PROCEDURE dbo.ShowRowLocks\nAS\nBEGIN\n    SET NOCOUNT ON;\n    DECLARE @level varchar(20), @modes varchar(100), @n int;\n    SELECT @level = CASE transaction_isolation_level\n                        WHEN 2 THEN 'READ COMMITTED' WHEN 3 THEN 'REPEATABLE READ' WHEN 4 THEN 'SERIALIZABLE' END\n    FROM sys.dm_exec_sessions WHERE session_id = @@SPID;\n\n    BEGIN TRAN;\n    SELECT @n = COUNT(*) FROM dbo.SupportTickets WHERE TicketId BETWEEN 502 AND 504;\n    SELECT @modes = STRING_AGG(request_mode, ',') WITHIN GROUP (ORDER BY request_mode)\n    FROM (SELECT DISTINCT request_mode FROM sys.dm_tran_locks\n          WHERE request_session_id = @@SPID AND resource_type = 'KEY') AS m;\n    ROLLBACK;\n\n    SELECT @level AS isolation_level, ISNULL(@modes, '(no row locks held)') AS row_locks_held;\nEND;\nGO\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\nEXEC dbo.ShowRowLocks;\nSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nEXEC dbo.ShowRowLocks;\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\nEXEC dbo.ShowRowLocks;\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\nGO\n-- RCSI: readers use row versions instead of shared locks. A database setting, no code change\nALTER DATABASE CURRENT SET READ_COMMITTED_SNAPSHOT ON WITH ROLLBACK IMMEDIATE;\nSELECT is_read_committed_snapshot_on AS rcsi_on FROM sys.databases WHERE name = DB_NAME();",
          check: "run",
          expected: "READ COMMITTED (no row locks held)\nREPEATABLE READ S\nSERIALIZABLE RangeS-S\n1"
        }
      ]
    },
    {
      id: "deadlocks-retry",
      depth: "short",
      title: {
        en: "Transactions, deadlocks and retry",
        hi: "Transactions, deadlocks और retry",
        hg: "Transactions, deadlocks aur retry"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 6 showed that higher isolation holds locks longer. When two transactions each hold a lock the other needs, neither can move: that is a <b>deadlock</b>. This lesson writes the transaction so that deadlocks are rare, and handles the one that still happens. Day 6 had EF Core's <code>EnableRetryOnFailure</code>; here is the SQL side of the same idea.</p>",
          hi: "<p>पाठ 6 ने दिखाया कि ऊँचा isolation locks ज़्यादा देर रखता है। जब दो transactions हर एक वह lock पकड़े हो जो दूसरे को चाहिए, तो कोई आगे नहीं बढ़ता: यह <b>deadlock</b> है। यह पाठ transaction ऐसे लिखता है कि deadlocks कम हों, और जो फिर भी हो उसे संभालता है। Day 6 में EF Core का <code>EnableRetryOnFailure</code> था; यहाँ उसी idea का SQL वाला हिस्सा है।</p>",
          hg: "<p>Lesson 6 ne dikhaya ki ooncha isolation locks zyada der rakhta hai. Jab do transactions har ek wo lock pakde ho jo doosre ko chahiye, to koi aage nahi badhta: ye <b>deadlock</b> hai. Ye lesson transaction aise likhta hai ki deadlocks kam hon, aur jo phir bhi ho use sambhalta hai. Day 6 mein EF Core ka <code>EnableRetryOnFailure</code> tha; yahan usi idea ka SQL wala hissa hai.</p>"
        },
        what: {
          en: "<p>A <b>transaction</b> groups statements so they all succeed or all roll back. A <b>deadlock</b> is a cycle of waits; SQL Server picks one transaction as the <b>victim</b>, rolls it back and raises error <b>1205</b>. The cures are simple: touch rows in the <b>same order</b> everywhere, keep transactions <b>short</b>, and <b>retry</b> a victim a few times.</p>",
          hi: "<p><b>Transaction</b> statements को ऐसे जोड़ता है कि या तो सब सफल हों या सब rollback हों। <b>Deadlock</b> इंतज़ार का चक्कर है; SQL Server एक transaction को <b>victim</b> चुनता है, उसे rollback करता है और error <b>1205</b> देता है। इलाज सीधे हैं: हर जगह rows <b>एक ही क्रम</b> में छुओ, transactions <b>छोटी</b> रखो, और victim को कुछ बार <b>retry</b> करो।</p>",
          hg: "<p><b>Transaction</b> statements ko aise jodta hai ki ya to sab safal hon ya sab rollback hon. <b>Deadlock</b> intezaar ka chakkar hai; SQL Server ek transaction ko <b>victim</b> chunta hai, use rollback karta hai aur error <b>1205</b> deta hai. Ilaaj seedhe hain: har jagah rows <b>ek hi kram</b> mein chhuo, transactions <b>chhoti</b> rakho, aur victim ko kuch baar <b>retry</b> karo.</p>"
        },
        why: {
          en: "<p>Moving tickets from one agent to another touches two rows. If Meena-to-Kiran and Kiran-to-Meena run at the same moment, one locks Meena first and the other locks Kiran first, and they wait on each other forever. Under load this really happens.</p>",
          hi: "<p>एक agent से दूसरे को tickets ले जाना दो rows छूता है। Meena-से-Kiran और Kiran-से-Meena एक ही पल में चलें, तो एक पहले Meena को lock करता है और दूसरा पहले Kiran को, और दोनों हमेशा एक-दूसरे का इंतज़ार करते रहते हैं। Load में ऐसा सच में होता है।</p>",
          hg: "<p>Ek agent se doosre ko tickets le jaana do rows chhoota hai. Meena-se-Kiran aur Kiran-se-Meena ek hi pal mein chalein, to ek pehle Meena ko lock karta hai aur doosra pehle Kiran ko, aur dono hamesha ek-doosre ka intezaar karte rehte hain. Load mein aisa sach mein hota hai.</p>"
        },
        analogy: {
          en: "<p>Two cooks and two pans. If one grabs the big pan first and the other grabs the small pan first, each waits for the pan the other holds. A kitchen rule fixes it: \"always take the big pan first\". Then the second cook just waits a moment and no one is stuck.</p>",
          hi: "<p>दो रसोइये और दो कड़ाहियाँ। एक पहले बड़ी कड़ाही उठाए और दूसरा पहले छोटी, तो हर एक उस कड़ाही का इंतज़ार करता है जो दूसरे के हाथ में है। Kitchen का एक नियम इसे ठीक कर देता है: \"हमेशा पहले बड़ी कड़ाही लो\"। तब दूसरा रसोइया बस थोड़ी देर रुकता है और कोई अटकता नहीं।</p>",
          hg: "<p>Do rasoiye aur do kadhaiyan. Ek pehle badi kadhai uthaye aur doosra pehle chhoti, to har ek us kadhai ka intezaar karta hai jo doosre ke haath mein hai. Kitchen ka ek niyam ise theek kar deta hai: \"hamesha pehle badi kadhai lo\". Tab doosra rasoiya bas thodi der rukta hai aur koi atakta nahi.</p>"
        },
        lines: [
          {
            code: "CONSTRAINT CK_OpenTickets CHECK (OpenTickets >= 0)",
            note: {
              en: "A business rule inside the table: an agent can never have negative tickets. The database refuses a change that breaks it (error 547).",
              hi: "Table के अंदर business rule: agent के tickets कभी negative नहीं हो सकते। जो बदलाव इसे तोड़े, database उसे मना कर देता है (error 547)।",
              hg: "Table ke andar business rule: agent ke tickets kabhi negative nahi ho sakte. Jo badlaav ise tode, database use mana kar deta hai (error 547)."
            }
          },
          {
            code: "SET XACT_ABORT ON;",
            note: {
              en: "Any runtime error now dooms the whole transaction: it can only be rolled back (at once, outside TRY/CATCH), so a half-finished transfer is never committed.",
              hi: "अब कोई भी runtime error पूरी transaction को बेकार कर देता है: उसे सिर्फ़ rollback किया जा सकता है (TRY/CATCH के बाहर तुरंत), इसलिए अधूरा transfer कभी commit नहीं होता।",
              hg: "Ab koi bhi runtime error poori transaction ko bekaar kar deta hai: use sirf rollback kiya ja sakta hai (TRY/CATCH ke bahar turant), isliye adhoora transfer kabhi commit nahi hota."
            }
          },
          {
            code: "UPDATE dbo.Agents SET OpenTickets += IIF(AgentId = @toAgent, @count, -@count) WHERE AgentId = @low;",
            note: {
              en: "The first update always hits the <b>lower</b> <code>AgentId</code>, whichever direction the move goes. The next line hits the higher one. With one fixed order, two opposite moves queue up instead of deadlocking.",
              hi: "पहला update हमेशा <b>छोटे</b> <code>AgentId</code> पर लगता है, move किसी भी दिशा में हो। अगली line बड़े वाले पर लगती है। एक तय क्रम से दो उल्टे moves deadlock होने की जगह कतार में लग जाते हैं।",
              hg: "Pehla update hamesha <b>chhote</b> <code>AgentId</code> par lagta hai, move kisi bhi disha mein ho. Agli line bade wale par lagti hai. Ek tay kram se do ulte moves deadlock hone ki jagah qatar mein lag jaate hain."
            }
          },
          {
            code: "IF ERROR_NUMBER() = 1205 AND @try < 3",
            note: {
              en: "Error 1205 means \"you were the deadlock victim, your work was rolled back\". Nothing was saved, so it is safe to run the transaction again, up to three tries. This script runs alone, so no deadlock happens and this branch is never taken here; it shows the handler's shape.",
              hi: "Error 1205 का मतलब है \"आप deadlock के victim बने, आपका काम rollback हो गया\"। कुछ save नहीं हुआ, इसलिए transaction दोबारा चलाना सुरक्षित है, तीन कोशिशों तक। यह script अकेली चलती है, इसलिए यहाँ deadlock नहीं होता और यह branch कभी नहीं चलती; यह सिर्फ़ handler का ढाँचा दिखाती है।",
              hg: "Error 1205 ka matlab hai \"aap deadlock ke victim bane, aapka kaam rollback ho gaya\". Kuch save nahi hua, isliye transaction dobara chalana surakshit hai, teen koshishon tak. Ye script akeli chalti hai, isliye yahan deadlock nahi hota aur ye branch kabhi nahi chalti; ye sirf handler ka dhaancha dikhati hai."
            }
          },
          {
            code: "THROW;",
            note: {
              en: "Any other error (like the CHECK failure) is re-thrown unchanged. Retrying a business-rule error would only fail again.",
              hi: "कोई भी दूसरा error (जैसे CHECK का fail होना) वैसा ही दोबारा उठा दिया जाता है। Business-rule error को retry करने से वह फिर fail ही होगा।",
              hg: "Koi bhi doosra error (jaise CHECK ka fail hona) waisa hi dobara utha diya jaata hai. Business-rule error ko retry karne se wo phir fail hi hoga."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Updating tables or rows in a different order in different procedures. That is the usual cause of deadlocks.</li><li>Keeping a transaction open while calling an API, sending an SMS or waiting for the user. Locks stay held the whole time.</li></ul>",
          hi: "<ul><li>अलग procedures में tables या rows को अलग क्रम में update करना। Deadlocks का आम कारण यही है।</li><li>API call, SMS भेजने या user का इंतज़ार करते समय transaction खुली रखना। Locks पूरे समय पकड़े रहते हैं।</li></ul>",
          hg: "<ul><li>Alag procedures mein tables ya rows ko alag kram mein update karna. Deadlocks ka aam kaaran yahi hai.</li><li>API call, SMS bhejne ya user ka intezaar karte samay transaction khuli rakhna. Locks poore samay pakde rehte hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a fixed access order plus a bounded retry for hot, contended rows such as counters and balances. Add RCSI to remove reader-versus-writer conflicts. Log every 1205: a deadlock is a design hint, not just noise. Do not retry work with side effects (an email, a payment) outside the transaction.</p>",
          hi: "<p>Counters और balances जैसी hot, खींचातानी वाली rows के लिए तय access क्रम और सीमित retry लो। Reader-बनाम-writer टकराव हटाने के लिए RCSI जोड़ो। हर 1205 को log करो: deadlock design का इशारा है, सिर्फ़ शोर नहीं। Side effect वाले काम (email, payment) को transaction के बाहर retry मत करो।</p>",
          hg: "<p>Counters aur balances jaisi hot, kheenchataani wali rows ke liye tay access kram aur seemit retry lo. Reader-versus-writer takraav hatane ke liye RCSI jodo. Har 1205 ko log karo: deadlock design ka ishaara hai, sirf shor nahi. Side effect wale kaam (email, payment) ko transaction ke bahar retry mat karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write a transaction with <code>SET XACT_ABORT ON</code> that adds 5 tickets to Meena and removes 5 from Kiran (who has only 3). Catch the error, roll back, print the error number, and then show that <b>both</b> agents are unchanged.</p>",
            hi: "<p><code>SET XACT_ABORT ON</code> के साथ एक transaction लिखो जो Meena में 5 tickets जोड़े और Kiran से 5 घटाए (जिसके पास सिर्फ़ 3 हैं)। Error पकड़ो, rollback करो, error number print करो, और दिखाओ कि <b>दोनों</b> agents जैसे थे वैसे हैं।</p>",
            hg: "<p><code>SET XACT_ABORT ON</code> ke saath ek transaction likho jo Meena mein 5 tickets jode aur Kiran se 5 ghataye (jiske paas sirf 3 hain). Error pakdo, rollback karo, error number print karo, aur dikhao ki <b>dono</b> agents jaise the waise hain.</p>"
          },
          hint: {
            en: "<p>The second update fails the CHECK, so the first one must be undone too. Use <code>IF XACT_STATE() &lt;&gt; 0 ROLLBACK</code> in <code>CATCH</code>.</p>",
            hi: "<p>दूसरा update CHECK पर fail होता है, इसलिए पहला भी वापस होना चाहिए। <code>CATCH</code> में <code>IF XACT_STATE() &lt;&gt; 0 ROLLBACK</code> लगाओ।</p>",
            hg: "<p>Doosra update CHECK par fail hota hai, isliye pehla bhi wapas hona chahiye. <code>CATCH</code> mein <code>IF XACT_STATE() &lt;&gt; 0 ROLLBACK</code> lagao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one failed update undoes both",
              hi: "हल: एक update fail हो तो दोनों वापस",
              hg: "Solution: ek update fail ho to dono wapas"
            },
            lang: "sql",
            src: "CREATE TABLE dbo.Agents (\n    AgentId     int         NOT NULL PRIMARY KEY,\n    Name        varchar(20) NOT NULL,\n    OpenTickets int         NOT NULL CONSTRAINT CK_OpenTickets CHECK (OpenTickets >= 0));\nINSERT dbo.Agents VALUES (1,'Meena',8),(2,'Kiran',3);\nGO\nSET XACT_ABORT ON;\nBEGIN TRY\n    BEGIN TRAN;\n    UPDATE dbo.Agents SET OpenTickets += 5 WHERE AgentId = 1;   -- fine\n    UPDATE dbo.Agents SET OpenTickets -= 5 WHERE AgentId = 2;   -- Kiran has only 3: the CHECK fails\n    COMMIT;\nEND TRY\nBEGIN CATCH\n    IF XACT_STATE() <> 0 ROLLBACK;\n    PRINT 'rolled back, error ' + CAST(ERROR_NUMBER() AS varchar(10));\nEND CATCH;\nSELECT Name, OpenTickets FROM dbo.Agents ORDER BY AgentId;",
            check: "run",
            expected: "rolled back, error 547\nMeena 8\nKiran 3"
          }
        },
        quiz: {
          q: {
            en: "<p>Two procedures update the same two agent rows, but in opposite orders. What is the most likely result under load?</p>",
            hi: "<p>दो procedures वही दो agent rows update करती हैं, पर उल्टे क्रम में। Load में सबसे ज़्यादा क्या होगा?</p>",
            hg: "<p>Do procedures wahi do agent rows update karti hain, par ulte kram mein. Load mein sabse zyada kya hoga?</p>"
          },
          options: [
            {
              en: "Phantom rows in the Agents table",
              hi: "Agents table में phantom rows",
              hg: "Agents table mein phantom rows"
            },
            {
              en: "Nothing: SQL Server reorders the updates for you",
              hi: "कुछ नहीं: SQL Server updates का क्रम खुद ठीक कर देता है",
              hg: "Kuch nahi: SQL Server updates ka kram khud theek kar deta hai"
            },
            {
              en: "Occasional deadlocks: SQL Server kills one transaction with error 1205",
              hi: "कभी-कभी deadlocks: SQL Server एक transaction को error 1205 से मार देता है",
              hg: "Kabhi-kabhi deadlocks: SQL Server ek transaction ko error 1205 se maar deta hai"
            },
            {
              en: "A syntax error at compile time",
              hi: "Compile के समय syntax error",
              hg: "Compile ke samay syntax error"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Opposite lock order is the classic deadlock recipe. SQL Server does not reorder your updates. The fix is one fixed order in every procedure, plus short transactions and a retry on 1205.</p>",
            hi: "<p>उल्टा lock क्रम deadlock का क्लासिक नुस्ख़ा है। SQL Server आपके updates का क्रम नहीं बदलता। इलाज है हर procedure में एक तय क्रम, साथ में छोटी transactions और 1205 पर retry।</p>",
            hg: "<p>Ulta lock kram deadlock ka classic nuskha hai. SQL Server aapke updates ka kram nahi badalta. Ilaaj hai har procedure mein ek tay kram, saath mein chhoti transactions aur 1205 par retry.</p>"
          }
        },
        recap: {
          en: "<ul><li>A deadlock is a cycle of waits; the victim gets error 1205 and is rolled back.</li><li>Prevent it: one fixed access order, short transactions, <code>XACT_ABORT ON</code>.</li><li>Handle it: retry 1205 a few times; re-throw every other error.</li></ul>",
          hi: "<ul><li>Deadlock इंतज़ार का चक्कर है; victim को error 1205 मिलता है और वह rollback होती है।</li><li>रोकने के लिए: एक तय access क्रम, छोटी transactions, <code>XACT_ABORT ON</code>।</li><li>संभालने के लिए: 1205 को कुछ बार retry करो; बाक़ी हर error दोबारा उठाओ।</li></ul>",
          hg: "<ul><li>Deadlock intezaar ka chakkar hai; victim ko error 1205 milta hai aur wo rollback hoti hai.</li><li>Rokne ke liye: ek tay access kram, chhoti transactions, <code>XACT_ABORT ON</code>.</li><li>Sambhalne ke liye: 1205 ko kuch baar retry karo; baaki har error dobara uthao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A transfer that always updates in AgentId order, with a bounded retry",
            hi: "ऐसा transfer जो हमेशा AgentId के क्रम में update करता है, सीमित retry के साथ",
            hg: "Aisa transfer jo hamesha AgentId ke kram mein update karta hai, seemit retry ke saath"
          },
          lang: "sql",
          src: "CREATE TABLE dbo.Agents (\n    AgentId     int         NOT NULL PRIMARY KEY,\n    Name        varchar(20) NOT NULL,\n    OpenTickets int         NOT NULL CONSTRAINT CK_OpenTickets CHECK (OpenTickets >= 0));\nINSERT dbo.Agents VALUES (1,'Meena',8),(2,'Kiran',3);\nGO\n-- Moves open tickets from one agent to another. Rows are always updated in AgentId order,\n-- whatever the direction, so two opposite moves queue up instead of deadlocking.\nCREATE PROCEDURE dbo.MoveTickets @fromAgent int, @toAgent int, @count int\nAS\nBEGIN\n    SET XACT_ABORT ON;\n    DECLARE @try int = 1;\n    DECLARE @low int = IIF(@fromAgent < @toAgent, @fromAgent, @toAgent);\n    DECLARE @high int = IIF(@fromAgent < @toAgent, @toAgent, @fromAgent);\n    WHILE @try <= 3\n    BEGIN\n        BEGIN TRY\n            BEGIN TRAN;\n            UPDATE dbo.Agents SET OpenTickets += IIF(AgentId = @toAgent, @count, -@count) WHERE AgentId = @low;\n            UPDATE dbo.Agents SET OpenTickets += IIF(AgentId = @toAgent, @count, -@count) WHERE AgentId = @high;\n            COMMIT;\n            RETURN;\n        END TRY\n        BEGIN CATCH\n            IF XACT_STATE() <> 0 ROLLBACK;\n            IF ERROR_NUMBER() = 1205 AND @try < 3   -- deadlock victim: try again\n            BEGIN\n                SET @try += 1;\n                CONTINUE;\n            END;\n            THROW;\n        END CATCH;\n    END;\nEND;\nGO\nEXEC dbo.MoveTickets 2, 1, 3;\nSELECT Name, OpenTickets FROM dbo.Agents ORDER BY AgentId;\n\nBEGIN TRY\n    EXEC dbo.MoveTickets 2, 1, 50;\nEND TRY\nBEGIN CATCH\n    PRINT 'failed: error ' + CAST(ERROR_NUMBER() AS varchar(10)) + ', nothing changed';\nEND CATCH;\nSELECT Name, OpenTickets FROM dbo.Agents ORDER BY AgentId;",
          check: "run",
          expected: "Meena 11\nKiran 0\nfailed: error 547, nothing changed\nMeena 11\nKiran 0"
        }
      ]
    },
    {
      id: "stats-sniffing",
      depth: "short",
      title: {
        en: "Statistics and parameter sniffing",
        hi: "Statistics और parameter sniffing",
        hg: "Statistics aur parameter sniffing"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 1 to 7 gave you indexes, plans, joins and locks. The last piece is the optimizer that chooses between them. It does not look at your data while compiling; it reads <b>statistics</b>, a small summary of how values are spread. This lesson shows that summary for <code>SupportTickets</code> and explains why the same stored procedure can be fast for one value and slow for another. Day 6's <code>FromSqlRaw</code> and parameterized queries hit exactly this.</p>",
          hi: "<p>पाठ 1 से 7 ने आपको indexes, plans, joins और locks दिए। आख़िरी हिस्सा वह optimizer है जो इनमें से चुनता है। वह compile करते समय आपका data नहीं देखता; वह <b>statistics</b> पढ़ता है, जो इस बात का छोटा सार है कि values कैसे फैली हैं। यह पाठ <code>SupportTickets</code> के लिए वह सार दिखाता है और समझाता है कि एक ही stored procedure एक value के लिए तेज़ और दूसरी के लिए धीमी क्यों हो सकती है। Day 6 के <code>FromSqlRaw</code> और parameterized queries इसी से टकराते हैं।</p>",
          hg: "<p>Lesson 1 se 7 ne aapko indexes, plans, joins aur locks diye. Aakhiri hissa wo optimizer hai jo inmein se chunta hai. Wo compile karte samay aapka data nahi dekhta; wo <b>statistics</b> padhta hai, jo is baat ka chhota saar hai ki values kaise phaili hain. Ye lesson <code>SupportTickets</code> ke liye wo saar dikhata hai aur samjhata hai ki ek hi stored procedure ek value ke liye tez aur doosri ke liye dheemi kyon ho sakti hai. Day 6 ke <code>FromSqlRaw</code> aur parameterized queries isi se takraate hain.</p>"
        },
        what: {
          en: "<p><b>Statistics</b> are a histogram per index or column that tell the optimizer how many rows match a value. <b>Parameter sniffing</b> means SQL Server compiles a procedure using the parameter value of the <i>first</i> call and caches that plan for later calls. With skewed data this is a trade-off: a plan perfect for 3 rows can be terrible for 3000.</p>",
          hi: "<p><b>Statistics</b> हर index या column का histogram हैं जो optimizer को बताते हैं कि किसी value से कितनी rows मिलती हैं। <b>Parameter sniffing</b> का मतलब है SQL Server procedure को <i>पहली</i> call की parameter value से compile करता है और वही plan आगे की calls के लिए cache कर लेता है। Skewed data में यह trade-off है: 3 rows के लिए बढ़िया plan 3000 के लिए बहुत बुरा हो सकता है।</p>",
          hg: "<p><b>Statistics</b> har index ya column ka histogram hain jo optimizer ko batate hain ki kisi value se kitni rows milti hain. <b>Parameter sniffing</b> ka matlab hai SQL Server procedure ko <i>pehli</i> call ki parameter value se compile karta hai aur wahi plan aage ki calls ke liye cache kar leta hai. Skewed data mein ye trade-off hai: 3 rows ke liye badhiya plan 3000 ke liye bahut bura ho sakta hai.</p>"
        },
        why: {
          en: "<p>\"It was fast yesterday\" is the classic sniffing report. Nobody changed the code; the plan was recompiled after a restart or a statistics update, and this time the first caller asked for a rare value.</p>",
          hi: "<p>\"कल तो तेज़ चल रही थी\" sniffing की क्लासिक शिकायत है। किसी ने code नहीं बदला; restart या statistics update के बाद plan दोबारा compile हुआ, और इस बार पहली call किसी rare value के लिए आई।</p>",
          hg: "<p>\"Kal to tez chal rahi thi\" sniffing ki classic shikayat hai. Kisi ne code nahi badla; restart ya statistics update ke baad plan dobara compile hua, aur is baar pehli call kisi rare value ke liye aayi.</p>"
        },
        analogy: {
          en: "<p>A tailor who cuts the paper pattern from the first customer's measurements and then reuses it for everyone. If the first customer was a child, the pattern is perfect for children and useless for the next adult. A pattern made from the average size fits nobody perfectly but nobody badly; cutting a fresh pattern each time fits everyone but costs time.</p>",
          hi: "<p>एक दर्ज़ी जो पहले customer के नाप से कागज़ का pattern काटता है और फिर सबके लिए वही इस्तेमाल करता है। पहला customer बच्चा था तो pattern बच्चों के लिए बढ़िया है और अगले बड़े आदमी के लिए बेकार। औसत नाप का pattern किसी को पूरा सही नहीं बैठता पर किसी को बुरा भी नहीं; हर बार नया pattern काटो तो सबको सही बैठता है पर समय लगता है।</p>",
          hg: "<p>Ek darzi jo pehle customer ke naap se kaagaz ka pattern kaatta hai aur phir sabke liye wahi istemaal karta hai. Pehla customer bachcha tha to pattern bachchon ke liye badhiya hai aur agle bade aadmi ke liye bekaar. Ausat naap ka pattern kisi ko poora sahi nahi baithta par kisi ko bura bhi nahi; har baar naya pattern kaato to sabko sahi baithta hai par samay lagta hai.</p>"
        },
        focus: {
          caption: {
            en: "Three ways to deal with a sniffed plan",
            hi: "Sniffed plan से निपटने के तीन तरीके",
            hg: "Sniffed plan se nipatne ke teen tareeke"
          },
          lang: "sql",
          src: "-- the other common fixes (not run here)\nOPTION (OPTIMIZE FOR (@status UNKNOWN))   -- plan for the average value\nOPTION (RECOMPILE)                        -- fresh plan on every call\nEXEC sp_query_store_force_plan @query_id, @plan_id;  -- pin a known good plan",
          check: "none"
        },
        lines: [
          {
            code: "-- Skewed data: 3000 closed tickets, only 3 open",
            note: {
              en: "The data is deliberately lopsided. For <code>Open</code> an index seek plus lookups is best; for <code>Closed</code> a scan is best. One plan cannot be best for both.",
              hi: "Data जानबूझकर एकतरफ़ा है। <code>Open</code> के लिए index seek और lookups सबसे अच्छे हैं; <code>Closed</code> के लिए scan। एक plan दोनों के लिए सबसे अच्छा नहीं हो सकता।",
              hg: "Data jaanbujhkar ektarfa hai. <code>Open</code> ke liye index seek aur lookups sabse achhe hain; <code>Closed</code> ke liye scan. Ek plan dono ke liye sabse achha nahi ho sakta."
            }
          },
          {
            code: "CREATE INDEX IX_Tickets_Status ON dbo.SupportTickets (Status);",
            note: {
              en: "The index is built after the load, so its statistics are created from all the rows. An index created on an empty table would start with an empty histogram.",
              hi: "Index data load के बाद बना, इसलिए उसकी statistics सारी rows से बनती हैं। ख़ाली table पर बना index ख़ाली histogram से शुरू होता।",
              hg: "Index data load ke baad bana, isliye uski statistics saari rows se banti hain. Khaali table par bana index khaali histogram se shuru hota."
            }
          },
          {
            code: "sys.dm_db_stats_histogram(st.object_id, st.stats_id)",
            note: {
              en: "Returns the histogram of one statistics object as rows. This is what the optimizer reads: it knows <code>Closed</code> has 3000 rows and <code>Open</code> has 3.",
              hi: "एक statistics object का histogram rows की तरह लौटाता है। Optimizer यही पढ़ता है: उसे पता है कि <code>Closed</code> की 3000 rows हैं और <code>Open</code> की 3।",
              hg: "Ek statistics object ka histogram rows ki tarah lautata hai. Optimizer yahi padhta hai: use pata hai ki <code>Closed</code> ki 3000 rows hain aur <code>Open</code> ki 3."
            }
          },
          {
            code: "OPTION (RECOMPILE);",
            note: {
              en: "Compile this statement fresh on every call using the real value, so no sniffed plan is reused. It costs compile CPU each time, so it suits rare, heavy queries, not a 500-calls-per-second endpoint.",
              hi: "हर call पर असली value से यह statement नए सिरे से compile करो, इसलिए कोई sniffed plan दोबारा इस्तेमाल नहीं होता। हर बार compile का CPU लगता है, इसलिए यह कभी-कभार की भारी queries के लिए है, 500-calls-प्रति-सेकंड वाले endpoint के लिए नहीं।",
              hg: "Har call par asli value se ye statement naye sire se compile karo, isliye koi sniffed plan dobara istemaal nahi hota. Har baar compile ka CPU lagta hai, isliye ye kabhi-kabhaar ki bhaari queries ke liye hai, 500-calls-per-second wale endpoint ke liye nahi."
            }
          },
          {
            code: "SELECT 'closed_rows', COUNT(*) FROM @r;",
            note: {
              en: "Both calls return the right rows (3 and 3000). Sniffing never changes the <i>answer</i>, only the speed. This script cannot print plans, so it shows the histogram and the answers, not sniffing itself; open the actual plan in SSMS or Query Store for that.",
              hi: "दोनों calls सही rows लौटाती हैं (3 और 3000)। Sniffing <i>जवाब</i> कभी नहीं बदलता, सिर्फ़ गति बदलता है। यह script plans print नहीं कर सकती, इसलिए histogram और जवाब दिखाती है, sniffing खुद नहीं; उसके लिए SSMS में actual plan या Query Store देखो।",
              hg: "Dono calls sahi rows lautati hain (3 aur 3000). Sniffing <i>jawab</i> kabhi nahi badalta, sirf gati badalta hai. Ye script plans print nahi kar sakti, isliye histogram aur jawab dikhati hai, sniffing khud nahi; uske liye SSMS mein actual plan ya Query Store dekho."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Adding <code>OPTION (RECOMPILE)</code> to every procedure. It adds compile cost to every call and churns the plan cache.</li><li>Copying the parameter into a local variable as a \"fix\" without knowing it makes SQL Server plan for the average value, which is the same as <code>OPTIMIZE FOR UNKNOWN</code>.</li></ul>",
          hi: "<ul><li>हर procedure में <code>OPTION (RECOMPILE)</code> जोड़ देना। यह हर call पर compile की कीमत जोड़ता है और plan cache को उथल-पुथल करता है।</li><li>बिना जाने parameter को local variable में copy करके \"fix\" मान लेना, जबकि इससे SQL Server औसत value के लिए plan बनाता है, जो <code>OPTIMIZE FOR UNKNOWN</code> जैसा ही है।</li></ul>",
          hg: "<ul><li>Har procedure mein <code>OPTION (RECOMPILE)</code> jod dena. Ye har call par compile ki keemat jodta hai aur plan cache ko uthal-puthal karta hai.</li><li>Bina jaane parameter ko local variable mein copy karke \"fix\" maan lena, jabki isse SQL Server ausat value ke liye plan banata hai, jo <code>OPTIMIZE FOR UNKNOWN</code> jaisa hi hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>When timing changes without a code change, check statistics first, then the plan, then the parameter. Fix the cheapest cause first: update statistics, fix SARGability and types, add the right index, and only then <code>RECOMPILE</code> for rare heavy queries, <code>OPTIMIZE FOR UNKNOWN</code> when no single value dominates, or Query Store plan forcing as a safety net. Hints need an owner and a review date.</p>",
          hi: "<p>जब बिना code बदले गति बदले, पहले statistics देखो, फिर plan, फिर parameter। सबसे सस्ता कारण पहले ठीक करो: statistics update करो, SARGability और types ठीक करो, सही index जोड़ो, और उसके बाद ही कभी-कभार की भारी queries के लिए <code>RECOMPILE</code>, जब कोई एक value हावी न हो तब <code>OPTIMIZE FOR UNKNOWN</code>, या safety net के तौर पर Query Store plan forcing। Hints का एक मालिक और review की तारीख़ होनी चाहिए।</p>",
          hg: "<p>Jab bina code badle gati badle, pehle statistics dekho, phir plan, phir parameter. Sabse sasta kaaran pehle theek karo: statistics update karo, SARGability aur types theek karo, sahi index jodo, aur uske baad hi kabhi-kabhaar ki bhaari queries ke liye <code>RECOMPILE</code>, jab koi ek value haavi na ho tab <code>OPTIMIZE FOR UNKNOWN</code>, ya safety net ke taur par Query Store plan forcing. Hints ka ek maalik aur review ki taareekh honi chahiye.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write a procedure <code>TicketIdsByStatus</code> that returns ticket ids for a status and plans for the <b>average</b> value using <code>OPTIMIZE FOR (@status UNKNOWN)</code>. Call it for <code>Closed</code> and for <code>Open</code> and print the row counts.</p>",
            hi: "<p>एक procedure <code>TicketIdsByStatus</code> लिखो जो किसी status के ticket ids लौटाए और <code>OPTIMIZE FOR (@status UNKNOWN)</code> से <b>औसत</b> value के लिए plan बनाए। उसे <code>Closed</code> और <code>Open</code> के लिए चलाओ और rows की गिनती print करो।</p>",
            hg: "<p>Ek procedure <code>TicketIdsByStatus</code> likho jo kisi status ke ticket ids lautaye aur <code>OPTIMIZE FOR (@status UNKNOWN)</code> se <b>ausat</b> value ke liye plan banaye. Use <code>Closed</code> aur <code>Open</code> ke liye chalao aur rows ki ginti print karo.</p>"
          },
          hint: {
            en: "<p>Put <code>OPTION (OPTIMIZE FOR (@status UNKNOWN))</code> at the end of the SELECT inside the procedure.</p>",
            hi: "<p>Procedure के अंदर SELECT के अंत में <code>OPTION (OPTIMIZE FOR (@status UNKNOWN))</code> लगाओ।</p>",
            hg: "<p>Procedure ke andar SELECT ke ant mein <code>OPTION (OPTIMIZE FOR (@status UNKNOWN))</code> lagao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: plan for the average value",
              hi: "हल: औसत value के लिए plan",
              hg: "Solution: ausat value ke liye plan"
            },
            lang: "sql",
            src: "CREATE TABLE dbo.SupportTickets (\n    TicketId int IDENTITY(501,1) PRIMARY KEY,\n    Status   varchar(10) NOT NULL);\nINSERT dbo.SupportTickets (Status)\nSELECT TOP (3000) 'Closed' FROM sys.all_objects AS a CROSS JOIN sys.all_objects AS b;\nINSERT dbo.SupportTickets (Status) VALUES ('Open'),('Open'),('Open');\nCREATE INDEX IX_Tickets_Status ON dbo.SupportTickets (Status);\nGO\n-- Plan for the average value instead of the first value that arrives\nCREATE PROCEDURE dbo.TicketIdsByStatus @status varchar(10)\nAS\n    SELECT TicketId FROM dbo.SupportTickets WHERE Status = @status\n    OPTION (OPTIMIZE FOR (@status UNKNOWN));\nGO\nDECLARE @r TABLE (TicketId int);\nINSERT @r EXEC dbo.TicketIdsByStatus 'Closed';\nSELECT 'closed_rows', COUNT(*) FROM @r;\nDELETE @r;\nINSERT @r EXEC dbo.TicketIdsByStatus 'Open';\nSELECT 'open_rows', COUNT(*) FROM @r;",
            check: "run",
            expected: "closed_rows 3000\nopen_rows 3"
          }
        },
        quiz: {
          q: {
            en: "<p>A procedure is fast for most callers but slow for one value, and the code has not changed. What is the most likely cause?</p>",
            hi: "<p>Procedure ज़्यादातर callers के लिए तेज़ है पर एक value के लिए धीमी, और code नहीं बदला। इसकी सबसे बड़ी वजह क्या हो सकती है?</p>",
            hg: "<p>Procedure zyadatar callers ke liye tez hai par ek value ke liye dheemi, aur code nahi badla. Iski sabse badi wajah kya ho sakti hai?</p>"
          },
          options: [
            {
              en: "A cached plan compiled for a different parameter value (parameter sniffing)",
              hi: "किसी दूसरी parameter value के लिए compile हुआ cached plan (parameter sniffing)",
              hg: "Kisi doosri parameter value ke liye compile hua cached plan (parameter sniffing)"
            },
            {
              en: "The clustered index has stopped working",
              hi: "Clustered index ने काम करना बंद कर दिया",
              hg: "Clustered index ne kaam karna band kar diya"
            },
            {
              en: "SQL Server returns wrong rows for rare values",
              hi: "Rare values के लिए SQL Server ग़लत rows लौटाता है",
              hg: "Rare values ke liye SQL Server galat rows lautata hai"
            },
            {
              en: "The CHECK constraint is rejecting the query",
              hi: "CHECK constraint query को reject कर रहा है",
              hg: "CHECK constraint query ko reject kar raha hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>The plan was compiled and cached for the first value seen, and skewed data makes it a poor fit for other values. Results stay correct; only speed suffers. Check statistics and the actual plan, then pick the cheapest fix.</p>",
            hi: "<p>Plan पहली दिखी value के लिए compile और cache हुआ, और skewed data उसे दूसरी values के लिए ख़राब बनाता है। Results सही रहते हैं; सिर्फ़ गति बिगड़ती है। Statistics और actual plan देखो, फिर सबसे सस्ता fix चुनो।</p>",
            hg: "<p>Plan pehli dikhi value ke liye compile aur cache hua, aur skewed data use doosri values ke liye kharab banata hai. Results sahi rehte hain; sirf gati bigadti hai. Statistics aur actual plan dekho, phir sabse sasta fix chuno.</p>"
          }
        },
        recap: {
          en: "<ul><li>The optimizer plans from statistics (a histogram of values), not from your live data.</li><li>Sniffing = the first call's value shapes the cached plan; it changes speed, never the answer.</li><li>Fix the cheapest cause first; <code>RECOMPILE</code>, <code>OPTIMIZE FOR UNKNOWN</code> and plan forcing come later.</li></ul>",
          hi: "<ul><li>Optimizer statistics (values का histogram) से plan बनाता है, आपके live data से नहीं।</li><li>Sniffing = पहली call की value cached plan को आकार देती है; यह गति बदलता है, जवाब नहीं।</li><li>सबसे सस्ता कारण पहले ठीक करो; <code>RECOMPILE</code>, <code>OPTIMIZE FOR UNKNOWN</code> और plan forcing बाद में आते हैं।</li></ul>",
          hg: "<ul><li>Optimizer statistics (values ka histogram) se plan banata hai, aapke live data se nahi.</li><li>Sniffing = pehli call ki value cached plan ko aakar deti hai; ye gati badalta hai, jawab nahi.</li><li>Sabse sasta kaaran pehle theek karo; <code>RECOMPILE</code>, <code>OPTIMIZE FOR UNKNOWN</code> aur plan forcing baad mein aate hain.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "The histogram behind a skewed table, and a procedure with RECOMPILE",
            hi: "Skewed table के पीछे का histogram, और RECOMPILE वाली procedure",
            hg: "Skewed table ke peeche ka histogram, aur RECOMPILE wali procedure"
          },
          lang: "sql",
          src: "CREATE TABLE dbo.SupportTickets (\n    TicketId int IDENTITY(501,1) PRIMARY KEY,\n    Status   varchar(10) NOT NULL,\n    Issue    varchar(30) NOT NULL);\n-- Skewed data: 3000 closed tickets, only 3 open\nINSERT dbo.SupportTickets (Status, Issue)\nSELECT TOP (3000) 'Closed', 'old' FROM sys.all_objects AS a CROSS JOIN sys.all_objects AS b;\nINSERT dbo.SupportTickets (Status, Issue) VALUES ('Open','login'),('Open','refund'),('Open','otp');\nCREATE INDEX IX_Tickets_Status ON dbo.SupportTickets (Status);   -- built after the load, so its statistics see all rows\nGO\n-- What the optimizer knows about Status: the histogram of the index statistics\nSELECT h.range_high_key AS status_value, CAST(h.equal_rows AS int) AS equal_rows\nFROM sys.stats AS st\nCROSS APPLY sys.dm_db_stats_histogram(st.object_id, st.stats_id) AS h\nWHERE st.object_id = OBJECT_ID('dbo.SupportTickets') AND st.name = 'IX_Tickets_Status'\nORDER BY h.range_high_key;\nGO\n-- Same query, one plan per call: no sniffed value is reused (costs compile CPU every time)\nCREATE PROCEDURE dbo.TicketsByStatus @status varchar(10)\nAS\n    SELECT TicketId, Issue FROM dbo.SupportTickets WHERE Status = @status\n    OPTION (RECOMPILE);\nGO\nDECLARE @r TABLE (TicketId int, Issue varchar(30));\nINSERT @r EXEC dbo.TicketsByStatus 'Open';\nSELECT 'open_rows', COUNT(*) FROM @r;\nDELETE @r;\nINSERT @r EXEC dbo.TicketsByStatus 'Closed';\nSELECT 'closed_rows', COUNT(*) FROM @r;",
          check: "run",
          expected: "Closed 3000\nOpen 3\nopen_rows 3\nclosed_rows 3000"
        }
      ]
    },
    {
      id: "indexes-deep",
      depth: "detailed",
      title: {
        en: "Indexes in depth: filtered, columnstore, fill factor",
        hi: "Indexes गहराई में: filtered, columnstore, fill factor",
        hg: "Indexes gehraai mein: filtered, columnstore, fill factor"
      },
      body: {
        en: "<ul>\n<li><b>Filtered index:</b> <code>WHERE Status = 0</code> on the index itself: small and cheap for \"open items\" style queries. Queries must use a matching literal predicate; a parameter such as <code>Status = @s</code> will usually not match it.</li>\n<li><b>Columnstore (brief):</b> column-wise compressed storage for analytics (big scans, aggregates). Not for single-row lookups. Keep it for reporting tables.</li>\n<li><b>Fill factor and fragmentation (brief):</b> fill factor leaves free space per page (for example 90) to slow down page splits on random inserts. Fragmentation matters less than good statistics today; many teams reorganize or rebuild only the few large, heavily scanned indexes (a common rule of thumb: reorganize at about 5-30%, rebuild above 30%).</li>\n</ul>",
        hi: "<ul>\n<li><b>Filtered index:</b> index पर ही <code>WHERE Status = 0</code>: \"open items\" जैसी queries के लिए छोटा और सस्ता। Query में matching literal predicate चाहिए; <code>Status = @s</code> जैसा parameter आम तौर पर match नहीं करता।</li>\n<li><b>Columnstore (brief):</b> analytics के लिए column-wise compressed storage (बड़े scans, aggregates)। Single-row lookups के लिए नहीं। Reporting tables के लिए रखो।</li>\n<li><b>Fill factor और fragmentation (brief):</b> fill factor हर page में खाली जगह छोड़ता है (जैसे 90) ताकि random inserts पर page splits धीमे हों। आज fragmentation से ज़्यादा अहम अच्छी statistics है; कई teams सिर्फ़ कुछ बड़े, ज़्यादा scan होने वाले indexes को reorganize या rebuild करती हैं (आम rule of thumb: लगभग 5-30% पर reorganize, 30% से ऊपर rebuild)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Filtered index:</b> index par hi <code>WHERE Status = 0</code>: \"open items\" jaisi queries ke liye chhota aur sasta. Query mein matching literal predicate chahiye; <code>Status = @s</code> jaisa parameter aam taur par match nahi karta.</li>\n<li><b>Columnstore (brief):</b> analytics ke liye column-wise compressed storage (bade scans, aggregates). Single-row lookups ke liye nahi. Reporting tables ke liye rakho.</li>\n<li><b>Fill factor aur fragmentation (brief):</b> fill factor har page mein khaali jagah chhodta hai (jaise 90) taaki random inserts par page splits dheeme hon. Aaj fragmentation se zyaada ahem achhi statistics hai; kai teams sirf kuch bade, zyaada scan hone wale indexes ko reorganize ya rebuild karti hain (aam rule of thumb: lagbhag 5-30% par reorganize, 30% se upar rebuild).</li>\n</ul>"
      },
      code: [
        {
          lang: "sql",
          caption: {
            en: "Orders table with a covering and a filtered index (runs on SQL Server 2019 LocalDB; fill factor and filter are read back from the catalog)",
            hi: "Covering और filtered index वाली Orders table (SQL Server 2019 LocalDB पर चलती है; fill factor और filter catalog से वापस पढ़े गए हैं)",
            hg: "Covering aur filtered index wali Orders table (SQL Server 2019 LocalDB par chalti hai; fill factor aur filter catalog se wapas padhe gaye hain)"
          },
          check: "run",
          expected: "PK_Orders CLUSTERED 0 0\nIX_Orders_Customer_Date NONCLUSTERED 90 0\nIX_Orders_Open NONCLUSTERED 0 1\nIX_Orders_Customer_Date CustomerId 1 0\nIX_Orders_Customer_Date OrderDate 2 0\nIX_Orders_Customer_Date Status 0 1\nIX_Orders_Customer_Date Total 0 1",
          src: "CREATE TABLE dbo.Orders (\n    OrderId    int IDENTITY(1,1) CONSTRAINT PK_Orders PRIMARY KEY CLUSTERED,\n    CustomerId int           NOT NULL,\n    Status     tinyint       NOT NULL,\n    OrderDate  date          NOT NULL,\n    Total      decimal(10,2) NOT NULL,\n    Notes      nvarchar(400) NULL\n);\n\n-- Covering: seek on CustomerId, already sorted by OrderDate, Status and Total ride along in the leaf\nCREATE NONCLUSTERED INDEX IX_Orders_Customer_Date\n    ON dbo.Orders (CustomerId, OrderDate DESC) INCLUDE (Status, Total)\n    WITH (FILLFACTOR = 90);\n\n-- Filtered: indexes only the small \"open\" slice (Status = 0)\nCREATE NONCLUSTERED INDEX IX_Orders_Open\n    ON dbo.Orders (OrderDate) INCLUDE (CustomerId)\n    WHERE Status = 0;\n\nSELECT i.name, i.type_desc, i.fill_factor, i.has_filter\nFROM sys.indexes AS i\nWHERE i.object_id = OBJECT_ID('dbo.Orders')\nORDER BY i.index_id;\n\nSELECT i.name AS index_name, c.name AS column_name, ic.key_ordinal, ic.is_included_column\nFROM sys.indexes AS i\nJOIN sys.index_columns AS ic ON ic.object_id = i.object_id AND ic.index_id = i.index_id\nJOIN sys.columns AS c ON c.object_id = ic.object_id AND c.column_id = ic.column_id\nWHERE i.object_id = OBJECT_ID('dbo.Orders') AND i.name = 'IX_Orders_Customer_Date'\nORDER BY ic.is_included_column, ic.key_ordinal, c.name;"
        }
      ]
    },
    {
      id: "plans-deep",
      depth: "detailed",
      title: {
        en: "Reading a plan: types, LIKE, estimated versus actual rows",
        hi: "Plan पढ़ना: types, LIKE, estimated बनाम actual rows",
        hg: "Plan padhna: types, LIKE, estimated versus actual rows"
      },
      body: {
        en: "<ul>\n<li><b>Match the data type:</b> data type precedence says <code>nvarchar</code> beats <code>varchar</code>, so a <code>varchar</code> column compared to an <code>nvarchar</code> parameter gets <code>CONVERT_IMPLICIT</code> on the <b>column</b> side, and the seek can turn into a scan (especially with SQL collations). In EF this is the Unicode mapping trap from Day 6. The reverse (an <code>nvarchar</code> column with a <code>varchar</code> parameter) converts the parameter instead, so the seek is usually fine. The plan shows a warning triangle; read it.</li>\n<li><b>LIKE:</b> <code>LIKE 'INV-00%'</code> can seek; <code>LIKE '%00'</code> cannot (a leading wildcard needs full-text search or a different design).</li>\n<li><b>Read a plan:</b> right to left, top to bottom. Look at <b>Index Seek vs Index/Table Scan</b>, <b>Key Lookup</b> (and its row count), thick arrows, <b>warnings</b> (implicit conversion, spills to tempdb) and the biggest cost percentage. Use <b>actual</b> plans for real numbers.</li>\n<li><b>Estimated vs actual rows:</b> the optimizer chooses a plan from <b>statistics</b> (a histogram per index or column). A big gap between estimated and actual rows is the clue: outdated or sampled statistics, skewed data, or a parameter sniffed from an unusual value. The cardinality estimator model changes with the compatibility level.</li>\n</ul>",
        hi: "<ul>\n<li><b>Data type match करो:</b> data type precedence में <code>nvarchar</code>, <code>varchar</code> से ऊपर है, इसलिए <code>varchar</code> column को <code>nvarchar</code> parameter से compare करो तो <b>column</b> की तरफ़ <code>CONVERT_IMPLICIT</code> लगता है और seek, scan बन सकता है (खासकर SQL collations में)। EF में यह Day 6 वाला Unicode mapping trap है। उल्टा case (<code>nvarchar</code> column और <code>varchar</code> parameter) parameter को convert करता है, इसलिए seek आम तौर पर ठीक रहता है। Plan में warning triangle दिखता है; उसे पढ़ो।</li>\n<li><b>LIKE:</b> <code>LIKE 'INV-00%'</code> seek कर सकता है; <code>LIKE '%00'</code> नहीं कर सकता (leading wildcard के लिए full-text search या दूसरा design चाहिए)।</li>\n<li><b>Plan कैसे पढ़ें:</b> दाएँ से बाएँ, ऊपर से नीचे। देखो <b>Index Seek बनाम Index/Table Scan</b>, <b>Key Lookup</b> (और उसकी row count), मोटे arrows, <b>warnings</b> (implicit conversion, tempdb में spill) और सबसे बड़ा cost percentage। असली numbers के लिए <b>actual</b> plan use करो।</li>\n<li><b>Estimated बनाम actual rows:</b> optimizer plan <b>statistics</b> (हर index या column का histogram) से चुनता है। Estimated और actual rows में बड़ा फ़र्क़ क्लू है: पुरानी या sampled statistics, skewed data, या किसी अजीब value से sniff हुआ parameter। Cardinality estimator का model compatibility level के साथ बदलता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Data type match karo:</b> data type precedence mein <code>nvarchar</code>, <code>varchar</code> se upar hai, isliye <code>varchar</code> column ko <code>nvarchar</code> parameter se compare karo to <b>column</b> ki taraf <code>CONVERT_IMPLICIT</code> lagta hai aur seek, scan ban sakta hai (khaaskar SQL collations mein). EF mein yeh Day 6 wala Unicode mapping trap hai. Ulta case (<code>nvarchar</code> column aur <code>varchar</code> parameter) parameter ko convert karta hai, isliye seek aam taur par theek rehta hai. Plan mein warning triangle dikhta hai; use padho.</li>\n<li><b>LIKE:</b> <code>LIKE 'INV-00%'</code> seek kar sakta hai; <code>LIKE '%00'</code> nahi kar sakta (leading wildcard ke liye full-text search ya doosra design chahiye).</li>\n<li><b>Plan kaise padhein:</b> daayein se baayein, upar se neeche. Dekho <b>Index Seek vs Index/Table Scan</b>, <b>Key Lookup</b> (aur uski row count), mote arrows, <b>warnings</b> (implicit conversion, tempdb mein spill) aur sabse bada cost percentage. Asli numbers ke liye <b>actual</b> plan use karo.</li>\n<li><b>Estimated vs actual rows:</b> optimizer plan <b>statistics</b> (har index ya column ka histogram) se chunta hai. Estimated aur actual rows mein bada farq clue hai: purani ya sampled statistics, skewed data, ya kisi ajeeb value se sniff hua parameter. Cardinality estimator ka model compatibility level ke saath badalta hai.</li>\n</ul>"
      }
    },
    {
      id: "apply-cte-deep",
      depth: "detailed",
      title: {
        en: "APPLY, CTEs and recursive queries",
        hi: "APPLY, CTEs और recursive queries",
        hg: "APPLY, CTEs aur recursive queries"
      },
      body: {
        en: "<ul>\n<li><b>APPLY:</b> <code>CROSS APPLY</code> runs a subquery or table function <b>per left row</b> (inner-join-like); <code>OUTER APPLY</code> keeps left rows with no result. The classic use is \"top N per group\".</li>\n<li><b>CTE:</b> a named query for readability. In SQL Server it is <b>not materialised</b>: the text is expanded where used, so referencing it twice can run it twice. A <b>recursive CTE</b> (anchor <code>UNION ALL</code> recursive part) walks trees such as an org chart; <code>MAXRECURSION</code> defaults to 100, <code>0</code> removes the limit (careful with cycles).</li>\n</ul>",
        hi: "<ul>\n<li><b>APPLY:</b> <code>CROSS APPLY</code> हर <b>left row</b> के लिए subquery या table function चलाता है (inner-join जैसा); <code>OUTER APPLY</code> उन left rows को रखता है जिनका result नहीं है। Classic use है \"हर group में top N\"।</li>\n<li><b>CTE:</b> readability के लिए नाम वाली query। SQL Server में यह <b>materialise नहीं होती</b>: text जहाँ use हो वहाँ expand होता है, इसलिए दो बार reference करने पर दो बार चल सकती है। <b>Recursive CTE</b> (anchor <code>UNION ALL</code> recursive part) org chart जैसे trees पर चलती है; <code>MAXRECURSION</code> default 100 है, <code>0</code> limit हटा देता है (cycles से सावधान)।</li>\n</ul>",
        hg: "<ul>\n<li><b>APPLY:</b> <code>CROSS APPLY</code> har <b>left row</b> ke liye subquery ya table function chalata hai (inner-join jaisa); <code>OUTER APPLY</code> un left rows ko rakhta hai jinka result nahi hai. Classic use hai \"har group mein top N\".</li>\n<li><b>CTE:</b> readability ke liye naam wali query. SQL Server mein yeh <b>materialise nahi hoti</b>: text jahan use ho wahan expand hota hai, isliye do baar reference karne par do baar chal sakti hai. <b>Recursive CTE</b> (anchor <code>UNION ALL</code> recursive part) org chart jaise trees par chalti hai; <code>MAXRECURSION</code> default 100 hai, <code>0</code> limit hata deta hai (cycles se saavdhaan).</li>\n</ul>"
      },
      code: [
        {
          lang: "sql",
          caption: {
            en: "Anti-join, top-2 per customer with APPLY, OUTER APPLY, and an org-chart recursive CTE (LocalDB 2019)",
            hi: "Anti-join, APPLY से हर customer के top-2, OUTER APPLY, और org-chart recursive CTE (LocalDB 2019)",
            hg: "Anti-join, APPLY se har customer ke top-2, OUTER APPLY, aur org-chart recursive CTE (LocalDB 2019)"
          },
          check: "run",
          expected: "Chitra\nDev\nAsha 1 500.00\nAsha 2 300.00\nBilal 4 900.00\nBilal 5 100.00\nAsha 2\nBilal 5\nChitra NULL\nDev NULL\nAsha\n-Bilal\n-Chitra\n--Dev",
          src: "CREATE TABLE dbo.Customers (CustomerId int PRIMARY KEY, Name varchar(30) NOT NULL, ManagerId int NULL);\nCREATE TABLE dbo.Orders (OrderId int PRIMARY KEY, CustomerId int NOT NULL, Total decimal(10,2) NOT NULL, OrderDate date NOT NULL);\nINSERT dbo.Customers (CustomerId, Name, ManagerId) VALUES (1,'Asha',NULL),(2,'Bilal',1),(3,'Chitra',1),(4,'Dev',2);\nINSERT dbo.Orders (OrderId, CustomerId, Total, OrderDate) VALUES\n (1,1,500,'2025-01-05'),(2,1,300,'2025-02-10'),(3,2,200,'2025-01-20'),(4,2,900,'2025-03-01'),(5,2,100,'2025-03-15');\n\n-- 1. Customers who never ordered: NOT EXISTS (safe with NULLs)\nSELECT c.Name FROM dbo.Customers c\nWHERE NOT EXISTS (SELECT 1 FROM dbo.Orders o WHERE o.CustomerId = c.CustomerId)\nORDER BY c.Name;\n\n-- 2. Latest 2 orders per customer: CROSS APPLY with TOP and a unique tie-breaker\nSELECT c.Name, t.OrderId, t.Total\nFROM dbo.Customers c\nCROSS APPLY (SELECT TOP (2) o.OrderId, o.Total FROM dbo.Orders o\n             WHERE o.CustomerId = c.CustomerId ORDER BY o.OrderDate DESC, o.OrderId DESC) t\nORDER BY c.Name, t.OrderId;\n\n-- 3. OUTER APPLY keeps customers with no rows\nSELECT c.Name, x.LastOrder\nFROM dbo.Customers c\nOUTER APPLY (SELECT MAX(o.OrderId) AS LastOrder FROM dbo.Orders o WHERE o.CustomerId = c.CustomerId) x\nORDER BY c.Name;\n\n-- 4. Recursive CTE: org chart with depth\nWITH Org AS (\n    SELECT CustomerId, Name, ManagerId, 0 AS Depth FROM dbo.Customers WHERE ManagerId IS NULL\n    UNION ALL\n    SELECT c.CustomerId, c.Name, c.ManagerId, o.Depth + 1\n    FROM dbo.Customers c JOIN Org o ON c.ManagerId = o.CustomerId\n)\nSELECT REPLICATE('-', Depth) + Name AS Tree FROM Org ORDER BY Depth, Name\nOPTION (MAXRECURSION 100);"
        },
        {
          lang: "sql",
          caption: {
            en: "SQL Server 2022 and later: null-safe comparison and GREATEST (not run here, LocalDB is 2019)",
            hi: "SQL Server 2022 और बाद: null-safe comparison और GREATEST (यहाँ चलाया नहीं, LocalDB 2019 है)",
            hg: "SQL Server 2022 aur baad: null-safe comparison aur GREATEST (yahan chalaya nahi, LocalDB 2019 hai)"
          },
          check: "none",
          src: "-- SQL Server 2022+: NULL-safe equality, no OR ... IS NULL dance\nSELECT o.OrderId\nFROM dbo.Orders AS o\nJOIN dbo.Shipments AS s ON o.PromisedDate IS NOT DISTINCT FROM s.PromisedDate;\n\n-- SQL Server 2022+: largest of several columns per row (NULLs are ignored)\nSELECT OrderId, GREATEST(PromisedDate, ShippedDate, DeliveredDate) AS LastEvent\nFROM dbo.Orders;"
        }
      ]
    },
    {
      id: "concurrency-deep",
      depth: "detailed",
      title: {
        en: "RCSI, SNAPSHOT, blocking and finding deadlocks",
        hi: "RCSI, SNAPSHOT, blocking और deadlocks ढूँढना",
        hg: "RCSI, SNAPSHOT, blocking aur deadlocks dhoondhna"
      },
      body: {
        en: "<ul>\n<li><b>RCSI</b> (<code>READ_COMMITTED_SNAPSHOT ON</code>): the same level, but readers see the <b>last committed version of each row at statement start</b> from the version store instead of taking shared locks. Readers do not block writers and writers do not block readers (writers still block writers). No code change; costs tempdb space and version-store management. Azure SQL Database has RCSI (and ALLOW_SNAPSHOT_ISOLATION) on by default.</li>\n<li><b>SNAPSHOT</b> (<code>ALLOW_SNAPSHOT_ISOLATION ON</code>, then <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code>): a <b>transaction-level</b> consistent view. If another transaction changed a row you try to update, you get an <b>update conflict (error 3960)</b> and retry. Use it for multi-statement consistent reads.</li>\n<li><b>Blocking vs deadlock:</b> blocking is a queue (the waiter waits, then proceeds); a deadlock is a cycle (nobody can proceed). Blocking is found with <code>sys.dm_exec_requests</code> (<code>blocking_session_id</code>) and the blocked process report; deadlocks are recorded in the always-on <b>system_health</b> Extended Events session as an <code>xml_deadlock_report</code> (trace flag 1222 is the old way).</li>\n</ul>\n<ul>\n<li>In application code, EF Core's <code>EnableRetryOnFailure</code> already treats 1205 and 3960 as transient errors and replays the whole unit when you wrap it in <code>CreateExecutionStrategy().Execute(...)</code> (Day 6). Retries hide the symptom; a consistent access order removes the cause, so use both.</li>\n</ul>",
        hi: "<ul>\n<li><b>RCSI</b> (<code>READ_COMMITTED_SNAPSHOT ON</code>): वही level, पर readers shared locks की जगह version store से <b>statement शुरू होने पर हर row का last committed version</b> देखते हैं। Readers writers को block नहीं करते और writers readers को block नहीं करते (writers writers को अब भी block करते हैं)। Code बदलना नहीं पड़ता; tempdb space और version-store management की कीमत है। Azure SQL Database में RCSI (और ALLOW_SNAPSHOT_ISOLATION) default ON है।</li>\n<li><b>SNAPSHOT</b> (<code>ALLOW_SNAPSHOT_ISOLATION ON</code>, फिर <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code>): <b>transaction-level</b> consistent view। अगर किसी और transaction ने वह row बदली जिसे तुम update करने जा रहे हो, तो <b>update conflict (error 3960)</b> आता है और retry करना पड़ता है। Multi-statement consistent reads के लिए use करो।</li>\n<li><b>Blocking बनाम deadlock:</b> blocking एक queue है (इंतज़ार करने वाला रुकता है, फिर आगे बढ़ता है); deadlock एक cycle है (कोई आगे नहीं बढ़ सकता)। Blocking <code>sys.dm_exec_requests</code> (<code>blocking_session_id</code>) और blocked process report से मिलता है; deadlocks हमेशा चलने वाले <b>system_health</b> Extended Events session में <code>xml_deadlock_report</code> के रूप में record होते हैं (trace flag 1222 पुराना तरीका है)।</li>\n</ul>\n<ul>\n<li>Application code में EF Core का <code>EnableRetryOnFailure</code> 1205 और 3960 को पहले से transient errors मानता है, और पूरी unit को तब replay करता है जब वह <code>CreateExecutionStrategy().Execute(...)</code> में wrapped हो (Day 6)। Retries symptom छुपाते हैं; consistent access order वजह हटाता है, इसलिए दोनों use करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>RCSI</b> (<code>READ_COMMITTED_SNAPSHOT ON</code>): wahi level, par readers shared locks ki jagah version store se <b>statement shuru hone par har row ka last committed version</b> dekhte hain. Readers writers ko block nahi karte aur writers readers ko block nahi karte (writers writers ko ab bhi block karte hain). Code badalna nahi padta; tempdb space aur version-store management ki keemat hai. Azure SQL Database mein RCSI (aur ALLOW_SNAPSHOT_ISOLATION) default ON hai.</li>\n<li><b>SNAPSHOT</b> (<code>ALLOW_SNAPSHOT_ISOLATION ON</code>, phir <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code>): <b>transaction-level</b> consistent view. Agar kisi aur transaction ne woh row badli jise tum update karne ja rahe ho, to <b>update conflict (error 3960)</b> aata hai aur retry karna padta hai. Multi-statement consistent reads ke liye use karo.</li>\n<li><b>Blocking vs deadlock:</b> blocking ek queue hai (intezaar karne wala rukta hai, phir aage badhta hai); deadlock ek cycle hai (koi aage nahi badh sakta). Blocking <code>sys.dm_exec_requests</code> (<code>blocking_session_id</code>) aur blocked process report se milta hai; deadlocks hamesha chalne wale <b>system_health</b> Extended Events session mein <code>xml_deadlock_report</code> ke roop mein record hote hain (trace flag 1222 purana tareeka hai).</li>\n</ul>\n<ul>\n<li>Application code mein EF Core ka <code>EnableRetryOnFailure</code> 1205 aur 3960 ko pehle se transient errors maanta hai, aur poori unit ko tab replay karta hai jab woh <code>CreateExecutionStrategy().Execute(...)</code> mein wrapped ho (Day 6). Retries symptom chhupate hain; consistent access order wajah hatata hai, isliye dono use karo.</li>\n</ul>"
      },
      code: [
        {
          lang: "sql",
          caption: {
            en: "Read recent deadlock graphs from the always-on system_health session (not run: LocalDB has no deadlocks to show)",
            hi: "हमेशा चालू system_health session से हाल के deadlock graphs पढ़ना (चलाया नहीं: LocalDB में दिखाने को deadlocks नहीं)",
            hg: "Hamesha chalu system_health session se haal ke deadlock graphs padhna (chalaya nahi: LocalDB mein dikhane ko deadlocks nahi)"
          },
          check: "none",
          src: "SELECT x.n.query('.') AS deadlock_event\nFROM (SELECT CAST(st.target_data AS xml) AS target_xml\n      FROM sys.dm_xe_session_targets AS st\n      JOIN sys.dm_xe_sessions AS s ON s.address = st.event_session_address\n      WHERE s.name = N'system_health' AND st.target_name = N'ring_buffer') AS t\nCROSS APPLY t.target_xml.nodes('RingBufferTarget/event[@name=\"xml_deadlock_report\"]') AS x(n);"
        }
      ]
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
        en: "<p><b>Analogy — a recipe card vs a cook:</b> an <b>inline table function</b> is a recipe card the chef reads and merges into the dish (the optimizer expands it into the outer query). A multi-statement function or an old scalar UDF is a separate cook you call for every plate: opaque to the optimizer and slow at scale.</p>\n<ul>\n<li><b>Inline TVF</b> (<code>RETURNS TABLE AS RETURN SELECT ...</code>): behaves like a parameterised view; it gets real statistics and can be combined with other joins and filters. Prefer it to a multi-statement TVF (<code>@t TABLE ... INSERT ...</code>), which is a black box: fixed estimates (1 row under the old cardinality estimator, 100 rows under the new one at compat 120+, SQL Server 2014; interleaved execution fixes this from SQL Server 2017 at compatibility level 140).</li>\n<li><b>Scalar UDF:</b> before SQL Server 2019 it ran <b>once per row</b>, prevented parallelism and hid its cost from the plan. <b>Scalar UDF inlining</b> (SQL Server 2019, compatibility level 150) rewrites many simple ones into the query. <code>sys.sql_modules.is_inlineable</code> shows eligibility (1 = eligible, not a guarantee: compatibility level, database-scoped configuration or the calling query can still block inlining); the snippet prints 1 for <code>WithGst</code>. Anything with loops, certain functions or table variables may not inline.</li>\n<li><b>Stored procedure vs function:</b> a procedure can do DML, transactions and return several result sets; a function must be side-effect free and can sit inside a query. Procedures are the unit of deployment, permissions and plan reuse; EF Core (Day 6) is often enough, but procedures fit set-based batch work and strict permission models.</li>\n<li><b>Temp table</b> (<code>#t</code>): lives in tempdb, has <b>statistics</b> and can have indexes, is visible to child procedures, and takes part in rollback. <b>Table variable</b> (<code>@t</code>): no column statistics, and it is <b>not rolled back</b> by <code>ROLLBACK</code> of the surrounding transaction (the last query shows 2 table-variable rows and 3 temp-table rows). Before SQL Server 2019 the optimizer assumed 1 row for it; <b>deferred compilation</b> (2019, compat 150) uses the real count at first execution, still without value statistics.</li>\n<li>Rule of thumb: small and few rows or a TVP: table variable; more than a few hundred rows, joins, or need statistics: temp table.</li>\n</ul>\n<p><b>When to use:</b> inline TVFs for reusable filters/joins, temp tables to break up a big query into measured steps, procedures for batch jobs and permission boundaries. <b>When not:</b> avoid multi-statement TVFs and scalar UDFs on large sets (check <code>is_inlineable</code>), and do not use a CTE where you really want a materialised temp table.</p>",
        hi: "<p><b>Analogy — recipe card बनाम cook:</b> <b>inline table function</b> एक recipe card है जिसे chef पढ़कर dish में मिला लेता है (optimizer उसे outer query में expand कर देता है)। Multi-statement function या पुराना scalar UDF एक अलग cook है जिसे हर plate के लिए बुलाना पड़ता है: optimizer को opaque और scale पर slow।</p>\n<ul>\n<li><b>Inline TVF</b> (<code>RETURNS TABLE AS RETURN SELECT ...</code>): parameterised view जैसा चलता है; उसे असली statistics मिलती हैं और वह दूसरे joins और filters के साथ मिल सकता है। Multi-statement TVF (<code>@t TABLE ... INSERT ...</code>) से बेहतर, जो black box है: fixed estimates (पुराने cardinality estimator में 1 row, नए में (compat 120+, SQL Server 2014) 100 rows; interleaved execution इसे SQL Server 2017 में compatibility level 140 पर ठीक करता है)।</li>\n<li><b>Scalar UDF:</b> SQL Server 2019 से पहले यह <b>हर row के लिए एक बार</b> चलता था, parallelism रोकता था और अपना cost plan से छुपाता था। <b>Scalar UDF inlining</b> (SQL Server 2019, compatibility level 150) कई simple UDFs को query में rewrite कर देता है। <code>sys.sql_modules.is_inlineable</code> eligibility दिखाता है (1 = eligible, guarantee नहीं: compatibility level, database-scoped configuration या calling query अब भी inlining रोक सकते हैं); snippet <code>WithGst</code> के लिए 1 print करता है। Loops, कुछ functions या table variables वाला UDF inline न भी हो।</li>\n<li><b>Stored procedure बनाम function:</b> procedure DML, transactions और कई result sets कर सकता है; function side-effect free होना चाहिए और query के अंदर बैठ सकता है। Procedures deployment, permissions और plan reuse की unit हैं; EF Core (Day 6) अक्सर काफ़ी है, पर procedures set-based batch काम और सख़्त permission models में फ़िट होते हैं।</li>\n<li><b>Temp table</b> (<code>#t</code>): tempdb में रहती है, उस पर <b>statistics</b> होती हैं और indexes बन सकते हैं, child procedures को दिखती है, और rollback में हिस्सा लेती है। <b>Table variable</b> (<code>@t</code>): column statistics नहीं, और आसपास की transaction के <code>ROLLBACK</code> से यह <b>rollback नहीं होता</b> (आख़िरी query में table-variable की 2 rows और temp-table की 3 rows दिखती हैं)। SQL Server 2019 से पहले optimizer इसे 1 row मानता था; <b>deferred compilation</b> (2019, compat 150) पहली execution पर असली count use करता है, पर value statistics फिर भी नहीं।</li>\n<li>Rule of thumb: छोटा और कम rows या TVP: table variable; कुछ सौ rows से ज़्यादा, joins, या statistics चाहिए: temp table।</li>\n</ul>\n<p><b>कब use करें:</b> reusable filters/joins के लिए inline TVFs, बड़ी query को measured steps में तोड़ने के लिए temp tables, batch jobs और permission boundaries के लिए procedures। <b>कब नहीं:</b> बड़े sets पर multi-statement TVFs और scalar UDFs से बचो (<code>is_inlineable</code> देखो), और जहाँ materialised temp table चाहिए वहाँ CTE मत लगाओ।</p>",
        hg: "<p><b>Analogy — recipe card vs cook:</b> <b>inline table function</b> ek recipe card hai jise chef padhkar dish mein mila leta hai (optimizer use outer query mein expand kar deta hai). Multi-statement function ya purana scalar UDF ek alag cook hai jise har plate ke liye bulana padta hai: optimizer ko opaque aur scale par slow.</p>\n<ul>\n<li><b>Inline TVF</b> (<code>RETURNS TABLE AS RETURN SELECT ...</code>): parameterised view jaisa chalta hai; use asli statistics milti hain aur woh doosre joins aur filters ke saath mil sakta hai. Multi-statement TVF (<code>@t TABLE ... INSERT ...</code>) se behtar, jo black box hai: fixed estimates (purane cardinality estimator mein 1 row, naye mein (compat 120+, SQL Server 2014) 100 rows; interleaved execution ise SQL Server 2017 mein compatibility level 140 par theek karta hai).</li>\n<li><b>Scalar UDF:</b> SQL Server 2019 se pehle yeh <b>har row ke liye ek baar</b> chalta tha, parallelism rokta tha aur apna cost plan se chhupata tha. <b>Scalar UDF inlining</b> (SQL Server 2019, compatibility level 150) kai simple UDFs ko query mein rewrite kar deta hai. <code>sys.sql_modules.is_inlineable</code> eligibility dikhata hai (1 = eligible, guarantee nahi: compatibility level, database-scoped configuration ya calling query ab bhi inlining rok sakte hain); snippet <code>WithGst</code> ke liye 1 print karta hai. Loops, kuch functions ya table variables wala UDF inline na bhi ho.</li>\n<li><b>Stored procedure vs function:</b> procedure DML, transactions aur kai result sets kar sakta hai; function side-effect free hona chahiye aur query ke andar baith sakta hai. Procedures deployment, permissions aur plan reuse ki unit hain; EF Core (Day 6) aksar kaafi hai, par procedures set-based batch kaam aur sakht permission models mein fit hote hain.</li>\n<li><b>Temp table</b> (<code>#t</code>): tempdb mein rehti hai, us par <b>statistics</b> hoti hain aur indexes ban sakte hain, child procedures ko dikhti hai, aur rollback mein hissa leti hai. <b>Table variable</b> (<code>@t</code>): column statistics nahi, aur aaspaas ki transaction ke <code>ROLLBACK</code> se yeh <b>rollback nahi hota</b> (aakhri query mein table-variable ki 2 rows aur temp-table ki 3 rows dikhti hain). SQL Server 2019 se pehle optimizer ise 1 row maanta tha; <b>deferred compilation</b> (2019, compat 150) pehli execution par asli count use karta hai, par value statistics phir bhi nahi.</li>\n<li>Rule of thumb: chhota aur kam rows ya TVP: table variable; kuch sau rows se zyaada, joins, ya statistics chahiye: temp table.</li>\n</ul>\n<p><b>Kab use karein:</b> reusable filters/joins ke liye inline TVFs, badi query ko measured steps mein todne ke liye temp tables, batch jobs aur permission boundaries ke liye procedures. <b>Kab nahi:</b> bade sets par multi-statement TVFs aur scalar UDFs se bacho (<code>is_inlineable</code> dekho), aur jahan materialised temp table chahiye wahan CTE mat lagao.</p>"
      },
      code: [
        {
          lang: "sql",
          caption: {
            en: "Inline TVF, an inlineable scalar UDF, temp table vs table variable under ROLLBACK (LocalDB 2019)",
            hi: "Inline TVF, inline हो सकने वाला scalar UDF, ROLLBACK में temp table बनाम table variable (LocalDB 2019)",
            hg: "Inline TVF, inline ho sakne wala scalar UDF, ROLLBACK mein temp table vs table variable (LocalDB 2019)"
          },
          check: "run",
          expected: "1\n1 800.00 944.00\n2 1100.00 1298.00\n3\n2 3",
          src: "CREATE TABLE dbo.Orders (OrderId int PRIMARY KEY, CustomerId int NOT NULL, Total decimal(10,2) NOT NULL);\nINSERT dbo.Orders (OrderId, CustomerId, Total) VALUES (1,1,500),(2,1,300),(3,2,200),(4,2,900),(5,3,100);\nGO\n-- Inline table-valued function: one RETURN SELECT, the optimizer expands it into the calling query\nCREATE FUNCTION dbo.CustomerTotals (@minTotal decimal(10,2))\nRETURNS TABLE\nAS RETURN\n    SELECT CustomerId, SUM(Total) AS Spent FROM dbo.Orders GROUP BY CustomerId HAVING SUM(Total) >= @minTotal;\nGO\n-- Scalar UDF written so SQL Server 2019+ can inline it (compatibility level 150+)\nCREATE FUNCTION dbo.WithGst (@amount decimal(10,2))\nRETURNS decimal(10,2)\nAS BEGIN RETURN @amount * 1.18; END;\nGO\nSELECT is_inlineable FROM sys.sql_modules WHERE object_id = OBJECT_ID('dbo.WithGst');\nSELECT t.CustomerId, t.Spent, dbo.WithGst(t.Spent) AS WithTax FROM dbo.CustomerTotals(250) AS t ORDER BY t.CustomerId;\nGO\n-- Temp table: has statistics and indexes, takes part in rollback\nCREATE TABLE #big (CustomerId int PRIMARY KEY, Spent decimal(10,2));\nINSERT #big (CustomerId, Spent) SELECT CustomerId, Spent FROM dbo.CustomerTotals(0);\nSELECT COUNT(*) AS temp_rows FROM #big;\n-- Table variable: its rows survive a ROLLBACK of the surrounding transaction\nDECLARE @tv TABLE (Id int);\nBEGIN TRAN;\nINSERT @tv (Id) VALUES (1),(2);\nINSERT #big (CustomerId, Spent) VALUES (99, 1);\nROLLBACK;\nSELECT (SELECT COUNT(*) FROM @tv) AS table_var_rows, (SELECT COUNT(*) FROM #big) AS temp_table_rows;"
        }
      ]
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
        en: "<p><b>Analogy — a doctor, not a pharmacist:</b> you do not hand out medicine before the diagnosis. Symptoms, tests, then treatment, then a follow-up check.</p>\n<ul>\n<li><b>1. Confirm and scope:</b> which endpoint or job, since when, always or sometimes, one tenant or all? A sudden change with no deploy points to a plan change, statistics, or a data-volume tipping point.</li>\n<li><b>2. Find the statement:</b> Application Insights dependency data, Query Store (top resource consumers, regressed queries), the DMV query below; with EF, <code>ToQueryString()</code> (Day 5) gives the SQL to paste into SSMS. Current waits: <code>sys.dm_exec_requests</code> and <code>wait_type</code>.</li>\n<li><b>3. Is it waiting or working?</b> Blocked (locks), I/O, CPU, or memory grants. Do not tune a query that is only waiting on a blocker.</li>\n<li><b>4. Read the actual plan:</b> scan vs seek, key lookups, estimated vs actual rows, warnings, spills; <code>SET STATISTICS IO, TIME ON</code> for logical reads.</li>\n<li><b>5. Fix the cheapest cause first:</b> SARGability and types, statistics, a covering index, query rewrite (<code>EXISTS</code>, no row-by-row), then sniffing options. Hints and forced plans are the last tools, and they need an owner and a review date.</li>\n<li><b>6. Prove and protect:</b> before/after reads, CPU and duration; deploy the index through migration scripts; watch Query Store afterwards; add an alert. Keep a rollback.</li>\n<li><b>Team angle:</b> write the finding down (what, why, fix, number), review index changes like code, and keep the DMV numbers in perspective: they reset on restart.</li>\n</ul>\n<p><b>When to use:</b> every production slowness, in this order. <b>When not:</b> do not start with \"add an index\" or \"scale up the tier\": you may hide the cause, add write cost, and pay for it every month.</p>",
        hi: "<p><b>Analogy — doctor, pharmacist नहीं:</b> diagnosis से पहले दवा नहीं बाँटते। Symptoms, tests, फिर इलाज, फिर follow-up check।</p>\n<ul>\n<li><b>1. Confirm और scope:</b> कौन सा endpoint या job, कब से, हमेशा या कभी-कभी, एक tenant या सब? Deploy के बिना अचानक बदलाव plan change, statistics, या data-volume के tipping point की तरफ़ इशारा करता है।</li>\n<li><b>2. Statement ढूँढो:</b> Application Insights dependency data, Query Store (top resource consumers, regressed queries), नीचे वाली DMV query; EF में <code>ToQueryString()</code> (Day 5) SQL देता है जिसे SSMS में paste कर सकते हो। अभी की waits: <code>sys.dm_exec_requests</code> और <code>wait_type</code>।</li>\n<li><b>3. यह इंतज़ार कर रही है या काम?</b> Blocked (locks), I/O, CPU, या memory grants। जो query सिर्फ़ किसी blocker का इंतज़ार कर रही है उसे tune मत करो।</li>\n<li><b>4. Actual plan पढ़ो:</b> scan बनाम seek, key lookups, estimated बनाम actual rows, warnings, spills; logical reads के लिए <code>SET STATISTICS IO, TIME ON</code>।</li>\n<li><b>5. सबसे सस्ती वजह पहले ठीक करो:</b> SARGability और types, statistics, covering index, query rewrite (<code>EXISTS</code>, row-by-row नहीं), फिर sniffing options। Hints और forced plans आख़िरी औज़ार हैं, और उनका एक owner और review date होनी चाहिए।</li>\n<li><b>6. साबित करो और बचाव रखो:</b> पहले/बाद के reads, CPU और duration; index को migration scripts से deploy करो; बाद में Query Store देखो; alert लगाओ। Rollback रखो।</li>\n<li><b>Team angle:</b> finding लिख लो (क्या, क्यों, fix, number), index changes को code की तरह review करो, और DMV numbers को सही perspective में रखो: restart पर वे reset होते हैं।</li>\n</ul>\n<p><b>कब use करें:</b> हर production slowness में, इसी क्रम में। <b>कब नहीं:</b> \"index जोड़ दो\" या \"tier बढ़ा दो\" से शुरू मत करो: वजह छुप सकती है, write cost बढ़ती है, और हर महीने उसका पैसा देना पड़ता है।</p>",
        hg: "<p><b>Analogy — doctor, pharmacist nahi:</b> diagnosis se pehle dawa nahi baantte. Symptoms, tests, phir ilaaj, phir follow-up check.</p>\n<ul>\n<li><b>1. Confirm aur scope:</b> kaun sa endpoint ya job, kab se, hamesha ya kabhi-kabhi, ek tenant ya sab? Deploy ke bina achanak badlaav plan change, statistics, ya data-volume ke tipping point ki taraf ishaara karta hai.</li>\n<li><b>2. Statement dhoondho:</b> Application Insights dependency data, Query Store (top resource consumers, regressed queries), neeche wali DMV query; EF mein <code>ToQueryString()</code> (Day 5) SQL deta hai jise SSMS mein paste kar sakte ho. Abhi ki waits: <code>sys.dm_exec_requests</code> aur <code>wait_type</code>.</li>\n<li><b>3. Yeh intezaar kar rahi hai ya kaam?</b> Blocked (locks), I/O, CPU, ya memory grants. Jo query sirf kisi blocker ka intezaar kar rahi hai use tune mat karo.</li>\n<li><b>4. Actual plan padho:</b> scan vs seek, key lookups, estimated vs actual rows, warnings, spills; logical reads ke liye <code>SET STATISTICS IO, TIME ON</code>.</li>\n<li><b>5. Sabse sasti wajah pehle theek karo:</b> SARGability aur types, statistics, covering index, query rewrite (<code>EXISTS</code>, row-by-row nahi), phir sniffing options. Hints aur forced plans aakhri auzaar hain, aur unka ek owner aur review date honi chahiye.</li>\n<li><b>6. Saabit karo aur bachaav rakho:</b> pehle/baad ke reads, CPU aur duration; index ko migration scripts se deploy karo; baad mein Query Store dekho; alert lagao. Rollback rakho.</li>\n<li><b>Team angle:</b> finding likh lo (kya, kyon, fix, number), index changes ko code ki tarah review karo, aur DMV numbers ko sahi perspective mein rakho: restart par woh reset hote hain.</li>\n</ul>\n<p><b>Kab use karein:</b> har production slowness mein, isi kram mein. <b>Kab nahi:</b> \"index jod do\" ya \"tier badha do\" se shuru mat karo: wajah chhup sakti hai, write cost badhti hai, aur har mahine uska paisa dena padta hai.</p>"
      },
      code: [
        {
          lang: "sql",
          caption: {
            en: "Top statements by CPU from the plan cache: a starting point to find the culprit (compiles and runs on LocalDB; output depends on the server, so it is not compared)",
            hi: "Plan cache से CPU के हिसाब से top statements: दोषी ढूँढने की शुरुआत (LocalDB पर compile और run होता है; output server पर निर्भर है, इसलिए compare नहीं किया)",
            hg: "Plan cache se CPU ke hisaab se top statements: doshi dhoondhne ki shuruaat (LocalDB par compile aur run hota hai; output server par nirbhar hai, isliye compare nahi kiya)"
          },
          check: "compile",
          src: "-- Top 5 statements by total CPU since the plan was cached (a starting point, not the truth: the cache is cleared on restart)\nSELECT TOP (5)\n       qs.execution_count,\n       qs.total_worker_time / 1000 AS total_cpu_ms,\n       qs.total_logical_reads,\n       SUBSTRING(st.text, qs.statement_start_offset / 2 + 1,\n                 (CASE qs.statement_end_offset WHEN -1 THEN DATALENGTH(st.text) ELSE qs.statement_end_offset END\n                  - qs.statement_start_offset) / 2 + 1) AS statement_text\nFROM sys.dm_exec_query_stats AS qs\nCROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) AS st\nORDER BY qs.total_worker_time DESC;"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in recent SQL Server versions",
        hi: "हाल के SQL Server versions में नया क्या है",
        hg: "Haal ke SQL Server versions mein naya kya hai"
      },
      body: {
        en: "<p><b>SQL Server versions that matter for these topics (each is a database engine release, with some features tied to the compatibility level):</b></p>\n<ul>\n<li><b>2016:</b> Query Store, updatable nonclustered columnstore.</li>\n<li><b>2017:</b> <code>STRING_AGG</code>, interleaved execution for multi-statement TVFs (compat 140).</li>\n<li><b>2019:</b> scalar UDF inlining and table-variable deferred compilation (compat 150).</li>\n<li><b>2022:</b> parameter sensitive plan (PSP) optimization (compat 160), <code>GREATEST/LEAST</code>, <code>IS [NOT] DISTINCT FROM</code>, <code>DATE_BUCKET</code>, <code>GENERATE_SERIES</code>. Check the release notes of the version you run; newer releases add more.</li>\n<li><b>2025:</b> SQL Server 2025 adds a native <code>json</code> data type and optimized locking, among other things; check the docs for the current feature list and your compatibility level.</li>\n</ul>\n<p>The snippets that ran on this machine used SQL Server 2019 LocalDB, so 2022-only syntax is shown but not executed.</p>",
        hi: "<p><b>इन topics के लिए जो SQL Server versions मायने रखते हैं (हर एक database engine release है, कुछ features compatibility level से जुड़े हैं):</b></p>\n<ul>\n<li><b>2016:</b> Query Store, updatable nonclustered columnstore।</li>\n<li><b>2017:</b> <code>STRING_AGG</code>, multi-statement TVFs के लिए interleaved execution (compat 140)।</li>\n<li><b>2019:</b> scalar UDF inlining और table-variable deferred compilation (compat 150)।</li>\n<li><b>2022:</b> parameter sensitive plan (PSP) optimization (compat 160), <code>GREATEST/LEAST</code>, <code>IS [NOT] DISTINCT FROM</code>, <code>DATE_BUCKET</code>, <code>GENERATE_SERIES</code>। जो version चलाते हो उसके release notes देखो; नए releases और जोड़ते हैं।</li>\n<li><b>2025:</b> SQL Server 2025 में native <code>json</code> data type और optimized locking जैसी चीज़ें जुड़ी हैं; current feature list और अपने compatibility level के लिए docs देखो।</li>\n</ul>\n<p>इस machine पर जो snippets चले वे SQL Server 2019 LocalDB पर थे, इसलिए सिर्फ़ 2022 वाली syntax दिखाई गई है, चलाई नहीं गई।</p>",
        hg: "<p><b>In topics ke liye jo SQL Server versions maayne rakhte hain (har ek database engine release hai, kuch features compatibility level se jude hain):</b></p>\n<ul>\n<li><b>2016:</b> Query Store, updatable nonclustered columnstore.</li>\n<li><b>2017:</b> <code>STRING_AGG</code>, multi-statement TVFs ke liye interleaved execution (compat 140).</li>\n<li><b>2019:</b> scalar UDF inlining aur table-variable deferred compilation (compat 150).</li>\n<li><b>2022:</b> parameter sensitive plan (PSP) optimization (compat 160), <code>GREATEST/LEAST</code>, <code>IS [NOT] DISTINCT FROM</code>, <code>DATE_BUCKET</code>, <code>GENERATE_SERIES</code>. Jo version chalate ho uske release notes dekho; naye releases aur jodte hain.</li>\n<li><b>2025:</b> SQL Server 2025 mein native <code>json</code> data type aur optimized locking jaisi cheezein judi hain; current feature list aur apne compatibility level ke liye docs dekho.</li>\n</ul>\n<p>Is machine par jo snippets chale woh SQL Server 2019 LocalDB par the, isliye sirf 2022 wali syntax dikhayi gayi hai, chalayi nahi gayi.</p>"
      }
    }
  ],
  qa: [
    {
      id: "clustered-vs-nonclustered",
      depth: "short",
      q: "Clustered vs non-clustered index — what is the difference, and how do you choose the clustered key?",
      answer: "Clustered stores the table's rows in logical key order, so there is one per table. Non-clustered is a separate sorted structure pointing back to rows; choose a narrow, unique, ever-increasing clustered key.",
      meaning: {
        hi: "Clustered: table की rows key order में रखी होती हैं, इसलिए हर table में एक। Non-clustered: अलग sorted structure जो rows की तरफ़ इशारा करता है; कई हो सकते हैं। Clustered key narrow, unique और बढ़ती जाने वाली चुनो।",
        hg: "Clustered: table ki rows key order mein rakhi hoti hain, isliye har table mein ek. Non-clustered: alag sorted structure jo rows ki taraf ishaara karta hai; kai ho sakte hain. Clustered key narrow, unique aur badhti jaane wali chuno."
      },
      explain: {
        en: "<ul>\n<li>Every non-clustered index stores the clustered key as its row pointer, so a wide clustered key makes <b>all</b> indexes bigger.</li>\n<li>Ever-increasing keys (<code>IDENTITY</code>, sequential GUID) append at the end of the B-tree; random GUIDs cause page splits and fragmentation.</li>\n<li>A table with no clustered index is a <b>heap</b>; it is sometimes fine for staging or bulk-load tables, but lookups then use a row id, and rows that grow leave forwarding pointers (check <code>forwarded_record_count</code> in <code>sys.dm_db_index_physical_stats</code>).</li>\n<li>Follow-up: \"Can the primary key be non-clustered?\" Yes, it is a common choice when the natural access path is another column. \"Does a clustered index guarantee row order in a query result?\" No, only <code>ORDER BY</code> does.</li>\n</ul>",
        hi: "<ul>\n<li>हर non-clustered index अपने row pointer के रूप में clustered key रखता है, इसलिए wide clustered key <b>सभी</b> indexes बड़े कर देती है।</li>\n<li>बढ़ती जाने वाली keys (<code>IDENTITY</code>, sequential GUID) B-tree के आख़िर में जुड़ती हैं; random GUIDs से page splits और fragmentation होता है।</li>\n<li>बिना clustered index वाली table <b>heap</b> है; staging या bulk-load tables के लिए कभी-कभी ठीक है, पर lookups तब row id से होते हैं, और जो rows बढ़ती हैं वे forwarding pointers छोड़ती हैं (<code>sys.dm_db_index_physical_stats</code> में <code>forwarded_record_count</code> देखो)।</li>\n<li>Follow-up: \"क्या primary key non-clustered हो सकती है?\" हाँ, जब असली access path कोई दूसरा column हो तो यह आम choice है। \"क्या clustered index query result में row order की guarantee देता है?\" नहीं, सिर्फ़ <code>ORDER BY</code> देता है।</li>\n</ul>",
        hg: "<ul>\n<li>Har non-clustered index apne row pointer ke roop mein clustered key rakhta hai, isliye wide clustered key <b>sabhi</b> indexes bade kar deti hai.</li>\n<li>Badhti jaane wali keys (<code>IDENTITY</code>, sequential GUID) B-tree ke aakhir mein judti hain; random GUIDs se page splits aur fragmentation hota hai.</li>\n<li>Bina clustered index wali table <b>heap</b> hai; staging ya bulk-load tables ke liye kabhi-kabhi theek hai, par lookups tab row id se hote hain, aur jo rows badhti hain woh forwarding pointers chhodti hain (<code>sys.dm_db_index_physical_stats</code> mein <code>forwarded_record_count</code> dekho).</li>\n<li>Follow-up: \"Kya primary key non-clustered ho sakti hai?\" Haan, jab asli access path koi doosra column ho to yeh aam choice hai. \"Kya clustered index query result mein row order ki guarantee deta hai?\" Nahi, sirf <code>ORDER BY</code> deta hai.</li>\n</ul>"
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
        en: "<ul>\n<li>In the plan: a <b>Key Lookup</b> (or RID Lookup on a heap) next to an Index Seek. Look at its <b>actual number of executions</b>: 10 is fine, 50,000 is the problem.</li>\n<li>When the lookup count is high the optimizer may skip the index and scan instead; adding <code>INCLUDE</code> columns can flip that decision.</li>\n<li>Do not include everything: each included column duplicates data and slows writes. Cover the few hot queries, not all of them.</li>\n<li>Follow-up: \"Key column or INCLUDE column?\" Key if used for seek, join or sort order; INCLUDE if only returned.</li>\n</ul>",
        hi: "<ul>\n<li>Plan में: Index Seek के पास <b>Key Lookup</b> (heap पर RID Lookup)। उसकी <b>actual number of executions</b> देखो: 10 ठीक है, 50,000 problem है।</li>\n<li>Lookup count ज़्यादा हो तो optimizer index छोड़कर scan कर सकता है; <code>INCLUDE</code> columns जोड़ने से वह फ़ैसला पलट सकता है।</li>\n<li>सब कुछ include मत करो: हर included column data दोहराता है और writes धीमे करता है। कुछ hot queries cover करो, सब नहीं।</li>\n<li>Follow-up: \"Key column या INCLUDE column?\" Seek, join या sort order में use हो तो key; सिर्फ़ return होता हो तो INCLUDE।</li>\n</ul>",
        hg: "<ul>\n<li>Plan mein: Index Seek ke paas <b>Key Lookup</b> (heap par RID Lookup). Uski <b>actual number of executions</b> dekho: 10 theek hai, 50,000 problem hai.</li>\n<li>Lookup count zyaada ho to optimizer index chhodkar scan kar sakta hai; <code>INCLUDE</code> columns jodne se woh faisla palat sakta hai.</li>\n<li>Sab kuch include mat karo: har included column data dohraata hai aur writes dheeme karta hai. Kuch hot queries cover karo, sab nahi.</li>\n<li>Follow-up: \"Key column ya INCLUDE column?\" Seek, join ya sort order mein use ho to key; sirf return hota ho to INCLUDE.</li>\n</ul>"
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
        en: "<ul>\n<li>Typical breakers: a function on the column (<code>YEAR</code>, <code>CONVERT</code>, <code>ISNULL</code>, <code>LEFT</code>), arithmetic on the column, a leading-wildcard <code>LIKE</code>, and an <b>implicit conversion</b> from mismatched types.</li>\n<li>Implicit conversion: data type precedence converts the lower-precedence side. A <code>varchar</code> column vs an <code>nvarchar</code> parameter converts the column; the reverse converts the parameter and usually still seeks. EF Core and Dapper can send <code>nvarchar</code> by default (Day 6).</li>\n<li>Rewrite: <code>CreatedOn &gt;= @from AND CreatedOn &lt; @toExclusive</code>.</li>\n<li>Follow-up: \"What if you cannot change the query?\" A computed column plus an index on it, or fix the parameter type.</li>\n</ul>",
        hi: "<ul>\n<li>आम तोड़ने वाले: column पर function (<code>YEAR</code>, <code>CONVERT</code>, <code>ISNULL</code>, <code>LEFT</code>), column पर arithmetic, leading-wildcard <code>LIKE</code>, और mismatched types से <b>implicit conversion</b>।</li>\n<li>Implicit conversion: data type precedence में नीचे वाली side convert होती है। <code>varchar</code> column बनाम <code>nvarchar</code> parameter में column convert होता है; उल्टे case में parameter convert होता है और seek आम तौर पर चलता है। EF Core और Dapper default में <code>nvarchar</code> भेज सकते हैं (Day 6)।</li>\n<li>Rewrite: <code>CreatedOn &gt;= @from AND CreatedOn &lt; @toExclusive</code>।</li>\n<li>Follow-up: \"अगर query बदल नहीं सकते?\" Computed column और उस पर index, या parameter type ठीक करो।</li>\n</ul>",
        hg: "<ul>\n<li>Aam todne wale: column par function (<code>YEAR</code>, <code>CONVERT</code>, <code>ISNULL</code>, <code>LEFT</code>), column par arithmetic, leading-wildcard <code>LIKE</code>, aur mismatched types se <b>implicit conversion</b>.</li>\n<li>Implicit conversion: data type precedence mein neeche wali side convert hoti hai. <code>varchar</code> column vs <code>nvarchar</code> parameter mein column convert hota hai; ulte case mein parameter convert hota hai aur seek aam taur par chalta hai. EF Core aur Dapper default mein <code>nvarchar</code> bhej sakte hain (Day 6).</li>\n<li>Rewrite: <code>CreatedOn &gt;= @from AND CreatedOn &lt; @toExclusive</code>.</li>\n<li>Follow-up: \"Agar query badal nahi sakte?\" Computed column aur us par index, ya parameter type theek karo.</li>\n</ul>"
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
        en: "<ul>\n<li>Use the <b>actual</b> plan; the estimated plan has no run-time numbers. Read right to left; thick arrows mean many rows.</li>\n<li>A scan is not automatically bad (small table, or you need most rows); a seek is not automatically good (a seek with 100,000 lookups).</li>\n<li>The optimizer estimates from <b>statistics</b>; they are auto-updated after a threshold of changes, but large tables can drift. <code>UPDATE STATISTICS</code> is a cheap first experiment.</li>\n<li>Warnings to act on: implicit conversion, missing-index hints (treat as a hint, not an order), and sort or hash spills to tempdb (memory grant too small).</li>\n<li>Follow-up: \"Estimated cost says 90% for this operator, so is that the bottleneck?\" Not necessarily: costs are estimates; trust actual time and reads.</li>\n</ul>",
        hi: "<ul>\n<li><b>Actual</b> plan use करो; estimated plan में run-time numbers नहीं होते। दाएँ से बाएँ पढ़ो; मोटे arrows यानी ज़्यादा rows।</li>\n<li>Scan अपने आप बुरा नहीं (छोटी table, या ज़्यादातर rows चाहिए); seek अपने आप अच्छा नहीं (100,000 lookups वाला seek)।</li>\n<li>Optimizer <b>statistics</b> से estimate करता है; changes की एक threshold के बाद वे auto-update होती हैं, पर बड़ी tables में drift हो सकता है। <code>UPDATE STATISTICS</code> एक सस्ता पहला experiment है।</li>\n<li>जिन warnings पर action लो: implicit conversion, missing-index hints (hint मानो, हुक्म नहीं), और sort या hash का tempdb में spill (memory grant छोटा)।</li>\n<li>Follow-up: \"Estimated cost इस operator पर 90% है, तो क्या यही bottleneck है?\" ज़रूरी नहीं: costs estimates हैं; actual time और reads पर भरोसा करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Actual</b> plan use karo; estimated plan mein run-time numbers nahi hote. Daayein se baayein padho; mote arrows yaani zyaada rows.</li>\n<li>Scan apne aap bura nahi (chhoti table, ya zyaadatar rows chahiye); seek apne aap achha nahi (100,000 lookups wala seek).</li>\n<li>Optimizer <b>statistics</b> se estimate karta hai; changes ki ek threshold ke baad woh auto-update hoti hain, par badi tables mein drift ho sakta hai. <code>UPDATE STATISTICS</code> ek sasta pehla experiment hai.</li>\n<li>Jin warnings par action lo: implicit conversion, missing-index hints (hint mano, hukm nahi), aur sort ya hash ka tempdb mein spill (memory grant chhota).</li>\n<li>Follow-up: \"Estimated cost is operator par 90% hai, to kya yahi bottleneck hai?\" Zaroori nahi: costs estimates hain; actual time aur reads par bharosa karo.</li>\n</ul>"
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
        en: "<ul>\n<li>It is a trade-off, not a bug: plan reuse saves compile CPU; sniffing only hurts when the best plan depends on the value.</li>\n<li>Symptoms: the same procedure is fast for one customer and slow for another; it was fine until a restart or a statistics update cleared the cache.</li>\n<li>Options: <code>OPTION (RECOMPILE)</code> (rare queries), <code>OPTIMIZE FOR UNKNOWN</code> or a chosen value, splitting into two procedures by data shape, dynamic SQL for the extreme case, Query Store plan forcing (SQL Server 2016+).</li>\n<li><b>SQL Server 2022:</b> PSP (parameter sensitive plan) optimization at compatibility level 160 can keep several plans per query; it covers equality predicates on skewed columns, not everything.</li>\n<li>Follow-up: \"Why not add RECOMPILE everywhere?\" Compile CPU on hot paths and plan-cache churn.</li>\n</ul>",
        hi: "<ul>\n<li>यह trade-off है, bug नहीं: plan reuse से compile CPU बचता है; sniffing तभी नुकसान करती है जब सबसे अच्छा plan value पर निर्भर हो।</li>\n<li>Symptoms: वही procedure एक customer के लिए तेज़ और दूसरे के लिए slow; restart या statistics update से cache साफ़ होने तक ठीक चल रही थी।</li>\n<li>Options: <code>OPTION (RECOMPILE)</code> (rare queries), <code>OPTIMIZE FOR UNKNOWN</code> या चुनी हुई value, data की shape के हिसाब से दो procedures में split, extreme case के लिए dynamic SQL, Query Store plan forcing (SQL Server 2016+)।</li>\n<li><b>SQL Server 2022:</b> compatibility level 160 पर PSP (parameter sensitive plan) optimization एक query के कई plans रख सकता है; यह skewed columns पर equality predicates cover करता है, सब कुछ नहीं।</li>\n<li>Follow-up: \"हर जगह RECOMPILE क्यों नहीं?\" Hot paths पर compile CPU और plan-cache churn।</li>\n</ul>",
        hg: "<ul>\n<li>Yeh trade-off hai, bug nahi: plan reuse se compile CPU bachta hai; sniffing tabhi nuksaan karti hai jab sabse achha plan value par nirbhar ho.</li>\n<li>Symptoms: wahi procedure ek customer ke liye tez aur doosre ke liye slow; restart ya statistics update se cache saaf hone tak theek chal rahi thi.</li>\n<li>Options: <code>OPTION (RECOMPILE)</code> (rare queries), <code>OPTIMIZE FOR UNKNOWN</code> ya chuni hui value, data ki shape ke hisaab se do procedures mein split, extreme case ke liye dynamic SQL, Query Store plan forcing (SQL Server 2016+).</li>\n<li><b>SQL Server 2022:</b> compatibility level 160 par PSP (parameter sensitive plan) optimization ek query ke kai plans rakh sakta hai; yeh skewed columns par equality predicates cover karta hai, sab kuch nahi.</li>\n<li>Follow-up: \"Har jagah RECOMPILE kyon nahi?\" Hot paths par compile CPU aur plan-cache churn.</li>\n</ul>"
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
        en: "<ul>\n<li><code>x NOT IN (1, 2, NULL)</code> expands to <code>x &lt;&gt; 1 AND x &lt;&gt; 2 AND x &lt;&gt; NULL</code>; the last part is unknown, so the whole result is never true (Puzzle 1 shows it).</li>\n<li>The bug appears later: it works until someone inserts the first NULL into the subquery column. That is why the safe habit matters.</li>\n<li><code>NOT EXISTS</code> is also usually planned as an efficient anti-join; <code>LEFT JOIN ... IS NULL</code> is an equivalent form.</li>\n<li>Follow-up: \"And EF Core?\" LINQ <code>!ids.Contains(x)</code> translates to <code>NOT IN</code> on a list of values (no NULL risk unless the list holds NULL); <code>!db.Y.Any(...)</code> translates to <code>NOT EXISTS</code>.</li>\n</ul>",
        hi: "<ul>\n<li><code>x NOT IN (1, 2, NULL)</code> का मतलब है <code>x &lt;&gt; 1 AND x &lt;&gt; 2 AND x &lt;&gt; NULL</code>; आख़िरी हिस्सा unknown है, इसलिए पूरा result कभी true नहीं (Puzzle 1 में दिखता है)।</li>\n<li>Bug बाद में दिखता है: जब तक कोई subquery column में पहला NULL नहीं डालता तब तक चलता है। इसीलिए safe आदत ज़रूरी है।</li>\n<li><code>NOT EXISTS</code> का plan भी आम तौर पर efficient anti-join बनता है; <code>LEFT JOIN ... IS NULL</code> equivalent form है।</li>\n<li>Follow-up: \"और EF Core?\" LINQ <code>!ids.Contains(x)</code> values की list पर <code>NOT IN</code> बनता है (list में NULL न हो तो NULL का risk नहीं); <code>!db.Y.Any(...)</code> <code>NOT EXISTS</code> बनता है।</li>\n</ul>",
        hg: "<ul>\n<li><code>x NOT IN (1, 2, NULL)</code> ka matlab hai <code>x &lt;&gt; 1 AND x &lt;&gt; 2 AND x &lt;&gt; NULL</code>; aakhri hissa unknown hai, isliye poora result kabhi true nahi (Puzzle 1 mein dikhta hai).</li>\n<li>Bug baad mein dikhta hai: jab tak koi subquery column mein pehla NULL nahi daalta tab tak chalta hai. Isiliye safe aadat zaroori hai.</li>\n<li><code>NOT EXISTS</code> ka plan bhi aam taur par efficient anti-join banta hai; <code>LEFT JOIN ... IS NULL</code> equivalent form hai.</li>\n<li>Follow-up: \"Aur EF Core?\" LINQ <code>!ids.Contains(x)</code> values ki list par <code>NOT IN</code> banta hai (list mein NULL na ho to NULL ka risk nahi); <code>!db.Y.Any(...)</code> <code>NOT EXISTS</code> banta hai.</li>\n</ul>"
      }
    },
    {
      id: "isolation-levels-rcsi",
      depth: "short",
      q: "What is the default isolation level in SQL Server, and when would you use RCSI or SNAPSHOT?",
      answer: "READ COMMITTED with locking. RCSI uses row versions, so readers and writers stop blocking each other with no code change; SNAPSHOT gives a transaction-level consistent view but can raise update conflicts.",
      meaning: {
        hi: "locking के साथ READ COMMITTED। RCSI row versions use करता है, इसलिए code बदले बिना readers और writers एक-दूसरे को block नहीं करते; SNAPSHOT transaction-level consistent view देता है पर update conflicts आ सकते हैं।",
        hg: "Locking ke saath READ COMMITTED. RCSI row versions use karta hai, isliye code badle bina readers aur writers ek-doosre ko block nahi karte; SNAPSHOT transaction-level consistent view deta hai par update conflicts aa sakte hain."
      },
      explain: {
        en: "<ul>\n<li>REPEATABLE READ vs SERIALIZABLE: REPEATABLE READ keeps locks on the rows already read, so they cannot change, but new rows can still appear in the range (phantoms). SERIALIZABLE adds key-range locks, so no phantoms, at the price of more blocking and deadlocks.</li>\n<li>RCSI: statement-level consistency, version store (tempdb by default), switch with <code>ALTER DATABASE ... SET READ_COMMITTED_SNAPSHOT ON</code>.</li>\n<li>SNAPSHOT: needs <code>ALLOW_SNAPSHOT_ISOLATION ON</code> and an explicit <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code>; error 3960 on update conflict, so the caller must retry.</li>\n<li>Both cost version-store space and make long-running transactions more expensive; monitor tempdb.</li>\n<li>Follow-up: \"What about NOLOCK?\" It is READ UNCOMMITTED: dirty, duplicate or missing rows; do not use it for correctness-sensitive data. \"Where is this in EF?\" Day 6: the isolation level you pass to <code>BeginTransaction</code>; rowversion for optimistic concurrency.</li>\n</ul>",
        hi: "<ul>\n<li>REPEATABLE READ बनाम SERIALIZABLE: REPEATABLE READ पढ़ी हुई rows पर locks रखता है, इसलिए वे बदल नहीं सकतीं, पर range में नई rows अब भी आ सकती हैं (phantoms)। SERIALIZABLE key-range locks जोड़ता है, इसलिए phantoms नहीं, पर कीमत है ज़्यादा blocking और deadlocks।</li>\n<li>RCSI: statement-level consistency, version store (default में tempdb), <code>ALTER DATABASE ... SET READ_COMMITTED_SNAPSHOT ON</code> से चालू।</li>\n<li>SNAPSHOT: <code>ALLOW_SNAPSHOT_ISOLATION ON</code> और explicit <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code> चाहिए; update conflict पर error 3960, इसलिए caller को retry करना होगा।</li>\n<li>दोनों में version-store space लगता है और लंबी transactions महँगी हो जाती हैं; tempdb monitor करो।</li>\n<li>Follow-up: \"NOLOCK का क्या?\" यह READ UNCOMMITTED है: dirty, duplicate या missing rows; correctness वाले data के लिए use मत करो। \"EF में यह कहाँ?\" Day 6: <code>BeginTransaction</code> में जो isolation level pass करते हो; optimistic concurrency के लिए rowversion।</li>\n</ul>",
        hg: "<ul>\n<li>REPEATABLE READ vs SERIALIZABLE: REPEATABLE READ padhi hui rows par locks rakhta hai, isliye woh badal nahi sakti, par range mein nayi rows ab bhi aa sakti hain (phantoms). SERIALIZABLE key-range locks jodta hai, isliye phantoms nahi, par keemat hai zyaada blocking aur deadlocks.</li>\n<li>RCSI: statement-level consistency, version store (default mein tempdb), <code>ALTER DATABASE ... SET READ_COMMITTED_SNAPSHOT ON</code> se chalu.</li>\n<li>SNAPSHOT: <code>ALLOW_SNAPSHOT_ISOLATION ON</code> aur explicit <code>SET TRANSACTION ISOLATION LEVEL SNAPSHOT</code> chahiye; update conflict par error 3960, isliye caller ko retry karna hoga.</li>\n<li>Dono mein version-store space lagta hai aur lambi transactions mehngi ho jaati hain; tempdb monitor karo.</li>\n<li>Follow-up: \"NOLOCK ka kya?\" Yeh READ UNCOMMITTED hai: dirty, duplicate ya missing rows; correctness wale data ke liye use mat karo. \"EF mein yeh kahan?\" Day 6: <code>BeginTransaction</code> mein jo isolation level pass karte ho; optimistic concurrency ke liye rowversion.</li>\n</ul>"
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
        en: "<ul>\n<li><b>Diagnose:</b> <code>xml_deadlock_report</code> in system_health (file or ring buffer), or a deadlock Extended Events session. The graph names the two processes, the resources (keys or pages) and the statements.</li>\n<li><b>Typical causes:</b> two code paths update the same tables in opposite order; a long transaction holding locks; a missing index so an UPDATE scans and locks many rows; reader/writer conflicts (RCSI helps).</li>\n<li><b>Prevent:</b> same order everywhere, short transactions, right indexes, lower isolation or RCSI, smaller batches for bulk updates.</li>\n<li><b>Survive:</b> SQL Server kills the cheapest victim (<code>DEADLOCK_PRIORITY</code> can influence it); the caller retries safely only if the work is idempotent or fully rolled back.</li>\n<li>Follow-up: \"Blocking or deadlock?\" Blocking resolves itself when the blocker finishes; a deadlock never does.</li>\n</ul>",
        hi: "<ul>\n<li><b>Diagnose:</b> system_health में <code>xml_deadlock_report</code> (file या ring buffer), या deadlock Extended Events session। Graph दोनों processes, resources (keys या pages) और statements के नाम बताता है।</li>\n<li><b>आम वजहें:</b> दो code paths एक ही tables को उल्टे order में update करते हैं; लंबी transaction जो locks पकड़े रहती है; missing index की वजह से UPDATE scan करके कई rows lock करता है; reader/writer conflicts (RCSI मदद करता है)।</li>\n<li><b>Prevent:</b> हर जगह same order, short transactions, सही indexes, कम isolation या RCSI, bulk updates के लिए छोटे batches।</li>\n<li><b>Survive:</b> SQL Server सबसे सस्ता victim मारता है (<code>DEADLOCK_PRIORITY</code> असर डाल सकता है); caller तभी safely retry कर सकता है जब काम idempotent हो या पूरा rollback हुआ हो।</li>\n<li>Follow-up: \"Blocking या deadlock?\" Blocking blocker के ख़त्म होने पर अपने आप सुलझ जाती है; deadlock कभी नहीं।</li>\n</ul>",
        hg: "<ul>\n<li><b>Diagnose:</b> system_health mein <code>xml_deadlock_report</code> (file ya ring buffer), ya deadlock Extended Events session. Graph dono processes, resources (keys ya pages) aur statements ke naam batata hai.</li>\n<li><b>Aam wajahein:</b> do code paths ek hi tables ko ulte order mein update karte hain; lambi transaction jo locks pakde rehti hai; missing index ki wajah se UPDATE scan karke kai rows lock karta hai; reader/writer conflicts (RCSI madad karta hai).</li>\n<li><b>Prevent:</b> har jagah same order, short transactions, sahi indexes, kam isolation ya RCSI, bulk updates ke liye chhote batches.</li>\n<li><b>Survive:</b> SQL Server sabse sasta victim maarta hai (<code>DEADLOCK_PRIORITY</code> asar daal sakta hai); caller tabhi safely retry kar sakta hai jab kaam idempotent ho ya poora rollback hua ho.</li>\n<li>Follow-up: \"Blocking ya deadlock?\" Blocking blocker ke khatam hone par apne aap suljh jaati hai; deadlock kabhi nahi.</li>\n</ul>"
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
        en: "<ul>\n<li>\"Top-1 per group\" uses <code>ROW_NUMBER()</code> with a tie-breaker; \"all rows tied for first\" uses <code>RANK() = 1</code>; \"third highest salary\" uses <code>DENSE_RANK() = 3</code>.</li>\n<li>Without a unique <code>ORDER BY</code>, <code>ROW_NUMBER</code> on ties is arbitrary and can change between runs.</li>\n<li><code>RANGE</code> treats rows with the same ORDER BY value as peers; <code>ROWS</code> counts physical rows. <code>ROWS</code> is also usually faster, because <code>RANGE</code> can spill to disk.</li>\n<li>Follow-up: \"LAG or self-join?\" Prefer <code>LAG/LEAD</code>: one pass instead of a join on <code>rn - 1</code>.</li>\n</ul>",
        hi: "<ul>\n<li>\"हर group का top-1\" में tie-breaker के साथ <code>ROW_NUMBER()</code>; \"पहले नंबर पर बराबर वाली सब rows\" में <code>RANK() = 1</code>; \"तीसरी सबसे ज़्यादा salary\" में <code>DENSE_RANK() = 3</code>।</li>\n<li>Unique <code>ORDER BY</code> के बिना, ties पर <code>ROW_NUMBER</code> मनमाना है और runs के बीच बदल सकता है।</li>\n<li><code>RANGE</code> same ORDER BY value वाली rows को peers मानता है; <code>ROWS</code> physical rows गिनता है। <code>ROWS</code> आम तौर पर तेज़ भी है, क्योंकि <code>RANGE</code> disk पर spill कर सकता है।</li>\n<li>Follow-up: \"LAG या self-join?\" <code>LAG/LEAD</code> पसंद करो: <code>rn - 1</code> पर join की जगह एक pass।</li>\n</ul>",
        hg: "<ul>\n<li>\"Har group ka top-1\" mein tie-breaker ke saath <code>ROW_NUMBER()</code>; \"pehle number par barabar wali sab rows\" mein <code>RANK() = 1</code>; \"teesri sabse zyaada salary\" mein <code>DENSE_RANK() = 3</code>.</li>\n<li>Unique <code>ORDER BY</code> ke bina, ties par <code>ROW_NUMBER</code> manmaana hai aur runs ke beech badal sakta hai.</li>\n<li><code>RANGE</code> same ORDER BY value wali rows ko peers maanta hai; <code>ROWS</code> physical rows ginta hai. <code>ROWS</code> aam taur par tez bhi hai, kyunki <code>RANGE</code> disk par spill kar sakta hai.</li>\n<li>Follow-up: \"LAG ya self-join?\" <code>LAG/LEAD</code> pasand karo: <code>rn - 1</code> par join ki jagah ek pass.</li>\n</ul>"
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
        en: "<ul>\n<li>SQL Server does <b>not</b> materialise CTEs: a CTE referenced twice may run twice. A temp table runs once and has statistics.</li>\n<li>CTE and subquery usually give the same plan; choose on readability. CTEs are ideal for stepwise reading and for recursion.</li>\n<li>Recursive CTE: anchor member, <code>UNION ALL</code>, recursive member referencing the CTE; stops when the recursive part returns no rows. Default <code>MAXRECURSION</code> is 100; <code>0</code> means unlimited, so guard against cycles.</li>\n<li>A CTE can also feed an <code>UPDATE</code> or <code>DELETE</code> (the classic \"delete duplicates with ROW_NUMBER\").</li>\n<li>Follow-up: \"Is a CTE faster than a subquery?\" No, not by itself.</li>\n</ul>",
        hi: "<ul>\n<li>SQL Server CTEs को materialise <b>नहीं</b> करता: दो बार reference की गई CTE दो बार चल सकती है। Temp table एक बार चलती है और उसकी statistics होती हैं।</li>\n<li>CTE और subquery आम तौर पर same plan देते हैं; readability से चुनो। CTEs step-by-step पढ़ने और recursion के लिए बढ़िया हैं।</li>\n<li>Recursive CTE: anchor member, <code>UNION ALL</code>, CTE को reference करने वाला recursive member; recursive part कोई row न दे तब रुकती है। Default <code>MAXRECURSION</code> 100 है; <code>0</code> का मतलब unlimited, इसलिए cycles से बचाव रखो।</li>\n<li>CTE <code>UPDATE</code> या <code>DELETE</code> को भी feed कर सकती है (classic \"ROW_NUMBER से duplicates delete करना\")।</li>\n<li>Follow-up: \"क्या CTE subquery से तेज़ है?\" नहीं, अपने आप में नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>SQL Server CTEs ko materialise <b>nahi</b> karta: do baar reference ki gayi CTE do baar chal sakti hai. Temp table ek baar chalti hai aur uski statistics hoti hain.</li>\n<li>CTE aur subquery aam taur par same plan dete hain; readability se chuno. CTEs step-by-step padhne aur recursion ke liye badhiya hain.</li>\n<li>Recursive CTE: anchor member, <code>UNION ALL</code>, CTE ko reference karne wala recursive member; recursive part koi row na de tab rukti hai. Default <code>MAXRECURSION</code> 100 hai; <code>0</code> ka matlab unlimited, isliye cycles se bachaav rakho.</li>\n<li>CTE <code>UPDATE</code> ya <code>DELETE</code> ko bhi feed kar sakti hai (classic \"ROW_NUMBER se duplicates delete karna\").</li>\n<li>Follow-up: \"Kya CTE subquery se tez hai?\" Nahi, apne aap mein nahi.</li>\n</ul>"
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
        en: "<ul>\n<li><b>SQL Server 2019 (compat 150):</b> scalar UDF inlining. Not every function qualifies; <code>is_inlineable</code> in <code>sys.sql_modules</code> shows eligibility, not a guarantee.</li>\n<li>Multi-statement TVF: the old cardinality estimator guessed 1 row, the new one (compat 120+, SQL Server 2014) guesses 100; interleaved execution (SQL Server 2017, compat 140) uses the real row count for the rest of the plan.</li>\n<li>Inline TVF: expanded like a view; best choice for reusable logic.</li>\n<li>Follow-up: \"Procedure or function?\" A function cannot change data and is usable inside queries; a procedure can run DML and transactions. \"Where does EF fit?\" Day 6: it can map a table-valued function or call a stored procedure.</li>\n</ul>",
        hi: "<ul>\n<li><b>SQL Server 2019 (compat 150):</b> scalar UDF inlining। हर function qualify नहीं करता; <code>sys.sql_modules</code> में <code>is_inlineable</code> eligibility दिखाता है, guarantee नहीं।</li>\n<li>Multi-statement TVF: पुराना cardinality estimator 1 row का अंदाज़ा लगाता था, नया (compat 120+, SQL Server 2014) 100 का; interleaved execution (SQL Server 2017, compat 140) plan के बाक़ी हिस्से के लिए असली row count use करता है।</li>\n<li>Inline TVF: view की तरह expand होता है; reusable logic के लिए सबसे अच्छा choice।</li>\n<li>Follow-up: \"Procedure या function?\" Function data बदल नहीं सकता और queries के अंदर use हो सकता है; procedure DML और transactions चला सकता है। \"EF कहाँ आता है?\" Day 6: यह table-valued function map कर सकता है या stored procedure बुला सकता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>SQL Server 2019 (compat 150):</b> scalar UDF inlining. Har function qualify nahi karta; <code>sys.sql_modules</code> mein <code>is_inlineable</code> eligibility dikhata hai, guarantee nahi.</li>\n<li>Multi-statement TVF: purana cardinality estimator 1 row ka andaza lagata tha, naya (compat 120+, SQL Server 2014) 100 ka; interleaved execution (SQL Server 2017, compat 140) plan ke baaki hisse ke liye asli row count use karta hai.</li>\n<li>Inline TVF: view ki tarah expand hota hai; reusable logic ke liye sabse achha choice.</li>\n<li>Follow-up: \"Procedure ya function?\" Function data badal nahi sakta aur queries ke andar use ho sakta hai; procedure DML aur transactions chala sakta hai. \"EF kahan aata hai?\" Day 6: yeh table-valued function map kar sakta hai ya stored procedure bula sakta hai.</li>\n</ul>"
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
        en: "<ul>\n<li>Both live in tempdb; \"table variables are in memory\" is a myth.</li>\n<li>Before SQL Server 2019 the estimate for a table variable was 1 row at compile time (a recompile could fix it). <b>Deferred compilation</b> (SQL Server 2019, compat 150) uses the actual row count at first execution.</li>\n<li>A temp table can be created in a calling procedure and read by child procedures; scope and name rules differ (<code>#</code> local, <code>##</code> global).</li>\n<li>Table-valued parameters are table variables with a user-defined table type; good for passing small batches from .NET.</li>\n<li>Follow-up: \"Why does my table variable plan scan?\" Probably a wrong estimate; try a temp table.</li>\n</ul>",
        hi: "<ul>\n<li>दोनों tempdb में रहते हैं; \"table variables memory में होते हैं\" एक myth है।</li>\n<li>SQL Server 2019 से पहले table variable का estimate compile time पर 1 row था (recompile से ठीक हो सकता था)। <b>Deferred compilation</b> (SQL Server 2019, compat 150) पहली execution पर actual row count use करता है।</li>\n<li>Temp table calling procedure में बनकर child procedures पढ़ सकती हैं; scope और name rules अलग हैं (<code>#</code> local, <code>##</code> global)।</li>\n<li>Table-valued parameters user-defined table type वाले table variables हैं; .NET से छोटे batches भेजने के लिए अच्छे।</li>\n<li>Follow-up: \"मेरे table variable का plan scan क्यों करता है?\" शायद estimate ग़लत है; temp table try करो।</li>\n</ul>",
        hg: "<ul>\n<li>Dono tempdb mein rehte hain; \"table variables memory mein hote hain\" ek myth hai.</li>\n<li>SQL Server 2019 se pehle table variable ka estimate compile time par 1 row tha (recompile se theek ho sakta tha). <b>Deferred compilation</b> (SQL Server 2019, compat 150) pehli execution par actual row count use karta hai.</li>\n<li>Temp table calling procedure mein banke child procedures padh sakti hain; scope aur name rules alag hain (<code>#</code> local, <code>##</code> global).</li>\n<li>Table-valued parameters user-defined table type wale table variables hain; .NET se chhote batches bhejne ke liye achhe.</li>\n<li>Follow-up: \"Mere table variable ka plan scan kyon karta hai?\" Shayad estimate galat hai; temp table try karo.</li>\n</ul>"
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
        en: "<ul>\n<li>Use the checklist from the section \"tuning checklist\": confirm, find the statement, waiting or working, actual plan, cheapest fix, prove and protect.</li>\n<li>\"Fast last week\" suggests a <b>plan regression</b> (Query Store compares plans over time), a statistics change, parameter sniffing after a restart, or data growth past a tipping point.</li>\n<li>Day 6 has the EF side: query count per request, <code>TagWith</code>, implicit conversion from the Unicode mapping.</li>\n<li>TL angle: stabilise first (force the last good plan or add the safe index), then root-cause, then add a guard (alert, test). Do not change five things at once.</li>\n<li>Follow-up: \"What if the cause is the application?\" Then the fix is N+1, over-fetching or a missing cache, not SQL tuning.</li>\n</ul>",
        hi: "<ul>\n<li>\"tuning checklist\" section की checklist use करो: confirm, statement ढूँढो, इंतज़ार या काम, actual plan, सबसे सस्ता fix, साबित करो और बचाव रखो।</li>\n<li>\"पिछले हफ़्ते तेज़ थी\" का इशारा <b>plan regression</b> (Query Store समय के साथ plans compare करता है), statistics change, restart के बाद parameter sniffing, या data growth के tipping point की तरफ़ है।</li>\n<li>EF वाला हिस्सा Day 6 में है: हर request की query count, <code>TagWith</code>, Unicode mapping से implicit conversion।</li>\n<li>TL angle: पहले stabilise करो (पिछला अच्छा plan force करो या safe index जोड़ो), फिर root cause, फिर guard (alert, test)। पाँच चीज़ें एक साथ मत बदलो।</li>\n<li>Follow-up: \"अगर वजह application है?\" तब fix N+1, over-fetching या missing cache है, SQL tuning नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>\"tuning checklist\" section ki checklist use karo: confirm, statement dhoondho, intezaar ya kaam, actual plan, sabse sasta fix, saabit karo aur bachaav rakho.</li>\n<li>\"Pichhle hafte tez thi\" ka ishaara <b>plan regression</b> (Query Store samay ke saath plans compare karta hai), statistics change, restart ke baad parameter sniffing, ya data growth ke tipping point ki taraf hai.</li>\n<li>EF wala hissa Day 6 mein hai: har request ki query count, <code>TagWith</code>, Unicode mapping se implicit conversion.</li>\n<li>TL angle: pehle stabilise karo (pichhla achha plan force karo ya safe index jodo), phir root cause, phir guard (alert, test). Paanch cheezein ek saath mat badlo.</li>\n<li>Follow-up: \"Agar wajah application hai?\" Tab fix N+1, over-fetching ya missing cache hai, SQL tuning nahi.</li>\n</ul>"
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
        en: "<ul>\n<li>Find unused or duplicate indexes with <code>sys.dm_db_index_usage_stats</code> (resets on restart; observe over a full business cycle before dropping).</li>\n<li>Missing-index DMV suggestions are a starting point, not a design; merge suggestions that overlap.</li>\n<li>Fragmentation: random-key inserts split pages; a lower fill factor trades space for fewer splits. Rule of thumb: reorganize about 5-30%, rebuild above 30%, for large indexes only. On SSD, up-to-date statistics usually matter more.</li>\n<li><b>Columnstore (brief):</b> use a clustered or nonclustered columnstore index for large analytic scans and aggregates, not for point lookups.</li>\n<li>Follow-up: \"Index on a bit or status column?\" Usually low value alone; a filtered index or a composite key is better.</li>\n</ul>",
        hi: "<ul>\n<li>Unused या duplicate indexes <code>sys.dm_db_index_usage_stats</code> से ढूँढो (restart पर reset होता है; drop करने से पहले पूरे business cycle तक observe करो)।</li>\n<li>Missing-index DMV के suggestions शुरुआत हैं, design नहीं; overlap करने वाले suggestions merge करो।</li>\n<li>Fragmentation: random-key inserts pages split करते हैं; कम fill factor space के बदले कम splits देता है। Rule of thumb: लगभग 5-30% पर reorganize, 30% से ऊपर rebuild, सिर्फ़ बड़े indexes के लिए। SSD पर up-to-date statistics आम तौर पर ज़्यादा मायने रखती हैं।</li>\n<li><b>Columnstore (brief):</b> बड़े analytic scans और aggregates के लिए clustered या nonclustered columnstore index use करो, point lookups के लिए नहीं।</li>\n<li>Follow-up: \"bit या status column पर index?\" अकेले आम तौर पर कम value; filtered index या composite key बेहतर।</li>\n</ul>",
        hg: "<ul>\n<li>Unused ya duplicate indexes <code>sys.dm_db_index_usage_stats</code> se dhoondho (restart par reset hota hai; drop karne se pehle poore business cycle tak observe karo).</li>\n<li>Missing-index DMV ke suggestions shuruaat hain, design nahi; overlap karne wale suggestions merge karo.</li>\n<li>Fragmentation: random-key inserts pages split karte hain; kam fill factor space ke badle kam splits deta hai. Rule of thumb: lagbhag 5-30% par reorganize, 30% se upar rebuild, sirf bade indexes ke liye. SSD par up-to-date statistics aam taur par zyaada maayne rakhti hain.</li>\n<li><b>Columnstore (brief):</b> bade analytic scans aur aggregates ke liye clustered ya nonclustered columnstore index use karo, point lookups ke liye nahi.</li>\n<li>Follow-up: \"bit ya status column par index?\" Akele aam taur par kam value; filtered index ya composite key behtar.</li>\n</ul>"
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
        en: "<ul>\n<li>A plain join cannot reference the left row inside the right-hand subquery; <code>APPLY</code> can, including <code>TOP (n) ... ORDER BY</code>.</li>\n<li>Performance relies on an index that matches the inner filter and order (for example <code>(CustomerId, OrderDate DESC)</code>); otherwise each left row scans.</li>\n<li>Alternative for top-N per group: <code>ROW_NUMBER()</code> in a subquery does one scan and wins with many groups of few rows each; APPLY with <code>TOP</code> and a supporting index wins with few groups of many rows each.</li>\n<li>Follow-up: \"Anti-join?\" <code>NOT EXISTS</code>.</li>\n</ul>",
        hi: "<ul>\n<li>सादा join right-hand subquery के अंदर left row को reference नहीं कर सकता; <code>APPLY</code> कर सकता है, <code>TOP (n) ... ORDER BY</code> समेत।</li>\n<li>Performance ऐसे index पर टिकी है जो inner filter और order से match करे (जैसे <code>(CustomerId, OrderDate DESC)</code>); वरना हर left row scan करती है।</li>\n<li>हर group के top-N का option: subquery में <code>ROW_NUMBER()</code> एक scan करता है और कई groups (हर एक में कम rows) में जीतता है; <code>TOP</code> के साथ APPLY और supporting index कम groups (हर एक में बहुत rows) में जीतता है।</li>\n<li>Follow-up: \"Anti-join?\" <code>NOT EXISTS</code>।</li>\n</ul>",
        hg: "<ul>\n<li>Saada join right-hand subquery ke andar left row ko reference nahi kar sakta; <code>APPLY</code> kar sakta hai, <code>TOP (n) ... ORDER BY</code> samet.</li>\n<li>Performance aise index par tiki hai jo inner filter aur order se match kare (jaise <code>(CustomerId, OrderDate DESC)</code>); warna har left row scan karti hai.</li>\n<li>Har group ke top-N ka option: subquery mein <code>ROW_NUMBER()</code> ek scan karta hai aur kai groups (har ek mein kam rows) mein jeetta hai; <code>TOP</code> ke saath APPLY aur supporting index kam groups (har ek mein bahut rows) mein jeetta hai.</li>\n<li>Follow-up: \"Anti-join?\" <code>NOT EXISTS</code>.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "not-in-null",
      lang: "sql",
      src: "CREATE TABLE dbo.Staff (Id int PRIMARY KEY, ManagerId int NULL);\nINSERT dbo.Staff (Id, ManagerId) VALUES (1, NULL), (2, 1), (3, 1), (4, 2);\n\nSELECT 'not_in' AS test, COUNT(*) AS n\nFROM dbo.Staff WHERE Id NOT IN (SELECT ManagerId FROM dbo.Staff);\n\nSELECT 'not_exists' AS test, COUNT(*) AS n\nFROM dbo.Staff s WHERE NOT EXISTS (SELECT 1 FROM dbo.Staff m WHERE m.ManagerId = s.Id);",
      answer: "not_in 0\nnot_exists 2",
      explain: {
        en: "<p>Employee 1 has <code>ManagerId = NULL</code>, so the <code>NOT IN</code> list is <code>(NULL, 1, 1, 2)</code>. For every Id, the test against NULL is unknown, so no row can be true: <b>0 rows</b>. <code>NOT EXISTS</code> asks \"does anyone report to me?\" and correctly finds people 3 and 4 (nobody reports to them): <b>2</b>.</p>",
        hi: "<p>Employee 1 का <code>ManagerId = NULL</code> है, इसलिए <code>NOT IN</code> list <code>(NULL, 1, 1, 2)</code> है। हर Id के लिए NULL वाला test unknown है, इसलिए कोई row true नहीं हो सकती: <b>0 rows</b>। <code>NOT EXISTS</code> पूछता है \"क्या कोई मुझे report करता है?\" और सही तरह से 3 और 4 को ढूँढता है (उन्हें कोई report नहीं करता): <b>2</b>।</p>",
        hg: "<p>Employee 1 ka <code>ManagerId = NULL</code> hai, isliye <code>NOT IN</code> list <code>(NULL, 1, 1, 2)</code> hai. Har Id ke liye NULL wala test unknown hai, isliye koi row true nahi ho sakti: <b>0 rows</b>. <code>NOT EXISTS</code> poochta hai \"kya koi mujhe report karta hai?\" aur sahi tarah se 3 aur 4 ko dhoondhta hai (unhe koi report nahi karta): <b>2</b>.</p>"
      }
    },
    {
      id: "rank-ties",
      lang: "sql",
      src: "CREATE TABLE dbo.Scores (Name varchar(10) PRIMARY KEY, Score int NOT NULL);\nINSERT dbo.Scores (Name, Score) VALUES ('Asha', 90), ('Bilal', 90), ('Chitra', 80), ('Dev', 70);\n\nSELECT Name, Score,\n       ROW_NUMBER() OVER (ORDER BY Score DESC, Name) AS rn,\n       RANK()       OVER (ORDER BY Score DESC) AS rk,\n       DENSE_RANK() OVER (ORDER BY Score DESC) AS dr\nFROM dbo.Scores\nORDER BY rn;",
      answer: "Asha 90 1 1 1\nBilal 90 2 1 1\nChitra 80 3 3 2\nDev 70 4 4 3",
      explain: {
        en: "<p>Asha and Bilal tie on 90. <code>ROW_NUMBER</code> never ties (the Name tie-breaker gives 1, 2). <code>RANK</code> gives both 1, then <b>skips</b> to 3 for Chitra. <code>DENSE_RANK</code> gives both 1 and continues with 2, 3 (no gaps).</p>",
        hi: "<p>Asha और Bilal 90 पर tie हैं। <code>ROW_NUMBER</code> कभी tie नहीं करता (Name tie-breaker से 1, 2)। <code>RANK</code> दोनों को 1 देता है, फिर Chitra के लिए <b>skip</b> करके 3। <code>DENSE_RANK</code> दोनों को 1 देकर 2, 3 से आगे बढ़ता है (gaps नहीं)।</p>",
        hg: "<p>Asha aur Bilal 90 par tie hain. <code>ROW_NUMBER</code> kabhi tie nahi karta (Name tie-breaker se 1, 2). <code>RANK</code> dono ko 1 deta hai, phir Chitra ke liye <b>skip</b> karke 3. <code>DENSE_RANK</code> dono ko 1 dekar 2, 3 se aage badhta hai (gaps nahi).</p>"
      }
    },
    {
      id: "left-join-where",
      lang: "sql",
      src: "CREATE TABLE dbo.Customers (Id int PRIMARY KEY, Name varchar(10) NOT NULL);\nCREATE TABLE dbo.Orders (Id int PRIMARY KEY, CustomerId int NOT NULL, Status varchar(10) NOT NULL);\nINSERT dbo.Customers (Id, Name) VALUES (1, 'Asha'), (2, 'Bilal'), (3, 'Chitra');\nINSERT dbo.Orders (Id, CustomerId, Status) VALUES (1, 1, 'Paid'), (2, 1, 'Open'), (3, 2, 'Open');\n\nSELECT 'where' AS variant, COUNT(*) AS customers\nFROM (SELECT DISTINCT c.Id FROM dbo.Customers c\n      LEFT JOIN dbo.Orders o ON o.CustomerId = c.Id\n      WHERE o.Status = 'Paid') x;\n\nSELECT 'on' AS variant, COUNT(*) AS customers\nFROM (SELECT DISTINCT c.Id FROM dbo.Customers c\n      LEFT JOIN dbo.Orders o ON o.CustomerId = c.Id AND o.Status = 'Paid') x;",
      answer: "where 1\non 3",
      explain: {
        en: "<p>With the filter in <code>WHERE</code>, the NULL rows produced by the LEFT JOIN fail <code>o.Status = 'Paid'</code> and disappear, so only Asha remains: the LEFT JOIN behaved like an inner join. With the condition in <code>ON</code>, all three customers are kept and only the match is restricted: <b>3</b>.</p>",
        hi: "<p>Filter <code>WHERE</code> में हो तो LEFT JOIN से बनी NULL rows <code>o.Status = 'Paid'</code> में fail होकर गायब हो जाती हैं, इसलिए सिर्फ़ Asha बचती है: LEFT JOIN inner join की तरह चला। Condition <code>ON</code> में हो तो तीनों customers रहते हैं और सिर्फ़ match restrict होता है: <b>3</b>।</p>",
        hg: "<p>Filter <code>WHERE</code> mein ho to LEFT JOIN se bani NULL rows <code>o.Status = 'Paid'</code> mein fail hokar gayab ho jaati hain, isliye sirf Asha bachti hai: LEFT JOIN inner join ki tarah chala. Condition <code>ON</code> mein ho to teeno customers rehte hain aur sirf match restrict hota hai: <b>3</b>.</p>"
      }
    },
    {
      id: "running-total-range",
      lang: "sql",
      src: "CREATE TABLE dbo.Pay (Id int PRIMARY KEY, Day int NOT NULL, Amount int NOT NULL);\nINSERT dbo.Pay (Id, Day, Amount) VALUES (1, 1, 10), (2, 2, 20), (3, 2, 30), (4, 3, 40);\n\nSELECT Id, Day, Amount,\n       SUM(Amount) OVER (ORDER BY Day) AS dflt,\n       SUM(Amount) OVER (ORDER BY Day, Id ROWS UNBOUNDED PRECEDING) AS by_rows\nFROM dbo.Pay\nORDER BY Id;",
      answer: "1 1 10 10 10\n2 2 20 60 30\n3 2 30 60 60\n4 3 40 100 100",
      explain: {
        en: "<p>The default frame with <code>ORDER BY</code> is <code>RANGE UNBOUNDED PRECEDING</code>: Ids 2 and 3 share Day 2, so they are peers and both see 10+20+30 = <b>60</b>. With <code>ROWS</code>, rows are counted one by one, and the unique tie-breaker <code>Id</code> in the <code>ORDER BY</code> fixes the order: 10, 30, 60, 100.</p>",
        hi: "<p><code>ORDER BY</code> के साथ default frame <code>RANGE UNBOUNDED PRECEDING</code> है: Id 2 और 3 का Day 2 same है, इसलिए वे peers हैं और दोनों को 10+20+30 = <b>60</b> दिखता है। <code>ROWS</code> में rows एक-एक करके गिनी जाती हैं, और <code>ORDER BY</code> में unique tie-breaker <code>Id</code> order तय कर देता है: 10, 30, 60, 100।</p>",
        hg: "<p><code>ORDER BY</code> ke saath default frame <code>RANGE UNBOUNDED PRECEDING</code> hai: Id 2 aur 3 ka Day 2 same hai, isliye woh peers hain aur dono ko 10+20+30 = <b>60</b> dikhta hai. <code>ROWS</code> mein rows ek-ek karke ginti jaati hain, aur <code>ORDER BY</code> mein unique tie-breaker <code>Id</code> order tay kar deta hai: 10, 30, 60, 100.</p>"
      }
    },
    {
      id: "recursive-cte-factorial",
      lang: "sql",
      src: "WITH F (n, v) AS (\n    SELECT 1, CAST(1 AS bigint)\n    UNION ALL\n    SELECT n + 1, v * (n + 1) FROM F WHERE n < 5\n)\nSELECT COUNT(*) AS steps, SUM(v) AS total, MAX(v) AS last_value FROM F;",
      answer: "5 153 120",
      explain: {
        en: "<p>The anchor gives n=1, v=1. Each recursive step multiplies: 2, 6, 24, 120, and stops when <code>n &lt; 5</code> fails. Five rows (steps = 5); 1+2+6+24+120 = <b>153</b>; the last value is 120.</p>",
        hi: "<p>Anchor n=1, v=1 देता है। हर recursive step गुणा करता है: 2, 6, 24, 120, और <code>n &lt; 5</code> fail होने पर रुकता है। पाँच rows (steps = 5); 1+2+6+24+120 = <b>153</b>; आख़िरी value 120।</p>",
        hg: "<p>Anchor n=1, v=1 deta hai. Har recursive step guna karta hai: 2, 6, 24, 120, aur <code>n &lt; 5</code> fail hone par rukta hai. Paanch rows (steps = 5); 1+2+6+24+120 = <b>153</b>; aakhri value 120.</p>"
      }
    },
    {
      id: "count-star-vs-column",
      lang: "sql",
      src: "CREATE TABLE dbo.Marks (Id int PRIMARY KEY, Score int NULL);\nINSERT dbo.Marks (Id, Score) VALUES (1, 10), (2, NULL), (3, 20);\n\nSELECT COUNT(*) AS c_star, COUNT(Score) AS c_col, AVG(Score) AS avg_score, SUM(Score) / COUNT(*) AS sum_over_all\nFROM dbo.Marks;",
      answer: "3 2 15 10",
      explain: {
        en: "<p><code>COUNT(*)</code> counts rows (3); <code>COUNT(Score)</code> skips NULLs (2). <code>AVG</code> ignores NULLs too: 30 / 2 = 15. Dividing the sum by <code>COUNT(*)</code> gives 30 / 3 = 10. Both integer divisions here are exact, but remember integer division truncates. SSMS may also show the message \"Warning: Null value is eliminated by an aggregate or other SET operation.\" for the aggregates over a NULL.</p>",
        hi: "<p><code>COUNT(*)</code> rows गिनता है (3); <code>COUNT(Score)</code> NULLs छोड़ देता है (2)। <code>AVG</code> भी NULLs ignore करता है: 30 / 2 = 15। Sum को <code>COUNT(*)</code> से भाग दो तो 30 / 3 = 10। यहाँ दोनों integer divisions exact हैं, पर याद रखो integer division truncate करता है। Aggregates में NULL होने पर SSMS यह message भी दिखा सकता है: \"Warning: Null value is eliminated by an aggregate or other SET operation.\"</p>",
        hg: "<p><code>COUNT(*)</code> rows ginta hai (3); <code>COUNT(Score)</code> NULLs chhod deta hai (2). <code>AVG</code> bhi NULLs ignore karta hai: 30 / 2 = 15. Sum ko <code>COUNT(*)</code> se bhaag do to 30 / 3 = 10. Yahan dono integer divisions exact hain, par yaad rakho integer division truncate karta hai. Aggregates mein NULL hone par SSMS yeh message bhi dikha sakta hai: \"Warning: Null value is eliminated by an aggregate or other SET operation.\"</p>"
      }
    },
    {
      id: "trailing-spaces-equal",
      lang: "sql",
      src: "SELECT CASE WHEN 'a' = 'a ' THEN 'equal' ELSE 'different' END AS trailing_test,\n       CASE WHEN ' a' = 'a' THEN 'equal' ELSE 'different' END AS leading_test,\n       LEN('a ') AS len_value,\n       DATALENGTH('a ') AS bytes;",
      answer: "equal different 1 2",
      explain: {
        en: "<p>In SQL Server string comparison pads the shorter value with spaces, so <b>trailing</b> spaces are ignored: <code>'a' = 'a '</code> is true. A <b>leading</b> space counts. <code>LEN</code> ignores trailing spaces (1) while <code>DATALENGTH</code> counts the bytes (2). Surprising for unique keys: <code>'abc'</code> and <code>'abc '</code> collide.</p>",
        hi: "<p>SQL Server में string comparison छोटी value को spaces से pad करता है, इसलिए <b>trailing</b> spaces ignore होते हैं: <code>'a' = 'a '</code> true है। <b>Leading</b> space गिना जाता है। <code>LEN</code> trailing spaces ignore करता है (1) जबकि <code>DATALENGTH</code> bytes गिनता है (2)। Unique keys के लिए चौंकाने वाला: <code>'abc'</code> और <code>'abc '</code> टकराते हैं।</p>",
        hg: "<p>SQL Server mein string comparison chhoti value ko spaces se pad karta hai, isliye <b>trailing</b> spaces ignore hote hain: <code>'a' = 'a '</code> true hai. <b>Leading</b> space ginta jaata hai. <code>LEN</code> trailing spaces ignore karta hai (1) jabki <code>DATALENGTH</code> bytes ginta hai (2). Unique keys ke liye chaunkane wala: <code>'abc'</code> aur <code>'abc '</code> takrate hain.</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Clustered</b> index = the table in key order, one per table; no clustered index = heap. A <b>non-clustered</b> index is a separate list that carries the clustered key.",
      "<b>Key lookup</b> = one extra trip per row; a <b>covering</b> index keeps search columns in the key and read-only columns in <code>INCLUDE</code>.",
      "<b>SARGable</b>: keep the indexed column bare (no function, no arithmetic) and match its data type; use half-open date ranges.",
      "Anti-join with <code>NOT EXISTS</code>, never <code>NOT IN</code> on a nullable column; put right-table filters of a LEFT JOIN in <code>ON</code>.",
      "<b>Window functions</b> keep every row: <code>ROW_NUMBER</code> never ties, <code>RANK</code> leaves gaps, <code>DENSE_RANK</code> does not; write <code>ROWS</code> for running totals.",
      "READ COMMITTED releases locks at once; REPEATABLE READ keeps row locks; SERIALIZABLE adds range locks (no phantoms). RCSI uses row versions instead of shared locks.",
      "Deadlock cure: the same access order everywhere, short transactions, <code>XACT_ABORT ON</code>, and a bounded retry of error 1205 only.",
      "The optimizer plans from <b>statistics</b>; with skewed data the first call's value shapes the cached plan (<b>parameter sniffing</b>): speed changes, the answer does not.",
      "Compare estimated with actual rows in the actual plan; a big gap points to statistics, skew or sniffing.",
      "Scalar UDF inlining and table-variable deferred compilation arrived in SQL Server 2019 (compat 150)."
    ],
    meaning: {
      hi: [
        "Clustered index = key के क्रम में table, एक table में एक; clustered नहीं = heap। Non-clustered अलग list है जो clustered key रखती है",
        "Key lookup = हर row पर एक extra चक्कर; covering index में search columns key में और सिर्फ़ पढ़ने वाले INCLUDE में",
        "SARGable: indexed column खाली रखो (function या arithmetic नहीं), data type मिलाओ; date की half-open range लो",
        "Anti-join के लिए NOT EXISTS, nullable column पर NOT IN कभी नहीं; LEFT JOIN में right table की शर्तें ON में",
        "Window functions हर row रखते हैं: ROW_NUMBER में ties नहीं, RANK में gaps, DENSE_RANK में नहीं; running total के लिए ROWS लिखो",
        "READ COMMITTED locks तुरंत छोड़ता है; REPEATABLE READ row locks रखता है; SERIALIZABLE range locks जोड़ता है (phantoms नहीं)। RCSI shared locks की जगह row versions लेता है",
        "Deadlock का इलाज: हर जगह एक ही access क्रम, छोटी transactions, XACT_ABORT ON, और सिर्फ़ error 1205 का सीमित retry",
        "Optimizer statistics से plan बनाता है; skewed data में पहली call की value cached plan को आकार देती है (parameter sniffing): गति बदलती है, जवाब नहीं",
        "Actual plan में estimated और actual rows compare करो; बड़ा gap statistics, skew या sniffing की तरफ़ इशारा है।",
        "Scalar UDF inlining और table-variable deferred compilation SQL Server 2019 (compat 150) में आए।"
      ],
      hg: [
        "Clustered index = key ke kram mein table, ek table mein ek; clustered nahi = heap. Non-clustered alag list hai jo clustered key rakhti hai",
        "Key lookup = har row par ek extra chakkar; covering index mein search columns key mein aur sirf padhne wale INCLUDE mein",
        "SARGable: indexed column khaali rakho (function ya arithmetic nahi), data type milao; date ki half-open range lo",
        "Anti-join ke liye NOT EXISTS, nullable column par NOT IN kabhi nahi; LEFT JOIN mein right table ki shartein ON mein",
        "Window functions har row rakhte hain: ROW_NUMBER mein ties nahi, RANK mein gaps, DENSE_RANK mein nahi; running total ke liye ROWS likho",
        "READ COMMITTED locks turant chhodta hai; REPEATABLE READ row locks rakhta hai; SERIALIZABLE range locks jodta hai (phantoms nahi). RCSI shared locks ki jagah row versions leta hai",
        "Deadlock ka ilaaj: har jagah ek hi access kram, chhoti transactions, XACT_ABORT ON, aur sirf error 1205 ka seemit retry",
        "Optimizer statistics se plan banata hai; skewed data mein pehli call ki value cached plan ko aakar deti hai (parameter sniffing): gati badalti hai, jawab nahi",
        "Actual plan mein estimated aur actual rows compare karo; bada gap statistics, skew ya sniffing ki taraf ishaara hai.",
        "Scalar UDF inlining aur table-variable deferred compilation SQL Server 2019 (compat 150) mein aaye."
      ]
    }
  }
};
