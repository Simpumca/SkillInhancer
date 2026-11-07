// Day 22 — Legacy ASP.NET refresher and migration, in lesson format (format: "lesson"). Browser script: assigns window.TL_DAY.
window.TL_DAY = {
  day: 22,
  format: "lesson",
  title: {
    en: "Legacy ASP.NET refresher and migration — Web Forms, MVC 5, System.Web pipeline, web.config, .NET Framework to modern .NET",
    hi: "Legacy ASP.NET refresher और migration — Web Forms, MVC 5, System.Web pipeline, web.config, .NET Framework से modern .NET",
    hg: "Legacy ASP.NET refresher aur migration — Web Forms, MVC 5, System.Web pipeline, web.config, .NET Framework se modern .NET"
  },
  summary: {
    en: "<p>Day 22 moves a legacy <b>customer-care CRM</b> from <b>.NET Framework</b> to ASP.NET Core in 7 short lessons. Each shows the old code as a snippet and runs the Core version: endpoints, controllers, middleware, configuration, passing the user in, and strangler-fig routing.</p>",
    hi: "<p>Day 22 में एक पुराने <b>customer-care CRM</b> को <b>.NET Framework</b> से ASP.NET Core में 7 छोटे पाठों में ले जाते हैं। हर पाठ पुराना code snippet में दिखाता है और Core वाला version चलाता है: endpoints, controllers, middleware, configuration, user को parameter से देना, और strangler-fig routing।</p>",
    hg: "<p>Day 22 mein ek purane <b>customer-care CRM</b> ko <b>.NET Framework</b> se ASP.NET Core mein 7 chhote lessons mein le jaate hain. Har lesson purana code snippet mein dikhata hai aur Core wala version chalata hai: endpoints, controllers, middleware, configuration, user ko parameter se dena, aur strangler-fig routing.</p>"
  },
  sections: [
    {
      id: "three-generations",
      depth: "short",
      title: {
        en: "Three generations: Web Forms, MVC 5, ASP.NET Core",
        hi: "तीन पीढ़ियाँ: Web Forms, MVC 5, ASP.NET Core",
        hg: "Teen generations: Web Forms, MVC 5, ASP.NET Core"
      },
      lesson: {
        buildsOn: {
          en: "Day 12 built an ASP.NET Core app and Day 13 a Web API on it. Today you meet the older apps you may have to move there, starting with where each generation keeps state.",
          hi: "Day 12 में ASP.NET Core app बनी और Day 13 में उस पर Web API। आज उन पुरानी apps से मिलो जिन्हें वहाँ ले जाना पड़ सकता है, शुरुआत इससे कि हर पीढ़ी state कहाँ रखती है।",
          hg: "Day 12 mein ASP.NET Core app bani aur Day 13 mein us par Web API. Aaj un purani apps se milo jinhein wahan le jaana pad sakta hai, shuruaat isse ki har generation state kahan rakhti hai."
        },
        what: {
          en: "<p>ASP.NET came in three generations. <b>Web Forms</b>: <code>.aspx</code> pages with server controls and events, like desktop WinForms on the web. <b>MVC 5</b>: controllers and Razor views, but still on <code>System.Web</code> and IIS. <b>ASP.NET Core</b>: no <code>System.Web</code>, small host, middleware, runs on Windows, Linux and containers.</p><p>Web Forms and MVC 5 run on <b>.NET Framework</b> (4.8.1 is the last version). Core runs on modern .NET.</p>",
          hi: "<p>ASP.NET की तीन पीढ़ियाँ आईं। <b>Web Forms</b>: <code>.aspx</code> pages, server controls और events — web पर desktop WinForms जैसा। <b>MVC 5</b>: controllers और Razor views, पर अब भी <code>System.Web</code> और IIS पर। <b>ASP.NET Core</b>: <code>System.Web</code> नहीं, छोटा host, middleware, Windows, Linux और containers पर चलता है।</p><p>Web Forms और MVC 5 <b>.NET Framework</b> पर चलते हैं (4.8.1 आख़िरी version है)। Core modern .NET पर चलता है।</p>",
          hg: "<p>ASP.NET ki teen generations aayin. <b>Web Forms</b>: <code>.aspx</code> pages, server controls aur events — web par desktop WinForms jaisa. <b>MVC 5</b>: controllers aur Razor views, par ab bhi <code>System.Web</code> aur IIS par. <b>ASP.NET Core</b>: <code>System.Web</code> nahi, chhota host, middleware, Windows, Linux aur containers par chalta hai.</p><p>Web Forms aur MVC 5 <b>.NET Framework</b> par chalte hain (4.8.1 aakhri version hai). Core modern .NET par chalta hai.</p>"
        },
        why: {
          en: "<p>Many real CRMs are still Web Forms or MVC 5. You will read, support and plan the move of such code. There is <b>no Web Forms in ASP.NET Core</b> and no ViewState, so a page cannot simply be \"upgraded\": it is rebuilt (Razor Pages, Blazor) or kept running in the old app until its turn.</p>",
          hi: "<p>बहुत-से असली CRM अब भी Web Forms या MVC 5 में हैं। ऐसे code को आप पढ़ेंगे, चलाएँगे और उसकी migration plan करेंगे। ASP.NET Core में <b>Web Forms है ही नहीं</b> और ViewState भी नहीं, इसलिए page को सीधे \"upgrade\" नहीं कर सकते: उसे दोबारा बनाना पड़ता है (Razor Pages, Blazor) या अपनी बारी आने तक पुरानी app में चलने देना पड़ता है।</p>",
          hg: "<p>Bahut-se asli CRM ab bhi Web Forms ya MVC 5 mein hain. Aise code ko aap padhenge, chalayenge aur uski migration plan karenge. ASP.NET Core mein <b>Web Forms hai hi nahi</b> aur ViewState bhi nahi, isliye page ko seedhe \"upgrade\" nahi kar sakte: use dobara banana padta hai (Razor Pages, Blazor) ya apni baari aane tak purani app mein chalne dena padta hai.</p>"
        },
        analogy: {
          en: "<p>A railway reservation counter. In <b>Web Forms</b> the clerk hands your half-filled form back to you on every visit (that is ViewState). In <b>MVC 5</b> and <b>Core</b> you carry nothing: the office keeps a register (the database) and looks you up each time.</p>",
          hi: "<p>रेलवे reservation counter। <b>Web Forms</b> में clerk हर बार आपका अधूरा भरा form आपको वापस थमा देता है (यही ViewState है)। <b>MVC 5</b> और <b>Core</b> में आप कुछ साथ नहीं रखते: दफ़्तर के पास register (database) है और वह हर बार आपको ढूँढ लेता है।</p>",
          hg: "<p>Railway reservation counter. <b>Web Forms</b> mein clerk har baar aapka adhura bhara form aapko wapas thama deta hai (yahi ViewState hai). <b>MVC 5</b> aur <b>Core</b> mein aap kuch saath nahi rakhte: daftar ke paas register (database) hai aur woh har baar aapko dhoondh leta hai.</p>"
        },
        focus: {
          caption: {
            en: "Web Forms: a button click handled on the page (.NET Framework, not compiled here)",
            hi: "Web Forms: page पर button click का handler (.NET Framework, यहाँ compile नहीं होता)",
            hg: "Web Forms: page par button click ka handler (.NET Framework, yahan compile nahi hota)"
          },
          src: "// Tickets.aspx.cs — .NET Framework, System.Web. Not compiled here.\n// Tickets.aspx: <asp:Button ID=\"CloseButton\" runat=\"server\" Text=\"Close\" OnClick=\"CloseButton_Click\" />\nprotected void CloseButton_Click(object sender, EventArgs e)\n{\n    new TicketService().Close(int.Parse(TicketIdBox.Text));   // control event on a server page\n    BindGrid();                                               // the page re-renders itself\n}",
          check: "none"
        },
        lines: [
          {
            code: "var builder = WebApplication.CreateBuilder();",
            note: {
              en: "Program.cs does what <code>Global.asax</code> <code>Application_Start</code> did: one place to set up services and the pipeline (Day 12).",
              hi: "Program.cs वही करती है जो <code>Global.asax</code> का <code>Application_Start</code> करता था: services और pipeline set करने की एक ही जगह (Day 12)।",
              hg: "Program.cs wahi karti hai jo <code>Global.asax</code> ka <code>Application_Start</code> karta tha: services aur pipeline set karne ki ek hi jagah (Day 12)."
            }
          },
          {
            code: "builder.Services.AddSingleton<TicketStore>();",
            note: {
              en: "State lives in a service (here in memory, in a real CRM a database), not in a hidden page field.",
              hi: "State एक service में रहती है (यहाँ memory में, असली CRM में database में), page के छिपे field में नहीं।",
              hg: "State ek service mein rehti hai (yahan memory mein, asli CRM mein database mein), page ke chhupe field mein nahi."
            }
          },
          {
            code: "app.MapGet(\"/tickets\", (TicketStore store) => Results.Ok(store.Open()));",
            note: {
              en: "An endpoint is just a function. The framework passes the service in, and the result goes out as JSON. No page, no control tree.",
              hi: "Endpoint बस एक function है। Framework service को अंदर देता है और result JSON बनकर बाहर जाता है। न page, न control tree।",
              hg: "Endpoint bas ek function hai. Framework service ko andar deta hai aur result JSON bankar bahar jaata hai. Na page, na control tree."
            }
          },
          {
            code: "Console.WriteLine(await client.GetStringAsync(\"/tickets\"));",
            note: {
              en: "The second GET shows only 502. The server holds the data; every request just loads it fresh.",
              hi: "दूसरे GET में सिर्फ़ 502 दिखता है। Data server के पास है; हर request उसे नए सिरे से लोड करती है।",
              hg: "Doosre GET mein sirf 502 dikhta hai. Data server ke paas hai; har request use naye sire se load karti hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Planning to \"upgrade\" <code>.aspx</code> pages in place. Web Forms does not exist in ASP.NET Core; pages must be rebuilt or stay in the old app.</li><li>Thinking MVC 5 is \"almost Core\", so migration is copy-paste. MVC 5 sits on <code>System.Web</code> and IIS: the controller idea carries over, base classes, filters and <code>HttpContext</code> do not.</li></ul>",
          hi: "<ul><li><code>.aspx</code> pages को वहीं का वहीं \"upgrade\" करने की योजना बनाना। ASP.NET Core में Web Forms नहीं है; pages दोबारा बनाने पड़ेंगे या पुरानी app में रहेंगे।</li><li>यह सोचना कि MVC 5 \"लगभग Core\" है, तो migration copy-paste है। MVC 5 <code>System.Web</code> और IIS पर है: controller का idea आगे आता है, पर base classes, filters और <code>HttpContext</code> नहीं।</li></ul>",
          hg: "<ul><li><code>.aspx</code> pages ko wahin ka wahin \"upgrade\" karne ki yojana banana. ASP.NET Core mein Web Forms nahi hai; pages dobara banane padenge ya purani app mein rahenge.</li><li>Ye sochna ki MVC 5 \"lagbhag Core\" hai, to migration copy-paste hai. MVC 5 <code>System.Web</code> aur IIS par hai: controller ka idea aage aata hai, par base classes, filters aur <code>HttpContext</code> nahi.</li></ul>"
        },
        whenToUse: {
          en: "<p>All new work goes to ASP.NET Core. A stable, rarely changed legacy app can keep running; migrate it when there is a reason: security, hosting cost, new features, hiring.</p>",
          hi: "<p>सारा नया काम ASP.NET Core में। जो पुरानी app stable है और कम बदलती है, उसे चलने दो; migration तब करो जब कोई वजह हो: security, hosting का ख़र्चा, नए features, hiring।</p>",
          hg: "<p>Saara naya kaam ASP.NET Core mein. Jo purani app stable hai aur kam badalti hai, use chalne do; migration tab karo jab koi wajah ho: security, hosting ka kharcha, naye features, hiring.</p>"
        },
        exercise: {
          task: {
            en: "<p>Try to close a ticket that does not exist, <code>999</code>, and print the status code.</p>",
            hi: "<p>ऐसा ticket बंद करने की कोशिश करो जो है ही नहीं, <code>999</code>, और status code print करो।</p>",
            hg: "<p>Aisa ticket band karne ki koshish karo jo hai hi nahi, <code>999</code>, aur status code print karo.</p>"
          },
          hint: {
            en: "<p>POST to <code>/tickets/999/close</code>. <code>Close</code> returns <code>false</code> for an unknown id.</p>",
            hi: "<p><code>/tickets/999/close</code> पर POST करो। अनजान id पर <code>Close</code> <code>false</code> लौटाता है।</p>",
            hg: "<p><code>/tickets/999/close</code> par POST karo. Anjaan id par <code>Close</code> <code>false</code> lautaata hai.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            caption: {
              en: "Solution: closing an unknown ticket",
              hi: "हल: अनजान ticket बंद करना",
              hg: "Solution: anjaan ticket band karna"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddSingleton<TicketStore>();\nvar app = builder.Build();\n\n// No Global.asax, no System.Web: just endpoints. Every request is independent.\napp.MapGet(\"/tickets\", (TicketStore store) => Results.Ok(store.Open()));\napp.MapPost(\"/tickets/{id:int}/close\", (int id, TicketStore store) =>\n    store.Close(id) ? Results.NoContent() : Results.NotFound());\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nvar missing = await client.PostAsync(\"/tickets/999/close\", null);\nConsole.WriteLine((int)missing.StatusCode);\nawait app.StopAsync();\n\npublic class TicketStore\n{\n    private readonly Dictionary<int, string> _open = new() { [501] = \"Asha\", [502] = \"Ravi\" };\n\n    public IEnumerable<string> Open() => _open.Select(t => $\"{t.Key} {t.Value}\");\n    public bool Close(int id) => _open.Remove(id);\n}",
            check: "run",
            expected: "404"
          }
        },
        quiz: {
          q: {
            en: "What is true about Web Forms and ASP.NET Core?",
            hi: "Web Forms और ASP.NET Core के बारे में क्या सही है?",
            hg: "Web Forms aur ASP.NET Core ke baare mein kya sahi hai?"
          },
          options: [
            {
              en: "Web Forms pages run unchanged on ASP.NET Core if you change the target framework",
              hi: "Target framework बदलने से Web Forms pages ASP.NET Core पर वैसे ही चलते हैं",
              hg: "Target framework badalne se Web Forms pages ASP.NET Core par waise hi chalte hain"
            },
            {
              en: "There is no Web Forms in ASP.NET Core: pages are rebuilt (Razor Pages, Blazor) or kept in the old app",
              hi: "ASP.NET Core में Web Forms नहीं है: pages दोबारा बनते हैं (Razor Pages, Blazor) या पुरानी app में रहते हैं",
              hg: "ASP.NET Core mein Web Forms nahi hai: pages dobara bante hain (Razor Pages, Blazor) ya purani app mein rehte hain"
            },
            {
              en: "ASP.NET Core keeps ViewState but stores it on the server",
              hi: "ASP.NET Core ViewState रखता है, पर server पर",
              hg: "ASP.NET Core ViewState rakhta hai, par server par"
            },
            {
              en: "MVC 5 is the same as ASP.NET Core, only with a different name",
              hi: "MVC 5 और ASP.NET Core एक ही हैं, बस नाम अलग है",
              hg: "MVC 5 aur ASP.NET Core ek hi hain, bas naam alag hai"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>The server-control model (pages, postback, ViewState) was dropped in Core. MVC 5 is also not Core: it still depends on <code>System.Web</code>.</p>",
            hi: "<p>Server-control model (pages, postback, ViewState) Core में हटा दिया गया। MVC 5 भी Core नहीं है: वह अब भी <code>System.Web</code> पर टिका है।</p>",
            hg: "<p>Server-control model (pages, postback, ViewState) Core mein hata diya gaya. MVC 5 bhi Core nahi hai: woh ab bhi <code>System.Web</code> par tika hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Web Forms = page and events; MVC 5 = controllers on System.Web; Core = middleware and endpoints, no System.Web.</li><li>No Web Forms and no ViewState in Core: rebuild or keep in the old app.</li><li>Migrate for a reason, not because the app is old.</li></ul>",
          hi: "<ul><li>Web Forms = page और events; MVC 5 = System.Web पर controllers; Core = middleware और endpoints, System.Web नहीं।</li><li>Core में Web Forms और ViewState नहीं: दोबारा बनाओ या पुरानी app में रखो।</li><li>Migration किसी वजह से करो, इसलिए नहीं कि app पुरानी है।</li></ul>",
          hg: "<ul><li>Web Forms = page aur events; MVC 5 = System.Web par controllers; Core = middleware aur endpoints, System.Web nahi.</li><li>Core mein Web Forms aur ViewState nahi: dobara banao ya purani app mein rakho.</li><li>Migration kisi wajah se karo, isliye nahi ki app purani hai.</li></ul>"
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
            en: "The ticket list as plain ASP.NET Core endpoints",
            hi: "Ticket list, सादे ASP.NET Core endpoints के रूप में",
            hg: "Ticket list, saade ASP.NET Core endpoints ke roop mein"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddSingleton<TicketStore>();\nvar app = builder.Build();\n\n// No Global.asax, no System.Web: just endpoints. Every request is independent.\napp.MapGet(\"/tickets\", (TicketStore store) => Results.Ok(store.Open()));\napp.MapPost(\"/tickets/{id:int}/close\", (int id, TicketStore store) =>\n    store.Close(id) ? Results.NoContent() : Results.NotFound());\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nConsole.WriteLine(await client.GetStringAsync(\"/tickets\"));\nvar closed = await client.PostAsync(\"/tickets/501/close\", null);\nConsole.WriteLine((int)closed.StatusCode);\nConsole.WriteLine(await client.GetStringAsync(\"/tickets\"));\nawait app.StopAsync();\n\npublic class TicketStore\n{\n    private readonly Dictionary<int, string> _open = new() { [501] = \"Asha\", [502] = \"Ravi\" };\n\n    public IEnumerable<string> Open() => _open.Select(t => $\"{t.Key} {t.Value}\");\n    public bool Close(int id) => _open.Remove(id);\n}",
          check: "run",
          expected: "[\"501 Asha\",\"502 Ravi\"]\n204\n[\"502 Ravi\"]"
        }
      ]
    },
    {
      id: "webforms-lifecycle",
      depth: "short",
      title: {
        en: "Web Forms lifecycle and ViewState",
        hi: "Web Forms lifecycle और ViewState",
        hg: "Web Forms lifecycle aur ViewState"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 1 said Web Forms keeps state in the page. Now zoom in: the page lifecycle and ViewState, and the stateless GET and POST that replace the postback.",
          hi: "पाठ 1 में कहा था कि Web Forms state page में रखता है। अब पास से देखो: page lifecycle और ViewState, और postback की जगह आने वाले stateless GET और POST।",
          hg: "Lesson 1 mein kaha tha ki Web Forms state page mein rakhta hai. Ab paas se dekho: page lifecycle aur ViewState, aur postback ki jagah aane wale stateless GET aur POST."
        },
        what: {
          en: "<p>A Web Forms page runs a fixed <b>lifecycle</b>: <code>PreInit</code>, <code>Init</code>, then on a postback ViewState and form values are loaded, <code>Load</code>, control events (<code>Button.Click</code>), <code>PreRender</code>, ViewState is saved, <code>Render</code>, <code>Unload</code>. <b>Init and Unload</b> run child-first; <b>Load and PreRender</b> run parent-first.</p><p><b>ViewState</b> is a hidden field (<code>__VIEWSTATE</code>) holding control values. It goes down in every response and up in every <b>postback</b> (the page posting to itself).</p>",
          hi: "<p>Web Forms page एक तय <b>lifecycle</b> में चलता है: <code>PreInit</code>, <code>Init</code>, फिर postback पर ViewState और form values लोड होते हैं, <code>Load</code>, control events (<code>Button.Click</code>), <code>PreRender</code>, ViewState save होता है, <code>Render</code>, <code>Unload</code>। <b>Init और Unload</b> child-पहले चलते हैं; <b>Load और PreRender</b> parent-पहले।</p><p><b>ViewState</b> एक छिपा field (<code>__VIEWSTATE</code>) है जिसमें controls की values रहती हैं। यह हर response में नीचे आता है और हर <b>postback</b> (page का ख़ुद पर ही post करना) में ऊपर जाता है।</p>",
          hg: "<p>Web Forms page ek tay <b>lifecycle</b> mein chalta hai: <code>PreInit</code>, <code>Init</code>, phir postback par ViewState aur form values load hote hain, <code>Load</code>, control events (<code>Button.Click</code>), <code>PreRender</code>, ViewState save hota hai, <code>Render</code>, <code>Unload</code>. <b>Init aur Unload</b> child-pehle chalte hain; <b>Load aur PreRender</b> parent-pehle.</p><p><b>ViewState</b> ek chhupa field (<code>__VIEWSTATE</code>) hai jismein controls ki values rehti hain. Ye har response mein neeche aata hai aur har <b>postback</b> (page ka khud par hi post karna) mein upar jaata hai.</p>"
        },
        why: {
          en: "<p>Old pages are slow and tangled because of this model: bind data in the wrong event and the user's edits vanish; a big grid makes ViewState huge. Knowing the order lets you debug \"why did my grid reset?\" and see what you must rebuild in the new app.</p>",
          hi: "<p>पुराने pages इसी model की वजह से धीमे और उलझे होते हैं: ग़लत event में data bind करो तो user के edits ग़ायब; बड़ा grid ViewState को बहुत भारी कर देता है। क्रम पता हो तो \"मेरा grid reset क्यों हुआ?\" debug कर सकते हो और समझ सकते हो कि नई app में क्या दोबारा बनाना है।</p>",
          hg: "<p>Purane pages isi model ki wajah se dheeme aur uljhe hote hain: galat event mein data bind karo to user ke edits gaayab; bada grid ViewState ko bahut bhaari kar deta hai. Kram pata ho to \"mera grid reset kyun hua?\" debug kar sakte ho aur samajh sakte ho ki nayi app mein kya dobara banana hai.</p>"
        },
        analogy: {
          en: "<p>A school attendance register that is photocopied and sent home with every student. ViewState is that photocopy: it travels with the browser and comes back at the next postback so the server can rebuild the page. It works, but the copy grows with the page.</p>",
          hi: "<p>स्कूल की attendance register जिसकी photocopy हर बच्चे के साथ घर भेजी जाती है। ViewState वही photocopy है: वह browser के साथ घूमती है और अगले postback में वापस आती है ताकि server page दोबारा बना सके। काम करती है, पर copy page के साथ बड़ी होती जाती है।</p>",
          hg: "<p>School ki attendance register jiski photocopy har bachche ke saath ghar bheji jaati hai. ViewState wahi photocopy hai: woh browser ke saath ghoomti hai aur agle postback mein wapas aati hai taaki server page dobara bana sake. Kaam karti hai, par copy page ke saath badi hoti jaati hai.</p>"
        },
        focus: {
          caption: {
            en: "Web Forms code-behind with the lifecycle events (.NET Framework, not compiled here)",
            hi: "Lifecycle events वाला Web Forms code-behind (.NET Framework, यहाँ compile नहीं होता)",
            hg: "Lifecycle events wala Web Forms code-behind (.NET Framework, yahan compile nahi hota)"
          },
          src: "// Tickets.aspx.cs — .NET Framework, System.Web. Not compiled here.\npublic partial class Tickets : System.Web.UI.Page\n{\n    protected void Page_Load(object sender, EventArgs e)\n    {\n        if (!IsPostBack) BindGrid();   // first GET only; binding on every Load wipes the user's edits\n    }                                  // Button.Click handlers run after Load\n}",
          check: "none"
        },
        lines: [
          {
            code: "if (string.IsNullOrWhiteSpace(input.Issue))",
            note: {
              en: "Validation is plain code, as Day 13 taught. Web Forms had validator controls such as <code>RequiredFieldValidator</code> inside the lifecycle.",
              hi: "Validation सादा code है, जैसा Day 13 में देखा। Web Forms में lifecycle के अंदर <code>RequiredFieldValidator</code> जैसे validator controls होते थे।",
              hg: "Validation saada code hai, jaisa Day 13 mein dekha. Web Forms mein lifecycle ke andar <code>RequiredFieldValidator</code> jaise validator controls hote the."
            }
          },
          {
            code: "return Results.BadRequest(\"Issue is required\");",
            note: {
              en: "A bad request gets 400 and a message. The server remembers nothing about the failed try.",
              hi: "ग़लत request को 400 और एक message मिलता है। Server को उस नाकाम कोशिश की कोई याद नहीं रहती।",
              hg: "Galat request ko 400 aur ek message milta hai. Server ko us nakaam koshish ki koi yaad nahi rehti."
            }
          },
          {
            code: "return Results.Created($\"/tickets/{ticket.Id}\", ticket);",
            note: {
              en: "Success is 201 with a <code>Location</code> header (Day 13), not a page that redraws itself.",
              hi: "Success का मतलब 201 और <code>Location</code> header (Day 13) है, ख़ुद को दोबारा बनाने वाला page नहीं।",
              hg: "Success ka matlab 201 aur <code>Location</code> header (Day 13) hai, khud ko dobara banane wala page nahi."
            }
          },
          {
            code: "var good = await client.PostAsJsonAsync(\"/tickets\", new NewTicket(\"Ravi\", \"Refund pending\"));",
            note: {
              en: "The client sends the whole form every time. That replaces the job ViewState did: the browser side owns what the user typed.",
              hi: "Client हर बार पूरा form भेजता है। यह ViewState का काम सँभालता है: user ने जो लिखा, वह browser की तरफ़ रहता है।",
              hg: "Client har baar poora form bhejta hai. Ye ViewState ka kaam sambhalta hai: user ne jo likha, woh browser ki taraf rehta hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>(Legacy) Binding the grid on every <code>Page_Load</code> without <code>!IsPostBack</code>: it wipes the user's edits before the click event runs.</li><li>Treating ViewState as security. It is signed, optionally encrypted, but mainly it is a size tax in both directions.</li></ul>",
          hi: "<ul><li>(Legacy) हर <code>Page_Load</code> पर <code>!IsPostBack</code> के बिना grid bind करना: click event चलने से पहले user के edits मिट जाते हैं।</li><li>ViewState को security समझना। वह signed होता है, चाहो तो encrypted भी, पर असल में वह दोनों तरफ़ size का बोझ है।</li></ul>",
          hg: "<ul><li>(Legacy) Har <code>Page_Load</code> par <code>!IsPostBack</code> ke bina grid bind karna: click event chalne se pehle user ke edits mit jaate hain.</li><li>ViewState ko security samajhna. Woh signed hota hai, chaho to encrypted bhi, par asal mein woh dono taraf size ka bojh hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Read the lifecycle when you debug an old page. For every new page or API use stateless handlers like this. If you really need stateful UI, Blazor components keep their own state. Leave a working Web Forms page that nobody changes alone until its turn.</p>",
          hi: "<p>पुराना page debug करना हो तो lifecycle पढ़ो। हर नए page या API के लिए ऐसे ही stateless handlers इस्तेमाल करो। सच में stateful UI चाहिए तो Blazor components अपनी state रखते हैं। जो Web Forms page चल रहा है और कोई बदलता नहीं, उसे अपनी बारी तक छोड़ दो।</p>",
          hg: "<p>Purana page debug karna ho to lifecycle padho. Har naye page ya API ke liye aise hi stateless handlers use karo. Sach mein stateful UI chahiye to Blazor components apni state rakhte hain. Jo Web Forms page chal raha hai aur koi badalta nahi, use apni baari tak chhod do.</p>"
        },
        exercise: {
          task: {
            en: "<p>Also reject a ticket with an empty <b>Customer</b>: answer <code>400</code> with <code>Customer is required</code>. Post <code>new NewTicket(\"\", \"Refund pending\")</code> and print the status and body.</p>",
            hi: "<p>ख़ाली <b>Customer</b> वाले ticket को भी reject करो: <code>Customer is required</code> के साथ <code>400</code> लौटाओ। <code>new NewTicket(\"\", \"Refund pending\")</code> post करो और status और body print करो।</p>",
            hg: "<p>Khaali <b>Customer</b> wale ticket ko bhi reject karo: <code>Customer is required</code> ke saath <code>400</code> lautao. <code>new NewTicket(\"\", \"Refund pending\")</code> post karo aur status aur body print karo.</p>"
          },
          hint: {
            en: "<p>Add a second <code>if</code> before the Issue check.</p>",
            hi: "<p>Issue की जाँच से पहले दूसरा <code>if</code> जोड़ो।</p>",
            hg: "<p>Issue ki jaanch se pehle doosra <code>if</code> jodo.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            caption: {
              en: "Solution: validate the customer too",
              hi: "हल: customer भी validate करो",
              hg: "Solution: customer bhi validate karo"
            },
            src: "using System.Net.Http.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddSingleton<TicketStore>();\nvar app = builder.Build();\n\n// GET and POST are separate endpoints: there is no \"IsPostBack\" and no ViewState.\napp.MapGet(\"/tickets/{id:int}\", (int id, TicketStore store) =>\n    store.Find(id) is { } ticket ? Results.Ok(ticket) : Results.NotFound());\n\napp.MapPost(\"/tickets\", (NewTicket input, TicketStore store) =>\n{\n    if (string.IsNullOrWhiteSpace(input.Customer))\n        return Results.BadRequest(\"Customer is required\");\n    if (string.IsNullOrWhiteSpace(input.Issue))\n        return Results.BadRequest(\"Issue is required\");\n    var ticket = store.Add(input.Customer, input.Issue);\n    return Results.Created($\"/tickets/{ticket.Id}\", ticket);\n});\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nvar bad = await client.PostAsJsonAsync(\"/tickets\", new NewTicket(\"\", \"Refund pending\"));\nConsole.WriteLine($\"{(int)bad.StatusCode} {await bad.Content.ReadAsStringAsync()}\");\nawait app.StopAsync();\n\npublic record NewTicket(string Customer, string Issue);\npublic record Ticket(int Id, string Customer, string Issue);\n\npublic class TicketStore\n{\n    private readonly List<Ticket> _tickets = [new(501, \"Asha\", \"Login failed\"), new(502, \"Meena\", \"Invoice wrong\")];\n\n    public Ticket? Find(int id) => _tickets.FirstOrDefault(t => t.Id == id);\n    public Ticket Add(string customer, string issue)\n    {\n        var ticket = new Ticket(_tickets.Max(t => t.Id) + 1, customer, issue);\n        _tickets.Add(ticket);\n        return ticket;\n    }\n}",
            check: "run",
            expected: "400 \"Customer is required\""
          }
        },
        quiz: {
          q: {
            en: "Which statement about the Web Forms lifecycle is correct?",
            hi: "Web Forms lifecycle के बारे में कौन-सी बात सही है?",
            hg: "Web Forms lifecycle ke baare mein kaunsi baat sahi hai?"
          },
          options: [
            {
              en: "Button click events run before <code>Load</code>",
              hi: "Button click events <code>Load</code> से पहले चलते हैं",
              hg: "Button click events <code>Load</code> se pehle chalte hain"
            },
            {
              en: "<code>Load</code> runs child-first, like <code>Init</code>",
              hi: "<code>Load</code> भी <code>Init</code> की तरह child-पहले चलता है",
              hg: "<code>Load</code> bhi <code>Init</code> ki tarah child-pehle chalta hai"
            },
            {
              en: "<code>Init</code> runs child-first and <code>Load</code> runs parent-first",
              hi: "<code>Init</code> child-पहले और <code>Load</code> parent-पहले चलता है",
              hg: "<code>Init</code> child-pehle aur <code>Load</code> parent-pehle chalta hai"
            },
            {
              en: "ViewState is loaded after <code>Render</code>",
              hi: "ViewState <code>Render</code> के बाद load होता है",
              hg: "ViewState <code>Render</code> ke baad load hota hai"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>Init and Unload go child-first; Load and PreRender go parent-first. Control events such as <code>Button.Click</code> run after Load, and ViewState is loaded before Load on a postback.</p>",
            hi: "<p>Init और Unload child-पहले; Load और PreRender parent-पहले। <code>Button.Click</code> जैसे control events Load के बाद चलते हैं, और postback पर ViewState Load से पहले load होता है।</p>",
            hg: "<p>Init aur Unload child-pehle; Load aur PreRender parent-pehle. <code>Button.Click</code> jaise control events Load ke baad chalte hain, aur postback par ViewState Load se pehle load hota hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>Lifecycle: PreInit, Init, (ViewState), Load, control events, PreRender, Render, Unload.</li><li>ViewState is a hidden field that travels both ways: a size tax, not security.</li><li>Core: separate GET and POST endpoints, explicit validation, no hidden state.</li></ul>",
          hi: "<ul><li>Lifecycle: PreInit, Init, (ViewState), Load, control events, PreRender, Render, Unload।</li><li>ViewState एक छिपा field है जो दोनों तरफ़ घूमता है: size का बोझ, security नहीं।</li><li>Core: अलग GET और POST endpoints, साफ़ validation, कोई छिपी state नहीं।</li></ul>",
          hg: "<ul><li>Lifecycle: PreInit, Init, (ViewState), Load, control events, PreRender, Render, Unload.</li><li>ViewState ek chhupa field hai jo dono taraf ghoomta hai: size ka bojh, security nahi.</li><li>Core: alag GET aur POST endpoints, saaf validation, koi chhupi state nahi.</li></ul>"
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
            en: "Validate on POST, create with 201, read with GET",
            hi: "POST पर validate, 201 से बनाओ, GET से पढ़ो",
            hg: "POST par validate, 201 se banao, GET se padho"
          },
          src: "using System.Net.Http.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddSingleton<TicketStore>();\nvar app = builder.Build();\n\n// GET and POST are separate endpoints: there is no \"IsPostBack\" and no ViewState.\napp.MapGet(\"/tickets/{id:int}\", (int id, TicketStore store) =>\n    store.Find(id) is { } ticket ? Results.Ok(ticket) : Results.NotFound());\n\napp.MapPost(\"/tickets\", (NewTicket input, TicketStore store) =>\n{\n    if (string.IsNullOrWhiteSpace(input.Issue))\n        return Results.BadRequest(\"Issue is required\");\n    var ticket = store.Add(input.Customer, input.Issue);\n    return Results.Created($\"/tickets/{ticket.Id}\", ticket);\n});\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nvar bad = await client.PostAsJsonAsync(\"/tickets\", new NewTicket(\"Ravi\", \"\"));\nConsole.WriteLine($\"{(int)bad.StatusCode} {await bad.Content.ReadAsStringAsync()}\");\n\nvar good = await client.PostAsJsonAsync(\"/tickets\", new NewTicket(\"Ravi\", \"Refund pending\"));\nConsole.WriteLine($\"{(int)good.StatusCode} {good.Headers.Location}\");\nConsole.WriteLine(await client.GetStringAsync(\"/tickets/503\"));\nawait app.StopAsync();\n\npublic record NewTicket(string Customer, string Issue);\npublic record Ticket(int Id, string Customer, string Issue);\n\npublic class TicketStore\n{\n    private readonly List<Ticket> _tickets = [new(501, \"Asha\", \"Login failed\"), new(502, \"Meena\", \"Invoice wrong\")];\n\n    public Ticket? Find(int id) => _tickets.FirstOrDefault(t => t.Id == id);\n    public Ticket Add(string customer, string issue)\n    {\n        var ticket = new Ticket(_tickets.Max(t => t.Id) + 1, customer, issue);\n        _tickets.Add(ticket);\n        return ticket;\n    }\n}",
          check: "run",
          expected: "400 \"Issue is required\"\n201 /tickets/503\n{\"id\":503,\"customer\":\"Ravi\",\"issue\":\"Refund pending\"}"
        }
      ]
    },
    {
      id: "mvc5-controller-to-core",
      depth: "short",
      title: {
        en: "MVC 5 controller to ASP.NET Core controller",
        hi: "MVC 5 controller से ASP.NET Core controller",
        hg: "MVC 5 controller se ASP.NET Core controller"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 2 replaced page events with explicit endpoints. MVC 5 already has controllers, so you port one <code>TicketsController</code> into Core (Day 13) and see what changes.",
          hi: "पाठ 2 में page events की जगह साफ़ endpoints आए। MVC 5 में controllers पहले से हैं, इसलिए एक <code>TicketsController</code> को Core (Day 13) में ले जाओ और देखो क्या बदलता है।",
          hg: "Lesson 2 mein page events ki jagah saaf endpoints aaye. MVC 5 mein controllers pehle se hain, isliye ek <code>TicketsController</code> ko Core (Day 13) mein le jao aur dekho kya badalta hai."
        },
        what: {
          en: "<p>An MVC 5 controller derives from <code>System.Web.Mvc.Controller</code> and returns <code>ActionResult</code> (<code>HttpNotFound()</code>, <code>Json(...)</code>, <code>View()</code>). In ASP.NET Core an API controller derives from <code>ControllerBase</code>, carries <code>[ApiController]</code>, gets its services through the constructor and returns <code>ActionResult&lt;T&gt;</code> or <code>IActionResult</code>.</p>",
          hi: "<p>MVC 5 controller <code>System.Web.Mvc.Controller</code> से बनता है और <code>ActionResult</code> लौटाता है (<code>HttpNotFound()</code>, <code>Json(...)</code>, <code>View()</code>)। ASP.NET Core में API controller <code>ControllerBase</code> से बनता है, उस पर <code>[ApiController]</code> लगता है, services constructor से मिलती हैं और वह <code>ActionResult&lt;T&gt;</code> या <code>IActionResult</code> लौटाता है।</p>",
          hg: "<p>MVC 5 controller <code>System.Web.Mvc.Controller</code> se banta hai aur <code>ActionResult</code> lautaata hai (<code>HttpNotFound()</code>, <code>Json(...)</code>, <code>View()</code>). ASP.NET Core mein API controller <code>ControllerBase</code> se banta hai, us par <code>[ApiController]</code> lagta hai, services constructor se milti hain aur woh <code>ActionResult&lt;T&gt;</code> ya <code>IActionResult</code> lautaata hai.</p>"
        },
        why: {
          en: "<p>Controllers are the biggest part of most MVC 5 CRMs, and the idea carries over, so porting them early gives quick, visible progress. The differences (DI, automatic 400, JSON casing) are exactly where bugs hide, so know them.</p>",
          hi: "<p>ज़्यादातर MVC 5 CRM का सबसे बड़ा हिस्सा controllers होते हैं, और idea आगे आता है, इसलिए इन्हें जल्दी port करने से तेज़, दिखने वाली तरक़्क़ी मिलती है। फ़र्क़ (DI, अपने-आप 400, JSON casing) वही जगह हैं जहाँ bugs छिपते हैं, इसलिए इन्हें जानो।</p>",
          hg: "<p>Zyaadatar MVC 5 CRM ka sabse bada hissa controllers hote hain, aur idea aage aata hai, isliye inhein jaldi port karne se tez, dikhne wali tarakki milti hai. Farq (DI, apne-aap 400, JSON casing) wahi jagah hain jahan bugs chhupte hain, isliye inhein jaano.</p>"
        },
        analogy: {
          en: "<p>A restaurant that moves to a new building. The waiter (controller) still takes the order and brings the dish, but the uniform is new (base class and return types), and the kitchen staff now come to him by name (dependency injection) instead of him walking in to fetch them.</p>",
          hi: "<p>एक restaurant नई इमारत में चला गया। Waiter (controller) अब भी order लेता है और dish लाता है, पर वर्दी नई है (base class और return types), और kitchen का स्टाफ़ अब नाम से उसके पास आता है (dependency injection), वह ख़ुद अंदर जाकर उन्हें नहीं बुलाता।</p>",
          hg: "<p>Ek restaurant nayi imaarat mein chala gaya. Waiter (controller) ab bhi order leta hai aur dish laata hai, par vardi nayi hai (base class aur return types), aur kitchen ka staff ab naam se uske paas aata hai (dependency injection), woh khud andar jaakar unhein nahi bulaata.</p>"
        },
        focus: {
          caption: {
            en: "The MVC 5 version (.NET Framework, not compiled here)",
            hi: "MVC 5 वाला version (.NET Framework, यहाँ compile नहीं होता)",
            hg: "MVC 5 wala version (.NET Framework, yahan compile nahi hota)"
          },
          src: "// TicketsController.cs — .NET Framework, System.Web.Mvc. Not compiled here.\npublic class TicketsController : Controller\n{\n    private readonly TicketStore _store = new TicketStore();   // no built-in DI: new-ed up or added via Unity/Autofac\n\n    public ActionResult Details(int id)\n    {\n        var ticket = _store.Find(id);\n        if (ticket == null) return HttpNotFound();\n        return Json(ticket, JsonRequestBehavior.AllowGet);\n    }\n\n    [HttpPost, ValidateAntiForgeryToken]\n    public ActionResult Create(NewTicket input)\n    {\n        if (!ModelState.IsValid) return new HttpStatusCodeResult(400);   // checked by hand\n        return RedirectToAction(\"Details\", new { id = _store.Add(input).Id });\n    }\n}",
          check: "none"
        },
        lines: [
          {
            code: "public class TicketsController(TicketStore store) : ControllerBase",
            note: {
              en: "<code>ControllerBase</code> is a controller without view support, which is right for an API. The store arrives through the constructor (a C# 12 primary constructor), so no <code>new TicketStore()</code>.",
              hi: "<code>ControllerBase</code> बिना view support वाला controller है, API के लिए यही ठीक है। Store constructor से आता है (C# 12 primary constructor), इसलिए <code>new TicketStore()</code> नहीं।",
              hg: "<code>ControllerBase</code> bina view support wala controller hai, API ke liye yahi theek hai. Store constructor se aata hai (C# 12 primary constructor), isliye <code>new TicketStore()</code> nahi."
            }
          },
          {
            code: "[ApiController]",
            note: {
              en: "As Day 13 taught, it turns on API behaviour: automatic 400 for an invalid model, and binding sources are inferred (a complex type comes from the body).",
              hi: "जैसा Day 13 में सीखा, यह API वाला behaviour चालू करता है: invalid model पर अपने-आप 400, और binding sources अपने-आप तय होते हैं (complex type body से आता है)।",
              hg: "Jaisa Day 13 mein seekha, ye API wala behaviour chalu karta hai: invalid model par apne-aap 400, aur binding sources apne-aap tay hote hain (complex type body se aata hai)."
            }
          },
          {
            code: "store.Find(id) is { } ticket ? ticket : NotFound();",
            note: {
              en: "<code>NotFound()</code> replaces <code>HttpNotFound()</code>. Returning the <code>Ticket</code> itself becomes a 200 with JSON.",
              hi: "<code>NotFound()</code>, <code>HttpNotFound()</code> की जगह लेता है। <code>Ticket</code> ख़ुद लौटाने पर 200 और JSON बनता है।",
              hg: "<code>NotFound()</code>, <code>HttpNotFound()</code> ki jagah leta hai. <code>Ticket</code> khud lautaane par 200 aur JSON banta hai."
            }
          },
          {
            code: "public IActionResult Create(NewTicket input)",
            note: {
              en: "No <code>if (!ModelState.IsValid)</code> line: because of <code>[ApiController]</code> the action never runs with a bad <code>NewTicket</code>.",
              hi: "<code>if (!ModelState.IsValid)</code> वाली line नहीं: <code>[ApiController]</code> की वजह से ग़लत <code>NewTicket</code> के साथ action चलता ही नहीं।",
              hg: "<code>if (!ModelState.IsValid)</code> wali line nahi: <code>[ApiController]</code> ki wajah se galat <code>NewTicket</code> ke saath action chalta hi nahi."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Forgetting <code>AddControllers()</code> or <code>MapControllers()</code>: every route answers 404.</li><li>Assuming the JSON stays the same. MVC 5 <code>Json()</code> keeps C# names (<code>Id</code>); Core uses System.Text.Json with camelCase (<code>id</code>). A client can break silently.</li></ul>",
          hi: "<ul><li><code>AddControllers()</code> या <code>MapControllers()</code> भूल जाना: हर route 404 देता है।</li><li>यह मान लेना कि JSON वही रहेगा। MVC 5 का <code>Json()</code> C# के नाम रखता है (<code>Id</code>); Core में System.Text.Json और camelCase (<code>id</code>) है। Client चुपचाप टूट सकता है।</li></ul>",
          hg: "<ul><li><code>AddControllers()</code> ya <code>MapControllers()</code> bhool jaana: har route 404 deta hai.</li><li>Ye maan lena ki JSON wahi rahega. MVC 5 ka <code>Json()</code> C# ke naam rakhta hai (<code>Id</code>); Core mein System.Text.Json aur camelCase (<code>id</code>) hai. Client chupchaap toot sakta hai.</li></ul>"
        },
        whenToUse: {
          en: "<p>Port controllers early; the shape maps almost one to one. Use <code>[ApiController]</code> for APIs. Views, bundling and global filters need more work, so plan them as separate steps.</p>",
          hi: "<p>Controllers जल्दी port करो; shape लगभग एक-से-एक मिलती है। APIs के लिए <code>[ApiController]</code> इस्तेमाल करो। Views, bundling और global filters में ज़्यादा काम है, इसलिए उन्हें अलग steps में plan करो।</p>",
          hg: "<p>Controllers jaldi port karo; shape lagbhag ek-se-ek milti hai. APIs ke liye <code>[ApiController]</code> use karo. Views, bundling aur global filters mein zyaada kaam hai, isliye unhein alag steps mein plan karo.</p>"
        },
        exercise: {
          task: {
            en: "<p>Add a list action <code>GET /tickets</code> that returns all tickets, and print the JSON.</p>",
            hi: "<p>एक list action <code>GET /tickets</code> जोड़ो जो सारे tickets लौटाए, और JSON print करो।</p>",
            hg: "<p>Ek list action <code>GET /tickets</code> jodo jo saare tickets lautaye, aur JSON print karo.</p>"
          },
          hint: {
            en: "<p>Add a store method <code>All()</code> and an action with a bare <code>[HttpGet]</code>.</p>",
            hi: "<p>Store में <code>All()</code> method जोड़ो और सिर्फ़ <code>[HttpGet]</code> वाला action।</p>",
            hg: "<p>Store mein <code>All()</code> method jodo aur sirf <code>[HttpGet]</code> wala action.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            caption: {
              en: "Solution: a list action",
              hi: "हल: list action",
              hg: "Solution: list action"
            },
            src: "using System.ComponentModel.DataAnnotations;\nusing System.Net.Http.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddControllers();\nbuilder.Services.AddSingleton<TicketStore>();\nvar app = builder.Build();\napp.MapControllers();\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nConsole.WriteLine(await client.GetStringAsync(\"/tickets\"));\nawait app.StopAsync();\n\n// Was: public class TicketsController : Controller (System.Web.Mvc)\n[ApiController]\n[Route(\"tickets\")]\npublic class TicketsController(TicketStore store) : ControllerBase\n{\n    [HttpGet(\"{id:int}\")]\n    public ActionResult<Ticket> Get(int id) =>\n        store.Find(id) is { } ticket ? ticket : NotFound();      // was HttpNotFound()\n\n    [HttpGet]\n    public IEnumerable<Ticket> List() => store.All();\n\n    [HttpPost]\n    public IActionResult Create(NewTicket input)                 // invalid input: automatic 400\n    {\n        var ticket = store.Add(input.Customer, input.Issue);\n        return CreatedAtAction(nameof(Get), new { id = ticket.Id }, ticket);\n    }\n}\n\npublic class NewTicket\n{\n    [Required] public string Customer { get; set; } = \"\";\n    [Required] public string Issue { get; set; } = \"\";\n}\n\npublic record Ticket(int Id, string Customer, string Issue);\n\npublic class TicketStore\n{\n    private readonly List<Ticket> _tickets = [new(501, \"Asha\", \"Login failed\"), new(502, \"Meena\", \"Invoice wrong\")];\n\n    public IEnumerable<Ticket> All() => _tickets;\n    public Ticket? Find(int id) => _tickets.FirstOrDefault(t => t.Id == id);\n    public Ticket Add(string customer, string issue)\n    {\n        var ticket = new Ticket(_tickets.Max(t => t.Id) + 1, customer, issue);\n        _tickets.Add(ticket);\n        return ticket;\n    }\n}",
            check: "run",
            expected: "[{\"id\":501,\"customer\":\"Asha\",\"issue\":\"Login failed\"},{\"id\":502,\"customer\":\"Meena\",\"issue\":\"Invoice wrong\"}]"
          }
        },
        quiz: {
          q: {
            en: "What does <code>[ApiController]</code> give you in an ASP.NET Core controller?",
            hi: "ASP.NET Core controller में <code>[ApiController]</code> से क्या मिलता है?",
            hg: "ASP.NET Core controller mein <code>[ApiController]</code> se kya milta hai?"
          },
          options: [
            {
              en: "An automatic 400 response when model validation fails",
              hi: "Model validation fail होने पर अपने-आप 400 response",
              hg: "Model validation fail hone par apne-aap 400 response"
            },
            {
              en: "ViewState for the controller's views",
              hi: "Controller के views के लिए ViewState",
              hg: "Controller ke views ke liye ViewState"
            },
            {
              en: "Registration of the controller in <code>web.config</code>",
              hi: "<code>web.config</code> में controller का registration",
              hg: "<code>web.config</code> mein controller ka registration"
            },
            {
              en: "Access to <code>HttpContext.Current</code>",
              hi: "<code>HttpContext.Current</code> तक पहुँच",
              hg: "<code>HttpContext.Current</code> tak pahunch"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>It also infers binding sources. There is no ViewState, no <code>web.config</code> registration, and no <code>HttpContext.Current</code> in Core.</p>",
            hi: "<p>यह binding sources भी तय कर देता है। Core में न ViewState है, न <code>web.config</code> registration, न <code>HttpContext.Current</code>।</p>",
            hg: "<p>Ye binding sources bhi tay kar deta hai. Core mein na ViewState hai, na <code>web.config</code> registration, na <code>HttpContext.Current</code>.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>Controller</code> becomes <code>ControllerBase</code> + <code>[ApiController]</code>; <code>HttpNotFound()</code> becomes <code>NotFound()</code>.</li><li>Services come in through the constructor; register controllers and map them.</li><li>Check JSON casing and validation behaviour with tests on both versions.</li></ul>",
          hi: "<ul><li><code>Controller</code> बनता है <code>ControllerBase</code> + <code>[ApiController]</code>; <code>HttpNotFound()</code> बनता है <code>NotFound()</code>।</li><li>Services constructor से आती हैं; controllers register करो और map करो।</li><li>दोनों versions पर tests से JSON casing और validation का behaviour जाँचो।</li></ul>",
          hg: "<ul><li><code>Controller</code> banta hai <code>ControllerBase</code> + <code>[ApiController]</code>; <code>HttpNotFound()</code> banta hai <code>NotFound()</code>.</li><li>Services constructor se aati hain; controllers register karo aur map karo.</li><li>Dono versions par tests se JSON casing aur validation ka behaviour jaancho.</li></ul>"
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
            en: "TicketsController in ASP.NET Core, called through the in-memory server",
            hi: "ASP.NET Core में TicketsController, in-memory server से call",
            hg: "ASP.NET Core mein TicketsController, in-memory server se call"
          },
          src: "using System.ComponentModel.DataAnnotations;\nusing System.Net.Http.Json;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddControllers();\nbuilder.Services.AddSingleton<TicketStore>();\nvar app = builder.Build();\napp.MapControllers();\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nvar found = await client.GetAsync(\"/tickets/501\");\nConsole.WriteLine($\"{(int)found.StatusCode} {await found.Content.ReadAsStringAsync()}\");\nvar invalid = await client.PostAsJsonAsync(\"/tickets\", new { Customer = \"Ravi\", Issue = \"\" });\nConsole.WriteLine((int)invalid.StatusCode);\nawait app.StopAsync();\n\n// Was: public class TicketsController : Controller (System.Web.Mvc)\n[ApiController]\n[Route(\"tickets\")]\npublic class TicketsController(TicketStore store) : ControllerBase\n{\n    [HttpGet(\"{id:int}\")]\n    public ActionResult<Ticket> Get(int id) =>\n        store.Find(id) is { } ticket ? ticket : NotFound();      // was HttpNotFound()\n\n    [HttpPost]\n    public IActionResult Create(NewTicket input)                 // invalid input: automatic 400\n    {\n        var ticket = store.Add(input.Customer, input.Issue);\n        return CreatedAtAction(nameof(Get), new { id = ticket.Id }, ticket);\n    }\n}\n\npublic class NewTicket\n{\n    [Required] public string Customer { get; set; } = \"\";\n    [Required] public string Issue { get; set; } = \"\";\n}\n\npublic record Ticket(int Id, string Customer, string Issue);\n\npublic class TicketStore\n{\n    private readonly List<Ticket> _tickets = [new(501, \"Asha\", \"Login failed\"), new(502, \"Meena\", \"Invoice wrong\")];\n\n    public Ticket? Find(int id) => _tickets.FirstOrDefault(t => t.Id == id);\n    public Ticket Add(string customer, string issue)\n    {\n        var ticket = new Ticket(_tickets.Max(t => t.Id) + 1, customer, issue);\n        _tickets.Add(ticket);\n        return ticket;\n    }\n}",
          check: "run",
          expected: "200 {\"id\":501,\"customer\":\"Asha\",\"issue\":\"Login failed\"}\n400"
        }
      ]
    },
    {
      id: "modules-to-middleware",
      depth: "short",
      title: {
        en: "HttpModule and Global.asax to middleware",
        hi: "HttpModule और Global.asax से middleware",
        hg: "HttpModule aur Global.asax se middleware"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 3 moved the controller. The code around it, <code>HttpModule</code> and <code>Global.asax</code>, moves into the middleware chain from Day 12.",
          hi: "पाठ 3 में controller आगे गया। उसके आस-पास का code, <code>HttpModule</code> और <code>Global.asax</code>, Day 12 वाली middleware chain में जाता है।",
          hg: "Lesson 3 mein controller aage gaya. Uske aas-paas ka code, <code>HttpModule</code> aur <code>Global.asax</code>, Day 12 wali middleware chain mein jaata hai."
        },
        what: {
          en: "<p>An <b>HttpModule</b> subscribes to <code>HttpApplication</code> events (<code>BeginRequest</code>, <code>AuthenticateRequest</code>, ... <code>EndRequest</code>) and is registered in <code>web.config</code>. <code>Global.asax</code> holds <code>Application_Start</code>, <code>Application_Error</code> and <code>Application_End</code>. A <b>handler</b> is the endpoint that finally produces the response.</p><p>In Core: modules become <b>middleware</b> (<code>app.Use</code>), handlers become <b>endpoints</b>, and start/stop become <code>IHostApplicationLifetime</code> events.</p>",
          hi: "<p><b>HttpModule</b> <code>HttpApplication</code> के events (<code>BeginRequest</code>, <code>AuthenticateRequest</code>, ... <code>EndRequest</code>) पर subscribe करता है और <code>web.config</code> में register होता है। <code>Global.asax</code> में <code>Application_Start</code>, <code>Application_Error</code> और <code>Application_End</code> होते हैं। <b>Handler</b> वह endpoint है जो आख़िर में response बनाता है।</p><p>Core में: modules बनते हैं <b>middleware</b> (<code>app.Use</code>), handlers बनते हैं <b>endpoints</b>, और start/stop बनते हैं <code>IHostApplicationLifetime</code> events।</p>",
          hg: "<p><b>HttpModule</b> <code>HttpApplication</code> ke events (<code>BeginRequest</code>, <code>AuthenticateRequest</code>, ... <code>EndRequest</code>) par subscribe karta hai aur <code>web.config</code> mein register hota hai. <code>Global.asax</code> mein <code>Application_Start</code>, <code>Application_Error</code> aur <code>Application_End</code> hote hain. <b>Handler</b> woh endpoint hai jo aakhir mein response banata hai.</p><p>Core mein: modules bante hain <b>middleware</b> (<code>app.Use</code>), handlers bante hain <b>endpoints</b>, aur start/stop bante hain <code>IHostApplicationLifetime</code> events.</p>"
        },
        why: {
          en: "<p>Logging, correlation ids, security headers and redirects usually live in modules. Knowing the mapping lets you rewrite them in a few lines instead of dragging the old event model along.</p>",
          hi: "<p>Logging, correlation ids, security headers और redirects अक्सर modules में होते हैं। Mapping पता हो तो इन्हें पुराना event model साथ घसीटे बिना कुछ lines में दोबारा लिख सकते हो।</p>",
          hg: "<p>Logging, correlation ids, security headers aur redirects aksar modules mein hote hain. Mapping pata ho to inhein purana event model saath ghaseete bina kuch lines mein dobara likh sakte ho.</p>"
        },
        analogy: {
          en: "<p>An airport. The old system had fixed gates every passenger passes in the same sequence (check-in, security, boarding), and each department stands at the gates it cares about. The new system is a corridor of desks: each desk handles you on the way in and again on the way back.</p>",
          hi: "<p>एक airport। पुराने system में तय gates थे जिनसे हर मुसाफ़िर एक ही क्रम में गुज़रता है (check-in, security, boarding), और हर department उन्हीं gates पर खड़ा होता है जिनसे उसका काम है। नया system desks का एक गलियारा है: हर desk आपको अंदर जाते समय भी सँभालता है और लौटते समय भी।</p>",
          hg: "<p>Ek airport. Purane system mein tay gates the jinse har musafir ek hi kram mein guzarta hai (check-in, security, boarding), aur har department unhi gates par khada hota hai jinse uska kaam hai. Naya system desks ka ek galiyara hai: har desk aapko andar jaate samay bhi sambhalta hai aur lautte samay bhi.</p>"
        },
        focus: {
          caption: {
            en: "The old module, its web.config entry and Global.asax (.NET Framework, not compiled here)",
            hi: "पुराना module, उसकी web.config entry और Global.asax (.NET Framework, यहाँ compile नहीं होता)",
            hg: "Purana module, uski web.config entry aur Global.asax (.NET Framework, yahan compile nahi hota)"
          },
          src: "// CorrelationModule.cs — .NET Framework, System.Web. Not compiled here.\npublic class CorrelationModule : IHttpModule\n{\n    public void Init(HttpApplication app) => app.BeginRequest += (s, e) =>\n    {\n        var ctx = ((HttpApplication)s).Context;\n        var id = ctx.Request.Headers[\"X-Correlation-Id\"] ?? Guid.NewGuid().ToString(\"N\");\n        ctx.Response.Headers[\"X-Correlation-Id\"] = id;\n    };\n}\n// web.config: <system.webServer><modules><add name=\"Correlation\" type=\"Legacy.CorrelationModule\" /></modules></system.webServer>",
          check: "none"
        },
        lines: [
          {
            code: "app.Lifetime.ApplicationStarted.Register(() => Console.WriteLine(\"Application_Start -> ApplicationStarted\"));",
            note: {
              en: "Start and stop work moves to host lifetime events. Setup like routes and DI is already in Program.cs; use this for \"app is ready\" actions.",
              hi: "Start और stop का काम host lifetime events में जाता है। Routes और DI जैसा setup पहले से Program.cs में है; \"app तैयार है\" वाले काम के लिए इसे इस्तेमाल करो।",
              hg: "Start aur stop ka kaam host lifetime events mein jaata hai. Routes aur DI jaisa setup pehle se Program.cs mein hai; \"app taiyaar hai\" wale kaam ke liye ise use karo."
            }
          },
          {
            code: "app.Use(async (context, next) =>",
            note: {
              en: "This lambda is the module. It receives the <code>HttpContext</code> and a <code>next</code> delegate that runs the rest of the pipeline.",
              hi: "यह lambda ही module है। इसे <code>HttpContext</code> और एक <code>next</code> delegate मिलता है जो बाक़ी pipeline चलाता है।",
              hg: "Ye lambda hi module hai. Ise <code>HttpContext</code> aur ek <code>next</code> delegate milta hai jo baaki pipeline chalata hai."
            }
          },
          {
            code: "context.Response.Headers[\"X-Correlation-Id\"] = id;",
            note: {
              en: "Set headers before <code>next()</code> (before the body starts). After the response has started, header changes fail.",
              hi: "Headers <code>next()</code> से पहले set करो (body शुरू होने से पहले)। Response शुरू होने के बाद header बदलना fail होता है।",
              hg: "Headers <code>next()</code> se pehle set karo (body shuru hone se pehle). Response shuru hone ke baad header badalna fail hota hai."
            }
          },
          {
            code: "await next();",
            note: {
              en: "Code before this line is the way in (like <code>BeginRequest</code>). Code after it runs on the way back (like <code>EndRequest</code>), in reverse order of registration.",
              hi: "इस line से पहले का code अंदर जाने का रास्ता है (<code>BeginRequest</code> जैसा)। इसके बाद का code लौटते समय चलता है (<code>EndRequest</code> जैसा), register करने के उल्टे क्रम में।",
              hg: "Is line se pehle ka code andar jaane ka raasta hai (<code>BeginRequest</code> jaisa). Iske baad ka code lautte samay chalta hai (<code>EndRequest</code> jaisa), register karne ke ulte kram mein."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Porting a module line by line without asking what it did. Core may already do it (HTTPS redirection, CORS, forwarded headers, response compression).</li><li>Setting a header after <code>await next()</code>: once the endpoint has written the body, the response has started and the change throws. Set it before.</li></ul>",
          hi: "<ul><li>Module क्या करता था, यह पूछे बिना उसे लाइन-दर-लाइन port करना। हो सकता है Core यह पहले से करता हो (HTTPS redirection, CORS, forwarded headers, response compression)।</li><li><code>await next()</code> के बाद header set करना: endpoint body लिख चुका हो तो response शुरू हो चुका है और बदलाव पर exception आती है। पहले set करो।</li></ul>",
          hg: "<ul><li>Module kya karta tha, ye poochhe bina use line-by-line port karna. Ho sakta hai Core ye pehle se karta ho (HTTPS redirection, CORS, forwarded headers, response compression).</li><li><code>await next()</code> ke baad header set karna: endpoint body likh chuka ho to response shuru ho chuka hai aur badlaav par exception aati hai. Pehle set karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Rewrite as middleware: logging, correlation ids, security headers, redirects. For a large module nobody understands, the System.Web adapters can host an <code>IHttpModule</code> inside Core as a temporary bridge until tests exist (lesson 7).</p>",
          hi: "<p>Middleware में दोबारा लिखो: logging, correlation ids, security headers, redirects। जिस बड़े module को कोई नहीं समझता, उसके लिए System.Web adapters <code>IHttpModule</code> को Core के अंदर कुछ दिनों के पुल की तरह चला सकते हैं, जब तक tests न बन जाएँ (पाठ 7)।</p>",
          hg: "<p>Middleware mein dobara likho: logging, correlation ids, security headers, redirects. Jis bade module ko koi nahi samajhta, uske liye System.Web adapters <code>IHttpModule</code> ko Core ke andar kuch dinon ke pul ki tarah chala sakte hain, jab tak tests na ban jaayein (lesson 7).</p>"
        },
        exercise: {
          task: {
            en: "<p>Add the old <code>EndRequest</code> idea: after <code>next()</code> print <code>log: /tickets/501 -&gt; 200</code> using the request path and the response status code. Call <code>/tickets/501</code> once.</p>",
            hi: "<p>पुराना <code>EndRequest</code> वाला idea जोड़ो: <code>next()</code> के बाद request path और response status code से <code>log: /tickets/501 -&gt; 200</code> print करो। <code>/tickets/501</code> एक बार call करो।</p>",
            hg: "<p>Purana <code>EndRequest</code> wala idea jodo: <code>next()</code> ke baad request path aur response status code se <code>log: /tickets/501 -&gt; 200</code> print karo. <code>/tickets/501</code> ek baar call karo.</p>"
          },
          hint: {
            en: "<p>Read <code>context.Response.StatusCode</code> after <code>await next()</code>, inside the same middleware.</p>",
            hi: "<p>उसी middleware में <code>await next()</code> के बाद <code>context.Response.StatusCode</code> पढ़ो।</p>",
            hg: "<p>Usi middleware mein <code>await next()</code> ke baad <code>context.Response.StatusCode</code> padho.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            packages: [
              "Microsoft.AspNetCore.TestHost"
            ],
            caption: {
              en: "Solution: log after the pipeline unwinds",
              hi: "हल: pipeline लौटने के बाद log",
              hg: "Solution: pipeline lautne ke baad log"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\n// CorrelationModule (IHttpModule, BeginRequest) becomes middleware.\napp.Use(async (context, next) =>\n{\n    var id = context.Request.Headers[\"X-Correlation-Id\"].FirstOrDefault() ?? Guid.NewGuid().ToString(\"N\");\n    context.Items[\"CorrelationId\"] = id;\n    context.Response.Headers[\"X-Correlation-Id\"] = id;   // set before the body starts\n    await next();\n    Console.WriteLine($\"log: {context.Request.Path} -> {context.Response.StatusCode}\");   // like EndRequest\n});\n\napp.MapGet(\"/tickets/{id:int}\", (int id, HttpContext context) =>\n    $\"Ticket {id}, correlation {context.Items[\"CorrelationId\"]}\");\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nawait client.GetAsync(\"/tickets/501\");\nawait app.StopAsync();",
            check: "run",
            expected: "log: /tickets/501 -> 200"
          }
        },
        quiz: {
          q: {
            en: "Two middleware are registered in this order: A, then B. In what order do they run for one request?",
            hi: "दो middleware इस क्रम में register हैं: पहले A, फिर B। एक request के लिए वे किस क्रम में चलते हैं?",
            hg: "Do middleware is kram mein register hain: pehle A, phir B. Ek request ke liye woh kis kram mein chalte hain?"
          },
          options: [
            {
              en: "B first, then A",
              hi: "पहले B, फिर A",
              hg: "Pehle B, phir A"
            },
            {
              en: "In parallel, the order is not defined",
              hi: "एक साथ, क्रम तय नहीं",
              hg: "Ek saath, kram tay nahi"
            },
            {
              en: "A in, A out, B in, B out, endpoint",
              hi: "A अंदर, A बाहर, B अंदर, B बाहर, endpoint",
              hg: "A andar, A bahar, B andar, B bahar, endpoint"
            },
            {
              en: "A in, B in, endpoint, B out, A out",
              hi: "A अंदर, B अंदर, endpoint, B बाहर, A बाहर",
              hg: "A andar, B andar, endpoint, B bahar, A bahar"
            }
          ],
          answer: 3,
          explain: {
            en: "<p>Each middleware wraps the next: it runs before <code>next()</code> on the way in and after it on the way out, so the exit order is the reverse of the entry order.</p>",
            hi: "<p>हर middleware अगले को लपेटता है: <code>next()</code> से पहले का हिस्सा अंदर जाते समय और बाद का हिस्सा बाहर आते समय चलता है, इसलिए बाहर आने का क्रम अंदर जाने के क्रम का उल्टा होता है।</p>",
            hg: "<p>Har middleware agle ko lapetta hai: <code>next()</code> se pehle ka hissa andar jaate samay aur baad ka hissa bahar aate samay chalta hai, isliye bahar aane ka kram andar jaane ke kram ka ulta hota hai.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>IHttpModule</code> becomes middleware; <code>Application_Start</code>/<code>End</code> become lifetime events; handlers become endpoints.</li><li>Before <code>next()</code> = way in; after <code>next()</code> = way out, in reverse order.</li><li>Ask what the module did before porting it; Core may already do it.</li></ul>",
          hi: "<ul><li><code>IHttpModule</code> बनता है middleware; <code>Application_Start</code>/<code>End</code> बनते हैं lifetime events; handlers बनते हैं endpoints।</li><li><code>next()</code> से पहले = अंदर का रास्ता; <code>next()</code> के बाद = बाहर का रास्ता, उल्टे क्रम में।</li><li>Port करने से पहले पूछो कि module क्या करता था; हो सकता है Core पहले से करता हो।</li></ul>",
          hg: "<ul><li><code>IHttpModule</code> banta hai middleware; <code>Application_Start</code>/<code>End</code> bante hain lifetime events; handlers bante hain endpoints.</li><li><code>next()</code> se pehle = andar ka raasta; <code>next()</code> ke baad = bahar ka raasta, ulte kram mein.</li><li>Port karne se pehle poochho ki module kya karta tha; ho sakta hai Core pehle se karta ho.</li></ul>"
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
            en: "A correlation-id module as middleware, plus start and stop events",
            hi: "Correlation-id module, middleware के रूप में, और start व stop events",
            hg: "Correlation-id module, middleware ke roop mein, aur start va stop events"
          },
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nvar app = builder.Build();\n\n// Global.asax Application_Start becomes a host lifetime event (Application_End: ApplicationStopping).\napp.Lifetime.ApplicationStarted.Register(() => Console.WriteLine(\"Application_Start -> ApplicationStarted\"));\n\n// CorrelationModule (IHttpModule, BeginRequest) becomes middleware.\napp.Use(async (context, next) =>\n{\n    var id = context.Request.Headers[\"X-Correlation-Id\"].FirstOrDefault() ?? Guid.NewGuid().ToString(\"N\");\n    context.Items[\"CorrelationId\"] = id;\n    context.Response.Headers[\"X-Correlation-Id\"] = id;   // set before the body starts\n    await next();\n});\n\napp.MapGet(\"/tickets/{id:int}\", (int id, HttpContext context) =>\n    $\"Ticket {id}, correlation {context.Items[\"CorrelationId\"]}\");\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\n\nvar request = new HttpRequestMessage(HttpMethod.Get, \"/tickets/501\");\nrequest.Headers.Add(\"X-Correlation-Id\", \"crm-77\");\nvar first = await client.SendAsync(request);\nConsole.WriteLine(await first.Content.ReadAsStringAsync());\nConsole.WriteLine(\"header: \" + first.Headers.GetValues(\"X-Correlation-Id\").Single());\n\nvar second = await client.GetAsync(\"/tickets/502\");\nConsole.WriteLine(\"generated id length: \" + second.Headers.GetValues(\"X-Correlation-Id\").Single().Length);\nawait app.StopAsync();",
          check: "run",
          expected: "Application_Start -> ApplicationStarted\nTicket 501, correlation crm-77\nheader: crm-77\ngenerated id length: 32"
        }
      ]
    },
    {
      id: "webconfig-to-appsettings",
      depth: "short",
      title: {
        en: "web.config to appsettings.json and IConfiguration",
        hi: "web.config से appsettings.json और IConfiguration",
        hg: "web.config se appsettings.json aur IConfiguration"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 4 moved code around requests. Its settings (SLA hours, email, connection string) lived in <code>web.config</code>; now they move to the configuration system from Day 12.",
          hi: "पाठ 4 में request के आस-पास का code गया। उसकी settings (SLA घंटे, email, connection string) <code>web.config</code> में थीं; अब वे Day 12 वाले configuration system में जाती हैं।",
          hg: "Lesson 4 mein request ke aas-paas ka code gaya. Uski settings (SLA ghante, email, connection string) <code>web.config</code> mein thin; ab woh Day 12 wale configuration system mein jaati hain."
        },
        what: {
          en: "<p><code>web.config</code> held everything in one XML file: <code>&lt;appSettings&gt;</code>, <code>&lt;connectionStrings&gt;</code>, session settings and IIS settings, with per-environment <b>transforms</b> (<code>web.Release.config</code>). ASP.NET Core builds configuration from <b>layers</b>: <code>appsettings.json</code>, <code>appsettings.{Environment}.json</code>, environment variables, secrets. A later layer wins. You bind a section to a typed <b>options</b> class.</p>",
          hi: "<p><code>web.config</code> सब कुछ एक XML file में रखता था: <code>&lt;appSettings&gt;</code>, <code>&lt;connectionStrings&gt;</code>, session settings और IIS settings, और हर environment के लिए <b>transforms</b> (<code>web.Release.config</code>)। ASP.NET Core configuration <b>परतों</b> (layers) से बनाता है: <code>appsettings.json</code>, <code>appsettings.{Environment}.json</code>, environment variables, secrets। बाद वाली परत जीतती है। एक section को typed <b>options</b> class से bind करते हैं।</p>",
          hg: "<p><code>web.config</code> sab kuch ek XML file mein rakhta tha: <code>&lt;appSettings&gt;</code>, <code>&lt;connectionStrings&gt;</code>, session settings aur IIS settings, aur har environment ke liye <b>transforms</b> (<code>web.Release.config</code>). ASP.NET Core configuration <b>parton</b> (layers) se banata hai: <code>appsettings.json</code>, <code>appsettings.{Environment}.json</code>, environment variables, secrets. Baad wali parat jeetti hai. Ek section ko typed <b>options</b> class se bind karte hain.</p>"
        },
        why: {
          en: "<p>The same build must run in dev, test and production with different values, and passwords must not sit in source control. Layers give you that without editing files on the server, and validation on start stops a bad value from reaching customers.</p>",
          hi: "<p>एक ही build को dev, test और production में अलग values के साथ चलना है, और passwords source control में नहीं बैठने चाहिए। Layers यह बिना server पर file बदले देती हैं, और start पर validation ग़लत value को customers तक पहुँचने से रोकती है।</p>",
          hg: "<p>Ek hi build ko dev, test aur production mein alag values ke saath chalna hai, aur passwords source control mein nahi baithne chahiye. Layers ye bina server par file badle deti hain, aur start par validation galat value ko customers tak pahunchne se rokti hai.</p>"
        },
        analogy: {
          en: "<p><code>web.config</code> is one big notice board at the office gate holding everything: room numbers, rules, passwords. The new way is a small folder per environment, with the password kept in a locker (user-secrets or Key Vault), and the folder on the server can override the default one.</p>",
          hi: "<p><code>web.config</code> दफ़्तर के gate पर लगा एक बड़ा notice board है जिस पर सब कुछ चिपका है: कमरे के नंबर, नियम, passwords। नया तरीक़ा हर environment के लिए एक छोटा folder है, password locker में (user-secrets या Key Vault), और server वाला folder default वाले को बदल सकता है।</p>",
          hg: "<p><code>web.config</code> daftar ke gate par laga ek bada notice board hai jis par sab kuch chipka hai: kamre ke number, niyam, passwords. Naya tareeka har environment ke liye ek chhota folder hai, password locker mein (user-secrets ya Key Vault), aur server wala folder default wale ko badal sakta hai.</p>"
        },
        focus: {
          caption: {
            en: "The old web.config (.NET Framework, not compiled here)",
            hi: "पुरानी web.config (.NET Framework, यहाँ compile नहीं होती)",
            hg: "Purani web.config (.NET Framework, yahan compile nahi hoti)"
          },
          src: "<!-- web.config — .NET Framework. Not compiled here. -->\n<configuration>\n  <appSettings>\n    <add key=\"Crm:SlaHours\" value=\"24\" />\n    <add key=\"Crm:SupportEmail\" value=\"care@example.test\" />\n    <add key=\"Crm:SmsApiKey\" value=\"DO-NOT-COMMIT-A-REAL-KEY\" />   <!-- secret in source control: avoid -->\n  </appSettings>\n  <connectionStrings>\n    <add name=\"Crm\" connectionString=\"Server=.;Database=Crm;Integrated Security=true\" />\n  </connectionStrings>\n</configuration>",
          check: "none",
          lang: "text"
        },
        lines: [
          {
            code: "Environment.SetEnvironmentVariable(\"Crm__SlaHours\", \"8\");",
            note: {
              en: "Environment variables use a double underscore for the colon, so <code>Crm__SlaHours</code> means <code>Crm:SlaHours</code>. Normally the server sets this, not your code.",
              hi: "Environment variables में colon की जगह double underscore लगता है, यानी <code>Crm__SlaHours</code> का मतलब <code>Crm:SlaHours</code>। आम तौर पर यह server set करता है, आपका code नहीं।",
              hg: "Environment variables mein colon ki jagah double underscore lagta hai, yaani <code>Crm__SlaHours</code> ka matlab <code>Crm:SlaHours</code>. Aam taur par ye server set karta hai, aapka code nahi."
            }
          },
          {
            code: "builder.Configuration.AddEnvironmentVariables();",
            note: {
              en: "Added after the JSON layer, so the server's value (8) wins over the file's (24). This is what replaces config transforms.",
              hi: "JSON परत के बाद जोड़ा गया, इसलिए server की value (8) file की value (24) पर जीतती है। यही config transforms की जगह लेता है।",
              hg: "JSON parat ke baad joda gaya, isliye server ki value (8) file ki value (24) par jeetti hai. Yahi config transforms ki jagah leta hai."
            }
          },
          {
            code: ".BindConfiguration(\"Crm\")",
            note: {
              en: "Binds <code>Crm</code> to <code>CrmOptions</code>, validated at start (Day 11). Code reads <code>SlaHours</code> as an int; <code>ConfigurationManager.AppSettings</code> gave a string.",
              hi: "<code>Crm</code> को <code>CrmOptions</code> से bind करता है, start पर validate (Day 11)। Code <code>SlaHours</code> को int की तरह पढ़ता है; <code>ConfigurationManager.AppSettings</code> string देता था।",
              hg: "<code>Crm</code> ko <code>CrmOptions</code> se bind karta hai, start par validate (Day 11). Code <code>SlaHours</code> ko int ki tarah padhta hai; <code>ConfigurationManager.AppSettings</code> string deta tha."
            }
          },
          {
            code: "Console.WriteLine(app.Configuration.GetConnectionString(\"Crm\"));",
            note: {
              en: "<code>GetConnectionString(\"Crm\")</code> reads <code>ConnectionStrings:Crm</code>, the new home of the old <code>&lt;connectionStrings&gt;</code> entry.",
              hi: "<code>GetConnectionString(\"Crm\")</code> <code>ConnectionStrings:Crm</code> पढ़ता है, जो पुरानी <code>&lt;connectionStrings&gt;</code> entry का नया घर है।",
              hg: "<code>GetConnectionString(\"Crm\")</code> <code>ConnectionStrings:Crm</code> padhta hai, jo purani <code>&lt;connectionStrings&gt;</code> entry ka naya ghar hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Copying secrets such as <code>SmsApiKey</code> into <code>appsettings.json</code> in source control, as the old <code>web.config</code> often did. Use user-secrets, environment variables or Key Vault.</li><li>Expecting <code>ConfigurationManager.AppSettings</code> to read <code>appsettings.json</code>. It does not; read <code>IConfiguration</code> or options instead.</li></ul>",
          hi: "<ul><li><code>SmsApiKey</code> जैसे secrets को source control वाली <code>appsettings.json</code> में डाल देना, जैसा पुरानी <code>web.config</code> में अक्सर होता था। user-secrets, environment variables या Key Vault इस्तेमाल करो।</li><li>यह उम्मीद करना कि <code>ConfigurationManager.AppSettings</code> <code>appsettings.json</code> पढ़ेगा। नहीं पढ़ता; <code>IConfiguration</code> या options पढ़ो।</li></ul>",
          hg: "<ul><li><code>SmsApiKey</code> jaise secrets ko source control wali <code>appsettings.json</code> mein daal dena, jaisa purani <code>web.config</code> mein aksar hota tha. user-secrets, environment variables ya Key Vault use karo.</li><li>Ye ummeed karna ki <code>ConfigurationManager.AppSettings</code> <code>appsettings.json</code> padhega. Nahi padhta; <code>IConfiguration</code> ya options padho.</li></ul>"
        },
        whenToUse: {
          en: "<p>Move every appSetting and connection string to configuration, and bind each group to an options class with validation. <code>web.config</code> still exists for IIS hosting settings, but not for app settings.</p>",
          hi: "<p>हर appSetting और connection string को configuration में ले जाओ, और हर group को validation वाली options class से bind करो। <code>web.config</code> IIS hosting settings के लिए अब भी रहती है, पर app settings के लिए नहीं।</p>",
          hg: "<p>Har appSetting aur connection string ko configuration mein le jao, aur har group ko validation wali options class se bind karo. <code>web.config</code> IIS hosting settings ke liye ab bhi rehti hai, par app settings ke liye nahi.</p>"
        },
        exercise: {
          task: {
            en: "<p>Read a new setting <code>Crm:MaxOpenTickets</code> (set to <code>30</code>) and a missing setting <code>Crm:MaxAgents</code> with a default of <code>50</code>. Print both numbers.</p>",
            hi: "<p>एक नई setting <code>Crm:MaxOpenTickets</code> (value <code>30</code>) पढ़ो और एक ग़ायब setting <code>Crm:MaxAgents</code> जिसका default <code>50</code> हो। दोनों numbers print करो।</p>",
            hg: "<p>Ek nayi setting <code>Crm:MaxOpenTickets</code> (value <code>30</code>) padho aur ek gaayab setting <code>Crm:MaxAgents</code> jiska default <code>50</code> ho. Dono numbers print karo.</p>"
          },
          hint: {
            en: "<p><code>GetValue&lt;int&gt;(key, default)</code> returns the default when the key is missing.</p>",
            hi: "<p>Key न मिले तो <code>GetValue&lt;int&gt;(key, default)</code> default लौटाता है।</p>",
            hg: "<p>Key na mile to <code>GetValue&lt;int&gt;(key, default)</code> default lautaata hai.</p>"
          },
          solution: {
            frameworks: [
              "aspnetcore"
            ],
            caption: {
              en: "Solution: GetValue with a default",
              hi: "हल: default के साथ GetValue",
              hg: "Solution: default ke saath GetValue"
            },
            src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.Configuration;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Configuration.AddInMemoryCollection(new Dictionary<string, string?>\n{\n    [\"Crm:MaxOpenTickets\"] = \"30\"\n});\n\n// GetValue falls back to the default when the key is missing.\nConsole.WriteLine(builder.Configuration.GetValue<int>(\"Crm:MaxOpenTickets\", 50));\nConsole.WriteLine(builder.Configuration.GetValue<int>(\"Crm:MaxAgents\", 50));",
            check: "run",
            expected: "30\n50"
          }
        },
        quiz: {
          q: {
            en: "The JSON file says <code>SlaHours</code> is 24 and the server has the environment variable <code>Crm__SlaHours=8</code>. Which value does the app read?",
            hi: "JSON file में <code>SlaHours</code> 24 है और server पर environment variable <code>Crm__SlaHours=8</code> है। App कौन-सी value पढ़ेगी?",
            hg: "JSON file mein <code>SlaHours</code> 24 hai aur server par environment variable <code>Crm__SlaHours=8</code> hai. App kaunsi value padhegi?"
          },
          options: [
            {
              en: "24, because the file is always the source of truth",
              hi: "24, क्योंकि file ही हमेशा असली source है",
              hg: "24, kyunki file hi hamesha sahi source hai"
            },
            {
              en: "8, because the environment variables layer is added after the JSON file",
              hi: "8, क्योंकि environment variables की परत JSON file के बाद जुड़ती है",
              hg: "8, kyunki environment variables ki parat JSON file ke baad judti hai"
            },
            {
              en: "It throws, because the same key cannot appear twice",
              hi: "Exception आएगी, क्योंकि एक ही key दो बार नहीं आ सकती",
              hg: "Exception aayegi, kyunki ek hi key do baar nahi aa sakti"
            }
          ],
          answer: 1,
          explain: {
            en: "<p>Configuration sources are layered and the last one wins. That is why a server can change a value without touching the deployed files.</p>",
            hi: "<p>Configuration sources परतों में होते हैं और आख़िरी वाला जीतता है। इसीलिए server deploy की हुई files छुए बिना value बदल सकता है।</p>",
            hg: "<p>Configuration sources parton mein hote hain aur aakhri wala jeetta hai. Isiliye server deploy ki hui files chhue bina value badal sakta hai.</p>"
          }
        },
        recap: {
          en: "<ul><li><code>appSettings</code> and <code>connectionStrings</code> become configuration layers; the last layer wins.</li><li>Bind sections to typed options and add <code>ValidateOnStart</code>.</li><li>Secrets go to user-secrets, environment variables or Key Vault, never to the repo.</li></ul>",
          hi: "<ul><li><code>appSettings</code> और <code>connectionStrings</code> बनते हैं configuration की परतें; आख़िरी परत जीतती है।</li><li>Sections को typed options से bind करो और <code>ValidateOnStart</code> लगाओ।</li><li>Secrets user-secrets, environment variables या Key Vault में जाते हैं, repo में कभी नहीं।</li></ul>",
          hg: "<ul><li><code>appSettings</code> aur <code>connectionStrings</code> bante hain configuration ki parten; aakhri parat jeetti hai.</li><li>Sections ko typed options se bind karo aur <code>ValidateOnStart</code> lagao.</li><li>Secrets user-secrets, environment variables ya Key Vault mein jaate hain, repo mein kabhi nahi.</li></ul>"
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
            en: "Configuration layers and typed, validated options",
            hi: "Configuration की परतें और typed, validated options",
            hg: "Configuration ki parten aur typed, validated options"
          },
          src: "using System.ComponentModel.DataAnnotations;\nusing System.Text;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.Extensions.Options;\n\nEnvironment.SetEnvironmentVariable(\"Crm__SlaHours\", \"8\");   // like setting it on the server\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\n\n// Stand-in for appsettings.json (the old <appSettings> and <connectionStrings> in one file).\nvar json = \"\"\"\n{ \"Crm\": { \"SlaHours\": 24, \"SupportEmail\": \"care@example.test\" },\n  \"ConnectionStrings\": { \"Crm\": \"Data Source=crm.db\" } }\n\"\"\";\nbuilder.Configuration.AddJsonStream(new MemoryStream(Encoding.UTF8.GetBytes(json)));\nbuilder.Configuration.AddEnvironmentVariables();   // added last, so the server's value wins\n\nbuilder.Services.AddOptions<CrmOptions>()\n    .BindConfiguration(\"Crm\")\n    .ValidateDataAnnotations()\n    .ValidateOnStart();\nvar app = builder.Build();\n\napp.MapGet(\"/sla\", (IOptions<CrmOptions> options) =>\n    $\"SLA {options.Value.SlaHours}h, mail {options.Value.SupportEmail}\");\n\nawait app.StartAsync();\nConsole.WriteLine(await app.GetTestClient().GetStringAsync(\"/sla\"));\nConsole.WriteLine(app.Configuration.GetConnectionString(\"Crm\"));\nawait app.StopAsync();\n\npublic class CrmOptions\n{\n    [Range(1, 72)] public int SlaHours { get; init; } = 24;\n    [Required] public string SupportEmail { get; init; } = \"\";\n}",
          check: "run",
          expected: "SLA 8h, mail care@example.test\nData Source=crm.db"
        }
      ]
    },
    {
      id: "httpcontext-current",
      depth: "short",
      title: {
        en: "HttpContext.Current and Session: pass it in",
        hi: "HttpContext.Current और Session: parameter से दो",
        hg: "HttpContext.Current aur Session: parameter se do"
      },
      lesson: {
        buildsOn: {
          en: "Lesson 5 turned global settings into injected options. <code>HttpContext.Current</code> is the same problem for the current request: a global anyone can grab.",
          hi: "पाठ 5 में global settings injected options बन गईं। <code>HttpContext.Current</code> मौजूदा request के लिए वही समस्या है: एक global जिसे कोई भी पकड़ सकता है।",
          hg: "Lesson 5 mein global settings injected options ban gayin. <code>HttpContext.Current</code> maujooda request ke liye wahi samasya hai: ek global jise koi bhi pakad sakta hai."
        },
        what: {
          en: "<p><code>HttpContext.Current</code> was a static property that gave any class the current request, user and <code>Session</code>. ASP.NET Core has <b>no such static</b>. Best fix: pass what you need (user, ticket id) as parameters. If you cannot yet, register <code>IHttpContextAccessor</code> and inject it. <code>Session[\"x\"]</code> becomes a different API (<code>AddSession</code>, <code>UseSession</code>, backed by a distributed cache).</p>",
          hi: "<p><code>HttpContext.Current</code> एक static property थी जो किसी भी class को मौजूदा request, user और <code>Session</code> देती थी। ASP.NET Core में <b>ऐसी कोई static नहीं</b> है। सबसे अच्छा हल: जो चाहिए (user, ticket id) उसे parameters से दो। अभी न कर सको तो <code>IHttpContextAccessor</code> register करके inject करो। <code>Session[\"x\"]</code> एक अलग API बन जाता है (<code>AddSession</code>, <code>UseSession</code>, distributed cache के साथ)।</p>",
          hg: "<p><code>HttpContext.Current</code> ek static property thi jo kisi bhi class ko maujooda request, user aur <code>Session</code> deti thi. ASP.NET Core mein <b>aisi koi static nahi</b> hai. Sabse achha hal: jo chahiye (user, ticket id) use parameters se do. Abhi na kar sako to <code>IHttpContextAccessor</code> register karke inject karo. <code>Session[\"x\"]</code> ek alag API ban jaata hai (<code>AddSession</code>, <code>UseSession</code>, distributed cache ke saath).</p>"
        },
        why: {
          en: "<p>A hidden dependency on the web layer makes code hard to test and breaks in background jobs, where there is no request. Passing the value in makes the dependency visible, and the class works from a unit test, a queue worker or a web request alike.</p>",
          hi: "<p>Web layer पर छिपी dependency code को test करना मुश्किल बनाती है और background jobs में टूटती है, जहाँ कोई request नहीं होती। Value को अंदर पास करने से dependency दिखने लगती है, और class unit test, queue worker या web request, तीनों से चलती है।</p>",
          hg: "<p>Web layer par chhupi dependency code ko test karna mushkil banati hai aur background jobs mein tootti hai, jahan koi request nahi hoti. Value ko andar pass karne se dependency dikhne lagti hai, aur class unit test, queue worker ya web request, teeno se chalti hai.</p>"
        },
        analogy: {
          en: "<p>An office with one common rubber stamp in the manager's drawer: anyone can grab it, nobody knows who stamped what, and it is missing at night. The new way: you hand the stamp to the person who needs it for this one file.</p>",
          hi: "<p>एक दफ़्तर जिसमें manager की दराज़ में एक common रबर की मुहर है: कोई भी उठा सकता है, किसने कहाँ मुहर लगाई कोई नहीं जानता, और रात को वह मिलती नहीं। नया तरीक़ा: जिसे इस एक file के लिए चाहिए, उसके हाथ में मुहर दो।</p>",
          hg: "<p>Ek daftar jismein manager ki daraaz mein ek common rubber ki muhar hai: koi bhi utha sakta hai, kisne kahan muhar lagayi koi nahi jaanta, aur raat ko woh milti nahi. Naya tareeka: jise is ek file ke liye chahiye, uske haath mein muhar do.</p>"
        },
        focus: {
          caption: {
            en: "The static helper everyone called (.NET Framework, not compiled here)",
            hi: "वह static helper जिसे सब call करते थे (.NET Framework, यहाँ compile नहीं होता)",
            hg: "Wo static helper jise sab call karte the (.NET Framework, yahan compile nahi hota)"
          },
          src: "// TicketAssigner.cs — .NET Framework, System.Web. Not compiled here.\npublic static class TicketAssigner\n{\n    public static string Assign(int ticketId)\n    {\n        var agent = HttpContext.Current.User.Identity.Name;     // global: null reference outside a request\n        HttpContext.Current.Session[\"LastTicket\"] = ticketId;   // session state, in-process by default\n        return \"Ticket \" + ticketId + \" assigned to \" + agent;\n    }\n}",
          check: "none"
        },
        lines: [
          {
            code: "app.MapPost(\"/tickets/{id:int}/assign\", (int id, ClaimsPrincipal user, TicketAssigner assigner) =>",
            note: {
              en: "The user is a <b>parameter of the endpoint</b>. The framework fills <code>ClaimsPrincipal</code> from the request, so no global is needed.",
              hi: "User <b>endpoint का parameter</b> है। Framework <code>ClaimsPrincipal</code> को request से भरता है, इसलिए किसी global की ज़रूरत नहीं।",
              hg: "User <b>endpoint ka parameter</b> hai. Framework <code>ClaimsPrincipal</code> ko request se bharta hai, isliye kisi global ki zaroorat nahi."
            }
          },
          {
            code: "public string Assign(int ticketId, string agent) => $\"Ticket {ticketId} assigned to {agent}\";",
            note: {
              en: "The service gets plain values and knows nothing about HTTP. A unit test can call <code>Assign(501, \"Kiran\")</code> directly.",
              hi: "Service को सादी values मिलती हैं और उसे HTTP के बारे में कुछ पता नहीं। Unit test सीधे <code>Assign(501, \"Kiran\")</code> call कर सकता है।",
              hg: "Service ko saadi values milti hain aur use HTTP ke baare mein kuch pata nahi. Unit test seedhe <code>Assign(501, \"Kiran\")</code> call kar sakta hai."
            }
          },
          {
            code: "public class AuditHelper(IHttpContextAccessor accessor)",
            note: {
              en: "The bridge: old code that cannot take a parameter yet reads the user through the accessor. It is a temporary compromise.",
              hi: "पुल: जो पुराना code अभी parameter नहीं ले सकता, वह accessor से user पढ़ता है। यह कुछ समय का समझौता है।",
              hg: "Pul: jo purana code abhi parameter nahi le sakta, woh accessor se user padhta hai. Ye kuch samay ka samjhauta hai."
            }
          },
          {
            code: "public string CurrentUser() => accessor.HttpContext?.User.Identity?.Name ?? \"no-request\";",
            note: {
              en: "<code>HttpContext</code> is <b>null</b> outside a request (background job, hosted service), so always check. The last output line shows this.",
              hi: "<code>Request</code> के बाहर <code>HttpContext</code> <b>null</b> होता है (background job, hosted service), इसलिए हमेशा जाँचो। आख़िरी output line यही दिखाती है।",
              hg: "Request ke bahar <code>HttpContext</code> <b>null</b> hota hai (background job, hosted service), isliye hamesha jaancho. Aakhri output line yahi dikhati hai."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Using <code>IHttpContextAccessor</code> in new code. It hides a dependency on the web layer and returns null in background work.</li><li>Moving Session as is. The API differs, in-process session is lost on restart and is not shared between servers; plan a distributed cache, or a token or cookie with minimal data.</li></ul>",
          hi: "<ul><li>नए code में <code>IHttpContextAccessor</code> इस्तेमाल करना। यह web layer की dependency छिपाता है और background काम में null देता है।</li><li>Session को जैसा है वैसा ले जाना। API अलग है, in-process session restart पर खो जाता है और servers के बीच share नहीं होता; distributed cache, या कम से कम data वाला token या cookie plan करो।</li></ul>",
          hg: "<ul><li>Naye code mein <code>IHttpContextAccessor</code> use karna. Ye web layer par dependency chhupata hai aur background kaam mein null deta hai.</li><li>Session ko jaisa hai waisa le jaana. API alag hai, in-process session restart par kho jaata hai aur servers ke beech share nahi hota; distributed cache, ya kam se kam data wala token ya cookie plan karo.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use <code>IHttpContextAccessor</code> only for a library you cannot change yet, during migration. In all new code, pass values in. During an incremental migration the System.Web adapters can share session and authentication between the old and the new app (lesson 7).</p>",
          hi: "<p><code>IHttpContextAccessor</code> सिर्फ़ उस library के लिए इस्तेमाल करो जिसे आप अभी बदल नहीं सकते, migration के दौरान। सारे नए code में values अंदर पास करो। Incremental migration में System.Web adapters पुरानी और नई app के बीच session और authentication share कर सकते हैं (पाठ 7)।</p>",
          hg: "<p><code>IHttpContextAccessor</code> sirf us library ke liye use karo jise aap abhi badal nahi sakte, migration ke dauran. Saare naye code mein values andar pass karo. Incremental migration mein System.Web adapters purani aur nayi app ke beech session aur authentication share kar sakte hain (lesson 7).</p>"
        },
        exercise: {
          task: {
            en: "<p>Write a unit-test-style call: create <code>TicketAssigner</code> with no web server at all and print the assignment of ticket <code>502</code> to <code>Kiran</code>.</p>",
            hi: "<p>Unit-test जैसी call लिखो: web server के बिना <code>TicketAssigner</code> बनाओ और ticket <code>502</code> का <code>Kiran</code> को assign होना print करो।</p>",
            hg: "<p>Unit-test jaisi call likho: web server ke bina <code>TicketAssigner</code> banao aur ticket <code>502</code> ka <code>Kiran</code> ko assign hona print karo.</p>"
          },
          hint: {
            en: "<p>The class needs no <code>HttpContext</code>, so <code>new TicketAssigner().Assign(502, \"Kiran\")</code> is enough.</p>",
            hi: "<p>Class को <code>HttpContext</code> नहीं चाहिए, इसलिए <code>new TicketAssigner().Assign(502, \"Kiran\")</code> काफ़ी है।</p>",
            hg: "<p>Class ko <code>HttpContext</code> nahi chahiye, isliye <code>new TicketAssigner().Assign(502, \"Kiran\")</code> kaafi hai.</p>"
          },
          solution: {
            caption: {
              en: "Solution: no HttpContext needed",
              hi: "हल: HttpContext की ज़रूरत नहीं",
              hg: "Solution: HttpContext ki zaroorat nahi"
            },
            src: "var assigner = new TicketAssigner();\nConsole.WriteLine(assigner.Assign(502, \"Kiran\"));   // no web server, no HttpContext needed\n\npublic class TicketAssigner\n{\n    public string Assign(int ticketId, string agent) => $\"Ticket {ticketId} assigned to {agent}\";\n}",
            check: "run",
            expected: "Ticket 502 assigned to Kiran"
          }
        },
        quiz: {
          q: {
            en: "What is the best replacement for <code>HttpContext.Current.User</code> in new ASP.NET Core code?",
            hi: "नए ASP.NET Core code में <code>HttpContext.Current.User</code> की सबसे अच्छी जगह क्या है?",
            hg: "Naye ASP.NET Core code mein <code>HttpContext.Current.User</code> ki sabse achhi jagah kya hai?"
          },
          options: [
            {
              en: "Inject <code>IHttpContextAccessor</code> into every class",
              hi: "हर class में <code>IHttpContextAccessor</code> inject करो",
              hg: "Har class mein <code>IHttpContextAccessor</code> inject karo"
            },
            {
              en: "Store it in a static field when the request starts",
              hi: "Request शुरू होते ही उसे static field में रख दो",
              hg: "Request shuru hote hi use static field mein rakh do"
            },
            {
              en: "Pass the user (or its name) in as a parameter",
              hi: "User (या उसका नाम) parameter से पास करो",
              hg: "User (ya uska naam) parameter se pass karo"
            }
          ],
          answer: 2,
          explain: {
            en: "<p>A static would be shared by all requests and mix up users. The accessor works but hides the web dependency and fails outside a request. A parameter is visible, testable and safe.</p>",
            hi: "<p>Static सब requests में share होगा और users आपस में गड़बड़ा जाएँगे। Accessor चलता है पर web dependency छिपाता है और request के बाहर fail होता है। Parameter दिखता है, test हो सकता है और सुरक्षित है।</p>",
            hg: "<p>Static sab requests mein share hoga aur users aapas mein gadbada jaayenge. Accessor chalta hai par web dependency chhupata hai aur request ke bahar fail hota hai. Parameter dikhta hai, test ho sakta hai aur surakshit hai.</p>"
          }
        },
        recap: {
          en: "<ul><li>No <code>HttpContext.Current</code> in Core: pass the user or ids as parameters.</li><li><code>IHttpContextAccessor</code> is a last-resort bridge; it is null outside a request.</li><li>Session has a new API and needs a shared store; plan its end state early.</li></ul>",
          hi: "<ul><li>Core में <code>HttpContext.Current</code> नहीं: user या ids parameters से पास करो।</li><li><code>IHttpContextAccessor</code> आख़िरी उपाय वाला पुल है; request के बाहर null होता है।</li><li>Session का नया API है और उसे shared store चाहिए; उसका end state पहले से सोचो।</li></ul>",
          hg: "<ul><li>Core mein <code>HttpContext.Current</code> nahi: user ya ids parameters se pass karo.</li><li><code>IHttpContextAccessor</code> aakhri upaay wala pul hai; request ke bahar null hota hai.</li><li>Session ka naya API hai aur use shared store chahiye; uska end state pehle se socho.</li></ul>"
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
            en: "The current agent as a parameter, and the accessor as a bridge",
            hi: "मौजूदा agent parameter के रूप में, और accessor पुल के रूप में",
            hg: "Maujooda agent parameter ke roop mein, aur accessor pul ke roop mein"
          },
          src: "using System.Security.Claims;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Logging;\n\nvar builder = WebApplication.CreateBuilder();\nbuilder.Logging.ClearProviders();\nbuilder.WebHost.UseTestServer();\nbuilder.Services.AddHttpContextAccessor();          // opt-in: not registered by default\nbuilder.Services.AddSingleton<TicketAssigner>();\nbuilder.Services.AddSingleton<AuditHelper>();\nvar app = builder.Build();\n\n// Stand-in for real authentication: the X-Agent header becomes the current user.\napp.Use(async (context, next) =>\n{\n    var agent = context.Request.Headers[\"X-Agent\"].ToString();\n    if (agent != \"\")\n        context.User = new ClaimsPrincipal(new ClaimsIdentity([new Claim(ClaimTypes.Name, agent)], \"demo\"));\n    await next();\n});\n\n// The user is a parameter, not a global: no HttpContext.Current.\napp.MapPost(\"/tickets/{id:int}/assign\", (int id, ClaimsPrincipal user, TicketAssigner assigner) =>\n    assigner.Assign(id, user.Identity?.Name ?? \"nobody\"));\napp.MapGet(\"/audit\", (AuditHelper helper) => helper.CurrentUser());\n\nawait app.StartAsync();\nvar client = app.GetTestClient();\nclient.DefaultRequestHeaders.Add(\"X-Agent\", \"Meena\");\n\nConsole.WriteLine(await (await client.PostAsync(\"/tickets/501/assign\", null)).Content.ReadAsStringAsync());\nConsole.WriteLine(\"Bridge inside a request: \" + await client.GetStringAsync(\"/audit\"));\nConsole.WriteLine(\"Bridge outside a request: \" + app.Services.GetRequiredService<AuditHelper>().CurrentUser());\nawait app.StopAsync();\n\n// Needs no HttpContext, so a unit test can call Assign(501, \"Kiran\") directly.\npublic class TicketAssigner\n{\n    public string Assign(int ticketId, string agent) => $\"Ticket {ticketId} assigned to {agent}\";\n}\n\n// TEMPORARY bridge for code you cannot change yet. HttpContext is null outside a request.\npublic class AuditHelper(IHttpContextAccessor accessor)\n{\n    public string CurrentUser() => accessor.HttpContext?.User.Identity?.Name ?? \"no-request\";\n}",
          check: "run",
          expected: "Ticket 501 assigned to Meena\nBridge inside a request: Meena\nBridge outside a request: no-request"
        }
      ]
    },
    {
      id: "strangler-routing",
      depth: "short",
      title: {
        en: "Strangler fig: decide route by route",
        hi: "Strangler fig: route-दर-route तय करो",
        hg: "Strangler fig: route-dar-route tay karo"
      },
      lesson: {
        buildsOn: {
          en: "Lessons 1 to 6 moved single pieces. A live CRM cannot move all at once, so a new app goes in front and each URL is routed to the old or the new app.",
          hi: "पाठ 1 से 6 में अलग-अलग हिस्से गए। चालू CRM सब कुछ एक साथ नहीं ले जा सकता, इसलिए नई app आगे लगती है और हर URL पुरानी या नई app को भेजा जाता है।",
          hg: "Lessons 1 se 6 mein alag-alag hisse gaye. Chalu CRM sab kuch ek saath nahi le ja sakta, isliye nayi app aage lagti hai aur har URL purani ya nayi app ko bheja jaata hai."
        },
        what: {
          en: "<p>The <b>strangler fig</b> pattern: the new app stands in front, each route that is ready is served by the new app, and everything else is forwarded to the old app. Microsoft recommends this <b>incremental migration</b> for large apps. Tools: <b>YARP</b> (a reverse proxy library) does the forwarding, and the <b>System.Web adapters</b> (<code>Microsoft.AspNetCore.SystemWebAdapters</code>) let shared libraries keep using <code>System.Web.HttpContext</code> APIs on Core, and let the new app share session and authentication with the old one.</p>",
          hi: "<p><b>Strangler fig</b> pattern: नई app आगे खड़ी होती है, जो route तैयार है उसे नई app जवाब देती है, और बाक़ी सब पुरानी app को forward हो जाता है। Microsoft बड़ी apps के लिए यही <b>incremental migration</b> सुझाता है। Tools: <b>YARP</b> (एक reverse proxy library) forwarding करता है, और <b>System.Web adapters</b> (<code>Microsoft.AspNetCore.SystemWebAdapters</code>) shared libraries को Core पर भी <code>System.Web.HttpContext</code> APIs इस्तेमाल करने देते हैं, और नई app को पुरानी app के साथ session और authentication share करने देते हैं।</p>",
          hg: "<p><b>Strangler fig</b> pattern: nayi app aage khadi hoti hai, jo route taiyaar hai use nayi app jawaab deti hai, aur baaki sab purani app ko forward ho jaata hai. Microsoft badi apps ke liye yahi <b>incremental migration</b> sujhata hai. Tools: <b>YARP</b> (ek reverse proxy library) forwarding karta hai, aur <b>System.Web adapters</b> (<code>Microsoft.AspNetCore.SystemWebAdapters</code>) shared libraries ko Core par bhi <code>System.Web.HttpContext</code> APIs use karne dete hain, aur nayi app ko purani app ke saath session aur authentication share karne dete hain.</p>"
        },
        why: {
          en: "<p>A big-bang rewrite stops feature work for months and is hard to roll back. With routes you move one slice, watch it, and switch back if it fails. <b>Done</b> means the old app gets no traffic.</p><p>Quote facts carefully: .NET Framework 4.8.1 is the last version and is supported as part of Windows, so migrate for features, cost and hiring, not panic.</p>",
          hi: "<p>Big-bang rewrite महीनों तक feature काम रोक देता है और वापस लौटना मुश्किल होता है। Routes से एक टुकड़ा ले जाओ, देखो, और fail हो तो वापस कर दो। <b>पूरा</b> तब है जब पुरानी app को कोई traffic न मिले।</p><p>Facts सँभलकर बोलो: .NET Framework 4.8.1 आख़िरी version है और Windows के हिस्से के तौर पर supported है, इसलिए migration features, ख़र्चे और hiring के लिए करो, घबराकर नहीं।</p>",
          hg: "<p>Big-bang rewrite mahinon tak feature kaam rok deta hai aur wapas lautna mushkil hota hai. Routes se ek tukda le jao, dekho, aur fail ho to wapas kar do. <b>Poora</b> tab hai jab purani app ko koi traffic na mile.</p><p>Facts sambhalkar bolo: .NET Framework 4.8.1 aakhri version hai aur Windows ke hisse ke taur par supported hai, isliye migration features, kharche aur hiring ke liye karo, ghabrakar nahi.</p>"
        },
        analogy: {
          en: "<p>Renovating a shop while customers keep shopping. A big-bang rewrite closes the shop for months and hopes the new one is right. The strangler way builds a new counter next to the old one, moves one product line at a time, and keeps the till open.</p>",
          hi: "<p>दुकान की मरम्मत, जबकि ग्राहक ख़रीदारी करते रहें। Big-bang rewrite दुकान महीनों बंद कर देता है और उम्मीद करता है कि नई ठीक होगी। Strangler तरीक़ा पुराने counter के बग़ल में नया counter बनाता है, एक-एक सामान की line आगे ले जाता है, और गल्ला खुला रखता है।</p>",
          hg: "<p>Dukaan ki marammat, jabki grahak kharidari karte rahein. Big-bang rewrite dukaan mahinon band kar deta hai aur ummeed karta hai ki nayi theek hogi. Strangler tareeka purane counter ke bagal mein naya counter banata hai, ek-ek saamaan ki line aage le jaata hai, aur galla khula rakhta hai.</p>"
        },
        lines: [
          {
            code: "new(\"/api/tickets\", \"new app\", 0),",
            note: {
              en: "A migrated slice: URLs starting with <code>/api/tickets</code> are answered by the new app. <code>Order 0</code> means \"try me first\".",
              hi: "Migrate हो चुका टुकड़ा: <code>/api/tickets</code> से शुरू होने वाले URLs का जवाब नई app देती है। <code>Order 0</code> का मतलब \"मुझे पहले आज़माओ\"।",
              hg: "Migrate ho chuka tukda: <code>/api/tickets</code> se shuru hone wale URLs ka jawaab nayi app deti hai. <code>Order 0</code> ka matlab \"mujhe pehle aazmao\"."
            }
          },
          {
            code: "new(\"/\", \"old app\", int.MaxValue)",
            note: {
              en: "The catch-all: every path starts with <code>/</code>, so anything not migrated falls here, with the lowest priority. It is the safety net.",
              hi: "Catch-all: हर path <code>/</code> से शुरू होता है, इसलिए जो migrate नहीं हुआ वह यहाँ गिरता है, सबसे कम priority के साथ। यही safety net है।",
              hg: "Catch-all: har path <code>/</code> se shuru hota hai, isliye jo migrate nahi hua woh yahan girta hai, sabse kam priority ke saath. Yahi safety net hai."
            }
          },
          {
            code: ".OrderBy(r => r.Order).ThenByDescending(r => r.Prefix.Length)",
            note: {
              en: "The decision rule: lowest <code>Order</code> first, then the longest (most specific) prefix. YARP also picks by order, then by specificity.",
              hi: "फ़ैसले का नियम: सबसे छोटा <code>Order</code> पहले, फिर सबसे लंबा (सबसे specific) prefix। YARP भी पहले order, फिर specificity से चुनता है।",
              hg: "Faisle ka niyam: sabse chhota <code>Order</code> pehle, phir sabse lamba (sabse specific) prefix. YARP bhi pehle order, phir specificity se chunta hai."
            }
          },
          {
            code: "var onNew = traffic.Where(t => Decide(t.Path) == \"new app\").Sum(t => t.Hits);",
            note: {
              en: "Counts the hits that land on the new app. Progress by <b>traffic</b>, not by number of files, is what you report as a TL.",
              hi: "गिनता है कि कितने hits नई app पर पहुँचते हैं। TL के तौर पर progress <b>traffic</b> से बताओ, files की गिनती से नहीं।",
              hg: "Ginta hai ki kitne hits nayi app par pahunchte hain. TL ke taur par progress <b>traffic</b> se batao, files ki ginti se nahi."
            }
          }
        ],
        mistakes: {
          en: "<ul><li>Choosing the proxy approach for a small app with few dependencies. Migrating it in place is cheaper than building a proxy and adapters.</li><li>Not giving the catch-all the lowest priority. Order is compared before specificity, so a catch-all with a smaller <code>Order</code> than a migrated route wins and sends that route to the old app.</li></ul>",
          hi: "<ul><li>कम dependencies वाली छोटी app के लिए proxy तरीक़ा चुनना। उसे वहीं migrate करना proxy और adapters बनाने से सस्ता है।</li><li>Catch-all को सबसे कम priority न देना। Order specificity से पहले देखा जाता है, इसलिए जिस catch-all का <code>Order</code> किसी migrate हुए route से छोटा है, वही जीतेगा और उस route को पुरानी app पर भेज देगा।</li></ul>",
          hg: "<ul><li>Kam dependencies wali chhoti app ke liye proxy tareeka chunna. Use wahin migrate karna proxy aur adapters banane se sasta hai.</li><li>Catch-all ko sabse kam priority na dena. Order specificity se pehle dekha jaata hai, isliye jis catch-all ka <code>Order</code> kisi migrate hue route se chhota hai, wahi jeetega aur us route ko purani app par bhej dega.</li></ul>"
        },
        whenToUse: {
          en: "<p>Use it for large or live apps. Assess blockers first and move shared libraries before routes; the Deep Dive has the steps.</p>",
          hi: "<p>बड़ी या चालू apps के लिए इस्तेमाल करो। पहले blockers जाँचो और routes से पहले shared libraries ले जाओ; steps Deep Dive में हैं।</p>",
          hg: "<p>Badi ya chalu apps ke liye use karo. Pehle blockers jaancho aur routes se pehle shared libraries le jao; steps Deep Dive mein hain.</p>"
        },
        exercise: {
          task: {
            en: "<p>The admin area <code>/Admin</code> is migrated now. Add a route for it and print where <code>/Admin/Login</code> and <code>/Reports/Monthly.aspx</code> go.</p>",
            hi: "<p>Admin area <code>/Admin</code> अब migrate हो गया है। उसके लिए route जोड़ो और print करो कि <code>/Admin/Login</code> और <code>/Reports/Monthly.aspx</code> कहाँ जाते हैं।</p>",
            hg: "<p>Admin area <code>/Admin</code> ab migrate ho gaya hai. Uske liye route jodo aur print karo ki <code>/Admin/Login</code> aur <code>/Reports/Monthly.aspx</code> kahan jaate hain.</p>"
          },
          hint: {
            en: "<p>Add <code>new(\"/Admin\", \"new app\", 0)</code> to the table.</p>",
            hi: "<p>Table में <code>new(\"/Admin\", \"new app\", 0)</code> जोड़ो।</p>",
            hg: "<p>Table mein <code>new(\"/Admin\", \"new app\", 0)</code> jodo.</p>"
          },
          solution: {
            caption: {
              en: "Solution: one more migrated slice",
              hi: "हल: एक और migrate हुआ टुकड़ा",
              hg: "Solution: ek aur migrate hua tukda"
            },
            src: "var routes = new Route[]\n{\n    new(\"/api/tickets\", \"new app\", 0),\n    new(\"/api/customers\", \"new app\", 0),\n    new(\"/Admin\", \"new app\", 0),             // the admin area is migrated now\n    new(\"/\", \"old app\", int.MaxValue)\n};\n\nstring Decide(string path) => routes\n    .OrderBy(r => r.Order).ThenByDescending(r => r.Prefix.Length)\n    .First(r => path.StartsWith(r.Prefix, StringComparison.OrdinalIgnoreCase)).Target;\n\nConsole.WriteLine($\"/Admin/Login -> {Decide(\"/Admin/Login\")}\");\nConsole.WriteLine($\"/Reports/Monthly.aspx -> {Decide(\"/Reports/Monthly.aspx\")}\");\n\npublic record Route(string Prefix, string Target, int Order);",
            check: "run",
            expected: "/Admin/Login -> new app\n/Reports/Monthly.aspx -> old app"
          }
        },
        quiz: {
          q: {
            en: "In a strangler-fig migration, where does the catch-all route to the old app go in the priority order?",
            hi: "Strangler-fig migration में पुरानी app वाला catch-all route priority के क्रम में कहाँ रहता है?",
            hg: "Strangler-fig migration mein purani app wala catch-all route priority ke kram mein kahan rehta hai?"
          },
          options: [
            {
              en: "Last (lowest priority), so migrated routes win first",
              hi: "आख़िर में (सबसे कम priority), ताकि migrate हुए routes पहले जीतें",
              hg: "Aakhir mein (sabse kam priority), taaki migrate hue routes pehle jeetein"
            },
            {
              en: "First, so the old app can always veto a route",
              hi: "सबसे पहले, ताकि पुरानी app किसी भी route को रोक सके",
              hg: "Sabse pehle, taaki purani app kisi bhi route ko rok sake"
            },
            {
              en: "It does not matter, the longest prefix always wins",
              hi: "फ़र्क़ नहीं पड़ता, सबसे लंबा prefix हमेशा जीतता है",
              hg: "Farq nahi padta, sabse lamba prefix hamesha jeetta hai"
            }
          ],
          answer: 0,
          explain: {
            en: "<p>The catch-all matches every path. Give it the lowest priority (<code>WithOrder(int.MaxValue)</code> in YARP, <code>Order</code> in our table) so real migrated routes are tried first and the old app only gets the rest.</p>",
            hi: "<p>Catch-all हर path से मेल खाता है। उसे सबसे कम priority दो (YARP में <code>WithOrder(int.MaxValue)</code>, हमारी table में <code>Order</code>) ताकि असली migrate हुए routes पहले आज़माए जाएँ और पुरानी app को सिर्फ़ बाक़ी मिले।</p>",
            hg: "<p>Catch-all har path se mel khaata hai. Use sabse kam priority do (YARP mein <code>WithOrder(int.MaxValue)</code>, humari table mein <code>Order</code>) taaki asli migrate hue routes pehle aazmaye jaayein aur purani app ko sirf baaki mile.</p>"
          }
        },
        recap: {
          en: "<ul><li>Strangler fig: new app in front, migrated routes served there, the rest forwarded to the old app.</li><li>The catch-all goes last; specific routes and lower <code>Order</code> win.</li><li>Report progress as percent of traffic and routes on the new app, with a rollback plan.</li></ul>",
          hi: "<ul><li>Strangler fig: नई app आगे, migrate हुए routes वहीं, बाक़ी पुरानी app को forward।</li><li>Catch-all आख़िर में; specific routes और छोटा <code>Order</code> जीतते हैं।</li><li>Progress नई app पर traffic और routes के percent में बताओ, rollback plan के साथ।</li></ul>",
          hg: "<ul><li>Strangler fig: nayi app aage, migrate hue routes wahin, baaki purani app ko forward.</li><li>Catch-all aakhir mein; specific routes aur chhota <code>Order</code> jeette hain.</li><li>Progress nayi app par traffic aur routes ke percent mein batao, rollback plan ke saath.</li></ul>"
        }
      },
      code: [
        {
          caption: {
            en: "A routing decision table and the traffic share on the new app",
            hi: "Routing decision table और नई app पर traffic का हिस्सा",
            hg: "Routing decision table aur nayi app par traffic ka hissa"
          },
          src: "var routes = new Route[]\n{\n    new(\"/api/tickets\", \"new app\", 0),\n    new(\"/api/customers\", \"new app\", 0),\n    new(\"/\", \"old app\", int.MaxValue)        // catch-all: tried last, like WithOrder(int.MaxValue)\n};\n\nvar traffic = new (string Path, int Hits)[]\n{\n    (\"/api/tickets/501\", 600), (\"/api/customers/7\", 200),\n    (\"/Reports/Monthly.aspx\", 150), (\"/Admin/Login\", 50)\n};\n\nstring Decide(string path) => routes\n    .OrderBy(r => r.Order).ThenByDescending(r => r.Prefix.Length)\n    .First(r => path.StartsWith(r.Prefix, StringComparison.OrdinalIgnoreCase)).Target;\n\nforeach (var (path, _) in traffic)\n    Console.WriteLine($\"{path} -> {Decide(path)}\");\n\nvar onNew = traffic.Where(t => Decide(t.Path) == \"new app\").Sum(t => t.Hits);\nConsole.WriteLine($\"{onNew * 100 / traffic.Sum(t => t.Hits)}% of traffic is on the new app\");\n\npublic record Route(string Prefix, string Target, int Order);",
          check: "run",
          expected: "/api/tickets/501 -> new app\n/api/customers/7 -> new app\n/Reports/Monthly.aspx -> old app\n/Admin/Login -> old app\n80% of traffic is on the new app"
        }
      ]
    },
    {
      id: "pipeline-reference",
      depth: "detailed",
      title: {
        en: "Pipeline reference: MVC 5 lifecycle, System.Web events, filters",
        hi: "Pipeline reference: MVC 5 lifecycle, System.Web events और filters",
        hg: "Pipeline reference: MVC 5 lifecycle, System.Web events aur filters"
      },
      body: {
        en: "<ul>\n<li><b>MVC 5 request lifecycle:</b> <code>UrlRoutingModule</code> (routing) picks a route and its <code>MvcRouteHandler</code> creates <code>MvcHandler</code>; the <b>controller factory</b> creates the controller; <code>ControllerActionInvoker</code> runs authentication and authorization filters, then <b>model binding</b>, then action filters around the action; the <code>ActionResult</code> executes (result filters around it, exception filters catch errors), and the <b>view engine</b> renders the view.</li>\n<li><b>In ASP.NET Core:</b> routing selects an <b>endpoint</b>; middleware before it (HTTPS redirection, authentication, authorization) wraps it. The <b>controller activator</b> creates the controller and resolves its constructor dependencies from DI (the controller class itself is not registered in DI unless you call <code>AddControllersAsServices</code>), filters wrap the action, results execute (Razor view or JSON). Same ideas, different plumbing (Day 12).</li>\n<li><b>HttpModule/HttpHandler/Global.asax:</b> modules hook <code>HttpApplication</code> events in this order: BeginRequest, AuthenticateRequest, AuthorizeRequest, ResolveRequestCache, AcquireRequestState, PreRequestHandlerExecute, (handler), PostRequestHandlerExecute, ReleaseRequestState, UpdateRequestCache, EndRequest. For one event they run in the order listed in <code>web.config</code>, and <code>Global.asax</code> handlers run after the modules'. Gotcha: Session is not available before AcquireRequestState. Handlers are the endpoint that finally produces the response. In Core, modules become <b>middleware</b> and handlers become <b>endpoints</b>.</li>\n<li><b>Big difference:</b> modules run in the same order on request and response (per event); middleware runs in <b>reverse</b> on the way back, so ordering rules are different (Puzzle 3).</li>\n<li><b>MVC 5 filters</b> (<code>ActionFilterAttribute</code>, <code>IAuthorizationFilter</code>, <code>IExceptionFilter</code>) have Core equivalents, with <b>DI support</b> and async versions (<code>IAsyncActionFilter</code>). Use middleware for cross-cutting concerns that need to see every request (correlation id, headers) and filters for things that need MVC context (model state, action arguments).</li>\n</ul>",
        hi: "<ul>\n<li><b>MVC 5 request lifecycle:</b> <code>UrlRoutingModule</code> (routing) route चुनता है और उसका <code>MvcRouteHandler</code> <code>MvcHandler</code> बनाता है; <b>controller factory</b> controller बनाती है; <code>ControllerActionInvoker</code> authentication और authorization filters चलाता है, फिर <b>model binding</b>, फिर action के आसपास action filters; <code>ActionResult</code> execute होता है (उसके आसपास result filters, errors को exception filters पकड़ते हैं), और <b>view engine</b> view render करता है।</li>\n<li><b>ASP.NET Core में:</b> routing एक <b>endpoint</b> चुनता है; उससे पहले के middleware (HTTPS redirection, authentication, authorization) उसे घेरते हैं। <b>Controller activator</b> controller बनाता है और उसकी constructor dependencies DI से resolve करता है (controller class खुद DI में register नहीं होती जब तक <code>AddControllersAsServices</code> न बुलाओ), filters action को घेरते हैं, results execute होते हैं (Razor view या JSON)। वही ideas, अलग plumbing (Day 12)।</li>\n<li><b>HttpModule/HttpHandler/Global.asax:</b> modules <code>HttpApplication</code> events पर इस order में hook करते हैं: BeginRequest, AuthenticateRequest, AuthorizeRequest, ResolveRequestCache, AcquireRequestState, PreRequestHandlerExecute, (handler), PostRequestHandlerExecute, ReleaseRequestState, UpdateRequestCache, EndRequest। एक event के लिए वे <code>web.config</code> में लिखे order में चलते हैं, और <code>Global.asax</code> के handlers modules के बाद चलते हैं। Gotcha: AcquireRequestState से पहले Session available नहीं होता। Handler वह endpoint है जो आख़िर में response बनाता है। Core में modules <b>middleware</b> बनते हैं और handlers <b>endpoints</b>।</li>\n<li><b>बड़ा फ़र्क:</b> modules request और response पर (हर event के लिए) एक ही order में चलते हैं; middleware वापसी में <b>उल्टा</b> चलता है, इसलिए ordering के rules अलग हैं (Puzzle 3)।</li>\n<li><b>MVC 5 filters</b> (<code>ActionFilterAttribute</code>, <code>IAuthorizationFilter</code>, <code>IExceptionFilter</code>) के Core में equivalents हैं, <b>DI support</b> और async versions (<code>IAsyncActionFilter</code>) के साथ। जिन cross-cutting बातों को हर request देखनी है (correlation id, headers) उनके लिए middleware, और जिन्हें MVC context चाहिए (model state, action arguments) उनके लिए filters।</li>\n</ul>",
        hg: "<ul>\n<li><b>MVC 5 request lifecycle:</b> <code>UrlRoutingModule</code> (routing) route chunta hai aur uska <code>MvcRouteHandler</code> <code>MvcHandler</code> banata hai; <b>controller factory</b> controller banati hai; <code>ControllerActionInvoker</code> authentication aur authorization filters chalata hai, phir <b>model binding</b>, phir action ke aaspaas action filters; <code>ActionResult</code> execute hota hai (uske aaspaas result filters, errors ko exception filters pakadte hain), aur <b>view engine</b> view render karta hai.</li>\n<li><b>ASP.NET Core mein:</b> routing ek <b>endpoint</b> chunta hai; usse pehle ke middleware (HTTPS redirection, authentication, authorization) use gherte hain. <b>Controller activator</b> controller banata hai aur uski constructor dependencies DI se resolve karta hai (controller class khud DI mein register nahi hoti jab tak <code>AddControllersAsServices</code> na bulao), filters action ko gherte hain, results execute hote hain (Razor view ya JSON). Wahi ideas, alag plumbing (Day 12).</li>\n<li><b>HttpModule/HttpHandler/Global.asax:</b> modules <code>HttpApplication</code> events par is order mein hook karte hain: BeginRequest, AuthenticateRequest, AuthorizeRequest, ResolveRequestCache, AcquireRequestState, PreRequestHandlerExecute, (handler), PostRequestHandlerExecute, ReleaseRequestState, UpdateRequestCache, EndRequest. Ek event ke liye woh <code>web.config</code> mein likhe order mein chalte hain, aur <code>Global.asax</code> ke handlers modules ke baad chalte hain. Gotcha: AcquireRequestState se pehle Session available nahi hota. Handler woh endpoint hai jo aakhir mein response banata hai. Core mein modules <b>middleware</b> bante hain aur handlers <b>endpoints</b>.</li>\n<li><b>Bada farq:</b> modules request aur response par (har event ke liye) ek hi order mein chalte hain; middleware wapsi mein <b>ulta</b> chalta hai, isliye ordering ke rules alag hain (Puzzle 3).</li>\n<li><b>MVC 5 filters</b> (<code>ActionFilterAttribute</code>, <code>IAuthorizationFilter</code>, <code>IExceptionFilter</code>) ke Core mein equivalents hain, <b>DI support</b> aur async versions (<code>IAsyncActionFilter</code>) ke saath. Jin cross-cutting baaton ko har request dekhni hai (correlation id, headers) unke liye middleware, aur jinhe MVC context chahiye (model state, action arguments) unke liye filters.</li>\n</ul>"
      }
    },
    {
      id: "viewstate-cost",
      depth: "detailed",
      title: {
        en: "ViewState cost and the modern replacements",
        hi: "ViewState का cost और modern replacements",
        hg: "ViewState ka cost aur modern replacements"
      },
      body: {
        en: "<ul>\n<li><b>ViewState cost:</b> it travels down in every response and up in every postback. Turn it off where you do not need it (<code>EnableViewState=\"false\"</code>), but then that control must be bound again on every request (in <code>Init</code>, or in <code>Page_Load</code> without the <code>!IsPostBack</code> guard); keep big objects out of it.</li>\n<li><b>Why it does not exist in ASP.NET Core:</b> the framework dropped the server-control model. State now lives in the database, a cache, a cookie or the client. A Razor Page handler or an endpoint reads the request, loads fresh data and renders. Blazor has components with their own state and is the nearest \"stateful UI\" option.</li>\n<li><b>Trade-off:</b> stateless handlers are simpler to scale and test, but you now write the \"remember what the user typed\" logic yourself (model binding and validation).</li>\n</ul>",
        hi: "<ul>\n<li><b>ViewState का cost:</b> वह हर response में नीचे आता है और हर postback में ऊपर जाता है। जहाँ ज़रूरत नहीं वहाँ बंद करो (<code>EnableViewState=\"false\"</code>), पर तब उस control को हर request पर दोबारा bind करना पड़ता है (<code>Init</code> में, या बिना <code>!IsPostBack</code> guard वाले <code>Page_Load</code> में); बड़े objects उसमें मत रखो।</li>\n<li><b>ASP.NET Core में क्यों नहीं है:</b> framework ने server-control model छोड़ दिया। State अब database, cache, cookie या client में रहती है। Razor Page handler या endpoint request पढ़ता है, ताज़ा data load करता है और render करता है। Blazor में components अपनी state रखते हैं और वह \"stateful UI\" के सबसे पास का option है।</li>\n<li><b>Trade-off:</b> stateless handlers scale और test करने में simple हैं, पर \"user ने क्या type किया था\" याद रखने वाला logic अब तुम खुद लिखते हो (model binding और validation)।</li>\n</ul>",
        hg: "<ul>\n<li><b>ViewState ka cost:</b> woh har response mein neeche aata hai aur har postback mein upar jaata hai. Jahan zaroorat nahi wahan band karo (<code>EnableViewState=\"false\"</code>), par tab us control ko har request par dobara bind karna padta hai (<code>Init</code> mein, ya bina <code>!IsPostBack</code> guard wale <code>Page_Load</code> mein); bade objects usmein mat rakho.</li>\n<li><b>ASP.NET Core mein kyun nahi hai:</b> framework ne server-control model chhod diya. State ab database, cache, cookie ya client mein rehti hai. Razor Page handler ya endpoint request padhta hai, taaza data load karta hai aur render karta hai. Blazor mein components apni state rakhte hain aur woh \"stateful UI\" ke sabse paas ka option hai.</li>\n<li><b>Trade-off:</b> stateless handlers scale aur test karne mein simple hain, par \"user ne kya type kiya tha\" yaad rakhne wala logic ab tum khud likhte ho (model binding aur validation).</li>\n</ul>"
      }
    },
    {
      id: "session-state-auth",
      depth: "detailed",
      title: {
        en: "Application state, caching and authentication",
        hi: "Application state, caching और authentication",
        hg: "Application state, caching aur authentication"
      },
      body: {
        en: "<ul>\n<li><b>Application state and caching:</b> <code>Application[\"x\"]</code> and <code>HttpRuntime.Cache</code> map to singleton services, <code>IMemoryCache</code> or a distributed cache (Day 13).</li>\n<li><b>Authentication:</b> Forms auth and Membership become ASP.NET Core Identity or an external identity provider; shared auth between old and new apps is possible during migration, but plan the end state early.</li>\n</ul>",
        hi: "<ul>\n<li><b>Application state और caching:</b> <code>Application[\"x\"]</code> और <code>HttpRuntime.Cache</code> की जगह singleton services, <code>IMemoryCache</code> या distributed cache (Day 13)।</li>\n<li><b>Authentication:</b> Forms auth और Membership की जगह ASP.NET Core Identity या external identity provider; migration के दौरान पुराने और नए app के बीच auth share हो सकता है, पर end state पहले से सोचो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Application state aur caching:</b> <code>Application[\"x\"]</code> aur <code>HttpRuntime.Cache</code> ki jagah singleton services, <code>IMemoryCache</code> ya distributed cache (Day 13).</li>\n<li><b>Authentication:</b> Forms auth aur Membership ki jagah ASP.NET Core Identity ya external identity provider; migration ke dauraan purane aur naye app ke beech auth share ho sakta hai, par end state pehle se socho.</li>\n</ul>"
      }
    },
    {
      id: "webapi-wcf-ef",
      depth: "detailed",
      title: {
        en: "Web API 2, WCF and EF6: what changes on ASP.NET Core",
        hi: "Web API 2, WCF और EF6: ASP.NET Core पर क्या बदलता है",
        hg: "Web API 2, WCF aur EF6: ASP.NET Core par kya badalta hai"
      },
      body: {
        en: "<ul>\n<li><b>Web API 2 to ASP.NET Core Web API (Day 13):</b> <code>ApiController</code> becomes <code>ControllerBase</code> with <code>[ApiController]</code> (automatic 400 for invalid models). <code>IHttpActionResult</code> becomes <code>ActionResult&lt;T&gt;</code> / <code>IActionResult</code>. Message handlers become middleware. Attribute routing is similar, but check route templates and model binding rules, because defaults differ (for example the default JSON serializer is System.Text.Json, where Web API 2 used Newtonsoft.Json, and <code>[ApiController]</code> infers binding sources). Run contract tests against both versions.</li>\n<li><b>WCF:</b> WCF <b>server</b> is not part of modern .NET. Choices: <b>CoreWCF</b> (a .NET Foundation port of the service side of WCF, to keep existing SOAP clients working), <b>gRPC</b> (contract-first, fast, good for internal services; clients must change), or REST/HTTP APIs. WCF <b>clients</b> can still be used from modern .NET through the <code>System.ServiceModel</code> client packages. Pick based on who the clients are: external SOAP partners usually push you to CoreWCF; your own services can move to gRPC or HTTP.</li>\n<li><b>EF6 to EF Core (Days 5 and 6):</b> EF Core is a rewrite, not a patch. No EDMX designer; lazy loading is opt-in; some EF6 features have no direct equivalent or work differently (check Microsoft's EF6 versus EF Core comparison for each feature you use). EF6 itself can run on modern .NET (EF 6.3 and later), which allows a <b>two-step</b> path: move the app to modern .NET first, move to EF Core later.</li>\n<li><b>Check the SQL and the tracking behaviour:</b> same LINQ can generate different SQL; compare queries and test with a real database.</li>\n</ul>",
        hi: "<ul>\n<li><b>Web API 2 से ASP.NET Core Web API (Day 13):</b> <code>ApiController</code> की जगह <code>[ApiController]</code> वाला <code>ControllerBase</code> (invalid models पर automatic 400)। <code>IHttpActionResult</code> की जगह <code>ActionResult&lt;T&gt;</code> / <code>IActionResult</code>। Message handlers की जगह middleware। Attribute routing similar है, पर route templates और model binding rules जाँचो, क्योंकि defaults अलग हैं (जैसे default JSON serializer System.Text.Json है जबकि Web API 2 Newtonsoft.Json use करता था, और <code>[ApiController]</code> binding sources खुद infer करता है)। दोनों versions पर contract tests चलाओ।</li>\n<li><b>WCF:</b> WCF का <b>server</b> modern .NET का हिस्सा नहीं है। Choices: <b>CoreWCF</b> (WCF की service side का .NET Foundation port, मौजूदा SOAP clients चलते रखने के लिए), <b>gRPC</b> (contract-first, तेज़, internal services के लिए अच्छा; clients को बदलना पड़ता है), या REST/HTTP APIs। WCF <b>clients</b> modern .NET से अब भी <code>System.ServiceModel</code> client packages के ज़रिए use हो सकते हैं। Clients कौन हैं उसके हिसाब से चुनो: external SOAP partners आम तौर पर CoreWCF की तरफ़ धकेलते हैं; अपनी services gRPC या HTTP पर जा सकती हैं।</li>\n<li><b>EF6 से EF Core (Days 5 और 6):</b> EF Core rewrite है, patch नहीं। EDMX designer नहीं; lazy loading opt-in है; EF6 के कुछ features का सीधा equivalent नहीं है या अलग तरह से काम करता है (जो features तुम use करते हो उनके लिए Microsoft का EF6 बनाम EF Core comparison देखो)। EF6 खुद modern .NET पर चल सकता है (EF 6.3 और उसके बाद), जिससे <b>दो-step</b> रास्ता मिलता है: पहले app को modern .NET पर ले जाओ, EF Core बाद में।</li>\n<li><b>SQL और tracking behaviour जाँचो:</b> वही LINQ अलग SQL बना सकता है; queries compare करो और असली database से test करो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Web API 2 se ASP.NET Core Web API (Day 13):</b> <code>ApiController</code> ki jagah <code>[ApiController]</code> wala <code>ControllerBase</code> (invalid models par automatic 400). <code>IHttpActionResult</code> ki jagah <code>ActionResult&lt;T&gt;</code> / <code>IActionResult</code>. Message handlers ki jagah middleware. Attribute routing similar hai, par route templates aur model binding rules jaancho, kyunki defaults alag hain (jaise default JSON serializer System.Text.Json hai jabki Web API 2 Newtonsoft.Json use karta tha, aur <code>[ApiController]</code> binding sources khud infer karta hai). Dono versions par contract tests chalao.</li>\n<li><b>WCF:</b> WCF ka <b>server</b> modern .NET ka hissa nahi hai. Choices: <b>CoreWCF</b> (WCF ki service side ka .NET Foundation port, maujooda SOAP clients chalte rakhne ke liye), <b>gRPC</b> (contract-first, tez, internal services ke liye achha; clients ko badalna padta hai), ya REST/HTTP APIs. WCF <b>clients</b> modern .NET se ab bhi <code>System.ServiceModel</code> client packages ke zariye use ho sakte hain. Clients kaun hain uske hisaab se chuno: external SOAP partners aam taur par CoreWCF ki taraf dhakelte hain; apni services gRPC ya HTTP par ja sakti hain.</li>\n<li><b>EF6 se EF Core (Days 5 aur 6):</b> EF Core rewrite hai, patch nahi. EDMX designer nahi; lazy loading opt-in hai; EF6 ke kuch features ka seedha equivalent nahi hai ya alag tarah kaam karta hai (jo features tum use karte ho unke liye Microsoft ka EF6 vs EF Core comparison dekho). EF6 khud modern .NET par chal sakta hai (EF 6.3 aur uske baad), jisse <b>do-step</b> raasta milta hai: pehle app ko modern .NET par le jao, EF Core baad mein.</li>\n<li><b>SQL aur tracking behaviour jaancho:</b> wahi LINQ alag SQL bana sakta hai; queries compare karo aur asli database se test karo.</li>\n</ul>"
      },
      code: [
        {
          lang: "csharp",
          caption: {
            en: "CoreWCF: keep an existing SOAP contract alive on modern .NET (service side only; packages CoreWCF.Http and CoreWCF.Primitives)",
            hi: "CoreWCF: मौजूदा SOAP contract को modern .NET पर ज़िंदा रखना (सिर्फ़ service side; packages CoreWCF.Http और CoreWCF.Primitives)",
            hg: "CoreWCF: maujooda SOAP contract ko modern .NET par zinda rakhna (sirf service side; packages CoreWCF.Http aur CoreWCF.Primitives)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "CoreWCF.Http@1.*",
            "CoreWCF.Primitives@1.*"
          ],
          src: "using CoreWCF;\nusing CoreWCF.Configuration;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddServiceModelServices();\n\nvar app = builder.Build();\napp.UseServiceModel(serviceBuilder =>\n{\n    serviceBuilder.AddService<PriceService>();\n    serviceBuilder.AddServiceEndpoint<PriceService, IPriceService>(new BasicHttpBinding(), \"/PriceService.svc\");\n});\napp.Run();\n\n[ServiceContract]\npublic interface IPriceService\n{\n    [OperationContract]\n    decimal GetPrice(string sku);\n}\n\npublic sealed class PriceService : IPriceService\n{\n    public decimal GetPrice(string sku) => sku == \"TEA-250\" ? 120m : 0m;\n}"
        }
      ]
    },
    {
      id: "migration-status-tooling",
      depth: "detailed",
      title: {
        en: "Migration status, tooling and blockers",
        hi: "Migration का status, tooling और blockers",
        hg: "Migration ka status, tooling aur blockers"
      },
      body: {
        en: "<ul>\n<li><b>Support status (verify before quoting):</b> .NET Framework 4.8 and 4.8.1 follow the lifecycle of the Windows version they are installed on (a Windows component). Its lifecycle page lists no separate end date for 4.8.1: support follows the Windows version. Modern .NET 10 is <b>LTS</b> (released November 2025, supported until November 2028). Older .NET Framework 4.6.2 is listed as ending in January 2027.</li>\n<li><b>Why migrate anyway:</b> new features, performance, containers and Linux hosting, cloud cost, hiring, and security fixes in a platform that is actively developed. Not because \"4.8 is dead\": it is supported, just not where new work happens.</li>\n<li><b>Tooling now (verify before quoting):</b> Microsoft Learn says <b>.NET Upgrade Assistant is officially deprecated</b> and points to the <b>GitHub Copilot upgrade</b> agent (in Visual Studio it ships as the optional <i>GitHub Copilot app modernization</i> component; in VS Code it is the <i>GitHub Copilot upgrade</i> extension; it needs a GitHub Copilot subscription, free or paid). It assesses, plans and commits each step, and even has a Web Forms to Blazor scenario. Do not mix it up with the <i>GitHub Copilot modernization agent</i>, which is for Azure migration. Tool names change quickly, so re-check before an interview or a plan.</li>\n<li><b>Blockers to check first:</b> Web Forms, WCF server, Windows-only APIs (registry, WMI, COM), packages without .NET support, <code>System.Web</code> everywhere, EF6 edge features, heavy Session use, AppDomain/Remoting.</li>\n<li><b>TL view:</b> assessment, a risk-ranked route list, a rollback plan, a business case, and measurable milestones (percentage of traffic on the new app).</li>\n</ul>",
        hi: "<ul>\n<li><b>Support status (बोलने से पहले verify करो):</b> .NET Framework 4.8 और 4.8.1 उस Windows version के lifecycle को follow करते हैं जिस पर install हैं (Windows component)। Lifecycle page में 4.8.1 की अलग end date नहीं है: support Windows version के साथ चलता है। Modern .NET 10 <b>LTS</b> है (नवंबर 2025 में release, नवंबर 2028 तक supported)। पुराना .NET Framework 4.6.2 जनवरी 2027 में ख़त्म होने वाला listed है।</li>\n<li><b>फिर भी migrate क्यों:</b> नए features, performance, containers और Linux hosting, cloud cost, hiring, और ऐसे platform में security fixes जो actively develop हो रहा है। इसलिए नहीं कि \"4.8 मर चुका है\": वह supported है, बस नया काम वहाँ नहीं होता।</li>\n<li><b>अभी का tooling (बोलने से पहले जाँचो):</b> Microsoft Learn कहता है कि <b>.NET Upgrade Assistant officially deprecated है</b> और <b>GitHub Copilot upgrade</b> agent की तरफ़ इशारा करता है (Visual Studio में यह optional <i>GitHub Copilot app modernization</i> component के साथ आता है; VS Code में <i>GitHub Copilot upgrade</i> extension है; GitHub Copilot subscription चाहिए, free या paid)। यह assess करता है, plan बनाता है और हर step commit करता है, और इसमें Web Forms से Blazor वाला scenario भी है। इसे <i>GitHub Copilot modernization agent</i> से मत मिलाओ, वह Azure migration के लिए है। Tool के नाम जल्दी बदलते हैं, इसलिए interview या plan से पहले दोबारा देखो।</li>\n<li><b>पहले blockers देखो:</b> Web Forms, WCF server, Windows-only APIs (registry, WMI, COM), बिना .NET support वाले packages, हर जगह <code>System.Web</code>, EF6 के edge features, भारी Session use, AppDomain/Remoting।</li>\n<li><b>TL view:</b> assessment, risk के हिसाब से route list, rollback plan, business case, और नापने लायक milestones (नए app पर traffic का percentage)।</li>\n</ul>",
        hg: "<ul>\n<li><b>Support status (bolne se pehle verify karo):</b> .NET Framework 4.8 aur 4.8.1 us Windows version ke lifecycle ko follow karte hain jis par install hain (Windows component). Lifecycle page mein 4.8.1 ki alag end date nahi hai: support Windows version ke saath chalta hai. Modern .NET 10 <b>LTS</b> hai (November 2025 mein release, November 2028 tak supported). Purana .NET Framework 4.6.2 January 2027 mein khatam hone wala listed hai.</li>\n<li><b>Phir bhi migrate kyun:</b> naye features, performance, containers aur Linux hosting, cloud cost, hiring, aur aise platform mein security fixes jo actively develop ho raha hai. Isliye nahi ki \"4.8 mar chuka hai\": woh supported hai, bas naya kaam wahan nahi hota.</li>\n<li><b>Abhi ka tooling (bolne se pehle jaancho):</b> Microsoft Learn kehta hai ki <b>.NET Upgrade Assistant officially deprecated hai</b> aur <b>GitHub Copilot upgrade</b> agent ki taraf ishaara karta hai (Visual Studio mein ye optional <i>GitHub Copilot app modernization</i> component ke saath aata hai; VS Code mein <i>GitHub Copilot upgrade</i> extension hai; GitHub Copilot subscription chahiye, free ya paid). Ye assess karta hai, plan banata hai aur har step commit karta hai, aur ismein Web Forms se Blazor wala scenario bhi hai. Ise <i>GitHub Copilot modernization agent</i> se mat milao, woh Azure migration ke liye hai. Tool ke naam jaldi badalte hain, isliye interview ya plan se pehle dobara dekho.</li>\n<li><b>Pehle blockers dekho:</b> Web Forms, WCF server, Windows-only APIs (registry, WMI, COM), bina .NET support wale packages, har jagah <code>System.Web</code>, EF6 ke edge features, bhaari Session use, AppDomain/Remoting.</li>\n<li><b>TL view:</b> assessment, risk ke hisaab se route list, rollback plan, business case, aur naapne layak milestones (naye app par traffic ka percentage).</li>\n</ul>"
      }
    },
    {
      id: "migration-in-practice",
      depth: "detailed",
      title: {
        en: "Migration in practice: multi-targeting, System.Web adapters, YARP, assessment",
        hi: "Migration practice में: multi-targeting, System.Web adapters, YARP, assessment",
        hg: "Migration practice mein: multi-targeting, System.Web adapters, YARP, assessment"
      },
      body: {
        en: "<ul>\n<li><b>Step 0 - assess:</b> list projects, target frameworks, NuGet packages without .NET support, <code>System.Web</code> use, Windows-only APIs, WCF, Web Forms pages, EF6 usage, traffic per route, test coverage. Tools (the GitHub Copilot upgrade agent, analyzers such as the platform-compatibility analyzer) help, but a human still ranks risk.</li>\n<li><b>Step 1 - tidy:</b> update packages, move to SDK-style project files and <code>PackageReference</code>, fix warnings. Microsoft's guide asks for this before upgrading libraries.</li>\n<li><b>Step 2 - libraries:</b> move shared class libraries to <b>.NET Standard 2.0</b> if possible, otherwise <b>multi-target</b> (for example <code>net48;net10.0</code>). Upgrade in <b>post-order</b>: leaf libraries first, the web app last. Use <code>#if NETFRAMEWORK</code> only for the small differences.</li>\n<li><b>Step 3 - proxy:</b> create the ASP.NET Core app, forward everything to the old app with <b>YARP</b> as a catch-all with the lowest priority, then add real routes in the new app. Add the System.Web adapters to both apps (separate packages for the Framework side and the Core side) to share session and authentication; shared libraries use <code>Microsoft.AspNetCore.SystemWebAdapters</code> to keep using <code>HttpContext</code>.</li>\n<li><b>Windows-only APIs:</b> the <b>Windows Compatibility Pack</b> (<code>Microsoft.Windows.Compatibility</code>) brings many (registry, WMI, event log) to modern .NET, but only on Windows. If you want Linux, find alternatives or guard with platform checks.</li>\n<li><b>Done means:</b> the old app receives no traffic and can be switched off. Measure with the proxy's routing table.</li>\n</ul>",
        hi: "<ul>\n<li><b>Step 0 - assess:</b> projects, target frameworks, बिना .NET support वाले NuGet packages, <code>System.Web</code> use, Windows-only APIs, WCF, Web Forms pages, EF6 use, route-wise traffic और test coverage की list बनाओ। Tools (GitHub Copilot upgrade agent, platform-compatibility analyzer जैसे analyzers) मदद करते हैं, पर risk को rank इंसान ही करता है।</li>\n<li><b>Step 1 - tidy:</b> packages update करो, SDK-style project files और <code>PackageReference</code> पर जाओ, warnings ठीक करो। Microsoft की guide libraries upgrade करने से पहले यह माँगती है।</li>\n<li><b>Step 2 - libraries:</b> shared class libraries को हो सके तो <b>.NET Standard 2.0</b> पर ले जाओ, वरना <b>multi-target</b> करो (जैसे <code>net48;net10.0</code>)। <b>Post-order</b> में upgrade करो: पहले leaf libraries, web app आख़िर में। <code>#if NETFRAMEWORK</code> सिर्फ़ छोटे फ़र्क़ों के लिए।</li>\n<li><b>Step 3 - proxy:</b> ASP.NET Core app बनाओ, <b>YARP</b> से सब कुछ सबसे कम priority वाले catch-all से पुराने app को forward करो, फिर नए app में असली routes जोड़ो। Session और authentication share करने के लिए दोनों apps में System.Web adapters जोड़ो (Framework side और Core side के अलग packages); shared libraries <code>HttpContext</code> use करते रहने के लिए <code>Microsoft.AspNetCore.SystemWebAdapters</code> use करती हैं।</li>\n<li><b>Windows-only APIs:</b> <b>Windows Compatibility Pack</b> (<code>Microsoft.Windows.Compatibility</code>) कई APIs (registry, WMI, event log) modern .NET में लाता है, पर सिर्फ़ Windows पर। Linux चाहिए तो alternatives खोजो या platform checks लगाओ।</li>\n<li><b>Done का मतलब:</b> पुराने app पर कोई traffic नहीं आता और उसे बंद किया जा सकता है। Proxy की routing table से नापो।</li>\n</ul>",
        hg: "<ul>\n<li><b>Step 0 - assess:</b> projects, target frameworks, bina .NET support wale NuGet packages, <code>System.Web</code> use, Windows-only APIs, WCF, Web Forms pages, EF6 use, route-wise traffic aur test coverage ki list banao. Tools (GitHub Copilot upgrade agent, platform-compatibility analyzer jaise analyzers) madad karte hain, par risk ko rank insaan hi karta hai.</li>\n<li><b>Step 1 - tidy:</b> packages update karo, SDK-style project files aur <code>PackageReference</code> par jao, warnings theek karo. Microsoft ki guide libraries upgrade karne se pehle yeh maangti hai.</li>\n<li><b>Step 2 - libraries:</b> shared class libraries ko ho sake to <b>.NET Standard 2.0</b> par le jao, warna <b>multi-target</b> karo (jaise <code>net48;net10.0</code>). <b>Post-order</b> mein upgrade karo: pehle leaf libraries, web app aakhir mein. <code>#if NETFRAMEWORK</code> sirf chhote farqon ke liye.</li>\n<li><b>Step 3 - proxy:</b> ASP.NET Core app banao, <b>YARP</b> se sab kuch sabse kam priority wale catch-all se purane app ko forward karo, phir naye app mein asli routes jodo. Session aur authentication share karne ke liye dono apps mein System.Web adapters jodo (Framework side aur Core side ke alag packages); shared libraries <code>HttpContext</code> use karte rehne ke liye <code>Microsoft.AspNetCore.SystemWebAdapters</code> use karti hain.</li>\n<li><b>Windows-only APIs:</b> <b>Windows Compatibility Pack</b> (<code>Microsoft.Windows.Compatibility</code>) kai APIs (registry, WMI, event log) modern .NET mein laata hai, par sirf Windows par. Linux chahiye to alternatives khojo ya platform checks lagao.</li>\n<li><b>Done ka matlab:</b> purane app par koi traffic nahi aata aur use band kiya ja sakta hai. Proxy ki routing table se naapo.</li>\n</ul>"
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "Shared library csproj: multi-target so both the old and the new app can use it (display-only)",
            hi: "Shared library csproj: multi-target ताकि पुराना और नया दोनों app इसे use कर सकें (सिर्फ़ दिखाने के लिए)",
            hg: "Shared library csproj: multi-target taaki purana aur naya dono app ise use kar sakein (sirf dikhane ke liye)"
          },
          check: "none",
          src: "<Project Sdk=\"Microsoft.NET.Sdk\">\n  <PropertyGroup>\n    <!-- Option A (simplest): <TargetFramework>netstandard2.0</TargetFramework> -->\n    <!-- Option B: multi-target when you need newer APIs on the new side -->\n    <TargetFrameworks>net48;net10.0</TargetFrameworks>\n    <LangVersion>latest</LangVersion>\n  </PropertyGroup>\n\n  <ItemGroup>\n    <!-- Do not reference System.Web directly. The adapters package supplies the System.Web types\n         (on net48 it forwards to the real System.Web), so HttpContext code compiles for both targets. -->\n    <PackageReference Include=\"Microsoft.AspNetCore.SystemWebAdapters\" Version=\"2.*\" />\n  </ItemGroup>\n  <ItemGroup Condition=\"'$(TargetFramework)' != 'net48'\">\n    <FrameworkReference Include=\"Microsoft.AspNetCore.App\" />\n  </ItemGroup>\n</Project>"
        },
        {
          lang: "csharp",
          caption: {
            en: "ASP.NET Core front app: YARP catch-all to the old app, System.Web adapters for shared session (packages Yarp.ReverseProxy and Microsoft.AspNetCore.SystemWebAdapters.CoreServices; compile-only)",
            hi: "ASP.NET Core front app: पुराने app को YARP catch-all, shared session के लिए System.Web adapters (packages Yarp.ReverseProxy और Microsoft.AspNetCore.SystemWebAdapters.CoreServices; सिर्फ़ compile)",
            hg: "ASP.NET Core front app: purane app ko YARP catch-all, shared session ke liye System.Web adapters (packages Yarp.ReverseProxy aur Microsoft.AspNetCore.SystemWebAdapters.CoreServices; sirf compile)"
          },
          check: "compile",
          frameworks: [
            "aspnetcore"
          ],
          packages: [
            "Yarp.ReverseProxy@2.*",
            "Microsoft.AspNetCore.SystemWebAdapters.CoreServices@2.*"
          ],
          src: "using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.SystemWebAdapters;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Options;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddReverseProxy();                         // YARP forwarder services\n\nbuilder.Services.AddSystemWebAdapters()\n    .AddRemoteAppClient(options =>\n    {\n        options.RemoteAppUrl = new Uri(builder.Configuration[\"RemoteAppUri\"]\n            ?? throw new InvalidOperationException(\"RemoteAppUri is not configured\"));\n        options.ApiKey = builder.Configuration[\"RemoteAppApiKey\"]    // must be a GUID string: user-secrets / Key Vault\n            ?? throw new InvalidOperationException(\"RemoteAppApiKey is not configured\");   // fail fast\n    });\n// Remote session and remote authentication are added with further extension methods when you need them.\n\nvar app = builder.Build();\n\napp.UseSystemWebAdapters();                                 // after routing and auth in a real app\n\n// Migrated routes are mapped in this app. Example:\napp.MapGet(\"/api/prices/{sku}\", (string sku) => Results.Ok(new { sku, price = 120 }));\n\n// Everything else falls back to the old app. Lowest priority = tried last.\nvar legacyUrl = app.Services.GetRequiredService<IOptions<RemoteAppClientOptions>>().Value.RemoteAppUrl.OriginalString;\napp.MapForwarder(\"/{**catch-all}\", legacyUrl)\n   .WithOrder(int.MaxValue)\n   .ShortCircuit();\n\napp.Run();"
        }
      ]
    },
    {
      id: "whats-new",
      depth: "detailed",
      title: {
        en: "What is new: tooling, support dates and migration guidance",
        hi: "नया क्या है: tooling, support dates और migration guidance",
        hg: "Naya kya hai: tooling, support dates aur migration guidance"
      },
      body: {
        en: "<ul>\n<li><b>Tooling change (verify before quoting):</b> the Upgrade Assistant page on Microsoft Learn is now marked deprecated, and the current upgrade docs are titled <b>GitHub Copilot upgrade</b> (it also runs from GitHub Copilot CLI and GitHub.com). Older blog posts and courses that teach the Upgrade Assistant as the main tool are out of date.</li>\n<li><b>Migration guidance:</b> the current ASP.NET Core migration docs centre on <b>incremental migration</b> (strangler fig): YARP in front, System.Web adapters (<code>Microsoft.AspNetCore.SystemWebAdapters</code>) for shared session, authentication and even hosting <code>IHttpModule</code> and <code>Global.asax</code> logic. This is a library and tooling story, not a C# language feature.</li>\n<li><b>Support dates (from Microsoft's .NET support policy page):</b> .NET 10 is LTS, supported until 14 November 2028. .NET 8 (LTS) and .NET 9 (STS) are both listed as ending on 10 November 2026, so a migration that targets .NET 8 today has a short runway; target .NET 10.</li>\n<li><b>Unchanged:</b> .NET Framework 4.x is still a Windows component with the lifecycle of its Windows version, and Web Forms still has no ASP.NET Core version.</li>\n</ul>",
        hi: "<ul>\n<li><b>Tooling बदलाव (बोलने से पहले जाँचो):</b> Microsoft Learn पर Upgrade Assistant वाला page अब deprecated लिखा है, और अभी के upgrade docs का title <b>GitHub Copilot upgrade</b> है (यह GitHub Copilot CLI और GitHub.com से भी चलता है)। जो पुराने blog posts और courses Upgrade Assistant को main tool बताते हैं, वे पुराने हो चुके हैं।</li>\n<li><b>Migration guidance:</b> मौजूदा ASP.NET Core migration docs <b>incremental migration</b> (strangler fig) पर focus करते हैं: आगे YARP, shared session, authentication और यहाँ तक कि <code>IHttpModule</code> और <code>Global.asax</code> logic host करने के लिए System.Web adapters (<code>Microsoft.AspNetCore.SystemWebAdapters</code>)। यह library और tooling की बात है, C# language feature नहीं।</li>\n<li><b>Support dates (Microsoft की .NET support policy page से):</b> .NET 10 LTS है, 14 नवंबर 2028 तक supported। .NET 8 (LTS) और .NET 9 (STS) दोनों 10 नवंबर 2026 को ख़त्म होने वाले listed हैं, इसलिए आज .NET 8 target करने वाले migration के पास runway छोटा है; .NET 10 target करो।</li>\n<li><b>जो नहीं बदला:</b> .NET Framework 4.x अब भी Windows component है और अपने Windows version का lifecycle follow करता है, और Web Forms का अब भी कोई ASP.NET Core version नहीं है।</li>\n</ul>",
        hg: "<ul>\n<li><b>Tooling badlaav (bolne se pehle jaancho):</b> Microsoft Learn par Upgrade Assistant wala page ab deprecated likha hai, aur abhi ke upgrade docs ka title <b>GitHub Copilot upgrade</b> hai (ye GitHub Copilot CLI aur GitHub.com se bhi chalta hai). Jo purane blog posts aur courses Upgrade Assistant ko main tool batate hain, woh purane ho chuke hain.</li>\n<li><b>Migration guidance:</b> maujooda ASP.NET Core migration docs <b>incremental migration</b> (strangler fig) par focus karte hain: aage YARP, shared session, authentication aur yahan tak ki <code>IHttpModule</code> aur <code>Global.asax</code> logic host karne ke liye System.Web adapters (<code>Microsoft.AspNetCore.SystemWebAdapters</code>). Yeh library aur tooling ki baat hai, C# language feature nahi.</li>\n<li><b>Support dates (Microsoft ki .NET support policy page se):</b> .NET 10 LTS hai, 14 November 2028 tak supported. .NET 8 (LTS) aur .NET 9 (STS) dono 10 November 2026 ko khatam hone wale listed hain, isliye aaj .NET 8 target karne wale migration ke paas runway chhota hai; .NET 10 target karo.</li>\n<li><b>Jo nahi badla:</b> .NET Framework 4.x ab bhi Windows component hai aur apne Windows version ka lifecycle follow karta hai, aur Web Forms ka ab bhi koi ASP.NET Core version nahi hai.</li>\n</ul>"
      }
    }
  ],
  qa: [
    {
      id: "webforms-lifecycle-order",
      depth: "short",
      q: "Explain the ASP.NET Web Forms page life cycle.",
      answer: "PreInit, Init, Load, control events, PreRender, Render, Unload. Init and Unload run child-first, Load and PreRender run parent-first, and on a postback ViewState is loaded before Load.",
      meaning: {
        hi: "PreInit, Init, Load, control events, PreRender, Render, Unload। Init और Unload child-first, Load और PreRender parent-first; postback में ViewState Load से पहले load होता है।",
        hg: "PreInit, Init, Load, control events, PreRender, Render, Unload. Init aur Unload child-first, Load aur PreRender parent-first; postback mein ViewState Load se pehle load hota hai."
      },
      explain: {
        en: "<ul>\n<li>Typical use: <code>PreInit</code> for dynamic controls and master pages, <code>Init</code> to set up controls, <code>Load</code> for data (guarded by <code>!IsPostBack</code>), <code>PreRender</code> for final changes, <code>Unload</code> for cleanup.</li>\n<li>Other events you can name: <code>InitComplete</code> (after Init), <code>PreLoad</code> (after ViewState and postback data are loaded, before Load), <code>LoadComplete</code> (after control events), <code>PreRenderComplete</code> and <code>SaveStateComplete</code> (just before Render). ViewState is loaded before <code>PreLoad</code>, so values you set in <code>PreInit</code> may be overwritten.</li>\n<li>Classic bug: rebinding data in <code>Page_Load</code> on every request wipes the user's input before the button's click event runs.</li>\n<li>Follow-up: \"Where do you add controls dynamically?\" In <code>PreInit</code> or <code>Init</code>, and re-create them on every request so their ViewState and events line up.</li>\n</ul>",
        hi: "<ul>\n<li>आम use: <code>PreInit</code> dynamic controls और master pages के लिए, <code>Init</code> controls set up करने के लिए, <code>Load</code> data के लिए (<code>!IsPostBack</code> से guarded), <code>PreRender</code> आख़िरी बदलावों के लिए, <code>Unload</code> cleanup के लिए।</li>\n<li>और events जो नाम से बोल सको: <code>InitComplete</code> (Init के बाद), <code>PreLoad</code> (ViewState और postback data load होने के बाद, Load से पहले), <code>LoadComplete</code> (control events के बाद), <code>PreRenderComplete</code> और <code>SaveStateComplete</code> (Render से ठीक पहले)। ViewState <code>PreLoad</code> से पहले load होता है, इसलिए <code>PreInit</code> में set की values overwrite हो सकती हैं।</li>\n<li>Classic bug: हर request पर <code>Page_Load</code> में data rebind करने से button का click event चलने से पहले user का input मिट जाता है।</li>\n<li>Follow-up: \"Dynamic controls कहाँ add करते हो?\" <code>PreInit</code> या <code>Init</code> में, और हर request पर दोबारा बनाओ ताकि उनका ViewState और events ठीक बैठें।</li>\n</ul>",
        hg: "<ul>\n<li>Aam use: <code>PreInit</code> dynamic controls aur master pages ke liye, <code>Init</code> controls set up karne ke liye, <code>Load</code> data ke liye (<code>!IsPostBack</code> se guarded), <code>PreRender</code> aakhri badlaavon ke liye, <code>Unload</code> cleanup ke liye.</li>\n<li>Aur events jo naam se bol sako: <code>InitComplete</code> (Init ke baad), <code>PreLoad</code> (ViewState aur postback data load hone ke baad, Load se pehle), <code>LoadComplete</code> (control events ke baad), <code>PreRenderComplete</code> aur <code>SaveStateComplete</code> (Render se theek pehle). ViewState <code>PreLoad</code> se pehle load hota hai, isliye <code>PreInit</code> mein set ki values overwrite ho sakti hain.</li>\n<li>Classic bug: har request par <code>Page_Load</code> mein data rebind karne se button ka click event chalne se pehle user ka input mit jaata hai.</li>\n<li>Follow-up: \"Dynamic controls kahan add karte ho?\" <code>PreInit</code> ya <code>Init</code> mein, aur har request par dobara banao taaki unka ViewState aur events theek baithein.</li>\n</ul>"
      }
    },
    {
      id: "viewstate-and-core",
      depth: "short",
      q: "What is ViewState, and why is there nothing like it in ASP.NET Core?",
      answer: "ViewState is a hidden field that carries control state between postbacks. ASP.NET Core dropped the server-control model, so state lives in the database, a cache, a cookie or the client.",
      meaning: {
        hi: "ViewState एक hidden field है जो postbacks के बीच control state ले जाता है। ASP.NET Core ने server-control model छोड़ दिया, इसलिए state database, cache, cookie या client में रहती है।",
        hg: "ViewState ek hidden field hai jo postbacks ke beech control state le jaata hai. ASP.NET Core ne server-control model chhod diya, isliye state database, cache, cookie ya client mein rehti hai."
      },
      explain: {
        en: "<ul>\n<li>ViewState grows with the page and travels in both directions on every postback (Puzzle 2). It is Base64-encoded, not encrypted by default (encryption is optional), and the MAC check has been mandatory since .NET Framework 4.5.2, so it is not a place for secrets.</li>\n<li>Replacement: handlers load fresh data per request (Razor Pages, controllers, minimal APIs). For stateful UI, Blazor components keep their own state.</li>\n<li>Follow-up: \"How would you migrate a ViewState-heavy page?\" Move the state to a model or a cache, rebuild the page as a Razor Page or Blazor component, and leave the old page behind the proxy until then.</li>\n<li>Follow-up: \"ViewState versus ControlState versus Session?\" ViewState is per page and lives in the hidden field (it can be disabled per control); ControlState is the small state a control needs to work at all and is kept even when ViewState is off; Session is kept on the server per user across pages.</li>\n<li>TL security point: ViewState is signed (and optionally encrypted) with the <code>machineKey</code>. If that key leaks, for example from a public repository or a copied sample config, attackers can craft ViewState that the server deserializes, which can lead to remote code execution. Keep the key out of source control, rotate it if exposed, and treat ViewState-heavy pages as one more reason to migrate.</li>\n</ul>",
        hi: "<ul>\n<li>ViewState page के साथ बढ़ता है और हर postback में दोनों दिशाओं में जाता है (Puzzle 2)। वह Base64-encoded होता है, default में encrypted नहीं (encryption optional है), और MAC check .NET Framework 4.5.2 से mandatory है, इसलिए secrets रखने की जगह नहीं है।</li>\n<li>Replacement: handlers हर request पर ताज़ा data load करते हैं (Razor Pages, controllers, minimal APIs)। Stateful UI के लिए Blazor components अपनी state रखते हैं।</li>\n<li>Follow-up: \"ViewState-heavy page कैसे migrate करोगे?\" State को model या cache में ले जाओ, page को Razor Page या Blazor component में दोबारा बनाओ, और तब तक पुराने page को proxy के पीछे रहने दो।</li>\n<li>Follow-up: \"ViewState बनाम ControlState बनाम Session?\" ViewState per page है और hidden field में रहता है (control-wise बंद किया जा सकता है); ControlState वह छोटी state है जो control को चलने के लिए चाहिए और ViewState बंद होने पर भी रहती है; Session server पर per user, pages के पार रहता है।</li>\n<li>TL security point: ViewState <code>machineKey</code> से signed (और चाहो तो encrypted) होता है। अगर वह key leak हो जाए, जैसे public repository या copy किए sample config से, तो attackers ऐसा ViewState बना सकते हैं जिसे server deserialize करे, जिससे remote code execution तक हो सकता है। Key को source control से बाहर रखो, exposed हो तो rotate करो, और ViewState-heavy pages को migrate करने की एक और वजह समझो।</li>\n</ul>",
        hg: "<ul>\n<li>ViewState page ke saath badhta hai aur har postback mein dono dishaon mein jaata hai (Puzzle 2). Woh Base64-encoded hota hai, default mein encrypted nahi (encryption optional hai), aur MAC check .NET Framework 4.5.2 se mandatory hai, isliye secrets rakhne ki jagah nahi hai.</li>\n<li>Replacement: handlers har request par taaza data load karte hain (Razor Pages, controllers, minimal APIs). Stateful UI ke liye Blazor components apni state rakhte hain.</li>\n<li>Follow-up: \"ViewState-heavy page kaise migrate karoge?\" State ko model ya cache mein le jao, page ko Razor Page ya Blazor component mein dobara banao, aur tab tak purane page ko proxy ke peechhe rehne do.</li>\n<li>Follow-up: \"ViewState vs ControlState vs Session?\" ViewState per page hai aur hidden field mein rehta hai (control-wise band kiya ja sakta hai); ControlState woh chhoti state hai jo control ko chalne ke liye chahiye aur ViewState band hone par bhi rehti hai; Session server par per user, pages ke paar rehta hai.</li>\n<li>TL security point: ViewState <code>machineKey</code> se signed (aur chaho to encrypted) hota hai. Agar woh key leak ho jaye, jaise public repository ya copy kiye sample config se, to attackers aisa ViewState bana sakte hain jise server deserialize kare, jisse remote code execution tak ho sakta hai. Key ko source control se bahar rakho, exposed ho to rotate karo, aur ViewState-heavy pages ko migrate karne ki ek aur wajah samjho.</li>\n</ul>"
      }
    },
    {
      id: "mvc5-lifecycle",
      depth: "short",
      q: "Walk me through the ASP.NET MVC 5 request lifecycle.",
      answer: "Routing picks the route, MvcRouteHandler creates MvcHandler, the controller factory creates the controller, the action invoker runs filters, model binding and the action, then the result executes and the view engine renders.",
      meaning: {
        hi: "Routing route चुनती है, MvcRouteHandler MvcHandler बनाता है, controller factory controller बनाती है, action invoker filters, model binding और action चलाता है, फिर result execute होता है और view engine render करता है।",
        hg: "Routing route chunti hai, MvcRouteHandler MvcHandler banata hai, controller factory controller banati hai, action invoker filters, model binding aur action chalata hai, phir result execute hota hai aur view engine render karta hai."
      },
      explain: {
        en: "<ul>\n<li>Order in MVC 5: authentication filters, authorization filters, model binding, action filters (before and after the action), result filters; exception filters catch errors.</li>\n<li>In ASP.NET Core the same ideas run as an <b>endpoint</b> after the middleware before it; the controller comes from DI and filters can be async and injected (Day 12).</li>\n<li>Follow-up: \"Where would you put cross-cutting logging?\" Middleware if it must see every request; an action filter if it needs action arguments or the model state.</li>\n</ul>",
        hi: "<ul>\n<li>MVC 5 में order: authentication filters, authorization filters, model binding, action filters (action से पहले और बाद), result filters; exception filters errors पकड़ते हैं।</li>\n<li>ASP.NET Core में वही ideas उससे पहले के middleware के बाद एक <b>endpoint</b> की तरह चलते हैं; controller DI से आता है और filters async और injected हो सकते हैं (Day 12)।</li>\n<li>Follow-up: \"Cross-cutting logging कहाँ रखोगे?\" हर request देखनी हो तो middleware में; action arguments या model state चाहिए तो action filter में।</li>\n</ul>",
        hg: "<ul>\n<li>MVC 5 mein order: authentication filters, authorization filters, model binding, action filters (action se pehle aur baad), result filters; exception filters errors pakadte hain.</li>\n<li>ASP.NET Core mein wahi ideas usse pehle ke middleware ke baad ek <b>endpoint</b> ki tarah chalte hain; controller DI se aata hai aur filters async aur injected ho sakte hain (Day 12).</li>\n<li>Follow-up: \"Cross-cutting logging kahan rakhoge?\" Har request dekhni ho to middleware mein; action arguments ya model state chahiye to action filter mein.</li>\n</ul>"
      }
    },
    {
      id: "modules-to-middleware",
      depth: "short",
      q: "How do HttpModules, HttpHandlers and Global.asax map to ASP.NET Core?",
      answer: "Modules become middleware, handlers become endpoints, and Global.asax startup becomes Program.cs. Modules run in the same order on request and response per event; middleware unwinds in reverse.",
      meaning: {
        hi: "Modules middleware बनते हैं, handlers endpoints, और Global.asax का startup Program.cs। Modules हर event के लिए request और response पर एक ही order में चलते हैं; middleware उल्टा unwind होता है।",
        hg: "Modules middleware bante hain, handlers endpoints, aur Global.asax ka startup Program.cs. Modules har event ke liye request aur response par ek hi order mein chalte hain; middleware ulta unwind hota hai."
      },
      explain: {
        en: "<ul>\n<li>Port by intent: what did the module do (headers, auth, logging, rewrite)? Then check if Core already has a built-in for it.</li>\n<li>Ordering needs care because modules were tied to named events (Puzzle 3) and middleware order is the order in <code>Program.cs</code> (Day 12).</li>\n<li>Follow-up: \"A module is too risky to rewrite now.\" The System.Web adapters can host <code>IHttpModule</code> and a <code>Global.asax</code>-style <code>HttpApplication</code> inside ASP.NET Core as a temporary bridge.</li>\n</ul>",
        hi: "<ul>\n<li>Intent के हिसाब से port करो: module करता क्या था (headers, auth, logging, rewrite)? फिर देखो क्या Core में उसका built-in है।</li>\n<li>Ordering में सावधानी चाहिए क्योंकि modules named events से बँधे थे (Puzzle 3) और middleware का order <code>Program.cs</code> का order है (Day 12)।</li>\n<li>Follow-up: \"Module अभी rewrite करने के लिए बहुत risky है।\" System.Web adapters <code>IHttpModule</code> और <code>Global.asax</code>-style <code>HttpApplication</code> को ASP.NET Core के अंदर temporary bridge की तरह host कर सकते हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Intent ke hisaab se port karo: module karta kya tha (headers, auth, logging, rewrite)? Phir dekho kya Core mein uska built-in hai.</li>\n<li>Ordering mein saavdhani chahiye kyunki modules named events se bandhe the (Puzzle 3) aur middleware ka order <code>Program.cs</code> ka order hai (Day 12).</li>\n<li>Follow-up: \"Module abhi rewrite karne ke liye bahut risky hai.\" System.Web adapters <code>IHttpModule</code> aur <code>Global.asax</code>-style <code>HttpApplication</code> ko ASP.NET Core ke andar temporary bridge ki tarah host kar sakte hain.</li>\n</ul>"
      }
    },
    {
      id: "net-framework-support",
      depth: "short",
      q: "Is .NET Framework 4.8.1 still supported, and should we move to modern .NET anyway?",
      answer: "Yes, it is supported as a Windows component, following the lifecycle of the Windows version it runs on. It is in maintenance, so new features and investment go to modern .NET (.NET 10 is LTS).",
      meaning: {
        hi: "हाँ, यह Windows component की तरह supported है और उस Windows version के lifecycle को follow करता है जिस पर चलता है। यह maintenance में है, इसलिए नए features और investment modern .NET में जाते हैं (.NET 10 LTS है)।",
        hg: "Haan, yeh Windows component ki tarah supported hai aur us Windows version ke lifecycle ko follow karta hai jis par chalta hai. Yeh maintenance mein hai, isliye naye features aur investment modern .NET mein jaate hain (.NET 10 LTS hai)."
      },
      explain: {
        en: "<ul>\n<li>Source: Microsoft's lifecycle FAQ says .NET Framework 4.x is a component of Windows and follows the lifecycle of the Windows OS it is installed on. Check the OS you actually run, and re-read the page before you quote dates.</li>\n<li>.NET 10 (released November 2025) is LTS with support until 14 November 2028, per Microsoft's .NET support policy page. Older versions drop out: .NET Framework 4.6.2 is listed as ending in January 2027.</li>\n<li>Reasons to move: Linux and containers, performance, cloud cost, new language and library features, hiring. \"It is out of support\" is usually the wrong argument for 4.8.x, so do not use it with the business.</li>\n</ul>",
        hi: "<ul>\n<li>Source: Microsoft के lifecycle FAQ के अनुसार .NET Framework 4.x Windows का component है और जिस Windows OS पर install है उसके lifecycle को follow करता है। जो OS तुम असल में चलाते हो वह देखो, और dates बोलने से पहले page दोबारा पढ़ो।</li>\n<li>.NET 10 (नवंबर 2025 में release) LTS है और Microsoft की .NET support policy page के अनुसार 14 नवंबर 2028 तक supported है। पुराने versions बाहर होते जाते हैं: .NET Framework 4.6.2 जनवरी 2027 में ख़त्म होने वाला listed है।</li>\n<li>Move करने के कारण: Linux और containers, performance, cloud cost, नए language और library features, hiring। 4.8.x के लिए \"यह out of support है\" आम तौर पर ग़लत argument है, इसलिए business के सामने इसे use मत करो।</li>\n</ul>",
        hg: "<ul>\n<li>Source: Microsoft ke lifecycle FAQ ke anusaar .NET Framework 4.x Windows ka component hai aur jis Windows OS par install hai uske lifecycle ko follow karta hai. Jo OS tum asal mein chalate ho woh dekho, aur dates bolne se pehle page dobara padho.</li>\n<li>.NET 10 (November 2025 mein release) LTS hai aur Microsoft ki .NET support policy page ke anusaar 14 November 2028 tak supported hai. Purane versions baahar hote jaate hain: .NET Framework 4.6.2 January 2027 mein khatam hone wala listed hai.</li>\n<li>Move karne ke kaaran: Linux aur containers, performance, cloud cost, naye language aur library features, hiring. 4.8.x ke liye \"yeh out of support hai\" aam taur par galat argument hai, isliye business ke saamne ise use mat karo.</li>\n</ul>"
      }
    },
    {
      id: "incremental-vs-big-bang",
      depth: "short",
      q: "Big-bang rewrite or incremental migration: which would you choose?",
      answer: "For large live apps, incremental: put an ASP.NET Core app in front, proxy unmigrated routes to the old app with YARP, and move routes one by one. Small, simple apps can be migrated in place.",
      meaning: {
        hi: "बड़े live apps के लिए incremental: आगे ASP.NET Core app रखो, unmigrated routes को YARP से पुराने app पर proxy करो, और routes एक-एक करके शिफ़्ट करो। छोटे, simple apps in place migrate हो सकते हैं।",
        hg: "Bade live apps ke liye incremental: aage ASP.NET Core app rakho, unmigrated routes ko YARP se purane app par proxy karo, aur routes ek-ek karke shift karo. Chhote, simple apps in place migrate ho sakte hain."
      },
      explain: {
        en: "<ul>\n<li>Microsoft's migration guide calls incremental migration an implementation of the Strangler Fig pattern and prefers it for larger apps and apps that must stay in production.</li>\n<li>Big-bang risks: a long freeze of new features, a late and scary cut-over, and a rewrite that misses hidden behaviour. Incremental trades that for temporary complexity (two apps, a proxy, shared session and auth).</li>\n<li>Follow-up: \"What if the app is small?\" Then an in-place upgrade is cheaper; do not build a proxy you will throw away in two weeks.</li>\n</ul>",
        hi: "<ul>\n<li>Microsoft की migration guide incremental migration को Strangler Fig pattern का implementation कहती है और बड़े apps और production में रहने वाले apps के लिए उसे पसंद करती है।</li>\n<li>Big-bang के risks: नए features पर लंबा freeze, देर से आने वाला डरावना cut-over, और ऐसा rewrite जो छुपा हुआ behaviour छोड़ दे। Incremental यह temporary complexity से बदलता है (दो apps, एक proxy, shared session और auth)।</li>\n<li>Follow-up: \"अगर app छोटा है?\" तो in-place upgrade सस्ता है; ऐसा proxy मत बनाओ जिसे दो हफ़्ते में फेंकना है।</li>\n</ul>",
        hg: "<ul>\n<li>Microsoft ki migration guide incremental migration ko Strangler Fig pattern ka implementation kehti hai aur bade apps aur production mein rehne wale apps ke liye use pasand karti hai.</li>\n<li>Big-bang ke risks: naye features par lamba freeze, der se aane wala daravna cut-over, aur aisa rewrite jo chhupa hua behaviour chhod de. Incremental yeh temporary complexity se badalta hai (do apps, ek proxy, shared session aur auth).</li>\n<li>Follow-up: \"Agar app chhota hai?\" To in-place upgrade sasta hai; aisa proxy mat banao jise do hafte mein phenkna hai.</li>\n</ul>"
      }
    },
    {
      id: "httpcontext-current-replacement",
      depth: "short",
      q: "What replaces HttpContext.Current in ASP.NET Core?",
      answer: "Nothing global. Pass the values you need as parameters or through a scoped service; IHttpContextAccessor exists, but treat it as a last-resort bridge.",
      meaning: {
        hi: "कोई global चीज़ नहीं। जो values चाहिए उन्हें parameters या scoped service से pass करो; IHttpContextAccessor है, पर उसे आख़िरी option वाला bridge समझो।",
        hg: "Koi global cheez nahi. Jo values chahiye unhe parameters ya scoped service se pass karo; IHttpContextAccessor hai, par use aakhri option wala bridge samjho."
      },
      explain: {
        en: "<ul>\n<li><code>IHttpContextAccessor</code> must be registered with <code>AddHttpContextAccessor</code>, uses <code>AsyncLocal</code>, and returns <code>null</code> outside a request (Puzzle 6).</li>\n<li>Hidden dependency on the web layer makes classes harder to unit test and to reuse in workers (Day 11, DI).</li>\n<li>Follow-up: \"A shared library still calls HttpContext.Current.\" During migration, the System.Web adapters let shared code keep compiling and running; plan to remove the dependency later.</li>\n</ul>",
        hi: "<ul>\n<li><code>IHttpContextAccessor</code> को <code>AddHttpContextAccessor</code> से register करना पड़ता है, वह <code>AsyncLocal</code> use करता है, और request के बाहर <code>null</code> देता है (Puzzle 6)।</li>\n<li>Web layer पर छुपी dependency classes को unit test करना और workers में reuse करना मुश्किल बनाती है (Day 11, DI)।</li>\n<li>Follow-up: \"Shared library अब भी HttpContext.Current call करती है।\" Migration के दौरान System.Web adapters shared code को compile और चलते रहने देते हैं; dependency बाद में हटाने का plan रखो।</li>\n</ul>",
        hg: "<ul>\n<li><code>IHttpContextAccessor</code> ko <code>AddHttpContextAccessor</code> se register karna padta hai, woh <code>AsyncLocal</code> use karta hai, aur request ke baahar <code>null</code> deta hai (Puzzle 6).</li>\n<li>Web layer par chhupi dependency classes ko unit test karna aur workers mein reuse karna mushkil banati hai (Day 11, DI).</li>\n<li>Follow-up: \"Shared library ab bhi HttpContext.Current call karti hai.\" Migration ke dauraan System.Web adapters shared code ko compile aur chalte rehne dete hain; dependency baad mein hatane ka plan rakho.</li>\n</ul>"
      }
    },
    {
      id: "migration-plan-as-tl",
      depth: "short",
      q: "As a Tech Lead, how would you plan a .NET Framework to modern .NET migration?",
      answer: "Assess and rank routes by risk and value, tidy dependencies, move shared libraries to .NET Standard 2.0 or multi-target, proxy and migrate route by route, measure progress, and keep a rollback.",
      meaning: {
        hi: "Routes को risk और value से assess और rank करो, dependencies साफ़ करो, shared libraries को .NET Standard 2.0 पर ले जाओ या multi-target करो, proxy से route-by-route migrate करो, progress नापो, और rollback रखो।",
        hg: "Routes ko risk aur value se assess aur rank karo, dependencies saaf karo, shared libraries ko .NET Standard 2.0 par le jao ya multi-target karo, proxy se route-by-route migrate karo, progress naapo, aur rollback rakho."
      },
      explain: {
        en: "<ul>\n<li>Order: assessment, tidy-up (packages, SDK-style projects), libraries in post-order, then proxy and route-by-route migration, and finally switching off the old app.</li>\n<li>Tooling: Microsoft now points to GitHub Copilot upgrade agent (the .NET Upgrade Assistant is officially deprecated). Use it to assess and automate steps; review its output like any other pull request (Day 21).</li>\n<li>Follow-up: \"How do you show progress?\" Percentage of traffic and number of routes on the new app, defect rate, and deploy frequency (Puzzle 5).</li>\n</ul>",
        hi: "<ul>\n<li>Order: assessment, tidy-up (packages, SDK-style projects), libraries post-order में, फिर proxy और route-by-route migration, और आख़िर में पुराने app को बंद करना।</li>\n<li>Tooling: Microsoft अब GitHub Copilot upgrade agent की तरफ़ इशारा करता है (.NET Upgrade Assistant officially deprecated है)। उसे assess करने और steps automate करने के लिए use करो; उसका output किसी भी दूसरे pull request की तरह review करो (Day 21)।</li>\n<li>Follow-up: \"Progress कैसे दिखाते हो?\" नए app पर traffic का percentage और routes की गिनती, defect rate, और deploy frequency (Puzzle 5)।</li>\n</ul>",
        hg: "<ul>\n<li>Order: assessment, tidy-up (packages, SDK-style projects), libraries post-order mein, phir proxy aur route-by-route migration, aur aakhir mein purane app ko band karna.</li>\n<li>Tooling: Microsoft ab GitHub Copilot upgrade agent ki taraf ishara karta hai (.NET Upgrade Assistant officially deprecated hai). Use assess karne aur steps automate karne ke liye use karo; uska output kisi bhi dusre pull request ki tarah review karo (Day 21).</li>\n<li>Follow-up: \"Progress kaise dikhate ho?\" Naye app par traffic ka percentage aur routes ki ginti, defect rate, aur deploy frequency (Puzzle 5).</li>\n</ul>"
      }
    },
    {
      id: "webconfig-to-appsettings",
      depth: "detailed",
      q: "How do you move configuration from web.config to ASP.NET Core?",
      answer: "App settings and connection strings move to appsettings.json, environment-specific files, environment variables and a secret store, bound to typed options. web.config remains mainly for IIS hosting settings.",
      meaning: {
        hi: "App settings और connection strings appsettings.json, environment-specific files, environment variables और secret store में जाते हैं, typed options से bind। web.config मुख्य रूप से IIS hosting settings के लिए बचता है।",
        hg: "App settings aur connection strings appsettings.json, environment-specific files, environment variables aur secret store mein jaate hain, typed options se bind. web.config mukhya roop se IIS hosting settings ke liye bachta hai."
      },
      explain: {
        en: "<ul>\n<li>Config transforms (<code>web.Release.config</code>) become <code>appsettings.{Environment}.json</code> or environment variables set by the pipeline (Day 21). Providers are layered and the last one wins (Day 12).</li>\n<li>Secrets: user-secrets in development, Key Vault or a managed identity in Azure (Day 20), not in source control.</li>\n<li>Follow-up: \"Both apps need the same setting during migration.\" Keep one source of truth (a shared store or environment variable) and read it from both, instead of copying values.</li>\n</ul>",
        hi: "<ul>\n<li>Config transforms (<code>web.Release.config</code>) अब <code>appsettings.{Environment}.json</code> या pipeline द्वारा set किए environment variables बनते हैं (Day 21)। Providers layered होते हैं और आख़िरी वाला जीतता है (Day 12)।</li>\n<li>Secrets: development में user-secrets, Azure में Key Vault या managed identity (Day 20), source control में नहीं।</li>\n<li>Follow-up: \"Migration के दौरान दोनों apps को वही setting चाहिए।\" single source of truth रखो (shared store या environment variable) और दोनों से पढ़ो, values copy मत करो।</li>\n</ul>",
        hg: "<ul>\n<li>Config transforms (<code>web.Release.config</code>) ab <code>appsettings.{Environment}.json</code> ya pipeline dwara set kiye environment variables bante hain (Day 21). Providers layered hote hain aur aakhri wala jeetta hai (Day 12).</li>\n<li>Secrets: development mein user-secrets, Azure mein Key Vault ya managed identity (Day 20), source control mein nahi.</li>\n<li>Follow-up: \"Migration ke dauraan dono apps ko wahi setting chahiye.\" Single source of truth rakho (shared store ya environment variable) aur dono se padho, values copy mat karo.</li>\n</ul>"
      }
    },
    {
      id: "session-state-migration",
      depth: "detailed",
      q: "How do you handle Session state when migrating to ASP.NET Core?",
      answer: "ASP.NET Core has its own session API on a distributed cache, different from System.Web. During migration the System.Web adapters can share session; long term, keep little state in a database or cache.",
      meaning: {
        hi: "ASP.NET Core की अपनी session API है जो distributed cache पर चलती है, और वह System.Web से अलग है। Incremental migration में System.Web adapters session share करा सकते हैं; लंबे समय में कम state रखो और database या cache में रखो।",
        hg: "ASP.NET Core ki apni session API hai jo distributed cache par chalti hai, aur woh System.Web se alag hai. Incremental migration mein System.Web adapters session share kara sakte hain; lambe samay mein kam state rakho aur database ya cache mein rakho."
      },
      explain: {
        en: "<ul>\n<li>Old default: in-process session. It dies on app restart and does not work across multiple servers, which already hurts scaling before any migration.</li>\n<li>Microsoft's docs describe sharing session state between the old and the new app through the adapters (the remote app owns it for now). Agree the list of shared keys and their serialization early.</li>\n<li>Follow-up: \"Is session a good place for the shopping cart?\" Usually a database or distributed cache keyed by user or cart id is safer, because it survives restarts and scale-out.</li>\n</ul>",
        hi: "<ul>\n<li>पुराना default: in-process session। वह app restart पर मर जाता है और कई servers में काम नहीं करता, जो migration से पहले ही scaling को चोट पहुँचाता है।</li>\n<li>Microsoft के docs adapters के ज़रिए पुराने और नए app के बीच session state share करना बताते हैं (अभी remote app उसका मालिक रहता है)। Shared keys की list और उनकी serialization पहले तय करो।</li>\n<li>Follow-up: \"क्या shopping cart के लिए session अच्छी जगह है?\" आम तौर पर user या cart id से keyed database या distributed cache ज़्यादा safe है, क्योंकि वह restarts और scale-out झेलता है।</li>\n</ul>",
        hg: "<ul>\n<li>Purana default: in-process session. Woh app restart par mar jaata hai aur kai servers mein kaam nahi karta, jo migration se pehle hi scaling ko chot pahunchata hai.</li>\n<li>Microsoft ke docs adapters ke zariye purane aur naye app ke beech session state share karna batate hain (abhi remote app uska maalik rehta hai). Shared keys ki list aur unki serialization pehle tay karo.</li>\n<li>Follow-up: \"Kya shopping cart ke liye session achhi jagah hai?\" Aam taur par user ya cart id se keyed database ya distributed cache zyada safe hai, kyunki woh restarts aur scale-out jhelta hai.</li>\n</ul>"
      }
    },
    {
      id: "webapi2-vs-core",
      depth: "detailed",
      q: "What changes when you move a Web API 2 project to ASP.NET Core Web API?",
      answer: "Controllers derive from ControllerBase with [ApiController], results become ActionResult&lt;T&gt;, message handlers become middleware, and DI is built in. Re-check routing, model binding and JSON defaults with contract tests.",
      meaning: {
        hi: "Controllers ControllerBase से derive होते हैं [ApiController] के साथ, results ActionResult&lt;T&gt; बनते हैं, message handlers middleware बनते हैं, और DI built-in है। Routing, model binding और JSON defaults को contract tests से दोबारा जाँचो।",
        hg: "Controllers ControllerBase se derive hote hain [ApiController] ke saath, results ActionResult&lt;T&gt; bante hain, message handlers middleware bante hain, aur DI built-in hai. Routing, model binding aur JSON defaults ko contract tests se dobara jaancho."
      },
      explain: {
        en: "<ul>\n<li>Unity/Autofac setup is replaced by the built-in container (Day 11); <code>HttpConfiguration</code> and <code>WebApiConfig</code> become <code>Program.cs</code> (Day 13).</li>\n<li>Typical surprises: default JSON serializer (System.Text.Json versus Newtonsoft.Json in Web API 2), date and enum formatting, validation responses (ProblemDetails with <code>[ApiController]</code>), and routing templates.</li>\n<li>Follow-up: \"How do you make sure the API still behaves the same?\" Capture existing responses as contract or characterization tests and run them against both apps behind the proxy.</li>\n</ul>",
        hi: "<ul>\n<li>Unity/Autofac setup की जगह built-in container (Day 11); <code>HttpConfiguration</code> और <code>WebApiConfig</code> की जगह <code>Program.cs</code> (Day 13)।</li>\n<li>आम surprises: default JSON serializer (System.Text.Json बनाम Web API 2 में Newtonsoft.Json), date और enum formatting, validation responses (<code>[ApiController]</code> के साथ ProblemDetails), और routing templates।</li>\n<li>Follow-up: \"API पहले जैसा ही behave करे यह कैसे पक्का करते हो?\" मौजूदा responses को contract या characterization tests में capture करो और proxy के पीछे दोनों apps पर चलाओ।</li>\n</ul>",
        hg: "<ul>\n<li>Unity/Autofac setup ki jagah built-in container (Day 11); <code>HttpConfiguration</code> aur <code>WebApiConfig</code> ki jagah <code>Program.cs</code> (Day 13).</li>\n<li>Aam surprises: default JSON serializer (System.Text.Json vs Web API 2 mein Newtonsoft.Json), date aur enum formatting, validation responses (<code>[ApiController]</code> ke saath ProblemDetails), aur routing templates.</li>\n<li>Follow-up: \"API pehle jaisa hi behave kare yeh kaise pakka karte ho?\" Maujooda responses ko contract ya characterization tests mein capture karo aur proxy ke peechhe dono apps par chalao.</li>\n</ul>"
      }
    },
    {
      id: "wcf-options",
      depth: "detailed",
      q: "We have WCF services. What are our options on modern .NET?",
      answer: "WCF server is not part of modern .NET. Use CoreWCF to keep SOAP contracts for existing clients, or move to gRPC or HTTP APIs if you control the clients.",
      meaning: {
        hi: "WCF server modern .NET का हिस्सा नहीं है। मौजूदा clients के लिए SOAP contracts रखने हों तो CoreWCF, और clients तुम्हारे control में हों तो gRPC या HTTP APIs पर जाओ।",
        hg: "WCF server modern .NET ka hissa nahi hai. Maujooda clients ke liye SOAP contracts rakhne hon to CoreWCF, aur clients tumhare control mein hon to gRPC ya HTTP APIs par jao."
      },
      explain: {
        en: "<ul>\n<li>CoreWCF is a .NET Foundation project that ports the <b>service side</b> of WCF. It supports common bindings through packages like <code>CoreWCF.Http</code> and <code>CoreWCF.NetTcp</code>, but check that the features you use (security modes, transports) are supported before you commit.</li>\n<li>gRPC (Day 13, Day 16) fits internal service-to-service calls with a <code>.proto</code> contract, but external SOAP partners cannot call it without a gateway or change.</li>\n<li>Follow-up: \"Who consumes the service?\" That answer decides the choice. Also remember WCF <em>client</em> code can still be used on modern .NET through the <code>System.ServiceModel</code> client packages.</li>\n</ul>",
        hi: "<ul>\n<li>CoreWCF .NET Foundation का project है जो WCF की <b>service side</b> को port करता है। वह <code>CoreWCF.Http</code> और <code>CoreWCF.NetTcp</code> जैसे packages से common bindings support करता है, पर commit करने से पहले जाँचो कि तुम जो features use करते हो (security modes, transports) वे supported हैं।</li>\n<li>gRPC (Day 13, Day 16) <code>.proto</code> contract वाले internal service-to-service calls के लिए fit है, पर external SOAP partners बिना gateway या बदलाव के उसे call नहीं कर सकते।</li>\n<li>Follow-up: \"Service को कौन use करता है?\" इसी जवाब से choice तय होती है। यह भी याद रखो कि WCF <em>client</em> code modern .NET पर अब भी <code>System.ServiceModel</code> client packages से use हो सकता है।</li>\n</ul>",
        hg: "<ul>\n<li>CoreWCF .NET Foundation ka project hai jo WCF ki <b>service side</b> ko port karta hai. Woh <code>CoreWCF.Http</code> aur <code>CoreWCF.NetTcp</code> jaise packages se common bindings support karta hai, par commit karne se pehle jaancho ki tum jo features use karte ho (security modes, transports) woh supported hain.</li>\n<li>gRPC (Day 13, Day 16) <code>.proto</code> contract wale internal service-to-service calls ke liye fit hai, par external SOAP partners bina gateway ya badlaav ke use call nahi kar sakte.</li>\n<li>Follow-up: \"Service ko kaun use karta hai?\" Isi jawab se choice tay hoti hai. Yeh bhi yaad rakho ki WCF <em>client</em> code modern .NET par ab bhi <code>System.ServiceModel</code> client packages se use ho sakta hai.</li>\n</ul>"
      }
    },
    {
      id: "ef6-to-efcore",
      depth: "detailed",
      q: "What do you watch for when moving from Entity Framework 6 to EF Core?",
      answer: "EF Core is a rewrite: no EDMX designer, lazy loading is opt-in, and some mapping and query behaviour differs. Compare the SQL and test on a real database; EF6 can run on modern .NET first.",
      meaning: {
        hi: "EF Core rewrite है: EDMX designer नहीं, lazy loading opt-in है, और कुछ mapping और query behaviour अलग है। Generated SQL compare करो और असली database से test करो; EF6 पहले कदम के तौर पर modern .NET पर भी चल सकता है।",
        hg: "EF Core rewrite hai: EDMX designer nahi, lazy loading opt-in hai, aur kuch mapping aur query behaviour alag hai. Generated SQL compare karo aur asli database se test karo; EF6 pehle kadam ke taur par modern .NET par bhi chal sakta hai."
      },
      explain: {
        en: "<ul>\n<li>Two-step option: EF 6.3 or later runs on .NET Core 3.0 and later, so you can move the app first and replace EF6 later, one bounded context at a time (Days 5 and 6).</li>\n<li>Check: lazy loading proxies, migrations (EF6 migrations do not convert automatically), custom conventions, stored procedure mappings, and anything using <code>ObjectContext</code> or EDMX.</li>\n<li>Follow-up: \"How do you prove the queries are equivalent?\" Log or print the SQL for key queries, compare row counts and results in a test database, and run performance checks (Day 6, Day 18).</li>\n</ul>",
        hi: "<ul>\n<li>दो-step option: EF 6.3 या उसके बाद .NET Core 3.0 और उसके बाद पर चलता है, इसलिए पहले app को move कर सकते हो और EF6 बाद में, एक bounded context एक बार में बदल सकते हो (Days 5 और 6)।</li>\n<li>जाँचो: lazy loading proxies, migrations (EF6 migrations अपने आप convert नहीं होते), custom conventions, stored procedure mappings, और <code>ObjectContext</code> या EDMX use करने वाली हर चीज़।</li>\n<li>Follow-up: \"Queries equivalent हैं यह कैसे साबित करते हो?\" Key queries का SQL log या print करो, test database में row counts और results compare करो, और performance checks चलाओ (Day 6, Day 18)।</li>\n</ul>",
        hg: "<ul>\n<li>Do-step option: EF 6.3 ya uske baad .NET Core 3.0 aur uske baad par chalta hai, isliye pehle app ko move kar sakte ho aur EF6 baad mein, ek bounded context ek baar mein badal sakte ho (Days 5 aur 6).</li>\n<li>Jaancho: lazy loading proxies, migrations (EF6 migrations apne aap convert nahi hote), custom conventions, stored procedure mappings, aur <code>ObjectContext</code> ya EDMX use karne wali har cheez.</li>\n<li>Follow-up: \"Queries equivalent hain yeh kaise saabit karte ho?\" Key queries ka SQL log ya print karo, test database mein row counts aur results compare karo, aur performance checks chalao (Day 6, Day 18).</li>\n</ul>"
      }
    },
    {
      id: "upgrade-assistant-status",
      depth: "detailed",
      q: "What tools would you use to migrate, and what is the status of .NET Upgrade Assistant?",
      answer: "Microsoft's docs say .NET Upgrade Assistant is officially deprecated and point to GitHub Copilot upgrade agent. I would use that to assess and automate steps, with analyzers and human review.",
      meaning: {
        hi: "Microsoft के docs कहते हैं .NET Upgrade Assistant officially deprecated है और GitHub Copilot upgrade agent की तरफ़ इशारा करते हैं। मैं उसे assess करने और steps automate करने में use करूँगा, analyzers और human review के साथ।",
        hg: "Microsoft ke docs kehte hain .NET Upgrade Assistant officially deprecated hai aur GitHub Copilot upgrade agent ki taraf ishara karte hain. Main use assess karne aur steps automate karne mein use karunga, analyzers aur human review ke saath."
      },
      explain: {
        en: "<ul>\n<li>Status wording comes from Microsoft Learn (the Upgrade Assistant overview page, updated in 2026). Tool names and extensions change quickly, so say \"as of the current docs\" and re-check before an interview or a project plan.</li>\n<li>Other useful tools: <code>dotnet</code> analyzers (platform-compatibility analyzer, API compatibility), NuGet audit, test suites, and your pipeline (Day 21).</li>\n<li>Follow-up: \"Would you let an AI agent migrate production code?\" It can speed up mechanical steps and produce a plan, but you keep tests, code review, and small commits you can roll back (Day 27 covers AI use).</li>\n</ul>",
        hi: "<ul>\n<li>Status की wording Microsoft Learn से है (Upgrade Assistant overview page, 2026 में updated)। Tool names और extensions जल्दी बदलते हैं, इसलिए \"current docs के अनुसार\" कहो और interview या project plan से पहले दोबारा जाँचो।</li>\n<li>दूसरे काम के tools: <code>dotnet</code> analyzers (platform-compatibility analyzer, API compatibility), NuGet audit, test suites, और तुम्हारी pipeline (Day 21)।</li>\n<li>Follow-up: \"क्या AI agent को production code migrate करने दोगे?\" वह mechanical steps तेज़ कर सकता है और plan बना सकता है, पर tests, code review और छोटे commits जिन्हें rollback किया जा सके, तुम्हारे पास रहते हैं (AI use Day 27 में है)।</li>\n</ul>",
        hg: "<ul>\n<li>Status ki wording Microsoft Learn se hai (Upgrade Assistant overview page, 2026 mein updated). Tool names aur extensions jaldi badalte hain, isliye \"current docs ke anusaar\" kaho aur interview ya project plan se pehle dobara jaancho.</li>\n<li>Dusre kaam ke tools: <code>dotnet</code> analyzers (platform-compatibility analyzer, API compatibility), NuGet audit, test suites, aur tumhari pipeline (Day 21).</li>\n<li>Follow-up: \"Kya AI agent ko production code migrate karne doge?\" Woh mechanical steps tez kar sakta hai aur plan bana sakta hai, par tests, code review aur chhote commits jinhe rollback kiya ja sake, tumhare paas rehte hain (AI use Day 27 mein hai).</li>\n</ul>"
      }
    },
    {
      id: "netstandard-vs-multitarget",
      depth: "detailed",
      q: ".NET Standard 2.0 or multi-targeting for shared libraries during migration?",
      answer: "Prefer .NET Standard 2.0 when the library only needs APIs it has, so one build runs on .NET Framework and modern .NET. Multi-target (for example net48;net10.0) when you need newer APIs on one side.",
      meaning: {
        hi: "Library को सिर्फ़ वही APIs चाहिए जो .NET Standard 2.0 में हैं तो उसे चुनो, ताकि एक build .NET Framework और modern .NET दोनों पर चले। नए APIs चाहिए तो multi-target करो (जैसे net48;net10.0)।",
        hg: "Library ko sirf wahi APIs chahiye jo .NET Standard 2.0 mein hain to use chuno, taaki ek build .NET Framework aur modern .NET dono par chale. Naye APIs chahiye to multi-target karo (jaise net48;net10.0)."
      },
      explain: {
        en: "<ul>\n<li>Microsoft's incremental migration guide asks to upgrade supporting libraries to .NET Standard 2.0 if possible; otherwise target .NET 8 or later alongside the .NET Framework target. Upgrade in post-order: leaf libraries first.</li>\n<li>.NET Standard is a frozen API set (.NET Framework never supports .NET Standard 2.1; 2.0 is the practical level, and Microsoft recommends .NET Framework 4.7.2 or later for it), so new libraries on modern .NET usually target a current .NET version instead. For migration bridges it is still useful.</li>\n<li>Follow-up: \"What about packages without .NET Standard support?\" Look for updated versions or replacements early in the assessment; they are a common blocker.</li>\n</ul>",
        hi: "<ul>\n<li>Microsoft की incremental migration guide कहती है कि supporting libraries को हो सके तो .NET Standard 2.0 पर upgrade करो; वरना .NET Framework target के साथ .NET 8 या उसके बाद target करो। Post-order में upgrade करो: पहले leaf libraries।</li>\n<li>.NET Standard एक frozen API set है (.NET Framework कभी .NET Standard 2.1 support नहीं करता; 2.0 practical level है, और Microsoft उसके लिए .NET Framework 4.7.2 या उसके बाद recommend करता है), इसलिए modern .NET पर नई libraries आम तौर पर current .NET version को target करती हैं। Migration bridges के लिए वह अब भी काम का है।</li>\n<li>Follow-up: \"जिन packages में .NET Standard support नहीं है?\" Assessment में ही updated versions या replacements खोजो; यह आम blocker है।</li>\n</ul>",
        hg: "<ul>\n<li>Microsoft ki incremental migration guide kehti hai ki supporting libraries ko ho sake to .NET Standard 2.0 par upgrade karo; warna .NET Framework target ke saath .NET 8 ya uske baad target karo. Post-order mein upgrade karo: pehle leaf libraries.</li>\n<li>.NET Standard ek frozen API set hai (.NET Framework kabhi .NET Standard 2.1 support nahi karta; 2.0 practical level hai, aur Microsoft uske liye .NET Framework 4.7.2 ya uske baad recommend karta hai), isliye modern .NET par nayi libraries aam taur par current .NET version ko target karti hain. Migration bridges ke liye woh ab bhi kaam ka hai.</li>\n<li>Follow-up: \"Jin packages mein .NET Standard support nahi hai?\" Assessment mein hi updated versions ya replacements khojo; yeh aam blocker hai.</li>\n</ul>"
      }
    },
    {
      id: "systemweb-adapters",
      depth: "detailed",
      q: "What are the System.Web adapters and when do you use them?",
      answer: "Microsoft.AspNetCore.SystemWebAdapters lets code that uses System.Web types, like HttpContext, compile for modern .NET and helps the old and new apps share session and authentication. It is a migration bridge, not a final design.",
      meaning: {
        hi: "Microsoft.AspNetCore.SystemWebAdapters System.Web types (जैसे HttpContext) वाले code को modern .NET के लिए compile होने देता है और पुराने-नए apps को session और authentication share करने में मदद करता है। यह migration bridge है, final design नहीं।",
        hg: "Microsoft.AspNetCore.SystemWebAdapters System.Web types (jaise HttpContext) wale code ko modern .NET ke liye compile hone deta hai aur purane-naye apps ko session aur authentication share karne mein madad karta hai. Yeh migration bridge hai, final design nahi."
      },
      explain: {
        en: "<ul>\n<li>Per Microsoft's docs: remove the <code>System.Web</code> reference in a shared library, add the adapters package, then multi-target or convert to .NET Standard 2.0 so <code>HttpContext</code> usage keeps working.</li>\n<li>Extra features: remote session and remote authentication between the apps, and hosting <code>IHttpModule</code> and <code>Global.asax</code> logic in ASP.NET Core.</li>\n<li>Follow-up: \"Does it make the app done?\" No: every adapter dependency is migration debt. Track them and remove them route by route, because performance and design are better without them.</li>\n</ul>",
        hi: "<ul>\n<li>Microsoft के docs के अनुसार: shared library में <code>System.Web</code> reference हटाओ, adapters package जोड़ो, फिर multi-target करो या .NET Standard 2.0 पर convert करो ताकि <code>HttpContext</code> का use चलता रहे।</li>\n<li>Extra features: दोनों apps के बीच remote session और remote authentication, और ASP.NET Core में <code>IHttpModule</code> और <code>Global.asax</code> logic host करना।</li>\n<li>Follow-up: \"क्या इससे app done हो जाता है?\" नहीं: हर adapter dependency migration debt है। उन्हें track करो और route-by-route हटाओ, क्योंकि उनके बिना performance और design बेहतर हैं।</li>\n</ul>",
        hg: "<ul>\n<li>Microsoft ke docs ke anusaar: shared library mein <code>System.Web</code> reference hatao, adapters package jodo, phir multi-target karo ya .NET Standard 2.0 par convert karo taaki <code>HttpContext</code> ka use chalta rahe.</li>\n<li>Extra features: dono apps ke beech remote session aur remote authentication, aur ASP.NET Core mein <code>IHttpModule</code> aur <code>Global.asax</code> logic host karna.</li>\n<li>Follow-up: \"Kya isse app done ho jaata hai?\" Nahi: har adapter dependency migration debt hai. Unhe track karo aur route-by-route hatao, kyunki unke bina performance aur design behtar hain.</li>\n</ul>"
      }
    },
    {
      id: "windows-only-apis",
      depth: "detailed",
      q: "How do you deal with Windows-only APIs such as the registry, WMI or COM during migration?",
      answer: "Inventory them first. The Windows Compatibility Pack brings many to modern .NET on Windows only; for Linux, replace them or guard calls with platform checks and analyzers.",
      meaning: {
        hi: "पहले उनकी list बनाओ। Windows Compatibility Pack कई APIs को modern .NET पर लाता है, सिर्फ़ Windows पर; Linux के लिए उन्हें बदलो या platform checks और analyzers से calls guard करो।",
        hg: "Pehle unki list banao. Windows Compatibility Pack kai APIs ko modern .NET par laata hai, sirf Windows par; Linux ke liye unhe badlo ya platform checks aur analyzers se calls guard karo."
      },
      explain: {
        en: "<ul>\n<li>NuGet package: <code>Microsoft.Windows.Compatibility</code>. It covers areas like registry, WMI, event log, performance counters and Windows services. It does not turn them into cross-platform features.</li>\n<li>Use the platform-compatibility analyzer and <code>OperatingSystem.IsWindows()</code> guards (or the <code>[SupportedOSPlatform]</code> attribute) to find and fence off Windows-only calls.</li>\n<li>Follow-up: \"Do we need Linux?\" If the target is Windows App Service or IIS only, the pack may be enough for now. If you want Linux containers, plan to replace these APIs; it is a design decision, not a flag.</li>\n</ul>",
        hi: "<ul>\n<li>NuGet package: <code>Microsoft.Windows.Compatibility</code>। यह registry, WMI, event log, performance counters और Windows services जैसे areas cover करता है। यह उन्हें cross-platform features नहीं बनाता।</li>\n<li>Platform-compatibility analyzer और <code>OperatingSystem.IsWindows()</code> guards (या <code>[SupportedOSPlatform]</code> attribute) से Windows-only calls ढूँढो और उन्हें अलग घेरो।</li>\n<li>Follow-up: \"क्या Linux चाहिए?\" अगर target सिर्फ़ Windows App Service या IIS है तो अभी pack काफ़ी हो सकता है। Linux containers चाहिए तो इन APIs को बदलने का plan करो; यह design decision है, flag नहीं।</li>\n</ul>",
        hg: "<ul>\n<li>NuGet package: <code>Microsoft.Windows.Compatibility</code>. Yeh registry, WMI, event log, performance counters aur Windows services jaise areas cover karta hai. Yeh unhe cross-platform features nahi banata.</li>\n<li>Platform-compatibility analyzer aur <code>OperatingSystem.IsWindows()</code> guards (ya <code>[SupportedOSPlatform]</code> attribute) se Windows-only calls dhoondo aur unhe alag gher do.</li>\n<li>Follow-up: \"Kya Linux chahiye?\" Agar target sirf Windows App Service ya IIS hai to abhi pack kaafi ho sakta hai. Linux containers chahiye to in APIs ko badalne ka plan karo; yeh design decision hai, flag nahi.</li>\n</ul>"
      }
    },
    {
      id: "business-case-for-migration",
      depth: "detailed",
      q: "How do you convince the business to fund a migration?",
      answer: "Tie it to outcomes they care about: delivery speed, hosting cost, risk and hiring. Propose small funded milestones that ship value early instead of one big rewrite.",
      meaning: {
        hi: "उन नतीजों से जोड़ो जिनकी उन्हें परवाह है: delivery speed, hosting cost, risk और hiring। एक बड़े rewrite की जगह छोटे funded milestones रखो जो value जल्दी दें।",
        hg: "Un nateejon se jodo jinki unhe parwah hai: delivery speed, hosting cost, risk aur hiring. Ek bade rewrite ki jagah chhote funded milestones rakho jo value jaldi dein."
      },
      explain: {
        en: "<ul>\n<li>Show evidence: deployment frequency and lead time today (DORA metrics, Day 21), incident counts, cloud or licence cost, time to onboard a developer, features blocked by the old stack. Use your own numbers, not invented ones.</li>\n<li>Offer options: do nothing (and its cost), in-place upgrade for small apps, incremental migration with milestones, rewrite (with its risks). Recommend one, with a rollback path.</li>\n<li>Follow-up: \"What if they say no?\" Reduce risk cheaply: update packages, add tests around the riskiest areas, document dependencies. That makes any later migration cheaper.</li>\n</ul>",
        hi: "<ul>\n<li>Evidence दिखाओ: आज की deployment frequency और lead time (DORA metrics, Day 21), incident counts, cloud या licence cost, नए developer को onboard करने का समय, पुराने stack की वजह से रुके features। अपने numbers use करो, गढ़े हुए नहीं।</li>\n<li>Options दो: कुछ मत करो (और उसकी कीमत), छोटे apps के लिए in-place upgrade, milestones के साथ incremental migration, rewrite (उसके risks के साथ)। एक recommend करो, rollback path के साथ।</li>\n<li>Follow-up: \"अगर वे मना कर दें?\" सस्ते में risk घटाओ: packages update करो, सबसे risky areas के आसपास tests जोड़ो, dependencies document करो। इससे आगे का कोई भी migration सस्ता हो जाता है।</li>\n</ul>",
        hg: "<ul>\n<li>Evidence dikhao: aaj ki deployment frequency aur lead time (DORA metrics, Day 21), incident counts, cloud ya licence cost, naye developer ko onboard karne ka samay, purane stack ki wajah se ruke features. Apne numbers use karo, gadhe hue nahi.</li>\n<li>Options do: kuch mat karo (aur uski keemat), chhote apps ke liye in-place upgrade, milestones ke saath incremental migration, rewrite (uske risks ke saath). Ek recommend karo, rollback path ke saath.</li>\n<li>Follow-up: \"Agar woh mana kar dein?\" Sasate mein risk ghatao: packages update karo, sabse risky areas ke aaspaas tests jodo, dependencies document karo. Isse aage ka koi bhi migration sasta ho jaata hai.</li>\n</ul>"
      }
    },
    {
      id: "common-migration-blockers",
      depth: "detailed",
      q: "What are the common blockers when migrating ASP.NET Framework apps?",
      answer: "Web Forms pages, WCF server, Windows-only APIs, packages without modern .NET support, pervasive System.Web and HttpContext use, heavy session use, and thin test coverage.",
      meaning: {
        hi: "Web Forms pages, WCF server, Windows-only APIs, बिना modern .NET support वाले packages, हर जगह System.Web और HttpContext, भारी session use, और कम test coverage।",
        hg: "Web Forms pages, WCF server, Windows-only APIs, bina modern .NET support wale packages, har jagah System.Web aur HttpContext, bhaari session use, aur kam test coverage."
      },
      explain: {
        en: "<ul>\n<li>Microsoft's migration overview lists System.Web dependencies, outdated packages, legacy build tools, session, auth, logging, caching and configuration as the hard parts.</li>\n<li>Also watch for: AppDomain and .NET Remoting, <code>BinaryFormatter</code> usage (it is not supported on modern .NET and throws since .NET 9, for security reasons), GAC-dependent assemblies, and custom build scripts.</li>\n<li>Follow-up: \"How do you find them early?\" Run an assessment tool, grep for <code>System.Web</code> and <code>HttpContext.Current</code>, list NuGet packages with their .NET support, and spike one low-risk route end to end.</li>\n</ul>",
        hi: "<ul>\n<li>Microsoft का migration overview System.Web dependencies, पुराने packages, legacy build tools, session, auth, logging, caching और configuration को मुश्किल हिस्से बताता है।</li>\n<li>इन पर भी नज़र रखो: AppDomain और .NET Remoting, <code>BinaryFormatter</code> का use (security कारणों से modern .NET पर supported नहीं है और .NET 9 से exception फेंकता है), GAC पर depend करने वाली assemblies, और custom build scripts।</li>\n<li>Follow-up: \"इन्हें जल्दी कैसे ढूँढते हो?\" Assessment tool चलाओ, <code>System.Web</code> और <code>HttpContext.Current</code> के लिए grep करो, NuGet packages की .NET support के साथ list बनाओ, और एक low-risk route end to end spike करो।</li>\n</ul>",
        hg: "<ul>\n<li>Microsoft ka migration overview System.Web dependencies, purane packages, legacy build tools, session, auth, logging, caching aur configuration ko mushkil hisse batata hai.</li>\n<li>In par bhi nazar rakho: AppDomain aur .NET Remoting, <code>BinaryFormatter</code> ka use (security kaarano se modern .NET par supported nahi hai aur .NET 9 se exception phenkta hai), GAC par depend karne wali assemblies, aur custom build scripts.</li>\n<li>Follow-up: \"Inhe jaldi kaise dhoondte ho?\" Assessment tool chalao, <code>System.Web</code> aur <code>HttpContext.Current</code> ke liye grep karo, NuGet packages ki .NET support ke saath list banao, aur ek low-risk route end to end spike karo.</li>\n</ul>"
      }
    },
    {
      id: "what-replaces-web-forms",
      depth: "detailed",
      q: "What do you replace Web Forms pages with: Razor Pages, MVC or Blazor?",
      answer: "There is no Web Forms in ASP.NET Core. Razor Pages suit page-per-URL screens, MVC or APIs suit controller-style apps, and Blazor suits rich stateful UI; migrate page by page, behind the proxy.",
      meaning: {
        hi: "ASP.NET Core में Web Forms नहीं है। Page-per-URL screens के लिए Razor Pages, controller-style apps के लिए MVC या APIs, और rich stateful UI के लिए Blazor; page-by-page, proxy के पीछे migrate करो।",
        hg: "ASP.NET Core mein Web Forms nahi hai. Page-per-URL screens ke liye Razor Pages, controller-style apps ke liye MVC ya APIs, aur rich stateful UI ke liye Blazor; page-by-page, proxy ke peechhe migrate karo."
      },
      explain: {
        en: "<ul>\n<li>Razor Pages feel closest to <code>.aspx</code> plus code-behind: one page, one model, handlers like <code>OnGet</code> and <code>OnPost</code>, but no ViewState and no control tree.</li>\n<li>Blazor has components, events and state, so it is familiar to Web Forms developers, but the programming model is different (component lifecycle, rendering modes). Choose by team skills and UI needs; a React/Next.js front end with an API is another valid choice (Day 24).</li>\n<li>Follow-up: \"Can we migrate Web Forms automatically?\" The GitHub Copilot upgrade agent now lists a Web Forms-to-Blazor scenario; treat its output as a starting point and review it like any pull request. Plan a rebuild of each page, and keep Web Forms pages running in the old app until they are replaced.</li>\n</ul>",
        hi: "<ul>\n<li>Razor Pages <code>.aspx</code> और code-behind के सबसे पास लगते हैं: एक page, एक model, <code>OnGet</code> और <code>OnPost</code> जैसे handlers, पर ViewState और control tree नहीं।</li>\n<li>Blazor में components, events और state हैं, इसलिए Web Forms developers को familiar लगता है, पर programming model अलग है (component lifecycle, rendering modes)। Team skills और UI ज़रूरतों से चुनो; API के साथ React/Next.js front end भी एक सही choice है (Day 24)।</li>\n<li>Follow-up: \"क्या Web Forms अपने आप migrate हो सकता है?\" GitHub Copilot upgrade agent अब Web Forms-to-Blazor scenario देता है; उसके output को starting point समझो और किसी भी pull request की तरह review करो। हर page का rebuild plan करो, और Web Forms pages को बदले जाने तक पुराने app में चलने दो।</li>\n</ul>",
        hg: "<ul>\n<li>Razor Pages <code>.aspx</code> aur code-behind ke sabse paas lagte hain: ek page, ek model, <code>OnGet</code> aur <code>OnPost</code> jaise handlers, par ViewState aur control tree nahi.</li>\n<li>Blazor mein components, events aur state hain, isliye Web Forms developers ko familiar lagta hai, par programming model alag hai (component lifecycle, rendering modes). Team skills aur UI zaroorton se chuno; API ke saath React/Next.js front end bhi ek sahi choice hai (Day 24).</li>\n<li>Follow-up: \"Kya Web Forms apne aap migrate ho sakta hai?\" GitHub Copilot upgrade agent ab Web Forms-to-Blazor scenario deta hai; uske output ko starting point samjho aur kisi bhi pull request ki tarah review karo. Har page ka rebuild plan karo, aur Web Forms pages ko badle jaane tak purane app mein chalne do.</li>\n</ul>"
      }
    }
  ],
  puzzles: [
    {
      id: "webforms-lifecycle-order",
      src: "// Toy model of a Web Forms page (NOT real System.Web): a control tree and the order of life-cycle events.\nvar page = new Control(\"Page\",\n    new Control(\"Panel\", new Control(\"TextBox\"), new Control(\"Button\")),\n    new Control(\"Label\"));\n\nConsole.WriteLine(\"GET:\");\nShow(\"Init\", page.PostOrder());      // child-first\nShow(\"Load\", page.PreOrder());       // parent-first\nShow(\"PreRender\", page.PreOrder());\nShow(\"Unload\", page.PostOrder());\n\nConsole.WriteLine(\"POSTBACK (Button clicked):\");\nShow(\"Init\", page.PostOrder());\nConsole.WriteLine(\"  [ViewState and form data are loaded here]\");\nShow(\"Load\", page.PreOrder());\nConsole.WriteLine(\"  Button.Click\");\nShow(\"PreRender\", page.PreOrder());\nShow(\"Unload\", page.PostOrder());\n\nstatic void Show(string stage, IEnumerable<string> names) =>\n    Console.WriteLine($\"  {stage}: {string.Join(\" > \", names)}\");\n\nclass Control(string name, params Control[] children)\n{\n    public IEnumerable<string> PreOrder() =>\n        new[] { name }.Concat(children.SelectMany(c => c.PreOrder()));\n\n    public IEnumerable<string> PostOrder() =>\n        children.SelectMany(c => c.PostOrder()).Append(name);\n}",
      answer: "GET:\n  Init: TextBox > Button > Panel > Label > Page\n  Load: Page > Panel > TextBox > Button > Label\n  PreRender: Page > Panel > TextBox > Button > Label\n  Unload: TextBox > Button > Panel > Label > Page\nPOSTBACK (Button clicked):\n  Init: TextBox > Button > Panel > Label > Page\n  [ViewState and form data are loaded here]\n  Load: Page > Panel > TextBox > Button > Label\n  Button.Click\n  PreRender: Page > Panel > TextBox > Button > Label\n  Unload: TextBox > Button > Panel > Label > Page",
      explain: {
        en: "<p>Two rules decide everything here. <b>Init and Unload go child-first</b> (bottom-up): <code>TextBox</code>, <code>Button</code>, then their <code>Panel</code>, then <code>Label</code>, then the <code>Page</code> last. <b>Load and PreRender go parent-first</b> (top-down): the <code>Page</code> first, then each container before its children.</p>\n<p>On a postback, ViewState and form data are loaded after Init and before Load, and the control event (<code>Button.Click</code>) runs after Load and before PreRender. That is why code in <code>Page_Load</code> that rebinds a grid can wipe the user's input before the click handler sees it. (This is a toy model with the order taken from Microsoft's page life cycle documentation.)</p>",
        hi: "<p>यहाँ दो rules सब तय करते हैं। <b>Init और Unload child-first चलते हैं</b> (नीचे से ऊपर): <code>TextBox</code>, <code>Button</code>, फिर उनका <code>Panel</code>, फिर <code>Label</code>, और आख़िर में <code>Page</code>। <b>Load और PreRender parent-first चलते हैं</b> (ऊपर से नीचे): पहले <code>Page</code>, फिर हर container अपने children से पहले।</p>\n<p>Postback में ViewState और form data Init के बाद और Load से पहले load होते हैं, और control event (<code>Button.Click</code>) Load के बाद और PreRender से पहले चलता है। इसीलिए <code>Page_Load</code> में grid दोबारा bind करने वाला code click handler के देखने से पहले user का input मिटा सकता है। (यह toy model है, order Microsoft के page life cycle documentation से लिया गया है।)</p>",
        hg: "<p>Yahan do rules sab tay karte hain. <b>Init aur Unload child-first chalte hain</b> (neeche se upar): <code>TextBox</code>, <code>Button</code>, phir unka <code>Panel</code>, phir <code>Label</code>, aur aakhir mein <code>Page</code>. <b>Load aur PreRender parent-first chalte hain</b> (upar se neeche): pehle <code>Page</code>, phir har container apne children se pehle.</p>\n<p>Postback mein ViewState aur form data Init ke baad aur Load se pehle load hote hain, aur control event (<code>Button.Click</code>) Load ke baad aur PreRender se pehle chalta hai. Isiliye <code>Page_Load</code> mein grid dobara bind karne wala code click handler ke dekhne se pehle user ka input mita sakta hai. (Yeh toy model hai, order Microsoft ke page life cycle documentation se liya gaya hai.)</p>"
      }
    },
    {
      id: "viewstate-size-cost",
      src: "using System.Globalization;\n\n// Toy numbers (real sizes vary): a GridView with 200 rows x 4 columns keeps about 18 raw bytes per cell in ViewState.\n// The raw bytes are sent as Base64 text inside the hidden __VIEWSTATE field.\nconst int rows = 200, columns = 4, rawBytesPerCell = 18, postbacks = 5;\n\nint Base64Length(int rawBytes) => 4 * ((rawBytes + 2) / 3);\n\nint withGrid = Base64Length(rows * columns * rawBytesPerCell) + 120;  // +120: small page-level state\nint withoutGrid = 120;                                               // grid has EnableViewState=\"false\"\n\nConsole.WriteLine($\"hidden field: {Format(withGrid)} vs {Format(withoutGrid)}\");\n\n// The first GET sends the field down once. Every postback sends it up (request) and down again (response).\nlong Traffic(int fieldBytes) => fieldBytes + (long)postbacks * 2 * fieldBytes;\n\nConsole.WriteLine($\"{postbacks} postbacks: {Format(Traffic(withGrid))} vs {Format(Traffic(withoutGrid))}\");\nConsole.WriteLine($\"saved: {(Traffic(withGrid) - Traffic(withoutGrid)) * 100 / Traffic(withGrid)}%\");\n\nstatic string Format(long bytes) =>\n    (bytes / 1024.0).ToString(\"F1\", CultureInfo.InvariantCulture) + \" KB\";",
      answer: "hidden field: 18.9 KB vs 0.1 KB\n5 postbacks: 207.5 KB vs 1.3 KB\nsaved: 99%",
      explain: {
        en: "<p>Base64 turns every 3 raw bytes into 4 characters, so 200 rows x 4 columns x 18 bytes = 14,400 raw bytes become 19,200 characters, plus 120 for page-level state: about 18.9 KB in the hidden field. The first GET sends it once; each of the 5 postbacks sends it up and then down again, so the total is 11 copies, about 207.5 KB, against 1.3 KB when the grid does not keep ViewState.</p>\n<p>The numbers are a toy model (real sizes depend on the controls), but the shape is real: ViewState cost is paid on <b>every</b> postback in both directions. The usual fixes are <code>EnableViewState=\"false\"</code> on big controls and rebinding data in the right event. In ASP.NET Core this cost simply does not exist because the page does not carry control state.</p>",
        hi: "<p>Base64 हर 3 raw bytes को 4 characters में बदलता है, इसलिए 200 rows x 4 columns x 18 bytes = 14,400 raw bytes के 19,200 characters बन जाते हैं, ऊपर से page-level state के 120: hidden field में करीब 18.9 KB। पहला GET उसे एक बार भेजता है; 5 postbacks में से हर एक उसे ऊपर भेजता है और फिर नीचे भी, तो कुल 11 copies, करीब 207.5 KB, जबकि grid ViewState न रखे तो 1.3 KB।</p>\n<p>Numbers toy model हैं (असली sizes controls पर depend करते हैं), पर shape असली है: ViewState का cost <b>हर</b> postback में दोनों तरफ़ चुकाना पड़ता है। आम fixes हैं बड़े controls पर <code>EnableViewState=\"false\"</code> और data को सही event में rebind करना। ASP.NET Core में यह cost होता ही नहीं क्योंकि page control state साथ नहीं ले जाता।</p>",
        hg: "<p>Base64 har 3 raw bytes ko 4 characters mein badalta hai, isliye 200 rows x 4 columns x 18 bytes = 14,400 raw bytes ke 19,200 characters ban jaate hain, upar se page-level state ke 120: hidden field mein kareeb 18.9 KB. Pehla GET use ek baar bhejta hai; 5 postbacks mein se har ek use upar bhejta hai aur phir neeche bhi, to kul 11 copies, kareeb 207.5 KB, jabki grid ViewState na rakhe to 1.3 KB.</p>\n<p>Numbers toy model hain (asli sizes controls par depend karte hain), par shape asli hai: ViewState ka cost <b>har</b> postback mein dono taraf chukana padta hai. Aam fixes hain bade controls par <code>EnableViewState=\"false\"</code> aur data ko sahi event mein rebind karna. ASP.NET Core mein yeh cost hota hi nahi kyunki page control state saath nahi le jaata.</p>"
      }
    },
    {
      id: "modules-vs-middleware-order",
      src: "// Same three concerns, two designs. First the System.Web style: modules subscribe to named events.\nvar legacy = new List<string>();\nstring[] events = { \"BeginRequest\", \"AuthenticateRequest\", \"EndRequest\" };\nvar subscribers = events.ToDictionary(e => e, _ => new List<Action>());\n\n// The order of these calls = the order the modules are listed in web.config.\nSubscribe(\"Timer\", \"BeginRequest\");\nSubscribe(\"Logger\", \"BeginRequest\");\nSubscribe(\"Auth\", \"AuthenticateRequest\");\nSubscribe(\"Timer\", \"EndRequest\");\nSubscribe(\"Logger\", \"EndRequest\");\n\nforeach (var e in new[] { \"BeginRequest\", \"AuthenticateRequest\" }) Raise(e);\nlegacy.Add(\"Handler\");\nRaise(\"EndRequest\");\nConsole.WriteLine(\"modules:    \" + string.Join(\" > \", legacy));\n\nvoid Subscribe(string module, string evt) => subscribers[evt].Add(() => legacy.Add($\"{module}.{evt}\"));\nvoid Raise(string evt) { foreach (var run in subscribers[evt]) run(); }\n\n// Now the ASP.NET Core style: each component wraps the next one.\nvar core = new List<string>();\nAction Wrap(string name, Action next) => () => { core.Add(name + \" in\"); next(); core.Add(name + \" out\"); };\n\nvar pipeline = Wrap(\"Timer\", Wrap(\"Logger\", () => core.Add(\"Endpoint\")));\npipeline();\nConsole.WriteLine(\"middleware: \" + string.Join(\" > \", core));",
      answer: "modules:    Timer.BeginRequest > Logger.BeginRequest > Auth.AuthenticateRequest > Handler > Timer.EndRequest > Logger.EndRequest\nmiddleware: Timer in > Logger in > Endpoint > Logger out > Timer out",
      explain: {
        en: "<p>With modules, the <b>event</b> decides first and the <code>web.config</code> order decides second: all <code>BeginRequest</code> handlers (Timer then Logger), then <code>AuthenticateRequest</code>, then the handler, then <code>EndRequest</code> handlers in the <b>same</b> Timer-then-Logger order. Nothing \"unwinds\".</p>\n<p>With middleware, each component wraps the next, so the response path is the <b>reverse</b>: Timer in, Logger in, Endpoint, Logger out, Timer out. This is why porting modules needs care: the \"end\" work of two modules changes order, and a module that depended on a specific event (like <code>AuthenticateRequest</code>) must be placed at the right spot in <code>Program.cs</code>. Day 12 has the middleware side; this puzzle shows the old side.</p>",
        hi: "<p>Modules में पहले <b>event</b> तय करता है और फिर <code>web.config</code> का order: सारे <code>BeginRequest</code> handlers (Timer फिर Logger), फिर <code>AuthenticateRequest</code>, फिर handler, फिर <code>EndRequest</code> handlers <b>उसी</b> Timer-फिर-Logger order में। कुछ \"unwind\" नहीं होता।</p>\n<p>Middleware में हर component अगले को घेरता है, इसलिए response का रास्ता <b>उल्टा</b> होता है: Timer in, Logger in, Endpoint, Logger out, Timer out। इसीलिए modules port करते वक़्त सावधानी चाहिए: दो modules का \"end\" वाला काम order बदल लेता है, और जो module किसी ख़ास event (जैसे <code>AuthenticateRequest</code>) पर टिका था उसे <code>Program.cs</code> में सही जगह रखना पड़ता है। Day 12 में middleware वाला हिस्सा है; यह puzzle पुराना हिस्सा दिखाता है।</p>",
        hg: "<p>Modules mein pehle <b>event</b> tay karta hai aur phir <code>web.config</code> ka order: saare <code>BeginRequest</code> handlers (Timer phir Logger), phir <code>AuthenticateRequest</code>, phir handler, phir <code>EndRequest</code> handlers <b>usi</b> Timer-phir-Logger order mein. Kuch \"unwind\" nahi hota.</p>\n<p>Middleware mein har component agle ko gherta hai, isliye response ka raasta <b>ulta</b> hota hai: Timer in, Logger in, Endpoint, Logger out, Timer out. Isiliye modules port karte waqt saavdhani chahiye: do modules ka \"end\" wala kaam order badal leta hai, aur jo module kisi khaas event (jaise <code>AuthenticateRequest</code>) par tika tha use <code>Program.cs</code> mein sahi jagah rakhna padta hai. Day 12 mein middleware wala hissa hai; yeh puzzle purana hissa dikhata hai.</p>"
      }
    },
    {
      id: "multi-target-branch",
      src: "// Maintainer note: this puzzle is pinned to net9.0 (the checker's SDK). Update the answer if the checker moves to net10.0.\n// A library multi-targeted as net48;netstandard2.0;net10.0 is compiled once per target.\n// This file is compiled for net9.0 only. Which branches survive?\nvar defined = new List<string>();\n#if NETFRAMEWORK\ndefined.Add(\"NETFRAMEWORK\");\n#endif\n#if NETSTANDARD2_0\ndefined.Add(\"NETSTANDARD2_0\");\n#endif\n#if NETCOREAPP\ndefined.Add(\"NETCOREAPP\");\n#endif\n#if NET8_0_OR_GREATER\ndefined.Add(\"NET8_0_OR_GREATER\");\n#endif\n#if NET9_0\ndefined.Add(\"NET9_0\");\n#endif\n#if NET10_0_OR_GREATER\ndefined.Add(\"NET10_0_OR_GREATER\");\n#endif\nConsole.WriteLine(string.Join(\", \", defined));\n\nConsole.WriteLine(CurrentUserSource.Describe());\n\nstatic class CurrentUserSource\n{\n    public static string Describe()\n    {\n#if NETFRAMEWORK\n        return \"System.Web: HttpContext.Current.User\";\n#elif NET8_0_OR_GREATER\n        return \"ASP.NET Core: IHttpContextAccessor or a parameter\";\n#else\n        return \"other target\";\n#endif\n    }\n}",
      answer: "NETCOREAPP, NET8_0_OR_GREATER, NET9_0\nASP.NET Core: IHttpContextAccessor or a parameter",
      explain: {
        en: "<p>The compiler defines one symbol set per target framework. For <code>net9.0</code>: <code>NETCOREAPP</code>, <code>NET8_0_OR_GREATER</code> (and the other lower <code>_OR_GREATER</code> symbols) and <code>NET9_0</code>. Not defined: <code>NETFRAMEWORK</code>, <code>NETSTANDARD2_0</code>, and <code>NET10_0_OR_GREATER</code>. So the <code>#elif NET8_0_OR_GREATER</code> branch is the one that runs.</p>\n<p>A real library with <code>&lt;TargetFrameworks&gt;net48;netstandard2.0;net10.0&lt;/TargetFrameworks&gt;</code> is built three times, and each build keeps different branches. Keep <code>#if</code> blocks small and behind one helper (like <code>Describe()</code>), otherwise the code becomes unreadable and untested for some targets: build and test <b>every</b> target in CI (Day 21).</p>",
        hi: "<p>Compiler हर target framework के लिए अलग symbol set define करता है। <code>net9.0</code> के लिए: <code>NETCOREAPP</code>, <code>NET8_0_OR_GREATER</code> (और बाकी छोटे <code>_OR_GREATER</code> symbols) और <code>NET9_0</code>। Defined नहीं: <code>NETFRAMEWORK</code>, <code>NETSTANDARD2_0</code>, और <code>NET10_0_OR_GREATER</code>। इसलिए <code>#elif NET8_0_OR_GREATER</code> वाली branch चलती है।</p>\n<p><code>&lt;TargetFrameworks&gt;net48;netstandard2.0;net10.0&lt;/TargetFrameworks&gt;</code> वाली असली library तीन बार build होती है, और हर build अलग branches रखता है। <code>#if</code> blocks छोटे रखो और एक helper (जैसे <code>Describe()</code>) के पीछे, वरना code पढ़ने लायक नहीं रहता और कुछ targets के लिए untested रहता है: CI में <b>हर</b> target build और test करो (Day 21)।</p>",
        hg: "<p>Compiler har target framework ke liye alag symbol set define karta hai. <code>net9.0</code> ke liye: <code>NETCOREAPP</code>, <code>NET8_0_OR_GREATER</code> (aur baaki chhote <code>_OR_GREATER</code> symbols) aur <code>NET9_0</code>. Defined nahi: <code>NETFRAMEWORK</code>, <code>NETSTANDARD2_0</code>, aur <code>NET10_0_OR_GREATER</code>. Isliye <code>#elif NET8_0_OR_GREATER</code> wali branch chalti hai.</p>\n<p><code>&lt;TargetFrameworks&gt;net48;netstandard2.0;net10.0&lt;/TargetFrameworks&gt;</code> wali asli library teen baar build hoti hai, aur har build alag branches rakhta hai. <code>#if</code> blocks chhote rakho aur ek helper (jaise <code>Describe()</code>) ke peechhe, warna code padhne layak nahi rehta aur kuch targets ke liye untested rehta hai: CI mein <b>har</b> target build aur test karo (Day 21).</p>"
      }
    },
    {
      id: "strangler-routing-table",
      src: "using System.Globalization;\n\n// Toy router for a strangler-fig migration. Lowest Order wins; ties go to the longest matching prefix.\n// (YARP and ASP.NET Core routing have similar ideas, but this is a simplified model.)\nvar routes = new List<Route>\n{\n    new(\"/api/prices\", \"NEW\", 0),\n    new(\"/api/orders\", \"NEW\", 0),\n    new(\"/api/orders/export\", \"LEGACY\", 0),   // specific exception: still handled by the old app\n    new(\"/\", \"LEGACY\", int.MaxValue),         // catch-all, tried last\n};\n\n// (path, requests per day)\nvar traffic = new (string Path, int Hits)[]\n{\n    (\"/api/prices/TEA-250\", 600),\n    (\"/api/orders/17\", 300),\n    (\"/api/orders/export\", 40),\n    (\"/Reports/Monthly.aspx\", 50),\n    (\"/Default.aspx\", 10),\n};\n\nint newHits = 0, total = 0;\nforeach (var (path, hits) in traffic)\n{\n    var route = routes\n        .Where(r => path.StartsWith(r.Prefix, StringComparison.OrdinalIgnoreCase))\n        .OrderBy(r => r.Order)\n        .ThenByDescending(r => r.Prefix.Length)\n        .First();\n    Console.WriteLine($\"{path} -> {route.Target}\");\n    total += hits;\n    if (route.Target == \"NEW\") newHits += hits;\n}\n\nvar share = 100.0 * newHits / total;\nConsole.WriteLine($\"traffic on new app: {share.ToString(\"F1\", CultureInfo.InvariantCulture)}%\");\n\nrecord Route(string Prefix, string Target, int Order);",
      answer: "/api/prices/TEA-250 -> NEW\n/api/orders/17 -> NEW\n/api/orders/export -> LEGACY\n/Reports/Monthly.aspx -> LEGACY\n/Default.aspx -> LEGACY\ntraffic on new app: 90.0%",
      explain: {
        en: "<p>Routes are sorted by <code>Order</code> first, then by longest prefix. <code>/api/orders/export</code> matches both the <code>/api/orders</code> route and the longer <code>/api/orders/export</code> route (both Order 0), so the longer, more specific one wins and that path stays on the legacy app. The two <code>.aspx</code> paths only match the catch-all <code>/</code> with <code>int.MaxValue</code>, so they go to the legacy app.</p>\n<p>New app traffic is (600 + 300) of 1,000 requests = 90.0%. That is the TL's progress number: by <b>traffic</b> the migration looks 90% done, but by <b>routes</b> it is 2 of 5 paths, and the remaining pages (Web Forms reports) may be the hardest. Report both numbers, and migrate by risk and value, not only by traffic. (Toy model; real YARP uses ASP.NET Core routing with its own priority rules.)</p>",
        hi: "<p>Routes पहले <code>Order</code> से sort होते हैं, फिर सबसे लंबे prefix से। <code>/api/orders/export</code> दोनों से match होता है: <code>/api/orders</code> route और लंबा <code>/api/orders/export</code> route (दोनों Order 0), इसलिए लंबा, ज़्यादा specific वाला जीतता है और वह path legacy app पर ही रहता है। दोनों <code>.aspx</code> paths सिर्फ़ <code>int.MaxValue</code> वाले catch-all <code>/</code> से match होते हैं, इसलिए वे legacy app को जाते हैं।</p>\n<p>नए app का traffic (600 + 300) / 1,000 requests = 90.0%। यही TL का progress number है: <b>traffic</b> से migration 90% पूरा दिखता है, पर <b>routes</b> से 5 में से 2 paths, और बचे हुए pages (Web Forms reports) सबसे मुश्किल हो सकते हैं। दोनों numbers बताओ, और migrate risk और value से करो, सिर्फ़ traffic से नहीं। (Toy model; असली YARP ASP.NET Core routing और उसके अपने priority rules use करता है।)</p>",
        hg: "<p>Routes pehle <code>Order</code> se sort hote hain, phir sabse lambe prefix se. <code>/api/orders/export</code> dono se match hota hai: <code>/api/orders</code> route aur lamba <code>/api/orders/export</code> route (dono Order 0), isliye lamba, zyada specific wala jeetta hai aur woh path legacy app par hi rehta hai. Dono <code>.aspx</code> paths sirf <code>int.MaxValue</code> wale catch-all <code>/</code> se match hote hain, isliye woh legacy app ko jaate hain.</p>\n<p>Naye app ka traffic (600 + 300) / 1,000 requests = 90.0%. Yahi TL ka progress number hai: <b>traffic</b> se migration 90% poora dikhta hai, par <b>routes</b> se 5 mein se 2 paths, aur bache hue pages (Web Forms reports) sabse mushkil ho sakte hain. Dono numbers batao, aur migrate risk aur value se karo, sirf traffic se nahi. (Toy model; asli YARP ASP.NET Core routing aur uske apne priority rules use karta hai.)</p>"
      }
    },
    {
      id: "ambient-context-flow",
      src: "// Why HttpContext.Current-style statics are fragile, and what IHttpContextAccessor does differently.\nLegacyStyle.User = \"asha\";\nFlowing.User = \"asha\";\n\nConsole.WriteLine($\"same thread: static={LegacyStyle.User ?? \"null\"}, asyncLocal={Flowing.User ?? \"null\"}\");\n\nawait Task.Run(() =>\n{\n    // Runs on a thread-pool thread, not the thread that set the values.\n    Console.WriteLine($\"pool thread: static={LegacyStyle.User ?? \"null\"}, asyncLocal={Flowing.User ?? \"null\"}\");\n    Flowing.User = \"changed-in-child\";\n    Console.WriteLine($\"child sets:  asyncLocal={Flowing.User}\");\n});\n\n// Changes made inside the awaited child do not leak back to this flow.\nConsole.WriteLine($\"after await: asyncLocal={Flowing.User}\");\n\nstatic class LegacyStyle\n{\n    [ThreadStatic] private static string? _user;\n    public static string? User { get => _user; set => _user = value; }\n}\n\nstatic class Flowing\n{\n    private static readonly AsyncLocal<string?> _user = new();\n    public static string? User { get => _user.Value; set => _user.Value = value; }\n}",
      answer: "same thread: static=asha, asyncLocal=asha\npool thread: static=null, asyncLocal=asha\nchild sets:  asyncLocal=changed-in-child\nafter await: asyncLocal=asha",
      explain: {
        en: "<p><code>[ThreadStatic]</code> data belongs to one thread. The thread-pool thread started by <code>Task.Run</code> never saw the value, so it prints <code>null</code>. <code>AsyncLocal&lt;T&gt;</code> flows with the logical async call chain, so the child sees <code>asha</code>. A change made inside the child (<code>changed-in-child</code>) does not flow back to the caller after <code>await</code>.</p>\n<p>Why it matters: ASP.NET Core's <code>IHttpContextAccessor</code> is built on <code>AsyncLocal</code>, which is why it works across <code>await</code> but returns <code>null</code> in code that is not part of a request (background jobs). Still, a hidden ambient value is hard to test, so prefer passing the user or tenant as a parameter (Day 16 shows <code>Activity.Current</code>, which also flows through <code>AsyncLocal</code>).</p>",
        hi: "<p><code>[ThreadStatic]</code> data एक thread का होता है। <code>Task.Run</code> से शुरू हुए thread-pool thread ने value कभी देखी ही नहीं, इसलिए वह <code>null</code> print करता है। <code>AsyncLocal&lt;T&gt;</code> logical async call chain के साथ चलता है, इसलिए child को <code>asha</code> दिखता है। Child के अंदर किया गया बदलाव (<code>changed-in-child</code>) <code>await</code> के बाद caller तक वापस नहीं आता।</p>\n<p>क्यों ज़रूरी: ASP.NET Core का <code>IHttpContextAccessor</code> <code>AsyncLocal</code> पर बना है, इसीलिए वह <code>await</code> के पार काम करता है पर ऐसे code में <code>null</code> देता है जो किसी request का हिस्सा नहीं (background jobs)। फिर भी छुपी हुई ambient value को test करना मुश्किल है, इसलिए user या tenant को parameter से pass करना बेहतर है (Day 16 में <code>Activity.Current</code> दिखता है, जो भी <code>AsyncLocal</code> से flow होता है)।</p>",
        hg: "<p><code>[ThreadStatic]</code> data ek thread ka hota hai. <code>Task.Run</code> se shuru hue thread-pool thread ne value kabhi dekhi hi nahi, isliye woh <code>null</code> print karta hai. <code>AsyncLocal&lt;T&gt;</code> logical async call chain ke saath chalta hai, isliye child ko <code>asha</code> dikhta hai. Child ke andar kiya gaya badlaav (<code>changed-in-child</code>) <code>await</code> ke baad caller tak wapas nahi aata.</p>\n<p>Kyun zaroori: ASP.NET Core ka <code>IHttpContextAccessor</code> <code>AsyncLocal</code> par bana hai, isiliye woh <code>await</code> ke paar kaam karta hai par aise code mein <code>null</code> deta hai jo kisi request ka hissa nahi (background jobs). Phir bhi chhupi hui ambient value ko test karna mushkil hai, isliye user ya tenant ko parameter se pass karna behtar hai (Day 16 mein <code>Activity.Current</code> dikhta hai, jo bhi <code>AsyncLocal</code> se flow hota hai).</p>"
      }
    }
  ],
  revision: {
    en: [
      "<b>Three generations</b>: Web Forms (page + events), MVC 5 (controllers on System.Web), Core (middleware, endpoints). No Web Forms and no ViewState in Core.",
      "<b>Web Forms lifecycle</b>: Init and Unload child-first, Load and PreRender parent-first. ViewState is a hidden field sent both ways; Core uses stateless GET and POST.",
      "<b>MVC 5 to Core controller</b>: <code>Controller</code> to <code>ControllerBase</code> + <code>[ApiController]</code>, constructor DI, <code>NotFound()</code>, automatic 400; check JSON casing.",
      "<b>Modules to middleware</b>: <code>IHttpModule</code> becomes <code>app.Use</code>, <code>Global.asax</code> start/end become lifetime events; middleware unwinds in reverse order.",
      "<b>web.config to configuration</b>: JSON, environment variables and secrets are layers (last wins); bind to typed options and <code>ValidateOnStart</code>.",
      "<b>HttpContext.Current</b> has no equivalent: pass the user as a parameter; <code>IHttpContextAccessor</code> is a last-resort bridge and is null outside a request.",
      "<b>Strangler fig</b>: new app in front, migrated routes there, catch-all to the old app with the lowest priority; report progress by traffic.",
      "<b>Support and tooling</b>: .NET Framework 4.8.1 is the last version, supported as part of Windows; Upgrade Assistant is deprecated, use the GitHub Copilot upgrade agent.",
      "Shared libraries go to .NET Standard 2.0 or multi-target, upgraded in post-order with leaf libraries first.",
      "WCF server is not in modern .NET: CoreWCF for existing SOAP clients, gRPC or HTTP when you control the clients.",
      "As a TL, report migration progress by traffic and by routes, and keep a rollback plan."
    ],
    meaning: {
      hi: [
        "तीन पीढ़ियाँ: Web Forms (page + events), MVC 5 (System.Web पर controllers), Core (middleware, endpoints); Core में Web Forms और ViewState नहीं",
        "Web Forms lifecycle: Init/Unload child-पहले, Load/PreRender parent-पहले; ViewState दोनों तरफ़ जाने वाला छिपा field; Core में stateless GET और POST",
        "MVC 5 से Core controller: Controller की जगह ControllerBase + [ApiController], constructor DI, NotFound(), अपने-आप 400; JSON casing जाँचो",
        "Modules से middleware: IHttpModule बनता है app.Use, Global.asax के start/end बनते हैं lifetime events; middleware उल्टे क्रम में लौटता है",
        "web.config से configuration: JSON, environment variables और secrets परतें हैं (आख़िरी जीतती है); typed options से bind और ValidateOnStart",
        "HttpContext.Current का कोई बदल नहीं: user को parameter से दो; IHttpContextAccessor आख़िरी उपाय वाला पुल है और request के बाहर null",
        "Strangler fig: नई app आगे, migrate हुए routes वहीं, catch-all सबसे कम priority से पुरानी app को; progress traffic से बताओ",
        "Support और tooling: .NET Framework 4.8.1 आख़िरी version है और Windows के हिस्से के तौर पर supported है; Upgrade Assistant deprecated है, उसकी जगह GitHub Copilot upgrade agent",
        "Shared libraries .NET Standard 2.0 पर या multi-target, post-order में upgrade, पहले leaf libraries।",
        "WCF server modern .NET में नहीं है: मौजूदा SOAP clients के लिए CoreWCF, clients अपने control में हों तो gRPC या HTTP।",
        "TL के तौर पर migration progress traffic और routes दोनों से बताओ, और rollback plan रखो।"
      ],
      hg: [
        "Teen generations: Web Forms (page + events), MVC 5 (System.Web par controllers), Core (middleware, endpoints); Core mein Web Forms aur ViewState nahi",
        "Web Forms lifecycle: Init/Unload child-pehle, Load/PreRender parent-pehle; ViewState dono taraf jaane wala chhupa field; Core mein stateless GET aur POST",
        "MVC 5 se Core controller: Controller ki jagah ControllerBase + [ApiController], constructor DI, NotFound(), apne-aap 400; JSON casing jaancho",
        "Modules se middleware: IHttpModule banta hai app.Use, Global.asax ke start/end bante hain lifetime events; middleware ulte kram mein lautta hai",
        "web.config se configuration: JSON, environment variables aur secrets parten hain (aakhri jeetti hai); typed options se bind aur ValidateOnStart",
        "HttpContext.Current ka koi badal nahi: user ko parameter se do; IHttpContextAccessor aakhri upaay wala pul hai aur request ke bahar null",
        "Strangler fig: nayi app aage, migrate hue routes wahin, catch-all sabse kam priority se purani app ko; progress traffic se batao",
        "Support aur tooling: .NET Framework 4.8.1 aakhri version hai aur Windows ke hisse ke taur par supported hai; Upgrade Assistant deprecated hai, uski jagah GitHub Copilot upgrade agent",
        "Shared libraries .NET Standard 2.0 par ya multi-target, post-order mein upgrade, pehle leaf libraries.",
        "WCF server modern .NET mein nahi hai: maujooda SOAP clients ke liye CoreWCF, clients apne control mein hon to gRPC ya HTTP.",
        "TL ke taur par migration progress traffic aur routes dono se batao, aur rollback plan rakho."
      ]
    }
  }
};
