// Day 4 — LINQ, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 4,
  format: "lesson",
  title: {
    en: "LINQ — deferred execution, IEnumerable vs IQueryable, Select/SelectMany, GroupBy, joins, First/Single, Any/Count, paging",
    hi: "LINQ — deferred execution, IEnumerable बनाम IQueryable, Select/SelectMany, GroupBy, joins, First/Single, Any/Count, paging",
    hg: "LINQ — deferred execution, IEnumerable vs IQueryable, Select/SelectMany, GroupBy, joins, First/Single, Any/Count, paging"
  },
  summary: {
    en: "<p>Day 4 teaches <b>LINQ</b> in 8 short lessons on the customer-care CRM. First what LINQ is and when a query really runs (deferred vs immediate, and the hidden double work of multiple enumeration). Then where it runs (<code>IEnumerable</code> vs <code>IQueryable</code>), and the everyday tools: ordering and paging, grouping, joins, and picking one ticket or answering yes/no.</p><p>Every lesson follows the same path: what it is, why you need it, an analogy, a complete program with its output, line-by-line notes, common mistakes, a small exercise and a quick quiz.</p>",
    hi: "<p>Day 4 में customer-care CRM पर 8 छोटे पाठों में <b>LINQ</b> सिखाया जाता है। पहले LINQ क्या है और query असल में कब चलती है (deferred बनाम immediate, और multiple enumeration का छिपा दुगना काम)। फिर वह कहाँ चलती है (<code>IEnumerable</code> बनाम <code>IQueryable</code>), और रोज़ के औज़ार: ordering और paging, grouping, joins, और एक ticket चुनना या हाँ/नहीं का जवाब देना।</p><p>हर पाठ एक ही क्रम में चलता है: यह क्या है, क्यों चाहिए, एक मिसाल, output के साथ पूरा program, लाइन-दर-लाइन समझ, आम ग़लतियाँ, एक छोटा exercise और एक झटपट quiz।</p>",
    hg: "<p>Day 4 mein customer-care CRM par 8 chhote lessons mein <b>LINQ</b> sikhaya jaata hai. Pehle LINQ kya hai aur query asal mein kab chalti hai (deferred vs immediate, aur multiple enumeration ka chhipa dugna kaam). Phir woh kahan chalti hai (<code>IEnumerable</code> vs <code>IQueryable</code>), aur roz ke auzaar: ordering aur paging, grouping, joins, aur ek ticket chunna ya haan/nahi ka jawaab dena.</p><p>Har lesson ek hi kram mein chalta hai: ye kya hai, kyun chahiye, ek misaal, output ke saath poora program, line-by-line samajh, aam galtiyan, ek chhota exercise aur ek jhatpat quiz.</p>"
  },
  sections: [
    {
      id: "linq-basics",
      depth: "short",
      title: {
        en: "What LINQ is: Where and Select",
        hi: "LINQ क्या है: Where और Select",
        hg: "LINQ kya hai: Where aur Select"
      },
      lesson: {
        buildsOn: {
          en: "Day 1 built <code>Customer</code> and <code>SupportTicket</code>, and the <code>TicketService</code> found tickets with <code>foreach</code> and <code>if</code>. Today you replace those loops with LINQ: shorter, and it reads like the question you are asking.",
          hi: "Day 1 में <code>Customer</code> और <code>SupportTicket</code> बने थे, और <code>TicketService</code> tickets <code>foreach</code> और <code>if</code> से ढूँढता था। आज इन loops की जगह LINQ लगाएँगे: छोटा code, और वह उसी सवाल की तरह पढ़ा जाता है जो आप पूछ रहे हो।",
          hg: "Day 1 mein <code>Customer</code> aur <code>SupportTicket</code> bane the, aur <code>TicketService</code> tickets <code>foreach</code> aur <code>if</code> se dhoondhta tha. Aaj in loops ki jagah LINQ lagayenge: chhota code, aur woh usi sawaal ki tarah padha jaata hai jo aap pooch rahe ho."
        },
        what: {
          en: "<p><b>LINQ</b> (Language Integrated Query) lets you <b>describe the result</b> you want from a collection instead of writing the loop. <code>Where</code> keeps only some items. <code>Select</code> turns each item into something else.</p><p>Each operator returns a <b>new sequence</b>; the original list is not changed. You can write the same query in <b>method syntax</b> (<code>.Where(...)</code>) or <b>query syntax</b> (<code>from ... where ... select</code>). The compiler turns query syntax into the same method calls.</p>",
          hi: "<p><b>LINQ</b> (Language Integrated Query) में आप loop लिखने की जगह बताते हो कि <b>नतीजा क्या चाहिए</b>। <code>Where</code> सिर्फ़ कुछ items रखता है। <code>Select</code> हर item को किसी और रूप में बदल देता है।</p><p>हर operator एक <b>नई sequence</b> लौटाता है; असली list नहीं बदलती। वही query आप <b>method syntax</b> (<code>.Where(...)</code>) या <b>query syntax</b> (<code>from ... where ... select</code>) में लिख सकते हो। Compiler query syntax को उन्हीं method calls में बदल देता है।</p>",
          hg: "<p><b>LINQ</b> (Language Integrated Query) mein aap loop likhne ki jagah batate ho ki <b>nateeja kya chahiye</b>. <code>Where</code> sirf kuch items rakhta hai. <code>Select</code> har item ko kisi aur roop mein badal deta hai.</p><p>Har operator ek <b>nayi sequence</b> lautaata hai; asli list nahi badalti. Wahi query aap <b>method syntax</b> (<code>.Where(...)</code>) ya <b>query syntax</b> (<code>from ... where ... select</code>) mein likh sakte ho. Compiler query syntax ko unhi method calls mein badal deta hai.</p>"
        },
        why: {
          en: "<p>The support screen needs \"open tickets with high priority, as short lines\". With loops that is a temporary list, an <code>if</code>, an <code>Add</code>. With LINQ it is one readable chain that anyone on the team can review quickly.</p>",
          hi: "<p>Support screen को चाहिए \"high priority वाले open tickets, छोटी lines में\"। Loops से यह एक temporary list, एक <code>if</code> और एक <code>Add</code> बनता है। LINQ में यह एक पढ़ने लायक chain है जिसे team में कोई भी जल्दी review कर सकता है।</p>",
          hg: "<p>Support screen ko chahiye \"high priority wale open tickets, chhoti lines mein\". Loops se ye ek temporary list, ek <code>if</code> aur ek <code>Add</code> banta hai. LINQ mein ye ek padhne layak chain hai jise team mein koi bhi jaldi review kar sakta hai.</p>"
        },
        analogy: {
          en: "<p>You do not tell the kirana shopkeeper <i>how</i> to search his shelves. You just say what you want: \"items under ₹100, only the names\". He does the walking and checking. LINQ is that shopping list: you describe the result, the library does the looping.</p>",
          hi: "<p>Kirana दुकानदार को आप यह नहीं बताते कि shelves में <i>कैसे</i> ढूँढना है। बस बोलते हो क्या चाहिए: \"₹100 से कम की चीज़ें, सिर्फ़ नाम\"। चलना-देखना वह करता है। LINQ वही सामान की list है: आप नतीजा बताते हो, loop library चलाती है।</p>",
          hg: "<p>Kirana dukaandaar ko aap ye nahi batate ki shelves mein <i>kaise</i> dhoondhna hai. Bas bolte ho kya chahiye: \"₹100 se kam ki cheezein, sirf naam\". Chalna-dekhna woh karta hai. LINQ wahi saamaan ki list hai: aap nateeja batate ho, loop library chalati hai.</p>"
        },
        lines: [
          {
            code: ".Where(t => t.Status == \"Open\" && t.Priority == 1)",
            note: {
              en: "<code>Where</code> keeps a ticket only when the lambda returns <code>true</code>. The lambda <code>t =&gt; ...</code> is from Day 2: <code>t</code> is one ticket.",
              hi: "<code>Where</code> ticket को तभी रखता है जब lambda <code>true</code> लौटाए। Lambda <code>t =&gt; ...</code> Day 2 वाला है: <code>t</code> एक ticket है।",
              hg: "<code>Where</code> ticket ko tabhi rakhta hai jab lambda <code>true</code> lautaye. Lambda <code>t =&gt; ...</code> Day 2 wala hai: <code>t</code> ek ticket hai."
            }
          },
          {
            code: ".Select(t => $\"#{t.Id} {t.Issue}\");",
            note: {
              en: "<code>Select</code> gives <b>one output per input</b>. Here each ticket becomes a short string. Count in = count out.",
              hi: "<code>Select</code> <b>हर input पर एक output</b> देता है। यहाँ हर ticket एक छोटी string बन जाता है। जितने अंदर, उतने बाहर।",
              hg: "<code>Select</code> <b>har input par ek output</b> deta hai. Yahan har ticket ek chhoti string ban jaata hai. Jitne andar, utne bahar."
            }
          },
          {
            code: "var urgentQuery = from t in tickets",
            note: {
              en: "Query syntax always starts with <code>from</code>: \"for each ticket <code>t</code> in <code>tickets</code>\".",
              hi: "Query syntax हमेशा <code>from</code> से शुरू होती है: \"<code>tickets</code> में हर ticket <code>t</code> के लिए\"।",
              hg: "Query syntax hamesha <code>from</code> se shuru hoti hai: \"<code>tickets</code> mein har ticket <code>t</code> ke liye\"."
            }
          },
          {
            code: "select $\"#{t.Id} {t.Issue}\";",
            note: {
              en: "A query ends with <code>select</code> (or <code>group</code>). The compiler rewrites it into the same <code>Where</code> and <code>Select</code> calls, so there is no speed difference.",
              hi: "Query <code>select</code> (या <code>group</code>) पर ख़त्म होती है। Compiler इसे वही <code>Where</code> और <code>Select</code> calls में बदल देता है, इसलिए speed में कोई फ़र्क़ नहीं।",
              hg: "Query <code>select</code> (ya <code>group</code>) par khatam hoti hai. Compiler ise wahi <code>Where</code> aur <code>Select</code> calls mein badal deta hai, isliye speed mein koi farq nahi."
            }
          },
          {
            code: "Console.WriteLine($\"Tickets in the list: {tickets.Count}\");",
            note: {
              en: "Still 8. LINQ <b>reads</b> the list and builds new results; it never removes or edits the original items.",
              hi: "अब भी 8। LINQ list को <b>पढ़ता</b> है और नए नतीजे बनाता है; असली items को न हटाता है, न बदलता है।",
              hg: "Ab bhi 8. LINQ list ko <b>padhta</b> hai aur naye nateeje banata hai; asli items ko na hatata hai, na badalta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Writing <code>tickets.Where(...)</code> as a statement and expecting the list to shrink. It returns a new sequence; if you ignore it, nothing happens.</li><li>Missing <code>using System.Linq;</code> in a project without implicit usings: <code>.Where</code> gives error CS1061. New SDK-style projects add it for you.</li><li>Using <code>Select</code> for side effects such as sending an SMS. Use <code>foreach</code> for actions; <code>Select</code> is for shaping data.</li></ul>",
          hi: "<ul><li><code>tickets.Where(...)</code> को statement की तरह लिखकर सोचना कि list छोटी हो जाएगी। यह नई sequence लौटाता है; आप उसे ignore करो तो कुछ नहीं होता।</li><li>जिस project में implicit usings नहीं हैं, वहाँ <code>using System.Linq;</code> भूलना: <code>.Where</code> पर error CS1061 आता है। नए SDK-style projects यह अपने आप जोड़ देते हैं।</li><li>SMS भेजने जैसे काम के लिए <code>Select</code> इस्तेमाल करना। काम के लिए <code>foreach</code> रखो; <code>Select</code> data का रूप बदलने के लिए है।</li></ul>",
          hg: "<ul><li><code>tickets.Where(...)</code> ko statement ki tarah likhkar sochna ki list chhoti ho jayegi. Ye nayi sequence lautaata hai; aap use ignore karo to kuch nahi hota.</li><li>Jis project mein implicit usings nahi hain, wahan <code>using System.Linq;</code> bhoolna: <code>.Where</code> par error CS1061 aata hai. Naye SDK-style projects ye apne aap jod dete hain.</li><li>SMS bhejne jaise kaam ke liye <code>Select</code> use karna. Kaam ke liye <code>foreach</code> rakho; <code>Select</code> data ka roop badalne ke liye hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use LINQ to filter, shape and report on collections: dashboards, API responses, mapping entities to DTOs. Use a plain <code>foreach</code> when you must change items or do actions with side effects. Prefer method syntax for short chains; query syntax can read better with several <code>join</code>s (lesson 7).</p>",
          hi: "<p>Collections को filter करने, उनका रूप बदलने और report बनाने के लिए LINQ इस्तेमाल करो: dashboards, API responses, entities से DTO बनाना। जब items बदलने हों या side effect वाले काम हों, तब सादा <code>foreach</code> रखो। छोटी chains के लिए method syntax अच्छा है; कई <code>join</code> हों तो query syntax ज़्यादा साफ़ पढ़ी जाती है (पाठ 7)।</p>",
          hg: "<p>Collections ko filter karne, unka roop badalne aur report banane ke liye LINQ use karo: dashboards, API responses, entities se DTO banana. Jab items badalne hon ya side effect wale kaam hon, tab saada <code>foreach</code> rakho. Chhoti chains ke liye method syntax achha hai; kai <code>join</code> hon to query syntax zyada saaf padhi jaati hai (lesson 7).</p>"
        },
        exercise: {
          task: {
            en: "<p>Print the customers of the <b>closed</b> tickets as one line: <code>Closed: Ravi, Asha, Neha</code>.</p>",
            hi: "<p><b>Closed</b> tickets के customers को एक line में print करो: <code>Closed: Ravi, Asha, Neha</code>।</p>",
            hg: "<p><b>Closed</b> tickets ke customers ko ek line mein print karo: <code>Closed: Ravi, Asha, Neha</code>.</p>"
          },
          hint: {
            en: "<p><code>Where</code> on <code>Status</code>, then <code>Select</code> the <code>Customer</code>, then <code>string.Join(\", \", ...)</code>.</p>",
            hi: "<p><code>Status</code> पर <code>Where</code>, फिर <code>Customer</code> को <code>Select</code>, फिर <code>string.Join(\", \", ...)</code>।</p>",
            hg: "<p><code>Status</code> par <code>Where</code>, phir <code>Customer</code> ko <code>Select</code>, phir <code>string.Join(\", \", ...)</code>.</p>"
          },
          solution: {
            caption: {
              en: "Solution: customers of closed tickets",
              hi: "हल: closed tickets के customers",
              hg: "Solution: closed tickets ke customers"
            },
            src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3),\n    new(505, \"Asha\", \"Refund pending\", \"Closed\", \"Meena\", 2),\n    new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3),\n    new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2),\n    new(508, \"Asha\", \"Slow internet\", \"Open\", \"Meena\", 1)\n};\n\nvar closedCustomers = tickets\n    .Where(t => t.Status == \"Closed\")\n    .Select(t => t.Customer);\nConsole.WriteLine(\"Closed: \" + string.Join(\", \", closedCustomers));\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
            check: "run",
            expected: "Closed: Ravi, Asha, Neha"
          }
        },
        quiz: {
          q: {
            en: "After <code>var open = tickets.Where(t =&gt; t.Status == \"Open\");</code>, what happens to the <code>tickets</code> list?",
            hi: "<code>var open = tickets.Where(t =&gt; t.Status == \"Open\");</code> के बाद <code>tickets</code> list का क्या होता है?",
            hg: "<code>var open = tickets.Where(t =&gt; t.Status == \"Open\");</code> ke baad <code>tickets</code> list ka kya hota hai?"
          },
          options: [
            {
              en: "<code>Where</code> removes the closed tickets from it",
              hi: "<code>Where</code> उसमें से closed tickets हटा देता है",
              hg: "<code>Where</code> usmein se closed tickets hata deta hai"
            },
            {
              en: "Nothing: it stays unchanged and <code>open</code> is a new sequence",
              hi: "कुछ नहीं: वह जैसी थी वैसी रहती है और <code>open</code> एक नई sequence है",
              hg: "Kuch nahi: woh jaisi thi waisi rehti hai aur <code>open</code> ek nayi sequence hai"
            },
            {
              en: "It is sorted by status",
              hi: "वह status के हिसाब से sort हो जाती है",
              hg: "Woh status ke hisaab se sort ho jaati hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>LINQ operators never edit the source. <code>Where</code> returns a new sequence that describes the filtered result; the original list keeps all its tickets.</p>",
            hi: "<p>LINQ operators source को कभी नहीं बदलते। <code>Where</code> एक नई sequence लौटाता है जो filter किया हुआ नतीजा बताती है; असली list में सारे tickets वैसे ही रहते हैं।</p>",
            hg: "<p>LINQ operators source ko kabhi nahi badalte. <code>Where</code> ek nayi sequence lautaata hai jo filter kiya hua nateeja batati hai; asli list mein saare tickets waise hi rehte hain.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>Where</code> filters; <code>Select</code> reshapes, one output per input.</li><li>Method syntax and query syntax give the same result.</li><li>LINQ reads the source and returns a new sequence; it never edits the list.</li></ul>",
          hi: "<ul><li><code>Where</code> filter करता है; <code>Select</code> रूप बदलता है, हर input पर एक output।</li><li>Method syntax और query syntax का नतीजा एक ही है।</li><li>LINQ source को पढ़ता है और नई sequence लौटाता है; list को कभी नहीं बदलता।</li></ul>",
          hg: "<ul><li><code>Where</code> filter karta hai; <code>Select</code> roop badalta hai, har input par ek output.</li><li>Method syntax aur query syntax ka nateeja ek hi hai.</li><li>LINQ source ko padhta hai aur nayi sequence lautaata hai; list ko kabhi nahi badalta.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Open urgent tickets: method syntax and query syntax",
            hi: "Open urgent tickets: method syntax और query syntax",
            hg: "Open urgent tickets: method syntax aur query syntax"
          },
          src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3),\n    new(505, \"Asha\", \"Refund pending\", \"Closed\", \"Meena\", 2),\n    new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3),\n    new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2),\n    new(508, \"Asha\", \"Slow internet\", \"Open\", \"Meena\", 1)\n};\n\n// Method syntax: filter with Where, reshape with Select\nvar urgent = tickets\n    .Where(t => t.Status == \"Open\" && t.Priority == 1)\n    .Select(t => $\"#{t.Id} {t.Issue}\");\n\nforeach (var line in urgent)\n    Console.WriteLine(line);\n\n// Query syntax: the compiler turns it into the same method calls\nvar urgentQuery = from t in tickets\n                  where t.Status == \"Open\" && t.Priority == 1\n                  select $\"#{t.Id} {t.Issue}\";\nConsole.WriteLine(string.Join(\", \", urgentQuery));\n\n// LINQ reads the list; it does not change it\nConsole.WriteLine($\"Tickets in the list: {tickets.Count}\");\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
          check: "run",
          expected: "#501 Router not working\n#503 SIM not active\n#508 Slow internet\n#501 Router not working, #503 SIM not active, #508 Slow internet\nTickets in the list: 8"
        }
      ]
    },
    {
      id: "deferred-vs-immediate",
      depth: "short",
      title: {
        en: "Deferred vs immediate execution",
        hi: "Deferred और immediate execution",
        hg: "Deferred aur immediate execution"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 wrote a <code>Where</code>/<code>Select</code> chain and looped over it. Now the key question: <b>when</b> does that chain actually run? Not where you wrote it.",
          hi: "पाठ 1 में <code>Where</code>/<code>Select</code> chain लिखी और उस पर loop चलाया। अब मुख्य सवाल: वह chain असल में <b>कब</b> चलती है? जहाँ आपने लिखी, वहाँ नहीं।",
          hg: "Lesson 1 mein <code>Where</code>/<code>Select</code> chain likhi aur us par loop chalaya. Ab mukhya sawaal: woh chain asal mein <b>kab</b> chalti hai? Jahan aapne likhi, wahan nahi."
        },
        what: {
          en: "<p><b>Deferred execution</b>: <code>Where</code>, <code>Select</code>, <code>OrderBy</code> only build a <b>recipe</b>. Nothing is read until you ask for results.</p><p>Operators that ask for results are <b>immediate</b>: <code>foreach</code>, <code>ToList()</code>, <code>ToArray()</code>, <code>Count()</code>, <code>First()</code>, <code>Any()</code>, <code>Sum()</code>. They run the recipe now, with the data and variable values of that moment.</p>",
          hi: "<p><b>Deferred execution</b>: <code>Where</code>, <code>Select</code>, <code>OrderBy</code> सिर्फ़ एक <b>recipe</b> बनाते हैं। जब तक आप नतीजा नहीं माँगते, कुछ नहीं पढ़ा जाता।</p><p>जो operators नतीजा माँगते हैं वे <b>immediate</b> हैं: <code>foreach</code>, <code>ToList()</code>, <code>ToArray()</code>, <code>Count()</code>, <code>First()</code>, <code>Any()</code>, <code>Sum()</code>। ये recipe को अभी चलाते हैं, उस पल के data और variable values के साथ।</p>",
          hg: "<p><b>Deferred execution</b>: <code>Where</code>, <code>Select</code>, <code>OrderBy</code> sirf ek <b>recipe</b> banate hain. Jab tak aap nateeja nahi maangte, kuch nahi padha jaata.</p><p>Jo operators nateeja maangte hain woh <b>immediate</b> hain: <code>foreach</code>, <code>ToList()</code>, <code>ToArray()</code>, <code>Count()</code>, <code>First()</code>, <code>Any()</code>, <code>Sum()</code>. Ye recipe ko abhi chalate hain, us pal ke data aur variable values ke saath.</p>"
        },
        why: {
          en: "<p>If you think the query ran when you wrote it, you will be surprised: new tickets that arrive later appear in the result, a bug inside a lambda explodes late (at the <code>foreach</code>), and the same query may run more than once (lesson 3).</p>",
          hi: "<p>अगर आप समझते हो कि query लिखते ही चल गई, तो हैरानी होगी: बाद में आए नए tickets नतीजे में दिखेंगे, lambda के अंदर की ग़लती देर से (<code>foreach</code> पर) फटेगी, और वही query एक से ज़्यादा बार चल सकती है (पाठ 3)।</p>",
          hg: "<p>Agar aap samajhte ho ki query likhte hi chal gayi, to hairani hogi: baad mein aaye naye tickets nateeje mein dikhenge, lambda ke andar ki galti der se (<code>foreach</code> par) phategi, aur wahi query ek se zyada baar chal sakti hai (lesson 3).</p>"
        },
        analogy: {
          en: "<p>A railway reservation chart. You can book and cancel for days, but the chart is prepared only a few hours before the train leaves, from the bookings at that moment. A deferred query is the instruction \"prepare the chart\". Enumerating it prepares the chart. <code>ToList()</code> is the printed copy: later bookings do not appear on that paper.</p>",
          hi: "<p>रेल का reservation chart। आप कई दिन तक booking और cancel कर सकते हो, पर chart गाड़ी छूटने से कुछ घंटे पहले ही बनता है, उस वक़्त की bookings से। Deferred query \"chart बनाओ\" वाला हुक्म है। उसे enumerate करना chart बनाना है। <code>ToList()</code> छपी हुई copy है: बाद की bookings उस काग़ज़ पर नहीं दिखतीं।</p>",
          hg: "<p>Rail ka reservation chart. Aap kai din tak booking aur cancel kar sakte ho, par chart gaadi chhootne se kuch ghante pehle hi banta hai, us waqt ki bookings se. Deferred query \"chart banao\" wala hukm hai. Use enumerate karna chart banana hai. <code>ToList()</code> chhapi hui copy hai: baad ki bookings us kaagaz par nahi dikhtin.</p>"
        },
        lines: [
          {
            code: "var open = tickets.Where(t =>",
            note: {
              en: "Builds the query only. The lambda has not run once yet.",
              hi: "सिर्फ़ query बनती है। Lambda अभी एक बार भी नहीं चला।",
              hg: "Sirf query banti hai. Lambda abhi ek baar bhi nahi chala."
            }
          },
          {
            code: "tickets.Add(new(505, \"Asha\", \"Refund pending\", \"Open\", \"Meena\", 2));",
            note: {
              en: "A new open ticket arrives <b>before</b> we ask for results. The query will see it, because it reads the list later.",
              hi: "नया open ticket नतीजा माँगने <b>से पहले</b> आता है। Query उसे देखेगी, क्योंकि वह list को बाद में पढ़ती है।",
              hg: "Naya open ticket nateeja maangne <b>se pehle</b> aata hai. Query use dekhegi, kyunki woh list ko baad mein padhti hai."
            }
          },
          {
            code: "List<SupportTicket> snapshot = open.ToList();",
            note: {
              en: "<b>Immediate</b>: the recipe runs now over 5 tickets and the results are copied into a new list.",
              hi: "<b>Immediate</b>: recipe अभी 5 tickets पर चलती है और नतीजे एक नई list में copy हो जाते हैं।",
              hg: "<b>Immediate</b>: recipe abhi 5 tickets par chalti hai aur nateeje ek nayi list mein copy ho jaate hain."
            }
          },
          {
            code: "Console.WriteLine($\"Copy still has {snapshot.Count}, query now finds {open.Count()}\");",
            note: {
              en: "The copy stays at 3. <code>open.Count()</code> runs the recipe again over 6 tickets and finds 4. Total checks: 5 + 6 = 11.",
              hi: "Copy 3 पर ही रहती है। <code>open.Count()</code> recipe को फिर से 6 tickets पर चलाता है और 4 पाता है। कुल checks: 5 + 6 = 11।",
              hg: "Copy 3 par hi rehti hai. <code>open.Count()</code> recipe ko phir se 6 tickets par chalata hai aur 4 paata hai. Kul checks: 5 + 6 = 11."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Believing the query ran on the line where you wrote it. A bug inside the lambda (null, divide by zero) appears later, at the <code>foreach</code> or <code>ToList()</code>.</li><li>Enumerating the same deferred query in many places by accident. Each time it runs again (lesson 3).</li><li>Calling <code>ToList()</code> after every step \"to be safe\". Each call copies all the data.</li></ul>",
          hi: "<ul><li>यह मानना कि query उसी line पर चल गई जहाँ लिखी। Lambda के अंदर की ग़लती (null, zero से भाग) बाद में, <code>foreach</code> या <code>ToList()</code> पर दिखती है।</li><li>एक ही deferred query को कई जगह अनजाने में enumerate करना। हर बार वह फिर चलती है (पाठ 3)।</li><li>\"सुरक्षा के लिए\" हर step के बाद <code>ToList()</code> लगाना। हर call सारा data copy करती है।</li></ul>",
          hg: "<ul><li>Ye maanna ki query usi line par chal gayi jahan likhi. Lambda ke andar ki galti (null, zero se bhaag) baad mein, <code>foreach</code> ya <code>ToList()</code> par dikhti hai.</li><li>Ek hi deferred query ko kai jagah anjaane mein enumerate karna. Har baar woh phir chalti hai (lesson 3).</li><li>\"Suraksha ke liye\" har step ke baad <code>ToList()</code> lagana. Har call saara data copy karti hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Keep the query deferred while you build it step by step (for example, add a filter only if the user picked a city), and let it run once at the end. Use <code>ToList()</code> or <code>ToArray()</code> when you need a <b>fixed snapshot</b>, or when you will use the result more than once. Always materialise before the thing it depends on goes away, such as a disposed <code>DbContext</code>.</p>",
          hi: "<p>Query को तब तक deferred रखो जब तक आप उसे step-by-step बना रहे हो (जैसे user ने city चुनी हो तभी filter जोड़ना), और आख़िर में एक बार चलने दो। जब <b>पक्का snapshot</b> चाहिए, या नतीजा एक से ज़्यादा बार इस्तेमाल करना हो, तब <code>ToList()</code> या <code>ToArray()</code> लगाओ। जिस चीज़ पर query निर्भर है (जैसे बंद हो चुका <code>DbContext</code>), उसके जाने से पहले नतीजा list में ले लो।</p>",
          hg: "<p>Query ko tab tak deferred rakho jab tak aap use step-by-step bana rahe ho (jaise user ne city chuni ho tabhi filter jodna), aur aakhir mein ek baar chalne do. Jab <b>pakka snapshot</b> chahiye, ya nateeja ek se zyada baar use karna ho, tab <code>ToList()</code> ya <code>ToArray()</code> lagao. Jis cheez par query nirbhar hai (jaise band ho chuka <code>DbContext</code>), uske jaane se pehle nateeja list mein le lo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Build a query for <b>closed</b> tickets. Take a snapshot with <code>ToList()</code>, then add closed ticket 507. Print <code>Snapshot: 2, live query: 3</code>.</p>",
            hi: "<p><b>Closed</b> tickets की query बनाओ। <code>ToList()</code> से snapshot लो, फिर closed ticket 507 जोड़ो। <code>Snapshot: 2, live query: 3</code> print करो।</p>",
            hg: "<p><b>Closed</b> tickets ki query banao. <code>ToList()</code> se snapshot lo, phir closed ticket 507 jodo. <code>Snapshot: 2, live query: 3</code> print karo.</p>"
          },
          hint: {
            en: "<p>Order matters: <code>ToList()</code> first, then <code>Add</code>, then print <code>closed.Count()</code>.</p>",
            hi: "<p>क्रम ज़रूरी है: पहले <code>ToList()</code>, फिर <code>Add</code>, फिर <code>closed.Count()</code> print करो।</p>",
            hg: "<p>Kram zaroori hai: pehle <code>ToList()</code>, phir <code>Add</code>, phir <code>closed.Count()</code> print karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: snapshot vs live query",
              hi: "हल: snapshot बनाम live query",
              hg: "Solution: snapshot vs live query"
            },
            src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Closed\", \"Meena\", 3)\n};\n\nvar closed = tickets.Where(t => t.Status == \"Closed\");\nList<SupportTicket> before = closed.ToList();\n\ntickets.Add(new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2));\nConsole.WriteLine($\"Snapshot: {before.Count}, live query: {closed.Count()}\");\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
            check: "run",
            expected: "Snapshot: 2, live query: 3"
          }
        },
        quiz: {
          q: {
            en: "You build <code>var q = tickets.Where(...)</code>, then add a matching ticket to the list, then run <code>foreach (var t in q)</code>. Does the loop show the new ticket?",
            hi: "आप <code>var q = tickets.Where(...)</code> बनाते हो, फिर list में एक matching ticket जोड़ते हो, फिर <code>foreach (var t in q)</code> चलाते हो। क्या loop में नया ticket दिखेगा?",
            hg: "Aap <code>var q = tickets.Where(...)</code> banate ho, phir list mein ek matching ticket jodte ho, phir <code>foreach (var t in q)</code> chalate ho. Kya loop mein naya ticket dikhega?"
          },
          options: [
            {
              en: "No, the query was fixed when it was built",
              hi: "नहीं, query बनते समय ही तय हो गई थी",
              hg: "Nahi, query bante samay hi tay ho gayi thi"
            },
            {
              en: "No, unless you call <code>ToList()</code> first",
              hi: "नहीं, जब तक पहले <code>ToList()</code> न चलाओ",
              hg: "Nahi, jab tak pehle <code>ToList()</code> na chalao"
            },
            {
              en: "Yes, because the query only runs at the <code>foreach</code>",
              hi: "हाँ, क्योंकि query <code>foreach</code> पर ही चलती है",
              hg: "Haan, kyunki query <code>foreach</code> par hi chalti hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p><code>Where</code> is deferred, so the list is read when the <code>foreach</code> starts. The new ticket is already in the list by then. A <code>ToList()</code> taken <i>before</i> the add would not show it.</p>",
            hi: "<p><code>Where</code> deferred है, इसलिए list <code>foreach</code> शुरू होने पर पढ़ी जाती है। तब तक नया ticket list में आ चुका होता है। Add <i>से पहले</i> लिया गया <code>ToList()</code> उसे नहीं दिखाता।</p>",
            hg: "<p><code>Where</code> deferred hai, isliye list <code>foreach</code> shuru hone par padhi jaati hai. Tab tak naya ticket list mein aa chuka hota hai. Add <i>se pehle</i> liya gaya <code>ToList()</code> use nahi dikhata.</p>"
          }
        },
        recap: {
          en: "<ul><li>Deferred: <code>Where</code>/<code>Select</code>/<code>OrderBy</code> build a recipe and run nothing.</li><li>Immediate: <code>foreach</code>, <code>ToList</code>, <code>Count</code>, <code>First</code>, <code>Any</code> run it now, with the data of that moment.</li><li><code>ToList()</code> gives a snapshot; the original query still sees new data.</li></ul>",
          hi: "<ul><li>Deferred: <code>Where</code>/<code>Select</code>/<code>OrderBy</code> recipe बनाते हैं और कुछ नहीं चलाते।</li><li>Immediate: <code>foreach</code>, <code>ToList</code>, <code>Count</code>, <code>First</code>, <code>Any</code> उसे अभी चलाते हैं, उस पल के data के साथ।</li><li><code>ToList()</code> snapshot देता है; असली query को नया data फिर भी दिखता है।</li></ul>",
          hg: "<ul><li>Deferred: <code>Where</code>/<code>Select</code>/<code>OrderBy</code> recipe banate hain aur kuch nahi chalate.</li><li>Immediate: <code>foreach</code>, <code>ToList</code>, <code>Count</code>, <code>First</code>, <code>Any</code> use abhi chalate hain, us pal ke data ke saath.</li><li><code>ToList()</code> snapshot deta hai; asli query ko naya data phir bhi dikhta hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Count how often the lambda runs: nothing at build time, a snapshot with ToList",
            hi: "Lambda कितनी बार चलता है गिनो: build पर कुछ नहीं, ToList से snapshot",
            hg: "Lambda kitni baar chalta hai gino: build par kuch nahi, ToList se snapshot"
          },
          src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Closed\", \"Meena\", 3)\n};\nint checks = 0;\n\n// 1. Building the query runs nothing\nvar open = tickets.Where(t =>\n{\n    checks++;\n    return t.Status == \"Open\";\n});\nConsole.WriteLine($\"Built the query. checks = {checks}\");\n\n// 2. A new ticket arrives BEFORE we ask for results\ntickets.Add(new(505, \"Asha\", \"Refund pending\", \"Open\", \"Meena\", 2));\n\n// 3. ToList() runs the query now and keeps a copy\nList<SupportTicket> snapshot = open.ToList();\nConsole.WriteLine($\"After ToList: checks = {checks}, open tickets = {snapshot.Count}\");\n\n// 4. Another ticket arrives: the copy does not change, a new run sees it\n//    (we run the query again on purpose, only to show the difference)\ntickets.Add(new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3));\nConsole.WriteLine($\"Copy still has {snapshot.Count}, query now finds {open.Count()}\");\nConsole.WriteLine($\"Total checks = {checks}\");\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
          check: "run",
          expected: "Built the query. checks = 0\nAfter ToList: checks = 5, open tickets = 3\nCopy still has 3, query now finds 4\nTotal checks = 11"
        }
      ]
    },
    {
      id: "multiple-enumeration",
      depth: "short",
      title: {
        en: "Multiple enumeration: the hidden double work",
        hi: "Multiple enumeration: छिपा हुआ दुगना काम",
        hg: "Multiple enumeration: chhipa hua dugna kaam"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 2 showed that every <code>Count()</code> or <code>foreach</code> runs a deferred query again. This lesson shows where that hurts in real code, and the one-line fix.",
          hi: "पाठ 2 में दिखा कि हर <code>Count()</code> या <code>foreach</code> deferred query को फिर चलाता है। यह पाठ दिखाता है कि असली code में यह कहाँ चोट करता है, और उसका एक-line वाला इलाज क्या है।",
          hg: "Lesson 2 mein dikha ki har <code>Count()</code> ya <code>foreach</code> deferred query ko phir chalata hai. Ye lesson dikhata hai ki asli code mein ye kahan chot karta hai, aur uska ek-line wala ilaaj kya hai."
        },
        what: {
          en: "<p><b>Multiple enumeration</b> means looping over the same lazy query more than once, for example <code>items.Count()</code> and then <code>foreach (var t in items)</code>. The whole query runs <b>twice</b>.</p><p>The fix: run it <b>once</b> (<code>ToList()</code>), and pass around a real collection. If a method needs a count or several passes, make its parameter <code>IReadOnlyCollection&lt;T&gt;</code> or <code>IReadOnlyList&lt;T&gt;</code>.</p>",
          hi: "<p><b>Multiple enumeration</b> का मतलब: एक ही lazy query पर एक से ज़्यादा बार loop चलाना, जैसे <code>items.Count()</code> और फिर <code>foreach (var t in items)</code>। पूरी query <b>दो बार</b> चलती है।</p><p>इलाज: उसे <b>एक बार</b> चलाओ (<code>ToList()</code>), और असली collection आगे दो। अगर method को count या कई passes चाहिए, तो उसका parameter <code>IReadOnlyCollection&lt;T&gt;</code> या <code>IReadOnlyList&lt;T&gt;</code> रखो।</p>",
          hg: "<p><b>Multiple enumeration</b> ka matlab: ek hi lazy query par ek se zyada baar loop chalana, jaise <code>items.Count()</code> aur phir <code>foreach (var t in items)</code>. Poori query <b>do baar</b> chalti hai.</p><p>Ilaaj: use <b>ek baar</b> chalao (<code>ToList()</code>), aur asli collection aage do. Agar method ko count ya kai passes chahiye, to uska parameter <code>IReadOnlyCollection&lt;T&gt;</code> ya <code>IReadOnlyList&lt;T&gt;</code> rakho.</p>"
        },
        why: {
          en: "<p>The cost depends on the source. Over a list it is extra CPU. Over an EF Core query it is <b>two database round trips</b>. Over a method that reads a file or calls an API, the I/O happens twice. And if the data changes in between, the two runs can disagree: \"Total: 3\" followed by 4 lines.</p>",
          hi: "<p>खर्च source पर निर्भर है। List पर यह extra CPU है। EF Core query पर यह <b>दो बार database जाना</b> है। जो method file पढ़ता है या API बुलाता है, उसमें I/O दो बार होता है। और बीच में data बदल जाए तो दोनों runs अलग निकल सकते हैं: \"Total: 3\" और उसके बाद 4 lines।</p>",
          hg: "<p>Kharcha source par nirbhar hai. List par ye extra CPU hai. EF Core query par ye <b>do baar database jaana</b> hai. Jo method file padhta hai ya API bulata hai, usmein I/O do baar hota hai. Aur beech mein data badal jaaye to dono runs alag nikal sakte hain: \"Total: 3\" aur uske baad 4 lines.</p>"
        },
        analogy: {
          en: "<p>Counting wedding guests. The caterer walks through the hall to <b>count</b> the guests, then walks through it <b>again</b> to hand out sweets. Two walks for one job, and if guests keep arriving, the count (120) and the sweets served (127) may not match.</p>",
          hi: "<p>शादी में मेहमान गिनना। Caterer पहले हॉल में घूमकर मेहमान <b>गिनता</b> है, फिर मिठाई बाँटने के लिए <b>दोबारा</b> घूमता है। एक काम के लिए दो चक्कर, और मेहमान आते रहें तो गिनती (120) और बाँटी गई मिठाई (127) मेल नहीं खाएँगी।</p>",
          hg: "<p>Shaadi mein mehmaan ginna. Caterer pehle hall mein ghoomkar mehmaan <b>ginta</b> hai, phir mithai baantne ke liye <b>dobara</b> ghoomta hai. Ek kaam ke liye do chakkar, aur mehmaan aate rahein to ginti (120) aur baanti gayi mithai (127) mel nahi khayengi.</p>"
        },
        lines: [
          {
            code: "IEnumerable<SupportTicket> open = repo.GetOpenTickets();",
            note: {
              en: "A lazy query, like an EF Core query. The repository has not been called yet.",
              hi: "एक lazy query, जैसी EF Core query होती है। Repository अभी तक बुलाया नहीं गया।",
              hg: "Ek lazy query, jaisi EF Core query hoti hai. Repository abhi tak bulaya nahi gaya."
            }
          },
          {
            code: "PrintReport(open);",
            note: {
              en: "The method takes <code>IEnumerable</code> and enumerates it twice inside. So <code>repo.Calls</code> becomes 2 for one report.",
              hi: "Method <code>IEnumerable</code> लेता है और अंदर उसे दो बार enumerate करता है। इसलिए एक report के लिए <code>repo.Calls</code> 2 हो जाता है।",
              hg: "Method <code>IEnumerable</code> leta hai aur andar use do baar enumerate karta hai. Isliye ek report ke liye <code>repo.Calls</code> 2 ho jaata hai."
            }
          },
          {
            code: "Console.WriteLine($\"Open tickets: {items.Count()}\");",
            note: {
              en: "Run 1: <code>Count()</code> walks the whole query just to count.",
              hi: "Run 1: सिर्फ़ गिनने के लिए <code>Count()</code> पूरी query चलाता है।",
              hg: "Run 1: sirf ginne ke liye <code>Count()</code> poori query chalata hai."
            }
          },
          {
            code: "List<SupportTicket> openList = repo.GetOpenTickets().ToList();",
            note: {
              en: "The fix: call the repository <b>once</b> and keep the results in a list.",
              hi: "इलाज: repository को <b>एक बार</b> बुलाओ और नतीजे list में रख लो।",
              hg: "Ilaaj: repository ko <b>ek baar</b> bulao aur nateeje list mein rakh lo."
            }
          },
          {
            code: "static void PrintReportFixed(IReadOnlyCollection<SupportTicket> items)",
            note: {
              en: "This parameter type says \"I need a real collection\". Now <code>items.Count</code> is a property, not a run, and a caller cannot pass a lazy query by mistake.",
              hi: "यह parameter type कहता है \"मुझे असली collection चाहिए\"। अब <code>items.Count</code> एक property है, run नहीं, और caller ग़लती से lazy query नहीं दे सकता।",
              hg: "Ye parameter type kehta hai \"mujhe asli collection chahiye\". Ab <code>items.Count</code> ek property hai, run nahi, aur caller galti se lazy query nahi de sakta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>A method takes <code>IEnumerable&lt;T&gt;</code>, calls <code>Count()</code> or <code>Any()</code>, then loops. The caller's lazy query runs twice.</li><li><code>for (int i = 0; i &lt; query.Count(); i++)</code> runs the whole query on <b>every</b> iteration. <code>query.ElementAt(i)</code> inside a loop restarts from the start each time.</li><li>Calling <code>ToList()</code> \"just in case\" inside every method. Materialise once at the boundary instead.</li></ul>",
          hi: "<ul><li>Method <code>IEnumerable&lt;T&gt;</code> लेता है, <code>Count()</code> या <code>Any()</code> बुलाता है, फिर loop चलाता है। Caller की lazy query दो बार चलती है।</li><li><code>for (int i = 0; i &lt; query.Count(); i++)</code> <b>हर</b> iteration पर पूरी query चलाता है। Loop में <code>query.ElementAt(i)</code> हर बार शुरू से चलता है।</li><li>हर method में \"कहीं ज़रूरत पड़ जाए\" सोचकर <code>ToList()</code> लगाना। इसकी जगह boundary पर एक बार materialise करो।</li></ul>",
          hg: "<ul><li>Method <code>IEnumerable&lt;T&gt;</code> leta hai, <code>Count()</code> ya <code>Any()</code> bulata hai, phir loop chalata hai. Caller ki lazy query do baar chalti hai.</li><li><code>for (int i = 0; i &lt; query.Count(); i++)</code> <b>har</b> iteration par poori query chalata hai. Loop mein <code>query.ElementAt(i)</code> har baar shuru se chalta hai.</li><li>Har method mein \"kahin zaroorat pad jaaye\" sochkar <code>ToList()</code> lagana. Iski jagah boundary par ek baar materialise karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Take <code>IEnumerable&lt;T&gt;</code> when the method makes a <b>single pass</b> (stream, filter, write out): it then accepts lists, arrays and lazy queries. Take <code>IReadOnlyCollection&lt;T&gt;</code> or <code>IReadOnlyList&lt;T&gt;</code> when you need a count, indexing or more than one pass. To catch this in code review, turn on analyzer <b>CA1851</b> in <code>.editorconfig</code>; it is not enabled by default. Rider and ReSharper show a \"possible multiple enumeration\" warning.</p>",
          hi: "<p>जब method <b>एक ही pass</b> लेता है (stream, filter, बाहर लिखना) तब <code>IEnumerable&lt;T&gt;</code> लो: तब वह lists, arrays और lazy queries सब ले लेता है। जब count, indexing या एक से ज़्यादा pass चाहिए, तब <code>IReadOnlyCollection&lt;T&gt;</code> या <code>IReadOnlyList&lt;T&gt;</code> लो। Code review में इसे पकड़ने के लिए <code>.editorconfig</code> में analyzer <b>CA1851</b> चालू करो; यह default से चालू नहीं होता। Rider और ReSharper \"possible multiple enumeration\" warning दिखाते हैं।</p>",
          hg: "<p>Jab method <b>ek hi pass</b> leta hai (stream, filter, bahar likhna) tab <code>IEnumerable&lt;T&gt;</code> lo: tab woh lists, arrays aur lazy queries sab le leta hai. Jab count, indexing ya ek se zyada pass chahiye, tab <code>IReadOnlyCollection&lt;T&gt;</code> ya <code>IReadOnlyList&lt;T&gt;</code> lo. Code review mein ise pakadne ke liye <code>.editorconfig</code> mein analyzer <b>CA1851</b> chalu karo; ye default se chalu nahi hota. Rider aur ReSharper \"possible multiple enumeration\" warning dikhate hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>PrintTop</code> that takes an <code>IReadOnlyList&lt;SupportTicket&gt;</code> and prints <code>3 open, first is #501</code>, using <code>Count</code> and the indexer <code>items[0]</code>. Call it with the open tickets run <b>once</b> with <code>ToList()</code>.</p>",
            hi: "<p><code>PrintTop</code> लिखो जो <code>IReadOnlyList&lt;SupportTicket&gt;</code> लेता है और <code>Count</code> व indexer <code>items[0]</code> से <code>3 open, first is #501</code> print करता है। उसे open tickets के साथ बुलाओ, जिन्हें <code>ToList()</code> से <b>एक बार</b> चलाया गया हो।</p>",
            hg: "<p><code>PrintTop</code> likho jo <code>IReadOnlyList&lt;SupportTicket&gt;</code> leta hai aur <code>Count</code> va indexer <code>items[0]</code> se <code>3 open, first is #501</code> print karta hai. Use open tickets ke saath bulao, jinhe <code>ToList()</code> se <b>ek baar</b> chalaya gaya ho.</p>"
          },
          hint: {
            en: "<p><code>IReadOnlyList&lt;T&gt;</code> has <code>Count</code> and an indexer. A <code>List&lt;T&gt;</code> can be passed to it directly.</p>",
            hi: "<p><code>IReadOnlyList&lt;T&gt;</code> में <code>Count</code> और indexer होता है। <code>List&lt;T&gt;</code> सीधे दी जा सकती है।</p>",
            hg: "<p><code>IReadOnlyList&lt;T&gt;</code> mein <code>Count</code> aur indexer hota hai. <code>List&lt;T&gt;</code> seedhe di ja sakti hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: ask for the type you need",
              hi: "हल: जो type चाहिए वही माँगो",
              hg: "Solution: jo type chahiye wahi maango"
            },
            src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3)\n};\n\nList<SupportTicket> open = tickets.Where(t => t.Status == \"Open\").ToList();\nPrintTop(open);\n\nstatic void PrintTop(IReadOnlyList<SupportTicket> items)\n{\n    Console.WriteLine($\"{items.Count} open, first is #{items[0].Id}\");\n}\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
            check: "run",
            expected: "3 open, first is #501"
          }
        },
        quiz: {
          q: {
            en: "A method takes <code>IEnumerable&lt;SupportTicket&gt; items</code> and does <code>if (items.Any()) { foreach (var t in items) ... }</code>. The caller passes an EF Core query. How many database round trips?",
            hi: "एक method <code>IEnumerable&lt;SupportTicket&gt; items</code> लेता है और <code>if (items.Any()) { foreach (var t in items) ... }</code> करता है। Caller EF Core query देता है। Database के कितने round trips होंगे?",
            hg: "Ek method <code>IEnumerable&lt;SupportTicket&gt; items</code> leta hai aur <code>if (items.Any()) { foreach (var t in items) ... }</code> karta hai. Caller EF Core query deta hai. Database ke kitne round trips honge?"
          },
          options: [
            {
              en: "Two: <code>Any()</code> runs the query and <code>foreach</code> runs it again",
              hi: "दो: <code>Any()</code> query चलाता है और <code>foreach</code> उसे फिर चलाता है",
              hg: "Do: <code>Any()</code> query chalata hai aur <code>foreach</code> use phir chalata hai"
            },
            {
              en: "One, because EF Core caches the result",
              hi: "एक, क्योंकि EF Core नतीजा cache कर लेता है",
              hg: "Ek, kyunki EF Core nateeja cache kar leta hai"
            },
            {
              en: "Zero until the method returns",
              hi: "Method लौटने तक शून्य",
              hg: "Method lautne tak shoonya"
            },
            {
              en: "One per row",
              hi: "हर row पर एक",
              hg: "Har row par ek"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>An EF Core query is deferred and does not cache results. <code>Any()</code> runs it, then <code>foreach</code> runs it again. Ask for <code>IReadOnlyCollection&lt;T&gt;</code> or run <code>ToList()</code> once before the call.</p>",
            hi: "<p>EF Core query deferred होती है और नतीजा cache नहीं करती। <code>Any()</code> उसे चलाता है, फिर <code>foreach</code> दोबारा चलाता है। <code>IReadOnlyCollection&lt;T&gt;</code> माँगो या call से पहले एक बार <code>ToList()</code> चलाओ।</p>",
            hg: "<p>EF Core query deferred hoti hai aur nateeja cache nahi karti. <code>Any()</code> use chalata hai, phir <code>foreach</code> dobara chalata hai. <code>IReadOnlyCollection&lt;T&gt;</code> maango ya call se pehle ek baar <code>ToList()</code> chalao.</p>"
          }
        },
        recap: {
          en: "<ul><li>Every <code>Count()</code>, <code>Any()</code> or <code>foreach</code> on a lazy query runs the whole query again.</li><li>Fix: <code>ToList()</code> once, then reuse the list.</li><li>Need a count or several passes? Take <code>IReadOnlyCollection&lt;T&gt;</code> or <code>IReadOnlyList&lt;T&gt;</code>.</li></ul>",
          hi: "<ul><li>Lazy query पर हर <code>Count()</code>, <code>Any()</code> या <code>foreach</code> पूरी query फिर चलाता है।</li><li>इलाज: एक बार <code>ToList()</code>, फिर वही list दोबारा इस्तेमाल करो।</li><li>Count या कई passes चाहिए? <code>IReadOnlyCollection&lt;T&gt;</code> या <code>IReadOnlyList&lt;T&gt;</code> लो।</li></ul>",
          hg: "<ul><li>Lazy query par har <code>Count()</code>, <code>Any()</code> ya <code>foreach</code> poori query phir chalata hai.</li><li>Ilaaj: ek baar <code>ToList()</code>, phir wahi list dobara use karo.</li><li>Count ya kai passes chahiye? <code>IReadOnlyCollection&lt;T&gt;</code> ya <code>IReadOnlyList&lt;T&gt;</code> lo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A repository that counts its calls: IEnumerable parameter = 2 calls, materialise once = 1 call",
            hi: "Repository जो अपनी calls गिनता है: IEnumerable parameter = 2 calls, एक बार materialise = 1 call",
            hg: "Repository jo apni calls ginta hai: IEnumerable parameter = 2 calls, ek baar materialise = 1 call"
          },
          src: "var repo = new TicketRepo();\n\n// Lazy, like an EF Core query: nothing has run yet\nIEnumerable<SupportTicket> open = repo.GetOpenTickets();\n\n// Bad on purpose: the method enumerates twice -> two \"database calls\"\nPrintReport(open);\nConsole.WriteLine($\"Repo calls so far: {repo.Calls}\");\n\n// Good: run the query once, pass a real collection\nList<SupportTicket> openList = repo.GetOpenTickets().ToList();\nPrintReportFixed(openList);\nConsole.WriteLine($\"Repo calls so far: {repo.Calls}\");\n\nstatic void PrintReport(IEnumerable<SupportTicket> items)\n{\n    Console.WriteLine($\"Open tickets: {items.Count()}\");                    // run 1\n    foreach (var t in items) Console.WriteLine($\" - #{t.Id} {t.Issue}\");   // run 2\n}\n\nstatic void PrintReportFixed(IReadOnlyCollection<SupportTicket> items)\n{\n    Console.WriteLine($\"Open tickets: {items.Count}\");                      // a property: no run\n    foreach (var t in items) Console.WriteLine($\" - #{t.Id} {t.Issue}\");\n}\n\nclass TicketRepo\n{\n    private readonly List<SupportTicket> _all =\n    [\n        new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n        new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n        new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n        new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3)\n    ];\n\n    public int Calls { get; private set; }\n\n    // An iterator method: its body runs again for EVERY enumeration\n    public IEnumerable<SupportTicket> GetOpenTickets()\n    {\n        Calls++;                       // imagine: open a connection, run SELECT\n        foreach (var t in _all)\n            if (t.Status == \"Open\") yield return t;\n    }\n}\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
          check: "run",
          expected: "Open tickets: 3\n - #501 Router not working\n - #503 SIM not active\n - #504 Slow internet\nRepo calls so far: 2\nOpen tickets: 3\n - #501 Router not working\n - #503 SIM not active\n - #504 Slow internet\nRepo calls so far: 3"
        }
      ]
    },
    {
      id: "iqueryable-vs-ienumerable",
      depth: "short",
      title: {
        en: "IEnumerable vs IQueryable",
        hi: "IEnumerable बनाम IQueryable",
        hg: "IEnumerable vs IQueryable"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 2 and 3 were about <b>when</b> a query runs. This lesson is about <b>where</b> it runs: in your application's memory, or inside the database.",
          hi: "पाठ 2 और 3 इस बारे में थे कि query <b>कब</b> चलती है। यह पाठ इस बारे में है कि वह <b>कहाँ</b> चलती है: आपकी application की memory में, या database के अंदर।",
          hg: "Lesson 2 aur 3 is baare mein the ki query <b>kab</b> chalti hai. Ye lesson is baare mein hai ki woh <b>kahan</b> chalti hai: aapki application ki memory mein, ya database ke andar."
        },
        what: {
          en: "<p><code>IEnumerable&lt;T&gt;</code> LINQ methods take a <code>Func&lt;T,bool&gt;</code>: compiled code that runs <b>in your process</b> on objects in memory.</p><p><code>IQueryable&lt;T&gt;</code> methods take an <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code>: the same lambda kept as <b>data</b> (an expression tree). A provider such as EF Core can read that tree and translate it to SQL.</p><p>Which one you get is decided by the <b>compile-time type</b> of the variable.</p>",
          hi: "<p><code>IEnumerable&lt;T&gt;</code> के LINQ methods <code>Func&lt;T,bool&gt;</code> लेते हैं: compiled code जो memory के objects पर <b>आपके process में</b> चलता है।</p><p><code>IQueryable&lt;T&gt;</code> के methods <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> लेते हैं: वही lambda <b>data</b> के रूप में (expression tree)। EF Core जैसा provider इस tree को पढ़कर SQL में बदल सकता है।</p><p>कौन-सा मिलेगा, यह variable के <b>compile-time type</b> से तय होता है।</p>",
          hg: "<p><code>IEnumerable&lt;T&gt;</code> ke LINQ methods <code>Func&lt;T,bool&gt;</code> lete hain: compiled code jo memory ke objects par <b>aapke process mein</b> chalta hai.</p><p><code>IQueryable&lt;T&gt;</code> ke methods <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> lete hain: wahi lambda <b>data</b> ke roop mein (expression tree). EF Core jaisa provider is tree ko padhkar SQL mein badal sakta hai.</p><p>Kaunsa milega, ye variable ke <b>compile-time type</b> se tay hota hai.</p>"
        },
        why: {
          en: "<p>A <code>Tickets</code> table can hold lakhs of rows. If the filter runs in memory, every row travels from the database to your app first. If the filter is translated to SQL <code>WHERE</code>, only the matching rows travel. Same C# line, very different cost.</p>",
          hi: "<p><code>Tickets</code> table में लाखों rows हो सकती हैं। Filter memory में चले तो हर row पहले database से आपकी app तक आती है। Filter SQL <code>WHERE</code> में बदल जाए तो सिर्फ़ matching rows आती हैं। C# की line वही, ख़र्च बहुत अलग।</p>",
          hg: "<p><code>Tickets</code> table mein lakhon rows ho sakti hain. Filter memory mein chale to har row pehle database se aapki app tak aati hai. Filter SQL <code>WHERE</code> mein badal jaaye to sirf matching rows aati hain. C# ki line wahi, kharcha bahut alag.</p>"
        },
        analogy: {
          en: "<p>The godown and the phone order. You need 5 bags of basmati. Option 1: bring the <b>whole godown</b> home and pick 5 bags in your courtyard. Option 2: <b>phone the shopkeeper</b> and say \"5 bags of basmati\"; he sends only those. <code>IEnumerable</code> on database data is option 1. <code>IQueryable</code> is option 2: your order slip is read and handled by the other side.</p>",
          hi: "<p>गोदाम और फ़ोन का order। आपको basmati के 5 बोरे चाहिए। तरीक़ा 1: <b>पूरा गोदाम</b> घर ले आओ और आँगन में 5 बोरे छाँटो। तरीक़ा 2: <b>दुकानदार को फ़ोन</b> करके कहो \"basmati के 5 बोरे\"; वह सिर्फ़ वही भेजता है। Database के data पर <code>IEnumerable</code> तरीक़ा 1 है। <code>IQueryable</code> तरीक़ा 2 है: आपकी order की पर्ची दूसरी तरफ़ पढ़ी जाती है और वहीं निपटाई जाती है।</p>",
          hg: "<p>Godown aur phone ka order. Aapko basmati ke 5 bore chahiye. Tareeka 1: <b>poora godown</b> ghar le aao aur aangan mein 5 bore chhaanto. Tareeka 2: <b>dukaandaar ko phone</b> karke kaho \"basmati ke 5 bore\"; woh sirf wahi bhejta hai. Database ke data par <code>IEnumerable</code> tareeka 1 hai. <code>IQueryable</code> tareeka 2 hai: aapki order ki parchi doosri taraf padhi jaati hai aur wahin niptaayi jaati hai.</p>"
        },
        lines: [
          {
            code: "Func<SupportTicket, bool> asCode = t => t.Priority == 1;",
            note: {
              en: "A <code>Func</code> is compiled code. You can call it, but nobody can look inside it.",
              hi: "<code>Func</code> compiled code है। उसे बुला सकते हो, पर उसके अंदर कोई झाँक नहीं सकता।",
              hg: "<code>Func</code> compiled code hai. Use bula sakte ho, par uske andar koi jhaank nahi sakta."
            }
          },
          {
            code: "Expression<Func<SupportTicket, bool>> asData = t => t.Priority == 1;",
            note: {
              en: "The <b>same lambda</b>, but the target type <code>Expression&lt;...&gt;</code> makes the compiler build a tree of objects that describes it.",
              hi: "<b>वही lambda</b>, पर target type <code>Expression&lt;...&gt;</code> होने से compiler उसे बताने वाले objects का tree बनाता है।",
              hg: "<b>Wahi lambda</b>, par target type <code>Expression&lt;...&gt;</code> hone se compiler use batane wale objects ka tree banata hai."
            }
          },
          {
            code: "var body = (BinaryExpression)asData.Body;",
            note: {
              en: "The tree can be inspected. The body is a comparison: left side <code>t.Priority</code>, node type <code>Equal</code>, right side <code>1</code>. EF Core reads exactly this to write <code>WHERE Priority = 1</code>.",
              hi: "Tree की जाँच की जा सकती है। Body एक तुलना है: बाएँ <code>t.Priority</code>, node type <code>Equal</code>, दाएँ <code>1</code>। EF Core ठीक यही पढ़कर <code>WHERE Priority = 1</code> लिखता है।",
              hg: "Tree ki jaanch ki ja sakti hai. Body ek tulna hai: baayein <code>t.Priority</code>, node type <code>Equal</code>, daayein <code>1</code>. EF Core theek yahi padhkar <code>WHERE Priority = 1</code> likhta hai."
            }
          },
          {
            code: "IQueryable<SupportTicket> query = tickets.AsQueryable().Where(t => t.Status == \"Open\");",
            note: {
              en: "<code>AsQueryable()</code> lets us try <code>IQueryable</code> without a database. <code>Where</code> only <b>adds a node</b> to the tree (printed next: <code>Queryable.Where</code> with the filter as data); nothing runs yet.",
              hi: "<code>AsQueryable()</code> से database के बिना <code>IQueryable</code> आज़मा सकते हैं। <code>Where</code> tree में सिर्फ़ <b>एक node जोड़ता</b> है (अगली line यही print करती है: <code>Queryable.Where</code> और filter, data के रूप में); अभी कुछ नहीं चलता।",
              hg: "<code>AsQueryable()</code> se database ke bina <code>IQueryable</code> aazma sakte hain. <code>Where</code> tree mein sirf <b>ek node jodta</b> hai (agli line yahi print karti hai: <code>Queryable.Where</code> aur filter, data ke roop mein); abhi kuch nahi chalta."
            }
          },
          {
            code: "var viaFunc = query.Where(asCode);",
            note: {
              en: "A <code>Func</code> variable cannot become a tree, so C# picks <code>Enumerable.Where</code>. From here on the filter runs <b>in memory</b>. With EF Core, this is the line that pulls all rows.",
              hi: "<code>Func</code> variable tree नहीं बन सकता, इसलिए C# <code>Enumerable.Where</code> चुनता है। यहाँ से filter <b>memory में</b> चलता है। EF Core में यही वह line है जो सारी rows खींच लाती है।",
              hg: "<code>Func</code> variable tree nahi ban sakta, isliye C# <code>Enumerable.Where</code> chunta hai. Yahan se filter <b>memory mein</b> chalta hai. EF Core mein yahi woh line hai jo saari rows kheench laati hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>A repository method <code>Find(Func&lt;Ticket,bool&gt; filter)</code> that does <code>db.Tickets.Where(filter)</code> compiles fine, but EF Core loads <b>all rows</b> and filters in memory. Take <code>Expression&lt;Func&lt;Ticket,bool&gt;&gt;</code>.</li><li>Calling <code>ToList()</code> or <code>AsEnumerable()</code> <b>before</b> <code>Where</code> on a big table. Every operator after that runs in memory.</li><li>Writing a statement lambda <code>{ ... }</code> where an <code>Expression</code> is needed: compiler error CS0834. Only expression lambdas can become trees.</li></ul>",
          hi: "<ul><li>Repository का method <code>Find(Func&lt;Ticket,bool&gt; filter)</code> जो <code>db.Tickets.Where(filter)</code> करता है, compile हो जाता है, पर EF Core <b>सारी rows</b> लाकर memory में filter करता है। <code>Expression&lt;Func&lt;Ticket,bool&gt;&gt;</code> लो।</li><li>बड़ी table पर <code>Where</code> <b>से पहले</b> <code>ToList()</code> या <code>AsEnumerable()</code> लगाना। उसके बाद का हर operator memory में चलता है।</li><li>जहाँ <code>Expression</code> चाहिए वहाँ statement lambda <code>{ ... }</code> लिखना: compiler error CS0834। सिर्फ़ expression lambda tree बन सकते हैं।</li></ul>",
          hg: "<ul><li>Repository ka method <code>Find(Func&lt;Ticket,bool&gt; filter)</code> jo <code>db.Tickets.Where(filter)</code> karta hai, compile ho jaata hai, par EF Core <b>saari rows</b> laakar memory mein filter karta hai. <code>Expression&lt;Func&lt;Ticket,bool&gt;&gt;</code> lo.</li><li>Badi table par <code>Where</code> <b>se pehle</b> <code>ToList()</code> ya <code>AsEnumerable()</code> lagana. Uske baad ka har operator memory mein chalta hai.</li><li>Jahan <code>Expression</code> chahiye wahan statement lambda <code>{ ... }</code> likhna: compiler error CS0834. Sirf expression lambda tree ban sakte hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>Keep the query as <code>IQueryable</code> while you add filters, sorting and paging, so the database does that work. Switch to memory (<code>AsEnumerable()</code> or <code>ToList()</code>) only for logic that SQL cannot do. Use <code>Expression&lt;Func&lt;...&gt;&gt;</code> parameters for filters that must run in the database. For in-memory-only code a plain <code>Func</code> is simpler. Day 5 and 6 show the SQL that EF Core generates.</p>",
          hi: "<p>Filters, sorting और paging जोड़ते समय query को <code>IQueryable</code> रखो, ताकि यह काम database करे। सिर्फ़ उस logic के लिए memory में आओ (<code>AsEnumerable()</code> या <code>ToList()</code>) जो SQL नहीं कर सकता। जो filters database में चलने चाहिए, उनके लिए <code>Expression&lt;Func&lt;...&gt;&gt;</code> parameters रखो। सिर्फ़ in-memory code के लिए सादा <code>Func</code> आसान है। EF Core कौन-सा SQL बनाता है, यह Day 5 और 6 में देखेंगे।</p>",
          hg: "<p>Filters, sorting aur paging jodte samay query ko <code>IQueryable</code> rakho, taaki ye kaam database kare. Sirf us logic ke liye memory mein aao (<code>AsEnumerable()</code> ya <code>ToList()</code>) jo SQL nahi kar sakta. Jo filters database mein chalne chahiye, unke liye <code>Expression&lt;Func&lt;...&gt;&gt;</code> parameters rakho. Sirf in-memory code ke liye saada <code>Func</code> aasaan hai. EF Core kaunsa SQL banata hai, ye Day 5 aur 6 mein dekhenge.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>Find(IQueryable&lt;SupportTicket&gt; source, Expression&lt;Func&lt;SupportTicket, bool&gt;&gt; filter)</code> that returns <code>source.Where(filter)</code> as an <code>IQueryable</code>. Call it for priority 1 and print <code>2 tickets, IQueryable: True</code>.</p>",
            hi: "<p><code>Find(IQueryable&lt;SupportTicket&gt; source, Expression&lt;Func&lt;SupportTicket, bool&gt;&gt; filter)</code> लिखो जो <code>source.Where(filter)</code> को <code>IQueryable</code> के रूप में लौटाए। Priority 1 के लिए बुलाओ और <code>2 tickets, IQueryable: True</code> print करो।</p>",
            hg: "<p><code>Find(IQueryable&lt;SupportTicket&gt; source, Expression&lt;Func&lt;SupportTicket, bool&gt;&gt; filter)</code> likho jo <code>source.Where(filter)</code> ko <code>IQueryable</code> ke roop mein lautaye. Priority 1 ke liye bulao aur <code>2 tickets, IQueryable: True</code> print karo.</p>"
          },
          hint: {
            en: "<p>Remember <code>using System.Linq.Expressions;</code> at the top. Store the result in a variable so you can both count it and test <code>is IQueryable&lt;SupportTicket&gt;</code>.</p>",
            hi: "<p>ऊपर <code>using System.Linq.Expressions;</code> याद रखो। नतीजा variable में रखो ताकि गिन भी सको और <code>is IQueryable&lt;SupportTicket&gt;</code> भी जाँच सको।</p>",
            hg: "<p>Upar <code>using System.Linq.Expressions;</code> yaad rakho. Nateeja variable mein rakho taaki gin bhi sako aur <code>is IQueryable&lt;SupportTicket&gt;</code> bhi jaanch sako.</p>"
          },
          solution: {
            caption: {
              en: "Solution: an Expression parameter keeps it IQueryable",
              hi: "हल: Expression parameter इसे IQueryable रखता है",
              hg: "Solution: Expression parameter ise IQueryable rakhta hai"
            },
            src: "using System.Linq.Expressions;\n\nvar tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3)\n};\n\nvar urgent = Find(tickets.AsQueryable(), t => t.Priority == 1);\nConsole.WriteLine($\"{urgent.Count()} tickets, IQueryable: {urgent is IQueryable<SupportTicket>}\");\n\nstatic IQueryable<SupportTicket> Find(IQueryable<SupportTicket> source, Expression<Func<SupportTicket, bool>> filter)\n    => source.Where(filter);\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
            check: "run",
            expected: "2 tickets, IQueryable: True"
          }
        },
        quiz: {
          q: {
            en: "Which repository signature lets EF Core translate the filter to SQL?",
            hi: "कौन-सा repository signature EF Core को filter SQL में बदलने देता है?",
            hg: "Kaunsa repository signature EF Core ko filter SQL mein badalne deta hai?"
          },
          options: [
            {
              en: "Taking <code>IEnumerable&lt;Ticket&gt;</code> and calling <code>ToList()</code> first",
              hi: "<code>IEnumerable&lt;Ticket&gt;</code> लेकर पहले <code>ToList()</code> बुलाना",
              hg: "<code>IEnumerable&lt;Ticket&gt;</code> lekar pehle <code>ToList()</code> bulana"
            },
            {
              en: "The one that takes <code>Func&lt;Ticket, bool&gt; filter</code>",
              hi: "वह जो <code>Func&lt;Ticket, bool&gt; filter</code> लेता है",
              hg: "Woh jo <code>Func&lt;Ticket, bool&gt; filter</code> leta hai"
            },
            {
              en: "The one that takes <code>Predicate&lt;Ticket&gt; filter</code>",
              hi: "वह जो <code>Predicate&lt;Ticket&gt; filter</code> लेता है",
              hg: "Woh jo <code>Predicate&lt;Ticket&gt; filter</code> leta hai"
            },
            {
              en: "The one that takes <code>Expression&lt;Func&lt;Ticket, bool&gt;&gt; filter</code>",
              hi: "वह जो <code>Expression&lt;Func&lt;Ticket, bool&gt;&gt; filter</code> लेता है",
              hg: "Woh jo <code>Expression&lt;Func&lt;Ticket, bool&gt;&gt; filter</code> leta hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Only <code>Expression&lt;Func&lt;...&gt;&gt;</code> keeps the lambda as a tree that EF Core can read. <code>Func</code> and <code>Predicate</code> are compiled code, so the filter runs in memory after all rows are loaded.</p>",
            hi: "<p>सिर्फ़ <code>Expression&lt;Func&lt;...&gt;&gt;</code> lambda को ऐसे tree के रूप में रखता है जिसे EF Core पढ़ सके। <code>Func</code> और <code>Predicate</code> compiled code हैं, इसलिए सारी rows load होने के बाद filter memory में चलता है।</p>",
            hg: "<p>Sirf <code>Expression&lt;Func&lt;...&gt;&gt;</code> lambda ko aise tree ke roop mein rakhta hai jise EF Core padh sake. <code>Func</code> aur <code>Predicate</code> compiled code hain, isliye saari rows load hone ke baad filter memory mein chalta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>IEnumerable</code> methods take <code>Func</code> and run in memory; <code>IQueryable</code> methods take <code>Expression</code> and a provider translates them (to SQL).</li><li>The variable's compile-time type picks which <code>Where</code> you get.</li><li><code>ToList()</code>/<code>AsEnumerable()</code> before the filter moves the work into memory.</li></ul>",
          hi: "<ul><li><code>IEnumerable</code> methods <code>Func</code> लेते हैं और memory में चलते हैं; <code>IQueryable</code> methods <code>Expression</code> लेते हैं और provider उन्हें (SQL में) बदलता है।</li><li>Variable का compile-time type तय करता है कि कौन-सा <code>Where</code> मिलेगा।</li><li>Filter से पहले <code>ToList()</code>/<code>AsEnumerable()</code> लगाने से काम memory में चला जाता है।</li></ul>",
          hg: "<ul><li><code>IEnumerable</code> methods <code>Func</code> lete hain aur memory mein chalte hain; <code>IQueryable</code> methods <code>Expression</code> lete hain aur provider unhe (SQL mein) badalta hai.</li><li>Variable ka compile-time type tay karta hai ki kaunsa <code>Where</code> milega.</li><li>Filter se pehle <code>ToList()</code>/<code>AsEnumerable()</code> lagane se kaam memory mein chala jaata hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "The same lambda as code and as data; the variable type decides if we stay in IQueryable",
            hi: "वही lambda code के रूप में और data के रूप में; variable का type तय करता है कि हम IQueryable में रहेंगे या नहीं",
            hg: "Wahi lambda code ke roop mein aur data ke roop mein; variable ka type tay karta hai ki hum IQueryable mein rahenge ya nahi"
          },
          src: "using System.Linq.Expressions;\n\nvar tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3)\n};\n\n// The same lambda: compiled code vs a tree of objects that describes the code\nFunc<SupportTicket, bool> asCode = t => t.Priority == 1;\nExpression<Func<SupportTicket, bool>> asData = t => t.Priority == 1;\nConsole.WriteLine($\"Expression: {asData}\");\nvar body = (BinaryExpression)asData.Body;\nConsole.WriteLine($\"Node: {body.NodeType}, left: {body.Left}, right: {body.Right}\");\n\n// IQueryable: each operator adds a node to the tree (EF Core would turn it into SQL)\nIQueryable<SupportTicket> query = tickets.AsQueryable().Where(t => t.Status == \"Open\");\nvar call = (MethodCallExpression)query.Expression;   // the last node: the Where call\nConsole.WriteLine($\"Query tree: {call.Method.DeclaringType!.Name}.{call.Method.Name}, filter as data: {call.Arguments[1]}\");\n\n// Same IQueryable source: the filter's TYPE picks the method\nvar stillQuery = query.Where(t => t.Priority == 1);   // a lambda can become a tree: Queryable.Where\nvar viaFunc = query.Where(asCode);                    // a Func variable cannot: Enumerable.Where, in memory\nConsole.WriteLine($\"stillQuery is IQueryable: {stillQuery is IQueryable<SupportTicket>}\");\nConsole.WriteLine($\"viaFunc is IQueryable: {viaFunc is IQueryable<SupportTicket>}\");\n\n// Same results here; the difference is WHERE the filter would run against a real database\nConsole.WriteLine($\"Results: {string.Join(\", \", stillQuery.Select(t => t.Id))} | {string.Join(\", \", viaFunc.Select(t => t.Id))}\");\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
          check: "run",
          expected: "Expression: t => (t.Priority == 1)\nNode: Equal, left: t.Priority, right: 1\nQuery tree: Queryable.Where, filter as data: t => (t.Status == \"Open\")\nstillQuery is IQueryable: True\nviaFunc is IQueryable: False\nResults: 501, 503 | 501, 503"
        }
      ]
    },
    {
      id: "ordering-paging",
      depth: "short",
      title: {
        en: "Ordering and paging",
        hi: "Ordering और paging",
        hg: "Ordering aur paging"
      },
      lesson: {
        buildsOn: {
          en: "So far we filtered and reshaped tickets. A support agent also needs them <b>in the right order</b> (urgent first) and <b>a few at a time</b> (one page on the screen).",
          hi: "अब तक हमने tickets filter किए और उनका रूप बदला। Support agent को वे <b>सही क्रम में</b> (urgent पहले) और <b>थोड़े-थोड़े करके</b> (screen पर एक page) भी चाहिए।",
          hg: "Ab tak humne tickets filter kiye aur unka roop badla. Support agent ko woh <b>sahi kram mein</b> (urgent pehle) aur <b>thode-thode karke</b> (screen par ek page) bhi chahiye."
        },
        what: {
          en: "<p><code>OrderBy</code> sets the <b>main</b> sort key. <code>ThenBy</code> adds a <b>tie-breaker</b> for items with equal keys. <code>OrderByDescending</code> and <code>ThenByDescending</code> sort the other way.</p><p><b>Paging</b> shows one slice: <code>Skip((page - 1) * pageSize).Take(pageSize)</code>. Skip the earlier pages, take one page.</p>",
          hi: "<p><code>OrderBy</code> <b>मुख्य</b> sort key तय करता है। <code>ThenBy</code> उन items के लिए <b>tie-breaker</b> जोड़ता है जिनकी key बराबर है। <code>OrderByDescending</code> और <code>ThenByDescending</code> उल्टे क्रम में sort करते हैं।</p><p><b>Paging</b> एक टुकड़ा दिखाती है: <code>Skip((page - 1) * pageSize).Take(pageSize)</code>। पिछले pages छोड़ो, एक page लो।</p>",
          hg: "<p><code>OrderBy</code> <b>mukhya</b> sort key tay karta hai. <code>ThenBy</code> un items ke liye <b>tie-breaker</b> jodta hai jinki key barabar hai. <code>OrderByDescending</code> aur <code>ThenByDescending</code> ulte kram mein sort karte hain.</p><p><b>Paging</b> ek tukda dikhati hai: <code>Skip((page - 1) * pageSize).Take(pageSize)</code>. Pichle pages chhodo, ek page lo.</p>"
        },
        why: {
          en: "<p>A queue where a router outage waits behind a plan change is bad service. And a grid that loads 50,000 tickets at once is slow. Sorting gives the right order; paging keeps each screen small and fast.</p>",
          hi: "<p>जिस queue में router बंद होने की शिकायत plan बदलने के पीछे खड़ी हो, वह बुरी service है। और जो grid एक साथ 50,000 tickets लाए वह धीमी है। Sorting सही क्रम देती है; paging हर screen को छोटा और तेज़ रखती है।</p>",
          hg: "<p>Jis queue mein router band hone ki shikayat plan badalne ke peeche khadi ho, woh buri service hai. Aur jo grid ek saath 50,000 tickets laaye woh dheemi hai. Sorting sahi kram deti hai; paging har screen ko chhota aur tez rakhti hai.</p>"
        },
        analogy: {
          en: "<p>A hospital OPD queue. Serious cases go first (<code>OrderBy</code> severity). Among equally serious patients, the earlier token goes first (<code>ThenBy</code> token). The doctor then sees 3 patients per slot: that is paging, and it only works if the queue does not reshuffle between slots.</p>",
          hi: "<p>अस्पताल की OPD queue। गंभीर मरीज़ पहले (<code>OrderBy</code> गंभीरता)। बराबर गंभीर मरीज़ों में पहले token वाला पहले (<code>ThenBy</code> token)। फिर डॉक्टर हर slot में 3 मरीज़ देखता है: यही paging है, और यह तभी चलती है जब slots के बीच queue दोबारा न बदले।</p>",
          hg: "<p>Aspataal ki OPD queue. Gambhir mareez pehle (<code>OrderBy</code> gambhirta). Barabar gambhir mareezon mein pehle token wala pehle (<code>ThenBy</code> token). Phir doctor har slot mein 3 mareez dekhta hai: yahi paging hai, aur ye tabhi chalti hai jab slots ke beech queue dobara na badle.</p>"
        },
        lines: [
          {
            code: "var queue = tickets.OrderBy(t => t.Priority).ThenBy(t => t.Id).ToList();",
            note: {
              en: "Priority 1 first. Inside the same priority, the lower <code>Id</code> goes first. <code>ToList()</code> runs the sort once; we reuse <code>queue</code> below instead of sorting again.",
              hi: "Priority 1 पहले। एक ही priority में छोटा <code>Id</code> पहले। <code>ToList()</code> sort को एक बार चलाता है; नीचे हम दोबारा sort करने की जगह <code>queue</code> ही इस्तेमाल करते हैं।",
              hg: "Priority 1 pehle. Ek hi priority mein chhota <code>Id</code> pehle. <code>ToList()</code> sort ko ek baar chalata hai; neeche hum dobara sort karne ki jagah <code>queue</code> hi use karte hain."
            }
          },
          {
            code: "var latest = tickets.OrderByDescending(t => t.Id).Take(2).Select(t => t.Id);",
            note: {
              en: "<code>OrderByDescending</code> puts the newest first; <code>Take(2)</code> keeps two. Sort <i>before</i> <code>Take</code>, or you take the wrong two.",
              hi: "<code>OrderByDescending</code> सबसे नया पहले रखता है; <code>Take(2)</code> दो रखता है। <code>Take</code> <i>से पहले</i> sort करो, वरना ग़लत दो मिलेंगे।",
              hg: "<code>OrderByDescending</code> sabse naya pehle rakhta hai; <code>Take(2)</code> do rakhta hai. <code>Take</code> <i>se pehle</i> sort karo, warna galat do milenge."
            }
          },
          {
            code: "int totalPages = (queue.Count + pageSize - 1) / pageSize;",
            note: {
              en: "Rounds up with integer maths: 8 tickets at 3 per page need 3 pages (3 + 3 + 2).",
              hi: "Integer के हिसाब से ऊपर round करता है: 8 tickets, हर page 3, तो 3 pages चाहिए (3 + 3 + 2)।",
              hg: "Integer ke hisaab se upar round karta hai: 8 tickets, har page 3, to 3 pages chahiye (3 + 3 + 2)."
            }
          },
          {
            code: "var ids = queue.Skip((page - 1) * pageSize).Take(pageSize).Select(t => t.Id);",
            note: {
              en: "Page 1 skips 0, page 2 skips 3, page 3 skips 6. The <code>(page - 1)</code> is the part people get wrong.",
              hi: "Page 1 में 0 skip, page 2 में 3, page 3 में 6। <code>(page - 1)</code> वही हिस्सा है जिसमें लोग ग़लती करते हैं।",
              hg: "Page 1 mein 0 skip, page 2 mein 3, page 3 mein 6. <code>(page - 1)</code> wahi hissa hai jismein log galti karte hain."
            }
          },
          {
            code: "Console.WriteLine($\"Page {page}: {string.Join(\", \", ids)}\");",
            note: {
              en: "Prints each page. The last page has only 2 tickets: <code>Take</code> gives fewer items instead of failing.",
              hi: "हर page print होता है। आख़िरी page में सिर्फ़ 2 tickets हैं: <code>Take</code> कम items देता है, fail नहीं होता।",
              hg: "Har page print hota hai. Aakhiri page mein sirf 2 tickets hain: <code>Take</code> kam items deta hai, fail nahi hota."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Calling <code>OrderBy</code> twice: <code>OrderBy(Agent).OrderBy(Priority)</code> sorts mainly by <b>Priority</b>. Use <code>ThenBy</code> for the second key.</li><li>Paging without a <b>unique</b> order. If many rows tie, a database can return them in different order on each call, so pages repeat or miss rows. Add <code>Id</code> as the last key.</li><li>Off-by-one: <code>Skip(page * pageSize)</code> hides the first page. It must be <code>(page - 1) * pageSize</code>.</li></ul>",
          hi: "<ul><li><code>OrderBy</code> दो बार लगाना: <code>OrderBy(Agent).OrderBy(Priority)</code> मुख्य रूप से <b>Priority</b> से sort करता है। दूसरी key के लिए <code>ThenBy</code> लगाओ।</li><li><b>Unique</b> क्रम के बिना paging। कई rows बराबर हों तो database हर call में उन्हें अलग क्रम में दे सकता है, तब pages दोहराते हैं या rows छूटती हैं। आख़िरी key <code>Id</code> रखो।</li><li>एक का फ़र्क़: <code>Skip(page * pageSize)</code> पहला page छिपा देता है। यह <code>(page - 1) * pageSize</code> होना चाहिए।</li></ul>",
          hg: "<ul><li><code>OrderBy</code> do baar lagana: <code>OrderBy(Agent).OrderBy(Priority)</code> mukhya roop se <b>Priority</b> se sort karta hai. Doosri key ke liye <code>ThenBy</code> lagao.</li><li><b>Unique</b> kram ke bina paging. Kai rows barabar hon to database har call mein unhe alag kram mein de sakta hai, tab pages dohrate hain ya rows chhoot jaati hain. Aakhiri key <code>Id</code> rakho.</li><li>Ek ka farq: <code>Skip(page * pageSize)</code> pehla page chhipa deta hai. Ye <code>(page - 1) * pageSize</code> hona chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>OrderBy</code> + <code>ThenBy</code> for any multi-key sort and <code>Skip</code>/<code>Take</code> for grids with page numbers. In EF Core on SQL Server this becomes <code>ORDER BY ... OFFSET ... FETCH</code>. Do not sort when nobody needs the order (sorting costs O(n log n)), and avoid very large <code>Skip</code> values on big tables: the database still reads the skipped rows. The Deep Dive shows keyset paging for that case.</p>",
          hi: "<p>कई keys वाले sort के लिए <code>OrderBy</code> + <code>ThenBy</code> और page numbers वाले grids के लिए <code>Skip</code>/<code>Take</code> इस्तेमाल करो। SQL Server पर EF Core में यह <code>ORDER BY ... OFFSET ... FETCH</code> बनता है। जब क्रम किसी को चाहिए ही नहीं तब sort मत करो (sort का ख़र्च O(n log n) है), और बड़ी tables पर बहुत बड़े <code>Skip</code> से बचो: database skip की गई rows फिर भी पढ़ता है। उस हाल के लिए Deep Dive में keyset paging है।</p>",
          hg: "<p>Kai keys wale sort ke liye <code>OrderBy</code> + <code>ThenBy</code> aur page numbers wale grids ke liye <code>Skip</code>/<code>Take</code> use karo. SQL Server par EF Core mein ye <code>ORDER BY ... OFFSET ... FETCH</code> banta hai. Jab kram kisi ko chahiye hi nahi tab sort mat karo (sort ka kharcha O(n log n) hai), aur badi tables par bahut bade <code>Skip</code> se bacho: database skip ki gayi rows phir bhi padhta hai. Us haal ke liye Deep Dive mein keyset paging hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Show <b>page 2</b> (2 tickets per page) when sorted by <code>Priority</code>, then <code>Id</code>. Print the ids: <code>508, 502</code>.</p>",
            hi: "<p><code>Priority</code> और फिर <code>Id</code> से sort करके <b>page 2</b> दिखाओ (हर page 2 tickets)। Ids print करो: <code>508, 502</code>।</p>",
            hg: "<p><code>Priority</code> aur phir <code>Id</code> se sort karke <b>page 2</b> dikhao (har page 2 tickets). Ids print karo: <code>508, 502</code>.</p>"
          },
          hint: {
            en: "<p>Page 2 with size 2 skips <code>(2 - 1) * 2 = 2</code> tickets, then takes 2.</p>",
            hi: "<p>Size 2 के साथ page 2, <code>(2 - 1) * 2 = 2</code> tickets skip करता है, फिर 2 लेता है।</p>",
            hg: "<p>Size 2 ke saath page 2, <code>(2 - 1) * 2 = 2</code> tickets skip karta hai, phir 2 leta hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: page 2 of the priority queue",
              hi: "हल: priority queue का page 2",
              hg: "Solution: priority queue ka page 2"
            },
            src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3),\n    new(505, \"Asha\", \"Refund pending\", \"Closed\", \"Meena\", 2),\n    new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3),\n    new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2),\n    new(508, \"Asha\", \"Slow internet\", \"Open\", \"Meena\", 1)\n};\n\nint page = 2, pageSize = 2;\nvar ids = tickets\n    .OrderBy(t => t.Priority)\n    .ThenBy(t => t.Id)\n    .Skip((page - 1) * pageSize)\n    .Take(pageSize)\n    .Select(t => t.Id);\nConsole.WriteLine(string.Join(\", \", ids));\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
            check: "run",
            expected: "508, 502"
          }
        },
        quiz: {
          q: {
            en: "What does <code>tickets.OrderBy(t =&gt; t.Agent).OrderBy(t =&gt; t.Priority)</code> sort by?",
            hi: "<code>tickets.OrderBy(t =&gt; t.Agent).OrderBy(t =&gt; t.Priority)</code> किस आधार पर sort करता है?",
            hg: "<code>tickets.OrderBy(t =&gt; t.Agent).OrderBy(t =&gt; t.Priority)</code> kis aadhaar par sort karta hai?"
          },
          options: [
            {
              en: "Agent first, then Priority inside each agent",
              hi: "पहले Agent, फिर हर agent के अंदर Priority",
              hg: "Pehle Agent, phir har agent ke andar Priority"
            },
            {
              en: "Mainly by Priority: the second <code>OrderBy</code> becomes the main key, so use <code>ThenBy</code>",
              hi: "मुख्य रूप से Priority से: दूसरा <code>OrderBy</code> मुख्य key बन जाता है, इसलिए <code>ThenBy</code> लगाओ",
              hg: "Mukhya roop se Priority se: doosra <code>OrderBy</code> mukhya key ban jaata hai, isliye <code>ThenBy</code> lagao"
            },
            {
              en: "It throws an exception",
              hi: "यह exception फेंकता है",
              hg: "Ye exception phenkta hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Each <code>OrderBy</code> starts a new sort whose main key is its own. To add a second key, use <code>ThenBy</code> after <code>OrderBy</code>: <code>OrderBy(t =&gt; t.Agent).ThenBy(t =&gt; t.Priority)</code>.</p>",
            hi: "<p>हर <code>OrderBy</code> नया sort शुरू करता है जिसकी मुख्य key वही होती है। दूसरी key जोड़ने के लिए <code>OrderBy</code> के बाद <code>ThenBy</code> लगाओ: <code>OrderBy(t =&gt; t.Agent).ThenBy(t =&gt; t.Priority)</code>।</p>",
            hg: "<p>Har <code>OrderBy</code> naya sort shuru karta hai jiski mukhya key wahi hoti hai. Doosri key jodne ke liye <code>OrderBy</code> ke baad <code>ThenBy</code> lagao: <code>OrderBy(t =&gt; t.Agent).ThenBy(t =&gt; t.Priority)</code>.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>OrderBy</code> = main key; <code>ThenBy</code> = tie-breaker. Never chain two <code>OrderBy</code> calls.</li><li>Paging = sort first (with a unique last key), then <code>Skip((page - 1) * size).Take(size)</code>.</li><li>Total pages = <code>(total + size - 1) / size</code>.</li></ul>",
          hi: "<ul><li><code>OrderBy</code> = मुख्य key; <code>ThenBy</code> = tie-breaker। दो <code>OrderBy</code> कभी chain मत करो।</li><li>Paging = पहले sort (आख़िरी key unique रखकर), फिर <code>Skip((page - 1) * size).Take(size)</code>।</li><li>कुल pages = <code>(total + size - 1) / size</code>।</li></ul>",
          hg: "<ul><li><code>OrderBy</code> = mukhya key; <code>ThenBy</code> = tie-breaker. Do <code>OrderBy</code> kabhi chain mat karo.</li><li>Paging = pehle sort (aakhiri key unique rakhkar), phir <code>Skip((page - 1) * size).Take(size)</code>.</li><li>Kul pages = <code>(total + size - 1) / size</code>.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Sort tickets by priority, then page through them",
            hi: "Tickets को priority से sort करो, फिर page-by-page देखो",
            hg: "Tickets ko priority se sort karo, phir page-by-page dekho"
          },
          src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3),\n    new(505, \"Asha\", \"Refund pending\", \"Closed\", \"Meena\", 2),\n    new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3),\n    new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2),\n    new(508, \"Asha\", \"Slow internet\", \"Open\", \"Meena\", 1)\n};\n\n// Main key + tie-breaker: urgent first, oldest first inside each priority\nvar queue = tickets.OrderBy(t => t.Priority).ThenBy(t => t.Id).ToList();\nConsole.WriteLine(string.Join(\", \", queue.Select(t => $\"{t.Id}(P{t.Priority})\")));\n\n// Newest two tickets: sort first, then Take\nvar latest = tickets.OrderByDescending(t => t.Id).Take(2).Select(t => t.Id);\nConsole.WriteLine(\"Latest: \" + string.Join(\", \", latest));\n\n// Paging: the sorted order is deterministic (Id is the last key), then Skip/Take\nint pageSize = 3;\nint totalPages = (queue.Count + pageSize - 1) / pageSize;\nfor (int page = 1; page <= totalPages; page++)\n{\n    var ids = queue.Skip((page - 1) * pageSize).Take(pageSize).Select(t => t.Id);\n    Console.WriteLine($\"Page {page}: {string.Join(\", \", ids)}\");\n}\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
          check: "run",
          expected: "501(P1), 503(P1), 508(P1), 502(P2), 505(P2), 507(P2), 504(P3), 506(P3)\nLatest: 508, 507\nPage 1: 501, 503, 508\nPage 2: 502, 505, 507\nPage 3: 504, 506"
        }
      ]
    },
    {
      id: "grouping",
      depth: "short",
      title: {
        en: "Grouping with GroupBy",
        hi: "GroupBy से grouping",
        hg: "GroupBy se grouping"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 5 ordered and paged one list of tickets. The support manager now asks for a report: <b>how many tickets does each agent have?</b> That needs buckets.",
          hi: "पाठ 5 में tickets की एक list को क्रम में रखा और pages में बाँटा। Support manager अब एक report माँगता है: <b>हर agent के पास कितने tickets हैं?</b> इसके लिए buckets चाहिए।",
          hg: "Lesson 5 mein tickets ki ek list ko kram mein rakha aur pages mein baanta. Support manager ab ek report maangta hai: <b>har agent ke paas kitne tickets hain?</b> Iske liye buckets chahiye."
        },
        what: {
          en: "<p><code>GroupBy(keySelector)</code> puts items into buckets by a key. You get one <b>group</b> per key. Each group has a <code>.Key</code> and <b>is itself a sequence</b> of its items, so you can call <code>Count()</code>, <code>Sum()</code> or <code>First()</code> on it.</p>",
          hi: "<p><code>GroupBy(keySelector)</code> items को key के आधार पर buckets में डालता है। हर key के लिए एक <b>group</b> मिलता है। हर group में <code>.Key</code> होती है और वह <b>ख़ुद भी items की sequence</b> है, इसलिए उस पर <code>Count()</code>, <code>Sum()</code> या <code>First()</code> चला सकते हो।</p>",
          hg: "<p><code>GroupBy(keySelector)</code> items ko key ke aadhaar par buckets mein daalta hai. Har key ke liye ek <b>group</b> milta hai. Har group mein <code>.Key</code> hoti hai aur woh <b>khud bhi items ki sequence</b> hai, isliye us par <code>Count()</code>, <code>Sum()</code> ya <code>First()</code> chala sakte ho.</p>"
        },
        why: {
          en: "<p>Almost every report is \"something per something\": tickets per agent, per status, per customer. Without <code>GroupBy</code> you write a dictionary and a loop by hand.</p>",
          hi: "<p>लगभग हर report \"किसी चीज़ की गिनती किसी दूसरी चीज़ के हिसाब से\" होती है: agent के हिसाब से tickets, status के हिसाब से, customer के हिसाब से। <code>GroupBy</code> के बिना आपको dictionary और loop हाथ से लिखना पड़ता है।</p>",
          hg: "<p>Lagbhag har report \"kisi cheez ki ginti kisi doosri cheez ke hisaab se\" hoti hai: agent ke hisaab se tickets, status ke hisaab se, customer ke hisaab se. <code>GroupBy</code> ke bina aapko dictionary aur loop haath se likhna padta hai.</p>"
        },
        analogy: {
          en: "<p>The post office sorting room. Letters arrive in one pile. The postman drops each letter into a <b>bag by PIN code</b>. Every bag has a label (<code>Key</code>) and you can count or weigh what is inside (<code>Count()</code>, <code>Sum()</code>).</p>",
          hi: "<p>डाकघर का sorting room। चिट्ठियाँ एक ढेर में आती हैं। डाकिया हर चिट्ठी <b>PIN code के हिसाब से थैले</b> में डालता है। हर थैले पर लेबल है (<code>Key</code>) और अंदर की चीज़ें गिन या तौल सकते हो (<code>Count()</code>, <code>Sum()</code>)।</p>",
          hg: "<p>Daakghar ka sorting room. Chitthiyan ek dher mein aati hain. Daakiya har chitthi <b>PIN code ke hisaab se thaile</b> mein daalta hai. Har thaile par label hai (<code>Key</code>) aur andar ki cheezein gin ya taul sakte ho (<code>Count()</code>, <code>Sum()</code>).</p>"
        },
        lines: [
          {
            code: "foreach (var group in tickets.GroupBy(t => t.Agent))",
            note: {
              en: "One loop pass per agent. Groups appear in the order each key <b>first appears</b> in the list: Meena (ticket 501) before Kiran (502).",
              hi: "हर agent के लिए loop एक बार चलता है। Groups उस क्रम में आते हैं जिसमें हर key list में <b>पहली बार दिखती</b> है: Meena (ticket 501) Kiran (502) से पहले।",
              hg: "Har agent ke liye loop ek baar chalta hai. Groups us kram mein aate hain jismein har key list mein <b>pehli baar dikhti</b> hai: Meena (ticket 501) Kiran (502) se pehle."
            }
          },
          {
            code: "int open = group.Count(t => t.Status == \"Open\");",
            note: {
              en: "The group is a sequence, so we can filter and count <b>inside</b> it: this agent's open tickets only.",
              hi: "Group एक sequence है, इसलिए उसके <b>अंदर</b> filter और count कर सकते हैं: सिर्फ़ इस agent के open tickets।",
              hg: "Group ek sequence hai, isliye uske <b>andar</b> filter aur count kar sakte hain: sirf is agent ke open tickets."
            }
          },
          {
            code: "var busyAgents = tickets.GroupBy(t => t.Agent).Where(g => g.Count() > 3).Select(g => g.Key);",
            note: {
              en: "A <code>Where</code> <b>after</b> <code>GroupBy</code> filters whole groups, like SQL <code>HAVING</code>. A <code>Where</code> before it would filter single tickets.",
              hi: "<code>GroupBy</code> के <b>बाद</b> का <code>Where</code> पूरे groups को filter करता है, SQL के <code>HAVING</code> की तरह। उससे पहले का <code>Where</code> अलग-अलग tickets को filter करता।",
              hg: "<code>GroupBy</code> ke <b>baad</b> ka <code>Where</code> poore groups ko filter karta hai, SQL ke <code>HAVING</code> ki tarah. Usse pehle ka <code>Where</code> alag-alag tickets ko filter karta."
            }
          },
          {
            code: "var top = tickets.GroupBy(t => t.Customer).OrderByDescending(g => g.Count()).First();",
            note: {
              en: "Groups can be sorted too. The biggest group comes first; <code>First()</code> takes it (lesson 8). Asha has 3 tickets, more than anyone else.",
              hi: "Groups को भी sort कर सकते हैं। सबसे बड़ा group पहले आता है; <code>First()</code> उसे लेता है (पाठ 8)। Asha के 3 tickets हैं, किसी और से ज़्यादा।",
              hg: "Groups ko bhi sort kar sakte hain. Sabse bada group pehle aata hai; <code>First()</code> use leta hai (lesson 8). Asha ke 3 tickets hain, kisi aur se zyada."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Expecting <code>GroupBy</code> to return a <code>Dictionary</code>. It returns a sequence of groups. Use <code>ToDictionary</code> or <code>ToLookup</code> when you need lookups by key.</li><li>Forgetting that each group is itself a sequence, and writing a second loop to count it. <code>group.Count()</code> is enough.</li><li>Enumerating the same <code>GroupBy</code> twice. It is deferred and reads the whole source each time. Store it with <code>ToList()</code> if you loop more than once.</li></ul>",
          hi: "<ul><li>यह उम्मीद करना कि <code>GroupBy</code> <code>Dictionary</code> लौटाएगा। यह groups की sequence लौटाता है। Key से lookup चाहिए तो <code>ToDictionary</code> या <code>ToLookup</code> लो।</li><li>यह भूल जाना कि हर group ख़ुद एक sequence है, और उसे गिनने के लिए दूसरा loop लिखना। <code>group.Count()</code> काफ़ी है।</li><li>एक ही <code>GroupBy</code> को दो बार enumerate करना। यह deferred है और हर बार पूरा source पढ़ता है। एक से ज़्यादा बार loop चलाओ तो <code>ToList()</code> से रख लो।</li></ul>",
          hg: "<ul><li>Ye ummeed karna ki <code>GroupBy</code> <code>Dictionary</code> lautayega. Ye groups ki sequence lautaata hai. Key se lookup chahiye to <code>ToDictionary</code> ya <code>ToLookup</code> lo.</li><li>Ye bhool jaana ki har group khud ek sequence hai, aur use ginne ke liye doosra loop likhna. <code>group.Count()</code> kaafi hai.</li><li>Ek hi <code>GroupBy</code> ko do baar enumerate karna. Ye deferred hai aur har baar poora source padhta hai. Ek se zyada baar loop chalao to <code>ToList()</code> se rakh lo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>GroupBy</code> for reports and summaries: totals per agent, orders per status. In EF Core, <code>GroupBy</code> followed by <code>Count</code> or <code>Sum</code> becomes SQL <code>GROUP BY</code>, so the database does the work. Do not group just to ask \"does this key exist?\" (use <code>Any</code> or a <code>HashSet</code>), and do not pull a huge table into memory just to group it. <code>ToLookup</code>, composite keys and <code>CountBy</code> are in the Deep Dive.</p>",
          hi: "<p>Reports और summaries के लिए <code>GroupBy</code> इस्तेमाल करो: हर agent के totals, हर status के orders। EF Core में <code>GroupBy</code> के बाद <code>Count</code> या <code>Sum</code> SQL का <code>GROUP BY</code> बन जाता है, यानी काम database करता है। सिर्फ़ यह पूछने के लिए group मत बनाओ कि \"यह key है या नहीं?\" (<code>Any</code> या <code>HashSet</code> लो), और group करने के लिए पूरी विशाल table memory में मत खींचो। <code>ToLookup</code>, composite keys और <code>CountBy</code> Deep Dive में हैं।</p>",
          hg: "<p>Reports aur summaries ke liye <code>GroupBy</code> use karo: har agent ke totals, har status ke orders. EF Core mein <code>GroupBy</code> ke baad <code>Count</code> ya <code>Sum</code> SQL ka <code>GROUP BY</code> ban jaata hai, yaani kaam database karta hai. Sirf ye poochne ke liye group mat banao ki \"ye key hai ya nahi?\" (<code>Any</code> ya <code>HashSet</code> lo), aur group karne ke liye poori vishaal table memory mein mat kheencho. <code>ToLookup</code>, composite keys aur <code>CountBy</code> Deep Dive mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Print how many tickets there are per <b>status</b>, one line each: <code>Open: 5</code> and <code>Closed: 3</code>.</p>",
            hi: "<p>हर <b>status</b> के कितने tickets हैं, हर एक line में print करो: <code>Open: 5</code> और <code>Closed: 3</code>।</p>",
            hg: "<p>Har <b>status</b> ke kitne tickets hain, har ek line mein print karo: <code>Open: 5</code> aur <code>Closed: 3</code>.</p>"
          },
          hint: {
            en: "<p>Group by <code>t.Status</code>, then print <code>group.Key</code> and <code>group.Count()</code>.</p>",
            hi: "<p><code>t.Status</code> से group करो, फिर <code>group.Key</code> और <code>group.Count()</code> print करो।</p>",
            hg: "<p><code>t.Status</code> se group karo, phir <code>group.Key</code> aur <code>group.Count()</code> print karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: tickets per status",
              hi: "हल: status के हिसाब से tickets",
              hg: "Solution: status ke hisaab se tickets"
            },
            src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3),\n    new(505, \"Asha\", \"Refund pending\", \"Closed\", \"Meena\", 2),\n    new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3),\n    new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2),\n    new(508, \"Asha\", \"Slow internet\", \"Open\", \"Meena\", 1)\n};\n\nforeach (var group in tickets.GroupBy(t => t.Status))\n    Console.WriteLine($\"{group.Key}: {group.Count()}\");\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
            check: "run",
            expected: "Open: 5\nClosed: 3"
          }
        },
        quiz: {
          q: {
            en: "In what order does <code>GroupBy</code> (LINQ to Objects) return the groups?",
            hi: "<code>GroupBy</code> (LINQ to Objects) groups को किस क्रम में लौटाता है?",
            hg: "<code>GroupBy</code> (LINQ to Objects) groups ko kis kram mein lautaata hai?"
          },
          options: [
            {
              en: "Sorted by key",
              hi: "Key के हिसाब से sorted",
              hg: "Key ke hisaab se sorted"
            },
            {
              en: "In a random order",
              hi: "किसी भी random क्रम में",
              hg: "Kisi bhi random kram mein"
            },
            {
              en: "In the order each key first appears in the source",
              hi: "जिस क्रम में हर key source में पहली बार दिखती है",
              hg: "Jis kram mein har key source mein pehli baar dikhti hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>For LINQ to Objects the groups come in the order their key first appears, and items inside a group keep their source order. If you need another order, add <code>OrderBy</code> after <code>GroupBy</code>.</p>",
            hi: "<p>LINQ to Objects में groups उस क्रम में आते हैं जिसमें उनकी key पहली बार दिखती है, और group के अंदर items source वाले क्रम में रहते हैं। दूसरा क्रम चाहिए तो <code>GroupBy</code> के बाद <code>OrderBy</code> लगाओ।</p>",
            hg: "<p>LINQ to Objects mein groups us kram mein aate hain jismein unki key pehli baar dikhti hai, aur group ke andar items source wale kram mein rehte hain. Doosra kram chahiye to <code>GroupBy</code> ke baad <code>OrderBy</code> lagao.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>GroupBy</code> gives groups; each has a <code>Key</code> and is a sequence of its items.</li><li>Use <code>Count()</code>/<code>Sum()</code> on a group; <code>Where</code> after <code>GroupBy</code> filters groups (like <code>HAVING</code>).</li><li>It is deferred and buffering: store with <code>ToList()</code> if you loop twice.</li></ul>",
          hi: "<ul><li><code>GroupBy</code> groups देता है; हर group में <code>Key</code> है और वह अपने items की sequence है।</li><li>Group पर <code>Count()</code>/<code>Sum()</code> चलाओ; <code>GroupBy</code> के बाद का <code>Where</code> groups को filter करता है (<code>HAVING</code> की तरह)।</li><li>यह deferred और buffering है: दो बार loop चलाओ तो <code>ToList()</code> से रख लो।</li></ul>",
          hg: "<ul><li><code>GroupBy</code> groups deta hai; har group mein <code>Key</code> hai aur woh apne items ki sequence hai.</li><li>Group par <code>Count()</code>/<code>Sum()</code> chalao; <code>GroupBy</code> ke baad ka <code>Where</code> groups ko filter karta hai (<code>HAVING</code> ki tarah).</li><li>Ye deferred aur buffering hai: do baar loop chalao to <code>ToList()</code> se rakh lo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Tickets per agent, busy agents and the top customer",
            hi: "हर agent के tickets, busy agents और सबसे ज़्यादा tickets वाला customer",
            hg: "Har agent ke tickets, busy agents aur sabse zyada tickets wala customer"
          },
          src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3),\n    new(505, \"Asha\", \"Refund pending\", \"Closed\", \"Meena\", 2),\n    new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3),\n    new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2),\n    new(508, \"Asha\", \"Slow internet\", \"Open\", \"Meena\", 1)\n};\n\n// One group per agent: a Key plus that agent's tickets\nforeach (var group in tickets.GroupBy(t => t.Agent))\n{\n    int open = group.Count(t => t.Status == \"Open\");\n    Console.WriteLine($\"{group.Key}: {group.Count()} tickets, {open} open\");\n}\n\n// Filter whole groups (like SQL HAVING): agents with more than 3 tickets\nvar busyAgents = tickets.GroupBy(t => t.Agent).Where(g => g.Count() > 3).Select(g => g.Key);\nConsole.WriteLine(\"Busy agents: \" + string.Join(\", \", busyAgents));\n\n// Which customer raised the most tickets?\nvar top = tickets.GroupBy(t => t.Customer).OrderByDescending(g => g.Count()).First();\nConsole.WriteLine($\"Top customer: {top.Key} ({top.Count()} tickets)\");\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
          check: "run",
          expected: "Meena: 5 tickets, 3 open\nKiran: 3 tickets, 2 open\nBusy agents: Meena\nTop customer: Asha (3 tickets)"
        }
      ]
    },
    {
      id: "joins",
      depth: "short",
      title: {
        en: "Joins: Join and the left join",
        hi: "Joins: Join और left join",
        hg: "Joins: Join aur left join"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 6 counted tickets per agent using only the ticket list. Now we add a second list, the <b>agents</b> (with their team), and combine the two by a key. One agent, Divya, has no open tickets, and that will matter.",
          hi: "पाठ 6 में सिर्फ़ ticket list से हर agent के tickets गिने। अब एक दूसरी list जोड़ते हैं, <b>agents</b> की (उनकी team के साथ), और दोनों को key से मिलाते हैं। एक agent, Divya, के पास कोई open ticket नहीं है, और यही बात आगे काम आएगी।",
          hg: "Lesson 6 mein sirf ticket list se har agent ke tickets gine. Ab ek doosri list jodte hain, <b>agents</b> ki (unki team ke saath), aur dono ko key se milate hain. Ek agent, Divya, ke paas koi open ticket nahi hai, aur yahi baat aage kaam aayegi."
        },
        what: {
          en: "<p><code>Join</code> is an <b>inner join</b>: it pairs items that have the same key. Items without a partner disappear.</p><p><code>GroupJoin</code> gives each outer item the <b>group</b> of its matches (empty if none). A <b>left join</b> keeps every outer item even with no match: <code>GroupJoin</code> + <code>DefaultIfEmpty()</code> (query syntax: <code>join ... into g</code> then <code>from x in g.DefaultIfEmpty()</code>).</p>",
          hi: "<p><code>Join</code> <b>inner join</b> है: यह एक ही key वाले items की जोड़ी बनाता है। जिसका जोड़ीदार नहीं, वह ग़ायब हो जाता है।</p><p><code>GroupJoin</code> हर बाहरी item को उसके matches का <b>group</b> देता है (match न हो तो ख़ाली)। <b>Left join</b> हर बाहरी item को रखता है, भले match न हो: <code>GroupJoin</code> + <code>DefaultIfEmpty()</code> (query syntax में: <code>join ... into g</code> और फिर <code>from x in g.DefaultIfEmpty()</code>)।</p>",
          hg: "<p><code>Join</code> <b>inner join</b> hai: ye ek hi key wale items ki jodi banata hai. Jiska jodidaar nahi, woh gaayab ho jaata hai.</p><p><code>GroupJoin</code> har baahri item ko uske matches ka <b>group</b> deta hai (match na ho to khaali). <b>Left join</b> har baahri item ko rakhta hai, bhale match na ho: <code>GroupJoin</code> + <code>DefaultIfEmpty()</code> (query syntax mein: <code>join ... into g</code> aur phir <code>from x in g.DefaultIfEmpty()</code>).</p>"
        },
        why: {
          en: "<p>In real systems data lives in separate lists or tables: tickets in one, agents in another. A dashboard needs both. And a report \"tickets per agent\" that silently drops agents with zero tickets is wrong: that is the inner-join trap.</p>",
          hi: "<p>असली systems में data अलग-अलग lists या tables में रहता है: tickets एक में, agents दूसरी में। Dashboard को दोनों चाहिए। और \"हर agent के tickets\" वाली report जो बिना बताए शून्य tickets वाले agents को हटा दे, वह ग़लत है: यही inner join का जाल है।</p>",
          hg: "<p>Asli systems mein data alag-alag lists ya tables mein rehta hai: tickets ek mein, agents doosri mein. Dashboard ko dono chahiye. Aur \"har agent ke tickets\" wali report jo bina bataye shoonya tickets wale agents ko hata de, woh galat hai: yahi inner join ka jaal hai.</p>"
        },
        analogy: {
          en: "<p>The attendance register and the answer sheets. \"Students who handed in a sheet\" is an <b>inner join</b>: absent students are left out. \"<b>Every</b> student on the register, with 'absent' where there is no sheet\" is a <b>left join</b>. \"Each student with the pile of their sheets (maybe empty)\" is a <b>GroupJoin</b>.</p>",
          hi: "<p>Attendance register और उत्तर-पुस्तिकाएँ। \"जिन students ने पुस्तिका जमा की\" वह <b>inner join</b> है: ग़ैरहाज़िर students छूट जाते हैं। \"Register के <b>हर</b> student को, जहाँ पुस्तिका नहीं वहाँ 'absent' के साथ\" <b>left join</b> है। \"हर student को उसकी पुस्तिकाओं के ढेर के साथ (शायद ख़ाली)\" <b>GroupJoin</b> है।</p>",
          hg: "<p>Attendance register aur uttar-pustikayein. \"Jin students ne pustika jama ki\" woh <b>inner join</b> hai: ghairhaazir students chhoot jaate hain. \"Register ke <b>har</b> student ko, jahan pustika nahi wahan 'absent' ke saath\" <b>left join</b> hai. \"Har student ko uski pustikaon ke dher ke saath (shaayad khaali)\" <b>GroupJoin</b> hai.</p>"
        },
        focus: {
          caption: {
            en: "Join shape: outer, inner, two keys, and the result",
            hi: "Join का ढाँचा: outer, inner, दो keys और result",
            hg: "Join ka dhaancha: outer, inner, do keys aur result"
          },
          src: "openTickets.Join(\n    agents,                  // inner list\n    t => t.Agent,            // key from the outer item (ticket)\n    a => a.Name,             // key from the inner item (agent)\n    (t, a) => $\"#{t.Id} {a.Team}\");   // result for each matching pair",
          check: "none"
        },
        lines: [
          {
            code: "var inner = openTickets.Join(agents, t => t.Agent, a => a.Name,",
            note: {
              en: "The outer list is <code>openTickets</code>; the inner is <code>agents</code>. Two key selectors say \"match <code>t.Agent</code> with <code>a.Name</code>\". Join uses a hash lookup, so it is fast.",
              hi: "Outer list <code>openTickets</code> है; inner <code>agents</code>। दो key selectors कहते हैं \"<code>t.Agent</code> को <code>a.Name</code> से मिलाओ\"। Join hash lookup इस्तेमाल करता है, इसलिए तेज़ है।",
              hg: "Outer list <code>openTickets</code> hai; inner <code>agents</code>. Do key selectors kehte hain \"<code>t.Agent</code> ko <code>a.Name</code> se milao\". Join hash lookup use karta hai, isliye tez hai."
            }
          },
          {
            code: "var perAgent = agents.GroupJoin(openTickets, a => a.Name, t => t.Agent,",
            note: {
              en: "Now <code>agents</code> is the outer list. Each agent gets a group of their open tickets. Divya gets an <b>empty</b> group, so she stays in the result with 0.",
              hi: "अब <code>agents</code> outer list है। हर agent को उसके open tickets का group मिलता है। Divya को <b>ख़ाली</b> group मिलता है, इसलिए वह 0 के साथ result में रहती है।",
              hg: "Ab <code>agents</code> outer list hai. Har agent ko uske open tickets ka group milta hai. Divya ko <b>khaali</b> group milta hai, isliye woh 0 ke saath result mein rehti hai."
            }
          },
          {
            code: "join t in openTickets on a.Name equals t.Agent into agentTickets",
            note: {
              en: "Query syntax: <code>into</code> turns the join into a <code>GroupJoin</code>. The key from the <b>outer</b> side (<code>a.Name</code>) must be on the <b>left</b> of <code>equals</code>.",
              hi: "Query syntax: <code>into</code> join को <code>GroupJoin</code> बना देता है। <b>Outer</b> तरफ़ की key (<code>a.Name</code>) <code>equals</code> के <b>बाएँ</b> रहनी चाहिए।",
              hg: "Query syntax: <code>into</code> join ko <code>GroupJoin</code> bana deta hai. <b>Outer</b> taraf ki key (<code>a.Name</code>) <code>equals</code> ke <b>baayein</b> rehni chahiye."
            }
          },
          {
            code: "from t in agentTickets.DefaultIfEmpty()",
            note: {
              en: "<code>DefaultIfEmpty()</code> turns an empty group into one <code>null</code> item. That keeps Divya in the result: this is the left join.",
              hi: "<code>DefaultIfEmpty()</code> ख़ाली group को एक <code>null</code> item बना देता है। इससे Divya result में रहती है: यही left join है।",
              hg: "<code>DefaultIfEmpty()</code> khaali group ko ek <code>null</code> item bana deta hai. Isse Divya result mein rehti hai: yahi left join hai."
            }
          },
          {
            code: "select $\"{a.Name}:{(t is null ? \"none\" : t.Id.ToString())}\";",
            note: {
              en: "Handle the <code>null</code> yourself. Divya has no ticket, so we print <code>none</code>.",
              hi: "<code>null</code> को आपको ख़ुद संभालना है। Divya का कोई ticket नहीं, इसलिए <code>none</code> print करते हैं।",
              hg: "<code>null</code> ko aapko khud sambhalna hai. Divya ka koi ticket nahi, isliye <code>none</code> print karte hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using an inner join for a \"per agent\" report. Agents without tickets silently vanish. Use <code>GroupJoin</code> or a left join.</li><li>Swapping the sides of <code>equals</code> in query syntax: compiler errors CS1937 and CS1938. Outer key on the left, inner key on the right.</li><li>Matching two lists with a nested <code>foreach</code> and <code>Where</code>. That is O(n × m); <code>Join</code> uses a hash lookup.</li></ul>",
          hi: "<ul><li>\"हर agent\" वाली report के लिए inner join लगाना। बिना tickets वाले agents चुपचाप ग़ायब हो जाते हैं। <code>GroupJoin</code> या left join लो।</li><li>Query syntax में <code>equals</code> की दोनों तरफ़ उलट देना: compiler errors CS1937 और CS1938। Outer key बाएँ, inner key दाएँ।</li><li>दो lists को nested <code>foreach</code> और <code>Where</code> से मिलाना। यह O(n × m) है; <code>Join</code> hash lookup इस्तेमाल करता है।</li></ul>",
          hg: "<ul><li>\"Har agent\" wali report ke liye inner join lagana. Bina tickets wale agents chupchaap gaayab ho jaate hain. <code>GroupJoin</code> ya left join lo.</li><li>Query syntax mein <code>equals</code> ki dono taraf ulat dena: compiler errors CS1937 aur CS1938. Outer key baayein, inner key daayein.</li><li>Do lists ko nested <code>foreach</code> aur <code>Where</code> se milana. Ye O(n × m) hai; <code>Join</code> hash lookup use karta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>Join</code> to combine two in-memory lists by a key (API results plus a lookup table). Use <code>GroupJoin</code> for parent-with-children, and a left join when the parent must appear even without children. In EF Core, when the relationship is mapped, prefer <b>navigation properties</b> (<code>ticket.Agent.Team</code>) over a manual <code>Join</code>: EF writes the join for you. .NET 10 adds a built-in <code>LeftJoin</code>; see the Deep Dive.</p>",
          hi: "<p>दो in-memory lists को key से मिलाने के लिए <code>Join</code> इस्तेमाल करो (API के नतीजे और lookup table)। Parent और उसके children के लिए <code>GroupJoin</code>, और जब parent बिना children के भी दिखना चाहिए तब left join। EF Core में जब relationship mapped हो, तब हाथ के <code>Join</code> की जगह <b>navigation properties</b> (<code>ticket.Agent.Team</code>) लो: join EF ख़ुद लिखता है। .NET 10 में built-in <code>LeftJoin</code> आया है; Deep Dive देखो।</p>",
          hg: "<p>Do in-memory lists ko key se milane ke liye <code>Join</code> use karo (API ke nateeje aur lookup table). Parent aur uske children ke liye <code>GroupJoin</code>, aur jab parent bina children ke bhi dikhna chahiye tab left join. EF Core mein jab relationship mapped ho, tab haath ke <code>Join</code> ki jagah <b>navigation properties</b> (<code>ticket.Agent.Team</code>) lo: join EF khud likhta hai. .NET 10 mein built-in <code>LeftJoin</code> aaya hai; Deep Dive dekho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Print the agents who have <b>no open ticket</b>, as <code>No open tickets: Divya</code>. Use <code>GroupJoin</code> and keep agents whose group is empty.</p>",
            hi: "<p>जिन agents के पास <b>कोई open ticket नहीं</b> है उन्हें <code>No open tickets: Divya</code> के रूप में print करो। <code>GroupJoin</code> इस्तेमाल करो और उन agents को रखो जिनका group ख़ाली है।</p>",
            hg: "<p>Jin agents ke paas <b>koi open ticket nahi</b> hai unhe <code>No open tickets: Divya</code> ke roop mein print karo. <code>GroupJoin</code> use karo aur un agents ko rakho jinka group khaali hai.</p>"
          },
          hint: {
            en: "<p>In the result selector return an anonymous object or the group and agent; then <code>Where(x =&gt; !x.Tickets.Any())</code>.</p>",
            hi: "<p>Result selector में anonymous object लौटाओ (agent और group); फिर <code>Where(x =&gt; !x.Tickets.Any())</code>।</p>",
            hg: "<p>Result selector mein anonymous object lautao (agent aur group); phir <code>Where(x =&gt; !x.Tickets.Any())</code>.</p>"
          },
          solution: {
            caption: {
              en: "Solution: agents with an empty group",
              hi: "हल: ख़ाली group वाले agents",
              hg: "Solution: khaali group wale agents"
            },
            src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3),\n    new(505, \"Asha\", \"Refund pending\", \"Closed\", \"Meena\", 2),\n    new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3),\n    new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2),\n    new(508, \"Asha\", \"Slow internet\", \"Open\", \"Meena\", 1)\n};\nvar agents = new List<Agent>\n{\n    new(\"Meena\", \"Broadband\"),\n    new(\"Kiran\", \"Billing\"),\n    new(\"Divya\", \"Mobile\")\n};\n\nvar openTickets = tickets.Where(t => t.Status == \"Open\").ToList();\n\nvar idle = agents\n    .GroupJoin(openTickets, a => a.Name, t => t.Agent, (a, ts) => new { a.Name, Tickets = ts })\n    .Where(x => !x.Tickets.Any())\n    .Select(x => x.Name);\nConsole.WriteLine(\"No open tickets: \" + string.Join(\", \", idle));\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);\nrecord Agent(string Name, string Team);",
            check: "run",
            expected: "No open tickets: Divya"
          }
        },
        quiz: {
          q: {
            en: "<code>openTickets.Join(agents, t =&gt; t.Agent, a =&gt; a.Name, ...)</code> is an inner join. Which agent never appears in its result?",
            hi: "<code>openTickets.Join(agents, t =&gt; t.Agent, a =&gt; a.Name, ...)</code> एक inner join है। इसके result में कौन-सा agent कभी नहीं आएगा?",
            hg: "<code>openTickets.Join(agents, t =&gt; t.Agent, a =&gt; a.Name, ...)</code> ek inner join hai. Iske result mein kaunsa agent kabhi nahi aayega?"
          },
          options: [
            {
              en: "Divya, because she has no open ticket",
              hi: "Divya, क्योंकि उसका कोई open ticket नहीं है",
              hg: "Divya, kyunki uska koi open ticket nahi hai"
            },
            {
              en: "Meena, because her name is also a customer",
              hi: "Meena, क्योंकि उसका नाम एक customer का भी है",
              hg: "Meena, kyunki uska naam ek customer ka bhi hai"
            },
            {
              en: "Kiran, because he has the fewest tickets",
              hi: "Kiran, क्योंकि उसके सबसे कम tickets हैं",
              hg: "Kiran, kyunki uske sabse kam tickets hain"
            },
            {
              en: "None, an inner join keeps every agent",
              hi: "कोई नहीं, inner join हर agent को रखता है",
              hg: "Koi nahi, inner join har agent ko rakhta hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>An inner join only returns pairs that match. Divya has no open ticket, so she has no pair and disappears. To keep her, use <code>GroupJoin</code> or a left join.</p>",
            hi: "<p>Inner join सिर्फ़ मेल खाती जोड़ियाँ लौटाता है। Divya का कोई open ticket नहीं, इसलिए उसकी जोड़ी नहीं बनती और वह ग़ायब हो जाती है। उसे रखने के लिए <code>GroupJoin</code> या left join लो।</p>",
            hg: "<p>Inner join sirf mel khaati jodiyan lautaata hai. Divya ka koi open ticket nahi, isliye uski jodi nahi banti aur woh gaayab ho jaati hai. Use rakhne ke liye <code>GroupJoin</code> ya left join lo.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>Join</code> = inner join: unmatched items disappear.</li><li><code>GroupJoin</code> = each outer item with a (maybe empty) group of matches.</li><li>Left join = <code>GroupJoin</code> + <code>DefaultIfEmpty()</code>; handle the <code>null</code>.</li></ul>",
          hi: "<ul><li><code>Join</code> = inner join: बिना जोड़ीदार वाले items ग़ायब।</li><li><code>GroupJoin</code> = हर outer item के साथ matches का (शायद ख़ाली) group।</li><li>Left join = <code>GroupJoin</code> + <code>DefaultIfEmpty()</code>; <code>null</code> को संभालो।</li></ul>",
          hg: "<ul><li><code>Join</code> = inner join: bina jodidaar wale items gaayab.</li><li><code>GroupJoin</code> = har outer item ke saath matches ka (shaayad khaali) group.</li><li>Left join = <code>GroupJoin</code> + <code>DefaultIfEmpty()</code>; <code>null</code> ko sambhalo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Inner join, GroupJoin and a left join of agents and open tickets",
            hi: "Agents और open tickets का inner join, GroupJoin और left join",
            hg: "Agents aur open tickets ka inner join, GroupJoin aur left join"
          },
          src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3),\n    new(505, \"Asha\", \"Refund pending\", \"Closed\", \"Meena\", 2),\n    new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3),\n    new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2),\n    new(508, \"Asha\", \"Slow internet\", \"Open\", \"Meena\", 1)\n};\nvar agents = new List<Agent>\n{\n    new(\"Meena\", \"Broadband\"),\n    new(\"Kiran\", \"Billing\"),\n    new(\"Divya\", \"Mobile\")\n};\n\nvar openTickets = tickets.Where(t => t.Status == \"Open\").ToList();\n\n// Inner join: only matching pairs. Divya has no open ticket, so she is not here.\nvar inner = openTickets.Join(agents, t => t.Agent, a => a.Name,\n    (t, a) => $\"#{t.Id} {a.Team}\");\nConsole.WriteLine(\"Join: \" + string.Join(\", \", inner));\n\n// GroupJoin: every agent with their (maybe empty) group of open tickets\nvar perAgent = agents.GroupJoin(openTickets, a => a.Name, t => t.Agent,\n    (a, ts) => $\"{a.Name}={ts.Count()}\");\nConsole.WriteLine(\"GroupJoin: \" + string.Join(\", \", perAgent));\n\n// Left join: GroupJoin ('into') + DefaultIfEmpty keeps Divya\nvar left = from a in agents\n           join t in openTickets on a.Name equals t.Agent into agentTickets\n           from t in agentTickets.DefaultIfEmpty()\n           select $\"{a.Name}:{(t is null ? \"none\" : t.Id.ToString())}\";\nConsole.WriteLine(\"Left join: \" + string.Join(\", \", left));\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);\nrecord Agent(string Name, string Team);",
          check: "run",
          expected: "Join: #501 Broadband, #503 Billing, #504 Broadband, #506 Billing, #508 Broadband\nGroupJoin: Meena=3, Kiran=2, Divya=0\nLeft join: Meena:501, Meena:504, Meena:508, Kiran:503, Kiran:506, Divya:none"
        }
      ]
    },
    {
      id: "picking-checking",
      depth: "short",
      title: {
        en: "Picking and checking: First, Single, Any, All",
        hi: "चुनना और जाँचना: First, Single, Any, All",
        hg: "Chunna aur jaanchna: First, Single, Any, All"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1 to 7 produced sequences: filtered, sorted, grouped, joined. Often you want just <b>one ticket</b> out of them, or a <b>yes/no answer</b>. This last lesson covers both.",
          hi: "पाठ 1 से 7 तक sequences बनीं: filter हुईं, sort हुईं, group हुईं, join हुईं। अक्सर आपको उनमें से सिर्फ़ <b>एक ticket</b> चाहिए, या <b>हाँ/नहीं का जवाब</b>। यह आख़िरी पाठ दोनों बताता है।",
          hg: "Lesson 1 se 7 tak sequences baniin: filter huin, sort huin, group huin, join huin. Aksar aapko unmein se sirf <b>ek ticket</b> chahiye, ya <b>haan/nahi ka jawaab</b>. Ye aakhiri lesson dono batata hai."
        },
        what: {
          en: "<p><b>Picking one item</b>: <code>First()</code> returns the first match and <b>throws</b> if there is none. <code>Single()</code> returns the <b>only</b> match and throws on zero <b>or</b> many. The <code>...OrDefault()</code> versions return <code>null</code> (or <code>0</code>) when nothing matches; <code>SingleOrDefault()</code> still throws on duplicates.</p><p><b>Yes/no questions</b>: <code>Any()</code> (is there at least one?), <code>All()</code> (does every item pass?), <code>Count()</code> (how many?).</p>",
          hi: "<p><b>एक item चुनना</b>: <code>First()</code> पहला match लौटाता है और कोई न हो तो <b>exception फेंकता</b> है। <code>Single()</code> <b>अकेला</b> match लौटाता है और शून्य <b>या</b> कई होने पर फेंकता है। <code>...OrDefault()</code> वाले versions कुछ न मिलने पर <code>null</code> (या <code>0</code>) लौटाते हैं; <code>SingleOrDefault()</code> duplicates पर फिर भी फेंकता है।</p><p><b>हाँ/नहीं के सवाल</b>: <code>Any()</code> (कम से कम एक है?), <code>All()</code> (क्या हर item पास होता है?), <code>Count()</code> (कितने?)।</p>",
          hg: "<p><b>Ek item chunna</b>: <code>First()</code> pehla match lautaata hai aur koi na ho to <b>exception phenkta</b> hai. <code>Single()</code> <b>akela</b> match lautaata hai aur shoonya <b>ya</b> kai hone par phenkta hai. <code>...OrDefault()</code> wale versions kuch na milne par <code>null</code> (ya <code>0</code>) lautaate hain; <code>SingleOrDefault()</code> duplicates par phir bhi phenkta hai.</p><p><b>Haan/nahi ke sawaal</b>: <code>Any()</code> (kam se kam ek hai?), <code>All()</code> (kya har item pass hota hai?), <code>Count()</code> (kitne?).</p>"
        },
        why: {
          en: "<p>The ticket page opens <code>/tickets/999</code>. If the ticket does not exist, the right answer is a clean \"404 not found\", not an unhandled exception. And if a \"unique\" Id suddenly matches two rows, you want to know loudly, not silently pick one.</p>",
          hi: "<p>Ticket page <code>/tickets/999</code> खोलता है। Ticket न हो तो सही जवाब साफ़ \"404 not found\" है, unhandled exception नहीं। और अगर \"unique\" Id अचानक दो rows से मेल खाए, तो आप चाहते हो कि ज़ोर से पता चले, चुपचाप एक न उठा ली जाए।</p>",
          hg: "<p>Ticket page <code>/tickets/999</code> kholta hai. Ticket na ho to sahi jawaab saaf \"404 not found\" hai, unhandled exception nahi. Aur agar \"unique\" Id achanak do rows se mel khaaye, to aap chahte ho ki zor se pata chale, chupchaap ek na utha li jaaye.</p>"
        },
        analogy: {
          en: "<p>The housing society register. \"Find the owner with this <b>Aadhaar number</b>\": there must be exactly one, two would be bad data (<b>Single</b>). \"Give me <b>any one</b> resident named Sharma\" (<b>First</b>). \"Does <b>anyone</b> own an electric car?\" You stop at the first yes (<b>Any</b>). \"Has <b>everyone</b> paid maintenance?\" (<b>All</b>).</p>",
          hi: "<p>Housing society का register। \"इस <b>Aadhaar number</b> वाला मालिक ढूँढो\": ठीक एक होना चाहिए, दो हों तो data ख़राब है (<b>Single</b>)। \"Sharma नाम का <b>कोई एक</b> निवासी दो\" (<b>First</b>)। \"क्या <b>किसी</b> के पास electric car है?\" पहली हाँ पर रुक जाते हो (<b>Any</b>)। \"क्या <b>सबने</b> maintenance भर दी?\" (<b>All</b>)।</p>",
          hg: "<p>Housing society ka register. \"Is <b>Aadhaar number</b> wala maalik dhoondho\": theek ek hona chahiye, do hon to data kharaab hai (<b>Single</b>). \"Sharma naam ka <b>koi ek</b> niwaasi do\" (<b>First</b>). \"Kya <b>kisi</b> ke paas electric car hai?\" Pehli haan par ruk jaate ho (<b>Any</b>). \"Kya <b>sabne</b> maintenance bhar di?\" (<b>All</b>).</p>"
        },
        focus: {
          caption: {
            en: "What each call does when nothing matches",
            hi: "कुछ न मिले तो हर call क्या करता है",
            hg: "Kuch na mile to har call kya karta hai"
          },
          src: "tickets.First(t => t.Id == 999);              // throws InvalidOperationException\ntickets.FirstOrDefault(t => t.Id == 999);     // null\ntickets.Single(t => t.Id == 999);             // throws (zero matches)\ntickets.SingleOrDefault(t => t.Id == 999);    // null\ntickets.Any(t => t.Id == 999);                // false",
          check: "none"
        },
        lines: [
          {
            code: "var urgentOpen = tickets.OrderBy(t => t.Priority).ThenBy(t => t.Id).First(t => t.Status == \"Open\");",
            note: {
              en: "<code>First</code> after a sort means \"the best one\". Here: the most urgent open ticket, #501. Without <code>OrderBy</code>, \"first\" from a database has no defined meaning.",
              hi: "Sort के बाद <code>First</code> का मतलब है \"सबसे बढ़िया वाला\"। यहाँ: सबसे urgent open ticket, #501। <code>OrderBy</code> के बिना database से \"पहला\" का कोई तय मतलब नहीं होता।",
              hg: "Sort ke baad <code>First</code> ka matlab hai \"sabse badhiya wala\". Yahan: sabse urgent open ticket, #501. <code>OrderBy</code> ke bina database se \"pehla\" ka koi tay matlab nahi hota."
            }
          },
          {
            code: "SupportTicket? missing = tickets.FirstOrDefault(t => t.Id == 999);",
            note: {
              en: "\"Not found\" is a normal case here, so we use <code>FirstOrDefault</code> and get <code>null</code>. Note the <code>?</code> on the type.",
              hi: "यहाँ \"नहीं मिला\" एक सामान्य बात है, इसलिए <code>FirstOrDefault</code> लेते हैं और <code>null</code> मिलता है। Type पर <code>?</code> देखो।",
              hg: "Yahan \"nahi mila\" ek saamaanya baat hai, isliye <code>FirstOrDefault</code> lete hain aur <code>null</code> milta hai. Type par <code>?</code> dekho."
            }
          },
          {
            code: "Console.WriteLine($\"Single #503: {tickets.Single(t => t.Id == 503).Issue}\");",
            note: {
              en: "<code>Single</code> on a unique key: exactly one ticket has Id 503, so it works. If it ever matched two, you would get an exception, which is what you want for corrupt data.",
              hi: "Unique key पर <code>Single</code>: Id 503 वाला ठीक एक ticket है, इसलिए चलता है। कभी दो मिलें तो exception आएगा, और corrupt data के लिए यही चाहिए।",
              hg: "Unique key par <code>Single</code>: Id 503 wala theek ek ticket hai, isliye chalta hai. Kabhi do milein to exception aayega, aur corrupt data ke liye yahi chahiye."
            }
          },
          {
            code: "tickets.Single(t => t.Priority == 1);",
            note: {
              en: "Priority is <b>not</b> unique: three tickets match, so <code>Single</code> throws. We catch it only to show the message.",
              hi: "Priority <b>unique नहीं</b> है: तीन tickets मेल खाते हैं, इसलिए <code>Single</code> exception फेंकता है। हम उसे सिर्फ़ message दिखाने के लिए पकड़ते हैं।",
              hg: "Priority <b>unique nahi</b> hai: teen tickets mel khaate hain, isliye <code>Single</code> exception phenkta hai. Hum use sirf message dikhane ke liye pakadte hain."
            }
          },
          {
            code: "Console.WriteLine($\"Any urgent: {tickets.Any(t => t.Priority == 1)}\");",
            note: {
              en: "<code>Any</code> stops at the first match and answers \"is there at least one?\". Prefer it to <code>Count() &gt; 0</code>, which counts everything.",
              hi: "<code>Any</code> पहले match पर रुक जाता है और \"कम से कम एक है?\" का जवाब देता है। <code>Count() &gt; 0</code> की जगह इसे लो, वह सब कुछ गिनता है।",
              hg: "<code>Any</code> pehle match par ruk jaata hai aur \"kam se kam ek hai?\" ka jawaab deta hai. <code>Count() &gt; 0</code> ki jagah ise lo, woh sab kuch ginta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using <code>First()</code> or <code>Single()</code> when \"not found\" is normal. You get an exception instead of a clean 404. Use the <code>...OrDefault()</code> version and check for <code>null</code>.</li><li>Using <code>Single()</code> on a column that is not unique. It works in testing and throws in production. Also, <code>SingleOrDefault()</code> still throws on duplicates.</li><li>Writing <code>Count() &gt; 0</code> instead of <code>Any()</code> on a lazy or EF Core query: it counts everything just to answer yes or no. (On a <code>List</code>, use the <code>Count</code> property.)</li></ul>",
          hi: "<ul><li>जब \"नहीं मिला\" सामान्य बात हो तब <code>First()</code> या <code>Single()</code> इस्तेमाल करना। साफ़ 404 की जगह exception मिलता है। <code>...OrDefault()</code> version लो और <code>null</code> जाँचो।</li><li>जो column unique नहीं उस पर <code>Single()</code> लगाना। Testing में चलता है और production में फेंकता है। साथ ही, <code>SingleOrDefault()</code> duplicates पर फिर भी फेंकता है।</li><li>Lazy या EF Core query पर <code>Any()</code> की जगह <code>Count() &gt; 0</code> लिखना: सिर्फ़ हाँ-नहीं के लिए वह सब कुछ गिनता है। (<code>List</code> पर <code>Count</code> property लो।)</li></ul>",
          hg: "<ul><li>Jab \"nahi mila\" saamaanya baat ho tab <code>First()</code> ya <code>Single()</code> use karna. Saaf 404 ki jagah exception milta hai. <code>...OrDefault()</code> version lo aur <code>null</code> jaancho.</li><li>Jo column unique nahi us par <code>Single()</code> lagana. Testing mein chalta hai aur production mein phenkta hai. Saath hi, <code>SingleOrDefault()</code> duplicates par phir bhi phenkta hai.</li><li>Lazy ya EF Core query par <code>Any()</code> ki jagah <code>Count() &gt; 0</code> likhna: sirf haan-nahi ke liye woh sab kuch ginta hai. (<code>List</code> par <code>Count</code> property lo.)</li></ul>"
        },
        whenToUse: {
          en: "<p><code>Single</code> / <code>SingleOrDefault</code> for lookups by a unique key, when duplicates mean corrupted data. <code>FirstOrDefault</code> plus a null check when \"not found\" is normal. <code>First</code> after <code>OrderBy</code> for \"the best one\". <code>Any</code> for \"does one exist?\", <code>All</code> for \"does every item pass?\" (it returns <code>true</code> for an empty sequence). The Deep Dive covers the value-type trap, empty sequences and <code>MinBy</code>/<code>MaxBy</code>.</p>",
          hi: "<p>Unique key से lookup के लिए <code>Single</code> / <code>SingleOrDefault</code>, जब duplicates का मतलब corrupt data हो। \"नहीं मिला\" सामान्य हो तब <code>FirstOrDefault</code> और null की जाँच। \"सबसे बढ़िया वाला\" के लिए <code>OrderBy</code> के बाद <code>First</code>। \"कोई है?\" के लिए <code>Any</code>, \"क्या हर item पास है?\" के लिए <code>All</code> (ख़ाली sequence पर यह <code>true</code> देता है)। Value-type का जाल, ख़ाली sequences और <code>MinBy</code>/<code>MaxBy</code> Deep Dive में हैं।</p>",
          hg: "<p>Unique key se lookup ke liye <code>Single</code> / <code>SingleOrDefault</code>, jab duplicates ka matlab corrupt data ho. \"Nahi mila\" saamaanya ho tab <code>FirstOrDefault</code> aur null ki jaanch. \"Sabse badhiya wala\" ke liye <code>OrderBy</code> ke baad <code>First</code>. \"Koi hai?\" ke liye <code>Any</code>, \"kya har item pass hai?\" ke liye <code>All</code> (khaali sequence par ye <code>true</code> deta hai). Value-type ka jaal, khaali sequences aur <code>MinBy</code>/<code>MaxBy</code> Deep Dive mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Print whether any ticket is assigned to <b>Divya</b>, and the issue of Neha's first ticket (lowest Id), using <code>FirstOrDefault</code> and a null check. Expected: <code>Divya has tickets: False</code> then <code>Neha's first ticket: Slow internet</code>.</p>",
            hi: "<p>Print करो कि <b>Divya</b> को कोई ticket assigned है या नहीं, और Neha के पहले ticket (सबसे छोटा Id) का issue, <code>FirstOrDefault</code> और null जाँच से। अपेक्षित: <code>Divya has tickets: False</code> फिर <code>Neha's first ticket: Slow internet</code>।</p>",
            hg: "<p>Print karo ki <b>Divya</b> ko koi ticket assigned hai ya nahi, aur Neha ke pehle ticket (sabse chhota Id) ka issue, <code>FirstOrDefault</code> aur null jaanch se. Apekshit: <code>Divya has tickets: False</code> phir <code>Neha's first ticket: Slow internet</code>.</p>"
          },
          hint: {
            en: "<p><code>Any(t =&gt; t.Agent == \"Divya\")</code> for the first line. For the second, <code>OrderBy(t =&gt; t.Id).FirstOrDefault(t =&gt; t.Customer == \"Neha\")</code>.</p>",
            hi: "<p>पहली line के लिए <code>Any(t =&gt; t.Agent == \"Divya\")</code>। दूसरी के लिए <code>OrderBy(t =&gt; t.Id).FirstOrDefault(t =&gt; t.Customer == \"Neha\")</code>।</p>",
            hg: "<p>Pehli line ke liye <code>Any(t =&gt; t.Agent == \"Divya\")</code>. Doosri ke liye <code>OrderBy(t =&gt; t.Id).FirstOrDefault(t =&gt; t.Customer == \"Neha\")</code>.</p>"
          },
          solution: {
            caption: {
              en: "Solution: Any and FirstOrDefault",
              hi: "हल: Any और FirstOrDefault",
              hg: "Solution: Any aur FirstOrDefault"
            },
            src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3),\n    new(505, \"Asha\", \"Refund pending\", \"Closed\", \"Meena\", 2),\n    new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3),\n    new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2),\n    new(508, \"Asha\", \"Slow internet\", \"Open\", \"Meena\", 1)\n};\n\nbool hasDivya = tickets.Any(t => t.Agent == \"Divya\");\nvar neha = tickets.OrderBy(t => t.Id).FirstOrDefault(t => t.Customer == \"Neha\");\n\nConsole.WriteLine($\"Divya has tickets: {hasDivya}\");\nConsole.WriteLine(neha is null ? \"Neha has no tickets\" : $\"Neha's first ticket: {neha.Issue}\");\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
            check: "run",
            expected: "Divya has tickets: False\nNeha's first ticket: Slow internet"
          }
        },
        quiz: {
          q: {
            en: "Ticket Id is unique, and the ticket you look up may not exist. Which is the best code?",
            hi: "Ticket Id unique है, और जो ticket आप ढूँढ रहे हो वह शायद न हो। सबसे अच्छा code कौन-सा है?",
            hg: "Ticket Id unique hai, aur jo ticket aap dhoondh rahe ho woh shaayad na ho. Sabse achha code kaunsa hai?"
          },
          options: [
            {
              en: "<code>tickets.Single(t =&gt; t.Id == id)</code>",
              hi: "<code>tickets.Single(t =&gt; t.Id == id)</code> लिखना",
              hg: "<code>tickets.Single(t =&gt; t.Id == id)</code> likhna"
            },
            {
              en: "<code>tickets.First(t =&gt; t.Id == id)</code>",
              hi: "<code>tickets.First(t =&gt; t.Id == id)</code> लिखना",
              hg: "<code>tickets.First(t =&gt; t.Id == id)</code> likhna"
            },
            {
              en: "<code>tickets.Any(t =&gt; t.Id == id)</code> and use its result as the ticket",
              hi: "<code>tickets.Any(t =&gt; t.Id == id)</code> लिखकर उसके नतीजे को ही ticket मानना",
              hg: "<code>tickets.Any(t =&gt; t.Id == id)</code> likhkar uske nateeje ko hi ticket maanna"
            },
            {
              en: "<code>SingleOrDefault(...)</code> and check the result for <code>null</code>",
              hi: "<code>SingleOrDefault(...)</code> लिखकर नतीजे में <code>null</code> जाँचना",
              hg: "<code>SingleOrDefault(...)</code> likhkar nateeje mein <code>null</code> jaanchna"
            }
          ],
          answer: 3,
          explain: {
            en: "<p><code>Single</code> and <code>First</code> throw when nothing matches, and <code>Any</code> returns only a <code>bool</code>, not a ticket. <code>SingleOrDefault</code> (or <code>FirstOrDefault</code>) returns <code>null</code> for \"not found\", and <code>SingleOrDefault</code> also protects you if the Id is ever duplicated.</p>",
            hi: "<p>कुछ न मिलने पर <code>Single</code> और <code>First</code> exception फेंकते हैं, और <code>Any</code> सिर्फ़ <code>bool</code> लौटाता है, ticket नहीं। <code>SingleOrDefault</code> (या <code>FirstOrDefault</code>) \"नहीं मिला\" पर <code>null</code> लौटाता है, और <code>SingleOrDefault</code> कभी Id दोहराया जाए तब भी आपको बचाता है।</p>",
            hg: "<p>Kuch na milne par <code>Single</code> aur <code>First</code> exception phenkte hain, aur <code>Any</code> sirf <code>bool</code> lautaata hai, ticket nahi. <code>SingleOrDefault</code> (ya <code>FirstOrDefault</code>) \"nahi mila\" par <code>null</code> lautaata hai, aur <code>SingleOrDefault</code> kabhi Id dohraya jaaye tab bhi aapko bachaata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>First</code> throws on none; <code>Single</code> throws on none or many; <code>...OrDefault</code> returns <code>null</code> on none (but <code>SingleOrDefault</code> still throws on duplicates).</li><li><code>Any</code> stops at the first match; prefer it to <code>Count() &gt; 0</code>.</li><li><code>All</code> checks every item and is <code>true</code> for an empty sequence.</li></ul>",
          hi: "<ul><li><code>First</code> कुछ न मिलने पर फेंकता है; <code>Single</code> शून्य या कई पर फेंकता है; <code>...OrDefault</code> कुछ न मिलने पर <code>null</code> देता है (पर <code>SingleOrDefault</code> duplicates पर फिर भी फेंकता है)।</li><li><code>Any</code> पहले match पर रुकता है; <code>Count() &gt; 0</code> की जगह इसे लो।</li><li><code>All</code> हर item जाँचता है और ख़ाली sequence पर <code>true</code> देता है।</li></ul>",
          hg: "<ul><li><code>First</code> kuch na milne par phenkta hai; <code>Single</code> shoonya ya kai par phenkta hai; <code>...OrDefault</code> kuch na milne par <code>null</code> deta hai (par <code>SingleOrDefault</code> duplicates par phir bhi phenkta hai).</li><li><code>Any</code> pehle match par rukta hai; <code>Count() &gt; 0</code> ki jagah ise lo.</li><li><code>All</code> har item jaanchta hai aur khaali sequence par <code>true</code> deta hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "First, FirstOrDefault, Single (and its failure), Any, Count and All",
            hi: "First, FirstOrDefault, Single (और उसकी विफलता), Any, Count और All",
            hg: "First, FirstOrDefault, Single (aur uski vifalta), Any, Count aur All"
          },
          src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3),\n    new(505, \"Asha\", \"Refund pending\", \"Closed\", \"Meena\", 2),\n    new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3),\n    new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2),\n    new(508, \"Asha\", \"Slow internet\", \"Open\", \"Meena\", 1)\n};\n\n// First after a sort = \"the best one\"\nvar urgentOpen = tickets.OrderBy(t => t.Priority).ThenBy(t => t.Id).First(t => t.Status == \"Open\");\nConsole.WriteLine($\"Most urgent open ticket: #{urgentOpen.Id}\");\n\n// FirstOrDefault: \"not found\" is normal here, so we get null instead of an exception\nSupportTicket? missing = tickets.FirstOrDefault(t => t.Id == 999);\nConsole.WriteLine(missing is null ? \"Ticket 999 not found -> return 404\" : $\"Found #{missing.Id}\");\n\n// Single: exactly one match, otherwise an exception. Right for a unique Id.\nConsole.WriteLine($\"Single #503: {tickets.Single(t => t.Id == 503).Issue}\");\ntry\n{\n    tickets.Single(t => t.Priority == 1);   // Priority is not unique: 3 matches\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine($\"Single failed: {ex.Message}\");\n}\n\n// Yes/no questions\nConsole.WriteLine($\"Any urgent: {tickets.Any(t => t.Priority == 1)}\");\nConsole.WriteLine($\"Open count: {tickets.Count(t => t.Status == \"Open\")}\");\nConsole.WriteLine($\"All have an agent: {tickets.All(t => t.Agent.Length > 0)}\");\nConsole.WriteLine($\"List size: {tickets.Count}\");\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
          check: "run",
          expected: "Most urgent open ticket: #501\nTicket 999 not found -> return 404\nSingle #503: SIM not active\nSingle failed: Sequence contains more than one matching element\nAny urgent: True\nOpen count: 5\nAll have an agent: True\nList size: 8"
        }
      ]
    },
    {
      id: "deferred-details",
      depth: "detailed",
      title: {
        en: "Deferred execution in depth: streaming, short-circuit, captured variables, exceptions",
        hi: "Deferred execution गहराई से: streaming, short-circuit, captured variables, exceptions",
        hg: "Deferred execution gehraai se: streaming, short-circuit, captured variables, exceptions"
      },
      body: {
        en: "<ul>\n<li><code>Where</code>, <code>Select</code> and friends return an <b>iterator object</b> that remembers the source and your lambda. No item is read until someone calls <code>GetEnumerator()</code>/<code>MoveNext()</code> — that is what <code>foreach</code>, <code>ToList()</code>, <code>Count()</code> and <code>First()</code> do.</li>\n<li><b>Item by item</b>: in a <code>Where(...).Select(...)</code> chain, item 1 goes through <code>Where</code> and then <code>Select</code> before item 2 is even read. It is a pipeline, not \"filter everything, then project everything\".</li>\n<li><b>Short-circuit</b>: <code>First()</code>, <code>Any()</code>, <code>Take(n)</code> stop pulling items as soon as they have their answer. <code>Count()</code>, <code>Sum()</code> and <code>ToList()</code> read to the end.</li>\n<li><b>Captured variables</b>: the lambda captures the <b>variable</b>, not its value (a closure, Day 2). If you change <code>minLength</code> after building the query, the next run uses the new value.</li>\n<li><b>Source changes</b>: items added to a <code>List</code> before enumeration are seen. Changing the list <b>during</b> enumeration throws <code>InvalidOperationException</code> (\"Collection was modified\").</li>\n<li><b>Exceptions are deferred too</b>: a <code>DivideByZeroException</code> inside <code>Select</code> appears during the <code>foreach</code>, maybe after some items were already processed. (Argument checks such as a <code>null</code> source are eager: <code>ArgumentNullException</code> at the call.)</li>\n<li><b>Streaming vs buffering</b>: <code>Where</code>/<code>Select</code> pass items one at a time; <code>OrderBy</code>, <code>GroupBy</code> and <code>Reverse</code> must read the <b>whole</b> source before giving the first item.</li>\n</ul>\n<p><b>When to use:</b> build queries step by step (<code>if (city != null) query = query.Where(...)</code>) and let them run once at the end; stream large sequences with <code>foreach</code>. <b>When not:</b> do not return a deferred query that depends on something that will be gone (a disposed <code>DbContext</code>, a closed file) — materialize it first; and do not rely on \"when exactly the lambda runs\" for side effects like logging or counters in real code.</p>",
        hi: "<ul>\n<li><code>Where</code>, <code>Select</code> वगैरह एक <b>iterator object</b> return करते हैं जो source और आपका lambda याद रखता है। जब तक कोई <code>GetEnumerator()</code>/<code>MoveNext()</code> call नहीं करता, एक भी item नहीं पढ़ा जाता — <code>foreach</code>, <code>ToList()</code>, <code>Count()</code> और <code>First()</code> यही करते हैं।</li>\n<li><b>Item by item</b>: <code>Where(...).Select(...)</code> chain में item 1, <code>Where</code> और फिर <code>Select</code> से गुज़रता है, उसके बाद item 2 पढ़ा जाता है। यह pipeline है, \"पहले सब filter, फिर सब project\" नहीं।</li>\n<li><b>Short-circuit</b>: <code>First()</code>, <code>Any()</code>, <code>Take(n)</code> जवाब मिलते ही items लेना बंद कर देते हैं। <code>Count()</code>, <code>Sum()</code> और <code>ToList()</code> आख़िर तक पढ़ते हैं।</li>\n<li><b>Captured variables</b>: lambda <b>variable</b> को capture करता है, उसकी value को नहीं (closure, Day 2)। Query बनाने के बाद <code>minLength</code> बदलो, तो अगली बार नई value use होगी।</li>\n<li><b>Source में बदलाव</b>: enumeration से पहले <code>List</code> में जोड़े गए items दिखते हैं। Enumeration के <b>दौरान</b> list बदलने पर <code>InvalidOperationException</code> (\"Collection was modified\") आता है।</li>\n<li><b>Exceptions भी deferred हैं</b>: <code>Select</code> के अंदर का <code>DivideByZeroException</code> <code>foreach</code> के दौरान आता है, शायद कुछ items process होने के बाद। (Argument checks जैसे <code>null</code> source तुरंत होते हैं: call पर ही <code>ArgumentNullException</code>।)</li>\n<li><b>Streaming बनाम buffering</b>: <code>Where</code>/<code>Select</code> items एक-एक करके आगे भेजते हैं; <code>OrderBy</code>, <code>GroupBy</code> और <code>Reverse</code> को पहला item देने से पहले <b>पूरा</b> source पढ़ना पड़ता है।</li>\n</ul>\n<p><b>कब use करें:</b> queries step by step बनाओ (<code>if (city != null) query = query.Where(...)</code>) और आख़िर में एक बार चलाओ; बड़े sequences को <code>foreach</code> से stream करो। <b>कब नहीं:</b> ऐसी deferred query return मत करो जो किसी ऐसी चीज़ पर depend करे जो ख़त्म हो जाएगी (disposed <code>DbContext</code>, बंद file) — पहले materialize करो; और real code में logging या counters जैसे side effects के लिए इस पर भरोसा मत करो कि lambda \"ठीक कब\" चलेगा।</p>",
        hg: "<ul>\n<li><code>Where</code>, <code>Select</code> waghera ek <b>iterator object</b> return karte hain jo source aur aapka lambda yaad rakhta hai. Jab tak koi <code>GetEnumerator()</code>/<code>MoveNext()</code> call nahi karta, ek bhi item nahi padha jaata — <code>foreach</code>, <code>ToList()</code>, <code>Count()</code> aur <code>First()</code> yahi karte hain.</li>\n<li><b>Item by item</b>: <code>Where(...).Select(...)</code> chain mein item 1, <code>Where</code> aur phir <code>Select</code> se guzarta hai, uske baad item 2 padha jaata hai. Yeh pipeline hai, \"pehle sab filter, phir sab project\" nahi.</li>\n<li><b>Short-circuit</b>: <code>First()</code>, <code>Any()</code>, <code>Take(n)</code> jawaab milte hi items lena band kar dete hain. <code>Count()</code>, <code>Sum()</code> aur <code>ToList()</code> aakhir tak padhte hain.</li>\n<li><b>Captured variables</b>: lambda <b>variable</b> ko capture karta hai, uski value ko nahi (closure, Day 2). Query banane ke baad <code>minLength</code> badlo, to agli baar nayi value use hogi.</li>\n<li><b>Source mein badlaav</b>: enumeration se pehle <code>List</code> mein jode gaye items dikhte hain. Enumeration ke <b>dauraan</b> list badalne par <code>InvalidOperationException</code> (\"Collection was modified\") aata hai.</li>\n<li><b>Exceptions bhi deferred hain</b>: <code>Select</code> ke andar ka <code>DivideByZeroException</code> <code>foreach</code> ke dauraan aata hai, shayad kuch items process hone ke baad. (Argument checks jaise <code>null</code> source turant hote hain: call par hi <code>ArgumentNullException</code>.)</li>\n<li><b>Streaming vs buffering</b>: <code>Where</code>/<code>Select</code> items ek-ek karke aage bhejte hain; <code>OrderBy</code>, <code>GroupBy</code> aur <code>Reverse</code> ko pehla item dene se pehle <b>poora</b> source padhna padta hai.</li>\n</ul>\n<p><b>Kab use karein:</b> queries step by step banao (<code>if (city != null) query = query.Where(...)</code>) aur aakhir mein ek baar chalao; bade sequences ko <code>foreach</code> se stream karo. <b>Kab nahi:</b> aisi deferred query return mat karo jo kisi aisi cheez par depend kare jo khatam ho jaayegi (disposed <code>DbContext</code>, band file) — pehle materialize karo; aur real code mein logging ya counters jaise side effects ke liye is par bharosa mat karo ki lambda \"theek kab\" chalega.</p>"
      },
      code: [
        {
          caption: {
            en: "Count the lambda calls: nothing at build time, new data and new variable values at run time, ToList as a snapshot, First stops early",
            hi: "Lambda calls गिनो: बनाते समय कुछ नहीं, चलते समय नया data और नई values, ToList एक snapshot, First जल्दी रुकता है",
            hg: "Lambda calls gino: banate samay kuch nahi, chalte samay naya data aur nayi values, ToList ek snapshot, First jaldi rukta hai"
          },
          check: "run",
          expected: "Built. checks = 0\nforeach got sugar\nAfter foreach: checks = 4\nAfter ToList: checks = 8\nsnapshot = [sugar], live count = 2, checks = 13\nFirst = sugar, checks = 17",
          src: "var stock = new List<string> { \"rice\", \"dal\", \"atta\" };\nint minLength = 4;\nint checks = 0;\n\n// 1. Building the query runs nothing\nvar query = stock.Where(item =>\n{\n    checks++;\n    return item.Length >= minLength;\n});\nConsole.WriteLine($\"Built. checks = {checks}\");\n\n// 2. Changes BEFORE enumeration are visible to the query\nstock.Add(\"sugar\");\nminLength = 5;\n\n// 3. foreach runs it with today's data and today's minLength\nforeach (var item in query)\n    Console.WriteLine($\"foreach got {item}\");\nConsole.WriteLine($\"After foreach: checks = {checks}\");\n\n// 4. ToList() runs it AGAIN and keeps a copy\nList<string> snapshot = query.ToList();\nConsole.WriteLine($\"After ToList: checks = {checks}\");\n\nstock.Add(\"jaggery\");\n// the copy does not change; the query sees the new item (and runs a third time)\nConsole.WriteLine($\"snapshot = [{string.Join(\", \", snapshot)}], live count = {query.Count()}, checks = {checks}\");\n\n// 5. First() stops at the first match: only 4 more checks, not 5\nConsole.WriteLine($\"First = {query.First()}, checks = {checks}\");"
        }
      ]
    },
    {
      id: "iqueryable-details",
      depth: "detailed",
      title: {
        en: "IQueryable details: the three parts, switching points and the Func trap",
        hi: "IQueryable की बारीकियाँ: तीन हिस्से, switching points और Func का जाल",
        hg: "IQueryable ki baariqiyan: teen hisse, switching points aur Func ka jaal"
      },
      body: {
        en: "<p><b>Analogy — a written order slip vs a sealed machine:</b> if you write your order on a slip in plain words (\"basmati, 5 bags\"), the shopkeeper can <b>read</b> it and pack only that. If instead you hand him a <b>sealed machine</b> that answers yes/no for each bag, he cannot read what is inside — so he must send you <b>everything</b>, and you run the machine at home. An <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> is the readable slip; a <code>Func&lt;T,bool&gt;</code> is the sealed machine.</p>\n<ul>\n<li><code>IQueryable&lt;T&gt;</code> has three parts: <code>Expression</code> (the tree so far), <code>ElementType</code>, and <code>Provider</code>. Each <code>Queryable</code> operator just <b>adds a node</b> to the tree. When you enumerate, the provider translates and executes it.</li>\n<li><b>Switching points</b>: <code>AsEnumerable()</code> = \"from here on, LINQ to Objects\" (still lazy, rows stream in); <code>ToList()</code> = run now and copy everything; <code>AsQueryable()</code> on a list = wraps it in an in-memory <code>IQueryable</code> (useful in tests and for dynamic queries, not for speed).</li>\n</ul>\n<p><b>When to use:</b> <code>Expression&lt;Func&lt;...&gt;&gt;</code> parameters for filters that must run in the database (specifications, repository filters); <code>AsEnumerable()</code> when the last step needs a C# method SQL cannot run. <b>When not:</b> do not take <code>Expression</code> parameters for in-memory-only code (a plain <code>Func</code> is simpler and faster), and do not call <code>AsEnumerable()</code>/<code>ToList()</code> before the filters that the database could have done.</p>",
        hi: "<p><b>Analogy — लिखी हुई order slip बनाम बंद machine:</b> अगर आप अपना order slip पर साफ़ शब्दों में लिखो (\"basmati, 5 बोरे\"), तो दुकानदार उसे <b>पढ़</b> सकता है और सिर्फ़ वही pack करता है। अगर उसकी जगह आप उसे एक <b>बंद machine</b> दे दो जो हर बोरे के लिए हाँ/ना बताती है, तो वो अंदर क्या है पढ़ नहीं सकता — इसलिए उसे आपको <b>सब कुछ</b> भेजना पड़ता है, और machine आप घर पर चलाते हो। <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> पढ़ने लायक slip है; <code>Func&lt;T,bool&gt;</code> बंद machine है।</p>\n<ul>\n<li><code>IQueryable&lt;T&gt;</code> के तीन हिस्से हैं: <code>Expression</code> (अब तक का tree), <code>ElementType</code>, और <code>Provider</code>। हर <code>Queryable</code> operator बस tree में एक <b>node जोड़ता है</b>। Enumerate करने पर provider उसे translate करके चलाता है।</li>\n<li><b>Switching points</b>: <code>AsEnumerable()</code> = \"यहाँ से आगे LINQ to Objects\" (अब भी lazy, rows stream होकर आती हैं); <code>ToList()</code> = अभी चलाओ और सब copy करो; list पर <code>AsQueryable()</code> = उसे in-memory <code>IQueryable</code> में wrap करता है (tests और dynamic queries के लिए काम का, speed के लिए नहीं)।</li>\n</ul>\n<p><b>कब use करें:</b> जो filters database में चलने चाहिए (specifications, repository filters), उनके लिए <code>Expression&lt;Func&lt;...&gt;&gt;</code> parameters; जब आख़िरी step में ऐसा C# method चाहिए जो SQL नहीं चला सकता, तब <code>AsEnumerable()</code>। <b>कब नहीं:</b> सिर्फ़ in-memory code के लिए <code>Expression</code> parameters मत लो (plain <code>Func</code> आसान और तेज़ है), और जो filters database कर सकता था, उनसे पहले <code>AsEnumerable()</code>/<code>ToList()</code> मत लगाओ।</p>",
        hg: "<p><b>Analogy — likhi hui order slip vs band machine:</b> agar aap apna order slip par saaf shabdon mein likho (\"basmati, 5 bore\"), to dukaandaar use <b>padh</b> sakta hai aur sirf wahi pack karta hai. Agar uski jagah aap use ek <b>band machine</b> de do jo har bore ke liye haan/na batati hai, to woh andar kya hai padh nahi sakta — isliye use aapko <b>sab kuch</b> bhejna padta hai, aur machine aap ghar par chalate ho. <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> padhne laayak slip hai; <code>Func&lt;T,bool&gt;</code> band machine hai.</p>\n<ul>\n<li><code>IQueryable&lt;T&gt;</code> ke teen hisse hain: <code>Expression</code> (ab tak ka tree), <code>ElementType</code>, aur <code>Provider</code>. Har <code>Queryable</code> operator bas tree mein ek <b>node jodta hai</b>. Enumerate karne par provider use translate karke chalata hai.</li>\n<li><b>Switching points</b>: <code>AsEnumerable()</code> = \"yahan se aage LINQ to Objects\" (ab bhi lazy, rows stream hokar aati hain); <code>ToList()</code> = abhi chalao aur sab copy karo; list par <code>AsQueryable()</code> = use in-memory <code>IQueryable</code> mein wrap karta hai (tests aur dynamic queries ke liye kaam ka, speed ke liye nahi).</li>\n</ul>\n<p><b>Kab use karein:</b> jo filters database mein chalne chahiye (specifications, repository filters), unke liye <code>Expression&lt;Func&lt;...&gt;&gt;</code> parameters; jab aakhri step mein aisa C# method chahiye jo SQL nahi chala sakta, tab <code>AsEnumerable()</code>. <b>Kab nahi:</b> sirf in-memory code ke liye <code>Expression</code> parameters mat lo (plain <code>Func</code> aasaan aur tez hai), aur jo filters database kar sakta tha, unse pehle <code>AsEnumerable()</code>/<code>ToList()</code> mat lagao.</p>"
      },
      code: [
        {
          caption: {
            en: "The Func trap and the switching points, on an in-memory IQueryable",
            hi: "Func का जाल और switching points, in-memory IQueryable पर",
            hg: "Func ka jaal aur switching points, in-memory IQueryable par"
          },
          src: "using System.Linq.Expressions;\n\nvar tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1)\n};\nIQueryable<SupportTicket> source = tickets.AsQueryable();\n\n// The three parts of an IQueryable\nConsole.WriteLine($\"ElementType: {source.ElementType.Name}, Expression starts as: {source.Expression.NodeType}\");\nConsole.WriteLine($\"After Where it is: {source.Where(t => t.Priority == 1).Expression.NodeType}\");\n\n// The trap: a Func parameter binds to Enumerable.Where, so the filter runs in memory\nConsole.WriteLine($\"FindWithFunc is IQueryable: {FindWithFunc(source, t => t.Priority == 1) is IQueryable<SupportTicket>}\");\nConsole.WriteLine($\"FindWithExpression is IQueryable: {FindWithExpression(source, t => t.Priority == 1) is IQueryable<SupportTicket>}\");\n\n// Switching point: after AsEnumerable() every operator is LINQ to Objects\nConsole.WriteLine($\"After AsEnumerable: {source.AsEnumerable().Where(t => t.Priority == 1) is IQueryable<SupportTicket>}\");\n\nstatic IEnumerable<SupportTicket> FindWithFunc(IQueryable<SupportTicket> src, Func<SupportTicket, bool> filter)\n    => src.Where(filter);\n\nstatic IQueryable<SupportTicket> FindWithExpression(IQueryable<SupportTicket> src, Expression<Func<SupportTicket, bool>> filter)\n    => src.Where(filter);\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
          check: "run",
          expected: "ElementType: SupportTicket, Expression starts as: Constant\nAfter Where it is: Call\nFindWithFunc is IQueryable: False\nFindWithExpression is IQueryable: True\nAfter AsEnumerable: False"
        }
      ]
    },
    {
      id: "selectmany-zip",
      depth: "detailed",
      title: {
        en: "SelectMany and Zip: flatten and pair",
        hi: "SelectMany और Zip: समतल करना और जोड़ी बनाना",
        hg: "SelectMany aur Zip: samtal karna aur jodi banana"
      },
      body: {
        en: "<p><b>Analogy — wedding invitations vs plates:</b> you sent invitation cards to families; each card covers several people. The card-printing shop needs <b>one line per card</b> — that is <b>Select</b> (10 cards → 10 lines). The caterer needs <b>one plate per person</b> — open every card and list every member — that is <b>SelectMany</b> (10 cards → maybe 37 people). Same data, different question.</p>\n<ul>\n<li><b>Select</b> projects <b>each</b> item into a new shape: a property, a DTO, an anonymous type <code>new { o.Id, Total = ... }</code>, or a tuple. Output count = input count. <code>Select((x, i) =&gt; ...)</code> also gives the index.</li>\n<li>If the projection returns a collection, <code>Select</code> gives a <b>nested</b> sequence (<code>IEnumerable&lt;string[]&gt;</code>), and you would need two <code>foreach</code> loops.</li>\n<li><b>SelectMany</b> projects each item to a collection and <b>flattens</b> them into one sequence. An overload with a <b>result selector</b> keeps the parent too: <code>SelectMany(o =&gt; o.Items, (o, item) =&gt; new { o.Id, item })</code>.</li>\n<li>In <b>query syntax</b>, SelectMany is simply <b>two <code>from</code> clauses</b>: <code>from o in orders from item in o.Items select ...</code>. With unrelated sequences, two <code>from</code>s make a <b>cross join</b> (every pair).</li>\n<li><b>Zip</b> pairs items by position: first with first, second with second — and <b>stops at the shorter</b> sequence. Since .NET Core 3.0 it can return tuples (<code>a.Zip(b)</code>); .NET 6 added a three-sequence version.</li>\n<li>In EF Core, a <code>Select</code> to a DTO also <b>limits the columns</b> in the SQL — a cheap, big win compared to loading full entities.</li>\n</ul>\n<p><b>When to use:</b> <code>Select</code> to shape results (DTOs, view models); <code>SelectMany</code> for \"all X of all Y\" (all order lines of all orders, all roles of all users); <code>Zip</code> to combine two lists that line up by position. <b>When not:</b> do not use <code>Select</code> for side effects (sending emails, updating objects) — it is lazy and may run zero or many times; use <code>foreach</code>. And do not <code>SelectMany</code> over huge child collections when you only need a count — <code>Sum(o =&gt; o.Items.Count)</code> is cheaper.</p>",
        hi: "<p><b>Analogy — शादी के invitation cards बनाम थालियाँ:</b> आपने परिवारों को invitation cards भेजे; हर card में कई लोग आते हैं। Card छापने वाली दुकान को <b>हर card की एक line</b> चाहिए — यह है <b>Select</b> (10 cards → 10 lines)। Caterer को <b>हर इंसान की एक थाली</b> चाहिए — हर card खोलो और हर member list करो — यह है <b>SelectMany</b> (10 cards → शायद 37 लोग)। Data वही, सवाल अलग।</p>\n<ul>\n<li><b>Select</b> <b>हर</b> item को नए shape में project करता है: एक property, DTO, anonymous type <code>new { o.Id, Total = ... }</code>, या tuple। Output count = input count। <code>Select((x, i) =&gt; ...)</code> से index भी मिलता है।</li>\n<li>अगर projection एक collection return करता है, तो <code>Select</code> <b>nested</b> sequence देता है (<code>IEnumerable&lt;string[]&gt;</code>), और आपको दो <code>foreach</code> loops चाहिए होंगे।</li>\n<li><b>SelectMany</b> हर item को एक collection में project करता है और उन्हें एक sequence में <b>flatten</b> कर देता है। <b>Result selector</b> वाला overload parent को भी साथ रखता है: <code>SelectMany(o =&gt; o.Items, (o, item) =&gt; new { o.Id, item })</code>।</li>\n<li><b>Query syntax</b> में SelectMany बस <b>दो <code>from</code> clauses</b> है: <code>from o in orders from item in o.Items select ...</code>। आपस में unrelated sequences पर दो <code>from</code> एक <b>cross join</b> बनाते हैं (हर pair)।</li>\n<li><b>Zip</b> items को position से जोड़ता है: पहला पहले के साथ, दूसरा दूसरे के साथ — और <b>छोटे</b> sequence पर रुक जाता है। .NET Core 3.0 से यह tuples return कर सकता है (<code>a.Zip(b)</code>); .NET 6 में तीन sequences वाला version आया।</li>\n<li>EF Core में DTO वाला <code>Select</code> SQL में <b>columns भी कम</b> कर देता है — पूरी entities load करने के मुकाबले सस्ता और बड़ा फ़ायदा।</li>\n</ul>\n<p><b>कब use करें:</b> results को shape देने (DTOs, view models) के लिए <code>Select</code>; \"सारे Y के सारे X\" के लिए <code>SelectMany</code> (सारे orders की सारी order lines, सारे users के सारे roles); position से line up होने वाली दो lists जोड़ने के लिए <code>Zip</code>। <b>कब नहीं:</b> side effects (emails भेजना, objects update करना) के लिए <code>Select</code> मत use करो — यह lazy है और zero या कई बार चल सकता है; <code>foreach</code> use करो। और जब सिर्फ़ count चाहिए तो बड़ी child collections पर <code>SelectMany</code> मत करो — <code>Sum(o =&gt; o.Items.Count)</code> सस्ता है।</p>",
        hg: "<p><b>Analogy — shaadi ke invitation cards vs thaaliyan:</b> aapne parivaaron ko invitation cards bheje; har card mein kai log aate hain. Card chhaapne wali dukaan ko <b>har card ki ek line</b> chahiye — yeh hai <b>Select</b> (10 cards → 10 lines). Caterer ko <b>har insaan ki ek thaali</b> chahiye — har card kholo aur har member list karo — yeh hai <b>SelectMany</b> (10 cards → shayad 37 log). Data wahi, sawaal alag.</p>\n<ul>\n<li><b>Select</b> <b>har</b> item ko naye shape mein project karta hai: ek property, DTO, anonymous type <code>new { o.Id, Total = ... }</code>, ya tuple. Output count = input count. <code>Select((x, i) =&gt; ...)</code> se index bhi milta hai.</li>\n<li>Agar projection ek collection return karta hai, to <code>Select</code> <b>nested</b> sequence deta hai (<code>IEnumerable&lt;string[]&gt;</code>), aur aapko do <code>foreach</code> loops chahiye honge.</li>\n<li><b>SelectMany</b> har item ko ek collection mein project karta hai aur unhe ek sequence mein <b>flatten</b> kar deta hai. <b>Result selector</b> wala overload parent ko bhi saath rakhta hai: <code>SelectMany(o =&gt; o.Items, (o, item) =&gt; new { o.Id, item })</code>.</li>\n<li><b>Query syntax</b> mein SelectMany bas <b>do <code>from</code> clauses</b> hai: <code>from o in orders from item in o.Items select ...</code>. Aapas mein unrelated sequences par do <code>from</code> ek <b>cross join</b> banate hain (har pair).</li>\n<li><b>Zip</b> items ko position se jodta hai: pehla pehle ke saath, doosra doosre ke saath — aur <b>chhote</b> sequence par ruk jaata hai. .NET Core 3.0 se yeh tuples return kar sakta hai (<code>a.Zip(b)</code>); .NET 6 mein teen sequences wala version aaya.</li>\n<li>EF Core mein DTO wala <code>Select</code> SQL mein <b>columns bhi kam</b> kar deta hai — poori entities load karne ke muqaable sasta aur bada fayda.</li>\n</ul>\n<p><b>Kab use karein:</b> results ko shape dene (DTOs, view models) ke liye <code>Select</code>; \"saare Y ke saare X\" ke liye <code>SelectMany</code> (saare orders ki saari order lines, saare users ke saare roles); position se line up hone wali do lists jodne ke liye <code>Zip</code>. <b>Kab nahi:</b> side effects (emails bhejna, objects update karna) ke liye <code>Select</code> mat use karo — yeh lazy hai aur zero ya kai baar chal sakta hai; <code>foreach</code> use karo. Aur jab sirf count chahiye to badi child collections par <code>SelectMany</code> mat karo — <code>Sum(o =&gt; o.Items.Count)</code> sasta hai.</p>"
      },
      code: [
        {
          caption: {
            en: "Where + Select into an anonymous type; Select (nested) vs SelectMany (flat); result selector; two from clauses; Select with index; Zip",
            hi: "Where + Select से anonymous type; Select (nested) बनाम SelectMany (flat); result selector; दो from clauses; index वाला Select; Zip",
            hg: "Where + Select se anonymous type; Select (nested) vs SelectMany (flat); result selector; do from clauses; index wala Select; Zip"
          },
          check: "run",
          expected: "{ Id = 1, Customer = Asha, ItemCount = 2 }\n{ Id = 3, Customer = Neha, ItemCount = 3 }\nSelect: 3 arrays, SelectMany: 5 items\nAsha:Pen, Asha:Notebook, Neha:Bag, Neha:Pen, Neha:Ink\n1-Notebook, 3-Bag, 3-Ink\n1.Pen 2.Notebook 3.Bag 4.Pen 5.Ink\nMon=120, Tue=90",
          src: "var orders = new List<Order>\n{\n    new(1, \"Asha\", [\"Pen\", \"Notebook\"]),\n    new(2, \"Ravi\", []),\n    new(3, \"Neha\", [\"Bag\", \"Pen\", \"Ink\"])\n};\n\n// Where + Select: filter, then shape each order into an anonymous type\nvar summary = orders\n    .Where(o => o.Items.Length > 0)\n    .Select(o => new { o.Id, o.Customer, ItemCount = o.Items.Length });\nforeach (var s in summary) Console.WriteLine(s);\n\n// Select keeps the nesting (3 arrays); SelectMany flattens (5 items)\nIEnumerable<string[]> nested = orders.Select(o => o.Items);\nIEnumerable<string> flat = orders.SelectMany(o => o.Items);\nConsole.WriteLine($\"Select: {nested.Count()} arrays, SelectMany: {flat.Count()} items\");\n\n// SelectMany with a result selector keeps the parent's data\nvar lines = orders.SelectMany(o => o.Items, (o, item) => $\"{o.Customer}:{item}\");\nConsole.WriteLine(string.Join(\", \", lines));\n\n// Query syntax: two 'from' clauses = SelectMany\nvar lines2 = from o in orders\n             from item in o.Items\n             where item != \"Pen\"\n             select $\"{o.Id}-{item}\";\nConsole.WriteLine(string.Join(\", \", lines2));\n\n// Select with the index overload\nConsole.WriteLine(string.Join(\" \", flat.Select((item, i) => $\"{i + 1}.{item}\")));\n\n// Zip pairs by position and stops at the shorter sequence\nstring[] days = [\"Mon\", \"Tue\", \"Wed\"];\nint[] sales = [120, 90];\nConsole.WriteLine(string.Join(\", \", days.Zip(sales, (d, s) => $\"{d}={s}\")));\n\nrecord Order(int Id, string Customer, string[] Items);"
        }
      ]
    },
    {
      id: "paging-advanced",
      depth: "detailed",
      title: {
        en: "Sorting and paging in depth: stable sort, Order(), keyset paging, Chunk",
        hi: "Sorting और paging गहराई से: stable sort, Order(), keyset paging, Chunk",
        hg: "Sorting aur paging gehraai se: stable sort, Order(), keyset paging, Chunk"
      },
      body: {
        en: "<p><b>Analogy — the school assembly line:</b> the PT teacher says \"line up <b>by class</b>, and inside each class <b>by height</b>\". Class is the main rule (<b>OrderBy</b>), height is the tie-breaker (<b>ThenBy</b>). Two students of the same class and height stay in the order they were already standing — that is a <b>stable</b> sort. Then the photographer takes <b>10 students per photo</b>, frame by frame — that is <b>paging</b>, and it only works if the line does not reshuffle between photos.</p>\n<ul>\n<li><b>Stable</b>: LINQ to Objects <code>OrderBy</code> is a stable sort — equal keys keep their original order. <code>List&lt;T&gt;.Sort()</code> and <code>Array.Sort()</code> are <b>not</b> stable.</li>\n<li>Sorting is <b>buffering</b>: it reads the whole source before giving the first item. For \"the cheapest item\" in memory, <code>MinBy(p =&gt; p.Price)</code> (.NET 6) states the intent directly; modern .NET already runs <code>OrderBy(...).First()</code> as a single pass, so this is a readability choice. In an EF Core query, keep <code>OrderBy(...).First()</code>. For plain values, <code>Order()</code> / <code>OrderDescending()</code> (.NET 7) sort by the value itself.</li>\n<li><b>Deep pages are slow with OFFSET</b>: the database still reads and throws away all skipped rows. <b>Keyset (seek) paging</b> remembers the last key: <code>Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code> — fast at any depth, but no \"jump to page 57\".</li>\n<li><b>Chunk(size)</b> (.NET 6) splits a sequence into arrays of up to <code>size</code> items — handy for batch API calls or bulk inserts.</li>\n</ul>\n<p><b>When to use:</b> <code>OrderBy</code> + <code>ThenBy</code> for any multi-key sort; <code>Skip</code>/<code>Take</code> for admin grids with page numbers; keyset paging for infinite scroll, feeds and large exports; <code>Chunk</code> for batching. <b>When not:</b> do not sort when nobody needs the order (it costs O(n log n)), do not page without a deterministic order, and avoid big <code>Skip</code> values on large tables.</p>",
        hi: "<p><b>Analogy — school assembly की line:</b> PT teacher कहते हैं \"<b>class के हिसाब से</b> line लगाओ, और हर class के अंदर <b>height के हिसाब से</b>\"। Class मुख्य rule है (<b>OrderBy</b>), height tie-breaker है (<b>ThenBy</b>)। एक ही class और एक ही height वाले दो बच्चे उसी order में रहते हैं जिसमें वो पहले से खड़े थे — यही <b>stable</b> sort है। फिर photographer <b>एक photo में 10 बच्चे</b> लेता है, frame by frame — यह <b>paging</b> है, और यह तभी चलता है जब photos के बीच line बदले नहीं।</p>\n<ul>\n<li><b>Stable</b>: LINQ to Objects का <code>OrderBy</code> stable sort है — बराबर keys अपना original order रखती हैं। <code>List&lt;T&gt;.Sort()</code> और <code>Array.Sort()</code> stable <b>नहीं</b> हैं।</li>\n<li>Sorting <b>buffering</b> है: पहला item देने से पहले पूरा source पढ़ता है। Memory में \"सबसे सस्ता item\" के लिए <code>MinBy(p =&gt; p.Price)</code> (.NET 6) इरादा सीधे बताता है; modern .NET <code>OrderBy(...).First()</code> को पहले से एक ही pass में चलाता है, इसलिए यह readability का फ़ैसला है। EF Core query में <code>OrderBy(...).First()</code> ही रखो। Plain values के लिए <code>Order()</code> / <code>OrderDescending()</code> (.NET 7) value से ही sort करते हैं।</li>\n<li><b>OFFSET से गहरे pages धीमे होते हैं</b>: database skip होने वाली सारी rows पढ़कर फेंकता है। <b>Keyset (seek) paging</b> आख़िरी key याद रखता है: <code>Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code> — किसी भी depth पर तेज़, पर \"page 57 पर jump\" नहीं।</li>\n<li><b>Chunk(size)</b> (.NET 6) sequence को ज़्यादा से ज़्यादा <code>size</code> items के arrays में बाँटता है — batch API calls या bulk inserts के लिए काम का।</li>\n</ul>\n<p><b>कब use करें:</b> किसी भी multi-key sort के लिए <code>OrderBy</code> + <code>ThenBy</code>; page numbers वाले admin grids के लिए <code>Skip</code>/<code>Take</code>; infinite scroll, feeds और बड़े exports के लिए keyset paging; batching के लिए <code>Chunk</code>। <b>कब नहीं:</b> जब किसी को order नहीं चाहिए तब sort मत करो (O(n log n) का ख़र्च), deterministic order के बिना paging मत करो, और बड़ी tables पर बड़े <code>Skip</code> values से बचो।</p>",
        hg: "<p><b>Analogy — school assembly ki line:</b> PT teacher kehte hain \"<b>class ke hisaab se</b> line lagao, aur har class ke andar <b>height ke hisaab se</b>\". Class mukhya rule hai (<b>OrderBy</b>), height tie-breaker hai (<b>ThenBy</b>). Ek hi class aur ek hi height wale do bachche usi order mein rehte hain jismein woh pehle se khade the — yahi <b>stable</b> sort hai. Phir photographer <b>ek photo mein 10 bachche</b> leta hai, frame by frame — yeh <b>paging</b> hai, aur yeh tabhi chalta hai jab photos ke beech line badle nahi.</p>\n<ul>\n<li><b>Stable</b>: LINQ to Objects ka <code>OrderBy</code> stable sort hai — barabar keys apna original order rakhti hain. <code>List&lt;T&gt;.Sort()</code> aur <code>Array.Sort()</code> stable <b>nahi</b> hain.</li>\n<li>Sorting <b>buffering</b> hai: pehla item dene se pehle poora source padhta hai. Memory mein \"sabse sasta item\" ke liye <code>MinBy(p =&gt; p.Price)</code> (.NET 6) iraada seedhe batata hai; modern .NET <code>OrderBy(...).First()</code> ko pehle se ek hi pass mein chalata hai, isliye yeh readability ka faisla hai. EF Core query mein <code>OrderBy(...).First()</code> hi rakho. Plain values ke liye <code>Order()</code> / <code>OrderDescending()</code> (.NET 7) value se hi sort karte hain.</li>\n<li><b>OFFSET se gehre pages dheeme hote hain</b>: database skip hone wali saari rows padhkar phenkta hai. <b>Keyset (seek) paging</b> aakhri key yaad rakhta hai: <code>Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code> — kisi bhi depth par tez, par \"page 57 par jump\" nahi.</li>\n<li><b>Chunk(size)</b> (.NET 6) sequence ko zyada se zyada <code>size</code> items ke arrays mein baantta hai — batch API calls ya bulk inserts ke liye kaam ka.</li>\n</ul>\n<p><b>Kab use karein:</b> kisi bhi multi-key sort ke liye <code>OrderBy</code> + <code>ThenBy</code>; page numbers wale admin grids ke liye <code>Skip</code>/<code>Take</code>; infinite scroll, feeds aur bade exports ke liye keyset paging; batching ke liye <code>Chunk</code>. <b>Kab nahi:</b> jab kisi ko order nahi chahiye tab sort mat karo (O(n log n) ka kharcha), deterministic order ke bina paging mat karo, aur badi tables par bade <code>Skip</code> values se bacho.</p>"
      },
      code: [
        {
          caption: {
            en: "Stable sort, Order() for values, keyset paging and Chunk",
            hi: "Stable sort, values के लिए Order(), keyset paging और Chunk",
            hg: "Stable sort, values ke liye Order(), keyset paging aur Chunk"
          },
          src: "var products = new List<Product>\n{\n    new(1, \"Soap\", \"Home\", 40), new(2, \"Rice\", \"Food\", 60), new(3, \"Ghee\", \"Food\", 550),\n    new(4, \"Broom\", \"Home\", 120), new(5, \"Dal\", \"Food\", 120), new(6, \"Bucket\", \"Home\", 120),\n    new(7, \"Atta\", \"Food\", 300)\n};\n\n// Stable sort: Broom, Dal, Bucket (all 120) stay in their original order\nConsole.WriteLine(string.Join(\", \", products.OrderBy(p => p.Price).Select(p => $\"{p.Name}({p.Price})\")));\n\n// .NET 7: Order() sorts simple values by themselves\nint[] marks = [72, 35, 90];\nConsole.WriteLine(string.Join(\", \", marks.Order()));\n\n// Keyset paging: remember the last key you showed, instead of skipping rows\nint lastId = 4;\nvar next = products.Where(p => p.Id > lastId).OrderBy(p => p.Id).Take(2).Select(p => p.Name);\nConsole.WriteLine($\"After Id {lastId}: {string.Join(\", \", next)}\");\n\n// .NET 6: Chunk splits into batches (the last one can be smaller)\nforeach (Product[] batch in products.Chunk(3))\n    Console.WriteLine($\"Batch of {batch.Length}: {string.Join(\",\", batch.Select(p => p.Id))}\");\n\nrecord Product(int Id, string Name, string Category, int Price);",
          check: "run",
          expected: "Soap(40), Rice(60), Broom(120), Dal(120), Bucket(120), Atta(300), Ghee(550)\n35, 72, 90\nAfter Id 4: Dal, Bucket\nBatch of 3: 1,2,3\nBatch of 3: 4,5,6\nBatch of 1: 7"
        }
      ]
    },
    {
      id: "grouping-details",
      depth: "detailed",
      title: {
        en: "GroupBy details: overloads, composite keys, ToLookup and CountBy",
        hi: "GroupBy की बारीकियाँ: overloads, composite keys, ToLookup और CountBy",
        hg: "GroupBy ki baariqiyan: overloads, composite keys, ToLookup aur CountBy"
      },
      body: {
        en: "<p><b>Analogy:</b> lesson 6's PIN-code bags become a finished <b>sorting rack</b>. Ask for \"PIN 411001\" and you get that bundle, or an <b>empty slot</b> if there is none. That rack is <b>ToLookup</b>.</p>\n<ul>\n<li>Overloads: an <b>element selector</b> (<code>GroupBy(s =&gt; s.City, s =&gt; s.Amount)</code> keeps only amounts), a <b>result selector</b> (<code>(key, items) =&gt; new { ... }</code>), and a <b>comparer</b> (<code>StringComparer.OrdinalIgnoreCase</code> so \"pune\" and \"Pune\" fall into one group).</li>\n<li><b>Composite keys</b>: <code>GroupBy(s =&gt; new { s.City, s.Product })</code> — anonymous types (and tuples, records) compare by value, so equal pairs share one group.</li>\n<li>Query syntax: <code>group s.Amount by s.City into g where g.Sum() &gt;= 350 select ...</code> — a <code>where</code> after <code>into</code> filters <b>groups</b>, like SQL <code>HAVING</code>.</li>\n<li><b>ToLookup</b> runs <b>immediately</b> and returns an <code>ILookup&lt;TKey, T&gt;</code>: an indexer <code>lookup[key]</code> that gives an <b>empty</b> sequence for missing keys (a <code>Dictionary</code> would throw), plus <code>Contains(key)</code>. It is a snapshot; it does not see later changes.</li>\n<li><b>.NET 9</b>: <code>CountBy(keySelector)</code> and <code>AggregateBy(keySelector, seed, func)</code> give per-key counts and totals directly as key/value pairs, without building group objects.</li>\n</ul>\n<p><b>When to use:</b> reports and summaries (totals per city, orders per status); <code>ToLookup</code> when you will look up groups by key many times (for example, attaching child rows to parents in memory); <code>CountBy</code>/<code>AggregateBy</code> for simple per-key numbers. <b>When not:</b> do not group just to check \"does a key exist\" (use <code>Any</code> or a <code>HashSet</code>), and do not pull a big table into memory just to group it — let the database do <code>GROUP BY</code>.</p>",
        hi: "<p><b>मिसाल:</b> पाठ 6 के PIN code वाले थैले अब एक तैयार <b>sorting rack</b> बन जाते हैं। \"PIN 411001\" माँगो तो वह गड्डी मिलती है, और न हो तो <b>ख़ाली खाना</b>। यही rack <b>ToLookup</b> है।</p>\n<ul>\n<li>Overloads: <b>element selector</b> (<code>GroupBy(s =&gt; s.City, s =&gt; s.Amount)</code> सिर्फ़ amounts रखता है), <b>result selector</b> (<code>(key, items) =&gt; new { ... }</code>), और <b>comparer</b> (<code>StringComparer.OrdinalIgnoreCase</code> ताकि \"pune\" और \"Pune\" एक ही group में आएँ)।</li>\n<li><b>Composite keys</b>: <code>GroupBy(s =&gt; new { s.City, s.Product })</code> — anonymous types (और tuples, records) value से compare होते हैं, इसलिए बराबर pairs एक ही group में आते हैं।</li>\n<li>Query syntax: <code>group s.Amount by s.City into g where g.Sum() &gt;= 350 select ...</code> — <code>into</code> के बाद का <code>where</code> <b>groups</b> को filter करता है, SQL के <code>HAVING</code> की तरह।</li>\n<li><b>ToLookup</b> <b>तुरंत</b> चलता है और <code>ILookup&lt;TKey, T&gt;</code> return करता है: एक indexer <code>lookup[key]</code> जो missing key पर <b>खाली</b> sequence देता है (<code>Dictionary</code> throw करती), साथ में <code>Contains(key)</code>। यह snapshot है; बाद के बदलाव नहीं देखता।</li>\n<li><b>.NET 9</b>: <code>CountBy(keySelector)</code> और <code>AggregateBy(keySelector, seed, func)</code> हर key के counts और totals सीधे key/value pairs में देते हैं, group objects बनाए बिना।</li>\n</ul>\n<p><b>कब use करें:</b> reports और summaries (हर city का total, हर status के orders); <code>ToLookup</code> जब key से groups बार-बार ढूँढने हों (जैसे memory में child rows को parents से जोड़ना); simple per-key numbers के लिए <code>CountBy</code>/<code>AggregateBy</code>। <b>कब नहीं:</b> सिर्फ़ \"key है या नहीं\" check करने के लिए group मत बनाओ (<code>Any</code> या <code>HashSet</code> use करो), और सिर्फ़ group करने के लिए बड़ी table memory में मत लाओ — <code>GROUP BY</code> database को करने दो।</p>",
        hg: "<p><b>Misaal:</b> Lesson 6 ke PIN code wale thaile ab ek taiyaar <b>sorting rack</b> ban jaate hain. \"PIN 411001\" maango to woh gaddi milti hai, aur na ho to <b>khaali khaana</b>. Yahi rack <b>ToLookup</b> hai.</p>\n<ul>\n<li>Overloads: <b>element selector</b> (<code>GroupBy(s =&gt; s.City, s =&gt; s.Amount)</code> sirf amounts rakhta hai), <b>result selector</b> (<code>(key, items) =&gt; new { ... }</code>), aur <b>comparer</b> (<code>StringComparer.OrdinalIgnoreCase</code> taaki \"pune\" aur \"Pune\" ek hi group mein aayein).</li>\n<li><b>Composite keys</b>: <code>GroupBy(s =&gt; new { s.City, s.Product })</code> — anonymous types (aur tuples, records) value se compare hote hain, isliye barabar pairs ek hi group mein aate hain.</li>\n<li>Query syntax: <code>group s.Amount by s.City into g where g.Sum() &gt;= 350 select ...</code> — <code>into</code> ke baad ka <code>where</code> <b>groups</b> ko filter karta hai, SQL ke <code>HAVING</code> ki tarah.</li>\n<li><b>ToLookup</b> <b>turant</b> chalta hai aur <code>ILookup&lt;TKey, T&gt;</code> return karta hai: ek indexer <code>lookup[key]</code> jo missing key par <b>khaali</b> sequence deta hai (<code>Dictionary</code> throw karti), saath mein <code>Contains(key)</code>. Yeh snapshot hai; baad ke badlaav nahi dekhta.</li>\n<li><b>.NET 9</b>: <code>CountBy(keySelector)</code> aur <code>AggregateBy(keySelector, seed, func)</code> har key ke counts aur totals seedhe key/value pairs mein dete hain, group objects banaye bina.</li>\n</ul>\n<p><b>Kab use karein:</b> reports aur summaries (har city ka total, har status ke orders); <code>ToLookup</code> jab key se groups baar-baar dhoondhne hon (jaise memory mein child rows ko parents se jodna); simple per-key numbers ke liye <code>CountBy</code>/<code>AggregateBy</code>. <b>Kab nahi:</b> sirf \"key hai ya nahi\" check karne ke liye group mat banao (<code>Any</code> ya <code>HashSet</code> use karo), aur sirf group karne ke liye badi table memory mein mat laao — <code>GROUP BY</code> database ko karne do.</p>"
      },
      code: [
        {
          caption: {
            en: "GroupBy with Count/Sum per key (first-appearance order), a HAVING-style filter in query syntax, a composite key, ToLookup with a missing key, and .NET 9 CountBy/AggregateBy",
            hi: "हर key के Count/Sum के साथ GroupBy (पहली बार दिखने का order), query syntax में HAVING जैसा filter, composite key, missing key के साथ ToLookup, और .NET 9 CountBy/AggregateBy",
            hg: "Har key ke Count/Sum ke saath GroupBy (pehli baar dikhne ka order), query syntax mein HAVING jaisa filter, composite key, missing key ke saath ToLookup, aur .NET 9 CountBy/AggregateBy"
          },
          check: "run",
          expected: "Pune: 3 sales, total 350\nDelhi: 2 sales, total 400\nMumbai: 1 sales, total 300\nDelhi=400, Pune=350\nPune/Tea=250, Delhi/Coffee=150, Pune/Coffee=100, Mumbai/Tea=300, Delhi/Tea=250\nTea sales: 4, Juice sales: 0\nCountBy: Delhi=2, Mumbai=1, Pune=3\nAggregateBy: Delhi=400, Mumbai=300, Pune=350",
          src: "var sales = new List<Sale>\n{\n    new(\"Pune\", \"Tea\", 200), new(\"Delhi\", \"Coffee\", 150), new(\"Pune\", \"Coffee\", 100),\n    new(\"Mumbai\", \"Tea\", 300), new(\"Delhi\", \"Tea\", 250), new(\"Pune\", \"Tea\", 50)\n};\n\n// Groups come in the order each key first appears: Pune, Delhi, Mumbai\nforeach (IGrouping<string, Sale> g in sales.GroupBy(s => s.City))\n    Console.WriteLine($\"{g.Key}: {g.Count()} sales, total {g.Sum(s => s.Amount)}\");\n\n// Query syntax: element selector (amounts only), 'into', then a HAVING-style filter on groups\nvar bigCities = from s in sales\n                group s.Amount by s.City into g\n                where g.Sum() >= 350\n                orderby g.Sum() descending\n                select new { City = g.Key, Total = g.Sum() };\nConsole.WriteLine(string.Join(\", \", bigCities.Select(x => $\"{x.City}={x.Total}\")));\n\n// Composite key: anonymous types compare by value\nvar byCityProduct = sales\n    .GroupBy(s => new { s.City, s.Product })\n    .Select(g => $\"{g.Key.City}/{g.Key.Product}={g.Sum(s => s.Amount)}\");\nConsole.WriteLine(string.Join(\", \", byCityProduct));\n\n// ToLookup: runs now; a missing key gives an empty sequence, not an exception\nILookup<string, Sale> byProduct = sales.ToLookup(s => s.Product);\nConsole.WriteLine($\"Tea sales: {byProduct[\"Tea\"].Count()}, Juice sales: {byProduct[\"Juice\"].Count()}\");\n\n// .NET 9: per-key counts and totals without group objects (sorted for a stable print)\nvar counts = sales.CountBy(s => s.City).OrderBy(kv => kv.Key);\nConsole.WriteLine(\"CountBy: \" + string.Join(\", \", counts.Select(kv => $\"{kv.Key}={kv.Value}\")));\nvar totals = sales.AggregateBy(s => s.City, 0, (sum, s) => sum + s.Amount).OrderBy(kv => kv.Key);\nConsole.WriteLine(\"AggregateBy: \" + string.Join(\", \", totals.Select(kv => $\"{kv.Key}={kv.Value}\")));\n\nrecord Sale(string City, string Product, int Amount);"
        }
      ]
    },
    {
      id: "net10-leftjoin",
      depth: "detailed",
      title: {
        en: "Composite keys and the .NET 10 LeftJoin / RightJoin",
        hi: "Composite keys और .NET 10 के LeftJoin / RightJoin",
        hg: "Composite keys aur .NET 10 ke LeftJoin / RightJoin"
      },
      body: {
        en: "<p><b>Analogy:</b> the left join from lesson 7 needed three steps (<code>GroupJoin</code>, <code>from</code>, <code>DefaultIfEmpty</code>), like filling a form, stamping it and posting it. .NET 10 gives you one counter for it.</p>\n<ul>\n<li><b>.NET 10</b> adds <code>LeftJoin</code> and <code>RightJoin</code> operators to LINQ (both <code>Enumerable</code> and <code>Queryable</code>), and <b>EF Core 10</b> translates them to <code>LEFT JOIN</code>/<code>RIGHT JOIN</code>. Query syntax has no keyword for them yet. (Our checker uses the .NET 9 SDK, so that snippet below is not compiled.)</li>\n<li><b>Composite keys</b>: join on anonymous types with the <b>same property names and types</b>: <code>c =&gt; new { c.Id, c.City }</code> and <code>a =&gt; new { Id = a.CustomerId, a.City }</code>.</li>\n</ul>\n<p><b>When to use:</b> <code>LeftJoin</code> / <code>RightJoin</code> on .NET 10 or later, instead of the three-step pattern; keep the three-step pattern on .NET 9 or earlier. Join on a composite key when one column is not unique enough. <b>When not:</b> manual joins in EF Core where a navigation property already expresses the relationship.</p>",
        hi: "<p><b>मिसाल:</b> पाठ 7 के left join में तीन क़दम लगे थे (<code>GroupJoin</code>, <code>from</code>, <code>DefaultIfEmpty</code>), जैसे form भरना, उस पर मुहर लगवाना और फिर डाक में डालना। .NET 10 इसके लिए एक ही खिड़की दे देता है।</p>\n<ul>\n<li><b>.NET 10</b> ने LINQ में <code>LeftJoin</code> और <code>RightJoin</code> operators जोड़े (<code>Enumerable</code> और <code>Queryable</code> दोनों में), और <b>EF Core 10</b> इन्हें <code>LEFT JOIN</code>/<code>RIGHT JOIN</code> में translate करता है। Query syntax में इनका कोई keyword अभी नहीं है। (हमारा checker .NET 9 SDK use करता है, इसलिए नीचे वाला वो snippet compile नहीं होता।)</li>\n<li><b>Composite keys</b>: anonymous types पर join करो जिनके <b>property names और types एक जैसे</b> हों: <code>c =&gt; new { c.Id, c.City }</code> और <code>a =&gt; new { Id = a.CustomerId, a.City }</code>।</li>\n</ul>\n<p><b>कब इस्तेमाल करें:</b> .NET 10 या उसके बाद <code>LeftJoin</code> / <code>RightJoin</code>, तीन-क़दम वाले pattern की जगह; .NET 9 या उससे पहले तीन-क़दम वाला pattern ही रखो। एक column काफ़ी unique न हो तो composite key पर join करो। <b>कब नहीं:</b> EF Core में हाथ से join, जहाँ navigation property पहले से relationship बता देती है।</p>",
        hg: "<p><b>Misaal:</b> Lesson 7 ke left join mein teen kadam lage the (<code>GroupJoin</code>, <code>from</code>, <code>DefaultIfEmpty</code>), jaise form bharna, us par muhar lagwana aur phir daak mein daalna. .NET 10 iske liye ek hi khidki de deta hai.</p>\n<ul>\n<li><b>.NET 10</b> ne LINQ mein <code>LeftJoin</code> aur <code>RightJoin</code> operators jode (<code>Enumerable</code> aur <code>Queryable</code> dono mein), aur <b>EF Core 10</b> inhe <code>LEFT JOIN</code>/<code>RIGHT JOIN</code> mein translate karta hai. Query syntax mein inka koi keyword abhi nahi hai. (Hamara checker .NET 9 SDK use karta hai, isliye neeche wala woh snippet compile nahi hota.)</li>\n<li><b>Composite keys</b>: anonymous types par join karo jinke <b>property names aur types ek jaise</b> hon: <code>c =&gt; new { c.Id, c.City }</code> aur <code>a =&gt; new { Id = a.CustomerId, a.City }</code>.</li>\n</ul>\n<p><b>Kab use karein:</b> .NET 10 ya uske baad <code>LeftJoin</code> / <code>RightJoin</code>, teen-kadam wale pattern ki jagah; .NET 9 ya usse pehle teen-kadam wala pattern hi rakho. Ek column kaafi unique na ho to composite key par join karo. <b>Kab nahi:</b> EF Core mein haath se join, jahan navigation property pehle se relationship bata deti hai.</p>"
      },
      code: [
        {
          caption: {
            en: ".NET 10 only (not compiled by our .NET 9 checker): LeftJoin and RightJoin",
            hi: "सिर्फ़ .NET 10 (हमारा .NET 9 checker इसे compile नहीं करता): LeftJoin और RightJoin",
            hg: "Sirf .NET 10 (hamara .NET 9 checker ise compile nahi karta): LeftJoin aur RightJoin"
          },
          src: "// .NET 10: every agent is kept; 't' is null when the agent has no open ticket\nvar left = agents.LeftJoin(openTickets,\n    a => a.Name, t => t.Agent,\n    (a, t) => $\"{a.Name}:{(t is null ? \"none\" : t.Id.ToString())}\");\n// Meena:501, Meena:504, Meena:508, Kiran:503, Kiran:506, Divya:none\n\n// RightJoin is the mirror image: every open ticket is kept; 'a' is null if the agent is unknown\nvar right = agents.RightJoin(openTickets,\n    a => a.Name, t => t.Agent,\n    (a, t) => $\"{a?.Team ?? \"unknown\"}#{t.Id}\");\n\n// EF Core 10 translates both to LEFT JOIN / RIGHT JOIN in SQL.",
          check: "none"
        }
      ]
    },
    {
      id: "element-details",
      depth: "detailed",
      title: {
        en: "First, Single and friends in depth: cost, the value-type trap, empty sequences, MinBy/MaxBy",
        hi: "First, Single और साथी गहराई से: ख़र्च, value-type का जाल, ख़ाली sequences, MinBy/MaxBy",
        hg: "First, Single aur saathi gehraai se: kharcha, value-type ka jaal, khaali sequences, MinBy/MaxBy"
      },
      body: {
        en: "<ul>\n<li><b>Cost</b>: <code>First</code> stops at the first match. <code>Single</code> must keep looking for a <b>second</b> match, so it reads further (in EF Core on SQL Server, <code>First</code> becomes <code>TOP(1)</code> and <code>Single</code> becomes <code>TOP(2)</code>).</li>\n<li><b>The value-type trap</b>: <code>scores.FirstOrDefault(s =&gt; s &gt; 95)</code> returns <b>0</b> when nothing matches — but 0 could also be a real score. .NET 6 added overloads with your own default: <code>FirstOrDefault(s =&gt; s &gt; 95, -1)</code>. For classes, check for <code>null</code> before using the result.</li>\n<li><b>Empty sequences</b>: <code>Sum()</code> gives 0; <code>Min()</code>, <code>Max()</code>, <code>Average()</code> on non-nullable numbers <b>throw</b>; on nullable numbers (<code>int?</code>) they return <code>null</code>.</li>\n<li><b>MinBy / MaxBy</b> (.NET 6) return the <b>item</b> with the smallest/largest key. <code>Min</code>/<code>Max</code> return the <b>value</b>.</li>\n</ul>\n<p><b>When to use:</b> <code>Single</code>/<code>SingleOrDefault</code> for lookups by a unique key when duplicates mean corrupted data; <code>FirstOrDefault</code> + null check when \"not found\" is a normal case (return 404); <code>Any</code> for \"exists?\"; <code>MaxBy</code> for \"the top item\". <b>When not:</b> <code>Single</code> on a non-unique column (it will throw one day in production); <code>First()</code> without <code>OrderBy</code> when you expect a specific item (\"first\" of an unordered DB result is not defined); <code>Count() &gt; 0</code> on a lazy query or EF query.</p>",
        hi: "<ul>\n<li><b>Cost</b>: <code>First</code> पहले match पर रुक जाता है। <code>Single</code> को <b>दूसरा</b> match भी ढूँढना पड़ता है, इसलिए आगे तक पढ़ता है (SQL Server पर EF Core में <code>First</code>, <code>TOP(1)</code> बनता है और <code>Single</code>, <code>TOP(2)</code>)।</li>\n<li><b>Value-type का जाल</b>: <code>scores.FirstOrDefault(s =&gt; s &gt; 95)</code> कुछ match न होने पर <b>0</b> देता है — पर 0 असली score भी हो सकता है। .NET 6 में अपने default वाले overloads आए: <code>FirstOrDefault(s =&gt; s &gt; 95, -1)</code>। Classes के लिए result use करने से पहले <code>null</code> check करो।</li>\n<li><b>खाली sequences</b>: <code>Sum()</code> 0 देता है; non-nullable numbers पर <code>Min()</code>, <code>Max()</code>, <code>Average()</code> <b>throw</b> करते हैं; nullable numbers (<code>int?</code>) पर <code>null</code> return करते हैं।</li>\n<li><b>MinBy / MaxBy</b> (.NET 6) सबसे छोटी/बड़ी key वाला <b>item</b> देते हैं। <code>Min</code>/<code>Max</code> <b>value</b> देते हैं।</li>\n</ul>\n<p><b>कब use करें:</b> unique key से lookup के लिए <code>Single</code>/<code>SingleOrDefault</code> जब duplicates का मतलब corrupted data हो; <code>FirstOrDefault</code> + null check जब \"नहीं मिला\" normal case हो (404 return करो); \"exists?\" के लिए <code>Any</code>; \"top item\" के लिए <code>MaxBy</code>। <b>कब नहीं:</b> non-unique column पर <code>Single</code> (किसी दिन production में throw करेगा); किसी ख़ास item की उम्मीद में <code>OrderBy</code> के बिना <code>First()</code> (unordered DB result का \"पहला\" तय नहीं है); lazy query या EF query पर <code>Count() &gt; 0</code>।</p>",
        hg: "<ul>\n<li><b>Cost</b>: <code>First</code> pehle match par ruk jaata hai. <code>Single</code> ko <b>doosra</b> match bhi dhoondhna padta hai, isliye aage tak padhta hai (SQL Server par EF Core mein <code>First</code>, <code>TOP(1)</code> banta hai aur <code>Single</code>, <code>TOP(2)</code>).</li>\n<li><b>Value-type ka jaal</b>: <code>scores.FirstOrDefault(s =&gt; s &gt; 95)</code> kuch match na hone par <b>0</b> deta hai — par 0 asli score bhi ho sakta hai. .NET 6 mein apne default wale overloads aaye: <code>FirstOrDefault(s =&gt; s &gt; 95, -1)</code>. Classes ke liye result use karne se pehle <code>null</code> check karo.</li>\n<li><b>Khaali sequences</b>: <code>Sum()</code> 0 deta hai; non-nullable numbers par <code>Min()</code>, <code>Max()</code>, <code>Average()</code> <b>throw</b> karte hain; nullable numbers (<code>int?</code>) par <code>null</code> return karte hain.</li>\n<li><b>MinBy / MaxBy</b> (.NET 6) sabse chhoti/badi key wala <b>item</b> dete hain. <code>Min</code>/<code>Max</code> <b>value</b> dete hain.</li>\n</ul>\n<p><b>Kab use karein:</b> unique key se lookup ke liye <code>Single</code>/<code>SingleOrDefault</code> jab duplicates ka matlab corrupted data ho; <code>FirstOrDefault</code> + null check jab \"nahi mila\" normal case ho (404 return karo); \"exists?\" ke liye <code>Any</code>; \"top item\" ke liye <code>MaxBy</code>. <b>Kab nahi:</b> non-unique column par <code>Single</code> (kisi din production mein throw karega); kisi khaas item ki ummeed mein <code>OrderBy</code> ke bina <code>First()</code> (unordered DB result ka \"pehla\" tay nahi hai); lazy query ya EF query par <code>Count() &gt; 0</code>.</p>"
      },
      code: [
        {
          caption: {
            en: "The value-type trap, empty sequences, and Max vs MaxBy",
            hi: "Value-type का जाल, ख़ाली sequences, और Max बनाम MaxBy",
            hg: "Value-type ka jaal, khaali sequences, aur Max vs MaxBy"
          },
          src: "var tickets = new List<SupportTicket>\n{\n    new(501, \"Asha\", \"Router not working\", \"Open\", \"Meena\", 1),\n    new(502, \"Ravi\", \"Billing error\", \"Closed\", \"Kiran\", 2),\n    new(503, \"Meena\", \"SIM not active\", \"Open\", \"Kiran\", 1),\n    new(504, \"Neha\", \"Slow internet\", \"Open\", \"Meena\", 3),\n    new(505, \"Asha\", \"Refund pending\", \"Closed\", \"Meena\", 2),\n    new(506, \"Ravi\", \"Plan change\", \"Open\", \"Kiran\", 3),\n    new(507, \"Neha\", \"Bill copy\", \"Closed\", \"Meena\", 2),\n    new(508, \"Asha\", \"Slow internet\", \"Open\", \"Meena\", 1)\n};\n\n// The value-type trap: is 0 a real score or \"nothing found\"?\nint[] scores = [40, 75, 90];\nConsole.WriteLine(scores.FirstOrDefault(s => s > 95));       // 0\nConsole.WriteLine(scores.FirstOrDefault(s => s > 95, -1));   // .NET 6: your own default, clearly \"none\"\n\n// Empty sequences: Sum gives 0, Max on int throws, Max on int? gives null\nint[] none = [];\nConsole.WriteLine($\"Sum of empty: {none.Sum()}\");\ntry\n{\n    none.Max();\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine($\"Max of empty int: {ex.Message}\");\n}\nint? maxOfEmpty = none.Select(n => (int?)n).Max();\nConsole.WriteLine($\"Max of empty int?: {maxOfEmpty?.ToString() ?? \"null\"}\");\n\n// Max returns the value; MaxBy (.NET 6) returns the item (the first one on a tie)\nConsole.WriteLine($\"Max priority: {tickets.Max(t => t.Priority)}, ticket: #{tickets.MaxBy(t => t.Priority)!.Id}\");\n\nrecord SupportTicket(int Id, string Customer, string Issue, string Status, string Agent, int Priority);",
          check: "run",
          expected: "0\n-1\nSum of empty: 0\nMax of empty int: Sequence contains no elements\nMax of empty int?: null\nMax priority: 3, ticket: #504"
        }
      ]
    },
    {
      id: "distinct-aggregate",
      depth: "detailed",
      title: {
        en: "Distinct, DistinctBy, set operators and Aggregate in code (plus .NET 9 Index)",
        hi: "Code में Distinct, DistinctBy, set operators और Aggregate (साथ में .NET 9 Index)",
        hg: "Code mein Distinct, DistinctBy, set operators aur Aggregate (saath mein .NET 9 Index)"
      },
      body: {
        en: "<p><b>Analogy — the wedding guest list and the shop's galla:</b> the bride's and the groom's families both send guest lists, and some uncles are on <b>both</b>. Removing the repeats is <b>Distinct</b>. But \"same person\" needs a rule: same name? same phone number? That rule is <b>equality</b> — or the key you give to <b>DistinctBy</b>. At the end of the day, the shopkeeper starts with an empty <b>galla</b> (cash box) and adds each sale one by one to get the day's total — that running fold is <b>Aggregate</b>.</p>\n<ul>\n<li><b>Distinct()</b> uses the type's <code>Equals</code>/<code>GetHashCode</code>. <b>Records</b> (and anonymous types, tuples) compare by <b>value</b>, so duplicates are removed. A normal <b>class</b> compares by <b>reference</b>, so two objects with the same data are both kept — unless you override equality or pass an <code>IEqualityComparer&lt;T&gt;</code>.</li>\n<li>Strings: <code>Distinct(StringComparer.OrdinalIgnoreCase)</code> treats \"Pune\" and \"PUNE\" as the same.</li>\n<li><b>DistinctBy(keySelector)</b> (.NET 6) keeps the <b>first</b> item for each key — for example, one row per customer. No custom comparer needed.</li>\n<li>The docs describe <code>Distinct</code> as returning an <b>unordered</b> sequence. If order matters to you, sort the result.</li>\n<li><b>Set operators</b>: <code>Union</code> (all, no duplicates), <code>Intersect</code> (in both), <code>Except</code> (in first, not in second). .NET 6 added <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>.</li>\n<li><b>Aggregate</b> = a general \"fold\": <code>Aggregate(seed, (acc, x) =&gt; ...)</code>. Without a seed, the first item is the seed — and an <b>empty</b> sequence then throws. For sums, counts and joins of strings, the specialised methods (<code>Sum</code>, <code>Count</code>, <code>string.Join</code>) are clearer and usually faster.</li>\n<li><b>Index()</b> (.NET 9) returns <code>(Index, Item)</code> tuples — a cleaner way to get the position than <code>Select((x, i) =&gt; ...)</code>.</li>\n</ul>\n<p><b>When to use:</b> <code>Distinct</code> for unique simple values or records; <code>DistinctBy</code> for \"one per key\"; set operators to compare two lists (new vs old IDs); <code>Aggregate</code> for custom folds that have no built-in method. <b>When not:</b> <code>Distinct</code> on classes without equality (it removes only same-instance duplicates); <code>Aggregate</code> with string concatenation on big lists (O(n²) copying — use <code>string.Join</code> or <code>StringBuilder</code>); clever <code>Aggregate</code> one-liners that a plain loop would make readable.</p>",
        hi: "<p><b>Analogy — शादी की guest list और दुकान का गल्ला:</b> दुल्हन और दूल्हे, दोनों के परिवार guest lists भेजते हैं, और कुछ चाचा-मामा <b>दोनों</b> में हैं। दोहराव हटाना है <b>Distinct</b>। पर \"वही इंसान\" के लिए एक rule चाहिए: नाम एक जैसा? phone number एक जैसा? वो rule है <b>equality</b> — या वो key जो आप <b>DistinctBy</b> को देते हो। दिन के आख़िर में दुकानदार ख़ाली <b>गल्ले</b> से शुरू करता है और हर sale एक-एक करके जोड़कर दिन का total निकालता है — यही running fold है <b>Aggregate</b>।</p>\n<ul>\n<li><b>Distinct()</b> type का <code>Equals</code>/<code>GetHashCode</code> use करता है। <b>Records</b> (और anonymous types, tuples) <b>value</b> से compare होते हैं, इसलिए duplicates हट जाते हैं। Normal <b>class</b> <b>reference</b> से compare होती है, इसलिए एक जैसे data वाले दो objects दोनों रह जाते हैं — जब तक आप equality override न करो या <code>IEqualityComparer&lt;T&gt;</code> pass न करो।</li>\n<li>Strings: <code>Distinct(StringComparer.OrdinalIgnoreCase)</code> \"Pune\" और \"PUNE\" को एक मानता है।</li>\n<li><b>DistinctBy(keySelector)</b> (.NET 6) हर key का <b>पहला</b> item रखता है — जैसे हर customer की एक row। Custom comparer की ज़रूरत नहीं।</li>\n<li>Docs के हिसाब से <code>Distinct</code> एक <b>unordered</b> sequence return करता है। अगर order आपके लिए ज़रूरी है, तो result को sort करो।</li>\n<li><b>Set operators</b>: <code>Union</code> (सब, बिना duplicates), <code>Intersect</code> (दोनों में), <code>Except</code> (पहले में, दूसरे में नहीं)। .NET 6 में <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code> आए।</li>\n<li><b>Aggregate</b> = एक general \"fold\": <code>Aggregate(seed, (acc, x) =&gt; ...)</code>। Seed न दो तो पहला item ही seed बनता है — और तब <b>खाली</b> sequence पर throw होता है। Sums, counts और strings जोड़ने के लिए specialised methods (<code>Sum</code>, <code>Count</code>, <code>string.Join</code>) ज़्यादा साफ़ और आमतौर पर तेज़ हैं।</li>\n<li><b>Index()</b> (.NET 9) <code>(Index, Item)</code> tuples देता है — position पाने का <code>Select((x, i) =&gt; ...)</code> से साफ़ तरीका।</li>\n</ul>\n<p><b>कब use करें:</b> unique simple values या records के लिए <code>Distinct</code>; \"हर key का एक\" के लिए <code>DistinctBy</code>; दो lists compare करने के लिए set operators (नए बनाम पुराने IDs); ऐसे custom folds के लिए <code>Aggregate</code> जिनका कोई built-in method नहीं। <b>कब नहीं:</b> बिना equality वाली classes पर <code>Distinct</code> (यह सिर्फ़ same-instance duplicates हटाता है); बड़ी lists पर string जोड़ने वाला <code>Aggregate</code> (O(n²) copying — <code>string.Join</code> या <code>StringBuilder</code> use करो); ऐसे चालाक <code>Aggregate</code> one-liners जिन्हें plain loop पढ़ने लायक बना देता।</p>",
        hg: "<p><b>Analogy — shaadi ki guest list aur dukaan ka galla:</b> dulhan aur dulhe, dono ke parivaar guest lists bhejte hain, aur kuch chacha-mama <b>dono</b> mein hain. Dohraav hataana hai <b>Distinct</b>. Par \"wahi insaan\" ke liye ek rule chahiye: naam ek jaisa? phone number ek jaisa? Woh rule hai <b>equality</b> — ya woh key jo aap <b>DistinctBy</b> ko dete ho. Din ke aakhir mein dukaandaar khaali <b>galle</b> se shuru karta hai aur har sale ek-ek karke jodkar din ka total nikaalta hai — yahi running fold hai <b>Aggregate</b>.</p>\n<ul>\n<li><b>Distinct()</b> type ka <code>Equals</code>/<code>GetHashCode</code> use karta hai. <b>Records</b> (aur anonymous types, tuples) <b>value</b> se compare hote hain, isliye duplicates hat jaate hain. Normal <b>class</b> <b>reference</b> se compare hoti hai, isliye ek jaise data wale do objects dono reh jaate hain — jab tak aap equality override na karo ya <code>IEqualityComparer&lt;T&gt;</code> pass na karo.</li>\n<li>Strings: <code>Distinct(StringComparer.OrdinalIgnoreCase)</code> \"Pune\" aur \"PUNE\" ko ek maanta hai.</li>\n<li><b>DistinctBy(keySelector)</b> (.NET 6) har key ka <b>pehla</b> item rakhta hai — jaise har customer ki ek row. Custom comparer ki zaroorat nahi.</li>\n<li>Docs ke hisaab se <code>Distinct</code> ek <b>unordered</b> sequence return karta hai. Agar order aapke liye zaroori hai, to result ko sort karo.</li>\n<li><b>Set operators</b>: <code>Union</code> (sab, bina duplicates), <code>Intersect</code> (dono mein), <code>Except</code> (pehle mein, doosre mein nahi). .NET 6 mein <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code> aaye.</li>\n<li><b>Aggregate</b> = ek general \"fold\": <code>Aggregate(seed, (acc, x) =&gt; ...)</code>. Seed na do to pehla item hi seed banta hai — aur tab <b>khaali</b> sequence par throw hota hai. Sums, counts aur strings jodne ke liye specialised methods (<code>Sum</code>, <code>Count</code>, <code>string.Join</code>) zyada saaf aur aamtaur par tez hain.</li>\n<li><b>Index()</b> (.NET 9) <code>(Index, Item)</code> tuples deta hai — position paane ka <code>Select((x, i) =&gt; ...)</code> se saaf tareeka.</li>\n</ul>\n<p><b>Kab use karein:</b> unique simple values ya records ke liye <code>Distinct</code>; \"har key ka ek\" ke liye <code>DistinctBy</code>; do lists compare karne ke liye set operators (naye vs purane IDs); aise custom folds ke liye <code>Aggregate</code> jinka koi built-in method nahi. <b>Kab nahi:</b> bina equality wali classes par <code>Distinct</code> (yeh sirf same-instance duplicates hataata hai); badi lists par string jodne wala <code>Aggregate</code> (O(n²) copying — <code>string.Join</code> ya <code>StringBuilder</code> use karo); aise chaalak <code>Aggregate</code> one-liners jinhe plain loop padhne laayak bana deta.</p>"
      },
      code: [
        {
          caption: {
            en: "Distinct on records vs classes, a case-insensitive comparer, DistinctBy, Union/Intersect/Except, Aggregate with and without a seed, and .NET 9 Index()",
            hi: "Records बनाम classes पर Distinct, case-insensitive comparer, DistinctBy, Union/Intersect/Except, seed के साथ और बिना Aggregate, और .NET 9 Index()",
            hg: "Records vs classes par Distinct, case-insensitive comparer, DistinctBy, Union/Intersect/Except, seed ke saath aur bina Aggregate, aur .NET 9 Index()"
          },
          check: "run",
          expected: "records: 2, classes: 3\nignore case: 2\nfirst visit: Asha/Mon, Neha/Wed, Ravi/Mon\nUnion: 5, Intersect: 3,4, Except: 1,2\n400 | 100,250,50 | 250\n1. Asha\n2. Ravi",
          src: "// Distinct uses Equals/GetHashCode: records by value, classes by reference\nCityRec[] recordCities = [new(\"Pune\"), new(\"Pune\"), new(\"Delhi\")];\nCityClass[] classCities = [new(\"Pune\"), new(\"Pune\"), new(\"Delhi\")];\nConsole.WriteLine($\"records: {recordCities.Distinct().Count()}, classes: {classCities.Distinct().Count()}\");\n\n// A comparer changes what \"equal\" means\nstring[] typed = [\"pune\", \"Pune\", \"PUNE\", \"delhi\"];\nConsole.WriteLine($\"ignore case: {typed.Distinct(StringComparer.OrdinalIgnoreCase).Count()}\");\n\n// DistinctBy (.NET 6): the first item per key (sorted only for a stable print)\nVisit[] visits = [new(\"Asha\", \"Mon\"), new(\"Ravi\", \"Mon\"), new(\"Asha\", \"Tue\"), new(\"Neha\", \"Wed\")];\nvar firstVisit = visits.DistinctBy(v => v.Customer).OrderBy(v => v.Customer);\nConsole.WriteLine(\"first visit: \" + string.Join(\", \", firstVisit.Select(v => $\"{v.Customer}/{v.Day}\")));\n\n// Set operators\nint[] monday = [1, 2, 3, 4];\nint[] tuesday = [3, 4, 5];\nConsole.WriteLine($\"Union: {monday.Union(tuesday).Count()}, \" +\n                  $\"Intersect: {string.Join(\",\", monday.Intersect(tuesday).Order())}, \" +\n                  $\"Except: {string.Join(\",\", monday.Except(tuesday).Order())}\");\n\n// Aggregate: with a seed, and without (the first item becomes the seed)\nint[] amounts = [100, 250, 50];\nint total = amounts.Aggregate(0, (sum, a) => sum + a);               // same as Sum()\nstring csv = amounts.Aggregate(\"\", (acc, a) => acc.Length == 0 ? $\"{a}\" : $\"{acc},{a}\"); // string.Join is better\nint max = amounts.Aggregate((best, a) => a > best ? a : best);       // throws on an empty array\nConsole.WriteLine($\"{total} | {csv} | {max}\");\n\n// .NET 9: Index() gives (Index, Item) pairs\nforeach (var (i, name) in new[] { \"Asha\", \"Ravi\" }.Index())\n    Console.WriteLine($\"{i + 1}. {name}\");\n\nrecord CityRec(string Name);\nrecord Visit(string Customer, string Day);\nclass CityClass(string name)\n{\n    public string Name { get; } = name;\n}"
        }
      ]
    },
    {
      id: "performance-review",
      depth: "detailed",
      title: {
        en: "Tech Lead angle: LINQ performance, when a plain loop wins, and code-review red flags",
        hi: "Tech Lead angle: LINQ performance, कब plain loop जीतता है, और code-review red flags",
        hg: "Tech Lead angle: LINQ performance, kab plain loop jeetta hai, aur code-review red flags"
      },
      body: {
        en: "<p><b>Analogy — auto-rickshaw vs walking:</b> for a 3 km trip, an auto is comfortable and fast enough — nobody walks to \"save fuel\". But for the last 50 metres inside a crowded gali, walking is quicker than squeezing the auto through. LINQ is the auto: the right default for most code. A plain loop is walking: better for the few hot, tight spots. And before arguing, <b>measure the trip</b> (a profiler or BenchmarkDotNet).</p>\n<ul>\n<li><b>What LINQ to Objects costs</b>: a delegate call per item per operator; an iterator object per operator; a closure object when the lambda captures local variables; and enumeration through the <code>IEnumerable&lt;T&gt;</code> interface. In a web request that also calls a database, this is usually noise.</li>\n<li>.NET has special fast paths for arrays and lists in many operators, and they keep getting faster in each release. Write clear LINQ first; optimise what a profiler shows.</li>\n<li><b>When a plain loop is better</b>: hot paths that run millions of times (parsers, pricing engines, tight per-item loops); computing <b>several</b> aggregates in one pass (<code>Sum</code> + <code>Count</code> + <code>Max</code> in LINQ = three passes); complex early exits or state; and changing items in place.</li>\n<li><b>Readability matters too</b>: a 15-operator chain nobody can debug is worse than three named steps (<code>var paidOrders = ...; var byCity = ...;</code>).</li>\n</ul>\n<p><b>Code-review red flags</b>: the full checklist is in the Q&amp;A \"As a Tech Lead, what LINQ problems do you look for in code review?\". The demo below shows one of them — a <code>First()</code> lookup inside a loop — and its fix.</p>\n<p><b>When to use</b> LINQ: business logic, mapping, filtering, reports, EF Core queries — clarity wins. <b>When not:</b> measured hot paths, multi-aggregate single passes, and code with heavy side effects — use a loop and leave a short comment saying why.</p>",
        hi: "<p><b>Analogy — auto-rickshaw बनाम पैदल:</b> 3 km के सफ़र के लिए auto आरामदायक और काफ़ी तेज़ है — कोई \"petrol बचाने\" के लिए पैदल नहीं जाता। पर भीड़ वाली गली के आख़िरी 50 meter में auto घुसाने से पैदल चलना जल्दी है। LINQ auto है: ज़्यादातर code के लिए सही default। Plain loop पैदल चलना है: गिनी-चुनी hot, tight जगहों के लिए बेहतर। और बहस से पहले <b>सफ़र नापो</b> (profiler या BenchmarkDotNet)।</p>\n<ul>\n<li><b>LINQ to Objects का ख़र्च</b>: हर operator पर हर item के लिए एक delegate call; हर operator का एक iterator object; lambda जब local variables capture करे तो एक closure object; और <code>IEnumerable&lt;T&gt;</code> interface के ज़रिए enumeration। जो web request database भी call करती है, उसमें यह आमतौर पर noise है।</li>\n<li>.NET में कई operators के लिए arrays और lists के special fast paths हैं, और हर release में ये और तेज़ होते जाते हैं। पहले साफ़ LINQ लिखो; जो profiler दिखाए उसे optimise करो।</li>\n<li><b>Plain loop कब बेहतर है</b>: लाखों बार चलने वाले hot paths (parsers, pricing engines, tight per-item loops); एक ही pass में <b>कई</b> aggregates निकालना (LINQ में <code>Sum</code> + <code>Count</code> + <code>Max</code> = तीन passes); complex early exits या state; और items को वहीं बदलना।</li>\n<li><b>Readability भी ज़रूरी है</b>: 15 operators की chain जिसे कोई debug न कर सके, तीन named steps से बदतर है (<code>var paidOrders = ...; var byCity = ...;</code>)।</li>\n</ul>\n<p><b>Code-review red flags</b>: पूरी checklist Q&amp;A \"As a Tech Lead, what LINQ problems do you look for in code review?\" में है। नीचे का demo उनमें से एक दिखाता है — loop के अंदर <code>First()</code> lookup — और उसका fix।</p>\n<p><b>कब use करें</b> LINQ: business logic, mapping, filtering, reports, EF Core queries — यहाँ clarity जीतती है। <b>कब नहीं:</b> measured hot paths, एक pass में कई aggregates, और भारी side effects वाला code — loop use करो और एक छोटा comment छोड़ो कि क्यों।</p>",
        hg: "<p><b>Analogy — auto-rickshaw vs paidal:</b> 3 km ke safar ke liye auto aaraamdaayak aur kaafi tez hai — koi \"petrol bachane\" ke liye paidal nahi jaata. Par bheed wali gali ke aakhri 50 meter mein auto ghusaane se paidal chalna jaldi hai. LINQ auto hai: zyadatar code ke liye sahi default. Plain loop paidal chalna hai: gini-chuni hot, tight jagahon ke liye behtar. Aur behes se pehle <b>safar naapo</b> (profiler ya BenchmarkDotNet).</p>\n<ul>\n<li><b>LINQ to Objects ka kharcha</b>: har operator par har item ke liye ek delegate call; har operator ka ek iterator object; lambda jab local variables capture kare to ek closure object; aur <code>IEnumerable&lt;T&gt;</code> interface ke zariye enumeration. Jo web request database bhi call karti hai, usmein yeh aamtaur par noise hai.</li>\n<li>.NET mein kai operators ke liye arrays aur lists ke special fast paths hain, aur har release mein yeh aur tez hote jaate hain. Pehle saaf LINQ likho; jo profiler dikhaaye use optimise karo.</li>\n<li><b>Plain loop kab behtar hai</b>: laakhon baar chalne wale hot paths (parsers, pricing engines, tight per-item loops); ek hi pass mein <b>kai</b> aggregates nikaalna (LINQ mein <code>Sum</code> + <code>Count</code> + <code>Max</code> = teen passes); complex early exits ya state; aur items ko wahin badalna.</li>\n<li><b>Readability bhi zaroori hai</b>: 15 operators ki chain jise koi debug na kar sake, teen named steps se badtar hai (<code>var paidOrders = ...; var byCity = ...;</code>).</li>\n</ul>\n<p><b>Code-review red flags</b>: poori checklist Q&amp;A \"As a Tech Lead, what LINQ problems do you look for in code review?\" mein hai. Neeche ka demo unmein se ek dikhata hai — loop ke andar <code>First()</code> lookup — aur uska fix.</p>\n<p><b>Kab use karein</b> LINQ: business logic, mapping, filtering, reports, EF Core queries — yahan clarity jeetti hai. <b>Kab nahi:</b> measured hot paths, ek pass mein kai aggregates, aur bhaari side effects wala code — loop use karo aur ek chhota comment chhodo ki kyon.</p>"
      },
      code: [
        {
          caption: {
            en: "Same result with LINQ and a loop; three aggregates in one pass; First() inside a loop vs a dictionary built once",
            hi: "LINQ और loop से एक ही result; एक pass में तीन aggregates; loop के अंदर First() बनाम एक बार बनी dictionary",
            hg: "LINQ aur loop se ek hi result; ek pass mein teen aggregates; loop ke andar First() vs ek baar bani dictionary"
          },
          check: "run",
          expected: "LINQ = loop: True\nOne pass: count=858, sum=4294290, max=10000\nLambda calls with First() in a loop: 9\nNames via dictionary: C1,C2,C3",
          src: "var orders = Enumerable.Range(1, 1000)\n    .Select(i => new Order(i, CustomerId: i % 50, Amount: i * 10, Paid: i % 7 != 0))\n    .ToList();\nvar customers = Enumerable.Range(0, 50).Select(id => new Customer(id, $\"C{id}\")).ToList();\n\n// 1. Readable LINQ - the right default for business code\nint paidTotal = orders.Where(o => o.Paid).Sum(o => o.Amount);\n\n// 2. The same with a plain loop: no delegates, no iterator objects\nint loopTotal = 0;\nforeach (var o in orders)\n    if (o.Paid) loopTotal += o.Amount;\nConsole.WriteLine($\"LINQ = loop: {paidTotal == loopTotal}\");\n\n// 3. Several aggregates: LINQ would make three passes; a loop needs one\nint count = 0, sum = 0, max = int.MinValue;\nforeach (var o in orders)\n{\n    if (!o.Paid) continue;\n    count++;\n    sum += o.Amount;\n    if (o.Amount > max) max = o.Amount;\n}\nConsole.WriteLine($\"One pass: count={count}, sum={sum}, max={max}\");\n\n// 4. Red flag: First() inside a loop scans the list again and again (O(n*m))\nint calls = 0;\nforeach (var o in orders.Take(3))\n{\n    _ = customers.First(x => { calls++; return x.Id == o.CustomerId; });\n}\nConsole.WriteLine($\"Lambda calls with First() in a loop: {calls}\");\n\n// Fix: build a dictionary once, then each lookup is O(1)\nDictionary<int, Customer> byId = customers.ToDictionary(c => c.Id);\nConsole.WriteLine(\"Names via dictionary: \" + string.Join(\",\", orders.Take(3).Select(o => byId[o.CustomerId].Name)));\n\nrecord Order(int Id, int CustomerId, int Amount, bool Paid);\nrecord Customer(int Id, string Name);"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in recent LINQ and .NET versions",
        hi: "हाल के LINQ और .NET versions में नया क्या है",
        hg: "Haal ke LINQ aur .NET versions mein naya kya hai"
      },
      body: {
        en: "<p>Current: <b>.NET 10 LTS / C# 14 / EF Core 10</b> (Nov 2025). LINQ changes are <b>library</b> changes (new methods in <code>System.Linq</code>, shipped with a .NET version), not C# language features. What is new in each version — everything before it already worked:</p>\n<ul>\n<li><b>.NET 6</b> — <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; default-value overloads <code>FirstOrDefault(pred, value)</code> / <code>LastOrDefault</code> / <code>SingleOrDefault</code>; <code>Take(range)</code>; <code>TryGetNonEnumeratedCount</code>; three-sequence <code>Zip</code>.</li>\n<li><b>.NET 7</b> — <code>Order()</code> and <code>OrderDescending()</code>: sort simple values without writing <code>x =&gt; x</code>.</li>\n<li><b>.NET 9</b> — <code>CountBy</code> and <code>AggregateBy</code>: per-key counts and totals without building <code>GroupBy</code> groups; <code>Index()</code>: <code>(Index, Item)</code> pairs for <code>foreach</code>.</li>\n<li><b>.NET 10</b> — <code>LeftJoin</code> and <code>RightJoin</code> operators on <code>Enumerable</code> and <code>Queryable</code>. Before, a left join needed <code>GroupJoin</code> + <code>SelectMany</code> + <code>DefaultIfEmpty</code>. C# query syntax has no keyword for them yet.</li>\n<li><b>EF Core 10</b> — translates <code>LeftJoin</code>/<code>RightJoin</code> to SQL <code>LEFT JOIN</code>/<code>RIGHT JOIN</code> (more EF Core 9/10 changes on Day 6).</li>\n<li><b>.NET 10</b> — <code>System.Linq.AsyncEnumerable</code>: LINQ for <code>IAsyncEnumerable&lt;T&gt;</code> is now built in (Day 3).</li>\n</ul>\n<p>The code checker for this tutorial uses the .NET 9 SDK, so the .NET 9 operators above are compiled and run; the .NET 10 <code>LeftJoin</code>/<code>RightJoin</code> snippet is shown but not compiled. Today's code uses C# 12 collection expressions (<code>int[] marks = [72, 35, 90];</code>).</p>\n<p><b>Next (as of Oct 2026):</b> .NET 11 (STS) is due in November 2026; .NET 10 stays the LTS.</p>",
        hi: "<p>Current: <b>.NET 10 LTS / C# 14 / EF Core 10</b> (Nov 2025)। LINQ के बदलाव <b>library</b> बदलाव हैं (<code>System.Linq</code> में नए methods, जो किसी .NET version के साथ आते हैं), C# language features नहीं। हर version में क्या नया है — उससे पहले की हर चीज़ पहले से चलती थी:</p>\n<ul>\n<li><b>.NET 6</b> — <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; default-value overloads <code>FirstOrDefault(pred, value)</code> / <code>LastOrDefault</code> / <code>SingleOrDefault</code>; <code>Take(range)</code>; <code>TryGetNonEnumeratedCount</code>; तीन sequences वाला <code>Zip</code>।</li>\n<li><b>.NET 7</b> — <code>Order()</code> और <code>OrderDescending()</code>: <code>x =&gt; x</code> लिखे बिना simple values sort करो।</li>\n<li><b>.NET 9</b> — <code>CountBy</code> और <code>AggregateBy</code>: <code>GroupBy</code> groups बनाए बिना per-key counts और totals; <code>Index()</code>: <code>foreach</code> के लिए <code>(Index, Item)</code> pairs।</li>\n<li><b>.NET 10</b> — <code>Enumerable</code> और <code>Queryable</code> पर <code>LeftJoin</code> और <code>RightJoin</code> operators। पहले left join के लिए <code>GroupJoin</code> + <code>SelectMany</code> + <code>DefaultIfEmpty</code> लगता था। C# query syntax में इनका keyword अभी नहीं है।</li>\n<li><b>EF Core 10</b> — <code>LeftJoin</code>/<code>RightJoin</code> को SQL <code>LEFT JOIN</code>/<code>RIGHT JOIN</code> में translate करता है (EF Core 9/10 के और बदलाव Day 6 में)।</li>\n<li><b>.NET 10</b> — <code>System.Linq.AsyncEnumerable</code>: <code>IAsyncEnumerable&lt;T&gt;</code> के लिए LINQ अब built-in है (Day 3)।</li>\n</ul>\n<p>इस tutorial का code checker .NET 9 SDK use करता है, इसलिए ऊपर के .NET 9 operators compile होकर चलते हैं; .NET 10 वाला <code>LeftJoin</code>/<code>RightJoin</code> snippet दिखाया गया है पर compile नहीं होता। आज का code C# 12 collection expressions use करता है (<code>int[] marks = [72, 35, 90];</code>)।</p>\n<p><b>आगे (Oct 2026 तक की जानकारी):</b> .NET 11 (STS) November 2026 में आने वाला है; .NET 10 ही LTS रहेगा।</p>",
        hg: "<p>Current: <b>.NET 10 LTS / C# 14 / EF Core 10</b> (Nov 2025). LINQ ke badlaav <b>library</b> badlaav hain (<code>System.Linq</code> mein naye methods, jo kisi .NET version ke saath aate hain), C# language features nahi. Har version mein kya naya hai — usse pehle ki har cheez pehle se chalti thi:</p>\n<ul>\n<li><b>.NET 6</b> — <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; default-value overloads <code>FirstOrDefault(pred, value)</code> / <code>LastOrDefault</code> / <code>SingleOrDefault</code>; <code>Take(range)</code>; <code>TryGetNonEnumeratedCount</code>; teen sequences wala <code>Zip</code>.</li>\n<li><b>.NET 7</b> — <code>Order()</code> aur <code>OrderDescending()</code>: <code>x =&gt; x</code> likhe bina simple values sort karo.</li>\n<li><b>.NET 9</b> — <code>CountBy</code> aur <code>AggregateBy</code>: <code>GroupBy</code> groups banaye bina per-key counts aur totals; <code>Index()</code>: <code>foreach</code> ke liye <code>(Index, Item)</code> pairs.</li>\n<li><b>.NET 10</b> — <code>Enumerable</code> aur <code>Queryable</code> par <code>LeftJoin</code> aur <code>RightJoin</code> operators. Pehle left join ke liye <code>GroupJoin</code> + <code>SelectMany</code> + <code>DefaultIfEmpty</code> lagta tha. C# query syntax mein inka keyword abhi nahi hai.</li>\n<li><b>EF Core 10</b> — <code>LeftJoin</code>/<code>RightJoin</code> ko SQL <code>LEFT JOIN</code>/<code>RIGHT JOIN</code> mein translate karta hai (EF Core 9/10 ke aur badlaav Day 6 mein).</li>\n<li><b>.NET 10</b> — <code>System.Linq.AsyncEnumerable</code>: <code>IAsyncEnumerable&lt;T&gt;</code> ke liye LINQ ab built-in hai (Day 3).</li>\n</ul>\n<p>Is tutorial ka code checker .NET 9 SDK use karta hai, isliye upar ke .NET 9 operators compile hokar chalte hain; .NET 10 wala <code>LeftJoin</code>/<code>RightJoin</code> snippet dikhaya gaya hai par compile nahi hota. Aaj ka code C# 12 collection expressions use karta hai (<code>int[] marks = [72, 35, 90];</code>).</p>\n<p><b>Aage (Oct 2026 tak ki jaankari):</b> .NET 11 (STS) November 2026 mein aane wala hai; .NET 10 hi LTS rahega.</p>"
      }
    }
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
        en: "<ul>\n<li><b>Deferred</b> (return a query): <code>Where</code>, <code>Select</code>, <code>SelectMany</code>, <code>OrderBy</code>/<code>ThenBy</code>, <code>GroupBy</code>, <code>Join</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>Concat</code>, <code>Zip</code>...</li>\n<li><b>Immediate</b> (run it): <code>foreach</code>; <code>ToList</code>/<code>ToArray</code>/<code>ToDictionary</code>/<code>ToHashSet</code>/<code>ToLookup</code>; aggregates <code>Count</code>, <code>Sum</code>, <code>Min</code>, <code>Max</code>, <code>Average</code>, <code>Aggregate</code>; quantifiers <code>Any</code>, <code>All</code>, <code>Contains</code>; elements <code>First</code>, <code>Single</code>, <code>Last</code>, <code>ElementAt</code>.</li>\n<li>Consequences: the query sees <b>current</b> source data and <b>current</b> values of captured variables; it runs <b>again</b> on each enumeration; exceptions inside lambdas appear <b>at enumeration</b>.</li>\n<li>Inside \"deferred\" there are two kinds: <b>streaming</b> (<code>Where</code>, <code>Select</code> — one item at a time) and <b>buffering</b> (<code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> — read everything first).</li>\n</ul>\n<p>Follow-up: \"Why is it designed this way?\" — composition (add filters step by step and run once), streaming large data without loading it all, and for <code>IQueryable</code>, sending one combined SQL query at the end.</p>\n<p>Follow-up: \"How do you force execution?\" — <code>ToList()</code>/<code>ToArray()</code> to get a snapshot you can reuse.</p>",
        hi: "<ul>\n<li><b>Deferred</b> (query return करते हैं): <code>Where</code>, <code>Select</code>, <code>SelectMany</code>, <code>OrderBy</code>/<code>ThenBy</code>, <code>GroupBy</code>, <code>Join</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>Concat</code>, <code>Zip</code>...</li>\n<li><b>Immediate</b> (उसे चलाते हैं): <code>foreach</code>; <code>ToList</code>/<code>ToArray</code>/<code>ToDictionary</code>/<code>ToHashSet</code>/<code>ToLookup</code>; aggregates <code>Count</code>, <code>Sum</code>, <code>Min</code>, <code>Max</code>, <code>Average</code>, <code>Aggregate</code>; quantifiers <code>Any</code>, <code>All</code>, <code>Contains</code>; elements <code>First</code>, <code>Single</code>, <code>Last</code>, <code>ElementAt</code>।</li>\n<li>नतीजे: query <b>current</b> source data और captured variables की <b>current</b> values देखती है; हर enumeration पर <b>फिर से</b> चलती है; lambdas के अंदर के exceptions <b>enumeration के समय</b> आते हैं।</li>\n<li>\"Deferred\" के अंदर दो तरह हैं: <b>streaming</b> (<code>Where</code>, <code>Select</code> — एक बार में एक item) और <b>buffering</b> (<code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> — पहले सब पढ़ते हैं)।</li>\n</ul>\n<p>Follow-up: \"ऐसा design क्यों है?\" — composition (filters step by step जोड़ो और एक बार चलाओ), बड़े data को पूरा load किए बिना stream करना, और <code>IQueryable</code> के लिए आख़िर में एक combined SQL query भेजना।</p>\n<p>Follow-up: \"Execution force कैसे करोगे?\" — <code>ToList()</code>/<code>ToArray()</code> से एक snapshot जिसे दोबारा use कर सको।</p>",
        hg: "<ul>\n<li><b>Deferred</b> (query return karte hain): <code>Where</code>, <code>Select</code>, <code>SelectMany</code>, <code>OrderBy</code>/<code>ThenBy</code>, <code>GroupBy</code>, <code>Join</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>Concat</code>, <code>Zip</code>...</li>\n<li><b>Immediate</b> (use chalate hain): <code>foreach</code>; <code>ToList</code>/<code>ToArray</code>/<code>ToDictionary</code>/<code>ToHashSet</code>/<code>ToLookup</code>; aggregates <code>Count</code>, <code>Sum</code>, <code>Min</code>, <code>Max</code>, <code>Average</code>, <code>Aggregate</code>; quantifiers <code>Any</code>, <code>All</code>, <code>Contains</code>; elements <code>First</code>, <code>Single</code>, <code>Last</code>, <code>ElementAt</code>.</li>\n<li>Nateeje: query <b>current</b> source data aur captured variables ki <b>current</b> values dekhti hai; har enumeration par <b>phir se</b> chalti hai; lambdas ke andar ke exceptions <b>enumeration ke samay</b> aate hain.</li>\n<li>\"Deferred\" ke andar do tarah hain: <b>streaming</b> (<code>Where</code>, <code>Select</code> — ek baar mein ek item) aur <b>buffering</b> (<code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> — pehle sab padhte hain).</li>\n</ul>\n<p>Follow-up: \"Aisa design kyon hai?\" — composition (filters step by step jodo aur ek baar chalao), bade data ko poora load kiye bina stream karna, aur <code>IQueryable</code> ke liye aakhir mein ek combined SQL query bhejna.</p>\n<p>Follow-up: \"Execution force kaise karoge?\" — <code>ToList()</code>/<code>ToArray()</code> se ek snapshot jise dobara use kar sako.</p>"
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
        en: "<ul>\n<li><code>Enumerable.Where(Func&lt;T,bool&gt;)</code> vs <code>Queryable.Where(Expression&lt;Func&lt;T,bool&gt;&gt;)</code>. Same lambda text — different target types.</li>\n<li><code>IQueryable&lt;T&gt;</code> inherits <code>IEnumerable&lt;T&gt;</code>. The <b>compile-time type</b> of your variable decides which <code>Where</code> is called. Once the query is treated as <code>IEnumerable</code> (variable type, <code>AsEnumerable()</code>, <code>ToList()</code>), the rest runs in memory.</li>\n<li>Both are deferred. <code>IQueryable</code> is executed by its <b>provider</b> when enumerated (EF Core: translate → run SQL → materialize objects).</li>\n<li>Example: <code>db.Orders.Where(o =&gt; o.Total &gt; 500).ToList()</code> → SQL <code>WHERE</code>. But <code>db.Orders.AsEnumerable().Where(...)</code> → all rows and all columns, then filter in C#.</li>\n</ul>\n<p>Follow-up: \"Then why not use IQueryable everywhere?\" — Not every C# method can be translated, the query's shape becomes visible to all layers, and in-memory data does not need it. Keep it inside the data-access layer.</p>\n<p><b>TL angle:</b> in code review, look for <code>IEnumerable&lt;T&gt;</code> parameters or <code>Func</code> filters on repository methods that wrap EF Core — they silently move filtering to memory. Day 5–6 show the generated SQL.</p>",
        hi: "<ul>\n<li><code>Enumerable.Where(Func&lt;T,bool&gt;)</code> बनाम <code>Queryable.Where(Expression&lt;Func&lt;T,bool&gt;&gt;)</code>। Lambda का text वही — target types अलग।</li>\n<li><code>IQueryable&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> को inherit करता है। आपके variable का <b>compile-time type</b> तय करता है कि कौन सा <code>Where</code> call होगा। जैसे ही query <code>IEnumerable</code> की तरह treat हुई (variable type, <code>AsEnumerable()</code>, <code>ToList()</code>), बाकी सब memory में चलता है।</li>\n<li>दोनों deferred हैं। <code>IQueryable</code> enumerate होने पर अपने <b>provider</b> से चलता है (EF Core: translate → SQL चलाओ → objects materialize करो)।</li>\n<li>Example: <code>db.Orders.Where(o =&gt; o.Total &gt; 500).ToList()</code> → SQL <code>WHERE</code>। पर <code>db.Orders.AsEnumerable().Where(...)</code> → सारी rows और सारे columns, फिर C# में filter।</li>\n</ul>\n<p>Follow-up: \"तो हर जगह IQueryable क्यों नहीं?\" — हर C# method translate नहीं होता, query का shape सारी layers को दिखने लगता है, और in-memory data को इसकी ज़रूरत नहीं। इसे data-access layer के अंदर रखो।</p>\n<p><b>TL angle:</b> code review में EF Core को wrap करने वाले repository methods पर <code>IEnumerable&lt;T&gt;</code> parameters या <code>Func</code> filters ढूँढो — ये चुपचाप filtering को memory में ले जाते हैं। Generated SQL Day 5–6 में दिखेगा।</p>",
        hg: "<ul>\n<li><code>Enumerable.Where(Func&lt;T,bool&gt;)</code> vs <code>Queryable.Where(Expression&lt;Func&lt;T,bool&gt;&gt;)</code>. Lambda ka text wahi — target types alag.</li>\n<li><code>IQueryable&lt;T&gt;</code>, <code>IEnumerable&lt;T&gt;</code> ko inherit karta hai. Aapke variable ka <b>compile-time type</b> tay karta hai ki kaun sa <code>Where</code> call hoga. Jaise hi query <code>IEnumerable</code> ki tarah treat hui (variable type, <code>AsEnumerable()</code>, <code>ToList()</code>), baaki sab memory mein chalta hai.</li>\n<li>Dono deferred hain. <code>IQueryable</code> enumerate hone par apne <b>provider</b> se chalta hai (EF Core: translate → SQL chalao → objects materialize karo).</li>\n<li>Example: <code>db.Orders.Where(o =&gt; o.Total &gt; 500).ToList()</code> → SQL <code>WHERE</code>. Par <code>db.Orders.AsEnumerable().Where(...)</code> → saari rows aur saare columns, phir C# mein filter.</li>\n</ul>\n<p>Follow-up: \"To har jagah IQueryable kyon nahi?\" — har C# method translate nahi hota, query ka shape saari layers ko dikhne lagta hai, aur in-memory data ko iski zaroorat nahi. Ise data-access layer ke andar rakho.</p>\n<p><b>TL angle:</b> code review mein EF Core ko wrap karne wale repository methods par <code>IEnumerable&lt;T&gt;</code> parameters ya <code>Func</code> filters dhoondho — yeh chupchaap filtering ko memory mein le jaate hain. Generated SQL Day 5–6 mein dikhega.</p>"
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
        en: "<ul>\n<li><code>orders.Select(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;List&lt;Line&gt;&gt;</code> (count = number of orders).</li>\n<li><code>orders.SelectMany(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;Line&gt;</code> (count = total number of lines).</li>\n<li>Keep the parent with the <b>result selector</b> overload: <code>SelectMany(o =&gt; o.Lines, (o, line) =&gt; new { o.Id, line.Product })</code>.</li>\n<li>Query syntax: two <code>from</code> clauses — <code>from o in orders from line in o.Lines select ...</code>.</li>\n<li>Two unrelated sequences with SelectMany give a <b>cross join</b> (every pair) — useful for combinations, dangerous on big data.</li>\n</ul>\n<p>Follow-up: \"Real examples?\" — all roles of all users, all tags of all posts, all files in all folders, all order lines for a sales report.</p>\n<p>Follow-up: \"What does it become in EF Core?\" — over a collection navigation, usually a <code>JOIN</code> (or <code>CROSS APPLY</code>/<code>LATERAL</code> in some shapes) — Day 5–6.</p>",
        hi: "<ul>\n<li><code>orders.Select(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;List&lt;Line&gt;&gt;</code> (count = orders की संख्या)।</li>\n<li><code>orders.SelectMany(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;Line&gt;</code> (count = कुल lines की संख्या)।</li>\n<li>Parent को साथ रखना हो तो <b>result selector</b> वाला overload: <code>SelectMany(o =&gt; o.Lines, (o, line) =&gt; new { o.Id, line.Product })</code>।</li>\n<li>Query syntax: दो <code>from</code> clauses — <code>from o in orders from line in o.Lines select ...</code>।</li>\n<li>दो unrelated sequences पर SelectMany एक <b>cross join</b> देता है (हर pair) — combinations के लिए काम का, बड़े data पर ख़तरनाक।</li>\n</ul>\n<p>Follow-up: \"Real examples?\" — सारे users के सारे roles, सारे posts के सारे tags, सारे folders की सारी files, sales report के लिए सारी order lines।</p>\n<p>Follow-up: \"EF Core में यह क्या बनता है?\" — collection navigation पर आमतौर पर एक <code>JOIN</code> (कुछ shapes में <code>CROSS APPLY</code>/<code>LATERAL</code>) — Day 5–6।</p>",
        hg: "<ul>\n<li><code>orders.Select(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;List&lt;Line&gt;&gt;</code> (count = orders ki sankhya).</li>\n<li><code>orders.SelectMany(o =&gt; o.Lines)</code> → <code>IEnumerable&lt;Line&gt;</code> (count = kul lines ki sankhya).</li>\n<li>Parent ko saath rakhna ho to <b>result selector</b> wala overload: <code>SelectMany(o =&gt; o.Lines, (o, line) =&gt; new { o.Id, line.Product })</code>.</li>\n<li>Query syntax: do <code>from</code> clauses — <code>from o in orders from line in o.Lines select ...</code>.</li>\n<li>Do unrelated sequences par SelectMany ek <b>cross join</b> deta hai (har pair) — combinations ke liye kaam ka, bade data par khatarnaak.</li>\n</ul>\n<p>Follow-up: \"Real examples?\" — saare users ke saare roles, saare posts ke saare tags, saare folders ki saari files, sales report ke liye saari order lines.</p>\n<p>Follow-up: \"EF Core mein yeh kya banta hai?\" — collection navigation par aamtaur par ek <code>JOIN</code> (kuch shapes mein <code>CROSS APPLY</code>/<code>LATERAL</code>) — Day 5–6.</p>"
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
        en: "<ul>\n<li><b>Single / SingleOrDefault</b>: lookups by a <b>unique</b> key (Id, email, PNR). If two rows come back, that is a data bug — failing loudly is good.</li>\n<li><b>First / FirstOrDefault</b>: \"any one\" or \"the top one\" — with an <code>OrderBy</code> when you mean a specific one (latest order, cheapest product).</li>\n<li><b>...OrDefault</b> when \"not found\" is a normal case; then check for <code>null</code> (or use the .NET 6 overload with your own default: <code>FirstOrDefault(pred, -1)</code>, important for value types where default is <code>0</code>).</li>\n<li><b>Cost</b>: <code>First</code> stops at the first match; <code>Single</code> must check there is no second one. EF Core on SQL Server: <code>First</code> → <code>TOP(1)</code>, <code>Single</code> → <code>TOP(2)</code>.</li>\n<li>Exception messages: \"Sequence contains no elements\" / \"no matching element\" / \"more than one matching element\" — all <code>InvalidOperationException</code>.</li>\n</ul>\n<p>Follow-up: \"In an API, which do you use for GET /orders/{id}?\" — <code>SingleOrDefault</code> (or <code>FirstOrDefault</code> on the primary key, or EF Core's <code>FindAsync</code>), then return 404 when it is <code>null</code>. Do not let <code>First()</code> throw and turn \"not found\" into a 500.</p>",
        hi: "<ul>\n<li><b>Single / SingleOrDefault</b>: <b>unique</b> key (Id, email, PNR) से lookup। अगर दो rows आ जाएँ तो वो data bug है — ज़ोर से fail होना अच्छा है।</li>\n<li><b>First / FirstOrDefault</b>: \"कोई एक\" या \"सबसे ऊपर वाला\" — जब कोई ख़ास item चाहिए (latest order, सबसे सस्ता product) तो <code>OrderBy</code> के साथ।</li>\n<li><b>...OrDefault</b> जब \"नहीं मिला\" normal case हो; फिर <code>null</code> check करो (या .NET 6 वाला अपने default वाला overload: <code>FirstOrDefault(pred, -1)</code>, value types के लिए ज़रूरी जहाँ default <code>0</code> होता है)।</li>\n<li><b>Cost</b>: <code>First</code> पहले match पर रुकता है; <code>Single</code> को check करना पड़ता है कि दूसरा तो नहीं है। SQL Server पर EF Core: <code>First</code> → <code>TOP(1)</code>, <code>Single</code> → <code>TOP(2)</code>।</li>\n<li>Exception messages: \"Sequence contains no elements\" / \"no matching element\" / \"more than one matching element\" — सब <code>InvalidOperationException</code>।</li>\n</ul>\n<p>Follow-up: \"API में GET /orders/{id} के लिए कौन सा use करोगे?\" — <code>SingleOrDefault</code> (या primary key पर <code>FirstOrDefault</code>, या EF Core का <code>FindAsync</code>), फिर <code>null</code> हो तो 404 return करो। <code>First()</code> को throw करके \"not found\" को 500 में मत बदलने दो।</p>",
        hg: "<ul>\n<li><b>Single / SingleOrDefault</b>: <b>unique</b> key (Id, email, PNR) se lookup. Agar do rows aa jaayein to woh data bug hai — zor se fail hona achha hai.</li>\n<li><b>First / FirstOrDefault</b>: \"koi ek\" ya \"sabse upar wala\" — jab koi khaas item chahiye (latest order, sabse sasta product) to <code>OrderBy</code> ke saath.</li>\n<li><b>...OrDefault</b> jab \"nahi mila\" normal case ho; phir <code>null</code> check karo (ya .NET 6 wala apne default wala overload: <code>FirstOrDefault(pred, -1)</code>, value types ke liye zaroori jahan default <code>0</code> hota hai).</li>\n<li><b>Cost</b>: <code>First</code> pehle match par rukta hai; <code>Single</code> ko check karna padta hai ki doosra to nahi hai. SQL Server par EF Core: <code>First</code> → <code>TOP(1)</code>, <code>Single</code> → <code>TOP(2)</code>.</li>\n<li>Exception messages: \"Sequence contains no elements\" / \"no matching element\" / \"more than one matching element\" — sab <code>InvalidOperationException</code>.</li>\n</ul>\n<p>Follow-up: \"API mein GET /orders/{id} ke liye kaun sa use karoge?\" — <code>SingleOrDefault</code> (ya primary key par <code>FirstOrDefault</code>, ya EF Core ka <code>FindAsync</code>), phir <code>null</code> ho to 404 return karo. <code>First()</code> ko throw karke \"not found\" ko 500 mein mat badalne do.</p>"
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
        en: "<ul>\n<li><b>Lazy query</b> (<code>Where(...)</code>, a <code>yield</code> method): <code>Any()</code> pulls one matching item; <code>Count()</code> runs the whole thing.</li>\n<li><b>EF Core</b>: <code>Any()</code> → <code>EXISTS (...)</code>, which the database can stop early; <code>Count() &gt; 0</code> → <code>COUNT(*)</code> over all matching rows.</li>\n<li><b>Collections</b> (<code>List&lt;T&gt;</code>, arrays): <code>list.Count</code>/<code>array.Length</code> are stored values — the clearest and cheapest. <code>Count()</code> on them is also fast (it detects <code>ICollection&lt;T&gt;</code>), but the property is simpler.</li>\n<li><b>Analyzers</b>: CA1827 (Count() where Any() would do), CA1829 (use the Count property instead of Count()), CA1860 (prefer comparing Count/Length to 0 over Any() on collections).</li>\n</ul>\n<p>Follow-up: \"When do you really need Count()?\" — when you need the number itself (a badge \"5 new messages\", paging totals). Then call it <b>once</b> and keep the value.</p>\n<p>Follow-up: \"What is <code>TryGetNonEnumeratedCount</code>?\" — .NET 6 method that gives the count only if it is cheap (a collection), without enumerating a lazy query.</p>",
        hi: "<ul>\n<li><b>Lazy query</b> (<code>Where(...)</code>, <code>yield</code> method): <code>Any()</code> एक matching item लेता है; <code>Count()</code> पूरी query चलाता है।</li>\n<li><b>EF Core</b>: <code>Any()</code> → <code>EXISTS (...)</code>, जिसे database जल्दी रोक सकता है; <code>Count() &gt; 0</code> → सारी matching rows पर <code>COUNT(*)</code>।</li>\n<li><b>Collections</b> (<code>List&lt;T&gt;</code>, arrays): <code>list.Count</code>/<code>array.Length</code> stored values हैं — सबसे साफ़ और सस्ते। इन पर <code>Count()</code> भी तेज़ है (यह <code>ICollection&lt;T&gt;</code> पहचान लेता है), पर property ज़्यादा simple है।</li>\n<li><b>Analyzers</b>: CA1827 (जहाँ Any() काफ़ी हो वहाँ Count()), CA1829 (Count() की जगह Count property), CA1860 (collections पर Any() की जगह Count/Length को 0 से compare करो)।</li>\n</ul>\n<p>Follow-up: \"Count() सच में कब चाहिए?\" — जब number ख़ुद चाहिए (badge \"5 new messages\", paging totals)। तब उसे <b>एक बार</b> call करो और value रख लो।</p>\n<p>Follow-up: \"<code>TryGetNonEnumeratedCount</code> क्या है?\" — .NET 6 का method जो count सिर्फ़ तब देता है जब वो सस्ता हो (collection), lazy query को enumerate किए बिना।</p>",
        hg: "<ul>\n<li><b>Lazy query</b> (<code>Where(...)</code>, <code>yield</code> method): <code>Any()</code> ek matching item leta hai; <code>Count()</code> poori query chalata hai.</li>\n<li><b>EF Core</b>: <code>Any()</code> → <code>EXISTS (...)</code>, jise database jaldi rok sakta hai; <code>Count() &gt; 0</code> → saari matching rows par <code>COUNT(*)</code>.</li>\n<li><b>Collections</b> (<code>List&lt;T&gt;</code>, arrays): <code>list.Count</code>/<code>array.Length</code> stored values hain — sabse saaf aur saste. In par <code>Count()</code> bhi tez hai (yeh <code>ICollection&lt;T&gt;</code> pehchaan leta hai), par property zyada simple hai.</li>\n<li><b>Analyzers</b>: CA1827 (jahan Any() kaafi ho wahan Count()), CA1829 (Count() ki jagah Count property), CA1860 (collections par Any() ki jagah Count/Length ko 0 se compare karo).</li>\n</ul>\n<p>Follow-up: \"Count() sach mein kab chahiye?\" — jab number khud chahiye (badge \"5 new messages\", paging totals). Tab use <b>ek baar</b> call karo aur value rakh lo.</p>\n<p>Follow-up: \"<code>TryGetNonEnumeratedCount</code> kya hai?\" — .NET 6 ka method jo count sirf tab deta hai jab woh sasta ho (collection), lazy query ko enumerate kiye bina.</p>"
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
        en: "<ul>\n<li>Type: <code>IEnumerable&lt;IGrouping&lt;TKey, TElement&gt;&gt;</code>. Typical use: <code>sales.GroupBy(s =&gt; s.City).Select(g =&gt; new { City = g.Key, Total = g.Sum(s =&gt; s.Amount) })</code>.</li>\n<li>Overloads: element selector, result selector, and an <code>IEqualityComparer&lt;TKey&gt;</code> (for example, case-insensitive city names).</li>\n<li>Order in LINQ to Objects (documented): groups in order of the key's <b>first appearance</b>, items in source order.</li>\n<li>Deferred but <b>buffering</b>: the first <code>MoveNext</code> reads the whole source and builds all groups.</li>\n<li>Composite keys: <code>GroupBy(x =&gt; new { x.City, x.Year })</code>. \"HAVING\": <code>.Where(g =&gt; g.Count() &gt; 5)</code> after grouping.</li>\n<li><b>ToLookup</b> is the immediate, indexable version; <b>CountBy</b>/<b>AggregateBy</b> (.NET 9) give per-key numbers without group objects.</li>\n</ul>\n<p>Follow-up: \"What does EF Core do with GroupBy?\" — <code>GroupBy</code> + aggregates (<code>Count</code>, <code>Sum</code>, <code>Max</code>) becomes SQL <code>GROUP BY</code>. Returning full groups of entities is a different story — Day 5–6.</p>",
        hi: "<ul>\n<li>Type: <code>IEnumerable&lt;IGrouping&lt;TKey, TElement&gt;&gt;</code>। आम use: <code>sales.GroupBy(s =&gt; s.City).Select(g =&gt; new { City = g.Key, Total = g.Sum(s =&gt; s.Amount) })</code>।</li>\n<li>Overloads: element selector, result selector, और एक <code>IEqualityComparer&lt;TKey&gt;</code> (जैसे case-insensitive city names)।</li>\n<li>LINQ to Objects में order (documented): groups key के <b>पहली बार दिखने</b> के order में, items source order में।</li>\n<li>Deferred पर <b>buffering</b>: पहला <code>MoveNext</code> पूरा source पढ़कर सारे groups बनाता है।</li>\n<li>Composite keys: <code>GroupBy(x =&gt; new { x.City, x.Year })</code>। \"HAVING\": grouping के बाद <code>.Where(g =&gt; g.Count() &gt; 5)</code>।</li>\n<li><b>ToLookup</b> इसका immediate, indexable version है; <b>CountBy</b>/<b>AggregateBy</b> (.NET 9) group objects के बिना per-key numbers देते हैं।</li>\n</ul>\n<p>Follow-up: \"EF Core GroupBy के साथ क्या करता है?\" — <code>GroupBy</code> + aggregates (<code>Count</code>, <code>Sum</code>, <code>Max</code>) SQL <code>GROUP BY</code> बनता है। Entities के पूरे groups return करना अलग कहानी है — Day 5–6।</p>",
        hg: "<ul>\n<li>Type: <code>IEnumerable&lt;IGrouping&lt;TKey, TElement&gt;&gt;</code>. Aam use: <code>sales.GroupBy(s =&gt; s.City).Select(g =&gt; new { City = g.Key, Total = g.Sum(s =&gt; s.Amount) })</code>.</li>\n<li>Overloads: element selector, result selector, aur ek <code>IEqualityComparer&lt;TKey&gt;</code> (jaise case-insensitive city names).</li>\n<li>LINQ to Objects mein order (documented): groups key ke <b>pehli baar dikhne</b> ke order mein, items source order mein.</li>\n<li>Deferred par <b>buffering</b>: pehla <code>MoveNext</code> poora source padhkar saare groups banata hai.</li>\n<li>Composite keys: <code>GroupBy(x =&gt; new { x.City, x.Year })</code>. \"HAVING\": grouping ke baad <code>.Where(g =&gt; g.Count() &gt; 5)</code>.</li>\n<li><b>ToLookup</b> iska immediate, indexable version hai; <b>CountBy</b>/<b>AggregateBy</b> (.NET 9) group objects ke bina per-key numbers dete hain.</li>\n</ul>\n<p>Follow-up: \"EF Core GroupBy ke saath kya karta hai?\" — <code>GroupBy</code> + aggregates (<code>Count</code>, <code>Sum</code>, <code>Max</code>) SQL <code>GROUP BY</code> banta hai. Entities ke poore groups return karna alag kahaani hai — Day 5–6.</p>"
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
        en: "<ul>\n<li><b>Inner</b>: <code>from c in customers join o in orders on c.Id equals o.CustomerId select ...</code> — or <code>customers.Join(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>. Customers without orders disappear.</li>\n<li><b>Left (classic)</b>: <code>join o in orders on c.Id equals o.CustomerId into cOrders from o in cOrders.DefaultIfEmpty() select new { c.Name, OrderId = o == null ? (int?)null : o.Id }</code>. Handle the <code>null</code>.</li>\n<li><b>.NET 10</b>: <code>customers.LeftJoin(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>; EF Core 10 translates it to <code>LEFT JOIN</code>. Query syntax has no keyword for it yet.</li>\n<li><code>equals</code> order matters in query syntax (outer key on the left; swapping gives CS1937/CS1938). Only equality joins — other conditions need <code>from</code> + <code>where</code>.</li>\n<li>LINQ to Objects <code>Join</code> uses a hash lookup of the inner sequence — roughly O(n + m).</li>\n</ul>\n<p>Follow-up: \"In EF Core, would you write the join yourself?\" — If the relationship is mapped, use navigation properties (<code>c.Orders</code>, <code>o.Customer</code>) and let EF write the joins; use explicit joins for unrelated tables.</p>",
        hi: "<ul>\n<li><b>Inner</b>: <code>from c in customers join o in orders on c.Id equals o.CustomerId select ...</code> — या <code>customers.Join(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>। बिना orders वाले customers गायब।</li>\n<li><b>Left (classic)</b>: <code>join o in orders on c.Id equals o.CustomerId into cOrders from o in cOrders.DefaultIfEmpty() select new { c.Name, OrderId = o == null ? (int?)null : o.Id }</code>। <code>null</code> को संभालो।</li>\n<li><b>.NET 10</b>: <code>customers.LeftJoin(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>; EF Core 10 इसे <code>LEFT JOIN</code> में translate करता है। Query syntax में इसका keyword अभी नहीं है।</li>\n<li>Query syntax में <code>equals</code> का order मायने रखता है (outer key बाईं तरफ़; बदलने पर CS1937/CS1938)। सिर्फ़ equality joins — दूसरी conditions के लिए <code>from</code> + <code>where</code>।</li>\n<li>LINQ to Objects का <code>Join</code> inner sequence का hash lookup use करता है — लगभग O(n + m)।</li>\n</ul>\n<p>Follow-up: \"EF Core में join ख़ुद लिखोगे?\" — अगर relationship mapped है तो navigation properties (<code>c.Orders</code>, <code>o.Customer</code>) use करो और joins EF को लिखने दो; unrelated tables के लिए explicit joins।</p>",
        hg: "<ul>\n<li><b>Inner</b>: <code>from c in customers join o in orders on c.Id equals o.CustomerId select ...</code> — ya <code>customers.Join(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>. Bina orders wale customers gaayab.</li>\n<li><b>Left (classic)</b>: <code>join o in orders on c.Id equals o.CustomerId into cOrders from o in cOrders.DefaultIfEmpty() select new { c.Name, OrderId = o == null ? (int?)null : o.Id }</code>. <code>null</code> ko sambhaalo.</li>\n<li><b>.NET 10</b>: <code>customers.LeftJoin(orders, c =&gt; c.Id, o =&gt; o.CustomerId, (c, o) =&gt; ...)</code>; EF Core 10 ise <code>LEFT JOIN</code> mein translate karta hai. Query syntax mein iska keyword abhi nahi hai.</li>\n<li>Query syntax mein <code>equals</code> ka order maayne rakhta hai (outer key baayin taraf; badalne par CS1937/CS1938). Sirf equality joins — doosri conditions ke liye <code>from</code> + <code>where</code>.</li>\n<li>LINQ to Objects ka <code>Join</code> inner sequence ka hash lookup use karta hai — lagbhag O(n + m).</li>\n</ul>\n<p>Follow-up: \"EF Core mein join khud likhoge?\" — agar relationship mapped hai to navigation properties (<code>c.Orders</code>, <code>o.Customer</code>) use karo aur joins EF ko likhne do; unrelated tables ke liye explicit joins.</p>"
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
        en: "<ul>\n<li><b>Order first</b>: without <code>ORDER BY</code>, a database may return rows in any order, so page 2 can repeat or skip rows from page 1. Add a unique tie-breaker: <code>OrderBy(p =&gt; p.Name).ThenBy(p =&gt; p.Id)</code>.</li>\n<li><b>Offset paging</b>: <code>query.OrderBy(...).Skip((page - 1) * size).Take(size)</code>. EF Core on SQL Server → <code>OFFSET ... ROWS FETCH NEXT ... ROWS ONLY</code>.</li>\n<li><b>Total</b>: <code>await query.CountAsync()</code> — a second query; total pages = <code>(total + size - 1) / size</code>. Validate <code>page &gt;= 1</code> and cap <code>size</code> (for example, 100) so a client cannot ask for a million rows.</li>\n<li><b>Keyset (seek) paging</b>: <code>query.Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code>. Uses the index directly, so page 10,000 is as fast as page 1, and rows inserted meanwhile do not shift pages. Trade-off: no \"jump to page N\".</li>\n<li>Apply <code>Skip</code>/<code>Take</code> on the <b>IQueryable</b> — not after <code>ToList()</code>.</li>\n</ul>\n<p>Follow-up: \"Which would you choose for an infinite-scroll mobile feed?\" — keyset paging (a cursor such as the last Id or last timestamp + Id). For an admin grid with page numbers, offset paging is fine.</p>",
        hi: "<ul>\n<li><b>पहले order</b>: <code>ORDER BY</code> के बिना database rows किसी भी order में दे सकता है, इसलिए page 2 में page 1 की rows दोहरा सकती हैं या छूट सकती हैं। एक unique tie-breaker जोड़ो: <code>OrderBy(p =&gt; p.Name).ThenBy(p =&gt; p.Id)</code>।</li>\n<li><b>Offset paging</b>: <code>query.OrderBy(...).Skip((page - 1) * size).Take(size)</code>। SQL Server पर EF Core → <code>OFFSET ... ROWS FETCH NEXT ... ROWS ONLY</code>।</li>\n<li><b>Total</b>: <code>await query.CountAsync()</code> — एक दूसरी query; total pages = <code>(total + size - 1) / size</code>। <code>page &gt;= 1</code> validate करो और <code>size</code> पर limit लगाओ (जैसे 100), ताकि client दस लाख rows न माँग सके।</li>\n<li><b>Keyset (seek) paging</b>: <code>query.Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code>। सीधे index use करता है, इसलिए page 10,000 भी page 1 जितना तेज़, और बीच में insert हुई rows pages को खिसकाती नहीं। Trade-off: \"page N पर jump\" नहीं।</li>\n<li><code>Skip</code>/<code>Take</code> <b>IQueryable</b> पर लगाओ — <code>ToList()</code> के बाद नहीं।</li>\n</ul>\n<p>Follow-up: \"Infinite-scroll mobile feed के लिए क्या चुनोगे?\" — keyset paging (cursor जैसे last Id या last timestamp + Id)। Page numbers वाले admin grid के लिए offset paging ठीक है।</p>",
        hg: "<ul>\n<li><b>Pehle order</b>: <code>ORDER BY</code> ke bina database rows kisi bhi order mein de sakta hai, isliye page 2 mein page 1 ki rows dohra sakti hain ya chhoot sakti hain. Ek unique tie-breaker jodo: <code>OrderBy(p =&gt; p.Name).ThenBy(p =&gt; p.Id)</code>.</li>\n<li><b>Offset paging</b>: <code>query.OrderBy(...).Skip((page - 1) * size).Take(size)</code>. SQL Server par EF Core → <code>OFFSET ... ROWS FETCH NEXT ... ROWS ONLY</code>.</li>\n<li><b>Total</b>: <code>await query.CountAsync()</code> — ek doosri query; total pages = <code>(total + size - 1) / size</code>. <code>page &gt;= 1</code> validate karo aur <code>size</code> par limit lagao (jaise 100), taaki client das laakh rows na maang sake.</li>\n<li><b>Keyset (seek) paging</b>: <code>query.Where(p =&gt; p.Id &gt; lastId).OrderBy(p =&gt; p.Id).Take(size)</code>. Seedhe index use karta hai, isliye page 10,000 bhi page 1 jitna tez, aur beech mein insert hui rows pages ko khiskaati nahi. Trade-off: \"page N par jump\" nahi.</li>\n<li><code>Skip</code>/<code>Take</code> <b>IQueryable</b> par lagao — <code>ToList()</code> ke baad nahi.</li>\n</ul>\n<p>Follow-up: \"Infinite-scroll mobile feed ke liye kya chunoge?\" — keyset paging (cursor jaise last Id ya last timestamp + Id). Page numbers wale admin grid ke liye offset paging theek hai.</p>"
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
        en: "<ul>\n<li>Typical code: <code>void Send(IEnumerable&lt;User&gt; users) { if (!users.Any()) return; log(users.Count()); foreach (var u in users) ... }</code> — three enumerations. If <code>users</code> is an EF query, that is three SQL queries.</li>\n<li>Results can differ between runs (data changed, or lambdas with <code>Guid.NewGuid()</code>/<code>DateTime.Now</code>/random).</li>\n<li><b>Fix 1</b>: materialize once — <code>var list = users.ToList();</code> — and use <code>list.Count</code>.</li>\n<li><b>Fix 2</b>: change the parameter to <code>IReadOnlyCollection&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> when the method needs a count or several passes — the type tells callers \"give me a real collection\".</li>\n<li><b>Fix 3</b>: restructure into one pass (count while looping).</li>\n<li>Detection: CA1851 (enable it in <code>.editorconfig</code>), Rider/ReSharper warnings, and code review.</li>\n</ul>\n<p>Follow-up: \"So should every method call ToList() on its input?\" — No. Copying \"just in case\" wastes memory and hides the real contract. Decide at the boundary and express it in the parameter type.</p>",
        hi: "<ul>\n<li>आम code: <code>void Send(IEnumerable&lt;User&gt; users) { if (!users.Any()) return; log(users.Count()); foreach (var u in users) ... }</code> — तीन enumerations। अगर <code>users</code> EF query है, तो तीन SQL queries।</li>\n<li>Runs के बीच results अलग हो सकते हैं (data बदल गया, या <code>Guid.NewGuid()</code>/<code>DateTime.Now</code>/random वाले lambdas)।</li>\n<li><b>Fix 1</b>: एक बार materialize करो — <code>var list = users.ToList();</code> — और <code>list.Count</code> use करो।</li>\n<li><b>Fix 2</b>: जब method को count या कई passes चाहिए, तो parameter को <code>IReadOnlyCollection&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> बना दो — type ख़ुद callers को बताता है \"मुझे असली collection दो\"।</li>\n<li><b>Fix 3</b>: code को एक pass में बदलो (loop करते-करते गिनो)।</li>\n<li>पकड़ना: CA1851 (<code>.editorconfig</code> में enable करो), Rider/ReSharper warnings, और code review।</li>\n</ul>\n<p>Follow-up: \"तो क्या हर method अपने input पर ToList() call करे?\" — नहीं। \"Just in case\" copy करना memory बर्बाद करता है और असली contract छुपाता है। Boundary पर तय करो और parameter type में लिखो।</p>",
        hg: "<ul>\n<li>Aam code: <code>void Send(IEnumerable&lt;User&gt; users) { if (!users.Any()) return; log(users.Count()); foreach (var u in users) ... }</code> — teen enumerations. Agar <code>users</code> EF query hai, to teen SQL queries.</li>\n<li>Runs ke beech results alag ho sakte hain (data badal gaya, ya <code>Guid.NewGuid()</code>/<code>DateTime.Now</code>/random wale lambdas).</li>\n<li><b>Fix 1</b>: ek baar materialize karo — <code>var list = users.ToList();</code> — aur <code>list.Count</code> use karo.</li>\n<li><b>Fix 2</b>: jab method ko count ya kai passes chahiye, to parameter ko <code>IReadOnlyCollection&lt;T&gt;</code>/<code>IReadOnlyList&lt;T&gt;</code> bana do — type khud callers ko batata hai \"mujhe asli collection do\".</li>\n<li><b>Fix 3</b>: code ko ek pass mein badlo (loop karte-karte gino).</li>\n<li>Pakadna: CA1851 (<code>.editorconfig</code> mein enable karo), Rider/ReSharper warnings, aur code review.</li>\n</ul>\n<p>Follow-up: \"To kya har method apne input par ToList() call kare?\" — Nahi. \"Just in case\" copy karna memory barbaad karta hai aur asli contract chhupata hai. Boundary par tay karo aur parameter type mein likho.</p>"
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
        en: "<ul>\n<li><b>Too early</b>: <code>db.Orders.ToList().Where(o =&gt; o.Status == \"Paid\").Take(20)</code> loads the <b>whole table</b> into memory, then filters. Correct: <code>db.Orders.Where(...).OrderBy(...).Take(20).ToList()</code>.</li>\n<li><b>Too early, in memory</b>: <code>ToList()</code> after every step copies the data again and again for no reason.</li>\n<li><b>Too late</b>: a method returns <code>IEnumerable&lt;Order&gt;</code> built on a <code>DbContext</code> that is disposed when the method ends; the caller enumerates later → \"Cannot access a disposed context instance\". Or the same deferred query is enumerated in three places → three runs.</li>\n<li><b>Never</b> can be right: streaming a big export row by row with <code>foreach</code> (or <code>IAsyncEnumerable</code> with <code>AsAsyncEnumerable()</code> in EF Core) keeps memory flat.</li>\n<li><code>ToList()</code> vs <code>ToArray()</code>: both copy; choose by what the consumer needs (a growable list or a fixed array). The difference is rarely important.</li>\n</ul>\n<p>Follow-up: \"What does a repository usually return?\" — a materialized <code>List</code>/<code>IReadOnlyList</code> of DTOs, built with <code>ToListAsync()</code> at the end of the query.</p>",
        hi: "<ul>\n<li><b>बहुत जल्दी</b>: <code>db.Orders.ToList().Where(o =&gt; o.Status == \"Paid\").Take(20)</code> <b>पूरी table</b> memory में load करता है, फिर filter। सही: <code>db.Orders.Where(...).OrderBy(...).Take(20).ToList()</code>।</li>\n<li><b>बहुत जल्दी, memory में</b>: हर step के बाद <code>ToList()</code> बिना वजह data बार-बार copy करता है।</li>\n<li><b>बहुत देर</b>: कोई method ऐसे <code>DbContext</code> पर बना <code>IEnumerable&lt;Order&gt;</code> return करता है जो method ख़त्म होते ही dispose हो जाता है; caller बाद में enumerate करता है → \"Cannot access a disposed context instance\"। या वही deferred query तीन जगह enumerate होती है → तीन बार चलती है।</li>\n<li><b>कभी नहीं</b> भी सही हो सकता है: बड़ा export <code>foreach</code> से row by row stream करना (या EF Core में <code>AsAsyncEnumerable()</code> के साथ <code>IAsyncEnumerable</code>) memory को flat रखता है।</li>\n<li><code>ToList()</code> बनाम <code>ToArray()</code>: दोनों copy करते हैं; consumer को जो चाहिए वो चुनो (बढ़ने वाली list या fixed array)। फ़र्क शायद ही मायने रखता है।</li>\n</ul>\n<p>Follow-up: \"Repository आमतौर पर क्या return करती है?\" — DTOs की materialized <code>List</code>/<code>IReadOnlyList</code>, जो query के आख़िर में <code>ToListAsync()</code> से बनती है।</p>",
        hg: "<ul>\n<li><b>Bahut jaldi</b>: <code>db.Orders.ToList().Where(o =&gt; o.Status == \"Paid\").Take(20)</code> <b>poori table</b> memory mein load karta hai, phir filter. Sahi: <code>db.Orders.Where(...).OrderBy(...).Take(20).ToList()</code>.</li>\n<li><b>Bahut jaldi, memory mein</b>: har step ke baad <code>ToList()</code> bina wajah data baar-baar copy karta hai.</li>\n<li><b>Bahut der</b>: koi method aise <code>DbContext</code> par bana <code>IEnumerable&lt;Order&gt;</code> return karta hai jo method khatam hote hi dispose ho jaata hai; caller baad mein enumerate karta hai → \"Cannot access a disposed context instance\". Ya wahi deferred query teen jagah enumerate hoti hai → teen baar chalti hai.</li>\n<li><b>Kabhi nahi</b> bhi sahi ho sakta hai: bada export <code>foreach</code> se row by row stream karna (ya EF Core mein <code>AsAsyncEnumerable()</code> ke saath <code>IAsyncEnumerable</code>) memory ko flat rakhta hai.</li>\n<li><code>ToList()</code> vs <code>ToArray()</code>: dono copy karte hain; consumer ko jo chahiye woh chuno (badhne wali list ya fixed array). Farq shayad hi maayne rakhta hai.</li>\n</ul>\n<p>Follow-up: \"Repository aamtaur par kya return karti hai?\" — DTOs ki materialized <code>List</code>/<code>IReadOnlyList</code>, jo query ke aakhir mein <code>ToListAsync()</code> se banti hai.</p>"
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
        en: "<ul>\n<li><code>from p in products where p.Price &gt; 100 select p.Name</code> → <code>products.Where(p =&gt; p.Price &gt; 100).Select(p =&gt; p.Name)</code>. Same IL, same speed.</li>\n<li><b>Only method syntax</b>: <code>Count</code>, <code>First</code>, <code>Any</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>ToList</code>, <code>MinBy</code>... Mix is fine: <code>(from ... select ...).ToList()</code>.</li>\n<li><b>Query syntax shines</b> with <code>join ... into</code> (left joins), several <code>from</code> clauses (SelectMany), and <code>let</code> (an intermediate value: <code>let total = o.Lines.Sum(l =&gt; l.Price)</code>), which in method syntax needs an extra <code>Select</code> to an anonymous type.</li>\n<li>Query syntax works with any type that has the right methods (<code>Where</code>, <code>Select</code>, <code>SelectMany</code>...) — it is a compiler pattern, not tied to <code>IEnumerable</code>.</li>\n</ul>\n<p><b>TL angle:</b> be consistent within a codebase; method syntax is more common in modern .NET code and in EF Core samples. A good answer shows you can read and write both.</p>",
        hi: "<ul>\n<li><code>from p in products where p.Price &gt; 100 select p.Name</code> → <code>products.Where(p =&gt; p.Price &gt; 100).Select(p =&gt; p.Name)</code>। वही IL, वही speed।</li>\n<li><b>सिर्फ़ method syntax</b>: <code>Count</code>, <code>First</code>, <code>Any</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>ToList</code>, <code>MinBy</code>... Mix करना ठीक है: <code>(from ... select ...).ToList()</code>।</li>\n<li><b>Query syntax चमकता है</b> <code>join ... into</code> (left joins), कई <code>from</code> clauses (SelectMany), और <code>let</code> के साथ (बीच की value: <code>let total = o.Lines.Sum(l =&gt; l.Price)</code>), जिसके लिए method syntax में anonymous type वाला एक extra <code>Select</code> लगता है।</li>\n<li>Query syntax किसी भी type के साथ चलता है जिसमें सही methods (<code>Where</code>, <code>Select</code>, <code>SelectMany</code>...) हों — यह compiler का pattern है, <code>IEnumerable</code> से बँधा नहीं।</li>\n</ul>\n<p><b>TL angle:</b> एक codebase में consistent रहो; modern .NET code और EF Core samples में method syntax ज़्यादा common है। अच्छा जवाब दिखाता है कि आप दोनों पढ़ और लिख सकते हो।</p>",
        hg: "<ul>\n<li><code>from p in products where p.Price &gt; 100 select p.Name</code> → <code>products.Where(p =&gt; p.Price &gt; 100).Select(p =&gt; p.Name)</code>. Wahi IL, wahi speed.</li>\n<li><b>Sirf method syntax</b>: <code>Count</code>, <code>First</code>, <code>Any</code>, <code>Distinct</code>, <code>Skip</code>, <code>Take</code>, <code>ToList</code>, <code>MinBy</code>... Mix karna theek hai: <code>(from ... select ...).ToList()</code>.</li>\n<li><b>Query syntax chamakta hai</b> <code>join ... into</code> (left joins), kai <code>from</code> clauses (SelectMany), aur <code>let</code> ke saath (beech ki value: <code>let total = o.Lines.Sum(l =&gt; l.Price)</code>), jiske liye method syntax mein anonymous type wala ek extra <code>Select</code> lagta hai.</li>\n<li>Query syntax kisi bhi type ke saath chalta hai jismein sahi methods (<code>Where</code>, <code>Select</code>, <code>SelectMany</code>...) hon — yeh compiler ka pattern hai, <code>IEnumerable</code> se bandha nahi.</li>\n</ul>\n<p><b>TL angle:</b> ek codebase mein consistent raho; modern .NET code aur EF Core samples mein method syntax zyada common hai. Achha jawaab dikhata hai ki aap dono padh aur likh sakte ho.</p>"
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
        en: "<ul>\n<li>A method with <code>yield return</code> is compiled into a <b>state machine</b> class. Calling the method only creates that object; the body starts running on the first <code>MoveNext()</code> and pauses at each <code>yield return</code>.</li>\n<li><code>Where</code> conceptually is: <code>foreach (var x in source) if (predicate(x)) yield return x;</code>. Chain several and each <code>MoveNext</code> on the last one pulls through the whole chain — that is why items flow one by one.</li>\n<li>The real implementation adds special classes for arrays and lists, and merges common chains (for example <code>Where</code> + <code>Select</code>) into one iterator for speed. Behaviour stays the same.</li>\n<li><b>Argument checks are eager</b>: real LINQ validates <code>null</code> arguments in a normal method and then returns the iterator, so <code>ArgumentNullException</code> appears at the call. In your own iterator methods, do the same: a public non-iterator method that validates, calling a private iterator.</li>\n</ul>\n<p>Follow-up: \"What about IQueryable?\" — different mechanism: operators add nodes to an expression tree; the provider executes the whole tree on enumeration.</p>",
        hi: "<ul>\n<li><code>yield return</code> वाला method एक <b>state machine</b> class में compile होता है। Method call करने से सिर्फ़ वो object बनता है; body पहले <code>MoveNext()</code> पर चलना शुरू होती है और हर <code>yield return</code> पर रुकती है।</li>\n<li><code>Where</code> समझने के लिए बस इतना है: <code>foreach (var x in source) if (predicate(x)) yield return x;</code>। कई जोड़ दो, तो आख़िरी वाले पर हर <code>MoveNext</code> पूरी chain से item खींचता है — इसीलिए items एक-एक करके बहते हैं।</li>\n<li>असली implementation arrays और lists के लिए special classes जोड़ता है, और speed के लिए common chains (जैसे <code>Where</code> + <code>Select</code>) को एक iterator में मिला देता है। Behaviour वही रहता है।</li>\n<li><b>Argument checks तुरंत होते हैं</b>: असली LINQ <code>null</code> arguments को एक normal method में validate करता है और फिर iterator return करता है, इसलिए <code>ArgumentNullException</code> call पर ही आता है। अपने iterator methods में भी यही करो: एक public non-iterator method जो validate करे, और एक private iterator को call करे।</li>\n</ul>\n<p>Follow-up: \"IQueryable का क्या?\" — अलग mechanism: operators एक expression tree में nodes जोड़ते हैं; enumeration पर provider पूरा tree चलाता है।</p>",
        hg: "<ul>\n<li><code>yield return</code> wala method ek <b>state machine</b> class mein compile hota hai. Method call karne se sirf woh object banta hai; body pehle <code>MoveNext()</code> par chalna shuru hoti hai aur har <code>yield return</code> par rukti hai.</li>\n<li><code>Where</code> samajhne ke liye bas itna hai: <code>foreach (var x in source) if (predicate(x)) yield return x;</code>. Kai jod do, to aakhri wale par har <code>MoveNext</code> poori chain se item kheenchta hai — isiliye items ek-ek karke behte hain.</li>\n<li>Asli implementation arrays aur lists ke liye special classes jodta hai, aur speed ke liye common chains (jaise <code>Where</code> + <code>Select</code>) ko ek iterator mein mila deta hai. Behaviour wahi rehta hai.</li>\n<li><b>Argument checks turant hote hain</b>: asli LINQ <code>null</code> arguments ko ek normal method mein validate karta hai aur phir iterator return karta hai, isliye <code>ArgumentNullException</code> call par hi aata hai. Apne iterator methods mein bhi yahi karo: ek public non-iterator method jo validate kare, aur ek private iterator ko call kare.</li>\n</ul>\n<p>Follow-up: \"IQueryable ka kya?\" — alag mechanism: operators ek expression tree mein nodes jodte hain; enumeration par provider poora tree chalata hai.</p>"
      },
      code: [
        {
          caption: {
            en: "A hand-written Where with yield return: nothing runs at the call; the body starts on the first MoveNext and pauses at each yield",
            hi: "yield return से हाथ से लिखा Where: call पर कुछ नहीं चलता; body पहले MoveNext पर शुरू होती है और हर yield पर रुकती है",
            hg: "yield return se haath se likha Where: call par kuch nahi chalta; body pehle MoveNext par shuru hoti hai aur har yield par rukti hai"
          },
          check: "run",
          expected: "Created\nMyWhere starts\n  checking 1\n  checking 2\nGot 2\n  checking 3\n  checking 4\nGot 4",
          src: "int[] numbers = [1, 2, 3, 4];\nvar evens = MyWhere(numbers, n => n % 2 == 0);\nConsole.WriteLine(\"Created\");\n\nforeach (var n in evens)\n    Console.WriteLine($\"Got {n}\");\n\nstatic IEnumerable<T> MyWhere<T>(IEnumerable<T> source, Func<T, bool> predicate)\n{\n    Console.WriteLine(\"MyWhere starts\");      // runs on the first MoveNext, not at the call\n    foreach (var item in source)\n    {\n        Console.WriteLine($\"  checking {item}\");\n        if (predicate(item))\n            yield return item;                // hand one item to the caller and pause here\n    }\n}"
        }
      ]
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
        en: "<ul>\n<li>The compiler decides by the <b>target type</b>: assign <code>x =&gt; x.Age &gt; 18</code> to <code>Func&lt;User,bool&gt;</code> → IL code; to <code>Expression&lt;Func&lt;User,bool&gt;&gt;</code> → code that builds a tree (<code>Lambda(GreaterThan(Member(x, Age), Constant(18)))</code>).</li>\n<li>An expression tree can be walked by a visitor and turned into SQL, a REST query, a search query... It can also be compiled to a delegate with <code>.Compile()</code>.</li>\n<li>Limits: only expression-bodied lambdas (statement bodies → CS0834); and the provider must understand every method you call inside — your own C# helper usually cannot be translated.</li>\n<li><b>Trap</b>: passing a <code>Func</code> variable to <code>Where</code> on an <code>IQueryable</code> silently picks <code>Enumerable.Where</code> → the whole table is loaded.</li>\n</ul>\n<p>Follow-up: \"Where else are expression trees used?\" — EF Core, OData, mapping libraries, strongly typed config like <code>builder.Property(x =&gt; x.Name)</code>, and validation libraries that read property names from <code>x =&gt; x.Email</code>.</p>",
        hi: "<ul>\n<li>Compiler <b>target type</b> से तय करता है: <code>x =&gt; x.Age &gt; 18</code> को <code>Func&lt;User,bool&gt;</code> में रखो → IL code; <code>Expression&lt;Func&lt;User,bool&gt;&gt;</code> में रखो → ऐसा code जो एक tree बनाता है (<code>Lambda(GreaterThan(Member(x, Age), Constant(18)))</code>)।</li>\n<li>Expression tree पर visitor चलाकर उसे SQL, REST query, search query... में बदला जा सकता है। <code>.Compile()</code> से उसे delegate में भी compile कर सकते हो।</li>\n<li>Limits: सिर्फ़ expression-bodied lambdas (statement bodies → CS0834); और अंदर call किया हर method provider को समझ आना चाहिए — आपका अपना C# helper आमतौर पर translate नहीं होता।</li>\n<li><b>Trap</b>: <code>IQueryable</code> पर <code>Where</code> को <code>Func</code> variable देने से चुपचाप <code>Enumerable.Where</code> चुना जाता है → पूरी table load होती है।</li>\n</ul>\n<p>Follow-up: \"Expression trees और कहाँ use होते हैं?\" — EF Core, OData, mapping libraries, <code>builder.Property(x =&gt; x.Name)</code> जैसी strongly typed config, और validation libraries जो <code>x =&gt; x.Email</code> से property names पढ़ती हैं।</p>",
        hg: "<ul>\n<li>Compiler <b>target type</b> se tay karta hai: <code>x =&gt; x.Age &gt; 18</code> ko <code>Func&lt;User,bool&gt;</code> mein rakho → IL code; <code>Expression&lt;Func&lt;User,bool&gt;&gt;</code> mein rakho → aisa code jo ek tree banata hai (<code>Lambda(GreaterThan(Member(x, Age), Constant(18)))</code>).</li>\n<li>Expression tree par visitor chalakar use SQL, REST query, search query... mein badla ja sakta hai. <code>.Compile()</code> se use delegate mein bhi compile kar sakte ho.</li>\n<li>Limits: sirf expression-bodied lambdas (statement bodies → CS0834); aur andar call kiya har method provider ko samajh aana chahiye — aapka apna C# helper aamtaur par translate nahi hota.</li>\n<li><b>Trap</b>: <code>IQueryable</code> par <code>Where</code> ko <code>Func</code> variable dene se chupchaap <code>Enumerable.Where</code> chuna jaata hai → poori table load hoti hai.</li>\n</ul>\n<p>Follow-up: \"Expression trees aur kahan use hote hain?\" — EF Core, OData, mapping libraries, <code>builder.Property(x =&gt; x.Name)</code> jaisi strongly typed config, aur validation libraries jo <code>x =&gt; x.Email</code> se property names padhti hain.</p>"
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
        en: "<ul>\n<li><b>For returning IQueryable</b>: callers can add filters, sorting, paging and projections that still run in SQL; fewer repository methods.</li>\n<li><b>Against</b>: the query can be built anywhere (controllers, UI), so performance problems (N+1, missing indexes, huge results) appear far from the data code; \"could not be translated\" errors appear at runtime in other layers; testing with in-memory <code>IQueryable</code> behaves differently from SQL; the <code>DbContext</code> lifetime must outlive the query.</li>\n<li><b>Returning <code>IEnumerable&lt;T&gt;</code> that is secretly a deferred EF query</b> is the worst of both: it looks safe but runs late, maybe twice, maybe after the context is gone.</li>\n<li><b>Common middle ground</b>: methods like <code>GetActiveOrdersAsync(customerId, page, size)</code> returning <code>IReadOnlyList&lt;OrderDto&gt;</code>; or the <b>specification pattern</b> (filters as <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code>) inside the data layer. Many teams also use <code>DbContext</code> directly in a thin application layer instead of a generic repository.</li>\n</ul>\n<p><b>TL angle:</b> there is no single right answer — say what your team chose, why, and what rule you enforce in reviews (for example, \"no IQueryable outside Infrastructure\").</p>",
        hi: "<ul>\n<li><b>IQueryable return करने के पक्ष में</b>: callers filters, sorting, paging और projections जोड़ सकते हैं जो फिर भी SQL में चलते हैं; repository methods कम।</li>\n<li><b>विपक्ष में</b>: query कहीं भी बन सकती है (controllers, UI), इसलिए performance problems (N+1, missing indexes, बहुत बड़े results) data code से दूर दिखते हैं; \"could not be translated\" errors दूसरी layers में runtime पर आते हैं; in-memory <code>IQueryable</code> के साथ testing SQL से अलग behave करती है; <code>DbContext</code> की lifetime query से लंबी होनी चाहिए।</li>\n<li><b>ऐसा <code>IEnumerable&lt;T&gt;</code> return करना जो अंदर से deferred EF query है</b> दोनों का सबसे बुरा है: safe दिखता है पर देर से चलता है, शायद दो बार, शायद context ख़त्म होने के बाद।</li>\n<li><b>आम बीच का रास्ता</b>: <code>GetActiveOrdersAsync(customerId, page, size)</code> जैसे methods जो <code>IReadOnlyList&lt;OrderDto&gt;</code> return करें; या data layer के अंदर <b>specification pattern</b> (filters <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> के रूप में)। कई teams generic repository की जगह पतली application layer में सीधे <code>DbContext</code> use करती हैं।</li>\n</ul>\n<p><b>TL angle:</b> एक ही सही जवाब नहीं है — बताओ आपकी team ने क्या चुना, क्यों, और reviews में कौन सा rule लागू करते हो (जैसे \"Infrastructure के बाहर IQueryable नहीं\")।</p>",
        hg: "<ul>\n<li><b>IQueryable return karne ke paksh mein</b>: callers filters, sorting, paging aur projections jod sakte hain jo phir bhi SQL mein chalte hain; repository methods kam.</li>\n<li><b>Vipaksh mein</b>: query kahin bhi ban sakti hai (controllers, UI), isliye performance problems (N+1, missing indexes, bahut bade results) data code se door dikhte hain; \"could not be translated\" errors doosri layers mein runtime par aate hain; in-memory <code>IQueryable</code> ke saath testing SQL se alag behave karti hai; <code>DbContext</code> ki lifetime query se lambi honi chahiye.</li>\n<li><b>Aisa <code>IEnumerable&lt;T&gt;</code> return karna jo andar se deferred EF query hai</b> dono ka sabse bura hai: safe dikhta hai par der se chalta hai, shayad do baar, shayad context khatam hone ke baad.</li>\n<li><b>Aam beech ka raasta</b>: <code>GetActiveOrdersAsync(customerId, page, size)</code> jaise methods jo <code>IReadOnlyList&lt;OrderDto&gt;</code> return karein; ya data layer ke andar <b>specification pattern</b> (filters <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> ke roop mein). Kai teams generic repository ki jagah patli application layer mein seedhe <code>DbContext</code> use karti hain.</li>\n</ul>\n<p><b>TL angle:</b> ek hi sahi jawaab nahi hai — batao aapki team ne kya chuna, kyon, aur reviews mein kaun sa rule laagu karte ho (jaise \"Infrastructure ke bahar IQueryable nahi\").</p>"
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
        en: "<ul>\n<li><code>db.Orders.Where(o =&gt; o.Year == 2025).AsEnumerable().Where(o =&gt; MyCustomRule(o))</code>: the first <code>Where</code> goes to SQL; the second runs in C# on rows as they stream in. Nothing runs until you enumerate.</li>\n<li><code>ToList()</code> at the same point would run the SQL immediately and hold all rows in a list before the second filter.</li>\n<li>Use <code>AsEnumerable()</code> as the deliberate \"switch to C#\" point for logic SQL cannot do; use <code>ToList()</code> when you need a snapshot or several passes.</li>\n<li><code>AsQueryable()</code> on a <code>List</code> gives an in-memory provider (<code>EnumerableQuery</code>) that compiles the expression tree back to delegates. It does not make anything faster, and it accepts code that a real database provider would reject — so tests with it can pass while production fails.</li>\n</ul>\n<p>Follow-up: \"And <code>AsAsyncEnumerable()</code>?\" — EF Core's way to stream results asynchronously with <code>await foreach</code> (Day 3 covered <code>IAsyncEnumerable</code>).</p>",
        hi: "<ul>\n<li><code>db.Orders.Where(o =&gt; o.Year == 2025).AsEnumerable().Where(o =&gt; MyCustomRule(o))</code>: पहला <code>Where</code> SQL में जाता है; दूसरा C# में चलता है, rows के stream होकर आते-आते। Enumerate करने तक कुछ नहीं चलता।</li>\n<li>उसी जगह <code>ToList()</code> होता तो SQL तुरंत चलता और दूसरे filter से पहले सारी rows एक list में रखता।</li>\n<li><code>AsEnumerable()</code> को सोच-समझकर \"C# पर switch\" वाले point की तरह use करो, उस logic के लिए जो SQL नहीं कर सकता; snapshot या कई passes चाहिए तो <code>ToList()</code>।</li>\n<li><code>List</code> पर <code>AsQueryable()</code> एक in-memory provider (<code>EnumerableQuery</code>) देता है जो expression tree को वापस delegates में compile करता है। इससे कुछ तेज़ नहीं होता, और यह ऐसा code भी मान लेता है जिसे असली database provider reject करता — इसलिए इसके साथ tests pass हो सकते हैं और production fail।</li>\n</ul>\n<p>Follow-up: \"और <code>AsAsyncEnumerable()</code>?\" — EF Core का तरीका जिससे results <code>await foreach</code> के साथ asynchronously stream होते हैं (<code>IAsyncEnumerable</code> Day 3 में देखा था)।</p>",
        hg: "<ul>\n<li><code>db.Orders.Where(o =&gt; o.Year == 2025).AsEnumerable().Where(o =&gt; MyCustomRule(o))</code>: pehla <code>Where</code> SQL mein jaata hai; doosra C# mein chalta hai, rows ke stream hokar aate-aate. Enumerate karne tak kuch nahi chalta.</li>\n<li>Usi jagah <code>ToList()</code> hota to SQL turant chalta aur doosre filter se pehle saari rows ek list mein rakhta.</li>\n<li><code>AsEnumerable()</code> ko soch-samajhkar \"C# par switch\" wale point ki tarah use karo, us logic ke liye jo SQL nahi kar sakta; snapshot ya kai passes chahiye to <code>ToList()</code>.</li>\n<li><code>List</code> par <code>AsQueryable()</code> ek in-memory provider (<code>EnumerableQuery</code>) deta hai jo expression tree ko wapas delegates mein compile karta hai. Isse kuch tez nahi hota, aur yeh aisa code bhi maan leta hai jise asli database provider reject karta — isliye iske saath tests pass ho sakte hain aur production fail.</li>\n</ul>\n<p>Follow-up: \"Aur <code>AsAsyncEnumerable()</code>?\" — EF Core ka tareeka jisse results <code>await foreach</code> ke saath asynchronously stream hote hain (<code>IAsyncEnumerable</code> Day 3 mein dekha tha).</p>"
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
        en: "<ul>\n<li><code>OrderBy(x =&gt; x.City).ThenBy(x =&gt; x.Name)</code> = SQL <code>ORDER BY City, Name</code>.</li>\n<li><code>OrderBy(x =&gt; x.City).OrderBy(x =&gt; x.Name)</code> = sorted by <b>Name</b>. In memory, the earlier City order survives only as a hidden tie-breaker (because the sort is stable); a database provider may ignore it. Either way it is not what the author meant.</li>\n<li><b>Stable</b>: documented for <code>Enumerable.OrderBy</code>. <code>List&lt;T&gt;.Sort</code>/<code>Array.Sort</code> are unstable (introsort) — equal items may swap.</li>\n<li>Sorting is O(n log n) and buffers all items. For one min/max item in memory, <code>MinBy</code>/<code>MaxBy</code> say what you mean (modern .NET already runs <code>OrderBy(...).First()</code> as one pass, so this is about readability); in an EF Core query, use <code>OrderBy(...).First()</code>.</li>\n<li>Strings: pass a comparer when culture matters: <code>OrderBy(x =&gt; x.Name, StringComparer.OrdinalIgnoreCase)</code>.</li>\n</ul>\n<p>Follow-up: \"Does a database promise any order without ORDER BY?\" — No. Even if rows \"usually\" come back in Id order, it can change with plans, parallelism or indexes.</p>",
        hi: "<ul>\n<li><code>OrderBy(x =&gt; x.City).ThenBy(x =&gt; x.Name)</code> = SQL <code>ORDER BY City, Name</code>।</li>\n<li><code>OrderBy(x =&gt; x.City).OrderBy(x =&gt; x.Name)</code> = <b>Name</b> से sorted। Memory में पहले वाला City order सिर्फ़ छुपे tie-breaker की तरह बचता है (क्योंकि sort stable है); database provider उसे ignore कर सकता है। दोनों ही तरह लिखने वाले का इरादा यह नहीं था।</li>\n<li><b>Stable</b>: <code>Enumerable.OrderBy</code> के लिए documented है। <code>List&lt;T&gt;.Sort</code>/<code>Array.Sort</code> unstable हैं (introsort) — बराबर items जगह बदल सकते हैं।</li>\n<li>Sorting O(n log n) है और सारे items buffer करता है। Memory में एक min/max item के लिए <code>MinBy</code>/<code>MaxBy</code> इरादा साफ़ बताते हैं (modern .NET <code>OrderBy(...).First()</code> को पहले से एक pass में चलाता है, इसलिए बात readability की है); EF Core query में <code>OrderBy(...).First()</code> use करो।</li>\n<li>Strings: जब culture मायने रखे तो comparer दो: <code>OrderBy(x =&gt; x.Name, StringComparer.OrdinalIgnoreCase)</code>।</li>\n</ul>\n<p>Follow-up: \"क्या ORDER BY के बिना database किसी order का वादा करता है?\" — नहीं। Rows \"आमतौर पर\" Id order में आती दिखें, तब भी plans, parallelism या indexes से यह बदल सकता है।</p>",
        hg: "<ul>\n<li><code>OrderBy(x =&gt; x.City).ThenBy(x =&gt; x.Name)</code> = SQL <code>ORDER BY City, Name</code>.</li>\n<li><code>OrderBy(x =&gt; x.City).OrderBy(x =&gt; x.Name)</code> = <b>Name</b> se sorted. Memory mein pehle wala City order sirf chhupe tie-breaker ki tarah bachta hai (kyonki sort stable hai); database provider use ignore kar sakta hai. Dono hi tarah likhne wale ka iraada yeh nahi tha.</li>\n<li><b>Stable</b>: <code>Enumerable.OrderBy</code> ke liye documented hai. <code>List&lt;T&gt;.Sort</code>/<code>Array.Sort</code> unstable hain (introsort) — barabar items jagah badal sakte hain.</li>\n<li>Sorting O(n log n) hai aur saare items buffer karta hai. Memory mein ek min/max item ke liye <code>MinBy</code>/<code>MaxBy</code> iraada saaf batate hain (modern .NET <code>OrderBy(...).First()</code> ko pehle se ek pass mein chalata hai, isliye baat readability ki hai); EF Core query mein <code>OrderBy(...).First()</code> use karo.</li>\n<li>Strings: jab culture maayne rakhe to comparer do: <code>OrderBy(x =&gt; x.Name, StringComparer.OrdinalIgnoreCase)</code>.</li>\n</ul>\n<p>Follow-up: \"Kya ORDER BY ke bina database kisi order ka waada karta hai?\" — Nahi. Rows \"aamtaur par\" Id order mein aati dikhein, tab bhi plans, parallelism ya indexes se yeh badal sakta hai.</p>"
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
        en: "<ul>\n<li><b>GroupBy</b>: <code>IEnumerable&lt;IGrouping&lt;K,T&gt;&gt;</code>; sees source changes made before enumeration; regroups every time you enumerate it. On <code>IQueryable</code> it can become SQL <code>GROUP BY</code>.</li>\n<li><b>ToLookup</b>: <code>ILookup&lt;K,T&gt;</code>; a snapshot built once; <code>lookup[key]</code> returns the items or an <b>empty</b> sequence; <code>lookup.Contains(key)</code>; <code>lookup.Count</code> = number of keys. Immutable — you cannot add to it. LINQ to Objects only (it materializes).</li>\n<li><b>vs Dictionary&lt;K, List&lt;T&gt;&gt;</b>: a dictionary throws <code>KeyNotFoundException</code> for a missing key and is mutable; a lookup is read-only and forgiving.</li>\n<li>Typical use of ToLookup: load parents and children in two queries, then <code>var linesByOrder = lines.ToLookup(l =&gt; l.OrderId);</code> and attach <code>linesByOrder[order.Id]</code> to each order — O(1) per parent instead of a <code>Where</code> per parent.</li>\n</ul>",
        hi: "<ul>\n<li><b>GroupBy</b>: <code>IEnumerable&lt;IGrouping&lt;K,T&gt;&gt;</code>; enumeration से पहले हुए source changes देखता है; हर बार enumerate करने पर फिर से group करता है। <code>IQueryable</code> पर यह SQL <code>GROUP BY</code> बन सकता है।</li>\n<li><b>ToLookup</b>: <code>ILookup&lt;K,T&gt;</code>; एक बार बना snapshot; <code>lookup[key]</code> items या <b>खाली</b> sequence देता है; <code>lookup.Contains(key)</code>; <code>lookup.Count</code> = keys की संख्या। Immutable — इसमें कुछ जोड़ नहीं सकते। सिर्फ़ LINQ to Objects (यह materialize करता है)।</li>\n<li><b>Dictionary&lt;K, List&lt;T&gt;&gt; से तुलना</b>: dictionary missing key पर <code>KeyNotFoundException</code> throw करती है और mutable है; lookup read-only है और माफ़ कर देता है।</li>\n<li>ToLookup का आम use: parents और children दो queries में load करो, फिर <code>var linesByOrder = lines.ToLookup(l =&gt; l.OrderId);</code> और हर order से <code>linesByOrder[order.Id]</code> जोड़ो — हर parent के लिए एक <code>Where</code> की जगह O(1)।</li>\n</ul>",
        hg: "<ul>\n<li><b>GroupBy</b>: <code>IEnumerable&lt;IGrouping&lt;K,T&gt;&gt;</code>; enumeration se pehle hue source changes dekhta hai; har baar enumerate karne par phir se group karta hai. <code>IQueryable</code> par yeh SQL <code>GROUP BY</code> ban sakta hai.</li>\n<li><b>ToLookup</b>: <code>ILookup&lt;K,T&gt;</code>; ek baar bana snapshot; <code>lookup[key]</code> items ya <b>khaali</b> sequence deta hai; <code>lookup.Contains(key)</code>; <code>lookup.Count</code> = keys ki sankhya. Immutable — ismein kuch jod nahi sakte. Sirf LINQ to Objects (yeh materialize karta hai).</li>\n<li><b>Dictionary&lt;K, List&lt;T&gt;&gt; se tulna</b>: dictionary missing key par <code>KeyNotFoundException</code> throw karti hai aur mutable hai; lookup read-only hai aur maaf kar deta hai.</li>\n<li>ToLookup ka aam use: parents aur children do queries mein load karo, phir <code>var linesByOrder = lines.ToLookup(l =&gt; l.OrderId);</code> aur har order se <code>linesByOrder[order.Id]</code> jodo — har parent ke liye ek <code>Where</code> ki jagah O(1).</li>\n</ul>"
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
        en: "<ul>\n<li>Classic bug: <code>customers.Distinct()</code> on a <code>class Customer</code> with no equality members removes only <b>same-instance</b> duplicates — two objects with the same data stay, because they are different references.</li>\n<li>Fixes: make it a <code>record</code> (value equality on all properties), override <code>Equals</code>/<code>GetHashCode</code>, pass an <code>IEqualityComparer&lt;T&gt;</code>, or use <b><code>DistinctBy(c =&gt; c.Email)</code></b>.</li>\n<li>Strings: <code>Distinct(StringComparer.OrdinalIgnoreCase)</code> for case-insensitive uniqueness.</li>\n<li>Same idea for <code>Union</code>/<code>Intersect</code>/<code>Except</code> and their <code>...By</code> versions (.NET 6), <code>GroupBy</code>, <code>ToHashSet</code>, <code>ToDictionary</code>.</li>\n<li>Order: the docs call the result unordered, so sort it when order matters.</li>\n<li>EF Core: <code>Distinct()</code> becomes SQL <code>DISTINCT</code> over the selected columns — project to the columns you care about first.</li>\n</ul>",
        hi: "<ul>\n<li>Classic bug: बिना equality members वाली <code>class Customer</code> पर <code>customers.Distinct()</code> सिर्फ़ <b>same-instance</b> duplicates हटाता है — एक जैसे data वाले दो objects रह जाते हैं, क्योंकि वो अलग references हैं।</li>\n<li>Fixes: उसे <code>record</code> बना दो (सारी properties पर value equality), <code>Equals</code>/<code>GetHashCode</code> override करो, <code>IEqualityComparer&lt;T&gt;</code> pass करो, या <b><code>DistinctBy(c =&gt; c.Email)</code></b> use करो।</li>\n<li>Strings: case-insensitive uniqueness के लिए <code>Distinct(StringComparer.OrdinalIgnoreCase)</code>।</li>\n<li>यही बात <code>Union</code>/<code>Intersect</code>/<code>Except</code> और उनके <code>...By</code> versions (.NET 6), <code>GroupBy</code>, <code>ToHashSet</code>, <code>ToDictionary</code> पर भी लागू है।</li>\n<li>Order: docs result को unordered कहते हैं, इसलिए जब order मायने रखे तो sort करो।</li>\n<li>EF Core: <code>Distinct()</code> selected columns पर SQL <code>DISTINCT</code> बनता है — पहले उन columns में project करो जो आपको चाहिए।</li>\n</ul>",
        hg: "<ul>\n<li>Classic bug: bina equality members wali <code>class Customer</code> par <code>customers.Distinct()</code> sirf <b>same-instance</b> duplicates hataata hai — ek jaise data wale do objects reh jaate hain, kyonki woh alag references hain.</li>\n<li>Fixes: use <code>record</code> bana do (saari properties par value equality), <code>Equals</code>/<code>GetHashCode</code> override karo, <code>IEqualityComparer&lt;T&gt;</code> pass karo, ya <b><code>DistinctBy(c =&gt; c.Email)</code></b> use karo.</li>\n<li>Strings: case-insensitive uniqueness ke liye <code>Distinct(StringComparer.OrdinalIgnoreCase)</code>.</li>\n<li>Yahi baat <code>Union</code>/<code>Intersect</code>/<code>Except</code> aur unke <code>...By</code> versions (.NET 6), <code>GroupBy</code>, <code>ToHashSet</code>, <code>ToDictionary</code> par bhi laagu hai.</li>\n<li>Order: docs result ko unordered kehte hain, isliye jab order maayne rakhe to sort karo.</li>\n<li>EF Core: <code>Distinct()</code> selected columns par SQL <code>DISTINCT</code> banta hai — pehle un columns mein project karo jo aapko chahiye.</li>\n</ul>"
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
        en: "<ul>\n<li><code>int limit = 100; var q = prices.Where(p =&gt; p &gt; limit); limit = 200;</code> → enumerating <code>q</code> uses <b>200</b>. The compiler moved <code>limit</code> into a closure object shared by the method and the lambda (Day 2).</li>\n<li>Each enumeration reads the <b>current</b> value, so the same query can give different results at different times.</li>\n<li>To freeze: <code>ToList()</code> right away, or copy into a new local that never changes (<code>var fixedLimit = limit;</code>).</li>\n<li>Loop trap: building queries in a loop that capture the loop variable. <code>foreach</code> gets a fresh variable per iteration (since C# 5), but a <code>for (int i...)</code> variable is <b>shared</b> — all queries see its final value.</li>\n<li>EF Core: captured variables become <b>SQL parameters</b> (<code>@limit</code>), read when the query executes — which is also why EF Core can reuse the query plan.</li>\n</ul>",
        hi: "<ul>\n<li><code>int limit = 100; var q = prices.Where(p =&gt; p &gt; limit); limit = 200;</code> → <code>q</code> enumerate करने पर <b>200</b> use होता है। Compiler ने <code>limit</code> को एक closure object में डाल दिया जो method और lambda दोनों share करते हैं (Day 2)।</li>\n<li>हर enumeration <b>current</b> value पढ़ता है, इसलिए वही query अलग-अलग समय पर अलग results दे सकती है।</li>\n<li>Freeze करने के लिए: तुरंत <code>ToList()</code>, या value को एक नए local में copy करो जो कभी न बदले (<code>var fixedLimit = limit;</code>)।</li>\n<li>Loop trap: loop में queries बनाना जो loop variable capture करें। <code>foreach</code> को हर iteration में नया variable मिलता है (C# 5 से), पर <code>for (int i...)</code> का variable <b>shared</b> है — सारी queries उसकी आख़िरी value देखती हैं।</li>\n<li>EF Core: captured variables <b>SQL parameters</b> (<code>@limit</code>) बनते हैं, जो query execute होने पर पढ़े जाते हैं — इसी वजह से EF Core query plan दोबारा use कर पाता है।</li>\n</ul>",
        hg: "<ul>\n<li><code>int limit = 100; var q = prices.Where(p =&gt; p &gt; limit); limit = 200;</code> → <code>q</code> enumerate karne par <b>200</b> use hota hai. Compiler ne <code>limit</code> ko ek closure object mein daal diya jo method aur lambda dono share karte hain (Day 2).</li>\n<li>Har enumeration <b>current</b> value padhta hai, isliye wahi query alag-alag samay par alag results de sakti hai.</li>\n<li>Freeze karne ke liye: turant <code>ToList()</code>, ya value ko ek naye local mein copy karo jo kabhi na badle (<code>var fixedLimit = limit;</code>).</li>\n<li>Loop trap: loop mein queries banana jo loop variable capture karein. <code>foreach</code> ko har iteration mein naya variable milta hai (C# 5 se), par <code>for (int i...)</code> ka variable <b>shared</b> hai — saari queries uski aakhri value dekhti hain.</li>\n<li>EF Core: captured variables <b>SQL parameters</b> (<code>@limit</code>) bante hain, jo query execute hone par padhe jaate hain — isi wajah se EF Core query plan dobara use kar paata hai.</li>\n</ul>"
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
        en: "<ul>\n<li><b>Costs</b>: one delegate call per item per operator; one iterator object per operator; closures when lambdas capture locals; interface-based enumeration (a <code>foreach</code> over a <code>List&lt;T&gt;</code> uses a struct enumerator with no allocation, LINQ goes through <code>IEnumerable&lt;T&gt;</code>).</li>\n<li><b>Bigger wins usually come from elsewhere</b>: one SQL query instead of N, a dictionary instead of a nested search, not loading columns you do not need.</li>\n<li><b>Loop is better</b> when: the code is a measured hot path (runs millions of times); you need several aggregates in one pass; you need complex early exit or mutation; or you are in an allocation-sensitive area (game loops, high-throughput parsers).</li>\n<li>Measure with <b>BenchmarkDotNet</b> (with <code>[MemoryDiagnoser]</code> for allocations) — not with a stopwatch in a debug build.</li>\n</ul>\n<p><b>TL angle:</b> set the team rule as \"readable LINQ by default, loops in measured hot paths with a comment\", so reviews are about evidence, not taste.</p>",
        hi: "<ul>\n<li><b>ख़र्च</b>: हर operator पर हर item का एक delegate call; हर operator का एक iterator object; lambdas जब locals capture करें तो closures; interface के ज़रिए enumeration (<code>List&lt;T&gt;</code> पर <code>foreach</code> एक struct enumerator use करता है जिसमें allocation नहीं, LINQ <code>IEnumerable&lt;T&gt;</code> से होकर जाता है)।</li>\n<li><b>बड़े फ़ायदे आमतौर पर कहीं और से आते हैं</b>: N की जगह एक SQL query, nested search की जगह dictionary, जो columns नहीं चाहिए उन्हें load न करना।</li>\n<li><b>Loop बेहतर है</b> जब: code एक measured hot path हो (लाखों बार चले); एक pass में कई aggregates चाहिए; complex early exit या mutation चाहिए; या आप allocation-sensitive जगह पर हो (game loops, high-throughput parsers)।</li>\n<li><b>BenchmarkDotNet</b> से measure करो (allocations के लिए <code>[MemoryDiagnoser]</code> के साथ) — debug build में stopwatch से नहीं।</li>\n</ul>\n<p><b>TL angle:</b> team का rule ऐसा रखो: \"default में readable LINQ, measured hot paths में comment के साथ loops\", ताकि reviews पसंद पर नहीं, सबूत पर हों।</p>",
        hg: "<ul>\n<li><b>Kharche</b>: har operator par har item ka ek delegate call; har operator ka ek iterator object; lambdas jab locals capture karein to closures; interface ke zariye enumeration (<code>List&lt;T&gt;</code> par <code>foreach</code> ek struct enumerator use karta hai jismein allocation nahi, LINQ <code>IEnumerable&lt;T&gt;</code> se hokar jaata hai).</li>\n<li><b>Bade fayde aamtaur par kahin aur se aate hain</b>: N ki jagah ek SQL query, nested search ki jagah dictionary, jo columns nahi chahiye unhe load na karna.</li>\n<li><b>Loop behtar hai</b> jab: code ek measured hot path ho (laakhon baar chale); ek pass mein kai aggregates chahiye; complex early exit ya mutation chahiye; ya aap allocation-sensitive jagah par ho (game loops, high-throughput parsers).</li>\n<li><b>BenchmarkDotNet</b> se measure karo (allocations ke liye <code>[MemoryDiagnoser]</code> ke saath) — debug build mein stopwatch se nahi.</li>\n</ul>\n<p><b>TL angle:</b> team ka rule aisa rakho: \"default mein readable LINQ, measured hot paths mein comment ke saath loops\", taaki reviews pasand par nahi, saboot par hon.</p>"
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
        en: "<ul>\n<li><b>Correctness</b>: <code>Single</code> on non-unique data; <code>FirstOrDefault()</code> result used without a null check; <code>First()</code> without <code>OrderBy</code> when a specific row is meant; <code>OrderBy</code>.<code>OrderBy</code> instead of <code>ThenBy</code>; paging without a deterministic order; <code>Distinct()</code> on classes without equality.</li>\n<li><b>Hidden cost</b>: multiple enumeration (CA1851); <code>Count()</code> in loop conditions; <code>ElementAt(i)</code> on lazy sequences; <code>Where</code>/<code>First</code> inside a loop (use <code>ToDictionary</code>/<code>ToLookup</code>); <code>Count() &gt; 0</code> (CA1827); <code>Count()</code> on lists (CA1829).</li>\n<li><b>EF Core boundary</b>: <code>ToList()</code>/<code>AsEnumerable()</code> too early or too late (details in the <code>ToList()</code> Q&amp;A); <code>Func</code> filters on repositories; deferred queries returned after the <code>DbContext</code> is gone; missing <code>Select</code> projection (loading whole entities for two fields).</li>\n<li><b>Readability</b>: very long chains — split into named variables; side effects inside <code>Select</code>/<code>Where</code> — move to <code>foreach</code>.</li>\n<li>Automate what you can: enable analyzers (CA1827, CA1829, CA1851, CA1860) in <code>.editorconfig</code>, then review for design.</li>\n</ul>",
        hi: "<ul>\n<li><b>Correctness</b>: non-unique data पर <code>Single</code>; बिना null check के <code>FirstOrDefault()</code> का result use करना; जब कोई ख़ास row चाहिए तब <code>OrderBy</code> के बिना <code>First()</code>; <code>ThenBy</code> की जगह <code>OrderBy</code>.<code>OrderBy</code>; deterministic order के बिना paging; बिना equality वाली classes पर <code>Distinct()</code>।</li>\n<li><b>छुपा हुआ ख़र्च</b>: multiple enumeration (CA1851); loop conditions में <code>Count()</code>; lazy sequences पर <code>ElementAt(i)</code>; loop के अंदर <code>Where</code>/<code>First</code> (<code>ToDictionary</code>/<code>ToLookup</code> use करो); <code>Count() &gt; 0</code> (CA1827); lists पर <code>Count()</code> (CA1829)।</li>\n<li><b>EF Core boundary</b>: बहुत जल्दी या बहुत देर से <code>ToList()</code>/<code>AsEnumerable()</code> (details <code>ToList()</code> वाले Q&amp;A में); repositories पर <code>Func</code> filters; <code>DbContext</code> ख़त्म होने के बाद return हुई deferred queries; <code>Select</code> projection न होना (दो fields के लिए पूरी entities load करना)।</li>\n<li><b>Readability</b>: बहुत लंबी chains — named variables में तोड़ो; <code>Select</code>/<code>Where</code> के अंदर side effects — <code>foreach</code> में ले जाओ।</li>\n<li>जो automate हो सके करो: <code>.editorconfig</code> में analyzers (CA1827, CA1829, CA1851, CA1860) enable करो, फिर review design के लिए करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Correctness</b>: non-unique data par <code>Single</code>; bina null check ke <code>FirstOrDefault()</code> ka result use karna; jab koi khaas row chahiye tab <code>OrderBy</code> ke bina <code>First()</code>; <code>ThenBy</code> ki jagah <code>OrderBy</code>.<code>OrderBy</code>; deterministic order ke bina paging; bina equality wali classes par <code>Distinct()</code>.</li>\n<li><b>Chhupa hua kharcha</b>: multiple enumeration (CA1851); loop conditions mein <code>Count()</code>; lazy sequences par <code>ElementAt(i)</code>; loop ke andar <code>Where</code>/<code>First</code> (<code>ToDictionary</code>/<code>ToLookup</code> use karo); <code>Count() &gt; 0</code> (CA1827); lists par <code>Count()</code> (CA1829).</li>\n<li><b>EF Core boundary</b>: bahut jaldi ya bahut der se <code>ToList()</code>/<code>AsEnumerable()</code> (details <code>ToList()</code> wale Q&amp;A mein); repositories par <code>Func</code> filters; <code>DbContext</code> khatam hone ke baad return hui deferred queries; <code>Select</code> projection na hona (do fields ke liye poori entities load karna).</li>\n<li><b>Readability</b>: bahut lambi chains — named variables mein todo; <code>Select</code>/<code>Where</code> ke andar side effects — <code>foreach</code> mein le jao.</li>\n<li>Jo automate ho sake karo: <code>.editorconfig</code> mein analyzers (CA1827, CA1829, CA1851, CA1860) enable karo, phir review design ke liye karo.</li>\n</ul>"
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
        en: "<ul>\n<li><b>.NET 6</b>: <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; <code>FirstOrDefault</code>/<code>LastOrDefault</code>/<code>SingleOrDefault</code> with a default value; <code>Take(range)</code> such as <code>Take(2..5)</code>; <code>TryGetNonEnumeratedCount</code>; <code>Zip</code> with three sequences.</li>\n<li><b>.NET 7</b>: <code>Order()</code> and <code>OrderDescending()</code> for sorting simple values.</li>\n<li><b>.NET 9</b>: <code>CountBy</code>, <code>AggregateBy</code> (per-key counts/totals without <code>GroupBy</code> objects), <code>Index()</code> (<code>(Index, Item)</code> tuples).</li>\n<li><b>.NET 10</b>: <code>LeftJoin</code>, <code>RightJoin</code> (EF Core 10 translates them); <code>System.Linq.AsyncEnumerable</code> brings LINQ for <code>IAsyncEnumerable&lt;T&gt;</code> into the base library (Day 3).</li>\n</ul>\n<p>Why mention them: they replace common hand-written helpers (<code>GroupBy(...).Select(g =&gt; g.First())</code> → <code>DistinctBy</code>, in-memory <code>OrderBy(...).First()</code> → <code>MinBy</code>), which states the intent more clearly.</p>",
        hi: "<ul>\n<li><b>.NET 6</b>: <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; default value के साथ <code>FirstOrDefault</code>/<code>LastOrDefault</code>/<code>SingleOrDefault</code>; <code>Take(range)</code> जैसे <code>Take(2..5)</code>; <code>TryGetNonEnumeratedCount</code>; तीन sequences वाला <code>Zip</code>।</li>\n<li><b>.NET 7</b>: simple values sort करने के लिए <code>Order()</code> और <code>OrderDescending()</code>।</li>\n<li><b>.NET 9</b>: <code>CountBy</code>, <code>AggregateBy</code> (<code>GroupBy</code> objects के बिना per-key counts/totals), <code>Index()</code> (<code>(Index, Item)</code> tuples)।</li>\n<li><b>.NET 10</b>: <code>LeftJoin</code>, <code>RightJoin</code> (EF Core 10 इन्हें translate करता है); <code>System.Linq.AsyncEnumerable</code> से <code>IAsyncEnumerable&lt;T&gt;</code> के लिए LINQ base library में आ गया (Day 3)।</li>\n</ul>\n<p>इनका ज़िक्र क्यों: ये आम हाथ से लिखे helpers की जगह लेते हैं (<code>GroupBy(...).Select(g =&gt; g.First())</code> → <code>DistinctBy</code>, in-memory <code>OrderBy(...).First()</code> → <code>MinBy</code>), जिससे इरादा ज़्यादा साफ़ दिखता है।</p>",
        hg: "<ul>\n<li><b>.NET 6</b>: <code>DistinctBy</code>, <code>UnionBy</code>, <code>IntersectBy</code>, <code>ExceptBy</code>, <code>MinBy</code>, <code>MaxBy</code>; <code>Chunk(size)</code>; default value ke saath <code>FirstOrDefault</code>/<code>LastOrDefault</code>/<code>SingleOrDefault</code>; <code>Take(range)</code> jaise <code>Take(2..5)</code>; <code>TryGetNonEnumeratedCount</code>; teen sequences wala <code>Zip</code>.</li>\n<li><b>.NET 7</b>: simple values sort karne ke liye <code>Order()</code> aur <code>OrderDescending()</code>.</li>\n<li><b>.NET 9</b>: <code>CountBy</code>, <code>AggregateBy</code> (<code>GroupBy</code> objects ke bina per-key counts/totals), <code>Index()</code> (<code>(Index, Item)</code> tuples).</li>\n<li><b>.NET 10</b>: <code>LeftJoin</code>, <code>RightJoin</code> (EF Core 10 inhe translate karta hai); <code>System.Linq.AsyncEnumerable</code> se <code>IAsyncEnumerable&lt;T&gt;</code> ke liye LINQ base library mein aa gaya (Day 3).</li>\n</ul>\n<p>Inka zikr kyon: yeh aam haath se likhe helpers ki jagah lete hain (<code>GroupBy(...).Select(g =&gt; g.First())</code> → <code>DistinctBy</code>, in-memory <code>OrderBy(...).First()</code> → <code>MinBy</code>), jisse iraada zyada saaf dikhta hai.</p>"
      }
    }
  ],
  puzzles: [
    {
      id: "captured-variable",
      src: "int[] prices = [50, 120, 300, 80];\nint limit = 100;\n\nvar expensive = prices.Where(p => p > limit);\n\nlimit = 200;\nConsole.WriteLine(string.Join(\", \", expensive));\n\nlimit = 0;\nConsole.WriteLine(expensive.Count());",
      answer: "300\n4",
      explain: {
        en: "<ul>\n<li>Line 4 only <b>builds</b> the query. The lambda captures the <b>variable</b> <code>limit</code>, not the value 100.</li>\n<li>When <code>string.Join</code> enumerates, <code>limit</code> is already <b>200</b> → only <b>300</b> passes.</li>\n<li><code>Count()</code> runs the query <b>again</b>, now with <code>limit = 0</code> → all <b>4</b> prices pass.</li>\n<li>Lesson: a deferred query reads captured variables <b>when it runs</b>, and it runs on every enumeration. To freeze the result, call <code>ToList()</code> right after building it.</li>\n</ul>",
        hi: "<ul>\n<li>Line 4 सिर्फ़ query <b>बनाती</b> है। Lambda <code>limit</code> <b>variable</b> को capture करता है, value 100 को नहीं।</li>\n<li>जब <code>string.Join</code> enumerate करता है, तब तक <code>limit</code> <b>200</b> हो चुका है → सिर्फ़ <b>300</b> pass होता है।</li>\n<li><code>Count()</code> query को <b>फिर से</b> चलाता है, अब <code>limit = 0</code> के साथ → चारों prices pass → <b>4</b>।</li>\n<li>सीख: deferred query captured variables को <b>चलते समय</b> पढ़ती है, और हर enumeration पर चलती है। Result fix करना है तो query बनाते ही <code>ToList()</code> call करो।</li>\n</ul>",
        hg: "<ul>\n<li>Line 4 sirf query <b>banati</b> hai. Lambda <code>limit</code> <b>variable</b> ko capture karta hai, value 100 ko nahi.</li>\n<li>Jab <code>string.Join</code> enumerate karta hai, tab tak <code>limit</code> <b>200</b> ho chuka hai → sirf <b>300</b> pass hota hai.</li>\n<li><code>Count()</code> query ko <b>phir se</b> chalata hai, ab <code>limit = 0</code> ke saath → chaaron prices pass → <b>4</b>.</li>\n<li>Seekh: deferred query captured variables ko <b>chalte samay</b> padhti hai, aur har enumeration par chalti hai. Result fix karna hai to query banate hi <code>ToList()</code> call karo.</li>\n</ul>"
      }
    },
    {
      id: "any-then-count",
      src: "int[] orders = [120, 40, 300];\n\nvar big = orders.Where(o =>\n{\n    Console.WriteLine($\"check {o}\");\n    return o > 100;\n});\nConsole.WriteLine(\"query ready\");\n\nif (big.Any())\n    Console.WriteLine($\"count = {big.Count()}\");",
      answer: "query ready\ncheck 120\ncheck 120\ncheck 40\ncheck 300\ncount = 2",
      explain: {
        en: "<ul>\n<li>Building <code>big</code> prints nothing — <b>\"query ready\"</b> comes first.</li>\n<li><code>Any()</code> enumerates and <b>stops at the first match</b>: it checks 120 (a match) and is done → one <b>check 120</b>.</li>\n<li><code>Count()</code> enumerates <b>again from the start</b> and visits every item → <b>check 120, check 40, check 300</b>, then <b>count = 2</b>.</li>\n<li>Lesson: <code>Any()</code> short-circuits, <code>Count()</code> does not — and using both on a lazy query is <b>multiple enumeration</b>. With EF Core that would be two SQL queries. Materialize once if you need both.</li>\n</ul>",
        hi: "<ul>\n<li><code>big</code> बनाने से कुछ print नहीं होता — पहले <b>\"query ready\"</b> आता है।</li>\n<li><code>Any()</code> enumerate करता है और <b>पहले match पर रुक जाता है</b>: 120 check करता है (match) और बस → एक <b>check 120</b>।</li>\n<li><code>Count()</code> <b>फिर से शुरू से</b> enumerate करता है और हर item देखता है → <b>check 120, check 40, check 300</b>, फिर <b>count = 2</b>।</li>\n<li>सीख: <code>Any()</code> short-circuit करता है, <code>Count()</code> नहीं — और lazy query पर दोनों use करना <b>multiple enumeration</b> है। EF Core में यह दो SQL queries होतीं। दोनों चाहिए तो एक बार materialize करो।</li>\n</ul>",
        hg: "<ul>\n<li><code>big</code> banane se kuch print nahi hota — pehle <b>\"query ready\"</b> aata hai.</li>\n<li><code>Any()</code> enumerate karta hai aur <b>pehle match par ruk jaata hai</b>: 120 check karta hai (match) aur bas → ek <b>check 120</b>.</li>\n<li><code>Count()</code> <b>phir se shuru se</b> enumerate karta hai aur har item dekhta hai → <b>check 120, check 40, check 300</b>, phir <b>count = 2</b>.</li>\n<li>Seekh: <code>Any()</code> short-circuit karta hai, <code>Count()</code> nahi — aur lazy query par dono use karna <b>multiple enumeration</b> hai. EF Core mein yeh do SQL queries hotin. Dono chahiye to ek baar materialize karo.</li>\n</ul>"
      }
    },
    {
      id: "pipeline-order",
      src: "string[] names = [\"amit\", \"bina\", \"chetan\", \"dev\"];\n\nvar query = names\n    .Where(n => { Console.WriteLine($\"Where {n}\"); return n.Length > 3; })\n    .Select(n => { Console.WriteLine($\"Select {n}\"); return n.ToUpper(); });\n\nforeach (var name in query)\n    Console.WriteLine($\"got {name}\");",
      answer: "Where amit\nSelect amit\ngot AMIT\nWhere bina\nSelect bina\ngot BINA\nWhere chetan\nSelect chetan\ngot CHETAN\nWhere dev",
      explain: {
        en: "<ul>\n<li>Many people expect \"all <code>Where</code> lines first, then all <code>Select</code> lines\". That is <b>not</b> how LINQ to Objects works.</li>\n<li>Each item travels through the <b>whole pipeline</b> before the next item is read: <code>Where amit</code> → <code>Select amit</code> → the <code>foreach</code> body prints <code>got AMIT</code> → then <code>bina</code>...</li>\n<li><code>dev</code> has 3 letters, so <code>Where</code> rejects it and <code>Select</code> never sees it.</li>\n<li>Lesson: <code>Where</code>/<code>Select</code> are <b>streaming</b> — one item at a time, pulled by the consumer. That is why <code>First()</code> or <code>Take(1)</code> on a long chain can stop very early.</li>\n</ul>",
        hi: "<ul>\n<li>बहुत लोग सोचते हैं \"पहले सारी <code>Where</code> lines, फिर सारी <code>Select</code> lines\"। LINQ to Objects ऐसे <b>नहीं</b> चलता।</li>\n<li>हर item अगला item पढ़े जाने से पहले <b>पूरी pipeline</b> से गुज़रता है: <code>Where amit</code> → <code>Select amit</code> → <code>foreach</code> body <code>got AMIT</code> print करती है → फिर <code>bina</code>...</li>\n<li><code>dev</code> में 3 letters हैं, इसलिए <code>Where</code> उसे reject कर देता है और <code>Select</code> उसे कभी नहीं देखता।</li>\n<li>सीख: <code>Where</code>/<code>Select</code> <b>streaming</b> हैं — एक बार में एक item, जिसे consumer खींचता है। इसीलिए लंबी chain पर <code>First()</code> या <code>Take(1)</code> बहुत जल्दी रुक सकता है।</li>\n</ul>",
        hg: "<ul>\n<li>Bahut log sochte hain \"pehle saari <code>Where</code> lines, phir saari <code>Select</code> lines\". LINQ to Objects aise <b>nahi</b> chalta.</li>\n<li>Har item agla item padhe jaane se pehle <b>poori pipeline</b> se guzarta hai: <code>Where amit</code> → <code>Select amit</code> → <code>foreach</code> body <code>got AMIT</code> print karti hai → phir <code>bina</code>...</li>\n<li><code>dev</code> mein 3 letters hain, isliye <code>Where</code> use reject kar deta hai aur <code>Select</code> use kabhi nahi dekhta.</li>\n<li>Seekh: <code>Where</code>/<code>Select</code> <b>streaming</b> hain — ek baar mein ek item, jise consumer kheenchta hai. Isiliye lambi chain par <code>First()</code> ya <code>Take(1)</code> bahut jaldi ruk sakta hai.</li>\n</ul>"
      }
    },
    {
      id: "orderby-buffers",
      src: "int[] scores = [30, 10, 20];\n\nvar sorted = scores\n    .Select(s => { Console.WriteLine($\"read {s}\"); return s; })\n    .OrderBy(s => s);\n\nConsole.WriteLine(\"start\");\nforeach (var s in sorted)\n{\n    Console.WriteLine($\"got {s}\");\n    break;\n}",
      answer: "start\nread 30\nread 10\nread 20\ngot 10",
      explain: {
        en: "<ul>\n<li>Nothing runs before the <code>foreach</code>, so <b>start</b> is first.</li>\n<li>We want only <b>one</b> item (<code>break</code>), but <code>OrderBy</code> cannot know the smallest value until it has seen <b>all</b> values. So it reads <b>30, 10, 20</b> first, sorts, and only then gives <b>10</b>.</li>\n<li>Compare with the previous puzzle: <code>Where</code>/<code>Select</code> stream; <code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> <b>buffer</b> the whole source.</li>\n<li>Lesson: on a huge or endless source, a buffering operator loads everything. For \"the smallest item\", <code>MinBy</code>/<code>Min</code> say what you mean.</li>\n</ul>",
        hi: "<ul>\n<li><code>foreach</code> से पहले कुछ नहीं चलता, इसलिए पहले <b>start</b>।</li>\n<li>हमें सिर्फ़ <b>एक</b> item चाहिए (<code>break</code>), पर <code>OrderBy</code> को सबसे छोटी value तब तक पता नहीं चल सकती जब तक वो <b>सारी</b> values न देख ले। इसलिए वो पहले <b>30, 10, 20</b> पढ़ता है, sort करता है, और फिर <b>10</b> देता है।</li>\n<li>पिछले puzzle से तुलना करो: <code>Where</code>/<code>Select</code> stream करते हैं; <code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> पूरे source को <b>buffer</b> करते हैं।</li>\n<li>सीख: बहुत बड़े या कभी न ख़त्म होने वाले source पर buffering operator सब कुछ load कर लेता है। \"सबसे छोटा item\" के लिए <code>MinBy</code>/<code>Min</code> इरादा सीधे बताते हैं।</li>\n</ul>",
        hg: "<ul>\n<li><code>foreach</code> se pehle kuch nahi chalta, isliye pehle <b>start</b>.</li>\n<li>Hamein sirf <b>ek</b> item chahiye (<code>break</code>), par <code>OrderBy</code> ko sabse chhoti value tab tak pata nahi chal sakti jab tak woh <b>saari</b> values na dekh le. Isliye woh pehle <b>30, 10, 20</b> padhta hai, sort karta hai, aur phir <b>10</b> deta hai.</li>\n<li>Pichhle puzzle se tulna karo: <code>Where</code>/<code>Select</code> stream karte hain; <code>OrderBy</code>, <code>GroupBy</code>, <code>Reverse</code> poore source ko <b>buffer</b> karte hain.</li>\n<li>Seekh: bahut bade ya kabhi na khatam hone wale source par buffering operator sab kuch load kar leta hai. \"Sabse chhota item\" ke liye <code>MinBy</code>/<code>Min</code> iraada seedhe batate hain.</li>\n</ul>"
      }
    },
    {
      id: "deferred-exception",
      src: "int[] divisors = [5, 2, 0, 1];\n\nvar results = divisors.Select(d => 100 / d);\nConsole.WriteLine(\"query built\");\n\ntry\n{\n    foreach (var r in results)\n        Console.WriteLine(r);\n}\ncatch (DivideByZeroException)\n{\n    Console.WriteLine(\"boom during foreach\");\n}",
      answer: "query built\n20\n50\nboom during foreach",
      explain: {
        en: "<ul>\n<li><code>100 / 0</code> is written on line 3, but <code>Select</code> is deferred — the division does not run there, so <b>query built</b> prints.</li>\n<li>The <code>foreach</code> runs the lambda item by item: <b>20</b>, <b>50</b>, then <code>d = 0</code> throws. The exception surfaces <b>inside the loop</b>, after some output already happened. The last item (1) is never reached.</li>\n<li>Lesson: with deferred queries, a <code>try/catch</code> around the line that <b>builds</b> the query catches nothing — the error appears where the query is <b>enumerated</b>, maybe in another method or layer.</li>\n</ul>",
        hi: "<ul>\n<li><code>100 / 0</code> line 3 पर लिखा है, पर <code>Select</code> deferred है — division वहाँ नहीं चलता, इसलिए <b>query built</b> print होता है।</li>\n<li><code>foreach</code> lambda को item by item चलाता है: <b>20</b>, <b>50</b>, फिर <code>d = 0</code> पर throw। Exception <b>loop के अंदर</b> आता है, कुछ output हो जाने के बाद। आख़िरी item (1) तक पहुँचते ही नहीं।</li>\n<li>सीख: deferred queries में query <b>बनाने</b> वाली line के आसपास का <code>try/catch</code> कुछ नहीं पकड़ता — error वहाँ आता है जहाँ query <b>enumerate</b> होती है, शायद किसी दूसरे method या layer में।</li>\n</ul>",
        hg: "<ul>\n<li><code>100 / 0</code> line 3 par likha hai, par <code>Select</code> deferred hai — division wahan nahi chalta, isliye <b>query built</b> print hota hai.</li>\n<li><code>foreach</code> lambda ko item by item chalata hai: <b>20</b>, <b>50</b>, phir <code>d = 0</code> par throw. Exception <b>loop ke andar</b> aata hai, kuch output ho jaane ke baad. Aakhri item (1) tak pahunchte hi nahi.</li>\n<li>Seekh: deferred queries mein query <b>banane</b> wali line ke aaspaas ka <code>try/catch</code> kuch nahi pakadta — error wahan aata hai jahan query <b>enumerate</b> hoti hai, shayad kisi doosre method ya layer mein.</li>\n</ul>"
      }
    },
    {
      id: "groupby-order",
      src: "string[] sales = [\"Pune:200\", \"Delhi:100\", \"Pune:50\", \"Mumbai:300\", \"Delhi:400\"];\n\nvar byCity = sales\n    .Select(s => s.Split(':'))\n    .GroupBy(parts => parts[0], parts => int.Parse(parts[1]));\n\nforeach (var g in byCity)\n    Console.WriteLine($\"{g.Key}: count={g.Count()} total={g.Sum()} first={g.First()}\");",
      answer: "Pune: count=2 total=250 first=200\nDelhi: count=2 total=500 first=100\nMumbai: count=1 total=300 first=300",
      explain: {
        en: "<ul>\n<li><b>Group order</b>: LINQ to Objects yields groups in the order each key <b>first appears</b> in the source — Pune (1st item), Delhi (2nd), Mumbai (4th). It is <b>not</b> alphabetical and not by size. This order is documented, so you can rely on it in memory.</li>\n<li>The <b>element selector</b> (<code>parts =&gt; int.Parse(parts[1])</code>) means each group contains just the numbers, so <code>g.Sum()</code> and <code>g.First()</code> work on ints.</li>\n<li><b>Items inside a group</b> keep source order: Delhi's first item is 100, not 400.</li>\n<li>Lesson: each group is <b>a key plus a sequence</b>. If you need a specific order of groups (by total, by name), add an <code>OrderBy</code> — and in a database query, add one every time.</li>\n</ul>",
        hi: "<ul>\n<li><b>Groups का order</b>: LINQ to Objects groups उसी order में देता है जिसमें हर key source में <b>पहली बार दिखी</b> — Pune (1st item), Delhi (2nd), Mumbai (4th)। यह alphabetical <b>नहीं</b> है और size से भी नहीं। यह order documented है, इसलिए memory में इस पर भरोसा कर सकते हो।</li>\n<li><b>Element selector</b> (<code>parts =&gt; int.Parse(parts[1])</code>) का मतलब हर group में सिर्फ़ numbers हैं, इसलिए <code>g.Sum()</code> और <code>g.First()</code> ints पर चलते हैं।</li>\n<li><b>Group के अंदर items</b> source order में रहते हैं: Delhi का पहला item 100 है, 400 नहीं।</li>\n<li>सीख: हर group <b>एक key और एक sequence</b> है। Groups का कोई ख़ास order चाहिए (total से, नाम से) तो <code>OrderBy</code> लगाओ — और database query में हर बार लगाओ।</li>\n</ul>",
        hg: "<ul>\n<li><b>Groups ka order</b>: LINQ to Objects groups usi order mein deta hai jismein har key source mein <b>pehli baar dikhi</b> — Pune (1st item), Delhi (2nd), Mumbai (4th). Yeh alphabetical <b>nahi</b> hai aur size se bhi nahi. Yeh order documented hai, isliye memory mein is par bharosa kar sakte ho.</li>\n<li><b>Element selector</b> (<code>parts =&gt; int.Parse(parts[1])</code>) ka matlab har group mein sirf numbers hain, isliye <code>g.Sum()</code> aur <code>g.First()</code> ints par chalte hain.</li>\n<li><b>Group ke andar items</b> source order mein rehte hain: Delhi ka pehla item 100 hai, 400 nahi.</li>\n<li>Seekh: har group <b>ek key aur ek sequence</b> hai. Groups ka koi khaas order chahiye (total se, naam se) to <code>OrderBy</code> lagao — aur database query mein har baar lagao.</li>\n</ul>"
      }
    },
    {
      id: "groupby-vs-tolookup",
      src: "var tickets = new List<string> { \"AC\", \"Sleeper\", \"AC\" };\n\nvar grouped = tickets.GroupBy(t => t);\nvar lookup = tickets.ToLookup(t => t);\n\ntickets.Add(\"General\");\ntickets.Add(\"AC\");\n\nConsole.WriteLine($\"GroupBy: {grouped.Count()} groups, AC = {grouped.First(g => g.Key == \"AC\").Count()}\");\nConsole.WriteLine($\"ToLookup: {lookup.Count} groups, AC = {lookup[\"AC\"].Count()}\");\nConsole.WriteLine($\"Tatkal: {lookup[\"Tatkal\"].Count()}\");",
      answer: "GroupBy: 3 groups, AC = 3\nToLookup: 2 groups, AC = 2\nTatkal: 0",
      explain: {
        en: "<ul>\n<li><code>GroupBy</code> is <b>deferred</b>: it groups when enumerated, after the two <code>Add</code> calls → 3 keys (AC, Sleeper, General) and AC has <b>3</b> tickets.</li>\n<li><code>ToLookup</code> ran <b>immediately</b> on the original 3 tickets → a snapshot with 2 keys and AC = <b>2</b>. Later changes to the list do not affect it.</li>\n<li>A lookup with a <b>missing key</b> (<code>\"Tatkal\"</code>) returns an <b>empty</b> sequence → <b>0</b>. A <code>Dictionary</code> would throw <code>KeyNotFoundException</code>.</li>\n<li>Lesson: <code>GroupBy</code> = live, re-run each time; <code>ToLookup</code> = built once, fast key access, forgiving on missing keys.</li>\n</ul>",
        hi: "<ul>\n<li><code>GroupBy</code> <b>deferred</b> है: enumerate होने पर group करता है, दोनों <code>Add</code> के बाद → 3 keys (AC, Sleeper, General) और AC में <b>3</b> tickets।</li>\n<li><code>ToLookup</code> original 3 tickets पर <b>तुरंत</b> चल गया → 2 keys वाला snapshot और AC = <b>2</b>। List में बाद के बदलाव इस पर असर नहीं करते।</li>\n<li>Lookup में <b>missing key</b> (<code>\"Tatkal\"</code>) पर <b>खाली</b> sequence मिलता है → <b>0</b>। <code>Dictionary</code> होती तो <code>KeyNotFoundException</code> throw करती।</li>\n<li>सीख: <code>GroupBy</code> = live, हर बार फिर से चलता है; <code>ToLookup</code> = एक बार बनता है, key से तेज़ access, missing keys पर माफ़ कर देता है।</li>\n</ul>",
        hg: "<ul>\n<li><code>GroupBy</code> <b>deferred</b> hai: enumerate hone par group karta hai, dono <code>Add</code> ke baad → 3 keys (AC, Sleeper, General) aur AC mein <b>3</b> tickets.</li>\n<li><code>ToLookup</code> original 3 tickets par <b>turant</b> chal gaya → 2 keys wala snapshot aur AC = <b>2</b>. List mein baad ke badlaav is par asar nahi karte.</li>\n<li>Lookup mein <b>missing key</b> (<code>\"Tatkal\"</code>) par <b>khaali</b> sequence milta hai → <b>0</b>. <code>Dictionary</code> hoti to <code>KeyNotFoundException</code> throw karti.</li>\n<li>Seekh: <code>GroupBy</code> = live, har baar phir se chalta hai; <code>ToLookup</code> = ek baar banta hai, key se tez access, missing keys par maaf kar deta hai.</li>\n</ul>"
      }
    },
    {
      id: "todictionary-duplicate-key",
      src: "string[] cities = [\"Pune\", \"Delhi\", \"Pune\"];\n\ntry\n{\n    var byName = cities.ToDictionary(c => c);\n    Console.WriteLine($\"dictionary size: {byName.Count}\");\n}\ncatch (ArgumentException ex)\n{\n    Console.WriteLine(ex.Message);\n}\n\nvar counts = cities.GroupBy(c => c).ToDictionary(g => g.Key, g => g.Count());\nConsole.WriteLine($\"Pune = {counts[\"Pune\"]}, Delhi = {counts[\"Delhi\"]}\");",
      answer: "An item with the same key has already been added. Key: Pune\nPune = 2, Delhi = 1",
      explain: {
        en: "<ul>\n<li><code>ToDictionary</code> runs <b>immediately</b> and adds each item with its key. The second <code>\"Pune\"</code> is a duplicate key → <code>ArgumentException</code>, so <b>dictionary size</b> is never printed.</li>\n<li>Unlike <code>ToLookup</code> (one key → many items), a dictionary allows <b>one value per key</b>.</li>\n<li>Fix: decide what to do with duplicates first — group them (<code>GroupBy(...).ToDictionary(g =&gt; g.Key, g =&gt; g.Count())</code>), keep one (<code>DistinctBy</code>), or use <code>ToLookup</code>. Here Pune has <b>2</b>, Delhi <b>1</b>.</li>\n<li>Lesson: <code>ToDictionary</code> on real data is a common production crash — the key that was \"always unique\" in testing is not unique in production. Ask \"can this key repeat?\" in code review.</li>\n</ul>",
        hi: "<ul>\n<li><code>ToDictionary</code> <b>तुरंत</b> चलता है और हर item को उसकी key के साथ जोड़ता है। दूसरा <code>\"Pune\"</code> duplicate key है → <code>ArgumentException</code>, इसलिए <b>dictionary size</b> कभी print नहीं होता।</li>\n<li><code>ToLookup</code> (एक key → कई items) के उलट, dictionary में <b>हर key की एक ही value</b> हो सकती है।</li>\n<li>Fix: पहले तय करो कि duplicates का क्या करना है — उन्हें group करो (<code>GroupBy(...).ToDictionary(g =&gt; g.Key, g =&gt; g.Count())</code>), एक रखो (<code>DistinctBy</code>), या <code>ToLookup</code> use करो। यहाँ Pune के <b>2</b>, Delhi का <b>1</b>।</li>\n<li>सीख: असली data पर <code>ToDictionary</code> production crash की आम वजह है — testing में जो key \"हमेशा unique\" थी, production में unique नहीं निकलती। Code review में पूछो \"क्या यह key दोहरा सकती है?\"।</li>\n</ul>",
        hg: "<ul>\n<li><code>ToDictionary</code> <b>turant</b> chalta hai aur har item ko uski key ke saath jodta hai. Doosra <code>\"Pune\"</code> duplicate key hai → <code>ArgumentException</code>, isliye <b>dictionary size</b> kabhi print nahi hota.</li>\n<li><code>ToLookup</code> (ek key → kai items) ke ulat, dictionary mein <b>har key ki ek hi value</b> ho sakti hai.</li>\n<li>Fix: pehle tay karo ki duplicates ka kya karna hai — unhe group karo (<code>GroupBy(...).ToDictionary(g =&gt; g.Key, g =&gt; g.Count())</code>), ek rakho (<code>DistinctBy</code>), ya <code>ToLookup</code> use karo. Yahan Pune ke <b>2</b>, Delhi ka <b>1</b>.</li>\n<li>Seekh: asli data par <code>ToDictionary</code> production crash ki aam wajah hai — testing mein jo key \"hamesha unique\" thi, production mein unique nahi nikalti. Code review mein poochho \"kya yeh key dohra sakti hai?\".</li>\n</ul>"
      }
    },
    {
      id: "first-single-defaults",
      src: "int[] marks = [35, 72, 90, 72];\n\nConsole.WriteLine(marks.FirstOrDefault(m => m > 95));\nConsole.WriteLine(marks.FirstOrDefault(m => m > 95, -1));\nConsole.WriteLine(marks.First(m => m > 70));\nConsole.WriteLine(marks.SingleOrDefault(m => m == 90));\n\ntry\n{\n    Console.WriteLine(marks.SingleOrDefault(m => m == 72));\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine(ex.Message);\n}\n\nstring[] names = [];\nConsole.WriteLine(names.FirstOrDefault() ?? \"null\");",
      answer: "0\n-1\n72\n90\nSequence contains more than one matching element\nnull",
      explain: {
        en: "<ul>\n<li>No mark is above 95, so <code>FirstOrDefault</code> returns <code>default(int)</code> = <b>0</b> — which looks like a real mark. The .NET 6 overload lets you choose <b>-1</b> instead.</li>\n<li><code>First(m =&gt; m &gt; 70)</code> returns the <b>first</b> match in order → <b>72</b> (not 90).</li>\n<li>Exactly one 90 → <code>SingleOrDefault</code> returns <b>90</b>.</li>\n<li>Two 72s → <code>SingleOrDefault</code> <b>still throws</b>: \"OrDefault\" covers only the <b>zero</b> case, never duplicates.</li>\n<li>For a reference type (<code>string</code>), the default is <code>null</code> → <b>null</b> via <code>??</code>.</li>\n<li>Lesson: <code>...OrDefault</code> on value types can hide \"not found\" behind 0; and <code>Single</code> is an assertion of uniqueness.</li>\n</ul>",
        hi: "<ul>\n<li>कोई mark 95 से ऊपर नहीं, इसलिए <code>FirstOrDefault</code> <code>default(int)</code> = <b>0</b> देता है — जो असली mark जैसा दिखता है। .NET 6 का overload आपको उसकी जगह <b>-1</b> चुनने देता है।</li>\n<li><code>First(m =&gt; m &gt; 70)</code> order में <b>पहला</b> match देता है → <b>72</b> (90 नहीं)।</li>\n<li>ठीक एक 90 है → <code>SingleOrDefault</code> <b>90</b> देता है।</li>\n<li>दो 72 हैं → <code>SingleOrDefault</code> <b>फिर भी throw</b> करता है: \"OrDefault\" सिर्फ़ <b>zero</b> वाले case को संभालता है, duplicates को कभी नहीं।</li>\n<li>Reference type (<code>string</code>) के लिए default <code>null</code> है → <code>??</code> से <b>null</b>।</li>\n<li>सीख: value types पर <code>...OrDefault</code> \"नहीं मिला\" को 0 के पीछे छुपा सकता है; और <code>Single</code> uniqueness का assertion है।</li>\n</ul>",
        hg: "<ul>\n<li>Koi mark 95 se upar nahi, isliye <code>FirstOrDefault</code> <code>default(int)</code> = <b>0</b> deta hai — jo asli mark jaisa dikhta hai. .NET 6 ka overload aapko uski jagah <b>-1</b> chunne deta hai.</li>\n<li><code>First(m =&gt; m &gt; 70)</code> order mein <b>pehla</b> match deta hai → <b>72</b> (90 nahi).</li>\n<li>Theek ek 90 hai → <code>SingleOrDefault</code> <b>90</b> deta hai.</li>\n<li>Do 72 hain → <code>SingleOrDefault</code> <b>phir bhi throw</b> karta hai: \"OrDefault\" sirf <b>zero</b> wale case ko sambhaalta hai, duplicates ko kabhi nahi.</li>\n<li>Reference type (<code>string</code>) ke liye default <code>null</code> hai → <code>??</code> se <b>null</b>.</li>\n<li>Seekh: value types par <code>...OrDefault</code> \"nahi mila\" ko 0 ke peeche chhupa sakta hai; aur <code>Single</code> uniqueness ka assertion hai.</li>\n</ul>"
      }
    },
    {
      id: "orderby-twice",
      src: "Emp[] staff =\n[\n    new(\"Asha\", \"Pune\", 30),\n    new(\"Ravi\", \"Delhi\", 25),\n    new(\"Neha\", \"Pune\", 25),\n    new(\"Amit\", \"Delhi\", 30)\n];\n\nConsole.WriteLine(Names(staff.OrderBy(e => e.City)));\nConsole.WriteLine(Names(staff.OrderBy(e => e.City).ThenBy(e => e.Age)));\nConsole.WriteLine(Names(staff.OrderBy(e => e.City).OrderBy(e => e.Age)));\n\nstatic string Names(IEnumerable<Emp> list) => string.Join(\" \", list.Select(e => e.Name));\n\nrecord Emp(string Name, string City, int Age);",
      answer: "Ravi Amit Asha Neha\nRavi Amit Neha Asha\nRavi Neha Amit Asha",
      explain: {
        en: "<ul>\n<li><b>Line 1</b>: by City. Delhi (Ravi, Amit) before Pune (Asha, Neha). Inside a city the original order stays — the sort is <b>stable</b>.</li>\n<li><b>Line 2</b>: City, then Age inside each city: Delhi → Ravi 25, Amit 30; Pune → Neha 25, Asha 30. This is what people usually want.</li>\n<li><b>Line 3</b>: the second <code>OrderBy</code> makes <b>Age the primary key</b>. Age 25: Ravi, Neha; age 30: Amit, Asha. The City order survives only as a hidden tie-breaker because the sort is stable.</li>\n<li>Lesson: use <code>ThenBy</code> for secondary keys. <code>OrderBy</code> twice is a common bug, and in a database query the first sort may simply be dropped.</li>\n</ul>",
        hi: "<ul>\n<li><b>Line 1</b>: City से। Delhi (Ravi, Amit) पहले, फिर Pune (Asha, Neha)। एक city के अंदर original order बना रहता है — sort <b>stable</b> है।</li>\n<li><b>Line 2</b>: City, फिर हर city के अंदर Age: Delhi → Ravi 25, Amit 30; Pune → Neha 25, Asha 30। लोग आमतौर पर यही चाहते हैं।</li>\n<li><b>Line 3</b>: दूसरा <code>OrderBy</code> <b>Age को primary key</b> बना देता है। Age 25: Ravi, Neha; age 30: Amit, Asha। City वाला order सिर्फ़ छुपे tie-breaker की तरह बचता है क्योंकि sort stable है।</li>\n<li>सीख: secondary keys के लिए <code>ThenBy</code> use करो। दो बार <code>OrderBy</code> एक आम bug है, और database query में पहला sort बस गिराया जा सकता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Line 1</b>: City se. Delhi (Ravi, Amit) pehle, phir Pune (Asha, Neha). Ek city ke andar original order bana rehta hai — sort <b>stable</b> hai.</li>\n<li><b>Line 2</b>: City, phir har city ke andar Age: Delhi → Ravi 25, Amit 30; Pune → Neha 25, Asha 30. Log aamtaur par yahi chahte hain.</li>\n<li><b>Line 3</b>: doosra <code>OrderBy</code> <b>Age ko primary key</b> bana deta hai. Age 25: Ravi, Neha; age 30: Amit, Asha. City wala order sirf chhupe tie-breaker ki tarah bachta hai kyonki sort stable hai.</li>\n<li>Seekh: secondary keys ke liye <code>ThenBy</code> use karo. Do baar <code>OrderBy</code> ek aam bug hai, aur database query mein pehla sort bas giraaya ja sakta hai.</li>\n</ul>"
      }
    },
    {
      id: "inner-vs-left-join",
      src: "Customer[] customers = [new(1, \"Asha\"), new(2, \"Ravi\"), new(3, \"Neha\")];\nOrder[] orders = [new(101, 1), new(102, 3), new(103, 1), new(104, 9)];\n\nvar inner = customers.Join(orders, c => c.Id, o => o.CustomerId, (c, o) => $\"{c.Name}-{o.Id}\");\nConsole.WriteLine(string.Join(\", \", inner));\n\nvar counts = customers.GroupJoin(orders, c => c.Id, o => o.CustomerId, (c, os) => $\"{c.Name}:{os.Count()}\");\nConsole.WriteLine(string.Join(\", \", counts));\n\nvar left = from c in customers\n           join o in orders on c.Id equals o.CustomerId into cOrders\n           from o in cOrders.DefaultIfEmpty()\n           select $\"{c.Name}-{(o is null ? \"none\" : o.Id.ToString())}\";\nConsole.WriteLine(string.Join(\", \", left));\n\nrecord Customer(int Id, string Name);\nrecord Order(int Id, int CustomerId);",
      answer: "Asha-101, Asha-103, Neha-102\nAsha:2, Ravi:0, Neha:1\nAsha-101, Asha-103, Ravi-none, Neha-102",
      explain: {
        en: "<ul>\n<li><b>Join</b> (inner): only matching pairs. Ravi has no orders → gone. Order 104 points to customer 9, who does not exist → gone. Order of results: customers in their order, and for each customer the matching orders in <b>their</b> order (101 before 103).</li>\n<li><b>GroupJoin</b>: <b>every</b> customer appears once, with a group of orders — Ravi's group is empty → <b>Ravi:0</b>.</li>\n<li><b>Left join</b>: <code>DefaultIfEmpty()</code> turns Ravi's empty group into one <code>null</code>, so Ravi survives as <b>Ravi-none</b>. Order 104 still does not appear (it has no customer — that would be a right join).</li>\n<li>Lesson: inner join drops rows on both sides; left join keeps every row of the left side. In .NET 10 you can write the same with <code>customers.LeftJoin(...)</code>.</li>\n</ul>",
        hi: "<ul>\n<li><b>Join</b> (inner): सिर्फ़ matching pairs। Ravi के कोई orders नहीं → गायब। Order 104 customer 9 की तरफ़ इशारा करता है, जो है ही नहीं → गायब। Results का order: customers अपने order में, और हर customer के matching orders <b>उनके</b> order में (101 पहले, फिर 103)।</li>\n<li><b>GroupJoin</b>: <b>हर</b> customer एक बार आता है, orders के एक group के साथ — Ravi का group खाली है → <b>Ravi:0</b>।</li>\n<li><b>Left join</b>: <code>DefaultIfEmpty()</code> Ravi के खाली group को एक <code>null</code> में बदल देता है, इसलिए Ravi <b>Ravi-none</b> बनकर बच जाता है। Order 104 फिर भी नहीं दिखता (उसका customer नहीं है — वो right join होता)।</li>\n<li>सीख: inner join दोनों तरफ़ की rows गिराता है; left join बाईं तरफ़ की हर row रखता है। .NET 10 में यही <code>customers.LeftJoin(...)</code> से लिख सकते हो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Join</b> (inner): sirf matching pairs. Ravi ke koi orders nahi → gaayab. Order 104 customer 9 ki taraf ishaara karta hai, jo hai hi nahi → gaayab. Results ka order: customers apne order mein, aur har customer ke matching orders <b>unke</b> order mein (101 pehle, phir 103).</li>\n<li><b>GroupJoin</b>: <b>har</b> customer ek baar aata hai, orders ke ek group ke saath — Ravi ka group khaali hai → <b>Ravi:0</b>.</li>\n<li><b>Left join</b>: <code>DefaultIfEmpty()</code> Ravi ke khaali group ko ek <code>null</code> mein badal deta hai, isliye Ravi <b>Ravi-none</b> bankar bach jaata hai. Order 104 phir bhi nahi dikhta (uska customer nahi hai — woh right join hota).</li>\n<li>Seekh: inner join dono taraf ki rows giraata hai; left join baayin taraf ki har row rakhta hai. .NET 10 mein yahi <code>customers.LeftJoin(...)</code> se likh sakte ho.</li>\n</ul>"
      }
    },
    {
      id: "func-vs-expression",
      src: "using System.Linq.Expressions;\n\nIQueryable<int> prices = new List<int> { 50, 150, 250 }.AsQueryable();\n\nExpression<Func<int, bool>> asExpression = p => p > 100;\nFunc<int, bool> asFunc = p => p > 100;\n\nvar q1 = prices.Where(asExpression);\nvar q2 = prices.Where(asFunc);\n\nConsole.WriteLine(q1 is IQueryable<int>);\nConsole.WriteLine(q2 is IQueryable<int>);\nConsole.WriteLine(asExpression);\nConsole.WriteLine(q1.Count() == q2.Count());",
      answer: "True\nFalse\np => (p > 100)\nTrue",
      explain: {
        en: "<ul>\n<li><code>prices.Where(asExpression)</code> binds to <code>Queryable.Where</code> → the result is still an <code>IQueryable</code> → <b>True</b>.</li>\n<li>A <code>Func</code> cannot be converted to an <code>Expression</code>, so <code>prices.Where(asFunc)</code> binds to <code>Enumerable.Where</code> (an <code>IQueryable</code> is also an <code>IEnumerable</code>) → the result is a plain in-memory sequence → <b>False</b>.</li>\n<li>Printing the expression shows the tree as text: <b>p =&gt; (p &gt; 100)</b>. A <code>Func</code> has no such readable form.</li>\n<li>Both give 2 items here → <b>True</b>. Same result, very different cost against a real database: with EF Core, <code>q1</code> sends <code>WHERE p &gt; 100</code> to SQL, while <code>q2</code> loads <b>every row</b> and filters in C#.</li>\n<li>Lesson: for EF Core filters, accept <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code>, not <code>Func&lt;T,bool&gt;</code>. It compiles either way — the bug shows up only as slowness.</li>\n</ul>",
        hi: "<ul>\n<li><code>prices.Where(asExpression)</code>, <code>Queryable.Where</code> से bind होता है → result अब भी <code>IQueryable</code> है → <b>True</b>।</li>\n<li><code>Func</code> को <code>Expression</code> में नहीं बदला जा सकता, इसलिए <code>prices.Where(asFunc)</code>, <code>Enumerable.Where</code> से bind होता है (<code>IQueryable</code> भी एक <code>IEnumerable</code> है) → result एक साधारण in-memory sequence है → <b>False</b>।</li>\n<li>Expression print करने पर tree text की तरह दिखता है: <b>p =&gt; (p &gt; 100)</b>। <code>Func</code> का ऐसा कोई पढ़ने लायक form नहीं होता।</li>\n<li>यहाँ दोनों 2 items देते हैं → <b>True</b>। Result वही, पर असली database पर ख़र्च बिल्कुल अलग: EF Core के साथ <code>q1</code> SQL में <code>WHERE p &gt; 100</code> भेजता है, जबकि <code>q2</code> <b>हर row</b> load करके C# में filter करता है।</li>\n<li>सीख: EF Core filters के लिए <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> लो, <code>Func&lt;T,bool&gt;</code> नहीं। दोनों तरह compile होता है — bug सिर्फ़ धीमेपन के रूप में दिखता है।</li>\n</ul>",
        hg: "<ul>\n<li><code>prices.Where(asExpression)</code>, <code>Queryable.Where</code> se bind hota hai → result ab bhi <code>IQueryable</code> hai → <b>True</b>.</li>\n<li><code>Func</code> ko <code>Expression</code> mein nahi badla ja sakta, isliye <code>prices.Where(asFunc)</code>, <code>Enumerable.Where</code> se bind hota hai (<code>IQueryable</code> bhi ek <code>IEnumerable</code> hai) → result ek saadhaaran in-memory sequence hai → <b>False</b>.</li>\n<li>Expression print karne par tree text ki tarah dikhta hai: <b>p =&gt; (p &gt; 100)</b>. <code>Func</code> ka aisa koi padhne laayak form nahi hota.</li>\n<li>Yahan dono 2 items dete hain → <b>True</b>. Result wahi, par asli database par kharcha bilkul alag: EF Core ke saath <code>q1</code> SQL mein <code>WHERE p &gt; 100</code> bhejta hai, jabki <code>q2</code> <b>har row</b> load karke C# mein filter karta hai.</li>\n<li>Seekh: EF Core filters ke liye <code>Expression&lt;Func&lt;T,bool&gt;&gt;</code> lo, <code>Func&lt;T,bool&gt;</code> nahi. Dono tarah compile hota hai — bug sirf dheemepan ke roop mein dikhta hai.</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>LINQ</b>: <code>Where</code> filters, <code>Select</code> reshapes (one output per input); method and query syntax compile to the same calls; the source list is never changed.",
      "<b>Deferred execution</b>: <code>Where</code>/<code>Select</code>/<code>OrderBy</code> only build a query; <code>foreach</code>, <code>ToList</code>, <code>Count</code>, <code>First</code>, <code>Any</code> run it with the data of that moment.",
      "<b>Multiple enumeration</b>: every enumeration re-runs the query (twice = two DB calls). Materialise once, or take <code>IReadOnlyCollection&lt;T&gt;</code>; analyzer CA1851 helps.",
      "<b>IEnumerable</b> = <code>Func</code>, runs in memory; <b>IQueryable</b> = <code>Expression</code> tree that EF Core translates to SQL. The variable's type picks the method; a <code>Func</code> parameter loses the SQL.",
      "<b>Sorting and paging</b>: <code>OrderBy</code> + <code>ThenBy</code> (never <code>OrderBy</code> twice), a unique last key, then <code>Skip((page - 1) * size).Take(size)</code>; keyset paging for deep pages.",
      "<b>GroupBy</b> = groups with a <code>Key</code> (first-appearance order); a group is a sequence, so use <code>Count()</code>/<code>Sum()</code>; <code>Where</code> after it filters groups (like HAVING).",
      "<b>Join</b> = inner join (unmatched items vanish); <b>GroupJoin</b> + <code>DefaultIfEmpty()</code> = left join; .NET 10 adds <code>LeftJoin</code>/<code>RightJoin</code>.",
      "<b>First</b> throws on none; <b>Single</b> throws on none or many; <b>...OrDefault</b> returns default on none (<code>SingleOrDefault</code> still throws on duplicates); <b>Any()</b> beats <code>Count() &gt; 0</code>.",
      "<b>Select</b> = one output per input (lists stay nested); <b>SelectMany</b> = flatten all children into one sequence.",
      "<b>TL view</b>: readable LINQ by default; switch to a plain loop only in hot paths that a profiler or benchmark points to."
    ],
    meaning: {
      hi: [
        "LINQ: Where filter करता है, Select रूप बदलता है; method और query syntax एक ही calls बनती हैं; source list नहीं बदलती",
        "Deferred execution: Where/Select/OrderBy सिर्फ़ query बनाते हैं; foreach, ToList, Count, First, Any उसे उस पल के data पर चलाते हैं",
        "Multiple enumeration: हर enumeration query फिर चलाता है (दो बार = दो DB calls); एक बार materialise करो या IReadOnlyCollection&lt;T&gt; लो",
        "IEnumerable = Func, memory में चलता है; IQueryable = Expression tree जिसे EF Core SQL में बदलता है; variable का type method तय करता है",
        "Sorting और paging: OrderBy + ThenBy (दो OrderBy कभी नहीं), आख़िरी key unique, फिर Skip((page - 1) * size).Take(size); गहरे pages के लिए keyset paging",
        "GroupBy = Key वाले groups (पहली बार दिखने के क्रम में); group एक sequence है, इसलिए Count()/Sum() चलाओ; उसके बाद का Where groups को filter करता है",
        "Join = inner join (बिना जोड़ीदार वाले ग़ायब); GroupJoin + DefaultIfEmpty() = left join; .NET 10 में LeftJoin/RightJoin आए",
        "First कुछ न मिलने पर फेंकता है; Single शून्य या कई पर फेंकता है; ...OrDefault कुछ न मिलने पर default देता है; Any() बेहतर है Count() > 0 से",
        "Select = हर input का एक output (lists nested रहती हैं); SelectMany = सारे children को एक sequence में flatten करो।",
        "TL view: default में readable LINQ; plain loop पर सिर्फ़ उन hot paths में जाओ जिन्हें profiler या benchmark दिखाए।"
      ],
      hg: [
        "LINQ: Where filter karta hai, Select roop badalta hai; method aur query syntax ek hi calls banti hain; source list nahi badalti",
        "Deferred execution: Where/Select/OrderBy sirf query banate hain; foreach, ToList, Count, First, Any use us pal ke data par chalate hain",
        "Multiple enumeration: har enumeration query phir chalata hai (do baar = do DB calls); ek baar materialise karo ya IReadOnlyCollection&lt;T&gt; lo",
        "IEnumerable = Func, memory mein chalta hai; IQueryable = Expression tree jise EF Core SQL mein badalta hai; variable ka type method tay karta hai",
        "Sorting aur paging: OrderBy + ThenBy (do OrderBy kabhi nahi), aakhiri key unique, phir Skip((page - 1) * size).Take(size); gehre pages ke liye keyset paging",
        "GroupBy = Key wale groups (pehli baar dikhne ke kram mein); group ek sequence hai, isliye Count()/Sum() chalao; uske baad ka Where groups ko filter karta hai",
        "Join = inner join (bina jodidaar wale gaayab); GroupJoin + DefaultIfEmpty() = left join; .NET 10 mein LeftJoin/RightJoin aaye",
        "First kuch na milne par phenkta hai; Single shoonya ya kai par phenkta hai; ...OrDefault kuch na milne par default deta hai; Any() behtar hai Count() > 0 se",
        "Select = har input ka ek output (lists nested rehti hain); SelectMany = saare children ko ek sequence mein flatten karo.",
        "TL view: default mein readable LINQ; plain loop par sirf un hot paths mein jao jinhe profiler ya benchmark dikhaaye."
      ]
    }
  }
};
