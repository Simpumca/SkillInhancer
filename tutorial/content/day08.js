// Day 8 — SOLID Principles, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 8,
  format: "lesson",
  title: {
    en: "SOLID Principles",
    hi: "SOLID सिद्धांत (Principles)",
    hg: "SOLID Principles"
  },
  summary: {
    en: "<p>Day 8 teaches the five <b>SOLID</b> habits in 6 short lessons, all on the customer-care CRM. A <code>TicketService</code> that does everything is split by reason to change (S). SLA rules become classes you add instead of a switch you edit (O). A read-only archive learns not to pretend it can save (L). A fat repository interface becomes small role interfaces (I). Finally the service stops creating its own notifier (D), and a container builds the chain (DIP vs DI vs IoC).</p><p>Every lesson has a what, a why, an analogy, a complete program with its output, line-by-line notes, common mistakes, a small exercise and a quick quiz. The Deep Dive keeps the classic LSP examples, ISP in .NET, container details and the code-review view.</p>",
    hi: "<p>Day 8 में छह छोटे पाठों में पाँच <b>SOLID</b> आदतें सिखाई जाती हैं, सब customer-care CRM पर। सब कुछ करने वाला <code>TicketService</code> बदलने की वजह के हिसाब से बँटता है (S)। SLA rules ऐसी classes बनते हैं जिन्हें आप जोड़ते हो, switch नहीं जिसे बदलते हो (O)। Read-only archive सीखता है कि वह save कर सकने का दिखावा न करे (L)। मोटा repository interface छोटे role interfaces बनता है (I)। आख़िर में service अपना notifier ख़ुद बनाना छोड़ती है (D), और container पूरी कड़ी बना देता है (DIP vs DI vs IoC)।</p><p>हर पाठ में यह क्या है, क्यों चाहिए, एक मिसाल, output के साथ पूरा program, लाइन-दर-लाइन समझ, आम ग़लतियाँ, एक छोटा exercise और झटपट quiz है। Deep Dive में LSP के मशहूर उदाहरण, .NET में ISP, container की बारीकियाँ और code review का नज़रिया रखा है।</p>",
    hg: "<p>Day 8 mein chhah chhote lessons mein paanch <b>SOLID</b> aadatein sikhayi jaati hain, sab customer-care CRM par. Sab kuch karne wala <code>TicketService</code> badalne ki wajah ke hisaab se bantta hai (S). SLA rules aisi classes bante hain jinhe aap jodte ho, switch nahi jise badalte ho (O). Read-only archive seekhta hai ki woh save kar sakne ka dikhaava na kare (L). Mota repository interface chhote role interfaces banta hai (I). Aakhir mein service apna notifier khud banana chhodti hai (D), aur container poori kadi bana deta hai (DIP vs DI vs IoC).</p><p>Har lesson mein ye kya hai, kyun chahiye, ek misaal, output ke saath poora program, line-by-line samajh, aam galtiyan, ek chhota exercise aur jhatpat quiz hai. Deep Dive mein LSP ke mashhoor udaharan, .NET mein ISP, container ki baarikiyan aur code review ka nazariya rakha hai.</p>"
  },
  sections: [
    {
      id: "srp",
      depth: "short",
      title: {
        en: "S — Single Responsibility",
        hi: "S — Single Responsibility: एक class, एक वजह",
        hg: "S — Single Responsibility: ek class, ek wajah"
      },
      lesson: {
        buildsOn: {
          en: "Days 1–6 built the CRM and its tools. Day 1 gave you the OOP pillars, <code>INotifier</code> and a <code>TicketService</code> that gets its notifier from outside; Days 2–6 added C#, LINQ and EF Core; Day 7 revised them. <b>SOLID</b> is five habits — <b>S</b>, <b>O</b>, <b>L</b>, <b>I</b>, <b>D</b> — that use those ideas to keep code cheap to change. We take one habit per lesson on the same CRM, starting with S.",
          hi: "Days 1–6 में CRM और उसके औज़ार बने। Day 1 में OOP के pillars, <code>INotifier</code> और ऐसा <code>TicketService</code> आया जिसे notifier बाहर से मिलता है; Days 2–6 में C#, LINQ और EF Core जुड़े; Day 7 में revision हुआ। <b>SOLID</b> पाँच आदतें हैं — <b>S</b>, <b>O</b>, <b>L</b>, <b>I</b>, <b>D</b> — जो इन्हीं बातों से code को बदलने में सस्ता रखती हैं। हर पाठ में एक आदत, उसी CRM पर; शुरुआत S से।",
          hg: "Days 1–6 mein CRM aur uske auzaar bane. Day 1 mein OOP ke pillars, <code>INotifier</code> aur aisa <code>TicketService</code> aaya jise notifier bahar se milta hai; Days 2–6 mein C#, LINQ aur EF Core jude; Day 7 mein revision hua. <b>SOLID</b> paanch aadatein hain — <b>S</b>, <b>O</b>, <b>L</b>, <b>I</b>, <b>D</b> — jo inhi baaton se code ko badalne mein sasta rakhti hain. Har lesson mein ek aadat, usi CRM par; shuruaat S se."
        },
        what: {
          en: "<p><b>Single Responsibility Principle (SRP):</b> a class should have <b>one reason to change</b> — one person or team who may ask you to change it.</p><p>\"Responsibility\" does not mean \"one method\". It means one <i>reason to change</i>.</p>",
          hi: "<p><b>Single Responsibility Principle (SRP):</b> एक class के बदलने की <b>सिर्फ़ एक वजह</b> होनी चाहिए — यानी एक ही आदमी या team जो उसमें बदलाव माँग सके।</p><p>\"Responsibility\" का मतलब \"एक method\" नहीं है। मतलब है बदलने की एक <i>वजह</i>।</p>",
          hg: "<p><b>Single Responsibility Principle (SRP):</b> ek class ke badalne ki <b>sirf ek wajah</b> honi chahiye — yaani ek hi aadmi ya team jo usmein badlaav maang sake.</p><p>\"Responsibility\" ka matlab \"ek method\" nahi hai. Matlab hai badalne ki ek <i>wajah</i>.</p>"
        },
        why: {
          en: "<p>In the CRM, three people ask for changes: the product team (rules), the infra team (where tickets are stored) and marketing (SMS wording). If one class holds all three, a wording change can break a rule, and every test needs a database and an SMS gateway.</p>",
          hi: "<p>CRM में तीन लोग बदलाव माँगते हैं: product team (rules), infra team (ticket कहाँ store हों) और marketing (SMS के शब्द)। तीनों एक class में हों तो शब्द बदलते-बदलते कोई rule टूट सकता है, और हर test को database और SMS gateway चाहिए।</p>",
          hg: "<p>CRM mein teen log badlaav maangte hain: product team (rules), infra team (ticket kahan store hon) aur marketing (SMS ke shabd). Teeno ek class mein hon to shabd badalte-badalte koi rule toot sakta hai, aur har test ko database aur SMS gateway chahiye.</p>"
        },
        analogy: {
          en: "<p>A kirana shop where the owner also cooks, drives the delivery van and files GST returns: if he is sick, the whole shop stops. A good shop has a counter person, a delivery boy and an accountant. Each one changes for a different reason.</p>",
          hi: "<p>एक किराना दुकान जहाँ मालिक ही खाना भी बनाता है, delivery van भी चलाता है और GST return भी भरता है: वह बीमार पड़े तो पूरी दुकान रुक जाती है। अच्छी दुकान में counter वाला, delivery वाला और accountant अलग होते हैं। हर एक अलग वजह से बदलता है।</p>",
          hg: "<p>Ek kirana dukaan jahan maalik hi khaana bhi banata hai, delivery van bhi chalata hai aur GST return bhi bharta hai: woh beemar pade to poori dukaan ruk jaati hai. Achhi dukaan mein counter wala, delivery wala aur accountant alag hote hain. Har ek alag wajah se badalta hai.</p>"
        },
        focus: {
          caption: {
            en: "The problem: one method with three reasons to change",
            hi: "समस्या: एक method, बदलने की तीन वजहें",
            hg: "Samasya: ek method, badalne ki teen wajahen"
          },
          src: "public record SupportTicket(int Id, string Customer, string Issue, string Phone);\n\npublic class TicketService\n{\n    public void Open(SupportTicket ticket)\n    {\n        if (string.IsNullOrWhiteSpace(ticket.Issue))      // rule: product team\n            throw new ArgumentException(\"Issue is required\");\n\n        File.AppendAllText(\"tickets.txt\", $\"{ticket.Id},{ticket.Customer}{Environment.NewLine}\");   // storage: infra team\n\n        Console.WriteLine($\"SMS to {ticket.Phone}: Hi {ticket.Customer}, ticket #{ticket.Id} is open\");   // wording: marketing\n    }\n}",
          check: "compile"
        },
        lines: [
          {
            code: "var service = new TicketService(new TicketValidator(), new TicketStore(), new TicketNotifier());",
            note: {
              en: "The service receives three small helpers, one for each reason to change.",
              hi: "Service को तीन छोटे helpers मिलते हैं, बदलने की हर वजह के लिए एक।",
              hg: "Service ko teen chhote helpers milte hain, badalne ki har wajah ke liye ek."
            }
          },
          {
            code: "public class TicketValidator",
            note: {
              en: "Only business rules live here. When the product team changes a rule, this is the only file you open.",
              hi: "यहाँ सिर्फ़ business rules हैं। Product team कोई rule बदले तो बस यही file खोलनी है।",
              hg: "Yahan sirf business rules hain. Product team koi rule badle to bas yahi file kholni hai."
            }
          },
          {
            code: "if (string.IsNullOrWhiteSpace(ticket.Issue))",
            note: {
              en: "The rule itself: a blank issue is not a valid ticket.",
              hi: "Rule ख़ुद: ख़ाली issue वाला ticket सही नहीं है।",
              hg: "Rule khud: khaali issue wala ticket sahi nahi hai."
            }
          },
          {
            code: "public void Save(SupportTicket ticket) => _tickets.Add(ticket);",
            note: {
              en: "Storage detail. Today it is a list; later you can move to EF Core without touching the rules or the SMS text.",
              hi: "Storage की बात। आज यह list है; बाद में EF Core पर जाओ तो rules या SMS के text को हाथ नहीं लगाना पड़ेगा।",
              hg: "Storage ki baat. Aaj ye list hai; baad mein EF Core par jao to rules ya SMS ke text ko haath nahi lagana padega."
            }
          },
          {
            code: "_notifier.TicketOpened(ticket);",
            note: {
              en: "The service only <b>coordinates</b>: validate, save, notify. It knows the order of steps, not how each step works.",
              hi: "Service सिर्फ़ <b>coordinate</b> करता है: validate, save, notify। उसे steps का क्रम पता है, हर step कैसे होता है यह नहीं।",
              hg: "Service sirf <b>coordinate</b> karta hai: validate, save, notify. Use steps ka kram pata hai, har step kaise hota hai ye nahi."
            }
          },
          {
            code: "catch (ArgumentException ex)",
            note: {
              en: "Ticket 502 has a blank issue, so the validator throws before anything is saved or sent. Nothing else had to change.",
              hi: "Ticket 502 का issue ख़ाली है, इसलिए validator save या SMS से पहले ही exception फेंक देता है। बाक़ी कुछ बदलना नहीं पड़ा।",
              hg: "Ticket 502 ka issue khaali hai, isliye validator save ya SMS se pehle hi exception phenk deta hai. Baaki kuch badalna nahi pada."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Reading SRP as \"one method per class\". A class with five methods that serve the same team is fine.</li><li>Over-splitting: a 15-line class cut into five tiny classes gives you five files to jump between. Wait until there is a second reason to change.</li><li>Letting a helper creep back into the service (\"just one small <code>if</code> for the SMS text\").</li></ul>",
          hi: "<ul><li>SRP को \"एक class में एक method\" समझ लेना। पाँच methods वाली class ठीक है, अगर सब एक ही team के काम की हैं।</li><li>ज़रूरत से ज़्यादा बाँटना: 15 lines की class को पाँच छोटी classes में काटने से पाँच files में कूदना पड़ता है। दूसरी वजह आने तक रुको।</li><li>Helper का काम वापस service में घुस जाने देना (\"SMS text के लिए बस एक छोटा <code>if</code>\")।</li></ul>",
          hg: "<ul><li>SRP ko \"ek class mein ek method\" samajh lena. Paanch methods wali class theek hai, agar sab ek hi team ke kaam ki hain.</li><li>Zaroorat se zyada baantna: 15 lines ki class ko paanch chhoti classes mein kaatne se paanch files mein koodna padta hai. Doosri wajah aane tak ruko.</li><li>Helper ka kaam wapas service mein ghus jaane dena (\"SMS text ke liye bas ek chhota <code>if</code>\").</li></ul>"
        },
        whenToUse: {
          en: "<p>Split when two parts change for different reasons or at different speeds, or when one part needs its own tests. Smells: a class named \"Manager\" or \"Helper\", a constructor that needs eight dependencies, a test that needs many fakes just to start.</p>",
          hi: "<p>तब बाँटो जब दो हिस्से अलग वजहों से या अलग रफ़्तार से बदलते हों, या एक हिस्से को अपने tests चाहिए। Smells: \"Manager\" या \"Helper\" नाम की class, आठ dependencies माँगने वाला constructor, शुरू होने के लिए ही कई fakes माँगने वाला test।</p>",
          hg: "<p>Tab baanto jab do hisse alag wajahon se ya alag raftaar se badalte hon, ya ek hisse ko apne tests chahiye. Smells: \"Manager\" ya \"Helper\" naam ki class, aath dependencies maangne wala constructor, shuru hone ke liye hi kai fakes maangne wala test.</p>"
        },
        exercise: {
          task: {
            en: "<p>The product team says: an issue must have at least 5 characters. Change <b>only</b> the validator so that <code>\"Slow\"</code> is rejected with <code>Issue is too short</code> and <code>\"Router not working\"</code> is accepted.</p>",
            hi: "<p>Product team कहती है: issue में कम से कम 5 characters होने चाहिए। <b>सिर्फ़</b> validator बदलो ताकि <code>\"Slow\"</code> पर <code>Issue is too short</code> आए और <code>\"Router not working\"</code> मंज़ूर हो।</p>",
            hg: "<p>Product team kehti hai: issue mein kam se kam 5 characters hone chahiye. <b>Sirf</b> validator badlo taaki <code>\"Slow\"</code> par <code>Issue is too short</code> aaye aur <code>\"Router not working\"</code> manzoor ho.</p>"
          },
          hint: {
            en: "<p>Add one more <code>if</code> in the validator. The store and the notifier stay as they are.</p>",
            hi: "<p>Validator में एक और <code>if</code> जोड़ो। Store और notifier वैसे ही रहेंगे।</p>",
            hg: "<p>Validator mein ek aur <code>if</code> jodo. Store aur notifier waise hi rahenge.</p>"
          },
          solution: {
            caption: {
              en: "Solution: only the validator changes",
              hi: "हल: सिर्फ़ validator बदलता है",
              hg: "Hal: sirf validator badalta hai"
            },
            src: "var validator = new TicketValidator();\nforeach (var issue in new[] { \"Slow\", \"Router not working\" })\n{\n    try\n    {\n        validator.Validate(issue);\n        Console.WriteLine($\"OK: {issue}\");\n    }\n    catch (ArgumentException ex)\n    {\n        Console.WriteLine($\"Rejected: {ex.Message}\");\n    }\n}\n\npublic class TicketValidator\n{\n    public void Validate(string issue)\n    {\n        if (string.IsNullOrWhiteSpace(issue))\n            throw new ArgumentException(\"Issue is required\");\n        if (issue.Trim().Length < 5)\n            throw new ArgumentException(\"Issue is too short\");\n    }\n}",
            check: "run",
            expected: "Rejected: Issue is too short\nOK: Router not working"
          }
        },
        quiz: {
          q: {
            en: "Which sign tells you a class has more than one responsibility?",
            hi: "कौन-सा संकेत बताता है कि class की एक से ज़्यादा responsibility है?",
            hg: "Kaun sa sanket batata hai ki class ki ek se zyada responsibility hai?"
          },
          options: [
            {
              en: "It has a private field",
              hi: "उसमें एक private field है",
              hg: "Usmein ek private field hai"
            },
            {
              en: "It has more than five methods",
              hi: "उसमें पाँच से ज़्यादा methods हैं",
              hg: "Usmein paanch se zyada methods hain"
            },
            {
              en: "Two different teams could ask to change it for unrelated reasons",
              hi: "दो अलग teams आपस में न जुड़ी वजहों से उसमें बदलाव माँग सकती हैं",
              hg: "Do alag teams aapas mein na judi wajahon se usmein badlaav maang sakti hain"
            },
            {
              en: "Its name is longer than twenty characters",
              hi: "उसका नाम बीस characters से लम्बा है",
              hg: "Uska naam bees characters se lamba hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>SRP is about <i>reasons to change</i>. Method count, fields or name length say nothing about who asks for changes.</p>",
            hi: "<p>SRP का मतलब है बदलने की <i>वजहें</i>। Methods की गिनती, fields या नाम की लम्बाई से पता नहीं चलता कि बदलाव कौन माँगेगा।</p>",
            hg: "<p>SRP ka matlab hai badalne ki <i>wajahen</i>. Methods ki ginti, fields ya naam ki lambai se pata nahi chalta ki badlaav kaun maangega.</p>"
          }
        },
        recap: {
          en: "<ul><li>One class, one reason to change (one team asking).</li><li>Split rules, storage and messages; let the service only coordinate.</li><li>Do not over-split small classes; wait for a second reason.</li></ul>",
          hi: "<ul><li>एक class, बदलने की एक वजह (एक ही team माँगने वाली)।</li><li>Rules, storage और messages अलग करो; service सिर्फ़ coordinate करे।</li><li>छोटी classes को ज़्यादा मत बाँटो; दूसरी वजह का इंतज़ार करो।</li></ul>",
          hg: "<ul><li>Ek class, badalne ki ek wajah (ek hi team maangne wali).</li><li>Rules, storage aur messages alag karo; service sirf coordinate kare.</li><li>Chhoti classes ko zyada mat baanto; doosri wajah ka intezaar karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "TicketService only coordinates three small classes",
            hi: "TicketService सिर्फ़ तीन छोटी classes को coordinate करता है",
            hg: "TicketService sirf teen chhoti classes ko coordinate karta hai"
          },
          src: "var service = new TicketService(new TicketValidator(), new TicketStore(), new TicketNotifier());\n\nservice.Open(new SupportTicket(501, \"Asha\", \"Router not working\", \"9876543210\"));\n\ntry\n{\n    service.Open(new SupportTicket(502, \"Ravi\", \"\", \"9123456780\"));\n}\ncatch (ArgumentException ex)\n{\n    Console.WriteLine($\"Rejected: {ex.Message}\");\n}\n\npublic record SupportTicket(int Id, string Customer, string Issue, string Phone);\n\npublic class TicketValidator\n{\n    public void Validate(SupportTicket ticket)\n    {\n        if (string.IsNullOrWhiteSpace(ticket.Issue))\n            throw new ArgumentException(\"Issue is required\");\n    }\n}\n\npublic class TicketStore\n{\n    private readonly List<SupportTicket> _tickets = new();\n\n    public void Save(SupportTicket ticket) => _tickets.Add(ticket);\n}\n\npublic class TicketNotifier\n{\n    public void TicketOpened(SupportTicket ticket) =>\n        Console.WriteLine($\"SMS to {ticket.Phone}: Hi {ticket.Customer}, ticket #{ticket.Id} is open\");\n}\n\npublic class TicketService\n{\n    private readonly TicketValidator _validator;\n    private readonly TicketStore _store;\n    private readonly TicketNotifier _notifier;\n\n    public TicketService(TicketValidator validator, TicketStore store, TicketNotifier notifier)\n    {\n        _validator = validator;\n        _store = store;\n        _notifier = notifier;\n    }\n\n    public void Open(SupportTicket ticket)\n    {\n        _validator.Validate(ticket);\n        _store.Save(ticket);\n        _notifier.TicketOpened(ticket);\n    }\n}",
          check: "run",
          expected: "SMS to 9876543210: Hi Asha, ticket #501 is open\nRejected: Issue is required"
        }
      ]
    },
    {
      id: "ocp",
      depth: "short",
      title: {
        en: "O — Open/Closed",
        hi: "O — Open/Closed: नया rule = नई class",
        hg: "O — Open/Closed: naya rule = nayi class"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 split <code>TicketService</code> by reason to change. Now one of those parts — the SLA (reply-time) rules — keeps growing. You will use <b>interfaces and polymorphism</b> from Day 1 so that a new rule is a new class, not another branch in tested code.",
          hi: "पाठ 1 में <code>TicketService</code> को बदलने की वजह के हिसाब से बाँटा। अब उनमें से एक हिस्सा — SLA (reply-time) rules — बढ़ता ही जाता है। Day 1 के <b>interface और polymorphism</b> से नया rule एक नई class बनेगा, tested code में एक और branch नहीं।",
          hg: "Lesson 1 mein <code>TicketService</code> ko badalne ki wajah ke hisaab se baanta. Ab unmein se ek hissa — SLA (reply-time) rules — badhta hi jaata hai. Day 1 ke <b>interface aur polymorphism</b> se naya rule ek nayi class banega, tested code mein ek aur branch nahi."
        },
        what: {
          en: "<p><b>Open/Closed Principle (OCP):</b> code should be <b>open for extension</b> but <b>closed for modification</b>. To add a new case, you add a new class. You do not edit the working, tested code.</p>",
          hi: "<p><b>Open/Closed Principle (OCP):</b> code <b>extension के लिए खुला</b> और <b>modification के लिए बंद</b> होना चाहिए। नया case जोड़ना हो तो नई class जोड़ो। चलते-चलते, tested code को मत छेड़ो।</p>",
          hg: "<p><b>Open/Closed Principle (OCP):</b> code <b>extension ke liye khula</b> aur <b>modification ke liye band</b> hona chahiye. Naya case jodna ho to nayi class jodo. Chalte-chalte, tested code ko mat chhedo.</p>"
        },
        why: {
          en: "<p>SLA rules change often: urgent tickets, premium customers, festival offers. If the answer lives in a <code>switch</code>, every new rule edits the same method and you must re-test all the old cases. The same <code>switch</code> also tends to get copied into reports and emails.</p>",
          hi: "<p>SLA rules अक्सर बदलते हैं: urgent tickets, premium customers, festival offers। जवाब एक <code>switch</code> में हो तो हर नया rule वही method बदलता है, और पुराने सारे cases दोबारा test करने पड़ते हैं। वही <code>switch</code> reports और emails में copy भी होता रहता है।</p>",
          hg: "<p>SLA rules aksar badalte hain: urgent tickets, premium customers, festival offers. Jawaab ek <code>switch</code> mein ho to har naya rule wahi method badalta hai, aur purane saare cases dobara test karne padte hain. Wahi <code>switch</code> reports aur emails mein copy bhi hota rehta hai.</p>"
        },
        analogy: {
          en: "<p>A mobile company launches a new recharge plan by adding a new plan card to its catalogue. It does not rewrite the billing software for every plan. The billing engine is <i>closed</i>; the catalogue is <i>open</i>.</p>",
          hi: "<p>Mobile company नया recharge plan लाती है तो catalogue में नया plan card जोड़ती है। हर plan के लिए billing software दोबारा नहीं लिखती। Billing engine <i>बंद</i> है; catalogue <i>खुला</i> है।</p>",
          hg: "<p>Mobile company naya recharge plan laati hai to catalogue mein naya plan card jodti hai. Har plan ke liye billing software dobara nahi likhti. Billing engine <i>band</i> hai; catalogue <i>khula</i> hai.</p>"
        },
        focus: {
          caption: {
            en: "The problem: every new rule edits this switch",
            hi: "समस्या: हर नया rule इसी switch को बदलता है",
            hg: "Samasya: har naya rule isi switch ko badalta hai"
          },
          src: "public class SlaCalculator\n{\n    public int HoursFor(string priority, bool isPremium)\n    {\n        switch (priority)\n        {\n            case \"Urgent\": return 2;\n            case \"High\": return 8;\n            default: return isPremium ? 4 : 24;   // another rule? edit this method again\n        }\n    }\n}",
          check: "compile"
        },
        lines: [
          {
            code: "public interface ISlaRule",
            note: {
              en: "The contract: every rule says whether it applies to a ticket and how many hours it promises.",
              hi: "Contract: हर rule बताता है कि वह ticket पर लागू होता है या नहीं और कितने घंटे का वादा करता है।",
              hg: "Contract: har rule batata hai ki woh ticket par laagu hota hai ya nahi aur kitne ghante ka vaada karta hai."
            }
          },
          {
            code: "public class UrgentRule : ISlaRule",
            note: {
              en: "One class per rule. It holds one decision and nothing else, so it is easy to test alone.",
              hi: "हर rule की एक class। उसमें एक ही फ़ैसला है, बस, इसलिए अकेले test करना आसान है।",
              hg: "Har rule ki ek class. Usmein ek hi faisla hai, bas, isliye akele test karna aasaan hai."
            }
          },
          {
            code: "public int HoursFor(SupportTicket ticket) => _rules.First(r => r.AppliesTo(ticket)).Hours;",
            note: {
              en: "The calculator never mentions Urgent or Premium. It takes the first rule that applies. This line stays closed forever.",
              hi: "Calculator में Urgent या Premium का नाम ही नहीं है। वह पहला लागू होने वाला rule ले लेता है। यह line हमेशा बंद रहती है।",
              hg: "Calculator mein Urgent ya Premium ka naam hi nahi hai. Woh pehla laagu hone wala rule le leta hai. Ye line hamesha band rehti hai."
            }
          },
          {
            code: "new PremiumRule(),   // the new rule: one new class + one new line here",
            note: {
              en: "This is the whole cost of the new rule: one new class and one line in the list. No existing class changed.",
              hi: "नए rule की पूरी क़ीमत यही है: एक नई class और list में एक line। कोई पुरानी class नहीं बदली।",
              hg: "Naye rule ki poori keemat yahi hai: ek nayi class aur list mein ek line. Koi purani class nahi badli."
            }
          },
          {
            code: "new DefaultRule()",
            note: {
              en: "The last rule always applies, so <code>First</code> always finds one. Order matters: Urgent comes before Premium.",
              hi: "आख़िरी rule हमेशा लागू होता है, इसलिए <code>First</code> को हमेशा कोई मिल जाता है। क्रम मायने रखता है: Urgent, Premium से पहले आता है।",
              hg: "Aakhri rule hamesha laagu hota hai, isliye <code>First</code> ko hamesha koi mil jaata hai. Kram mayne rakhta hai: Urgent, Premium se pehle aata hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Forgetting that \"first match wins\": put a general rule before a specific one and the specific one never runs.</li><li>Making a class hierarchy for a tiny, stable <code>switch</code> (days of the week). A 3-case switch that never grows is clearer than three classes.</li><li>Trying to be closed against every change. Pick the thing that really varies, after you have seen it vary once or twice.</li></ul>",
          hi: "<ul><li>यह भूल जाना कि \"पहला match जीतता है\": general rule को specific से पहले रखा तो specific कभी चलेगा ही नहीं।</li><li>छोटे, स्थिर <code>switch</code> (हफ़्ते के दिन) के लिए class hierarchy बना देना। जो कभी नहीं बढ़ेगा, वह 3 cases का switch तीन classes से ज़्यादा साफ़ है।</li><li>हर बदलाव के ख़िलाफ़ \"बंद\" होने की कोशिश। वही चीज़ चुनो जो सच में बदलती है, उसे एक-दो बार बदलते देखने के बाद।</li></ul>",
          hg: "<ul><li>Ye bhool jaana ki \"pehla match jeetta hai\": general rule ko specific se pehle rakha to specific kabhi chalega hi nahi.</li><li>Chhote, sthir <code>switch</code> (hafte ke din) ke liye class hierarchy bana dena. Jo kabhi nahi badhega, woh 3 cases ka switch teen classes se zyada saaf hai.</li><li>Har badlaav ke khilaaf \"band\" hone ki koshish. Wahi cheez chuno jo sach mein badalti hai, use ek-do baar badalte dekhne ke baad.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use it when the same <code>switch</code> or <code>if / else if</code> chain on a \"type\" keeps growing or is repeated in several places. Do not use it for a small closed list that will not grow.</p>",
          hi: "<p>तब इस्तेमाल करो जब किसी \"type\" पर वही <code>switch</code> या <code>if / else if</code> की कड़ी बढ़ती जा रही हो या कई जगह दोहराई जा रही हो। छोटी, बंद list जो बढ़ेगी नहीं, उसके लिए मत करो।</p>",
          hg: "<p>Tab use karo jab kisi \"type\" par wahi <code>switch</code> ya <code>if / else if</code> ki kadi badhti ja rahi ho ya kai jagah dohraayi ja rahi ho. Chhoti, band list jo badhegi nahi, uske liye mat karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <code>LowRule</code> that gives <b>Low</b> priority tickets 72 hours. Do not change <code>SlaCalculator</code>. Print the hours for a Low ticket and a Normal ticket.</p>",
            hi: "<p>एक <code>LowRule</code> जोड़ो जो <b>Low</b> priority tickets को 72 घंटे दे। <code>SlaCalculator</code> मत बदलो। एक Low और एक Normal ticket के घंटे print करो।</p>",
            hg: "<p>Ek <code>LowRule</code> jodo jo <b>Low</b> priority tickets ko 72 ghante de. <code>SlaCalculator</code> mat badlo. Ek Low aur ek Normal ticket ke ghante print karo.</p>"
          },
          hint: {
            en: "<p>Copy <code>UrgentRule</code>, change the priority text and the hours, then add one line to the list before <code>DefaultRule</code>.</p>",
            hi: "<p><code>UrgentRule</code> की copy बनाओ, priority का text और घंटे बदलो, फिर <code>DefaultRule</code> से पहले list में एक line जोड़ो।</p>",
            hg: "<p><code>UrgentRule</code> ki copy banao, priority ka text aur ghante badlo, phir <code>DefaultRule</code> se pehle list mein ek line jodo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one new class, one new line",
              hi: "हल: एक नई class, एक नई line",
              hg: "Hal: ek nayi class, ek nayi line"
            },
            src: "var calculator = new SlaCalculator(new List<ISlaRule> { new LowRule(), new DefaultRule() });\n\nConsole.WriteLine($\"Low: {calculator.HoursFor(new SupportTicket(505, \"Neha\", \"Low\"))}h\");\nConsole.WriteLine($\"Normal: {calculator.HoursFor(new SupportTicket(506, \"Kiran\", \"Normal\"))}h\");\n\npublic record SupportTicket(int Id, string Customer, string Priority);\n\npublic interface ISlaRule\n{\n    bool AppliesTo(SupportTicket ticket);\n    int Hours { get; }\n}\n\npublic class LowRule : ISlaRule\n{\n    public bool AppliesTo(SupportTicket ticket) => ticket.Priority == \"Low\";\n    public int Hours => 72;\n}\n\npublic class DefaultRule : ISlaRule\n{\n    public bool AppliesTo(SupportTicket ticket) => true;\n    public int Hours => 24;\n}\n\npublic class SlaCalculator\n{\n    private readonly IReadOnlyList<ISlaRule> _rules;\n\n    public SlaCalculator(IReadOnlyList<ISlaRule> rules) => _rules = rules;\n\n    public int HoursFor(SupportTicket ticket) => _rules.First(r => r.AppliesTo(ticket)).Hours;\n}",
            check: "run",
            expected: "Low: 72h\nNormal: 24h"
          }
        },
        quiz: {
          q: {
            en: "A new SLA rule arrives. What does OCP ask you to do?",
            hi: "नया SLA rule आया। OCP आपसे क्या करने को कहता है?",
            hg: "Naya SLA rule aaya. OCP aapse kya karne ko kehta hai?"
          },
          options: [
            {
              en: "Add a new class that implements the rule contract",
              hi: "Rule के contract को implement करने वाली नई class जोड़ो",
              hg: "Rule ke contract ko implement karne wali nayi class jodo"
            },
            {
              en: "Add another case to the existing switch",
              hi: "मौजूदा switch में एक और case जोड़ो",
              hg: "Maujooda switch mein ek aur case jodo"
            },
            {
              en: "Copy the calculator and edit the copy",
              hi: "Calculator की copy बनाकर copy को बदलो",
              hg: "Calculator ki copy banakar copy ko badlo"
            },
            {
              en: "Make every field in the calculator public",
              hi: "Calculator के हर field को public कर दो",
              hg: "Calculator ke har field ko public kar do"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>OCP means new behaviour arrives as new code. The calculator, which is already tested, is not edited.</p>",
            hi: "<p>OCP का मतलब है नया व्यवहार नए code के रूप में आए। Calculator, जो पहले से tested है, बदला नहीं जाता।</p>",
            hg: "<p>OCP ka matlab hai naya vyavhaar naye code ke roop mein aaye. Calculator, jo pehle se tested hai, badla nahi jaata.</p>"
          }
        },
        recap: {
          en: "<ul><li>Open for extension, closed for modification.</li><li>One interface, one class per rule; the calculator does not know the rules.</li><li>A small, stable switch is fine; use this where a switch keeps growing.</li></ul>",
          hi: "<ul><li>Extension के लिए खुला, modification के लिए बंद।</li><li>एक interface, हर rule की एक class; calculator को rules पता ही नहीं।</li><li>छोटा, स्थिर switch ठीक है; जहाँ switch बढ़ता जाए वहाँ यह तरीक़ा अपनाओ।</li></ul>",
          hg: "<ul><li>Extension ke liye khula, modification ke liye band.</li><li>Ek interface, har rule ki ek class; calculator ko rules pata hi nahi.</li><li>Chhota, sthir switch theek hai; jahan switch badhta jaaye wahan ye tareeka apnao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "SLA rules as classes: adding PremiumRule changed nothing else",
            hi: "SLA rules classes के रूप में: PremiumRule जोड़ने से और कुछ नहीं बदला",
            hg: "SLA rules classes ke roop mein: PremiumRule jodne se aur kuch nahi badla"
          },
          src: "var calculator = new SlaCalculator(new List<ISlaRule>\n{\n    new UrgentRule(),\n    new HighRule(),\n    new PremiumRule(),   // the new rule: one new class + one new line here\n    new DefaultRule()\n});\n\nvar tickets = new[]\n{\n    new SupportTicket(501, \"Asha\", \"Normal\", false),\n    new SupportTicket(502, \"Ravi\", \"High\", false),\n    new SupportTicket(503, \"Meena\", \"Urgent\", false),\n    new SupportTicket(504, \"Neha\", \"Normal\", true)\n};\n\nforeach (var t in tickets)\n    Console.WriteLine($\"#{t.Id} {t.Customer} ({t.Priority}): {calculator.HoursFor(t)}h\");\n\npublic record SupportTicket(int Id, string Customer, string Priority, bool IsPremium);\n\npublic interface ISlaRule\n{\n    bool AppliesTo(SupportTicket ticket);\n    int Hours { get; }\n}\n\npublic class UrgentRule : ISlaRule\n{\n    public bool AppliesTo(SupportTicket ticket) => ticket.Priority == \"Urgent\";\n    public int Hours => 2;\n}\n\npublic class HighRule : ISlaRule\n{\n    public bool AppliesTo(SupportTicket ticket) => ticket.Priority == \"High\";\n    public int Hours => 8;\n}\n\npublic class PremiumRule : ISlaRule\n{\n    public bool AppliesTo(SupportTicket ticket) => ticket.IsPremium;\n    public int Hours => 4;\n}\n\npublic class DefaultRule : ISlaRule\n{\n    public bool AppliesTo(SupportTicket ticket) => true;\n    public int Hours => 24;\n}\n\npublic class SlaCalculator\n{\n    private readonly IReadOnlyList<ISlaRule> _rules;\n\n    public SlaCalculator(IReadOnlyList<ISlaRule> rules) => _rules = rules;\n\n    public int HoursFor(SupportTicket ticket) => _rules.First(r => r.AppliesTo(ticket)).Hours;\n}",
          check: "run",
          expected: "#501 Asha (Normal): 24h\n#502 Ravi (High): 8h\n#503 Meena (Urgent): 2h\n#504 Neha (Normal): 4h"
        }
      ]
    },
    {
      id: "lsp",
      depth: "short",
      title: {
        en: "L — Liskov Substitution",
        hi: "L — Liskov Substitution: child, parent की जगह चले",
        hg: "L — Liskov Substitution: child, parent ki jagah chale"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 2 used an interface so many classes could stand in for one contract. That only works if every class <i>keeps the contract's promise</i>. Day 1's inheritance and <code>override</code> make it easy to break that promise by accident. This lesson shows how.",
          hi: "पाठ 2 में interface से कई classes एक contract की जगह खड़ी हो सकीं। यह तभी चलता है जब हर class <i>contract का वादा निभाए</i>। Day 1 का inheritance और <code>override</code> इस वादे को ग़लती से तोड़ना आसान बना देते हैं। यह पाठ दिखाता है कैसे।",
          hg: "Lesson 2 mein interface se kai classes ek contract ki jagah khadi ho sakin. Ye tabhi chalta hai jab har class <i>contract ka vaada nibhaaye</i>. Day 1 ka inheritance aur <code>override</code> is vaade ko galti se todna aasaan bana dete hain. Ye lesson dikhata hai kaise."
        },
        what: {
          en: "<p><b>Liskov Substitution Principle (LSP):</b> wherever a base type is expected, any child type must work <b>without the caller knowing or checking</b> which one it got.</p><p>\"Work\" means keeping the parent's <b>contract</b>: a child must not ask callers for more (no stronger <i>preconditions</i>), must not guarantee less (no weaker <i>postconditions</i>), and must keep what is always true (<i>invariants</i>). In short: it may do <i>more</i>, never <i>less</i>.</p>",
          hi: "<p><b>Liskov Substitution Principle (LSP):</b> जहाँ base type चाहिए, वहाँ कोई भी child type <b>बिना caller को पता चले या जाँचे</b> काम करे।</p><p>\"काम करे\" का मतलब है parent का <b>contract</b> निभाना: child callers से ज़्यादा नहीं माँगे (<i>preconditions</i> कड़ी न करे), कम की गारंटी न दे (<i>postconditions</i> ढीली न करे), और जो हमेशा सच है उसे सच रखे (<i>invariants</i>)। छोटे में: <i>ज़्यादा</i> कर सकता है, <i>कम</i> कभी नहीं।</p>",
          hg: "<p><b>Liskov Substitution Principle (LSP):</b> jahan base type chahiye, wahan koi bhi child type <b>bina caller ko pata chale ya jaanche</b> kaam kare.</p><p>\"Kaam kare\" ka matlab hai parent ka <b>contract</b> nibhaana: child callers se zyada nahi maange (<i>preconditions</i> kadi na kare), kam ki guarantee na de (<i>postconditions</i> dheeli na kare), aur jo hamesha sach hai use sach rakhe (<i>invariants</i>). Chhote mein: <i>zyada</i> kar sakta hai, <i>kam</i> kabhi nahi.</p>"
        },
        why: {
          en: "<p>Code written for the base type trusts its promises. If a child breaks one — for example <code>Save</code> throws — the code compiles fine and then crashes in production, far from the cause.</p>",
          hi: "<p>Base type के लिए लिखा code उसके वादों पर भरोसा करता है। कोई child एक वादा तोड़ दे — जैसे <code>Save</code> exception फेंके — तो code compile ठीक होता है और production में, असली वजह से दूर, crash होता है।</p>",
          hg: "<p>Base type ke liye likha code uske vaadon par bharosa karta hai. Koi child ek vaada tod de — jaise <code>Save</code> exception phenke — to code compile theek hota hai aur production mein, asli wajah se door, crash hota hai.</p>"
        },
        analogy: {
          en: "<p>In cricket a substitute fielder can field for your team, but cannot bat or bowl. If the captain sends him to open the batting, the rule breaks. He looks like a team member, but he cannot keep every promise of one.</p>",
          hi: "<p>Cricket में substitute fielder आपकी team के लिए fielding कर सकता है, पर batting या bowling नहीं कर सकता। कप्तान उसे opening करने भेज दे तो नियम टूट जाता है। वह team के सदस्य जैसा दिखता है, पर सदस्य के सारे वादे नहीं निभा सकता।</p>",
          hg: "<p>Cricket mein substitute fielder aapki team ke liye fielding kar sakta hai, par batting ya bowling nahi kar sakta. Captain use opening karne bhej de to niyam toot jaata hai. Woh team ke sadasya jaisa dikhta hai, par sadasya ke saare vaade nahi nibha sakta.</p>"
        },
        focus: {
          caption: {
            en: "The problem: a read-only store that is a TicketStore but cannot Save",
            hi: "समस्या: read-only store जो TicketStore है पर Save नहीं कर सकता",
            hg: "Samasya: read-only store jo TicketStore hai par Save nahi kar sakta"
          },
          src: "public record SupportTicket(int Id, string Customer, string Status);\n\npublic class TicketStore\n{\n    public virtual void Save(SupportTicket ticket) { /* write to the database */ }\n}\n\npublic class ReadOnlyTicketStore : TicketStore\n{\n    public override void Save(SupportTicket ticket) =>\n        throw new NotSupportedException(\"Archive is read-only\");   // breaks the promise \"Save saves\"\n}\n\npublic class Closer\n{\n    // Written for TicketStore. It compiles with an archive too, then crashes at run time.\n    public void Close(TicketStore store, SupportTicket ticket) =>\n        store.Save(ticket with { Status = \"Closed\" });\n}",
          check: "compile"
        },
        lines: [
          {
            code: "PrintStatus(archive, 101);   // an ArchiveReader works anywhere a TicketReader is expected",
            note: {
              en: "Substitution works: the method asks for a <code>TicketReader</code>, and the archive does everything a reader promises.",
              hi: "Substitution चलता है: method को <code>TicketReader</code> चाहिए, और archive वह सब करता है जिसका reader वादा करता है।",
              hg: "Substitution chalta hai: method ko <code>TicketReader</code> chahiye, aur archive woh sab karta hai jiska reader vaada karta hai."
            }
          },
          {
            code: "static void Close(TicketStore store, int id)",
            note: {
              en: "Closing needs to <b>save</b>, so this method asks for a <code>TicketStore</code>. The parameter type tells the truth about what is needed.",
              hi: "Close करने के लिए <b>save</b> चाहिए, इसलिए यह method <code>TicketStore</code> माँगता है। Parameter का type सच बताता है कि क्या चाहिए।",
              hg: "Close karne ke liye <b>save</b> chahiye, isliye ye method <code>TicketStore</code> maangta hai. Parameter ka type sach batata hai ki kya chahiye."
            }
          },
          {
            code: "public class TicketReader",
            note: {
              en: "The base promises only reading: <code>Find</code>. It says nothing about saving, so no child can break a saving promise.",
              hi: "Base सिर्फ़ पढ़ने का वादा करता है: <code>Find</code>। Saving के बारे में कुछ नहीं कहता, इसलिए कोई child saving का वादा तोड़ ही नहीं सकता।",
              hg: "Base sirf padhne ka vaada karta hai: <code>Find</code>. Saving ke baare mein kuch nahi kehta, isliye koi child saving ka vaada tod hi nahi sakta."
            }
          },
          {
            code: "public class TicketStore : TicketReader",
            note: {
              en: "The store adds <code>Save</code> on top. Only types that can really save get this promise.",
              hi: "Store ऊपर से <code>Save</code> जोड़ता है। यह वादा सिर्फ़ उन types को मिलता है जो सच में save कर सकते हैं।",
              hg: "Store upar se <code>Save</code> jodta hai. Ye vaada sirf un types ko milta hai jo sach mein save kar sakte hain."
            }
          },
          {
            code: "public class ArchiveReader : TicketReader",
            note: {
              en: "The archive is honest: it is only a reader. It does not pretend to be a store, so nobody can call <code>Save</code> on it.",
              hi: "Archive ईमानदार है: वह सिर्फ़ reader है। वह store होने का दिखावा नहीं करता, इसलिए कोई उस पर <code>Save</code> बुला ही नहीं सकता।",
              hg: "Archive imaandaar hai: woh sirf reader hai. Woh store hone ka dikhaava nahi karta, isliye koi us par <code>Save</code> bula hi nahi sakta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Overriding a method to throw <code>NotSupportedException</code> or <code>NotImplementedException</code>. That is the clearest LSP smell.</li><li>Overriding a method to silently do nothing. The caller thinks it worked.</li><li>Checking <code>if (store is ReadOnlyTicketStore)</code> in client code. If callers must know the child, substitution has already failed.</li></ul>",
          hi: "<ul><li>Method को override करके <code>NotSupportedException</code> या <code>NotImplementedException</code> फेंकना। यह LSP की सबसे साफ़ बदबू है।</li><li>Method को override करके चुपचाप कुछ न करना। Caller समझता है काम हो गया।</li><li>Client code में <code>if (store is ReadOnlyTicketStore)</code> जाँचना। Callers को child जानना पड़े तो substitution पहले ही फ़ेल है।</li></ul>",
          hg: "<ul><li>Method ko override karke <code>NotSupportedException</code> ya <code>NotImplementedException</code> phenkna. Ye LSP ki sabse saaf badboo hai.</li><li>Method ko override karke chupchaap kuch na karna. Caller samajhta hai kaam ho gaya.</li><li>Client code mein <code>if (store is ReadOnlyTicketStore)</code> jaanchna. Callers ko child jaanna pade to substitution pehle hi fail hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Ask this every time you write <code>: BaseClass</code> or implement an interface: \"would every caller of the parent still be correct with my child?\" If not, do not inherit. Make a smaller base, as here, or use composition.</p>",
          hi: "<p>जब भी <code>: BaseClass</code> लिखो या interface implement करो, यह पूछो: \"क्या parent के हर caller के लिए मेरा child भी सही चलेगा?\" नहीं, तो inherit मत करो। यहाँ की तरह छोटा base बनाओ, या composition लो।</p>",
          hg: "<p>Jab bhi <code>: BaseClass</code> likho ya interface implement karo, ye poochho: \"kya parent ke har caller ke liye mera child bhi sahi chalega?\" Nahi, to inherit mat karo. Yahan ki tarah chhota base banao, ya composition lo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>AuditedStore : TicketStore</code>. Its <code>Save</code> prints <code>Audit: saved #501</code> and <b>still saves</b>. Use it through a <code>TicketStore</code> variable and print the status of ticket 501.</p>",
            hi: "<p><code>AuditedStore : TicketStore</code> लिखो। उसका <code>Save</code> <code>Audit: saved #501</code> print करे और <b>फिर भी save करे</b>। उसे <code>TicketStore</code> variable से इस्तेमाल करो और ticket 501 का status print करो।</p>",
            hg: "<p><code>AuditedStore : TicketStore</code> likho. Uska <code>Save</code> <code>Audit: saved #501</code> print kare aur <b>phir bhi save kare</b>. Use <code>TicketStore</code> variable se use karo aur ticket 501 ka status print karo.</p>"
          },
          hint: {
            en: "<p>Override <code>Save</code>, print, then call <code>base.Save(ticket)</code>. A child that does more but keeps the promise is a good substitute.</p>",
            hi: "<p><code>Save</code> को override करो, print करो, फिर <code>base.Save(ticket)</code> बुलाओ। जो child ज़्यादा करे पर वादा निभाए, वह अच्छा substitute है।</p>",
            hg: "<p><code>Save</code> ko override karo, print karo, phir <code>base.Save(ticket)</code> bulao. Jo child zyada kare par vaada nibhaaye, woh achha substitute hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: do more, keep the promise",
              hi: "हल: ज़्यादा करो, वादा निभाओ",
              hg: "Hal: zyada karo, vaada nibhao"
            },
            src: "TicketStore store = new AuditedStore();\nstore.Save(new SupportTicket(501, \"Asha\", \"Open\"));\nConsole.WriteLine($\"#501: {store.Find(501)?.Status}\");\n\npublic record SupportTicket(int Id, string Customer, string Status);\n\npublic class TicketReader\n{\n    protected readonly Dictionary<int, SupportTicket> Tickets = new();\n\n    public SupportTicket? Find(int id) => Tickets.GetValueOrDefault(id);\n}\n\npublic class TicketStore : TicketReader\n{\n    public virtual void Save(SupportTicket ticket) => Tickets[ticket.Id] = ticket;\n}\n\npublic class AuditedStore : TicketStore\n{\n    public override void Save(SupportTicket ticket)\n    {\n        Console.WriteLine($\"Audit: saved #{ticket.Id}\");\n        base.Save(ticket);\n    }\n}",
            check: "run",
            expected: "Audit: saved #501\n#501: Open"
          }
        },
        quiz: {
          q: {
            en: "Which child class breaks the Liskov Substitution Principle?",
            hi: "कौन-सी child class Liskov Substitution Principle तोड़ती है?",
            hg: "Kaun si child class Liskov Substitution Principle todti hai?"
          },
          options: [
            {
              en: "A child with extra methods that the parent does not have",
              hi: "ऐसा child जिसमें parent से ज़्यादा methods हों",
              hg: "Aisa child jisme parent se zyada methods hon"
            },
            {
              en: "A <code>Save</code> override that saves and also writes an audit line",
              hi: "<code>Save</code> का override जो save भी करे और audit line भी लिखे",
              hg: "<code>Save</code> ka override jo save bhi kare aur audit line bhi likhe"
            },
            {
              en: "A <code>Save</code> override that calls <code>base.Save</code> after a log message",
              hi: "<code>Save</code> का override जो log message के बाद <code>base.Save</code> बुलाए",
              hg: "<code>Save</code> ka override jo log message ke baad <code>base.Save</code> bulaye"
            },
            {
              en: "A <code>Save</code> override that throws <code>NotSupportedException</code>",
              hi: "<code>Save</code> का override जो <code>NotSupportedException</code> फेंके",
              hg: "<code>Save</code> ka override jo <code>NotSupportedException</code> phenke"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Doing more is allowed. Doing less — refusing to save when the parent's postcondition is \"the ticket is saved\" — breaks the callers that trust the parent.</p>",
            hi: "<p>ज़्यादा करना ठीक है। कम करना — parent save करने का वादा करे और child मना कर दे — parent पर भरोसा करने वाले callers को तोड़ देता है।</p>",
            hg: "<p>Zyada karna theek hai. Kam karna — parent save karne ka vaada kare aur child mana kar de — parent par bharosa karne wale callers ko tod deta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>A child must work wherever the parent is expected, without the caller checking its type.</li><li>It may do more, never less. An override that throws \"not supported\" is the red flag.</li><li>Fix it with a smaller base (reader, then store) instead of forcing the is-a.</li></ul>",
          hi: "<ul><li>Child वहाँ चले जहाँ parent चाहिए, बिना caller के type जाँचे।</li><li>ज़्यादा कर सकता है, कम कभी नहीं। \"not supported\" फेंकने वाला override ख़तरे की घंटी है।</li><li>इसे छोटा base (reader, फिर store) बनाकर ठीक करो, is-a ज़बरदस्ती मत थोपो।</li></ul>",
          hg: "<ul><li>Child wahan chale jahan parent chahiye, bina caller ke type jaanche.</li><li>Zyada kar sakta hai, kam kabhi nahi. \"not supported\" phenkne wala override khatre ki ghanti hai.</li><li>Ise chhota base (reader, phir store) banakar theek karo, is-a zabardasti mat thopo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A read-only archive that is honest about what it can do",
            hi: "Read-only archive जो ईमानदारी से बताता है कि वह क्या कर सकता है",
            hg: "Read-only archive jo imaandaari se batata hai ki woh kya kar sakta hai"
          },
          src: "var live = new TicketStore();\nlive.Save(new SupportTicket(501, \"Asha\", \"Open\"));\nvar archive = new ArchiveReader(new SupportTicket(101, \"Ravi\", \"Closed\"));\n\nPrintStatus(live, 501);\nPrintStatus(archive, 101);   // an ArchiveReader works anywhere a TicketReader is expected\n\nClose(live, 501);            // Close needs a TicketStore, so the compiler refuses an archive\nPrintStatus(live, 501);\n\nstatic void PrintStatus(TicketReader reader, int id) =>\n    Console.WriteLine($\"#{id}: {reader.Find(id)?.Status ?? \"not found\"}\");\n\nstatic void Close(TicketStore store, int id)\n{\n    var ticket = store.Find(id)!;\n    store.Save(ticket with { Status = \"Closed\" });\n}\n\npublic record SupportTicket(int Id, string Customer, string Status);\n\npublic class TicketReader\n{\n    protected readonly Dictionary<int, SupportTicket> Tickets = new();\n\n    public SupportTicket? Find(int id) => Tickets.GetValueOrDefault(id);\n}\n\npublic class TicketStore : TicketReader\n{\n    public virtual void Save(SupportTicket ticket) => Tickets[ticket.Id] = ticket;\n}\n\npublic class ArchiveReader : TicketReader\n{\n    public ArchiveReader(params SupportTicket[] old)\n    {\n        foreach (var ticket in old) Tickets[ticket.Id] = ticket;\n    }\n}",
          check: "run",
          expected: "#501: Open\n#101: Closed\n#501: Closed"
        }
      ]
    },
    {
      id: "isp",
      depth: "short",
      title: {
        en: "I — Interface Segregation",
        hi: "I — Interface Segregation: छोटे interfaces",
        hg: "I — Interface Segregation: chhote interfaces"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 split reading from saving with base classes. Interfaces let you do the same without any inheritance, and one class can wear many of them. Here the fat <code>ITicketRepository</code> is cut into small pieces, so each caller asks only for what it uses.",
          hi: "पाठ 3 में base classes से पढ़ना और save करना अलग किया। Interfaces से वही काम बिना inheritance के होता है, और एक class कई interfaces पहन सकती है। यहाँ मोटा <code>ITicketRepository</code> छोटे टुकड़ों में कटता है, ताकि हर caller उतना ही माँगे जितना वह इस्तेमाल करता है।",
          hg: "Lesson 3 mein base classes se padhna aur save karna alag kiya. Interfaces se wahi kaam bina inheritance ke hota hai, aur ek class kai interfaces pehen sakti hai. Yahan mota <code>ITicketRepository</code> chhote tukdon mein katta hai, taaki har caller utna hi maange jitna woh use karta hai."
        },
        what: {
          en: "<p><b>Interface Segregation Principle (ISP):</b> no client should be forced to depend on methods it does not use. Prefer several small interfaces, each shaped by what a <i>caller</i> needs, over one big interface.</p>",
          hi: "<p><b>Interface Segregation Principle (ISP):</b> किसी client को ऐसे methods पर निर्भर होने के लिए मजबूर न करो जिन्हें वह इस्तेमाल ही नहीं करता। एक बड़े interface की जगह कई छोटे interfaces रखो, हर एक <i>caller</i> की ज़रूरत के हिसाब से।</p>",
          hg: "<p><b>Interface Segregation Principle (ISP):</b> kisi client ko aise methods par nirbhar hone ke liye majboor na karo jinhe woh use hi nahi karta. Ek bade interface ki jagah kai chhote interfaces rakho, har ek <i>caller</i> ki zaroorat ke hisaab se.</p>"
        },
        why: {
          en: "<p>The daily report only reads tickets, yet a fat interface also offers Add, Delete and ExportCsv. A fake for the report test must implement all of them, usually with <code>NotImplementedException</code>. Callers also see powers they should not have.</p>",
          hi: "<p>Daily report सिर्फ़ tickets पढ़ता है, फिर भी मोटा interface उसे Add, Delete और ExportCsv भी दिखाता है। Report के test का fake इन सबको implement करे, आम तौर पर <code>NotImplementedException</code> से। Callers को वे ताक़तें भी दिखती हैं जो उन्हें नहीं मिलनी चाहिए।</p>",
          hg: "<p>Daily report sirf tickets padhta hai, phir bhi mota interface use Add, Delete aur ExportCsv bhi dikhata hai. Report ke test ka fake in sabko implement kare, aam taur par <code>NotImplementedException</code> se. Callers ko woh taaqaten bhi dikhti hain jo unhe nahi milni chahiye.</p>"
        },
        analogy: {
          en: "<p>A restaurant that sells only one giant combo thali: you pay for dal, paneer, sweet and papad even if you wanted just the dal. A menu with separate items lets each guest order exactly what they will eat.</p>",
          hi: "<p>ऐसा restaurant जो सिर्फ़ एक बड़ी combo thali बेचता है: आपको सिर्फ़ दाल चाहिए, फिर भी दाल, पनीर, मिठाई और पापड़ सबके पैसे देने पड़ते हैं। अलग-अलग items वाला menu हर मेहमान को वही मँगवाने देता है जो वह खाएगा।</p>",
          hg: "<p>Aisa restaurant jo sirf ek badi combo thali bechta hai: aapko sirf daal chahiye, phir bhi daal, paneer, mithai aur papad sabke paise dene padte hain. Alag-alag items wala menu har mehmaan ko wahi mangwane deta hai jo woh khaayega.</p>"
        },
        focus: {
          caption: {
            en: "The problem: a fat interface, and a fake that must fill it",
            hi: "समस्या: मोटा interface, और उसे भरने वाला fake",
            hg: "Samasya: mota interface, aur use bharne wala fake"
          },
          src: "public record SupportTicket(int Id, string Customer, string Issue);\n\npublic interface ITicketRepository\n{\n    SupportTicket? Find(int id);\n    IReadOnlyList<SupportTicket> GetAll();\n    void Add(SupportTicket ticket);\n    void Update(SupportTicket ticket);\n    void Delete(int id);\n    string ExportCsv();\n}\n\n// A report test only needs GetAll, but the fake must still implement everything:\npublic class FakeRepository : ITicketRepository\n{\n    public SupportTicket? Find(int id) => null;\n    public IReadOnlyList<SupportTicket> GetAll() => new[] { new SupportTicket(900, \"Test\", \"x\") };\n    public void Add(SupportTicket ticket) => throw new NotImplementedException();\n    public void Update(SupportTicket ticket) => throw new NotImplementedException();\n    public void Delete(int id) => throw new NotImplementedException();\n    public string ExportCsv() => throw new NotImplementedException();\n}",
          check: "compile"
        },
        lines: [
          {
            code: "public interface ITicketReader { IReadOnlyList<SupportTicket> GetAll(); }",
            note: {
              en: "A small <b>role</b> interface: it describes what a reader needs, not what a database can do.",
              hi: "छोटा <b>role</b> interface: यह बताता है कि reader को क्या चाहिए, database क्या-क्या कर सकता है यह नहीं।",
              hg: "Chhota <b>role</b> interface: ye batata hai ki reader ko kya chahiye, database kya-kya kar sakta hai ye nahi."
            }
          },
          {
            code: "public class TicketRepository : ITicketReader, ITicketWriter",
            note: {
              en: "One class can implement many interfaces. The real repository still does everything; each caller sees only one role.",
              hi: "एक class कई interfaces implement कर सकती है। असली repository अब भी सब करता है; हर caller को बस एक role दिखता है।",
              hg: "Ek class kai interfaces implement kar sakti hai. Asli repository ab bhi sab karta hai; har caller ko bas ek role dikhta hai."
            }
          },
          {
            code: "public TicketDesk(ITicketWriter writer) => _writer = writer;",
            note: {
              en: "The desk asks for <code>ITicketWriter</code> only. It cannot read or delete tickets by mistake.",
              hi: "Desk सिर्फ़ <code>ITicketWriter</code> माँगता है। वह ग़लती से tickets पढ़ या delete नहीं कर सकता।",
              hg: "Desk sirf <code>ITicketWriter</code> maangta hai. Woh galti se tickets padh ya delete nahi kar sakta."
            }
          },
          {
            code: "public DailyReport(ITicketReader reader) => _reader = reader;",
            note: {
              en: "The report asks for <code>ITicketReader</code> only, so the same report works with the real repository or a one-method fake.",
              hi: "Report सिर्फ़ <code>ITicketReader</code> माँगता है, इसलिए वही report असली repository के साथ भी चलता है और एक-method वाले fake के साथ भी।",
              hg: "Report sirf <code>ITicketReader</code> maangta hai, isliye wahi report asli repository ke saath bhi chalta hai aur ek-method wale fake ke saath bhi."
            }
          },
          {
            code: "public class FakeReader : ITicketReader",
            note: {
              en: "The test fake has one method and no <code>NotImplementedException</code>. Small interfaces make fakes cheap.",
              hi: "Test का fake एक method वाला है, कोई <code>NotImplementedException</code> नहीं। छोटे interfaces fakes को सस्ता बनाते हैं।",
              hg: "Test ka fake ek method wala hai, koi <code>NotImplementedException</code> nahi. Chhote interfaces fakes ko sasta banate hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Designing the interface from the implementer's feature list (\"what can the database do?\") instead of from the caller's needs.</li><li>Interface explosion: forty one-method interfaces for one team's code. Keep methods together when they always change together and are used together.</li><li>Leaving methods empty or throwing in an implementer. That is also an LSP smell from lesson 3.</li></ul>",
          hi: "<ul><li>Interface को implementer की feature list (\"database क्या कर सकता है?\") से बनाना, caller की ज़रूरत से नहीं।</li><li>Interface की भरमार: एक team के code के लिए चालीस एक-method वाले interfaces। जो methods हमेशा साथ बदलते और साथ इस्तेमाल होते हैं, उन्हें साथ रखो।</li><li>Implementer में methods ख़ाली छोड़ना या exception फेंकना। यह पाठ 3 वाली LSP की बदबू भी है।</li></ul>",
          hg: "<ul><li>Interface ko implementer ki feature list (\"database kya kar sakta hai?\") se banana, caller ki zaroorat se nahi.</li><li>Interface ki bharmaar: ek team ke code ke liye chalis ek-method wale interfaces. Jo methods hamesha saath badalte aur saath use hote hain, unhe saath rakho.</li><li>Implementer mein methods khaali chhodna ya exception phenkna. Ye lesson 3 wali LSP ki badboo bhi hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Split an interface when implementers are forced to throw or stay empty, or when tests need big fakes for methods the code under test never calls. Keep one interface when every client always uses all of its methods.</p>",
          hi: "<p>Interface तब बाँटो जब implementers को exception फेंकना या ख़ाली रहना पड़े, या tests को उन methods के लिए बड़े fakes चाहिए जिन्हें test किया जा रहा code कभी बुलाता ही नहीं। जब हर client हमेशा उसके सारे methods इस्तेमाल करे, तो एक interface रखो।</p>",
          hg: "<p>Interface tab baanto jab implementers ko exception phenkna ya khaali rehna pade, ya tests ko un methods ke liye bade fakes chahiye jinhe test kiya ja raha code kabhi bulata hi nahi. Jab har client hamesha uske saare methods use kare, to ek interface rakho.</p>"
        },
        exercise: {
          task: {
            en: "<p>The finance team wants a CSV export. Add a small <code>ITicketExporter</code> with <code>ExportCsv()</code>, implement it on the repository, and print the CSV lines <code>501,Asha</code> and <code>502,Ravi</code>. Do not touch <code>ITicketReader</code> or <code>ITicketWriter</code>.</p>",
            hi: "<p>Finance team को CSV export चाहिए। एक छोटा <code>ITicketExporter</code> जोड़ो जिसमें <code>ExportCsv()</code> हो, उसे repository पर implement करो, और CSV lines <code>501,Asha</code> और <code>502,Ravi</code> print करो। <code>ITicketReader</code> या <code>ITicketWriter</code> को मत छेड़ो।</p>",
            hg: "<p>Finance team ko CSV export chahiye. Ek chhota <code>ITicketExporter</code> jodo jisme <code>ExportCsv()</code> ho, use repository par implement karo, aur CSV lines <code>501,Asha</code> aur <code>502,Ravi</code> print karo. <code>ITicketReader</code> ya <code>ITicketWriter</code> ko mat chhedo.</p>"
          },
          hint: {
            en: "<p>A new need means a new small interface, not a new method on an old one. The caller takes <code>ITicketExporter</code> only.</p>",
            hi: "<p>नई ज़रूरत का मतलब नया छोटा interface, पुराने में नया method नहीं। Caller सिर्फ़ <code>ITicketExporter</code> लेता है।</p>",
            hg: "<p>Nayi zaroorat ka matlab naya chhota interface, purane mein naya method nahi. Caller sirf <code>ITicketExporter</code> leta hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a new small interface",
              hi: "हल: एक नया छोटा interface",
              hg: "Hal: ek naya chhota interface"
            },
            src: "var repo = new TicketRepository();\nrepo.Add(new SupportTicket(501, \"Asha\", \"Router not working\"));\nrepo.Add(new SupportTicket(502, \"Ravi\", \"Bill is wrong\"));\n\nPrint(repo);   // Print needs only ITicketExporter\n\nstatic void Print(ITicketExporter exporter) => Console.WriteLine(exporter.ExportCsv());\n\npublic record SupportTicket(int Id, string Customer, string Issue);\n\npublic interface ITicketWriter { void Add(SupportTicket ticket); }\n\npublic interface ITicketExporter { string ExportCsv(); }\n\npublic class TicketRepository : ITicketWriter, ITicketExporter\n{\n    private readonly List<SupportTicket> _tickets = new();\n\n    public void Add(SupportTicket ticket) => _tickets.Add(ticket);\n\n    public string ExportCsv() =>\n        string.Join(Environment.NewLine, _tickets.Select(t => $\"{t.Id},{t.Customer}\"));\n}",
            check: "run",
            expected: "501,Asha\n502,Ravi"
          }
        },
        quiz: {
          q: {
            en: "The daily report only reads tickets. What should its constructor ask for?",
            hi: "Daily report सिर्फ़ tickets पढ़ता है। उसका constructor क्या माँगे?",
            hg: "Daily report sirf tickets padhta hai. Uska constructor kya maange?"
          },
          options: [
            {
              en: "The whole <code>ITicketRepository</code>, to be safe",
              hi: "पूरा <code>ITicketRepository</code>, सुरक्षा के लिए",
              hg: "Poora <code>ITicketRepository</code>, suraksha ke liye"
            },
            {
              en: "A small <code>ITicketReader</code> with only the read method",
              hi: "सिर्फ़ read method वाला छोटा <code>ITicketReader</code>",
              hg: "Sirf read method wala chhota <code>ITicketReader</code>"
            },
            {
              en: "The concrete <code>TicketRepository</code> class",
              hi: "असली <code>TicketRepository</code> class (concrete)",
              hg: "Asli <code>TicketRepository</code> class (concrete)"
            },
            {
              en: "An <code>object</code> that it casts later",
              hi: "एक <code>object</code> जिसे वह बाद में cast करे",
              hg: "Ek <code>object</code> jise woh baad mein cast kare"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Ask for the smallest abstraction that does the job. The report then cannot misuse Add or Delete, and its test needs a one-method fake.</p>",
            hi: "<p>काम करने लायक सबसे छोटी abstraction माँगो। तब report Add या Delete का ग़लत इस्तेमाल कर ही नहीं सकता, और उसके test को एक-method वाला fake चाहिए।</p>",
            hg: "<p>Kaam karne laayak sabse chhoti abstraction maango. Tab report Add ya Delete ka galat use kar hi nahi sakta, aur uske test ko ek-method wala fake chahiye.</p>"
          }
        },
        recap: {
          en: "<ul><li>Small role interfaces, shaped by what the caller needs.</li><li>One class can implement several of them.</li><li>Ask for the smallest abstraction; fakes become tiny.</li></ul>",
          hi: "<ul><li>छोटे role interfaces, caller की ज़रूरत के आकार के।</li><li>एक class उनमें से कई implement कर सकती है।</li><li>सबसे छोटी abstraction माँगो; fakes छोटे हो जाते हैं।</li></ul>",
          hg: "<ul><li>Chhote role interfaces, caller ki zaroorat ke aakaar ke.</li><li>Ek class unmein se kai implement kar sakti hai.</li><li>Sabse chhoti abstraction maango; fakes chhote ho jaate hain.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Small interfaces: each caller asks for one role only",
            hi: "छोटे interfaces: हर caller सिर्फ़ एक role माँगता है",
            hg: "Chhote interfaces: har caller sirf ek role maangta hai"
          },
          src: "var repo = new TicketRepository();\nvar desk = new TicketDesk(repo);          // needs only writing\ndesk.Open(501, \"Asha\", \"Router not working\");\ndesk.Open(502, \"Ravi\", \"Bill is wrong\");\n\nConsole.WriteLine(new DailyReport(repo).Summary());              // needs only reading\nConsole.WriteLine(new DailyReport(new FakeReader()).Summary());  // the test fake has one method\n\npublic record SupportTicket(int Id, string Customer, string Issue);\n\npublic interface ITicketReader { IReadOnlyList<SupportTicket> GetAll(); }\n\npublic interface ITicketWriter { void Add(SupportTicket ticket); }\n\npublic class TicketRepository : ITicketReader, ITicketWriter\n{\n    private readonly List<SupportTicket> _tickets = new();\n\n    public IReadOnlyList<SupportTicket> GetAll() => _tickets;\n\n    public void Add(SupportTicket ticket) => _tickets.Add(ticket);\n}\n\npublic class TicketDesk\n{\n    private readonly ITicketWriter _writer;\n\n    public TicketDesk(ITicketWriter writer) => _writer = writer;\n\n    public void Open(int id, string customer, string issue) =>\n        _writer.Add(new SupportTicket(id, customer, issue));\n}\n\npublic class DailyReport\n{\n    private readonly ITicketReader _reader;\n\n    public DailyReport(ITicketReader reader) => _reader = reader;\n\n    public string Summary()\n    {\n        var all = _reader.GetAll();\n        return $\"Tickets ({all.Count}): {string.Join(\", \", all.Select(t => t.Customer))}\";\n    }\n}\n\npublic class FakeReader : ITicketReader\n{\n    public IReadOnlyList<SupportTicket> GetAll() => new[] { new SupportTicket(900, \"Test\", \"x\") };\n}",
          check: "run",
          expected: "Tickets (2): Asha, Ravi\nTickets (1): Test"
        }
      ]
    },
    {
      id: "dip",
      depth: "short",
      title: {
        en: "D — Dependency Inversion",
        hi: "D — Dependency Inversion: new बाहर से आए",
        hg: "D — Dependency Inversion: new bahar se aaye"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 4 gave callers small interfaces. Day 1 already showed <code>TicketService</code> taking an <code>INotifier</code>. This lesson explains <i>why</i> that was the right design: the service should depend on the small interface, and the concrete <code>SmsNotifier</code> should be handed in from outside.",
          hi: "पाठ 4 में callers को छोटे interfaces मिले। Day 1 में दिखा था कि <code>TicketService</code> एक <code>INotifier</code> लेता है। यह पाठ समझाता है कि वह design सही <i>क्यों</i> था: service को छोटे interface पर निर्भर होना चाहिए, और असली <code>SmsNotifier</code> बाहर से थमाया जाना चाहिए।",
          hg: "Lesson 4 mein callers ko chhote interfaces mile. Day 1 mein dikha tha ki <code>TicketService</code> ek <code>INotifier</code> leta hai. Ye lesson samjhata hai ki woh design sahi <i>kyun</i> tha: service ko chhote interface par nirbhar hona chahiye, aur asli <code>SmsNotifier</code> bahar se thamaya jaana chahiye."
        },
        what: {
          en: "<p><b>Dependency Inversion Principle (DIP):</b> high-level code (the ticket workflow) should not depend on low-level details (SMS gateway). Both should depend on an <b>abstraction</b>, and that abstraction belongs to the high-level side.</p><p>In practice: do not write <code>new SmsNotifier()</code> inside the service. Ask for an <code>INotifier</code> in the constructor.</p>",
          hi: "<p><b>Dependency Inversion Principle (DIP):</b> ऊँचे स्तर का code (ticket का workflow) निचले स्तर की बारीकियों (SMS gateway) पर निर्भर नहीं होना चाहिए। दोनों एक <b>abstraction</b> पर निर्भर हों, और वह abstraction ऊँचे स्तर की तरफ़ की हो।</p><p>असल में: service के अंदर <code>new SmsNotifier()</code> मत लिखो। Constructor में <code>INotifier</code> माँगो।</p>",
          hg: "<p><b>Dependency Inversion Principle (DIP):</b> unche star ka code (ticket ka workflow) niche star ki baarikiyon (SMS gateway) par nirbhar nahi hona chahiye. Dono ek <b>abstraction</b> par nirbhar hon, aur woh abstraction unche star ki taraf ki ho.</p><p>Asal mein: service ke andar <code>new SmsNotifier()</code> mat likho. Constructor mein <code>INotifier</code> maango.</p>"
        },
        why: {
          en: "<p>With <code>new SmsNotifier()</code> inside, a unit test of <code>TicketService</code> sends a real SMS. Moving to email or WhatsApp means editing the service. With the interface passed in, a test hands over a fake and production hands over the real one.</p>",
          hi: "<p>अंदर <code>new SmsNotifier()</code> हो तो <code>TicketService</code> के unit test में असली SMS चला जाता है। Email या WhatsApp पर जाना हो तो service बदलनी पड़ती है। Interface बाहर से मिले तो test fake थमाता है और production असली।</p>",
          hg: "<p>Andar <code>new SmsNotifier()</code> ho to <code>TicketService</code> ke unit test mein asli SMS chala jaata hai. Email ya WhatsApp par jaana ho to service badalni padti hai. Interface bahar se mile to test fake thamaata hai aur production asli.</p>"
        },
        analogy: {
          en: "<p>A tube-light holder is built for the standard cap, not for one bulb brand. Any bulb with that cap fits, and the shop can swap Philips for Syska without touching the wiring. The holder and the bulb both follow the cap standard.</p>",
          hi: "<p>Tube-light का holder standard cap के लिए बना होता है, किसी एक bulb brand के लिए नहीं। उस cap वाला कोई भी bulb फ़िट हो जाता है, और दुकान wiring छुए बिना Philips की जगह Syska लगा सकती है। Holder और bulb दोनों cap के standard को मानते हैं।</p>",
          hg: "<p>Tube-light ka holder standard cap ke liye bana hota hai, kisi ek bulb brand ke liye nahi. Us cap wala koi bhi bulb fit ho jaata hai, aur dukaan wiring chhue bina Philips ki jagah Syska laga sakti hai. Holder aur bulb dono cap ke standard ko maante hain.</p>"
        },
        focus: {
          caption: {
            en: "The problem: the service creates its own SMS sender",
            hi: "समस्या: service अपना SMS sender ख़ुद बनाती है",
            hg: "Samasya: service apna SMS sender khud banati hai"
          },
          src: "public class SmsNotifier\n{\n    public void Send(string to, string message) => Console.WriteLine($\"SMS to {to}: {message}\");\n}\n\npublic class TicketService\n{\n    private readonly SmsNotifier _notifier = new();   // welded to one concrete class\n\n    public void Resolve(int ticketId, string phone) =>\n        _notifier.Send(phone, $\"Ticket #{ticketId} is resolved\");\n}",
          check: "compile"
        },
        lines: [
          {
            code: "new TicketService(new SmsNotifier()).Resolve(501, \"9876543210\");",
            note: {
              en: "Production wiring by hand: whoever builds the service chooses the real notifier.",
              hi: "Production की wiring हाथ से: जो service बनाता है वही असली notifier चुनता है।",
              hg: "Production ki wiring haath se: jo service banata hai wahi asli notifier chunta hai."
            }
          },
          {
            code: "var fake = new FakeNotifier();",
            note: {
              en: "In a test, build a fake that records the message instead of sending it. No real SMS, no network.",
              hi: "Test में ऐसा fake बनाओ जो message भेजने की जगह record कर ले। न असली SMS, न network।",
              hg: "Test mein aisa fake banao jo message bhejne ki jagah record kar le. Na asli SMS, na network."
            }
          },
          {
            code: "public interface INotifier { void Send(string to, string message); }",
            note: {
              en: "The abstraction. It speaks the language of the ticket workflow (\"send a message\"), not the language of one gateway.",
              hi: "यह abstraction है। यह ticket workflow की भाषा बोलता है (\"message भेजो\"), किसी एक gateway की भाषा नहीं।",
              hg: "Ye abstraction hai. Ye ticket workflow ki bhasha bolta hai (\"message bhejo\"), kisi ek gateway ki bhasha nahi."
            }
          },
          {
            code: "public TicketService(INotifier notifier) => _notifier = notifier;",
            note: {
              en: "<b>Constructor injection</b>: the dependency is visible and required. The service cannot even be created without a notifier.",
              hi: "<b>Constructor injection</b>: dependency साफ़ दिखती है और ज़रूरी है। Notifier के बिना service बन ही नहीं सकती।",
              hg: "<b>Constructor injection</b>: dependency saaf dikhti hai aur zaroori hai. Notifier ke bina service ban hi nahi sakti."
            }
          },
          {
            code: "private readonly INotifier _notifier;",
            note: {
              en: "The field has the interface type and is <code>readonly</code>, so it is set once and never swapped by accident.",
              hi: "Field का type interface है और वह <code>readonly</code> है, इसलिए एक बार set होता है और ग़लती से बदलता नहीं।",
              hg: "Field ka type interface hai aur woh <code>readonly</code> hai, isliye ek baar set hota hai aur galti se badalta nahi."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Writing the interface but still doing <code>new SmsNotifier()</code> inside the service. The interface is then decoration.</li><li>Making an interface for every class. Add one at real boundaries: SMS, payments, clock, file system, or anything you want to fake.</li><li>A constructor with eight or more parameters. The class probably breaks SRP (lesson 1). Fix the class, not the wiring.</li></ul>",
          hi: "<ul><li>Interface लिख दिया पर service के अंदर अब भी <code>new SmsNotifier()</code> करना। तब interface बस सजावट है।</li><li>हर class के लिए interface बना देना। असली सीमाओं पर लगाओ: SMS, payments, घड़ी (clock), file system, या कुछ भी जिसे fake करना हो।</li><li>आठ या ज़्यादा parameters वाला constructor। class शायद SRP (पाठ 1) तोड़ रही है। Class ठीक करो, wiring नहीं।</li></ul>",
          hg: "<ul><li>Interface likh diya par service ke andar ab bhi <code>new SmsNotifier()</code> karna. Tab interface bas sajaavat hai.</li><li>Har class ke liye interface bana dena. Asli seemaon par lagao: SMS, payments, ghadi (clock), file system, ya kuch bhi jise fake karna ho.</li><li>Aath ya zyada parameters wala constructor. Class shayad SRP (lesson 1) tod rahi hai. Class theek karo, wiring nahi.</li></ul>"
        },
        whenToUse: {
          en: "<p>Invert the dependency at real boundaries: I/O, time, external APIs, anything you want to fake. For a pure helper with no outside effect, skip the interface; you can extract one later in a minute.</p>",
          hi: "<p>असली सीमाओं पर dependency उलटो: I/O, समय, बाहरी APIs, कुछ भी जिसे fake करना हो। बिना बाहरी असर वाले pure helper के लिए interface छोड़ दो; ज़रूरत पड़े तो बाद में एक मिनट में निकाल सकते हो।</p>",
          hg: "<p>Asli seemaon par dependency ulto: I/O, samay, baahri APIs, kuch bhi jise fake karna ho. Bina baahri asar wale pure helper ke liye interface chhod do; zaroorat pade to baad mein ek minute mein nikaal sakte ho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add an <code>EmailNotifier</code> that prints <code>Email to asha@example.com: Ticket #503 is resolved</code>, and use it with <code>TicketService</code> <b>without editing</b> the service.</p>",
            hi: "<p>एक <code>EmailNotifier</code> जोड़ो जो <code>Email to asha@example.com: Ticket #503 is resolved</code> print करे, और उसे <code>TicketService</code> के साथ <b>service बदले बिना</b> इस्तेमाल करो।</p>",
            hg: "<p>Ek <code>EmailNotifier</code> jodo jo <code>Email to asha@example.com: Ticket #503 is resolved</code> print kare, aur use <code>TicketService</code> ke saath <b>service badle bina</b> use karo.</p>"
          },
          hint: {
            en: "<p>Implement <code>INotifier</code> in a new class and pass it to the constructor.</p>",
            hi: "<p>नई class में <code>INotifier</code> implement करो और उसे constructor में दे दो।</p>",
            hg: "<p>Nayi class mein <code>INotifier</code> implement karo aur use constructor mein de do.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a new notifier, same service",
              hi: "हल: नया notifier, वही service",
              hg: "Hal: naya notifier, wahi service"
            },
            src: "new TicketService(new EmailNotifier()).Resolve(503, \"asha@example.com\");\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class EmailNotifier : INotifier\n{\n    public void Send(string to, string message) => Console.WriteLine($\"Email to {to}: {message}\");\n}\n\npublic class TicketService\n{\n    private readonly INotifier _notifier;\n\n    public TicketService(INotifier notifier) => _notifier = notifier;\n\n    public void Resolve(int ticketId, string phone) =>\n        _notifier.Send(phone, $\"Ticket #{ticketId} is resolved\");\n}",
            check: "run",
            expected: "Email to asha@example.com: Ticket #503 is resolved"
          }
        },
        quiz: {
          q: {
            en: "How does constructor injection help a unit test of TicketService?",
            hi: "Constructor injection से TicketService के unit test में क्या फ़ायदा होता है?",
            hg: "Constructor injection se TicketService ke unit test mein kya fayda hota hai?"
          },
          options: [
            {
              en: "It makes the service run faster",
              hi: "Service तेज़ चलती है",
              hg: "Service tez chalti hai"
            },
            {
              en: "It removes the need for an interface",
              hi: "Interface की ज़रूरत ख़त्म हो जाती है",
              hg: "Interface ki zaroorat khatam ho jaati hai"
            },
            {
              en: "The container creates the fake automatically",
              hi: "Container fake अपने आप बना देता है",
              hg: "Container fake apne aap bana deta hai"
            },
            {
              en: "The test can pass a fake notifier, so no real SMS is sent",
              hi: "Test एक fake notifier दे सकता है, इसलिए असली SMS नहीं जाता",
              hg: "Test ek fake notifier de sakta hai, isliye asli SMS nahi jaata"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>The test decides which implementation the service gets. A fake that records messages replaces the real gateway. Speed and containers are not involved.</p>",
            hi: "<p>Service को कौन-सी implementation मिले, यह test तय करता है। Message record करने वाला fake असली gateway की जगह ले लेता है। इसमें speed या container का कोई हाथ नहीं।</p>",
            hg: "<p>Service ko kaun si implementation mile, ye test tay karta hai. Message record karne wala fake asli gateway ki jagah le leta hai. Isme speed ya container ka koi haath nahi.</p>"
          }
        },
        recap: {
          en: "<ul><li>High-level code and low-level detail both depend on an abstraction (<code>INotifier</code>).</li><li>Do not <code>new</code> a collaborator inside; take it in the constructor.</li><li>Use it at real boundaries, not for every class.</li></ul>",
          hi: "<ul><li>ऊँचे स्तर का code और निचले स्तर की बारीकी, दोनों एक abstraction (<code>INotifier</code>) पर निर्भर।</li><li>साथी class को अंदर <code>new</code> मत करो; constructor में लो।</li><li>असली सीमाओं पर इस्तेमाल करो, हर class के लिए नहीं।</li></ul>",
          hg: "<ul><li>Unche star ka code aur niche star ki baariki, dono ek abstraction (<code>INotifier</code>) par nirbhar.</li><li>Saathi class ko andar <code>new</code> mat karo; constructor mein lo.</li><li>Asli seemaon par use karo, har class ke liye nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "TicketService depends on INotifier; production and test pass different ones",
            hi: "TicketService, INotifier पर निर्भर है; production और test अलग-अलग देते हैं",
            hg: "TicketService, INotifier par nirbhar hai; production aur test alag-alag dete hain"
          },
          src: "// Production wiring, by hand (no container)\nnew TicketService(new SmsNotifier()).Resolve(501, \"9876543210\");\n\n// Test wiring: a fake records the message instead of sending it\nvar fake = new FakeNotifier();\nnew TicketService(fake).Resolve(502, \"9123456780\");\nConsole.WriteLine($\"Fake captured: {fake.Last}\");\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class SmsNotifier : INotifier\n{\n    public void Send(string to, string message) => Console.WriteLine($\"SMS to {to}: {message}\");\n}\n\npublic class FakeNotifier : INotifier\n{\n    public string? Last { get; private set; }\n\n    public void Send(string to, string message) => Last = $\"{to}|{message}\";\n}\n\npublic class TicketService\n{\n    private readonly INotifier _notifier;\n\n    public TicketService(INotifier notifier) => _notifier = notifier;\n\n    public void Resolve(int ticketId, string phone) =>\n        _notifier.Send(phone, $\"Ticket #{ticketId} is resolved\");\n}",
          check: "run",
          expected: "SMS to 9876543210: Ticket #501 is resolved\nFake captured: 9123456780|Ticket #502 is resolved"
        }
      ]
    },
    {
      id: "di-container",
      depth: "short",
      title: {
        en: "DIP vs DI vs IoC container",
        hi: "DIP, DI और IoC container: तीन अलग चीज़ें",
        hg: "DIP, DI aur IoC container: teen alag cheezein"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 5 passed the notifier into <code>TicketService</code> by hand: <code>new TicketService(new SmsNotifier())</code>. That works, but in a real app there are dozens of such classes. A <b>container</b> builds this chain for you. This lesson separates three words people mix up.",
          hi: "पाठ 5 में notifier को <code>TicketService</code> में हाथ से दिया: <code>new TicketService(new SmsNotifier())</code>। यह चलता है, पर असली app में ऐसी दर्जनों classes होती हैं। <b>Container</b> यह कड़ी आपके लिए बना देता है। यह पाठ उन तीन शब्दों को अलग करता है जिन्हें लोग मिला देते हैं।",
          hg: "Lesson 5 mein notifier ko <code>TicketService</code> mein haath se diya: <code>new TicketService(new SmsNotifier())</code>. Ye chalta hai, par asli app mein aisi darjanon classes hoti hain. <b>Container</b> ye kadi aapke liye bana deta hai. Ye lesson un teen shabdon ko alag karta hai jinhe log mila dete hain."
        },
        what: {
          en: "<ul><li><b>DIP</b> is a <i>principle</i>: depend on abstractions (lesson 5).</li><li><b>DI</b> (Dependency Injection) is a <i>technique</i>: pass the dependencies in, usually through the constructor. You can do it by hand.</li><li>An <b>IoC container</b> is a <i>tool</i> that builds the whole object graph from your registrations. The built-in one in .NET is <code>Microsoft.Extensions.DependencyInjection</code>.</li></ul>",
          hi: "<ul><li><b>DIP</b> एक <i>principle</i> है: abstractions पर निर्भर रहो (पाठ 5)।</li><li><b>DI</b> (Dependency Injection) एक <i>technique</i> है: dependencies बाहर से दो, आम तौर पर constructor से। यह हाथ से भी हो सकता है।</li><li><b>IoC container</b> एक <i>tool</i> है जो आपकी registrations से पूरा object graph बना देता है। .NET में built-in container <code>Microsoft.Extensions.DependencyInjection</code> है।</li></ul>",
          hg: "<ul><li><b>DIP</b> ek <i>principle</i> hai: abstractions par nirbhar raho (lesson 5).</li><li><b>DI</b> (Dependency Injection) ek <i>technique</i> hai: dependencies bahar se do, aam taur par constructor se. Ye haath se bhi ho sakta hai.</li><li><b>IoC container</b> ek <i>tool</i> hai jo aapki registrations se poora object graph bana deta hai. .NET mein built-in container <code>Microsoft.Extensions.DependencyInjection</code> hai.</li></ul>"
        },
        why: {
          en: "<p>Without a container, every place that needs a <code>TicketService</code> must know how to build it and what it needs. With one, you register the choices once, at startup, and ask for the finished object. Changing SMS to email is one registration line.</p>",
          hi: "<p>Container के बिना, जहाँ भी <code>TicketService</code> चाहिए, वहाँ पता होना चाहिए कि उसे कैसे बनाना है और उसे क्या चाहिए। Container के साथ, चुनाव एक बार, startup पर, register करते हो और बना-बनाया object माँगते हो। SMS से email बदलना एक registration line है।</p>",
          hg: "<p>Container ke bina, jahan bhi <code>TicketService</code> chahiye, wahan pata hona chahiye ki use kaise banana hai aur use kya chahiye. Container ke saath, chunav ek baar, startup par, register karte ho aur bana-banaya object maangte ho. SMS se email badalna ek registration line hai.</p>"
        },
        analogy: {
          en: "<p>A wedding planner. The family plans around roles — \"a caterer\", \"a decorator\" — not one named vendor: that is DIP. The booked caterer is brought to the hall and handed over, so the family never goes hunting for one: that is DI. The planner, who does this booking and handing for every function, is the container.</p>",
          hi: "<p>Wedding planner। परिवार roles के हिसाब से plan करता है — \"एक caterer\", \"एक decorator\" — किसी एक नाम वाले vendor के हिसाब से नहीं: यह DIP है। Book किया हुआ caterer hall में लाकर सौंप दिया जाता है, परिवार को ख़ुद ढूँढना नहीं पड़ता: यह DI है। Planner, जो हर function के लिए यह booking और सौंपने का काम करता है, container है।</p>",
          hg: "<p>Wedding planner. Parivaar roles ke hisaab se plan karta hai — \"ek caterer\", \"ek decorator\" — kisi ek naam wale vendor ke hisaab se nahi: ye DIP hai. Book kiya hua caterer hall mein laakar saunp diya jaata hai, parivaar ko khud dhoondhna nahi padta: ye DI hai. Planner, jo har function ke liye ye booking aur saunpne ka kaam karta hai, container hai.</p>"
        },
        focus: {
          caption: {
            en: "Avoid: asking the container from inside business code (Service Locator)",
            hi: "बचो: business code के अंदर से container से माँगना (Service Locator)",
            hg: "Bacho: business code ke andar se container se maangna (Service Locator)"
          },
          src: "public class TicketService\n{\n    private readonly IServiceProvider _provider;\n\n    public TicketService(IServiceProvider provider) => _provider = provider;\n\n    public void Resolve(int ticketId, string phone)\n    {\n        // Hidden dependency: nothing in the constructor says this class needs an INotifier,\n        // and a missing registration fails only at run time.\n        var notifier = _provider.GetRequiredService<INotifier>();\n        notifier.Send(phone, $\"Ticket #{ticketId} is resolved\");\n    }\n}",
          check: "none"
        },
        lines: [
          {
            code: "using Microsoft.Extensions.DependencyInjection;",
            note: {
              en: "The container lives in the NuGet package <code>Microsoft.Extensions.DependencyInjection</code>. ASP.NET Core already includes it.",
              hi: "Container NuGet package <code>Microsoft.Extensions.DependencyInjection</code> में है। ASP.NET Core में यह पहले से शामिल है।",
              hg: "Container NuGet package <code>Microsoft.Extensions.DependencyInjection</code> mein hai. ASP.NET Core mein ye pehle se shamil hai."
            }
          },
          {
            code: "services.AddSingleton<INotifier, SmsNotifier>();   // composition root: the only place that knows the concrete type",
            note: {
              en: "Registration: \"when someone asks for <code>INotifier</code>, give an <code>SmsNotifier</code>\". Singleton = one shared instance.",
              hi: "Registration: \"कोई <code>INotifier</code> माँगे तो <code>SmsNotifier</code> दो\"। Singleton = एक ही साझा instance।",
              hg: "Registration: \"koi <code>INotifier</code> maange to <code>SmsNotifier</code> do\". Singleton = ek hi saajha instance."
            }
          },
          {
            code: "services.AddTransient<TicketService>();",
            note: {
              en: "Transient = a new <code>TicketService</code> each time it is asked for. The service itself is unchanged from lesson 5.",
              hi: "Transient = हर बार माँगने पर नया <code>TicketService</code>। Service ख़ुद पाठ 5 जैसी ही है।",
              hg: "Transient = har baar maangne par naya <code>TicketService</code>. Service khud lesson 5 jaisi hi hai."
            }
          },
          {
            code: "using var provider = services.BuildServiceProvider();",
            note: {
              en: "Builds the container from all registrations. <code>using</code> disposes it when the program ends.",
              hi: "सारी registrations से container बनाता है। <code>using</code> program ख़त्म होने पर उसे dispose कर देता है।",
              hg: "Saari registrations se container banata hai. <code>using</code> program khatam hone par use dispose kar deta hai."
            }
          },
          {
            code: "var service = provider.GetRequiredService<TicketService>();   // the container builds SmsNotifier and passes it in",
            note: {
              en: "The container sees that <code>TicketService</code> needs an <code>INotifier</code>, builds the <code>SmsNotifier</code> and calls the constructor for you.",
              hi: "Container देखता है कि <code>TicketService</code> को <code>INotifier</code> चाहिए, <code>SmsNotifier</code> बनाता है और constructor आपके लिए बुला देता है।",
              hg: "Container dekhta hai ki <code>TicketService</code> ko <code>INotifier</code> chahiye, <code>SmsNotifier</code> banata hai aur constructor aapke liye bula deta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Thinking \"I use a container, so I follow DIP\". Injecting concrete classes everywhere still breaks DIP. Injecting the container itself (Service Locator, see the first snippet) hides what the class really needs.</li><li>Registering things all over the app. Register in one place, the <b>composition root</b> (usually <code>Program.cs</code>).</li><li>Thinking DIP needs a framework. Lesson 5 followed DIP with no container at all.</li></ul>",
          hi: "<ul><li>यह सोचना कि \"मैं container इस्तेमाल करता हूँ, तो DIP हो गया\"। हर जगह concrete classes inject करना तब भी DIP तोड़ता है। Container को ही inject करना (Service Locator, पहला snippet देखो) छुपा देता है कि class को असल में क्या चाहिए।</li><li>पूरे app में जगह-जगह registrations करना। एक ही जगह register करो — <b>composition root</b> (आम तौर पर <code>Program.cs</code>)।</li><li>यह मानना कि DIP के लिए framework चाहिए। पाठ 5 ने बिना container के DIP निभाया।</li></ul>",
          hg: "<ul><li>Ye sochna ki \"main container use karta hoon, to DIP ho gaya\". Har jagah concrete classes inject karna tab bhi DIP todta hai. Container ko hi inject karna (Service Locator, pehla snippet dekho) chhupa deta hai ki class ko asal mein kya chahiye.</li><li>Poore app mein jagah-jagah registrations karna. Ek hi jagah register karo — <b>composition root</b> (aam taur par <code>Program.cs</code>).</li><li>Ye maanna ki DIP ke liye framework chahiye. Lesson 5 ne bina container ke DIP nibhaaya.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a container once the app has more than a handful of services, or when the framework (ASP.NET Core) already provides one. For a small console tool, wiring by hand is fine and often clearer.</p>",
          hi: "<p>Container तब लो जब app में मुट्ठी भर से ज़्यादा services हों, या framework (ASP.NET Core) पहले से दे रहा हो। छोटे console tool में हाथ की wiring ठीक है और अक्सर ज़्यादा साफ़।</p>",
          hg: "<p>Container tab lo jab app mein mutthi bhar se zyada services hon, ya framework (ASP.NET Core) pehle se de raha ho. Chhote console tool mein haath ki wiring theek hai aur aksar zyada saaf.</p>"
        },
        exercise: {
          task: {
            en: "<p>Swap SMS for email by changing <b>only the registration</b>: register an <code>EmailNotifier</code> for <code>INotifier</code> and resolve ticket 502 for <code>asha@example.com</code>. The output must be <code>Email to asha@example.com: Ticket #502 is resolved</code>.</p>",
            hi: "<p>सिर्फ़ <b>registration बदलकर</b> SMS की जगह email लगाओ: <code>INotifier</code> के लिए <code>EmailNotifier</code> register करो और ticket 502 को <code>asha@example.com</code> के लिए resolve करो। Output <code>Email to asha@example.com: Ticket #502 is resolved</code> होना चाहिए।</p>",
            hg: "<p>Sirf <b>registration badalkar</b> SMS ki jagah email lagao: <code>INotifier</code> ke liye <code>EmailNotifier</code> register karo aur ticket 502 ko <code>asha@example.com</code> ke liye resolve karo. Output <code>Email to asha@example.com: Ticket #502 is resolved</code> hona chahiye.</p>"
          },
          hint: {
            en: "<p>Change the type after the comma in <code>AddSingleton&lt;INotifier, ...&gt;()</code>. <code>TicketService</code> does not change.</p>",
            hi: "<p><code>AddSingleton&lt;INotifier, ...&gt;()</code> में comma के बाद वाला type बदलो। <code>TicketService</code> नहीं बदलती।</p>",
            hg: "<p><code>AddSingleton&lt;INotifier, ...&gt;()</code> mein comma ke baad wala type badlo. <code>TicketService</code> nahi badalti.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one changed registration",
              hi: "हल: एक बदली हुई registration",
              hg: "Hal: ek badli hui registration"
            },
            packages: [
              "Microsoft.Extensions.DependencyInjection"
            ],
            src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddSingleton<INotifier, EmailNotifier>();   // the only line that changed\nservices.AddTransient<TicketService>();\n\nusing var provider = services.BuildServiceProvider();\nprovider.GetRequiredService<TicketService>().Resolve(502, \"asha@example.com\");\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class EmailNotifier : INotifier\n{\n    public void Send(string to, string message) => Console.WriteLine($\"Email to {to}: {message}\");\n}\n\npublic class TicketService\n{\n    private readonly INotifier _notifier;\n\n    public TicketService(INotifier notifier) => _notifier = notifier;\n\n    public void Resolve(int ticketId, string contact) =>\n        _notifier.Send(contact, $\"Ticket #{ticketId} is resolved\");\n}",
            check: "run",
            expected: "Email to asha@example.com: Ticket #502 is resolved"
          }
        },
        quiz: {
          q: {
            en: "Which statement about DIP, DI and an IoC container is correct?",
            hi: "DIP, DI और IoC container के बारे में कौन-सी बात सही है?",
            hg: "DIP, DI aur IoC container ke baare mein kaun si baat sahi hai?"
          },
          options: [
            {
              en: "DIP needs a container to work",
              hi: "DIP के काम करने के लिए container चाहिए",
              hg: "DIP ke kaam karne ke liye container chahiye"
            },
            {
              en: "DI and DIP are two names for the same thing",
              hi: "DI और DIP एक ही चीज़ के दो नाम हैं",
              hg: "DI aur DIP ek hi cheez ke do naam hain"
            },
            {
              en: "DIP is a principle, DI is a technique, a container is a tool",
              hi: "DIP principle है, DI technique है, container tool है",
              hg: "DIP principle hai, DI technique hai, container tool hai"
            },
            {
              en: "A container always makes the code follow DIP",
              hi: "Container हमेशा code को DIP के अनुसार बना देता है",
              hg: "Container hamesha code ko DIP ke anusaar bana deta hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>A principle (what to aim for), a technique (how to pass dependencies) and a tool (who automates the wiring) are three different things. You can follow DIP with no container, and use a container while breaking DIP.</p>",
            hi: "<p>Principle (किस तरफ़ जाना है), technique (dependencies कैसे दें) और tool (wiring कौन automate करे) तीन अलग चीज़ें हैं। बिना container के DIP निभ सकता है, और container रखकर भी DIP टूट सकता है।</p>",
            hg: "<p>Principle (kis taraf jaana hai), technique (dependencies kaise den) aur tool (wiring kaun automate kare) teen alag cheezein hain. Bina container ke DIP nibh sakta hai, aur container rakhkar bhi DIP toot sakta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>DIP = principle, DI = technique (pass dependencies in), IoC container = tool.</li><li>Register once in the composition root, then ask the container for the finished object.</li><li>Never pass the container into business code (Service Locator).</li></ul>",
          hi: "<ul><li>DIP = principle, DI = technique (dependencies बाहर से दो), IoC container = tool।</li><li>Composition root में एक बार register करो, फिर container से बना-बनाया object माँगो।</li><li>Container को business code में कभी मत दो (Service Locator)।</li></ul>",
          hg: "<ul><li>DIP = principle, DI = technique (dependencies bahar se do), IoC container = tool.</li><li>Composition root mein ek baar register karo, phir container se bana-banaya object maango.</li><li>Container ko business code mein kabhi mat do (Service Locator).</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "The same TicketService, now built by the container",
            hi: "वही TicketService, अब container से बनी",
            hg: "Wahi TicketService, ab container se bani"
          },
          packages: [
            "Microsoft.Extensions.DependencyInjection"
          ],
          src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddSingleton<INotifier, SmsNotifier>();   // composition root: the only place that knows the concrete type\nservices.AddTransient<TicketService>();\n\nusing var provider = services.BuildServiceProvider();\nvar service = provider.GetRequiredService<TicketService>();   // the container builds SmsNotifier and passes it in\nservice.Resolve(501, \"9876543210\");\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class SmsNotifier : INotifier\n{\n    public void Send(string to, string message) => Console.WriteLine($\"SMS to {to}: {message}\");\n}\n\npublic class TicketService\n{\n    private readonly INotifier _notifier;\n\n    public TicketService(INotifier notifier) => _notifier = notifier;\n\n    public void Resolve(int ticketId, string phone) =>\n        _notifier.Send(phone, $\"Ticket #{ticketId} is resolved\");\n}",
          check: "run",
          expected: "SMS to 9876543210: Ticket #501 is resolved"
        }
      ]
    },
    {
      id: "solid-overview",
      depth: "detailed",
      title: {
        en: "SOLID cheat sheet: the five letters in one picture",
        hi: "SOLID cheat sheet: पाँचों अक्षर एक तस्वीर में",
        hg: "SOLID cheat sheet: paanchon akshar ek tasveer mein"
      },
      body: {
        en: "<p><b>Analogy — a restaurant kitchen:</b> each cook has one job (chopping, tandoor, billing) — <b>S</b>. To add a new dish you add a new recipe card, you do not rebuild the kitchen — <b>O</b>. If the tandoor cook is on leave, any trained cook can take the station without the dishes changing — <b>L</b>. The waiter gets a small order slip, not the whole inventory register — <b>I</b>. The kitchen depends on \"a gas connection\" (a standard), not on one particular cylinder brand — <b>D</b>.</p>\n<ul>\n<li><b>S</b>ingle Responsibility — one class, one <i>reason to change</i> (one actor/stakeholder who asks for changes).</li>\n<li><b>O</b>pen/Closed — open for extension, closed for modification: new case = new class, not another <code>if</code>/<code>switch</code> branch in tested code.</li>\n<li><b>L</b>iskov Substitution — anywhere a base type is used, a derived type must work without the caller knowing or checking.</li>\n<li><b>I</b>nterface Segregation — clients should not be forced to depend on methods they do not use.</li>\n<li><b>D</b>ependency Inversion — high-level code and low-level code both depend on an abstraction; the abstraction is owned by the high-level code.</li>\n<li><b>Why they exist:</b> they reduce <b>coupling</b> (how much one class knows about another) and raise <b>cohesion</b> (how well the parts of a class belong together). Both make code easier to test and change. This is Day 1's \"composition over inheritance\" and interfaces, turned into a checklist.</li>\n</ul>\n<p><b>When to use / when not:</b> use SOLID as a <i>review lens</i> when code is hard to change or hard to test. Do not apply it pre-emptively to code that is small, stable and unlikely to change — a 40-line console tool does not need five interfaces. Pattern names (Strategy, Decorator, Factory) that implement these ideas come in Days 9–11.</p>",
        hi: "<p><b>Analogy — restaurant की kitchen:</b> हर cook का एक काम है (चॉपिंग, तंदूर, billing) — <b>S</b>। नई dish जोड़नी हो तो नया recipe card जोड़ते हैं, kitchen दोबारा नहीं बनाते — <b>O</b>। तंदूर वाला छुट्टी पर हो तो कोई भी trained cook वह station संभाल लेता है और dishes नहीं बदलतीं — <b>L</b>। Waiter को छोटी order slip मिलती है, पूरा inventory register नहीं — <b>I</b>। Kitchen \"gas connection\" (एक standard) पर depend करती है, किसी एक cylinder brand पर नहीं — <b>D</b>।</p>\n<ul>\n<li><b>S</b>ingle Responsibility — एक class, बदलने की एक <i>वजह</i> (बदलाव माँगने वाला एक actor/stakeholder)।</li>\n<li><b>O</b>pen/Closed — extension के लिए खुला, modification के लिए बंद: नया case = नई class, tested code में एक और <code>if</code>/<code>switch</code> branch नहीं।</li>\n<li><b>L</b>iskov Substitution — जहाँ base type use हो, वहाँ derived type बिना caller को पता चले या check किए चलना चाहिए।</li>\n<li><b>I</b>nterface Segregation — clients को ऐसे methods पर depend करने को मजबूर न करो जो वो use नहीं करते।</li>\n<li><b>D</b>ependency Inversion — high-level code और low-level code दोनों एक abstraction पर depend करें; abstraction high-level code की अपनी होती है।</li>\n<li><b>ये क्यों हैं:</b> ये <b>coupling</b> (एक class दूसरी के बारे में कितना जानती है) घटाते हैं और <b>cohesion</b> (class के हिस्से कितने आपस में जुड़े हैं) बढ़ाते हैं। दोनों से code test और change करना आसान होता है। यह Day 1 का \"composition over inheritance\" और interfaces है, बस checklist बनाकर।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> SOLID को <i>review lens</i> की तरह use करो जब code बदलना या test करना मुश्किल हो। जो code छोटा, stable है और शायद नहीं बदलेगा, उस पर पहले से मत थोपो — 40 line के console tool को पाँच interfaces नहीं चाहिए। इन ideas को लागू करने वाले pattern names (Strategy, Decorator, Factory) Days 9–11 में आएँगे।</p>",
        hg: "<p><b>Analogy — restaurant ki kitchen:</b> har cook ka ek kaam hai (chopping, tandoor, billing) — <b>S</b>. Nayi dish jodni ho to naya recipe card jodte hain, kitchen dobara nahi banate — <b>O</b>. Tandoor wala chhutti par ho to koi bhi trained cook woh station sambhal leta hai aur dishes nahi badalti — <b>L</b>. Waiter ko chhoti order slip milti hai, poora inventory register nahi — <b>I</b>. Kitchen \"gas connection\" (ek standard) par depend karti hai, kisi ek cylinder brand par nahi — <b>D</b>.</p>\n<ul>\n<li><b>S</b>ingle Responsibility — ek class, badalne ki ek <i>wajah</i> (badlaav maangne wala ek actor/stakeholder).</li>\n<li><b>O</b>pen/Closed — extension ke liye khula, modification ke liye band: naya case = nayi class, tested code mein ek aur <code>if</code>/<code>switch</code> branch nahi.</li>\n<li><b>L</b>iskov Substitution — jahan base type use ho, wahan derived type bina caller ko pata chale ya check kiye chalna chahiye.</li>\n<li><b>I</b>nterface Segregation — clients ko aise methods par depend karne par majboor na karo jo woh use nahi karte.</li>\n<li><b>D</b>ependency Inversion — high-level code aur low-level code dono ek abstraction par depend karein; abstraction high-level code ki apni hoti hai.</li>\n<li><b>Yeh kyun hain:</b> yeh <b>coupling</b> (ek class doosri ke baare mein kitna jaanti hai) ghatate hain aur <b>cohesion</b> (class ke hisse kitne aapas mein jude hain) badhate hain. Dono se code test aur change karna aasan hota hai. Yeh Day 1 ka \"composition over inheritance\" aur interfaces hi hai, bas checklist bana kar.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> SOLID ko <i>review lens</i> ki tarah use karo jab code badalna ya test karna mushkil ho. Jo code chhota, stable hai aur shayad nahi badlega, us par pehle se mat thopo — 40 line ke console tool ko paanch interfaces nahi chahiye. In ideas ko lagu karne wale pattern names (Strategy, Decorator, Factory) Days 9–11 mein aayenge.</p>"
      }
    },
    {
      id: "lsp-classics",
      depth: "detailed",
      title: {
        en: "LSP classics: Rectangle/Square and .NET examples",
        hi: "LSP के मशहूर उदाहरण: Rectangle/Square और .NET",
        hg: "LSP ke mashhoor udaharan: Rectangle/Square aur .NET"
      },
      body: {
        en: "<p><b>The classic:</b> a <code>Square</code> <i>is-a</i> <code>Rectangle</code> in geometry. In code, a <code>Rectangle</code> promises that setting <code>Width</code> does not change <code>Height</code>. A <code>Square</code> that keeps both sides equal breaks that promise: code written for <code>Rectangle</code> (<code>Width=5; Height=4;</code> expects area 20) silently gets 16. Compiles fine, wrong at runtime — that is what makes LSP hard to spot.</p>\n<p><b>Fix:</b> do not force the inheritance. Model what they share (<code>IShape.Area</code>) and let each type keep its own rules; immutable shapes also remove the problem.</p>\n<ul>\n<li><b>Rule of thumb:</b> a child may accept <i>more</i> and promise <i>no less</i> than its parent (weaker preconditions, stronger or equal postconditions), and must not throw new kinds of exceptions the parent never did.</li>\n<li><b>.NET example 1:</b> <code>ReadOnlyCollection&lt;T&gt;</code> implements <code>ICollection&lt;T&gt;</code>, but <code>Add</code> throws <code>NotSupportedException</code> (the contract allows it via <code>IsReadOnly</code>, and the docs say so). It is a known, documented compromise; an <code>IReadOnlyList&lt;T&gt;</code> parameter is the cleaner way to say \"I only read\".</li>\n<li><b>.NET example 2:</b> <code>Stream</code> has <code>CanRead</code>/<code>CanWrite</code>/<code>CanSeek</code> flags because not every stream can do everything; callers must check them. That is LSP bending, made explicit with capability flags.</li>\n</ul>",
        hi: "<p><b>Classic example:</b> geometry में <code>Square</code> एक <code>Rectangle</code> <i>है</i>। Code में <code>Rectangle</code> यह promise करता है कि <code>Width</code> set करने से <code>Height</code> नहीं बदलती। जो <code>Square</code> दोनों sides बराबर रखता है, वो यह promise तोड़ता है: <code>Rectangle</code> के लिए लिखा code (<code>Width=5; Height=4;</code>, area 20 की उम्मीद) चुपचाप 16 पाता है। Compile ठीक, runtime पर ग़लत — इसी वजह से LSP पकड़ना मुश्किल है।</p>\n<p><b>Fix:</b> inheritance ज़बरदस्ती मत करो। जो साझा है (<code>IShape.Area</code>) उसे model करो और हर type को अपने rules रखने दो; immutable shapes भी यह समस्या हटा देते हैं।</p>\n<ul>\n<li><b>Rule of thumb:</b> child parent से <i>ज़्यादा</i> accept कर सकता है और <i>कम नहीं</i> promise कर सकता है (कमज़ोर preconditions, मज़बूत या बराबर postconditions), और ऐसी नई तरह की exceptions नहीं फेंक सकता जो parent ने कभी नहीं फेंकीं।</li>\n<li><b>.NET example 1:</b> <code>ReadOnlyCollection&lt;T&gt;</code>, <code>ICollection&lt;T&gt;</code> implement करता है, पर <code>Add</code> <code>NotSupportedException</code> फेंकता है (contract <code>IsReadOnly</code> से इसकी इजाज़त देता है और docs में लिखा है)। यह जाना-माना, documented compromise है; \"मैं सिर्फ़ पढ़ता हूँ\" कहने का साफ़ तरीक़ा <code>IReadOnlyList&lt;T&gt;</code> parameter है।</li>\n<li><b>.NET example 2:</b> <code>Stream</code> में <code>CanRead</code>/<code>CanWrite</code>/<code>CanSeek</code> flags हैं क्योंकि हर stream सब कुछ नहीं कर सकता; callers को इन्हें check करना पड़ता है। यह LSP का झुकना है, capability flags से साफ़ किया हुआ।</li>\n</ul>",
        hg: "<p><b>Classic example:</b> geometry mein <code>Square</code> ek <code>Rectangle</code> <i>hai</i>. Code mein <code>Rectangle</code> yeh promise karta hai ki <code>Width</code> set karne se <code>Height</code> nahi badalti. Jo <code>Square</code> dono sides barabar rakhta hai, woh yeh promise todta hai: <code>Rectangle</code> ke liye likha code (<code>Width=5; Height=4;</code>, area 20 ki ummeed) chupchaap 16 paata hai. Compile theek, runtime par galat — isi wajah se LSP pakadna mushkil hai.</p>\n<p><b>Fix:</b> inheritance zabardasti mat karo. Jo saajha hai (<code>IShape.Area</code>) use model karo aur har type ko apne rules rakhne do; immutable shapes bhi yeh samasya hata dete hain.</p>\n<ul>\n<li><b>Rule of thumb:</b> child parent se <i>zyada</i> accept kar sakta hai aur <i>kam nahi</i> promise kar sakta hai (kamzor preconditions, mazboot ya barabar postconditions), aur aisi nayi tarah ki exceptions nahi phenk sakta jo parent ne kabhi nahi phenki.</li>\n<li><b>.NET example 1:</b> <code>ReadOnlyCollection&lt;T&gt;</code>, <code>ICollection&lt;T&gt;</code> implement karta hai, par <code>Add</code> <code>NotSupportedException</code> phenkta hai (contract <code>IsReadOnly</code> se iski ijaazat deta hai aur docs mein likha hai). Yeh jaana-maana, documented compromise hai; \"main sirf padhta hoon\" kehne ka saaf tareeka <code>IReadOnlyList&lt;T&gt;</code> parameter hai.</li>\n<li><b>.NET example 2:</b> <code>Stream</code> mein <code>CanRead</code>/<code>CanWrite</code>/<code>CanSeek</code> flags hain kyunki har stream sab kuch nahi kar sakta; callers ko inhe check karna padta hai. Yeh LSP ka jhukna hai, capability flags se saaf kiya hua.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "Bad: Square breaks the Rectangle contract (runs)",
            hi: "Bad: Square, Rectangle का contract तोड़ता है (run होता है)",
            hg: "Bad: Square, Rectangle ka contract todta hai (run hota hai)"
          },
          src: "Console.WriteLine(AreaAfterResize(new Rectangle()));\nConsole.WriteLine(AreaAfterResize(new Square()));   // caller expected 20\n\nstatic int AreaAfterResize(Rectangle r)\n{\n    r.Width = 5;\n    r.Height = 4;\n    return r.Area;\n}\n\npublic class Rectangle\n{\n    public virtual int Width { get; set; }\n    public virtual int Height { get; set; }\n    public int Area => Width * Height;\n}\n\npublic class Square : Rectangle\n{\n    public override int Width\n    {\n        get => base.Width;\n        set { base.Width = value; base.Height = value; }\n    }\n\n    public override int Height\n    {\n        get => base.Height;\n        set { base.Width = value; base.Height = value; }\n    }\n}",
          check: "run",
          expected: "20\n16"
        },
        {
          caption: {
            en: ".NET: the documented LSP compromises — ReadOnlyCollection and Stream flags (runs)",
            hi: ".NET: documented LSP compromises — ReadOnlyCollection और Stream flags (run होता है)",
            hg: ".NET: documented LSP compromises — ReadOnlyCollection aur Stream flags (run hota hai)"
          },
          src: "ICollection<int> items = new System.Collections.ObjectModel.ReadOnlyCollection<int>(new List<int> { 1, 2 });\nConsole.WriteLine(items.IsReadOnly);\ntry { items.Add(3); }\ncatch (NotSupportedException) { Console.WriteLine(\"Add -> NotSupportedException\"); }\n\n// A better signature: say \"read only\" in the type, no runtime surprise possible.\nstatic int Sum(IReadOnlyList<int> numbers) => numbers.Sum();\nConsole.WriteLine(Sum(new List<int> { 1, 2, 3 }));\n\nusing var ms = new MemoryStream(new byte[4], writable: false);\nConsole.WriteLine($\"CanSeek={ms.CanSeek}, CanWrite={ms.CanWrite}\");",
          check: "run",
          expected: "True\nAdd -> NotSupportedException\n6\nCanSeek=True, CanWrite=False"
        }
      ]
    },
    {
      id: "isp-in-dotnet",
      depth: "detailed",
      title: {
        en: "ISP in .NET: where you already use it",
        hi: "ISP .NET में: जहाँ आप इसे पहले से इस्तेमाल करते हैं",
        hg: "ISP .NET mein: jahan aap ise pehle se use karte hain"
      },
      body: {
        en: "<ul><li><code>IEnumerable&lt;T&gt;</code> means \"I only loop\"; <code>IReadOnlyList&lt;T&gt;</code> adds <code>Count</code> and an indexer; <code>IList&lt;T&gt;</code> adds changing the list. Ask for the smallest one that does your job.</li><li><code>IDisposable</code> and <code>IAsyncDisposable</code> are separate on purpose. <code>IEquatable&lt;T&gt;</code> and <code>IComparable&lt;T&gt;</code> each do one thing.</li><li>The classic textbook case: an <code>IMultiFunctionDevice</code> with <code>Print</code>, <code>Scan</code> and <code>Fax</code> forces a simple printer to throw for two of them. Split it into <code>IPrinter</code>, <code>IScanner</code>, <code>IFax</code>. It is the same fix as the ticket repository in lesson 4.</li></ul>",
        hi: "<ul><li><code>IEnumerable&lt;T&gt;</code> का मतलब \"मैं सिर्फ़ loop करता हूँ\"; <code>IReadOnlyList&lt;T&gt;</code> में <code>Count</code> और indexer जुड़ता है; <code>IList&lt;T&gt;</code> में list बदलना भी जुड़ता है। अपने काम लायक सबसे छोटा माँगो।</li><li><code>IDisposable</code> और <code>IAsyncDisposable</code> जान-बूझकर अलग हैं। <code>IEquatable&lt;T&gt;</code> और <code>IComparable&lt;T&gt;</code> हर एक सिर्फ़ एक काम करता है।</li><li>किताबों का पुराना उदाहरण: <code>Print</code>, <code>Scan</code> और <code>Fax</code> वाला <code>IMultiFunctionDevice</code> सादे printer को दो methods पर exception फेंकने को मजबूर करता है। इसे <code>IPrinter</code>, <code>IScanner</code>, <code>IFax</code> में बाँट दो। यह वही इलाज है जो पाठ 4 में ticket repository का था।</li></ul>",
        hg: "<ul><li><code>IEnumerable&lt;T&gt;</code> ka matlab \"main sirf loop karta hoon\"; <code>IReadOnlyList&lt;T&gt;</code> mein <code>Count</code> aur indexer judta hai; <code>IList&lt;T&gt;</code> mein list badalna bhi judta hai. Apne kaam laayak sabse chhota maango.</li><li><code>IDisposable</code> aur <code>IAsyncDisposable</code> jaan-boojhkar alag hain. <code>IEquatable&lt;T&gt;</code> aur <code>IComparable&lt;T&gt;</code> har ek sirf ek kaam karta hai.</li><li>Kitaabon ka purana udaharan: <code>Print</code>, <code>Scan</code> aur <code>Fax</code> wala <code>IMultiFunctionDevice</code> saade printer ko do methods par exception phenkne ko majboor karta hai. Ise <code>IPrinter</code>, <code>IScanner</code>, <code>IFax</code> mein baant do. Ye wahi ilaaj hai jo lesson 4 mein ticket repository ka tha.</li></ul>"
      }
    },
    {
      id: "container-details",
      depth: "detailed",
      title: {
        en: "Container details: resolution and lifetimes",
        hi: "Container की बारीकियाँ: resolution और lifetimes",
        hg: "Container ki baarikiyan: resolution aur lifetimes"
      },
      body: {
        en: "<ul><li><b>Last registration wins.</b> If the same service is registered twice, <code>GetRequiredService</code> returns the last one. <code>GetServices&lt;T&gt;</code>, or an injected <code>IEnumerable&lt;T&gt;</code>, returns all of them in registration order.</li><li><b>OCP meets DI.</b> Register every <code>ISlaRule</code>, inject <code>IEnumerable&lt;ISlaRule&gt;</code> into the calculator, and a new rule needs one new class plus one registration line. Remember that \"first match wins\", so registration order is the rule order.</li><li><b>Lifetimes:</b> Transient (new each time), Scoped (one per scope; in ASP.NET Core, one per HTTP request), Singleton (one for the whole app). Never inject a shorter-lived service (Scoped) into a longer-lived one (Singleton). The singleton keeps it alive forever: a <i>captive dependency</i>.</li><li><b>Who catches it?</b> A plain <code>BuildServiceProvider()</code> does <i>not</i> check: the captive dependency silently works. With <code>ValidateScopes = true</code> (ASP.NET Core turns it on in Development) resolving that singleton throws <code>InvalidOperationException</code> (\"Cannot consume scoped service ... from singleton ...\"), and so does resolving a scoped service from the root provider. <code>ValidateOnBuild</code> (also on in Development) reports it at startup instead.</li></ul>",
        hi: "<ul><li><b>आख़िरी registration जीतती है।</b> एक ही service दो बार register हो तो <code>GetRequiredService</code> आख़िरी वाली देता है। <code>GetServices&lt;T&gt;</code>, या inject किया हुआ <code>IEnumerable&lt;T&gt;</code>, सब registration के क्रम में देता है।</li><li><b>OCP और DI का मेल।</b> हर <code>ISlaRule</code> register करो, calculator में <code>IEnumerable&lt;ISlaRule&gt;</code> inject करो, और नए rule के लिए एक नई class और एक registration line काफ़ी है। याद रखो \"पहला match जीतता है\", इसलिए registration का क्रम ही rules का क्रम है।</li><li><b>Lifetimes:</b> Transient (हर बार नया), Scoped (हर scope में एक; ASP.NET Core में हर HTTP request पर एक), Singleton (पूरे app में एक)। छोटी उम्र वाली service (Scoped) को लम्बी उम्र वाली (Singleton) में कभी inject मत करो। Singleton उसे हमेशा ज़िंदा रखता है: <i>captive dependency</i>।</li><li><b>इसे पकड़ता कौन है?</b> सादा <code>BuildServiceProvider()</code> जाँच <i>नहीं</i> करता: captive dependency चुपचाप चल जाती है। <code>ValidateScopes = true</code> हो (ASP.NET Core इसे Development में चालू करता है) तो उस singleton को resolve करते ही <code>InvalidOperationException</code> आता है (\"Cannot consume scoped service ... from singleton ...\"), और root provider से scoped service माँगने पर भी। <code>ValidateOnBuild</code> (यह भी Development में चालू) यही ग़लती startup पर ही बता देता है।</li></ul>",
        hg: "<ul><li><b>Aakhri registration jeetti hai.</b> Ek hi service do baar register ho to <code>GetRequiredService</code> aakhri wali deta hai. <code>GetServices&lt;T&gt;</code>, ya inject kiya hua <code>IEnumerable&lt;T&gt;</code>, sab registration ke kram mein deta hai.</li><li><b>OCP aur DI ka mel.</b> Har <code>ISlaRule</code> register karo, calculator mein <code>IEnumerable&lt;ISlaRule&gt;</code> inject karo, aur naye rule ke liye ek nayi class aur ek registration line kaafi hai. Yaad rakho \"pehla match jeetta hai\", isliye registration ka kram hi rules ka kram hai.</li><li><b>Lifetimes:</b> Transient (har baar naya), Scoped (har scope mein ek; ASP.NET Core mein har HTTP request par ek), Singleton (poore app mein ek). Chhoti umr wali service (Scoped) ko lambi umr wali (Singleton) mein kabhi inject mat karo. Singleton use hamesha zinda rakhta hai: <i>captive dependency</i>.</li><li><b>Ise pakadta kaun hai?</b> Saada <code>BuildServiceProvider()</code> jaanch <i>nahi</i> karta: captive dependency chupchaap chal jaati hai. <code>ValidateScopes = true</code> ho (ASP.NET Core ise Development mein chaalu karta hai) to us singleton ko resolve karte hi <code>InvalidOperationException</code> aata hai (\"Cannot consume scoped service ... from singleton ...\"), aur root provider se scoped service maangne par bhi. <code>ValidateOnBuild</code> (ye bhi Development mein chaalu) yahi galti startup par hi bata deta hai.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "Two registrations for one interface (runs)",
            hi: "एक interface के लिए दो registrations (चलता है)",
            hg: "Ek interface ke liye do registrations (chalta hai)"
          },
          packages: [
            "Microsoft.Extensions.DependencyInjection"
          ],
          src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddSingleton<INotifier, SmsNotifier>();\nservices.AddSingleton<INotifier, EmailNotifier>();   // registered last\n\nusing var provider = services.BuildServiceProvider();\nConsole.WriteLine(provider.GetRequiredService<INotifier>().GetType().Name);\nConsole.WriteLine(string.Join(\", \", provider.GetServices<INotifier>().Select(n => n.GetType().Name)));\n\npublic interface INotifier { void Send(string to, string message); }\n\npublic class SmsNotifier : INotifier\n{\n    public void Send(string to, string message) => Console.WriteLine($\"SMS to {to}: {message}\");\n}\n\npublic class EmailNotifier : INotifier\n{\n    public void Send(string to, string message) => Console.WriteLine($\"Email to {to}: {message}\");\n}",
          check: "run",
          expected: "EmailNotifier\nSmsNotifier, EmailNotifier"
        }
      ]
    },
    {
      id: "solid-in-review",
      depth: "detailed",
      title: {
        en: "TL angle: SOLID in code review, and the over-engineering trap",
        hi: "TL angle: Code review में SOLID, और over-engineering का जाल",
        hg: "TL angle: Code review mein SOLID, aur over-engineering ka jaal"
      },
      body: {
        en: "<p><b>How a Tech Lead uses SOLID in a pull request</b> — ask a question, do not quote a principle:</p>\n<ul>\n<li><b>S:</b> \"This class changes if tax rules <i>or</i> email text change — can we separate them?\" Smells: 600+ lines, \"Manager/Helper\" names, constructor with 8+ parameters.</li>\n<li><b>O:</b> \"This <code>switch</code> on type appears in three places — what happens when we add a fourth?\"</li>\n<li><b>L:</b> \"This override throws <code>NotSupportedException</code> — is it really a <code>Base</code>? Could we use a smaller interface?\"</li>\n<li><b>I:</b> \"Do all callers need these 7 methods? A fake in tests implements 6 empty ones.\"</li>\n<li><b>D:</b> \"<code>new HttpClient()</code> / <code>DateTime.Now</code> / <code>File.*</code> inside business logic — can we inject it (<code>IHttpClientFactory</code>, <code>TimeProvider</code>)?\"</li>\n</ul>\n<p><b>Over-engineering smells</b> (equally review-worthy): an interface with exactly one implementation and no fake (<code>IFooService</code> + <code>FooService</code> for everything); a factory for a class with one constructor; <code>IRepository&lt;T&gt;</code> wrapped around EF Core \"so we can swap the database\" when no one will; abstract base classes with one child; five layers of mapping for a CRUD screen.</p>\n<ul>\n<li><b>YAGNI</b> (\"you aren't gonna need it\") + <b>rule of three</b>: tolerate duplication once or twice, abstract on the third. Refactoring toward SOLID later is cheap with tests; a wrong abstraction is expensive to remove.</li>\n<li>Be consistent with your team's conventions and keep review comments about <i>change cost</i> (\"this will hurt when…\"), not about purity.</li>\n<li>For legacy code: add a seam (extract interface at the boundary), get a test green, then refactor in small steps. No big-bang rewrite.</li>\n</ul>\n<p><b>When to use / when not:</b> push for SOLID at boundaries, in code that changes often, and in code that needs tests. Relax it in throw-away scripts, small stable utilities and simple CRUD. Judgement — and writing the reason in the review comment — is the TL skill being tested.</p>",
        hi: "<p><b>Tech Lead pull request में SOLID कैसे use करता है</b> — principle quote मत करो, सवाल पूछो:</p>\n<ul>\n<li><b>S:</b> \"यह class tax rules बदलने पर <i>या</i> email text बदलने पर बदलेगी — इन्हें अलग कर सकते हैं?\" Smells: 600+ lines, \"Manager/Helper\" नाम, 8+ parameters वाला constructor।</li>\n<li><b>O:</b> \"type पर यह <code>switch</code> तीन जगह है — चौथा जोड़ेंगे तो क्या होगा?\"</li>\n<li><b>L:</b> \"यह override <code>NotSupportedException</code> फेंकता है — क्या यह सच में <code>Base</code> है? छोटा interface use कर सकते हैं?\"</li>\n<li><b>I:</b> \"क्या सब callers को ये 7 methods चाहिए? Tests का fake 6 ख़ाली methods implement करता है।\"</li>\n<li><b>D:</b> \"Business logic के अंदर <code>new HttpClient()</code> / <code>DateTime.Now</code> / <code>File.*</code> — क्या इन्हें inject कर सकते हैं (<code>IHttpClientFactory</code>, <code>TimeProvider</code>)?\"</li>\n</ul>\n<p><b>Over-engineering smells</b> (review में उतने ही ज़रूरी): ऐसा interface जिसकी एक ही implementation है और कोई fake नहीं (हर चीज़ के लिए <code>IFooService</code> + <code>FooService</code>); एक constructor वाली class के लिए factory; EF Core के ऊपर <code>IRepository&lt;T&gt;</code> \"ताकि database बदल सकें\" जबकि कोई नहीं बदलेगा; एक child वाली abstract base classes; CRUD screen के लिए mapping की पाँच layers।</p>\n<ul>\n<li><b>YAGNI</b> (\"you aren't gonna need it\") + <b>rule of three</b>: duplication एक-दो बार सह लो, तीसरी बार abstract करो। Tests हों तो बाद में SOLID की तरफ़ refactor सस्ता है; ग़लत abstraction हटाना महँगा।</li>\n<li>Team की conventions के साथ consistent रहो और review comments <i>बदलाव की लागत</i> (\"यह तब दुखेगा जब…\") के बारे में रखो, शुद्धता के बारे में नहीं।</li>\n<li>Legacy code के लिए: seam जोड़ो (boundary पर interface निकालो), एक test green करो, फिर छोटे steps में refactor करो। Big-bang rewrite नहीं।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> boundaries पर, अक्सर बदलने वाले code में और जिस code को tests चाहिए वहाँ SOLID पर ज़ोर दो। Throw-away scripts, छोटी stable utilities और simple CRUD में ढील दो। Judgement — और review comment में वजह लिखना — यही TL skill है जो परखी जाती है।</p>",
        hg: "<p><b>Tech Lead pull request mein SOLID kaise use karta hai</b> — principle quote mat karo, sawaal poochho:</p>\n<ul>\n<li><b>S:</b> \"Yeh class tax rules badalne par <i>ya</i> email text badalne par badlegi — inhe alag kar sakte hain?\" Smells: 600+ lines, \"Manager/Helper\" naam, 8+ parameters wala constructor.</li>\n<li><b>O:</b> \"type par yeh <code>switch</code> teen jagah hai — chautha jodenge to kya hoga?\"</li>\n<li><b>L:</b> \"Yeh override <code>NotSupportedException</code> phenkta hai — kya yeh sach mein <code>Base</code> hai? Chhota interface use kar sakte hain?\"</li>\n<li><b>I:</b> \"Kya sab callers ko yeh 7 methods chahiye? Tests ka fake 6 khaali methods implement karta hai.\"</li>\n<li><b>D:</b> \"Business logic ke andar <code>new HttpClient()</code> / <code>DateTime.Now</code> / <code>File.*</code> — kya inhe inject kar sakte hain (<code>IHttpClientFactory</code>, <code>TimeProvider</code>)?\"</li>\n</ul>\n<p><b>Over-engineering smells</b> (review mein utne hi zaroori): aisa interface jiski ek hi implementation hai aur koi fake nahi (har cheez ke liye <code>IFooService</code> + <code>FooService</code>); ek constructor wali class ke liye factory; EF Core ke upar <code>IRepository&lt;T&gt;</code> \"taaki database badal sakein\" jabki koi nahi badlega; ek child wali abstract base classes; CRUD screen ke liye mapping ki paanch layers.</p>\n<ul>\n<li><b>YAGNI</b> (\"you aren't gonna need it\") + <b>rule of three</b>: duplication ek-do baar sah lo, teesri baar abstract karo. Tests hon to baad mein SOLID ki taraf refactor sasta hai; galat abstraction hatana mehenga.</li>\n<li>Team ki conventions ke saath consistent raho aur review comments <i>badlaav ki laagat</i> (\"yeh tab dukhega jab…\") ke baare mein rakho, shuddhta ke baare mein nahi.</li>\n<li>Legacy code ke liye: seam jodo (boundary par interface nikalo), ek test green karo, phir chhote steps mein refactor karo. Big-bang rewrite nahi.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> boundaries par, aksar badalne wale code mein aur jis code ko tests chahiye wahan SOLID par zor do. Throw-away scripts, chhoti stable utilities aur simple CRUD mein dheel do. Judgement — aur review comment mein wajah likhna — yahi TL skill hai jo parkhi jaati hai.</p>"
      },
      code: [
        {
          caption: {
            en: "Over-engineered vs fine: not every class needs an interface (compiles)",
            hi: "Over-engineered vs ठीक: हर class को interface नहीं चाहिए (compile होता है)",
            hg: "Over-engineered vs theek: har class ko interface nahi chahiye (compile hota hai)"
          },
          src: "// Smell: one implementation, no I/O, nothing to fake, never changes.\npublic interface IPriceFormatter { string Format(decimal price); }\npublic class PriceFormatter : IPriceFormatter\n{\n    public string Format(decimal price) => price.ToString(\"C\");\n}\n\n// Simpler, and equally testable: a pure function needs no abstraction.\npublic static class Price\n{\n    public static string Format(decimal price) => price.ToString(\"C\");\n}\n\n// Worth an interface: touches the outside world and you want to fake it.\npublic interface IPaymentGateway\n{\n    Task<bool> ChargeAsync(string customerId, decimal amount);\n}",
          check: "compile"
        }
      ]
    }
  ],
  qa: [
    {
      id: "what-is-solid",
      depth: "short",
      q: "What is SOLID, and why do we care about it?",
      answer: "SOLID is five design principles — Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion — that reduce coupling and ease change and testing. I treat them as guidelines, not laws.",
      meaning: {
        hi: "SOLID पाँच design principles हैं जो coupling घटाते हैं और code को बदलना और test करना आसान रखते हैं। मैं इन्हें उस code के guidelines मानता हूँ जो बदलता है, कानून नहीं।",
        hg: "SOLID paanch design principles hain jo coupling ghatate hain aur code ko badalna aur test karna aasan rakhte hain. Main inhe us code ke guidelines manta hoon jo badalta hai, kanoon nahi."
      },
      explain: {
        en: "<ul>\n<li><b>S</b> one reason to change; <b>O</b> extend by adding code; <b>L</b> subtypes are substitutable; <b>I</b> small interfaces; <b>D</b> depend on abstractions.</li>\n<li>Goal: <b>low coupling, high cohesion</b>. The payoff is cheaper change and easier unit tests.</li>\n<li>The principles were popularised by Robert C. Martin (\"Uncle Bob\"); OCP comes from Bertrand Meyer (1988), LSP from Barbara Liskov, and the SOLID acronym was coined by Michael Feathers.</li>\n</ul>\n<p><b>TL angle:</b> explain it through consequences (\"this makes the payment change a one-file change\") rather than reciting the acronym.</p>\n<p>Follow-up: \"Do you always follow SOLID?\" — No; at boundaries and in volatile code yes, in tiny stable code no (YAGNI).</p>",
        hi: "<ul>\n<li><b>S</b> बदलने की एक वजह; <b>O</b> code जोड़कर extend करो; <b>L</b> subtypes बदले जा सकें; <b>I</b> छोटे interfaces; <b>D</b> abstractions पर depend करो।</li>\n<li>Goal: <b>कम coupling, ज़्यादा cohesion</b>। फ़ायदा: बदलाव सस्ता और unit tests आसान।</li>\n<li>इन principles को Robert C. Martin (\"Uncle Bob\") ने popular किया; OCP Bertrand Meyer (1988) से आया, LSP Barbara Liskov का है, और SOLID acronym Michael Feathers ने बनाया।</li>\n</ul>\n<p><b>TL angle:</b> acronym रटने की जगह नतीजे बताओ (\"इससे payment बदलना एक-file का काम हो जाता है\")।</p>\n<p>Follow-up: \"क्या आप हमेशा SOLID follow करते हो?\" — नहीं; boundaries और बदलने वाले code में हाँ, छोटे stable code में नहीं (YAGNI)।</p>",
        hg: "<ul>\n<li><b>S</b> badalne ki ek wajah; <b>O</b> code jodkar extend karo; <b>L</b> subtypes badle ja sakein; <b>I</b> chhote interfaces; <b>D</b> abstractions par depend karo.</li>\n<li>Goal: <b>kam coupling, zyada cohesion</b>. Fayda: badlaav sasta aur unit tests aasan.</li>\n<li>In principles ko Robert C. Martin (\"Uncle Bob\") ne popular kiya; OCP Bertrand Meyer (1988) se aaya, LSP Barbara Liskov ka hai, aur SOLID acronym Michael Feathers ne banaya.</li>\n</ul>\n<p><b>TL angle:</b> acronym ratne ki jagah nateeje batao (\"isse payment badalna ek-file ka kaam ho jaata hai\").</p>\n<p>Follow-up: \"Kya aap hamesha SOLID follow karte ho?\" — Nahi; boundaries aur badalne wale code mein haan, chhote stable code mein nahi (YAGNI).</p>"
      }
    },
    {
      id: "srp-meaning",
      depth: "short",
      q: "What does the Single Responsibility Principle mean? Give an example.",
      answer: "A class should have one reason to change — one stakeholder asking for changes. An OrderService that validates, saves and builds emails has three; I split it into validator, store and notifier.",
      meaning: {
        hi: "Class के बदलने की एक ही वजह होनी चाहिए — बदलाव माँगने वाला एक stakeholder। जो OrderService validate, file में save और email बनाता है उसकी तीन वजहें हैं; मैं उसे validator, store और notifier में बाँटता हूँ।",
        hg: "Class ke badalne ki ek hi wajah honi chahiye — badlaav maangne wala ek stakeholder. Jo OrderService validate, file mein save aur email banata hai uski teen wajahein hain; main use validator, store aur notifier mein baanta hoon."
      },
      explain: {
        en: "<ul>\n<li>\"Responsibility\" = <b>reason to change</b>, not \"does one thing\" or \"has one method\".</li>\n<li>Ask: <i>who</i> would request a change to this class? If the answer is \"finance and marketing and the DBA\", split it.</li>\n<li>Benefits: smaller tests, fewer merge conflicts, safer changes.</li>\n<li>Limit: do not shred a small class into tiny pieces; wait for a second reason to change.</li>\n</ul>\n<p>Follow-up: \"Is a controller that calls a service SRP-compliant?\" — Yes: the controller handles HTTP concerns, the service handles business rules.</p>",
        hi: "<ul>\n<li>\"Responsibility\" = <b>बदलने की वजह</b>, \"एक काम करती है\" या \"एक method है\" नहीं।</li>\n<li>पूछो: इस class में बदलाव <i>कौन</i> माँगेगा? जवाब \"finance, marketing और DBA\" हो तो बाँटो।</li>\n<li>फ़ायदे: छोटे tests, कम merge conflicts, सुरक्षित बदलाव।</li>\n<li>Limit: छोटी class को टुकड़े-टुकड़े मत करो; दूसरी वजह आने का इंतज़ार करो।</li>\n</ul>\n<p>Follow-up: \"Service call करने वाला controller क्या SRP-compliant है?\" — हाँ: controller HTTP की बातें सँभालता है, service business rules।</p>",
        hg: "<ul>\n<li>\"Responsibility\" = <b>badalne ki wajah</b>, \"ek kaam karti hai\" ya \"ek method hai\" nahi.</li>\n<li>Poochho: is class mein badlaav <i>kaun</i> maangega? Jawab \"finance, marketing aur DBA\" ho to baanto.</li>\n<li>Fayde: chhote tests, kam merge conflicts, surakshit badlaav.</li>\n<li>Limit: chhoti class ko tukde-tukde mat karo; doosri wajah aane ka intezaar karo.</li>\n</ul>\n<p>Follow-up: \"Service call karne wala controller kya SRP-compliant hai?\" — Haan: controller HTTP ki baatein sambhalta hai, service business rules.</p>"
      }
    },
    {
      id: "ocp-csharp",
      depth: "short",
      q: "Explain the Open/Closed Principle. How do you achieve it in C#?",
      answer: "Open for extension, closed for modification: new behaviour comes from adding a class, not editing tested code. In C# I use interfaces and polymorphism (Strategy) and register implementations in DI.",
      meaning: {
        hi: "Classes extension के लिए खुली और modification के लिए बंद हों: नया behaviour नई class जोड़कर आए, tested code edit करके नहीं। C# में मैं interface या abstract member और polymorphism (Strategy idea) use करता हूँ और implementations DI में register करता हूँ।",
        hg: "Classes extension ke liye khuli aur modification ke liye band hon: naya behaviour nayi class jodkar aaye, tested code edit karke nahi. C# mein main interface ya abstract member aur polymorphism (Strategy idea) use karta hoon aur implementations DI mein register karta hoon."
      },
      explain: {
        en: "<ul>\n<li>Smell: a <code>switch</code>/<code>if-else</code> on a type or enum that grows with every feature.</li>\n<li>Fix: extract <code>IDiscountPolicy</code>; each case is a class; the caller takes the interface. New rule = new class + one DI line.</li>\n<li>With DI: inject <code>IEnumerable&lt;IDiscountPolicy&gt;</code> and pick/apply the right one.</li>\n<li>Not \"never edit a file\": bug fixes still edit code. OCP is about <i>adding</i> behaviour safely.</li>\n</ul>\n<p>Follow-up: \"Is a switch always an OCP violation?\" — See the detailed question on switch.</p>",
        hi: "<ul>\n<li>Smell: type या enum पर <code>switch</code>/<code>if-else</code> जो हर feature के साथ बढ़ता है।</li>\n<li>Fix: <code>IDiscountPolicy</code> निकालो; हर case एक class; caller interface लेता है। नया rule = नई class + DI की एक line।</li>\n<li>DI के साथ: <code>IEnumerable&lt;IDiscountPolicy&gt;</code> inject करो और सही वाली चुनकर apply करो।</li>\n<li>\"कभी file edit मत करो\" नहीं: bug fixes में code edit होता ही है। OCP behaviour को सुरक्षित तरीक़े से <i>जोड़ने</i> की बात है।</li>\n</ul>\n<p>Follow-up: \"क्या switch हमेशा OCP violation है?\" — switch वाला detailed सवाल देखो।</p>",
        hg: "<ul>\n<li>Smell: type ya enum par <code>switch</code>/<code>if-else</code> jo har feature ke saath badhta hai.</li>\n<li>Fix: <code>IDiscountPolicy</code> nikalo; har case ek class; caller interface leta hai. Naya rule = nayi class + DI ki ek line.</li>\n<li>DI ke saath: <code>IEnumerable&lt;IDiscountPolicy&gt;</code> inject karo aur sahi wali chunkar apply karo.</li>\n<li>\"Kabhi file edit mat karo\" nahi: bug fixes mein code edit hota hi hai. OCP behaviour ko surakshit tareeke se <i>jodne</i> ki baat hai.</li>\n</ul>\n<p>Follow-up: \"Kya switch hamesha OCP violation hai?\" — switch wala detailed sawaal dekho.</p>"
      }
    },
    {
      id: "lsp-example",
      depth: "short",
      q: "What is the Liskov Substitution Principle? Give an example of a violation.",
      answer: "Anywhere a base type is expected, any derived type must work without the caller knowing the difference. Classic violation: Square inheriting Rectangle, where setting Width also changes Height and breaks callers that expect independent sides.",
      meaning: {
        hi: "जहाँ base type expected हो, वहाँ कोई भी derived type बिना caller को फ़र्क़ पता चले चलना चाहिए। Classic violation: Square का Rectangle से inherit करना, जहाँ Width set करने से Height भी बदलती है और वे callers टूटते हैं जो अलग-अलग sides की उम्मीद करते हैं।",
        hg: "Jahan base type expected ho, wahan koi bhi derived type bina caller ko farq pata chale chalna chahiye. Classic violation: Square ka Rectangle se inherit karna, jahan Width set karne se Height bhi badalti hai aur woh callers tootte hain jo alag-alag sides ki ummeed karte hain."
      },
      explain: {
        en: "<ul>\n<li>Barbara Liskov's idea: if <code>S</code> is a subtype of <code>T</code>, objects of <code>T</code> can be replaced by <code>S</code> without breaking the program.</li>\n<li>It is about <b>behavioural contracts</b>, not just compiling signatures: preconditions, postconditions, invariants, exceptions.</li>\n<li>Typical C# violations: override throws <code>NotSupportedException</code>; override ignores a parameter or returns a different \"kind\" of result; client code checks <code>is Square</code>.</li>\n<li>Fix: smaller interface, composition, or immutable types.</li>\n</ul>\n<p>Follow-up: \"How would you detect it in a code review?\" — look for type checks and exception-throwing overrides.</p>",
        hi: "<ul>\n<li>Barbara Liskov का idea: अगर <code>S</code>, <code>T</code> का subtype है तो <code>T</code> के objects को <code>S</code> से बदलने पर program नहीं टूटना चाहिए।</li>\n<li>यह सिर्फ़ compile होने वाले signatures की नहीं, <b>behavioural contracts</b> की बात है: preconditions, postconditions, invariants, exceptions।</li>\n<li>C# के आम violations: override <code>NotSupportedException</code> फेंके; override parameter ignore करे या अलग \"किस्म\" का result दे; client code <code>is Square</code> check करे।</li>\n<li>Fix: छोटा interface, composition, या immutable types।</li>\n</ul>\n<p>Follow-up: \"Code review में इसे कैसे पकड़ोगे?\" — type checks और exception फेंकने वाले overrides देखो।</p>",
        hg: "<ul>\n<li>Barbara Liskov ka idea: agar <code>S</code>, <code>T</code> ka subtype hai to <code>T</code> ke objects ko <code>S</code> se badalne par program nahi tootna chahiye.</li>\n<li>Yeh sirf compile hone wale signatures ki nahi, <b>behavioural contracts</b> ki baat hai: preconditions, postconditions, invariants, exceptions.</li>\n<li>C# ke aam violations: override <code>NotSupportedException</code> phenke; override parameter ignore kare ya alag \"kism\" ka result de; client code <code>is Square</code> check kare.</li>\n<li>Fix: chhota interface, composition, ya immutable types.</li>\n</ul>\n<p>Follow-up: \"Code review mein ise kaise pakdoge?\" — type checks aur exception phenkne wale overrides dekho.</p>"
      },
      code: [
        {
          caption: {
            en: "A client that quietly checks the concrete type — an LSP smell (compiles)",
            hi: "Client जो चुपचाप concrete type check करता है — LSP smell (compile होता है)",
            hg: "Client jo chupchaap concrete type check karta hai — LSP smell (compile hota hai)"
          },
          src: "public abstract class Bird { public abstract void Move(); }\npublic class Sparrow : Bird { public override void Move() => Console.WriteLine(\"flies\"); }\npublic class Penguin : Bird { public override void Move() => Console.WriteLine(\"walks\"); }\n\npublic static class Zoo\n{\n    // Smell: the caller must know about subtypes. Better: model \"Fly\" as a separate capability.\n    public static void Migrate(Bird b)\n    {\n        if (b is Penguin) return;\n        b.Move();\n    }\n}",
          check: "compile"
        }
      ]
    },
    {
      id: "isp-example",
      depth: "short",
      q: "What is Interface Segregation? Where do you see it in .NET?",
      answer: "No client should be forced to depend on methods it does not use, so prefer several small interfaces to one fat one. In .NET: IReadOnlyList&lt;T&gt; vs IList&lt;T&gt;, and IDisposable and IAsyncDisposable being separate.",
      meaning: {
        hi: "किसी client को ऐसे methods पर depend करने को मजबूर नहीं करना चाहिए जो वो use नहीं करता, इसलिए एक मोटे interface की जगह कई छोटे interfaces रखो। .NET में: IReadOnlyList&lt;T&gt; vs IList&lt;T&gt;, और IDisposable व IAsyncDisposable का अलग होना।",
        hg: "Kisi client ko aise methods par depend karne par majboor nahi karna chahiye jo woh use nahi karta, isliye ek mote interface ki jagah kai chhote interfaces rakho. .NET mein: IReadOnlyList&lt;T&gt; vs IList&lt;T&gt;, aur IDisposable va IAsyncDisposable ka alag hona."
      },
      explain: {
        en: "<ul>\n<li>Symptom: implementers with empty methods or <code>throw new NotSupportedException()</code>.</li>\n<li>Design interfaces around what the <b>caller needs</b> (role interfaces): <code>IPrinter</code>, <code>IScanner</code>.</li>\n<li>Method parameters should ask for the smallest abstraction: <code>IEnumerable&lt;T&gt;</code> if you only iterate, <code>IReadOnlyList&lt;T&gt;</code> if you need Count/indexer.</li>\n<li>Limit: do not create one-method interfaces for everything — group methods that are always used together.</li>\n</ul>\n<p>Follow-up: \"Is <code>IRepository&lt;T&gt;</code> with 12 methods an ISP problem?\" — Often yes: many clients need only Get; consider splitting read and write, or use <code>DbContext</code> directly.</p>",
        hi: "<ul>\n<li>लक्षण: implementers में ख़ाली methods या <code>throw new NotSupportedException()</code>।</li>\n<li>Interfaces को <b>caller की ज़रूरत</b> के हिसाब से design करो (role interfaces): <code>IPrinter</code>, <code>IScanner</code>।</li>\n<li>Method parameters सबसे छोटी abstraction माँगें: सिर्फ़ iterate करना हो तो <code>IEnumerable&lt;T&gt;</code>, Count/indexer चाहिए तो <code>IReadOnlyList&lt;T&gt;</code>।</li>\n<li>Limit: हर चीज़ के लिए one-method interfaces मत बनाओ — जो methods हमेशा साथ use होते हैं उन्हें group करो।</li>\n</ul>\n<p>Follow-up: \"12 methods वाला <code>IRepository&lt;T&gt;</code> क्या ISP problem है?\" — अक्सर हाँ: कई clients को सिर्फ़ Get चाहिए; read और write बाँटने पर सोचो, या <code>DbContext</code> सीधे use करो।</p>",
        hg: "<ul>\n<li>Lakshan: implementers mein khaali methods ya <code>throw new NotSupportedException()</code>.</li>\n<li>Interfaces ko <b>caller ki zaroorat</b> ke hisaab se design karo (role interfaces): <code>IPrinter</code>, <code>IScanner</code>.</li>\n<li>Method parameters sabse chhoti abstraction maangein: sirf iterate karna ho to <code>IEnumerable&lt;T&gt;</code>, Count/indexer chahiye to <code>IReadOnlyList&lt;T&gt;</code>.</li>\n<li>Limit: har cheez ke liye one-method interfaces mat banao — jo methods hamesha saath use hote hain unhe group karo.</li>\n</ul>\n<p>Follow-up: \"12 methods wala <code>IRepository&lt;T&gt;</code> kya ISP problem hai?\" — Aksar haan: kai clients ko sirf Get chahiye; read aur write baantne par socho, ya <code>DbContext</code> seedha use karo.</p>"
      }
    },
    {
      id: "dip-di-ioc",
      depth: "short",
      q: "What is the difference between Dependency Inversion, Dependency Injection and an IoC container?",
      answer: "DIP is the design principle: depend on abstractions, not concretions. DI is the technique of passing dependencies in, usually via the constructor. An IoC container, like Microsoft.Extensions.DependencyInjection, is a tool that automates DI.",
      meaning: {
        hi: "DIP design principle है: abstractions पर depend करो, concrete पर नहीं। DI technique है: dependencies बाहर से देना, आमतौर पर constructor से। IoC container, जैसे Microsoft.Extensions.DependencyInjection, एक tool है जो DI को automate करता है।",
        hg: "DIP design principle hai: abstractions par depend karo, concrete par nahi. DI technique hai: dependencies bahar se dena, aamtaur par constructor se. IoC container, jaise Microsoft.Extensions.DependencyInjection, ek tool hai jo DI ko automate karta hai."
      },
      explain: {
        en: "<ul>\n<li><b>Principle → technique → tool.</b> Each can exist without the next: DIP + manual DI works with no container.</li>\n<li>You can use a container and still violate DIP: injecting concrete <code>SqlOrderRepository</code> everywhere, or injecting <code>IServiceProvider</code> and calling <code>GetService</code> (Service Locator).</li>\n<li>\"Inversion\" means the abstraction is owned by the <b>high-level</b> module (the interface lives next to the business code); the low-level detail implements it.</li>\n<li>IoC is broader still: the framework calls your code (controllers, middleware, hosted services).</li>\n</ul>\n<p>Follow-up: \"Where do you register services?\" — in one composition root: <code>Program.cs</code>.</p>",
        hi: "<ul>\n<li><b>Principle → technique → tool।</b> हर एक अगले के बिना भी हो सकता है: DIP + हाथ से DI बिना container के चलता है।</li>\n<li>Container use करके भी DIP तोड़ सकते हो: हर जगह concrete <code>SqlOrderRepository</code> inject करना, या <code>IServiceProvider</code> inject करके <code>GetService</code> call करना (Service Locator)।</li>\n<li>\"Inversion\" का मतलब: abstraction <b>high-level</b> module की होती है (interface business code के पास रहता है); low-level detail उसे implement करती है।</li>\n<li>IoC और बड़ा idea है: framework आपके code को call करता है (controllers, middleware, hosted services)।</li>\n</ul>\n<p>Follow-up: \"Services कहाँ register करते हो?\" — एक composition root में: <code>Program.cs</code>।</p>",
        hg: "<ul>\n<li><b>Principle → technique → tool.</b> Har ek agle ke bina bhi ho sakta hai: DIP + haath se DI bina container ke chalta hai.</li>\n<li>Container use karke bhi DIP tod sakte ho: har jagah concrete <code>SqlOrderRepository</code> inject karna, ya <code>IServiceProvider</code> inject karke <code>GetService</code> call karna (Service Locator).</li>\n<li>\"Inversion\" ka matlab: abstraction <b>high-level</b> module ki hoti hai (interface business code ke paas rehta hai); low-level detail use implement karti hai.</li>\n<li>IoC aur bada idea hai: framework aapke code ko call karta hai (controllers, middleware, hosted services).</li>\n</ul>\n<p>Follow-up: \"Services kahan register karte ho?\" — ek composition root mein: <code>Program.cs</code>.</p>"
      }
    },
    {
      id: "solid-over-engineering",
      depth: "short",
      q: "Can SOLID be overdone? How do you avoid over-engineering?",
      answer: "Yes. An interface per class, factories for single constructors and layers for simple CRUD add cost without benefit. I abstract at real boundaries and where change has already happened twice (YAGNI, rule of three).",
      meaning: {
        hi: "हाँ। हर class पर interface, एक constructor के लिए factory और simple CRUD के लिए layers बिना फ़ायदे के लागत बढ़ाते हैं। मैं असली boundaries पर और वहाँ abstract करता हूँ जहाँ बदलाव दो बार हो चुका हो (YAGNI, rule of three)।",
        hg: "Haan. Har class par interface, ek constructor ke liye factory aur simple CRUD ke liye layers bina fayde ke laagat badhate hain. Main asli boundaries par aur wahan abstract karta hoon jahan badlaav do baar ho chuka ho (YAGNI, rule of three)."
      },
      explain: {
        en: "<ul>\n<li>Cost of abstraction: more files, indirection when debugging, onboarding time. It must buy something: a fake in tests, a second implementation, a stable boundary.</li>\n<li>Smells: <code>IFooService</code>/<code>FooService</code> pairs with one implementation; <code>IRepository&lt;T&gt;</code> over EF Core \"to swap the DB\"; abstract base with one child.</li>\n<li>Heuristics: <b>YAGNI</b>; <b>rule of three</b> (duplicate twice, abstract the third time); start concrete and extract an interface when the need appears (it is cheap in an IDE).</li>\n<li>Under-engineering is real too: 1500-line classes with <code>new</code> everywhere. Aim for the middle.</li>\n</ul>\n<p><b>TL angle:</b> write the <i>reason</i> in the review comment so the team learns the judgement.</p>",
        hi: "<ul>\n<li>Abstraction की लागत: ज़्यादा files, debugging में indirection, नए लोगों का onboarding time। उसे कुछ ख़रीदना चाहिए: tests में fake, दूसरी implementation, stable boundary।</li>\n<li>Smells: एक implementation वाले <code>IFooService</code>/<code>FooService</code> जोड़े; EF Core के ऊपर \"DB बदलने के लिए\" <code>IRepository&lt;T&gt;</code>; एक child वाली abstract base।</li>\n<li>Heuristics: <b>YAGNI</b>; <b>rule of three</b> (दो बार duplicate करो, तीसरी बार abstract); concrete से शुरू करो और ज़रूरत पड़ने पर interface निकालो (IDE में सस्ता है)।</li>\n<li>Under-engineering भी असली है: हर जगह <code>new</code> वाली 1500-line classes। बीच का रास्ता लो।</li>\n</ul>\n<p><b>TL angle:</b> review comment में <i>वजह</i> लिखो ताकि team judgement सीखे।</p>",
        hg: "<ul>\n<li>Abstraction ki laagat: zyada files, debugging mein indirection, naye logon ka onboarding time. Use kuch kharidna chahiye: tests mein fake, doosri implementation, stable boundary.</li>\n<li>Smells: ek implementation wale <code>IFooService</code>/<code>FooService</code> jode; EF Core ke upar \"DB badalne ke liye\" <code>IRepository&lt;T&gt;</code>; ek child wali abstract base.</li>\n<li>Heuristics: <b>YAGNI</b>; <b>rule of three</b> (do baar duplicate karo, teesri baar abstract); concrete se shuru karo aur zaroorat padne par interface nikalo (IDE mein sasta hai).</li>\n<li>Under-engineering bhi asli hai: har jagah <code>new</code> wali 1500-line classes. Beech ka raasta lo.</li>\n</ul>\n<p><b>TL angle:</b> review comment mein <i>wajah</i> likho taaki team judgement seekhe.</p>"
      }
    },
    {
      id: "solid-code-review",
      depth: "short",
      q: "How do you apply SOLID during code review as a Tech Lead?",
      answer: "I ask change-cost questions instead of quoting principles: who else changes this class, what happens when we add a fourth case, can we fake this in a test. I flag over-abstraction as readily as missing abstraction.",
      meaning: {
        hi: "मैं principles quote करने की जगह change-cost के सवाल पूछता हूँ: इस class को और कौन बदलवाता है, चौथा case जोड़ेंगे तो क्या होगा, क्या इसे test में fake कर सकते हैं। Over-abstraction को भी उतनी ही आसानी से flag करता हूँ जितना missing abstraction को।",
        hg: "Main principles quote karne ki jagah change-cost ke sawaal poochta hoon: is class ko aur kaun badalwata hai, chautha case jodenge to kya hoga, kya ise test mein fake kar sakte hain. Over-abstraction ko bhi utni hi aasani se flag karta hoon jitna missing abstraction ko."
      },
      explain: {
        en: "<ul>\n<li><b>S:</b> long class, \"Manager\" name, 8+ constructor parameters. <b>O:</b> repeated <code>switch</code> on type. <b>L:</b> overrides that throw, <code>is</code> checks. <b>I:</b> empty/throwing interface members. <b>D:</b> <code>new</code> of services, <code>DateTime.Now</code>, <code>File.*</code> inside business logic.</li>\n<li>Phrase comments as questions with a consequence; link to the team's convention doc.</li>\n<li>Prefer small, incremental refactor PRs over one giant \"SOLID rewrite\".</li>\n<li>Block the PR only for real risk (hard-coded I/O in domain logic, broken contract); otherwise suggest and create a follow-up ticket.</li>\n</ul>\n<p>Follow-up: \"A senior insists on an interface for every class — what do you do?\" — ask what it buys (fake? second implementation?), agree on a team guideline, and revisit it in a retro.</p>",
        hi: "<ul>\n<li><b>S:</b> लंबी class, \"Manager\" नाम, 8+ constructor parameters। <b>O:</b> type पर दोहराया हुआ <code>switch</code>। <b>L:</b> throw करने वाले overrides, <code>is</code> checks। <b>I:</b> ख़ाली/throw करने वाले interface members। <b>D:</b> business logic के अंदर services का <code>new</code>, <code>DateTime.Now</code>, <code>File.*</code>।</li>\n<li>Comments को नतीजे वाले सवाल की तरह लिखो; team की convention doc का link दो।</li>\n<li>एक बड़े \"SOLID rewrite\" की जगह छोटे, incremental refactor PRs पसंद करो।</li>\n<li>PR को सिर्फ़ असली risk पर रोको (domain logic में hard-coded I/O, टूटा हुआ contract); बाकी में suggest करो और follow-up ticket बनाओ।</li>\n</ul>\n<p>Follow-up: \"Senior हर class के लिए interface पर अड़ा है — क्या करोगे?\" — पूछो इससे क्या मिलता है (fake? दूसरी implementation?), team guideline तय करो और retro में दोबारा देखो।</p>",
        hg: "<ul>\n<li><b>S:</b> lambi class, \"Manager\" naam, 8+ constructor parameters. <b>O:</b> type par dohraya hua <code>switch</code>. <b>L:</b> throw karne wale overrides, <code>is</code> checks. <b>I:</b> khaali/throw karne wale interface members. <b>D:</b> business logic ke andar services ka <code>new</code>, <code>DateTime.Now</code>, <code>File.*</code>.</li>\n<li>Comments ko nateeje wale sawaal ki tarah likho; team ki convention doc ka link do.</li>\n<li>Ek bade \"SOLID rewrite\" ki jagah chhote, incremental refactor PRs pasand karo.</li>\n<li>PR ko sirf asli risk par roko (domain logic mein hard-coded I/O, toota hua contract); baaki mein suggest karo aur follow-up ticket banao.</li>\n</ul>\n<p>Follow-up: \"Senior har class ke liye interface par ada hai — kya karoge?\" — poochho isse kya milta hai (fake? doosri implementation?), team guideline tay karo aur retro mein dobara dekho.</p>"
      }
    },
    {
      id: "switch-always-violation",
      depth: "detailed",
      q: "Is every switch statement an Open/Closed violation?",
      answer: "No. A switch over a small, closed set that will not grow is simple and clear. It becomes an OCP smell when the same type-switch grows with each feature or is repeated in several places.",
      meaning: {
        hi: "नहीं। छोटे, closed set पर switch जो बढ़ेगा नहीं, सीधा और साफ़ है। वो OCP smell तब बनता है जब वही type-switch हर feature के साथ बढ़े या कई जगह दोहराया जाए।",
        hg: "Nahi. Chhote, closed set par switch jo badhega nahi, seedha aur saaf hai. Woh OCP smell tab banta hai jab wahi type-switch har feature ke saath badhe ya kai jagah dohraya jaye."
      },
      explain: {
        en: "<ul>\n<li>Fine: days of week, a fixed protocol message type, mapping at the edge of the system (e.g. parsing an incoming enum), switch expressions that the compiler checks for exhaustiveness.</li>\n<li>Smell: <code>switch (customer.Type)</code> in pricing, again in invoices, again in emails. Adding a type means finding every switch.</li>\n<li>Options: polymorphism (a virtual method or strategy), a dictionary of handlers registered in DI, or keep the one switch in a <b>single factory</b> so the rest of the code is closed.</li>\n<li>Even a factory with a switch is usually acceptable: the switch is in <i>one</i> place.</li>\n</ul>\n<p>Follow-up: \"Isn't the DI registration list also a switch?\" — Yes, but it is a single composition root, not scattered business logic.</p>",
        hi: "<ul>\n<li>ठीक है: हफ़्ते के दिन, fixed protocol message type, system के किनारे पर mapping (जैसे incoming enum parse करना), switch expressions जिन्हें compiler exhaustiveness के लिए check करता है।</li>\n<li>Smell: pricing में <code>switch (customer.Type)</code>, फिर invoices में, फिर emails में। नया type जोड़ने का मतलब हर switch ढूँढना।</li>\n<li>Options: polymorphism (virtual method या strategy), DI में register किए handlers की dictionary, या एक switch को <b>एक factory</b> में रखो ताकि बाकी code closed रहे।</li>\n<li>Switch वाली factory भी आमतौर पर चल जाती है: switch <i>एक</i> जगह है।</li>\n</ul>\n<p>Follow-up: \"DI registration की list भी तो एक switch जैसी है?\" — हाँ, पर वो एक composition root है, बिखरी हुई business logic नहीं।</p>",
        hg: "<ul>\n<li>Theek hai: hafte ke din, fixed protocol message type, system ke kinare par mapping (jaise incoming enum parse karna), switch expressions jinhe compiler exhaustiveness ke liye check karta hai.</li>\n<li>Smell: pricing mein <code>switch (customer.Type)</code>, phir invoices mein, phir emails mein. Naya type jodne ka matlab har switch dhoondhna.</li>\n<li>Options: polymorphism (virtual method ya strategy), DI mein register kiye handlers ki dictionary, ya ek switch ko <b>ek factory</b> mein rakho taaki baaki code closed rahe.</li>\n<li>Switch wali factory bhi aamtaur par chal jaati hai: switch <i>ek</i> jagah hai.</li>\n</ul>\n<p>Follow-up: \"DI registration ki list bhi to ek switch jaisi hai?\" — Haan, par woh ek composition root hai, bikhri hui business logic nahi.</p>"
      }
    },
    {
      id: "lsp-dotnet",
      depth: "detailed",
      q: "Does .NET itself violate LSP? What about ReadOnlyCollection and Stream?",
      answer: "Partly, and it is documented: ICollection&lt;T&gt;.Add can throw NotSupportedException on a read-only collection, and Stream has CanRead, CanWrite and CanSeek flags. They are known compromises I avoid copying.",
      meaning: {
        hi: "कुछ हद तक, और यह documented है। Read-only collection पर ICollection&lt;T&gt;.Add NotSupportedException फेंक सकता है, और Stream में CanRead, CanWrite, CanSeek हैं क्योंकि हर stream सब कुछ support नहीं करता। ये जाने-माने compromises हैं; नए designs में मैं इन्हें दोहराता नहीं।",
        hg: "Kuch had tak, aur yeh documented hai. Read-only collection par ICollection&lt;T&gt;.Add NotSupportedException phenk sakta hai, aur Stream mein CanRead, CanWrite, CanSeek hain kyunki har stream sab kuch support nahi karta. Yeh jaane-maane compromises hain; naye designs mein main inhe dohrata nahi."
      },
      explain: {
        en: "<ul>\n<li><b>ReadOnlyCollection&lt;T&gt;</b> implements <code>IList&lt;T&gt;</code>/<code>ICollection&lt;T&gt;</code>. Its mutating methods throw <code>NotSupportedException</code>; <code>IsReadOnly</code> returns <code>true</code>. Callers could check the flag, but few do.</li>\n<li><b>Stream</b>: base class where writing/seeking is optional; a read-only <code>MemoryStream</code> has <code>CanWrite == false</code> and <code>Write</code> throws. Capability flags are the way the API makes the \"not always\" explicit.</li>\n<li><b>Later .NET design</b> prefers splitting: <code>IReadOnlyList&lt;T&gt;</code>, <code>IReadOnlyDictionary&lt;K,V&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>. (Arrays also implement <code>IList&lt;T&gt;</code> yet <code>Add</code> throws for fixed size — same family of compromise.)</li>\n<li>In your own code: take <code>IReadOnlyList&lt;T&gt;</code> parameters and return <code>IReadOnlyList&lt;T&gt;</code>/<code>IEnumerable&lt;T&gt;</code>, rather than exposing <code>List&lt;T&gt;</code> or a mutable interface you cannot honour.</li>\n</ul>\n<p>Follow-up: \"Why did the framework do this?\" — .NET 1.0/2.0 shipped before the read-only interfaces existed (<code>IReadOnlyList&lt;T&gt;</code> arrived in .NET 4.5); compatibility keeps it alive.</p>",
        hi: "<ul>\n<li><b>ReadOnlyCollection&lt;T&gt;</b> <code>IList&lt;T&gt;</code>/<code>ICollection&lt;T&gt;</code> implement करता है। उसके बदलने वाले methods <code>NotSupportedException</code> फेंकते हैं; <code>IsReadOnly</code> <code>true</code> देता है। Callers flag check कर सकते थे, पर कम ही करते हैं।</li>\n<li><b>Stream</b>: base class जहाँ writing/seeking optional है; read-only <code>MemoryStream</code> में <code>CanWrite == false</code> होता है और <code>Write</code> exception फेंकता है। Capability flags API का तरीक़ा हैं \"हमेशा नहीं\" को साफ़ बताने का।</li>\n<li><b>बाद का .NET design</b> बाँटना पसंद करता है: <code>IReadOnlyList&lt;T&gt;</code>, <code>IReadOnlyDictionary&lt;K,V&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>। (Arrays भी <code>IList&lt;T&gt;</code> implement करते हैं पर fixed size की वजह से <code>Add</code> फेंकता है — उसी परिवार का compromise।)</li>\n<li>अपने code में: <code>IReadOnlyList&lt;T&gt;</code> parameters लो और <code>IReadOnlyList&lt;T&gt;</code>/<code>IEnumerable&lt;T&gt;</code> return करो, <code>List&lt;T&gt;</code> या ऐसा mutable interface expose मत करो जिसे निभा न सको।</li>\n</ul>\n<p>Follow-up: \"Framework ने ऐसा क्यों किया?\" — .NET 1.0/2.0 read-only interfaces से पहले आए (<code>IReadOnlyList&lt;T&gt;</code> .NET 4.5 में आया); compatibility की वजह से यह बना हुआ है।</p>",
        hg: "<ul>\n<li><b>ReadOnlyCollection&lt;T&gt;</b> <code>IList&lt;T&gt;</code>/<code>ICollection&lt;T&gt;</code> implement karta hai. Uske badalne wale methods <code>NotSupportedException</code> phenkte hain; <code>IsReadOnly</code> <code>true</code> deta hai. Callers flag check kar sakte the, par kam hi karte hain.</li>\n<li><b>Stream</b>: base class jahan writing/seeking optional hai; read-only <code>MemoryStream</code> mein <code>CanWrite == false</code> hota hai aur <code>Write</code> exception phenkta hai. Capability flags API ka tareeka hain \"hamesha nahi\" ko saaf batane ka.</li>\n<li><b>Baad ka .NET design</b> baantna pasand karta hai: <code>IReadOnlyList&lt;T&gt;</code>, <code>IReadOnlyDictionary&lt;K,V&gt;</code>, <code>ImmutableArray&lt;T&gt;</code>. (Arrays bhi <code>IList&lt;T&gt;</code> implement karte hain par fixed size ki wajah se <code>Add</code> phenkta hai — usi parivar ka compromise.)</li>\n<li>Apne code mein: <code>IReadOnlyList&lt;T&gt;</code> parameters lo aur <code>IReadOnlyList&lt;T&gt;</code>/<code>IEnumerable&lt;T&gt;</code> return karo, <code>List&lt;T&gt;</code> ya aisa mutable interface expose mat karo jise nibha na sako.</li>\n</ul>\n<p>Follow-up: \"Framework ne aisa kyun kiya?\" — .NET 1.0/2.0 read-only interfaces se pehle aaye (<code>IReadOnlyList&lt;T&gt;</code> .NET 4.5 mein aaya); compatibility ki wajah se yeh bana hua hai.</p>"
      }
    },
    {
      id: "lsp-contract-rules",
      depth: "detailed",
      q: "What rules must a subclass follow to respect Liskov Substitution?",
      answer: "It must not demand more than the parent (no stronger preconditions), must not deliver less (no weaker postconditions), must keep the parent's invariants, and must not throw exceptions the parent's contract does not allow.",
      meaning: {
        hi: "Subclass parent से ज़्यादा न माँगे (कोई stronger preconditions नहीं), कम न दे (कोई weaker postconditions नहीं), parent के invariants बनाए रखे, और ऐसी exceptions न फेंके जो parent का contract allow नहीं करता।",
        hg: "Subclass parent se zyada na maange (koi stronger preconditions nahi), kam na de (koi weaker postconditions nahi), parent ke invariants banaye rakhe, aur aisi exceptions na phenke jo parent ka contract allow nahi karta."
      },
      explain: {
        en: "<ul>\n<li><b>Preconditions</b> (what the caller must supply): child may relax them, never tighten. Parent accepts any positive amount; child must not add \"and under 10,000\".</li>\n<li><b>Postconditions</b> (what the method guarantees): child may strengthen, never weaken. Parent returns a non-null list; child must not return <code>null</code>.</li>\n<li><b>Invariants</b>: the Square/Rectangle problem — \"width and height vary independently\" is an invariant of Rectangle's contract.</li>\n<li><b>Exceptions</b>: do not add new exception types for situations the parent handled.</li>\n<li>C# helps a little: return types can be more specific (covariant returns on overrides since C# 9), and <code>in</code>/<code>out</code> generic variance keeps type-safety (<code>IEnumerable&lt;Dog&gt;</code> to <code>IEnumerable&lt;Animal&gt;</code>). The compiler cannot check behavioural rules — tests and contract documentation do.</li>\n</ul>\n<p>Follow-up: \"How do you test LSP?\" — write one test suite against the base contract and run it against every implementation.</p>",
        hi: "<ul>\n<li><b>Preconditions</b> (caller को क्या देना है): child ढीला कर सकता है, कसना नहीं। Parent कोई भी positive amount लेता है; child \"और 10,000 से कम\" नहीं जोड़ सकता।</li>\n<li><b>Postconditions</b> (method क्या guarantee करता है): child मज़बूत कर सकता है, कमज़ोर नहीं। Parent non-null list देता है; child <code>null</code> नहीं दे सकता।</li>\n<li><b>Invariants</b>: Square/Rectangle की समस्या — \"width और height अलग-अलग बदलती हैं\" Rectangle के contract का invariant है।</li>\n<li><b>Exceptions</b>: उन हालात के लिए नई exception types मत जोड़ो जो parent सँभालता था।</li>\n<li>C# थोड़ी मदद करता है: return types ज़्यादा specific हो सकते हैं (C# 9 से overrides में covariant returns), और <code>in</code>/<code>out</code> generic variance type-safety बनाए रखती है (<code>IEnumerable&lt;Dog&gt;</code> से <code>IEnumerable&lt;Animal&gt;</code>)। Behavioural rules compiler check नहीं कर सकता — tests और contract documentation करते हैं।</li>\n</ul>\n<p>Follow-up: \"LSP को test कैसे करोगे?\" — base contract के against एक test suite लिखो और हर implementation पर चलाओ।</p>",
        hg: "<ul>\n<li><b>Preconditions</b> (caller ko kya dena hai): child dheela kar sakta hai, kasna nahi. Parent koi bhi positive amount leta hai; child \"aur 10,000 se kam\" nahi jod sakta.</li>\n<li><b>Postconditions</b> (method kya guarantee karta hai): child mazboot kar sakta hai, kamzor nahi. Parent non-null list deta hai; child <code>null</code> nahi de sakta.</li>\n<li><b>Invariants</b>: Square/Rectangle ki samasya — \"width aur height alag-alag badalti hain\" Rectangle ke contract ka invariant hai.</li>\n<li><b>Exceptions</b>: un haalaat ke liye nayi exception types mat jodo jo parent sambhalta tha.</li>\n<li>C# thodi madad karta hai: return types zyada specific ho sakte hain (C# 9 se overrides mein covariant returns), aur <code>in</code>/<code>out</code> generic variance type-safety banaye rakhti hai (<code>IEnumerable&lt;Dog&gt;</code> se <code>IEnumerable&lt;Animal&gt;</code>). Behavioural rules compiler check nahi kar sakta — tests aur contract documentation karte hain.</li>\n</ul>\n<p>Follow-up: \"LSP ko test kaise karoge?\" — base contract ke against ek test suite likho aur har implementation par chalao.</p>"
      }
    },
    {
      id: "di-lifetimes-captive",
      depth: "detailed",
      q: "Which DI lifetimes exist in .NET and what is a captive dependency?",
      answer: "Transient: new instance per resolve; Scoped: one per scope (a web request); Singleton: one per app. A captive dependency is a longer-lived service holding a shorter-lived one, like a singleton with a scoped DbContext.",
      meaning: {
        hi: "Transient हर resolve पर नया instance बनाता है, Scoped हर scope (web request) में एक, Singleton पूरे app में एक। Captive dependency तब है जब लंबी उम्र वाली service छोटी उम्र वाली को पकड़े रखे, जैसे singleton में scoped DbContext inject करना।",
        hg: "Transient har resolve par naya instance banata hai, Scoped har scope (web request) mein ek, Singleton poore app mein ek. Captive dependency tab hai jab lambi umar wali service chhoti umar wali ko pakde rakhe, jaise singleton mein scoped DbContext inject karna."
      },
      explain: {
        en: "<ul>\n<li><b>Rule:</b> a service may depend on services with the <b>same or longer</b> lifetime, not shorter. Singleton → Scoped is the bug.</li>\n<li>Why it hurts: the scoped object lives for the app's lifetime, is shared between concurrent requests (thread-safety), and holds stale state.</li>\n<li>Detection: the host enables scope validation in the Development environment, so the error appears at startup/first resolve; <code>ServiceProviderOptions.ValidateScopes</code> turns it on elsewhere. (A manually built provider has it off by default.)</li>\n<li>Fix: inject <code>IServiceScopeFactory</code> and create a scope per unit of work, or use <code>IDbContextFactory&lt;T&gt;</code> for contexts (see Day 5); or make the consumer scoped too.</li>\n<li>Also: singletons must be thread-safe. Transient <code>IDisposable</code> services resolved from the root provider are kept alive until the provider is disposed — resolve from a scope.</li>\n</ul>\n<p>Follow-up: \"Is <code>HttpClient</code> a singleton?\" — it is meant to be reused, not created per request. Use <code>IHttpClientFactory</code> (Day 3), or one long-lived client with <code>SocketsHttpHandler.PooledConnectionLifetime</code> set.</p>",
        hi: "<ul>\n<li><b>Rule:</b> service उन services पर depend कर सकती है जिनकी उम्र <b>बराबर या ज़्यादा</b> हो, कम नहीं। Singleton → Scoped bug है।</li>\n<li>नुकसान क्यों: scoped object app की पूरी उम्र जीता है, concurrent requests में share होता है (thread-safety) और पुराना state रखता है।</li>\n<li>Detection: host Development environment में scope validation चालू रखता है, इसलिए error startup/पहले resolve पर दिखता है; बाकी जगह <code>ServiceProviderOptions.ValidateScopes</code> से चालू करो। (हाथ से बने provider में यह default off है।)</li>\n<li>Fix: <code>IServiceScopeFactory</code> inject करो और हर unit of work का scope बनाओ, या contexts के लिए <code>IDbContextFactory&lt;T&gt;</code> (Day 5 देखो); या consumer को भी scoped बनाओ।</li>\n<li>और: singletons को thread-safe होना चाहिए। Root provider से resolve हुई transient <code>IDisposable</code> services provider dispose होने तक ज़िंदा रहती हैं — scope से resolve करो।</li>\n</ul>\n<p>Follow-up: \"क्या <code>HttpClient</code> singleton है?\" — इसे reuse करने के लिए बनाया गया है, हर request पर नया बनाने के लिए नहीं। <code>IHttpClientFactory</code> use करो (Day 3), या एक long-lived client जिसमें <code>SocketsHttpHandler.PooledConnectionLifetime</code> set हो।</p>",
        hg: "<ul>\n<li><b>Rule:</b> service un services par depend kar sakti hai jinki umar <b>barabar ya zyada</b> ho, kam nahi. Singleton → Scoped bug hai.</li>\n<li>Nuksaan kyun: scoped object app ki poori umar jeeta hai, concurrent requests mein share hota hai (thread-safety) aur purana state rakhta hai.</li>\n<li>Detection: host Development environment mein scope validation chalu rakhta hai, isliye error startup/pehle resolve par dikhta hai; baaki jagah <code>ServiceProviderOptions.ValidateScopes</code> se chalu karo. (Haath se bane provider mein yeh default off hai.)</li>\n<li>Fix: <code>IServiceScopeFactory</code> inject karo aur har unit of work ka scope banao, ya contexts ke liye <code>IDbContextFactory&lt;T&gt;</code> (Day 5 dekho); ya consumer ko bhi scoped banao.</li>\n<li>Aur: singletons ko thread-safe hona chahiye. Root provider se resolve hui transient <code>IDisposable</code> services provider dispose hone tak zinda rehti hain — scope se resolve karo.</li>\n</ul>\n<p>Follow-up: \"Kya <code>HttpClient</code> singleton hai?\" — ise reuse karne ke liye banaya gaya hai, har request par naya banane ke liye nahi. <code>IHttpClientFactory</code> use karo (Day 3), ya ek long-lived client jismein <code>SocketsHttpHandler.PooledConnectionLifetime</code> set ho.</p>"
      }
    },
    {
      id: "service-locator-antipattern",
      depth: "detailed",
      q: "Why is injecting IServiceProvider and calling GetService considered an anti-pattern?",
      answer: "It hides dependencies, so the constructor no longer shows what the class needs, failures move to runtime, and tests get harder. I inject the actual dependencies and keep the container in the composition root.",
      meaning: {
        hi: "यह dependencies छुपाता है, इसलिए constructor अब नहीं बताता कि class को क्या चाहिए, और failures startup से runtime पर चले जाते हैं। Tests भी मुश्किल होते हैं। मैं असली dependencies inject करता हूँ और container सिर्फ़ composition root में रखता हूँ।",
        hg: "Yeh dependencies chhupata hai, isliye constructor ab nahi batata ki class ko kya chahiye, aur failures startup se runtime par chale jaate hain. Tests bhi mushkil hote hain. Main asli dependencies inject karta hoon aur container sirf composition root mein rakhta hoon."
      },
      explain: {
        en: "<ul>\n<li><b>Service Locator</b> = ask a global registry for what you need, when you need it.</li>\n<li>Problems: hidden dependencies; a missing registration blows up in production on that code path, not at startup; tests must build a container or fake the provider; it invites captive-dependency bugs.</li>\n<li>Legitimate uses of <code>IServiceProvider</code>: framework or infrastructure code (middleware factories, a plug-in loader), creating scopes in a background worker (<code>IServiceScopeFactory</code>), or resolving a dependency chosen at runtime (a keyed service, or a small factory).</li>\n<li>For \"choose implementation by key\" prefer keyed services (<code>[FromKeyedServices]</code>, .NET 8+) or a small factory over a locator.</li>\n</ul>\n<p>Follow-up: \"Isn't the container itself a service locator?\" — The container is a tool; the anti-pattern is spreading it into business code.</p>",
        hi: "<ul>\n<li><b>Service Locator</b> = जो चाहिए वो एक global registry से, जब चाहिए तब माँगना।</li>\n<li>समस्याएँ: छुपी dependencies; missing registration startup पर नहीं, उस code path पर production में फटती है; tests को container बनाना या provider fake करना पड़ता है; captive-dependency bugs को न्योता।</li>\n<li><code>IServiceProvider</code> के जायज़ use: framework या infrastructure code (middleware factories, plug-in loader), background worker में scopes बनाना (<code>IServiceScopeFactory</code>), या runtime पर चुनी dependency resolve करना (keyed service, या छोटी factory)।</li>\n<li>\"Key से implementation चुनना\" हो तो locator की जगह keyed services (<code>[FromKeyedServices]</code>, .NET 8+) या छोटी factory पसंद करो।</li>\n</ul>\n<p>Follow-up: \"क्या container ख़ुद service locator नहीं है?\" — Container एक tool है; anti-pattern उसे business code में फैलाना है।</p>",
        hg: "<ul>\n<li><b>Service Locator</b> = jo chahiye woh ek global registry se, jab chahiye tab maangna.</li>\n<li>Samasyaein: chhupi dependencies; missing registration startup par nahi, us code path par production mein phatti hai; tests ko container banana ya provider fake karna padta hai; captive-dependency bugs ko nyota.</li>\n<li><code>IServiceProvider</code> ke jaayaz use: framework ya infrastructure code (middleware factories, plug-in loader), background worker mein scopes banana (<code>IServiceScopeFactory</code>), ya runtime par chuni dependency resolve karna (keyed service, ya chhoti factory).</li>\n<li>\"Key se implementation chunna\" ho to locator ki jagah keyed services (<code>[FromKeyedServices]</code>, .NET 8+) ya chhoti factory pasand karo.</li>\n</ul>\n<p>Follow-up: \"Kya container khud service locator nahi hai?\" — Container ek tool hai; anti-pattern use business code mein failana hai.</p>"
      }
    },
    {
      id: "too-many-ctor-params",
      depth: "detailed",
      q: "A class's constructor takes 9 dependencies. What does that tell you and what do you do?",
      answer: "Usually a Single Responsibility violation: the class does too many jobs. I extract clusters of dependencies that belong together into a smaller collaborator, rather than hiding it behind a facade or property injection.",
      meaning: {
        hi: "यह अक्सर Single Responsibility violation है: class बहुत सारे काम कर रही है। मैं साथ रहने वाली dependencies के clusters ढूँढकर उन्हें छोटे collaborator में निकालता हूँ, समस्या को facade या property injection के पीछे नहीं छुपाता।",
        hg: "Yeh aksar Single Responsibility violation hai: class bahut saare kaam kar rahi hai. Main saath rehne wali dependencies ke clusters dhoondhkar unhe chhote collaborator mein nikalta hoon, samasya ko facade ya property injection ke peeche nahi chhupata."
      },
      explain: {
        en: "<ul>\n<li>Constructor injection exposes design smells honestly — that is a feature, not a flaw.</li>\n<li>Look for clusters: (<code>IPriceCalculator</code>, <code>IDiscountPolicy</code>, <code>ITaxService</code>) → one <code>PricingService</code>; (<code>IEmailSender</code>, <code>ISmsSender</code>) → <code>INotifier</code>.</li>\n<li>Avoid: switching to property injection (hides the problem), a bag-of-services \"aggregate\" with no meaning, or injecting <code>IServiceProvider</code>.</li>\n<li>Maybe fine: a composition/orchestrator class (an application service, a controller) with 4–5 collaborators. A fixed number is not a rule; cohesion is.</li>\n<li>Check each method: does it use all dependencies, or does each use a different subset? Different subsets = several classes hiding in one.</li>\n</ul>\n<p>Follow-up: \"What is the 'Facade Service' pitfall?\" — wrapping 5 dependencies in one class just to reduce the constructor count, without a real concept, moves the smell instead of fixing it.</p>",
        hi: "<ul>\n<li>Constructor injection design smells को ईमानदारी से दिखाता है — यह feature है, कमी नहीं।</li>\n<li>Clusters ढूँढो: (<code>IPriceCalculator</code>, <code>IDiscountPolicy</code>, <code>ITaxService</code>) → एक <code>PricingService</code>; (<code>IEmailSender</code>, <code>ISmsSender</code>) → <code>INotifier</code>।</li>\n<li>बचो: property injection पर जाना (समस्या छुपाता है), बिना मतलब की services का \"aggregate\" थैला, या <code>IServiceProvider</code> inject करना।</li>\n<li>शायद ठीक: orchestrator/composition class (controller जैसी) जिसमें 4–5 collaborators हों। संख्या कोई rule नहीं; cohesion है।</li>\n<li>हर method देखो: क्या वो सारी dependencies use करता है, या हर एक अलग subset? अलग subsets = एक में छुपी कई classes।</li>\n</ul>\n<p>Follow-up: \"'Facade Service' pitfall क्या है?\" — सिर्फ़ constructor की गिनती घटाने के लिए 5 dependencies को बिना असली concept के एक class में लपेटना; यह smell को ठीक नहीं करता, खिसका देता है।</p>",
        hg: "<ul>\n<li>Constructor injection design smells ko imaandaari se dikhata hai — yeh feature hai, kami nahi.</li>\n<li>Clusters dhoondho: (<code>IPriceCalculator</code>, <code>IDiscountPolicy</code>, <code>ITaxService</code>) → ek <code>PricingService</code>; (<code>IEmailSender</code>, <code>ISmsSender</code>) → <code>INotifier</code>.</li>\n<li>Bacho: property injection par jaana (samasya chhupata hai), bina matlab ki services ka \"aggregate\" thaila, ya <code>IServiceProvider</code> inject karna.</li>\n<li>Shayad theek: orchestrator/composition class (controller jaisi) jismein 4–5 collaborators hon. Sankhya koi rule nahi; cohesion hai.</li>\n<li>Har method dekho: kya woh saari dependencies use karta hai, ya har ek alag subset? Alag subsets = ek mein chhupi kai classes.</li>\n</ul>\n<p>Follow-up: \"'Facade Service' pitfall kya hai?\" — sirf constructor ki ginti ghatane ke liye 5 dependencies ko bina asli concept ke ek class mein lapetna; yeh smell ko theek nahi karta, khisaka deta hai.</p>"
      }
    },
    {
      id: "solid-patterns-testing",
      depth: "detailed",
      q: "How do SOLID, design patterns and unit testing connect?",
      answer: "Patterns are named solutions that apply SOLID ideas: Strategy for OCP, Decorator for OCP and SRP, Factory and DI for DIP. Following SOLID makes code testable because dependencies can be replaced by fakes.",
      meaning: {
        hi: "Patterns नाम वाले solutions हैं जो SOLID के ideas लागू करते हैं: OCP के लिए Strategy, OCP और SRP के लिए Decorator, DIP के लिए Factory और DI। SOLID follow करने से code testable बनता है क्योंकि dependencies की जगह fakes लगा सकते हैं।",
        hg: "Patterns naam wale solutions hain jo SOLID ke ideas lagu karte hain: OCP ke liye Strategy, OCP aur SRP ke liye Decorator, DIP ke liye Factory aur DI. SOLID follow karne se code testable banta hai kyunki dependencies ki jagah fakes laga sakte hain."
      },
      explain: {
        en: "<ul>\n<li><b>Strategy</b> (Day 9–11): swap an algorithm behind an interface — OCP.</li>\n<li><b>Decorator</b>: wrap an implementation to add logging/caching without editing it — OCP + SRP (cross-cutting concern in its own class).</li>\n<li><b>Factory</b> / <b>DI</b>: creation is separated from use — DIP.</li>\n<li><b>Tests</b>: DIP gives you a seam; SRP makes a class small enough to test; ISP makes fakes small; LSP is what lets a fake stand in for the real thing.</li>\n<li>Connection to Day 1: all of this is <b>composition over inheritance</b> plus interface-based polymorphism.</li>\n<li>Do not start from the pattern name. Start from the pain (a growing switch, a hard-to-test class), then pick the pattern.</li>\n</ul>\n<p>Follow-up: \"Can you use a pattern and still violate SOLID?\" — Yes: a Singleton that everything calls statically violates DIP.</p>",
        hi: "<ul>\n<li><b>Strategy</b> (Day 9–11): interface के पीछे algorithm बदलना — OCP।</li>\n<li><b>Decorator</b>: बिना edit किए logging/caching जोड़ने के लिए implementation को लपेटना — OCP + SRP (cross-cutting concern अपनी class में)।</li>\n<li><b>Factory</b> / <b>DI</b>: creation को use से अलग करना — DIP।</li>\n<li><b>Tests</b>: DIP seam देता है; SRP class को test करने लायक छोटा रखता है; ISP fakes छोटे रखता है; LSP की वजह से fake असली की जगह खड़ा हो सकता है।</li>\n<li>Day 1 से जुड़ाव: यह सब <b>composition over inheritance</b> और interface-based polymorphism है।</li>\n<li>Pattern के नाम से शुरू मत करो। दर्द से शुरू करो (बढ़ता switch, test करने में मुश्किल class), फिर pattern चुनो।</li>\n</ul>\n<p>Follow-up: \"क्या pattern use करके भी SOLID तोड़ सकते हैं?\" — हाँ: Singleton जिसे सब static तरीक़े से call करें, DIP तोड़ता है।</p>",
        hg: "<ul>\n<li><b>Strategy</b> (Day 9–11): interface ke peeche algorithm badalna — OCP.</li>\n<li><b>Decorator</b>: bina edit kiye logging/caching jodne ke liye implementation ko lapetna — OCP + SRP (cross-cutting concern apni class mein).</li>\n<li><b>Factory</b> / <b>DI</b>: creation ko use se alag karna — DIP.</li>\n<li><b>Tests</b>: DIP seam deta hai; SRP class ko test karne layak chhota rakhta hai; ISP fakes chhote rakhta hai; LSP ki wajah se fake asli ki jagah khada ho sakta hai.</li>\n<li>Day 1 se judaav: yeh sab <b>composition over inheritance</b> aur interface-based polymorphism hai.</li>\n<li>Pattern ke naam se shuru mat karo. Dard se shuru karo (badhta switch, test karne mein mushkil class), phir pattern chuno.</li>\n</ul>\n<p>Follow-up: \"Kya pattern use karke bhi SOLID tod sakte hain?\" — Haan: Singleton jise sab static tareeke se call karein, DIP todta hai.</p>"
      }
    },
    {
      id: "solid-legacy-refactor",
      depth: "detailed",
      q: "You inherit a legacy 2000-line service with new everywhere. How do you move it toward SOLID safely?",
      answer: "I add characterization tests first, then create seams at I/O boundaries by extracting interfaces (database, email; TimeProvider for the clock), and refactor in small steps, one responsibility at a time, keeping tests green.",
      meaning: {
        hi: "पहले characterization tests जोड़ता हूँ, फिर boundaries पर seams बनाता हूँ — database और email के लिए interface निकालता हूँ, clock के लिए TimeProvider — और छोटे steps में, एक बार में एक responsibility, हर बार tests green रखकर refactor करता हूँ।",
        hg: "Pehle characterization tests jodta hoon, phir boundaries par seams banata hoon — database aur email ke liye interface nikalta hoon, clock ke liye TimeProvider — aur chhote steps mein, ek baar mein ek responsibility, har baar tests green rakhkar refactor karta hoon."
      },
      explain: {
        en: "<ul>\n<li><b>Step 0:</b> agree why — pick the part that hurts (changes often, has the most bugs). Do not refactor stable code for beauty.</li>\n<li><b>Step 1:</b> characterization tests: pin down current behaviour, even if odd.</li>\n<li><b>Step 2:</b> seams: extract abstractions for external effects (<code>TimeProvider</code> for time, <code>IEmailSender</code>, a file or HTTP gateway). Constructor-inject them; keep a default constructor temporarily if needed.</li>\n<li><b>Step 3:</b> extract classes by responsibility (SRP), one per PR; replace big switches with strategies when they next change (OCP).</li>\n<li><b>Step 4:</b> register in DI, delete the old paths. Use feature flags or the strangler approach for risky areas.</li>\n<li>Communicate: small PRs, a short design note, and a \"definition of done\" so the team does not stall mid-way.</li>\n</ul>\n<p>Follow-up: \"How do you convince the business?\" — tie it to numbers: bug count, lead time, incidents in that module.</p>",
        hi: "<ul>\n<li><b>Step 0:</b> पहले वजह तय करो — वो हिस्सा चुनो जो दुखता है (अक्सर बदलता है, सबसे ज़्यादा bugs)। Stable code को सुंदरता के लिए refactor मत करो।</li>\n<li><b>Step 1:</b> characterization tests: मौजूदा behaviour पक्का करो, चाहे अजीब हो।</li>\n<li><b>Step 2:</b> seams: बाहरी effects के लिए abstractions निकालो (time के लिए <code>TimeProvider</code>, <code>IEmailSender</code>, file या HTTP gateway)। उन्हें constructor से inject करो; ज़रूरत हो तो अस्थायी default constructor रखो।</li>\n<li><b>Step 3:</b> responsibility के हिसाब से classes निकालो (SRP), हर PR में एक; बड़े switches को अगली बार बदलते समय strategies से बदलो (OCP)।</li>\n<li><b>Step 4:</b> DI में register करो, पुराने paths हटाओ। जोखिम वाले हिस्सों में feature flags या strangler approach।</li>\n<li>Communicate करो: छोटे PRs, छोटा design note और \"definition of done\" ताकि team बीच में न रुके।</li>\n</ul>\n<p>Follow-up: \"Business को कैसे मनाओगे?\" — numbers से जोड़ो: bug count, lead time, उस module में incidents।</p>",
        hg: "<ul>\n<li><b>Step 0:</b> pehle wajah tay karo — woh hissa chuno jo dukhta hai (aksar badalta hai, sabse zyada bugs). Stable code ko sundarta ke liye refactor mat karo.</li>\n<li><b>Step 1:</b> characterization tests: maujooda behaviour pakka karo, chahe ajeeb ho.</li>\n<li><b>Step 2:</b> seams: bahari effects ke liye abstractions nikalo (time ke liye <code>TimeProvider</code>, <code>IEmailSender</code>, file ya HTTP gateway). Unhe constructor se inject karo; zaroorat ho to asthayi default constructor rakho.</li>\n<li><b>Step 3:</b> responsibility ke hisaab se classes nikalo (SRP), har PR mein ek; bade switches ko agli baar badalte samay strategies se badlo (OCP).</li>\n<li><b>Step 4:</b> DI mein register karo, purane paths hatao. Jokhim wale hisson mein feature flags ya strangler approach.</li>\n<li>Communicate karo: chhote PRs, chhota design note aur \"definition of done\" taaki team beech mein na ruke.</li>\n</ul>\n<p>Follow-up: \"Business ko kaise manaoge?\" — numbers se jodo: bug count, lead time, us module mein incidents.</p>"
      }
    }
  ],
  puzzles: [
    {
      id: "lsp-rectangle-square",
      src: "Rectangle r = new Rectangle();\nRectangle s = new Square();\nConsole.WriteLine(Resize(r));\nConsole.WriteLine(Resize(s));\nConsole.WriteLine(s.GetType().Name);\n\nstatic int Resize(Rectangle shape)\n{\n    shape.Width = 5;\n    shape.Height = 4;\n    return shape.Area;\n}\n\nclass Rectangle\n{\n    public virtual int Width { get; set; }\n    public virtual int Height { get; set; }\n    public int Area => Width * Height;\n}\n\nclass Square : Rectangle\n{\n    public override int Width\n    {\n        get => base.Width;\n        set { base.Width = value; base.Height = value; }\n    }\n\n    public override int Height\n    {\n        get => base.Height;\n        set { base.Width = value; base.Height = value; }\n    }\n}",
      answer: "20\n16\nSquare",
      explain: {
        en: "<ul>\n<li><code>Resize</code> expects independent sides: width 5, height 4 → area 20 for a real <code>Rectangle</code>.</li>\n<li>For the <code>Square</code> both property setters are virtual and overridden, so the dispatch follows the object: setting <code>Height = 4</code> also sets Width to 4 → area 16.</li>\n<li>It compiles and runs without any error, yet the caller got a wrong answer: an LSP violation.</li>\n<li><code>GetType()</code> shows the real object type: <b>Square</b>.</li>\n</ul>",
        hi: "<ul>\n<li><code>Resize</code> अलग-अलग sides की उम्मीद करता है: width 5, height 4 → असली <code>Rectangle</code> के लिए area 20।</li>\n<li><code>Square</code> के दोनों property setters virtual हैं और override हुए हैं, इसलिए dispatch object को follow करता है: <code>Height = 4</code> set करने से Width भी 4 हो जाती है → area 16।</li>\n<li>यह बिना किसी error के compile और run होता है, फिर भी caller को ग़लत जवाब मिला: LSP violation।</li>\n<li><code>GetType()</code> असली object type दिखाता है: <b>Square</b>।</li>\n</ul>",
        hg: "<ul>\n<li><code>Resize</code> alag-alag sides ki ummeed karta hai: width 5, height 4 → asli <code>Rectangle</code> ke liye area 20.</li>\n<li><code>Square</code> ke dono property setters virtual hain aur override hue hain, isliye dispatch object ko follow karta hai: <code>Height = 4</code> set karne se Width bhi 4 ho jaati hai → area 16.</li>\n<li>Yeh bina kisi error ke compile aur run hota hai, phir bhi caller ko galat jawab mila: LSP violation.</li>\n<li><code>GetType()</code> asli object type dikhata hai: <b>Square</b>.</li>\n</ul>"
      }
    },
    {
      id: "readonly-collection-lsp",
      src: "using System.Collections.ObjectModel;\n\nvar data = new List<int> { 1, 2 };\nICollection<int> a = new ReadOnlyCollection<int>(data);\nICollection<int> b = data;\n\nConsole.WriteLine($\"{a.IsReadOnly} {b.IsReadOnly}\");\nTry(a);\nTry(b);\nConsole.WriteLine(a.Count);\n\nvoid Try(ICollection<int> c)\n{\n    try\n    {\n        c.Add(3);\n        Console.WriteLine(\"added\");\n    }\n    catch (NotSupportedException)\n    {\n        Console.WriteLine(\"NotSupported\");\n    }\n}",
      answer: "True False\nNotSupported\nadded\n3",
      explain: {
        en: "<ul>\n<li><code>new ReadOnlyCollection&lt;int&gt;(data)</code> is a read-only <i>wrapper</i> over <code>data</code>; <code>IsReadOnly</code> is <code>True</code>. The plain list reports <code>False</code>.</li>\n<li><code>Try(a)</code>: <code>Add</code> through <code>ICollection&lt;int&gt;</code> throws <code>NotSupportedException</code> → <b>NotSupported</b>. The caller compiled fine against the interface — the surprise is at runtime.</li>\n<li><code>Try(b)</code> adds 3 to the real list → <b>added</b>.</li>\n<li>Because the wrapper <i>shows</i> the underlying list, <code>a.Count</code> is now <b>3</b> — a read-only wrapper is not an immutable copy.</li>\n<li>Lesson: ask for <code>IReadOnlyList&lt;T&gt;</code> if you only read.</li>\n</ul>",
        hi: "<ul>\n<li><code>new ReadOnlyCollection&lt;int&gt;(data)</code>, <code>data</code> के ऊपर read-only <i>wrapper</i> है; <code>IsReadOnly</code> <code>True</code>। साधारण list <code>False</code> बताती है।</li>\n<li><code>Try(a)</code>: <code>ICollection&lt;int&gt;</code> से <code>Add</code> <code>NotSupportedException</code> फेंकता है → <b>NotSupported</b>। Caller interface के against ठीक compile हुआ — surprise runtime पर है।</li>\n<li><code>Try(b)</code> असली list में 3 जोड़ देता है → <b>added</b>।</li>\n<li>Wrapper नीचे की list को <i>दिखाता</i> है, इसलिए अब <code>a.Count</code> <b>3</b> है — read-only wrapper immutable copy नहीं होता।</li>\n<li>सीख: सिर्फ़ पढ़ना हो तो <code>IReadOnlyList&lt;T&gt;</code> माँगो।</li>\n</ul>",
        hg: "<ul>\n<li><code>new ReadOnlyCollection&lt;int&gt;(data)</code>, <code>data</code> ke upar read-only <i>wrapper</i> hai; <code>IsReadOnly</code> <code>True</code>. Saadharan list <code>False</code> batati hai.</li>\n<li><code>Try(a)</code>: <code>ICollection&lt;int&gt;</code> se <code>Add</code> <code>NotSupportedException</code> phenkta hai → <b>NotSupported</b>. Caller interface ke against theek compile hua — surprise runtime par hai.</li>\n<li><code>Try(b)</code> asli list mein 3 jod deta hai → <b>added</b>.</li>\n<li>Wrapper neeche ki list ko <i>dikhata</i> hai, isliye ab <code>a.Count</code> <b>3</b> hai — read-only wrapper immutable copy nahi hota.</li>\n<li>Seekh: sirf padhna ho to <code>IReadOnlyList&lt;T&gt;</code> maango.</li>\n</ul>"
      }
    },
    {
      id: "interface-reimplementation",
      src: "IGreeter g1 = new B();\nIGreeter g2 = new C();\nB b = new B();\n\ng1.Hello();\nb.Hello();\ng2.Hello();\n\ninterface IGreeter { void Hello(); }\n\nclass A : IGreeter\n{\n    public void Hello() => Console.WriteLine(\"A\");\n}\n\nclass B : A\n{\n    public new void Hello() => Console.WriteLine(\"B\");\n}\n\nclass C : A, IGreeter\n{\n    public new void Hello() => Console.WriteLine(\"C\");\n}",
      answer: "A\nB\nC",
      explain: {
        en: "<ul>\n<li><code>A.Hello</code> is not virtual; it is just the method <code>A</code> mapped to <code>IGreeter.Hello</code>.</li>\n<li><code>B</code> hides it with <code>new</code> but does <b>not</b> list <code>IGreeter</code> again, so the interface still maps to <code>A.Hello</code> → <code>g1.Hello()</code> prints <b>A</b>.</li>\n<li><code>b.Hello()</code> uses the reference type <code>B</code> → <b>B</b>.</li>\n<li><code>C</code> <b>re-implements</b> the interface (<code>: A, IGreeter</code>), so the interface maps to <code>C.Hello</code> → <b>C</b>.</li>\n<li>Lesson for DIP/LSP: code that depends on the interface can get a surprise when a child merely hides a method. Use <code>virtual</code>/<code>override</code> for real polymorphism.</li>\n</ul>",
        hi: "<ul>\n<li><code>A.Hello</code> virtual नहीं है; यह बस वो method है जिसे <code>A</code> ने <code>IGreeter.Hello</code> से map किया।</li>\n<li><code>B</code> उसे <code>new</code> से hide करता है पर <code>IGreeter</code> को दोबारा list <b>नहीं</b> करता, इसलिए interface अब भी <code>A.Hello</code> पर map है → <code>g1.Hello()</code> <b>A</b> छापता है।</li>\n<li><code>b.Hello()</code> reference type <code>B</code> use करता है → <b>B</b>।</li>\n<li><code>C</code> interface को <b>re-implement</b> करता है (<code>: A, IGreeter</code>), इसलिए interface <code>C.Hello</code> पर map होता है → <b>C</b>।</li>\n<li>DIP/LSP की सीख: जब child सिर्फ़ method hide करे तो interface पर depend करने वाले code को surprise मिल सकता है। असली polymorphism के लिए <code>virtual</code>/<code>override</code> use करो।</li>\n</ul>",
        hg: "<ul>\n<li><code>A.Hello</code> virtual nahi hai; yeh bas woh method hai jise <code>A</code> ne <code>IGreeter.Hello</code> se map kiya.</li>\n<li><code>B</code> use <code>new</code> se hide karta hai par <code>IGreeter</code> ko dobara list <b>nahi</b> karta, isliye interface ab bhi <code>A.Hello</code> par map hai → <code>g1.Hello()</code> <b>A</b> chhapta hai.</li>\n<li><code>b.Hello()</code> reference type <code>B</code> use karta hai → <b>B</b>.</li>\n<li><code>C</code> interface ko <b>re-implement</b> karta hai (<code>: A, IGreeter</code>), isliye interface <code>C.Hello</code> par map hota hai → <b>C</b>.</li>\n<li>DIP/LSP ki seekh: jab child sirf method hide kare to interface par depend karne wale code ko surprise mil sakta hai. Asli polymorphism ke liye <code>virtual</code>/<code>override</code> use karo.</li>\n</ul>"
      }
    },
    {
      id: "di-last-registration-wins",
      packages: [
        "Microsoft.Extensions.DependencyInjection"
      ],
      src: "using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.DependencyInjection.Extensions;\n\nvar services = new ServiceCollection();\nservices.AddTransient<IGreeter, EnglishGreeter>();\nservices.AddTransient<IGreeter, HindiGreeter>();\nservices.TryAddTransient<IGreeter, FrenchGreeter>();\n\nusing var provider = services.BuildServiceProvider();\n\nConsole.WriteLine(provider.GetRequiredService<IGreeter>().Name);\nConsole.WriteLine(string.Join(\",\", provider.GetServices<IGreeter>().Select(g => g.Name)));\nConsole.WriteLine(services.Count);\n\ninterface IGreeter { string Name { get; } }\nclass EnglishGreeter : IGreeter { public string Name => \"English\"; }\nclass HindiGreeter : IGreeter { public string Name => \"Hindi\"; }\nclass FrenchGreeter : IGreeter { public string Name => \"French\"; }",
      answer: "Hindi\nEnglish,Hindi\n2",
      explain: {
        en: "<ul>\n<li>Two <code>AddTransient&lt;IGreeter, …&gt;</code> calls register two implementations; the container keeps both.</li>\n<li><code>GetRequiredService&lt;IGreeter&gt;()</code> returns the <b>last</b> registration → <b>Hindi</b>.</li>\n<li><code>GetServices&lt;IGreeter&gt;()</code> returns <b>all</b> in registration order → <b>English,Hindi</b>.</li>\n<li><code>TryAddTransient</code> adds only if the service type is not registered yet; <code>IGreeter</code> already is, so nothing is added and <code>services.Count</code> stays <b>2</b>.</li>\n<li>Lesson: \"last wins\" is why libraries use <code>TryAdd…</code> for defaults, and why you can override a default in your own <code>Program.cs</code>.</li>\n</ul>",
        hi: "<ul>\n<li>दो <code>AddTransient&lt;IGreeter, …&gt;</code> calls दो implementations register करते हैं; container दोनों रखता है।</li>\n<li><code>GetRequiredService&lt;IGreeter&gt;()</code> <b>आख़िरी</b> registration देता है → <b>Hindi</b>।</li>\n<li><code>GetServices&lt;IGreeter&gt;()</code> registration order में <b>सब</b> देता है → <b>English,Hindi</b>।</li>\n<li><code>TryAddTransient</code> तभी जोड़ता है जब वो service type पहले से register न हो; <code>IGreeter</code> पहले से है, इसलिए कुछ नहीं जुड़ता और <code>services.Count</code> <b>2</b> रहता है।</li>\n<li>सीख: \"last wins\" की वजह से libraries defaults के लिए <code>TryAdd…</code> use करती हैं, और आप अपने <code>Program.cs</code> में default override कर सकते हो।</li>\n</ul>",
        hg: "<ul>\n<li>Do <code>AddTransient&lt;IGreeter, …&gt;</code> calls do implementations register karte hain; container dono rakhta hai.</li>\n<li><code>GetRequiredService&lt;IGreeter&gt;()</code> <b>aakhri</b> registration deta hai → <b>Hindi</b>.</li>\n<li><code>GetServices&lt;IGreeter&gt;()</code> registration order mein <b>sab</b> deta hai → <b>English,Hindi</b>.</li>\n<li><code>TryAddTransient</code> tabhi jodta hai jab woh service type pehle se register na ho; <code>IGreeter</code> pehle se hai, isliye kuch nahi judta aur <code>services.Count</code> <b>2</b> rehta hai.</li>\n<li>Seekh: \"last wins\" ki wajah se libraries defaults ke liye <code>TryAdd…</code> use karti hain, aur aap apne <code>Program.cs</code> mein default override kar sakte ho.</li>\n</ul>"
      }
    },
    {
      id: "di-lifetimes-identity",
      packages: [
        "Microsoft.Extensions.DependencyInjection"
      ],
      src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddSingleton<SingletonSvc>();\nservices.AddScoped<ScopedSvc>();\nservices.AddTransient<TransientSvc>();\n\nusing var root = services.BuildServiceProvider();\nusing var scope1 = root.CreateScope();\nusing var scope2 = root.CreateScope();\nvar p1 = scope1.ServiceProvider;\nvar p2 = scope2.ServiceProvider;\n\nConsole.WriteLine(\"singleton across scopes: \" + ReferenceEquals(p1.GetRequiredService<SingletonSvc>(), p2.GetRequiredService<SingletonSvc>()));\nConsole.WriteLine(\"scoped in same scope:    \" + ReferenceEquals(p1.GetRequiredService<ScopedSvc>(), p1.GetRequiredService<ScopedSvc>()));\nConsole.WriteLine(\"scoped across scopes:    \" + ReferenceEquals(p1.GetRequiredService<ScopedSvc>(), p2.GetRequiredService<ScopedSvc>()));\nConsole.WriteLine(\"transient in same scope: \" + ReferenceEquals(p1.GetRequiredService<TransientSvc>(), p1.GetRequiredService<TransientSvc>()));\n\nclass SingletonSvc { }\nclass ScopedSvc { }\nclass TransientSvc { }",
      answer: "singleton across scopes: True\nscoped in same scope:    True\nscoped across scopes:    False\ntransient in same scope: False",
      explain: {
        en: "<ul>\n<li><b>Singleton</b>: one instance per root provider → same object even from two scopes → <b>True</b>.</li>\n<li><b>Scoped</b>: one instance per scope (a web request) → same within <code>scope1</code> → <b>True</b>; different between <code>scope1</code> and <code>scope2</code> → <b>False</b>.</li>\n<li><b>Transient</b>: a new instance on every resolve, even in the same scope → <b>False</b>.</li>\n<li>Lesson: this is why a singleton should not hold a scoped service — it would be stuck with the first scope's instance (captive dependency).</li>\n</ul>",
        hi: "<ul>\n<li><b>Singleton</b>: root provider पर एक instance → दो scopes से भी वही object → <b>True</b>।</li>\n<li><b>Scoped</b>: हर scope (web request) में एक instance → <code>scope1</code> में वही → <b>True</b>; <code>scope1</code> और <code>scope2</code> के बीच अलग → <b>False</b>।</li>\n<li><b>Transient</b>: हर resolve पर नया instance, एक ही scope में भी → <b>False</b>।</li>\n<li>सीख: इसी वजह से singleton को scoped service नहीं पकड़नी चाहिए — वो पहले scope के instance में फँस जाएगा (captive dependency)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Singleton</b>: root provider par ek instance → do scopes se bhi wahi object → <b>True</b>.</li>\n<li><b>Scoped</b>: har scope (web request) mein ek instance → <code>scope1</code> mein wahi → <b>True</b>; <code>scope1</code> aur <code>scope2</code> ke beech alag → <b>False</b>.</li>\n<li><b>Transient</b>: har resolve par naya instance, ek hi scope mein bhi → <b>False</b>.</li>\n<li>Seekh: isi wajah se singleton ko scoped service nahi pakadni chahiye — woh pehle scope ke instance mein phans jayega (captive dependency).</li>\n</ul>"
      }
    },
    {
      id: "decorator-order",
      src: "IOrderService service =\n    new LoggingDecorator(\n        new TimingDecorator(\n            new OrderService()));\n\nservice.Place(\"book\");\n\ninterface IOrderService { void Place(string item); }\n\nclass OrderService : IOrderService\n{\n    public void Place(string item) => Console.WriteLine($\"placing {item}\");\n}\n\nclass TimingDecorator : IOrderService\n{\n    private readonly IOrderService _inner;\n    public TimingDecorator(IOrderService inner) => _inner = inner;\n\n    public void Place(string item)\n    {\n        Console.WriteLine(\"timing: start\");\n        _inner.Place(item);\n        Console.WriteLine(\"timing: stop\");\n    }\n}\n\nclass LoggingDecorator : IOrderService\n{\n    private readonly IOrderService _inner;\n    public LoggingDecorator(IOrderService inner) => _inner = inner;\n\n    public void Place(string item)\n    {\n        Console.WriteLine($\"log: before {item}\");\n        _inner.Place(item);\n        Console.WriteLine(\"log: after\");\n    }\n}",
      answer: "log: before book\ntiming: start\nplacing book\ntiming: stop\nlog: after",
      explain: {
        en: "<ul>\n<li>The caller holds only an <code>IOrderService</code> (DIP) — it does not know three objects are stacked.</li>\n<li>Calls go from the <b>outside in</b>: Logging → Timing → real service, and unwind on the way out.</li>\n<li>Output: log before → timing start → placing → timing stop → log after.</li>\n<li>Logging and timing were added <b>without editing</b> <code>OrderService</code> (OCP) and each lives in its own class (SRP). This is the Decorator pattern — details in Days 9–11.</li>\n</ul>",
        hi: "<ul>\n<li>Caller के पास सिर्फ़ एक <code>IOrderService</code> है (DIP) — उसे पता नहीं कि तीन objects एक के ऊपर एक रखे हैं।</li>\n<li>Calls <b>बाहर से अंदर</b> जाती हैं: Logging → Timing → असली service, और लौटते समय खुलती हैं।</li>\n<li>Output: log before → timing start → placing → timing stop → log after।</li>\n<li>Logging और timing <code>OrderService</code> को <b>edit किए बिना</b> जुड़े (OCP) और हर एक अपनी class में है (SRP)। यह Decorator pattern है — details Days 9–11 में।</li>\n</ul>",
        hg: "<ul>\n<li>Caller ke paas sirf ek <code>IOrderService</code> hai (DIP) — use pata nahi ki teen objects ek ke upar ek rakhe hain.</li>\n<li>Calls <b>bahar se andar</b> jaati hain: Logging → Timing → asli service, aur lautte samay khulti hain.</li>\n<li>Output: log before → timing start → placing → timing stop → log after.</li>\n<li>Logging aur timing <code>OrderService</code> ko <b>edit kiye bina</b> jude (OCP) aur har ek apni class mein hai (SRP). Yeh Decorator pattern hai — details Days 9–11 mein.</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>SRP</b>: one class, one reason to change (one team asking). Split rules / storage / messages; the service only coordinates.",
      "<b>OCP</b>: new rule = new class behind an interface (<code>ISlaRule</code>), not another <code>switch</code> branch. A small closed switch is fine.",
      "<b>LSP</b>: a child must keep the parent contract (no stronger preconditions, no weaker postconditions, same invariants). Do more, never less; an override that throws \"not supported\" is the red flag.",
      "<b>ISP</b>: small role interfaces shaped by the caller (<code>ITicketReader</code>, <code>ITicketWriter</code>); ask for the smallest abstraction.",
      "<b>DIP</b>: depend on an abstraction (<code>INotifier</code>), not on <code>new SmsNotifier()</code>; take it in the constructor so tests can pass a fake.",
      "<b>DIP</b> = principle, <b>DI</b> = technique (pass dependencies in), <b>IoC container</b> = tool (<code>ServiceCollection</code>); register once in the composition root.",
      "<b>.NET and LSP</b>: <code>ICollection&lt;T&gt;.Add</code> on a <code>ReadOnlyCollection&lt;T&gt;</code> throws; <code>Stream</code> has CanRead/CanWrite/CanSeek. Prefer <code>IReadOnlyList&lt;T&gt;</code> in your own APIs.",
      "<b>Lifetimes</b>: Transient / Scoped / Singleton; avoid injecting Scoped into Singleton (captive dependency).",
      "Over-engineering: no interface for a pure helper or a class with one implementation and nothing to fake; YAGNI and rule of three.",
      "<b>TL review</b>: ask change-cost questions (\"what happens when we add a fourth case?\"), refactor in small PRs, and write the reason in the comment."
    ],
    meaning: {
      hi: [
        "SRP: एक class, बदलने की एक वजह। Rules / storage / messages बाँटो; service सिर्फ़ coordinate करे",
        "OCP: नया rule = interface के पीछे नई class, switch में नई branch नहीं। छोटा बंद switch ठीक है",
        "LSP: child parent का contract निभाए (preconditions कड़ी नहीं, postconditions ढीली नहीं, invariants वही)। ज़्यादा करो, कम कभी नहीं; \"not supported\" फेंकने वाला override ख़तरे की घंटी है",
        "ISP: caller की ज़रूरत वाले छोटे role interfaces; सबसे छोटी abstraction माँगो",
        "DIP: abstraction (INotifier) पर निर्भर रहो, new SmsNotifier() पर नहीं; constructor में लो ताकि test fake दे सके",
        "DIP = principle, DI = technique (dependencies बाहर से दो), IoC container = tool (ServiceCollection); composition root में एक बार register करो",
        ".NET और LSP: ReadOnlyCollection&lt;T&gt; पर ICollection&lt;T&gt;.Add फेंकता है; Stream में CanRead/CanWrite/CanSeek हैं। अपने APIs में IReadOnlyList&lt;T&gt; पसंद करो।",
        "Lifetimes: Transient / Scoped / Singleton; Scoped को Singleton में inject करने से बचो (captive dependency)।",
        "Over-engineering: pure helper या ऐसी class के लिए interface नहीं जिसकी एक implementation है और fake करने को कुछ नहीं; YAGNI और rule of three।",
        "TL review: change-cost के सवाल पूछो (\"चौथा case जोड़ेंगे तो क्या होगा?\"), छोटे PRs में refactor करो, और comment में वजह लिखो।"
      ],
      hg: [
        "SRP: ek class, badalne ki ek wajah. Rules / storage / messages baanto; service sirf coordinate kare",
        "OCP: naya rule = interface ke peeche nayi class, switch mein nayi branch nahi. Chhota band switch theek hai",
        "LSP: child parent ka contract nibhaaye (preconditions kadi nahi, postconditions dheeli nahi, invariants wahi). Zyada karo, kam kabhi nahi; \"not supported\" phenkne wala override khatre ki ghanti hai",
        "ISP: caller ki zaroorat wale chhote role interfaces; sabse chhoti abstraction maango",
        "DIP: abstraction (INotifier) par nirbhar raho, new SmsNotifier() par nahi; constructor mein lo taaki test fake de sake",
        "DIP = principle, DI = technique (dependencies bahar se do), IoC container = tool (ServiceCollection); composition root mein ek baar register karo",
        ".NET aur LSP: ReadOnlyCollection&lt;T&gt; par ICollection&lt;T&gt;.Add phenkta hai; Stream mein CanRead/CanWrite/CanSeek hain. Apne APIs mein IReadOnlyList&lt;T&gt; pasand karo.",
        "Lifetimes: Transient / Scoped / Singleton; Scoped ko Singleton mein inject karne se bacho (captive dependency).",
        "Over-engineering: pure helper ya aisi class ke liye interface nahi jiski ek implementation hai aur fake karne ko kuch nahi; YAGNI aur rule of three.",
        "TL review: change-cost ke sawaal poochho (\"chautha case jodenge to kya hoga?\"), chhote PRs mein refactor karo, aur comment mein wajah likho."
      ]
    }
  }
};
