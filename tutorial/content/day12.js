// Day 12 — ASP.NET Core Fundamentals, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 12,
  format: "lesson",
  title: {
    en: "ASP.NET Core Fundamentals",
    hi: "ASP.NET Core Fundamentals (बुनियाद)",
    hg: "ASP.NET Core Fundamentals (buniyad)"
  },
  summary: {
    en: "<p>Day 12 gives the <b>customer-care CRM</b> a web front in 8 short lessons. First how an app starts: <code>Program.cs</code> and the middleware pipeline, including short-circuiting a request early. Then configuration, environments and logging, and finally filters and the choice between Minimal APIs and controllers.</p><p>Each lesson has a complete program that runs in memory with a test server, so you see real requests and responses without opening a port. Mark a lesson done when you can explain it without looking.</p>",
    hi: "<p>Day 12 में 8 छोटे पाठों में <b>customer-care CRM</b> को web का चेहरा मिलता है। पहले app कैसे शुरू होता है: <code>Program.cs</code> और middleware pipeline, जिसमें request को बीच में रोकना (short-circuit) भी है। फिर configuration, environments और logging, और आख़िर में filters और Minimal APIs बनाम controllers का चुनाव।</p><p>हर पाठ में एक पूरा program है जो test server के साथ memory में चलता है, इसलिए बिना port खोले असली requests और responses दिखते हैं। जब बिना देखे समझा सको, तब पाठ को पूरा mark करो।</p>",
    hg: "<p>Day 12 mein 8 chhote lessons mein <b>customer-care CRM</b> ko web ka chehra milta hai. Pehle app kaise shuru hota hai: <code>Program.cs</code> aur middleware pipeline, jismein request ko beech mein rokna (short-circuit) bhi hai. Phir configuration, environments aur logging, aur aakhir mein filters aur Minimal APIs banam controllers ka chunaav.</p><p>Har lesson mein ek poora program hai jo test server ke saath memory mein chalta hai, isliye bina port khole asli requests aur responses dikhte hain. Jab bina dekhe samjha sako, tab lesson ko poora mark karo.</p>"
  },
  sections: [
    {
      id: "host-program",
      depth: "short",
      title: {
        en: "Hosting and Program.cs",
        hi: "Hosting और Program.cs",
        hg: "Hosting aur Program.cs"
      },
      lesson: {
        buildsOn: {
          en: "<p>Days 1 to 10 built the CRM (<code>SupportTicket</code>, <code>TicketService</code>), LINQ, EF Core and patterns, and Day 11 showed dependency injection and options. Today the CRM gets a web front: <code>Program.cs</code> is where those services are registered and where requests start.</p>",
          hi: "<p>Day 1 से 10 में CRM (<code>SupportTicket</code>, <code>TicketService</code>), LINQ, EF Core और patterns बने, और Day 11 में dependency injection और options आए। आज CRM को web का चेहरा मिलता है: <code>Program.cs</code> में वही services register होती हैं और यहीं से requests शुरू होती हैं।</p>",
          hg: "<p>Day 1 se 10 mein CRM (<code>SupportTicket</code>, <code>TicketService</code>), LINQ, EF Core aur patterns bane, aur Day 11 mein dependency injection aur options aaye. Aaj CRM ko web ka chehra milta hai: <code>Program.cs</code> mein wahi services register hoti hain aur yahin se requests shuru hoti hain.</p>"
        },
        what: {
          en: "<p>Every ASP.NET Core app starts the same way in <code>Program.cs</code>, in three steps: <b>CreateBuilder</b> (a builder to configure), <b>Build</b> (the finished app) and <b>Run</b> (start listening). The <b>host</b> is the object that keeps DI, configuration and logging alive while the app runs. <b>Kestrel</b> is the web server inside it.</p>",
          hi: "<p>हर ASP.NET Core app <code>Program.cs</code> में एक ही तरह शुरू होता है, तीन कदमों में: <b>CreateBuilder</b> (setup करने वाला builder), <b>Build</b> (तैयार app) और <b>Run</b> (requests सुनना शुरू)। <b>Host</b> वह object है जो app चलने तक DI, configuration और logging को ज़िंदा रखता है। <b>Kestrel</b> उसके अंदर का web server है।</p>",
          hg: "<p>Har ASP.NET Core app <code>Program.cs</code> mein ek hi tarah shuru hota hai, teen kadmon mein: <b>CreateBuilder</b> (setup karne wala builder), <b>Build</b> (taiyaar app) aur <b>Run</b> (requests sunna shuru). <b>Host</b> woh object hai jo app chalne tak DI, configuration aur logging ko zinda rakhta hai. <b>Kestrel</b> uske andar ka web server hai.</p>"
        },
        why: {
          en: "<p>Knowing the three steps tells you where each thing belongs: services go before <code>Build()</code>, middleware and endpoints go after it. Mixing them up is the most common beginner error.</p>",
          hi: "<p>तीन कदम पता हों तो हर चीज़ की सही जगह पता चलती है: services <code>Build()</code> से पहले, middleware और endpoints उसके बाद। इन्हें उलट देना सबसे आम शुरुआती ग़लती है।</p>",
          hg: "<p>Teen kadam pata hon to har cheez ki sahi jagah pata chalti hai: services <code>Build()</code> se pehle, middleware aur endpoints uske baad. Inhein ulat dena sabse aam shuruaati galti hai.</p>"
        },
        analogy: {
          en: "<p>Opening a chai shop. First you gather supplies and hire a helper (register services). Then you set up the counter (middleware and endpoints). Finally you lift the shutter (<code>Run</code>).</p>",
          hi: "<p>चाय की दुकान खोलना। पहले सामान जुटाते हो और एक helper रखते हो (services register)। फिर counter सजाते हो (middleware और endpoints)। आख़िर में shutter उठाते हो (<code>Run</code>)।</p>",
          hg: "<p>Chai ki dukaan kholna. Pehle saamaan jutaate ho aur ek helper rakhte ho (services register). Phir counter sajaate ho (middleware aur endpoints). Aakhir mein shutter uthaate ho (<code>Run</code>).</p>"
        },
        lines: [
          {
            code: "var builder = WebApplication.CreateBuilder();",
            note: {
              en: "Step 1: the <b>builder</b>. It already has configuration, logging and DI ready. Real apps pass <code>args</code> here; this demo does not need them.",
              hi: "Step 1: <b>builder</b>। इसमें configuration, logging और DI पहले से तैयार हैं। असली apps यहाँ <code>args</code> देते हैं; इस demo को उनकी ज़रूरत नहीं।",
              hg: "Step 1: <b>builder</b>. Ismein configuration, logging aur DI pehle se taiyaar hain. Asli apps yahan <code>args</code> dete hain; is demo ko unki zaroorat nahi."
            }
          },
          {
            code: "builder.WebHost.UseTestServer();",
            note: {
              en: "Only for this tutorial: an in-memory server so the program runs without opening a port. A real app skips this line and uses Kestrel.",
              hi: "सिर्फ़ इस tutorial के लिए: in-memory server, ताकि program बिना port खोले चले। असली app यह line नहीं लिखता और Kestrel इस्तेमाल करता है।",
              hg: "Sirf is tutorial ke liye: in-memory server, taaki program bina port khole chale. Asli app ye line nahi likhta aur Kestrel use karta hai."
            }
          },
          {
            code: "builder.Services.AddSingleton<TicketService>();",
            note: {
              en: "Services are registered on the builder, <b>before</b> <code>Build()</code>. After <code>Build()</code> the container is closed.",
              hi: "Services builder पर register होती हैं, <code>Build()</code> से <b>पहले</b>। <code>Build()</code> के बाद container बंद हो जाता है।",
              hg: "Services builder par register hoti hain, <code>Build()</code> se <b>pehle</b>. <code>Build()</code> ke baad container band ho jaata hai."
            }
          },
          {
            code: "var app = builder.Build();",
            note: {
              en: "Step 2: <code>Build()</code> returns the <code>WebApplication</code>. From here you add middleware and endpoints.",
              hi: "Step 2: <code>Build()</code> <code>WebApplication</code> देता है। यहाँ से आगे middleware और endpoints जोड़ते हो।",
              hg: "Step 2: <code>Build()</code> <code>WebApplication</code> deta hai. Yahan se aage middleware aur endpoints jodte ho."
            }
          },
          {
            code: "app.MapGet(\"/tickets/{id:int}\", (int id, TicketService tickets) => tickets.Describe(id));",
            note: {
              en: "An <b>endpoint</b>: a URL pattern plus a handler. <code>id</code> comes from the URL, and <code>TicketService</code> is injected from DI.",
              hi: "<b>Endpoint</b>: URL का pattern और उसका handler। <code>id</code> URL से आता है और <code>TicketService</code> DI से inject होता है।",
              hg: "<b>Endpoint</b>: URL ka pattern aur uska handler. <code>id</code> URL se aata hai aur <code>TicketService</code> DI se inject hota hai."
            }
          },
          {
            code: "await app.StartAsync();",
            note: {
              en: "Step 3: start. A real app ends with <code>app.Run();</code>, which blocks until shutdown. A demo needs <code>StartAsync</code> so it can call the app and then stop.",
              hi: "Step 3: शुरू करना। असली app <code>app.Run();</code> पर ख़त्म होता है, जो shutdown तक रुका रहता है। Demo में <code>StartAsync</code> चाहिए ताकि app को call करके फिर रोक सकें।",
              hg: "Step 3: shuru karna. Asli app <code>app.Run();</code> par khatam hota hai, jo shutdown tak ruka rehta hai. Demo mein <code>StartAsync</code> chahiye taaki app ko call karke phir rok sakein."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Registering a service after <code>Build()</code>. The container is already built, so it is too late.</li><li>Writing business rules inside <code>Program.cs</code>. Keep it for wiring; put the rules in services like <code>TicketService</code>.</li><li>Forgetting that <code>Run()</code> blocks. Anything written after it runs only at shutdown.</li></ul>",
          hi: "<ul><li><code>Build()</code> के बाद service register करना। Container बन चुका है, अब देर हो गई।</li><li><code>Program.cs</code> में business rules लिख देना। इसे सिर्फ़ wiring (चीज़ें आपस में जोड़ने) के लिए रखो; rules <code>TicketService</code> जैसी services में रखो।</li><li>भूल जाना कि <code>Run()</code> रुका रहता है। उसके बाद लिखा code सिर्फ़ shutdown पर चलता है।</li></ul>",
          hg: "<ul><li><code>Build()</code> ke baad service register karna. Container ban chuka hai, ab der ho gayi.</li><li><code>Program.cs</code> mein business rules likh dena. Ise sirf wiring (cheezein aapas mein jodne) ke liye rakho; rules <code>TicketService</code> jaisi services mein rakho.</li><li>Bhool jaana ki <code>Run()</code> ruka rehta hai. Uske baad likha code sirf shutdown par chalta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use this minimal <code>Program.cs</code> for every new app. Old projects with <code>Startup.cs</code> still work, so do not rewrite them only for style. Move long registration lists into an extension method such as <code>AddCrmServices()</code>.</p>",
          hi: "<p>हर नए app में यही छोटा <code>Program.cs</code> इस्तेमाल करो। <code>Startup.cs</code> वाले पुराने projects अब भी चलते हैं, इसलिए सिर्फ़ style के लिए उन्हें दोबारा मत लिखो। Registration की लंबी list को <code>AddCrmServices()</code> जैसे extension method में डाल दो।</p>",
          hg: "<p>Har naye app mein yahi chhota <code>Program.cs</code> use karo. <code>Startup.cs</code> wale purane projects ab bhi chalte hain, isliye sirf style ke liye unhein dobara mat likho. Registration ki lambi list ko <code>AddCrmServices()</code> jaise extension method mein daal do.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a second endpoint <code>GET /health</code> that returns the text <code>CRM is running</code>. Call it and print the answer, then print ticket 502.</p>",
            hi: "<p>दूसरा endpoint <code>GET /health</code> जोड़ो जो <code>CRM is running</code> text लौटाए। उसे call करके जवाब print करो, फिर ticket 502 print करो।</p>",
            hg: "<p>Doosra endpoint <code>GET /health</code> jodo jo <code>CRM is running</code> text lautaaye. Use call karke jawaab print karo, phir ticket 502 print karo.</p>"
          },
          hint: {
            en: "<p>Add one more <code>app.MapGet</code> line after <code>Build()</code>, before the app is started.</p>",
            hi: "<p><code>Build()</code> के बाद, app शुरू करने से पहले एक और <code>app.MapGet</code> line जोड़ो।</p>",
            hg: "<p><code>Build()</code> ke baad, app shuru karne se pehle ek aur <code>app.MapGet</code> line jodo.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            caption: {
              en: "Solution: a health endpoint",
              hi: "हल: health endpoint",
              hg: "Solution: health endpoint"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddSingleton<TicketService>();\n\nvar app = builder.Build();\napp.MapGet(\"/health\", () => \"CRM is running\");\napp.MapGet(\"/tickets/{id:int}\", (int id, TicketService tickets) => tickets.Describe(id));\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nConsole.WriteLine(await client.GetStringAsync(\"/health\"));\nConsole.WriteLine(await client.GetStringAsync(\"/tickets/502\"));\nawait app.StopAsync();\n\npublic class TicketService\n{\n    private readonly Dictionary<int, string> _tickets = new()\n    {\n        [501] = \"Login failed (Asha, agent Meena)\",\n        [502] = \"Refund pending (Ravi, agent Kiran)\"\n    };\n\n    public string Describe(int id) =>\n        _tickets.TryGetValue(id, out var text) ? $\"Ticket {id}: {text}\" : $\"Ticket {id} not found\";\n}",
            check: "run",
            expected: "CRM is running\nTicket 502: Refund pending (Ravi, agent Kiran)"
          }
        },
        quiz: {
          q: {
            en: "Which call gives you the <code>WebApplication</code> where you add middleware and endpoints?",
            hi: "कौन-सा call वह <code>WebApplication</code> देता है जहाँ middleware और endpoints जोड़ते हैं?",
            hg: "Kaunsa call woh <code>WebApplication</code> deta hai jahan middleware aur endpoints jodte hain?"
          },
          options: [
            {
              en: "<code>app.Run()</code>",
              hi: "<code>app.Run()</code> से",
              hg: "<code>app.Run()</code> se"
            },
            {
              en: "<code>WebApplication.CreateBuilder()</code>",
              hi: "<code>WebApplication.CreateBuilder()</code> से",
              hg: "<code>WebApplication.CreateBuilder()</code> se"
            },
            {
              en: "<code>builder.Build()</code>",
              hi: "<code>builder.Build()</code> से",
              hg: "<code>builder.Build()</code> se"
            },
            {
              en: "<code>builder.Services.AddSingleton()</code>",
              hi: "<code>builder.Services.AddSingleton()</code> से",
              hg: "<code>builder.Services.AddSingleton()</code> se"
            }
          ],
          answer: 2,
          explain: {
            en: "<p><code>CreateBuilder</code> gives the builder, where you register services. <code>Build()</code> turns it into the <code>WebApplication</code>. <code>Run()</code> only starts it.</p>",
            hi: "<p><code>CreateBuilder</code> builder देता है, जहाँ services register होती हैं। <code>Build()</code> उसे <code>WebApplication</code> बनाता है। <code>Run()</code> सिर्फ़ उसे शुरू करता है।</p>",
            hg: "<p><code>CreateBuilder</code> builder deta hai, jahan services register hoti hain. <code>Build()</code> use <code>WebApplication</code> banata hai. <code>Run()</code> sirf use shuru karta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Three steps: <code>CreateBuilder</code>, <code>Build</code>, <code>Run</code>.</li><li>Services go on the builder before <code>Build()</code>; middleware and endpoints go on the app after it.</li><li>One <code>Program.cs</code> replaces the old <code>Program.Main</code> plus <code>Startup.cs</code>.</li></ul>",
          hi: "<ul><li>तीन कदम: <code>CreateBuilder</code>, <code>Build</code>, <code>Run</code>।</li><li>Services <code>Build()</code> से पहले builder पर; middleware और endpoints उसके बाद app पर।</li><li>एक <code>Program.cs</code> पुराने <code>Program.Main</code> और <code>Startup.cs</code> दोनों की जगह लेता है।</li></ul>",
          hg: "<ul><li>Teen kadam: <code>CreateBuilder</code>, <code>Build</code>, <code>Run</code>.</li><li>Services <code>Build()</code> se pehle builder par; middleware aur endpoints uske baad app par.</li><li>Ek <code>Program.cs</code> purane <code>Program.Main</code> aur <code>Startup.cs</code> dono ki jagah leta hai.</li></ul>"
        }
      },
      code: [
        {
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          caption: {
            en: "A tiny CRM web app: three steps",
            hi: "छोटा CRM web app: तीन कदम",
            hg: "Chhota CRM web app: teen kadam"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\n// Step 1: the builder. Register services here.\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();     // keep the demo output clean\nbuilder.WebHost.UseTestServer();      // in-memory server: no port needed for this demo\nbuilder.Services.AddSingleton<TicketService>();\n\n// Step 2: Build() gives the app. Add middleware and map endpoints here.\nvar app = builder.Build();\napp.MapGet(\"/tickets/{id:int}\", (int id, TicketService tickets) => tickets.Describe(id));\n\n// Step 3: run it. A real app ends with app.Run(); the demo starts it in memory and calls it.\nawait app.StartAsync();\nvar client = app.GetTestClient();\nConsole.WriteLine(await client.GetStringAsync(\"/tickets/501\"));\nConsole.WriteLine(await client.GetStringAsync(\"/tickets/999\"));\nawait app.StopAsync();\n\npublic class TicketService\n{\n    private readonly Dictionary<int, string> _tickets = new()\n    {\n        [501] = \"Login failed (Asha, agent Meena)\",\n        [502] = \"Refund pending (Ravi, agent Kiran)\"\n    };\n\n    public string Describe(int id) =>\n        _tickets.TryGetValue(id, out var text) ? $\"Ticket {id}: {text}\" : $\"Ticket {id} not found\";\n}",
          check: "run",
          expected: "Ticket 501: Login failed (Asha, agent Meena)\nTicket 999 not found"
        }
      ]
    },
    {
      id: "middleware-pipeline",
      depth: "short",
      title: {
        en: "The middleware pipeline: order matters",
        hi: "Middleware pipeline: क्रम मायने रखता है",
        hg: "Middleware pipeline: kram maayne rakhta hai"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 mapped one endpoint in <code>Program.cs</code>. A request does not jump straight to that endpoint: it first passes through a chain of middleware that you add between <code>Build()</code> and the endpoints. This lesson shows how that chain runs.</p>",
          hi: "<p>पाठ 1 में <code>Program.cs</code> में एक endpoint map हुआ था। Request सीधे उस endpoint तक नहीं जाती: पहले middleware की एक कड़ी से गुज़रती है, जिसे <code>Build()</code> और endpoints के बीच जोड़ते हो। यह पाठ दिखाता है कि वह कड़ी कैसे चलती है।</p>",
          hg: "<p>Lesson 1 mein <code>Program.cs</code> mein ek endpoint map hua tha. Request seedhe us endpoint tak nahi jaati: pehle middleware ki ek kadi se guzarti hai, jise <code>Build()</code> aur endpoints ke beech jodte ho. Ye lesson dikhata hai ki woh kadi kaise chalti hai.</p>"
        },
        what: {
          en: "<p><b>Middleware</b> is a small component that gets the request and a <code>next</code> function. Code <b>before</b> <code>await next()</code> runs on the way in. Code <b>after</b> it runs on the way out, in <b>reverse</b> order. This is the Chain of Responsibility from Day 10.</p>",
          hi: "<p><b>Middleware</b> एक छोटा component है जिसे request और एक <code>next</code> function मिलता है। <code>await next()</code> से <b>पहले</b> का code अंदर जाते समय चलता है। उसके <b>बाद</b> का code बाहर आते समय, <b>उल्टे</b> क्रम में चलता है। यह Day 10 वाला Chain of Responsibility है।</p>",
          hg: "<p><b>Middleware</b> ek chhota component hai jise request aur ek <code>next</code> function milta hai. <code>await next()</code> se <b>pehle</b> ka code andar jaate samay chalta hai. Uske <b>baad</b> ka code bahar aate samay, <b>ulte</b> kram mein chalta hai. Ye Day 10 wala Chain of Responsibility hai.</p>"
        },
        why: {
          en: "<p>Logging, error handling, authentication and compression all sit in this chain. The <b>order you write the calls is the order they run</b>, so putting one in the wrong place changes behaviour. For example, the error handler must come first so it can catch errors from everything after it.</p>",
          hi: "<p>Logging, error handling, authentication और compression सब इसी कड़ी में बैठते हैं। <b>जिस क्रम में calls लिखते हो, उसी क्रम में वे चलते हैं</b>, इसलिए किसी को ग़लत जगह रखने से behaviour बदल जाता है। जैसे error handler सबसे पहले होना चाहिए, ताकि उसके बाद की हर चीज़ के errors पकड़ सके।</p>",
          hg: "<p>Logging, error handling, authentication aur compression sab isi kadi mein baithte hain. <b>Jis kram mein calls likhte ho, usi kram mein woh chalte hain</b>, isliye kisi ko galat jagah rakhne se behaviour badal jaata hai. Jaise error handler sabse pehle hona chahiye, taaki uske baad ki har cheez ke errors pakad sake.</p>"
        },
        analogy: {
          en: "<p>Entering a railway platform: ticket check first, then the security scan, then the platform. When you leave, you pass the same two gates in reverse order.</p>",
          hi: "<p>Railway platform में जाना: पहले ticket check, फिर security scan, फिर platform। लौटते समय वही दो gates उल्टे क्रम में पार करते हो।</p>",
          hg: "<p>Railway platform mein jaana: pehle ticket check, phir security scan, phir platform. Lautte samay wahi do gates ulte kram mein paar karte ho.</p>"
        },
        lines: [
          {
            code: "Console.WriteLine(\"1 request log: in\");",
            note: {
              en: "Runs on the way <b>in</b>, before the next component. Step 1 is the first middleware added, so it is the outermost gate.",
              hi: "अंदर जाते समय चलता है, अगले component से <b>पहले</b>। यह जोड़ा गया पहला middleware है, इसलिए सबसे बाहरी gate है।",
              hg: "Andar jaate samay chalta hai, agle component se <b>pehle</b>. Ye joda gaya pehla middleware hai, isliye sabse baahri gate hai."
            }
          },
          {
            code: "await next();",
            note: {
              en: "Hands the request to the next component. Control comes back here only after everything inside has finished, so <code>await</code> it.",
              hi: "Request अगले component को देता है। अंदर का सब कुछ ख़त्म होने के बाद ही control यहाँ लौटता है, इसलिए <code>await</code> करो।",
              hg: "Request agle component ko deta hai. Andar ka sab kuch khatam hone ke baad hi control yahan lautta hai, isliye <code>await</code> karo."
            }
          },
          {
            code: "Console.WriteLine(\"1 request log: out\");",
            note: {
              en: "Runs on the way <b>out</b>. Because it was first in, it is last out, after step 2 has printed its \"out\".",
              hi: "बाहर आते समय चलता है। क्योंकि यह पहले अंदर गया था, यह सबसे आख़िर में बाहर आता है, step 2 के \"out\" के बाद।",
              hg: "Bahar aate samay chalta hai. Kyunki ye pehle andar gaya tha, ye sabse aakhir mein bahar aata hai, step 2 ke \"out\" ke baad."
            }
          },
          {
            code: "app.MapGet(\"/tickets/{id:int}\", (int id) =>",
            note: {
              en: "The endpoint sits at the very end of the chain. Both middleware run before it and again, in reverse, after it.",
              hi: "Endpoint कड़ी के बिल्कुल आख़िर में बैठता है। दोनों middleware उससे पहले चलते हैं और उल्टे क्रम में उसके बाद फिर।",
              hg: "Endpoint kadi ke bilkul aakhir mein baithta hai. Dono middleware usse pehle chalte hain aur ulte kram mein uske baad phir."
            }
          },
          {
            code: "Console.WriteLine(\"client got: \" + await client.GetStringAsync(\"/tickets/501\"));",
            note: {
              en: "The client prints last: it only sees the answer after the whole chain, in and out, is done.",
              hi: "Client सबसे आख़िर में print करता है: उसे जवाब पूरी कड़ी (अंदर और बाहर) ख़त्म होने के बाद ही मिलता है।",
              hg: "Client sabse aakhir mein print karta hai: use jawaab poori kadi (andar aur bahar) khatam hone ke baad hi milta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Putting the exception handler last. It then cannot catch errors from the middleware before it.</li><li>Forgetting <code>await</code> before <code>next()</code>. The method returns early and the \"after\" code runs too soon.</li><li>Expecting \"after\" code to run in the same order as \"before\". It runs in reverse.</li></ul>",
          hi: "<ul><li>Exception handler को आख़िर में रखना। तब वह अपने से पहले के middleware के errors नहीं पकड़ सकता।</li><li><code>next()</code> से पहले <code>await</code> भूल जाना। Method जल्दी लौट आता है और \"after\" code बहुत जल्दी चल जाता है।</li><li>यह सोचना कि \"after\" code \"before\" वाले क्रम में ही चलेगा। वह उल्टे क्रम में चलता है।</li></ul>",
          hg: "<ul><li>Exception handler ko aakhir mein rakhna. Tab woh apne se pehle ke middleware ke errors nahi pakad sakta.</li><li><code>next()</code> se pehle <code>await</code> bhool jaana. Method jaldi laut aata hai aur \"after\" code bahut jaldi chal jaata hai.</li><li>Ye sochna ki \"after\" code \"before\" wale kram mein hi chalega. Woh ulte kram mein chalta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use middleware for work that touches <b>every</b> request: logging, error handling, security headers, compression. A common order: exception handling, HTTPS redirection, static files, routing, authentication, authorization, then your endpoints.</p>",
          hi: "<p>जो काम <b>हर</b> request को छूता है, उसके लिए middleware इस्तेमाल करो: logging, error handling, security headers, compression। आम क्रम: exception handling, HTTPS redirection, static files, routing, authentication, authorization, फिर तुम्हारे endpoints।</p>",
          hg: "<p>Jo kaam <b>har</b> request ko chhoota hai, uske liye middleware use karo: logging, error handling, security headers, compression. Aam kram: exception handling, HTTPS redirection, static files, routing, authentication, authorization, phir tumhare endpoints.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a new first middleware that prints <code>0 security: in</code> and <code>0 security: out</code>. Run it and check that \"0\" wraps all the others.</p>",
            hi: "<p>एक नया पहला middleware जोड़ो जो <code>0 security: in</code> और <code>0 security: out</code> print करे। चलाकर देखो कि \"0\" बाक़ी सबको घेरे हुए है।</p>",
            hg: "<p>Ek naya pehla middleware jodo jo <code>0 security: in</code> aur <code>0 security: out</code> print kare. Chalakar dekho ki \"0\" baaki sabko ghere hue hai.</p>"
          },
          hint: {
            en: "<p>Add one more <code>app.Use(...)</code> block above the existing two. The first one added is the outermost.</p>",
            hi: "<p>मौजूदा दो के ऊपर एक और <code>app.Use(...)</code> block जोड़ो। जो सबसे पहले जोड़ा जाए वही सबसे बाहरी होता है।</p>",
            hg: "<p>Maujooda do ke upar ek aur <code>app.Use(...)</code> block jodo. Jo sabse pehle joda jaaye wahi sabse baahri hota hai.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            caption: {
              en: "Solution: a security middleware first",
              hi: "हल: सबसे पहले security middleware",
              hg: "Solution: sabse pehle security middleware"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\napp.Use(async (context, next) =>\n{\n    Console.WriteLine(\"0 security: in\");\n    await next();\n    Console.WriteLine(\"0 security: out\");\n});\napp.Use(async (context, next) =>\n{\n    Console.WriteLine(\"1 request log: in\");\n    await next();\n    Console.WriteLine(\"1 request log: out\");\n});\napp.MapGet(\"/tickets/{id:int}\", (int id) =>\n{\n    Console.WriteLine(\"3 endpoint runs\");\n    return $\"Ticket {id} for Asha\";\n});\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nConsole.WriteLine(\"client got: \" + await client.GetStringAsync(\"/tickets/501\"));\nawait app.StopAsync();",
            check: "run",
            expected: "0 security: in\n1 request log: in\n3 endpoint runs\n1 request log: out\n0 security: out\nclient got: Ticket 501 for Asha"
          }
        },
        quiz: {
          q: {
            en: "Middleware A is added first and B second. Both call <code>await next()</code>. In which order do the \"after\" lines print?",
            hi: "Middleware A पहले और B दूसरे नंबर पर जोड़ा गया। दोनों <code>await next()</code> call करते हैं। \"after\" वाली lines किस क्रम में print होंगी?",
            hg: "Middleware A pehle aur B doosre number par joda gaya. Dono <code>await next()</code> call karte hain. \"after\" wali lines kis kram mein print hongi?"
          },
          options: [
            {
              en: "A after, then B after",
              hi: "पहले A after, फिर B after",
              hg: "Pehle A after, phir B after"
            },
            {
              en: "B after, then A after",
              hi: "पहले B after, फिर A after",
              hg: "Pehle B after, phir A after"
            },
            {
              en: "Both at the same time",
              hi: "दोनों एक साथ",
              hg: "Dono ek saath"
            },
            {
              en: "Only A, because B is skipped",
              hi: "सिर्फ़ A, क्योंकि B छूट जाता है",
              hg: "Sirf A, kyunki B chhoot jaata hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The chain unwinds in reverse: B is inside A, so B finishes first and A finishes last.</p>",
            hi: "<p>कड़ी उल्टे क्रम में खुलती है: B, A के अंदर है, इसलिए B पहले ख़त्म होता है और A सबसे आख़िर में।</p>",
            hg: "<p>Kadi ulte kram mein khulti hai: B, A ke andar hai, isliye B pehle khatam hota hai aur A sabse aakhir mein.</p>"
          }
        },
        recap: {
          en: "<ul><li>Middleware gets a <code>next</code>; code before <code>await next()</code> runs in, code after runs out in reverse.</li><li>The order of the calls in <code>Program.cs</code> is the order of the chain.</li><li>Put the exception handler first so it covers everything after it.</li></ul>",
          hi: "<ul><li>Middleware को <code>next</code> मिलता है; <code>await next()</code> से पहले का code अंदर जाते समय, बाद का code बाहर आते समय उल्टे क्रम में चलता है।</li><li><code>Program.cs</code> में calls का क्रम ही कड़ी का क्रम है।</li><li>Exception handler सबसे पहले रखो ताकि वह अपने बाद की हर चीज़ को cover करे।</li></ul>",
          hg: "<ul><li>Middleware ko <code>next</code> milta hai; <code>await next()</code> se pehle ka code andar jaate samay, baad ka code bahar aate samay ulte kram mein chalta hai.</li><li><code>Program.cs</code> mein calls ka kram hi kadi ka kram hai.</li><li>Exception handler sabse pehle rakho taaki woh apne baad ki har cheez ko cover kare.</li></ul>"
        }
      },
      code: [
        {
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          caption: {
            en: "Two middleware around one endpoint",
            hi: "एक endpoint के चारों ओर दो middleware",
            hg: "Ek endpoint ke chaaron or do middleware"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\napp.Use(async (context, next) =>\n{\n    Console.WriteLine(\"1 request log: in\");\n    await next();\n    Console.WriteLine(\"1 request log: out\");\n});\napp.Use(async (context, next) =>\n{\n    Console.WriteLine(\"2 agent check: in\");\n    await next();\n    Console.WriteLine(\"2 agent check: out\");\n});\napp.MapGet(\"/tickets/{id:int}\", (int id) =>\n{\n    Console.WriteLine(\"3 endpoint runs\");\n    return $\"Ticket {id} for Asha\";\n});\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nConsole.WriteLine(\"client got: \" + await client.GetStringAsync(\"/tickets/501\"));\nawait app.StopAsync();",
          check: "run",
          expected: "1 request log: in\n2 agent check: in\n3 endpoint runs\n2 agent check: out\n1 request log: out\nclient got: Ticket 501 for Asha"
        }
      ]
    },
    {
      id: "short-circuit",
      depth: "short",
      title: {
        en: "Short-circuit: stop a request early",
        hi: "Short-circuit: request को बीच में रोकना",
        hg: "Short-circuit: request ko beech mein rokna"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 2 showed that each middleware calls <code>next()</code> to pass the request on. Today a middleware chooses <b>not</b> to call it. That is how an API-key check stops a bad request before it reaches the endpoint.</p>",
          hi: "<p>पाठ 2 में दिखा कि हर middleware request आगे भेजने के लिए <code>next()</code> call करता है। आज एक middleware उसे call <b>नहीं</b> करने का फ़ैसला करता है। इसी तरह API-key check ग़लत request को endpoint तक पहुँचने से पहले रोक देता है।</p>",
          hg: "<p>Lesson 2 mein dikha ki har middleware request aage bhejne ke liye <code>next()</code> call karta hai. Aaj ek middleware use call <b>nahi</b> karne ka faisla karta hai. Isi tarah API-key check galat request ko endpoint tak pahunchne se pehle rok deta hai.</p>"
        },
        what: {
          en: "<p>A <b>short-circuit</b> means a middleware writes the response itself and returns without calling <code>next()</code>. Later middleware and the endpoint never run. <code>UseWhen</code> lets you apply a middleware to only some requests (here, paths under <code>/api</code>) and then continues the normal chain for the rest.</p>",
          hi: "<p><b>Short-circuit</b> का मतलब है कि middleware ख़ुद response लिख दे और <code>next()</code> call किए बिना लौट जाए। बाद के middleware और endpoint चलते ही नहीं। <code>UseWhen</code> से middleware सिर्फ़ कुछ requests पर लगता है (यहाँ <code>/api</code> के नीचे वाले paths), बाक़ी के लिए normal कड़ी चलती रहती है।</p>",
          hg: "<p><b>Short-circuit</b> ka matlab hai ki middleware khud response likh de aur <code>next()</code> call kiye bina laut jaaye. Baad ke middleware aur endpoint chalte hi nahi. <code>UseWhen</code> se middleware sirf kuch requests par lagta hai (yahan <code>/api</code> ke neeche wale paths), baaki ke liye normal kadi chalti rehti hai.</p>"
        },
        why: {
          en: "<p>Security and rate limits must reject work <b>early</b>, before any costly code runs. A short-circuit does that in one place instead of repeating the check in every endpoint.</p>",
          hi: "<p>Security और rate limits को काम <b>जल्दी</b> ठुकराना चाहिए, किसी भी महँगे code के चलने से पहले। Short-circuit यह एक जगह कर देता है, हर endpoint में check दोहराना नहीं पड़ता।</p>",
          hg: "<p>Security aur rate limits ko kaam <b>jaldi</b> thukraana chahiye, kisi bhi mehnge code ke chalne se pehle. Short-circuit ye ek jagah kar deta hai, har endpoint mein check dohrana nahi padta.</p>"
        },
        analogy: {
          en: "<p>A guard at a society gate. A visitor without a pass is turned back at the gate and never reaches the flat. The guard (and the register at the main road) still note that the visit ended.</p>",
          hi: "<p>Society के gate पर guard। बिना pass वाला visitor gate से ही लौटा दिया जाता है, flat तक पहुँचता ही नहीं। फिर भी guard (और main road का register) नोट करते हैं कि visit कैसे ख़त्म हुई।</p>",
          hg: "<p>Society ke gate par guard. Bina pass wala visitor gate se hi lauta diya jaata hai, flat tak pahunchta hi nahi. Phir bhi guard (aur main road ka register) note karte hain ki visit kaise khatam hui.</p>"
        },
        lines: [
          {
            code: "await next();\n    Console.WriteLine($\"log: {context.Request.Path} -> {context.Response.StatusCode}\");",
            note: {
              en: "The log middleware is <b>before</b> the gate. It calls <code>next()</code> and prints after, so it still reports the status even when the gate stops the request.",
              hi: "Log middleware gate से <b>पहले</b> है। वह <code>next()</code> call करके बाद में print करता है, इसलिए gate के request रोकने पर भी status बता देता है।",
              hg: "Log middleware gate se <b>pehle</b> hai. Woh <code>next()</code> call karke baad mein print karta hai, isliye gate ke request rokne par bhi status bata deta hai."
            }
          },
          {
            code: "app.UseWhen(ctx => ctx.Request.Path.StartsWithSegments(\"/api\"), api => api.Use(async (context, next) =>",
            note: {
              en: "<code>UseWhen</code> takes a condition and a mini-pipeline. The gate runs only for paths under <code>/api</code>; <code>/</code> skips it and rejoins the main chain.",
              hi: "<code>UseWhen</code> एक शर्त और एक छोटी pipeline लेता है। Gate सिर्फ़ <code>/api</code> के नीचे वाले paths पर चलता है; <code>/</code> उसे छोड़कर main कड़ी में लौट आता है।",
              hg: "<code>UseWhen</code> ek shart aur ek chhoti pipeline leta hai. Gate sirf <code>/api</code> ke neeche wale paths par chalta hai; <code>/</code> use chhodkar main kadi mein laut aata hai."
            }
          },
          {
            code: "if (context.Request.Headers[\"X-Api-Key\"] != \"crm-key-1\")",
            note: {
              en: "The check reads a request header. A wrong or missing key means the request is not allowed.",
              hi: "यह check request का एक header पढ़ता है। ग़लत या ग़ायब key का मतलब है कि request को इजाज़त नहीं।",
              hg: "Ye check request ka ek header padhta hai. Galat ya gaayab key ka matlab hai ki request ko ijaazat nahi."
            }
          },
          {
            code: "context.Response.StatusCode = 401;",
            note: {
              en: "<b>401 Unauthorized</b>: the caller did not prove who they are. We set it ourselves because the endpoint will not run.",
              hi: "<b>401 Unauthorized</b>: caller ने साबित नहीं किया कि वह कौन है। हम इसे ख़ुद set करते हैं क्योंकि endpoint चलेगा नहीं।",
              hg: "<b>401 Unauthorized</b>: caller ne saabit nahi kiya ki woh kaun hai. Hum ise khud set karte hain kyunki endpoint chalega nahi."
            }
          },
          {
            code: "return;",
            note: {
              en: "The short-circuit itself: return without calling <code>next()</code>. The endpoint is never reached.",
              hi: "Short-circuit यही है: <code>next()</code> call किए बिना return। Endpoint तक पहुँचा ही नहीं जाता।",
              hg: "Short-circuit yahi hai: <code>next()</code> call kiye bina return. Endpoint tak pahuncha hi nahi jaata."
            }
          },
          {
            code: "async Task Call(string path, string? key = null)",
            note: {
              en: "A small helper for this demo so each call is one line. It sends the request, with the key header only when we give one.",
              hi: "इस demo के लिए एक छोटा helper, ताकि हर call एक line में हो। यह request भेजता है, और key header तभी लगाता है जब हम दें।",
              hg: "Is demo ke liye ek chhota helper, taaki har call ek line mein ho. Ye request bhejta hai, aur key header tabhi lagata hai jab hum dein."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Writing the response but forgetting <code>return</code>. The code then falls through to <code>next()</code> and the endpoint runs anyway.</li><li>Calling <code>next()</code> <i>and</i> writing a rejection. The endpoint still runs, and setting the status code after it has written its answer throws, because the response has already started.</li><li>Using 403 for a missing login. Missing identity is 401; 403 means \"known caller, not allowed\".</li></ul>",
          hi: "<ul><li>Response लिखना पर <code>return</code> भूल जाना। तब code नीचे <code>next()</code> तक बह जाता है और endpoint फिर भी चल जाता है।</li><li><code>next()</code> call करना <i>और</i> rejection भी लिखना। Endpoint फिर भी चलता है, और उसके जवाब लिखने के बाद status code set करने पर exception आता है, क्योंकि response शुरू हो चुका है।</li><li>Login न होने पर 403 देना। पहचान न होना 401 है; 403 का मतलब है \"caller पहचाना हुआ है, पर इजाज़त नहीं\"।</li></ul>",
          hg: "<ul><li>Response likhna par <code>return</code> bhool jaana. Tab code neeche <code>next()</code> tak beh jaata hai aur endpoint phir bhi chal jaata hai.</li><li><code>next()</code> call karna <i>aur</i> rejection bhi likhna. Endpoint phir bhi chalta hai, aur uske jawaab likhne ke baad status code set karne par exception aata hai, kyunki response shuru ho chuka hai.</li><li>Login na hone par 403 dena. Pehchaan na hona 401 hai; 403 ka matlab hai \"caller pehchana hua hai, par ijaazat nahi\".</li></ul>"
        },
        whenToUse: {
          en: "<p>Short-circuit for checks that must stop a request cheaply: API keys, rate limits, maintenance mode, health checks. Do not short-circuit for business rules; those belong in services and endpoints.</p>",
          hi: "<p>उन checks के लिए short-circuit करो जो request को सस्ते में रोकें: API keys, rate limits, maintenance mode, health checks। Business rules के लिए short-circuit मत करो; वे services और endpoints में रहते हैं।</p>",
          hg: "<p>Un checks ke liye short-circuit karo jo request ko sasti mein rokein: API keys, rate limits, maintenance mode, health checks. Business rules ke liye short-circuit mat karo; woh services aur endpoints mein rehte hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>Make the gate answer <b>403</b> with <code>retired key</code> when the key is <code>old-key</code>. Missing or unknown keys still get 401. Call <code>/api/tickets</code> with <code>old-key</code> and print the status and body.</p>",
            hi: "<p>Gate को ऐसा बनाओ कि key <code>old-key</code> हो तो <b>403</b> और <code>retired key</code> लौटाए। ग़ायब या अनजान key पर अब भी 401। <code>/api/tickets</code> को <code>old-key</code> के साथ call करो और status और body print करो।</p>",
            hg: "<p>Gate ko aisa banao ki key <code>old-key</code> ho to <b>403</b> aur <code>retired key</code> lautaaye. Gaayab ya anjaan key par ab bhi 401. <code>/api/tickets</code> ko <code>old-key</code> ke saath call karo aur status aur body print karo.</p>"
          },
          hint: {
            en: "<p>Add an <code>if</code> for <code>old-key</code> before the 401 check. It also needs its own <code>return</code>.</p>",
            hi: "<p>401 वाले check से पहले <code>old-key</code> के लिए एक <code>if</code> जोड़ो। उसे भी अपना <code>return</code> चाहिए।</p>",
            hg: "<p>401 wale check se pehle <code>old-key</code> ke liye ek <code>if</code> jodo. Use bhi apna <code>return</code> chahiye.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            caption: {
              en: "Solution: 403 for a retired key",
              hi: "हल: retired key पर 403",
              hg: "Solution: retired key par 403"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\napp.UseWhen(ctx => ctx.Request.Path.StartsWithSegments(\"/api\"), api => api.Use(async (context, next) =>\n{\n    var key = context.Request.Headers[\"X-Api-Key\"].ToString();\n    if (key == \"old-key\")\n    {\n        context.Response.StatusCode = 403;\n        await context.Response.WriteAsync(\"retired key\");\n        return;\n    }\n    if (key != \"crm-key-1\")\n    {\n        context.Response.StatusCode = 401;\n        await context.Response.WriteAsync(\"missing or wrong API key\");\n        return;\n    }\n    await next();\n}));\napp.MapGet(\"/api/tickets\", () => \"tickets: 501, 502\");\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nvar request = new HttpRequestMessage(HttpMethod.Get, \"/api/tickets\");\nrequest.Headers.Add(\"X-Api-Key\", \"old-key\");\nvar response = await client.SendAsync(request);\nConsole.WriteLine($\"{(int)response.StatusCode} {await response.Content.ReadAsStringAsync()}\");\nawait app.StopAsync();",
            check: "run",
            expected: "403 retired key"
          }
        },
        quiz: {
          q: {
            en: "A middleware writes a 401 response and returns without calling <code>next()</code>. What happens to the endpoint?",
            hi: "एक middleware 401 response लिखकर <code>next()</code> call किए बिना लौट जाता है। Endpoint का क्या होता है?",
            hg: "Ek middleware 401 response likhkar <code>next()</code> call kiye bina laut jaata hai. Endpoint ka kya hota hai?"
          },
          options: [
            {
              en: "It still runs, but its output is ignored",
              hi: "वह फिर भी चलता है, पर उसका output अनदेखा होता है",
              hg: "Woh phir bhi chalta hai, par uska output andekha hota hai"
            },
            {
              en: "It runs first, then the 401 replaces its answer",
              hi: "वह पहले चलता है, फिर 401 उसका जवाब बदल देता है",
              hg: "Woh pehle chalta hai, phir 401 uska jawaab badal deta hai"
            },
            {
              en: "The app crashes at startup",
              hi: "App शुरू होते ही crash हो जाता है",
              hg: "App shuru hote hi crash ho jaata hai"
            },
            {
              en: "It never runs; middleware before the gate still run their \"after\" code",
              hi: "वह कभी नहीं चलता; gate से पहले वाले middleware का \"after\" code फिर भी चलता है",
              hg: "Woh kabhi nahi chalta; gate se pehle wale middleware ka \"after\" code phir bhi chalta hai"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Not calling <code>next()</code> ends the forward trip. Components after the gate are skipped, but the ones before it still unwind and run their code after <code>await next()</code>, as the log line in the program showed.</p>",
            hi: "<p><code>next()</code> call न करने से आगे का सफ़र रुक जाता है। Gate के बाद वाले components छूट जाते हैं, पर उससे पहले वाले लौटते हैं और <code>await next()</code> के बाद का code चलाते हैं, जैसा program की log line ने दिखाया।</p>",
            hg: "<p><code>next()</code> call na karne se aage ka safar ruk jaata hai. Gate ke baad wale components chhoot jaate hain, par usse pehle wale lautte hain aur <code>await next()</code> ke baad ka code chalaate hain, jaisa program ki log line ne dikhaya.</p>"
          }
        },
        recap: {
          en: "<ul><li>A short-circuit = write the response and return without <code>next()</code>.</li><li><code>UseWhen</code> applies a middleware to some requests and rejoins the main chain.</li><li>401 = not identified; 403 = identified but not allowed.</li></ul>",
          hi: "<ul><li>Short-circuit = response लिखो और <code>next()</code> के बिना return करो।</li><li><code>UseWhen</code> कुछ requests पर middleware लगाता है और main कड़ी में लौट आता है।</li><li>401 = पहचान नहीं; 403 = पहचान है पर इजाज़त नहीं।</li></ul>",
          hg: "<ul><li>Short-circuit = response likho aur <code>next()</code> ke bina return karo.</li><li><code>UseWhen</code> kuch requests par middleware lagata hai aur main kadi mein laut aata hai.</li><li>401 = pehchaan nahi; 403 = pehchaan hai par ijaazat nahi.</li></ul>"
        }
      },
      code: [
        {
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          caption: {
            en: "An API-key gate on /api only",
            hi: "सिर्फ़ /api पर API-key gate",
            hg: "Sirf /api par API-key gate"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\napp.Use(async (context, next) =>\n{\n    await next();\n    Console.WriteLine($\"log: {context.Request.Path} -> {context.Response.StatusCode}\");\n});\n\napp.UseWhen(ctx => ctx.Request.Path.StartsWithSegments(\"/api\"), api => api.Use(async (context, next) =>\n{\n    if (context.Request.Headers[\"X-Api-Key\"] != \"crm-key-1\")\n    {\n        context.Response.StatusCode = 401;\n        await context.Response.WriteAsync(\"missing or wrong API key\");\n        return;   // short-circuit: next() is never called\n    }\n    await next();\n}));\n\napp.MapGet(\"/\", () => \"public home\");\napp.MapGet(\"/api/tickets\", () => \"tickets: 501, 502\");\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nasync Task Call(string path, string? key = null)\n{\n    var request = new HttpRequestMessage(HttpMethod.Get, path);\n    if (key is not null) request.Headers.Add(\"X-Api-Key\", key);\n    var response = await client.SendAsync(request);\n    Console.WriteLine($\"{path} => {(int)response.StatusCode} {await response.Content.ReadAsStringAsync()}\");\n}\n\nawait Call(\"/\");\nawait Call(\"/api/tickets\");\nawait Call(\"/api/tickets\", \"crm-key-1\");\nawait app.StopAsync();",
          check: "run",
          expected: "log: / -> 200\n/ => 200 public home\nlog: /api/tickets -> 401\n/api/tickets => 401 missing or wrong API key\nlog: /api/tickets -> 200\n/api/tickets => 200 tickets: 501, 502"
        }
      ]
    },
    {
      id: "configuration",
      depth: "short",
      title: {
        en: "Configuration: layers where the last one wins",
        hi: "Configuration: परतें, जहाँ आख़िरी जीतती है",
        hg: "Configuration: partein, jahan aakhiri jeetti hai"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 1 to 3 wired services and middleware with values written in code, such as the key <code>crm-key-1</code>. Real settings must change per machine without a rebuild, so today they move into configuration, which the builder from lesson 1 already provides.</p>",
          hi: "<p>पाठ 1 से 3 में services और middleware के values code में लिखे थे, जैसे key <code>crm-key-1</code>। असली settings हर machine पर बिना rebuild के बदलनी चाहिए, इसलिए आज वे configuration में जाती हैं, जो पाठ 1 वाला builder पहले से देता है।</p>",
          hg: "<p>Lesson 1 se 3 mein services aur middleware ke values code mein likhe the, jaise key <code>crm-key-1</code>. Asli settings har machine par bina rebuild ke badalni chahiye, isliye aaj woh configuration mein jaati hain, jo lesson 1 wala builder pehle se deta hai.</p>"
        },
        what: {
          en: "<p><b>Configuration</b> is a set of key and value pairs read from several <b>providers</b>: files, environment variables, command line. Providers are layered, and <b>the last one added wins</b>. Keys are hierarchical: <code>Sla:Hours</code> means the <code>Hours</code> value inside the <code>Sla</code> section.</p>",
          hi: "<p><b>Configuration</b> key और value के जोड़ों का एक set है जो कई <b>providers</b> (files, environment variables, command line) से पढ़ा जाता है। Providers परतों में लगते हैं, और <b>सबसे आख़िर में जुड़ा provider जीतता है</b>। Keys की परतें (hierarchy) होती हैं: <code>Sla:Hours</code> यानी <code>Sla</code> section के अंदर की <code>Hours</code> value।</p>",
          hg: "<p><b>Configuration</b> key aur value ke jodon ka ek set hai jo kai <b>providers</b> (files, environment variables, command line) se padha jaata hai. Providers partein banakar lagte hain, aur <b>sabse aakhir mein juda provider jeetta hai</b>. Keys hierarchy wali hain: <code>Sla:Hours</code> yaani <code>Sla</code> section ke andar ki <code>Hours</code> value.</p>"
        },
        why: {
          en: "<p>The same build runs on your laptop, on staging and in production. Only the settings differ, and you change them outside the code: a file for defaults, an environment variable for the server, a command-line value for one run.</p>",
          hi: "<p>वही build आपके laptop, staging और production पर चलता है। सिर्फ़ settings अलग होती हैं, और उन्हें code के बाहर बदलते हो: defaults के लिए file, server के लिए environment variable, एक run के लिए command-line value।</p>",
          hg: "<p>Wahi build aapke laptop, staging aur production par chalta hai. Sirf settings alag hoti hain, aur unhein code ke bahar badalte ho: defaults ke liye file, server ke liye environment variable, ek run ke liye command-line value.</p>"
        },
        analogy: {
          en: "<p>School rules. The school has a general rule, your class adds its own, and today the teacher says \"not today\". The most recent, most specific instruction is the one you follow.</p>",
          hi: "<p>School के नियम। School का एक आम नियम है, आपकी class अपना जोड़ती है, और आज teacher कहती हैं \"आज नहीं\"। जो सबसे ताज़ा और सबसे ख़ास हुक्म है, वही मानते हो।</p>",
          hg: "<p>School ke niyam. School ka ek aam niyam hai, aapki class apna jodti hai, aur aaj teacher kehti hain \"aaj nahi\". Jo sabse taaza aur sabse khaas hukm hai, wahi maante ho.</p>"
        },
        lines: [
          {
            code: "Environment.SetEnvironmentVariable(\"CRM_Sla__Hours\", \"12\");",
            note: {
              en: "Simulates a server setting. In environment variables a double underscore <code>__</code> stands for the <code>:</code> section separator. <code>CRM_</code> is a prefix we filter on below.",
              hi: "Server की setting की नक़ल। Environment variables में double underscore <code>__</code> का मतलब <code>:</code> वाला section separator है। <code>CRM_</code> एक prefix है जिस पर नीचे filter लगता है।",
              hg: "Server ki setting ki nakal. Environment variables mein double underscore <code>__</code> ka matlab <code>:</code> wala section separator hai. <code>CRM_</code> ek prefix hai jis par neeche filter lagta hai."
            }
          },
          {
            code: ".AddInMemoryCollection(defaults)",
            note: {
              en: "The first, lowest layer: defaults. In a real app this is <code>appsettings.json</code>, which <code>WebApplication.CreateBuilder</code> adds for you.",
              hi: "पहली, सबसे नीचे की परत: defaults। असली app में यह <code>appsettings.json</code> है, जिसे <code>WebApplication.CreateBuilder</code> आपके लिए जोड़ता है।",
              hg: "Pehli, sabse neeche ki parat: defaults. Asli app mein ye <code>appsettings.json</code> hai, jise <code>WebApplication.CreateBuilder</code> aapke liye jodta hai."
            }
          },
          {
            code: ".AddEnvironmentVariables(\"CRM_\")",
            note: {
              en: "The second layer overrides the first. Only variables that start with <code>CRM_</code> are read, and the prefix is removed.",
              hi: "दूसरी परत पहली को override करती है। सिर्फ़ <code>CRM_</code> से शुरू होने वाले variables पढ़े जाते हैं, और prefix हटा दिया जाता है।",
              hg: "Doosri parat pehli ko override karti hai. Sirf <code>CRM_</code> se shuru hone wale variables padhe jaate hain, aur prefix hata diya jaata hai."
            }
          },
          {
            code: ".AddCommandLine(new[] { \"--Notify:Channel=Email\" })",
            note: {
              en: "The last layer, so it wins over everything before it. It stands in for <code>dotnet run -- --Notify:Channel=Email</code>.",
              hi: "आख़िरी परत है, इसलिए अपने से पहले सब पर भारी पड़ती है। यह <code>dotnet run -- --Notify:Channel=Email</code> की जगह है।",
              hg: "Aakhiri parat hai, isliye apne se pehle sab par bhaari padti hai. Ye <code>dotnet run -- --Notify:Channel=Email</code> ki jagah hai."
            }
          },
          {
            code: "config[\"Sla:Missing\"] ?? \"(not set)\"",
            note: {
              en: "A key that no provider has gives <code>null</code>, not an error. Always have a fallback for optional settings.",
              hi: "जिस key को कोई provider नहीं जानता, उसके लिए <code>null</code> मिलता है, error नहीं। optional settings के लिए हमेशा fallback रखो।",
              hg: "Jis key ko koi provider nahi jaanta, uske liye <code>null</code> milta hai, error nahi. Optional settings ke liye hamesha fallback rakho."
            }
          },
          {
            code: "config.GetSection(\"Sla\").Get<SlaOptions>()",
            note: {
              en: "Binds a whole section to a typed class. Prefer this over reading raw strings all over the code; Day 11 covers the full Options pattern.",
              hi: "पूरे section को एक typed class से जोड़ देता है। पूरे code में raw strings पढ़ने से यह बेहतर है; पूरा Options pattern Day 11 में है।",
              hg: "Poore section ko ek typed class se jod deta hai. Poore code mein raw strings padhne se ye behtar hai; poora Options pattern Day 11 mein hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Adding providers in the wrong order and then wondering why the file beats the environment variable. Later wins.</li><li>Using a single underscore in an environment variable name. Use <code>Sla__Hours</code> for <code>Sla:Hours</code>.</li><li>Putting passwords in <code>appsettings.json</code> and committing them. Use user secrets in development and environment variables or a vault in production.</li></ul>",
          hi: "<ul><li>Providers ग़लत क्रम में जोड़ना और फिर सोचना कि file environment variable से क्यों जीत गई। बाद वाला जीतता है।</li><li>Environment variable के नाम में एक underscore लगाना। <code>Sla:Hours</code> के लिए <code>Sla__Hours</code> लिखो।</li><li>Passwords को <code>appsettings.json</code> में डालकर commit कर देना। Development में user secrets और production में environment variables या vault इस्तेमाल करो।</li></ul>",
          hg: "<ul><li>Providers galat kram mein jodna aur phir sochna ki file environment variable se kyun jeet gayi. Baad wala jeetta hai.</li><li>Environment variable ke naam mein ek underscore lagana. <code>Sla:Hours</code> ke liye <code>Sla__Hours</code> likho.</li><li>Passwords ko <code>appsettings.json</code> mein daalkar commit kar dena. Development mein user secrets aur production mein environment variables ya vault use karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Put anything that changes between environments into configuration: URLs, timeouts, feature switches, SLA hours. Keep the number of keys small and bind each section once to a class. Do not read <code>IConfiguration</code> in every class.</p>",
          hi: "<p>जो भी environments के बीच बदलता है, उसे configuration में रखो: URLs, timeouts, feature switches, SLA hours। Keys की गिनती कम रखो और हर section को एक बार class से bind करो। हर class में <code>IConfiguration</code> मत पढ़ो।</p>",
          hg: "<p>Jo bhi environments ke beech badalta hai, use configuration mein rakho: URLs, timeouts, feature switches, SLA hours. Keys ki ginti kam rakho aur har section ko ek baar class se bind karo. Har class mein <code>IConfiguration</code> mat padho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a fourth layer, a command-line value <code>--Sla:Hours=6</code>, after the environment variables. Print <code>Sla:Hours</code> and check that the command line now wins.</p>",
            hi: "<p>Environment variables के बाद चौथी परत जोड़ो: command-line value <code>--Sla:Hours=6</code>। <code>Sla:Hours</code> print करो और देखो कि अब command line जीतती है।</p>",
            hg: "<p>Environment variables ke baad chauthi parat jodo: command-line value <code>--Sla:Hours=6</code>. <code>Sla:Hours</code> print karo aur dekho ki ab command line jeetti hai.</p>"
          },
          hint: {
            en: "<p>Put both command-line values in one array passed to <code>AddCommandLine</code>.</p>",
            hi: "<p>दोनों command-line values एक array में रखकर <code>AddCommandLine</code> को दो।</p>",
            hg: "<p>Dono command-line values ek array mein rakhkar <code>AddCommandLine</code> ko do.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            caption: {
              en: "Solution: command line wins",
              hi: "हल: command line जीतती है",
              hg: "Solution: command line jeetti hai"
            },
            src: "using Microsoft.Extensions.Configuration;\n\nEnvironment.SetEnvironmentVariable(\"CRM_Sla__Hours\", \"12\");\n\nvar config = new ConfigurationBuilder()\n    .AddInMemoryCollection(new Dictionary<string, string?> { [\"Sla:Hours\"] = \"24\" })\n    .AddEnvironmentVariables(\"CRM_\")\n    .AddCommandLine(new[] { \"--Sla:Hours=6\" })\n    .Build();\n\nConsole.WriteLine($\"Sla:Hours = {config[\"Sla:Hours\"]}\");",
            check: "run",
            expected: "Sla:Hours = 6"
          }
        },
        quiz: {
          q: {
            en: "The JSON file says <code>Sla:Hours</code> is 24. An environment variable <code>Sla__Hours</code> says 12, added after the file. What does the app read?",
            hi: "JSON file में <code>Sla:Hours</code> 24 है। File के बाद जुड़ा environment variable <code>Sla__Hours</code> 12 कहता है। App क्या पढ़ेगा?",
            hg: "JSON file mein <code>Sla:Hours</code> 24 hai. File ke baad juda environment variable <code>Sla__Hours</code> 12 kehta hai. App kya padhega?"
          },
          options: [
            {
              en: "12, because the later provider wins",
              hi: "12, क्योंकि बाद वाला provider जीतता है",
              hg: "12, kyunki baad wala provider jeetta hai"
            },
            {
              en: "24, because files always win",
              hi: "24, क्योंकि files हमेशा जीतती हैं",
              hg: "24, kyunki files hamesha jeetti hain"
            },
            {
              en: "An error for the duplicate key",
              hi: "Duplicate key का error",
              hg: "Duplicate key ka error"
            },
            {
              en: "36, the two values are added",
              hi: "36, दोनों values जुड़ जाती हैं",
              hg: "36, dono values jud jaati hain"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Providers do not merge numbers. They are layered, and for the same key the provider added last supplies the value.</p>",
            hi: "<p>Providers numbers को जोड़ते नहीं। वे परतों में लगते हैं, और एक ही key के लिए सबसे आख़िर में जुड़ा provider value देता है।</p>",
            hg: "<p>Providers numbers ko jodte nahi. Woh partein banakar lagte hain, aur ek hi key ke liye sabse aakhir mein juda provider value deta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Configuration is layered key and value pairs; the last provider added wins.</li><li><code>Sla:Hours</code> in JSON is <code>Sla__Hours</code> as an environment variable.</li><li>Bind a section to a class once; never commit secrets.</li></ul>",
          hi: "<ul><li>Configuration परतों वाले key और value जोड़े हैं; सबसे आख़िर में जुड़ा provider जीतता है।</li><li>JSON का <code>Sla:Hours</code> environment variable में <code>Sla__Hours</code> है।</li><li>Section को एक बार class से bind करो; secrets कभी commit मत करो।</li></ul>",
          hg: "<ul><li>Configuration partein wale key aur value jode hain; sabse aakhir mein juda provider jeetta hai.</li><li>JSON ka <code>Sla:Hours</code> environment variable mein <code>Sla__Hours</code> hai.</li><li>Section ko ek baar class se bind karo; secrets kabhi commit mat karo.</li></ul>"
        }
      },
      code: [
        {
          frameworks: [
            "aspnetcore"
          ],
          caption: {
            en: "Defaults, environment variable, command line",
            hi: "Defaults, environment variable और command line",
            hg: "Defaults, environment variable aur command line"
          },
          src: "using Microsoft.Extensions.Configuration;\n\nEnvironment.SetEnvironmentVariable(\"CRM_Sla__Hours\", \"12\");\n\nvar defaults = new Dictionary<string, string?>\n{\n    [\"Sla:Hours\"] = \"24\",\n    [\"Sla:Priority\"] = \"Normal\",\n    [\"Notify:Channel\"] = \"Sms\"\n};\n\nvar config = new ConfigurationBuilder()\n    .AddInMemoryCollection(defaults)                          // layer 1: defaults (appsettings.json in a real app)\n    .AddEnvironmentVariables(\"CRM_\")                          // layer 2: the server\n    .AddCommandLine(new[] { \"--Notify:Channel=Email\" })       // layer 3: this run only, wins\n    .Build();\n\nConsole.WriteLine($\"Sla:Hours = {config[\"Sla:Hours\"]}\");\nConsole.WriteLine($\"Sla:Priority = {config[\"Sla:Priority\"]}\");\nConsole.WriteLine($\"Notify:Channel = {config[\"Notify:Channel\"]}\");\nConsole.WriteLine($\"Sla:Missing = {config[\"Sla:Missing\"] ?? \"(not set)\"}\");\n\nvar sla = config.GetSection(\"Sla\").Get<SlaOptions>()!;\nConsole.WriteLine($\"Bound: {sla.Hours}h, {sla.Priority}\");\n\npublic class SlaOptions\n{\n    public int Hours { get; set; }\n    public string Priority { get; set; } = \"\";\n}",
          check: "run",
          expected: "Sla:Hours = 12\nSla:Priority = Normal\nNotify:Channel = Email\nSla:Missing = (not set)\nBound: 12h, Normal"
        }
      ]
    },
    {
      id: "environments",
      depth: "short",
      title: {
        en: "Environments: Development vs Production",
        hi: "Environments: Development बनाम Production",
        hg: "Environments: Development banam Production"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 4 made settings change per machine. The <b>environment</b> name is the same idea for behaviour: the app asks \"where am I running?\" and acts differently. We reuse the middleware idea from lessons 2 and 3 to build an error handler that depends on it.</p>",
          hi: "<p>पाठ 4 में settings हर machine पर बदलने लगीं। <b>Environment</b> का नाम वही बात behaviour के लिए है: app पूछता है \"मैं कहाँ चल रहा हूँ?\" और उसी हिसाब से अलग चलता है। पाठ 2 और 3 का middleware idea लेकर हम उस पर टिका error handler बनाते हैं।</p>",
          hg: "<p>Lesson 4 mein settings har machine par badalne lagi. <b>Environment</b> ka naam wahi baat behaviour ke liye hai: app poochta hai \"main kahan chal raha hoon?\" aur usi hisaab se alag chalta hai. Lesson 2 aur 3 ka middleware idea lekar hum us par tika error handler banate hain.</p>"
        },
        what: {
          en: "<p>The <b>environment</b> is a name: <code>Development</code>, <code>Staging</code> or <code>Production</code>. It is set by the <code>ASPNETCORE_ENVIRONMENT</code> variable (<code>DOTNET_ENVIRONMENT</code> also works). If nothing is set, ASP.NET Core assumes <b>Production</b>. In code you ask <code>app.Environment.IsDevelopment()</code>.</p>",
          hi: "<p><b>Environment</b> एक नाम है: <code>Development</code>, <code>Staging</code> या <code>Production</code>। इसे <code>ASPNETCORE_ENVIRONMENT</code> variable से set करते हैं (<code>DOTNET_ENVIRONMENT</code> भी चलता है)। कुछ भी set न हो तो ASP.NET Core मान लेता है कि यह <b>Production</b> है। Code में <code>app.Environment.IsDevelopment()</code> से पूछते हैं।</p>",
          hg: "<p><b>Environment</b> ek naam hai: <code>Development</code>, <code>Staging</code> ya <code>Production</code>. Ise <code>ASPNETCORE_ENVIRONMENT</code> variable se set karte hain (<code>DOTNET_ENVIRONMENT</code> bhi chalta hai). Kuch bhi set na ho to ASP.NET Core maan leta hai ki ye <b>Production</b> hai. Code mein <code>app.Environment.IsDevelopment()</code> se poochte hain.</p>"
        },
        why: {
          en: "<p>A developer needs the full error message. A customer must never see it: it can leak table names or paths. The same code must show detail on your laptop and a safe message in production, without editing the file.</p>",
          hi: "<p>Developer को पूरा error message चाहिए। Customer को वह कभी नहीं दिखना चाहिए: उसमें table के नाम या paths खुल सकते हैं। एक ही code laptop पर detail दिखाए और production में सुरक्षित message, बिना file बदले।</p>",
          hg: "<p>Developer ko poora error message chahiye. Customer ko woh kabhi nahi dikhna chahiye: usmein table ke naam ya paths khul sakte hain. Ek hi code laptop par detail dikhaye aur production mein safe message, bina file badle.</p>"
        },
        analogy: {
          en: "<p>A doctor talks differently in two places. With a colleague in the staff room (Development) she says the full diagnosis. With the patient's family in the corridor (Production) she says a calm, short summary.</p>",
          hi: "<p>एक doctor दो जगह अलग बोलती हैं। Staff room में साथी doctor के साथ (Development) पूरा diagnosis बताती हैं। Corridor में मरीज़ के घरवालों के साथ (Production) शांत और छोटा सार बताती हैं।</p>",
          hg: "<p>Ek doctor do jagah alag bolti hain. Staff room mein saathi doctor ke saath (Development) poora diagnosis batati hain. Corridor mein mareez ke gharwalon ke saath (Production) shaant aur chhota saar batati hain.</p>"
        },
        lines: [
          {
            code: "foreach (var environment in new[] { \"Development\", \"Production\" })",
            note: {
              en: "We run the same app twice, once per environment, to compare the answers.",
              hi: "हम एक ही app दो बार चलाते हैं, हर environment के लिए एक बार, ताकि जवाब मिला सकें।",
              hg: "Hum ek hi app do baar chalate hain, har environment ke liye ek baar, taaki jawaab mila sakein."
            }
          },
          {
            code: "new WebApplicationOptions { EnvironmentName = environment }",
            note: {
              en: "Sets the environment in code for this demo. A real app gets it from <code>ASPNETCORE_ENVIRONMENT</code> and never hard-codes it.",
              hi: "इस demo के लिए code में environment set करता है। असली app इसे <code>ASPNETCORE_ENVIRONMENT</code> से लेता है और कभी hard-code नहीं करता।",
              hg: "Is demo ke liye code mein environment set karta hai. Asli app ise <code>ASPNETCORE_ENVIRONMENT</code> se leta hai aur kabhi hard-code nahi karta."
            }
          },
          {
            code: "app.UseExceptionHandler(errors => errors.Run(async context =>",
            note: {
              en: "The built-in exception handler is the <b>first</b> middleware we add, so it catches errors from everything after it (lesson 2). The inner delegate writes the answer.",
              hi: "Built-in exception handler हमारा जोड़ा <b>पहला</b> middleware है, इसलिए अपने बाद की हर चीज़ के errors पकड़ता है (पाठ 2)। अंदर का delegate जवाब लिखता है।",
              hg: "Built-in exception handler hamara joda <b>pehla</b> middleware hai, isliye apne baad ki har cheez ke errors pakadta hai (lesson 2). Andar ka delegate jawaab likhta hai."
            }
          },
          {
            code: "context.Features.Get<IExceptionHandlerFeature>()!.Error",
            note: {
              en: "The handler finds the original exception through this feature, so it can decide what to show.",
              hi: "Handler इस feature के ज़रिए असली exception पाता है, ताकि तय कर सके कि क्या दिखाना है।",
              hg: "Handler is feature ke zariye asli exception paata hai, taaki tay kar sake ki kya dikhana hai."
            }
          },
          {
            code: "app.Environment.IsDevelopment() ? error.Message : \"Something went wrong. Please try again later.\"",
            note: {
              en: "The environment check: detail in Development, a safe message everywhere else. In production, log the detail instead of showing it.",
              hi: "Environment की जाँच: Development में detail, बाक़ी हर जगह सुरक्षित message। Production में detail दिखाने की जगह log करो।",
              hg: "Environment ki jaanch: Development mein detail, baaki har jagah safe message. Production mein detail dikhane ki jagah log karo."
            }
          },
          {
            code: "string (int id) => throw new InvalidOperationException",
            note: {
              en: "A handler that always fails, so we can see the error path. The explicit <code>string</code> return type lets a lambda consist of just a <code>throw</code>.",
              hi: "ऐसा handler जो हमेशा fail होता है, ताकि error वाला रास्ता दिखे। Explicit <code>string</code> return type की वजह से lambda सिर्फ़ <code>throw</code> का हो सकता है।",
              hg: "Aisa handler jo hamesha fail hota hai, taaki error wala rasta dikhe. Explicit <code>string</code> return type ki wajah se lambda sirf <code>throw</code> ka ho sakta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Showing exception messages or stack traces to users in production.</li><li>Branching on the environment name for business rules. Use environment for infrastructure behaviour only; use configuration for business values.</li><li>Forgetting the default. With no variable set, the app is <b>Production</b>, not Development. On your laptop <code>launchSettings.json</code> sets Development, so you only notice this on the server.</li></ul>",
          hi: "<ul><li>Production में users को exception message या stack trace दिखाना।</li><li>Business rules के लिए environment के नाम पर फ़ैसला करना। Environment सिर्फ़ infrastructure के behaviour के लिए रखो; business values के लिए configuration इस्तेमाल करो।</li><li>Default भूल जाना। Variable set न हो तो app <b>Production</b> होता है, Development नहीं। Laptop पर <code>launchSettings.json</code> Development set कर देता है, इसलिए यह बात server पर ही पता चलती है।</li></ul>",
          hg: "<ul><li>Production mein users ko exception message ya stack trace dikhana.</li><li>Business rules ke liye environment ke naam par faisla karna. Environment sirf infrastructure ke behaviour ke liye rakho; business values ke liye configuration use karo.</li><li>Default bhool jaana. Variable set na ho to app <b>Production</b> hota hai, Development nahi. Laptop par <code>launchSettings.json</code> Development set kar deta hai, isliye ye baat server par hi pata chalti hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use the environment for things like detailed error pages, Swagger UI and seeding test data in Development, and strict HTTPS and HSTS outside it. Use a Staging environment to rehearse the production setup.</p>",
          hi: "<p>Environment का इस्तेमाल करो: Development में detailed error pages, Swagger UI और test data भरना; बाक़ी जगह सख़्त HTTPS और HSTS। Production की तैयारी परखने के लिए Staging environment रखो।</p>",
          hg: "<p>Environment ka use karo: Development mein detailed error pages, Swagger UI aur test data bharna; baaki jagah sakht HTTPS aur HSTS. Production ki taiyaari parakhne ke liye Staging environment rakho.</p>"
        },
        exercise: {
          task: {
            en: "<p>Make <code>Staging</code> show the detailed message too. Run the three environments Development, Staging and Production and print each answer.</p>",
            hi: "<p><code>Staging</code> में भी detail वाला message दिखाओ। तीनों environments Development, Staging और Production चलाओ और हर जवाब print करो।</p>",
            hg: "<p><code>Staging</code> mein bhi detail wala message dikhao. Teeno environments Development, Staging aur Production chalao aur har jawaab print karo.</p>"
          },
          hint: {
            en: "<p>Use <code>app.Environment.IsDevelopment() || app.Environment.IsStaging()</code>.</p>",
            hi: "<p><code>app.Environment.IsDevelopment() || app.Environment.IsStaging()</code> इस्तेमाल करो।</p>",
            hg: "<p><code>app.Environment.IsDevelopment() || app.Environment.IsStaging()</code> use karo.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            caption: {
              en: "Solution: detail in Staging too",
              hi: "हल: Staging में भी detail",
              hg: "Solution: Staging mein bhi detail"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Diagnostics;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nforeach (var environment in new[] { \"Development\", \"Staging\", \"Production\" })\n    Console.WriteLine(await Ask(environment));\n\nasync Task<string> Ask(string environment)\n{\n    var builder = WebApplication.CreateBuilder(new WebApplicationOptions { EnvironmentName = environment });\n    builder.Logging.ClearProviders();\n    builder.WebHost.UseTestServer();\n    var app = builder.Build();\n\n    app.UseExceptionHandler(errors => errors.Run(async context =>\n    {\n        var error = context.Features.Get<IExceptionHandlerFeature>()!.Error;\n        var showDetail = app.Environment.IsDevelopment() || app.Environment.IsStaging();\n        await context.Response.WriteAsync(showDetail ? error.Message : \"Something went wrong. Please try again later.\");\n    }));\n    app.MapGet(\"/tickets/{id:int}\", string (int id) => throw new InvalidOperationException($\"Ticket {id} not found in the database\"));\n\n    await app.StartAsync();\n    var response = await app.GetTestClient().GetAsync(\"/tickets/999\");\n    var body = await response.Content.ReadAsStringAsync();\n    await app.StopAsync();\n    return $\"{environment}: {(int)response.StatusCode} {body}\";\n}",
            check: "run",
            expected: "Development: 500 Ticket 999 not found in the database\nStaging: 500 Ticket 999 not found in the database\nProduction: 500 Something went wrong. Please try again later."
          }
        },
        quiz: {
          q: {
            en: "Nobody sets <code>ASPNETCORE_ENVIRONMENT</code> on a server. Which environment does the app use?",
            hi: "किसी ने server पर <code>ASPNETCORE_ENVIRONMENT</code> set नहीं किया। App कौन-सा environment इस्तेमाल करता है?",
            hg: "Kisi ne server par <code>ASPNETCORE_ENVIRONMENT</code> set nahi kiya. App kaunsa environment use karta hai?"
          },
          options: [
            {
              en: "Development",
              hi: "Development होगा",
              hg: "Development hoga"
            },
            {
              en: "Staging",
              hi: "Staging होगा",
              hg: "Staging hoga"
            },
            {
              en: "Production",
              hi: "Production होगा",
              hg: "Production hoga"
            },
            {
              en: "None; the app refuses to start",
              hi: "कोई नहीं; app शुरू ही नहीं होता",
              hg: "Koi nahi; app shuru hi nahi hota"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>The default is <b>Production</b>. That is the safe choice: a forgotten setting must not expose detailed errors.</p>",
            hi: "<p>Default <b>Production</b> है। यही सुरक्षित चुनाव है: भूली हुई setting से detailed errors बाहर नहीं खुलने चाहिए।</p>",
            hg: "<p>Default <b>Production</b> hai. Yahi safe chunaav hai: bhooli hui setting se detailed errors bahar nahi khulne chahiye.</p>"
          }
        },
        recap: {
          en: "<ul><li>The environment is a name from <code>ASPNETCORE_ENVIRONMENT</code>; the default is Production.</li><li>Ask <code>app.Environment.IsDevelopment()</code> to change infrastructure behaviour.</li><li>Show error detail only in Development or Staging, never to production users.</li></ul>",
          hi: "<ul><li>Environment <code>ASPNETCORE_ENVIRONMENT</code> से आया एक नाम है; default Production है।</li><li>Infrastructure का behaviour बदलने के लिए <code>app.Environment.IsDevelopment()</code> से पूछो।</li><li>Error का detail सिर्फ़ Development या Staging में दिखाओ, production के users को कभी नहीं।</li></ul>",
          hg: "<ul><li>Environment <code>ASPNETCORE_ENVIRONMENT</code> se aaya ek naam hai; default Production hai.</li><li>Infrastructure ka behaviour badalne ke liye <code>app.Environment.IsDevelopment()</code> se poocho.</li><li>Error ka detail sirf Development ya Staging mein dikhao, production ke users ko kabhi nahi.</li></ul>"
        }
      },
      code: [
        {
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          caption: {
            en: "Same code, two environments",
            hi: "एक ही code, दो environments",
            hg: "Ek hi code, do environments"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Diagnostics;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nforeach (var environment in new[] { \"Development\", \"Production\" })\n    Console.WriteLine(await Ask(environment));\n\nasync Task<string> Ask(string environment)\n{\n    var builder = WebApplication.CreateBuilder(new WebApplicationOptions { EnvironmentName = environment });\n    builder.Logging.ClearProviders();\n    builder.WebHost.UseTestServer();\n    var app = builder.Build();\n\n    app.UseExceptionHandler(errors => errors.Run(async context =>\n    {\n        var error = context.Features.Get<IExceptionHandlerFeature>()!.Error;\n        await context.Response.WriteAsync(app.Environment.IsDevelopment() ? error.Message : \"Something went wrong. Please try again later.\");\n    }));\n    app.MapGet(\"/tickets/{id:int}\", string (int id) => throw new InvalidOperationException($\"Ticket {id} not found in the database\"));\n\n    await app.StartAsync();\n    var response = await app.GetTestClient().GetAsync(\"/tickets/999\");\n    var body = await response.Content.ReadAsStringAsync();\n    await app.StopAsync();\n    return $\"{environment}: {(int)response.StatusCode} {body}\";\n}",
          check: "run",
          expected: "Development: 500 Ticket 999 not found in the database\nProduction: 500 Something went wrong. Please try again later."
        }
      ]
    },
    {
      id: "logging",
      depth: "short",
      title: {
        en: "Logging with message templates",
        hi: "Message templates के साथ logging",
        hg: "Message templates ke saath logging"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 5 said \"log the detail in production instead of showing it\". Today is that logging: how to ask for a logger, which level to use, and how to write the message so tools can search it. The builder from lesson 1 already registers logging.</p>",
          hi: "<p>पाठ 5 में कहा था \"production में detail दिखाने की जगह log करो\"। आज वही logging है: logger कैसे माँगें, कौन-सा level इस्तेमाल करें, और message ऐसे कैसे लिखें कि tools उसे खोज सकें। पाठ 1 वाला builder logging पहले से register करता है।</p>",
          hg: "<p>Lesson 5 mein kaha tha \"production mein detail dikhane ki jagah log karo\". Aaj wahi logging hai: logger kaise maangein, kaunsa level use karein, aur message aise kaise likhein ki tools use khoj sakein. Lesson 1 wala builder logging pehle se register karta hai.</p>"
        },
        what: {
          en: "<p><b>Logging</b> writes events with a <b>level</b> (Trace, Debug, Information, Warning, Error, Critical) to providers such as the console. You get an <code>ILogger&lt;T&gt;</code> from DI. Write the message as a <b>template</b> with named holes: <code>\"Ticket {TicketId} assigned to {Agent}\"</code>, and pass the values as separate arguments.</p>",
          hi: "<p><b>Logging</b> events को एक <b>level</b> (Trace, Debug, Information, Warning, Error, Critical) के साथ providers (जैसे console) में लिखती है। <code>ILogger&lt;T&gt;</code> DI से मिलता है। Message को <b>template</b> की तरह नाम वाले placeholders के साथ लिखो: <code>\"Ticket {TicketId} assigned to {Agent}\"</code>, और values अलग arguments में दो।</p>",
          hg: "<p><b>Logging</b> events ko ek <b>level</b> (Trace, Debug, Information, Warning, Error, Critical) ke saath providers (jaise console) mein likhti hai. <code>ILogger&lt;T&gt;</code> DI se milta hai. Message ko <b>template</b> ki tarah naam wale placeholders ke saath likho: <code>\"Ticket {TicketId} assigned to {Agent}\"</code>, aur values alag arguments mein do.</p>"
        },
        why: {
          en: "<p>At 2 a.m. someone searches the logs for \"all events for TicketId 502\". With templates the value is kept as a named field and is searchable. If you glue the text together yourself, the logger only sees one flat string.</p>",
          hi: "<p>रात 2 बजे कोई logs में खोजता है \"TicketId 502 के सारे events\"। Templates में value नाम वाले field की तरह बची रहती है और खोजी जा सकती है। अगर text ख़ुद जोड़ दो, तो logger को सिर्फ़ एक सपाट string दिखती है।</p>",
          hg: "<p>Raat 2 baje koi logs mein khojta hai \"TicketId 502 ke saare events\". Templates mein value naam wale field ki tarah bachi rehti hai aur khoji ja sakti hai. Agar text khud jod do, to logger ko sirf ek sapaat string dikhti hai.</p>"
        },
        analogy: {
          en: "<p>A courier register with printed columns: ticket number, agent, time. You fill the columns instead of writing a sentence, so later you can sort and filter by any column.</p>",
          hi: "<p>Courier का register जिसमें छपे हुए columns हैं: ticket number, agent, समय। तुम वाक्य लिखने की जगह columns भरते हो, इसलिए बाद में किसी भी column से sort और filter कर सकते हो।</p>",
          hg: "<p>Courier ka register jisme chhape hue columns hain: ticket number, agent, samay. Tum vaakya likhne ki jagah columns bharte ho, isliye baad mein kisi bhi column se sort aur filter kar sakte ho.</p>"
        },
        lines: [
          {
            code: ".SetMinimumLevel(LogLevel.Information)",
            note: {
              en: "The minimum level. Anything below it, such as Debug, is dropped before it reaches the provider. In a real app this comes from the <code>Logging:LogLevel</code> configuration section.",
              hi: "सबसे कम level। उससे नीचे की चीज़ें, जैसे Debug, provider तक पहुँचने से पहले ही गिरा दी जाती हैं। असली app में यह <code>Logging:LogLevel</code> configuration section से आता है।",
              hg: "Sabse kam level. Usse neeche ki cheezein, jaise Debug, provider tak pahunchne se pehle hi gira di jaati hain. Asli app mein ye <code>Logging:LogLevel</code> configuration section se aata hai."
            }
          },
          {
            code: "factory.CreateLogger<TicketService>()",
            note: {
              en: "The logger is typed. <code>TicketService</code> becomes the <b>category</b> of every message, so you can see which class wrote it. In a controller or service you receive <code>ILogger&lt;T&gt;</code> by DI.",
              hi: "Logger typed होता है। <code>TicketService</code> हर message की <b>category</b> बन जाता है, इसलिए दिखता है कि कौन-सी class ने लिखा। Controller या service में <code>ILogger&lt;T&gt;</code> DI से मिलता है।",
              hg: "Logger typed hota hai. <code>TicketService</code> har message ki <b>category</b> ban jaata hai, isliye dikhta hai ki kaunsi class ne likha. Controller ya service mein <code>ILogger&lt;T&gt;</code> DI se milta hai."
            }
          },
          {
            code: "logger.LogInformation(\"Ticket {TicketId} assigned to {Agent}\", 501, \"Meena\");",
            note: {
              en: "The template has named holes. The values <code>501</code> and <code>\"Meena\"</code> fill them in order. The names are what log tools index.",
              hi: "Template में नाम वाले placeholders हैं। Values <code>501</code> और <code>\"Meena\"</code> क्रम से उन्हें भरती हैं। Log tools इन्हीं नामों को index करते हैं।",
              hg: "Template mein naam wale placeholders hain. Values <code>501</code> aur <code>\"Meena\"</code> kram se unhein bharti hain. Log tools inhi naamon ko index karte hain."
            }
          },
          {
            code: "logger.LogWarning(\"Ticket {TicketId} breached SLA by {Hours} hours\", 502, 3);",
            note: {
              en: "Use <b>Warning</b> for \"something is off but we continue\", such as a missed SLA.",
              hi: "<b>Warning</b> उस हालत के लिए जब \"कुछ गड़बड़ है पर हम चल रहे हैं\", जैसे SLA छूट जाना।",
              hg: "<b>Warning</b> us haalat ke liye jab \"kuch gadbad hai par hum chal rahe hain\", jaise SLA chhoot jaana."
            }
          },
          {
            code: "logger.LogError(new InvalidOperationException(\"SMS gateway down\"), \"Could not notify {Customer}\", \"Ravi\");",
            note: {
              en: "Pass the exception as the <b>first</b> argument so its type and stack trace are kept. Do not paste <code>ex.Message</code> into the text.",
              hi: "Exception को <b>पहले</b> argument में दो ताकि उसका type और stack trace बचे। <code>ex.Message</code> को text में चिपकाओ मत।",
              hg: "Exception ko <b>pehle</b> argument mein do taaki uska type aur stack trace bache. <code>ex.Message</code> ko text mein chipkao mat."
            }
          },
          {
            code: "values.Where(v => v.Key != \"{OriginalFormat}\")",
            note: {
              en: "The logger passes the named values along with the text. Our small provider prints them, which proves they stay separate and searchable.",
              hi: "Logger text के साथ नाम वाली values भी आगे देता है। हमारा छोटा provider उन्हें print करता है, जो साबित करता है कि वे अलग और खोजने लायक रहती हैं।",
              hg: "Logger text ke saath naam wali values bhi aage deta hai. Hamara chhota provider unhein print karta hai, jo saabit karta hai ki woh alag aur khojne laayak rehti hain."
            }
          }
        ],
        focus: {
          check: "none",
          caption: {
            en: "Avoid: interpolation flattens the values",
            hi: "बचो: interpolation से values सपाट हो जाती हैं",
            hg: "Bacho: interpolation se values sapaat ho jaati hain"
          },
          src: "// Bad: the logger sees one finished string, no TicketId field\nlogger.LogInformation($\"Ticket {id} assigned to {agent}\");\n\n// Good: the logger keeps TicketId and Agent as named values\nlogger.LogInformation(\"Ticket {TicketId} assigned to {Agent}\", id, agent);"
        },
        mistakes: {
          en: "<ul><li>Using <code>$\"...\"</code> or <code>+</code> to build the message. It loses the named fields, and it builds the string even when the level is switched off.</li><li>Logging at <code>Information</code> inside a tight loop, which floods the logs.</li><li>Logging secrets or full personal data such as passwords, card numbers or whole customer records.</li></ul>",
          hi: "<ul><li>Message बनाने के लिए <code>$\"...\"</code> या <code>+</code> इस्तेमाल करना। नाम वाले fields खो जाते हैं, और level बंद होने पर भी string बन जाती है।</li><li>Tight loop के अंदर <code>Information</code> पर log करना, जिससे logs में बाढ़ आ जाती है।</li><li>Secrets या पूरा निजी data log करना, जैसे passwords, card numbers या पूरे customer records।</li></ul>",
          hg: "<ul><li>Message banane ke liye <code>$\"...\"</code> ya <code>+</code> use karna. Naam wale fields kho jaate hain, aur level band hone par bhi string ban jaati hai.</li><li>Tight loop ke andar <code>Information</code> par log karna, jisse logs mein baadh aa jaati hai.</li><li>Secrets ya poora niji data log karna, jaise passwords, card numbers ya poore customer records.</li></ul>"
        },
        whenToUse: {
          en: "<p>Log business events at Information (ticket assigned), recoverable problems at Warning, failures at Error with the exception, and detail for debugging at Debug. For very hot paths, use the <code>[LoggerMessage]</code> source generator (see Deep Dive).</p>",
          hi: "<p>Business events Information पर log करो (ticket assigned), सुधर सकने वाली दिक़्क़तें Warning पर, failures Error पर exception के साथ, और debugging का detail Debug पर। बहुत तेज़ रास्तों के लिए <code>[LoggerMessage]</code> source generator इस्तेमाल करो (Deep Dive देखो)।</p>",
          hg: "<p>Business events Information par log karo (ticket assigned), sudhar sakne wali dikkatein Warning par, failures Error par exception ke saath, aur debugging ka detail Debug par. Bahut tez raaston ke liye <code>[LoggerMessage]</code> source generator use karo (Deep Dive dekho).</p>"
        },
        exercise: {
          task: {
            en: "<p>Change the minimum level to <code>Warning</code> and run the program again. Predict which of the four log calls still print, then check the output.</p>",
            hi: "<p>Minimum level को <code>Warning</code> कर दो और program फिर चलाओ। पहले अंदाज़ा लगाओ कि चार log calls में से कौन-सी अब भी print होंगी, फिर output देखो।</p>",
            hg: "<p>Minimum level ko <code>Warning</code> kar do aur program phir chalao. Pehle andaaza lagao ki chaar log calls mein se kaunsi ab bhi print hongi, phir output dekho.</p>"
          },
          hint: {
            en: "<p>A message is printed when its level is the minimum level or higher. Information is lower than Warning.</p>",
            hi: "<p>Message तब print होता है जब उसका level minimum level या उससे ऊपर हो। Information, Warning से नीचे है।</p>",
            hg: "<p>Message tab print hota hai jab uska level minimum level ya usse upar ho. Information, Warning se neeche hai.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            caption: {
              en: "Solution: only Warning and Error remain",
              hi: "हल: सिर्फ़ Warning और Error बचते हैं",
              hg: "Solution: sirf Warning aur Error bachte hain"
            },
            src: "using Microsoft.Extensions.Logging;\n\nusing var factory = LoggerFactory.Create(builder => builder\n    .SetMinimumLevel(LogLevel.Warning)\n    .AddProvider(new LineProvider()));\nvar logger = factory.CreateLogger<TicketService>();\n\nlogger.LogDebug(\"Checking ticket {TicketId}\", 501);\nlogger.LogInformation(\"Ticket {TicketId} assigned to {Agent}\", 501, \"Meena\");\nlogger.LogWarning(\"Ticket {TicketId} breached SLA by {Hours} hours\", 502, 3);\nlogger.LogError(new InvalidOperationException(\"SMS gateway down\"), \"Could not notify {Customer}\", \"Ravi\");\n\npublic class TicketService { }\n\nclass LineProvider : ILoggerProvider\n{\n    public ILogger CreateLogger(string category) => new LineLogger(category);\n    public void Dispose() { }\n}\n\nclass LineLogger(string category) : ILogger\n{\n    public IDisposable? BeginScope<TState>(TState state) where TState : notnull => null;\n    public bool IsEnabled(LogLevel level) => true;\n\n    public void Log<TState>(LogLevel level, EventId id, TState state, Exception? exception, Func<TState, Exception?, string> formatter)\n    {\n        Console.WriteLine($\"[{level}] {category}: {formatter(state, exception)}\");\n    }\n}",
            check: "run",
            expected: "[Warning] TicketService: Ticket 502 breached SLA by 3 hours\n[Error] TicketService: Could not notify Ravi"
          }
        },
        quiz: {
          q: {
            en: "Which line logs the ticket id so that a log tool can search by <code>TicketId</code>?",
            hi: "कौन-सी line ticket id को ऐसे log करती है कि log tool <code>TicketId</code> से खोज सके?",
            hg: "Kaunsi line ticket id ko aise log karti hai ki log tool <code>TicketId</code> se khoj sake?"
          },
          options: [
            {
              en: "<code>logger.LogInformation($\"Ticket {id} assigned\")</code>",
              hi: "<code>logger.LogInformation($\"Ticket {id} assigned\")</code> — interpolation से",
              hg: "<code>logger.LogInformation($\"Ticket {id} assigned\")</code> — interpolation se"
            },
            {
              en: "<code>logger.LogInformation(\"Ticket {TicketId} assigned\", id)</code>",
              hi: "<code>logger.LogInformation(\"Ticket {TicketId} assigned\", id)</code> — template से",
              hg: "<code>logger.LogInformation(\"Ticket {TicketId} assigned\", id)</code> — template se"
            },
            {
              en: "<code>logger.LogInformation(\"Ticket \" + id + \" assigned\")</code>",
              hi: "<code>logger.LogInformation(\"Ticket \" + id + \" assigned\")</code> — + से जोड़कर",
              hg: "<code>logger.LogInformation(\"Ticket \" + id + \" assigned\")</code> — + se jodkar"
            },
            {
              en: "<code>Console.WriteLine(\"Ticket \" + id)</code>",
              hi: "<code>Console.WriteLine(\"Ticket \" + id)</code> — सीधे print करके",
              hg: "<code>Console.WriteLine(\"Ticket \" + id)</code> — seedhe print karke"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Only the template form keeps <code>TicketId</code> as a named value. Interpolation and concatenation hand the logger a finished string, and <code>Console.WriteLine</code> is not logging at all (no level, no category).</p>",
            hi: "<p>सिर्फ़ template वाला रूप <code>TicketId</code> को नाम वाली value की तरह रखता है। Interpolation और concatenation logger को बनी-बनाई string थमा देते हैं, और <code>Console.WriteLine</code> logging है ही नहीं (न level, न category)।</p>",
            hg: "<p>Sirf template wala roop <code>TicketId</code> ko naam wali value ki tarah rakhta hai. Interpolation aur concatenation logger ko bani-banayi string thama dete hain, aur <code>Console.WriteLine</code> logging hai hi nahi (na level, na category).</p>"
          }
        },
        recap: {
          en: "<ul><li>Ask for <code>ILogger&lt;T&gt;</code> from DI; <code>T</code> is the category.</li><li>Write a template with named holes and pass values as arguments, not interpolation.</li><li>Pass an exception as the first argument; the minimum level drops anything lower.</li></ul>",
          hi: "<ul><li><code>ILogger&lt;T&gt;</code> DI से माँगो; <code>T</code> ही category है।</li><li>नाम वाले placeholders का template लिखो और values arguments में दो, interpolation में नहीं।</li><li>Exception पहले argument में दो; minimum level उससे नीचे की हर चीज़ गिरा देता है।</li></ul>",
          hg: "<ul><li><code>ILogger&lt;T&gt;</code> DI se maango; <code>T</code> hi category hai.</li><li>Naam wale placeholders ka template likho aur values arguments mein do, interpolation mein nahi.</li><li>Exception pehle argument mein do; minimum level usse neeche ki har cheez gira deta hai.</li></ul>"
        }
      },
      code: [
        {
          frameworks: [
            "aspnetcore"
          ],
          caption: {
            en: "Levels, templates and an exception",
            hi: "Levels, templates और एक exception",
            hg: "Levels, templates aur ek exception"
          },
          src: "using Microsoft.Extensions.Logging;\n\nusing var factory = LoggerFactory.Create(builder => builder\n    .SetMinimumLevel(LogLevel.Information)\n    .AddProvider(new LineProvider()));\nvar logger = factory.CreateLogger<TicketService>();\n\nlogger.LogDebug(\"Checking ticket {TicketId}\", 501);   // below Information: dropped\nlogger.LogInformation(\"Ticket {TicketId} assigned to {Agent}\", 501, \"Meena\");\nlogger.LogWarning(\"Ticket {TicketId} breached SLA by {Hours} hours\", 502, 3);\nlogger.LogError(new InvalidOperationException(\"SMS gateway down\"), \"Could not notify {Customer}\", \"Ravi\");\n\npublic class TicketService { }\n\n// A tiny provider that prints each message and its named values.\nclass LineProvider : ILoggerProvider\n{\n    public ILogger CreateLogger(string category) => new LineLogger(category);\n    public void Dispose() { }\n}\n\nclass LineLogger(string category) : ILogger\n{\n    public IDisposable? BeginScope<TState>(TState state) where TState : notnull => null;\n    public bool IsEnabled(LogLevel level) => true;\n\n    public void Log<TState>(LogLevel level, EventId id, TState state, Exception? exception, Func<TState, Exception?, string> formatter)\n    {\n        Console.WriteLine($\"[{level}] {category}: {formatter(state, exception)}\");\n        if (state is IEnumerable<KeyValuePair<string, object?>> values)\n            Console.WriteLine(\"    values: \" + string.Join(\", \", values.Where(v => v.Key != \"{OriginalFormat}\").Select(v => $\"{v.Key}={v.Value}\")));\n        if (exception is not null)\n            Console.WriteLine($\"    exception: {exception.Message}\");\n    }\n}",
          check: "run",
          expected: "[Information] TicketService: Ticket 501 assigned to Meena\n    values: TicketId=501, Agent=Meena\n[Warning] TicketService: Ticket 502 breached SLA by 3 hours\n    values: TicketId=502, Hours=3\n[Error] TicketService: Could not notify Ravi\n    values: Customer=Ravi\n    exception: SMS gateway down"
        }
      ]
    },
    {
      id: "filters",
      depth: "short",
      title: {
        en: "Filters: rules around a controller action",
        hi: "Filters: controller action के आसपास के नियम",
        hg: "Filters: controller action ke aaspaas ke niyam"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lessons 2 and 3 built middleware, which sees every request but knows only the raw HTTP request. Today a <b>filter</b> does a similar short-circuit job, but inside MVC controllers, where it also knows the action and its arguments. It also gets a service through DI (Day 11).</p>",
          hi: "<p>पाठ 2 और 3 में middleware बना, जो हर request देखता है पर सिर्फ़ कच्चा HTTP request जानता है। आज <b>filter</b> वैसा ही short-circuit का काम करता है, पर MVC controllers के अंदर, जहाँ उसे action और उसके arguments भी पता होते हैं। उसे DI (Day 11) से service भी मिलती है।</p>",
          hg: "<p>Lesson 2 aur 3 mein middleware bana, jo har request dekhta hai par sirf kachcha HTTP request jaanta hai. Aaj <b>filter</b> waisa hi short-circuit ka kaam karta hai, par MVC controllers ke andar, jahan use action aur uske arguments bhi pata hote hain. Use DI (Day 11) se service bhi milti hai.</p>"
        },
        what: {
          en: "<p>A <b>filter</b> is code that runs before or after a controller action. Types, in order: <b>authorization</b>, <b>resource</b>, <b>action</b>, <b>exception</b> and <b>result</b> filters. An <b>action filter</b> sees the action arguments and can set <code>context.Result</code> to stop the action from running.</p>",
          hi: "<p><b>Filter</b> वह code है जो controller action से पहले या बाद में चलता है। क्रम से types: <b>authorization</b>, <b>resource</b>, <b>action</b>, <b>exception</b> और <b>result</b> filters। <b>Action filter</b> action के arguments देखता है और <code>context.Result</code> set करके action को चलने से रोक सकता है।</p>",
          hg: "<p><b>Filter</b> woh code hai jo controller action se pehle ya baad mein chalta hai. Kram se types: <b>authorization</b>, <b>resource</b>, <b>action</b>, <b>exception</b> aur <b>result</b> filters. <b>Action filter</b> action ke arguments dekhta hai aur <code>context.Result</code> set karke action ko chalne se rok sakta hai.</p>"
        },
        why: {
          en: "<p>Rules such as \"ticket id must be positive\" would otherwise be copied into every action. One filter keeps the rule in one place, and it can use model-binding results that middleware cannot see.</p>",
          hi: "<p>\"Ticket id positive होना चाहिए\" जैसे नियम वरना हर action में नक़ल करने पड़ते। एक filter नियम को एक जगह रखता है, और वह model-binding के नतीजे इस्तेमाल कर सकता है जो middleware नहीं देख सकता।</p>",
          hg: "<p>\"Ticket id positive hona chahiye\" jaise niyam warna har action mein nakal karne padte. Ek filter niyam ko ek jagah rakhta hai, aur woh model-binding ke nateeje use kar sakta hai jo middleware nahi dekh sakta.</p>"
        },
        analogy: {
          en: "<p>A canteen counter. Before you reach the food, a helper checks your coupon (the filter). If the coupon is wrong you never reach the counter. After you are served, the same helper may stamp the coupon.</p>",
          hi: "<p>Canteen का counter। खाने तक पहुँचने से पहले एक helper आपका coupon जाँचता है (filter)। Coupon ग़लत हो तो आप counter तक पहुँचते ही नहीं। परोसे जाने के बाद वही helper coupon पर मुहर भी लगा सकता है।</p>",
          hg: "<p>Canteen ka counter. Khaane tak pahunchne se pehle ek helper aapka coupon jaanchta hai (filter). Coupon galat ho to aap counter tak pahunchte hi nahi. Parose jaane ke baad wahi helper coupon par muhar bhi laga sakta hai.</p>"
        },
        lines: [
          {
            code: "builder.Services.AddScoped<TicketIdFilter>();",
            note: {
              en: "A filter used with <code>[ServiceFilter]</code> must be registered in DI. This also lets it receive services in its constructor.",
              hi: "<code>[ServiceFilter]</code> से इस्तेमाल होने वाला filter DI में register होना चाहिए। इससे उसे constructor में services भी मिल जाती हैं।",
              hg: "<code>[ServiceFilter]</code> se use hone wala filter DI mein register hona chahiye. Isse use constructor mein services bhi mil jaati hain."
            }
          },
          {
            code: "[ServiceFilter(typeof(TicketIdFilter))]",
            note: {
              en: "Attaches the filter to this one action. Put it on the controller class to cover every action in it.",
              hi: "Filter को इसी एक action पर लगाता है। Controller class पर लगाओ तो उसके हर action पर लागू होगा।",
              hg: "Filter ko isi ek action par lagata hai. Controller class par lagao to uske har action par laagu hoga."
            }
          },
          {
            code: "Console.WriteLine(\"action runs\");",
            note: {
              en: "The action body. For an invalid id this line never prints, because the filter stops the request first.",
              hi: "Action की body। ग़लत id पर यह line कभी print नहीं होती, क्योंकि filter पहले ही request रोक देता है।",
              hg: "Action ki body. Galat id par ye line kabhi print nahi hoti, kyunki filter pehle hi request rok deta hai."
            }
          },
          {
            code: "var id = (int)context.ActionArguments[\"id\"]!;",
            note: {
              en: "The filter can read the action arguments after model binding. Middleware sees only the raw request text, not the bound <code>int id</code>.",
              hi: "Filter model binding के बाद action के arguments पढ़ सकता है। Middleware सिर्फ़ request का कच्चा text देख पाता है, bind हुआ <code>int id</code> नहीं।",
              hg: "Filter model binding ke baad action ke arguments padh sakta hai. Middleware sirf request ka kachcha text dekh paata hai, bind hua <code>int id</code> nahi."
            }
          },
          {
            code: "context.Result = new BadRequestObjectResult(\"Ticket id must be positive\");",
            note: {
              en: "Setting <code>context.Result</code> and returning is the short-circuit for filters. The action is skipped and this result is sent.",
              hi: "<code>context.Result</code> set करके return करना filters का short-circuit है। Action छूट जाता है और यही result भेजा जाता है।",
              hg: "<code>context.Result</code> set karke return karna filters ka short-circuit hai. Action chhoot jaata hai aur yahi result bheja jaata hai."
            }
          },
          {
            code: "var executed = await next();",
            note: {
              en: "Like middleware, <code>next()</code> runs the rest (the action). Code after it sees the outcome, here the type of the result.",
              hi: "Middleware की तरह <code>next()</code> बाक़ी हिस्सा (action) चलाता है। उसके बाद का code नतीजा देख पाता है, यहाँ result का type।",
              hg: "Middleware ki tarah <code>next()</code> baaki hissa (action) chalata hai. Uske baad ka code nateeja dekh paata hai, yahan result ka type."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using <code>[ServiceFilter]</code> but forgetting to register the filter. The request fails at run time because no such service is registered.</li><li>Setting <code>context.Result</code> but also calling <code>next()</code>. MVC throws an <code>InvalidOperationException</code>: a filter either short-circuits or calls <code>next()</code>, never both.</li><li>Using a filter for something every request needs, such as static files. Filters run only for MVC actions; use middleware for that.</li></ul>",
          hi: "<ul><li><code>[ServiceFilter]</code> लगाना पर filter register करना भूल जाना। Request run time पर fail होती है क्योंकि वह service register ही नहीं है।</li><li><code>context.Result</code> set करना और फिर भी <code>next()</code> call करना। MVC <code>InvalidOperationException</code> फेंकता है: filter या तो short-circuit करे या <code>next()</code> call करे, दोनों नहीं।</li><li>ऐसे काम के लिए filter लगाना जो हर request को चाहिए, जैसे static files। Filters सिर्फ़ MVC actions पर चलते हैं; उसके लिए middleware इस्तेमाल करो।</li></ul>",
          hg: "<ul><li><code>[ServiceFilter]</code> lagana par filter register karna bhool jaana. Request run time par fail hoti hai kyunki woh service register hi nahi hai.</li><li><code>context.Result</code> set karna aur phir bhi <code>next()</code> call karna. MVC <code>InvalidOperationException</code> throw karta hai: filter ya to short-circuit kare ya <code>next()</code> call kare, dono nahi.</li><li>Aise kaam ke liye filter lagana jo har request ko chahiye, jaise static files. Filters sirf MVC actions par chalte hain; uske liye middleware use karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use a filter when the rule needs <b>action-level</b> information: arguments, <code>ModelState</code>, the chosen action. Use middleware for plain HTTP concerns that apply to every request. Filter order inside one type: global, then controller, then action on the way in, and the reverse on the way out.</p>",
          hi: "<p>Filter तब इस्तेमाल करो जब नियम को <b>action-level</b> की जानकारी चाहिए: arguments, <code>ModelState</code>, चुना हुआ action। हर request पर लगने वाली सादी HTTP बातों के लिए middleware इस्तेमाल करो। एक ही type के filters का क्रम: global, फिर controller, फिर action अंदर जाते समय, और बाहर आते समय उल्टा।</p>",
          hg: "<p>Filter tab use karo jab niyam ko <b>action-level</b> ki jaankari chahiye: arguments, <code>ModelState</code>, chuna hua action. Har request par lagne wali saadi HTTP baaton ke liye middleware use karo. Ek hi type ke filters ka kram: global, phir controller, phir action andar jaate samay, aur bahar aate samay ulta.</p>"
        },
        exercise: {
          task: {
            en: "<p>Also reject ids above 9999 with <code>Ticket id too large</code>. Call <code>/tickets/10000</code> and print the status and body. The action must not run.</p>",
            hi: "<p>9999 से बड़े ids को भी <code>Ticket id too large</code> के साथ ठुकराओ। <code>/tickets/10000</code> call करो और status और body print करो। Action चलना नहीं चाहिए।</p>",
            hg: "<p>9999 se bade ids ko bhi <code>Ticket id too large</code> ke saath thukrao. <code>/tickets/10000</code> call karo aur status aur body print karo. Action chalna nahi chahiye.</p>"
          },
          hint: {
            en: "<p>Add a second <code>if</code> in the filter, before <code>next()</code>, with its own <code>BadRequestObjectResult</code> and <code>return</code>.</p>",
            hi: "<p>Filter में <code>next()</code> से पहले दूसरा <code>if</code> जोड़ो, अपने <code>BadRequestObjectResult</code> और <code>return</code> के साथ।</p>",
            hg: "<p>Filter mein <code>next()</code> se pehle doosra <code>if</code> jodo, apne <code>BadRequestObjectResult</code> aur <code>return</code> ke saath.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            caption: {
              en: "Solution: a maximum id",
              hi: "हल: id की max हद",
              hg: "Solution: id ki max hadd"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.AspNetCore.Mvc.Filters;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddControllers();\nbuilder.Services.AddSingleton<TicketRules>();\nbuilder.Services.AddScoped<TicketIdFilter>();\nvar app = builder.Build();\napp.MapControllers();\n\nawait app.StartAsync();\nvar response = await app.GetTestClient().GetAsync(\"/tickets/10000\");\nConsole.WriteLine($\"{(int)response.StatusCode} {await response.Content.ReadAsStringAsync()}\");\nawait app.StopAsync();\n\npublic class TicketRules\n{\n    public int MinId => 1;\n    public int MaxId => 9999;\n}\n\n[ApiController]\n[Route(\"tickets\")]\npublic class TicketsController : ControllerBase\n{\n    [HttpGet(\"{id:int}\")]\n    [ServiceFilter(typeof(TicketIdFilter))]\n    public IActionResult Get(int id)\n    {\n        Console.WriteLine(\"action runs\");\n        return Ok($\"Ticket {id} for Asha\");\n    }\n}\n\npublic class TicketIdFilter(TicketRules rules) : IAsyncActionFilter\n{\n    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)\n    {\n        var id = (int)context.ActionArguments[\"id\"]!;\n        if (id < rules.MinId)\n        {\n            context.Result = new BadRequestObjectResult(\"Ticket id must be positive\");\n            return;\n        }\n        if (id > rules.MaxId)\n        {\n            context.Result = new BadRequestObjectResult(\"Ticket id too large\");\n            return;\n        }\n        await next();\n    }\n}",
            check: "run",
            expected: "400 Ticket id too large"
          }
        },
        quiz: {
          q: {
            en: "You want a rule to cover static files and every other request, not only controller actions. What do you use?",
            hi: "आप चाहते हो कि एक नियम static files और हर दूसरी request पर भी लगे, सिर्फ़ controller actions पर नहीं। क्या इस्तेमाल करोगे?",
            hg: "Aap chahte ho ki ek niyam static files aur har doosri request par bhi lage, sirf controller actions par nahi. Kya use karoge?"
          },
          options: [
            {
              en: "An action filter",
              hi: "Action filter से",
              hg: "Action filter se"
            },
            {
              en: "An exception filter",
              hi: "Exception filter से",
              hg: "Exception filter se"
            },
            {
              en: "A result filter",
              hi: "Result filter से",
              hg: "Result filter se"
            },
            {
              en: "Middleware",
              hi: "Middleware से",
              hg: "Middleware se"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Filters run only inside MVC, around controller actions. Middleware sits in the main pipeline, so it sees every request, including static files.</p>",
            hi: "<p>Filters सिर्फ़ MVC के अंदर, controller actions के आसपास चलते हैं। Middleware main pipeline में बैठता है, इसलिए static files समेत हर request देखता है।</p>",
            hg: "<p>Filters sirf MVC ke andar, controller actions ke aaspaas chalte hain. Middleware main pipeline mein baithta hai, isliye static files samet har request dekhta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Filters run around controller actions; types are authorization, resource, action, exception, result.</li><li>An action filter reads the arguments and short-circuits by setting <code>context.Result</code>.</li><li>Use middleware for every request, filters when you need action-level information.</li></ul>",
          hi: "<ul><li>Filters controller actions के आसपास चलते हैं; types हैं authorization, resource, action, exception, result।</li><li>Action filter arguments पढ़ता है और <code>context.Result</code> set करके short-circuit करता है।</li><li>हर request के लिए middleware, और action-level जानकारी चाहिए तो filters।</li></ul>",
          hg: "<ul><li>Filters controller actions ke aaspaas chalte hain; types hain authorization, resource, action, exception, result.</li><li>Action filter arguments padhta hai aur <code>context.Result</code> set karke short-circuit karta hai.</li><li>Har request ke liye middleware, aur action-level jaankari chahiye to filters.</li></ul>"
        }
      },
      code: [
        {
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          caption: {
            en: "An action filter that stops a bad ticket id",
            hi: "ग़लत ticket id को रोकने वाला action filter",
            hg: "Galat ticket id ko rokne wala action filter"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.AspNetCore.Mvc.Filters;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddControllers();\nbuilder.Services.AddSingleton<TicketRules>();\nbuilder.Services.AddScoped<TicketIdFilter>();   // needed for [ServiceFilter]\nvar app = builder.Build();\napp.MapControllers();\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nforeach (var id in new[] { 501, 0 })\n{\n    var response = await client.GetAsync($\"/tickets/{id}\");\n    Console.WriteLine($\"{(int)response.StatusCode} {await response.Content.ReadAsStringAsync()}\");\n}\nawait app.StopAsync();\n\npublic class TicketRules\n{\n    public int MinId => 1;\n}\n\n[ApiController]\n[Route(\"tickets\")]\npublic class TicketsController : ControllerBase\n{\n    [HttpGet(\"{id:int}\")]\n    [ServiceFilter(typeof(TicketIdFilter))]\n    public IActionResult Get(int id)\n    {\n        Console.WriteLine(\"action runs\");\n        return Ok($\"Ticket {id} for Asha\");\n    }\n}\n\npublic class TicketIdFilter(TicketRules rules) : IAsyncActionFilter\n{\n    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)\n    {\n        var id = (int)context.ActionArguments[\"id\"]!;\n        Console.WriteLine($\"filter: checking id {id}\");\n        if (id < rules.MinId)\n        {\n            context.Result = new BadRequestObjectResult(\"Ticket id must be positive\");   // action never runs\n            return;\n        }\n        var executed = await next();\n        Console.WriteLine($\"filter: action finished with {executed.Result?.GetType().Name}\");\n    }\n}",
          check: "run",
          expected: "filter: checking id 501\naction runs\nfilter: action finished with OkObjectResult\n200 Ticket 501 for Asha\nfilter: checking id 0\n400 Ticket id must be positive"
        }
      ]
    },
    {
      id: "minimal-vs-controllers",
      depth: "short",
      title: {
        en: "Minimal API vs Controllers",
        hi: "Minimal API बनाम Controllers",
        hg: "Minimal API banam Controllers"
      },
      lesson: {
        buildsOn: {
          en: "<p>Lesson 1 used a Minimal API endpoint (<code>MapGet</code>) and lesson 7 used a controller. Both rely on what you have learned: the same pipeline (lessons 2 and 3), configuration, logging and DI. Today you compare them side by side on the same ticket data.</p>",
          hi: "<p>पाठ 1 में Minimal API endpoint (<code>MapGet</code>) था और पाठ 7 में controller। दोनों उसी पर टिके हैं जो तुम सीख चुके हो: वही pipeline (पाठ 2 और 3), configuration, logging और DI। आज दोनों को उसी ticket data पर साथ-साथ तौलते हैं।</p>",
          hg: "<p>Lesson 1 mein Minimal API endpoint (<code>MapGet</code>) tha aur lesson 7 mein controller. Dono usi par tike hain jo tum seekh chuke ho: wahi pipeline (lesson 2 aur 3), configuration, logging aur DI. Aaj dono ko usi ticket data par saath-saath taulte hain.</p>"
        },
        what: {
          en: "<p>A <b>Minimal API</b> maps a URL to a function with <code>app.MapGet(...)</code>: little ceremony. A <b>controller</b> is a class whose methods are actions, with attributes for routes and filters. Both produce the same endpoints and run on the same pipeline.</p>",
          hi: "<p><b>Minimal API</b> <code>app.MapGet(...)</code> से URL को एक function से जोड़ता है: कम तामझाम। <b>Controller</b> एक class है जिसके methods actions हैं, और routes और filters के लिए attributes लगते हैं। दोनों वही endpoints बनाते हैं और उसी pipeline पर चलते हैं।</p>",
          hg: "<p><b>Minimal API</b> <code>app.MapGet(...)</code> se URL ko ek function se jodta hai: kam taamjhaam. <b>Controller</b> ek class hai jiske methods actions hain, aur routes aur filters ke liye attributes lagte hain. Dono wahi endpoints banate hain aur usi pipeline par chalte hain.</p>"
        },
        why: {
          en: "<p>You will meet both in real code, and in interviews the question is \"which would you pick and why\". Knowing they are the same engine lets you choose by team and size, not by fear of performance.</p>",
          hi: "<p>असली code में दोनों मिलेंगे, और interviews में सवाल होता है \"तुम कौन-सा चुनोगे और क्यों\"। यह पता हो कि दोनों एक ही engine हैं, तो team और size देखकर चुन सकते हो, performance के डर से नहीं।</p>",
          hg: "<p>Asli code mein dono milenge, aur interviews mein sawaal hota hai \"tum kaunsa chunoge aur kyun\". Ye pata ho ki dono ek hi engine hain, to team aur size dekhkar chun sakte ho, performance ke dar se nahi.</p>"
        },
        analogy: {
          en: "<p>A chai stall and a sit-down restaurant. The stall opens fast and suits a small menu. The restaurant needs more structure but handles a big menu and a big kitchen team. Both serve real customers.</p>",
          hi: "<p>चाय की ठेली और बैठकर खाने वाला restaurant। ठेली जल्दी खुलती है और छोटे menu के लिए ठीक है। Restaurant को ज़्यादा ढाँचा चाहिए पर बड़ा menu और बड़ी kitchen team सँभाल लेता है। दोनों असली ग्राहकों को परोसते हैं।</p>",
          hg: "<p>Chai ki theli aur baithkar khaane wala restaurant. Theli jaldi khulti hai aur chhote menu ke liye theek hai. Restaurant ko zyaada dhaancha chahiye par bada menu aur badi kitchen team sambhaal leta hai. Dono asli grahakon ko parosate hain.</p>"
        },
        lines: [
          {
            code: "builder.Services.AddControllers();",
            note: {
              en: "Controllers need their services registered. Minimal API needs no extra registration for <code>MapGet</code>.",
              hi: "Controllers को अपनी services register करानी पड़ती हैं। <code>MapGet</code> वाले Minimal API को अलग से कुछ register नहीं करना पड़ता।",
              hg: "Controllers ko apni services register karani padti hain. <code>MapGet</code> wale Minimal API ko alag se kuch register nahi karna padta."
            }
          },
          {
            code: "app.MapControllers();",
            note: {
              en: "Turns every controller action into an endpoint. After this line both styles live in one app.",
              hi: "हर controller action को endpoint बना देता है। इस line के बाद दोनों तरीक़े एक ही app में रहते हैं।",
              hg: "Har controller action ko endpoint bana deta hai. Is line ke baad dono tareeke ek hi app mein rehte hain."
            }
          },
          {
            code: "app.MapGet(\"/minimal/tickets/{id:int}\", GetTicket);",
            note: {
              en: "Minimal style: a URL pattern and a plain function. Parameters such as <code>id</code> and <code>TicketService</code> are filled in for you.",
              hi: "Minimal तरीक़ा: URL का pattern और एक सादा function। <code>id</code> और <code>TicketService</code> जैसे parameters अपने आप भर जाते हैं।",
              hg: "Minimal tareeka: URL ka pattern aur ek saada function. <code>id</code> aur <code>TicketService</code> jaise parameters apne aap bhar jaate hain."
            }
          },
          {
            code: "static Results<Ok<SupportTicket>, NotFound> GetTicket(int id, TicketService tickets) =>",
            note: {
              en: "<code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code> puts the possible answers in the method signature, so a reader, a test and API docs all know them.",
              hi: "<code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code> हो सकने वाले जवाबों को method के signature में रख देता है, इसलिए पढ़ने वाले, test और API docs सबको वे पता होते हैं।",
              hg: "<code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code> ho sakne wale jawaabon ko method ke signature mein rakh deta hai, isliye padhne wale, test aur API docs sabko woh pata hote hain."
            }
          },
          {
            code: "[Route(\"controller/tickets\")]",
            note: {
              en: "Controller style: the route is an attribute on the class, and each method adds its own part, such as <code>[HttpGet(\"{id:int}\")]</code>.",
              hi: "Controller तरीक़ा: route class पर attribute है, और हर method अपना हिस्सा जोड़ता है, जैसे <code>[HttpGet(\"{id:int}\")]</code>।",
              hg: "Controller tareeka: route class par attribute hai, aur har method apna hissa jodta hai, jaise <code>[HttpGet(\"{id:int}\")]</code>."
            }
          },
          {
            code: "public class TicketsController(TicketService tickets) : ControllerBase",
            note: {
              en: "The controller gets <code>TicketService</code> through its constructor. Same DI container as the minimal handler uses.",
              hi: "Controller को <code>TicketService</code> constructor से मिलती है। वही DI container जो minimal handler इस्तेमाल करता है।",
              hg: "Controller ko <code>TicketService</code> constructor se milti hai. Wahi DI container jo minimal handler use karta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Choosing Minimal API \"because it is faster\". The difference is rarely the reason to choose; the structure and team size matter more.</li><li>Copy-pasting the same rule into many endpoints. Put shared rules in a service, a route group or a filter.</li><li>Thinking you must pick one style for the whole app. Both can live together, as in this lesson.</li></ul>",
          hi: "<ul><li>\"तेज़ है\" सोचकर Minimal API चुन लेना। फ़र्क़ शायद ही चुनने की वजह बनता है; ढाँचा और team का आकार ज़्यादा मायने रखते हैं।</li><li>एक ही नियम कई endpoints में copy-paste करना। Common नियम service, route group या filter में रखो।</li><li>सोचना कि पूरे app के लिए एक ही तरीक़ा चुनना पड़ेगा। दोनों साथ रह सकते हैं, जैसे इस पाठ में।</li></ul>",
          hg: "<ul><li>\"Tez hai\" sochkar Minimal API chun lena. Fark shaayad hi chunne ki wajah banta hai; dhaancha aur team ka aakaar zyaada maayne rakhte hain.</li><li>Ek hi niyam kai endpoints mein copy-paste karna. Common niyam service, route group ya filter mein rakho.</li><li>Sochna ki poore app ke liye ek hi tareeka chunna padega. Dono saath reh sakte hain, jaise is lesson mein.</li></ul>"
        },
        whenToUse: {
          en: "<p>Choose <b>Minimal APIs</b> for small services, internal endpoints and teams that like a functional style. Choose <b>controllers</b> for big APIs with many endpoints, attribute conventions, filters and a familiar structure for a large team. Mixing both is allowed.</p>",
          hi: "<p><b>Minimal APIs</b> चुनो छोटी services, internal endpoints और functional style पसंद करने वाली teams के लिए। <b>Controllers</b> चुनो बड़े APIs के लिए जिनमें कई endpoints, attribute conventions, filters और बड़ी team के लिए जाना-पहचाना ढाँचा चाहिए। दोनों मिलाना भी चलता है।</p>",
          hg: "<p><b>Minimal APIs</b> chuno chhoti services, internal endpoints aur functional style pasand karne wali teams ke liye. <b>Controllers</b> chuno bade APIs ke liye jinmein kai endpoints, attribute conventions, filters aur badi team ke liye jaana-pehchana dhaancha chahiye. Dono milana bhi chalta hai.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a Minimal API endpoint <code>GET /minimal/agents</code> that returns the list Meena and Kiran, and print the response. A list becomes a JSON array.</p>",
            hi: "<p>एक Minimal API endpoint <code>GET /minimal/agents</code> जोड़ो जो Meena और Kiran की list लौटाए, और response print करो। List JSON array बन जाती है।</p>",
            hg: "<p>Ek Minimal API endpoint <code>GET /minimal/agents</code> jodo jo Meena aur Kiran ki list lautaaye, aur response print karo. List JSON array ban jaati hai.</p>"
          },
          hint: {
            en: "<p>Return a <code>string[]</code> from a <code>MapGet</code> lambda. The framework writes it as JSON.</p>",
            hi: "<p><code>MapGet</code> lambda से <code>string[]</code> लौटाओ। Framework उसे JSON में लिख देता है।</p>",
            hg: "<p><code>MapGet</code> lambda se <code>string[]</code> lautao. Framework use JSON mein likh deta hai.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            caption: {
              en: "Solution: an agents endpoint",
              hi: "हल: agents endpoint",
              hg: "Solution: agents endpoint"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\napp.MapGet(\"/minimal/agents\", () => new[] { \"Meena\", \"Kiran\" });\n\nawait app.StartAsync();\nvar response = await app.GetTestClient().GetAsync(\"/minimal/agents\");\nConsole.WriteLine($\"{(int)response.StatusCode} {await response.Content.ReadAsStringAsync()}\");\nawait app.StopAsync();",
            check: "run",
            expected: "200 [\"Meena\",\"Kiran\"]"
          }
        },
        quiz: {
          q: {
            en: "Which statement about Minimal APIs and controllers is true?",
            hi: "Minimal APIs और controllers के बारे में कौन-सी बात सही है?",
            hg: "Minimal APIs aur controllers ke baare mein kaunsi baat sahi hai?"
          },
          options: [
            {
              en: "They share the same pipeline, routing and DI, and can live in one app",
              hi: "दोनों की pipeline, routing और DI एक ही है, और एक app में साथ रह सकते हैं",
              hg: "Dono ki pipeline, routing aur DI ek hi hai, aur ek app mein saath reh sakte hain"
            },
            {
              en: "Minimal APIs cannot use dependency injection",
              hi: "Minimal APIs में dependency injection नहीं चलता",
              hg: "Minimal APIs mein dependency injection nahi chalta"
            },
            {
              en: "Only controllers are safe to use in production",
              hi: "सिर्फ़ controllers production में इस्तेमाल के लिए सुरक्षित हैं",
              hg: "Sirf controllers production mein use ke liye safe hain"
            },
            {
              en: "Controllers need a different web server from Minimal APIs",
              hi: "Controllers को Minimal APIs से अलग web server चाहिए",
              hg: "Controllers ko Minimal APIs se alag web server chahiye"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>Both are production-ready and run on the same engine: the same Kestrel server, middleware pipeline, routing and DI container. You choose by structure and team needs.</p>",
            hi: "<p>दोनों production के लिए तैयार हैं और एक ही engine पर चलते हैं: वही Kestrel server, middleware pipeline, routing और DI container। चुनाव ढाँचे और team की ज़रूरत से होता है।</p>",
            hg: "<p>Dono production ke liye taiyaar hain aur ek hi engine par chalte hain: wahi Kestrel server, middleware pipeline, routing aur DI container. Chunaav dhaanche aur team ki zaroorat se hota hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Minimal API: <code>MapGet</code> plus a function. Controller: a class with action methods and attributes.</li><li>Both use the same pipeline, routing and DI, and can be mixed in one app.</li><li>Choose by structure and team size, not by speed.</li></ul>",
          hi: "<ul><li>Minimal API: <code>MapGet</code> और एक function। Controller: action methods और attributes वाली class।</li><li>दोनों एक ही pipeline, routing और DI इस्तेमाल करते हैं, और एक app में मिलाए जा सकते हैं।</li><li>ढाँचे और team के आकार से चुनो, speed से नहीं।</li></ul>",
          hg: "<ul><li>Minimal API: <code>MapGet</code> aur ek function. Controller: action methods aur attributes wali class.</li><li>Dono ek hi pipeline, routing aur DI use karte hain, aur ek app mein milaye ja sakte hain.</li><li>Dhaanche aur team ke aakaar se chuno, speed se nahi.</li></ul>"
        }
      },
      code: [
        {
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Microsoft.AspNetCore.TestHost"
          ],
          caption: {
            en: "One ticket, two styles",
            hi: "एक ticket, दो तरीक़े",
            hg: "Ek ticket, do tareeke"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Http.HttpResults;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddControllers();\nbuilder.Services.AddSingleton<TicketService>();\nvar app = builder.Build();\n\napp.MapControllers();\napp.MapGet(\"/minimal/tickets/{id:int}\", GetTicket);\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nforeach (var path in new[] { \"/minimal/tickets/501\", \"/controller/tickets/501\", \"/minimal/tickets/999\", \"/controller/tickets/999\" })\n{\n    var response = await client.GetAsync(path);\n    Console.WriteLine($\"{path} => {(int)response.StatusCode} {await response.Content.ReadAsStringAsync()}\".TrimEnd());\n}\nawait app.StopAsync();\n\nstatic Results<Ok<SupportTicket>, NotFound> GetTicket(int id, TicketService tickets) =>\n    tickets.Find(id) is { } ticket ? TypedResults.Ok(ticket) : TypedResults.NotFound();\n\npublic record SupportTicket(int Id, string Customer, string Issue, string Status, string Agent);\n\npublic class TicketService\n{\n    private readonly Dictionary<int, SupportTicket> _tickets = new()\n    {\n        [501] = new SupportTicket(501, \"Asha\", \"Login failed\", \"Open\", \"Meena\")\n    };\n\n    public SupportTicket? Find(int id) => _tickets.GetValueOrDefault(id);\n}\n\n[Route(\"controller/tickets\")]\npublic class TicketsController(TicketService tickets) : ControllerBase\n{\n    [HttpGet(\"{id:int}\")]\n    public ActionResult<SupportTicket> Get(int id) =>\n        tickets.Find(id) is { } ticket ? ticket : NotFound();\n}",
          check: "run",
          expected: "/minimal/tickets/501 => 200 {\"id\":501,\"customer\":\"Asha\",\"issue\":\"Login failed\",\"status\":\"Open\",\"agent\":\"Meena\"}\n/controller/tickets/501 => 200 {\"id\":501,\"customer\":\"Asha\",\"issue\":\"Login failed\",\"status\":\"Open\",\"agent\":\"Meena\"}\n/minimal/tickets/999 => 404\n/controller/tickets/999 => 404"
        }
      ]
    },
    {
      id: "hosting-deep",
      depth: "detailed",
      title: {
        en: "Generic host, Kestrel, IIS and the old Startup.cs",
        hi: "Generic host, Kestrel, IIS और पुराना Startup.cs",
        hg: "Generic host, Kestrel, IIS aur purana Startup.cs"
      },
      body: {
        en: "<ul>\n<li><b>Generic host</b>: <code>WebApplication</code> is built on the same generic host used by worker services (<code>Host.CreateApplicationBuilder</code>), so DI, configuration and logging work the same everywhere.</li>\n<li><b>Minimal hosting model (.NET 6+)</b>: one <code>Program.cs</code> with top-level statements. The old <code>Startup.cs</code> maps like this: <code>ConfigureServices</code> → <code>builder.Services.Add...</code>; <code>Configure</code> → <code>app.Use...</code> calls. A <code>Startup</code> class is still supported with the generic host, but new templates do not use it.</li>\n<li><b>Kestrel</b>: the default cross-platform web server. It can face the internet or sit behind a reverse proxy (IIS, nginx, a cloud load balancer) that handles TLS and load balancing.</li>\n<li><b>IIS</b>: <b>in-process</b> (the default on IIS since ASP.NET Core 3.0) runs your app inside the IIS worker process <code>w3wp.exe</code> with the IIS HTTP server; <b>out-of-process</b> keeps Kestrel in its own process and IIS forwards requests to it through the ASP.NET Core Module.</li>\n<li><b>Classic bridge</b>: <code>Global.asax</code> <code>Application_Start</code> ≈ <code>Program.cs</code>; <b>HttpModules</b> ≈ middleware; <code>Web.config</code> appSettings and transforms ≈ <code>appsettings.json</code> and <code>appsettings.{Environment}.json</code>.</li>\n<li><b>Why no <code>UseRouting</code> in the Program.cs snippet, but one in the Startup snippet?</b> <code>WebApplication</code> adds <code>UseRouting</code> and <code>UseEndpoints</code> for you; with a <code>Startup</code> class you call them yourself.</li>\n<li><b>Interview angle</b>: if asked \"how do you migrate a classic MVC app?\", mention the mapping (<code>Global.asax</code> → <code>Program.cs</code>, <code>HttpModule</code> → middleware, <code>Web.config</code> → <code>appsettings.json</code> and environment variables, <code>System.Web</code> → <code>HttpContext</code> abstractions) and a step-by-step plan rather than a big-bang rewrite.</li>\n</ul>",
        hi: "<ul>\n<li><b>Generic host</b>: <code>WebApplication</code> उसी generic host पर बना है जो worker services में चलता है (<code>Host.CreateApplicationBuilder</code>), इसलिए DI, configuration और logging हर जगह एक जैसे हैं।</li>\n<li><b>Minimal hosting model (.NET 6+)</b>: top-level statements वाली एक <code>Program.cs</code>। पुरानी <code>Startup.cs</code> ऐसे map होती है: <code>ConfigureServices</code> → <code>builder.Services.Add...</code>; <code>Configure</code> → <code>app.Use...</code> calls। <code>Startup</code> class generic host के साथ अब भी चलती है, पर नए templates में नहीं है।</li>\n<li><b>Kestrel</b>: default cross-platform web server। यह सीधे internet पर आ सकता है या reverse proxy (IIS, nginx, cloud load balancer) के पीछे रह सकता है जो TLS और load balancing संभालता है।</li>\n<li><b>IIS</b>: <b>in-process</b> (ASP.NET Core 3.0 से IIS पर default) में app IIS के worker process <code>w3wp.exe</code> के अंदर IIS HTTP server के साथ चलती है; <b>out-of-process</b> में Kestrel अपने अलग process में रहता है और IIS ASP.NET Core Module से requests उसे भेजता है।</li>\n<li><b>Classic से पुल</b>: <code>Global.asax</code> का <code>Application_Start</code> ≈ <code>Program.cs</code>; <b>HttpModules</b> ≈ middleware; <code>Web.config</code> के appSettings और transforms ≈ <code>appsettings.json</code> और <code>appsettings.{Environment}.json</code>।</li>\n<li><b>Program.cs snippet में <code>UseRouting</code> क्यों नहीं, पर Startup snippet में है?</b> <code>WebApplication</code> <code>UseRouting</code> और <code>UseEndpoints</code> ख़ुद जोड़ देता है; <code>Startup</code> class के साथ आप उन्हें ख़ुद बुलाते हो।</li>\n<li><b>Interview angle</b>: अगर पूछा जाए \"classic MVC app कैसे migrate करोगे?\", तो mapping बताओ (<code>Global.asax</code> → <code>Program.cs</code>, <code>HttpModule</code> → middleware, <code>Web.config</code> → <code>appsettings.json</code> और environment variables, <code>System.Web</code> → <code>HttpContext</code> abstractions) और step-by-step plan बताओ, big-bang rewrite नहीं।</li>\n</ul>",
        hg: "<ul>\n<li><b>Generic host</b>: <code>WebApplication</code> usi generic host par bana hai jo worker services mein chalta hai (<code>Host.CreateApplicationBuilder</code>), isliye DI, configuration aur logging har jagah ek jaise hain.</li>\n<li><b>Minimal hosting model (.NET 6+)</b>: top-level statements wali ek <code>Program.cs</code>. Purani <code>Startup.cs</code> aise map hoti hai: <code>ConfigureServices</code> → <code>builder.Services.Add...</code>; <code>Configure</code> → <code>app.Use...</code> calls. <code>Startup</code> class generic host ke saath ab bhi chalti hai, par naye templates mein nahi hai.</li>\n<li><b>Kestrel</b>: default cross-platform web server. Yeh seedha internet par aa sakta hai ya reverse proxy (IIS, nginx, cloud load balancer) ke peeche reh sakta hai jo TLS aur load balancing sambhalta hai.</li>\n<li><b>IIS</b>: <b>in-process</b> (ASP.NET Core 3.0 se IIS par default) mein app IIS ke worker process <code>w3wp.exe</code> ke andar IIS HTTP server ke saath chalti hai; <b>out-of-process</b> mein Kestrel apne alag process mein rehta hai aur IIS ASP.NET Core Module se requests use bhejta hai.</li>\n<li><b>Classic se pul</b>: <code>Global.asax</code> ka <code>Application_Start</code> ≈ <code>Program.cs</code>; <b>HttpModules</b> ≈ middleware; <code>Web.config</code> ke appSettings aur transforms ≈ <code>appsettings.json</code> aur <code>appsettings.{Environment}.json</code>.</li>\n<li><b>Program.cs snippet mein <code>UseRouting</code> kyun nahi, par Startup snippet mein hai?</b> <code>WebApplication</code> <code>UseRouting</code> aur <code>UseEndpoints</code> khud jod deta hai; <code>Startup</code> class ke saath aap unhe khud bulate ho.</li>\n<li><b>Interview angle</b>: agar pucha jaye \"classic MVC app kaise migrate karoge?\", to mapping batao (<code>Global.asax</code> → <code>Program.cs</code>, <code>HttpModule</code> → middleware, <code>Web.config</code> → <code>appsettings.json</code> aur environment variables, <code>System.Web</code> → <code>HttpContext</code> abstractions) aur step-by-step plan batao, big-bang rewrite nahi.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "The same idea with the old Startup class (still supported with the generic host)",
            hi: "वही idea पुरानी Startup class के साथ (generic host के साथ अब भी supported)",
            hg: "Wahi idea purani Startup class ke saath (generic host ke saath ab bhi supported)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic static class Program\n{\n    public static void Main(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .ConfigureWebHostDefaults(web => web.UseStartup<Startup>())\n            .Build()\n            .Run();\n}\n\npublic class Startup\n{\n    // was: services registration\n    public void ConfigureServices(IServiceCollection services) => services.AddControllers();\n\n    // was: the middleware pipeline\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        // no implicit routing here: with Startup you call UseRouting and UseEndpoints yourself\n        app.UseRouting();\n        app.UseAuthorization();\n        app.UseEndpoints(endpoints => endpoints.MapControllers());\n    }\n}"
        }
      ]
    },
    {
      id: "middleware-deep",
      depth: "detailed",
      title: {
        en: "Use, Run, Map, the usual order and authentication vs authorization",
        hi: "Use, Run, Map, आम क्रम और authentication बनाम authorization",
        hg: "Use, Run, Map, aam kram aur authentication banam authorization"
      },
      body: {
        en: "<ul>\n<li><b>Use</b>: runs your code and may call <code>next</code>. <b>Run</b>: terminal, there is no <code>next</code>, so anything added after it is never reached. <b>Map</b>: branch by path prefix. <b>MapWhen</b>: branch by any condition. <code>Map</code> and <code>MapWhen</code> do not rejoin the main pipeline; <b>UseWhen</b> branches and then rejoins.</li>\n<li><b>Usual order</b> (from the Microsoft docs): exception handling → HSTS → HTTPS redirection → static files → routing → CORS → authentication → authorization → your custom middleware → endpoints. CORS and rate limiting arrive in Day 13.</li>\n<li><b>Routing is implicit</b>: since .NET 6, <code>WebApplication</code> adds <code>UseRouting</code> at the start of the pipeline and <code>UseEndpoints</code> at the end if you do not call them, so your middleware normally runs after routing. Call <code>app.UseRouting()</code> yourself where you want it, for example after <code>UseStaticFiles</code> when static files must run <i>before</i> routing.</li>\n<li><b>Be exact about security</b>: <code>UseAuthentication</code> runs the authentication handlers, sets <code>HttpContext.User</code> and calls <code>next</code>; it does not reject anyone. The authorization step (<code>UseAuthorization</code> plus the endpoint's policy) answers <b>401</b> when the caller is not authenticated and <b>403</b> when authenticated but not allowed (with cookie authentication these usually become redirects to the login and access-denied pages). In the docs order, <code>UseAuthentication</code> comes before <code>UseAuthorization</code>.</li>\n</ul>",
        hi: "<ul>\n<li><b>Use</b>: आपका code चलाता है और <code>next</code> बुला सकता है। <b>Run</b>: terminal, इसमें <code>next</code> नहीं होता, इसलिए उसके बाद जोड़ा गया कुछ भी कभी नहीं पहुँचता। <b>Map</b>: path prefix से branch। <b>MapWhen</b>: किसी भी condition से branch। <code>Map</code> और <code>MapWhen</code> main pipeline में वापस नहीं जुड़ते; <b>UseWhen</b> branch बनाकर वापस जुड़ता है।</li>\n<li><b>आम order</b> (Microsoft docs से): exception handling → HSTS → HTTPS redirection → static files → routing → CORS → authentication → authorization → आपका custom middleware → endpoints। CORS और rate limiting Day 13 में आएँगे।</li>\n<li><b>Routing implicit है</b>: .NET 6 से, अगर आप ख़ुद न बुलाओ तो <code>WebApplication</code> pipeline की शुरुआत में <code>UseRouting</code> और अंत में <code>UseEndpoints</code> जोड़ देता है, इसलिए आपका middleware आम तौर पर routing के बाद चलता है। जहाँ चाहिए वहाँ <code>app.UseRouting()</code> ख़ुद बुलाओ, जैसे static files को routing से <i>पहले</i> चलाना हो तो <code>UseStaticFiles</code> के बाद।</li>\n<li><b>Security में सटीक रहो</b>: <code>UseAuthentication</code> authentication handlers चलाता है, <code>HttpContext.User</code> set करता है और <code>next</code> बुलाता है; वह किसी को reject नहीं करता। Authorization step (<code>UseAuthorization</code> और endpoint की policy) <b>401</b> देता है जब caller authenticated नहीं है और <b>403</b> जब authenticated है पर allowed नहीं (cookie authentication में ये आम तौर पर login और access-denied pages पर redirect बन जाते हैं)। Docs के order में <code>UseAuthentication</code>, <code>UseAuthorization</code> से पहले आता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Use</b>: aapka code chalata hai aur <code>next</code> bula sakta hai. <b>Run</b>: terminal, ismein <code>next</code> nahi hota, isliye uske baad joda gaya kuch bhi kabhi nahi pahunchta. <b>Map</b>: path prefix se branch. <b>MapWhen</b>: kisi bhi condition se branch. <code>Map</code> aur <code>MapWhen</code> main pipeline mein wapas nahi judte; <b>UseWhen</b> branch banakar wapas judta hai.</li>\n<li><b>Aam order</b> (Microsoft docs se): exception handling → HSTS → HTTPS redirection → static files → routing → CORS → authentication → authorization → aapka custom middleware → endpoints. CORS aur rate limiting Day 13 mein aayenge.</li>\n<li><b>Routing implicit hai</b>: .NET 6 se, agar aap khud na bulao to <code>WebApplication</code> pipeline ki shuruaat mein <code>UseRouting</code> aur ant mein <code>UseEndpoints</code> jod deta hai, isliye aapka middleware aam taur par routing ke baad chalta hai. Jahan chahiye wahan <code>app.UseRouting()</code> khud bulao, jaise static files ko routing se <i>pehle</i> chalana ho to <code>UseStaticFiles</code> ke baad.</li>\n<li><b>Security mein sateek raho</b>: <code>UseAuthentication</code> authentication handlers chalata hai, <code>HttpContext.User</code> set karta hai aur <code>next</code> bulata hai; woh kisi ko reject nahi karta. Authorization step (<code>UseAuthorization</code> aur endpoint ki policy) <b>401</b> deta hai jab caller authenticated nahi hai aur <b>403</b> jab authenticated hai par allowed nahi (cookie authentication mein ye aam taur par login aur access-denied pages par redirect ban jaate hain). Docs ke order mein <code>UseAuthentication</code>, <code>UseAuthorization</code> se pehle aata hai.</li>\n</ul>"
      }
    },
    {
      id: "custom-middleware",
      depth: "detailed",
      title: {
        en: "Writing middleware: inline, convention class, IMiddleware",
        hi: "Middleware लिखना: inline, convention class, IMiddleware",
        hg: "Middleware likhna: inline, convention class, IMiddleware"
      },
      body: {
        en: "<ul>\n<li><b>Inline</b>: <code>app.Use(async (context, next) =&gt; { ...; await next(); ...; })</code>. Best for tiny, one-off logic. Remember that headers cannot be changed once the response has started; use <code>Response.OnStarting</code> for \"add a header on the way out\".</li>\n<li><b>Convention-based class</b>: constructor takes <code>RequestDelegate next</code> (plus singleton-safe services); method <code>InvokeAsync(HttpContext context, ...)</code> may take <b>scoped</b> services as extra parameters. The instance is created once, so a scoped service in the <i>constructor</i> would be captured (the captive dependency from Day 11). Register with <code>app.UseMiddleware&lt;T&gt;()</code>.</li>\n<li><b><code>IMiddleware</code></b>: a class implementing <code>InvokeAsync(HttpContext, RequestDelegate)</code>. It is created by <code>IMiddlewareFactory</code> from the DI container, so you must register it (for example <code>AddTransient</code>) and its lifetime decides how often it is created; a scoped or transient registration can take scoped services in the constructor.</li>\n<li><b>Extension method</b>: wrap registration as <code>UseApiKeyGate(...)</code> so Program.cs reads like a story.</li>\n</ul>\n<p><b>When to use / when not:</b> use middleware for HTTP cross-cutting work that applies to many endpoints: correlation IDs, request logging, security headers, API-key gates. Do not use it for business rules, and do not use it when you need action-level information such as model-binding results; a filter fits that better. Avoid reading the request body in middleware unless you buffer it, because the stream is normally read once.</p>",
        hi: "<ul>\n<li><b>Inline</b>: <code>app.Use(async (context, next) =&gt; { ...; await next(); ...; })</code>। छोटे, एक बार के logic के लिए सबसे अच्छा। याद रखो कि response शुरू होने के बाद headers नहीं बदले जा सकते; \"बाहर जाते समय header जोड़ना\" हो तो <code>Response.OnStarting</code> use करो।</li>\n<li><b>Convention-based class</b>: constructor में <code>RequestDelegate next</code> आता है (और singleton-safe services); <code>InvokeAsync(HttpContext context, ...)</code> method में <b>scoped</b> services extra parameters की तरह आ सकती हैं। instance एक बार बनता है, इसलिए <i>constructor</i> में scoped service पकड़ी जाएगी (Day 11 वाली captive dependency)। <code>app.UseMiddleware&lt;T&gt;()</code> से register करो।</li>\n<li><b><code>IMiddleware</code></b>: ऐसी class जो <code>InvokeAsync(HttpContext, RequestDelegate)</code> implement करती है। इसे <code>IMiddlewareFactory</code> DI container से बनाता है, इसलिए इसे register करना पड़ता है (जैसे <code>AddTransient</code>) और उसकी lifetime तय करती है कि कितनी बार बने; scoped या transient registration constructor में scoped services ले सकती है।</li>\n<li><b>Extension method</b>: registration को <code>UseApiKeyGate(...)</code> की तरह लपेटो ताकि Program.cs कहानी की तरह पढ़ा जाए।</li>\n</ul>\n<p><b>कब use करें / कब नहीं:</b> कई endpoints पर लगने वाले HTTP cross-cutting काम के लिए middleware use करो: correlation IDs, request logging, security headers, API-key gates। Business rules के लिए नहीं, और जब action-level जानकारी (जैसे model-binding results) चाहिए तब भी नहीं; वहाँ filter बेहतर है। Request body को middleware में तब तक मत पढ़ो जब तक buffer न करो, क्योंकि stream आम तौर पर एक बार ही पढ़ा जाता है।</p>",
        hg: "<ul>\n<li><b>Inline</b>: <code>app.Use(async (context, next) =&gt; { ...; await next(); ...; })</code>. Chhote, ek baar ke logic ke liye sabse achha. Yaad rakho ki response shuru hone ke baad headers nahi badle ja sakte; \"bahar jaate samay header jodna\" ho to <code>Response.OnStarting</code> use karo.</li>\n<li><b>Convention-based class</b>: constructor mein <code>RequestDelegate next</code> aata hai (aur singleton-safe services); <code>InvokeAsync(HttpContext context, ...)</code> method mein <b>scoped</b> services extra parameters ki tarah aa sakti hain. Instance ek baar banta hai, isliye <i>constructor</i> mein scoped service pakdi jayegi (Day 11 wali captive dependency). <code>app.UseMiddleware&lt;T&gt;()</code> se register karo.</li>\n<li><b><code>IMiddleware</code></b>: aisi class jo <code>InvokeAsync(HttpContext, RequestDelegate)</code> implement karti hai. Ise <code>IMiddlewareFactory</code> DI container se banata hai, isliye ise register karna padta hai (jaise <code>AddTransient</code>) aur uski lifetime tay karti hai ki kitni baar bane; scoped ya transient registration constructor mein scoped services le sakti hai.</li>\n<li><b>Extension method</b>: registration ko <code>UseApiKeyGate(...)</code> ki tarah lapeto taaki Program.cs kahani ki tarah padha jaye.</li>\n</ul>\n<p><b>Kab use karein / kab nahi:</b> kai endpoints par lagne wale HTTP cross-cutting kaam ke liye middleware use karo: correlation IDs, request logging, security headers, API-key gates. Business rules ke liye nahi, aur jab action-level jaankari (jaise model-binding results) chahiye tab bhi nahi; wahan filter behtar hai. Request body ko middleware mein tab tak mat padho jab tak buffer na karo, kyunki stream aam taur par ek baar hi padha jaata hai.</p>"
      },
      code: [
        {
          caption: {
            en: "Three ways to write middleware (compile-checked, not run)",
            hi: "Middleware लिखने के तीन तरीक़े (compile-checked, run नहीं)",
            hg: "Middleware likhne ke teen tareeke (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddScoped<RequestCounter>();\nbuilder.Services.AddTransient<HeaderMiddleware>();   // IMiddleware must be registered in DI\nvar app = builder.Build();\n\n// 1. Inline\napp.Use(async (context, next) =>\n{\n    context.Response.OnStarting(() =>\n    {\n        context.Response.Headers[\"X-Inline\"] = \"yes\";\n        return Task.CompletedTask;\n    });\n    await next();\n});\n\n// 2. Convention-based class\napp.UseMiddleware<TimingMiddleware>();\n\n// 3. IMiddleware (created by the DI container)\napp.UseMiddleware<HeaderMiddleware>();\n\n// the endpoint sees the same scoped RequestCounter as the middleware\napp.MapGet(\"/\", (RequestCounter counter) => $\"request number {counter.Next()}\");\napp.Run();\n\nclass RequestCounter\n{\n    private int _count;\n    public int Next() => ++_count;\n}\n\nclass TimingMiddleware(RequestDelegate next, ILogger<TimingMiddleware> logger)\n{\n    // The constructor runs once, so keep scoped services OUT of it.\n    // Scoped services arrive as InvokeAsync parameters.\n    public async Task InvokeAsync(HttpContext context, RequestCounter counter)\n    {\n        var started = TimeProvider.System.GetTimestamp();\n        counter.Next();\n        await next(context);\n        var elapsed = TimeProvider.System.GetElapsedTime(started);\n        logger.LogInformation(\"{Path} took {Elapsed} ms\", context.Request.Path, elapsed.TotalMilliseconds);\n    }\n}\n\nclass HeaderMiddleware : IMiddleware\n{\n    public Task InvokeAsync(HttpContext context, RequestDelegate next)\n    {\n        context.Response.Headers[\"X-Team\"] = \"platform\";\n        return next(context);\n    }\n}"
        }
      ]
    },
    {
      id: "config-deep",
      depth: "detailed",
      title: {
        en: "Configuration files, command line, secrets and Options",
        hi: "Configuration files, command line, secrets और Options",
        hg: "Configuration files, command line, secrets aur Options"
      },
      body: {
        en: "<ul>\n<li><b>Read configuration</b> with <code>IConfiguration</code> (<code>GetConnectionString</code>, <code>GetValue</code>, <code>GetSection</code>) or bind a section to a class with the Options pattern (Day 11: <code>IOptions</code>, <code>IOptionsSnapshot</code>, <code>IOptionsMonitor</code>, <code>ValidateOnStart</code>).</li>\n<li><b>Default order in <code>WebApplication.CreateBuilder</code></b> (later wins): <code>appsettings.json</code> → <code>appsettings.{Environment}.json</code> → user secrets (Development only) → environment variables → command-line arguments. So a command-line value beats everything, and a server environment variable beats both JSON files.</li>\n</ul>",
        hi: "<ul>\n<li><b>Configuration पढ़ो</b> <code>IConfiguration</code> से (<code>GetConnectionString</code>, <code>GetValue</code>, <code>GetSection</code>) या Options pattern से section को class में bind करो (Day 11: <code>IOptions</code>, <code>IOptionsSnapshot</code>, <code>IOptionsMonitor</code>, <code>ValidateOnStart</code>)।</li>\n<li><b><code>WebApplication.CreateBuilder</code> में default क्रम</b> (बाद वाला जीतता है): <code>appsettings.json</code> → <code>appsettings.{Environment}.json</code> → user secrets (सिर्फ़ Development में) → environment variables → command-line arguments। यानी command-line value सब पर भारी है, और server का environment variable दोनों JSON files पर।</li>\n</ul>",
        hg: "<ul>\n<li><b>Configuration padho</b> <code>IConfiguration</code> se (<code>GetConnectionString</code>, <code>GetValue</code>, <code>GetSection</code>) ya Options pattern se section ko class mein bind karo (Day 11: <code>IOptions</code>, <code>IOptionsSnapshot</code>, <code>IOptionsMonitor</code>, <code>ValidateOnStart</code>).</li>\n<li><b><code>WebApplication.CreateBuilder</code> mein default kram</b> (baad wala jeetta hai): <code>appsettings.json</code> → <code>appsettings.{Environment}.json</code> → user secrets (sirf Development mein) → environment variables → command-line arguments. Yaani command-line value sab par bhaari hai, aur server ka environment variable dono JSON files par.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "appsettings.json (JSON, not compiled)",
            hi: "appsettings.json (JSON, compile नहीं होता)",
            hg: "appsettings.json (JSON, compile nahi hota)"
          },
          check: "none",
          src: "{\n  \"Logging\": {\n    \"LogLevel\": { \"Default\": \"Information\", \"Microsoft.AspNetCore\": \"Warning\" }\n  },\n  \"ConnectionStrings\": { \"Shop\": \"Server=.;Database=Shop;Integrated Security=true;\" },\n  \"Shop\": { \"Currency\": \"INR\", \"TimeoutSeconds\": 30 }\n}"
        },
        {
          caption: {
            en: "Overriding the same keys without touching the file (shell commands, not compiled)",
            hi: "फ़ाइल छुए बिना वही keys override करना (shell commands, compile नहीं होते)",
            hg: "File chhue bina wahi keys override karna (shell commands, compile nahi hote)"
          },
          check: "none",
          src: "# command line (highest precedence)\ndotnet run -- --Shop:Currency=USD\n\n# environment variable: double underscore = section separator\nset Shop__Currency=USD          # Windows cmd\nexport Shop__Currency=USD       # Linux / macOS\n\n# user secrets (Development only, stored outside the repo)\ndotnet user-secrets init\ndotnet user-secrets set \"ConnectionStrings:Shop\" \"Server=...;Password=...\""
        },
        {
          caption: {
            en: "Reading configuration, binding Options, logging with templates (compile-checked, not run)",
            hi: "Configuration पढ़ना, Options bind करना, templates से logging (compile-checked, run नहीं)",
            hg: "Configuration padhna, Options bind karna, templates se logging (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.Extensions.Options;\n\nvar builder = WebApplication.CreateBuilder(args);\n\n// Read a value directly...\nvar connectionString = builder.Configuration.GetConnectionString(\"Shop\");\nvar timeout = builder.Configuration.GetValue(\"Shop:TimeoutSeconds\", 30);\n\n// ...or bind a whole section to a class (Options pattern, Day 11)\nbuilder.Services.AddOptions<ShopOptions>().Bind(builder.Configuration.GetSection(\"Shop\"));\n\nvar app = builder.Build();\n\napp.Logger.LogInformation(\"Starting in {Environment}, timeout {Timeout}s, connection string set: {HasConnection}\",\n    app.Environment.EnvironmentName, timeout, connectionString is not null);\n\napp.MapGet(\"/info\", (IOptions<ShopOptions> shop, ILogger<Program> logger) =>\n{\n    // template + arguments: OrderId-style names stay searchable in log tools\n    logger.LogInformation(\"Info requested, currency {Currency}\", shop.Value.Currency);\n    return $\"{shop.Value.Currency}, timeout {shop.Value.TimeoutSeconds}s\";\n});\napp.Run();\n\nclass ShopOptions\n{\n    public string Currency { get; set; } = \"INR\";\n    public int TimeoutSeconds { get; set; } = 30;\n}"
        }
      ]
    },
    {
      id: "logging-deep",
      depth: "detailed",
      title: {
        en: "Log providers, filtering and the LoggerMessage generator",
        hi: "Log providers, filtering और LoggerMessage generator",
        hg: "Log providers, filtering aur LoggerMessage generator"
      },
      body: {
        en: "<ul>\n<li><b>Default providers</b> include Console, Debug and EventSource (plus EventLog on Windows). The levels filter is read from configuration, so you can turn <code>Microsoft.AspNetCore</code> down to Warning without recompiling. Serilog or other libraries plug in through the same <code>ILogger</code> abstraction.</li>\n<li><b>LoggerMessage source generator</b> (.NET 6+): declare a <code>partial</code> method with <code>[LoggerMessage]</code> and the compiler generates the logging code. It avoids boxing and template parsing on each call, and it checks that template names match the parameters.</li>\n</ul>",
        hi: "<ul>\n<li><b>Default providers</b> में Console, Debug और EventSource हैं (Windows पर EventLog भी)। Levels का filter configuration से पढ़ा जाता है, इसलिए <code>Microsoft.AspNetCore</code> को बिना recompile के Warning पर ला सकते हो। Serilog जैसी libraries उसी <code>ILogger</code> abstraction से जुड़ती हैं।</li>\n<li><b>LoggerMessage source generator</b> (.NET 6+): <code>[LoggerMessage]</code> वाला <code>partial</code> method लिखो और compiler logging code बना देता है। हर call पर boxing और template parsing बचती है, और यह जाँचता है कि template के नाम parameters से मिलते हैं।</li>\n</ul>",
        hg: "<ul>\n<li><b>Default providers</b> mein Console, Debug aur EventSource hain (Windows par EventLog bhi). Levels ka filter configuration se padha jaata hai, isliye <code>Microsoft.AspNetCore</code> ko bina recompile ke Warning par la sakte ho. Serilog jaisi libraries usi <code>ILogger</code> abstraction se judti hain.</li>\n<li><b>LoggerMessage source generator</b> (.NET 6+): <code>[LoggerMessage]</code> wala <code>partial</code> method likho aur compiler logging code bana deta hai. Har call par boxing aur template parsing bachti hai, aur yeh jaanchta hai ki template ke naam parameters se milte hain.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "LoggerMessage source generator (.NET 6+) (compile-checked, not run)",
            hi: "LoggerMessage source generator (.NET 6+) (compile-checked, run नहीं)",
            hg: "LoggerMessage source generator (.NET 6+) (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.Logging;\n\nvar app = WebApplication.CreateBuilder(args).Build();\n\napp.Logger.OrderShipped(42, \"Pune\");\napp.Logger.PaymentFailed(42, new InvalidOperationException(\"card declined\"));\n\nstatic partial class Log\n{\n    [LoggerMessage(EventId = 1001, Level = LogLevel.Information, Message = \"Order {OrderId} shipped to {City}\")]\n    public static partial void OrderShipped(this ILogger logger, int orderId, string city);\n\n    [LoggerMessage(EventId = 1002, Level = LogLevel.Error, Message = \"Payment failed for order {OrderId}\")]\n    public static partial void PaymentFailed(this ILogger logger, int orderId, Exception exception);\n}"
        }
      ]
    },
    {
      id: "filters-deep",
      depth: "detailed",
      title: {
        en: "DI per request and filters in more detail",
        hi: "हर request पर DI और filters थोड़ा गहराई से",
        hg: "Har request par DI aur filters thoda gehraai se"
      },
      body: {
        en: "<ul>\n<li><b>DI per request</b>: register in <code>builder.Services</code>; the framework creates one scope per request, available as <code>HttpContext.RequestServices</code>. Scoped services (such as <code>DbContext</code>) live for that request. Lifetimes and captive dependencies are Day 11; just apply them.</li>\n<li><b>Order of filters</b>: authorization → resource → (model binding) → action → your action method → result. Exception filters handle unhandled exceptions from controller creation, model binding, action filters and action methods (not from resource or result filters). The puzzles below print this order.</li>\n<li><b>Filters with DI</b>: attributes cannot take constructor services directly. Use <code>[ServiceFilter(typeof(T))]</code> (resolved from DI, so register <code>T</code>) or <code>[TypeFilter(typeof(T))]</code> (created with constructor arguments from DI; <code>T</code> itself need not be registered).</li>\n</ul>",
        hi: "<ul>\n<li><b>हर request में DI</b>: <code>builder.Services</code> में register करो; framework हर request के लिए एक scope बनाता है, जो <code>HttpContext.RequestServices</code> से मिलता है। Scoped services (जैसे <code>DbContext</code>) उसी request तक जीती हैं। Lifetimes और captive dependencies Day 11 में हैं; बस लगाओ।</li>\n<li><b>Filters का order</b>: authorization → resource → (model binding) → action → आपका action method → result। Exception filters controller बनने, model binding, action filters और action methods के unhandled exceptions संभालते हैं (resource या result filters के नहीं)। नीचे के puzzles यह order print करते हैं।</li>\n<li><b>DI वाले filters</b>: attributes सीधे constructor services नहीं ले सकते। <code>[ServiceFilter(typeof(T))]</code> (DI से resolve होता है, इसलिए <code>T</code> register करो) या <code>[TypeFilter(typeof(T))]</code> (constructor arguments DI से मिलते हैं; <code>T</code> को ख़ुद register करना ज़रूरी नहीं) use करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Har request mein DI</b>: <code>builder.Services</code> mein register karo; framework har request ke liye ek scope banata hai, jo <code>HttpContext.RequestServices</code> se milta hai. Scoped services (jaise <code>DbContext</code>) usi request tak jeeti hain. Lifetimes aur captive dependencies Day 11 mein hain; bas lagao.</li>\n<li><b>Filters ka order</b>: authorization → resource → (model binding) → action → aapka action method → result. Exception filters controller banne, model binding, action filters aur action methods ke unhandled exceptions sambhalte hain (resource ya result filters ke nahi). Neeche ke puzzles yeh order print karte hain.</li>\n<li><b>DI wale filters</b>: attributes seedhe constructor services nahi le sakte. <code>[ServiceFilter(typeof(T))]</code> (DI se resolve hota hai, isliye <code>T</code> register karo) ya <code>[TypeFilter(typeof(T))]</code> (constructor arguments DI se milte hain; <code>T</code> ko khud register karna zaroori nahi) use karo.</li>\n</ul>"
      }
    },
    {
      id: "minimal-deep",
      depth: "detailed",
      title: {
        en: "Minimal API building blocks: groups, endpoint filters, TypedResults",
        hi: "Minimal API के building blocks: groups, endpoint filters, TypedResults",
        hg: "Minimal API ke building blocks: groups, endpoint filters, TypedResults"
      },
      body: {
        en: "<ul>\n<li><b>Minimal API building blocks</b>: <code>MapGroup</code> shares a prefix and filters; <code>AddEndpointFilter</code> (or an <code>IEndpointFilter</code> class) is the minimal-API cousin of an action filter; <code>TypedResults</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code> make the possible responses part of the method signature, so they can be tested and documented.</li>\n</ul>",
        hi: "<ul>\n<li><b>Minimal API के building blocks</b>: <code>MapGroup</code> prefix और filters साझा करता है; <code>AddEndpointFilter</code> (या <code>IEndpointFilter</code> class) action filter का minimal-API भाई है; <code>TypedResults</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code> संभव responses को method signature का हिस्सा बना देते हैं, इसलिए उन्हें test और document किया जा सकता है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Minimal API ke building blocks</b>: <code>MapGroup</code> prefix aur filters saajha karta hai; <code>AddEndpointFilter</code> (ya <code>IEndpointFilter</code> class) action filter ka minimal-API bhai hai; <code>TypedResults</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code> sambhav responses ko method signature ka hissa bana dete hain, isliye unhe test aur document kiya ja sakta hai.</li>\n</ul>"
      },
      code: [
        {
          caption: {
            en: "The same endpoint as a Minimal API: route group, endpoint filter, TypedResults (compile-checked, not run)",
            hi: "वही endpoint Minimal API में: route group, endpoint filter, TypedResults (compile-checked, run नहीं)",
            hg: "Wahi endpoint Minimal API mein: route group, endpoint filter, TypedResults (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Http.HttpResults;\nusing Microsoft.AspNetCore.Routing;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddSingleton<IProductStore, ProductStore>();\nvar app = builder.Build();\n\nvar products = app.MapGroup(\"/products\");          // shared prefix (and shared filters)\nproducts.AddEndpointFilter<PositiveIdFilter>();\nproducts.MapGet(\"/{id:int}\", GetProduct);\napp.Run();\n\nstatic Results<Ok<Product>, NotFound> GetProduct(int id, IProductStore store) =>\n    store.Find(id) is { } product ? TypedResults.Ok(product) : TypedResults.NotFound();\n\npublic record Product(int Id, string Name);\n\npublic interface IProductStore { Product? Find(int id); }\n\npublic class ProductStore : IProductStore\n{\n    private readonly Dictionary<int, Product> _items = new() { [1] = new Product(1, \"Tiffin box\") };\n    public Product? Find(int id) => _items.GetValueOrDefault(id);\n}\n\nclass PositiveIdFilter : IEndpointFilter\n{\n    public async ValueTask<object?> InvokeAsync(EndpointFilterInvocationContext context, EndpointFilterDelegate next)\n    {\n        if (context.GetArgument<int>(0) <= 0)\n            return TypedResults.BadRequest(\"id must be positive\");   // short-circuit\n        return await next(context);\n    }\n}"
        }
      ]
    }
  ],
  qa: [
    {
      id: "program-cs-startup",
      depth: "short",
      q: "What does Program.cs do in a modern ASP.NET Core app, and what replaced Startup.cs?",
      answer: "It builds and runs the host: register services, build the app, add middleware in order, map endpoints, then run. Since .NET 6 the minimal hosting model merges Program.Main and Startup.cs into one file.",
      meaning: {
        hi: "यह host बनाकर चलाता है: services register करो, app build करो, middleware order में जोड़ो, endpoints map करो, फिर run। .NET 6 से minimal hosting model Program.Main और Startup.cs को एक file में मिला देता है।",
        hg: "Yeh host banakar chalata hai: services register karo, app build karo, middleware order mein jodo, endpoints map karo, phir run. .NET 6 se minimal hosting model Program.Main aur Startup.cs ko ek file mein mila deta hai."
      },
      explain: {
        en: "<ul>\n<li><code>ConfigureServices</code> became <code>builder.Services.Add...</code>; <code>Configure</code> became the <code>app.Use...</code> calls.</li>\n<li>The builder also exposes <code>Configuration</code>, <code>Logging</code> and <code>Environment</code>; <code>WebApplication</code> sits on the generic host shared with worker services.</li>\n<li>A <code>Startup</code> class still works, so legacy apps need not be rewritten.</li>\n<li>Follow-up: \"Why does the order of <code>app.Use...</code> matter?\" — see the middleware questions.</li>\n<li>TL angle: keep Program.cs thin; move registrations into <code>AddXxx</code> extension methods per feature.</li>\n</ul>",
        hi: "<ul>\n<li><code>ConfigureServices</code> बना <code>builder.Services.Add...</code>; <code>Configure</code> बना <code>app.Use...</code> calls।</li>\n<li>Builder में <code>Configuration</code>, <code>Logging</code> और <code>Environment</code> भी हैं; <code>WebApplication</code> उसी generic host पर है जो worker services में होता है।</li>\n<li><code>Startup</code> class अब भी चलती है, इसलिए legacy apps को rewrite करना ज़रूरी नहीं।</li>\n<li>Follow-up: \"<code>app.Use...</code> का order क्यों मायने रखता है?\" — middleware वाले सवाल देखो।</li>\n<li>TL angle: Program.cs पतली रखो; registrations को feature के हिसाब से <code>AddXxx</code> extension methods में ले जाओ।</li>\n</ul>",
        hg: "<ul>\n<li><code>ConfigureServices</code> bana <code>builder.Services.Add...</code>; <code>Configure</code> bana <code>app.Use...</code> calls.</li>\n<li>Builder mein <code>Configuration</code>, <code>Logging</code> aur <code>Environment</code> bhi hain; <code>WebApplication</code> usi generic host par hai jo worker services mein hota hai.</li>\n<li><code>Startup</code> class ab bhi chalti hai, isliye legacy apps ko rewrite karna zaroori nahi.</li>\n<li>Follow-up: \"<code>app.Use...</code> ka order kyun matter karta hai?\" — middleware wale sawaal dekho.</li>\n<li>TL angle: Program.cs patli rakho; registrations ko feature ke hisaab se <code>AddXxx</code> extension methods mein le jao.</li>\n</ul>"
      }
    },
    {
      id: "middleware-order",
      depth: "short",
      q: "What is middleware, and why does the order matter?",
      answer: "Middleware is a component in the request pipeline that runs code before and after the next component, or stops the request. Order matters because each component only sees what the earlier ones let through.",
      meaning: {
        hi: "Middleware request pipeline का component है जो अगले component से पहले और बाद में code चलाता है, या request रोक देता है। Order इसलिए मायने रखता है क्योंकि हर component वही देखता है जो पहले वालों ने जाने दिया।",
        hg: "Middleware request pipeline ka component hai jo agle component se pehle aur baad mein code chalata hai, ya request rok deta hai. Order isliye matter karta hai kyunki har component wahi dekhta hai jo pehle walon ne jaane diya."
      },
      explain: {
        en: "<ul>\n<li>Code before <code>await next()</code> runs in registration order; code after it runs in reverse. This is the Chain of Responsibility from Day 10.</li>\n<li>Example: exception handling must come first to catch errors from later middleware; <code>UseAuthentication</code> must come before <code>UseAuthorization</code>.</li>\n<li>The usual order: exception handler, HSTS, HTTPS redirection, static files, routing, CORS, authentication, authorization, custom middleware, endpoints.</li>\n<li>Follow-up: \"Why does CORS go before authorization?\" — so that even a short-circuited 401 or 403 response carries CORS headers; otherwise the browser reports a confusing CORS error. CORS itself is Day 13.</li>\n<li>TL angle: put the pipeline order in a short comment or test; wrong order bugs look like random 401s or missing CORS headers.</li>\n</ul>",
        hi: "<ul>\n<li><code>await next()</code> से पहले का code registration order में चलता है; बाद का code उल्टे order में। यह Day 10 वाला Chain of Responsibility है।</li>\n<li>उदाहरण: exception handling सबसे पहले आना चाहिए ताकि बाद के middleware के errors पकड़े; <code>UseAuthentication</code>, <code>UseAuthorization</code> से पहले आना चाहिए।</li>\n<li>आम order: exception handler, HSTS, HTTPS redirection, static files, routing, CORS, authentication, authorization, custom middleware, endpoints।</li>\n<li>Follow-up: \"CORS authorization से पहले क्यों?\" — ताकि short-circuit हुए 401 या 403 response में भी CORS headers हों; वरना browser उलझाने वाला CORS error दिखाता है। CORS ख़ुद Day 13 में है।</li>\n<li>TL angle: pipeline का order छोटे comment या test में लिखो; ग़लत order के bugs random 401 या missing CORS headers जैसे दिखते हैं।</li>\n</ul>",
        hg: "<ul>\n<li><code>await next()</code> se pehle ka code registration order mein chalta hai; baad ka code ulte order mein. Yeh Day 10 wala Chain of Responsibility hai.</li>\n<li>Jaise: exception handling sabse pehle aana chahiye taaki baad ke middleware ke errors pakde; <code>UseAuthentication</code>, <code>UseAuthorization</code> se pehle aana chahiye.</li>\n<li>Aam order: exception handler, HSTS, HTTPS redirection, static files, routing, CORS, authentication, authorization, custom middleware, endpoints.</li>\n<li>Follow-up: \"CORS authorization se pehle kyun?\" — taaki short-circuit hue 401 ya 403 response mein bhi CORS headers hon; warna browser uljhane wala CORS error dikhata hai. CORS khud Day 13 mein hai.</li>\n<li>TL angle: pipeline ka order chhote comment ya test mein likho; galat order ke bugs random 401 ya missing CORS headers jaise dikhte hain.</li>\n</ul>"
      }
    },
    {
      id: "use-run-map",
      depth: "short",
      q: "What is the difference between Use, Run and Map?",
      answer: "Use adds middleware that can call next; Run adds terminal middleware with no next; Map branches the pipeline by path prefix. MapWhen branches on a condition, and UseWhen branches but rejoins.",
      meaning: {
        hi: "Use ऐसा middleware जोड़ता है जो next बुला सकता है; Run terminal middleware जोड़ता है जिसमें next नहीं; Map path prefix से pipeline branch करता है। MapWhen condition से branch करता है, और UseWhen branch करके वापस जुड़ता है।",
        hg: "Use aisa middleware jodta hai jo next bula sakta hai; Run terminal middleware jodta hai jismein next nahi; Map path prefix se pipeline branch karta hai. MapWhen condition se branch karta hai, aur UseWhen branch karke wapas judta hai."
      },
      explain: {
        en: "<ul>\n<li><b>Run</b> ends the chain: anything registered after it is never reached (puzzle 1 shows this).</li>\n<li><b>Map(\"/admin\", ...)</b> matches a path prefix and moves the matched part into <code>PathBase</code>; <b>MapWhen</b> takes any predicate on <code>HttpContext</code>. Neither rejoins the main pipeline.</li>\n<li><b>UseWhen</b> runs the branch middleware for matching requests and then continues with the main pipeline (puzzle 3 shows all three).</li>\n<li>Follow-up: \"Where do endpoints (<code>MapGet</code>) fit?\" — the endpoint middleware at the end of the pipeline runs them after routing selected one.</li>\n</ul>",
        hi: "<ul>\n<li><b>Run</b> chain ख़त्म कर देता है: उसके बाद register हुआ कुछ भी कभी नहीं पहुँचता (puzzle 1 में दिखता है)।</li>\n<li><b>Map(\"/admin\", ...)</b> path prefix match करता है और matched हिस्से को <code>PathBase</code> में ले जाता है; <b>MapWhen</b> <code>HttpContext</code> पर कोई भी predicate लेता है। दोनों main pipeline में वापस नहीं जुड़ते।</li>\n<li><b>UseWhen</b> matching requests के लिए branch middleware चलाता है और फिर main pipeline आगे चलती है (puzzle 3 में तीनों दिखते हैं)।</li>\n<li>Follow-up: \"Endpoints (<code>MapGet</code>) कहाँ आते हैं?\" — pipeline के अंत में endpoint middleware उन्हें चलाता है, routing के endpoint चुनने के बाद।</li>\n</ul>",
        hg: "<ul>\n<li><b>Run</b> chain khatam kar deta hai: uske baad register hua kuch bhi kabhi nahi pahunchta (puzzle 1 mein dikhta hai).</li>\n<li><b>Map(\"/admin\", ...)</b> path prefix match karta hai aur matched hisse ko <code>PathBase</code> mein le jaata hai; <b>MapWhen</b> <code>HttpContext</code> par koi bhi predicate leta hai. Dono main pipeline mein wapas nahi judte.</li>\n<li><b>UseWhen</b> matching requests ke liye branch middleware chalata hai aur phir main pipeline aage chalti hai (puzzle 3 mein teeno dikhte hain).</li>\n<li>Follow-up: \"Endpoints (<code>MapGet</code>) kahan aate hain?\" — pipeline ke ant mein endpoint middleware unhe chalata hai, routing ke endpoint chunne ke baad.</li>\n</ul>"
      }
    },
    {
      id: "config-precedence",
      depth: "short",
      q: "How does configuration work in ASP.NET Core, and what is the precedence?",
      answer: "Configuration providers are layered and the last one wins: appsettings.json, appsettings.{Environment}.json, user secrets in Development, environment variables, then command-line arguments.",
      meaning: {
        hi: "Configuration providers परतों में हैं और आख़िरी जीतता है: appsettings.json, appsettings.{Environment}.json, Development में user secrets, environment variables, फिर command-line arguments।",
        hg: "Configuration providers parton mein hain aur aakhri jeetta hai: appsettings.json, appsettings.{Environment}.json, Development mein user secrets, environment variables, phir command-line arguments."
      },
      explain: {
        en: "<ul>\n<li>This is the default set from <code>WebApplication.CreateBuilder</code>. Sources you add later with <code>builder.Configuration.Add...</code> are layered on top of these, so they win over them.</li>\n<li>Keys are hierarchical (<code>Shop:Currency</code>), case-insensitive; environment variables use <code>__</code> for the colon.</li>\n<li>Read with <code>IConfiguration</code> or bind to a class (Options pattern, Day 11). Puzzle 4 proves the \"last source wins\" rule with in-memory, environment and command-line sources.</li>\n<li>Follow-up: \"How do you change a setting in production without redeploying code?\" — set an environment variable or pass a command-line argument; no rebuild needed.</li>\n<li>TL angle: document which source owns which key, and keep secrets out of the JSON files.</li>\n</ul>",
        hi: "<ul>\n<li>यह <code>WebApplication.CreateBuilder</code> का default set है। जो sources आप बाद में <code>builder.Configuration.Add...</code> से जोड़ते हो वे इनके ऊपर लगते हैं, इसलिए इन पर जीतते हैं।</li>\n<li>Keys hierarchical (<code>Shop:Currency</code>) और case-insensitive हैं; environment variables में colon की जगह <code>__</code> आता है।</li>\n<li><code>IConfiguration</code> से पढ़ो या class में bind करो (Options pattern, Day 11)। Puzzle 4 in-memory, environment और command-line sources से \"आख़िरी source जीतता है\" साबित करता है।</li>\n<li>Follow-up: \"production में code redeploy किए बिना setting कैसे बदलोगे?\" — environment variable set करो या command-line argument दो; rebuild नहीं चाहिए।</li>\n<li>TL angle: documents में लिखो कि कौन सा source किस key का मालिक है, और secrets को JSON files से बाहर रखो।</li>\n</ul>",
        hg: "<ul>\n<li>Yeh <code>WebApplication.CreateBuilder</code> ka default set hai. Jo sources aap baad mein <code>builder.Configuration.Add...</code> se jodte ho woh inke upar lagte hain, isliye inpar jeette hain.</li>\n<li>Keys hierarchical (<code>Shop:Currency</code>) aur case-insensitive hain; environment variables mein colon ki jagah <code>__</code> aata hai.</li>\n<li><code>IConfiguration</code> se padho ya class mein bind karo (Options pattern, Day 11). Puzzle 4 in-memory, environment aur command-line sources se \"aakhri source jeetta hai\" saabit karta hai.</li>\n<li>Follow-up: \"production mein code redeploy kiye bina setting kaise badloge?\" — environment variable set karo ya command-line argument do; rebuild nahi chahiye.</li>\n<li>TL angle: documents mein likho ki kaun sa source kis key ka malik hai, aur secrets ko JSON files se bahar rakho.</li>\n</ul>"
      }
    },
    {
      id: "kestrel-iis",
      depth: "short",
      q: "What is Kestrel, and how do IIS in-process and out-of-process hosting differ?",
      answer: "Kestrel is the default cross-platform ASP.NET Core web server. In-process IIS runs the app inside w3wp.exe; out-of-process keeps Kestrel in its own process and IIS forwards requests to it.",
      meaning: {
        hi: "Kestrel ASP.NET Core का default cross-platform web server है। In-process IIS में app w3wp.exe के अंदर चलती है; out-of-process में Kestrel अपने process में रहता है और IIS requests उसे forward करता है।",
        hg: "Kestrel ASP.NET Core ka default cross-platform web server hai. In-process IIS mein app w3wp.exe ke andar chalti hai; out-of-process mein Kestrel apne process mein rehta hai aur IIS requests use forward karta hai."
      },
      explain: {
        en: "<ul>\n<li>In-process (the default on IIS since ASP.NET Core 3.0) avoids the extra network hop between two processes, so it is usually faster.</li>\n<li>Out-of-process uses IIS as a reverse proxy through the ASP.NET Core Module; the app has its own process and its own lifetime.</li>\n<li>Kestrel can serve the internet directly, but many teams still put a reverse proxy (IIS, nginx, a cloud load balancer) in front for TLS, load balancing and request filtering.</li>\n<li>Follow-up: \"Your app runs on Linux containers: is IIS involved?\" — no, Kestrel runs inside the container, usually behind a load balancer or ingress.</li>\n</ul>",
        hi: "<ul>\n<li>In-process (ASP.NET Core 3.0 से IIS पर default) दो processes के बीच का extra network hop बचाता है, इसलिए आम तौर पर तेज़ होता है।</li>\n<li>Out-of-process में IIS ASP.NET Core Module के ज़रिए reverse proxy का काम करता है; app का अपना process और अपनी lifetime होती है।</li>\n<li>Kestrel सीधे internet को serve कर सकता है, पर कई teams TLS, load balancing और request filtering के लिए आगे reverse proxy (IIS, nginx, cloud load balancer) रखती हैं।</li>\n<li>Follow-up: \"आपकी app Linux containers में चलती है: क्या IIS शामिल है?\" — नहीं, Kestrel container के अंदर चलता है, आम तौर पर load balancer या ingress के पीछे।</li>\n</ul>",
        hg: "<ul>\n<li>In-process (ASP.NET Core 3.0 se IIS par default) do processes ke beech ka extra network hop bachata hai, isliye aam taur par tez hota hai.</li>\n<li>Out-of-process mein IIS ASP.NET Core Module ke zariye reverse proxy ka kaam karta hai; app ka apna process aur apni lifetime hoti hai.</li>\n<li>Kestrel seedha internet ko serve kar sakta hai, par kai teams TLS, load balancing aur request filtering ke liye aage reverse proxy (IIS, nginx, cloud load balancer) rakhti hain.</li>\n<li>Follow-up: \"aapki app Linux containers mein chalti hai: kya IIS shamil hai?\" — nahi, Kestrel container ke andar chalta hai, aam taur par load balancer ya ingress ke peeche.</li>\n</ul>"
      }
    },
    {
      id: "filters-vs-middleware",
      depth: "short",
      q: "Filters vs middleware: when do you use which?",
      answer: "Middleware runs for every request and only knows HttpContext; filters run inside MVC and know the action and model state. I use middleware for general HTTP concerns and filters for action-specific ones.",
      meaning: {
        hi: "Middleware हर request पर चलता है और सिर्फ़ HttpContext जानता है; filters MVC के अंदर चलते हैं और action व model state जानते हैं। सामान्य HTTP कामों के लिए middleware, action-specific कामों के लिए filters।",
        hg: "Middleware har request par chalta hai aur sirf HttpContext jaanta hai; filters MVC ke andar chalte hain aur action va model state jaante hain. Saamanya HTTP kaamon ke liye middleware, action-specific kaamon ke liye filters."
      },
      explain: {
        en: "<ul>\n<li>Middleware examples: correlation ID, request logging, security headers, exception handler. It also covers static files and endpoints that are not MVC.</li>\n<li>Filter examples: validate a parameter, audit an action by name, wrap results, translate a controller exception. Minimal APIs have their own endpoint filters.</li>\n<li>Filters are registered globally, per controller or per action; middleware is registered once for the whole pipeline (or a branch).</li>\n<li>Follow-up: \"Can a filter replace the exception-handling middleware?\" — no for the whole app: exception filters handle unhandled exceptions from controller creation, model binding, action filters and action methods, but not from other middleware, resource or result filters, or result execution.</li>\n</ul>",
        hi: "<ul>\n<li>Middleware के उदाहरण: correlation ID, request logging, security headers, exception handler। यह static files और non-MVC endpoints को भी कवर करता है।</li>\n<li>Filter के उदाहरण: parameter validate करना, action का नाम लेकर audit करना, results wrap करना, controller exception translate करना। Minimal APIs के अपने endpoint filters हैं।</li>\n<li>Filters globally, per controller या per action register होते हैं; middleware पूरी pipeline (या एक branch) के लिए एक बार register होता है।</li>\n<li>Follow-up: \"क्या filter exception-handling middleware की जगह ले सकता है?\" — पूरी app के लिए नहीं: exception filters controller बनने, model binding, action filters और action methods के unhandled exceptions संभालते हैं, पर दूसरे middleware, resource या result filters और result execution के नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>Middleware ke examples: correlation ID, request logging, security headers, exception handler. Yeh static files aur non-MVC endpoints ko bhi cover karta hai.</li>\n<li>Filter ke examples: parameter validate karna, action ka naam lekar audit karna, results wrap karna, controller exception translate karna. Minimal APIs ke apne endpoint filters hain.</li>\n<li>Filters globally, per controller ya per action register hote hain; middleware poori pipeline (ya ek branch) ke liye ek baar register hota hai.</li>\n<li>Follow-up: \"kya filter exception-handling middleware ki jagah le sakta hai?\" — poori app ke liye nahi: exception filters controller banne, model binding, action filters aur action methods ke unhandled exceptions sambhalte hain, par doosre middleware, resource ya result filters aur result execution ke nahi.</li>\n</ul>"
      }
    },
    {
      id: "minimal-vs-controllers",
      depth: "short",
      q: "Minimal API or controllers: which would you choose?",
      answer: "Both are production-ready. I pick Minimal APIs for small, focused services and controllers when a large team wants filters and conventions; the choice is rarely about performance.",
      meaning: {
        hi: "दोनों production-ready हैं। छोटी, focused services के लिए Minimal APIs, और जब बड़ी team को filters और conventions चाहिए तब controllers; चुनाव शायद ही performance का होता है।",
        hg: "Dono production-ready hain. Chhoti, focused services ke liye Minimal APIs, aur jab badi team ko filters aur conventions chahiye tab controllers; chunaav shayad hi performance ka hota hai."
      },
      explain: {
        en: "<ul>\n<li>Minimal APIs: less ceremony, route groups, endpoint filters and <code>TypedResults</code> since .NET 7; good for microservices and small teams.</li>\n<li>Controllers: attribute routing, action filters, model-binding conventions and a structure many teams know from classic MVC / Web API.</li>\n<li>Both share routing, DI, middleware and OpenAPI support (Day 13), and they can live in the same app.</li>\n<li>Follow-up: \"Is Minimal API faster?\" — it has slightly less overhead, but database and network time dominate; measure before choosing for speed.</li>\n<li>TL angle: pick one default per codebase, write it in the team conventions, and organise Minimal APIs into groups and extension methods so Program.cs does not become a dumping ground.</li>\n</ul>",
        hi: "<ul>\n<li>Minimal APIs: कम ceremony, .NET 7 से route groups, endpoint filters और <code>TypedResults</code>; microservices और छोटी teams के लिए अच्छे।</li>\n<li>Controllers: attribute routing, action filters, model-binding conventions और ऐसी structure जो कई teams classic MVC / Web API से जानती हैं।</li>\n<li>दोनों में routing, DI, middleware और OpenAPI support एक है (Day 13), और वे एक ही app में रह सकते हैं।</li>\n<li>Follow-up: \"क्या Minimal API तेज़ है?\" — overhead थोड़ा कम है, पर database और network का समय हावी रहता है; speed के लिए चुनने से पहले measure करो।</li>\n<li>TL angle: एक codebase के लिए एक default चुनो, team conventions में लिखो, और Minimal APIs को groups और extension methods में बाँटो ताकि Program.cs कूड़ादान न बने।</li>\n</ul>",
        hg: "<ul>\n<li>Minimal APIs: kam ceremony, .NET 7 se route groups, endpoint filters aur <code>TypedResults</code>; microservices aur chhoti teams ke liye achhe.</li>\n<li>Controllers: attribute routing, action filters, model-binding conventions aur aisi structure jo kai teams classic MVC / Web API se jaanti hain.</li>\n<li>Dono mein routing, DI, middleware aur OpenAPI support ek hai (Day 13), aur woh ek hi app mein reh sakte hain.</li>\n<li>Follow-up: \"kya Minimal API tez hai?\" — overhead thoda kam hai, par database aur network ka samay haavi rehta hai; speed ke liye chunne se pehle measure karo.</li>\n<li>TL angle: ek codebase ke liye ek default chuno, team conventions mein likho, aur Minimal APIs ko groups aur extension methods mein baanto taaki Program.cs koodadaan na bane.</li>\n</ul>"
      }
    },
    {
      id: "authn-vs-authz",
      depth: "short",
      q: "What do UseAuthentication and UseAuthorization each do in the pipeline?",
      answer: "UseAuthentication identifies the caller, sets HttpContext.User and calls next. Authorization then checks the endpoint's policy and answers 401 (challenge) if the caller is not authenticated or 403 (forbid) if not allowed.",
      meaning: {
        hi: "UseAuthentication caller को पहचानता है, HttpContext.User set करता है और next बुलाता है। फिर authorization endpoint की policy जाँचता है और caller authenticated न हो तो 401 (challenge), allowed न हो तो 403 (forbid) देता है।",
        hg: "UseAuthentication caller ko pehchanta hai, HttpContext.User set karta hai aur next bulata hai. Phir authorization endpoint ki policy jaanchta hai aur caller authenticated na ho to 401 (challenge), allowed na ho to 403 (forbid) deta hai."
      },
      explain: {
        en: "<ul>\n<li>Authentication does not reject by itself: an anonymous request simply gets an anonymous <code>User</code> and continues.</li>\n<li>Authorization decides using attributes or <code>RequireAuthorization()</code> on the endpoint. No policy on the endpoint (and no fallback policy) means anonymous access is allowed.</li>\n<li>The authentication scheme shapes the response: bearer-token schemes answer 401; cookie authentication usually redirects browsers to a login page.</li>\n<li>Follow-up: \"Which of 401 and 403 means 'who are you?'\" — 401 means the caller is not authenticated; 403 means authenticated but not permitted. JWT setup is in Day 13.</li>\n<li>Consistent with Day 10: only the authorization step can end the chain with 401 or 403; authentication only sets the user.</li>\n</ul>",
        hi: "<ul>\n<li>Authentication ख़ुद reject नहीं करता: anonymous request को बस anonymous <code>User</code> मिलता है और वह आगे बढ़ती है।</li>\n<li>Authorization फ़ैसला attributes या endpoint पर <code>RequireAuthorization()</code> से करता है। Endpoint पर कोई policy नहीं (और fallback policy भी नहीं) तो anonymous access allowed है।</li>\n<li>Authentication scheme response का रूप तय करता है: bearer-token schemes 401 देते हैं; cookie authentication आम तौर पर browsers को login page पर redirect करता है।</li>\n<li>Follow-up: \"401 और 403 में 'तुम कौन हो?' कौन सा है?\" — 401 मतलब caller authenticated नहीं; 403 मतलब authenticated है पर permitted नहीं। JWT setup Day 13 में है।</li>\n<li>Day 10 से मेल: सिर्फ़ authorization step chain को 401 या 403 से ख़त्म कर सकता है; authentication सिर्फ़ user set करता है।</li>\n</ul>",
        hg: "<ul>\n<li>Authentication khud reject nahi karta: anonymous request ko bas anonymous <code>User</code> milta hai aur woh aage badhti hai.</li>\n<li>Authorization faisla attributes ya endpoint par <code>RequireAuthorization()</code> se karta hai. Endpoint par koi policy nahi (aur fallback policy bhi nahi) to anonymous access allowed hai.</li>\n<li>Authentication scheme response ka roop tay karta hai: bearer-token schemes 401 dete hain; cookie authentication aam taur par browsers ko login page par redirect karta hai.</li>\n<li>Follow-up: \"401 aur 403 mein 'tum kaun ho?' kaun sa hai?\" — 401 matlab caller authenticated nahi; 403 matlab authenticated hai par permitted nahi. JWT setup Day 13 mein hai.</li>\n<li>Day 10 se mel: sirf authorization step chain ko 401 ya 403 se khatam kar sakta hai; authentication sirf user set karta hai.</li>\n</ul>"
      }
    },
    {
      id: "custom-middleware",
      depth: "detailed",
      q: "How do you write custom middleware, and what are the DI pitfalls?",
      answer: "Write an inline Use lambda, a convention class with InvokeAsync, or an IMiddleware class. A convention class is created once, so take scoped services as InvokeAsync parameters, not in the constructor.",
      meaning: {
        hi: "Inline Use lambda, InvokeAsync वाली convention class, या IMiddleware class लिखो। Convention class एक बार बनती है, इसलिए scoped services को constructor में नहीं, InvokeAsync के parameters में लो।",
        hg: "Inline Use lambda, InvokeAsync wali convention class, ya IMiddleware class likho. Convention class ek baar banti hai, isliye scoped services ko constructor mein nahi, InvokeAsync ke parameters mein lo."
      },
      explain: {
        en: "<ul>\n<li>Convention class: constructor gets <code>RequestDelegate</code> and singleton-safe services; <code>InvokeAsync(HttpContext, ...)</code> gets per-request services (this avoids the captive dependency from Day 11; puzzle 2 shows the one-instance behaviour).</li>\n<li><code>IMiddleware</code>: resolved from DI by <code>IMiddlewareFactory</code> and must be registered; strongly typed and can use scoped constructor injection.</li>\n<li>Wrap it in an extension method (<code>UseXxx</code>) for readability, and write a short-circuit as <code>return</code> without calling <code>next</code>.</li>\n<li>Follow-up: \"How do you unit test middleware?\" — build a <code>DefaultHttpContext</code> and a fake <code>next</code> delegate, or host it in <code>TestServer</code> as the puzzles do.</li>\n<li>TL angle: middleware is for cross-cutting HTTP behaviour; business rules belong in services.</li>\n</ul>",
        hi: "<ul>\n<li>Convention class: constructor में <code>RequestDelegate</code> और singleton-safe services आती हैं; <code>InvokeAsync(HttpContext, ...)</code> में per-request services (इससे Day 11 वाली captive dependency बचती है; puzzle 2 एक-instance वाला behaviour दिखाता है)।</li>\n<li><code>IMiddleware</code>: <code>IMiddlewareFactory</code> इसे DI से resolve करता है और इसे register करना पड़ता है; strongly typed है और scoped constructor injection ले सकता है।</li>\n<li>पढ़ने में आसानी के लिए extension method (<code>UseXxx</code>) में लपेटो, और short-circuit को <code>next</code> बुलाए बिना <code>return</code> की तरह लिखो।</li>\n<li>Follow-up: \"middleware का unit test कैसे करोगे?\" — <code>DefaultHttpContext</code> और नकली <code>next</code> delegate बनाओ, या puzzles की तरह <code>TestServer</code> में host करो।</li>\n<li>TL angle: middleware cross-cutting HTTP behaviour के लिए है; business rules services में रहने चाहिए।</li>\n</ul>",
        hg: "<ul>\n<li>Convention class: constructor mein <code>RequestDelegate</code> aur singleton-safe services aati hain; <code>InvokeAsync(HttpContext, ...)</code> mein per-request services (isse Day 11 wali captive dependency bachti hai; puzzle 2 ek-instance wala behaviour dikhata hai).</li>\n<li><code>IMiddleware</code>: <code>IMiddlewareFactory</code> ise DI se resolve karta hai aur ise register karna padta hai; strongly typed hai aur scoped constructor injection le sakta hai.</li>\n<li>Padhne mein aasani ke liye extension method (<code>UseXxx</code>) mein lapeto, aur short-circuit ko <code>next</code> bulaye bina <code>return</code> ki tarah likho.</li>\n<li>Follow-up: \"middleware ka unit test kaise karoge?\" — <code>DefaultHttpContext</code> aur nakli <code>next</code> delegate banao, ya puzzles ki tarah <code>TestServer</code> mein host karo.</li>\n<li>TL angle: middleware cross-cutting HTTP behaviour ke liye hai; business rules services mein rehne chahiye.</li>\n</ul>"
      }
    },
    {
      id: "filter-order",
      depth: "detailed",
      q: "What is the filter execution order in ASP.NET Core MVC?",
      answer: "Authorization, resource, action, then result filters; exception filters handle errors raised in the action stage. Within a type, global runs before controller, then action, and the order reverses on the way out.",
      meaning: {
        hi: "Authorization, resource, action, फिर result filters; exception filters action stage में उठे errors संभालते हैं। एक type में global, फिर controller, फिर action चलता है, और बाहर आते समय order उल्टा हो जाता है।",
        hg: "Authorization, resource, action, phir result filters; exception filters action stage mein uthe errors sambhalte hain. Ek type mein global, phir controller, phir action chalta hai, aur bahar aate samay order ulta ho jaata hai."
      },
      explain: {
        en: "<ul>\n<li>Authorization filters run first and may short-circuit. Resource filters wrap model binding and everything after it, so they suit caching. Action filters surround the action method; result filters surround result execution.</li>\n<li>\"Executing\" methods run global → controller → action; \"executed\" methods run in reverse. Puzzle 5 prints the exact order.</li>\n<li>Exception filters handle unhandled exceptions from controller creation, model binding, action filters and action methods; they do not catch exceptions from resource filters, result filters or result execution.</li>\n<li>Follow-up: \"How can you change the order within a scope?\" — implement <code>IOrderedFilter</code> or set the <code>Order</code> property on the attribute; lower values run first for \"executing\".</li>\n<li>Follow-up: \"Do these filters apply to Minimal APIs?\" — no, they use endpoint filters (puzzle 6).</li>\n</ul>",
        hi: "<ul>\n<li>Authorization filters सबसे पहले चलते हैं और short-circuit कर सकते हैं। Resource filters model binding और उसके बाद की हर चीज़ को लपेटते हैं, इसलिए caching के लिए ठीक हैं। Action filters action method को घेरते हैं; result filters result execution को घेरते हैं।</li>\n<li>\"Executing\" methods global → controller → action के क्रम में चलते हैं; \"executed\" methods उल्टे क्रम में। Puzzle 5 सटीक order print करता है।</li>\n<li>Exception filters controller बनने, model binding, action filters और action methods के unhandled exceptions संभालते हैं; resource filters, result filters या result execution के exceptions नहीं पकड़ते।</li>\n<li>Follow-up: \"एक scope के अंदर order कैसे बदलोगे?\" — <code>IOrderedFilter</code> implement करो या attribute पर <code>Order</code> property set करो; \"executing\" के लिए छोटी value पहले चलती है।</li>\n<li>Follow-up: \"क्या ये filters Minimal APIs पर लगते हैं?\" — नहीं, उनमें endpoint filters होते हैं (puzzle 6)।</li>\n</ul>",
        hg: "<ul>\n<li>Authorization filters sabse pehle chalte hain aur short-circuit kar sakte hain. Resource filters model binding aur uske baad ki har cheez ko lapetate hain, isliye caching ke liye theek hain. Action filters action method ko gherte hain; result filters result execution ko gherte hain.</li>\n<li>\"Executing\" methods global → controller → action ke kram mein chalte hain; \"executed\" methods ulte kram mein. Puzzle 5 sateek order print karta hai.</li>\n<li>Exception filters controller banne, model binding, action filters aur action methods ke unhandled exceptions sambhalte hain; resource filters, result filters ya result execution ke exceptions nahi pakadte.</li>\n<li>Follow-up: \"ek scope ke andar order kaise badloge?\" — <code>IOrderedFilter</code> implement karo ya attribute par <code>Order</code> property set karo; \"executing\" ke liye chhoti value pehle chalti hai.</li>\n<li>Follow-up: \"kya yeh filters Minimal APIs par lagte hain?\" — nahi, unmein endpoint filters hote hain (puzzle 6).</li>\n</ul>"
      }
    },
    {
      id: "environments",
      depth: "detailed",
      q: "How do environments work in ASP.NET Core?",
      answer: "ASPNETCORE_ENVIRONMENT (or DOTNET_ENVIRONMENT) sets Development, Staging or Production, and Production is the default. It picks appsettings.{Environment}.json and lets code branch with IsDevelopment().",
      meaning: {
        hi: "ASPNETCORE_ENVIRONMENT (या DOTNET_ENVIRONMENT) Development, Staging या Production सेट करता है, और default Production है। यह appsettings.{Environment}.json चुनता है और code को IsDevelopment() से branch करने देता है।",
        hg: "ASPNETCORE_ENVIRONMENT (ya DOTNET_ENVIRONMENT) Development, Staging ya Production set karta hai, aur default Production hai. Yeh appsettings.{Environment}.json chunta hai aur code ko IsDevelopment() se branch karne deta hai."
      },
      explain: {
        en: "<ul>\n<li>Local launch profiles usually set <code>ASPNETCORE_ENVIRONMENT=Development</code>; on a server you set it yourself, or the app runs as Production.</li>\n<li>Helpers: <code>IsDevelopment()</code>, <code>IsStaging()</code>, <code>IsProduction()</code>, <code>IsEnvironment(\"Name\")</code>. Custom names such as \"UAT\" are allowed.</li>\n<li>Development switches on user secrets and the developer exception page; other environments should use <code>UseExceptionHandler</code> and HSTS.</li>\n<li>Follow-up: \"Is it good to put <code>if (env.IsDevelopment())</code> all over the code?\" — no; keep branching in startup and configuration, so business code behaves the same everywhere.</li>\n<li>Classic bridge: this replaces Web.config transforms (<code>Web.Release.config</code>).</li>\n</ul>",
        hi: "<ul>\n<li>Local launch profiles आम तौर पर <code>ASPNETCORE_ENVIRONMENT=Development</code> set करते हैं; server पर आप ख़ुद set करते हो, वरना app Production की तरह चलती है।</li>\n<li>Helpers: <code>IsDevelopment()</code>, <code>IsStaging()</code>, <code>IsProduction()</code>, <code>IsEnvironment(\"Name\")</code>। \"UAT\" जैसे custom नाम allowed हैं।</li>\n<li>Development में user secrets और developer exception page चालू होते हैं; दूसरे environments में <code>UseExceptionHandler</code> और HSTS use करो।</li>\n<li>Follow-up: \"क्या पूरे code में <code>if (env.IsDevelopment())</code> डालना ठीक है?\" — नहीं; branching startup और configuration में रखो, ताकि business code हर जगह एक जैसा चले।</li>\n<li>Classic से पुल: यह Web.config transforms (<code>Web.Release.config</code>) की जगह लेता है।</li>\n</ul>",
        hg: "<ul>\n<li>Local launch profiles aam taur par <code>ASPNETCORE_ENVIRONMENT=Development</code> set karte hain; server par aap khud set karte ho, warna app Production ki tarah chalti hai.</li>\n<li>Helpers: <code>IsDevelopment()</code>, <code>IsStaging()</code>, <code>IsProduction()</code>, <code>IsEnvironment(\"Name\")</code>. \"UAT\" jaise custom naam allowed hain.</li>\n<li>Development mein user secrets aur developer exception page chalu hote hain; doosre environments mein <code>UseExceptionHandler</code> aur HSTS use karo.</li>\n<li>Follow-up: \"kya poore code mein <code>if (env.IsDevelopment())</code> daalna theek hai?\" — nahi; branching startup aur configuration mein rakho, taaki business code har jagah ek jaisa chale.</li>\n<li>Classic se pul: yeh Web.config transforms (<code>Web.Release.config</code>) ki jagah leta hai.</li>\n</ul>"
      }
    },
    {
      id: "di-request-scope",
      depth: "detailed",
      q: "How does dependency injection work per request in ASP.NET Core?",
      answer: "The host creates one scope per request, exposed as HttpContext.RequestServices, so scoped services such as DbContext live for exactly that request. Singleton and transient lifetimes behave as usual.",
      meaning: {
        hi: "Host हर request के लिए एक scope बनाता है, जो HttpContext.RequestServices से मिलता है, इसलिए DbContext जैसी scoped services ठीक उसी request तक जीती हैं। Singleton और transient हमेशा की तरह चलते हैं।",
        hg: "Host har request ke liye ek scope banata hai, jo HttpContext.RequestServices se milta hai, isliye DbContext jaisi scoped services theek usi request tak jeeti hain. Singleton aur transient hamesha ki tarah chalte hain."
      },
      explain: {
        en: "<ul>\n<li>Controllers, endpoint handlers, filters and <code>InvokeAsync</code> parameters resolve from <code>RequestServices</code>. Lifetimes themselves were covered in Day 11 (captive dependencies, <code>ValidateScopes</code>).</li>\n<li>Scope validation is on by default in the Development environment, which catches a singleton that takes a scoped service early.</li>\n<li>Convention-middleware constructors and background services are not inside a request scope: use <code>InvokeAsync</code> parameters or <code>IServiceScopeFactory</code>.</li>\n<li>Follow-up: \"Why is <code>DbContext</code> scoped?\" — it is not thread-safe and tracks changes for one unit of work (Day 5, Day 7), and a request is that unit.</li>\n<li>Avoid the service-locator habit of calling <code>RequestServices.GetService</code> in business code (Day 8).</li>\n</ul>",
        hi: "<ul>\n<li>Controllers, endpoint handlers, filters और <code>InvokeAsync</code> parameters <code>RequestServices</code> से resolve होते हैं। Lifetimes ख़ुद Day 11 में थीं (captive dependencies, <code>ValidateScopes</code>)।</li>\n<li>Development environment में scope validation default चालू है, जो scoped service लेने वाले singleton को जल्दी पकड़ लेता है।</li>\n<li>Convention-middleware constructors और background services request scope के अंदर नहीं होते: <code>InvokeAsync</code> parameters या <code>IServiceScopeFactory</code> use करो।</li>\n<li>Follow-up: \"<code>DbContext</code> scoped क्यों है?\" — यह thread-safe नहीं है और एक unit of work के बदलाव track करता है (Day 5, Day 7), और request वही unit है।</li>\n<li>Business code में <code>RequestServices.GetService</code> बुलाने की service-locator आदत से बचो (Day 8)।</li>\n</ul>",
        hg: "<ul>\n<li>Controllers, endpoint handlers, filters aur <code>InvokeAsync</code> parameters <code>RequestServices</code> se resolve hote hain. Lifetimes khud Day 11 mein thi (captive dependencies, <code>ValidateScopes</code>).</li>\n<li>Development environment mein scope validation default chalu hai, jo scoped service lene wale singleton ko jaldi pakad leta hai.</li>\n<li>Convention-middleware constructors aur background services request scope ke andar nahi hote: <code>InvokeAsync</code> parameters ya <code>IServiceScopeFactory</code> use karo.</li>\n<li>Follow-up: \"<code>DbContext</code> scoped kyun hai?\" — yeh thread-safe nahi hai aur ek unit of work ke badlav track karta hai (Day 5, Day 7), aur request wahi unit hai.</li>\n<li>Business code mein <code>RequestServices.GetService</code> bulane ki service-locator aadat se bacho (Day 8).</li>\n</ul>"
      }
    },
    {
      id: "logging-templates",
      depth: "detailed",
      q: "Why use message templates instead of string interpolation in logging?",
      answer: "Templates keep named values as structured data for searching and filtering, and the message is formatted only when the level is enabled. Interpolation loses that structure and builds the string every time.",
      meaning: {
        hi: "Templates named values को structured data की तरह रखते हैं ताकि search और filter हो सके, और message तभी बनता है जब level enabled हो। Interpolation वह structure खो देता है और string हर बार बनाता है।",
        hg: "Templates named values ko structured data ki tarah rakhte hain taaki search aur filter ho sake, aur message tabhi banta hai jab level enabled ho. Interpolation woh structure kho deta hai aur string har baar banata hai."
      },
      explain: {
        en: "<ul>\n<li><code>logger.LogInformation(\"Order {OrderId} shipped to {City}\", id, city)</code> lets a log tool query <code>OrderId = 42</code>; <code>$\"Order {id} shipped\"</code> gives only text.</li>\n<li>Placeholders are matched by <b>position</b>, not by name, so keep the argument order the same as the template.</li>\n<li>Levels: Trace, Debug, Information, Warning, Error, Critical. Use Warning for \"unexpected but handled\", Error for failed operations, and avoid Information inside hot loops.</li>\n<li>Category = full type name of <code>T</code> in <code>ILogger&lt;T&gt;</code>; filter rules in <code>Logging:LogLevel</code> match by category prefix.</li>\n<li>Follow-up: \"How do you correlate logs across services?\" — use a correlation or trace ID (the framework adds scopes with trace information) and log it.</li>\n</ul>",
        hi: "<ul>\n<li><code>logger.LogInformation(\"Order {OrderId} shipped to {City}\", id, city)</code> से log tool <code>OrderId = 42</code> query कर सकता है; <code>$\"Order {id} shipped\"</code> सिर्फ़ text देता है।</li>\n<li>Placeholders <b>position</b> से match होते हैं, नाम से नहीं, इसलिए arguments का क्रम template जैसा रखो।</li>\n<li>Levels: Trace, Debug, Information, Warning, Error, Critical। Warning \"अनपेक्षित पर संभाला हुआ\" के लिए, Error फ़ेल हुए operations के लिए, और hot loops में Information से बचो।</li>\n<li>Category = <code>ILogger&lt;T&gt;</code> में <code>T</code> का पूरा type name; <code>Logging:LogLevel</code> के filter rules category prefix से match होते हैं।</li>\n<li>Follow-up: \"services के बीच logs कैसे जोड़ोगे?\" — correlation या trace ID use करो (framework trace जानकारी वाले scopes जोड़ता है) और उसे log करो।</li>\n</ul>",
        hg: "<ul>\n<li><code>logger.LogInformation(\"Order {OrderId} shipped to {City}\", id, city)</code> se log tool <code>OrderId = 42</code> query kar sakta hai; <code>$\"Order {id} shipped\"</code> sirf text deta hai.</li>\n<li>Placeholders <b>position</b> se match hote hain, naam se nahi, isliye arguments ka kram template jaisa rakho.</li>\n<li>Levels: Trace, Debug, Information, Warning, Error, Critical. Warning \"unexpected par sambhala hua\" ke liye, Error fail hue operations ke liye, aur hot loops mein Information se bacho.</li>\n<li>Category = <code>ILogger&lt;T&gt;</code> mein <code>T</code> ka poora type name; <code>Logging:LogLevel</code> ke filter rules category prefix se match hote hain.</li>\n<li>Follow-up: \"services ke beech logs kaise jodoge?\" — correlation ya trace ID use karo (framework trace jaankari wale scopes jodta hai) aur use log karo.</li>\n</ul>"
      }
    },
    {
      id: "loggermessage-generator",
      depth: "detailed",
      q: "What is the LoggerMessage source generator and when would you use it?",
      answer: "A [LoggerMessage] partial method makes the compiler generate efficient logging code, without boxing or template parsing on each call. I use it on hot paths and for named, numbered events.",
      meaning: {
        hi: "[LoggerMessage] वाला partial method compiler से efficient logging code बनवाता है, हर call पर boxing या template parsing के बिना। मैं इसे hot paths पर और named, numbered events के लिए use करता हूँ।",
        hg: "[LoggerMessage] wala partial method compiler se efficient logging code banwata hai, har call par boxing ya template parsing ke bina. Main ise hot paths par aur named, numbered events ke liye use karta hoon."
      },
      explain: {
        en: "<ul>\n<li>Available since .NET 6; you write the signature and the template, the generator writes the body. See the last code box of the logging section.</li>\n<li>Benefits: speed, compile-time check that template names match parameters, a fixed <code>EventId</code> and one place per message.</li>\n<li>Cost: more ceremony than a one-line <code>logger.LogInformation</code>; plain logging is fine for most code.</li>\n<li>Follow-up: \"Does it change where logs go?\" — no, it still calls <code>ILogger</code>, so providers and filters work the same.</li>\n</ul>",
        hi: "<ul>\n<li>.NET 6 से उपलब्ध; आप signature और template लिखते हो, generator body लिखता है। Logging section का आख़िरी code box देखो।</li>\n<li>फ़ायदे: speed, compile-time जाँच कि template के नाम parameters से मिलते हैं, तय <code>EventId</code> और हर message की एक जगह।</li>\n<li>क़ीमत: एक-line <code>logger.LogInformation</code> से ज़्यादा ceremony; ज़्यादातर code के लिए सादा logging ठीक है।</li>\n<li>Follow-up: \"क्या इससे logs की जगह बदलती है?\" — नहीं, यह फिर भी <code>ILogger</code> को call करता है, इसलिए providers और filters वैसे ही काम करते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>.NET 6 se uplabdh; aap signature aur template likhte ho, generator body likhta hai. Logging section ka aakhri code box dekho.</li>\n<li>Fayde: speed, compile-time jaanch ki template ke naam parameters se milte hain, tay <code>EventId</code> aur har message ki ek jagah.</li>\n<li>Keemat: ek-line <code>logger.LogInformation</code> se zyada ceremony; zyadatar code ke liye saada logging theek hai.</li>\n<li>Follow-up: \"kya isse logs ki jagah badalti hai?\" — nahi, yeh phir bhi <code>ILogger</code> ko call karta hai, isliye providers aur filters waise hi kaam karte hain.</li>\n</ul>"
      }
    },
    {
      id: "short-circuit",
      depth: "detailed",
      q: "What does short-circuiting mean in the pipeline, and when do you do it?",
      answer: "A middleware short-circuits by not calling next, so later middleware and the endpoint are skipped. Typical cases are static files, failed authorization, rate limiting and cached responses.",
      meaning: {
        hi: "Middleware next न बुलाकर short-circuit करता है, इसलिए बाद के middleware और endpoint skip हो जाते हैं। आम मामले: static files, failed authorization, rate limiting और cached responses।",
        hg: "Middleware next na bulakar short-circuit karta hai, isliye baad ke middleware aur endpoint skip ho jaate hain. Aam maamle: static files, failed authorization, rate limiting aur cached responses."
      },
      explain: {
        en: "<ul>\n<li>The middleware writes the response itself (status and body) and returns.</li>\n<li>Earlier middleware still unwinds: their code after <code>await next()</code> runs and can see the final status code (the \"after\" lines in puzzle 1 unwind the same way).</li>\n<li>Do not call <code>next</code> after you have written a response unless you know what the rest of the pipeline will do; the response may already have started.</li>\n<li>Follow-up: \"How is that different from throwing an exception?\" — a short-circuit is a planned, normal response; an exception travels back up to the exception handler.</li>\n</ul>",
        hi: "<ul>\n<li>Middleware ख़ुद response लिखता है (status और body) और return कर जाता है।</li>\n<li>पहले वाले middleware फिर भी लौटते हैं: उनका <code>await next()</code> के बाद का code चलता है और अंतिम status code देख सकता है (puzzle 1 की \"after\" lines भी ऐसे ही लौटती हैं)।</li>\n<li>Response लिखने के बाद <code>next</code> तब तक मत बुलाओ जब तक पता न हो कि बाक़ी pipeline क्या करेगी; response शुरू हो चुका हो सकता है।</li>\n<li>Follow-up: \"यह exception फेंकने से कैसे अलग है?\" — short-circuit सोचा-समझा, सामान्य response है; exception वापस ऊपर exception handler तक जाता है।</li>\n</ul>",
        hg: "<ul>\n<li>Middleware khud response likhta hai (status aur body) aur return kar jaata hai.</li>\n<li>Pehle wale middleware phir bhi lautte hain: unka <code>await next()</code> ke baad ka code chalta hai aur antim status code dekh sakta hai (puzzle 1 ki \"after\" lines bhi aise hi lautti hain).</li>\n<li>Response likhne ke baad <code>next</code> tab tak mat bulao jab tak pata na ho ki baaki pipeline kya karegi; response shuru ho chuka ho sakta hai.</li>\n<li>Follow-up: \"yeh exception phenkne se kaise alag hai?\" — short-circuit socha-samjha, saamanya response hai; exception wapas upar exception handler tak jaata hai.</li>\n</ul>"
      }
    },
    {
      id: "classic-bridge",
      depth: "detailed",
      q: "Coming from classic ASP.NET: how do Global.asax, HttpModules and Web.config map to ASP.NET Core?",
      answer: "Global.asax maps to Program.cs, HttpModules to middleware, and Web.config settings to appsettings.json plus environment variables. HttpHandlers map to endpoints.",
      meaning: {
        hi: "Global.asax Program.cs बन गया, HttpModules middleware बने, और Web.config settings appsettings.json व environment variables बनीं। HttpHandlers endpoints बने।",
        hg: "Global.asax Program.cs ban gaya, HttpModules middleware bane, aur Web.config settings appsettings.json va environment variables baneen. HttpHandlers endpoints bane."
      },
      explain: {
        en: "<ul>\n<li><code>Application_Start</code> work (registering routes, DI container) → <code>Program.cs</code>; per-request events (<code>BeginRequest</code>, <code>AuthenticateRequest</code>) → middleware order.</li>\n<li>Web.config transforms → <code>appsettings.{Environment}.json</code> and environment variables; <code>ConfigurationManager.AppSettings</code> → <code>IConfiguration</code> / Options.</li>\n<li>MVC action filters, controllers and model binding are very similar in ASP.NET Core MVC, so that part of your 6/10 carries over; ASP.NET Core also has no <code>System.Web</code> and is not tied to IIS.</li>\n<li>Follow-up: \"How would you migrate a big classic app?\" — move gradually (shared libraries first, then the web layer), since a rewrite in one step is risky; Microsoft documents incremental migration approaches.</li>\n</ul>",
        hi: "<ul>\n<li><code>Application_Start</code> का काम (routes register करना, DI container) → <code>Program.cs</code>; per-request events (<code>BeginRequest</code>, <code>AuthenticateRequest</code>) → middleware का order।</li>\n<li>Web.config transforms → <code>appsettings.{Environment}.json</code> और environment variables; <code>ConfigurationManager.AppSettings</code> → <code>IConfiguration</code> / Options।</li>\n<li>MVC action filters, controllers और model binding ASP.NET Core MVC में बहुत मिलते-जुलते हैं, इसलिए आपके 6/10 का वह हिस्सा काम आता है; ASP.NET Core में <code>System.Web</code> भी नहीं है और वह IIS से बँधा नहीं है।</li>\n<li>Follow-up: \"बड़ी classic app कैसे migrate करोगे?\" — धीरे-धीरे (पहले shared libraries, फिर web layer), क्योंकि एक बार में rewrite जोखिम भरा है; Microsoft incremental migration के तरीक़े documents में बताता है।</li>\n</ul>",
        hg: "<ul>\n<li><code>Application_Start</code> ka kaam (routes register karna, DI container) → <code>Program.cs</code>; per-request events (<code>BeginRequest</code>, <code>AuthenticateRequest</code>) → middleware ka order.</li>\n<li>Web.config transforms → <code>appsettings.{Environment}.json</code> aur environment variables; <code>ConfigurationManager.AppSettings</code> → <code>IConfiguration</code> / Options.</li>\n<li>MVC action filters, controllers aur model binding ASP.NET Core MVC mein bahut milte-julte hain, isliye aapke 6/10 ka woh hissa kaam aata hai; ASP.NET Core mein <code>System.Web</code> bhi nahi hai aur woh IIS se bandha nahi hai.</li>\n<li>Follow-up: \"badi classic app kaise migrate karoge?\" — dheere-dheere (pehle shared libraries, phir web layer), kyunki ek baar mein rewrite jokhim bhara hai; Microsoft incremental migration ke tareeke documents mein batata hai.</li>\n</ul>"
      }
    },
    {
      id: "net7-minimal-features",
      depth: "detailed",
      q: "What did .NET 7 add for Minimal APIs, and why do those features matter?",
      answer: "Route groups with MapGroup, endpoint filters for logic around handlers, and TypedResults for compile-time-checked responses. They let Minimal APIs share prefixes and cross-cutting code without controllers.",
      meaning: {
        hi: "MapGroup से route groups, handlers के आसपास logic के लिए endpoint filters, और compile-time checked responses के लिए TypedResults। इनसे Minimal APIs बिना controllers के prefixes और cross-cutting code साझा कर पाती हैं।",
        hg: "MapGroup se route groups, handlers ke aaspaas logic ke liye endpoint filters, aur compile-time checked responses ke liye TypedResults. Inse Minimal APIs bina controllers ke prefixes aur cross-cutting code saajha kar paati hain."
      },
      explain: {
        en: "<ul>\n<li><code>MapGroup(\"/v1\")</code>: one prefix, shared filters and metadata (for example <code>RequireAuthorization()</code> for the whole group).</li>\n<li>Endpoint filters: group filters run first, then the endpoint's own filters, then the handler (puzzle 6 prints this order).</li>\n<li><code>TypedResults.Ok(x)</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code>: the return type documents the possible responses and tests can check them without parsing HTTP.</li>\n<li>Follow-up: \"Where do validation and OpenAPI fit?\" — OpenAPI is covered in Day 13; validation can be an endpoint filter or a library you choose, with its trade-offs.</li>\n</ul>",
        hi: "<ul>\n<li><code>MapGroup(\"/v1\")</code>: एक prefix, साझा filters और metadata (जैसे पूरे group के लिए <code>RequireAuthorization()</code>)।</li>\n<li>Endpoint filters: group filters पहले चलते हैं, फिर endpoint के अपने filters, फिर handler (puzzle 6 यह order print करता है)।</li>\n<li><code>TypedResults.Ok(x)</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code>: return type संभव responses document करता है और tests HTTP parse किए बिना उन्हें जाँच सकते हैं।</li>\n<li>Follow-up: \"validation और OpenAPI कहाँ आते हैं?\" — OpenAPI Day 13 में है; validation endpoint filter या आपकी चुनी library हो सकती है, अपने trade-offs के साथ।</li>\n</ul>",
        hg: "<ul>\n<li><code>MapGroup(\"/v1\")</code>: ek prefix, saajhe filters aur metadata (jaise poore group ke liye <code>RequireAuthorization()</code>).</li>\n<li>Endpoint filters: group filters pehle chalte hain, phir endpoint ke apne filters, phir handler (puzzle 6 yeh order print karta hai).</li>\n<li><code>TypedResults.Ok(x)</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code>: return type sambhav responses document karta hai aur tests HTTP parse kiye bina unhe jaanch sakte hain.</li>\n<li>Follow-up: \"validation aur OpenAPI kahan aate hain?\" — OpenAPI Day 13 mein hai; validation endpoint filter ya aapki chuni library ho sakti hai, apne trade-offs ke saath.</li>\n</ul>"
      }
    },
    {
      id: "global-exceptions",
      depth: "detailed",
      q: "How do you handle exceptions globally in ASP.NET Core?",
      answer: "Put UseExceptionHandler first in the pipeline so it catches errors from later middleware, and log them. On .NET 8+ it can call IExceptionHandler implementations registered with AddExceptionHandler&lt;T&gt;.",
      meaning: {
        hi: "UseExceptionHandler को pipeline में सबसे पहले रखो ताकि वह बाद के middleware के errors पकड़े, और उन्हें log करो। .NET 8+ में वह AddExceptionHandler&lt;T&gt; से register हुए IExceptionHandler implementations को call कर सकता है।",
        hg: "UseExceptionHandler ko pipeline mein sabse pehle rakho taaki woh baad ke middleware ke errors pakde, aur unhe log karo. .NET 8+ mein woh AddExceptionHandler&lt;T&gt; se register hue IExceptionHandler implementations ko call kar sakta hai."
      },
      explain: {
        en: "<ul>\n<li>It sits first because middleware only catches exceptions thrown by components after it.</li>\n<li>In Development the developer exception page shows details; in other environments return a safe, generic response and keep the details in logs.</li>\n<li><code>IExceptionHandler</code> (.NET 8+) is called only by the exception-handler middleware: register it with <code>AddExceptionHandler&lt;T&gt;()</code> and still call <code>UseExceptionHandler()</code>; return <code>true</code> from <code>TryHandleAsync</code> when you handled the error. Registering the handler alone does nothing.</li>\n<li>MVC exception filters handle unhandled exceptions from controller creation, model binding, action filters and action methods, not from resource filters, result filters or result execution; the exception handler middleware covers the whole pipeline after it.</li>\n<li>Follow-up: \"What should the error response look like?\" — a consistent JSON shape; ProblemDetails is covered in Day 13.</li>\n<li>TL angle: one global handler plus logging with a trace ID beats try/catch blocks in every action.</li>\n</ul>",
        hi: "<ul>\n<li>यह सबसे पहले इसलिए आता है क्योंकि middleware सिर्फ़ अपने बाद के components के exceptions पकड़ता है।</li>\n<li>Development में developer exception page details दिखाता है; दूसरे environments में सुरक्षित, general response दो और details logs में रखो।</li>\n<li><code>IExceptionHandler</code> (.NET 8+) को सिर्फ़ exception-handler middleware बुलाता है: <code>AddExceptionHandler&lt;T&gt;()</code> से register करो और <code>UseExceptionHandler()</code> फिर भी बुलाओ; error संभाल लिया तो <code>TryHandleAsync</code> से <code>true</code> लौटाओ। सिर्फ़ handler register करने से कुछ नहीं होता।</li>\n<li>MVC exception filters controller बनने, model binding, action filters और action methods के unhandled exceptions संभालते हैं, resource filters, result filters या result execution के नहीं; exception handler middleware अपने बाद की पूरी pipeline को कवर करता है।</li>\n<li>Follow-up: \"error response कैसा दिखे?\" — एक जैसी JSON shape; ProblemDetails Day 13 में है।</li>\n<li>TL angle: एक global handler और trace ID के साथ logging, हर action में try/catch से बेहतर है।</li>\n</ul>",
        hg: "<ul>\n<li>Yeh sabse pehle isliye aata hai kyunki middleware sirf apne baad ke components ke exceptions pakadta hai.</li>\n<li>Development mein developer exception page details dikhata hai; doosre environments mein surakshit, general response do aur details logs mein rakho.</li>\n<li><code>IExceptionHandler</code> (.NET 8+) ko sirf exception-handler middleware bulata hai: <code>AddExceptionHandler&lt;T&gt;()</code> se register karo aur <code>UseExceptionHandler()</code> phir bhi bulao; error sambhal liya to <code>TryHandleAsync</code> se <code>true</code> lautao. Sirf handler register karne se kuch nahi hota.</li>\n<li>MVC exception filters controller banne, model binding, action filters aur action methods ke unhandled exceptions sambhalte hain, resource filters, result filters ya result execution ke nahi; exception handler middleware apne baad ki poori pipeline ko cover karta hai.</li>\n<li>Follow-up: \"error response kaisa dikhe?\" — ek jaisi JSON shape; ProblemDetails Day 13 mein hai.</li>\n<li>TL angle: ek global handler aur trace ID ke saath logging, har action mein try/catch se behtar hai.</li>\n</ul>"
      }
    },
    {
      id: "secrets-config",
      depth: "detailed",
      q: "Where do you keep secrets in an ASP.NET Core app?",
      answer: "Locally, user secrets, which live outside the repo but are not encrypted. In production, environment variables or a secret store such as Azure Key Vault, not appsettings.json in source control.",
      meaning: {
        hi: "Local में user secrets, जो repo के बाहर रहते हैं पर encrypted नहीं होते। Production में environment variables या Azure Key Vault जैसा secret store, source control वाला appsettings.json नहीं।",
        hg: "Local mein user secrets, jo repo ke bahar rehte hain par encrypted nahi hote. Production mein environment variables ya Azure Key Vault jaisa secret store, source control wala appsettings.json nahi."
      },
      explain: {
        en: "<ul>\n<li><code>dotnet user-secrets set</code> stores values in your user profile and the configuration system reads them in Development.</li>\n<li>Production options: environment variables (set by the host or orchestrator), or a vault provider added to the configuration system, so the app code still reads <code>IConfiguration</code>.</li>\n<li>Because later providers win, a secret in an environment variable overrides the same key in appsettings.json.</li>\n<li>Follow-up: \"What if a secret was committed by mistake?\" — rotate it; deleting it from the latest commit does not remove it from history.</li>\n</ul>",
        hi: "<ul>\n<li><code>dotnet user-secrets set</code> values को आपके user profile में रखता है और configuration system उन्हें Development में पढ़ता है।</li>\n<li>Production के विकल्प: environment variables (host या orchestrator set करता है), या configuration system में जुड़ा vault provider, ताकि app code फिर भी <code>IConfiguration</code> पढ़े।</li>\n<li>बाद वाले providers जीतते हैं, इसलिए environment variable में रखा secret appsettings.json की उसी key को override करता है।</li>\n<li>Follow-up: \"ग़लती से secret commit हो गया तो?\" — उसे rotate करो; आख़िरी commit से हटाने से वह history से नहीं हटता।</li>\n</ul>",
        hg: "<ul>\n<li><code>dotnet user-secrets set</code> values ko aapke user profile mein rakhta hai aur configuration system unhe Development mein padhta hai.</li>\n<li>Production ke vikalp: environment variables (host ya orchestrator set karta hai), ya configuration system mein juda vault provider, taaki app code phir bhi <code>IConfiguration</code> padhe.</li>\n<li>Baad wale providers jeette hain, isliye environment variable mein rakha secret appsettings.json ki usi key ko override karta hai.</li>\n<li>Follow-up: \"galti se secret commit ho gaya to?\" — use rotate karo; aakhri commit se hatane se woh history se nahi hatta.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "middleware-before-after-run",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\napp.Use(async (context, next) =>\n{\n    Console.WriteLine(\"A before\");\n    await next();\n    Console.WriteLine(\"A after\");\n});\napp.Use(async (context, next) =>\n{\n    Console.WriteLine(\"B before\");\n    await next();\n    Console.WriteLine(\"B after\");\n});\napp.Run(async context =>\n{\n    Console.WriteLine(\"terminal\");\n    await context.Response.WriteAsync(\"done\");\n});\napp.Use(async (context, next) =>\n{\n    Console.WriteLine(\"C runs\");\n    await next();\n});\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nConsole.WriteLine(\"client got: \" + await client.GetStringAsync(\"/\"));\nawait app.StopAsync();",
      answer: "A before\nB before\nterminal\nB after\nA after\nclient got: done",
      explain: {
        en: "<p>Each <code>Use</code> prints \"before\", calls <code>next</code>, then prints \"after\". So the request goes in as A, B, terminal, and the \"after\" lines come out in reverse: B, then A. <code>Run</code> is terminal: it writes the response and never calls <code>next</code>, so the middleware registered after it (\"C runs\") is never reached, even though it is in the file. The client gets \"done\" last because it waits for the whole pipeline. Interview point: order of registration = order going in, reverse order coming out.</p>",
        hi: "<p>हर <code>Use</code> \"before\" print करता है, <code>next</code> बुलाता है, फिर \"after\" print करता है। इसलिए request A, B, terminal के क्रम में अंदर जाती है और \"after\" lines उल्टे क्रम में निकलती हैं: पहले B, फिर A। <code>Run</code> terminal है: वह response लिखता है और <code>next</code> कभी नहीं बुलाता, इसलिए उसके बाद register हुआ middleware (\"C runs\") कभी नहीं पहुँचता, भले ही वह file में लिखा हो। Client को \"done\" सबसे आख़िर में मिलता है क्योंकि वह पूरी pipeline का इंतज़ार करता है। Interview point: registration का order = अंदर जाने का order, बाहर आने का उल्टा।</p>",
        hg: "<p>Har <code>Use</code> \"before\" print karta hai, <code>next</code> bulata hai, phir \"after\" print karta hai. Isliye request A, B, terminal ke kram mein andar jaati hai aur \"after\" lines ulte kram mein nikalti hain: pehle B, phir A. <code>Run</code> terminal hai: woh response likhta hai aur <code>next</code> kabhi nahi bulata, isliye uske baad register hua middleware (\"C runs\") kabhi nahi pahunchta, bhale hi woh file mein likha ho. Client ko \"done\" sabse aakhir mein milta hai kyunki woh poori pipeline ka intezaar karta hai. Interview point: registration ka order = andar jaane ka order, bahar aane ka ulta.</p>"
      }
    },
    {
      id: "middleware-activation-lifetime",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddTransient<FactoryMiddleware>();   // IMiddleware must be registered\nvar app = builder.Build();\n\napp.UseMiddleware<ConventionMiddleware>();\napp.UseMiddleware<FactoryMiddleware>();\napp.Run(context => context.Response.WriteAsync(\"ok\"));\n\nawait app.StartAsync();\nConsole.WriteLine(\"app started\");\nvar client = app.GetTestClient();\nfor (var i = 1; i <= 3; i++)\n{\n    Console.WriteLine(\"request \" + i);\n    await client.GetStringAsync(\"/\");\n}\nawait app.StopAsync();\n\nclass ConventionMiddleware\n{\n    private static int _created;\n    private readonly RequestDelegate _next;\n\n    public ConventionMiddleware(RequestDelegate next)\n    {\n        _next = next;\n        Console.WriteLine(\"convention ctor #\" + ++_created);\n    }\n\n    public Task InvokeAsync(HttpContext context)\n    {\n        Console.WriteLine(\"  convention invoke\");\n        return _next(context);\n    }\n}\n\nclass FactoryMiddleware : IMiddleware\n{\n    private static int _created;\n\n    public FactoryMiddleware() => Console.WriteLine(\"  factory ctor #\" + ++_created);\n\n    public Task InvokeAsync(HttpContext context, RequestDelegate next)\n    {\n        Console.WriteLine(\"  factory invoke\");\n        return next(context);\n    }\n}",
      answer: "convention ctor #1\napp started\nrequest 1\n  convention invoke\n  factory ctor #1\n  factory invoke\nrequest 2\n  convention invoke\n  factory ctor #2\n  factory invoke\nrequest 3\n  convention invoke\n  factory ctor #3\n  factory invoke",
      explain: {
        en: "<p>The <b>convention</b> middleware is instantiated once, when the pipeline is built at start-up (\"convention ctor #1\" appears before \"app started\"), and that single instance serves all three requests. That is why scoped services must not go in its constructor. The <code>IMiddleware</code> class is created by <code>IMiddlewareFactory</code> from the DI container on each request; because it is registered as transient, every request gets a new instance (#1, #2, #3). Its lifetime follows its registration: a singleton registration would be created once, and a scoped or transient one can safely take scoped services in the constructor.</p>",
        hi: "<p><b>Convention</b> middleware का instance एक बार बनता है, जब start-up पर pipeline बनती है (\"convention ctor #1\" \"app started\" से पहले आता है), और वही एक instance तीनों requests को serve करता है। इसीलिए scoped services को उसके constructor में नहीं डालना चाहिए। <code>IMiddleware</code> class को <code>IMiddlewareFactory</code> हर request पर DI container से बनाता है; क्योंकि वह transient register है, हर request को नया instance मिलता है (#1, #2, #3)। उसकी lifetime registration के हिसाब से चलती है: singleton registration एक बार बनेगी, और scoped या transient constructor में scoped services सुरक्षित रूप से ले सकती है।</p>",
        hg: "<p><b>Convention</b> middleware ka instance ek baar banta hai, jab start-up par pipeline banti hai (\"convention ctor #1\" \"app started\" se pehle aata hai), aur wahi ek instance teeno requests ko serve karta hai. Isiliye scoped services ko uske constructor mein nahi daalna chahiye. <code>IMiddleware</code> class ko <code>IMiddlewareFactory</code> har request par DI container se banata hai; kyunki woh transient register hai, har request ko naya instance milta hai (#1, #2, #3). Uski lifetime registration ke hisaab se chalti hai: singleton registration ek baar banegi, aur scoped ya transient constructor mein scoped services surakshit roop se le sakti hai.</p>"
      }
    },
    {
      id: "map-mapwhen-usewhen",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\napp.UseWhen(\n    context => context.Request.Path.StartsWithSegments(\"/api\"),\n    branch => branch.Use(async (context, next) =>\n    {\n        Console.WriteLine(\"  api-only middleware ran\");\n        await next();\n    }));\napp.Map(\"/admin\", branch => branch.Run(context =>\n    context.Response.WriteAsync($\"admin base={context.Request.PathBase} path={context.Request.Path}\")));\napp.MapWhen(\n    context => context.Request.Query.ContainsKey(\"debug\"),\n    branch => branch.Run(context => context.Response.WriteAsync(\"debug branch\")));\napp.Run(context => context.Response.WriteAsync(\"main \" + context.Request.Path));\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nforeach (var url in new[] { \"/api/ping\", \"/admin/users\", \"/home?debug=1\", \"/api/stats?debug=1\" })\n{\n    Console.WriteLine(url);\n    Console.WriteLine(\"  -> \" + await client.GetStringAsync(url));\n}\nawait app.StopAsync();",
      answer: "/api/ping\n  api-only middleware ran\n  -> main /api/ping\n/admin/users\n  -> admin base=/admin path=/users\n/home?debug=1\n  -> debug branch\n/api/stats?debug=1\n  api-only middleware ran\n  -> debug branch",
      explain: {
        en: "<p><b>/api/ping</b>: <code>UseWhen</code> matches, runs its middleware, then the request <b>rejoins</b> the main pipeline and reaches the final <code>Run</code> (\"main\"). <b>/admin/users</b>: <code>Map</code> branches away; the matched prefix moves to <code>PathBase</code> and the branch sees only <code>/users</code>. <b>/home?debug=1</b>: the <code>MapWhen</code> predicate is true, so the debug branch answers and never rejoins. <b>/api/stats?debug=1</b> shows the difference: <code>UseWhen</code> ran first (it is registered first and rejoins), then <code>MapWhen</code> took the request to its branch, so the main <code>Run</code> was skipped. The first matching branch decides, so branch order matters too.</p>",
        hi: "<p><b>/api/ping</b>: <code>UseWhen</code> match होता है, अपना middleware चलाता है, फिर request main pipeline में <b>वापस जुड़ती है</b> और आख़िरी <code>Run</code> (\"main\") तक पहुँचती है। <b>/admin/users</b>: <code>Map</code> अलग branch बनाता है; matched prefix <code>PathBase</code> में चला जाता है और branch को सिर्फ़ <code>/users</code> दिखता है। <b>/home?debug=1</b>: <code>MapWhen</code> का predicate true है, इसलिए debug branch जवाब देता है और वापस नहीं जुड़ता। <b>/api/stats?debug=1</b> फ़र्क़ दिखाता है: <code>UseWhen</code> पहले चला (वह पहले register है और वापस जुड़ता है), फिर <code>MapWhen</code> request को अपनी branch में ले गया, इसलिए main <code>Run</code> skip हो गया। पहला matching branch फ़ैसला करता है, इसलिए branches का order भी मायने रखता है।</p>",
        hg: "<p><b>/api/ping</b>: <code>UseWhen</code> match hota hai, apna middleware chalata hai, phir request main pipeline mein <b>wapas judti hai</b> aur aakhri <code>Run</code> (\"main\") tak pahunchti hai. <b>/admin/users</b>: <code>Map</code> alag branch banata hai; matched prefix <code>PathBase</code> mein chala jaata hai aur branch ko sirf <code>/users</code> dikhta hai. <b>/home?debug=1</b>: <code>MapWhen</code> ka predicate true hai, isliye debug branch jawab deta hai aur wapas nahi judta. <b>/api/stats?debug=1</b> fark dikhata hai: <code>UseWhen</code> pehle chala (woh pehle register hai aur wapas judta hai), phir <code>MapWhen</code> request ko apni branch mein le gaya, isliye main <code>Run</code> skip ho gaya. Pehla matching branch faisla karta hai, isliye branches ka order bhi matter karta hai.</p>"
      }
    },
    {
      id: "config-last-source-wins",
      frameworks: [
        "aspnetcore"
      ],
      src: "using Microsoft.Extensions.Configuration;\n\nEnvironment.SetEnvironmentVariable(\"SHOP_Mode\", \"env\");\nEnvironment.SetEnvironmentVariable(\"SHOP_Db__Host\", \"env-host\");\n\nvar defaults = new Dictionary<string, string?>\n{\n    [\"Mode\"] = \"defaults\",\n    [\"Color\"] = \"blue\",\n    [\"Db:Host\"] = \"localhost\",\n    [\"Db:Port\"] = \"5432\"\n};\nvar cliArgs = new[] { \"--Mode=cli\", \"--color=red\" };\n\nvar a = new ConfigurationBuilder()\n    .AddInMemoryCollection(defaults)\n    .AddEnvironmentVariables(\"SHOP_\")\n    .AddCommandLine(cliArgs)\n    .Build();\nConsole.WriteLine($\"A: {a[\"Mode\"]} {a[\"Color\"]} {a[\"Db:Host\"]} {a[\"Db:Port\"]}\");\n\nvar b = new ConfigurationBuilder()\n    .AddCommandLine(cliArgs)\n    .AddEnvironmentVariables(\"SHOP_\")\n    .AddInMemoryCollection(defaults)\n    .Build();\nConsole.WriteLine($\"B: {b[\"Mode\"]} {b[\"Color\"]} {b.GetSection(\"Db\")[\"Host\"]} {b[\"Missing\"] ?? \"null\"}\");",
      answer: "A: cli red env-host 5432\nB: defaults blue localhost null",
      explain: {
        en: "<p>Sources added <b>later override earlier ones</b>. Builder A: in-memory defaults, then environment variables (prefix <code>SHOP_</code> is stripped; <code>Db__Host</code> becomes <code>Db:Host</code>), then the command line. So <code>Mode</code> is \"cli\" (it beats \"env\" and \"defaults\"); <code>--color=red</code> replaces <code>Color</code> because keys are case-insensitive; <code>Db:Host</code> comes from the environment; <code>Db:Port</code> exists only in the defaults. Builder B adds the same sources in the opposite order, so the in-memory defaults are added last and win everywhere; a key nobody set is just <code>null</code>. This is why the real defaults put command line and environment variables last. The default web host does the same with appsettings files first.</p>",
        hi: "<p><b>बाद में जोड़े गए sources पहले वालों को override करते हैं</b>। Builder A: in-memory defaults, फिर environment variables (prefix <code>SHOP_</code> हट जाता है; <code>Db__Host</code> बनता है <code>Db:Host</code>), फिर command line। इसलिए <code>Mode</code> \"cli\" है (वह \"env\" और \"defaults\" दोनों को हराता है); <code>--color=red</code> <code>Color</code> को बदल देता है क्योंकि keys case-insensitive हैं; <code>Db:Host</code> environment से आता है; <code>Db:Port</code> सिर्फ़ defaults में है। Builder B वही sources उल्टे क्रम में जोड़ता है, इसलिए in-memory defaults आख़िर में जुड़ते हैं और हर जगह जीतते हैं; जो key किसी ने set नहीं की वह बस <code>null</code> है। इसीलिए असली defaults में command line और environment variables आख़िर में रखे जाते हैं। Default web host भी यही करता है, appsettings files सबसे पहले।</p>",
        hg: "<p><b>Baad mein jode gaye sources pehle walon ko override karte hain</b>. Builder A: in-memory defaults, phir environment variables (prefix <code>SHOP_</code> hat jaata hai; <code>Db__Host</code> banta hai <code>Db:Host</code>), phir command line. Isliye <code>Mode</code> \"cli\" hai (woh \"env\" aur \"defaults\" dono ko haraata hai); <code>--color=red</code> <code>Color</code> ko badal deta hai kyunki keys case-insensitive hain; <code>Db:Host</code> environment se aata hai; <code>Db:Port</code> sirf defaults mein hai. Builder B wahi sources ulte kram mein jodta hai, isliye in-memory defaults aakhir mein judte hain aur har jagah jeette hain; jo key kisi ne set nahi ki woh bas <code>null</code> hai. Isiliye asli defaults mein command line aur environment variables aakhir mein rakhe jaate hain. Default web host bhi yahi karta hai, appsettings files sabse pehle.</p>"
      }
    },
    {
      id: "filter-order-controller",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.AspNetCore.Mvc.Filters;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddControllers(options =>\n{\n    options.Filters.Add(new AuthStep());\n    options.Filters.Add(new ActionStep(\"global\"));\n});\nvar app = builder.Build();\napp.MapControllers();\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nConsole.WriteLine(\"client got: \" + await client.GetStringAsync(\"/demo\"));\nawait app.StopAsync();\n\n[Route(\"demo\")]\n[ResourceStep]\npublic class DemoController : ControllerBase\n{\n    [HttpGet]\n    [ActionStep(\"action\")]\n    [ResultStep]\n    public IActionResult Get()\n    {\n        Console.WriteLine(\"action body\");\n        return Ok(\"hi\");\n    }\n}\n\nclass AuthStep : IAuthorizationFilter\n{\n    public void OnAuthorization(AuthorizationFilterContext context) => Console.WriteLine(\"authorization\");\n}\n\nclass ResourceStep : Attribute, IResourceFilter\n{\n    public void OnResourceExecuting(ResourceExecutingContext context) => Console.WriteLine(\"resource before\");\n    public void OnResourceExecuted(ResourceExecutedContext context) => Console.WriteLine(\"resource after\");\n}\n\nclass ActionStep(string name) : Attribute, IActionFilter\n{\n    public void OnActionExecuting(ActionExecutingContext context) => Console.WriteLine($\"action filter {name} before\");\n    public void OnActionExecuted(ActionExecutedContext context) => Console.WriteLine($\"action filter {name} after\");\n}\n\nclass ResultStep : Attribute, IResultFilter\n{\n    public void OnResultExecuting(ResultExecutingContext context) => Console.WriteLine(\"result before\");\n    public void OnResultExecuted(ResultExecutedContext context) => Console.WriteLine(\"result after\");\n}",
      answer: "authorization\nresource before\naction filter global before\naction filter action before\naction body\naction filter action after\naction filter global after\nresult before\nresult after\nresource after\nclient got: hi",
      explain: {
        en: "<p>The order is the filter pipeline in action. <b>Authorization</b> first. Then the <b>resource</b> filter on the controller (it wraps everything after it, so its \"after\" line comes last). Then model binding and the <b>action filters</b>: global first, then the action-level one; after the method runs they unwind in reverse (action, then global). Then the <b>result</b> filter around the result execution, and finally the resource filter's \"after\". Nothing here is an exception filter because nothing throws. The filter instances added with <code>options.Filters.Add</code> are global; attributes sit on the controller or action.</p>",
        hi: "<p>यह filter pipeline का असली काम है। सबसे पहले <b>authorization</b>। फिर controller का <b>resource</b> filter (वह उसके बाद की हर चीज़ को लपेटता है, इसलिए उसकी \"after\" line सबसे आख़िर में आती है)। फिर model binding और <b>action filters</b>: पहले global, फिर action-level; method चलने के बाद वे उल्टे क्रम में खुलते हैं (action, फिर global)। फिर result execution के आसपास <b>result</b> filter, और आख़िर में resource filter का \"after\"। यहाँ कोई exception filter नहीं है क्योंकि कुछ throw नहीं होता। <code>options.Filters.Add</code> से जोड़े गए filter instances global हैं; attributes controller या action पर लगते हैं।</p>",
        hg: "<p>Yeh filter pipeline ka asli kaam hai. Sabse pehle <b>authorization</b>. Phir controller ka <b>resource</b> filter (woh uske baad ki har cheez ko lapetata hai, isliye uski \"after\" line sabse aakhir mein aati hai). Phir model binding aur <b>action filters</b>: pehle global, phir action-level; method chalne ke baad woh ulte kram mein khulte hain (action, phir global). Phir result execution ke aaspaas <b>result</b> filter, aur aakhir mein resource filter ka \"after\". Yahan koi exception filter nahi hai kyunki kuch throw nahi hota. <code>options.Filters.Add</code> se jode gaye filter instances global hain; attributes controller ya action par lagte hain.</p>"
      }
    },
    {
      id: "endpoint-filter-order",
      frameworks: [
        "aspnetcore"
      ],
      packages: [
        "Microsoft.AspNetCore.TestHost"
      ],
      src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\nvar v1 = app.MapGroup(\"/v1\");\nv1.AddEndpointFilter(async (context, next) =>\n{\n    Console.WriteLine(\"group filter in\");\n    var result = await next(context);\n    Console.WriteLine(\"group filter out\");\n    return result;\n});\nv1.MapGet(\"/ping\", () =>\n    {\n        Console.WriteLine(\"handler\");\n        return \"pong\";\n    })\n    .AddEndpointFilter(async (context, next) =>\n    {\n        Console.WriteLine(\"endpoint filter in\");\n        var result = await next(context);\n        Console.WriteLine(\"endpoint filter out\");\n        return result;\n    });\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nConsole.WriteLine(\"client got: \" + await client.GetStringAsync(\"/v1/ping\"));\nawait app.StopAsync();",
      answer: "group filter in\nendpoint filter in\nhandler\nendpoint filter out\ngroup filter out\nclient got: pong",
      explain: {
        en: "<p>Endpoint filters wrap the handler like onion layers. The <b>group</b> filter is outermost, then the endpoint's own filter, then the handler. On the way back out, they unwind in reverse: endpoint filter \"out\", then group filter \"out\". The handler's return value (\"pong\") travels back through both filters and reaches the client. This is the Minimal API counterpart of the MVC action filters in the previous puzzle, but with no separate authorization/resource/result stages: endpoint filters have one kind. Filters registered on the group apply to every endpoint in it, so shared rules live in one place.</p>",
        hi: "<p>Endpoint filters handler को प्याज़ की परतों की तरह लपेटते हैं। <b>Group</b> filter सबसे बाहरी है, फिर endpoint का अपना filter, फिर handler। वापस आते समय वे उल्टे क्रम में खुलते हैं: endpoint filter \"out\", फिर group filter \"out\"। Handler की return value (\"pong\") दोनों filters से होकर client तक पहुँचती है। यह पिछले puzzle के MVC action filters का Minimal API रूप है, पर अलग authorization/resource/result stages नहीं हैं: endpoint filters एक ही तरह के होते हैं। Group पर register हुए filters उसके हर endpoint पर लगते हैं, इसलिए साझा rules एक जगह रहते हैं।</p>",
        hg: "<p>Endpoint filters handler ko pyaaz ki parton ki tarah lapetate hain. <b>Group</b> filter sabse bahari hai, phir endpoint ka apna filter, phir handler. Wapas aate samay woh ulte kram mein khulte hain: endpoint filter \"out\", phir group filter \"out\". Handler ki return value (\"pong\") dono filters se hokar client tak pahunchti hai. Yeh pichhle puzzle ke MVC action filters ka Minimal API roop hai, par alag authorization/resource/result stages nahi hain: endpoint filters ek hi tarah ke hote hain. Group par register hue filters uske har endpoint par lagte hain, isliye saajhe rules ek jagah rehte hain.</p>"
      }
    }
  ],
  revision: {
    en: [
      "Program.cs flow: <code>CreateBuilder</code>, register services, <code>Build</code>, add middleware and endpoints, <code>Run</code>.",
      "Code before <code>await next()</code> runs in order, code after it runs in reverse; the order of the calls is the pipeline order.",
      "Short-circuit = write the response and return without <code>next()</code>; <code>UseWhen</code> applies a middleware to some requests only.",
      "Configuration is layered and the last provider wins: appsettings, environment file, user secrets, environment variables, command line.",
      "The environment comes from <code>ASPNETCORE_ENVIRONMENT</code> and defaults to Production; show error detail only in Development.",
      "Log with <code>ILogger&lt;T&gt;</code> and message templates, not interpolation; pass an exception as the first argument.",
      "An action filter sees the action arguments and short-circuits by setting <code>context.Result</code>; MVC order: authorization, resource, action, result.",
      "Minimal APIs and controllers share one pipeline, routing and DI; choose by structure and team size.",
      "UseAuthentication sets HttpContext.User and calls next; the authorization step answers 401 or 403.",
      "A convention middleware is created once, so take scoped services as InvokeAsync parameters.",
      "Middleware sees every request; filters run only inside MVC and know the action."
    ],
    meaning: {
      hi: [
        "Program.cs का क्रम: CreateBuilder, services register, Build, middleware और endpoints, Run",
        "await next() से पहले का code क्रम से चलता है, बाद का उल्टे क्रम में; calls का क्रम ही pipeline का क्रम है",
        "Short-circuit = response लिखो और next() के बिना लौटो; UseWhen middleware को कुछ ही requests पर लगाता है",
        "Configuration परतों में है और आख़िरी provider जीतता है: appsettings, environment file, user secrets, environment variables, command line",
        "Environment ASPNETCORE_ENVIRONMENT से आता है और default Production है; error का detail सिर्फ़ Development में दिखाओ",
        "ILogger&lt;T&gt; और message templates से log करो, interpolation से नहीं; exception पहले argument में दो",
        "Action filter action के arguments देखता है और context.Result set करके रोकता है; MVC क्रम: authorization, resource, action, result",
        "Minimal APIs और controllers की pipeline, routing और DI एक है; ढाँचे और team के आकार से चुनो",
        "UseAuthentication HttpContext.User set करके next बुलाता है; authorization step 401 या 403 देता है।",
        "Convention middleware एक बार बनता है, इसलिए scoped services को InvokeAsync के parameters में लो।",
        "Middleware हर request देखता है; filters सिर्फ़ MVC के अंदर चलते हैं और action को जानते हैं।"
      ],
      hg: [
        "Program.cs ka kram: CreateBuilder, services register, Build, middleware aur endpoints, Run",
        "await next() se pehle ka code kram se chalta hai, baad ka ulte kram mein; calls ka kram hi pipeline ka kram hai",
        "Short-circuit = response likho aur next() ke bina lauto; UseWhen middleware ko kuch hi requests par lagata hai",
        "Configuration parton mein hai aur aakhiri provider jeetta hai: appsettings, environment file, user secrets, environment variables, command line",
        "Environment ASPNETCORE_ENVIRONMENT se aata hai aur default Production hai; error ka detail sirf Development mein dikhao",
        "ILogger&lt;T&gt; aur message templates se log karo, interpolation se nahi; exception pehle argument mein do",
        "Action filter action ke arguments dekhta hai aur context.Result set karke rokta hai; MVC kram: authorization, resource, action, result",
        "Minimal APIs aur controllers ki pipeline, routing aur DI ek hai; dhaanche aur team ke aakaar se chuno",
        "UseAuthentication HttpContext.User set karke next bulata hai; authorization step 401 ya 403 deta hai.",
        "Convention middleware ek baar banta hai, isliye scoped services ko InvokeAsync ke parameters mein lo.",
        "Middleware har request dekhta hai; filters sirf MVC ke andar chalte hain aur action ko jaante hain."
      ]
    }
  }
};
