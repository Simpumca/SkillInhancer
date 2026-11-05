// Day 10 — Structural + Behavioral Patterns, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 10,
  format: "lesson",
  title: {
    en: "Structural + Behavioral Patterns",
    hi: "Structural + Behavioral Patterns (जोड़ने और व्यवहार वाले patterns)",
    hg: "Structural + Behavioral Patterns (jodne aur vyavhaar wale patterns)"
  },
  summary: {
    en: "<p>Day 10 adds eight design patterns to the same <b>customer-care CRM</b>, in 8 short lessons. Four structural ones show how to fit and front objects: Adapter (a vendor SMS gateway behind <code>INotifier</code>), Facade (one <code>TicketDesk</code>), Decorator (logging and retry) and Proxy (a guarded, lazy customer lookup). Four behavioural ones show how objects cooperate: Strategy (SLA rules), Observer (ticket closed), Mediator (a support hub) and Chain of Responsibility (escalation).</p><p>Every lesson follows the same path: what it is, why you need it, an analogy, a complete program with its output, line-by-line notes, common mistakes, a small exercise and a quick quiz. The Deep Dive compares the look-alike patterns, shows decorating with DI, and gives the Tech Lead view of choosing and naming patterns.</p>",
    hi: "<p>Day 10 उसी <b>customer-care CRM</b> में 8 छोटे पाठों में आठ design patterns जोड़ता है। चार structural patterns बताते हैं कि objects को कैसे फ़िट करें और उनके आगे दरवाज़ा कैसे बनाएँ: Adapter (<code>INotifier</code> के पीछे vendor का SMS gateway), Facade (एक <code>TicketDesk</code>), Decorator (logging और retry) और Proxy (निगरानी वाला, lazy customer lookup)। चार behavioural patterns बताते हैं कि objects मिलकर कैसे काम करते हैं: Strategy (SLA rules), Observer (ticket बंद), Mediator (support hub) और Chain of Responsibility (escalation)।</p><p>हर पाठ एक ही क्रम में चलता है: यह क्या है, क्यों चाहिए, एक मिसाल, output के साथ पूरा program, लाइन-दर-लाइन समझ, आम ग़लतियाँ, एक छोटा exercise और एक झटपट quiz। Deep Dive में मिलते-जुलते patterns की तुलना है, DI के साथ decorate करना है, और patterns चुनने व उनका नाम लेने का Tech Lead नज़रिया है।</p>",
    hg: "<p>Day 10 usi <b>customer-care CRM</b> mein 8 chhote lessons mein aath design patterns jodta hai. Chaar structural patterns batate hain ki objects ko kaise fit karein aur unke aage darwaaza kaise banayein: Adapter (<code>INotifier</code> ke peeche vendor ka SMS gateway), Facade (ek <code>TicketDesk</code>), Decorator (logging aur retry) aur Proxy (nigraani wala, lazy customer lookup). Chaar behavioural patterns batate hain ki objects milkar kaise kaam karte hain: Strategy (SLA rules), Observer (ticket band), Mediator (support hub) aur Chain of Responsibility (escalation).</p><p>Har lesson ek hi kram mein chalta hai: ye kya hai, kyun chahiye, ek misaal, output ke saath poora program, line-by-line samajh, aam galtiyan, ek chhota exercise aur ek jhatpat quiz. Deep Dive mein milte-julte patterns ki tulna hai, DI ke saath decorate karna hai, aur patterns chunne va unka naam lene ka Tech Lead nazariya hai.</p>"
  },
  sections: [
    {
      id: "adapter",
      depth: "short",
      title: {
        en: "Adapter: wrap a vendor SMS API",
        hi: "Adapter: vendor के SMS API को लपेटो",
        hg: "Adapter: vendor ke SMS API ko lapeto"
      },
      lesson: {
        buildsOn: {
          en: "Day 1 gave the CRM <code>INotifier</code>, Day 8 said \"depend on the interface\" (DIP), and Day 9 showed factories that pick an implementation. Today the real SMS vendor arrives with an API that does not match <code>INotifier</code>. The Adapter makes it fit, so <code>TicketService</code> stays untouched.",
          hi: "Day 1 में CRM को <code>INotifier</code> मिला था, Day 8 ने कहा \"interface पर निर्भर रहो\" (DIP), और Day 9 में factories ने सही implementation चुनी। आज असली SMS vendor आता है जिसका API <code>INotifier</code> से मेल नहीं खाता। Adapter उसे फ़िट कर देता है, इसलिए <code>TicketService</code> को छूना नहीं पड़ता।",
          hg: "Day 1 mein CRM ko <code>INotifier</code> mila tha, Day 8 ne kaha \"interface par nirbhar raho\" (DIP), aur Day 9 mein factories ne sahi implementation chuni. Aaj asli SMS vendor aata hai jiska API <code>INotifier</code> se mel nahi khaata. Adapter use fit kar deta hai, isliye <code>TicketService</code> ko chhuna nahi padta."
        },
        what: {
          en: "<p>An <b>Adapter</b> is a small class that implements <b>your</b> interface and holds the <b>vendor</b> object. When your code calls it, the Adapter translates the call (names, parameter shapes, error codes) into the vendor call.</p><p>It is a <b>structural</b> pattern: it is about how classes are put together, not about creating or about behaviour.</p>",
          hi: "<p><b>Adapter</b> एक छोटी class है जो <b>आपका</b> interface implement करती है और अंदर <b>vendor</b> का object रखती है। आपका code उसे call करता है तो Adapter उसे vendor के call में बदल (translate) देता है — नाम, parameters का रूप, error codes।</p><p>यह <b>structural</b> pattern है: classes को आपस में कैसे जोड़ना है, इसके बारे में — object बनाने या behaviour के बारे में नहीं।</p>",
          hg: "<p><b>Adapter</b> ek chhoti class hai jo <b>aapka</b> interface implement karti hai aur andar <b>vendor</b> ka object rakhti hai. Aapka code use call karta hai to Adapter use vendor ke call mein badal (translate) deta hai — naam, parameters ka roop, error codes.</p><p>Ye <b>structural</b> pattern hai: classes ko aapas mein kaise jodna hai, iske baare mein — object banane ya behaviour ke baare mein nahi.</p>"
        },
        why: {
          en: "<p>You cannot edit the vendor class, and you should not spread its odd names across the CRM. With an Adapter, a vendor change or a vendor swap touches <b>one</b> class. Tests use a fake <code>INotifier</code> and never call the real gateway.</p>",
          hi: "<p>Vendor की class आप बदल नहीं सकते, और उसके अजीब नाम पूरे CRM में फैलाना भी ठीक नहीं। Adapter हो तो vendor बदलने या हटाने पर <b>एक</b> ही class बदलनी पड़ती है। Tests में fake <code>INotifier</code> चलता है, असली gateway को call ही नहीं करना पड़ता।</p>",
          hg: "<p>Vendor ki class aap badal nahi sakte, aur uske ajeeb naam poore CRM mein phailana bhi theek nahi. Adapter ho to vendor badalne ya hatane par <b>ek</b> hi class badalni padti hai. Tests mein fake <code>INotifier</code> chalta hai, asli gateway ko call hi nahi karna padta.</p>"
        },
        analogy: {
          en: "<p>A travel plug adapter. Your Indian charger and the foreign socket both stay exactly as they are. The adapter in between changes only the shape of the pins.</p>",
          hi: "<p>सफ़र वाला plug adapter। आपका भारतीय charger और विदेशी socket, दोनों जैसे हैं वैसे रहते हैं। बीच का adapter सिर्फ़ pins का आकार बदलता है।</p>",
          hg: "<p>Safar wala plug adapter. Aapka bhartiya charger aur videshi socket, dono jaise hain waise rehte hain. Beech ka adapter sirf pins ka aakaar badalta hai.</p>"
        },
        focus: {
          caption: {
            en: "Two shapes that do not match",
            hi: "दो आकार जो मेल नहीं खाते",
            hg: "Do aakaar jo mel nahi khaate"
          },
          src: "// What our CRM wants:      void Send(string to, string message)\n// What the vendor offers:  int Dispatch(string[] numbers, string payload, int priority)",
          check: "none"
        },
        lines: [
          {
            code: "INotifier notifier = new AcmeSmsAdapter(new AcmeSmsGateway());",
            note: {
              en: "The only line that knows the vendor exists. Everything below sees just <code>INotifier</code>.",
              hi: "सिर्फ़ यही line जानती है कि vendor है। इसके नीचे सब कुछ सिर्फ़ <code>INotifier</code> देखता है।",
              hg: "Sirf yahi line jaanti hai ki vendor hai. Iske neeche sab kuch sirf <code>INotifier</code> dekhta hai."
            }
          },
          {
            code: "public sealed class AcmeSmsAdapter : INotifier",
            note: {
              en: "The Adapter implements <b>our</b> interface, so it can go anywhere an <code>INotifier</code> is expected.",
              hi: "Adapter <b>हमारा</b> interface implement करता है, इसलिए जहाँ <code>INotifier</code> चाहिए वहाँ लग जाता है।",
              hg: "Adapter <b>hamara</b> interface implement karta hai, isliye jahan <code>INotifier</code> chahiye wahan lag jaata hai."
            }
          },
          {
            code: "var code = _gateway.Dispatch(new[] { to }, message, priority: 1);",
            note: {
              en: "The translation: one phone number becomes an array, and the Adapter chooses the vendor-specific priority.",
              hi: "Translation यहाँ होता है: एक phone number array बन जाता है, और vendor वाली priority Adapter तय करता है।",
              hg: "Translation yahan hota hai: ek phone number array ban jaata hai, aur vendor wali priority Adapter tay karta hai."
            }
          },
          {
            code: "if (code != 200) throw new InvalidOperationException($\"SMS failed with code {code}\");",
            note: {
              en: "Vendor error codes are translated too: our code sees an exception, not a magic number.",
              hi: "Vendor के error codes भी translate होते हैं: हमारा code जादुई number नहीं, exception देखता है।",
              hg: "Vendor ke error codes bhi translate hote hain: hamara code jaadui number nahi, exception dekhta hai."
            }
          },
          {
            code: "public void Resolve(int ticketId, string phone) => _notifier.Send(phone, $\"Ticket #{ticketId} is resolved\");",
            note: {
              en: "<code>TicketService</code> is exactly as in Day 1. It never learned that a vendor exists.",
              hi: "<code>TicketService</code> बिल्कुल Day 1 जैसा है। उसे पता ही नहीं चला कि कोई vendor आया।",
              hg: "<code>TicketService</code> bilkul Day 1 jaisa hai. Use pata hi nahi chala ki koi vendor aaya."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Adapting a class you own: just change it. Adapters are for code you cannot edit (vendor SDK, legacy code).</li><li>Letting vendor types leak out of the Adapter, for example returning the vendor response object from <code>Send</code>. Then the vendor is back inside your domain.</li><li>Putting business rules in the Adapter. It should only translate.</li></ul>",
          hi: "<ul><li>अपनी ही class को adapt करना: उसे सीधे बदल दो। Adapter उस code के लिए है जो आप बदल नहीं सकते (vendor SDK, पुराना code)।</li><li>Vendor के types को Adapter से बाहर निकलने देना, जैसे <code>Send</code> से vendor का response object लौटाना। तब vendor फिर आपके domain में घुस गया।</li><li>Adapter में business rules डालना। उसे सिर्फ़ translate करना चाहिए।</li></ul>",
          hg: "<ul><li>Apni hi class ko adapt karna: use seedhe badal do. Adapter us code ke liye hai jo aap badal nahi sakte (vendor SDK, purana code).</li><li>Vendor ke types ko Adapter se bahar nikalne dena, jaise <code>Send</code> se vendor ka response object lautana. Tab vendor phir aapke domain mein ghus gaya.</li><li>Adapter mein business rules daalna. Use sirf translate karna chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>At a boundary with code you cannot change: payment, SMS or cloud SDKs, a legacy library. Put the Adapter in the infrastructure layer, so a vendor change touches one class.</p>",
          hi: "<p>ऐसे code की सीमा (boundary) पर जिसे आप बदल नहीं सकते: payment, SMS या cloud SDKs, कोई पुरानी library। Adapter को infrastructure layer में रखो, ताकि vendor बदलने पर एक ही class बदले।</p>",
          hg: "<p>Aise code ki seema (boundary) par jise aap badal nahi sakte: payment, SMS ya cloud SDKs, koi purani library. Adapter ko infrastructure layer mein rakho, taaki vendor badalne par ek hi class badle.</p>"
        },
        exercise: {
          task: {
            en: "<p>A second vendor has <code>QuickSmsGateway</code> with <code>bool Push(string number, string text)</code> that prints <code>[quick] {number}: {text}</code>. Write <code>QuickSmsAdapter : INotifier</code> and use it with the same <code>TicketService</code>. Throw if <code>Push</code> returns false.</p>",
            hi: "<p>दूसरे vendor के पास <code>QuickSmsGateway</code> है जिसमें <code>bool Push(string number, string text)</code> है, जो <code>[quick] {number}: {text}</code> print करता है। <code>QuickSmsAdapter : INotifier</code> लिखो और उसे उसी <code>TicketService</code> के साथ चलाओ। <code>Push</code> false दे तो exception फेंको।</p>",
            hg: "<p>Doosre vendor ke paas <code>QuickSmsGateway</code> hai jismein <code>bool Push(string number, string text)</code> hai, jo <code>[quick] {number}: {text}</code> print karta hai. <code>QuickSmsAdapter : INotifier</code> likho aur use usi <code>TicketService</code> ke saath chalao. <code>Push</code> false de to exception phenko.</p>"
          },
          hint: {
            en: "<p>Copy <code>AcmeSmsAdapter</code>. The body of <code>Send</code> becomes one call to <code>Push</code> and an <code>if</code>. <code>TicketService</code> does not change.</p>",
            hi: "<p><code>AcmeSmsAdapter</code> को copy करो। <code>Send</code> की body में बस <code>Push</code> का एक call और एक <code>if</code> रहेगा। <code>TicketService</code> नहीं बदलेगी।</p>",
            hg: "<p><code>AcmeSmsAdapter</code> ko copy karo. <code>Send</code> ki body mein bas <code>Push</code> ka ek call aur ek <code>if</code> rahega. <code>TicketService</code> nahi badlegi.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a second adapter",
              hi: "हल: दूसरा adapter",
              hg: "Solution: doosra adapter"
            },
            src: "INotifier notifier = new QuickSmsAdapter(new QuickSmsGateway());\nvar service = new TicketService(notifier);\nservice.Resolve(501, \"98765\");\n\npublic interface INotifier\n{\n    void Send(string to, string message);\n}\n\npublic sealed class QuickSmsGateway\n{\n    public bool Push(string number, string text)\n    {\n        Console.WriteLine($\"[quick] {number}: {text}\");\n        return true;\n    }\n}\n\npublic sealed class QuickSmsAdapter : INotifier\n{\n    private readonly QuickSmsGateway _gateway;\n\n    public QuickSmsAdapter(QuickSmsGateway gateway) => _gateway = gateway;\n\n    public void Send(string to, string message)\n    {\n        if (!_gateway.Push(to, message)) throw new InvalidOperationException(\"SMS failed\");\n    }\n}\n\npublic sealed class TicketService\n{\n    private readonly INotifier _notifier;\n\n    public TicketService(INotifier notifier) => _notifier = notifier;\n\n    public void Resolve(int ticketId, string phone) => _notifier.Send(phone, $\"Ticket #{ticketId} is resolved\");\n}",
            check: "run",
            expected: "[quick] 98765: Ticket #501 is resolved"
          }
        },
        quiz: {
          q: {
            en: "The vendor renames <code>Dispatch</code> to <code>Deliver</code> in version 2. Which code must change?",
            hi: "Vendor version 2 में <code>Dispatch</code> का नाम <code>Deliver</code> कर देता है। कौन-सा code बदलना पड़ेगा?",
            hg: "Vendor version 2 mein <code>Dispatch</code> ka naam <code>Deliver</code> kar deta hai. Kaun sa code badalna padega?"
          },
          options: [
            {
              en: "<code>TicketService</code> and every other caller",
              hi: "<code>TicketService</code> और हर दूसरा caller",
              hg: "<code>TicketService</code> aur har doosra caller"
            },
            {
              en: "Only <code>AcmeSmsAdapter</code>",
              hi: "सिर्फ़ <code>AcmeSmsAdapter</code>",
              hg: "Sirf <code>AcmeSmsAdapter</code>"
            },
            {
              en: "The <code>INotifier</code> interface",
              hi: "<code>INotifier</code> का interface",
              hg: "<code>INotifier</code> interface"
            },
            {
              en: "Nothing, the compiler maps the new name",
              hi: "कुछ नहीं, compiler नया नाम खुद जोड़ लेगा",
              hg: "Kuch nahi, compiler naya naam khud jod lega"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The Adapter is the only class that mentions the vendor. Everything else depends on <code>INotifier</code>, which did not change.</p>",
            hi: "<p>Vendor का नाम सिर्फ़ Adapter में आता है। बाकी सब <code>INotifier</code> पर निर्भर है, जो बदला नहीं।</p>",
            hg: "<p>Vendor ka naam sirf Adapter mein aata hai. Baaki sab <code>INotifier</code> par nirbhar hai, jo badla nahi.</p>"
          }
        },
        recap: {
          en: "<ul><li>Adapter = implement your interface, hold the vendor object, translate calls and errors.</li><li>It changes the <b>interface</b>; it adds no behaviour.</li><li>Keep it at the boundary and keep vendor types inside it.</li></ul>",
          hi: "<ul><li>Adapter = अपना interface implement करो, vendor का object रखो, calls और errors translate करो।</li><li>यह <b>interface</b> बदलता है; कोई नया behaviour नहीं जोड़ता।</li><li>इसे boundary पर रखो और vendor के types इसके अंदर ही रखो।</li></ul>",
          hg: "<ul><li>Adapter = apna interface implement karo, vendor ka object rakho, calls aur errors translate karo.</li><li>Ye <b>interface</b> badalta hai; koi naya behaviour nahi jodta.</li><li>Ise boundary par rakho aur vendor ke types iske andar hi rakho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Adapter: INotifier on the outside, vendor gateway inside",
            hi: "Adapter: बाहर INotifier, अंदर vendor gateway",
            hg: "Adapter: bahar INotifier, andar vendor gateway"
          },
          src: "INotifier notifier = new AcmeSmsAdapter(new AcmeSmsGateway());\nvar service = new TicketService(notifier);\nservice.Resolve(501, \"98765\");\n\npublic interface INotifier\n{\n    void Send(string to, string message);\n}\n\n// Vendor class we cannot change: different names and shape.\npublic sealed class AcmeSmsGateway\n{\n    public int Dispatch(string[] numbers, string payload, int priority)\n    {\n        Console.WriteLine($\"[vendor] {numbers.Length} number(s), priority {priority}: {payload}\");\n        return 200;\n    }\n}\n\n// Adapter: implements OUR interface and translates to the vendor call.\npublic sealed class AcmeSmsAdapter : INotifier\n{\n    private readonly AcmeSmsGateway _gateway;\n\n    public AcmeSmsAdapter(AcmeSmsGateway gateway) => _gateway = gateway;\n\n    public void Send(string to, string message)\n    {\n        var code = _gateway.Dispatch(new[] { to }, message, priority: 1);\n        if (code != 200) throw new InvalidOperationException($\"SMS failed with code {code}\");\n    }\n}\n\npublic sealed class TicketService\n{\n    private readonly INotifier _notifier;\n\n    public TicketService(INotifier notifier) => _notifier = notifier;\n\n    public void Resolve(int ticketId, string phone) => _notifier.Send(phone, $\"Ticket #{ticketId} is resolved\");\n}",
          check: "run",
          expected: "[vendor] 1 number(s), priority 1: Ticket #501 is resolved"
        }
      ]
    },
    {
      id: "facade",
      depth: "short",
      title: {
        en: "Facade: one TicketDesk front",
        hi: "Facade: एक TicketDesk का सामने वाला दरवाज़ा",
        hg: "Facade: ek TicketDesk ka saamne wala darwaaza"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 hid one awkward vendor class behind <code>INotifier</code>. Now the ticket flow needs <i>several</i> parts in the right order: save the ticket, pick an agent, notify the customer. A Facade gives callers one method for all of it, and still uses the <code>INotifier</code> from lesson 1.",
          hi: "पाठ 1 में एक अजीब vendor class को <code>INotifier</code> के पीछे छुपाया था। अब ticket के काम में <i>कई</i> हिस्से सही क्रम में चाहिए: ticket save करो, agent चुनो, customer को बताओ। Facade इन सबके लिए caller को एक method देता है, और पाठ 1 वाला <code>INotifier</code> ही इस्तेमाल करता है।",
          hg: "Lesson 1 mein ek ajeeb vendor class ko <code>INotifier</code> ke peeche chhupaya tha. Ab ticket ke kaam mein <i>kai</i> hisse sahi kram mein chahiye: ticket save karo, agent chuno, customer ko batao. Facade in sabke liye caller ko ek method deta hai, aur lesson 1 wala <code>INotifier</code> hi use karta hai."
        },
        what: {
          en: "<p>A <b>Facade</b> is one class with a few simple methods that hides a longer sequence of calls over several subsystems. It designs a <b>new, simpler</b> interface. The subsystems stay public for the rare caller that needs full control.</p>",
          hi: "<p><b>Facade</b> एक class है जिसमें कुछ आसान methods होते हैं, और वह कई subsystems पर होने वाले लंबे calls के क्रम को छुपा लेती है। यह एक <b>नया, आसान</b> interface बनाती है। Subsystems public ही रहते हैं, ताकि जिसे पूरा control चाहिए वह उन्हें सीधे इस्तेमाल कर सके।</p>",
          hg: "<p><b>Facade</b> ek class hai jismein kuch aasaan methods hote hain, aur woh kai subsystems par hone wale lambe calls ke kram ko chhupa leti hai. Ye ek <b>naya, aasaan</b> interface banati hai. Subsystems public hi rehte hain, taaki jise poora control chahiye woh unhe seedhe use kar sake.</p>"
        },
        why: {
          en: "<p>Without a Facade, every controller repeats \"store, assign, notify\" and one of them will forget a step or get the order wrong. With <code>TicketDesk.Open</code>, the sequence lives in one place.</p>",
          hi: "<p>Facade के बिना हर controller \"store, assign, notify\" दोहराएगा, और कोई एक कोई step भूल जाएगा या क्रम ग़लत कर देगा। <code>TicketDesk.Open</code> होने पर यह क्रम एक ही जगह रहता है।</p>",
          hg: "<p>Facade ke bina har controller \"store, assign, notify\" dohraayega, aur koi ek koi step bhool jaayega ya kram galat kar dega. <code>TicketDesk.Open</code> hone par ye kram ek hi jagah rehta hai.</p>"
        },
        analogy: {
          en: "<p>The reception desk of a hotel. You say \"airport cab at 6\" once. Reception talks to the driver, the billing office and the front gate. You never call them yourself.</p>",
          hi: "<p>होटल का reception desk। आप एक बार कहते हो \"सुबह 6 बजे airport के लिए cab\"। Reception ड्राइवर, billing और गेट से बात कर लेता है। आप ख़ुद किसी को फ़ोन नहीं करते।</p>",
          hg: "<p>Hotel ka reception desk. Aap ek baar kehte ho \"subah 6 baje airport ke liye cab\". Reception driver, billing aur gate se baat kar leta hai. Aap khud kisi ko phone nahi karte.</p>"
        },
        lines: [
          {
            code: "Console.WriteLine(desk.Open(\"Asha\", \"98765\", \"Router down\"));",
            note: {
              en: "The caller makes <b>one</b> call. It does not know that a store, a roster and a notifier exist.",
              hi: "Caller <b>एक</b> ही call करता है। उसे पता नहीं कि store, roster और notifier भी हैं।",
              hg: "Caller <b>ek</b> hi call karta hai. Use pata nahi ki store, roster aur notifier bhi hain."
            }
          },
          {
            code: "public sealed class TicketDesk",
            note: {
              en: "The Facade. It <b>coordinates</b> the subsystems; it does not own business rules.",
              hi: "यह Facade है। यह subsystems को <b>coordinate</b> करती है; business rules इसके पास नहीं हैं।",
              hg: "Ye Facade hai. Ye subsystems ko <b>coordinate</b> karti hai; business rules iske paas nahi hain."
            }
          },
          {
            code: "var id = _store.Add(customer, issue);",
            note: {
              en: "Step 1 of the sequence. The order is fixed here: the id is needed by the next steps.",
              hi: "क्रम का पहला step। क्रम यहीं तय है: अगले steps को id चाहिए।",
              hg: "Kram ka pehla step. Kram yahin tay hai: agle steps ko id chahiye."
            }
          },
          {
            code: "_notifier.Send(phone, $\"Ticket #{id} opened, agent {agent}\");",
            note: {
              en: "The Facade depends on <code>INotifier</code> from lesson 1, so SMS or an Adapter can be plugged in.",
              hi: "Facade पाठ 1 वाले <code>INotifier</code> पर निर्भर है, इसलिए SMS या कोई Adapter लगाया जा सकता है।",
              hg: "Facade lesson 1 wale <code>INotifier</code> par nirbhar hai, isliye SMS ya koi Adapter lagaya ja sakta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>A Facade that grows into a <b>god class</b> with business rules (discounts, SLA, validation). A Facade should coordinate, not decide.</li><li>A Facade over a single class: that is just an extra layer.</li><li>Hiding the subsystems completely, so power users cannot reach them.</li></ul>",
          hi: "<ul><li>Facade का <b>god class</b> बन जाना जिसमें business rules (discount, SLA, validation) भर जाएँ। Facade का काम coordinate करना है, फ़ैसले लेना नहीं।</li><li>सिर्फ़ एक class के ऊपर Facade: यह बस एक फ़ालतू परत है।</li><li>Subsystems को पूरी तरह छुपा देना, ताकि ज़रूरत पड़ने पर कोई उन तक पहुँच न सके।</li></ul>",
          hg: "<ul><li>Facade ka <b>god class</b> ban jaana jismein business rules (discount, SLA, validation) bhar jaayein. Facade ka kaam coordinate karna hai, faisle lena nahi.</li><li>Sirf ek class ke upar Facade: ye bas ek faltu parat hai.</li><li>Subsystems ko poori tarah chhupa dena, taaki zaroorat padne par koi un tak pahunch na sake.</li></ul>"
        },
        whenToUse: {
          en: "<p>When callers keep repeating the same multi-step sequence: \"open a ticket\", \"place an order\", \"onboard a customer\". Application services in a Web API are often Facades.</p>",
          hi: "<p>जब callers बार-बार वही कई-step वाला क्रम दोहराते हैं: \"ticket खोलो\", \"order दो\", \"customer onboard करो\"। Web API की application services अक्सर Facades ही होती हैं।</p>",
          hg: "<p>Jab callers baar-baar wahi kai-step wala kram dohraate hain: \"ticket kholo\", \"order do\", \"customer onboard karo\". Web API ki application services aksar Facades hi hoti hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add <code>Close(int ticketId, string phone)</code> to <code>TicketDesk</code>. It should send <code>Ticket #{id} closed</code> to the phone and return <code>Ticket #{id} closed</code>. Call it for ticket 501.</p>",
            hi: "<p><code>TicketDesk</code> में <code>Close(int ticketId, string phone)</code> जोड़ो। वह phone पर <code>Ticket #{id} closed</code> भेजे और वही text return करे। उसे ticket 501 के लिए call करो।</p>",
            hg: "<p><code>TicketDesk</code> mein <code>Close(int ticketId, string phone)</code> jodo. Woh phone par <code>Ticket #{id} closed</code> bheje aur wahi text return kare. Use ticket 501 ke liye call karo.</p>"
          },
          hint: {
            en: "<p>You only need the notifier for this method. The store and the roster are not involved.</p>",
            hi: "<p>इस method में सिर्फ़ notifier चाहिए। store और roster की ज़रूरत नहीं।</p>",
            hg: "<p>Is method mein sirf notifier chahiye. store aur roster ki zaroorat nahi.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a second Facade method",
              hi: "हल: Facade का दूसरा method",
              hg: "Solution: Facade ka doosra method"
            },
            src: "var desk = new TicketDesk(new SmsNotifier());\nConsole.WriteLine(desk.Close(501, \"98765\"));\n\npublic interface INotifier\n{\n    void Send(string to, string message);\n}\n\npublic sealed class SmsNotifier : INotifier\n{\n    public void Send(string to, string message) => Console.WriteLine($\"SMS to {to}: {message}\");\n}\n\npublic sealed class TicketDesk\n{\n    private readonly INotifier _notifier;\n\n    public TicketDesk(INotifier notifier) => _notifier = notifier;\n\n    public string Close(int ticketId, string phone)\n    {\n        var text = $\"Ticket #{ticketId} closed\";\n        _notifier.Send(phone, text);\n        return text;\n    }\n}",
            check: "run",
            expected: "SMS to 98765: Ticket #501 closed\nTicket #501 closed"
          }
        },
        quiz: {
          q: {
            en: "Which statement describes a Facade?",
            hi: "इनमें से कौन-सा कथन Facade का है?",
            hg: "Inmein se kaun sa kathan Facade ka hai?"
          },
          options: [
            {
              en: "It converts a vendor interface into the interface my code expects",
              hi: "यह vendor के interface को उस interface में बदलता है जो मेरा code चाहता है",
              hg: "Ye vendor ke interface ko us interface mein badalta hai jo mera code chahta hai"
            },
            {
              en: "It wraps one object and adds logging with the same interface",
              hi: "यह एक object को लपेटकर उसी interface में logging जोड़ता है",
              hg: "Ye ek object ko lapetkar usi interface mein logging jodta hai"
            },
            {
              en: "It creates the real object only when it is first needed",
              hi: "यह असली object तभी बनाता है जब पहली बार चाहिए",
              hg: "Ye asli object tabhi banata hai jab pehli baar chahiye"
            },
            {
              en: "It offers a new, simpler method over several subsystems",
              hi: "यह कई subsystems के ऊपर एक नया, आसान method देता है",
              hg: "Ye kai subsystems ke upar ek naya, aasaan method deta hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>The first option is Adapter, the second is Decorator, the third is a lazy Proxy. A Facade designs a simpler front for many parts.</p>",
            hi: "<p>पहला विकल्प Adapter है, दूसरा Decorator, तीसरा lazy Proxy। Facade कई हिस्सों के लिए एक आसान front बनाता है।</p>",
            hg: "<p>Pehla vikalp Adapter hai, doosra Decorator, teesra lazy Proxy. Facade kai hisson ke liye ek aasaan front banata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Facade = one simple method over a sequence of subsystem calls.</li><li>It makes a <b>new</b> interface (Adapter fits a <b>given</b> one).</li><li>Coordinate, do not decide: keep business rules out.</li></ul>",
          hi: "<ul><li>Facade = subsystem calls के क्रम पर एक आसान method।</li><li>यह <b>नया</b> interface बनाता है (Adapter किसी <b>दिए हुए</b> interface में फ़िट करता है)।</li><li>Coordinate करो, फ़ैसले मत लो: business rules बाहर रखो।</li></ul>",
          hg: "<ul><li>Facade = subsystem calls ke kram par ek aasaan method.</li><li>Ye <b>naya</b> interface banata hai (Adapter kisi <b>diye hue</b> interface mein fit karta hai).</li><li>Coordinate karo, faisle mat lo: business rules bahar rakho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Facade: one Open method over three subsystems",
            hi: "Facade: तीन subsystems के ऊपर एक Open method",
            hg: "Facade: teen subsystems ke upar ek Open method"
          },
          src: "var desk = new TicketDesk(new TicketStore(), new AgentRoster(), new SmsNotifier());\nConsole.WriteLine(desk.Open(\"Asha\", \"98765\", \"Router down\"));\nConsole.WriteLine(desk.Open(\"Ravi\", \"91234\", \"Bill is wrong\"));\n\npublic interface INotifier\n{\n    void Send(string to, string message);\n}\n\npublic sealed class SmsNotifier : INotifier\n{\n    public void Send(string to, string message) => Console.WriteLine($\"SMS to {to}: {message}\");\n}\n\npublic sealed class TicketStore\n{\n    private int _nextId = 501;\n\n    public int Add(string customer, string issue)\n    {\n        Console.WriteLine($\"store: {customer} - {issue}\");\n        return _nextId++;\n    }\n}\n\npublic sealed class AgentRoster\n{\n    private readonly string[] _agents = { \"Meena\", \"Kiran\" };\n    private int _turn;\n\n    public string Next() => _agents[_turn++ % _agents.Length];\n}\n\n// Facade: callers use Open; only the Facade knows the order of the steps.\npublic sealed class TicketDesk\n{\n    private readonly TicketStore _store;\n    private readonly AgentRoster _roster;\n    private readonly INotifier _notifier;\n\n    public TicketDesk(TicketStore store, AgentRoster roster, INotifier notifier)\n        => (_store, _roster, _notifier) = (store, roster, notifier);\n\n    public string Open(string customer, string phone, string issue)\n    {\n        var id = _store.Add(customer, issue);\n        var agent = _roster.Next();\n        _notifier.Send(phone, $\"Ticket #{id} opened, agent {agent}\");\n        return $\"Ticket #{id} -> {agent}\";\n    }\n}",
          check: "run",
          expected: "store: Asha - Router down\nSMS to 98765: Ticket #501 opened, agent Meena\nTicket #501 -> Meena\nstore: Ravi - Bill is wrong\nSMS to 91234: Ticket #502 opened, agent Kiran\nTicket #502 -> Kiran"
        }
      ]
    },
    {
      id: "decorator",
      depth: "short",
      title: {
        en: "Decorator: add logging and retry",
        hi: "Decorator: logging और retry जोड़ो",
        hg: "Decorator: logging aur retry jodo"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 2's <code>TicketDesk</code> sends SMS through <code>INotifier</code>, and a real gateway sometimes times out. We want logging and retry <i>around</i> the notifier without opening it. A Decorator implements the same <code>INotifier</code>, so <code>TicketDesk</code> cannot tell the difference.",
          hi: "पाठ 2 का <code>TicketDesk</code> <code>INotifier</code> से SMS भेजता है, और असली gateway कभी-कभी timeout हो जाता है। हमें notifier को खोले बिना उसके <i>चारों ओर</i> logging और retry चाहिए। Decorator वही <code>INotifier</code> implement करता है, इसलिए <code>TicketDesk</code> को फ़र्क़ पता नहीं चलता।",
          hg: "Lesson 2 ka <code>TicketDesk</code> <code>INotifier</code> se SMS bhejta hai, aur asli gateway kabhi-kabhi timeout ho jaata hai. Humein notifier ko khole bina uske <i>chaaron or</i> logging aur retry chahiye. Decorator wahi <code>INotifier</code> implement karta hai, isliye <code>TicketDesk</code> ko farq pata nahi chalta."
        },
        what: {
          en: "<p>A <b>Decorator</b> implements an interface <b>and</b> holds another object of the same interface. It does its own extra work, then calls the inner object. Because the shape is the same, decorators can be stacked like layers.</p>",
          hi: "<p><b>Decorator</b> एक interface implement करता है <b>और</b> उसी interface का दूसरा object अंदर रखता है। वह अपना extra काम करता है, फिर अंदर वाले को call करता है। आकार एक जैसा है, इसलिए decorators को परतों की तरह एक के ऊपर एक लगाया जा सकता है।</p>",
          hg: "<p><b>Decorator</b> ek interface implement karta hai <b>aur</b> usi interface ka doosra object andar rakhta hai. Woh apna extra kaam karta hai, phir andar wale ko call karta hai. Aakaar ek jaisa hai, isliye decorators ko parton ki tarah ek ke upar ek lagaya ja sakta hai.</p>"
        },
        why: {
          en: "<p>Logging and retry are cross-cutting: every notifier needs them, but they are not the notifier's job. Written as decorators, the SMS class stays small (SRP) and you can switch each layer on or off (OCP). Subclassing would give you <code>LoggingRetrySmsNotifier</code> and a new class for every combination.</p>",
          hi: "<p>Logging और retry हर notifier को चाहिए, पर वे notifier का असली काम नहीं हैं। Decorators के रूप में SMS class छोटी रहती है (SRP) और हर परत को चालू/बंद किया जा सकता है (OCP)। Subclass बनाओगे तो <code>LoggingRetrySmsNotifier</code> जैसी और हर combination के लिए नई class बनेगी।</p>",
          hg: "<p>Logging aur retry har notifier ko chahiye, par woh notifier ka asli kaam nahi hain. Decorators ke roop mein SMS class chhoti rehti hai (SRP) aur har parat ko chalu/band kiya ja sakta hai (OCP). Subclass banaoge to <code>LoggingRetrySmsNotifier</code> jaisi aur har combination ke liye nayi class banegi.</p>"
        },
        analogy: {
          en: "<p>A samosa wrapped in a napkin, then a paper bag, then a delivery box. Each layer adds something, and it is still your samosa.</p>",
          hi: "<p>समोसा पहले napkin में, फिर काग़ज़ के थैले में, फिर delivery box में। हर परत कुछ जोड़ती है, और अंदर समोसा वही रहता है।</p>",
          hg: "<p>Samosa pehle napkin mein, phir kaagaz ke thaile mein, phir delivery box mein. Har parat kuch jodti hai, aur andar samosa wahi rehta hai.</p>"
        },
        lines: [
          {
            code: "INotifier notifier = new LoggingNotifier(new RetryNotifier(new FlakySmsNotifier(), attempts: 3));",
            note: {
              en: "The layers are stacked here. The outermost one (logging) runs first on the way in.",
              hi: "परतें यहाँ लगती हैं। सबसे बाहरी (logging) अंदर जाते समय सबसे पहले चलती है।",
              hg: "Partein yahan lagti hain. Sabse bahari (logging) andar jaate samay sabse pehle chalti hai."
            }
          },
          {
            code: "if (_calls == 1) throw new TimeoutException(\"gateway timeout\");",
            note: {
              en: "A stand-in for a real network failure. Only the first call fails, so the output stays the same on every run.",
              hi: "असली network failure की जगह यह नकली failure है। सिर्फ़ पहला call fail होता है, इसलिए हर बार output एक जैसा आता है।",
              hg: "Asli network failure ki jagah ye nakli failure hai. Sirf pehla call fail hota hai, isliye har baar output ek jaisa aata hai."
            }
          },
          {
            code: "public RetryNotifier(INotifier inner, int attempts) => (_inner, _attempts) = (inner, attempts);",
            note: {
              en: "A decorator <b>receives</b> the inner <code>INotifier</code> in its constructor. It does not create it.",
              hi: "Decorator अंदर वाला <code>INotifier</code> constructor में <b>पाता</b> है। उसे ख़ुद नहीं बनाता।",
              hg: "Decorator andar wala <code>INotifier</code> constructor mein <b>paata</b> hai. Use khud nahi banata."
            }
          },
          {
            code: "catch (TimeoutException) when (attempt < _attempts)",
            note: {
              en: "Retry only for the failure we expect, and only while attempts remain. On the last attempt the exception goes up.",
              hi: "Retry सिर्फ़ उसी failure पर जिसकी उम्मीद है, और सिर्फ़ जब तक attempts बचे हों। आख़िरी attempt पर exception ऊपर चला जाता है।",
              hg: "Retry sirf usi failure par jiski ummeed hai, aur sirf jab tak attempts bache hon. Aakhiri attempt par exception upar chala jaata hai."
            }
          },
          {
            code: "_inner.Send(to, message);",
            note: {
              en: "Every decorator ends up calling the inner object. This is the line that keeps the chain of layers connected.",
              hi: "हर decorator आख़िर में अंदर वाले object को call करता है। यही line परतों की कड़ी जोड़े रखती है।",
              hg: "Har decorator aakhir mein andar wale object ko call karta hai. Yahi line parton ki kadi jode rakhti hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Forgetting to call the inner object, so the decorator silently swallows the work.</li><li>Ignoring the <b>order</b>: retry outside logging logs every attempt, retry inside logs once.</li><li>A decorator that changes meaning, for example returning different data. A decorator adds around; it should not change what the inner object promises.</li></ul>",
          hi: "<ul><li>अंदर वाले object को call करना भूल जाना, जिससे decorator चुपचाप काम निगल जाता है।</li><li><b>क्रम</b> को अनदेखा करना: retry को logging के बाहर रखो तो हर attempt log होता है, अंदर रखो तो एक बार।</li><li>ऐसा decorator जो मतलब बदल दे, जैसे अलग data लौटाए। Decorator आसपास जोड़ता है; अंदर वाले का वादा नहीं बदलना चाहिए।</li></ul>",
          hg: "<ul><li>Andar wale object ko call karna bhool jaana, jisse decorator chupchaap kaam nigal jaata hai.</li><li><b>Kram</b> ko andekha karna: retry ko logging ke bahar rakho to har attempt log hota hai, andar rakho to ek baar.</li><li>Aisa decorator jo matlab badal de, jaise alag data lautaye. Decorator aaspaas jodta hai; andar wale ka vaada nahi badalna chahiye.</li></ul>"
        },
        whenToUse: {
          en: "<p>For optional cross-cutting behaviour that you want to combine: logging, caching, retry, metrics, validation. Do not stack five layers for one concern.</p>",
          hi: "<p>ऐसे optional cross-cutting behaviour के लिए जिन्हें मिलाना हो: logging, caching, retry, metrics, validation। एक काम के लिए पाँच परतें मत लगाओ।</p>",
          hg: "<p>Aise optional cross-cutting behaviour ke liye jinhe milana ho: logging, caching, retry, metrics, validation. Ek kaam ke liye paanch parten mat lagao.</p>"
        },
        exercise: {
          task: {
            en: "<p>Write <code>MaskingNotifier : INotifier</code> that hides all but the last two digits of the phone number (<code>98765</code> becomes <code>***65</code>) and then calls the inner notifier. Wrap an <code>SmsNotifier</code> with it.</p>",
            hi: "<p><code>MaskingNotifier : INotifier</code> लिखो जो phone number के आख़िरी दो अंकों के अलावा सब छुपा दे (<code>98765</code> बने <code>***65</code>) और फिर अंदर वाले notifier को call करे। उससे एक <code>SmsNotifier</code> को लपेटो।</p>",
            hg: "<p><code>MaskingNotifier : INotifier</code> likho jo phone number ke aakhiri do ankon ke alawa sab chhupa de (<code>98765</code> bane <code>***65</code>) aur phir andar wale notifier ko call kare. Usse ek <code>SmsNotifier</code> ko lapeto.</p>"
          },
          hint: {
            en: "<p><code>new string('*', to.Length - 2) + to[^2..]</code> builds the masked text.</p>",
            hi: "<p><code>new string('*', to.Length - 2) + to[^2..]</code> से masked text बनता है।</p>",
            hg: "<p><code>new string('*', to.Length - 2) + to[^2..]</code> se masked text banta hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a masking decorator",
              hi: "हल: masking decorator",
              hg: "Solution: masking decorator"
            },
            src: "INotifier notifier = new MaskingNotifier(new SmsNotifier());\nnotifier.Send(\"98765\", \"Ticket #501 is resolved\");\n\npublic interface INotifier\n{\n    void Send(string to, string message);\n}\n\npublic sealed class SmsNotifier : INotifier\n{\n    public void Send(string to, string message) => Console.WriteLine($\"SMS to {to}: {message}\");\n}\n\npublic sealed class MaskingNotifier : INotifier\n{\n    private readonly INotifier _inner;\n\n    public MaskingNotifier(INotifier inner) => _inner = inner;\n\n    public void Send(string to, string message)\n    {\n        var masked = new string('*', to.Length - 2) + to[^2..];\n        _inner.Send(masked, message);\n    }\n}",
            check: "run",
            expected: "SMS to ***65: Ticket #501 is resolved"
          }
        },
        quiz: {
          q: {
            en: "You swap the order: <code>new RetryNotifier(new LoggingNotifier(new FlakySmsNotifier()), 3)</code>. How many <code>log: sending</code> lines appear?",
            hi: "आप क्रम बदल देते हो: <code>new RetryNotifier(new LoggingNotifier(new FlakySmsNotifier()), 3)</code>। <code>log: sending</code> वाली कितनी lines आएँगी?",
            hg: "Aap kram badal dete ho: <code>new RetryNotifier(new LoggingNotifier(new FlakySmsNotifier()), 3)</code>. <code>log: sending</code> wali kitni lines aayengi?"
          },
          options: [
            {
              en: "Two",
              hi: "दो",
              hg: "Do"
            },
            {
              en: "One",
              hi: "एक",
              hg: "Ek"
            },
            {
              en: "Three",
              hi: "तीन",
              hg: "Teen"
            },
            {
              en: "None",
              hi: "कोई नहीं",
              hg: "Koi nahi"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Now retry is the outer layer. Attempt 1 goes through logging (one line) and fails; attempt 2 goes through logging again (second line) and succeeds. Order changes the behaviour.</p>",
            hi: "<p>अब retry बाहरी परत है। Attempt 1 logging से गुज़रता है (एक line) और fail होता है; attempt 2 फिर logging से गुज़रता है (दूसरी line) और सफल होता है। क्रम से behaviour बदल जाता है।</p>",
            hg: "<p>Ab retry bahari parat hai. Attempt 1 logging se guzarta hai (ek line) aur fail hota hai; attempt 2 phir logging se guzarta hai (doosri line) aur safal hota hai. Kram se behaviour badal jaata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Decorator = same interface in and out, plus a reference to the inner object.</li><li>Layers stack and <b>order matters</b>.</li><li>Add behaviour around, never change what the inner object promises.</li></ul>",
          hi: "<ul><li>Decorator = अंदर-बाहर वही interface, और अंदर वाले object का reference।</li><li>परतें एक के ऊपर एक लगती हैं और <b>क्रम मायने रखता है</b>।</li><li>आसपास behaviour जोड़ो, अंदर वाले का वादा मत बदलो।</li></ul>",
          hg: "<ul><li>Decorator = andar-bahar wahi interface, aur andar wale object ka reference.</li><li>Parten ek ke upar ek lagti hain aur <b>kram maayne rakhta hai</b>.</li><li>Aaspaas behaviour jodo, andar wale ka vaada mat badlo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Logging around retry around the flaky SMS notifier",
            hi: "Flaky SMS notifier के चारों ओर retry, उसके चारों ओर logging",
            hg: "Flaky SMS notifier ke chaaron or retry, uske chaaron or logging"
          },
          src: "INotifier notifier = new LoggingNotifier(new RetryNotifier(new FlakySmsNotifier(), attempts: 3));\nnotifier.Send(\"98765\", \"Ticket #501 is resolved\");\n\npublic interface INotifier\n{\n    void Send(string to, string message);\n}\n\n// The real notifier: fails on the first call, like a bad network.\npublic sealed class FlakySmsNotifier : INotifier\n{\n    private int _calls;\n\n    public void Send(string to, string message)\n    {\n        _calls++;\n        if (_calls == 1) throw new TimeoutException(\"gateway timeout\");\n        Console.WriteLine($\"SMS to {to}: {message}\");\n    }\n}\n\npublic sealed class RetryNotifier : INotifier\n{\n    private readonly INotifier _inner;\n    private readonly int _attempts;\n\n    public RetryNotifier(INotifier inner, int attempts) => (_inner, _attempts) = (inner, attempts);\n\n    public void Send(string to, string message)\n    {\n        for (var attempt = 1; ; attempt++)\n        {\n            try\n            {\n                _inner.Send(to, message);\n                return;\n            }\n            catch (TimeoutException) when (attempt < _attempts)\n            {\n                Console.WriteLine($\"retry: attempt {attempt} failed\");\n            }\n        }\n    }\n}\n\npublic sealed class LoggingNotifier : INotifier\n{\n    private readonly INotifier _inner;\n\n    public LoggingNotifier(INotifier inner) => _inner = inner;\n\n    public void Send(string to, string message)\n    {\n        Console.WriteLine($\"log: sending to {to}\");\n        _inner.Send(to, message);\n        Console.WriteLine(\"log: sent\");\n    }\n}",
          check: "run",
          expected: "log: sending to 98765\nretry: attempt 1 failed\nSMS to 98765: Ticket #501 is resolved\nlog: sent"
        }
      ]
    },
    {
      id: "proxy",
      depth: "short",
      title: {
        en: "Proxy: guard and delay the customer lookup",
        hi: "Proxy: customer lookup की निगरानी और देरी",
        hg: "Proxy: customer lookup ki nigraani aur deri"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 added behaviour around a notifier. A Proxy also keeps the same interface, but its purpose is different: it decides <i>whether</i> and <i>when</i> the real object is used. Here the thing is a slow customer lookup that only agents may use.",
          hi: "पाठ 3 में notifier के चारों ओर behaviour जोड़ा था। Proxy भी वही interface रखता है, पर उसका मक़सद अलग है: वह तय करता है कि असली object <i>इस्तेमाल हो या नहीं</i> और <i>कब</i>। यहाँ चीज़ है एक धीमा customer lookup, जिसे सिर्फ़ agents चला सकते हैं।",
          hg: "Lesson 3 mein notifier ke chaaron or behaviour joda tha. Proxy bhi wahi interface rakhta hai, par uska maqsad alag hai: woh tay karta hai ki asli object <i>istemaal ho ya nahi</i> aur <i>kab</i>. Yahan cheez hai ek dheema customer lookup, jise sirf agents chala sakte hain."
        },
        what: {
          en: "<p>A <b>Proxy</b> is a stand-in with the <b>same interface</b> as the real object. Callers use the proxy as if it were the real one; the proxy controls access. Common kinds: <b>protection</b> (check permission), <b>lazy</b> (create the real object only when needed), <b>caching</b> and <b>remote</b> (look local, call over a network).</p>",
          hi: "<p><b>Proxy</b> असली object का वही <b>interface</b> रखने वाला एक stand-in है, यानी असली की जगह खड़ा object। Caller उसे असली जैसा इस्तेमाल करता है; Proxy पहुँच (access) को control करता है। आम किस्में: <b>protection</b> (permission जाँचो), <b>lazy</b> (असली object तभी बनाओ जब चाहिए), <b>caching</b> और <b>remote</b> (दिखे local, call जाए network पर)।</p>",
          hg: "<p><b>Proxy</b> asli object ka wahi <b>interface</b> rakhne wala ek stand-in hai, yaani asli ki jagah khada object. Caller use asli jaisa istemaal karta hai; Proxy pahunch (access) ko control karta hai. Aam kismein: <b>protection</b> (permission jaancho), <b>lazy</b> (asli object tabhi banao jab chahiye), <b>caching</b> aur <b>remote</b> (dikhe local, call jaaye network par).</p>"
        },
        why: {
          en: "<p>Connecting to the CRM database is expensive, and a guest must not read customer data at all. The proxy checks the role first and creates the real lookup only for the first allowed call. Callers stay simple: they just call <code>Find</code>.</p>",
          hi: "<p>CRM database से जुड़ना महँगा है, और guest को customer data पढ़ना ही नहीं चाहिए। Proxy पहले role जाँचता है और असली lookup सिर्फ़ पहले allowed call पर बनाता है। Callers सीधे रहते हैं: बस <code>Find</code> call करो।</p>",
          hg: "<p>CRM database se judna mehnga hai, aur guest ko customer data padhna hi nahi chahiye. Proxy pehle role jaanchta hai aur asli lookup sirf pehle allowed call par banata hai. Callers seedhe rehte hain: bas <code>Find</code> call karo.</p>"
        },
        analogy: {
          en: "<p>The gate guard of a housing society. Same entrance for everyone, but he decides who may go in, and he calls the lift only when someone actually enters.</p>",
          hi: "<p>सोसाइटी का गेट वाला गार्ड। दरवाज़ा सबके लिए वही है, पर कौन अंदर जाएगा यह वह तय करता है, और lift भी तभी बुलाता है जब कोई सच में अंदर जाए।</p>",
          hg: "<p>Society ka gate wala guard. Darwaaza sabke liye wahi hai, par kaun andar jaayega ye woh tay karta hai, aur lift bhi tabhi bulata hai jab koi sach mein andar jaaye.</p>"
        },
        lines: [
          {
            code: "ICustomerLookup guest = new CustomerLookupProxy(\"Guest\");",
            note: {
              en: "The caller holds an <code>ICustomerLookup</code>. It cannot tell whether it is the proxy or the real object.",
              hi: "Caller के पास <code>ICustomerLookup</code> है। वह नहीं बता सकता कि यह proxy है या असली object।",
              hg: "Caller ke paas <code>ICustomerLookup</code> hai. Woh nahi bata sakta ki ye proxy hai ya asli object."
            }
          },
          {
            code: "private CrmDatabaseLookup? _real;",
            note: {
              en: "The proxy starts with <b>no</b> real object. It <b>manages</b> the real object's life, which is how a proxy differs from a decorator that is handed its inner object.",
              hi: "Proxy शुरू में <b>बिना</b> असली object के होता है। वह असली object का जीवन <b>संभालता</b> है — decorator को अंदर वाला object दिया जाता है, Proxy में ऐसा नहीं।",
              hg: "Proxy shuru mein <b>bina</b> asli object ke hota hai. Woh asli object ka jeevan <b>sambhalta</b> hai — decorator ko andar wala object diya jaata hai, Proxy mein aisa nahi."
            }
          },
          {
            code: "if (_role != \"Agent\") return \"access denied\";",
            note: {
              en: "Protection: a guest never reaches the database, and the slow object is never built for a guest.",
              hi: "Protection: guest कभी database तक नहीं पहुँचता, और guest के लिए धीमा object बनता ही नहीं।",
              hg: "Protection: guest kabhi database tak nahi pahunchta, aur guest ke liye dheema object banta hi nahi."
            }
          },
          {
            code: "_real ??= new CrmDatabaseLookup();",
            note: {
              en: "Lazy creation: build it on the first allowed call, reuse it after that. The output shows one \"connecting\" line for two lookups.",
              hi: "Lazy creation: पहले allowed call पर बनाओ, उसके बाद वही इस्तेमाल करो। दो lookups पर output में \"connecting\" की सिर्फ़ एक line है।",
              hg: "Lazy creation: pehle allowed call par banao, uske baad wahi istemaal karo. Do lookups par output mein \"connecting\" ki sirf ek line hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Mixing it up with a Decorator. Ask what the wrapper is for: adding a feature (Decorator) or controlling access to the object (Proxy).</li><li>Doing real business work inside the proxy. It should only guard, delay or forward.</li><li>Lazy creation without thinking about threads: <code>??=</code> is not thread-safe. Use <code>Lazy&lt;T&gt;</code> when several threads can call it.</li></ul>",
          hi: "<ul><li>Decorator से गड़बड़ा जाना। पूछो कि wrapper किसलिए है: कोई feature जोड़ने के लिए (Decorator) या object तक पहुँच control करने के लिए (Proxy)।</li><li>Proxy के अंदर असली business काम करना। उसे सिर्फ़ रोकना, देर करना या आगे भेजना चाहिए।</li><li>Threads के बारे में सोचे बिना lazy creation: <code>??=</code> thread-safe नहीं है। कई threads call कर सकते हों तो <code>Lazy&lt;T&gt;</code> इस्तेमाल करो।</li></ul>",
          hg: "<ul><li>Decorator se gadbada jaana. Poocho ki wrapper kisliye hai: koi feature jodne ke liye (Decorator) ya object tak pahunch control karne ke liye (Proxy).</li><li>Proxy ke andar asli business kaam karna. Use sirf rokna, der karna ya aage bhejna chahiye.</li><li>Threads ke baare mein soche bina lazy creation: <code>??=</code> thread-safe nahi hai. Kai threads call kar sakte hon to <code>Lazy&lt;T&gt;</code> istemaal karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>When the object is expensive to create, must be protected, or lives somewhere remote. You already meet proxies in .NET: EF Core lazy-loading proxies (Day 5) are generated subclasses of your entity.</p>",
          hi: "<p>जब object बनाना महँगा हो, उसे सुरक्षा चाहिए, या वह कहीं दूर (remote) रहता हो। .NET में आप proxies पहले से देखते हैं: EF Core के lazy-loading proxies (Day 5) आपकी entity की ही बनाई हुई subclasses हैं।</p>",
          hg: "<p>Jab object banana mehnga ho, use suraksha chahiye, ya woh kahin door (remote) rehta ho. .NET mein aap proxies pehle se dekhte hain: EF Core ke lazy-loading proxies (Day 5) aapki entity ki hi banayi hui subclasses hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Let the role <code>Manager</code> use the lookup too. Then call <code>Find(2)</code> as a Manager and print the result.</p>",
            hi: "<p>Role <code>Manager</code> को भी lookup इस्तेमाल करने दो। फिर Manager बनकर <code>Find(2)</code> call करो और result print करो।</p>",
            hg: "<p>Role <code>Manager</code> ko bhi lookup istemaal karne do. Phir Manager bankar <code>Find(2)</code> call karo aur result print karo.</p>"
          },
          hint: {
            en: "<p>Change the check to <code>_role is not (\"Agent\" or \"Manager\")</code>.</p>",
            hi: "<p>Check को <code>_role is not (\"Agent\" or \"Manager\")</code> कर दो।</p>",
            hg: "<p>Check ko <code>_role is not (\"Agent\" or \"Manager\")</code> kar do.</p>"
          },
          solution: {
            caption: {
              en: "Solution: Manager allowed",
              hi: "हल: Manager को अनुमति",
              hg: "Solution: Manager ko anumati"
            },
            src: "ICustomerLookup manager = new CustomerLookupProxy(\"Manager\");\nConsole.WriteLine(manager.Find(2));\n\npublic interface ICustomerLookup\n{\n    string Find(int id);\n}\n\npublic sealed class CrmDatabaseLookup : ICustomerLookup\n{\n    public CrmDatabaseLookup() => Console.WriteLine(\"connecting to CRM database (slow)\");\n\n    public string Find(int id) => id == 1 ? \"Asha (Mumbai)\" : \"Ravi (Delhi)\";\n}\n\npublic sealed class CustomerLookupProxy : ICustomerLookup\n{\n    private readonly string _role;\n    private CrmDatabaseLookup? _real;\n\n    public CustomerLookupProxy(string role) => _role = role;\n\n    public string Find(int id)\n    {\n        if (_role is not (\"Agent\" or \"Manager\")) return \"access denied\";\n        _real ??= new CrmDatabaseLookup();\n        return _real.Find(id);\n    }\n}",
            check: "run",
            expected: "connecting to CRM database (slow)\nRavi (Delhi)"
          }
        },
        quiz: {
          q: {
            en: "An agent calls <code>Find</code> three times on the same proxy. How many times is <code>connecting to CRM database</code> printed?",
            hi: "एक agent उसी proxy पर <code>Find</code> तीन बार call करता है। <code>connecting to CRM database</code> कितनी बार print होगा?",
            hg: "Ek agent usi proxy par <code>Find</code> teen baar call karta hai. <code>connecting to CRM database</code> kitni baar print hoga?"
          },
          options: [
            {
              en: "Three times, once per call",
              hi: "तीन बार, हर call पर एक बार",
              hg: "Teen baar, har call par ek baar"
            },
            {
              en: "Never, the proxy skips it",
              hi: "कभी नहीं, proxy उसे छोड़ देता है",
              hg: "Kabhi nahi, proxy use chhod deta hai"
            },
            {
              en: "Once, on the first call",
              hi: "एक बार, पहले call पर",
              hg: "Ek baar, pehle call par"
            },
            {
              en: "Twice, first and last call",
              hi: "दो बार, पहले और आख़िरी call पर",
              hg: "Do baar, pehle aur aakhiri call par"
            }
          ],
          answer: 2,
          explain: {
            en: "<p><code>_real ??= new ...</code> creates the object only while <code>_real</code> is null. After the first call it holds the object, so the next calls reuse it.</p>",
            hi: "<p><code>_real ??= new ...</code> object तभी बनाता है जब <code>_real</code> null हो। पहले call के बाद उसमें object आ जाता है, इसलिए अगले calls वही इस्तेमाल करते हैं।</p>",
            hg: "<p><code>_real ??= new ...</code> object tabhi banata hai jab <code>_real</code> null ho. Pehle call ke baad usmein object aa jaata hai, isliye agle calls wahi istemaal karte hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Proxy = same interface, controls access to the real object.</li><li>Kinds: protection, lazy, caching, remote.</li><li>Decorator <i>adds a feature</i>; Proxy <i>decides whether and when</i>.</li></ul>",
          hi: "<ul><li>Proxy = वही interface, असली object तक पहुँच को control करता है।</li><li>किस्में: protection, lazy, caching, remote।</li><li>Decorator <i>feature जोड़ता है</i>; Proxy <i>तय करता है कि हो या नहीं, और कब</i>।</li></ul>",
          hg: "<ul><li>Proxy = wahi interface, asli object tak pahunch ko control karta hai.</li><li>Kismein: protection, lazy, caching, remote.</li><li>Decorator <i>feature jodta hai</i>; Proxy <i>tay karta hai ki ho ya nahi, aur kab</i>.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Protection + lazy proxy over the CRM database lookup",
            hi: "CRM database lookup के ऊपर protection + lazy proxy",
            hg: "CRM database lookup ke upar protection + lazy proxy"
          },
          src: "ICustomerLookup guest = new CustomerLookupProxy(\"Guest\");\nConsole.WriteLine(guest.Find(1));\n\nICustomerLookup agent = new CustomerLookupProxy(\"Agent\");\nConsole.WriteLine(agent.Find(1));\nConsole.WriteLine(agent.Find(2));\n\npublic interface ICustomerLookup\n{\n    string Find(int id);\n}\n\n// The real object: creating it is slow.\npublic sealed class CrmDatabaseLookup : ICustomerLookup\n{\n    public CrmDatabaseLookup() => Console.WriteLine(\"connecting to CRM database (slow)\");\n\n    public string Find(int id) => id == 1 ? \"Asha (Mumbai)\" : \"Ravi (Delhi)\";\n}\n\n// Proxy: same interface, controls whether and when the real object is used.\npublic sealed class CustomerLookupProxy : ICustomerLookup\n{\n    private readonly string _role;\n    private CrmDatabaseLookup? _real;\n\n    public CustomerLookupProxy(string role) => _role = role;\n\n    public string Find(int id)\n    {\n        if (_role != \"Agent\") return \"access denied\";\n        _real ??= new CrmDatabaseLookup();\n        return _real.Find(id);\n    }\n}",
          check: "run",
          expected: "access denied\nconnecting to CRM database (slow)\nAsha (Mumbai)\nRavi (Delhi)"
        }
      ]
    },
    {
      id: "strategy",
      depth: "short",
      title: {
        en: "Strategy: pluggable SLA rules",
        hi: "Strategy: बदलने वाले SLA rules",
        hg: "Strategy: badalne wale SLA rules"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1 to 4 were structural: how to wrap and front objects. From here the patterns are <i>behavioural</i>: how objects act together. Strategy uses the same trick as <code>INotifier</code> (an interface with many implementations), but for a <i>rule</i> that changes: how fast a ticket must get its first reply.",
          hi: "पाठ 1 से 4 structural थे: objects को कैसे लपेटें और उनके आगे दरवाज़ा कैसे बनाएँ। अब से patterns <i>behavioural</i> हैं: objects मिलकर कैसे काम करते हैं। Strategy वही चाल है जो <code>INotifier</code> में थी (एक interface, कई implementations), पर यहाँ एक बदलने वाले <i>rule</i> के लिए: ticket को पहला जवाब कितनी जल्दी मिलना चाहिए।",
          hg: "Lesson 1 se 4 structural the: objects ko kaise lapetein aur unke aage darwaaza kaise banayein. Ab se patterns <i>behavioural</i> hain: objects milkar kaise kaam karte hain. Strategy wahi chaal hai jo <code>INotifier</code> mein thi (ek interface, kai implementations), par yahan ek badalne wale <i>rule</i> ke liye: ticket ko pehla jawab kitni jaldi milna chahiye."
        },
        what: {
          en: "<p><b>Strategy</b> puts each version of a rule or algorithm in its own class behind one interface. The code that needs the rule holds the interface and does not care which version it gets. The caller (or DI) picks the version.</p>",
          hi: "<p><b>Strategy</b> किसी rule या algorithm के हर रूप को अलग class में रखती है, एक interface के पीछे। जिस code को rule चाहिए वह interface रखता है और उसे परवाह नहीं कि कौन-सा रूप मिला। रूप caller (या DI) चुनता है।</p>",
          hg: "<p><b>Strategy</b> kisi rule ya algorithm ke har roop ko alag class mein rakhti hai, ek interface ke peeche. Jis code ko rule chahiye woh interface rakhta hai aur use parwaah nahi ki kaunsa roop mila. Roop caller (ya DI) chunta hai.</p>"
        },
        why: {
          en: "<p>Standard customers get a reply in 24 hours, premium ones in 4, and next month a new plan appears. Without Strategy, a <code>switch</code> on plan grows every sprint inside the same method. With it, a new plan is a new class and the old code is not edited (OCP, Day 8).</p>",
          hi: "<p>Standard customers को 24 घंटे में जवाब, premium को 4 में, और अगले महीने कोई नया plan आ जाता है। Strategy के बिना plan पर एक <code>switch</code> हर sprint उसी method में बढ़ता है। Strategy से नया plan मतलब नई class, और पुराना code नहीं छूना पड़ता (OCP, Day 8)।</p>",
          hg: "<p>Standard customers ko 24 ghante mein jawab, premium ko 4 mein, aur agle mahine koi naya plan aa jaata hai. Strategy ke bina plan par ek <code>switch</code> har sprint usi method mein badhta hai. Strategy se naya plan matlab nayi class, aur purana code nahi chhuna padta (OCP, Day 8).</p>"
        },
        analogy: {
          en: "<p>Choosing a route in Google Maps: fastest, avoid tolls, shortest. The trip is the same; only the route algorithm is swapped.</p>",
          hi: "<p>Google Maps में route चुनना: सबसे तेज़, toll से बचकर, सबसे छोटा। सफ़र वही है; सिर्फ़ route वाला algorithm बदलता है।</p>",
          hg: "<p>Google Maps mein route chunna: sabse tez, toll se bachkar, sabse chhota. Safar wahi hai; sirf route wala algorithm badalta hai.</p>"
        },
        lines: [
          {
            code: "[\"premium\"] = new PremiumSla()",
            note: {
              en: "The place where strategies are chosen: a lookup by plan name. Adding \"gold\" later means one more line here.",
              hi: "यहीं strategies चुनी जाती हैं: plan के नाम से lookup। बाद में \"gold\" जोड़ना हो तो यहाँ बस एक line और।",
              hg: "Yahin strategies chuni jaati hain: plan ke naam se lookup. Baad mein \"gold\" jodna ho to yahan bas ek line aur."
            }
          },
          {
            code: "int ReplyHours(Priority priority);",
            note: {
              en: "The strategy contract: one question, \"how many hours?\". Every policy answers it in its own way.",
              hi: "Strategy का contract: एक सवाल, \"कितने घंटे?\"। हर policy उसका जवाब अपने तरीक़े से देती है।",
              hg: "Strategy ka contract: ek sawaal, \"kitne ghante?\". Har policy uska jawab apne tareeke se deti hai."
            }
          },
          {
            code: "public int ReplyHours(Priority priority) => priority == Priority.High ? 8 : 24;",
            note: {
              en: "One concrete strategy. Its rule lives only in this class, so it is easy to read and test alone.",
              hi: "एक असली strategy। उसका rule सिर्फ़ इसी class में है, इसलिए पढ़ना और अकेले test करना आसान है।",
              hg: "Ek asli strategy. Uska rule sirf isi class mein hai, isliye padhna aur akele test karna aasaan hai."
            }
          },
          {
            code: "public string Describe(int ticketId, string customer, Priority priority, ISlaPolicy policy)",
            note: {
              en: "The client receives the interface as a parameter. It has no <code>if</code> on plan names.",
              hi: "Client interface को parameter में पाता है। उसमें plan के नामों पर कोई <code>if</code> नहीं है।",
              hg: "Client interface ko parameter mein paata hai. Usmein plan ke naamon par koi <code>if</code> nahi hai."
            }
          },
          {
            code: "$\"Ticket #{ticketId} ({customer}): reply within {policy.ReplyHours(priority)} h\"",
            note: {
              en: "Same call, different answer: the strategy that was passed in decides the number.",
              hi: "Call वही, जवाब अलग: जो strategy दी गई, वही संख्या तय करती है।",
              hg: "Call wahi, jawab alag: jo strategy di gayi, wahi sankhya tay karti hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Building a Strategy for two stable branches of an <code>if</code>. Wait until the third variation arrives.</li><li>Letting the client choose with <code>if (plan == ...)</code> inside business code. Keep the choice in one place, such as the composition root or a lookup.</li><li>Mixing it up with State: a Strategy is picked by the <i>client</i> and usually stays; State changes by itself as the object moves through its life.</li></ul>",
          hi: "<ul><li>एक <code>if</code> की दो पक्की शाखाओं के लिए Strategy बनाना। तीसरा रूप आने तक रुको।</li><li>Business code में <code>if (plan == ...)</code> से client को चुनने देना। चुनाव एक ही जगह रखो, जैसे composition root या कोई lookup।</li><li>State से गड़बड़ाना: Strategy <i>client</i> चुनता है और वह अक्सर वही रहती है; State object के जीवन में आगे बढ़ने पर अपने-आप बदलता है।</li></ul>",
          hg: "<ul><li>Ek <code>if</code> ki do pakki shaakhaon ke liye Strategy banana. Teesra roop aane tak ruko.</li><li>Business code mein <code>if (plan == ...)</code> se client ko chunne dena. Chunaav ek hi jagah rakho, jaise composition root ya koi lookup.</li><li>State se gadbadaana: Strategy <i>client</i> chunta hai aur woh aksar wahi rehti hai; State object ke jeevan mein aage badhne par apne-aap badalta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>When behaviour varies by input or configuration and keeps growing: SLA rules, discounts, sorting, tax, payment method. In C# a simple strategy can also be just a <code>Func&lt;,&gt;</code> delegate; the Deep Dive shows that and keyed DI services.</p>",
          hi: "<p>जब behaviour input या configuration से बदलता हो और बढ़ता जाए: SLA rules, discounts, sorting, tax, payment method। C# में छोटी strategy सिर्फ़ एक <code>Func&lt;,&gt;</code> delegate भी हो सकती है; Deep Dive में वह और keyed DI services दिखाई हैं।</p>",
          hg: "<p>Jab behaviour input ya configuration se badalta ho aur badhta jaaye: SLA rules, discounts, sorting, tax, payment method. C# mein chhoti strategy sirf ek <code>Func&lt;,&gt;</code> delegate bhi ho sakti hai; Deep Dive mein woh aur keyed DI services dikhayi hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add <code>NightShiftSla</code> that always answers <code>12</code> hours. Register it as <code>\"night\"</code> and describe ticket 504 for <b>Neha</b> with priority <code>High</code>. Do not edit <code>SlaDesk</code>.</p>",
            hi: "<p><code>NightShiftSla</code> जोड़ो जो हमेशा <code>12</code> घंटे बताए। उसे <code>\"night\"</code> नाम से register करो और <b>Neha</b> के ticket 504 को priority <code>High</code> के साथ describe करो। <code>SlaDesk</code> मत बदलो।</p>",
            hg: "<p><code>NightShiftSla</code> jodo jo hamesha <code>12</code> ghante bataye. Use <code>\"night\"</code> naam se register karo aur <b>Neha</b> ke ticket 504 ko priority <code>High</code> ke saath describe karo. <code>SlaDesk</code> mat badlo.</p>"
          },
          hint: {
            en: "<p>A new class implementing <code>ISlaPolicy</code> and one new dictionary entry. Nothing else changes.</p>",
            hi: "<p><code>ISlaPolicy</code> implement करने वाली एक नई class और dictionary में एक नई entry। और कुछ नहीं बदलता।</p>",
            hg: "<p><code>ISlaPolicy</code> implement karne wali ek nayi class aur dictionary mein ek nayi entry. Aur kuch nahi badalta.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a third policy",
              hi: "हल: तीसरी policy",
              hg: "Solution: teesri policy"
            },
            src: "var policies = new Dictionary<string, ISlaPolicy>\n{\n    [\"standard\"] = new StandardSla(),\n    [\"night\"] = new NightShiftSla()\n};\n\nvar desk = new SlaDesk();\nConsole.WriteLine(desk.Describe(504, \"Neha\", Priority.High, policies[\"night\"]));\n\npublic enum Priority { Low, High }\n\npublic interface ISlaPolicy\n{\n    int ReplyHours(Priority priority);\n}\n\npublic sealed class StandardSla : ISlaPolicy\n{\n    public int ReplyHours(Priority priority) => priority == Priority.High ? 8 : 24;\n}\n\npublic sealed class NightShiftSla : ISlaPolicy\n{\n    public int ReplyHours(Priority priority) => 12;\n}\n\npublic sealed class SlaDesk\n{\n    public string Describe(int ticketId, string customer, Priority priority, ISlaPolicy policy)\n        => $\"Ticket #{ticketId} ({customer}): reply within {policy.ReplyHours(priority)} h\";\n}",
            check: "run",
            expected: "Ticket #504 (Neha): reply within 12 h"
          }
        },
        quiz: {
          q: {
            en: "The business adds a \"gold\" plan. With Strategy as in this lesson, what do you change?",
            hi: "Business एक \"gold\" plan जोड़ता है। इस पाठ वाली Strategy में आप क्या बदलते हो?",
            hg: "Business ek \"gold\" plan jodta hai. Is lesson wali Strategy mein aap kya badalte ho?"
          },
          options: [
            {
              en: "Add a new <code>if</code> inside <code>SlaDesk.Describe</code>",
              hi: "<code>SlaDesk.Describe</code> के अंदर नया <code>if</code> जोड़ते हैं",
              hg: "<code>SlaDesk.Describe</code> ke andar naya <code>if</code> jodte hain"
            },
            {
              en: "Add a <code>GoldSla</code> class and one dictionary entry",
              hi: "एक <code>GoldSla</code> class और dictionary में एक entry जोड़ते हैं",
              hg: "Ek <code>GoldSla</code> class aur dictionary mein ek entry jodte hain"
            },
            {
              en: "Edit <code>StandardSla</code> to handle gold",
              hi: "<code>StandardSla</code> को बदलकर gold सँभालते हैं",
              hg: "<code>StandardSla</code> ko badalkar gold sambhalte hain"
            },
            {
              en: "Change <code>ISlaPolicy</code> and every policy",
              hi: "<code>ISlaPolicy</code> और हर policy बदलते हैं",
              hg: "<code>ISlaPolicy</code> aur har policy badalte hain"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>That is the point of Strategy: variation is added, not edited. <code>SlaDesk</code> and the existing policies stay as they are.</p>",
            hi: "<p>Strategy का यही मक़सद है: बदलाव जोड़े जाते हैं, पुराने code में घुसकर बदले नहीं जाते। <code>SlaDesk</code> और मौजूदा policies वैसी ही रहती हैं।</p>",
            hg: "<p>Strategy ka yahi maqsad hai: badlaav jode jaate hain, purane code mein ghuskar badle nahi jaate. <code>SlaDesk</code> aur maujooda policies waisi hi rehti hain.</p>"
          }
        },
        recap: {
          en: "<ul><li>Strategy = one interface, many swappable versions of a rule.</li><li>The client holds the interface; the choice lives in one place.</li><li>A growing <code>switch</code> on type or plan is the smell that asks for it.</li></ul>",
          hi: "<ul><li>Strategy = एक interface, किसी rule के कई बदले जा सकने वाले रूप।</li><li>Client interface रखता है; चुनाव एक ही जगह रहता है।</li><li>Type या plan पर बढ़ता <code>switch</code> वह बू है जो इसे माँगती है।</li></ul>",
          hg: "<ul><li>Strategy = ek interface, kisi rule ke kai badle ja sakne wale roop.</li><li>Client interface rakhta hai; chunaav ek hi jagah rehta hai.</li><li>Type ya plan par badhta <code>switch</code> woh boo hai jo ise maangti hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Strategy: one interface, two SLA policies, chosen per customer plan",
            hi: "Strategy: एक interface, दो SLA policies, customer के plan से चुनी हुई",
            hg: "Strategy: ek interface, do SLA policies, customer ke plan se chuni hui"
          },
          src: "var policies = new Dictionary<string, ISlaPolicy>\n{\n    [\"standard\"] = new StandardSla(),\n    [\"premium\"] = new PremiumSla()\n};\n\nvar desk = new SlaDesk();\nforeach (var (ticketId, customer, plan, priority) in new[]\n{\n    (501, \"Asha\", \"standard\", Priority.Low),\n    (502, \"Ravi\", \"premium\", Priority.High),\n    (503, \"Meena\", \"standard\", Priority.High)\n})\n{\n    Console.WriteLine(desk.Describe(ticketId, customer, priority, policies[plan]));\n}\n\npublic enum Priority { Low, High }\n\npublic interface ISlaPolicy\n{\n    int ReplyHours(Priority priority);\n}\n\npublic sealed class StandardSla : ISlaPolicy\n{\n    public int ReplyHours(Priority priority) => priority == Priority.High ? 8 : 24;\n}\n\npublic sealed class PremiumSla : ISlaPolicy\n{\n    public int ReplyHours(Priority priority) => priority == Priority.High ? 1 : 4;\n}\n\n// Does not know which policy it gets, so a new policy never edits this class.\npublic sealed class SlaDesk\n{\n    public string Describe(int ticketId, string customer, Priority priority, ISlaPolicy policy)\n        => $\"Ticket #{ticketId} ({customer}): reply within {policy.ReplyHours(priority)} h\";\n}",
          check: "run",
          expected: "Ticket #501 (Asha): reply within 24 h\nTicket #502 (Ravi): reply within 1 h\nTicket #503 (Meena): reply within 8 h"
        }
      ]
    },
    {
      id: "observer",
      depth: "short",
      title: {
        en: "Observer: react when a ticket closes",
        hi: "Observer: ticket बंद होने पर react करो",
        hg: "Observer: ticket band hone par react karo"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 5 swapped <i>how</i> a rule is computed. Observer is about <i>who finds out</i>: when a ticket closes, the SMS sender and the dashboard both want to know, but the code that closes the ticket must not know them. This uses the C# <code>event</code> from Day 2.",
          hi: "पाठ 5 में बदला कि rule <i>कैसे</i> निकले। Observer इस बारे में है कि <i>किसे पता चले</i>: ticket बंद होने पर SMS भेजने वाला और dashboard, दोनों जानना चाहते हैं, पर ticket बंद करने वाले code को उनका पता नहीं होना चाहिए। इसमें Day 2 वाला C# <code>event</code> इस्तेमाल होता है।",
          hg: "Lesson 5 mein badla ki rule <i>kaise</i> nikle. Observer is baare mein hai ki <i>kise pata chale</i>: ticket band hone par SMS bhejne wala aur dashboard, dono jaanna chahte hain, par ticket band karne wale code ko unka pata nahi hona chahiye. Isme Day 2 wala C# <code>event</code> istemaal hota hai."
        },
        what: {
          en: "<p><b>Observer</b> means one <b>subject</b> and many <b>subscribers</b>. The subject raises a notification; every subscriber that signed up gets it. The subject does not know who they are. In C# the usual tool is an <code>event</code>: subscribe with <code>+=</code>, unsubscribe with <code>-=</code>.</p>",
          hi: "<p><b>Observer</b> का मतलब है एक <b>subject</b> और कई <b>subscribers</b>। Subject सूचना उठाता है (raise); जिसने भी sign up किया है उस हर subscriber को वह मिलती है। Subject को पता नहीं कि वे कौन हैं। C# में आम औज़ार <code>event</code> है: <code>+=</code> से subscribe, <code>-=</code> से unsubscribe।</p>",
          hg: "<p><b>Observer</b> ka matlab hai ek <b>subject</b> aur kai <b>subscribers</b>. Subject soochna uthata hai (raise); jisne bhi sign up kiya hai us har subscriber ko woh milti hai. Subject ko pata nahi ki woh kaun hain. C# mein aam auzaar <code>event</code> hai: <code>+=</code> se subscribe, <code>-=</code> se unsubscribe.</p>"
        },
        why: {
          en: "<p>Today closing a ticket must send an SMS and update a dashboard. Tomorrow also email and billing. If <code>Close</code> calls each of them, it keeps growing. With an event, <code>Close</code> says \"ticket closed\" once and new listeners just subscribe.</p>",
          hi: "<p>आज ticket बंद होने पर SMS जाना है और dashboard बदलना है। कल email और billing भी। अगर <code>Close</code> हर एक को call करे तो वह बढ़ता जाएगा। Event से <code>Close</code> बस एक बार कहता है \"ticket बंद हुआ\" और नए सुनने वाले ख़ुद subscribe कर लेते हैं।</p>",
          hg: "<p>Aaj ticket band hone par SMS jaana hai aur dashboard badalna hai. Kal email aur billing bhi. Agar <code>Close</code> har ek ko call kare to woh badhta jaayega. Event se <code>Close</code> bas ek baar kehta hai \"ticket band hua\" aur naye sunne wale khud subscribe kar lete hain.</p>"
        },
        analogy: {
          en: "<p>A WhatsApp group. The admin posts one message and everyone who joined receives it. The admin does not keep a list of members in his head, and anyone can leave.</p>",
          hi: "<p>WhatsApp group। Admin एक message डालता है और जो भी जुड़ा है सबको मिलता है। Admin अपने दिमाग़ में members की list नहीं रखता, और कोई भी group छोड़ सकता है।</p>",
          hg: "<p>WhatsApp group. Admin ek message daalta hai aur jo bhi juda hai sabko milta hai. Admin apne dimaag mein members ki list nahi rakhta, aur koi bhi group chhod sakta hai.</p>"
        },
        lines: [
          {
            code: "public event EventHandler<int>? TicketClosed;",
            note: {
              en: "The event. Outside code can only add or remove handlers; it cannot raise the event itself. The <code>?</code> is there because nobody may be subscribed.",
              hi: "यह event है। बाहर का code सिर्फ़ handlers जोड़ या हटा सकता है; event को ख़ुद raise नहीं कर सकता। <code>?</code> इसलिए है कि हो सकता है कोई subscribed न हो।",
              hg: "Ye event hai. Bahar ka code sirf handlers jod ya hata sakta hai; event ko khud raise nahi kar sakta. <code>?</code> isliye hai ki ho sakta hai koi subscribed na ho."
            }
          },
          {
            code: "board.TicketClosed += sms;",
            note: {
              en: "Subscribe: \"call my handler when this happens\". The board does not learn who sms is.",
              hi: "Subscribe: \"ऐसा हो तो मेरा handler call करना\"। Board को पता नहीं चलता कि sms कौन है।",
              hg: "Subscribe: \"aisa ho to mera handler call karna\". Board ko pata nahi chalta ki sms kaun hai."
            }
          },
          {
            code: "TicketClosed?.Invoke(this, ticketId);",
            note: {
              en: "Raise the event. Handlers run one after another, in subscription order, on this same thread.",
              hi: "Event raise करो। Handlers एक के बाद एक, subscribe करने के क्रम में, इसी thread पर चलते हैं।",
              hg: "Event raise karo. Handlers ek ke baad ek, subscribe karne ke kram mein, isi thread par chalte hain."
            }
          },
          {
            code: "board.TicketClosed -= sms;     // unsubscribe with the same handler",
            note: {
              en: "Unsubscribe. You must keep the handler in a variable (<code>sms</code>) to remove it later. After this line the SMS handler is silent.",
              hi: "Unsubscribe। हटाने के लिए handler को variable (<code>sms</code>) में रखना पड़ता है। इस line के बाद SMS handler चुप हो जाता है।",
              hg: "Unsubscribe. Hatane ke liye handler ko variable (<code>sms</code>) mein rakhna padta hai. Is line ke baad SMS handler chup ho jaata hai."
            }
          },
          {
            code: "static void OnDashboard(object? sender, int id) => Console.WriteLine($\"Dashboard: ticket #{id} counted\");",
            note: {
              en: "A method can be a handler too. It matches the <code>EventHandler&lt;int&gt;</code> shape: sender and data.",
              hi: "Method भी handler बन सकता है। वह <code>EventHandler&lt;int&gt;</code> के आकार का है: sender और data।",
              hg: "Method bhi handler ban sakta hai. Woh <code>EventHandler&lt;int&gt;</code> ke aakaar ka hai: sender aur data."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Never unsubscribing from a long-lived publisher (for example a static event). It keeps every subscriber alive, which leaks memory.</li><li>Expecting handlers to run in parallel or in the background. They run synchronously on the raising thread, and a slow handler slows <code>Close</code>.</li><li>Using an in-process event when delivery must be guaranteed. If the app crashes, the notification is lost: use a message broker.</li></ul>",
          hi: "<ul><li>लंबे समय तक जीने वाले publisher (जैसे static event) से कभी unsubscribe न करना। वह हर subscriber को ज़िंदा रखता है, जिससे memory leak होता है।</li><li>यह सोचना कि handlers parallel या background में चलेंगे। वे raise करने वाले thread पर ही, एक के बाद एक चलते हैं, और धीमा handler <code>Close</code> को धीमा कर देता है।</li><li>जहाँ delivery की गारंटी चाहिए वहाँ in-process event लगाना। App crash हुआ तो सूचना खो जाती है: वहाँ message broker इस्तेमाल करो।</li></ul>",
          hg: "<ul><li>Lambe samay tak jeene wale publisher (jaise static event) se kabhi unsubscribe na karna. Woh har subscriber ko zinda rakhta hai, jisse memory leak hota hai.</li><li>Ye sochna ki handlers parallel ya background mein chalenge. Woh raise karne wale thread par hi, ek ke baad ek chalte hain, aur dheema handler <code>Close</code> ko dheema kar deta hai.</li><li>Jahan delivery ki guarantee chahiye wahan in-process event lagana. App crash hua to soochna kho jaati hai: wahan message broker istemaal karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>For one-to-many, in-process notification where the sender should not know the receivers: UI events, domain events inside one app, \"ticket closed\" reactions. The Deep Dive adds <code>IObservable&lt;T&gt;</code> for streams.</p>",
          hi: "<p>एक-से-कई, in-process सूचना के लिए जहाँ भेजने वाले को पाने वालों का पता नहीं होना चाहिए: UI events, एक app के अंदर के domain events, \"ticket बंद\" पर होने वाले काम। Deep Dive में streams के लिए <code>IObservable&lt;T&gt;</code> भी है।</p>",
          hg: "<p>Ek-se-kai, in-process soochna ke liye jahan bhejne wale ko paane walon ka pata nahi hona chahiye: UI events, ek app ke andar ke domain events, \"ticket band\" par hone wale kaam. Deep Dive mein streams ke liye <code>IObservable&lt;T&gt;</code> bhi hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a third subscriber (a lambda) that counts closed tickets and prints <code>Closed so far: {n}</code>. Close tickets 501 and 502 and show the two counts.</p>",
            hi: "<p>तीसरा subscriber (एक lambda) जोड़ो जो बंद हुए tickets गिने और <code>Closed so far: {n}</code> print करे। Tickets 501 और 502 बंद करो और दोनों counts दिखाओ।</p>",
            hg: "<p>Teesra subscriber (ek lambda) jodo jo band hue tickets gine aur <code>Closed so far: {n}</code> print kare. Tickets 501 aur 502 band karo aur dono counts dikhao.</p>"
          },
          hint: {
            en: "<p>Declare <code>var count = 0;</code> before, then <code>board.TicketClosed += (s, id) =&gt; Console.WriteLine($\"Closed so far: {++count}\");</code></p>",
            hi: "<p>पहले <code>var count = 0;</code> लिखो, फिर <code>board.TicketClosed += (s, id) =&gt; Console.WriteLine($\"Closed so far: {++count}\");</code></p>",
            hg: "<p>Pehle <code>var count = 0;</code> likho, phir <code>board.TicketClosed += (s, id) =&gt; Console.WriteLine($\"Closed so far: {++count}\");</code></p>"
          },
          solution: {
            caption: {
              en: "Solution: a counting subscriber",
              hi: "हल: गिनने वाला subscriber",
              hg: "Solution: ginne wala subscriber"
            },
            src: "var board = new TicketBoard();\n\nvar count = 0;\nboard.TicketClosed += (sender, id) => Console.WriteLine($\"Closed so far: {++count}\");\n\nboard.Close(501);\nboard.Close(502);\n\npublic sealed class TicketBoard\n{\n    public event EventHandler<int>? TicketClosed;\n\n    public void Close(int ticketId)\n    {\n        Console.WriteLine($\"Ticket #{ticketId} closed\");\n        TicketClosed?.Invoke(this, ticketId);\n    }\n}",
            check: "run",
            expected: "Ticket #501 closed\nClosed so far: 1\nTicket #502 closed\nClosed so far: 2"
          }
        },
        quiz: {
          q: {
            en: "The first subscriber's handler throws an exception. What happens to the other subscribers of the same event call?",
            hi: "पहले subscriber का handler exception फेंकता है। उसी event call के बाकी subscribers का क्या होता है?",
            hg: "Pehle subscriber ka handler exception phenkta hai. Usi event call ke baaki subscribers ka kya hota hai?"
          },
          options: [
            {
              en: "They are skipped and the exception reaches the code that raised the event",
              hi: "वे छूट जाते हैं और exception उस code तक पहुँचता है जिसने event उठाया",
              hg: "Woh chhoot jaate hain aur exception us code tak pahunchta hai jisne event uthaya"
            },
            {
              en: "The exception is ignored by the event",
              hi: "Event exception को अनदेखा कर देता है",
              hg: "Event exception ko andekha kar deta hai"
            },
            {
              en: "Each one is retried automatically",
              hi: "हर एक को अपने-आप दोबारा चलाया जाता है",
              hg: "Har ek ko apne-aap dobaara chalaya jaata hai"
            },
            {
              en: "They run anyway, in parallel",
              hi: "वे फिर भी parallel में चलते हैं",
              hg: "Woh phir bhi parallel mein chalte hain"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Handlers run synchronously one after another. An unhandled exception stops the loop, so later subscribers never run, and <code>Close</code> sees the exception.</p>",
            hi: "<p>Handlers synchronously एक के बाद एक चलते हैं। बिना पकड़ा exception loop रोक देता है, इसलिए बाद के subscribers चलते ही नहीं, और <code>Close</code> को exception दिखता है।</p>",
            hg: "<p>Handlers synchronously ek ke baad ek chalte hain. Bina pakda exception loop rok deta hai, isliye baad ke subscribers chalte hi nahi, aur <code>Close</code> ko exception dikhta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Observer = one subject, many subscribers; the subject does not know them.</li><li>C#: <code>event</code>, <code>+=</code> to subscribe, <code>-=</code> to unsubscribe.</li><li>Handlers are synchronous, in order, on the raising thread. Unsubscribe from long-lived publishers.</li></ul>",
          hi: "<ul><li>Observer = एक subject, कई subscribers; subject उन्हें नहीं जानता।</li><li>C#: <code>event</code>, subscribe के लिए <code>+=</code>, unsubscribe के लिए <code>-=</code>।</li><li>Handlers synchronous हैं, क्रम से, raise करने वाले thread पर। लंबे जीने वाले publishers से unsubscribe करो।</li></ul>",
          hg: "<ul><li>Observer = ek subject, kai subscribers; subject unhe nahi jaanta.</li><li>C#: <code>event</code>, subscribe ke liye <code>+=</code>, unsubscribe ke liye <code>-=</code>.</li><li>Handlers synchronous hain, kram se, raise karne wale thread par. Lambe jeene wale publishers se unsubscribe karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Observer: a TicketClosed event with two subscribers",
            hi: "Observer: TicketClosed event और दो subscribers",
            hg: "Observer: TicketClosed event aur do subscribers"
          },
          src: "var board = new TicketBoard();\n\nEventHandler<int> sms = (sender, id) => Console.WriteLine($\"SMS: ticket #{id} closed\");\nboard.TicketClosed += sms;\nboard.TicketClosed += OnDashboard;\n\nboard.Close(501);\nboard.TicketClosed -= sms;     // unsubscribe with the same handler\nboard.Close(502);\n\nstatic void OnDashboard(object? sender, int id) => Console.WriteLine($\"Dashboard: ticket #{id} counted\");\n\npublic sealed class TicketBoard\n{\n    // The subject does not know who listens.\n    public event EventHandler<int>? TicketClosed;\n\n    public void Close(int ticketId)\n    {\n        Console.WriteLine($\"Ticket #{ticketId} closed\");\n        TicketClosed?.Invoke(this, ticketId);\n    }\n}",
          check: "run",
          expected: "Ticket #501 closed\nSMS: ticket #501 closed\nDashboard: ticket #501 counted\nTicket #502 closed\nDashboard: ticket #502 counted"
        }
      ]
    },
    {
      id: "mediator",
      depth: "short",
      title: {
        en: "Mediator: components talk through a hub",
        hi: "Mediator: components एक hub के ज़रिए बात करते हैं",
        hg: "Mediator: components ek hub ke zariye baat karte hain"
      },
      lesson: {
        buildsOn: {
          en: "In lesson 6 the board did not know its listeners, but each listener still had to subscribe on its own. Now several CRM screens must <i>coordinate</i>: the customer portal and the agent console. A Mediator puts that coordination in one hub, instead of every screen holding references to every other screen.",
          hi: "पाठ 6 में board अपने सुनने वालों को नहीं जानता था, पर हर सुनने वाले को ख़ुद subscribe करना पड़ता था। अब CRM की कई screens को <i>मिलकर काम</i> करना है: customer portal और agent console। Mediator यह तालमेल एक hub में रखता है, हर screen के पास हर दूसरी screen का reference रखने के बजाय।",
          hg: "Lesson 6 mein board apne sunne walon ko nahi jaanta tha, par har sunne wale ko khud subscribe karna padta tha. Ab CRM ki kai screens ko <i>milkar kaam</i> karna hai: customer portal aur agent console. Mediator ye taalmel ek hub mein rakhta hai, har screen ke paas har doosri screen ka reference rakhne ke bajaye."
        },
        what: {
          en: "<p>A <b>Mediator</b> is a hub that components talk to instead of talking to each other. A component only knows the hub; the hub knows the components and holds the rules of who reacts to what. A tangled web becomes a star.</p>",
          hi: "<p><b>Mediator</b> एक hub है जिससे components आपस में बात करने की जगह उसी से बात करते हैं। Component सिर्फ़ hub को जानता है; hub components को जानता है और यह भी कि कौन किस बात पर क्या करेगा। उलझा जाल एक तारा (star) बन जाता है।</p>",
          hg: "<p><b>Mediator</b> ek hub hai jisse components aapas mein baat karne ki jagah usi se baat karte hain. Component sirf hub ko jaanta hai; hub components ko jaanta hai aur ye bhi ki kaun kis baat par kya karega. Uljha jaal ek taara (star) ban jaata hai.</p>"
        },
        why: {
          en: "<p>With three screens that call each other there are six links; with five screens there are twenty. Add a billing screen and you edit all of them. With a hub, a new screen connects once and the interaction rules stay in one class.</p>",
          hi: "<p>तीन screens एक-दूसरे को call करें तो छह जोड़ बनते हैं; पाँच screens हों तो बीस। Billing screen जोड़ो तो सबको बदलना पड़ता है। Hub हो तो नई screen एक बार जुड़ती है और आपसी rules एक ही class में रहते हैं।</p>",
          hg: "<p>Teen screens ek-doosre ko call karein to chhah jod bante hain; paanch screens hon to bees. Billing screen jodo to sabko badalna padta hai. Hub ho to nayi screen ek baar judti hai aur aapsi rules ek hi class mein rehte hain.</p>"
        },
        analogy: {
          en: "<p>An airport control tower. Pilots never radio each other; each talks only to the tower, which decides who lands first.</p>",
          hi: "<p>Airport का control tower। Pilots आपस में radio पर बात नहीं करते; हर कोई सिर्फ़ tower से बात करता है, और कौन पहले उतरेगा यह tower तय करता है।</p>",
          hg: "<p>Airport ka control tower. Pilots aapas mein radio par baat nahi karte; har koi sirf tower se baat karta hai, aur kaun pehle utrega ye tower tay karta hai.</p>"
        },
        lines: [
          {
            code: "hub.Connect(portal, agentConsole);",
            note: {
              en: "The hub is told who the components are. The components were given only the hub.",
              hi: "Hub को बताया जाता है कि components कौन हैं। Components को सिर्फ़ hub दिया गया था।",
              hg: "Hub ko bataya jaata hai ki components kaun hain. Components ko sirf hub diya gaya tha."
            }
          },
          {
            code: "public CustomerPortal(ISupportHub hub) => _hub = hub;",
            note: {
              en: "The portal holds <code>ISupportHub</code> only. It has no field for <code>AgentConsole</code>.",
              hi: "Portal के पास सिर्फ़ <code>ISupportHub</code> है। <code>AgentConsole</code> के लिए उसमें कोई field नहीं।",
              hg: "Portal ke paas sirf <code>ISupportHub</code> hai. <code>AgentConsole</code> ke liye usmein koi field nahi."
            }
          },
          {
            code: "_hub.TicketRaised(ticketId, customer, issue);",
            note: {
              en: "The portal reports what happened and stops. What follows is not its business.",
              hi: "Portal बताता है कि क्या हुआ और रुक जाता है। आगे क्या होगा, यह उसका काम नहीं।",
              hg: "Portal batata hai ki kya hua aur ruk jaata hai. Aage kya hoga, ye uska kaam nahi."
            }
          },
          {
            code: "_console!.Show(ticketId, customer, issue);",
            note: {
              en: "The hub decides that a raised ticket must appear on the agent console. This rule lives only here.",
              hi: "Hub तय करता है कि नया ticket agent console पर दिखे। यह rule सिर्फ़ यहीं रहता है।",
              hg: "Hub tay karta hai ki naya ticket agent console par dikhe. Ye rule sirf yahin rehta hai."
            }
          },
          {
            code: "public void ReplySent(int ticketId, string text) => _portal!.ShowReply(ticketId, text);",
            note: {
              en: "The reverse route: a reply from the console reaches the portal, and neither screen knows the other. The <code>!</code> says \"connected before use\".",
              hi: "उल्टा रास्ता: console का reply portal तक पहुँचता है, और कोई screen दूसरी को नहीं जानती। <code>!</code> का मतलब \"इस्तेमाल से पहले जुड़ चुका है\"।",
              hg: "Ulta raasta: console ka reply portal tak pahunchta hai, aur koi screen doosri ko nahi jaanti. <code>!</code> ka matlab \"istemaal se pehle jud chuka hai\"."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>The mediator becomes a <b>god object</b> that knows every rule of the app. Keep one hub per area (support, billing), not one for everything.</li><li>Using a Mediator for two or three classes that talk simply. A direct call is clearer.</li><li>Confusing it with Observer. Observer is a broadcast where the subject does not care who listens. A Mediator <i>coordinates</i> specific participants and holds the logic.</li></ul>",
          hi: "<ul><li>Mediator का <b>god object</b> बन जाना जो app का हर rule जानता है। हर area (support, billing) के लिए अलग hub रखो, सबके लिए एक नहीं।</li><li>दो-तीन classes के लिए Mediator लगाना जो सीधे आराम से बात कर लेती हैं। सीधा call ज़्यादा साफ़ है।</li><li>Observer से गड़बड़ाना। Observer एक broadcast है जहाँ subject को परवाह नहीं कि कौन सुन रहा है। Mediator ख़ास participants को <i>coordinate</i> करता है और logic रखता है।</li></ul>",
          hg: "<ul><li>Mediator ka <b>god object</b> ban jaana jo app ka har rule jaanta hai. Har area (support, billing) ke liye alag hub rakho, sabke liye ek nahi.</li><li>Do-teen classes ke liye Mediator lagana jo seedhe aaram se baat kar leti hain. Seedha call zyada saaf hai.</li><li>Observer se gadbadaana. Observer ek broadcast hai jahan subject ko parwaah nahi ki kaun sun raha hai. Mediator khaas participants ko <i>coordinate</i> karta hai aur logic rakhta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>When many components interact in tangled ways and you keep editing all of them for one change. In .NET the same idea appears as in-process request handlers; the MediatR library is one popular implementation (Day 11 covers CQRS). Here we wrote it by hand: no package is needed to understand the pattern.</p>",
          hi: "<p>जब कई components उलझे तरीक़े से आपस में जुड़े हों और एक बदलाव के लिए सबको बदलना पड़े। .NET में यही सोच in-process request handlers के रूप में दिखती है; MediatR library एक लोकप्रिय implementation है (Day 11 में CQRS)। यहाँ हमने इसे हाथ से लिखा: pattern समझने के लिए कोई package नहीं चाहिए।</p>",
          hg: "<p>Jab kai components uljhe tareeke se aapas mein jude hon aur ek badlaav ke liye sabko badalna pade. .NET mein yahi soch in-process request handlers ke roop mein dikhti hai; MediatR library ek lokpriya implementation hai (Day 11 mein CQRS). Yahan humne ise haath se likha: pattern samajhne ke liye koi package nahi chahiye.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add <code>Escalate(int ticketId)</code> to <code>AgentConsole</code>. It prints <code>Console: #{id} escalated</code>, tells the hub, and the hub makes the portal print <code>Portal: #{id} escalated to a manager</code>. Escalate ticket 501.</p>",
            hi: "<p><code>AgentConsole</code> में <code>Escalate(int ticketId)</code> जोड़ो। वह <code>Console: #{id} escalated</code> print करे, hub को बताए, और hub portal से <code>Portal: #{id} escalated to a manager</code> print करवाए। Ticket 501 escalate करो।</p>",
            hg: "<p><code>AgentConsole</code> mein <code>Escalate(int ticketId)</code> jodo. Woh <code>Console: #{id} escalated</code> print kare, hub ko bataye, aur hub portal se <code>Portal: #{id} escalated to a manager</code> print karwaye. Ticket 501 escalate karo.</p>"
          },
          hint: {
            en: "<p>Three small edits: a new method on <code>ISupportHub</code>, a call in <code>AgentConsole</code>, and the rule in <code>SupportHub</code>. The console must not reference the portal.</p>",
            hi: "<p>तीन छोटे बदलाव: <code>ISupportHub</code> में नया method, <code>AgentConsole</code> में call, और rule <code>SupportHub</code> में। Console, portal का reference न रखे।</p>",
            hg: "<p>Teen chhote badlaav: <code>ISupportHub</code> mein naya method, <code>AgentConsole</code> mein call, aur rule <code>SupportHub</code> mein. Console, portal ka reference na rakhe.</p>"
          },
          solution: {
            caption: {
              en: "Solution: escalation through the hub",
              hi: "हल: hub के ज़रिए escalation",
              hg: "Solution: hub ke zariye escalation"
            },
            src: "var hub = new SupportHub();\nvar portal = new CustomerPortal();\nvar agentConsole = new AgentConsole(hub);\nhub.Connect(portal);\n\nagentConsole.Escalate(501);\n\npublic interface ISupportHub\n{\n    void Escalated(int ticketId);\n}\n\npublic sealed class CustomerPortal\n{\n    public void ShowEscalation(int ticketId) => Console.WriteLine($\"Portal: #{ticketId} escalated to a manager\");\n}\n\npublic sealed class AgentConsole\n{\n    private readonly ISupportHub _hub;\n\n    public AgentConsole(ISupportHub hub) => _hub = hub;\n\n    public void Escalate(int ticketId)\n    {\n        Console.WriteLine($\"Console: #{ticketId} escalated\");\n        _hub.Escalated(ticketId);\n    }\n}\n\npublic sealed class SupportHub : ISupportHub\n{\n    private CustomerPortal? _portal;\n\n    public void Connect(CustomerPortal portal) => _portal = portal;\n\n    public void Escalated(int ticketId) => _portal!.ShowEscalation(ticketId);\n}",
            check: "run",
            expected: "Console: #501 escalated\nPortal: #501 escalated to a manager"
          }
        },
        quiz: {
          q: {
            en: "After introducing <code>SupportHub</code>, what does <code>CustomerPortal</code> know about <code>AgentConsole</code>?",
            hi: "<code>SupportHub</code> आने के बाद <code>CustomerPortal</code> को <code>AgentConsole</code> के बारे में क्या पता है?",
            hg: "<code>SupportHub</code> aane ke baad <code>CustomerPortal</code> ko <code>AgentConsole</code> ke baare mein kya pata hai?"
          },
          options: [
            {
              en: "It keeps a reference and calls <code>Show</code> directly",
              hi: "वह reference रखता है और सीधे <code>Show</code> call करता है",
              hg: "Woh reference rakhta hai aur seedhe <code>Show</code> call karta hai"
            },
            {
              en: "It subscribes to an event on the console",
              hi: "वह console के event पर subscribe करता है",
              hg: "Woh console ke event par subscribe karta hai"
            },
            {
              en: "It inherits from <code>AgentConsole</code>",
              hi: "वह <code>AgentConsole</code> से inherit करता है",
              hg: "Woh <code>AgentConsole</code> se inherit karta hai"
            },
            {
              en: "Nothing: it only knows the hub interface",
              hi: "कुछ नहीं: वह सिर्फ़ hub का interface जानता है",
              hg: "Kuch nahi: woh sirf hub ka interface jaanta hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>That is the whole benefit: components depend on the hub, not on each other. Only the hub knows both sides.</p>",
            hi: "<p>पूरा फ़ायदा यही है: components hub पर निर्भर हैं, एक-दूसरे पर नहीं। दोनों तरफ़ सिर्फ़ hub को पता है।</p>",
            hg: "<p>Poora faayda yahi hai: components hub par nirbhar hain, ek-doosre par nahi. Dono taraf sirf hub ko pata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Mediator = a hub; components talk to the hub, not to each other.</li><li>The interaction rules live in one class.</li><li>Watch for a hub that turns into a god object, and skip it for two or three simple classes.</li></ul>",
          hi: "<ul><li>Mediator = एक hub; components hub से बात करते हैं, आपस में नहीं।</li><li>आपसी rules एक ही class में रहते हैं।</li><li>ध्यान रखो कि hub god object न बन जाए, और दो-तीन सीधी classes के लिए इसे मत लगाओ।</li></ul>",
          hg: "<ul><li>Mediator = ek hub; components hub se baat karte hain, aapas mein nahi.</li><li>Aapsi rules ek hi class mein rehte hain.</li><li>Dhyaan rakho ki hub god object na ban jaaye, aur do-teen seedhi classes ke liye ise mat lagao.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A hand-written Mediator: portal and agent console meet in SupportHub",
            hi: "हाथ से लिखा Mediator: portal और agent console, SupportHub में मिलते हैं",
            hg: "Haath se likha Mediator: portal aur agent console, SupportHub mein milte hain"
          },
          src: "var hub = new SupportHub();\nvar portal = new CustomerPortal(hub);\nvar agentConsole = new AgentConsole(hub);\nhub.Connect(portal, agentConsole);\n\nportal.Raise(501, \"Asha\", \"Router down\");\nagentConsole.Reply(501, \"Meena\", \"Restarted the router\");\n\npublic interface ISupportHub\n{\n    void TicketRaised(int ticketId, string customer, string issue);\n    void ReplySent(int ticketId, string text);\n}\n\n// Components know only the hub, never each other.\npublic sealed class CustomerPortal\n{\n    private readonly ISupportHub _hub;\n\n    public CustomerPortal(ISupportHub hub) => _hub = hub;\n\n    public void Raise(int ticketId, string customer, string issue)\n    {\n        Console.WriteLine($\"Portal: {customer} raised #{ticketId}\");\n        _hub.TicketRaised(ticketId, customer, issue);\n    }\n\n    public void ShowReply(int ticketId, string text) => Console.WriteLine($\"Portal: reply on #{ticketId} - {text}\");\n}\n\npublic sealed class AgentConsole\n{\n    private readonly ISupportHub _hub;\n\n    public AgentConsole(ISupportHub hub) => _hub = hub;\n\n    public void Show(int ticketId, string customer, string issue)\n        => Console.WriteLine($\"Console: new #{ticketId} from {customer}: {issue}\");\n\n    public void Reply(int ticketId, string agent, string text)\n    {\n        Console.WriteLine($\"Console: {agent} replied on #{ticketId}\");\n        _hub.ReplySent(ticketId, text);\n    }\n}\n\n// The Mediator: the interaction rules live here.\npublic sealed class SupportHub : ISupportHub\n{\n    private CustomerPortal? _portal;\n    private AgentConsole? _console;\n\n    public void Connect(CustomerPortal portal, AgentConsole console) => (_portal, _console) = (portal, console);\n\n    public void TicketRaised(int ticketId, string customer, string issue) => _console!.Show(ticketId, customer, issue);\n\n    public void ReplySent(int ticketId, string text) => _portal!.ShowReply(ticketId, text);\n}",
          check: "run",
          expected: "Portal: Asha raised #501\nConsole: new #501 from Asha: Router down\nConsole: Meena replied on #501\nPortal: reply on #501 - Restarted the router"
        }
      ]
    },
    {
      id: "chain-of-responsibility",
      depth: "short",
      title: {
        en: "Chain of Responsibility: escalation L1 to L2 to manager",
        hi: "Chain of Responsibility: escalation L1 से L2 से manager",
        hg: "Chain of Responsibility: escalation L1 se L2 se manager"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 7 sent a request to a hub that knew everyone. Here the sender knows only the <i>first</i> handler and each handler knows only the <i>next</i> one. This is the CRM escalation path: L1 support, then L2 engineer, then manager. It reuses the <code>Priority</code> idea from lesson 5 to decide who can handle a ticket.",
          hi: "पाठ 7 में request एक hub को गई थी जो सबको जानता था। यहाँ भेजने वाला सिर्फ़ <i>पहले</i> handler को जानता है और हर handler सिर्फ़ <i>अगले</i> को। यह CRM का escalation रास्ता है: L1 support, फिर L2 engineer, फिर manager। कौन ticket सँभालेगा यह तय करने के लिए पाठ 5 वाली <code>Priority</code> की बात फिर इस्तेमाल होती है।",
          hg: "Lesson 7 mein request ek hub ko gayi thi jo sabko jaanta tha. Yahan bhejne wala sirf <i>pehle</i> handler ko jaanta hai aur har handler sirf <i>agle</i> ko. Ye CRM ka escalation raasta hai: L1 support, phir L2 engineer, phir manager. Kaun ticket sambhalega ye tay karne ke liye lesson 5 wali <code>Priority</code> ki baat phir istemaal hoti hai."
        },
        what: {
          en: "<p><b>Chain of Responsibility</b> passes a request along a line of handlers. Each handler either handles it and stops, or passes it to the next. The sender does not know which handler will act.</p>",
          hi: "<p><b>Chain of Responsibility</b> में request handlers की एक कतार में आगे बढ़ती है। हर handler या तो उसे सँभालकर रुक जाता है, या अगले को दे देता है। भेजने वाले को नहीं पता कि कौन-सा handler काम करेगा।</p>",
          hg: "<p><b>Chain of Responsibility</b> mein request handlers ki ek qataar mein aage badhti hai. Har handler ya to use sambhalkar ruk jaata hai, ya agle ko de deta hai. Bhejne wale ko nahi pata ki kaunsa handler kaam karega.</p>"
        },
        why: {
          en: "<p>A low-priority ticket should not reach the manager, and a critical one should not sit with L1. A chain lets you reorder levels, add a director level or skip one without touching the sender or the other levels.</p>",
          hi: "<p>Low-priority ticket manager तक नहीं जाना चाहिए, और critical ticket L1 के पास नहीं अटकना चाहिए। Chain में आप levels का क्रम बदल सकते हो, director level जोड़ सकते हो या एक हटा सकते हो, भेजने वाले या बाकी levels को बदले बिना।</p>",
          hg: "<p>Low-priority ticket manager tak nahi jaana chahiye, aur critical ticket L1 ke paas nahi atakna chahiye. Chain mein aap levels ka kram badal sakte ho, director level jod sakte ho ya ek hata sakte ho, bhejne wale ya baaki levels ko badle bina.</p>"
        },
        analogy: {
          en: "<p>A leave or expense approval in an office: team lead first, then manager, then director. The first person with enough authority decides, and the request goes no further.</p>",
          hi: "<p>दफ़्तर में छुट्टी या खर्चे की मंज़ूरी: पहले team lead, फिर manager, फिर director। जिसके पास पहले पूरा अधिकार हो वही फ़ैसला करता है, और request आगे नहीं जाती।</p>",
          hg: "<p>Daftar mein chhutti ya kharche ki manzoori: pehle team lead, phir manager, phir director. Jiske paas pehle poora adhikaar ho wahi faisla karta hai, aur request aage nahi jaati.</p>"
        },
        lines: [
          {
            code: "level1.SetNext(new EscalationHandler(\"L2 engineer\", Priority.Medium))",
            note: {
              en: "Builds the chain: L1 to L2 to manager. The sender will only hold <code>level1</code>.",
              hi: "Chain यहाँ बनती है: L1 से L2 से manager। भेजने वाले के पास सिर्फ़ <code>level1</code> रहेगा।",
              hg: "Chain yahan banti hai: L1 se L2 se manager. Bhejne wale ke paas sirf <code>level1</code> rahega."
            }
          },
          {
            code: "private EscalationHandler? _next;",
            note: {
              en: "Each handler knows only the next one. The <code>?</code> means the last link has no next.",
              hi: "हर handler सिर्फ़ अगले को जानता है। <code>?</code> का मतलब: आख़िरी कड़ी का कोई अगला नहीं।",
              hg: "Har handler sirf agle ko jaanta hai. <code>?</code> ka matlab: aakhiri kadi ka koi agla nahi."
            }
          },
          {
            code: "if (priority <= _highest) return $\"#{ticketId} ({priority}) handled by {_who}\";",
            note: {
              en: "The decision. If this handler is able, it answers and <b>does not call</b> the next one: that is what stops the chain.",
              hi: "फ़ैसला यहाँ है। यह handler इसे सँभाल सकता हो तो जवाब देता है और अगले को <b>call नहीं करता</b>: यही chain को रोकता है।",
              hg: "Faisla yahan hai. Ye handler ise sambhal sakta ho to jawab deta hai aur agle ko <b>call nahi karta</b>: yahi chain ko rokta hai."
            }
          },
          {
            code: "return _next?.Handle(ticketId, priority) ?? $\"#{ticketId} ({priority}) no handler left\";",
            note: {
              en: "Otherwise pass it on. If there is no next link, return a clear \"nobody handled it\" result instead of a crash.",
              hi: "नहीं तो आगे बढ़ा दो। अगली कड़ी न हो तो crash की जगह साफ़ \"किसी ने नहीं सँभाला\" वाला result लौटाओ।",
              hg: "Nahi to aage badha do. Agli kadi na ho to crash ki jagah saaf \"kisi ne nahi sambhala\" wala result lautao."
            }
          },
          {
            code: "public EscalationHandler(string who, Priority highest) => (_who, _highest) = (who, highest);",
            note: {
              en: "Each level only states its name and its own limit. Adding a level means one more object and one <code>SetNext</code>.",
              hi: "हर level सिर्फ़ अपना नाम और अपनी सीमा बताता है। नया level जोड़ना मतलब एक और object और एक <code>SetNext</code>।",
              hg: "Har level sirf apna naam aur apni seema batata hai. Naya level jodna matlab ek aur object aur ek <code>SetNext</code>."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>No end-of-chain result: a request nobody can handle disappears silently or throws a <code>NullReferenceException</code>.</li><li>A chain where the order is accidental. Order is part of the design: document it and test it.</li><li>Mixing it up with Decorator: a decorator normally <i>always</i> calls the inner object; a chain link may stop the request.</li></ul>",
          hi: "<ul><li>चेन के अंत का कोई result न रखना: जिसे कोई न सँभाल सके वह request चुपचाप खो जाती है या <code>NullReferenceException</code> फेंकती है।</li><li>ऐसी chain जिसका क्रम बिना सोचे बन गया हो। क्रम design का हिस्सा है: उसे लिखो और test करो।</li><li>Decorator से गड़बड़ाना: decorator आम तौर पर <i>हमेशा</i> अंदर वाले को call करता है; chain की कड़ी request को रोक सकती है।</li></ul>",
          hg: "<ul><li>Chain ke ant ka koi result na rakhna: jise koi na sambhal sake woh request chupchaap kho jaati hai ya <code>NullReferenceException</code> phenkti hai.</li><li>Aisi chain jiska kram bina soche ban gaya ho. Kram design ka hissa hai: use likho aur test karo.</li><li>Decorator se gadbadaana: decorator aam taur par <i>hamesha</i> andar wale ko call karta hai; chain ki kadi request ko rok sakti hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>When the handler is picked at run time, steps are optional or re-orderable, or more than one step may act: escalation, approvals, validation steps. The ASP.NET Core middleware pipeline (Day 12) is a chain; the Deep Dive shows one in a few lines.</p>",
          hi: "<p>जब handler run time पर चुना जाता हो, steps optional हों या उनका क्रम बदल सके, या एक से ज़्यादा steps काम कर सकें: escalation, approvals, validation steps। ASP.NET Core का middleware pipeline (Day 12) एक chain है; Deep Dive में उसे कुछ lines में दिखाया है।</p>",
          hg: "<p>Jab handler run time par chuna jaata ho, steps optional hon ya unka kram badal sake, ya ek se zyada steps kaam kar saken: escalation, approvals, validation steps. ASP.NET Core ka middleware pipeline (Day 12) ek chain hai; Deep Dive mein use kuch lines mein dikhaya hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a <code>\"director\"</code> handler for <code>Critical</code> and put it after the manager. Then ticket 504 should print <code>#504 (Critical) handled by director</code>.</p>",
            hi: "<p><code>Critical</code> के लिए एक <code>\"director\"</code> handler जोड़ो और उसे manager के बाद लगाओ। तब ticket 504 पर <code>#504 (Critical) handled by director</code> print होना चाहिए।</p>",
            hg: "<p><code>Critical</code> ke liye ek <code>\"director\"</code> handler jodo aur use manager ke baad lagao. Tab ticket 504 par <code>#504 (Critical) handled by director</code> print hona chahiye.</p>"
          },
          hint: {
            en: "<p>Create one more <code>EscalationHandler(\"director\", Priority.Critical)</code> and add one more <code>SetNext</code>.</p>",
            hi: "<p>एक और <code>EscalationHandler(\"director\", Priority.Critical)</code> बनाओ और एक और <code>SetNext</code> जोड़ो।</p>",
            hg: "<p>Ek aur <code>EscalationHandler(\"director\", Priority.Critical)</code> banao aur ek aur <code>SetNext</code> jodo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: a director level",
              hi: "हल: director level",
              hg: "Solution: director level"
            },
            src: "var level1 = new EscalationHandler(\"L1 support\", Priority.Low);\nlevel1.SetNext(new EscalationHandler(\"manager\", Priority.High))\n      .SetNext(new EscalationHandler(\"director\", Priority.Critical));\n\nConsole.WriteLine(level1.Handle(504, Priority.Critical));\n\npublic enum Priority { Low, Medium, High, Critical }\n\npublic sealed class EscalationHandler\n{\n    private readonly string _who;\n    private readonly Priority _highest;\n    private EscalationHandler? _next;\n\n    public EscalationHandler(string who, Priority highest) => (_who, _highest) = (who, highest);\n\n    public EscalationHandler SetNext(EscalationHandler next)\n    {\n        _next = next;\n        return next;\n    }\n\n    public string Handle(int ticketId, Priority priority)\n    {\n        if (priority <= _highest) return $\"#{ticketId} ({priority}) handled by {_who}\";\n        return _next?.Handle(ticketId, priority) ?? $\"#{ticketId} ({priority}) no handler left\";\n    }\n}",
            check: "run",
            expected: "#504 (Critical) handled by director"
          }
        },
        quiz: {
          q: {
            en: "What makes the request stop at the manager for ticket 503 (High)?",
            hi: "Ticket 503 (High) के लिए request manager पर क्यों रुक जाती है?",
            hg: "Ticket 503 (High) ke liye request manager par kyon ruk jaati hai?"
          },
          options: [
            {
              en: "The sender checks the manager's limit first",
              hi: "भेजने वाला पहले manager की सीमा जाँचता है",
              hg: "Bhejne wala pehle manager ki seema jaanchta hai"
            },
            {
              en: "A <code>try/catch</code> catches the request at the manager",
              hi: "एक <code>try/catch</code> request को manager पर पकड़ लेता है",
              hg: "Ek <code>try/catch</code> request ko manager par pakad leta hai"
            },
            {
              en: "The manager handles it and does not call the next handler",
              hi: "Manager उसे सँभाल लेता है और अगले handler को call नहीं करता",
              hg: "Manager use sambhal leta hai aur agle handler ko call nahi karta"
            },
            {
              en: "The chain always stops after three handlers",
              hi: "Chain हमेशा तीन handlers के बाद रुकती है",
              hg: "Chain hamesha teen handlers ke baad rukti hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>L1 and L2 pass it on because the priority is above their limit. The manager can handle High, so it returns its answer and never calls <code>_next</code>.</p>",
            hi: "<p>L1 और L2 उसे आगे बढ़ा देते हैं क्योंकि priority उनकी सीमा से ऊपर है। Manager High सँभाल सकता है, इसलिए वह अपना जवाब लौटाता है और <code>_next</code> को कभी call नहीं करता।</p>",
            hg: "<p>L1 aur L2 use aage badha dete hain kyunki priority unki seema se upar hai. Manager High sambhal sakta hai, isliye woh apna jawab lautata hai aur <code>_next</code> ko kabhi call nahi karta.</p>"
          }
        },
        recap: {
          en: "<ul><li>Chain of Responsibility = handlers in a line; each handles the request or passes it on.</li><li>The sender knows only the first handler; a handler can stop the chain.</li><li>Order is part of the design, and the end of the chain needs a clear result.</li></ul>",
          hi: "<ul><li>Chain of Responsibility = handlers की कतार; हर एक request को सँभालता है या आगे बढ़ाता है।</li><li>भेजने वाला सिर्फ़ पहले handler को जानता है; कोई handler chain को रोक सकता है।</li><li>क्रम design का हिस्सा है, और chain के अंत के लिए साफ़ result चाहिए।</li></ul>",
          hg: "<ul><li>Chain of Responsibility = handlers ki qataar; har ek request ko sambhalta hai ya aage badhata hai.</li><li>Bhejne wala sirf pehle handler ko jaanta hai; koi handler chain ko rok sakta hai.</li><li>Kram design ka hissa hai, aur chain ke ant ke liye saaf result chahiye.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Escalation chain: L1 support, L2 engineer, manager",
            hi: "Escalation chain: L1 support, L2 engineer और manager",
            hg: "Escalation chain: L1 support, L2 engineer aur manager"
          },
          src: "var level1 = new EscalationHandler(\"L1 support\", Priority.Low);\nlevel1.SetNext(new EscalationHandler(\"L2 engineer\", Priority.Medium))\n      .SetNext(new EscalationHandler(\"manager\", Priority.High));\n\nforeach (var (ticketId, priority) in new[]\n{\n    (501, Priority.Low), (502, Priority.Medium), (503, Priority.High), (504, Priority.Critical)\n})\n{\n    Console.WriteLine(level1.Handle(ticketId, priority));\n}\n\npublic enum Priority { Low, Medium, High, Critical }\n\npublic sealed class EscalationHandler\n{\n    private readonly string _who;\n    private readonly Priority _highest;\n    private EscalationHandler? _next;\n\n    public EscalationHandler(string who, Priority highest) => (_who, _highest) = (who, highest);\n\n    // Returns the next handler so calls can be chained: a.SetNext(b).SetNext(c)\n    public EscalationHandler SetNext(EscalationHandler next)\n    {\n        _next = next;\n        return next;\n    }\n\n    // Handle it, or pass it on. Handling stops the chain.\n    public string Handle(int ticketId, Priority priority)\n    {\n        if (priority <= _highest) return $\"#{ticketId} ({priority}) handled by {_who}\";\n        return _next?.Handle(ticketId, priority) ?? $\"#{ticketId} ({priority}) no handler left\";\n    }\n}",
          check: "run",
          expected: "#501 (Low) handled by L1 support\n#502 (Medium) handled by L2 engineer\n#503 (High) handled by manager\n#504 (Critical) no handler left"
        }
      ]
    },
    {
      id: "structural-compare",
      depth: "detailed",
      title: {
        en: "Adapter vs Decorator vs Proxy vs Facade",
        hi: "Adapter, Decorator, Proxy, Facade में फ़र्क़",
        hg: "Adapter vs Decorator vs Proxy vs Facade mein farq"
      },
      body: {
        en: "<p>The first three are wrappers that hold a reference, so the class diagrams look alike. Tell them apart by <b>intent</b>:</p><ul><li><b>Adapter</b>: <i>changes</i> the interface so a class you cannot edit fits the one you want.</li><li><b>Decorator</b>: <i>keeps</i> the interface and <i>adds</i> behaviour. It is handed its inner object, and layers stack.</li><li><b>Proxy</b>: <i>keeps</i> the interface and <i>controls access</i>. It usually manages the real object's creation and lifetime.</li><li><b>Facade</b>: designs a <i>new, simpler</i> interface over <i>many</i> objects.</li></ul><p><b>Real .NET examples:</b> <code>BufferedStream</code>, <code>GZipStream</code> and <code>CryptoStream</code> each wrap a <code>Stream</code> and are a <code>Stream</code> (Decorator). <code>StreamReader</code> and <code>StreamWriter</code> adapt a <code>Stream</code> to a text API (Adapter). <code>ILogger</code> feels like a Facade: one <code>Log</code> call hides several providers. A typed <code>HttpClient</code> works like a remote proxy: callers use a method, the HTTP call is hidden.</p><p><b>TL angle:</b> in review, name the intent: \"this wrapper only changes the shape\" (Adapter), \"it adds logging\" (Decorator), \"it checks permission\" (Proxy).</p>",
        hi: "<p>पहले तीन ऐसे wrappers हैं जो एक reference रखते हैं, इसलिए उनके class diagrams एक जैसे दिखते हैं। उन्हें <b>मक़सद (intent)</b> से पहचानो:</p><ul><li><b>Adapter</b>: interface को <i>बदलता</i> है, ताकि जो class आप बदल नहीं सकते वह आपके चाहे interface में फ़िट हो।</li><li><b>Decorator</b>: interface <i>वही रखता</i> है और behaviour <i>जोड़ता</i> है। उसे अंदर वाला object दिया जाता है, और परतें एक पर एक लगती हैं।</li><li><b>Proxy</b>: interface <i>वही रखता</i> है और <i>पहुँच (access) control</i> करता है। वह अक्सर असली object बनाने और उसके जीवन को सँभालता है।</li><li><b>Facade</b>: <i>कई</i> objects के ऊपर एक <i>नया, आसान</i> interface बनाता है।</li></ul><p><b>.NET के असली उदाहरण:</b> <code>BufferedStream</code>, <code>GZipStream</code> और <code>CryptoStream</code> हर एक किसी <code>Stream</code> को लपेटता है और ख़ुद भी <code>Stream</code> है (Decorator)। <code>StreamReader</code> और <code>StreamWriter</code> एक <code>Stream</code> को text वाले API में बदलते हैं (Adapter)। <code>ILogger</code> Facade जैसा लगता है: एक <code>Log</code> call कई providers को छुपा लेता है। Typed <code>HttpClient</code> remote proxy जैसा काम करता है: caller method बुलाता है, HTTP call छुपी रहती है।</p><p><b>TL नज़रिया:</b> review में मक़सद का नाम लो: \"यह wrapper बस आकार बदलता है\" (Adapter), \"यह logging जोड़ता है\" (Decorator), \"यह permission जाँचता है\" (Proxy)।</p>",
        hg: "<p>Pehle teen aise wrappers hain jo ek reference rakhte hain, isliye unke class diagrams ek jaise dikhte hain. Unhe <b>maqsad (intent)</b> se pehchano:</p><ul><li><b>Adapter</b>: interface ko <i>badalta</i> hai, taaki jo class aap badal nahi sakte woh aapke chahe interface mein fit ho.</li><li><b>Decorator</b>: interface <i>wahi rakhta</i> hai aur behaviour <i>jodta</i> hai. Use andar wala object diya jaata hai, aur parten ek par ek lagti hain.</li><li><b>Proxy</b>: interface <i>wahi rakhta</i> hai aur <i>pahunch (access) control</i> karta hai. Woh aksar asli object banane aur uske jeevan ko sambhalta hai.</li><li><b>Facade</b>: <i>kai</i> objects ke upar ek <i>naya, aasaan</i> interface banata hai.</li></ul><p><b>.NET ke asli udaharan:</b> <code>BufferedStream</code>, <code>GZipStream</code> aur <code>CryptoStream</code> har ek kisi <code>Stream</code> ko lapetta hai aur khud bhi <code>Stream</code> hai (Decorator). <code>StreamReader</code> aur <code>StreamWriter</code> ek <code>Stream</code> ko text wale API mein badalte hain (Adapter). <code>ILogger</code> Facade jaisa lagta hai: ek <code>Log</code> call kai providers ko chhupa leta hai. Typed <code>HttpClient</code> remote proxy jaisa kaam karta hai: caller method bulata hai, HTTP call chhupi rehti hai.</p><p><b>TL nazariya:</b> review mein maqsad ka naam lo: \"ye wrapper bas aakaar badalta hai\" (Adapter), \"ye logging jodta hai\" (Decorator), \"ye permission jaanchta hai\" (Proxy).</p>"
      },
      code: [
        {
          caption: {
            en: "Built-in Decorator (GZipStream) with a StreamReader/StreamWriter adapter on top (runs)",
            hi: "Built-in Decorator (GZipStream) और ऊपर StreamReader/StreamWriter adapter (run होता है)",
            hg: "Built-in Decorator (GZipStream) aur upar StreamReader/StreamWriter adapter (run hota hai)"
          },
          check: "run",
          expected: "Namaste, Tech Lead interview!",
          src: "using System.IO.Compression;\n\nvar text = \"Namaste, Tech Lead interview!\";\nusing var raw = new MemoryStream();\n\n// Write: StreamWriter -> GZipStream -> MemoryStream (each wraps the next).\nusing (var gzip = new GZipStream(raw, CompressionMode.Compress, leaveOpen: true))\nusing (var writer = new StreamWriter(gzip))\n{\n    writer.Write(text);\n}\n\n// Read it back: StreamReader -> GZipStream -> MemoryStream.\nraw.Position = 0;\nusing var unzip = new GZipStream(raw, CompressionMode.Decompress);\nusing var reader = new StreamReader(unzip);\nConsole.WriteLine(reader.ReadToEnd());"
        }
      ]
    },
    {
      id: "decorating-with-di",
      depth: "detailed",
      title: {
        en: "Decorating with DI (and Scrutor)",
        hi: "DI के साथ decorate करना (और Scrutor)",
        hg: "DI ke saath decorate karna (aur Scrutor)"
      },
      body: {
        en: "<ul><li>The built-in container has no decorator feature. Register the inner type, then register the interface with a factory that wraps it (first snippet).</li><li>A library such as <b>Scrutor</b> adds a <code>Decorate</code> helper (second snippet). It is convenient but optional: the hand-written version does the same in a few lines.</li><li><b>Lifetimes:</b> a decorator must not outlive what it wraps. A singleton decorator around a scoped service captures a stale instance (a \"captive dependency\"). Match the lifetime or make it shorter.</li><li><b>Keyed services</b> (.NET 8+, Day 9) choose between implementations (see the Strategy section). They are not for wrapping.</li></ul>",
        hi: "<ul><li>Built-in container में decorator का कोई feature नहीं है। अंदर वाला type register करो, फिर interface को ऐसी factory से register करो जो उसे लपेटे (पहला snippet)।</li><li><b>Scrutor</b> जैसी library <code>Decorate</code> helper जोड़ती है (दूसरा snippet)। यह आसान है पर ज़रूरी नहीं: हाथ से लिखा रूप कुछ lines में वही करता है।</li><li><b>Lifetimes:</b> decorator को उससे ज़्यादा नहीं जीना चाहिए जिसे वह लपेटता है। Scoped service के ऊपर singleton decorator एक पुराना instance पकड़ लेता है (\"captive dependency\")। Lifetime बराबर रखो या छोटी।</li><li><b>Keyed services</b> (.NET 8+, Day 9) implementations में से चुनने के लिए हैं (Strategy वाला हिस्सा देखो)। वे लपेटने के लिए नहीं हैं।</li></ul>",
        hg: "<ul><li>Built-in container mein decorator ka koi feature nahi hai. Andar wala type register karo, phir interface ko aisi factory se register karo jo use lapete (pehla snippet).</li><li><b>Scrutor</b> jaisi library <code>Decorate</code> helper jodti hai (doosra snippet). Ye aasaan hai par zaroori nahi: haath se likha roop kuch lines mein wahi karta hai.</li><li><b>Lifetimes:</b> decorator ko usse zyada nahi jeena chahiye jise woh lapetta hai. Scoped service ke upar singleton decorator ek purana instance pakad leta hai (\"captive dependency\"). Lifetime barabar rakho ya chhoti.</li><li><b>Keyed services</b> (.NET 8+, Day 9) implementations mein se chunne ke liye hain (Strategy wala hissa dekho). Woh lapetne ke liye nahi hain.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "Decorator registered by hand in DI (runs)",
            hi: "DI में हाथ से register किया Decorator (run होता है)",
            hg: "DI mein haath se register kiya Decorator (run hota hai)"
          },
          check: "run",
          packages: [
            "Microsoft.Extensions.DependencyInjection"
          ],
          expected: "sql read 1\nItem 1\nItem 1",
          src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddSingleton<SqlRepo>();\n// Manual decoration: IRepo resolves to the cached wrapper around SqlRepo.\nservices.AddSingleton<IRepo>(sp => new CachedRepo(sp.GetRequiredService<SqlRepo>()));\nusing var provider = services.BuildServiceProvider();\n\nvar repo = provider.GetRequiredService<IRepo>();\nConsole.WriteLine(repo.Get(1));\nConsole.WriteLine(repo.Get(1));\n\npublic interface IRepo { string Get(int id); }\n\npublic sealed class SqlRepo : IRepo\n{\n    public string Get(int id)\n    {\n        Console.WriteLine($\"sql read {id}\");\n        return $\"Item {id}\";\n    }\n}\n\npublic sealed class CachedRepo : IRepo\n{\n    private readonly IRepo _inner;\n    private readonly Dictionary<int, string> _cache = new();\n\n    public CachedRepo(IRepo inner) => _inner = inner;\n\n    public string Get(int id)\n    {\n        if (!_cache.TryGetValue(id, out var value))\n            _cache[id] = value = _inner.Get(id);\n        return value;\n    }\n}"
        },
        {
          caption: {
            en: "With Scrutor (NuGet package, not compiled here)",
            hi: "Scrutor के साथ (NuGet package, यहाँ compile नहीं होता)",
            hg: "Scrutor ke saath (NuGet package, yahan compile nahi hota)"
          },
          src: "// dotnet add package Scrutor\nservices.AddSingleton<IRepo, SqlRepo>();\nservices.Decorate<IRepo, CachedRepo>();   // CachedRepo takes IRepo in its constructor",
          check: "none"
        }
      ]
    },
    {
      id: "dispatchproxy-ef",
      depth: "detailed",
      title: {
        en: "Proxies in .NET: DispatchProxy and EF Core",
        hi: ".NET में Proxies: DispatchProxy और EF Core",
        hg: ".NET mein Proxies: DispatchProxy aur EF Core"
      },
      body: {
        en: "<ul><li><b>EF Core lazy-loading proxies</b> (Day 5) are subclasses generated at run time. That is why navigation properties must be <code>virtual</code>.</li><li><b><code>DispatchProxy</code></b> builds a proxy for an interface at run time: one <code>Invoke</code> method receives every call (snippet). It is handy for cross-cutting code that must cover many methods.</li><li><b>Cost:</b> it uses reflection, so avoid it on a hot path. For a few methods, a hand-written proxy or Decorator is faster and easier to debug.</li></ul>",
        hi: "<ul><li><b>EF Core के lazy-loading proxies</b> (Day 5) run time पर बनी subclasses हैं। इसीलिए navigation properties <code>virtual</code> होनी चाहिए।</li><li><b><code>DispatchProxy</code></b> run time पर किसी interface का proxy बनाता है: एक <code>Invoke</code> method हर call पाता है (snippet)। जब cross-cutting code को कई methods कवर करने हों तब काम आता है।</li><li><b>क़ीमत:</b> यह reflection इस्तेमाल करता है, इसलिए बार-बार चलने वाले रास्ते (hot path) पर न लगाओ। कुछ ही methods हों तो हाथ से लिखा proxy या Decorator तेज़ और debug करने में आसान है।</li></ul>",
        hg: "<ul><li><b>EF Core ke lazy-loading proxies</b> (Day 5) run time par bani subclasses hain. Isiliye navigation properties <code>virtual</code> honi chahiye.</li><li><b><code>DispatchProxy</code></b> run time par kisi interface ka proxy banata hai: ek <code>Invoke</code> method har call paata hai (snippet). Jab cross-cutting code ko kai methods cover karne hon tab kaam aata hai.</li><li><b>Keemat:</b> ye reflection istemaal karta hai, isliye baar-baar chalne wale raaste (hot path) par na lagao. Kuch hi methods hon to haath se likha proxy ya Decorator tez aur debug karne mein aasaan hai.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "Dynamic proxy with DispatchProxy (runs)",
            hi: "DispatchProxy से dynamic proxy (run होता है)",
            hg: "DispatchProxy se dynamic proxy (run hota hai)"
          },
          check: "run",
          expected: "calling Greet\nHi Asha",
          src: "using System.Reflection;\n\nvar greeter = LoggingProxy<IGreeter>.Wrap(new Greeter());\nConsole.WriteLine(greeter.Greet(\"Asha\"));\n\npublic interface IGreeter { string Greet(string name); }\n\npublic sealed class Greeter : IGreeter\n{\n    public string Greet(string name) => $\"Hi {name}\";\n}\n\n// DispatchProxy builds the proxy class at runtime: one Invoke for every method.\npublic class LoggingProxy<T> : DispatchProxy where T : class\n{\n    private T _target = null!;\n\n    public static T Wrap(T target)\n    {\n        var proxy = Create<T, LoggingProxy<T>>();\n        ((LoggingProxy<T>)(object)proxy)._target = target;\n        return proxy;\n    }\n\n    protected override object? Invoke(MethodInfo? targetMethod, object?[]? args)\n    {\n        Console.WriteLine($\"calling {targetMethod!.Name}\");\n        return targetMethod.Invoke(_target, args);\n    }\n}"
        }
      ]
    },
    {
      id: "strategy-keyed-di",
      depth: "detailed",
      title: {
        en: "Strategy with DI, delegates and State",
        hi: "DI, delegates और State के साथ Strategy",
        hg: "DI, delegates aur State ke saath Strategy"
      },
      body: {
        en: "<ul><li><b>Strategy in .NET:</b> an <code>IComparer&lt;T&gt;</code> passed to <code>Sort</code>, a <code>Comparison&lt;T&gt;</code> lambda, a <code>Func</code> you inject, and DI itself. A single-method strategy is often just a delegate (last line of the snippet).</li><li><b>Keyed services</b> (.NET 8+, Day 9): register each strategy with a key and resolve by key. Keep that lookup in the composition root, not in business code.</li><li><b>Strategy vs State:</b> same class diagram, different intent. The <i>client</i> picks a Strategy and it usually stays. A State object is swapped by the context as it moves (Placed to Paid to Shipped), and states often trigger the moves themselves.</li></ul>",
        hi: "<ul><li><b>.NET में Strategy:</b> <code>Sort</code> को दिया गया <code>IComparer&lt;T&gt;</code>, एक <code>Comparison&lt;T&gt;</code> lambda, आपका inject किया <code>Func</code>, और DI ख़ुद। एक-method वाली strategy अक्सर बस एक delegate होती है (snippet की आख़िरी line)।</li><li><b>Keyed services</b> (.NET 8+, Day 9): हर strategy को एक key से register करो और key से निकालो। यह lookup composition root में रखो, business code में नहीं।</li><li><b>Strategy vs State:</b> class diagram वही, मक़सद अलग। Strategy <i>client</i> चुनता है और वह अक्सर वही रहती है। State object को context आगे बढ़ते हुए बदलता है (Placed से Paid से Shipped), और states अक्सर ख़ुद बदलाव करवाती हैं।</li></ul>",
        hg: "<ul><li><b>.NET mein Strategy:</b> <code>Sort</code> ko diya gaya <code>IComparer&lt;T&gt;</code>, ek <code>Comparison&lt;T&gt;</code> lambda, aapka inject kiya <code>Func</code>, aur DI khud. Ek-method wali strategy aksar bas ek delegate hoti hai (snippet ki aakhiri line).</li><li><b>Keyed services</b> (.NET 8+, Day 9): har strategy ko ek key se register karo aur key se nikalo. Ye lookup composition root mein rakho, business code mein nahi.</li><li><b>Strategy vs State:</b> class diagram wahi, maqsad alag. Strategy <i>client</i> chunta hai aur woh aksar wahi rehti hai. State object ko context aage badhte hue badalta hai (Placed se Paid se Shipped), aur states aksar khud badlaav karwati hain.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "Strategy: keyed DI services, a Func lookup and a delegate (runs)",
            hi: "Strategy: keyed DI services, Func lookup और delegate (run होता है)",
            hg: "Strategy: keyed DI services, Func lookup aur delegate (run hota hai)"
          },
          check: "run",
          packages: [
            "Microsoft.Extensions.DependencyInjection"
          ],
          expected: "900\n1000\n950",
          src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddKeyedSingleton<IDiscount, FestivalDiscount>(\"festival\");\nservices.AddKeyedSingleton<IDiscount, NoDiscount>(\"none\");\n// Runtime choice: the lookup lives here (composition root), not in business code.\nservices.AddSingleton<Func<string, IDiscount>>(sp => key => sp.GetRequiredKeyedService<IDiscount>(key));\nservices.AddSingleton<Checkout>();\nusing var provider = services.BuildServiceProvider();\n\nvar checkout = provider.GetRequiredService<Checkout>();\nConsole.WriteLine(checkout.Total(\"festival\", 1000m));\nConsole.WriteLine(checkout.Total(\"none\", 1000m));\n\n// A strategy can also be just a delegate.\nFunc<decimal, decimal> flat50 = price => price - 50m;\nConsole.WriteLine(flat50(1000m));\n\npublic interface IDiscount { decimal Apply(decimal price); }\n\npublic sealed class FestivalDiscount : IDiscount\n{\n    public decimal Apply(decimal price) => price - price / 10m;   // 10% off\n}\n\npublic sealed class NoDiscount : IDiscount\n{\n    public decimal Apply(decimal price) => price;\n}\n\npublic sealed class Checkout\n{\n    private readonly Func<string, IDiscount> _pick;\n\n    public Checkout(Func<string, IDiscount> pick) => _pick = pick;\n\n    public decimal Total(string discountKey, decimal price) => _pick(discountKey).Apply(price);\n}"
        }
      ]
    },
    {
      id: "observer-iobservable",
      depth: "detailed",
      title: {
        en: "Observer with IObservable and safer events",
        hi: "IObservable के साथ Observer और event की बारीकियाँ",
        hg: "IObservable ke saath Observer aur event ki baarikiyan"
      },
      body: {
        en: "<ul><li><b><code>IObservable&lt;T&gt;</code> / <code>IObserver&lt;T&gt;</code></b> (in the BCL) are the stream-style Observer. <code>Subscribe</code> returns an <code>IDisposable</code>; disposing it unsubscribes (snippet). The Reactive Extensions (Rx) library adds operators on top; it is a separate NuGet package.</li><li><b>event vs <code>IObservable</code>:</b> an <code>event</code> is simple and fine for in-process notifications. Use <code>IObservable</code> when you need a stream with completion and error signals, or operators such as filtering and throttling.</li><li><b>Isolating a failing subscriber:</b> a plain <code>Invoke</code> stops at the first handler that throws. If every subscriber must get its turn, loop over <code>GetInvocationList()</code> and wrap each call in <code>try/catch</code>.</li><li><b>Raising safely:</b> <code>TicketClosed?.Invoke(...)</code> reads the event field once, so a subscriber removing itself on another thread cannot cause a <code>NullReferenceException</code> between the check and the call.</li><li><b>TL angle:</b> for cross-process work (email, billing in another service), publish to a message broker, ideally through an outbox table saved in the same transaction, so a crash does not lose the event.</li></ul>",
        hi: "<ul><li><b><code>IObservable&lt;T&gt;</code> / <code>IObserver&lt;T&gt;</code></b> (BCL में) stream वाला Observer हैं। <code>Subscribe</code> एक <code>IDisposable</code> लौटाता है; उसे dispose करने से unsubscribe हो जाता है (snippet)। Reactive Extensions (Rx) library इनके ऊपर operators जोड़ती है; वह अलग NuGet package है।</li><li><b>event vs <code>IObservable</code>:</b> <code>event</code> सरल है और in-process सूचनाओं के लिए ठीक। जब completion और error के संकेतों वाली stream चाहिए, या filtering और throttling जैसे operators, तब <code>IObservable</code> लो।</li><li><b>Fail होने वाले subscriber को अलग रखना:</b> सीधा <code>Invoke</code> पहले exception फेंकने वाले handler पर रुक जाता है। अगर हर subscriber की बारी आनी ज़रूरी है, तो <code>GetInvocationList()</code> पर loop चलाओ और हर call को <code>try/catch</code> में रखो।</li><li><b>सुरक्षित raise:</b> <code>TicketClosed?.Invoke(...)</code> event field को एक ही बार पढ़ता है, इसलिए अगर दूसरे thread पर कोई subscriber ख़ुद को हटा दे, तो check और call के बीच <code>NullReferenceException</code> नहीं आता।</li><li><b>TL नज़रिया:</b> अलग process वाले काम (दूसरी service में email, billing) के लिए message broker पर publish करो, अच्छा हो तो उसी transaction में save हुई outbox table के ज़रिए, ताकि crash होने पर event न खोए।</li></ul>",
        hg: "<ul><li><b><code>IObservable&lt;T&gt;</code> / <code>IObserver&lt;T&gt;</code></b> (BCL mein) stream wala Observer hain. <code>Subscribe</code> ek <code>IDisposable</code> lautata hai; use dispose karne se unsubscribe ho jaata hai (snippet). Reactive Extensions (Rx) library inke upar operators jodti hai; woh alag NuGet package hai.</li><li><b>event vs <code>IObservable</code>:</b> <code>event</code> saral hai aur in-process soochnaon ke liye theek. Jab completion aur error ke sanketon wali stream chahiye, ya filtering aur throttling jaise operators, tab <code>IObservable</code> lo.</li><li><b>Fail hone wale subscriber ko alag rakhna:</b> seedha <code>Invoke</code> pehle exception phenkne wale handler par ruk jaata hai. Agar har subscriber ki baari aani zaroori hai, to <code>GetInvocationList()</code> par loop chalao aur har call ko <code>try/catch</code> mein rakho.</li><li><b>Surakshit raise:</b> <code>TicketClosed?.Invoke(...)</code> event field ko ek hi baar padhta hai, isliye agar doosre thread par koi subscriber khud ko hata de, to check aur call ke beech <code>NullReferenceException</code> nahi aata.</li><li><b>TL nazariya:</b> alag process wale kaam (doosri service mein email, billing) ke liye message broker par publish karo, achha ho to usi transaction mein save hui outbox table ke zariye, taaki crash hone par event na khoye.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "Observer with IObservable&lt;T&gt; and IDisposable unsubscribe (runs)",
            hi: "IObservable&lt;T&gt; और IDisposable unsubscribe से Observer (run होता है)",
            hg: "IObservable&lt;T&gt; aur IDisposable unsubscribe se Observer (run hota hai)"
          },
          check: "run",
          expected: "A got 100\nA got 101\nB got 101\ndone",
          src: "var feed = new PriceFeed();\n\nusing (feed.Subscribe(new Printer(\"A\")))\n{\n    feed.Publish(100);\n    using var b = feed.Subscribe(new Printer(\"B\"));\n    feed.Publish(101);\n}                                   // both subscriptions disposed here\n\nfeed.Publish(102);\nConsole.WriteLine(\"done\");\n\npublic sealed class PriceFeed : IObservable<int>\n{\n    private readonly List<IObserver<int>> _observers = new();\n\n    public IDisposable Subscribe(IObserver<int> observer)\n    {\n        _observers.Add(observer);\n        return new Unsubscriber(() => _observers.Remove(observer));\n    }\n\n    public void Publish(int price)\n    {\n        foreach (var observer in _observers.ToArray()) observer.OnNext(price);\n    }\n}\n\npublic sealed class Unsubscriber : IDisposable\n{\n    private readonly Action _onDispose;\n\n    public Unsubscriber(Action onDispose) => _onDispose = onDispose;\n\n    public void Dispose() => _onDispose();\n}\n\npublic sealed class Printer : IObserver<int>\n{\n    private readonly string _name;\n\n    public Printer(string name) => _name = name;\n\n    public void OnNext(int value) => Console.WriteLine($\"{_name} got {value}\");\n    public void OnError(Exception error) { }\n    public void OnCompleted() { }\n}"
        }
      ]
    },
    {
      id: "chain-middleware",
      depth: "detailed",
      title: {
        en: "Chain in .NET: middleware, and Mediator vs MediatR",
        hi: ".NET में Chain: middleware, और Mediator vs MediatR",
        hg: ".NET mein Chain: middleware, aur Mediator vs MediatR"
      },
      body: {
        en: "<ul><li><b>Middleware is a chain.</b> In the ASP.NET Core pipeline (Day 12) each middleware gets <code>next</code>, can run code before and after it, or short-circuit by not calling it (snippet). <code>HttpClient</code> <code>DelegatingHandler</code>s form the same kind of pipeline around the HTTP call (<code>AddHttpMessageHandler</code>; the first registered is the outermost).</li><li><b>Order is design:</b> authentication before authorization, exception handling outermost. Document the order, and test that a short-circuit really skips the later links.</li><li><b>MediatR:</b> in-process request/handler dispatchers are the Mediator idea, and MediatR is one popular library. It is optional, and plain method calls are often enough. Check its current licence terms before adopting it in a company.</li></ul>",
        hi: "<ul><li><b>Middleware एक chain है।</b> ASP.NET Core pipeline (Day 12) में हर middleware को <code>next</code> मिलता है; वह उसके पहले और बाद में code चला सकता है, या उसे call न करके pipeline रोक सकता है (snippet)। <code>HttpClient</code> के <code>DelegatingHandler</code>s भी HTTP call के चारों ओर ऐसा ही pipeline बनाते हैं (<code>AddHttpMessageHandler</code>; पहला register हुआ सबसे बाहरी होता है)।</li><li><b>क्रम ही design है:</b> authentication, authorization से पहले; exception handling सबसे बाहर। क्रम लिखो, और test करो कि short-circuit सच में बाद की कड़ियाँ छोड़ता है।</li><li><b>MediatR:</b> in-process request/handler dispatchers Mediator की ही सोच हैं, और MediatR एक लोकप्रिय library है। यह ज़रूरी नहीं, और अक्सर सीधे method calls काफ़ी होते हैं। किसी company में अपनाने से पहले उसकी मौजूदा licence शर्तें देखो।</li></ul>",
        hg: "<ul><li><b>Middleware ek chain hai.</b> ASP.NET Core pipeline (Day 12) mein har middleware ko <code>next</code> milta hai; woh uske pehle aur baad mein code chala sakta hai, ya use call na karke pipeline rok sakta hai (snippet). <code>HttpClient</code> ke <code>DelegatingHandler</code>s bhi HTTP call ke chaaron or aisa hi pipeline banate hain (<code>AddHttpMessageHandler</code>; pehla register hua sabse bahari hota hai).</li><li><b>Kram hi design hai:</b> authentication, authorization se pehle; exception handling sabse bahar. Kram likho, aur test karo ki short-circuit sach mein baad ki kadiyan chhodta hai.</li><li><b>MediatR:</b> in-process request/handler dispatchers Mediator ki hi soch hain, aur MediatR ek lokpriya library hai. Ye zaroori nahi, aur aksar seedhe method calls kaafi hote hain. Kisi company mein apnane se pehle uski maujooda licence shartein dekho.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "Middleware-style pipeline with a short-circuit (runs)",
            hi: "Short-circuit वाली middleware-style pipeline (run होता है)",
            hg: "Short-circuit wali middleware-style pipeline (run hota hai)"
          },
          check: "run",
          expected: "log in: /home\nlog out: 200 OK for /home\n200 OK for /home\nlog in: /secret\nlog out: 401 Unauthorized\n401 Unauthorized",
          src: "Handler endpoint = request => $\"200 OK for {request}\";\n\nMiddleware logging = next => request =>\n{\n    Console.WriteLine($\"log in: {request}\");\n    var response = next(request);\n    Console.WriteLine($\"log out: {response}\");\n    return response;\n};\n\n// Like authorization middleware: it can end the request early.\nMiddleware authz = next => request =>\n    request.Contains(\"secret\") ? \"401 Unauthorized\"   // short-circuit: next is never called\n                               : next(request);\n\n// Build the pipeline from the end: first registered = outermost.\nMiddleware[] registered = { logging, authz };\nvar pipeline = endpoint;\nfor (var i = registered.Length - 1; i >= 0; i--)\n    pipeline = registered[i](pipeline);\n\nConsole.WriteLine(pipeline(\"/home\"));\nConsole.WriteLine(pipeline(\"/secret\"));\n\ndelegate string Handler(string request);\ndelegate Handler Middleware(Handler next);"
        }
      ]
    },
    {
      id: "patterns-tl-view",
      depth: "detailed",
      title: {
        en: "TL view: choosing and naming patterns",
        hi: "TL नज़रिया: patterns चुनना और उनका नाम लेना",
        hg: "TL nazariya: patterns chunna aur unka naam lena"
      },
      body: {
        en: "<ul><li><b>Where each shows up in a Web API:</b> middleware = Chain; <code>DelegatingHandler</code> = Chain or Decorator around <code>HttpClient</code>; logging and caching wrappers = Decorator; SDK wrappers in infrastructure = Adapter; an application service = Facade; payment or discount selection = Strategy; domain events or <code>event</code>s = Observer; in-process request handlers = Mediator.</li><li><b>Ask first:</b> \"what changes independently here?\" before adding a pattern. Prefer the simplest thing (a delegate, a method, DI), and introduce the named pattern when the second or third variation arrives.</li><li><b>Name it in the review:</b> a pattern is a shared vocabulary. \"This is an Adapter, keep vendor types out\" says more than a paragraph.</li><li><b>Over-engineering test:</b> if you cannot name the pain a pattern removes (duplicated cross-cutting code, a switch growing each sprint, vendor types leaking in), do not add it. An interface plus one implementation plus a wrapper plus a factory for a single behaviour slows the team.</li></ul>",
        hi: "<ul><li><b>Web API में हर pattern कहाँ दिखता है:</b> middleware = Chain; <code>DelegatingHandler</code> = <code>HttpClient</code> के चारों ओर Chain या Decorator; logging और caching wrappers = Decorator; infrastructure में SDK wrappers = Adapter; application service = Facade; payment या discount का चुनाव = Strategy; domain events या <code>event</code>s = Observer; in-process request handlers = Mediator।</li><li><b>पहले पूछो:</b> pattern जोड़ने से पहले \"यहाँ क्या अलग से बदलता है?\" पहले सबसे सरल चीज़ (delegate, method, DI) लो, और नामी pattern तब लाओ जब दूसरा या तीसरा रूप आए।</li><li><b>Review में नाम लो:</b> pattern पूरी team की एक common भाषा है। \"यह Adapter है, vendor के types बाहर रखो\" पूरे पैराग्राफ़ से ज़्यादा कहता है।</li><li><b>Over-engineering की जाँच:</b> अगर आप उस तकलीफ़ का नाम नहीं ले सकते जो pattern हटाता है (दोहराया cross-cutting code, हर sprint बढ़ता switch, अंदर घुसते vendor types), तो उसे मत जोड़ो। एक ही behaviour के लिए interface, एक implementation, एक wrapper और एक factory टीम को धीमा करते हैं।</li></ul>",
        hg: "<ul><li><b>Web API mein har pattern kahan dikhta hai:</b> middleware = Chain; <code>DelegatingHandler</code> = <code>HttpClient</code> ke chaaron or Chain ya Decorator; logging aur caching wrappers = Decorator; infrastructure mein SDK wrappers = Adapter; application service = Facade; payment ya discount ka chunaav = Strategy; domain events ya <code>event</code>s = Observer; in-process request handlers = Mediator.</li><li><b>Pehle poochho:</b> pattern jodne se pehle \"yahan kya alag se badalta hai?\" Pehle sabse saral cheez (delegate, method, DI) lo, aur naami pattern tab lao jab doosra ya teesra roop aaye.</li><li><b>Review mein naam lo:</b> pattern poori team ki ek common bhasha hai. \"Ye Adapter hai, vendor ke types bahar rakho\" poore paragraph se zyada kehta hai.</li><li><b>Over-engineering ki jaanch:</b> agar aap us taklif ka naam nahi le sakte jo pattern hataata hai (dohraya cross-cutting code, har sprint badhta switch, andar ghuste vendor types), to use mat jodo. Ek hi behaviour ke liye interface, ek implementation, ek wrapper aur ek factory team ko dheema karte hain.</li></ul>"
      }
    }
  ],
  qa: [
    {
      id: "decorator-vs-proxy-vs-adapter",
      depth: "short",
      q: "Decorator, Proxy and Adapter all wrap an object. What is the difference?",
      answer: "The shape is the same; the intent differs. Adapter changes the interface, Decorator adds behaviour behind the same interface, and Proxy controls access to the real object behind the same interface.",
      meaning: {
        hi: "Shape एक है, intent अलग। Adapter interface बदलता है, Decorator उसी interface के पीछे behaviour जोड़ता है, और Proxy उसी interface के पीछे असली object का access control करता है।",
        hg: "Shape ek hai, intent alag. Adapter interface badalta hai, Decorator usi interface ke peeche behaviour jodta hai, aur Proxy usi interface ke peeche asli object ka access control karta hai."
      },
      explain: {
        en: "<ul>\n<li><b>Adapter:</b> client expects <code>ISmsSender</code>, vendor gives <code>Dispatch(string[], string, int)</code>. The adapter translates. Different interface in and out.</li>\n<li><b>Decorator:</b> <code>IPriceService</code> in, <code>IPriceService</code> out, plus logging or caching. The caller builds the stack, and layers are combinable.</li>\n<li><b>Proxy:</b> same interface, but the proxy decides <i>whether/when</i> the real object is created or called (lazy, permission, remote).</li>\n<li>Quick test: \"Am I changing the interface? Adding a feature? Guarding access?\"</li>\n</ul>\n<p>Follow-up: \"Can a class be two of these?\" — yes, a caching proxy and a caching decorator look almost the same; the label follows the main intent.</p>",
        hi: "<ul>\n<li><b>Adapter:</b> client को <code>ISmsSender</code> चाहिए, vendor देता है <code>Dispatch(string[], string, int)</code>। Adapter translate करता है। अंदर और बाहर अलग interface।</li>\n<li><b>Decorator:</b> <code>IPriceService</code> अंदर, <code>IPriceService</code> बाहर, ऊपर से logging या caching। Stack caller बनाता है, layers मिलाई जा सकती हैं।</li>\n<li><b>Proxy:</b> वही interface, पर proxy तय करता है कि <i>असली object use होगा या नहीं, और कब</i> (lazy, permission, remote)।</li>\n<li>Quick test: \"क्या मैं interface बदल रहा हूँ? Feature जोड़ रहा हूँ? Access guard कर रहा हूँ?\"</li>\n</ul>\n<p>Follow-up: \"क्या एक class इनमें से दो हो सकती है?\" — हाँ, caching proxy और caching decorator लगभग एक जैसे दिखते हैं; label मुख्य intent से तय होता है।</p>",
        hg: "<ul>\n<li><b>Adapter:</b> client ko <code>ISmsSender</code> chahiye, vendor deta hai <code>Dispatch(string[], string, int)</code>. Adapter translate karta hai. Andar aur bahar alag interface.</li>\n<li><b>Decorator:</b> <code>IPriceService</code> andar, <code>IPriceService</code> bahar, upar se logging ya caching. Stack caller banata hai, layers milayi ja sakti hain.</li>\n<li><b>Proxy:</b> wahi interface, par proxy tay karta hai ki <i>asli object use hoga ya nahi, aur kab</i> (lazy, permission, remote).</li>\n<li>Quick test: \"Kya main interface badal raha hoon? Feature jod raha hoon? Access guard kar raha hoon?\"</li>\n</ul>\n<p>Follow-up: \"Kya ek class inmein se do ho sakti hai?\" — haan, caching proxy aur caching decorator lagbhag ek jaise dikhte hain; label mukhya intent se tay hota hai.</p>"
      }
    },
    {
      id: "decorator-dotnet-example",
      depth: "short",
      q: "Where do you see the Decorator pattern inside .NET itself?",
      answer: "Stream classes: GZipStream, BufferedStream and CryptoStream each wrap another Stream and are a Stream themselves, so they stack. DelegatingHandler and DI cache or logging wrappers are other examples.",
      meaning: {
        hi: "Stream classes: GZipStream, BufferedStream और CryptoStream हर एक दूसरे Stream को wrap करता है और खुद भी Stream है, इसलिए stack होते हैं। DelegatingHandler और DI के cache या logging wrappers और उदाहरण हैं।",
        hg: "Stream classes: GZipStream, BufferedStream aur CryptoStream har ek doosre Stream ko wrap karta hai aur khud bhi Stream hai, isliye stack hote hain. DelegatingHandler aur DI ke cache ya logging wrappers aur udaharan hain."
      },
      explain: {
        en: "<ul>\n<li><code>new StreamWriter(new GZipStream(new FileStream(...), CompressionMode.Compress))</code> — <code>GZipStream</code> and <code>FileStream</code> share the <code>Stream</code> contract (Decorator), and <code>StreamWriter</code> adapts it to text (<code>TextWriter</code>, an Adapter).</li>\n<li>Because they share the base type, you can add <code>BufferedStream</code> or <code>CryptoStream</code> without changing the others.</li>\n<li>Remember to dispose the outer layer (it usually disposes the inner one unless <code>leaveOpen: true</code>).</li>\n<li>In your own code: a <code>CachingRepository</code> wrapping a <code>SqlRepository</code>, both <code>IRepository</code>.</li>\n</ul>\n<p>Follow-up: \"Why not inheritance?\" — with subclassing you need a class per combination (cached-and-logged, cached-only, logged-only...); decorators combine at composition time (Day 1: composition over inheritance).</p>",
        hi: "<ul>\n<li><code>new StreamWriter(new GZipStream(new FileStream(...), CompressionMode.Compress))</code> — <code>GZipStream</code> और <code>FileStream</code> एक ही <code>Stream</code> contract साझा करते हैं (Decorator), और <code>StreamWriter</code> उसे text (<code>TextWriter</code>, Adapter) में adapt करता है।</li>\n<li>Base type एक है, इसलिए बाकी को बदले बिना <code>BufferedStream</code> या <code>CryptoStream</code> जोड़ सकते हो।</li>\n<li>सबसे बाहरी layer को dispose करना याद रखो (वह आम तौर पर inner को भी dispose करती है, जब तक <code>leaveOpen: true</code> न हो)।</li>\n<li>अपने code में: <code>SqlRepository</code> को wrap करती <code>CachingRepository</code>, दोनों <code>IRepository</code>।</li>\n</ul>\n<p>Follow-up: \"Inheritance क्यों नहीं?\" — subclassing में हर combination के लिए class चाहिए (cached-and-logged, सिर्फ़ cached, सिर्फ़ logged...); decorators composition के समय मिलते हैं (Day 1: composition over inheritance)।</p>",
        hg: "<ul>\n<li><code>new StreamWriter(new GZipStream(new FileStream(...), CompressionMode.Compress))</code> — <code>GZipStream</code> aur <code>FileStream</code> ek hi <code>Stream</code> contract saajha karte hain (Decorator), aur <code>StreamWriter</code> use text (<code>TextWriter</code>, Adapter) mein adapt karta hai.</li>\n<li>Base type ek hai, isliye baaki ko badle bina <code>BufferedStream</code> ya <code>CryptoStream</code> jod sakte ho.</li>\n<li>Sabse bahari layer ko dispose karna yaad rakho (woh aam taur par inner ko bhi dispose karti hai, jab tak <code>leaveOpen: true</code> na ho).</li>\n<li>Apne code mein: <code>SqlRepository</code> ko wrap karti <code>CachingRepository</code>, dono <code>IRepository</code>.</li>\n</ul>\n<p>Follow-up: \"Inheritance kyun nahi?\" — subclassing mein har combination ke liye class chahiye (cached-and-logged, sirf cached, sirf logged...); decorators composition ke samay milte hain (Day 1: composition over inheritance).</p>"
      }
    },
    {
      id: "strategy-when",
      depth: "short",
      q: "What is the Strategy pattern, and when would you use it?",
      answer: "It puts interchangeable algorithms behind one interface so the caller can swap them. I use it when a switch on type keeps growing, such as payment methods or discount rules.",
      meaning: {
        hi: "यह interchangeable algorithms को एक interface के पीछे रखता है ताकि caller उन्हें बदल सके। मैं इसे तब use करता हूँ जब type पर switch बढ़ती जाए, जैसे payment methods या discount rules।",
        hg: "Yeh interchangeable algorithms ko ek interface ke peeche rakhta hai taaki caller unhe badal sake. Main ise tab use karta hoon jab type par switch badhti jaye, jaise payment methods ya discount rules."
      },
      explain: {
        en: "<ul>\n<li>Define <code>IDiscount.Apply(price)</code>; each rule is a class; the caller gets one through constructor injection or a key.</li>\n<li>Adding a new rule = a new class + one registration — the Day 8 Open/Closed test.</li>\n<li>For tiny cases a <code>Func&lt;decimal, decimal&gt;</code> is a strategy too; do not create an interface for one lambda.</li>\n<li>Built-in examples: <code>IComparer&lt;T&gt;</code> with <code>Sort</code>, <code>IEqualityComparer&lt;T&gt;</code> with dictionaries.</li>\n</ul>\n<p>Follow-up: \"Is a switch always bad?\" — no; two stable branches are fine. Move to Strategy when it grows or when each branch needs its own dependencies and tests.</p>",
        hi: "<ul>\n<li><code>IDiscount.Apply(price)</code> बनाओ; हर rule एक class; caller को constructor injection या key से एक मिलता है।</li>\n<li>नया rule जोड़ना = एक नई class + एक registration — Day 8 का Open/Closed test।</li>\n<li>छोटे cases में <code>Func&lt;decimal, decimal&gt;</code> भी strategy है; एक lambda के लिए interface मत बनाओ।</li>\n<li>Built-in उदाहरण: <code>Sort</code> के साथ <code>IComparer&lt;T&gt;</code>, dictionaries के साथ <code>IEqualityComparer&lt;T&gt;</code>।</li>\n</ul>\n<p>Follow-up: \"क्या switch हमेशा बुरी है?\" — नहीं; दो स्थिर branches ठीक हैं। जब बढ़े या हर branch को अपनी dependencies और tests चाहिए, तब Strategy पर जाओ।</p>",
        hg: "<ul>\n<li><code>IDiscount.Apply(price)</code> banao; har rule ek class; caller ko constructor injection ya key se ek milta hai.</li>\n<li>Naya rule jodna = ek nayi class + ek registration — Day 8 ka Open/Closed test.</li>\n<li>Chhote cases mein <code>Func&lt;decimal, decimal&gt;</code> bhi strategy hai; ek lambda ke liye interface mat banao.</li>\n<li>Built-in udaharan: <code>Sort</code> ke saath <code>IComparer&lt;T&gt;</code>, dictionaries ke saath <code>IEqualityComparer&lt;T&gt;</code>.</li>\n</ul>\n<p>Follow-up: \"Kya switch hamesha buri hai?\" — nahi; do sthir branches theek hain. Jab badhe ya har branch ko apni dependencies aur tests chahiye, tab Strategy par jao.</p>"
      }
    },
    {
      id: "strategy-vs-state",
      depth: "short",
      q: "Strategy vs State — the diagrams look identical. How do you tell them apart?",
      answer: "Intent differs. The client picks a Strategy and it normally stays put. The context swaps its State object, and states often trigger the transitions.",
      meaning: {
        hi: "Intent अलग है। Strategy client चुनता है और वह आम तौर पर बनी रहती है। Context अपना State object बदलता है, और transitions अक्सर states खुद trigger करती हैं।",
        hg: "Intent alag hai. Strategy client chunta hai aur woh aam taur par bani rehti hai. Context apna State object badalta hai, aur transitions aksar states khud trigger karti hain."
      },
      explain: {
        en: "<ul>\n<li><b>Strategy:</b> \"How should I calculate shipping?\" — chosen from outside, strategies do not know each other.</li>\n<li><b>State:</b> an order is Placed → Paid → Shipped; <code>Pay()</code> in <code>PlacedState</code> moves the context to <code>PaidState</code>; in <code>ShippedState</code> it throws or is ignored. The same call behaves differently per state.</li>\n<li>Both use composition and polymorphism instead of <code>switch</code>/<code>if</code>.</li>\n<li>In practice many teams model simple state machines with an <code>enum</code> and a transition table; use the full State pattern when each state has real, different behaviour.</li>\n</ul>",
        hi: "<ul>\n<li><b>Strategy:</b> \"shipping कैसे calculate करूँ?\" — बाहर से चुनी जाती है, strategies एक-दूसरे को नहीं जानतीं।</li>\n<li><b>State:</b> order Placed → Paid → Shipped होता है; <code>PlacedState</code> में <code>Pay()</code> context को <code>PaidState</code> पर ले जाता है; <code>ShippedState</code> में वह throw करता है या ignore होता है। वही call हर state में अलग चलती है।</li>\n<li>दोनों <code>switch</code>/<code>if</code> की जगह composition और polymorphism use करते हैं।</li>\n<li>Practice में कई teams सरल state machines <code>enum</code> और transition table से बनाती हैं; पूरा State pattern तब लो जब हर state का सच में अलग behaviour हो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Strategy:</b> \"shipping kaise calculate karoon?\" — bahar se chuni jati hai, strategies ek-doosre ko nahi jaantin.</li>\n<li><b>State:</b> order Placed → Paid → Shipped hota hai; <code>PlacedState</code> mein <code>Pay()</code> context ko <code>PaidState</code> par le jata hai; <code>ShippedState</code> mein woh throw karta hai ya ignore hota hai. Wahi call har state mein alag chalti hai.</li>\n<li>Dono <code>switch</code>/<code>if</code> ki jagah composition aur polymorphism use karte hain.</li>\n<li>Practice mein kai teams saral state machines <code>enum</code> aur transition table se banati hain; poora State pattern tab lo jab har state ka sach mein alag behaviour ho.</li>\n</ul>"
      }
    },
    {
      id: "observer-dotnet",
      depth: "short",
      q: "How is the Observer pattern implemented in .NET?",
      answer: "With C# events for in-process notification, or IObservable&lt;T&gt; and IObserver&lt;T&gt;, where Subscribe returns an IDisposable to unsubscribe. Handlers run synchronously in subscription order.",
      meaning: {
        hi: "In-process notification के लिए C# events से, या IObservable&lt;T&gt; और IObserver&lt;T&gt; से, जहाँ Subscribe unsubscribe के लिए IDisposable लौटाता है। Handlers synchronously, subscribe के क्रम में चलते हैं।",
        hg: "In-process notification ke liye C# events se, ya IObservable&lt;T&gt; aur IObserver&lt;T&gt; se, jahan Subscribe unsubscribe ke liye IDisposable lautata hai. Handlers synchronously, subscribe ke kram mein chalte hain."
      },
      explain: {
        en: "<ul>\n<li><b>Event:</b> publisher declares <code>public event EventHandler&lt;T&gt;? Changed;</code> and raises it; subscribers use <code>+=</code> / <code>-=</code> (Day 2).</li>\n<li><b>IObservable&lt;T&gt;:</b> push-based stream with <code>OnNext</code>, <code>OnError</code>, <code>OnCompleted</code>. Reactive Extensions (Rx, a separate package) adds LINQ-like operators over it.</li>\n<li>Both are in-process and synchronous by default. A slow handler slows the publisher; an exception can stop later handlers.</li>\n<li>For cross-service or reliable delivery, use a message broker, not an event.</li>\n</ul>\n<p>Follow-up: \"What can go wrong?\" — leaks from forgotten unsubscribe, handler exceptions, ordering assumptions, and raising from a background thread into UI code.</p>",
        hi: "<ul>\n<li><b>Event:</b> publisher <code>public event EventHandler&lt;T&gt;? Changed;</code> declare करके raise करता है; subscribers <code>+=</code> / <code>-=</code> करते हैं (Day 2)।</li>\n<li><b>IObservable&lt;T&gt;:</b> push-based stream, <code>OnNext</code>, <code>OnError</code>, <code>OnCompleted</code> के साथ। Reactive Extensions (Rx, अलग package) उस पर LINQ जैसे operators जोड़ता है।</li>\n<li>दोनों in-process और default रूप से synchronous हैं। धीमा handler publisher को धीमा करता है; एक exception बाद के handlers रोक सकता है।</li>\n<li>Cross-service या भरोसेमंद delivery के लिए message broker लो, event नहीं।</li>\n</ul>\n<p>Follow-up: \"क्या गलत हो सकता है?\" — unsubscribe भूलने से leak, handler exceptions, ordering की धारणाएँ, और background thread से UI code में raise करना।</p>",
        hg: "<ul>\n<li><b>Event:</b> publisher <code>public event EventHandler&lt;T&gt;? Changed;</code> declare karke raise karta hai; subscribers <code>+=</code> / <code>-=</code> karte hain (Day 2).</li>\n<li><b>IObservable&lt;T&gt;:</b> push-based stream, <code>OnNext</code>, <code>OnError</code>, <code>OnCompleted</code> ke saath. Reactive Extensions (Rx, alag package) us par LINQ jaise operators jodta hai.</li>\n<li>Dono in-process aur default roop se synchronous hain. Dheema handler publisher ko dheema karta hai; ek exception baad ke handlers rok sakta hai.</li>\n<li>Cross-service ya bharosemand delivery ke liye message broker lo, event nahi.</li>\n</ul>\n<p>Follow-up: \"Kya galat ho sakta hai?\" — unsubscribe bhoolne se leak, handler exceptions, ordering ki dharnayein, aur background thread se UI code mein raise karna.</p>"
      }
    },
    {
      id: "observer-vs-mediator",
      depth: "short",
      q: "Observer vs Mediator — what is the difference?",
      answer: "Observer broadcasts one-to-many and the subject does not know its subscribers. Mediator is a hub that coordinates specific colleagues and holds the interaction rules, so they never reference each other.",
      meaning: {
        hi: "Observer one-to-many broadcast करता है और subject अपने subscribers को नहीं जानता। Mediator एक hub है जो तय साथियों को coordinate करता है और interaction rules रखता है, ताकि वे एक-दूसरे को reference न करें।",
        hg: "Observer one-to-many broadcast karta hai aur subject apne subscribers ko nahi jaanta. Mediator ek hub hai jo tay saathiyon ko coordinate karta hai aur interaction rules rakhta hai, taaki woh ek-doosre ko reference na karein."
      },
      explain: {
        en: "<ul>\n<li><b>Observer:</b> price changed → whoever subscribed reacts. Direction is subject → observers; logic lives in each observer.</li>\n<li><b>Mediator:</b> in a form, the \"country\" dropdown changing must reload \"state\", disable \"pin code\"... The mediator (form controller) holds those rules; the controls only tell it \"I changed\".</li>\n<li>A mediator often <i>uses</i> observer-style events internally to hear from colleagues.</li>\n<li>Risk: the mediator grows into a god object; the benefit: interaction rules in one place, easy to read and test.</li>\n</ul>",
        hi: "<ul>\n<li><b>Observer:</b> price बदला → जिसने subscribe किया वह react करता है। Direction subject → observers; logic हर observer में।</li>\n<li><b>Mediator:</b> form में \"country\" dropdown बदलने पर \"state\" reload हो, \"pin code\" disable हो... वे rules mediator (form controller) में हैं; controls बस बताते हैं \"मैं बदला\"।</li>\n<li>Mediator अक्सर colleagues की बात सुनने के लिए अंदर observer-style events <i>use</i> करता है।</li>\n<li>Risk: mediator god object बन जाए; फ़ायदा: interaction rules एक जगह, पढ़ने और test करने में आसान।</li>\n</ul>",
        hg: "<ul>\n<li><b>Observer:</b> price badla → jisne subscribe kiya woh react karta hai. Direction subject → observers; logic har observer mein.</li>\n<li><b>Mediator:</b> form mein \"country\" dropdown badalne par \"state\" reload ho, \"pin code\" disable ho... woh rules mediator (form controller) mein hain; controls bas batate hain \"main badla\".</li>\n<li>Mediator aksar colleagues ki baat sunne ke liye andar observer-style events <i>use</i> karta hai.</li>\n<li>Risk: mediator god object ban jaye; fayda: interaction rules ek jagah, padhne aur test karne mein aasan.</li>\n</ul>"
      }
    },
    {
      id: "chain-middleware",
      depth: "short",
      q: "Where does Chain of Responsibility appear in ASP.NET Core?",
      answer: "In the middleware pipeline. Each middleware receives next, can run code before and after it, or short-circuit by not calling it. Registration order is the order of the chain.",
      meaning: {
        hi: "Middleware pipeline में। हर middleware को next मिलता है, वह उसके पहले और बाद code चला सकता है, या उसे न बुलाकर short-circuit कर सकता है। Registration का क्रम ही chain का क्रम है।",
        hg: "Middleware pipeline mein. Har middleware ko next milta hai, woh uske pehle aur baad code chala sakta hai, ya use na bulakar short-circuit kar sakta hai. Registration ka kram hi chain ka kram hai."
      },
      explain: {
        en: "<ul>\n<li>Authorization middleware can end the request with 401/403, and the rate limiter with 429, without calling <code>next</code> — links that stop the chain. Authentication middleware only sets the user and calls <code>next</code>.</li>\n<li>Logging or exception middleware calls <code>next</code> inside a try/log block — it behaves like a decorator around the rest.</li>\n<li>Order matters: for example exception handling first (outermost), then authentication before authorization. Day 12 covers the pipeline in detail.</li>\n<li>The \"Middleware-style pipeline\" code in this day builds the same shape from plain delegates.</li>\n</ul>\n<p>Follow-up: \"Is middleware a Decorator or a Chain?\" — It is a chain built from delegates; individual middleware often acts like a decorator, but it may short-circuit.</p>",
        hi: "<ul>\n<li>Authorization middleware <code>next</code> बुलाए बिना 401/403 से request ख़त्म कर सकता है, और rate limiter 429 से — chain रोकने वाले links। Authentication middleware सिर्फ़ user set करता है और <code>next</code> बुलाता है।</li>\n<li>Logging या exception middleware try/log block के अंदर <code>next</code> बुलाता है — बाक़ी के चारों ओर decorator जैसा।</li>\n<li>Order मायने रखता है: जैसे exception handling पहले (सबसे बाहर), फिर authorization से पहले authentication। Day 12 में pipeline विस्तार से है।</li>\n<li>इस दिन का \"Middleware-style pipeline\" code साधारण delegates से वही shape बनाता है।</li>\n</ul>\n<p>Follow-up: \"Middleware Decorator है या Chain?\" — यह delegates से बनी chain है; अलग-अलग middleware अक्सर decorator जैसा चलता है, पर short-circuit भी कर सकता है।</p>",
        hg: "<ul>\n<li>Authorization middleware <code>next</code> bulaye bina 401/403 se request khatam kar sakta hai, aur rate limiter 429 se — chain rokne wale links. Authentication middleware sirf user set karta hai aur <code>next</code> bulata hai.</li>\n<li>Logging ya exception middleware try/log block ke andar <code>next</code> bulata hai — baaki ke charon or decorator jaisa.</li>\n<li>Order mayne rakhta hai: jaise exception handling pehle (sabse bahar), phir authorization se pehle authentication. Day 12 mein pipeline vistar se hai.</li>\n<li>Is din ka \"Middleware-style pipeline\" code saadharan delegates se wahi shape banata hai.</li>\n</ul>\n<p>Follow-up: \"Middleware Decorator hai ya Chain?\" — yeh delegates se bani chain hai; alag-alag middleware aksar decorator jaisa chalta hai, par short-circuit bhi kar sakta hai.</p>"
      }
    },
    {
      id: "chain-vs-decorator",
      depth: "short",
      q: "Chain of Responsibility vs Decorator — how do you distinguish them?",
      answer: "A chain link decides whether to handle the request or pass it on, and can stop it. A Decorator normally always delegates to its inner object and adds behaviour around the call.",
      meaning: {
        hi: "Chain का link तय करता है कि request को संभाले या आगे दे, और उसे रोक सकता है। Decorator आम तौर पर हमेशा अपने inner object को call देता है और call के चारों ओर behaviour जोड़ता है।",
        hg: "Chain ka link tay karta hai ki request ko sambhale ya aage de, aur use rok sakta hai. Decorator aam taur par hamesha apne inner object ko call deta hai aur call ke charon or behaviour jodta hai."
      },
      explain: {
        en: "<ul>\n<li><b>Chain:</b> approval limits — the first approver with enough authority handles it and the rest never see it. The sender does not know which one acts.</li>\n<li><b>Decorator:</b> logging around caching around the real service — all layers run for each call (a cache decorator may skip the inner call on a hit, which is where the two ideas blur).</li>\n<li>Structure is similar (each holds the next). Ask: \"is the purpose to <i>choose a handler</i>, or to <i>add behaviour</i> to one object?\"</li>\n</ul>",
        hi: "<ul>\n<li><b>Chain:</b> approval limits — पर्याप्त authority वाला पहला approver संभालता है और बाक़ी उसे देखते भी नहीं। भेजने वाले को नहीं पता कौन काम करेगा।</li>\n<li><b>Decorator:</b> असली service के ऊपर caching, उसके ऊपर logging — हर call पर सारी layers चलती हैं (cache decorator hit पर inner call छोड़ सकता है, यहीं दोनों idea धुँधले होते हैं)।</li>\n<li>Structure मिलता-जुलता है (हर एक अगले को पकड़ता है)। पूछो: \"मक़सद <i>handler चुनना</i> है, या एक object में <i>behaviour जोड़ना</i>?\"</li>\n</ul>",
        hg: "<ul>\n<li><b>Chain:</b> approval limits — paryapt authority wala pehla approver sambhalta hai aur baaki use dekhte bhi nahi. Bhejne wale ko nahi pata kaun kaam karega.</li>\n<li><b>Decorator:</b> asli service ke upar caching, uske upar logging — har call par saari layers chalti hain (cache decorator hit par inner call chhod sakta hai, yahin dono idea dhundhle hote hain).</li>\n<li>Structure milta-julta hai (har ek agle ko pakadta hai). Poocho: \"maksad <i>handler chunna</i> hai, ya ek object mein <i>behaviour jodna</i>?\"</li>\n</ul>"
      }
    },
    {
      id: "adapter-sdk-boundary",
      depth: "detailed",
      q: "How would you integrate a third-party SDK so that changing the vendor later is cheap?",
      answer: "Define my own interface in the domain, implement it with an Adapter in Infrastructure that wraps the SDK, and register it in DI. Vendor types never leak outward, and tests use a fake.",
      meaning: {
        hi: "Domain में अपना interface बनाऊँगा, Infrastructure में उसे Adapter से implement करूँगा जो SDK को wrap करे, और DI में register करूँगा। Vendor types बाहर नहीं निकलते, और tests fake use करते हैं।",
        hg: "Domain mein apna interface banaunga, Infrastructure mein use Adapter se implement karunga jo SDK ko wrap kare, aur DI mein register karunga. Vendor types bahar nahi nikalte, aur tests fake use karte hain."
      },
      explain: {
        en: "<ul>\n<li>The interface speaks <b>your</b> language (<code>Send(phone, text)</code>), not the vendor's (<code>Dispatch(string[], payload, priority)</code>).</li>\n<li>The adapter maps vendor errors and status codes to your own results or exceptions, so callers do not depend on vendor error types.</li>\n<li>Switching vendor = a new adapter + one registration; business code is untouched (Day 8 DIP/OCP).</li>\n<li>This is also an \"anti-corruption layer\" idea at class level.</li>\n</ul>\n<p>Trade-off: an extra interface per vendor. Skip it for a trivial, stable, low-risk library (for example a JSON serializer) — wrapping everything is noise.</p>\n<p>Follow-up: \"What if the SDK has 40 methods?\" — expose only the 3 your domain uses; do not mirror the SDK.</p>",
        hi: "<ul>\n<li>Interface <b>आपकी</b> भाषा बोलता है (<code>Send(phone, text)</code>), vendor की नहीं (<code>Dispatch(string[], payload, priority)</code>)।</li>\n<li>Adapter vendor के errors और status codes को आपके अपने results या exceptions में map करता है, ताकि callers vendor के error types पर निर्भर न हों।</li>\n<li>Vendor बदलना = नया adapter + एक registration; business code अछूता (Day 8 DIP/OCP)।</li>\n<li>यह class level पर \"anti-corruption layer\" का idea भी है।</li>\n</ul>\n<p>Trade-off: हर vendor के लिए एक extra interface। मामूली, स्थिर, कम-जोखिम library (जैसे JSON serializer) के लिए छोड़ दो — सब कुछ wrap करना शोर है।</p>\n<p>Follow-up: \"SDK में 40 methods हों तो?\" — सिर्फ़ वे 3 expose करो जो आपका domain use करता है; SDK की नक़ल मत करो।</p>",
        hg: "<ul>\n<li>Interface <b>aapki</b> bhasha bolta hai (<code>Send(phone, text)</code>), vendor ki nahi (<code>Dispatch(string[], payload, priority)</code>).</li>\n<li>Adapter vendor ke errors aur status codes ko aapke apne results ya exceptions mein map karta hai, taaki callers vendor ke error types par nirbhar na hon.</li>\n<li>Vendor badalna = naya adapter + ek registration; business code achhuta (Day 8 DIP/OCP).</li>\n<li>Yeh class level par \"anti-corruption layer\" ka idea bhi hai.</li>\n</ul>\n<p>Trade-off: har vendor ke liye ek extra interface. Maamooli, sthir, kam-jokhim library (jaise JSON serializer) ke liye chhod do — sab kuch wrap karna shor hai.</p>\n<p>Follow-up: \"SDK mein 40 methods hon to?\" — sirf woh 3 expose karo jo aapka domain use karta hai; SDK ki nakal mat karo.</p>"
      }
    },
    {
      id: "facade-vs-adapter",
      depth: "detailed",
      q: "What is the difference between Facade and Adapter?",
      answer: "Adapter makes one existing class fit an interface that is already expected. Facade designs a new, simpler interface over several classes or a whole subsystem.",
      meaning: {
        hi: "Adapter एक मौजूदा class को पहले से expected interface में फ़िट करता है। Facade कई classes या पूरे subsystem के ऊपर नया, सरल interface बनाता है।",
        hg: "Adapter ek maujooda class ko pehle se expected interface mein fit karta hai. Facade kai classes ya poore subsystem ke upar naya, saral interface banata hai."
      },
      explain: {
        en: "<ul>\n<li><b>Adapter:</b> the target interface exists first (yours); you bend a vendor class to it. One-to-one translation.</li>\n<li><b>Facade:</b> you invent the simple interface (<code>PlaceOrder</code>) and hide the call sequence over inventory, payment and notification.</li>\n<li>A Facade does not stop people from using the subsystem directly if they need to.</li>\n<li>Both reduce coupling to messy APIs; Adapter is about <i>compatibility</i>, Facade about <i>simplicity</i>.</li>\n</ul>",
        hi: "<ul>\n<li><b>Adapter:</b> target interface पहले से है (आपका); आप vendor class को उसमें मोड़ते हो। एक-से-एक translation।</li>\n<li><b>Facade:</b> आप सरल interface (<code>PlaceOrder</code>) खुद बनाते हो और inventory, payment, notification पर call sequence छुपाते हो।</li>\n<li>Facade लोगों को ज़रूरत हो तो subsystem सीधे use करने से नहीं रोकता।</li>\n<li>दोनों गंदे APIs से coupling घटाते हैं; Adapter <i>compatibility</i> के लिए, Facade <i>simplicity</i> के लिए।</li>\n</ul>",
        hg: "<ul>\n<li><b>Adapter:</b> target interface pehle se hai (aapka); aap vendor class ko usme modte ho. Ek-se-ek translation.</li>\n<li><b>Facade:</b> aap saral interface (<code>PlaceOrder</code>) khud banate ho aur inventory, payment, notification par call sequence chhupate ho.</li>\n<li>Facade logon ko zarurat ho to subsystem seedhe use karne se nahi rokta.</li>\n<li>Dono gande APIs se coupling ghataate hain; Adapter <i>compatibility</i> ke liye, Facade <i>simplicity</i> ke liye.</li>\n</ul>"
      }
    },
    {
      id: "facade-god-class",
      depth: "detailed",
      q: "Is there a downside to a Facade? How do you keep it healthy?",
      answer: "It can grow into a god class that holds business rules and every use case. Keep it a thin coordinator, split by use case, and leave real logic in the subsystems.",
      meaning: {
        hi: "यह god class बन सकता है जिसमें business rules और हर use case भर जाए। इसे पतला coordinator रखो, use case के हिसाब से बाँटो, और असली logic subsystems में छोड़ो।",
        hg: "Yeh god class ban sakta hai jisme business rules aur har use case bhar jaye. Ise patla coordinator rakho, use case ke hisaab se baanto, aur asli logic subsystems mein chhodo."
      },
      explain: {
        en: "<ul>\n<li>Smell: the facade has 30 methods, many dependencies, and <code>if</code>s about pricing or eligibility.</li>\n<li>Fix: one facade (application service) per use case or area, e.g. <code>CheckoutService</code>, <code>ReturnsService</code>; move rules to domain classes.</li>\n<li>Another trap: hiding errors. A good facade still reports which step failed.</li>\n<li>Do not add a facade over one class \"just to be tidy\" — it adds a hop with no gain.</li>\n</ul>",
        hi: "<ul>\n<li>Smell: facade में 30 methods, कई dependencies, और pricing या eligibility के <code>if</code>।</li>\n<li>Fix: हर use case या area के लिए एक facade (application service), जैसे <code>CheckoutService</code>, <code>ReturnsService</code>; rules domain classes में ले जाओ।</li>\n<li>एक और जाल: errors छुपाना। अच्छा facade फिर भी बताता है कि कौन सा step fail हुआ।</li>\n<li>एक class के ऊपर \"बस साफ़-सुथरा दिखने के लिए\" facade मत जोड़ो — बिना फ़ायदे के एक hop बढ़ता है।</li>\n</ul>",
        hg: "<ul>\n<li>Smell: facade mein 30 methods, kai dependencies, aur pricing ya eligibility ke <code>if</code>.</li>\n<li>Fix: har use case ya area ke liye ek facade (application service), jaise <code>CheckoutService</code>, <code>ReturnsService</code>; rules domain classes mein le jao.</li>\n<li>Ek aur jaal: errors chhupana. Achha facade phir bhi batata hai ki kaun sa step fail hua.</li>\n<li>Ek class ke upar \"bas saaf-suthra dikhne ke liye\" facade mat jodo — bina fayde ke ek hop badhta hai.</li>\n</ul>"
      }
    },
    {
      id: "decorator-di-registration",
      depth: "detailed",
      q: "How do you register a Decorator with the built-in DI container?",
      answer: "Register the inner type, then register the interface with a factory that wraps it, as in the code on this page. Libraries like Scrutor offer a Decorate helper, but they are optional.",
      meaning: {
        hi: "Inner type register करो, फिर interface को ऐसी factory से register करो जो उसे wrap करे, जैसा इस page के code में है। Scrutor जैसी libraries Decorate helper देती हैं, पर वे optional हैं।",
        hg: "Inner type register karo, phir interface ko aisi factory se register karo jo use wrap kare, jaisa is page ke code mein hai. Scrutor jaisi libraries Decorate helper deti hain, par woh optional hain."
      },
      explain: {
        en: "<ul>\n<li><b>Manual:</b> <code>services.AddSingleton&lt;SqlRepo&gt;(); services.AddSingleton&lt;IRepo&gt;(sp =&gt; new CachedRepo(sp.GetRequiredService&lt;SqlRepo&gt;()));</code></li>\n<li><b>Library:</b> Scrutor's <code>services.Decorate&lt;IRepo, CachedRepo&gt;()</code> reduces boilerplate when you have many decorators. Weigh a new dependency against ~3 lines.</li>\n<li><b>Lifetimes:</b> the decorator should not outlive the inner service. A singleton decorator over a scoped inner service holds a stale or disposed instance.</li>\n<li><b>Order:</b> with Scrutor the last <code>Decorate</code> call is the outermost — the opposite of middleware and <code>AddHttpMessageHandler</code>, where the first registered is outermost. In the manual approach, whatever you build last is outermost.</li>\n<li>Keyed services choose <i>between</i> implementations; they do not wrap.</li>\n</ul>",
        hi: "<ul>\n<li><b>Manual:</b> <code>services.AddSingleton&lt;SqlRepo&gt;(); services.AddSingleton&lt;IRepo&gt;(sp =&gt; new CachedRepo(sp.GetRequiredService&lt;SqlRepo&gt;()));</code></li>\n<li><b>Library:</b> Scrutor का <code>services.Decorate&lt;IRepo, CachedRepo&gt;()</code> कई decorators होने पर boilerplate घटाता है। नई dependency को ~3 lines के सामने तौलो।</li>\n<li><b>Lifetimes:</b> decorator को inner service से ज़्यादा नहीं जीना चाहिए। scoped inner service के ऊपर singleton decorator पुराना या dispose हो चुका instance पकड़ता है।</li>\n<li><b>Order:</b> Scrutor में आख़िरी <code>Decorate</code> call सबसे बाहरी होती है — middleware और <code>AddHttpMessageHandler</code> के उलट, जहाँ पहला registered सबसे बाहरी है। Manual तरीक़े में जो आख़िर में बनाओ वही सबसे बाहरी।</li>\n<li>Keyed services implementations के <i>बीच</i> चुनती हैं; wrap नहीं करतीं।</li>\n</ul>",
        hg: "<ul>\n<li><b>Manual:</b> <code>services.AddSingleton&lt;SqlRepo&gt;(); services.AddSingleton&lt;IRepo&gt;(sp =&gt; new CachedRepo(sp.GetRequiredService&lt;SqlRepo&gt;()));</code></li>\n<li><b>Library:</b> Scrutor ka <code>services.Decorate&lt;IRepo, CachedRepo&gt;()</code> kai decorators hone par boilerplate ghataata hai. Nayi dependency ko ~3 lines ke saamne taulo.</li>\n<li><b>Lifetimes:</b> decorator ko inner service se zyada nahi jeena chahiye. scoped inner service ke upar singleton decorator purana ya dispose ho chuka instance pakadta hai.</li>\n<li><b>Order:</b> Scrutor mein aakhri <code>Decorate</code> call sabse bahari hoti hai — middleware aur <code>AddHttpMessageHandler</code> ke ulat, jahan pehla registered sabse bahar hai. Manual tarike mein jo aakhir mein banao wahi sabse bahari.</li>\n<li>Keyed services implementations ke <i>beech</i> chunti hain; wrap nahi karti.</li>\n</ul>"
      }
    },
    {
      id: "proxy-kinds",
      depth: "detailed",
      q: "What kinds of Proxy are there, and where do you meet them in .NET?",
      answer: "Virtual (lazy creation), protection (permission checks), remote (local-looking call to a remote service), and caching or logging proxies. EF Core lazy-loading proxies and DispatchProxy are .NET examples.",
      meaning: {
        hi: "Virtual (lazy creation), protection (permission checks), remote (remote service को local जैसा call), और caching या logging proxies। EF Core lazy-loading proxies और DispatchProxy .NET के उदाहरण हैं।",
        hg: "Virtual (lazy creation), protection (permission checks), remote (remote service ko local jaisa call), aur caching ya logging proxies. EF Core lazy-loading proxies aur DispatchProxy .NET ke udaharan hain."
      },
      explain: {
        en: "<ul>\n<li><b>Virtual:</b> EF Core lazy loading (Day 5) — a generated subclass of your entity loads a navigation property on first access (hence <code>virtual</code> properties).</li>\n<li><b>Protection:</b> a wrapper that checks the role before calling the real service.</li>\n<li><b>Remote:</b> a typed client or generated API client hides HTTP behind a method call — \"remote proxy\" idea, although you still must handle latency and failure.</li>\n<li><b>Dynamic:</b> <code>DispatchProxy</code> builds a proxy for an interface at runtime with one <code>Invoke</code> method — handy for cross-cutting code, with reflection cost.</li>\n</ul>\n<p>TL angle: lazy loading hides database round-trips (N+1) — a classic proxy downside: the cost is invisible at the call site.</p>",
        hi: "<ul>\n<li><b>Virtual:</b> EF Core lazy loading (Day 5) — आपकी entity की generated subclass पहले access पर navigation property load करती है (इसीलिए <code>virtual</code> properties)।</li>\n<li><b>Protection:</b> असली service बुलाने से पहले role जाँचने वाला wrapper।</li>\n<li><b>Remote:</b> typed client या generated API client HTTP को method call के पीछे छुपाता है — \"remote proxy\" idea, हालाँकि latency और failure आपको फिर भी संभालनी है।</li>\n<li><b>Dynamic:</b> <code>DispatchProxy</code> runtime पर interface का proxy एक <code>Invoke</code> method से बनाता है — cross-cutting code के लिए काम का, reflection की cost के साथ।</li>\n</ul>\n<p>TL angle: lazy loading database round-trips (N+1) छुपाता है — proxy की classic कमज़ोरी: cost call site पर दिखती नहीं।</p>",
        hg: "<ul>\n<li><b>Virtual:</b> EF Core lazy loading (Day 5) — aapki entity ki generated subclass pehle access par navigation property load karti hai (isiliye <code>virtual</code> properties).</li>\n<li><b>Protection:</b> asli service bulane se pehle role jaanchne wala wrapper.</li>\n<li><b>Remote:</b> typed client ya generated API client HTTP ko method call ke peeche chhupata hai — \"remote proxy\" idea, haalanki latency aur failure aapko phir bhi sambhalni hai.</li>\n<li><b>Dynamic:</b> <code>DispatchProxy</code> runtime par interface ka proxy ek <code>Invoke</code> method se banata hai — cross-cutting code ke liye kaam ka, reflection ki cost ke saath.</li>\n</ul>\n<p>TL angle: lazy loading database round-trips (N+1) chhupata hai — proxy ki classic kamzori: cost call site par dikhti nahi.</p>"
      }
    },
    {
      id: "strategy-di-keyed",
      depth: "detailed",
      q: "How do you choose a Strategy at runtime when using dependency injection?",
      answer: "Register each strategy under a key with AddKeyedSingleton and resolve by key at the composition root, or inject IEnumerable&lt;IStrategy&gt; and pick one by a property. Avoid injecting IServiceProvider into business code.",
      meaning: {
        hi: "हर strategy को AddKeyedSingleton से key के साथ register करो और composition root पर key से resolve करो, या IEnumerable&lt;IStrategy&gt; inject करके property से एक चुनो। Business code में IServiceProvider inject करने से बचो।",
        hg: "Har strategy ko AddKeyedSingleton se key ke saath register karo aur composition root par key se resolve karo, ya IEnumerable&lt;IStrategy&gt; inject karke property se ek chuno. Business code mein IServiceProvider inject karne se bacho."
      },
      explain: {
        en: "<ul>\n<li><b>Keyed:</b> <code>AddKeyedSingleton&lt;IDiscount, FestivalDiscount&gt;(\"festival\")</code>; a fixed choice uses <code>[FromKeyedServices(\"festival\")]</code> on the constructor parameter (.NET 8+, Day 9).</li>\n<li><b>Runtime key:</b> inject a <code>Func&lt;string, IDiscount&gt;</code> registered over <code>GetRequiredKeyedService</code> (code on this page).</li>\n<li><b>All of them:</b> <code>IEnumerable&lt;IDiscount&gt;</code> and a <code>Name</code> property; fine for a handful.</li>\n<li>Keyed registrations are not returned for a plain <code>GetService&lt;IDiscount&gt;()</code> request — see the puzzle.</li>\n</ul>\n<p>Follow-up: \"Unknown key?\" — <code>GetRequiredKeyedService</code> throws; validate input or use <code>GetKeyedService</code> and handle <code>null</code>.</p>",
        hi: "<ul>\n<li><b>Keyed:</b> <code>AddKeyedSingleton&lt;IDiscount, FestivalDiscount&gt;(\"festival\")</code>; fixed choice में constructor parameter पर <code>[FromKeyedServices(\"festival\")]</code> (.NET 8+, Day 9)।</li>\n<li><b>Runtime key:</b> <code>GetRequiredKeyedService</code> पर register किया <code>Func&lt;string, IDiscount&gt;</code> inject करो (इस page का code)।</li>\n<li><b>सब कुछ:</b> <code>IEnumerable&lt;IDiscount&gt;</code> और <code>Name</code> property; मुट्ठी भर के लिए ठीक।</li>\n<li>Keyed registrations सादे <code>GetService&lt;IDiscount&gt;()</code> request पर नहीं मिलतीं — puzzle देखो।</li>\n</ul>\n<p>Follow-up: \"Key अनजान हो तो?\" — <code>GetRequiredKeyedService</code> throw करता है; input validate करो या <code>GetKeyedService</code> लेकर <code>null</code> संभालो।</p>",
        hg: "<ul>\n<li><b>Keyed:</b> <code>AddKeyedSingleton&lt;IDiscount, FestivalDiscount&gt;(\"festival\")</code>; fixed choice mein constructor parameter par <code>[FromKeyedServices(\"festival\")]</code> (.NET 8+, Day 9).</li>\n<li><b>Runtime key:</b> <code>GetRequiredKeyedService</code> par register kiya <code>Func&lt;string, IDiscount&gt;</code> inject karo (is page ka code).</li>\n<li><b>Sab kuch:</b> <code>IEnumerable&lt;IDiscount&gt;</code> aur <code>Name</code> property; mutthi bhar ke liye theek.</li>\n<li>Keyed registrations saade <code>GetService&lt;IDiscount&gt;()</code> request par nahi milti — puzzle dekho.</li>\n</ul>\n<p>Follow-up: \"Key anjaan ho to?\" — <code>GetRequiredKeyedService</code> throw karta hai; input validate karo ya <code>GetKeyedService</code> lekar <code>null</code> sambhalo.</p>"
      }
    },
    {
      id: "event-memory-leak",
      depth: "detailed",
      q: "How can C# events cause memory leaks, and how do you prevent them?",
      answer: "The publisher's delegate list holds a reference to every subscriber. A long-lived publisher, such as a static event, keeps short-lived subscribers alive unless they unsubscribe with -= or Dispose.",
      meaning: {
        hi: "Publisher की delegate list हर subscriber का reference रखती है। लंबी उम्र वाला publisher, जैसे static event, छोटी उम्र के subscribers को ज़िंदा रखता है जब तक वे -= या Dispose से unsubscribe न करें।",
        hg: "Publisher ki delegate list har subscriber ka reference rakhti hai. Lambi umr wala publisher, jaise static event, chhoti umr ke subscribers ko zinda rakhta hai jab tak woh -= ya Dispose se unsubscribe na karein."
      },
      explain: {
        en: "<ul>\n<li><code>publisher.Changed += view.OnChanged</code> makes <code>publisher → view</code> a reference. If the publisher lives for the whole app and the view should die, the view stays in memory.</li>\n<li><b>Prevent:</b> unsubscribe in <code>Dispose</code>, in a \"closed\" handler, or use a short-lived publisher. Keep the delegate reference when you subscribe with a lambda, otherwise <code>-=</code> with a new lambda does not remove it (see the puzzle).</li>\n<li>Weak events exist in some UI frameworks but are not a general .NET default.</li>\n<li>Profile suspicion: growing instances of your subscriber class in a memory snapshot, rooted by an event delegate.</li>\n</ul>",
        hi: "<ul>\n<li><code>publisher.Changed += view.OnChanged</code> से <code>publisher → view</code> reference बनता है। Publisher पूरे app जितना जिए और view को मरना हो, तो view memory में रहता है।</li>\n<li><b>Prevent:</b> <code>Dispose</code> में, \"closed\" handler में unsubscribe करो, या छोटी उम्र का publisher रखो। Lambda से subscribe करो तो delegate का reference रखो, वरना नए lambda से <code>-=</code> उसे नहीं हटाता (puzzle देखो)।</li>\n<li>कुछ UI frameworks में weak events होते हैं पर वे general .NET default नहीं हैं।</li>\n<li>Profile में शक: memory snapshot में आपकी subscriber class के बढ़ते instances, जिन्हें event delegate पकड़े है।</li>\n</ul>",
        hg: "<ul>\n<li><code>publisher.Changed += view.OnChanged</code> se <code>publisher → view</code> reference banta hai. Publisher poore app jitna jiye aur view ko marna ho, to view memory mein rehta hai.</li>\n<li><b>Prevent:</b> <code>Dispose</code> mein, \"closed\" handler mein unsubscribe karo, ya chhoti umr ka publisher rakho. Lambda se subscribe karo to delegate ka reference rakho, warna naye lambda se <code>-=</code> use nahi hatata (puzzle dekho).</li>\n<li>Kuch UI frameworks mein weak events hote hain par woh general .NET default nahi hain.</li>\n<li>Profile mein shak: memory snapshot mein aapki subscriber class ke badhte instances, jinhe event delegate pakde hai.</li>\n</ul>"
      }
    },
    {
      id: "event-vs-iobservable",
      depth: "detailed",
      q: "When would you choose IObservable&lt;T&gt; over a plain C# event?",
      answer: "When I need streams: composing, filtering or throttling notifications with Rx operators, or explicit completion and error signals. For simple in-process notifications, a plain event is lighter and enough.",
      meaning: {
        hi: "जब मुझे streams चाहिए: Rx operators से notifications को compose, filter या throttle करना, या साफ़ completion और error signals। सरल in-process notifications के लिए सादा event हल्का और काफ़ी है।",
        hg: "Jab mujhe streams chahiye: Rx operators se notifications ko compose, filter ya throttle karna, ya saaf completion aur error signals. Saral in-process notifications ke liye saada event halka aur kaafi hai."
      },
      explain: {
        en: "<ul>\n<li><b>Event:</b> built into the language, no dependency, minimal ceremony. No built-in way to say \"finished\" or \"failed\".</li>\n<li><b>IObservable&lt;T&gt;:</b> the interfaces are in the BCL; the useful operators (<code>Where</code>, <code>Throttle</code>, <code>Merge</code>) come from the Rx package <code>System.Reactive</code> (extra dependency, learning curve).</li>\n<li>Subscribing returns an <code>IDisposable</code>, which makes lifetime management (and avoiding leaks) explicit.</li>\n<li>For async streams that you pull, also look at <code>IAsyncEnumerable&lt;T&gt;</code> and <code>Channel&lt;T&gt;</code> (Day 3).</li>\n</ul>",
        hi: "<ul>\n<li><b>Event:</b> language में built-in, कोई dependency नहीं, कम रस्म-अदायगी। \"ख़त्म\" या \"fail\" बताने का built-in तरीक़ा नहीं।</li>\n<li><b>IObservable&lt;T&gt;:</b> interfaces BCL में हैं; काम के operators (<code>Where</code>, <code>Throttle</code>, <code>Merge</code>) Rx package <code>System.Reactive</code> से आते हैं (extra dependency, सीखने की curve)।</li>\n<li>Subscribe करने पर <code>IDisposable</code> मिलता है, जिससे lifetime management (और leaks से बचाव) साफ़ हो जाता है।</li>\n<li>जिन async streams को आप pull करते हो, उनके लिए <code>IAsyncEnumerable&lt;T&gt;</code> और <code>Channel&lt;T&gt;</code> भी देखो (Day 3)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Event:</b> language mein built-in, koi dependency nahi, kam rasm-adayegi. \"Khatam\" ya \"fail\" batane ka built-in tarika nahi.</li>\n<li><b>IObservable&lt;T&gt;:</b> interfaces BCL mein hain; kaam ke operators (<code>Where</code>, <code>Throttle</code>, <code>Merge</code>) Rx package <code>System.Reactive</code> se aate hain (extra dependency, seekhne ki curve).</li>\n<li>Subscribe karne par <code>IDisposable</code> milta hai, jisse lifetime management (aur leaks se bachav) saaf ho jata hai.</li>\n<li>Jin async streams ko aap pull karte ho, unke liye <code>IAsyncEnumerable&lt;T&gt;</code> aur <code>Channel&lt;T&gt;</code> bhi dekho (Day 3).</li>\n</ul>"
      }
    },
    {
      id: "mediator-vs-mediatr",
      depth: "detailed",
      q: "Is the Mediator pattern the same as the MediatR library, and do we need MediatR?",
      answer: "No. Mediator is a pattern; MediatR is one library implementing an in-process request/handler version of it. It is optional. Plain method calls or a small hand-written mediator are often enough.",
      meaning: {
        hi: "नहीं। Mediator एक pattern है; MediatR उसका in-process request/handler version implement करने वाली एक library है। यह optional है। सीधे method calls या छोटा हाथ से लिखा mediator अक्सर काफ़ी है।",
        hg: "Nahi. Mediator ek pattern hai; MediatR uska in-process request/handler version implement karne wali ek library hai. Yeh optional hai. Seedhe method calls ya chhota haath se likha mediator aksar kaafi hai."
      },
      explain: {
        en: "<ul>\n<li>A mediator can be 20 lines (the chat room code on this page). MediatR adds request/response handlers, notifications and pipeline behaviours (cross-cutting code around handlers).</li>\n<li><b>Trade-offs:</b> fewer direct dependencies and a uniform handler shape, but indirection — \"who handles this?\" needs search or IDE support, and stack traces are longer. A third-party package also means upgrade and licensing decisions: check its current licence terms before adopting it in a company.</li>\n<li>Day 11 covers CQRS and when a request/handler style helps.</li>\n<li><b>Mediator risks:</b> it becomes a god object holding all rules; keep each handler small and focused.</li>\n</ul>\n<p>Follow-up: \"Would you add it to a small CRUD API?\" — probably not; start with direct service calls and add a mediator when interactions get tangled.</p>",
        hi: "<ul>\n<li>Mediator 20 lines का हो सकता है (इस page का chat room code)। MediatR request/response handlers, notifications और pipeline behaviours (handlers के चारों ओर cross-cutting code) जोड़ता है।</li>\n<li><b>Trade-offs:</b> कम सीधी dependencies और एक जैसी handler shape, पर indirection — \"इसे कौन संभालता है?\" के लिए search या IDE support चाहिए, और stack traces लंबे होते हैं। Third-party package का मतलब upgrade और licensing के फ़ैसले भी: company में अपनाने से पहले उसकी मौजूदा licence शर्तें देखो।</li>\n<li>Day 11 में CQRS और request/handler style कब काम आता है, वह है।</li>\n<li><b>Mediator के risks:</b> वह सारे rules रखने वाला god object बन जाता है; हर handler छोटा और focused रखो।</li>\n</ul>\n<p>Follow-up: \"क्या छोटे CRUD API में जोड़ोगे?\" — शायद नहीं; सीधे service calls से शुरू करो और interactions उलझें तब mediator लाओ।</p>",
        hg: "<ul>\n<li>Mediator 20 lines ka ho sakta hai (is page ka chat room code). MediatR request/response handlers, notifications aur pipeline behaviours (handlers ke charon or cross-cutting code) jodta hai.</li>\n<li><b>Trade-offs:</b> kam seedhi dependencies aur ek jaisi handler shape, par indirection — \"ise kaun sambhalta hai?\" ke liye search ya IDE support chahiye, aur stack traces lambe hote hain. Third-party package ka matlab upgrade aur licensing ke faisle bhi: company mein apnane se pehle uski maujooda licence shartein dekho.</li>\n<li>Day 11 mein CQRS aur request/handler style kab kaam aata hai, woh hai.</li>\n<li><b>Mediator ke risks:</b> woh saare rules rakhne wala god object ban jata hai; har handler chhota aur focused rakho.</li>\n</ul>\n<p>Follow-up: \"Kya chhote CRUD API mein jodoge?\" — shayad nahi; seedhe service calls se shuru karo aur interactions uljhein tab mediator lao.</p>"
      }
    },
    {
      id: "delegatinghandler-pipeline",
      depth: "detailed",
      q: "How does the HttpClient DelegatingHandler pipeline work, and which pattern is it?",
      answer: "Each DelegatingHandler wraps an inner handler and calls base.SendAsync to continue, so request and response pass through a chain. It can also short-circuit by returning its own response.",
      meaning: {
        hi: "हर DelegatingHandler एक inner handler को wrap करता है और आगे बढ़ने के लिए base.SendAsync बुलाता है, इसलिए request और response एक chain से गुज़रते हैं। वह अपना response लौटाकर short-circuit भी कर सकता है।",
        hg: "Har DelegatingHandler ek inner handler ko wrap karta hai aur aage badhne ke liye base.SendAsync bulata hai, isliye request aur response ek chain se guzarte hain. Woh apna response lautakar short-circuit bhi kar sakta hai."
      },
      explain: {
        en: "<ul>\n<li>The last handler in the chain (usually <code>HttpClientHandler</code>/<code>SocketsHttpHandler</code>) does the real network call.</li>\n<li>With <code>IHttpClientFactory</code> (Day 3) you add handlers with <code>AddHttpMessageHandler&lt;T&gt;()</code>; they run in the order registered, the first being outermost.</li>\n<li>Typical uses: add an auth header, correlation id, logging, retry policies. A retry handler calls the inner handler several times — so it is more than a pure chain or a pure decorator.</li>\n<li>Pattern name: Chain of Responsibility in structure, often used as Decorator in intent. In an interview, name both and explain why.</li>\n<li>Test tip: put a fake <code>HttpMessageHandler</code> at the end (as in the puzzle) instead of using the network.</li>\n</ul>",
        hi: "<ul>\n<li>Chain का आख़िरी handler (आम तौर पर <code>HttpClientHandler</code>/<code>SocketsHttpHandler</code>) असली network call करता है।</li>\n<li><code>IHttpClientFactory</code> (Day 3) के साथ handlers <code>AddHttpMessageHandler&lt;T&gt;()</code> से जोड़ते हैं; वे register के क्रम में चलते हैं, पहला सबसे बाहर।</li>\n<li>आम उपयोग: auth header, correlation id, logging, retry policies जोड़ना। Retry handler inner handler को कई बार बुलाता है — इसलिए यह पूरी तरह न pure chain है न pure decorator।</li>\n<li>Pattern का नाम: structure में Chain of Responsibility, intent में अक्सर Decorator। Interview में दोनों नाम लो और कारण बताओ।</li>\n<li>Test tip: network की जगह आख़िर में fake <code>HttpMessageHandler</code> रखो (जैसा puzzle में)।</li>\n</ul>",
        hg: "<ul>\n<li>Chain ka aakhri handler (aam taur par <code>HttpClientHandler</code>/<code>SocketsHttpHandler</code>) asli network call karta hai.</li>\n<li><code>IHttpClientFactory</code> (Day 3) ke saath handlers <code>AddHttpMessageHandler&lt;T&gt;()</code> se jodte hain; woh register ke kram mein chalte hain, pehla sabse bahar.</li>\n<li>Aam upyog: auth header, correlation id, logging, retry policies jodna. Retry handler inner handler ko kai baar bulata hai — isliye yeh poori tarah na pure chain hai na pure decorator.</li>\n<li>Pattern ka naam: structure mein Chain of Responsibility, intent mein aksar Decorator. Interview mein dono naam lo aur karan batao.</li>\n<li>Test tip: network ki jagah aakhir mein fake <code>HttpMessageHandler</code> rakho (jaisa puzzle mein).</li>\n</ul>"
      }
    },
    {
      id: "patterns-in-dotnet",
      depth: "detailed",
      q: "Which design patterns are already built into .NET and ASP.NET Core?",
      answer: "Decorator in Stream wrappers, Chain in middleware and DelegatingHandler, Observer in events and IObservable, Strategy in IComparer and DI, Builder in WebApplication.CreateBuilder, and Factory in IHttpClientFactory.",
      meaning: {
        hi: "Stream wrappers में Decorator, middleware और DelegatingHandler में Chain, events और IObservable में Observer, IComparer और DI में Strategy, WebApplication.CreateBuilder में Builder, और IHttpClientFactory में Factory।",
        hg: "Stream wrappers mein Decorator, middleware aur DelegatingHandler mein Chain, events aur IObservable mein Observer, IComparer aur DI mein Strategy, WebApplication.CreateBuilder mein Builder, aur IHttpClientFactory mein Factory."
      },
      explain: {
        en: "<ul>\n<li><b>Decorator:</b> <code>GZipStream</code>, <code>BufferedStream</code>, <code>CryptoStream</code>.</li>\n<li><b>Chain:</b> ASP.NET Core middleware (Day 12), <code>DelegatingHandler</code>.</li>\n<li><b>Observer:</b> <code>event</code>, <code>IObservable&lt;T&gt;</code>, also <code>INotifyPropertyChanged</code> in UI binding.</li>\n<li><b>Strategy:</b> <code>IComparer&lt;T&gt;</code>, <code>IEqualityComparer&lt;T&gt;</code>, injected services chosen by DI.</li>\n<li><b>Proxy:</b> EF Core lazy-loading proxies; <b>Facade:</b> <code>File</code> and <code>HttpClient</code> helper methods hide several lower-level steps.</li>\n<li><b>Builder / Factory</b> (Day 9): <code>WebApplication.CreateBuilder</code>, <code>IHttpClientFactory</code>.</li>\n</ul>\n<p>This answer shows that you use patterns daily without the ceremony. Choose three examples and explain each in one line.</p>",
        hi: "<ul>\n<li><b>Decorator:</b> <code>GZipStream</code>, <code>BufferedStream</code>, <code>CryptoStream</code>।</li>\n<li><b>Chain:</b> ASP.NET Core middleware (Day 12), <code>DelegatingHandler</code>।</li>\n<li><b>Observer:</b> <code>event</code>, <code>IObservable&lt;T&gt;</code>, और UI binding में <code>INotifyPropertyChanged</code> भी।</li>\n<li><b>Strategy:</b> <code>IComparer&lt;T&gt;</code>, <code>IEqualityComparer&lt;T&gt;</code>, DI से चुनी inject की हुई services।</li>\n<li><b>Proxy:</b> EF Core lazy-loading proxies; <b>Facade:</b> <code>File</code> और <code>HttpClient</code> के helper methods कई निचले steps छुपाते हैं।</li>\n<li><b>Builder / Factory</b> (Day 9): <code>WebApplication.CreateBuilder</code>, <code>IHttpClientFactory</code>।</li>\n</ul>\n<p>यह जवाब दिखाता है कि आप patterns रोज़ बिना तामझाम के use करते हो। तीन उदाहरण चुनो और हर एक एक line में समझाओ।</p>",
        hg: "<ul>\n<li><b>Decorator:</b> <code>GZipStream</code>, <code>BufferedStream</code>, <code>CryptoStream</code>.</li>\n<li><b>Chain:</b> ASP.NET Core middleware (Day 12), <code>DelegatingHandler</code>.</li>\n<li><b>Observer:</b> <code>event</code>, <code>IObservable&lt;T&gt;</code>, aur UI binding mein <code>INotifyPropertyChanged</code> bhi.</li>\n<li><b>Strategy:</b> <code>IComparer&lt;T&gt;</code>, <code>IEqualityComparer&lt;T&gt;</code>, DI se chuni inject ki hui services.</li>\n<li><b>Proxy:</b> EF Core lazy-loading proxies; <b>Facade:</b> <code>File</code> aur <code>HttpClient</code> ke helper methods kai nichle steps chhupate hain.</li>\n<li><b>Builder / Factory</b> (Day 9): <code>WebApplication.CreateBuilder</code>, <code>IHttpClientFactory</code>.</li>\n</ul>\n<p>Yeh jawab dikhata hai ki aap patterns roz bina taamjhaam ke use karte ho. Teen udaharan chuno aur har ek ek line mein samjhao.</p>"
      }
    },
    {
      id: "patterns-overuse",
      depth: "detailed",
      q: "As a Tech Lead, how do you stop a team from over-using design patterns?",
      answer: "I ask what changes independently and what pain the pattern removes. Start with the simplest code, and add the named pattern when a second or third variation appears.",
      meaning: {
        hi: "मैं पूछता हूँ कि क्या अलग-अलग बदलता है और pattern कौन सा दर्द हटाता है। सबसे सरल code से शुरू करो, और दूसरी-तीसरी variation आने पर नामी pattern जोड़ो।",
        hg: "Main poochta hoon ki kya alag-alag badalta hai aur pattern kaun sa dard hatata hai. Sabse saral code se shuru karo, aur doosri-teesri variation aane par naami pattern jodo."
      },
      explain: {
        en: "<ul>\n<li><b>Code-review questions:</b> \"What varies here?\", \"How many implementations today?\", \"What does the extra layer let us do tomorrow that we cannot do now?\"</li>\n<li><b>Smells:</b> an interface with one implementation and no test seam, a factory for one type, a mediator for three classes, decorators stacked for one concern.</li>\n<li><b>Healthy use:</b> name the pattern in the PR so the team shares vocabulary; link to the pain (duplicated logging, growing switch, vendor leak).</li>\n<li>Rule of thumb: tolerate duplication once, abstract on the third occurrence — but not when the second occurrence is a risky area like security.</li>\n</ul>\n<p>Follow-up: \"And when the team under-uses patterns?\" — repeated cross-cutting code, huge switches and vendor types spread across layers are the signals.</p>",
        hi: "<ul>\n<li><b>Code-review सवाल:</b> \"यहाँ क्या बदलता है?\", \"आज कितनी implementations हैं?\", \"यह extra layer हमें कल क्या करने देती है जो आज नहीं कर सकते?\"</li>\n<li><b>Smells:</b> एक implementation वाला interface जिसमें test seam भी नहीं, एक type के लिए factory, तीन classes के लिए mediator, एक concern के लिए stack किए decorators।</li>\n<li><b>सही use:</b> PR में pattern का नाम लो ताकि team की शब्दावली साझा रहे; दर्द से जोड़ो (दोहराई logging, बढ़ती switch, vendor leak)।</li>\n<li>Rule of thumb: एक बार duplication सह लो, तीसरी बार abstract करो — पर तब नहीं जब दूसरी बार security जैसा जोखिम वाला area हो।</li>\n</ul>\n<p>Follow-up: \"और जब team patterns कम use करे?\" — दोहराया cross-cutting code, बड़ी switches और layers में फैले vendor types इसके संकेत हैं।</p>",
        hg: "<ul>\n<li><b>Code-review sawal:</b> \"Yahan kya badalta hai?\", \"Aaj kitni implementations hain?\", \"Yeh extra layer hamein kal kya karne deti hai jo aaj nahi kar sakte?\"</li>\n<li><b>Smells:</b> ek implementation wala interface jisme test seam bhi nahi, ek type ke liye factory, teen classes ke liye mediator, ek concern ke liye stack kiye decorators.</li>\n<li><b>Sahi use:</b> PR mein pattern ka naam lo taaki team ki shabdawali saajhi rahe; dard se jodo (dohrai logging, badhti switch, vendor leak).</li>\n<li>Rule of thumb: ek baar duplication sah lo, teesri baar abstract karo — par tab nahi jab doosri baar security jaisa jokhim wala area ho.</li>\n</ul>\n<p>Follow-up: \"Aur jab team patterns kam use kare?\" — dohraya cross-cutting code, badi switches aur layers mein phaile vendor types iske sanket hain.</p>"
      }
    }
  ],
  puzzles: [
    {
      id: "decorator-wrap-order",
      src: "IText a = new Bracket(new Exclaim(new Plain(\"hi\")));\nIText b = new Exclaim(new Bracket(new Plain(\"hi\")));\nConsole.WriteLine(a.Render());\nConsole.WriteLine(b.Render());\n\ninterface IText { string Render(); }\n\nclass Plain : IText\n{\n    private readonly string _text;\n    public Plain(string text) => _text = text;\n    public string Render() => _text;\n}\n\nclass Bracket : IText\n{\n    private readonly IText _inner;\n    public Bracket(IText inner) => _inner = inner;\n\n    public string Render()\n    {\n        Console.WriteLine(\"enter Bracket\");\n        return \"[\" + _inner.Render() + \"]\";\n    }\n}\n\nclass Exclaim : IText\n{\n    private readonly IText _inner;\n    public Exclaim(IText inner) => _inner = inner;\n\n    public string Render()\n    {\n        Console.WriteLine(\"enter Exclaim\");\n        return _inner.Render() + \"!\";\n    }\n}",
      answer: "enter Bracket\nenter Exclaim\n[hi!]\nenter Exclaim\nenter Bracket\n[hi]!",
      explain: {
        en: "<ul>\n<li>The outermost decorator's <code>Render</code> runs first, so \"enter Bracket\" prints before \"enter Exclaim\" in the first program.</li>\n<li>Then the call goes inward to <code>Plain</code>, and the results are built on the way <b>out</b>: Exclaim adds \"!\" first, then Bracket wraps it: <code>[hi!]</code>.</li>\n<li>Swap the wrapping order and both the trace and the result change: <code>[hi]!</code>. Decorator order is part of the behaviour.</li>\n</ul>",
        hi: "<ul>\n<li>सबसे बाहरी decorator का <code>Render</code> पहले चलता है, इसलिए पहले program में \"enter Bracket\", \"enter Exclaim\" से पहले छपता है।</li>\n<li>फिर call अंदर <code>Plain</code> तक जाती है, और नतीजा <b>बाहर लौटते</b> समय बनता है: पहले Exclaim \"!\" जोड़ता है, फिर Bracket उसे wrap करता है: <code>[hi!]</code>।</li>\n<li>Wrapping का क्रम बदलो तो trace और नतीजा दोनों बदल जाते हैं: <code>[hi]!</code>। Decorator का order behaviour का हिस्सा है।</li>\n</ul>",
        hg: "<ul>\n<li>Sabse bahari decorator ka <code>Render</code> pehle chalta hai, isliye pehle program mein \"enter Bracket\", \"enter Exclaim\" se pehle chhapta hai.</li>\n<li>Phir call andar <code>Plain</code> tak jati hai, aur nateeja <b>bahar lautte</b> samay banta hai: pehle Exclaim \"!\" jodta hai, phir Bracket use wrap karta hai: <code>[hi!]</code>.</li>\n<li>Wrapping ka kram badlo to trace aur nateeja dono badal jate hain: <code>[hi]!</code>. Decorator ka order behaviour ka hissa hai.</li>\n</ul>"
      }
    },
    {
      id: "pipeline-short-circuit-cache",
      src: "var cache = new Dictionary<string, string>();\n\nHandler endpoint = request =>\n{\n    Console.WriteLine(\"endpoint\");\n    return \"data\";\n};\n\nMiddleware timing = next => request =>\n{\n    Console.WriteLine(\"timing in\");\n    var response = next(request);\n    Console.WriteLine(\"timing out\");\n    return response;\n};\n\nMiddleware caching = next => request =>\n{\n    if (cache.TryGetValue(request, out var hit))\n    {\n        Console.WriteLine(\"cache hit\");\n        return hit;\n    }\n    var response = next(request);\n    cache[request] = response;\n    return response;\n};\n\nvar pipeline = timing(caching(endpoint));\nConsole.WriteLine(pipeline(\"/a\"));\nConsole.WriteLine(pipeline(\"/a\"));\n\ndelegate string Handler(string request);\ndelegate Handler Middleware(Handler next);",
      answer: "timing in\nendpoint\ntiming out\ndata\ntiming in\ncache hit\ntiming out\ndata",
      explain: {
        en: "<ul>\n<li>Pipeline = <code>timing(caching(endpoint))</code>; the first call goes through all three: \"timing in\", \"endpoint\", \"timing out\", then <code>data</code> is printed.</li>\n<li>On the second call <code>caching</code> finds the key and returns early — \"endpoint\" is skipped (short-circuit).</li>\n<li>But <code>timing</code> is <b>outside</b> caching, so it still prints \"timing in\" and \"timing out\". A short-circuit only skips the links <i>after</i> it.</li>\n</ul>",
        hi: "<ul>\n<li>Pipeline = <code>timing(caching(endpoint))</code>; पहली call तीनों से गुज़रती है: \"timing in\", \"endpoint\", \"timing out\", फिर <code>data</code> छपता है।</li>\n<li>दूसरी call पर <code>caching</code> को key मिल जाती है और वह जल्दी लौट जाता है — \"endpoint\" छूट जाता है (short-circuit)।</li>\n<li>पर <code>timing</code> caching के <b>बाहर</b> है, इसलिए \"timing in\" और \"timing out\" फिर भी छपते हैं। Short-circuit सिर्फ़ अपने <i>बाद</i> वाले links को छोड़ता है।</li>\n</ul>",
        hg: "<ul>\n<li>Pipeline = <code>timing(caching(endpoint))</code>; pehli call teeno se guzarti hai: \"timing in\", \"endpoint\", \"timing out\", phir <code>data</code> chhapta hai.</li>\n<li>Doosri call par <code>caching</code> ko key mil jati hai aur woh jaldi laut jata hai — \"endpoint\" chhoot jata hai (short-circuit).</li>\n<li>Par <code>timing</code> caching ke <b>bahar</b> hai, isliye \"timing in\" aur \"timing out\" phir bhi chhapte hain. Short-circuit sirf apne <i>baad</i> wale links ko chhodta hai.</li>\n</ul>"
      }
    },
    {
      id: "event-order-and-unsubscribe",
      src: "var button = new Button();\n\nbutton.Clicked += A;\nbutton.Clicked += B;\nbutton.Clicked += A;\nbutton.Click();\n\nConsole.WriteLine(\"--\");\nbutton.Clicked -= A;\nbutton.Click();\n\nConsole.WriteLine(\"--\");\nbutton.Clicked += (s, e) => Console.WriteLine(\"L\");\nbutton.Clicked -= (s, e) => Console.WriteLine(\"L\");\nbutton.Click();\n\nstatic void A(object? sender, EventArgs e) => Console.WriteLine(\"A\");\nstatic void B(object? sender, EventArgs e) => Console.WriteLine(\"B\");\n\nclass Button\n{\n    public event EventHandler? Clicked;\n    public void Click() => Clicked?.Invoke(this, EventArgs.Empty);\n}",
      answer: "A\nB\nA\n--\nA\nB\n--\nA\nB\nL",
      explain: {
        en: "<ul>\n<li>Handlers run in subscription order, and the same method can be subscribed twice: A, B, A.</li>\n<li><code>-= A</code> removes only <b>one</b> subscription — the <b>last</b> matching one — leaving A, B.</li>\n<li>Two separate lambdas are two different delegate instances (different compiler-generated methods), so <code>-=</code> with a new lambda removes nothing and \"L\" stays subscribed. Keep the delegate in a variable to unsubscribe.</li>\n</ul>",
        hi: "<ul>\n<li>Handlers subscribe के क्रम में चलते हैं, और एक ही method दो बार subscribe हो सकता है: A, B, A।</li>\n<li><code>-= A</code> सिर्फ़ <b>एक</b> subscription हटाता है — <b>आख़िरी</b> मेल खाता — और A, B बचते हैं।</li>\n<li>दो अलग lambdas दो अलग delegate instances हैं (compiler के बनाए अलग methods), इसलिए नए lambda से <code>-=</code> कुछ नहीं हटाता और \"L\" subscribe रहता है। Unsubscribe के लिए delegate को variable में रखो।</li>\n</ul>",
        hg: "<ul>\n<li>Handlers subscribe ke kram mein chalte hain, aur ek hi method do baar subscribe ho sakta hai: A, B, A.</li>\n<li><code>-= A</code> sirf <b>ek</b> subscription hatata hai — <b>aakhri</b> match karta — aur A, B bachte hain.</li>\n<li>Do alag lambdas do alag delegate instances hain (compiler ke banaye alag methods), isliye naye lambda se <code>-=</code> kuch nahi hatata aur \"L\" subscribe rehta hai. Unsubscribe ke liye delegate ko variable mein rakho.</li>\n</ul>"
      }
    },
    {
      id: "keyed-vs-plain-resolution",
      packages: [
        "Microsoft.Extensions.DependencyInjection"
      ],
      src: "using Microsoft.Extensions.DependencyInjection;\n\nvar services = new ServiceCollection();\nservices.AddSingleton<IShipping, Standard>();\nservices.AddKeyedSingleton<IShipping, Express>(\"exp\");\nusing var provider = services.BuildServiceProvider();\n\nConsole.WriteLine(provider.GetRequiredService<IShipping>().Cost(10));\nConsole.WriteLine(provider.GetRequiredKeyedService<IShipping>(\"exp\").Cost(10));\nConsole.WriteLine(provider.GetKeyedService<IShipping>(\"zzz\") is null);\nConsole.WriteLine(provider.GetServices<IShipping>().Count());\n\ninterface IShipping { int Cost(int kg); }\nclass Standard : IShipping { public int Cost(int kg) => kg * 5; }\nclass Express : IShipping { public int Cost(int kg) => kg * 12; }",
      answer: "50\n120\nTrue\n1",
      explain: {
        en: "<ul>\n<li><code>GetRequiredService&lt;IShipping&gt;()</code> returns the <b>non-keyed</b> registration: <code>Standard</code>, 10 × 5 = <code>50</code>.</li>\n<li><code>GetRequiredKeyedService&lt;IShipping&gt;(\"exp\")</code> returns <code>Express</code>: 10 × 12 = <code>120</code>.</li>\n<li>An unknown key with <code>GetKeyedService</code> gives <code>null</code>, so <code>is null</code> prints <code>True</code>.</li>\n<li><code>GetServices&lt;IShipping&gt;()</code> (plain) returns only non-keyed registrations: <code>1</code>. Keyed strategies are not part of the plain list.</li>\n</ul>",
        hi: "<ul>\n<li><code>GetRequiredService&lt;IShipping&gt;()</code> <b>non-keyed</b> registration देता है: <code>Standard</code>, 10 × 5 = <code>50</code>।</li>\n<li><code>GetRequiredKeyedService&lt;IShipping&gt;(\"exp\")</code> <code>Express</code> देता है: 10 × 12 = <code>120</code>।</li>\n<li>अनजान key पर <code>GetKeyedService</code> <code>null</code> देता है, इसलिए <code>is null</code> <code>True</code> छापता है।</li>\n<li>सादा <code>GetServices&lt;IShipping&gt;()</code> सिर्फ़ non-keyed registrations देता है: <code>1</code>। Keyed strategies सादी list का हिस्सा नहीं हैं।</li>\n</ul>",
        hg: "<ul>\n<li><code>GetRequiredService&lt;IShipping&gt;()</code> <b>non-keyed</b> registration deta hai: <code>Standard</code>, 10 × 5 = <code>50</code>.</li>\n<li><code>GetRequiredKeyedService&lt;IShipping&gt;(\"exp\")</code> <code>Express</code> deta hai: 10 × 12 = <code>120</code>.</li>\n<li>Anjaan key par <code>GetKeyedService</code> <code>null</code> deta hai, isliye <code>is null</code> <code>True</code> chhapta hai.</li>\n<li>Saada <code>GetServices&lt;IShipping&gt;()</code> sirf non-keyed registrations deta hai: <code>1</code>. Keyed strategies saadi list ka hissa nahi hain.</li>\n</ul>"
      }
    },
    {
      id: "delegating-handler-order",
      src: "var client = new HttpClient(new Tag(\"A\", new Tag(\"B\", new FakeNetwork())));\nvar body = await client.GetStringAsync(\"http://example.test/ping\");\nConsole.WriteLine(body);\n\nclass Tag : DelegatingHandler\n{\n    private readonly string _name;\n\n    public Tag(string name, HttpMessageHandler inner)\n    {\n        _name = name;\n        InnerHandler = inner;\n    }\n\n    protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)\n    {\n        Console.WriteLine($\"{_name} before\");\n        var response = await base.SendAsync(request, cancellationToken);\n        Console.WriteLine($\"{_name} after\");\n        return response;\n    }\n}\n\nclass FakeNetwork : HttpMessageHandler\n{\n    protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)\n    {\n        Console.WriteLine(\"network\");\n        return Task.FromResult(new HttpResponseMessage { Content = new StringContent(\"pong\") });\n    }\n}",
      answer: "A before\nB before\nnetwork\nB after\nA after\npong",
      explain: {
        en: "<ul>\n<li>Handler A wraps B, which wraps the fake network. The request travels A → B → network.</li>\n<li>\"before\" lines print on the way in (A, then B), \"network\" at the end of the chain, and \"after\" lines on the way <b>out</b> in reverse (B, then A).</li>\n<li>The response body <code>pong</code> prints last. Same shape as middleware: code before <code>next</code>, code after <code>next</code>.</li>\n<li>No real network call is made because the last handler is a fake — a handy test trick.</li>\n</ul>",
        hi: "<ul>\n<li>Handler A, B को wrap करता है, और B fake network को। Request A → B → network जाती है।</li>\n<li>\"before\" lines अंदर जाते समय छपती हैं (A, फिर B), \"network\" chain के अंत में, और \"after\" lines <b>बाहर</b> लौटते समय उल्टे क्रम में (B, फिर A)।</li>\n<li>Response body <code>pong</code> आख़िर में छपती है। Middleware जैसी ही shape: <code>next</code> से पहले code, <code>next</code> के बाद code।</li>\n<li>असली network call नहीं होती क्योंकि आख़िरी handler fake है — test की काम की ट्रिक।</li>\n</ul>",
        hg: "<ul>\n<li>Handler A, B ko wrap karta hai, aur B fake network ko. Request A → B → network jati hai.</li>\n<li>\"before\" lines andar jate samay chhapti hain (A, phir B), \"network\" chain ke ant mein, aur \"after\" lines <b>bahar</b> lautte samay ulte kram mein (B, phir A).</li>\n<li>Response body <code>pong</code> aakhir mein chhapti hai. Middleware jaisi hi shape: <code>next</code> se pehle code, <code>next</code> ke baad code.</li>\n<li>Asli network call nahi hoti kyunki aakhri handler fake hai — test ki kaam ki trick.</li>\n</ul>"
      }
    },
    {
      id: "event-handler-exception",
      src: "var alerts = new Alerts();\nalerts.Raised += (s, e) => Console.WriteLine(\"1 ok\");\nalerts.Raised += (s, e) => throw new InvalidOperationException(\"boom\");\nalerts.Raised += (s, e) => Console.WriteLine(\"3 ok\");\n\ntry\n{\n    alerts.Raise();\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine($\"caught {ex.Message}\");\n}\n\nclass Alerts\n{\n    public event EventHandler? Raised;\n    public void Raise() => Raised?.Invoke(this, EventArgs.Empty);\n}",
      answer: "1 ok\ncaught boom",
      explain: {
        en: "<ul>\n<li>Event handlers run <b>synchronously</b>, one after another, on the thread that raises the event.</li>\n<li>The second handler throws, the exception propagates out of <code>Invoke</code> into <code>Raise</code>, and the third handler never runs.</li>\n<li>The caller's <code>catch</code> prints \"caught boom\". In an Observer, one bad subscriber can break the others: for isolation, catch inside each handler or loop over <code>GetInvocationList()</code> yourself.</li>\n</ul>",
        hi: "<ul>\n<li>Event handlers <b>synchronously</b>, एक के बाद एक, event raise करने वाले thread पर चलते हैं।</li>\n<li>दूसरा handler throw करता है, exception <code>Invoke</code> से निकलकर <code>Raise</code> में पहुँचता है, और तीसरा handler कभी नहीं चलता।</li>\n<li>Caller का <code>catch</code> \"caught boom\" छापता है। Observer में एक ख़राब subscriber बाक़ियों को तोड़ सकता है: अलग रखने के लिए हर handler के अंदर catch करो या <code>GetInvocationList()</code> पर खुद loop चलाओ।</li>\n</ul>",
        hg: "<ul>\n<li>Event handlers <b>synchronously</b>, ek ke baad ek, event raise karne wale thread par chalte hain.</li>\n<li>Doosra handler throw karta hai, exception <code>Invoke</code> se nikalkar <code>Raise</code> mein pahunchta hai, aur teesra handler kabhi nahi chalta.</li>\n<li>Caller ka <code>catch</code> \"caught boom\" chhapta hai. Observer mein ek kharab subscriber baakiyon ko tod sakta hai: alag rakhne ke liye har handler ke andar catch karo ya <code>GetInvocationList()</code> par khud loop chalao.</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Adapter</b>: implement your interface, hold the vendor object, translate calls and errors. It changes the interface.",
      "<b>Facade</b>: one simple method over several subsystems; it coordinates, it does not decide.",
      "<b>Decorator</b>: same interface plus an inner object, to add behaviour around it; layers stack and order matters.",
      "<b>Proxy</b>: same interface, controls access to the real object (protection, lazy, caching, remote).",
      "<b>Strategy</b>: one interface, many swappable versions of a rule; the choice lives in one place.",
      "<b>Observer</b>: one subject, many subscribers via <code>event</code> (<code>+=</code>, <code>-=</code>); handlers are synchronous and in order.",
      "<b>Mediator</b>: components talk to a hub, not to each other; beware a god-object hub.",
      "<b>Chain of Responsibility</b>: handlers in a line; each handles or passes on, and the end needs a clear result.",
      "Decorator vs Proxy vs Adapter: same wrapper shape; intent is add behaviour, control access, change interface.",
      "Strategy vs State: the client picks a Strategy; the context swaps its State object, often triggered by the states.",
      "Chain vs Decorator: a chain link may stop the request; a decorator normally always delegates.",
      "Add a pattern only when you can name the pain it removes."
    ],
    meaning: {
      hi: [
        "Adapter: अपना interface implement करो, vendor का object रखो, calls और errors translate करो; interface बदलता है",
        "Facade: कई subsystems पर एक आसान method; coordinate करता है, फ़ैसले नहीं लेता",
        "Decorator: वही interface और अंदर एक object, आसपास behaviour जोड़ने के लिए; परतें लगती हैं और क्रम मायने रखता है",
        "Proxy: वही interface, असली object तक पहुँच control करता है (protection, lazy, caching, remote)",
        "Strategy: एक interface, rule के कई बदले जा सकने वाले रूप; चुनाव एक ही जगह",
        "Observer: एक subject, कई subscribers <code>event</code> से (<code>+=</code>, <code>-=</code>); handlers synchronous और क्रम से चलते हैं",
        "Mediator: components hub से बात करते हैं, आपस में नहीं; hub के god object बनने से बचो",
        "Chain of Responsibility: handlers की कतार; हर एक सँभालता है या आगे देता है, और अंत के लिए साफ़ result चाहिए",
        "Decorator vs Proxy vs Adapter: wrapper की shape एक; intent है behaviour जोड़ना, access control, interface बदलना।",
        "Strategy vs State: Strategy client चुनता है; context अपना State object बदलता है, अक्सर states के trigger से।",
        "Chain vs Decorator: chain का link request रोक सकता है; decorator आम तौर पर हमेशा आगे देता है।",
        "Pattern तभी जोड़ो जब उस दर्द का नाम बता सको जो वह हटाता है।"
      ],
      hg: [
        "Adapter: apna interface implement karo, vendor ka object rakho, calls aur errors translate karo; interface badalta hai",
        "Facade: kai subsystems par ek aasaan method; coordinate karta hai, faisle nahi leta",
        "Decorator: wahi interface aur andar ek object, aaspaas behaviour jodne ke liye; parten lagti hain aur kram maayne rakhta hai",
        "Proxy: wahi interface, asli object tak pahunch control karta hai (protection, lazy, caching, remote)",
        "Strategy: ek interface, rule ke kai badle ja sakne wale roop; chunaav ek hi jagah",
        "Observer: ek subject, kai subscribers <code>event</code> se (<code>+=</code>, <code>-=</code>); handlers synchronous aur kram se chalte hain",
        "Mediator: components hub se baat karte hain, aapas mein nahi; hub ke god object banne se bacho",
        "Chain of Responsibility: handlers ki qataar; har ek sambhalta hai ya aage deta hai, aur ant ke liye saaf result chahiye",
        "Decorator vs Proxy vs Adapter: wrapper ki shape ek; intent hai behaviour jodna, access control, interface badalna.",
        "Strategy vs State: Strategy client chunta hai; context apna State object badalta hai, aksar states ke trigger se.",
        "Chain vs Decorator: chain ka link request rok sakta hai; decorator aam taur par hamesha aage deta hai.",
        "Pattern tabhi jodo jab us dard ka naam bata sako jo woh hatata hai."
      ]
    }
  }
};
