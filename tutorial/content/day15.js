// Day 15 — Architecture, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 15,
  format: "lesson",
  title: {
    en: "Architecture — layers, Clean Architecture, DDD basics, monolith vs microservices",
    hi: "Architecture — layers, Clean Architecture, DDD की बुनियाद, monolith बनाम microservices",
    hg: "Architecture — layers, Clean Architecture, DDD ki buniyad, monolith vs microservices"
  },
  summary: {
    en: "<p>Day 15 asks where code should live in the same <b>customer-care CRM</b>, in 7 short lessons. First the structure: classic layers and their weak spot, the dependency rule with ports and adapters, and the four-project Clean Architecture layout. Then the model inside: a rich entity, a value object and an aggregate root with a domain event. The last lesson is about shipping: monolith, modular monolith or microservices.</p><p>Every lesson follows the same path: what it is, why you need it, an analogy, a complete small C# program with its output, line-by-line notes, common mistakes, a small exercise and a quick quiz. The Deep Dive adds the DbContext question, DDD details, vertical slices, how a Tech Lead chooses, and ADRs. The bounded context idea (one model per area) is in the Deep Dive too.</p>",
    hi: "<p>Day 15 उसी <b>customer-care CRM</b> में 7 छोटे पाठों में पूछता है कि code कहाँ रहना चाहिए। पहले ढाँचा: पुरानी layers और उनकी कमज़ोर जगह, ports और adapters के साथ dependency rule, और चार-project वाला Clean Architecture layout। फिर अंदर का model: rich entity, value object, और domain event वाला aggregate root। आख़िरी पाठ ship करने के बारे में है: monolith, modular monolith या microservices।</p><p>हर पाठ एक ही क्रम में चलता है: यह क्या है, क्यों चाहिए, एक मिसाल, output के साथ पूरा छोटा C# program, लाइन-दर-लाइन समझ, आम ग़लतियाँ, एक छोटा exercise और एक झटपट quiz। Deep Dive में DbContext का सवाल, DDD की बारीकियाँ, vertical slices, Tech Lead कैसे चुनता है, और ADRs जुड़ते हैं। Bounded context का विचार (हर area का एक model) भी Deep Dive में है।</p>",
    hg: "<p>Day 15 usi <b>customer-care CRM</b> mein 7 chhote lessons mein poochhta hai ki code kahan rehna chahiye. Pehle dhaancha: purani layers aur unki kamzor jagah, ports aur adapters ke saath dependency rule, aur chaar-project wala Clean Architecture layout. Phir andar ka model: rich entity, value object, aur domain event wala aggregate root. Aakhri lesson ship karne ke baare mein hai: monolith, modular monolith ya microservices.</p><p>Har lesson ek hi kram mein chalta hai: ye kya hai, kyun chahiye, ek misaal, output ke saath poora chhota C# program, line-by-line samajh, aam galtiyan, ek chhota exercise aur ek jhatpat quiz. Deep Dive mein DbContext ka sawaal, DDD ki baarikiyan, vertical slices, Tech Lead kaise chunta hai, aur ADRs jude hain. Bounded context ka vichaar (har area ka ek model) bhi Deep Dive mein hai.</p>"
  },
  sections: [
    {
      id: "layers",
      depth: "short",
      title: {
        en: "Layers: the classic structure",
        hi: "Layers: पुराना जाना-पहचाना ढाँचा",
        hg: "Layers: purana jaana-pehchaana dhaancha"
      },
      lesson: {
        buildsOn: {
          en: "Days 11–13 gave the CRM its enterprise patterns (Repository, Unit of Work, DI), an ASP.NET Core host and a Web API. Today we step back and ask where each piece should live. The classic answer is layers: presentation, business, data.",
          hi: "Days 11–13 में CRM को enterprise patterns (Repository, Unit of Work, DI), ASP.NET Core host और Web API मिले। आज पीछे हटकर पूछते हैं कि हर हिस्सा कहाँ रहना चाहिए। पुराना जवाब है layers: presentation, business, data।",
          hg: "Days 11–13 mein CRM ko enterprise patterns (Repository, Unit of Work, DI), ASP.NET Core host aur Web API mile. Aaj peeche hatkar poochhte hain ki har hissa kahan rehna chahiye. Purana jawab hai layers: presentation, business, data."
        },
        what: {
          en: "<p><b>Layered architecture</b> splits an application into horizontal layers. Each layer has one job and calls only the layer directly below it: <b>Presentation</b> (controllers, screens) → <b>Business</b> (rules) → <b>Data access</b> (database code).</p>",
          hi: "<p><b>Layered architecture</b> application को आड़ी परतों (layers) में बाँटती है। हर layer का एक काम है और वह सिर्फ़ अपने ठीक नीचे वाली layer को call करती है: <b>Presentation</b> (controllers, screens) → <b>Business</b> (rules) → <b>Data access</b> (database का code)।</p>",
          hg: "<p><b>Layered architecture</b> application ko aadi parton (layers) mein baantti hai. Har layer ka ek kaam hai aur woh sirf apne theek neeche wali layer ko call karti hai: <b>Presentation</b> (controllers, screens) → <b>Business</b> (rules) → <b>Data access</b> (database ka code).</p>"
        },
        why: {
          en: "<p>Without layers, one controller method ends up with HTTP code, rules and SQL together. Layers give every kind of code a home, so a new developer knows where to look and where to put a change.</p>",
          hi: "<p>Layers के बिना एक controller method में HTTP code, rules और SQL सब मिल जाते हैं। Layers हर तरह के code को एक घर देती हैं, इसलिए नया developer जानता है कि कहाँ देखना है और बदलाव कहाँ रखना है।</p>",
          hg: "<p>Layers ke bina ek controller method mein HTTP code, rules aur SQL sab mil jaate hain. Layers har tarah ke code ko ek ghar deti hain, isliye naya developer jaanta hai ki kahan dekhna hai aur badlaav kahan rakhna hai.</p>"
        },
        analogy: {
          en: "<p>A railway ticket counter. The window clerk (presentation) talks to you, the booking officer (business) checks the rules, and the records room (data) keeps the register. The clerk never walks into the records room.</p>",
          hi: "<p>रेलवे टिकट खिड़की। खिड़की वाला क्लर्क (presentation) आपसे बात करता है, booking officer (business) नियम जाँचता है, और record room (data) में register रखा है। क्लर्क सीधे record room में नहीं जाता।</p>",
          hg: "<p>Railway ticket khidki. Khidki wala clerk (presentation) aapse baat karta hai, booking officer (business) niyam jaanchta hai, aur record room (data) mein register rakha hai. Clerk seedhe record room mein nahi jaata.</p>"
        },
        focus: {
          caption: {
            en: "The call chain and the arrows of dependency",
            hi: "Call की chain और dependency के तीर",
            hg: "Call ki chain aur dependency ke teer"
          },
          src: "TicketController  -->  TicketBll  -->  TicketDal  -->  Database\n(presentation)        (business)      (data access)\n\nEvery arrow points DOWN. The business layer depends on the data layer.",
          lang: "text",
          check: "none"
        },
        lines: [
          {
            code: "var controller = new TicketController(new TicketBll(new TicketDal()));",
            note: {
              en: "Each layer is built with the one below it. Reading this line from the inside out gives the call chain.",
              hi: "हर layer अपने नीचे वाली के साथ बनती है। इस line को अंदर से बाहर पढ़ो तो call की chain मिलती है।",
              hg: "Har layer apne neeche wali ke saath banti hai. Is line ko andar se bahar padho to call ki chain milti hai."
            }
          },
          {
            code: "public class TicketDal",
            note: {
              en: "The data layer. Only this class knows how tickets are stored. Here it is a list; in real life it would be EF Core or SQL.",
              hi: "Data layer। सिर्फ़ यही class जानती है कि tickets कैसे store होते हैं। यहाँ list है; असली काम में EF Core या SQL होता।",
              hg: "Data layer. Sirf yahi class jaanti hai ki tickets kaise store hote hain. Yahan list hai; asli kaam mein EF Core ya SQL hota."
            }
          },
          {
            code: "public class TicketBll(TicketDal dal)",
            note: {
              en: "The business layer asks for the <b>concrete</b> <code>TicketDal</code>. The arrow points down at a real class, not at an interface.",
              hi: "Business layer <b>असली</b> <code>TicketDal</code> माँगती है। तीर नीचे एक असली class की तरफ़ है, किसी interface की तरफ़ नहीं।",
              hg: "Business layer <b>asli</b> <code>TicketDal</code> maangti hai. Teer neeche ek asli class ki taraf hai, kisi interface ki taraf nahi."
            }
          },
          {
            code: "if (row.Status == \"Closed\") return $\"Ticket #{id} is closed already\";",
            note: {
              en: "A business rule. To run it you need the data layer (and, in real life, a database) behind it.",
              hi: "यह एक business rule है। इसे चलाने के लिए इसके पीछे data layer (और असली काम में database) चाहिए।",
              hg: "Ye ek business rule hai. Ise chalane ke liye iske peeche data layer (aur asli kaam mein database) chahiye."
            }
          },
          {
            code: "public class TicketController(TicketBll bll)",
            note: {
              en: "The presentation layer knows only the business layer. It never touches <code>TicketDal</code>.",
              hi: "Presentation layer सिर्फ़ business layer को जानती है। वह <code>TicketDal</code> को कभी नहीं छूती।",
              hg: "Presentation layer sirf business layer ko jaanti hai. Woh <code>TicketDal</code> ko kabhi nahi chhooti."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Skipping a layer: the controller calls the data layer directly, so rules get copied into controllers.</li><li>Putting business rules in the controller or in the data layer because \"it was quicker\".</li><li>Thinking the business layer is independent. It is not: it depends on the data layer, so rules get tied to EF Core or SQL and need a database to test.</li></ul>",
          hi: "<ul><li>कोई layer छोड़ देना: controller सीधे data layer को call करता है, और rules controllers में copy हो जाते हैं।</li><li>\"जल्दी हो जाएगा\" सोचकर business rules controller या data layer में रख देना।</li><li>यह सोचना कि business layer आज़ाद है। ऐसा नहीं है: वह data layer पर निर्भर है, इसलिए rules EF Core या SQL से बंध जाते हैं और test के लिए database चाहिए।</li></ul>",
          hg: "<ul><li>Koi layer chhod dena: controller seedhe data layer ko call karta hai, aur rules controllers mein copy ho jaate hain.</li><li>\"Jaldi ho jayega\" sochkar business rules controller ya data layer mein rakh dena.</li><li>Ye sochna ki business layer aazaad hai. Aisa nahi hai: woh data layer par nirbhar hai, isliye rules EF Core ya SQL se bandh jaate hain aur test ke liye database chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use plain layers for small and medium business apps, and when the team already knows them. They are quick to start and easy to explain. When rules grow and you cannot test them without a database, the next two lessons show the fix.</p>",
          hi: "<p>छोटे और मझोले business apps के लिए, और जब team को layers पहले से आती हों, सीधी layers काफ़ी हैं। शुरू करना जल्दी है और समझाना आसान। जब rules बढ़ें और database के बिना test न हो सकें, तब अगले दो पाठ हल दिखाते हैं।</p>",
          hg: "<p>Chhote aur majhole business apps ke liye, aur jab team ko layers pehle se aati hon, seedhi layers kaafi hain. Shuru karna jaldi hai aur samjhana aasaan. Jab rules badhein aur database ke bina test na ho saken, tab agle do lessons hal dikhate hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a third ticket, <b>503</b> for <b>Meena</b>, with status <code>Open</code>, to <code>TicketDal</code>. Resolve 503 and then 504 (which does not exist).</p>",
            hi: "<p><code>TicketDal</code> में तीसरा ticket जोड़ो: <b>Meena</b> का <b>503</b>, status <code>Open</code>। पहले 503 resolve करो, फिर 504 (जो है ही नहीं)।</p>",
            hg: "<p><code>TicketDal</code> mein teesra ticket jodo: <b>Meena</b> ka <b>503</b>, status <code>Open</code>. Pehle 503 resolve karo, phir 504 (jo hai hi nahi).</p>"
          },
          hint: {
            en: "<p>Only the list in <code>TicketDal</code> changes. The business and presentation layers stay as they are.</p>",
            hi: "<p>सिर्फ़ <code>TicketDal</code> की list बदलेगी। Business और presentation layers वैसी ही रहेंगी।</p>",
            hg: "<p>Sirf <code>TicketDal</code> ki list badlegi. Business aur presentation layers waisi hi rahengi.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one change in the data layer",
              hi: "हल: data layer में एक बदलाव",
              hg: "Solution: data layer mein ek badlaav"
            },
            src: "var controller = new TicketController(new TicketBll(new TicketDal()));\ncontroller.Resolve(503);\ncontroller.Resolve(504);\n\npublic record TicketRow(int Id, string Customer, string Status);\n\npublic class TicketDal\n{\n    private readonly List<TicketRow> _rows =\n        [new(501, \"Asha\", \"Open\"), new(502, \"Ravi\", \"Closed\"), new(503, \"Meena\", \"Open\")];\n\n    public TicketRow? Find(int id) => _rows.FirstOrDefault(r => r.Id == id);\n\n    public void Save(TicketRow row) => _rows[_rows.FindIndex(r => r.Id == row.Id)] = row;\n}\n\npublic class TicketBll(TicketDal dal)\n{\n    public string Resolve(int id)\n    {\n        var row = dal.Find(id);\n        if (row is null) return $\"Ticket #{id} not found\";\n        if (row.Status == \"Closed\") return $\"Ticket #{id} is closed already\";\n        dal.Save(row with { Status = \"Resolved\" });\n        return $\"Ticket #{id} resolved for {row.Customer}\";\n    }\n}\n\npublic class TicketController(TicketBll bll)\n{\n    public void Resolve(int id) => Console.WriteLine(bll.Resolve(id));\n}",
            check: "run",
            expected: "Ticket #503 resolved for Meena\nTicket #504 not found"
          }
        },
        quiz: {
          q: {
            en: "In the layered CRM, what does <code>TicketBll</code> depend on?",
            hi: "Layered CRM में <code>TicketBll</code> किस पर निर्भर है?",
            hg: "Layered CRM mein <code>TicketBll</code> kis par nirbhar hai?"
          },
          options: [
            {
              en: "Only <code>TicketController</code>, the layer above it",
              hi: "सिर्फ़ <code>TicketController</code> पर, जो उसके ऊपर की layer है",
              hg: "Sirf <code>TicketController</code> par, jo uske upar ki layer hai"
            },
            {
              en: "The concrete <code>TicketDal</code>, so its rules cannot run without the data layer",
              hi: "असली <code>TicketDal</code> पर, इसलिए data layer के बिना उसके rules नहीं चल सकते",
              hg: "Asli <code>TicketDal</code> par, isliye data layer ke bina uske rules nahi chal sakte"
            },
            {
              en: "An interface that the business layer owns",
              hi: "ऐसे interface पर जिसकी मालिक business layer है",
              hg: "Aise interface par jiski maalik business layer hai"
            },
            {
              en: "Nothing; it holds only plain rules",
              hi: "किसी पर नहीं; उसमें सिर्फ़ सीधे rules हैं",
              hg: "Kisi par nahi; usmein sirf seedhe rules hain"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The constructor asks for <code>TicketDal</code>, a concrete class from the layer below. So the business rules are tied to the data layer. Lesson 2 turns that arrow around.</p>",
            hi: "<p>Constructor <code>TicketDal</code> माँगता है, जो नीचे की layer की असली class है। इसलिए business rules data layer से बंधे हैं। पाठ 2 इस तीर को पलट देता है।</p>",
            hg: "<p>Constructor <code>TicketDal</code> maangta hai, jo neeche ki layer ki asli class hai. Isliye business rules data layer se bandhe hain. Lesson 2 is teer ko palat deta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Layers split code by job: presentation → business → data, each calling the one below.</li><li>The weak spot: the business layer depends on the data layer, so rules need a database to run.</li><li>Plain layers are fine for small apps; keep that weak spot in mind.</li></ul>",
          hi: "<ul><li>Layers code को काम के हिसाब से बाँटती हैं: presentation → business → data, हर एक अपने नीचे वाली को call करती है।</li><li>कमज़ोर जगह: business layer data layer पर निर्भर है, इसलिए rules चलाने को database चाहिए।</li><li>छोटे apps के लिए सीधी layers ठीक हैं; यह कमज़ोर जगह याद रखो।</li></ul>",
          hg: "<ul><li>Layers code ko kaam ke hisaab se baantti hain: presentation → business → data, har ek apne neeche wali ko call karti hai.</li><li>Kamzor jagah: business layer data layer par nirbhar hai, isliye rules chalane ko database chahiye.</li><li>Chhote apps ke liye seedhi layers theek hain; ye kamzor jagah yaad rakho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Three layers on the CRM; each calls only the one below",
            hi: "CRM पर तीन layers; हर एक सिर्फ़ नीचे वाली को call करती है",
            hg: "CRM par teen layers; har ek sirf neeche wali ko call karti hai"
          },
          src: "var controller = new TicketController(new TicketBll(new TicketDal()));\ncontroller.Resolve(501);\ncontroller.Resolve(502);\ncontroller.Resolve(999);\n\npublic record TicketRow(int Id, string Customer, string Status);\n\n// Data layer: the only code that touches the \"database\" (a list here).\npublic class TicketDal\n{\n    private readonly List<TicketRow> _rows = [new(501, \"Asha\", \"Open\"), new(502, \"Ravi\", \"Closed\")];\n\n    public TicketRow? Find(int id) => _rows.FirstOrDefault(r => r.Id == id);\n\n    public void Save(TicketRow row) => _rows[_rows.FindIndex(r => r.Id == row.Id)] = row;\n}\n\n// Business layer: holds the rules and calls only the layer below.\npublic class TicketBll(TicketDal dal)\n{\n    public string Resolve(int id)\n    {\n        var row = dal.Find(id);\n        if (row is null) return $\"Ticket #{id} not found\";\n        if (row.Status == \"Closed\") return $\"Ticket #{id} is closed already\";\n        dal.Save(row with { Status = \"Resolved\" });\n        return $\"Ticket #{id} resolved for {row.Customer}\";\n    }\n}\n\n// Presentation layer: talks to the user and calls only the business layer.\npublic class TicketController(TicketBll bll)\n{\n    public void Resolve(int id) => Console.WriteLine(bll.Resolve(id));\n}",
          check: "run",
          expected: "Ticket #501 resolved for Asha\nTicket #502 is closed already\nTicket #999 not found"
        }
      ]
    },
    {
      id: "dependency-rule",
      depth: "short",
      title: {
        en: "The dependency rule: ports and adapters",
        hi: "Dependency rule: ports और adapters",
        hg: "Dependency rule: ports aur adapters"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 showed the weak spot: <code>TicketBll</code> needs the concrete <code>TicketDal</code>. Day 8 gave us the fix, DIP (depend on an abstraction), and Day 11 gave us the repository interface. This lesson puts them together: the inner layer owns the interface and the outer layer implements it.",
          hi: "पाठ 1 ने कमज़ोर जगह दिखाई: <code>TicketBll</code> को असली <code>TicketDal</code> चाहिए। Day 8 ने हल दिया था, DIP (abstraction पर निर्भर रहो), और Day 11 ने repository interface दिया। यह पाठ दोनों को जोड़ता है: अंदर की layer interface की मालिक है और बाहर की layer उसे implement करती है।",
          hg: "Lesson 1 ne kamzor jagah dikhayi: <code>TicketBll</code> ko asli <code>TicketDal</code> chahiye. Day 8 ne hal diya tha, DIP (abstraction par nirbhar raho), aur Day 11 ne repository interface diya. Ye lesson dono ko jodta hai: andar ki layer interface ki maalik hai aur bahar ki layer use implement karti hai."
        },
        what: {
          en: "<p>The <b>dependency rule</b>: source-code dependencies point <b>inward</b>, toward the business rules. The inner layer defines a <b>port</b> (an interface in its own words, such as <code>ITicketRepository</code>). The outer layer supplies an <b>adapter</b> (a class that implements it with a database, an API, a file).</p>",
          hi: "<p><b>Dependency rule</b>: source-code की dependencies <b>अंदर</b> की तरफ़ यानी business rules की तरफ़ जाती हैं। अंदर की layer एक <b>port</b> तय करती है (अपनी भाषा में एक interface, जैसे <code>ITicketRepository</code>)। बाहर की layer एक <b>adapter</b> देती है (ऐसी class जो उसे database, API या file से implement करे)।</p>",
          hg: "<p><b>Dependency rule</b>: source-code ki dependencies <b>andar</b> ki taraf yaani business rules ki taraf jaati hain. Andar ki layer ek <b>port</b> tay karti hai (apni bhasha mein ek interface, jaise <code>ITicketRepository</code>). Bahar ki layer ek <b>adapter</b> deti hai (aisi class jo use database, API ya file se implement kare).</p>"
        },
        why: {
          en: "<p>The use case no longer knows whether tickets live in SQL Server, PostgreSQL or a list. You can test it with a fake repository in milliseconds, and you can change the database without touching a business rule.</p>",
          hi: "<p>अब use case को पता ही नहीं कि tickets SQL Server में हैं, PostgreSQL में या list में। आप fake repository से उसे milliseconds में test कर सकते हो, और database बदलने पर कोई business rule नहीं छूना पड़ता।</p>",
          hg: "<p>Ab use case ko pata hi nahi ki tickets SQL Server mein hain, PostgreSQL mein ya list mein. Aap fake repository se use milliseconds mein test kar sakte ho, aur database badalne par koi business rule nahi chhuna padta.</p>"
        },
        analogy: {
          en: "<p>A wall socket. The house wiring defines the socket shape (the port). Any charger with the right pins (an adapter) plugs in. The house does not change when you buy a new phone.</p>",
          hi: "<p>दीवार का socket। घर की wiring socket का आकार तय करती है (port)। सही pins वाला कोई भी charger (adapter) लग जाता है। नया फ़ोन लेने पर घर नहीं बदलना पड़ता।</p>",
          hg: "<p>Deewar ka socket. Ghar ki wiring socket ka aakaar tay karti hai (port). Sahi pins wala koi bhi charger (adapter) lag jaata hai. Naya phone lene par ghar nahi badalna padta.</p>"
        },
        focus: {
          caption: {
            en: "Before and after: who points at whom",
            hi: "पहले और बाद में: कौन किसकी तरफ़ इशारा करता है",
            hg: "Pehle aur baad mein: kaun kiski taraf ishaara karta hai"
          },
          src: "Layers:   Business  -->  DataAccess          (inner depends on outer)\nClean:    Application  -->  ITicketRepository  <--  InMemoryTicketRepository\n          (use case)         (port, inner)           (adapter, outer)",
          lang: "text",
          check: "none"
        },
        lines: [
          {
            code: "public interface ITicketRepository",
            note: {
              en: "The <b>port</b>. It sits next to the use case (inner layer) and speaks the use case's language: <code>Find</code> and <code>Save</code>, nothing about SQL.",
              hi: "यह <b>port</b> है। यह use case के पास (अंदर की layer में) रहता है और use case की भाषा बोलता है: <code>Find</code> और <code>Save</code>, SQL की कोई बात नहीं।",
              hg: "Ye <b>port</b> hai. Ye use case ke paas (andar ki layer mein) rehta hai aur use case ki bhasha bolta hai: <code>Find</code> aur <code>Save</code>, SQL ki koi baat nahi."
            }
          },
          {
            code: "public class ResolveTicketUseCase(ITicketRepository tickets)",
            note: {
              en: "Compare with lesson 1: the constructor now asks for the <b>interface</b>. The arrow points at something the inner layer owns.",
              hi: "पाठ 1 से तुलना करो: constructor अब <b>interface</b> माँगता है। तीर उस चीज़ की तरफ़ है जिसकी मालिक अंदर की layer है।",
              hg: "Lesson 1 se tulna karo: constructor ab <b>interface</b> maangta hai. Teer us cheez ki taraf hai jiski maalik andar ki layer hai."
            }
          },
          {
            code: "public class InMemoryTicketRepository : ITicketRepository",
            note: {
              en: "An <b>adapter</b> in the outer layer. It depends on the port, so the source-code arrow points inward even though calls flow outward at run time.",
              hi: "बाहर की layer में एक <b>adapter</b>। वह port पर निर्भर है, इसलिए source-code का तीर अंदर की तरफ़ है, भले ही run time पर calls बाहर की तरफ़ जाती हों।",
              hg: "Bahar ki layer mein ek <b>adapter</b>. Woh port par nirbhar hai, isliye source-code ka teer andar ki taraf hai, bhale hi run time par calls bahar ki taraf jaati hon."
            }
          },
          {
            code: "var fake = new FakeRepository();",
            note: {
              en: "A second adapter, made for tests. The use case runs unchanged, with no database.",
              hi: "दूसरा adapter, tests के लिए। Use case बिना बदले चलता है, database के बिना।",
              hg: "Doosra adapter, tests ke liye. Use case bina badle chalta hai, database ke bina."
            }
          },
          {
            code: "public string Status { get; private set; } = \"Open\";",
            note: {
              en: "The domain class sits in the centre and references nothing else. No repository, no EF Core, no JSON.",
              hi: "Domain class बीच में है और किसी और को reference नहीं करती। न repository, न EF Core, न JSON।",
              hg: "Domain class beech mein hai aur kisi aur ko reference nahi karti. Na repository, na EF Core, na JSON."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Putting <code>ITicketRepository</code> in the data project. Then the use case still references the outer layer. The port belongs with the code that <i>uses</i> it.</li><li>Shaping the port after the database (<code>ExecuteSql</code>, <code>GetDbSet</code>). Shape it after what the use case needs.</li><li>Making an interface for everything. Add a port where a real boundary exists: database, queue, SMS, clock.</li></ul>",
          hi: "<ul><li><code>ITicketRepository</code> को data project में रख देना। तब use case अब भी बाहर की layer को reference करता है। Port उसी code के साथ रहे जो उसे <i>use</i> करता है।</li><li>Port को database के हिसाब से बनाना (<code>ExecuteSql</code>, <code>GetDbSet</code>)। उसे use case की ज़रूरत के हिसाब से बनाओ।</li><li>हर चीज़ के लिए interface बना देना। Port वहाँ लगाओ जहाँ असली सीमा हो: database, queue, SMS, clock।</li></ul>",
          hg: "<ul><li><code>ITicketRepository</code> ko data project mein rakh dena. Tab use case ab bhi bahar ki layer ko reference karta hai. Port usi code ke saath rahe jo use <i>use</i> karta hai.</li><li>Port ko database ke hisaab se banana (<code>ExecuteSql</code>, <code>GetDbSet</code>). Use use case ki zaroorat ke hisaab se banao.</li><li>Har cheez ke liye interface bana dena. Port wahan lagao jahan asli seema ho: database, queue, SMS, clock.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use ports where the business rules meet something that can change or is slow to test: database, payment, SMS, email, the clock. Skip the port for simple helper code that never changes.</p>",
          hi: "<p>Port वहाँ लगाओ जहाँ business rules किसी ऐसी चीज़ से मिलते हैं जो बदल सकती है या test करने में धीमी है: database, payment, SMS, email, clock। जो helper code कभी नहीं बदलता, उसके लिए port छोड़ दो।</p>",
          hg: "<p>Port wahan lagao jahan business rules kisi aisi cheez se milte hain jo badal sakti hai ya test karne mein dheemi hai: database, payment, SMS, email, clock. Jo helper code kabhi nahi badalta, uske liye port chhod do.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>BrokenRepository : ITicketRepository</code> whose <code>Save</code> throws <code>InvalidOperationException(\"db down\")</code>. Run <code>ResolveTicketUseCase</code> with it in a <code>try/catch</code> and print the exception message.</p>",
            hi: "<p><code>BrokenRepository : ITicketRepository</code> लिखो जिसका <code>Save</code> <code>InvalidOperationException(\"db down\")</code> फेंकता है। उसके साथ <code>ResolveTicketUseCase</code> को <code>try/catch</code> में चलाओ और exception का message print करो।</p>",
            hg: "<p><code>BrokenRepository : ITicketRepository</code> likho jiska <code>Save</code> <code>InvalidOperationException(\"db down\")</code> phenkta hai. Uske saath <code>ResolveTicketUseCase</code> ko <code>try/catch</code> mein chalao aur exception ka message print karo.</p>"
          },
          hint: {
            en: "<p>Copy <code>FakeRepository</code>. <code>Find</code> can return a ticket; <code>Save</code> throws. The use case needs no change.</p>",
            hi: "<p><code>FakeRepository</code> को copy करो। <code>Find</code> एक ticket लौटा सकता है; <code>Save</code> exception फेंके। Use case में कोई बदलाव नहीं चाहिए।</p>",
            hg: "<p><code>FakeRepository</code> ko copy karo. <code>Find</code> ek ticket lauta sakta hai; <code>Save</code> exception phenke. Use case mein koi badlaav nahi chahiye.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a third adapter that fails",
              hi: "हल: तीसरा adapter जो fail होता है",
              hg: "Solution: teesra adapter jo fail hota hai"
            },
            src: "var useCase = new ResolveTicketUseCase(new BrokenRepository());\ntry\n{\n    Console.WriteLine(useCase.Execute(501));\n}\ncatch (InvalidOperationException e)\n{\n    Console.WriteLine($\"Caught: {e.Message}\");\n}\n\npublic class SupportTicket(int id, string customer)\n{\n    public int Id { get; } = id;\n    public string Customer { get; } = customer;\n    public string Status { get; private set; } = \"Open\";\n\n    public void Resolve() => Status = \"Resolved\";\n}\n\npublic interface ITicketRepository\n{\n    SupportTicket? Find(int id);\n    void Save(SupportTicket ticket);\n}\n\npublic class ResolveTicketUseCase(ITicketRepository tickets)\n{\n    public string Execute(int id)\n    {\n        var ticket = tickets.Find(id);\n        if (ticket is null) return $\"Ticket #{id} not found\";\n        ticket.Resolve();\n        tickets.Save(ticket);\n        return $\"Ticket #{id} {ticket.Status} for {ticket.Customer}\";\n    }\n}\n\npublic class BrokenRepository : ITicketRepository\n{\n    public SupportTicket? Find(int id) => new SupportTicket(id, \"Asha\");\n\n    public void Save(SupportTicket ticket) => throw new InvalidOperationException(\"db down\");\n}",
            check: "run",
            expected: "Caught: db down"
          }
        },
        quiz: {
          q: {
            en: "Which layer should own the <code>ITicketRepository</code> interface?",
            hi: "<code>ITicketRepository</code> interface का मालिक कौन-सी layer होनी चाहिए?",
            hg: "<code>ITicketRepository</code> interface ka maalik kaun si layer honi chahiye?"
          },
          options: [
            {
              en: "Any layer; it makes no difference to the arrows",
              hi: "कोई भी layer; तीरों पर इससे कोई फ़र्क़ नहीं पड़ता",
              hg: "Koi bhi layer; teeron par isse koi farq nahi padta"
            },
            {
              en: "The Infrastructure layer, next to the database code",
              hi: "Infrastructure layer, database code के पास",
              hg: "Infrastructure layer, database code ke paas"
            },
            {
              en: "The presentation layer, because it starts the request",
              hi: "Presentation layer, क्योंकि request वहीं से शुरू होती है",
              hg: "Presentation layer, kyonki request wahin se shuru hoti hai"
            },
            {
              en: "The Application (inner) layer; Infrastructure implements it",
              hi: "Application (अंदर की) layer; Infrastructure उसे implement करती है",
              hg: "Application (andar ki) layer; Infrastructure use implement karti hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>The port belongs to the code that uses it. If it lives in Infrastructure, the use case must reference the outer layer, and the dependency rule is broken.</p>",
            hi: "<p>Port उसी code का है जो उसे use करता है। अगर वह Infrastructure में रहे तो use case को बाहर की layer reference करनी पड़ेगी, और dependency rule टूट जाता है।</p>",
            hg: "<p>Port usi code ka hai jo use use karta hai. Agar woh Infrastructure mein rahe to use case ko bahar ki layer reference karni padegi, aur dependency rule toot jaata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Dependency rule: source-code arrows point inward, toward the business rules.</li><li>The inner layer owns the port (<code>ITicketRepository</code>); the outer layer writes the adapter.</li><li>Result: the use case is tested with a fake, and the database can change freely.</li></ul>",
          hi: "<ul><li>Dependency rule: source-code के तीर अंदर की तरफ़, business rules की तरफ़ जाते हैं।</li><li>Port (<code>ITicketRepository</code>) की मालिक अंदर की layer है; adapter बाहर की layer लिखती है।</li><li>नतीजा: use case fake से test होता है, और database आज़ादी से बदल सकता है।</li></ul>",
          hg: "<ul><li>Dependency rule: source-code ke teer andar ki taraf, business rules ki taraf jaate hain.</li><li>Port (<code>ITicketRepository</code>) ki maalik andar ki layer hai; adapter bahar ki layer likhti hai.</li><li>Nateeja: use case fake se test hota hai, aur database aazaadi se badal sakta hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A use case that depends on a port, with two adapters",
            hi: "एक use case जो port पर निर्भर है, और दो adapters",
            hg: "Ek use case jo port par nirbhar hai, aur do adapters"
          },
          src: "ITicketRepository repo = new InMemoryTicketRepository();\nrepo.Save(new SupportTicket(501, \"Asha\"));\nvar useCase = new ResolveTicketUseCase(repo);\nConsole.WriteLine(useCase.Execute(501));\n\n// \"Unit test\" style: a fake repository, no database anywhere.\nvar fake = new FakeRepository();\nConsole.WriteLine(new ResolveTicketUseCase(fake).Execute(7));\nConsole.WriteLine($\"Saved: {fake.SavedCount}\");\n\n// Domain (centre): knows nothing about storage.\npublic class SupportTicket(int id, string customer)\n{\n    public int Id { get; } = id;\n    public string Customer { get; } = customer;\n    public string Status { get; private set; } = \"Open\";\n\n    public void Resolve() => Status = \"Resolved\";\n}\n\n// Application layer: the use case AND the port it needs, in its own words.\npublic interface ITicketRepository\n{\n    SupportTicket? Find(int id);\n    void Save(SupportTicket ticket);\n}\n\npublic class ResolveTicketUseCase(ITicketRepository tickets)\n{\n    public string Execute(int id)\n    {\n        var ticket = tickets.Find(id);\n        if (ticket is null) return $\"Ticket #{id} not found\";\n        ticket.Resolve();\n        tickets.Save(ticket);\n        return $\"Ticket #{id} {ticket.Status} for {ticket.Customer}\";\n    }\n}\n\n// Infrastructure (outer): adapters that implement the port.\npublic class InMemoryTicketRepository : ITicketRepository\n{\n    private readonly Dictionary<int, SupportTicket> _store = new();\n\n    public SupportTicket? Find(int id) => _store.GetValueOrDefault(id);\n\n    public void Save(SupportTicket ticket) => _store[ticket.Id] = ticket;\n}\n\npublic class FakeRepository : ITicketRepository\n{\n    public int SavedCount { get; private set; }\n\n    public SupportTicket? Find(int id) => new SupportTicket(id, \"Test\");\n\n    public void Save(SupportTicket ticket) => SavedCount++;\n}",
          check: "run",
          expected: "Ticket #501 Resolved for Asha\nTicket #7 Resolved for Test\nSaved: 1"
        }
      ]
    },
    {
      id: "clean-layout",
      depth: "short",
      title: {
        en: "Clean Architecture: four projects and the composition root",
        hi: "Clean Architecture: चार projects और composition root",
        hg: "Clean Architecture: chaar projects aur composition root"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 2 gave us the rule (arrows point inward) and one port. Now we lay out a whole solution: Domain, Application, Infrastructure and Api. Day 11 showed DI registration and Day 12 the ASP.NET Core host; here the host becomes the one place that wires every layer together.",
          hi: "पाठ 2 ने नियम दिया (तीर अंदर की तरफ़) और एक port। अब पूरा solution सजाते हैं: Domain, Application, Infrastructure और Api। Day 11 में DI registration था और Day 12 में ASP.NET Core host; यहाँ host वह अकेली जगह बनता है जो हर layer को आपस में जोड़ती है।",
          hg: "Lesson 2 ne niyam diya (teer andar ki taraf) aur ek port. Ab poora solution sajaate hain: Domain, Application, Infrastructure aur Api. Day 11 mein DI registration tha aur Day 12 mein ASP.NET Core host; yahan host woh akeli jagah banta hai jo har layer ko aapas mein jodti hai."
        },
        what: {
          en: "<p><b>Clean Architecture</b> (Onion and Hexagonal architecture are close cousins of the same idea) is the dependency rule applied to a whole solution. Four projects: <b>Domain</b> (references nothing), <b>Application</b> (references Domain), <b>Infrastructure</b> (references Application) and <b>Api</b> (references the others). The Api is the <b>composition root</b>: the one place that creates the adapters and hands them to the use cases.</p>",
          hi: "<p><b>Clean Architecture</b> (Onion और Hexagonal architecture इसी idea के करीबी रूप हैं) पूरे solution पर लगाया गया dependency rule है। चार projects: <b>Domain</b> (किसी को reference नहीं करता), <b>Application</b> (Domain को reference करता है), <b>Infrastructure</b> (Application को reference करता है) और <b>Api</b> (बाकी सबको)। Api <b>composition root</b> है: वह अकेली जगह जो adapters बनाकर use cases को देती है।</p>",
          hg: "<p><b>Clean Architecture</b> (Onion aur Hexagonal architecture isi idea ke kareebi roop hain) poore solution par lagaya gaya dependency rule hai. Chaar projects: <b>Domain</b> (kisi ko reference nahi karta), <b>Application</b> (Domain ko reference karta hai), <b>Infrastructure</b> (Application ko reference karta hai) aur <b>Api</b> (baaki sabko). Api <b>composition root</b> hai: woh akeli jagah jo adapters banakar use cases ko deti hai.</p>"
        },
        why: {
          en: "<p>The compiler enforces the rule. Domain has no reference to EF Core, so nobody can use <code>DbContext</code> there by accident. A wrong arrow is a build error, not a code-review argument.</p>",
          hi: "<p>Rule को compiler लागू करता है। Domain में EF Core का reference नहीं है, इसलिए वहाँ कोई ग़लती से भी <code>DbContext</code> use नहीं कर सकता। ग़लत तीर build error है, code-review की बहस नहीं।</p>",
          hg: "<p>Rule ko compiler laagu karta hai. Domain mein EF Core ka reference nahi hai, isliye wahan koi galti se bhi <code>DbContext</code> use nahi kar sakta. Galat teer build error hai, code-review ki behes nahi.</p>"
        },
        analogy: {
          en: "<p>A wedding hall booking. The family (domain) decides the rituals. The caterer and the decorator (infrastructure) are hired and can be changed. One organiser (composition root) introduces them to each other on the day.</p>",
          hi: "<p>शादी के हॉल की booking। परिवार (domain) रस्में तय करता है। Caterer और decorator (infrastructure) किराये पर आते हैं और बदले जा सकते हैं। एक organiser (composition root) उसी दिन सबको एक-दूसरे से मिलवाता है।</p>",
          hg: "<p>Shaadi ke hall ki booking. Parivaar (domain) rasmein tay karta hai. Caterer aur decorator (infrastructure) kiraye par aate hain aur badle ja sakte hain. Ek organiser (composition root) usi din sabko ek-doosre se milwata hai.</p>"
        },
        focus: {
          caption: {
            en: "Project references point inward",
            hi: "Project references अंदर की तरफ़ जाते हैं",
            hg: "Project references andar ki taraf jaate hain"
          },
          src: "src/\n  Crm.Domain/          (references: none)\n  Crm.Application/     (references: Crm.Domain)            use cases + ports\n  Crm.Infrastructure/  (references: Crm.Application)       DbContext, adapters\n  Crm.Api/             (references: Application, Infrastructure)  composition root",
          lang: "text",
          check: "none"
        },
        lines: [
          {
            code: "services.AddInfrastructure();",
            note: {
              en: "The Api asks Infrastructure to register its adapters. The Api is the only project that references both Application and Infrastructure.",
              hi: "Api, Infrastructure से कहता है कि अपने adapters register करे। Api अकेला project है जो Application और Infrastructure दोनों को reference करता है।",
              hg: "Api, Infrastructure se kehta hai ki apne adapters register kare. Api akela project hai jo Application aur Infrastructure dono ko reference karta hai."
            }
          },
          {
            code: "var handler = provider.GetRequiredService<OpenTicketHandler>();",
            note: {
              en: "The container builds the handler and passes in the registered repository. The handler never calls <code>new InMemoryTicketRepository()</code>.",
              hi: "Container handler बनाता है और register किया हुआ repository उसे दे देता है। Handler कभी <code>new InMemoryTicketRepository()</code> नहीं लिखता।",
              hg: "Container handler banata hai aur register kiya hua repository use de deta hai. Handler kabhi <code>new InMemoryTicketRepository()</code> nahi likhta."
            }
          },
          {
            code: "public class OpenTicketHandler(ITicketRepository tickets)",
            note: {
              en: "Application code sees only the port it owns. It has no <code>using Crm.Infrastructure</code>.",
              hi: "Application code सिर्फ़ अपने port को देखता है। उसमें <code>using Crm.Infrastructure</code> है ही नहीं।",
              hg: "Application code sirf apne port ko dekhta hai. Usmein <code>using Crm.Infrastructure</code> hai hi nahi."
            }
          },
          {
            code: "public class InMemoryTicketRepository : ITicketRepository",
            note: {
              en: "Infrastructure references Application (it implements its port), never the other way round.",
              hi: "Infrastructure, Application को reference करता है (उसका port implement करता है), उल्टा कभी नहीं।",
              hg: "Infrastructure, Application ko reference karta hai (uska port implement karta hai), ulta kabhi nahi."
            }
          },
          {
            code: "services.AddScoped<ITicketRepository, InMemoryTicketRepository>();",
            note: {
              en: "The wiring: \"when someone asks for the port, give them this adapter\". Swap the adapter here and nothing else changes.",
              hi: "Wiring यहाँ है: \"जब कोई port माँगे, यह adapter दे दो\"। Adapter यहीं बदलो और बाक़ी कुछ नहीं बदलता।",
              hg: "Wiring yahan hai: \"jab koi port maange, ye adapter de do\". Adapter yahin badlo aur baaki kuch nahi badalta."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Letting Application reference Infrastructure \"just for one class\". The rule is broken, and the compiler no longer protects you.</li><li>Putting the <code>DbContext</code> in the Domain project. Mapping and EF attributes belong to Infrastructure (Fluent API).</li><li>Creating adapters with <code>new</code> inside handlers instead of in the composition root.</li></ul>",
          hi: "<ul><li>Application को \"सिर्फ़ एक class के लिए\" Infrastructure reference करने देना। Rule टूट गया, और compiler अब आपको नहीं बचाता।</li><li><code>DbContext</code> को Domain project में रखना। Mapping और EF attributes Infrastructure के हैं (Fluent API)।</li><li>Adapters को composition root की जगह handlers के अंदर <code>new</code> से बनाना।</li></ul>",
          hg: "<ul><li>Application ko \"sirf ek class ke liye\" Infrastructure reference karne dena. Rule toot gaya, aur compiler ab aapko nahi bachata.</li><li><code>DbContext</code> ko Domain project mein rakhna. Mapping aur EF attributes Infrastructure ke hain (Fluent API).</li><li>Adapters ko composition root ki jagah handlers ke andar <code>new</code> se banana.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use the four-project layout for long-lived business apps with real rules, several integrations, or several teams. For a small CRUD service it is too much: four projects, interfaces and mapping can outweigh the logic. A plain layered or vertical-slice layout is a fair choice there.</p>",
          hi: "<p>लंबे समय चलने वाले business apps के लिए चार-project layout लगाओ, जहाँ असली rules हों, कई integrations हों या कई teams हों। छोटी CRUD service के लिए यह ज़्यादा है: चार projects, interfaces और mapping logic से भारी पड़ सकते हैं। वहाँ सीधी layered या vertical-slice layout ठीक है।</p>",
          hg: "<p>Lambe samay chalne wale business apps ke liye chaar-project layout lagao, jahan asli rules hon, kai integrations hon ya kai teams hon. Chhoti CRUD service ke liye ye zyada hai: chaar projects, interfaces aur mapping logic se bhaari pad sakte hain. Wahan seedhi layered ya vertical-slice layout theek hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>The handler should also notify the customer. Add an <code>INotifier</code> port in <code>Crm.Application</code> (<code>void Send(string to, string message)</code>), a <code>SmsNotifier</code> adapter in <code>Crm.Infrastructure</code> that prints <code>SMS to {to}: {message}</code>, and register it in <code>AddInfrastructure</code>. Open one ticket for <code>\"Asha\"</code>.</p>",
            hi: "<p>Handler को customer को notify भी करना है। <code>Crm.Application</code> में <code>INotifier</code> port जोड़ो (<code>void Send(string to, string message)</code>), <code>Crm.Infrastructure</code> में <code>SmsNotifier</code> adapter जो <code>SMS to {to}: {message}</code> print करे, और उसे <code>AddInfrastructure</code> में register करो। <code>\"Asha\"</code> का एक ticket खोलो।</p>",
            hg: "<p>Handler ko customer ko notify bhi karna hai. <code>Crm.Application</code> mein <code>INotifier</code> port jodo (<code>void Send(string to, string message)</code>), <code>Crm.Infrastructure</code> mein <code>SmsNotifier</code> adapter jo <code>SMS to {to}: {message}</code> print kare, aur use <code>AddInfrastructure</code> mein register karo. <code>\"Asha\"</code> ka ek ticket kholo.</p>"
          },
          hint: {
            en: "<p>Same recipe as the repository: port in Application, adapter in Infrastructure, one registration line, and the handler takes <code>INotifier</code> in its constructor.</p>",
            hi: "<p>Repository वाला ही तरीका: port Application में, adapter Infrastructure में, registration की एक line, और handler के constructor में <code>INotifier</code>।</p>",
            hg: "<p>Repository wala hi tareeka: port Application mein, adapter Infrastructure mein, registration ki ek line, aur handler ke constructor mein <code>INotifier</code>.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a second port and adapter",
              hi: "हल: दूसरा port और adapter",
              hg: "Solution: doosra port aur adapter"
            },
            packages: [
              "Microsoft.Extensions.DependencyInjection"
            ],
            src: "using Crm.Application;\nusing Crm.Infrastructure;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddInfrastructure();\nservices.AddScoped<OpenTicketHandler>();\nusing var provider = services.BuildServiceProvider();\n\nvar handler = provider.GetRequiredService<OpenTicketHandler>();\nConsole.WriteLine($\"Opened #{handler.Handle(\"Asha\", \"Router not working\")}\");\n\nnamespace Crm.Domain\n{\n    public class SupportTicket(int id, string customer, string issue)\n    {\n        public int Id { get; } = id;\n        public string Customer { get; } = customer;\n        public string Issue { get; } = issue;\n    }\n}\n\nnamespace Crm.Application\n{\n    using Crm.Domain;\n\n    public interface ITicketRepository\n    {\n        int NextId();\n        void Add(SupportTicket ticket);\n    }\n\n    public interface INotifier\n    {\n        void Send(string to, string message);\n    }\n\n    public class OpenTicketHandler(ITicketRepository tickets, INotifier notifier)\n    {\n        public int Handle(string customer, string issue)\n        {\n            var ticket = new SupportTicket(tickets.NextId(), customer, issue);\n            tickets.Add(ticket);\n            notifier.Send(customer, $\"Ticket #{ticket.Id} opened\");\n            return ticket.Id;\n        }\n    }\n}\n\nnamespace Crm.Infrastructure\n{\n    using Crm.Application;\n    using Crm.Domain;\n\n    public class InMemoryTicketRepository : ITicketRepository\n    {\n        private readonly List<SupportTicket> _tickets = [];\n\n        public int NextId() => 501 + _tickets.Count;\n\n        public void Add(SupportTicket ticket) => _tickets.Add(ticket);\n    }\n\n    public class SmsNotifier : INotifier\n    {\n        public void Send(string to, string message) => Console.WriteLine($\"SMS to {to}: {message}\");\n    }\n\n    public static class DependencyInjection\n    {\n        public static IServiceCollection AddInfrastructure(this IServiceCollection services)\n        {\n            services.AddScoped<ITicketRepository, InMemoryTicketRepository>();\n            services.AddScoped<INotifier, SmsNotifier>();\n            return services;\n        }\n    }\n}",
            check: "run",
            expected: "SMS to Asha: Ticket #501 opened\nOpened #501"
          }
        },
        quiz: {
          q: {
            en: "Which project is allowed to reference <b>both</b> Application and Infrastructure?",
            hi: "कौन-सा project Application और Infrastructure <b>दोनों</b> को reference कर सकता है?",
            hg: "Kaun sa project Application aur Infrastructure <b>dono</b> ko reference kar sakta hai?"
          },
          options: [
            {
              en: "Api, the composition root",
              hi: "Api, यानी composition root",
              hg: "Api, yaani composition root"
            },
            {
              en: "Application, the use cases",
              hi: "Application, यानी use cases वाला",
              hg: "Application, yaani use cases wala"
            },
            {
              en: "Domain, the centre",
              hi: "Domain, यानी बीच वाला",
              hg: "Domain, yaani beech wala"
            },
            {
              en: "Infrastructure, the adapters",
              hi: "Infrastructure, यानी adapters वाला",
              hg: "Infrastructure, yaani adapters wala"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Only the Api (the host) sits on the outside and wires everything. Domain references nothing, Application references only Domain, and Infrastructure references Application.</p>",
            hi: "<p>सिर्फ़ Api (host) सबसे बाहर बैठता है और सब कुछ जोड़ता है। Domain किसी को reference नहीं करता, Application सिर्फ़ Domain को, और Infrastructure, Application को।</p>",
            hg: "<p>Sirf Api (host) sabse bahar baithta hai aur sab kuch jodta hai. Domain kisi ko reference nahi karta, Application sirf Domain ko, aur Infrastructure, Application ko.</p>"
          }
        },
        recap: {
          en: "<ul><li>Four projects: Domain (nothing), Application (Domain), Infrastructure (Application), Api (all).</li><li>The Api is the composition root: it registers adapters and builds the use cases.</li><li>The compiler enforces the arrows; skip the whole layout for a small CRUD service.</li></ul>",
          hi: "<ul><li>चार projects: Domain (कोई नहीं), Application (Domain), Infrastructure (Application), Api (सब)।</li><li>Api composition root है: वह adapters register करता है और use cases बनाता है।</li><li>तीरों को compiler लागू करता है; छोटी CRUD service के लिए पूरा layout छोड़ दो।</li></ul>",
          hg: "<ul><li>Chaar projects: Domain (koi nahi), Application (Domain), Infrastructure (Application), Api (sab).</li><li>Api composition root hai: woh adapters register karta hai aur use cases banata hai.</li><li>Teeron ko compiler laagu karta hai; chhoti CRUD service ke liye poora layout chhod do.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Namespaces stand in for the four projects; the top-level code is the composition root",
            hi: "चार projects की जगह namespaces हैं; सबसे ऊपर का code composition root है",
            hg: "Chaar projects ki jagah namespaces hain; sabse upar ka code composition root hai"
          },
          packages: [
            "Microsoft.Extensions.DependencyInjection"
          ],
          src: "using Crm.Application;\nusing Crm.Infrastructure;\nusing Microsoft.Extensions.DependencyInjection;\n\n// Composition root (the Api project): the only code that knows every layer.\nvar services = new ServiceCollection();\nservices.AddInfrastructure();\nservices.AddScoped<OpenTicketHandler>();\nusing var provider = services.BuildServiceProvider();\n\nvar handler = provider.GetRequiredService<OpenTicketHandler>();\nConsole.WriteLine($\"Opened #{handler.Handle(\"Asha\", \"Router not working\")}\");\nConsole.WriteLine($\"Opened #{handler.Handle(\"Ravi\", \"Slow internet\")}\");\n\nnamespace Crm.Domain\n{\n    public record SupportTicket(int Id, string Customer, string Issue);\n}\n\nnamespace Crm.Application\n{\n    using Crm.Domain;\n\n    public interface ITicketRepository\n    {\n        int NextId();\n        void Add(SupportTicket ticket);\n    }\n\n    public class OpenTicketHandler(ITicketRepository tickets)\n    {\n        public int Handle(string customer, string issue)\n        {\n            var ticket = new SupportTicket(tickets.NextId(), customer, issue);\n            tickets.Add(ticket);\n            return ticket.Id;\n        }\n    }\n}\n\nnamespace Crm.Infrastructure\n{\n    using Crm.Application;\n    using Crm.Domain;\n\n    public class InMemoryTicketRepository : ITicketRepository\n    {\n        private readonly List<SupportTicket> _tickets = [];\n\n        public int NextId() => 501 + _tickets.Count;\n\n        public void Add(SupportTicket ticket) => _tickets.Add(ticket);\n    }\n\n    public static class DependencyInjection\n    {\n        public static IServiceCollection AddInfrastructure(this IServiceCollection services) =>\n            services.AddScoped<ITicketRepository, InMemoryTicketRepository>();\n    }\n}",
          check: "run",
          expected: "Opened #501\nOpened #502"
        }
      ]
    },
    {
      id: "rich-entity",
      depth: "short",
      title: {
        en: "Entity: a domain object that protects its rules",
        hi: "Entity: domain object जो अपने rules खुद बचाता है",
        hg: "Entity: domain object jo apne rules khud bachata hai"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1–3 decided <b>where</b> code lives. Now we look inside the centre, the Domain. Day 1 taught encapsulation (<code>private set</code>) and Day 8 taught that a class should have one reason to change. A <code>SupportTicket</code> that guards its own state is that idea applied to the domain.",
          hi: "पाठ 1–3 ने तय किया कि code <b>कहाँ</b> रहे। अब बीच के हिस्से, Domain, के अंदर देखते हैं। Day 1 ने encapsulation (<code>private set</code>) सिखाया था और Day 8 ने कि class के बदलने की एक ही वजह हो। जो <code>SupportTicket</code> अपनी हालत खुद सँभाले, वह यही बात domain पर लागू करता है।",
          hg: "Lessons 1–3 ne tay kiya ki code <b>kahan</b> rahe. Ab beech ke hisse, Domain, ke andar dekhte hain. Day 1 ne encapsulation (<code>private set</code>) sikhaya tha aur Day 8 ne ki class ke badalne ki ek hi wajah ho. Jo <code>SupportTicket</code> apni haalat khud sambhaale, woh yahi baat domain par laagu karta hai."
        },
        what: {
          en: "<p>An <b>entity</b> is a domain object with an <b>identity</b> (an Id) that stays the same while its data changes. A <b>rich</b> entity also holds the business rules in its own methods, so it can never be put into an invalid state. The opposite is an <b>anemic</b> model: only get/set properties, with every rule in a separate service.</p>",
          hi: "<p><b>Entity</b> ऐसा domain object है जिसकी एक <b>पहचान</b> (Id) है जो data बदलने पर भी वही रहती है। <b>Rich</b> entity business rules भी अपने methods में रखती है, इसलिए उसे कभी ग़लत हालत में नहीं डाला जा सकता। उल्टा <b>anemic</b> model है: सिर्फ़ get/set properties, और हर rule किसी अलग service में।</p>",
          hg: "<p><b>Entity</b> aisa domain object hai jiski ek <b>pehchaan</b> (Id) hai jo data badalne par bhi wahi rehti hai. <b>Rich</b> entity business rules bhi apne methods mein rakhti hai, isliye use kabhi galat haalat mein nahi daala ja sakta. Ulta <b>anemic</b> model hai: sirf get/set properties, aur har rule kisi alag service mein.</p>"
        },
        why: {
          en: "<p>If a rule lives in a service, any other code can still skip it by setting a property. When the rule lives in the entity, there is only one way to change the state, and that way checks the rule.</p>",
          hi: "<p>अगर rule किसी service में है, तो कोई भी दूसरा code property set करके उसे लाँघ सकता है। जब rule entity में है, तो state बदलने का एक ही रास्ता है, और वह रास्ता rule जाँचता है।</p>",
          hg: "<p>Agar rule kisi service mein hai, to koi bhi doosra code property set karke use laangh sakta hai. Jab rule entity mein hai, to state badalne ka ek hi raasta hai, aur woh raasta rule jaanchta hai.</p>"
        },
        analogy: {
          en: "<p>An ATM card with a PIN. The bank balance is not a number you can edit; you must go through withdraw or deposit, and each one checks the rules. Nobody can type a new balance directly.</p>",
          hi: "<p>PIN वाला ATM card। Bank balance कोई ऐसा number नहीं जिसे आप सीधे बदल सको; आपको withdraw या deposit से गुज़रना पड़ता है, और हर एक नियम जाँचता है। कोई सीधे नया balance नहीं लिख सकता।</p>",
          hg: "<p>PIN wala ATM card. Bank balance koi aisa number nahi jise aap seedhe badal sako; aapko withdraw ya deposit se guzarna padta hai, aur har ek niyam jaanchta hai. Koi seedhe naya balance nahi likh sakta.</p>"
        },
        focus: {
          caption: {
            en: "Anemic: anyone can skip the rule (not part of the runnable program)",
            hi: "Anemic: कोई भी rule को लाँघ सकता है (चलने वाले program का हिस्सा नहीं)",
            hg: "Anemic: koi bhi rule ko laangh sakta hai (chalne wale program ka hissa nahi)"
          },
          src: "public class AnemicTicket\n{\n    public string Status { get; set; } = \"Open\";   // anyone can write any value\n}\n\nvar ticket = new AnemicTicket();\nticket.Status = \"Resolved\";   // no agent assigned, and nothing complains",
          check: "none"
        },
        lines: [
          {
            code: "if (string.IsNullOrWhiteSpace(issue)) throw new ArgumentException(\"Issue is required\");",
            note: {
              en: "The constructor refuses bad input, so a ticket without an issue can never exist.",
              hi: "Constructor ग़लत input मना कर देता है, इसलिए बिना issue का ticket कभी बन ही नहीं सकता।",
              hg: "Constructor galat input mana kar deta hai, isliye bina issue ka ticket kabhi ban hi nahi sakta."
            }
          },
          {
            code: "public int Id { get; }",
            note: {
              en: "The <b>identity</b>. It is set once and never changes, even when status and agent change.",
              hi: "<b>पहचान</b>। यह एक बार set होती है और कभी नहीं बदलती, चाहे status और agent बदलते रहें।",
              hg: "<b>Pehchaan</b>. Ye ek baar set hoti hai aur kabhi nahi badalti, chahe status aur agent badalte rahein."
            }
          },
          {
            code: "public TicketStatus Status { get; private set; } = TicketStatus.Open;",
            note: {
              en: "Outside code can read the status but cannot write it. The only way to change it is through the methods below.",
              hi: "बाहर का code status पढ़ सकता है पर लिख नहीं सकता। उसे बदलने का अकेला रास्ता नीचे के methods हैं।",
              hg: "Bahar ka code status padh sakta hai par likh nahi sakta. Use badalne ka akela raasta neeche ke methods hain."
            }
          },
          {
            code: "if (Status != TicketStatus.Assigned) throw new InvalidOperationException(\"Assign an agent before resolving.\");",
            note: {
              en: "An <b>invariant</b>: a rule that must always hold. A ticket can be resolved only after an agent is assigned.",
              hi: "<b>Invariant</b>: ऐसा rule जो हमेशा सच रहना चाहिए। Ticket तभी resolve हो सकता है जब agent assign हो चुका हो।",
              hg: "<b>Invariant</b>: aisa rule jo hamesha sach rehna chahiye. Ticket tabhi resolve ho sakta hai jab agent assign ho chuka ho."
            }
          },
          {
            code: "public void AssignTo(string agent)",
            note: {
              en: "A method named in business words (<code>AssignTo</code>, not <code>SetAgent</code>). It changes the agent and the status together, so they never disagree.",
              hi: "Business की भाषा में नाम वाला method (<code>SetAgent</code> नहीं, <code>AssignTo</code>)। यह agent और status को साथ बदलता है, इसलिए दोनों हमेशा मेल खाते हैं।",
              hg: "Business ki bhasha mein naam wala method (<code>SetAgent</code> nahi, <code>AssignTo</code>). Ye agent aur status ko saath badalta hai, isliye dono hamesha mel khaate hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Leaving <code>public set</code> on everything \"for EF Core\". EF Core can write to <code>private set</code> and to backing fields.</li><li>Writing <code>SetStatus(...)</code>. That is only a property in disguise; name the business action (<code>Resolve</code>).</li><li>Putting every rule inside the entity, even ones that need a database or another aggregate. Those belong in the use case.</li></ul>",
          hi: "<ul><li>\"EF Core के लिए\" सब पर <code>public set</code> छोड़ देना। EF Core <code>private set</code> और backing fields में भी लिख सकता है।</li><li><code>SetStatus(...)</code> लिखना। यह नाम बदलकर बस property ही है; business के काम का नाम रखो (<code>Resolve</code>)।</li><li>हर rule entity के अंदर डाल देना, वे भी जिन्हें database या दूसरे aggregate की ज़रूरत है। वे use case के हैं।</li></ul>",
          hg: "<ul><li>\"EF Core ke liye\" sab par <code>public set</code> chhod dena. EF Core <code>private set</code> aur backing fields mein bhi likh sakta hai.</li><li><code>SetStatus(...)</code> likhna. Ye naam badalkar bas property hi hai; business ke kaam ka naam rakho (<code>Resolve</code>).</li><li>Har rule entity ke andar daal dena, woh bhi jinhe database ya doosre aggregate ki zaroorat hai. Woh use case ke hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a rich entity when the rules are tricky and change over time (SLA, escalation, billing). For plain data with no rules, such as lookup tables or a simple admin screen, an anemic class and a small service are cheaper and perfectly fine.</p>",
          hi: "<p>जब rules पेचीदा हों और समय के साथ बदलते हों (SLA, escalation, billing) तब rich entity लो। बिना rules के सीधे data के लिए, जैसे lookup tables या सादी admin screen, anemic class और छोटी service सस्ती है और बिल्कुल ठीक है।</p>",
          hg: "<p>Jab rules pechida hon aur samay ke saath badalte hon (SLA, escalation, billing) tab rich entity lo. Bina rules ke seedhe data ke liye, jaise lookup tables ya saadi admin screen, anemic class aur chhoti service sasti hai aur bilkul theek hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add <code>Reopen()</code>: allowed only when the status is <code>Resolved</code>; it sets the status back to <code>Open</code> and clears the agent. Resolve ticket 501 with agent Meena, reopen it, and print the status and agent. Then call <code>Reopen()</code> again and print the error message.</p>",
            hi: "<p><code>Reopen()</code> जोड़ो: सिर्फ़ तब जब status <code>Resolved</code> हो; वह status को वापस <code>Open</code> करता है और agent हटा देता है। Ticket 501 को agent Meena से resolve करो, reopen करो, और status व agent print करो। फिर <code>Reopen()</code> दोबारा बुलाओ और error message print करो।</p>",
            hg: "<p><code>Reopen()</code> jodo: sirf tab jab status <code>Resolved</code> ho; woh status ko wapas <code>Open</code> karta hai aur agent hata deta hai. Ticket 501 ko agent Meena se resolve karo, reopen karo, aur status va agent print karo. Phir <code>Reopen()</code> dobara bulao aur error message print karo.</p>"
          },
          hint: {
            en: "<p>Copy the shape of <code>Resolve()</code>: check the status first, throw <code>InvalidOperationException</code> if it is wrong, then change the state. <code>Agent</code> is <code>string?</code>, so <code>null</code> clears it.</p>",
            hi: "<p><code>Resolve()</code> जैसी बनावट रखो: पहले status जाँचो, ग़लत हो तो <code>InvalidOperationException</code> फेंको, फिर state बदलो। <code>Agent</code> <code>string?</code> है, इसलिए <code>null</code> से वह हट जाता है।</p>",
            hg: "<p><code>Resolve()</code> jaisi banawat rakho: pehle status jaancho, galat ho to <code>InvalidOperationException</code> phenko, phir state badlo. <code>Agent</code> <code>string?</code> hai, isliye <code>null</code> se woh hat jaata hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: Reopen with its own rule",
              hi: "हल: अपने rule के साथ Reopen",
              hg: "Solution: apne rule ke saath Reopen"
            },
            src: "var ticket = new SupportTicket(501, \"Asha\", \"Router not working\");\nticket.AssignTo(\"Meena\");\nticket.Resolve();\nticket.Reopen();\nConsole.WriteLine($\"{ticket.Status}, agent: {ticket.Agent ?? \"none\"}\");\n\ntry { ticket.Reopen(); }\ncatch (InvalidOperationException e) { Console.WriteLine(e.Message); }\n\npublic enum TicketStatus { Open, Assigned, Resolved }\n\npublic class SupportTicket(int id, string customer, string issue)\n{\n    public int Id { get; } = id;\n    public string Customer { get; } = customer;\n    public string Issue { get; } = issue;\n    public TicketStatus Status { get; private set; } = TicketStatus.Open;\n    public string? Agent { get; private set; }\n\n    public void AssignTo(string agent)\n    {\n        if (Status == TicketStatus.Resolved) throw new InvalidOperationException(\"A resolved ticket cannot be reassigned.\");\n        Agent = agent;\n        Status = TicketStatus.Assigned;\n    }\n\n    public void Resolve()\n    {\n        if (Status != TicketStatus.Assigned) throw new InvalidOperationException(\"Assign an agent before resolving.\");\n        Status = TicketStatus.Resolved;\n    }\n\n    public void Reopen()\n    {\n        if (Status != TicketStatus.Resolved) throw new InvalidOperationException(\"Only a resolved ticket can be reopened.\");\n        Status = TicketStatus.Open;\n        Agent = null;\n    }\n}",
            check: "run",
            expected: "Open, agent: none\nOnly a resolved ticket can be reopened."
          }
        },
        quiz: {
          q: {
            en: "Why does <code>SupportTicket</code> use <code>private set</code> and methods such as <code>Resolve()</code>?",
            hi: "<code>SupportTicket</code> में <code>private set</code> और <code>Resolve()</code> जैसे methods क्यों हैं?",
            hg: "<code>SupportTicket</code> mein <code>private set</code> aur <code>Resolve()</code> jaise methods kyon hain?"
          },
          options: [
            {
              en: "Private setters make the program run faster",
              hi: "Private setters से program तेज़ चलता है",
              hg: "Private setters se program tez chalta hai"
            },
            {
              en: "EF Core cannot save a ticket that has a public setter",
              hi: "Public setter वाला ticket EF Core save नहीं कर सकता",
              hg: "Public setter wala ticket EF Core save nahi kar sakta"
            },
            {
              en: "The only way to change the state is through code that checks the rules",
              hi: "State बदलने का अकेला रास्ता वह code है जो rules जाँचता है",
              hg: "State badalne ka akela raasta woh code hai jo rules jaanchta hai"
            },
            {
              en: "Methods are required whenever a class has an enum",
              hi: "जिस class में enum हो उसमें methods होना ज़रूरी है",
              hg: "Jis class mein enum ho usmein methods hona zaroori hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>The goal is to make an invalid state impossible. With <code>private set</code>, other code cannot skip the check. The other options are not true: EF Core is fine with private setters, and speed is not the reason.</p>",
            hi: "<p>मक़सद है कि ग़लत state नामुमकिन हो जाए। <code>private set</code> के साथ दूसरा code check को लाँघ नहीं सकता। बाकी विकल्प सच नहीं हैं: EF Core को private setters से दिक़्क़त नहीं, और speed वजह नहीं है।</p>",
            hg: "<p>Maqsad hai ki galat state namumkin ho jaaye. <code>private set</code> ke saath doosra code check ko laangh nahi sakta. Baaki vikalp sach nahi hain: EF Core ko private setters se dikkat nahi, aur speed wajah nahi hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>An entity has an identity (Id) that stays the same while its data changes.</li><li>A rich entity keeps state private and exposes business methods that check the invariants.</li><li>Use it for tricky, changing rules; plain data can stay anemic.</li></ul>",
          hi: "<ul><li>Entity की एक पहचान (Id) होती है जो data बदलने पर भी वही रहती है।</li><li>Rich entity state को private रखती है और invariants जाँचने वाले business methods देती है।</li><li>पेचीदा, बदलते rules के लिए इसे लो; सादा data anemic रह सकता है।</li></ul>",
          hg: "<ul><li>Entity ki ek pehchaan (Id) hoti hai jo data badalne par bhi wahi rehti hai.</li><li>Rich entity state ko private rakhti hai aur invariants jaanchne wale business methods deti hai.</li><li>Pechida, badalte rules ke liye ise lo; saada data anemic reh sakta hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A rich SupportTicket: private state, public methods that check the rules",
            hi: "Rich SupportTicket: private state, rules जाँचने वाले public methods",
            hg: "Rich SupportTicket: private state, rules jaanchne wale public methods"
          },
          src: "var ticket = new SupportTicket(501, \"Asha\", \"Router not working\");\n\ntry { ticket.Resolve(); }\ncatch (InvalidOperationException e) { Console.WriteLine(e.Message); }\n\nticket.AssignTo(\"Meena\");\nticket.Resolve();\nConsole.WriteLine($\"#{ticket.Id} {ticket.Status} by {ticket.Agent}\");\n\ntry { ticket.AssignTo(\"Kiran\"); }\ncatch (InvalidOperationException e) { Console.WriteLine(e.Message); }\n\npublic enum TicketStatus { Open, Assigned, Resolved }\n\npublic class SupportTicket\n{\n    public SupportTicket(int id, string customer, string issue)\n    {\n        if (string.IsNullOrWhiteSpace(issue)) throw new ArgumentException(\"Issue is required\");\n        Id = id;\n        Customer = customer;\n        Issue = issue;\n    }\n\n    public int Id { get; }\n    public string Customer { get; }\n    public string Issue { get; }\n    public TicketStatus Status { get; private set; } = TicketStatus.Open;\n    public string? Agent { get; private set; }\n\n    public void AssignTo(string agent)\n    {\n        if (Status == TicketStatus.Resolved) throw new InvalidOperationException(\"A resolved ticket cannot be reassigned.\");\n        Agent = agent;\n        Status = TicketStatus.Assigned;\n    }\n\n    public void Resolve()\n    {\n        if (Status != TicketStatus.Assigned) throw new InvalidOperationException(\"Assign an agent before resolving.\");\n        Status = TicketStatus.Resolved;\n    }\n}",
          check: "run",
          expected: "Assign an agent before resolving.\n#501 Resolved by Meena\nA resolved ticket cannot be reassigned."
        }
      ]
    },
    {
      id: "value-object",
      depth: "short",
      title: {
        en: "Value object: equal by value, not by Id",
        hi: "Value object: Id से नहीं, value से बराबर",
        hg: "Value object: Id se nahi, value se barabar"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 4 built the entity <code>SupportTicket</code>, which is the same ticket as long as its Id is the same. Now the other kind of domain object: one with no Id at all. Day 2 introduced <code>record</code> for value equality; here it becomes the natural tool for a phone number.",
          hi: "पाठ 4 ने entity <code>SupportTicket</code> बनाई, जो तब तक वही ticket है जब तक उसका Id वही है। अब दूसरी तरह का domain object: जिसका कोई Id ही नहीं। Day 2 ने value equality के लिए <code>record</code> सिखाया था; यहाँ वह phone number का सही औज़ार बनता है।",
          hg: "Lesson 4 ne entity <code>SupportTicket</code> banayi, jo tab tak wahi ticket hai jab tak uska Id wahi hai. Ab doosri tarah ka domain object: jiska koi Id hi nahi. Day 2 ne value equality ke liye <code>record</code> sikhaya tha; yahan woh phone number ka sahi auzaar banta hai."
        },
        what: {
          en: "<p>A <b>value object</b> has <b>no identity</b>. Two of them are equal when all their values are equal. It is best <b>immutable</b> and checks its own rules when it is created, so an invalid one cannot exist. Examples: <code>PhoneNumber</code>, <code>Money</code>, <code>Address</code>, <code>DateRange</code>.</p>",
          hi: "<p><b>Value object</b> की <b>कोई पहचान नहीं</b> होती। दो value objects तब बराबर हैं जब उनकी सारी values बराबर हों। वह <b>immutable</b> हो तो बेहतर, और बनते समय अपने rules खुद जाँचे, ताकि ग़लत वाला बन ही न सके। जैसे: <code>PhoneNumber</code>, <code>Money</code>, <code>Address</code>, <code>DateRange</code>।</p>",
          hg: "<p><b>Value object</b> ki <b>koi pehchaan nahi</b> hoti. Do value objects tab barabar hain jab unki saari values barabar hon. Woh <b>immutable</b> ho to behtar, aur bante samay apne rules khud jaanche, taaki galat wala ban hi na sake. Jaise: <code>PhoneNumber</code>, <code>Money</code>, <code>Address</code>, <code>DateRange</code>.</p>"
        },
        why: {
          en: "<p>A phone number as a plain <code>string</code> can be empty, have letters, or be written in five formats. A <code>PhoneNumber</code> type checks and cleans it once, so every other class can trust it. The rule lives in one place.</p>",
          hi: "<p>Phone number को सादे <code>string</code> में रखो तो वह खाली हो सकता है, उसमें letters हो सकते हैं, या वह पाँच तरह से लिखा हो सकता है। <code>PhoneNumber</code> type उसे एक बार जाँचकर साफ़ कर देता है, इसलिए बाकी हर class उस पर भरोसा कर सकती है। Rule एक ही जगह रहता है।</p>",
          hg: "<p>Phone number ko saade <code>string</code> mein rakho to woh khaali ho sakta hai, usmein letters ho sakte hain, ya woh paanch tarah se likha ho sakta hai. <code>PhoneNumber</code> type use ek baar jaanchkar saaf kar deta hai, isliye baaki har class us par bharosa kar sakti hai. Rule ek hi jagah rehta hai.</p>"
        },
        analogy: {
          en: "<p>A ₹500 note. Any ₹500 note is as good as another; you do not care which one you hold. Your bank account is different: it is <i>that</i> account even when the balance changes. Notes are value objects; the account is an entity.</p>",
          hi: "<p>₹500 का नोट। कोई भी ₹500 का नोट दूसरे जितना ही अच्छा है; आपको परवाह नहीं कि कौन-सा नोट हाथ में है। Bank account अलग है: balance बदलने पर भी वह <i>वही</i> account है। नोट value object है; account entity है।</p>",
          hg: "<p>₹500 ka note. Koi bhi ₹500 ka note doosre jitna hi accha hai; aapko parwah nahi ki kaun sa note haath mein hai. Bank account alag hai: balance badalne par bhi woh <i>wahi</i> account hai. Note value object hai; account entity hai.</p>"
        },
        lines: [
          {
            code: "public sealed record PhoneNumber",
            note: {
              en: "A <code>record</code> gives value equality for free: two <code>PhoneNumber</code>s with the same <code>Digits</code> are equal.",
              hi: "<code>record</code> मुफ़्त में value equality देता है: एक जैसे <code>Digits</code> वाले दो <code>PhoneNumber</code> बराबर होते हैं।",
              hg: "<code>record</code> muft mein value equality deta hai: ek jaise <code>Digits</code> wale do <code>PhoneNumber</code> barabar hote hain."
            }
          },
          {
            code: "if (digits.Length != 10) throw new ArgumentException(\"A phone number needs 10 digits\");",
            note: {
              en: "The value object checks itself in the constructor. After this line, every <code>PhoneNumber</code> in the program is valid.",
              hi: "Value object constructor में खुद को जाँचता है। इस line के बाद program का हर <code>PhoneNumber</code> सही है।",
              hg: "Value object constructor mein khud ko jaanchta hai. Is line ke baad program ka har <code>PhoneNumber</code> sahi hai."
            }
          },
          {
            code: "public string Digits { get; }",
            note: {
              en: "Get-only, so it cannot change after creation. To \"change\" a phone number you make a new one.",
              hi: "सिर्फ़ get है, इसलिए बनने के बाद बदल नहीं सकता। Phone number को \"बदलना\" हो तो नया बनाते हो।",
              hg: "Sirf get hai, isliye banne ke baad badal nahi sakta. Phone number ko \"badalna\" ho to naya banate ho."
            }
          },
          {
            code: "Console.WriteLine(ReferenceEquals(a, b));",
            note: {
              en: "Prints <code>False</code>: they are two different objects in memory, yet <code>a == b</code> was <code>True</code>. Equal by value, not by reference.",
              hi: "<code>False</code> print होता है: memory में ये दो अलग objects हैं, फिर भी <code>a == b</code> <code>True</code> था। Value से बराबर, reference से नहीं।",
              hg: "<code>False</code> print hota hai: memory mein ye do alag objects hain, phir bhi <code>a == b</code> <code>True</code> tha. Value se barabar, reference se nahi."
            }
          },
          {
            code: "public bool Equals(SupportTicket? other) => other is not null && Id == other.Id;",
            note: {
              en: "The entity is equal by <b>Id</b> only. The two tickets have different contacts, but the same Id, so they are the same ticket.",
              hi: "Entity सिर्फ़ <b>Id</b> से बराबर है। दोनों tickets के contacts अलग हैं, पर Id एक है, इसलिए वे वही ticket हैं।",
              hg: "Entity sirf <b>Id</b> se barabar hai. Dono tickets ke contacts alag hain, par Id ek hai, isliye ve wahi ticket hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Giving a value object a public setter. Then two \"equal\" values can drift apart, and a dictionary key can change after it was stored.</li><li>Using a plain <code>string</code> for phone, email or money and repeating the checks in five classes (primitive obsession).</li><li>Using value equality for an entity (or an Id for a value object). Ask first: \"does it have its own identity that outlives its data?\"</li></ul>",
          hi: "<ul><li>Value object को public setter देना। तब दो \"बराबर\" values अलग हो सकती हैं, और dictionary key store होने के बाद बदल सकती है।</li><li>Phone, email या money के लिए सादा <code>string</code> रखना और पाँच classes में वही checks दोहराना (primitive obsession)।</li><li>Entity के लिए value equality (या value object के लिए Id) लगाना। पहले पूछो: \"क्या इसकी अपनी पहचान है जो data बदलने पर भी बनी रहती है?\"</li></ul>",
          hg: "<ul><li>Value object ko public setter dena. Tab do \"barabar\" values alag ho sakti hain, aur dictionary key store hone ke baad badal sakti hai.</li><li>Phone, email ya money ke liye saada <code>string</code> rakhna aur paanch classes mein wahi checks dohrana (primitive obsession).</li><li>Entity ke liye value equality (ya value object ke liye Id) lagana. Pehle poochho: \"kya iski apni pehchaan hai jo data badalne par bhi bani rehti hai?\"</li></ul>"
        },
        whenToUse: {
          en: "<p>Make a value object for small concepts that have rules and are compared by value: phone, email, money, address, date range. For a one-off string with no rules, a plain <code>string</code> is fine.</p>",
          hi: "<p>छोटी चीज़ों के लिए value object बनाओ जिनके rules हैं और जो value से compare होती हैं: phone, email, money, address, date range। बिना rules की एक-बार की string के लिए सादा <code>string</code> ठीक है।</p>",
          hg: "<p>Chhoti cheezon ke liye value object banao jinke rules hain aur jo value se compare hoti hain: phone, email, money, address, date range. Bina rules ki ek-baar ki string ke liye saada <code>string</code> theek hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <code>Money</code> record with <code>decimal Amount</code> and <code>string Currency</code>, and an <code>Add(Money other)</code> method that throws <code>InvalidOperationException(\"Currency mismatch\")</code> when currencies differ. Print <code>Money(100, INR).Add(Money(50, INR))</code> as <code>150 INR</code>, compare two <code>Money(150, \"INR\")</code> values with <code>==</code>, and print the error for INR + USD.</p>",
            hi: "<p><code>Money</code> record जोड़ो जिसमें <code>decimal Amount</code> और <code>string Currency</code> हो, और <code>Add(Money other)</code> method जो currencies अलग हों तो <code>InvalidOperationException(\"Currency mismatch\")</code> फेंके। <code>Money(100, INR).Add(Money(50, INR))</code> को <code>150 INR</code> की तरह print करो, दो <code>Money(150, \"INR\")</code> को <code>==</code> से compare करो, और INR + USD का error print करो।</p>",
            hg: "<p><code>Money</code> record jodo jismein <code>decimal Amount</code> aur <code>string Currency</code> ho, aur <code>Add(Money other)</code> method jo currencies alag hon to <code>InvalidOperationException(\"Currency mismatch\")</code> phenke. <code>Money(100, INR).Add(Money(50, INR))</code> ko <code>150 INR</code> ki tarah print karo, do <code>Money(150, \"INR\")</code> ko <code>==</code> se compare karo, aur INR + USD ka error print karo.</p>"
          },
          hint: {
            en: "<p>Use a positional record: <code>record Money(decimal Amount, string Currency)</code>. Return a new <code>Money</code> from <code>Add</code>; do not change the existing one.</p>",
            hi: "<p>Positional record लो: <code>record Money(decimal Amount, string Currency)</code>। <code>Add</code> से नया <code>Money</code> लौटाओ; पुराने को मत बदलो।</p>",
            hg: "<p>Positional record lo: <code>record Money(decimal Amount, string Currency)</code>. <code>Add</code> se naya <code>Money</code> lautao; purane ko mat badlo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: Money as a value object",
              hi: "हल: value object के रूप में Money",
              hg: "Solution: value object ke roop mein Money"
            },
            src: "var total = new Money(100, \"INR\").Add(new Money(50, \"INR\"));\nConsole.WriteLine($\"{total.Amount} {total.Currency}\");\nConsole.WriteLine(total == new Money(150, \"INR\"));\n\ntry { new Money(100, \"INR\").Add(new Money(5, \"USD\")); }\ncatch (InvalidOperationException e) { Console.WriteLine(e.Message); }\n\npublic record Money(decimal Amount, string Currency)\n{\n    public Money Add(Money other)\n    {\n        if (other.Currency != Currency) throw new InvalidOperationException(\"Currency mismatch\");\n        return new Money(Amount + other.Amount, Currency);\n    }\n}",
            check: "run",
            expected: "150 INR\nTrue\nCurrency mismatch"
          }
        },
        quiz: {
          q: {
            en: "Two <code>PhoneNumber</code> objects hold the same digits, and two <code>SupportTicket</code> objects have the same Id but different contacts. What does the equality code say?",
            hi: "दो <code>PhoneNumber</code> objects में वही digits हैं, और दो <code>SupportTicket</code> objects का Id एक है पर contacts अलग। Equality का code क्या कहता है?",
            hg: "Do <code>PhoneNumber</code> objects mein wahi digits hain, aur do <code>SupportTicket</code> objects ka Id ek hai par contacts alag. Equality ka code kya kehta hai?"
          },
          options: [
            {
              en: "Neither pair is equal, because they are different objects in memory",
              hi: "कोई जोड़ी बराबर नहीं, क्योंकि memory में वे अलग objects हैं",
              hg: "Koi jodi barabar nahi, kyonki memory mein ve alag objects hain"
            },
            {
              en: "Both pairs are equal: the phone numbers by value, the tickets by Id",
              hi: "दोनों जोड़ियाँ बराबर हैं: phone numbers value से, tickets Id से",
              hg: "Dono jodiyan barabar hain: phone numbers value se, tickets Id se"
            },
            {
              en: "Only the phone numbers are equal",
              hi: "सिर्फ़ phone numbers बराबर हैं",
              hg: "Sirf phone numbers barabar hain"
            },
            {
              en: "Only the tickets are equal",
              hi: "सिर्फ़ tickets बराबर हैं",
              hg: "Sirf tickets barabar hain"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>A value object is equal when all values match, so the phone numbers are equal. An entity is equal when the Id matches, so the two tickets are the same ticket, whatever their other data says.</p>",
            hi: "<p>Value object तब बराबर है जब सारी values मिलें, इसलिए phone numbers बराबर हैं। Entity तब बराबर है जब Id मिले, इसलिए दोनों tickets वही ticket हैं, उनका बाकी data कुछ भी हो।</p>",
            hg: "<p>Value object tab barabar hai jab saari values milein, isliye phone numbers barabar hain. Entity tab barabar hai jab Id mile, isliye dono tickets wahi ticket hain, unka baaki data kuch bhi ho.</p>"
          }
        },
        recap: {
          en: "<ul><li>Value object: no identity, equal by all its values, best immutable, validated when created.</li><li>Entity: identity (Id) that stays; equal by Id.</li><li>A C# <code>record</code> is a natural fit for a value object.</li></ul>",
          hi: "<ul><li>Value object: कोई पहचान नहीं, सारी values से बराबर, immutable हो तो बेहतर, बनते समय validated।</li><li>Entity: पहचान (Id) जो बनी रहती है; Id से बराबर।</li><li>C# का <code>record</code> value object के लिए सही बैठता है।</li></ul>",
          hg: "<ul><li>Value object: koi pehchaan nahi, saari values se barabar, immutable ho to behtar, bante samay validated.</li><li>Entity: pehchaan (Id) jo bani rehti hai; Id se barabar.</li><li>C# ka <code>record</code> value object ke liye sahi baithta hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "PhoneNumber (equal by value) and SupportTicket (equal by Id)",
            hi: "PhoneNumber (value से बराबर) और SupportTicket (Id से बराबर)",
            hg: "PhoneNumber (value se barabar) aur SupportTicket (Id se barabar)"
          },
          src: "var a = new PhoneNumber(\"98765 43210\");\nvar b = new PhoneNumber(\"9876543210\");\nConsole.WriteLine(a == b);\nConsole.WriteLine(ReferenceEquals(a, b));\nConsole.WriteLine(a);\n\nvar first = new SupportTicket(501, a);\nvar second = new SupportTicket(501, new PhoneNumber(\"9000000000\"));\nConsole.WriteLine(first.Equals(second));\n\ntry { _ = new PhoneNumber(\"123\"); }\ncatch (ArgumentException e) { Console.WriteLine(e.Message); }\n\n// Value object: no Id, immutable, validates itself.\npublic sealed record PhoneNumber\n{\n    public PhoneNumber(string raw)\n    {\n        var digits = new string(raw.Where(char.IsDigit).ToArray());\n        if (digits.Length != 10) throw new ArgumentException(\"A phone number needs 10 digits\");\n        Digits = digits;\n    }\n\n    public string Digits { get; }\n\n    public override string ToString() => $\"+91 {Digits}\";\n}\n\n// Entity: equal when the Id is equal, whatever else changed.\npublic sealed class SupportTicket(int id, PhoneNumber contact) : IEquatable<SupportTicket>\n{\n    public int Id { get; } = id;\n    public PhoneNumber Contact { get; } = contact;\n\n    public bool Equals(SupportTicket? other) => other is not null && Id == other.Id;\n\n    public override bool Equals(object? obj) => Equals(obj as SupportTicket);\n\n    public override int GetHashCode() => Id.GetHashCode();\n}",
          check: "run",
          expected: "True\nFalse\n+91 9876543210\nTrue\nA phone number needs 10 digits"
        }
      ]
    },
    {
      id: "aggregate-root",
      depth: "short",
      title: {
        en: "Aggregate root: one boundary, one transaction",
        hi: "Aggregate root: एक सीमा, एक transaction",
        hg: "Aggregate root: ek seema, ek transaction"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 4 made one entity guard its own state, and lesson 5 gave it a value object. Real tickets carry notes, and several things must stay consistent together. An <b>aggregate</b> groups them, and Day 11's Unit of Work saves the whole group in one transaction.",
          hi: "पाठ 4 में एक entity ने अपनी state खुद सँभाली, और पाठ 5 ने उसे value object दिया। असली tickets में notes होते हैं, और कई चीज़ें साथ में सही रहनी चाहिए। <b>Aggregate</b> उन्हें एक group में रखता है, और Day 11 का Unit of Work पूरे group को एक transaction में save करता है।",
          hg: "Lesson 4 mein ek entity ne apni state khud sambhaali, aur lesson 5 ne use value object diya. Asli tickets mein notes hote hain, aur kai cheezein saath mein sahi rehni chahiye. <b>Aggregate</b> unhe ek group mein rakhta hai, aur Day 11 ka Unit of Work poore group ko ek transaction mein save karta hai."
        },
        what: {
          en: "<p>An <b>aggregate</b> is a cluster of objects that change as one unit. Its <b>root</b> is the only object outsiders may talk to. The root enforces the invariants of the whole cluster. Other aggregates are referenced by <b>Id</b>, not by object. The root can also record <b>domain events</b>: past-tense facts such as <code>TicketResolved</code>.</p>",
          hi: "<p><b>Aggregate</b> objects का ऐसा group है जो एक unit की तरह बदलता है। उसका <b>root</b> अकेला object है जिससे बाहर वाले बात कर सकते हैं। Root पूरे group के invariants लागू करता है। दूसरे aggregates को <b>Id</b> से reference करते हैं, object से नहीं। Root <b>domain events</b> भी दर्ज कर सकता है: बीती बात के facts जैसे <code>TicketResolved</code>।</p>",
          hg: "<p><b>Aggregate</b> objects ka aisa group hai jo ek unit ki tarah badalta hai. Uska <b>root</b> akela object hai jisse bahar wale baat kar sakte hain. Root poore group ke invariants laagu karta hai. Doosre aggregates ko <b>Id</b> se reference karte hain, object se nahi. Root <b>domain events</b> bhi darj kar sakta hai: beeti baat ke facts jaise <code>TicketResolved</code>.</p>"
        },
        why: {
          en: "<p>If outsiders can add to the notes list directly, the \"resolved tickets take no notes\" rule is easy to bypass. One entry point means one place to check. Referencing by Id keeps each aggregate small, so it loads and saves on its own.</p>",
          hi: "<p>अगर बाहर वाले notes की list में सीधे जोड़ सकें, तो \"resolved ticket में notes नहीं\" वाला rule आसानी से लाँघा जा सकता है। एक ही entry point का मतलब जाँचने की एक ही जगह। Id से reference करने पर हर aggregate छोटा रहता है, और अलग से load और save होता है।</p>",
          hg: "<p>Agar bahar wale notes ki list mein seedhe jod saken, to \"resolved ticket mein notes nahi\" wala rule aasaani se laangha ja sakta hai. Ek hi entry point ka matlab jaanchne ki ek hi jagah. Id se reference karne par har aggregate chhota rehta hai, aur alag se load aur save hota hai.</p>"
        },
        analogy: {
          en: "<p>A train booking (PNR). Cancelling a passenger or changing the boarding point goes only through the PNR, which checks the rules. The PNR is the root, the passengers sit inside it, and the train is a separate thing, known only by its number.</p>",
          hi: "<p>Train booking (PNR)। एक passenger cancel करना या boarding point बदलना सिर्फ़ PNR से होता है, और PNR rules जाँचता है। PNR root है, passengers उसके अंदर हैं, और train अलग चीज़ है जिसे सिर्फ़ उसके number से जानते हैं।</p>",
          hg: "<p>Train booking (PNR). Ek passenger cancel karna ya boarding point badalna sirf PNR se hota hai, aur PNR rules jaanchta hai. PNR root hai, passengers uske andar hain, aur train alag cheez hai jise sirf uske number se jaante hain.</p>"
        },
        lines: [
          {
            code: "private readonly List<TicketNote> _notes = [];",
            note: {
              en: "The notes are private. Outside code cannot add, remove or reorder them directly.",
              hi: "Notes private हैं। बाहर का code उन्हें सीधे जोड़, हटा या बदल नहीं सकता।",
              hg: "Notes private hain. Bahar ka code unhe seedhe jod, hata ya badal nahi sakta."
            }
          },
          {
            code: "public IReadOnlyList<TicketNote> Notes => _notes.AsReadOnly();",
            note: {
              en: "Outsiders get a read-only view. <code>AsReadOnly()</code> makes a real wrapper, so a cast back to <code>List</code> does not work.",
              hi: "बाहर वालों को सिर्फ़ पढ़ने वाला view मिलता है। <code>AsReadOnly()</code> असली wrapper बनाता है, इसलिए वापस <code>List</code> में cast नहीं चलता।",
              hg: "Bahar walon ko sirf padhne wala view milta hai. <code>AsReadOnly()</code> asli wrapper banata hai, isliye wapas <code>List</code> mein cast nahi chalta."
            }
          },
          {
            code: "public CustomerId CustomerId { get; } = customerId;   // another aggregate: by Id, not by object",
            note: {
              en: "The ticket knows its customer only by <code>CustomerId</code>. The <code>Customer</code> aggregate is loaded and saved separately.",
              hi: "Ticket अपने customer को सिर्फ़ <code>CustomerId</code> से जानता है। <code>Customer</code> aggregate अलग से load और save होता है।",
              hg: "Ticket apne customer ko sirf <code>CustomerId</code> se jaanta hai. <code>Customer</code> aggregate alag se load aur save hota hai."
            }
          },
          {
            code: "if (IsResolved) throw new InvalidOperationException(\"A resolved ticket cannot take notes.\");",
            note: {
              en: "The invariant of the whole cluster sits in the root, in the one method every caller must use.",
              hi: "पूरे group का invariant root में है, उसी एक method में जिसे हर caller को इस्तेमाल करना पड़ता है।",
              hg: "Poore group ka invariant root mein hai, usi ek method mein jise har caller ko istemaal karna padta hai."
            }
          },
          {
            code: "_events.Add(new TicketResolved(Id));",
            note: {
              en: "A <b>domain event</b>: the root records the fact. It does not send an SMS itself; the application layer decides what to do with it.",
              hi: "<b>Domain event</b>: root यह fact note करता है। वह ख़ुद SMS नहीं भेजता; उसका क्या करना है, यह application layer तय करती है।",
              hg: "<b>Domain event</b>: root ye fact note karta hai. Woh khud SMS nahi bhejta; uska kya karna hai, ye application layer tay karti hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Exposing <code>List&lt;TicketNote&gt;</code> publicly, or returning <code>_notes</code> as <code>IReadOnlyList</code> without a wrapper (a caller can cast it back).</li><li>Making the aggregate huge: a <code>Customer</code> that holds every ticket it ever had. Keep it as small as the invariants allow.</li><li>Holding another aggregate as an object (<code>Customer</code> inside the ticket). Hold its Id.</li></ul>",
          hi: "<ul><li><code>List&lt;TicketNote&gt;</code> को public रखना, या <code>_notes</code> को बिना wrapper के <code>IReadOnlyList</code> की तरह लौटाना (caller उसे वापस cast कर सकता है)।</li><li>Aggregate को बहुत बड़ा बना देना: ऐसा <code>Customer</code> जो अपने सारे पुराने tickets रखे। उसे उतना ही छोटा रखो जितना invariants की ज़रूरत हो।</li><li>दूसरे aggregate को object की तरह रखना (ticket के अंदर <code>Customer</code>)। उसका Id रखो।</li></ul>",
          hg: "<ul><li><code>List&lt;TicketNote&gt;</code> ko public rakhna, ya <code>_notes</code> ko bina wrapper ke <code>IReadOnlyList</code> ki tarah lautana (caller use wapas cast kar sakta hai).</li><li>Aggregate ko bahut bada bana dena: aisa <code>Customer</code> jo apne saare purane tickets rakhe. Use utna hi chhota rakho jitna invariants ki zaroorat ho.</li><li>Doosre aggregate ko object ki tarah rakhna (ticket ke andar <code>Customer</code>). Uska Id rakho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use aggregates when several objects must stay consistent in one save (a ticket and its notes, an order and its lines). One aggregate = one transaction. For plain data with no rules between parts, simple classes and a normal table are enough.</p>",
          hi: "<p>Aggregates तब लो जब कई objects को एक save में साथ-साथ सही रहना हो (ticket और उसके notes, order और उसकी lines)। एक aggregate = एक transaction। जिन हिस्सों के बीच कोई rule नहीं, उस सादे data के लिए साधारण classes और normal table काफ़ी है।</p>",
          hg: "<p>Aggregates tab lo jab kai objects ko ek save mein saath-saath sahi rehna ho (ticket aur uske notes, order aur uski lines). Ek aggregate = ek transaction. Jin hisson ke beech koi rule nahi, us saade data ke liye saadharan classes aur normal table kaafi hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a new invariant: a ticket takes at most <b>3</b> notes, and the fourth <code>AddNote</code> throws <code>InvalidOperationException(\"A ticket takes at most 3 notes.\")</code>. Try to add 4 notes in a loop, print the error when it happens, and finally print the note count.</p>",
            hi: "<p>नया invariant जोड़ो: ticket में ज़्यादा से ज़्यादा <b>3</b> notes हो सकते हैं, और चौथा <code>AddNote</code> <code>InvalidOperationException(\"A ticket takes at most 3 notes.\")</code> फेंकता है। Loop में 4 notes जोड़ने की कोशिश करो, error आए तो print करो, और आख़िर में notes की गिनती print करो।</p>",
            hg: "<p>Naya invariant jodo: ticket mein zyada se zyada <b>3</b> notes ho sakte hain, aur chautha <code>AddNote</code> <code>InvalidOperationException(\"A ticket takes at most 3 notes.\")</code> phenkta hai. Loop mein 4 notes jodne ki koshish karo, error aaye to print karo, aur aakhir mein notes ki ginti print karo.</p>"
          },
          hint: {
            en: "<p>Check <code>_notes.Count &gt;= 3</code> inside <code>AddNote</code>, next to the resolved check. Callers do not change; the root is the only door.</p>",
            hi: "<p><code>AddNote</code> के अंदर, resolved वाले check के पास, <code>_notes.Count &gt;= 3</code> जाँचो। Callers नहीं बदलते; root ही अकेला दरवाज़ा है।</p>",
            hg: "<p><code>AddNote</code> ke andar, resolved wale check ke paas, <code>_notes.Count &gt;= 3</code> jaancho. Callers nahi badalte; root hi akela darwaza hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one more invariant in the root",
              hi: "हल: root में एक और invariant",
              hg: "Solution: root mein ek aur invariant"
            },
            src: "var ticket = new SupportTicket(501, \"Router not working\");\nfor (var i = 1; i <= 4; i++)\n{\n    try { ticket.AddNote(\"Meena\", $\"Note {i}\"); }\n    catch (InvalidOperationException e) { Console.WriteLine(e.Message); }\n}\nConsole.WriteLine($\"Notes: {ticket.Notes.Count}\");\n\npublic record TicketNote(string Agent, string Text);\n\npublic class SupportTicket(int id, string issue)\n{\n    private readonly List<TicketNote> _notes = [];\n\n    public int Id { get; } = id;\n    public string Issue { get; } = issue;\n    public bool IsResolved { get; private set; }\n    public IReadOnlyList<TicketNote> Notes => _notes.AsReadOnly();\n\n    public void AddNote(string agent, string text)\n    {\n        if (IsResolved) throw new InvalidOperationException(\"A resolved ticket cannot take notes.\");\n        if (_notes.Count >= 3) throw new InvalidOperationException(\"A ticket takes at most 3 notes.\");\n        _notes.Add(new TicketNote(agent, text));\n    }\n}",
            check: "run",
            expected: "A ticket takes at most 3 notes.\nNotes: 3"
          }
        },
        quiz: {
          q: {
            en: "Why does <code>SupportTicket</code> hold a <code>CustomerId</code> and not a whole <code>Customer</code> object?",
            hi: "<code>SupportTicket</code> पूरा <code>Customer</code> object नहीं, <code>CustomerId</code> क्यों रखता है?",
            hg: "<code>SupportTicket</code> poora <code>Customer</code> object nahi, <code>CustomerId</code> kyon rakhta hai?"
          },
          options: [
            {
              en: "A <code>Customer</code> object would make the C# compiler complain",
              hi: "<code>Customer</code> object रखने पर C# compiler शिकायत करता",
              hg: "<code>Customer</code> object rakhne par C# compiler shikayat karta"
            },
            {
              en: "Ids use less memory, and that is the only reason",
              hi: "Id कम memory लेता है, और बस यही वजह है",
              hg: "Id kam memory leta hai, aur bas yahi wajah hai"
            },
            {
              en: "Each aggregate stays small and is loaded and saved on its own",
              hi: "हर aggregate छोटा रहता है और अलग से load और save होता है",
              hg: "Har aggregate chhota rehta hai aur alag se load aur save hota hai"
            },
            {
              en: "Records cannot hold references to classes",
              hi: "Records classes के references नहीं रख सकते",
              hg: "Records classes ke references nahi rakh sakte"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Holding the Id keeps the boundary clear: one aggregate, one transaction. The ticket does not drag the whole customer (and all its other data) in with it. Memory is not the reason, and the compiler has no objection.</p>",
            hi: "<p>Id रखने से सीमा साफ़ रहती है: एक aggregate, एक transaction। Ticket पूरे customer (और उसके सारे दूसरे data) को अपने साथ नहीं घसीटता। Memory वजह नहीं है, और compiler को कोई दिक़्क़त नहीं।</p>",
            hg: "<p>Id rakhne se seema saaf rehti hai: ek aggregate, ek transaction. Ticket poore customer (aur uske saare doosre data) ko apne saath nahi ghaseetta. Memory wajah nahi hai, aur compiler ko koi dikkat nahi.</p>"
          }
        },
        recap: {
          en: "<ul><li>An aggregate is a cluster that changes as one unit; the root is its only door and enforces the invariants.</li><li>Other aggregates are held by Id; one aggregate = one transaction.</li><li>The root records domain events (<code>TicketResolved</code>); the application layer reacts to them.</li></ul>",
          hi: "<ul><li>Aggregate एक group है जो एक unit की तरह बदलता है; root उसका अकेला दरवाज़ा है और invariants लागू करता है।</li><li>दूसरे aggregates Id से रखे जाते हैं; एक aggregate = एक transaction।</li><li>Root domain events (<code>TicketResolved</code>) दर्ज करता है; application layer उन पर react करती है।</li></ul>",
          hg: "<ul><li>Aggregate ek group hai jo ek unit ki tarah badalta hai; root uska akela darwaza hai aur invariants laagu karta hai.</li><li>Doosre aggregates Id se rakhe jaate hain; ek aggregate = ek transaction.</li><li>Root domain events (<code>TicketResolved</code>) darj karta hai; application layer un par react karti hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "SupportTicket as an aggregate root: notes, customer by Id, and an event",
            hi: "Aggregate root के रूप में SupportTicket: notes, Id से customer, और एक event",
            hg: "Aggregate root ke roop mein SupportTicket: notes, Id se customer, aur ek event"
          },
          src: "var ticket = new SupportTicket(501, new CustomerId(7), \"Router not working\");\nticket.AddNote(\"Meena\", \"Called the customer\");\nticket.AddNote(\"Meena\", \"Replaced the router\");\nConsole.WriteLine($\"Notes: {ticket.Notes.Count}\");\n\nticket.Resolve();\ntry { ticket.AddNote(\"Kiran\", \"One more thing\"); }\ncatch (InvalidOperationException e) { Console.WriteLine(e.Message); }\n\n// The application layer reads the events and reacts (in a real app, around SaveChanges; see the Deep Dive).\nforeach (var domainEvent in ticket.Events)\n{\n    if (domainEvent is TicketResolved resolved)\n        Console.WriteLine($\"SMS to customer {ticket.CustomerId.Value}: ticket #{resolved.TicketId} resolved\");\n}\n\npublic readonly record struct CustomerId(int Value);\n\npublic record TicketNote(string Agent, string Text);\n\npublic interface IDomainEvent { }\n\npublic record TicketResolved(int TicketId) : IDomainEvent;\n\n// Aggregate root: the only door into the ticket and its notes.\npublic class SupportTicket(int id, CustomerId customerId, string issue)\n{\n    private readonly List<TicketNote> _notes = [];\n    private readonly List<IDomainEvent> _events = [];\n\n    public int Id { get; } = id;\n    public CustomerId CustomerId { get; } = customerId;   // another aggregate: by Id, not by object\n    public string Issue { get; } = issue;\n    public bool IsResolved { get; private set; }\n    public IReadOnlyList<TicketNote> Notes => _notes.AsReadOnly();\n    public IReadOnlyList<IDomainEvent> Events => _events.AsReadOnly();\n\n    public void AddNote(string agent, string text)\n    {\n        if (IsResolved) throw new InvalidOperationException(\"A resolved ticket cannot take notes.\");\n        _notes.Add(new TicketNote(agent, text));\n    }\n\n    public void Resolve()\n    {\n        if (IsResolved) return;\n        IsResolved = true;\n        _events.Add(new TicketResolved(Id));\n    }\n}",
          check: "run",
          expected: "Notes: 2\nA resolved ticket cannot take notes.\nSMS to customer 7: ticket #501 resolved"
        }
      ]
    },
    {
      id: "modular-monolith",
      depth: "short",
      title: {
        en: "Monolith, modular monolith or microservices?",
        hi: "Monolith, modular monolith या microservices: कौन-सा चुनें?",
        hg: "Monolith, modular monolith ya microservices: kaun sa chunein?"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 6 drew a boundary around one ticket and its notes. This lesson draws bigger borders, such as Support and Billing (the Deep Dive calls them <b>bounded contexts</b>), and asks how to <b>deploy</b> them: inside the one ASP.NET Core app from Days 12–13, or as separate services.",
          hi: "पाठ 6 ने एक ticket और उसके notes के चारों तरफ़ सीमा खींची। यह पाठ बड़ी सीमाएँ खींचता है, जैसे Support और Billing (Deep Dive इन्हें <b>bounded contexts</b> कहता है), और पूछता है कि इन्हें <b>deploy</b> कैसे करें: Days 12–13 वाले एक ही ASP.NET Core app के अंदर, या अलग services बनाकर।",
          hg: "Lesson 6 ne ek ticket aur uske notes ke charon taraf seema kheenchi. Ye lesson badi seemayen kheenchta hai, jaise Support aur Billing (Deep Dive inhe <b>bounded contexts</b> kehta hai), aur poochhta hai ki inhe <b>deploy</b> kaise karein: Days 12–13 wale ek hi ASP.NET Core app ke andar, ya alag services banakar."
        },
        what: {
          en: "<p>Three ways to ship the CRM:</p><ul><li><b>Monolith</b>: one deployable, one database. Simple, but with no walls it can become a \"big ball of mud\".</li><li><b>Modular monolith</b>: still one deployable, but split into modules. Each module has a small public contract and hides its inside.</li><li><b>Microservices</b>: many deployables, each owning its data, talking over the network.</li></ul>",
          hi: "<p>CRM को ship करने के तीन तरीक़े:</p><ul><li><b>Monolith</b>: एक deployable, एक database। सादा, पर दीवारें न हों तो \"big ball of mud\" बन सकता है।</li><li><b>Modular monolith</b>: अब भी एक deployable, पर modules में बँटा हुआ। हर module का एक छोटा public contract है और अंदर का हिस्सा छिपा रहता है।</li><li><b>Microservices</b>: कई deployables, हर एक अपना data रखता है, network पर बात करते हैं।</li></ul>",
          hg: "<p>CRM ko ship karne ke teen tareeke:</p><ul><li><b>Monolith</b>: ek deployable, ek database. Saada, par deewarein na hon to \"big ball of mud\" ban sakta hai.</li><li><b>Modular monolith</b>: ab bhi ek deployable, par modules mein banta hua. Har module ka ek chhota public contract hai aur andar ka hissa chhipa rehta hai.</li><li><b>Microservices</b>: kai deployables, har ek apna data rakhta hai, network par baat karte hain.</li></ul>"
        },
        why: {
          en: "<p>A modular monolith gives clear borders without the cost of the network: no partial failures, no distributed transactions, one deployment to debug. And if Billing ever needs its own team or scale, the contract is already there: only the implementation behind it changes.</p>",
          hi: "<p>Modular monolith network का ख़र्च उठाए बिना साफ़ सीमाएँ देता है: कोई partial failure नहीं, कोई distributed transaction नहीं, debug करने को एक ही deployment। और अगर Billing को कभी अपनी team या scale चाहिए, तो contract पहले से तैयार है: सिर्फ़ उसके पीछे की implementation बदलती है।</p>",
          hg: "<p>Modular monolith network ka kharch uthaye bina saaf seemayen deta hai: koi partial failure nahi, koi distributed transaction nahi, debug karne ko ek hi deployment. Aur agar Billing ko kabhi apni team ya scale chahiye, to contract pehle se taiyaar hai: sirf uske peeche ki implementation badalti hai.</p>"
        },
        analogy: {
          en: "<p>Housing. A joint family home has one kitchen and one meter: cheap and easy to coordinate (monolith). The same house with separate rooms and house rules (modular monolith). Separate flats, each with its own kitchen, meter and rent: more freedom, but more bills and more coordination (microservices).</p>",
          hi: "<p>रहने की मिसाल। joint family के घर में एक रसोई और एक meter है: सस्ता और तालमेल आसान (monolith)। वही घर अलग कमरों और घर के नियमों के साथ (modular monolith)। अलग-अलग flats, हर एक की अपनी रसोई, meter और किराया: ज़्यादा आज़ादी, पर ज़्यादा बिल और ज़्यादा तालमेल (microservices)।</p>",
          hg: "<p>Rehne ki misaal. Joint family ke ghar mein ek rasoi aur ek meter hai: sasta aur taalmel aasaan (monolith). Wahi ghar alag kamron aur ghar ke niyamon ke saath (modular monolith). Alag-alag flats, har ek ki apni rasoi, meter aur kiraya: zyada aazaadi, par zyada bill aur zyada taalmel (microservices).</p>"
        },
        lines: [
          {
            code: "bool HasUnpaidInvoice(int customerId);",
            note: {
              en: "The module's public contract: one small question. Other modules may use this and nothing else from Billing.",
              hi: "Module का public contract: एक छोटा सवाल। दूसरे modules Billing से बस यही इस्तेमाल कर सकते हैं, और कुछ नहीं।",
              hg: "Module ka public contract: ek chhota sawaal. Doosre modules Billing se bas yahi istemaal kar sakte hain, aur kuch nahi."
            }
          },
          {
            code: "internal class LocalBilling : IBillingApi",
            note: {
              en: "<code>internal</code> hides the class from other projects. In a real solution each module is its own project, so the compiler blocks accidental references.",
              hi: "<code>internal</code> class को दूसरे projects से छिपा देता है। असली solution में हर module अपना project होता है, इसलिए compiler अनजाने references रोक देता है।",
              hg: "<code>internal</code> class ko doosre projects se chhipa deta hai. Asli solution mein har module apna project hota hai, isliye compiler anjaane references rok deta hai."
            }
          },
          {
            code: "public class TicketsModule(IBillingApi billing)",
            note: {
              en: "Tickets depends on the contract, not on <code>LocalBilling</code>. It does not know whether Billing is local or remote.",
              hi: "Tickets contract पर निर्भर है, <code>LocalBilling</code> पर नहीं। उसे पता ही नहीं कि Billing local है या remote।",
              hg: "Tickets contract par nirbhar hai, <code>LocalBilling</code> par nahi. Use pata hi nahi ki Billing local hai ya remote."
            }
          },
          {
            code: "var remoteTickets = new TicketsModule(new RemoteBillingStandIn());",
            note: {
              en: "The \"extraction\" step: same <code>TicketsModule</code>, new implementation. The answer is the same, but now there is a network call (the <code>[http]</code> line).",
              hi: "\"Extraction\" का क़दम: वही <code>TicketsModule</code>, नई implementation। जवाब वही है, पर अब एक network call है (<code>[http]</code> वाली line)।",
              hg: "\"Extraction\" ka kadam: wahi <code>TicketsModule</code>, nayi implementation. Jawab wahi hai, par ab ek network call hai (<code>[http]</code> wali line)."
            }
          },
          {
            code: "Console.WriteLine($\"[http] GET /billing/unpaid/{customerId}\");",
            note: {
              en: "A hint of the price: a remote call can be slow, fail, or time out. A local method call cannot. Microservices pay this on every border.",
              hi: "क़ीमत का इशारा: remote call धीमी हो सकती है, fail या time out हो सकती है। Local method call नहीं होती। Microservices हर सीमा पर यह क़ीमत चुकाते हैं।",
              hg: "Keemat ka ishaara: remote call dheemi ho sakti hai, fail ya time out ho sakti hai. Local method call nahi hoti. Microservices har seema par ye keemat chukate hain."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Going to microservices for a team of five \"because it is modern\". You get network failures and operations work without the benefits.</li><li>Calling a monolith \"modular\" without enforcing it. If any code can reach any table, the borders decay. Use separate projects and architecture tests.</li><li>Letting modules join each other's tables. Talk through the contract or through events.</li></ul>",
          hi: "<ul><li>पाँच लोगों की team के लिए \"आधुनिक है\" कहकर microservices पर जाना। फ़ायदे के बिना network failures और operations का काम मिलता है।</li><li>Monolith को बिना लागू किए \"modular\" कह देना। अगर कोई भी code किसी भी table तक पहुँच सके, तो सीमाएँ गल जाती हैं। अलग projects और architecture tests लगाओ।</li><li>Modules को एक-दूसरे की tables join करने देना। Contract या events से बात करो।</li></ul>",
          hg: "<ul><li>Paanch logon ki team ke liye \"aadhunik hai\" kehkar microservices par jaana. Faayde ke bina network failures aur operations ka kaam milta hai.</li><li>Monolith ko bina laagu kiye \"modular\" keh dena. Agar koi bhi code kisi bhi table tak pahunch sake, to seemayen gal jaati hain. Alag projects aur architecture tests lagao.</li><li>Modules ko ek-doosre ki tables join karne dena. Contract ya events se baat karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>A common advice is to <b>start with a modular monolith</b> and extract a service only when a real need appears: a second team that must release on its own, or one module with very different load. It is a trade-off: it delays operations cost but needs discipline to keep the walls. Choose microservices only with several teams, clear borders and the operations skill (CI/CD, monitoring, on-call).</p>",
          hi: "<p>आम सलाह है कि <b>modular monolith से शुरू करो</b> और service तभी निकालो जब असली ज़रूरत आए: दूसरी team जिसे अलग release करना है, या ऐसा module जिसका load बहुत अलग है। यह trade-off है: operations का ख़र्च टलता है, पर दीवारें बनाए रखने का discipline चाहिए। Microservices तभी लो जब कई teams हों, सीमाएँ साफ़ हों और operations का हुनर हो (CI/CD, monitoring, on-call)।</p>",
          hg: "<p>Aam salaah hai ki <b>modular monolith se shuru karo</b> aur service tabhi nikalo jab asli zaroorat aaye: doosri team jise alag release karna hai, ya aisa module jiska load bahut alag hai. Ye trade-off hai: operations ka kharch talta hai, par deewarein banaye rakhne ka discipline chahiye. Microservices tabhi lo jab kai teams hon, seemayen saaf hon aur operations ka hunar ho (CI/CD, monitoring, on-call).</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>AlwaysUnpaidBilling : IBillingApi</code>, a stub whose <code>HasUnpaidInvoice</code> always returns <code>true</code>. Use it with <code>TicketsModule</code> to open tickets for Asha and Meena, and print both results. It shows how the contract makes the module easy to test.</p>",
            hi: "<p><code>AlwaysUnpaidBilling : IBillingApi</code> लिखो, एक stub जिसका <code>HasUnpaidInvoice</code> हमेशा <code>true</code> लौटाए। उसे <code>TicketsModule</code> के साथ लगाकर Asha और Meena के tickets खोलो और दोनों नतीजे print करो। इससे दिखता है कि contract की वजह से module को test करना आसान है।</p>",
            hg: "<p><code>AlwaysUnpaidBilling : IBillingApi</code> likho, ek stub jiska <code>HasUnpaidInvoice</code> hamesha <code>true</code> lautaye. Use <code>TicketsModule</code> ke saath lagakar Asha aur Meena ke tickets kholo aur dono nateeje print karo. Isse dikhta hai ki contract ki wajah se module ko test karna aasaan hai.</p>"
          },
          hint: {
            en: "<p>Implement the one-method interface and pass the stub to <code>new TicketsModule(...)</code>. <code>TicketsModule</code> does not change.</p>",
            hi: "<p>एक-method वाला interface implement करो और stub को <code>new TicketsModule(...)</code> में दो। <code>TicketsModule</code> नहीं बदलेगा।</p>",
            hg: "<p>Ek-method wala interface implement karo aur stub ko <code>new TicketsModule(...)</code> mein do. <code>TicketsModule</code> nahi badlega.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a stub behind the contract",
              hi: "हल: contract के पीछे एक stub",
              hg: "Solution: contract ke peeche ek stub"
            },
            src: "using Billing;\nusing Tickets;\n\nvar tickets = new TicketsModule(new AlwaysUnpaidBilling());\nConsole.WriteLine(tickets.Open(7, \"Asha\"));\nConsole.WriteLine(tickets.Open(8, \"Meena\"));\n\nnamespace Billing\n{\n    public interface IBillingApi\n    {\n        bool HasUnpaidInvoice(int customerId);\n    }\n\n    public class AlwaysUnpaidBilling : IBillingApi\n    {\n        public bool HasUnpaidInvoice(int customerId) => true;\n    }\n}\n\nnamespace Tickets\n{\n    using Billing;\n\n    public class TicketsModule(IBillingApi billing)\n    {\n        public string Open(int customerId, string name) =>\n            billing.HasUnpaidInvoice(customerId)\n                ? $\"{name} has an unpaid invoice, ticket refused\"\n                : $\"Ticket opened for {name}\";\n    }\n}",
            check: "run",
            expected: "Asha has an unpaid invoice, ticket refused\nMeena has an unpaid invoice, ticket refused"
          }
        },
        quiz: {
          q: {
            en: "A manager wants microservices for a team of five developers on a young product. What is the sensible first step?",
            hi: "Manager पाँच developers की team के नए product के लिए microservices चाहता है। समझदारी भरा पहला क़दम क्या है?",
            hg: "Manager paanch developers ki team ke naye product ke liye microservices chahta hai. Samajhdaari bhara pehla kadam kya hai?"
          },
          options: [
            {
              en: "Split into one service per table and deploy each on its own",
              hi: "हर table के लिए एक service बनाकर हर एक अलग deploy करना",
              hg: "Har table ke liye ek service banakar har ek alag deploy karna"
            },
            {
              en: "Keep one deployable and add a Kubernetes cluster first",
              hi: "एक deployable रखना और पहले Kubernetes cluster लगाना",
              hg: "Ek deployable rakhna aur pehle Kubernetes cluster lagana"
            },
            {
              en: "Keep a monolith with no internal borders, because borders are not needed",
              hi: "बिना अंदरूनी सीमाओं का monolith रखना, क्योंकि सीमाओं की ज़रूरत नहीं",
              hg: "Bina andaruni seemaon ka monolith rakhna, kyonki seemaon ki zaroorat nahi"
            },
            {
              en: "Build a modular monolith with clear contracts, and extract a service only when a real need appears",
              hi: "साफ़ contracts वाला modular monolith बनाना, और service तभी निकालना जब असली ज़रूरत आए",
              hg: "Saaf contracts wala modular monolith banana, aur service tabhi nikalna jab asli zaroorat aaye"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>With five developers and an unclear domain, the operations cost of many services is usually higher than the benefit. A modular monolith keeps the borders cheap to change and can be split later. This is a trade-off, not a rule, so write the decision down (see the Deep Dive on ADRs).</p>",
            hi: "<p>पाँच developers हों और domain अभी साफ़ न हो, तो कई services का operations ख़र्च आम तौर पर फ़ायदे से ज़्यादा होता है। Modular monolith में सीमाएँ बदलना सस्ता रहता है और बाद में बाँटा जा सकता है। यह trade-off है, नियम नहीं, इसलिए फ़ैसला लिख लो (ADR वाला Deep Dive देखो)।</p>",
            hg: "<p>Paanch developers hon aur domain abhi saaf na ho, to kai services ka operations kharch aam taur par faayde se zyada hota hai. Modular monolith mein seemayen badalna sasta rehta hai aur baad mein baanta ja sakta hai. Ye trade-off hai, niyam nahi, isliye faisla likh lo (ADR wala Deep Dive dekho).</p>"
          }
        },
        recap: {
          en: "<ul><li>Monolith: one deployable. Modular monolith: one deployable with walled modules. Microservices: many deployables over the network.</li><li>A module exposes a small contract (<code>IBillingApi</code>) and hides the rest; the contract is what makes a later extraction cheap.</li><li>Start simple (modular monolith) and extract a service when a real need appears.</li></ul>",
          hi: "<ul><li>Monolith: एक deployable। Modular monolith: एक deployable, दीवारों वाले modules के साथ। Microservices: network पर कई deployables।</li><li>Module एक छोटा contract (<code>IBillingApi</code>) दिखाता है और बाक़ी छिपाता है; यही contract बाद में service निकालना सस्ता बनाता है।</li><li>सादा शुरू करो (modular monolith) और असली ज़रूरत आने पर service निकालो।</li></ul>",
          hg: "<ul><li>Monolith: ek deployable. Modular monolith: ek deployable, deewaron wale modules ke saath. Microservices: network par kai deployables.</li><li>Module ek chhota contract (<code>IBillingApi</code>) dikhata hai aur baaqi chhipata hai; yahi contract baad mein service nikalna sasta banata hai.</li><li>Saada shuru karo (modular monolith) aur asli zaroorat aane par service nikalo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Tickets uses Billing only through IBillingApi; the implementation can be swapped",
            hi: "Tickets, Billing को सिर्फ़ IBillingApi से use करता है; implementation बदली जा सकती है",
            hg: "Tickets, Billing ko sirf IBillingApi se use karta hai; implementation badli ja sakti hai"
          },
          src: "using Billing;\nusing Tickets;\n\n// Today: Billing is a module inside the same app.\nvar tickets = new TicketsModule(BillingModule.Create());\nConsole.WriteLine(tickets.Open(7, \"Asha\"));\nConsole.WriteLine(tickets.Open(9, \"Ravi\"));\n\n// Later: Billing becomes a service. Only the implementation behind the contract changes.\nvar remoteTickets = new TicketsModule(new RemoteBillingStandIn());\nConsole.WriteLine(remoteTickets.Open(9, \"Ravi\"));\n\nnamespace Billing\n{\n    // Public contract: the only thing other modules may use.\n    public interface IBillingApi\n    {\n        bool HasUnpaidInvoice(int customerId);\n    }\n\n    public static class BillingModule\n    {\n        public static IBillingApi Create() => new LocalBilling();\n    }\n\n    // Hidden inside the module (internal): other modules cannot reach it.\n    internal class LocalBilling : IBillingApi\n    {\n        private readonly HashSet<int> _unpaid = [9];\n\n        public bool HasUnpaidInvoice(int customerId) => _unpaid.Contains(customerId);\n    }\n\n    // Stand-in for an HTTP client that would call a separate Billing service.\n    public class RemoteBillingStandIn : IBillingApi\n    {\n        public bool HasUnpaidInvoice(int customerId)\n        {\n            Console.WriteLine($\"[http] GET /billing/unpaid/{customerId}\");\n            return customerId == 9;\n        }\n    }\n}\n\nnamespace Tickets\n{\n    using Billing;\n\n    public class TicketsModule(IBillingApi billing)\n    {\n        public string Open(int customerId, string name) =>\n            billing.HasUnpaidInvoice(customerId)\n                ? $\"{name} has an unpaid invoice, ticket refused\"\n                : $\"Ticket opened for {name}\";\n    }\n}",
          check: "run",
          expected: "Ticket opened for Asha\nRavi has an unpaid invoice, ticket refused\n[http] GET /billing/unpaid/9\nRavi has an unpaid invoice, ticket refused"
        }
      ]
    },
    {
      id: "bounded-context",
      depth: "detailed",
      title: {
        en: "Bounded context: one word, different models",
        hi: "Bounded context: एक शब्द, अलग models",
        hg: "Bounded context: ek shabd, alag models"
      },
      body: {
        en: "<p>One person, many roles. At the bank you are an account holder, at school you are a parent, at the office you are an employee. Each place keeps only the details it needs, in its own words. A form from one place is translated, not copied, at another.</p>\n<p>A <b>bounded context</b> is the area where one model and one language are valid. In Support, a Customer is someone you call about a ticket. In Billing, the same person is a Payer with a legal name and a credit limit. They are two models of one real person.</p><p>Contexts talk through a small contract (an Id and a few fields), and a <b>translator</b> at the border turns one model into the other.</p>\n<p>One shared <code>Customer</code> class that serves Support, Billing and Marketing grows to 60 fields, and every team is afraid to change it. Separate models stay small, and each team can change its own without asking the others.</p>\n<ul><li>One giant <code>Customer</code> shared by every team \"so there is only one truth\". It becomes a bottleneck that nobody dares to change.</li><li>Sharing one database table between contexts, so a change in one silently breaks the other.</li><li>Using different words for the same thing inside one context. Pick one word per concept and use it in talks, tickets and code (the <b>ubiquitous language</b>).</li></ul>\n<p><b>Quick check:</b> Support has a <code>Customer</code> and Billing has a <code>Payer</code> for the same person. That is fine: each bounded context has its own model, and a translator joins them.</p>\n<p>Draw context borders when the same word means different things to different teams, or when teams step on each other's changes. In a small app with one team and one vocabulary, one model is fine. The language idea (one word per concept) still helps there.</p>",
        hi: "<p>एक इंसान, कई roles। बैंक में आप account holder हैं, स्कूल में parent, दफ़्तर में employee। हर जगह सिर्फ़ वही details रखी जाती हैं जो चाहिए, अपनी भाषा में। एक जगह का form दूसरी जगह copy नहीं होता, translate होता है।</p>\n<p><b>Bounded context</b> वह area है जहाँ एक model और एक भाषा सही मानी जाती है। Support में Customer वह है जिसे ticket के लिए फ़ोन करना है। Billing में वही इंसान Payer है जिसका legal नाम और credit limit है। एक असली इंसान के ये दो models हैं।</p><p>Contexts एक छोटे contract (एक Id और कुछ fields) से बात करते हैं, और सीमा पर एक <b>translator</b> एक model को दूसरे में बदल देता है।</p>\n<p>Support, Billing और Marketing तीनों के काम आने वाली एक shared <code>Customer</code> class 60 fields तक फूल जाती है, और हर team उसे बदलने से डरती है। अलग models छोटे रहते हैं, और हर team अपना model दूसरों से पूछे बिना बदल सकती है।</p>\n<ul><li>\"सच एक ही रहे\" सोचकर हर team के बीच एक बहुत बड़ा <code>Customer</code> बाँटना। वह ऐसी रुकावट बन जाती है जिसे बदलने की हिम्मत कोई नहीं करता।</li><li>Contexts के बीच एक database table shared करना, ताकि एक में बदलाव चुपचाप दूसरे को तोड़ दे।</li><li>एक ही context में एक ही चीज़ के लिए अलग शब्द इस्तेमाल करना। हर concept के लिए एक शब्द चुनो और बातचीत, tickets व code में वही रखो (<b>ubiquitous language</b>)।</li></ul>\n<p><b>झटपट जाँच:</b> Support में <code>Customer</code> है और Billing में उसी इंसान के लिए <code>Payer</code>। यह ठीक है: हर bounded context का अपना model है, और translator उन्हें जोड़ता है।</p>\n<p>Context की सीमाएँ तब खींचो जब एक ही शब्द के अलग teams के लिए अलग मतलब हों, या teams एक-दूसरे के बदलाव कुचल रही हों। एक team और एक vocabulary वाले छोटे app में एक model ठीक है। Language वाला विचार (हर concept के लिए एक शब्द) वहाँ भी काम आता है।</p>",
        hg: "<p>Ek insaan, kai roles. Bank mein aap account holder hain, school mein parent, daftar mein employee. Har jagah sirf wahi details rakhi jaati hain jo chahiye, apni bhasha mein. Ek jagah ka form doosri jagah copy nahi hota, translate hota hai.</p>\n<p><b>Bounded context</b> woh area hai jahan ek model aur ek bhasha sahi maani jaati hai. Support mein Customer woh hai jise ticket ke liye phone karna hai. Billing mein wahi insaan Payer hai jiska legal naam aur credit limit hai. Ek asli insaan ke ye do models hain.</p><p>Contexts ek chhote contract (ek Id aur kuch fields) se baat karte hain, aur seema par ek <b>translator</b> ek model ko doosre mein badal deta hai.</p>\n<p>Support, Billing aur Marketing teeno ke kaam aane wali ek shared <code>Customer</code> class 60 fields tak phool jaati hai, aur har team use badalne se darti hai. Alag models chhote rehte hain, aur har team apna model doosron se poochhe bina badal sakti hai.</p>\n<ul><li>\"Sach ek hi rahe\" sochkar har team ke beech ek bahut bada <code>Customer</code> baantna. Woh aisi rukaawat ban jaati hai jise badalne ki himmat koi nahi karta.</li><li>Contexts ke beech ek database table shared karna, taaki ek mein badlaav chupchaap doosre ko tod de.</li><li>Ek hi context mein ek hi cheez ke liye alag shabd istemaal karna. Har concept ke liye ek shabd chuno aur baatcheet, tickets va code mein wahi rakho (<b>ubiquitous language</b>).</li></ul>\n<p><b>Jhatpat jaanch:</b> Support mein <code>Customer</code> hai aur Billing mein usi insaan ke liye <code>Payer</code>. Ye theek hai: har bounded context ka apna model hai, aur translator unhe jodta hai.</p>\n<p>Context ki seemayen tab kheencho jab ek hi shabd ke alag teams ke liye alag matlab hon, ya teams ek-doosre ke badlaav kuchal rahi hon. Ek team aur ek vocabulary wale chhote app mein ek model theek hai. Language wala vichaar (har concept ke liye ek shabd) wahan bhi kaam aata hai.</p>"
      },
      code: [
        {
          caption: {
            en: "Two contexts, two models of the same person, and a translator at the border",
            hi: "दो contexts, एक ही इंसान के दो models, और सीमा पर translator",
            hg: "Do contexts, ek hi insaan ke do models, aur seema par translator"
          },
          src: "using Billing;\n\nvar customer = new Support.Customer(7, \"Asha\", \"9876543210\");\nConsole.WriteLine(customer.Describe());\n\n// Crossing the border: Support publishes a small summary,\n// Billing translates it into its own model.\nvar payer = PayerTranslator.From(customer.ToSummary());\nConsole.WriteLine(payer.Describe());\n\nnamespace Support\n{\n    public record CustomerSummary(int Id, string Name);\n\n    public class Customer(int id, string name, string phone)\n    {\n        public string Describe() => $\"Support: call {name} on {phone}\";\n\n        public CustomerSummary ToSummary() => new(id, name);\n    }\n}\n\nnamespace Billing\n{\n    using Support;\n\n    public class Payer(int customerId, string legalName, decimal creditLimit)\n    {\n        public string Describe() => $\"Billing: {legalName} (customer {customerId}) has credit limit {creditLimit}\";\n    }\n\n    public static class PayerTranslator\n    {\n        public static Payer From(CustomerSummary summary) => new(summary.Id, summary.Name, 0m);\n    }\n}",
          check: "run",
          expected: "Support: call Asha on 9876543210\nBilling: Asha (customer 7) has credit limit 0"
        }
      ]
    },
    {
      id: "dbcontext-placement",
      depth: "detailed",
      title: {
        en: "Where the DbContext lives (EF Core adapter)",
        hi: "DbContext कहाँ रहता है (EF Core adapter)",
        hg: "DbContext kahan rehta hai (EF Core adapter)"
      },
      body: {
        en: "<ul><li><b>The common answer:</b> the <code>DbContext</code> lives in <b>Infrastructure</b>, behind a port that the Application layer owns. The snippet shows the handler, the port, the EF Core adapter and the <code>AddInfrastructure()</code> registration.</li><li><b>Commit through one port.</b> The handler saves once through an <code>IUnitOfWork</code> (Day 11); the repository only adds. <code>DbContext</code> already has <code>SaveChangesAsync(CancellationToken)</code>, so it can implement that interface itself.</li><li><b>The other school:</b> some teams let the Application layer use <code>DbContext</code> (or an <code>IAppDbContext</code> interface exposing <code>DbSet&lt;T&gt;</code>) directly. That avoids thin repositories and keeps all of EF Core's power. A pure Application layer is more portable and easier to test without EF. Pick one and write it in the team conventions.</li><li><b>Keep the domain free of EF.</b> Map the classes in Infrastructure with the Fluent API. EF Core can write to <code>private set</code> properties and backing fields, so encapsulation (lesson 4) survives.</li></ul><p><b>When to use the port-and-adapter style:</b> rules that must outlive the framework, several adapters (database, queue, third-party API) or heavy unit testing of use cases. <b>When not:</b> a small CRUD service, where a thin repository only forwards calls; use <code>DbContext</code> directly there.</p>",
        hi: "<ul><li><b>आम जवाब:</b> <code>DbContext</code> <b>Infrastructure</b> में रहता है, उस port के पीछे जिसकी मालिक Application layer है। Snippet में handler, port, EF Core adapter और <code>AddInfrastructure()</code> registration दिखते हैं।</li><li><b>Commit एक port से।</b> Handler एक बार <code>IUnitOfWork</code> से save करता है (Day 11); repository सिर्फ़ add करता है। <code>DbContext</code> में <code>SaveChangesAsync(CancellationToken)</code> पहले से है, इसलिए वह यह interface ख़ुद implement कर सकता है।</li><li><b>दूसरी सोच:</b> कुछ teams Application layer को सीधे <code>DbContext</code> (या <code>DbSet&lt;T&gt;</code> देने वाला <code>IAppDbContext</code> interface) इस्तेमाल करने देती हैं। इससे पतले repositories बचते हैं और EF Core की पूरी ताक़त मिलती है। Pure Application layer ज़्यादा portable है और EF के बिना test करना आसान। एक चुनो और team conventions में लिख दो।</li><li><b>Domain को EF से दूर रखो।</b> Classes को Infrastructure में Fluent API से map करो। EF Core <code>private set</code> properties और backing fields में लिख सकता है, इसलिए encapsulation (पाठ 4) बचा रहता है।</li></ul><p><b>Port-and-adapter style कब लें:</b> जब rules framework से ज़्यादा जीने चाहिए, कई adapters हों (database, queue, third-party API) या use cases की भारी unit testing हो। <b>कब नहीं:</b> छोटी CRUD service, जहाँ पतला repository सिर्फ़ calls आगे भेजता है; वहाँ सीधे <code>DbContext</code> लो।</p>",
        hg: "<ul><li><b>Aam jawab:</b> <code>DbContext</code> <b>Infrastructure</b> mein rehta hai, us port ke peeche jiski maalik Application layer hai. Snippet mein handler, port, EF Core adapter aur <code>AddInfrastructure()</code> registration dikhte hain.</li><li><b>Commit ek port se.</b> Handler ek baar <code>IUnitOfWork</code> se save karta hai (Day 11); repository sirf add karta hai. <code>DbContext</code> mein <code>SaveChangesAsync(CancellationToken)</code> pehle se hai, isliye woh ye interface khud implement kar sakta hai.</li><li><b>Doosri soch:</b> kuch teams Application layer ko seedhe <code>DbContext</code> (ya <code>DbSet&lt;T&gt;</code> dene wala <code>IAppDbContext</code> interface) istemaal karne deti hain. Isse patle repositories bachte hain aur EF Core ki poori taaqat milti hai. Shuddh Application layer zyada portable hai aur EF ke bina test karna aasaan. Ek chuno aur team conventions mein likh do.</li><li><b>Domain ko EF se door rakho.</b> Classes ko Infrastructure mein Fluent API se map karo. EF Core <code>private set</code> properties aur backing fields mein likh sakta hai, isliye encapsulation (lesson 4) bacha rehta hai.</li></ul><p><b>Port-and-adapter style kab lein:</b> jab rules framework se zyada jeene chahiye, kai adapters hon (database, queue, third-party API) ya use cases ki bhaari unit testing ho. <b>Kab nahi:</b> chhoti CRUD service, jahan patla repository sirf calls aage bhejta hai; wahan seedhe <code>DbContext</code> lo.</p>"
      },
      code: [
        {
          caption: {
            en: "The Application layer owns the port; Infrastructure implements it with EF Core. Namespaces stand in for projects here.",
            hi: "Application layer port की मालिक है; Infrastructure उसे EF Core से implement करती है। यहाँ namespaces projects की जगह हैं।",
            hg: "Application layer port ki maalik hai; Infrastructure use EF Core se implement karti hai. Yahan namespaces projects ki jagah hain."
          },
          check: "compile",
          packages: [
            "Microsoft.EntityFrameworkCore",
            "Microsoft.Extensions.DependencyInjection"
          ],
          src: "using Microsoft.EntityFrameworkCore;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Shop.Domain\n{\n    public class Order\n    {\n        public Guid Id { get; private set; } = Guid.NewGuid();\n        public decimal Total { get; private set; }\n\n        public void AddItem(decimal price)\n        {\n            if (price <= 0) throw new ArgumentOutOfRangeException(nameof(price));\n            Total += price;\n        }\n    }\n}\n\nnamespace Shop.Application\n{\n    using Shop.Domain;\n\n    // The port: defined by the inner layer, in its own words.\n    public interface IOrderRepository\n    {\n        void Add(Order order);\n    }\n\n    // Commit port: the handler saves once (Day 11), the repository only adds.\n    public interface IUnitOfWork\n    {\n        Task<int> SaveChangesAsync(CancellationToken ct = default);\n    }\n\n    public class PlaceOrderHandler(IOrderRepository orders, IUnitOfWork unitOfWork)\n    {\n        public async Task<Guid> HandleAsync(decimal price, CancellationToken ct)\n        {\n            var order = new Order();\n            order.AddItem(price);\n            orders.Add(order);\n            await unitOfWork.SaveChangesAsync(ct);\n            return order.Id;\n        }\n    }\n}\n\nnamespace Shop.Infrastructure\n{\n    using Shop.Application;\n    using Shop.Domain;\n\n    // DbContext already has SaveChangesAsync(CancellationToken), so it can serve as the IUnitOfWork.\n    public class ShopDbContext(DbContextOptions<ShopDbContext> options) : DbContext(options), IUnitOfWork\n    {\n        public DbSet<Order> Orders => Set<Order>();\n    }\n\n    // The adapter: knows EF Core and the Application port. Nothing inward knows it.\n    public class EfOrderRepository(ShopDbContext db) : IOrderRepository\n    {\n        public void Add(Order order) => db.Orders.Add(order);\n    }\n\n    public static class DependencyInjection\n    {\n        public static IServiceCollection AddInfrastructure(this IServiceCollection services)\n        {\n            // AddDbContext(...) with a real provider goes here too.\n            services.AddScoped<IOrderRepository, EfOrderRepository>();\n            services.AddScoped<IUnitOfWork>(sp => sp.GetRequiredService<ShopDbContext>());\n            return services;\n        }\n    }\n}"
        }
      ]
    },
    {
      id: "ddd-events-pitfalls",
      depth: "detailed",
      title: {
        en: "DDD details: domain events, typed Ids, value-object pitfalls",
        hi: "DDD की बारीकियाँ: domain events, typed Ids, value object के फंदे",
        hg: "DDD ki baarikiyan: domain events, typed Ids, value object ke phande"
      },
      body: {
        en: "<ul><li><b>When to dispatch a domain event.</b> Just <i>before</i> <code>SaveChanges</code>: handlers run in the same transaction, so side effects are atomic with the change. Just <i>after</i> it: separate transactions, eventually consistent, and it keeps one aggregate per transaction. An <b>outbox</b> table makes the \"after\" route reliable (Day 16).</li><li><b>Typed Ids.</b> <code>CustomerId</code> and <code>TicketId</code> as <code>readonly record struct</code> stop you from passing a customer Id where a ticket Id is expected; with plain <code>int</code> the compiler cannot tell.</li><li><b>Record pitfalls.</b> A record's equality is member-wise, but a <code>List&lt;T&gt;</code> member is compared by <b>reference</b>. And <code>with</code> makes a shallow copy that skips your constructor, so validate in an <code>init</code> accessor if the rule must always hold. Both are shown in the puzzles below.</li><li><b>EF Core mapping.</b> Value objects map well as <b>complex types</b> (EF Core 8+; EF Core 10 added optional complex types and JSON mapping). They suit value objects because they have no identity of their own, unlike owned types, which are entity types.</li></ul><p><b>When to use domain events:</b> when other parts must react to a fact (send an SMS, update a report) without the aggregate knowing about them. <b>When not:</b> for a simple call in one use case, a direct method call is clearer than an event.</p>",
        hi: "<ul><li><b>Domain event कब dispatch करें।</b> <code>SaveChanges</code> से ठीक <i>पहले</i>: handlers उसी transaction में चलते हैं, इसलिए side effects बदलाव के साथ atomic रहते हैं। उसके <i>बाद</i>: अलग transactions, eventually consistent, और एक transaction में एक aggregate बना रहता है। <b>Outbox</b> table \"बाद\" वाले रास्ते को भरोसेमंद बनाती है (Day 16)।</li><li><b>Typed Ids।</b> <code>readonly record struct</code> के रूप में <code>CustomerId</code> और <code>TicketId</code> आपको ticket Id की जगह customer Id देने से रोकते हैं; सादे <code>int</code> के साथ compiler फ़र्क़ नहीं कर पाता।</li><li><b>Record के फंदे।</b> Record की equality member-दर-member है, पर <code>List&lt;T&gt;</code> member <b>reference</b> से compare होता है। और <code>with</code> shallow copy बनाता है जो आपके constructor को लाँघ जाती है, इसलिए rule हमेशा सच रहना हो तो <code>init</code> accessor में validate करो। दोनों नीचे के puzzles में दिखते हैं।</li><li><b>EF Core mapping।</b> Value objects <b>complex types</b> के रूप में अच्छे map होते हैं (EF Core 8+; EF Core 10 ने optional complex types और JSON mapping जोड़ी)। ये value objects को जँचते हैं क्योंकि इनकी अपनी कोई पहचान नहीं, owned types के उलट, जो entity types हैं।</li></ul><p><b>Domain events कब लें:</b> जब दूसरे हिस्सों को किसी fact पर react करना हो (SMS भेजना, report अपडेट करना) और aggregate को उनकी ख़बर न हो। <b>कब नहीं:</b> एक use case के सीधे call के लिए, event से सीधा method call ज़्यादा साफ़ है।</p>",
        hg: "<ul><li><b>Domain event kab dispatch karein.</b> <code>SaveChanges</code> se theek <i>pehle</i>: handlers usi transaction mein chalte hain, isliye side effects badlaav ke saath atomic rehte hain. Uske <i>baad</i>: alag transactions, eventually consistent, aur ek transaction mein ek aggregate bana rehta hai. <b>Outbox</b> table \"baad\" wale raaste ko bharosemand banati hai (Day 16).</li><li><b>Typed Ids.</b> <code>readonly record struct</code> ke roop mein <code>CustomerId</code> aur <code>TicketId</code> aapko ticket Id ki jagah customer Id dene se rokte hain; saade <code>int</code> ke saath compiler farq nahi kar paata.</li><li><b>Record ke phande.</b> Record ki equality member-dar-member hai, par <code>List&lt;T&gt;</code> member <b>reference</b> se compare hota hai. Aur <code>with</code> shallow copy banata hai jo aapke constructor ko laangh jaati hai, isliye rule hamesha sach rehna ho to <code>init</code> accessor mein validate karo. Dono neeche ke puzzles mein dikhte hain.</li><li><b>EF Core mapping.</b> Value objects <b>complex types</b> ke roop mein achhe map hote hain (EF Core 8+; EF Core 10 ne optional complex types aur JSON mapping jodi). Ye value objects ko jachte hain kyonki inki apni koi pehchaan nahi, owned types ke ulat, jo entity types hain.</li></ul><p><b>Domain events kab lein:</b> jab doosre hisson ko kisi fact par react karna ho (SMS bhejna, report update karna) aur aggregate ko unki khabar na ho. <b>Kab nahi:</b> ek use case ke seedhe call ke liye, event se seedha method call zyada saaf hai.</p>"
      }
    },
    {
      id: "vertical-slices",
      depth: "detailed",
      title: {
        en: "Vertical slices and enforcing module borders",
        hi: "Vertical slices और module की सीमाएँ लागू करना",
        hg: "Vertical slices aur module ki seemayen laagu karna"
      },
      body: {
        en: "<ul><li><b>Vertical slice:</b> one folder per use case (<code>PlaceOrder</code>, <code>CancelOrder</code>) holding the endpoint, request, handler and data access. Related code changes together. A slice can use plain EF Core queries for a simple read and a richer domain model for a complex write; the style may differ by slice.</li><li><b>Trade-offs:</b> slices cut ceremony and cross-folder jumping, but allow duplication and drift between slices, and give less enforced structure, so the team must agree conventions.</li><li><b>Layers and slices combine:</b> modules with slices inside (the layout below). Split by <b>business capability</b> (Orders, Billing), not by technical layer.</li><li><b>Enforcing borders:</b> make each module its own project and keep its inside <code>internal</code>; add architecture tests or an analyzer that fails the build on a forbidden reference. Without enforcement the borders from lesson 7 decay.</li></ul><p><b>When to use slices:</b> many independent features with different complexity, or a product that may split later. <b>When not:</b> a team with no habit of reviewing dependencies, or a tiny app where a few folders are enough.</p>",
        hi: "<ul><li><b>Vertical slice:</b> हर use case (<code>PlaceOrder</code>, <code>CancelOrder</code>) के लिए एक folder, जिसमें endpoint, request, handler और data access हों। जुड़ा हुआ code साथ बदलता है। Slice सादे पढ़ने के लिए सादी EF Core queries और complex लिखने के लिए rich domain model इस्तेमाल कर सकती है; style हर slice में अलग हो सकती है।</li><li><b>Trade-offs:</b> slices रस्में और folders के बीच कूदना घटाती हैं, पर slices के बीच दोहराव और भटकाव की गुंजाइश देती हैं, और ढाँचा कम लागू होता है, इसलिए team को conventions तय करने पड़ते हैं।</li><li><b>Layers और slices साथ चल सकती हैं:</b> अंदर slices वाले modules (नीचे का layout)। <b>Business capability</b> (Orders, Billing) से बाँटो, technical layer से नहीं।</li><li><b>सीमाएँ लागू करना:</b> हर module को अपना project बनाओ और उसका अंदर का हिस्सा <code>internal</code> रखो; architecture tests या analyzer लगाओ जो मना किए गए reference पर build तोड़ दे। लागू किए बिना पाठ 7 की सीमाएँ गल जाती हैं।</li></ul><p><b>Slices कब लें:</b> कई अलग-अलग features जिनकी complexity अलग हो, या ऐसा product जो आगे बँट सकता है। <b>कब नहीं:</b> जिस team को dependencies review करने की आदत न हो, या बहुत छोटा app जहाँ कुछ folders काफ़ी हैं।</p>",
        hg: "<ul><li><b>Vertical slice:</b> har use case (<code>PlaceOrder</code>, <code>CancelOrder</code>) ke liye ek folder, jismein endpoint, request, handler aur data access hon. Juda hua code saath badalta hai. Slice saade padhne ke liye saadi EF Core queries aur complex likhne ke liye rich domain model istemaal kar sakti hai; style har slice mein alag ho sakti hai.</li><li><b>Trade-offs:</b> slices rasmein aur folders ke beech koodna ghatati hain, par slices ke beech dohraav aur bhatkaav ki gunjaish deti hain, aur dhaancha kam laagu hota hai, isliye team ko conventions tay karne padte hain.</li><li><b>Layers aur slices saath chal sakti hain:</b> andar slices wale modules (neeche ka layout). <b>Business capability</b> (Orders, Billing) se baanto, technical layer se nahi.</li><li><b>Seemayen laagu karna:</b> har module ko apna project banao aur uska andar ka hissa <code>internal</code> rakho; architecture tests ya analyzer lagao jo mana kiye gaye reference par build tod de. Laagu kiye bina lesson 7 ki seemayen gal jaati hain.</li></ul><p><b>Slices kab lein:</b> kai alag-alag features jinki complexity alag ho, ya aisa product jo aage ban sakta hai. <b>Kab nahi:</b> jis team ko dependencies review karne ki aadat na ho, ya bahut chhota app jahan kuch folders kaafi hain.</p>"
      },
      code: [
        {
          caption: {
            en: "A vertical-slice folder layout inside a modular monolith.",
            hi: "Modular monolith के अंदर vertical-slice folder layout।",
            hg: "Modular monolith ke andar vertical-slice folder layout."
          },
          lang: "text",
          check: "none",
          src: "Shop.Orders/                      (module = project)\n  Features/\n    PlaceOrder/        endpoint + command + handler + validator\n    CancelOrder/\n  Domain/              only if this module has real rules\nShop.Billing/\n  IBillingApi.cs       public contract (the only public type)\n  Internal/            everything else is internal\nShop.Host/             references modules, wires DI"
        }
      ]
    },
    {
      id: "choose-architecture",
      depth: "detailed",
      title: {
        en: "How a Tech Lead chooses: factors and over-engineering",
        hi: "Tech Lead कैसे चुनता है: factors और over-engineering",
        hg: "Tech Lead kaise chunta hai: factors aur over-engineering"
      },
      body: {
        en: "<p><b>Picture: buying a vehicle.</b> A family of four in a city does not need a truck, and a delivery business does not need a scooter. The right choice depends on the load, the road and who drives it.</p><p><b>Decision factors:</b></p><ul><li><b>Team size and structure</b> (Conway's law): systems tend to mirror how the organisation communicates. Few developers rarely justify many services.</li><li><b>Deployment independence:</b> do teams really need to release separately, at different speeds?</li><li><b>Data ownership:</b> can the data be split cleanly? Shared tables and joins across services are a warning sign.</li><li><b>Operational cost and skill:</b> CI/CD, observability, on-call, messaging. Without them microservices hurt.</li><li><b>Scaling needs:</b> one hot part with very different load may deserve its own service.</li></ul><p><b>How to decide, in order:</b> start from the problem (what changes often, what must not fail, how many teams, growth in the next 1–2 years); name the quality attributes that matter and accept that you cannot maximise all; pick the simplest option that meets them and list what you give up.</p><p><b>Avoiding over-engineering:</b> Clean Architecture for a small CRUD app means extra projects and mapping for little gain; a layered or vertical-slice layout is often enough. Add structure when a <b>real pain</b> shows up (hard to test, modules tangled), not \"just in case\". A boundary that is cheap now and expensive later (module borders, an interface over an external system) is worth adding early.</p><p><b>When to apply this checklist:</b> before any structural choice that is costly to reverse. <b>When not:</b> small, easily reversible choices; a line in the pull request is enough.</p>",
        hi: "<p><b>तस्वीर: गाड़ी ख़रीदना।</b> शहर में चार लोगों के परिवार को truck नहीं चाहिए, और delivery के धंधे को scooter नहीं। सही चुनाव load, सड़क और चलाने वाले पर निर्भर है।</p><p><b>फ़ैसले के factors:</b></p><ul><li><b>Team का आकार और बनावट</b> (Conway's law): systems उसी तरह बनते हैं जैसे organisation में बातचीत होती है। कम developers के लिए कई services शायद ही ठीक बैठती हैं।</li><li><b>Deployment की आज़ादी:</b> क्या teams को सच में अलग, अलग रफ़्तार से release करना है?</li><li><b>Data की मालिकी:</b> क्या data साफ़ बँट सकता है? Services के बीच shared tables और joins चेतावनी हैं।</li><li><b>Operations का ख़र्च और हुनर:</b> CI/CD, observability, on-call, messaging। इनके बिना microservices चुभती हैं।</li><li><b>Scaling की ज़रूरत:</b> एक hot हिस्सा जिसका load बहुत अलग है, उसे अपनी service मिल सकती है।</li></ul><p><b>क्रम से कैसे तय करें:</b> समस्या से शुरू करो (क्या अक्सर बदलता है, क्या fail नहीं होना चाहिए, कितनी teams, अगले 1–2 साल में कितना बढ़ेगा); जो quality attributes मायने रखते हैं उनके नाम लो और मानो कि सब एक साथ बढ़ा नहीं सकते; सबसे सादा विकल्प चुनो जो उन्हें पूरा करे और लिखो कि क्या छोड़ रहे हो।</p><p><b>Over-engineering से बचना:</b> छोटे CRUD app के लिए Clean Architecture का मतलब है ज़्यादा projects और mapping, फ़ायदा थोड़ा; layered या vertical-slice layout अक्सर काफ़ी है। ढाँचा तब जोड़ो जब <b>असली तकलीफ़</b> दिखे (test करना मुश्किल, modules उलझे), \"कहीं ज़रूरत पड़ गई तो\" सोचकर नहीं। जो सीमा अभी सस्ती है और बाद में महँगी (module की सीमाएँ, बाहरी system पर interface) उसे जल्दी जोड़ना ठीक है।</p><p><b>यह checklist कब लगाएँ:</b> किसी भी ऐसे structural चुनाव से पहले जिसे पलटना महँगा हो। <b>कब नहीं:</b> छोटे, आसानी से पलटने वाले चुनाव; pull request में एक line काफ़ी है।</p>",
        hg: "<p><b>Tasveer: gaadi kharidna.</b> Shehar mein chaar logon ke parivaar ko truck nahi chahiye, aur delivery ke dhandhe ko scooter nahi. Sahi chunaav load, sadak aur chalane wale par nirbhar hai.</p><p><b>Faisle ke factors:</b></p><ul><li><b>Team ka aakaar aur banawat</b> (Conway's law): systems usi tarah bante hain jaise organisation mein baatcheet hoti hai. Kam developers ke liye kai services shaayad hi theek baithti hain.</li><li><b>Deployment ki aazaadi:</b> kya teams ko sach mein alag, alag raftaar se release karna hai?</li><li><b>Data ki maalikat:</b> kya data saaf bant sakta hai? Services ke beech shared tables aur joins chetavani hain.</li><li><b>Operations ka kharch aur hunar:</b> CI/CD, observability, on-call, messaging. Inke bina microservices chubhti hain.</li><li><b>Scaling ki zaroorat:</b> ek hot hissa jiska load bahut alag hai, use apni service mil sakti hai.</li></ul><p><b>Kram se kaise tay karein:</b> samasya se shuru karo (kya aksar badalta hai, kya fail nahi hona chahiye, kitni teams, agle 1–2 saal mein kitna badhega); jo quality attributes maayne rakhte hain unke naam lo aur mano ki sab ek saath badha nahi sakte; sabse saada vikalp chuno jo unhe poora kare aur likho ki kya chhod rahe ho.</p><p><b>Over-engineering se bachna:</b> chhote CRUD app ke liye Clean Architecture ka matlab hai zyada projects aur mapping, faayda thoda; layered ya vertical-slice layout aksar kaafi hai. Dhaancha tab jodo jab <b>asli takleef</b> dikhe (test karna mushkil, modules uljhe), \"kahin zaroorat pad gayi to\" sochkar nahi. Jo seema abhi sasti hai aur baad mein mehngi (module ki seemayen, bahari system par interface) use jaldi jodna theek hai.</p><p><b>Ye checklist kab lagayein:</b> kisi bhi aise structural chunaav se pehle jise palatna mehnga ho. <b>Kab nahi:</b> chhote, aasaani se palatne wale chunaav; pull request mein ek line kaafi hai.</p>"
      }
    },
    {
      id: "adr-in-practice",
      depth: "detailed",
      title: {
        en: "Writing an ADR and deciding as a Tech Lead",
        hi: "ADR लिखना और Tech Lead की तरह फ़ैसला करना",
        hg: "ADR likhna aur Tech Lead ki tarah faisla karna"
      },
      body: {
        en: "<p><b>Picture — a family decision diary:</b> \"We bought the flat on the ground floor because the elders cannot climb stairs.\" Years later nobody asks \"why not the top floor?\" — the reason is written down.</p>\n<p>An ADR is that diary entry for the codebase. The sample below is <b>a sample — replace it with your own project</b>; the team, numbers and choice are invented to show the shape.</p>\n<ul>\n<li><b>Context</b> states facts and constraints, not the answer.</li>\n<li><b>Decision</b> is one clear sentence, in active voice (\"We will ...\").</li>\n<li><b>Consequences</b> lists good and bad results, including what you now must do (for example enforce module boundaries).</li>\n<li><b>Alternatives</b> show you looked beyond the first idea.</li>\n<li>Keep it to one page, store it next to the code (for example <code>docs/adr/0007-modular-monolith.md</code>), and never delete old ones — mark them <b>Superseded by ADR-0012</b>.</li>\n</ul>\n<p><b>In the interview</b>, when asked \"how would you choose?\", walk through: the problem and constraints → the quality attributes that matter → two or three options with trade-offs → your pick for <i>now</i> → what would make you change it (a trigger, for example \"a second team joins\" or \"this module needs 10x scale\"). Saying what you give up is a strong signal of seniority.</p>\n<p><b>When to use an ADR:</b> hard-to-reverse choices that affect several people. <b>When not:</b> every small library choice; that creates paperwork nobody reads.</p>",
        hi: "<p><b>तस्वीर — परिवार का फ़ैसला-diary:</b> \"हमने ground floor का flat इसलिए लिया क्योंकि बुज़ुर्ग सीढ़ियाँ नहीं चढ़ सकते।\" सालों बाद कोई \"ऊपर की मंज़िल क्यों नहीं?\" नहीं पूछता — वजह लिखी है।</p>\n<p>ADR codebase के लिए वही diary entry है। नीचे का नमूना <b>एक sample है — इसे अपने project से बदलो</b>; team, संख्याएँ और चुनाव सिर्फ़ ढाँचा दिखाने के लिए गढ़े गए हैं।</p>\n<ul>\n<li><b>Context</b> तथ्य और बंदिशें बताता है, जवाब नहीं।</li>\n<li><b>Decision</b> एक साफ़ वाक्य, active voice में (\"We will ...\")।</li>\n<li><b>Consequences</b> अच्छे और बुरे नतीजे बताता है, साथ में यह भी कि अब आपको क्या करना होगा (जैसे module boundaries लागू करना)।</li>\n<li><b>Alternatives</b> दिखाते हैं कि आपने पहले विचार से आगे देखा।</li>\n<li>एक page रखो, code के पास रखो (जैसे <code>docs/adr/0007-modular-monolith.md</code>), और पुराने कभी मत मिटाओ — उन्हें <b>Superseded by ADR-0012</b> चिह्नित करो।</li>\n</ul>\n<p><b>Interview में</b>, \"आप कैसे चुनोगे?\" पूछे जाने पर क्रम से बोलो: समस्या और बंदिशें → जो quality attributes मायने रखते हैं → दो-तीन विकल्प trade-offs के साथ → <i>अभी</i> के लिए आपकी पसंद → क्या बदलने पर आप फ़ैसला बदलोगे (एक trigger, जैसे \"दूसरी team जुड़े\" या \"इस module को 10x scale चाहिए\")। क्या छोड़ रहे हो यह बताना seniority का मज़बूत संकेत है।</p>\n<p><b>ADR कब use करें:</b> पलटने में कठिन फ़ैसले जो कई लोगों पर असर डालें। <b>कब नहीं:</b> हर छोटी library का चुनाव; उससे ऐसा कागज़ बनता है जो कोई नहीं पढ़ता।</p>",
        hg: "<p><b>Tasveer — parivar ka faisla-diary:</b> \"Humne ground floor ka flat isliye liya kyunki buzurg seedhiyan nahi chadh sakte.\" Saalon baad koi \"upar ki manzil kyun nahi?\" nahi poochhta — wajah likhi hai.</p>\n<p>ADR codebase ke liye wahi diary entry hai. Neeche ka namoona <b>ek sample hai — ise apne project se badlo</b>; team, sankhyayen aur chunaav sirf dhaancha dikhane ke liye gadhe gaye hain.</p>\n<ul>\n<li><b>Context</b> tathya aur bandishen batata hai, jawaab nahi.</li>\n<li><b>Decision</b> ek saaf vaakya, active voice mein (\"We will ...\").</li>\n<li><b>Consequences</b> achhe aur bure nateeje batata hai, saath mein yeh bhi ki ab aapko kya karna hoga (jaise module boundaries laagu karna).</li>\n<li><b>Alternatives</b> dikhate hain ki aapne pehle vichaar se aage dekha.</li>\n<li>Ek page rakho, code ke paas rakho (jaise <code>docs/adr/0007-modular-monolith.md</code>), aur purane kabhi mat mitao — unhe <b>Superseded by ADR-0012</b> chinhit karo.</li>\n</ul>\n<p><b>Interview mein</b>, \"aap kaise chunoge?\" poochhe jaane par kram se bolo: samasya aur bandishen → jo quality attributes maayne rakhte hain → do-teen vikalp trade-offs ke saath → <i>abhi</i> ke liye aapki pasand → kya badalne par aap faisla badloge (ek trigger, jaise \"doosri team jude\" ya \"is module ko 10x scale chahiye\"). Kya chhod rahe ho yeh batana seniority ka mazboot sanket hai.</p>\n<p><b>ADR kab use karein:</b> palatne mein kathin faisle jo kai logon par asar daalen. <b>Kab nahi:</b> har chhoti library ka chunaav; usse aisa kaagaz banta hai jo koi nahi padhta.</p>"
      },
      code: [
        {
          caption: {
            en: "Sample — replace with your own: an ADR with invented details, to show the shape.",
            hi: "Sample — अपने से बदलो: गढ़े हुए ब्योरों वाला ADR, सिर्फ़ ढाँचा दिखाने के लिए।",
            hg: "Sample — apne se badlo: gadhe hue byoron wala ADR, sirf dhaancha dikhane ke liye."
          },
          lang: "text",
          check: "none",
          src: "# ADR-0007: Start the order platform as a modular monolith\n\nStatus: Accepted (sample, invented details)\n\n## Context\n- 6 developers in one team; domain boundaries are still being discovered.\n- One SQL Server database; no dedicated platform or on-call team yet.\n- Orders and Billing will probably need separate teams within two years.\n\n## Decision\nWe will build one deployable with separate Orders, Billing and Catalogue\nmodules. Modules talk only through public contracts and events.\n\n## Consequences\n+ One deployment, one transaction option, simple local debugging.\n+ Module borders can become service borders later.\n- Boundaries must be enforced (separate projects + architecture tests).\n- One bad release affects all modules.\nRevisit when: a second team owns a module, or one module needs very\ndifferent scaling.\n\n## Alternatives considered\n- Microservices now: rejected, too much operations work for 6 developers.\n- Classic layers in one project: rejected, boundaries would not be enforced."
        }
      ]
    }
  ],
  qa: [
    {
      id: "what-is-clean-architecture",
      depth: "short",
      q: "What is Clean Architecture, and what is the dependency rule?",
      answer: "Clean Architecture arranges code in rings with the domain at the centre. The dependency rule: source-code dependencies point inward, so inner layers do not reference EF Core, HTTP or frameworks.",
      meaning: {
        hi: "Clean Architecture code को rings में रखता है, बीच में domain। Dependency rule: source-code dependencies अंदर की तरफ़ जाती हैं, इसलिए अंदर की layers EF Core, HTTP या frameworks को reference नहीं करतीं।",
        hg: "Clean Architecture code ko rings mein rakhta hai, beech mein domain. Dependency rule: source-code dependencies andar ki taraf jaati hain, isliye andar ki layers EF Core, HTTP ya frameworks ko reference nahi kartin."
      },
      explain: {
        en: "<ul>\n<li>Rings, from the centre: Domain → Application (use cases, ports) → Infrastructure and Web at the edge.</li>\n<li>It works through <b>DIP</b> (Day 8): the inner layer defines <code>IOrderRepository</code>, the outer layer implements it. The runtime call goes outward, the source-code arrow goes inward.</li>\n<li>Benefit: rules are testable without a database and survive a change of framework or database. Cost: more projects, interfaces and mapping.</li>\n<li>Follow-up: \"Is it the same as Onion or Hexagonal?\" — same core idea, different vocabulary (see the last question of this list).</li>\n</ul>",
        hi: "<ul>\n<li>Rings, बीच से: Domain → Application (use cases, ports) → किनारे पर Infrastructure और Web।</li>\n<li>यह <b>DIP</b> (Day 8) से चलता है: अंदर की layer <code>IOrderRepository</code> define करती है, बाहर की उसे implement करती है। Runtime call बाहर जाती है, source-code का तीर अंदर।</li>\n<li>फ़ायदा: rules बिना database के testable हैं और framework या database बदलने पर भी टिके रहते हैं। क़ीमत: ज़्यादा projects, interfaces और mapping।</li>\n<li>Follow-up: \"क्या यह Onion या Hexagonal जैसा ही है?\" — मूल विचार वही, शब्दावली अलग (इस list का आख़िरी सवाल देखो)।</li>\n</ul>",
        hg: "<ul>\n<li>Rings, beech se: Domain → Application (use cases, ports) → kinare par Infrastructure aur Web.</li>\n<li>Yeh <b>DIP</b> (Day 8) se chalta hai: andar ki layer <code>IOrderRepository</code> define karti hai, bahar ki use implement karti hai. Runtime call bahar jaati hai, source-code ka teer andar.</li>\n<li>Fayda: rules bina database ke testable hain aur framework ya database badalne par bhi tike rehte hain. Keemat: zyada projects, interfaces aur mapping.</li>\n<li>Follow-up: \"Kya yeh Onion ya Hexagonal jaisa hi hai?\" — mool vichaar wahi, shabdawali alag (is list ka aakhri sawaal dekho).</li>\n</ul>"
      }
    },
    {
      id: "layered-problems",
      depth: "short",
      q: "What problems do you see with classic layered (N-tier) architecture?",
      answer: "Dependencies point down to the data layer, so business rules get tied to data access and often need a database to test. A layer per technical concern also makes one feature touch many folders.",
      meaning: {
        hi: "Dependencies नीचे data layer की तरफ़ जाती हैं, इसलिए business rules data access से बंध जाते हैं और test के लिए अक्सर database चाहिए। हर technical काम की layer होने से एक feature कई folders छूता है।",
        hg: "Dependencies neeche data layer ki taraf jaati hain, isliye business rules data access se bandh jaate hain aur test ke liye aksar database chahiye. Har technical kaam ki layer hone se ek feature kai folders chhoota hai."
      },
      explain: {
        en: "<ul>\n<li>Business logic ends up knowing EF Core entities and SQL details; swapping or faking the data layer is hard.</li>\n<li>\"Business\" classes often become pass-through code, while real rules leak into controllers or stored procedures.</li>\n<li>Adding one feature touches Controller, Service, Repository and Model folders, so related code is spread out.</li>\n<li>Layered is not \"wrong\": for simple CRUD it is quick and well understood. The question is whether the rules need to be protected.</li>\n<li>Follow-up: \"How do you fix it?\" — invert the dependency with interfaces owned by the business layer (Clean/Onion), or organise by feature (vertical slices).</li>\n</ul>",
        hi: "<ul>\n<li>Business logic EF Core entities और SQL की details जानने लगता है; data layer बदलना या fake करना कठिन हो जाता है।</li>\n<li>\"Business\" classes अक्सर सिर्फ़ आगे भेजने वाला code बन जाती हैं, जबकि असली rules controllers या stored procedures में रिस जाते हैं।</li>\n<li>एक feature जोड़ने पर Controller, Service, Repository और Model folders छूने पड़ते हैं, इसलिए जुड़ा code बिखरा रहता है।</li>\n<li>Layered \"ग़लत\" नहीं है: सादे CRUD के लिए यह तेज़ और जाना-पहचाना है। सवाल यह है कि क्या rules को बचाना है।</li>\n<li>Follow-up: \"ठीक कैसे करोगे?\" — business layer की मालिकी वाले interfaces से dependency उलटो (Clean/Onion), या feature से organise करो (vertical slices)।</li>\n</ul>",
        hg: "<ul>\n<li>Business logic EF Core entities aur SQL ki details jaanne lagta hai; data layer badalna ya fake karna kathin ho jaata hai.</li>\n<li>\"Business\" classes aksar sirf aage bhejne wala code ban jaati hain, jabki asli rules controllers ya stored procedures mein ris jaate hain.</li>\n<li>Ek feature jodne par Controller, Service, Repository aur Model folders chhoone padte hain, isliye juda code bikhra rehta hai.</li>\n<li>Layered \"galat\" nahi hai: saade CRUD ke liye yeh tez aur jaana-pehchana hai. Sawaal yeh hai ki kya rules ko bachana hai.</li>\n<li>Follow-up: \"Theek kaise karoge?\" — business layer ki maalikat wale interfaces se dependency ulto (Clean/Onion), ya feature se organise karo (vertical slices).</li>\n</ul>"
      }
    },
    {
      id: "dbcontext-placement",
      depth: "short",
      q: "In Clean Architecture, where do the DbContext and the repository interfaces live?",
      answer: "Interfaces live in the Application layer, owned by the inner side. The DbContext and implementations live in Infrastructure; some teams use DbContext directly in Application as a pragmatic trade-off.",
      meaning: {
        hi: "Interfaces Application layer में रहते हैं, अंदर वाली तरफ़ की मालिकी में। DbContext और implementations Infrastructure में रहते हैं; कुछ teams व्यावहारिक trade-off के तौर पर Application में सीधे DbContext use करती हैं।",
        hg: "Interfaces Application layer mein rehte hain, andar wali taraf ki maalikat mein. DbContext aur implementations Infrastructure mein rehte hain; kuch teams vyavaharik trade-off ke taur par Application mein seedhe DbContext use karti hain."
      },
      explain: {
        en: "<ul>\n<li>The port belongs to the layer that <b>needs</b> it (DIP, Day 8), so it is named in business words: <code>IOrderRepository</code>, not <code>IEfRepository</code>.</li>\n<li>Infrastructure holds the <code>DbContext</code>, Fluent API mappings, migrations and the adapter classes. The Web project wires them in <code>AddInfrastructure()</code>.</li>\n<li>Pragmatic variant: Application uses an <code>IAppDbContext</code> interface (or the <code>DbContext</code> itself) to avoid thin repositories — shorter, but Application then depends on EF Core (Day 11 discusses when a repository is worth it).</li>\n<li>Follow-up: \"How do you test the handler?\" — fake the port in unit tests; test the EF queries against a real engine.</li>\n<li>TL angle: decide once, write it in the team conventions, and review for consistency.</li>\n</ul>",
        hi: "<ul>\n<li>Port उस layer का है जिसे उसकी <b>ज़रूरत</b> है (DIP, Day 8), इसलिए उसका नाम business की भाषा में होता है: <code>IOrderRepository</code>, <code>IEfRepository</code> नहीं।</li>\n<li>Infrastructure में <code>DbContext</code>, Fluent API mappings, migrations और adapter classes रहती हैं। Web project <code>AddInfrastructure()</code> में उन्हें जोड़ता है।</li>\n<li>व्यावहारिक रूप: Application पतली repositories से बचने के लिए <code>IAppDbContext</code> interface (या ख़ुद <code>DbContext</code>) use करती है — छोटा, पर तब Application EF Core पर निर्भर है (Day 11 में चर्चा है कि repository कब फ़ायदे की है)।</li>\n<li>Follow-up: \"handler को test कैसे करोगे?\" — unit tests में port fake करो; EF queries को असली engine पर test करो।</li>\n<li>TL angle: एक बार तय करो, team conventions में लिखो, और consistency review करो।</li>\n</ul>",
        hg: "<ul>\n<li>Port us layer ka hai jise uski <b>zaroorat</b> hai (DIP, Day 8), isliye uska naam business ki bhasha mein hota hai: <code>IOrderRepository</code>, <code>IEfRepository</code> nahi.</li>\n<li>Infrastructure mein <code>DbContext</code>, Fluent API mappings, migrations aur adapter classes rehti hain. Web project <code>AddInfrastructure()</code> mein unhe jodta hai.</li>\n<li>Vyavaharik roop: Application patli repositories se bachne ke liye <code>IAppDbContext</code> interface (ya khud <code>DbContext</code>) use karti hai — chhota, par tab Application EF Core par nirbhar hai (Day 11 mein charcha hai ki repository kab faayde ki hai).</li>\n<li>Follow-up: \"handler ko test kaise karoge?\" — unit tests mein port fake karo; EF queries ko asli engine par test karo.</li>\n<li>TL angle: ek baar tay karo, team conventions mein likho, aur consistency review karo.</li>\n</ul>"
      }
    },
    {
      id: "monolith-modular-microservices",
      depth: "short",
      q: "Monolith, modular monolith or microservices — how do you decide?",
      answer: "I look at team size, need for independent deployment, data ownership and operational maturity. With a small team and unclear boundaries, a modular monolith is usually the cheaper start.",
      meaning: {
        hi: "मैं team size, independent deployment की ज़रूरत, data ownership और operational maturity देखता हूँ। छोटी team और अस्पष्ट boundaries हों तो modular monolith आम तौर पर सस्ता शुरुआती क़दम है।",
        hg: "Main team size, independent deployment ki zaroorat, data ownership aur operational maturity dekhta hoon. Chhoti team aur aspasht boundaries hon to modular monolith aam taur par sasta shuruaati kadam hai."
      },
      explain: {
        en: "<ul>\n<li><b>Monolith</b>: simplest to run; risk of a tangled \"big ball of mud\". <b>Modular monolith</b>: one deployable with enforced module borders. <b>Microservices</b>: independent deployment and scaling, paid for with network failures, distributed data and operations (Day 16).</li>\n<li>Ask: how many teams? Do they need separate release schedules? Can data be split cleanly? Do we have CI/CD, monitoring and on-call?</li>\n<li>\"Start with a modular monolith\" is common advice because early boundaries are guesses and moving a boundary inside one codebase is cheaper than across services. The trade-off: it needs discipline, and one deployment means one release cadence.</li>\n<li>Day 17 (system design) reuses this reasoning: state the constraints, compare options, name the trade-off and the trigger to revisit.</li>\n<li>Follow-up: \"When would you split?\" — a clear trigger: a second team owns the module, it needs different scaling, or its release rhythm differs.</li>\n</ul>",
        hi: "<ul>\n<li><b>Monolith</b>: चलाने में सबसे सरल; उलझे \"big ball of mud\" का जोखिम। <b>Modular monolith</b>: एक deployable, लागू की गई module सीमाओं के साथ। <b>Microservices</b>: independent deployment और scaling, जिसकी क़ीमत network failures, distributed data और operations (Day 16) हैं।</li>\n<li>पूछो: कितनी teams? क्या उन्हें अलग release schedules चाहिए? क्या data साफ़ बँट सकता है? क्या हमारे पास CI/CD, monitoring और on-call है?</li>\n<li>\"modular monolith से शुरू करो\" आम सलाह है क्योंकि शुरू की boundaries अंदाज़े होती हैं और एक codebase में boundary हिलाना services के पार से सस्ता है। Trade-off: discipline चाहिए, और एक deployment यानी एक release रफ़्तार।</li>\n<li>Day 17 (system design) में यही सोच काम आती है: constraints बताओ, options की तुलना करो, trade-off और दोबारा देखने का trigger बताओ।</li>\n<li>Follow-up: \"कब बाँटोगे?\" — साफ़ trigger: दूसरी team module की मालिक बने, उसे अलग scaling चाहिए, या उसकी release लय अलग हो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Monolith</b>: chalane mein sabse saral; uljhe \"big ball of mud\" ka jokhim. <b>Modular monolith</b>: ek deployable, laagu ki gayi module seemaon ke saath. <b>Microservices</b>: independent deployment aur scaling, jiski keemat network failures, distributed data aur operations (Day 16) hain.</li>\n<li>Poochho: kitni teams? Kya unhe alag release schedules chahiye? Kya data saaf baant sakta hai? Kya hamare paas CI/CD, monitoring aur on-call hai?</li>\n<li>\"Modular monolith se shuru karo\" aam salaah hai kyunki shuru ki boundaries andaaze hoti hain aur ek codebase mein boundary hilana services ke paar se sasta hai. Trade-off: discipline chahiye, aur ek deployment yaani ek release raftaar.</li>\n<li>Day 17 (system design) mein yahi soch kaam aati hai: constraints batao, options ki tulna karo, trade-off aur dobara dekhne ka trigger batao.</li>\n<li>Follow-up: \"Kab baantoge?\" — saaf trigger: doosri team module ki maalik bane, use alag scaling chahiye, ya uski release lay alag ho.</li>\n</ul>"
      }
    },
    {
      id: "entity-vs-value-object",
      depth: "short",
      q: "What is the difference between an entity and a value object?",
      answer: "An entity has an identity that stays the same while its data changes. A value object has no identity, is equal when its values are equal, and is best immutable.",
      meaning: {
        hi: "Entity की identity होती है जो data बदलने पर भी वही रहती है। Value object की identity नहीं होती, values बराबर हों तो बराबर, और बेहतर है immutable।",
        hg: "Entity ki identity hoti hai jo data badalne par bhi wahi rehti hai. Value object ki identity nahi hoti, values barabar hon to barabar, aur behtar hai immutable."
      },
      explain: {
        en: "<ul>\n<li>Entity examples: <code>Order</code>, <code>Customer</code> — compare by Id. Value object examples: <code>Money</code>, <code>Address</code>, <code>DateRange</code> — compare by all values.</li>\n<li>In C#, a <code>record</code> gives value equality for free (Day 3). Caution: a <code>List&lt;T&gt;</code> member inside a record is still compared by reference (puzzle below).</li>\n<li>Value objects are immutable: change means \"make a new one\" (<code>with</code>). They can hold rules, for example <code>Email</code> validates its format once.</li>\n<li>Entities often override <code>Equals</code> by Id. Pitfall: new, not-yet-saved entities all have the default Id (0), so two different transient entities compare equal; handle them separately. With EF Core the change tracker already uses identity (Day 5).</li>\n<li>Follow-up: \"How does EF Core store a value object?\" — as complex types (<code>ComplexProperty</code>, EF Core 8+; EF Core 10 added optional complex types and JSON mapping) or as owned types (<code>OwnsOne</code>); usually as columns in the same table. Complex types have value semantics and no identity of their own, which fits value objects; owned types are entity types.</li>\n</ul>",
        hi: "<ul>\n<li>Entity के उदाहरण: <code>Order</code>, <code>Customer</code> — Id से compare। Value object के उदाहरण: <code>Money</code>, <code>Address</code>, <code>DateRange</code> — सारी values से compare।</li>\n<li>C# में <code>record</code> value equality मुफ़्त देता है (Day 3)। सावधानी: record के अंदर <code>List&lt;T&gt;</code> member अब भी reference से compare होता है (नीचे puzzle)।</li>\n<li>Value objects immutable होते हैं: बदलाव यानी \"नया बनाओ\" (<code>with</code>)। उनमें rules हो सकते हैं, जैसे <code>Email</code> अपना format एक बार validate करता है।</li>\n<li>Entities अक्सर <code>Equals</code> को Id से override करती हैं। Pitfall: नई, अभी save न हुई entities का default Id (0) होता है, इसलिए दो अलग transient entities बराबर निकलती हैं; उन्हें अलग से संभालो। EF Core का change tracker पहले से identity use करता है (Day 5)।</li>\n<li>Follow-up: \"EF Core value object कैसे store करता है?\" — complex types (<code>ComplexProperty</code>, EF Core 8+; EF Core 10 ने optional complex types और JSON mapping जोड़े) या owned types (<code>OwnsOne</code>) के रूप में; आम तौर पर उसी table के columns में। Complex types में value semantics होती हैं और अपनी identity नहीं, जो value objects को जमती है; owned types असल में entity types हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Entity ke udaharan: <code>Order</code>, <code>Customer</code> — Id se compare. Value object ke udaharan: <code>Money</code>, <code>Address</code>, <code>DateRange</code> — saari values se compare.</li>\n<li>C# mein <code>record</code> value equality muft deta hai (Day 3). Saavdhani: record ke andar <code>List&lt;T&gt;</code> member ab bhi reference se compare hota hai (neeche puzzle).</li>\n<li>Value objects immutable hote hain: badlaav yaani \"naya banao\" (<code>with</code>). Unmein rules ho sakte hain, jaise <code>Email</code> apna format ek baar validate karta hai.</li>\n<li>Entities aksar <code>Equals</code> ko Id se override karti hain. Pitfall: nayi, abhi save na hui entities ka default Id (0) hota hai, isliye do alag transient entities barabar nikalti hain; unhe alag se sambhalo. EF Core ka change tracker pehle se identity use karta hai (Day 5).</li>\n<li>Follow-up: \"EF Core value object kaise store karta hai?\" — complex types (<code>ComplexProperty</code>, EF Core 8+; EF Core 10 ne optional complex types aur JSON mapping jode) ya owned types (<code>OwnsOne</code>) ke roop mein; aam taur par usi table ke columns mein. Complex types mein value semantics hoti hain aur apni identity nahi, jo value objects ko jamti hai; owned types asal mein entity types hain.</li>\n</ul>"
      }
    },
    {
      id: "aggregate-and-root",
      depth: "short",
      q: "What is an aggregate and an aggregate root?",
      answer: "An aggregate is a cluster of objects treated as one consistency unit. Outside code goes through the root, which enforces the invariants and is the boundary for one transaction.",
      meaning: {
        hi: "Aggregate objects का समूह है जिसे एक consistency इकाई माना जाता है। बाहर का code root से जाता है, जो invariants लागू करता है और एक transaction की सीमा है।",
        hg: "Aggregate objects ka samuh hai jise ek consistency ikai maana jaata hai. Bahar ka code root se jaata hai, jo invariants laagu karta hai aur ek transaction ki seema hai."
      },
      explain: {
        en: "<ul>\n<li>Example: <code>Order</code> (root) with its <code>OrderLine</code>s. Outside code calls <code>order.AddLine(...)</code>; it does not edit the lines list.</li>\n<li><b>Invariant</b> = a rule that must always hold, for example \"a placed order cannot change\" or \"total never goes below zero\".</li>\n<li>Rules of thumb: keep aggregates small; load and save one aggregate per transaction; reference other aggregates by Id; use domain events for the rest (eventual consistency).</li>\n<li>Repository (Day 11) is usually per aggregate root, not per table.</li>\n<li>Follow-up: \"What if a rule spans two aggregates?\" — accept eventual consistency via events, or reconsider whether they are really one aggregate.</li>\n</ul>",
        hi: "<ul>\n<li>उदाहरण: <code>Order</code> (root) और उसकी <code>OrderLine</code>s। बाहर का code <code>order.AddLine(...)</code> call करता है; lines की list सीधे edit नहीं करता।</li>\n<li><b>Invariant</b> = वह rule जो हमेशा सच रहना चाहिए, जैसे \"placed order नहीं बदल सकता\" या \"total शून्य से नीचे नहीं जाता\"।</li>\n<li>Rules of thumb: aggregates छोटे रखो; एक transaction में एक aggregate load और save करो; दूसरे aggregates को Id से refer करो; बाक़ी के लिए domain events (eventual consistency)।</li>\n<li>Repository (Day 11) आम तौर पर aggregate root के लिए होती है, table के लिए नहीं।</li>\n<li>Follow-up: \"अगर rule दो aggregates में फैला हो?\" — events से eventual consistency मानो, या दोबारा सोचो कि क्या वे सच में एक aggregate हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Udaharan: <code>Order</code> (root) aur uski <code>OrderLine</code>s. Bahar ka code <code>order.AddLine(...)</code> call karta hai; lines ki list seedhe edit nahi karta.</li>\n<li><b>Invariant</b> = woh rule jo hamesha sach rehna chahiye, jaise \"placed order nahi badal sakta\" ya \"total shunya se neeche nahi jaata\".</li>\n<li>Rules of thumb: aggregates chhote rakho; ek transaction mein ek aggregate load aur save karo; doosre aggregates ko Id se refer karo; baaki ke liye domain events (eventual consistency).</li>\n<li>Repository (Day 11) aam taur par aggregate root ke liye hoti hai, table ke liye nahi.</li>\n<li>Follow-up: \"Agar rule do aggregates mein phaila ho?\" — events se eventual consistency maano, ya dobara socho ki kya woh sach mein ek aggregate hain.</li>\n</ul>"
      }
    },
    {
      id: "bounded-context",
      depth: "short",
      q: "What is a bounded context?",
      answer: "A bounded context is the boundary inside which one domain model and its language are consistent. The same word, like Customer, can mean different things in Sales and in Support.",
      meaning: {
        hi: "Bounded context वह सीमा है जिसके अंदर एक domain model और उसकी language consistent रहती है। एक ही शब्द, जैसे Customer, Sales और Support में अलग मतलब रख सकता है।",
        hg: "Bounded context woh seema hai jiske andar ek domain model aur uski language consistent rehti hai. Ek hi shabd, jaise Customer, Sales aur Support mein alag matlab rakh sakta hai."
      },
      explain: {
        en: "<ul>\n<li>Sales cares about a customer's credit and discounts; Support cares about tickets and contact details. Forcing one giant <code>Customer</code> class on both creates a tangled model.</li>\n<li>Each context has its own model (and often its own tables); they exchange only what is needed, using an agreed contract.</li>\n<li>A <b>context map</b> draws the relationships (for example \"Support is downstream of Sales and translates its data through an anti-corruption layer\").</li>\n<li>Link to architecture: a bounded context is a good candidate for a module in a modular monolith, and later for a microservice (Day 16).</li>\n<li>Follow-up: \"Is a bounded context the same as a microservice?\" — no; it is a model boundary, and one service or several may implement it.</li>\n</ul>",
        hi: "<ul>\n<li>Sales को customer का credit और discounts चाहिए; Support को tickets और contact details। दोनों पर एक विशाल <code>Customer</code> class थोपने से model उलझ जाता है।</li>\n<li>हर context का अपना model होता है (और अक्सर अपनी tables); वे सिर्फ़ ज़रूरी चीज़ें तय contract से बाँटते हैं।</li>\n<li><b>Context map</b> रिश्ते खींचता है (जैसे \"Support, Sales के downstream है और उसका data anti-corruption layer से बदलता है\")।</li>\n<li>Architecture से जुड़ाव: bounded context modular monolith के module का अच्छा उम्मीदवार है, और बाद में microservice का (Day 16)।</li>\n<li>Follow-up: \"क्या bounded context और microservice एक ही हैं?\" — नहीं; यह model की सीमा है, और उसे एक या कई services implement कर सकती हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Sales ko customer ka credit aur discounts chahiye; Support ko tickets aur contact details. Dono par ek vishaal <code>Customer</code> class thopne se model uljh jaata hai.</li>\n<li>Har context ka apna model hota hai (aur aksar apni tables); woh sirf zaroori cheezein tay contract se baantte hain.</li>\n<li><b>Context map</b> rishte kheenchta hai (jaise \"Support, Sales ke downstream hai aur uska data anti-corruption layer se badalta hai\").</li>\n<li>Architecture se judaav: bounded context modular monolith ke module ka achha ummeedwaar hai, aur baad mein microservice ka (Day 16).</li>\n<li>Follow-up: \"Kya bounded context aur microservice ek hi hain?\" — nahi; yeh model ki seema hai, aur use ek ya kai services implement kar sakti hain.</li>\n</ul>"
      }
    },
    {
      id: "clean-for-small-crud",
      depth: "short",
      q: "Would you use Clean Architecture for a small CRUD application?",
      answer: "Usually not. The extra projects, interfaces and mapping cost more than they return when there are few business rules; a simple layered or vertical-slice layout is often enough.",
      meaning: {
        hi: "आम तौर पर नहीं। जब business rules कम हों तो अतिरिक्त projects, interfaces और mapping का ख़र्च फ़ायदे से ज़्यादा है; सादा layered या vertical-slice layout अक्सर काफ़ी है।",
        hg: "Aam taur par nahi. Jab business rules kam hon to atirikt projects, interfaces aur mapping ka kharch fayde se zyada hai; saada layered ya vertical-slice layout aksar kaafi hai."
      },
      explain: {
        en: "<ul>\n<li>The question tests judgement: architecture serves the problem. A form-over-data app with few rules gains little from four projects and a repository per entity.</li>\n<li>What I would do: a simple structure (one project, feature folders), EF Core used directly, one clear place for validation. Keep the option to extract later.</li>\n<li>Signs it is time for more structure: rules growing and duplicating, tests needing a database for logic, several teams colliding in one project.</li>\n<li>Cheap habits that help any size: clear naming, small classes, DI, no business logic in controllers.</li>\n<li>TL angle: \"Over-engineering\" is a cost to the team too: new joiners must learn the ceremony. Decide with data, record it in an ADR.</li>\n</ul>",
        hi: "<ul>\n<li>सवाल judgement परखता है: architecture समस्या की सेवा करता है। कम rules वाले form-over-data app को चार projects और हर entity पर repository से कम फ़ायदा मिलता है।</li>\n<li>मैं क्या करूँगा: सरल ढाँचा (एक project, feature folders), EF Core सीधे use, validation की एक साफ़ जगह। बाद में निकालने का विकल्प खुला रखो।</li>\n<li>और ढाँचे का समय आने के संकेत: rules बढ़ें और दोहराएँ, logic के tests को database चाहिए, कई teams एक project में टकराएँ।</li>\n<li>हर आकार में काम आने वाली सस्ती आदतें: साफ़ नाम, छोटी classes, DI, controllers में business logic नहीं।</li>\n<li>TL angle: \"Over-engineering\" team की भी क़ीमत है: नए लोगों को रस्में सीखनी पड़ती हैं। आँकड़ों से तय करो, ADR में दर्ज करो।</li>\n</ul>",
        hg: "<ul>\n<li>Sawaal judgement parakhta hai: architecture samasya ki seva karta hai. Kam rules wale form-over-data app ko chaar projects aur har entity par repository se kam fayda milta hai.</li>\n<li>Main kya karunga: saral dhaancha (ek project, feature folders), EF Core seedhe use, validation ki ek saaf jagah. Baad mein nikaalne ka vikalp khula rakho.</li>\n<li>Aur dhaanche ka samay aane ke sanket: rules badhen aur dohraayen, logic ke tests ko database chahiye, kai teams ek project mein takraayen.</li>\n<li>Har aakar mein kaam aane wali sasti aadatein: saaf naam, chhoti classes, DI, controllers mein business logic nahi.</li>\n<li>TL angle: \"Over-engineering\" team ki bhi keemat hai: naye logon ko rasmein seekhni padti hain. Aankdon se tay karo, ADR mein darj karo.</li>\n</ul>"
      }
    },
    {
      id: "modular-monolith-boundaries",
      depth: "detailed",
      q: "What is a modular monolith, and how do you keep the modules separate?",
      answer: "It is one deployable split into modules by business capability, each with a small public contract and its own data. Separate projects, internal types and architecture tests keep the borders from eroding.",
      meaning: {
        hi: "यह एक deployable है जो business capability से modules में बँटा है, हर एक का छोटा public contract और अपना data। अलग projects, internal types और architecture tests सीमाओं को घिसने से बचाते हैं।",
        hg: "Yeh ek deployable hai jo business capability se modules mein banta hai, har ek ka chhota public contract aur apna data. Alag projects, internal types aur architecture tests seemaon ko ghisne se bachate hain."
      },
      explain: {
        en: "<ul>\n<li>Split by capability (Orders, Billing), not by layer. Each module exposes an interface or events; its tables are private, with no cross-module joins.</li>\n<li>Enforcement: one project per module with <code>internal</code> by default; an architecture test (for example with a library such as NetArchTest) or an analyzer that fails the build on forbidden references; code review.</li>\n<li>Data: one database is fine, but separate schemas or tables per module, so a later split does not need a data rewrite.</li>\n<li>Trade-off: one deployment and easy transactions, but modules cannot scale or release independently, and discipline decays without checks.</li>\n<li>Follow-up: \"How do modules communicate?\" — in-process calls through the contract, or in-process events; both can become messages later.</li>\n</ul>",
        hi: "<ul>\n<li>Capability (Orders, Billing) से बाँटो, layer से नहीं। हर module एक interface या events दिखाता है; उसकी tables निजी हैं, modules के पार joins नहीं।</li>\n<li>लागू करना: हर module का एक project, default में <code>internal</code>; architecture test (जैसे NetArchTest जैसी library से) या analyzer जो मना की गई references पर build fail करे; code review।</li>\n<li>Data: एक database ठीक है, पर हर module के अलग schemas या tables, ताकि बाद में बँटवारे पर data दोबारा न लिखना पड़े।</li>\n<li>Trade-off: एक deployment और आसान transactions, पर modules अलग scale या release नहीं हो सकते, और checks के बिना discipline घिस जाता है।</li>\n<li>Follow-up: \"modules आपस में कैसे बात करते हैं?\" — contract से in-process calls, या in-process events; दोनों बाद में messages बन सकते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Capability (Orders, Billing) se baanto, layer se nahi. Har module ek interface ya events dikhata hai; uski tables nijee hain, modules ke paar joins nahi.</li>\n<li>Laagu karna: har module ka ek project, default mein <code>internal</code>; architecture test (jaise NetArchTest jaisi library se) ya analyzer jo mana ki gayi references par build fail kare; code review.</li>\n<li>Data: ek database theek hai, par har module ke alag schemas ya tables, taaki baad mein batwaare par data dobara na likhna pade.</li>\n<li>Trade-off: ek deployment aur aasaan transactions, par modules alag scale ya release nahi ho sakte, aur checks ke bina discipline ghis jaata hai.</li>\n<li>Follow-up: \"Modules aapas mein kaise baat karte hain?\" — contract se in-process calls, ya in-process events; dono baad mein messages ban sakte hain.</li>\n</ul>"
      }
    },
    {
      id: "conways-law",
      depth: "detailed",
      q: "What is Conway's law and how does it affect architecture?",
      answer: "Conway's law says systems tend to mirror the communication structure of the organisation that builds them. So service boundaries should match team boundaries, and many services for a few developers is a smell.",
      meaning: {
        hi: "Conway's law कहता है कि systems उस संगठन के communication ढाँचे की नक़ल करते हैं जो उन्हें बनाता है। इसलिए service boundaries team boundaries से मिलनी चाहिए, और कम developers के लिए कई services खटकने वाली बात है।",
        hg: "Conway's law kehta hai ki systems us sangathan ke communication dhaanche ki nakal karte hain jo unhe banata hai. Isliye service boundaries team boundaries se milni chahiye, aur kam developers ke liye kai services khatakne wali baat hai."
      },
      explain: {
        en: "<ul>\n<li>Melvin Conway's observation (published 1968). A popular paraphrase: if four groups build a compiler, you get a four-pass compiler. Teams that need constant meetings to change one feature will build tightly coupled parts.</li>\n<li>The \"inverse Conway manoeuvre\": shape teams (small, owning a capability end to end) so the architecture you want emerges.</li>\n<li>Practical use: when someone proposes ten services for five developers, ask who owns each one and who is on call.</li>\n<li>It is a tendency, not a law of physics; good interfaces and communication can soften it.</li>\n<li>Follow-up: \"Does it apply inside a monolith?\" — yes, module ownership by team helps keep module borders real.</li>\n</ul>",
        hi: "<ul>\n<li>Melvin Conway ने यह 1968 में लिखा था। एक लोकप्रिय paraphrase: चार groups compiler बनाएँ तो चार-pass वाला compiler बनता है। जिन teams को एक feature बदलने में लगातार meetings चाहिए, वे कसकर जुड़े हिस्से बनाएँगी।</li>\n<li>\"Inverse Conway manoeuvre\": teams ऐसी बनाओ (छोटी, एक capability की शुरू से अंत तक मालिक) कि जो architecture चाहिए वह उभरे।</li>\n<li>व्यावहारिक use: कोई पाँच developers के लिए दस services सुझाए तो पूछो कि हर एक की मालिक कौन है और on-call कौन है।</li>\n<li>यह tendency है, physics का law नहीं; अच्छे interfaces और communication इसे नरम कर सकते हैं।</li>\n<li>Follow-up: \"क्या यह monolith के अंदर भी लागू है?\" — हाँ, team के हिसाब से module ownership module सीमाओं को असली रखने में मदद करती है।</li>\n</ul>",
        hg: "<ul>\n<li>Melvin Conway ne yeh 1968 mein likha tha. Ek lokpriya paraphrase: chaar groups compiler banayen to chaar-pass wala compiler banta hai. Jin teams ko ek feature badalne mein lagaataar meetings chahiye, woh kaskar jude hisse banayengi.</li>\n<li>\"Inverse Conway manoeuvre\": teams aisi banao (chhoti, ek capability ki shuru se ant tak maalik) ki jo architecture chahiye woh ubhare.</li>\n<li>Vyavaharik use: koi paanch developers ke liye das services sujhaye to poochho ki har ek ki maalik kaun hai aur on-call kaun hai.</li>\n<li>Yeh tendency hai, physics ka law nahi; achhe interfaces aur communication ise naram kar sakte hain.</li>\n<li>Follow-up: \"Kya yeh monolith ke andar bhi laagu hai?\" — haan, team ke hisaab se module ownership module seemaon ko asli rakhne mein madad karti hai.</li>\n</ul>"
      }
    },
    {
      id: "anemic-vs-rich",
      depth: "detailed",
      q: "What is the difference between an anemic and a rich domain model?",
      answer: "An anemic model has data-only classes with logic in services. A rich model keeps the rules inside entities, so invalid states are hard to create; it pays off when rules are complex.",
      meaning: {
        hi: "Anemic model में सिर्फ़ data वाली classes होती हैं और logic services में। Rich model rules को entities के अंदर रखता है, इसलिए invalid states बनाना कठिन है; जटिल rules में यह फ़ायदा देता है।",
        hg: "Anemic model mein sirf data wali classes hoti hain aur logic services mein. Rich model rules ko entities ke andar rakhta hai, isliye invalid states banana kathin hai; jatil rules mein yeh fayda deta hai."
      },
      explain: {
        en: "<ul>\n<li>Anemic: <code>order.Status = \"Placed\"</code> from anywhere, rules in <code>OrderService</code>. Easy to read and map to EF; the rules can be bypassed and get duplicated.</li>\n<li>Rich: <code>order.Place()</code> checks the rule and then changes state; setters are private. Rules live in one place and are unit-testable without a database.</li>\n<li>Martin Fowler called the anemic model an anti-pattern; many teams still use it successfully for simple CRUD. Present it as a trade-off, not a sin.</li>\n<li>A rich model does not mean every method on the entity: logic that needs outside data (a price list, an external call) belongs in a domain service or the handler.</li>\n<li>Follow-up: \"Does EF Core support rich models?\" — yes: private setters, backing fields and constructors work with mapping configuration.</li>\n</ul>",
        hi: "<ul>\n<li>Anemic: कहीं से भी <code>order.Status = \"Placed\"</code>, rules <code>OrderService</code> में। पढ़ना और EF में map करना आसान; rules बायपास हो सकते हैं और दोहराए जाते हैं।</li>\n<li>Rich: <code>order.Place()</code> rule जाँचकर state बदलता है; setters private। Rules एक जगह रहते हैं और बिना database के unit-test होते हैं।</li>\n<li>Martin Fowler ने anemic model को anti-pattern कहा; फिर भी कई teams सादे CRUD के लिए इसे सफलता से use करती हैं। इसे trade-off की तरह बताओ, पाप की तरह नहीं।</li>\n<li>Rich model का मतलब entity पर हर method नहीं: जिस logic को बाहरी data चाहिए (price list, बाहरी call) वह domain service या handler में जाता है।</li>\n<li>Follow-up: \"क्या EF Core rich models support करता है?\" — हाँ: private setters, backing fields और constructors mapping configuration के साथ चलते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Anemic: kahin se bhi <code>order.Status = \"Placed\"</code>, rules <code>OrderService</code> mein. Padhna aur EF mein map karna aasaan; rules bypass ho sakte hain aur dohraaye jaate hain.</li>\n<li>Rich: <code>order.Place()</code> rule jaanchkar state badalta hai; setters private. Rules ek jagah rehte hain aur bina database ke unit-test hote hain.</li>\n<li>Martin Fowler ne anemic model ko anti-pattern kaha; phir bhi kai teams saade CRUD ke liye ise safalta se use karti hain. Ise trade-off ki tarah batao, paap ki tarah nahi.</li>\n<li>Rich model ka matlab entity par har method nahi: jis logic ko baahri data chahiye (price list, baahri call) woh domain service ya handler mein jaata hai.</li>\n<li>Follow-up: \"Kya EF Core rich models support karta hai?\" — haan: private setters, backing fields aur constructors mapping configuration ke saath chalte hain.</li>\n</ul>"
      }
    },
    {
      id: "domain-events-dispatch",
      depth: "detailed",
      q: "What are domain events and when do you dispatch them?",
      answer: "A domain event is a past-tense fact raised by an aggregate, like OrderPlaced. Dispatch either just before SaveChanges (same transaction, atomic side effects) or after it (separate transactions, eventual consistency; use an outbox for reliability).",
      meaning: {
        hi: "Domain event past का fact है जो aggregate raise करता है, जैसे OrderPlaced। Dispatch या तो SaveChanges से ठीक पहले करो (वही transaction, side effects atomic) या उसके बाद (अलग transactions, eventual consistency; reliability के लिए outbox)।",
        hg: "Domain event past ka fact hai jo aggregate raise karta hai, jaise OrderPlaced. Dispatch ya to SaveChanges se theek pehle karo (wahi transaction, side effects atomic) ya uske baad (alag transactions, eventual consistency; reliability ke liye outbox)."
      },
      explain: {
        en: "<ul>\n<li>The aggregate only <b>records</b> the event (in a list). It does not call handlers, so the domain stays free of infrastructure.</li>\n<li>Option A, <b>just before</b> <code>SaveChanges</code> (the eShopOnContainers style): the handlers' changes are saved in the same transaction, so side effects are atomic; but several aggregates change in one transaction, which breaks the one-aggregate-per-transaction rule and makes the transaction longer. Option B, <b>after</b> <code>SaveChanges</code>: one aggregate per transaction, eventually consistent; but if the process stops or a handler fails after the commit, the side effect can be <b>lost</b>, so use retry-safe (idempotent) handlers and an outbox.</li>\n<li>If events must reach other services reliably, the Outbox pattern (Day 16) stores them in the same transaction as the data.</li>\n<li>Domain events are inside one service; integration events cross service boundaries. Do not expose domain events directly as your public contract.</li>\n<li>Follow-up: \"Why not just call the email service from <code>Place()</code>?\" — the domain would depend on infrastructure and the order could not be tested alone.</li>\n</ul>",
        hi: "<ul>\n<li>Aggregate event को सिर्फ़ <b>दर्ज</b> करता है (एक list में)। वह handlers को call नहीं करता, इसलिए domain infrastructure से मुक्त रहता है।</li>\n<li>विकल्प A, <code>SaveChanges</code> से <b>ठीक पहले</b> (eShopOnContainers style): handlers के बदलाव उसी transaction में save होते हैं, इसलिए side effects atomic हैं; पर कई aggregates एक transaction में बदलते हैं, जो one-aggregate-per-transaction rule तोड़ता है और transaction लंबा करता है। विकल्प B, <code>SaveChanges</code> के <b>बाद</b>: एक transaction में एक aggregate, eventually consistent; पर commit के बाद process रुके या handler fail हो तो side effect <b>खो</b> सकता है, इसलिए retry-safe (idempotent) handlers और outbox use करो।</li>\n<li>अगर events को दूसरी services तक भरोसे से पहुँचना है, तो Outbox pattern (Day 16) उन्हें data वाले ही transaction में store करता है।</li>\n<li>Domain events एक service के अंदर होते हैं; integration events service की सीमाएँ पार करते हैं। Domain events को सीधे public contract मत बनाओ।</li>\n<li>Follow-up: \"<code>Place()</code> से सीधे email service क्यों नहीं बुलाते?\" — तब domain infrastructure पर निर्भर होगा और order अकेले test नहीं हो सकेगा।</li>\n</ul>",
        hg: "<ul>\n<li>Aggregate event ko sirf <b>darj</b> karta hai (ek list mein). Woh handlers ko call nahi karta, isliye domain infrastructure se mukt rehta hai.</li>\n<li>Vikalp A, <code>SaveChanges</code> se <b>theek pehle</b> (eShopOnContainers style): handlers ke badlaav usi transaction mein save hote hain, isliye side effects atomic hain; par kai aggregates ek transaction mein badalte hain, jo one-aggregate-per-transaction rule todta hai aur transaction lamba karta hai. Vikalp B, <code>SaveChanges</code> ke <b>baad</b>: ek transaction mein ek aggregate, eventually consistent; par commit ke baad process ruke ya handler fail ho to side effect <b>kho</b> sakta hai, isliye retry-safe (idempotent) handlers aur outbox use karo.</li>\n<li>Agar events ko doosri services tak bharose se pahunchna hai, to Outbox pattern (Day 16) unhe data wale hi transaction mein store karta hai.</li>\n<li>Domain events ek service ke andar hote hain; integration events service ki seemayen paar karte hain. Domain events ko seedhe public contract mat banao.</li>\n<li>Follow-up: \"<code>Place()</code> se seedhe email service kyun nahi bulate?\" — tab domain infrastructure par nirbhar hoga aur order akele test nahi ho sakega.</li>\n</ul>"
      }
    },
    {
      id: "adr-what-and-why",
      depth: "detailed",
      q: "What is an ADR and why would you introduce it in a team?",
      answer: "An Architecture Decision Record is a short document with context, decision and consequences for one significant choice. It keeps the reasoning in the repository, so later changes start from facts, not memory.",
      meaning: {
        hi: "Architecture Decision Record एक छोटा document है जिसमें एक अहम चुनाव का context, decision और consequences होते हैं। यह कारण repository में रखता है, ताकि बाद के बदलाव तथ्यों से शुरू हों, यादाश्त से नहीं।",
        hg: "Architecture Decision Record ek chhota document hai jismein ek aham chunaav ka context, decision aur consequences hote hain. Yeh kaaran repository mein rakhta hai, taaki baad ke badlaav tathyon se shuru hon, yaadasht se nahi."
      },
      explain: {
        en: "<ul>\n<li>Format (a common one, Michael Nygard's): Title, Status (proposed / accepted / superseded), Context, Decision, Consequences. Add alternatives considered.</li>\n<li>Store it in the repo (for example <code>docs/adr/</code>), review it in a pull request like code, and keep history: mark old ones <i>superseded</i>, do not delete.</li>\n<li>Benefits: onboarding, fewer repeated debates, a clear moment to say what we give up.</li>\n<li>Keep it light: only for decisions that are costly to reverse. A heavy process makes people skip it.</li>\n<li>Follow-up: \"How do you get buy-in?\" — draft it, ask the team to comment, decide by a date, and record dissent in the ADR.</li>\n</ul>",
        hi: "<ul>\n<li>Format (एक आम, Michael Nygard का): Title, Status (proposed / accepted / superseded), Context, Decision, Consequences। सोचे गए विकल्प जोड़ो।</li>\n<li>Repo में रखो (जैसे <code>docs/adr/</code>), code की तरह pull request में review करो, और इतिहास रखो: पुराने को <i>superseded</i> चिह्नित करो, मिटाओ मत।</li>\n<li>फ़ायदे: onboarding, कम दोहराई जाने वाली बहसें, और यह कहने का साफ़ मौक़ा कि हम क्या छोड़ रहे हैं।</li>\n<li>हल्का रखो: सिर्फ़ उन फ़ैसलों के लिए जिन्हें पलटना महँगा है। भारी process से लोग इसे छोड़ देते हैं।</li>\n<li>Follow-up: \"buy-in कैसे लोगे?\" — draft लिखो, team से comment माँगो, तारीख़ तक तय करो, और असहमति ADR में दर्ज करो।</li>\n</ul>",
        hg: "<ul>\n<li>Format (ek aam, Michael Nygard ka): Title, Status (proposed / accepted / superseded), Context, Decision, Consequences. Socche gaye vikalp jodo.</li>\n<li>Repo mein rakho (jaise <code>docs/adr/</code>), code ki tarah pull request mein review karo, aur itihaas rakho: purane ko <i>superseded</i> chinhit karo, mitao mat.</li>\n<li>Fayde: onboarding, kam dohraayi jaane wali behsen, aur yeh kehne ka saaf mauka ki hum kya chhod rahe hain.</li>\n<li>Halka rakho: sirf un faislon ke liye jinhe palatna mehnga hai. Bhaari process se log ise chhod dete hain.</li>\n<li>Follow-up: \"Buy-in kaise loge?\" — draft likho, team se comment maango, taareekh tak tay karo, aur asahmati ADR mein darj karo.</li>\n</ul>"
      }
    },
    {
      id: "vertical-slice-trade-offs",
      depth: "detailed",
      q: "What is vertical slice architecture and what are its trade-offs?",
      answer: "Code is organised by feature, so each use case holds its own endpoint, handler and data access. It reduces ceremony, but allows duplication and needs agreed conventions.",
      meaning: {
        hi: "Code feature से organise होता है, इसलिए हर use case में अपना endpoint, handler और data access होता है। इससे रस्म घटती है, पर दोहराव की गुंजाइश है और conventions तय करने पड़ते हैं।",
        hg: "Code feature se organise hota hai, isliye har use case mein apna endpoint, handler aur data access hota hai. Isse rasm ghatati hai, par dohraav ki gunjaish hai aur conventions tay karne padte hain."
      },
      explain: {
        en: "<ul>\n<li>Instead of Controllers / Services / Repositories folders, you have <code>Features/PlaceOrder</code>, <code>Features/CancelOrder</code>. A change usually touches one folder.</li>\n<li>Each slice picks its own style: a plain EF query for a simple read, a rich aggregate for a complex write. Common with Minimal APIs and handlers (Day 12, Day 11 for CQRS).</li>\n<li>Cons: shared logic may be copied between slices; without conventions the codebase becomes inconsistent; boundaries between slices are weaker than separate projects.</li>\n<li>It combines with a modular monolith: modules by capability, slices inside.</li>\n<li>Follow-up: \"Isn't that just a messy codebase?\" — only if there are no rules; the benefit comes with agreed shared pieces (domain rules, cross-cutting behaviours).</li>\n</ul>",
        hi: "<ul>\n<li>Controllers / Services / Repositories folders की जगह <code>Features/PlaceOrder</code>, <code>Features/CancelOrder</code>। बदलाव आम तौर पर एक folder छूता है।</li>\n<li>हर slice अपना style चुनती है: सरल read के लिए सादी EF query, जटिल write के लिए rich aggregate। Minimal APIs और handlers के साथ आम (Day 12, CQRS के लिए Day 11)।</li>\n<li>नुक़सान: साझा logic slices के बीच copy हो सकता है; conventions के बिना codebase असंगत हो जाता है; slices के बीच की सीमाएँ अलग projects से कमज़ोर हैं।</li>\n<li>यह modular monolith से मिलता है: capability से modules, अंदर slices।</li>\n<li>Follow-up: \"क्या यह बस बेतरतीब codebase नहीं?\" — तभी जब कोई नियम न हों; फ़ायदा तब है जब साझा हिस्से (domain rules, cross-cutting behaviours) तय हों।</li>\n</ul>",
        hg: "<ul>\n<li>Controllers / Services / Repositories folders ki jagah <code>Features/PlaceOrder</code>, <code>Features/CancelOrder</code>. Badlaav aam taur par ek folder chhoota hai.</li>\n<li>Har slice apna style chunti hai: saral read ke liye saadi EF query, jatil write ke liye rich aggregate. Minimal APIs aur handlers ke saath aam (Day 12, CQRS ke liye Day 11).</li>\n<li>Nuksaan: saajha logic slices ke beech copy ho sakta hai; conventions ke bina codebase asangat ho jaata hai; slices ke beech ki seemayen alag projects se kamzor hain.</li>\n<li>Yeh modular monolith se milta hai: capability se modules, andar slices.</li>\n<li>Follow-up: \"Kya yeh bas betarteeb codebase nahi?\" — tabhi jab koi niyam na hon; fayda tab hai jab saajhe hisse (domain rules, cross-cutting behaviours) tay hon.</li>\n</ul>"
      }
    },
    {
      id: "aggregates-reference-by-id",
      depth: "detailed",
      q: "Why should aggregates reference each other by Id instead of by object?",
      answer: "It keeps each aggregate small and independent, so it is loaded, changed and saved on its own as one transaction. Object links pull in large graphs and blur the consistency boundary.",
      meaning: {
        hi: "इससे हर aggregate छोटा और स्वतंत्र रहता है, इसलिए वह अपने आप, एक transaction के रूप में, load, change और save होता है। Object links बड़े graphs खींच लाते हैं और consistency सीमा धुँधली करते हैं।",
        hg: "Isse har aggregate chhota aur swatantra rehta hai, isliye woh apne aap, ek transaction ke roop mein, load, change aur save hota hai. Object links bade graphs kheench laate hain aur consistency seema dhundhli karte hain."
      },
      explain: {
        en: "<ul>\n<li><code>Order.CustomerId</code> instead of <code>Order.Customer</code>: loading an order does not load a customer, who loads addresses, who loads other orders...</li>\n<li>It makes the boundary visible: to use another aggregate, you load it through its own repository, in your own handler.</li>\n<li>It prepares for a split: an Id works across modules and services; an object reference does not.</li>\n<li>Cost: no navigation like <code>order.Customer.Name</code>; you do a second query, or use a read model/DTO for display (CQRS-style reads, Day 11).</li>\n<li>Follow-up: \"What about EF navigation properties?\" — they are allowed inside an aggregate; across aggregates many teams avoid them or keep them for reads only.</li>\n</ul>",
        hi: "<ul>\n<li><code>Order.Customer</code> की जगह <code>Order.CustomerId</code>: order load करने से customer load नहीं होता, जो addresses load करता, जो दूसरे orders load करते...</li>\n<li>यह सीमा दिखाता है: दूसरा aggregate use करना हो तो उसे उसकी अपनी repository से, अपने handler में load करो।</li>\n<li>यह बँटवारे की तैयारी है: Id modules और services के पार चलता है; object reference नहीं।</li>\n<li>क़ीमत: <code>order.Customer.Name</code> जैसा navigation नहीं; दूसरी query चलाओ, या दिखाने के लिए read model/DTO (CQRS-style reads, Day 11)।</li>\n<li>Follow-up: \"EF navigation properties का क्या?\" — aggregate के अंदर ठीक हैं; aggregates के पार कई teams उनसे बचती हैं या सिर्फ़ reads के लिए रखती हैं।</li>\n</ul>",
        hg: "<ul>\n<li><code>Order.Customer</code> ki jagah <code>Order.CustomerId</code>: order load karne se customer load nahi hota, jo addresses load karta, jo doosre orders load karte...</li>\n<li>Yeh seema dikhata hai: doosra aggregate use karna ho to use uski apni repository se, apne handler mein load karo.</li>\n<li>Yeh batwaare ki taiyaari hai: Id modules aur services ke paar chalta hai; object reference nahi.</li>\n<li>Keemat: <code>order.Customer.Name</code> jaisa navigation nahi; doosri query chalao, ya dikhane ke liye read model/DTO (CQRS-style reads, Day 11).</li>\n<li>Follow-up: \"EF navigation properties ka kya?\" — aggregate ke andar theek hain; aggregates ke paar kai teams unse bachti hain ya sirf reads ke liye rakhti hain.</li>\n</ul>"
      }
    },
    {
      id: "clean-onion-hexagonal",
      depth: "detailed",
      q: "How do Clean, Onion and Hexagonal architecture differ?",
      answer: "They share one idea: the domain at the centre and dependencies pointing inward. Hexagonal stresses ports and adapters, Onion the concentric layers, and Clean adds named rings such as entities and use cases.",
      meaning: {
        hi: "इनका एक ही विचार है: बीच में domain और dependencies अंदर की तरफ़। Hexagonal ports और adapters पर ज़ोर देता है, Onion concentric layers पर, और Clean entities और use cases जैसे नामित rings जोड़ता है।",
        hg: "Inka ek hi vichaar hai: beech mein domain aur dependencies andar ki taraf. Hexagonal ports aur adapters par zor deta hai, Onion concentric layers par, aur Clean entities aur use cases jaise naamit rings jodta hai."
      },
      explain: {
        en: "<ul>\n<li><b>Hexagonal</b> (Alistair Cockburn, ports and adapters): the app core has ports; drivers (HTTP, tests) and driven things (database, email) plug in through adapters.</li>\n<li><b>Onion</b> (Jeffrey Palermo): concentric layers — domain model, domain services, application services, then infrastructure and UI outside.</li>\n<li><b>Clean</b> (Robert C. Martin): entities, use cases, interface adapters, frameworks &amp; drivers; the dependency rule is the headline.</li>\n<li>Ports and adapters is the Adapter pattern (Day 10) applied at architecture scale: an adapter makes EF Core or an email service fit the port.</li>\n<li>In a .NET solution they usually look the same: Domain, Application, Infrastructure, Web. Do not spend interview time on small naming differences; show you understand the inward arrow.</li>\n<li>Follow-up: \"Which would you pick?\" — the one the team already understands; the principle matters more than the label.</li>\n</ul>",
        hi: "<ul>\n<li><b>Hexagonal</b> (Alistair Cockburn, ports and adapters): app core में ports होते हैं; drivers (HTTP, tests) और driven चीज़ें (database, email) adapters से जुड़ती हैं।</li>\n<li><b>Onion</b> (Jeffrey Palermo): concentric layers — domain model, domain services, application services, फिर बाहर infrastructure और UI।</li>\n<li><b>Clean</b> (Robert C. Martin): entities, use cases, interface adapters, frameworks &amp; drivers; dependency rule मुख्य बात है।</li>\n<li>Ports and adapters असल में Adapter pattern (Day 10) है जो architecture के स्तर पर लगा है: adapter EF Core या email service को port में फ़िट कराता है।</li>\n<li>.NET solution में ये आम तौर पर एक जैसे दिखते हैं: Domain, Application, Infrastructure, Web। Interview का समय नामों के छोटे फ़र्क़ पर मत लगाओ; अंदर की तरफ़ वाला तीर समझाओ।</li>\n<li>Follow-up: \"आप कौन-सा चुनोगे?\" — जो team पहले से समझती हो; label से ज़्यादा सिद्धांत मायने रखता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Hexagonal</b> (Alistair Cockburn, ports and adapters): app core mein ports hote hain; drivers (HTTP, tests) aur driven cheezein (database, email) adapters se judti hain.</li>\n<li><b>Onion</b> (Jeffrey Palermo): concentric layers — domain model, domain services, application services, phir bahar infrastructure aur UI.</li>\n<li><b>Clean</b> (Robert C. Martin): entities, use cases, interface adapters, frameworks &amp; drivers; dependency rule mukhya baat hai.</li>\n<li>Ports and adapters asal mein Adapter pattern (Day 10) hai jo architecture ke star par laga hai: adapter EF Core ya email service ko port mein fit karata hai.</li>\n<li>.NET solution mein ye aam taur par ek jaise dikhte hain: Domain, Application, Infrastructure, Web. Interview ka samay naamon ke chhote farq par mat lagao; andar ki taraf wala teer samjhao.</li>\n<li>Follow-up: \"Aap kaun-sa chunoge?\" — jo team pehle se samajhti ho; label se zyada siddhant maayne rakhta hai.</li>\n</ul>"
      }
    },
    {
      id: "when-not-microservices",
      depth: "detailed",
      q: "Your manager wants microservices for a team of five developers. What do you say?",
      answer: "I would ask what problem it solves, then compare costs: network failures, distributed data, deployment and monitoring. For five developers I would likely propose a modular monolith and a clear trigger for splitting.",
      meaning: {
        hi: "मैं पूछूँगा कि यह कौन-सी समस्या सुलझाता है, फिर लागतें तौलूँगा: network failures, distributed data, deployment और monitoring। पाँच developers के लिए मैं शायद modular monolith और बँटवारे का साफ़ trigger सुझाऊँगा।",
        hg: "Main poochhunga ki yeh kaun-si samasya suljhata hai, phir laagatein taulunga: network failures, distributed data, deployment aur monitoring. Paanch developers ke liye main shaayad modular monolith aur batwaare ka saaf trigger sujhaunga."
      },
      explain: {
        en: "<ul>\n<li>Start with a question, not a \"no\": what is the pain — slow releases, scaling one part, team conflicts, or \"it is modern\"?</li>\n<li>List what microservices add: network calls that fail, no single transaction, data duplication, versioned contracts, tracing, a deployment pipeline per service, on-call load (Day 16).</li>\n<li>Offer an option that fits the pain: a modular monolith with clear borders, a faster pipeline, or extracting <b>one</b> service that has a real scaling or ownership reason.</li>\n<li>Agree on triggers to revisit: a second team, a module needing very different scale, or incompatible release rhythms. Record it in an ADR.</li>\n<li>Be fair: if there are real reasons (several autonomous teams, regulatory isolation, very different scaling) microservices can be right. The answer is about fit.</li>\n</ul>",
        hi: "<ul>\n<li>\"नहीं\" से नहीं, सवाल से शुरू करो: दर्द क्या है — धीमे releases, एक हिस्से की scaling, team के टकराव, या \"यह modern है\"?</li>\n<li>गिनाओ कि microservices क्या जोड़ती हैं: fail होने वाली network calls, एक transaction नहीं, data की नक़ल, versioned contracts, tracing, हर service की deployment pipeline, on-call का बोझ (Day 16)।</li>\n<li>दर्द के मुताबिक़ विकल्प दो: साफ़ सीमाओं वाला modular monolith, तेज़ pipeline, या <b>एक</b> service निकालना जिसकी असली scaling या ownership वजह है।</li>\n<li>दोबारा देखने के triggers पर सहमति: दूसरी team, बहुत अलग scale वाला module, या असंगत release लय। ADR में दर्ज करो।</li>\n<li>Fair रहो: असली वजहें हों (कई autonomous teams, regulatory isolation, बहुत अलग scaling) तो microservices सही हो सकती हैं। जवाब fit का है।</li>\n</ul>",
        hg: "<ul>\n<li>\"Nahi\" se nahi, sawaal se shuru karo: dard kya hai — dheemi releases, ek hisse ki scaling, team ke takraav, ya \"yeh modern hai\"?</li>\n<li>Ginao ki microservices kya jodti hain: fail hone wali network calls, ek transaction nahi, data ki nakal, versioned contracts, tracing, har service ki deployment pipeline, on-call ka bojh (Day 16).</li>\n<li>Dard ke mutaabik vikalp do: saaf seemaon wala modular monolith, tez pipeline, ya <b>ek</b> service nikaalna jiski asli scaling ya ownership wajah hai.</li>\n<li>Dobara dekhne ke triggers par sahmati: doosri team, bahut alag scale wala module, ya asangat release lay. ADR mein darj karo.</li>\n<li>Fair raho: asli wajahein hon (kai autonomous teams, regulatory isolation, bahut alag scaling) to microservices sahi ho sakti hain. Jawaab fit ka hai.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "record-with-list-equality",
      src: "var a = new Parcel(\"P1\", new List<string> { \"tea\", \"sugar\" });\nvar b = new Parcel(\"P1\", new List<string> { \"tea\", \"sugar\" });\nConsole.WriteLine(\"same contents, record ==: \" + (a == b));\n\nvar shared = new List<string> { \"tea\" };\nvar c = new Parcel(\"P2\", shared);\nvar d = c with { Id = \"P2\" };\nConsole.WriteLine(\"copy via with, record ==: \" + (c == d));\nshared.Add(\"milk\");\nConsole.WriteLine(\"items seen through the copy: \" + d.Items.Count);\n\nvar x = new CheckedParcel(\"P1\", new List<string> { \"tea\", \"sugar\" });\nvar y = new CheckedParcel(\"P1\", new List<string> { \"tea\", \"sugar\" });\nConsole.WriteLine(\"custom Equals: \" + (x == y));\nConsole.WriteLine(\"same hash: \" + (x.GetHashCode() == y.GetHashCode()));\n\nrecord Parcel(string Id, List<string> Items);\n\nrecord CheckedParcel(string Id, List<string> Items)\n{\n    public virtual bool Equals(CheckedParcel? other) =>\n        other is not null && Id == other.Id && Items.SequenceEqual(other.Items);\n\n    public override int GetHashCode() => HashCode.Combine(Id, Items.Count);\n}",
      answer: "same contents, record ==: False\ncopy via with, record ==: True\nitems seen through the copy: 2\ncustom Equals: True\nsame hash: True",
      explain: {
        en: "<ul>\n<li>A record compares each member with the default comparer. For <code>List&lt;string&gt;</code> that is <b>reference</b> equality, so two lists with the same items are \"different\" → <b>False</b>. A record is a value object only as deep as its members are.</li>\n<li><code>with</code> makes a <b>shallow</b> copy: <code>d</code> points to the <b>same</b> list as <code>c</code>, so they are equal, and adding \"milk\" through <code>shared</code> shows up in <code>d</code> (2 items).</li>\n<li>Fix: an immutable collection stops the shared-mutation problem of the shallow <code>with</code> copy, but it does <b>not</b> give value equality (immutable collections also compare by reference). For equality, override <code>Equals</code> (and <code>GetHashCode</code> consistently) to compare items in order, as <code>CheckedParcel</code> does → <b>True</b>, same hash, or wrap the items in a value-equal collection type.</li>\n</ul>",
        hi: "<ul>\n<li>Record हर member को default comparer से compare करता है। <code>List&lt;string&gt;</code> के लिए यह <b>reference</b> equality है, इसलिए एक जैसे items वाली दो lists \"अलग\" हैं → <b>False</b>। Record उतना ही गहरा value object है जितने उसके members।</li>\n<li><code>with</code> <b>shallow</b> copy बनाता है: <code>d</code> उसी list को पकड़ता है जिसे <code>c</code>, इसलिए वे बराबर हैं, और <code>shared</code> से \"milk\" जोड़ना <code>d</code> में दिखता है (2 items)।</li>\n<li>Fix: immutable collection shallow <code>with</code> copy की shared-mutation वाली दिक़्क़त रोकता है, पर value equality <b>नहीं</b> देता (immutable collections भी reference से compare होते हैं)। Equality के लिए <code>Equals</code> (और उसके साथ <code>GetHashCode</code>) override करके items क्रम से compare करो, जैसे <code>CheckedParcel</code> करता है → <b>True</b>, वही hash, या items को value-equal collection type में रखो।</li>\n</ul>",
        hg: "<ul>\n<li>Record har member ko default comparer se compare karta hai. <code>List&lt;string&gt;</code> ke liye yeh <b>reference</b> equality hai, isliye ek jaise items wali do lists \"alag\" hain → <b>False</b>. Record utna hi gehra value object hai jitne uske members.</li>\n<li><code>with</code> <b>shallow</b> copy banata hai: <code>d</code> usi list ko pakadta hai jise <code>c</code>, isliye woh barabar hain, aur <code>shared</code> se \"milk\" jodna <code>d</code> mein dikhta hai (2 items).</li>\n<li>Fix: immutable collection shallow <code>with</code> copy ki shared-mutation wali dikkat rokta hai, par value equality <b>nahi</b> deta (immutable collections bhi reference se compare hote hain). Equality ke liye <code>Equals</code> (aur uske saath <code>GetHashCode</code>) override karke items kram se compare karo, jaise <code>CheckedParcel</code> karta hai → <b>True</b>, wahi hash, ya items ko value-equal collection type mein rakho.</li>\n</ul>"
      }
    },
    {
      id: "entity-equality-by-id",
      src: "var c1 = new Customer(1, \"Asha\");\nvar c2 = new Customer(1, \"Asha Verma\");\nvar c3 = new Customer(2, \"Asha\");\n\nConsole.WriteLine(\"c1 == c2: \" + (c1 == c2));\nConsole.WriteLine(\"c1.Equals(c2): \" + c1.Equals(c2));\nConsole.WriteLine(\"c1.Equals(c3): \" + c1.Equals(c3));\n\nvar set = new HashSet<Customer> { c1 };\nConsole.WriteLine(\"add c2: \" + set.Add(c2));\nConsole.WriteLine(\"count: \" + set.Count);\n\nc1.Rename(\"Asha K\");\nConsole.WriteLine(\"contains c2 after rename: \" + set.Contains(c2));\nConsole.WriteLine(\"name in set: \" + set.Single().Name);\n\nclass Customer(int id, string name)\n{\n    public int Id { get; } = id;\n    public string Name { get; private set; } = name;\n\n    public void Rename(string newName) => Name = newName;\n\n    public override bool Equals(object? obj) => obj is Customer other && other.Id == Id;\n    public override int GetHashCode() => Id.GetHashCode();\n}",
      answer: "c1 == c2: False\nc1.Equals(c2): True\nc1.Equals(c3): False\nadd c2: False\ncount: 1\ncontains c2 after rename: True\nname in set: Asha K",
      explain: {
        en: "<ul>\n<li>An <b>entity</b> is the same when the <b>Id</b> is the same. The class overrides <code>Equals</code> and <code>GetHashCode</code> by Id, so <code>c1.Equals(c2)</code> is True although the names differ, and <code>c1.Equals(c3)</code> is False although the names match.</li>\n<li><code>==</code> was <b>not</b> overloaded, so it still compares references → False. If you override <code>Equals</code>, be clear about <code>==</code> too (overload it, or tell the team to use <code>Equals</code>).</li>\n<li>The set sees <code>c2</code> as the same customer: <code>Add</code> returns False, count stays 1.</li>\n<li>The hash comes from the Id, which never changes, so renaming does not break the set. Hashing on a mutable field would lose the item.</li>\n</ul>",
        hi: "<ul>\n<li><b>Entity</b> तब वही है जब <b>Id</b> वही हो। Class <code>Equals</code> और <code>GetHashCode</code> को Id से override करती है, इसलिए नाम अलग होने पर भी <code>c1.Equals(c2)</code> True है, और नाम मिलने पर भी <code>c1.Equals(c3)</code> False।</li>\n<li><code>==</code> overload <b>नहीं</b> हुआ, इसलिए वह अब भी references compare करता है → False। <code>Equals</code> override करो तो <code>==</code> पर भी साफ़ रहो (overload करो, या team को <code>Equals</code> use करने को कहो)।</li>\n<li>Set <code>c2</code> को वही customer मानता है: <code>Add</code> False लौटाता है, count 1 रहता है।</li>\n<li>Hash Id से आता है, जो कभी नहीं बदलता, इसलिए rename से set नहीं टूटता। बदलने वाले field पर hash करने से item खो जाता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Entity</b> tab wahi hai jab <b>Id</b> wahi ho. Class <code>Equals</code> aur <code>GetHashCode</code> ko Id se override karti hai, isliye naam alag hone par bhi <code>c1.Equals(c2)</code> True hai, aur naam milne par bhi <code>c1.Equals(c3)</code> False.</li>\n<li><code>==</code> overload <b>nahi</b> hua, isliye woh ab bhi references compare karta hai → False. <code>Equals</code> override karo to <code>==</code> par bhi saaf raho (overload karo, ya team ko <code>Equals</code> use karne ko kaho).</li>\n<li>Set <code>c2</code> ko wahi customer maanta hai: <code>Add</code> False lautata hai, count 1 rehta hai.</li>\n<li>Hash Id se aata hai, jo kabhi nahi badalta, isliye rename se set nahi tootta. Badalne wale field par hash karne se item kho jaata hai.</li>\n</ul>"
      }
    },
    {
      id: "aggregate-invariants-and-leak",
      src: "var cart = new Cart(maxLines: 2);\ncart.Add(\"tea\", 1);\ncart.Add(\"sugar\", 2);\n\ntry { cart.Add(\"milk\", 1); }\ncatch (InvalidOperationException ex) { Console.WriteLine(\"rejected: \" + ex.Message); }\n\ntry { cart.Add(\"salt\", 0); }\ncatch (ArgumentOutOfRangeException ex) { Console.WriteLine(\"rejected: \" + ex.ParamName); }\n\nConsole.WriteLine(cart.Lines.Count + \" lines, \" + cart.TotalQuantity + \" items\");\n\n((List<CartLine>)cart.Lines).Add(new CartLine(\"salt\", 5));\nConsole.WriteLine(\"after cast: \" + cart.Lines.Count + \" lines, \" + cart.TotalQuantity + \" items\");\nConsole.WriteLine(\"safe view is a List: \" + (cart.SafeLines is List<CartLine>));\n\nrecord CartLine(string Sku, int Qty);\n\nclass Cart(int maxLines)\n{\n    private readonly List<CartLine> _lines = [];\n\n    public IReadOnlyList<CartLine> Lines => _lines;\n    public IReadOnlyList<CartLine> SafeLines => _lines.AsReadOnly();\n    public int TotalQuantity => _lines.Sum(l => l.Qty);\n\n    public void Add(string sku, int qty)\n    {\n        if (qty <= 0) throw new ArgumentOutOfRangeException(nameof(qty));\n        if (_lines.Count >= maxLines) throw new InvalidOperationException($\"Cart is full ({maxLines} lines)\");\n        _lines.Add(new CartLine(sku, qty));\n    }\n}",
      answer: "rejected: Cart is full (2 lines)\nrejected: qty\n2 lines, 3 items\nafter cast: 3 lines, 8 items\nsafe view is a List: False",
      explain: {
        en: "<ul>\n<li>The root enforces its <b>invariants</b>: a third line is rejected (<code>InvalidOperationException</code>), and a zero quantity is rejected first (<code>ArgumentOutOfRangeException</code>, parameter name <code>qty</code>).</li>\n<li>But <code>Lines</code> returns <code>_lines</code> itself typed as <code>IReadOnlyList</code>. The object is still a <code>List</code>, so a cast adds a third line and 5 more items: <b>3 lines, 8 items</b> — the invariant is bypassed.</li>\n<li><code>AsReadOnly()</code> wraps the list in a <code>ReadOnlyCollection</code>, which is <b>not</b> a <code>List</code>, so the check prints False and the cast would fail.</li>\n<li>Lesson: an interface type is a promise to callers, not protection. Expose a real read-only wrapper (or a copy) from aggregates.</li>\n</ul>",
        hi: "<ul>\n<li>Root अपने <b>invariants</b> लागू करता है: तीसरी line reject होती है (<code>InvalidOperationException</code>), और शून्य quantity पहले reject होती है (<code>ArgumentOutOfRangeException</code>, parameter नाम <code>qty</code>)।</li>\n<li>पर <code>Lines</code> ख़ुद <code>_lines</code> को <code>IReadOnlyList</code> type में लौटाता है। Object अब भी <code>List</code> है, इसलिए cast तीसरी line और 5 items और जोड़ देता है: <b>3 lines, 8 items</b> — invariant बायपास हो गया।</li>\n<li><code>AsReadOnly()</code> list को <code>ReadOnlyCollection</code> में लपेटता है, जो <code>List</code> <b>नहीं</b> है, इसलिए check False print करता है और cast fail होता।</li>\n<li>सबक: interface type callers से वादा है, सुरक्षा नहीं। Aggregates से असली read-only wrapper (या copy) दिखाओ।</li>\n</ul>",
        hg: "<ul>\n<li>Root apne <b>invariants</b> laagu karta hai: teesri line reject hoti hai (<code>InvalidOperationException</code>), aur shunya quantity pehle reject hoti hai (<code>ArgumentOutOfRangeException</code>, parameter naam <code>qty</code>).</li>\n<li>Par <code>Lines</code> khud <code>_lines</code> ko <code>IReadOnlyList</code> type mein lautata hai. Object ab bhi <code>List</code> hai, isliye cast teesri line aur 5 items aur jod deta hai: <b>3 lines, 8 items</b> — invariant bypass ho gaya.</li>\n<li><code>AsReadOnly()</code> list ko <code>ReadOnlyCollection</code> mein lapetta hai, jo <code>List</code> <b>nahi</b> hai, isliye check False print karta hai aur cast fail hota.</li>\n<li>Sabak: interface type callers se vaada hai, suraksha nahi. Aggregates se asli read-only wrapper (ya copy) dikhao.</li>\n</ul>"
      }
    },
    {
      id: "domain-events-raise-then-dispatch",
      src: "var order = new Order(\"A-1\");\norder.Place();\norder.Ship();\nConsole.WriteLine(\"raised: \" + string.Join(\", \", order.Events.Select(e => e.GetType().Name)));\n\nvar early = new Order(\"A-2\");\ntry { early.Ship(); }\ncatch (InvalidOperationException) { Console.WriteLine(\"A-2 events: \" + early.Events.Count); }\n\nConsole.WriteLine(\"saved\");\nforeach (var ev in order.TakeEvents())\n{\n    Console.WriteLine(\"email -> \" + ev.GetType().Name);\n    if (ev is OrderPlaced) Console.WriteLine(\"stock -> \" + ev.GetType().Name);\n}\nConsole.WriteLine(\"left after dispatch: \" + order.Events.Count);\n\ninterface IDomainEvent { }\nrecord OrderPlaced(string Id) : IDomainEvent;\nrecord OrderShipped(string Id) : IDomainEvent;\n\nclass Order(string id)\n{\n    private readonly List<IDomainEvent> _events = [];\n    private bool _placed;\n\n    public IReadOnlyList<IDomainEvent> Events => _events;\n\n    public void Place()\n    {\n        _placed = true;\n        _events.Add(new OrderPlaced(id));\n    }\n\n    public void Ship()\n    {\n        if (!_placed) throw new InvalidOperationException(\"Place it first.\");\n        _events.Add(new OrderShipped(id));\n    }\n\n    public IReadOnlyList<IDomainEvent> TakeEvents()\n    {\n        var copy = _events.ToArray();\n        _events.Clear();\n        return copy;\n    }\n}",
      answer: "raised: OrderPlaced, OrderShipped\nA-2 events: 0\nsaved\nemail -> OrderPlaced\nstock -> OrderPlaced\nemail -> OrderShipped\nleft after dispatch: 0",
      explain: {
        en: "<ul>\n<li>The aggregate only <b>records</b> events, in the order things happened: <code>OrderPlaced</code>, then <code>OrderShipped</code>. Nothing is sent yet.</li>\n<li>A rejected command (<code>Ship</code> before <code>Place</code>) throws <b>before</b> an event is added, so A-2 has 0 events. Events describe facts that happened.</li>\n<li>After \"saved\", the dispatcher takes the events in order and calls the handlers: email gets both, stock only <code>OrderPlaced</code>. <code>TakeEvents</code> returns a copy and clears the list, so the same event is not dispatched twice.</li>\n<li>If saving fails, nothing was dispatched, so no email goes out for an order that was not stored. Trade-off: if the process stops right after the commit, these in-memory events are lost (an outbox fixes that); dispatching just before <code>SaveChanges</code> instead keeps the changes atomic but puts several aggregates in one transaction.</li>\n</ul>",
        hi: "<ul>\n<li>Aggregate events को सिर्फ़ <b>दर्ज</b> करता है, उसी क्रम में जैसे चीज़ें हुईं: <code>OrderPlaced</code>, फिर <code>OrderShipped</code>। अभी कुछ भेजा नहीं गया।</li>\n<li>Reject हुआ command (<code>Place</code> से पहले <code>Ship</code>) event जुड़ने से <b>पहले</b> exception फेंकता है, इसलिए A-2 के 0 events हैं। Events हो चुके तथ्यों का वर्णन हैं।</li>\n<li>\"saved\" के बाद dispatcher events क्रम से लेता है और handlers बुलाता है: email को दोनों, stock को सिर्फ़ <code>OrderPlaced</code>। <code>TakeEvents</code> copy लौटाकर list साफ़ करता है, इसलिए एक ही event दो बार dispatch नहीं होता।</li>\n<li>Save fail हो तो कुछ dispatch नहीं हुआ, इसलिए जो order store नहीं हुआ उसका email नहीं जाता। Trade-off: commit के ठीक बाद process रुके तो ये in-memory events खो जाते हैं (outbox इसे ठीक करता है); <code>SaveChanges</code> से ठीक पहले dispatch करने पर बदलाव atomic रहते हैं पर कई aggregates एक transaction में आ जाते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Aggregate events ko sirf <b>darj</b> karta hai, usi kram mein jaise cheezein huin: <code>OrderPlaced</code>, phir <code>OrderShipped</code>. Abhi kuch bheja nahi gaya.</li>\n<li>Reject hua command (<code>Place</code> se pehle <code>Ship</code>) event judne se <b>pehle</b> exception phenkta hai, isliye A-2 ke 0 events hain. Events ho chuke tathyon ka varnan hain.</li>\n<li>\"saved\" ke baad dispatcher events kram se leta hai aur handlers bulata hai: email ko dono, stock ko sirf <code>OrderPlaced</code>. <code>TakeEvents</code> copy lautakar list saaf karta hai, isliye ek hi event do baar dispatch nahi hota.</li>\n<li>Save fail ho to kuch dispatch nahi hua, isliye jo order store nahi hua uska email nahi jaata. Trade-off: commit ke theek baad process ruke to ye in-memory events kho jaate hain (outbox ise theek karta hai); <code>SaveChanges</code> se theek pehle dispatch karne par badlaav atomic rehte hain par kai aggregates ek transaction mein aa jaate hain.</li>\n</ul>"
      }
    },
    {
      id: "port-owned-by-inner-layer",
      src: "using Shop.Application;\nusing Shop.Infrastructure;\n\nIOrderRepository repo = new InMemoryOrderRepository();\nvar handler = new PlaceOrderHandler(repo);\nhandler.Handle(\"A-1\");\n\nConsole.WriteLine(\"port lives in: \" + typeof(IOrderRepository).Namespace);\nConsole.WriteLine(\"adapter lives in: \" + typeof(InMemoryOrderRepository).Namespace);\nConsole.WriteLine(\"adapter implements: \" + typeof(InMemoryOrderRepository).GetInterfaces()[0].Name);\nConsole.WriteLine(\"handler depends on: \" + typeof(PlaceOrderHandler).GetConstructors()[0].GetParameters()[0].ParameterType.FullName);\nConsole.WriteLine(\"saved: \" + string.Join(\",\", ((InMemoryOrderRepository)repo).Saved));\n\nnamespace Shop.Application\n{\n    public interface IOrderRepository\n    {\n        void Save(string id);\n    }\n\n    public class PlaceOrderHandler(IOrderRepository repository)\n    {\n        public void Handle(string id)\n        {\n            Console.WriteLine(\"handling \" + id);\n            repository.Save(id);\n        }\n    }\n}\n\nnamespace Shop.Infrastructure\n{\n    using Shop.Application;\n\n    public class InMemoryOrderRepository : IOrderRepository\n    {\n        public List<string> Saved { get; } = [];\n        public void Save(string id) => Saved.Add(id);\n    }\n}",
      answer: "handling A-1\nport lives in: Shop.Application\nadapter lives in: Shop.Infrastructure\nadapter implements: IOrderRepository\nhandler depends on: Shop.Application.IOrderRepository\nsaved: A-1",
      explain: {
        en: "<ul>\n<li>The <b>port</b> <code>IOrderRepository</code> lives in the Application namespace (inner), and the adapter lives in Infrastructure (outer). The <code>using Shop.Application</code> in Infrastructure is the arrow pointing <b>inward</b>; Application has no <code>using</code> of Infrastructure.</li>\n<li>The handler's constructor depends on the interface, so reflection shows <code>Shop.Application.IOrderRepository</code>.</li>\n<li>At runtime the call goes outward (handler → adapter) and prints <code>handling A-1</code> first, then the adapter stores the id. Source dependencies point inward; calls flow outward — that is DIP (Day 8).</li>\n<li>Here namespaces stand in for projects; in a real solution the project references make the compiler reject a wrong arrow.</li>\n</ul>",
        hi: "<ul>\n<li><b>Port</b> <code>IOrderRepository</code> Application namespace (अंदर) में है, और adapter Infrastructure (बाहर) में। Infrastructure का <code>using Shop.Application</code> <b>अंदर</b> की तरफ़ वाला तीर है; Application में Infrastructure का कोई <code>using</code> नहीं।</li>\n<li>Handler का constructor interface पर निर्भर है, इसलिए reflection <code>Shop.Application.IOrderRepository</code> दिखाता है।</li>\n<li>Runtime पर call बाहर जाती है (handler → adapter) और पहले <code>handling A-1</code> print होता है, फिर adapter id store करता है। Source dependencies अंदर की तरफ़; calls बाहर की तरफ़ — यही DIP है (Day 8)।</li>\n<li>यहाँ namespaces projects की जगह हैं; असली solution में project references से compiler ग़लत तीर reject कर देता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Port</b> <code>IOrderRepository</code> Application namespace (andar) mein hai, aur adapter Infrastructure (bahar) mein. Infrastructure ka <code>using Shop.Application</code> <b>andar</b> ki taraf wala teer hai; Application mein Infrastructure ka koi <code>using</code> nahi.</li>\n<li>Handler ka constructor interface par nirbhar hai, isliye reflection <code>Shop.Application.IOrderRepository</code> dikhata hai.</li>\n<li>Runtime par call bahar jaati hai (handler → adapter) aur pehle <code>handling A-1</code> print hota hai, phir adapter id store karta hai. Source dependencies andar ki taraf; calls bahar ki taraf — yahi DIP hai (Day 8).</li>\n<li>Yahan namespaces projects ki jagah hain; asli solution mein project references se compiler galat teer reject kar deta hai.</li>\n</ul>"
      }
    },
    {
      id: "with-skips-constructor-validation",
      src: "var ok = new Percent(40);\n\ntry { _ = new Percent(140); }\ncatch (ArgumentOutOfRangeException) { Console.WriteLine(\"ctor rejects 140\"); }\n\nvar bad = ok with { Value = 140 };\nConsole.WriteLine(\"with allows: \" + bad.Value);\n\nvar safe = new SafePercent(40);\ntry { _ = safe with { Value = 140 }; }\ncatch (ArgumentOutOfRangeException) { Console.WriteLine(\"init rejects 140\"); }\n\nConsole.WriteLine(\"equal by value: \" + (ok == new Percent(40)));\n\nrecord Percent\n{\n    public int Value { get; init; }\n\n    public Percent(int value)\n    {\n        if (value is < 0 or > 100) throw new ArgumentOutOfRangeException(nameof(value));\n        Value = value;\n    }\n}\n\nrecord SafePercent\n{\n    private readonly int _value;\n\n    public int Value\n    {\n        get => _value;\n        init\n        {\n            if (value is < 0 or > 100) throw new ArgumentOutOfRangeException(nameof(value));\n            _value = value;\n        }\n    }\n\n    public SafePercent(int value) => Value = value;\n}",
      answer: "ctor rejects 140\nwith allows: 140\ninit rejects 140\nequal by value: True",
      explain: {
        en: "<ul>\n<li>The constructor of <code>Percent</code> rejects 140. But <code>with</code> does not call that constructor: it copies the object and then runs the <code>init</code> setter, which has no check. So <code>ok with { Value = 140 }</code> gives a <b>broken</b> value object: 140.</li>\n<li><code>SafePercent</code> puts the rule in the <code>init</code> accessor, which the constructor and <code>with</code> both use, so the invalid value is rejected in every path.</li>\n<li>The last line shows value equality still works: two <code>Percent(40)</code> are equal.</li>\n<li>Lesson: for a value object that must stay valid, validate where every path goes through (the init accessor), or use a class with a private constructor and a factory (a struct can always be created with <code>default</code>, skipping validation). Test the <code>with</code> path too.</li>\n</ul>",
        hi: "<ul>\n<li><code>Percent</code> का constructor 140 reject करता है। पर <code>with</code> वह constructor नहीं बुलाता: वह object copy करके <code>init</code> setter चलाता है, जिसमें कोई check नहीं। इसलिए <code>ok with { Value = 140 }</code> एक <b>टूटा हुआ</b> value object देता है: 140।</li>\n<li><code>SafePercent</code> rule को <code>init</code> accessor में रखता है, जिसे constructor और <code>with</code> दोनों use करते हैं, इसलिए हर रास्ते पर गलत (invalid) value reject होती है।</li>\n<li>आख़िरी line दिखाती है कि value equality अब भी चलती है: दो <code>Percent(40)</code> बराबर हैं।</li>\n<li>सबक: जिस value object को valid रहना है, उसे वहाँ validate करो जहाँ से हर रास्ता गुज़रे (init accessor), या private constructor और factory वाली class use करो (struct को <code>default</code> से हमेशा बनाया जा सकता है, validation छोड़कर)। <code>with</code> वाला रास्ता भी test करो।</li>\n</ul>",
        hg: "<ul>\n<li><code>Percent</code> ka constructor 140 reject karta hai. Par <code>with</code> woh constructor nahi bulata: woh object copy karke <code>init</code> setter chalata hai, jismein koi check nahi. Isliye <code>ok with { Value = 140 }</code> ek <b>toota hua</b> value object deta hai: 140.</li>\n<li><code>SafePercent</code> rule ko <code>init</code> accessor mein rakhta hai, jise constructor aur <code>with</code> dono use karte hain, isliye har raaste par galat (invalid) value reject hoti hai.</li>\n<li>Aakhri line dikhati hai ki value equality ab bhi chalti hai: do <code>Percent(40)</code> barabar hain.</li>\n<li>Sabak: jis value object ko valid rehna hai, use wahan validate karo jahan se har raasta guzre (init accessor), ya private constructor aur factory wali class use karo (struct ko <code>default</code> se hamesha banaya ja sakta hai, validation chhodkar). <code>with</code> wala raasta bhi test karo.</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Layers</b>: presentation → business → data, each calling the one below; the weak spot is that business depends on data access.",
      "<b>Dependency rule</b>: arrows point inward; the inner layer owns the port (<code>ITicketRepository</code>), the outer layer writes the adapter.",
      "<b>Clean layout</b>: Domain (nothing) ← Application ← Infrastructure ← Api; the Api is the composition root that wires adapters.",
      "<b>Rich entity</b>: identity (Id), private state and business methods that enforce invariants; anemic = only get/set.",
      "<b>Value object</b>: no identity, equal by all values, immutable, validated when created (<code>PhoneNumber</code>, <code>Money</code>).",
      "<b>Aggregate root</b>: the only door into a cluster; it enforces invariants, references other aggregates by Id, and records domain events.",
      "<b>Bounded context</b>: one model and one language per area; connect contexts with a small contract and a translator.",
      "<b>Modular monolith</b>: one deployable, modules with a small public contract; start there and extract a service only for a real need.",
      "The DbContext usually lives in Infrastructure, behind a port owned by the Application layer.",
      "A record gives value equality, but a List member inside it is still compared by reference.",
      "Domain events are past-tense facts; dispatch just before SaveChanges (atomic) or after it (eventual, use an outbox).",
      "Record hard-to-reverse choices in an ADR: context, decision, consequences."
    ],
    meaning: {
      hi: [
        "Layers: presentation → business → data, हर एक नीचे वाली को call करती है; कमज़ोर जगह: business, data access पर निर्भर है",
        "Dependency rule: तीर अंदर की तरफ़; port की मालिक अंदर की layer, adapter बाहर की layer लिखती है",
        "Clean layout: Domain (कोई नहीं) ← Application ← Infrastructure ← Api; Api composition root है जो adapters जोड़ता है",
        "Rich entity: पहचान (Id), private state और invariants लागू करने वाले business methods; anemic = सिर्फ़ get/set",
        "Value object: कोई पहचान नहीं, सारी values से बराबर, immutable, बनते समय validated (PhoneNumber, Money)",
        "Aggregate root: group का अकेला दरवाज़ा; invariants लागू करता है, दूसरे aggregates को Id से रखता है, domain events दर्ज करता है",
        "Bounded context: हर area का एक model और एक भाषा; contexts को छोटे contract और translator से जोड़ो",
        "Modular monolith: एक deployable, छोटे public contract वाले modules; वहीं से शुरू करो और असली ज़रूरत पर ही service निकालो",
        "DbContext आम तौर पर Infrastructure में रहता है, Application की मालिकी वाले port के पीछे।",
        "Record value equality देता है, पर उसके अंदर का List member अब भी reference से compare होता है।",
        "Domain events past के facts हैं; SaveChanges से ठीक पहले (atomic) या उसके बाद (eventual, outbox use करो) dispatch करो।",
        "पलटने में कठिन चुनाव ADR में दर्ज करो: context, decision, consequences।"
      ],
      hg: [
        "Layers: presentation → business → data, har ek neeche wali ko call karti hai; kamzor jagah: business, data access par nirbhar hai",
        "Dependency rule: teer andar ki taraf; port ki maalik andar ki layer, adapter bahar ki layer likhti hai",
        "Clean layout: Domain (koi nahi) ← Application ← Infrastructure ← Api; Api composition root hai jo adapters jodta hai",
        "Rich entity: pehchaan (Id), private state aur invariants laagu karne wale business methods; anemic = sirf get/set",
        "Value object: koi pehchaan nahi, saari values se barabar, immutable, bante samay validated (PhoneNumber, Money)",
        "Aggregate root: group ka akela darwaza; invariants laagu karta hai, doosre aggregates ko Id se rakhta hai, domain events darj karta hai",
        "Bounded context: har area ka ek model aur ek bhasha; contexts ko chhote contract aur translator se jodo",
        "Modular monolith: ek deployable, chhote public contract wale modules; wahin se shuru karo aur asli zaroorat par hi service nikalo",
        "DbContext aam taur par Infrastructure mein rehta hai, Application ki maalikat wale port ke peeche.",
        "Record value equality deta hai, par uske andar ka List member ab bhi reference se compare hota hai.",
        "Domain events past ke facts hain; SaveChanges se theek pehle (atomic) ya uske baad (eventual, outbox use karo) dispatch karo.",
        "Palatne mein kathin chunaav ADR mein darj karo: context, decision, consequences."
      ]
    }
  }
};
