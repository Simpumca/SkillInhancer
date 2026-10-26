// Day 3 — C# Advanced, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 3,
  format: "lesson",
  title: {
    en: "C# Advanced — async/await, exceptions, IDisposable & GC, records, pattern matching, nullable, Span",
    hi: "C# Advanced — async/await, exceptions, IDisposable & GC, records, pattern matching, nullable, Span (C# की गहराई)",
    hg: "C# Advanced — async/await, exceptions, IDisposable & GC, records, pattern matching, nullable, Span"
  },
  summary: {
    en: "<p>Day 3 covers the senior layer of C# in 8 short lessons on the same <b>customer-care CRM</b>. First async: <code>async/await</code>, <code>Task.WhenAll</code>, the two classic mistakes and <code>CancellationToken</code>. Then exceptions and <code>using</code>, and finally records, pattern matching and nullable reference types.</p><p>Every lesson follows the same path: what it is, why you need it, an analogy, a complete program with its output, line-by-line notes, common mistakes, a small exercise and a quick quiz. The Deep Dive keeps the details interviewers like to probe.</p>",
    hi: "<p>Day 3 में उसी <b>customer-care CRM</b> पर 8 छोटे पाठों में C# की senior परत आती है। पहले async: <code>async/await</code>, <code>Task.WhenAll</code>, दो क्लासिक ग़लतियाँ और <code>CancellationToken</code>। फिर exceptions और <code>using</code>, और आख़िर में records, pattern matching और nullable reference types।</p><p>हर पाठ एक ही क्रम में चलता है: यह क्या है, क्यों चाहिए, एक मिसाल, output के साथ पूरा program, लाइन-दर-लाइन समझ, आम ग़लतियाँ, एक छोटा exercise और एक झटपट quiz। Deep Dive में वे बारीकियाँ हैं जो interviewers अक्सर परखते हैं।</p>",
    hg: "<p>Day 3 mein usi <b>customer-care CRM</b> par 8 chhote lessons mein C# ki senior parat aati hai. Pehle async: <code>async/await</code>, <code>Task.WhenAll</code>, do classic galtiyan aur <code>CancellationToken</code>. Phir exceptions aur <code>using</code>, aur aakhir mein records, pattern matching aur nullable reference types.</p><p>Har lesson ek hi kram mein chalta hai: ye kya hai, kyun chahiye, ek misaal, output ke saath poora program, line-by-line samajh, aam galtiyan, ek chhota exercise aur ek jhatpat quiz. Deep Dive mein woh baarikiyan hain jo interviewers aksar parakhte hain.</p>"
  },
  sections: [
    {
      id: "async-await-basics",
      depth: "short",
      title: {
        en: "async/await and Task",
        hi: "async/await और Task",
        hg: "async/await aur Task"
      },
      lesson: {
        buildsOn: {
          en: "Days 1 and 2 built <code>Customer</code>, <code>SupportTicket</code> and the <code>TicketClosed</code> event, all in memory. Now they talk to a database and an SMS gateway, which are slow, so we need <code>async/await</code>.",
          hi: "Day 1 और 2 में <code>Customer</code>, <code>SupportTicket</code> और <code>TicketClosed</code> event बने, सब memory में। अब वे database और SMS gateway से बात करते हैं, जो धीमे होते हैं, इसलिए <code>async/await</code> चाहिए।",
          hg: "Day 1 aur 2 mein <code>Customer</code>, <code>SupportTicket</code> aur <code>TicketClosed</code> event bane, sab memory mein. Ab woh database aur SMS gateway se baat karte hain, jo dheeme hote hain, isliye <code>async/await</code> chahiye."
        },
        what: {
          en: "<p><b>async/await</b> lets a method wait for slow work (database, network) without blocking a thread. A <b>Task</b> is a promise: \"the result will be ready later\". <code>await</code> means: \"pause me here, and continue when the Task is done\".</p><p>It does <b>not</b> start a new thread by itself. While the method waits for I/O, no thread sits idle.</p>",
          hi: "<p><b>async/await</b> से method धीमे काम (database, network) का इंतज़ार करती है, पर thread को रोके बिना। <b>Task</b> एक वादा है: \"result बाद में तैयार होगा\"। <code>await</code> का मतलब: \"मुझे यहाँ रोको, और Task पूरा होने पर आगे बढ़ाओ\"।</p><p>यह अपने-आप नया thread <b>नहीं</b> बनाता। जब method I/O का इंतज़ार करती है, तब कोई thread खाली बैठकर नहीं रुकता।</p>",
          hg: "<p><b>async/await</b> se method dheeme kaam (database, network) ka intezaar karti hai, par thread ko roke bina. <b>Task</b> ek waada hai: \"result baad mein taiyaar hoga\". <code>await</code> ka matlab: \"mujhe yahan roko, aur Task poora hone par aage badhao\".</p><p>Ye apne-aap naya thread <b>nahi</b> banata. Jab method I/O ka intezaar karti hai, tab koi thread khaali baithkar nahi rukta.</p>"
        },
        why: {
          en: "<p>A busy CRM server fetches tickets and sends SMS for many agents at once. If each call blocks a thread, the server runs out of threads quickly. With <code>await</code>, the thread goes back to serve other agents while the database works.</p><p><b>Thread vs Task:</b> a <b>Thread</b> is an operating-system thread you create and manage yourself (costly, no result value). A <b>Task</b> is a higher-level promise of work. It can return a result, carry an exception and be combined with other Tasks.</p>",
          hi: "<p>व्यस्त CRM server एक साथ कई agents के लिए tickets लाता है और SMS भेजता है। अगर हर call एक thread को रोक दे, तो server के threads जल्दी ख़त्म हो जाएँगे। <code>await</code> से, database के काम करते समय thread दूसरे agents की सेवा में लौट जाता है।</p><p><b>Thread vs Task:</b> <b>Thread</b> operating-system का thread है जिसे आप ख़ुद बनाते और संभालते हैं (महँगा, result value नहीं)। <b>Task</b> काम का ऊँचे स्तर का वादा है। यह result लौटा सकता है, exception रख सकता है और दूसरे Tasks के साथ जोड़ा जा सकता है।</p>",
          hg: "<p>Vyast CRM server ek saath kai agents ke liye tickets laata hai aur SMS bhejta hai. Agar har call ek thread ko rok de, to server ke threads jaldi khatam ho jaayenge. <code>await</code> se, database ke kaam karte samay thread doosre agents ki seva mein laut jaata hai.</p><p><b>Thread vs Task:</b> <b>Thread</b> operating-system ka thread hai jise aap khud banate aur sambhalte hain (mehnga, result value nahi). <b>Task</b> kaam ka oonche star ka waada hai. Ye result lauta sakta hai, exception rakh sakta hai aur doosre Tasks ke saath joda ja sakta hai.</p>"
        },
        analogy: {
          en: "<p>At a dosa counter you pay and get a <b>token</b>. The cashier does not stand at the tawa waiting; he serves the next customer. When your dosa is ready, your number is called. The token is the <b>Task</b>, not standing at the tawa is <b>await</b>, and the cashier is the <b>thread</b>, free to help others.</p>",
          hi: "<p>Dosa counter पर आप पैसे देते हैं और एक <b>token</b> मिलता है। Cashier तवे के पास खड़े होकर इंतज़ार नहीं करता; वह अगले customer को संभालता है। आपका dosa तैयार होने पर आपका नंबर बुलाया जाता है। Token <b>Task</b> है, तवे के पास न खड़े रहना <b>await</b> है, और cashier <b>thread</b> है, जो दूसरों की मदद करने को आज़ाद है।</p>",
          hg: "<p>Dosa counter par aap paise dete hain aur ek <b>token</b> milta hai. Cashier tawe ke paas khade hokar intezaar nahi karta; woh agle customer ko sambhalta hai. Aapka dosa taiyaar hone par aapka number bulaya jaata hai. Token <b>Task</b> hai, tawe ke paas na khade rehna <b>await</b> hai, aur cashier <b>thread</b> hai, jo doosron ki madad karne ko aazaad hai.</p>"
        },
        focus: {
          caption: {
            en: "Thread vs Task: how you get the result back",
            hi: "Thread vs Task: result वापस कैसे मिलता है",
            hg: "Thread vs Task: result wapas kaise milta hai"
          },
          src: "// Thread: you create it, start it, wait for it. No result value comes back.\nvar thread = new Thread(() => Console.WriteLine(\"sending SMS\"));\nthread.Start();\nthread.Join();                       // the caller blocks here\n\n// Task: the result (or the exception) comes back through await.\nstring name = await FetchNameAsync();",
          check: "none"
        },
        lines: [
          {
            code: "Task<SupportTicket> pending = FetchTicketAsync(501);",
            note: {
              en: "Calling an async method starts it and gives you a <code>Task</code> at once. The work may still be going on.",
              hi: "Async method को call करते ही वह शुरू हो जाती है और आपको तुरंत एक <code>Task</code> मिलता है। काम शायद अभी चल रहा हो।",
              hg: "Async method ko call karte hi woh shuru ho jaati hai aur aapko turant ek <code>Task</code> milta hai. Kaam shayad abhi chal raha ho."
            }
          },
          {
            code: "SupportTicket ticket = await pending;",
            note: {
              en: "Here the method pauses, returns to its caller and frees the thread. When the Task completes, it continues and hands you the <code>SupportTicket</code>.",
              hi: "यहाँ method रुकती है, अपने caller के पास लौटती है और thread को आज़ाद करती है। Task पूरा होने पर आगे बढ़ती है और आपको <code>SupportTicket</code> देती है।",
              hg: "Yahan method rukti hai, apne caller ke paas lautti hai aur thread ko aazaad karti hai. Task poora hone par aage badhti hai aur aapko <code>SupportTicket</code> deti hai."
            }
          },
          {
            code: "await SendSmsAsync(ticket.Customer, $\"Ticket {ticket.Id} is open\");",
            note: {
              en: "A plain <code>Task</code> has no result, but you still <code>await</code> it so the next line runs only after the SMS is sent.",
              hi: "सादे <code>Task</code> में result नहीं होता, फिर भी आप इसे <code>await</code> करते हैं ताकि अगली line SMS भेजे जाने के बाद ही चले।",
              hg: "Saade <code>Task</code> mein result nahi hota, phir bhi aap ise <code>await</code> karte hain taaki agli line SMS bheje jaane ke baad hi chale."
            }
          },
          {
            code: "static async Task<SupportTicket> FetchTicketAsync(int id)",
            note: {
              en: "<code>async</code> allows <code>await</code> inside. The return type is <code>Task&lt;SupportTicket&gt;</code>, and the name ends with <code>Async</code> by convention.",
              hi: "<code>async</code> से अंदर <code>await</code> लिखने की छूट मिलती है। Return type <code>Task&lt;SupportTicket&gt;</code> है, और परंपरा के अनुसार नाम <code>Async</code> पर ख़त्म होता है।",
              hg: "<code>async</code> se andar <code>await</code> likhne ki chhoot milti hai. Return type <code>Task&lt;SupportTicket&gt;</code> hai, aur parampara ke anusaar naam <code>Async</code> par khatam hota hai."
            }
          },
          {
            code: "await Task.Delay(100);",
            note: {
              en: "Pretends to wait for a database. Real code would be something like <code>await db.Tickets.FindAsync(id)</code>.",
              hi: "database का इंतज़ार करने का दिखावा है। असली code में कुछ ऐसा होगा: <code>await db.Tickets.FindAsync(id)</code>।",
              hg: "Database ka intezaar karne ka dikhaava hai. Asli code mein kuch aisa hoga: <code>await db.Tickets.FindAsync(id)</code>."
            }
          },
          {
            code: "return new SupportTicket { Id = id, Customer = \"Asha\", Issue = \"Billing issue\" };",
            note: {
              en: "You return a plain <code>SupportTicket</code>; the compiler wraps it into the <code>Task&lt;SupportTicket&gt;</code> for you.",
              hi: "आप सादा <code>SupportTicket</code> return करते हैं; compiler उसे <code>Task&lt;SupportTicket&gt;</code> में अपने-आप लपेट देता है।",
              hg: "Aap saada <code>SupportTicket</code> return karte hain; compiler use <code>Task&lt;SupportTicket&gt;</code> mein apne-aap lapet deta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Believing <code>await</code> creates a new thread. It only waits without blocking; for I/O no thread is busy.</li><li>Forgetting <code>await</code>: <code>SupportTicket t = FetchTicketAsync(501);</code> is error CS0029, because you got a <code>Task</code>, not the ticket.</li><li>Marking a CPU-only method <code>async</code> and expecting it to get faster. Async helps with waiting, not with calculating.</li></ul>",
          hi: "<ul><li>यह मानना कि <code>await</code> नया thread बनाता है। यह सिर्फ़ बिना रोके इंतज़ार करता है; I/O में कोई thread व्यस्त नहीं रहता।</li><li><code>await</code> भूल जाना: <code>SupportTicket t = FetchTicketAsync(501);</code> पर error CS0029 आता है, क्योंकि मिला <code>Task</code> है, ticket नहीं।</li><li>सिर्फ़ CPU वाले method को <code>async</code> बनाकर उसके तेज़ होने की उम्मीद करना। Async इंतज़ार में मदद करता है, गणना में नहीं।</li></ul>",
          hg: "<ul><li>Ye maanna ki <code>await</code> naya thread banata hai. Ye sirf bina roke intezaar karta hai; I/O mein koi thread vyast nahi rehta.</li><li><code>await</code> bhool jaana: <code>SupportTicket t = FetchTicketAsync(501);</code> par error CS0029 aata hai, kyunki mila <code>Task</code> hai, ticket nahi.</li><li>Sirf CPU wale method ko <code>async</code> banakar uske tez hone ki ummeed karna. Async intezaar mein madad karta hai, calculation mein nahi.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>async/await</code> for I/O: database queries, HTTP calls, file reads, sending SMS or email. Skip it for tiny in-memory methods; making them async only adds noise.</p>",
          hi: "<p>I/O के लिए <code>async/await</code> इस्तेमाल करो: database queries, HTTP calls, file पढ़ना, SMS या email भेजना। छोटे in-memory methods के लिए इसे छोड़ दो; उन्हें async बनाने से सिर्फ़ शोर बढ़ता है।</p>",
          hg: "<p>I/O ke liye <code>async/await</code> use karo: database queries, HTTP calls, file padhna, SMS ya email bhejna. Chhote in-memory methods ke liye ise chhod do; unhe async banane se sirf shor badhta hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add an async method <code>GetAgentAsync(int ticketId)</code> that waits 50 ms and returns <code>\"Meena\"</code>. Await it and print <code>Agent: Meena</code>.</p>",
            hi: "<p>एक async method <code>GetAgentAsync(int ticketId)</code> जोड़ो जो 50 ms इंतज़ार करके <code>\"Meena\"</code> लौटाए। उसे await करो और <code>Agent: Meena</code> print करो।</p>",
            hg: "<p>Ek async method <code>GetAgentAsync(int ticketId)</code> jodo jo 50 ms intezaar karke <code>\"Meena\"</code> lautaye. Use await karo aur <code>Agent: Meena</code> print karo.</p>"
          },
          hint: {
            en: "<p>Copy the shape of <code>FetchTicketAsync</code>, but return <code>Task&lt;string&gt;</code>.</p>",
            hi: "<p><code>FetchTicketAsync</code> जैसा ढाँचा रखो, पर <code>Task&lt;string&gt;</code> लौटाओ।</p>",
            hg: "<p><code>FetchTicketAsync</code> jaisa dhaancha rakho, par <code>Task&lt;string&gt;</code> lautao.</p>"
          },
          solution: {
            caption: {
              en: "Solution: an async method returning a string",
              hi: "हल: string लौटाने वाला async method",
              hg: "Solution: string lautane wala async method"
            },
            src: "string agent = await GetAgentAsync(501);\nConsole.WriteLine($\"Agent: {agent}\");\n\nstatic async Task<string> GetAgentAsync(int ticketId)\n{\n    await Task.Delay(50);\n    return \"Meena\";\n}",
            check: "run",
            expected: "Agent: Meena"
          }
        },
        quiz: {
          q: {
            en: "A method reaches <code>await</code> on a Task that is <b>not finished yet</b>. What happens?",
            hi: "कोई method ऐसे Task पर <code>await</code> तक पहुँचती है जो <b>अभी पूरा नहीं हुआ</b>। क्या होता है?",
            hg: "Koi method aise Task par <code>await</code> tak pahunchti hai jo <b>abhi poora nahi hua</b>. Kya hota hai?"
          },
          options: [
            {
              en: "A new thread is created to run the rest of the method",
              hi: "Method का बाक़ी हिस्सा चलाने के लिए नया thread बनता है",
              hg: "Method ka baaki hissa chalane ke liye naya thread banta hai"
            },
            {
              en: "The thread blocks until the Task is done",
              hi: "Thread तब तक रुका रहता है जब तक Task पूरा न हो",
              hg: "Thread tab tak ruka rehta hai jab tak Task poora na ho"
            },
            {
              en: "The method returns to its caller and the thread is free; the rest runs when the Task completes",
              hi: "Method अपने caller के पास लौट जाती है और thread आज़ाद हो जाता है; बाक़ी हिस्सा Task पूरा होने पर चलता है",
              hg: "Method apne caller ke paas laut jaati hai aur thread aazaad ho jaata hai; baaki hissa Task poora hone par chalta hai"
            },
            {
              en: "The program stops with an exception",
              hi: "Program exception के साथ रुक जाता है",
              hg: "Program exception ke saath ruk jaata hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>The method pauses and gives control back to its caller, so the thread can do other work. When the Task finishes, the rest of the method (the continuation) runs.</p>",
            hi: "<p>Method रुकती है और control अपने caller को लौटा देती है, इसलिए thread दूसरा काम कर सकता है। Task पूरा होने पर method का बाक़ी हिस्सा (continuation) चलता है।</p>",
            hg: "<p>Method rukti hai aur control apne caller ko lauta deti hai, isliye thread doosra kaam kar sakta hai. Task poora hone par method ka baaki hissa (continuation) chalta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>A <b>Task</b> is a promise of a result; <code>await</code> waits for it without blocking a thread.</li><li>async/await is not multithreading; for I/O no thread waits.</li><li>Thread = managed by you, no result; Task = result, exception, cancellation, combining.</li></ul>",
          hi: "<ul><li><b>Task</b> result का वादा है; <code>await</code> बिना thread रोके उसका इंतज़ार करता है।</li><li>async/await multithreading नहीं है; I/O में कोई thread इंतज़ार नहीं करता।</li><li>Thread = आप संभालते हैं, result नहीं; Task = result, exception, cancellation, जोड़ना।</li></ul>",
          hg: "<ul><li><b>Task</b> result ka waada hai; <code>await</code> bina thread roke uska intezaar karta hai.</li><li>async/await multithreading nahi hai; I/O mein koi thread intezaar nahi karta.</li><li>Thread = aap sambhalte hain, result nahi; Task = result, exception, cancellation, jodna.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Fetch a ticket, then send an SMS",
            hi: "ticket लाओ, फिर SMS भेजो",
            hg: "Ticket lao, phir SMS bhejo"
          },
          src: "Console.WriteLine(\"1. Asking for ticket 501\");\nTask<SupportTicket> pending = FetchTicketAsync(501);\nConsole.WriteLine(\"2. Caller is free while the database works\");\n\nSupportTicket ticket = await pending;\nConsole.WriteLine($\"3. Got ticket {ticket.Id} for {ticket.Customer}\");\n\nawait SendSmsAsync(ticket.Customer, $\"Ticket {ticket.Id} is open\");\nConsole.WriteLine(\"5. Done\");\n\nstatic async Task<SupportTicket> FetchTicketAsync(int id)\n{\n    await Task.Delay(100);   // pretend database call\n    return new SupportTicket { Id = id, Customer = \"Asha\", Issue = \"Billing issue\" };\n}\n\nstatic async Task SendSmsAsync(string customer, string text)\n{\n    await Task.Delay(50);    // pretend SMS gateway\n    Console.WriteLine($\"4. SMS to {customer}: {text}\");\n}\n\npublic class SupportTicket\n{\n    public int Id { get; set; }\n    public string Customer { get; set; } = \"\";\n    public string Issue { get; set; } = \"\";\n}",
          check: "run",
          expected: "1. Asking for ticket 501\n2. Caller is free while the database works\n3. Got ticket 501 for Asha\n4. SMS to Asha: Ticket 501 is open\n5. Done"
        }
      ]
    },
    {
      id: "when-all",
      depth: "short",
      title: {
        en: "Running work together: Task.WhenAll",
        hi: "काम साथ-साथ चलाना: Task.WhenAll",
        hg: "Kaam saath-saath chalana: Task.WhenAll"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 awaited one call at a time. An agent opening ticket 501 needs the customer <b>and</b> the ticket history. Those two calls do not depend on each other, so why wait for them one by one?",
          hi: "पाठ 1 में हमने एक बार में एक call को await किया। Ticket 501 खोलने वाले agent को customer <b>और</b> ticket history दोनों चाहिए। ये दोनों calls एक-दूसरे पर निर्भर नहीं हैं, तो एक-एक करके इंतज़ार क्यों करें?",
          hg: "Lesson 1 mein humne ek baar mein ek call ko await kiya. Ticket 501 kholne wale agent ko customer <b>aur</b> ticket history dono chahiye. Ye dono calls ek-doosre par nirbhar nahi hain, to ek-ek karke intezaar kyun karein?"
        },
        what: {
          en: "<p>Awaiting two calls one after another is <b>sequential</b>: the second starts only after the first has finished. To run them together, start both first (keep the Tasks), then wait once with <code>await Task.WhenAll(...)</code>.</p><p>Calling an async method already starts its work. <code>await</code> does not start anything; it only waits.</p>",
          hi: "<p>दो calls को एक के बाद एक await करना <b>sequential</b> है: दूसरी तब शुरू होती है जब पहली पूरी हो चुकी हो। उन्हें साथ चलाने के लिए पहले दोनों शुरू करो (Tasks रख लो), फिर <code>await Task.WhenAll(...)</code> से एक बार इंतज़ार करो।</p><p>Async method को call करते ही उसका काम शुरू हो जाता है। <code>await</code> कुछ शुरू नहीं करता; वह सिर्फ़ इंतज़ार करता है।</p>",
          hg: "<p>Do calls ko ek ke baad ek await karna <b>sequential</b> hai: doosri tab shuru hoti hai jab pehli poori ho chuki ho. Unhe saath chalane ke liye pehle dono shuru karo (Tasks rakh lo), phir <code>await Task.WhenAll(...)</code> se ek baar intezaar karo.</p><p>Async method ko call karte hi uska kaam shuru ho jaata hai. <code>await</code> kuch shuru nahi karta; woh sirf intezaar karta hai.</p>"
        },
        why: {
          en: "<p>If each call takes 100 ms, two sequential calls take about 200 ms, but together they take about 100 ms. For a screen the agent waits on, that is a visible gain.</p>",
          hi: "<p>अगर हर call 100 ms लेती है, तो दो sequential calls में क़रीब 200 ms लगते हैं, पर साथ चलाने पर क़रीब 100 ms। जिस screen पर agent इंतज़ार करता है, वहाँ यह फ़र्क़ साफ़ दिखता है।</p>",
          hg: "<p>Agar har call 100 ms leti hai, to do sequential calls mein kareeb 200 ms lagte hain, par saath chalane par kareeb 100 ms. Jis screen par agent intezaar karta hai, wahan ye fark saaf dikhta hai.</p>"
        },
        analogy: {
          en: "<p>At a tea stall you can order chai, wait for it, and only then order the samosa. Or you order <b>both at once</b> and wait once. Same food, less waiting, as long as the two orders do not depend on each other.</p>",
          hi: "<p>चाय की टपरी पर आप पहले चाय मँगा सकते हैं, उसके आने का इंतज़ार करें, और तब समोसा मँगाएँ। या <b>दोनों एक साथ</b> मँगाकर एक बार इंतज़ार करें। खाना वही, इंतज़ार कम, बशर्ते दोनों orders एक-दूसरे पर निर्भर न हों।</p>",
          hg: "<p>Chai ki tapri par aap pehle chai mangwa sakte hain, uske aane ka intezaar karein, aur tab samosa mangwayein. Ya <b>dono ek saath</b> mangwakar ek baar intezaar karein. Khana wahi, intezaar kam, bashart dono orders ek-doosre par nirbhar na hon.</p>"
        },
        lines: [
          {
            code: "string customer = await LoadCustomerAsync();",
            note: {
              en: "Sequential: this line finishes completely before the next call even starts.",
              hi: "Sequential: यह line पूरी तरह ख़त्म होती है, तभी अगली call शुरू होती है।",
              hg: "Sequential: ye line poori tarah khatam hoti hai, tabhi agli call shuru hoti hai."
            }
          },
          {
            code: "Task<string> customerTask = LoadCustomerAsync();",
            note: {
              en: "No <code>await</code>: the call starts and you keep the <code>Task</code> in a variable. \"Started: customer\" prints right away.",
              hi: "<code>await</code> नहीं: call शुरू हो जाती है और आप <code>Task</code> को variable में रख लेते हैं। \"Started: customer\" तुरंत print होता है।",
              hg: "<code>await</code> nahi: call shuru ho jaati hai aur aap <code>Task</code> ko variable mein rakh lete hain. \"Started: customer\" turant print hota hai."
            }
          },
          {
            code: "Task<string> historyTask = LoadHistoryAsync();",
            note: {
              en: "The second call starts <b>before</b> the first one is done. Both are now running.",
              hi: "दूसरी call पहली के पूरी होने से <b>पहले</b> शुरू हो जाती है। अब दोनों चल रही हैं।",
              hg: "Doosri call pehli ke poori hone se <b>pehle</b> shuru ho jaati hai. Ab dono chal rahi hain."
            }
          },
          {
            code: "string[] results = await Task.WhenAll(customerTask, historyTask);",
            note: {
              en: "One <code>await</code> waits for both. The array holds the results in the order you passed the Tasks, not in the order they finished.",
              hi: "एक <code>await</code> दोनों का इंतज़ार करता है। Array में results उसी क्रम में होते हैं जिसमें आपने Tasks दिए, पूरे होने के क्रम में नहीं।",
              hg: "Ek <code>await</code> dono ka intezaar karta hai. Array mein results usi kram mein hote hain jisme aapne Tasks diye, poore hone ke kram mein nahi."
            }
          },
          {
            code: "Console.WriteLine($\"Got both: {string.Join(\" | \", results)}\");",
            note: {
              en: "<code>string.Join</code> glues the results with a separator. Customer first, history second, because that was the argument order.",
              hi: "<code>string.Join</code> results को separator से जोड़ता है। पहले customer, फिर history, क्योंकि argument का क्रम वही था।",
              hg: "<code>string.Join</code> results ko separator se jodta hai. Pehle customer, phir history, kyunki argument ka kram wahi tha."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using <code>WhenAll</code> when step 2 needs step 1's result. Then you must await step 1 first.</li><li>Running two queries together on one EF Core <code>DbContext</code>. It does not allow concurrent use (Day 5); each query needs its own context.</li><li>Starting hundreds of calls with <code>WhenAll</code> against one downstream API. Limit how many run at once.</li></ul>",
          hi: "<ul><li>जब step 2 को step 1 का result चाहिए तब <code>WhenAll</code> इस्तेमाल करना। तब पहले step 1 को await करना ही होगा।</li><li>एक ही EF Core <code>DbContext</code> पर दो queries साथ चलाना। यह एक साथ इस्तेमाल की इजाज़त नहीं देता (Day 5); हर query का अपना context चाहिए।</li><li>एक ही downstream API पर सैकड़ों calls <code>WhenAll</code> से एक साथ शुरू करना। एक बार में कितनी चलें, इसकी सीमा रखो।</li></ul>",
          hg: "<ul><li>Jab step 2 ko step 1 ka result chahiye tab <code>WhenAll</code> use karna. Tab pehle step 1 ko await karna hi hoga.</li><li>Ek hi EF Core <code>DbContext</code> par do queries saath chalana. Ye ek saath use ki ijaazat nahi deta (Day 5); har query ka apna context chahiye.</li><li>Ek hi downstream API par saikdon calls <code>WhenAll</code> se ek saath shuru karna. Ek baar mein kitni chalein, iski seema rakho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>WhenAll</code> for independent calls: customer + history, price + stock + reviews. Use sequential awaits when each step needs the previous result.</p>",
          hi: "<p>स्वतंत्र calls के लिए <code>WhenAll</code> इस्तेमाल करो: customer + history, price + stock + reviews। जब हर step को पिछले का result चाहिए, तब sequential awaits रखो।</p>",
          hg: "<p>Swatantra calls ke liye <code>WhenAll</code> use karo: customer + history, price + stock + reviews. Jab har step ko pichhle ka result chahiye, tab sequential awaits rakho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a third call, <code>LoadAgentAsync()</code>, that returns <code>\"Meena\"</code>. Start all three together and print the three results separated by <code>\" | \"</code>.</p>",
            hi: "<p>तीसरी call <code>LoadAgentAsync()</code> जोड़ो जो <code>\"Meena\"</code> लौटाए। तीनों को साथ शुरू करो और तीनों results <code>\" | \"</code> से जोड़कर print करो।</p>",
            hg: "<p>Teesri call <code>LoadAgentAsync()</code> jodo jo <code>\"Meena\"</code> lautaye. Teeno ko saath shuru karo aur teeno results <code>\" | \"</code> se jodkar print karo.</p>"
          },
          hint: {
            en: "<p><code>Task.WhenAll</code> accepts any number of Tasks of the same type.</p>",
            hi: "<p><code>Task.WhenAll</code> एक ही type के कितने भी Tasks ले सकता है।</p>",
            hg: "<p><code>Task.WhenAll</code> ek hi type ke kitne bhi Tasks le sakta hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: three calls together",
              hi: "हल: तीन calls साथ-साथ",
              hg: "Solution: teen calls saath-saath"
            },
            src: "Task<string> customerTask = LoadAsync(\"Asha\");\nTask<string> historyTask = LoadAsync(\"2 earlier tickets\");\nTask<string> agentTask = LoadAsync(\"Meena\");\n\nstring[] results = await Task.WhenAll(customerTask, historyTask, agentTask);\nConsole.WriteLine(string.Join(\" | \", results));\n\nstatic async Task<string> LoadAsync(string value)\n{\n    await Task.Delay(50);\n    return value;\n}",
            check: "run",
            expected: "Asha | 2 earlier tickets | Meena"
          }
        },
        quiz: {
          q: {
            en: "What order are the results in <code>await Task.WhenAll(a, b)</code>?",
            hi: "<code>await Task.WhenAll(a, b)</code> में results किस क्रम में होते हैं?",
            hg: "<code>await Task.WhenAll(a, b)</code> mein results kis kram mein hote hain?"
          },
          options: [
            {
              en: "The order the Tasks finished",
              hi: "जिस क्रम में Tasks पूरे हुए",
              hg: "Jis kram mein Tasks poore hue"
            },
            {
              en: "The order you passed the Tasks (a, then b)",
              hi: "जिस क्रम में आपने Tasks दिए (a, फिर b)",
              hg: "Jis kram mein aapne Tasks diye (a, phir b)"
            },
            {
              en: "Random order",
              hi: "यादृच्छिक (random) क्रम",
              hg: "Random kram"
            },
            {
              en: "Alphabetical order",
              hi: "वर्णमाला का क्रम",
              hg: "Varnmala ka kram"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The result array always follows the argument order, whichever Task finishes first. That makes the output predictable.</p>",
            hi: "<p>Result array हमेशा argument के क्रम में रहता है, चाहे कोई भी Task पहले पूरा हो। इससे output का अंदाज़ा लगाया जा सकता है।</p>",
            hg: "<p>Result array hamesha argument ke kram mein rehta hai, chahe koi bhi Task pehle poora ho. Isse output ka andaaza lagaya ja sakta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Sequential awaits run one after another; the total time adds up.</li><li>Start the calls, keep the Tasks, then <code>await Task.WhenAll(...)</code>.</li><li>Use it only for independent work; results come in argument order.</li></ul>",
          hi: "<ul><li>Sequential awaits एक के बाद एक चलते हैं; कुल समय जुड़ता जाता है।</li><li>Calls शुरू करो, Tasks रखो, फिर <code>await Task.WhenAll(...)</code>।</li><li>सिर्फ़ स्वतंत्र काम के लिए; results argument के क्रम में आते हैं।</li></ul>",
          hg: "<ul><li>Sequential awaits ek ke baad ek chalte hain; kul samay judta jaata hai.</li><li>Calls shuru karo, Tasks rakho, phir <code>await Task.WhenAll(...)</code>.</li><li>Sirf swatantra kaam ke liye; results argument ke kram mein aate hain.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "One after another, then together",
            hi: "एक के बाद एक, फिर साथ-साथ",
            hg: "Ek ke baad ek, phir saath-saath"
          },
          src: "Console.WriteLine(\"-- one after another --\");\nstring customer = await LoadCustomerAsync();\nConsole.WriteLine($\"Got {customer}\");\nstring history = await LoadHistoryAsync();\nConsole.WriteLine($\"Got {history}\");\n\nConsole.WriteLine(\"-- together with WhenAll --\");\nTask<string> customerTask = LoadCustomerAsync();\nTask<string> historyTask = LoadHistoryAsync();\nstring[] results = await Task.WhenAll(customerTask, historyTask);\nConsole.WriteLine($\"Got both: {string.Join(\" | \", results)}\");\n\nstatic async Task<string> LoadCustomerAsync()\n{\n    Console.WriteLine(\"Started: customer\");\n    await Task.Delay(100);   // pretend database call\n    return \"Asha\";\n}\n\nstatic async Task<string> LoadHistoryAsync()\n{\n    Console.WriteLine(\"Started: history\");\n    await Task.Delay(100);   // pretend database call\n    return \"2 earlier tickets\";\n}",
          check: "run",
          expected: "-- one after another --\nStarted: customer\nGot Asha\nStarted: history\nGot 2 earlier tickets\n-- together with WhenAll --\nStarted: customer\nStarted: history\nGot both: Asha | 2 earlier tickets"
        }
      ]
    },
    {
      id: "async-mistakes",
      depth: "short",
      title: {
        en: "Async mistakes: async void and .Result",
        hi: "Async की ग़लतियाँ: async void और .Result",
        hg: "Async ki galtiyan: async void aur .Result"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1 and 2 used <code>await</code> everywhere. Now the two most common ways to break async code: blocking with <code>.Result</code> and writing <code>async void</code>.",
          hi: "पाठ 1 और 2 में हमने हर जगह <code>await</code> इस्तेमाल किया। अब async code तोड़ने के दो सबसे आम तरीक़े: <code>.Result</code> से रोकना और <code>async void</code> लिखना।",
          hg: "Lesson 1 aur 2 mein humne har jagah <code>await</code> use kiya. Ab async code todne ke do sabse aam tareeke: <code>.Result</code> se rokna aur <code>async void</code> likhna."
        },
        what: {
          en: "<p><b><code>.Result</code> and <code>.Wait()</code></b> block the current thread until the Task is done. <b><code>async void</code></b> is an async method that returns nothing, so the caller cannot await it or catch its exceptions.</p><p>The safe pattern is <b>async all the way</b>: every method that awaits returns <code>Task</code> or <code>Task&lt;T&gt;</code>, and its caller awaits it.</p>",
          hi: "<p><b><code>.Result</code> और <code>.Wait()</code></b> Task पूरा होने तक मौजूदा thread को रोक देते हैं। <b><code>async void</code></b> ऐसा async method है जो कुछ नहीं लौटाता, इसलिए caller न उसे await कर सकता है, न उसके exceptions पकड़ सकता है।</p><p>सुरक्षित तरीक़ा है <b>async all the way</b>: जो भी method await करता है वह <code>Task</code> या <code>Task&lt;T&gt;</code> लौटाए, और उसका caller उसे await करे।</p>",
          hg: "<p><b><code>.Result</code> aur <code>.Wait()</code></b> Task poora hone tak maujooda thread ko rok dete hain. <b><code>async void</code></b> aisa async method hai jo kuch nahi lautata, isliye caller na use await kar sakta hai, na uske exceptions pakad sakta hai.</p><p>Surakshit tareeka hai <b>async all the way</b>: jo bhi method await karta hai woh <code>Task</code> ya <code>Task&lt;T&gt;</code> lautaye, aur uska caller use await kare.</p>"
        },
        why: {
          en: "<p>In a UI app or classic ASP.NET, <code>.Result</code> can cause a <b>deadlock</b>: the UI thread waits for the Task, while the code after <code>await</code> needs that same UI thread to finish. Both wait forever. ASP.NET Core does not deadlock this way, but blocked threads pile up under load and the server slows down (thread-pool starvation).</p><p>An exception in <code>async void</code> cannot be caught by the caller; with no UI context it can crash the whole process.</p>",
          hi: "<p>UI app या classic ASP.NET में <code>.Result</code> <b>deadlock</b> कर सकता है: UI thread Task का इंतज़ार करता है, और <code>await</code> के बाद वाले code को पूरा होने के लिए वही UI thread चाहिए। दोनों हमेशा के लिए रुक जाते हैं। ASP.NET Core में इस तरह का deadlock नहीं होता, पर load में रुके हुए threads जमा होते हैं और server धीमा हो जाता है (thread-pool starvation)।</p><p><code>async void</code> का exception caller नहीं पकड़ सकता; UI context न हो तो पूरा process crash हो सकता है।</p>",
          hg: "<p>UI app ya classic ASP.NET mein <code>.Result</code> <b>deadlock</b> kar sakta hai: UI thread Task ka intezaar karta hai, aur <code>await</code> ke baad wale code ko poora hone ke liye wahi UI thread chahiye. Dono hamesha ke liye ruk jaate hain. ASP.NET Core mein is tarah ka deadlock nahi hota, par load mein ruke hue threads jama hote hain aur server dheema ho jaata hai (thread-pool starvation).</p><p><code>async void</code> ka exception caller nahi pakad sakta; UI context na ho to poora process crash ho sakta hai.</p>"
        },
        analogy: {
          en: "<p>A small office has one washroom key. The manager holds it and waits outside for a clerk's report. The clerk finished the report but needs that key to hand it over. The manager will not move until the report arrives, the clerk cannot arrive without the key. Both wait forever. That is the deadlock.</p>",
          hi: "<p>एक छोटे office में washroom की एक ही चाबी है। Manager उसे पकड़कर बाहर clerk की report का इंतज़ार कर रहा है। Clerk ने report बना ली, पर देने के लिए उसे वही चाबी चाहिए। Manager report आने तक हिलेगा नहीं, clerk चाबी के बिना आ नहीं सकता। दोनों हमेशा इंतज़ार करते रहते हैं। यही deadlock है।</p>",
          hg: "<p>Ek chhote office mein washroom ki ek hi chaabi hai. Manager use pakadkar bahar clerk ki report ka intezaar kar raha hai. Clerk ne report bana li, par dene ke liye use wahi chaabi chahiye. Manager report aane tak hilega nahi, clerk chaabi ke bina aa nahi sakta. Dono hamesha intezaar karte rehte hain. Yahi deadlock hai.</p>"
        },
        focus: {
          caption: {
            en: "What to avoid, and the safe version",
            hi: "क्या नहीं करना, और सुरक्षित रूप",
            hg: "Kya nahi karna, aur surakshit roop"
          },
          src: "// BAD: blocks the thread; can deadlock in UI / classic ASP.NET apps\nstring name = GetCustomerNameAsync(501).Result;\n\n// BAD: nobody can await this or catch its exception\nasync void SendReminder(string customer) { /* ... */ }\n\n// GOOD: async all the way\nstring name = await GetCustomerNameAsync(501);\nasync Task SendReminderAsync(string customer) { /* ... */ }",
          check: "none"
        },
        lines: [
          {
            code: "string name = await GetCustomerNameAsync(501);",
            note: {
              en: "Safe: <code>await</code> instead of <code>.Result</code>. The thread is free while waiting.",
              hi: "सुरक्षित: <code>.Result</code> की जगह <code>await</code>। इंतज़ार के दौरान thread आज़ाद रहता है।",
              hg: "Surakshit: <code>.Result</code> ki jagah <code>await</code>. Intezaar ke dauran thread aazaad rehta hai."
            }
          },
          {
            code: "await SendReminderAsync(\"Ravi\", \"\");",
            note: {
              en: "The method returns <code>Task</code>, so the caller can await it and the exception comes back here.",
              hi: "Method <code>Task</code> लौटाती है, इसलिए caller उसे await कर सकता है और exception यहीं वापस आता है।",
              hg: "Method <code>Task</code> lautati hai, isliye caller use await kar sakta hai aur exception yahin wapas aata hai."
            }
          },
          {
            code: "catch (InvalidOperationException ex)",
            note: {
              en: "Because we awaited, an ordinary <code>try/catch</code> works. With <code>async void</code> this catch would never see the exception.",
              hi: "हमने await किया, इसलिए साधारण <code>try/catch</code> काम करता है। <code>async void</code> में यह catch exception को कभी देख ही नहीं पाता।",
              hg: "Humne await kiya, isliye saadharan <code>try/catch</code> kaam karta hai. <code>async void</code> mein ye catch exception ko kabhi dekh hi nahi paata."
            }
          },
          {
            code: "static async Task SendReminderAsync(string customer, string phone)",
            note: {
              en: "<code>async Task</code>, not <code>async void</code>. Use <code>async void</code> only for UI event handlers, with a <code>try/catch</code> inside.",
              hi: "<code>async Task</code>, <code>async void</code> नहीं। <code>async void</code> सिर्फ़ UI event handlers के लिए, और उसके अंदर <code>try/catch</code> के साथ।",
              hg: "<code>async Task</code>, <code>async void</code> nahi. <code>async void</code> sirf UI event handlers ke liye, aur uske andar <code>try/catch</code> ke saath."
            }
          },
          {
            code: "throw new InvalidOperationException($\"{customer} has no phone number\");",
            note: {
              en: "An exception thrown inside an async method is stored in the returned Task and re-thrown at the caller's <code>await</code>.",
              hi: "Async method के अंदर फेंका गया exception लौटाए गए Task में रखा जाता है और caller के <code>await</code> पर फिर से फेंका जाता है।",
              hg: "Async method ke andar phenka gaya exception lautaye gaye Task mein rakha jaata hai aur caller ke <code>await</code> par phir se phenka jaata hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Calling <code>.Result</code> or <code>.Wait()</code> in request or UI code. Await instead.</li><li>Using <code>async void</code> for normal methods. Even <code>list.ForEach(async x =&gt; ...)</code> hides one: the lambda becomes <code>async void</code>.</li><li>Forgetting <code>await</code> inside an async method (warning CS4014). The work runs, but its exception is lost.</li></ul>",
          hi: "<ul><li>Request या UI code में <code>.Result</code> या <code>.Wait()</code> बुलाना। इसकी जगह await करो।</li><li>सामान्य methods के लिए <code>async void</code> इस्तेमाल करना। <code>list.ForEach(async x =&gt; ...)</code> में भी एक छिपा होता है: वह lambda <code>async void</code> बन जाता है।</li><li>Async method के अंदर Task लौटाने वाली call पर <code>await</code> भूल जाना (warning CS4014)। काम चलता है, पर उसका exception खो जाता है।</li></ul>",
          hg: "<ul><li>Request ya UI code mein <code>.Result</code> ya <code>.Wait()</code> bulana. Iski jagah await karo.</li><li>Saamanya methods ke liye <code>async void</code> use karna. <code>list.ForEach(async x =&gt; ...)</code> mein bhi ek chhipa hota hai: woh lambda <code>async void</code> ban jaata hai.</li><li>Async method ke andar Task lautane wali call par <code>await</code> bhool jaana (warning CS4014). Kaam chalta hai, par uska exception kho jaata hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Always return <code>Task</code> or <code>Task&lt;T&gt;</code> and await it. Keep <code>async void</code> for UI event handlers. If a sync API forces you to block (for example the very top of an old <code>Main</code>), do it once at the top and write down why.</p>",
          hi: "<p>हमेशा <code>Task</code> या <code>Task&lt;T&gt;</code> लौटाओ और उसे await करो। <code>async void</code> UI event handlers के लिए रखो। अगर कोई sync API रोकने पर मजबूर करे (जैसे पुराने <code>Main</code> की सबसे ऊपरी जगह), तो उसे सबसे ऊपर एक बार करो और कारण लिख दो।</p>",
          hg: "<p>Hamesha <code>Task</code> ya <code>Task&lt;T&gt;</code> lautao aur use await karo. <code>async void</code> UI event handlers ke liye rakho. Agar koi sync API rokne par majboor kare (jaise purane <code>Main</code> ki sabse upari jagah), to use sabse upar ek baar karo aur kaaran likh do.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a method <code>GetPhoneAsync(string customer)</code> that returns <code>\"\"</code> for <code>\"Ravi\"</code> and <code>\"98765 43210\"</code> for anyone else. Await it for <code>\"Neha\"</code> and print <code>Phone: 98765 43210</code>.</p>",
            hi: "<p>एक method <code>GetPhoneAsync(string customer)</code> जोड़ो जो <code>\"Ravi\"</code> के लिए <code>\"\"</code> और बाक़ी सबके लिए <code>\"98765 43210\"</code> लौटाए। <code>\"Neha\"</code> के लिए उसे await करो और <code>Phone: 98765 43210</code> print करो।</p>",
            hg: "<p>Ek method <code>GetPhoneAsync(string customer)</code> jodo jo <code>\"Ravi\"</code> ke liye <code>\"\"</code> aur baaki sabke liye <code>\"98765 43210\"</code> lautaye. <code>\"Neha\"</code> ke liye use await karo aur <code>Phone: 98765 43210</code> print karo.</p>"
          },
          hint: {
            en: "<p>Return type <code>Task&lt;string&gt;</code>, and call it with <code>await</code>, not <code>.Result</code>.</p>",
            hi: "<p>Return type <code>Task&lt;string&gt;</code>, और उसे <code>.Result</code> से नहीं, <code>await</code> से call करो।</p>",
            hg: "<p>Return type <code>Task&lt;string&gt;</code>, aur use <code>.Result</code> se nahi, <code>await</code> se call karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: async all the way",
              hi: "हल: async all the way",
              hg: "Solution: async all the way"
            },
            src: "string phone = await GetPhoneAsync(\"Neha\");\nConsole.WriteLine($\"Phone: {phone}\");\n\nstatic async Task<string> GetPhoneAsync(string customer)\n{\n    await Task.Delay(10);\n    return customer == \"Ravi\" ? \"\" : \"98765 43210\";\n}",
            check: "run",
            expected: "Phone: 98765 43210"
          }
        },
        quiz: {
          q: {
            en: "Why is <code>async void</code> a problem in a normal (non-event-handler) method?",
            hi: "सामान्य (event handler नहीं) method में <code>async void</code> समस्या क्यों है?",
            hg: "Saamanya (event handler nahi) method mein <code>async void</code> samasya kyun hai?"
          },
          options: [
            {
              en: "It runs slower than <code>async Task</code>",
              hi: "यह <code>async Task</code> से धीमा चलता है",
              hg: "Ye <code>async Task</code> se dheema chalta hai"
            },
            {
              en: "It always blocks the UI thread",
              hi: "यह हमेशा UI thread को रोकता है",
              hg: "Ye hamesha UI thread ko rokta hai"
            },
            {
              en: "It cannot contain <code>await</code>",
              hi: "इसमें <code>await</code> नहीं लिख सकते",
              hg: "Isme <code>await</code> nahi likh sakte"
            },
            {
              en: "The caller cannot await it or catch its exceptions, and an unhandled one can crash the process",
              hi: "Caller न उसे await कर सकता है, न उसके exceptions पकड़ सकता है, और बिना संभाला exception process crash कर सकता है",
              hg: "Caller na use await kar sakta hai, na uske exceptions pakad sakta hai, aur bina sambhala exception process crash kar sakta hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p><code>async void</code> gives the caller no Task, so there is nothing to await and nowhere to catch the exception. UI event handlers are the one accepted exception, because the event signature requires <code>void</code>.</p>",
            hi: "<p><code>async void</code> caller को कोई Task नहीं देता, इसलिए await करने को कुछ नहीं और exception पकड़ने की कोई जगह नहीं। UI event handlers एकमात्र स्वीकृत अपवाद हैं, क्योंकि event की signature <code>void</code> माँगती है।</p>",
            hg: "<p><code>async void</code> caller ko koi Task nahi deta, isliye await karne ko kuch nahi aur exception pakadne ki koi jagah nahi. UI event handlers ekmaatra sweekrit apvaad hain, kyunki event ki signature <code>void</code> maangti hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Never block with <code>.Result</code> or <code>.Wait()</code>; <code>await</code> instead.</li><li>Return <code>Task</code>, not <code>void</code>; <code>async void</code> only for UI event handlers.</li><li>Async all the way: awaiting code returns a Task and its caller awaits it.</li></ul>",
          hi: "<ul><li><code>.Result</code> या <code>.Wait()</code> से कभी न रोको; इसकी जगह <code>await</code>।</li><li><code>void</code> नहीं, <code>Task</code> लौटाओ; <code>async void</code> सिर्फ़ UI event handlers के लिए।</li><li>Async all the way: await करने वाला code Task लौटाए और उसका caller उसे await करे।</li></ul>",
          hg: "<ul><li><code>.Result</code> ya <code>.Wait()</code> se kabhi na roko; iski jagah <code>await</code>.</li><li><code>void</code> nahi, <code>Task</code> lautao; <code>async void</code> sirf UI event handlers ke liye.</li><li>Async all the way: await karne wala code Task lautaye aur uska caller use await kare.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "The safe pattern: async all the way",
            hi: "सुरक्षित तरीक़ा: async all the way",
            hg: "Surakshit tareeka: async all the way"
          },
          src: "string name = await GetCustomerNameAsync(501);\nConsole.WriteLine($\"Customer: {name}\");\n\ntry\n{\n    await SendReminderAsync(\"Ravi\", \"\");\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine($\"Caught: {ex.Message}\");\n}\n\nawait SendReminderAsync(\"Asha\", \"98765 43210\");\n\nstatic async Task<string> GetCustomerNameAsync(int ticketId)\n{\n    await Task.Delay(10);    // pretend database call\n    return \"Asha\";\n}\n\nstatic async Task SendReminderAsync(string customer, string phone)\n{\n    await Task.Delay(10);    // pretend SMS gateway\n    if (phone == \"\")\n        throw new InvalidOperationException($\"{customer} has no phone number\");\n    Console.WriteLine($\"Reminder sent to {customer} on {phone}\");\n}",
          check: "run",
          expected: "Customer: Asha\nCaught: Ravi has no phone number\nReminder sent to Asha on 98765 43210"
        }
      ]
    },
    {
      id: "cancellation-token",
      depth: "short",
      title: {
        en: "CancellationToken: stop work politely",
        hi: "CancellationToken: काम को शिष्टता से रोकना",
        hg: "CancellationToken: kaam ko shishtata se rokna"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 kept async code safe. Now an agent starts a long ticket search and presses <b>Cancel</b>. The search should stop at once and stop wasting the database.",
          hi: "पाठ 3 में async code सुरक्षित रहा। अब एक agent लंबी ticket search शुरू करता है और <b>Cancel</b> दबा देता है। Search तुरंत रुकनी चाहिए और database का समय बरबाद नहीं होना चाहिए।",
          hg: "Lesson 3 mein async code surakshit raha. Ab ek agent lambi ticket search shuru karta hai aur <b>Cancel</b> daba deta hai. Search turant rukni chahiye aur database ka samay barbaad nahi hona chahiye."
        },
        what: {
          en: "<p>A <b><code>CancellationTokenSource</code></b> is the cancel button (<code>Cancel()</code>). Its <b><code>Token</code></b> is a read-only signal you pass down to your async methods. The running code checks the token, or passes it to an API that does.</p><p>Cancellation is <b>cooperative</b>: nothing is killed. The code stops only when it looks at the token, and then it throws <code>OperationCanceledException</code>. For a timeout, call <code>cts.CancelAfter(...)</code>.</p>",
          hi: "<p><b><code>CancellationTokenSource</code></b> cancel का बटन है (<code>Cancel()</code>)। उसका <b><code>Token</code></b> सिर्फ़-पढ़ने वाला संकेत है जिसे आप अपने async methods को देते हैं। चलता हुआ code token को देखता है, या उसे ऐसे API को देता है जो देखता है।</p><p>Cancellation <b>cooperative</b> है: कुछ भी ज़बरदस्ती नहीं मारा जाता। Code तभी रुकता है जब वह token देखे, और तब <code>OperationCanceledException</code> फेंकता है। Timeout के लिए <code>cts.CancelAfter(...)</code> बुलाओ।</p>",
          hg: "<p><b><code>CancellationTokenSource</code></b> cancel ka button hai (<code>Cancel()</code>). Uska <b><code>Token</code></b> sirf-padhne wala sanket hai jise aap apne async methods ko dete hain. Chalta hua code token ko dekhta hai, ya use aise API ko deta hai jo dekhta hai.</p><p>Cancellation <b>cooperative</b> hai: kuch bhi zabardasti nahi maara jaata. Code tabhi rukta hai jab woh token dekhe, aur tab <code>OperationCanceledException</code> phenkta hai. Timeout ke liye <code>cts.CancelAfter(...)</code> bulao.</p>"
        },
        why: {
          en: "<p>Without a token, a search keeps running after the agent closed the screen. In ASP.NET Core you add a <code>CancellationToken</code> parameter to an action; it is tied to the request, so work stops when the client disconnects.</p>",
          hi: "<p>Token के बिना, agent के screen बंद करने के बाद भी search चलती रहती है। ASP.NET Core में action में <code>CancellationToken</code> parameter जोड़ते हैं; वह request से जुड़ा होता है, इसलिए client के disconnect होते ही काम रुक जाता है।</p>",
          hg: "<p>Token ke bina, agent ke screen band karne ke baad bhi search chalti rehti hai. ASP.NET Core mein action mein <code>CancellationToken</code> parameter jodte hain; woh request se juda hota hai, isliye client ke disconnect hote hi kaam ruk jaata hai.</p>"
        },
        analogy: {
          en: "<p>When you cancel a food-app order, nobody runs into the kitchen and snatches the pan. The kitchen <b>checks the order status before each step</b> and stops politely. The status flag is the token.</p>",
          hi: "<p>Food-app पर order cancel करने पर कोई रसोई में घुसकर कड़ाही नहीं छीनता। रसोई <b>हर क़दम से पहले order का status देखती है</b> और शिष्टता से रुक जाती है। वह status flag ही token है।</p>",
          hg: "<p>Food-app par order cancel karne par koi rasoi mein ghuskar kadhai nahi chheenta. Rasoi <b>har kadam se pehle order ka status dekhti hai</b> aur shishtata se ruk jaati hai. Woh status flag hi token hai.</p>"
        },
        lines: [
          {
            code: "using var cts = new CancellationTokenSource();",
            note: {
              en: "Creates the cancel button. It is <code>IDisposable</code>, so <code>using</code> cleans it up (lesson 6).",
              hi: "Cancel का बटन बनाता है। यह <code>IDisposable</code> है, इसलिए <code>using</code> उसे साफ़ करता है (पाठ 6)।",
              hg: "Cancel ka button banata hai. Ye <code>IDisposable</code> hai, isliye <code>using</code> use saaf karta hai (lesson 6)."
            }
          },
          {
            code: "if (found == 503) cts.Cancel();",
            note: {
              en: "The agent clicks Cancel after the third ticket. This only raises the signal; it does not stop anything by itself.",
              hi: "Agent तीसरे ticket के बाद Cancel दबाता है। यह सिर्फ़ संकेत उठाता है; अपने-आप कुछ नहीं रोकता।",
              hg: "Agent teesre ticket ke baad Cancel dabata hai. Ye sirf sanket uthata hai; apne-aap kuch nahi rokta."
            }
          },
          {
            code: "ct.ThrowIfCancellationRequested();",
            note: {
              en: "The cooperative check: if cancel was requested, throw <code>OperationCanceledException</code> and leave the loop.",
              hi: "Cooperative जाँच: अगर cancel माँगा गया है, तो <code>OperationCanceledException</code> फेंको और loop से निकलो।",
              hg: "Cooperative jaanch: agar cancel manga gaya hai, to <code>OperationCanceledException</code> phenko aur loop se niklo."
            }
          },
          {
            code: "await Task.Delay(10, ct);",
            note: {
              en: "Many async APIs accept a token (<code>HttpClient</code>, EF Core, <code>Task.Delay</code>). Pass it down so they stop too.",
              hi: "कई async APIs token लेते हैं (<code>HttpClient</code>, EF Core, <code>Task.Delay</code>)। उसे नीचे तक दो ताकि वे भी रुकें।",
              hg: "Kai async APIs token lete hain (<code>HttpClient</code>, EF Core, <code>Task.Delay</code>). Use neeche tak do taaki woh bhi rukein."
            }
          },
          {
            code: "catch (OperationCanceledException)",
            note: {
              en: "Cancellation we asked for is normal, not an error. Handle it quietly; do not log it as a failure.",
              hi: "जो cancellation हमने ख़ुद माँगी, वह सामान्य है, error नहीं। उसे चुपचाप संभालो; failure की तरह log मत करो।",
              hg: "Jo cancellation humne khud maangi, woh saamanya hai, error nahi. Use chupchaap sambhalo; failure ki tarah log mat karo."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Accepting a token but never checking it or passing it down. Then <code>Cancel()</code> changes nothing.</li><li>Logging <code>OperationCanceledException</code> as an error, or swallowing it with a broad <code>catch (Exception)</code>.</li><li>Not disposing the <code>CancellationTokenSource</code>, especially when you use <code>CancelAfter</code>. Wrap it in <code>using</code>.</li></ul>",
          hi: "<ul><li>Token लेना पर उसे कभी न जाँचना और न नीचे देना। तब <code>Cancel()</code> से कुछ नहीं बदलता।</li><li><code>OperationCanceledException</code> को error की तरह log करना, या चौड़े <code>catch (Exception)</code> से निगल जाना।</li><li><code>CancellationTokenSource</code> को dispose न करना, ख़ासकर <code>CancelAfter</code> के साथ। उसे <code>using</code> में रखो।</li></ul>",
          hg: "<ul><li>Token lena par use kabhi na jaanchna aur na neeche dena. Tab <code>Cancel()</code> se kuch nahi badalta.</li><li><code>OperationCanceledException</code> ko error ki tarah log karna, ya chaude <code>catch (Exception)</code> se nigal jaana.</li><li><code>CancellationTokenSource</code> ko dispose na karna, khaaskar <code>CancelAfter</code> ke saath. Use <code>using</code> mein rakho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Accept a <code>CancellationToken</code> in every public async method that does I/O, and pass it to everything you call. For tiny CPU loops, checking the token on every iteration is wasteful; check every N items.</p>",
          hi: "<p>I/O करने वाले हर public async method में <code>CancellationToken</code> लो, और जो भी call करो उसे दो। छोटे CPU loops में हर iteration पर token जाँचना फ़ालतू है; हर N items पर जाँचो।</p>",
          hg: "<p>I/O karne wale har public async method mein <code>CancellationToken</code> lo, aur jo bhi call karo use do. Chhote CPU loops mein har iteration par token jaanchna faltu hai; har N items par jaancho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Change the program so the agent cancels after ticket <b>502</b> instead. Print the found tickets and the cancel message.</p>",
            hi: "<p>Program बदलो ताकि agent ticket <b>502</b> के बाद cancel करे। मिले हुए tickets और cancel वाला संदेश print करो।</p>",
            hg: "<p>Program badlo taaki agent ticket <b>502</b> ke baad cancel kare. Mile hue tickets aur cancel wala sandesh print karo.</p>"
          },
          hint: {
            en: "<p>Only one number in the <code>if</code> needs to change.</p>",
            hi: "<p><code>if</code> में सिर्फ़ एक संख्या बदलनी है।</p>",
            hg: "<p><code>if</code> mein sirf ek sankhya badalni hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: cancel after 502",
              hi: "हल: 502 के बाद cancel",
              hg: "Solution: 502 ke baad cancel"
            },
            src: "using var cts = new CancellationTokenSource();\ntry\n{\n    await SearchAsync(cts.Token, id =>\n    {\n        Console.WriteLine($\"Found ticket {id}\");\n        if (id == 502) cts.Cancel();\n    });\n}\ncatch (OperationCanceledException)\n{\n    Console.WriteLine(\"Search cancelled by the agent\");\n}\n\nstatic async Task SearchAsync(CancellationToken ct, Action<int> onFound)\n{\n    for (int id = 501; id <= 510; id++)\n    {\n        ct.ThrowIfCancellationRequested();\n        await Task.Delay(10, ct);\n        onFound(id);\n    }\n}",
            check: "run",
            expected: "Found ticket 501\nFound ticket 502\nSearch cancelled by the agent"
          }
        },
        quiz: {
          q: {
            en: "What does <code>cts.Cancel()</code> actually do?",
            hi: "<code>cts.Cancel()</code> असल में क्या करता है?",
            hg: "<code>cts.Cancel()</code> asal mein kya karta hai?"
          },
          options: [
            {
              en: "Kills the running thread immediately",
              hi: "चलते thread को तुरंत मार देता है",
              hg: "Chalte thread ko turant maar deta hai"
            },
            {
              en: "Raises a signal; the code stops only when it checks the token or passes it to an API that does",
              hi: "संकेत उठाता है; code तभी रुकता है जब वह token जाँचे या उसे ऐसे API को दे जो जाँचता है",
              hg: "Sanket uthata hai; code tabhi rukta hai jab woh token jaanche ya use aise API ko de jo jaanchta hai"
            },
            {
              en: "Deletes the tickets found so far",
              hi: "अब तक मिले tickets मिटा देता है",
              hg: "Ab tak mile tickets mita deta hai"
            },
            {
              en: "Does nothing unless <code>Task.Delay</code> is used",
              hi: "कुछ नहीं करता जब तक <code>Task.Delay</code> न हो",
              hg: "Kuch nahi karta jab tak <code>Task.Delay</code> na ho"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>.NET cancellation is cooperative. <code>Cancel()</code> only flips the token to \"cancelled\"; your code must look at it (or pass it on) to actually stop.</p>",
            hi: "<p>.NET की cancellation cooperative है। <code>Cancel()</code> सिर्फ़ token को \"cancelled\" कर देता है; रुकने के लिए आपके code को उसे देखना (या आगे देना) पड़ेगा।</p>",
            hg: "<p>.NET ki cancellation cooperative hai. <code>Cancel()</code> sirf token ko \"cancelled\" kar deta hai; rukne ke liye aapke code ko use dekhna (ya aage dena) padega.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>CancellationTokenSource</code> = the cancel button; <code>Token</code> = the signal you pass down.</li><li>Cancellation is cooperative: check the token or pass it to APIs that accept it.</li><li>Expect <code>OperationCanceledException</code> and treat it as normal.</li></ul>",
          hi: "<ul><li><code>CancellationTokenSource</code> = cancel का बटन; <code>Token</code> = वह संकेत जो आप नीचे देते हैं।</li><li>Cancellation cooperative है: token जाँचो या उसे उन APIs को दो जो लेते हैं।</li><li><code>OperationCanceledException</code> की उम्मीद रखो और उसे सामान्य मानो।</li></ul>",
          hg: "<ul><li><code>CancellationTokenSource</code> = cancel ka button; <code>Token</code> = woh sanket jo aap neeche dete hain.</li><li>Cancellation cooperative hai: token jaancho ya use un APIs ko do jo lete hain.</li><li><code>OperationCanceledException</code> ki ummeed rakho aur use saamanya maano.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "An agent cancels a long ticket search",
            hi: "Agent लंबी ticket search को cancel करता है",
            hg: "Agent lambi ticket search ko cancel karta hai"
          },
          src: "using var cts = new CancellationTokenSource();\n\ntry\n{\n    await SearchAsync(\"billing\", cts.Token, found =>\n    {\n        Console.WriteLine($\"Found ticket {found}\");\n        if (found == 503) cts.Cancel();   // the agent clicks Cancel\n    });\n}\ncatch (OperationCanceledException)\n{\n    Console.WriteLine(\"Search cancelled by the agent\");\n}\n\nstatic async Task SearchAsync(string text, CancellationToken ct, Action<int> onFound)\n{\n    Console.WriteLine($\"Searching for '{text}'\");\n    for (int id = 501; id <= 510; id++)\n    {\n        ct.ThrowIfCancellationRequested();   // cooperative check\n        await Task.Delay(10, ct);            // pretend to scan one ticket\n        onFound(id);\n    }\n}",
          check: "run",
          expected: "Searching for 'billing'\nFound ticket 501\nFound ticket 502\nFound ticket 503\nSearch cancelled by the agent"
        }
      ]
    },
    {
      id: "exceptions",
      depth: "short",
      title: {
        en: "Exceptions: throw, catch, finally",
        hi: "Exceptions: throw, catch और finally",
        hg: "Exceptions: throw, catch aur finally"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 showed an exception travelling back through an <code>await</code>. Now we look at exceptions themselves: what happens when an agent tries to close a ticket that does not exist.",
          hi: "पाठ 3 में हमने देखा कि exception <code>await</code> के रास्ते वापस आता है। अब exceptions को ख़ुद देखते हैं: जब agent ऐसा ticket बंद करने की कोशिश करे जो मौजूद ही नहीं, तब क्या होता है।",
          hg: "Lesson 3 mein humne dekha ki exception <code>await</code> ke raaste wapas aata hai. Ab exceptions ko khud dekhte hain: jab agent aisa ticket band karne ki koshish kare jo maujood hi nahi, tab kya hota hai."
        },
        what: {
          en: "<p>An <b>exception</b> is an object that says \"this operation failed\". <code>throw</code> raises it and stops the current method. <code>try</code> holds risky code, <code>catch</code> handles one kind of failure, and <code>finally</code> runs <b>always</b>, whether the code succeeded or threw.</p><p>Inside a <code>catch</code>, <code>throw;</code> sends the same exception further up and <b>keeps its stack trace</b>. <code>throw ex;</code> <b>resets</b> the stack trace to the current line.</p>",
          hi: "<p><b>Exception</b> एक object है जो कहता है \"यह काम फ़ेल हो गया\"। <code>throw</code> उसे उठाता है और मौजूदा method को रोक देता है। <code>try</code> में जोखिम वाला code होता है, <code>catch</code> एक तरह की विफलता संभालता है, और <code>finally</code> <b>हमेशा</b> चलता है, चाहे code सफल रहा हो या exception फेंका हो।</p><p><code>catch</code> के अंदर <code>throw;</code> वही exception ऊपर भेजता है और उसका <b>stack trace बचाकर रखता है</b>। <code>throw ex;</code> stack trace को मौजूदा line पर <b>दोबारा शुरू</b> कर देता है।</p>",
          hg: "<p><b>Exception</b> ek object hai jo kehta hai \"ye kaam fail ho gaya\". <code>throw</code> use uthata hai aur maujooda method ko rok deta hai. <code>try</code> mein jokhim wala code hota hai, <code>catch</code> ek tarah ki vifalta sambhalta hai, aur <code>finally</code> <b>hamesha</b> chalta hai, chahe code safal raha ho ya exception phenka ho.</p><p><code>catch</code> ke andar <code>throw;</code> wahi exception upar bhejta hai aur uska <b>stack trace bachakar rakhta hai</b>. <code>throw ex;</code> stack trace ko maujooda line par <b>dobara shuru</b> kar deta hai.</p>"
        },
        why: {
          en: "<p>If closing a missing ticket silently did nothing, the agent would think it was closed. An exception stops the flow with a clear reason. And the stack trace tells you <b>where</b> the failure really started; <code>throw ex;</code> destroys that clue (analyzer warning CA2200).</p>",
          hi: "<p>अगर किसी मौजूद न होने वाले ticket को बंद करना चुपचाप कुछ न करे, तो agent सोचेगा कि वह बंद हो गया। Exception साफ़ कारण के साथ flow रोक देता है। और stack trace बताता है कि विफलता असल में <b>कहाँ</b> शुरू हुई; <code>throw ex;</code> यह सुराग़ मिटा देता है (analyzer warning CA2200)।</p>",
          hg: "<p>Agar kisi maujood na hone wale ticket ko band karna chupchaap kuch na kare, to agent sochega ki woh band ho gaya. Exception saaf kaaran ke saath flow rok deta hai. Aur stack trace batata hai ki vifalta asal mein <b>kahan</b> shuru hui; <code>throw ex;</code> ye suraag mita deta hai (analyzer warning CA2200).</p>"
        },
        analogy: {
          en: "<p>When an ATM cannot give cash, it does not silently hand over half the money. It <b>stops</b>, shows a clear error, and <b>always returns your card</b>. Stopping with a reason is <code>throw</code>; returning the card no matter what is <code>finally</code>.</p>",
          hi: "<p>जब ATM cash नहीं दे सकता, तो वह चुपचाप आधे पैसे नहीं थमा देता। वह <b>रुक जाता है</b>, साफ़ error दिखाता है, और <b>कार्ड हमेशा लौटाता है</b>। कारण के साथ रुकना <code>throw</code> है; चाहे कुछ भी हो कार्ड लौटाना <code>finally</code> है।</p>",
          hg: "<p>Jab ATM cash nahi de sakta, to woh chupchaap aadhe paise nahi thama deta. Woh <b>ruk jaata hai</b>, saaf error dikhata hai, aur <b>card hamesha lautaata hai</b>. Kaaran ke saath rukna <code>throw</code> hai; chahe kuch bhi ho card lautana <code>finally</code> hai.</p>"
        },
        lines: [
          {
            code: "catch (TicketNotFoundException ex)",
            note: {
              en: "Catch the specific exception you can actually handle. Catching plain <code>Exception</code> in the middle of code usually hides bugs.",
              hi: "वही ख़ास exception पकड़ो जिसे आप सच में संभाल सकते हैं। बीच के code में सादा <code>Exception</code> पकड़ने से अक्सर bugs छिप जाते हैं।",
              hg: "Wahi khaas exception pakdo jise aap sach mein sambhal sakte hain. Beech ke code mein saada <code>Exception</code> pakadne se aksar bugs chhip jaate hain."
            }
          },
          {
            code: "Console.WriteLine(\"Finally: audit entry saved\");",
            note: {
              en: "This <code>finally</code> block runs after the catch. It is the place for cleanup that must always happen.",
              hi: "यह <code>finally</code> block catch के बाद चलता है। जो सफ़ाई हर हाल में होनी चाहिए, उसकी यही जगह है।",
              hg: "Ye <code>finally</code> block catch ke baad chalta hai. Jo safaai har haal mein honi chahiye, uski yahi jagah hai."
            }
          },
          {
            code: "public class TicketNotFoundException(int ticketId) : Exception($\"Ticket {ticketId} not found\")",
            note: {
              en: "A custom exception: derive from <code>Exception</code>, end the name with <code>Exception</code>, and carry useful data such as <code>TicketId</code>. Create one only when callers will catch it specifically.",
              hi: "अपना exception: <code>Exception</code> से derive करो, नाम <code>Exception</code> पर ख़त्म करो, और काम का data (जैसे <code>TicketId</code>) साथ रखो। इसे तभी बनाओ जब callers उसे ख़ास तौर पर पकड़ेंगे।",
              hg: "Apna exception: <code>Exception</code> se derive karo, naam <code>Exception</code> par khatam karo, aur kaam ka data (jaise <code>TicketId</code>) saath rakho. Ise tabhi banao jab callers use khaas taur par pakdenge."
            }
          },
          {
            code: "if (!_openTickets.Contains(id)) throw new TicketNotFoundException(id);",
            note: {
              en: "Throw when a method cannot do what its name promises. <code>Close</code> cannot close a ticket that is not there.",
              hi: "जब method अपने नाम का वादा पूरा न कर सके, तब throw करो। <code>Close</code> उस ticket को बंद नहीं कर सकता जो है ही नहीं।",
              hg: "Jab method apne naam ka waada poora na kar sake, tab throw karo. <code>Close</code> us ticket ko band nahi kar sakta jo hai hi nahi."
            }
          },
          {
            code: "if (plain) throw;",
            note: {
              en: "GOOD: rethrow the same exception, original stack trace intact. The output shows <code>FindTicket</code> is still in the stack.",
              hi: "अच्छा: वही exception फिर फेंको, मूल stack trace सुरक्षित। Output में दिखता है कि <code>FindTicket</code> अब भी stack में है।",
              hg: "Achha: wahi exception phir phenko, mool stack trace surakshit. Output mein dikhta hai ki <code>FindTicket</code> ab bhi stack mein hai."
            }
          },
          {
            code: "throw ex;",
            note: {
              en: "BAD on purpose: the stack trace restarts here, so <code>FindTicket</code> disappears from it. The analyzer warns with CA2200.",
              hi: "जान-बूझकर बुरा: stack trace यहीं से दोबारा शुरू होता है, इसलिए <code>FindTicket</code> उसमें से ग़ायब हो जाता है। Analyzer CA2200 की warning देता है।",
              hg: "Jaan-boojhkar bura: stack trace yahin se dobara shuru hota hai, isliye <code>FindTicket</code> usme se gaayab ho jaata hai. Analyzer CA2200 ki warning deta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Writing <code>throw ex;</code> instead of <code>throw;</code>. You lose where the error really happened.</li><li>An empty <code>catch</code> or a broad <code>catch (Exception)</code> that hides the problem. Catch only what you can handle.</li><li>Using exceptions for normal flow. A wrong PIN is expected, so return a result; \"database is down\" is exceptional, so throw.</li></ul>",
          hi: "<ul><li><code>throw;</code> की जगह <code>throw ex;</code> लिखना। आप खो देते हैं कि error असल में कहाँ हुआ।</li><li>ख़ाली <code>catch</code> या चौड़ा <code>catch (Exception)</code> जो समस्या छिपा दे। सिर्फ़ वही पकड़ो जो संभाल सकते हो।</li><li>सामान्य flow के लिए exceptions इस्तेमाल करना। ग़लत PIN अपेक्षित है, इसलिए result लौटाओ; \"database बंद है\" असाधारण है, इसलिए throw करो।</li></ul>",
          hg: "<ul><li><code>throw;</code> ki jagah <code>throw ex;</code> likhna. Aap kho dete hain ki error asal mein kahan hua.</li><li>Khaali <code>catch</code> ya chauda <code>catch (Exception)</code> jo samasya chhipa de. Sirf wahi pakdo jo sambhal sakte ho.</li><li>Saamanya flow ke liye exceptions use karna. Galat PIN apekshit hai, isliye result lautao; \"database band hai\" asaadharan hai, isliye throw karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Throw when a method cannot do its job. Catch where you can add value: retry, show a friendly message, add context or clean up. In a web app, handle unexpected exceptions in one central place and log them once there.</p>",
          hi: "<p>जब method अपना काम न कर सके तब throw करो। वहाँ catch करो जहाँ आप कुछ जोड़ सको: दोबारा कोशिश, दोस्ताना संदेश, संदर्भ जोड़ना या सफ़ाई। Web app में अनपेक्षित exceptions को एक केंद्रीय जगह संभालो और वहीं एक बार log करो।</p>",
          hg: "<p>Jab method apna kaam na kar sake tab throw karo. Wahan catch karo jahan aap kuch jod sako: dobara koshish, dostana sandesh, sandarbh jodna ya safaai. Web app mein anapekshit exceptions ko ek kendriya jagah sambhalo aur wahin ek baar log karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Instead of letting <code>TicketNotFoundException</code> escape, wrap it: catch it in <code>Close</code> and throw <code>new InvalidOperationException($\"Could not close ticket {id}\", ex)</code>. In the caller print the message and the type of <code>InnerException</code>.</p>",
            hi: "<p><code>TicketNotFoundException</code> को बाहर निकलने देने की जगह उसे लपेटो: <code>Close</code> में पकड़ो और <code>new InvalidOperationException($\"Could not close ticket {id}\", ex)</code> फेंको। Caller में संदेश और <code>InnerException</code> का type print करो।</p>",
            hg: "<p><code>TicketNotFoundException</code> ko bahar nikalne dene ki jagah use lapeto: <code>Close</code> mein pakdo aur <code>new InvalidOperationException($\"Could not close ticket {id}\", ex)</code> phenko. Caller mein sandesh aur <code>InnerException</code> ka type print karo.</p>"
          },
          hint: {
            en: "<p>The second constructor argument of an exception is the inner exception. Use <code>ex.InnerException!.GetType().Name</code> to print its type.</p>",
            hi: "<p>Exception के दूसरे constructor argument में inner exception जाता है। उसका type print करने के लिए <code>ex.InnerException!.GetType().Name</code> इस्तेमाल करो।</p>",
            hg: "<p>Exception ke doosre constructor argument mein inner exception jaata hai. Uska type print karne ke liye <code>ex.InnerException!.GetType().Name</code> use karo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: wrap with InnerException",
              hi: "हल: InnerException के साथ लपेटना",
              hg: "Solution: InnerException ke saath lapetna"
            },
            src: "var service = new TicketService();\ntry\n{\n    service.Close(999);\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine($\"{ex.Message} <- {ex.InnerException!.GetType().Name}\");\n}\n\npublic class TicketNotFoundException : Exception\n{\n    public TicketNotFoundException(int id) : base($\"Ticket {id} not found\") { }\n}\n\npublic class TicketService\n{\n    public void Close(int id)\n    {\n        try\n        {\n            throw new TicketNotFoundException(id);   // pretend the lookup failed\n        }\n        catch (TicketNotFoundException ex)\n        {\n            throw new InvalidOperationException($\"Could not close ticket {id}\", ex);\n        }\n    }\n}",
            check: "run",
            expected: "Could not close ticket 999 <- TicketNotFoundException"
          }
        },
        quiz: {
          q: {
            en: "Inside a <code>catch</code> block, what is the difference between <code>throw;</code> and <code>throw ex;</code>?",
            hi: "<code>catch</code> block के अंदर <code>throw;</code> और <code>throw ex;</code> में क्या फ़र्क़ है?",
            hg: "<code>catch</code> block ke andar <code>throw;</code> aur <code>throw ex;</code> mein kya fark hai?"
          },
          options: [
            {
              en: "There is no difference",
              hi: "कोई फ़र्क़ नहीं",
              hg: "Koi fark nahi"
            },
            {
              en: "<code>throw ex;</code> keeps the stack trace and <code>throw;</code> resets it",
              hi: "<code>throw ex;</code> stack trace बचाता है और <code>throw;</code> उसे reset करता है",
              hg: "<code>throw ex;</code> stack trace bachata hai aur <code>throw;</code> use reset karta hai"
            },
            {
              en: "<code>throw;</code> keeps the original stack trace; <code>throw ex;</code> restarts it at the current line",
              hi: "<code>throw;</code> मूल stack trace बचाता है; <code>throw ex;</code> उसे मौजूदा line से दोबारा शुरू करता है",
              hg: "<code>throw;</code> mool stack trace bachata hai; <code>throw ex;</code> use maujooda line se dobara shuru karta hai"
            },
            {
              en: "<code>throw;</code> only works inside <code>finally</code>",
              hi: "<code>throw;</code> सिर्फ़ <code>finally</code> के अंदर चलता है",
              hg: "<code>throw;</code> sirf <code>finally</code> ke andar chalta hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Use <code>throw;</code> to rethrow. <code>throw ex;</code> throws the same object but starts a new stack trace at that line, so you lose the real origin of the error.</p>",
            hi: "<p>दोबारा फेंकने के लिए <code>throw;</code> इस्तेमाल करो। <code>throw ex;</code> वही object फेंकता है पर उस line से नया stack trace शुरू करता है, इसलिए error का असली उद्गम खो जाता है।</p>",
            hg: "<p>Dobara phenkne ke liye <code>throw;</code> use karo. <code>throw ex;</code> wahi object phenkta hai par us line se naya stack trace shuru karta hai, isliye error ka asli udgam kho jaata hai.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>try</code> = risky code, <code>catch</code> = handle one failure, <code>finally</code> = always runs.</li><li>Rethrow with <code>throw;</code>, never <code>throw ex;</code>.</li><li>Catch only what you can handle; use exceptions for exceptional cases, not normal flow.</li></ul>",
          hi: "<ul><li><code>try</code> = जोखिम वाला code, <code>catch</code> = एक विफलता संभालना, <code>finally</code> = हमेशा चलता है।</li><li><code>throw;</code> से दोबारा फेंको, कभी <code>throw ex;</code> से नहीं।</li><li>सिर्फ़ वही पकड़ो जो संभाल सको; exceptions असाधारण मामलों के लिए, सामान्य flow के लिए नहीं।</li></ul>",
          hg: "<ul><li><code>try</code> = jokhim wala code, <code>catch</code> = ek vifalta sambhalna, <code>finally</code> = hamesha chalta hai.</li><li><code>throw;</code> se dobara phenko, kabhi <code>throw ex;</code> se nahi.</li><li>Sirf wahi pakdo jo sambhal sako; exceptions asaadharan mamlon ke liye, saamanya flow ke liye nahi.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Closing a missing ticket: catch, finally, throw; vs throw ex;",
            hi: "मौजूद न होने वाला ticket बंद करना: catch, finally, throw; vs throw ex;",
            hg: "Maujood na hone wala ticket band karna: catch, finally, throw; vs throw ex;"
          },
          src: "var service = new TicketService();\n\ntry\n{\n    service.Close(501);\n    service.Close(999);                       // throws; the next line never runs\n}\ncatch (TicketNotFoundException ex)\n{\n    Console.WriteLine($\"Caught: {ex.Message}\");\n}\nfinally\n{\n    Console.WriteLine(\"Finally: audit entry saved\");\n}\n\nforeach (bool plain in new[] { true, false })\n{\n    try\n    {\n        service.CloseAndLog(999, plain);\n    }\n    catch (TicketNotFoundException ex)\n    {\n        string how = plain ? \"throw;  \" : \"throw ex;\";\n        Console.WriteLine($\"{how} -> stack shows FindTicket: {ex.StackTrace!.Contains(\"FindTicket\")}\");\n    }\n}\n\npublic class TicketNotFoundException(int ticketId) : Exception($\"Ticket {ticketId} not found\")\n{\n    public int TicketId { get; } = ticketId;\n}\n\npublic class TicketService\n{\n    private readonly int[] _openTickets = [501, 502, 503];\n\n    public void Close(int id)\n    {\n        FindTicket(id);\n        Console.WriteLine($\"Ticket {id} closed\");\n    }\n\n    public void CloseAndLog(int id, bool plain)\n    {\n        try\n        {\n            FindTicket(id);\n        }\n        catch (TicketNotFoundException ex)\n        {\n            Console.WriteLine($\"Log: {ex.Message}\");\n            if (plain) throw;     // GOOD: same exception, original stack\n            throw ex;             // BAD on purpose: stack restarts here (CA2200)\n        }\n    }\n\n    private void FindTicket(int id)\n    {\n        if (!_openTickets.Contains(id)) throw new TicketNotFoundException(id);\n    }\n}",
          check: "run",
          expected: "Ticket 501 closed\nCaught: Ticket 999 not found\nFinally: audit entry saved\nLog: Ticket 999 not found\nthrow;   -> stack shows FindTicket: True\nLog: Ticket 999 not found\nthrow ex; -> stack shows FindTicket: False"
        }
      ]
    },
    {
      id: "dispose-using",
      depth: "short",
      title: {
        en: "IDisposable and using",
        hi: "IDisposable और using",
        hg: "IDisposable aur using"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 5 said <code>finally</code> always runs for cleanup. Today the CRM writes a daily ticket report to a file, and that file must be closed even if something fails. <code>using</code> does exactly that.",
          hi: "पाठ 5 में हमने कहा कि सफ़ाई के लिए <code>finally</code> हमेशा चलता है। आज CRM एक file में रोज़ की ticket report लिखता है, और कुछ भी फ़ेल हो, वह file बंद होनी चाहिए। <code>using</code> ठीक यही करता है।",
          hg: "Lesson 5 mein humne kaha ki safaai ke liye <code>finally</code> hamesha chalta hai. Aaj CRM ek file mein roz ki ticket report likhta hai, aur kuch bhi fail ho, woh file band honi chahiye. <code>using</code> theek yahi karta hai."
        },
        what: {
          en: "<p>Some objects hold things the garbage collector will not return on time: files, database connections, sockets. Such a class implements <b><code>IDisposable</code></b>, which has one method, <code>Dispose()</code>, that releases the resource <b>now</b>.</p><p><b><code>using</code></b> calls <code>Dispose</code> for you at the end of the block or scope, even if an exception is thrown. It is a <code>try/finally</code> written short.</p>",
          hi: "<p>कुछ objects ऐसी चीज़ें रखते हैं जिन्हें garbage collector समय पर नहीं लौटाएगा: files, database connections, sockets। ऐसी class <b><code>IDisposable</code></b> implement करती है, जिसमें एक ही method <code>Dispose()</code> है जो resource को <b>अभी</b> छोड़ देता है।</p><p><b><code>using</code></b> block या scope के अंत में आपके लिए <code>Dispose</code> बुला देता है, चाहे exception फेंका गया हो। यह <code>try/finally</code> का छोटा रूप है।</p>",
          hg: "<p>Kuch objects aisi cheezein rakhte hain jinhe garbage collector samay par nahi lautayega: files, database connections, sockets. Aisi class <b><code>IDisposable</code></b> implement karti hai, jisme ek hi method <code>Dispose()</code> hai jo resource ko <b>abhi</b> chhod deta hai.</p><p><b><code>using</code></b> block ya scope ke ant mein aapke liye <code>Dispose</code> bula deta hai, chahe exception phenka gaya ho. Ye <code>try/finally</code> ka chhota roop hai.</p>"
        },
        why: {
          en: "<p>The GC cleans <b>memory</b>, on its own schedule. It does not promise to close your file or connection quickly. Forget to dispose and the report file stays locked, or the database runs out of connections.</p>",
          hi: "<p>GC <b>memory</b> साफ़ करता है, अपने समय पर। वह वादा नहीं करता कि आपकी file या connection जल्दी बंद करेगा। Dispose करना भूले तो report file locked रह जाती है, या database के connections ख़त्म हो जाते हैं।</p>",
          hg: "<p>GC <b>memory</b> saaf karta hai, apne samay par. Woh waada nahi karta ki aapki file ya connection jaldi band karega. Dispose karna bhoole to report file locked reh jaati hai, ya database ke connections khatam ho jaate hain.</p>"
        },
        analogy: {
          en: "<p>The municipal garbage van comes on its own schedule and takes what nobody uses. That is the <b>GC</b>. But a <b>library book</b> must be returned by <b>you</b>, on time; the van will not return it. Files and connections are library books. <code>using</code> is the reminder that makes sure you return them.</p>",
          hi: "<p>नगरपालिका की कचरा गाड़ी अपने समय पर आती है और जो किसी के काम का नहीं उसे ले जाती है। यह <b>GC</b> है। पर <b>library की किताब</b> <b>आपको</b> समय पर लौटानी है; गाड़ी उसे नहीं लौटाएगी। Files और connections library की किताबें हैं। <code>using</code> वह याद दिलाने वाला है जो पक्का करता है कि आप उन्हें लौटाएँ।</p>",
          hg: "<p>Nagarpalika ki kachra gaadi apne samay par aati hai aur jo kisi ke kaam ka nahi use le jaati hai. Ye <b>GC</b> hai. Par <b>library ki kitaab</b> <b>aapko</b> samay par lautani hai; gaadi use nahi lautayegi. Files aur connections library ki kitaabein hain. <code>using</code> woh yaad dilane wala hai jo pakka karta hai ki aap unhe lautayein.</p>"
        },
        lines: [
          {
            code: "using (var writer = new ReportWriter(\"daily-tickets\"))",
            note: {
              en: "The block form: <code>writer</code> exists only inside the braces, and <code>Dispose</code> runs at the closing brace.",
              hi: "Block रूप: <code>writer</code> सिर्फ़ braces के अंदर रहता है, और बंद होने वाले brace पर <code>Dispose</code> चलता है।",
              hg: "Block roop: <code>writer</code> sirf braces ke andar rehta hai, aur band hone wale brace par <code>Dispose</code> chalta hai."
            }
          },
          {
            code: "Console.WriteLine(\"After the using block\");",
            note: {
              en: "In the output, \"Closed daily-tickets\" appears before this line: the resource was released as soon as the block ended.",
              hi: "Output में \"Closed daily-tickets\" इस line से पहले आता है: block ख़त्म होते ही resource छोड़ दिया गया।",
              hg: "Output mein \"Closed daily-tickets\" is line se pehle aata hai: block khatam hote hi resource chhod diya gaya."
            }
          },
          {
            code: "using var broken = new ReportWriter(\"broken\");",
            note: {
              en: "The <b>using declaration</b> (C# 8): no extra braces, and <code>Dispose</code> runs when the enclosing scope (here the <code>try</code> block) ends.",
              hi: "<b>using declaration</b> (C# 8): अलग braces नहीं, और <code>Dispose</code> तब चलता है जब आसपास का scope (यहाँ <code>try</code> block) ख़त्म होता है।",
              hg: "<b>using declaration</b> (C# 8): alag braces nahi, aur <code>Dispose</code> tab chalta hai jab aaspaas ka scope (yahan <code>try</code> block) khatam hota hai."
            }
          },
          {
            code: "throw new InvalidOperationException(\"disk full\");",
            note: {
              en: "Even when an exception is thrown, \"Closed broken\" is printed before the <code>catch</code> runs. That is the safety <code>using</code> gives you.",
              hi: "Exception फेंके जाने पर भी <code>catch</code> चलने से पहले \"Closed broken\" print होता है। यही सुरक्षा <code>using</code> देता है।",
              hg: "Exception phenke jaane par bhi <code>catch</code> chalne se pehle \"Closed broken\" print hota hai. Yahi suraksha <code>using</code> deta hai."
            }
          },
          {
            code: "public sealed class ReportWriter : IDisposable",
            note: {
              en: "Implement <code>IDisposable</code> when your class owns a resource. <code>sealed</code> keeps the pattern simple (the full pattern is in the Deep Dive).",
              hi: "जब आपकी class के पास कोई resource हो तब <code>IDisposable</code> implement करो। <code>sealed</code> पैटर्न को सरल रखता है (पूरा pattern Deep Dive में है)।",
              hg: "Jab aapki class ke paas koi resource ho tab <code>IDisposable</code> implement karo. <code>sealed</code> pattern ko saral rakhta hai (poora pattern Deep Dive mein hai)."
            }
          },
          {
            code: "public void Dispose() => Console.WriteLine($\"Closed {_name}\");",
            note: {
              en: "Real code would flush and close the file here. We only print, so the order of events is visible.",
              hi: "असली code यहाँ file को flush करके बंद करता। हम सिर्फ़ print करते हैं ताकि घटनाओं का क्रम दिखे।",
              hg: "Asli code yahan file ko flush karke band karta. Hum sirf print karte hain taaki ghatnaon ka kram dikhe."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Creating an <code>IDisposable</code> without <code>using</code>. The file or connection stays open until the GC eventually gets to it.</li><li>Disposing objects you do not own. In ASP.NET Core, objects given by dependency injection are disposed by the container.</li><li>Calling <code>GC.Collect()</code> to \"release\" files. It is not a substitute for <code>Dispose</code>.</li></ul>",
          hi: "<ul><li><code>using</code> के बिना <code>IDisposable</code> बनाना। File या connection तब तक खुला रहता है जब तक GC कभी उस तक न पहुँचे।</li><li>जो objects आपके नहीं हैं, उन्हें dispose करना। ASP.NET Core में dependency injection से मिले objects को container dispose करता है।</li><li>Files \"छोड़ने\" के लिए <code>GC.Collect()</code> बुलाना। यह <code>Dispose</code> का विकल्प नहीं है।</li></ul>",
          hg: "<ul><li><code>using</code> ke bina <code>IDisposable</code> banana. File ya connection tab tak khula rehta hai jab tak GC kabhi us tak na pahunche.</li><li>Jo objects aapke nahi hain, unhe dispose karna. ASP.NET Core mein dependency injection se mile objects ko container dispose karta hai.</li><li>Files \"chhodne\" ke liye <code>GC.Collect()</code> bulana. Ye <code>Dispose</code> ka vikalp nahi hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>using</code> for every <code>IDisposable</code> you create and own: files, streams, database connections, <code>HttpRequestMessage</code>. Implement <code>IDisposable</code> yourself only when your class owns such a resource.</p>",
          hi: "<p>हर उस <code>IDisposable</code> के लिए <code>using</code> इस्तेमाल करो जो आप बनाते और जिसके मालिक हैं: files, streams, database connections, <code>HttpRequestMessage</code>। <code>IDisposable</code> ख़ुद तभी implement करो जब आपकी class के पास ऐसा resource हो।</p>",
          hg: "<p>Har us <code>IDisposable</code> ke liye <code>using</code> use karo jo aap banate aur jiske maalik hain: files, streams, database connections, <code>HttpRequestMessage</code>. <code>IDisposable</code> khud tabhi implement karo jab aapki class ke paas aisa resource ho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Put the report writing into a method <code>PrintReport()</code> and use a <b>using declaration</b> (<code>using var</code>) inside it. Call the method, then print <code>After report</code>.</p>",
            hi: "<p>Report लिखने का काम एक method <code>PrintReport()</code> में रखो और उसके अंदर <b>using declaration</b> (<code>using var</code>) इस्तेमाल करो। Method बुलाओ, फिर <code>After report</code> print करो।</p>",
            hg: "<p>Report likhne ka kaam ek method <code>PrintReport()</code> mein rakho aur uske andar <b>using declaration</b> (<code>using var</code>) use karo. Method bulao, phir <code>After report</code> print karo.</p>"
          },
          hint: {
            en: "<p>The writer is disposed when the method ends, so \"Closed\" prints before \"After report\".</p>",
            hi: "<p>Method ख़त्म होने पर writer dispose होता है, इसलिए \"Closed\" \"After report\" से पहले print होता है।</p>",
            hg: "<p>Method khatam hone par writer dispose hota hai, isliye \"Closed\" \"After report\" se pehle print hota hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: using var inside a method",
              hi: "हल: method के अंदर using var",
              hg: "Solution: method ke andar using var"
            },
            src: "PrintReport();\nConsole.WriteLine(\"After report\");\n\nstatic void PrintReport()\n{\n    using var writer = new ReportWriter(\"daily-tickets\");\n    writer.WriteLine(\"501 Billing issue\");\n}\n\npublic sealed class ReportWriter : IDisposable\n{\n    private readonly string _name;\n\n    public ReportWriter(string name)\n    {\n        _name = name;\n        Console.WriteLine($\"Opened {name}\");\n    }\n\n    public void WriteLine(string text) => Console.WriteLine($\"  [{_name}] {text}\");\n\n    public void Dispose() => Console.WriteLine($\"Closed {_name}\");\n}",
            check: "run",
            expected: "Opened daily-tickets\n  [daily-tickets] 501 Billing issue\nClosed daily-tickets\nAfter report"
          }
        },
        quiz: {
          q: {
            en: "When does <code>Dispose</code> run for <code>using var writer = new ReportWriter(\"x\");</code> inside a method?",
            hi: "किसी method के अंदर <code>using var writer = new ReportWriter(\"x\");</code> के लिए <code>Dispose</code> कब चलता है?",
            hg: "Kisi method ke andar <code>using var writer = new ReportWriter(\"x\");</code> ke liye <code>Dispose</code> kab chalta hai?"
          },
          options: [
            {
              en: "Whenever the garbage collector happens to run",
              hi: "जब भी garbage collector चल जाए",
              hg: "Jab bhi garbage collector chal jaaye"
            },
            {
              en: "Only if you call it yourself",
              hi: "सिर्फ़ तब जब आप ख़ुद बुलाओ",
              hg: "Sirf tab jab aap khud bulao"
            },
            {
              en: "Right after the line that creates it",
              hi: "उसे बनाने वाली line के ठीक बाद",
              hg: "Use banane wali line ke theek baad"
            },
            {
              en: "At the end of the enclosing scope, even if an exception is thrown",
              hi: "आसपास के scope के अंत में, चाहे exception फेंका जाए",
              hg: "Aaspaas ke scope ke ant mein, chahe exception phenka jaaye"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>A using declaration disposes at the end of its scope, and it also does so when an exception leaves the scope. The GC is not involved.</p>",
            hi: "<p>Using declaration अपने scope के अंत में dispose करता है, और जब exception scope से बाहर निकले तब भी। इसमें GC शामिल नहीं है।</p>",
            hg: "<p>Using declaration apne scope ke ant mein dispose karta hai, aur jab exception scope se bahar nikle tab bhi. Isme GC shaamil nahi hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>The GC frees memory; <b>you</b> release files and connections with <code>Dispose</code>.</li><li><code>using</code> calls <code>Dispose</code> at the end of the scope, even after an exception.</li><li>Implement <code>IDisposable</code> only when your class owns a resource.</li></ul>",
          hi: "<ul><li>GC memory छोड़ता है; files और connections <b>आप</b> <code>Dispose</code> से छोड़ते हैं।</li><li><code>using</code> scope के अंत में <code>Dispose</code> बुलाता है, exception के बाद भी।</li><li><code>IDisposable</code> तभी implement करो जब आपकी class के पास resource हो।</li></ul>",
          hg: "<ul><li>GC memory chhodta hai; files aur connections <b>aap</b> <code>Dispose</code> se chhodte hain.</li><li><code>using</code> scope ke ant mein <code>Dispose</code> bulata hai, exception ke baad bhi.</li><li><code>IDisposable</code> tabhi implement karo jab aapki class ke paas resource ho.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A report writer closed by using",
            hi: "using से बंद होने वाला report writer",
            hg: "Using se band hone wala report writer"
          },
          src: "using (var writer = new ReportWriter(\"daily-tickets\"))\n{\n    writer.WriteLine(\"501 Billing issue\");\n    writer.WriteLine(\"502 Network down\");\n}\nConsole.WriteLine(\"After the using block\");\n\ntry\n{\n    using var broken = new ReportWriter(\"broken\");\n    broken.WriteLine(\"503 Refund request\");\n    throw new InvalidOperationException(\"disk full\");\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine($\"Caught: {ex.Message}\");\n}\n\npublic sealed class ReportWriter : IDisposable\n{\n    private readonly string _name;\n\n    public ReportWriter(string name)\n    {\n        _name = name;\n        Console.WriteLine($\"Opened {name}\");\n    }\n\n    public void WriteLine(string text) => Console.WriteLine($\"  [{_name}] {text}\");\n\n    public void Dispose() => Console.WriteLine($\"Closed {_name}\");\n}",
          check: "run",
          expected: "Opened daily-tickets\n  [daily-tickets] 501 Billing issue\n  [daily-tickets] 502 Network down\nClosed daily-tickets\nAfter the using block\nOpened broken\n  [broken] 503 Refund request\nClosed broken\nCaught: disk full"
        }
      ]
    },
    {
      id: "records-patterns",
      depth: "short",
      title: {
        en: "Records and pattern matching",
        hi: "Records और pattern matching",
        hg: "Records aur pattern matching"
      },
      lesson: {
        buildsOn: {
          en: "Day 1 kept <code>Status</code> and <code>Priority</code> as strings, so a typo like <code>\"Opne\"</code> compiled. Here they become <b>enums</b>: a typo is a compile error. A small <b>record</b> holds a ticket for the list screen, and <b>pattern matching</b> decides the next step.",
          hi: "Day 1 में <code>Status</code> और <code>Priority</code> strings थे, इसलिए <code>\"Opne\"</code> जैसी typo भी compile हो जाती थी। यहाँ वे <b>enums</b> (तय नामों वाली values की सूची) बनते हैं: typo अब compile error है। List screen के लिए एक छोटा <b>record</b> ticket का data रखता है, और <b>pattern matching</b> तय करती है कि आगे क्या करना है।",
          hg: "Day 1 mein <code>Status</code> aur <code>Priority</code> strings the, isliye <code>\"Opne\"</code> jaisi typo bhi compile ho jaati thi. Yahan woh <b>enums</b> (tay naamon wali values ki list) bante hain: typo ab compile error hai. List screen ke liye ek chhota <b>record</b> ticket ka data rakhta hai, aur <b>pattern matching</b> tay karti hai ki aage kya karna hai."
        },
        what: {
          en: "<p>A <b>record</b> is a type for data. One line, <code>record TicketSummary(int Id, ...)</code>, gives you the constructor, read-only properties, <b>value-based equality</b> (same values means equal), a readable <code>ToString()</code> and <code>with</code>, which makes a <b>changed copy</b>.</p><p><b>Pattern matching</b> checks the shape of a value. A <b>switch expression</b> tries its arms from top to bottom and the <b>first match wins</b>.</p>",
          hi: "<p><b>Record</b> data के लिए बना type है। एक line, <code>record TicketSummary(int Id, ...)</code>, आपको constructor, सिर्फ़-पढ़ने वाली properties, <b>value-based equality</b> (values वही तो बराबर), पढ़ने लायक <code>ToString()</code> और <code>with</code> देती है, जो <b>बदली हुई copy</b> बनाता है।</p><p><b>Pattern matching</b> किसी value का ढाँचा जाँचती है। <b>Switch expression</b> अपने arms ऊपर से नीचे आज़माती है और <b>पहला मेल खाने वाला जीतता है</b>।</p>",
          hg: "<p><b>Record</b> data ke liye bana type hai. Ek line, <code>record TicketSummary(int Id, ...)</code>, aapko constructor, sirf-padhne wali properties, <b>value-based equality</b> (values wahi to barabar), padhne layak <code>ToString()</code> aur <code>with</code> deti hai, jo <b>badli hui copy</b> banata hai.</p><p><b>Pattern matching</b> kisi value ka dhaancha jaanchti hai. <b>Switch expression</b> apne arms upar se neeche aazmati hai aur <b>pehla mel khane wala jeetta hai</b>.</p>"
        },
        why: {
          en: "<p>Comparing two tickets by hand, or copying one to change a field, is repetitive code. A record writes it for you and cannot be changed by accident. A switch expression replaces a long <code>if / else if</code> chain with a few readable rules.</p>",
          hi: "<p>दो tickets को हाथ से compare करना, या field बदलने के लिए एक की copy बनाना दोहराव वाला code है। Record उसे आपके लिए लिख देता है और ग़लती से बदला नहीं जा सकता। Switch expression लंबी <code>if / else if</code> श्रृंखला की जगह कुछ पढ़ने लायक नियम रख देती है।</p>",
          hg: "<p>Do tickets ko haath se compare karna, ya field badalne ke liye ek ki copy banana dohraav wala code hai. Record use aapke liye likh deta hai aur galti se badla nahi ja sakta. Switch expression lambi <code>if / else if</code> shrinkhla ki jagah kuch padhne layak niyam rakh deti hai.</p>"
        },
        analogy: {
          en: "<p>When you move house, the office does not scratch out the old address on your ID card. It prints a <b>new card</b> with the new address and everything else copied; the old card still says the old address. That is <code>with</code>. And a courier clerk checks rules <b>top to bottom</b> (\"fragile? heavy? local?\") and stops at the first one that fits. That is a switch expression.</p>",
          hi: "<p>घर बदलने पर office आपके ID card का पुराना पता काटता नहीं। वह नए पते और बाक़ी सब कुछ copy करके <b>नया card</b> छापता है; पुराना card अब भी पुराना पता बताता है। यही <code>with</code> है। और courier का clerk नियम <b>ऊपर से नीचे</b> जाँचता है (\"नाज़ुक? भारी? लोकल?\") और पहले जो फ़िट बैठे वहीं रुक जाता है। यही switch expression है।</p>",
          hg: "<p>Ghar badalne par office aapke ID card ka purana pata kaatta nahi. Woh naye pate aur baaki sab kuch copy karke <b>naya card</b> chhapta hai; purana card ab bhi purana pata batata hai. Yahi <code>with</code> hai. Aur courier ka clerk niyam <b>upar se neeche</b> jaanchta hai (\"naazuk? bhaari? local?\") aur pehle jo fit baithe wahin ruk jaata hai. Yahi switch expression hai.</p>"
        },
        lines: [
          {
            code: "public record TicketSummary(int Id, string Customer, Priority Priority, Status Status);",
            note: {
              en: "A <b>positional record</b>: this single line gives constructor, properties, equality, <code>ToString()</code> and <code>with</code>.",
              hi: "<b>Positional record</b>: यह एक line constructor, properties, equality, <code>ToString()</code> और <code>with</code> देती है।",
              hg: "<b>Positional record</b>: ye ek line constructor, properties, equality, <code>ToString()</code> aur <code>with</code> deti hai."
            }
          },
          {
            code: "Console.WriteLine($\"Same values: {t1 == t2}\");",
            note: {
              en: "<code>==</code> compares the <b>values</b>. Two separate objects with the same values are equal. A normal class would compare references.",
              hi: "<code>==</code> <b>values</b> की तुलना करता है। एक जैसी values वाले दो अलग objects बराबर हैं। सामान्य class references की तुलना करती।",
              hg: "<code>==</code> <b>values</b> ki tulna karta hai. Ek jaisi values wale do alag objects barabar hain. Saamanya class references ki tulna karti."
            }
          },
          {
            code: "var closed = t1 with { Status = Status.Closed };",
            note: {
              en: "<code>with</code> makes a new record with one change. <code>t1</code> stays untouched, which is why the output shows Open then Closed.",
              hi: "<code>with</code> एक बदलाव के साथ नया record बनाता है। <code>t1</code> वैसा ही रहता है, इसीलिए output में Open फिर Closed दिखता है।",
              hg: "<code>with</code> ek badlaav ke saath naya record banata hai. <code>t1</code> waisa hi rehta hai, isiliye output mein Open phir Closed dikhta hai."
            }
          },
          {
            code: "static string NextStep(TicketSummary t) => t switch",
            note: {
              en: "A <b>switch expression</b> returns a value. Arms are tried in order and the first match wins.",
              hi: "<b>Switch expression</b> एक value लौटाती है। Arms क्रम से आज़माए जाते हैं और पहला मेल जीतता है।",
              hg: "<b>Switch expression</b> ek value lautati hai. Arms kram se aazmaye jaate hain aur pehla mel jeetta hai."
            }
          },
          {
            code: "{ Priority: Priority.High, Status: Status.Open } => \"assign an agent now\",",
            note: {
              en: "A <b>property pattern</b>: matches when both properties have these values. No casts, no <code>if</code>.",
              hi: "<b>Property pattern</b>: तब मेल खाता है जब दोनों properties की ये values हों। न cast, न <code>if</code>।",
              hg: "<b>Property pattern</b>: tab mel khata hai jab dono properties ki ye values hon. Na cast, na <code>if</code>."
            }
          },
          {
            code: "_ => \"wait in the queue\"",
            note: {
              en: "The <code>_</code> arm catches everything else. Without it the compiler warns that the switch may not cover all cases (CS8509).",
              hi: "<code>_</code> वाला arm बाक़ी सब पकड़ लेता है। इसके बिना compiler warning देता है कि switch सभी मामले शायद न ढके (CS8509)।",
              hg: "<code>_</code> wala arm baaki sab pakad leta hai. Iske bina compiler warning deta hai ki switch sabhi mamle shayad na dhake (CS8509)."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using a record as an EF Core entity. Entities have an identity (Id) and change over time, which clashes with value equality (Day 5).</li><li>Expecting <code>with</code> to copy deeply. It is a shallow copy: a <code>List</code> inside is shared by both records.</li><li>Putting a broad arm (like <code>_</code>) before a specific one. The later arm can never match, and the compiler reports CS8510.</li></ul>",
          hi: "<ul><li>Record को EF Core entity की तरह इस्तेमाल करना। Entities की पहचान (Id) होती है और वे समय के साथ बदलती हैं, जो value equality से टकराता है (Day 5)।</li><li><code>with</code> से गहरी copy की उम्मीद करना। यह उथली (shallow) copy है: अंदर की <code>List</code> दोनों records में साझा रहती है।</li><li>चौड़ा arm (जैसे <code>_</code>) किसी ख़ास arm से पहले रखना। बाद वाला arm कभी मेल नहीं खा सकता, और compiler CS8510 बताता है।</li></ul>",
          hg: "<ul><li>Record ko EF Core entity ki tarah use karna. Entities ki pehchaan (Id) hoti hai aur woh samay ke saath badalti hain, jo value equality se takraata hai (Day 5).</li><li><code>with</code> se gehri copy ki ummeed karna. Ye uthli (shallow) copy hai: andar ki <code>List</code> dono records mein saajha rehti hai.</li><li>Chauda arm (jaise <code>_</code>) kisi khaas arm se pehle rakhna. Baad wala arm kabhi mel nahi kha sakta, aur compiler CS8510 batata hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use records for DTOs, API models, messages and small value objects (Money, Address). Use switch expressions to map a value to a result, such as status to next step. Leave long type-specific behaviour to virtual methods (Day 1).</p>",
          hi: "<p>DTOs, API models, messages और छोटे value objects (Money, Address) के लिए records इस्तेमाल करो। किसी value को नतीजे से जोड़ने के लिए switch expressions इस्तेमाल करो, जैसे status से अगला क़दम। Type के हिसाब से लंबा व्यवहार virtual methods (Day 1) पर छोड़ो।</p>",
          hg: "<p>DTOs, API models, messages aur chhote value objects (Money, Address) ke liye records use karo. Kisi value ko nateeje se jodne ke liye switch expressions use karo, jaise status se agla kadam. Type ke hisaab se lamba vyavhaar virtual methods (Day 1) par chhodo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add an arm so a <b>High</b> priority ticket that is <b>InProgress</b> returns <code>\"check with the agent today\"</code>. Test it with Ravi's ticket 502 (High, InProgress). Where must the new arm go?</p>",
            hi: "<p>एक arm जोड़ो ताकि <b>High</b> priority वाला <b>InProgress</b> ticket <code>\"check with the agent today\"</code> लौटाए। Ravi के ticket 502 (High, InProgress) से जाँचो। नया arm कहाँ रखना होगा?</p>",
            hg: "<p>Ek arm jodo taaki <b>High</b> priority wala <b>InProgress</b> ticket <code>\"check with the agent today\"</code> lautaye. Ravi ke ticket 502 (High, InProgress) se jaancho. Naya arm kahan rakhna hoga?</p>"
          },
          hint: {
            en: "<p>It must come <b>before</b> the general <code>InProgress</code> arm, otherwise that arm matches first.</p>",
            hi: "<p>उसे सामान्य <code>InProgress</code> arm से <b>पहले</b> रखना होगा, वरना वही arm पहले मेल खा जाएगा।</p>",
            hg: "<p>Use saamanya <code>InProgress</code> arm se <b>pehle</b> rakhna hoga, warna wahi arm pehle mel kha jaayega.</p>"
          },
          solution: {
            caption: {
              en: "Solution: the specific arm goes first",
              hi: "हल: ख़ास arm पहले",
              hg: "Solution: khaas arm pehle"
            },
            src: "var ticket = new TicketSummary(502, \"Ravi\", Priority.High, Status.InProgress);\nConsole.WriteLine(NextStep(ticket));\n\nstatic string NextStep(TicketSummary t) => t switch\n{\n    { Status: Status.Closed } => \"nothing to do\",\n    { Priority: Priority.High, Status: Status.InProgress } => \"check with the agent today\",\n    { Status: Status.InProgress } => \"follow up with the agent\",\n    _ => \"wait in the queue\"\n};\n\npublic enum Priority { Low, Medium, High }\npublic enum Status { Open, InProgress, Closed }\npublic record TicketSummary(int Id, string Customer, Priority Priority, Status Status);",
            check: "run",
            expected: "check with the agent today"
          }
        },
        quiz: {
          q: {
            en: "In a switch expression, two arms could match the same value. Which one runs?",
            hi: "Switch expression में दो arms एक ही value से मेल खा सकते हैं। कौन-सा चलता है?",
            hg: "Switch expression mein do arms ek hi value se mel kha sakte hain. Kaun sa chalta hai?"
          },
          options: [
            {
              en: "The first one written from the top",
              hi: "ऊपर से पहले लिखा हुआ",
              hg: "Upar se pehle likha hua"
            },
            {
              en: "The most specific one, wherever it is written",
              hi: "सबसे ख़ास वाला, चाहे वह कहीं भी लिखा हो",
              hg: "Sabse khaas wala, chahe woh kahin bhi likha ho"
            },
            {
              en: "The last one written",
              hi: "सबसे आख़िर में लिखा हुआ",
              hg: "Sabse aakhir mein likha hua"
            },
            {
              en: "Both run, one after the other",
              hi: "दोनों चलते हैं, एक के बाद एक",
              hg: "Dono chalte hain, ek ke baad ek"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Arms are tested from top to bottom and the first match wins. So put specific arms first and general ones (and <code>_</code>) last.</p>",
            hi: "<p>Arms ऊपर से नीचे जाँचे जाते हैं और पहला मेल जीतता है। इसलिए ख़ास arms पहले और सामान्य arms (और <code>_</code>) आख़िर में रखो।</p>",
            hg: "<p>Arms upar se neeche jaanche jaate hain aur pehla mel jeetta hai. Isliye khaas arms pehle aur saamanya arms (aur <code>_</code>) aakhir mein rakho.</p>"
          }
        },
        recap: {
          en: "<ul><li>A <b>record</b> gives equality by values, <code>ToString()</code> and <code>with</code> in one line.</li><li><code>with</code> makes a changed copy; the original stays the same (shallow).</li><li>A switch expression returns a value; the first matching arm wins, so specific arms go first.</li></ul>",
          hi: "<ul><li><b>Record</b> एक line में values से equality, <code>ToString()</code> और <code>with</code> देता है।</li><li><code>with</code> बदली हुई copy बनाता है; असली वैसा ही रहता है (shallow)।</li><li>Switch expression value लौटाती है; पहला मेल खाने वाला arm जीतता है, इसलिए ख़ास arms पहले।</li></ul>",
          hg: "<ul><li><b>Record</b> ek line mein values se equality, <code>ToString()</code> aur <code>with</code> deta hai.</li><li><code>with</code> badli hui copy banata hai; asli waisa hi rehta hai (shallow).</li><li>Switch expression value lautati hai; pehla mel khane wala arm jeetta hai, isliye khaas arms pehle.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "TicketSummary record, with, and a switch expression",
            hi: "TicketSummary record, with, और switch expression",
            hg: "TicketSummary record, with, aur switch expression"
          },
          src: "var t1 = new TicketSummary(501, \"Asha\", Priority.High, Status.Open);\nvar t2 = new TicketSummary(501, \"Asha\", Priority.High, Status.Open);\nConsole.WriteLine(t1);\nConsole.WriteLine($\"Same values: {t1 == t2}\");\n\nvar closed = t1 with { Status = Status.Closed };\nConsole.WriteLine($\"{t1.Status} -> {closed.Status}\");\n\nvar tickets = new[]\n{\n    t1,\n    closed,\n    new TicketSummary(502, \"Ravi\", Priority.Low, Status.InProgress),\n    new TicketSummary(503, \"Neha\", Priority.Medium, Status.Open)\n};\nforeach (var t in tickets)\n    Console.WriteLine($\"{t.Id}: {NextStep(t)}\");\n\nstatic string NextStep(TicketSummary t) => t switch\n{\n    { Status: Status.Closed } => \"nothing to do\",\n    { Priority: Priority.High, Status: Status.Open } => \"assign an agent now\",\n    { Status: Status.InProgress } => \"follow up with the agent\",\n    _ => \"wait in the queue\"\n};\n\npublic enum Priority { Low, Medium, High }\npublic enum Status { Open, InProgress, Closed }\npublic record TicketSummary(int Id, string Customer, Priority Priority, Status Status);",
          check: "run",
          expected: "TicketSummary { Id = 501, Customer = Asha, Priority = High, Status = Open }\nSame values: True\nOpen -> Closed\n501: assign an agent now\n501: nothing to do\n502: follow up with the agent\n503: wait in the queue"
        }
      ]
    },
    {
      id: "nullable-refs",
      depth: "short",
      title: {
        en: "Nullable reference types",
        hi: "Nullable reference types: null से सुरक्षा",
        hg: "Nullable reference types: null se suraksha"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 7 made <code>TicketSummary</code> safe to compare and copy. The last common crash in a CRM is <code>NullReferenceException</code>: a customer with no email, a ticket with no agent. Nullable reference types let the compiler warn you before that happens.",
          hi: "पाठ 7 में <code>TicketSummary</code> को compare और copy करने के लिए सुरक्षित बनाया। CRM में आख़िरी आम crash <code>NullReferenceException</code> है: बिना email वाला customer, बिना agent वाला ticket। Nullable reference types compiler से पहले ही चेतावनी दिलवाते हैं।",
          hg: "Lesson 7 mein <code>TicketSummary</code> ko compare aur copy karne ke liye surakshit banaya. CRM mein aakhri aam crash <code>NullReferenceException</code> hai: bina email wala customer, bina agent wala ticket. Nullable reference types compiler se pehle hi chetavani dilwate hain."
        },
        what: {
          en: "<p>With nullable reference types on, <code>string</code> means \"should never be null\" and <code>string?</code> means \"may be null\". If you use a <code>string?</code> without checking, the compiler gives a <b>warning</b> (for example CS8602).</p><p>Tools to handle null: <code>?.</code> (stop if null), <code>??</code> (fallback value), <code>??=</code> (assign only if null), <code>is null</code> and <code>required</code>.</p>",
          hi: "<p>Nullable reference types चालू हों तो <code>string</code> का मतलब है \"कभी null नहीं होना चाहिए\" और <code>string?</code> का मतलब \"null हो सकता है\"। बिना जाँचे <code>string?</code> इस्तेमाल करें तो compiler <b>warning</b> देता है (जैसे CS8602)।</p><p>Null संभालने के औज़ार: <code>?.</code> (null हो तो रुक जाओ), <code>??</code> (वैकल्पिक value), <code>??=</code> (null हो तभी assign), <code>is null</code> और <code>required</code>।</p>",
          hg: "<p>Nullable reference types chalu hon to <code>string</code> ka matlab hai \"kabhi null nahi hona chahiye\" aur <code>string?</code> ka matlab \"null ho sakta hai\". Bina jaanche <code>string?</code> use karein to compiler <b>warning</b> deta hai (jaise CS8602).</p><p>Null sambhalne ke auzaar: <code>?.</code> (null ho to ruk jao), <code>??</code> (vaikalpik value), <code>??=</code> (null ho tabhi assign), <code>is null</code> aur <code>required</code>.</p>"
        },
        why: {
          en: "<p>Many production crashes in .NET are a null that nobody expected. The compiler can find many of them for you at build time, so you decide on purpose which values may be missing.</p><p>Important: this is a <b>compile-time check only</b>. At run time <code>string</code> and <code>string?</code> are the same type.</p>",
          hi: "<p>.NET में production के कई crashes वह null होते हैं जिसकी किसी को उम्मीद नहीं थी। Compiler build के समय उनमें से कई ढूँढ सकता है, ताकि आप जानबूझकर तय करें कि कौन-सी values ग़ायब हो सकती हैं।</p><p>ज़रूरी: यह सिर्फ़ <b>compile-time की जाँच</b> है। Run time पर <code>string</code> और <code>string?</code> एक ही type हैं।</p>",
          hg: "<p>.NET mein production ke kai crashes woh null hote hain jiski kisi ko ummeed nahi thi. Compiler build ke samay unmein se kai dhoondh sakta hai, taaki aap jaanbujhkar tay karein ki kaun si values gaayab ho sakti hain.</p><p>Zaroori: ye sirf <b>compile-time ki jaanch</b> hai. Run time par <code>string</code> aur <code>string?</code> ek hi type hain.</p>"
        },
        analogy: {
          en: "<p>A bank form marks <b>Name *</b> as mandatory and <b>Email</b> as optional. The clerk at the counter says, \"You plan to send the statement by email, but email is optional. What if it is blank?\" That check happens at the counter (compile time). Once the form goes inside, nobody re-checks it (run time).</p>",
          hi: "<p>बैंक के form में <b>Name *</b> अनिवार्य है और <b>Email</b> वैकल्पिक। काउंटर का clerk कहता है, \"आप statement email से भेजना चाहते हैं, पर email वैकल्पिक है। अगर ख़ाली हुआ तो?\" यह जाँच काउंटर पर (compile time) होती है। form अंदर जाने के बाद उसे कोई दोबारा नहीं जाँचता (run time)।</p>",
          hg: "<p>Bank ke form mein <b>Name *</b> anivaarya hai aur <b>Email</b> vaikalpik. Counter ka clerk kehta hai, \"Aap statement email se bhejna chahte hain, par email vaikalpik hai. Agar khaali hua to?\" Ye jaanch counter par (compile time) hoti hai. Form andar jaane ke baad use koi dobara nahi jaanchta (run time).</p>"
        },
        focus: {
          caption: {
            en: "The warning you will see, and the fixes",
            hi: "जो warning दिखेगी, और उसके समाधान",
            hg: "Jo warning dikhegi, aur uske samaadhaan"
          },
          src: "Customer? c = FindCustomer(999);\nConsole.WriteLine(c.Name);               // warning CS8602: possible null reference\n\nConsole.WriteLine(c?.Name);              // fix 1: ?. gives null instead of a crash\nConsole.WriteLine(c?.Name ?? \"guest\");   // fix 2: ?? gives a fallback value\nif (c is not null) Console.WriteLine(c.Name);   // fix 3: check first",
          check: "none"
        },
        lines: [
          {
            code: "Customer? missing = FindCustomer(999);",
            note: {
              en: "The <code>?</code> after the type says this variable may be null. The compiler will now make you check before using it.",
              hi: "Type के बाद का <code>?</code> कहता है कि यह variable null हो सकता है। अब compiler इस्तेमाल से पहले जाँच करवाएगा।",
              hg: "Type ke baad ka <code>?</code> kehta hai ki ye variable null ho sakta hai. Ab compiler istemaal se pehle jaanch karwayega."
            }
          },
          {
            code: "Console.WriteLine(missing?.Name ?? \"no such customer\");",
            note: {
              en: "<code>?.</code> returns null instead of crashing, and <code>??</code> then supplies a fallback value.",
              hi: "<code>?.</code> crash की जगह null लौटाता है, और <code>??</code> फिर वैकल्पिक value दे देता है।",
              hg: "<code>?.</code> crash ki jagah null lautaata hai, aur <code>??</code> phir vaikalpik value de deta hai."
            }
          },
          {
            code: "ravi.Email ??= \"ravi@example.com\";",
            note: {
              en: "<code>??=</code> assigns only when the left side is null. Ravi had no email, so he gets this one.",
              hi: "<code>??=</code> तभी assign करता है जब बायाँ हिस्सा null हो। Ravi का email नहीं था, इसलिए उसे यह मिलता है।",
              hg: "<code>??=</code> tabhi assign karta hai jab baayan hissa null ho. Ravi ka email nahi tha, isliye use ye milta hai."
            }
          },
          {
            code: "int length = c.Email?.Length ?? 0;",
            note: {
              en: "No warning here: <code>Email</code> is <code>string?</code>, and <code>?.</code> plus <code>??</code> handle the null case.",
              hi: "यहाँ कोई warning नहीं: <code>Email</code> <code>string?</code> है, और <code>?.</code> व <code>??</code> null वाली स्थिति संभाल लेते हैं।",
              hg: "Yahan koi warning nahi: <code>Email</code> <code>string?</code> hai, aur <code>?.</code> va <code>??</code> null wali sthiti sambhal lete hain."
            }
          },
          {
            code: "public required string Name { get; init; }",
            note: {
              en: "<code>required</code> forces whoever creates a <code>Customer</code> to set <code>Name</code>, so it is never null. No CS8618 warning.",
              hi: "<code>required</code> <code>Customer</code> बनाने वाले को <code>Name</code> set करने पर मजबूर करता है, इसलिए वह कभी null नहीं होता। CS8618 warning नहीं आती।",
              hg: "<code>required</code> <code>Customer</code> banane wale ko <code>Name</code> set karne par majboor karta hai, isliye woh kabhi null nahi hota. CS8618 warning nahi aati."
            }
          },
          {
            code: "public string? Email { get; set; }",
            note: {
              en: "Email is optional by design, so we say so in the type. Callers now know they must handle null.",
              hi: "Email डिज़ाइन से वैकल्पिक है, इसलिए हम type में यही कहते हैं। अब callers जानते हैं कि उन्हें null संभालना है।",
              hg: "Email design se vaikalpik hai, isliye hum type mein yahi kehte hain. Ab callers jaante hain ki unhe null sambhalna hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Silencing warnings with <code>!</code> (for example <code>c!.Name</code>). It only hides the warning; at run time it can still crash.</li><li>Adding <code>?</code> to everything to remove warnings. Then every caller must check, and nothing is protected.</li><li>Thinking the compiler checks at run time. A <code>string</code> can still be null if the caller ignores warnings or passes <code>null!</code>.</li></ul>",
          hi: "<ul><li>Warnings को <code>!</code> से चुप कराना (जैसे <code>c!.Name</code>)। यह सिर्फ़ warning छिपाता है; run time पर फिर भी crash हो सकता है।</li><li>Warnings हटाने के लिए हर जगह <code>?</code> लगा देना। तब हर caller को जाँचना पड़ेगा, और कुछ सुरक्षित नहीं रहेगा।</li><li>यह सोचना कि compiler run time पर जाँचता है। अगर caller warnings अनदेखी करे या <code>null!</code> दे, तो <code>string</code> फिर भी null हो सकती है।</li></ul>",
          hg: "<ul><li>Warnings ko <code>!</code> se chup karana (jaise <code>c!.Name</code>). Ye sirf warning chhipata hai; run time par phir bhi crash ho sakta hai.</li><li>Warnings hatane ke liye har jagah <code>?</code> laga dena. Tab har caller ko jaanchna padega, aur kuch surakshit nahi rahega.</li><li>Ye sochna ki compiler run time par jaanchta hai. Agar caller warnings andekhi kare ya <code>null!</code> de, to <code>string</code> phir bhi null ho sakti hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Keep nullable reference types on in every new project (the default since .NET 6). For each member decide: can null be a valid value? If yes, use <code>?</code>; if no, keep it non-nullable and make it <code>required</code> or set it in the constructor. Public methods should still guard their arguments.</p>",
          hi: "<p>हर नए project में nullable reference types चालू रखो (.NET 6 से यही default है)। हर member के लिए तय करो: क्या null सही value हो सकती है? हाँ तो <code>?</code>; नहीं तो उसे non-nullable रखो और <code>required</code> बनाओ या constructor में set करो। Public methods को फिर भी अपने arguments जाँचने चाहिए।</p>",
          hg: "<p>Har naye project mein nullable reference types chalu rakho (.NET 6 se yahi default hai). Har member ke liye tay karo: kya null sahi value ho sakti hai? Haan to <code>?</code>; nahi to use non-nullable rakho aur <code>required</code> banao ya constructor mein set karo. Public methods ko phir bhi apne arguments jaanchne chahiye.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add an optional <code>string? Phone</code> to <code>Customer</code>. For Neha, who has no phone, print <code>Phone: not given</code> using <code>?.</code> or <code>??</code>.</p>",
            hi: "<p><code>Customer</code> में वैकल्पिक <code>string? Phone</code> जोड़ो। Neha के लिए, जिसका फ़ोन नहीं है, <code>?.</code> या <code>??</code> से <code>Phone: not given</code> print करो।</p>",
            hg: "<p><code>Customer</code> mein vaikalpik <code>string? Phone</code> jodo. Neha ke liye, jiska phone nahi hai, <code>?.</code> ya <code>??</code> se <code>Phone: not given</code> print karo.</p>"
          },
          hint: {
            en: "<p>Try <code>neha.Phone ?? \"not given\"</code>.</p>",
            hi: "<p>यह आज़माओ: <code>neha.Phone ?? \"not given\"</code>।</p>",
            hg: "<p>Ye aazmao: <code>neha.Phone ?? \"not given\"</code>.</p>"
          },
          solution: {
            caption: {
              en: "Solution: an optional Phone",
              hi: "हल: वैकल्पिक Phone",
              hg: "Solution: vaikalpik Phone"
            },
            src: "var neha = new Customer { Name = \"Neha\" };\nConsole.WriteLine($\"Phone: {neha.Phone ?? \"not given\"}\");\n\npublic class Customer\n{\n    public required string Name { get; init; }\n    public string? Phone { get; set; }\n}",
            check: "run",
            expected: "Phone: not given"
          }
        },
        quiz: {
          q: {
            en: "What does changing a property from <code>string</code> to <code>string?</code> change <b>at run time</b>?",
            hi: "किसी property को <code>string</code> से <code>string?</code> करने पर <b>run time पर</b> क्या बदलता है?",
            hg: "Kisi property ko <code>string</code> se <code>string?</code> karne par <b>run time par</b> kya badalta hai?"
          },
          options: [
            {
              en: "The runtime throws an exception if the value is null",
              hi: "Value null हो तो runtime exception फेंकता है",
              hg: "Value null ho to runtime exception phenkta hai"
            },
            {
              en: "Nothing: it is only a compile-time annotation that drives warnings",
              hi: "कुछ नहीं: यह सिर्फ़ compile-time का annotation है जो warnings देता है",
              hg: "Kuch nahi: ye sirf compile-time ka annotation hai jo warnings deta hai"
            },
            {
              en: "The property becomes a different type, like <code>Nullable&lt;string&gt;</code>",
              hi: "Property दूसरा type बन जाती है, जैसे <code>Nullable&lt;string&gt;</code>",
              hg: "Property doosra type ban jaati hai, jaise <code>Nullable&lt;string&gt;</code>"
            },
            {
              en: "The value is automatically replaced by an empty string",
              hi: "Value अपने-आप ख़ाली string से बदल जाती है",
              hg: "Value apne-aap khaali string se badal jaati hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Nullable reference types are compile-time only. Both are the same <code>string</code> at run time. (A value type like <code>int?</code> is different: it really is <code>Nullable&lt;int&gt;</code>.)</p>",
            hi: "<p>Nullable reference types सिर्फ़ compile-time के हैं। Run time पर दोनों एक ही <code>string</code> हैं। (<code>int?</code> जैसा value type अलग है: वह सचमुच <code>Nullable&lt;int&gt;</code> है।)</p>",
            hg: "<p>Nullable reference types sirf compile-time ke hain. Run time par dono ek hi <code>string</code> hain. (<code>int?</code> jaisa value type alag hai: woh sachmuch <code>Nullable&lt;int&gt;</code> hai.)</p>"
          }
        },
        recap: {
          en: "<ul><li><code>string</code> = never null by design; <code>string?</code> = may be null, check first.</li><li>Handle null with <code>?.</code>, <code>??</code>, <code>??=</code> and <code>is null</code>; use <code>required</code> for must-set properties.</li><li>It is a compile-time warning system only; <code>!</code> just hides the warning.</li></ul>",
          hi: "<ul><li><code>string</code> = डिज़ाइन से कभी null नहीं; <code>string?</code> = null हो सकता है, पहले जाँचो।</li><li>Null को <code>?.</code>, <code>??</code>, <code>??=</code> और <code>is null</code> से संभालो; ज़रूर-set वाली properties के लिए <code>required</code>।</li><li>यह सिर्फ़ compile-time की warning प्रणाली है; <code>!</code> बस warning छिपाता है।</li></ul>",
          hg: "<ul><li><code>string</code> = design se kabhi null nahi; <code>string?</code> = null ho sakta hai, pehle jaancho.</li><li>Null ko <code>?.</code>, <code>??</code>, <code>??=</code> aur <code>is null</code> se sambhalo; zaroor-set wali properties ke liye <code>required</code>.</li><li>Ye sirf compile-time ki warning pranali hai; <code>!</code> bas warning chhipata hai.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "Optional email, missing customer, and the null tools",
            hi: "वैकल्पिक email, ग़ायब customer, और null के औज़ार",
            hg: "Vaikalpik email, gaayab customer, aur null ke auzaar"
          },
          src: "Customer asha = new() { Name = \"Asha\", Email = \"asha@example.com\" };\nCustomer ravi = new() { Name = \"Ravi\" };      // Email is optional, so null is fine\n\nConsole.WriteLine(Describe(asha));\nConsole.WriteLine(Describe(ravi));\n\nCustomer? missing = FindCustomer(999);\nConsole.WriteLine(missing?.Name ?? \"no such customer\");\nif (missing is null) Console.WriteLine(\"Check for null before using it\");\n\nravi.Email ??= \"ravi@example.com\";             // assign only if it is null\nConsole.WriteLine(ravi.Email);\n\nstatic string Describe(Customer c)\n{\n    int length = c.Email?.Length ?? 0;\n    return $\"{c.Name}: email length {length}\";\n}\n\nstatic Customer? FindCustomer(int id) => id == 101 ? new Customer { Name = \"Asha\" } : null;\n\npublic class Customer\n{\n    public required string Name { get; init; }\n    public string? Email { get; set; }\n}",
          check: "run",
          expected: "Asha: email length 16\nRavi: email length 0\nno such customer\nCheck for null before using it\nravi@example.com"
        }
      ]
    },
    {
      id: "async-in-code",
      depth: "detailed",
      title: {
        en: "async/await in code: what runs when, TaskCompletionSource, Thread vs Task.Run",
        hi: "Code में async/await: क्या कब चलता है, TaskCompletionSource, Thread बनाम Task.Run",
        hg: "Code mein async/await: kya kab chalta hai, TaskCompletionSource, Thread vs Task.Run"
      },
      body: {
        en: "<ul>\n<li>The compiler turns an <code>async</code> method into a <b>state machine</b>. Every <code>await</code> is a point where the method can <b>pause</b> and later <b>resume</b> with all its local variables intact.</li>\n<li>Tasks from async methods are <b>\"hot\"</b> — the work has <b>already started</b> when you get the <code>Task</code>. <code>await</code> does not start anything; it waits for the result (and rethrows its exception).</li>\n<li><b>Fast path</b>: awaiting a task that is <b>already complete</b> just continues on the same thread, synchronously — no pause at all.</li>\n<li><b>Where does the code after <code>await</code> run?</b> If there was a <code>SynchronizationContext</code> (WPF/WinForms UI thread), it goes back there. Otherwise (ASP.NET Core, console apps, background services) it runs on a <b>thread-pool thread</b> — maybe a different thread than before the <code>await</code>. That is fine; just do not depend on thread identity.</li>\n<li><b><code>TaskCompletionSource&lt;T&gt;</code></b> creates a task that <b>you</b> complete — useful to wrap an old callback or event API as a <code>Task</code>. The demo below uses it as a fake \"database\" so the output order is fixed.</li>\n<li><b>Thread vs Task in code</b>: <code>new Thread(...)</code> + <code>Start()</code> + <code>Join()</code> gives you a dedicated OS thread but no result value, no exception flow and a blocked caller. <code>await Task.Run(...)</code> borrows a pool thread and gives back result and exceptions through <code>await</code>.</li>\n</ul>\n<p><b>When to use:</b> sequential awaits when step 2 needs step 1's result; <code>WhenAll</code> for independent calls (price + stock + reviews for a product page). <b>When not:</b> do not fire hundreds of <code>WhenAll</code> calls at a downstream API without a limit (use batching or <code>Parallel.ForEachAsync</code> with <code>MaxDegreeOfParallelism</code>), and do not create raw <code>Thread</code>s for normal work — keep them for rare cases like a long-running dedicated worker.</p>",
        hi: "<ul>\n<li>Compiler <code>async</code> method को एक <b>state machine</b> में बदल देता है। हर <code>await</code> एक ऐसा point है जहाँ method <b>रुक</b> सकता है और बाद में अपने सारे local variables के साथ <b>फिर से चल</b> सकता है।</li>\n<li>Async methods से मिले tasks <b>\"hot\"</b> होते हैं — जब आपको <code>Task</code> मिलता है तब तक काम <b>शुरू हो चुका</b> होता है। <code>await</code> कुछ शुरू नहीं करता; वो result का इंतज़ार करता है (और उसका exception दोबारा throw करता है)।</li>\n<li><b>Fast path</b>: जो task <b>पहले से complete</b> है उस पर await करने से code उसी thread पर, synchronously आगे चलता रहता है — कोई रुकावट नहीं।</li>\n<li><b><code>await</code> के बाद वाला code कहाँ चलता है?</b> अगर <code>SynchronizationContext</code> था (WPF/WinForms UI thread), तो वहीं वापस जाता है। वरना (ASP.NET Core, console apps, background services) वो <b>thread-pool thread</b> पर चलता है — हो सकता है <code>await</code> से पहले वाले thread से अलग हो। इसमें कोई दिक्कत नहीं; बस thread की पहचान पर depend मत करो।</li>\n<li><b><code>TaskCompletionSource&lt;T&gt;</code></b> ऐसा task बनाता है जिसे <b>आप</b> complete करते हो — पुराने callback या event API को <code>Task</code> में wrap करने के काम आता है। नीचे के demo में यह नकली \"database\" है ताकि output का order तय रहे।</li>\n<li><b>Code में Thread बनाम Task</b>: <code>new Thread(...)</code> + <code>Start()</code> + <code>Join()</code> से आपको अपना OS thread मिलता है, पर न result value, न exception flow, और caller block रहता है। <code>await Task.Run(...)</code> pool से thread उधार लेता है और <code>await</code> के ज़रिए result और exceptions वापस देता है।</li>\n</ul>\n<p><b>कब use करें:</b> sequential awaits जब step 2 को step 1 का result चाहिए; independent calls के लिए <code>WhenAll</code> (product page के लिए price + stock + reviews)। <b>कब नहीं:</b> किसी downstream API पर बिना limit के सैकड़ों <code>WhenAll</code> calls मत दागो (batching या <code>MaxDegreeOfParallelism</code> के साथ <code>Parallel.ForEachAsync</code> use करो), और normal काम के लिए raw <code>Thread</code> मत बनाओ — उन्हें long-running dedicated worker जैसे rare cases के लिए रखो।</p>",
        hg: "<ul>\n<li>Compiler <code>async</code> method ko ek <b>state machine</b> mein badal deta hai. Har <code>await</code> ek aisa point hai jahan method <b>ruk</b> sakta hai aur baad mein apne saare local variables ke saath <b>phir se chal</b> sakta hai.</li>\n<li>Async methods se mile tasks <b>\"hot\"</b> hote hain — jab aapko <code>Task</code> milta hai tab tak kaam <b>shuru ho chuka</b> hota hai. <code>await</code> kuch shuru nahi karta; woh result ka intezaar karta hai (aur uska exception dobara throw karta hai).</li>\n<li><b>Fast path</b>: jo task <b>pehle se complete</b> hai us par await karne se code usi thread par, synchronously aage chalta rehta hai — koi rukaawat nahi.</li>\n<li><b><code>await</code> ke baad wala code kahan chalta hai?</b> Agar <code>SynchronizationContext</code> tha (WPF/WinForms UI thread), to wahin wapas jaata hai. Warna (ASP.NET Core, console apps, background services) woh <b>thread-pool thread</b> par chalta hai — ho sakta hai <code>await</code> se pehle wale thread se alag ho. Ismein koi dikkat nahi; bas thread ki pehchaan par depend mat karo.</li>\n<li><b><code>TaskCompletionSource&lt;T&gt;</code></b> aisa task banata hai jise <b>aap</b> complete karte ho — purane callback ya event API ko <code>Task</code> mein wrap karne ke kaam aata hai. Neeche ke demo mein yeh nakli \"database\" hai taaki output ka order tay rahe.</li>\n<li><b>Code mein Thread vs Task</b>: <code>new Thread(...)</code> + <code>Start()</code> + <code>Join()</code> se aapko apna OS thread milta hai, par na result value, na exception flow, aur caller block rehta hai. <code>await Task.Run(...)</code> pool se thread udhaar leta hai aur <code>await</code> ke zariye result aur exceptions wapas deta hai.</li>\n</ul>\n<p><b>Kab use karein:</b> sequential awaits jab step 2 ko step 1 ka result chahiye; independent calls ke liye <code>WhenAll</code> (product page ke liye price + stock + reviews). <b>Kab nahi:</b> kisi downstream API par bina limit ke saikdon <code>WhenAll</code> calls mat daago (batching ya <code>MaxDegreeOfParallelism</code> ke saath <code>Parallel.ForEachAsync</code> use karo), aur normal kaam ke liye raw <code>Thread</code> mat banao — unhe long-running dedicated worker jaise rare cases ke liye rakho.</p>"
      },
      code: [
        {
          caption: {
            en: "What runs when: sync until the first incomplete await; sequential vs WhenAll; Thread vs Task.Run",
            hi: "क्या कब चलता है: पहले अधूरे await तक sync; sequential बनाम WhenAll; Thread बनाम Task.Run",
            hg: "Kya kab chalta hai: pehle adhoore await tak sync; sequential vs WhenAll; Thread vs Task.Run"
          },
          check: "run",
          expected: "1. Calling GetStockAsync\n2. Checking rice (still synchronous)\n3. Caller continues. Task done? False\n4. Database answered\n5. Stock = 25\nThread: 500500, Task: 500500",
          src: "// A fake \"database\": we decide when it answers, so the output order is fixed.\nvar database = new TaskCompletionSource<int>();\n\nConsole.WriteLine(\"1. Calling GetStockAsync\");\nTask<int> stockTask = GetStockAsync(\"rice\", database.Task);\nConsole.WriteLine($\"3. Caller continues. Task done? {stockTask.IsCompleted}\");\n\ndatabase.SetResult(25);                // the database answers now\nint stock = await stockTask;\nConsole.WriteLine($\"5. Stock = {stock}\");\n\n// CPU-bound work: raw Thread vs Task.Run\nint threadResult = 0;\nvar thread = new Thread(() => threadResult = SumTo(1000));\nthread.Start();\nthread.Join();                         // the caller blocks; no built-in result\nint taskResult = await Task.Run(() => SumTo(1000));   // result (and exceptions) come back via await\nConsole.WriteLine($\"Thread: {threadResult}, Task: {taskResult}\");\n\nstatic async Task<int> GetStockAsync(string item, Task<int> dbCall)\n{\n    Console.WriteLine($\"2. Checking {item} (still synchronous)\");\n    int qty = await dbCall;            // not complete yet: return a Task to the caller here\n    Console.WriteLine(\"4. Database answered\");\n    return qty;\n}\n\nstatic int SumTo(int n)\n{\n    int sum = 0;\n    for (int i = 1; i <= n; i++) sum += i;\n    return sum;\n}"
        }
      ]
    },
    {
      id: "async-pitfalls-in-code",
      depth: "detailed",
      title: {
        en: "Async pitfalls in code: deadlocks, ConfigureAwait, async void, Task.Run, lock",
        hi: "Code में async की गलतियाँ: deadlocks, ConfigureAwait, async void, Task.Run, lock",
        hg: "Code mein async ki galtiyan: deadlocks, ConfigureAwait, async void, Task.Run, lock"
      },
      body: {
        en: "<ul>\n<li><b>Deadlock with <code>.Result</code> / <code>.Wait()</code></b>: happens where a <b>SynchronizationContext</b> allows only one thread — WPF/WinForms UI thread, old ASP.NET (System.Web). The awaited code wants to resume on that thread, but that thread is blocked waiting for it.</li>\n<li><b>ASP.NET Core has no SynchronizationContext</b>, so this exact deadlock does not happen there. But blocking still wastes a thread-pool thread per request; under load this causes <b>thread-pool starvation</b> (slow responses, timeouts). Fix: <b>async all the way</b>.</li>\n<li><b><code>ConfigureAwait(false)</code></b>: \"do not resume on the captured context\". In <b>library code</b> it avoids the deadlock above if some caller blocks, and saves a jump back to the UI thread. In <b>UI code</b> you usually need the context (to touch controls), so do not use it there. In <b>ASP.NET Core app code</b> it is not needed — many teams skip it for readability. Analyzer <b>CA2007</b> (off by default) can enforce it in a library.</li>\n<li><b><code>async void</code></b>: the caller cannot await it or catch its exceptions. An exception goes to the SynchronizationContext — with none (ASP.NET Core, console) it <b>crashes the process</b>. Use it <b>only for event handlers</b>, with try/catch inside. Watch for hidden ones: an <code>async</code> lambda passed to an <code>Action</code> (e.g. <code>list.ForEach(async x =&gt; ...)</code>) is <code>async void</code>.</li>\n<li><b><code>Task.Run</code> in ASP.NET Core</b> is usually a smell. The request already runs on a pool thread; <code>await Task.Run(work)</code> just moves the work to another pool thread — extra cost, no gain. Fire-and-forget <code>_ = Task.Run(...)</code> is worse: exceptions are lost, scoped services like <code>DbContext</code> are disposed when the request ends, and work is lost on shutdown. Use a <b><code>BackgroundService</code> + a queue</b> (e.g. <code>Channel&lt;T&gt;</code>) instead.</li>\n<li><b>Forgotten <code>await</code></b>: calling an async method without awaiting it gives warning <b>CS4014</b> — an accidental fire-and-forget. Treat it as a bug in code review.</li>\n<li><b>No <code>await</code> inside <code>lock</code></b> (error <b>CS1996</b>) — a lock belongs to a thread, and code after <code>await</code> may run on another thread. Use <b><code>SemaphoreSlim(1, 1)</code></b> with <code>await WaitAsync()</code> and <code>Release()</code> in <code>finally</code>.</li>\n</ul>\n<p><b>When to use:</b> <code>ConfigureAwait(false)</code> on every <code>await</code> in reusable libraries/NuGet packages; <code>async void</code> only in UI event handlers; <code>Task.Run</code> for CPU work in desktop apps. <b>When not:</b> <code>.Result</code>/<code>.Wait()</code> in request or UI code (if a sync API is unavoidable, e.g. in <code>Main</code> of an old app, keep it at the very top and document why); <code>Task.Run</code> wrappers inside ASP.NET Core controllers.</p>",
        hi: "<ul>\n<li><b><code>.Result</code> / <code>.Wait()</code> से deadlock</b>: वहाँ होता है जहाँ <b>SynchronizationContext</b> सिर्फ़ एक thread की इजाज़त देता है — WPF/WinForms UI thread, पुराना ASP.NET (System.Web)। Await किया गया code उसी thread पर वापस आना चाहता है, पर वो thread उसी के इंतज़ार में block है।</li>\n<li><b>ASP.NET Core में SynchronizationContext नहीं है</b>, इसलिए यह वाला deadlock वहाँ नहीं होता। पर block करने से हर request पर एक thread-pool thread बर्बाद होता है; load पर इससे <b>thread-pool starvation</b> होती है (धीमे responses, timeouts)। इलाज: <b>async all the way</b>।</li>\n<li><b><code>ConfigureAwait(false)</code></b>: \"captured context पर वापस मत आओ\"। <b>Library code</b> में यह ऊपर वाले deadlock से बचाता है अगर कोई caller block करे, और UI thread पर वापस जाने का चक्कर बचाता है। <b>UI code</b> में आमतौर पर context चाहिए (controls छूने के लिए), इसलिए वहाँ मत लगाओ। <b>ASP.NET Core app code</b> में इसकी ज़रूरत नहीं — कई teams readability के लिए इसे छोड़ देती हैं। Analyzer <b>CA2007</b> (by default off) library में इसे enforce कर सकता है।</li>\n<li><b><code>async void</code></b>: caller इसे await नहीं कर सकता, न इसके exceptions पकड़ सकता है। Exception SynchronizationContext पर जाता है — context न हो (ASP.NET Core, console) तो <b>process crash हो जाता है</b>। इसे <b>सिर्फ़ event handlers के लिए</b> use करो, अंदर try/catch के साथ। छुपे हुए cases देखो: <code>Action</code> में दिया गया <code>async</code> lambda (जैसे <code>list.ForEach(async x =&gt; ...)</code>) <code>async void</code> होता है।</li>\n<li><b>ASP.NET Core में <code>Task.Run</code></b> अक्सर एक smell है। Request पहले से pool thread पर चल रही है; <code>await Task.Run(work)</code> बस काम को दूसरे pool thread पर ले जाता है — extra cost, फ़ायदा कुछ नहीं। Fire-and-forget <code>_ = Task.Run(...)</code> और बुरा है: exceptions खो जाते हैं, request ख़त्म होते ही <code>DbContext</code> जैसी scoped services dispose हो जाती हैं, और shutdown पर काम खो जाता है। इसकी जगह <b><code>BackgroundService</code> + एक queue</b> (जैसे <code>Channel&lt;T&gt;</code>) use करो।</li>\n<li><b>भूला हुआ <code>await</code></b>: async method को बिना await किए call करने पर warning <b>CS4014</b> आती है — गलती से हुआ fire-and-forget। Code review में इसे bug मानो।</li>\n<li><b><code>lock</code> के अंदर <code>await</code> नहीं</b> (error <b>CS1996</b>) — lock एक thread का होता है, और <code>await</code> के बाद code दूसरे thread पर चल सकता है। <b><code>SemaphoreSlim(1, 1)</code></b> use करो: <code>await WaitAsync()</code> और <code>finally</code> में <code>Release()</code>।</li>\n</ul>\n<p><b>कब use करें:</b> reusable libraries/NuGet packages में हर <code>await</code> पर <code>ConfigureAwait(false)</code>; <code>async void</code> सिर्फ़ UI event handlers में; desktop apps में CPU काम के लिए <code>Task.Run</code>। <b>कब नहीं:</b> request या UI code में <code>.Result</code>/<code>.Wait()</code> (अगर sync API मजबूरी है, जैसे किसी पुराने app के <code>Main</code> में, तो उसे सबसे ऊपर रखो और वजह लिखो); ASP.NET Core controllers के अंदर <code>Task.Run</code> wrappers।</p>",
        hg: "<ul>\n<li><b><code>.Result</code> / <code>.Wait()</code> se deadlock</b>: wahan hota hai jahan <b>SynchronizationContext</b> sirf ek thread ki ijaazat deta hai — WPF/WinForms UI thread, purana ASP.NET (System.Web). Await kiya gaya code usi thread par wapas aana chahta hai, par woh thread usi ke intezaar mein block hai.</li>\n<li><b>ASP.NET Core mein SynchronizationContext nahi hai</b>, isliye yeh wala deadlock wahan nahi hota. Par block karne se har request par ek thread-pool thread barbaad hota hai; load par isse <b>thread-pool starvation</b> hoti hai (dheeme responses, timeouts). Ilaaj: <b>async all the way</b>.</li>\n<li><b><code>ConfigureAwait(false)</code></b>: \"captured context par wapas mat aao\". <b>Library code</b> mein yeh upar wale deadlock se bachata hai agar koi caller block kare, aur UI thread par wapas jaane ka chakkar bachata hai. <b>UI code</b> mein aamtaur par context chahiye (controls chhoone ke liye), isliye wahan mat lagao. <b>ASP.NET Core app code</b> mein iski zaroorat nahi — kai teams readability ke liye ise chhod deti hain. Analyzer <b>CA2007</b> (by default off) library mein ise enforce kar sakta hai.</li>\n<li><b><code>async void</code></b>: caller ise await nahi kar sakta, na iske exceptions pakad sakta hai. Exception SynchronizationContext par jaata hai — context na ho (ASP.NET Core, console) to <b>process crash ho jaata hai</b>. Ise <b>sirf event handlers ke liye</b> use karo, andar try/catch ke saath. Chhupe hue cases dekho: <code>Action</code> mein diya gaya <code>async</code> lambda (jaise <code>list.ForEach(async x =&gt; ...)</code>) <code>async void</code> hota hai.</li>\n<li><b>ASP.NET Core mein <code>Task.Run</code></b> aksar ek smell hai. Request pehle se pool thread par chal rahi hai; <code>await Task.Run(work)</code> bas kaam ko doosre pool thread par le jaata hai — extra cost, fayda kuch nahi. Fire-and-forget <code>_ = Task.Run(...)</code> aur bura hai: exceptions kho jaate hain, request khatam hote hi <code>DbContext</code> jaisi scoped services dispose ho jaati hain, aur shutdown par kaam kho jaata hai. Iski jagah <b><code>BackgroundService</code> + ek queue</b> (jaise <code>Channel&lt;T&gt;</code>) use karo.</li>\n<li><b>Bhoola hua <code>await</code></b>: async method ko bina await kiye call karne par warning <b>CS4014</b> aati hai — galti se hua fire-and-forget. Code review mein ise bug maano.</li>\n<li><b><code>lock</code> ke andar <code>await</code> nahi</b> (error <b>CS1996</b>) — lock ek thread ka hota hai, aur <code>await</code> ke baad code doosre thread par chal sakta hai. <b><code>SemaphoreSlim(1, 1)</code></b> use karo: <code>await WaitAsync()</code> aur <code>finally</code> mein <code>Release()</code>.</li>\n</ul>\n<p><b>Kab use karein:</b> reusable libraries/NuGet packages mein har <code>await</code> par <code>ConfigureAwait(false)</code>; <code>async void</code> sirf UI event handlers mein; desktop apps mein CPU kaam ke liye <code>Task.Run</code>. <b>Kab nahi:</b> request ya UI code mein <code>.Result</code>/<code>.Wait()</code> (agar sync API majboori hai, jaise kisi purane app ke <code>Main</code> mein, to use sabse upar rakho aur wajah likho); ASP.NET Core controllers ke andar <code>Task.Run</code> wrappers.</p>"
      },
      code: [
        {
          caption: {
            en: "Library code with ConfigureAwait(false), async all the way, async void only for an event handler, SemaphoreSlim instead of lock",
            hi: "ConfigureAwait(false) वाला library code, async all the way, async void सिर्फ़ event handler के लिए, lock की जगह SemaphoreSlim",
            hg: "ConfigureAwait(false) wala library code, async all the way, async void sirf event handler ke liye, lock ki jagah SemaphoreSlim"
          },
          check: "compile",
          src: "using System.Globalization;\n\n// Library code: it does not know who calls it (UI app? ASP.NET Core?),\n// so it does not need to resume on the caller's context.\npublic sealed class RateClient(HttpClient http)\n{\n    public async Task<decimal> GetRateAsync(string currency, CancellationToken ct = default)\n    {\n        string text = await http.GetStringAsync($\"/rates/{currency}\", ct).ConfigureAwait(false);\n        return decimal.Parse(text, CultureInfo.InvariantCulture);\n    }\n}\n\npublic sealed class CheckoutService(RateClient rates)\n{\n    // BAD: sync-over-async. Blocks a thread; can deadlock in UI / classic ASP.NET apps.\n    public decimal TotalBlocking(decimal amount) => amount * rates.GetRateAsync(\"USD\").Result;\n\n    // GOOD: async all the way, cancellation passed through.\n    public async Task<decimal> TotalAsync(decimal amount, CancellationToken ct)\n        => amount * await rates.GetRateAsync(\"USD\", ct);\n}\n\npublic sealed class SaveForm\n{\n    // UI event handler: the accepted place for async void. Catch everything inside.\n    private async void OnSaveClicked(object? sender, EventArgs e)\n    {\n        try\n        {\n            await SaveAsync();\n        }\n        catch (Exception ex)\n        {\n            Console.WriteLine($\"Save failed: {ex.Message}\");   // show a message, log it\n        }\n    }\n\n    private Task SaveAsync() => Task.CompletedTask;\n}\n\n// 'lock' cannot contain 'await' (CS1996). SemaphoreSlim works with async code.\npublic sealed class TokenCache\n{\n    private readonly SemaphoreSlim _gate = new(1, 1);\n    private string? _token;\n\n    public async Task<string> GetTokenAsync(Func<CancellationToken, Task<string>> fetchToken, CancellationToken ct = default)\n    {\n        await _gate.WaitAsync(ct);\n        try\n        {\n            return _token ??= await fetchToken(ct);   // only one caller fetches\n        }\n        finally\n        {\n            _gate.Release();\n        }\n    }\n}"
        }
      ]
    },
    {
      id: "cancellation-streams-in-code",
      depth: "detailed",
      title: {
        en: "IAsyncEnumerable and IAsyncDisposable in code (with cancellation in streams)",
        hi: "Code में IAsyncEnumerable और IAsyncDisposable (streams में cancellation के साथ)",
        hg: "Code mein IAsyncEnumerable aur IAsyncDisposable (streams mein cancellation ke saath)"
      },
      body: {
        en: "<p><b>Analogy — food app and pani-puri:</b> when you cancel a food-app order, nobody runs into the kitchen and snatches the pan. The kitchen <b>checks the order status before each step</b> and stops politely — that is <b>cooperative cancellation</b> with a <code>CancellationToken</code>. And the pani-puri wala gives you <b>one puri at a time as soon as it is ready</b>, instead of making all six and then handing over the plate — that is an <b>async stream</b> (<code>IAsyncEnumerable&lt;T&gt;</code>).</p>\n<ul>\n<li><b>ASP.NET Core</b>: add a <code>CancellationToken</code> parameter to an action or minimal-API handler — it is bound to <code>HttpContext.RequestAborted</code>, so the work stops when the client disconnects. Pass it down to EF Core and <code>HttpClient</code> calls.</li>\n<li><b><code>IAsyncEnumerable&lt;T&gt;</code></b> (C# 8): write an <code>async IAsyncEnumerable&lt;T&gt;</code> method with <code>await</code> and <code>yield return</code>; consume it with <b><code>await foreach</code></b>. Items flow one by one without loading everything into a <code>List</code> first. Mark the token parameter with <code>[EnumeratorCancellation]</code> so <code>WithCancellation(ct)</code> reaches it.</li>\n<li>Where you meet it: EF Core <code>AsAsyncEnumerable()</code>, gRPC/SignalR streaming, ASP.NET Core actions returning <code>IAsyncEnumerable&lt;T&gt;</code> (JSON is streamed), reading pages from a paged API.</li>\n<li><b><code>IAsyncDisposable</code></b>: <code>ValueTask DisposeAsync()</code> for cleanup that itself needs I/O (flush a stream, send a final network message). Use <b><code>await using</code></b>. <code>DbContext</code>, streams and <code>Utf8JsonWriter</code> implement it.</li>\n</ul>\n<p><b>When to use:</b> accept a <code>CancellationToken</code> (last parameter, <code>= default</code>) in every public async method that does I/O; <code>IAsyncEnumerable</code> for large or paged results processed item by item; <code>await using</code> when a type offers <code>DisposeAsync</code>. <b>When not:</b> do not check the token in tiny CPU loops every iteration (check every N items); do not stream with <code>IAsyncEnumerable</code> when the caller needs the full list anyway (sorting, counting) — a normal <code>Task&lt;List&lt;T&gt;&gt;</code> is simpler.</p>",
        hi: "<p><b>Analogy — food app और pani-puri:</b> जब आप food app पर order cancel करते हो, तो कोई kitchen में भागकर कढ़ाई नहीं छीनता। Kitchen <b>हर step से पहले order का status check करती है</b> और आराम से रुक जाती है — यही <code>CancellationToken</code> वाला <b>cooperative cancellation</b> है। और pani-puri वाला <b>हर puri बनते ही एक-एक करके</b> देता है, सारी छह बनाकर plate नहीं थमाता — यही <b>async stream</b> (<code>IAsyncEnumerable&lt;T&gt;</code>) है।</p>\n<ul>\n<li><b>ASP.NET Core</b>: action या minimal-API handler में <code>CancellationToken</code> parameter जोड़ो — वो <code>HttpContext.RequestAborted</code> से bind होता है, तो client disconnect होने पर काम रुक जाता है। इसे EF Core और <code>HttpClient</code> calls तक pass करो।</li>\n<li><b><code>IAsyncEnumerable&lt;T&gt;</code></b> (C# 8): <code>await</code> और <code>yield return</code> वाला <code>async IAsyncEnumerable&lt;T&gt;</code> method लिखो; उसे <b><code>await foreach</code></b> से consume करो। Items एक-एक करके आते हैं, पहले सब कुछ <code>List</code> में load किए बिना। Token parameter पर <code>[EnumeratorCancellation]</code> लगाओ ताकि <code>WithCancellation(ct)</code> उस तक पहुँचे।</li>\n<li>यह कहाँ मिलता है: EF Core <code>AsAsyncEnumerable()</code>, gRPC/SignalR streaming, <code>IAsyncEnumerable&lt;T&gt;</code> return करने वाले ASP.NET Core actions (JSON stream होता है), paged API से pages पढ़ना।</li>\n<li><b><code>IAsyncDisposable</code></b>: <code>ValueTask DisposeAsync()</code> ऐसे cleanup के लिए जिसमें ख़ुद I/O चाहिए (stream flush करना, आख़िरी network message भेजना)। <b><code>await using</code></b> use करो। <code>DbContext</code>, streams और <code>Utf8JsonWriter</code> इसे implement करते हैं।</li>\n</ul>\n<p><b>कब use करें:</b> I/O करने वाले हर public async method में <code>CancellationToken</code> लो (आख़िरी parameter, <code>= default</code>); बड़े या paged results जिन्हें item by item process करना है उनके लिए <code>IAsyncEnumerable</code>; जब type <code>DisposeAsync</code> देता है तो <code>await using</code>। <b>कब नहीं:</b> छोटे CPU loops में हर iteration पर token check मत करो (हर N items पर करो); जब caller को वैसे भी पूरी list चाहिए (sorting, counting) तो <code>IAsyncEnumerable</code> से stream मत करो — normal <code>Task&lt;List&lt;T&gt;&gt;</code> ज़्यादा आसान है।</p>",
        hg: "<p><b>Analogy — food app aur pani-puri:</b> jab aap food app par order cancel karte ho, to koi kitchen mein bhaagkar kadhai nahi chheenta. Kitchen <b>har step se pehle order ka status check karti hai</b> aur aaraam se ruk jaati hai — yahi <code>CancellationToken</code> wala <b>cooperative cancellation</b> hai. Aur pani-puri wala <b>har puri bante hi ek-ek karke</b> deta hai, saari chhah banakar plate nahi thamaata — yahi <b>async stream</b> (<code>IAsyncEnumerable&lt;T&gt;</code>) hai.</p>\n<ul>\n<li><b>ASP.NET Core</b>: action ya minimal-API handler mein <code>CancellationToken</code> parameter jodo — woh <code>HttpContext.RequestAborted</code> se bind hota hai, to client disconnect hone par kaam ruk jaata hai. Ise EF Core aur <code>HttpClient</code> calls tak pass karo.</li>\n<li><b><code>IAsyncEnumerable&lt;T&gt;</code></b> (C# 8): <code>await</code> aur <code>yield return</code> wala <code>async IAsyncEnumerable&lt;T&gt;</code> method likho; use <b><code>await foreach</code></b> se consume karo. Items ek-ek karke aate hain, pehle sab kuch <code>List</code> mein load kiye bina. Token parameter par <code>[EnumeratorCancellation]</code> lagao taaki <code>WithCancellation(ct)</code> us tak pahunche.</li>\n<li>Yeh kahan milta hai: EF Core <code>AsAsyncEnumerable()</code>, gRPC/SignalR streaming, <code>IAsyncEnumerable&lt;T&gt;</code> return karne wale ASP.NET Core actions (JSON stream hota hai), paged API se pages padhna.</li>\n<li><b><code>IAsyncDisposable</code></b>: <code>ValueTask DisposeAsync()</code> aise cleanup ke liye jismein khud I/O chahiye (stream flush karna, aakhri network message bhejna). <b><code>await using</code></b> use karo. <code>DbContext</code>, streams aur <code>Utf8JsonWriter</code> ise implement karte hain.</li>\n</ul>\n<p><b>Kab use karein:</b> I/O karne wale har public async method mein <code>CancellationToken</code> lo (aakhri parameter, <code>= default</code>); bade ya paged results jinhe item by item process karna hai unke liye <code>IAsyncEnumerable</code>; jab type <code>DisposeAsync</code> deta hai to <code>await using</code>. <b>Kab nahi:</b> chhote CPU loops mein har iteration par token check mat karo (har N items par karo); jab caller ko waise bhi poori list chahiye (sorting, counting) to <code>IAsyncEnumerable</code> se stream mat karo — normal <code>Task&lt;List&lt;T&gt;&gt;</code> zyada aasaan hai.</p>"
      },
      code: [
        {
          caption: {
            en: "await foreach over an async stream, cooperative cancellation, and await using",
            hi: "Async stream पर await foreach, cooperative cancellation, और await using",
            hg: "Async stream par await foreach, cooperative cancellation, aur await using"
          },
          check: "run",
          expected: "Got page 1\nGot page 2\nStopped: cancellation requested\nWriting daily sales\nFlushed and closed\nAfter await using",
          src: "using System.Runtime.CompilerServices;\n\nusing var cts = new CancellationTokenSource();\n\ntry\n{\n    await foreach (int page in ReadPagesAsync(cts.Token))\n    {\n        Console.WriteLine($\"Got page {page}\");\n        if (page == 2) cts.Cancel();          // e.g. the user closed the screen\n    }\n}\ncatch (OperationCanceledException)\n{\n    Console.WriteLine(\"Stopped: cancellation requested\");   // expected, not an error\n}\n\nawait using (var report = new ReportWriter())\n{\n    await report.WriteAsync(\"daily sales\");\n}                                             // DisposeAsync is awaited here\nConsole.WriteLine(\"After await using\");\n\nstatic async IAsyncEnumerable<int> ReadPagesAsync(\n    [EnumeratorCancellation] CancellationToken ct = default)\n{\n    for (int page = 1; page <= 5; page++)\n    {\n        ct.ThrowIfCancellationRequested();    // cooperative: we check the token\n        await Task.Delay(10, ct);             // pretend to fetch a page from a DB/API\n        yield return page;\n    }\n}\n\nsealed class ReportWriter : IAsyncDisposable\n{\n    public Task WriteAsync(string text)\n    {\n        Console.WriteLine($\"Writing {text}\");\n        return Task.CompletedTask;\n    }\n\n    public async ValueTask DisposeAsync()\n    {\n        await Task.Delay(10);                 // e.g. flush to disk or network\n        Console.WriteLine(\"Flushed and closed\");\n    }\n}"
        }
      ]
    },
    {
      id: "exceptions-in-code",
      depth: "detailed",
      title: {
        en: "Exceptions in code: wrapping, filters, guard clauses, async",
        hi: "Code में Exceptions: wrapping, filters, guard clauses, async",
        hg: "Code mein Exceptions: wrapping, filters, guard clauses, async"
      },
      body: {
        en: "<p><b>Analogy — forwarding a complaint:</b> a customer writes a complaint letter at the branch. The branch clerk forwards it to head office with a note on top: \"Customer of order ORD-7, please check\". He does <b>not</b> rewrite the letter in his own words — the original is still attached. That is <b>wrapping</b> an exception with <code>InnerException</code>. Rewriting it from scratch loses the real story — that is what <code>throw ex;</code> does to the stack trace.</p>\n<ul>\n<li><b><code>throw;</code></b> rethrows the <b>same</b> exception with its <b>original stack trace</b>. <b><code>throw ex;</code></b> restarts the stack trace at the current line (analyzer <b>CA2200</b> warns). To rethrow later from somewhere else, <code>ExceptionDispatchInfo.Capture(ex).Throw()</code> keeps the original stack.</li>\n<li><b>Wrap with context</b>: <code>throw new OrderFailedException($\"Order {id} failed\", ex);</code> — a better message for the caller, the real cause kept in <code>InnerException</code>.</li>\n<li><b>Catch order</b>: most specific first. Putting <code>catch (Exception)</code> before <code>catch (InvalidOperationException)</code> is a compile error (<b>CS0160</b>).</li>\n<li><b>Exception filters</b> (<code>catch (...) when (condition)</code>): the condition runs <b>before</b> the stack unwinds — even before inner <code>finally</code> blocks. If it is <code>false</code>, the exception keeps going untouched. Nice trick: <code>catch (Exception ex) when (Log(ex))</code> where <code>Log</code> returns <code>false</code> — log without catching.</li>\n<li><b>Guard clauses</b>: <code>ArgumentNullException.ThrowIfNull(x)</code>, <code>ArgumentException.ThrowIfNullOrEmpty(s)</code>, <code>ArgumentOutOfRangeException.ThrowIfNegative(n)</code> — the parameter name is filled in for you. A <b>throw expression</b> also works inline: <code>_repo = repo ?? throw new ArgumentNullException(nameof(repo));</code></li>\n<li><b>Async</b>: an exception inside an <code>async</code> method is stored in the returned <code>Task</code> and thrown at <code>await</code>. <code>.Wait()</code>/<code>.Result</code> wrap it in <code>AggregateException</code>; <code>await</code> gives you the original exception.</li>\n<li>In <b>ASP.NET Core</b>, handle unexpected exceptions <b>in one place</b> (<code>UseExceptionHandler</code> + an <code>IExceptionHandler</code>, returning <b>ProblemDetails</b>), and log them once there.</li>\n</ul>\n<p><b>When to use:</b> <code>throw;</code> whenever you rethrow; wrapping when you add useful context at a layer boundary (repository → service); filters for \"only this status code / only this error number\". <b>When not:</b> <code>throw ex;</code> (practically never); catching <code>Exception</code> just to log and rethrow at every layer; custom exception classes nobody catches; exceptions for normal control flow in hot loops — throwing is much slower than returning a value.</p>",
        hi: "<p><b>Analogy — complaint आगे भेजना:</b> एक customer branch पर complaint letter लिखता है। Branch का clerk उसे head office भेजता है, ऊपर एक note लगाकर: \"Order ORD-7 वाले customer की है, please check करें\"। वो letter को अपने शब्दों में <b>दोबारा नहीं</b> लिखता — original साथ लगा रहता है। यही exception को <code>InnerException</code> के साथ <b>wrap</b> करना है। उसे शुरू से दोबारा लिखने पर असली कहानी खो जाती है — <code>throw ex;</code> stack trace के साथ यही करता है।</p>\n<ul>\n<li><b><code>throw;</code></b> <b>उसी</b> exception को उसके <b>original stack trace</b> के साथ दोबारा throw करता है। <b><code>throw ex;</code></b> stack trace को current line से फिर शुरू कर देता है (analyzer <b>CA2200</b> warning देता है)। बाद में किसी और जगह से rethrow करना हो, तो <code>ExceptionDispatchInfo.Capture(ex).Throw()</code> original stack बचाकर रखता है।</li>\n<li><b>Context के साथ wrap करो</b>: <code>throw new OrderFailedException($\"Order {id} failed\", ex);</code> — caller के लिए बेहतर message, असली वजह <code>InnerException</code> में सुरक्षित।</li>\n<li><b>Catch का order</b>: सबसे specific पहले। <code>catch (InvalidOperationException)</code> से पहले <code>catch (Exception)</code> लिखना compile error है (<b>CS0160</b>)।</li>\n<li><b>Exception filters</b> (<code>catch (...) when (condition)</code>): condition stack unwind होने से <b>पहले</b> चलती है — अंदर के <code>finally</code> blocks से भी पहले। अगर वो <code>false</code> हो, तो exception बिना छेड़े आगे चला जाता है। एक बढ़िया trick: <code>catch (Exception ex) when (Log(ex))</code> जहाँ <code>Log</code> <code>false</code> return करे — पकड़े बिना log करो।</li>\n<li><b>Guard clauses</b>: <code>ArgumentNullException.ThrowIfNull(x)</code>, <code>ArgumentException.ThrowIfNullOrEmpty(s)</code>, <code>ArgumentOutOfRangeException.ThrowIfNegative(n)</code> — parameter का नाम अपने-आप भर जाता है। <b>Throw expression</b> भी inline चलता है: <code>_repo = repo ?? throw new ArgumentNullException(nameof(repo));</code></li>\n<li><b>Async</b>: <code>async</code> method के अंदर का exception return हुए <code>Task</code> में store होता है और <code>await</code> पर throw होता है। <code>.Wait()</code>/<code>.Result</code> उसे <code>AggregateException</code> में लपेट देते हैं; <code>await</code> आपको original exception देता है।</li>\n<li><b>ASP.NET Core</b> में unexpected exceptions <b>एक ही जगह</b> संभालो (<code>UseExceptionHandler</code> + एक <code>IExceptionHandler</code>, जो <b>ProblemDetails</b> return करे), और वहीं एक बार log करो।</li>\n</ul>\n<p><b>कब use करें:</b> जब भी rethrow करो तो <code>throw;</code>; wrapping तब जब layer boundary (repository → service) पर काम का context जोड़ रहे हो; filters \"सिर्फ़ यह status code / सिर्फ़ यह error number\" के लिए। <b>कब नहीं:</b> <code>throw ex;</code> (practically कभी नहीं); हर layer पर सिर्फ़ log करके rethrow करने के लिए <code>Exception</code> पकड़ना; ऐसी custom exception classes जिन्हें कोई पकड़ता ही नहीं; hot loops में normal control flow के लिए exceptions — throw करना value return करने से बहुत धीमा है।</p>",
        hg: "<p><b>Analogy — complaint aage bhejna:</b> ek customer branch par complaint letter likhta hai. Branch ka clerk use head office bhejta hai, upar ek note lagakar: \"Order ORD-7 wale customer ki hai, please check karein\". Woh letter ko apne shabdon mein <b>dobara nahi</b> likhta — original saath laga rehta hai. Yahi exception ko <code>InnerException</code> ke saath <b>wrap</b> karna hai. Use shuru se dobara likhne par asli kahani kho jaati hai — <code>throw ex;</code> stack trace ke saath yahi karta hai.</p>\n<ul>\n<li><b><code>throw;</code></b> <b>usi</b> exception ko uske <b>original stack trace</b> ke saath dobara throw karta hai. <b><code>throw ex;</code></b> stack trace ko current line se phir shuru kar deta hai (analyzer <b>CA2200</b> warning deta hai). Baad mein kisi aur jagah se rethrow karna ho, to <code>ExceptionDispatchInfo.Capture(ex).Throw()</code> original stack bachakar rakhta hai.</li>\n<li><b>Context ke saath wrap karo</b>: <code>throw new OrderFailedException($\"Order {id} failed\", ex);</code> — caller ke liye behtar message, asli wajah <code>InnerException</code> mein surakshit.</li>\n<li><b>Catch ka order</b>: sabse specific pehle. <code>catch (InvalidOperationException)</code> se pehle <code>catch (Exception)</code> likhna compile error hai (<b>CS0160</b>).</li>\n<li><b>Exception filters</b> (<code>catch (...) when (condition)</code>): condition stack unwind hone se <b>pehle</b> chalti hai — andar ke <code>finally</code> blocks se bhi pehle. Agar woh <code>false</code> ho, to exception bina chhede aage chala jaata hai. Ek badhiya trick: <code>catch (Exception ex) when (Log(ex))</code> jahan <code>Log</code> <code>false</code> return kare — pakde bina log karo.</li>\n<li><b>Guard clauses</b>: <code>ArgumentNullException.ThrowIfNull(x)</code>, <code>ArgumentException.ThrowIfNullOrEmpty(s)</code>, <code>ArgumentOutOfRangeException.ThrowIfNegative(n)</code> — parameter ka naam apne-aap bhar jaata hai. <b>Throw expression</b> bhi inline chalta hai: <code>_repo = repo ?? throw new ArgumentNullException(nameof(repo));</code></li>\n<li><b>Async</b>: <code>async</code> method ke andar ka exception return hue <code>Task</code> mein store hota hai aur <code>await</code> par throw hota hai. <code>.Wait()</code>/<code>.Result</code> use <code>AggregateException</code> mein lapet dete hain; <code>await</code> aapko original exception deta hai.</li>\n<li><b>ASP.NET Core</b> mein unexpected exceptions <b>ek hi jagah</b> sambhaalo (<code>UseExceptionHandler</code> + ek <code>IExceptionHandler</code>, jo <b>ProblemDetails</b> return kare), aur wahin ek baar log karo.</li>\n</ul>\n<p><b>Kab use karein:</b> jab bhi rethrow karo to <code>throw;</code>; wrapping tab jab layer boundary (repository → service) par kaam ka context jod rahe ho; filters \"sirf yeh status code / sirf yeh error number\" ke liye. <b>Kab nahi:</b> <code>throw ex;</code> (practically kabhi nahi); har layer par sirf log karke rethrow karne ke liye <code>Exception</code> pakadna; aisi custom exception classes jinhe koi pakadta hi nahi; hot loops mein normal control flow ke liye exceptions — throw karna value return karne se bahut dheema hai.</p>"
      },
      code: [
        {
          caption: {
            en: "throw vs throw ex, wrapping with InnerException, a filter with finally, and a guard clause",
            hi: "throw बनाम throw ex, InnerException के साथ wrapping, finally के साथ filter, और guard clause",
            hg: "throw vs throw ex, InnerException ke saath wrapping, finally ke saath filter, aur guard clause"
          },
          check: "run",
          expected: "Order ORD-7 failed <- InvalidOperationException: Out of stock\n404 handled here\nfinally (404)\nfinally (500)\n500 reached the outer handler\nArgumentException for parameter 'name'",
          src: "using System.Net;\n\n// 1. Wrap with context; the real cause stays in InnerException\ntry { Checkout(\"ORD-7\"); }\ncatch (OrderFailedException ex)\n{\n    Console.WriteLine($\"{ex.Message} <- {ex.InnerException?.GetType().Name}: {ex.InnerException?.Message}\");\n}\n\n// 2. A filter catches only 404; finally runs either way; 500 goes further up\nforeach (int status in new[] { 404, 500 })\n{\n    try\n    {\n        try\n        {\n            CallPartnerApi(status);\n        }\n        catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)\n        {\n            Console.WriteLine(\"404 handled here\");\n        }\n        finally\n        {\n            Console.WriteLine($\"finally ({status})\");\n        }\n    }\n    catch (HttpRequestException ex)\n    {\n        Console.WriteLine($\"{(int)ex.StatusCode!.Value} reached the outer handler\");\n    }\n}\n\n// 3. Guard clause with a built-in helper\ntry { var customer = new Customer(\"\"); }\ncatch (ArgumentException ex)\n{\n    Console.WriteLine($\"{ex.GetType().Name} for parameter '{ex.ParamName}'\");\n}\n\nstatic void CheckStock() => throw new InvalidOperationException(\"Out of stock\");\n\nstatic void Checkout(string orderId)\n{\n    try\n    {\n        CheckStock();\n    }\n    catch (InvalidOperationException ex)\n    {\n        throw new OrderFailedException($\"Order {orderId} failed\", ex);\n    }\n}\n\nstatic void CallPartnerApi(int status) =>\n    throw new HttpRequestException($\"Partner API returned {status}\", null, (HttpStatusCode)status);\n\npublic sealed class OrderFailedException : Exception\n{\n    public OrderFailedException(string message) : base(message) { }\n    public OrderFailedException(string message, Exception inner) : base(message, inner) { }\n}\n\npublic sealed class Customer\n{\n    public string Name { get; }\n\n    public Customer(string name)\n    {\n        ArgumentException.ThrowIfNullOrEmpty(name);   // throws ArgumentException, ParamName = \"name\"\n        Name = name;\n    }\n}"
        }
      ]
    },
    {
      id: "dispose-gc-in-code",
      depth: "detailed",
      title: {
        en: "Dispose pattern, finalizers and the GC in code: using order, generations, LOH",
        hi: "Code में Dispose pattern, finalizers और GC: using का order, generations, LOH",
        hg: "Code mein Dispose pattern, finalizers aur GC: using ka order, generations, LOH"
      },
      body: {
        en: "<p><b>The GC in brief</b></p>\n<ul>\n<li><b>GC</b> manages <b>managed memory</b>. It finds objects that are <b>no longer reachable</b> from \"roots\" (static fields, local variables on thread stacks, CPU registers, GC handles), frees them, and <b>compacts</b> the survivors to avoid gaps.</li>\n<li><b>Generations</b>: new objects start in <b>Gen 0</b>. Most die young (a request's temporary objects), so Gen 0 collections are frequent and cheap. Survivors are promoted to <b>Gen 1</b> (a buffer) and then <b>Gen 2</b> (long-lived: caches, singletons). A Gen 2 collection is a <b>full GC</b> — the most expensive.</li>\n<li><b>Large Object Heap (LOH)</b>: objects of <b>85,000 bytes or more</b> (big arrays, big strings). It is collected only with Gen 2 and is <b>not compacted by default</b>, so many big temporary buffers cause fragmentation and full GCs. Reuse them (<code>ArrayPool&lt;T&gt;</code>) where it matters.</li>\n<li><b>Workstation vs Server GC</b>: Workstation is the default for desktop/console apps; <b>Server GC</b> (default for ASP.NET Core apps) uses a heap and a GC thread per core for more throughput, at the cost of more memory.</li>\n</ul>\n<p><b>Analogy — hotel checkout:</b> at checkout <b>you</b> return the key card at the reception — on time, every time (<b>Dispose</b>). Housekeeping cleans the rooms later on its own schedule (<b>GC</b>). If a guest forgets the key card in the room, housekeeping may find it some day and return it (<b>finalizer</b>) — but the hotel cannot run on that hope. And housekeeping cleans the busy rooms daily (Gen 0) but the storeroom only once in a while (Gen 2).</p>\n<ul>\n<li><b>Simple pattern</b> (most classes): a <code>sealed</code> class that <b>owns</b> disposable fields implements <code>IDisposable</code>, disposes those fields, makes <code>Dispose</code> safe to call twice, and throws <code>ObjectDisposedException</code> if used afterwards (<code>ObjectDisposedException.ThrowIf(_disposed, this)</code>, .NET 7+). No finalizer.</li>\n<li><b>Full Dispose pattern</b> (non-sealed base classes): <code>public void Dispose()</code> calls <code>Dispose(true)</code> and <code>GC.SuppressFinalize(this)</code> (analyzer <b>CA1816</b>); <code>protected virtual void Dispose(bool disposing)</code> frees managed fields only when <code>disposing</code> is <code>true</code>. Derived classes override <code>Dispose(bool)</code> and call <code>base.Dispose(disposing)</code>.</li>\n<li><b>Finalizers are expensive</b>: an object with a finalizer survives at least one extra GC (it waits in the finalization queue), runs on a separate finalizer thread at an unknown time, and must not touch other managed objects. Write one only if you hold a raw native handle — and even then prefer a <b><code>SafeHandle</code></b>, which already has one.</li>\n<li><b>using declarations</b> dispose at the end of the enclosing scope, in <b>reverse order</b> of declaration — the last opened is closed first (file before connection).</li>\n<li><b>Generations in code</b>: <code>GC.GetGeneration(obj)</code> shows 0, 1 or 2. A new small object is Gen 0; a new array of 85,000+ bytes goes to the <b>LOH</b>, which is reported as Gen 2.</li>\n<li><b>\"Memory leaks\" in .NET</b> are objects that are <b>still referenced</b>: an ever-growing static cache/dictionary, event handlers never unsubscribed (Day 2), timers, closures holding big objects. Tools: <code>dotnet-counters</code> (live GC numbers), <code>dotnet-gcdump</code> / <code>dotnet-dump</code> (what is on the heap), Visual Studio diagnostic tools.</li>\n<li><b>Server vs Workstation GC</b> is set in the project file (<code>&lt;ServerGarbageCollection&gt;true&lt;/ServerGarbageCollection&gt;</code>) or <code>runtimeconfig.json</code>. Background (concurrent) GC is on by default, so most Gen 2 work runs while your threads keep going.</li>\n</ul>\n<p><b>When to use:</b> the simple sealed pattern for almost every class that owns a disposable; the full pattern only for base classes designed for inheritance; <code>ArrayPool&lt;T&gt;.Shared</code> for big temporary buffers in hot paths (avoids LOH churn). <b>When not:</b> finalizers on ordinary classes; <code>GC.Collect()</code> to \"fix\" memory (it hides the real leak and pauses the app); disposing objects you did not create (e.g. those injected by DI, or an <code>HttpClient</code> from <code>IHttpClientFactory</code>).</p>",
        hi: "<p><b>GC संक्षेप में</b></p>\n<ul>\n<li><b>GC</b> <b>managed memory</b> संभालता है। वो ऐसे objects ढूँढता है जो \"roots\" (static fields, thread stacks पर local variables, CPU registers, GC handles) से <b>अब reachable नहीं</b> हैं, उन्हें free करता है, और बचे हुए objects को पास-पास <b>compact</b> करता है ताकि बीच में ख़ाली जगह न रहे।</li>\n<li><b>Generations</b>: नए objects <b>Gen 0</b> में शुरू होते हैं। ज़्यादातर जल्दी मर जाते हैं (एक request के temporary objects), इसलिए Gen 0 collections बार-बार होते हैं और सस्ते हैं। बचे हुए objects <b>Gen 1</b> (buffer) और फिर <b>Gen 2</b> (लंबे समय वाले: caches, singletons) में promote होते हैं। Gen 2 collection एक <b>full GC</b> है — सबसे महँगा।</li>\n<li><b>Large Object Heap (LOH)</b>: <b>85,000 bytes या उससे बड़े</b> objects (बड़े arrays, बड़ी strings)। यह सिर्फ़ Gen 2 के साथ collect होता है और <b>by default compact नहीं होता</b>, इसलिए बहुत सारे बड़े temporary buffers fragmentation और full GCs लाते हैं। जहाँ ज़रूरी हो, इन्हें reuse करो (<code>ArrayPool&lt;T&gt;</code>)।</li>\n<li><b>Workstation vs Server GC</b>: desktop/console apps के लिए default Workstation है; <b>Server GC</b> (ASP.NET Core apps का default) हर core के लिए एक heap और एक GC thread use करता है — ज़्यादा throughput, पर memory भी ज़्यादा।</li>\n</ul>\n<p><b>Analogy — hotel checkout:</b> checkout पर <b>आप</b> reception पर key card लौटाते हो — समय पर, हर बार (<b>Dispose</b>)। Housekeeping बाद में अपने schedule से rooms साफ़ करती है (<b>GC</b>)। अगर कोई guest key card room में भूल जाए, तो housekeeping को वो किसी दिन मिल सकता है और वो लौटा देगी (<b>finalizer</b>) — पर hotel इस उम्मीद पर नहीं चल सकता। और housekeeping busy rooms रोज़ साफ़ करती है (Gen 0), पर storeroom कभी-कभार (Gen 2)।</p>\n<ul>\n<li><b>Simple pattern</b> (ज़्यादातर classes): disposable fields की <b>owner</b> एक <code>sealed</code> class <code>IDisposable</code> implement करती है, उन fields को dispose करती है, <code>Dispose</code> को दो बार call करना safe बनाती है, और उसके बाद use होने पर <code>ObjectDisposedException</code> देती है (<code>ObjectDisposedException.ThrowIf(_disposed, this)</code>, .NET 7+)। कोई finalizer नहीं।</li>\n<li><b>Full Dispose pattern</b> (non-sealed base classes): <code>public void Dispose()</code> <code>Dispose(true)</code> और <code>GC.SuppressFinalize(this)</code> call करता है (analyzer <b>CA1816</b>); <code>protected virtual void Dispose(bool disposing)</code> managed fields सिर्फ़ तब free करता है जब <code>disposing</code> <code>true</code> हो। Derived classes <code>Dispose(bool)</code> override करती हैं और <code>base.Dispose(disposing)</code> call करती हैं।</li>\n<li><b>Finalizers महँगे हैं</b>: finalizer वाला object कम से कम एक extra GC तक बचा रहता है (finalization queue में इंतज़ार करता है), अलग finalizer thread पर किसी अनजान समय पर चलता है, और उसे दूसरे managed objects को नहीं छूना चाहिए। इसे सिर्फ़ तब लिखो जब आपके पास raw native handle हो — और तब भी <b><code>SafeHandle</code></b> लो, जिसमें पहले से finalizer है।</li>\n<li><b>using declarations</b> enclosing scope के end पर dispose होते हैं, declaration के <b>उल्टे order</b> में — जो आख़िर में खुला वो पहले बंद (connection से पहले file)।</li>\n<li><b>Code में generations</b>: <code>GC.GetGeneration(obj)</code> 0, 1 या 2 बताता है। नया छोटा object Gen 0 में होता है; 85,000+ bytes का नया array <b>LOH</b> में जाता है, जो Gen 2 बताया जाता है।</li>\n<li><b>.NET में \"memory leaks\"</b> वो objects हैं जो <b>अब भी referenced</b> हैं: लगातार बढ़ती static cache/dictionary, कभी unsubscribe न हुए event handlers (Day 2), timers, बड़े objects पकड़े हुए closures। Tools: <code>dotnet-counters</code> (live GC numbers), <code>dotnet-gcdump</code> / <code>dotnet-dump</code> (heap पर क्या है), Visual Studio diagnostic tools।</li>\n<li><b>Server vs Workstation GC</b> project file (<code>&lt;ServerGarbageCollection&gt;true&lt;/ServerGarbageCollection&gt;</code>) या <code>runtimeconfig.json</code> में set होता है। Background (concurrent) GC by default on है, इसलिए Gen 2 का ज़्यादातर काम आपके threads के चलते-चलते होता है।</li>\n</ul>\n<p><b>कब use करें:</b> disposable की owner लगभग हर class के लिए simple sealed pattern; full pattern सिर्फ़ inheritance के लिए बनी base classes में; hot paths में बड़े temporary buffers के लिए <code>ArrayPool&lt;T&gt;.Shared</code> (LOH की उथल-पुथल से बचाता है)। <b>कब नहीं:</b> आम classes पर finalizers; memory \"ठीक करने\" के लिए <code>GC.Collect()</code> (यह असली leak छुपाता है और app को रोकता है); ऐसे objects dispose करना जो आपने नहीं बनाए (जैसे DI से inject हुए, या <code>IHttpClientFactory</code> से मिला <code>HttpClient</code>)।</p>",
        hg: "<p><b>GC sankshep mein</b></p>\n<ul>\n<li><b>GC</b> <b>managed memory</b> sambhaalta hai. Woh aise objects dhoondhta hai jo \"roots\" (static fields, thread stacks par local variables, CPU registers, GC handles) se <b>ab reachable nahi</b> hain, unhe free karta hai, aur bache hue objects ko paas-paas <b>compact</b> karta hai taaki beech mein khaali jagah na rahe.</li>\n<li><b>Generations</b>: naye objects <b>Gen 0</b> mein shuru hote hain. Zyadatar jaldi mar jaate hain (ek request ke temporary objects), isliye Gen 0 collections baar-baar hote hain aur saste hain. Bache hue objects <b>Gen 1</b> (buffer) aur phir <b>Gen 2</b> (lambe samay wale: caches, singletons) mein promote hote hain. Gen 2 collection ek <b>full GC</b> hai — sabse mehenga.</li>\n<li><b>Large Object Heap (LOH)</b>: <b>85,000 bytes ya usse bade</b> objects (bade arrays, badi strings). Yeh sirf Gen 2 ke saath collect hota hai aur <b>by default compact nahi hota</b>, isliye bahut saare bade temporary buffers fragmentation aur full GCs laate hain. Jahan zaroori ho, inhe reuse karo (<code>ArrayPool&lt;T&gt;</code>).</li>\n<li><b>Workstation vs Server GC</b>: desktop/console apps ke liye default Workstation hai; <b>Server GC</b> (ASP.NET Core apps ka default) har core ke liye ek heap aur ek GC thread use karta hai — zyada throughput, par memory bhi zyada.</li>\n</ul>\n<p><b>Analogy — hotel checkout:</b> checkout par <b>aap</b> reception par key card lautate ho — samay par, har baar (<b>Dispose</b>). Housekeeping baad mein apne schedule se rooms saaf karti hai (<b>GC</b>). Agar koi guest key card room mein bhool jaaye, to housekeeping ko woh kisi din mil sakta hai aur woh lauta degi (<b>finalizer</b>) — par hotel is ummeed par nahi chal sakta. Aur housekeeping busy rooms roz saaf karti hai (Gen 0), par storeroom kabhi-kabhaar (Gen 2).</p>\n<ul>\n<li><b>Simple pattern</b> (zyadatar classes): disposable fields ki <b>owner</b> ek <code>sealed</code> class <code>IDisposable</code> implement karti hai, un fields ko dispose karti hai, <code>Dispose</code> ko do baar call karna safe banati hai, aur uske baad use hone par <code>ObjectDisposedException</code> deti hai (<code>ObjectDisposedException.ThrowIf(_disposed, this)</code>, .NET 7+). Koi finalizer nahi.</li>\n<li><b>Full Dispose pattern</b> (non-sealed base classes): <code>public void Dispose()</code> <code>Dispose(true)</code> aur <code>GC.SuppressFinalize(this)</code> call karta hai (analyzer <b>CA1816</b>); <code>protected virtual void Dispose(bool disposing)</code> managed fields sirf tab free karta hai jab <code>disposing</code> <code>true</code> ho. Derived classes <code>Dispose(bool)</code> override karti hain aur <code>base.Dispose(disposing)</code> call karti hain.</li>\n<li><b>Finalizers mehenge hain</b>: finalizer wala object kam se kam ek extra GC tak bacha rehta hai (finalization queue mein intezaar karta hai), alag finalizer thread par kisi anjaan samay par chalta hai, aur use doosre managed objects ko nahi chhoona chahiye. Ise sirf tab likho jab aapke paas raw native handle ho — aur tab bhi <b><code>SafeHandle</code></b> lo, jismein pehle se finalizer hai.</li>\n<li><b>using declarations</b> enclosing scope ke end par dispose hote hain, declaration ke <b>ulte order</b> mein — jo aakhir mein khula woh pehle band (connection se pehle file).</li>\n<li><b>Code mein generations</b>: <code>GC.GetGeneration(obj)</code> 0, 1 ya 2 batata hai. Naya chhota object Gen 0 mein hota hai; 85,000+ bytes ka naya array <b>LOH</b> mein jaata hai, jo Gen 2 bataya jaata hai.</li>\n<li><b>.NET mein \"memory leaks\"</b> woh objects hain jo <b>ab bhi referenced</b> hain: lagaataar badhti static cache/dictionary, kabhi unsubscribe na hue event handlers (Day 2), timers, bade objects pakde hue closures. Tools: <code>dotnet-counters</code> (live GC numbers), <code>dotnet-gcdump</code> / <code>dotnet-dump</code> (heap par kya hai), Visual Studio diagnostic tools.</li>\n<li><b>Server vs Workstation GC</b> project file (<code>&lt;ServerGarbageCollection&gt;true&lt;/ServerGarbageCollection&gt;</code>) ya <code>runtimeconfig.json</code> mein set hota hai. Background (concurrent) GC by default on hai, isliye Gen 2 ka zyadatar kaam aapke threads ke chalte-chalte hota hai.</li>\n</ul>\n<p><b>Kab use karein:</b> disposable ki owner lagbhag har class ke liye simple sealed pattern; full pattern sirf inheritance ke liye bani base classes mein; hot paths mein bade temporary buffers ke liye <code>ArrayPool&lt;T&gt;.Shared</code> (LOH ki uthal-puthal se bachata hai). <b>Kab nahi:</b> aam classes par finalizers; memory \"theek karne\" ke liye <code>GC.Collect()</code> (yeh asli leak chhupata hai aur app ko rokta hai); aise objects dispose karna jo aapne nahi banaye (jaise DI se inject hue, ya <code>IHttpClientFactory</code> se mila <code>HttpClient</code>).</p>"
      },
      code: [
        {
          caption: {
            en: "using declarations dispose in reverse order; a safe sealed Dispose; the base-class pattern; Gen 0 vs LOH",
            hi: "using declarations उल्टे order में dispose होते हैं; safe sealed Dispose; base-class pattern; Gen 0 बनाम LOH",
            hg: "using declarations ulte order mein dispose hote hain; safe sealed Dispose; base-class pattern; Gen 0 vs LOH"
          },
          check: "run",
          expected: "working...\nDisposed file\nDisposed connection\n---\nAuditLog disposed\nObjectDisposedException: used after Dispose\nsmall array: Gen 0\n85,000-byte array: Gen 2 (LOH)",
          src: "RunReport();\nConsole.WriteLine(\"---\");\n\nvar log = new AuditLog();\nlog.Write(\"first entry\");\nlog.Dispose();\nlog.Dispose();                       // safe: the second call does nothing\ntry\n{\n    log.Write(\"too late\");\n}\ncatch (ObjectDisposedException)\n{\n    Console.WriteLine(\"ObjectDisposedException: used after Dispose\");\n}\n\nint smallGen = GC.GetGeneration(new byte[80_000]);\nint largeGen = GC.GetGeneration(new byte[85_000]);\nConsole.WriteLine($\"small array: Gen {smallGen}\");\nConsole.WriteLine($\"85,000-byte array: Gen {largeGen} (LOH)\");\n\nstatic void RunReport()\n{\n    using var connection = new Resource(\"connection\");\n    using var file = new Resource(\"file\");\n    Console.WriteLine(\"working...\");\n}                                    // file is disposed first, then connection\n\nsealed class Resource(string name) : IDisposable\n{\n    public void Dispose() => Console.WriteLine($\"Disposed {name}\");\n}\n\n// Simple pattern: a sealed class that OWNS a disposable field. No finalizer.\nsealed class AuditLog : IDisposable\n{\n    private readonly StringWriter _writer = new();\n    private bool _disposed;\n\n    public void Write(string text)\n    {\n        ObjectDisposedException.ThrowIf(_disposed, this);\n        _writer.WriteLine(text);\n    }\n\n    public void Dispose()\n    {\n        if (_disposed) return;\n        _writer.Dispose();\n        _disposed = true;\n        Console.WriteLine(\"AuditLog disposed\");\n    }\n}\n\n// Full pattern: only for a non-sealed base class meant for inheritance.\npublic class RepositoryBase : IDisposable\n{\n    private bool _disposed;\n\n    protected virtual void Dispose(bool disposing)\n    {\n        if (_disposed) return;\n        if (disposing)\n        {\n            // dispose managed fields here (connections, streams)\n        }\n        // free unmanaged resources here (rare: prefer SafeHandle)\n        _disposed = true;\n    }\n\n    public void Dispose()\n    {\n        Dispose(disposing: true);\n        GC.SuppressFinalize(this);       // CA1816: a derived class may add a finalizer\n    }\n}"
        }
      ]
    },
    {
      id: "records-in-code",
      depth: "detailed",
      title: {
        en: "Records in code: positional records, with, value equality, record struct",
        hi: "Code में Records: positional records, with, value equality, record struct",
        hg: "Code mein Records: positional records, with, value equality, record struct"
      },
      body: {
        en: "<p><b>Analogy — updating your address on an ID card:</b> when you move from Pune to Mumbai, the office does not scratch out the old address on your card. It prints a <b>new card</b> with the new address and everything else copied. The old card still says Pune. That is <code>with</code>: a <b>non-destructive copy</b>. And two cards with exactly the same details are \"the same details\" — that is <b>value equality</b>.</p>\n<ul>\n<li><b>Positional record</b>: <code>public record Address(string City, string Pin);</code> gives you a constructor, <b>init-only</b> properties, <code>Deconstruct</code>, <code>Equals</code>/<code>GetHashCode</code>/<code>==</code>/<code>!=</code> based on values, and <code>ToString()</code> like <code>Address { City = Pune, Pin = 411001 }</code>.</li>\n<li><b><code>with</code></b> creates a copy with some properties changed. It is a <b>shallow</b> copy: a <code>List</code> inside is shared by both records. <code>with</code> also works on structs and anonymous types; on a normal class it is an error (<b>CS8858</b>).</li>\n<li><b>Equality is shallow and type-aware</b>: properties are compared with their own <code>Equals</code>, so a <code>List</code> property compares <b>references</b>. The runtime type is part of equality — a <code>Person</code> and an <code>Employee</code> with the same <code>Name</code> are <b>not</b> equal.</li>\n<li><b><code>record struct</code></b> (C# 10) is a value type with the same generated members. Careful: positional <code>record struct</code> properties are <b>mutable</b> (<code>get; set;</code>); write <b><code>readonly record struct</code></b> for an immutable one.</li>\n<li><b>Inheritance</b>: a record can inherit only from another record (or <code>object</code>) — inheriting from a class is error <b>CS8864</b>.</li>\n<li><b>Not the same as a primary constructor</b>: <code>class Customer(string name)</code> (C# 12) just gives constructor parameters to a class — no value equality, no <code>with</code>, no generated properties.</li>\n<li>You can write a record with normal properties too: <code>public record Product { public required string Name { get; init; } }</code>.</li>\n</ul>\n<p><b>When to use:</b> DTOs and API request/response models, messages and events, <b>value objects</b> (Money, Address, DateRange), configuration snapshots, keys for dictionaries. <b>When not:</b> <b>EF Core entities</b> — they have an identity (Id), are changed and tracked over time, and value-based <code>GetHashCode</code> that changes when properties change confuses change tracking and hash sets; services with behaviour and dependencies; records holding mutable collections (prefer <code>IReadOnlyList&lt;T&gt;</code> or immutable collections, and remember equality will not compare the items).</p>",
        hi: "<p><b>Analogy — ID card पर address बदलवाना:</b> जब आप Pune से Mumbai shift होते हो, तो office आपके card पर पुराना address काटकर नहीं लिखता। वो नए address के साथ एक <b>नया card</b> छापता है, बाकी सब copy करके। पुराना card अब भी Pune ही बताता है। यही है <code>with</code>: एक <b>non-destructive copy</b>। और बिल्कुल एक जैसी details वाले दो cards \"एक जैसी details\" हैं — यही <b>value equality</b> है।</p>\n<ul>\n<li><b>Positional record</b>: <code>public record Address(string City, string Pin);</code> से आपको constructor, <b>init-only</b> properties, <code>Deconstruct</code>, values पर based <code>Equals</code>/<code>GetHashCode</code>/<code>==</code>/<code>!=</code>, और <code>Address { City = Pune, Pin = 411001 }</code> जैसा <code>ToString()</code> मिलता है।</li>\n<li><b><code>with</code></b> कुछ properties बदलकर एक copy बनाता है। यह <b>shallow</b> copy है: अंदर की <code>List</code> दोनों records में share होती है। <code>with</code> structs और anonymous types पर भी चलता है; normal class पर यह error है (<b>CS8858</b>)।</li>\n<li><b>Equality shallow है और type देखती है</b>: properties अपने-अपने <code>Equals</code> से compare होती हैं, इसलिए <code>List</code> property <b>references</b> compare करती है। Runtime type भी equality का हिस्सा है — एक ही <code>Name</code> वाले <code>Person</code> और <code>Employee</code> equal <b>नहीं</b> हैं।</li>\n<li><b><code>record struct</code></b> (C# 10) वही generated members वाला value type है। ध्यान दो: positional <code>record struct</code> की properties <b>mutable</b> होती हैं (<code>get; set;</code>); immutable चाहिए तो <b><code>readonly record struct</code></b> लिखो।</li>\n<li><b>Inheritance</b>: record सिर्फ़ दूसरे record (या <code>object</code>) से inherit कर सकता है — class से inherit करना error <b>CS8864</b> है।</li>\n<li><b>Primary constructor जैसा नहीं</b>: <code>class Customer(string name)</code> (C# 12) बस class को constructor parameters देता है — न value equality, न <code>with</code>, न generated properties।</li>\n<li>Record को normal properties के साथ भी लिख सकते हो: <code>public record Product { public required string Name { get; init; } }</code>।</li>\n</ul>\n<p><b>कब use करें:</b> DTOs और API request/response models, messages और events, <b>value objects</b> (Money, Address, DateRange), configuration snapshots, dictionaries की keys। <b>कब नहीं:</b> <b>EF Core entities</b> — उनकी एक पहचान (Id) होती है, समय के साथ बदलती और track होती हैं, और properties बदलने पर बदलने वाला value-based <code>GetHashCode</code> change tracking और hash sets को उलझा देता है; behaviour और dependencies वाली services; mutable collections रखने वाले records (<code>IReadOnlyList&lt;T&gt;</code> या immutable collections लो, और याद रखो कि equality items compare नहीं करेगी)।</p>",
        hg: "<p><b>Analogy — ID card par address badalwana:</b> jab aap Pune se Mumbai shift hote ho, to office aapke card par purana address kaatkar nahi likhta. Woh naye address ke saath ek <b>naya card</b> chhaapta hai, baaki sab copy karke. Purana card ab bhi Pune hi batata hai. Yahi hai <code>with</code>: ek <b>non-destructive copy</b>. Aur bilkul ek jaisi details wale do cards \"ek jaisi details\" hain — yahi <b>value equality</b> hai.</p>\n<ul>\n<li><b>Positional record</b>: <code>public record Address(string City, string Pin);</code> se aapko constructor, <b>init-only</b> properties, <code>Deconstruct</code>, values par based <code>Equals</code>/<code>GetHashCode</code>/<code>==</code>/<code>!=</code>, aur <code>Address { City = Pune, Pin = 411001 }</code> jaisa <code>ToString()</code> milta hai.</li>\n<li><b><code>with</code></b> kuch properties badalkar ek copy banata hai. Yeh <b>shallow</b> copy hai: andar ki <code>List</code> dono records mein share hoti hai. <code>with</code> structs aur anonymous types par bhi chalta hai; normal class par yeh error hai (<b>CS8858</b>).</li>\n<li><b>Equality shallow hai aur type dekhti hai</b>: properties apne-apne <code>Equals</code> se compare hoti hain, isliye <code>List</code> property <b>references</b> compare karti hai. Runtime type bhi equality ka hissa hai — ek hi <code>Name</code> wale <code>Person</code> aur <code>Employee</code> equal <b>nahi</b> hain.</li>\n<li><b><code>record struct</code></b> (C# 10) wahi generated members wala value type hai. Dhyaan do: positional <code>record struct</code> ki properties <b>mutable</b> hoti hain (<code>get; set;</code>); immutable chahiye to <b><code>readonly record struct</code></b> likho.</li>\n<li><b>Inheritance</b>: record sirf doosre record (ya <code>object</code>) se inherit kar sakta hai — class se inherit karna error <b>CS8864</b> hai.</li>\n<li><b>Primary constructor jaisa nahi</b>: <code>class Customer(string name)</code> (C# 12) bas class ko constructor parameters deta hai — na value equality, na <code>with</code>, na generated properties.</li>\n<li>Record ko normal properties ke saath bhi likh sakte ho: <code>public record Product { public required string Name { get; init; } }</code>.</li>\n</ul>\n<p><b>Kab use karein:</b> DTOs aur API request/response models, messages aur events, <b>value objects</b> (Money, Address, DateRange), configuration snapshots, dictionaries ki keys. <b>Kab nahi:</b> <b>EF Core entities</b> — unki ek pehchaan (Id) hoti hai, samay ke saath badalti aur track hoti hain, aur properties badalne par badalne wala value-based <code>GetHashCode</code> change tracking aur hash sets ko uljha deta hai; behaviour aur dependencies wali services; mutable collections rakhne wale records (<code>IReadOnlyList&lt;T&gt;</code> ya immutable collections lo, aur yaad rakho ki equality items compare nahi karegi).</p>"
      },
      code: [
        {
          caption: {
            en: "Value equality, with, deconstruction, shallow equality with a List, record struct, and type-aware equality",
            hi: "Value equality, with, deconstruction, List के साथ shallow equality, record struct, और type देखने वाली equality",
            hg: "Value equality, with, deconstruction, List ke saath shallow equality, record struct, aur type dekhne wali equality"
          },
          check: "run",
          expected: "Address { City = Pune, Pin = 411001 }\nEqual values: True, same object: False\nPune -> Mumbai\nMumbai 400001\na has 2 items; a == b: True\na == c (same items, different List): False\nPoint { X = 1, Y = 2 } Point { X = 5, Y = 2 } True\nPerson == Employee with the same Name: False",
          src: "var home = new Address(\"Pune\", \"411001\");\nvar same = new Address(\"Pune\", \"411001\");\nConsole.WriteLine(home);\nConsole.WriteLine($\"Equal values: {home == same}, same object: {ReferenceEquals(home, same)}\");\n\nvar moved = home with { City = \"Mumbai\", Pin = \"400001\" };   // new record, home unchanged\nConsole.WriteLine($\"{home.City} -> {moved.City}\");\n\nvar (city, pin) = moved;                                     // positional records deconstruct\nConsole.WriteLine($\"{city} {pin}\");\n\n// Equality is shallow: the List property is compared by reference\nvar a = new Cart(\"C1\", new List<string> { \"Atta\" });\nvar b = a with { };                                          // shallow copy: same List object\nb.Items.Add(\"Dal\");\nConsole.WriteLine($\"a has {a.Items.Count} items; a == b: {a == b}\");\nvar c = new Cart(\"C1\", new List<string> { \"Atta\", \"Dal\" });\nConsole.WriteLine($\"a == c (same items, different List): {a == c}\");\n\n// readonly record struct: a value type with value equality\nvar p1 = new Point(1, 2);\nvar p2 = p1 with { X = 5 };\nConsole.WriteLine($\"{p1} {p2} {p1 == new Point(1, 2)}\");\n\n// The runtime type is part of equality\nPerson person = new(\"Asha\");\nPerson employee = new Employee(\"Asha\", 101);\nConsole.WriteLine($\"Person == Employee with the same Name: {person == employee}\");\n\npublic record Address(string City, string Pin);\npublic record Cart(string Id, List<string> Items);           // mutable List only to show the trap\npublic readonly record struct Point(int X, int Y);\npublic record Person(string Name);\npublic record Employee(string Name, int Id) : Person(Name);"
        }
      ]
    },
    {
      id: "pattern-matching-in-code",
      depth: "detailed",
      title: {
        en: "Pattern matching in code: switch expressions, property, relational, logical and list patterns",
        hi: "Code में Pattern matching: switch expressions, property, relational, logical और list patterns",
        hg: "Code mein Pattern matching: switch expressions, property, relational, logical aur list patterns"
      },
      body: {
        en: "<p><b>Analogy — the courier counter:</b> the courier clerk decides the charge by looking at the item: \"fragile → special packing; heavier than 5 kg → heavy rate; light parcel within the city → local rate; a document → envelope\". He checks the rules <b>top to bottom</b> and stops at the <b>first match</b>. A <b>switch expression</b> works exactly like that.</p>\n<ul>\n<li><b>Type pattern + declaration</b>: <code>if (item is Parcel p)</code> — checks the type and gives you a typed variable in one step (no cast).</li>\n<li><b>Property pattern</b>: <code>Parcel { Fragile: true }</code>; <b>extended</b> (C# 10): <code>Order { Customer.City: \"Pune\" }</code>.</li>\n<li><b>Relational and logical patterns</b> (C# 9): <code>&gt; 5</code>, <code>&lt;= 1</code>, <code>&gt;= 60 and &lt; 75</code>, <code>\"Mumbai\" or \"Pune\"</code>, <code>not null</code>.</li>\n<li><b>List patterns</b> (C# 11): <code>[]</code> (empty), <code>[var only]</code>, <code>[var first, .., var last]</code> — <code>..</code> matches any number of items.</li>\n<li><b>Switch expression</b> (C# 8): <code>value switch { pattern =&gt; result, ..., _ =&gt; fallback }</code>. Arms are checked in order; the <b>first match wins</b>. An arm that can never be reached is a compile error (<b>CS8510</b>). Missing cases give a warning (<b>CS8509</b>) and, at runtime, a <code>SwitchExpressionException</code> if nothing matches.</li>\n<li><b><code>is null</code> / <code>is not null</code></b> always check for real null — they cannot be changed by an overloaded <code>==</code> operator.</li>\n<li><b>Positional patterns</b> use <code>Deconstruct</code> (records have it): <code>point is (0, 0)</code>.</li>\n</ul>\n<p><b>When to use:</b> replacing long <code>if/else if</code> chains of type checks and casts; mapping a value to a result (status → HTTP code, marks → grade, exception type → ProblemDetails); validating the shape of input. <b>When not:</b> when the behaviour belongs to the type itself — if every new type means editing a big <code>switch</code> in many places, a <b>virtual method / polymorphism</b> (Day 1) is cleaner; very deep nested patterns that nobody in the team can read in a review.</p>",
        hi: "<p><b>Analogy — courier counter:</b> courier clerk item देखकर charge तय करता है: \"fragile → special packing; 5 kg से भारी → heavy rate; शहर के अंदर हल्का parcel → local rate; document → envelope\"। वो rules <b>ऊपर से नीचे</b> check करता है और <b>पहले match</b> पर रुक जाता है। <b>Switch expression</b> बिल्कुल ऐसे ही काम करता है।</p>\n<ul>\n<li><b>Type pattern + declaration</b>: <code>if (item is Parcel p)</code> — एक ही step में type check करता है और typed variable दे देता है (कोई cast नहीं)।</li>\n<li><b>Property pattern</b>: <code>Parcel { Fragile: true }</code>; <b>extended</b> (C# 10): <code>Order { Customer.City: \"Pune\" }</code>।</li>\n<li><b>Relational और logical patterns</b> (C# 9): <code>&gt; 5</code>, <code>&lt;= 1</code>, <code>&gt;= 60 and &lt; 75</code>, <code>\"Mumbai\" or \"Pune\"</code>, <code>not null</code>।</li>\n<li><b>List patterns</b> (C# 11): <code>[]</code> (ख़ाली), <code>[var only]</code>, <code>[var first, .., var last]</code> — <code>..</code> कितने भी items से match करता है।</li>\n<li><b>Switch expression</b> (C# 8): <code>value switch { pattern =&gt; result, ..., _ =&gt; fallback }</code>। Arms order में check होते हैं; <b>पहला match जीतता है</b>। जो arm कभी reach नहीं हो सकता वो compile error है (<b>CS8510</b>)। Cases छूट जाएँ तो warning (<b>CS8509</b>) आती है, और runtime पर कुछ match न हो तो <code>SwitchExpressionException</code>।</li>\n<li><b><code>is null</code> / <code>is not null</code></b> हमेशा असली null check करते हैं — overload किया हुआ <code>==</code> operator इन्हें नहीं बदल सकता।</li>\n<li><b>Positional patterns</b> <code>Deconstruct</code> use करते हैं (records में होता है): <code>point is (0, 0)</code>।</li>\n</ul>\n<p><b>कब use करें:</b> type checks और casts वाली लंबी <code>if/else if</code> chains की जगह; किसी value को result में बदलना (status → HTTP code, marks → grade, exception type → ProblemDetails); input का shape validate करना। <b>कब नहीं:</b> जब behaviour type का ख़ुद का है — अगर हर नए type पर कई जगह बड़ा <code>switch</code> edit करना पड़े, तो <b>virtual method / polymorphism</b> (Day 1) ज़्यादा साफ़ है; बहुत गहरे nested patterns जिन्हें team में कोई review में पढ़ न सके।</p>",
        hg: "<p><b>Analogy — courier counter:</b> courier clerk item dekhkar charge tay karta hai: \"fragile → special packing; 5 kg se bhaari → heavy rate; shehar ke andar halka parcel → local rate; document → envelope\". Woh rules <b>upar se neeche</b> check karta hai aur <b>pehle match</b> par ruk jaata hai. <b>Switch expression</b> bilkul aise hi kaam karta hai.</p>\n<ul>\n<li><b>Type pattern + declaration</b>: <code>if (item is Parcel p)</code> — ek hi step mein type check karta hai aur typed variable de deta hai (koi cast nahi).</li>\n<li><b>Property pattern</b>: <code>Parcel { Fragile: true }</code>; <b>extended</b> (C# 10): <code>Order { Customer.City: \"Pune\" }</code>.</li>\n<li><b>Relational aur logical patterns</b> (C# 9): <code>&gt; 5</code>, <code>&lt;= 1</code>, <code>&gt;= 60 and &lt; 75</code>, <code>\"Mumbai\" or \"Pune\"</code>, <code>not null</code>.</li>\n<li><b>List patterns</b> (C# 11): <code>[]</code> (khaali), <code>[var only]</code>, <code>[var first, .., var last]</code> — <code>..</code> kitne bhi items se match karta hai.</li>\n<li><b>Switch expression</b> (C# 8): <code>value switch { pattern =&gt; result, ..., _ =&gt; fallback }</code>. Arms order mein check hote hain; <b>pehla match jeetta hai</b>. Jo arm kabhi reach nahi ho sakta woh compile error hai (<b>CS8510</b>). Cases chhoot jaayein to warning (<b>CS8509</b>) aati hai, aur runtime par kuch match na ho to <code>SwitchExpressionException</code>.</li>\n<li><b><code>is null</code> / <code>is not null</code></b> hamesha asli null check karte hain — overload kiya hua <code>==</code> operator inhe nahi badal sakta.</li>\n<li><b>Positional patterns</b> <code>Deconstruct</code> use karte hain (records mein hota hai): <code>point is (0, 0)</code>.</li>\n</ul>\n<p><b>Kab use karein:</b> type checks aur casts wali lambi <code>if/else if</code> chains ki jagah; kisi value ko result mein badalna (status → HTTP code, marks → grade, exception type → ProblemDetails); input ka shape validate karna. <b>Kab nahi:</b> jab behaviour type ka khud ka hai — agar har naye type par kai jagah bada <code>switch</code> edit karna pade, to <b>virtual method / polymorphism</b> (Day 1) zyada saaf hai; bahut gehre nested patterns jinhe team mein koi review mein padh na sake.</p>"
      },
      code: [
        {
          caption: {
            en: "Courier charges with a switch expression; relational patterns for grades; list patterns",
            hi: "Switch expression से courier charges; grades के लिए relational patterns; list patterns",
            hg: "Switch expression se courier charges; grades ke liye relational patterns; list patterns"
          },
          check: "run",
          expected: "local light: Rs 40\nheavy: Rs 120\nfragile: Rs 150\nenvelope: Rs 30\nunknown item: Int32\nnothing to send\ndistinction, first class, pass, fail, invalid\nempty | one item: 7 | first 1, last 9, count 4",
          src: "object?[] items =\n[\n    new Parcel(\"Mumbai\", 0.4m, Fragile: false),\n    new Parcel(\"Pune\", 7m, Fragile: false),\n    new Parcel(\"Delhi\", 2m, Fragile: true),\n    new Document(\"Pune\", Pages: 3),\n    42,\n    null\n];\nforeach (object? item in items)\n    Console.WriteLine(Charge(item));\n\nint[] marks = [82, 64, 35, 20, 120];\nConsole.WriteLine(string.Join(\", \", marks.Select(Grade)));\n\nConsole.WriteLine($\"{Describe([])} | {Describe([7])} | {Describe([1, 4, 6, 9])}\");\n\n// Arms are checked top to bottom; the first match wins.\nstatic string Charge(object? item) => item switch\n{\n    null => \"nothing to send\",\n    Parcel { Fragile: true } => \"fragile: Rs 150\",\n    Parcel { WeightKg: > 5 } => \"heavy: Rs 120\",\n    Parcel { City: \"Mumbai\" or \"Pune\", WeightKg: <= 1 } => \"local light: Rs 40\",\n    Parcel p => $\"standard to {p.City}: Rs 80\",\n    Document { Pages: < 10 } => \"envelope: Rs 30\",\n    Document => \"big envelope: Rs 50\",\n    _ => $\"unknown item: {item.GetType().Name}\"\n};\n\nstatic string Grade(int marks) => marks switch\n{\n    < 0 or > 100 => \"invalid\",\n    >= 75 => \"distinction\",\n    >= 60 => \"first class\",\n    >= 35 => \"pass\",\n    _ => \"fail\"\n};\n\nstatic string Describe(int[] codes) => codes switch\n{\n    [] => \"empty\",\n    [var only] => $\"one item: {only}\",\n    [var first, .., var last] => $\"first {first}, last {last}, count {codes.Length}\"\n};\n\npublic record Parcel(string City, decimal WeightKg, bool Fragile);\npublic record Document(string City, int Pages);"
        }
      ]
    },
    {
      id: "nullable-in-code",
      depth: "detailed",
      title: {
        en: "Nullable reference types in code: string vs string?, the warnings, and the tools to fix them",
        hi: "Code में Nullable reference types: string बनाम string?, warnings, और उन्हें ठीक करने के tools",
        hg: "Code mein Nullable reference types: string vs string?, warnings, aur unhe theek karne ke tools"
      },
      body: {
        en: "<ul>\n<li><b>Turn it on</b>: <code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code> in the project (default in new templates since .NET 6), or <code>#nullable enable</code> at the top of a file — handy for migrating an old codebase <b>file by file</b>.</li>\n<li><b>Meaning</b>: <code>string</code> = \"never null by design\"; <code>string?</code> = \"may be null, check before use\". At runtime both are the same <code>string</code> type — unlike <code>int?</code>, which is a real <code>Nullable&lt;int&gt;</code> struct with <code>HasValue</code>/<code>Value</code>.</li>\n<li><b>The warnings you will see</b>: <b>CS8600</b> (null or maybe-null into a non-nullable variable), <b>CS8602</b> (dereference of a possibly null reference), <b>CS8603</b> (possible null return), <b>CS8618</b> (non-nullable property not set when the constructor ends), <b>CS8625</b> (null literal passed where null is not allowed).</li>\n<li><b>Flow analysis</b>: after <code>if (customer is null) return;</code> or <code>ArgumentNullException.ThrowIfNull(customer);</code> the compiler knows <code>customer</code> is not null.</li>\n<li><b>Tools</b>: <code>?.</code>, <code>??</code>, <code>??=</code>, <code>is not null</code>; <b><code>required</code></b> (C# 11) to fix CS8618 properly; attributes like <code>[NotNullWhen(true)]</code> for <code>TryGet</code> methods and <code>[MemberNotNull]</code> for init helpers.</li>\n<li><b>The <code>!</code> (null-forgiving) operator</b> only silences the warning — there is <b>no runtime check</b>. Use it rarely, where you know more than the compiler (e.g. a value set by a framework), never as a reflex.</li>\n<li><b>Public APIs still need guard clauses</b>: callers may have NRT off, or may pass <code>null!</code>.</li>\n</ul>\n<p><b>When to use:</b> NRT on for every new project; for a team, make nullable warnings errors (<code>&lt;WarningsAsErrors&gt;nullable&lt;/WarningsAsErrors&gt;</code>) so they do not pile up; migrate legacy code file by file with <code>#nullable enable</code>. <b>When not:</b> do not \"fix\" warnings by adding <code>?</code> everywhere (then every caller must check) or <code>!</code> everywhere (then the feature protects nothing) — decide for each member whether null is a valid value.</p>",
        hi: "<ul>\n<li><b>On करो</b>: project में <code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code> (.NET 6 से नए templates में default), या file के ऊपर <code>#nullable enable</code> — पुराने codebase को <b>file by file</b> migrate करने के लिए बढ़िया।</li>\n<li><b>मतलब</b>: <code>string</code> = \"design से कभी null नहीं\"; <code>string?</code> = \"null हो सकता है, use से पहले check करो\"। Runtime पर दोनों एक ही <code>string</code> type हैं — <code>int?</code> से अलग, जो <code>HasValue</code>/<code>Value</code> वाला असली <code>Nullable&lt;int&gt;</code> struct है।</li>\n<li><b>जो warnings दिखेंगी</b>: <b>CS8600</b> (null या maybe-null को non-nullable variable में डालना), <b>CS8602</b> (possibly null reference को dereference करना), <b>CS8603</b> (possible null return), <b>CS8618</b> (constructor ख़त्म होने तक non-nullable property set नहीं हुई), <b>CS8625</b> (जहाँ null allowed नहीं वहाँ null literal देना)।</li>\n<li><b>Flow analysis</b>: <code>if (customer is null) return;</code> या <code>ArgumentNullException.ThrowIfNull(customer);</code> के बाद compiler जानता है कि <code>customer</code> null नहीं है।</li>\n<li><b>Tools</b>: <code>?.</code>, <code>??</code>, <code>??=</code>, <code>is not null</code>; CS8618 को सही तरीके से ठीक करने के लिए <b><code>required</code></b> (C# 11); <code>TryGet</code> methods के लिए <code>[NotNullWhen(true)]</code> और init helpers के लिए <code>[MemberNotNull]</code> जैसे attributes।</li>\n<li><b><code>!</code> (null-forgiving) operator</b> सिर्फ़ warning चुप कराता है — <b>runtime पर कोई check नहीं</b>। इसे कम use करो, वहाँ जहाँ आप compiler से ज़्यादा जानते हो (जैसे framework से set होने वाली value), आदत की तरह कभी नहीं।</li>\n<li><b>Public APIs में guard clauses फिर भी चाहिए</b>: callers के यहाँ NRT off हो सकता है, या वो <code>null!</code> pass कर सकते हैं।</li>\n</ul>\n<p><b>कब use करें:</b> हर नए project में NRT on; team के लिए nullable warnings को errors बनाओ (<code>&lt;WarningsAsErrors&gt;nullable&lt;/WarningsAsErrors&gt;</code>) ताकि ढेर न लगे; legacy code को <code>#nullable enable</code> से file by file migrate करो। <b>कब नहीं:</b> warnings \"ठीक\" करने के लिए हर जगह <code>?</code> मत लगाओ (फिर हर caller को check करना पड़ेगा) या हर जगह <code>!</code> (फिर feature कुछ नहीं बचाता) — हर member के लिए तय करो कि null एक valid value है या नहीं।</p>",
        hg: "<ul>\n<li><b>On karo</b>: project mein <code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code> (.NET 6 se naye templates mein default), ya file ke upar <code>#nullable enable</code> — purane codebase ko <b>file by file</b> migrate karne ke liye badhiya.</li>\n<li><b>Matlab</b>: <code>string</code> = \"design se kabhi null nahi\"; <code>string?</code> = \"null ho sakta hai, use se pehle check karo\". Runtime par dono ek hi <code>string</code> type hain — <code>int?</code> se alag, jo <code>HasValue</code>/<code>Value</code> wala asli <code>Nullable&lt;int&gt;</code> struct hai.</li>\n<li><b>Jo warnings dikhengi</b>: <b>CS8600</b> (null ya maybe-null ko non-nullable variable mein daalna), <b>CS8602</b> (possibly null reference ko dereference karna), <b>CS8603</b> (possible null return), <b>CS8618</b> (constructor khatam hone tak non-nullable property set nahi hui), <b>CS8625</b> (jahan null allowed nahi wahan null literal dena).</li>\n<li><b>Flow analysis</b>: <code>if (customer is null) return;</code> ya <code>ArgumentNullException.ThrowIfNull(customer);</code> ke baad compiler jaanta hai ki <code>customer</code> null nahi hai.</li>\n<li><b>Tools</b>: <code>?.</code>, <code>??</code>, <code>??=</code>, <code>is not null</code>; CS8618 ko sahi tareeke se theek karne ke liye <b><code>required</code></b> (C# 11); <code>TryGet</code> methods ke liye <code>[NotNullWhen(true)]</code> aur init helpers ke liye <code>[MemberNotNull]</code> jaise attributes.</li>\n<li><b><code>!</code> (null-forgiving) operator</b> sirf warning chup karata hai — <b>runtime par koi check nahi</b>. Ise kam use karo, wahan jahan aap compiler se zyada jaante ho (jaise framework se set hone wali value), aadat ki tarah kabhi nahi.</li>\n<li><b>Public APIs mein guard clauses phir bhi chahiye</b>: callers ke yahan NRT off ho sakta hai, ya woh <code>null!</code> pass kar sakte hain.</li>\n</ul>\n<p><b>Kab use karein:</b> har naye project mein NRT on; team ke liye nullable warnings ko errors banao (<code>&lt;WarningsAsErrors&gt;nullable&lt;/WarningsAsErrors&gt;</code>) taaki dher na lage; legacy code ko <code>#nullable enable</code> se file by file migrate karo. <b>Kab nahi:</b> warnings \"theek\" karne ke liye har jagah <code>?</code> mat lagao (phir har caller ko check karna padega) ya har jagah <code>!</code> (phir feature kuch nahi bachata) — har member ke liye tay karo ki null ek valid value hai ya nahi.</p>"
      },
      code: [
        {
          caption: {
            en: "Warning-free nullable code: required, string?, TryGet with [NotNullWhen], ?. ?? ??=, flow analysis — and why ! is only a promise",
            hi: "बिना warnings का nullable code: required, string?, [NotNullWhen] वाला TryGet, ?. ?? ??=, flow analysis — और ! सिर्फ़ एक वादा क्यों है",
            hg: "Bina warnings ka nullable code: required, string?, [NotNullWhen] wala TryGet, ?. ?? ??=, flow analysis — aur ! sirf ek waada kyun hai"
          },
          check: "run",
          expected: "Found Asha\n(no customer)\nguest\nRavi <ravi@example.com>\nName length: 4\nnull hidden by '!' is still null: True\nstock.HasValue = False, stock ?? 0 = 0",
          src: "using System.Diagnostics.CodeAnalysis;\n\nvar repo = new CustomerRepository();\n\nif (repo.TryFind(1, out Customer? found))\n    Console.WriteLine($\"Found {found.Name}\");             // no warning, thanks to [NotNullWhen(true)]\n\nCustomer? missing = repo.Find(99);\nConsole.WriteLine(missing?.Name ?? \"(no customer)\");      // ?. and ??\n\nstring display = missing is not null ? missing.Name : \"guest\";\nConsole.WriteLine(display);\n\nvar ravi = new Customer { Name = \"Ravi\" };                 // 'required': the compiler forces Name\nravi.Email ??= \"ravi@example.com\";                         // assign only if it is null\nConsole.WriteLine($\"{ravi.Name} <{ravi.Email}>\");\n\nConsole.WriteLine($\"Name length: {NameLength(ravi)}\");\n\n// NRT is compile-time only: '!' silences the compiler, nothing checks at runtime\nstring hidden = null!;\nConsole.WriteLine($\"null hidden by '!' is still null: {hidden is null}\");\n\nint? stock = null;                                         // Nullable<int>: a real runtime struct\nConsole.WriteLine($\"stock.HasValue = {stock.HasValue}, stock ?? 0 = {stock ?? 0}\");\n\nstatic int NameLength(Customer? customer)\n{\n    ArgumentNullException.ThrowIfNull(customer);           // after this, customer is known non-null\n    return customer.Name.Length;\n}\n\npublic class Customer\n{\n    public required string Name { get; init; }             // must be set: no CS8618\n    public string? Email { get; set; }                     // may be null by design\n}\n\npublic class CustomerRepository\n{\n    private readonly Dictionary<int, Customer> _byId = new()\n    {\n        [1] = new Customer { Name = \"Asha\" }\n    };\n\n    public Customer? Find(int id) => _byId.GetValueOrDefault(id);\n\n    public bool TryFind(int id, [NotNullWhen(true)] out Customer? customer)\n        => _byId.TryGetValue(id, out customer);\n}"
        }
      ]
    },
    {
      id: "span-in-code",
      depth: "detailed",
      title: {
        en: "Span basics in code: slicing without copies, parsing, stackalloc, and Memory",
        hi: "Code में Span की basics: बिना copy के slicing, parsing, stackalloc, और Memory",
        hg: "Code mein Span ki basics: bina copy ke slicing, parsing, stackalloc, aur Memory"
      },
      body: {
        en: "<p><b>Analogy — the tailor's chalk marks:</b> a tailor does not cut a new piece of cloth just to look at the sleeve part. He puts <b>chalk marks</b> on the same roll — \"work between here and here\". If he stitches inside the marks, the <b>original cloth</b> changes. A <code>Span&lt;T&gt;</code> is those chalk marks: a <b>view over existing memory</b>, with no copy.</p>\n<ul>\n<li><b><code>Span&lt;T&gt;</code></b> (read/write) and <b><code>ReadOnlySpan&lt;T&gt;</code></b> point to a contiguous block: an array or part of it, a string (<code>\"text\".AsSpan()</code> gives <code>ReadOnlySpan&lt;char&gt;</code>), <code>stackalloc</code> memory, or native memory.</li>\n<li><b>Slicing</b> — <code>span.Slice(1, 3)</code> or <code>span[1..4]</code> — gives another view: <b>no copy, no heap allocation</b>. Writing through a span changes the original array.</li>\n<li><b>Parsing without allocations</b>: many APIs accept spans — <code>int.Parse(ReadOnlySpan&lt;char&gt;)</code>, <code>IndexOf</code>, <code>Trim</code>, <code>StartsWith</code>, <code>TryFormat</code>. Instead of <code>Substring</code> (a new string each time), slice the span and parse directly. Call <code>ToString()</code> only when you really need a string.</li>\n<li><b><code>stackalloc</code></b>: <code>Span&lt;char&gt; buffer = stackalloc char[16];</code> — a small temporary buffer on the stack, no GC, no <code>unsafe</code> needed. Keep it <b>small</b> (the stack is limited); for big or variable sizes, rent from <code>ArrayPool&lt;T&gt;.Shared</code>.</li>\n<li><b>Why the limits:</b> <code>Span&lt;T&gt;</code> is a <b><code>ref struct</code></b> — it can point into the stack, so it must never outlive it. It cannot be a field of a class (<b>CS8345</b>), cannot be boxed to <code>object</code> (<b>CS0029</b>), cannot be captured by a lambda (<b>CS8175</b>), cannot be kept across an <code>await</code> (<b>CS4007</b>), and cannot be a normal generic argument like <code>List&lt;Span&lt;int&gt;&gt;</code> (<b>CS9244</b>).</li>\n<li><b><code>Memory&lt;T&gt;</code> / <code>ReadOnlyMemory&lt;T&gt;</code></b>: the heap-friendly partner. It can live in fields and cross <code>await</code>; call <code>.Span</code> inside a synchronous piece of code to work on it.</li>\n<li>Most of the benefit comes <b>for free</b>: Kestrel, <code>System.Text.Json</code> and many string APIs use spans internally, so your app gets faster when you upgrade .NET.</li>\n</ul>\n<p><b>When to use:</b> hot paths that parse or format a lot of text/bytes (log parsing, protocol handling, CSV import, custom serializers) — after a profiler or benchmark (BenchmarkDotNet) shows the allocations matter. <b>When not:</b> ordinary business code, where <code>Substring</code> and LINQ are clearer and the gain is too small to notice; anything that must be stored or used across <code>await</code> (use <code>Memory&lt;T&gt;</code> or a normal array).</p>",
        hi: "<p><b>Analogy — दर्ज़ी के chalk निशान:</b> दर्ज़ी सिर्फ़ आस्तीन वाला हिस्सा देखने के लिए कपड़े का नया टुकड़ा नहीं काटता। वो उसी थान पर <b>chalk से निशान</b> लगाता है — \"यहाँ से यहाँ तक काम करना है\"। अगर वो निशानों के अंदर सिलाई करे, तो <b>original कपड़ा</b> बदल जाता है। <code>Span&lt;T&gt;</code> वही chalk के निशान है: <b>पहले से मौजूद memory पर एक view</b>, बिना copy के।</p>\n<ul>\n<li><b><code>Span&lt;T&gt;</code></b> (read/write) और <b><code>ReadOnlySpan&lt;T&gt;</code></b> memory के एक लगातार block की ओर point करते हैं: array या उसका हिस्सा, string (<code>\"text\".AsSpan()</code> से <code>ReadOnlySpan&lt;char&gt;</code> मिलता है), <code>stackalloc</code> memory, या native memory।</li>\n<li><b>Slicing</b> — <code>span.Slice(1, 3)</code> या <code>span[1..4]</code> — एक और view देता है: <b>न copy, न heap allocation</b>। Span के ज़रिए लिखने से original array बदल जाता है।</li>\n<li><b>बिना allocations के parsing</b>: बहुत सी APIs spans लेती हैं — <code>int.Parse(ReadOnlySpan&lt;char&gt;)</code>, <code>IndexOf</code>, <code>Trim</code>, <code>StartsWith</code>, <code>TryFormat</code>। <code>Substring</code> (हर बार नई string) की जगह span को slice करो और सीधे parse करो। <code>ToString()</code> तभी call करो जब सच में string चाहिए।</li>\n<li><b><code>stackalloc</code></b>: <code>Span&lt;char&gt; buffer = stackalloc char[16];</code> — stack पर एक छोटा temporary buffer, कोई GC नहीं, <code>unsafe</code> की ज़रूरत नहीं। इसे <b>छोटा</b> रखो (stack सीमित है); बड़े या बदलते sizes के लिए <code>ArrayPool&lt;T&gt;.Shared</code> से rent करो।</li>\n<li><b>ये पाबंदियाँ क्यों:</b> <code>Span&lt;T&gt;</code> एक <b><code>ref struct</code></b> है — यह stack के अंदर point कर सकता है, इसलिए इसे stack से ज़्यादा देर ज़िंदा नहीं रहना चाहिए। यह class का field नहीं बन सकता (<b>CS8345</b>), <code>object</code> में box नहीं हो सकता (<b>CS0029</b>), lambda इसे capture नहीं कर सकता (<b>CS8175</b>), <code>await</code> के पार नहीं रखा जा सकता (<b>CS4007</b>), और <code>List&lt;Span&lt;int&gt;&gt;</code> जैसा normal generic argument नहीं बन सकता (<b>CS9244</b>)।</li>\n<li><b><code>Memory&lt;T&gt;</code> / <code>ReadOnlyMemory&lt;T&gt;</code></b>: heap के साथ चलने वाला साथी। यह fields में रह सकता है और <code>await</code> के पार जा सकता है; उस पर काम करने के लिए किसी synchronous हिस्से में <code>.Span</code> call करो।</li>\n<li>ज़्यादातर फ़ायदा <b>मुफ़्त में</b> मिलता है: Kestrel, <code>System.Text.Json</code> और कई string APIs अंदर spans use करती हैं, इसलिए .NET upgrade करने पर आपका app तेज़ हो जाता है।</li>\n</ul>\n<p><b>कब use करें:</b> hot paths जो बहुत सारा text/bytes parse या format करते हैं (log parsing, protocol handling, CSV import, custom serializers) — जब profiler या benchmark (BenchmarkDotNet) दिखाए कि allocations मायने रखते हैं। <b>कब नहीं:</b> आम business code, जहाँ <code>Substring</code> और LINQ ज़्यादा साफ़ हैं और फ़ायदा इतना छोटा है कि दिखेगा भी नहीं; जो कुछ store करना हो या <code>await</code> के पार use करना हो (<code>Memory&lt;T&gt;</code> या normal array लो)।</p>",
        hg: "<p><b>Analogy — darzi ke chalk nishaan:</b> darzi sirf aasteen wala hissa dekhne ke liye kapde ka naya tukda nahi kaat-ta. Woh usi thaan par <b>chalk se nishaan</b> lagata hai — \"yahan se yahan tak kaam karna hai\". Agar woh nishaanon ke andar silaai kare, to <b>original kapda</b> badal jaata hai. <code>Span&lt;T&gt;</code> wahi chalk ke nishaan hai: <b>pehle se maujood memory par ek view</b>, bina copy ke.</p>\n<ul>\n<li><b><code>Span&lt;T&gt;</code></b> (read/write) aur <b><code>ReadOnlySpan&lt;T&gt;</code></b> memory ke ek lagaataar block ki or point karte hain: array ya uska hissa, string (<code>\"text\".AsSpan()</code> se <code>ReadOnlySpan&lt;char&gt;</code> milta hai), <code>stackalloc</code> memory, ya native memory.</li>\n<li><b>Slicing</b> — <code>span.Slice(1, 3)</code> ya <code>span[1..4]</code> — ek aur view deta hai: <b>na copy, na heap allocation</b>. Span ke zariye likhne se original array badal jaata hai.</li>\n<li><b>Bina allocations ke parsing</b>: bahut si APIs spans leti hain — <code>int.Parse(ReadOnlySpan&lt;char&gt;)</code>, <code>IndexOf</code>, <code>Trim</code>, <code>StartsWith</code>, <code>TryFormat</code>. <code>Substring</code> (har baar nayi string) ki jagah span ko slice karo aur seedhe parse karo. <code>ToString()</code> tabhi call karo jab sach mein string chahiye.</li>\n<li><b><code>stackalloc</code></b>: <code>Span&lt;char&gt; buffer = stackalloc char[16];</code> — stack par ek chhota temporary buffer, koi GC nahi, <code>unsafe</code> ki zaroorat nahi. Ise <b>chhota</b> rakho (stack seemit hai); bade ya badalte sizes ke liye <code>ArrayPool&lt;T&gt;.Shared</code> se rent karo.</li>\n<li><b>Yeh paabandiyan kyun:</b> <code>Span&lt;T&gt;</code> ek <b><code>ref struct</code></b> hai — yeh stack ke andar point kar sakta hai, isliye ise stack se zyada der zinda nahi rehna chahiye. Yeh class ka field nahi ban sakta (<b>CS8345</b>), <code>object</code> mein box nahi ho sakta (<b>CS0029</b>), lambda ise capture nahi kar sakta (<b>CS8175</b>), <code>await</code> ke paar nahi rakha ja sakta (<b>CS4007</b>), aur <code>List&lt;Span&lt;int&gt;&gt;</code> jaisa normal generic argument nahi ban sakta (<b>CS9244</b>).</li>\n<li><b><code>Memory&lt;T&gt;</code> / <code>ReadOnlyMemory&lt;T&gt;</code></b>: heap ke saath chalne wala saathi. Yeh fields mein reh sakta hai aur <code>await</code> ke paar ja sakta hai; us par kaam karne ke liye kisi synchronous hisse mein <code>.Span</code> call karo.</li>\n<li>Zyadatar fayda <b>muft mein</b> milta hai: Kestrel, <code>System.Text.Json</code> aur kai string APIs andar spans use karti hain, isliye .NET upgrade karne par aapka app tez ho jaata hai.</li>\n</ul>\n<p><b>Kab use karein:</b> hot paths jo bahut saara text/bytes parse ya format karte hain (log parsing, protocol handling, CSV import, custom serializers) — jab profiler ya benchmark (BenchmarkDotNet) dikhaye ki allocations maayne rakhte hain. <b>Kab nahi:</b> aam business code, jahan <code>Substring</code> aur LINQ zyada saaf hain aur fayda itna chhota hai ki dikhega bhi nahi; jo kuch store karna ho ya <code>await</code> ke paar use karna ho (<code>Memory&lt;T&gt;</code> ya normal array lo).</p>"
      },
      code: [
        {
          caption: {
            en: "Slicing changes the original array; parsing a ticket string without Substring; stackalloc; Memory across an await",
            hi: "Slicing original array को बदलती है; बिना Substring के ticket string parse करना; stackalloc; await के पार Memory",
            hg: "Slicing original array ko badalti hai; bina Substring ke ticket string parse karna; stackalloc; await ke paar Memory"
          },
          check: "run",
          expected: "10,99,30,40,50\nlast two: 40 50\nPNR 4521367890, coach B2\nTryFormat: True, 10 chars\nSum of first two after an await: 109",
          src: "int[] seats = [10, 20, 30, 40, 50];\nShowSlicing(seats);\nParseTicket(\"PNR:4521367890;COACH:B2\");\n\n// Memory<T> may cross an await; Span<T> may not\nint firstTwo = await SumLaterAsync(seats.AsMemory(0, 2));\nConsole.WriteLine($\"Sum of first two after an await: {firstTwo}\");\n\nstatic void ShowSlicing(int[] seats)\n{\n    Span<int> middle = seats.AsSpan(1, 3);     // a window over 20, 30, 40: no copy\n    middle[0] = 99;                            // writes into the original array\n    Console.WriteLine(string.Join(\",\", seats));\n\n    Span<int> lastTwo = seats.AsSpan()[^2..];  // range syntax works on spans\n    Console.WriteLine($\"last two: {lastTwo[0]} {lastTwo[1]}\");\n}\n\nstatic void ParseTicket(string ticket)\n{\n    ReadOnlySpan<char> text = ticket.AsSpan();\n    ReadOnlySpan<char> pnrPart = text[..text.IndexOf(';')];               // \"PNR:4521367890\"\n    long pnr = long.Parse(pnrPart[(pnrPart.IndexOf(':') + 1)..]);         // parse straight from the span\n    ReadOnlySpan<char> coach = text[(text.LastIndexOf(':') + 1)..];        // \"B2\"\n    Console.WriteLine($\"PNR {pnr}, coach {coach.ToString()}\");            // ToString() allocates only here\n\n    Span<char> buffer = stackalloc char[16];   // small temporary buffer on the stack\n    bool ok = pnr.TryFormat(buffer, out int written);\n    Console.WriteLine($\"TryFormat: {ok}, {written} chars\");\n}\n\nstatic async Task<int> SumLaterAsync(ReadOnlyMemory<int> data)\n{\n    await Task.Delay(10);                      // pretend I/O\n    return Sum(data.Span);                     // take the Span in synchronous code\n}\n\nstatic int Sum(ReadOnlySpan<int> values)\n{\n    int sum = 0;\n    foreach (int v in values) sum += v;\n    return sum;\n}"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new in recent C# and .NET versions",
        hi: "हाल के C# और .NET versions में नया क्या है",
        hg: "Haal ke C# aur .NET versions mein naya kya hai"
      },
      body: {
        en: "<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025). Recent changes related to today's topics — each tagged with its version, and whether it is a <b>library/runtime</b> change (.NET) or a <b>language</b> feature (C#):</p>\n<ul>\n<li><b>.NET 8 (library)</b> — <code>ConfigureAwaitOptions</code>: <code>await task.ConfigureAwait(ConfigureAwaitOptions.SuppressThrowing)</code> waits for completion without throwing (non-generic <code>Task</code> only); <code>ForceYielding</code> always yields. Before, <code>ConfigureAwait</code> took only a <code>bool</code>.</li>\n<li><b>.NET 8 (ASP.NET Core)</b> — <code>IExceptionHandler</code> for clean global exception handling with ProblemDetails.</li>\n<li><b>.NET 9 (library)</b> — <code>Task.WhenEach</code>: <code>await foreach (var t in Task.WhenEach(tasks))</code> gives tasks in the order they <b>complete</b>, replacing the old <code>WhenAny</code> loop.</li>\n<li><b>.NET 9 (runtime)</b> — exception handling in CoreCLR was reimplemented (based on the NativeAOT model), making throw/catch noticeably faster. Exceptions are still for exceptional cases.</li>\n<li><b>.NET 9 (GC)</b> — <b>DATAS</b> is enabled by default with Server GC: the number of heaps adapts to the app's load, so small apps use less memory.</li>\n<li><b>C# 13</b> — <code>ref</code> locals and <code>ref struct</code> locals (like <code>Span&lt;T&gt;</code>) are allowed in <code>async</code> methods and iterators, as long as they are not used across an <code>await</code>/<code>yield</code>. Before C# 13 they were not allowed there at all.</li>\n<li><b>C# 13</b> — <code>allows ref struct</code> lets generic code accept <code>Span&lt;T&gt;</code>-like types (Day 2 whatsNew).</li>\n<li><b>.NET 10 (library)</b> — <code>System.Linq.AsyncEnumerable</code>: LINQ operators for <code>IAsyncEnumerable&lt;T&gt;</code> are now built in; before, you added the <code>System.Linq.Async</code> NuGet package.</li>\n<li><b>C# 14</b> (.NET 10) — first-class span conversions: arrays convert to <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> in more places (extension-method receivers, generic inference); and null-conditional assignment <code>customer?.Email = value;</code> (Day 2 whatsNew).</li>\n</ul>\n<p>The code checker for this tutorial uses the .NET 9 SDK (C# 13); nothing in today's runnable code needs C# 14.</p>\n<p><b>Next (as of Oct 2026):</b> .NET 11 (STS) is due in November 2026; .NET 10 stays the LTS.</p>",
        hi: "<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025)। आज के topics से जुड़े हाल के बदलाव — हर एक पर उसका version लिखा है, और यह भी कि वो <b>library/runtime</b> बदलाव (.NET) है या <b>language</b> feature (C#):</p>\n<ul>\n<li><b>.NET 8 (library)</b> — <code>ConfigureAwaitOptions</code>: <code>await task.ConfigureAwait(ConfigureAwaitOptions.SuppressThrowing)</code> बिना throw किए completion का इंतज़ार करता है (सिर्फ़ non-generic <code>Task</code> पर); <code>ForceYielding</code> हमेशा yield करता है। पहले <code>ConfigureAwait</code> सिर्फ़ <code>bool</code> लेता था।</li>\n<li><b>.NET 8 (ASP.NET Core)</b> — ProblemDetails के साथ साफ़ global exception handling के लिए <code>IExceptionHandler</code>।</li>\n<li><b>.NET 9 (library)</b> — <code>Task.WhenEach</code>: <code>await foreach (var t in Task.WhenEach(tasks))</code> tasks को उसी order में देता है जिसमें वो <b>complete</b> होते हैं, पुराने <code>WhenAny</code> loop की जगह।</li>\n<li><b>.NET 9 (runtime)</b> — CoreCLR में exception handling दोबारा implement हुआ (NativeAOT model पर), जिससे throw/catch काफ़ी तेज़ हुए। Exceptions फिर भी असाधारण हालात के लिए ही हैं।</li>\n<li><b>.NET 9 (GC)</b> — Server GC के साथ <b>DATAS</b> by default enabled है: heaps की संख्या app के load के हिसाब से बदलती है, इसलिए छोटे apps कम memory लेते हैं।</li>\n<li><b>C# 13</b> — <code>ref</code> locals और <code>ref struct</code> locals (जैसे <code>Span&lt;T&gt;</code>) <code>async</code> methods और iterators में allowed हैं, जब तक वो <code>await</code>/<code>yield</code> के पार use न हों। C# 13 से पहले वहाँ बिल्कुल allowed नहीं थे।</li>\n<li><b>C# 13</b> — <code>allows ref struct</code> से generic code <code>Span&lt;T&gt;</code> जैसे types ले सकता है (Day 2 whatsNew)।</li>\n<li><b>.NET 10 (library)</b> — <code>System.Linq.AsyncEnumerable</code>: <code>IAsyncEnumerable&lt;T&gt;</code> के लिए LINQ operators अब built-in हैं; पहले <code>System.Linq.Async</code> NuGet package जोड़ना पड़ता था।</li>\n<li><b>C# 14</b> (.NET 10) — first-class span conversions: arrays अब ज़्यादा जगहों पर <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> में convert होते हैं (extension-method receivers, generic inference); और null-conditional assignment <code>customer?.Email = value;</code> (Day 2 whatsNew)।</li>\n</ul>\n<p>इस tutorial का code checker .NET 9 SDK (C# 13) use करता है; आज के runnable code में कुछ भी C# 14 पर depend नहीं करता।</p>\n<p><b>आगे (Oct 2026 तक की जानकारी):</b> .NET 11 (STS) November 2026 में आने वाला है; .NET 10 ही LTS रहेगा।</p>",
        hg: "<p>Current: <b>C# 14 / .NET 10 LTS</b> (Nov 2025). Aaj ke topics se jude haal ke badlaav — har ek par uska version likha hai, aur yeh bhi ki woh <b>library/runtime</b> badlaav (.NET) hai ya <b>language</b> feature (C#):</p>\n<ul>\n<li><b>.NET 8 (library)</b> — <code>ConfigureAwaitOptions</code>: <code>await task.ConfigureAwait(ConfigureAwaitOptions.SuppressThrowing)</code> bina throw kiye completion ka intezaar karta hai (sirf non-generic <code>Task</code> par); <code>ForceYielding</code> hamesha yield karta hai. Pehle <code>ConfigureAwait</code> sirf <code>bool</code> leta tha.</li>\n<li><b>.NET 8 (ASP.NET Core)</b> — ProblemDetails ke saath saaf global exception handling ke liye <code>IExceptionHandler</code>.</li>\n<li><b>.NET 9 (library)</b> — <code>Task.WhenEach</code>: <code>await foreach (var t in Task.WhenEach(tasks))</code> tasks ko usi order mein deta hai jismein woh <b>complete</b> hote hain, purane <code>WhenAny</code> loop ki jagah.</li>\n<li><b>.NET 9 (runtime)</b> — CoreCLR mein exception handling dobara implement hua (NativeAOT model par), jisse throw/catch kaafi tez hue. Exceptions phir bhi asaadhaaran haalaat ke liye hi hain.</li>\n<li><b>.NET 9 (GC)</b> — Server GC ke saath <b>DATAS</b> by default enabled hai: heaps ki sankhya app ke load ke hisaab se badalti hai, isliye chhote apps kam memory lete hain.</li>\n<li><b>C# 13</b> — <code>ref</code> locals aur <code>ref struct</code> locals (jaise <code>Span&lt;T&gt;</code>) <code>async</code> methods aur iterators mein allowed hain, jab tak woh <code>await</code>/<code>yield</code> ke paar use na hon. C# 13 se pehle wahan bilkul allowed nahi the.</li>\n<li><b>C# 13</b> — <code>allows ref struct</code> se generic code <code>Span&lt;T&gt;</code> jaise types le sakta hai (Day 2 whatsNew).</li>\n<li><b>.NET 10 (library)</b> — <code>System.Linq.AsyncEnumerable</code>: <code>IAsyncEnumerable&lt;T&gt;</code> ke liye LINQ operators ab built-in hain; pehle <code>System.Linq.Async</code> NuGet package jodna padta tha.</li>\n<li><b>C# 14</b> (.NET 10) — first-class span conversions: arrays ab zyada jagahon par <code>Span&lt;T&gt;</code>/<code>ReadOnlySpan&lt;T&gt;</code> mein convert hote hain (extension-method receivers, generic inference); aur null-conditional assignment <code>customer?.Email = value;</code> (Day 2 whatsNew).</li>\n</ul>\n<p>Is tutorial ka code checker .NET 9 SDK (C# 13) use karta hai; aaj ke runnable code mein kuch bhi C# 14 par depend nahi karta.</p>\n<p><b>Aage (Oct 2026 tak ki jaankari):</b> .NET 11 (STS) November 2026 mein aane wala hai; .NET 10 hi LTS rahega.</p>"
      }
    }
  ],
  qa: [
    {
      id: "async-await-thread",
      depth: "short",
      q: "How does async/await work? Does it create a new thread?",
      answer: "No. At an await on an unfinished task, the method returns and frees its thread; the rest runs as a continuation when the task completes. For I/O, no thread sits waiting.",
      meaning: {
        hi: "नहीं। अधूरे task पर await होते ही method return कर देता है और अपना thread free कर देता है; task पूरा होने पर बाकी हिस्सा continuation की तरह चलता है। I/O के दौरान कोई thread बैठकर इंतज़ार नहीं करता।",
        hg: "Nahi. Adhoore task par await hote hi method return kar deta hai aur apna thread free kar deta hai; task poora hone par baaki hissa continuation ki tarah chalta hai. I/O ke dauraan koi thread baithkar intezaar nahi karta."
      },
      explain: {
        en: "<ul>\n<li>The compiler rewrites the <code>async</code> method into a <b>state machine</b>. Code runs <b>synchronously</b> on the caller's thread until the first <code>await</code> of a task that is not complete yet.</li>\n<li>At that point the method returns an incomplete <code>Task</code> to its caller. When the awaited operation finishes, the continuation is scheduled: back on the captured <code>SynchronizationContext</code> if there is one (UI thread), otherwise on a <b>thread-pool</b> thread (ASP.NET Core, console).</li>\n<li>For true I/O (DB, HTTP, file), the OS signals completion — no .NET thread is blocked while waiting. That is why a web server can handle far more requests: threads go back to the pool instead of sleeping.</li>\n<li>Awaiting an <b>already completed</b> task continues immediately, without any switch.</li>\n</ul>\n<p>Follow-up: \"Does async make a single request faster?\" — No. It adds a small overhead (the state machine). The win is <b>scalability</b>: more concurrent requests with the same threads.</p>\n<p>Follow-up: \"Then how do you run CPU work in parallel?\" — that needs threads: <code>Task.Run</code>, <code>Parallel.For</code>/<code>Parallel.ForEachAsync</code>, PLINQ.</p>\n<p><b>TL angle:</b> in code review, look for blocking calls (<code>.Result</code>, <code>Thread.Sleep</code>, sync I/O) inside async methods — they quietly cancel the benefit.</p>",
        hi: "<ul>\n<li>Compiler <code>async</code> method को एक <b>state machine</b> में बदल देता है। Code caller के thread पर तब तक <b>synchronously</b> चलता है जब तक पहली बार किसी अधूरे task पर <code>await</code> न हो।</li>\n<li>उस point पर method अपने caller को एक अधूरा <code>Task</code> return कर देता है। Await किया गया operation ख़त्म होने पर continuation schedule होता है: अगर captured <code>SynchronizationContext</code> है (UI thread) तो वहीं, वरना किसी <b>thread-pool</b> thread पर (ASP.NET Core, console)।</li>\n<li>असली I/O (DB, HTTP, file) में completion का signal OS देता है — इंतज़ार के दौरान कोई .NET thread block नहीं होता। इसीलिए web server कहीं ज़्यादा requests संभाल पाता है: threads सोने की जगह pool में वापस चले जाते हैं।</li>\n<li><b>पहले से complete</b> task पर await करने से code तुरंत, बिना किसी switch के आगे चलता है।</li>\n</ul>\n<p>Follow-up: \"क्या async से एक request तेज़ हो जाती है?\" — नहीं। इसमें थोड़ा overhead (state machine) जुड़ता है। फ़ायदा <b>scalability</b> है: उन्हीं threads से ज़्यादा concurrent requests।</p>\n<p>Follow-up: \"तो CPU काम parallel कैसे चलाओगे?\" — उसके लिए threads चाहिए: <code>Task.Run</code>, <code>Parallel.For</code>/<code>Parallel.ForEachAsync</code>, PLINQ।</p>\n<p><b>TL angle:</b> code review में async methods के अंदर blocking calls (<code>.Result</code>, <code>Thread.Sleep</code>, sync I/O) देखो — ये चुपचाप सारा फ़ायदा ख़त्म कर देते हैं।</p>",
        hg: "<ul>\n<li>Compiler <code>async</code> method ko ek <b>state machine</b> mein badal deta hai. Code caller ke thread par tab tak <b>synchronously</b> chalta hai jab tak pehli baar kisi adhoore task par <code>await</code> na ho.</li>\n<li>Us point par method apne caller ko ek adhoora <code>Task</code> return kar deta hai. Await kiya gaya operation khatam hone par continuation schedule hota hai: agar captured <code>SynchronizationContext</code> hai (UI thread) to wahin, warna kisi <b>thread-pool</b> thread par (ASP.NET Core, console).</li>\n<li>Asli I/O (DB, HTTP, file) mein completion ka signal OS deta hai — intezaar ke dauraan koi .NET thread block nahi hota. Isiliye web server kahin zyada requests sambhaal paata hai: threads sone ki jagah pool mein wapas chale jaate hain.</li>\n<li><b>Pehle se complete</b> task par await karne se code turant, bina kisi switch ke aage chalta hai.</li>\n</ul>\n<p>Follow-up: \"Kya async se ek request tez ho jaati hai?\" — Nahi. Ismein thoda overhead (state machine) judta hai. Fayda <b>scalability</b> hai: unhi threads se zyada concurrent requests.</p>\n<p>Follow-up: \"To CPU kaam parallel kaise chalaoge?\" — uske liye threads chahiye: <code>Task.Run</code>, <code>Parallel.For</code>/<code>Parallel.ForEachAsync</code>, PLINQ.</p>\n<p><b>TL angle:</b> code review mein async methods ke andar blocking calls (<code>.Result</code>, <code>Thread.Sleep</code>, sync I/O) dekho — yeh chupchaap saara fayda khatam kar dete hain.</p>"
      }
    },
    {
      id: "task-vs-thread",
      depth: "short",
      q: "What is the difference between a Task and a Thread?",
      answer: "A Thread is an OS worker you create and manage yourself. A Task is a higher-level promise of work or a result, usually on the thread pool, with results, exceptions and cancellation built in.",
      meaning: {
        hi: "Thread OS level का worker है जिसे आप ख़ुद बनाते और संभालते हो। Task ऊपर के level का काम या result का वादा है, जो आमतौर पर thread pool पर चलता है, और जिसमें results, exceptions और cancellation पहले से built-in हैं।",
        hg: "Thread OS level ka worker hai jise aap khud banate aur sambhalte ho. Task upar ke level ka kaam ya result ka waada hai, jo aamtaur par thread pool par chalta hai, aur jismein results, exceptions aur cancellation pehle se built-in hain."
      },
      explain: {
        en: "<ul>\n<li><b>Thread</b>: creating one is costly (its own stack memory, OS scheduling). You call <code>Start()</code> and <code>Join()</code>; there is no return value, and an unhandled exception on it crashes the process.</li>\n<li><b>Task</b>: represents an operation. CPU work runs on <b>thread-pool</b> threads that are reused; an I/O task may use <b>no thread at all</b> while waiting. It gives <code>Task&lt;T&gt;</code> results, exceptions through <code>await</code>, <code>CancellationToken</code> support, and composition with <code>WhenAll</code>/<code>WhenAny</code>.</li>\n<li><b>Thread pool</b>: a shared set of worker threads. It adds new threads slowly, so blocking pool threads (<code>.Result</code>, <code>Thread.Sleep</code>) leads to <b>thread-pool starvation</b>.</li>\n<li><b>When a raw Thread still makes sense</b>: a dedicated long-running loop, or special needs like an STA thread for COM/UI. <code>Task.Factory.StartNew(..., TaskCreationOptions.LongRunning)</code> is the Task-based option for long-running work.</li>\n</ul>\n<p>Follow-up: \"<code>Task.Run</code> vs <code>Task.Factory.StartNew</code>?\" — <code>Task.Run</code> is the simple, safe default. <code>StartNew</code> has more options but traps: with an <code>async</code> lambda it returns <code>Task&lt;Task&gt;</code>, and it uses the current scheduler by default.</p>\n<p>Follow-up: \"<code>Task.Wait()</code> vs <code>await</code>?\" — <code>Wait()</code> blocks the thread and wraps exceptions in <code>AggregateException</code>; <code>await</code> frees the thread and rethrows the original exception.</p>",
        hi: "<ul>\n<li><b>Thread</b>: इसे बनाना महँगा है (अपनी stack memory, OS scheduling)। आप <code>Start()</code> और <code>Join()</code> call करते हो; कोई return value नहीं, और उस पर unhandled exception आए तो process crash हो जाता है।</li>\n<li><b>Task</b>: एक operation को represent करता है। CPU काम <b>thread-pool</b> के threads पर चलता है जो reuse होते हैं; I/O task इंतज़ार के दौरान <b>कोई thread use नहीं</b> करता। यह <code>Task&lt;T&gt;</code> results, <code>await</code> के ज़रिए exceptions, <code>CancellationToken</code> support, और <code>WhenAll</code>/<code>WhenAny</code> से composition देता है।</li>\n<li><b>Thread pool</b>: worker threads का साझा set। यह नए threads धीरे-धीरे जोड़ता है, इसलिए pool threads को block करने से (<code>.Result</code>, <code>Thread.Sleep</code>) <b>thread-pool starvation</b> होती है।</li>\n<li><b>Raw Thread कब अब भी ठीक है</b>: एक dedicated long-running loop, या ख़ास ज़रूरतें जैसे COM/UI के लिए STA thread। Long-running काम के लिए Task वाला option है <code>Task.Factory.StartNew(..., TaskCreationOptions.LongRunning)</code>।</li>\n</ul>\n<p>Follow-up: \"<code>Task.Run</code> बनाम <code>Task.Factory.StartNew</code>?\" — <code>Task.Run</code> आसान और safe default है। <code>StartNew</code> में ज़्यादा options हैं पर जाल भी: <code>async</code> lambda के साथ यह <code>Task&lt;Task&gt;</code> return करता है, और by default current scheduler use करता है।</p>\n<p>Follow-up: \"<code>Task.Wait()</code> बनाम <code>await</code>?\" — <code>Wait()</code> thread को block करता है और exceptions को <code>AggregateException</code> में लपेटता है; <code>await</code> thread free करता है और original exception दोबारा throw करता है।</p>",
        hg: "<ul>\n<li><b>Thread</b>: ise banana mehenga hai (apni stack memory, OS scheduling). Aap <code>Start()</code> aur <code>Join()</code> call karte ho; koi return value nahi, aur us par unhandled exception aaye to process crash ho jaata hai.</li>\n<li><b>Task</b>: ek operation ko represent karta hai. CPU kaam <b>thread-pool</b> ke threads par chalta hai jo reuse hote hain; I/O task intezaar ke dauraan <b>koi thread use nahi</b> karta. Yeh <code>Task&lt;T&gt;</code> results, <code>await</code> ke zariye exceptions, <code>CancellationToken</code> support, aur <code>WhenAll</code>/<code>WhenAny</code> se composition deta hai.</li>\n<li><b>Thread pool</b>: worker threads ka saajha set. Yeh naye threads dheere-dheere jodta hai, isliye pool threads ko block karne se (<code>.Result</code>, <code>Thread.Sleep</code>) <b>thread-pool starvation</b> hoti hai.</li>\n<li><b>Raw Thread kab ab bhi theek hai</b>: ek dedicated long-running loop, ya khaas zarooratein jaise COM/UI ke liye STA thread. Long-running kaam ke liye Task wala option hai <code>Task.Factory.StartNew(..., TaskCreationOptions.LongRunning)</code>.</li>\n</ul>\n<p>Follow-up: \"<code>Task.Run</code> vs <code>Task.Factory.StartNew</code>?\" — <code>Task.Run</code> aasaan aur safe default hai. <code>StartNew</code> mein zyada options hain par jaal bhi: <code>async</code> lambda ke saath yeh <code>Task&lt;Task&gt;</code> return karta hai, aur by default current scheduler use karta hai.</p>\n<p>Follow-up: \"<code>Task.Wait()</code> vs <code>await</code>?\" — <code>Wait()</code> thread ko block karta hai aur exceptions ko <code>AggregateException</code> mein lapet-ta hai; <code>await</code> thread free karta hai aur original exception dobara throw karta hai.</p>"
      }
    },
    {
      id: "configureawait-false",
      depth: "short",
      q: "What does ConfigureAwait(false) do, and when should you use it?",
      answer: "It tells await not to resume on the captured SynchronizationContext. Use it in library code. ASP.NET Core has no SynchronizationContext, so in its app code it makes little difference.",
      meaning: {
        hi: "यह await को कहता है कि captured SynchronizationContext पर वापस मत आओ। इसे library code में use करो। ASP.NET Core में SynchronizationContext नहीं है, इसलिए उसके app code में इससे ख़ास फ़र्क नहीं पड़ता।",
        hg: "Yeh await ko kehta hai ki captured SynchronizationContext par wapas mat aao. Ise library code mein use karo. ASP.NET Core mein SynchronizationContext nahi hai, isliye uske app code mein isse khaas farq nahi padta."
      },
      explain: {
        en: "<ul>\n<li>By default, <code>await</code> captures the current <code>SynchronizationContext</code> (or a non-default <code>TaskScheduler</code>) and resumes there. In WPF/WinForms that is the <b>UI thread</b> — needed to update controls.</li>\n<li>With <code>ConfigureAwait(false)</code> the continuation runs on a thread-pool thread instead. Benefits in <b>libraries</b>: no deadlock if a UI caller blocks with <code>.Result</code>, and no extra jump back to the UI thread.</li>\n<li>It affects <b>only that one await</b>. If the task was already complete, execution simply continues on the same thread — so a library should use it on <b>every</b> await, not just the first.</li>\n<li>After <code>ConfigureAwait(false)</code> in UI code, you cannot touch UI controls — so do not use it in UI event handlers or view models that update the screen.</li>\n<li>.NET 8 added <code>ConfigureAwait(ConfigureAwaitOptions...)</code>, e.g. <code>SuppressThrowing</code> (non-generic <code>Task</code> only) to await completion without throwing.</li>\n</ul>\n<p>Follow-up: \"Is <code>ConfigureAwait(false)</code> the fix for a deadlock?\" — Only a partial defence: it works only if <b>every</b> await down the chain uses it. The real fix is to stop blocking — async all the way.</p>\n<p><b>TL angle:</b> agree on a team rule — e.g. \"required in shared libraries (enforce with analyzer CA2007), optional in ASP.NET Core app code\" — so reviews do not argue about it every time.</p>",
        hi: "<ul>\n<li>By default, <code>await</code> current <code>SynchronizationContext</code> (या कोई non-default <code>TaskScheduler</code>) capture करता है और वहीं वापस आता है। WPF/WinForms में यह <b>UI thread</b> है — controls update करने के लिए ज़रूरी।</li>\n<li><code>ConfigureAwait(false)</code> के साथ continuation उसकी जगह thread-pool thread पर चलता है। <b>Libraries</b> में फ़ायदे: अगर UI caller <code>.Result</code> से block करे तो deadlock नहीं, और UI thread पर वापस जाने का extra चक्कर नहीं।</li>\n<li>यह <b>सिर्फ़ उसी एक await</b> पर असर करता है। अगर task पहले से complete था, तो code उसी thread पर आगे चलता रहता है — इसलिए library में इसे सिर्फ़ पहले नहीं, <b>हर</b> await पर लगाना चाहिए।</li>\n<li>UI code में <code>ConfigureAwait(false)</code> के बाद आप UI controls नहीं छू सकते — इसलिए screen update करने वाले UI event handlers या view models में इसे use मत करो।</li>\n<li>.NET 8 में <code>ConfigureAwait(ConfigureAwaitOptions...)</code> आया, जैसे <code>SuppressThrowing</code> (सिर्फ़ non-generic <code>Task</code> पर) — बिना throw किए completion का इंतज़ार करने के लिए।</li>\n</ul>\n<p>Follow-up: \"क्या <code>ConfigureAwait(false)</code> deadlock का इलाज है?\" — सिर्फ़ आधा बचाव: यह तभी काम करता है जब chain में नीचे तक <b>हर</b> await इसे use करे। असली इलाज है block करना बंद करो — async all the way।</p>\n<p><b>TL angle:</b> team का एक rule तय करो — जैसे \"shared libraries में ज़रूरी (analyzer CA2007 से enforce), ASP.NET Core app code में optional\" — ताकि हर review में इस पर बहस न हो।</p>",
        hg: "<ul>\n<li>By default, <code>await</code> current <code>SynchronizationContext</code> (ya koi non-default <code>TaskScheduler</code>) capture karta hai aur wahin wapas aata hai. WPF/WinForms mein yeh <b>UI thread</b> hai — controls update karne ke liye zaroori.</li>\n<li><code>ConfigureAwait(false)</code> ke saath continuation uski jagah thread-pool thread par chalta hai. <b>Libraries</b> mein fayde: agar UI caller <code>.Result</code> se block kare to deadlock nahi, aur UI thread par wapas jaane ka extra chakkar nahi.</li>\n<li>Yeh <b>sirf usi ek await</b> par asar karta hai. Agar task pehle se complete tha, to code usi thread par aage chalta rehta hai — isliye library mein ise sirf pehle nahi, <b>har</b> await par lagana chahiye.</li>\n<li>UI code mein <code>ConfigureAwait(false)</code> ke baad aap UI controls nahi chhoo sakte — isliye screen update karne wale UI event handlers ya view models mein ise use mat karo.</li>\n<li>.NET 8 mein <code>ConfigureAwait(ConfigureAwaitOptions...)</code> aaya, jaise <code>SuppressThrowing</code> (sirf non-generic <code>Task</code> par) — bina throw kiye completion ka intezaar karne ke liye.</li>\n</ul>\n<p>Follow-up: \"Kya <code>ConfigureAwait(false)</code> deadlock ka ilaaj hai?\" — Sirf aadha bachaav: yeh tabhi kaam karta hai jab chain mein neeche tak <b>har</b> await ise use kare. Asli ilaaj hai block karna band karo — async all the way.</p>\n<p><b>TL angle:</b> team ka ek rule tay karo — jaise \"shared libraries mein zaroori (analyzer CA2007 se enforce), ASP.NET Core app code mein optional\" — taaki har review mein is par bahas na ho.</p>"
      }
    },
    {
      id: "async-void",
      depth: "short",
      q: "Why should you avoid async void?",
      answer: "The caller cannot await it or catch its exceptions, and an unhandled exception can crash the process. Use async void only for event handlers; everywhere else return Task.",
      meaning: {
        hi: "Caller इसे await नहीं कर सकता, न इसके exceptions पकड़ सकता है, और unhandled exception process को crash कर सकता है। async void सिर्फ़ event handlers के लिए use करो; बाकी हर जगह Task return करो।",
        hg: "Caller ise await nahi kar sakta, na iske exceptions pakad sakta hai, aur unhandled exception process ko crash kar sakta hai. async void sirf event handlers ke liye use karo; baaki har jagah Task return karo."
      },
      explain: {
        en: "<ul>\n<li>An <code>async Task</code> method stores its exception in the returned task, so the caller's <code>await</code> or <code>try/catch</code> sees it. An <code>async void</code> method has no task — its exception is raised on the <code>SynchronizationContext</code> that was active when it started; with none (ASP.NET Core, console, thread pool) the <b>process crashes</b>.</li>\n<li>The caller cannot know <b>when it finishes</b> — e.g. a unit test ends before the work does, or a <code>DbContext</code> is disposed while the method is still using it.</li>\n<li><b>Hidden async void</b>: an <code>async</code> lambda passed where an <code>Action</code> is expected — <code>list.ForEach(async x =&gt; await SaveAsync(x))</code>, timer callbacks, some event-style APIs. Use a normal <code>foreach</code> with <code>await</code> instead.</li>\n<li>Event handlers (<code>button.Click += async (s, e) =&gt; ...</code>) must be <code>void</code> by signature — that is the accepted exception. Put a <code>try/catch</code> around the whole body.</li>\n</ul>\n<p>Follow-up: \"How do you do fire-and-forget safely?\" — In ASP.NET Core, enqueue the work to a <code>BackgroundService</code> (e.g. via <code>Channel&lt;T&gt;</code>) or a job system; do not use <code>async void</code>.</p>",
        hi: "<ul>\n<li><code>async Task</code> method अपना exception return हुए task में store करता है, इसलिए caller का <code>await</code> या <code>try/catch</code> उसे देख लेता है। <code>async void</code> method का कोई task नहीं होता — उसका exception उस <code>SynchronizationContext</code> पर raise होता है जो उसके शुरू होते समय active था; अगर कोई नहीं (ASP.NET Core, console, thread pool), तो <b>process crash हो जाता है</b>।</li>\n<li>Caller को पता नहीं चलता कि यह <b>कब ख़त्म होगा</b> — जैसे unit test काम ख़त्म होने से पहले ही ख़त्म हो जाता है, या method के use करते-करते <code>DbContext</code> dispose हो जाता है।</li>\n<li><b>छुपा हुआ async void</b>: वहाँ दिया गया <code>async</code> lambda जहाँ <code>Action</code> चाहिए — <code>list.ForEach(async x =&gt; await SaveAsync(x))</code>, timer callbacks, कुछ event-style APIs। इसकी जगह <code>await</code> के साथ normal <code>foreach</code> use करो।</li>\n<li>Event handlers (<code>button.Click += async (s, e) =&gt; ...</code>) signature से ही <code>void</code> होने चाहिए — यही मान्य exception है। पूरी body के चारों ओर <code>try/catch</code> लगाओ।</li>\n</ul>\n<p>Follow-up: \"Fire-and-forget safely कैसे करोगे?\" — ASP.NET Core में काम को <code>BackgroundService</code> की queue में डालो (जैसे <code>Channel&lt;T&gt;</code> से) या किसी job system में; <code>async void</code> use मत करो।</p>",
        hg: "<ul>\n<li><code>async Task</code> method apna exception return hue task mein store karta hai, isliye caller ka <code>await</code> ya <code>try/catch</code> use dekh leta hai. <code>async void</code> method ka koi task nahi hota — uska exception us <code>SynchronizationContext</code> par raise hota hai jo uske shuru hote samay active tha; agar koi nahi (ASP.NET Core, console, thread pool), to <b>process crash ho jaata hai</b>.</li>\n<li>Caller ko pata nahi chalta ki yeh <b>kab khatam hoga</b> — jaise unit test kaam khatam hone se pehle hi khatam ho jaata hai, ya method ke use karte-karte <code>DbContext</code> dispose ho jaata hai.</li>\n<li><b>Chhupa hua async void</b>: wahan diya gaya <code>async</code> lambda jahan <code>Action</code> chahiye — <code>list.ForEach(async x =&gt; await SaveAsync(x))</code>, timer callbacks, kuch event-style APIs. Iski jagah <code>await</code> ke saath normal <code>foreach</code> use karo.</li>\n<li>Event handlers (<code>button.Click += async (s, e) =&gt; ...</code>) signature se hi <code>void</code> hone chahiye — yahi maanya exception hai. Poori body ke chaaron or <code>try/catch</code> lagao.</li>\n</ul>\n<p>Follow-up: \"Fire-and-forget safely kaise karoge?\" — ASP.NET Core mein kaam ko <code>BackgroundService</code> ki queue mein daalo (jaise <code>Channel&lt;T&gt;</code> se) ya kisi job system mein; <code>async void</code> use mat karo.</p>"
      }
    },
    {
      id: "throw-vs-throw-ex",
      depth: "short",
      q: "What is the difference between throw and throw ex?",
      answer: "throw; rethrows the same exception and keeps the original stack trace. throw ex; resets the stack trace to the current line, so you lose where the error really happened.",
      meaning: {
        hi: "throw; उसी exception को दोबारा throw करता है और original stack trace बचाकर रखता है। throw ex; stack trace को current line से reset कर देता है, तो पता नहीं चलता कि error असल में कहाँ हुआ।",
        hg: "throw; usi exception ko dobara throw karta hai aur original stack trace bachakar rakhta hai. throw ex; stack trace ko current line se reset kar deta hai, to pata nahi chalta ki error asal mein kahan hua."
      },
      explain: {
        en: "<ul>\n<li>The stack trace is the most useful part of a production error log. With <code>throw ex;</code> it starts at your <code>catch</code> block, and the real failing line deeper down is gone. The analyzer warns with <b>CA2200</b>.</li>\n<li>To <b>add context</b>, wrap instead: <code>throw new PaymentException(\"Refund failed for order 42\", ex);</code> — the original is kept in <code>InnerException</code>, with its own stack trace.</li>\n<li>To rethrow <b>later</b> or from another place (e.g. after collecting errors), use <code>ExceptionDispatchInfo.Capture(ex).Throw();</code> — it keeps the original stack.</li>\n<li>If you catch only to log and rethrow, ask whether you need the catch at all — a global handler can log it once.</li>\n</ul>\n<p>Follow-up: \"What is an exception filter?\" — <code>catch (SqlException ex) when (ex.Number == 1205)</code>: the catch runs only when the condition is true (here: a deadlock victim, worth a retry); otherwise the exception continues untouched.</p>",
        hi: "<ul>\n<li>Production error log का सबसे काम का हिस्सा stack trace है। <code>throw ex;</code> से वो आपके <code>catch</code> block से शुरू होता है, और नीचे की असली fail होने वाली line ग़ायब हो जाती है। Analyzer <b>CA2200</b> से warning देता है।</li>\n<li><b>Context जोड़ना हो</b> तो wrap करो: <code>throw new PaymentException(\"Refund failed for order 42\", ex);</code> — original अपने stack trace के साथ <code>InnerException</code> में रहता है।</li>\n<li><b>बाद में</b> या किसी और जगह से rethrow करना हो (जैसे errors जमा करने के बाद), तो <code>ExceptionDispatchInfo.Capture(ex).Throw();</code> use करो — यह original stack बचाकर रखता है।</li>\n<li>अगर आप सिर्फ़ log करके rethrow करने के लिए catch कर रहे हो, तो सोचो कि catch की ज़रूरत भी है या नहीं — global handler उसे एक बार log कर सकता है।</li>\n</ul>\n<p>Follow-up: \"Exception filter क्या है?\" — <code>catch (SqlException ex) when (ex.Number == 1205)</code>: catch सिर्फ़ तब चलता है जब condition true हो (यहाँ: deadlock victim, जिसे retry करना ठीक है); वरना exception बिना छेड़े आगे बढ़ता है।</p>",
        hg: "<ul>\n<li>Production error log ka sabse kaam ka hissa stack trace hai. <code>throw ex;</code> se woh aapke <code>catch</code> block se shuru hota hai, aur neeche ki asli fail hone wali line gaayab ho jaati hai. Analyzer <b>CA2200</b> se warning deta hai.</li>\n<li><b>Context jodna ho</b> to wrap karo: <code>throw new PaymentException(\"Refund failed for order 42\", ex);</code> — original apne stack trace ke saath <code>InnerException</code> mein rehta hai.</li>\n<li><b>Baad mein</b> ya kisi aur jagah se rethrow karna ho (jaise errors jama karne ke baad), to <code>ExceptionDispatchInfo.Capture(ex).Throw();</code> use karo — yeh original stack bachakar rakhta hai.</li>\n<li>Agar aap sirf log karke rethrow karne ke liye catch kar rahe ho, to socho ki catch ki zaroorat bhi hai ya nahi — global handler use ek baar log kar sakta hai.</li>\n</ul>\n<p>Follow-up: \"Exception filter kya hai?\" — <code>catch (SqlException ex) when (ex.Number == 1205)</code>: catch sirf tab chalta hai jab condition true ho (yahan: deadlock victim, jise retry karna theek hai); warna exception bina chhede aage badhta hai.</p>"
      }
    },
    {
      id: "dispose-using",
      depth: "short",
      q: "What is IDisposable, and why do we use the using statement?",
      answer: "IDisposable releases unmanaged or expensive resources, like DB connections and file handles, at a known time. using calls Dispose automatically at the end of the scope, even when an exception is thrown.",
      meaning: {
        hi: "IDisposable unmanaged या महँगे resources, जैसे DB connections और file handles, को तय समय पर छोड़ता है। using scope के end पर अपने-आप Dispose call करता है, exception आने पर भी।",
        hg: "IDisposable unmanaged ya mehenge resources, jaise DB connections aur file handles, ko tay samay par chhodta hai. using scope ke end par apne-aap Dispose call karta hai, exception aane par bhi."
      },
      explain: {
        en: "<ul>\n<li>The GC frees <b>memory</b> only, at a time it chooses. It does not call <code>Dispose</code>. A connection or file handle that is not disposed stays open until (maybe) a finalizer runs — meanwhile the connection pool can run out.</li>\n<li><code>using (var x = ...) { }</code> compiles to <code>try { } finally { x?.Dispose(); }</code>. The C# 8 <b>using declaration</b> <code>using var x = ...;</code> disposes at the end of the enclosing scope, in reverse order of declaration. <code>await using</code> calls <code>DisposeAsync</code>.</li>\n<li><b>Who disposes?</b> The <b>owner</b> — whoever created it. Objects created by the DI container are disposed by the container (scoped ones at the end of the request), so do not dispose injected services yourself.</li>\n<li><b><code>HttpClient</code> trap</b>: creating and disposing one per request can exhaust sockets; use <code>IHttpClientFactory</code> or a long-lived shared instance.</li>\n</ul>\n<p>Follow-up: \"Is <code>Dispose</code> the same as freeing memory?\" — No. After <code>Dispose</code> the object still exists in memory until the GC collects it; <code>Dispose</code> only releases what it holds (handles, connections).</p>",
        hi: "<ul>\n<li>GC सिर्फ़ <b>memory</b> free करता है, और वो भी अपने चुने समय पर। वो <code>Dispose</code> call नहीं करता। जो connection या file handle dispose नहीं हुआ, वो तब तक खुला रहता है जब तक (शायद) कोई finalizer न चले — तब तक connection pool ख़त्म हो सकता है।</li>\n<li><code>using (var x = ...) { }</code> compile होकर <code>try { } finally { x?.Dispose(); }</code> बन जाता है। C# 8 का <b>using declaration</b> <code>using var x = ...;</code> enclosing scope के end पर, declaration के उल्टे order में dispose करता है। <code>await using</code> <code>DisposeAsync</code> call करता है।</li>\n<li><b>Dispose कौन करेगा?</b> <b>Owner</b> — जिसने उसे बनाया। DI container के बनाए objects को container dispose करता है (scoped वाले request के end पर), इसलिए inject हुई services को ख़ुद dispose मत करो।</li>\n<li><b><code>HttpClient</code> का जाल</b>: हर request पर एक बनाना और dispose करना sockets ख़त्म कर सकता है; <code>IHttpClientFactory</code> या लंबे समय तक चलने वाला एक shared instance use करो।</li>\n</ul>\n<p>Follow-up: \"क्या <code>Dispose</code> memory free करने जैसा ही है?\" — नहीं। <code>Dispose</code> के बाद भी object memory में रहता है जब तक GC उसे collect न करे; <code>Dispose</code> सिर्फ़ वो छोड़ता है जो उसने पकड़ा हुआ है (handles, connections)।</p>",
        hg: "<ul>\n<li>GC sirf <b>memory</b> free karta hai, aur woh bhi apne chune samay par. Woh <code>Dispose</code> call nahi karta. Jo connection ya file handle dispose nahi hua, woh tab tak khula rehta hai jab tak (shayad) koi finalizer na chale — tab tak connection pool khatam ho sakta hai.</li>\n<li><code>using (var x = ...) { }</code> compile hokar <code>try { } finally { x?.Dispose(); }</code> ban jaata hai. C# 8 ka <b>using declaration</b> <code>using var x = ...;</code> enclosing scope ke end par, declaration ke ulte order mein dispose karta hai. <code>await using</code> <code>DisposeAsync</code> call karta hai.</li>\n<li><b>Dispose kaun karega?</b> <b>Owner</b> — jisne use banaya. DI container ke banaye objects ko container dispose karta hai (scoped wale request ke end par), isliye inject hui services ko khud dispose mat karo.</li>\n<li><b><code>HttpClient</code> ka jaal</b>: har request par ek banana aur dispose karna sockets khatam kar sakta hai; <code>IHttpClientFactory</code> ya lambe samay tak chalne wala ek shared instance use karo.</li>\n</ul>\n<p>Follow-up: \"Kya <code>Dispose</code> memory free karne jaisa hi hai?\" — Nahi. <code>Dispose</code> ke baad bhi object memory mein rehta hai jab tak GC use collect na kare; <code>Dispose</code> sirf woh chhodta hai jo usne pakda hua hai (handles, connections).</p>"
      }
    },
    {
      id: "gc-generations",
      depth: "short",
      q: "How does the .NET garbage collector work? What are generations?",
      answer: "The GC frees objects that are no longer reachable from roots and compacts memory. It uses generations 0, 1 and 2 because most objects die young, so frequent cheap Gen 0 collections clean most garbage.",
      meaning: {
        hi: "GC उन objects को free करता है जो roots से अब reachable नहीं हैं, और memory compact करता है। यह generations 0, 1 और 2 use करता है क्योंकि ज़्यादातर objects जल्दी मर जाते हैं, इसलिए बार-बार होने वाले सस्ते Gen 0 collections ज़्यादातर कचरा साफ़ कर देते हैं।",
        hg: "GC un objects ko free karta hai jo roots se ab reachable nahi hain, aur memory compact karta hai. Yeh generations 0, 1 aur 2 use karta hai kyunki zyadatar objects jaldi mar jaate hain, isliye baar-baar hone wale saste Gen 0 collections zyadatar kachra saaf kar dete hain."
      },
      explain: {
        en: "<ul>\n<li><b>Mark</b>: starting from roots (static fields, locals on thread stacks, CPU registers, GC handles), the GC marks every object it can reach. <b>Sweep/compact</b>: unreachable objects are freed and survivors are moved together, so new allocations are just \"bump a pointer\" — very fast.</li>\n<li><b>Promotion</b>: an object that survives a Gen 0 collection moves to Gen 1; surviving Gen 1 moves it to Gen 2. A Gen 2 (<b>full</b>) collection checks everything and is the most expensive.</li>\n<li><b>LOH</b>: objects of 85,000 bytes or more go to the Large Object Heap, collected with Gen 2 and not compacted by default.</li>\n<li>.NET does not use reference counting, so <b>circular references are not a problem</b> — unreachable cycles are collected too.</li>\n<li><b>Background GC</b> (on by default) does most Gen 2 work while your threads run; <b>Server GC</b> is the default for ASP.NET Core.</li>\n</ul>\n<p>Follow-up: \"What triggers a GC?\" — mainly an allocation that exceeds the Gen 0 budget; also low memory on the machine, or an explicit <code>GC.Collect()</code> (avoid it).</p>\n<p><b>TL angle:</b> performance work = <b>fewer allocations in hot paths</b> and fewer objects surviving to Gen 2. Watch <code>dotnet-counters</code> (time in GC, Gen 2 count, heap size) before tuning anything.</p>",
        hi: "<ul>\n<li><b>Mark</b>: roots (static fields, thread stacks पर locals, CPU registers, GC handles) से शुरू करके GC हर उस object को mark करता है जहाँ तक पहुँच सकता है। <b>Sweep/compact</b>: जिन objects तक पहुँच नहीं, वो free होते हैं और बचे हुए पास-पास खिसका दिए जाते हैं, इसलिए नया allocation बस \"pointer आगे बढ़ाना\" है — बहुत तेज़।</li>\n<li><b>Promotion</b>: जो object Gen 0 collection से बच जाता है वो Gen 1 में जाता है; Gen 1 से बचने पर Gen 2 में। Gen 2 (<b>full</b>) collection सब कुछ check करता है और सबसे महँगा है।</li>\n<li><b>LOH</b>: 85,000 bytes या उससे बड़े objects Large Object Heap में जाते हैं, जो Gen 2 के साथ collect होता है और by default compact नहीं होता।</li>\n<li>.NET reference counting use नहीं करता, इसलिए <b>circular references कोई problem नहीं</b> — unreachable cycles भी collect हो जाते हैं।</li>\n<li><b>Background GC</b> (by default on) Gen 2 का ज़्यादातर काम आपके threads के चलते-चलते करता है; ASP.NET Core का default <b>Server GC</b> है।</li>\n</ul>\n<p>Follow-up: \"GC trigger किससे होता है?\" — मुख्य रूप से ऐसे allocation से जो Gen 0 budget पार कर दे; machine पर memory कम होने से भी, या explicit <code>GC.Collect()</code> से (इससे बचो)।</p>\n<p><b>TL angle:</b> performance का काम = <b>hot paths में कम allocations</b> और Gen 2 तक कम objects पहुँचना। कुछ भी tune करने से पहले <code>dotnet-counters</code> देखो (GC में लगा time, Gen 2 count, heap size)।</p>",
        hg: "<ul>\n<li><b>Mark</b>: roots (static fields, thread stacks par locals, CPU registers, GC handles) se shuru karke GC har us object ko mark karta hai jahan tak pahunch sakta hai. <b>Sweep/compact</b>: jin objects tak pahunch nahi, woh free hote hain aur bache hue paas-paas khiska diye jaate hain, isliye naya allocation bas \"pointer aage badhana\" hai — bahut tez.</li>\n<li><b>Promotion</b>: jo object Gen 0 collection se bach jaata hai woh Gen 1 mein jaata hai; Gen 1 se bachne par Gen 2 mein. Gen 2 (<b>full</b>) collection sab kuch check karta hai aur sabse mehenga hai.</li>\n<li><b>LOH</b>: 85,000 bytes ya usse bade objects Large Object Heap mein jaate hain, jo Gen 2 ke saath collect hota hai aur by default compact nahi hota.</li>\n<li>.NET reference counting use nahi karta, isliye <b>circular references koi problem nahi</b> — unreachable cycles bhi collect ho jaate hain.</li>\n<li><b>Background GC</b> (by default on) Gen 2 ka zyadatar kaam aapke threads ke chalte-chalte karta hai; ASP.NET Core ka default <b>Server GC</b> hai.</li>\n</ul>\n<p>Follow-up: \"GC trigger kisse hota hai?\" — mukhya roop se aise allocation se jo Gen 0 budget paar kar de; machine par memory kam hone se bhi, ya explicit <code>GC.Collect()</code> se (isse bacho).</p>\n<p><b>TL angle:</b> performance ka kaam = <b>hot paths mein kam allocations</b> aur Gen 2 tak kam objects pahunchna. Kuch bhi tune karne se pehle <code>dotnet-counters</code> dekho (GC mein laga time, Gen 2 count, heap size).</p>"
      }
    },
    {
      id: "record-vs-class",
      depth: "short",
      q: "What is a record in C#, and how is it different from a class?",
      answer: "A record is a type for data: the compiler generates value-based equality, a readable ToString and with-expressions for changed copies. A class compares by reference by default and gets none of that generated.",
      meaning: {
        hi: "Record data के लिए type है: compiler value-based equality, पढ़ने लायक ToString और बदली हुई copies के लिए with-expressions generate करता है। Class by default reference से compare होती है और उसे यह सब generate होकर नहीं मिलता।",
        hg: "Record data ke liye type hai: compiler value-based equality, padhne laayak ToString aur badli hui copies ke liye with-expressions generate karta hai. Class by default reference se compare hoti hai aur use yeh sab generate hokar nahi milta."
      },
      explain: {
        en: "<ul>\n<li><code>public record Money(decimal Amount, string Currency);</code> — one line gives a constructor, init-only properties, <code>Equals</code>/<code>GetHashCode</code>/<code>==</code> by value, <code>ToString()</code>, <code>Deconstruct</code>, and support for <code>with</code>.</li>\n<li><code>record</code> = <code>record class</code> (reference type, C# 9). <code>record struct</code> (C# 10) is a value type; use <code>readonly record struct</code> for immutability, because positional record struct properties are settable.</li>\n<li>Equality is <b>shallow</b> (a <code>List</code> property compares by reference) and includes the <b>runtime type</b>.</li>\n<li>Records <b>can</b> have methods and mutable properties, but the intent is immutable data.</li>\n</ul>\n<p>Follow-up: \"Would you use records for EF Core entities?\" — Usually no. Entities have identity (an Id) and change over time; value equality and a changing hash code fight with change tracking. Records fit DTOs, messages and value objects.</p>\n<p>Follow-up: \"Record vs a class with a primary constructor (C# 12)?\" — A primary constructor only adds constructor parameters; no generated equality, <code>ToString</code> or <code>with</code>.</p>",
        hi: "<ul>\n<li><code>public record Money(decimal Amount, string Currency);</code> — एक line से constructor, init-only properties, value से <code>Equals</code>/<code>GetHashCode</code>/<code>==</code>, <code>ToString()</code>, <code>Deconstruct</code>, और <code>with</code> का support मिल जाता है।</li>\n<li><code>record</code> = <code>record class</code> (reference type, C# 9)। <code>record struct</code> (C# 10) value type है; immutability के लिए <code>readonly record struct</code> use करो, क्योंकि positional record struct की properties set हो सकती हैं।</li>\n<li>Equality <b>shallow</b> है (<code>List</code> property reference से compare होती है) और इसमें <b>runtime type</b> भी शामिल है।</li>\n<li>Records में methods और mutable properties <b>हो सकती</b> हैं, पर इरादा immutable data का है।</li>\n</ul>\n<p>Follow-up: \"क्या EF Core entities के लिए records use करोगे?\" — आमतौर पर नहीं। Entities की पहचान (Id) होती है और वो समय के साथ बदलती हैं; value equality और बदलता hash code change tracking से टकराते हैं। Records DTOs, messages और value objects के लिए ठीक हैं।</p>\n<p>Follow-up: \"Record बनाम primary constructor वाली class (C# 12)?\" — Primary constructor सिर्फ़ constructor parameters जोड़ता है; न generated equality, न <code>ToString</code>, न <code>with</code>।</p>",
        hg: "<ul>\n<li><code>public record Money(decimal Amount, string Currency);</code> — ek line se constructor, init-only properties, value se <code>Equals</code>/<code>GetHashCode</code>/<code>==</code>, <code>ToString()</code>, <code>Deconstruct</code>, aur <code>with</code> ka support mil jaata hai.</li>\n<li><code>record</code> = <code>record class</code> (reference type, C# 9). <code>record struct</code> (C# 10) value type hai; immutability ke liye <code>readonly record struct</code> use karo, kyunki positional record struct ki properties set ho sakti hain.</li>\n<li>Equality <b>shallow</b> hai (<code>List</code> property reference se compare hoti hai) aur ismein <b>runtime type</b> bhi shaamil hai.</li>\n<li>Records mein methods aur mutable properties <b>ho sakti</b> hain, par iraada immutable data ka hai.</li>\n</ul>\n<p>Follow-up: \"Kya EF Core entities ke liye records use karoge?\" — Aamtaur par nahi. Entities ki pehchaan (Id) hoti hai aur woh samay ke saath badalti hain; value equality aur badalta hash code change tracking se takraate hain. Records DTOs, messages aur value objects ke liye theek hain.</p>\n<p>Follow-up: \"Record vs primary constructor wali class (C# 12)?\" — Primary constructor sirf constructor parameters jodta hai; na generated equality, na <code>ToString</code>, na <code>with</code>.</p>"
      }
    },
    {
      id: "sync-over-async-deadlock",
      depth: "detailed",
      q: "Why can calling .Result or .Wait() on a Task cause a deadlock?",
      answer: "If the SynchronizationContext lets only one thread run at a time (WPF's UI thread, classic ASP.NET's per-request context), .Result blocks that context while the awaited code needs it to resume, so both wait forever.",
      meaning: {
        hi: "अगर SynchronizationContext एक समय पर एक ही thread चलने देता है (WPF का UI thread, पुराने ASP.NET का per-request context), तो .Result उस context को block कर देता है, जबकि await किए गए code को resume होने के लिए वही context चाहिए — दोनों हमेशा इंतज़ार करते रहते हैं।",
        hg: "Agar SynchronizationContext ek samay par ek hi thread chalne deta hai (WPF ka UI thread, purane ASP.NET ka per-request context), to .Result us context ko block kar deta hai, jabki await kiye gaye code ko resume hone ke liye wahi context chahiye — dono hamesha intezaar karte rehte hain."
      },
      explain: {
        en: "<p>Step by step, in a WPF button click:</p>\n<ul>\n<li>The UI thread calls <code>GetDataAsync().Result</code>. Inside, <code>await httpClient.GetStringAsync(...)</code> captures the UI context and returns an incomplete task.</li>\n<li><code>.Result</code> <b>blocks the UI thread</b> until that task completes.</li>\n<li>The HTTP call finishes; the continuation must run <b>on the UI thread</b> — which is blocked. The task never completes, so <code>.Result</code> never returns. Deadlock.</li>\n</ul>\n<ul>\n<li><b>ASP.NET Core</b> has no SynchronizationContext, so this exact deadlock does not happen — but each blocked request holds a pool thread, and under load you get <b>thread-pool starvation</b>.</li>\n<li><code>.Result</code>/<code>.Wait()</code> also wrap errors in <code>AggregateException</code>. <code>GetAwaiter().GetResult()</code> throws the original exception but <b>still blocks</b>.</li>\n<li><b>Fixes</b>: async all the way up (make the event handler or controller action <code>async</code>); in libraries, <code>ConfigureAwait(false)</code> on every await as a defence.</li>\n</ul>\n<p>Follow-up: \"How would you detect thread-pool starvation in production?\" — rising latency with low CPU, <code>dotnet-counters</code> showing a growing ThreadPool queue length and thread count, and a memory dump with many threads blocked in <code>Task.Wait</code>/<code>Result</code>.</p>",
        hi: "<p>Step by step, WPF के एक button click में:</p>\n<ul>\n<li>UI thread <code>GetDataAsync().Result</code> call करता है। अंदर <code>await httpClient.GetStringAsync(...)</code> UI context capture करता है और एक अधूरा task return करता है।</li>\n<li><code>.Result</code> उस task के पूरा होने तक <b>UI thread को block कर देता है</b>।</li>\n<li>HTTP call ख़त्म होती है; continuation को <b>UI thread पर</b> चलना है — जो block है। Task कभी पूरा नहीं होता, इसलिए <code>.Result</code> कभी return नहीं करता। Deadlock।</li>\n</ul>\n<ul>\n<li><b>ASP.NET Core</b> में SynchronizationContext नहीं है, इसलिए यह वाला deadlock नहीं होता — पर हर blocked request एक pool thread पकड़े रहती है, और load पर <b>thread-pool starvation</b> हो जाती है।</li>\n<li><code>.Result</code>/<code>.Wait()</code> errors को <code>AggregateException</code> में भी लपेट देते हैं। <code>GetAwaiter().GetResult()</code> original exception throw करता है पर <b>block फिर भी करता है</b>।</li>\n<li><b>इलाज</b>: ऊपर तक async all the way (event handler या controller action को <code>async</code> बनाओ); libraries में बचाव के लिए हर await पर <code>ConfigureAwait(false)</code>।</li>\n</ul>\n<p>Follow-up: \"Production में thread-pool starvation कैसे पकड़ोगे?\" — कम CPU के साथ बढ़ती latency, <code>dotnet-counters</code> में बढ़ती ThreadPool queue length और thread count, और memory dump में <code>Task.Wait</code>/<code>Result</code> पर blocked बहुत सारे threads।</p>",
        hg: "<p>Step by step, WPF ke ek button click mein:</p>\n<ul>\n<li>UI thread <code>GetDataAsync().Result</code> call karta hai. Andar <code>await httpClient.GetStringAsync(...)</code> UI context capture karta hai aur ek adhoora task return karta hai.</li>\n<li><code>.Result</code> us task ke poora hone tak <b>UI thread ko block kar deta hai</b>.</li>\n<li>HTTP call khatam hoti hai; continuation ko <b>UI thread par</b> chalna hai — jo block hai. Task kabhi poora nahi hota, isliye <code>.Result</code> kabhi return nahi karta. Deadlock.</li>\n</ul>\n<ul>\n<li><b>ASP.NET Core</b> mein SynchronizationContext nahi hai, isliye yeh wala deadlock nahi hota — par har blocked request ek pool thread pakde rehti hai, aur load par <b>thread-pool starvation</b> ho jaati hai.</li>\n<li><code>.Result</code>/<code>.Wait()</code> errors ko <code>AggregateException</code> mein bhi lapet dete hain. <code>GetAwaiter().GetResult()</code> original exception throw karta hai par <b>block phir bhi karta hai</b>.</li>\n<li><b>Ilaaj</b>: upar tak async all the way (event handler ya controller action ko <code>async</code> banao); libraries mein bachaav ke liye har await par <code>ConfigureAwait(false)</code>.</li>\n</ul>\n<p>Follow-up: \"Production mein thread-pool starvation kaise pakdoge?\" — kam CPU ke saath badhti latency, <code>dotnet-counters</code> mein badhti ThreadPool queue length aur thread count, aur memory dump mein <code>Task.Wait</code>/<code>Result</code> par blocked bahut saare threads.</p>"
      }
    },
    {
      id: "task-run-aspnetcore",
      depth: "detailed",
      q: "Should you use Task.Run in ASP.NET Core? When is Task.Run the right tool?",
      answer: "Usually not in request code: the request already runs on a thread-pool thread, so Task.Run only adds a hop. Use it for CPU work in UI apps, and a queued BackgroundService for background work.",
      meaning: {
        hi: "Request code में आमतौर पर नहीं: request पहले से thread-pool thread पर चलती है, इसलिए Task.Run बस एक extra hop जोड़ता है। UI apps में CPU काम के लिए इसे use करो, और background काम के लिए queue वाला BackgroundService।",
        hg: "Request code mein aamtaur par nahi: request pehle se thread-pool thread par chalti hai, isliye Task.Run bas ek extra hop jodta hai. UI apps mein CPU kaam ke liye ise use karo, aur background kaam ke liye queue wala BackgroundService."
      },
      explain: {
        en: "<ul>\n<li><code>await Task.Run(() =&gt; CalculateInvoice())</code> in a controller: the request thread goes back to the pool, another pool thread does the same work. Net effect: extra scheduling, <b>no scalability gain</b>.</li>\n<li><b>\"Async over sync\"</b>: wrapping a blocking call (<code>Task.Run(() =&gt; File.ReadAllText(path))</code>) only hides the blocking on another thread. Use real async APIs (<code>File.ReadAllTextAsync</code>, EF Core <code>...Async</code>).</li>\n<li><b>Fire-and-forget</b> (<code>_ = Task.Run(SendEmailAsync)</code>): exceptions go unobserved, scoped services (<code>DbContext</code>) are disposed when the request ends, and work is lost when the app restarts.</li>\n<li><b>Better</b>: a <code>BackgroundService</code> reading from a <code>Channel&lt;T&gt;</code> for in-process work; a durable queue or job system (e.g. a message broker, Hangfire) when the work must survive restarts.</li>\n<li><b>Where <code>Task.Run</code> fits</b>: CPU work in WPF/WinForms/MAUI to keep the UI responsive; console tools doing parallel CPU work; starting a few CPU-bound pieces in parallel when you really have spare cores.</li>\n</ul>\n<p>Follow-up: \"A CPU-heavy report endpoint is slow — what would you do?\" — keep it synchronous inside the request if it is short; if long, accept the request, queue the job, return <b>202 Accepted</b> with a status URL, and process it in a worker.</p>",
        hi: "<ul>\n<li>Controller में <code>await Task.Run(() =&gt; CalculateInvoice())</code>: request thread pool में वापस जाता है, और दूसरा pool thread वही काम करता है। कुल असर: extra scheduling, <b>scalability में कोई फ़ायदा नहीं</b>।</li>\n<li><b>\"Async over sync\"</b>: blocking call को wrap करना (<code>Task.Run(() =&gt; File.ReadAllText(path))</code>) बस blocking को दूसरे thread पर छुपा देता है। असली async APIs use करो (<code>File.ReadAllTextAsync</code>, EF Core <code>...Async</code>)।</li>\n<li><b>Fire-and-forget</b> (<code>_ = Task.Run(SendEmailAsync)</code>): exceptions पर किसी की नज़र नहीं जाती, request ख़त्म होते ही scoped services (<code>DbContext</code>) dispose हो जाती हैं, और app restart होने पर काम खो जाता है।</li>\n<li><b>बेहतर</b>: in-process काम के लिए <code>Channel&lt;T&gt;</code> से पढ़ने वाला <code>BackgroundService</code>; जब काम को restarts के बाद भी बचना हो तो durable queue या job system (जैसे message broker, Hangfire)।</li>\n<li><b><code>Task.Run</code> कहाँ ठीक है</b>: WPF/WinForms/MAUI में UI को responsive रखने के लिए CPU काम; parallel CPU काम करने वाले console tools; जब सच में ख़ाली cores हों तब कुछ CPU-bound हिस्से parallel में शुरू करना।</li>\n</ul>\n<p>Follow-up: \"एक CPU-heavy report endpoint धीमा है — क्या करोगे?\" — छोटा है तो request के अंदर synchronous ही रखो; लंबा है तो request accept करो, job queue करो, status URL के साथ <b>202 Accepted</b> return करो, और worker में process करो।</p>",
        hg: "<ul>\n<li>Controller mein <code>await Task.Run(() =&gt; CalculateInvoice())</code>: request thread pool mein wapas jaata hai, aur doosra pool thread wahi kaam karta hai. Kul asar: extra scheduling, <b>scalability mein koi fayda nahi</b>.</li>\n<li><b>\"Async over sync\"</b>: blocking call ko wrap karna (<code>Task.Run(() =&gt; File.ReadAllText(path))</code>) bas blocking ko doosre thread par chhupa deta hai. Asli async APIs use karo (<code>File.ReadAllTextAsync</code>, EF Core <code>...Async</code>).</li>\n<li><b>Fire-and-forget</b> (<code>_ = Task.Run(SendEmailAsync)</code>): exceptions par kisi ki nazar nahi jaati, request khatam hote hi scoped services (<code>DbContext</code>) dispose ho jaati hain, aur app restart hone par kaam kho jaata hai.</li>\n<li><b>Behtar</b>: in-process kaam ke liye <code>Channel&lt;T&gt;</code> se padhne wala <code>BackgroundService</code>; jab kaam ko restarts ke baad bhi bachna ho to durable queue ya job system (jaise message broker, Hangfire).</li>\n<li><b><code>Task.Run</code> kahan theek hai</b>: WPF/WinForms/MAUI mein UI ko responsive rakhne ke liye CPU kaam; parallel CPU kaam karne wale console tools; jab sach mein khaali cores hon tab kuch CPU-bound hisse parallel mein shuru karna.</li>\n</ul>\n<p>Follow-up: \"Ek CPU-heavy report endpoint dheema hai — kya karoge?\" — chhota hai to request ke andar synchronous hi rakho; lamba hai to request accept karo, job queue karo, status URL ke saath <b>202 Accepted</b> return karo, aur worker mein process karo.</p>"
      }
    },
    {
      id: "whenall-exceptions",
      depth: "detailed",
      q: "What happens when several tasks fail inside Task.WhenAll?",
      answer: "await Task.WhenAll throws only the first exception. All of them are kept in the WhenAll task's Exception property, an AggregateException, so keep a reference to that task if you need every error.",
      meaning: {
        hi: "await Task.WhenAll सिर्फ़ पहला exception throw करता है। सारे exceptions WhenAll वाले task की Exception property (एक AggregateException) में रहते हैं, इसलिए अगर हर error चाहिए तो उस task का reference संभालकर रखो।",
        hg: "await Task.WhenAll sirf pehla exception throw karta hai. Saare exceptions WhenAll wale task ki Exception property (ek AggregateException) mein rehte hain, isliye agar har error chahiye to us task ka reference sambhaalkar rakho."
      },
      explain: {
        en: "<ul>\n<li><code>WhenAll</code> waits for <b>all</b> tasks to finish — even if one fails early — and then completes as faulted with every exception inside an <code>AggregateException</code>.</li>\n<li><code>await</code> unwraps it and rethrows only <code>InnerExceptions[0]</code> — the first in the <b>order you passed the tasks</b>, not necessarily the first in time.</li>\n<li>To log every failure: keep <code>Task all = Task.WhenAll(...)</code>, and in the <code>catch</code> read <code>all.Exception!.InnerExceptions</code>. Or check each task's <code>IsFaulted</code>.</li>\n<li><code>.Wait()</code>/<code>.Result</code> throw the whole <code>AggregateException</code>.</li>\n<li>Need to stop the others when one fails? Pass a shared <code>CancellationTokenSource</code> and cancel it in the failing path. Need results as they arrive? <code>Task.WhenAny</code> in a loop, or <code>Task.WhenEach</code> (.NET 9) with <code>await foreach</code>.</li>\n</ul>\n<p>Follow-up: \"What is an unobserved task exception?\" — a faulted task whose exception nobody awaited or read. Since .NET Framework 4.5 it no longer crashes the process; it raises <code>TaskScheduler.UnobservedTaskException</code> when the task is garbage-collected. The error is still lost — that is why fire-and-forget is dangerous.</p>",
        hi: "<ul>\n<li><code>WhenAll</code> <b>सारे</b> tasks के ख़त्म होने का इंतज़ार करता है — चाहे कोई एक जल्दी fail हो जाए — और फिर faulted होकर complete होता है, जिसमें हर exception एक <code>AggregateException</code> के अंदर होता है।</li>\n<li><code>await</code> उसे खोलकर सिर्फ़ <code>InnerExceptions[0]</code> दोबारा throw करता है — जो <b>आपके दिए tasks के order</b> में पहला है, ज़रूरी नहीं कि समय में पहला हो।</li>\n<li>हर failure log करना हो तो: <code>Task all = Task.WhenAll(...)</code> संभालकर रखो, और <code>catch</code> में <code>all.Exception!.InnerExceptions</code> पढ़ो। या हर task का <code>IsFaulted</code> check करो।</li>\n<li><code>.Wait()</code>/<code>.Result</code> पूरा <code>AggregateException</code> throw करते हैं।</li>\n<li>एक के fail होने पर बाकी रोकने हैं? एक shared <code>CancellationTokenSource</code> pass करो और failing path में उसे cancel करो। Results आते-आते चाहिए? Loop में <code>Task.WhenAny</code>, या <code>await foreach</code> के साथ <code>Task.WhenEach</code> (.NET 9)।</li>\n</ul>\n<p>Follow-up: \"Unobserved task exception क्या है?\" — ऐसा faulted task जिसके exception को किसी ने await नहीं किया या पढ़ा नहीं। .NET Framework 4.5 से यह process crash नहीं करता; task के garbage-collect होने पर <code>TaskScheduler.UnobservedTaskException</code> raise होता है। Error फिर भी खो जाता है — इसीलिए fire-and-forget ख़तरनाक है।</p>",
        hg: "<ul>\n<li><code>WhenAll</code> <b>saare</b> tasks ke khatam hone ka intezaar karta hai — chahe koi ek jaldi fail ho jaaye — aur phir faulted hokar complete hota hai, jismein har exception ek <code>AggregateException</code> ke andar hota hai.</li>\n<li><code>await</code> use kholkar sirf <code>InnerExceptions[0]</code> dobara throw karta hai — jo <b>aapke diye tasks ke order</b> mein pehla hai, zaroori nahi ki samay mein pehla ho.</li>\n<li>Har failure log karna ho to: <code>Task all = Task.WhenAll(...)</code> sambhaalkar rakho, aur <code>catch</code> mein <code>all.Exception!.InnerExceptions</code> padho. Ya har task ka <code>IsFaulted</code> check karo.</li>\n<li><code>.Wait()</code>/<code>.Result</code> poora <code>AggregateException</code> throw karte hain.</li>\n<li>Ek ke fail hone par baaki rokne hain? Ek shared <code>CancellationTokenSource</code> pass karo aur failing path mein use cancel karo. Results aate-aate chahiye? Loop mein <code>Task.WhenAny</code>, ya <code>await foreach</code> ke saath <code>Task.WhenEach</code> (.NET 9).</li>\n</ul>\n<p>Follow-up: \"Unobserved task exception kya hai?\" — aisa faulted task jiske exception ko kisi ne await nahi kiya ya padha nahi. .NET Framework 4.5 se yeh process crash nahi karta; task ke garbage-collect hone par <code>TaskScheduler.UnobservedTaskException</code> raise hota hai. Error phir bhi kho jaata hai — isiliye fire-and-forget khatarnaak hai.</p>"
      },
      code: [
        {
          caption: {
            en: "await rethrows the first exception; WhenAll's Task.Exception keeps all of them",
            hi: "await पहला exception दोबारा throw करता है; WhenAll का Task.Exception सब रखता है",
            hg: "await pehla exception dobara throw karta hai; WhenAll ka Task.Exception sab rakhta hai"
          },
          check: "run",
          expected: "await threw only: Payment service down\nall.Exception holds: Payment service down\nall.Exception holds: Stock service down\nWait() threw AggregateException with 2 inner exceptions",
          src: "Task payment = FailAsync(\"Payment service down\");\nTask stock = FailAsync(\"Stock service down\");\nTask all = Task.WhenAll(payment, stock);\n\ntry\n{\n    await all;\n}\ncatch (Exception ex)\n{\n    Console.WriteLine($\"await threw only: {ex.Message}\");\n    foreach (Exception inner in all.Exception!.InnerExceptions)\n        Console.WriteLine($\"all.Exception holds: {inner.Message}\");\n}\n\ntry\n{\n    all.Wait();                  // blocking: used here only to show the wrapper type\n}\ncatch (AggregateException ex)\n{\n    Console.WriteLine($\"Wait() threw AggregateException with {ex.InnerExceptions.Count} inner exceptions\");\n}\n\nstatic async Task FailAsync(string message)\n{\n    await Task.CompletedTask;    // already complete: no real waiting, so the output is fixed\n    throw new InvalidOperationException(message);\n}"
        }
      ]
    },
    {
      id: "valuetask",
      depth: "detailed",
      q: "When would you use ValueTask instead of Task?",
      answer: "When a method usually completes synchronously, like a cache hit, ValueTask avoids allocating a Task. Rules: await it only once, never concurrently, and do not read .Result before it completes; otherwise return Task.",
      meaning: {
        hi: "जब method ज़्यादातर synchronously पूरा हो जाता है, जैसे cache hit, तब ValueTask एक Task allocate करने से बचाता है। Rules: इसे सिर्फ़ एक बार await करो, कभी एक साथ दो जगह नहीं, और पूरा होने से पहले .Result मत पढ़ो; बाकी हालात में Task return करो।",
        hg: "Jab method zyadatar synchronously poora ho jaata hai, jaise cache hit, tab ValueTask ek Task allocate karne se bachata hai. Rules: ise sirf ek baar await karo, kabhi ek saath do jagah nahi, aur poora hone se pehle .Result mat padho; baaki haalaat mein Task return karo."
      },
      explain: {
        en: "<ul>\n<li><code>ValueTask&lt;T&gt;</code> is a <b>struct</b> that holds either a ready result, a <code>Task&lt;T&gt;</code>, or a pooled <code>IValueTaskSource</code>. On the synchronous path there is no heap allocation.</li>\n<li><b>Consumer rules</b> (because the underlying object may be reused after completion):\n<ul>\n<li>await it <b>once</b>; never await the same <code>ValueTask</code> twice;</li>\n<li>never await it <b>concurrently</b> from two places;</li>\n<li>do not call <code>.Result</code>/<code>GetAwaiter().GetResult()</code> unless it has already completed.</li>\n</ul></li>\n<li>Need it twice, or inside <code>Task.WhenAll</code>? Convert once with <code>.AsTask()</code>.</li>\n<li>You meet it in framework APIs: <code>IAsyncDisposable.DisposeAsync()</code>, <code>Stream.ReadAsync(Memory&lt;byte&gt;)</code>, <code>Channel</code> readers.</li>\n<li><b>Default to <code>Task</code></b>. Choose <code>ValueTask</code> only for hot paths where profiling shows the allocations matter and the synchronous path is common.</li>\n</ul>\n<p>Follow-up: \"Why not use ValueTask everywhere?\" — it is bigger to copy, easier to misuse, and gives nothing when the method is truly asynchronous most of the time.</p>",
        hi: "<ul>\n<li><code>ValueTask&lt;T&gt;</code> एक <b>struct</b> है जिसमें या तो तैयार result, या एक <code>Task&lt;T&gt;</code>, या pooled <code>IValueTaskSource</code> होता है। Synchronous path पर कोई heap allocation नहीं।</li>\n<li><b>Consumer के rules</b> (क्योंकि पीछे का object complete होने के बाद reuse हो सकता है):\n<ul>\n<li>इसे <b>एक बार</b> await करो; एक ही <code>ValueTask</code> को दो बार कभी await मत करो;</li>\n<li>दो जगह से <b>एक साथ</b> कभी await मत करो;</li>\n<li><code>.Result</code>/<code>GetAwaiter().GetResult()</code> तभी call करो जब वो पहले से complete हो।</li>\n</ul></li>\n<li>दो बार चाहिए, या <code>Task.WhenAll</code> के अंदर? एक बार <code>.AsTask()</code> से convert कर लो।</li>\n<li>Framework APIs में यह मिलता है: <code>IAsyncDisposable.DisposeAsync()</code>, <code>Stream.ReadAsync(Memory&lt;byte&gt;)</code>, <code>Channel</code> readers।</li>\n<li><b>Default <code>Task</code> रखो</b>। <code>ValueTask</code> सिर्फ़ उन hot paths के लिए चुनो जहाँ profiling दिखाए कि allocations मायने रखते हैं और synchronous path आम है।</li>\n</ul>\n<p>Follow-up: \"ValueTask हर जगह क्यों नहीं?\" — इसे copy करना भारी है, ग़लत use करना आसान है, और जब method ज़्यादातर सच में asynchronous हो तो इससे कुछ नहीं मिलता।</p>",
        hg: "<ul>\n<li><code>ValueTask&lt;T&gt;</code> ek <b>struct</b> hai jismein ya to taiyaar result, ya ek <code>Task&lt;T&gt;</code>, ya pooled <code>IValueTaskSource</code> hota hai. Synchronous path par koi heap allocation nahi.</li>\n<li><b>Consumer ke rules</b> (kyunki peeche ka object complete hone ke baad reuse ho sakta hai):\n<ul>\n<li>ise <b>ek baar</b> await karo; ek hi <code>ValueTask</code> ko do baar kabhi await mat karo;</li>\n<li>do jagah se <b>ek saath</b> kabhi await mat karo;</li>\n<li><code>.Result</code>/<code>GetAwaiter().GetResult()</code> tabhi call karo jab woh pehle se complete ho.</li>\n</ul></li>\n<li>Do baar chahiye, ya <code>Task.WhenAll</code> ke andar? Ek baar <code>.AsTask()</code> se convert kar lo.</li>\n<li>Framework APIs mein yeh milta hai: <code>IAsyncDisposable.DisposeAsync()</code>, <code>Stream.ReadAsync(Memory&lt;byte&gt;)</code>, <code>Channel</code> readers.</li>\n<li><b>Default <code>Task</code> rakho</b>. <code>ValueTask</code> sirf un hot paths ke liye chuno jahan profiling dikhaye ki allocations maayne rakhte hain aur synchronous path aam hai.</li>\n</ul>\n<p>Follow-up: \"ValueTask har jagah kyun nahi?\" — ise copy karna bhaari hai, galat use karna aasaan hai, aur jab method zyadatar sach mein asynchronous ho to isse kuch nahi milta.</p>"
      },
      code: [
        {
          caption: {
            en: "A cache that usually answers synchronously returns ValueTask; the consumer awaits it once",
            hi: "जो cache ज़्यादातर synchronously जवाब देता है वो ValueTask return करता है; consumer उसे एक बार await करता है",
            hg: "Jo cache zyadatar synchronously jawaab deta hai woh ValueTask return karta hai; consumer use ek baar await karta hai"
          },
          check: "compile",
          src: "using System.Collections.Concurrent;\n\npublic interface IPriceApi\n{\n    Task<decimal> FetchPriceAsync(string sku, CancellationToken ct);\n}\n\npublic sealed class PriceCache(IPriceApi api)\n{\n    private readonly ConcurrentDictionary<string, decimal> _cache = new();\n\n    // Most calls hit the cache and finish synchronously: no Task allocation.\n    public ValueTask<decimal> GetPriceAsync(string sku, CancellationToken ct = default)\n    {\n        if (_cache.TryGetValue(sku, out decimal price))\n            return ValueTask.FromResult(price);\n        return new ValueTask<decimal>(LoadAsync(sku, ct));   // a cache miss wraps a real Task\n    }\n\n    private async Task<decimal> LoadAsync(string sku, CancellationToken ct)\n    {\n        decimal price = await api.FetchPriceAsync(sku, ct);\n        _cache[sku] = price;\n        return price;\n    }\n}\n\npublic sealed class CartTotals(PriceCache prices)\n{\n    public async Task<decimal> TotalAsync(IEnumerable<string> skus, CancellationToken ct)\n    {\n        decimal total = 0;\n        foreach (string sku in skus)\n            total += await prices.GetPriceAsync(sku, ct);     // GOOD: awaited exactly once\n\n        // BAD:  var vt = prices.GetPriceAsync(\"X\"); await vt; await vt;   (awaited twice)\n        // OK:   Task<decimal> t = prices.GetPriceAsync(\"X\").AsTask();     (when you need a Task)\n        return total;\n    }\n}"
        }
      ]
    },
    {
      id: "cancellation-token",
      depth: "detailed",
      q: "How do you cancel an async operation in .NET?",
      answer: "Pass a CancellationToken from a CancellationTokenSource through every async call. Cancellation is cooperative: code checks the token or hands it to APIs, which then throw OperationCanceledException.",
      meaning: {
        hi: "CancellationTokenSource से मिला CancellationToken हर async call में आगे pass करो। Cancellation cooperative है: code token check करता है या उसे APIs को देता है, जो फिर OperationCanceledException throw करती हैं।",
        hg: "CancellationTokenSource se mila CancellationToken har async call mein aage pass karo. Cancellation cooperative hai: code token check karta hai ya use APIs ko deta hai, jo phir OperationCanceledException throw karti hain."
      },
      explain: {
        en: "<ul>\n<li><b>Source and token</b>: <code>CancellationTokenSource</code> can <code>Cancel()</code> or <code>CancelAfter(TimeSpan.FromSeconds(5))</code> (a timeout). Its <code>Token</code> is passed down; it can only be <i>observed</i>, not cancelled, by the receiver.</li>\n<li><b>Observing</b>: pass it to APIs (<code>ToListAsync(ct)</code>, <code>GetAsync(url, ct)</code>, <code>Task.Delay(ms, ct)</code>), or call <code>ct.ThrowIfCancellationRequested()</code> in your own loops.</li>\n<li><b>Combining</b>: <code>CancellationTokenSource.CreateLinkedTokenSource(requestToken, timeoutToken)</code> cancels when either fires.</li>\n<li><b>ASP.NET Core</b>: a <code>CancellationToken</code> action parameter is bound to <code>HttpContext.RequestAborted</code>. Passing it to EF Core stops a long query when the user closes the browser.</li>\n<li><b>Handling</b>: <code>catch (OperationCanceledException) when (ct.IsCancellationRequested)</code> — expected, log at most as information. A timeout from <code>HttpClient.Timeout</code> also shows up as <code>TaskCanceledException</code>, so check which token fired.</li>\n</ul>\n<p>Follow-up: \"Does cancelling stop a thread?\" — No. Nothing is aborted (<code>Thread.Abort</code> is not supported in .NET Core). Code that never checks the token keeps running.</p>\n<p><b>TL angle:</b> code-review checklist — every public async I/O method takes <code>CancellationToken ct = default</code> as the last parameter and passes it on.</p>",
        hi: "<ul>\n<li><b>Source और token</b>: <code>CancellationTokenSource</code> <code>Cancel()</code> या <code>CancelAfter(TimeSpan.FromSeconds(5))</code> (timeout) कर सकता है। उसका <code>Token</code> नीचे pass होता है; लेने वाला उसे सिर्फ़ <i>देख</i> सकता है, cancel नहीं कर सकता।</li>\n<li><b>देखना (observe)</b>: इसे APIs को दो (<code>ToListAsync(ct)</code>, <code>GetAsync(url, ct)</code>, <code>Task.Delay(ms, ct)</code>), या अपने loops में <code>ct.ThrowIfCancellationRequested()</code> call करो।</li>\n<li><b>जोड़ना</b>: <code>CancellationTokenSource.CreateLinkedTokenSource(requestToken, timeoutToken)</code> दोनों में से कोई भी fire हो तो cancel करता है।</li>\n<li><b>ASP.NET Core</b>: action का <code>CancellationToken</code> parameter <code>HttpContext.RequestAborted</code> से bind होता है। इसे EF Core को देने से user के browser बंद करने पर लंबी query रुक जाती है।</li>\n<li><b>Handling</b>: <code>catch (OperationCanceledException) when (ct.IsCancellationRequested)</code> — expected है, ज़्यादा से ज़्यादा information की तरह log करो। <code>HttpClient.Timeout</code> वाला timeout भी <code>TaskCanceledException</code> बनकर आता है, इसलिए check करो कि कौन सा token fire हुआ।</li>\n</ul>\n<p>Follow-up: \"क्या cancel करने से thread रुक जाता है?\" — नहीं। कुछ भी abort नहीं होता (.NET Core में <code>Thread.Abort</code> supported नहीं)। जो code token कभी check नहीं करता, वो चलता रहता है।</p>\n<p><b>TL angle:</b> code-review checklist — हर public async I/O method आख़िरी parameter के रूप में <code>CancellationToken ct = default</code> ले और उसे आगे pass करे।</p>",
        hg: "<ul>\n<li><b>Source aur token</b>: <code>CancellationTokenSource</code> <code>Cancel()</code> ya <code>CancelAfter(TimeSpan.FromSeconds(5))</code> (timeout) kar sakta hai. Uska <code>Token</code> neeche pass hota hai; lene wala use sirf <i>dekh</i> sakta hai, cancel nahi kar sakta.</li>\n<li><b>Dekhna (observe)</b>: ise APIs ko do (<code>ToListAsync(ct)</code>, <code>GetAsync(url, ct)</code>, <code>Task.Delay(ms, ct)</code>), ya apne loops mein <code>ct.ThrowIfCancellationRequested()</code> call karo.</li>\n<li><b>Jodna</b>: <code>CancellationTokenSource.CreateLinkedTokenSource(requestToken, timeoutToken)</code> dono mein se koi bhi fire ho to cancel karta hai.</li>\n<li><b>ASP.NET Core</b>: action ka <code>CancellationToken</code> parameter <code>HttpContext.RequestAborted</code> se bind hota hai. Ise EF Core ko dene se user ke browser band karne par lambi query ruk jaati hai.</li>\n<li><b>Handling</b>: <code>catch (OperationCanceledException) when (ct.IsCancellationRequested)</code> — expected hai, zyada se zyada information ki tarah log karo. <code>HttpClient.Timeout</code> wala timeout bhi <code>TaskCanceledException</code> bankar aata hai, isliye check karo ki kaun sa token fire hua.</li>\n</ul>\n<p>Follow-up: \"Kya cancel karne se thread ruk jaata hai?\" — Nahi. Kuch bhi abort nahi hota (.NET Core mein <code>Thread.Abort</code> supported nahi). Jo code token kabhi check nahi karta, woh chalta rehta hai.</p>\n<p><b>TL angle:</b> code-review checklist — har public async I/O method aakhri parameter ke roop mein <code>CancellationToken ct = default</code> le aur use aage pass kare.</p>"
      }
    },
    {
      id: "async-streams",
      depth: "detailed",
      q: "What are IAsyncEnumerable and IAsyncDisposable used for?",
      answer: "IAsyncEnumerable&lt;T&gt; streams items one by one with await foreach, without loading everything first. IAsyncDisposable provides DisposeAsync for cleanup that needs I/O, and you use it with await using.",
      meaning: {
        hi: "IAsyncEnumerable&lt;T&gt; items को await foreach से एक-एक करके stream करता है, पहले सब कुछ load किए बिना। IAsyncDisposable ऐसे cleanup के लिए DisposeAsync देता है जिसमें I/O चाहिए, और इसे await using के साथ use करते हो।",
        hg: "IAsyncEnumerable&lt;T&gt; items ko await foreach se ek-ek karke stream karta hai, pehle sab kuch load kiye bina. IAsyncDisposable aise cleanup ke liye DisposeAsync deta hai jismein I/O chahiye, aur ise await using ke saath use karte ho."
      },
      explain: {
        en: "<ul>\n<li><b>Producer</b>: <code>async IAsyncEnumerable&lt;Order&gt; ReadOrdersAsync([EnumeratorCancellation] CancellationToken ct = default)</code> with <code>await</code> and <code>yield return</code> inside. <b>Consumer</b>: <code>await foreach (var o in ReadOrdersAsync().WithCancellation(ct))</code>.</li>\n<li>Compared with <code>Task&lt;List&lt;T&gt;&gt;</code>: the first item is available sooner and memory stays flat, because items are not collected first.</li>\n<li>Real uses: EF Core <code>query.AsAsyncEnumerable()</code>; ASP.NET Core actions returning <code>IAsyncEnumerable&lt;T&gt;</code> (System.Text.Json streams the array); gRPC server streaming; reading a paged external API page by page.</li>\n<li><b>LINQ over async streams</b>: .NET 10 includes <code>System.Linq.AsyncEnumerable</code> (<code>Where</code>, <code>Select</code>, <code>ToListAsync</code>... on <code>IAsyncEnumerable&lt;T&gt;</code>); earlier versions used the <code>System.Linq.Async</code> NuGet package.</li>\n<li><b>IAsyncDisposable</b>: <code>ValueTask DisposeAsync()</code>. <code>await using var db = new AppDbContext(...);</code> — <code>DbContext</code>, <code>Stream</code>, <code>Utf8JsonWriter</code> and many network types support it. A class that holds an async-disposable field should implement it too.</li>\n</ul>\n<p>Follow-up: \"Is <code>IAsyncEnumerable</code> the same as <code>IQueryable</code>?\" — No. <code>IQueryable</code> builds a query to translate (e.g. to SQL); <code>IAsyncEnumerable</code> just delivers results asynchronously one by one (LINQ and EF details on Days 4–6).</p>",
        hi: "<ul>\n<li><b>Producer</b>: अंदर <code>await</code> और <code>yield return</code> के साथ <code>async IAsyncEnumerable&lt;Order&gt; ReadOrdersAsync([EnumeratorCancellation] CancellationToken ct = default)</code>। <b>Consumer</b>: <code>await foreach (var o in ReadOrdersAsync().WithCancellation(ct))</code>।</li>\n<li><code>Task&lt;List&lt;T&gt;&gt;</code> के मुक़ाबले: पहला item जल्दी मिलता है और memory एक जैसी रहती है, क्योंकि items पहले जमा नहीं किए जाते।</li>\n<li>असली उपयोग: EF Core <code>query.AsAsyncEnumerable()</code>; <code>IAsyncEnumerable&lt;T&gt;</code> return करने वाले ASP.NET Core actions (System.Text.Json array को stream करता है); gRPC server streaming; किसी paged external API को page by page पढ़ना।</li>\n<li><b>Async streams पर LINQ</b>: .NET 10 में <code>System.Linq.AsyncEnumerable</code> शामिल है (<code>IAsyncEnumerable&lt;T&gt;</code> पर <code>Where</code>, <code>Select</code>, <code>ToListAsync</code>...); पहले के versions में <code>System.Linq.Async</code> NuGet package use होता था।</li>\n<li><b>IAsyncDisposable</b>: <code>ValueTask DisposeAsync()</code>। <code>await using var db = new AppDbContext(...);</code> — <code>DbContext</code>, <code>Stream</code>, <code>Utf8JsonWriter</code> और कई network types इसे support करते हैं। जिस class में async-disposable field है, उसे भी इसे implement करना चाहिए।</li>\n</ul>\n<p>Follow-up: \"क्या <code>IAsyncEnumerable</code> और <code>IQueryable</code> एक ही हैं?\" — नहीं। <code>IQueryable</code> translate करने के लिए query बनाता है (जैसे SQL में); <code>IAsyncEnumerable</code> बस results को asynchronously एक-एक करके देता है (LINQ और EF की details Days 4–6 में)।</p>",
        hg: "<ul>\n<li><b>Producer</b>: andar <code>await</code> aur <code>yield return</code> ke saath <code>async IAsyncEnumerable&lt;Order&gt; ReadOrdersAsync([EnumeratorCancellation] CancellationToken ct = default)</code>. <b>Consumer</b>: <code>await foreach (var o in ReadOrdersAsync().WithCancellation(ct))</code>.</li>\n<li><code>Task&lt;List&lt;T&gt;&gt;</code> ke muqaable: pehla item jaldi milta hai aur memory ek jaisi rehti hai, kyunki items pehle jama nahi kiye jaate.</li>\n<li>Asli upyog: EF Core <code>query.AsAsyncEnumerable()</code>; <code>IAsyncEnumerable&lt;T&gt;</code> return karne wale ASP.NET Core actions (System.Text.Json array ko stream karta hai); gRPC server streaming; kisi paged external API ko page by page padhna.</li>\n<li><b>Async streams par LINQ</b>: .NET 10 mein <code>System.Linq.AsyncEnumerable</code> shaamil hai (<code>IAsyncEnumerable&lt;T&gt;</code> par <code>Where</code>, <code>Select</code>, <code>ToListAsync</code>...); pehle ke versions mein <code>System.Linq.Async</code> NuGet package use hota tha.</li>\n<li><b>IAsyncDisposable</b>: <code>ValueTask DisposeAsync()</code>. <code>await using var db = new AppDbContext(...);</code> — <code>DbContext</code>, <code>Stream</code>, <code>Utf8JsonWriter</code> aur kai network types ise support karte hain. Jis class mein async-disposable field hai, use bhi ise implement karna chahiye.</li>\n</ul>\n<p>Follow-up: \"Kya <code>IAsyncEnumerable</code> aur <code>IQueryable</code> ek hi hain?\" — Nahi. <code>IQueryable</code> translate karne ke liye query banata hai (jaise SQL mein); <code>IAsyncEnumerable</code> bas results ko asynchronously ek-ek karke deta hai (LINQ aur EF ki details Days 4–6 mein).</p>"
      }
    },
    {
      id: "lock-with-await",
      depth: "detailed",
      q: "Can you use await inside a lock? How do you protect shared state in async code?",
      answer: "No — it is compile error CS1996, because a lock belongs to a thread and code after await may resume on another thread. Use SemaphoreSlim(1, 1) with await WaitAsync() and Release() in a finally block.",
      meaning: {
        hi: "नहीं — यह compile error CS1996 है, क्योंकि lock एक thread का होता है और await के बाद code दूसरे thread पर चल सकता है। SemaphoreSlim(1, 1) use करो: await WaitAsync() और finally block में Release()।",
        hg: "Nahi — yeh compile error CS1996 hai, kyunki lock ek thread ka hota hai aur await ke baad code doosre thread par chal sakta hai. SemaphoreSlim(1, 1) use karo: await WaitAsync() aur finally block mein Release()."
      },
      explain: {
        en: "<ul>\n<li><code>lock</code> uses <code>Monitor</code> (or the .NET 9 <code>Lock</code> type, Day 2), which is <b>thread-affine</b>: the same thread must release it. After an <code>await</code> you may be on a different thread, and holding a lock while waiting for I/O would block others for a long time anyway.</li>\n<li><b><code>SemaphoreSlim(1, 1)</code></b> = an async-friendly lock: <code>await _gate.WaitAsync(ct); try { ... } finally { _gate.Release(); }</code> (see the pitfalls section code).</li>\n<li>It is <b>not re-entrant</b>: calling a method that waits on the same semaphore while holding it deadlocks.</li>\n<li><b>Often better: avoid shared mutable state</b> — <code>Interlocked</code> for counters, <code>ConcurrentDictionary</code> (Day 2), <code>Lazy&lt;Task&lt;T&gt;&gt;</code> for one-time async initialisation, or a <code>Channel&lt;T&gt;</code> so one consumer owns the state.</li>\n</ul>\n<p>Follow-up: \"Your API runs on 3 servers. Does SemaphoreSlim protect the data?\" — No, it works only <b>inside one process</b>. Across servers you need a database constraint/transaction, optimistic concurrency (EF Core concurrency tokens, Day 6), or a distributed lock (e.g. Redis).</p>",
        hi: "<ul>\n<li><code>lock</code> <code>Monitor</code> (या .NET 9 का <code>Lock</code> type, Day 2) use करता है, जो <b>thread-affine</b> है: उसी thread को release करना होता है। <code>await</code> के बाद आप दूसरे thread पर हो सकते हो, और I/O के इंतज़ार में lock पकड़े रखना वैसे भी दूसरों को लंबे समय तक रोक देगा।</li>\n<li><b><code>SemaphoreSlim(1, 1)</code></b> = async के साथ चलने वाला lock: <code>await _gate.WaitAsync(ct); try { ... } finally { _gate.Release(); }</code> (pitfalls section का code देखो)।</li>\n<li>यह <b>re-entrant नहीं</b> है: पकड़े रहते हुए ऐसे method को call करना जो उसी semaphore पर wait करता है, deadlock कर देगा।</li>\n<li><b>अक्सर बेहतर: shared mutable state से बचो</b> — counters के लिए <code>Interlocked</code>, <code>ConcurrentDictionary</code> (Day 2), one-time async initialisation के लिए <code>Lazy&lt;Task&lt;T&gt;&gt;</code>, या <code>Channel&lt;T&gt;</code> ताकि state का owner एक ही consumer हो।</li>\n</ul>\n<p>Follow-up: \"आपकी API 3 servers पर चलती है। क्या SemaphoreSlim data को बचाएगा?\" — नहीं, यह सिर्फ़ <b>एक process के अंदर</b> काम करता है। Servers के पार database constraint/transaction, optimistic concurrency (EF Core concurrency tokens, Day 6), या distributed lock (जैसे Redis) चाहिए।</p>",
        hg: "<ul>\n<li><code>lock</code> <code>Monitor</code> (ya .NET 9 ka <code>Lock</code> type, Day 2) use karta hai, jo <b>thread-affine</b> hai: usi thread ko release karna hota hai. <code>await</code> ke baad aap doosre thread par ho sakte ho, aur I/O ke intezaar mein lock pakde rakhna waise bhi doosron ko lambe samay tak rok dega.</li>\n<li><b><code>SemaphoreSlim(1, 1)</code></b> = async ke saath chalne wala lock: <code>await _gate.WaitAsync(ct); try { ... } finally { _gate.Release(); }</code> (pitfalls section ka code dekho).</li>\n<li>Yeh <b>re-entrant nahi</b> hai: pakde rehte hue aise method ko call karna jo usi semaphore par wait karta hai, deadlock kar dega.</li>\n<li><b>Aksar behtar: shared mutable state se bacho</b> — counters ke liye <code>Interlocked</code>, <code>ConcurrentDictionary</code> (Day 2), one-time async initialisation ke liye <code>Lazy&lt;Task&lt;T&gt;&gt;</code>, ya <code>Channel&lt;T&gt;</code> taaki state ka owner ek hi consumer ho.</li>\n</ul>\n<p>Follow-up: \"Aapki API 3 servers par chalti hai. Kya SemaphoreSlim data ko bachayega?\" — Nahi, yeh sirf <b>ek process ke andar</b> kaam karta hai. Servers ke paar database constraint/transaction, optimistic concurrency (EF Core concurrency tokens, Day 6), ya distributed lock (jaise Redis) chahiye.</p>"
      }
    },
    {
      id: "exception-strategy",
      depth: "detailed",
      q: "How would you design exception handling for an ASP.NET Core application?",
      answer: "Handle unexpected exceptions in one global place that logs once and returns ProblemDetails. Throw specific exceptions for real failures, and return results for expected cases like validation errors or not-found.",
      meaning: {
        hi: "Unexpected exceptions को एक global जगह संभालो जो एक बार log करे और ProblemDetails return करे। असली failures के लिए specific exceptions throw करो, और validation errors या not-found जैसे expected cases के लिए results return करो।",
        hg: "Unexpected exceptions ko ek global jagah sambhaalo jo ek baar log kare aur ProblemDetails return kare. Asli failures ke liye specific exceptions throw karo, aur validation errors ya not-found jaise expected cases ke liye results return karo."
      },
      explain: {
        en: "<ul>\n<li><b>One global handler</b>: <code>builder.Services.AddProblemDetails();</code>, <code>app.UseExceptionHandler();</code>, plus an <code>IExceptionHandler</code> implementation (ASP.NET Core 8+) that maps exception types to status codes — a pattern-matching <code>switch</code> works nicely (e.g. <code>NotFoundException</code> → 404, <code>ConflictException</code> → 409, everything else → 500).</li>\n<li><b>Log once</b>, at the edge, with the trace/correlation id — not catch-log-rethrow in every layer.</li>\n<li><b>Never leak internals</b>: no stack traces or SQL text in production responses; a generic 500 message plus the trace id the user can quote to support.</li>\n<li><b>Expected outcomes are not exceptions</b>: validation errors (400 with field errors), not found (404). Many teams use a <b>Result</b> type for these. This is a trade-off: results make failure paths explicit and cheap; exceptions keep the happy path simpler. Agree on one style per codebase.</li>\n<li><b>Transient failures</b> (timeouts, 503s): retry with backoff and circuit breakers using <code>Microsoft.Extensions.Http.Resilience</code> (built on Polly) instead of hand-written retry loops.</li>\n<li>Background services need their own try/catch per work item — an unhandled exception there can stop the service (by default the host stops in .NET 6+).</li>\n</ul>\n<p>Follow-up: \"Where do you catch exceptions then?\" — only where you can do something useful: retry, translate (repository → domain exception), add context, or clean up. Everything else bubbles up to the global handler.</p>",
        hi: "<ul>\n<li><b>एक global handler</b>: <code>builder.Services.AddProblemDetails();</code>, <code>app.UseExceptionHandler();</code>, और एक <code>IExceptionHandler</code> implementation (ASP.NET Core 8+) जो exception types को status codes में map करे — pattern-matching वाला <code>switch</code> यहाँ बढ़िया चलता है (जैसे <code>NotFoundException</code> → 404, <code>ConflictException</code> → 409, बाकी सब → 500)।</li>\n<li>Edge पर, trace/correlation id के साथ <b>एक बार log करो</b> — हर layer में catch-log-rethrow नहीं।</li>\n<li><b>Internals कभी leak मत करो</b>: production responses में stack traces या SQL text नहीं; एक generic 500 message और trace id, जिसे user support को बता सके।</li>\n<li><b>Expected नतीजे exceptions नहीं हैं</b>: validation errors (field errors के साथ 400), not found (404)। कई teams इनके लिए <b>Result</b> type use करती हैं। यह एक trade-off है: results failure paths को साफ़ और सस्ता बनाते हैं; exceptions happy path को आसान रखते हैं। हर codebase के लिए एक style तय करो।</li>\n<li><b>Transient failures</b> (timeouts, 503s): हाथ से लिखे retry loops की जगह <code>Microsoft.Extensions.Http.Resilience</code> (Polly पर बना) से backoff के साथ retry और circuit breakers।</li>\n<li>Background services में हर work item के लिए अपना try/catch चाहिए — वहाँ unhandled exception service को रोक सकता है (.NET 6+ में by default host रुक जाता है)।</li>\n</ul>\n<p>Follow-up: \"तो exceptions पकड़ते कहाँ हो?\" — सिर्फ़ वहाँ जहाँ कुछ काम का कर सको: retry, translate (repository → domain exception), context जोड़ना, या cleanup। बाकी सब global handler तक ऊपर जाने दो।</p>",
        hg: "<ul>\n<li><b>Ek global handler</b>: <code>builder.Services.AddProblemDetails();</code>, <code>app.UseExceptionHandler();</code>, aur ek <code>IExceptionHandler</code> implementation (ASP.NET Core 8+) jo exception types ko status codes mein map kare — pattern-matching wala <code>switch</code> yahan badhiya chalta hai (jaise <code>NotFoundException</code> → 404, <code>ConflictException</code> → 409, baaki sab → 500).</li>\n<li>Edge par, trace/correlation id ke saath <b>ek baar log karo</b> — har layer mein catch-log-rethrow nahi.</li>\n<li><b>Internals kabhi leak mat karo</b>: production responses mein stack traces ya SQL text nahi; ek generic 500 message aur trace id, jise user support ko bata sake.</li>\n<li><b>Expected nateeje exceptions nahi hain</b>: validation errors (field errors ke saath 400), not found (404). Kai teams inke liye <b>Result</b> type use karti hain. Yeh ek trade-off hai: results failure paths ko saaf aur sasta banate hain; exceptions happy path ko aasaan rakhte hain. Har codebase ke liye ek style tay karo.</li>\n<li><b>Transient failures</b> (timeouts, 503s): haath se likhe retry loops ki jagah <code>Microsoft.Extensions.Http.Resilience</code> (Polly par bana) se backoff ke saath retry aur circuit breakers.</li>\n<li>Background services mein har work item ke liye apna try/catch chahiye — wahan unhandled exception service ko rok sakta hai (.NET 6+ mein by default host ruk jaata hai).</li>\n</ul>\n<p>Follow-up: \"To exceptions pakadte kahan ho?\" — sirf wahan jahan kuch kaam ka kar sako: retry, translate (repository → domain exception), context jodna, ya cleanup. Baaki sab global handler tak upar jaane do.</p>"
      }
    },
    {
      id: "finalizer-vs-dispose",
      depth: "detailed",
      q: "What is the difference between a finalizer and Dispose? Explain the Dispose pattern.",
      answer: "Your code calls Dispose to release resources at a known time; the GC calls a finalizer at an unknown time as a safety net. The Dispose pattern shares the cleanup and calls GC.SuppressFinalize.",
      meaning: {
        hi: "Dispose आपका code call करता है ताकि resources तय समय पर छूट जाएँ। Finalizer GC किसी अनजान समय पर safety net की तरह call करता है। Dispose pattern दोनों के लिए cleanup code share करता है और GC.SuppressFinalize call करता है।",
        hg: "Dispose aapka code call karta hai taaki resources tay samay par chhoot jaayein. Finalizer GC kisi anjaan samay par safety net ki tarah call karta hai. Dispose pattern dono ke liye cleanup code share karta hai aur GC.SuppressFinalize call karta hai."
      },
      explain: {
        en: "<ul>\n<li><b>Dispose</b>: deterministic — you (or <code>using</code>) call it. Can clean up both managed fields (other disposables) and unmanaged handles.</li>\n<li><b>Finalizer</b> (<code>~ClassName()</code>, compiles to an override of <code>Object.Finalize</code>): non-deterministic, runs on the finalizer thread, order between objects is not guaranteed, so it must touch <b>only unmanaged</b> resources. Objects with finalizers survive an extra GC — a real cost.</li>\n<li><b>Pattern</b>:\n<ul>\n<li><code>public void Dispose() { Dispose(true); GC.SuppressFinalize(this); }</code></li>\n<li><code>protected virtual void Dispose(bool disposing)</code> — if <code>disposing</code>, dispose managed fields; always free unmanaged ones; guard with a <code>_disposed</code> flag.</li>\n<li><code>~ClassName() =&gt; Dispose(false);</code> — only if the class directly owns an unmanaged handle.</li>\n</ul></li>\n<li><b>Modern advice</b>: wrap native handles in a <code>SafeHandle</code> subclass (it has the finalizer) — then your class needs only the simple sealed <code>Dispose</code>, no finalizer. Analyzers CA1063/CA1816 check the pattern when enabled.</li>\n</ul>\n<p>Follow-up: \"Why <code>GC.SuppressFinalize</code>?\" — after a proper <code>Dispose</code> there is nothing left for the finalizer to do, so it removes the object from the finalization queue and avoids the extra GC cost. It is called even without a finalizer, in case a derived class adds one (CA1816).</p>",
        hi: "<ul>\n<li><b>Dispose</b>: deterministic — आप (या <code>using</code>) इसे call करते हो। यह managed fields (दूसरे disposables) और unmanaged handles दोनों साफ़ कर सकता है।</li>\n<li><b>Finalizer</b> (<code>~ClassName()</code>, compile होकर <code>Object.Finalize</code> का override बनता है): non-deterministic, finalizer thread पर चलता है, objects के बीच order की कोई guarantee नहीं, इसलिए इसे <b>सिर्फ़ unmanaged</b> resources छूने चाहिए। Finalizer वाले objects एक extra GC तक बचे रहते हैं — यह असली cost है।</li>\n<li><b>Pattern</b>:\n<ul>\n<li><code>public void Dispose() { Dispose(true); GC.SuppressFinalize(this); }</code></li>\n<li><code>protected virtual void Dispose(bool disposing)</code> — अगर <code>disposing</code> है तो managed fields dispose करो; unmanaged वाले हमेशा free करो; <code>_disposed</code> flag से guard करो।</li>\n<li><code>~ClassName() =&gt; Dispose(false);</code> — सिर्फ़ तब जब class सीधे किसी unmanaged handle की owner हो।</li>\n</ul></li>\n<li><b>आज की सलाह</b>: native handles को <code>SafeHandle</code> subclass में wrap करो (उसमें finalizer है) — फिर आपकी class को सिर्फ़ simple sealed <code>Dispose</code> चाहिए, finalizer नहीं। Enable होने पर analyzers CA1063/CA1816 pattern check करते हैं।</li>\n</ul>\n<p>Follow-up: \"<code>GC.SuppressFinalize</code> क्यों?\" — ठीक से <code>Dispose</code> होने के बाद finalizer के लिए कुछ नहीं बचता, इसलिए यह object को finalization queue से हटा देता है और extra GC cost बचाता है। Finalizer न हो तब भी इसे call करते हैं, अगर कोई derived class finalizer जोड़ दे (CA1816)।</p>",
        hg: "<ul>\n<li><b>Dispose</b>: deterministic — aap (ya <code>using</code>) ise call karte ho. Yeh managed fields (doosre disposables) aur unmanaged handles dono saaf kar sakta hai.</li>\n<li><b>Finalizer</b> (<code>~ClassName()</code>, compile hokar <code>Object.Finalize</code> ka override banta hai): non-deterministic, finalizer thread par chalta hai, objects ke beech order ki koi guarantee nahi, isliye ise <b>sirf unmanaged</b> resources chhoone chahiye. Finalizer wale objects ek extra GC tak bache rehte hain — yeh asli cost hai.</li>\n<li><b>Pattern</b>:\n<ul>\n<li><code>public void Dispose() { Dispose(true); GC.SuppressFinalize(this); }</code></li>\n<li><code>protected virtual void Dispose(bool disposing)</code> — agar <code>disposing</code> hai to managed fields dispose karo; unmanaged wale hamesha free karo; <code>_disposed</code> flag se guard karo.</li>\n<li><code>~ClassName() =&gt; Dispose(false);</code> — sirf tab jab class seedhe kisi unmanaged handle ki owner ho.</li>\n</ul></li>\n<li><b>Aaj ki salaah</b>: native handles ko <code>SafeHandle</code> subclass mein wrap karo (usmein finalizer hai) — phir aapki class ko sirf simple sealed <code>Dispose</code> chahiye, finalizer nahi. Enable hone par analyzers CA1063/CA1816 pattern check karte hain.</li>\n</ul>\n<p>Follow-up: \"<code>GC.SuppressFinalize</code> kyun?\" — theek se <code>Dispose</code> hone ke baad finalizer ke liye kuch nahi bachta, isliye yeh object ko finalization queue se hata deta hai aur extra GC cost bachata hai. Finalizer na ho tab bhi ise call karte hain, agar koi derived class finalizer jod de (CA1816).</p>"
      }
    },
    {
      id: "loh-memory-leaks",
      depth: "detailed",
      q: "What is the Large Object Heap, and can a .NET application have memory leaks?",
      answer: "The LOH holds objects of 85,000 bytes or more, collected with Gen 2 and not compacted by default. Yes, leaks happen when objects stay referenced, like a growing static cache or forgotten event handlers.",
      meaning: {
        hi: "LOH में 85,000 bytes या उससे बड़े objects रहते हैं; यह Gen 2 के साथ collect होता है और by default compact नहीं होता। हाँ, leaks तब होते हैं जब objects referenced रह जाते हैं, जैसे बढ़ती static cache या कभी न हटाए गए event handlers।",
        hg: "LOH mein 85,000 bytes ya usse bade objects rehte hain; yeh Gen 2 ke saath collect hota hai aur by default compact nahi hota. Haan, leaks tab hote hain jab objects referenced reh jaate hain, jaise badhti static cache ya kabhi na hataaye gaye event handlers."
      },
      explain: {
        en: "<ul>\n<li><b>Why a separate heap</b>: copying huge objects during compaction is expensive, so the LOH is swept but not compacted by default. Many short-lived large buffers → fragmentation, more memory, more full GCs. One-time compaction can be requested with <code>GCSettings.LargeObjectHeapCompactionMode</code>.</li>\n<li><b>Avoid LOH churn</b>: <code>ArrayPool&lt;T&gt;.Shared.Rent/Return</code> for big buffers; stream data instead of loading whole files into a <code>byte[]</code> or <code>string</code>; <code>RecyclableMemoryStream</code> (NuGet package <code>Microsoft.IO.RecyclableMemoryStream</code>) instead of many big <code>MemoryStream</code>s.</li>\n<li><b>Managed \"leaks\"</b> = still-reachable objects: static <code>Dictionary</code> caches with no eviction (use <code>IMemoryCache</code> with expiration/size limits), events from a long-lived publisher to short-lived subscribers, timers never disposed, a singleton capturing a scoped service.</li>\n<li><b>Unmanaged leaks</b>: undisposed handles, connections, native memory.</li>\n<li><b>How to investigate</b>: <code>dotnet-counters</code> to confirm growth (GC heap size, Gen 2 size); take two <code>dotnet-gcdump</code> snapshots some minutes apart and compare which types grow; follow the \"paths to root\" in Visual Studio or PerfView.</li>\n</ul>\n<p>Follow-up: \"Memory grows in production but drops after a GC — is that a leak?\" — Not necessarily. Server GC can let the heap grow while memory is available. A leak is memory that keeps growing <b>after full GCs</b> under steady load.</p>",
        hi: "<ul>\n<li><b>अलग heap क्यों</b>: compaction के दौरान बहुत बड़े objects copy करना महँगा है, इसलिए LOH by default sweep होता है पर compact नहीं। बहुत सारे थोड़ी देर वाले बड़े buffers → fragmentation, ज़्यादा memory, ज़्यादा full GCs। एक बार का compaction <code>GCSettings.LargeObjectHeapCompactionMode</code> से माँगा जा सकता है।</li>\n<li><b>LOH की उथल-पुथल से बचो</b>: बड़े buffers के लिए <code>ArrayPool&lt;T&gt;.Shared.Rent/Return</code>; पूरी file को <code>byte[]</code> या <code>string</code> में load करने की जगह data stream करो; बहुत सारे बड़े <code>MemoryStream</code> की जगह <code>RecyclableMemoryStream</code> (NuGet package <code>Microsoft.IO.RecyclableMemoryStream</code>)।</li>\n<li><b>Managed \"leaks\"</b> = अब भी reachable objects: बिना eviction वाली static <code>Dictionary</code> caches (expiration/size limits के साथ <code>IMemoryCache</code> use करो), लंबे समय वाले publisher से थोड़ी देर वाले subscribers के events, कभी dispose न हुए timers, scoped service को पकड़े हुए singleton।</li>\n<li><b>Unmanaged leaks</b>: dispose न हुए handles, connections, native memory।</li>\n<li><b>जाँच कैसे करें</b>: growth confirm करने के लिए <code>dotnet-counters</code> (GC heap size, Gen 2 size); कुछ मिनट के अंतर पर दो <code>dotnet-gcdump</code> snapshots लो और compare करो कि कौन से types बढ़ रहे हैं; Visual Studio या PerfView में \"paths to root\" follow करो।</li>\n</ul>\n<p>Follow-up: \"Production में memory बढ़ती है पर GC के बाद गिर जाती है — क्या यह leak है?\" — ज़रूरी नहीं। Memory available हो तो Server GC heap को बढ़ने देता है। Leak वो memory है जो steady load पर <b>full GCs के बाद भी</b> बढ़ती रहे।</p>",
        hg: "<ul>\n<li><b>Alag heap kyun</b>: compaction ke dauraan bahut bade objects copy karna mehenga hai, isliye LOH by default sweep hota hai par compact nahi. Bahut saare thodi der wale bade buffers → fragmentation, zyada memory, zyada full GCs. Ek baar ka compaction <code>GCSettings.LargeObjectHeapCompactionMode</code> se maanga ja sakta hai.</li>\n<li><b>LOH ki uthal-puthal se bacho</b>: bade buffers ke liye <code>ArrayPool&lt;T&gt;.Shared.Rent/Return</code>; poori file ko <code>byte[]</code> ya <code>string</code> mein load karne ki jagah data stream karo; bahut saare bade <code>MemoryStream</code> ki jagah <code>RecyclableMemoryStream</code> (NuGet package <code>Microsoft.IO.RecyclableMemoryStream</code>).</li>\n<li><b>Managed \"leaks\"</b> = ab bhi reachable objects: bina eviction wali static <code>Dictionary</code> caches (expiration/size limits ke saath <code>IMemoryCache</code> use karo), lambe samay wale publisher se thodi der wale subscribers ke events, kabhi dispose na hue timers, scoped service ko pakde hue singleton.</li>\n<li><b>Unmanaged leaks</b>: dispose na hue handles, connections, native memory.</li>\n<li><b>Jaanch kaise karein</b>: growth confirm karne ke liye <code>dotnet-counters</code> (GC heap size, Gen 2 size); kuch minute ke antar par do <code>dotnet-gcdump</code> snapshots lo aur compare karo ki kaun se types badh rahe hain; Visual Studio ya PerfView mein \"paths to root\" follow karo.</li>\n</ul>\n<p>Follow-up: \"Production mein memory badhti hai par GC ke baad gir jaati hai — kya yeh leak hai?\" — Zaroori nahi. Memory available ho to Server GC heap ko badhne deta hai. Leak woh memory hai jo steady load par <b>full GCs ke baad bhi</b> badhti rahe.</p>"
      }
    },
    {
      id: "server-vs-workstation-gc",
      depth: "detailed",
      q: "What is the difference between Workstation GC and Server GC?",
      answer: "Workstation GC, the default for desktop and console apps, uses one heap and favours lower memory. Server GC, the default for ASP.NET Core, uses a heap and GC thread per core: more throughput, more memory.",
      meaning: {
        hi: "Workstation GC, जो desktop और console apps का default है, एक heap use करता है और कम memory पर ध्यान देता है। Server GC, जो ASP.NET Core का default है, हर core के लिए एक heap और GC thread use करता है — ज़्यादा throughput, पर memory भी ज़्यादा।",
        hg: "Workstation GC, jo desktop aur console apps ka default hai, ek heap use karta hai aur kam memory par dhyaan deta hai. Server GC, jo ASP.NET Core ka default hai, har core ke liye ek heap aur GC thread use karta hai — zyada throughput, par memory bhi zyada."
      },
      explain: {
        en: "<ul>\n<li><b>Setting</b>: <code>&lt;ServerGarbageCollection&gt;true|false&lt;/ServerGarbageCollection&gt;</code> in the project file, or <code>System.GC.Server</code> in <code>runtimeconfig.json</code>. <code>GCSettings.IsServerGC</code> tells you what is running.</li>\n<li><b>Background GC</b> (<code>&lt;ConcurrentGarbageCollection&gt;</code>, on by default) works with both: most Gen 2 work happens while app threads run.</li>\n<li><b>Containers</b>: the GC respects container memory/CPU limits. With small limits and many instances, Server GC's per-core heaps can use more memory than you expect.</li>\n<li><b>.NET 9+</b>: with Server GC, <b>DATAS</b> (Dynamic Adaptation To Application Sizes) is on by default — it adjusts the number of heaps to the app's actual load, reducing memory for small apps.</li>\n<li>Settings like a hard heap limit (<code>GCHeapHardLimit</code>) exist, but change GC settings only after measuring.</li>\n</ul>\n<p><b>TL angle:</b> say \"measure first\": check GC counters under realistic load before switching modes; most apps are fine with the defaults.</p>",
        hi: "<ul>\n<li><b>Setting</b>: project file में <code>&lt;ServerGarbageCollection&gt;true|false&lt;/ServerGarbageCollection&gt;</code>, या <code>runtimeconfig.json</code> में <code>System.GC.Server</code>। <code>GCSettings.IsServerGC</code> बताता है कि क्या चल रहा है।</li>\n<li><b>Background GC</b> (<code>&lt;ConcurrentGarbageCollection&gt;</code>, by default on) दोनों के साथ काम करता है: Gen 2 का ज़्यादातर काम app threads के चलते-चलते होता है।</li>\n<li><b>Containers</b>: GC container की memory/CPU limits मानता है। छोटी limits और बहुत सारे instances हों तो Server GC के per-core heaps उम्मीद से ज़्यादा memory ले सकते हैं।</li>\n<li><b>.NET 9+</b>: Server GC के साथ <b>DATAS</b> (Dynamic Adaptation To Application Sizes) by default on है — यह app के असली load के हिसाब से heaps की संख्या बदलता है, जिससे छोटे apps की memory कम होती है।</li>\n<li>Hard heap limit (<code>GCHeapHardLimit</code>) जैसी settings मौजूद हैं, पर GC settings measure करने के बाद ही बदलो।</li>\n</ul>\n<p><b>TL angle:</b> \"पहले measure करो\" बोलो: mode बदलने से पहले realistic load पर GC counters देखो; ज़्यादातर apps defaults के साथ ठीक चलते हैं।</p>",
        hg: "<ul>\n<li><b>Setting</b>: project file mein <code>&lt;ServerGarbageCollection&gt;true|false&lt;/ServerGarbageCollection&gt;</code>, ya <code>runtimeconfig.json</code> mein <code>System.GC.Server</code>. <code>GCSettings.IsServerGC</code> batata hai ki kya chal raha hai.</li>\n<li><b>Background GC</b> (<code>&lt;ConcurrentGarbageCollection&gt;</code>, by default on) dono ke saath kaam karta hai: Gen 2 ka zyadatar kaam app threads ke chalte-chalte hota hai.</li>\n<li><b>Containers</b>: GC container ki memory/CPU limits maanta hai. Chhoti limits aur bahut saare instances hon to Server GC ke per-core heaps ummeed se zyada memory le sakte hain.</li>\n<li><b>.NET 9+</b>: Server GC ke saath <b>DATAS</b> (Dynamic Adaptation To Application Sizes) by default on hai — yeh app ke asli load ke hisaab se heaps ki sankhya badalta hai, jisse chhote apps ki memory kam hoti hai.</li>\n<li>Hard heap limit (<code>GCHeapHardLimit</code>) jaisi settings maujood hain, par GC settings measure karne ke baad hi badlo.</li>\n</ul>\n<p><b>TL angle:</b> \"pehle measure karo\" bolo: mode badalne se pehle realistic load par GC counters dekho; zyadatar apps defaults ke saath theek chalte hain.</p>"
      }
    },
    {
      id: "pattern-matching",
      depth: "detailed",
      q: "What pattern matching features do you use in modern C#?",
      answer: "Type patterns with is, switch expressions, property patterns, relational and logical patterns like > 500 and not null, and list patterns from C# 11. They replace long if/else chains of type checks and casts.",
      meaning: {
        hi: "is के साथ type patterns, switch expressions, property patterns, &gt; 500 और not null जैसे relational और logical patterns, और C# 11 के list patterns। ये type checks और casts वाली लंबी if/else chains की जगह लेते हैं।",
        hg: "is ke saath type patterns, switch expressions, property patterns, &gt; 500 aur not null jaise relational aur logical patterns, aur C# 11 ke list patterns. Yeh type checks aur casts wali lambi if/else chains ki jagah lete hain."
      },
      explain: {
        en: "<ul>\n<li><b>Versions</b>: type pattern with declaration (<code>is Circle c</code>) — C# 7; switch expressions, property, positional and tuple patterns — C# 8; relational (<code>&lt;</code>, <code>&gt;=</code>) and logical (<code>and</code>, <code>or</code>, <code>not</code>) — C# 9; extended property patterns (<code>{ Customer.City: \"Pune\" }</code>) — C# 10; list patterns (<code>[first, .., last]</code>) — C# 11.</li>\n<li><b>Order matters</b>: the first matching arm wins; put specific cases before general ones. An unreachable arm is an error (CS8510); a non-exhaustive switch expression is a warning (CS8509) and throws <code>SwitchExpressionException</code> at runtime if nothing matches.</li>\n<li><b>Tuple patterns</b> are great for small state machines: <code>(order.Status, action) switch { (Status.New, \"pay\") =&gt; Status.Paid, ... }</code>.</li>\n<li><code>is null</code> / <code>is not null</code> ignore any overloaded <code>==</code>, so they are the reliable null checks.</li>\n</ul>\n<p>Follow-up: \"Pattern matching or polymorphism?\" — If the <b>set of types is closed</b> and the decision belongs to the caller (mapping exceptions to HTTP codes), a switch is clear. If <b>new types keep coming</b> and each knows its own behaviour, a virtual method avoids editing many switches (open/closed principle, Day 8).</p>",
        hi: "<ul>\n<li><b>Versions</b>: declaration के साथ type pattern (<code>is Circle c</code>) — C# 7; switch expressions, property, positional और tuple patterns — C# 8; relational (<code>&lt;</code>, <code>&gt;=</code>) और logical (<code>and</code>, <code>or</code>, <code>not</code>) — C# 9; extended property patterns (<code>{ Customer.City: \"Pune\" }</code>) — C# 10; list patterns (<code>[first, .., last]</code>) — C# 11।</li>\n<li><b>Order मायने रखता है</b>: पहला match होने वाला arm जीतता है; specific cases को general से पहले रखो। Unreachable arm error है (CS8510); non-exhaustive switch expression warning है (CS8509) और runtime पर कुछ match न हो तो <code>SwitchExpressionException</code> throw करता है।</li>\n<li><b>Tuple patterns</b> छोटी state machines के लिए बढ़िया हैं: <code>(order.Status, action) switch { (Status.New, \"pay\") =&gt; Status.Paid, ... }</code>।</li>\n<li><code>is null</code> / <code>is not null</code> किसी भी overload किए <code>==</code> को ignore करते हैं, इसलिए ये भरोसेमंद null checks हैं।</li>\n</ul>\n<p>Follow-up: \"Pattern matching या polymorphism?\" — अगर <b>types का set बंद (closed)</b> है और फ़ैसला caller का है (exceptions को HTTP codes में map करना), तो switch साफ़ है। अगर <b>नए types आते रहते हैं</b> और हर एक अपना behaviour जानता है, तो virtual method कई switches edit करने से बचाता है (open/closed principle, Day 8)।</p>",
        hg: "<ul>\n<li><b>Versions</b>: declaration ke saath type pattern (<code>is Circle c</code>) — C# 7; switch expressions, property, positional aur tuple patterns — C# 8; relational (<code>&lt;</code>, <code>&gt;=</code>) aur logical (<code>and</code>, <code>or</code>, <code>not</code>) — C# 9; extended property patterns (<code>{ Customer.City: \"Pune\" }</code>) — C# 10; list patterns (<code>[first, .., last]</code>) — C# 11.</li>\n<li><b>Order maayne rakhta hai</b>: pehla match hone wala arm jeetta hai; specific cases ko general se pehle rakho. Unreachable arm error hai (CS8510); non-exhaustive switch expression warning hai (CS8509) aur runtime par kuch match na ho to <code>SwitchExpressionException</code> throw karta hai.</li>\n<li><b>Tuple patterns</b> chhoti state machines ke liye badhiya hain: <code>(order.Status, action) switch { (Status.New, \"pay\") =&gt; Status.Paid, ... }</code>.</li>\n<li><code>is null</code> / <code>is not null</code> kisi bhi overload kiye <code>==</code> ko ignore karte hain, isliye yeh bharosemand null checks hain.</li>\n</ul>\n<p>Follow-up: \"Pattern matching ya polymorphism?\" — Agar <b>types ka set band (closed)</b> hai aur faisla caller ka hai (exceptions ko HTTP codes mein map karna), to switch saaf hai. Agar <b>naye types aate rehte hain</b> aur har ek apna behaviour jaanta hai, to virtual method kai switches edit karne se bachata hai (open/closed principle, Day 8).</p>"
      }
    },
    {
      id: "nullable-reference-types",
      depth: "detailed",
      q: "What are nullable reference types? Do they prevent NullReferenceException?",
      answer: "They mark which references may be null (string?) and which should not (string), and the compiler warns about risky use. It is compile-time only, so it reduces NullReferenceException but cannot fully prevent it.",
      meaning: {
        hi: "इनसे आप बताते हो कि कौन से references null हो सकते हैं (string?) और कौन से नहीं होने चाहिए (string), और compiler possible null use पर warning देता है। यह सिर्फ़ compile-time है, इसलिए NullReferenceException कम करता है पर पूरी तरह रोक नहीं सकता।",
        hg: "Inse aap batate ho ki kaun se references null ho sakte hain (string?) aur kaun se nahi hone chahiye (string), aur compiler possible null use par warning deta hai. Yeh sirf compile-time hai, isliye NullReferenceException kam karta hai par poori tarah rok nahi sakta."
      },
      explain: {
        en: "<ul>\n<li>C# 8 feature; enabled by default in new project templates since .NET 6 (<code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code>).</li>\n<li>Why it cannot fully prevent NRE: warnings can be ignored or silenced with <code>!</code>; code compiled without NRT (old libraries) can pass null; deserialization and reflection can set null into non-nullable properties; arrays of a non-nullable type start with nulls.</li>\n<li>Key warnings: CS8600, CS8602, CS8603, CS8618, CS8625. Common fixes: <code>required</code> members, constructors that set everything, <code>?.</code>/<code>??</code>, guard clauses, <code>[NotNullWhen]</code> on <code>TryGet</code> methods.</li>\n<li><code>string?</code> is only an annotation (same runtime type). <code>int?</code> is a different runtime type, <code>Nullable&lt;int&gt;</code>.</li>\n</ul>\n<p>Follow-up: \"How would you introduce NRT in a 10-year-old codebase?\" — enable it <b>file by file</b> (<code>#nullable enable</code>), starting with new code and core domain types; fix warnings in small PRs; once a project is clean, turn it on in the project file and make nullable warnings errors so the debt does not come back.</p>",
        hi: "<ul>\n<li>C# 8 का feature; .NET 6 से नए project templates में by default enabled (<code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code>)।</li>\n<li>यह NRE को पूरी तरह क्यों नहीं रोक सकता: warnings ignore की जा सकती हैं या <code>!</code> से चुप कराई जा सकती हैं; बिना NRT के compile हुआ code (पुरानी libraries) null pass कर सकता है; deserialization और reflection non-nullable properties में null डाल सकते हैं; non-nullable type के arrays nulls के साथ शुरू होते हैं।</li>\n<li>मुख्य warnings: CS8600, CS8602, CS8603, CS8618, CS8625। आम fixes: <code>required</code> members, सब कुछ set करने वाले constructors, <code>?.</code>/<code>??</code>, guard clauses, <code>TryGet</code> methods पर <code>[NotNullWhen]</code>।</li>\n<li><code>string?</code> सिर्फ़ एक annotation है (runtime type वही)। <code>int?</code> एक अलग runtime type है, <code>Nullable&lt;int&gt;</code>।</li>\n</ul>\n<p>Follow-up: \"10 साल पुराने codebase में NRT कैसे लाओगे?\" — इसे <b>file by file</b> enable करो (<code>#nullable enable</code>), नए code और core domain types से शुरू करके; warnings छोटे PRs में ठीक करो; जब project साफ़ हो जाए, तो project file में on करो और nullable warnings को errors बना दो ताकि यह कर्ज़ वापस न आए।</p>",
        hg: "<ul>\n<li>C# 8 ka feature; .NET 6 se naye project templates mein by default enabled (<code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code>).</li>\n<li>Yeh NRE ko poori tarah kyun nahi rok sakta: warnings ignore ki ja sakti hain ya <code>!</code> se chup karayi ja sakti hain; bina NRT ke compile hua code (purani libraries) null pass kar sakta hai; deserialization aur reflection non-nullable properties mein null daal sakte hain; non-nullable type ke arrays nulls ke saath shuru hote hain.</li>\n<li>Mukhya warnings: CS8600, CS8602, CS8603, CS8618, CS8625. Aam fixes: <code>required</code> members, sab kuch set karne wale constructors, <code>?.</code>/<code>??</code>, guard clauses, <code>TryGet</code> methods par <code>[NotNullWhen]</code>.</li>\n<li><code>string?</code> sirf ek annotation hai (runtime type wahi). <code>int?</code> ek alag runtime type hai, <code>Nullable&lt;int&gt;</code>.</li>\n</ul>\n<p>Follow-up: \"10 saal purane codebase mein NRT kaise laaoge?\" — ise <b>file by file</b> enable karo (<code>#nullable enable</code>), naye code aur core domain types se shuru karke; warnings chhote PRs mein theek karo; jab project saaf ho jaaye, to project file mein on karo aur nullable warnings ko errors bana do taaki yeh karz wapas na aaye.</p>"
      }
    },
    {
      id: "span-memory",
      depth: "detailed",
      q: "What is Span&lt;T&gt;, and why is it fast? How is it different from Memory&lt;T&gt;?",
      answer: "Span&lt;T&gt; is a stack-only view over contiguous memory, so slicing and parsing need no copies or heap allocations. Memory&lt;T&gt; is the heap-storable version you can keep in fields and use across await.",
      meaning: {
        hi: "Span&lt;T&gt; लगातार memory पर एक stack-only view है, इसलिए slicing और parsing में न copy चाहिए न heap allocation। Memory&lt;T&gt; उसका heap पर रखा जा सकने वाला version है, जिसे fields में रख सकते हो और await के पार use कर सकते हो।",
        hg: "Span&lt;T&gt; lagaataar memory par ek stack-only view hai, isliye slicing aur parsing mein na copy chahiye na heap allocation. Memory&lt;T&gt; uska heap par rakha ja sakne wala version hai, jise fields mein rakh sakte ho aur await ke paar use kar sakte ho."
      },
      explain: {
        en: "<ul>\n<li>A span is basically a <b>reference + length</b>. <code>text.AsSpan(4, 10)</code> just points into the existing string — <code>Substring</code> would allocate a new string. Fewer allocations → less GC work → better throughput in hot paths.</li>\n<li>It is a <code>ref struct</code>: stack-only. Hence the rules — no class fields (CS8345), no boxing, no lambda capture (CS8175), not across <code>await</code> (CS4007), no normal generic arguments (CS9244). In <b>C# 13</b>, span locals are allowed inside async methods and iterators as long as they are not used across an <code>await</code>/<code>yield</code>; before that they were not allowed there at all.</li>\n<li><code>Memory&lt;T&gt;</code>/<code>ReadOnlyMemory&lt;T&gt;</code>: a normal struct you can store and pass through async code; get <code>.Span</code> where you do the synchronous work.</li>\n<li>Friends: <code>stackalloc</code> for small buffers; <code>ArrayPool&lt;T&gt;</code> for large ones; <code>string.Create</code>, <code>TryFormat</code>, <code>Utf8Parser</code>/<code>Utf8Formatter</code> for allocation-free formatting.</li>\n</ul>\n<p>Follow-up: \"Have you used it in business code?\" — A good honest answer: \"Mostly I benefit through the framework (Kestrel, System.Text.Json). I would use it directly only in a measured hot path, like parsing large files or a high-traffic endpoint, and verify with BenchmarkDotNet.\"</p>",
        hi: "<ul>\n<li>Span असल में <b>reference + length</b> है। <code>text.AsSpan(4, 10)</code> बस मौजूदा string के अंदर point करता है — <code>Substring</code> एक नई string allocate करता। कम allocations → GC का कम काम → hot paths में बेहतर throughput।</li>\n<li>यह <code>ref struct</code> है: सिर्फ़ stack पर। इसीलिए rules — class fields नहीं (CS8345), boxing नहीं, lambda capture नहीं (CS8175), <code>await</code> के पार नहीं (CS4007), normal generic arguments नहीं (CS9244)। <b>C# 13</b> में span locals async methods और iterators के अंदर allowed हैं, जब तक वो <code>await</code>/<code>yield</code> के पार use न हों; उससे पहले वहाँ बिल्कुल allowed नहीं थे।</li>\n<li><code>Memory&lt;T&gt;</code>/<code>ReadOnlyMemory&lt;T&gt;</code>: एक normal struct जिसे आप store कर सकते हो और async code में आगे दे सकते हो; जहाँ synchronous काम करना है वहाँ <code>.Span</code> लो।</li>\n<li>साथी: छोटे buffers के लिए <code>stackalloc</code>; बड़ों के लिए <code>ArrayPool&lt;T&gt;</code>; allocation-free formatting के लिए <code>string.Create</code>, <code>TryFormat</code>, <code>Utf8Parser</code>/<code>Utf8Formatter</code>।</li>\n</ul>\n<p>Follow-up: \"क्या आपने business code में इसे use किया है?\" — एक अच्छा, ईमानदार जवाब: \"ज़्यादातर फ़ायदा मुझे framework (Kestrel, System.Text.Json) से मिलता है। सीधे इसे सिर्फ़ किसी measured hot path में use करूँगा, जैसे बड़ी files parse करना या high-traffic endpoint, और BenchmarkDotNet से verify करूँगा।\"</p>",
        hg: "<ul>\n<li>Span asal mein <b>reference + length</b> hai. <code>text.AsSpan(4, 10)</code> bas maujooda string ke andar point karta hai — <code>Substring</code> ek nayi string allocate karta. Kam allocations → GC ka kam kaam → hot paths mein behtar throughput.</li>\n<li>Yeh <code>ref struct</code> hai: sirf stack par. Isiliye rules — class fields nahi (CS8345), boxing nahi, lambda capture nahi (CS8175), <code>await</code> ke paar nahi (CS4007), normal generic arguments nahi (CS9244). <b>C# 13</b> mein span locals async methods aur iterators ke andar allowed hain, jab tak woh <code>await</code>/<code>yield</code> ke paar use na hon; usse pehle wahan bilkul allowed nahi the.</li>\n<li><code>Memory&lt;T&gt;</code>/<code>ReadOnlyMemory&lt;T&gt;</code>: ek normal struct jise aap store kar sakte ho aur async code mein aage de sakte ho; jahan synchronous kaam karna hai wahan <code>.Span</code> lo.</li>\n<li>Saathi: chhote buffers ke liye <code>stackalloc</code>; badon ke liye <code>ArrayPool&lt;T&gt;</code>; allocation-free formatting ke liye <code>string.Create</code>, <code>TryFormat</code>, <code>Utf8Parser</code>/<code>Utf8Formatter</code>.</li>\n</ul>\n<p>Follow-up: \"Kya aapne business code mein ise use kiya hai?\" — Ek achha, imaandaar jawaab: \"Zyadatar fayda mujhe framework (Kestrel, System.Text.Json) se milta hai. Seedhe ise sirf kisi measured hot path mein use karunga, jaise badi files parse karna ya high-traffic endpoint, aur BenchmarkDotNet se verify karunga.\"</p>"
      }
    }
  ],
  puzzles: [
    {
      id: "async-sync-until-await",
      src: "Console.WriteLine(\"A\");\nTask task = PrintAsync();\nConsole.WriteLine(\"C\");\nawait task;\nConsole.WriteLine(\"E\");\n\nstatic async Task PrintAsync()\n{\n    Console.WriteLine(\"B\");\n    await Task.CompletedTask;\n    Console.WriteLine(\"D\");\n}",
      answer: "A\nB\nD\nC\nE",
      explain: {
        en: "<ul>\n<li>Calling <code>PrintAsync()</code> runs it <b>synchronously</b> on the same thread: it prints <b>B</b>.</li>\n<li><code>await Task.CompletedTask</code> awaits a task that is <b>already complete</b>, so there is no pause — it continues at once and prints <b>D</b>, then the method finishes.</li>\n<li>Only then does control return to the caller: <b>C</b>, then <code>await task</code> (already complete) and <b>E</b>.</li>\n<li>Lesson: <code>async</code> does not mean \"runs in the background\". A method pauses only at an <code>await</code> on an <b>incomplete</b> task.</li>\n</ul>",
        hi: "<ul>\n<li><code>PrintAsync()</code> call करने पर वो उसी thread पर <b>synchronously</b> चलता है: <b>B</b> print होता है।</li>\n<li><code>await Task.CompletedTask</code> ऐसे task पर await है जो <b>पहले से complete</b> है, इसलिए कोई रुकावट नहीं — वो तुरंत आगे चलता है और <b>D</b> print करता है, फिर method ख़त्म।</li>\n<li>उसके बाद ही control caller को वापस मिलता है: <b>C</b>, फिर <code>await task</code> (पहले से complete) और <b>E</b>।</li>\n<li>सीख: <code>async</code> का मतलब \"background में चलना\" नहीं है। Method सिर्फ़ किसी <b>अधूरे</b> task पर <code>await</code> पर रुकता है।</li>\n</ul>",
        hg: "<ul>\n<li><code>PrintAsync()</code> call karne par woh usi thread par <b>synchronously</b> chalta hai: <b>B</b> print hota hai.</li>\n<li><code>await Task.CompletedTask</code> aise task par await hai jo <b>pehle se complete</b> hai, isliye koi rukaawat nahi — woh turant aage chalta hai aur <b>D</b> print karta hai, phir method khatam.</li>\n<li>Uske baad hi control caller ko wapas milta hai: <b>C</b>, phir <code>await task</code> (pehle se complete) aur <b>E</b>.</li>\n<li>Seekh: <code>async</code> ka matlab \"background mein chalna\" nahi hai. Method sirf kisi <b>adhoore</b> task par <code>await</code> par rukta hai.</li>\n</ul>"
      }
    },
    {
      id: "async-exception-timing",
      src: "Task t1 = CheckAsync(-5);\nConsole.WriteLine($\"got a task, faulted = {t1.IsFaulted}\");\n\ntry\n{\n    _ = Check(-5);\n    Console.WriteLine(\"after Check\");\n}\ncatch (ArgumentException)\n{\n    Console.WriteLine(\"Check threw at the call\");\n}\n\ntry\n{\n    await t1;\n}\ncatch (ArgumentException)\n{\n    Console.WriteLine(\"CheckAsync threw at await\");\n}\n\nstatic async Task CheckAsync(int qty)\n{\n    if (qty < 0) throw new ArgumentException(\"qty must be positive\");\n    await Task.CompletedTask;\n}\n\nstatic Task Check(int qty)\n{\n    if (qty < 0) throw new ArgumentException(\"qty must be positive\");\n    return Task.CompletedTask;\n}",
      answer: "got a task, faulted = True\nCheck threw at the call\nCheckAsync threw at await",
      explain: {
        en: "<ul>\n<li>In an <code>async</code> method, <b>every</b> exception — even one thrown before the first <code>await</code> — is caught by the generated code and <b>stored in the returned Task</b>. So <code>CheckAsync(-5)</code> returns a faulted task without throwing.</li>\n<li><code>Check</code> is <b>not</b> <code>async</code>; it is a normal method that happens to return a <code>Task</code>. Its exception is thrown immediately at the call, and \"after Check\" never prints.</li>\n<li><code>await t1</code> rethrows the stored exception.</li>\n<li>Practical point: argument validation inside an <code>async</code> method fails only when someone awaits the task. If you want it to fail fast, validate in a non-async wrapper and then call an async local function.</li>\n</ul>",
        hi: "<ul>\n<li><code>async</code> method में <b>हर</b> exception — पहले <code>await</code> से पहले throw हुआ भी — generated code पकड़ लेता है और <b>return होने वाले Task में store</b> कर देता है। इसलिए <code>CheckAsync(-5)</code> बिना throw किए एक faulted task return करता है।</li>\n<li><code>Check</code> <code>async</code> <b>नहीं</b> है; यह एक normal method है जो बस <code>Task</code> return करता है। इसका exception call पर ही तुरंत throw होता है, और \"after Check\" कभी print नहीं होता।</li>\n<li><code>await t1</code> store हुआ exception दोबारा throw करता है।</li>\n<li>काम की बात: <code>async</code> method के अंदर argument validation तभी fail होता है जब कोई task को await करे। अगर तुरंत fail करवाना है, तो non-async wrapper में validate करो और फिर async local function call करो।</li>\n</ul>",
        hg: "<ul>\n<li><code>async</code> method mein <b>har</b> exception — pehle <code>await</code> se pehle throw hua bhi — generated code pakad leta hai aur <b>return hone wale Task mein store</b> kar deta hai. Isliye <code>CheckAsync(-5)</code> bina throw kiye ek faulted task return karta hai.</li>\n<li><code>Check</code> <code>async</code> <b>nahi</b> hai; yeh ek normal method hai jo bas <code>Task</code> return karta hai. Iska exception call par hi turant throw hota hai, aur \"after Check\" kabhi print nahi hota.</li>\n<li><code>await t1</code> store hua exception dobara throw karta hai.</li>\n<li>Kaam ki baat: <code>async</code> method ke andar argument validation tabhi fail hota hai jab koi task ko await kare. Agar turant fail karwana hai, to non-async wrapper mein validate karo aur phir async local function call karo.</li>\n</ul>"
      }
    },
    {
      id: "whenall-argument-order",
      src: "Task a = Task.FromException(new InvalidOperationException(\"A failed\"));\nTask b = Task.CompletedTask;\nTask c = Task.FromException(new TimeoutException(\"C failed\"));\n\nTask all = Task.WhenAll(c, b, a);\ntry\n{\n    await all;\n}\ncatch (Exception ex)\n{\n    Console.WriteLine($\"{ex.GetType().Name}: {ex.Message}\");\n}\nConsole.WriteLine(all.Exception!.InnerExceptions.Count);\nConsole.WriteLine(b.IsCompletedSuccessfully);",
      answer: "TimeoutException: C failed\n2\nTrue",
      explain: {
        en: "<ul>\n<li>All three tasks are already finished, so nothing depends on timing.</li>\n<li><code>WhenAll(c, b, a)</code> collects the exceptions in the <b>order the tasks were passed</b>: first <code>c</code>'s <code>TimeoutException</code>, then <code>a</code>'s <code>InvalidOperationException</code>.</li>\n<li><code>await</code> rethrows only the <b>first</b> one → <b>TimeoutException: C failed</b> — not wrapped in <code>AggregateException</code>.</li>\n<li>The <code>WhenAll</code> task still holds <b>both</b> exceptions → <b>2</b>. Task <code>b</code> itself succeeded → <b>True</b>.</li>\n</ul>",
        hi: "<ul>\n<li>तीनों tasks पहले से ख़त्म हैं, इसलिए कुछ भी timing पर depend नहीं करता।</li>\n<li><code>WhenAll(c, b, a)</code> exceptions को <b>उसी order में</b> जमा करता है जिसमें tasks दिए गए: पहले <code>c</code> का <code>TimeoutException</code>, फिर <code>a</code> का <code>InvalidOperationException</code>।</li>\n<li><code>await</code> सिर्फ़ <b>पहला</b> दोबारा throw करता है → <b>TimeoutException: C failed</b> — <code>AggregateException</code> में लिपटा हुआ नहीं।</li>\n<li><code>WhenAll</code> वाला task अब भी <b>दोनों</b> exceptions रखता है → <b>2</b>। Task <code>b</code> ख़ुद सफल रहा → <b>True</b>।</li>\n</ul>",
        hg: "<ul>\n<li>Teeno tasks pehle se khatam hain, isliye kuch bhi timing par depend nahi karta.</li>\n<li><code>WhenAll(c, b, a)</code> exceptions ko <b>usi order mein</b> jama karta hai jismein tasks diye gaye: pehle <code>c</code> ka <code>TimeoutException</code>, phir <code>a</code> ka <code>InvalidOperationException</code>.</li>\n<li><code>await</code> sirf <b>pehla</b> dobara throw karta hai → <b>TimeoutException: C failed</b> — <code>AggregateException</code> mein lipta hua nahi.</li>\n<li><code>WhenAll</code> wala task ab bhi <b>dono</b> exceptions rakhta hai → <b>2</b>. Task <code>b</code> khud safal raha → <b>True</b>.</li>\n</ul>"
      }
    },
    {
      id: "exception-filter-order",
      src: "try\n{\n    try\n    {\n        Console.WriteLine(\"try\");\n        throw new InvalidOperationException(\"boom\");\n    }\n    finally\n    {\n        Console.WriteLine(\"inner finally\");\n    }\n}\ncatch (InvalidOperationException) when (Log(\"filter\"))\n{\n    Console.WriteLine(\"catch\");\n}\n\nstatic bool Log(string message)\n{\n    Console.WriteLine(message);\n    return true;\n}",
      answer: "try\nfilter\ninner finally\ncatch",
      explain: {
        en: "<ul>\n<li>.NET handles an exception in <b>two passes</b>. Pass 1 searches up the stack for a matching <code>catch</code> — and runs <b>exception filters</b> (<code>when</code>) while searching. Pass 2 unwinds: it runs the <code>finally</code> blocks on the way, then the chosen <code>catch</code> body.</li>\n<li>So the filter prints <b>filter</b> <i>before</i> the inner <b>finally</b>, and <b>catch</b> comes last.</li>\n<li>This is why a filter sees the stack and state exactly as they were at the throw — useful for logging (<code>when (Log(ex))</code> returning <code>false</code> logs without catching).</li>\n</ul>",
        hi: "<ul>\n<li>.NET exception को <b>दो passes</b> में संभालता है। Pass 1 stack में ऊपर matching <code>catch</code> ढूँढता है — और ढूँढते समय <b>exception filters</b> (<code>when</code>) चलाता है। Pass 2 unwind करता है: रास्ते के <code>finally</code> blocks चलाता है, फिर चुने गए <code>catch</code> की body।</li>\n<li>इसलिए filter अंदर वाले <b>finally</b> से <i>पहले</i> <b>filter</b> print करता है, और <b>catch</b> सबसे आख़िर में आता है।</li>\n<li>इसीलिए filter को stack और state बिल्कुल वैसे ही दिखते हैं जैसे throw के समय थे — logging के लिए काम का (<code>false</code> return करने वाला <code>when (Log(ex))</code> बिना पकड़े log करता है)।</li>\n</ul>",
        hg: "<ul>\n<li>.NET exception ko <b>do passes</b> mein sambhaalta hai. Pass 1 stack mein upar matching <code>catch</code> dhoondhta hai — aur dhoondhte samay <b>exception filters</b> (<code>when</code>) chalata hai. Pass 2 unwind karta hai: raaste ke <code>finally</code> blocks chalata hai, phir chune gaye <code>catch</code> ki body.</li>\n<li>Isliye filter andar wale <b>finally</b> se <i>pehle</i> <b>filter</b> print karta hai, aur <b>catch</b> sabse aakhir mein aata hai.</li>\n<li>Isiliye filter ko stack aur state bilkul waise hi dikhte hain jaise throw ke samay the — logging ke liye kaam ka (<code>false</code> return karne wala <code>when (Log(ex))</code> bina pakde log karta hai).</li>\n</ul>"
      }
    },
    {
      id: "finally-return",
      src: "Console.WriteLine(GetQty());\nConsole.WriteLine(GetCart().Count);\n\nstatic int GetQty()\n{\n    int qty = 1;\n    try\n    {\n        return qty;\n    }\n    finally\n    {\n        qty = 99;\n        Console.WriteLine(\"finally runs\");\n    }\n}\n\nstatic List<string> GetCart()\n{\n    var cart = new List<string> { \"Atta\" };\n    try\n    {\n        return cart;\n    }\n    finally\n    {\n        cart.Add(\"Dal\");\n    }\n}",
      answer: "finally runs\n1\n2",
      explain: {
        en: "<ul>\n<li><code>finally</code> runs <b>after</b> the <code>return</code> expression is evaluated but <b>before</b> the method actually returns — so \"finally runs\" prints first.</li>\n<li><code>return qty;</code> copies the <b>value</b> 1 into the return slot. Changing the local <code>qty</code> to 99 in <code>finally</code> does not change that copy → <b>1</b>.</li>\n<li><code>return cart;</code> copies the <b>reference</b>. <code>finally</code> adds to the <b>same list object</b>, so the caller sees 2 items → <b>2</b>. (Value vs reference — Day 2.)</li>\n<li>Code-review note: changing state in <code>finally</code> like this is confusing; keep <code>finally</code> for cleanup.</li>\n</ul>",
        hi: "<ul>\n<li><code>finally</code> <code>return</code> expression evaluate होने के <b>बाद</b> पर method के सच में return होने से <b>पहले</b> चलता है — इसलिए \"finally runs\" पहले print होता है।</li>\n<li><code>return qty;</code> <b>value</b> 1 को return slot में copy करता है। <code>finally</code> में local <code>qty</code> को 99 करने से वो copy नहीं बदलती → <b>1</b>।</li>\n<li><code>return cart;</code> <b>reference</b> copy करता है। <code>finally</code> <b>उसी list object</b> में जोड़ता है, इसलिए caller को 2 items दिखते हैं → <b>2</b>। (Value बनाम reference — Day 2।)</li>\n<li>Code-review note: <code>finally</code> में ऐसे state बदलना confusing है; <code>finally</code> को cleanup के लिए रखो।</li>\n</ul>",
        hg: "<ul>\n<li><code>finally</code> <code>return</code> expression evaluate hone ke <b>baad</b> par method ke sach mein return hone se <b>pehle</b> chalta hai — isliye \"finally runs\" pehle print hota hai.</li>\n<li><code>return qty;</code> <b>value</b> 1 ko return slot mein copy karta hai. <code>finally</code> mein local <code>qty</code> ko 99 karne se woh copy nahi badalti → <b>1</b>.</li>\n<li><code>return cart;</code> <b>reference</b> copy karta hai. <code>finally</code> <b>usi list object</b> mein jodta hai, isliye caller ko 2 items dikhte hain → <b>2</b>. (Value vs reference — Day 2.)</li>\n<li>Code-review note: <code>finally</code> mein aise state badalna confusing hai; <code>finally</code> ko cleanup ke liye rakho.</li>\n</ul>"
      }
    },
    {
      id: "using-dispose-with-exception",
      src: "try\n{\n    using var connection = new Resource(\"connection\");\n    using var file = new Resource(\"file\");\n    Console.WriteLine(\"work\");\n    throw new InvalidOperationException(\"disk full\");\n}\ncatch (InvalidOperationException ex)\n{\n    Console.WriteLine($\"catch: {ex.Message}\");\n}\nfinally\n{\n    Console.WriteLine(\"outer finally\");\n}\n\nsealed class Resource(string name) : IDisposable\n{\n    public void Dispose() => Console.WriteLine($\"dispose {name}\");\n}",
      answer: "work\ndispose file\ndispose connection\ncatch: disk full\nouter finally",
      explain: {
        en: "<ul>\n<li>Each <code>using var</code> is a hidden <code>try/finally</code> that ends with the enclosing block — here the <code>try</code> block.</li>\n<li>When the exception leaves the <code>try</code> block, those hidden <code>finally</code> blocks run first, in <b>reverse order</b>: <b>dispose file</b>, then <b>dispose connection</b>.</li>\n<li>Then the <code>catch</code> body runs (<b>catch: disk full</b>), and finally the outer <code>finally</code>.</li>\n<li>Lesson: resources are released even when things fail — and by the time your <code>catch</code> runs, they are already disposed.</li>\n</ul>",
        hi: "<ul>\n<li>हर <code>using var</code> एक छुपा हुआ <code>try/finally</code> है जो enclosing block के साथ ख़त्म होता है — यहाँ <code>try</code> block।</li>\n<li>जब exception <code>try</code> block से बाहर निकलता है, तो वो छुपे <code>finally</code> blocks पहले चलते हैं, <b>उल्टे order</b> में: <b>dispose file</b>, फिर <b>dispose connection</b>।</li>\n<li>फिर <code>catch</code> की body चलती है (<b>catch: disk full</b>), और आख़िर में outer <code>finally</code>।</li>\n<li>सीख: चीज़ें fail होने पर भी resources छूट जाते हैं — और जब तक आपका <code>catch</code> चलता है, वो पहले ही dispose हो चुके होते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Har <code>using var</code> ek chhupa hua <code>try/finally</code> hai jo enclosing block ke saath khatam hota hai — yahan <code>try</code> block.</li>\n<li>Jab exception <code>try</code> block se bahar nikalta hai, to woh chhupe <code>finally</code> blocks pehle chalte hain, <b>ulte order</b> mein: <b>dispose file</b>, phir <b>dispose connection</b>.</li>\n<li>Phir <code>catch</code> ki body chalti hai (<b>catch: disk full</b>), aur aakhir mein outer <code>finally</code>.</li>\n<li>Seekh: cheezein fail hone par bhi resources chhoot jaate hain — aur jab tak aapka <code>catch</code> chalta hai, woh pehle hi dispose ho chuke hote hain.</li>\n</ul>"
      }
    },
    {
      id: "record-vs-class-equality",
      src: "var set = new HashSet<object> { new PointClass(1, 2), new PointRecord(1, 2) };\nConsole.WriteLine(set.Contains(new PointClass(1, 2)));\nConsole.WriteLine(set.Contains(new PointRecord(1, 2)));\n\nvar r1 = new PointRecord(1, 2);\nvar r2 = r1 with { Y = 5 };\nConsole.WriteLine($\"{r1} {r2}\");\nConsole.WriteLine(r1 == (r2 with { Y = 2 }));\n\npublic class PointClass(int x, int y)\n{\n    public int X => x;\n    public int Y => y;\n}\n\npublic record PointRecord(int X, int Y);",
      answer: "False\nTrue\nPointRecord { X = 1, Y = 2 } PointRecord { X = 1, Y = 5 }\nTrue",
      explain: {
        en: "<ul>\n<li>A normal class uses <b>reference</b> equality: a new <code>PointClass(1, 2)</code> is a different object, so the set does not contain it → <b>False</b>. (A primary constructor does not add value equality.)</li>\n<li>A record overrides <code>Equals</code> and <code>GetHashCode</code> using its values, so a new <code>PointRecord(1, 2)</code> is found → <b>True</b>.</li>\n<li><code>with</code> creates a <b>new</b> record and leaves <code>r1</code> unchanged; the generated <code>ToString()</code> prints the values.</li>\n<li><code>r2 with { Y = 2 }</code> has the same values as <code>r1</code> → <code>==</code> is <b>True</b>.</li>\n</ul>",
        hi: "<ul>\n<li>Normal class <b>reference</b> equality use करती है: नया <code>PointClass(1, 2)</code> एक अलग object है, इसलिए set में नहीं मिलता → <b>False</b>। (Primary constructor value equality नहीं जोड़ता।)</li>\n<li>Record अपनी values से <code>Equals</code> और <code>GetHashCode</code> override करता है, इसलिए नया <code>PointRecord(1, 2)</code> मिल जाता है → <b>True</b>।</li>\n<li><code>with</code> एक <b>नया</b> record बनाता है और <code>r1</code> को नहीं बदलता; generated <code>ToString()</code> values print करता है।</li>\n<li><code>r2 with { Y = 2 }</code> की values <code>r1</code> जैसी ही हैं → <code>==</code> <b>True</b> है।</li>\n</ul>",
        hg: "<ul>\n<li>Normal class <b>reference</b> equality use karti hai: naya <code>PointClass(1, 2)</code> ek alag object hai, isliye set mein nahi milta → <b>False</b>. (Primary constructor value equality nahi jodta.)</li>\n<li>Record apni values se <code>Equals</code> aur <code>GetHashCode</code> override karta hai, isliye naya <code>PointRecord(1, 2)</code> mil jaata hai → <b>True</b>.</li>\n<li><code>with</code> ek <b>naya</b> record banata hai aur <code>r1</code> ko nahi badalta; generated <code>ToString()</code> values print karta hai.</li>\n<li><code>r2 with { Y = 2 }</code> ki values <code>r1</code> jaisi hi hain → <code>==</code> <b>True</b> hai.</li>\n</ul>"
      }
    },
    {
      id: "switch-first-match",
      src: "object?[] inputs = [500, 5, 5L, \"\", \"chai\", 2.5, null];\nforeach (object? input in inputs)\n    Console.WriteLine(Classify(input));\n\nstatic string Classify(object? value) => value switch\n{\n    int n when n > 100 => \"big int\",\n    int => \"int\",\n    long or short => \"other whole number\",\n    string { Length: 0 } => \"empty string\",\n    string s => $\"string of {s.Length}\",\n    _ => \"something else\"\n};",
      answer: "big int\nint\nother whole number\nempty string\nstring of 4\nsomething else\nsomething else",
      explain: {
        en: "<ul>\n<li>Arms are tried <b>top to bottom</b>; the first match wins. 500 matches <code>int n when n &gt; 100</code>; 5 fails the <code>when</code> guard and falls to <code>int</code>.</li>\n<li><code>5L</code> is a <code>long</code>, not an <code>int</code> → <b>other whole number</b>.</li>\n<li><code>\"\"</code> matches the property pattern <code>{ Length: 0 }</code> before the general <code>string s</code> arm.</li>\n<li><code>2.5</code> (a <code>double</code>) matches nothing specific → <code>_</code>.</li>\n<li><code>null</code>: type patterns <b>never</b> match null, but the discard <code>_</code> matches <b>everything, including null</b> → <b>something else</b>. Add an explicit <code>null =&gt;</code> arm if null needs its own answer.</li>\n</ul>",
        hi: "<ul>\n<li>Arms <b>ऊपर से नीचे</b> try होते हैं; पहला match जीतता है। 500 <code>int n when n &gt; 100</code> से match करता है; 5 <code>when</code> guard में fail होकर <code>int</code> पर गिरता है।</li>\n<li><code>5L</code> एक <code>long</code> है, <code>int</code> नहीं → <b>other whole number</b>।</li>\n<li><code>\"\"</code> general <code>string s</code> arm से पहले property pattern <code>{ Length: 0 }</code> से match करता है।</li>\n<li><code>2.5</code> (एक <code>double</code>) किसी specific arm से match नहीं करता → <code>_</code>।</li>\n<li><code>null</code>: type patterns null से <b>कभी</b> match नहीं करते, पर discard <code>_</code> <b>सब कुछ, null समेत</b>, match करता है → <b>something else</b>। अगर null का अलग जवाब चाहिए तो explicit <code>null =&gt;</code> arm जोड़ो।</li>\n</ul>",
        hg: "<ul>\n<li>Arms <b>upar se neeche</b> try hote hain; pehla match jeetta hai. 500 <code>int n when n &gt; 100</code> se match karta hai; 5 <code>when</code> guard mein fail hokar <code>int</code> par girta hai.</li>\n<li><code>5L</code> ek <code>long</code> hai, <code>int</code> nahi → <b>other whole number</b>.</li>\n<li><code>\"\"</code> general <code>string s</code> arm se pehle property pattern <code>{ Length: 0 }</code> se match karta hai.</li>\n<li><code>2.5</code> (ek <code>double</code>) kisi specific arm se match nahi karta → <code>_</code>.</li>\n<li><code>null</code>: type patterns null se <b>kabhi</b> match nahi karte, par discard <code>_</code> <b>sab kuch, null samet</b>, match karta hai → <b>something else</b>. Agar null ka alag jawaab chahiye to explicit <code>null =&gt;</code> arm jodo.</li>\n</ul>"
      }
    },
    {
      id: "nullable-operators",
      src: "int? stock = null;\nConsole.WriteLine(stock > 0);\nConsole.WriteLine(stock <= 0);\nConsole.WriteLine(stock == null);\nConsole.WriteLine((stock + 5) ?? -1);\n\nstring? name = null;\nConsole.WriteLine(name?.Length ?? 0);\nConsole.WriteLine($\"[{name}]\");\nname ??= \"guest\";\nConsole.WriteLine(name.ToUpper());",
      answer: "False\nFalse\nTrue\n-1\n0\n[]\nGUEST",
      explain: {
        en: "<ul>\n<li>The comparisons <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> with a null <code>int?</code> operand are <b>always false</b> — so <code>stock &gt; 0</code> and <code>stock &lt;= 0</code> are <b>both</b> false. Easy to miss in a <code>if (stock &lt;= 0) Reorder();</code> check.</li>\n<li><code>==</code> and <code>!=</code> with null work as expected (<code>null != 5</code> is true) → <b>True</b>.</li>\n<li>Arithmetic with null gives null (<code>null + 5</code> is null), so <code>??</code> picks <b>-1</b>.</li>\n<li><code>name?.Length</code> is null → <code>?? 0</code> → <b>0</b>. Interpolating null prints an empty string → <b>[]</b>.</li>\n<li><code>??=</code> assigns only because <code>name</code> is null → <b>GUEST</b>. After it, the compiler knows <code>name</code> is not null, so <code>name.ToUpper()</code> gives no warning.</li>\n</ul>",
        hi: "<ul>\n<li>Null <code>int?</code> operand के साथ comparisons <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> <b>हमेशा false</b> होते हैं — इसलिए <code>stock &gt; 0</code> और <code>stock &lt;= 0</code> <b>दोनों</b> false हैं। <code>if (stock &lt;= 0) Reorder();</code> जैसे check में यह आसानी से छूट जाता है।</li>\n<li>Null के साथ <code>==</code> और <code>!=</code> उम्मीद के मुताबिक़ चलते हैं (<code>null != 5</code> true है) → <b>True</b>।</li>\n<li>Null के साथ arithmetic null देता है (<code>null + 5</code> null है), इसलिए <code>??</code> <b>-1</b> चुनता है।</li>\n<li><code>name?.Length</code> null है → <code>?? 0</code> → <b>0</b>। Null को interpolate करने पर empty string print होती है → <b>[]</b>।</li>\n<li><code>??=</code> सिर्फ़ इसलिए assign करता है क्योंकि <code>name</code> null है → <b>GUEST</b>। उसके बाद compiler जानता है कि <code>name</code> null नहीं है, इसलिए <code>name.ToUpper()</code> पर warning नहीं आती।</li>\n</ul>",
        hg: "<ul>\n<li>Null <code>int?</code> operand ke saath comparisons <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> <b>hamesha false</b> hote hain — isliye <code>stock &gt; 0</code> aur <code>stock &lt;= 0</code> <b>dono</b> false hain. <code>if (stock &lt;= 0) Reorder();</code> jaise check mein yeh aasaani se chhoot jaata hai.</li>\n<li>Null ke saath <code>==</code> aur <code>!=</code> ummeed ke mutaabik chalte hain (<code>null != 5</code> true hai) → <b>True</b>.</li>\n<li>Null ke saath arithmetic null deta hai (<code>null + 5</code> null hai), isliye <code>??</code> <b>-1</b> chunta hai.</li>\n<li><code>name?.Length</code> null hai → <code>?? 0</code> → <b>0</b>. Null ko interpolate karne par empty string print hoti hai → <b>[]</b>.</li>\n<li><code>??=</code> sirf isliye assign karta hai kyunki <code>name</code> null hai → <b>GUEST</b>. Uske baad compiler jaanta hai ki <code>name</code> null nahi hai, isliye <code>name.ToUpper()</code> par warning nahi aati.</li>\n</ul>"
      }
    },
    {
      id: "span-slice-shares-memory",
      src: "int[] marks = [10, 20, 30, 40, 50];\nSpan<int> middle = marks.AsSpan(1, 3);\nmiddle[0] = 99;\nmiddle.Reverse();\nConsole.WriteLine(string.Join(\" \", marks));\n\nint[] copy = middle.ToArray();\ncopy[0] = 0;\nConsole.WriteLine($\"{marks[1]} {copy[0]} {middle.Length}\");",
      answer: "10 40 30 99 50\n40 0 3",
      explain: {
        en: "<ul>\n<li><code>marks.AsSpan(1, 3)</code> is a <b>view</b> over elements 20, 30, 40 of the same array — no copy.</li>\n<li><code>middle[0] = 99</code> changes <code>marks[1]</code> → 10 99 30 40 50. <code>middle.Reverse()</code> reverses <b>in place</b> inside that window → 10 <b>40 30 99</b> 50.</li>\n<li><code>ToArray()</code> makes a real <b>copy</b> (a new heap array). Changing <code>copy[0]</code> does not touch <code>marks</code>, so <code>marks[1]</code> is still <b>40</b>, <code>copy[0]</code> is <b>0</b>, and the span length is <b>3</b>.</li>\n</ul>",
        hi: "<ul>\n<li><code>marks.AsSpan(1, 3)</code> उसी array के elements 20, 30, 40 पर एक <b>view</b> है — कोई copy नहीं।</li>\n<li><code>middle[0] = 99</code> <code>marks[1]</code> को बदलता है → 10 99 30 40 50। <code>middle.Reverse()</code> उस window के अंदर <b>उसी जगह</b> उल्टा करता है → 10 <b>40 30 99</b> 50।</li>\n<li><code>ToArray()</code> असली <b>copy</b> बनाता है (heap पर नया array)। <code>copy[0]</code> बदलने से <code>marks</code> पर असर नहीं, इसलिए <code>marks[1]</code> अब भी <b>40</b>, <code>copy[0]</code> <b>0</b> है, और span की length <b>3</b>।</li>\n</ul>",
        hg: "<ul>\n<li><code>marks.AsSpan(1, 3)</code> usi array ke elements 20, 30, 40 par ek <b>view</b> hai — koi copy nahi.</li>\n<li><code>middle[0] = 99</code> <code>marks[1]</code> ko badalta hai → 10 99 30 40 50. <code>middle.Reverse()</code> us window ke andar <b>usi jagah</b> ulta karta hai → 10 <b>40 30 99</b> 50.</li>\n<li><code>ToArray()</code> asli <b>copy</b> banata hai (heap par naya array). <code>copy[0]</code> badalne se <code>marks</code> par asar nahi, isliye <code>marks[1]</code> ab bhi <b>40</b>, <code>copy[0]</code> <b>0</b> hai, aur span ki length <b>3</b>.</li>\n</ul>"
      }
    }
  ],
  revision: {
    en: [
      "<b>async/await</b> is not multithreading: <code>await</code> frees the thread while a <b>Task</b> (a promise) is incomplete. <b>Thread</b> = you manage it; <b>Task</b> = result, exception, composition.",
      "Independent calls: start them all, then <code>await Task.WhenAll(...)</code>. Results come in <b>argument order</b>. Dependent steps stay sequential.",
      "<b>.Result/.Wait()</b> block a thread (deadlock in UI, starvation in ASP.NET Core). <b>async void</b> only for event handlers. Async all the way.",
      "<b>CancellationToken</b> is cooperative: <code>Cancel()</code> only raises a signal; your code checks it and expects <code>OperationCanceledException</code>.",
      "<code>throw;</code> keeps the stack trace, <code>throw ex;</code> resets it (CA2200). Catch only what you can handle; <code>finally</code> always runs.",
      "The GC frees memory; <b>you</b> release files and connections. <code>using</code> calls <code>Dispose</code> at the end of the scope, even after an exception.",
      "<b>record</b> = value equality + <code>ToString</code> + <code>with</code> (a shallow, changed copy). A switch expression returns a value; the <b>first matching arm wins</b>.",
      "<b>Nullable reference types</b>: <code>string?</code> may be null. Use <code>?.</code>, <code>??</code>, <code>??=</code>, <code>required</code>. Compile-time warnings only; <code>!</code> just hides them.",
      "<b>ConfigureAwait(false)</b> = do not resume on the captured context. Use it in libraries; <b>ASP.NET Core has no SynchronizationContext</b>.",
      "<b>Dispose</b> = deterministic cleanup of resources by your code; <b>finalizer</b> = GC safety net at an unknown time. <code>using</code> disposes in reverse order, even on exceptions."
    ],
    meaning: {
      hi: [
        "async/await multithreading नहीं है: Task (वादा) अधूरा हो तो await thread को आज़ाद कर देता है। Thread आप संभालते हैं; Task = result, exception, जोड़ना",
        "स्वतंत्र calls: सबको शुरू करो, फिर await Task.WhenAll(...)। Results argument के क्रम में आते हैं। निर्भर steps sequential ही रहते हैं",
        ".Result/.Wait() thread रोकते हैं (UI में deadlock, ASP.NET Core में starvation)। async void सिर्फ़ event handlers के लिए। Async all the way",
        "CancellationToken cooperative है: Cancel() सिर्फ़ संकेत उठाता है; आपका code उसे जाँचता है और OperationCanceledException की उम्मीद रखता है",
        "throw; stack trace बचाता है, throw ex; उसे reset करता है (CA2200)। सिर्फ़ वही पकड़ो जो संभाल सको; finally हमेशा चलता है",
        "GC memory छोड़ता है; files और connections आप छोड़ते हैं। using scope के अंत में Dispose बुलाता है, exception के बाद भी",
        "record = value equality + ToString + with (बदली हुई shallow copy)। Switch expression value लौटाती है; पहला मेल खाने वाला arm जीतता है",
        "Nullable reference types: string? null हो सकता है। ?., ??, ??=, required इस्तेमाल करो। सिर्फ़ compile-time warnings; ! बस उन्हें छिपाता है",
        "ConfigureAwait(false) = captured context पर वापस मत आओ। Libraries में use करो; ASP.NET Core में SynchronizationContext नहीं है।",
        "Dispose = आपके code से resources की तय समय पर cleanup; finalizer = अनजान समय पर GC का safety net। using उल्टे order में dispose करता है, exceptions पर भी।"
      ],
      hg: [
        "async/await multithreading nahi hai: Task (waada) adhoora ho to await thread ko aazaad kar deta hai. Thread aap sambhalte hain; Task = result, exception, jodna",
        "Swatantra calls: sabko shuru karo, phir await Task.WhenAll(...). Results argument ke kram mein aate hain. Nirbhar steps sequential hi rehte hain",
        ".Result/.Wait() thread rokte hain (UI mein deadlock, ASP.NET Core mein starvation). async void sirf event handlers ke liye. Async all the way",
        "CancellationToken cooperative hai: Cancel() sirf sanket uthata hai; aapka code use jaanchta hai aur OperationCanceledException ki ummeed rakhta hai",
        "throw; stack trace bachata hai, throw ex; use reset karta hai (CA2200). Sirf wahi pakdo jo sambhal sako; finally hamesha chalta hai",
        "GC memory chhodta hai; files aur connections aap chhodte hain. using scope ke ant mein Dispose bulata hai, exception ke baad bhi",
        "record = value equality + ToString + with (badli hui shallow copy). Switch expression value lautati hai; pehla mel khane wala arm jeetta hai",
        "Nullable reference types: string? null ho sakta hai. ?., ??, ??=, required use karo. Sirf compile-time warnings; ! bas unhe chhipata hai",
        "ConfigureAwait(false) = captured context par wapas mat aao. Libraries mein use karo; ASP.NET Core mein SynchronizationContext nahi hai.",
        "Dispose = aapke code se resources ki tay samay par cleanup; finalizer = anjaan samay par GC ka safety net. using ulte order mein dispose karta hai, exceptions par bhi."
      ]
    }
  }
};
