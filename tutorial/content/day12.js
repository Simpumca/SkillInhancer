// Day 12 — ASP.NET Core Fundamentals. Browser script: assigns window.TL_DAY (schema: see shared-context / validate.mjs).
window.TL_DAY = {
  day: 12,
  title: {
    en: "ASP.NET Core Fundamentals",
    hi: "ASP.NET Core Fundamentals (बुनियाद)",
    hg: "ASP.NET Core Fundamentals (buniyad)"
  },
  summary: {
    en: `<p>You rate ASP.NET Core 2/10 but you already know classic ASP.NET (6/10). Good news: the ideas are the same, only the plumbing changed. Today's map: <b>hosting</b>, <b>Program.cs</b>, the <b>middleware pipeline</b>, <b>configuration</b>, <b>logging</b>, <b>filters</b> and <b>Minimal API vs Controllers</b>.</p>
<ul>
<li><b>Hosting</b>: <code>WebApplication.CreateBuilder(args)</code> gives a <code>WebApplicationBuilder</code> (register services, configuration, logging); <code>Build()</code> gives the <code>WebApplication</code> (middleware + endpoints); <code>Run()</code> starts it. <b>Kestrel</b> is the default server. Since .NET 6 one <code>Program.cs</code> replaces <code>Program.Main</code> + <code>Startup.cs</code>.</li>
<li><b>Middleware pipeline</b>: a chain of components (Day 10, Chain of Responsibility). Each gets <code>next</code>; code before <code>await next()</code> runs on the way in, code after it on the way out. <b>Order = the order of the calls in Program.cs</b>, so order matters.</li>
<li><b><code>Use</code> / <code>Run</code> / <code>Map</code> / <code>MapWhen</code> / <code>UseWhen</code></b>: <code>Use</code> may call <code>next</code>; <code>Run</code> is terminal; <code>Map</code> and <code>MapWhen</code> branch away and do not rejoin; <code>UseWhen</code> branches and rejoins. A <b>short-circuit</b> means not calling <code>next</code>.</li>
<li><b>Authentication vs authorization</b>: <code>UseAuthentication</code> only identifies the caller (sets <code>HttpContext.User</code>) and calls <code>next</code>. The authorization step decides: 401 (challenge) or 403 (forbid).</li>
<li><b>Configuration</b>: providers are layered, <b>last one wins</b>: appsettings.json, appsettings.{Environment}.json, user secrets (Development), environment variables, command line. Bind sections to classes with the Options pattern (Day 11).</li>
<li><b>Environment and logging</b>: <code>ASPNETCORE_ENVIRONMENT</code> picks Development/Staging/Production (default Production). Log with <code>ILogger&lt;T&gt;</code> and <b>message templates</b> (<code>{OrderId}</code>), not string interpolation.</li>
<li><b>DI</b>: one scope per request (<code>HttpContext.RequestServices</code>); lifetimes were covered in Day 11. <b>Filters</b> (authorization, resource, action, exception, result) run inside MVC and know about actions; middleware sees every request.</li>
<li><b>Minimal API vs Controllers</b>: both are fine in production. Minimal APIs are lighter and have route groups, endpoint filters and <code>TypedResults</code> (.NET 7+); controllers bring filters, model binding conventions and structure for big teams.</li>
</ul>`,
    hi: `<p>आप ASP.NET Core को 2/10 देते हैं पर classic ASP.NET (6/10) आपको आता है। अच्छी बात: ideas वही हैं, बस plumbing बदली है। आज का नक्शा: <b>hosting</b>, <b>Program.cs</b>, <b>middleware pipeline</b>, <b>configuration</b>, <b>logging</b>, <b>filters</b> और <b>Minimal API vs Controllers</b>।</p>
<ul>
<li><b>Hosting</b>: <code>WebApplication.CreateBuilder(args)</code> से <code>WebApplicationBuilder</code> मिलता है (services, configuration, logging register करो); <code>Build()</code> से <code>WebApplication</code> (middleware + endpoints); <code>Run()</code> उसे चालू करता है। <b>Kestrel</b> default server है। .NET 6 से एक <code>Program.cs</code> ने <code>Program.Main</code> + <code>Startup.cs</code> की जगह ले ली।</li>
<li><b>Middleware pipeline</b>: components की chain (Day 10, Chain of Responsibility)। हर एक को <code>next</code> मिलता है; <code>await next()</code> से पहले का code अंदर जाते समय चलता है, बाद का बाहर आते समय। <b>Order = Program.cs में calls का order</b>, इसलिए order मायने रखता है।</li>
<li><b><code>Use</code> / <code>Run</code> / <code>Map</code> / <code>MapWhen</code> / <code>UseWhen</code></b>: <code>Use</code> <code>next</code> बुला सकता है; <code>Run</code> terminal है; <code>Map</code> और <code>MapWhen</code> अलग branch बनाते हैं और वापस नहीं जुड़ते; <code>UseWhen</code> branch बनाकर वापस जुड़ता है। <b>Short-circuit</b> = <code>next</code> न बुलाना।</li>
<li><b>Authentication vs authorization</b>: <code>UseAuthentication</code> सिर्फ़ caller को पहचानता है (<code>HttpContext.User</code> set करता है) और <code>next</code> बुलाता है। फ़ैसला authorization step करता है: 401 (challenge) या 403 (forbid)।</li>
<li><b>Configuration</b>: providers की परतें, <b>आख़िरी जीतता है</b>: appsettings.json, appsettings.{Environment}.json, user secrets (Development), environment variables, command line। Sections को Options pattern से class में bind करो (Day 11)।</li>
<li><b>Environment और logging</b>: <code>ASPNETCORE_ENVIRONMENT</code> से Development/Staging/Production चुनते हैं (default Production)। <code>ILogger&lt;T&gt;</code> और <b>message templates</b> (<code>{OrderId}</code>) से log करो, string interpolation से नहीं।</li>
<li><b>DI</b>: हर request के लिए एक scope (<code>HttpContext.RequestServices</code>); lifetimes Day 11 में थे। <b>Filters</b> (authorization, resource, action, exception, result) MVC के अंदर चलते हैं और actions को जानते हैं; middleware हर request देखता है।</li>
<li><b>Minimal API vs Controllers</b>: दोनों production में ठीक हैं। Minimal APIs हल्के हैं और उनमें route groups, endpoint filters, <code>TypedResults</code> (.NET 7+) हैं; controllers में filters, model binding conventions और बड़ी teams के लिए structure मिलता है।</li>
</ul>`,
    hg: `<p>Aap ASP.NET Core ko 2/10 dete hain par classic ASP.NET (6/10) aapko aata hai. Achhi baat: ideas wahi hain, bas plumbing badli hai. Aaj ka naksha: <b>hosting</b>, <b>Program.cs</b>, <b>middleware pipeline</b>, <b>configuration</b>, <b>logging</b>, <b>filters</b> aur <b>Minimal API vs Controllers</b>.</p>
<ul>
<li><b>Hosting</b>: <code>WebApplication.CreateBuilder(args)</code> se <code>WebApplicationBuilder</code> milta hai (services, configuration, logging register karo); <code>Build()</code> se <code>WebApplication</code> (middleware + endpoints); <code>Run()</code> use chalu karta hai. <b>Kestrel</b> default server hai. .NET 6 se ek <code>Program.cs</code> ne <code>Program.Main</code> + <code>Startup.cs</code> ki jagah le li.</li>
<li><b>Middleware pipeline</b>: components ki chain (Day 10, Chain of Responsibility). Har ek ko <code>next</code> milta hai; <code>await next()</code> se pehle ka code andar jaate samay chalta hai, baad ka bahar aate samay. <b>Order = Program.cs mein calls ka order</b>, isliye order matter karta hai.</li>
<li><b><code>Use</code> / <code>Run</code> / <code>Map</code> / <code>MapWhen</code> / <code>UseWhen</code></b>: <code>Use</code> <code>next</code> bula sakta hai; <code>Run</code> terminal hai; <code>Map</code> aur <code>MapWhen</code> alag branch banate hain aur wapas nahi judte; <code>UseWhen</code> branch banakar wapas judta hai. <b>Short-circuit</b> = <code>next</code> na bulana.</li>
<li><b>Authentication vs authorization</b>: <code>UseAuthentication</code> sirf caller ko pehchanta hai (<code>HttpContext.User</code> set karta hai) aur <code>next</code> bulata hai. Faisla authorization step karta hai: 401 (challenge) ya 403 (forbid).</li>
<li><b>Configuration</b>: providers ki parten, <b>aakhri jeetta hai</b>: appsettings.json, appsettings.{Environment}.json, user secrets (Development), environment variables, command line. Sections ko Options pattern se class mein bind karo (Day 11).</li>
<li><b>Environment aur logging</b>: <code>ASPNETCORE_ENVIRONMENT</code> se Development/Staging/Production chunte hain (default Production). <code>ILogger&lt;T&gt;</code> aur <b>message templates</b> (<code>{OrderId}</code>) se log karo, string interpolation se nahi.</li>
<li><b>DI</b>: har request ke liye ek scope (<code>HttpContext.RequestServices</code>); lifetimes Day 11 mein the. <b>Filters</b> (authorization, resource, action, exception, result) MVC ke andar chalte hain aur actions ko jaante hain; middleware har request dekhta hai.</li>
<li><b>Minimal API vs Controllers</b>: dono production mein theek hain. Minimal APIs halke hain aur unmein route groups, endpoint filters, <code>TypedResults</code> (.NET 7+) hain; controllers mein filters, model binding conventions aur badi teams ke liye structure milta hai.</li>
</ul>`
  },
  sections: [
    {
      id: "hosting-overview",
      depth: "short",
      title: {
        en: "Hosting and Program.cs: what starts your app",
        hi: "Hosting और Program.cs: app कौन चालू करता है",
        hg: "Hosting aur Program.cs: app kaun chalu karta hai"
      },
      body: {
        en: `<p><b>Analogy — opening a restaurant:</b> <code>Program.cs</code> is the manager's opening checklist. First hire the staff (register services), then arrange the kitchen line (middleware order), then unlock the door (<code>Run</code>). The <b>host</b> is the restaurant building: it keeps the lights on (DI container, configuration, logging) while the app runs.</p>
<ul>
<li><b>The flow</b>: <code>WebApplication.CreateBuilder(args)</code> → <code>WebApplicationBuilder</code> (<code>Services</code>, <code>Configuration</code>, <code>Logging</code>, <code>Environment</code>) → <code>Build()</code> → <code>WebApplication</code> (add middleware, map endpoints) → <code>Run()</code>.</li>
<li><b>Generic host</b>: <code>WebApplication</code> is built on the same generic host used by worker services (<code>Host.CreateApplicationBuilder</code>), so DI, configuration and logging work the same everywhere.</li>
<li><b>Minimal hosting model (.NET 6+)</b>: one <code>Program.cs</code> with top-level statements. The old <code>Startup.cs</code> maps like this: <code>ConfigureServices</code> → <code>builder.Services.Add...</code>; <code>Configure</code> → <code>app.Use...</code> calls. A <code>Startup</code> class is still supported with the generic host, but new templates do not use it.</li>
<li><b>Kestrel</b>: the default cross-platform web server. It can face the internet or sit behind a reverse proxy (IIS, nginx, a cloud load balancer) that handles TLS and load balancing.</li>
<li><b>IIS</b>: <b>in-process</b> (the default on IIS since ASP.NET Core 3.0) runs your app inside the IIS worker process <code>w3wp.exe</code> with the IIS HTTP server; <b>out-of-process</b> keeps Kestrel in its own process and IIS forwards requests to it through the ASP.NET Core Module.</li>
<li><b>Classic bridge</b>: <code>Global.asax</code> <code>Application_Start</code> ≈ <code>Program.cs</code>; <b>HttpModules</b> ≈ middleware; <code>Web.config</code> appSettings and transforms ≈ <code>appsettings.json</code> and <code>appsettings.{Environment}.json</code>.</li>
</ul>`,
        hi: `<p><b>Analogy — restaurant खोलना:</b> <code>Program.cs</code> manager की opening checklist है। पहले staff रखो (services register करो), फिर kitchen line लगाओ (middleware order), फिर दरवाज़ा खोलो (<code>Run</code>)। <b>Host</b> restaurant की building है: app चलते समय वह बिजली चालू रखती है (DI container, configuration, logging)।</p>
<ul>
<li><b>Flow</b>: <code>WebApplication.CreateBuilder(args)</code> → <code>WebApplicationBuilder</code> (<code>Services</code>, <code>Configuration</code>, <code>Logging</code>, <code>Environment</code>) → <code>Build()</code> → <code>WebApplication</code> (middleware जोड़ो, endpoints map करो) → <code>Run()</code>।</li>
<li><b>Generic host</b>: <code>WebApplication</code> उसी generic host पर बना है जो worker services में चलता है (<code>Host.CreateApplicationBuilder</code>), इसलिए DI, configuration और logging हर जगह एक जैसे हैं।</li>
<li><b>Minimal hosting model (.NET 6+)</b>: top-level statements वाली एक <code>Program.cs</code>। पुरानी <code>Startup.cs</code> ऐसे map होती है: <code>ConfigureServices</code> → <code>builder.Services.Add...</code>; <code>Configure</code> → <code>app.Use...</code> calls। <code>Startup</code> class generic host के साथ अब भी चलती है, पर नए templates में नहीं है।</li>
<li><b>Kestrel</b>: default cross-platform web server। यह सीधे internet पर आ सकता है या reverse proxy (IIS, nginx, cloud load balancer) के पीछे रह सकता है जो TLS और load balancing संभालता है।</li>
<li><b>IIS</b>: <b>in-process</b> (ASP.NET Core 3.0 से IIS पर default) में app IIS के worker process <code>w3wp.exe</code> के अंदर IIS HTTP server के साथ चलती है; <b>out-of-process</b> में Kestrel अपने अलग process में रहता है और IIS ASP.NET Core Module से requests उसे भेजता है।</li>
<li><b>Classic से पुल</b>: <code>Global.asax</code> का <code>Application_Start</code> ≈ <code>Program.cs</code>; <b>HttpModules</b> ≈ middleware; <code>Web.config</code> के appSettings और transforms ≈ <code>appsettings.json</code> और <code>appsettings.{Environment}.json</code>।</li>
</ul>`,
        hg: `<p><b>Analogy — restaurant kholna:</b> <code>Program.cs</code> manager ki opening checklist hai. Pehle staff rakho (services register karo), phir kitchen line lagao (middleware order), phir darwaza kholo (<code>Run</code>). <b>Host</b> restaurant ki building hai: app chalte samay woh bijli chalu rakhti hai (DI container, configuration, logging).</p>
<ul>
<li><b>Flow</b>: <code>WebApplication.CreateBuilder(args)</code> → <code>WebApplicationBuilder</code> (<code>Services</code>, <code>Configuration</code>, <code>Logging</code>, <code>Environment</code>) → <code>Build()</code> → <code>WebApplication</code> (middleware jodo, endpoints map karo) → <code>Run()</code>.</li>
<li><b>Generic host</b>: <code>WebApplication</code> usi generic host par bana hai jo worker services mein chalta hai (<code>Host.CreateApplicationBuilder</code>), isliye DI, configuration aur logging har jagah ek jaise hain.</li>
<li><b>Minimal hosting model (.NET 6+)</b>: top-level statements wali ek <code>Program.cs</code>. Purani <code>Startup.cs</code> aise map hoti hai: <code>ConfigureServices</code> → <code>builder.Services.Add...</code>; <code>Configure</code> → <code>app.Use...</code> calls. <code>Startup</code> class generic host ke saath ab bhi chalti hai, par naye templates mein nahi hai.</li>
<li><b>Kestrel</b>: default cross-platform web server. Yeh seedha internet par aa sakta hai ya reverse proxy (IIS, nginx, cloud load balancer) ke peeche reh sakta hai jo TLS aur load balancing sambhalta hai.</li>
<li><b>IIS</b>: <b>in-process</b> (ASP.NET Core 3.0 se IIS par default) mein app IIS ke worker process <code>w3wp.exe</code> ke andar IIS HTTP server ke saath chalti hai; <b>out-of-process</b> mein Kestrel apne alag process mein rehta hai aur IIS ASP.NET Core Module se requests use bhejta hai.</li>
<li><b>Classic se pul</b>: <code>Global.asax</code> ka <code>Application_Start</code> ≈ <code>Program.cs</code>; <b>HttpModules</b> ≈ middleware; <code>Web.config</code> ke appSettings aur transforms ≈ <code>appsettings.json</code> aur <code>appsettings.{Environment}.json</code>.</li>
</ul>`
      }
    },
    {
      id: "middleware-overview",
      depth: "short",
      title: {
        en: "Middleware pipeline: order, short-circuit, Use / Run / Map",
        hi: "Middleware pipeline: order, short-circuit और Use / Run / Map",
        hg: "Middleware pipeline: order, short-circuit, Use / Run / Map"
      },
      body: {
        en: `<p><b>Analogy — railway station entry:</b> ticket check, then security scan, then the platform. Each gate can wave you through or stop you. When you leave, you pass the same gates in reverse. That is the pipeline, and it is the <b>Chain of Responsibility</b> from Day 10.</p>
<ul>
<li><b>Middleware</b> = a component that receives the <code>HttpContext</code> and a <code>next</code> delegate. Code <b>before</b> <code>await next()</code> runs on the way in; code <b>after</b> runs on the way out, in reverse order.</li>
<li><b>Order = order of the calls</b> in <code>Program.cs</code>. The exception handler goes first so it can catch errors from everything after it.</li>
<li><b>Use</b>: runs your code and may call <code>next</code>. <b>Run</b>: terminal, there is no <code>next</code>, so anything added after it is never reached. <b>Map</b>: branch by path prefix. <b>MapWhen</b>: branch by any condition. <code>Map</code> and <code>MapWhen</code> do not rejoin the main pipeline; <b>UseWhen</b> branches and then rejoins.</li>
<li><b>Short-circuit</b>: not calling <code>next</code>. Later middleware and the endpoint are skipped, but the earlier middleware still runs its "after" code. Static files, failed authorization and rate limiting are typical short-circuits.</li>
<li><b>Usual order</b> (from the Microsoft docs): exception handling → HSTS → HTTPS redirection → static files → routing → CORS → authentication → authorization → your custom middleware → endpoints. CORS and rate limiting arrive in Day 13.</li>
<li><b>Be exact about security</b>: <code>UseAuthentication</code> runs the authentication handlers, sets <code>HttpContext.User</code> and calls <code>next</code>; it does not reject anyone. The authorization step (<code>UseAuthorization</code> plus the endpoint's policy) answers <b>401</b> when the caller is not authenticated and <b>403</b> when authenticated but not allowed. In the docs order, <code>UseAuthentication</code> comes before <code>UseAuthorization</code>.</li>
</ul>`,
        hi: `<p><b>Analogy — railway station में entry:</b> पहले ticket check, फिर security scan, फिर platform। हर gate आपको जाने दे सकता है या रोक सकता है। लौटते समय वही gates उल्टे क्रम में आते हैं। यही pipeline है, और यही Day 10 वाला <b>Chain of Responsibility</b> है।</p>
<ul>
<li><b>Middleware</b> = ऐसा component जिसे <code>HttpContext</code> और <code>next</code> delegate मिलता है। <code>await next()</code> से <b>पहले</b> का code अंदर जाते समय चलता है; <b>बाद</b> का code बाहर आते समय, उल्टे क्रम में।</li>
<li><b>Order = calls का order</b>, <code>Program.cs</code> में। Exception handler सबसे पहले लगता है ताकि वह उसके बाद की हर चीज़ के errors पकड़ सके।</li>
<li><b>Use</b>: आपका code चलाता है और <code>next</code> बुला सकता है। <b>Run</b>: terminal, इसमें <code>next</code> नहीं होता, इसलिए उसके बाद जोड़ा गया कुछ भी कभी नहीं पहुँचता। <b>Map</b>: path prefix से branch। <b>MapWhen</b>: किसी भी condition से branch। <code>Map</code> और <code>MapWhen</code> main pipeline में वापस नहीं जुड़ते; <b>UseWhen</b> branch बनाकर वापस जुड़ता है।</li>
<li><b>Short-circuit</b>: <code>next</code> न बुलाना। बाद के middleware और endpoint skip हो जाते हैं, पर पहले वाले middleware अपना "after" code फिर भी चलाते हैं। Static files, failed authorization और rate limiting आम short-circuits हैं।</li>
<li><b>आम order</b> (Microsoft docs से): exception handling → HSTS → HTTPS redirection → static files → routing → CORS → authentication → authorization → आपका custom middleware → endpoints। CORS और rate limiting Day 13 में आएँगे।</li>
<li><b>Security में सटीक रहो</b>: <code>UseAuthentication</code> authentication handlers चलाता है, <code>HttpContext.User</code> set करता है और <code>next</code> बुलाता है; वह किसी को reject नहीं करता। Authorization step (<code>UseAuthorization</code> और endpoint की policy) <b>401</b> देता है जब caller authenticated नहीं है और <b>403</b> जब authenticated है पर allowed नहीं। Docs के order में <code>UseAuthentication</code>, <code>UseAuthorization</code> से पहले आता है।</li>
</ul>`,
        hg: `<p><b>Analogy — railway station mein entry:</b> pehle ticket check, phir security scan, phir platform. Har gate aapko jaane de sakta hai ya rok sakta hai. Lautte samay wahi gates ulte kram mein aate hain. Yahi pipeline hai, aur yahi Day 10 wala <b>Chain of Responsibility</b> hai.</p>
<ul>
<li><b>Middleware</b> = aisa component jise <code>HttpContext</code> aur <code>next</code> delegate milta hai. <code>await next()</code> se <b>pehle</b> ka code andar jaate samay chalta hai; <b>baad</b> ka code bahar aate samay, ulte kram mein.</li>
<li><b>Order = calls ka order</b>, <code>Program.cs</code> mein. Exception handler sabse pehle lagta hai taaki woh uske baad ki har cheez ke errors pakad sake.</li>
<li><b>Use</b>: aapka code chalata hai aur <code>next</code> bula sakta hai. <b>Run</b>: terminal, ismein <code>next</code> nahi hota, isliye uske baad joda gaya kuch bhi kabhi nahi pahunchta. <b>Map</b>: path prefix se branch. <b>MapWhen</b>: kisi bhi condition se branch. <code>Map</code> aur <code>MapWhen</code> main pipeline mein wapas nahi judte; <b>UseWhen</b> branch banakar wapas judta hai.</li>
<li><b>Short-circuit</b>: <code>next</code> na bulana. Baad ke middleware aur endpoint skip ho jaate hain, par pehle wale middleware apna "after" code phir bhi chalate hain. Static files, failed authorization aur rate limiting aam short-circuits hain.</li>
<li><b>Aam order</b> (Microsoft docs se): exception handling → HSTS → HTTPS redirection → static files → routing → CORS → authentication → authorization → aapka custom middleware → endpoints. CORS aur rate limiting Day 13 mein aayenge.</li>
<li><b>Security mein sateek raho</b>: <code>UseAuthentication</code> authentication handlers chalata hai, <code>HttpContext.User</code> set karta hai aur <code>next</code> bulata hai; woh kisi ko reject nahi karta. Authorization step (<code>UseAuthorization</code> aur endpoint ki policy) <b>401</b> deta hai jab caller authenticated nahi hai aur <b>403</b> jab authenticated hai par allowed nahi. Docs ke order mein <code>UseAuthentication</code>, <code>UseAuthorization</code> se pehle aata hai.</li>
</ul>`
      }
    },
    {
      id: "config-env-logging-overview",
      depth: "short",
      title: {
        en: "Configuration, environments and logging",
        hi: "Configuration, environments और logging",
        hg: "Configuration, environments aur logging"
      },
      body: {
        en: `<p><b>Analogy — school rules:</b> the school has a general rule (appsettings.json), your class adds its own (appsettings.Development.json), and today's teacher can say "not today" (environment variable or command line). The most specific, latest instruction wins.</p>
<ul>
<li><b>Configuration providers</b> are layered. With <code>WebApplication.CreateBuilder</code>, the later source overrides the earlier one: <b>appsettings.json → appsettings.{Environment}.json → user secrets (only in Development) → environment variables → command-line arguments</b>.</li>
<li><b>Keys</b> are hierarchical and case-insensitive: <code>Shop:Currency</code> in JSON is <code>Shop__Currency</code> as an environment variable (double underscore) and <code>--Shop:Currency=USD</code> on the command line. Read with <code>IConfiguration</code> (<code>GetSection</code>, <code>GetValue</code>, <code>GetConnectionString</code>) or bind to a class with the Options pattern (Day 11).</li>
<li><b>Secrets</b>: user secrets are for local development only (stored in your user profile, outside the repo, not encrypted). In production use environment variables or a secret store such as Azure Key Vault.</li>
<li><b>Environments</b>: <code>ASPNETCORE_ENVIRONMENT</code> (or <code>DOTNET_ENVIRONMENT</code>) selects Development, Staging or Production; if nothing is set the app runs as <b>Production</b>. Use <code>app.Environment.IsDevelopment()</code> for behaviour such as detailed error pages. Think of it as the classic <code>Web.config</code> transform, minus the XML.</li>
<li><b>Logging</b>: ask for <code>ILogger&lt;T&gt;</code> through DI; the <b>category</b> is the full name of <code>T</code>. Levels from low to high: Trace, Debug, Information, Warning, Error, Critical. Minimum levels are set per category in the <code>Logging:LogLevel</code> configuration section.</li>
<li><b>Message templates</b>: <code>logger.LogInformation("Order {OrderId} shipped", id)</code> keeps <code>OrderId</code> as a named value that log tools can search and filter. Interpolation (<code>$"..."</code>) throws that structure away and always builds the string, even when the level is off.</li>
</ul>`,
        hi: `<p><b>Analogy — school के rules:</b> school का एक general rule है (appsettings.json), आपकी class अपना जोड़ती है (appsettings.Development.json), और आज का teacher कह सकता है "आज नहीं" (environment variable या command line)। सबसे specific और सबसे ताज़ा instruction जीतता है।</p>
<ul>
<li><b>Configuration providers</b> परतों में हैं। <code>WebApplication.CreateBuilder</code> के साथ, बाद वाला source पहले वाले को override करता है: <b>appsettings.json → appsettings.{Environment}.json → user secrets (सिर्फ़ Development में) → environment variables → command-line arguments</b>।</li>
<li><b>Keys</b> hierarchical और case-insensitive हैं: JSON का <code>Shop:Currency</code> environment variable में <code>Shop__Currency</code> (double underscore) और command line पर <code>--Shop:Currency=USD</code> होता है। <code>IConfiguration</code> (<code>GetSection</code>, <code>GetValue</code>, <code>GetConnectionString</code>) से पढ़ो या Options pattern से class में bind करो (Day 11)।</li>
<li><b>Secrets</b>: user secrets सिर्फ़ local development के लिए हैं (आपके user profile में, repo के बाहर, encrypted नहीं)। Production में environment variables या Azure Key Vault जैसा secret store use करो।</li>
<li><b>Environments</b>: <code>ASPNETCORE_ENVIRONMENT</code> (या <code>DOTNET_ENVIRONMENT</code>) Development, Staging या Production चुनता है; कुछ set न हो तो app <b>Production</b> की तरह चलती है। Detailed error pages जैसे behaviour के लिए <code>app.Environment.IsDevelopment()</code> use करो। इसे classic <code>Web.config</code> transform समझो, बिना XML के।</li>
<li><b>Logging</b>: DI से <code>ILogger&lt;T&gt;</code> माँगो; <b>category</b> <code>T</code> का पूरा नाम होता है। Levels छोटे से बड़े: Trace, Debug, Information, Warning, Error, Critical। Minimum levels <code>Logging:LogLevel</code> section में category के हिसाब से तय होते हैं।</li>
<li><b>Message templates</b>: <code>logger.LogInformation("Order {OrderId} shipped", id)</code> में <code>OrderId</code> एक named value रहता है जिसे log tools search और filter कर सकते हैं। Interpolation (<code>$"..."</code>) वह structure फेंक देता है और string हमेशा बनाता है, level बंद हो तब भी।</li>
</ul>`,
        hg: `<p><b>Analogy — school ke rules:</b> school ka ek general rule hai (appsettings.json), aapki class apna jodti hai (appsettings.Development.json), aur aaj ka teacher keh sakta hai "aaj nahi" (environment variable ya command line). Sabse specific aur sabse taaza instruction jeetta hai.</p>
<ul>
<li><b>Configuration providers</b> partein hain. <code>WebApplication.CreateBuilder</code> ke saath, baad wala source pehle wale ko override karta hai: <b>appsettings.json → appsettings.{Environment}.json → user secrets (sirf Development mein) → environment variables → command-line arguments</b>.</li>
<li><b>Keys</b> hierarchical aur case-insensitive hain: JSON ka <code>Shop:Currency</code> environment variable mein <code>Shop__Currency</code> (double underscore) aur command line par <code>--Shop:Currency=USD</code> hota hai. <code>IConfiguration</code> (<code>GetSection</code>, <code>GetValue</code>, <code>GetConnectionString</code>) se padho ya Options pattern se class mein bind karo (Day 11).</li>
<li><b>Secrets</b>: user secrets sirf local development ke liye hain (aapke user profile mein, repo ke bahar, encrypted nahi). Production mein environment variables ya Azure Key Vault jaisa secret store use karo.</li>
<li><b>Environments</b>: <code>ASPNETCORE_ENVIRONMENT</code> (ya <code>DOTNET_ENVIRONMENT</code>) Development, Staging ya Production chunta hai; kuch set na ho to app <b>Production</b> ki tarah chalti hai. Detailed error pages jaise behaviour ke liye <code>app.Environment.IsDevelopment()</code> use karo. Ise classic <code>Web.config</code> transform samjho, bina XML ke.</li>
<li><b>Logging</b>: DI se <code>ILogger&lt;T&gt;</code> maango; <b>category</b> <code>T</code> ka poora naam hota hai. Levels chhote se bade: Trace, Debug, Information, Warning, Error, Critical. Minimum levels <code>Logging:LogLevel</code> section mein category ke hisaab se tay hote hain.</li>
<li><b>Message templates</b>: <code>logger.LogInformation("Order {OrderId} shipped", id)</code> mein <code>OrderId</code> ek named value rehta hai jise log tools search aur filter kar sakte hain. Interpolation (<code>$"..."</code>) woh structure phenk deta hai aur string hamesha banata hai, level band ho tab bhi.</li>
</ul>`
      }
    },
    {
      id: "di-filters-apis-overview",
      depth: "short",
      title: {
        en: "DI per request, filters, and Minimal API vs Controllers",
        hi: "हर request में DI, filters, और Minimal API vs Controllers",
        hg: "Har request mein DI, filters, aur Minimal API vs Controllers"
      },
      body: {
        en: `<p><b>Analogy — a mall:</b> middleware is the mall's main gate and security, which every visitor passes, even someone only walking to the parking lot. Filters are the rules inside one shop (the MVC shop): they only apply to people who walk into that shop, and they know what the customer is buying (the action).</p>
<ul>
<li><b>DI per request</b>: register in <code>builder.Services</code>; the framework creates one scope per request, available as <code>HttpContext.RequestServices</code>. Scoped services (such as <code>DbContext</code>) live for that request. Lifetimes and captive dependencies are Day 11; do not repeat them here, just apply them.</li>
<li><b>Filter types and order</b>: <b>authorization → resource → action → exception → result</b>. Authorization filters run first and can stop everything. Resource filters wrap the rest (and run again on the way out). Action filters run around your action method. Exception filters handle exceptions thrown by actions and action filters. Result filters run around the execution of the result.</li>
<li><b>Filters vs middleware</b>: middleware works for every request (static files, health checks, any endpoint) and knows only <code>HttpContext</code>. Filters run only for MVC actions (controllers, Razor Pages) and can see the action, model-binding results and <code>ModelState</code>. Use middleware for cross-cutting HTTP concerns; use a filter when you need action-level context.</li>
<li><b>Minimal API</b>: <code>app.MapGet("/x", handler)</code>; less ceremony, good for small services and microservices. <b>Controllers</b>: classes with attributes, filters and conventions; good for large APIs with many endpoints and teams. Both run on the same pipeline and performance is rarely the reason to choose.</li>
<li><b>.NET 7+ for Minimal APIs</b>: <code>MapGroup</code> (shared prefix and filters), <b>endpoint filters</b> (<code>AddEndpointFilter</code>, like action filters for endpoints) and <code>TypedResults</code> (compile-time-checked return types).</li>
<li><b>Web API topics</b> (ProblemDetails, JWT, CORS, caching, rate limiting, OpenAPI) come in Day 13.</li>
</ul>`,
        hi: `<p><b>Analogy — mall:</b> middleware mall का main gate और security है, जिससे हर visitor गुज़रता है, parking की तरफ़ जाने वाला भी। Filters एक दुकान (MVC की दुकान) के अंदर के rules हैं: वे सिर्फ़ उसी दुकान में आने वालों पर लगते हैं, और उन्हें पता होता है कि customer क्या ख़रीद रहा है (action)।</p>
<ul>
<li><b>हर request में DI</b>: <code>builder.Services</code> में register करो; framework हर request के लिए एक scope बनाता है, जो <code>HttpContext.RequestServices</code> से मिलता है। Scoped services (जैसे <code>DbContext</code>) उसी request तक जीती हैं। Lifetimes और captive dependencies Day 11 में हैं; यहाँ दोहराना नहीं, बस लगाना है।</li>
<li><b>Filter types और order</b>: <b>authorization → resource → action → exception → result</b>। Authorization filters सबसे पहले चलते हैं और सब कुछ रोक सकते हैं। Resource filters बाक़ी सबको लपेटते हैं (और बाहर आते समय फिर चलते हैं)। Action filters आपके action method के आसपास चलते हैं। Exception filters actions और action filters के exceptions संभालते हैं। Result filters result के execution के आसपास चलते हैं।</li>
<li><b>Filters vs middleware</b>: middleware हर request के लिए काम करता है (static files, health checks, कोई भी endpoint) और सिर्फ़ <code>HttpContext</code> जानता है। Filters सिर्फ़ MVC actions (controllers, Razor Pages) के लिए चलते हैं और action, model-binding results और <code>ModelState</code> देख सकते हैं। Cross-cutting HTTP काम के लिए middleware; action-level context चाहिए तो filter।</li>
<li><b>Minimal API</b>: <code>app.MapGet("/x", handler)</code>; कम ceremony, छोटी services और microservices के लिए अच्छा। <b>Controllers</b>: attributes, filters और conventions वाली classes; कई endpoints और teams वाली बड़ी APIs के लिए अच्छा। दोनों एक ही pipeline पर चलते हैं और चुनने की वजह शायद ही performance होती है।</li>
<li><b>Minimal APIs के लिए .NET 7+</b>: <code>MapGroup</code> (साझा prefix और filters), <b>endpoint filters</b> (<code>AddEndpointFilter</code>, endpoints के लिए action filters जैसे) और <code>TypedResults</code> (compile-time checked return types)।</li>
<li><b>Web API के topics</b> (ProblemDetails, JWT, CORS, caching, rate limiting, OpenAPI) Day 13 में आएँगे।</li>
</ul>`,
        hg: `<p><b>Analogy — mall:</b> middleware mall ka main gate aur security hai, jisse har visitor guzarta hai, parking ki taraf jaane wala bhi. Filters ek dukaan (MVC ki dukaan) ke andar ke rules hain: woh sirf usi dukaan mein aane walon par lagte hain, aur unhe pata hota hai ki customer kya kharid raha hai (action).</p>
<ul>
<li><b>Har request mein DI</b>: <code>builder.Services</code> mein register karo; framework har request ke liye ek scope banata hai, jo <code>HttpContext.RequestServices</code> se milta hai. Scoped services (jaise <code>DbContext</code>) usi request tak jeeti hain. Lifetimes aur captive dependencies Day 11 mein hain; yahan dohrana nahi, bas lagana hai.</li>
<li><b>Filter types aur order</b>: <b>authorization → resource → action → exception → result</b>. Authorization filters sabse pehle chalte hain aur sab kuch rok sakte hain. Resource filters baaki sabko lapetate hain (aur bahar aate samay phir chalte hain). Action filters aapke action method ke aaspaas chalte hain. Exception filters actions aur action filters ke exceptions sambhalte hain. Result filters result ke execution ke aaspaas chalte hain.</li>
<li><b>Filters vs middleware</b>: middleware har request ke liye kaam karta hai (static files, health checks, koi bhi endpoint) aur sirf <code>HttpContext</code> jaanta hai. Filters sirf MVC actions (controllers, Razor Pages) ke liye chalte hain aur action, model-binding results aur <code>ModelState</code> dekh sakte hain. Cross-cutting HTTP kaam ke liye middleware; action-level context chahiye to filter.</li>
<li><b>Minimal API</b>: <code>app.MapGet("/x", handler)</code>; kam ceremony, chhoti services aur microservices ke liye achha. <b>Controllers</b>: attributes, filters aur conventions wali classes; kai endpoints aur teams wali badi APIs ke liye achha. Dono ek hi pipeline par chalte hain aur chunne ki wajah shayad hi performance hoti hai.</li>
<li><b>Minimal APIs ke liye .NET 7+</b>: <code>MapGroup</code> (saajha prefix aur filters), <b>endpoint filters</b> (<code>AddEndpointFilter</code>, endpoints ke liye action filters jaise) aur <code>TypedResults</code> (compile-time checked return types).</li>
<li><b>Web API ke topics</b> (ProblemDetails, JWT, CORS, caching, rate limiting, OpenAPI) Day 13 mein aayenge.</li>
</ul>`
      }
    },
    {
      id: "program-in-code",
      depth: "detailed",
      title: {
        en: "Program.cs in code, and the old Startup.cs",
        hi: "Program.cs code में, और पुरानी Startup.cs",
        hg: "Program.cs code mein, aur purani Startup.cs"
      },
      body: {
        en: `<p><b>Analogy — same house, fewer doors:</b> the old layout had two rooms (<code>Program.Main</code> to start the host, <code>Startup.cs</code> to configure it). The new layout is one hall (<code>Program.cs</code>) with three clear corners: shopping list (services), kitchen line (middleware), menu (endpoints).</p>
<ul>
<li><b>Three steps</b> in every <code>Program.cs</code>: (1) register services on <code>builder.Services</code>; (2) <code>Build()</code> and add middleware in the right order; (3) map endpoints, then <code>Run()</code>.</li>
<li><b>Environment-aware pipeline</b>: in Development the <code>WebApplication</code> already adds the developer exception page; in other environments add <code>UseExceptionHandler</code> and <code>UseHsts</code> yourself.</li>
<li><b>Startup.cs bridge</b>: <code>ConfigureServices(IServiceCollection)</code> becomes <code>builder.Services...</code>; <code>Configure(IApplicationBuilder, IWebHostEnvironment)</code> becomes the <code>app.Use...</code> calls. Existing apps with <code>Startup</code> keep working with the generic host, so you rarely need to rewrite them just for fashion.</li>
<li><b>Interview angle</b>: if asked "how do you migrate a classic MVC app?", mention the mapping (<code>Global.asax</code> → <code>Program.cs</code>, <code>HttpModule</code> → middleware, <code>Web.config</code> → <code>appsettings.json</code> and environment variables, <code>System.Web</code> → <code>HttpContext</code> abstractions) and a step-by-step plan rather than a big-bang rewrite.</li>
</ul>
<p><b>When to use / when not:</b> use the minimal hosting model for all new apps. Keep an existing <code>Startup</code> class if the app is stable and the team is comfortable with it. Do not put business logic in <code>Program.cs</code>; move heavy registration into extension methods such as <code>AddShopServices()</code> so the file stays readable.</p>`,
        hi: `<p><b>Analogy — वही घर, कम दरवाज़े:</b> पुराने layout में दो कमरे थे (host शुरू करने के लिए <code>Program.Main</code>, उसे configure करने के लिए <code>Startup.cs</code>)। नया layout एक hall है (<code>Program.cs</code>) जिसमें तीन साफ़ कोने हैं: ख़रीदारी की list (services), kitchen line (middleware), menu (endpoints)।</p>
<ul>
<li>हर <code>Program.cs</code> में <b>तीन steps</b>: (1) <code>builder.Services</code> पर services register करो; (2) <code>Build()</code> करके middleware सही order में जोड़ो; (3) endpoints map करो, फिर <code>Run()</code>।</li>
<li><b>Environment-aware pipeline</b>: Development में <code>WebApplication</code> developer exception page पहले से जोड़ देता है; दूसरे environments में <code>UseExceptionHandler</code> और <code>UseHsts</code> आप ख़ुद जोड़ो।</li>
<li><b>Startup.cs से पुल</b>: <code>ConfigureServices(IServiceCollection)</code> बन जाता है <code>builder.Services...</code>; <code>Configure(IApplicationBuilder, IWebHostEnvironment)</code> बन जाता है <code>app.Use...</code> calls। <code>Startup</code> वाली मौजूदा apps generic host के साथ चलती रहती हैं, इसलिए सिर्फ़ फ़ैशन के लिए rewrite की ज़रूरत कम ही होती है।</li>
<li><b>Interview angle</b>: अगर पूछा जाए "classic MVC app कैसे migrate करोगे?", तो mapping बताओ (<code>Global.asax</code> → <code>Program.cs</code>, <code>HttpModule</code> → middleware, <code>Web.config</code> → <code>appsettings.json</code> और environment variables, <code>System.Web</code> → <code>HttpContext</code> abstractions) और step-by-step plan बताओ, big-bang rewrite नहीं।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> सारी नई apps के लिए minimal hosting model use करो। app stable हो और team सहज हो तो मौजूदा <code>Startup</code> class रखो। <code>Program.cs</code> में business logic मत डालो; भारी registration को <code>AddShopServices()</code> जैसे extension methods में ले जाओ ताकि file पढ़ने लायक रहे।</p>`,
        hg: `<p><b>Analogy — wahi ghar, kam darwaze:</b> purane layout mein do kamre the (host shuru karne ke liye <code>Program.Main</code>, use configure karne ke liye <code>Startup.cs</code>). Naya layout ek hall hai (<code>Program.cs</code>) jismein teen saaf kone hain: kharidari ki list (services), kitchen line (middleware), menu (endpoints).</p>
<ul>
<li>Har <code>Program.cs</code> mein <b>teen steps</b>: (1) <code>builder.Services</code> par services register karo; (2) <code>Build()</code> karke middleware sahi order mein jodo; (3) endpoints map karo, phir <code>Run()</code>.</li>
<li><b>Environment-aware pipeline</b>: Development mein <code>WebApplication</code> developer exception page pehle se jod deta hai; doosre environments mein <code>UseExceptionHandler</code> aur <code>UseHsts</code> aap khud jodo.</li>
<li><b>Startup.cs se pul</b>: <code>ConfigureServices(IServiceCollection)</code> ban jaata hai <code>builder.Services...</code>; <code>Configure(IApplicationBuilder, IWebHostEnvironment)</code> ban jaata hai <code>app.Use...</code> calls. <code>Startup</code> wali maujooda apps generic host ke saath chalti rehti hain, isliye sirf fashion ke liye rewrite ki zaroorat kam hi hoti hai.</li>
<li><b>Interview angle</b>: agar pucha jaye "classic MVC app kaise migrate karoge?", to mapping batao (<code>Global.asax</code> → <code>Program.cs</code>, <code>HttpModule</code> → middleware, <code>Web.config</code> → <code>appsettings.json</code> aur environment variables, <code>System.Web</code> → <code>HttpContext</code> abstractions) aur step-by-step plan batao, big-bang rewrite nahi.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> saari nayi apps ke liye minimal hosting model use karo. App stable ho aur team sahaj ho to maujooda <code>Startup</code> class rakho. <code>Program.cs</code> mein business logic mat daalo; bhari registration ko <code>AddShopServices()</code> jaise extension methods mein le jao taaki file padhne layak rahe.</p>`
      },
      code: [
        {
          caption: {
            en: "Minimal hosting Program.cs: services, pipeline order, endpoints (compile-checked, not run)",
            hi: "Minimal hosting Program.cs: services, pipeline order, endpoints (compile-checked, run नहीं)",
            hg: "Minimal hosting Program.cs: services, pipeline order, endpoints (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// 1. Register services (the old Startup.ConfigureServices)
builder.Services.AddScoped<IGreeter, Greeter>();
builder.Services.AddAuthentication().AddCookie();
builder.Services.AddAuthorization();

var app = builder.Build();

// 2. Build the pipeline (the old Startup.Configure): the order matters
if (!app.Environment.IsDevelopment())
{
    // In Development, WebApplication already adds the developer exception page
    app.UseExceptionHandler("/error");
    app.UseHsts();
}
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAuthentication();   // who is calling? sets HttpContext.User, then calls next
app.UseAuthorization();    // is that caller allowed? 401 / 403 happen here

// 3. Map endpoints
app.MapGet("/error", () => Results.Text("Something went wrong", statusCode: 500));
app.MapGet("/hello", (IGreeter greeter) => greeter.Greet("Pankaj"));
app.MapGet("/admin", () => "admin area").RequireAuthorization();

app.Run();

public interface IGreeter { string Greet(string name); }
public class Greeter : IGreeter { public string Greet(string name) => $"Namaste, {name}"; }`
        },
        {
          caption: {
            en: "The same idea with the old Startup class (still supported with the generic host)",
            hi: "वही idea पुरानी Startup class के साथ (generic host के साथ अब भी supported)",
            hg: "Wahi idea purani Startup class ke saath (generic host ke saath ab bhi supported)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

public static class Program
{
    public static void Main(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(web => web.UseStartup<Startup>())
            .Build()
            .Run();
}

public class Startup
{
    // was: services registration
    public void ConfigureServices(IServiceCollection services) => services.AddControllers();

    // was: the middleware pipeline
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseRouting();
        app.UseAuthorization();
        app.UseEndpoints(endpoints => endpoints.MapControllers());
    }
}`
        }
      ]
    },
    {
      id: "middleware-in-code",
      depth: "detailed",
      title: {
        en: "Writing middleware: inline, convention class, IMiddleware",
        hi: "Middleware लिखना: inline, convention class, IMiddleware",
        hg: "Middleware likhna: inline, convention class, IMiddleware"
      },
      body: {
        en: `<p><b>Analogy — a toll booth on a highway:</b> a quick traffic cone is an inline rule; a proper booth with staff is a class. Either way, each vehicle passes through and the booth decides: wave through (<code>next</code>) or stop (short-circuit).</p>
<ul>
<li><b>Inline</b>: <code>app.Use(async (context, next) =&gt; { ...; await next(); ...; })</code>. Best for tiny, one-off logic. Remember that headers cannot be changed once the response has started; use <code>Response.OnStarting</code> for "add a header on the way out".</li>
<li><b>Convention-based class</b>: constructor takes <code>RequestDelegate next</code> (plus singleton-safe services); method <code>InvokeAsync(HttpContext context, ...)</code> may take <b>scoped</b> services as extra parameters. The instance is created once, so a scoped service in the <i>constructor</i> would be captured (the captive dependency from Day 11). Register with <code>app.UseMiddleware&lt;T&gt;()</code>.</li>
<li><b><code>IMiddleware</code></b>: a class implementing <code>InvokeAsync(HttpContext, RequestDelegate)</code>. It is created by <code>IMiddlewareFactory</code> from the DI container, so you must register it (for example <code>AddTransient</code>) and its lifetime decides how often it is created; a scoped or transient registration can take scoped services in the constructor.</li>
<li><b>Extension method</b>: wrap registration as <code>UseApiKeyGate(...)</code> so Program.cs reads like a story.</li>
<li><b>Branching</b>: <code>UseWhen</code> applies a middleware only to some requests and then continues with the rest of the pipeline (the snippet below uses it); <code>Map</code> / <code>MapWhen</code> send matching requests to a separate branch that does not come back.</li>
<li><b>Async</b>: remember to <code>await next()</code> (Day 3). Forgetting the <code>await</code> lets the pipeline return before the rest has finished.</li>
</ul>
<p><b>When to use / when not:</b> use middleware for HTTP cross-cutting work that applies to many endpoints: correlation IDs, request logging, security headers, API-key gates. Do not use it for business rules, and do not use it when you need action-level information such as model-binding results; a filter fits that better. Avoid reading the request body in middleware unless you buffer it, because the stream is normally read once.</p>`,
        hi: `<p><b>Analogy — highway का toll booth:</b> traffic cone एक inline rule है; staff वाला पक्का booth एक class। दोनों में हर गाड़ी गुज़रती है और booth तय करता है: जाने दो (<code>next</code>) या रोको (short-circuit)।</p>
<ul>
<li><b>Inline</b>: <code>app.Use(async (context, next) =&gt; { ...; await next(); ...; })</code>। छोटे, एक बार के logic के लिए सबसे अच्छा। याद रखो कि response शुरू होने के बाद headers नहीं बदले जा सकते; "बाहर जाते समय header जोड़ना" हो तो <code>Response.OnStarting</code> use करो।</li>
<li><b>Convention-based class</b>: constructor में <code>RequestDelegate next</code> आता है (और singleton-safe services); <code>InvokeAsync(HttpContext context, ...)</code> method में <b>scoped</b> services अतिरिक्त parameters की तरह आ सकती हैं। instance एक बार बनता है, इसलिए <i>constructor</i> में scoped service पकड़ी जाएगी (Day 11 वाली captive dependency)। <code>app.UseMiddleware&lt;T&gt;()</code> से register करो।</li>
<li><b><code>IMiddleware</code></b>: ऐसी class जो <code>InvokeAsync(HttpContext, RequestDelegate)</code> implement करती है। इसे <code>IMiddlewareFactory</code> DI container से बनाता है, इसलिए इसे register करना पड़ता है (जैसे <code>AddTransient</code>) और उसकी lifetime तय करती है कि कितनी बार बने; scoped या transient registration constructor में scoped services ले सकती है।</li>
<li><b>Extension method</b>: registration को <code>UseApiKeyGate(...)</code> की तरह लपेटो ताकि Program.cs कहानी की तरह पढ़ा जाए।</li>
<li><b>Branching</b>: <code>UseWhen</code> middleware सिर्फ़ कुछ requests पर लगाता है और फिर बाक़ी pipeline चलती है (नीचे का snippet इसे use करता है); <code>Map</code> / <code>MapWhen</code> matching requests को अलग branch में भेजते हैं जो वापस नहीं आता।</li>
<li><b>Async</b>: <code>await next()</code> करना याद रखो (Day 3)। <code>await</code> भूलने पर बाक़ी काम पूरा होने से पहले pipeline लौट जाती है।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> कई endpoints पर लगने वाले HTTP cross-cutting काम के लिए middleware use करो: correlation IDs, request logging, security headers, API-key gates। Business rules के लिए नहीं, और जब action-level जानकारी (जैसे model-binding results) चाहिए तब भी नहीं; वहाँ filter बेहतर है। Request body को middleware में तब तक मत पढ़ो जब तक buffer न करो, क्योंकि stream आम तौर पर एक बार ही पढ़ा जाता है।</p>`,
        hg: `<p><b>Analogy — highway ka toll booth:</b> traffic cone ek inline rule hai; staff wala pakka booth ek class. Dono mein har gaadi guzarti hai aur booth tay karta hai: jaane do (<code>next</code>) ya roko (short-circuit).</p>
<ul>
<li><b>Inline</b>: <code>app.Use(async (context, next) =&gt; { ...; await next(); ...; })</code>. Chhote, ek baar ke logic ke liye sabse achha. Yaad rakho ki response shuru hone ke baad headers nahi badle ja sakte; "bahar jaate samay header jodna" ho to <code>Response.OnStarting</code> use karo.</li>
<li><b>Convention-based class</b>: constructor mein <code>RequestDelegate next</code> aata hai (aur singleton-safe services); <code>InvokeAsync(HttpContext context, ...)</code> method mein <b>scoped</b> services extra parameters ki tarah aa sakti hain. Instance ek baar banta hai, isliye <i>constructor</i> mein scoped service pakdi jayegi (Day 11 wali captive dependency). <code>app.UseMiddleware&lt;T&gt;()</code> se register karo.</li>
<li><b><code>IMiddleware</code></b>: aisi class jo <code>InvokeAsync(HttpContext, RequestDelegate)</code> implement karti hai. Ise <code>IMiddlewareFactory</code> DI container se banata hai, isliye ise register karna padta hai (jaise <code>AddTransient</code>) aur uski lifetime tay karti hai ki kitni baar bane; scoped ya transient registration constructor mein scoped services le sakti hai.</li>
<li><b>Extension method</b>: registration ko <code>UseApiKeyGate(...)</code> ki tarah lapeto taaki Program.cs kahani ki tarah padha jaye.</li>
<li><b>Branching</b>: <code>UseWhen</code> middleware sirf kuch requests par lagata hai aur phir baaki pipeline chalti hai (neeche ka snippet ise use karta hai); <code>Map</code> / <code>MapWhen</code> matching requests ko alag branch mein bhejte hain jo wapas nahi aata.</li>
<li><b>Async</b>: <code>await next()</code> karna yaad rakho (Day 3). <code>await</code> bhoolne par baaki kaam poora hone se pehle pipeline laut jaati hai.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> kai endpoints par lagne wale HTTP cross-cutting kaam ke liye middleware use karo: correlation IDs, request logging, security headers, API-key gates. Business rules ke liye nahi, aur jab action-level jaankari (jaise model-binding results) chahiye tab bhi nahi; wahan filter behtar hai. Request body ko middleware mein tab tak mat padho jab tak buffer na karo, kyunki stream aam taur par ek baar hi padha jaata hai.</p>`
      },
      code: [
        {
          caption: {
            en: "Three ways to write middleware (compile-checked, not run)",
            hi: "Middleware लिखने के तीन तरीक़े (compile-checked, run नहीं)",
            hg: "Middleware likhne ke teen tareeke (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<RequestCounter>();
builder.Services.AddTransient<HeaderMiddleware>();   // IMiddleware must be registered in DI
var app = builder.Build();

// 1. Inline
app.Use(async (context, next) =>
{
    context.Response.OnStarting(() =>
    {
        context.Response.Headers["X-Inline"] = "yes";
        return Task.CompletedTask;
    });
    await next();
});

// 2. Convention-based class
app.UseMiddleware<TimingMiddleware>();

// 3. IMiddleware (created by the DI container)
app.UseMiddleware<HeaderMiddleware>();

// the endpoint sees the same scoped RequestCounter as the middleware
app.MapGet("/", (RequestCounter counter) => $"request number {counter.Next()}");
app.Run();

class RequestCounter
{
    private int _count;
    public int Next() => ++_count;
}

class TimingMiddleware(RequestDelegate next, ILogger<TimingMiddleware> logger)
{
    // The constructor runs once, so keep scoped services OUT of it.
    // Scoped services arrive as InvokeAsync parameters.
    public async Task InvokeAsync(HttpContext context, RequestCounter counter)
    {
        var started = TimeProvider.System.GetTimestamp();
        counter.Next();
        await next(context);
        var elapsed = TimeProvider.System.GetElapsedTime(started);
        logger.LogInformation("{Path} took {Elapsed} ms", context.Request.Path, elapsed.TotalMilliseconds);
    }
}

class HeaderMiddleware : IMiddleware
{
    public Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        context.Response.Headers["X-Team"] = "platform";
        return next(context);
    }
}`
        },
        {
          caption: {
            en: "A reusable short-circuiting gate, applied to /api only with UseWhen (demo key; real keys come from configuration or a secret store)",
            hi: "दोबारा काम आने वाला short-circuit gate, UseWhen से सिर्फ़ /api पर (demo key; असली keys configuration या secret store से आती हैं)",
            hg: "Dobara kaam aane wala short-circuit gate, UseWhen se sirf /api par (demo key; asli keys configuration ya secret store se aati hain)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseWhen(
    context => context.Request.Path.StartsWithSegments("/api"),
    api => api.UseApiKeyGate("demo-key-123"));

app.MapGet("/", () => "public page");
app.MapGet("/api/data", () => "private data");
app.Run();

static class ApiKeyGateExtensions
{
    public static IApplicationBuilder UseApiKeyGate(this IApplicationBuilder app, string expectedKey) =>
        app.Use(async (context, next) =>
        {
            if (context.Request.Headers["X-Api-Key"] != expectedKey)
            {
                context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                await context.Response.WriteAsync("missing or wrong API key");
                return;   // short-circuit: next is never called
            }
            await next();
        });
}`
        }
      ]
    },
    {
      id: "config-logging-in-code",
      depth: "detailed",
      title: {
        en: "Configuration and logging in code",
        hi: "Configuration और logging code में",
        hg: "Configuration aur logging code mein"
      },
      body: {
        en: `<p><b>Analogy — a TV remote with presets:</b> the factory presets (appsettings.json) work out of the box; you change a few channels for your home (Development file); and a guest can override one setting for tonight (environment variable or command line), without touching the presets.</p>
<ul>
<li><b>Read configuration</b> with <code>IConfiguration</code> (<code>GetConnectionString</code>, <code>GetValue</code>, <code>GetSection</code>) or bind a section to a class with the Options pattern (Day 11: <code>IOptions</code>, <code>IOptionsSnapshot</code>, <code>IOptionsMonitor</code>, <code>ValidateOnStart</code>).</li>
<li><b>Override per environment</b> without code changes: the same build runs everywhere; only the environment variable or file differs. This replaces <code>Web.config</code> transforms.</li>
<li><b>Secrets</b>: <code>dotnet user-secrets</code> for development; environment variables or a vault in production. Do not commit passwords to <code>appsettings.json</code>.</li>
<li><b>Logging</b>: inject <code>ILogger&lt;T&gt;</code> (or use <code>app.Logger</code> in Program.cs). Pass values as template arguments, do not concatenate: <code>LogInformation("Order {OrderId} failed", id)</code>. Pass exceptions as the first argument (<code>LogError(ex, "...")</code>) so the stack trace is kept.</li>
<li><b>Default providers</b> include Console, Debug and EventSource (plus EventLog on Windows). The levels filter is read from configuration, so you can turn <code>Microsoft.AspNetCore</code> down to Warning without recompiling. Serilog or other libraries plug in through the same <code>ILogger</code> abstraction.</li>
<li><b>LoggerMessage source generator</b> (.NET 6+): declare a <code>partial</code> method with <code>[LoggerMessage]</code> and the compiler generates the logging code. It avoids boxing and template parsing on each call, and it checks that template names match the parameters.</li>
</ul>
<p><b>When to use / when not:</b> use plain <code>logger.LogX</code> with templates almost everywhere; reach for <code>[LoggerMessage]</code> on hot paths and for events you want named and numbered. Do not log secrets or full personal data, and do not log inside tight loops at Information level. Keep configuration keys few and typed; do not read <code>IConfiguration</code> all over the code base, bind once to an options class.</p>`,
        hi: `<p><b>Analogy — presets वाला TV remote:</b> factory presets (appsettings.json) बिना कुछ किए चलते हैं; आप घर के लिए कुछ channels बदलते हैं (Development file); और कोई मेहमान आज रात के लिए एक setting override कर सकता है (environment variable या command line), presets को छुए बिना।</p>
<ul>
<li><b>Configuration पढ़ो</b> <code>IConfiguration</code> से (<code>GetConnectionString</code>, <code>GetValue</code>, <code>GetSection</code>) या Options pattern से section को class में bind करो (Day 11: <code>IOptions</code>, <code>IOptionsSnapshot</code>, <code>IOptionsMonitor</code>, <code>ValidateOnStart</code>)।</li>
<li><b>हर environment के लिए override</b> बिना code बदले: वही build हर जगह चलता है; सिर्फ़ environment variable या file अलग होती है। यह <code>Web.config</code> transforms की जगह लेता है।</li>
<li><b>Secrets</b>: development के लिए <code>dotnet user-secrets</code>; production में environment variables या vault। Passwords को <code>appsettings.json</code> में commit मत करो।</li>
<li><b>Logging</b>: <code>ILogger&lt;T&gt;</code> inject करो (या Program.cs में <code>app.Logger</code>)। Values को template arguments की तरह दो, जोड़ो मत: <code>LogInformation("Order {OrderId} failed", id)</code>। Exception को पहले argument में दो (<code>LogError(ex, "...")</code>) ताकि stack trace बचा रहे।</li>
<li><b>Default providers</b> में Console, Debug और EventSource हैं (Windows पर EventLog भी)। Levels का filter configuration से पढ़ा जाता है, इसलिए <code>Microsoft.AspNetCore</code> को बिना recompile के Warning पर ला सकते हो। Serilog जैसी libraries उसी <code>ILogger</code> abstraction से जुड़ती हैं।</li>
<li><b>LoggerMessage source generator</b> (.NET 6+): <code>[LoggerMessage]</code> वाला <code>partial</code> method लिखो और compiler logging code बना देता है। हर call पर boxing और template parsing बचती है, और यह जाँचता है कि template के नाम parameters से मिलते हैं।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> लगभग हर जगह templates के साथ सादा <code>logger.LogX</code> use करो; hot paths पर और जिन events को नाम और नंबर देना हो उनके लिए <code>[LoggerMessage]</code> लो। Secrets या पूरा personal data log मत करो, और tight loops में Information level पर log मत करो। Configuration keys कम और typed रखो; <code>IConfiguration</code> को पूरे code base में मत पढ़ो, एक बार options class में bind करो।</p>`,
        hg: `<p><b>Analogy — presets wala TV remote:</b> factory presets (appsettings.json) bina kuch kiye chalte hain; aap ghar ke liye kuch channels badalte hain (Development file); aur koi mehmaan aaj raat ke liye ek setting override kar sakta hai (environment variable ya command line), presets ko chhue bina.</p>
<ul>
<li><b>Configuration padho</b> <code>IConfiguration</code> se (<code>GetConnectionString</code>, <code>GetValue</code>, <code>GetSection</code>) ya Options pattern se section ko class mein bind karo (Day 11: <code>IOptions</code>, <code>IOptionsSnapshot</code>, <code>IOptionsMonitor</code>, <code>ValidateOnStart</code>).</li>
<li><b>Har environment ke liye override</b> bina code badle: wahi build har jagah chalta hai; sirf environment variable ya file alag hoti hai. Yeh <code>Web.config</code> transforms ki jagah leta hai.</li>
<li><b>Secrets</b>: development ke liye <code>dotnet user-secrets</code>; production mein environment variables ya vault. Passwords ko <code>appsettings.json</code> mein commit mat karo.</li>
<li><b>Logging</b>: <code>ILogger&lt;T&gt;</code> inject karo (ya Program.cs mein <code>app.Logger</code>). Values ko template arguments ki tarah do, jodo mat: <code>LogInformation("Order {OrderId} failed", id)</code>. Exception ko pehle argument mein do (<code>LogError(ex, "...")</code>) taaki stack trace bacha rahe.</li>
<li><b>Default providers</b> mein Console, Debug aur EventSource hain (Windows par EventLog bhi). Levels ka filter configuration se padha jaata hai, isliye <code>Microsoft.AspNetCore</code> ko bina recompile ke Warning par la sakte ho. Serilog jaisi libraries usi <code>ILogger</code> abstraction se judti hain.</li>
<li><b>LoggerMessage source generator</b> (.NET 6+): <code>[LoggerMessage]</code> wala <code>partial</code> method likho aur compiler logging code bana deta hai. Har call par boxing aur template parsing bachti hai, aur yeh jaanchta hai ki template ke naam parameters se milte hain.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> lagbhag har jagah templates ke saath saada <code>logger.LogX</code> use karo; hot paths par aur jin events ko naam aur number dena ho unke liye <code>[LoggerMessage]</code> lo. Secrets ya poora personal data log mat karo, aur tight loops mein Information level par log mat karo. Configuration keys kam aur typed rakho; <code>IConfiguration</code> ko poore code base mein mat padho, ek baar options class mein bind karo.</p>`
      },
      code: [
        {
          caption: {
            en: "appsettings.json (JSON, not compiled)",
            hi: "appsettings.json (JSON, compile नहीं होता)",
            hg: "appsettings.json (JSON, compile nahi hota)"
          },
          check: "none",
          src: `{
  "Logging": {
    "LogLevel": { "Default": "Information", "Microsoft.AspNetCore": "Warning" }
  },
  "ConnectionStrings": { "Shop": "Server=.;Database=Shop;Integrated Security=true;" },
  "Shop": { "Currency": "INR", "TimeoutSeconds": 30 }
}`
        },
        {
          caption: {
            en: "Overriding the same keys without touching the file (shell commands, not compiled)",
            hi: "फ़ाइल छुए बिना वही keys override करना (shell commands, compile नहीं होते)",
            hg: "File chhue bina wahi keys override karna (shell commands, compile nahi hote)"
          },
          check: "none",
          src: `# command line (highest precedence)
dotnet run -- --Shop:Currency=USD

# environment variable: double underscore = section separator
set Shop__Currency=USD          # Windows cmd
export Shop__Currency=USD       # Linux / macOS

# user secrets (Development only, stored outside the repo)
dotnet user-secrets init
dotnet user-secrets set "ConnectionStrings:Shop" "Server=...;Password=..."`
        },
        {
          caption: {
            en: "Reading configuration, binding Options, logging with templates (compile-checked, not run)",
            hi: "Configuration पढ़ना, Options bind करना, templates से logging (compile-checked, run नहीं)",
            hg: "Configuration padhna, Options bind karna, templates se logging (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Read a value directly...
var connectionString = builder.Configuration.GetConnectionString("Shop");
var timeout = builder.Configuration.GetValue("Shop:TimeoutSeconds", 30);

// ...or bind a whole section to a class (Options pattern, Day 11)
builder.Services.AddOptions<ShopOptions>().Bind(builder.Configuration.GetSection("Shop"));

var app = builder.Build();

app.Logger.LogInformation("Starting in {Environment}, timeout {Timeout}s, connection string set: {HasConnection}",
    app.Environment.EnvironmentName, timeout, connectionString is not null);

app.MapGet("/info", (IOptions<ShopOptions> shop, ILogger<Program> logger) =>
{
    // template + arguments: OrderId-style names stay searchable in log tools
    logger.LogInformation("Info requested, currency {Currency}", shop.Value.Currency);
    return $"{shop.Value.Currency}, timeout {shop.Value.TimeoutSeconds}s";
});
app.Run();

class ShopOptions
{
    public string Currency { get; set; } = "INR";
    public int TimeoutSeconds { get; set; } = 30;
}`
        },
        {
          caption: {
            en: "LoggerMessage source generator (.NET 6+) (compile-checked, not run)",
            hi: "LoggerMessage source generator (.NET 6+) (compile-checked, run नहीं)",
            hg: "LoggerMessage source generator (.NET 6+) (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Logging;

var app = WebApplication.CreateBuilder(args).Build();

app.Logger.OrderShipped(42, "Pune");
app.Logger.PaymentFailed(42, new InvalidOperationException("card declined"));

static partial class Log
{
    [LoggerMessage(EventId = 1001, Level = LogLevel.Information, Message = "Order {OrderId} shipped to {City}")]
    public static partial void OrderShipped(this ILogger logger, int orderId, string city);

    [LoggerMessage(EventId = 1002, Level = LogLevel.Error, Message = "Payment failed for order {OrderId}")]
    public static partial void PaymentFailed(this ILogger logger, int orderId, Exception exception);
}`
        }
      ]
    },
    {
      id: "filters-apis-in-code",
      depth: "detailed",
      title: {
        en: "Filters, Controllers and Minimal APIs in code",
        hi: "Filters, Controllers और Minimal APIs code में",
        hg: "Filters, Controllers aur Minimal APIs code mein"
      },
      body: {
        en: `<p><b>Analogy — a canteen counter:</b> before you reach the counter, a guard checks your ID card (authorization filter), then the cashier checks your coupon (resource/action filter); after the food is served, a staff member wraps it (result filter). If the ID is wrong, you never reach the food: that is a short-circuit.</p>
<ul>
<li><b>Order of filters</b>: authorization → resource → (model binding) → action → your action method → result. Exception filters handle exceptions thrown by actions and action filters. <b>Within one type</b>, filters run global → controller → action on the way in, and in reverse on the way out. The puzzles below print this order.</li>
<li><b>Short-circuit in a filter</b>: set <code>context.Result</code> (for action filters, and do not call <code>next</code> in the async version). The action method is skipped.</li>
<li><b>Filters with DI</b>: attributes cannot take constructor services directly. Use <code>[ServiceFilter(typeof(T))]</code> (resolved from DI; register <code>T</code>) or <code>[TypeFilter]</code>.</li>
<li><b>Minimal API building blocks</b>: <code>MapGroup</code> shares a prefix and filters; <code>AddEndpointFilter</code> (or an <code>IEndpointFilter</code> class) is the minimal-API cousin of an action filter; <code>TypedResults</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code> make the possible responses part of the method signature, so they can be tested and documented.</li>
<li><b>Same DI, same pipeline</b>: both styles use the same middleware, routing and DI; the handler parameters (<code>IProductStore</code> below) come from the request scope.</li>
</ul>
<p><b>When to use / when not:</b> choose <b>Minimal APIs</b> for small services, internal endpoints and teams that like functional style; choose <b>Controllers</b> when you want filters, attribute-based conventions and a familiar structure for a large team (they feel like classic MVC / Web API). Mixing both in one app is allowed. Do not copy-paste logic between endpoints: put shared rules in a group filter, a service or an extension method. Use a filter, not middleware, when you need the action or <code>ModelState</code>.</p>`,
        hi: `<p><b>Analogy — canteen का counter:</b> counter तक पहुँचने से पहले guard आपका ID card देखता है (authorization filter), फिर cashier आपका coupon देखता है (resource/action filter); खाना परोसने के बाद staff उसे पैक करता है (result filter)। ID ग़लत हो तो आप खाने तक पहुँचते ही नहीं: यही short-circuit है।</p>
<ul>
<li><b>Filters का order</b>: authorization → resource → (model binding) → action → आपका action method → result। Exception filters actions और action filters के exceptions संभालते हैं। <b>एक ही type में</b>, filters अंदर जाते समय global → controller → action के क्रम में चलते हैं, और बाहर आते समय उल्टे। नीचे के puzzles यह order print करते हैं।</li>
<li><b>Filter में short-circuit</b>: <code>context.Result</code> set करो (action filters में, और async version में <code>next</code> मत बुलाओ)। Action method skip हो जाता है।</li>
<li><b>DI वाले filters</b>: attributes सीधे constructor services नहीं ले सकते। <code>[ServiceFilter(typeof(T))]</code> (DI से resolve होता है; <code>T</code> register करो) या <code>[TypeFilter]</code> use करो।</li>
<li><b>Minimal API के building blocks</b>: <code>MapGroup</code> prefix और filters साझा करता है; <code>AddEndpointFilter</code> (या <code>IEndpointFilter</code> class) action filter का minimal-API भाई है; <code>TypedResults</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code> संभव responses को method signature का हिस्सा बना देते हैं, इसलिए उन्हें test और document किया जा सकता है।</li>
<li><b>वही DI, वही pipeline</b>: दोनों styles में middleware, routing और DI एक ही हैं; handler के parameters (नीचे <code>IProductStore</code>) request scope से आते हैं।</li>
</ul>
<p><b>कब use करें / कब नहीं:</b> छोटी services, internal endpoints और functional style पसंद करने वाली teams के लिए <b>Minimal APIs</b>; जब filters, attribute-based conventions और बड़ी team के लिए जानी-पहचानी structure चाहिए तब <b>Controllers</b> (ये classic MVC / Web API जैसे लगते हैं)। एक app में दोनों मिलाना allowed है। Endpoints के बीच logic copy-paste मत करो: साझा rules को group filter, service या extension method में रखो। जब action या <code>ModelState</code> चाहिए तब middleware नहीं, filter use करो।</p>`,
        hg: `<p><b>Analogy — canteen ka counter:</b> counter tak pahunchne se pehle guard aapka ID card dekhta hai (authorization filter), phir cashier aapka coupon dekhta hai (resource/action filter); khana parosne ke baad staff use pack karta hai (result filter). ID galat ho to aap khane tak pahunchte hi nahi: yahi short-circuit hai.</p>
<ul>
<li><b>Filters ka order</b>: authorization → resource → (model binding) → action → aapka action method → result. Exception filters actions aur action filters ke exceptions sambhalte hain. <b>Ek hi type mein</b>, filters andar jaate samay global → controller → action ke kram mein chalte hain, aur bahar aate samay ulte. Neeche ke puzzles yeh order print karte hain.</li>
<li><b>Filter mein short-circuit</b>: <code>context.Result</code> set karo (action filters mein, aur async version mein <code>next</code> mat bulao). Action method skip ho jaata hai.</li>
<li><b>DI wale filters</b>: attributes seedhe constructor services nahi le sakte. <code>[ServiceFilter(typeof(T))]</code> (DI se resolve hota hai; <code>T</code> register karo) ya <code>[TypeFilter]</code> use karo.</li>
<li><b>Minimal API ke building blocks</b>: <code>MapGroup</code> prefix aur filters saajha karta hai; <code>AddEndpointFilter</code> (ya <code>IEndpointFilter</code> class) action filter ka minimal-API bhai hai; <code>TypedResults</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code> sambhav responses ko method signature ka hissa bana dete hain, isliye unhe test aur document kiya ja sakta hai.</li>
<li><b>Wahi DI, wahi pipeline</b>: dono styles mein middleware, routing aur DI ek hi hain; handler ke parameters (neeche <code>IProductStore</code>) request scope se aate hain.</li>
</ul>
<p><b>Kab use karein / kab nahi:</b> chhoti services, internal endpoints aur functional style pasand karne wali teams ke liye <b>Minimal APIs</b>; jab filters, attribute-based conventions aur badi team ke liye jaani-pehchani structure chahiye tab <b>Controllers</b> (yeh classic MVC / Web API jaise lagte hain). Ek app mein dono milana allowed hai. Endpoints ke beech logic copy-paste mat karo: saajhe rules ko group filter, service ya extension method mein rakho. Jab action ya <code>ModelState</code> chahiye tab middleware nahi, filter use karo.</p>`
      },
      code: [
        {
          caption: {
            en: "Controller with a DI-based action filter that short-circuits (compile-checked, not run)",
            hi: "DI-based action filter वाला controller जो short-circuit करता है (compile-checked, run नहीं)",
            hg: "DI-based action filter wala controller jo short-circuit karta hai (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddScoped<AuditFilter>();   // needed for [ServiceFilter]
builder.Services.AddSingleton<IProductStore, ProductStore>();
var app = builder.Build();
app.MapControllers();
app.Run();

public record Product(int Id, string Name);

public interface IProductStore { Product? Find(int id); }

public class ProductStore : IProductStore
{
    private readonly Dictionary<int, Product> _items = new() { [1] = new Product(1, "Tiffin box") };
    public Product? Find(int id) => _items.GetValueOrDefault(id);
}

[ApiController]
[Route("products")]
[ServiceFilter(typeof(AuditFilter))]
public class ProductsController(IProductStore store) : ControllerBase
{
    [HttpGet("{id:int}")]
    public ActionResult<Product> Get(int id) =>
        store.Find(id) is { } product ? product : NotFound();
}

public class AuditFilter(ILogger<AuditFilter> logger) : IAsyncActionFilter
{
    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        if (context.ActionArguments.TryGetValue("id", out var id) && id is int and <= 0)
        {
            context.Result = new BadRequestObjectResult("id must be positive");   // action never runs
            return;
        }
        logger.LogInformation("Running {Action}", context.ActionDescriptor.DisplayName);
        var executed = await next();
        logger.LogInformation("Finished with {Result}", executed.Result?.GetType().Name);
    }
}`
        },
        {
          caption: {
            en: "The same endpoint as a Minimal API: route group, endpoint filter, TypedResults (compile-checked, not run)",
            hi: "वही endpoint Minimal API में: route group, endpoint filter, TypedResults (compile-checked, run नहीं)",
            hg: "Wahi endpoint Minimal API mein: route group, endpoint filter, TypedResults (compile-checked, run nahi)"
          },
          check: "compile",
          frameworks: ["aspnetcore"],
          src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<IProductStore, ProductStore>();
var app = builder.Build();

var products = app.MapGroup("/products");          // shared prefix (and shared filters)
products.AddEndpointFilter<PositiveIdFilter>();
products.MapGet("/{id:int}", GetProduct);
app.Run();

static Results<Ok<Product>, NotFound> GetProduct(int id, IProductStore store) =>
    store.Find(id) is { } product ? TypedResults.Ok(product) : TypedResults.NotFound();

public record Product(int Id, string Name);

public interface IProductStore { Product? Find(int id); }

public class ProductStore : IProductStore
{
    private readonly Dictionary<int, Product> _items = new() { [1] = new Product(1, "Tiffin box") };
    public Product? Find(int id) => _items.GetValueOrDefault(id);
}

class PositiveIdFilter : IEndpointFilter
{
    public async ValueTask<object?> InvokeAsync(EndpointFilterInvocationContext context, EndpointFilterDelegate next)
    {
        if (context.GetArgument<int>(0) <= 0)
            return TypedResults.BadRequest("id must be positive");   // short-circuit
        return await next(context);
    }
}`
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
        en: `<ul>
<li><code>ConfigureServices</code> became <code>builder.Services.Add...</code>; <code>Configure</code> became the <code>app.Use...</code> calls.</li>
<li>The builder also exposes <code>Configuration</code>, <code>Logging</code> and <code>Environment</code>; <code>WebApplication</code> sits on the generic host shared with worker services.</li>
<li>A <code>Startup</code> class still works, so legacy apps need not be rewritten.</li>
<li>Follow-up: "Why does the order of <code>app.Use...</code> matter?" — see the middleware questions.</li>
<li>TL angle: keep Program.cs thin; move registrations into <code>AddXxx</code> extension methods per feature.</li>
</ul>`,
        hi: `<ul>
<li><code>ConfigureServices</code> बना <code>builder.Services.Add...</code>; <code>Configure</code> बना <code>app.Use...</code> calls।</li>
<li>Builder में <code>Configuration</code>, <code>Logging</code> और <code>Environment</code> भी हैं; <code>WebApplication</code> उसी generic host पर है जो worker services में होता है।</li>
<li><code>Startup</code> class अब भी चलती है, इसलिए legacy apps को rewrite करना ज़रूरी नहीं।</li>
<li>Follow-up: "<code>app.Use...</code> का order क्यों मायने रखता है?" — middleware वाले सवाल देखो।</li>
<li>TL angle: Program.cs पतली रखो; registrations को feature के हिसाब से <code>AddXxx</code> extension methods में ले जाओ।</li>
</ul>`,
        hg: `<ul>
<li><code>ConfigureServices</code> bana <code>builder.Services.Add...</code>; <code>Configure</code> bana <code>app.Use...</code> calls.</li>
<li>Builder mein <code>Configuration</code>, <code>Logging</code> aur <code>Environment</code> bhi hain; <code>WebApplication</code> usi generic host par hai jo worker services mein hota hai.</li>
<li><code>Startup</code> class ab bhi chalti hai, isliye legacy apps ko rewrite karna zaroori nahi.</li>
<li>Follow-up: "<code>app.Use...</code> ka order kyun matter karta hai?" — middleware wale sawaal dekho.</li>
<li>TL angle: Program.cs patli rakho; registrations ko feature ke hisaab se <code>AddXxx</code> extension methods mein le jao.</li>
</ul>`
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
        en: `<ul>
<li>Code before <code>await next()</code> runs in registration order; code after it runs in reverse. This is the Chain of Responsibility from Day 10.</li>
<li>Example: exception handling must come first to catch errors from later middleware; <code>UseAuthentication</code> must come before <code>UseAuthorization</code>.</li>
<li>The usual order: exception handler, HSTS, HTTPS redirection, static files, routing, CORS, authentication, authorization, custom middleware, endpoints.</li>
<li>Follow-up: "Why does CORS go before authorization?" — so that even a short-circuited 401 or 403 response carries CORS headers; otherwise the browser reports a confusing CORS error. CORS itself is Day 13.</li>
<li>TL angle: put the pipeline order in a short comment or test; wrong order bugs look like random 401s or missing CORS headers.</li>
</ul>`,
        hi: `<ul>
<li><code>await next()</code> से पहले का code registration order में चलता है; बाद का code उल्टे order में। यह Day 10 वाला Chain of Responsibility है।</li>
<li>उदाहरण: exception handling सबसे पहले आना चाहिए ताकि बाद के middleware के errors पकड़े; <code>UseAuthentication</code>, <code>UseAuthorization</code> से पहले आना चाहिए।</li>
<li>आम order: exception handler, HSTS, HTTPS redirection, static files, routing, CORS, authentication, authorization, custom middleware, endpoints।</li>
<li>Follow-up: "CORS authorization से पहले क्यों?" — ताकि short-circuit हुए 401 या 403 response में भी CORS headers हों; वरना browser उलझाने वाला CORS error दिखाता है। CORS ख़ुद Day 13 में है।</li>
<li>TL angle: pipeline का order छोटे comment या test में लिखो; ग़लत order के bugs random 401 या missing CORS headers जैसे दिखते हैं।</li>
</ul>`,
        hg: `<ul>
<li><code>await next()</code> se pehle ka code registration order mein chalta hai; baad ka code ulte order mein. Yeh Day 10 wala Chain of Responsibility hai.</li>
<li>Udaharan: exception handling sabse pehle aana chahiye taaki baad ke middleware ke errors pakde; <code>UseAuthentication</code>, <code>UseAuthorization</code> se pehle aana chahiye.</li>
<li>Aam order: exception handler, HSTS, HTTPS redirection, static files, routing, CORS, authentication, authorization, custom middleware, endpoints.</li>
<li>Follow-up: "CORS authorization se pehle kyun?" — taaki short-circuit hue 401 ya 403 response mein bhi CORS headers hon; warna browser uljhane wala CORS error dikhata hai. CORS khud Day 13 mein hai.</li>
<li>TL angle: pipeline ka order chhote comment ya test mein likho; galat order ke bugs random 401 ya missing CORS headers jaise dikhte hain.</li>
</ul>`
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
        en: `<ul>
<li><b>Run</b> ends the chain: anything registered after it is never reached (puzzle 1 shows this).</li>
<li><b>Map("/admin", ...)</b> matches a path prefix and moves the matched part into <code>PathBase</code>; <b>MapWhen</b> takes any predicate on <code>HttpContext</code>. Neither rejoins the main pipeline.</li>
<li><b>UseWhen</b> runs the branch middleware for matching requests and then continues with the main pipeline (puzzle 3 shows all three).</li>
<li>Follow-up: "Where do endpoints (<code>MapGet</code>) fit?" — the endpoint middleware at the end of the pipeline runs them after routing selected one.</li>
</ul>`,
        hi: `<ul>
<li><b>Run</b> chain ख़त्म कर देता है: उसके बाद register हुआ कुछ भी कभी नहीं पहुँचता (puzzle 1 में दिखता है)।</li>
<li><b>Map("/admin", ...)</b> path prefix match करता है और matched हिस्से को <code>PathBase</code> में ले जाता है; <b>MapWhen</b> <code>HttpContext</code> पर कोई भी predicate लेता है। दोनों main pipeline में वापस नहीं जुड़ते।</li>
<li><b>UseWhen</b> matching requests के लिए branch middleware चलाता है और फिर main pipeline आगे चलती है (puzzle 3 में तीनों दिखते हैं)।</li>
<li>Follow-up: "Endpoints (<code>MapGet</code>) कहाँ आते हैं?" — pipeline के अंत में endpoint middleware उन्हें चलाता है, routing के endpoint चुनने के बाद।</li>
</ul>`,
        hg: `<ul>
<li><b>Run</b> chain khatam kar deta hai: uske baad register hua kuch bhi kabhi nahi pahunchta (puzzle 1 mein dikhta hai).</li>
<li><b>Map("/admin", ...)</b> path prefix match karta hai aur matched hisse ko <code>PathBase</code> mein le jaata hai; <b>MapWhen</b> <code>HttpContext</code> par koi bhi predicate leta hai. Dono main pipeline mein wapas nahi judte.</li>
<li><b>UseWhen</b> matching requests ke liye branch middleware chalata hai aur phir main pipeline aage chalti hai (puzzle 3 mein teeno dikhte hain).</li>
<li>Follow-up: "Endpoints (<code>MapGet</code>) kahan aate hain?" — pipeline ke ant mein endpoint middleware unhe chalata hai, routing ke endpoint chunne ke baad.</li>
</ul>`
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
        en: `<ul>
<li>This is the default set from <code>WebApplication.CreateBuilder</code>. Sources you add later with <code>builder.Configuration.Add...</code> are layered on top of these, so they win over them.</li>
<li>Keys are hierarchical (<code>Shop:Currency</code>), case-insensitive; environment variables use <code>__</code> for the colon.</li>
<li>Read with <code>IConfiguration</code> or bind to a class (Options pattern, Day 11). Puzzle 4 proves the "last source wins" rule with in-memory, environment and command-line sources.</li>
<li>Follow-up: "How do you change a setting in production without redeploying code?" — set an environment variable or pass a command-line argument; no rebuild needed.</li>
<li>TL angle: document which source owns which key, and keep secrets out of the JSON files.</li>
</ul>`,
        hi: `<ul>
<li>यह <code>WebApplication.CreateBuilder</code> का default set है। जो sources आप बाद में <code>builder.Configuration.Add...</code> से जोड़ते हो वे इनके ऊपर लगते हैं, इसलिए इन पर जीतते हैं।</li>
<li>Keys hierarchical (<code>Shop:Currency</code>) और case-insensitive हैं; environment variables में colon की जगह <code>__</code> आता है।</li>
<li><code>IConfiguration</code> से पढ़ो या class में bind करो (Options pattern, Day 11)। Puzzle 4 in-memory, environment और command-line sources से "आख़िरी source जीतता है" साबित करता है।</li>
<li>Follow-up: "production में code redeploy किए बिना setting कैसे बदलोगे?" — environment variable set करो या command-line argument दो; rebuild नहीं चाहिए।</li>
<li>TL angle: documents में लिखो कि कौन सा source किस key का मालिक है, और secrets को JSON files से बाहर रखो।</li>
</ul>`,
        hg: `<ul>
<li>Yeh <code>WebApplication.CreateBuilder</code> ka default set hai. Jo sources aap baad mein <code>builder.Configuration.Add...</code> se jodte ho woh inke upar lagte hain, isliye inpar jeette hain.</li>
<li>Keys hierarchical (<code>Shop:Currency</code>) aur case-insensitive hain; environment variables mein colon ki jagah <code>__</code> aata hai.</li>
<li><code>IConfiguration</code> se padho ya class mein bind karo (Options pattern, Day 11). Puzzle 4 in-memory, environment aur command-line sources se "aakhri source jeetta hai" saabit karta hai.</li>
<li>Follow-up: "production mein code redeploy kiye bina setting kaise badloge?" — environment variable set karo ya command-line argument do; rebuild nahi chahiye.</li>
<li>TL angle: documents mein likho ki kaun sa source kis key ka malik hai, aur secrets ko JSON files se bahar rakho.</li>
</ul>`
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
        en: `<ul>
<li>In-process (the default on IIS since ASP.NET Core 3.0) avoids the extra network hop between two processes, so it is usually faster.</li>
<li>Out-of-process uses IIS as a reverse proxy through the ASP.NET Core Module; the app has its own process and its own lifetime.</li>
<li>Kestrel can serve the internet directly, but many teams still put a reverse proxy (IIS, nginx, a cloud load balancer) in front for TLS, load balancing and request filtering.</li>
<li>Follow-up: "Your app runs on Linux containers: is IIS involved?" — no, Kestrel runs inside the container, usually behind a load balancer or ingress.</li>
</ul>`,
        hi: `<ul>
<li>In-process (ASP.NET Core 3.0 से IIS पर default) दो processes के बीच का extra network hop बचाता है, इसलिए आम तौर पर तेज़ होता है।</li>
<li>Out-of-process में IIS ASP.NET Core Module के ज़रिए reverse proxy का काम करता है; app का अपना process और अपनी lifetime होती है।</li>
<li>Kestrel सीधे internet को serve कर सकता है, पर कई teams TLS, load balancing और request filtering के लिए आगे reverse proxy (IIS, nginx, cloud load balancer) रखती हैं।</li>
<li>Follow-up: "आपकी app Linux containers में चलती है: क्या IIS शामिल है?" — नहीं, Kestrel container के अंदर चलता है, आम तौर पर load balancer या ingress के पीछे।</li>
</ul>`,
        hg: `<ul>
<li>In-process (ASP.NET Core 3.0 se IIS par default) do processes ke beech ka extra network hop bachata hai, isliye aam taur par tez hota hai.</li>
<li>Out-of-process mein IIS ASP.NET Core Module ke zariye reverse proxy ka kaam karta hai; app ka apna process aur apni lifetime hoti hai.</li>
<li>Kestrel seedha internet ko serve kar sakta hai, par kai teams TLS, load balancing aur request filtering ke liye aage reverse proxy (IIS, nginx, cloud load balancer) rakhti hain.</li>
<li>Follow-up: "aapki app Linux containers mein chalti hai: kya IIS shamil hai?" — nahi, Kestrel container ke andar chalta hai, aam taur par load balancer ya ingress ke peeche.</li>
</ul>`
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
        en: `<ul>
<li>Middleware examples: correlation ID, request logging, security headers, exception handler. It also covers static files and endpoints that are not MVC.</li>
<li>Filter examples: validate a parameter, audit an action by name, wrap results, translate a controller exception. Minimal APIs have their own endpoint filters.</li>
<li>Filters are registered globally, per controller or per action; middleware is registered once for the whole pipeline (or a branch).</li>
<li>Follow-up: "Can a filter replace the exception-handling middleware?" — no for the whole app: exception filters only see exceptions from actions and action filters, not from other middleware or from result execution.</li>
</ul>`,
        hi: `<ul>
<li>Middleware के उदाहरण: correlation ID, request logging, security headers, exception handler। यह static files और non-MVC endpoints को भी कवर करता है।</li>
<li>Filter के उदाहरण: parameter validate करना, action का नाम लेकर audit करना, results wrap करना, controller exception translate करना। Minimal APIs के अपने endpoint filters हैं।</li>
<li>Filters globally, per controller या per action register होते हैं; middleware पूरी pipeline (या एक branch) के लिए एक बार register होता है।</li>
<li>Follow-up: "क्या filter exception-handling middleware की जगह ले सकता है?" — पूरी app के लिए नहीं: exception filters सिर्फ़ actions और action filters के exceptions देखते हैं, दूसरे middleware या result execution के नहीं।</li>
</ul>`,
        hg: `<ul>
<li>Middleware ke udaharan: correlation ID, request logging, security headers, exception handler. Yeh static files aur non-MVC endpoints ko bhi cover karta hai.</li>
<li>Filter ke udaharan: parameter validate karna, action ka naam lekar audit karna, results wrap karna, controller exception translate karna. Minimal APIs ke apne endpoint filters hain.</li>
<li>Filters globally, per controller ya per action register hote hain; middleware poori pipeline (ya ek branch) ke liye ek baar register hota hai.</li>
<li>Follow-up: "kya filter exception-handling middleware ki jagah le sakta hai?" — poori app ke liye nahi: exception filters sirf actions aur action filters ke exceptions dekhte hain, doosre middleware ya result execution ke nahi.</li>
</ul>`
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
        en: `<ul>
<li>Minimal APIs: less ceremony, route groups, endpoint filters and <code>TypedResults</code> since .NET 7; good for microservices and small teams.</li>
<li>Controllers: attribute routing, action filters, model-binding conventions and a structure many teams know from classic MVC / Web API.</li>
<li>Both share routing, DI, middleware and OpenAPI support (Day 13), and they can live in the same app.</li>
<li>Follow-up: "Is Minimal API faster?" — it has slightly less overhead, but database and network time dominate; measure before choosing for speed.</li>
<li>TL angle: pick one default per codebase, write it in the team conventions, and organise Minimal APIs into groups and extension methods so Program.cs does not become a dumping ground.</li>
</ul>`,
        hi: `<ul>
<li>Minimal APIs: कम ceremony, .NET 7 से route groups, endpoint filters और <code>TypedResults</code>; microservices और छोटी teams के लिए अच्छे।</li>
<li>Controllers: attribute routing, action filters, model-binding conventions और ऐसी structure जो कई teams classic MVC / Web API से जानती हैं।</li>
<li>दोनों में routing, DI, middleware और OpenAPI support एक है (Day 13), और वे एक ही app में रह सकते हैं।</li>
<li>Follow-up: "क्या Minimal API तेज़ है?" — overhead थोड़ा कम है, पर database और network का समय हावी रहता है; speed के लिए चुनने से पहले measure करो।</li>
<li>TL angle: एक codebase के लिए एक default चुनो, team conventions में लिखो, और Minimal APIs को groups और extension methods में बाँटो ताकि Program.cs कूड़ादान न बने।</li>
</ul>`,
        hg: `<ul>
<li>Minimal APIs: kam ceremony, .NET 7 se route groups, endpoint filters aur <code>TypedResults</code>; microservices aur chhoti teams ke liye achhe.</li>
<li>Controllers: attribute routing, action filters, model-binding conventions aur aisi structure jo kai teams classic MVC / Web API se jaanti hain.</li>
<li>Dono mein routing, DI, middleware aur OpenAPI support ek hai (Day 13), aur woh ek hi app mein reh sakte hain.</li>
<li>Follow-up: "kya Minimal API tez hai?" — overhead thoda kam hai, par database aur network ka samay haavi rehta hai; speed ke liye chunne se pehle measure karo.</li>
<li>TL angle: ek codebase ke liye ek default chuno, team conventions mein likho, aur Minimal APIs ko groups aur extension methods mein baanto taaki Program.cs koodadaan na bane.</li>
</ul>`
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
        en: `<ul>
<li>Authentication does not reject by itself: an anonymous request simply gets an anonymous <code>User</code> and continues.</li>
<li>Authorization decides using attributes or <code>RequireAuthorization()</code> on the endpoint. No policy on the endpoint (and no fallback policy) means anonymous access is allowed.</li>
<li>The authentication scheme shapes the response: bearer-token schemes answer 401; cookie authentication usually redirects browsers to a login page.</li>
<li>Follow-up: "Which of 401 and 403 means 'who are you?'" — 401 means the caller is not authenticated; 403 means authenticated but not permitted. JWT setup is in Day 13.</li>
<li>Consistent with Day 10: only the authorization step can end the chain with 401 or 403; authentication only sets the user.</li>
</ul>`,
        hi: `<ul>
<li>Authentication ख़ुद reject नहीं करता: anonymous request को बस anonymous <code>User</code> मिलता है और वह आगे बढ़ती है।</li>
<li>Authorization फ़ैसला attributes या endpoint पर <code>RequireAuthorization()</code> से करता है। Endpoint पर कोई policy नहीं (और fallback policy भी नहीं) तो anonymous access allowed है।</li>
<li>Authentication scheme response का रूप तय करता है: bearer-token schemes 401 देते हैं; cookie authentication आम तौर पर browsers को login page पर redirect करता है।</li>
<li>Follow-up: "401 और 403 में 'तुम कौन हो?' कौन सा है?" — 401 मतलब caller authenticated नहीं; 403 मतलब authenticated है पर permitted नहीं। JWT setup Day 13 में है।</li>
<li>Day 10 से मेल: सिर्फ़ authorization step chain को 401 या 403 से ख़त्म कर सकता है; authentication सिर्फ़ user set करता है।</li>
</ul>`,
        hg: `<ul>
<li>Authentication khud reject nahi karta: anonymous request ko bas anonymous <code>User</code> milta hai aur woh aage badhti hai.</li>
<li>Authorization faisla attributes ya endpoint par <code>RequireAuthorization()</code> se karta hai. Endpoint par koi policy nahi (aur fallback policy bhi nahi) to anonymous access allowed hai.</li>
<li>Authentication scheme response ka roop tay karta hai: bearer-token schemes 401 dete hain; cookie authentication aam taur par browsers ko login page par redirect karta hai.</li>
<li>Follow-up: "401 aur 403 mein 'tum kaun ho?' kaun sa hai?" — 401 matlab caller authenticated nahi; 403 matlab authenticated hai par permitted nahi. JWT setup Day 13 mein hai.</li>
<li>Day 10 se mel: sirf authorization step chain ko 401 ya 403 se khatam kar sakta hai; authentication sirf user set karta hai.</li>
</ul>`
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
        en: `<ul>
<li>Convention class: constructor gets <code>RequestDelegate</code> and singleton-safe services; <code>InvokeAsync(HttpContext, ...)</code> gets per-request services (this avoids the captive dependency from Day 11).</li>
<li><code>IMiddleware</code>: resolved from DI by <code>IMiddlewareFactory</code> and must be registered; strongly typed and can use scoped constructor injection.</li>
<li>Wrap it in an extension method (<code>UseXxx</code>) for readability, and write a short-circuit as <code>return</code> without calling <code>next</code>.</li>
<li>Follow-up: "How do you unit test middleware?" — build a <code>DefaultHttpContext</code> and a fake <code>next</code> delegate, or host it in <code>TestServer</code> as the puzzles do.</li>
<li>TL angle: middleware is for cross-cutting HTTP behaviour; business rules belong in services.</li>
</ul>`,
        hi: `<ul>
<li>Convention class: constructor में <code>RequestDelegate</code> और singleton-safe services आती हैं; <code>InvokeAsync(HttpContext, ...)</code> में per-request services (इससे Day 11 वाली captive dependency बचती है)।</li>
<li><code>IMiddleware</code>: <code>IMiddlewareFactory</code> इसे DI से resolve करता है और इसे register करना पड़ता है; strongly typed है और scoped constructor injection ले सकता है।</li>
<li>पढ़ने में आसानी के लिए extension method (<code>UseXxx</code>) में लपेटो, और short-circuit को <code>next</code> बुलाए बिना <code>return</code> की तरह लिखो।</li>
<li>Follow-up: "middleware का unit test कैसे करोगे?" — <code>DefaultHttpContext</code> और नकली <code>next</code> delegate बनाओ, या puzzles की तरह <code>TestServer</code> में host करो।</li>
<li>TL angle: middleware cross-cutting HTTP behaviour के लिए है; business rules services में रहने चाहिए।</li>
</ul>`,
        hg: `<ul>
<li>Convention class: constructor mein <code>RequestDelegate</code> aur singleton-safe services aati hain; <code>InvokeAsync(HttpContext, ...)</code> mein per-request services (isse Day 11 wali captive dependency bachti hai).</li>
<li><code>IMiddleware</code>: <code>IMiddlewareFactory</code> ise DI se resolve karta hai aur ise register karna padta hai; strongly typed hai aur scoped constructor injection le sakta hai.</li>
<li>Padhne mein aasani ke liye extension method (<code>UseXxx</code>) mein lapeto, aur short-circuit ko <code>next</code> bulaye bina <code>return</code> ki tarah likho.</li>
<li>Follow-up: "middleware ka unit test kaise karoge?" — <code>DefaultHttpContext</code> aur nakli <code>next</code> delegate banao, ya puzzles ki tarah <code>TestServer</code> mein host karo.</li>
<li>TL angle: middleware cross-cutting HTTP behaviour ke liye hai; business rules services mein rehne chahiye.</li>
</ul>`
      }
    },
    {
      id: "filter-order",
      depth: "detailed",
      q: "What is the filter execution order in ASP.NET Core MVC?",
      answer: "Authorization, resource, action, then result filters; exception filters handle errors from actions and action filters. Within a type, global runs before controller, then action, and the order reverses on the way out.",
      meaning: {
        hi: "Authorization, resource, action, फिर result filters; exception filters actions और action filters के errors संभालते हैं। एक type में global, फिर controller, फिर action चलता है, और बाहर आते समय order उल्टा हो जाता है।",
        hg: "Authorization, resource, action, phir result filters; exception filters actions aur action filters ke errors sambhalte hain. Ek type mein global, phir controller, phir action chalta hai, aur bahar aate samay order ulta ho jaata hai."
      },
      explain: {
        en: `<ul>
<li>Authorization filters run first and may short-circuit. Resource filters wrap model binding and everything after it, so they suit caching. Action filters surround the action method; result filters surround result execution.</li>
<li>"Executing" methods run global → controller → action; "executed" methods run in reverse. Puzzle 5 prints the exact order.</li>
<li>Exception filters do not catch exceptions from resource filters, result filters or result execution.</li>
<li>Follow-up: "How can you change the order within a scope?" — implement <code>IOrderedFilter</code> or set the <code>Order</code> property on the attribute; lower values run first for "executing".</li>
<li>Follow-up: "Do these filters apply to Minimal APIs?" — no, they use endpoint filters (puzzle 6).</li>
</ul>`,
        hi: `<ul>
<li>Authorization filters सबसे पहले चलते हैं और short-circuit कर सकते हैं। Resource filters model binding और उसके बाद की हर चीज़ को लपेटते हैं, इसलिए caching के लिए ठीक हैं। Action filters action method को घेरते हैं; result filters result execution को घेरते हैं।</li>
<li>"Executing" methods global → controller → action के क्रम में चलते हैं; "executed" methods उल्टे क्रम में। Puzzle 5 सटीक order print करता है।</li>
<li>Exception filters resource filters, result filters या result execution के exceptions नहीं पकड़ते।</li>
<li>Follow-up: "एक scope के अंदर order कैसे बदलोगे?" — <code>IOrderedFilter</code> implement करो या attribute पर <code>Order</code> property set करो; "executing" के लिए छोटी value पहले चलती है।</li>
<li>Follow-up: "क्या ये filters Minimal APIs पर लगते हैं?" — नहीं, उनमें endpoint filters होते हैं (puzzle 6)।</li>
</ul>`,
        hg: `<ul>
<li>Authorization filters sabse pehle chalte hain aur short-circuit kar sakte hain. Resource filters model binding aur uske baad ki har cheez ko lapetate hain, isliye caching ke liye theek hain. Action filters action method ko gherte hain; result filters result execution ko gherte hain.</li>
<li>"Executing" methods global → controller → action ke kram mein chalte hain; "executed" methods ulte kram mein. Puzzle 5 sateek order print karta hai.</li>
<li>Exception filters resource filters, result filters ya result execution ke exceptions nahi pakadte.</li>
<li>Follow-up: "ek scope ke andar order kaise badloge?" — <code>IOrderedFilter</code> implement karo ya attribute par <code>Order</code> property set karo; "executing" ke liye chhoti value pehle chalti hai.</li>
<li>Follow-up: "kya yeh filters Minimal APIs par lagte hain?" — nahi, unmein endpoint filters hote hain (puzzle 6).</li>
</ul>`
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
        en: `<ul>
<li>Local launch profiles usually set <code>ASPNETCORE_ENVIRONMENT=Development</code>; on a server you set it yourself, or the app runs as Production.</li>
<li>Helpers: <code>IsDevelopment()</code>, <code>IsStaging()</code>, <code>IsProduction()</code>, <code>IsEnvironment("Name")</code>. Custom names such as "UAT" are allowed.</li>
<li>Development switches on user secrets and the developer exception page; other environments should use <code>UseExceptionHandler</code> and HSTS.</li>
<li>Follow-up: "Is it good to put <code>if (env.IsDevelopment())</code> all over the code?" — no; keep branching in startup and configuration, so business code behaves the same everywhere.</li>
<li>Classic bridge: this replaces Web.config transforms (<code>Web.Release.config</code>).</li>
</ul>`,
        hi: `<ul>
<li>Local launch profiles आम तौर पर <code>ASPNETCORE_ENVIRONMENT=Development</code> set करते हैं; server पर आप ख़ुद set करते हो, वरना app Production की तरह चलती है।</li>
<li>Helpers: <code>IsDevelopment()</code>, <code>IsStaging()</code>, <code>IsProduction()</code>, <code>IsEnvironment("Name")</code>। "UAT" जैसे custom नाम allowed हैं।</li>
<li>Development में user secrets और developer exception page चालू होते हैं; दूसरे environments में <code>UseExceptionHandler</code> और HSTS use करो।</li>
<li>Follow-up: "क्या पूरे code में <code>if (env.IsDevelopment())</code> डालना ठीक है?" — नहीं; branching startup और configuration में रखो, ताकि business code हर जगह एक जैसा चले।</li>
<li>Classic से पुल: यह Web.config transforms (<code>Web.Release.config</code>) की जगह लेता है।</li>
</ul>`,
        hg: `<ul>
<li>Local launch profiles aam taur par <code>ASPNETCORE_ENVIRONMENT=Development</code> set karte hain; server par aap khud set karte ho, warna app Production ki tarah chalti hai.</li>
<li>Helpers: <code>IsDevelopment()</code>, <code>IsStaging()</code>, <code>IsProduction()</code>, <code>IsEnvironment("Name")</code>. "UAT" jaise custom naam allowed hain.</li>
<li>Development mein user secrets aur developer exception page chalu hote hain; doosre environments mein <code>UseExceptionHandler</code> aur HSTS use karo.</li>
<li>Follow-up: "kya poore code mein <code>if (env.IsDevelopment())</code> daalna theek hai?" — nahi; branching startup aur configuration mein rakho, taaki business code har jagah ek jaisa chale.</li>
<li>Classic se pul: yeh Web.config transforms (<code>Web.Release.config</code>) ki jagah leta hai.</li>
</ul>`
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
        en: `<ul>
<li>Controllers, endpoint handlers, filters and <code>InvokeAsync</code> parameters resolve from <code>RequestServices</code>. Lifetimes themselves were covered in Day 11 (captive dependencies, <code>ValidateScopes</code>).</li>
<li>Scope validation is on by default in the Development environment, which catches a singleton that takes a scoped service early.</li>
<li>Middleware constructors and background services are not inside a request scope: use <code>InvokeAsync</code> parameters or <code>IServiceScopeFactory</code>.</li>
<li>Follow-up: "Why is <code>DbContext</code> scoped?" — it is not thread-safe and tracks changes for one unit of work (Day 5, Day 7), and a request is that unit.</li>
<li>Avoid the service-locator habit of calling <code>RequestServices.GetService</code> in business code (Day 8).</li>
</ul>`,
        hi: `<ul>
<li>Controllers, endpoint handlers, filters और <code>InvokeAsync</code> parameters <code>RequestServices</code> से resolve होते हैं। Lifetimes ख़ुद Day 11 में थीं (captive dependencies, <code>ValidateScopes</code>)।</li>
<li>Development environment में scope validation default चालू है, जो scoped service लेने वाले singleton को जल्दी पकड़ लेता है।</li>
<li>Middleware constructors और background services request scope के अंदर नहीं होते: <code>InvokeAsync</code> parameters या <code>IServiceScopeFactory</code> use करो।</li>
<li>Follow-up: "<code>DbContext</code> scoped क्यों है?" — यह thread-safe नहीं है और एक unit of work के बदलाव track करता है (Day 5, Day 7), और request वही unit है।</li>
<li>Business code में <code>RequestServices.GetService</code> बुलाने की service-locator आदत से बचो (Day 8)।</li>
</ul>`,
        hg: `<ul>
<li>Controllers, endpoint handlers, filters aur <code>InvokeAsync</code> parameters <code>RequestServices</code> se resolve hote hain. Lifetimes khud Day 11 mein thi (captive dependencies, <code>ValidateScopes</code>).</li>
<li>Development environment mein scope validation default chalu hai, jo scoped service lene wale singleton ko jaldi pakad leta hai.</li>
<li>Middleware constructors aur background services request scope ke andar nahi hote: <code>InvokeAsync</code> parameters ya <code>IServiceScopeFactory</code> use karo.</li>
<li>Follow-up: "<code>DbContext</code> scoped kyun hai?" — yeh thread-safe nahi hai aur ek unit of work ke badlav track karta hai (Day 5, Day 7), aur request wahi unit hai.</li>
<li>Business code mein <code>RequestServices.GetService</code> bulane ki service-locator aadat se bacho (Day 8).</li>
</ul>`
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
        en: `<ul>
<li><code>logger.LogInformation("Order {OrderId} shipped to {City}", id, city)</code> lets a log tool query <code>OrderId = 42</code>; <code>$"Order {id} shipped"</code> gives only text.</li>
<li>Placeholders are matched by <b>position</b>, not by name, so keep the argument order the same as the template.</li>
<li>Levels: Trace, Debug, Information, Warning, Error, Critical. Use Warning for "unexpected but handled", Error for failed operations, and avoid Information inside hot loops.</li>
<li>Category = full type name of <code>T</code> in <code>ILogger&lt;T&gt;</code>; filter rules in <code>Logging:LogLevel</code> match by category prefix.</li>
<li>Follow-up: "How do you correlate logs across services?" — use a correlation or trace ID (the framework adds scopes with trace information) and log it.</li>
</ul>`,
        hi: `<ul>
<li><code>logger.LogInformation("Order {OrderId} shipped to {City}", id, city)</code> से log tool <code>OrderId = 42</code> query कर सकता है; <code>$"Order {id} shipped"</code> सिर्फ़ text देता है।</li>
<li>Placeholders <b>position</b> से match होते हैं, नाम से नहीं, इसलिए arguments का क्रम template जैसा रखो।</li>
<li>Levels: Trace, Debug, Information, Warning, Error, Critical। Warning "अनपेक्षित पर संभाला हुआ" के लिए, Error फ़ेल हुए operations के लिए, और hot loops में Information से बचो।</li>
<li>Category = <code>ILogger&lt;T&gt;</code> में <code>T</code> का पूरा type name; <code>Logging:LogLevel</code> के filter rules category prefix से match होते हैं।</li>
<li>Follow-up: "services के बीच logs कैसे जोड़ोगे?" — correlation या trace ID use करो (framework trace जानकारी वाले scopes जोड़ता है) और उसे log करो।</li>
</ul>`,
        hg: `<ul>
<li><code>logger.LogInformation("Order {OrderId} shipped to {City}", id, city)</code> se log tool <code>OrderId = 42</code> query kar sakta hai; <code>$"Order {id} shipped"</code> sirf text deta hai.</li>
<li>Placeholders <b>position</b> se match hote hain, naam se nahi, isliye arguments ka kram template jaisa rakho.</li>
<li>Levels: Trace, Debug, Information, Warning, Error, Critical. Warning "anapekshit par sambhala hua" ke liye, Error fail hue operations ke liye, aur hot loops mein Information se bacho.</li>
<li>Category = <code>ILogger&lt;T&gt;</code> mein <code>T</code> ka poora type name; <code>Logging:LogLevel</code> ke filter rules category prefix se match hote hain.</li>
<li>Follow-up: "services ke beech logs kaise jodoge?" — correlation ya trace ID use karo (framework trace jaankari wale scopes jodta hai) aur use log karo.</li>
</ul>`
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
        en: `<ul>
<li>Available since .NET 6; you write the signature and the template, the generator writes the body. See the last code box of the logging section.</li>
<li>Benefits: speed, compile-time check that template names match parameters, a fixed <code>EventId</code> and one place per message.</li>
<li>Cost: more ceremony than a one-line <code>logger.LogInformation</code>; plain logging is fine for most code.</li>
<li>Follow-up: "Does it change where logs go?" — no, it still calls <code>ILogger</code>, so providers and filters work the same.</li>
</ul>`,
        hi: `<ul>
<li>.NET 6 से उपलब्ध; आप signature और template लिखते हो, generator body लिखता है। Logging section का आख़िरी code box देखो।</li>
<li>फ़ायदे: speed, compile-time जाँच कि template के नाम parameters से मिलते हैं, तय <code>EventId</code> और हर message की एक जगह।</li>
<li>क़ीमत: एक-line <code>logger.LogInformation</code> से ज़्यादा ceremony; ज़्यादातर code के लिए सादा logging ठीक है।</li>
<li>Follow-up: "क्या इससे logs की जगह बदलती है?" — नहीं, यह फिर भी <code>ILogger</code> को call करता है, इसलिए providers और filters वैसे ही काम करते हैं।</li>
</ul>`,
        hg: `<ul>
<li>.NET 6 se uplabdh; aap signature aur template likhte ho, generator body likhta hai. Logging section ka aakhri code box dekho.</li>
<li>Fayde: speed, compile-time jaanch ki template ke naam parameters se milte hain, tay <code>EventId</code> aur har message ki ek jagah.</li>
<li>Keemat: ek-line <code>logger.LogInformation</code> se zyada ceremony; zyadatar code ke liye saada logging theek hai.</li>
<li>Follow-up: "kya isse logs ki jagah badalti hai?" — nahi, yeh phir bhi <code>ILogger</code> ko call karta hai, isliye providers aur filters waise hi kaam karte hain.</li>
</ul>`
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
        en: `<ul>
<li>The middleware writes the response itself (status and body) and returns.</li>
<li>Earlier middleware still unwinds: their code after <code>await next()</code> runs and can see the final status code (puzzle 2).</li>
<li>Do not call <code>next</code> after you have written a response unless you know what the rest of the pipeline will do; the response may already have started.</li>
<li>Follow-up: "How is that different from throwing an exception?" — a short-circuit is a planned, normal response; an exception travels back up to the exception handler.</li>
</ul>`,
        hi: `<ul>
<li>Middleware ख़ुद response लिखता है (status और body) और return कर जाता है।</li>
<li>पहले वाले middleware फिर भी लौटते हैं: उनका <code>await next()</code> के बाद का code चलता है और अंतिम status code देख सकता है (puzzle 2)।</li>
<li>Response लिखने के बाद <code>next</code> तब तक मत बुलाओ जब तक पता न हो कि बाक़ी pipeline क्या करेगी; response शुरू हो चुका हो सकता है।</li>
<li>Follow-up: "यह exception फेंकने से कैसे अलग है?" — short-circuit सोचा-समझा, सामान्य response है; exception वापस ऊपर exception handler तक जाता है।</li>
</ul>`,
        hg: `<ul>
<li>Middleware khud response likhta hai (status aur body) aur return kar jaata hai.</li>
<li>Pehle wale middleware phir bhi lautte hain: unka <code>await next()</code> ke baad ka code chalta hai aur antim status code dekh sakta hai (puzzle 2).</li>
<li>Response likhne ke baad <code>next</code> tab tak mat bulao jab tak pata na ho ki baaki pipeline kya karegi; response shuru ho chuka ho sakta hai.</li>
<li>Follow-up: "yeh exception phenkne se kaise alag hai?" — short-circuit socha-samjha, saamanya response hai; exception wapas upar exception handler tak jaata hai.</li>
</ul>`
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
        en: `<ul>
<li><code>Application_Start</code> work (registering routes, DI container) → <code>Program.cs</code>; per-request events (<code>BeginRequest</code>, <code>AuthenticateRequest</code>) → middleware order.</li>
<li>Web.config transforms → <code>appsettings.{Environment}.json</code> and environment variables; <code>ConfigurationManager.AppSettings</code> → <code>IConfiguration</code> / Options.</li>
<li>MVC action filters, controllers and model binding are very similar in ASP.NET Core MVC, so that part of your 6/10 carries over; ASP.NET Core also has no <code>System.Web</code> and is not tied to IIS.</li>
<li>Follow-up: "How would you migrate a big classic app?" — move gradually (shared libraries first, then the web layer), since a rewrite in one step is risky; Microsoft documents incremental migration approaches.</li>
</ul>`,
        hi: `<ul>
<li><code>Application_Start</code> का काम (routes register करना, DI container) → <code>Program.cs</code>; per-request events (<code>BeginRequest</code>, <code>AuthenticateRequest</code>) → middleware का order।</li>
<li>Web.config transforms → <code>appsettings.{Environment}.json</code> और environment variables; <code>ConfigurationManager.AppSettings</code> → <code>IConfiguration</code> / Options।</li>
<li>MVC action filters, controllers और model binding ASP.NET Core MVC में बहुत मिलते-जुलते हैं, इसलिए आपके 6/10 का वह हिस्सा काम आता है; ASP.NET Core में <code>System.Web</code> भी नहीं है और वह IIS से बँधा नहीं है।</li>
<li>Follow-up: "बड़ी classic app कैसे migrate करोगे?" — धीरे-धीरे (पहले shared libraries, फिर web layer), क्योंकि एक बार में rewrite जोखिम भरा है; Microsoft incremental migration के तरीक़े documents में बताता है।</li>
</ul>`,
        hg: `<ul>
<li><code>Application_Start</code> ka kaam (routes register karna, DI container) → <code>Program.cs</code>; per-request events (<code>BeginRequest</code>, <code>AuthenticateRequest</code>) → middleware ka order.</li>
<li>Web.config transforms → <code>appsettings.{Environment}.json</code> aur environment variables; <code>ConfigurationManager.AppSettings</code> → <code>IConfiguration</code> / Options.</li>
<li>MVC action filters, controllers aur model binding ASP.NET Core MVC mein bahut milte-julte hain, isliye aapke 6/10 ka woh hissa kaam aata hai; ASP.NET Core mein <code>System.Web</code> bhi nahi hai aur woh IIS se bandha nahi hai.</li>
<li>Follow-up: "badi classic app kaise migrate karoge?" — dheere-dheere (pehle shared libraries, phir web layer), kyunki ek baar mein rewrite jokhim bhara hai; Microsoft incremental migration ke tareeke documents mein batata hai.</li>
</ul>`
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
        en: `<ul>
<li><code>MapGroup("/v1")</code>: one prefix, shared filters and metadata (for example <code>RequireAuthorization()</code> for the whole group).</li>
<li>Endpoint filters: group filters run first, then the endpoint's own filters, then the handler (puzzle 6 prints this order).</li>
<li><code>TypedResults.Ok(x)</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code>: the return type documents the possible responses and tests can check them without parsing HTTP.</li>
<li>Follow-up: "Where do validation and OpenAPI fit?" — OpenAPI is covered in Day 13; validation can be an endpoint filter or a library you choose, with its trade-offs.</li>
</ul>`,
        hi: `<ul>
<li><code>MapGroup("/v1")</code>: एक prefix, साझा filters और metadata (जैसे पूरे group के लिए <code>RequireAuthorization()</code>)।</li>
<li>Endpoint filters: group filters पहले चलते हैं, फिर endpoint के अपने filters, फिर handler (puzzle 6 यह order print करता है)।</li>
<li><code>TypedResults.Ok(x)</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code>: return type संभव responses document करता है और tests HTTP parse किए बिना उन्हें जाँच सकते हैं।</li>
<li>Follow-up: "validation और OpenAPI कहाँ आते हैं?" — OpenAPI Day 13 में है; validation endpoint filter या आपकी चुनी library हो सकती है, अपने trade-offs के साथ।</li>
</ul>`,
        hg: `<ul>
<li><code>MapGroup("/v1")</code>: ek prefix, saajhe filters aur metadata (jaise poore group ke liye <code>RequireAuthorization()</code>).</li>
<li>Endpoint filters: group filters pehle chalte hain, phir endpoint ke apne filters, phir handler (puzzle 6 yeh order print karta hai).</li>
<li><code>TypedResults.Ok(x)</code> / <code>Results&lt;Ok&lt;T&gt;, NotFound&gt;</code>: return type sambhav responses document karta hai aur tests HTTP parse kiye bina unhe jaanch sakte hain.</li>
<li>Follow-up: "validation aur OpenAPI kahan aate hain?" — OpenAPI Day 13 mein hai; validation endpoint filter ya aapki chuni library ho sakti hai, apne trade-offs ke saath.</li>
</ul>`
      }
    },
    {
      id: "global-exceptions",
      depth: "detailed",
      q: "How do you handle exceptions globally in ASP.NET Core?",
      answer: "Put UseExceptionHandler first in the pipeline, or register an IExceptionHandler (.NET 8+), so it catches errors from later middleware, and log them. Show detailed error pages only in Development.",
      meaning: {
        hi: "UseExceptionHandler को pipeline में सबसे पहले रखो, या IExceptionHandler (.NET 8+) register करो, ताकि वह बाद के middleware के errors पकड़े, और उन्हें log करो। Detailed error pages सिर्फ़ Development में दिखाओ।",
        hg: "UseExceptionHandler ko pipeline mein sabse pehle rakho, ya IExceptionHandler (.NET 8+) register karo, taaki woh baad ke middleware ke errors pakde, aur unhe log karo. Detailed error pages sirf Development mein dikhao."
      },
      explain: {
        en: `<ul>
<li>It sits first because middleware only catches exceptions thrown by components after it.</li>
<li>In Development the developer exception page shows details; in other environments return a safe, generic response and keep the details in logs.</li>
<li>MVC exception filters cover only actions and action filters; the exception handler middleware covers the whole pipeline after it.</li>
<li>Follow-up: "What should the error response look like?" — a consistent JSON shape; ProblemDetails is covered in Day 13.</li>
<li>TL angle: one global handler plus logging with a trace ID beats try/catch blocks in every action.</li>
</ul>`,
        hi: `<ul>
<li>यह सबसे पहले इसलिए आता है क्योंकि middleware सिर्फ़ अपने बाद के components के exceptions पकड़ता है।</li>
<li>Development में developer exception page details दिखाता है; दूसरे environments में सुरक्षित, general response दो और details logs में रखो।</li>
<li>MVC exception filters सिर्फ़ actions और action filters को कवर करते हैं; exception handler middleware अपने बाद की पूरी pipeline को।</li>
<li>Follow-up: "error response कैसा दिखे?" — एक जैसी JSON shape; ProblemDetails Day 13 में है।</li>
<li>TL angle: एक global handler और trace ID के साथ logging, हर action में try/catch से बेहतर है।</li>
</ul>`,
        hg: `<ul>
<li>Yeh sabse pehle isliye aata hai kyunki middleware sirf apne baad ke components ke exceptions pakadta hai.</li>
<li>Development mein developer exception page details dikhata hai; doosre environments mein surakshit, general response do aur details logs mein rakho.</li>
<li>MVC exception filters sirf actions aur action filters ko cover karte hain; exception handler middleware apne baad ki poori pipeline ko.</li>
<li>Follow-up: "error response kaisa dikhe?" — ek jaisi JSON shape; ProblemDetails Day 13 mein hai.</li>
<li>TL angle: ek global handler aur trace ID ke saath logging, har action mein try/catch se behtar hai.</li>
</ul>`
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
        en: `<ul>
<li><code>dotnet user-secrets set</code> stores values in your user profile and the configuration system reads them in Development.</li>
<li>Production options: environment variables (set by the host or orchestrator), or a vault provider added to the configuration system, so the app code still reads <code>IConfiguration</code>.</li>
<li>Because later providers win, a secret in an environment variable overrides the same key in appsettings.json.</li>
<li>Follow-up: "What if a secret was committed by mistake?" — rotate it; deleting it from the latest commit does not remove it from history.</li>
</ul>`,
        hi: `<ul>
<li><code>dotnet user-secrets set</code> values को आपके user profile में रखता है और configuration system उन्हें Development में पढ़ता है।</li>
<li>Production के विकल्प: environment variables (host या orchestrator set करता है), या configuration system में जुड़ा vault provider, ताकि app code फिर भी <code>IConfiguration</code> पढ़े।</li>
<li>बाद वाले providers जीतते हैं, इसलिए environment variable में रखा secret appsettings.json की उसी key को override करता है।</li>
<li>Follow-up: "ग़लती से secret commit हो गया तो?" — उसे rotate करो; आख़िरी commit से हटाने से वह history से नहीं हटता।</li>
</ul>`,
        hg: `<ul>
<li><code>dotnet user-secrets set</code> values ko aapke user profile mein rakhta hai aur configuration system unhe Development mein padhta hai.</li>
<li>Production ke vikalp: environment variables (host ya orchestrator set karta hai), ya configuration system mein juda vault provider, taaki app code phir bhi <code>IConfiguration</code> padhe.</li>
<li>Baad wale providers jeette hain, isliye environment variable mein rakha secret appsettings.json ki usi key ko override karta hai.</li>
<li>Follow-up: "galti se secret commit ho gaya to?" — use rotate karo; aakhri commit se hatane se woh history se nahi hatta.</li>
</ul>`
      }
    }
  ],
  puzzles: [
    {
      id: "middleware-before-after-run",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
var app = builder.Build();

app.Use(async (context, next) =>
{
    Console.WriteLine("A before");
    await next();
    Console.WriteLine("A after");
});
app.Use(async (context, next) =>
{
    Console.WriteLine("B before");
    await next();
    Console.WriteLine("B after");
});
app.Run(async context =>
{
    Console.WriteLine("terminal");
    await context.Response.WriteAsync("done");
});
app.Use(async (context, next) =>
{
    Console.WriteLine("C runs");
    await next();
});

await app.StartAsync();
var client = app.GetTestClient();
Console.WriteLine("client got: " + await client.GetStringAsync("/"));
await app.StopAsync();`,
      answer: "A before\nB before\nterminal\nB after\nA after\nclient got: done",
      explain: {
        en: "<p>Each <code>Use</code> prints \"before\", calls <code>next</code>, then prints \"after\". So the request goes in as A, B, terminal, and the \"after\" lines come out in reverse: B, then A. <code>Run</code> is terminal: it writes the response and never calls <code>next</code>, so the middleware registered after it (\"C runs\") is never reached, even though it is in the file. The client gets \"done\" last because it waits for the whole pipeline. Interview point: order of registration = order going in, reverse order coming out.</p>",
        hi: "<p>हर <code>Use</code> \"before\" print करता है, <code>next</code> बुलाता है, फिर \"after\" print करता है। इसलिए request A, B, terminal के क्रम में अंदर जाती है और \"after\" lines उल्टे क्रम में निकलती हैं: पहले B, फिर A। <code>Run</code> terminal है: वह response लिखता है और <code>next</code> कभी नहीं बुलाता, इसलिए उसके बाद register हुआ middleware (\"C runs\") कभी नहीं पहुँचता, भले ही वह file में लिखा हो। Client को \"done\" सबसे आख़िर में मिलता है क्योंकि वह पूरी pipeline का इंतज़ार करता है। Interview point: registration का order = अंदर जाने का order, बाहर आने का उल्टा।</p>",
        hg: "<p>Har <code>Use</code> \"before\" print karta hai, <code>next</code> bulata hai, phir \"after\" print karta hai. Isliye request A, B, terminal ke kram mein andar jaati hai aur \"after\" lines ulte kram mein nikalti hain: pehle B, phir A. <code>Run</code> terminal hai: woh response likhta hai aur <code>next</code> kabhi nahi bulata, isliye uske baad register hua middleware (\"C runs\") kabhi nahi pahunchta, bhale hi woh file mein likha ho. Client ko \"done\" sabse aakhir mein milta hai kyunki woh poori pipeline ka intezaar karta hai. Interview point: registration ka order = andar jaane ka order, bahar aane ka ulta.</p>"
      }
    },
    {
      id: "short-circuit-unwinds",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
var app = builder.Build();

app.Use(async (context, next) =>
{
    Console.WriteLine("outer before");
    await next();
    Console.WriteLine("outer after, status " + context.Response.StatusCode);
});
app.Use(async (context, next) =>
{
    if (!context.Request.Headers.ContainsKey("X-Key"))
    {
        Console.WriteLine("gate: blocked");
        context.Response.StatusCode = 401;
        await context.Response.WriteAsync("no key");
        return;
    }
    Console.WriteLine("gate: allowed");
    await next();
});
app.Use(async (context, next) =>
{
    Console.WriteLine("audit");
    await next();
});
app.Run(context => context.Response.WriteAsync("secret data"));

await app.StartAsync();
var client = app.GetTestClient();

var denied = await client.GetAsync("/");
Console.WriteLine($"{(int)denied.StatusCode} {await denied.Content.ReadAsStringAsync()}");

var request = new HttpRequestMessage(HttpMethod.Get, "/");
request.Headers.Add("X-Key", "1");
var allowed = await client.SendAsync(request);
Console.WriteLine($"{(int)allowed.StatusCode} {await allowed.Content.ReadAsStringAsync()}");
await app.StopAsync();`,
      answer: "outer before\ngate: blocked\nouter after, status 401\n401 no key\nouter before\ngate: allowed\naudit\nouter after, status 200\n200 secret data",
      explain: {
        en: "<p>Request 1 has no <code>X-Key</code> header. The gate writes 401 and <b>returns without calling next</b>, so \"audit\" and the endpoint never run. The outer middleware is before the gate, so it still gets control back and prints its \"after\" line with status 401. Request 2 has the header, so the gate calls <code>next</code>, \"audit\" runs, the endpoint answers 200, and the outer \"after\" shows 200. Short-circuiting skips the <b>rest</b> of the chain, not the middleware that came before it. In real apps the 401 would come from the authorization step, as covered above.</p>",
        hi: "<p>Request 1 में <code>X-Key</code> header नहीं है। Gate 401 लिखता है और <b>next बुलाए बिना return</b> कर जाता है, इसलिए \"audit\" और endpoint कभी नहीं चलते। Outer middleware gate से पहले है, इसलिए उसे control वापस मिलता है और वह status 401 के साथ अपनी \"after\" line print करता है। Request 2 में header है, इसलिए gate <code>next</code> बुलाता है, \"audit\" चलता है, endpoint 200 देता है, और outer \"after\" में 200 दिखता है। Short-circuit chain का <b>बाक़ी हिस्सा</b> skip करता है, उससे पहले आए middleware को नहीं। असली apps में 401 ऊपर बताए अनुसार authorization step से आएगा।</p>",
        hg: "<p>Request 1 mein <code>X-Key</code> header nahi hai. Gate 401 likhta hai aur <b>next bulaye bina return</b> kar jaata hai, isliye \"audit\" aur endpoint kabhi nahi chalte. Outer middleware gate se pehle hai, isliye use control wapas milta hai aur woh status 401 ke saath apni \"after\" line print karta hai. Request 2 mein header hai, isliye gate <code>next</code> bulata hai, \"audit\" chalta hai, endpoint 200 deta hai, aur outer \"after\" mein 200 dikhta hai. Short-circuit chain ka <b>baaki hissa</b> skip karta hai, usse pehle aaye middleware ko nahi. Asli apps mein 401 upar bataye anusaar authorization step se aayega.</p>"
      }
    },
    {
      id: "map-mapwhen-usewhen",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
var app = builder.Build();

app.UseWhen(
    context => context.Request.Path.StartsWithSegments("/api"),
    branch => branch.Use(async (context, next) =>
    {
        Console.WriteLine("  api-only middleware ran");
        await next();
    }));
app.Map("/admin", branch => branch.Run(context =>
    context.Response.WriteAsync($"admin base={context.Request.PathBase} path={context.Request.Path}")));
app.MapWhen(
    context => context.Request.Query.ContainsKey("debug"),
    branch => branch.Run(context => context.Response.WriteAsync("debug branch")));
app.Run(context => context.Response.WriteAsync("main " + context.Request.Path));

await app.StartAsync();
var client = app.GetTestClient();
foreach (var url in new[] { "/api/ping", "/admin/users", "/home?debug=1", "/api/stats?debug=1" })
{
    Console.WriteLine(url);
    Console.WriteLine("  -> " + await client.GetStringAsync(url));
}
await app.StopAsync();`,
      answer: "/api/ping\n  api-only middleware ran\n  -> main /api/ping\n/admin/users\n  -> admin base=/admin path=/users\n/home?debug=1\n  -> debug branch\n/api/stats?debug=1\n  api-only middleware ran\n  -> debug branch",
      explain: {
        en: "<p><b>/api/ping</b>: <code>UseWhen</code> matches, runs its middleware, then the request <b>rejoins</b> the main pipeline and reaches the final <code>Run</code> (\"main\"). <b>/admin/users</b>: <code>Map</code> branches away; the matched prefix moves to <code>PathBase</code> and the branch sees only <code>/users</code>. <b>/home?debug=1</b>: the <code>MapWhen</code> predicate is true, so the debug branch answers and never rejoins. <b>/api/stats?debug=1</b> shows the difference: <code>UseWhen</code> ran first (it is registered first and rejoins), then <code>MapWhen</code> took the request to its branch, so the main <code>Run</code> was skipped. The first matching branch decides, so branch order matters too.</p>",
        hi: "<p><b>/api/ping</b>: <code>UseWhen</code> match होता है, अपना middleware चलाता है, फिर request main pipeline में <b>वापस जुड़ती है</b> और आख़िरी <code>Run</code> (\"main\") तक पहुँचती है। <b>/admin/users</b>: <code>Map</code> अलग branch बनाता है; matched prefix <code>PathBase</code> में चला जाता है और branch को सिर्फ़ <code>/users</code> दिखता है। <b>/home?debug=1</b>: <code>MapWhen</code> का predicate true है, इसलिए debug branch जवाब देता है और वापस नहीं जुड़ता। <b>/api/stats?debug=1</b> फ़र्क़ दिखाता है: <code>UseWhen</code> पहले चला (वह पहले register है और वापस जुड़ता है), फिर <code>MapWhen</code> request को अपनी branch में ले गया, इसलिए main <code>Run</code> skip हो गया। पहला matching branch फ़ैसला करता है, इसलिए branches का order भी मायने रखता है।</p>",
        hg: "<p><b>/api/ping</b>: <code>UseWhen</code> match hota hai, apna middleware chalata hai, phir request main pipeline mein <b>wapas judti hai</b> aur aakhri <code>Run</code> (\"main\") tak pahunchti hai. <b>/admin/users</b>: <code>Map</code> alag branch banata hai; matched prefix <code>PathBase</code> mein chala jaata hai aur branch ko sirf <code>/users</code> dikhta hai. <b>/home?debug=1</b>: <code>MapWhen</code> ka predicate true hai, isliye debug branch jawab deta hai aur wapas nahi judta. <b>/api/stats?debug=1</b> fark dikhata hai: <code>UseWhen</code> pehle chala (woh pehle register hai aur wapas judta hai), phir <code>MapWhen</code> request ko apni branch mein le gaya, isliye main <code>Run</code> skip ho gaya. Pehla matching branch faisla karta hai, isliye branches ka order bhi matter karta hai.</p>"
      }
    },
    {
      id: "config-last-source-wins",
      frameworks: ["aspnetcore"],
      src: `using Microsoft.Extensions.Configuration;

Environment.SetEnvironmentVariable("SHOP_Mode", "env");
Environment.SetEnvironmentVariable("SHOP_Db__Host", "env-host");

var defaults = new Dictionary<string, string?>
{
    ["Mode"] = "defaults",
    ["Color"] = "blue",
    ["Db:Host"] = "localhost",
    ["Db:Port"] = "5432"
};
var cliArgs = new[] { "--Mode=cli", "--color=red" };

var a = new ConfigurationBuilder()
    .AddInMemoryCollection(defaults)
    .AddEnvironmentVariables("SHOP_")
    .AddCommandLine(cliArgs)
    .Build();
Console.WriteLine($"A: {a["Mode"]} {a["Color"]} {a["Db:Host"]} {a["Db:Port"]}");

var b = new ConfigurationBuilder()
    .AddCommandLine(cliArgs)
    .AddEnvironmentVariables("SHOP_")
    .AddInMemoryCollection(defaults)
    .Build();
Console.WriteLine($"B: {b["Mode"]} {b["Color"]} {b.GetSection("Db")["Host"]} {b["Missing"] ?? "null"}");`,
      answer: "A: cli red env-host 5432\nB: defaults blue localhost null",
      explain: {
        en: "<p>Sources added <b>later override earlier ones</b>. Builder A: in-memory defaults, then environment variables (prefix <code>SHOP_</code> is stripped; <code>Db__Host</code> becomes <code>Db:Host</code>), then the command line. So <code>Mode</code> is \"cli\" (it beats \"env\" and \"defaults\"); <code>--color=red</code> replaces <code>Color</code> because keys are case-insensitive; <code>Db:Host</code> comes from the environment; <code>Db:Port</code> exists only in the defaults. Builder B adds the same sources in the opposite order, so the in-memory defaults are added last and win everywhere; a key nobody set is just <code>null</code>. This is why the real defaults put command line and environment variables last. The default web host does the same with appsettings files first.</p>",
        hi: "<p><b>बाद में जोड़े गए sources पहले वालों को override करते हैं</b>। Builder A: in-memory defaults, फिर environment variables (prefix <code>SHOP_</code> हट जाता है; <code>Db__Host</code> बनता है <code>Db:Host</code>), फिर command line। इसलिए <code>Mode</code> \"cli\" है (वह \"env\" और \"defaults\" दोनों को हराता है); <code>--color=red</code> <code>Color</code> को बदल देता है क्योंकि keys case-insensitive हैं; <code>Db:Host</code> environment से आता है; <code>Db:Port</code> सिर्फ़ defaults में है। Builder B वही sources उल्टे क्रम में जोड़ता है, इसलिए in-memory defaults आख़िर में जुड़ते हैं और हर जगह जीतते हैं; जो key किसी ने set नहीं की वह बस <code>null</code> है। इसीलिए असली defaults में command line और environment variables आख़िर में रखे जाते हैं। Default web host भी यही करता है, appsettings files सबसे पहले।</p>",
        hg: "<p><b>Baad mein jode gaye sources pehle walon ko override karte hain</b>. Builder A: in-memory defaults, phir environment variables (prefix <code>SHOP_</code> hat jaata hai; <code>Db__Host</code> banta hai <code>Db:Host</code>), phir command line. Isliye <code>Mode</code> \"cli\" hai (woh \"env\" aur \"defaults\" dono ko haraata hai); <code>--color=red</code> <code>Color</code> ko badal deta hai kyunki keys case-insensitive hain; <code>Db:Host</code> environment se aata hai; <code>Db:Port</code> sirf defaults mein hai. Builder B wahi sources ulte kram mein jodta hai, isliye in-memory defaults aakhir mein judte hain aur har jagah jeette hain; jo key kisi ne set nahi ki woh bas <code>null</code> hai. Isiliye asli defaults mein command line aur environment variables aakhir mein rakhe jaate hain. Default web host bhi yahi karta hai, appsettings files sabse pehle.</p>"
      }
    },
    {
      id: "filter-order-controller",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
builder.Services.AddControllers(options =>
{
    options.Filters.Add(new AuthStep());
    options.Filters.Add(new ActionStep("global"));
});
var app = builder.Build();
app.MapControllers();

await app.StartAsync();
var client = app.GetTestClient();
Console.WriteLine("client got: " + await client.GetStringAsync("/demo"));
await app.StopAsync();

[Route("demo")]
[ResourceStep]
public class DemoController : ControllerBase
{
    [HttpGet]
    [ActionStep("action")]
    [ResultStep]
    public IActionResult Get()
    {
        Console.WriteLine("action body");
        return Ok("hi");
    }
}

class AuthStep : IAuthorizationFilter
{
    public void OnAuthorization(AuthorizationFilterContext context) => Console.WriteLine("authorization");
}

class ResourceStep : Attribute, IResourceFilter
{
    public void OnResourceExecuting(ResourceExecutingContext context) => Console.WriteLine("resource before");
    public void OnResourceExecuted(ResourceExecutedContext context) => Console.WriteLine("resource after");
}

class ActionStep(string name) : Attribute, IActionFilter
{
    public void OnActionExecuting(ActionExecutingContext context) => Console.WriteLine($"action filter {name} before");
    public void OnActionExecuted(ActionExecutedContext context) => Console.WriteLine($"action filter {name} after");
}

class ResultStep : Attribute, IResultFilter
{
    public void OnResultExecuting(ResultExecutingContext context) => Console.WriteLine("result before");
    public void OnResultExecuted(ResultExecutedContext context) => Console.WriteLine("result after");
}`,
      answer: "authorization\nresource before\naction filter global before\naction filter action before\naction body\naction filter action after\naction filter global after\nresult before\nresult after\nresource after\nclient got: hi",
      explain: {
        en: "<p>The order is the filter pipeline in action. <b>Authorization</b> first. Then the <b>resource</b> filter on the controller (it wraps everything after it, so its \"after\" line comes last). Then model binding and the <b>action filters</b>: global first, then the action-level one; after the method runs they unwind in reverse (action, then global). Then the <b>result</b> filter around the result execution, and finally the resource filter's \"after\". Nothing here is an exception filter because nothing throws. The filter instances added with <code>options.Filters.Add</code> are global; attributes sit on the controller or action.</p>",
        hi: "<p>यह filter pipeline का असली काम है। सबसे पहले <b>authorization</b>। फिर controller का <b>resource</b> filter (वह उसके बाद की हर चीज़ को लपेटता है, इसलिए उसकी \"after\" line सबसे आख़िर में आती है)। फिर model binding और <b>action filters</b>: पहले global, फिर action-level; method चलने के बाद वे उल्टे क्रम में खुलते हैं (action, फिर global)। फिर result execution के आसपास <b>result</b> filter, और आख़िर में resource filter का \"after\"। यहाँ कोई exception filter नहीं है क्योंकि कुछ throw नहीं होता। <code>options.Filters.Add</code> से जोड़े गए filter instances global हैं; attributes controller या action पर लगते हैं।</p>",
        hg: "<p>Yeh filter pipeline ka asli kaam hai. Sabse pehle <b>authorization</b>. Phir controller ka <b>resource</b> filter (woh uske baad ki har cheez ko lapetata hai, isliye uski \"after\" line sabse aakhir mein aati hai). Phir model binding aur <b>action filters</b>: pehle global, phir action-level; method chalne ke baad woh ulte kram mein khulte hain (action, phir global). Phir result execution ke aaspaas <b>result</b> filter, aur aakhir mein resource filter ka \"after\". Yahan koi exception filter nahi hai kyunki kuch throw nahi hota. <code>options.Filters.Add</code> se jode gaye filter instances global hain; attributes controller ya action par lagte hain.</p>"
      }
    },
    {
      id: "endpoint-filter-order",
      frameworks: ["aspnetcore"],
      packages: ["Microsoft.AspNetCore.TestHost"],
      src: `using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder();
builder.Logging.ClearProviders();
builder.WebHost.UseTestServer();
var app = builder.Build();

var v1 = app.MapGroup("/v1");
v1.AddEndpointFilter(async (context, next) =>
{
    Console.WriteLine("group filter in");
    var result = await next(context);
    Console.WriteLine("group filter out");
    return result;
});
v1.MapGet("/ping", () =>
    {
        Console.WriteLine("handler");
        return "pong";
    })
    .AddEndpointFilter(async (context, next) =>
    {
        Console.WriteLine("endpoint filter in");
        var result = await next(context);
        Console.WriteLine("endpoint filter out");
        return result;
    });

await app.StartAsync();
var client = app.GetTestClient();
Console.WriteLine("client got: " + await client.GetStringAsync("/v1/ping"));
await app.StopAsync();`,
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
      "Program.cs flow: register services, build the app, add middleware in order, map endpoints, run.",
      "Middleware order is the order of the calls: code before next runs in order, code after next runs in reverse.",
      "Use may call next, Run is terminal, Map and MapWhen branch away for good, and UseWhen branches and rejoins.",
      "Short-circuit means not calling next; the middleware before it still runs its after-code.",
      "UseAuthentication sets HttpContext.User and calls next; the authorization step answers 401 or 403.",
      "With WebApplication.CreateBuilder the last configuration source wins: appsettings, environment file, user secrets (Development), environment variables, command line.",
      "The environment defaults to Production; ASPNETCORE_ENVIRONMENT selects Development or Staging.",
      "Log with ILogger<T> and message templates, not string interpolation.",
      "A convention middleware is created once, so take scoped services as InvokeAsync parameters.",
      "MVC filter order: authorization, resource, action, result; exception filters handle errors from actions and action filters.",
      "Middleware sees every request; filters run only inside MVC and know the action.",
      "Minimal APIs and controllers are both production-ready; choose by structure and team needs."
    ],
    meaning: {
      hi: [
        "Program.cs का flow: services register करो, app build करो, middleware order में जोड़ो, endpoints map करो, run।",
        "Middleware का order calls का order है: next से पहले का code क्रम में, next के बाद का code उल्टे क्रम में चलता है।",
        "Use next बुला सकता है, Run terminal है, Map और MapWhen हमेशा के लिए अलग branch बनाते हैं, और UseWhen branch बनाकर वापस जुड़ता है।",
        "Short-circuit का मतलब next न बुलाना; उससे पहले वाला middleware अपना after-code फिर भी चलाता है।",
        "UseAuthentication HttpContext.User set करके next बुलाता है; authorization step 401 या 403 देता है।",
        "WebApplication.CreateBuilder के साथ आख़िरी configuration source जीतता है: appsettings, environment file, user secrets (Development), environment variables, command line।",
        "Environment का default Production है; ASPNETCORE_ENVIRONMENT से Development या Staging चुनते हैं।",
        "ILogger<T> और message templates से log करो, string interpolation से नहीं।",
        "Convention middleware एक बार बनता है, इसलिए scoped services को InvokeAsync के parameters में लो।",
        "MVC filter order: authorization, resource, action, result; exception filters actions और action filters के errors संभालते हैं।",
        "Middleware हर request देखता है; filters सिर्फ़ MVC के अंदर चलते हैं और action को जानते हैं।",
        "Minimal APIs और controllers दोनों production-ready हैं; structure और team की ज़रूरत से चुनो।"
      ],
      hg: [
        "Program.cs ka flow: services register karo, app build karo, middleware order mein jodo, endpoints map karo, run.",
        "Middleware ka order calls ka order hai: next se pehle ka code kram mein, next ke baad ka code ulte kram mein chalta hai.",
        "Use next bula sakta hai, Run terminal hai, Map aur MapWhen hamesha ke liye alag branch banate hain, aur UseWhen branch banakar wapas judta hai.",
        "Short-circuit ka matlab next na bulana; usse pehle wala middleware apna after-code phir bhi chalata hai.",
        "UseAuthentication HttpContext.User set karke next bulata hai; authorization step 401 ya 403 deta hai.",
        "WebApplication.CreateBuilder ke saath aakhri configuration source jeetta hai: appsettings, environment file, user secrets (Development), environment variables, command line.",
        "Environment ka default Production hai; ASPNETCORE_ENVIRONMENT se Development ya Staging chunte hain.",
        "ILogger<T> aur message templates se log karo, string interpolation se nahi.",
        "Convention middleware ek baar banta hai, isliye scoped services ko InvokeAsync ke parameters mein lo.",
        "MVC filter order: authorization, resource, action, result; exception filters actions aur action filters ke errors sambhalte hain.",
        "Middleware har request dekhta hai; filters sirf MVC ke andar chalte hain aur action ko jaante hain.",
        "Minimal APIs aur controllers dono production-ready hain; structure aur team ki zaroorat se chuno."
      ]
    }
  }
};
