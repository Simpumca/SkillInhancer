// Day 16 — Microservices deep dive, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 16,
  format: "lesson",
  title: {
    en: "Microservices deep dive — gateway, messaging, Saga, Outbox, resilience, tracing",
    hi: "Microservices गहराई से — gateway, messaging, Saga, Outbox, resilience, tracing",
    hg: "Microservices gehraai se — gateway, messaging, Saga, Outbox, resilience, tracing"
  },
  summary: {
    en: "<p>Day 16 takes the CRM from Day 15 (Support and Billing as separate services) and builds the survival kit in 8 short lessons: sync vs async, an API gateway, a message broker, the Transactional Outbox, the idempotent consumer, a Saga with compensation, retry with a circuit breaker, and distributed tracing.</p><p>Every lesson runs a small C# console program with fake in-memory services, so the output is the same every time. No real broker or network is needed. The Deep Dive adds the .NET tools (Polly, YARP, OpenTelemetry) and the design details.</p>",
    hi: "<p>Day 16 Day 15 के CRM (Support और Billing अलग services) को लेकर 8 छोटे पाठों में बचाव की पूरी किट बनाता है: sync vs async, API gateway, message broker, Transactional Outbox, idempotent consumer, compensation वाला Saga, circuit breaker के साथ retry, और distributed tracing।</p><p>हर पाठ में नक़ली in-memory services वाला एक छोटा C# console program चलता है, इसलिए output हर बार एक जैसा रहता है। असली broker या network नहीं चाहिए। Deep Dive में .NET के tools (Polly, YARP, OpenTelemetry) और design की details हैं।</p>",
    hg: "<p>Day 16 Day 15 ke CRM (Support aur Billing alag services) ko lekar 8 chhote lessons mein bachaav ki poori kit banata hai: sync vs async, API gateway, message broker, Transactional Outbox, idempotent consumer, compensation wala Saga, circuit breaker ke saath retry, aur distributed tracing.</p><p>Har lesson mein nakli in-memory services wala ek chhota C# console program chalta hai, isliye output har baar ek jaisa rehta hai. Asli broker ya network nahi chahiye. Deep Dive mein .NET ke tools (Polly, YARP, OpenTelemetry) aur design ki details hain.</p>"
  },
  sections: [
    {
      id: "sync-vs-async",
      depth: "short",
      title: {
        en: "Sync vs async: coupling in time",
        hi: "Sync vs async: समय की dependency",
        hg: "Sync vs async: samay ki dependency"
      },
      lesson: {
        buildsOn: {
          en: "Day 15 split the CRM into bounded contexts: Support (tickets) and Billing (plans, invoices). Once they are separate services, they must talk over the network. Today is the first question: does Support wait for Billing, or not?",
          hi: "Day 15 में CRM को bounded contexts में बाँटा: Support (tickets) और Billing (plans, invoices)। जब ये अलग services बन जाती हैं, तो इन्हें network पर बात करनी पड़ती है। आज पहला सवाल: क्या Support, Billing का इंतज़ार करे या नहीं?",
          hg: "Day 15 mein CRM ko bounded contexts mein baanta: Support (tickets) aur Billing (plans, invoices). Jab ye alag services ban jaati hain, to inhe network par baat karni padti hai. Aaj pehla sawaal: kya Support, Billing ka intezaar kare ya nahi?"
        },
        what: {
          en: "<p><b>Sync</b> call (HTTP or gRPC): the caller sends a request and <b>waits</b> for the answer. <b>Async</b> messaging: the caller puts a message on a broker and <b>carries on</b>; the other service reads it later.</p><p>Sync makes the two services depend on each other <b>at the same moment</b> (temporal coupling). Async removes that.</p>",
          hi: "<p><b>Sync</b> call (HTTP या gRPC): caller request भेजता है और जवाब का <b>इंतज़ार</b> करता है। <b>Async</b> messaging: caller broker पर एक message रख देता है और <b>आगे बढ़ जाता है</b>; दूसरी service उसे बाद में पढ़ती है।</p><p>Sync में दोनों services <b>एक ही समय</b> पर एक-दूसरे पर निर्भर होती हैं (temporal coupling)। Async यह dependency हटा देता है।</p>",
          hg: "<p><b>Sync</b> call (HTTP ya gRPC): caller request bhejta hai aur jawab ka <b>intezaar</b> karta hai. <b>Async</b> messaging: caller broker par ek message rakh deta hai aur <b>aage badh jaata hai</b>; doosri service use baad mein padhti hai.</p><p>Sync mein dono services <b>ek hi samay</b> par ek-doosre par nirbhar hoti hain (temporal coupling). Async yeh dependency hata deta hai.</p>"
        },
        why: {
          en: "<p>In one process a method call never \"fails because the other method is down\". Between services it can. If three services each have 99.9% uptime and call each other in a chain, the chain gives about 99.7%. Every extra sync hop lowers it.</p><p>So choose on purpose: <b>sync for queries</b> the user is waiting on, <b>async for commands and events</b> that other services react to.</p>",
          hi: "<p>एक process में method call कभी इस वजह से fail नहीं होती कि दूसरा method \"बंद\" है। Services के बीच ऐसा हो सकता है। अगर तीन services की uptime 99.9% है और वे chain में एक-दूसरे को call करती हैं, तो chain की uptime लगभग 99.7% रह जाती है। हर extra sync hop इसे घटाता है।</p><p>इसलिए सोचकर चुनो: जिस <b>query</b> का user इंतज़ार कर रहा है उसके लिए <b>sync</b>; जिन <b>commands और events</b> पर दूसरी services react करती हैं उनके लिए <b>async</b>।</p>",
          hg: "<p>Ek process mein method call kabhi is wajah se fail nahi hoti ki doosra method \"band\" hai. Services ke beech aisa ho sakta hai. Agar teen services ki uptime 99.9% hai aur ve chain mein ek-doosre ko call karti hain, to chain ki uptime lagbhag 99.7% reh jaati hai. Har extra sync hop ise ghatata hai.</p><p>Isliye sochkar chuno: jis <b>query</b> ka user intezaar kar raha hai uske liye <b>sync</b>; jin <b>commands aur events</b> par doosri services react karti hain unke liye <b>async</b>.</p>"
        },
        analogy: {
          en: "<p>A phone call versus a note under the door. On a phone call both people must be free right now, and if the other phone is switched off you learn it at once. A note under the door lets you carry on; the other person reads it when they are back.</p>",
          hi: "<p>फ़ोन call बनाम दरवाज़े के नीचे रखा नोट। फ़ोन call में दोनों लोग अभी free होने चाहिए, और दूसरा फ़ोन बंद हो तो आपको तभी पता चल जाता है। दरवाज़े के नीचे नोट डालकर आप आगे बढ़ जाते हो; सामने वाला लौटकर पढ़ लेता है।</p>",
          hg: "<p>Phone call banam darwaze ke neeche rakha note. Phone call mein dono log abhi free hone chahiye, aur doosra phone band ho to aapko tabhi pata chal jaata hai. Darwaze ke neeche note daalkar aap aage badh jaate ho; saamne wala lautkar padh leta hai.</p>"
        },
        lines: [
          {
            code: "var billing = new BillingService { IsUp = false };",
            note: {
              en: "We start with Billing switched off. This is the bad day we want to survive.",
              hi: "हम Billing को बंद करके शुरू करते हैं। यही बुरा दिन है जिसमें हमें बचना है।",
              hg: "Hum Billing ko band karke shuru karte hain. Yahi bura din hai jisme humein bachna hai."
            }
          },
          {
            code: "var plan = billing.CheckPlan(customer);   // we wait here, and fail if Billing is down",
            note: {
              en: "The sync call. <code>SyncSupport</code> cannot open the ticket until Billing answers, so Billing's outage becomes Support's outage.",
              hi: "Sync call। जब तक Billing जवाब न दे, <code>SyncSupport</code> ticket नहीं खोल सकता, इसलिए Billing का बंद होना Support का बंद होना बन जाता है।",
              hg: "Sync call. Jab tak Billing jawab na de, <code>SyncSupport</code> ticket nahi khol sakta, isliye Billing ka band hona Support ka band hona ban jaata hai."
            }
          },
          {
            code: "queue.Enqueue($\"TicketOpened {id} {customer}\");   // Billing reads it when it is ready",
            note: {
              en: "The async call. Support opens the ticket first, then leaves a message. A <code>Queue</code> stands in for the broker here.",
              hi: "Async call। Support पहले ticket खोलता है, फिर एक message छोड़ देता है। यहाँ <code>Queue</code> broker की जगह है।",
              hg: "Async call. Support pehle ticket kholta hai, phir ek message chhod deta hai. Yahan <code>Queue</code> broker ki jagah hai."
            }
          },
          {
            code: "while (queue.Count > 0) billing.Handle(queue.Dequeue());",
            note: {
              en: "Billing catches up on its own time. The price: Billing learns about ticket 502 later, not instantly (eventual consistency).",
              hi: "Billing अपने समय पर पकड़ बना लेता है। कीमत: Billing को ticket 502 का पता तुरंत नहीं, बाद में चलता है (eventual consistency)।",
              hg: "Billing apne samay par pakad bana leta hai. Keemat: Billing ko ticket 502 ka pata turant nahi, baad mein chalta hai (eventual consistency)."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Making every call sync \"because it is simpler\". A long chain A &rarr; B &rarr; C is only as available as all of them together.</li><li>Going async everywhere, then needing an instant answer (like a price shown on screen). Use sync for queries the user waits on.</li></ul>",
          hi: "<ul><li>\"आसान है\" सोचकर हर call को sync बना देना। लंबी chain A &rarr; B &rarr; C उतनी ही available है जितने तीनों साथ में।</li><li>हर जगह async कर देना, और फिर तुरंत जवाब चाहिए (जैसे screen पर दिखने वाला price)। जिस query का user इंतज़ार करता है उसके लिए sync रखो।</li></ul>",
          hg: "<ul><li>\"Aasaan hai\" sochkar har call ko sync bana dena. Lambi chain A &rarr; B &rarr; C utni hi available hai jitne teenon saath mein.</li><li>Har jagah async kar dena, aur phir turant jawab chahiye (jaise screen par dikhne wala price). Jis query ka user intezaar karta hai uske liye sync rakho.</li></ul>"
        },
        whenToUse: {
          en: "<p><b>Sync:</b> reads, very short flows, and when the caller truly needs the answer now. <b>Async:</b> work that can wait, work that must survive a downstream outage, and events many services react to. A mix is normal.</p>",
          hi: "<p><b>Sync:</b> reads, बहुत छोटे flows, और जब caller को जवाब सचमुच अभी चाहिए। <b>Async:</b> जो काम रुक सकता है, जो downstream के बंद होने पर भी बचना चाहिए, और वे events जिन पर कई services react करती हैं। दोनों का mix आम बात है।</p>",
          hg: "<p><b>Sync:</b> reads, bahut chhote flows, aur jab caller ko jawab sachmuch abhi chahiye. <b>Async:</b> jo kaam ruk sakta hai, jo downstream ke band hone par bhi bachna chahiye, aur ve events jin par kai services react karti hain. Dono ka mix aam baat hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Open two tickets with the async style while Billing is down: <b>503</b> for <b>Meena</b> and <b>504</b> for <b>Neha</b>. Then print how many messages are waiting for Billing.</p>",
            hi: "<p>Billing बंद है और async तरीके से दो tickets खोलो: <b>Meena</b> का <b>503</b> और <b>Neha</b> का <b>504</b>। फिर print करो कि Billing के लिए कितने messages इंतज़ार कर रहे हैं।</p>",
            hg: "<p>Billing band hai aur async tareeke se do tickets kholo: <b>Meena</b> ka <b>503</b> aur <b>Neha</b> ka <b>504</b>. Phir print karo ki Billing ke liye kitne messages intezaar kar rahe hain.</p>"
          },
          hint: {
            en: "<p>Keep one shared <code>Queue&lt;string&gt;</code> and read its <code>Count</code> at the end.</p>",
            hi: "<p>एक shared <code>Queue&lt;string&gt;</code> रखो और आख़िर में उसकी <code>Count</code> पढ़ो।</p>",
            hg: "<p>Ek shared <code>Queue&lt;string&gt;</code> rakho aur aakhir mein uski <code>Count</code> padho.</p>"
          },
          solution: {
            caption: {
              en: "Solution: both tickets open, two messages wait",
              hi: "हल: दोनों tickets खुले, दो messages इंतज़ार में",
              hg: "Solution: dono tickets khule, do messages intezaar mein"
            },
            src: "var queue = new Queue<string>();\nvar support = new AsyncSupport(queue);\nsupport.OpenTicket(503, \"Meena\");\nsupport.OpenTicket(504, \"Neha\");\nConsole.WriteLine(\"waiting for Billing: \" + queue.Count);\n\nclass AsyncSupport(Queue<string> queue)\n{\n    public void OpenTicket(int id, string customer)\n    {\n        Console.WriteLine($\"ticket {id} opened for {customer}\");\n        queue.Enqueue($\"TicketOpened {id} {customer}\");\n    }\n}",
            check: "run",
            expected: "ticket 503 opened for Meena\nticket 504 opened for Neha\nwaiting for Billing: 2"
          }
        },
        quiz: {
          q: {
            en: "Billing is down for an hour. Which design still lets agents open tickets?",
            hi: "Billing एक घंटे बंद है। कौन सा design agents को फिर भी tickets खोलने देता है?",
            hg: "Billing ek ghante band hai. Kaun sa design agents ko phir bhi tickets kholne deta hai?"
          },
          options: [
            {
              en: "Both services share one database table",
              hi: "दोनों services एक database table share करती हैं",
              hg: "Dono services ek database table share karti hain"
            },
            {
              en: "Support calls Billing over HTTP and waits for the plan",
              hi: "Support, Billing को HTTP से call करके plan का इंतज़ार करता है",
              hg: "Support, Billing ko HTTP se call karke plan ka intezaar karta hai"
            },
            {
              en: "Support leaves a message on a broker and carries on",
              hi: "Support broker पर message छोड़कर आगे बढ़ जाता है",
              hg: "Support broker par message chhodkar aage badh jaata hai"
            },
            {
              en: "Support retries the HTTP call forever",
              hi: "Support वही HTTP call हमेशा retry करता रहता है",
              hg: "Support wahi HTTP call hamesha retry karta rehta hai"
            }
          ],
          answer: 2,
          explain: {
            en: "The message waits in the broker until Billing is back. Waiting on HTTP, retrying forever or sharing a table all tie Support to Billing's uptime.",
            hi: "Message broker में तब तक रुका रहता है जब तक Billing लौट न आए। HTTP पर इंतज़ार, हमेशा retry या table share करना, तीनों Support को Billing की uptime से बाँध देते हैं।",
            hg: "Message broker mein tab tak ruka rehta hai jab tak Billing laut na aaye. HTTP par intezaar, hamesha retry ya table share karna, teenon Support ko Billing ki uptime se baandh dete hain."
          }
        },
        recap: {
          en: "<ul><li>Sync = caller waits; both services must be up at the same moment.</li><li>Async = message on a broker; the other service reads it later, at the price of eventual consistency.</li><li>Sync for queries the user waits on; async for commands and events.</li></ul>",
          hi: "<ul><li>Sync = caller इंतज़ार करता है; दोनों services एक ही समय पर चालू होनी चाहिए।</li><li>Async = broker पर message; दूसरी service बाद में पढ़ती है, कीमत है eventual consistency।</li><li>User जिस query का इंतज़ार करता है उसके लिए sync; commands और events के लिए async।</li></ul>",
          hg: "<ul><li>Sync = caller intezaar karta hai; dono services ek hi samay par chalu honi chahiye.</li><li>Async = broker par message; doosri service baad mein padhti hai, keemat hai eventual consistency.</li><li>User jis query ka intezaar karta hai uske liye sync; commands aur events ke liye async.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Billing is down: sync fails, async still opens the ticket",
            hi: "Billing बंद है: sync fail होता है, async फिर भी ticket खोल देता है",
            hg: "Billing band hai: sync fail hota hai, async phir bhi ticket khol deta hai"
          },
          src: "var billing = new BillingService { IsUp = false };\n\nConsole.WriteLine(\"-- sync: Support calls Billing and waits\");\ntry { new SyncSupport(billing).OpenTicket(501, \"Asha\"); }\ncatch (InvalidOperationException ex) { Console.WriteLine(\"ticket 501 FAILED: \" + ex.Message); }\n\nConsole.WriteLine(\"-- async: Support drops a message and carries on\");\nvar queue = new Queue<string>();\nnew AsyncSupport(queue).OpenTicket(502, \"Ravi\");\n\nbilling.IsUp = true;\nConsole.WriteLine(\"-- Billing is back\");\nwhile (queue.Count > 0) billing.Handle(queue.Dequeue());\n\nclass BillingService\n{\n    public bool IsUp { get; set; }\n\n    public string CheckPlan(string customer) =>\n        IsUp ? \"Gold\" : throw new InvalidOperationException(\"Billing is down\");\n\n    public void Handle(string message) => Console.WriteLine(\"Billing handled: \" + message);\n}\n\nclass SyncSupport(BillingService billing)\n{\n    public void OpenTicket(int id, string customer)\n    {\n        var plan = billing.CheckPlan(customer);   // we wait here, and fail if Billing is down\n        Console.WriteLine($\"ticket {id} opened for {customer} ({plan} plan)\");\n    }\n}\n\nclass AsyncSupport(Queue<string> queue)\n{\n    public void OpenTicket(int id, string customer)\n    {\n        Console.WriteLine($\"ticket {id} opened for {customer}\");\n        queue.Enqueue($\"TicketOpened {id} {customer}\");   // Billing reads it when it is ready\n    }\n}",
          check: "run",
          expected: "-- sync: Support calls Billing and waits\nticket 501 FAILED: Billing is down\n-- async: Support drops a message and carries on\nticket 502 opened for Ravi\n-- Billing is back\nBilling handled: TicketOpened 502 Ravi"
        }
      ]
    },
    {
      id: "api-gateway",
      depth: "short",
      title: {
        en: "API gateway: one front door",
        hi: "API gateway: एक ही मुख्य दरवाज़ा",
        hg: "API gateway: ek hi mukhya darwaza"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 split Support and Billing. A mobile app or the agent web page now asks: which service do I call, at which address, with which token? The gateway answers that in one place.",
          hi: "पाठ 1 में Support और Billing अलग हुए। अब mobile app या agent web page पूछता है: मैं कौन सी service को, किस address पर, किस token के साथ call करूँ? Gateway इसका जवाब एक जगह देता है।",
          hg: "Lesson 1 mein Support aur Billing alag hue. Ab mobile app ya agent web page poochhta hai: main kaun si service ko, kis address par, kis token ke saath call karoon? Gateway iska jawab ek jagah deta hai."
        },
        what: {
          en: "<p>An <b>API gateway</b> is the single entry point for clients. It receives every request, checks who you are, applies limits, and <b>routes</b> the request to the right service.</p><p>In .NET the usual tool is <b>YARP</b> (a reverse proxy you host in an ASP.NET Core app). A <b>BFF</b> (Backend for Frontend) is a gateway made for one client type, for example one for mobile and one for the web.</p>",
          hi: "<p><b>API gateway</b> clients के लिए अकेला entry point है। वह हर request लेता है, जाँचता है कि आप कौन हो, limits लगाता है, और request को सही service तक <b>route</b> करता है।</p><p>.NET में आम tool <b>YARP</b> है (एक reverse proxy जिसे आप ASP.NET Core app में चलाते हो)। <b>BFF</b> (Backend for Frontend) एक client type के लिए बना gateway है, जैसे mobile का अलग और web का अलग।</p>",
          hg: "<p><b>API gateway</b> clients ke liye akela entry point hai. Woh har request leta hai, jaanchta hai ki aap kaun ho, limits lagata hai, aur request ko sahi service tak <b>route</b> karta hai.</p><p>.NET mein aam tool <b>YARP</b> hai (ek reverse proxy jise aap ASP.NET Core app mein chalate ho). <b>BFF</b> (Backend for Frontend) ek client type ke liye bana gateway hai, jaise mobile ka alag aur web ka alag.</p>"
        },
        why: {
          en: "<p>Without a gateway every client must know every service address and repeat token checks and rate limits. With one, clients know one address, and cross-cutting rules (login check, limits, logging) live in one place.</p><p>The gateway must stay <b>thin</b>. If ticket rules creep into it, it becomes a new monolith and a single point of failure.</p>",
          hi: "<p>Gateway के बिना हर client को हर service का address पता होना चाहिए और token checks और rate limits बार-बार लगाने पड़ते हैं। Gateway के साथ client को एक address पता होता है, और सब पर लागू होने वाले नियम (login check, limits, logging) एक जगह रहते हैं।</p><p>Gateway <b>पतला</b> रहना चाहिए। अगर उसमें ticket के rules घुस गए, तो वह नया monolith और single point of failure बन जाता है।</p>",
          hg: "<p>Gateway ke bina har client ko har service ka address pata hona chahiye aur token checks aur rate limits baar-baar lagane padte hain. Gateway ke saath client ko ek address pata hota hai, aur sab par laagu hone wale niyam (login check, limits, logging) ek jagah rehte hain.</p><p>Gateway <b>patla</b> rehna chahiye. Agar usmein ticket ke rules ghus gaye, to woh naya monolith aur single point of failure ban jaata hai.</p>"
        },
        analogy: {
          en: "<p>A hotel reception. Guests do not walk to the kitchen, laundry or gym themselves. Reception checks the room key, says \"please wait\" when it is busy, and sends the request to the right department. It does not cook the food.</p>",
          hi: "<p>होटल का reception। मेहमान खुद kitchen, laundry या gym नहीं जाते। Reception room की चाबी देखता है, भीड़ हो तो \"थोड़ा रुकिए\" कहता है, और request को सही department तक भेजता है। खाना वह खुद नहीं पकाता।</p>",
          hg: "<p>Hotel ka reception. Mehmaan khud kitchen, laundry ya gym nahi jaate. Reception room ki chaabi dekhta hai, bheed ho to \"thoda rukiye\" kehta hai, aur request ko sahi department tak bhejta hai. Khaana woh khud nahi pakata.</p>"
        },
        lines: [
          {
            code: "(\"/api/tickets\", path => \"Support answers \" + path),",
            note: {
              en: "A route: a path prefix and the service behind it. The gateway only needs this table, not any ticket rule.",
              hi: "एक route: path का prefix और उसके पीछे की service। Gateway को सिर्फ़ यह table चाहिए, ticket का कोई rule नहीं।",
              hg: "Ek route: path ka prefix aur uske peeche ki service. Gateway ko sirf yeh table chahiye, ticket ka koi rule nahi."
            }
          },
          {
            code: "if (!_tokens.Contains(token)) return \"401 Unauthorized\";",
            note: {
              en: "Authentication first, at the front door, so a bad token never reaches a service. Services behind it still check what the caller may do.",
              hi: "पहले authentication, मुख्य दरवाज़े पर, ताकि ग़लत token किसी service तक पहुँचे ही नहीं। पीछे की services फिर भी जाँचती हैं कि caller क्या कर सकता है।",
              hg: "Pehle authentication, mukhya darwaze par, taaki galat token kisi service tak pahunche hi nahi. Peeche ki services phir bhi jaanchti hain ki caller kya kar sakta hai."
            }
          },
          {
            code: "if (_calls[token] > Limit) return \"429 Too Many Requests\";",
            note: {
              en: "Rate limiting: one noisy client cannot flood Support. Here we count calls; real gateways count per time window.",
              hi: "Rate limiting: एक शोर मचाने वाला client Support में बाढ़ नहीं ला सकता। यहाँ हम calls गिनते हैं; असली gateways समय की window में गिनते हैं।",
              hg: "Rate limiting: ek shor machane wala client Support mein baadh nahi la sakta. Yahan hum calls ginte hain; asli gateways samay ki window mein ginte hain."
            }
          },
          {
            code: "if (path.StartsWith(prefix)) return \"200 \" + service(path);",
            note: {
              en: "Routing: the first matching prefix wins and the call is forwarded to that service.",
              hi: "Routing: जो prefix पहले मिले वही जीतता है और call उस service को forward हो जाती है।",
              hg: "Routing: jo prefix pehle mile wahi jeetta hai aur call us service ko forward ho jaati hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Putting business rules in the gateway (\"only Gold customers may escalate\"). Keep that in Support.</li><li>Treating the gateway as the only security. Each service still checks what the caller is allowed to do.</li></ul>",
          hi: "<ul><li>Gateway में business rules डालना (\"सिर्फ़ Gold customers escalate कर सकते हैं\")। यह Support में रखो।</li><li>Gateway को ही अकेली security मान लेना। हर service फिर भी जाँचती है कि caller को क्या करने की इजाज़त है।</li></ul>",
          hg: "<ul><li>Gateway mein business rules daalna (\"sirf Gold customers escalate kar sakte hain\"). Yeh Support mein rakho.</li><li>Gateway ko hi akeli security maan lena. Har service phir bhi jaanchti hai ki caller ko kya karne ki ijaazat hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a gateway when many clients meet many services, so login checks, limits, TLS and logging belong in one place. Skip it for one or two services and one client. For per-client shaping of responses, use a BFF.</p>",
          hi: "<p>Gateway तब लो जब कई clients कई services से मिलते हों, ताकि login checks, limits, TLS और logging एक जगह रहें। एक-दो services और एक client हो तो छोड़ दो। हर client के हिसाब से response ढालना हो तो BFF लो।</p>",
          hg: "<p>Gateway tab lo jab kai clients kai services se milte hon, taaki login checks, limits, TLS aur logging ek jagah rahein. Ek-do services aur ek client ho to chhod do. Har client ke hisaab se response dhalna ho to BFF lo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a route <code>/api/customers</code> that answers \"Customers answers ...\". Send two requests with a valid token <code>tok-meena</code>: <code>/api/customers/12</code> and <code>/api/agents/3</code>.</p>",
            hi: "<p><code>/api/customers</code> का एक route जोड़ो जो \"Customers answers ...\" जवाब दे। सही token <code>tok-meena</code> के साथ दो requests भेजो: <code>/api/customers/12</code> और <code>/api/agents/3</code>।</p>",
            hg: "<p><code>/api/customers</code> ka ek route jodo jo \"Customers answers ...\" jawab de. Sahi token <code>tok-meena</code> ke saath do requests bhejo: <code>/api/customers/12</code> aur <code>/api/agents/3</code>.</p>"
          },
          hint: {
            en: "<p>A new route is one more line in the list. The gateway class does not change.</p>",
            hi: "<p>नया route list में बस एक और line है। Gateway class नहीं बदलती।</p>",
            hg: "<p>Naya route list mein bas ek aur line hai. Gateway class nahi badalti.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one more route, no gateway change",
              hi: "हल: एक और route, gateway में कोई बदलाव नहीं",
              hg: "Solution: ek aur route, gateway mein koi badlaav nahi"
            },
            src: "var gateway = new Gateway(\n[\n    (\"/api/tickets\", path => \"Support answers \" + path),\n    (\"/api/customers\", path => \"Customers answers \" + path),\n]);\n\nConsole.WriteLine(gateway.Handle(\"tok-meena\", \"/api/customers/12\"));\nConsole.WriteLine(gateway.Handle(\"tok-meena\", \"/api/agents/3\"));\n\nclass Gateway(List<(string Prefix, Func<string, string> Service)> routes)\n{\n    private readonly HashSet<string> _tokens = [\"tok-meena\"];\n\n    public string Handle(string token, string path)\n    {\n        if (!_tokens.Contains(token)) return \"401 Unauthorized\";\n        foreach (var (prefix, service) in routes)\n            if (path.StartsWith(prefix)) return \"200 \" + service(path);\n        return \"404 No route\";\n    }\n}",
            check: "run",
            expected: "200 Customers answers /api/customers/12\n404 No route"
          }
        },
        quiz: {
          q: {
            en: "A teammate wants to add \"only Gold customers may escalate\" to the gateway. What is the best answer?",
            hi: "एक साथी \"सिर्फ़ Gold customers escalate कर सकते हैं\" gateway में जोड़ना चाहता है। सबसे अच्छा जवाब क्या है?",
            hg: "Ek saathi \"sirf Gold customers escalate kar sakte hain\" gateway mein jodna chahta hai. Sabse achha jawab kya hai?"
          },
          options: [
            {
              en: "No, that is a business rule; keep it in the Support service",
              hi: "नहीं, यह business rule है; इसे Support service में रखो",
              hg: "Nahi, yeh business rule hai; ise Support service mein rakho"
            },
            {
              en: "Yes, the gateway sees every request, so it is the best place",
              hi: "हाँ, gateway हर request देखता है, इसलिए वही सबसे अच्छी जगह है",
              hg: "Haan, gateway har request dekhta hai, isliye wahi sabse achhi jagah hai"
            },
            {
              en: "Yes, but only if the gateway has its own database",
              hi: "हाँ, पर तभी जब gateway का अपना database हो",
              hg: "Haan, par tabhi jab gateway ka apna database ho"
            },
            {
              en: "No, because gateways cannot read request paths",
              hi: "नहीं, क्योंकि gateways request के paths नहीं पढ़ सकते",
              hg: "Nahi, kyonki gateways request ke paths nahi padh sakte"
            }
          ],
          answer: 0,
          explain: {
            en: "The gateway handles cross-cutting work (login, limits, routing). Business rules belong to the service that owns the data, or the gateway turns into a new monolith.",
            hi: "Gateway सब पर लागू होने वाला काम करता है (login, limits, routing)। Business rules उस service के हैं जिसके पास data है, वरना gateway नया monolith बन जाता है।",
            hg: "Gateway sab par laagu hone wala kaam karta hai (login, limits, routing). Business rules us service ke hain jiske paas data hai, warna gateway naya monolith ban jaata hai."
          }
        },
        recap: {
          en: "<ul><li>A gateway is the single front door: auth, limits, routing (YARP in .NET).</li><li>A BFF is a gateway shaped for one client type.</li><li>Keep it thin: no business rules, or it becomes a new monolith.</li></ul>",
          hi: "<ul><li>Gateway अकेला मुख्य दरवाज़ा है: auth, limits, routing (.NET में YARP)।</li><li>BFF एक client type के हिसाब से ढला gateway है।</li><li>इसे पतला रखो: कोई business rule नहीं, वरना यह नया monolith बन जाएगा।</li></ul>",
          hg: "<ul><li>Gateway akela mukhya darwaza hai: auth, limits, routing (.NET mein YARP).</li><li>BFF ek client type ke hisaab se dhala gateway hai.</li><li>Ise patla rakho: koi business rule nahi, warna yeh naya monolith ban jaayega.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A tiny gateway: token check, rate limit, routing",
            hi: "छोटा gateway: token check, rate limit, routing",
            hg: "Chhota gateway: token check, rate limit, routing"
          },
          src: "var gateway = new Gateway(\n[\n    (\"/api/tickets\", path => \"Support answers \" + path),\n    (\"/api/billing\", path => \"Billing answers \" + path),\n]);\n\nConsole.WriteLine(gateway.Handle(\"tok-asha\", \"/api/tickets/501\"));\nConsole.WriteLine(gateway.Handle(\"tok-asha\", \"/api/billing/invoices\"));\nConsole.WriteLine(gateway.Handle(\"tok-asha\", \"/api/reports/daily\"));\nConsole.WriteLine(gateway.Handle(\"bad-token\", \"/api/tickets/502\"));\nfor (var i = 501; i <= 504; i++)\n    Console.WriteLine(gateway.Handle(\"tok-ravi\", \"/api/tickets/\" + i));\n\n// The gateway only routes, checks the token and counts calls. It has no ticket rules.\nclass Gateway(List<(string Prefix, Func<string, string> Service)> routes)\n{\n    private const int Limit = 3;\n    private readonly HashSet<string> _tokens = [\"tok-asha\", \"tok-ravi\"];\n    private readonly Dictionary<string, int> _calls = [];\n\n    public string Handle(string token, string path)\n    {\n        if (!_tokens.Contains(token)) return \"401 Unauthorized\";\n\n        _calls[token] = _calls.GetValueOrDefault(token) + 1;\n        if (_calls[token] > Limit) return \"429 Too Many Requests\";\n\n        foreach (var (prefix, service) in routes)\n            if (path.StartsWith(prefix)) return \"200 \" + service(path);\n        return \"404 No route\";\n    }\n}",
          check: "run",
          expected: "200 Support answers /api/tickets/501\n200 Billing answers /api/billing/invoices\n404 No route\n401 Unauthorized\n200 Support answers /api/tickets/501\n200 Support answers /api/tickets/502\n200 Support answers /api/tickets/503\n429 Too Many Requests"
        }
      ]
    },
    {
      id: "message-broker",
      depth: "short",
      title: {
        en: "Message broker: queue, topic, dead-letter",
        hi: "Message broker: queue, topic और dead-letter",
        hg: "Message broker: queue, topic aur dead-letter"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 chose async messaging between Support and Billing. The broker is the middleman that holds those messages. It gives us three things: a queue, a topic, and a place for bad messages.",
          hi: "पाठ 1 में Support और Billing के बीच async messaging चुनी थी। Broker वह बिचौलिया है जो उन messages को सँभालकर रखता है। वह तीन चीज़ें देता है: queue, topic, और बुरे messages के लिए एक जगह।",
          hg: "Lesson 1 mein Support aur Billing ke beech async messaging chuni thi. Broker woh bichauliya hai jo un messages ko sambhalkar rakhta hai. Woh teen cheezein deta hai: queue, topic, aur bure messages ke liye ek jagah."
        },
        what: {
          en: "<p>A <b>message broker</b> (Azure Service Bus, RabbitMQ, Kafka...) stores messages between services.</p><ul><li><b>Queue</b>: each message goes to <b>one</b> consumer. Add more consumers and the work is shared (competing consumers).</li><li><b>Topic</b> with subscriptions: each subscription gets its <b>own copy</b>. Used for events like <code>TicketResolved</code>.</li><li><b>Dead-letter queue (DLQ)</b>: a message that keeps failing is parked here so it stops blocking the rest.</li></ul>",
          hi: "<p><b>Message broker</b> (Azure Service Bus, RabbitMQ, Kafka...) services के बीच messages जमा रखता है।</p><ul><li><b>Queue</b>: हर message <b>एक</b> consumer को जाता है। और consumers जोड़ो तो काम बँट जाता है (competing consumers)।</li><li><b>Topic</b> और subscriptions: हर subscription को उसकी <b>अपनी copy</b> मिलती है। <code>TicketResolved</code> जैसे events के लिए।</li><li><b>Dead-letter queue (DLQ)</b>: जो message बार-बार fail हो, उसे यहाँ अलग रख देते हैं ताकि बाक़ियों को न रोके।</li></ul>",
          hg: "<p><b>Message broker</b> (Azure Service Bus, RabbitMQ, Kafka...) services ke beech messages jama rakhta hai.</p><ul><li><b>Queue</b>: har message <b>ek</b> consumer ko jaata hai. Aur consumers jodo to kaam bant jaata hai (competing consumers).</li><li><b>Topic</b> aur subscriptions: har subscription ko uski <b>apni copy</b> milti hai. <code>TicketResolved</code> jaise events ke liye.</li><li><b>Dead-letter queue (DLQ)</b>: jo message baar-baar fail ho, use yahan alag rakh dete hain taaki baaki ko na roke.</li></ul>"
        },
        why: {
          en: "<p>The broker is what makes lesson 1's async idea work: it keeps the messages safe while a consumer is down or busy. Queues spread load; topics let many services react to one fact without Support knowing them; the DLQ keeps one bad message from blocking the line.</p><p>Most brokers deliver <b>at-least-once</b>: you may see the same message twice. Lesson 5 deals with that.</p>",
          hi: "<p>Broker वही चीज़ है जो पाठ 1 के async idea को चलाती है: consumer बंद या busy हो तब भी messages safe रखती है। Queue load बाँटती है; topic से कई services एक fact पर react कर सकती हैं और Support को उनके बारे में पता नहीं होता; DLQ एक बुरे message को लाइन रोकने से बचाती है।</p><p>ज़्यादातर brokers <b>at-least-once</b> deliver करते हैं: वही message दो बार दिख सकता है। पाठ 5 इसे सँभालता है।</p>",
          hg: "<p>Broker wahi cheez hai jo lesson 1 ke async idea ko chalati hai: consumer band ya busy ho tab bhi messages safe rakhti hai. Queue load baantti hai; topic se kai services ek fact par react kar sakti hain aur Support ko unke baare mein pata nahi hota; DLQ ek bure message ko line rokne se bachaati hai.</p><p>Zyaadatar brokers <b>at-least-once</b> deliver karte hain: wahi message do baar dikh sakta hai. Lesson 5 ise sambhalta hai.</p>"
        },
        analogy: {
          en: "<p>A railway booking counter and a newspaper. In one long line, each passenger is served by <b>one</b> counter (queue). A newspaper gives every subscriber their <b>own copy</b> (topic). A torn form no counter can read goes to a \"problem cases\" tray (dead-letter).</p>",
          hi: "<p>रेलवे booking counter और अख़बार। एक लंबी line में हर यात्री को <b>एक</b> counter सँभालता है (queue)। अख़बार हर subscriber को <b>अपनी copy</b> देता है (topic)। फटा form जिसे कोई counter पढ़ न सके, \"problem cases\" की tray में जाता है (dead-letter)।</p>",
          hg: "<p>Railway booking counter aur akhbaar. Ek lambi line mein har yaatri ko <b>ek</b> counter sambhalta hai (queue). Akhbaar har subscriber ko <b>apni copy</b> deta hai (topic). Phata form jise koi counter padh na sake, \"problem cases\" ki tray mein jaata hai (dead-letter).</p>"
        },
        lines: [
          {
            code: "Console.WriteLine($\"queue: {workers[i % 2]} handles {queue.Dequeue()}\");",
            note: {
              en: "Queue: each message is taken by exactly one worker. Meena and Kiran share the four tickets.",
              hi: "Queue: हर message ठीक एक worker उठाता है। Meena और Kiran चारों tickets आपस में बाँट लेते हैं।",
              hg: "Queue: har message theek ek worker uthata hai. Meena aur Kiran chaaron tickets aapas mein baant lete hain."
            }
          },
          {
            code: "[\"Billing\"] = m => Console.WriteLine(\"Billing got: \" + m),",
            note: {
              en: "Topic: each subscriber registers itself. Support publishes without knowing who listens.",
              hi: "Topic: हर subscriber अपना नाम लिखवाता है। Support को पता नहीं होता कि कौन सुन रहा है, वह बस publish करता है।",
              hg: "Topic: har subscriber apna naam likhwata hai. Support ko pata nahi hota ki kaun sun raha hai, woh bas publish karta hai."
            }
          },
          {
            code: "foreach (var (_, handler) in subscriptions) handler(\"TicketResolved 501\");",
            note: {
              en: "Publish gives <b>every</b> subscription its own copy of the message. This is the difference from the queue.",
              hi: "Publish <b>हर</b> subscription को message की अपनी copy देता है। Queue से यही फ़र्क़ है।",
              hg: "Publish <b>har</b> subscription ko message ki apni copy deta hai. Queue se yahi farq hai."
            }
          },
          {
            code: "if (attempt == 3) deadLetters.Add(message);",
            note: {
              en: "After 3 failed attempts the poison message is parked in the dead-letter queue, and the next message goes on. A person must watch the DLQ.",
              hi: "3 बार fail होने पर poison message dead-letter queue में रख दिया जाता है, और अगला message आगे बढ़ता है। DLQ पर किसी इंसान को नज़र रखनी होगी।",
              hg: "3 baar fail hone par poison message dead-letter queue mein rakh diya jaata hai, aur agla message aage badhta hai. DLQ par kisi insaan ko nazar rakhni hogi."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using a queue when two services both need the event: only one of them would get it. Use a topic.</li><li>Retrying a poison message forever, so it blocks the line. Park it in the DLQ after a few tries.</li></ul>",
          hi: "<ul><li>जब दो services को event चाहिए तब queue लेना: उनमें से सिर्फ़ एक को मिलेगा। Topic लो।</li><li>Poison message को हमेशा retry करना, जिससे line रुक जाती है। कुछ कोशिशों के बाद उसे DLQ में रखो।</li></ul>",
          hg: "<ul><li>Jab do services ko event chahiye tab queue lena: unmein se sirf ek ko milega. Topic lo.</li><li>Poison message ko hamesha retry karna, jisse line ruk jaati hai. Kuch koshishon ke baad use DLQ mein rakho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a broker for work that can happen later, for fan-out to many reactors and for absorbing spikes. Skip it when the user needs the answer in the same request, or a plain call is enough: a broker is one more thing to run and watch. Azure Service Bus details are on Day 20.</p>",
          hi: "<p>Broker उस काम के लिए लो जो बाद में हो सकता है, कई react करने वालों तक फैलाने के लिए और अचानक आए load को सोखने के लिए। जब user को जवाब उसी request में चाहिए, या सीधा call काफ़ी हो, तब मत लो: broker चलाने और देखने के लिए एक और चीज़ है। Azure Service Bus की बातें Day 20 में हैं।</p>",
          hg: "<p>Broker us kaam ke liye lo jo baad mein ho sakta hai, kai react karne walon tak failane ke liye aur achanak aaye load ko sokhne ke liye. Jab user ko jawab usi request mein chahiye, ya seedha call kaafi ho, tab mat lo: broker chalane aur dekhne ke liye ek aur cheez hai. Azure Service Bus ki baatein Day 20 mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a third subscription <b>Audit</b> to the topic and publish <code>TicketResolved 503</code>. All three subscribers should print the message.</p>",
            hi: "<p>Topic में तीसरी subscription <b>Audit</b> जोड़ो और <code>TicketResolved 503</code> publish करो। तीनों subscribers को message print करना चाहिए।</p>",
            hg: "<p>Topic mein teesri subscription <b>Audit</b> jodo aur <code>TicketResolved 503</code> publish karo. Teenon subscribers ko message print karna chahiye.</p>"
          },
          hint: {
            en: "<p>One more entry in the <code>subscriptions</code> dictionary. The publish loop does not change.</p>",
            hi: "<p><code>subscriptions</code> dictionary में बस एक और entry। Publish वाला loop नहीं बदलता।</p>",
            hg: "<p><code>subscriptions</code> dictionary mein bas ek aur entry. Publish wala loop nahi badalta.</p>"
          },
          solution: {
            caption: {
              en: "Solution: three copies, one publish",
              hi: "हल: एक publish, तीन copies",
              hg: "Solution: ek publish, teen copies"
            },
            src: "var subscriptions = new Dictionary<string, Action<string>>\n{\n    [\"Billing\"] = m => Console.WriteLine(\"Billing got: \" + m),\n    [\"Reports\"] = m => Console.WriteLine(\"Reports got: \" + m),\n    [\"Audit\"] = m => Console.WriteLine(\"Audit got: \" + m),\n};\nforeach (var (_, handler) in subscriptions) handler(\"TicketResolved 503\");",
            check: "run",
            expected: "Billing got: TicketResolved 503\nReports got: TicketResolved 503\nAudit got: TicketResolved 503"
          }
        },
        quiz: {
          q: {
            en: "Billing, Reports and Audit must each react to every TicketResolved event. What do you use?",
            hi: "Billing, Reports और Audit, तीनों को हर TicketResolved event पर react करना है। क्या लोगे?",
            hg: "Billing, Reports aur Audit, teenon ko har TicketResolved event par react karna hai. Kya loge?"
          },
          options: [
            {
              en: "Three queues, filled by one service in a loop",
              hi: "तीन queues, जिन्हें एक service loop में भरे",
              hg: "Teen queues, jinhe ek service loop mein bhare"
            },
            {
              en: "One queue read by all three services",
              hi: "एक queue जिसे तीनों services पढ़ें",
              hg: "Ek queue jise teenon services padhein"
            },
            {
              en: "The dead-letter queue",
              hi: "Dead-letter queue (बुरे messages की जगह)",
              hg: "Dead-letter queue (bure messages ki jagah)"
            },
            {
              en: "A topic with one subscription per service",
              hi: "हर service की एक subscription वाला topic",
              hg: "Har service ki ek subscription wala topic"
            }
          ],
          answer: 3,
          explain: {
            en: "A topic gives each subscription its own copy, and the publisher does not know its subscribers. On one shared queue only one service would get each message; looping over three queues makes Support know every consumer.",
            hi: "Topic हर subscription को अपनी copy देता है, और publisher को subscribers का पता नहीं होता। एक shared queue पर हर message सिर्फ़ एक service को मिलता; तीन queues पर loop चलाने से Support को हर consumer का पता रखना पड़ता।",
            hg: "Topic har subscription ko apni copy deta hai, aur publisher ko subscribers ka pata nahi hota. Ek shared queue par har message sirf ek service ko milta; teen queues par loop chalane se Support ko har consumer ka pata rakhna padta."
          }
        },
        recap: {
          en: "<ul><li>Queue: each message to one consumer; topic: a copy for every subscription.</li><li>Brokers usually deliver at-least-once, so a message can arrive twice.</li><li>A message that keeps failing goes to the dead-letter queue; someone must watch it.</li></ul>",
          hi: "<ul><li>Queue: हर message एक consumer को; topic: हर subscription को एक copy।</li><li>Brokers आम तौर पर at-least-once deliver करते हैं, इसलिए message दो बार आ सकता है।</li><li>बार-बार fail होने वाला message dead-letter queue में जाता है; कोई उसे देखे।</li></ul>",
          hg: "<ul><li>Queue: har message ek consumer ko; topic: har subscription ko ek copy.</li><li>Brokers aam taur par at-least-once deliver karte hain, isliye message do baar aa sakta hai.</li><li>Baar-baar fail hone wala message dead-letter queue mein jaata hai; koi use dekhe.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Queue, topic and dead-letter in one small program",
            hi: "एक छोटे program में queue, topic और dead-letter",
            hg: "Ek chhote program mein queue, topic aur dead-letter"
          },
          src: "// Queue: each message goes to ONE consumer (competing consumers).\nvar queue = new Queue<string>([\"ticket 501\", \"ticket 502\", \"ticket 503\", \"ticket 504\"]);\nstring[] workers = [\"Meena\", \"Kiran\"];\nfor (var i = 0; queue.Count > 0; i++)\n    Console.WriteLine($\"queue: {workers[i % 2]} handles {queue.Dequeue()}\");\n\n// Topic: EVERY subscription gets its own copy.\nvar subscriptions = new Dictionary<string, Action<string>>\n{\n    [\"Billing\"] = m => Console.WriteLine(\"Billing got: \" + m),\n    [\"Reports\"] = m => Console.WriteLine(\"Reports got: \" + m),\n};\nforeach (var (_, handler) in subscriptions) handler(\"TicketResolved 501\");\n\n// Dead-letter queue: a poison message is parked after 3 failed attempts.\nvar deadLetters = new List<string>();\nforeach (var message in new[] { \"TicketResolved 502\", \"BAD-JSON\" })\n{\n    for (var attempt = 1; attempt <= 3; attempt++)\n    {\n        try { Handle(message); Console.WriteLine(\"ok: \" + message); break; }\n        catch (FormatException)\n        {\n            Console.WriteLine($\"attempt {attempt} failed: {message}\");\n            if (attempt == 3) deadLetters.Add(message);\n        }\n    }\n}\nConsole.WriteLine(\"dead-letter queue: \" + string.Join(\", \", deadLetters));\n\nstatic void Handle(string message)\n{\n    if (message == \"BAD-JSON\") throw new FormatException(\"cannot read message\");\n}",
          check: "run",
          expected: "queue: Meena handles ticket 501\nqueue: Kiran handles ticket 502\nqueue: Meena handles ticket 503\nqueue: Kiran handles ticket 504\nBilling got: TicketResolved 501\nReports got: TicketResolved 501\nok: TicketResolved 502\nattempt 1 failed: BAD-JSON\nattempt 2 failed: BAD-JSON\nattempt 3 failed: BAD-JSON\ndead-letter queue: BAD-JSON"
        }
      ]
    },
    {
      id: "outbox",
      depth: "short",
      title: {
        en: "Transactional Outbox: never lose an event",
        hi: "Transactional Outbox: event कभी न खोए",
        hg: "Transactional Outbox: event kabhi na khoye"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 gave us a broker that carries events like <code>TicketResolved</code>. A new question: Support must save the resolved ticket in its database and also publish the event. Two systems, no shared transaction. The Outbox makes that safe.",
          hi: "पाठ 3 में broker मिला जो <code>TicketResolved</code> जैसे events ले जाता है। नया सवाल: Support को resolved ticket अपने database में save करना है और event भी publish करना है। दो systems, कोई common transaction नहीं। Outbox इसे safe बनाता है।",
          hg: "Lesson 3 mein broker mila jo <code>TicketResolved</code> jaise events le jaata hai. Naya sawaal: Support ko resolved ticket apne database mein save karna hai aur event bhi publish karna hai. Do systems, koi common transaction nahi. Outbox ise safe banata hai."
        },
        what: {
          en: "<p>The <b>dual-write problem</b>: \"save the ticket, then publish the event\" are two separate writes. The app can crash between them, so the ticket is saved but the event is lost.</p><p>The <b>Transactional Outbox</b>: write the event into an <code>Outbox</code> table <b>in the same database transaction</b> as the ticket. A separate <b>relay</b> later reads unsent rows, publishes them and marks them sent.</p>",
          hi: "<p><b>Dual-write problem</b>: \"ticket save करो, फिर event publish करो\", ये दो अलग writes हैं। इनके बीच app crash हो सकता है, तो ticket save हो गया पर event खो गया।</p><p><b>Transactional Outbox</b>: event को ticket के <b>उसी database transaction</b> में <code>Outbox</code> table में लिखो। एक अलग <b>relay</b> बाद में न भेजी गई rows पढ़ता है, उन्हें publish करता है और sent mark करता है।</p>",
          hg: "<p><b>Dual-write problem</b>: \"ticket save karo, phir event publish karo\", ye do alag writes hain. Inke beech app crash ho sakta hai, to ticket save ho gaya par event kho gaya.</p><p><b>Transactional Outbox</b>: event ko ticket ke <b>usi database transaction</b> mein <code>Outbox</code> table mein likho. Ek alag <b>relay</b> baad mein na bheji gayi rows padhta hai, unhe publish karta hai aur sent mark karta hai.</p>"
        },
        why: {
          en: "<p>With an outbox the ticket and its event are saved together or not at all, so an event is never lost. The request does not call the broker, so a broker outage cannot fail it.</p><p>The price: the relay may crash <b>after</b> publishing but <b>before</b> marking the row. On restart it publishes the row again. So an outbox gives <b>at-least-once</b> delivery, and the receiver must cope with duplicates (next lesson).</p>",
          hi: "<p>Outbox के साथ ticket और उसका event साथ में save होते हैं या दोनों नहीं, इसलिए event कभी खोता नहीं। Request broker को call ही नहीं करती, इसलिए broker बंद होने से वह fail नहीं होती।</p><p>कीमत: relay <b>publish के बाद</b> पर row को mark करने से <b>पहले</b> crash हो सकता है। Restart पर वह row फिर publish कर देता है। यानी outbox <b>at-least-once</b> delivery देता है, और पाने वाले को duplicates सँभालने होंगे (अगला पाठ)।</p>",
          hg: "<p>Outbox ke saath ticket aur uska event saath mein save hote hain ya dono nahi, isliye event kabhi khota nahi. Request broker ko call hi nahi karti, isliye broker band hone se woh fail nahi hoti.</p><p>Keemat: relay <b>publish ke baad</b> par row ko mark karne se <b>pehle</b> crash ho sakta hai. Restart par woh row phir publish kar deta hai. Yaani outbox <b>at-least-once</b> delivery deta hai, aur paane wale ko duplicates sambhalne honge (agla lesson).</p>"
        },
        analogy: {
          en: "<p>A shop writes the courier request in a register at the <b>same moment</b> it writes the sale in the ledger. A runner takes unsent entries to the courier later and ticks them off. If the runner faints before ticking, the next runner hands the parcel over again.</p>",
          hi: "<p>दुकान बिक्री को ledger में लिखते <b>उसी पल</b> courier की request भी register में लिखती है। एक runner बाद में न भेजी गई entries courier तक ले जाकर tick लगाता है। अगर runner tick से पहले बेहोश हो जाए, तो अगला runner वही parcel फिर दे आता है।</p>",
          hg: "<p>Dukaan bikri ko ledger mein likhte <b>usi pal</b> courier ki request bhi register mein likhti hai. Ek runner baad mein na bheji gayi entries courier tak le jaakar tick lagata hai. Agar runner tick se pehle behosh ho jaaye, to agla runner wahi parcel phir de aata hai.</p>"
        },
        lines: [
          {
            code: "public void Resolve(int ticketId, string customer)",
            note: {
              en: "One method writes the ticket and its outbox row together. It stands in for one database transaction, and it never talks to the broker.",
              hi: "एक method ticket और उसकी outbox row साथ में लिखता है। यह एक database transaction की जगह है, और यह कभी broker से बात नहीं करता।",
              hg: "Ek method ticket aur uski outbox row saath mein likhta hai. Yeh ek database transaction ki jagah hai, aur yeh kabhi broker se baat nahi karta."
            }
          },
          {
            code: "Outbox.Add(new OutboxRow(Outbox.Count + 1, $\"TicketResolved {ticketId}\"));",
            note: {
              en: "The outbox row has an increasing <code>Id</code>, so the relay can publish in the order the events happened.",
              hi: "Outbox row की <code>Id</code> बढ़ती जाती है, इसलिए relay events को उसी order में publish कर सकता है जिसमें वे हुए।",
              hg: "Outbox row ki <code>Id</code> badhti jaati hai, isliye relay events ko usi order mein publish kar sakta hai jisme ve hue."
            }
          },
          {
            code: "broker.Add(row.Payload);",
            note: {
              en: "Publish first. If we crash now, the row is still unsent, so the event is not lost.",
              hi: "पहले publish। अगर अभी crash हुआ, तो row अब भी unsent है, इसलिए event खोया नहीं।",
              hg: "Pehle publish. Agar abhi crash hua, to row ab bhi unsent hai, isliye event khoya nahi."
            }
          },
          {
            code: "row.Sent = true;",
            note: {
              en: "Mark sent only after publishing. The crash before this line is why ticket 501 appears twice in the output: at-least-once.",
              hi: "Publish के बाद ही sent mark करो। इस line से पहले का crash ही वजह है कि output में ticket 501 दो बार दिखता है: at-least-once।",
              hg: "Publish ke baad hi sent mark karo. Is line se pehle ka crash hi wajah hai ki output mein ticket 501 do baar dikhta hai: at-least-once."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Saving the ticket and then calling the broker in the same request. A crash in between loses the event.</li><li>Marking the row sent <b>before</b> publishing. A crash then loses the event, which is worse than a duplicate.</li></ul>",
          hi: "<ul><li>Ticket save करके उसी request में broker को call करना। बीच में crash हुआ तो event खो जाता है।</li><li>Publish से <b>पहले</b> row को sent mark कर देना। तब crash में event खो जाता है, जो duplicate से बुरा है।</li></ul>",
          hg: "<ul><li>Ticket save karke usi request mein broker ko call karna. Beech mein crash hua to event kho jaata hai.</li><li>Publish se <b>pehle</b> row ko sent mark kar dena. Tab crash mein event kho jaata hai, jo duplicate se bura hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use an outbox whenever a state change must also produce an event for another service. Skip it if a lost event is truly fine. It adds a table, a relay and clean-up to run. Real code saves the row with EF Core in the same <code>SaveChanges</code> (see the Deep Dive).</p>",
          hi: "<p>Outbox तब लो जब किसी state change के साथ दूसरी service के लिए event भी बनना ज़रूरी हो। event खोना सचमुच ठीक हो तो मत लो। इसके साथ एक table, एक relay और सफ़ाई चलानी पड़ती है। असली code में row उसी <code>SaveChanges</code> में EF Core से save होती है (Deep Dive देखो)।</p>",
          hg: "<p>Outbox tab lo jab kisi state change ke saath doosri service ke liye event bhi banna zaroori ho. Event khona sachmuch theek ho to mat lo. Iske saath ek table, ek relay aur safaai chalani padti hai. Asli code mein row usi <code>SaveChanges</code> mein EF Core se save hoti hai (Deep Dive dekho).</p>"
        },
        exercise: {
          task: {
            en: "<p>Resolve ticket <b>503</b> for <b>Meena</b>, run the relay once without a crash, and print the broker contents and the number of unsent rows.</p>",
            hi: "<p><b>Meena</b> का ticket <b>503</b> resolve करो, relay को बिना crash एक बार चलाओ, और broker में क्या पहुँचा और कितनी rows unsent बचीं, यह print करो।</p>",
            hg: "<p><b>Meena</b> ka ticket <b>503</b> resolve karo, relay ko bina crash ek baar chalao, aur broker mein kya pahuncha aur kitni rows unsent bachin, yeh print karo.</p>"
          },
          hint: {
            en: "<p>Call <code>db.Resolve(...)</code> directly, run the relay, then count rows where <code>Sent</code> is false.</p>",
            hi: "<p>सीधे <code>db.Resolve(...)</code> call करो, relay चलाओ, फिर वे rows गिनो जहाँ <code>Sent</code> false है।</p>",
            hg: "<p>Seedhe <code>db.Resolve(...)</code> call karo, relay chalao, phir ve rows gino jahan <code>Sent</code> false hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: published once, nothing left unsent",
              hi: "हल: एक बार publish, कुछ unsent नहीं बचा",
              hg: "Solution: ek baar publish, kuch unsent nahi bacha"
            },
            src: "var db = new FakeDb();\ndb.Resolve(503, \"Meena\");\n\nvar broker = new List<string>();\nnew Relay(db, broker).RunOnce();\nConsole.WriteLine(\"broker: \" + string.Join(\" | \", broker));\nConsole.WriteLine(\"unsent rows: \" + db.Outbox.Count(o => !o.Sent));\n\nrecord OutboxRow(int Id, string Payload)\n{\n    public bool Sent { get; set; }\n}\n\nclass FakeDb\n{\n    public Dictionary<int, string> Tickets { get; } = [];\n    public List<OutboxRow> Outbox { get; } = [];\n\n    public void Resolve(int ticketId, string customer)\n    {\n        Tickets[ticketId] = \"Resolved\";\n        Outbox.Add(new OutboxRow(Outbox.Count + 1, $\"TicketResolved {ticketId}\"));\n    }\n}\n\nclass Relay(FakeDb db, List<string> broker)\n{\n    public void RunOnce()\n    {\n        foreach (var row in db.Outbox.Where(o => !o.Sent).OrderBy(o => o.Id).ToList())\n        {\n            broker.Add(row.Payload);\n            row.Sent = true;\n        }\n    }\n}",
            check: "run",
            expected: "broker: TicketResolved 503\nunsent rows: 0"
          }
        },
        quiz: {
          q: {
            en: "The relay publishes a row and crashes before marking it sent. What happens after restart?",
            hi: "Relay एक row publish करके उसे sent mark करने से पहले crash हो जाता है। Restart के बाद क्या होता है?",
            hg: "Relay ek row publish karke use sent mark karne se pehle crash ho jaata hai. Restart ke baad kya hota hai?"
          },
          options: [
            {
              en: "The event is lost forever",
              hi: "Event हमेशा के लिए खो जाता है",
              hg: "Event hamesha ke liye kho jaata hai"
            },
            {
              en: "The row is published again, so consumers can see a duplicate",
              hi: "Row फिर publish होती है, इसलिए consumers को duplicate दिख सकता है",
              hg: "Row phir publish hoti hai, isliye consumers ko duplicate dikh sakta hai"
            },
            {
              en: "The ticket is rolled back automatically",
              hi: "Ticket अपने आप rollback हो जाता है",
              hg: "Ticket apne aap rollback ho jaata hai"
            },
            {
              en: "The broker removes the duplicate by itself",
              hi: "Broker duplicate अपने आप हटा देता है",
              hg: "Broker duplicate apne aap hata deta hai"
            }
          ],
          answer: 1,
          explain: {
            en: "The row is still unsent, so the relay sends it again: at-least-once. Nothing is lost, but the consumer must tolerate duplicates. That is the next lesson.",
            hi: "Row अब भी unsent है, इसलिए relay उसे फिर भेजता है: at-least-once। कुछ खोता नहीं, पर consumer को duplicates सहने होंगे। यही अगला पाठ है।",
            hg: "Row ab bhi unsent hai, isliye relay use phir bhejta hai: at-least-once. Kuch khota nahi, par consumer ko duplicates sahne honge. Yahi agla lesson hai."
          }
        },
        recap: {
          en: "<ul><li>Dual write (save, then publish) can lose the event on a crash.</li><li>Outbox: save the event row in the same transaction; a relay publishes it later and marks it sent.</li><li>Outbox is at-least-once, so the consumer must handle duplicates.</li></ul>",
          hi: "<ul><li>Dual write (save, फिर publish) crash पर event खो सकता है।</li><li>Outbox: event की row उसी transaction में save करो; relay उसे बाद में publish करके sent mark करता है।</li><li>Outbox at-least-once है, इसलिए consumer को duplicates सँभालने होंगे।</li></ul>",
          hg: "<ul><li>Dual write (save, phir publish) crash par event kho sakta hai.</li><li>Outbox: event ki row usi transaction mein save karo; relay use baad mein publish karke sent mark karta hai.</li><li>Outbox at-least-once hai, isliye consumer ko duplicates sambhalne honge.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Ticket and outbox row saved together; the relay crashes and resends",
            hi: "Ticket और outbox row साथ में save; relay crash होकर फिर भेजता है",
            hg: "Ticket aur outbox row saath mein save; relay crash hokar phir bhejta hai"
          },
          src: "var db = new FakeDb();\ndb.Resolve(501, \"Asha\");\ndb.Resolve(502, \"Ravi\");\n\nvar broker = new List<string>();\nvar relay = new Relay(db, broker);\n\nrelay.RunOnce(crashAfterPublish: true);\nConsole.WriteLine($\"after crash: broker has {broker.Count}, unsent rows {db.Outbox.Count(o => !o.Sent)}\");\nrelay.RunOnce();\nConsole.WriteLine(\"broker: \" + string.Join(\" | \", broker));\n\nrecord OutboxRow(int Id, string Payload)\n{\n    public bool Sent { get; set; }\n}\n\nclass FakeDb\n{\n    public Dictionary<int, string> Tickets { get; } = [];\n    public List<OutboxRow> Outbox { get; } = [];\n\n    // Stands in for ONE database transaction: the ticket and its outbox row land together.\n    public void Resolve(int ticketId, string customer)\n    {\n        Tickets[ticketId] = \"Resolved\";\n        Outbox.Add(new OutboxRow(Outbox.Count + 1, $\"TicketResolved {ticketId}\"));\n        Console.WriteLine($\"resolved {ticketId} for {customer}: ticket + outbox row saved\");\n    }\n}\n\nclass Relay(FakeDb db, List<string> broker)\n{\n    public void RunOnce(bool crashAfterPublish = false)\n    {\n        foreach (var row in db.Outbox.Where(o => !o.Sent).OrderBy(o => o.Id).ToList())\n        {\n            broker.Add(row.Payload);\n            if (crashAfterPublish) { Console.WriteLine($\"relay crashed before marking row {row.Id}\"); return; }\n            row.Sent = true;\n        }\n    }\n}",
          check: "run",
          expected: "resolved 501 for Asha: ticket + outbox row saved\nresolved 502 for Ravi: ticket + outbox row saved\nrelay crashed before marking row 1\nafter crash: broker has 1, unsent rows 2\nbroker: TicketResolved 501 | TicketResolved 501 | TicketResolved 502"
        }
      ]
    },
    {
      id: "idempotent-consumer",
      depth: "short",
      title: {
        en: "Idempotent consumer: never apply twice",
        hi: "Idempotent consumer: दो बार लागू न हो",
        hg: "Idempotent consumer: do baar laagu na ho"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 4 ended with a promise to pay: the outbox (and most brokers) deliver at-least-once, so a message can arrive twice. The consumer side of the same story is the idempotent consumer: Billing must give Asha her loyalty points once, not twice.",
          hi: "पाठ 4 एक वादे पर ख़त्म हुआ था: outbox (और ज़्यादातर brokers) at-least-once deliver करते हैं, इसलिए message दो बार आ सकता है। इसी कहानी का consumer वाला हिस्सा idempotent consumer है: Billing को Asha के loyalty points एक बार देने हैं, दो बार नहीं।",
          hg: "Lesson 4 ek wade par khatam hua tha: outbox (aur zyaadatar brokers) at-least-once deliver karte hain, isliye message do baar aa sakta hai. Isi kahani ka consumer wala hissa idempotent consumer hai: Billing ko Asha ke loyalty points ek baar dene hain, do baar nahi."
        },
        what: {
          en: "<p>An operation is <b>idempotent</b> when doing it twice has the same effect as doing it once. An <b>idempotent consumer</b> keeps an <b>inbox</b>: the ids of messages it has already handled. A repeated id is skipped.</p><p>\"Exactly-once\" in real systems means <b>at-least-once delivery + an idempotent consumer</b>.</p>",
          hi: "<p>कोई operation <b>idempotent</b> तब है जब उसे दो बार करने का असर एक बार करने जैसा ही हो। <b>Idempotent consumer</b> एक <b>inbox</b> रखता है: उन messages की ids जो वह पहले सँभाल चुका है। दोहराई गई id छोड़ दी जाती है।</p><p>असली systems में \"exactly-once\" का मतलब है <b>at-least-once delivery + idempotent consumer</b>।</p>",
          hg: "<p>Koi operation <b>idempotent</b> tab hai jab use do baar karne ka asar ek baar karne jaisa hi ho. <b>Idempotent consumer</b> ek <b>inbox</b> rakhta hai: un messages ki ids jo woh pehle sambhal chuka hai. Dohraayi gayi id chhod di jaati hai.</p><p>Asli systems mein \"exactly-once\" ka matlab hai <b>at-least-once delivery + idempotent consumer</b>.</p>"
        },
        why: {
          en: "<p>Without it a duplicate does real damage: double points, double refund, double SMS. The fix is cheap: each message carries a stable <code>MessageId</code> (the outbox row has one), and the consumer remembers it.</p><p>In a real database the inbox row and the effect are saved in <b>one transaction</b>, with a unique key on the message id. Then a crash cannot leave one without the other.</p>",
          hi: "<p>इसके बिना duplicate असली नुक़सान करता है: दुगने points, दुगना refund, दुगना SMS। हल सस्ता है: हर message में एक पक्की <code>MessageId</code> रहती है (outbox row में होती है), और consumer उसे याद रखता है।</p><p>असली database में inbox row और असर <b>एक transaction</b> में save होते हैं, message id पर unique key के साथ। तब crash एक को दूसरे के बिना नहीं छोड़ सकता।</p>",
          hg: "<p>Iske bina duplicate asli nuksaan karta hai: dugne points, dugna refund, dugna SMS. Hal sasta hai: har message mein ek pakki <code>MessageId</code> rehti hai (outbox row mein hoti hai), aur consumer use yaad rakhta hai.</p><p>Asli database mein inbox row aur asar <b>ek transaction</b> mein save hote hain, message id par unique key ke saath. Tab crash ek ko doosre ke bina nahi chhod sakta.</p>"
        },
        analogy: {
          en: "<p>A hostel gate register. Every parcel slip has a number. The guard writes the number when a parcel is handed over. If the courier comes again with the same slip, the guard says \"already received\" and does not give a second parcel.</p>",
          hi: "<p>Hostel gate का register। हर parcel की पर्ची पर एक number होता है। Parcel देते समय guard वह number लिख लेता है। Courier वही पर्ची लेकर फिर आए, तो guard कहता है \"पहले ही मिल चुका है\" और दूसरा parcel नहीं देता।</p>",
          hg: "<p>Hostel gate ka register. Har parcel ki parchi par ek number hota hai. Parcel dete samay guard woh number likh leta hai. Courier wahi parchi lekar phir aaye, to guard kehta hai \"pehle hi mil chuka hai\" aur doosra parcel nahi deta.</p>"
        },
        lines: [
          {
            code: "new(\"msg-1\", \"Asha\", 10),     // the broker delivered msg-1 a second time",
            note: {
              en: "The same <code>MessageId</code> arrives twice. This is normal for at-least-once delivery, not a bug in the broker.",
              hi: "वही <code>MessageId</code> दो बार आती है। At-least-once delivery में यह आम बात है, broker की ग़लती नहीं।",
              hg: "Wahi <code>MessageId</code> do baar aati hai. At-least-once delivery mein yeh aam baat hai, broker ki galti nahi."
            }
          },
          {
            code: "naive[d.Customer] = naive.GetValueOrDefault(d.Customer) + d.Points;",
            note: {
              en: "The naive consumer adds points on every delivery. Asha ends with 20 instead of 10.",
              hi: "Naive consumer हर delivery पर points जोड़ता है। Asha के 10 की जगह 20 हो जाते हैं।",
              hg: "Naive consumer har delivery par points jodta hai. Asha ke 10 ki jagah 20 ho jaate hain."
            }
          },
          {
            code: "if (!_inbox.Add(d.MessageId))      // Add returns false when the id is already there",
            note: {
              en: "<code>HashSet.Add</code> checks and records in one step. A false result means \"seen before\".",
              hi: "<code>HashSet.Add</code> एक ही बार में जाँचता और लिख लेता है। false का मतलब है \"पहले देखा जा चुका\"।",
              hg: "<code>HashSet.Add</code> ek hi baar mein jaanchta aur likh leta hai. false ka matlab hai \"pehle dekha ja chuka\"."
            }
          },
          {
            code: "Points[d.Customer] = Points.GetValueOrDefault(d.Customer) + d.Points;",
            note: {
              en: "The effect runs only for new ids. Ravi and Asha each get 10, once.",
              hi: "असर सिर्फ़ नई ids पर चलता है। Ravi और Asha को 10-10 मिलते हैं, एक-एक बार।",
              hg: "Asar sirf nayi ids par chalta hai. Ravi aur Asha ko 10-10 milte hain, ek-ek baar."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Saving the effect and the inbox row in <b>two</b> transactions. A crash between them gives a double effect or a lost one.</li><li>Making up a new id on every retry. The id must be stable, created once when the event is born.</li></ul>",
          hi: "<ul><li>असर और inbox row को <b>दो</b> transactions में save करना। बीच में crash हुआ तो असर दुगना होगा या खो जाएगा।</li><li>हर retry पर नई id बना देना। Id पक्की होनी चाहिए, event के जन्म पर एक बार बनी।</li></ul>",
          hg: "<ul><li>Asar aur inbox row ko <b>do</b> transactions mein save karna. Beech mein crash hua to asar dugna hoga ya kho jaayega.</li><li>Har retry par nayi id bana dena. Id pakki honi chahiye, event ke janm par ek baar bani.</li></ul>"
        },
        whenToUse: {
          en: "<p>Every consumer of a broker message needs this, because at-least-once is the default. For HTTP the same idea is an <b>idempotency key</b> from the client (Day 13). If the update is naturally idempotent (<code>SET status = Resolved</code>), you may not need an inbox.</p>",
          hi: "<p>Broker message के हर consumer को यह चाहिए, क्योंकि at-least-once ही default है। HTTP में यही idea client की <b>idempotency key</b> है (Day 13)। अगर update अपने आप idempotent है (<code>SET status = Resolved</code>), तो inbox की ज़रूरत न भी पड़े।</p>",
          hg: "<p>Broker message ke har consumer ko yeh chahiye, kyonki at-least-once hi default hai. HTTP mein yahi idea client ki <b>idempotency key</b> hai (Day 13). Agar update apne aap idempotent hai (<code>SET status = Resolved</code>), to inbox ki zaroorat na bhi pade.</p>"
        },
        exercise: {
          task: {
            en: "<p>Deliver <code>msg-3</code> (Meena, 5 points) three times to the idempotent consumer. Print Meena's final points. You should see two \"skip duplicate\" lines.</p>",
            hi: "<p>Idempotent consumer को <code>msg-3</code> (Meena, 5 points) तीन बार भेजो। Meena के आख़िरी points print करो। दो बार \"skip duplicate\" की line दिखनी चाहिए।</p>",
            hg: "<p>Idempotent consumer ko <code>msg-3</code> (Meena, 5 points) teen baar bhejo. Meena ke aakhri points print karo. Do baar \"skip duplicate\" ki line dikhni chahiye.</p>"
          },
          hint: {
            en: "<p>Put the same <code>Delivery</code> in the array three times and loop over it.</p>",
            hi: "<p>Array में वही <code>Delivery</code> तीन बार रखो और उस पर loop चलाओ।</p>",
            hg: "<p>Array mein wahi <code>Delivery</code> teen baar rakho aur us par loop chalao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: applied once, skipped twice",
              hi: "हल: एक बार लागू, दो बार छोड़ा",
              hg: "Solution: ek baar laagu, do baar chhoda"
            },
            src: "var consumer = new PointsConsumer();\nDelivery[] deliveries = [new(\"msg-3\", \"Meena\", 5), new(\"msg-3\", \"Meena\", 5), new(\"msg-3\", \"Meena\", 5)];\nforeach (var d in deliveries) consumer.Handle(d);\nConsole.WriteLine(\"Meena = \" + consumer.Points[\"Meena\"]);\n\nrecord Delivery(string MessageId, string Customer, int Points);\n\nclass PointsConsumer\n{\n    private readonly HashSet<string> _inbox = [];\n    public Dictionary<string, int> Points { get; } = [];\n\n    public void Handle(Delivery d)\n    {\n        if (!_inbox.Add(d.MessageId))\n        {\n            Console.WriteLine(\"skip duplicate \" + d.MessageId);\n            return;\n        }\n        Points[d.Customer] = Points.GetValueOrDefault(d.Customer) + d.Points;\n    }\n}",
            check: "run",
            expected: "skip duplicate msg-3\nskip duplicate msg-3\nMeena = 5"
          }
        },
        quiz: {
          q: {
            en: "Where should the inbox row be saved to be fully safe?",
            hi: "पूरी तरह safe रहने के लिए inbox row कहाँ save होनी चाहिए?",
            hg: "Poori tarah safe rehne ke liye inbox row kahan save honi chahiye?"
          },
          options: [
            {
              en: "In memory only, in a HashSet",
              hi: "सिर्फ़ memory में, HashSet में",
              hg: "Sirf memory mein, HashSet mein"
            },
            {
              en: "In a separate transaction, saved first",
              hi: "अलग transaction में, पहले save करके",
              hg: "Alag transaction mein, pehle save karke"
            },
            {
              en: "In the same database transaction as the consumer's own effect",
              hi: "Consumer के अपने असर वाले उसी database transaction में",
              hg: "Consumer ke apne asar wale usi database transaction mein"
            },
            {
              en: "In the broker, after the message is acknowledged",
              hi: "Broker में, message acknowledge होने के बाद",
              hg: "Broker mein, message acknowledge hone ke baad"
            }
          ],
          answer: 2,
          explain: {
            en: "One transaction means the effect and the \"I handled it\" note commit together or not at all. A memory-only set is lost on restart (our demo uses one just to stay short).",
            hi: "एक transaction का मतलब है कि असर और \"मैंने सँभाल लिया\" का note साथ में commit होते हैं या दोनों नहीं। सिर्फ़ memory वाला set restart पर खो जाता है (हमारा demo इसे बस छोटा रखने को लेता है)।",
            hg: "Ek transaction ka matlab hai ki asar aur \"maine sambhal liya\" ka note saath mein commit hote hain ya dono nahi. Sirf memory wala set restart par kho jaata hai (hamara demo ise bas chhota rakhne ko leta hai)."
          }
        },
        recap: {
          en: "<ul><li>At-least-once delivery means duplicates will come; the consumer must be idempotent.</li><li>Inbox: remember handled message ids and skip repeats, in the same transaction as the effect.</li><li>Prefer naturally idempotent updates (SET) over increments (+=).</li></ul>",
          hi: "<ul><li>At-least-once delivery में duplicates आएँगे; consumer को idempotent होना चाहिए।</li><li>Inbox: सँभाली गई message ids याद रखो और repeats छोड़ दो, असर वाले उसी transaction में।</li><li>Increment (+=) की जगह अपने आप idempotent updates (SET) चुनो।</li></ul>",
          hg: "<ul><li>At-least-once delivery mein duplicates aayenge; consumer ko idempotent hona chahiye.</li><li>Inbox: sambhali gayi message ids yaad rakho aur repeats chhod do, asar wale usi transaction mein.</li><li>Increment (+=) ki jagah apne aap idempotent updates (SET) chuno.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Naive consumer double-credits Asha; the inbox fixes it",
            hi: "Naive consumer Asha को दुगने points देता है; inbox इसे ठीक करता है",
            hg: "Naive consumer Asha ko dugne points deta hai; inbox ise theek karta hai"
          },
          src: "Delivery[] deliveries =\n[\n    new(\"msg-1\", \"Asha\", 10),\n    new(\"msg-2\", \"Ravi\", 10),\n    new(\"msg-1\", \"Asha\", 10),     // the broker delivered msg-1 a second time\n];\n\n// Naive consumer (the mistake): applies every delivery it sees.\nvar naive = new Dictionary<string, int>();\nforeach (var d in deliveries)\n    naive[d.Customer] = naive.GetValueOrDefault(d.Customer) + d.Points;\nConsole.WriteLine(\"naive:      \" + Show(naive));\n\n// Idempotent consumer: remembers message ids in an inbox.\nvar consumer = new PointsConsumer();\nforeach (var d in deliveries) consumer.Handle(d);\nConsole.WriteLine(\"idempotent: \" + Show(consumer.Points));\n\nstatic string Show(Dictionary<string, int> points) =>\n    string.Join(\", \", points.OrderBy(p => p.Key).Select(p => $\"{p.Key}={p.Value}\"));\n\nrecord Delivery(string MessageId, string Customer, int Points);\n\nclass PointsConsumer\n{\n    private readonly HashSet<string> _inbox = [];\n    public Dictionary<string, int> Points { get; } = [];\n\n    public void Handle(Delivery d)\n    {\n        if (!_inbox.Add(d.MessageId))      // Add returns false when the id is already there\n        {\n            Console.WriteLine(\"skip duplicate \" + d.MessageId);\n            return;\n        }\n        Points[d.Customer] = Points.GetValueOrDefault(d.Customer) + d.Points;\n    }\n}",
          check: "run",
          expected: "naive:      Asha=20, Ravi=10\nskip duplicate msg-1\nidempotent: Asha=10, Ravi=10"
        }
      ]
    },
    {
      id: "saga",
      depth: "short",
      title: {
        en: "Saga: undo with compensation",
        hi: "Saga: compensation से पलटना",
        hg: "Saga: compensation se palatna"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 3 to 5 made single messages safe. Now one business process needs several services in a row: upgrading Asha to Premium touches Billing (charge), Support (plan) and an agent pool. Each owns its database, so no single transaction covers them.",
          hi: "पाठ 3 से 5 ने अकेले messages को safe बनाया। अब एक business process में कई services लगातार लगती हैं: Asha को Premium में upgrade करने में Billing (charge), Support (plan) और agent pool छुए जाते हैं। हर एक का अपना database है, इसलिए कोई एक transaction सबको नहीं ढकता।",
          hg: "Lessons 3 se 5 ne akele messages ko safe banaya. Ab ek business process mein kai services lagaatar lagti hain: Asha ko Premium mein upgrade karne mein Billing (charge), Support (plan) aur agent pool chhue jaate hain. Har ek ka apna database hai, isliye koi ek transaction sabko nahi dhakta."
        },
        what: {
          en: "<p>A <b>Saga</b> is a sequence of <b>local transactions</b>, one per service. If a later step fails, the saga runs a <b>compensating action</b> for each step that already finished, in <b>reverse order</b>.</p><p>A compensation is a new business action (refund, release, cancel). It is not a database rollback.</p>",
          hi: "<p><b>Saga</b> <b>local transactions</b> की एक कड़ी है, हर service की एक। अगर बाद का कोई step fail हो, तो saga हर पूरे हो चुके step के लिए <b>compensating action</b> चलाता है, <b>उल्टे order</b> में।</p><p>Compensation एक नया business action है (refund, release, cancel)। यह database का rollback नहीं है।</p>",
          hg: "<p><b>Saga</b> <b>local transactions</b> ki ek kadi hai, har service ki ek. Agar baad ka koi step fail ho, to saga har poore ho chuke step ke liye <b>compensating action</b> chalata hai, <b>ulte order</b> mein.</p><p>Compensation ek naya business action hai (refund, release, cancel). Yeh database ka rollback nahi hai.</p>"
        },
        why: {
          en: "<p>Two-phase commit (a distributed transaction) locks resources in several services and does not work with most brokers and cloud services, so microservices avoid it. A saga trades \"all or nothing at once\" for \"eventually all, or cleanly undone\".</p><p>Design hint: put steps that <b>cannot be undone</b> (an SMS) last, after every step that may fail.</p>",
          hi: "<p>Two-phase commit (distributed transaction) कई services में resources lock करता है और ज़्यादातर brokers और cloud services के साथ चलता नहीं, इसलिए microservices उससे बचते हैं। Saga \"एक साथ सब या कुछ नहीं\" की जगह \"आख़िर में सब, या साफ़ तरह से पलटा हुआ\" देता है।</p><p>Design की सलाह: जिन steps को <b>पलटा नहीं जा सकता</b> (SMS), उन्हें सबसे आख़िर में रखो, हर उस step के बाद जो fail हो सकता है।</p>",
          hg: "<p>Two-phase commit (distributed transaction) kai services mein resources lock karta hai aur zyaadatar brokers aur cloud services ke saath chalta nahi, isliye microservices usse bachte hain. Saga \"ek saath sab ya kuch nahi\" ki jagah \"aakhir mein sab, ya saaf tarah se palta hua\" deta hai.</p><p>Design ki salaah: jin steps ko <b>palta nahi ja sakta</b> (SMS), unhe sabse aakhir mein rakho, har us step ke baad jo fail ho sakta hai.</p>"
        },
        analogy: {
          en: "<p>Booking a wedding trip: train, then hotel, then cab. If the cab is not available you do not \"roll back the universe\". You cancel the hotel and then the train, in that order, and a cancellation may cost a fee.</p>",
          hi: "<p>शादी की यात्रा booking: पहले train, फिर hotel, फिर cab। Cab न मिले तो आप \"पूरी दुनिया पीछे\" नहीं करते। आप पहले hotel और फिर train cancel करते हो, इसी order में, और cancel करने पर कुछ fee लग सकती है।</p>",
          hg: "<p>Shaadi ki yaatra booking: pehle train, phir hotel, phir cab. Cab na mile to aap \"poori duniya peeche\" nahi karte. Aap pehle hotel aur phir train cancel karte ho, isi order mein, aur cancel karne par kuch fee lag sakti hai.</p>"
        },
        lines: [
          {
            code: "new(\"ChargeCard\", () => $\"charged {customer}\", () => $\"refunded {customer}\"),",
            note: {
              en: "Each step is a pair: what to do and how to undo it. Refunding is the compensation for charging.",
              hi: "हर step एक जोड़ी है: क्या करना है और उसे कैसे पलटना है। Refund, charge की compensation है।",
              hg: "Har step ek jodi hai: kya karna hai aur use kaise palatna hai. Refund, charge ki compensation hai."
            }
          },
          {
            code: "var done = new Stack<Step>();",
            note: {
              en: "A stack of finished steps. A stack gives last-in, first-out, which is exactly the reverse order we need.",
              hi: "पूरे हो चुके steps का stack। Stack में last-in, first-out होता है, यानी ठीक वही उल्टा order जो चाहिए।",
              hg: "Poore ho chuke steps ka stack. Stack mein last-in, first-out hota hai, yaani theek wahi ulta order jo chahiye."
            }
          },
          {
            code: "while (done.Count > 0) Console.WriteLine(\"  undo: \" + done.Pop().Undo());   // reverse order",
            note: {
              en: "Pop and undo until the stack is empty: the plan is switched off first, then the card is refunded. The failed step itself is not undone, because it never finished.",
              hi: "Stack खाली होने तक pop करके undo करो: पहले plan बंद, फिर card का refund। जो step fail हुआ उसे undo नहीं करते, क्योंकि वह पूरा हुआ ही नहीं।",
              hg: "Stack khaali hone tak pop karke undo karo: pehle plan band, phir card ka refund. Jo step fail hua use undo nahi karte, kyonki woh poora hua hi nahi."
            }
          },
          {
            code: "Console.WriteLine(\"  welcome SMS sent (last, because it cannot be undone)\");",
            note: {
              en: "The SMS cannot be unsent, so it runs only after every step that can fail has succeeded.",
              hi: "SMS वापस नहीं लिया जा सकता, इसलिए वह तभी चलता है जब fail हो सकने वाले सारे steps सफल हो चुके हों।",
              hg: "SMS wapas nahi liya ja sakta, isliye woh tabhi chalta hai jab fail ho sakne wale saare steps safal ho chuke hon."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Compensating in the same order as the steps. Undo must go in <b>reverse</b>.</li><li>Putting an irreversible step (an SMS, a bank transfer) in the middle of the saga.</li><li>Forgetting that a compensation can fail too. Retry it, and when retries run out, park it for a person with an alert.</li></ul>",
          hi: "<ul><li>Steps के उसी order में compensate करना। पलटना <b>उल्टे</b> order में होना चाहिए।</li><li>न पलटा जा सकने वाला step (SMS, bank transfer) saga के बीच में रखना।</li><li>भूल जाना कि compensation भी fail हो सकती है। उसे retry करो, और retries ख़त्म हों तो alert के साथ किसी इंसान के लिए अलग रख दो।</li></ul>",
          hg: "<ul><li>Steps ke usi order mein compensate karna. Palatna <b>ulte</b> order mein hona chahiye.</li><li>Na palta ja sakne wala step (SMS, bank transfer) saga ke beech mein rakhna.</li><li>Bhool jaana ki compensation bhi fail ho sakti hai. Use retry karo, aur retries khatam hon to alert ke saath kisi insaan ke liye alag rakh do.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a saga for a business process across several services where a failure in the middle is plausible. If one service and one database can do it, use a normal transaction. A real orchestrator saves its state after each step (see the Deep Dive).</p>",
          hi: "<p>Saga उस business process के लिए लो जो कई services में फैला है और बीच में failure हो सकता है। एक service और एक database से काम हो जाए तो normal transaction लो। असली orchestrator हर step के बाद अपनी state save करता है (Deep Dive देखो)।</p>",
          hg: "<p>Saga us business process ke liye lo jo kai services mein faila hai aur beech mein failure ho sakta hai. Ek service aur ek database se kaam ho jaaye to normal transaction lo. Asli orchestrator har step ke baad apni state save karta hai (Deep Dive dekho).</p>"
        },
        exercise: {
          task: {
            en: "<p>Run the saga for <b>Meena</b> so that <code>ActivatePlan</code> fails. Only the card charge has finished, so only it should be refunded.</p>",
            hi: "<p><b>Meena</b> के लिए saga ऐसे चलाओ कि <code>ActivatePlan</code> fail हो। सिर्फ़ card का charge पूरा हुआ है, इसलिए सिर्फ़ उसी का refund होना चाहिए।</p>",
            hg: "<p><b>Meena</b> ke liye saga aise chalao ki <code>ActivatePlan</code> fail ho. Sirf card ka charge poora hua hai, isliye sirf usi ka refund hona chahiye.</p>"
          },
          hint: {
            en: "<p>Pass <code>failAt: \"ActivatePlan\"</code>. Count the steps in the stack at that moment.</p>",
            hi: "<p><code>failAt: \"ActivatePlan\"</code> दो। उस वक़्त stack में कितने steps हैं, गिनो।</p>",
            hg: "<p><code>failAt: \"ActivatePlan\"</code> do. Us waqt stack mein kitne steps hain, gino.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one step done, one step undone",
              hi: "हल: एक step पूरा, एक step पलटा",
              hg: "Solution: ek step poora, ek step palta"
            },
            src: "Console.WriteLine(\"result: \" + new UpgradeSaga().Run(\"Meena\", failAt: \"ActivatePlan\"));\n\nrecord Step(string Name, Func<string> Do, Func<string> Undo);\n\nclass UpgradeSaga\n{\n    public string Run(string customer, string? failAt)\n    {\n        Console.WriteLine($\"== upgrade {customer} to Premium\");\n        Step[] steps =\n        [\n            new(\"ChargeCard\", () => $\"charged {customer}\", () => $\"refunded {customer}\"),\n            new(\"ActivatePlan\", () => \"premium plan on\", () => \"premium plan off\"),\n            new(\"AssignAgent\", () => \"agent Kiran assigned\", () => \"agent released\"),\n        ];\n\n        var done = new Stack<Step>();\n        foreach (var step in steps)\n        {\n            try\n            {\n                if (step.Name == failAt) throw new InvalidOperationException($\"{step.Name} unavailable\");\n                Console.WriteLine(\"  do:   \" + step.Do());\n                done.Push(step);\n            }\n            catch (InvalidOperationException ex)\n            {\n                Console.WriteLine(\"  failed: \" + ex.Message);\n                while (done.Count > 0) Console.WriteLine(\"  undo: \" + done.Pop().Undo());\n                return \"Cancelled\";\n            }\n        }\n        return \"Confirmed\";\n    }\n}",
            check: "run",
            expected: "== upgrade Meena to Premium\n  do:   charged Meena\n  failed: ActivatePlan unavailable\n  undo: refunded Meena\nresult: Cancelled"
          }
        },
        quiz: {
          q: {
            en: "Step 3 of a saga fails. Which compensations run, and in what order?",
            hi: "Saga का step 3 fail हो गया। कौन सी compensations चलती हैं, और किस order में?",
            hg: "Saga ka step 3 fail ho gaya. Kaun si compensations chalti hain, aur kis order mein?"
          },
          options: [
            {
              en: "Step 2, then step 1 (finished steps, in reverse)",
              hi: "Step 2, फिर step 1 (पूरे हुए steps, उल्टे order में)",
              hg: "Step 2, phir step 1 (poore hue steps, ulte order mein)"
            },
            {
              en: "Step 1, then step 2 (in the original order)",
              hi: "Step 1, फिर step 2 (पहले वाले order में)",
              hg: "Step 1, phir step 2 (pehle wale order mein)"
            },
            {
              en: "Step 3, then step 2, then step 1",
              hi: "Step 3, फिर step 2, फिर step 1",
              hg: "Step 3, phir step 2, phir step 1"
            },
            {
              en: "None; the database rolls everything back by itself",
              hi: "कोई नहीं; database सब कुछ अपने आप rollback कर देता है",
              hg: "Koi nahi; database sab kuch apne aap rollback kar deta hai"
            }
          ],
          answer: 0,
          explain: {
            en: "Only finished steps are undone, newest first. Step 3 never finished, so there is nothing to undo, and each service committed its own local transaction, so there is no database-wide rollback.",
            hi: "सिर्फ़ पूरे हुए steps पलटे जाते हैं, सबसे नया पहले। Step 3 पूरा हुआ ही नहीं, इसलिए पलटने को कुछ नहीं; और हर service ने अपना local transaction commit किया है, इसलिए पूरे database का rollback नहीं होता।",
            hg: "Sirf poore hue steps palte jaate hain, sabse naya pehle. Step 3 poora hua hi nahi, isliye palatne ko kuch nahi; aur har service ne apna local transaction commit kiya hai, isliye poore database ka rollback nahi hota."
          }
        },
        recap: {
          en: "<ul><li>Saga = local transactions plus compensating actions, instead of a distributed transaction.</li><li>On failure, undo the finished steps in reverse order; irreversible steps go last.</li><li>Compensations are business actions, can fail too, and must be idempotent.</li></ul>",
          hi: "<ul><li>Saga = local transactions और compensating actions, distributed transaction की जगह।</li><li>Failure पर पूरे हुए steps उल्टे order में पलटो; न पलटे जा सकने वाले steps आख़िर में।</li><li>Compensations business actions हैं, ये भी fail हो सकती हैं, और idempotent होनी चाहिए।</li></ul>",
          hg: "<ul><li>Saga = local transactions aur compensating actions, distributed transaction ki jagah.</li><li>Failure par poore hue steps ulte order mein palto; na palte ja sakne wale steps aakhir mein.</li><li>Compensations business actions hain, ye bhi fail ho sakti hain, aur idempotent honi chahiye.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "An orchestrated saga: a failed step triggers reverse compensation",
            hi: "Orchestrated saga: step fail होने पर उल्टे order में compensation",
            hg: "Orchestrated saga: step fail hone par ulte order mein compensation"
          },
          src: "var saga = new UpgradeSaga();\nConsole.WriteLine(\"result: \" + saga.Run(\"Asha\", failAt: null));\nConsole.WriteLine(\"result: \" + saga.Run(\"Ravi\", failAt: \"AssignAgent\"));\n\nrecord Step(string Name, Func<string> Do, Func<string> Undo);\n\nclass UpgradeSaga\n{\n    public string Run(string customer, string? failAt)\n    {\n        Console.WriteLine($\"== upgrade {customer} to Premium\");\n        Step[] steps =\n        [\n            new(\"ChargeCard\", () => $\"charged {customer}\", () => $\"refunded {customer}\"),\n            new(\"ActivatePlan\", () => \"premium plan on\", () => \"premium plan off\"),\n            new(\"AssignAgent\", () => \"agent Kiran assigned\", () => \"agent released\"),\n        ];\n\n        var done = new Stack<Step>();\n        foreach (var step in steps)\n        {\n            try\n            {\n                if (step.Name == failAt) throw new InvalidOperationException($\"{step.Name} unavailable\");\n                Console.WriteLine(\"  do:   \" + step.Do());\n                done.Push(step);\n            }\n            catch (InvalidOperationException ex)\n            {\n                Console.WriteLine(\"  failed: \" + ex.Message);\n                while (done.Count > 0) Console.WriteLine(\"  undo: \" + done.Pop().Undo());   // reverse order\n                return \"Cancelled\";\n            }\n        }\n\n        Console.WriteLine(\"  welcome SMS sent (last, because it cannot be undone)\");\n        return \"Confirmed\";\n    }\n}",
          check: "run",
          expected: "== upgrade Asha to Premium\n  do:   charged Asha\n  do:   premium plan on\n  do:   agent Kiran assigned\n  welcome SMS sent (last, because it cannot be undone)\nresult: Confirmed\n== upgrade Ravi to Premium\n  do:   charged Ravi\n  do:   premium plan on\n  failed: AssignAgent unavailable\n  undo: premium plan off\n  undo: refunded Ravi\nresult: Cancelled"
        }
      ]
    },
    {
      id: "retry-breaker",
      depth: "short",
      title: {
        en: "Retry and circuit breaker",
        hi: "Retry और circuit breaker",
        hg: "Retry aur circuit breaker"
      },
      lesson: {
        buildsOn: {
          en: "The saga in lesson 6 assumes calls sometimes fail. How a single call to a flaky service should behave is this lesson: retry short glitches, and stop calling a service that is really down. Both protect Support when Billing misbehaves (lesson 1).",
          hi: "पाठ 6 का saga मानकर चलता है कि calls कभी-कभी fail होती हैं। एक flaky service को एक call कैसे करनी चाहिए, यही यह पाठ बताता है: छोटी गड़बड़ पर retry करो, और जो service सचमुच बंद है उसे call करना रोक दो। दोनों Support को बचाते हैं जब Billing बिगड़ती है (पाठ 1)।",
          hg: "Lesson 6 ka saga maanke chalta hai ki calls kabhi-kabhi fail hoti hain. Ek flaky service ko ek call kaise karni chahiye, yahi yeh lesson batata hai: chhoti gadbad par retry karo, aur jo service sachmuch band hai use call karna rok do. Dono Support ko bachaate hain jab Billing bigadti hai (lesson 1)."
        },
        what: {
          en: "<p><b>Retry with backoff</b>: if a call fails for a short, temporary reason (timeout, 503), try again, waiting a little longer each time (100 ms, 200 ms, 400 ms...). Add small random <b>jitter</b> so many clients do not retry together.</p><p><b>Circuit breaker</b>: after enough failures in a row, <b>stop calling</b> for a while. States: <b>Closed</b> (normal) &rarr; <b>Open</b> (calls rejected fast) &rarr; after a pause, <b>Half-open</b> (let one trial call through) &rarr; Closed again if it works.</p>",
          hi: "<p><b>Backoff के साथ retry</b>: अगर call किसी छोटी, temporary वजह से fail हो (timeout, 503), तो फिर कोशिश करो, हर बार थोड़ा ज़्यादा रुककर (100 ms, 200 ms, 400 ms...)। थोड़ा random <b>jitter</b> जोड़ो ताकि कई clients एक साथ retry न करें।</p><p><b>Circuit breaker</b>: लगातार काफ़ी failures के बाद कुछ देर के लिए <b>call करना रोक दो</b>। States: <b>Closed</b> (normal) &rarr; <b>Open</b> (calls तुरंत मना) &rarr; कुछ देर बाद <b>Half-open</b> (एक trial call जाने दो) &rarr; चल गई तो फिर Closed।</p>",
          hg: "<p><b>Backoff ke saath retry</b>: agar call kisi chhoti, temporary wajah se fail ho (timeout, 503), to phir koshish karo, har baar thoda zyaada rukkar (100 ms, 200 ms, 400 ms...). Thoda random <b>jitter</b> jodo taaki kai clients ek saath retry na karein.</p><p><b>Circuit breaker</b>: lagaatar kaafi failures ke baad kuch der ke liye <b>call karna rok do</b>. States: <b>Closed</b> (normal) &rarr; <b>Open</b> (calls turant mana) &rarr; kuch der baad <b>Half-open</b> (ek trial call jaane do) &rarr; chal gayi to phir Closed.</p>"
        },
        why: {
          en: "<p>Most failures between services are short glitches, so a retry fixes them. But if a service is truly down, retrying keeps every caller busy and piles more load on the sick service (a retry storm). The breaker gives it room to recover and keeps callers fast, because a rejected call returns at once.</p><p>Retry only calls that are <b>safe to repeat</b> (reads, or writes with an idempotency key). Never retry a plain POST blindly.</p>",
          hi: "<p>Services के बीच ज़्यादातर failures छोटी गड़बड़ होती हैं, इसलिए retry उन्हें ठीक कर देता है। पर अगर service सचमुच बंद है, तो retry हर caller को busy रखता है और बीमार service पर और load डालता है (retry storm)। Breaker उसे ठीक होने की जगह देता है और callers को तेज़ रखता है, क्योंकि मना की गई call तुरंत लौट आती है।</p><p>सिर्फ़ वही calls retry करो जिन्हें <b>दोहराना safe</b> है (reads, या idempotency key वाली writes)। सादे POST को आँख मूँदकर retry मत करो।</p>",
          hg: "<p>Services ke beech zyaadatar failures chhoti gadbad hoti hain, isliye retry unhe theek kar deta hai. Par agar service sachmuch band hai, to retry har caller ko busy rakhta hai aur beemar service par aur load daalta hai (retry storm). Breaker use theek hone ki jagah deta hai aur callers ko tez rakhta hai, kyonki mana ki gayi call turant laut aati hai.</p><p>Sirf wahi calls retry karo jinhe <b>dohrana safe</b> hai (reads, ya idempotency key wali writes). Saade POST ko aankh moondkar retry mat karo.</p>"
        },
        analogy: {
          en: "<p>The MCB in your home electrical board. A short flicker is ridden out by trying again. If the fault is real, the MCB trips so the wiring does not burn, and you press it back only after the fault is fixed.</p>",
          hi: "<p>आपके घर के बिजली board का MCB। छोटी झपक पर फिर से कोशिश करके काम चल जाता है। अगर fault असली है, तो MCB गिर जाता है ताकि wiring न जले, और fault ठीक होने के बाद ही आप उसे वापस दबाते हो।</p>",
          hg: "<p>Aapke ghar ke bijli board ka MCB. Chhoti jhapak par phir se koshish karke kaam chal jaata hai. Agar fault asli hai, to MCB gir jaata hai taaki wiring na jale, aur fault theek hone ke baad hi aap use waapas dabate ho.</p>"
        },
        lines: [
          {
            code: "var delayMs = 100 * (1 << (attempt - 1));   // 100, 200, 400... (jitter left out to keep output stable)",
            note: {
              en: "Exponential backoff: the wait doubles each time. A real client adds random jitter, which we leave out so the output is stable. We only print the delay instead of sleeping.",
              hi: "Exponential backoff: हर बार रुकना दुगना होता है। असली client में random jitter भी होता है, जो हमने output stable रखने के लिए छोड़ा है। हम सोते नहीं, सिर्फ़ delay print करते हैं।",
              hg: "Exponential backoff: har baar rukna dugna hota hai. Asli client mein random jitter bhi hota hai, jo humne output stable rakhne ke liye chhoda hai. Hum sote nahi, sirf delay print karte hain."
            }
          },
          {
            code: "throw new InvalidOperationException(\"circuit open: call rejected fast\");",
            note: {
              en: "Open circuit: the call is rejected at once without touching Billing. That is what protects both sides.",
              hi: "Open circuit: call तुरंत मना हो जाती है और Billing को छूती भी नहीं। दोनों तरफ़ का बचाव यही है।",
              hg: "Open circuit: call turant mana ho jaati hai aur Billing ko chhoti bhi nahi. Dono taraf ka bachaav yahi hai."
            }
          },
          {
            code: "if (++_failures >= failureLimit) _openedAt = clock();",
            note: {
              en: "After 3 failures in a row the breaker opens and remembers when. The clock is a function we move by hand, so no real waiting is needed.",
              hi: "लगातार 3 failures के बाद breaker खुल जाता है और याद रखता है कि कब। Clock एक function है जिसे हम हाथ से आगे बढ़ाते हैं, इसलिए सचमुच इंतज़ार नहीं करना पड़ता।",
              hg: "Lagaatar 3 failures ke baad breaker khul jaata hai aur yaad rakhta hai ki kab. Clock ek function hai jise hum haath se aage badhate hain, isliye sachmuch intezaar nahi karna padta."
            }
          },
          {
            code: "try { var result = action(); _failures = 0; _openedAt = -1; return result; }",
            note: {
              en: "After 31 seconds the next call is let through as a trial. It succeeds, so the circuit closes again (call #5).",
              hi: "31 seconds बाद अगली call trial के तौर पर जाने दी जाती है। वह सफल होती है, इसलिए circuit फिर बंद (closed) हो जाता है (call #5)।",
              hg: "31 seconds baad agli call trial ke taur par jaane di jaati hai. Woh safal hoti hai, isliye circuit phir band (closed) ho jaata hai (call #5)."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Retrying a non-idempotent call (a plain POST), which can charge a card twice.</li><li>Retrying with no delay and no limit: a small outage becomes a retry storm. Retry at <b>one</b> layer only, because retries multiply across layers.</li></ul>",
          hi: "<ul><li>Non-idempotent call (सादा POST) को retry करना, जिससे card दो बार कट सकता है।</li><li>बिना delay और बिना limit के retry करना: छोटी गड़बड़ retry storm बन जाती है। Retry सिर्फ़ <b>एक</b> layer पर करो, क्योंकि layers में retries गुणा हो जाती हैं।</li></ul>",
          hg: "<ul><li>Non-idempotent call (saada POST) ko retry karna, jisse card do baar kat sakta hai.</li><li>Bina delay aur bina limit ke retry karna: chhoti gadbad retry storm ban jaati hai. Retry sirf <b>ek</b> layer par karo, kyonki layers mein retries guna ho jaati hain.</li></ul>"
        },
        whenToUse: {
          en: "<p>Put a timeout on every remote call. Add retry for idempotent calls and a breaker on important or slow dependencies. In .NET use <b>Polly v8</b> or <code>Microsoft.Extensions.Http.Resilience</code> instead of hand-written code (see the Deep Dive).</p>",
          hi: "<p>हर remote call पर timeout लगाओ। idempotent calls पर retry और ज़रूरी या धीमी dependencies पर breaker जोड़ो। .NET में हाथ का code लिखने की जगह <b>Polly v8</b> या <code>Microsoft.Extensions.Http.Resilience</code> लो (Deep Dive देखो)।</p>",
          hg: "<p>Har remote call par timeout lagao. Idempotent calls par retry aur zaroori ya dheemi dependencies par breaker jodo. .NET mein haath ka code likhne ki jagah <b>Polly v8</b> ya <code>Microsoft.Extensions.Http.Resilience</code> lo (Deep Dive dekho).</p>"
        },
        exercise: {
          task: {
            en: "<p>Use a retry limit of <b>2</b> attempts against a service that fails its first 2 calls. Catch the final <code>TimeoutException</code> and print <code>gave up: ...</code> with its message.</p>",
            hi: "<p>ऐसी service के सामने retry की limit <b>2</b> attempts रखो जो पहली 2 calls fail करती है। आख़िरी <code>TimeoutException</code> पकड़ो और उसके message के साथ <code>gave up: ...</code> print करो।</p>",
            hg: "<p>Aisi service ke saamne retry ki limit <b>2</b> attempts rakho jo pehli 2 calls fail karti hai. Aakhri <code>TimeoutException</code> pakdo aur uske message ke saath <code>gave up: ...</code> print karo.</p>"
          },
          hint: {
            en: "<p>Call <code>Retry.Run(2, ...)</code> inside <code>try</code>. The second failure is not caught by the retry filter, so it reaches your <code>catch</code>.</p>",
            hi: "<p><code>try</code> के अंदर <code>Retry.Run(2, ...)</code> call करो। दूसरी failure retry के filter में नहीं आती, इसलिए वह आपके <code>catch</code> तक पहुँचती है।</p>",
            hg: "<p><code>try</code> ke andar <code>Retry.Run(2, ...)</code> call karo. Doosri failure retry ke filter mein nahi aati, isliye woh aapke <code>catch</code> tak pahunchti hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: retries run out, the error reaches the caller",
              hi: "हल: retries ख़त्म, error caller तक पहुँचा",
              hg: "Solution: retries khatam, error caller tak pahuncha"
            },
            src: "var flaky = new FlakyBilling(failFirst: 2);\ntry { Console.WriteLine(Retry.Run(2, () => flaky.GetInvoice(\"Meena\"))); }\ncatch (TimeoutException ex) { Console.WriteLine(\"gave up: \" + ex.Message); }\n\nclass FlakyBilling(int failFirst)\n{\n    private int _calls;\n\n    public string GetInvoice(string customer) =>\n        ++_calls <= failFirst ? throw new TimeoutException(\"billing timed out\") : \"invoice for \" + customer;\n}\n\nstatic class Retry\n{\n    public static string Run(int maxAttempts, Func<string> call)\n    {\n        for (var attempt = 1; ; attempt++)\n        {\n            try { return call(); }\n            catch (TimeoutException) when (attempt < maxAttempts)\n            {\n                Console.WriteLine($\"  attempt {attempt} failed\");\n            }\n        }\n    }\n}",
            check: "run",
            expected: "  attempt 1 failed\ngave up: billing timed out"
          }
        },
        quiz: {
          q: {
            en: "Billing has been down for a minute and every call times out. What does a circuit breaker add on top of retries?",
            hi: "Billing एक मिनट से बंद है और हर call timeout होती है। Retries के ऊपर circuit breaker क्या जोड़ता है?",
            hg: "Billing ek minute se band hai aur har call timeout hoti hai. Retries ke upar circuit breaker kya jodta hai?"
          },
          options: [
            {
              en: "It stores the failed calls in the dead-letter queue",
              hi: "यह fail हुई calls को dead-letter queue में रखता है",
              hg: "Yeh fail hui calls ko dead-letter queue mein rakhta hai"
            },
            {
              en: "It retries faster so the outage ends sooner",
              hi: "यह और तेज़ retry करता है ताकि outage जल्दी ख़त्म हो",
              hg: "Yeh aur tez retry karta hai taaki outage jaldi khatam ho"
            },
            {
              en: "It makes the POST calls idempotent",
              hi: "यह POST calls को idempotent बना देता है",
              hg: "Yeh POST calls ko idempotent bana deta hai"
            },
            {
              en: "It stops calling for a while, so callers fail fast and Billing can recover",
              hi: "यह कुछ देर call करना रोक देता है, इसलिए callers जल्दी fail होते हैं और Billing ठीक हो पाती है",
              hg: "Yeh kuch der call karna rok deta hai, isliye callers jaldi fail hote hain aur Billing theek ho paati hai"
            }
          ],
          answer: 3,
          explain: {
            en: "Open means \"do not even try\": calls are rejected at once, callers do not wait for timeouts, and the sick service gets quiet time. Faster retries would make the outage worse.",
            hi: "Open का मतलब \"कोशिश भी मत करो\": calls तुरंत मना होती हैं, callers timeout का इंतज़ार नहीं करते, और बीमार service को शांत समय मिलता है। तेज़ retries outage को और बिगाड़तीं।",
            hg: "Open ka matlab \"koshish bhi mat karo\": calls turant mana hoti hain, callers timeout ka intezaar nahi karte, aur beemar service ko shaant samay milta hai. Tez retries outage ko aur bigaadtin."
          }
        },
        recap: {
          en: "<ul><li>Retry short, temporary failures with growing delays (backoff) plus jitter, and only on safe-to-repeat calls.</li><li>A circuit breaker opens after repeated failures: calls fail fast, then one trial call checks recovery.</li><li>Use Polly or the Http.Resilience handlers in real code, and retry at one layer.</li></ul>",
          hi: "<ul><li>छोटी, temporary failures पर बढ़ते delay (backoff) और jitter के साथ retry करो, और सिर्फ़ दोहराने में safe calls पर।</li><li>Circuit breaker बार-बार failure के बाद खुल जाता है: calls जल्दी fail होती हैं, फिर एक trial call recovery जाँचती है।</li><li>असली code में Polly या Http.Resilience handlers लो, और retry एक layer पर करो।</li></ul>",
          hg: "<ul><li>Chhoti, temporary failures par badhte delay (backoff) aur jitter ke saath retry karo, aur sirf dohrane mein safe calls par.</li><li>Circuit breaker baar-baar failure ke baad khul jaata hai: calls jaldi fail hoti hain, phir ek trial call recovery jaanchti hai.</li><li>Asli code mein Polly ya Http.Resilience handlers lo, aur retry ek layer par karo.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Retry with backoff, then a circuit breaker, on a fake flaky Billing",
            hi: "Fake flaky Billing पर backoff वाला retry, फिर circuit breaker",
            hg: "Fake flaky Billing par backoff wala retry, phir circuit breaker"
          },
          src: "var now = 0;                                   // fake clock in seconds, moved by hand\n\nvar flaky = new FlakyBilling(failFirst: 2);\nConsole.WriteLine(\"retry: \" + Retry.Run(3, () => flaky.GetInvoice(\"Asha\")));\n\nvar sick = new FlakyBilling(failFirst: 3);\nvar breaker = new Breaker(failureLimit: 3, openForSeconds: 30, clock: () => now);\nfor (var n = 1; n <= 5; n++)\n{\n    if (n == 5) now = 31;                      // 31 seconds later\n    try { Console.WriteLine($\"call #{n}: \" + breaker.Call(() => sick.GetInvoice(\"Ravi\"))); }\n    catch (Exception ex) { Console.WriteLine($\"call #{n}: \" + ex.Message); }\n}\n\nclass FlakyBilling(int failFirst)\n{\n    private int _calls;\n\n    public string GetInvoice(string customer) =>\n        ++_calls <= failFirst ? throw new TimeoutException(\"billing timed out\") : \"invoice for \" + customer;\n}\n\nstatic class Retry\n{\n    public static string Run(int maxAttempts, Func<string> call)\n    {\n        for (var attempt = 1; ; attempt++)\n        {\n            try { return call(); }\n            catch (TimeoutException) when (attempt < maxAttempts)\n            {\n                var delayMs = 100 * (1 << (attempt - 1));   // 100, 200, 400... (jitter left out to keep output stable)\n                Console.WriteLine($\"  attempt {attempt} failed, would wait {delayMs} ms\");\n            }\n        }\n    }\n}\n\nclass Breaker(int failureLimit, int openForSeconds, Func<int> clock)\n{\n    private int _failures;\n    private int _openedAt = -1;\n\n    public string Call(Func<string> action)\n    {\n        if (_openedAt >= 0 && clock() - _openedAt < openForSeconds)\n            throw new InvalidOperationException(\"circuit open: call rejected fast\");\n        try { var result = action(); _failures = 0; _openedAt = -1; return result; }\n        catch (TimeoutException) { if (++_failures >= failureLimit) _openedAt = clock(); throw; }\n    }\n}",
          check: "run",
          expected: "  attempt 1 failed, would wait 100 ms\n  attempt 2 failed, would wait 200 ms\nretry: invoice for Asha\ncall #1: billing timed out\ncall #2: billing timed out\ncall #3: billing timed out\ncall #4: circuit open: call rejected fast\ncall #5: invoice for Ravi"
        }
      ]
    },
    {
      id: "tracing",
      depth: "short",
      title: {
        en: "Distributed tracing: follow one request",
        hi: "Distributed tracing: एक request का पीछा",
        hg: "Distributed tracing: ek request ka peecha"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1 to 7 spread one ticket across a gateway, Support, a broker and Billing. When something is slow or wrong, which hop is it? Tracing gives one request one id that every service carries, even through the outbox messages of lesson 4.",
          hi: "पाठ 1 से 7 ने एक ticket को gateway, Support, broker और Billing में फैला दिया। कुछ धीमा या ग़लत हो तो किस hop पर? Tracing एक request को एक id देता है जिसे हर service साथ रखती है, पाठ 4 के outbox messages के ज़रिए भी।",
          hg: "Lessons 1 se 7 ne ek ticket ko gateway, Support, broker aur Billing mein faila diya. Kuch dheema ya galat ho to kis hop par? Tracing ek request ko ek id deta hai jise har service saath rakhti hai, lesson 4 ke outbox messages ke zariye bhi."
        },
        what: {
          en: "<p>A <b>trace</b> is the story of one request across services. It is made of <b>spans</b> (one unit of work each). In .NET a span is an <code>Activity</code>, created from an <code>ActivitySource</code>.</p><p>The <b>W3C <code>traceparent</code></b> value carries the trace id and the parent span id. HTTP calls pass it in a header automatically. For a message, you put it in the message yourself (the outbox row can store it) and the consumer starts its span with that parent.</p>",
          hi: "<p><b>Trace</b> services के पार एक request की कहानी है। यह <b>spans</b> से बनता है (हर span एक काम का हिस्सा है)। .NET में span एक <code>Activity</code> है, जो <code>ActivitySource</code> से बनती है।</p><p><b>W3C <code>traceparent</code></b> value में trace id और parent span id रहती है। HTTP calls इसे header में अपने आप भेजती हैं। Message के लिए आप इसे खुद message में रखते हो (outbox row इसे store कर सकती है) और consumer अपना span उसी parent के साथ शुरू करता है।</p>",
          hg: "<p><b>Trace</b> services ke paar ek request ki kahani hai. Yeh <b>spans</b> se banta hai (har span ek kaam ka hissa hai). .NET mein span ek <code>Activity</code> hai, jo <code>ActivitySource</code> se banti hai.</p><p><b>W3C <code>traceparent</code></b> value mein trace id aur parent span id rehti hai. HTTP calls ise header mein apne aap bhejti hain. Message ke liye aap ise khud message mein rakhte ho (outbox row ise store kar sakti hai) aur consumer apna span usi parent ke saath shuru karta hai.</p>"
        },
        why: {
          en: "<p>Logs from five services are five separate piles. With one trace id you open one trace and see the whole path with the time spent in each hop. Put the same trace id in every log line (a <b>correlation id</b>) and you can search all services for one request.</p><p>Tag spans with business ids (ticket id), never with secrets or personal data.</p>",
          hi: "<p>पाँच services के logs पाँच अलग ढेर हैं। एक trace id से आप एक trace खोलकर पूरा रास्ता देखते हो, हर hop में लगे समय के साथ। हर log line में वही trace id रखो (<b>correlation id</b>) तो एक request के लिए सब services में search कर सकते हो।</p><p>Spans पर business ids (ticket id) के tags लगाओ, secrets या personal data के कभी नहीं।</p>",
          hg: "<p>Paanch services ke logs paanch alag dher hain. Ek trace id se aap ek trace kholkar poora raasta dekhte ho, har hop mein lage samay ke saath. Har log line mein wahi trace id rakho (<b>correlation id</b>) to ek request ke liye sab services mein search kar sakte ho.</p><p>Spans par business ids (ticket id) ke tags lagao, secrets ya personal data ke kabhi nahi.</p>"
        },
        analogy: {
          en: "<p>A courier tracking number. One number follows the parcel through every hub, and each hub adds its own \"scan\" with a time. If the parcel is late, you open the number and see which hub held it.</p>",
          hi: "<p>Courier का tracking number। एक number parcel के साथ हर hub से गुज़रता है, और हर hub अपना \"scan\" समय के साथ जोड़ता है। Parcel देर से आए तो number खोलकर देखते हो कि किस hub ने रोका।</p>",
          hg: "<p>Courier ka tracking number. Ek number parcel ke saath har hub se guzarta hai, aur har hub apna \"scan\" samay ke saath jodta hai. Parcel der se aaye to number kholkar dekhte ho ki kis hub ne roka.</p>"
        },
        lines: [
          {
            code: "var crm = new ActivitySource(\"Crm\");",
            note: {
              en: "One <code>ActivitySource</code> per component, created once and shared (in an app, usually a static field). Never one per request.",
              hi: "हर component के लिए एक <code>ActivitySource</code>, एक बार बनाकर share करो (app में आम तौर पर static field)। हर request पर नया नहीं।",
              hg: "Har component ke liye ek <code>ActivitySource</code>, ek baar banakar share karo (app mein aam taur par static field). Har request par naya nahi."
            }
          },
          {
            code: "return new TicketResolved(id, span?.Id);              // the W3C traceparent travels in the message",
            note: {
              en: "<code>span.Id</code> is the W3C <code>traceparent</code> text. Putting it in the message is what carries the trace across the broker.",
              hi: "<code>span.Id</code> W3C <code>traceparent</code> का text है। इसे message में रखना ही trace को broker के पार ले जाता है।",
              hg: "<code>span.Id</code> W3C <code>traceparent</code> ka text hai. Ise message mein rakhna hi trace ko broker ke paar le jaata hai."
            }
          },
          {
            code: "ActivityContext.TryParse(message.TraceParent, null, out parent);",
            note: {
              en: "Billing turns the text back into an <code>ActivityContext</code>, the parent it will continue from.",
              hi: "Billing उस text को वापस <code>ActivityContext</code> बनाता है, यानी वह parent जिससे वह आगे बढ़ेगा।",
              hg: "Billing us text ko waapas <code>ActivityContext</code> banata hai, yaani woh parent jisse woh aage badhega."
            }
          },
          {
            code: "using var span = source.StartActivity(\"ApplyCredit\", ActivityKind.Consumer, parent);",
            note: {
              en: "The consumer span starts with the producer as its parent, so both spans share one trace id.",
              hi: "Consumer span producer को parent बनाकर शुरू होता है, इसलिए दोनों spans की trace id एक ही रहती है।",
              hg: "Consumer span producer ko parent banakar shuru hota hai, isliye dono spans ki trace id ek hi rehti hai."
            }
          },
          {
            code: "new Billing(crm).Handle(message with { TraceParent = null });",
            note: {
              en: "A message with no traceparent starts a new, separate trace. This is what you see when a hop forgets to pass it on.",
              hi: "जिस message में traceparent नहीं, वह एक नया, अलग trace शुरू करता है। जब कोई hop इसे आगे देना भूल जाए तो यही दिखता है।",
              hg: "Jis message mein traceparent nahi, woh ek naya, alag trace shuru karta hai. Jab koi hop ise aage dena bhool jaaye to yahi dikhta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Forgetting to put the <code>traceparent</code> in the message. The trace breaks at the broker and you see two unrelated traces.</li><li>Putting secrets or personal data in tags. Use ids like the ticket number.</li></ul>",
          hi: "<ul><li>Message में <code>traceparent</code> रखना भूल जाना। Trace broker पर टूट जाता है और दो अलग traces दिखते हैं।</li><li>Tags में secrets या personal data डालना। Ticket number जैसी ids लो।</li></ul>",
          hg: "<ul><li>Message mein <code>traceparent</code> rakhna bhool jaana. Trace broker par toot jaata hai aur do alag traces dikhte hain.</li><li>Tags mein secrets ya personal data daalna. Ticket number jaisi ids lo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Add tracing to every service from day one. HTTP hops join one trace by themselves once OpenTelemetry is registered; for your own message hops copy the traceparent as here, unless your messaging SDK does it. Sample in production to control cost.</p>",
          hi: "<p>हर service में पहले दिन से tracing जोड़ो। OpenTelemetry register होते ही HTTP hops अपने आप एक trace में जुड़ जाते हैं; अपने message hops के लिए यहाँ की तरह traceparent copy करो, जब तक messaging SDK यह न करता हो। Production में sampling करो ताकि ख़र्च क़ाबू में रहे।</p>",
          hg: "<p>Har service mein pehle din se tracing jodo. OpenTelemetry register hote hi HTTP hops apne aap ek trace mein jud jaate hain; apne message hops ke liye yahan ki tarah traceparent copy karo, jab tak messaging SDK yeh na karta ho. Production mein sampling karo taaki kharcha kaabu mein rahe.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a second consumer so that both <b>Billing</b> and <b>Reports</b> handle the same message for ticket <b>502</b>. Print whether each joined the producer's trace.</p>",
            hi: "<p>एक और consumer जोड़ो ताकि ticket <b>502</b> के उसी message को <b>Billing</b> और <b>Reports</b>, दोनों सँभालें। Print करो कि हर एक producer के trace से जुड़ा या नहीं।</p>",
            hg: "<p>Ek aur consumer jodo taaki ticket <b>502</b> ke usi message ko <b>Billing</b> aur <b>Reports</b>, dono sambhalein. Print karo ki har ek producer ke trace se juda ya nahi.</p>"
          },
          hint: {
            en: "<p>Make the consumer a class that takes its name. Both read the same <code>TraceParent</code> from the message.</p>",
            hi: "<p>Consumer को ऐसी class बनाओ जो अपना नाम ले। दोनों message से वही <code>TraceParent</code> पढ़ते हैं।</p>",
            hg: "<p>Consumer ko aisi class banao jo apna naam le. Dono message se wahi <code>TraceParent</code> padhte hain.</p>"
          },
          solution: {
            caption: {
              en: "Solution: two consumers, one trace",
              hi: "हल: दो consumers, एक trace",
              hg: "Solution: do consumers, ek trace"
            },
            src: "using System.Diagnostics;\n\nusing var listener = new ActivityListener\n{\n    ShouldListenTo = source => source.Name == \"Crm\",\n    Sample = (ref ActivityCreationOptions<ActivityContext> _) => ActivitySamplingResult.AllData\n};\nActivitySource.AddActivityListener(listener);\n\nvar crm = new ActivitySource(\"Crm\");\nvar message = new Support(crm).Resolve(502);\nnew Consumer(crm, \"Billing\").Handle(message);\nnew Consumer(crm, \"Reports\").Handle(message);\n\nrecord TicketResolved(int TicketId, string? TraceParent);\n\nclass Support(ActivitySource source)\n{\n    public TicketResolved Resolve(int id)\n    {\n        using var span = source.StartActivity(\"ResolveTicket\", ActivityKind.Producer);\n        return new TicketResolved(id, span?.Id);\n    }\n}\n\nclass Consumer(ActivitySource source, string name)\n{\n    public void Handle(TicketResolved message)\n    {\n        ActivityContext.TryParse(message.TraceParent, null, out var parent);\n        using var span = source.StartActivity(name + \"Handler\", ActivityKind.Consumer, parent);\n        Console.WriteLine($\"{name}: joined the producer trace = {span!.TraceId == parent.TraceId}\");\n    }\n}",
            check: "run",
            expected: "Billing: joined the producer trace = True\nReports: joined the producer trace = True"
          }
        },
        quiz: {
          q: {
            en: "A message goes through a broker. What must you do to keep one trace across it?",
            hi: "एक message broker से गुज़रता है। एक trace बनाए रखने के लिए क्या करना होगा?",
            hg: "Ek message broker se guzarta hai. Ek trace banaye rakhne ke liye kya karna hoga?"
          },
          options: [
            {
              en: "Nothing; a broker always keeps the trace by itself",
              hi: "कुछ नहीं; broker trace अपने आप हमेशा बनाए रखता है",
              hg: "Kuch nahi; broker trace apne aap hamesha banaye rakhta hai"
            },
            {
              en: "Send the traceparent with the message and use it as the consumer span's parent",
              hi: "Message के साथ traceparent भेजो और उसे consumer span का parent बनाओ",
              hg: "Message ke saath traceparent bhejo aur use consumer span ka parent banao"
            },
            {
              en: "Put the customer's phone number in a span tag",
              hi: "Span tag में customer का phone number डालो",
              hg: "Span tag mein customer ka phone number daalo"
            },
            {
              en: "Create a new ActivitySource for every message",
              hi: "हर message के लिए नया ActivitySource बनाओ",
              hg: "Har message ke liye naya ActivitySource banao"
            }
          ],
          answer: 1,
          explain: {
            en: "HTTP clients pass the header by themselves, but your own message must carry the traceparent, and the consumer must start its span with it as parent. Some messaging SDKs do this for you.",
            hi: "HTTP clients header खुद भेजते हैं, पर आपके अपने message को traceparent साथ ले जाना होगा, और consumer अपना span उसे parent बनाकर शुरू करे। कुछ messaging SDKs यह आपके लिए कर देते हैं।",
            hg: "HTTP clients header khud bhejte hain, par aapke apne message ko traceparent saath le jaana hoga, aur consumer apna span use parent banakar shuru kare. Kuch messaging SDKs yeh aapke liye kar dete hain."
          }
        },
        recap: {
          en: "<ul><li>A trace is one request's story; spans are its steps (<code>Activity</code> in .NET).</li><li>HTTP passes <code>traceparent</code> by itself; for messages, store it in the message and use it as the parent.</li><li>Tag with business ids only, trace boundaries not tiny methods, and put the trace id in logs.</li></ul>",
          hi: "<ul><li>Trace एक request की कहानी है; spans उसके steps हैं (.NET में <code>Activity</code>)।</li><li>HTTP <code>traceparent</code> अपने आप भेजता है; messages के लिए उसे message में रखो और parent की तरह इस्तेमाल करो।</li><li>सिर्फ़ business ids के tags लगाओ, boundaries पर trace करो, छोटे methods पर नहीं, और trace id को logs में रखो।</li></ul>",
          hg: "<ul><li>Trace ek request ki kahani hai; spans uske steps hain (.NET mein <code>Activity</code>).</li><li>HTTP <code>traceparent</code> apne aap bhejta hai; messages ke liye use message mein rakho aur parent ki tarah istemaal karo.</li><li>Sirf business ids ke tags lagao, boundaries par trace karo, chhote methods par nahi, aur trace id ko logs mein rakho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A message carries the traceparent so Billing joins the same trace",
            hi: "Message traceparent ले जाता है ताकि Billing उसी trace में जुड़े",
            hg: "Message traceparent le jaata hai taaki Billing usi trace mein jude"
          },
          src: "using System.Diagnostics;\n\n// Turn tracing on (a real app registers OpenTelemetry here instead).\nusing var listener = new ActivityListener\n{\n    ShouldListenTo = source => source.Name == \"Crm\",\n    Sample = (ref ActivityCreationOptions<ActivityContext> _) => ActivitySamplingResult.AllData\n};\nActivitySource.AddActivityListener(listener);\n\nvar crm = new ActivitySource(\"Crm\");           // one per component, created once\nvar message = new Support(crm).Resolve(501);\nnew Billing(crm).Handle(message);\nnew Billing(crm).Handle(message with { TraceParent = null });\n\nrecord TicketResolved(int TicketId, string? TraceParent);\n\nclass Support(ActivitySource source)\n{\n    public TicketResolved Resolve(int id)\n    {\n        using var span = source.StartActivity(\"ResolveTicket\", ActivityKind.Producer);\n        span?.SetTag(\"ticket.id\", id);                        // business id, no personal data\n        return new TicketResolved(id, span?.Id);              // the W3C traceparent travels in the message\n    }\n}\n\nclass Billing(ActivitySource source)\n{\n    public void Handle(TicketResolved message)\n    {\n        ActivityContext parent = default;\n        if (message.TraceParent is not null)\n            ActivityContext.TryParse(message.TraceParent, null, out parent);\n\n        using var span = source.StartActivity(\"ApplyCredit\", ActivityKind.Consumer, parent);\n        var joined = message.TraceParent is not null && span!.TraceId == parent.TraceId;\n        Console.WriteLine($\"ticket {message.TicketId}: joined the producer trace = {joined}\");\n    }\n}",
          check: "run",
          expected: "ticket 501: joined the producer trace = True\nticket 501: joined the producer trace = False"
        }
      ]
    },
    {
      id: "distributed-monolith",
      depth: "detailed",
      title: {
        en: "What microservices cost, and the distributed monolith smell",
        hi: "Microservices की कीमत, और distributed monolith की बू",
        hg: "Microservices ki keemat, aur distributed monolith ki boo"
      },
      body: {
        en: "<p><b>What you get:</b> deploy one service without the others, scale only the hot one, let a team own its code and data, use a different tech where it really helps, and limit the blast radius of a bug.</p>\n<p><b>What you pay:</b> every call can fail or be slow; no single database transaction; data copies and eventual consistency; versioned contracts; one pipeline, one dashboard and one on-call per service; harder local debugging.</p>\n<p><b>Distributed monolith — the smell:</b> you have the costs of microservices but not the freedom. Signs:</p>\n<ul>\n<li>Services must be <b>deployed together</b> (a release train) or one change touches five repos.</li>\n<li>Several services share <b>one database</b> or the same tables.</li>\n<li>Long <b>synchronous call chains</b> (A calls B calls C): if one is down, all are down.</li>\n<li>Service borders follow technical layers (\"the data service\") instead of business capabilities (bounded contexts, Day 15).</li>\n<li>A shared \"common\" library full of domain types forces everybody to upgrade together.</li>\n</ul>\n<p><b>TL angle:</b> match services to <b>teams</b> (Conway's law, Day 15) and to business capabilities; give each service its own data; treat the <b>API/event contract</b> as a product (additive changes, version it, never break consumers silently); and build <b>observability before the first split</b> — you cannot debug what you cannot see.</p>\n<p><b>When to use:</b> several teams that need independent release rhythms, parts with very different scaling or availability needs, and a team that can run pipelines, monitoring and on-call. <b>When not:</b> a small team, a young product whose borders are still unclear, or no operations skills yet — a modular monolith (Day 15) is usually the safer start.</p>",
        hi: "<p><b>क्या मिलता है:</b> एक service को बाकी के बिना deploy करो, सिर्फ़ गरम वाली को scale करो, team अपने code और data की मालिक रहे, जहाँ सच में काम आए वहाँ अलग tech, और bug का असर छोटा रहे।</p>\n<p><b>क्या चुकाना पड़ता है:</b> हर call fail या धीमी हो सकती है; एक database transaction नहीं; data की कॉपियाँ और eventual consistency; versioned contracts; हर service की अपनी pipeline, dashboard और on-call; local debugging मुश्किल।</p>\n<p><b>Distributed monolith — smell:</b> microservices का खर्च है पर आज़ादी नहीं। निशानियाँ:</p>\n<ul>\n<li>Services को <b>साथ में deploy</b> करना पड़ता है (release train) या एक बदलाव पाँच repos छूता है।</li>\n<li>कई services <b>एक database</b> या वही tables share करती हैं।</li>\n<li>लंबी <b>synchronous call chains</b> (A, B को बुलाए, B, C को): एक down तो सब down।</li>\n<li>Service की सीमाएँ business capabilities की जगह technical layers (\"the data service\") पर हैं (bounded contexts, Day 15)।</li>\n<li>Domain types से भरी एक shared \"common\" library सबको साथ में upgrade करने पर मजबूर करती है।</li>\n</ul>\n<p><b>TL angle:</b> services को <b>teams</b> (Conway's law, Day 15) और business capabilities से मिलाओ; हर service को अपना data दो; <b>API/event contract</b> को product की तरह लो (additive बदलाव, version करो, consumers को चुपचाप मत तोड़ो); और पहले split से <b>पहले observability</b> बनाओ — जो दिखता नहीं उसे debug नहीं कर सकते।</p>\n<p><b>कब use करें:</b> कई teams जिन्हें अलग release rhythm चाहिए, ऐसे हिस्से जिनकी scaling या availability की ज़रूरत बहुत अलग है, और ऐसी team जो pipelines, monitoring और on-call चला सके। <b>कब नहीं:</b> छोटी team, नया product जिसकी सीमाएँ अभी साफ़ नहीं, या operations की skill अभी नहीं — modular monolith (Day 15) आम तौर पर safe शुरुआत है।</p>",
        hg: "<p><b>Kya milta hai:</b> ek service ko baaki ke bina deploy karo, sirf garam wali ko scale karo, team apne code aur data ki maalik rahe, jahan sach mein kaam aaye wahan alag tech, aur bug ka asar chhota rahe.</p>\n<p><b>Kya chukana padta hai:</b> har call fail ya dheemi ho sakti hai; ek database transaction nahi; data ki copies aur eventual consistency; versioned contracts; har service ki apni pipeline, dashboard aur on-call; local debugging mushkil.</p>\n<p><b>Distributed monolith — smell:</b> microservices ka kharcha hai par aazaadi nahi. Nishaaniyan:</p>\n<ul>\n<li>Services ko <b>saath mein deploy</b> karna padta hai (release train) ya ek badlaav paanch repos chhoota hai.</li>\n<li>Kai services <b>ek database</b> ya wahi tables share karti hain.</li>\n<li>Lambi <b>synchronous call chains</b> (A, B ko bulaye, B, C ko): ek down to sab down.</li>\n<li>Service ki seemayein business capabilities ki jagah technical layers (\"the data service\") par hain (bounded contexts, Day 15).</li>\n<li>Domain types se bhari ek shared \"common\" library sabko saath mein upgrade karne par majboor karti hai.</li>\n</ul>\n<p><b>TL angle:</b> services ko <b>teams</b> (Conway's law, Day 15) aur business capabilities se milao; har service ko apna data do; <b>API/event contract</b> ko product ki tarah lo (additive badlaav, version karo, consumers ko chupchaap mat todo); aur pehle split se <b>pehle observability</b> banao — jo dikhta nahi use debug nahi kar sakte.</p>\n<p><b>Kab use karein:</b> kai teams jinhe alag release rhythm chahiye, aise hisse jinki scaling ya availability ki zaroorat bahut alag hai, aur aisi team jo pipelines, monitoring aur on-call chala sake. <b>Kab nahi:</b> chhoti team, naya product jiski seemayein abhi saaf nahi, ya operations ki skill abhi nahi — modular monolith (Day 15) aam taur par safe shuruaat hai.</p>"
      }
    },
    {
      id: "saga-design",
      depth: "detailed",
      title: {
        en: "Saga design: choreography, orchestration, durable state",
        hi: "Saga design: choreography, orchestration और durable state",
        hg: "Saga design: choreography, orchestration aur durable state"
      },
      body: {
        en: "<ul><li><b>Choreography</b>: no boss. Each service reacts to events and publishes the next one (<code>OrderPlaced</code> → payment service → <code>PaymentTaken</code> → stock service ...). Few moving parts and loose coupling, but the flow is hidden across services and hard to see or change.</li><li><b>Orchestration</b>: a coordinator (saga orchestrator / process manager) sends commands and tracks the state. The flow is in one place and easy to read, and compensation is explicit; the cost is one more component and some coupling to it.</li></ul>\n<ul><li>In a real system the orchestrator is <b>durable</b>: it stores its state after each step (a table, or a workflow engine such as Durable Functions or a saga library) and talks to services by <b>messages</b> (through an outbox), so a restart resumes instead of forgetting. Every step and compensation must be <b>idempotent</b>, because messages repeat.</li></ul>\n<p><b>Pivot transaction:</b> sort the steps into three kinds. <b>Compensatable</b> steps come first (charging a card: it can be refunded). The <b>pivot</b> is the point of no return: once it commits, the saga must finish. <b>Retriable</b> steps come after the pivot; they cannot be undone, so they are retried until they succeed (the welcome SMS). Show the user a clear state (<code>Pending</code>, <code>Confirmed</code>, <code>Cancelled</code>), because the result arrives a little later.</p>\n<p><b>Choreography vs orchestration — which one?</b> Choreography suits two or three services with a simple chain. Once there are more steps, branches or timeouts, the hidden flow is painful — use an orchestrator.</p>",
        hi: "<ul><li><b>Choreography</b>: कोई boss नहीं। हर service events पर react करती है और अगला event publish करती है (<code>OrderPlaced</code> → payment service → <code>PaymentTaken</code> → stock service ...)। कम हिस्से और loose coupling, पर flow services में बिखरा रहता है और देखना या बदलना मुश्किल।</li><li><b>Orchestration</b>: एक coordinator (saga orchestrator / process manager) commands भेजता है और state रखता है। Flow एक जगह है और पढ़ना आसान, compensation साफ़; कीमत है एक और component और उससे कुछ coupling।</li></ul>\n<ul><li>असली system में orchestrator <b>durable</b> होता है: हर step के बाद अपनी state store करता है (table, या Durable Functions जैसा workflow engine या saga library) और services से <b>messages</b> (outbox से) बात करता है, ताकि restart पर वह भूले नहीं, आगे बढ़े। हर step और compensation <b>idempotent</b> होनी चाहिए, क्योंकि messages दोहराते हैं।</li></ul>\n<p><b>Pivot transaction:</b> steps को तीन तरह में बाँटो। <b>Compensatable</b> steps पहले आते हैं (card charge करना: उसका refund हो सकता है)। <b>Pivot</b> वह step है जिसके बाद पीछे नहीं लौट सकते: वह commit हो गया तो saga को पूरा होना ही है। <b>Retriable</b> steps pivot के बाद आते हैं; इन्हें पलटा नहीं जा सकता, इसलिए सफल होने तक retry करते हैं (welcome SMS)। User को साफ़ state दिखाओ (<code>Pending</code>, <code>Confirmed</code>, <code>Cancelled</code>), क्योंकि नतीजा थोड़ी देर बाद आता है।</p>\n<p><b>Choreography बनाम orchestration — कौन-सी?</b> दो-तीन services की सीधी chain के लिए choreography ठीक है। Steps, branches या timeouts बढ़ें तो छुपा हुआ flow तकलीफ़ देता है — orchestrator लो।</p>",
        hg: "<ul><li><b>Choreography</b>: koi boss nahi. Har service events par react karti hai aur agla event publish karti hai (<code>OrderPlaced</code> → payment service → <code>PaymentTaken</code> → stock service ...). Kam hisse aur loose coupling, par flow services mein bikhra rehta hai aur dekhna ya badalna mushkil.</li><li><b>Orchestration</b>: ek coordinator (saga orchestrator / process manager) commands bhejta hai aur state rakhta hai. Flow ek jagah hai aur padhna aasaan, compensation saaf; keemat hai ek aur component aur usse kuch coupling.</li></ul>\n<ul><li>Asli system mein orchestrator <b>durable</b> hota hai: har step ke baad apni state store karta hai (table, ya Durable Functions jaisa workflow engine ya saga library) aur services se <b>messages</b> (outbox se) baat karta hai, taaki restart par woh bhoole nahi, aage badhe. Har step aur compensation <b>idempotent</b> honi chahiye, kyunki messages dohrate hain.</li></ul>\n<p><b>Pivot transaction:</b> steps ko teen tarah mein baanto. <b>Compensatable</b> steps pehle aate hain (card charge karna: uska refund ho sakta hai). <b>Pivot</b> woh step hai jiske baad peeche nahi laut sakte: woh commit ho gaya to saga ko poora hona hi hai. <b>Retriable</b> steps pivot ke baad aate hain; inhe palta nahi ja sakta, isliye safal hone tak retry karte hain (welcome SMS). User ko saaf state dikhao (<code>Pending</code>, <code>Confirmed</code>, <code>Cancelled</code>), kyonki nateeja thodi der baad aata hai.</p>\n<p><b>Choreography vs orchestration — kaun-si?</b> do-teen services ki seedhi chain ke liye choreography theek hai. Steps, branches ya timeouts badhein to chhupa hua flow takleef deta hai — orchestrator lo.</p>"
      }
    },
    {
      id: "data-ownership",
      depth: "detailed",
      title: {
        en: "Data ownership and reading across services",
        hi: "Data का मालिक कौन, और services के पार पढ़ना",
        hg: "Data ka maalik kaun, aur services ke paar padhna"
      },
      body: {
        en: "<p><b>Data ownership:</b> <b>database per service</b>. Others get the data only through the owner's API or events — no reading another service's tables. A shared database is a common cause of the distributed monolith.</p>\n<ul>\n<li><b>API composition</b>: the gateway or a composer calls several services and merges the answers — fine for small queries.</li>\n<li><b>CQRS read model</b> (Day 11): a service subscribes to events and keeps a local, query-shaped copy for fast joins and reports. It is eventually consistent.</li>\n</ul>",
        hi: "<p><b>Data ownership:</b> <b>हर service का अपना database</b>। दूसरे data सिर्फ़ मालिक की API या events से लेते हैं — किसी और service की tables नहीं पढ़ते। Shared database distributed monolith की एक आम वजह है।</p>\n<ul>\n<li><b>API composition</b>: gateway या composer कई services को call करके जवाब जोड़ता है — छोटे queries के लिए ठीक।</li>\n<li><b>CQRS read model</b> (Day 11): एक service events subscribe करके अपने पास query के आकार की local कॉपी रखती है, तेज़ joins और reports के लिए। यह eventually consistent है।</li>\n</ul>",
        hg: "<p><b>Data ownership:</b> <b>har service ka apna database</b>. Doosre data sirf maalik ki API ya events se lete hain — kisi aur service ki tables nahi padhte. Shared database distributed monolith ki ek aam wajah hai.</p>\n<ul>\n<li><b>API composition</b>: gateway ya composer kai services ko call karke jawaab jodta hai — chhote queries ke liye theek.</li>\n<li><b>CQRS read model</b> (Day 11): ek service events subscribe karke apne paas query ke aakar ki local copy rakhti hai, tez joins aur reports ke liye. Yeh eventually consistent hai.</li>\n</ul>"
      }
    },
    {
      id: "outbox-ef-core",
      depth: "detailed",
      title: {
        en: "Outbox and Inbox with EF Core",
        hi: "EF Core के साथ Outbox और Inbox",
        hg: "EF Core ke saath Outbox aur Inbox"
      },
      body: {
        en: "<p>The code below is the real shape of lessons 4 and 5 with EF Core. The order and its <code>OutboxMessage</code> are added to the same <code>DbContext</code> and saved by one <code>SaveChangesAsync</code>, which EF Core runs in one database transaction.</p>\n<ul><li>The row carries a stable <code>MessageId</code> (consumers dedupe on it) and the current <code>traceparent</code>, so the trace continues in the consumer.</li><li>Run <b>one</b> relay (or lock the rows) if per-aggregate order matters; clean up old sent rows regularly.</li></ul>\n<p><b>Inbox side (consumer):</b> the consumer inserts the <code>MessageId</code> into an inbox table <b>in the same transaction</b> as its effect. The key is unique, so a second parallel delivery fails on the key and is retried and then skipped.</p>\n<p>Instead of a polling relay, a <b>CDC</b> (change data capture) tool can read new outbox rows from the database log and publish them.</p>",
        hi: "<p>नीचे का code EF Core के साथ पाठ 4 और 5 का असली रूप है। Order और उसका <code>OutboxMessage</code> एक ही <code>DbContext</code> में add होते हैं और एक <code>SaveChangesAsync</code> से save होते हैं, जिसे EF Core एक database transaction में चलाता है।</p>\n<ul><li>Row में पक्का <code>MessageId</code> (consumers इसी से dedupe करते हैं) और मौजूदा <code>traceparent</code> रहता है, ताकि trace consumer में आगे चले।</li><li>अगर per-aggregate order मायने रखता है तो <b>एक</b> relay चलाओ (या rows lock करो); पुराने sent rows regularly साफ़ करो।</li></ul>\n<p><b>Inbox की तरफ़ (consumer):</b> consumer <code>MessageId</code> को अपने effect की <b>उसी transaction</b> में inbox table में insert करता है। Key unique है, इसलिए दूसरी parallel delivery key पर fail होती है, retry होती है और फिर skip हो जाती है।</p>\n<p>Polling वाले relay की जगह कोई <b>CDC</b> (change data capture) tool database के log से नई outbox rows पढ़कर publish कर सकता है।</p>",
        hg: "<p>Neeche ka code EF Core ke saath lesson 4 aur 5 ka asli roop hai. Order aur uska <code>OutboxMessage</code> ek hi <code>DbContext</code> mein add hote hain aur ek <code>SaveChangesAsync</code> se save hote hain, jise EF Core ek database transaction mein chalata hai.</p>\n<ul><li>Row mein pakka <code>MessageId</code> (consumers isi se dedupe karte hain) aur maujooda <code>traceparent</code> rehta hai, taaki trace consumer mein aage chale.</li><li>Agar per-aggregate order maayne rakhta hai to <b>ek</b> relay chalao (ya rows lock karo); purane sent rows regularly saaf karo.</li></ul>\n<p><b>Inbox ki taraf (consumer):</b> consumer <code>MessageId</code> ko apne effect ki <b>usi transaction</b> mein inbox table mein insert karta hai. Key unique hai, isliye doosri parallel delivery key par fail hoti hai, retry hoti hai aur phir skip ho jaati hai.</p>\n<p>Polling wale relay ki jagah koi <b>CDC</b> (change data capture) tool database ke log se nayi outbox rows padhkar publish kar sakta hai.</p>"
      },
      code: [
        {
          caption: {
            en: "Outbox written in the same SaveChanges, relay in id order, inbox row in the same transaction as the effect",
            hi: "Outbox उसी SaveChanges में, relay id के order में, inbox row effect की उसी transaction में",
            hg: "Outbox usi SaveChanges mein, relay id ke order mein, inbox row effect ki usi transaction mein"
          },
          check: "compile",
          packages: [
            "Microsoft.EntityFrameworkCore"
          ],
          src: "using System.Diagnostics;\nusing System.Text.Json;\nusing Microsoft.EntityFrameworkCore;\n\npublic class Order\n{\n    public Guid Id { get; set; }\n    public string Customer { get; set; } = \"\";\n    public string Status { get; set; } = \"Placed\";\n}\n\npublic class OutboxMessage\n{\n    public long Id { get; set; }                 // increasing: the relay publishes in this order\n    public Guid MessageId { get; set; }          // stable id: consumers dedupe on it\n    public string Type { get; set; } = \"\";\n    public string Payload { get; set; } = \"\";\n    public string? TraceParent { get; set; }     // lets the consumer continue the trace\n    public DateTimeOffset? SentAt { get; set; }\n}\n\npublic class InboxMessage\n{\n    public Guid MessageId { get; set; }          // primary key = unique\n    public DateTimeOffset HandledAt { get; set; }\n}\n\npublic class ShopDbContext(DbContextOptions<ShopDbContext> options) : DbContext(options)\n{\n    public DbSet<Order> Orders => Set<Order>();\n    public DbSet<OutboxMessage> Outbox => Set<OutboxMessage>();\n    public DbSet<InboxMessage> Inbox => Set<InboxMessage>();\n\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n        => modelBuilder.Entity<InboxMessage>().HasKey(i => i.MessageId);\n}\n\npublic class PlaceOrderHandler(ShopDbContext db)\n{\n    public async Task<Guid> HandleAsync(string customer, CancellationToken ct)\n    {\n        var order = new Order { Id = Guid.NewGuid(), Customer = customer };\n        db.Orders.Add(order);\n        db.Outbox.Add(new OutboxMessage\n        {\n            MessageId = Guid.NewGuid(),\n            Type = \"OrderPlaced\",\n            Payload = JsonSerializer.Serialize(new { order.Id, order.Customer }),\n            TraceParent = Activity.Current?.Id\n        });\n        await db.SaveChangesAsync(ct);           // one transaction: order + outbox row\n        return order.Id;\n    }\n}\n\npublic interface IMessagePublisher\n{\n    Task PublishAsync(OutboxMessage message, CancellationToken ct);\n}\n\n// Run ONE relay (or lock rows) when order matters. A crash after PublishAsync means a duplicate later.\npublic class OutboxRelay(ShopDbContext db, IMessagePublisher publisher, TimeProvider clock)\n{\n    public async Task RunOnceAsync(CancellationToken ct)\n    {\n        var batch = await db.Outbox.Where(m => m.SentAt == null).OrderBy(m => m.Id).Take(100).ToListAsync(ct);\n        foreach (var message in batch)\n        {\n            await publisher.PublishAsync(message, ct);\n            message.SentAt = clock.GetUtcNow();\n            await db.SaveChangesAsync(ct);\n        }\n    }\n}\n\npublic class PaymentTakenConsumer(ShopDbContext db, TimeProvider clock)\n{\n    public async Task HandleAsync(Guid messageId, Guid orderId, CancellationToken ct)\n    {\n        if (await db.Inbox.AnyAsync(i => i.MessageId == messageId, ct)) return;   // duplicate: skip\n\n        var order = await db.Orders.SingleAsync(o => o.Id == orderId, ct);\n        order.Status = \"Paid\";                                                    // idempotent: SET, not +=\n        db.Inbox.Add(new InboxMessage { MessageId = messageId, HandledAt = clock.GetUtcNow() });\n        await db.SaveChangesAsync(ct);   // effect + inbox row commit together; a parallel duplicate hits the key and is retried\n    }\n}"
        }
      ]
    },
    {
      id: "polly-pipeline",
      depth: "detailed",
      title: {
        en: "Resilience in .NET: Polly v8 pipeline and HttpClient handlers",
        hi: ".NET में resilience: Polly v8 pipeline और HttpClient handlers",
        hg: ".NET mein resilience: Polly v8 pipeline aur HttpClient handlers"
      },
      body: {
        en: "<ul><li><b>Bulkhead</b>: isolate resources (separate pool/limit per dependency) so one slow dependency cannot use up all threads or connections.</li><li><b>Fallback</b>: a degraded answer (cached or default) when the call fails.</li></ul>\n<p><b>Tools:</b> <b>Polly v8</b> (<code>ResiliencePipelineBuilder</code>, package <code>Polly.Core</code>; <code>Polly.RateLimiting</code> adds <code>AddConcurrencyLimiter</code>) and, for HttpClient, <code>Microsoft.Extensions.Http.Resilience</code>: <code>AddStandardResilienceHandler()</code> when the Day 13 defaults fit, or <code>AddResilienceHandler</code> to build your own pipeline for one downstream.</p><p><b>Order in a pipeline (outer to inner):</b> concurrency limit (bulkhead) &rarr; retry &rarr; circuit breaker &rarr; per-attempt timeout. The retry wraps the breaker, so the breaker counts every attempt, and each attempt has its own short timeout. Add a total timeout around everything if the caller has a deadline.</p><p><b>Polly's breaker is ratio based</b>, not \"N failures in a row\" like the lesson model. It opens when, inside <code>SamplingDuration</code>, at least <code>MinimumThroughput</code> calls ran and the failure share reached <code>FailureRatio</code>. Defaults: ratio 0.1, throughput 100, sampling 30 s, break 5 s. While open it throws <code>BrokenCircuitException</code>; after <code>BreakDuration</code> it is half-open and lets one trial call through.</p><ul><li>The HTTP retry honours a <code>Retry-After</code> header by default.</li><li>Pick numbers from measured latency, not guesses, and log every retry and breaker state change.</li><li>Do not set a long timeout \"just in case\": it holds threads and connections while the caller waits.</li></ul>",
        hi: "<ul><li><b>Bulkhead</b>: resources अलग रखो (हर dependency का अपना pool/limit) ताकि एक धीमी dependency सारे threads या connections न खा जाए।</li><li><b>Fallback</b>: call fail होने पर degraded जवाब (cached या default)।</li></ul>\n<p><b>Tools:</b> <b>Polly v8</b> (<code>ResiliencePipelineBuilder</code>, package <code>Polly.Core</code>; <code>Polly.RateLimiting</code> से <code>AddConcurrencyLimiter</code> मिलता है) और HttpClient के लिए <code>Microsoft.Extensions.Http.Resilience</code>: Day 13 के defaults ठीक हों तो <code>AddStandardResilienceHandler()</code>, वरना एक downstream के लिए अपनी pipeline बनाने को <code>AddResilienceHandler</code>।</p><p><b>Pipeline में order (बाहर से अंदर):</b> concurrency limit (bulkhead) &rarr; retry &rarr; circuit breaker &rarr; हर attempt का timeout। Retry, breaker को लपेटता है, इसलिए breaker हर attempt गिनता है, और हर attempt का अपना छोटा timeout होता है। Caller की deadline हो तो सबके बाहर एक total timeout लगाओ।</p><p><b>Polly का breaker ratio पर चलता है</b>, पाठ के model की तरह \"लगातार N failures\" पर नहीं। वह तब खुलता है जब <code>SamplingDuration</code> के अंदर कम से कम <code>MinimumThroughput</code> calls चलीं और failures का हिस्सा <code>FailureRatio</code> तक पहुँचा। Defaults: ratio 0.1, throughput 100, sampling 30 s, break 5 s। Open रहते वह <code>BrokenCircuitException</code> फेंकता है; <code>BreakDuration</code> के बाद half-open होकर एक trial call जाने देता है।</p><ul><li>HTTP retry default रूप से <code>Retry-After</code> header मानता है।</li><li>Numbers अंदाज़े से नहीं, मापी गई latency से चुनो, और हर retry और breaker की state बदलने को log करो।</li><li>\"Just in case\" लंबा timeout मत रखो: caller के इंतज़ार में वह threads और connections पकड़े रहता है।</li></ul>",
        hg: "<ul><li><b>Bulkhead</b>: resources alag rakho (har dependency ka apna pool/limit) taaki ek dheemi dependency saare threads ya connections na kha jaaye.</li><li><b>Fallback</b>: call fail hone par degraded jawaab (cached ya default).</li></ul>\n<p><b>Tools:</b> <b>Polly v8</b> (<code>ResiliencePipelineBuilder</code>, package <code>Polly.Core</code>; <code>Polly.RateLimiting</code> se <code>AddConcurrencyLimiter</code> milta hai) aur HttpClient ke liye <code>Microsoft.Extensions.Http.Resilience</code>: Day 13 ke defaults theek hon to <code>AddStandardResilienceHandler()</code>, warna ek downstream ke liye apni pipeline banane ko <code>AddResilienceHandler</code>.</p><p><b>Pipeline mein order (bahar se andar):</b> concurrency limit (bulkhead) &rarr; retry &rarr; circuit breaker &rarr; har attempt ka timeout. Retry, breaker ko lapet-ta hai, isliye breaker har attempt ginta hai, aur har attempt ka apna chhota timeout hota hai. Caller ki deadline ho to sabke bahar ek total timeout lagao.</p><p><b>Polly ka breaker ratio par chalta hai</b>, lesson ke model ki tarah \"lagaatar N failures\" par nahi. Woh tab khulta hai jab <code>SamplingDuration</code> ke andar kam se kam <code>MinimumThroughput</code> calls chalin aur failures ka hissa <code>FailureRatio</code> tak pahuncha. Defaults: ratio 0.1, throughput 100, sampling 30 s, break 5 s. Open rehte woh <code>BrokenCircuitException</code> phenkta hai; <code>BreakDuration</code> ke baad half-open hokar ek trial call jaane deta hai.</p><ul><li>HTTP retry default roop se <code>Retry-After</code> header maanta hai.</li><li>Numbers andaaze se nahi, maapi gayi latency se chuno, aur har retry aur breaker ki state badalne ko log karo.</li><li>\"Just in case\" lamba timeout mat rakho: caller ke intezaar mein woh threads aur connections pakde rehta hai.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "Polly v8 pipeline: bulkhead, retry with backoff + jitter (idempotent GET only), breaker, per-attempt timeout",
            hi: "Polly v8 pipeline: bulkhead, backoff + jitter वाली retry (सिर्फ़ idempotent GET), breaker, per-attempt timeout",
            hg: "Polly v8 pipeline: bulkhead, backoff + jitter wali retry (sirf idempotent GET), breaker, per-attempt timeout"
          },
          check: "compile",
          packages: [
            "Microsoft.Extensions.Http.Resilience"
          ],
          src: "using Polly;\nusing Polly.CircuitBreaker;\nusing Polly.Retry;\nusing Polly.Timeout;\n\npublic class CatalogClient(HttpClient http)\n{\n    private readonly ResiliencePipeline _pipeline = new ResiliencePipelineBuilder()\n        .AddConcurrencyLimiter(permitLimit: 20, queueLimit: 10)          // bulkhead\n        .AddRetry(new RetryStrategyOptions\n        {\n            ShouldHandle = new PredicateBuilder().Handle<HttpRequestException>().Handle<TimeoutRejectedException>(),\n            MaxRetryAttempts = 3,\n            BackoffType = DelayBackoffType.Exponential,\n            UseJitter = true,\n            Delay = TimeSpan.FromMilliseconds(200)\n        })\n        .AddCircuitBreaker(new CircuitBreakerStrategyOptions\n        {\n            FailureRatio = 0.5,\n            MinimumThroughput = 10,\n            SamplingDuration = TimeSpan.FromSeconds(30),\n            BreakDuration = TimeSpan.FromSeconds(30)\n        })\n        .AddTimeout(TimeSpan.FromSeconds(2))                               // per attempt\n        .Build();\n\n    // GET is idempotent, so retrying it is safe.\n    public ValueTask<string> GetProductAsync(int id, CancellationToken ct) =>\n        _pipeline.ExecuteAsync(async token => await http.GetStringAsync($\"/products/{id}\", token), ct);\n}"
        },
        {
          caption: {
            en: "AddResilienceHandler for one downstream — retries switched off for unsafe methods like POST",
            hi: "एक downstream के लिए AddResilienceHandler — POST जैसे unsafe methods पर retries बंद",
            hg: "Ek downstream ke liye AddResilienceHandler — POST jaise unsafe methods par retries band"
          },
          check: "compile",
          packages: [
            "Microsoft.Extensions.Http.Resilience"
          ],
          src: "using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Http.Resilience;\nusing Polly;\n\npublic static class PaymentsClientSetup\n{\n    public static IServiceCollection AddPaymentsClient(this IServiceCollection services)\n    {\n        services.AddHttpClient(\"payments\", c => c.BaseAddress = new Uri(\"https://payments.internal/\"))\n            .AddResilienceHandler(\"payments\", pipeline =>\n            {\n                var retry = new HttpRetryStrategyOptions\n                {\n                    MaxRetryAttempts = 3,\n                    BackoffType = DelayBackoffType.Exponential,\n                    UseJitter = true,\n                    Delay = TimeSpan.FromMilliseconds(200)\n                };\n                retry.DisableForUnsafeHttpMethods();       // POST is not retried here; retry it only when it carries an idempotency key (Day 13)\n                pipeline.AddRetry(retry);\n\n                pipeline.AddCircuitBreaker(new HttpCircuitBreakerStrategyOptions\n                {\n                    SamplingDuration = TimeSpan.FromSeconds(30),\n                    BreakDuration = TimeSpan.FromSeconds(30)\n                });\n\n                pipeline.AddTimeout(TimeSpan.FromSeconds(2));   // per attempt\n            });\n        return services;\n    }\n}"
        }
      ]
    },
    {
      id: "yarp-gateway",
      depth: "detailed",
      title: {
        en: "YARP as a gateway: routes and clusters",
        hi: "Gateway के रूप में YARP: routes और clusters",
        hg: "Gateway ke roop mein YARP: routes aur clusters"
      },
      body: {
        en: "<p><b>YARP</b> (NuGet <code>Yarp.ReverseProxy</code>) runs inside an ASP.NET Core app: <code>AddReverseProxy().LoadFromConfig(...)</code> reads the config and <code>MapReverseProxy()</code> serves it (the Program.cs in the next section). A <b>route</b> matches requests (path, host, headers) and points to a <b>cluster</b>; a cluster lists one or more <b>destinations</b> and load-balances across them.</p><ul><li><code>{**catch-all}</code> captures the rest of the path. The path is forwarded unchanged unless you add a transform such as <code>PathRemovePrefix</code>.</li><li>A route can name an <code>AuthorizationPolicy</code> and a <code>RateLimiterPolicy</code>, so lesson 2's token check and limits use the normal ASP.NET Core middleware.</li><li>Config from <code>appsettings.json</code> reloads when the file changes, without a restart.</li><li>Managed gateways such as Azure API Management are on Day 20.</li></ul>",
        hi: "<p><b>YARP</b> (NuGet <code>Yarp.ReverseProxy</code>) एक ASP.NET Core app के अंदर चलता है: <code>AddReverseProxy().LoadFromConfig(...)</code> config पढ़ता है और <code>MapReverseProxy()</code> उसे चलाता है (अगले section का Program.cs)। <b>Route</b> requests को match करता है (path, host, headers) और एक <b>cluster</b> की तरफ़ भेजता है; cluster में एक या ज़्यादा <b>destinations</b> होते हैं और load उनमें बँटता है।</p><ul><li><code>{**catch-all}</code> path का बाक़ी हिस्सा पकड़ता है। Path वैसा ही आगे जाता है, जब तक आप <code>PathRemovePrefix</code> जैसा transform न जोड़ो।</li><li>Route में <code>AuthorizationPolicy</code> और <code>RateLimiterPolicy</code> दे सकते हो, तो पाठ 2 का token check और limits आम ASP.NET Core middleware से चलते हैं।</li><li><code>appsettings.json</code> बदलने पर config बिना restart के फिर से load होता है।</li><li>Azure API Management जैसे managed gateways Day 20 में हैं।</li></ul>",
        hg: "<p><b>YARP</b> (NuGet <code>Yarp.ReverseProxy</code>) ek ASP.NET Core app ke andar chalta hai: <code>AddReverseProxy().LoadFromConfig(...)</code> config padhta hai aur <code>MapReverseProxy()</code> use chalata hai (agle section ka Program.cs). <b>Route</b> requests ko match karta hai (path, host, headers) aur ek <b>cluster</b> ki taraf bhejta hai; cluster mein ek ya zyaada <b>destinations</b> hote hain aur load unmein bantta hai.</p><ul><li><code>{**catch-all}</code> path ka baaki hissa pakadta hai. Path waisa hi aage jaata hai, jab tak aap <code>PathRemovePrefix</code> jaisa transform na jodo.</li><li>Route mein <code>AuthorizationPolicy</code> aur <code>RateLimiterPolicy</code> de sakte ho, to lesson 2 ka token check aur limits aam ASP.NET Core middleware se chalte hain.</li><li><code>appsettings.json</code> badalne par config bina restart ke phir se load hota hai.</li><li>Azure API Management jaise managed gateways Day 20 mein hain.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "YARP routes and clusters (appsettings.json) — a thin gateway",
            hi: "YARP routes और clusters (appsettings.json) — पतला gateway",
            hg: "YARP routes aur clusters (appsettings.json) — patla gateway"
          },
          lang: "json",
          check: "none",
          src: "{\n  \"ReverseProxy\": {\n    \"Routes\": {\n      \"orders-route\": {\n        \"ClusterId\": \"orders\",\n        \"Match\": { \"Path\": \"/api/orders/{**catch-all}\" }\n      },\n      \"catalog-route\": {\n        \"ClusterId\": \"catalog\",\n        \"Match\": { \"Path\": \"/api/catalog/{**catch-all}\" }\n      }\n    },\n    \"Clusters\": {\n      \"orders\":  { \"Destinations\": { \"d1\": { \"Address\": \"https://orders.internal/\" } } },\n      \"catalog\": { \"Destinations\": { \"d1\": { \"Address\": \"https://catalog.internal/\" } } }\n    }\n  }\n}"
        }
      ]
    },
    {
      id: "observability-otel",
      depth: "detailed",
      title: {
        en: "Observability: three pillars and OpenTelemetry setup",
        hi: "Observability: तीन pillars और OpenTelemetry setup",
        hg: "Observability: teen pillars aur OpenTelemetry setup"
      },
      body: {
        en: "<p><b>Observability — three pillars:</b> <b>logs</b> (what happened, structured), <b>metrics</b> (numbers over time: rate, errors, latency), <b>traces</b> (one request's path across services).</p>\n<ul><li><b>OpenTelemetry</b> is the vendor-neutral standard. In .NET, traces use <code>System.Diagnostics.ActivitySource</code> and <code>Activity</code>; ASP.NET Core and HttpClient create activities automatically once OpenTelemetry instrumentation is added.</li></ul>\n<p>The program below wires the gateway with YARP plus OpenTelemetry tracing and metrics, exported with OTLP. Two details trip people up:</p><ul><li><code>AddSource(\"Shop.Orders\")</code> must match your <code>ActivitySource</code> name (wildcards such as <code>\"Shop.*\"</code> work). If it does not, your own spans are silently dropped.</li><li>The <code>traceparent</code> value has a fixed W3C shape: <code>00-&lt;32 hex trace id&gt;-&lt;16 hex parent span id&gt;-&lt;2 hex flags&gt;</code>, for example <code>00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01</code>. Flag <code>01</code> means sampled.</li></ul>",
        hi: "<p><b>Observability — three pillars:</b> <b>logs</b> (क्या हुआ, structured), <b>metrics</b> (समय के साथ आँकड़े: rate, errors, latency), <b>traces</b> (एक request का services में रास्ता)।</p>\n<ul><li><b>OpenTelemetry</b> vendor-neutral standard है। .NET में traces <code>System.Diagnostics.ActivitySource</code> और <code>Activity</code> से बनते हैं; OpenTelemetry instrumentation जोड़ते ही ASP.NET Core और HttpClient अपने आप activities बनाते हैं।</li></ul>\n<p>नीचे का program gateway को YARP और OpenTelemetry की tracing और metrics के साथ जोड़ता है, और OTLP से export करता है। दो बातों पर लोग अटकते हैं:</p><ul><li><code>AddSource(\"Shop.Orders\")</code> आपके <code>ActivitySource</code> के नाम से match होना चाहिए (<code>\"Shop.*\"</code> जैसे wildcards चलते हैं)। Match न हो तो आपके अपने spans चुपचाप छूट जाते हैं।</li><li><code>traceparent</code> value का W3C में तय रूप है: <code>00-&lt;32 hex trace id&gt;-&lt;16 hex parent span id&gt;-&lt;2 hex flags&gt;</code>, जैसे <code>00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01</code>। Flag <code>01</code> का मतलब sampled है।</li></ul>",
        hg: "<p><b>Observability — three pillars:</b> <b>logs</b> (kya hua, structured), <b>metrics</b> (samay ke saath aankde: rate, errors, latency), <b>traces</b> (ek request ka services mein raasta).</p>\n<ul><li><b>OpenTelemetry</b> vendor-neutral standard hai. .NET mein traces <code>System.Diagnostics.ActivitySource</code> aur <code>Activity</code> se bante hain; OpenTelemetry instrumentation jodte hi ASP.NET Core aur HttpClient apne aap activities banate hain.</li></ul>\n<p>Neeche ka program gateway ko YARP aur OpenTelemetry ki tracing aur metrics ke saath jodta hai, aur OTLP se export karta hai. Do baaton par log atakte hain:</p><ul><li><code>AddSource(\"Shop.Orders\")</code> aapke <code>ActivitySource</code> ke naam se match hona chahiye (<code>\"Shop.*\"</code> jaise wildcards chalte hain). Match na ho to aapke apne spans chupchaap chhoot jaate hain.</li><li><code>traceparent</code> value ka W3C mein tay roop hai: <code>00-&lt;32 hex trace id&gt;-&lt;16 hex parent span id&gt;-&lt;2 hex flags&gt;</code>, jaise <code>00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01</code>. Flag <code>01</code> ka matlab sampled hai.</li></ul>"
      },
      code: [
        {
          caption: {
            en: "Gateway Program.cs and OpenTelemetry setup (packages not run-checked here: Yarp.ReverseProxy, OpenTelemetry.*)",
            hi: "Gateway Program.cs और OpenTelemetry setup (packages यहाँ run-check नहीं हुए: Yarp.ReverseProxy, OpenTelemetry.*)",
            hg: "Gateway Program.cs aur OpenTelemetry setup (packages yahan run-check nahi hue: Yarp.ReverseProxy, OpenTelemetry.*)"
          },
          check: "none",
          src: "using OpenTelemetry.Metrics;\nusing OpenTelemetry.Resources;\nusing OpenTelemetry.Trace;\n\n// Packages: Yarp.ReverseProxy, OpenTelemetry.Extensions.Hosting,\n// OpenTelemetry.Instrumentation.AspNetCore, OpenTelemetry.Instrumentation.Http,\n// OpenTelemetry.Exporter.OpenTelemetryProtocol\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddReverseProxy()\n    .LoadFromConfig(builder.Configuration.GetSection(\"ReverseProxy\"));\n\nbuilder.Services.AddOpenTelemetry()\n    .ConfigureResource(r => r.AddService(\"gateway\"))\n    .WithTracing(t => t\n        .AddAspNetCoreInstrumentation()\n        .AddHttpClientInstrumentation()\n        .AddSource(\"Shop.Orders\")          // our own ActivitySource\n        .AddOtlpExporter())\n    .WithMetrics(m => m\n        .AddAspNetCoreInstrumentation()\n        .AddHttpClientInstrumentation()\n        .AddOtlpExporter());\n\nvar app = builder.Build();\napp.MapReverseProxy();\napp.Run();"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in this area",
        hi: "इस area में नया क्या है",
        hg: "Is area mein naya kya hai"
      },
      body: {
        en: "<ul>\n<li><b>Aspire 13</b> (Nov 2025): \".NET Aspire\" was renamed to just \"Aspire\".</li>\n<li><b>Polly v8</b> (library, 2023): <code>ResiliencePipeline</code> and strategy options replace the v7 policy classes. <code>Microsoft.Extensions.Http.Resilience</code> (.NET 8+) builds on it for HttpClient.</li>\n<li><b>TimeProvider</b> (.NET 8) with <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) makes time-based logic such as a circuit breaker testable without sleeping.</li>\n<li><b>W3C trace context</b> is the default <code>Activity</code> id format since .NET 5; OpenTelemetry for .NET builds on <code>ActivitySource</code> and <code>Activity</code>.</li>\n</ul>",
        hi: "<ul>\n<li><b>Aspire 13</b> (Nov 2025): \".NET Aspire\" का नाम बदलकर सिर्फ़ \"Aspire\" हो गया।</li>\n<li><b>Polly v8</b> (library, 2023): <code>ResiliencePipeline</code> और strategy options ने v7 की policy classes की जगह ली। <code>Microsoft.Extensions.Http.Resilience</code> (.NET 8+) HttpClient के लिए इसी पर बना है।</li>\n<li><b>TimeProvider</b> (.NET 8) और <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) से circuit breaker जैसे time वाले logic को sleep किए बिना test कर सकते हैं।</li>\n<li><b>W3C trace context</b> .NET 5 से <code>Activity</code> का default id format है; OpenTelemetry for .NET <code>ActivitySource</code> और <code>Activity</code> पर बना है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Aspire 13</b> (Nov 2025): \".NET Aspire\" ka naam badalkar sirf \"Aspire\" ho gaya.</li>\n<li><b>Polly v8</b> (library, 2023): <code>ResiliencePipeline</code> aur strategy options ne v7 ki policy classes ki jagah li. <code>Microsoft.Extensions.Http.Resilience</code> (.NET 8+) HttpClient ke liye isi par bana hai.</li>\n<li><b>TimeProvider</b> (.NET 8) aur <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) se circuit breaker jaise time wale logic ko sleep kiye bina test kar sakte hain.</li>\n<li><b>W3C trace context</b> .NET 5 se <code>Activity</code> ka default id format hai; OpenTelemetry for .NET <code>ActivitySource</code> aur <code>Activity</code> par bana hai.</li>\n</ul>"
      }
    }
  ],
  qa: [
    {
      id: "when-microservices",
      depth: "short",
      q: "When would you choose microservices over a monolith?",
      answer: "When several teams need independent releases or scaling, and the organisation can run pipelines, monitoring and on-call. Otherwise a modular monolith is cheaper and safer.",
      meaning: {
        hi: "जब कई teams को अलग releases या scaling चाहिए, और organisation pipelines, monitoring और on-call चला सके। वरना modular monolith सस्ता और सुरक्षित है।",
        hg: "Jab kai teams ko alag releases ya scaling chahiye, aur organisation pipelines, monitoring aur on-call chala sake. Warna modular monolith sasta aur surakshit hai."
      },
      explain: {
        en: "<ul>\n<li>Good reasons: several autonomous teams, parts with very different scaling or availability, different release rhythms, fault isolation.</li>\n<li>Weak reasons: \"it is modern\", \"Netflix does it\", or a small team that has no deployment automation yet.</li>\n<li>State the costs in the same breath: network failures, no shared transaction, data copies, contracts, observability, on-call (Day 15 had the monolith side).</li>\n<li>Follow-up: \"How would you migrate?\" — gradually (strangler): extract the module with the clearest border and real pain first, keep the monolith running, and measure before the next split.</li>\n</ul>",
        hi: "<ul>\n<li>अच्छी वजहें: कई autonomous teams, ऐसे हिस्से जिनकी scaling या availability बहुत अलग है, अलग release rhythm, fault isolation।</li>\n<li>कमज़ोर वजहें: \"यह modern है\", \"Netflix करता है\", या छोटी team जिसके पास अभी deployment automation नहीं।</li>\n<li>लागतें साथ में ही बताओ: network failures, shared transaction नहीं, data की कॉपियाँ, contracts, observability, on-call (Day 15 में monolith का पक्ष था)।</li>\n<li>Follow-up: \"Migrate कैसे करोगे?\" — धीरे-धीरे (strangler): जिस module की सीमा सबसे साफ़ और दर्द असली हो उसे पहले निकालो, monolith चलता रखो, और अगले split से पहले नापो।</li>\n</ul>",
        hg: "<ul>\n<li>Achhi wajahein: kai autonomous teams, aise hisse jinki scaling ya availability bahut alag hai, alag release rhythm, fault isolation.</li>\n<li>Kamzor wajahein: \"yeh modern hai\", \"Netflix karta hai\", ya chhoti team jiske paas abhi deployment automation nahi.</li>\n<li>Laagatein saath mein hi batao: network failures, shared transaction nahi, data ki copies, contracts, observability, on-call (Day 15 mein monolith ka paksh tha).</li>\n<li>Follow-up: \"Migrate kaise karoge?\" — dheere-dheere (strangler): jis module ki seema sabse saaf aur dard asli ho use pehle nikaalo, monolith chalta rakho, aur agle split se pehle naapo.</li>\n</ul>"
      }
    },
    {
      id: "api-gateway-what",
      depth: "short",
      q: "What does an API gateway do, and what should it not do?",
      answer: "It is the single entry point: routing, authentication, rate limiting, TLS and logging. It should not hold business logic, or it becomes a new monolith and a single point of failure.",
      meaning: {
        hi: "यह एक ही entry point है: routing, authentication, rate limiting, TLS और logging। इसमें business logic नहीं होना चाहिए, वरना यह नया monolith और single point of failure बन जाता है।",
        hg: "Yeh ek hi entry point hai: routing, authentication, rate limiting, TLS aur logging. Ismein business logic nahi hona chahiye, warna yeh naya monolith aur single point of failure ban jaata hai."
      },
      explain: {
        en: "<ul>\n<li>Typical jobs: route by path or host, validate tokens, throttle, terminate TLS, cache some responses, add correlation ids, collect access logs.</li>\n<li>Risks: a single point of failure (run several instances) and a growing pile of logic. Keep it thin; business rules stay in services.</li>\n<li>In .NET the usual self-hosted choice is <b>YARP</b> (<code>Yarp.ReverseProxy</code>), configured with routes and clusters.</li>\n<li>A <b>BFF</b> (Backend for Frontend) is a gateway/API per client type, shaped to that client's screens and owned by the same team — it may merge several service calls for one screen. Do not make one giant shared gateway for every client.</li>\n<li>Follow-up: \"Gateway vs service mesh?\" — gateway handles north-south traffic (clients to the system); a mesh handles east-west traffic between services (mTLS, retries) and is usually a later step.</li>\n</ul>",
        hi: "<ul>\n<li>आम काम: path या host से route करना, tokens validate करना, throttle करना, TLS terminate करना, कुछ responses cache करना, correlation ids जोड़ना, access logs जमा करना।</li>\n<li>ख़तरे: single point of failure (कई instances चलाओ) और बढ़ता logic का ढेर। इसे पतला रखो; business rules services में रहते हैं।</li>\n<li>.NET में self-hosted आम पसंद <b>YARP</b> (<code>Yarp.ReverseProxy</code>) है, जो routes और clusters से configure होता है।</li>\n<li><b>BFF</b> (Backend for Frontend) हर client type का gateway/API है, उस client की screens के हिसाब से बना और उसी team की ownership — वह एक screen के लिए कई service calls मिला सकता है। हर client के लिए एक बहुत बड़ा shared gateway मत बनाओ।</li>\n<li>Follow-up: \"Gateway बनाम service mesh?\" — gateway north-south traffic (clients से system तक) सँभालता है; mesh services के बीच east-west traffic (mTLS, retries) सँभालता है और आम तौर पर बाद का कदम है।</li>\n</ul>",
        hg: "<ul>\n<li>Aam kaam: path ya host se route karna, tokens validate karna, throttle karna, TLS terminate karna, kuch responses cache karna, correlation ids jodna, access logs jama karna.</li>\n<li>Khatre: single point of failure (kai instances chalao) aur badhta logic ka dher. Ise patla rakho; business rules services mein rehte hain.</li>\n<li>.NET mein self-hosted aam pasand <b>YARP</b> (<code>Yarp.ReverseProxy</code>) hai, jo routes aur clusters se configure hota hai.</li>\n<li><b>BFF</b> (Backend for Frontend) har client type ka gateway/API hai, us client ki screens ke hisaab se bana aur usi team ki ownership — woh ek screen ke liye kai service calls mila sakta hai. Har client ke liye ek bahut bada shared gateway mat banao.</li>\n<li>Follow-up: \"Gateway vs service mesh?\" — gateway north-south traffic (clients se system tak) sambhalta hai; mesh services ke beech east-west traffic (mTLS, retries) sambhalta hai aur aam taur par baad ka kadam hai.</li>\n</ul>"
      }
    },
    {
      id: "sync-vs-async",
      depth: "short",
      q: "Synchronous or asynchronous communication between services — how do you choose?",
      answer: "Use sync HTTP/gRPC when the caller needs the answer now; use async messaging for commands and events that can finish later. Sync couples services in time; async trades that for eventual consistency.",
      meaning: {
        hi: "जब caller को जवाब अभी चाहिए तब sync HTTP/gRPC; जो commands और events बाद में पूरे हो सकते हैं उनके लिए async messaging। Sync services को समय में बाँधता है; async उसके बदले eventual consistency देता है।",
        hg: "Jab caller ko jawaab abhi chahiye tab sync HTTP/gRPC; jo commands aur events baad mein poore ho sakte hain unke liye async messaging. Sync services ko samay mein baandhta hai; async uske badle eventual consistency deta hai."
      },
      explain: {
        en: "<ul>\n<li><b>Temporal coupling</b>: with sync calls, both services must be up at the same moment; with a broker in between, the receiver can be down and catch up later.</li>\n<li>Async costs: eventual consistency, duplicates, ordering questions, harder debugging, and a UI that must show \"pending\".</li>\n<li>gRPC (HTTP/2, protobuf contracts) fits internal, low-latency, streaming calls; REST/JSON fits public and browser-facing APIs (browsers need gRPC-Web or JSON transcoding to reach gRPC).</li>\n<li>Follow-up: \"Order service needs the price from Catalog\" — a read the user waits on: sync call (or a local copy of prices). \"Order placed, send email and update stock\" — events, async.</li>\n</ul>",
        hi: "<ul>\n<li><b>Temporal coupling</b>: sync calls में दोनों services एक ही पल up होनी चाहिए; बीच में broker हो तो receiver down रहकर बाद में पकड़ सकता है।</li>\n<li>Async की कीमत: eventual consistency, duplicates, ordering के सवाल, मुश्किल debugging, और ऐसा UI जो \"pending\" दिखाए।</li>\n<li>gRPC (HTTP/2, protobuf contracts) internal, कम latency, streaming calls के लिए ठीक है; REST/JSON public और browser वाली APIs के लिए (browsers को gRPC तक पहुँचने के लिए gRPC-Web या JSON transcoding चाहिए)।</li>\n<li>Follow-up: \"Order service को Catalog से price चाहिए\" — user जिस read का इंतज़ार कर रहा है: sync call (या prices की local कॉपी)। \"Order place हुआ, email भेजो और stock update करो\" — events, async।</li>\n</ul>",
        hg: "<ul>\n<li><b>Temporal coupling</b>: sync calls mein dono services ek hi pal up honi chahiye; beech mein broker ho to receiver down rehkar baad mein pakad sakta hai.</li>\n<li>Async ki keemat: eventual consistency, duplicates, ordering ke sawaal, mushkil debugging, aur aisa UI jo \"pending\" dikhaye.</li>\n<li>gRPC (HTTP/2, protobuf contracts) internal, kam latency, streaming calls ke liye theek hai; REST/JSON public aur browser wali APIs ke liye (browsers ko gRPC tak pahunchne ke liye gRPC-Web ya JSON transcoding chahiye).</li>\n<li>Follow-up: \"Order service ko Catalog se price chahiye\" — user jis read ka intezaar kar raha hai: sync call (ya prices ki local copy). \"Order place hua, email bhejo aur stock update karo\" — events, async.</li>\n</ul>"
      }
    },
    {
      id: "at-least-once-idempotent",
      depth: "short",
      q: "Can a message broker give you exactly-once processing?",
      answer: "In practice brokers deliver at-least-once, so duplicates happen. You get an effectively-once result with an idempotent consumer that remembers handled message ids.",
      meaning: {
        hi: "Practice में brokers at-least-once deliver करते हैं, इसलिए duplicates आते हैं। Effectively-once नतीजा idempotent consumer से मिलता है जो handle हुए message ids याद रखता है।",
        hg: "Practice mein brokers at-least-once deliver karte hain, isliye duplicates aate hain. Effectively-once nateeja idempotent consumer se milta hai jo handle hue message ids yaad rakhta hai."
      },
      explain: {
        en: "<ul>\n<li>The broker redelivers until it gets an acknowledgement. If the consumer finishes the work but crashes before acknowledging, the same message comes again.</li>\n<li>Some systems offer \"exactly-once\" inside their own boundary (for example transactional reads and writes in the same system), but the moment your handler also writes to your own database or calls an API, you must handle duplicates yourself.</li>\n<li>Make the consumer idempotent: an inbox table with a unique message id in the same transaction as the effect, or a naturally idempotent operation (<code>SET status</code> not <code>+=</code>). See puzzle 1.</li>\n<li>Follow-up: \"At-most-once?\" — acknowledge first, then process: a crash loses the message. Fine for metrics, not for payments.</li>\n</ul>",
        hi: "<ul>\n<li>Broker acknowledgement मिलने तक दोबारा देता रहता है। Consumer काम पूरा करके acknowledge से पहले crash हो जाए तो वही message फिर आता है।</li>\n<li>कुछ systems अपनी सीमा के अंदर \"exactly-once\" देते हैं (जैसे उसी system में transactional reads और writes), पर जैसे ही आपका handler अपने database में लिखे या API बुलाए, duplicates आपको ख़ुद सँभालने होंगे।</li>\n<li>Consumer को idempotent बनाओ: effect की उसी transaction में unique message id वाली inbox table, या natural idempotent operation (<code>+=</code> नहीं, <code>SET status</code>)। Puzzle 1 देखो।</li>\n<li>Follow-up: \"At-most-once?\" — पहले acknowledge, फिर process: crash हुआ तो message खो गया। Metrics के लिए ठीक, payments के लिए नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Broker acknowledgement milne tak dobara deta rehta hai. Consumer kaam poora karke acknowledge se pehle crash ho jaaye to wahi message phir aata hai.</li>\n<li>Kuch systems apni seema ke andar \"exactly-once\" dete hain (jaise usi system mein transactional reads aur writes), par jaise hi aapka handler apne database mein likhe ya API bulaye, duplicates aapko khud sambhalne honge.</li>\n<li>Consumer ko idempotent banao: effect ki usi transaction mein unique message id wali inbox table, ya natural idempotent operation (<code>+=</code> nahi, <code>SET status</code>). Puzzle 1 dekho.</li>\n<li>Follow-up: \"At-most-once?\" — pehle acknowledge, phir process: crash hua to message kho gaya. Metrics ke liye theek, payments ke liye nahi.</li>\n</ul>"
      }
    },
    {
      id: "outbox-pattern",
      depth: "short",
      q: "What is the Transactional Outbox pattern and what problem does it solve?",
      answer: "Write the event to an outbox table in the same transaction as the data; a relay publishes it later. It solves the dual-write problem: saved data with a lost event.",
      meaning: {
        hi: "Event को data की उसी transaction में outbox table में लिखो; relay उसे बाद में publish करता है। यह dual-write problem सुलझाता है: data save हुआ पर event खो गया।",
        hg: "Event ko data ki usi transaction mein outbox table mein likho; relay use baad mein publish karta hai. Yeh dual-write problem suljhata hai: data save hua par event kho gaya."
      },
      explain: {
        en: "<ul>\n<li>Problem: \"save to DB, then publish to the broker\" has no shared transaction. Crash in between: data saved, event lost (or the reverse if you publish first).</li>\n<li>Solution: one <code>SaveChanges</code> writes the data and an <code>OutboxMessage</code> row. A relay (background service) reads unsent rows in id order, publishes, marks them sent.</li>\n<li>Result: events are <b>never lost</b>, but may be <b>duplicated</b> (crash after publish, before marking) — so consumers must be idempotent (inbox). See puzzle 2.</li>\n<li>Variants: polling relay, or a CDC tool reading the table's change log. Clean up old sent rows. This is the reliable version of \"dispatch after SaveChanges\" from the Day 15 domain events answer.</li>\n<li>Follow-up: \"Why not just use a distributed transaction?\" — not supported by most brokers and cloud services, and it locks resources.</li>\n</ul>",
        hi: "<ul>\n<li>समस्या: \"DB में save करो, फिर broker को publish करो\" में shared transaction नहीं है। बीच में crash: data save, event खोया (या उल्टा, अगर पहले publish करो)।</li>\n<li>हल: एक <code>SaveChanges</code> data और एक <code>OutboxMessage</code> row लिखता है। Relay (background service) unsent rows id के order में पढ़ता है, publish करता है, sent mark करता है।</li>\n<li>नतीजा: events <b>कभी खोते नहीं</b>, पर <b>duplicate हो</b> सकते हैं (publish के बाद, mark से पहले crash) — इसलिए consumers idempotent होने चाहिए (inbox)। Puzzle 2 देखो।</li>\n<li>Variants: polling relay, या CDC tool जो table का change log पढ़े। पुराने sent rows साफ़ करो। यह Day 15 के domain events वाले जवाब के \"SaveChanges के बाद dispatch\" का reliable रूप है।</li>\n<li>Follow-up: \"सीधे distributed transaction क्यों नहीं?\" — ज़्यादातर brokers और cloud services उसे support नहीं करते, और वह resources lock करती है।</li>\n</ul>",
        hg: "<ul>\n<li>Samasya: \"DB mein save karo, phir broker ko publish karo\" mein shared transaction nahi hai. Beech mein crash: data save, event khoya (ya ulta, agar pehle publish karo).</li>\n<li>Hal: ek <code>SaveChanges</code> data aur ek <code>OutboxMessage</code> row likhta hai. Relay (background service) unsent rows id ke order mein padhta hai, publish karta hai, sent mark karta hai.</li>\n<li>Nateeja: events <b>kabhi khoye nahi</b>, par <b>duplicate ho</b> sakte hain (publish ke baad, mark se pehle crash) — isliye consumers idempotent hone chahiye (inbox). Puzzle 2 dekho.</li>\n<li>Variants: polling relay, ya CDC tool jo table ka change log padhe. Purane sent rows saaf karo. Yeh Day 15 ke domain events wale jawaab ke \"SaveChanges ke baad dispatch\" ka reliable roop hai.</li>\n<li>Follow-up: \"Seedhe distributed transaction kyun nahi?\" — zyadatar brokers aur cloud services use support nahi karte, aur woh resources lock karti hai.</li>\n</ul>"
      }
    },
    {
      id: "saga-what",
      depth: "short",
      q: "What is a Saga, and why not use a distributed transaction?",
      answer: "A Saga is a chain of local transactions, each with a compensating action that runs in reverse order on failure. Two-phase commit locks resources across services and is poorly supported, so it is avoided.",
      meaning: {
        hi: "Saga local transactions की कड़ी है, हर एक की compensating action, जो failure पर उल्टे order में चलती है। Two-phase commit services के पार resources lock करती है और कम जगह support होती है, इसलिए टाली जाती है।",
        hg: "Saga local transactions ki kadi hai, har ek ki compensating action, jo failure par ulte order mein chalti hai. Two-phase commit services ke paar resources lock karti hai aur kam jagah support hoti hai, isliye taali jaati hai."
      },
      explain: {
        en: "<ul>\n<li>Each service commits its own local transaction and publishes a message; if a later step fails, the earlier steps are undone by <b>compensating actions</b> (refund, release stock), in reverse order.</li>\n<li>A compensation is a business action, not a rollback — and it must be idempotent, because it may be retried. Some steps cannot be truly undone (an email), so plan a semantic undo (apology).</li>\n<li>The state is <b>eventually consistent</b>: show \"Pending\" to the user and decide which step is the point of no return.</li>\n<li>Why not 2PC: it holds locks while waiting for every participant, the coordinator is a bottleneck, and message brokers and most cloud services do not take part.</li>\n<li>See puzzle 3 for the reverse order and the failed step not being compensated.</li>\n</ul>",
        hi: "<ul>\n<li>हर service अपनी local transaction commit करती है और message publish करती है; बाद का कोई step fail हो तो पहले के steps <b>compensating actions</b> (refund, stock release) से, उल्टे order में undo होते हैं।</li>\n<li>Compensation business action है, rollback नहीं — और वह idempotent होनी चाहिए, क्योंकि retry हो सकती है। कुछ steps सच में undo नहीं हो सकते (email), इसलिए semantic undo (माफ़ी) सोचो।</li>\n<li>State <b>eventually consistent</b> है: user को \"Pending\" दिखाओ और तय करो कि कौन-सा step point of no return है।</li>\n<li>2PC क्यों नहीं: वह हर participant का इंतज़ार करते हुए locks पकड़े रखती है, coordinator bottleneck बनता है, और message brokers व ज़्यादातर cloud services उसमें शामिल नहीं होते।</li>\n<li>Reverse order और fail हुए step की compensation न होने के लिए puzzle 3 देखो।</li>\n</ul>",
        hg: "<ul>\n<li>Har service apni local transaction commit karti hai aur message publish karti hai; baad ka koi step fail ho to pehle ke steps <b>compensating actions</b> (refund, stock release) se, ulte order mein undo hote hain.</li>\n<li>Compensation business action hai, rollback nahi — aur woh idempotent honi chahiye, kyunki retry ho sakti hai. Kuch steps sach mein undo nahi ho sakte (email), isliye semantic undo (maafi) socho.</li>\n<li>State <b>eventually consistent</b> hai: user ko \"Pending\" dikhao aur tay karo ki kaun-sa step point of no return hai.</li>\n<li>2PC kyun nahi: woh har participant ka intezaar karte hue locks pakde rehti hai, coordinator bottleneck banta hai, aur message brokers va zyadatar cloud services usmein shaamil nahi hote.</li>\n<li>Reverse order aur fail hue step ki compensation na hone ke liye puzzle 3 dekho.</li>\n</ul>"
      }
    },
    {
      id: "retry-and-circuit-breaker",
      depth: "short",
      q: "How do retries and a circuit breaker work together?",
      answer: "Retry handles short transient failures with backoff and jitter, on idempotent calls only. The breaker stops calling a failing service for a while, so retries do not cause a storm.",
      meaning: {
        hi: "Retry छोटी transient failures को backoff और jitter के साथ सँभालती है, सिर्फ़ idempotent calls पर। Breaker fail होती service को कुछ देर call करना बंद कर देता है, ताकि retries से storm न बने।",
        hg: "Retry chhoti transient failures ko backoff aur jitter ke saath sambhalti hai, sirf idempotent calls par. Breaker fail hoti service ko kuch der call karna band kar deta hai, taaki retries se storm na bane."
      },
      explain: {
        en: "<ul>\n<li>Retry answers \"a blip\": a timeout or 503 that is gone in a moment. Wait with exponential backoff + jitter, cap attempts, and only for calls that are safe to repeat (Day 13).</li>\n<li>Circuit breaker answers \"it is really down\": after a failure ratio, it opens and rejects calls immediately (fail fast), then lets one trial through (half-open). See puzzle 5.</li>\n<li>Order: retry outside, breaker inside, and a per-attempt timeout innermost — so each attempt counts for the breaker. An open circuit should stop further retries from hammering the service.</li>\n<li>Add a <b>fallback</b> only when a degraded answer is honest (cached price), and still log it.</li>\n<li>Follow-up: \"How do you avoid a retry storm?\" — one retry layer, backoff + jitter, a breaker, and respect <code>Retry-After</code>.</li>\n</ul>",
        hi: "<ul>\n<li>Retry \"छोटी हिचकी\" का जवाब है: timeout या 503 जो पल भर में चला जाए। Exponential backoff + jitter से रुको, attempts कम रखो, और सिर्फ़ उन calls के लिए जो दोहराने पर safe हैं (Day 13)।</li>\n<li>Circuit breaker \"सच में down है\" का जवाब है: failure ratio के बाद वह open होकर calls तुरंत reject करता है (fail fast), फिर एक trial जाने देता है (half-open)। Puzzle 5 देखो।</li>\n<li>Order: retry बाहर, breaker अंदर, और per-attempt timeout सबसे अंदर — ताकि हर attempt breaker के लिए गिना जाए। Open circuit को आगे की retries से service पर हथौड़ा चलाने से रोकना चाहिए।</li>\n<li><b>Fallback</b> तभी जोड़ो जब degraded जवाब ईमानदार हो (cached price), और फिर भी log करो।</li>\n<li>Follow-up: \"Retry storm से कैसे बचोगे?\" — एक retry layer, backoff + jitter, एक breaker, और <code>Retry-After</code> को मानो।</li>\n</ul>",
        hg: "<ul>\n<li>Retry \"chhoti hichki\" ka jawaab hai: timeout ya 503 jo pal bhar mein chala jaaye. Exponential backoff + jitter se ruko, attempts kam rakho, aur sirf un calls ke liye jo dohrane par safe hain (Day 13).</li>\n<li>Circuit breaker \"sach mein down hai\" ka jawaab hai: failure ratio ke baad woh open hokar calls turant reject karta hai (fail fast), phir ek trial jaane deta hai (half-open). Puzzle 5 dekho.</li>\n<li>Order: retry bahar, breaker andar, aur per-attempt timeout sabse andar — taaki har attempt breaker ke liye gina jaaye. Open circuit ko aage ki retries se service par hathauda chalane se rokna chahiye.</li>\n<li><b>Fallback</b> tabhi jodo jab degraded jawaab imaandaar ho (cached price), aur phir bhi log karo.</li>\n<li>Follow-up: \"Retry storm se kaise bachoge?\" — ek retry layer, backoff + jitter, ek breaker, aur <code>Retry-After</code> ko mano.</li>\n</ul>"
      }
    },
    {
      id: "trace-across-services",
      depth: "short",
      q: "How do you trace one request across several services?",
      answer: "Use OpenTelemetry with the W3C traceparent header: each service continues the same trace id and adds its own span. Put the trace id in logs as the correlation id.",
      meaning: {
        hi: "OpenTelemetry और W3C traceparent header use करो: हर service वही trace id आगे बढ़ाती है और अपना span जोड़ती है। Trace id को logs में correlation id की तरह रखो।",
        hg: "OpenTelemetry aur W3C traceparent header use karo: har service wahi trace id aage badhati hai aur apna span jodti hai. Trace id ko logs mein correlation id ki tarah rakho."
      },
      explain: {
        en: "<ul>\n<li><b>Three pillars</b>: logs (events), metrics (numbers over time), traces (one request's path). Traces connect the other two.</li>\n<li>In .NET: <code>ActivitySource</code> + <code>Activity</code> (System.Diagnostics) for spans, OpenTelemetry SDK + exporters (OTLP) to ship them. ASP.NET Core and HttpClient instrumentation join HTTP hops automatically.</li>\n<li><code>traceparent</code> = <code>00-&lt;trace id&gt;-&lt;span id&gt;-&lt;flags&gt;</code>. Same trace id across the system; each span has its own id and points to its parent. See puzzle 6.</li>\n<li>Messages: many SDKs propagate it in message properties; with a custom outbox relay you store it (the outbox row) and restore it as the consumer's parent yourself.</li>\n<li>Follow-up: \"A request is slow — how do you find out why?\" — open the trace, find the longest span, check its logs (same trace id) and metrics. Sample traces in production to control cost.</li>\n</ul>",
        hi: "<ul>\n<li><b>three pillars</b>: logs (घटनाएँ), metrics (समय के साथ आँकड़े), traces (एक request का रास्ता)। Traces बाकी दोनों को जोड़ते हैं।</li>\n<li>.NET में: spans के लिए <code>ActivitySource</code> + <code>Activity</code> (System.Diagnostics), और उन्हें भेजने के लिए OpenTelemetry SDK + exporters (OTLP)। ASP.NET Core और HttpClient instrumentation HTTP hops अपने आप जोड़ते हैं।</li>\n<li><code>traceparent</code> = <code>00-&lt;trace id&gt;-&lt;span id&gt;-&lt;flags&gt;</code>। पूरे system में एक trace id; हर span का अपना id है और वह अपने parent की तरफ़ इशारा करता है। Puzzle 6 देखो।</li>\n<li>Messages: कई SDKs उसे message properties में आगे ले जाते हैं; custom outbox relay में उसे store (outbox row) और consumer के parent के रूप में restore ख़ुद करना पड़ता है।</li>\n<li>Follow-up: \"Request धीमी है — वजह कैसे ढूँढोगे?\" — trace खोलो, सबसे लंबा span ढूँढो, उसके logs (वही trace id) और metrics देखो। खर्च काबू में रखने के लिए production में traces sample करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Three pillars</b>: logs (ghatnayein), metrics (samay ke saath aankde), traces (ek request ka raasta). Traces baaki dono ko jodte hain.</li>\n<li>.NET mein: spans ke liye <code>ActivitySource</code> + <code>Activity</code> (System.Diagnostics), aur unhe bhejne ke liye OpenTelemetry SDK + exporters (OTLP). ASP.NET Core aur HttpClient instrumentation HTTP hops apne aap jodte hain.</li>\n<li><code>traceparent</code> = <code>00-&lt;trace id&gt;-&lt;span id&gt;-&lt;flags&gt;</code>. Poore system mein ek trace id; har span ka apna id hai aur woh apne parent ki taraf ishaara karta hai. Puzzle 6 dekho.</li>\n<li>Messages: kai SDKs use message properties mein aage le jaate hain; custom outbox relay mein use store (outbox row) aur consumer ke parent ke roop mein restore khud karna padta hai.</li>\n<li>Follow-up: \"Request dheemi hai — wajah kaise dhoondhoge?\" — trace kholo, sabse lamba span dhoondho, uske logs (wahi trace id) aur metrics dekho. Kharcha kaabu mein rakhne ke liye production mein traces sample karo.</li>\n</ul>"
      }
    },
    {
      id: "distributed-monolith",
      depth: "detailed",
      q: "What is a distributed monolith and how do you spot one?",
      answer: "Services that must be deployed together, share a database, or call each other in long synchronous chains. You pay the costs of microservices without their independence.",
      meaning: {
        hi: "ऐसी services जिन्हें साथ में deploy करना पड़ता है, जो database share करती हैं, या लंबी synchronous chains में एक-दूसरे को बुलाती हैं। microservices का खर्च है, उनकी आज़ादी नहीं।",
        hg: "Aisi services jinhe saath mein deploy karna padta hai, jo database share karti hain, ya lambi synchronous chains mein ek-doosre ko bulati hain. Microservices ka kharcha hai, unki aazaadi nahi."
      },
      explain: {
        en: "<ul>\n<li>Signals: release trains, one change in five repos, a shared database or shared tables, a \"common\" library of domain types, services that cannot start without five others, borders along technical layers.</li>\n<li>Why it hurts: a failure in one service spreads to all (availability multiplies down), and teams are not independent — the main benefit is gone.</li>\n<li>Fixes: re-draw borders around business capabilities (bounded contexts, Day 15), give each service its own data, replace chatty sync calls with events or a local read model, version contracts so services can deploy separately.</li>\n<li>TL angle: measure it — how often do services deploy independently? How many services does one feature touch? If the answer is \"all\", merge back into a modular monolith; that is a legitimate decision.</li>\n</ul>",
        hi: "<ul>\n<li>निशानियाँ: release trains, एक बदलाव पाँच repos में, shared database या shared tables, domain types की \"common\" library, ऐसी services जो पाँच दूसरी के बिना start नहीं होतीं, technical layers के हिसाब से सीमाएँ।</li>\n<li>तकलीफ़ क्यों: एक service की failure सब में फैलती है (availability गुणा होकर घटती है), और teams आज़ाद नहीं रहतीं — मुख्य फ़ायदा चला गया।</li>\n<li>इलाज: सीमाएँ business capabilities के आसपास दोबारा खींचो (bounded contexts, Day 15), हर service को अपना data दो, बातूनी sync calls की जगह events या local read model लाओ, contracts version करो ताकि services अलग-अलग deploy हो सकें।</li>\n<li>TL angle: नापो — services कितनी बार independently deploy होती हैं? एक feature कितनी services छूता है? जवाब \"सब\" हो तो modular monolith में वापस मिला दो; यह एक जायज़ फ़ैसला है।</li>\n</ul>",
        hg: "<ul>\n<li>Nishaaniyan: release trains, ek badlaav paanch repos mein, shared database ya shared tables, domain types ki \"common\" library, aisi services jo paanch doosri ke bina start nahi hotin, technical layers ke hisaab se seemayein.</li>\n<li>Takleef kyun: ek service ki failure sab mein phailti hai (availability guna hokar ghatti hai), aur teams aazaad nahi rehtin — mukhya faayda chala gaya.</li>\n<li>Ilaaj: seemayein business capabilities ke aaspaas dobara kheencho (bounded contexts, Day 15), har service ko apna data do, baatooni sync calls ki jagah events ya local read model laao, contracts version karo taaki services alag-alag deploy ho sakein.</li>\n<li>TL angle: naapo — services kitni baar independently deploy hoti hain? Ek feature kitni services chhoota hai? Jawaab \"sab\" ho to modular monolith mein wapas mila do; yeh ek jaayaz faisla hai.</li>\n</ul>"
      }
    },
    {
      id: "yarp-vs-apim",
      depth: "detailed",
      q: "YARP or Azure API Management — how would you choose?",
      answer: "YARP is a reverse-proxy library you code and host yourself, so it is flexible and has no licence cost. Azure API Management is a managed gateway with policies, subscriptions and a developer portal (Day 20).",
      meaning: {
        hi: "YARP एक reverse-proxy library है जिसे आप खुद code और host करते हैं, इसलिए flexible है और उसका कोई licence cost नहीं। Azure API Management एक managed gateway है, जिसमें policies, subscriptions और developer portal हैं (Day 20)।",
        hg: "YARP ek reverse-proxy library hai jise aap khud code aur host karte hain, isliye flexible hai aur uska koi licence cost nahi. Azure API Management ek managed gateway hai, jismein policies, subscriptions aur developer portal hain (Day 20)."
      },
      explain: {
        en: "<ul>\n<li><b>YARP</b>: you own it — custom C# logic, your own hosting, your own scaling and patching. Good for an internal gateway or a BFF in a .NET team.</li>\n<li><b>Managed gateway</b> (Azure API Management, covered on Day 20): less to operate, built-in policies, API products and keys for external consumers, analytics. Less freedom, and a cost line to check.</li>\n<li>Choose by who consumes the API (public partners vs internal), team skills, how much custom logic is needed, and operations capacity. They can also be combined: a managed gateway at the edge, YARP BFFs behind it.</li>\n<li>Either way keep business logic out and run more than one instance.</li>\n</ul>",
        hi: "<ul>\n<li><b>YARP</b>: आप मालिक हैं — अपना C# logic, अपनी hosting, अपनी scaling और patching। .NET team के internal gateway या BFF के लिए अच्छा।</li>\n<li><b>Managed gateway</b> (Azure API Management, Day 20 में): चलाने को कम, built-in policies, बाहरी consumers के लिए API products और keys, analytics। आज़ादी कम, और खर्च की line देखनी पड़ती है।</li>\n<li>इस हिसाब से चुनो कि API कौन use करेगा (public partners या internal), team की skills, कितना custom logic चाहिए, और operations की capacity। दोनों मिलाए भी जा सकते हैं: किनारे पर managed gateway, उसके पीछे YARP BFFs।</li>\n<li>जो भी लो, business logic बाहर रखो और एक से ज़्यादा instance चलाओ।</li>\n</ul>",
        hg: "<ul>\n<li><b>YARP</b>: aap maalik hain — apna C# logic, apni hosting, apni scaling aur patching. .NET team ke internal gateway ya BFF ke liye achha.</li>\n<li><b>Managed gateway</b> (Azure API Management, Day 20 mein): chalane ko kam, built-in policies, bahari consumers ke liye API products aur keys, analytics. Aazaadi kam, aur kharche ki line dekhni padti hai.</li>\n<li>Is hisaab se chuno ki API kaun use karega (public partners ya internal), team ki skills, kitna custom logic chahiye, aur operations ki capacity. Dono milaye bhi ja sakte hain: kinare par managed gateway, uske peeche YARP BFFs.</li>\n<li>Jo bhi lo, business logic bahar rakho aur ek se zyada instance chalao.</li>\n</ul>"
      }
    },
    {
      id: "queue-vs-topic",
      depth: "detailed",
      q: "Queue versus topic with subscriptions — when do you use which?",
      answer: "A queue gives each message to one consumer, for commands and work items. A topic copies each message to every subscription, for events that several services react to.",
      meaning: {
        hi: "Queue हर message एक consumer को देती है, commands और work items के लिए। Topic हर message की कॉपी हर subscription को देता है, उन events के लिए जिन पर कई services react करती हैं।",
        hg: "Queue har message ek consumer ko deti hai, commands aur work items ke liye. Topic har message ki copy har subscription ko deta hai, un events ke liye jin par kai services react karti hain."
      },
      explain: {
        en: "<ul>\n<li><b>Queue</b>: point-to-point. Several instances can compete for messages (scale-out), but each message is processed by one.</li>\n<li><b>Topic</b>: publish-subscribe. The publisher does not know who listens; each subscription has its own copy, its own pace and usually its own dead-letter queue (Service Bus has one per queue and per subscription).</li>\n<li>Naming habit: commands are imperative (\"ChargeCard\") and sent to one owner; events are past-tense facts (\"OrderPlaced\") and published to many.</li>\n<li>Adding a new subscriber to a topic does not change the publisher — that is the decoupling gain. The cost is that the publisher's event becomes a contract (see versioning).</li>\n<li>The concepts are the same in most brokers; Azure Service Bus specifics (sessions, filters, locks) are on Day 20.</li>\n</ul>",
        hi: "<ul>\n<li><b>Queue</b>: point-to-point। कई instances messages के लिए होड़ लगा सकते हैं (scale-out), पर हर message एक ही process करता है।</li>\n<li><b>Topic</b>: publish-subscribe। Publisher को पता नहीं कौन सुन रहा है; हर subscription की अपनी कॉपी, अपनी रफ़्तार और आम तौर पर अपनी dead-letter queue होती है (Service Bus में हर queue और हर subscription की एक होती है)।</li>\n<li>नाम की आदत: commands आदेश के रूप में (\"ChargeCard\") और एक मालिक को भेजे जाते हैं; events past-tense के facts (\"OrderPlaced\") और कई को publish होते हैं।</li>\n<li>Topic में नया subscriber जोड़ने से publisher नहीं बदलता — यही decoupling का फ़ायदा है। कीमत यह है कि publisher का event एक contract बन जाता है (versioning देखो)।</li>\n<li>Concepts ज़्यादातर brokers में एक जैसे हैं; Azure Service Bus की specifics (sessions, filters, locks) Day 20 में।</li>\n</ul>",
        hg: "<ul>\n<li><b>Queue</b>: point-to-point. Kai instances messages ke liye hod laga sakte hain (scale-out), par har message ek hi process karta hai.</li>\n<li><b>Topic</b>: publish-subscribe. Publisher ko pata nahi kaun sun raha hai; har subscription ki apni copy, apni raftaar aur aam taur par apni dead-letter queue hoti hai (Service Bus mein har queue aur har subscription ki ek hoti hai).</li>\n<li>Naam ki aadat: commands aadesh ke roop mein (\"ChargeCard\") aur ek maalik ko bheje jaate hain; events past-tense ke facts (\"OrderPlaced\") aur kai ko publish hote hain.</li>\n<li>Topic mein naya subscriber jodne se publisher nahi badalta — yahi decoupling ka faayda hai. Keemat yeh hai ki publisher ka event ek contract ban jaata hai (versioning dekho).</li>\n<li>Concepts zyadatar brokers mein ek jaise hain; Azure Service Bus ki specifics (sessions, filters, locks) Day 20 mein.</li>\n</ul>"
      }
    },
    {
      id: "dead-letter-queue",
      depth: "detailed",
      q: "What is a dead-letter queue and how do you operate it?",
      answer: "A dead-letter queue holds messages that failed too many times or expired (if configured), so a poison message stops blocking the rest. Monitor it, alert on it, then fix and replay.",
      meaning: {
        hi: "Dead-letter queue उन messages को रखती है जो बहुत बार fail हुए या expire हो गए (अगर configured हो), ताकि poison message बाकी को न रोके। उसे monitor करो, उस पर alert लगाओ, फिर fix करके replay करो।",
        hg: "Dead-letter queue un messages ko rakhti hai jo bahut baar fail hue ya expire ho gaye (agar configured ho), taaki poison message baaki ko na roke. Use monitor karo, us par alert lagao, phir fix karke replay karo."
      },
      explain: {
        en: "<ul>\n<li>A <b>poison message</b> keeps failing (bad data, a bug, a missing record). Without a limit, it is retried forever and blocks a queue or burns CPU. After N delivery attempts it is moved to the DLQ.</li>\n<li>Separate <b>transient</b> failures (retry with backoff) from <b>permanent</b> ones (send to the DLQ early, with the reason).</li>\n<li>An unwatched DLQ is a silent data-loss bin. Alert on its depth, keep the failure reason and the trace id, and have a runbook: fix the bug or data, then <b>replay</b> — which again requires an idempotent consumer.</li>\n<li>Follow-up: \"What about message order after replay?\" — replayed messages arrive late; design handlers so a late message does not overwrite newer state (version numbers or timestamps).</li>\n</ul>",
        hi: "<ul>\n<li><b>Poison message</b> हर बार fail होता है (ख़राब data, bug, गायब record)। सीमा न हो तो उसे हमेशा retry किया जाता है और वह queue रोकता या CPU खाता है। N delivery attempts के बाद उसे DLQ में डाल दिया जाता है।</li>\n<li><b>Transient</b> failures (backoff से retry) और <b>permanent</b> failures (वजह के साथ जल्दी DLQ में भेजो) को अलग करो।</li>\n<li>जिस DLQ को कोई देखता नहीं वह चुपचाप data खोने का डिब्बा है। उसकी depth पर alert लगाओ, failure की वजह और trace id रखो, और runbook रखो: bug या data ठीक करो, फिर <b>replay</b> करो — जिसके लिए फिर idempotent consumer चाहिए।</li>\n<li>Follow-up: \"Replay के बाद message order का क्या?\" — replay हुए messages देर से आते हैं; handlers ऐसे बनाओ कि देर से आया message नई state को overwrite न करे (version numbers या timestamps)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Poison message</b> har baar fail hota hai (kharab data, bug, gayab record). Seema na ho to use hamesha retry kiya jaata hai aur woh queue rokta ya CPU khaata hai. N delivery attempts ke baad use DLQ mein daal diya jaata hai.</li>\n<li><b>Transient</b> failures (backoff se retry) aur <b>permanent</b> failures (wajah ke saath jaldi DLQ mein bhejo) ko alag karo.</li>\n<li>Jis DLQ ko koi dekhta nahi woh chupchaap data khone ka dibba hai. Uski depth par alert lagao, failure ki wajah aur trace id rakho, aur runbook rakho: bug ya data theek karo, phir <b>replay</b> karo — jiske liye phir idempotent consumer chahiye.</li>\n<li>Follow-up: \"Replay ke baad message order ka kya?\" — replay hue messages der se aate hain; handlers aise banao ki der se aaya message nayi state ko overwrite na kare (version numbers ya timestamps).</li>\n</ul>"
      }
    },
    {
      id: "competing-consumers-ordering",
      depth: "detailed",
      q: "What happens to message ordering when you add more consumers?",
      answer: "Competing consumers process in parallel, so global order is lost. Keep order per key by using partitions or sessions, or design handlers so order does not matter.",
      meaning: {
        hi: "Competing consumers parallel में process करते हैं, इसलिए पूरी queue का order खो जाता है। Order per key रखना हो तो partitions या sessions use करो, या handlers ऐसे बनाओ कि order मायने न रखे।",
        hg: "Competing consumers parallel mein process karte hain, isliye poori queue ka order kho jaata hai. Order per key rakhna ho to partitions ya sessions use karo, ya handlers aise banao ki order maayne na rakhe."
      },
      explain: {
        en: "<ul>\n<li>Five instances read one queue: message 2 can finish before message 1. Redelivery after a failure also reorders.</li>\n<li>Usually you need order only <b>per aggregate</b> (all messages of one order id). Brokers offer that through partition keys or sessions: same key goes to the same consumer, in order. Throughput then scales across keys, not within one key.</li>\n<li>Designs that do not need order: carry a <b>version number</b> or timestamp and ignore stale updates; make operations commutative; send full state (\"order is Paid\") instead of tiny deltas.</li>\n<li>A single outbox relay keeps outbox rows in order, but the broker and consumers may still reorder (puzzle 2 shows the duplicate).</li>\n</ul>",
        hi: "<ul>\n<li>पाँच instances एक queue पढ़ते हैं: message 2, message 1 से पहले ख़त्म हो सकता है। Failure के बाद redelivery भी order बिगाड़ती है।</li>\n<li>आम तौर पर order सिर्फ़ <b>हर aggregate के लिए</b> चाहिए (एक order id के सारे messages)। Brokers यह partition keys या sessions से देते हैं: वही key उसी consumer को जाती है, order में। Throughput keys के पार बढ़ता है, एक key के अंदर नहीं।</li>\n<li>जिन designs को order नहीं चाहिए: <b>version number</b> या timestamp रखो और पुराने updates ignore करो; operations commutative बनाओ; छोटे deltas की जगह पूरी state भेजो (\"order Paid है\")।</li>\n<li>एक outbox relay outbox rows को order में रखता है, पर broker और consumers फिर भी order बदल सकते हैं (puzzle 2 में duplicate दिखता है)।</li>\n</ul>",
        hg: "<ul>\n<li>Paanch instances ek queue padhte hain: message 2, message 1 se pehle khatam ho sakta hai. Failure ke baad redelivery bhi order bigaadti hai.</li>\n<li>Aam taur par order sirf <b>har aggregate ke liye</b> chahiye (ek order id ke saare messages). Brokers yeh partition keys ya sessions se dete hain: wahi key usi consumer ko jaati hai, order mein. Throughput keys ke paar badhta hai, ek key ke andar nahi.</li>\n<li>Jin designs ko order nahi chahiye: <b>version number</b> ya timestamp rakho aur purane updates ignore karo; operations commutative banao; chhote deltas ki jagah poori state bhejo (\"order Paid hai\").</li>\n<li>Ek outbox relay outbox rows ko order mein rakhta hai, par broker aur consumers phir bhi order badal sakte hain (puzzle 2 mein duplicate dikhta hai).</li>\n</ul>"
      }
    },
    {
      id: "choreography-vs-orchestration",
      depth: "detailed",
      q: "Saga choreography or orchestration — which do you prefer and why?",
      answer: "Choreography: services react to each other's events with no central owner. Orchestration: a coordinator sends commands and tracks state; I prefer it as the flow gets longer or branches.",
      meaning: {
        hi: "Choreography: services एक-दूसरे के events पर react करती हैं, कोई central मालिक नहीं। Orchestration: एक coordinator commands भेजता है और state रखता है; flow लंबा या branching वाला हो तो मैं इसे पसंद करूँगा।",
        hg: "Choreography: services ek-doosre ke events par react karti hain, koi central maalik nahi. Orchestration: ek coordinator commands bhejta hai aur state rakhta hai; flow lamba ya branching wala ho to main ise pasand karunga."
      },
      explain: {
        en: "<ul>\n<li><b>Choreography</b>: loose coupling, no single point of failure, easy to add a listener. Hard parts: nobody sees the whole flow, cyclic dependencies creep in, and debugging means reading many services' logs (tracing helps).</li>\n<li><b>Orchestration</b>: the flow is readable in one place, timeouts and compensation are explicit, status is easy to query. Costs: an extra component, the risk of a smart orchestrator with dumb services (keep business rules in the services), and it must be durable.</li>\n<li>Rule of thumb: choreography for two or three services and a simple chain; orchestration when there are many steps, branches, deadlines or approvals. Mixing is fine: orchestration inside a bounded context, events between contexts.</li>\n<li>Either way: idempotent steps, reverse compensation, visible state (puzzle 3, section \"An orchestrated Saga\").</li>\n</ul>",
        hi: "<ul>\n<li><b>Choreography</b>: loose coupling, single point of failure नहीं, listener जोड़ना आसान। मुश्किलें: पूरा flow कोई नहीं देखता, cyclic dependencies घुस जाती हैं, और debugging का मतलब कई services के logs पढ़ना है (tracing मदद करता है)।</li>\n<li><b>Orchestration</b>: flow एक जगह पढ़ा जा सकता है, timeouts और compensation साफ़ हैं, status query करना आसान। कीमत: एक और component, \"स्मार्ट orchestrator और बुद्धू services\" का ख़तरा (business rules services में रखो), और उसका durable होना ज़रूरी।</li>\n<li>Rules of thumb: दो-तीन services और सीधी chain के लिए choreography; कई steps, branches, deadlines या approvals हों तो orchestration। मिलाना ठीक है: bounded context के अंदर orchestration, contexts के बीच events।</li>\n<li>दोनों में: idempotent steps, उल्टी compensation, दिखने वाली state (puzzle 3, section \"An orchestrated Saga\")।</li>\n</ul>",
        hg: "<ul>\n<li><b>Choreography</b>: loose coupling, single point of failure nahi, listener jodna aasaan. Mushkilein: poora flow koi nahi dekhta, cyclic dependencies ghus jaati hain, aur debugging ka matlab kai services ke logs padhna hai (tracing madad karta hai).</li>\n<li><b>Orchestration</b>: flow ek jagah padha ja sakta hai, timeouts aur compensation saaf hain, status query karna aasaan. Keemat: ek aur component, \"smart orchestrator aur buddhu services\" ka khatra (business rules services mein rakho), aur uska durable hona zaroori.</li>\n<li>Rules of thumb: do-teen services aur seedhi chain ke liye choreography; kai steps, branches, deadlines ya approvals hon to orchestration. Milana theek hai: bounded context ke andar orchestration, contexts ke beech events.</li>\n<li>Dono mein: idempotent steps, ulti compensation, dikhne wali state (puzzle 3, section \"An orchestrated Saga\").</li>\n</ul>"
      }
    },
    {
      id: "inbox-idempotent-consumer",
      depth: "detailed",
      q: "How do you build an idempotent consumer?",
      answer: "Store the message id in an inbox table with a unique key, in the same transaction as the effect, and skip repeats. Prefer naturally idempotent operations when you can.",
      meaning: {
        hi: "Message id को unique key वाली inbox table में रखो, effect की उसी transaction में, और दोहराव skip करो। जब हो सके natural idempotent operations चुनो।",
        hg: "Message id ko unique key wali inbox table mein rakho, effect ki usi transaction mein, aur dohrav skip karo. Jab ho sake natural idempotent operations chuno."
      },
      explain: {
        en: "<ul>\n<li>Inbox: <code>MessageId</code> is the primary key. Insert it and apply the effect in <b>one</b> <code>SaveChanges</code>. Two parallel copies: one hits the key, fails, is redelivered, and is then skipped.</li>\n<li>Recording the id <b>before</b> the work (separately) loses the message if the work fails (puzzle 1). Recording it long after the work allows a double effect.</li>\n<li>Natural idempotence: <code>SET status = 'Paid'</code>, upsert by key, \"create if not exists\". Not idempotent: <code>balance += amount</code>, \"send an email\" (use the inbox, or an idempotency key at the email provider).</li>\n<li>The producer needs a stable message id (not a new Guid on every retry) — the outbox row's <code>MessageId</code>. For HTTP, the client sends an <b>Idempotency-Key</b> header (Day 13).</li>\n<li>Keep inbox rows for longer than the broker's redelivery window, then clean up.</li>\n</ul>",
        hi: "<ul>\n<li>Inbox: <code>MessageId</code> primary key है। उसे insert करो और effect <b>एक</b> <code>SaveChanges</code> में लगाओ। दो parallel कॉपियाँ: एक key पर टकराकर fail होती है, redeliver होती है और फिर skip हो जाती है।</li>\n<li>Id को काम से <b>पहले</b> (अलग से) दर्ज करने पर काम fail होने पर message खो जाता है (puzzle 1)। काम के काफ़ी बाद दर्ज करने पर effect दो बार लग सकता है।</li>\n<li>Natural idempotence: <code>SET status = 'Paid'</code>, key से upsert, \"न हो तो बनाओ\"। Idempotent नहीं: <code>balance += amount</code>, \"email भेजो\" (inbox use करो, या email provider की idempotency key)।</li>\n<li>Producer को पक्का message id चाहिए (हर retry पर नया Guid नहीं) — outbox row का <code>MessageId</code>। HTTP में client <b>Idempotency-Key</b> header भेजता है (Day 13)।</li>\n<li>Inbox rows को broker की redelivery window से ज़्यादा देर रखो, फिर साफ़ करो।</li>\n</ul>",
        hg: "<ul>\n<li>Inbox: <code>MessageId</code> primary key hai. Use insert karo aur effect <b>ek</b> <code>SaveChanges</code> mein lagao. Do parallel copies: ek key par takrakar fail hoti hai, redeliver hoti hai aur phir skip ho jaati hai.</li>\n<li>Id ko kaam se <b>pehle</b> (alag se) darj karne par kaam fail hone par message kho jaata hai (puzzle 1). Kaam ke kaafi baad darj karne par effect do baar lag sakta hai.</li>\n<li>Natural idempotence: <code>SET status = 'Paid'</code>, key se upsert, \"na ho to banao\". Idempotent nahi: <code>balance += amount</code>, \"email bhejo\" (inbox use karo, ya email provider ki idempotency key).</li>\n<li>Producer ko pakka message id chahiye (har retry par naya Guid nahi) — outbox row ka <code>MessageId</code>. HTTP mein client <b>Idempotency-Key</b> header bhejta hai (Day 13).</li>\n<li>Inbox rows ko broker ki redelivery window se zyada der rakho, phir saaf karo.</li>\n</ul>"
      }
    },
    {
      id: "backoff-jitter-timeout-bulkhead",
      depth: "detailed",
      q: "Explain backoff with jitter, timeouts and bulkheads. What goes wrong without them?",
      answer: "Backoff with jitter spreads retries in time, timeouts stop waiting forever, and a bulkhead limits concurrent calls per dependency. Without them, retries synchronise and one slow service exhausts all threads.",
      meaning: {
        hi: "Jitter वाला backoff retries को समय में फैलाता है, timeouts हमेशा इंतज़ार करने से रोकते हैं, और bulkhead हर dependency की concurrent calls पर limit लगाता है। इनके बिना retries एक साथ हो जाती हैं और एक धीमी service सारे threads खा जाती है।",
        hg: "Jitter wala backoff retries ko samay mein phailata hai, timeouts hamesha intezaar karne se rokte hain, aur bulkhead har dependency ki concurrent calls par limit lagata hai. Inke bina retries ek saath ho jaati hain aur ek dheemi service saare threads kha jaati hai."
      },
      explain: {
        en: "<ul>\n<li><b>Backoff</b>: wait 200, 400, 800 ms... (capped). Constant instant retries hammer a service that is already struggling.</li>\n<li><b>Jitter</b>: randomise each delay. Without it, all clients that failed at the same moment retry at the same moment (a \"thundering herd\").</li>\n<li><b>Timeouts</b>: a per-attempt timeout (short) and a total timeout (the caller's deadline). Without them, a hung dependency holds threads and connections for a long time.</li>\n<li><b>Bulkhead</b>: a separate limit per dependency (concurrency limiter, or a separate pool), like watertight compartments in a ship. One slow payment API then cannot use up all request threads and take down the catalog pages too.</li>\n<li>Count total calls: 3 retries means up to 4 calls (puzzle 4); retries at two layers multiply (4 x 4 = 16). Retry at <b>one</b> layer.</li>\n</ul>",
        hi: "<ul>\n<li><b>Backoff</b>: 200, 400, 800 ms... रुको (cap के साथ)। लगातार तुरंत retries उस service पर हथौड़ा चलाती हैं जो पहले से जूझ रही है।</li>\n<li><b>Jitter</b>: हर delay को random करो। इसके बिना जो clients एक ही पल fail हुए वे एक ही पल retry करते हैं (\"thundering herd\")।</li>\n<li><b>Timeouts</b>: एक per-attempt timeout (छोटा) और एक total timeout (caller की deadline)। इनके बिना अटकी dependency threads और connections को बहुत देर पकड़े रहती है।</li>\n<li><b>Bulkhead</b>: हर dependency की अलग limit (concurrency limiter, या अलग pool), जहाज़ के watertight डिब्बों की तरह। तब एक धीमी payment API सारे request threads नहीं खा सकती और catalog pages भी नहीं गिरा सकती।</li>\n<li>कुल calls गिनो: 3 retries मतलब ज़्यादा से ज़्यादा 4 calls (puzzle 4); दो layers की retries गुणा होती हैं (4 x 4 = 16)। Retry <b>एक</b> layer पर करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Backoff</b>: 200, 400, 800 ms... ruko (cap ke saath). Lagaataar turant retries us service par hathauda chalati hain jo pehle se joojh rahi hai.</li>\n<li><b>Jitter</b>: har delay ko random karo. Iske bina jo clients ek hi pal fail hue woh ek hi pal retry karte hain (\"thundering herd\").</li>\n<li><b>Timeouts</b>: ek per-attempt timeout (chhota) aur ek total timeout (caller ki deadline). Inke bina atki dependency threads aur connections ko bahut der pakde rehti hai.</li>\n<li><b>Bulkhead</b>: har dependency ki alag limit (concurrency limiter, ya alag pool), jahaaz ke watertight dibbon ki tarah. Tab ek dheemi payment API saare request threads nahi kha sakti aur catalog pages bhi nahi gira sakti.</li>\n<li>Kul calls gino: 3 retries matlab zyada se zyada 4 calls (puzzle 4); do layers ki retries guna hoti hain (4 x 4 = 16). Retry <b>ek</b> layer par karo.</li>\n</ul>"
      }
    },
    {
      id: "database-per-service-reporting",
      depth: "detailed",
      q: "Each service has its own database. How do you build a report or a screen that needs data from several services?",
      answer: "Do not join across databases. Use API composition for small queries, or a read model built from events (CQRS) for reports and heavy screens, accepting eventual consistency.",
      meaning: {
        hi: "Databases के पार join मत करो। छोटे queries के लिए API composition, या reports और भारी screens के लिए events से बना read model (CQRS), eventual consistency मानकर।",
        hg: "Databases ke paar join mat karo. Chhote queries ke liye API composition, ya reports aur bhaari screens ke liye events se bana read model (CQRS), eventual consistency maankar."
      },
      explain: {
        en: "<ul>\n<li><b>Database per service</b>: only the owner reads or writes its tables. Others use its API or events. A shared database brings back tight coupling (the distributed monolith).</li>\n<li><b>API composition</b>: the gateway/BFF (or a composer service) calls the services in parallel and merges the results. Simple; but latency is the slowest call, and one down service breaks the screen — handle partial results.</li>\n<li><b>Read model</b> (Day 11, CQRS): a service subscribes to the others' events and keeps its own query-shaped table. Fast, independent, but eventually consistent and it needs idempotent event handling and a rebuild plan.</li>\n<li>A <b>reporting store</b> (warehouse) fed by events or CDC is the usual answer for analytics.</li>\n<li>Follow-up: \"Customer name changed — what about old orders?\" — decide per case: orders keep a snapshot of the name at order time (a fact), while the profile page shows the current name.</li>\n</ul>",
        hi: "<ul>\n<li><b>Database per service</b>: सिर्फ़ मालिक अपनी tables पढ़ता या लिखता है। दूसरे उसकी API या events use करते हैं। Shared database tight coupling वापस ले आता है (distributed monolith)।</li>\n<li><b>API composition</b>: gateway/BFF (या composer service) services को parallel में बुलाकर नतीजे मिलाता है। सरल है; पर latency सबसे धीमी call जितनी, और एक service down हो तो screen टूटती है — partial results सँभालो।</li>\n<li><b>Read model</b> (Day 11, CQRS): एक service दूसरों के events subscribe करके अपनी query-आकार की table रखती है। तेज़, independent, पर eventually consistent, और उसे idempotent event handling और rebuild plan चाहिए।</li>\n<li>Analytics के लिए आम जवाब है events या CDC से भरा <b>reporting store</b> (warehouse)।</li>\n<li>Follow-up: \"Customer का नाम बदला — पुराने orders का क्या?\" — हर case में तय करो: orders order के वक़्त के नाम का snapshot रखते हैं (एक fact), जबकि profile page मौजूदा नाम दिखाता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Database per service</b>: sirf maalik apni tables padhta ya likhta hai. Doosre uski API ya events use karte hain. Shared database tight coupling wapas le aata hai (distributed monolith).</li>\n<li><b>API composition</b>: gateway/BFF (ya composer service) services ko parallel mein bulakar nateeje milata hai. Saral hai; par latency sabse dheemi call jitni, aur ek service down ho to screen tootti hai — partial results sambhalo.</li>\n<li><b>Read model</b> (Day 11, CQRS): ek service doosron ke events subscribe karke apni query-aakar ki table rakhti hai. Tez, independent, par eventually consistent, aur use idempotent event handling aur rebuild plan chahiye.</li>\n<li>Analytics ke liye aam jawaab hai events ya CDC se bhara <b>reporting store</b> (warehouse).</li>\n<li>Follow-up: \"Customer ka naam badla — purane orders ka kya?\" — har case mein tay karo: orders order ke waqt ke naam ka snapshot rakhte hain (ek fact), jabki profile page maujooda naam dikhata hai.</li>\n</ul>"
      }
    },
    {
      id: "contract-versioning",
      depth: "detailed",
      q: "How do you change an API or event contract without breaking other services?",
      answer: "Make changes backward compatible: add optional fields, do not remove or rename them quietly, and version real breaking changes. Verify with consumer contract tests and run old and new versions side by side.",
      meaning: {
        hi: "बदलाव backward compatible रखो: optional fields जोड़ो, उन्हें चुपचाप हटाओ या rename मत करो, और असली breaking changes को version करो। Consumer contract tests से जाँचो और पुराना व नया version साथ-साथ चलाओ।",
        hg: "Badlaav backward compatible rakho: optional fields jodo, unhe chupchaap hatao ya rename mat karo, aur asli breaking changes ko version karo. Consumer contract tests se jaancho aur purana va naya version saath-saath chalao."
      },
      explain: {
        en: "<ul>\n<li>Producers and consumers deploy at different times, so the contract is the real boundary. Treat it like a public API even if it is internal.</li>\n<li><b>Tolerant reader</b>: consumers ignore unknown fields. Producers only add; they do not change meaning.</li>\n<li><b>Expand and contract</b>: add the new field/endpoint, migrate every consumer, then remove the old one after the last consumer has moved. For events, publish a new version (<code>OrderPlaced.v2</code>) next to the old until consumers have moved.</li>\n<li><b>Consumer-driven contract tests</b> catch a breaking change in CI before it reaches production. HTTP APIs: URL or header versioning (Day 13); gRPC/protobuf: never reuse field numbers.</li>\n<li>TL angle: an owner per contract, a schema registry or a shared contracts package with care (a shared library of domain types is a smell), and a deprecation policy with dates.</li>\n</ul>",
        hi: "<ul>\n<li>Producers और consumers अलग-अलग वक़्त पर deploy होते हैं, इसलिए contract ही असली सीमा है। उसे public API की तरह लो, चाहे internal हो।</li>\n<li><b>Tolerant reader</b>: consumers अनजान fields ignore करते हैं। Producers सिर्फ़ जोड़ते हैं; मतलब नहीं बदलते।</li>\n<li><b>Expand and contract</b>: नया field/endpoint जोड़ो, हर consumer को migrate करो, फिर आख़िरी consumer के जाने के बाद पुराना हटाओ। Events के लिए, consumers के migrate होने तक पुराने के बग़ल में नया version (<code>OrderPlaced.v2</code>) publish करो।</li>\n<li><b>Consumer-driven contract tests</b> breaking change को production तक पहुँचने से पहले CI में पकड़ लेते हैं। HTTP APIs: URL या header versioning (Day 13); gRPC/protobuf: field numbers दोबारा use मत करो।</li>\n<li>TL angle: हर contract का एक मालिक, schema registry या सावधानी से shared contracts package (domain types की shared library एक smell है), और तारीख़ों वाली deprecation policy।</li>\n</ul>",
        hg: "<ul>\n<li>Producers aur consumers alag-alag waqt par deploy hote hain, isliye contract hi asli seema hai. Use public API ki tarah lo, chahe internal ho.</li>\n<li><b>Tolerant reader</b>: consumers anjaan fields ignore karte hain. Producers sirf jodte hain; matlab nahi badalte.</li>\n<li><b>Expand and contract</b>: naya field/endpoint jodo, har consumer ko migrate karo, phir aakhri consumer ke jaane ke baad purana hatao. Events ke liye, consumers ke migrate hone tak purane ke baghal mein naya version (<code>OrderPlaced.v2</code>) publish karo.</li>\n<li><b>Consumer-driven contract tests</b> breaking change ko production tak pahunchne se pehle CI mein pakad lete hain. HTTP APIs: URL ya header versioning (Day 13); gRPC/protobuf: field numbers dobara use mat karo.</li>\n<li>TL angle: har contract ka ek maalik, schema registry ya saavdhaani se shared contracts package (domain types ki shared library ek smell hai), aur taareekhon wali deprecation policy.</li>\n</ul>"
      }
    },
    {
      id: "aspire-service-defaults",
      depth: "detailed",
      q: "What is Aspire (formerly .NET Aspire) and where does it help with microservices?",
      answer: "Aspire orchestrates a multi-service app for local development with an AppHost project, and a ServiceDefaults project adds OpenTelemetry, health checks, service discovery and HttpClient resilience.",
      meaning: {
        hi: "Aspire एक multi-service app को local development के लिए AppHost project से orchestrate करता है, और ServiceDefaults project OpenTelemetry, health checks, service discovery और HttpClient resilience जोड़ता है।",
        hg: "Aspire ek multi-service app ko local development ke liye AppHost project se orchestrate karta hai, aur ServiceDefaults project OpenTelemetry, health checks, service discovery aur HttpClient resilience jodta hai."
      },
      explain: {
        en: "<ul>\n<li><b>AppHost</b>: describes the services, databases and brokers of the system in C#, starts them together locally, and shows logs, traces and metrics in a dashboard — helpful because microservices are painful to run and debug on a laptop.</li>\n<li><b>ServiceDefaults</b>: a shared project; each service calls <code>AddServiceDefaults()</code> to get OpenTelemetry, default health check endpoints (mapped by <code>app.MapDefaultEndpoints()</code>), service discovery and resilient HttpClient settings in one line.</li>\n<li><b>Service discovery</b> in short: services call each other by logical name instead of a hard-coded address; the platform (Aspire locally, Kubernetes or DNS in production) resolves it.</li>\n<li>Aspire is not a replacement for production orchestration such as Kubernetes; it can generate or help deploy manifests. Product naming and features move quickly (the \".NET\" prefix was dropped in newer releases), so check the current docs.</li>\n</ul>",
        hi: "<ul>\n<li><b>AppHost</b>: system की services, databases और brokers को C# में describe करता है, उन्हें local में साथ start करता है, और dashboard में logs, traces और metrics दिखाता है — काम का है क्योंकि microservices को laptop पर चलाना और debug करना तकलीफ़देह है।</li>\n<li><b>ServiceDefaults</b>: एक shared project; हर service <code>AddServiceDefaults()</code> बुलाकर एक line में OpenTelemetry, default health check endpoints (mapped by <code>app.MapDefaultEndpoints()</code>), service discovery और resilient HttpClient settings पाती है।</li>\n<li><b>Service discovery</b> छोटे में: services एक-दूसरे को hard-coded address की जगह logical नाम से बुलाती हैं; platform (local में Aspire, production में Kubernetes या DNS) उसे resolve करता है।</li>\n<li>Aspire, Kubernetes जैसे production orchestration की जगह नहीं है; वह manifests बना सकता है या deploy में मदद कर सकता है। Product का नाम और features जल्दी बदलते हैं (नए releases में \".NET\" prefix हटा दिया गया), इसलिए मौजूदा docs देखो।</li>\n</ul>",
        hg: "<ul>\n<li><b>AppHost</b>: system ki services, databases aur brokers ko C# mein describe karta hai, unhe local mein saath start karta hai, aur dashboard mein logs, traces aur metrics dikhata hai — kaam ka hai kyunki microservices ko laptop par chalana aur debug karna takleefdeh hai.</li>\n<li><b>ServiceDefaults</b>: ek shared project; har service <code>AddServiceDefaults()</code> bulakar ek line mein OpenTelemetry, default health check endpoints (mapped by <code>app.MapDefaultEndpoints()</code>), service discovery aur resilient HttpClient settings paati hai.</li>\n<li><b>Service discovery</b> chhote mein: services ek-doosre ko hard-coded address ki jagah logical naam se bulati hain; platform (local mein Aspire, production mein Kubernetes ya DNS) use resolve karta hai.</li>\n<li>Aspire, Kubernetes jaise production orchestration ki jagah nahi hai; woh manifests bana sakta hai ya deploy mein madad kar sakta hai. Product ka naam aur features jaldi badalte hain (naye releases mein \".NET\" prefix hata diya gaya), isliye maujooda docs dekho.</li>\n</ul>"
      }
    },
    {
      id: "before-the-first-split",
      depth: "detailed",
      q: "As a Tech Lead, what do you put in place before the first service is split out?",
      answer: "Automated build and deploy, centralised logs, metrics and tracing, health checks, clear service ownership and a contract policy. Without them every incident becomes a guessing game.",
      meaning: {
        hi: "Automated build और deploy, एक जगह के logs, metrics और tracing, health checks, service की साफ़ ownership और contract policy। इनके बिना हर incident अंदाज़े का खेल बन जाता है।",
        hg: "Automated build aur deploy, ek jagah ke logs, metrics aur tracing, health checks, service ki saaf ownership aur contract policy. Inke bina har incident andaaze ka khel ban jaata hai."
      },
      explain: {
        en: "<ul>\n<li><b>Observability first</b>: structured logs with the trace id, the three signals in one place, dashboards for rate/errors/latency, alerts on symptoms (users hurt), not only CPU.</li>\n<li><b>Delivery</b>: one pipeline per service, repeatable deploys, rollback, health and readiness endpoints, feature flags to separate deploy from release.</li>\n<li><b>Team topology</b>: a service has one owning team (Conway's law, Day 15); a team that owns too many services is a warning. Define who is on call for what.</li>\n<li><b>Technical rules</b>: database per service, contract/versioning policy, a default resilience setup (timeouts, retries, breaker) shared through a template or Aspire-style defaults, an ADR for each border decision.</li>\n<li>Pick the first service by pain and border clarity, extract it behind the monolith (strangler), and measure: deploy frequency, lead time, incidents. System-design practice for this is Day 17.</li>\n</ul>",
        hi: "<ul>\n<li><b>Observability पहले</b>: trace id वाले structured logs, तीनों signals एक जगह, rate/errors/latency के dashboards, symptoms (users को तकलीफ़) पर alerts, सिर्फ़ CPU पर नहीं।</li>\n<li><b>Delivery</b>: हर service की एक pipeline, दोहराए जा सकने वाले deploys, rollback, health और readiness endpoints, feature flags ताकि deploy और release अलग रहें।</li>\n<li><b>Team topology</b>: एक service की एक owning team (Conway's law, Day 15); जो team बहुत सारी services की मालिक है वह चेतावनी है। तय करो कि किसकी on-call किस पर है।</li>\n<li><b>Technical rules</b>: database per service, contract/versioning policy, template या Aspire-जैसे defaults से बाँटा गया default resilience setup (timeouts, retries, breaker), हर सीमा के फ़ैसले का ADR।</li>\n<li>पहली service दर्द और साफ़ सीमा से चुनो, monolith के पीछे से निकालो (strangler), और नापो: deploy frequency, lead time, incidents। इसकी system-design practice Day 17 में है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Observability pehle</b>: trace id wale structured logs, teeno signals ek jagah, rate/errors/latency ke dashboards, symptoms (users ko takleef) par alerts, sirf CPU par nahi.</li>\n<li><b>Delivery</b>: har service ki ek pipeline, dohraye ja sakne wale deploys, rollback, health aur readiness endpoints, feature flags taaki deploy aur release alag rahein.</li>\n<li><b>Team topology</b>: ek service ki ek owning team (Conway's law, Day 15); jo team bahut saari services ki maalik hai woh chetavni hai. Tay karo ki kiski on-call kis par hai.</li>\n<li><b>Technical rules</b>: database per service, contract/versioning policy, template ya Aspire-jaise defaults se baanta gaya default resilience setup (timeouts, retries, breaker), har seema ke faisle ka ADR.</li>\n<li>Pehli service dard aur saaf seema se chuno, monolith ke peeche se nikaalo (strangler), aur naapo: deploy frequency, lead time, incidents. Iski system-design practice Day 17 mein hai.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "idempotent-consumer-mark-order",
      src: "foreach (var markFirst in new[] { true, false })\n{\n    Console.WriteLine(markFirst ? \"mark first\" : \"mark after\");\n    var consumer = new Consumer(markFirst);\n    foreach (var id in new[] { \"m1\", \"m2\", \"m2\", \"m1\", \"m3\" })\n        consumer.Receive(id);\n    Console.WriteLine(\"handled: \" + string.Join(\",\", consumer.Handled));\n}\n\nclass Consumer(bool markFirst)\n{\n    private readonly HashSet<string> _seen = [];\n    private bool _failedOnce;\n    public List<string> Handled { get; } = [];\n\n    public void Receive(string id)\n    {\n        if (_seen.Contains(id)) { Console.WriteLine($\"  skip {id}\"); return; }\n        if (markFirst) _seen.Add(id);\n        try\n        {\n            if (id == \"m2\" && !_failedOnce) { _failedOnce = true; throw new InvalidOperationException(\"db down\"); }\n            Handled.Add(id);\n            Console.WriteLine($\"  done {id}\");\n        }\n        catch (InvalidOperationException)\n        {\n            Console.WriteLine($\"  failed {id}, will be redelivered\");\n            return;\n        }\n        if (!markFirst) _seen.Add(id);\n    }\n}",
      answer: "mark first\n  done m1\n  failed m2, will be redelivered\n  skip m2\n  skip m1\n  done m3\nhandled: m1,m3\nmark after\n  done m1\n  failed m2, will be redelivered\n  done m2\n  skip m1\n  done m3\nhandled: m1,m2,m3",
      explain: {
        en: "<ul>\n<li>The broker delivers <code>m1</code> twice and <code>m2</code> twice. A duplicate is skipped in both consumers, so the idempotent-consumer idea works: <code>m1</code> is handled once.</li>\n<li>\"Mark first\" records the id <b>before</b> the work. When <code>m2</code> fails, the id is already in the set, so the redelivery is skipped and the message is <b>lost</b>. Handled: m1, m3.</li>\n<li>\"Mark after\" records the id only when the work succeeded, so the redelivered <code>m2</code> is processed. All three are handled.</li>\n<li>Lesson: the dedup record and the business effect must succeed or fail <b>together</b> — in a real service, write both in one database transaction (inbox table with a unique message id). The simple in-memory set here is only a teaching model.</li>\n</ul>",
        hi: "<ul>\n<li>Broker <code>m1</code> दो बार और <code>m2</code> दो बार deliver करता है। दोनों consumers में duplicate skip हो जाता है, इसलिए idempotent-consumer का idea चलता है: <code>m1</code> एक ही बार handle हुआ।</li>\n<li>\"Mark first\" id को काम से <b>पहले</b> दर्ज करता है। <code>m2</code> fail हुआ तो id पहले से set में है, इसलिए redelivery skip हो गई और message <b>खो गया</b>। Handled: m1, m3।</li>\n<li>\"Mark after\" id तभी दर्ज करता है जब काम सफल हो, इसलिए redeliver हुआ <code>m2</code> process होता है। तीनों handle हुए।</li>\n<li>सबक: dedup record और business effect <b>साथ में</b> सफल या fail होने चाहिए — असली service में दोनों को एक database transaction में लिखो (unique message id वाली inbox table)। यहाँ का in-memory set सिर्फ़ समझाने का model है।</li>\n</ul>",
        hg: "<ul>\n<li>Broker <code>m1</code> do baar aur <code>m2</code> do baar deliver karta hai. Dono consumers mein duplicate skip ho jaata hai, isliye idempotent-consumer ka idea chalta hai: <code>m1</code> ek hi baar handle hua.</li>\n<li>\"Mark first\" id ko kaam se <b>pehle</b> darj karta hai. <code>m2</code> fail hua to id pehle se set mein hai, isliye redelivery skip ho gayi aur message <b>kho gaya</b>. Handled: m1, m3.</li>\n<li>\"Mark after\" id tabhi darj karta hai jab kaam safal ho, isliye redeliver hua <code>m2</code> process hota hai. Teeno handle hue.</li>\n<li>Sabak: dedup record aur business effect <b>saath mein</b> safal ya fail hone chahiye — asli service mein dono ko ek database transaction mein likho (unique message id wali inbox table). Yahan ka in-memory set sirf samjhane ka model hai.</li>\n</ul>"
      }
    },
    {
      id: "outbox-relay-crash-duplicate",
      src: "var outbox = new List<OutboxRow>\n{\n    new(1, \"OrderPlaced:A\"),\n    new(2, \"OrderPlaced:B\"),\n    new(3, \"OrderPaid:A\")\n};\nvar broker = new List<string>();\nvar relay = new Relay(outbox, broker) { CrashAfterRow = 2 };\n\nrelay.Run();\nConsole.WriteLine(\"unsent after crash: \" + string.Join(\",\", outbox.Where(r => !r.Sent).Select(r => r.Id)));\n\nrelay.CrashAfterRow = null;\nrelay.Run();\n\nConsole.WriteLine(\"broker: \" + string.Join(\" | \", broker));\nConsole.WriteLine(\"duplicates: \" + (broker.Count - broker.Distinct().Count()));\nConsole.WriteLine(\"all sent: \" + outbox.All(r => r.Sent));\n\nclass OutboxRow(int id, string payload)\n{\n    public int Id { get; } = id;\n    public string Payload { get; } = payload;\n    public bool Sent { get; set; }\n}\n\nclass Relay(List<OutboxRow> outbox, List<string> broker)\n{\n    public int? CrashAfterRow { get; set; }\n\n    public void Run()\n    {\n        foreach (var row in outbox.Where(r => !r.Sent).OrderBy(r => r.Id))\n        {\n            broker.Add(row.Payload);\n            if (row.Id == CrashAfterRow)\n            {\n                Console.WriteLine($\"relay crashed after publishing row {row.Id}\");\n                return;\n            }\n            row.Sent = true;\n        }\n    }\n}",
      answer: "relay crashed after publishing row 2\nunsent after crash: 2,3\nbroker: OrderPlaced:A | OrderPlaced:B | OrderPlaced:B | OrderPaid:A\nduplicates: 1\nall sent: True",
      explain: {
        en: "<ul>\n<li>The relay publishes a row and <b>then</b> marks it sent. The crash happens between the two steps for row 2, so row 2 stays unsent even though the broker already has it.</li>\n<li>After the restart, the relay publishes row 2 again. That is <b>at-least-once</b>: nothing is lost, but there is one duplicate.</li>\n<li>The relay reads rows in <code>Id</code> order, so the order inside the broker list is still A, B, (B again), paid. Per-aggregate order is kept here because there is a single relay; several relays or retries after failures can break it.</li>\n<li>The fix is not to hope the crash never happens: the consumer must be <b>idempotent</b> (inbox / dedup by message id — see the previous puzzle). The outbox gives \"never lose\", the inbox gives \"never double-apply\".</li>\n</ul>",
        hi: "<ul>\n<li>Relay एक row publish करता है और <b>फिर</b> उसे sent mark करता है। row 2 के लिए crash इन दोनों steps के बीच होता है, इसलिए row 2 unsent रह जाती है जबकि broker के पास पहले से है।</li>\n<li>Restart के बाद relay row 2 फिर publish करता है। यही <b>at-least-once</b> है: कुछ खोता नहीं, पर एक duplicate आता है।</li>\n<li>Relay rows को <code>Id</code> order में पढ़ता है, इसलिए broker list में order फिर भी A, B, (B दोबारा), paid रहता है। यहाँ एक ही relay है इसलिए per-aggregate order बचा है; कई relays या failures के बाद retries इसे तोड़ सकते हैं।</li>\n<li>इलाज यह नहीं कि crash कभी न हो: consumer <b>idempotent</b> होना चाहिए (inbox / message id से dedup — पिछला puzzle देखो)। Outbox \"कभी खोए नहीं\" देता है, inbox \"दो बार apply न हो\" देता है।</li>\n</ul>",
        hg: "<ul>\n<li>Relay ek row publish karta hai aur <b>phir</b> use sent mark karta hai. Row 2 ke liye crash in dono steps ke beech hota hai, isliye row 2 unsent reh jaati hai jabki broker ke paas pehle se hai.</li>\n<li>Restart ke baad relay row 2 phir publish karta hai. Yahi <b>at-least-once</b> hai: kuch khota nahi, par ek duplicate aata hai.</li>\n<li>Relay rows ko <code>Id</code> order mein padhta hai, isliye broker list mein order phir bhi A, B, (B dobara), paid rehta hai. Yahan ek hi relay hai isliye per-aggregate order bacha hai; kai relays ya failures ke baad retries ise tod sakte hain.</li>\n<li>Ilaaj yeh nahi ki crash kabhi na ho: consumer <b>idempotent</b> hona chahiye (inbox / message id se dedup — pichhla puzzle dekho). Outbox \"kabhi khoye nahi\" deta hai, inbox \"do baar apply na ho\" deta hai.</li>\n</ul>"
      }
    },
    {
      id: "saga-compensation-reverse-order",
      src: "var steps = new List<Step>\n{\n    new(\"ReserveStock\", true, \"release the stock\"),\n    new(\"ChargeCard\", true, \"refund the card\"),\n    new(\"SendEmail\", true, \"send an apology email (the first email cannot be unsent)\"),\n    new(\"Ship\", false, \"nothing to undo\")\n};\n\nvar completed = new Stack<Step>();\nforeach (var step in steps)\n{\n    if (step.Succeeds)\n    {\n        Console.WriteLine(\"do \" + step.Name);\n        completed.Push(step);\n    }\n    else\n    {\n        Console.WriteLine(\"do \" + step.Name + \" -> FAILED\");\n        break;\n    }\n}\n\nwhile (completed.Count > 0)\n{\n    var step = completed.Pop();\n    Console.WriteLine($\"compensate {step.Name}: {step.Compensation}\");\n}\n\nrecord Step(string Name, bool Succeeds, string Compensation);",
      answer: "do ReserveStock\ndo ChargeCard\ndo SendEmail\ndo Ship -> FAILED\ncompensate SendEmail: send an apology email (the first email cannot be unsent)\ncompensate ChargeCard: refund the card\ncompensate ReserveStock: release the stock",
      explain: {
        en: "<ul>\n<li>A Saga has no global transaction (no 2PC), so when step 4 fails, the earlier local transactions are already committed. The saga <b>compensates</b> them.</li>\n<li>Compensation runs in <b>reverse order</b> of completion — the <code>Stack</code> gives that for free: SendEmail, then ChargeCard, then ReserveStock.</li>\n<li>The failed step (<code>Ship</code>) is <b>not</b> compensated: it never committed. Only completed steps are undone.</li>\n<li>A compensation is a new business action, not a rollback: an email cannot be unsent, so \"apology email\" is the semantic undo. Compensations should be <b>idempotent</b> too, because they can be retried.</li>\n<li>The email step is early here only to show a semantic undo; in a real design send it <b>after</b> Ship, once no step that can fail is left.</li>\n</ul>",
        hi: "<ul>\n<li>Saga में global transaction (2PC) नहीं होती, इसलिए step 4 fail होने पर पहले की local transactions commit हो चुकी हैं। Saga उन्हें <b>compensate</b> करती है।</li>\n<li>Compensation पूरे होने के <b>उल्टे order</b> में चलती है — <code>Stack</code> यह अपने आप दे देता है: SendEmail, फिर ChargeCard, फिर ReserveStock।</li>\n<li>Fail हुआ step (<code>Ship</code>) compensate <b>नहीं</b> होता: वह कभी commit ही नहीं हुआ। सिर्फ़ पूरे हुए steps undo होते हैं।</li>\n<li>Compensation एक नई business action है, rollback नहीं: email वापस नहीं हो सकता, इसलिए \"apology email\" semantic undo है। Compensations भी <b>idempotent</b> होनी चाहिए, क्योंकि उन्हें retry किया जा सकता है।</li>\n<li>Email step यहाँ सिर्फ़ semantic undo दिखाने के लिए पहले रखा है; असली design में उसे Ship के <b>बाद</b> भेजो, जब fail हो सकने वाला कोई step न बचे।</li>\n</ul>",
        hg: "<ul>\n<li>Saga mein global transaction (2PC) nahi hoti, isliye step 4 fail hone par pehle ki local transactions commit ho chuki hain. Saga unhe <b>compensate</b> karti hai.</li>\n<li>Compensation poore hone ke <b>ulte order</b> mein chalti hai — <code>Stack</code> yeh apne aap de deta hai: SendEmail, phir ChargeCard, phir ReserveStock.</li>\n<li>Fail hua step (<code>Ship</code>) compensate <b>nahi</b> hota: woh kabhi commit hi nahi hua. Sirf poore hue steps undo hote hain.</li>\n<li>Compensation ek nayi business action hai, rollback nahi: email wapas nahi ho sakta, isliye \"apology email\" semantic undo hai. Compensations bhi <b>idempotent</b> honi chahiye, kyunki unhe retry kiya ja sakta hai.</li>\n<li>Email step yahan sirf semantic undo dikhane ke liye pehle rakha hai; asli design mein use Ship ke <b>baad</b> bhejo, jab fail ho sakne wala koi step na bache.</li>\n</ul>"
      }
    },
    {
      id: "retry-backoff-schedule",
      src: "static int DelayMs(int retry, double jitterFraction)\n{\n    var exponential = Math.Min(1000, 200 * Math.Pow(2, retry - 1));\n    return (int)(exponential * jitterFraction);\n}\n\nfor (var retry = 1; retry <= 4; retry++)\n    Console.WriteLine($\"retry {retry}: {DelayMs(retry, 1.0)} ms, with jitter 0.5: {DelayMs(retry, 0.5)} ms\");\n\n// operation succeeds on the 3rd call\nvar calls = 0;\nvar waited = 0;\nfor (var attempt = 0; attempt <= 4; attempt++)\n{\n    calls++;\n    if (calls == 3) break;\n    waited += DelayMs(attempt + 1, 1.0);\n}\nConsole.WriteLine($\"succeeded on call {calls}, waited {waited} ms\");\n\n// operation always fails, MaxRetryAttempts = 4\ncalls = 0;\nwaited = 0;\nfor (var attempt = 0; attempt <= 4; attempt++)\n{\n    calls++;\n    if (attempt < 4) waited += DelayMs(attempt + 1, 1.0);\n}\nConsole.WriteLine($\"always failing: {calls} calls, waited {waited} ms, then give up\");",
      answer: "retry 1: 200 ms, with jitter 0.5: 100 ms\nretry 2: 400 ms, with jitter 0.5: 200 ms\nretry 3: 800 ms, with jitter 0.5: 400 ms\nretry 4: 1000 ms, with jitter 0.5: 500 ms\nsucceeded on call 3, waited 600 ms\nalways failing: 5 calls, waited 2400 ms, then give up",
      explain: {
        en: "<ul>\n<li>Exponential backoff: 200, 400, 800 ms... The <code>Math.Min(1000, ...)</code> cap stops the delay from growing forever, so retry 4 is 1000 ms, not 1600.</li>\n<li>Jitter multiplies the delay by a random fraction (fixed at 0.5 here only so the output is deterministic). In production the fraction is random, so many clients that failed together do not all retry at the same instant (a \"thundering herd\").</li>\n<li>If the call succeeds on the 3rd call, the client waited only twice: 200 + 400 = 600 ms.</li>\n<li>With a maximum of 4 retries, the client makes 1 + 4 = <b>5 calls</b> in total, and waits 200 + 400 + 800 + 1000 = 2400 ms before giving up. \"Retries\" and \"calls\" differ by one — a common interview slip.</li>\n<li>No real sleeping here; the schedule is only computed. Retry only calls that are safe to repeat (idempotent) — Day 13.</li>\n</ul>",
        hi: "<ul>\n<li>Exponential backoff: 200, 400, 800 ms... <code>Math.Min(1000, ...)</code> का cap delay को हमेशा बढ़ने से रोकता है, इसलिए retry 4 पर 1000 ms है, 1600 नहीं।</li>\n<li>Jitter delay को एक random fraction से गुणा करता है (यहाँ output fixed रखने के लिए 0.5)। Production में fraction random होता है, ताकि जो कई clients साथ में fail हुए वे सब एक ही पल पर retry न करें (\"thundering herd\")।</li>\n<li>Call अगर 3rd call पर सफल हो, तो client सिर्फ़ दो बार रुका: 200 + 400 = 600 ms।</li>\n<li>ज़्यादा से ज़्यादा 4 retries पर client कुल 1 + 4 = <b>5 calls</b> करता है, और हार मानने से पहले 200 + 400 + 800 + 1000 = 2400 ms रुकता है। \"Retries\" और \"calls\" में एक का फ़र्क़ है — interview की आम चूक।</li>\n<li>यहाँ असली sleep नहीं है; schedule सिर्फ़ compute हुआ है। सिर्फ़ वही calls retry करो जो दोहराने पर safe हैं (idempotent) — Day 13।</li>\n</ul>",
        hg: "<ul>\n<li>Exponential backoff: 200, 400, 800 ms... <code>Math.Min(1000, ...)</code> ka cap delay ko hamesha badhne se rokta hai, isliye retry 4 par 1000 ms hai, 1600 nahi.</li>\n<li>Jitter delay ko ek random fraction se guna karta hai (yahan output fixed rakhne ke liye 0.5). Production mein fraction random hota hai, taaki jo kai clients saath mein fail hue woh sab ek hi pal par retry na karein (\"thundering herd\").</li>\n<li>Call agar 3rd call par safal ho, to client sirf do baar ruka: 200 + 400 = 600 ms.</li>\n<li>Zyada se zyada 4 retries par client kul 1 + 4 = <b>5 calls</b> karta hai, aur haar maanne se pehle 200 + 400 + 800 + 1000 = 2400 ms rukta hai. \"Retries\" aur \"calls\" mein ek ka farq hai — interview ki aam chook.</li>\n<li>Yahan asli sleep nahi hai; schedule sirf compute hua hai. Sirf wahi calls retry karo jo dohrane par safe hain (idempotent) — Day 13.</li>\n</ul>"
      }
    },
    {
      id: "circuit-breaker-fake-clock",
      packages: [
        "Microsoft.Extensions.TimeProvider.Testing"
      ],
      src: "using Microsoft.Extensions.Time.Testing;\n\nvar clock = new FakeTimeProvider(new DateTimeOffset(2026, 1, 1, 0, 0, 0, TimeSpan.Zero));\nvar start = clock.GetUtcNow();\nvar breaker = new Breaker(failureThreshold: 3, breakDuration: TimeSpan.FromSeconds(30), clock);\n\nvoid Step(string label, bool downstreamOk)\n{\n    var at = (int)(clock.GetUtcNow() - start).TotalSeconds;\n    Console.WriteLine($\"t+{at}s {label}: {breaker.Call(downstreamOk)}\");\n}\n\nStep(\"fail\", false);\nStep(\"fail\", false);\nStep(\"fail\", false);\nclock.Advance(TimeSpan.FromSeconds(10));\nStep(\"ok call\", true);\nclock.Advance(TimeSpan.FromSeconds(20));\nStep(\"trial ok\", true);\nStep(\"fail\", false);\nStep(\"fail\", false);\nStep(\"fail\", false);\nclock.Advance(TimeSpan.FromSeconds(30));\nStep(\"trial fail\", false);\nclock.Advance(TimeSpan.FromSeconds(29));\nStep(\"ok call\", true);\nclock.Advance(TimeSpan.FromSeconds(1));\nStep(\"trial ok\", true);\n\nclass Breaker(int failureThreshold, TimeSpan breakDuration, TimeProvider clock)\n{\n    private int _failures;\n    private bool _open;\n    private DateTimeOffset _openedAt;\n\n    public string Call(bool downstreamOk)\n    {\n        var halfOpen = false;\n        if (_open)\n        {\n            if (clock.GetUtcNow() - _openedAt < breakDuration) return \"rejected, circuit Open\";\n            halfOpen = true;\n        }\n\n        if (downstreamOk)\n        {\n            _failures = 0;\n            _open = false;\n            return halfOpen ? \"trial succeeded, circuit Closed\" : \"ok, circuit Closed\";\n        }\n\n        _failures++;\n        if (halfOpen || _failures >= failureThreshold)\n        {\n            _open = true;\n            _openedAt = clock.GetUtcNow();\n            return halfOpen ? \"trial failed, circuit Open again\" : \"failure \" + _failures + \", circuit Open\";\n        }\n        return \"failure \" + _failures + \", circuit Closed\";\n    }\n}",
      answer: "t+0s fail: failure 1, circuit Closed\nt+0s fail: failure 2, circuit Closed\nt+0s fail: failure 3, circuit Open\nt+10s ok call: rejected, circuit Open\nt+30s trial ok: trial succeeded, circuit Closed\nt+30s fail: failure 1, circuit Closed\nt+30s fail: failure 2, circuit Closed\nt+30s fail: failure 3, circuit Open\nt+60s trial fail: trial failed, circuit Open again\nt+89s ok call: rejected, circuit Open\nt+90s trial ok: trial succeeded, circuit Closed",
      explain: {
        en: "<ul>\n<li>Closed: calls pass through and failures are counted. The 3rd failure reaches the threshold, so the circuit opens at t+0s.</li>\n<li>Open: calls are rejected <b>immediately</b> without touching the sick service (fail fast). At t+10s the 30 s break has not passed, so the call is rejected even though the service might be fine.</li>\n<li>After the break (t+30s) the next call is a <b>trial</b> (half-open). It succeeded, so the circuit closes and the failure count resets.</li>\n<li>A failed trial opens the circuit again for a fresh 30 s: the trial fails at t+60s, so the call at t+89s is still rejected, and only at t+90s is the next trial allowed.</li>\n<li>This hand-rolled breaker counts failures in a row. Polly v8 instead trips when the <code>FailureRatio</code> inside the <code>SamplingDuration</code> is reached, once <code>MinimumThroughput</code> calls have been seen — not after N consecutive failures.</li>\n<li>Time is controlled with <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) — no sleeping, no flaky tests. In production use the resilience library (Polly v8 / Microsoft.Extensions.Http.Resilience) instead of hand-rolling this.</li>\n</ul>",
        hi: "<ul>\n<li>Closed: calls निकलती रहती हैं और failures गिने जाते हैं। 3rd failure threshold पर पहुँचता है, इसलिए circuit t+0s पर open हो जाता है।</li>\n<li>Open: calls बीमार service को छुए बिना <b>तुरंत</b> reject होती हैं (fail fast)। t+10s पर 30 s का break पूरा नहीं हुआ, इसलिए call reject हुई, चाहे service ठीक हो चुकी हो।</li>\n<li>Break के बाद (t+30s) अगली call एक <b>trial</b> (half-open) है। वह सफल रही, इसलिए circuit close हुआ और failure count reset हो गया।</li>\n<li>Trial fail हो तो circuit नए 30 s के लिए फिर open हो जाता है: t+60s पर trial fail हुआ, इसलिए t+89s की call अब भी reject है, और t+90s पर ही अगला trial मिलता है।</li>\n<li>यह खुद लिखा breaker लगातार failures गिनता है। Polly v8 इसकी जगह तब trip होता है जब <code>SamplingDuration</code> के अंदर <code>FailureRatio</code> पहुँच जाए, और <code>MinimumThroughput</code> calls देखी जा चुकी हों — लगातार N failures पर नहीं।</li>\n<li>Time को <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) से control किया है — न sleep, न flaky tests। Production में यह खुद लिखने की जगह resilience library (Polly v8 / Microsoft.Extensions.Http.Resilience) use करो।</li>\n</ul>",
        hg: "<ul>\n<li>Closed: calls nikalti rehti hain aur failures gine jaate hain. 3rd failure threshold par pahunchta hai, isliye circuit t+0s par open ho jaata hai.</li>\n<li>Open: calls beemar service ko chhue bina <b>turant</b> reject hoti hain (fail fast). t+10s par 30 s ka break poora nahi hua, isliye call reject hui, chahe service theek ho chuki ho.</li>\n<li>Break ke baad (t+30s) agli call ek <b>trial</b> (half-open) hai. Woh safal rahi, isliye circuit close hua aur failure count reset ho gaya.</li>\n<li>Trial fail ho to circuit naye 30 s ke liye phir open ho jaata hai: t+60s par trial fail hua, isliye t+89s ki call ab bhi reject hai, aur t+90s par hi agla trial milta hai.</li>\n<li>Yeh khud likha breaker lagaataar failures ginta hai. Polly v8 iski jagah tab trip hota hai jab <code>SamplingDuration</code> ke andar <code>FailureRatio</code> pahunch jaaye, aur <code>MinimumThroughput</code> calls dekhi ja chuki hon — lagaataar N failures par nahi.</li>\n<li>Time ko <code>FakeTimeProvider</code> (package <code>Microsoft.Extensions.TimeProvider.Testing</code>) se control kiya hai — na sleep, na flaky tests. Production mein yeh khud likhne ki jagah resilience library (Polly v8 / Microsoft.Extensions.Http.Resilience) use karo.</li>\n</ul>"
      }
    },
    {
      id: "activity-w3c-trace-context",
      src: "using System.Diagnostics;\n\nvar source = new ActivitySource(\"Shop.Orders\");\n\nusing (var early = source.StartActivity(\"before-listener\"))\n    Console.WriteLine(\"no listener: \" + (early is null ? \"null\" : \"activity\"));\n\nusing var listener = new ActivityListener\n{\n    ShouldListenTo = s => s.Name == \"Shop.Orders\",\n    Sample = (ref ActivityCreationOptions<ActivityContext> _) => ActivitySamplingResult.AllDataAndRecorded\n};\nActivitySource.AddActivityListener(listener);\n\nvar parent = source.StartActivity(\"PlaceOrder\")!;\nvar child = source.StartActivity(\"ChargeCard\")!;\n\nConsole.WriteLine(\"format: \" + parent.IdFormat);\nConsole.WriteLine(\"traceparent length: \" + parent.Id!.Length);\nConsole.WriteLine(\"traceparent shape: \" + (parent.Id == $\"00-{parent.TraceId}-{parent.SpanId}-01\"));\nConsole.WriteLine(\"parent is root: \" + (parent.ParentId is null));\nConsole.WriteLine(\"same trace id: \" + (child.TraceId == parent.TraceId));\nConsole.WriteLine(\"different span id: \" + (child.SpanId != parent.SpanId));\nConsole.WriteLine(\"child parent span = parent span: \" + (child.ParentSpanId == parent.SpanId));\nConsole.WriteLine(\"current is child: \" + (Activity.Current == child));\nchild.Stop();\nConsole.WriteLine(\"current after child stop is parent: \" + (Activity.Current == parent));\nparent.Stop();\nConsole.WriteLine(\"current after all stop: \" + (Activity.Current is null ? \"null\" : \"activity\"));",
      answer: "no listener: null\nformat: W3C\ntraceparent length: 55\ntraceparent shape: True\nparent is root: True\nsame trace id: True\ndifferent span id: True\nchild parent span = parent span: True\ncurrent is child: True\ncurrent after child stop is parent: True\ncurrent after all stop: null",
      explain: {
        en: "<ul>\n<li>With <b>no listener</b>, <code>StartActivity</code> returns <code>null</code>: tracing costs almost nothing until something (OpenTelemetry) listens. That is why real code writes <code>activity?.SetTag(...)</code>.</li>\n<li>.NET uses the <b>W3C</b> format by default. The id is the <code>traceparent</code>: <code>00-&lt;32 hex trace id&gt;-&lt;16 hex span id&gt;-&lt;2 hex flags&gt;</code>, which is 55 characters long. Flag <code>01</code> means \"sampled/recorded\".</li>\n<li>The child shares the parent's <b>trace id</b> (one request = one trace) but has its own <b>span id</b>; its <code>ParentSpanId</code> is the parent's span id. That is how a tracing backend draws the tree.</li>\n<li><code>Activity.Current</code> follows the call flow (via AsyncLocal): it is the child while the child runs, and goes back to the parent after <code>Stop</code>. Between services, HttpClient sends the <code>traceparent</code> header and ASP.NET Core reads it, so the same trace id continues.</li>\n<li>The real ids are random, so the program prints only formats and relationships.</li>\n</ul>",
        hi: "<ul>\n<li><b>Listener न हो</b> तो <code>StartActivity</code> <code>null</code> लौटाता है: जब तक कोई (OpenTelemetry) सुन नहीं रहा, tracing का खर्च लगभग कुछ नहीं है। इसीलिए असली code में <code>activity?.SetTag(...)</code> लिखते हैं।</li>\n<li>.NET default में <b>W3C</b> format use करता है। Id ही <code>traceparent</code> है: <code>00-&lt;32 hex trace id&gt;-&lt;16 hex span id&gt;-&lt;2 hex flags&gt;</code>, जो 55 characters का होता है। Flag <code>01</code> का मतलब \"sampled/recorded\"।</li>\n<li>Child, parent का <b>trace id</b> share करता है (एक request = एक trace) पर उसका अपना <b>span id</b> होता है; उसका <code>ParentSpanId</code> parent का span id है। Tracing backend इसी से tree बनाता है।</li>\n<li><code>Activity.Current</code> call flow के साथ चलता है (AsyncLocal से): child चलते वक़्त वह child है, और <code>Stop</code> के बाद parent पर लौट आता है। Services के बीच HttpClient <code>traceparent</code> header भेजता है और ASP.NET Core उसे पढ़ता है, इसलिए वही trace id आगे चलता है।</li>\n<li>असली ids random होते हैं, इसलिए program सिर्फ़ formats और relationships print करता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Listener na ho</b> to <code>StartActivity</code> <code>null</code> lautata hai: jab tak koi (OpenTelemetry) sun nahi raha, tracing ka kharcha lagbhag kuch nahi hai. Isiliye asli code mein <code>activity?.SetTag(...)</code> likhte hain.</li>\n<li>.NET default mein <b>W3C</b> format use karta hai. Id hi <code>traceparent</code> hai: <code>00-&lt;32 hex trace id&gt;-&lt;16 hex span id&gt;-&lt;2 hex flags&gt;</code>, jo 55 characters ka hota hai. Flag <code>01</code> ka matlab \"sampled/recorded\".</li>\n<li>Child, parent ka <b>trace id</b> share karta hai (ek request = ek trace) par uska apna <b>span id</b> hota hai; uska <code>ParentSpanId</code> parent ka span id hai. Tracing backend isi se tree banata hai.</li>\n<li><code>Activity.Current</code> call flow ke saath chalta hai (AsyncLocal se): child chalte waqt woh child hai, aur <code>Stop</code> ke baad parent par laut aata hai. Services ke beech HttpClient <code>traceparent</code> header bhejta hai aur ASP.NET Core use padhta hai, isliye wahi trace id aage chalta hai.</li>\n<li>Asli ids random hote hain, isliye program sirf formats aur relationships print karta hai.</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Sync</b> = caller waits, tied to the uptime of the other service; <b>async</b> = message on a broker, eventual consistency.",
      "<b>API gateway</b> = one front door for auth, limits and routing (YARP); no business rules inside.",
      "<b>Queue</b>: one consumer per message; <b>topic</b>: a copy per subscription; poison messages go to the <b>dead-letter queue</b>.",
      "<b>Outbox</b>: save the event row in the same transaction as the data; a relay publishes it later (at-least-once).",
      "<b>Idempotent consumer</b>: keep handled message ids (inbox) and skip repeats; prefer SET over +=.",
      "<b>Saga</b>: local transactions plus compensations in reverse order; irreversible steps last.",
      "<b>Retry</b> with backoff on safe calls; a <b>circuit breaker</b> opens after repeated failures, then tries one call.",
      "<b>Tracing</b>: one trace id across services; for messages, carry <code>traceparent</code> inside the message.",
      "A distributed monolith (shared database, deploy-together services, long sync chains) has microservice costs without independence.",
      "Database per service; cross-service reads use API composition or a read model built from events.",
      "Observability, ownership and a contract policy come before the first split."
    ],
    meaning: {
      hi: [
        "Sync में caller इंतज़ार करता है और दूसरी service की uptime से बँधा रहता है; async में broker पर message और eventual consistency",
        "API gateway = auth, limits और routing का एक मुख्य दरवाज़ा (YARP); अंदर कोई business rule नहीं",
        "Queue में हर message एक consumer को; topic में हर subscription को एक copy; poison messages dead-letter queue में जाते हैं",
        "Outbox: event की row data के उसी transaction में save करो; relay उसे बाद में publish करता है (at-least-once)",
        "Idempotent consumer: सँभाली गई message ids रखो (inbox) और repeats छोड़ो; += की जगह SET",
        "Saga: local transactions और उल्टे order की compensations; न पलटे जा सकने वाले steps आख़िर में",
        "safe calls पर backoff के साथ retry; circuit breaker बार-बार failure पर खुल जाता है, फिर एक call आज़माता है",
        "Tracing: services के पार एक trace id; messages में <code>traceparent</code> message के अंदर साथ भेजो",
        "Distributed monolith (shared database, साथ में deploy होने वाली services, लंबी sync chains) में microservices का खर्च है पर आज़ादी नहीं।",
        "हर service का अपना database; services के पार reads के लिए API composition या events से बना read model।",
        "Observability, ownership और contract policy पहले split से पहले आती हैं।"
      ],
      hg: [
        "Sync mein caller intezaar karta hai aur doosri service ki uptime se bandha rehta hai; async mein broker par message aur eventual consistency",
        "API gateway = auth, limits aur routing ka ek mukhya darwaza (YARP); andar koi business rule nahi",
        "Queue mein har message ek consumer ko; topic mein har subscription ko ek copy; poison messages dead-letter queue mein jaate hain",
        "Outbox: event ki row data ke usi transaction mein save karo; relay use baad mein publish karta hai (at-least-once)",
        "Idempotent consumer: sambhali gayi message ids rakho (inbox) aur repeats chhodo; += ki jagah SET",
        "Saga: local transactions aur ulte order ki compensations; na palte ja sakne wale steps aakhir mein",
        "Safe calls par backoff ke saath retry; circuit breaker baar-baar failure par khul jaata hai, phir ek call aazmaata hai",
        "Tracing: services ke paar ek trace id; messages mein <code>traceparent</code> message ke andar saath bhejo",
        "Distributed monolith (shared database, saath mein deploy hone wali services, lambi sync chains) mein microservices ka kharcha hai par aazaadi nahi.",
        "Har service ka apna database; services ke paar reads ke liye API composition ya events se bana read model.",
        "Observability, ownership aur contract policy pehle split se pehle aati hain."
      ]
    }
  }
};
