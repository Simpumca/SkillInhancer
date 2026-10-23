// Day 22 — Legacy ASP.NET refresher and migration to modern .NET. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 22,
  title: {
    en: "Legacy ASP.NET refresher and migration — Web Forms, MVC 5, System.Web pipeline, web.config, .NET Framework to modern .NET",
    hi: "Legacy ASP.NET refresher और migration — Web Forms, MVC 5, System.Web pipeline, web.config, .NET Framework से modern .NET",
    hg: "Legacy ASP.NET refresher aur migration — Web Forms, MVC 5, System.Web pipeline, web.config, .NET Framework se modern .NET"
  },
  summary: {
    en: `<p>This is <b>your home ground</b>: Web Forms is 6/10 and MVC is 3/10 for you, and that experience is a real asset. A Tech Lead is asked "<b>we have a big .NET Framework app: how would you move it to modern .NET without stopping the business?</b>" Today you use the old world as a bridge to Day 12.</p>
<ul>
<li><b>Web Forms:</b> a page runs through a lifecycle (PreInit, Init, Load, control events, PreRender, Render, Unload) and keeps state in <b>ViewState</b> across <b>postbacks</b>. ASP.NET Core has no Web Forms and no ViewState; the closest modern ideas are Razor Pages for page-per-URL and Blazor for a component model.</li>
<li><b>MVC 5:</b> routing, <code>MvcHandler</code>, controller factory, action invoker, filters, action, result, view engine. ASP.NET Core MVC keeps the same ideas, but runs them as an endpoint inside the middleware pipeline (Day 12).</li>
<li><b>System.Web pipeline:</b> <code>HttpModule</code>, <code>HttpHandler</code> and <code>Global.asax</code> events become middleware and endpoints. Modules run in the same order on the way in and out (per event); middleware unwinds in reverse.</li>
<li><b>Config and state:</b> <code>web.config</code> becomes <code>appsettings.json</code> plus environment variables; <code>HttpContext.Current</code> has no direct equivalent (pass values explicitly; <code>IHttpContextAccessor</code> is a last resort); Session needs a deliberate choice.</li>
<li><b>Support status:</b> .NET Framework 4.8 and 4.8.1 follow the lifecycle of the Windows version they run on (supported as a Windows component). Modern .NET 10 is LTS until November 2028. "Supported" is not the same as "getting new features".</li>
<li><b>Migration:</b> assess first. Microsoft's docs now deprecate the .NET Upgrade Assistant in favour of GitHub Copilot app modernization. For big apps they recommend <b>incremental</b> migration (strangler fig): a new ASP.NET Core app in front, <b>YARP</b> proxying unmigrated routes to the old app, <b>System.Web adapters</b> sharing HttpContext, session and auth, libraries moved to .NET Standard 2.0 or multi-targeted.</li>
<li><b>TL angle:</b> a migration is a business case plus a risk plan, not a technology wish. Show value early, keep the old app shippable, measure progress per route.</li>
</ul>
<p>Plan (about 20 minutes for Short plus about 2 hours for Detailed): Short mode, then Q&amp;A aloud, then the code sections (Web Forms, web.config, csproj and JSON are display-only; the modern C# compiles), then the six puzzles, which run offline.</p>`,
    hi: `<p>यह <b>तुम्हारा अपना मैदान</b> है: Web Forms तुम्हारे लिए 6/10 और MVC 3/10 है, और वह experience असली ताक़त है। Tech Lead से पूछा जाता है "<b>हमारे पास बड़ा .NET Framework app है: business रोके बिना उसे modern .NET पर कैसे ले जाओगे?</b>" आज तुम पुरानी दुनिया को Day 12 तक पहुँचने का पुल बनाओगे।</p>
<ul>
<li><b>Web Forms:</b> page एक lifecycle से गुज़रता है (PreInit, Init, Load, control events, PreRender, Render, Unload) और <b>postbacks</b> के बीच state <b>ViewState</b> में रखता है। ASP.NET Core में न Web Forms है न ViewState; सबसे पास के modern ideas हैं Razor Pages (page-per-URL के लिए) और Blazor (component model के लिए)।</li>
<li><b>MVC 5:</b> routing, <code>MvcHandler</code>, controller factory, action invoker, filters, action, result, view engine। ASP.NET Core MVC में वही ideas हैं, पर वह middleware pipeline के अंदर एक endpoint की तरह चलता है (Day 12)।</li>
<li><b>System.Web pipeline:</b> <code>HttpModule</code>, <code>HttpHandler</code> और <code>Global.asax</code> events अब middleware और endpoints बन जाते हैं। Modules (हर event के लिए) आते और जाते वक़्त एक ही order में चलते हैं; middleware उल्टे order में वापस आता है।</li>
<li><b>Config और state:</b> <code>web.config</code> की जगह <code>appsettings.json</code> और environment variables; <code>HttpContext.Current</code> का सीधा बदला नहीं है (values को explicitly pass करो; <code>IHttpContextAccessor</code> आख़िरी option है); Session के लिए सोच-समझकर choice करनी पड़ती है।</li>
<li><b>Support status:</b> .NET Framework 4.8 और 4.8.1 उस Windows version के lifecycle को follow करते हैं जिस पर चल रहे हैं (Windows component की तरह supported)। Modern .NET 10 नवंबर 2028 तक LTS है। "Supported" का मतलब "नए features मिल रहे हैं" नहीं है।</li>
<li><b>Migration:</b> पहले assess करो। Microsoft के docs में अब .NET Upgrade Assistant deprecated है और GitHub Copilot app modernization recommend होता है। बड़े apps के लिए वे <b>incremental</b> migration (strangler fig) बताते हैं: आगे नया ASP.NET Core app, <b>YARP</b> जो unmigrated routes को पुराने app पर भेजता है, <b>System.Web adapters</b> जो HttpContext, session और auth share कराते हैं, और libraries .NET Standard 2.0 पर या multi-target।</li>
<li><b>TL angle:</b> migration एक business case और risk plan है, सिर्फ़ technology की चाह नहीं। value जल्दी दिखाओ, पुराना app shippable रखो, progress route-by-route नापो।</li>
</ul>
<p>Plan (Short लगभग 20 मिनट, Detailed लगभग 2 घंटे अलग से): पहले Short mode, फिर Q&amp;A ज़ोर से, फिर code sections (Web Forms, web.config, csproj और JSON सिर्फ़ दिखाने के लिए हैं; modern C# compile होता है), फिर छह puzzles जो offline चलते हैं।</p>`,
    hg: `<p>Yeh <b>tumhara apna maidaan</b> hai: Web Forms tumhare liye 6/10 aur MVC 3/10 hai, aur woh experience asli taaqat hai. Tech Lead se poocha jaata hai "<b>hamare paas bada .NET Framework app hai: business roke bina use modern .NET par kaise le jaoge?</b>" Aaj tum purani duniya ko Day 12 tak pahunchne ka pul banaoge.</p>
<ul>
<li><b>Web Forms:</b> page ek lifecycle se guzarta hai (PreInit, Init, Load, control events, PreRender, Render, Unload) aur <b>postbacks</b> ke beech state <b>ViewState</b> mein rakhta hai. ASP.NET Core mein na Web Forms hai na ViewState; sabse paas ke modern ideas hain Razor Pages (page-per-URL ke liye) aur Blazor (component model ke liye).</li>
<li><b>MVC 5:</b> routing, <code>MvcHandler</code>, controller factory, action invoker, filters, action, result, view engine. ASP.NET Core MVC mein wahi ideas hain, par woh middleware pipeline ke andar ek endpoint ki tarah chalta hai (Day 12).</li>
<li><b>System.Web pipeline:</b> <code>HttpModule</code>, <code>HttpHandler</code> aur <code>Global.asax</code> events ab middleware aur endpoints ban jaate hain. Modules (har event ke liye) aate aur jaate waqt ek hi order mein chalte hain; middleware ulte order mein wapas aata hai.</li>
<li><b>Config aur state:</b> <code>web.config</code> ki jagah <code>appsettings.json</code> aur environment variables; <code>HttpContext.Current</code> ka seedha badla nahi hai (values ko explicitly pass karo; <code>IHttpContextAccessor</code> aakhri option hai); Session ke liye soch-samajhkar choice karni padti hai.</li>
<li><b>Support status:</b> .NET Framework 4.8 aur 4.8.1 us Windows version ke lifecycle ko follow karte hain jis par chal rahe hain (Windows component ki tarah supported). Modern .NET 10 November 2028 tak LTS hai. "Supported" ka matlab "naye features mil rahe hain" nahi hai.</li>
<li><b>Migration:</b> pehle assess karo. Microsoft ke docs mein ab .NET Upgrade Assistant deprecated hai aur GitHub Copilot app modernization recommend hota hai. Bade apps ke liye woh <b>incremental</b> migration (strangler fig) batate hain: aage naya ASP.NET Core app, <b>YARP</b> jo unmigrated routes ko purane app par bhejta hai, <b>System.Web adapters</b> jo HttpContext, session aur auth share karate hain, aur libraries .NET Standard 2.0 par ya multi-target.</li>
<li><b>TL angle:</b> migration ek business case aur risk plan hai, sirf technology ki chaah nahi. Value jaldi dikhao, purana app shippable rakho, progress route-by-route naapo.</li>
</ul>
<p>Plan (Short lagbhag 20 minute, Detailed lagbhag 2 ghante alag se): pehle Short mode, phir Q&amp;A zor se, phir code sections (Web Forms, web.config, csproj aur JSON sirf dikhane ke liye hain; modern C# compile hota hai), phir chhe puzzles jo offline chalte hain.</p>`
  },
  sections: [
    {
      id: "three-generations-overview",
      depth: "short",
      title: {
        en: "Web Forms vs MVC 5 vs ASP.NET Core: three generations in one picture",
        hi: "Web Forms बनाम MVC 5 बनाम ASP.NET Core: तीन generations एक तस्वीर में",
        hg: "Web Forms vs MVC 5 vs ASP.NET Core: teen generations ek tasveer mein"
      },
      body: {
        en: `<p><b>Analogy:</b> a railway reservation counter. In <b>Web Forms</b> the clerk keeps your half-filled form and hands it back to you every time (that is <b>ViewState</b>), so you can walk away and continue later. In <b>MVC 5</b> you drop a slip in a box: the <b>controller</b> reads it, the <b>view</b> prints the ticket, and nobody keeps your form. <b>ASP.NET Core</b> is the same slip-based counter, but rebuilt as a modular assembly line (<b>middleware</b>) that can run on Linux and in containers.</p>
<ul>
<li><b>Web Forms (.aspx):</b> page-centric and event-driven, like desktop WinForms on the web. Server controls, <b>postback</b>, <b>ViewState</b>, a long page lifecycle. Quick to build, hard to test, and the HTML is generated for you.</li>
<li><b>MVC 5:</b> controllers, actions, views (Razor), routing, filters. You control the HTML. Much easier to unit test than Web Forms. It still runs on <code>System.Web</code> and IIS, so it is Windows-only.</li>
<li><b>ASP.NET Core (Day 12):</b> no <code>System.Web</code>, no <code>Global.asax</code>, no <code>web.config</code> for app settings. It has a small host, middleware, built-in DI (Day 11) and runs cross-platform. MVC controllers, Razor Pages, minimal APIs and Blazor sit on top.</li>
<li><b>Key fact:</b> there is no Web Forms in ASP.NET Core and no ViewState. You cannot "just upgrade" a Web Forms page: you re-build it (Razor Pages for pages, Blazor for stateful UI) or keep it running in the old app during an incremental migration.</li>
<li><b>Why this matters to you:</b> your Web Forms knowledge (events, lifecycle, controls) explains why old apps are slow, heavy and tangled, and it tells you where the migration pain will be.</li>
</ul>
<p><b>When to use:</b> new work goes to ASP.NET Core. <b>When not:</b> do not rewrite a stable, rarely-changed Web Forms app only because it is old; keep it supported and migrate when there is a business reason (Q&amp;A on the business case).</p>`,
        hi: `<p><b>Analogy:</b> railway reservation counter। <b>Web Forms</b> में clerk तुम्हारा आधा भरा form अपने पास रखता है और हर बार तुम्हें वापस देता है (यही <b>ViewState</b> है), इसलिए तुम चले जाओ और बाद में आगे बढ़ो। <b>MVC 5</b> में तुम एक slip box में डालते हो: <b>controller</b> उसे पढ़ता है, <b>view</b> ticket print करता है, और तुम्हारा form कोई नहीं रखता। <b>ASP.NET Core</b> भी वही slip वाला counter है, पर modular assembly line (<b>middleware</b>) की तरह दोबारा बना, जो Linux और containers पर चल सकती है।</p>
<ul>
<li><b>Web Forms (.aspx):</b> page-centric और event-driven, web पर desktop WinForms जैसा। Server controls, <b>postback</b>, <b>ViewState</b>, लंबा page lifecycle। बनाना तेज़, test करना मुश्किल, और HTML तुम्हारे लिए generate होता है।</li>
<li><b>MVC 5:</b> controllers, actions, views (Razor), routing, filters। HTML तुम्हारे control में। Web Forms से unit test करना बहुत आसान। फिर भी वह <code>System.Web</code> और IIS पर चलता है, इसलिए Windows-only है।</li>
<li><b>ASP.NET Core (Day 12):</b> <code>System.Web</code> नहीं, <code>Global.asax</code> नहीं, app settings के लिए <code>web.config</code> नहीं। छोटा host, middleware, built-in DI (Day 11) और cross-platform। MVC controllers, Razor Pages, minimal APIs और Blazor इसके ऊपर बैठते हैं।</li>
<li><b>Key fact:</b> ASP.NET Core में Web Forms नहीं है और ViewState भी नहीं। Web Forms page को "बस upgrade" नहीं कर सकते: उसे दोबारा बनाते हो (pages के लिए Razor Pages, stateful UI के लिए Blazor) या incremental migration में पुराने app में चलता रहने देते हो।</li>
<li><b>तुम्हारे लिए क्यों ज़रूरी:</b> तुम्हारा Web Forms knowledge (events, lifecycle, controls) बताता है कि पुराने apps slow, भारी और उलझे क्यों होते हैं, और migration का दर्द कहाँ आएगा।</li>
</ul>
<p><b>कब use करें:</b> नया काम ASP.NET Core में जाता है। <b>कब नहीं:</b> stable, कम बदलने वाले Web Forms app को सिर्फ़ इसलिए rewrite मत करो कि वह पुराना है; उसे supported रखो और business reason होने पर migrate करो (business case वाला Q&amp;A देखो)।</p>`,
        hg: `<p><b>Analogy:</b> railway reservation counter. <b>Web Forms</b> mein clerk tumhara aadha bhara form apne paas rakhta hai aur har baar tumhe wapas deta hai (yahi <b>ViewState</b> hai), isliye tum chale jao aur baad mein aage badho. <b>MVC 5</b> mein tum ek slip box mein daalte ho: <b>controller</b> use padhta hai, <b>view</b> ticket print karta hai, aur tumhara form koi nahi rakhta. <b>ASP.NET Core</b> bhi wahi slip wala counter hai, par modular assembly line (<b>middleware</b>) ki tarah dobara bana, jo Linux aur containers par chal sakti hai.</p>
<ul>
<li><b>Web Forms (.aspx):</b> page-centric aur event-driven, web par desktop WinForms jaisa. Server controls, <b>postback</b>, <b>ViewState</b>, lamba page lifecycle. Banana tez, test karna mushkil, aur HTML tumhare liye generate hota hai.</li>
<li><b>MVC 5:</b> controllers, actions, views (Razor), routing, filters. HTML tumhare control mein. Web Forms se unit test karna bahut aasaan. Phir bhi woh <code>System.Web</code> aur IIS par chalta hai, isliye Windows-only hai.</li>
<li><b>ASP.NET Core (Day 12):</b> <code>System.Web</code> nahi, <code>Global.asax</code> nahi, app settings ke liye <code>web.config</code> nahi. Chhota host, middleware, built-in DI (Day 11) aur cross-platform. MVC controllers, Razor Pages, minimal APIs aur Blazor iske upar baithte hain.</li>
<li><b>Key fact:</b> ASP.NET Core mein Web Forms nahi hai aur ViewState bhi nahi. Web Forms page ko "bas upgrade" nahi kar sakte: use dobara banate ho (pages ke liye Razor Pages, stateful UI ke liye Blazor) ya incremental migration mein purane app mein chalta rehne dete ho.</li>
<li><b>Tumhare liye kyun zaroori:</b> tumhara Web Forms knowledge (events, lifecycle, controls) batata hai ki purane apps slow, bhaari aur uljhe kyun hote hain, aur migration ka dard kahan aayega.</li>
</ul>
<p><b>Kab use karein:</b> naya kaam ASP.NET Core mein jaata hai. <b>Kab nahi:</b> stable, kam badalne wale Web Forms app ko sirf isliye rewrite mat karo ki woh purana hai; use supported rakho aur business reason hone par migrate karo (business case wala Q&amp;A dekho).</p>`
      }
    },
    {
      id: "pipelines-lifecycles-overview",
      depth: "short",
      title: {
        en: "Pipelines and lifecycles: System.Web and MVC 5 mapped to ASP.NET Core",
        hi: "Pipelines और lifecycles: System.Web और MVC 5 का ASP.NET Core से mapping",
        hg: "Pipelines aur lifecycles: System.Web aur MVC 5 ka ASP.NET Core se mapping"
      },
      body: {
        en: `<p><b>Analogy:</b> a tiffin delivery chain. The old system (System.Web) had fixed <b>checkpoints</b> (events) on the route: "pickup", "check address", "deliver", "close". Each helper (module) signs up for the checkpoints it cares about. ASP.NET Core instead hands the tiffin through a <b>line of people</b> (middleware): each one acts, passes it on, and gets it back on the return trip.</p>
<ul>
<li><b>Web Forms page lifecycle:</b> PreInit, Init, (postback only: load ViewState), Load, control events (Button.Click), PreRender, Render, Unload. <b>Init and Unload run child-first; Load and PreRender run parent-first.</b> Pitfall: wrong place for code (for example data-binding on every Load, not only <code>!IsPostBack</code>).</li>
<li><b>MVC 5 request lifecycle:</b> <code>UrlRoutingModule</code> (routing) picks a route, <code>MvcHandler</code> runs, the <b>controller factory</b> creates the controller, the <b>action invoker</b> runs filters (authentication, authorization, action, result, exception) around the action, the <code>ActionResult</code> executes, and the <b>view engine</b> renders the view.</li>
<li><b>In ASP.NET Core:</b> routing selects an <b>endpoint</b>; middleware before it (HTTPS redirection, authentication, authorization) wraps it. The controller is created through DI, filters wrap the action, results execute (Razor view or JSON). Same ideas, different plumbing (Day 12).</li>
<li><b>HttpModule/HttpHandler/Global.asax:</b> modules hook <code>HttpApplication</code> events (BeginRequest, AuthenticateRequest, EndRequest ...); for one event they run in the order listed in <code>web.config</code>, and <code>Global.asax</code> handlers run after the modules'. Handlers are the endpoint that finally produces the response. In Core, modules become <b>middleware</b> and handlers become <b>endpoints</b>.</li>
<li><b>Big difference:</b> modules run in the same order on request and response (per event); middleware runs in <b>reverse</b> on the way back, so ordering rules are different (Puzzle 3).</li>
<li><b>Config and state:</b> <code>web.config</code> + transforms become <code>appsettings.json</code>, <code>appsettings.{Environment}.json</code>, environment variables and secrets (Day 12, Day 20). <code>Application_Start</code> becomes <code>Program.cs</code>. <code>HttpContext.Current</code> is gone: pass what you need as parameters.</li>
</ul>
<p><b>When to use:</b> this mapping table when you read old code and plan where each piece lands. <b>When not:</b> do not port a module line by line; first ask what it did (logging, auth, headers) and whether Core already provides it.</p>`,
        hi: `<p><b>Analogy:</b> tiffin delivery chain। पुराने system (System.Web) में route पर fixed <b>checkpoints</b> (events) थे: "pickup", "address check", "deliver", "close"। हर helper (module) उन checkpoints के लिए sign up करता है जिनमें उसे दिलचस्पी है। ASP.NET Core इसके बजाय tiffin को <b>लोगों की line</b> (middleware) से गुज़ारता है: हर कोई अपना काम करता है, आगे बढ़ाता है, और वापसी में उसे फिर पाता है।</p>
<ul>
<li><b>Web Forms page lifecycle:</b> PreInit, Init, (सिर्फ़ postback में: ViewState load), Load, control events (Button.Click), PreRender, Render, Unload। <b>Init और Unload child-first चलते हैं; Load और PreRender parent-first।</b> गलती: code गलत जगह लगाना (जैसे data-binding हर Load पर, सिर्फ़ <code>!IsPostBack</code> में नहीं)।</li>
<li><b>MVC 5 request lifecycle:</b> <code>UrlRoutingModule</code> (routing) route चुनता है, <code>MvcHandler</code> चलता है, <b>controller factory</b> controller बनाती है, <b>action invoker</b> action के आसपास filters चलाता है (authentication, authorization, action, result, exception), <code>ActionResult</code> execute होता है, और <b>view engine</b> view render करता है।</li>
<li><b>ASP.NET Core में:</b> routing एक <b>endpoint</b> चुनता है; उससे पहले के middleware (HTTPS redirection, authentication, authorization) उसे घेरते हैं। Controller DI से बनता है, filters action को घेरते हैं, results execute होते हैं (Razor view या JSON)। वही ideas, अलग plumbing (Day 12)।</li>
<li><b>HttpModule/HttpHandler/Global.asax:</b> modules <code>HttpApplication</code> events पर hook करते हैं (BeginRequest, AuthenticateRequest, EndRequest ...); एक event के लिए वे <code>web.config</code> में लिखे order में चलते हैं, और <code>Global.asax</code> के handlers modules के बाद चलते हैं। Handler वह endpoint है जो आख़िर में response बनाता है। Core में modules <b>middleware</b> बनते हैं और handlers <b>endpoints</b>।</li>
<li><b>बड़ा फ़र्क:</b> modules request और response पर (हर event के लिए) एक ही order में चलते हैं; middleware वापसी में <b>उल्टा</b> चलता है, इसलिए ordering के rules अलग हैं (Puzzle 3)।</li>
<li><b>Config और state:</b> <code>web.config</code> + transforms की जगह <code>appsettings.json</code>, <code>appsettings.{Environment}.json</code>, environment variables और secrets (Day 12, Day 20)। <code>Application_Start</code> की जगह <code>Program.cs</code>। <code>HttpContext.Current</code> गया: जो चाहिए उसे parameters से pass करो।</li>
</ul>
<p><b>कब use करें:</b> पुराना code पढ़ते वक़्त और यह plan करते वक़्त कि हर हिस्सा कहाँ जाएगा, यह mapping table। <b>कब नहीं:</b> module को line-by-line port मत करो; पहले पूछो वह करता क्या था (logging, auth, headers) और क्या Core यह पहले से देता है।</p>`,
        hg: `<p><b>Analogy:</b> tiffin delivery chain. Purane system (System.Web) mein route par fixed <b>checkpoints</b> (events) the: "pickup", "address check", "deliver", "close". Har helper (module) un checkpoints ke liye sign up karta hai jinmein use dilchaspi hai. ASP.NET Core iske bajaye tiffin ko <b>logon ki line</b> (middleware) se guzaarta hai: har koi apna kaam karta hai, aage badhata hai, aur wapsi mein use phir paata hai.</p>
<ul>
<li><b>Web Forms page lifecycle:</b> PreInit, Init, (sirf postback mein: ViewState load), Load, control events (Button.Click), PreRender, Render, Unload. <b>Init aur Unload child-first chalte hain; Load aur PreRender parent-first.</b> Galti: code galat jagah lagana (jaise data-binding har Load par, sirf <code>!IsPostBack</code> mein nahi).</li>
<li><b>MVC 5 request lifecycle:</b> <code>UrlRoutingModule</code> (routing) route chunta hai, <code>MvcHandler</code> chalta hai, <b>controller factory</b> controller banati hai, <b>action invoker</b> action ke aaspaas filters chalata hai (authentication, authorization, action, result, exception), <code>ActionResult</code> execute hota hai, aur <b>view engine</b> view render karta hai.</li>
<li><b>ASP.NET Core mein:</b> routing ek <b>endpoint</b> chunta hai; usse pehle ke middleware (HTTPS redirection, authentication, authorization) use gherte hain. Controller DI se banta hai, filters action ko gherte hain, results execute hote hain (Razor view ya JSON). Wahi ideas, alag plumbing (Day 12).</li>
<li><b>HttpModule/HttpHandler/Global.asax:</b> modules <code>HttpApplication</code> events par hook karte hain (BeginRequest, AuthenticateRequest, EndRequest ...); ek event ke liye woh <code>web.config</code> mein likhe order mein chalte hain, aur <code>Global.asax</code> ke handlers modules ke baad chalte hain. Handler woh endpoint hai jo aakhir mein response banata hai. Core mein modules <b>middleware</b> bante hain aur handlers <b>endpoints</b>.</li>
<li><b>Bada farq:</b> modules request aur response par (har event ke liye) ek hi order mein chalte hain; middleware wapsi mein <b>ulta</b> chalta hai, isliye ordering ke rules alag hain (Puzzle 3).</li>
<li><b>Config aur state:</b> <code>web.config</code> + transforms ki jagah <code>appsettings.json</code>, <code>appsettings.{Environment}.json</code>, environment variables aur secrets (Day 12, Day 20). <code>Application_Start</code> ki jagah <code>Program.cs</code>. <code>HttpContext.Current</code> gaya: jo chahiye use parameters se pass karo.</li>
</ul>
<p><b>Kab use karein:</b> purana code padhte waqt aur yeh plan karte waqt ki har hissa kahan jayega, yeh mapping table. <b>Kab nahi:</b> module ko line-by-line port mat karo; pehle poochho woh karta kya tha (logging, auth, headers) aur kya Core yeh pehle se deta hai.</p>`
      }
    },
    {
      id: "migration-overview",
      depth: "short",
      title: {
        en: "Migration in one page: status, tools, incremental vs big-bang, TL view",
        hi: "Migration एक page में: status, tools, incremental बनाम big-bang, TL view",
        hg: "Migration ek page mein: status, tools, incremental vs big-bang, TL view"
      },
      body: {
        en: `<p><b>Analogy:</b> renovating a shop while customers keep shopping. A <b>big-bang</b> rewrite closes the shop for months and hopes the new one is right. An <b>incremental</b> (strangler fig) migration builds a new counter next to the old one, moves one product line at a time, and keeps the till open.</p>
<ul>
<li><b>Support status (verify before quoting):</b> .NET Framework 4.8 and 4.8.1 follow the lifecycle of the Windows version they are installed on (a Windows component). Its lifecycle page lists no separate end date for 4.8.1: support follows the Windows version. Modern .NET 10 is <b>LTS</b> (released November 2025, supported until November 2028). Older .NET Framework 4.6.2 is listed as ending in January 2027.</li>
<li><b>Why migrate anyway:</b> new features, performance, containers and Linux hosting, cloud cost, hiring, and security fixes in a platform that is actively developed. Not because "4.8 is dead": it is supported, just not where new work happens.</li>
<li><b>Tooling now:</b> Microsoft's docs state that <b>.NET Upgrade Assistant is officially deprecated</b> and recommend the <b>GitHub Copilot app modernization</b> agent (Visual Studio). The tool names and features change quickly, so re-check the docs before an interview or a plan.</li>
<li><b>Incremental path (Microsoft's recommendation for large apps):</b> put a new ASP.NET Core app in front, proxy unmigrated routes to the old app with <b>YARP</b>, share HttpContext, session and authentication using the <b>System.Web adapters</b> (<code>Microsoft.AspNetCore.SystemWebAdapters</code>), migrate libraries to <b>.NET Standard 2.0</b> or multi-target, then move routes one by one.</li>
<li><b>Blockers to check first:</b> Web Forms, WCF server, Windows-only APIs (registry, WMI, COM), packages without .NET support, <code>System.Web</code> everywhere, EF6 edge features, heavy Session use, AppDomain/Remoting.</li>
<li><b>TL view:</b> assessment, a risk-ranked route list, a rollback plan, a business case, and measurable milestones (percentage of traffic on the new app).</li>
</ul>
<p><b>When to use incremental:</b> large or business-critical apps. <b>When not:</b> small, simple apps with few dependencies can be migrated in place (Microsoft's own guidance), which is cheaper than building a proxy layer.</p>`,
        hi: `<p><b>Analogy:</b> दुकान की renovation जबकि customers खरीदारी करते रहें। <b>Big-bang</b> rewrite महीनों के लिए दुकान बंद कर देता है और उम्मीद करता है कि नई सही निकलेगी। <b>Incremental</b> (strangler fig) migration पुराने counter के बग़ल में नया counter बनाता है, एक बार में एक product line शिफ़्ट करता है, और गल्ला खुला रखता है।</p>
<ul>
<li><b>Support status (बोलने से पहले verify करो):</b> .NET Framework 4.8 और 4.8.1 उस Windows version के lifecycle को follow करते हैं जिस पर install हैं (Windows component)। Lifecycle page में 4.8.1 की अलग end date नहीं है: support Windows version के साथ चलता है। Modern .NET 10 <b>LTS</b> है (नवंबर 2025 में release, नवंबर 2028 तक supported)। पुराना .NET Framework 4.6.2 जनवरी 2027 में ख़त्म होने वाला listed है।</li>
<li><b>फिर भी migrate क्यों:</b> नए features, performance, containers और Linux hosting, cloud cost, hiring, और ऐसे platform में security fixes जो actively develop हो रहा है। इसलिए नहीं कि "4.8 मर चुका है": वह supported है, बस नया काम वहाँ नहीं होता।</li>
<li><b>अभी का tooling:</b> Microsoft के docs कहते हैं कि <b>.NET Upgrade Assistant officially deprecated है</b> और <b>GitHub Copilot app modernization</b> agent (Visual Studio) recommend करते हैं। Tool names और features जल्दी बदलते हैं, इसलिए interview या plan से पहले docs दोबारा देखो।</li>
<li><b>Incremental रास्ता (बड़े apps के लिए Microsoft की recommendation):</b> आगे नया ASP.NET Core app रखो, unmigrated routes को <b>YARP</b> से पुराने app पर proxy करो, <b>System.Web adapters</b> (<code>Microsoft.AspNetCore.SystemWebAdapters</code>) से HttpContext, session और authentication share करो, libraries को <b>.NET Standard 2.0</b> पर ले जाओ या multi-target करो, फिर routes एक-एक करके शिफ़्ट करो।</li>
<li><b>पहले blockers देखो:</b> Web Forms, WCF server, Windows-only APIs (registry, WMI, COM), बिना .NET support वाले packages, हर जगह <code>System.Web</code>, EF6 के edge features, भारी Session use, AppDomain/Remoting।</li>
<li><b>TL view:</b> assessment, risk के हिसाब से route list, rollback plan, business case, और नापने लायक milestones (नए app पर traffic का percentage)।</li>
</ul>
<p><b>Incremental कब:</b> बड़े या business-critical apps। <b>कब नहीं:</b> छोटे, simple apps जिनकी dependencies कम हैं उन्हें in place migrate किया जा सकता है (Microsoft की अपनी guidance), जो proxy layer बनाने से सस्ता है।</p>`,
        hg: `<p><b>Analogy:</b> dukaan ki renovation jabki customers kharidari karte rahein. <b>Big-bang</b> rewrite mahino ke liye dukaan band kar deta hai aur ummeed karta hai ki nayi sahi niklegi. <b>Incremental</b> (strangler fig) migration purane counter ke bagal mein naya counter banata hai, ek baar mein ek product line shift karta hai, aur galla khula rakhta hai.</p>
<ul>
<li><b>Support status (bolne se pehle verify karo):</b> .NET Framework 4.8 aur 4.8.1 us Windows version ke lifecycle ko follow karte hain jis par install hain (Windows component). Lifecycle page mein 4.8.1 ki alag end date nahi hai: support Windows version ke saath chalta hai. Modern .NET 10 <b>LTS</b> hai (November 2025 mein release, November 2028 tak supported). Purana .NET Framework 4.6.2 January 2027 mein khatam hone wala listed hai.</li>
<li><b>Phir bhi migrate kyun:</b> naye features, performance, containers aur Linux hosting, cloud cost, hiring, aur aise platform mein security fixes jo actively develop ho raha hai. Isliye nahi ki "4.8 mar chuka hai": woh supported hai, bas naya kaam wahan nahi hota.</li>
<li><b>Abhi ka tooling:</b> Microsoft ke docs kehte hain ki <b>.NET Upgrade Assistant officially deprecated hai</b> aur <b>GitHub Copilot app modernization</b> agent (Visual Studio) recommend karte hain. Tool names aur features jaldi badalte hain, isliye interview ya plan se pehle docs dobara dekho.</li>
<li><b>Incremental raasta (bade apps ke liye Microsoft ki recommendation):</b> aage naya ASP.NET Core app rakho, unmigrated routes ko <b>YARP</b> se purane app par proxy karo, <b>System.Web adapters</b> (<code>Microsoft.AspNetCore.SystemWebAdapters</code>) se HttpContext, session aur authentication share karo, libraries ko <b>.NET Standard 2.0</b> par le jao ya multi-target karo, phir routes ek-ek karke shift karo.</li>
<li><b>Pehle blockers dekho:</b> Web Forms, WCF server, Windows-only APIs (registry, WMI, COM), bina .NET support wale packages, har jagah <code>System.Web</code>, EF6 ke edge features, bhaari Session use, AppDomain/Remoting.</li>
<li><b>TL view:</b> assessment, risk ke hisaab se route list, rollback plan, business case, aur naapne layak milestones (naye app par traffic ka percentage).</li>
</ul>
<p><b>Incremental kab:</b> bade ya business-critical apps. <b>Kab nahi:</b> chhote, simple apps jinki dependencies kam hain unhe in place migrate kiya ja sakta hai (Microsoft ki apni guidance), jo proxy layer banane se sasta hai.</p>`
      }
    },
    {
      id: "webforms-lifecycle-in-code",
      depth: "detailed",
      title: {
        en: "Web Forms lifecycle, ViewState and postback in code, and the modern replacement",
        hi: "Web Forms lifecycle, ViewState और postback code में, और modern replacement",
        hg: "Web Forms lifecycle, ViewState aur postback code mein, aur modern replacement"
      },
      body: {
        en: `<p><b>Analogy:</b> a school attendance register that is photocopied and sent home with every student. <b>ViewState</b> is that copy: the server puts the page's control values into a hidden field <code>__VIEWSTATE</code> (encoded and usually protected), the browser carries it, and the next <b>postback</b> brings it back so the server can rebuild the page as it was. It works, but the copy grows with the page.</p>
<ul>
<li><b>Order to remember:</b> <code>PreInit</code> (dynamic controls, themes), <code>Init</code> (child-first), then on a postback ViewState and form data are loaded, <code>Load</code> (parent-first), <b>control events</b> such as <code>Button.Click</code>, <code>PreRender</code>, ViewState is saved, <code>Render</code>, <code>Unload</code>.</li>
<li><b>Postback:</b> the page posts back to itself. <code>IsPostBack</code> is false on the first GET and true afterwards. Typical bug: binding a grid on every <code>Page_Load</code> and wiping the user's edits before the click event runs.</li>
<li><b>ViewState cost:</b> it travels down in every response and up in every postback. Turn it off where you do not need it (<code>EnableViewState="false"</code>), keep big objects out of it, and bind in the right event. Treat it as a size-tax, not a security feature.</li>
<li><b>Why it does not exist in ASP.NET Core:</b> the framework dropped the server-control model. State now lives in the database, a cache, a cookie or the client. A Razor Page handler or an endpoint reads the request, loads fresh data and renders. Blazor has components with their own state and is the nearest "stateful UI" option.</li>
<li><b>Trade-off:</b> stateless handlers are simpler to scale and test, but you now write the "remember what the user typed" logic yourself (model binding and validation).</li>
</ul>
<p><b>When to use the modern shape:</b> every new page or API. <b>When not to touch:</b> a working Web Forms page that nobody changes; wrap it behind the proxy and leave it until its turn.</p>`,
        hi: `<p><b>Analogy:</b> school की attendance register जिसकी photocopy हर student के साथ घर भेजी जाती है। <b>ViewState</b> वही copy है: server page के control values को hidden field <code>__VIEWSTATE</code> में रखता है (encoded और आम तौर पर protected), browser उसे ले जाता है, और अगला <b>postback</b> उसे वापस लाता है ताकि server page को वैसा ही बना सके। चलता है, पर page के साथ वह copy बढ़ती जाती है।</p>
<ul>
<li><b>याद रखने का order:</b> <code>PreInit</code> (dynamic controls, themes), <code>Init</code> (child-first), फिर postback में ViewState और form data load होते हैं, <code>Load</code> (parent-first), <b>control events</b> जैसे <code>Button.Click</code>, <code>PreRender</code>, ViewState save होता है, <code>Render</code>, <code>Unload</code>।</li>
<li><b>Postback:</b> page अपने आप पर ही post करता है। पहले GET पर <code>IsPostBack</code> false और उसके बाद true। आम bug: हर <code>Page_Load</code> पर grid bind करना और click event चलने से पहले user के edits मिटा देना।</li>
<li><b>ViewState का cost:</b> वह हर response में नीचे आता है और हर postback में ऊपर जाता है। जहाँ ज़रूरत नहीं वहाँ बंद करो (<code>EnableViewState="false"</code>), बड़े objects उसमें मत रखो, और सही event में bind करो। इसे size-tax समझो, security feature नहीं।</li>
<li><b>ASP.NET Core में क्यों नहीं है:</b> framework ने server-control model छोड़ दिया। State अब database, cache, cookie या client में रहती है। Razor Page handler या endpoint request पढ़ता है, ताज़ा data load करता है और render करता है। Blazor में components अपनी state रखते हैं और वह "stateful UI" के सबसे पास का option है।</li>
<li><b>Trade-off:</b> stateless handlers scale और test करने में simple हैं, पर "user ने क्या type किया था" याद रखने वाला logic अब तुम खुद लिखते हो (model binding और validation)।</li>
</ul>
<p><b>Modern shape कब use करें:</b> हर नया page या API। <b>कब न छेड़ें:</b> चलता हुआ Web Forms page जिसे कोई नहीं बदलता; उसे proxy के पीछे रखो और उसकी बारी आने तक छोड़ दो।</p>`,
        hg: `<p><b>Analogy:</b> school ki attendance register jiski photocopy har student ke saath ghar bheji jaati hai. <b>ViewState</b> wahi copy hai: server page ke control values ko hidden field <code>__VIEWSTATE</code> mein rakhta hai (encoded aur aam taur par protected), browser use le jaata hai, aur agla <b>postback</b> use wapas laata hai taaki server page ko waisa hi bana sake. Chalta hai, par page ke saath woh copy badhti jaati hai.</p>
<ul>
<li><b>Yaad rakhne ka order:</b> <code>PreInit</code> (dynamic controls, themes), <code>Init</code> (child-first), phir postback mein ViewState aur form data load hote hain, <code>Load</code> (parent-first), <b>control events</b> jaise <code>Button.Click</code>, <code>PreRender</code>, ViewState save hota hai, <code>Render</code>, <code>Unload</code>.</li>
<li><b>Postback:</b> page apne aap par hi post karta hai. Pehle GET par <code>IsPostBack</code> false aur uske baad true. Aam bug: har <code>Page_Load</code> par grid bind karna aur click event chalne se pehle user ke edits mita dena.</li>
<li><b>ViewState ka cost:</b> woh har response mein neeche aata hai aur har postback mein upar jaata hai. Jahan zaroorat nahi wahan band karo (<code>EnableViewState="false"</code>), bade objects usmein mat rakho, aur sahi event mein bind karo. Ise size-tax samjho, security feature nahi.</li>
<li><b>ASP.NET Core mein kyun nahi hai:</b> framework ne server-control model chhod diya. State ab database, cache, cookie ya client mein rehti hai. Razor Page handler ya endpoint request padhta hai, taaza data load karta hai aur render karta hai. Blazor mein components apni state rakhte hain aur woh "stateful UI" ke sabse paas ka option hai.</li>
<li><b>Trade-off:</b> stateless handlers scale aur test karne mein simple hain, par "user ne kya type kiya tha" yaad rakhne wala logic ab tum khud likhte ho (model binding aur validation).</li>
</ul>
<p><b>Modern shape kab use karein:</b> har naya page ya API. <b>Kab na chhedein:</b> chalta hua Web Forms page jise koi nahi badalta; use proxy ke peechhe rakho aur uski baari aane tak chhod do.</p>`
      },
      code: [
        {
          lang: "csharp",
          caption: {
            en: "Web Forms code-behind (.NET Framework, System.Web; display-only): bind once, keep ViewState small",
            hi: "Web Forms code-behind (.NET Framework, System.Web; सिर्फ़ दिखाने के लिए): एक बार bind, ViewState छोटा",
            hg: "Web Forms code-behind (.NET Framework, System.Web; sirf dikhane ke liye): ek baar bind, ViewState chhota"
          },
          check: "none",
          src: `// Orders.aspx.cs — classic Web Forms (System.Web). Not compilable on modern .NET.
// Orders.aspx: <asp:GridView ID="Grid" runat="server" EnableViewState="false" />
//              <asp:Button ID="ShipButton" runat="server" Text="Ship" OnClick="ShipButton_Click" />
public partial class Orders : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)               // first GET only; a postback restores state itself
        {
            BindGrid();
        }
    }

    protected void ShipButton_Click(object sender, EventArgs e)   // control event: after Load
    {
        var id = int.Parse(Request.Form["orderId"]);
        new OrderService().MarkShipped(id);
        BindGrid();                    // rebind because the grid has ViewState turned off
    }

    private void BindGrid()
    {
        Grid.DataSource = new OrderService().GetOpenOrders();
        Grid.DataBind();
    }
}`
        },
        {
          lang: "csharp",
          caption: {
            en: "The same screen on ASP.NET Core: no ViewState, state comes from the database on every request",
            hi: "वही screen ASP.NET Core पर: ViewState नहीं, हर request पर state database से आती है",
            hg: "Wahi screen ASP.NET Core par: ViewState nahi, har request par state database se aati hai"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<IOrderService, OrderService>();
var app = builder.Build();

// GET: load fresh data every time, nothing is carried in a hidden field.
app.MapGet("/orders", (IOrderService orders) => Results.Ok(orders.GetOpenOrders()));

// POST: the action is explicit, the id comes from the route.
app.MapPost("/orders/{id:int}/ship", (int id, IOrderService orders) =>
{
    orders.MarkShipped(id);
    return Results.NoContent();
});

app.Run();

public interface IOrderService
{
    IReadOnlyList<int> GetOpenOrders();
    void MarkShipped(int id);
}

public sealed class OrderService : IOrderService
{
    private readonly List<int> _open = [101, 102, 103];
    public IReadOnlyList<int> GetOpenOrders() => _open;
    public void MarkShipped(int id) => _open.Remove(id);
}`
        }
      ]
    },
    {
      id: "pipeline-mvc-to-core-in-code",
      depth: "detailed",
      title: {
        en: "HttpModule, Global.asax and MVC filters in code, and their ASP.NET Core versions",
        hi: "HttpModule, Global.asax और MVC filters code में, और उनके ASP.NET Core versions",
        hg: "HttpModule, Global.asax aur MVC filters code mein, aur unke ASP.NET Core versions"
      },
      body: {
        en: `<p><b>Analogy:</b> an airport. The old system had <b>fixed gates</b> every passenger passes in the same sequence (check-in, security, boarding), and each department stands at the gates it cares about. The new system is a <b>corridor</b> where each desk handles you on the way in and again on the way out.</p>
<ul>
<li><b>HttpModule</b> = a class that subscribes to <code>HttpApplication</code> events and is registered in <code>web.config</code> (<code>system.webServer/modules</code>). For one event, modules run in the order they are listed; <code>Global.asax</code> handlers run after them.</li>
<li><b>Middleware</b> = a delegate or class with <code>next</code>. You register it in <code>Program.cs</code>; order in code is the order on the way in and the reverse on the way out. Branching, short-circuiting and per-request services come naturally (Day 12, Chain of Responsibility from Day 10).</li>
<li><b>HttpHandler</b> (<code>.ashx</code>, or the MVC handler) = the endpoint that produces the response. In Core an <b>endpoint</b> (minimal API, controller action, Razor Page) does that job, chosen by routing.</li>
<li><b>MVC 5 filters</b> (<code>ActionFilterAttribute</code>, <code>IAuthorizationFilter</code>, <code>IExceptionFilter</code>) have Core equivalents, with <b>DI support</b> and async versions (<code>IAsyncActionFilter</code>). Use middleware for cross-cutting concerns that need to see every request (correlation id, headers) and filters for things that need MVC context (model state, action arguments).</li>
<li><b>If a module is hard to port:</b> the System.Web adapters can host <code>IHttpModule</code> classes and a <code>Global.asax</code> <code>HttpApplication</code> inside ASP.NET Core as a temporary bridge, so migration can continue. Plan to replace them later.</li>
</ul>
<p><b>When to rewrite as middleware:</b> logging, correlation ids, security headers, redirects. <b>When to bridge instead:</b> a large, risky module nobody understands, until you have tests around it.</p>`,
        hi: `<p><b>Analogy:</b> airport। पुराने system में <b>fixed gates</b> थे जिनसे हर passenger एक ही sequence में गुज़रता है (check-in, security, boarding), और हर department उन gates पर खड़ा होता है जिनसे उसका मतलब है। नया system एक <b>corridor</b> है जहाँ हर desk जाते वक़्त भी तुम्हें संभालता है और लौटते वक़्त भी।</p>
<ul>
<li><b>HttpModule</b> = ऐसी class जो <code>HttpApplication</code> events को subscribe करती है और <code>web.config</code> में register होती है (<code>system.webServer/modules</code>)। एक event के लिए modules उसी order में चलते हैं जिसमें listed हैं; <code>Global.asax</code> के handlers उनके बाद चलते हैं।</li>
<li><b>Middleware</b> = delegate या class जिसके पास <code>next</code> है। उसे <code>Program.cs</code> में register करते हो; code का order जाते वक़्त का order है और लौटते वक़्त उसका उल्टा। Branching, short-circuiting और per-request services आसानी से मिलते हैं (Day 12, Day 10 का Chain of Responsibility)।</li>
<li><b>HttpHandler</b> (<code>.ashx</code>, या MVC handler) = वह endpoint जो response बनाता है। Core में यह काम <b>endpoint</b> (minimal API, controller action, Razor Page) करता है, जिसे routing चुनती है।</li>
<li><b>MVC 5 filters</b> (<code>ActionFilterAttribute</code>, <code>IAuthorizationFilter</code>, <code>IExceptionFilter</code>) के Core में equivalents हैं, <b>DI support</b> और async versions (<code>IAsyncActionFilter</code>) के साथ। जिन cross-cutting बातों को हर request देखनी है (correlation id, headers) उनके लिए middleware, और जिन्हें MVC context चाहिए (model state, action arguments) उनके लिए filters।</li>
<li><b>अगर module port करना मुश्किल है:</b> System.Web adapters <code>IHttpModule</code> classes और <code>Global.asax</code> का <code>HttpApplication</code> ASP.NET Core के अंदर temporary bridge की तरह host कर सकते हैं, ताकि migration चलता रहे। उन्हें बाद में बदलने का plan रखो।</li>
</ul>
<p><b>Middleware में कब rewrite करें:</b> logging, correlation ids, security headers, redirects। <b>कब bridge करें:</b> बड़ा, risky module जिसे कोई नहीं समझता, जब तक उसके आसपास tests न बन जाएँ।</p>`,
        hg: `<p><b>Analogy:</b> airport. Purane system mein <b>fixed gates</b> the jinse har passenger ek hi sequence mein guzarta hai (check-in, security, boarding), aur har department un gates par khada hota hai jinse uska matlab hai. Naya system ek <b>corridor</b> hai jahan har desk jaate waqt bhi tumhe sambhalta hai aur lautte waqt bhi.</p>
<ul>
<li><b>HttpModule</b> = aisi class jo <code>HttpApplication</code> events ko subscribe karti hai aur <code>web.config</code> mein register hoti hai (<code>system.webServer/modules</code>). Ek event ke liye modules usi order mein chalte hain jisme listed hain; <code>Global.asax</code> ke handlers unke baad chalte hain.</li>
<li><b>Middleware</b> = delegate ya class jiske paas <code>next</code> hai. Use <code>Program.cs</code> mein register karte ho; code ka order jaate waqt ka order hai aur lautte waqt uska ulta. Branching, short-circuiting aur per-request services aasaani se milte hain (Day 12, Day 10 ka Chain of Responsibility).</li>
<li><b>HttpHandler</b> (<code>.ashx</code>, ya MVC handler) = woh endpoint jo response banata hai. Core mein yeh kaam <b>endpoint</b> (minimal API, controller action, Razor Page) karta hai, jise routing chunti hai.</li>
<li><b>MVC 5 filters</b> (<code>ActionFilterAttribute</code>, <code>IAuthorizationFilter</code>, <code>IExceptionFilter</code>) ke Core mein equivalents hain, <b>DI support</b> aur async versions (<code>IAsyncActionFilter</code>) ke saath. Jin cross-cutting baaton ko har request dekhni hai (correlation id, headers) unke liye middleware, aur jinhe MVC context chahiye (model state, action arguments) unke liye filters.</li>
<li><b>Agar module port karna mushkil hai:</b> System.Web adapters <code>IHttpModule</code> classes aur <code>Global.asax</code> ka <code>HttpApplication</code> ASP.NET Core ke andar temporary bridge ki tarah host kar sakte hain, taaki migration chalta rahe. Unhe baad mein badalne ka plan rakho.</li>
</ul>
<p><b>Middleware mein kab rewrite karein:</b> logging, correlation ids, security headers, redirects. <b>Kab bridge karein:</b> bada, risky module jise koi nahi samajhta, jab tak uske aaspaas tests na ban jayein.</p>`
      },
      code: [
        {
          lang: "csharp",
          caption: {
            en: "Legacy: an HttpModule that adds a correlation id header, registered in web.config (display-only)",
            hi: "Legacy: HttpModule जो correlation id header जोड़ता है, web.config में registered (सिर्फ़ दिखाने के लिए)",
            hg: "Legacy: HttpModule jo correlation id header jodta hai, web.config mein registered (sirf dikhane ke liye)"
          },
          check: "none",
          src: `// CorrelationModule.cs — .NET Framework, System.Web. Not compilable on modern .NET.
public class CorrelationModule : IHttpModule
{
    public void Init(HttpApplication app)
    {
        app.BeginRequest += (s, e) =>
        {
            var ctx = ((HttpApplication)s).Context;
            var id = ctx.Request.Headers["X-Correlation-Id"] ?? Guid.NewGuid().ToString("N");
            ctx.Items["CorrelationId"] = id;
            ctx.Response.Headers["X-Correlation-Id"] = id;
        };
    }
    public void Dispose() { }
}

// web.config
// <system.webServer>
//   <modules>
//     <add name="Correlation" type="Legacy.CorrelationModule" />
//   </modules>
// </system.webServer>`
        },
        {
          lang: "csharp",
          caption: {
            en: "ASP.NET Core: the same job as middleware, plus an async action filter with DI",
            hi: "ASP.NET Core: वही काम middleware में, और DI वाला async action filter",
            hg: "ASP.NET Core: wahi kaam middleware mein, aur DI wala async action filter"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers(o => o.Filters.Add<AuditFilter>());   // filter created through DI
var app = builder.Build();

// Middleware = the old HttpModule. Order in code is the order on the way in.
app.Use(async (context, next) =>
{
    var id = context.Request.Headers["X-Correlation-Id"].FirstOrDefault() ?? Guid.NewGuid().ToString("N");
    context.Items["CorrelationId"] = id;
    context.Response.Headers["X-Correlation-Id"] = id;   // headers are set before the body starts
    await next();
});

app.MapControllers();
app.Run();

// Filter = the old ActionFilterAttribute, now async and with constructor injection.
public sealed class AuditFilter(ILogger<AuditFilter> logger) : IAsyncActionFilter
{
    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        logger.LogInformation("Running {Action}", context.ActionDescriptor.DisplayName);
        var executed = await next();
        if (executed.Exception is not null)
            logger.LogWarning("Action failed: {Message}", executed.Exception.Message);
    }
}

[ApiController]
[Route("api/ping")]
public sealed class PingController : ControllerBase
{
    [HttpGet] public IActionResult Get() => Ok("pong");
}`
        }
      ]
    },
    {
      id: "config-state-httpcontext-in-code",
      depth: "detailed",
      title: {
        en: "web.config, Session and HttpContext.Current in code, and what to do instead",
        hi: "web.config, Session और HttpContext.Current code में, और उसकी जगह क्या करें",
        hg: "web.config, Session aur HttpContext.Current code mein, aur uski jagah kya karein"
      },
      body: {
        en: `<p><b>Analogy:</b> <code>web.config</code> is one big notice board at the office gate that holds everything: room numbers, passwords, rules. <code>appsettings.json</code> plus environment variables is a <b>small folder per environment</b>, and secrets are kept in a locker (Key Vault or user-secrets, Day 12 and Day 20). <code>HttpContext.Current</code> was a <b>global pen</b> on the notice board that anyone could grab; in Core you hand the pen to whoever needs it.</p>
<ul>
<li><b>web.config:</b> still exists for IIS settings (for example hosting module settings), but app settings and connection strings move to <code>appsettings.json</code>, <code>appsettings.{Environment}.json</code>, environment variables and a secret store. Config transforms (<code>web.Release.config</code>) become per-environment files or variables. Bind sections to typed <b>options</b> classes and validate on start (Day 12).</li>
<li><b>HttpContext.Current:</b> a static that gave any code the current request. ASP.NET Core has no such static. Best fix: pass what you need (user id, tenant, culture) as <b>parameters</b> or through a small scoped service. <code>IHttpContextAccessor</code> exists (it uses <code>AsyncLocal</code> under the hood) but hides a dependency on the web layer and fails in background work, so treat it as a <b>last resort</b> bridge.</li>
<li><b>Session:</b> Web Forms and MVC 5 apps often use <code>Session["x"]</code>, in-process by default. ASP.NET Core has its own session API (<code>AddSession</code> and <code>UseSession</code>), backed by a distributed cache, and the APIs differ. For incremental migration, the System.Web adapters can share session between the old and the new app. Long term, prefer a token or cookie with the minimum data and keep state in a database or cache.</li>
<li><b>Application state and caching:</b> <code>Application["x"]</code> and <code>HttpRuntime.Cache</code> map to singleton services, <code>IMemoryCache</code> or a distributed cache (Day 13).</li>
<li><b>Authentication:</b> Forms auth and Membership become ASP.NET Core Identity or an external identity provider; shared auth between old and new apps is possible during migration, but plan the end state early.</li>
</ul>
<p><b>When to use IHttpContextAccessor:</b> a library you cannot change yet, during migration. <b>When not:</b> new code. Pass values in, and your code is easier to test and works off the request thread too.</p>`,
        hi: `<p><b>Analogy:</b> <code>web.config</code> office के gate पर लगा एक बड़ा notice board है जिस पर सब कुछ है: room numbers, passwords, rules। <code>appsettings.json</code> और environment variables हर environment के लिए <b>छोटा folder</b> हैं, और secrets locker में रहते हैं (Key Vault या user-secrets, Day 12 और Day 20)। <code>HttpContext.Current</code> notice board पर बँधा <b>global pen</b> था जिसे कोई भी उठा लेता; Core में pen उसे देते हो जिसे चाहिए।</p>
<ul>
<li><b>web.config:</b> IIS settings के लिए अब भी है (जैसे hosting module settings), पर app settings और connection strings <code>appsettings.json</code>, <code>appsettings.{Environment}.json</code>, environment variables और secret store में चले जाते हैं। Config transforms (<code>web.Release.config</code>) अब per-environment files या variables बनते हैं। Sections को typed <b>options</b> classes से bind करो और start पर validate करो (Day 12)।</li>
<li><b>HttpContext.Current:</b> static जो किसी भी code को current request देता था। ASP.NET Core में ऐसा static नहीं है। सबसे अच्छा fix: जो चाहिए (user id, tenant, culture) उसे <b>parameters</b> से या छोटी scoped service से pass करो। <code>IHttpContextAccessor</code> है (अंदर <code>AsyncLocal</code> use करता है) पर वह web layer की dependency छिपाता है और background काम में fail होता है, इसलिए उसे <b>आख़िरी option</b> वाला bridge समझो।</li>
<li><b>Session:</b> Web Forms और MVC 5 apps में अक्सर <code>Session["x"]</code> होता है, default में in-process। ASP.NET Core की अपनी session API है (<code>AddSession</code> और <code>UseSession</code>), distributed cache के पीछे, और APIs अलग हैं। Incremental migration में System.Web adapters पुराने और नए app के बीच session share करा सकते हैं। लंबे समय में कम से कम data वाला token या cookie रखो और state को database या cache में रखो।</li>
<li><b>Application state और caching:</b> <code>Application["x"]</code> और <code>HttpRuntime.Cache</code> की जगह singleton services, <code>IMemoryCache</code> या distributed cache (Day 13)।</li>
<li><b>Authentication:</b> Forms auth और Membership की जगह ASP.NET Core Identity या external identity provider; migration के दौरान पुराने और नए app के बीच auth share हो सकता है, पर end state पहले से सोचो।</li>
</ul>
<p><b>IHttpContextAccessor कब:</b> ऐसी library जिसे अभी बदल नहीं सकते, migration के दौरान। <b>कब नहीं:</b> नया code। values अंदर pass करो, तो code test करना आसान होता है और request thread के बाहर भी चलता है।</p>`,
        hg: `<p><b>Analogy:</b> <code>web.config</code> office ke gate par laga ek bada notice board hai jis par sab kuch hai: room numbers, passwords, rules. <code>appsettings.json</code> aur environment variables har environment ke liye <b>chhota folder</b> hain, aur secrets locker mein rehte hain (Key Vault ya user-secrets, Day 12 aur Day 20). <code>HttpContext.Current</code> notice board par bandha <b>global pen</b> tha jise koi bhi utha leta; Core mein pen use dete ho jise chahiye.</p>
<ul>
<li><b>web.config:</b> IIS settings ke liye ab bhi hai (jaise hosting module settings), par app settings aur connection strings <code>appsettings.json</code>, <code>appsettings.{Environment}.json</code>, environment variables aur secret store mein chale jaate hain. Config transforms (<code>web.Release.config</code>) ab per-environment files ya variables bante hain. Sections ko typed <b>options</b> classes se bind karo aur start par validate karo (Day 12).</li>
<li><b>HttpContext.Current:</b> static jo kisi bhi code ko current request deta tha. ASP.NET Core mein aisa static nahi hai. Sabse achha fix: jo chahiye (user id, tenant, culture) use <b>parameters</b> se ya chhoti scoped service se pass karo. <code>IHttpContextAccessor</code> hai (andar <code>AsyncLocal</code> use karta hai) par woh web layer ki dependency chhupata hai aur background kaam mein fail hota hai, isliye use <b>aakhri option</b> wala bridge samjho.</li>
<li><b>Session:</b> Web Forms aur MVC 5 apps mein aksar <code>Session["x"]</code> hota hai, default mein in-process. ASP.NET Core ki apni session API hai (<code>AddSession</code> aur <code>UseSession</code>), distributed cache ke peechhe, aur APIs alag hain. Incremental migration mein System.Web adapters purane aur naye app ke beech session share kara sakte hain. Lambe samay mein kam se kam data wala token ya cookie rakho aur state ko database ya cache mein rakho.</li>
<li><b>Application state aur caching:</b> <code>Application["x"]</code> aur <code>HttpRuntime.Cache</code> ki jagah singleton services, <code>IMemoryCache</code> ya distributed cache (Day 13).</li>
<li><b>Authentication:</b> Forms auth aur Membership ki jagah ASP.NET Core Identity ya external identity provider; migration ke dauraan purane aur naye app ke beech auth share ho sakta hai, par end state pehle se socho.</li>
</ul>
<p><b>IHttpContextAccessor kab:</b> aisi library jise abhi badal nahi sakte, migration ke dauraan. <b>Kab nahi:</b> naya code. Values andar pass karo, to code test karna aasaan hota hai aur request thread ke bahar bhi chalta hai.</p>`
      },
      code: [
        {
          lang: "text",
          caption: {
            en: "Legacy web.config: settings, connection string and secrets in one XML file (display-only; values are fake)",
            hi: "Legacy web.config: settings, connection string और secrets एक XML file में (सिर्फ़ दिखाने के लिए; values नकली हैं)",
            hg: "Legacy web.config: settings, connection string aur secrets ek XML file mein (sirf dikhane ke liye; values nakli hain)"
          },
          check: "none",
          src: `<configuration>
  <appSettings>
    <add key="Shop:PageSize" value="25" />
    <add key="Shop:PaymentApiKey" value="DO-NOT-COMMIT-A-REAL-KEY" />  <!-- secret in source control: avoid -->
  </appSettings>
  <connectionStrings>
    <add name="Shop" connectionString="Server=.;Database=Shop;Integrated Security=true" providerName="System.Data.SqlClient" />
  </connectionStrings>
  <system.web>
    <sessionState mode="InProc" timeout="20" />   <!-- in-process: lost on app restart, not shared across servers -->
  </system.web>
</configuration>`
        },
        {
          lang: "csharp",
          caption: {
            en: "ASP.NET Core: typed options bound from appsettings, validated on start, and values passed explicitly instead of HttpContext.Current",
            hi: "ASP.NET Core: appsettings से bind हुए typed options, start पर validated, और HttpContext.Current की जगह values explicitly pass",
            hg: "ASP.NET Core: appsettings se bind hue typed options, start par validated, aur HttpContext.Current ki jagah values explicitly pass"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// appsettings.json: { "Shop": { "PageSize": 25 } }   (secrets come from user-secrets / Key Vault, not this file)
builder.Services.AddOptions<ShopOptions>()
    .BindConfiguration("Shop")
    .ValidateDataAnnotations()
    .ValidateOnStart();
builder.Services.AddScoped<OrderQueries>();

var app = builder.Build();

// The user is a parameter of the endpoint, not read from a global static.
app.MapGet("/my-orders", (ClaimsPrincipal user, OrderQueries queries) =>
    Results.Ok(queries.ForUser(user.FindFirstValue(ClaimTypes.NameIdentifier) ?? "anonymous")));

app.Run();

public sealed class ShopOptions
{
    [Range(1, 200)] public int PageSize { get; init; } = 25;
}

// The service receives what it needs; it never touches HttpContext, so it is easy to unit test.
public sealed class OrderQueries(IOptions<ShopOptions> options)
{
    public IReadOnlyList<string> ForUser(string userId) =>
        Enumerable.Range(1, options.Value.PageSize).Select(n => $"{userId}-order-{n}").ToList();
}`
        },
        {
          lang: "csharp",
          caption: {
            en: "Bridge only: IHttpContextAccessor for a legacy-style class you cannot change yet (last resort)",
            hi: "सिर्फ़ bridge: ऐसी legacy-style class के लिए IHttpContextAccessor जिसे अभी बदल नहीं सकते (आख़िरी option)",
            hg: "Sirf bridge: aisi legacy-style class ke liye IHttpContextAccessor jise abhi badal nahi sakte (aakhri option)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddHttpContextAccessor();            // opt-in: not registered by default
builder.Services.AddScoped<LegacyAuditHelper>();
var app = builder.Build();

app.MapGet("/audit", (LegacyAuditHelper helper) => helper.CurrentUserName());
app.Run();

// TEMPORARY bridge. Plan: replace this dependency with an explicit parameter during the next refactor.
public sealed class LegacyAuditHelper(IHttpContextAccessor accessor)
{
    // HttpContext is null outside a request (background jobs, hosted services), so always check.
    public string CurrentUserName() => accessor.HttpContext?.User.Identity?.Name ?? "no-request";
}`
        }
      ]
    },
    {
      id: "webapi-wcf-ef-in-code",
      depth: "detailed",
      title: {
        en: "Web API 2, WCF and EF6 in code: what changes on ASP.NET Core",
        hi: "Web API 2, WCF और EF6 code में: ASP.NET Core पर क्या बदलता है",
        hg: "Web API 2, WCF aur EF6 code mein: ASP.NET Core par kya badalta hai"
      },
      body: {
        en: `<p><b>Analogy:</b> moving house. Most furniture fits (controllers, DTOs, LINQ), but a few things need a new fitting: the old gas connection (WCF server), the old fuse box (EF6 edge features) and the lift (the old routing and model binding behaviours).</p>
<ul>
<li><b>Web API 2 to ASP.NET Core Web API (Day 13):</b> <code>ApiController</code> becomes <code>ControllerBase</code> with <code>[ApiController]</code> (automatic 400 for invalid models). <code>IHttpActionResult</code> becomes <code>ActionResult&lt;T&gt;</code> / <code>IActionResult</code>. Message handlers become middleware. Attribute routing is similar, but check route templates and model binding rules, because defaults differ (for example the default JSON serializer is System.Text.Json, where Web API 2 used Newtonsoft.Json, and <code>[ApiController]</code> infers binding sources). Run contract tests against both versions.</li>
<li><b>WCF:</b> WCF <b>server</b> is not part of modern .NET. Choices: <b>CoreWCF</b> (a .NET Foundation port of the service side of WCF, to keep existing SOAP clients working), <b>gRPC</b> (contract-first, fast, good for internal services; clients must change), or REST/HTTP APIs. WCF <b>clients</b> can still be used from modern .NET through the <code>System.ServiceModel</code> client packages. Pick based on who the clients are: external SOAP partners usually push you to CoreWCF; your own services can move to gRPC or HTTP.</li>
<li><b>EF6 to EF Core (Days 5 and 6):</b> EF Core is a rewrite, not a patch. No EDMX designer; lazy loading is opt-in; some EF6 features have no direct equivalent or work differently (check Microsoft's EF6 versus EF Core comparison for each feature you use). EF6 itself can run on modern .NET (EF 6.3 and later), which allows a <b>two-step</b> path: move the app to modern .NET first, move to EF Core later.</li>
<li><b>Check the SQL and the tracking behaviour:</b> same LINQ can generate different SQL; compare queries and test with a real database.</li>
</ul>
<p><b>When to use CoreWCF:</b> existing SOAP consumers you cannot change. <b>When not:</b> a greenfield service-to-service call, where gRPC or HTTP is simpler (Day 13, Day 16).</p>`,
        hi: `<p><b>Analogy:</b> घर शिफ़्ट करना। ज़्यादातर furniture fit हो जाता है (controllers, DTOs, LINQ), पर कुछ चीज़ों को नई fitting चाहिए: पुराना gas connection (WCF server), पुराना fuse box (EF6 के edge features) और lift (पुराने routing और model binding behaviours)।</p>
<ul>
<li><b>Web API 2 से ASP.NET Core Web API (Day 13):</b> <code>ApiController</code> की जगह <code>[ApiController]</code> वाला <code>ControllerBase</code> (invalid models पर automatic 400)। <code>IHttpActionResult</code> की जगह <code>ActionResult&lt;T&gt;</code> / <code>IActionResult</code>। Message handlers की जगह middleware। Attribute routing similar है, पर route templates और model binding rules जाँचो, क्योंकि defaults अलग हैं (जैसे default JSON serializer System.Text.Json है जबकि Web API 2 Newtonsoft.Json use करता था, और <code>[ApiController]</code> binding sources खुद infer करता है)। दोनों versions पर contract tests चलाओ।</li>
<li><b>WCF:</b> WCF का <b>server</b> modern .NET का हिस्सा नहीं है। Choices: <b>CoreWCF</b> (WCF की service side का .NET Foundation port, मौजूदा SOAP clients चलते रखने के लिए), <b>gRPC</b> (contract-first, तेज़, internal services के लिए अच्छा; clients को बदलना पड़ता है), या REST/HTTP APIs। WCF <b>clients</b> modern .NET से अब भी <code>System.ServiceModel</code> client packages के ज़रिए use हो सकते हैं। Clients कौन हैं उसके हिसाब से चुनो: external SOAP partners आम तौर पर CoreWCF की तरफ़ धकेलते हैं; अपनी services gRPC या HTTP पर जा सकती हैं।</li>
<li><b>EF6 से EF Core (Days 5 और 6):</b> EF Core rewrite है, patch नहीं। EDMX designer नहीं; lazy loading opt-in है; EF6 के कुछ features का सीधा equivalent नहीं है या अलग तरह से काम करता है (जो features तुम use करते हो उनके लिए Microsoft का EF6 बनाम EF Core comparison देखो)। EF6 खुद modern .NET पर चल सकता है (EF 6.3 और उसके बाद), जिससे <b>दो-step</b> रास्ता मिलता है: पहले app को modern .NET पर ले जाओ, EF Core बाद में।</li>
<li><b>SQL और tracking behaviour जाँचो:</b> वही LINQ अलग SQL बना सकता है; queries compare करो और असली database से test करो।</li>
</ul>
<p><b>CoreWCF कब:</b> मौजूदा SOAP consumers जिन्हें बदल नहीं सकते। <b>कब नहीं:</b> नया service-to-service call, जहाँ gRPC या HTTP simple है (Day 13, Day 16)।</p>`,
        hg: `<p><b>Analogy:</b> ghar shift karna. Zyadatar furniture fit ho jaata hai (controllers, DTOs, LINQ), par kuch cheezon ko nayi fitting chahiye: purana gas connection (WCF server), purana fuse box (EF6 ke edge features) aur lift (purane routing aur model binding behaviours).</p>
<ul>
<li><b>Web API 2 se ASP.NET Core Web API (Day 13):</b> <code>ApiController</code> ki jagah <code>[ApiController]</code> wala <code>ControllerBase</code> (invalid models par automatic 400). <code>IHttpActionResult</code> ki jagah <code>ActionResult&lt;T&gt;</code> / <code>IActionResult</code>. Message handlers ki jagah middleware. Attribute routing similar hai, par route templates aur model binding rules jaancho, kyunki defaults alag hain (jaise default JSON serializer System.Text.Json hai jabki Web API 2 Newtonsoft.Json use karta tha, aur <code>[ApiController]</code> binding sources khud infer karta hai). Dono versions par contract tests chalao.</li>
<li><b>WCF:</b> WCF ka <b>server</b> modern .NET ka hissa nahi hai. Choices: <b>CoreWCF</b> (WCF ki service side ka .NET Foundation port, maujooda SOAP clients chalte rakhne ke liye), <b>gRPC</b> (contract-first, tez, internal services ke liye achha; clients ko badalna padta hai), ya REST/HTTP APIs. WCF <b>clients</b> modern .NET se ab bhi <code>System.ServiceModel</code> client packages ke zariye use ho sakte hain. Clients kaun hain uske hisaab se chuno: external SOAP partners aam taur par CoreWCF ki taraf dhakelte hain; apni services gRPC ya HTTP par ja sakti hain.</li>
<li><b>EF6 se EF Core (Days 5 aur 6):</b> EF Core rewrite hai, patch nahi. EDMX designer nahi; lazy loading opt-in hai; EF6 ke kuch features ka seedha equivalent nahi hai ya alag tarah kaam karta hai (jo features tum use karte ho unke liye Microsoft ka EF6 vs EF Core comparison dekho). EF6 khud modern .NET par chal sakta hai (EF 6.3 aur uske baad), jisse <b>do-step</b> raasta milta hai: pehle app ko modern .NET par le jao, EF Core baad mein.</li>
<li><b>SQL aur tracking behaviour jaancho:</b> wahi LINQ alag SQL bana sakta hai; queries compare karo aur asli database se test karo.</li>
</ul>
<p><b>CoreWCF kab:</b> maujooda SOAP consumers jinhe badal nahi sakte. <b>Kab nahi:</b> naya service-to-service call, jahan gRPC ya HTTP simple hai (Day 13, Day 16).</p>`
      },
      code: [
        {
          lang: "csharp",
          caption: {
            en: "Web API 2 controller (System.Web.Http; display-only) next to its ASP.NET Core version",
            hi: "Web API 2 controller (System.Web.Http; सिर्फ़ दिखाने के लिए) और उसके बग़ल में ASP.NET Core version",
            hg: "Web API 2 controller (System.Web.Http; sirf dikhane ke liye) aur uske bagal mein ASP.NET Core version"
          },
          check: "none",
          src: `// Web API 2 (.NET Framework). Not compilable on modern .NET.
public class OrdersController : ApiController
{
    [HttpGet, Route("api/orders/{id:int}")]
    public IHttpActionResult Get(int id)
    {
        var order = Repo.Find(id);
        if (order == null) return NotFound();
        return Ok(order);
    }
}`
        },
        {
          lang: "csharp",
          caption: {
            en: "ASP.NET Core Web API: ControllerBase, [ApiController], ActionResult&lt;T&gt;",
            hi: "ASP.NET Core Web API: ControllerBase, [ApiController], ActionResult&lt;T&gt; (compile होता है)",
            hg: "ASP.NET Core Web API: ControllerBase, [ApiController], ActionResult&lt;T&gt; (compile hota hai)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSingleton<IOrderRepo, OrderRepo>();
var app = builder.Build();
app.MapControllers();
app.Run();

public sealed record OrderDto(int Id, string Status);

public interface IOrderRepo { OrderDto? Find(int id); }
public sealed class OrderRepo : IOrderRepo
{
    public OrderDto? Find(int id) => id == 1 ? new OrderDto(1, "Open") : null;
}

[ApiController]                       // automatic 400 for invalid models, binding rules for [FromBody] etc.
[Route("api/orders")]
public sealed class OrdersController(IOrderRepo repo) : ControllerBase
{
    [HttpGet("{id:int}")]
    public ActionResult<OrderDto> Get(int id) =>
        repo.Find(id) is { } order ? order : NotFound();
}`
        },
        {
          lang: "csharp",
          caption: {
            en: "CoreWCF: keep an existing SOAP contract alive on modern .NET (service side only; packages CoreWCF.Http and CoreWCF.Primitives)",
            hi: "CoreWCF: मौजूदा SOAP contract को modern .NET पर ज़िंदा रखना (सिर्फ़ service side; packages CoreWCF.Http और CoreWCF.Primitives)",
            hg: "CoreWCF: maujooda SOAP contract ko modern .NET par zinda rakhna (sirf service side; packages CoreWCF.Http aur CoreWCF.Primitives)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          packages: ["CoreWCF.Http@1.*", "CoreWCF.Primitives@1.*"],
          src: `using CoreWCF;
using CoreWCF.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddServiceModelServices();

var app = builder.Build();
app.UseServiceModel(serviceBuilder =>
{
    serviceBuilder.AddService<PriceService>();
    serviceBuilder.AddServiceEndpoint<PriceService, IPriceService>(new BasicHttpBinding(), "/PriceService.svc");
});
app.Run();

[ServiceContract]
public interface IPriceService
{
    [OperationContract]
    decimal GetPrice(string sku);
}

public sealed class PriceService : IPriceService
{
    public decimal GetPrice(string sku) => sku == "TEA-250" ? 120m : 0m;
}`
        }
      ]
    },
    {
      id: "migration-in-practice",
      depth: "detailed",
      title: {
        en: "Migration in practice: multi-targeting, System.Web adapters, YARP strangler fig, assessment",
        hi: "Migration practice में: multi-targeting, System.Web adapters, YARP strangler fig, assessment",
        hg: "Migration practice mein: multi-targeting, System.Web adapters, YARP strangler fig, assessment"
      },
      body: {
        en: `<p><b>Analogy:</b> a strangler fig tree grows around an old tree, takes over branch by branch, and one day the old tree is gone. In software, the <b>new app stands in front</b>; each route that is ready is served by the new app, everything else is forwarded to the old one.</p>
<ul>
<li><b>Step 0 - assess:</b> list projects, target frameworks, NuGet packages without .NET support, <code>System.Web</code> use, Windows-only APIs, WCF, Web Forms pages, EF6 usage, traffic per route, test coverage. Tools (Visual Studio's GitHub Copilot app modernization, analyzers such as the platform-compatibility analyzer) help, but a human still ranks risk.</li>
<li><b>Step 1 - tidy:</b> update packages, move to SDK-style project files and <code>PackageReference</code>, fix warnings. Microsoft's guide asks for this before upgrading libraries.</li>
<li><b>Step 2 - libraries:</b> move shared class libraries to <b>.NET Standard 2.0</b> if possible, otherwise <b>multi-target</b> (for example <code>net48;net10.0</code>). Upgrade in <b>post-order</b>: leaf libraries first, the web app last. Use <code>#if NETFRAMEWORK</code> only for the small differences.</li>
<li><b>Step 3 - proxy:</b> create the ASP.NET Core app, forward everything to the old app with <b>YARP</b> as a catch-all with the lowest priority, then add real routes in the new app. Add the System.Web adapters to both apps (separate packages for the Framework side and the Core side) to share session and authentication; shared libraries use <code>Microsoft.AspNetCore.SystemWebAdapters</code> to keep using <code>HttpContext</code>.</li>
<li><b>Windows-only APIs:</b> the <b>Windows Compatibility Pack</b> (<code>Microsoft.Windows.Compatibility</code>) brings many (registry, WMI, event log) to modern .NET, but only on Windows. If you want Linux, find alternatives or guard with platform checks.</li>
<li><b>Done means:</b> the old app receives no traffic and can be switched off. Measure with the proxy's routing table.</li>
</ul>
<p><b>When to use the proxy approach:</b> big or live apps. <b>When not:</b> a small app with few dependencies may be faster to migrate in place; the extra proxy and adapters are overhead you do not need.</p>`,
        hi: `<p><b>Analogy:</b> strangler fig पेड़ पुराने पेड़ के चारों ओर बढ़ता है, डाली-डाली कब्ज़ा करता है, और एक दिन पुराना पेड़ ख़त्म हो जाता है। Software में <b>नया app आगे खड़ा होता है</b>; जो route तैयार है उसे नया app serve करता है, बाकी सब पुराने को forward होता है।</p>
<ul>
<li><b>Step 0 - assess:</b> projects, target frameworks, बिना .NET support वाले NuGet packages, <code>System.Web</code> use, Windows-only APIs, WCF, Web Forms pages, EF6 use, route-wise traffic और test coverage की list बनाओ। Tools (Visual Studio का GitHub Copilot app modernization, platform-compatibility analyzer जैसे analyzers) मदद करते हैं, पर risk को rank इंसान ही करता है।</li>
<li><b>Step 1 - tidy:</b> packages update करो, SDK-style project files और <code>PackageReference</code> पर जाओ, warnings ठीक करो। Microsoft की guide libraries upgrade करने से पहले यह माँगती है।</li>
<li><b>Step 2 - libraries:</b> shared class libraries को हो सके तो <b>.NET Standard 2.0</b> पर ले जाओ, वरना <b>multi-target</b> करो (जैसे <code>net48;net10.0</code>)। <b>Post-order</b> में upgrade करो: पहले leaf libraries, web app आख़िर में। <code>#if NETFRAMEWORK</code> सिर्फ़ छोटे फ़र्क़ों के लिए।</li>
<li><b>Step 3 - proxy:</b> ASP.NET Core app बनाओ, <b>YARP</b> से सब कुछ सबसे कम priority वाले catch-all से पुराने app को forward करो, फिर नए app में असली routes जोड़ो। Session और authentication share करने के लिए दोनों apps में System.Web adapters जोड़ो (Framework side और Core side के अलग packages); shared libraries <code>HttpContext</code> use करते रहने के लिए <code>Microsoft.AspNetCore.SystemWebAdapters</code> use करती हैं।</li>
<li><b>Windows-only APIs:</b> <b>Windows Compatibility Pack</b> (<code>Microsoft.Windows.Compatibility</code>) कई APIs (registry, WMI, event log) modern .NET में लाता है, पर सिर्फ़ Windows पर। Linux चाहिए तो विकल्प खोजो या platform checks लगाओ।</li>
<li><b>Done का मतलब:</b> पुराने app पर कोई traffic नहीं आता और उसे बंद किया जा सकता है। Proxy की routing table से नापो।</li>
</ul>
<p><b>Proxy approach कब:</b> बड़े या live apps। <b>कब नहीं:</b> कम dependencies वाला छोटा app in place migrate करना तेज़ हो सकता है; अलग proxy और adapters ऐसा overhead है जिसकी ज़रूरत नहीं।</p>`,
        hg: `<p><b>Analogy:</b> strangler fig ped purane ped ke chaaron or badhta hai, daali-daali kabza karta hai, aur ek din purana ped khatam ho jaata hai. Software mein <b>naya app aage khada hota hai</b>; jo route taiyaar hai use naya app serve karta hai, baaki sab purane ko forward hota hai.</p>
<ul>
<li><b>Step 0 - assess:</b> projects, target frameworks, bina .NET support wale NuGet packages, <code>System.Web</code> use, Windows-only APIs, WCF, Web Forms pages, EF6 use, route-wise traffic aur test coverage ki list banao. Tools (Visual Studio ka GitHub Copilot app modernization, platform-compatibility analyzer jaise analyzers) madad karte hain, par risk ko rank insaan hi karta hai.</li>
<li><b>Step 1 - tidy:</b> packages update karo, SDK-style project files aur <code>PackageReference</code> par jao, warnings theek karo. Microsoft ki guide libraries upgrade karne se pehle yeh maangti hai.</li>
<li><b>Step 2 - libraries:</b> shared class libraries ko ho sake to <b>.NET Standard 2.0</b> par le jao, warna <b>multi-target</b> karo (jaise <code>net48;net10.0</code>). <b>Post-order</b> mein upgrade karo: pehle leaf libraries, web app aakhir mein. <code>#if NETFRAMEWORK</code> sirf chhote farqon ke liye.</li>
<li><b>Step 3 - proxy:</b> ASP.NET Core app banao, <b>YARP</b> se sab kuch sabse kam priority wale catch-all se purane app ko forward karo, phir naye app mein asli routes jodo. Session aur authentication share karne ke liye dono apps mein System.Web adapters jodo (Framework side aur Core side ke alag packages); shared libraries <code>HttpContext</code> use karte rehne ke liye <code>Microsoft.AspNetCore.SystemWebAdapters</code> use karti hain.</li>
<li><b>Windows-only APIs:</b> <b>Windows Compatibility Pack</b> (<code>Microsoft.Windows.Compatibility</code>) kai APIs (registry, WMI, event log) modern .NET mein laata hai, par sirf Windows par. Linux chahiye to vikalp khojo ya platform checks lagao.</li>
<li><b>Done ka matlab:</b> purane app par koi traffic nahi aata aur use band kiya ja sakta hai. Proxy ki routing table se naapo.</li>
</ul>
<p><b>Proxy approach kab:</b> bade ya live apps. <b>Kab nahi:</b> kam dependencies wala chhota app in place migrate karna tez ho sakta hai; alag proxy aur adapters aisa overhead hain jiski zaroorat nahi.</p>`
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
          src: `<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <!-- Option A (simplest): <TargetFramework>netstandard2.0</TargetFramework> -->
    <!-- Option B: multi-target when you need newer APIs on the new side -->
    <TargetFrameworks>net48;net10.0</TargetFrameworks>
    <LangVersion>latest</LangVersion>
  </PropertyGroup>

  <ItemGroup Condition="'$(TargetFramework)' == 'net48'">
    <!-- no System.Web reference: use the adapters so HttpContext code still compiles -->
    <PackageReference Include="Microsoft.AspNetCore.SystemWebAdapters" Version="2.*" />
  </ItemGroup>
  <ItemGroup Condition="'$(TargetFramework)' != 'net48'">
    <FrameworkReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="Microsoft.AspNetCore.SystemWebAdapters" Version="2.*" />
  </ItemGroup>
</Project>`
        },
        {
          lang: "csharp",
          caption: {
            en: "ASP.NET Core front app: YARP catch-all to the old app, System.Web adapters for shared session (packages Yarp.ReverseProxy and Microsoft.AspNetCore.SystemWebAdapters.CoreServices; compile-only)",
            hi: "ASP.NET Core front app: पुराने app को YARP catch-all, shared session के लिए System.Web adapters (packages Yarp.ReverseProxy और Microsoft.AspNetCore.SystemWebAdapters.CoreServices; सिर्फ़ compile)",
            hg: "ASP.NET Core front app: purane app ko YARP catch-all, shared session ke liye System.Web adapters (packages Yarp.ReverseProxy aur Microsoft.AspNetCore.SystemWebAdapters.CoreServices; sirf compile)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          packages: ["Yarp.ReverseProxy@2.*", "Microsoft.AspNetCore.SystemWebAdapters.CoreServices@2.*"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SystemWebAdapters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddReverseProxy();                         // YARP forwarder services

builder.Services.AddSystemWebAdapters()
    .AddRemoteAppClient(options =>
    {
        options.RemoteAppUrl = new Uri(builder.Configuration["RemoteAppUri"] ?? "https://legacy.internal");
        options.ApiKey = builder.Configuration["RemoteAppApiKey"] ?? "";   // a GUID string from user-secrets / Key Vault
    });
// Remote session and remote authentication are added with further extension methods when you need them.

var app = builder.Build();

app.UseSystemWebAdapters();                                 // after routing and auth in a real app

// Migrated routes are mapped in this app. Example:
app.MapGet("/api/prices/{sku}", (string sku) => Results.Ok(new { sku, price = 120 }));

// Everything else falls back to the old app. Lowest priority = tried last.
var legacyUrl = app.Services.GetRequiredService<IOptions<RemoteAppClientOptions>>().Value.RemoteAppUrl.OriginalString;
app.MapForwarder("/{**catch-all}", legacyUrl)
   .WithOrder(int.MaxValue)
   .ShortCircuit();

app.Run();`
        }
      ]
    },
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
        en: `<ul>
<li>Typical use: <code>PreInit</code> for dynamic controls and master pages, <code>Init</code> to set up controls, <code>Load</code> for data (guarded by <code>!IsPostBack</code>), <code>PreRender</code> for final changes, <code>Unload</code> for cleanup.</li>
<li>Classic bug: rebinding data in <code>Page_Load</code> on every request wipes the user's input before the button's click event runs.</li>
<li>Follow-up: "Where do you add controls dynamically?" In <code>PreInit</code> or <code>Init</code>, and re-create them on every request so their ViewState and events line up.</li>
</ul>`,
        hi: `<ul>
<li>आम use: <code>PreInit</code> dynamic controls और master pages के लिए, <code>Init</code> controls set up करने के लिए, <code>Load</code> data के लिए (<code>!IsPostBack</code> से guarded), <code>PreRender</code> आख़िरी बदलावों के लिए, <code>Unload</code> cleanup के लिए।</li>
<li>Classic bug: हर request पर <code>Page_Load</code> में data rebind करने से button का click event चलने से पहले user का input मिट जाता है।</li>
<li>Follow-up: "Dynamic controls कहाँ add करते हो?" <code>PreInit</code> या <code>Init</code> में, और हर request पर दोबारा बनाओ ताकि उनका ViewState और events ठीक बैठें।</li>
</ul>`,
        hg: `<ul>
<li>Aam use: <code>PreInit</code> dynamic controls aur master pages ke liye, <code>Init</code> controls set up karne ke liye, <code>Load</code> data ke liye (<code>!IsPostBack</code> se guarded), <code>PreRender</code> aakhri badlaavon ke liye, <code>Unload</code> cleanup ke liye.</li>
<li>Classic bug: har request par <code>Page_Load</code> mein data rebind karne se button ka click event chalne se pehle user ka input mit jaata hai.</li>
<li>Follow-up: "Dynamic controls kahan add karte ho?" <code>PreInit</code> ya <code>Init</code> mein, aur har request par dobara banao taaki unka ViewState aur events theek baithein.</li>
</ul>`
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
        en: `<ul>
<li>ViewState grows with the page and travels in both directions on every postback (Puzzle 2). It is encoded and can be protected with a MAC, but it is not a place for secrets.</li>
<li>Replacement: handlers load fresh data per request (Razor Pages, controllers, minimal APIs). For stateful UI, Blazor components keep their own state.</li>
<li>Follow-up: "How would you migrate a ViewState-heavy page?" Move the state to a model or a cache, rebuild the page as a Razor Page or Blazor component, and leave the old page behind the proxy until then.</li>
</ul>`,
        hi: `<ul>
<li>ViewState page के साथ बढ़ता है और हर postback में दोनों दिशाओं में जाता है (Puzzle 2)। वह encoded होता है और MAC से protected हो सकता है, पर secrets रखने की जगह नहीं है।</li>
<li>Replacement: handlers हर request पर ताज़ा data load करते हैं (Razor Pages, controllers, minimal APIs)। Stateful UI के लिए Blazor components अपनी state रखते हैं।</li>
<li>Follow-up: "ViewState-heavy page कैसे migrate करोगे?" State को model या cache में ले जाओ, page को Razor Page या Blazor component में दोबारा बनाओ, और तब तक पुराने page को proxy के पीछे रहने दो।</li>
</ul>`,
        hg: `<ul>
<li>ViewState page ke saath badhta hai aur har postback mein dono dishaon mein jaata hai (Puzzle 2). Woh encoded hota hai aur MAC se protected ho sakta hai, par secrets rakhne ki jagah nahi hai.</li>
<li>Replacement: handlers har request par taaza data load karte hain (Razor Pages, controllers, minimal APIs). Stateful UI ke liye Blazor components apni state rakhte hain.</li>
<li>Follow-up: "ViewState-heavy page kaise migrate karoge?" State ko model ya cache mein le jao, page ko Razor Page ya Blazor component mein dobara banao, aur tab tak purane page ko proxy ke peechhe rehne do.</li>
</ul>`
      }
    },
    {
      id: "mvc5-lifecycle",
      depth: "short",
      q: "Walk me through the ASP.NET MVC 5 request lifecycle.",
      answer: "Routing picks the route, MvcHandler runs, the controller factory creates the controller, the action invoker runs filters and the action, then the result executes and the view engine renders the view.",
      meaning: {
        hi: "Routing route चुनती है, MvcHandler चलता है, controller factory controller बनाती है, action invoker filters और action चलाता है, फिर result execute होता है और view engine view render करता है।",
        hg: "Routing route chunti hai, MvcHandler chalta hai, controller factory controller banati hai, action invoker filters aur action chalata hai, phir result execute hota hai aur view engine view render karta hai."
      },
      explain: {
        en: `<ul>
<li>Filter order in MVC 5: authentication, authorization, action filters (before and after the action), result filters, with exception filters catching errors.</li>
<li>In ASP.NET Core the same ideas run as an <b>endpoint</b> after the middleware before it; the controller comes from DI and filters can be async and injected (Day 12).</li>
<li>Follow-up: "Where would you put cross-cutting logging?" Middleware if it must see every request; an action filter if it needs action arguments or the model state.</li>
</ul>`,
        hi: `<ul>
<li>MVC 5 में filter order: authentication, authorization, action filters (action से पहले और बाद), result filters, और exception filters errors पकड़ते हैं।</li>
<li>ASP.NET Core में वही ideas उससे पहले के middleware के बाद एक <b>endpoint</b> की तरह चलते हैं; controller DI से आता है और filters async और injected हो सकते हैं (Day 12)।</li>
<li>Follow-up: "Cross-cutting logging कहाँ रखोगे?" हर request देखनी हो तो middleware में; action arguments या model state चाहिए तो action filter में।</li>
</ul>`,
        hg: `<ul>
<li>MVC 5 mein filter order: authentication, authorization, action filters (action se pehle aur baad), result filters, aur exception filters errors pakadte hain.</li>
<li>ASP.NET Core mein wahi ideas usse pehle ke middleware ke baad ek <b>endpoint</b> ki tarah chalte hain; controller DI se aata hai aur filters async aur injected ho sakte hain (Day 12).</li>
<li>Follow-up: "Cross-cutting logging kahan rakhoge?" Har request dekhni ho to middleware mein; action arguments ya model state chahiye to action filter mein.</li>
</ul>`
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
        en: `<ul>
<li>Port by intent: what did the module do (headers, auth, logging, rewrite)? Then check if Core already has a built-in for it.</li>
<li>Ordering needs care because modules were tied to named events (Puzzle 3) and middleware order is the order in <code>Program.cs</code> (Day 12).</li>
<li>Follow-up: "A module is too risky to rewrite now." The System.Web adapters can host <code>IHttpModule</code> and a <code>Global.asax</code>-style <code>HttpApplication</code> inside ASP.NET Core as a temporary bridge.</li>
</ul>`,
        hi: `<ul>
<li>Intent के हिसाब से port करो: module करता क्या था (headers, auth, logging, rewrite)? फिर देखो क्या Core में उसका built-in है।</li>
<li>Ordering में सावधानी चाहिए क्योंकि modules named events से बँधे थे (Puzzle 3) और middleware का order <code>Program.cs</code> का order है (Day 12)।</li>
<li>Follow-up: "Module अभी rewrite करने के लिए बहुत risky है।" System.Web adapters <code>IHttpModule</code> और <code>Global.asax</code>-style <code>HttpApplication</code> को ASP.NET Core के अंदर temporary bridge की तरह host कर सकते हैं।</li>
</ul>`,
        hg: `<ul>
<li>Intent ke hisaab se port karo: module karta kya tha (headers, auth, logging, rewrite)? Phir dekho kya Core mein uska built-in hai.</li>
<li>Ordering mein saavdhani chahiye kyunki modules named events se bandhe the (Puzzle 3) aur middleware ka order <code>Program.cs</code> ka order hai (Day 12).</li>
<li>Follow-up: "Module abhi rewrite karne ke liye bahut risky hai." System.Web adapters <code>IHttpModule</code> aur <code>Global.asax</code>-style <code>HttpApplication</code> ko ASP.NET Core ke andar temporary bridge ki tarah host kar sakte hain.</li>
</ul>`
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
        en: `<ul>
<li>Source: Microsoft's lifecycle FAQ says .NET Framework 4.x is a component of Windows and follows the lifecycle of the Windows OS it is installed on. Check the OS you actually run, and re-read the page before you quote dates.</li>
<li>.NET 10 (released November 2025) is LTS with support until 14 November 2028, per Microsoft's .NET support policy page. Older versions drop out: .NET Framework 4.6.2 is listed as ending in January 2027.</li>
<li>Reasons to move: Linux and containers, performance, cloud cost, new language and library features, hiring. "It is out of support" is usually the wrong argument for 4.8.x, so do not use it with the business.</li>
</ul>`,
        hi: `<ul>
<li>Source: Microsoft के lifecycle FAQ के अनुसार .NET Framework 4.x Windows का component है और जिस Windows OS पर install है उसके lifecycle को follow करता है। जो OS तुम असल में चलाते हो वह देखो, और dates बोलने से पहले page दोबारा पढ़ो।</li>
<li>.NET 10 (नवंबर 2025 में release) LTS है और Microsoft की .NET support policy page के अनुसार 14 नवंबर 2028 तक supported है। पुराने versions बाहर होते जाते हैं: .NET Framework 4.6.2 जनवरी 2027 में ख़त्म होने वाला listed है।</li>
<li>Move करने के कारण: Linux और containers, performance, cloud cost, नए language और library features, hiring। 4.8.x के लिए "यह out of support है" आम तौर पर ग़लत argument है, इसलिए business के सामने इसे use मत करो।</li>
</ul>`,
        hg: `<ul>
<li>Source: Microsoft ke lifecycle FAQ ke anusaar .NET Framework 4.x Windows ka component hai aur jis Windows OS par install hai uske lifecycle ko follow karta hai. Jo OS tum asal mein chalate ho woh dekho, aur dates bolne se pehle page dobara padho.</li>
<li>.NET 10 (November 2025 mein release) LTS hai aur Microsoft ki .NET support policy page ke anusaar 14 November 2028 tak supported hai. Purane versions baahar hote jaate hain: .NET Framework 4.6.2 January 2027 mein khatam hone wala listed hai.</li>
<li>Move karne ke kaaran: Linux aur containers, performance, cloud cost, naye language aur library features, hiring. 4.8.x ke liye "yeh out of support hai" aam taur par galat argument hai, isliye business ke saamne ise use mat karo.</li>
</ul>`
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
        en: `<ul>
<li>Microsoft's migration guide calls incremental migration an implementation of the Strangler Fig pattern and prefers it for larger apps and apps that must stay in production.</li>
<li>Big-bang risks: a long freeze of new features, a late and scary cut-over, and a rewrite that misses hidden behaviour. Incremental trades that for temporary complexity (two apps, a proxy, shared session and auth).</li>
<li>Follow-up: "What if the app is small?" Then an in-place upgrade is cheaper; do not build a proxy you will throw away in two weeks.</li>
</ul>`,
        hi: `<ul>
<li>Microsoft की migration guide incremental migration को Strangler Fig pattern का implementation कहती है और बड़े apps और production में रहने वाले apps के लिए उसे पसंद करती है।</li>
<li>Big-bang के risks: नए features पर लंबा freeze, देर से आने वाला डरावना cut-over, और ऐसा rewrite जो छुपा हुआ behaviour छोड़ दे। Incremental यह अस्थायी complexity से बदलता है (दो apps, एक proxy, shared session और auth)।</li>
<li>Follow-up: "अगर app छोटा है?" तो in-place upgrade सस्ता है; ऐसा proxy मत बनाओ जिसे दो हफ़्ते में फेंकना है।</li>
</ul>`,
        hg: `<ul>
<li>Microsoft ki migration guide incremental migration ko Strangler Fig pattern ka implementation kehti hai aur bade apps aur production mein rehne wale apps ke liye use pasand karti hai.</li>
<li>Big-bang ke risks: naye features par lamba freeze, der se aane wala daravna cut-over, aur aisa rewrite jo chhupa hua behaviour chhod de. Incremental yeh asthaayi complexity se badalta hai (do apps, ek proxy, shared session aur auth).</li>
<li>Follow-up: "Agar app chhota hai?" To in-place upgrade sasta hai; aisa proxy mat banao jise do hafte mein phenkna hai.</li>
</ul>`
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
        en: `<ul>
<li><code>IHttpContextAccessor</code> must be registered with <code>AddHttpContextAccessor</code>, uses <code>AsyncLocal</code>, and returns <code>null</code> outside a request (Puzzle 6).</li>
<li>Hidden dependency on the web layer makes classes harder to unit test and to reuse in workers (Day 11, DI).</li>
<li>Follow-up: "A shared library still calls HttpContext.Current." During migration, the System.Web adapters let shared code keep compiling and running; plan to remove the dependency later.</li>
</ul>`,
        hi: `<ul>
<li><code>IHttpContextAccessor</code> को <code>AddHttpContextAccessor</code> से register करना पड़ता है, वह <code>AsyncLocal</code> use करता है, और request के बाहर <code>null</code> देता है (Puzzle 6)।</li>
<li>Web layer पर छुपी dependency classes को unit test करना और workers में reuse करना मुश्किल बनाती है (Day 11, DI)।</li>
<li>Follow-up: "Shared library अब भी HttpContext.Current call करती है।" Migration के दौरान System.Web adapters shared code को compile और चलते रहने देते हैं; dependency बाद में हटाने का plan रखो।</li>
</ul>`,
        hg: `<ul>
<li><code>IHttpContextAccessor</code> ko <code>AddHttpContextAccessor</code> se register karna padta hai, woh <code>AsyncLocal</code> use karta hai, aur request ke baahar <code>null</code> deta hai (Puzzle 6).</li>
<li>Web layer par chhupi dependency classes ko unit test karna aur workers mein reuse karna mushkil banati hai (Day 11, DI).</li>
<li>Follow-up: "Shared library ab bhi HttpContext.Current call karti hai." Migration ke dauraan System.Web adapters shared code ko compile aur chalte rehne dete hain; dependency baad mein hatane ka plan rakho.</li>
</ul>`
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
        en: `<ul>
<li>Order: assessment, tidy-up (packages, SDK-style projects), libraries in post-order, then proxy and route-by-route migration, and finally switching off the old app.</li>
<li>Tooling: Microsoft now points to GitHub Copilot app modernization (the .NET Upgrade Assistant is officially deprecated). Use it to assess and automate steps; review its output like any other pull request (Day 21).</li>
<li>Follow-up: "How do you show progress?" Percentage of traffic and number of routes on the new app, defect rate, and deploy frequency (Puzzle 5).</li>
</ul>`,
        hi: `<ul>
<li>Order: assessment, tidy-up (packages, SDK-style projects), libraries post-order में, फिर proxy और route-by-route migration, और आख़िर में पुराने app को बंद करना।</li>
<li>Tooling: Microsoft अब GitHub Copilot app modernization की तरफ़ इशारा करता है (.NET Upgrade Assistant officially deprecated है)। उसे assess करने और steps automate करने के लिए use करो; उसका output किसी भी दूसरे pull request की तरह review करो (Day 21)।</li>
<li>Follow-up: "Progress कैसे दिखाते हो?" नए app पर traffic का percentage और routes की गिनती, defect rate, और deploy frequency (Puzzle 5)।</li>
</ul>`,
        hg: `<ul>
<li>Order: assessment, tidy-up (packages, SDK-style projects), libraries post-order mein, phir proxy aur route-by-route migration, aur aakhir mein purane app ko band karna.</li>
<li>Tooling: Microsoft ab GitHub Copilot app modernization ki taraf ishara karta hai (.NET Upgrade Assistant officially deprecated hai). Use assess karne aur steps automate karne ke liye use karo; uska output kisi bhi dusre pull request ki tarah review karo (Day 21).</li>
<li>Follow-up: "Progress kaise dikhate ho?" Naye app par traffic ka percentage aur routes ki ginti, defect rate, aur deploy frequency (Puzzle 5).</li>
</ul>`
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
        en: `<ul>
<li>Config transforms (<code>web.Release.config</code>) become <code>appsettings.{Environment}.json</code> or environment variables set by the pipeline (Day 21). Providers are layered and the last one wins (Day 12).</li>
<li>Secrets: user-secrets in development, Key Vault or a managed identity in Azure (Day 20), not in source control.</li>
<li>Follow-up: "Both apps need the same setting during migration." Keep one source of truth (a shared store or environment variable) and read it from both, instead of copying values.</li>
</ul>`,
        hi: `<ul>
<li>Config transforms (<code>web.Release.config</code>) अब <code>appsettings.{Environment}.json</code> या pipeline द्वारा set किए environment variables बनते हैं (Day 21)। Providers layered होते हैं और आख़िरी वाला जीतता है (Day 12)।</li>
<li>Secrets: development में user-secrets, Azure में Key Vault या managed identity (Day 20), source control में नहीं।</li>
<li>Follow-up: "Migration के दौरान दोनों apps को वही setting चाहिए।" सच का एक ही source रखो (shared store या environment variable) और दोनों से पढ़ो, values copy मत करो।</li>
</ul>`,
        hg: `<ul>
<li>Config transforms (<code>web.Release.config</code>) ab <code>appsettings.{Environment}.json</code> ya pipeline dwara set kiye environment variables bante hain (Day 21). Providers layered hote hain aur aakhri wala jeetta hai (Day 12).</li>
<li>Secrets: development mein user-secrets, Azure mein Key Vault ya managed identity (Day 20), source control mein nahi.</li>
<li>Follow-up: "Migration ke dauraan dono apps ko wahi setting chahiye." Sach ka ek hi source rakho (shared store ya environment variable) aur dono se padho, values copy mat karo.</li>
</ul>`
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
        en: `<ul>
<li>Old default: in-process session. It dies on app restart and does not work across multiple servers, which already hurts scaling before any migration.</li>
<li>Microsoft's docs describe sharing session state between the old and the new app through the adapters (the remote app owns it for now). Agree the list of shared keys and their serialization early.</li>
<li>Follow-up: "Is session a good place for the shopping cart?" Usually a database or distributed cache keyed by user or cart id is safer, because it survives restarts and scale-out.</li>
</ul>`,
        hi: `<ul>
<li>पुराना default: in-process session। वह app restart पर मर जाता है और कई servers में काम नहीं करता, जो migration से पहले ही scaling को चोट पहुँचाता है।</li>
<li>Microsoft के docs adapters के ज़रिए पुराने और नए app के बीच session state share करना बताते हैं (अभी remote app उसका मालिक रहता है)। Shared keys की list और उनकी serialization पहले तय करो।</li>
<li>Follow-up: "क्या shopping cart के लिए session अच्छी जगह है?" आम तौर पर user या cart id से keyed database या distributed cache ज़्यादा safe है, क्योंकि वह restarts और scale-out झेलता है।</li>
</ul>`,
        hg: `<ul>
<li>Purana default: in-process session. Woh app restart par mar jaata hai aur kai servers mein kaam nahi karta, jo migration se pehle hi scaling ko chot pahunchata hai.</li>
<li>Microsoft ke docs adapters ke zariye purane aur naye app ke beech session state share karna batate hain (abhi remote app uska maalik rehta hai). Shared keys ki list aur unki serialization pehle tay karo.</li>
<li>Follow-up: "Kya shopping cart ke liye session achhi jagah hai?" Aam taur par user ya cart id se keyed database ya distributed cache zyada safe hai, kyunki woh restarts aur scale-out jhelta hai.</li>
</ul>`
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
        en: `<ul>
<li>Unity/Autofac setup is replaced by the built-in container (Day 11); <code>HttpConfiguration</code> and <code>WebApiConfig</code> become <code>Program.cs</code> (Day 13).</li>
<li>Typical surprises: default JSON serializer (System.Text.Json versus Newtonsoft.Json in Web API 2), date and enum formatting, validation responses (ProblemDetails with <code>[ApiController]</code>), and routing templates.</li>
<li>Follow-up: "How do you make sure the API still behaves the same?" Capture existing responses as contract or characterization tests and run them against both apps behind the proxy.</li>
</ul>`,
        hi: `<ul>
<li>Unity/Autofac setup की जगह built-in container (Day 11); <code>HttpConfiguration</code> और <code>WebApiConfig</code> की जगह <code>Program.cs</code> (Day 13)।</li>
<li>आम surprises: default JSON serializer (System.Text.Json बनाम Web API 2 में Newtonsoft.Json), date और enum formatting, validation responses (<code>[ApiController]</code> के साथ ProblemDetails), और routing templates।</li>
<li>Follow-up: "API पहले जैसा ही behave करे यह कैसे पक्का करते हो?" मौजूदा responses को contract या characterization tests में capture करो और proxy के पीछे दोनों apps पर चलाओ।</li>
</ul>`,
        hg: `<ul>
<li>Unity/Autofac setup ki jagah built-in container (Day 11); <code>HttpConfiguration</code> aur <code>WebApiConfig</code> ki jagah <code>Program.cs</code> (Day 13).</li>
<li>Aam surprises: default JSON serializer (System.Text.Json vs Web API 2 mein Newtonsoft.Json), date aur enum formatting, validation responses (<code>[ApiController]</code> ke saath ProblemDetails), aur routing templates.</li>
<li>Follow-up: "API pehle jaisa hi behave kare yeh kaise pakka karte ho?" Maujooda responses ko contract ya characterization tests mein capture karo aur proxy ke peechhe dono apps par chalao.</li>
</ul>`
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
        en: `<ul>
<li>CoreWCF is a .NET Foundation project that ports the <b>service side</b> of WCF. It supports common bindings through packages like <code>CoreWCF.Http</code> and <code>CoreWCF.NetTcp</code>, but check that the features you use (security modes, transports) are supported before you commit.</li>
<li>gRPC (Day 13, Day 16) fits internal service-to-service calls with a <code>.proto</code> contract, but external SOAP partners cannot call it without a gateway or change.</li>
<li>Follow-up: "Who consumes the service?" That answer decides the choice. Also remember WCF <em>client</em> code can still be used on modern .NET through the <code>System.ServiceModel</code> client packages.</li>
</ul>`,
        hi: `<ul>
<li>CoreWCF .NET Foundation का project है जो WCF की <b>service side</b> को port करता है। वह <code>CoreWCF.Http</code> और <code>CoreWCF.NetTcp</code> जैसे packages से common bindings support करता है, पर commit करने से पहले जाँचो कि तुम जो features use करते हो (security modes, transports) वे supported हैं।</li>
<li>gRPC (Day 13, Day 16) <code>.proto</code> contract वाले internal service-to-service calls के लिए fit है, पर external SOAP partners बिना gateway या बदलाव के उसे call नहीं कर सकते।</li>
<li>Follow-up: "Service को कौन use करता है?" इसी जवाब से choice तय होती है। यह भी याद रखो कि WCF <em>client</em> code modern .NET पर अब भी <code>System.ServiceModel</code> client packages से use हो सकता है।</li>
</ul>`,
        hg: `<ul>
<li>CoreWCF .NET Foundation ka project hai jo WCF ki <b>service side</b> ko port karta hai. Woh <code>CoreWCF.Http</code> aur <code>CoreWCF.NetTcp</code> jaise packages se common bindings support karta hai, par commit karne se pehle jaancho ki tum jo features use karte ho (security modes, transports) woh supported hain.</li>
<li>gRPC (Day 13, Day 16) <code>.proto</code> contract wale internal service-to-service calls ke liye fit hai, par external SOAP partners bina gateway ya badlaav ke use call nahi kar sakte.</li>
<li>Follow-up: "Service ko kaun use karta hai?" Isi jawab se choice tay hoti hai. Yeh bhi yaad rakho ki WCF <em>client</em> code modern .NET par ab bhi <code>System.ServiceModel</code> client packages se use ho sakta hai.</li>
</ul>`
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
        en: `<ul>
<li>Two-step option: EF 6.3 or later runs on .NET Core 3.0 and later, so you can move the app first and replace EF6 later, one bounded context at a time (Days 5 and 6).</li>
<li>Check: lazy loading proxies, migrations (EF6 migrations do not convert automatically), custom conventions, stored procedure mappings, and anything using <code>ObjectContext</code> or EDMX.</li>
<li>Follow-up: "How do you prove the queries are equivalent?" Log or print the SQL for key queries, compare row counts and results in a test database, and run performance checks (Day 6, Day 18).</li>
</ul>`,
        hi: `<ul>
<li>दो-step option: EF 6.3 या उसके बाद .NET Core 3.0 और उसके बाद पर चलता है, इसलिए पहले app को move कर सकते हो और EF6 बाद में, एक bounded context एक बार में बदल सकते हो (Days 5 और 6)।</li>
<li>जाँचो: lazy loading proxies, migrations (EF6 migrations अपने आप convert नहीं होते), custom conventions, stored procedure mappings, और <code>ObjectContext</code> या EDMX use करने वाली हर चीज़।</li>
<li>Follow-up: "Queries equivalent हैं यह कैसे साबित करते हो?" Key queries का SQL log या print करो, test database में row counts और results compare करो, और performance checks चलाओ (Day 6, Day 18)।</li>
</ul>`,
        hg: `<ul>
<li>Do-step option: EF 6.3 ya uske baad .NET Core 3.0 aur uske baad par chalta hai, isliye pehle app ko move kar sakte ho aur EF6 baad mein, ek bounded context ek baar mein badal sakte ho (Days 5 aur 6).</li>
<li>Jaancho: lazy loading proxies, migrations (EF6 migrations apne aap convert nahi hote), custom conventions, stored procedure mappings, aur <code>ObjectContext</code> ya EDMX use karne wali har cheez.</li>
<li>Follow-up: "Queries equivalent hain yeh kaise saabit karte ho?" Key queries ka SQL log ya print karo, test database mein row counts aur results compare karo, aur performance checks chalao (Day 6, Day 18).</li>
</ul>`
      }
    },
    {
      id: "upgrade-assistant-status",
      depth: "detailed",
      q: "What tools would you use to migrate, and what is the status of .NET Upgrade Assistant?",
      answer: "Microsoft's docs say .NET Upgrade Assistant is officially deprecated and point to GitHub Copilot app modernization. I would use that to assess and automate steps, with analyzers and human review.",
      meaning: {
        hi: "Microsoft के docs कहते हैं .NET Upgrade Assistant officially deprecated है और GitHub Copilot app modernization की तरफ़ इशारा करते हैं। मैं उसे assess करने और steps automate करने में use करूँगा, analyzers और human review के साथ।",
        hg: "Microsoft ke docs kehte hain .NET Upgrade Assistant officially deprecated hai aur GitHub Copilot app modernization ki taraf ishara karte hain. Main use assess karne aur steps automate karne mein use karunga, analyzers aur human review ke saath."
      },
      explain: {
        en: `<ul>
<li>Status wording comes from Microsoft Learn (the Upgrade Assistant overview page, updated in 2026). Tool names and extensions change quickly, so say "as of the current docs" and re-check before an interview or a project plan.</li>
<li>Other useful tools: <code>dotnet</code> analyzers (platform-compatibility analyzer, API compatibility), NuGet audit, test suites, and your pipeline (Day 21).</li>
<li>Follow-up: "Would you let an AI agent migrate production code?" It can speed up mechanical steps and produce a plan, but you keep tests, code review, and small commits you can roll back (Day 27 covers AI use).</li>
</ul>`,
        hi: `<ul>
<li>Status की wording Microsoft Learn से है (Upgrade Assistant overview page, 2026 में updated)। Tool names और extensions जल्दी बदलते हैं, इसलिए "current docs के अनुसार" कहो और interview या project plan से पहले दोबारा जाँचो।</li>
<li>दूसरे काम के tools: <code>dotnet</code> analyzers (platform-compatibility analyzer, API compatibility), NuGet audit, test suites, और तुम्हारी pipeline (Day 21)।</li>
<li>Follow-up: "क्या AI agent को production code migrate करने दोगे?" वह mechanical steps तेज़ कर सकता है और plan बना सकता है, पर tests, code review और छोटे commits जिन्हें rollback किया जा सके, तुम्हारे पास रहते हैं (AI use Day 27 में है)।</li>
</ul>`,
        hg: `<ul>
<li>Status ki wording Microsoft Learn se hai (Upgrade Assistant overview page, 2026 mein updated). Tool names aur extensions jaldi badalte hain, isliye "current docs ke anusaar" kaho aur interview ya project plan se pehle dobara jaancho.</li>
<li>Dusre kaam ke tools: <code>dotnet</code> analyzers (platform-compatibility analyzer, API compatibility), NuGet audit, test suites, aur tumhari pipeline (Day 21).</li>
<li>Follow-up: "Kya AI agent ko production code migrate karne doge?" Woh mechanical steps tez kar sakta hai aur plan bana sakta hai, par tests, code review aur chhote commits jinhe rollback kiya ja sake, tumhare paas rehte hain (AI use Day 27 mein hai).</li>
</ul>`
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
        en: `<ul>
<li>Microsoft's incremental migration guide asks to upgrade supporting libraries to .NET Standard 2.0 if possible; otherwise target .NET 8 or later alongside the .NET Framework target. Upgrade in post-order: leaf libraries first.</li>
<li>.NET Standard is a frozen API set (2.0 is the practical level for .NET Framework 4.6.1+), so new libraries on modern .NET usually target a current .NET version instead. For migration bridges it is still useful.</li>
<li>Follow-up: "What about packages without .NET Standard support?" Look for updated versions or replacements early in the assessment; they are a common blocker.</li>
</ul>`,
        hi: `<ul>
<li>Microsoft की incremental migration guide कहती है कि supporting libraries को हो सके तो .NET Standard 2.0 पर upgrade करो; वरना .NET Framework target के साथ .NET 8 या उसके बाद target करो। Post-order में upgrade करो: पहले leaf libraries।</li>
<li>.NET Standard एक frozen API set है (.NET Framework 4.6.1+ के लिए 2.0 practical level है), इसलिए modern .NET पर नई libraries आम तौर पर current .NET version को target करती हैं। Migration bridges के लिए वह अब भी काम का है।</li>
<li>Follow-up: "जिन packages में .NET Standard support नहीं है?" Assessment में ही updated versions या replacements खोजो; यह आम blocker है।</li>
</ul>`,
        hg: `<ul>
<li>Microsoft ki incremental migration guide kehti hai ki supporting libraries ko ho sake to .NET Standard 2.0 par upgrade karo; warna .NET Framework target ke saath .NET 8 ya uske baad target karo. Post-order mein upgrade karo: pehle leaf libraries.</li>
<li>.NET Standard ek frozen API set hai (.NET Framework 4.6.1+ ke liye 2.0 practical level hai), isliye modern .NET par nayi libraries aam taur par current .NET version ko target karti hain. Migration bridges ke liye woh ab bhi kaam ka hai.</li>
<li>Follow-up: "Jin packages mein .NET Standard support nahi hai?" Assessment mein hi updated versions ya replacements khojo; yeh aam blocker hai.</li>
</ul>`
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
        en: `<ul>
<li>Per Microsoft's docs: remove the <code>System.Web</code> reference in a shared library, add the adapters package, then multi-target or convert to .NET Standard 2.0 so <code>HttpContext</code> usage keeps working.</li>
<li>Extra features: remote session and remote authentication between the apps, and hosting <code>IHttpModule</code> and <code>Global.asax</code> logic in ASP.NET Core.</li>
<li>Follow-up: "Does it make the app done?" No: every adapter dependency is migration debt. Track them and remove them route by route, because performance and design are better without them.</li>
</ul>`,
        hi: `<ul>
<li>Microsoft के docs के अनुसार: shared library में <code>System.Web</code> reference हटाओ, adapters package जोड़ो, फिर multi-target करो या .NET Standard 2.0 पर convert करो ताकि <code>HttpContext</code> का use चलता रहे।</li>
<li>Extra features: दोनों apps के बीच remote session और remote authentication, और ASP.NET Core में <code>IHttpModule</code> और <code>Global.asax</code> logic host करना।</li>
<li>Follow-up: "क्या इससे app done हो जाता है?" नहीं: हर adapter dependency migration debt है। उन्हें track करो और route-by-route हटाओ, क्योंकि उनके बिना performance और design बेहतर हैं।</li>
</ul>`,
        hg: `<ul>
<li>Microsoft ke docs ke anusaar: shared library mein <code>System.Web</code> reference hatao, adapters package jodo, phir multi-target karo ya .NET Standard 2.0 par convert karo taaki <code>HttpContext</code> ka use chalta rahe.</li>
<li>Extra features: dono apps ke beech remote session aur remote authentication, aur ASP.NET Core mein <code>IHttpModule</code> aur <code>Global.asax</code> logic host karna.</li>
<li>Follow-up: "Kya isse app done ho jaata hai?" Nahi: har adapter dependency migration debt hai. Unhe track karo aur route-by-route hatao, kyunki unke bina performance aur design behtar hain.</li>
</ul>`
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
        en: `<ul>
<li>NuGet package: <code>Microsoft.Windows.Compatibility</code>. It covers areas like registry, WMI, event log, performance counters and Windows services. It does not turn them into cross-platform features.</li>
<li>Use the platform-compatibility analyzer and <code>OperatingSystem.IsWindows()</code> guards (or the <code>[SupportedOSPlatform]</code> attribute) to find and fence off Windows-only calls.</li>
<li>Follow-up: "Do we need Linux?" If the target is Windows App Service or IIS only, the pack may be enough for now. If you want Linux containers, plan to replace these APIs; it is a design decision, not a flag.</li>
</ul>`,
        hi: `<ul>
<li>NuGet package: <code>Microsoft.Windows.Compatibility</code>। यह registry, WMI, event log, performance counters और Windows services जैसे areas cover करता है। यह उन्हें cross-platform features नहीं बनाता।</li>
<li>Platform-compatibility analyzer और <code>OperatingSystem.IsWindows()</code> guards (या <code>[SupportedOSPlatform]</code> attribute) से Windows-only calls ढूँढो और उन्हें अलग घेरो।</li>
<li>Follow-up: "क्या Linux चाहिए?" अगर target सिर्फ़ Windows App Service या IIS है तो अभी pack काफ़ी हो सकता है। Linux containers चाहिए तो इन APIs को बदलने का plan करो; यह design decision है, flag नहीं।</li>
</ul>`,
        hg: `<ul>
<li>NuGet package: <code>Microsoft.Windows.Compatibility</code>. Yeh registry, WMI, event log, performance counters aur Windows services jaise areas cover karta hai. Yeh unhe cross-platform features nahi banata.</li>
<li>Platform-compatibility analyzer aur <code>OperatingSystem.IsWindows()</code> guards (ya <code>[SupportedOSPlatform]</code> attribute) se Windows-only calls dhoondo aur unhe alag gher do.</li>
<li>Follow-up: "Kya Linux chahiye?" Agar target sirf Windows App Service ya IIS hai to abhi pack kaafi ho sakta hai. Linux containers chahiye to in APIs ko badalne ka plan karo; yeh design decision hai, flag nahi.</li>
</ul>`
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
        en: `<ul>
<li>Show evidence: deployment frequency and lead time today (DORA metrics, Day 21), incident counts, cloud or licence cost, time to onboard a developer, features blocked by the old stack. Use your own numbers, not invented ones.</li>
<li>Offer options: do nothing (and its cost), in-place upgrade for small apps, incremental migration with milestones, rewrite (with its risks). Recommend one, with a rollback path.</li>
<li>Follow-up: "What if they say no?" Reduce risk cheaply: update packages, add tests around the riskiest areas, document dependencies. That makes any later migration cheaper.</li>
</ul>`,
        hi: `<ul>
<li>Evidence दिखाओ: आज की deployment frequency और lead time (DORA metrics, Day 21), incident counts, cloud या licence cost, नए developer को onboard करने का समय, पुराने stack की वजह से रुके features। अपने numbers use करो, गढ़े हुए नहीं।</li>
<li>Options दो: कुछ मत करो (और उसकी कीमत), छोटे apps के लिए in-place upgrade, milestones के साथ incremental migration, rewrite (उसके risks के साथ)। एक recommend करो, rollback path के साथ।</li>
<li>Follow-up: "अगर वे मना कर दें?" सस्ते में risk घटाओ: packages update करो, सबसे risky areas के आसपास tests जोड़ो, dependencies document करो। इससे आगे का कोई भी migration सस्ता हो जाता है।</li>
</ul>`,
        hg: `<ul>
<li>Evidence dikhao: aaj ki deployment frequency aur lead time (DORA metrics, Day 21), incident counts, cloud ya licence cost, naye developer ko onboard karne ka samay, purane stack ki wajah se ruke features. Apne numbers use karo, gadhe hue nahi.</li>
<li>Options do: kuch mat karo (aur uski keemat), chhote apps ke liye in-place upgrade, milestones ke saath incremental migration, rewrite (uske risks ke saath). Ek recommend karo, rollback path ke saath.</li>
<li>Follow-up: "Agar woh mana kar dein?" Sasate mein risk ghatao: packages update karo, sabse risky areas ke aaspaas tests jodo, dependencies document karo. Isse aage ka koi bhi migration sasta ho jaata hai.</li>
</ul>`
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
        en: `<ul>
<li>Microsoft's migration overview lists System.Web dependencies, outdated packages, legacy build tools, session, auth, logging, caching and configuration as the hard parts.</li>
<li>Also watch for: AppDomain and .NET Remoting, <code>BinaryFormatter</code> usage (it is not supported on modern .NET and throws since .NET 9, for security reasons), GAC-dependent assemblies, and custom build scripts.</li>
<li>Follow-up: "How do you find them early?" Run an assessment tool, grep for <code>System.Web</code> and <code>HttpContext.Current</code>, list NuGet packages with their .NET support, and spike one low-risk route end to end.</li>
</ul>`,
        hi: `<ul>
<li>Microsoft का migration overview System.Web dependencies, पुराने packages, legacy build tools, session, auth, logging, caching और configuration को मुश्किल हिस्से बताता है।</li>
<li>इन पर भी नज़र रखो: AppDomain और .NET Remoting, <code>BinaryFormatter</code> का use (security कारणों से modern .NET पर supported नहीं है और .NET 9 से exception फेंकता है), GAC पर निर्भर assemblies, और custom build scripts।</li>
<li>Follow-up: "इन्हें जल्दी कैसे ढूँढते हो?" Assessment tool चलाओ, <code>System.Web</code> और <code>HttpContext.Current</code> के लिए grep करो, NuGet packages की .NET support के साथ list बनाओ, और एक low-risk route end to end spike करो।</li>
</ul>`,
        hg: `<ul>
<li>Microsoft ka migration overview System.Web dependencies, purane packages, legacy build tools, session, auth, logging, caching aur configuration ko mushkil hisse batata hai.</li>
<li>In par bhi nazar rakho: AppDomain aur .NET Remoting, <code>BinaryFormatter</code> ka use (security kaarano se modern .NET par supported nahi hai aur .NET 9 se exception phenkta hai), GAC par nirbhar assemblies, aur custom build scripts.</li>
<li>Follow-up: "Inhe jaldi kaise dhoondte ho?" Assessment tool chalao, <code>System.Web</code> aur <code>HttpContext.Current</code> ke liye grep karo, NuGet packages ki .NET support ke saath list banao, aur ek low-risk route end to end spike karo.</li>
</ul>`
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
        en: `<ul>
<li>Razor Pages feel closest to <code>.aspx</code> plus code-behind: one page, one model, handlers like <code>OnGet</code> and <code>OnPost</code>, but no ViewState and no control tree.</li>
<li>Blazor has components, events and state, so it is familiar to Web Forms developers, but the programming model is different (component lifecycle, rendering modes). Choose by team skills and UI needs; a React/Next.js front end with an API is another valid choice (Day 24).</li>
<li>Follow-up: "Can we migrate Web Forms automatically?" Tools can help with parts, but plan a rebuild of each page; keep Web Forms pages running in the old app until they are replaced.</li>
</ul>`,
        hi: `<ul>
<li>Razor Pages <code>.aspx</code> और code-behind के सबसे पास लगते हैं: एक page, एक model, <code>OnGet</code> और <code>OnPost</code> जैसे handlers, पर ViewState और control tree नहीं।</li>
<li>Blazor में components, events और state हैं, इसलिए Web Forms developers को familiar लगता है, पर programming model अलग है (component lifecycle, rendering modes)। Team skills और UI ज़रूरतों से चुनो; API के साथ React/Next.js front end भी एक सही choice है (Day 24)।</li>
<li>Follow-up: "क्या Web Forms अपने आप migrate हो सकता है?" Tools कुछ हिस्सों में मदद कर सकते हैं, पर हर page का rebuild plan करो; Web Forms pages को बदले जाने तक पुराने app में चलने दो।</li>
</ul>`,
        hg: `<ul>
<li>Razor Pages <code>.aspx</code> aur code-behind ke sabse paas lagte hain: ek page, ek model, <code>OnGet</code> aur <code>OnPost</code> jaise handlers, par ViewState aur control tree nahi.</li>
<li>Blazor mein components, events aur state hain, isliye Web Forms developers ko familiar lagta hai, par programming model alag hai (component lifecycle, rendering modes). Team skills aur UI zaroorton se chuno; API ke saath React/Next.js front end bhi ek sahi choice hai (Day 24).</li>
<li>Follow-up: "Kya Web Forms apne aap migrate ho sakta hai?" Tools kuch hisson mein madad kar sakte hain, par har page ka rebuild plan karo; Web Forms pages ko badle jaane tak purane app mein chalne do.</li>
</ul>`
      }
    }
  ],
  puzzles: [
    {
      id: "webforms-lifecycle-order",
      src: `// Toy model of a Web Forms page (NOT real System.Web): a control tree and the order of life-cycle events.
var page = new Control("Page",
    new Control("Panel", new Control("TextBox"), new Control("Button")),
    new Control("Label"));

Console.WriteLine("GET:");
Show("Init", page.PostOrder());      // child-first
Show("Load", page.PreOrder());       // parent-first
Show("PreRender", page.PreOrder());
Show("Unload", page.PostOrder());

Console.WriteLine("POSTBACK (Button clicked):");
Show("Init", page.PostOrder());
Console.WriteLine("  [ViewState and form data are loaded here]");
Show("Load", page.PreOrder());
Console.WriteLine("  Button.Click");
Show("PreRender", page.PreOrder());
Show("Unload", page.PostOrder());

static void Show(string stage, IEnumerable<string> names) =>
    Console.WriteLine($"  {stage}: {string.Join(" > ", names)}");

class Control(string name, params Control[] children)
{
    public IEnumerable<string> PreOrder() =>
        new[] { name }.Concat(children.SelectMany(c => c.PreOrder()));

    public IEnumerable<string> PostOrder() =>
        children.SelectMany(c => c.PostOrder()).Append(name);
}`,
      answer: `GET:
  Init: TextBox > Button > Panel > Label > Page
  Load: Page > Panel > TextBox > Button > Label
  PreRender: Page > Panel > TextBox > Button > Label
  Unload: TextBox > Button > Panel > Label > Page
POSTBACK (Button clicked):
  Init: TextBox > Button > Panel > Label > Page
  [ViewState and form data are loaded here]
  Load: Page > Panel > TextBox > Button > Label
  Button.Click
  PreRender: Page > Panel > TextBox > Button > Label
  Unload: TextBox > Button > Panel > Label > Page`,
      explain: {
        en: `<p>Two rules decide everything here. <b>Init and Unload go child-first</b> (bottom-up): <code>TextBox</code>, <code>Button</code>, then their <code>Panel</code>, then <code>Label</code>, then the <code>Page</code> last. <b>Load and PreRender go parent-first</b> (top-down): the <code>Page</code> first, then each container before its children.</p>
<p>On a postback, ViewState and form data are loaded after Init and before Load, and the control event (<code>Button.Click</code>) runs after Load and before PreRender. That is why code in <code>Page_Load</code> that rebinds a grid can wipe the user's input before the click handler sees it. (This is a toy model with the order taken from Microsoft's page life cycle documentation.)</p>`,
        hi: `<p>यहाँ दो rules सब तय करते हैं। <b>Init और Unload child-first चलते हैं</b> (नीचे से ऊपर): <code>TextBox</code>, <code>Button</code>, फिर उनका <code>Panel</code>, फिर <code>Label</code>, और आख़िर में <code>Page</code>। <b>Load और PreRender parent-first चलते हैं</b> (ऊपर से नीचे): पहले <code>Page</code>, फिर हर container अपने children से पहले।</p>
<p>Postback में ViewState और form data Init के बाद और Load से पहले load होते हैं, और control event (<code>Button.Click</code>) Load के बाद और PreRender से पहले चलता है। इसीलिए <code>Page_Load</code> में grid दोबारा bind करने वाला code click handler के देखने से पहले user का input मिटा सकता है। (यह toy model है, order Microsoft के page life cycle documentation से लिया गया है।)</p>`,
        hg: `<p>Yahan do rules sab tay karte hain. <b>Init aur Unload child-first chalte hain</b> (neeche se upar): <code>TextBox</code>, <code>Button</code>, phir unka <code>Panel</code>, phir <code>Label</code>, aur aakhir mein <code>Page</code>. <b>Load aur PreRender parent-first chalte hain</b> (upar se neeche): pehle <code>Page</code>, phir har container apne children se pehle.</p>
<p>Postback mein ViewState aur form data Init ke baad aur Load se pehle load hote hain, aur control event (<code>Button.Click</code>) Load ke baad aur PreRender se pehle chalta hai. Isiliye <code>Page_Load</code> mein grid dobara bind karne wala code click handler ke dekhne se pehle user ka input mita sakta hai. (Yeh toy model hai, order Microsoft ke page life cycle documentation se liya gaya hai.)</p>`
      }
    },
    {
      id: "viewstate-size-cost",
      src: `using System.Globalization;

// Toy numbers (real sizes vary): a GridView with 200 rows x 4 columns keeps about 18 raw bytes per cell in ViewState.
// The raw bytes are sent as Base64 text inside the hidden __VIEWSTATE field.
const int rows = 200, columns = 4, rawBytesPerCell = 18, postbacks = 5;

int Base64Length(int rawBytes) => 4 * ((rawBytes + 2) / 3);

int withGrid = Base64Length(rows * columns * rawBytesPerCell) + 120;  // +120: small page-level state
int withoutGrid = 120;                                               // grid has EnableViewState="false"

Console.WriteLine($"hidden field: {Format(withGrid)} vs {Format(withoutGrid)}");

// The first GET sends the field down once. Every postback sends it up (request) and down again (response).
long Traffic(int fieldBytes) => fieldBytes + (long)postbacks * 2 * fieldBytes;

Console.WriteLine($"{postbacks} postbacks: {Format(Traffic(withGrid))} vs {Format(Traffic(withoutGrid))}");
Console.WriteLine($"saved: {(Traffic(withGrid) - Traffic(withoutGrid)) * 100 / Traffic(withGrid)}%");

static string Format(long bytes) =>
    (bytes / 1024.0).ToString("F1", CultureInfo.InvariantCulture) + " KB";`,
      answer: `hidden field: 18.9 KB vs 0.1 KB
5 postbacks: 207.5 KB vs 1.3 KB
saved: 99%`,
      explain: {
        en: `<p>Base64 turns every 3 raw bytes into 4 characters, so 200 rows x 4 columns x 18 bytes = 14,400 raw bytes become 19,200 characters, plus 120 for page-level state: about 18.9 KB in the hidden field. The first GET sends it once; each of the 5 postbacks sends it up and then down again, so the total is 11 copies, about 207.5 KB, against 1.3 KB when the grid does not keep ViewState.</p>
<p>The numbers are a toy model (real sizes depend on the controls), but the shape is real: ViewState cost is paid on <b>every</b> postback in both directions. The usual fixes are <code>EnableViewState="false"</code> on big controls and rebinding data in the right event. In ASP.NET Core this cost simply does not exist because the page does not carry control state.</p>`,
        hi: `<p>Base64 हर 3 raw bytes को 4 characters में बदलता है, इसलिए 200 rows x 4 columns x 18 bytes = 14,400 raw bytes के 19,200 characters बन जाते हैं, ऊपर से page-level state के 120: hidden field में करीब 18.9 KB। पहला GET उसे एक बार भेजता है; 5 postbacks में से हर एक उसे ऊपर भेजता है और फिर नीचे भी, तो कुल 11 copies, करीब 207.5 KB, जबकि grid ViewState न रखे तो 1.3 KB।</p>
<p>Numbers toy model हैं (असली sizes controls पर depend करते हैं), पर shape असली है: ViewState का cost <b>हर</b> postback में दोनों तरफ़ चुकाना पड़ता है। आम fixes हैं बड़े controls पर <code>EnableViewState="false"</code> और data को सही event में rebind करना। ASP.NET Core में यह cost होता ही नहीं क्योंकि page control state साथ नहीं ले जाता।</p>`,
        hg: `<p>Base64 har 3 raw bytes ko 4 characters mein badalta hai, isliye 200 rows x 4 columns x 18 bytes = 14,400 raw bytes ke 19,200 characters ban jaate hain, upar se page-level state ke 120: hidden field mein kareeb 18.9 KB. Pehla GET use ek baar bhejta hai; 5 postbacks mein se har ek use upar bhejta hai aur phir neeche bhi, to kul 11 copies, kareeb 207.5 KB, jabki grid ViewState na rakhe to 1.3 KB.</p>
<p>Numbers toy model hain (asli sizes controls par depend karte hain), par shape asli hai: ViewState ka cost <b>har</b> postback mein dono taraf chukana padta hai. Aam fixes hain bade controls par <code>EnableViewState="false"</code> aur data ko sahi event mein rebind karna. ASP.NET Core mein yeh cost hota hi nahi kyunki page control state saath nahi le jaata.</p>`
      }
    },
    {
      id: "modules-vs-middleware-order",
      src: `// Same three concerns, two designs. First the System.Web style: modules subscribe to named events.
var legacy = new List<string>();
string[] events = { "BeginRequest", "AuthenticateRequest", "EndRequest" };
var subscribers = events.ToDictionary(e => e, _ => new List<Action>());

// The order of these calls = the order the modules are listed in web.config.
Subscribe("Timer", "BeginRequest");
Subscribe("Logger", "BeginRequest");
Subscribe("Auth", "AuthenticateRequest");
Subscribe("Timer", "EndRequest");
Subscribe("Logger", "EndRequest");

foreach (var e in new[] { "BeginRequest", "AuthenticateRequest" }) Raise(e);
legacy.Add("Handler");
Raise("EndRequest");
Console.WriteLine("modules:    " + string.Join(" > ", legacy));

void Subscribe(string module, string evt) => subscribers[evt].Add(() => legacy.Add($"{module}.{evt}"));
void Raise(string evt) { foreach (var run in subscribers[evt]) run(); }

// Now the ASP.NET Core style: each component wraps the next one.
var core = new List<string>();
Action Wrap(string name, Action next) => () => { core.Add(name + " in"); next(); core.Add(name + " out"); };

var pipeline = Wrap("Timer", Wrap("Logger", () => core.Add("Endpoint")));
pipeline();
Console.WriteLine("middleware: " + string.Join(" > ", core));`,
      answer: `modules:    Timer.BeginRequest > Logger.BeginRequest > Auth.AuthenticateRequest > Handler > Timer.EndRequest > Logger.EndRequest
middleware: Timer in > Logger in > Endpoint > Logger out > Timer out`,
      explain: {
        en: `<p>With modules, the <b>event</b> decides first and the <code>web.config</code> order decides second: all <code>BeginRequest</code> handlers (Timer then Logger), then <code>AuthenticateRequest</code>, then the handler, then <code>EndRequest</code> handlers in the <b>same</b> Timer-then-Logger order. Nothing "unwinds".</p>
<p>With middleware, each component wraps the next, so the response path is the <b>reverse</b>: Timer in, Logger in, Endpoint, Logger out, Timer out. This is why porting modules needs care: the "end" work of two modules changes order, and a module that depended on a specific event (like <code>AuthenticateRequest</code>) must be placed at the right spot in <code>Program.cs</code>. Day 12 has the middleware side; this puzzle shows the old side.</p>`,
        hi: `<p>Modules में पहले <b>event</b> तय करता है और फिर <code>web.config</code> का order: सारे <code>BeginRequest</code> handlers (Timer फिर Logger), फिर <code>AuthenticateRequest</code>, फिर handler, फिर <code>EndRequest</code> handlers <b>उसी</b> Timer-फिर-Logger order में। कुछ "unwind" नहीं होता।</p>
<p>Middleware में हर component अगले को घेरता है, इसलिए response का रास्ता <b>उल्टा</b> होता है: Timer in, Logger in, Endpoint, Logger out, Timer out। इसीलिए modules port करते वक़्त सावधानी चाहिए: दो modules का "end" वाला काम order बदल लेता है, और जो module किसी ख़ास event (जैसे <code>AuthenticateRequest</code>) पर टिका था उसे <code>Program.cs</code> में सही जगह रखना पड़ता है। Day 12 में middleware वाला हिस्सा है; यह puzzle पुराना हिस्सा दिखाता है।</p>`,
        hg: `<p>Modules mein pehle <b>event</b> tay karta hai aur phir <code>web.config</code> ka order: saare <code>BeginRequest</code> handlers (Timer phir Logger), phir <code>AuthenticateRequest</code>, phir handler, phir <code>EndRequest</code> handlers <b>usi</b> Timer-phir-Logger order mein. Kuch "unwind" nahi hota.</p>
<p>Middleware mein har component agle ko gherta hai, isliye response ka raasta <b>ulta</b> hota hai: Timer in, Logger in, Endpoint, Logger out, Timer out. Isiliye modules port karte waqt saavdhani chahiye: do modules ka "end" wala kaam order badal leta hai, aur jo module kisi khaas event (jaise <code>AuthenticateRequest</code>) par tika tha use <code>Program.cs</code> mein sahi jagah rakhna padta hai. Day 12 mein middleware wala hissa hai; yeh puzzle purana hissa dikhata hai.</p>`
      }
    },
    {
      id: "multi-target-branch",
      src: `// A library multi-targeted as net48;netstandard2.0;net10.0 is compiled once per target.
// This file is compiled for net9.0 only. Which branches survive?
var defined = new List<string>();
#if NETFRAMEWORK
defined.Add("NETFRAMEWORK");
#endif
#if NETSTANDARD2_0
defined.Add("NETSTANDARD2_0");
#endif
#if NETCOREAPP
defined.Add("NETCOREAPP");
#endif
#if NET8_0_OR_GREATER
defined.Add("NET8_0_OR_GREATER");
#endif
#if NET9_0
defined.Add("NET9_0");
#endif
#if NET10_0_OR_GREATER
defined.Add("NET10_0_OR_GREATER");
#endif
Console.WriteLine(string.Join(", ", defined));

Console.WriteLine(CurrentUserSource.Describe());

static class CurrentUserSource
{
    public static string Describe()
    {
#if NETFRAMEWORK
        return "System.Web: HttpContext.Current.User";
#elif NET8_0_OR_GREATER
        return "ASP.NET Core: IHttpContextAccessor or a parameter";
#else
        return "other target";
#endif
    }
}`,
      answer: `NETCOREAPP, NET8_0_OR_GREATER, NET9_0
ASP.NET Core: IHttpContextAccessor or a parameter`,
      explain: {
        en: `<p>The compiler defines one symbol set per target framework. For <code>net9.0</code>: <code>NETCOREAPP</code>, <code>NET8_0_OR_GREATER</code> (and the other lower <code>_OR_GREATER</code> symbols) and <code>NET9_0</code>. Not defined: <code>NETFRAMEWORK</code>, <code>NETSTANDARD2_0</code>, and <code>NET10_0_OR_GREATER</code>. So the <code>#elif NET8_0_OR_GREATER</code> branch is the one that runs.</p>
<p>A real library with <code>&lt;TargetFrameworks&gt;net48;netstandard2.0;net10.0&lt;/TargetFrameworks&gt;</code> is built three times, and each build keeps different branches. Keep <code>#if</code> blocks small and behind one helper (like <code>Describe()</code>), otherwise the code becomes unreadable and untested for some targets: build and test <b>every</b> target in CI (Day 21).</p>`,
        hi: `<p>Compiler हर target framework के लिए अलग symbol set define करता है। <code>net9.0</code> के लिए: <code>NETCOREAPP</code>, <code>NET8_0_OR_GREATER</code> (और बाकी छोटे <code>_OR_GREATER</code> symbols) और <code>NET9_0</code>। Defined नहीं: <code>NETFRAMEWORK</code>, <code>NETSTANDARD2_0</code>, और <code>NET10_0_OR_GREATER</code>। इसलिए <code>#elif NET8_0_OR_GREATER</code> वाली branch चलती है।</p>
<p><code>&lt;TargetFrameworks&gt;net48;netstandard2.0;net10.0&lt;/TargetFrameworks&gt;</code> वाली असली library तीन बार build होती है, और हर build अलग branches रखता है। <code>#if</code> blocks छोटे रखो और एक helper (जैसे <code>Describe()</code>) के पीछे, वरना code पढ़ने लायक नहीं रहता और कुछ targets के लिए untested रहता है: CI में <b>हर</b> target build और test करो (Day 21)।</p>`,
        hg: `<p>Compiler har target framework ke liye alag symbol set define karta hai. <code>net9.0</code> ke liye: <code>NETCOREAPP</code>, <code>NET8_0_OR_GREATER</code> (aur baaki chhote <code>_OR_GREATER</code> symbols) aur <code>NET9_0</code>. Defined nahi: <code>NETFRAMEWORK</code>, <code>NETSTANDARD2_0</code>, aur <code>NET10_0_OR_GREATER</code>. Isliye <code>#elif NET8_0_OR_GREATER</code> wali branch chalti hai.</p>
<p><code>&lt;TargetFrameworks&gt;net48;netstandard2.0;net10.0&lt;/TargetFrameworks&gt;</code> wali asli library teen baar build hoti hai, aur har build alag branches rakhta hai. <code>#if</code> blocks chhote rakho aur ek helper (jaise <code>Describe()</code>) ke peechhe, warna code padhne layak nahi rehta aur kuch targets ke liye untested rehta hai: CI mein <b>har</b> target build aur test karo (Day 21).</p>`
      }
    },
    {
      id: "strangler-routing-table",
      src: `using System.Globalization;

// Toy router for a strangler-fig migration. Lowest Order wins; ties go to the longest matching prefix.
// (YARP and ASP.NET Core routing have similar ideas, but this is a simplified model.)
var routes = new List<Route>
{
    new("/api/prices", "NEW", 0),
    new("/api/orders", "NEW", 0),
    new("/api/orders/export", "LEGACY", 0),   // specific exception: still handled by the old app
    new("/", "LEGACY", int.MaxValue),         // catch-all, tried last
};

// (path, requests per day)
var traffic = new (string Path, int Hits)[]
{
    ("/api/prices/TEA-250", 600),
    ("/api/orders/17", 300),
    ("/api/orders/export", 40),
    ("/Reports/Monthly.aspx", 50),
    ("/Default.aspx", 10),
};

int newHits = 0, total = 0;
foreach (var (path, hits) in traffic)
{
    var route = routes
        .Where(r => path.StartsWith(r.Prefix, StringComparison.OrdinalIgnoreCase))
        .OrderBy(r => r.Order)
        .ThenByDescending(r => r.Prefix.Length)
        .First();
    Console.WriteLine($"{path} -> {route.Target}");
    total += hits;
    if (route.Target == "NEW") newHits += hits;
}

var share = 100.0 * newHits / total;
Console.WriteLine($"traffic on new app: {share.ToString("F1", CultureInfo.InvariantCulture)}%");

record Route(string Prefix, string Target, int Order);`,
      answer: `/api/prices/TEA-250 -> NEW
/api/orders/17 -> NEW
/api/orders/export -> LEGACY
/Reports/Monthly.aspx -> LEGACY
/Default.aspx -> LEGACY
traffic on new app: 90.0%`,
      explain: {
        en: `<p>Routes are sorted by <code>Order</code> first, then by longest prefix. <code>/api/orders/export</code> matches both the <code>/api/orders</code> route and the longer <code>/api/orders/export</code> route (both Order 0), so the longer, more specific one wins and that path stays on the legacy app. The two <code>.aspx</code> paths only match the catch-all <code>/</code> with <code>int.MaxValue</code>, so they go to the legacy app.</p>
<p>New app traffic is (600 + 300) of 1,000 requests = 90.0%. That is the TL's progress number: by <b>traffic</b> the migration looks 90% done, but by <b>routes</b> it is 2 of 5 paths, and the remaining pages (Web Forms reports) may be the hardest. Report both numbers, and migrate by risk and value, not only by traffic. (Toy model; real YARP uses ASP.NET Core routing with its own priority rules.)</p>`,
        hi: `<p>Routes पहले <code>Order</code> से sort होते हैं, फिर सबसे लंबे prefix से। <code>/api/orders/export</code> दोनों से match होता है: <code>/api/orders</code> route और लंबा <code>/api/orders/export</code> route (दोनों Order 0), इसलिए लंबा, ज़्यादा specific वाला जीतता है और वह path legacy app पर ही रहता है। दोनों <code>.aspx</code> paths सिर्फ़ <code>int.MaxValue</code> वाले catch-all <code>/</code> से match होते हैं, इसलिए वे legacy app को जाते हैं।</p>
<p>नए app का traffic (600 + 300) / 1,000 requests = 90.0%। यही TL का progress number है: <b>traffic</b> से migration 90% पूरा दिखता है, पर <b>routes</b> से 5 में से 2 paths, और बचे हुए pages (Web Forms reports) सबसे मुश्किल हो सकते हैं। दोनों numbers बताओ, और migrate risk और value से करो, सिर्फ़ traffic से नहीं। (Toy model; असली YARP ASP.NET Core routing और उसके अपने priority rules use करता है।)</p>`,
        hg: `<p>Routes pehle <code>Order</code> se sort hote hain, phir sabse lambe prefix se. <code>/api/orders/export</code> dono se match hota hai: <code>/api/orders</code> route aur lamba <code>/api/orders/export</code> route (dono Order 0), isliye lamba, zyada specific wala jeetta hai aur woh path legacy app par hi rehta hai. Dono <code>.aspx</code> paths sirf <code>int.MaxValue</code> wale catch-all <code>/</code> se match hote hain, isliye woh legacy app ko jaate hain.</p>
<p>Naye app ka traffic (600 + 300) / 1,000 requests = 90.0%. Yahi TL ka progress number hai: <b>traffic</b> se migration 90% poora dikhta hai, par <b>routes</b> se 5 mein se 2 paths, aur bache hue pages (Web Forms reports) sabse mushkil ho sakte hain. Dono numbers batao, aur migrate risk aur value se karo, sirf traffic se nahi. (Toy model; asli YARP ASP.NET Core routing aur uske apne priority rules use karta hai.)</p>`
      }
    },
    {
      id: "ambient-context-flow",
      src: `// Why HttpContext.Current-style statics are fragile, and what IHttpContextAccessor does differently.
LegacyStyle.User = "asha";
Flowing.User = "asha";

Console.WriteLine($"same thread: static={LegacyStyle.User ?? "null"}, asyncLocal={Flowing.User ?? "null"}");

await Task.Run(() =>
{
    // Runs on a thread-pool thread, not the thread that set the values.
    Console.WriteLine($"pool thread: static={LegacyStyle.User ?? "null"}, asyncLocal={Flowing.User ?? "null"}");
    Flowing.User = "changed-in-child";
    Console.WriteLine($"child sets:  asyncLocal={Flowing.User}");
});

// Changes made inside the awaited child do not leak back to this flow.
Console.WriteLine($"after await: asyncLocal={Flowing.User}");

static class LegacyStyle
{
    [ThreadStatic] private static string? _user;
    public static string? User { get => _user; set => _user = value; }
}

static class Flowing
{
    private static readonly AsyncLocal<string?> _user = new();
    public static string? User { get => _user.Value; set => _user.Value = value; }
}`,
      answer: `same thread: static=asha, asyncLocal=asha
pool thread: static=null, asyncLocal=asha
child sets:  asyncLocal=changed-in-child
after await: asyncLocal=asha`,
      explain: {
        en: `<p><code>[ThreadStatic]</code> data belongs to one thread. The thread-pool thread started by <code>Task.Run</code> never saw the value, so it prints <code>null</code>. <code>AsyncLocal&lt;T&gt;</code> flows with the logical async call chain, so the child sees <code>asha</code>. A change made inside the child (<code>changed-in-child</code>) does not flow back to the caller after <code>await</code>.</p>
<p>Why it matters: ASP.NET Core's <code>IHttpContextAccessor</code> is built on <code>AsyncLocal</code>, which is why it works across <code>await</code> but returns <code>null</code> in code that is not part of a request (background jobs). Still, a hidden ambient value is hard to test, so prefer passing the user or tenant as a parameter (Day 3 covers async flow).</p>`,
        hi: `<p><code>[ThreadStatic]</code> data एक thread का होता है। <code>Task.Run</code> से शुरू हुए thread-pool thread ने value कभी देखी ही नहीं, इसलिए वह <code>null</code> print करता है। <code>AsyncLocal&lt;T&gt;</code> logical async call chain के साथ चलता है, इसलिए child को <code>asha</code> दिखता है। Child के अंदर किया गया बदलाव (<code>changed-in-child</code>) <code>await</code> के बाद caller तक वापस नहीं आता।</p>
<p>क्यों ज़रूरी: ASP.NET Core का <code>IHttpContextAccessor</code> <code>AsyncLocal</code> पर बना है, इसीलिए वह <code>await</code> के पार काम करता है पर ऐसे code में <code>null</code> देता है जो किसी request का हिस्सा नहीं (background jobs)। फिर भी छुपी हुई ambient value को test करना मुश्किल है, इसलिए user या tenant को parameter से pass करना बेहतर है (async flow Day 3 में है)।</p>`,
        hg: `<p><code>[ThreadStatic]</code> data ek thread ka hota hai. <code>Task.Run</code> se shuru hue thread-pool thread ne value kabhi dekhi hi nahi, isliye woh <code>null</code> print karta hai. <code>AsyncLocal&lt;T&gt;</code> logical async call chain ke saath chalta hai, isliye child ko <code>asha</code> dikhta hai. Child ke andar kiya gaya badlaav (<code>changed-in-child</code>) <code>await</code> ke baad caller tak wapas nahi aata.</p>
<p>Kyun zaroori: ASP.NET Core ka <code>IHttpContextAccessor</code> <code>AsyncLocal</code> par bana hai, isiliye woh <code>await</code> ke paar kaam karta hai par aise code mein <code>null</code> deta hai jo kisi request ka hissa nahi (background jobs). Phir bhi chhupi hui ambient value ko test karna mushkil hai, isliye user ya tenant ko parameter se pass karna behtar hai (async flow Day 3 mein hai).</p>`
      }
    },
  ],
  revision: {
    en: [
      "Web Forms lifecycle: Init and Unload run child-first, Load and PreRender run parent-first, and control events run after Load.",
      "ViewState is a hidden field sent both ways on every postback; ASP.NET Core has no Web Forms and no ViewState.",
      "MVC 5 lifecycle: routing, MvcHandler, controller factory, action invoker with filters, action, result, view engine.",
      "Modules run per event in web.config order both ways; middleware wraps the next one and unwinds in reverse.",
      "web.config app settings become appsettings.json, environment variables and a secret store, bound to typed options.",
      "HttpContext.Current has no equivalent: pass values as parameters, and treat IHttpContextAccessor as a last-resort bridge.",
      ".NET Framework 4.8.1 follows the lifecycle of the Windows version it runs on; .NET 10 is LTS until November 2028.",
      "The docs say .NET Upgrade Assistant is officially deprecated and recommend GitHub Copilot app modernization instead.",
      "For large live apps use incremental migration: ASP.NET Core in front, YARP to the old app, System.Web adapters for shared state.",
      "Shared libraries go to .NET Standard 2.0 or multi-target, upgraded in post-order with leaf libraries first.",
      "WCF server is not in modern .NET: CoreWCF for existing SOAP clients, gRPC or HTTP when you control the clients.",
      "As a TL, report migration progress by traffic and by routes, and keep a rollback plan."
    ],
    meaning: {
      hi: [
        "Web Forms lifecycle: Init और Unload child-first, Load और PreRender parent-first, और control events Load के बाद चलते हैं।",
        "ViewState एक hidden field है जो हर postback में दोनों तरफ़ जाता है; ASP.NET Core में Web Forms और ViewState नहीं हैं।",
        "MVC 5 lifecycle: routing, MvcHandler, controller factory, filters के साथ action invoker, action, result, view engine।",
        "Modules हर event के लिए web.config order में दोनों तरफ़ चलते हैं; middleware अगले को घेरता है और उल्टा unwind होता है।",
        "web.config के app settings appsettings.json, environment variables और secret store में जाते हैं, typed options से bind।",
        "HttpContext.Current का equivalent नहीं है: values parameters से pass करो, और IHttpContextAccessor को आख़िरी option वाला bridge समझो।",
        ".NET Framework 4.8.1 उस Windows version के lifecycle को follow करता है जिस पर चलता है; .NET 10 नवंबर 2028 तक LTS है।",
        "Docs के अनुसार .NET Upgrade Assistant officially deprecated है और GitHub Copilot app modernization recommend होता है।",
        "बड़े live apps के लिए incremental migration: आगे ASP.NET Core, पुराने app को YARP, shared state के लिए System.Web adapters।",
        "Shared libraries .NET Standard 2.0 पर या multi-target, post-order में upgrade, पहले leaf libraries।",
        "WCF server modern .NET में नहीं है: मौजूदा SOAP clients के लिए CoreWCF, clients अपने control में हों तो gRPC या HTTP।",
        "TL के तौर पर migration progress traffic और routes दोनों से बताओ, और rollback plan रखो।"
      ],
      hg: [
        "Web Forms lifecycle: Init aur Unload child-first, Load aur PreRender parent-first, aur control events Load ke baad chalte hain.",
        "ViewState ek hidden field hai jo har postback mein dono taraf jaata hai; ASP.NET Core mein Web Forms aur ViewState nahi hain.",
        "MVC 5 lifecycle: routing, MvcHandler, controller factory, filters ke saath action invoker, action, result, view engine.",
        "Modules har event ke liye web.config order mein dono taraf chalte hain; middleware agle ko gherta hai aur ulta unwind hota hai.",
        "web.config ke app settings appsettings.json, environment variables aur secret store mein jaate hain, typed options se bind.",
        "HttpContext.Current ka equivalent nahi hai: values parameters se pass karo, aur IHttpContextAccessor ko aakhri option wala bridge samjho.",
        ".NET Framework 4.8.1 us Windows version ke lifecycle ko follow karta hai jis par chalta hai; .NET 10 November 2028 tak LTS hai.",
        "Docs ke anusaar .NET Upgrade Assistant officially deprecated hai aur GitHub Copilot app modernization recommend hota hai.",
        "Bade live apps ke liye incremental migration: aage ASP.NET Core, purane app ko YARP, shared state ke liye System.Web adapters.",
        "Shared libraries .NET Standard 2.0 par ya multi-target, post-order mein upgrade, pehle leaf libraries.",
        "WCF server modern .NET mein nahi hai: maujooda SOAP clients ke liye CoreWCF, clients apne control mein hon to gRPC ya HTTP.",
        "TL ke taur par migration progress traffic aur routes dono se batao, aur rollback plan rakho."
      ]
    }
  },
  whatsNew: {
    en: `<ul>
<li><b>Tooling change (verify before quoting):</b> Microsoft Learn now says <b>.NET Upgrade Assistant is officially deprecated</b> and recommends the GitHub Copilot app modernization agent (Visual Studio). Older blog posts and courses that teach the Upgrade Assistant as the main tool are out of date.</li>
<li><b>Migration guidance:</b> the current ASP.NET Core migration docs centre on <b>incremental migration</b> (strangler fig): YARP in front, System.Web adapters (<code>Microsoft.AspNetCore.SystemWebAdapters</code>) for shared session, authentication and even hosting <code>IHttpModule</code> and <code>Global.asax</code> logic. This is a library and tooling story, not a C# language feature.</li>
<li><b>Support dates (from Microsoft's .NET support policy page):</b> .NET 10 is LTS, supported until 14 November 2028. .NET 8 (LTS) and .NET 9 (STS) are both listed as ending on 10 November 2026, so a migration that targets .NET 8 today has a short runway; target .NET 10.</li>
<li><b>Unchanged:</b> .NET Framework 4.x is still a Windows component with the lifecycle of its Windows version, and Web Forms still has no ASP.NET Core version.</li>
</ul>`,
    hi: `<ul>
<li><b>Tooling बदलाव (बोलने से पहले verify करो):</b> Microsoft Learn अब कहता है कि <b>.NET Upgrade Assistant officially deprecated है</b> और GitHub Copilot app modernization agent (Visual Studio) recommend करता है। जो पुराने blog posts और courses Upgrade Assistant को मुख्य tool सिखाते हैं वे पुराने हो चुके हैं।</li>
<li><b>Migration guidance:</b> मौजूदा ASP.NET Core migration docs <b>incremental migration</b> (strangler fig) पर केंद्रित हैं: आगे YARP, shared session, authentication और यहाँ तक कि <code>IHttpModule</code> और <code>Global.asax</code> logic host करने के लिए System.Web adapters (<code>Microsoft.AspNetCore.SystemWebAdapters</code>)। यह library और tooling की बात है, C# language feature नहीं।</li>
<li><b>Support dates (Microsoft की .NET support policy page से):</b> .NET 10 LTS है, 14 नवंबर 2028 तक supported। .NET 8 (LTS) और .NET 9 (STS) दोनों 10 नवंबर 2026 को ख़त्म होने वाले listed हैं, इसलिए आज .NET 8 target करने वाले migration के पास runway छोटा है; .NET 10 target करो।</li>
<li><b>जो नहीं बदला:</b> .NET Framework 4.x अब भी Windows component है और अपने Windows version का lifecycle follow करता है, और Web Forms का अब भी कोई ASP.NET Core version नहीं है।</li>
</ul>`,
    hg: `<ul>
<li><b>Tooling badlaav (bolne se pehle verify karo):</b> Microsoft Learn ab kehta hai ki <b>.NET Upgrade Assistant officially deprecated hai</b> aur GitHub Copilot app modernization agent (Visual Studio) recommend karta hai. Jo purane blog posts aur courses Upgrade Assistant ko mukhya tool sikhate hain woh purane ho chuke hain.</li>
<li><b>Migration guidance:</b> maujooda ASP.NET Core migration docs <b>incremental migration</b> (strangler fig) par kendrit hain: aage YARP, shared session, authentication aur yahan tak ki <code>IHttpModule</code> aur <code>Global.asax</code> logic host karne ke liye System.Web adapters (<code>Microsoft.AspNetCore.SystemWebAdapters</code>). Yeh library aur tooling ki baat hai, C# language feature nahi.</li>
<li><b>Support dates (Microsoft ki .NET support policy page se):</b> .NET 10 LTS hai, 14 November 2028 tak supported. .NET 8 (LTS) aur .NET 9 (STS) dono 10 November 2026 ko khatam hone wale listed hain, isliye aaj .NET 8 target karne wale migration ke paas runway chhota hai; .NET 10 target karo.</li>
<li><b>Jo nahi badla:</b> .NET Framework 4.x ab bhi Windows component hai aur apne Windows version ka lifecycle follow karta hai, aur Web Forms ka ab bhi koi ASP.NET Core version nahi hai.</li>
</ul>`
  }
};
